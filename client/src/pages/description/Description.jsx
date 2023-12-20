import { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import { LinearProgress, duration } from "@mui/material";
import img from "../../assets/images/laptop/lenovo-legion-5.jpg";
import img1 from "../../assets/images/laptop/lenovo-legion-5-1.jpg";
import img2 from "../../assets/images/laptop/lenovo-legion-5-2.jpg";
import img3 from "../../assets/images/laptop/lenovo-legion-5-3.jpg";
import gift from "../../assets/icons/gift.png";

import newRequest from "../../utils/newRequest";
import "./Description.scss";

const Description = () => {
  const navigate = useNavigate();
  const idProduct = useParams().id;
  const [data, setData] = useState();
  // GET: Get product by id
  const { isLoading, error } = useQuery({
    queryKey: ["product"],
    queryFn: () => newRequest.get(`product/${idProduct}`),
    onSuccess: (res) => {
      setData(res.data);
    },
  });

  const handleAddCart = () => {
    const storedCart = JSON.parse(localStorage.getItem("cart")) || [];
    const existingItem = storedCart.find((item) => item.id === data._id);

    if (!existingItem) {
      const newItem = {
        product: {
          id: data._id,
          image: data.imageFeatured.url,
          title: data.title,
          price: data.actualPrice,
          quantity: data.quantity,
          warranty: {
            duration: data.warranty.duration,
          },
        },
        quantityBuy: 1,
      };

      localStorage.setItem("cart", JSON.stringify([...storedCart, newItem]));
    }
    navigate(`/cart`);
  };

  return (
    <div className="description">
      {isLoading ? (
        <LinearProgress />
      ) : error ? (
        <>error</>
      ) : (
        data && (
          <>
            <div className="title">{data.title}</div>
            <div className="container">
              <div className="img">
                <div className="img-pre">
                  <img src={data.imageFeatured.url} alt="" />
                </div>
                {/* <div className="img-sub">
                  <img src={img1} alt="" />
                  <img src={img2} alt="" />
                  <img src={img3} alt="" />
                </div> */}
              </div>
              <div className="desc">
                <div className="price">
                  <div className="discounted-price">
                    Deal: {data.actualPrice.toLocaleString("vi-VN")}
                  </div>
                  <div className="original-price">
                    {data.retailPrice.toLocaleString("vi-VN")}
                  </div>
                </div>
                <p>
                  <b>Bảo hành:</b> {data.warranty.duration} tháng
                </p>
                <p>
                  <b>Tình trạng:</b>{" "}
                  {data.quantity == 0
                    ? "Hết hàng"
                    : `Còn hàng (${data.quantity} sản phẩm)`}
                </p>

                <b>Cấu hình chi tiết:</b>
                <div className="sub-desc">
                  <div className="row">
                    <p className="name">CPU</p>
                    <p className="value">{data.chip}</p>
                  </div>
                  <div className="row">
                    <p className="name">RAM</p>
                    <p className="value">{data.ram}</p>
                  </div>
                  <div className="row">
                    <p className="name">Ổ cứng</p>
                    <p className="value">{data.capacity}</p>
                  </div>
                  <div className="row">
                    <p className="name">Card</p>
                    <p className="value">{data.card}</p>
                  </div>
                  <div className="row">
                    <p className="name">Màn hình</p>
                    <p className="value">{data.screen}</p>
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
                <div
                  className={`btn ${
                    data.quantity === 0 ? "non-clickable" : ""
                  }`}
                >
                  <div className="btn-buy">
                    <button
                      onClick={handleAddCart}
                      disabled={data.quantity === 0}
                    >
                      Mua ngay
                    </button>
                  </div>
                  <div className="btn-installment">
                    <button>TRẢ GÓP QUA THẺ TÍN DỤNG</button>
                    <button>TRẢ GÓP QUA CÔNG TY TÀI CHÍNH</button>
                  </div>
                </div>
              </div>
            </div>
          </>
        )
      )}
    </div>
  );
};

export default Description;
