import React from 'react';
const Question = props => {

  return(
    <div className="maindiv callout">
        <div className="key" key={props.key}>
        <button onClick={props.handleClick} className="fa fa-plus-square"></button>
        {props.questionString}
        <div className="answer">{props.answerString}</div>
        </div>
    </div>
  );
};
export default Question;
