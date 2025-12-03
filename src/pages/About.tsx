


import './About.css';



const workshops = [
  {
    title: 'Climate Change, Inequality, and Policy Contestation',
    description: 'Paper presentation',
    date: '2025-11-10',
    location: 'LSE, London, UK',
  },
  {
    title: 'European Consortium of Political Research (ECPR) General Conference',
    description: 'Paper presentation',
    date: '2025-08-26',
    location: 'Thessaloniki, Greece',
  },
  {
    title: 'Environmental Politics and Governance Conference',
    description: 'Paper presentation',
    date: '2025-06-10',
    location: 'Sachseln, Switzerland',
  },
];

export default function About() {

  return (
    <section className="about about-landing">

      <div className="about-profile-card about-profile-row">
        <div className="about-profile-text-wrapper">
          <div className="about-profile-text">
            <h2>My Research</h2>
            <p>
              I am a third-year doctoral student at ETH Zurich, Switzerland in the&nbsp;
              <a href="https://ib.ethz.ch/" target="_blank" rel="noopener noreferrer" style={{ fontWeight: 500, color: '#205295' }}>
                IPEEP
              </a> (International Political Economy and Environmental Politics) Group which is part of the&nbsp;
              <a href="https://cis.ethz.ch/" target="_blank" rel="noopener noreferrer" style={{ fontWeight: 500, color: '#205295' }}>
                CIS
              </a> (Center for Comparative and International Studies) and the&nbsp;
              <a href="https://einstein-school.ethz.ch/en/" target="_blank" rel="noopener noreferrer" style={{ fontWeight: 500, color: '#205295' }}>
                Albert Einstein School of Public Policy
              </a>.
            </p>
            <p>
              My research interests center on how environmental governance takes shape and how citizens respond to it. I examine which actors influence pollution mitigation across different contexts, assessing their incentives and capacities through qualitative and mixed methods. I also study public opinion, focusing on environmental policy support and responsibility allocation, asking how trust shapes support and perceptions of who should address pollution and who is capable of doing so, using quantitative (experimental) methods. In addition, my work investigates the political and attitudinal consequences of environmental stress, using variation in air pollution as a subtle but chronic shock to understand how everyday exposure affects government satisfaction and other political attitudes.
            </p>
            <p>
              My work has been published in <em>PNAS</em>, <em>PLOS Climate</em>, <em>Ecological Economics</em>, and <em>The Journal of Environment & Development</em>. I have acted as a reviewer for articles submitted to the <em>British Journal of Political Science</em>, <em>Environmental Politics</em>, <em>Global Environmental Politics</em>, and <em>Environment and Development Economics</em>.
            </p>
          </div>
        </div>
      </div>
      <div className="about-video-section">
        <div className="about-video-flex">
          <div className="about-video-text">
            <h2>Key Research Findings</h2>
            <p>
              As part of the final workshop of the project "Designing Environmentally Effective and Politically Feasible Policies for Cleaner Urban Air in the Global South", my colleague E. Keith Smith and I summarise our key research findings from extensive fieldwork across Africa and Asia, and online and in-person surveys.
            </p>
          </div>
          <span className="about-vertical-separator" />
          <iframe
            width="480"
            height="270"
            src="https://www.youtube.com/embed/LByztVHYzls?autoplay=1&mute=1&cc_load_policy=1"
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
            <div className="about-contact-email">
              <span>email</span><br />
              <a href="mailto:ella.henninger@ir.gess.ethz.ch">ella.henninger@ir.gess.ethz.ch</a>
            </div>
            <div className="about-contact-eth-profile">
              <span>profile</span><br />
              <a href="https://ib.ethz.ch/people/ella-henninger.html" target="_blank" rel="noopener noreferrer">ETH Zürich Profile</a>
            </div>
          </div>
        </div>
        <div className="about-map-wrapper" style={{ marginTop: '5.5rem', textAlign: 'center', display: 'flex', justifyContent: 'center' }}>
          <iframe
            title="ETH Zürich Map"
            width="950"
            height="320"
            frameBorder="0"
            className="about-map-iframe"
            style={{ border: 0, borderRadius: 14, transition: 'filter 0.4s' }}
            src="https://www.google.com/maps?q=Haldeneggsteig+4,+8092+Zürich&output=embed"
            allowFullScreen
          ></iframe>
        </div>
        <style>{`
          .about-map-iframe {
            filter: grayscale(100%);
            transition: filter 0.4s;
          }
          .about-map-wrapper:hover .about-map-iframe {
            filter: none;
          }
        `}</style>
      </div>
    </section>
  );
}
