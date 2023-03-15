import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import Home from './home';
import * as serviceWorker from './serviceWorker';

import 'mdbootstrap/css/bootstrap.min.css';
import 'mdbootstrap/css/mdb.min.css';
import 'mdbootstrap/js/jquery.min.js';
import 'mdbootstrap/js/popper.min.js';
import 'mdbootstrap/js/bootstrap.min.js'; 
import 'mdbootstrap/js/mdb.min.js';

import { MDBDropdown, MDBDropdownMenu, MDBDropdownToggle, MDBDropdownItem } from 'mdb-react-ui-kit';


serviceWorker.register();


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  //<React.StrictMode>
    <App/>
  //</React.StrictMode>
);

ReactDOM.render(<App />, document.getElementById('root'));

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();