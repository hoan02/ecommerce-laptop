import "./Promotion.scss";

import img1 from "../../assets/images/2108_backtoschool2023laptopaz1560x772moi.jpg";
import img2 from "../../assets/images/0110_tu5-10tr900x900moi.jpg";
import img3 from "../../assets/images/0110_tu10-20tr900x900moi.jpg";
import img4 from "../../assets/images/0110_tu20-30tr900x900moi.jpg";
import img5 from "../../assets/images/0110_tu30-40tr900x900moi.jpg";
import img6 from "../../assets/images/0808_tu40-50tr900x900.jpg";
import img7 from "../../assets/images/0808_tu50-60tr900x900.jpg";
import img8 from "../../assets/images/1307_tren60tr.jpg";
import img9 from "../../assets/images/2108_linhkien-phukien5.jpg";
import img10 from "../../assets/images/1307_2306_co_so_tran_phu_check_in.jpg";

const Promotion = () => {
  return (
    <div className="promotion">
      <div id="content" className="nd">
        <h1 className="promotion-title">
          MỪNG TỰU TRƯỜNG - GIÁ YÊU THƯƠNG️, GIẢM TỚI 5 TRIỆU ĐỒNG
        </h1>
        <div className="promotion-text">
          ❤️ Vậy là mùa tựu trường 2023 - 2024 lại sắp tới. Các bạn học sinh,
          sinh viên đang bắt đầu chuẩn bị cho mình hành trang để hỗ trợ việc học
          tập, giải trí. Và một chiếc laptop chắc chắn sẽ là công cụ đắc lực đối
          với học tập và làm việc cho mọi người.
        </div>
      </div>

      <div className="promotion-details">
        <div className="promotion-text">
          ❤️ Hòa chung không khí đón chào năm học mới 2023, LaptopAZ triển khai
          chương trình {'"'}BACK TO SCHOOL - NHẬN QUÀ TỚI 5 TRIỆU ĐỒNG️
          {'"'} đặc biệt dành tặng cho tất cả các khách hàng.
        </div>

        <div className="promotion-text">
          🎁 TẶNG NGAY TIỀN MẶT lên tới 5 TRIỆU đồng + Giảm ngay 5% linh kiện -
          phụ kiện khi mua sắm tại
        </div>
        <div className="promotion-text">
          LaptopAZ từ ngày 01/10/2023 đến hết ngày 10/10/2023
        </div>
        <div className="promotion-image">
          <img src={img1} alt="" />
        </div>
      </div>

      <div className="promotion-details">
        <div className="promotion-text">
          MUA LIỀN TAY NHẬN NGAY TIỀN MẶT TẠI LAPTOPAZ!
        </div>

        <div className="promotion-text">
          <div className="promotion-text-item">
            ✅ Tặng ngay 200k khi mua máy từ 5 - &lt;10Triệu
          </div>
          <div className="promotion-text-item">
            ✅ Tặng ngay 300k khi mua máy từ 10 - &lt;20Triệu
          </div>
          <div className="promotion-text-item">
            ✅ Tặng ngay 400k khi mua máy từ 20 - &lt;30Triệu
          </div>
          <div className="promotion-text-item">
            ✅ Tặng ngay 700k khi mua máy từ 30- &lt;40Triệu
          </div>
          <div className="promotion-text-item">
            ✅ Tặng ngay 1500k khi mua máy từ 40 - &lt;50Triệu
          </div>
          <div className="promotion-text-item">
            ✅ Tặng ngay 3000k khi mua máy từ 50 - &lt;60Triệu
          </div>
          <div className="promotion-text-item">
            ✅ Tặng ngay 5000k khi mua máy trên 60Triệu
          </div>
          <div className="promotion-text-item">
            ✅ Giảm 5% khi mua linh kiện ram, ổ
          </div>
          <div className="promotion-text-item">
            ✅ Giảm 5% khi mua phụ kiện chuột, phím, usb, túi chống sốc, cổng
            chuyển đổi
          </div>
          <div className="promotion-text-item">
            🎯 Áp dụng toàn bộ khách hàng, kể cả TRẢ GÓP
          </div>
          <div className="promotion-text-item">
            🎯 Áp dụng cho các sản phẩm nhập trực tiếp từ LaptopAZ
          </div>
          <div className="promotion-text-item">
            ⛔ Không áp dụng cùng những chương trình khuyến mại khác
          </div>
        </div>
      </div>

      <div className="promotion-images">
        <img src={img2} alt="" />
        <img src={img3} alt="" />
        <img src={img4} alt="" />
        <img src={img5} alt="" />
        <img src={img6} className="float-left" alt="" />
        <img src={img7} alt="" />
        <img src={img8} alt="" />
        <img src={img9} alt="" />
      </div>
      <div className="promotion-text">
        <div className="promotion-text-item">
          🚨 Đặc biệt, khách hàng khi mua laptop ngoài mức giảm giá trên sẽ nhận
          ngay Bộ Quà Tặng giá trị cao vô cùng hấp dẫn bao gồm:
        </div>
        <div className="promotion-text-item">✅ Tặng Windows theo máy</div>
        <div className="promotion-text-item">
          ✅ Miễn phí cân màu màn hình công nghệ cao
        </div>
        <div className="promotion-text-item">✅ Balo thời trang AZ</div>
        <div className="promotion-text-item">
          ✅ Chuột không dây + Bàn di chuột cao cấp
        </div>
        <div className="promotion-text-item">
          ✅ Tặng gói cài đặt phần mềm, bảo dưỡng, vệ sinh chăm sóc máy trọn đời
        </div>
        <div className="promotion-text-item">
          ✅ Tặng Voucher giảm giá cho lần mua tiếp theo
        </div>
      </div>
      <div className="bot-img">
        <img src={img10} alt="" />
      </div>
    </div>
  );
};

export default Promotion;
