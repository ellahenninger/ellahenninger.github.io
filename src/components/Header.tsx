import { Link, useLocation } from 'react-router-dom';
import './Header.css';

const navItems = [
  { name: 'Home', path: '/' },
  { name: 'About', path: '/about' },
  { name: 'Research', path: '/research' },
  { name: 'Teaching', path: '/teaching' },
];

export default function Header() {
  const location = useLocation();
  return (
    <header className="header">
      <div className="header-content">
        <div className="site-title">Ella Henninger</div>
        <nav>
          <ul className="nav-list">
            {navItems.map((item) => (
              <li key={item.path} className={location.pathname === item.path ? 'active' : ''}>
                <Link to={item.path}>{item.name}</Link>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </header>
  );
}
