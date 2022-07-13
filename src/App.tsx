import React from 'react';
import { Routes, Route } from "react-router-dom";
import './App.css';
import {MainPage} from "./pages/MainPage";
import ScannerPage from "./pages/ScannerPage";
import ResultPage from "./pages/ResultPage";
import {Layout} from "./layouts/Device";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route path="/" element={<MainPage />} />
          <Route path="scan" element={<ScannerPage />} />
          <Route path="result" element={<ResultPage />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
