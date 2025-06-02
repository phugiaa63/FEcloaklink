import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Header from './components/header';
import Footer from './components/footer';
import Home from './components/home/homeSection';

function App() {
  return (
    
      <div className="d-flex flex-column min-vh-100">
        {/* <Header /> */}
        <main className="flex-grow-1">
          <Routes>
            <Route path="/:code" element={<Home />} />
            <Route path="/" element={<Home />} />
          </Routes>
        </main>
        <Footer />
      </div>
    
  );
}

export default App;
