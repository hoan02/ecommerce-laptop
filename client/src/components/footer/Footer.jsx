import fb from "../../assets/icons/facebook-icon.png";
import yt from "../../assets/icons/youtube-icon.png";
import tt from "../../assets/icons/tiktok-icon.png";
import shipping from "../../assets/icons/shipping.gif";
import pay from "../../assets/icons/pay.gif";
import loop from "../../assets/icons/loop.gif";
import location from "../../assets/icons/location.gif";
import support from "../../assets/icons/support.gif";

import "./Footer.scss";

const Footer = () => {
  return (
    <div className="footer">
      <div className="icons-container">
        <div className="item">
          <img src={shipping} alt="" />
          <p>Giao hàng miễn phí toàn quốc</p>
        </div>
        <div className="item">
          <img src={location} alt="" />
          <p>Mua hàng từ xa</p>
        </div>
        <div className="item">
          <img src={loop} alt="" />
          <p>Đổi trả trong 15 ngày</p>
        </div>
        <div className="item">
          <img src={pay} alt="" />
          <p>Thanh toán linh hoạt</p>
        </div>
        <div className="item">
          <img src={support} alt="" />
          <p>Hỗ trợ suốt thời gian sử dụng</p>
        </div>
      </div>

      <div className="text">
        <div className="col">
          <p>CÔNG TY TNHH TIN HỌC CÔNG NGHỆ UTC</p>
          <p>Địa chỉ: Số 3 phố Cầu Giấy, P.Láng Thượng, Q.Đống Đa, Hà Nội</p>
          <p>Hotline: 0123456789</p>
          <p>Email: hotrolaptoputc@gmail.com</p>
        </div>
        <div className="col">
          <p>THÔNG TIN CÔNG TY</p>
          <p>Giới thiệu công ty</p>
          <p>Tuyển dụng</p>
          <p>Góp ý, khiếu nại</p>
        </div>
        <div className="col">
          <p>CHÍNH SÁCH CÔNG TY</p>
          <p>Chính sách chất lượng</p>
          <p>Chính sách bảo hành</p>
          <p>Chính sách đổi trả</p>
          <p>Chính sách bảo mật</p>
          <p>Chính sách vận chuyển</p>
          <p></p>
        </div>
        <div className="col">
          <p>LIÊN HỆ</p>
          <p>Hotline: 0123456789</p>
          <img src={fb} alt="" />
          <img src={yt} alt="" />
          <img src={tt} alt="" />
        </div>
      </div>
    </div>
  );
};

export default Footer;
