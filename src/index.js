import React from 'react';
import ReactDOM from 'react-dom';
import 'swiper/components/pagination/pagination.scss';
import 'swiper/components/navigation/navigation.scss';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import './bootraps.min.css';
import './base.scss';
import './_normalize.scss';
import './menu.scss';
import './header.scss';
import './common.scss';
import './banner.scss';
import { BrowserRouter } from 'react-router-dom'

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
