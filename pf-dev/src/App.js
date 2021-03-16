import './App.css';
import './style.scss'
import React from 'react';
import { BrowserRouter, BrowserRouter as Router, Route } from 'react-router-dom'
import Nav from './components/Nav';
import Header from './components/Header';
import Home from './components/Home';


function App() {
  return (
    
    <div className="app-container">
        <BrowserRouter>
        <Header/>
        <Nav />
        <Router>
          <Route path="/" exact component={Home}/>
        </Router>
        </BrowserRouter>
    </div>
  );
}

export default App;
