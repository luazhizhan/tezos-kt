import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import MainLayout from './layouts/MainLayout';
import Home from './pages/home/Home';
import Dashboard from './pages/dashboard/Dashboard';
import FourZeroFour from './pages/404/404';

function App() {
  return (
    <MainLayout>
      <Router>
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/dashboard" exact component={Dashboard} />
          <Route path="" exact component={FourZeroFour} />
        </Switch>
      </Router>
    </MainLayout>
  );
}

export default App;
