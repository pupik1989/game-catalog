import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
//redux setup
import { Provider } from 'react-redux'
import { createStore, applyMiddleware, compose } from 'redux';
import rootReducer from './reducers';
import { thunk } from "redux-thunk";

const composeEnhancers =
  (typeof window !== 'undefined' &&
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) ||
  compose;


const root = ReactDOM.createRoot(document.getElementById('root'));
const store = createStore(rootReducer, composeEnhancers(applyMiddleware(thunk)))

if (root) {
  root.render(
    <React.StrictMode>
      <Provider store={store}>
        <App />
      </Provider>
    </React.StrictMode>
  );
} else {
  throw new Error(
    "Root element with ID 'root' was not found in the document. Ensure there is a corresponding HTML element with the ID 'root' in your HTML file.",
  )
}

