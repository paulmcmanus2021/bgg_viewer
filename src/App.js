
import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom"; 
import './App.css';
import HomeContainer from '../src/containers/HomeContainer'

const App = () => {

    return (
        <div className="App">
            <HomeContainer />
        </div>
    );
};

export default App;