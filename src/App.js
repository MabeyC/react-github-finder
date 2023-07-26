import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/layout/Navbar';
import User from './components/users/User';
import Alert from './components/layout/Alert';
import Home from './components/pages/Home';
import About from './components/pages/About';
import GithubState from './context/github/GithubState';
import AlertState from './context/alert/AlertState';
import NotFound from './components/pages/NotFound';

import './App.css';

const App = () => {
  return (
    <GithubState>
      <AlertState >
      <Router>
        <div className="App">
          <Navbar 
            title="Github Finder"
            icon="fa fa-github"
          />
          <div className="container">
            <Alert />
            <Routes>
              <Route path="/" element={ <Home /> }/>
              <Route path="/about/" element={ <About /> } />
              <Route path="/user/:login" element={ <User /> }/>
              <Route path='*' element={ <NotFound /> } />
            </Routes>
          </div>
        </div>
      </Router>
      </AlertState>
    </GithubState>
  );
}

export default App;
