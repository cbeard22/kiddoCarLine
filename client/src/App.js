import React from 'react';
import './App.css';
import Main from './pages/main'
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { Link } from 'react-router-dom';
import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider,
  createHttpLink,

} from '@apollo/client';
import { setContext } from '@apollo/client/link/context';
import { onError } from 'apollo-link-error'

import Home from './pages/Home';
import Signup from './pages/SignupForm';
import ParentLogin from './pages/ParentLoginForm';
import Header from './components/Header';
import AdminLogin from './pages/AdminLoginForm';
import Position from './pages/Position';
import AdminCarDisplay from './pages/AdminCarDisplay';

const httpLink = createHttpLink({
  uri: '/graphql',
});

const authLink = setContext((_, { headers }) => {
  const token = localStorage.getItem('id_token');
  return {
    headers: {
      ...headers,
      authorization: token ? `Bearer ${token}` : '',
    },
  };
});

const client = new ApolloClient({
  link: authLink.concat(httpLink),
  cache: new InMemoryCache(),
  onError: ({ networkError, graphQLErrors }) => {
    console.log('graphQLErrors', graphQLErrors)
    console.log('networkError', networkError)
  }
});

function App() {
  return (
    <ApolloProvider client={client}>
      <Router>
        <div className="flex-column justify-flex-start min-100-vh">
          <Header />
          <div className="flex-column justify-flex-start min-100-vh">
            <div className="container">
              <Route exact path="/">
                <Home />
              </Route>
              <Route exact path="/ParentLoginForm">
                <ParentLogin />
              </Route>
              <Route exact path="/SignupForm">
                <Signup />
              </Route>
              <Route exact path="/AdminLoginForm">
                <AdminLogin />
              </Route>
              <Route exact path="/AdminCarDisplay">
                <AdminCarDisplay />
              </Route>
              <Route exact path="/Position">
                <Position />
              </Route>
              <Route exact path="/AdminCarDisplay">
                <AdminCarDisplay />
              </Route>
            </div>
          </div>
        </div>
      </Router>
    </ApolloProvider>
  );
}

export default App;
