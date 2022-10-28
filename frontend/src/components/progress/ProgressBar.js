import * as React from 'react';
import LinearProgress from '@mui/material/LinearProgress';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';

export default function ProgressBar({ progress }) {
    return (
        <Box sx={{ display: 'flex', alignItems: 'center', margin: 1}}>
            <Box sx={{ width: '100%', mr: 1 }}>
                <LinearProgress variant="determinate" value={progress} />
            </Box>
            <Box sx={{ minWidth: 35 }}>
                <Typography variant="body2" color="text.secondary">{`${Math.round(
                    progress,
                )}%`}</Typography>
            </Box>
        </Box>
    );
}