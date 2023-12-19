import { useEffect, useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";

import "./Navbar.scss";
import logo from "../../assets/images/logo-store.png";
import SearchIcon from "@mui/icons-material/Search";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import CallIcon from "@mui/icons-material/Call";
import PendingActionsIcon from "@mui/icons-material/PendingActions";

const Navbar = () => {
  const navigate = useNavigate();
  const [searchTerm, setSearchTerm] = useState("");
  const [lengthCart, setLengthCart] = useState(0);
  useEffect(() => {
    setLengthCart(JSON.parse(localStorage.getItem("cart") || "[]").length);
  });

  const handleSearch = (e) => {
    e.preventDefault();
    // Chuyển hướng đến trang tìm kiếm với tham số query là giá trị nhập liệu
    navigate(`/search?query=${searchTerm}`);
  };

  return (
    <div className="navbar">
      <div className="logo">
        <NavLink to="/">
          <img className="img-logo" src={logo} alt="logo" />
        </NavLink>
      </div>
      <div className="search">
        <div className="box-search">
          <input
            type="text"
            placeholder="Bạn muốn tìm sản phẩm gì?"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
          <SearchIcon className="icon-search" onClick={handleSearch} />
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
          <div className="item" onClick={() => navigate(`/cart`)}>
            <ShoppingCartIcon />
            <span>Cart ({lengthCart})</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
