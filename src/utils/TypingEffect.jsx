import { useState, useEffect } from 'react';

function TypingEffect({ texts }) {
  const [currentTextIndex, setCurrentTextIndex] = useState(0);
  const [displayText, setDisplayText] = useState('');
  const [currentCharacterIndex, setCurrentCharacterIndex] = useState(0);

  useEffect(() => {
    if (currentCharacterIndex < texts[currentTextIndex].length) {
      const timeoutId = setTimeout(() => {
        setDisplayText((prev) => prev + texts[currentTextIndex][currentCharacterIndex]);
        setCurrentCharacterIndex((prev) => prev + 1);
      }, 100);
      return () => clearTimeout(timeoutId);
    } else {
      const timeoutId = setTimeout(() => {
        setDisplayText('');
        setCurrentCharacterIndex(0);
        setCurrentTextIndex((prev) => (prev + 1) % texts.length);
      }, 2000);
      return () => clearTimeout(timeoutId);
    }
  }, [currentCharacterIndex, currentTextIndex, texts]);

  const displayTextClass = currentCharacterIndex < texts[currentTextIndex].length ? '' : 'inline-block animate-ping hidden';

  return (
    <span className='text-yellow-600'>
      {displayText}
      <span className={`${displayTextClass} text-yellow-600`}>|</span>
    </span>
  );
}

export default TypingEffect;