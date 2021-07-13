import React from 'react';
import ReactDom from 'react-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'popper.js';
import '@popperjs/core';
import 'jquery';
import App from '../src/App';
import { ToastContainer } from 'react-toastify';


ReactDom.render(
  <>
    <App />

  </>, document.getElementById("root")
)