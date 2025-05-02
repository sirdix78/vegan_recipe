"use strict";
const router = require("express").Router();
// Import the routes for Recipe and Feedback
const recipeRoutes = require("./recipe.routes");
const feedbackRoutes = require("./feedback.routes");
// Basic route
router.get("/", (req, res, next) => {
    res.json("All good in here");
});
// Recipe and Feedback routes
router.use("/recipes", recipeRoutes); // Handles routes for recipes
router.use("/feedbacks", feedbackRoutes); // Handles routes for feedbacks
module.exports = router;
