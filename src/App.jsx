import './App.css'
import { useRef, useState, useEffect } from 'react'
import Invitation from './components/Invitation';
import unwritten from "./assets/unwritten.mp3"

function App() {
  const [showInvitation, setShowInvitation] = useState(false);
  const audioRef = useRef(null);
  useEffect(() => {
    const audio = audioRef.current;
    const canPlay = () => {
      console.log('Audio is ready to play');
    };
    audio.addEventListener('canplay', canPlay);
  
    return () => {
      audio.removeEventListener('canplay', canPlay);
    };
  }, []);
  const handleButtonClick = () => {
    setShowInvitation(true);
    setTimeout(() => {
      if (audioRef.current) {
        const playPromise = audioRef.current.play();
        if (playPromise !== undefined) {
          playPromise.then(() => {
            // Automatic playback started!
          }).catch(error => {
            // Auto-play was prevented
            console.error("Playback was prevented due to the following error:", error);
          });
        }
      }
    }, 300); // a 300ms delay
  };
  return (
    <div>
      {!showInvitation ? (
        <div className="welcome-screen">
          <h1>Turn up the volume baby {":)"}</h1>
          <button onClick={handleButtonClick}>Start</button>
        </div>
      ) : (
        <Invitation />
      )}
      <audio ref={audioRef} src={unwritten} preload="auto" style={{ display: 'none' }}></audio>
    </div>
  );
}

export default App
