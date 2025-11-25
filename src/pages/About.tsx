


import ellaImg from '../assets/ETH-Group.jpg';
import './About.css';
import { useState, useCallback, useEffect } from 'react';


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
      <div style={{ maxWidth: '1000px', margin: '0 auto' }}>
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
                PhD candidate at ETH Zurich studying how internal and external factors shape attitudes and behaviours toward the environment and air pollution mitigation, with a focus on social and economic inequalities. Interested in investigating these topics using advanced quantitative methods.
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
                Watch Ella discuss her research on environmental policy, social inequalities, and the importance of quantitative methods in understanding complex societal challenges.
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
        <div className="about-contact-card" style={{ marginTop: '2.5rem', width: '100' }}>
          <section className="about-workshops" style={{ margin: 0 }}>
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
        </div>
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
              width="1000"
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
      </div>
    </section>
  );
}
