import React, { useState, useEffect } from "react";
import { Box, Button, Input, Grid, TextField } from "@mui/material";
import { DataGrid } from "@mui/x-data-grid";

import "./Cart.scss";

const Cart = () => {
  const [note, setNote] = useState("");
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
    cart,
  });

  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(cart));
    setFormData({ ...formData, cart });
  }, [cart]);

  const handleQuantityChange = (id, newQuantity) => {
    // Chuyển đổi giá trị thành số
    const quantityValue = parseInt(newQuantity, 10);
    setCart((prev) =>
      prev.map((item) =>
        item.id === id
          ? {
              ...item,
              quantityBuy: Math.max(1, quantityValue),
            }
          : item
      )
    );
  };

  const handleRemove = (id) => {
    setCart((prevCart) => {
      const updatedCart = prevCart.filter((item) => item.id !== id);
      localStorage.setItem("cart", JSON.stringify(updatedCart));
      return updatedCart;
    });
  };

  const calculateTotal = () => {
    return cart.reduce(
      (total, item) => total + item.price * item.quantityBuy,
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
      width: 400,
      renderCell: (params) => (
        <div style={{ whiteSpace: "pre-line" }}>{params.value}</div>
      ),
    },
    {
      field: "price",
      headerName: "Giá",
      width: 150,
      renderCell: (params) => (
        <span>{new Intl.NumberFormat("vi-VN").format(params.value)} đ</span>
      ),
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
      renderCell: (params) => (
        <span className="total">
          {new Intl.NumberFormat("vi-VN").format(
            params.row.price * params.row.quantityBuy
          )}{" "}
          VND
        </span>
      ),
    },
    {
      field: "remove",
      headerName: "",
      width: 120,
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

  const handleInputUserInfo = (field, value) => {
    setFormData((prevData) => ({
      ...prevData,
      userInfo: {
        ...prevData.userInfo,
        [field]: value,
      },
    }));
  };

  const handleSubmit = () => {
    console.log(formData);
  };

  return (
    <>
      <Box>
        {cart && (
          <DataGrid
            density="comfortable"
            getRowId={(row) => row.id}
            rows={cart}
            rowHeight={100}
            columns={columns}
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
            1. Khách hàng khai báo thông tin
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
