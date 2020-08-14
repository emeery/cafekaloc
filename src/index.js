import React from 'react';
import ReactDOM from 'react-dom';
import { Route, BrowserRouter as Router } from 'react-router-dom'
import Dashboard from './components/pages/Dashboard';
import Subsidiary from './components/pages/Subsidiary';
import Us from './components/pages/Us';

import './index.css';

const routing = (
  <div>
    <Router>
        <Route exact path="/" component={Dashboard} />
        <Route exact path="/us" component={Us} />
        <Route exact path="/filial" component={Subsidiary} />
    </Router>
  </div>
)
ReactDOM.render(routing,document.getElementById('root'));

