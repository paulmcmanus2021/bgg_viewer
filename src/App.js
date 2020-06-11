
import React, { Fragment } from 'react';
import { BrowserRouter as Router, Switch, Route} from "react-router-dom"; 
import './App.css';
import HomeContainer from '../src/containers/HomeContainer'
import CollectionContainer from '../src/containers/CollectionContainer'

const App = () => {

    return (
        <div className="App">
          <Router>
            <Fragment>
              <Switch>

                <Route exact path="/" component={HomeContainer} />

                <Route path="/:id" component={CollectionContainer} />
                
              </Switch>
            </Fragment>
          </Router>
                
        </div>
    );
};

export default App;