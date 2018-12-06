import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import * as serviceWorker from './utils/serviceWorker';
import { configureStore } from './redux/store';
import App from './containers/App';

// Initialize store
const store = configureStore(window.__INITIAL_STATE__);
const mountApp = document.getElementById('root');

render( 
  <Provider store={store}>    
    <App/>
    </Provider>
    ,
    mountApp
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
