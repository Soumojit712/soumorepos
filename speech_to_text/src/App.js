import React, { useState } from 'react';
import './App.css';
import useClipboard from "react-use-clipboard";
import SpeechRecognition, { useSpeechRecognition } from 'react-speech-recognition';
function App() {
  const[texttocopy,settexttocopy]=useState();
  const [isCopied, setCopied] = useClipboard(texttocopy);
  SpeechRecognition.startListening({ continuous: true , language:'en-IN'});
  const { transcript , browserSupportsSpeechRecognition } = useSpeechRecognition();
  if (!browserSupportsSpeechRecognition) {
    return <span>Browser doesn't support speech recognition.</span>;
  }
  return (
    <div>
      <div className="container">
        <h2>
        Speech to text converter
        </h2>
        <br/>
        <p>A react hook that converts from speech to text</p>
        <div className='main-content' onClick={()=>settexttocopy(transcript)}>
        {transcript}
        </div>
        <div className="btn-style">
          <button onClick={setCopied}>
            {isCopied ? "Copied" : "Copy to clipboard"}
          </button>
          <button onClick={SpeechRecognition.startListening}>Start listening</button>
          <button onClick={SpeechRecognition.stopListening}>Stop listening</button>
        </div>
      </div>      
    </div>
  );
}

export default App;
