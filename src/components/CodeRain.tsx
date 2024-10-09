import React, { useEffect, useRef } from 'react';

interface CodeRainProps {
  inputText: string;
}

const CodeRain: React.FC<CodeRainProps> = ({ inputText }) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    const fontSize = 16;
    const columns = canvas.width / fontSize;

    const drops: number[] = [];
    for (let i = 0; i < columns; i++) {
      drops[i] = 1;
    }

    const draw = () => {
      ctx.fillStyle = 'rgba(0, 0, 0, 0.05)';
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      ctx.fillStyle = '#0F0';
      ctx.font = `${fontSize}px monospace`;

      for (let i = 0; i < drops.length; i++) {
        let text;
        if (inputText && Math.random() > 0.95) {
          text = inputText[Math.floor(Math.random() * inputText.length)];
        } else {
          text = String.fromCharCode(Math.random() * 128);
        }
        ctx.fillText(text, i * fontSize, drops[i] * fontSize * 2); // Increased vertical spacing

        if (drops[i] * fontSize * 2 > canvas.height && Math.random() > 0.995) {
          drops[i] = 0;
        }

        drops[i] += 0.05; // Reduced from 0.1 to 0.05 to make the rain fall slower
      }
    };

    const interval = setInterval(draw, 33);

    return () => clearInterval(interval);
  }, [inputText]);

  return <canvas ref={canvasRef} className="absolute top-0 left-0 w-full h-full" />;
};

export default CodeRain;