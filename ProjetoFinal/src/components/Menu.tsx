import { Link } from "react-router-dom";
import "./Menu.scss";

function Menu() {
  return (
      <div className="menu">
        <div className="menu__section">
          <h3>Shop by Category</h3>
          <ul>
            <li>Sectionals</li>
            <li>Sofas</li>
            <li>Loveseats</li>
            <li>Accent Chairs</li>
            <li>Sleepers</li>
            <li>Sleep Kits</li>
            <li>Ottomans</li>
            <li>Seating Accessories</li>
            <Link to="/productpage">
            <li>All Seating</li>
            </Link>
          </ul>
        </div>
        <div className="menu__section">
          <h3>Shop by Upholstery</h3>
          <ul>
            <li>Performance Fabric Seating</li>
            <li>Italian Leather Seating</li>
            <li>Performance Velvet Seating</li>
            <Link to="/productpage">
            <li>All Seating</li>
            </Link>
          </ul>
        </div>
        <div className="menu__section">
          <h3>Shop by Collection</h3>
          <ul>
            <li>Nomad Collection</li>
            <li>Field Collection</li>
            <li>Range Collection</li>
            <li>Union Collection</li>
            <li>NEW</li>
            <li>Compare Collections</li>
          </ul>
        </div>
      </div>
  );
}

export default Menu;
