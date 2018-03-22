import React from 'react';
import { graphql } from 'react-apollo';
import gql from 'apollo-boost';

import '../scss/bundle.scss';

const PagesQuery = gql`
  query readPages {
    edges {
      node {
        Page {
          Title
          ClassName
          Content
        }
      }
    }
  }
`;

const Main = ({ data }) => {
  console.log(data);
  
  return (
    <div>Hello World</div>
  );
};

const MainWithData = graphql(PagesQuery)(Main);

export default MainWithData;