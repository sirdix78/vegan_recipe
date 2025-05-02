"use strict";
// // ℹ️ Gets access to environment variables/settings
// // https://www.npmjs.com/package/dotenv
// require("dotenv").config();
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
// // ℹ️ Connects to the database
// require("./db");
// // Handles http requests (express is node js framework)
// // https://www.npmjs.com/package/express
// const express = require("express");
// const app = express();
// // ℹ️ This function is getting exported from the config folder. It runs most pieces of middleware
// require("./config")(app);
// // 👇 Start handling routes here
// const indexRoutes = require("./routes/index.routes");
// app.use("/api", indexRoutes);
// // ❗ To handle errors. Routes that don't exist or errors that you handle in specific routes
// require("./error-handling")(app);
// module.exports = app;
// ℹ️ Gets access to environment variables/settings
// import dotenv from 'dotenv';
// dotenv.config();
// import './db';
// import express, { Application } from 'express';
// const app: Application = express();
// import config from './config';
// config(app);
// import indexRoutes from './routes/index.routes';
// app.use('/api', indexRoutes);
// const recipeRoutes = require('./routes/recipe.routes');
// app.use('/api/recipes', recipeRoutes);
// const feedbackRoutes = require ('./routes/feedback.routes');
// app.use('/api/recipes', feedbackRoutes);
// import errorHandling from './error-handling';
// errorHandling(app);
// export default app;
const dotenv_1 = __importDefault(require("dotenv"));
dotenv_1.default.config();
require("./db");
const express_1 = __importDefault(require("express"));
const app = (0, express_1.default)();
const config_1 = __importDefault(require("./config"));
(0, config_1.default)(app);
const index_routes_1 = __importDefault(require("./routes/index.routes"));
app.use('/api', index_routes_1.default);
const recipeRoutes = require('./routes/recipe.routes');
app.use('/api/recipes', recipeRoutes);
const feedbackRoutes = require('./routes/feedback.routes');
app.use('/api/feedback', feedbackRoutes);
const error_handling_1 = __importDefault(require("./error-handling"));
(0, error_handling_1.default)(app);
exports.default = app;
