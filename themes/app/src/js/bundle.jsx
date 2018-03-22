/* Theme Bundle
=========================================================================== */

import React from 'react';
import { render } from 'react-dom';
import App from '../components/App';


render(
  <App />,
  document.getElementById('app'),
);

// It works well
if (module.hot) {
  module.hot.accept();
}
