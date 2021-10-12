import React from 'react';
import './App.css';
import { BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import MainPage from './pages/MainPage/Main'

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route exact path={`/`}>
              <MainPage/>
          </Route>
        </Switch>
      </Router>
      
    </div>
  );
}

export default App;
