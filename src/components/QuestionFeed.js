import React from 'react';
import Question from './Question.js';

class QuestionFeed extends React.Component {
  constructor(props) {
    super(props);
    this.state = { selectedQuestionId: null }
    this.handleQuestionClick = this.handleQuestionClick.bind(this)
  }
  handleQuestionClick(id) {
    if (this.state.selectedQuestionId === null){
      this.setState({ selectedQuestionId: id });
    }else{
      this.setState({ selectedQuestionId: null });
    }
  }
  render(){
    let questionfeed = this.props.questions.map((question) => {
      let answered = null;
      if (question.id === this.state.selectedQuestionId) {
        answered = question.answer
      }

      let onQuestionClick = () => this.handleQuestionClick(question.id);

      return(
        <Question
        key={question.id}
        questionString={question.question}
        answerString={answered}
        handleClick={onQuestionClick}
        />
      );
    });

    return(
      <div className="question">
      {questionfeed}
      </div>
    );
  };
};
export default QuestionFeed;
