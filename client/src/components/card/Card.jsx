import "./Card.scss";
import { NavLink } from "react-router-dom";

const Card = ({ data }) => {
  // console.log(data);
  return (
    <div className="card">
      <NavLink className="link" to={`/desc/${data._id}`}>
        <img className="img" src={data.imageFeatured.url} alt="" />
        <p className="title">{data.title}</p>
      </NavLink>

      {/* <div className="desc">
        <div className="row">
          <p className="name">CPU</p>
          <p className="value">i5 - 12500H</p>
        </div>
        <div className="row">
          <p className="name">RAM</p>
          <p className="value">16GB DDR4</p>
        </div>
        <div className="row">
          <p className="name">Ổ cứng</p>
          <p className="value">SSD 512GB</p>
        </div>
        <div className="row">
          <p className="name">Card</p>
          <p className="value">Nvidia RTX 3050Ti</p>
        </div>
        <div className="row">
          <p className="name">Màn hình</p>
          <p className="value">{`15.6" Full HD 144Hz`}</p>
        </div>
      </div> */}

      <div className="price">
        <p className="discounted-price">
          {data.actualPrice.toLocaleString("vi-VN")}
        </p>
        <p className="original-price">
          {data.retailPrice.toLocaleString("vi-VN")}
        </p>
      </div>
    </div>
  );
};

export default Card;
