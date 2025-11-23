
import ellaImg from '../assets/ella-henninger.jpeg';
import './About.css';


const workshops = [
  {
    title: 'International Workshop on Environmental Policy',
    description: 'Presented research on air pollution mitigation strategies and social inequalities.',
    date: '2025-09-15',
    location: 'Zurich, Switzerland',
  },
  {
    title: 'Annual Conference on Social Science Methods',
    description: 'Led a session on quantitative methods for environmental attitudes research.',
    date: '2024-11-10',
    location: 'Berlin, Germany',
  },
  {
    title: 'Urban Sustainability Symposium',
    description: 'Panelist discussing urban mobility and public health policy.',
    date: '2023-06-22',
    location: 'Amsterdam, Netherlands',
  },
];

export default function About() {
  return (
    <section className="about about-landing">
      <div className="about-connector" />
      <div className="about-profile-card">
        <img
          src={ellaImg}
          alt="Ella Henninger"
          className="about-profile-img"
        />
        <div className="about-profile-text">
          <p>
            PhD candidate at ETH Zurich who is excited about getting a better understanding of the internal and external drivers of attitudes and behaviours towards the environment and air pollution mitigation, with a specific focus on social and economic inequalities. Deeply interested in exploring those and other relevant topics with cutting-edge quantitative methods.
          </p>
        </div>
      </div>
        {/* ...existing code... */}
      <div className="about-video-section">
        <div className="about-video-flex">
          <div className="about-video-text">
            <h2>Featured Video</h2>
            <p>
              Watch Ella discuss her research on environmental policy, social inequalities, and the importance of quantitative methods in understanding complex societal challenges.
            </p>
          </div>
          <iframe
            width="360"
            height="203"
            src="https://www.youtube.com/embed/LByztVHYzls"
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowFullScreen
          ></iframe>
        </div>
      </div>
      <section className="about-workshops">
        <h2>Workshops & Conferences</h2>
        <ul>
          {workshops.map((w, idx) => (
            <li key={idx} className="about-workshop-item">
              <div className="about-workshop-title">{w.title}</div>
              <div className="about-workshop-desc">{w.description}</div>
              <div className="about-workshop-meta">
                <span>{new Date(w.date).toLocaleDateString(undefined, { year: 'numeric', month: 'short', day: 'numeric' })}</span>
                {' | '}
                <span>{w.location}</span>
              </div>
            </li>
          ))}
        </ul>
      </section>
      <div className="about-contact-card">
        <h2>Contact</h2>
        <div className="about-contact-flex">
          <address className="about-contact-address">
            <strong>ETH Zürich</strong><br />
            Internat. Beziehungen, Bernauer<br />
            IFW C 40.5<br />
            Haldeneggsteig 4<br />
            8092 Zürich<br />
            Switzerland<br />
          </address>
          <div className="about-contact-details">
            <div className="about-contact-phone">
              <span>phone</span><br />
              <a href="tel:+41446326374">+41 44 632 63 74</a>
            </div>
            <div className="about-contact-email">
              <span>email</span><br />
              <a href="mailto:ella.henninger@ir.gess.ethz.ch">ella.henninger@ir.gess.ethz.ch</a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
