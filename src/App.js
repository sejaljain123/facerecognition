import './App.css';
import React from 'react';
import Navigation from './components/Navigation/Navigation';
import Logo from './components/Logo/Logo';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import SignIn from './components/SignIn/SignIn';
import ImageLinkForm from './components/ImageLinkForm/ImageLinkForm';
import Rank from './components/Rank/Rank';
import Particles from 'react-particles-js';
import Register from './components/Register/Register';

const particlesOptions = {
  particles: {
    number: {
      value: 40,
      density: {
        enable: true,
        value_area: 500,
      },
    },
  },
};

function App() {
  return (
    <Router>
      <div className="App">
        <Particles className="particles" params={particlesOptions} />

        <Route exact path="/signin">
          <div>
            <Navigation />
            <SignIn />
          </div>
        </Route>

        <Route exact path="/home">
          <div>
            <Navigation />
            <Logo />
            <Rank />
            <ImageLinkForm />
          </div>
        </Route>
        <Route exact path="/register">
          <Register />
        </Route>
      </div>
    </Router>
  );
}

export default App;
