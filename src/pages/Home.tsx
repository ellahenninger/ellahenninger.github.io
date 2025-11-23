
import ellaImg from '../assets/ella-henninger.jpeg';
import './Home.css';

import { useEffect, useState } from 'react';


export default function Home() {
  const [fadeIn, setFadeIn] = useState(false);
  const fullTitle = 'Ella Henninger';
  const [typedTitle, setTypedTitle] = useState('');
  useEffect(() => {
    setFadeIn(true);
    let i = 0;
    const interval = setInterval(() => {
      setTypedTitle(fullTitle.slice(0, i + 1));
      i++;
      if (i === fullTitle.length) clearInterval(interval);
    }, 90);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="home-landing">
      <div className="hero-bg">
        <div className={`hero-content fade-in${fadeIn ? ' visible' : ''}`}>
          <img
            src={ellaImg}
            alt="Ella Henninger"
            className="hero-img"
          />
          <div className="hero-text">
            <h1>
              <span>{typedTitle}</span>
              <span className={typedTitle.length < fullTitle.length ? 'typing-cursor' : ''}></span>
            </h1>
            <div style={{ display: 'flex', alignItems: 'center', gap: '1.2rem' }}>
              <span className="hero-title-line" />
              <h2 style={{ margin: 0 }}>Political Scientist<br />PhD Candidate at ETH Zurich</h2>
            </div>
            <p>
              Exploring the drivers of environmental attitudes and air pollution mitigation, with a focus on social and economic inequalities. Passionate about using cutting-edge quantitative methods for impactful research.
            </p>
          </div>
        </div>
        <div className="hero-labels-block">
          <div className="hero-labels">
            <span className="hero-label">Environmental Attitudes</span>
            <span className="hero-label">Air Pollution</span>
            <span className="hero-label">Social Inequality</span>
            <span className="hero-label">Policy Research</span>
          </div>
        </div>
      </div>
    </section>
  );
}
