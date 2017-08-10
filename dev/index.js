import React from 'react';
import ReactDOM from "react-dom";
import App from './App';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import addReducer from './reducers/index';

const store = createStore(
    addReducer, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

console.log(store.getState());

ReactDOM.render(
    <Provider store={store}>
        <App/>
    </Provider>,
    document.getElementById('root')
);
