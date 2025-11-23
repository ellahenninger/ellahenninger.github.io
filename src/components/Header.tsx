
import { Link, useLocation } from 'react-router-dom';
import cvPdf from '../assets/CV.pdf';
import './Header.css';

const navItems = [
  { name: 'Home', path: '/' },
  { name: 'About', path: '/about' },
  { name: 'Research', path: '/research' },
  { name: 'Teaching', path: '/teaching' },
];

import { useRef, useEffect, useState } from 'react';

export default function Header() {
  const location = useLocation();
  const navRef = useRef<HTMLUListElement>(null);
  const [scopeStyle, setScopeStyle] = useState({ left: 0, width: 0 });

  useEffect(() => {
    if (!navRef.current) return;
    const active = navRef.current.querySelector('li.active');
    if (active) {
      const rect = (active as HTMLElement).getBoundingClientRect();
      const navRect = navRef.current.getBoundingClientRect();
      setScopeStyle({
        left: rect.left - navRect.left,
        width: rect.width,
      });
    }
  }, [location.pathname]);

  return (
    <header className="header">
      <div className="header-content header-vertical">
        <Link to="/" className="site-title">Ella Henninger</Link>
        <nav>
          <ul className="nav-list" ref={navRef} style={{ position: 'relative' }}>
            <div
              className="nav-scope"
              style={{
                left: scopeStyle.left,
                width: scopeStyle.width,
                transition: 'left 0.32s cubic-bezier(.7,0,.3,1), width 0.32s cubic-bezier(.7,0,.3,1)',
              }}
            />
            {navItems.map((item) => (
              <li key={item.path} className={location.pathname === item.path ? 'active' : ''}>
                <Link to={item.path}>{item.name}</Link>
              </li>
            ))}
            <li>
              <a
                href={cvPdf}
                target="_blank"
                rel="noopener noreferrer"
              >
                CV
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}
