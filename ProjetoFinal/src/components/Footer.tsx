import About from './About';
import Contacts from './Contacts';
import Copyright from './Copyright';
import Resources from './Resources';
import ShoppingServices from './ShoppingServices';
import './Footer.scss';

function Footer() {
  return (
    <div className="footer">
      <div className="footer-section">
        <ShoppingServices />
        <About />
        <Resources />
        <Contacts />
      </div>
      <div className="footer-copyright">
        <Copyright />
      </div>
    </div>
  );
}

export default Footer;
