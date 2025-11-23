
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Home from './pages/Home';
import About from './pages/About';
import Research from './pages/Research';
import Teaching from './pages/Teaching';
import CV from './pages/CV';
import Header from './components/Header';
import Footer from './components/Footer';
import ArticlePage from './pages/articles/ArticlePage';
import './App.css';

function App() {
  return (
    <Router>
      <div className="site-container">
        <Header />
        <main className="main-content">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/research" element={<Research />} />
            <Route path="/teaching" element={<Teaching />} />
            <Route path="/cv" element={<CV />} />
            <Route path="/research/:slug" element={<ArticlePage />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
