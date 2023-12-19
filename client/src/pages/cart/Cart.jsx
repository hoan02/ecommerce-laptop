import React, { useState, useEffect } from "react";
import { Box, Button, Input } from "@mui/material";
import { DataGrid } from "@mui/x-data-grid";

import "./Cart.scss";

const Cart = () => {
  const [cart, setCart] = useState(
    JSON.parse(localStorage.getItem("cart") || "[]")
  );

  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(cart));
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
    setCart(cart.filter((item) => item.id !== id));
    localStorage.setItem("cart", JSON.stringify(cart));
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
      </Box>
    </>
  );
};

export default Cart;
