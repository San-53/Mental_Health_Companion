// import React, { useState } from 'react'
import { QuizData } from "../Data/QuizData";
// import QuizResult from './QuixResult';
import "./Quiz_app.css";
// // import { QuizData } from '../Data/QuizData'
// // import QuizResult from './QuizResult';
// function Quiz() {
//     const [currentQuestion,setCurrentQuestion]=useState(0);
//     const [score,setScore] = useState(0);
//     const [clickedOption,setClickedOption]=useState(0);
//     const [showResult,setShowResult]=useState(false);

//     const changeQuestion = ()=>{
//         updateScore();
//         if(currentQuestion< QuizData.length-1){
//             setCurrentQuestion(currentQuestion+1);
//             setClickedOption(0);
//         }else{
//             setShowResult(true)
//         }
//     }
//     const updateScore=()=>{
//         if(clickedOption===QuizData[currentQuestion].answer){
//             setScore(score+1);
//         }
//     }
//     const resetAll=()=>{
//         setShowResult(false);
//         setCurrentQuestion(0);
//         setClickedOption(0);
//         setScore(0);
//     }
//   return (
//     <div>
//         <div className="container">
//             {showResult ? (
//                 <QuizResult score={score} totalScore={QuizData.length} tryAgain={resetAll}/>
//             ):(
//             <>
//             <div className="question">
//                 <span id="question-number">{currentQuestion+1}. </span>
//                 <span id="question-txt">{QuizData[currentQuestion].question}</span>
//             </div>
//             <div className="option-container">
//                 {QuizData[currentQuestion].options.map((option,i)=>{
//                     return(
//                         <button
//                         // className="option-btn"
//                         className={`option-btn ${
//                             clickedOption == i+1?"checked":null
//                         }`}
//                         key={i}
//                         onClick={()=>setClickedOption(i+1)}
//                         >
//                         {option}
//                         </button>
//                     )
//                 })}
//             </div>
//             <input type="button" value="Next" id="next-button" onClick={changeQuestion}/>
//             </>)}
//         </div>
//     </div>
//   )
// }

// export default Quiz

// import React, { useState } from 'react';
// import "./Quiz_app.css";

// const Quiz = () => {
//   const [answers, setAnswers] = useState({
//     q1: '',
//     q2: '',
//     q3: ''
//   });

//   const handleAnswerChange = (e) => {
//     setAnswers({ ...answers, [e.target.name]: e.target.value });
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     // Calculate results based on answers
//     let score = 0;
//     if (answers.q1 === 'Yes') score++;
//     if (answers.q2 === 'Sometimes') score++;
//     if (answers.q3 === 'Often') score += 2;
//     let result = '';
//     if (score === 0) result = 'You seem to be doing well. Keep it up!';
//     else if (score === 1) result = 'You may be experiencing some mild stress. Take care of yourself!';
//     else if (score === 2) result = 'You may be experiencing moderate stress. Consider talking to someone about how you are feeling.';
//     else if (score === 3) result = 'You may be experiencing significant stress. Please seek help from a healthcare professional.';
//     // Display results
//     alert(result);
//   };

//   return (
//     <div>
//       <h2>Mental Health Questionnaire</h2>
//       <form onSubmit={handleSubmit}>
//         <label htmlFor="q1">1. Have you been feeling overwhelmed or stressed lately?</label>
//         <select name="q1" id="q1" onChange={handleAnswerChange} value={answers.q1}>
//           <option value="">Select an answer</option>
//           <option value="Yes">Yes</option>
//           <option value="No">No</option>
//         </select>
//         <br />
//         <label htmlFor="q2">2. How often do you feel stressed?</label>
//         <input type="radio" name="q2" id="q2-1" value="Rarely" onChange={handleAnswerChange} checked={answers.q2 === 'Rarely'} /> Rarely
//         <input type="radio" name="q2" id="q2-2" value="Sometimes" onChange={handleAnswerChange} checked={answers.q2 === 'Sometimes'} /> Sometimes
//         <input type="radio" name="q2" id="q2-3" value="Often" onChange={handleAnswerChange} checked={answers.q2 === 'Often'} /> Often
//         <br />
//         <label htmlFor="q3">3. Do you have trouble sleeping or staying asleep?</label>
//         <input type="radio" name="q3" id="q3-1" value="Rarely" onChange={handleAnswerChange} checked={answers.q3 === 'Rarely'} /> Rarely
//         <input type="radio" name="q3" id="q3-2" value="Sometimes" onChange={handleAnswerChange} checked={answers.q3 === 'Sometimes'} /> Sometimes
//         <input type="radio" name="q3" id="q3-3" value="Often" onChange={handleAnswerChange} checked={answers.q3 === 'Often'} /> Often
//         <br />
//         <button type="submit">Submit</button>
//       </form>
//     </div>
//   );
// };

// export default Quiz;

// import React, { useState } from 'react';
// // import QuizData from '../Data/QuizData.jsx';
// // import './Quiz_app.css';

// const Quiz = () => {
//   const [currentQuestion, setCurrentQuestion] = useState(0);
//   const [score, setScore] = useState(Array(QuizData.length).fill(0));

//   const handleAnswerOptionClick = (isCorrect, index) => {
//     if (isCorrect) {
//       const newScore = [...score];
//       newScore[index] += 1;
//       setScore(newScore);
//     }

