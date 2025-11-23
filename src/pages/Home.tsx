
import ellaImg from '../assets/ella-henninger.jpeg';
import './Home.css';

export default function Home() {
  return (
    <section className="home-landing">
      <div className="hero-bg">
        <div className="hero-content">
          <img
            src={ellaImg}
            alt="Ella Henninger"
            className="hero-img"
          />
          <div className="hero-text">
            <h1>Ella Henninger</h1>
            <h2>Political Scientist<br />PhD Candidate at ETH Zurich</h2>
            <p>
              Exploring the drivers of environmental attitudes and air pollution mitigation, with a focus on social and economic inequalities. Passionate about using cutting-edge quantitative methods for impactful research.
            </p>
            <div className="hero-actions">
              <a href="/about" className="hero-btn">About</a>
              <a href="/research" className="hero-btn hero-btn-primary">Research</a>
              <a href="/teaching" className="hero-btn">Teaching</a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
