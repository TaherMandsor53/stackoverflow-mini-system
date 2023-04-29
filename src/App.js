import './App.css';
import { Routes, Route, BrowserRouter } from 'react-router-dom';
import Questions from './components/questionComponent/Questions';
import QuestionHeader from './components/questionHeader/QuestionHeader';
import LoginComp from './components/login/LoginComp';

function App() {
  return (
    <div className="App">
      <QuestionHeader />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Questions />}></Route>
          <Route path="/login" element={<LoginComp />}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
