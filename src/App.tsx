import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import StyledButton from './components/Button/StyledButton';
import AnotherPage from './components/AnotherPages/AnotherPage';

function App() {
  return (
      <Router>
      <Routes>
        <Route path="/" element={<StyledButton />} />
        <Route path="/another-page" element={<AnotherPage />} />
      </Routes>
    </Router>
  );
}

export default App;
