import { Fragment } from "react";
import Button from '@mui/material/Button';

const options = ['noun', 'verb', 'adverb', 'adjective'];

export default function Options({ correctAnswer, answer, setAnswer, addToScore }) {



    const handleAnswer = (value) => {
        if (answer !== '')
            return;
        if (value === correctAnswer) {
            setAnswer(value);
            addToScore(10);
        }
        else
            setAnswer(value);
    }

    return (
        <Fragment>
            {
                options.map(option => <Button size="small" variant={answer !== option ? "outlined" : "contained"} //if my answer equals to the button text set the button background to be solid
                    // Set color based on whether the answer is empty => blue
                    //answer is correct and equals to the button text => change this button color to green
                    // answer is not empty and equals to the button text =>change this button color to red
                    color={answer === correctAnswer && answer === option ? "success"
                        :
                        answer === option ? "error"
                            :
                            "primary"
                    }
                    key={option}
                    sx={{
                        textTransform: 'none'
                    }}
                    onClick={() => handleAnswer(option)}>
                    {option}
                </Button>)

            }
        </Fragment>
    );
}