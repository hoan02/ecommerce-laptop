import "./Card.scss";
import imglaptop from "../../assets/images/laptop/lenovo-legion-5.jpg";

const Card = () => {
  return (
    <div className="card">
      <img className="img" src={imglaptop} alt="" />
      <p className="title">Lenovo Legion 5</p>
      <div className="desc">
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
      </div>

      <div className="price">
        <p className="discounted-price">18.000.000</p>
        <p className="original-price">20.000.000</p>
      </div>
    </div>
  );
};

export default Card;
