import './App.css';
// ============
import {useState, useEffect} from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';

// =====Components to immport========
import Home from './components/Home';

import Flights from './components/Flights';
// import SearchBar from './components/SearchBar';

function App() {
  
  
  
  
  
  
  
  
  
  return (
    <div className="App">
    
      <Router>
        {/** **/}

        
        <br/>

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/flights/:dep/:arr" element={<Flights />} />
          {/**
          <Route path="/flights" element={<Flights />} />
          <Route path="/:type/:query" element={<Component />} />
        **/}
        </Routes>
      </Router>

    </div>
  );
}

export default App;
