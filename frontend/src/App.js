import './App.css';
import { useState } from 'react';
import Question from './components/questions/Question';
import Box from '@mui/material/Box';
import { Route, Routes } from 'react-router-dom';
import RankBoard from './components/rank/RankBoard';

function App() {

  const [score, setScore] = useState(0);

  return (
    <Box className="App">
      <Routes>
        <Route exact path='/' element={
          <Question score={score} setScore={setScore} />
        } />

        <Route exact path='/rank' element={
          <RankBoard score={score} />
        } />

        <Route path="*"
          element={
            <div>
              <h2>404 Page not found</h2>
            </div>
          }
        />
      </Routes>
    </Box>
  );
}

export default App;
