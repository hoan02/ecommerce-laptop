import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import { Box, Button, Input, Grid, TextField } from "@mui/material";
import { DataGrid } from "@mui/x-data-grid";

import newRequest from "../../utils/newRequest";
import toastService from "../../utils/toastService";
import "./Cart.scss";

const Cart = () => {
  const queryClient = useQueryClient();
  const navigate = useNavigate();
  const [cart, setCart] = useState(
    JSON.parse(localStorage.getItem("cart") || "[]")
  );

  const [formData, setFormData] = useState({
    userInfo: {
      name: "",
      phone: "",
      address: "",
      email: "",
    },
    note: "",
  });

  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(cart));
  }, [cart]);

  const handleQuantityChange = (productId, newQuantity) => {
    const quantityValue = parseInt(newQuantity, 10);
    setCart((prev) =>
      prev.map((item) =>
        item.product && item.product.id === productId
          ? {
              ...item,
              quantityBuy: Math.max(
                1,
                Math.min(quantityValue, item.product.quantity)
              ),
            }
          : item
      )
    );
  };

  const handleRemove = (productId) => {
    setCart((prevCart) => {
      const updatedCart = prevCart.filter(
        (item) => item.product.id !== productId
      );
      localStorage.setItem("cart", JSON.stringify(updatedCart));
      return updatedCart;
    });
  };

  const calculateTotal = () => {
    return cart.reduce(
      (total, item) => total + item.product.price * item.quantityBuy,
      0
    );
  };

  const columns = [
    {
      field: "stt",
      headerName: "STT",
      width: 50,
      renderCell: (params) => params.api.getAllRowIds().indexOf(params.id) + 1,
    },
    {
      field: "image",
      headerName: "Ảnh",
      width: 120,
      renderCell: (params) => (
        <a href={params.value} target="_blank" rel="noopener noreferrer">
          <img
            src={params.value}
            alt=""
            style={{
              width: "120px",
              height: "100px",
              objectFit: "fill",
            }}
          />
        </a>
      ),
    },
    {
      field: "title",
      headerName: "Tên sản phẩm",
      width: 350,
      renderCell: (params) => (
        <div style={{ whiteSpace: "pre-line" }}>{params.value}</div>
      ),
    },
    {
      field: "warrantyDuration",
      headerName: "Bảo hành",
      width: 100,
      renderCell: (params) => <span>{params.value}</span>,
    },
    {
      field: "price",
      headerName: "Giá",
      width: 120,
      renderCell: (params) => <span>{params.value}</span>,
    },
    {
      field: "quantityBuy",
      headerName: "Số lượng",
      width: 80,
      renderCell: (params) => (
        <Input
          type="number"
          value={params.value}
          onChange={(e) => handleQuantityChange(params.row.id, e.target.value)}
        />
      ),
    },
    {
      field: "total",
      headerName: "Tổng",
      width: 150,
      renderCell: (params) => <span>{params.value}</span>,
    },
    {
      field: "remove",
      headerName: "",
      width: 80,
      renderCell: (params) => (
        <Button
          variant="contained"
          color="error"
          onClick={() => handleRemove(params.row.id)}
        >
          Xóa
        </Button>
      ),
    },
  ];

  const rows = cart.map((item) => ({
    id: item.product.id,
    image: item.product.image,
    title: item.product.title,
    warrantyDuration: `${item.product.warranty.duration} tháng`,
    price: new Intl.NumberFormat("vi-VN").format(item.product.price) + " đ",
    quantityBuy: item.quantityBuy,
    total: (
      <span className="total">
        {new Intl.NumberFormat("vi-VN").format(
          item.product.price * item.quantityBuy
        )}{" "}
        VND
      </span>
    ),
  }));

  const handleInputUserInfo = (field, value) => {
    setFormData((prevData) => ({
      ...prevData,
      userInfo: {
        ...prevData.userInfo,
        [field]: value,
      },
    }));
  };

  // POST: Create new order
  const createOrder = useMutation({
    mutationFn: (formData) => {
      return newRequest.post(`order/create`, formData);
    },
    onSuccess: (res) => {
      toastService.success(res.data.message);
      queryClient.invalidateQueries(["orders"]);
      localStorage.removeItem("cart");
      navigate(`/`);
    },
    onError(err) {
      toastService.error(err.response.data);
    },
  });

  const handleSubmit = () => {
    const formattedCart = cart.map((item) => ({
      product: item.product.id,
      quantityBuy: item.quantityBuy,
    }));

    const newData = {
      ...formData,
      cart: formattedCart,
      status: "pending",
    };
    createOrder.mutate(newData);
  };

  return (
    <>
      <Box>
        {cart && (
          <DataGrid
            density="comfortable"
            rows={rows}
            columns={columns}
            rowHeight={100}
            pageSize={5}
          />
        )}
        <Box sx={{ ml: 90, p: 2 }}>
          Tổng tiền:{" "}
          <b>{new Intl.NumberFormat("vi-VN").format(calculateTotal())} VND</b>
        </Box>
      </Box>
      <Grid container spacing={2}>
        <Grid item xs={7}>
          <Box border={1} padding={2}>
            1. Khách hàng khai báo thông tin(*)
            <TextField
              label="Họ tên"
              fullWidth
              margin="normal"
              value={formData.userInfo.name}
              onChange={(e) => handleInputUserInfo("name", e.target.value)}
            />
            <TextField
              label="Điện thoại"
              fullWidth
              type="number"
              margin="normal"
              value={formData.userInfo.phone}
              onChange={(e) => handleInputUserInfo("phone", e.target.value)}
            />
            <TextField
              label="Địa chỉ"
              fullWidth
              margin="normal"
              value={formData.userInfo.address}
              onChange={(e) => handleInputUserInfo("address", e.target.value)}
            />
            <TextField
              label="Email"
              fullWidth
              margin="normal"
              value={formData.userInfo.email}
              onChange={(e) => handleInputUserInfo("email", e.target.value)}
            />
          </Box>
        </Grid>

        <Grid item xs={5}>
          <Box border={1} padding={2}>
            2. Ghi chú cho đơn hàng
            <TextField
              fullWidth
              margin="normal"
              multiline
              rows={8}
              onChange={(e) =>
                setFormData((prevData) => ({
                  ...prevData,
                  note: e.target.value,
                }))
              }
            />
          </Box>
          <Box>
            <Button
              variant="contained"
              color="success"
              sx={{ p: 1, mt: 3, ml: 20 }}
              onClick={handleSubmit}
            >
              Gửi đơn hàng
            </Button>
          </Box>
        </Grid>
      </Grid>
    </>
  );
};

export default Cart;
