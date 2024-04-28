import React, { useState } from 'react';
import Header from '../components/header';
import { GoogleGenerativeAI } from "@google/generative-ai";

// OpenAI API key
//const openai = new OpenAI({ apiKey:'sk-proj-OxBNkSXIvmSmAjkARiGkT3BlbkFJq4FEaK6XqElKXSr7kZ32' , dangerouslyAllowBrowser: true});
const Quizify = () => {
    const [text, setText] = useState('');
    const [questions, setQuestions] = useState([]);
    console.log(text);
    const handleClick = async () => {
      const generatedText = await run(text);
      console.log(generatedText);
      setText('');
     setQuestions(generatedText);

    };
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);
    const [currentQuestion, setCurrentQuestion] = useState(0);
    const [isQuizCompleted, setIsQuizCompleted] = useState(false);

    const [score, setScore] = useState(0);
  
    // Function to handle user's answer selection
    const handleAnswerClick = (option) => {
      if (option === questions[currentQuestion].answer) {
        setScore(score + 1);
      }
      setCurrentQuestion(currentQuestion + 1);
      setIsQuizCompleted(currentQuestion >= questions.length - 1);
    };


    const genAI = new GoogleGenerativeAI('AIzaSyD6otbaQ11aQGB72DLmKUNXeiSZHndbCOY');
    const run = async (inputText) => {
      const model = genAI.getGenerativeModel({ model: "gemini-pro"});

      const prompt = `Generate 5 single answer questions with 4 options , also mention the answer at end based on ${inputText} assuming you are a teacher and you want to test your students on this content , in a json format without mentioning its json and directly giving in json format`;
      const result = await model.generateContent(prompt);
      const response = await result.response;
      const res = response.text();
      const jsonData = JSON.parse(res);  // Parse the JSON string

      const ques = jsonData.questions.map(question => question.question);
      const opt = jsonData.questions.map(question => question.options);
      const ans = jsonData.questions.map(question => question.answer);

      console.log("Questions:", ques);
      console.log("Options:", opt);
      console.log("Answers:", ans);
      const newQuestions = [];
      for (let i = 0; i < ques.length; i++) {
        newQuestions.push({
          question: ques[i],
          options: opt[i],
          answer: ans[i]
        });
      } (10000)
      
      return newQuestions;

      // Here you can use the generated text as needed
  };

    return (
      <>
        <Header />
        <h1 className='main' >
            <span className='mid-title'>Quizify</span>
            <textarea placeholder='Enter the topic you want to be memorized of...'
                className="text"
                value={text}
                onChange={(e) => setText(e.target.value)}
            />
            <span><button className="btn" onClick={handleClick}>Generate Quiz</button></span>
        </h1>

        <div className="main">
      {currentQuestion < questions.length ? (
        <>
        <br />
          <h2 className='mid-title' style={{color: '#8987f4'}}>Question {currentQuestion + 1}</h2>
          <p className='subtitle'>{questions[currentQuestion].question}</p>
          <ul className='ul'>
            {questions[currentQuestion].options.map((option, index) => (
              <li key={index}>
                <span><button className='btn' style={{backgroundColor: '#8987f4'}}onClick={() => handleAnswerClick(option)}>{option}</button></span>
              </li>
            ))}
          </ul>
        </>
      ): (
        <>
          { isQuizCompleted && (
            <div className='main'>
              <h2 className='mid-title' style={{color: '#8987f4'}}>Congratulations! You finished the quiz.</h2>
              <p className='subtitle' style={{color: '#5EFC8D'}}>Your final score is: {score} out of {questions.length}</p>
            </div>
          )}
        </>
      )}
    </div>
      </>
    );
};

export default Quizify;