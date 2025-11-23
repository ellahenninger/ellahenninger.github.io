import './Home.css';

export default function Home() {
  return (
    <section className="home">
      <h1>Ella Henninger</h1>
      <h2>Political Scientist | PhD Candidate at ETH Zurich</h2>

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
          src='src/assets/ella-henninger.jpeg'
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
          <p style={{ textAlign: 'left' }}>
            Ella is excited about getting a better understanding of the internal and external drivers of attitudes and behaviours towards the environment and air pollution mitigation, with a specific focus on social and economic inequalities. Deeply interested in exploring those and other relevant topics with cutting-edge quantitative methods.
          </p>
        </div>
      </div>
    </section>
  );
}
