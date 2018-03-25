/* Theme Bundle
=========================================================================== */

import React from 'react';
import { ApolloClient } from 'apollo-client';
import { HttpLink } from 'apollo-link-http';
import { InMemoryCache } from 'apollo-cache-inmemory';
import { render } from 'react-dom';
import App from '../components/App';
import Main from '../components/Main';

const client = new ApolloClient({
  link: new HttpLink(),
  cache: new InMemoryCache(),
});

render(
  <App/>,
  document.getElementById('app'),
);

// It works well
if (module.hot) {
  module.hot.accept();
}
