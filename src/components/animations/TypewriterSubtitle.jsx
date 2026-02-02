// TypewriterSubtitle() - smooth typewriter effect for subtitle inspired by TypewriterEffectSmooth
import React, { useEffect, useMemo, useState } from 'react';

export default function TypewriterSubtitle({
  words = [],
  className = '',
  speed = 80,   // ms per character
  pause = 800,  // ms pause between words
  loop = false,
}) {
  const [display, setDisplay] = useState('');
  const [wordIdx, setWordIdx] = useState(0);
  const [charIdx, setCharIdx] = useState(0);
  const [cursorVisible, setCursorVisible] = useState(true);

  const sequence = useMemo(() => words.map((w) => w.text), [words]);

  // Blink cursor
  useEffect(() => {
    const timer = setInterval(() => setCursorVisible((v) => !v), 500);
    return () => clearInterval(timer);
  }, []);

  // Typewriter logic (word by word, char by char)
  useEffect(() => {
    if (!sequence.length) return;

    const currentWord = sequence[wordIdx] ?? '';
    const isTyping = charIdx < currentWord.length;

    const timer = setTimeout(() => {
      if (isTyping) {
        setDisplay((prev) => prev + currentWord.charAt(charIdx));
        setCharIdx((c) => c + 1);
      } else {
        // Finished current word
        if (wordIdx < sequence.length - 1) {
          setDisplay((prev) => (prev.endsWith(' ') ? prev : prev + ' '));
          setWordIdx((w) => w + 1);
          setCharIdx(0);
        } else if (loop) {
          // Reset for looping
          setDisplay('');
          setWordIdx(0);
          setCharIdx(0);
        }
      }
    }, isTyping ? speed : pause);

    return () => clearTimeout(timer);
  }, [sequence, wordIdx, charIdx, speed, pause, loop]);

  // Render inside an h2 so it fits the original subtitle semantics/styles
  return (
    <h2 className={className}>
      {display}
      <span style={{ opacity: cursorVisible ? 1 : 0, marginLeft: 2 }}>|</span>
    </h2>
  );
}