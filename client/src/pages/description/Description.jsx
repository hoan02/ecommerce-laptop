import img from "../../assets/images/laptop/lenovo-legion-5.jpg";
import img1 from "../../assets/images/laptop/lenovo-legion-5-1.jpg";
import img2 from "../../assets/images/laptop/lenovo-legion-5-2.jpg";
import img3 from "../../assets/images/laptop/lenovo-legion-5-3.jpg";
import gift from "../../assets/icons/gift.png";

import "./Description.scss";

const Description = () => {
  return (
    <div className="description">
      <div className="title">Lenovo legion 5</div>
      <div className="container">
        <div className="img">
          <div className="img-pre">
            <img src={img} alt="" />
          </div>
          <div className="img-sub">
            <img src={img1} alt="" />
            <img src={img2} alt="" />
            <img src={img3} alt="" />
          </div>
        </div>
        <div className="desc">
          <div className="price">
            <div className="discounted-price">Deal: 18.000.000</div>
            <div className="original-price">20.000.000</div>
          </div>
          <p>
            <b>Bảo hành:</b> 12 tháng
          </p>
          <p>
            <b>Tình trạng:</b> Còn hàng
          </p>

          <b>Cấu hình chi tiết:</b>
          <div className="sub-desc">
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
        </div>
        <div className="right-container">
          <div className="gift">
            <div className="gift-title">
              <img src={gift} alt="" />
              QUÀ TẶNG/KHUYẾN MẠI
            </div>
            <p>✅ Tặng Windows 11 bản quyền theo máy</p>
            <p>✅ Miễn phí cân màu màn hình công nghệ cao</p>
            <p>✅ Balo thời trang</p>
            <p>✅ Chuột không dây + Bàn di cao cấp</p>
            <p>✅ Tặng gói cài đặt, bảo dưỡng, vệ sinh máy trọn đời</p>
            <p>✅ Tặng Voucher giảm giá cho lần mua tiếp theo</p>
          </div>
          <div className="btn">
            <div className="btn-buy">
              <button>Mua ngay</button>
            </div>
            <div className="btn-installment">
              <button>TRẢ GÓP QUA THẺ TÍN DỤNG</button>
              <button>TRẢ GÓP QUA CÔNG TY TÀI CHÍNH</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Description;
