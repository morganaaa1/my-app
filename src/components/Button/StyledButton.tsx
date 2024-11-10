import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCookie } from '@fortawesome/free-solid-svg-icons';
import { useNavigate } from 'react-router-dom';

const StyledButton: React.FC = () => {
  const [position, setPosition] = useState({ top: 0, left: 0 });
  const [isMoving, setIsMoving] = useState(false);
  const navigate = useNavigate();

  const moveButtonRandomly = () => {
    const randomTop = Math.floor(Math.random() * (window.innerHeight - 50));
    const randomLeft = Math.floor(Math.random() * (window.innerWidth - 100));
    setPosition({
      top: randomTop < 0 ? 0 : randomTop,
      left: randomLeft < 0 ? 0 : randomLeft,
    });
    setIsMoving(true);
  };

  const navigateToPage = () => {
    navigate('/another-page');
  };

  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        height: '100vh',
        position: 'relative',
        gap: '20px',
      }}
    >
      {/* Text and Image Above Buttons */}
      <div style={{ textAlign: 'center' }}>
        <img
          src="https://media1.tenor.com/m/ZyqhFIPi2OgAAAAC/cat-crying-cat.gif" // Replace with your image URL
          alt="Placeholder"
          style={{ width: '200px', height: 'auto', marginBottom: '20px' }}
        />
        <h3 style={{ marginBottom: '10px' }}>Maafin aku yaa meii 😔😔</h3>
      </div>

      {/* Buttons */}
      <div style={{ display: 'flex', gap: '20px' }}>
        <button
          onClick={moveButtonRandomly}
          style={{
            position: isMoving ? 'absolute' : 'relative', // Change position to absolute when moving
            top: isMoving ? position.top : 'auto',
            left: isMoving ? position.left : 'auto',
            padding: '10px 20px',
            fontSize: '16px',
            fontWeight: 'bold',
            backgroundColor: '#A8D5A1',
            color: '#3A3A3A',
            border: 'none',
            borderRadius: '10px',
            display: 'flex',
            alignItems: 'center',
            gap: '8px',
            boxShadow: '0 4px 8px rgba(0, 0, 0, 0.2)',
            cursor: 'pointer',
          }}
        >
          ENGGA!! 😡
        </button>

        <button
          onClick={navigateToPage}
          style={{
            padding: '10px 20px',
            fontSize: '16px',
            fontWeight: 'bold',
            backgroundColor: '#A8D5A1',
            color: '#3A3A3A',
            border: 'none',
            borderRadius: '10px',
            display: 'flex',
            alignItems: 'center',
            gap: '8px',
            boxShadow: '0 4px 8px rgba(0, 0, 0, 0.2)',
            cursor: 'pointer',
          }}
        >
          iyaa, aku maafin 😗😗
        </button>
      </div>
    </div>
  );
};

export default StyledButton;
