import { useState } from "react";
import { NavLink } from "react-router-dom";
import LaptopMacIcon from "@mui/icons-material/LaptopMac";
import PaymentsIcon from "@mui/icons-material/Payments";
import CardGiftcardIcon from "@mui/icons-material/CardGiftcard";
import ConstructionIcon from "@mui/icons-material/Construction";

import "./Menu.scss";

const Menu = () => {
  const [isHovered, setHovered] = useState(false);
  const handleMouseEnter = () => {
    setHovered(true);
  };

  const handleMouseLeave = () => {
    setHovered(false);
  };

  return (
    <div className="menu">
      <div className="menu-items">
        <div className="items">
          <div className="item" onMouseEnter={handleMouseEnter}>
            <LaptopMacIcon />
            <NavLink className="link" to="/">
              Danh mục laptop
            </NavLink>
          </div>
          <div className="item">
            <CardGiftcardIcon />
            <NavLink className="link" to="/khuyen-mai">
              Khuyến mãi
            </NavLink>
          </div>
          <div className="item">
            <ConstructionIcon />
            <NavLink className="link" to="/bao-hanh-hau-mai">
              Bảo hành - hậu mãi
            </NavLink>
          </div>
          <div className="item">
            <PaymentsIcon />
            <NavLink className="link" to="/tra-gop">
              Trả góp
            </NavLink>
          </div>
        </div>
      </div>
      {isHovered && (
        <div
          className="sub-menu"
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
        >
          <div className="all-brand-name">
            <div className="brand-name">
              <p>Laptop Dell</p>
              <div className="brand-container">
                <ul>
                  <li>Dell Alienware</li>
                  <li>Dell Precision</li>
                  <li>Dell XPS</li>
                  <li>Dell Vostro</li>
                </ul>
                <ul>
                  <li>Dell Inspiron</li>
                  <li>Dell Latitude</li>
                  <li>Dell G-Seri</li>
                </ul>
              </div>
            </div>

            <div className="brand-name">
              <p>Laptop HP</p>
              <div className="brand-container">
                <ul>
                  <li>HP Elitebook</li>
                  <li>HP Spectre</li>
                  <li>HP Pavilion</li>
                  <li>HP Probook</li>
                </ul>
                <ul>
                  <li>HP Omen</li>
                  <li>HP Envy</li>
                  <li>HP Zbook</li>
                </ul>
              </div>
            </div>

            <div className="brand-name">
              <p>Laptop Acer</p>
              <div className="brand-container">
                <ul>
                  <li>Acer Aspire</li>
                  <li>Acer Nitro</li>
                  <li>Acer Spin</li>
                </ul>
                <ul>
                  <li>Acer Predator</li>
                  <li>Acer Swift</li>
                </ul>
              </div>
            </div>

            <div className="brand-name">
              <p>Laptop Lenovo</p>
              <div className="brand-container">
                <ul>
                  <li>Lenovo Ideapad</li>
                  <li>Lenovo ThinkBook</li>
                  <li>Lenovo Yoga</li>
                </ul>
                <ul>
                  <li>Lenovo Legion</li>
                  <li>Lenovo Thinkpad</li>
                </ul>
              </div>
            </div>

            <div className="brand-name">
              <p>Laptop Asus</p>
              <div className="brand-container">
                <ul>
                  <li>Asus TUF</li>
                  <li>Asus Zenbook</li>
                </ul>
                <ul>
                  <li>Asus VivoBook</li>
                  <li>Asus ROG</li>
                </ul>
              </div>
            </div>

            <div className="brand-name">
              <p>Laptop MSI</p>
              <div className="brand-container">
                <ul>
                  <li>MSI G-Seri</li>
                  <li>MSI Bravo</li>
                </ul>
                <ul>
                  <li>MSI Modern</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Menu;
