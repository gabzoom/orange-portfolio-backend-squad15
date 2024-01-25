import express from 'express';
import connectDatabase from './src/database/db.js';
import userRouter from './src/routes/user.route.js';
import dotenv from 'dotenv';
dotenv.config();
const app = express();
connectDatabase();

const port = 3000;

app.use(express.json());

app.use('/users', userRouter);

app.listen(port, () => console.log(`Server started on port ${port}`));