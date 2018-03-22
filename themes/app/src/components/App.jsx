import React from 'react';
import { ApolloProvider } from 'react-apollo';
import { ApolloClient, HttpLink, InMemoryCache } from 'apollo-boost';
import Main from './Main';

const defaultOptions = {
  watchQuery: {
    fetchPolicy: 'cache-and-network',
    errorPolicy: 'ignore',
  },
  query: {
    fetchPolicy: 'network-only',
    errorPolicy: 'all',
  },
  mutate: {
    errorPolicy: 'all',
  },
};

const client = new ApolloClient({
  link: new HttpLink({ uri: 'https://localhost:8080/graphql' }),
  cache: new InMemoryCache(),
  defaultOptions,
});

const App = () => (
  <ApolloProvider client={client}>
    <Main />
  </ApolloProvider>
);

export default App;
