import React from "react";
import  ReactDOM  from "react-dom";
import { Provider } from "react-redux";
import { createStore, applyMiddleware, componse} from 'redux';
import thunk from "redux-thunk";
import App from './App';
//import './index.css';

ReactDOM.render(<App/>, document.getElementById('root')); //we render this inside the "root" id which is the 'id' of our main div in the main html page.