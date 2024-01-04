import './App.css';

import React from 'react';

import NavBar from './NavBar';
import { Route, Routes } from 'react-router-dom';
import HomePage from './HomePage';
import BlogPage from './BlogPage';
import AboutUsPage from './AboutUsPage';
import PrivacyPage from './PrivacyPage';
import BestFriendsQuiz from './BestFriendsQuiz';
import QuestionsPageFriends from './QuestionsPageFriends';
import QuestionsPageCouple from './QuestionsPageCouple';
import CoupleQuiz from './CoupleQuiz';

function App() {
  return (
    <>
      <NavBar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path='blogPage' element={<BlogPage />}></Route>
        <Route path='aboutUsPage' element={<AboutUsPage />}></Route>
        <Route path='privacyPage' element={<PrivacyPage />}></Route>
        <Route path='bestfriends-quiz' element={<BestFriendsQuiz />}></Route>
        <Route path='/bestfriends-quiz/question-page-friends' element={<QuestionsPageFriends />}></Route>
        <Route path='couple-quiz' element={<CoupleQuiz />}></Route>
        <Route path='/couple-quiz/question-page-couple' element={<QuestionsPageCouple />}></Route>
      </Routes>
    </>
  )
}

export default App