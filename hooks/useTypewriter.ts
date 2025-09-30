
import { useState, useEffect } from 'react';

export const useTypewriter = (words: string[], typeSpeed = 150, deleteSpeed = 100, delay = 1000) => {
  const [text, setText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);
  const [wordIndex, setWordIndex] = useState(0);
  const [typingSpeed, setTypingSpeed] = useState(typeSpeed);

  useEffect(() => {
    const handleTyping = () => {
      const currentWord = words[wordIndex % words.length];
      const updatedText = isDeleting
        ? currentWord.substring(0, text.length - 1)
        : currentWord.substring(0, text.length + 1);

      setText(updatedText);

      if (!isDeleting && updatedText === currentWord) {
        setTimeout(() => setIsDeleting(true), delay);
        setTypingSpeed(deleteSpeed);
      } else if (isDeleting && updatedText === '') {
        setIsDeleting(false);
        setWordIndex((prev) => prev + 1);
        setTypingSpeed(typeSpeed);
      }
    };

    const typingTimeout = setTimeout(handleTyping, typingSpeed);
    return () => clearTimeout(typingTimeout);
  }, [text, isDeleting, wordIndex, words, typeSpeed, deleteSpeed, delay, typingSpeed]);

  return text;
};
