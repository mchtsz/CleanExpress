import express from "express";
import { join } from "path";
import { PrismaClient, Role } from "@prisma/client";
import crypto from "crypto";
import cookieParser from "cookie-parser";

const app = express();
const prisma = new PrismaClient();

const adminPaths = ["/admin"];
const restrictedPaths = ["/", ...adminPaths];

// important for reading req.body and using static
app.use(cookieParser());

app.use(async (req, res, next) => {
  // Exclude '/register' and '/' routes
  const path = req.path;

  if (!restrictedPaths.includes(path)) return next(); // if path is not restricted, continue

  const token = req.cookies.token; // get token from cookie

  if (!token) return res.redirect("/login"); // if no token, redirect to login

  // finds user with token
  const user = await prisma.user.findFirst({
    where: {
      token: token,
    },
  });

  if (!user) return res.redirect("/login"); // if no user return to login

  // if they ask for admin path and they're not admin, redirect to welcome
  if (adminPaths.includes(path) && !Role.ADMIN) {
    return res.redirect("/");
  }

  next(); // if everything works let them through
});

app.use(express.urlencoded({ extended: false }));
app.use(express.static(join(__dirname, "public")));
app.use(express.static(join(__dirname, "pages")));

function getRoute(file: string) {
  return join(__dirname, "pages", file);
}

const pages = {
  index: "index.html",
  login: "login.html",
  register: "register.html"
};

app.get("/", (req, res) => {
  res.sendFile(getRoute(pages.index));
});

app.get("/login", (req, res) => {
  res.sendFile(getRoute(pages.login));
});

app.get("/register", (req, res) => {
  res.sendFile(getRoute(pages.register));
});

app.listen(3000, () => {
  console.log(`Server running on port 3000`);
});
