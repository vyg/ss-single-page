import React from 'react';
import { graphql } from 'react-apollo';
import gql from 'graphql-tag';
import Book from './Book';
import '../scss/bundle.scss';

const PagesQuery = gql`
  query {
    books {
      id
      content
      title
    }
  }
`;

const Main = ({ data }) => {
  const { books } = data;
  const elBooks = books !== undefined ? books.map(book => (<Book { ...book } key={book.id} />)) : null;

  return (
    <div>
      <div>Hello World</div>
      { elBooks }
    </div>
  );
};

const MainWithData = graphql(
  PagesQuery,
  { options: { notifyOnNetworkStatusChange: true } },
)(Main);

export default MainWithData;
