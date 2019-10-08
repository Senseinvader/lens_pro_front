import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import App from './components/app';
import './styles.css';
import rootReducer from './store/reducers/rootReducer';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(rootReducer, composeEnhancers(applyMiddleware(thunk)));

render(
  <Provider store={store}>
    <App/>
  </Provider>
  , document.getElementById('root'));

if (module.hot) {
  module.hot.accept(); 
}