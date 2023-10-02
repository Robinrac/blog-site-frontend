import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import CreatePage from './components/createPage/CreatePage';
import HomePage from './components/homePage/homePage';
import BlogPostDetail from './components/blogPostPage/components/blogPostDetail';

function App() {
 return(
 <Router>
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/blog/:blogId" component={BlogPostDetail} />
      <Route path="/create" element={<CreatePage />} />

    </Routes>
  </Router>
);
}

export default App