import { Request, Response } from "express";
const express = require("express");
const bcryptjs = require("bcryptjs");
const jwt = require("jsonwebtoken");
const prisma = require("../db");
const { isAuthenticated } = require("../middlewares/jwt.middleware");

const router = express.Router();

// Signup route
router.post("/signup", async (req: Request, res: Response) => {
  try {
    const { email, password, username } = req.body;

    const existingUser = await prisma.user.findUnique({ where: { email } });
    if (existingUser) {
      return res.status(400).json({ message: "Email already in use" });
    }

    const salt = bcryptjs.genSaltSync(12);
    const hashedPassword = bcryptjs.hashSync(password, salt);

    const newUser = await prisma.user.create({
      data: {
        email,
        username,
        password: hashedPassword,
      },
    });

    res.status(201).json({ message: "User created", userId: newUser.id });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Sign up failed" });
  }
});

// Login route
router.post("/login", async (req: Request, res: Response) => {
  try {
    const { email, password } = req.body;

    const foundUser = await prisma.user.findUnique({ where: { email } });
    if (!foundUser) {
      return res.status(400).json({ errorMessage: "Email not found" });
    }

    const passwordsMatch = bcryptjs.compareSync(password, foundUser.password);
    if (!passwordsMatch) {
      return res.status(400).json({ errorMessage: "Password incorrect" });
    }

    const data = { id: foundUser.id, username: foundUser.username };
    const authToken = jwt.sign(data, process.env.TOKEN_SECRET, {
      algorithm: "HS256",
      expiresIn: "6h",
    });

    res.status(200).json({ message: "Logged in", authToken });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Login failed" });
  }
});

// Profile route
router.get("/profile/:userId", async (req: Request, res: Response) => {
  try {
    const user = await prisma.user.findUnique({
      where: { id: req.params.userId },
      select: { id: true, email: true, username: true },
    });

    if (!user) return res.status(404).json({ message: "User not found" });

    res.status(200).json(user);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Error fetching profile" });
  }
});

// Example of user data retrieval
// router.get('/profile/:userId', async (req: Request, res: Response) => {
//   const { userId } = req.params;

//   try {
//     // Fetch the user profile from your database by userId
//     const user = await User.findById(userId);
//     if (!user) {
//       return res.status(404).json({ message: "User not found" });
//     }

//     res.json(user);
//   } catch (err) {
//     console.error(err);
//     res.status(500).json({ message: "Server error" });
//   }
// });

// Token verify route
router.get("/verify", isAuthenticated, (req: Request, res: Response) => {
  res
    .status(200)
    .json({ message: "Token valid", payload: (req as any).payload });
});

module.exports = router;
