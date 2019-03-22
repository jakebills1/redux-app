import React from 'react';
import ReactDOM from 'react-dom';
import { Provider, } from 'react-redux';
import App from './App';
import store from './store';
import 'semantic-ui-css/semantic.min.css';
import { Container } from 'semantic-ui-react';

ReactDOM.render(
  <Provider store={store} >
    <Container>
      <App />
    </Container>
  </Provider>,
 document.getElementById('root')
);

