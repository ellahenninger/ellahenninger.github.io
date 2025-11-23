
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import Research from './pages/Research';
import Teaching from './pages/Teaching';
import Header from './components/Header';
import Footer from './components/Footer';
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
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
