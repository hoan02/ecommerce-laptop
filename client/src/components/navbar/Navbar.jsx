import { NavLink } from "react-router-dom";

import "./Navbar.scss";
import logo from "../../assets/images/logo-store.png";
import SearchIcon from "@mui/icons-material/Search";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import CallIcon from "@mui/icons-material/Call";
import PendingActionsIcon from "@mui/icons-material/PendingActions";

const Navbar = () => {
  return (
    <div className="navbar">
      <div className="logo">
        <NavLink to="/">
          <img className="img-logo" src={logo} alt="logo" />
        </NavLink>
      </div>
      <div className="search">
        <div className="box-search">
          <input type="text" placeholder="Bạn muốn tìm sản phẩm gì?" />
          <SearchIcon className="icon-search" />
        </div>
      </div>
      <div className="links">
        <div className="items">
          <div className="item">
            <PendingActionsIcon />
            <span>Tra cứu bảo hành</span>
          </div>
          <div className="item">
            <CallIcon />
            <span>0123456789</span>
          </div>
          <div className="item">
            <ShoppingCartIcon />
            <span>Cart</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
