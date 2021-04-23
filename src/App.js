import './App.css';
import Clarifai from 'clarifai';
import React, { Component } from 'react';
import Navigation from './components/Navigation/Navigation';
import Logo from './components/Logo/Logo';

import SignIn from './components/SignIn/SignIn';
import ImageLinkForm from './components/ImageLinkForm/ImageLinkForm';
import Rank from './components/Rank/Rank';
import Particles from 'react-particles-js';
import Register from './components/Register/Register';
import FaceRecognition from './components/FaceRecognition/FaceRecognition';

const app = new Clarifai.App({
  apiKey: '1768d0032bbd4cfdb44448f3665c7cfd',
});
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

class App extends Component {
  constructor() {
    super();
    this.state = {
      input: '',
      imageUrl: '',
      route: 'signin',
      isSignedIn: false,
    };
  }
  3;
  onInputChange = (e) => {
    this.setState({ input: e.target.value });
  };
  onButtonSubmit = () => {
    this.setState({ imageUrl: this.state.input });
    app.models.predict(Clarifai.COLOR_MODEL, this.state.imageUrl).then(
      function (response) {
        console.log(response);
      },
      function (err) {}
    );
  };
  onRouteChange = (route) => {
    if (route === 'signout') {
      this.setState({ isSignedIn: false });
    } else if (route === 'home') {
      this.setState({ isSignedIn: true });
    }
    this.setState({ route: route });
  };
  render() {
    const { isSignedIn, imageUrl, route } = this.state;
    return (
      <div className="App">
        <Particles className="particles" params={particlesOptions} />

        <Navigation isSignedIn={isSignedIn} onRouteChange={this.onRouteChange} />
        {route === 'home' ? (
          <div>
            <Logo />
            <Rank />
            <ImageLinkForm
              onInputChange={this.onInputChange}
              onButtonSubmit={this.onButtonSubmit}
            />
            <FaceRecognition imageUrl={imageUrl} />
          </div>
        ) : route === 'signin' ? (
          <SignIn onRouteChange={this.onRouteChange} />
        ) : (
          <Register onRouteChange={this.onRouteChange} />
        )}
      </div>
    );
  }
}
export default App;
