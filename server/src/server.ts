import express, { Request, Response } from 'express';
import cors from 'cors';
import dotenv from 'dotenv';

dotenv.config();

const app = express(),
port = process.env.SERVER_PORT || 5501;

app.use(cors());
app.use(express.json());

app.listen(port, () => console.log(`Connection established on port: ${port}`));