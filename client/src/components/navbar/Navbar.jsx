import "./Navbar.scss";
import logo from "../../assets/images/logo-store.png";
import SearchIcon from "@mui/icons-material/Search";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import CallIcon from "@mui/icons-material/Call";

const Navbar = () => {
  return (
    <div className="navbar">
      <div className="logo">
        <img className="img-logo" src={logo} alt="logo" />
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
