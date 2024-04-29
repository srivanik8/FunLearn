import React, { useState } from 'react';
import OpenAI from 'openai';
import Header from '../components/header';
import { GoogleGenerativeAI } from "@google/generative-ai";
import Speech from 'speak-tts';

// OpenAI API key
//const openai = new OpenAI({ apiKey:'sk-proj-OxBNkSXIvmSmAjkARiGkT3BlbkFJq4FEaK6XqElKXSr7kZ32' , dangerouslyAllowBrowser: true});
const TextToSpeech = () => {
    const [text, setText] = useState('');
    const speech = new Speech();
    console.log(text);
    const speak = () => {
        if (text !== '' && window.speechSynthesis) {
            const utterance = new SpeechSynthesisUtterance(text);
            window.speechSynthesis.speak(utterance);
        }
    };
    const handleClick = async () => {
      const generatedText = await run(text);
      if (speech.hasBrowserSupport()) {
          speech.speak({
              text: generatedText,
          });
      }
      setText('');
    };
    const genAI = new GoogleGenerativeAI('AIzaSyD6otbaQ11aQGB72DLmKUNXeiSZHndbCOY');
    const run = async (inputText) => {
      const model = genAI.getGenerativeModel({ model: "gemini-pro"});

      const prompt = `Generate a story based on ${inputText} so that the user can memorize it easily`;
      const result = await model.generateContent(prompt);
      const response = await result.response;
      const res = response.text();
      return res

      // Here you can use the generated text as needed
  };
    
    return (
      <>
        <Header />
        <h1 className='main' >
            <span className='mid-title'>AI Whisper</span>
            <textarea placeholder='Enter the content you want to listen to...'
                className="textarea"
                value={text}
                onChange={(e) => setText(e.target.value)}
            />
            <br />
            <span><button className="btn" onClick={handleClick}>Listen to a story 🎧</button></span>
        </h1>
      </>
    );
};

export default TextToSpeech;