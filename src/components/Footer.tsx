import './Footer.css';

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div style={{ display: 'flex', justifyContent: 'center', gap: '1.5rem', marginBottom: '0.5rem' }}>
          <a href="https://github.com/ellahenninger" target="_blank" rel="noopener noreferrer" aria-label="GitHub">
            <svg width="24" height="24" fill="currentColor" viewBox="0 0 24 24"><path d="M12 0C5.37 0 0 5.37 0 12c0 5.3 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.09-.745.083-.729.083-.729 1.205.085 1.84 1.237 1.84 1.237 1.07 1.834 2.807 1.304 3.492.997.108-.775.418-1.305.762-1.606-2.665-.304-5.466-1.334-5.466-5.931 0-1.31.469-2.381 1.236-3.221-.124-.303-.535-1.523.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.984-.399 3.003-.404 1.018.005 2.046.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.873.119 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.804 5.625-5.475 5.921.43.372.823 1.102.823 2.222v3.293c0 .322.218.694.825.576C20.565 21.796 24 17.297 24 12c0-6.63-5.37-12-12-12z" /></svg>
          </a>
          <a href="https://www.linkedin.com/in/ella-h-16b672226" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
            <img
              src="https://cdn.jsdelivr.net/gh/simple-icons/simple-icons/icons/linkedin.svg"
              width="24"
              height="24"
              alt="LinkedIn"
            />
          </a>
          <a
            href="https://scholar.google.com/citations?user=R27JOScAAAAJ&hl=en&oi=ao"
            target="_blank"
            rel="noopener"
            aria-label="Google Scholar"
            className="footer-social-link"
          >
            <img
              src="https://cdn.jsdelivr.net/gh/simple-icons/simple-icons/icons/googlescholar.svg"
              alt="Google Scholar"
              className="footer-social-icon"
              style={{
                width: "32px",
                height: "32px",
                filter:
                  "invert(13%) sepia(0%) saturate(0%) hue-rotate(0deg) brightness(100%) contrast(100%)",
              }}
            />
          </a>

          <a href="https://orcid.org/0000-0001-5524-641X" target="_blank" rel="noopener noreferrer" aria-label="ORCID">
            <img
              src="https://orcid.org/assets/vectors/orcid.logo.icon.svg"
              width="24"
              height="24"
              alt="ORCID"
            />
          </a>
        </div>

        <div className="site-title footer-logo" style={{ marginBottom: '0.7rem', textAlign: 'center' }}>Ella Henninger</div>


        <div>
          &copy; {new Date().getFullYear()} Ella Henninger. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
