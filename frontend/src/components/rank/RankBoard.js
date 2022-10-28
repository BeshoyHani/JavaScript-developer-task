import { useEffect, useState } from 'react';
import { getRank } from '../../config/QuizAPI';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import { useNavigate } from 'react-router-dom';
import { Button, Box } from '@mui/material';
import { BoxStyle } from './../../styles/Styles';

export default function RankBoard({ score }) {
    const [rank, setRank] = useState(0);
    const navigate = useNavigate();

    useEffect(() => {
        async function getClientRank() {
            const res = await getRank(score);
            setRank(res);
        }
        getClientRank();
    }, [score])

    const restartGame = () => {
        navigate('/', { replace: true });
    }

    return (
        <Box sx={BoxStyle}>
            <Card sx={{ maxWidth: 345 }}>
                <CardContent>
                    <Typography gutterBottom variant="h5" color="darkRed" component="div" sx={{ margin: 3 }}>
                        Wow!
                    </Typography>
                    <Typography variant="h6">
                        You Ranked at the top of {rank}% of other players!!
                    </Typography>
                </CardContent>

                <Button onClick={() => restartGame()} variant='contained' sx={{ margin: 3, textTransform: 'none' }}>
                    Try Again
                </Button>
            </Card>
        </Box>
    );
}