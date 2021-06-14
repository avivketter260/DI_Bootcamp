import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Hello from './helloWorld';
import reportWebVitals from './reportWebVitals';
import LoveJsx from './loveJSX';
import NotLoveJsx from './notLoveJsx'
import Operations from './Operations'
import ExerciseFive from './JsxAndHtml'
import ExerciseSix from './jsxAndHtml2'
import ExerciseSeven from './jsxAndForm'
import ExerciseEight from './jsxAndVariables'
ReactDOM.render(
  <React.StrictMode>
    <ExerciseEight />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
