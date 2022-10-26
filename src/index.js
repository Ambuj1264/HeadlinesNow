import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import {BrowserRouter} from 'react-router-dom'
import Navbar from './Navbar';
import App from './App';
import FrontPage from './FrontPage';
const root = ReactDOM.createRoot(document.getElementById('root'));



root.render(
  <>
  <BrowserRouter>
 
  <Navbar  style={{position:"fixed",top:"0"}}/>
 <App></App>
 </BrowserRouter>
  </>
);

