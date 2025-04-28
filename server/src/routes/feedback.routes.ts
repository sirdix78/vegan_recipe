import express, { Request, Response } from "express";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();
const router = express.Router();

// Get all feedback for a specific recipe
router.get("/recipe/:recipeId", async (req: Request, res: Response) => {
  const { recipeId } = req.params;

  const feedbacks = await prisma.feedback.findMany({
    where: { recipe_id: Number(recipeId) },
  });

  res.json(feedbacks);
});

// Get a single feedback by id

router.get("/:id", async (req: Request<{ id: string }>, res: Response) => {
    const { id } = req.params;
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
  

// Create a new feedback
router.post("/", async (req: Request, res: Response) => {
  const { recipe_id, reviewer_name, rating, comment } = req.body;

  const newFeedback = await prisma.feedback.create({
    data: {
      recipe_id,
      reviewer_name,
      rating,
      comment,
    },
  });

  res.status(201).json(newFeedback);
});

// Update a feedback
router.put("/:id", async (req: Request, res: Response) => {
  const { id } = req.params;
  const { reviewer_name, rating, comment } = req.body;

  const updatedFeedback = await prisma.feedback.update({
    where: { id: Number(id) },
    data: {
      reviewer_name,
      rating,
      comment,
    },
  });

  res.json(updatedFeedback);
});

// Delete a feedback
router.delete("/:id", async (req: Request, res: Response) => {
  const { id } = req.params;

  const deletedFeedback = await prisma.feedback.delete({
    where: { id: Number(id) },
  });

  res.json(deletedFeedback);
});

export default router;