import React from 'react';
import ReactDom from "react-dom";
import QuestionFeed from './QuestionFeed';
import data from "src/constraints/data"

const App = props => {
  return (
    <div>
      <h1>We Are Here To Help!</h1>
      <QuestionFeed
        questions={props.question} />
    </div>
  )
}

export default App;
