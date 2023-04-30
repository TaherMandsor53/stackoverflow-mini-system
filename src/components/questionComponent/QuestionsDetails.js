import React, { useState } from 'react';
import upArrow from '../../assets/upArrow.png';
import downArrow from '../../assets/downArrow.png';

export default function QuestionsDetails() {
  const path = window.location.pathname;
  const splitId = path.split('/')[2];

  const questionData = JSON.parse(localStorage.getItem('questionDetails'));
  const filterData = questionData?.find(item => item?.id === splitId);

  const [vote, setVote] = useState(0);
  const onIconClick = val => {
    if (val === 'up') {
      setVote(vote + 1);
    } else {
      setVote(vote < 0 ? -1 : vote - 1);
    }
  };

  console.log({ filterData });
  return (
    <div>
      <div className="question-details-content">
        <div className="vote-answer-section">
          <div>
            <img src={upArrow} alt="up-arrow" className="up-down-icon" onClick={() => onIconClick('up')} />
          </div>
          <div>{vote}</div>
          <div>
            <img src={downArrow} alt="down-arrow" className="up-down-icon" onClick={() => onIconClick('down')} />
          </div>
        </div>
        <div className="question-section">
          <div className="question-title">{filterData?.title}</div>
          <div dangerouslySetInnerHTML={{ __html: filterData?.description }} />
        </div>
      </div>
    </div>
  );
}
