/**
 * app.js
 *
 * This is the entry file for the application, only setup and boilerplate
 * code.
 */

// Needed for redux-saga es6 generator support
//import 'babel-polyfill';
 
// Import all the third party stuff
import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
//import 'sanitize.css/sanitize.css';

// Import root app
import App from './containers/App';


// Import CSS reset and Global Styles
//import './global-styles';
//import './style/main.scss';

import configureStore from './store';


 
// Create redux store with historys
const initialState = {};

const store = configureStore(initialState);

class DataList extends Component {
  constructor(props) {
    super(props);
  }
 
  render() {
    return (
      <Provider store={store}>
          <App dataListConfig={this.props.config} pushDispatch={this.props.pushDispatch || {}}> </App>
      </Provider>
    );
  }
}

export default DataList;
//exports.default = DataList;