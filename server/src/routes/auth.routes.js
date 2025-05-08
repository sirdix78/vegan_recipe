const router = require("express").Router();
const bcryptjs = require("bcryptjs");
const jwt = require("jsonwebtoken");
const { PrismaClient } = require("@prisma/client");
const { isAuthenticated } = require("../middlewares/jwt.middleware");

const prisma = new PrismaClient();

// Signup route
router.post("/signup", async (req, res) => {
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
router.post("/login", async (req, res) => {
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
router.get("/profile/:userId", async (req, res) => {
  try {
    const user = await prisma.user.findUnique({
      where: { id: req.params.userId },
      select: { id: true, email: true, username: true }, // exclude password
    });

    if (!user) return res.status(404).json({ message: "User not found" });

    res.status(200).json(user);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Error fetching profile" });
  }
});

// Token verify route
router.get("/verify", isAuthenticated, (req, res) => {
  res.status(200).json({ message: "Token valid", payload: req.payload });
});

module.exports = router;
