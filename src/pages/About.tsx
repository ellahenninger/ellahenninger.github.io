
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

      <section style={{ maxWidth: 700, margin: '0 auto 2.5rem auto', background: '#f8f8f8', borderRadius: 8, padding: '2rem' }}>
        <h2 style={{ marginTop: 0 }}>Workshops & Conferences</h2>
        <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
          {workshops.map((w, idx) => (
            <li key={idx} style={{ marginBottom: '1.5rem', borderBottom: idx < workshops.length - 1 ? '1px solid #e0e0e0' : 'none', paddingBottom: '1rem' }}>
              <div style={{ fontWeight: 600, fontSize: '1.1rem', color: '#205295' }}>{w.title}</div>
              <div style={{ color: '#444', margin: '0.3rem 0 0.5rem 0' }}>{w.description}</div>
              <div style={{ fontSize: '0.97rem', color: '#666' }}>
                <span>{new Date(w.date).toLocaleDateString(undefined, { year: 'numeric', month: 'short', day: 'numeric' })}</span>
                {' | '}
                <span>{w.location}</span>
              </div>
            </li>
          ))}
        </ul>
      </section>
    </section>
  );
}
