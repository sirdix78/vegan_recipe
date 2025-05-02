"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const prisma = require("../db");
const router = require("express").Router();
// Get all feedback for a specific recipe
router.get("/recipe/:recipeId", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { recipeId } = req.params;
    const feedbacks = yield prisma.feedback.findMany({
        where: { recipe_id: Number(recipeId) },
    });
    res.json(feedbacks);
}));
// Get a single feedback by id
router.get("/:id", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params;
    const recipe = yield prisma.recipe.findUnique({
        where: { id: Number(id) },
        include: { feedback: true },
    });
    if (!recipe) {
        res.status(404).json({ message: "Recipe not found" });
        return;
    }
    res.json(recipe);
    return;
}));
// Create a new feedback
router.post("/recipe/:recipeId", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { recipeId } = req.params;
    const { reviewer_name, rating, comment } = req.body;
    const newFeedback = yield prisma.feedback.create({
        data: {
            recipe_id: Number(recipeId),
            reviewer_name,
            rating,
            comment,
        },
    });
    res.status(201).json(newFeedback);
}));
// Update a feedback
router.put("/:id", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params;
    const { reviewer_name, rating, comment } = req.body;
    const updatedFeedback = yield prisma.feedback.update({
        where: { id: Number(id) },
        data: {
            reviewer_name,
            rating,
            comment,
        },
    });
    res.json(updatedFeedback);
}));
// Delete a feedback
router.delete("/:id", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params;
    const deletedFeedback = yield prisma.feedback.delete({
        where: { id: Number(id) },
    });
    res.json(deletedFeedback);
}));
module.exports = router;
