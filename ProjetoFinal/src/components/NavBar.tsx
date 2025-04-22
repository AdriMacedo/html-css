import { Link } from 'react-router-dom';
import Menu from './Menu';
import Button from './Button';
import { useState } from 'react';
import './NavBar.scss';
import './Menu.scss';

function NavBar() {
  const [showMenu, setShowMenu] = useState(false);
  const [hamburgerOpen, setHamburgerOpen] = useState(false);

  return (
    <nav className="navbar">
      <div className="navbar__home" onMouseEnter={() => setShowMenu(true)} onMouseLeave={() => setShowMenu(false)}>
        {/* no hover mostra o menu */}
        {/* Homepage */}
        <Link to="/">
          <Button variant={'home'} />
        </Link>
        {showMenu && (
          <div className="navbar__home-menu">
            <Menu />
          </div>
        )}
      </div>
      <div className="navbar__menu">
        <Link to="/productpage">
          <button className="btn" aria-label="See all seating products" title="See all seating products">
            Seating <span className="icon-text">⌄</span>
          </button>
        </Link>
        <button className="btn">
          Living Room <span className="icon-text">⌄</span>
        </button>
        <button className="btn">
          Outdoor <span className="icon-text">⌄</span>
        </button>
        <button className="btn">
          Bedroom <span className="icon-text">⌄</span>
        </button>
        <button className="btn">
          Storage <span className="icon-text">⌄</span>
        </button>
      </div>
      {/* menu hamburger mobile */}
      <button className="navbar__hamburger" onClick={() => setHamburgerOpen(!hamburgerOpen)}>
        {hamburgerOpen ? 'x' : '☰'}
      </button>
      {/* menu no mobile */}
      {hamburgerOpen && (
        <div className="navbar__mobile">
          <Link to="/productpage">
            <button className="btn">Seating</button>
          </Link>
          <button className="btn">Living Room</button>
          <button className="btn">Outdoor</button>
          <button className="btn">Bedroom</button>
          <button className="btn">Storage</button>
        </div>
      )}
    </nav>
  );
}

export default NavBar;