//     const nextQuestion = currentQuestion + 1;
//     if (nextQuestion < QuizData.length) {
//       setCurrentQuestion(nextQuestion);
//     } else {
//       evaluateResults();
//     }
//   };

//   const evaluateResults = () => {
//     const maxScore = Math.max(...score);
//     const mostLikelyIllnessIndex = score.indexOf(maxScore);
//     alert(`The most likely illness is: ${QuizData[mostLikelyIllnessIndex].illness}`);
//   };

//   return (
//     <div className="quiz">
//       <div className="question-section">
//         <h2>{QuizData[currentQuestion].question}</h2>
//         <div className="answer-section">
//           {QuizData[currentQuestion].options.map((option, index) => (
//             <button
//               key={index}
//               onClick={() => handleAnswerOptionClick(QuizData[currentQuestion].answer.includes(index), currentQuestion)}
//             >
//               {option}
//             </button>
//           ))}
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Quiz;

import React, { useState } from "react";
// // import { QuizData } from "../Data/QuizData";
// // import "./Quiz_app.css";

// const Quiz = () => {
//   const [currentQuestion, setCurrentQuestion] = useState(0);
//   const [score, setScore] = useState(Array(QuizData.length).fill(0));
//   const [outputMessage, setOutputMessage] = useState("");

//   const handleAnswerOptionClick = (isCorrect, index) => {
//     if (isCorrect) {
//       const newScore = [...score];
//       newScore[index] += 1;
//       setScore(newScore);
//     }
//     const nextQuestion = currentQuestion + 1;
//     if (nextQuestion < QuizData.length) {
//       setCurrentQuestion(nextQuestion);
//     } else {
//       evaluateResults();
//     }
//   };

//   const evaluateResults = () => {
//     const maxScore = Math.max(...score);
//     const mostLikelyIllnessIndices = [];
//     // Find all indices with the max score
//     score.forEach((value, index) => {
//       if (value === maxScore) {
//         mostLikelyIllnessIndices.push(index);
//       }
//     });

//     // Generate the output message based on the number of most likely illnesses
//     let message;
//     if (mostLikelyIllnessIndices.length === 1) {
//       message = `You might have: ${
//         QuizData[mostLikelyIllnessIndices[0]].illness
//       }`;
//     } else {
//       const illnessNames = mostLikelyIllnessIndices
//         .map((index) => QuizData[index].illness)
//         .filter((illness, index, self) => self.indexOf(illness) === index); // Remove duplicates
//       message = `You might be having any one of the following mental illnesses: ${illnessNames.join(
//         " or "
//       )}`;
//     }

//     setOutputMessage(message);
//   };

//   return (
//     <div className="quiz">
//       <div className="question-section">
//         <h2>{QuizData[currentQuestion].question}</h2>
//         <div className="answer-section">
//           {QuizData[currentQuestion].options.map((option, index) => (
//             <button
//               key={index}
//               onClick={() =>
//                 handleAnswerOptionClick(
//                   QuizData[currentQuestion].answer.includes(index),
//                   currentQuestion
//                 )
//               }
//             >
//               {option}
//             </button>
//           ))}
//         </div>
//       </div>
//       {outputMessage && (
//         <div className="result-card">
//           <h3>Quiz Results</h3>
//           <p>{outputMessage}</p>
//         </div>
//       )}
//     </div>
//   );
// };

// export default Quiz;

const Quiz = () => {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [score, setScore] = useState(Array(QuizData.length).fill(0));
  const [outputMessage, setOutputMessage] = useState("");

  const handleAnswerOptionClick = (isCorrect, index) => {
    if (isCorrect) {
      const newScore = [...score];
      newScore[index] += 1;
      setScore(newScore);
    }
    const nextQuestion = currentQuestion + 1;
    if (nextQuestion < QuizData.length) {
      setCurrentQuestion(nextQuestion);
    } else {
      evaluateResults();
    }
  };

  const evaluateResults = () => {
    const maxScore = Math.max(...score);
    const mostLikelyIllnessIndices = [];
    // Find all indices with the max score
    score.forEach((value, index) => {
      if (value === maxScore) {
        mostLikelyIllnessIndices.push(index);
      }
    });

    // Generate the output message based on the number of most likely illnesses
    let message;
    if (mostLikelyIllnessIndices.length === 1) {
      message = `You might have: ${
        QuizData[mostLikelyIllnessIndices[0]].illness
      }`;
    } else {
      const illnessNames = mostLikelyIllnessIndices
        .map((index) => QuizData[index].illness)
        .filter((illness, index, self) => self.indexOf(illness) === index); // Remove duplicates
      message = `You might be having any one of the following mental illnesses: ${illnessNames.join(
        " or "
      )}`;
    }

    setOutputMessage(message);
  };

  return (
    <div className="quiz">
      {outputMessage ? (
        <div className="result-card">
          <h3>Quiz Results</h3>
          <p>{outputMessage}</p>
        </div>
      ) : (
        <div className="question-section">
          <h2>{QuizData[currentQuestion].question}</h2>
          <div className="answer-section">
            {QuizData[currentQuestion].options.map((option, index) => (
              <button
                key={index}
                onClick={() =>
                  handleAnswerOptionClick(
                    QuizData[currentQuestion].answer.includes(index),
                    currentQuestion
                  )
                }
              >
                {option}
              </button>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default Quiz;
