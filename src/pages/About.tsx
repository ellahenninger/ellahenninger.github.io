


import ellaImg from '../assets/ETH-Group.jpg';
import './About.css';
import { useState, useCallback, useEffect } from 'react';


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
  // Modal gallery state for profile image
  const [galleryOpen, setGalleryOpen] = useState(false);

  // Open modal on image click
  const openGallery = useCallback(() => setGalleryOpen(true), []);
  // Close modal
  const closeGallery = useCallback(() => setGalleryOpen(false), []);

  // ESC key closes modal
  useEffect(() => {
    if (!galleryOpen) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') closeGallery();
    };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [galleryOpen, closeGallery]);

  return (
    <section className="about about-landing">
      
      <div className="about-profile-card about-profile-row">
        
        <img
          src={ellaImg}
          alt="Ella Henninger"
          className="about-profile-img"
          style={{ cursor: 'pointer' }}
          onClick={openGallery}
          tabIndex={0}
          onKeyDown={e => { if (e.key === 'Enter' || e.key === ' ') openGallery(); }}
          aria-label="Open image gallery"
        />
        <div className="about-profile-text-wrapper">
          <span className="about-vertical-separator" />
          <div className="about-profile-text">
            <h2>The Group and I</h2>
            <p>
              My research interests center on how environmental governance takes shape and how citizens respond to it. I examine which actors influence pollution mitigation across different contexts, assessing their incentives and capacities through qualitative and mixed methods. I also study public opinion on environmental policy support and responsibility allocation, with a focus on how trust shapes support and perceptions of who should address pollution and who is capable of doing so, using quantitative (experimental) methods. In addition, my work investigates the political and attitudinal consequences of environmental stress, using variation in air pollution as a subtle but chronic shock to understand how everyday exposure affects views and behaviour.
            </p>
          </div>
        </div>
      </div>
      {/* Modal Gallery for profile image */}
      {galleryOpen && (
        <div className="gallery-modal" onClick={closeGallery}>
          <div className="gallery-modal-content" onClick={e => e.stopPropagation()}>
            <img src={ellaImg} alt="Ella Henninger large" className="gallery-modal-img" />
            <button className="gallery-modal-close" onClick={closeGallery} aria-label="Close gallery">&times;</button>
          </div>
        </div>
      )}
      <div className="about-video-section">
        <div className="about-video-flex">
          <div className="about-video-text">
            <h2>Featured Video</h2>
            <p>
              As part of the final workshop of the project "Designing Environmentally Effective and Politically Feasible Policies for Cleaner Urban Air in the Global South", my colleague E. Keith Smith and I summarise our key research findings.
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
            <div className="about-contact-phone">
              <span>phone</span><br />
              <a href="tel:+41446326374">+41 44 632 63 74</a>
            </div>
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
            width="900"
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
