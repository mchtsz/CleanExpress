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

// function to create an admin
async function createAdmin() {
  const admin = await prisma.user.create({
    data: {
      mail: "admin@test.com",
      password: crypto.createHash("sha256").update("Passord01").digest("hex"),
      role: Role.ADMIN,
      personalInfo: {
        create: {
          firstname: "admin",
          lastname: "admin",
          address: "admin street",
          phone: "123456789",
        },
      },
    },
  });

  console.log(`${admin.mail} has been created`);

  return admin;
}

// post for login
app.post("/login", async (req, res) => {
  const { mail, password } = req.body;

  const userData = await prisma.user.findFirst({
    where: {
      mail: mail,
      password: crypto.createHash("sha256").update(password).digest("hex"),
    },
  });

  if (userData) {
    const { role, token } = userData;
    res.cookie("token", token);

    switch (role) {
      case Role.ADMIN:
        res.redirect("/admin");
        break;
      case Role.CUSTOMER:
        res.redirect("/");
        break;
    }
  } else {
    res.redirect("/");
  }
});

app.use(express.urlencoded({ extended: false }));
app.use(express.static(join(__dirname, "nuxtapp/dist")));

app.listen(3000, () => {
  console.log(`Server running on port 3000`);
});
