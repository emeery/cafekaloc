import React from 'react';
import ReactDOM from 'react-dom';
import { Route, BrowserRouter as Router } from 'react-router-dom'
import Dashboard from './components/Dashboard';
import Toolbar from './components/Toolbar';
import './index.css';
const routing = (
  <div>
    <Router>
      <Toolbar />
      <div>
        <Route exact path="/" component={Dashboard} />
      </div>
    </Router>
  </div>
)
ReactDOM.render(routing,document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
// // serviceWorker.unregister();
