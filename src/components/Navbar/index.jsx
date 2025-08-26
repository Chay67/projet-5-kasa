import logo from '../../assets/logo-kasa.svg';
import { NavLink } from 'react-router-dom';

export default function Navbar() {
  return (
    <header className="navbar">
      <div className="page navbar__inner">
        <img src={logo} alt="Kasa" className="navbar__logo" />
        <nav className="navbar__nav">
          <NavLink to="/" end className={({ isActive }) => 'navbar__link ' + (isActive ? 'active' : '')}>
            Accueil
          </NavLink>
          <NavLink to="/about" className={({ isActive }) => 'navbar__link ' + (isActive ? 'active' : '')}>
            À propos
          </NavLink>
        </nav>
      </div>
    </header>
  );
}