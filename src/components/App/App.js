import './App.css';
import React from 'react';
import { BrowserRouter, Route, Link, Switch } from 'react-router-dom'; 
import PageA from '../PageA/PageA';
import PageB from '../PageB/PageB';

function App() {
  return (
    <BrowserRouter>
    <div className="wrapper">

      <div className="nav">
        <h1>Do you like A or B???</h1>
        <Link to="/pageA">PageA</Link><br/>
        <Link to="/pageB">PageB</Link>
      </div>
    
      <div className="main">
        <Switch>
          <Route path="/pageA" component={PageA}/>
          <Route path="/pageB" component={PageB}/>  
        </Switch>    
      </div>
    
    </div>
    </BrowserRouter>
    
  );
}

export default App;
