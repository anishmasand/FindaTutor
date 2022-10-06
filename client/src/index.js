import React from "react";
import  ReactDOM  from "react-dom";
import { Provider } from "react-redux";
import { createStore, applyMiddleware, compose} from 'redux';
import thunk from "redux-thunk";
import reducers from "./reducers";
import App from './App';
//import './index.css';


const store = createStore(reducers,compose(applyMiddleware(thunk)))

ReactDOM.render(<App/>, document.getElementById('root')); //we render this inside the "root" id which is the 'id' of our main div in the main html page.