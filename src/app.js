import express from "express";
import morgan from "morgan";
import { initMongoDB }  from "./config/db.js";

import usersRouter from './routes/users.router.js';
import petsRouter from './routes/pets.router.js';
import mocksRouter from './routes/mocks.router.js';



const app = express();

app.use(express.json());
app.use(express.urlencoded({extended:true}));
app.use(morgan('dev'));



initMongoDB();

const PORT = process.env.PORT|| 8080;

app.use('/api/users', usersRouter);
app.use('/api/pets', petsRouter);   
app.use('/api/mocks', mocksRouter);

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));