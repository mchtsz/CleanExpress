import express from "express";
import { join } from "path";
import { PrismaClient, Role } from "@prisma/client";
import crypto from "crypto"; // will use to hash passwords
import cookieParser from "cookie-parser";

// create express app and prisma client
const app = express();
const prisma = new PrismaClient();

// paths for middleware
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
app.use(express.static(join(__dirname, "nuxt-app/dist")));

app.get("*", (req, res) => {
  res.sendFile(join(__dirname, "nuxt-app/dist", "index.html"));
});

app.listen(3000, () => {
  console.log(`Server running on port 3000`);
});
