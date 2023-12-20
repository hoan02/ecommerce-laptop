import { useState } from "react";
import { NavLink } from "react-router-dom";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import LaptopMacIcon from "@mui/icons-material/LaptopMac";
import PaymentsIcon from "@mui/icons-material/Payments";
import CardGiftcardIcon from "@mui/icons-material/CardGiftcard";
import ConstructionIcon from "@mui/icons-material/Construction";

import newRequest from "../../utils/newRequest.js";
import toastService from "../../utils/toastService.js";

import "./Menu.scss";

const Menu = () => {
  const [isHovered, setHovered] = useState(false);
  const [dataMenu, setDataMenu] = useState([]);
  const handleMouseEnter = () => {
    setHovered(true);
  };

  const handleMouseLeave = () => {
    setHovered(false);
  };

  // GET: Get item by slug
  const { isLoading, error } = useQuery({
    queryFn: () => newRequest.get(`item/all?slug=brand`),
    onSuccess: (res) => {
      setDataMenu(res.data);
    },
  });

  const renderBrandContainer = (brandName) => {
    const models = dataMenu
      .filter((item) => item.parent === brandName)
      .map((item) => (
        <li key={item._id}>
          <NavLink className="link" to={`search?query=${item.name}`}>{item.name}</NavLink>
        </li>
      ));

    // Tính toán số lượng models trong mỗi cột
    const halfLength = Math.ceil(models.length / 2);
    const firstColumn = models.slice(0, halfLength);
    const secondColumn = models.slice(halfLength);

    return (
      <div className="brand-container">
        <ul className="column">{firstColumn}</ul>
        <ul className="column">{secondColumn}</ul>
      </div>
    );
  };

  const renderBrandNames = () => {
    const uniqueBrandNames = Array.from(
      new Set(dataMenu.map((item) => item.parent))
    );

    return uniqueBrandNames.map((brandName) => (
      <div className="brand-name" key={brandName}>
        <p>{brandName}</p>
        {renderBrandContainer(brandName)}
      </div>
    ));
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
          <div className="all-brand-name">{renderBrandNames()}</div>
        </div>
      )}
    </div>
  );
};

export default Menu;
