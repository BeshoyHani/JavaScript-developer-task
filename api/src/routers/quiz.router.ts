import { Router, Application } from 'express';
import { getRank, getXWords } from './../controllers/quiz.controller.js';

const quizRouter = Router();

quizRouter.get('/words', getXWords);
quizRouter.post('/rank', getRank);

const quizeRouter_handler = (app: Application): void => {
    app.use('/quiz', quizRouter);
};

export default quizeRouter_handler;