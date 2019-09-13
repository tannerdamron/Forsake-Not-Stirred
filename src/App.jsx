import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import './App.css';
import Home from "./pages/Home/Home";
import Navbar from './components/Navbar/Navbar';
import Events from "./pages/Events/Events";

class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <Navbar />
          <Route exact path="/" component={Home} />
          <Route exact path="/events" component={Events} />
        </div>
      </Router>
    );
  }
}

export default App;
