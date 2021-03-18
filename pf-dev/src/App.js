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
        <BrowserRouter basename={process.env.PUBLIC_URL}>
        <Header/>
        <div className="app-wrapper">
          <Router>
          <Route path={["/","/portfolio"]} exact component={Home}/>
          </Router>
        <Nav />
        </div>

        

        </BrowserRouter>
        
    </div>
  );
}

export default App;
