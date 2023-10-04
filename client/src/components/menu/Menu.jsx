import { useState } from "react";
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
            <span>Danh mục laptop</span>
          </div>
          <div className="item">
            <CardGiftcardIcon />
            <span>Khuyến mãi</span>
          </div>
          <div className="item">
            <ConstructionIcon />
            <span>Bảo hành - hậu mãi</span>
          </div>
          <div className="item">
            <PaymentsIcon />
            <span>Trả góp</span>
          </div>
        </div>
      </div>
      {isHovered && (
        <div
          className="sub-menu"
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
        >
            <div>Sub-menu item 1</div>
            <div>Sub-menu item 2</div>
            <div>Sub-menu item 3</div>
            <div>Sub-menu item 4</div>
        </div>
      )}
    </div>
  );
};

export default Menu;
