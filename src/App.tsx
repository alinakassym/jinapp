import React from 'react';
import { Routes, Route, Link } from "react-router-dom";
import './App.css';
import ScannerPage from "./pages/ScannerPage";
import ResultPage from "./pages/ResultPage";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<ScannerPage />} />
        <Route path="result" element={<ResultPage />} />
      </Routes>
    </div>
  );
}

export default App;
