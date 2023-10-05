import "./Warranty.scss"; // Import file SCSS

const Warranty = () => {
  return (
    <div className="warranty">
      <h1 className="title">Bảo Hành & Hậu Mãi Laptop</h1>
      <p className="info">
        Chúng tôi cam kết cung cấp các dịch vụ bảo hành và hậu mãi chất lượng
        cho tất cả sản phẩm laptop mà bạn mua tại chúng tôi!
      </p>
      <div className="details">
        <h2>Bảo Hành</h2>
        <p>
          Chúng tôi cung cấp bảo hành cho mọi sản phẩm laptop trong 12 tháng kể
          từ ngày mua.
        </p>
        <p>
          Bảo hành bao gồm sửa chữa và thay thế các linh kiện bị hỏng miễn phí
          trong thời gian bảo hành.
        </p>

        <h2>Hậu Mãi</h2>
        <p>
          Chúng tôi cam kết hỗ trợ khách hàng sau khi hết thời gian bảo hành.
        </p>
        <p>
          Hậu mãi bao gồm tư vấn kỹ thuật, cập nhật phần mềm, và hỗ trợ kỹ thuật
          qua điện thoại và email.
        </p>
      </div>
      <div className="contact-info">
        <h2>Liên Hệ Chúng Tôi</h2>
        <p>
          Nếu bạn cần thêm thông tin về bảo hành hoặc hậu mãi, vui lòng liên hệ
          với chúng tôi:
        </p>
        <ul>
          <li>Email: support@laptopstore.com</li>
          <li>Hotline: 1800-123-456</li>
        </ul>
      </div>
    </div>
  );
};

export default Warranty;
