import React from 'react';
import ReactDOM from 'react-dom';
import { Route, BrowserRouter as Router } from 'react-router-dom'
import Dashboard from './components/pages/Dashboard';
import Us from './components/pages/Us';

import './index.css';

const routing = (
  <div>
    <Router>
        <Route exact path="/" component={Dashboard} />
        <Route exact path="/us" component={Us} />
    </Router>
  </div>
)
ReactDOM.render(routing,document.getElementById('root'));

