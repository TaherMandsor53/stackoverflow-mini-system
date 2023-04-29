import React from 'react';

export default function Questions() {
  return (
    <div className="question-main">
      <div className="question-header">
        <h4 className="all-question-text">All Questions</h4>
        <button className="ask-question-btn">Ask Question</button>
      </div>
      <div className="question-content">
        <div className="vote-answer-section">
          <div>
            0 <span className="votes-text">votes</span>
          </div>
          <div>
            0 <span className="answer-text">answers</span>
          </div>
          <div>
            0 <span className="views-text">views</span>
          </div>
        </div>
        <div className="question-section">
          <div>Title</div>
          <div>question details</div>
        </div>
      </div>
    </div>
  );
}
