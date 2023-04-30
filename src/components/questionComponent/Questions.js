import React, { useCallback, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import ReactPaginate from 'react-paginate';

export default function Questions() {
  const navigate = useNavigate();
  const loggedInUser = JSON.parse(localStorage.getItem('loggedInUser'));
  const [pageDetails, setPageDetails] = useState({
    offset: 0,
    perPage: 15,
    currentPage: 1,
  });

  const onAskBtnClick = () => {
    if (loggedInUser) {
      navigate('/ask-questions');
    } else {
      navigate('/user-login-error');
    }
  };
  const questionData = JSON.parse(localStorage.getItem('questionDetails'));

  const handlePageClick = e => {
    const selectedPage = e.selected;
    const offset = selectedPage * pageDetails.perPage;

    setPageDetails({
      currentPage: selectedPage,
      offset: offset,
      perPage: pageDetails.perPage,
    });
  };

  const renderData = useCallback(() => {
    const sliceData = questionData?.slice(pageDetails?.offset, parseInt(pageDetails?.offset + pageDetails?.perPage));
    return (
      sliceData &&
      sliceData.length > 0 &&
      sliceData.map((item, key) => {
        return (
          <div className="question-content" key={key}>
            <div className="vote-answer-section">
              <div>
                {item?.votes} <span className="votes-text">votes</span>
              </div>
              <div>
                {item?.answers} <span className="answer-text">answers</span>
              </div>
              <div>
                {item?.views} <span className="views-text">views</span>
              </div>
            </div>
            <div className="question-section">
              <div className="question-title">{item?.title}</div>
              <div dangerouslySetInnerHTML={{ __html: item?.description }} />
            </div>
          </div>
        );
      })
    );
  }, [pageDetails, questionData]);

  return (
    <div className="question-main">
      <div className="question-header">
        <h4 className="all-question-text">All Questions</h4>
        <button className="ask-question-btn" onClick={onAskBtnClick}>
          Ask Question
        </button>
      </div>
      {renderData()}
      <ReactPaginate
        previousLabel={'prev'}
        nextLabel={'next'}
        breakLabel={'...'}
        breakClassName={'break-me'}
        marginPagesDisplayed={2}
        pageRangeDisplayed={5}
        onPageChange={handlePageClick}
        containerClassName={'pagination'}
        subContainerClassName={'pages pagination'}
        activeClassName={'active'}
        pageCount={Math.ceil(questionData.length / pageDetails.perPage)}
      />
    </div>
  );
}
