import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Box, Button, LinearProgress } from "@mui/material";
import { DataGrid, GridToolbar } from "@mui/x-data-grid";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import moment from "moment";

import newRequest from "../utils/newRequest";
import toastService from "../utils/toastService.js";

const Orders = () => {
  const navigate = useNavigate();
  const [orders, setOrders] = useState();
  // GET: Get all orders
  const { isLoading, error } = useQuery({
    queryKey: ["orders"],
    queryFn: () => newRequest.get(`order`),
    onSuccess: (res) => {
      setOrders(res.data);
    },
  });

  const columns = [
    {
      field: "stt",
      headerName: "STT",
      width: 50,
      renderCell: (params) => params.api.getAllRowIds().indexOf(params.id) + 1,
    },
    {
      field: "username",
      headerName: "Tên người mua",
      width: 200,
      renderCell: (params) => <span>{params.value}</span>,
    },
    {
      field: "phone",
      headerName: "Số điện thoại",
      width: 200,
      renderCell: (params) => <span>{params.value}</span>,
    },
    {
      field: "address",
      headerName: "Địa chỉ",
      width: 200,
      renderCell: (params) => <span>{params.value}</span>,
    },
    {
      field: "email",
      headerName: "Email",
      width: 200,
      renderCell: (params) => <span>{params.value}</span>,
    },
    {
      field: "date",
      headerName: "Ngày tạo đơn",
      width: 200,
      renderCell: (params) => <span>{params.value}</span>,
    },
    {
      field: "status",
      headerName: "Trạng thái",
      width: 120,
      renderCell: (params) => <span>{params.value}</span>,
    },
    {
      field: "remove",
      headerName: "",
      width: 180,
      renderCell: (params) => (
        <Button
          variant="contained"
          color="primary"
          onClick={() => navigate(`${params.row.id}`)}
        >
          Xem chi tiết
        </Button>
      ),
    },
  ];

  const rows = orders?.map((order) => ({
    id: order._id,
    username: order.userInfo.name,
    phone: order.userInfo.phone,
    address: order.userInfo.address,
    email: order.userInfo.email,
    date: moment(order.createdAt).format("HH:mm:ss, DD/MM/YYYY"),
    status: order.status,
  }));

  return (
    <Box sx={{ pt: 2 }}>
      {isLoading ? (
        <LinearProgress />
      ) : error ? (
        <div>Error</div>
      ) : (
        rows && (
          <DataGrid
            density="comfortable"
            rows={rows}
            rowHeight={50}
            columns={columns}
            components={{ Toolbar: GridToolbar }}
          />
        )
      )}
    </Box>
  );
};

export default Orders;
