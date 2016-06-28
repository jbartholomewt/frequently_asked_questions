import './main.scss';
import 'babel-polyfill';
import React from 'react';
import ReactDOM from 'react-dom';
import QuestionFeed from './components/QuestionFeed';
import data from './constants/data';

ReactDOM.render(
  <QuestionFeed questions={data} />,
  document.getElementById('App')
);
