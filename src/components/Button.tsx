import React, { useState } from 'react';

const Button: React.FC = () => {
  const [position, setPosition] = useState({ top: 100, left: 100 });

  const moveButtonRandomly = () => {
    const randomTop = Math.floor(Math.random() * window.innerHeight - 50);
    const randomLeft = Math.floor(Math.random() * window.innerWidth - 100);
    setPosition({
      top: randomTop < 0 ? 0 : randomTop,
      left: randomLeft < 0 ? 0 : randomLeft,
    });
  };

  return (
    <button
      onClick={moveButtonRandomly}
      style={{
        position: 'absolute',
        top: position.top,
        left: position.left,
        padding: '10px 20px',
        fontSize: '16px',
      }}
    >
      Click Me!
    </button>
  );
};

export default Button;