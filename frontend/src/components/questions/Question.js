import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { fetchQuestions } from '../../config/QuizAPI';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import NavigateNextIcon from '@mui/icons-material/NavigateNext';
import Options from './Options';
import { Box, Button, Fab } from '@mui/material';
import ProgressBar from '../progress/ProgressBar';
import { BoxStyle } from '../../styles/Styles';


export default function Question({score, setScore}) {

    const [questions, setQuestions] = useState([{}]);
    const [position, setPosition] = useState(0);
    const navigate = useNavigate();
    
    const [answer, setAnswer] = useState('');

    useEffect(() => {
        async function getQuestions() {
            const res = await fetchQuestions();
            setScore(0);
            setQuestions(res);
        }
        getQuestions();
    }, []);

    const getNextQuestion = () => {
        setPosition(position + 1);
        setAnswer('');
    }

    const addToScore = (value) => {
        setScore(score + value);
    }

    const displayRank = () => {
        navigate('/rank');

    }

    return (
        <Box>
            <ProgressBar progress={(position + 1) * 10}/>

            <Box sx={BoxStyle}>
                <Card sx={{ padding: '2%'}}>
                    <Typography gutterBottom variant="caption" component="div" sx={{ display: 'flex', alignSelf: 'flex-start', margin: 2 }}>
                        <strong> Question {position + 1} </strong>
                    </Typography>
                    <CardContent>
                        <Typography gutterBottom variant="h4" component="div" sx={{ margin: 3, padding: 3 }}>
                            {questions[position].word}
                        </Typography>
                        <Typography variant="body2" color="text.secondary">
                            The word <strong>{questions[position].word}</strong> belongs to which of the following categories
                        </Typography>
                    </CardContent>
                    <CardActions sx={{ display: 'flex', justifyContent: 'space-around', marginTop: 3 }}>
                        <Options correctAnswer={questions[position].pos} answer={answer} setAnswer={setAnswer} addToScore={addToScore} />
                    </CardActions>

                    {
                        position !== questions.length - 1 ?
                            <Fab onClick={() => getNextQuestion()} color='primary' sx={{ margin: 3 }} disabled={!answer}>
                                <NavigateNextIcon />
                            </Fab>
                            :
                            <Button variant='contained' onClick={() => displayRank()} sx={{ margin: 3, textTransform: 'none' }} disabled={!answer}>
                                Complete
                            </Button>
                    }
                </Card>
            </Box>
        </Box>
    );
}