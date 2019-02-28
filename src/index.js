import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import styled from 'styled-components';
import * as serviceWorker from './serviceWorker';

const StyledApp = styled.div`
  body {
    margin: 0;
    padding: 0;
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto',
      'Oxygen', 'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans',
      'Helvetica Neue', sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }
  * {
    transition: all 0.3s ease;
  }
`;

const rootApp = (
  <StyledApp>
    <App />
  </StyledApp>
);

ReactDOM.render(rootApp, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
