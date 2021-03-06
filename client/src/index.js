import React from 'react';
import ReactDOM from 'react-dom';
import { createStore } from 'redux';
import { Provider } from 'react-redux';

import edithReducer from './reducers/edith';
import App from './App';

const store = createStore(edithReducer, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());

ReactDOM.render(
    <Provider store={store}>
        <App /> 
    </Provider>,

    document.getElementById('root')
);

document.addEventListener('DOMContentLoaded', () => {
    speechSynthesis.getVoices();
});