import React from "react";
import  ReactDOM  from "react-dom";
//all actions towards our backend will be done using redux
import { Provider } from "react-redux"; // provider helps us keeps track of a store which is a global state and allows us to access it from anywhere inside the app
import  {createStore, applyMiddleware, compose} from 'redux';
import thunk from 'redux-thunk';

import reducers from './reducers ';
import App from './App';
//import './index.css';

const store = createStore(reducers, compose(applyMiddleware(thunk)))

ReactDOM.render(
<Provider store={store}>
    <App/>
</Provider>,
 document.getElementById('root')); //we render this inside the "root" id which is the 'id' of our main div in the main html page.