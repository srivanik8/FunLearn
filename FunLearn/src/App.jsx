import './App.css'
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import Landing from './pages/landing.jsx'
import TextToSpeech from './pages/tts.jsx';
import Resources from './pages/resource.jsx';
import Quizify from './pages/quizify.jsx';

function App() {
  

  return (
    <>
      <BrowserRouter>
      <Routes>
      <Route path="/" element={<Landing />} />
      <Route path="/tts" element={<TextToSpeech />} />
      <Route path="/resource" element={<Resources />} />
      <Route path="/quizify" element={<Quizify />} />
      </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
