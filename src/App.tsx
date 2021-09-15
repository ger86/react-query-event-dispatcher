import React from 'react';
import {QueryClientProvider} from 'react-query';
import {BrowserRouter as Router, Switch, Route, Link} from 'react-router-dom';
import './App.css';
import Users from './Users';
import UserForm from './UserForm';
import queryClient from './queryClient';

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <Router>
        <nav>
          <ul>
            <li>
              <Link to="/">Usuarios</Link>
            </li>
            <li>
              <Link to="/user-form">Crear usuario</Link>
            </li>
          </ul>
        </nav>

        <Switch>
          <Route path="/" exact>
            <Users />
          </Route>
          <Route path="/user-form">
            <UserForm />
          </Route>
        </Switch>
      </Router>
    </QueryClientProvider>
  );
}

export default App;
