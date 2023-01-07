import { Request, Response } from 'express';
import { promises as fs } from 'fs';
import IData from '../interfaces/data.interface.js';

const fetchDB = async (): Promise<IData> => {
    const data = await fs.readFile('./src/db/TestData.json');
    return JSON.parse(String(data));
}

const binarySearch = (target: number, list: number[]) => {
    // Find the position of the first score that is less than the achieved one
    //in order to calculate the rank
    let left = 0, right = list.length - 1, pos = 0;
    while (left <= right) {
        let mid = parseInt(String((left + right) / 2));
        if (list[mid] < target) {
            left = mid + 1, pos = mid;
        }
        else
            right = mid - 1
    }
    return target === 0 ? 0 : pos + 1;
}

export const getXWords = async (_req: Request, res: Response): Promise<void> => {
    try {
        const data: IData = await fetchDB();
        const startIDX = Math.floor(Math.random() * 5); // Generate a number between 0 and 4 to start take the 10 words from
        let wordsArray = data.wordList.splice(startIDX, 9); // Take 9 words start from the generated random position
        // currently, we have 3 categories in the array, the missing one is the adjective word        
        // the test file has 2 adjective words one at the first position and the other at the last
        // so we use a dummy condition to randomize the choice between them
        const adjWord = startIDX <= 2 ? data.wordList[0] : data.wordList[data.wordList.length - 1];
        wordsArray.splice(startIDX, 0,  adjWord); // use random number generated before to randomize the adj word position in array
        const words = JSON.parse(JSON.stringify(wordsArray));
        res.status(200).json(words);
    } catch (error) {
        res.status(500).json({
            error: (error as Error).message
        });
    }
}

export const getRank = async (_req: Request, res: Response): Promise<void> => {
    try {
        if(_req.body.score === undefined){
            res.status(400).send('Score is Required in order to calculate rank');
            return;
        }
        const score = +(_req.body.score) as number;
        const data: IData = await fetchDB();
        const scoreList = data.scoresList.sort((a: number, b: number) => a - b);
        const IDX = binarySearch(score, scoreList);
        const rank = (IDX / scoreList.length * 100).toFixed(2);
        res.json({
            'rank': rank
        })
    } catch (error) {
        res.status(500).json({
            error: (error as Error).message
        });
    }
}