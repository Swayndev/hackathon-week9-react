import './App.css';
// ============
import {useState, useEffect} from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
// =====Components to immport========
import Component from './components/Component';
import SearchBar from './components/SearchBar';

function App() {
  return (
    <div className="App">
      
      <Router>
        {/**
      **/}

        <nav>
          This is the navigation bar
          {' '}
          <Link to="/">Home</Link>
          
          </nav>
        <br/>
        <SearchBar />
        <br/>

        <Routes>
          <Route path="/" element={<Component />} />
          {/**
          <Route path="/:query" element={<Component />} />
          <Route path="/:type/:query" element={<Component />} />
        **/}
        </Routes>
      </Router>

    </div>
  );
}

export default App;
