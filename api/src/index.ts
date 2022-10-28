import express, { Request, Response, NextFunction } from 'express';
import cors from 'cors';
import quizeRouter_handler from './routers/quiz.router.js';
const PORT = 3000;
const app = express();

app.use(cors());
app.use(express.json());
quizeRouter_handler(app);
app.use((_req: Request, res: Response) => { // Handle default path (any path that doesn't exist)
    res.status(404).end('Not Found!')
})

app.listen(PORT, () => {
    console.log(`server listen on port ${PORT}`)
})