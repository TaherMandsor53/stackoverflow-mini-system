import './App.css';
import { Routes, Route, BrowserRouter } from 'react-router-dom';
import Questions from './components/questionComponent/Questions';
import QuestionHeader from './components/questionHeader/QuestionHeader';
import LoginComp from './components/authentication/LoginComp';
import RegistrationComp from './components/authentication/RegistrationComp';
import AskQuestionComp from './components/askQuestion/AskQuestionComp';
import LoginError from './components/authentication/LoginError';

function App() {
  const loggedInUser = JSON.parse(localStorage.getItem('loggedInUser'));
  console.log({ loggedInUser });
  return (
    <div className="App">
      <BrowserRouter>
        <QuestionHeader loggedInUser={loggedInUser && loggedInUser} />
        <Routes>
          <Route path="/" element={<Questions />}></Route>
          <Route path="/login" element={<LoginComp />}></Route>
          <Route path="/user-login-error" element={<LoginError />}></Route>
          <Route path="/registration" element={<RegistrationComp />}></Route>
          <Route path="/ask-questions" element={<AskQuestionComp />}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
