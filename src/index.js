import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import {BrowserRouter,Switch,Route} from "react-router-dom";
import reportWebVitals from './reportWebVitals';
import Videos from './Videos';
import VideosMetaData from './VideosMetaData';

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
    <Switch>
      <Route path="/videosMetaData">
       <VideosMetaData></VideosMetaData>
      </Route>
      <Route path="/videos">
        <Videos></Videos>
      </Route>
      <Route path="/">
      <App />
      </Route>
    </Switch>  
    
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
