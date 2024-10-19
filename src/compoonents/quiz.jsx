
import React, { useState,useEffect } from 'react';
import data from "../assets/data.js";

function Quiz({ onComplete }) {
    const [index, setIndex] = useState(0);
    const [question, setQuestion] = useState(data[index]);
    const [selected, setSelected] = useState(null);
    const [check, setCheck] = useState(false);
    const [progress,setprogress]=useState(4)
    const [score,setscore]=useState(0)
    const [timeLeft, setTimeLeft] = useState(300)



    useEffect(() => {
        const interval = setInterval(() => {
            setTimeLeft(prevTime => {
                if (prevTime <= 0) {
                    clearInterval(interval);
                    onComplete(score)
                    return 0; 
                }
                return prevTime - 1
            });
        }, 1000);

        return () => clearInterval(interval);
    }, [onComplete, score]);





    function checkAnswer(e, answer) {
        if (check) return;

        setSelected(answer);
        if (question.answer === answer) {
            e.target.classList.add("correct");
            setscore(score + 6)
        } else {
            e.target.classList.add("wrong");
            const correctAnswerElement = document.querySelector(`.option p[data-answer="${question.answer}"]`);
            if (correctAnswerElement) {
                correctAnswerElement.classList.add("correct");
            }
        }

        setCheck(true);
    }



    function handleNextBtn() {
        if (index < data.length - 1) {
            setIndex(index + 1);
            setQuestion(data[index + 1]);
            setprogress(progress+4)
            setSelected(null); 
            setCheck(false);

            
            setTimeout(() => {
                const options = document.querySelectorAll('.option p');
                options.forEach(option => {
                    option.classList.remove('correct', 'wrong');
                });
            }, 0);
        } else {
            onComplete(score)
        }
    }



    return (
        <div className="container">
            <h1>the react Quiz</h1>
            <progress max="60" value={progress} id="process"></progress>
            <label>Question {index + 1}/15</label>
            <h4>{question.question}</h4>

            <div className="option">
                {question.options.map((option, k) => (
                    <p 
                        key={k} 
                        data-answer={option}
                        onClick={(e) => checkAnswer(e, option)} 
                        className={`${selected === option ? (question.answer === option ? "correct" : "wrong") : ""}`}
                    >
                        {option}
                  </p>
                ))} 
                
            </div>

            <div className="container-div">
            <div> Time Left : {Math.floor(timeLeft / 60)}:{String(timeLeft % 60).padStart(2, '0')}</div>
                <button onClick={handleNextBtn}>Next question</button>
            </div>
        </div>
    );
}

export default Quiz;

