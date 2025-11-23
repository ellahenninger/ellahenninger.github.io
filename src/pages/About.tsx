
import ellaImg from '../assets/ella-henninger.jpeg';
import cvPdf from '../assets/CV.pdf';
import './About.css';

export default function About() {
  return (
    <section className="about">
      <div
        style={{
          display: 'flex',
          alignItems: 'stretch',
          gap: '2.5rem',
          marginBottom: '2.5rem',
          flexWrap: 'nowrap',
        }}
      >
        <img
          src={ellaImg}
          alt="Ella Henninger"
          style={{
            maxWidth: '180px',
            height: '100%',
            borderRadius: '50%',
            boxShadow: '0 2px 8px rgba(0,0,0,0.08)',
            flexShrink: 0,
            objectFit: 'cover',
            alignSelf: 'stretch',
          }}
        />
        <div style={{ minWidth: 0, textAlign: 'left', display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
          <h1 style={{ textAlign: 'left' }}>About</h1>
          <p style={{ textAlign: 'left' }}>
            PhD candidate at ETH Zurich who is excited about getting a better understanding of the internal and external drivers of attitudes and behaviours towards the environment and air pollution mitigation, with a specific focus on social and economic inequalities. Deeply interested in exploring those and other relevant topics with cutting-edge quantitative methods.
          </p>
        </div>
      </div>
      <div style={{ display: 'flex', justifyContent: 'center', marginBottom: '2rem' }}>
        <iframe
          width="360"
          height="203"
          src="https://www.youtube.com/embed/LByztVHYzls"
          title="YouTube video player"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowFullScreen
          style={{ borderRadius: '12px', boxShadow: '0 2px 8px rgba(0,0,0,0.08)' }}
        ></iframe>
      </div>
    </section>
  );
}
