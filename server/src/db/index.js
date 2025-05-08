// db/index.js

const { PrismaClient } = require("../generated/prisma/client");

const prisma = new PrismaClient();

async function getUserFromToken(decoded, res, req, next) {
  try {
    const user = await prisma.user.findUnique({ where: { id: decoded.id } });
    if (!user) return res.status(401).json({ errorMessage: "User not found" });

    req.user = user;
    next();
  } catch (error) {
    console.error("Error fetching user:", error);
    return res.status(500).json({ errorMessage: "Internal server error" });
  }
}

module.exports = prisma;
