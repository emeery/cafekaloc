import React from 'react';
import ReactDOM from 'react-dom';
import { Route, BrowserRouter as Router } from 'react-router-dom'
import Dashboard from './components/pages/Dashboard';
import Subsidiary from './components/pages/Subsidiary';
import Us from './components/pages/Us';
import Gallery from './components/pages/Gallery';
import Sidebar from '../src/components/layout/Sidebar';
import './index.css';

const routing = (
  <div>

    <Router>
    <Sidebar pageWrapId={"page-wrap"} outerContainerId={"App"} />
        <Route exact path="/" component={Dashboard} />
        <Route exact path="/us" component={Us} />
        <Route exact path="/filial" component={Subsidiary} />
        <Route exact path="/gallery" component={Gallery} />
    </Router>
  </div>
)
ReactDOM.render(routing,document.getElementById('root'));
