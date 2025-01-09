
import React from 'react';
import Home from './pages/Home';
import GlobalStyle from './components/GlobalStyles';
import { Route, Routes, BrowserRouter } from "react-router-dom";
import Nav from './components/Nav';


function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <GlobalStyle />
        <Nav />
        <Routes>
          <Route path="/game/:id" element={<Home />} />
          <Route path="/" element={<Home />} />
        </Routes>
      </BrowserRouter>
    </div >
  );
}

export default App;