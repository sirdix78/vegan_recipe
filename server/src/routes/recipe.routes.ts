import express, { Request, Response } from "express";
const prisma= require ("../db");
const router = require("express").Router();

// Get all recipes
router.get("/", async (req: Request, res: Response) => {
  const recipes = await prisma.recipe.findMany({
    include: { feedback: true },
  });
  res.json(recipes);
});

// Get a single recipe by id
router.get("/:id", async (req: Request<{ id: string }>, res: Response) => {
    const { id } = req.params;
  
    if (isNaN(Number(id))) {
      res.status(400).json({ message: "Invalid ID format" });
      return;  
    }
  
    const recipe = await prisma.recipe.findUnique({
      where: { id: Number(id) },
      include: { feedback: true },
    });
  
    if (!recipe) {
      res.status(404).json({ message: "Recipe not found" });
      return; 
    }
  
    res.json(recipe); 
    return;  
  });

// Create a new recipe
router.post("/", async (req: Request, res: Response) => {
  const { title, image, description, ingredients, instructions, category, } = req.body;
  if (!title || !category) {
    return res.status(400).json({ message: "Title and category are required" });
  }

  const allowedCategories = ["Salads", "Soups", "Dishes", "Desserts", "Drinks"];
  if (!allowedCategories.includes(category)) {
    return res.status(400).json({ message: "Invalid category" });
  }

  const newRecipe = await prisma.recipe.create({
    data: {
      title,
      image,
      description,
      ingredients,
      instructions,
      category,
  
    },
  });

  res.status(201).json(newRecipe);
});

// Update a recipe
router.put("/:id", async (req: Request, res: Response) => {
  const { id } = req.params;
  const { title, image, description, ingredients, instructions, category, } = req.body;

  const updatedRecipe = await prisma.recipe.update({
    where: { id: Number(id) },
    data: {
      title,
      image,
      description,
      ingredients,
      instructions,
      category,
    },
  });

  res.json(updatedRecipe);
});

// Delete a recipe
router.delete("/:id", async (req: Request, res: Response) => {
  const { id } = req.params;

  const deletedRecipe = await prisma.recipe.delete({
    where: { id: Number(id) },
  });

  res.json(deletedRecipe);
});

module.exports = router;