// // ℹ️ Gets access to environment variables/settings
// // https://www.npmjs.com/package/dotenv
// require("dotenv").config();

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

import dotenv from 'dotenv';
dotenv.config();

// ℹ️ Connects to the database
import './db';

// Handles http requests (express is node js framework)
import express, { Application } from 'express';

// Create Express application
const app: Application = express();

// ℹ️ This function is getting exported from the config folder. It runs most pieces of middleware
import config from './config';
config(app);

// 👇 Start handling routes here
import indexRoutes from './routes/index.routes';
app.use('/api', indexRoutes);

// ❗ To handle errors. Routes that don't exist or errors that you handle in specific routes
import errorHandling from './error-handling';
errorHandling(app);

export default app;
