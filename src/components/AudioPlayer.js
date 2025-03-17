"use client";
import { useEffect, useRef } from "react";

const AudioPlayer = ({ audioName = "voz/vozWelcome.mp3" }) => {
  const audioRef = useRef(null);

  const playAudio = () => {
    if (audioRef.current) {
      audioRef.current.play().catch((error) => {
        console.error("Error reproduciendo el audio:", error);
      });
    }
  };

  useEffect(() => {

    // Detectar clic en la página
    const handleClick = () => {
      playAudio();
      // Remover el event listener para evitar múltiples reproducciones
      window.removeEventListener("click", handleClick);
    };

    window.addEventListener("click", handleClick);

    return () => {
      window.removeEventListener("click", handleClick);
    };
  }, []);

  return (
    <div>
      <audio ref={audioRef} src={audioName} />
    </div>
  );
};

export default AudioPlayer;
