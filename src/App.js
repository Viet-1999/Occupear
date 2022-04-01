import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Route,
  Routes,
} from 'react-router-dom';
import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import ArticlePage from './pages/ArticlePage';
import ArticlesListPage from './pages/ArticlesListPage';
import NavBar from './Navbar';
import NavBar2 from './NavBar2';
import NotFoundPage from './pages/NotFoundPage';
import './App.css';
import './assets/css/bootstrap.min.css';
import './assets/css/owl.carousel.min.css';
import './assets/css/slicknav.css';
import './assets/css/animate.min.css';
import './assets/css/price_rangs.css';
import './assets/css/magnific-popup.css';
import './assets/css/fontawesome-all.min.css';
import './assets/css/themify-icons.css';
import './assets/css/themify-icons.css';
import './assets/css/slick.css';
import './assets/css/nice-select.css';
import './assets/css/style.css';
import './assets/css/responsive.css';

import JobListing from './pages/JobListing';
import JobDetail from './pages/JobDetail';

class App extends Component {
  render() {
    return (
      <Router>
        <div id="main" className="App">
          <NavBar2 />
          <div id="page-body">
            <Routes>
              <Route exact path="/" element={<HomePage/>} />
              <Route path="/about" element={<AboutPage />} />
              <Route path="/articles-list" element={<ArticlesListPage />} />
              <Route path="/article/:name" element={<ArticlePage />} />
              <Route path="*" element={<NotFoundPage />} />
            </Routes>
          </div>
        </div>
      </Router>
    );
  }
}

export default App;
