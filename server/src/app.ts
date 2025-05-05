import dotenv from 'dotenv';
dotenv.config();

import './db';
import express, { Application } from 'express';

const app: Application = express();

import config from './config';
config(app);


import indexRoutes from './routes/index.routes';
app.use('/api', indexRoutes);


const recipeRoutes = require('./routes/recipe.routes');
app.use('/api/recipes', recipeRoutes);


const feedbackRoutes = require('./routes/feedback.routes');
app.use('/api/feedback', feedbackRoutes);  

import errorHandling from './error-handling';
errorHandling(app);

export default app;
