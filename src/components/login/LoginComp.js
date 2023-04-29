import React from 'react';
import StackIcon from '../../assets/stackIcon.png';

export default function LoginComp() {
  return (
    <div className="login-main">
      <img src={StackIcon} alt="stackIcon" className="stack-icon-img" />
      <div className="login-content">
        <>
          <h4 className="email-text">Email</h4>
          <input type="email" className="email-input" />
          <h4 className="pass-text">Password</h4>
          <input type="password" className="pass-input" />
        </>
        <div>
          <button className="login-btn">Log in</button>
        </div>
      </div>
    </div>
  );
}
