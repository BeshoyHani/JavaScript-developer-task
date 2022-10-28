import axios from 'axios';
const baseURL = 'http://localhost:3000';

export const fetchQuestions = async () => {
    try {
        const URL = baseURL + '/quiz/words';
        const res = await axios.get(URL);
        return res.data;
    } catch (error) {
        throw Error(error.response);
    }
}

export const getRank = async (score) => {
    try {
        const URL = baseURL + '/quiz/rank';
        const res = await axios.post(URL, { score });
        return res.data.rank;
    } catch (error) {
        throw Error(error.response);
    }
}