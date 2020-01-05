import React from 'react';
import ReactDOM from 'react-dom';
import { applyMiddleware, createStore } from "redux";
import { Provider } from 'react-redux';

// Middleware
import promise from 'redux-promise';
import multi from 'redux-multi';
import thunk from 'redux-thunk';

import App from './main/app';
// import Field from "./field/field.jsx";
// import fieldReducer from "./field/fieldReducer";

// import counterReducer from "./counter/counterReducer";
// import Counter from "./counter/counter";

import rootReducer from "./main/reducers";

// const reducers = combineReducers({
//     // field: fieldReducer
//   // counter: counterReducer
// });

// Configuração da extensão do REDUX DEV TOOLS
const devTools = window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__();
// Middleware para execução de promise
const store = applyMiddleware(thunk, multi, promise)(createStore)(rootReducer, devTools);

ReactDOM.render(
    <Provider store={store}>
        <App />
        {/*<Field initialValue='Teste' />*/}
        {/*<Counter/>*/}
    </Provider>,
    document.getElementById('app')
);
