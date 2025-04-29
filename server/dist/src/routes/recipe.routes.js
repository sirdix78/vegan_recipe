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
// Get all recipes
router.get("/", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const recipes = yield prisma.recipe.findMany({
        include: { feedback: true },
    });
    res.json(recipes);
}));
// Get a single recipe by id
router.get("/:id", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params;
    if (isNaN(Number(id))) {
        res.status(400).json({ message: "Invalid ID format" });
        return;
    }
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
// Create a new recipe
router.post("/", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { title, image, description, ingredients, instructions, category, } = req.body;
    if (!title || !category) {
        return res.status(400).json({ message: "Title and category are required" });
    }
    const allowedCategories = ["Salads", "Soups", "Dishes", "Desserts", "Drinks"];
    if (!allowedCategories.includes(category)) {
        return res.status(400).json({ message: "Invalid category" });
    }
    const newRecipe = yield prisma.recipe.create({
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
}));
// Update a recipe
router.put("/:id", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params;
    const { title, image, description, ingredients, instructions, category, } = req.body;
    const updatedRecipe = yield prisma.recipe.update({
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
}));
// Delete a recipe
router.delete("/:id", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params;
    const deletedRecipe = yield prisma.recipe.delete({
        where: { id: Number(id) },
    });
    res.json(deletedRecipe);
}));
module.exports = router;
