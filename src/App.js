import './App.css';

import React from 'react';

import NavBar from './NavBar';
import { Route, Routes } from 'react-router-dom';
import HomePage from './HomePage';
import BlogPage from './BlogPage';
import AboutUsPage from './AboutUsPage';
import PrivacyPage from './PrivacyPage';
import QuizEntry from './QuizEntry';
import QuestionPage from './QuestionPage';

function App() {
  return (
    <>
      <NavBar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path='blogPage' element={<BlogPage />}></Route>
        <Route path='aboutUsPage' element={<AboutUsPage />}></Route>
        <Route path='privacyPage' element={<PrivacyPage />}></Route>

        <Route path='quiz-entry' element={<QuizEntry />}></Route>
        <Route path='/quiz-entry/:name' element={<QuestionPage/>}></Route>
      </Routes>
    </>
  )
}

export default App