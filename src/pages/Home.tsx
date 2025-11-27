
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
    <section>
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
              Interested in the dynamics of environmental governance in the Majority World: Which stakeholders shape government agendas and whose voices carry weight where? How does political trust influences citizens’ support for environmental policies?
            </p>
          </div>
        </div>
        <div className="hero-labels-block">
          <div className="hero-labels">
            <span className="hero-label">Environmental attitudes</span>
            <span className="hero-label">Air pollution</span>
            <span className="hero-label">Political trust</span>
            <span className="hero-label">Majority World</span>
            <span className="hero-label">Survey research</span>
          </div>
        </div>
      </div>
    </section>
  );
}
