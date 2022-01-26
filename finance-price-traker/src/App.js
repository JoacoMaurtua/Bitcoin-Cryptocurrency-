import React from 'react';
import './App.css';
import { BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import MainPage from './pages/MainPage/Main'
import CoinPage from './pages/CoinPage/CoinPage'

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route exact path={`/`}>
              <MainPage/>
          </Route>
          <Route path={`/coin/:id`}>
              <CoinPage/>
          </Route>
        </Switch>
      </Router>
      
    </div>
  );
}

export default App;
