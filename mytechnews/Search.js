import React, { useState, useEffect } from 'react';
import { useGlobalContext } from './context';
import SpeechRecognition, { useSpeechRecognition } from 'react-speech-recognition';

const Search = () => {
  const { query, searchPost } = useGlobalContext();
  const [inputValue, setInputValue] = useState(query || '');
  const { transcript, listening, resetTranscript, browserSupportsSpeechRecognition } = useSpeechRecognition();

  useEffect(() => {
    SpeechRecognition.startListening({ continuous: true, language: 'en-IN' });
    
    return () => {
      SpeechRecognition.stopListening();
    };
  }, []);

  useEffect(() => {
    setInputValue(transcript);
  }, [transcript]);

  const handleChange = (e) => {
    setInputValue(e.target.value);
    searchPost(e.target.value);
  };

  if (!browserSupportsSpeechRecognition) {
    return <span>Browser doesn't support speech recognition.</span>;
  }

  return (
    <div>
      <h1>SG Tech website</h1>
      <form onSubmit={(e) => e.preventDefault()}>
        <div className='main-content'>
          <input
            type="text"
            placeholder='search here'
            value={inputValue}
            onChange={handleChange}
          />
        </div>
        <div className="btn-style">
          <p>Microphone: {listening ? 'on' : 'off'}</p>
          <button onClick={SpeechRecognition.startListening}>Start listening</button>
          <button onClick={()=>{
            SpeechRecognition.stopListening();
            searchPost(transcript);
          }}>Stop listening</button>
          <button onClick={()=>{
            resetTranscript();
            window.location.reload();
          }}>Reset</button>
        </div>
      </form>
    </div>
  );
};

export default Search;
