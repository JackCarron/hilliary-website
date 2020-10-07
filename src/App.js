import React from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import './App.css';

function App() {
  return (
    <Router>
    <div>
      <Header/>
      <Switch>
      <Route path="/about" exact component={About} />
      <Route path="/contact" component={Contact} />
      <Route path="/projects" component={Projects} />
      <Route path="/" component={LandingPage}/>
      <Route component={_404}/>
      </Switch>
    </div>
  </Router>
  );
}

export default App;
