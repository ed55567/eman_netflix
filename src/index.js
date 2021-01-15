import { render } from '@testing-library/react';
import React from 'react';
import ReactDOM from 'react-dom';
import App from './app';
import { GlobalStyles } from './global-styles';

render(<>
  <GlobalStyles />
  <App />
</>,
  document.getElementById('root'));


