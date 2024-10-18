
import { useState } from 'react';
import Welcome from './compoonents/welcome';
import Quiz from './compoonents/quiz';
import Completed from './compoonents/completed.quize';
import './App.css';

function App() {
  const [currentStep, setCurrentStep] = useState('welcome'); 
  const [score, setScore] = useState(0); 

  const handleStartQuiz = () => {
    setCurrentStep('quiz');
  };

  const handleCompleteQuiz = (score) => {
    setScore(score);
    setCurrentStep('completed');
  };

  return (
    <>
      {currentStep === 'welcome' && <Welcome onStart={handleStartQuiz} />}
      {currentStep === 'quiz' && <Quiz onComplete={handleCompleteQuiz} />}
      {currentStep === 'completed' && <Completed score={score} />}
    </>
  );
}

export default App;

