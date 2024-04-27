import React from 'react';
import ReactDOM from 'react-dom/client';

import App from './App';
import './index.css';
import { NavLinkMon } from './components';
import { About, Footer, Header, Skills, Testimonial, Work, Team, Member } from './container'
import { Navbar, ScrollToTop } from './components'

// ReactDOM.createRoot(<App/>, document.getElementById('root')); 
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
