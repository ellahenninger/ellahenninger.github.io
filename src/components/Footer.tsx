import './Footer.css';

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div style={{ display: 'flex', justifyContent: 'center', gap: '1.5rem', marginBottom: '0.5rem' }}>
          <a href="https://github.com/ellahenninger" target="_blank" rel="noopener noreferrer" aria-label="GitHub">
            <svg width="24" height="24" fill="currentColor" viewBox="0 0 24 24"><path d="M12 0C5.37 0 0 5.37 0 12c0 5.3 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.09-.745.083-.729.083-.729 1.205.085 1.84 1.237 1.84 1.237 1.07 1.834 2.807 1.304 3.492.997.108-.775.418-1.305.762-1.606-2.665-.304-5.466-1.334-5.466-5.931 0-1.31.469-2.381 1.236-3.221-.124-.303-.535-1.523.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.984-.399 3.003-.404 1.018.005 2.046.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.873.119 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.804 5.625-5.475 5.921.43.372.823 1.102.823 2.222v3.293c0 .322.218.694.825.576C20.565 21.796 24 17.297 24 12c0-6.63-5.37-12-12-12z" /></svg>
          </a>
          {/* <a href="https://www.linkedin.com/in/yourprofile" target="_blank" rel="noopener">
            <i className="fa-brands fa-linkedin"></i>
          </a> */}
          <a href="https://scholar.google.com/citations?hl=en&user=MXXBKtsAAAAJ" target="_blank" rel="noopener noreferrer" aria-label="Google Scholar">
            <svg width="24" height="24" fill="currentColor" viewBox="0 0 48 48"><path d="M24 4L6 44h36L24 4zm0 7.7L37.2 42H10.8L24 11.7zm0 7.6c-2.6 0-4.7 2.1-4.7 4.7s2.1 4.7 4.7 4.7 4.7-2.1 4.7-4.7-2.1-4.7-4.7-4.7zm0 2c1.5 0 2.7 1.2 2.7 2.7s-1.2 2.7-2.7 2.7-2.7-1.2-2.7-2.7 1.2-2.7 2.7-2.7z" /></svg>
          </a>
          <a href="https://ib.ethz.ch/people/ella-henninger.html" target="_blank" rel="noopener noreferrer" aria-label="ETH">
            <svg width="24" height="24" fill="currentColor" viewBox="0 0 48 48"><rect x="6" y="20" width="36" height="8" rx="2" /><rect x="18" y="12" width="12" height="24" rx="2" /></svg>
          </a>
          <a href="https://orcid.org/0000-0001-5524-641X" target="_blank" rel="noopener noreferrer" aria-label="ORCID">
            <svg width="24" height="24" fill="currentColor" viewBox="0 0 24 24"><path d="M8.994 7.707h1.463v8.586H8.994zm.732-2.02c.51 0 .924.414.924.924a.924.924 0 1 1-1.848 0c0-.51.414-.924.924-.924zm2.62 2.02h2.36c2.02 0 3.28 1.26 3.28 3.08 0 1.82-1.26 3.08-3.28 3.08h-1.06v2.428h-1.3zm1.3 1.18v3.8h1.06c1.32 0 2.08-.7 2.08-1.9 0-1.2-.76-1.9-2.08-1.9zm-1.646-6.887c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm0 22.08c-5.573 0-10.08-4.507-10.08-10.08s4.507-10.08 10.08-10.08 10.08 4.507 10.08 10.08-4.507 10.08-10.08 10.08z" /></svg>
          </a>
        </div>
        <div>
          &copy; {new Date().getFullYear()} Ella Henninger. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
