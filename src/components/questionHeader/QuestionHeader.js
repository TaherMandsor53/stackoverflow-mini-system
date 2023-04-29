import React from 'react';
import stackOverflowLogo from '../../assets/stackoverflowLogo.png';

export default function QuestionHeader() {
  return (
    <div className="question-header-main">
      <img className="stackoverflow-logo" src={stackOverflowLogo} alt="stackoverflow-logo" />
      <div className="user-details">
        <h5>User1</h5>
      </div>
      <div className="login-btn-section">
        <button className="login-btn">Log in</button>
        <button className="signup-btn">Sign up</button>
      </div>
    </div>
  );
}
