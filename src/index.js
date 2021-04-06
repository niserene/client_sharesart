import React from 'react';
import ReactDOM from 'react-dom';
import 'bootstrap/dist/css/bootstrap.min.css' ;
import 'font-awesome/css/font-awesome.css'
import App from './App';
import {DataProvider} from './Redux/store'
ReactDOM.render(
  <React.StrictMode>
    <DataProvider>
       <App /> 
    </DataProvider>
  </React.StrictMode>,
  document.getElementById('root')
);

