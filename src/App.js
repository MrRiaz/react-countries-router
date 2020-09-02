import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import './App.css';
import Country from './components/Country/Country';
import CountryDetail from './components/CountryDetail/CountryDetail';
import Home from './components/Home/Home';
import NoMatch from './components/NoMatch/NoMatch';

function App() {
  
  return (
    <Router>
      <Switch>
        <Route path="/home">
          <Home/>
        </Route>
        <Route path="/country">
          <Country/>
        </Route>
        <Route exact path="/">
          <Home/>
        </Route>
        <Route path="/name/:countryName">
          <CountryDetail/>
        </Route>
        <Route path="*">
          <NoMatch/>
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
