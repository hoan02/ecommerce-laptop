import { useState } from "react";
import {
  Box,
  Paper,
  Typography,
  Grid,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableRow,
  LinearProgress,
  Divider,
} from "@mui/material";
import { DataGrid } from "@mui/x-data-grid";
import { useQuery } from "@tanstack/react-query";
import { useParams } from "react-router-dom";
import moment from "moment";

import newRequest from "../utils/newRequest";

const OrderDetail = () => {
  const idOrder = useParams().id;
  const [dataOrder, setDataOrder] = useState();
  const [rows, setRows] = useState();

  // GET: Get order by id
  const { isLoading, error } = useQuery({
    queryKey: ["order"],
    queryFn: () => newRequest.get(`order/${idOrder}`),
    onSuccess: (res) => {
      setDataOrder(res.data);
      const cart = res.data.cart;
      setRows(
        cart.map((item) => ({
          id: item.product._id,
          image: item.product.imageFeatured.url,
          title: item.product.title,
          warrantyDuration: `${item.product.warranty.duration} tháng`,
          price:
            new Intl.NumberFormat("vi-VN").format(item.product.actualPrice) +
            " đ",
          quantityBuy: item.quantityBuy,
          total: (
            <span className="total">
              {new Intl.NumberFormat("vi-VN").format(
                item.product.actualPrice * item.quantityBuy
              )}{" "}
              VND
            </span>
          ),
        }))
      );
    },
  });

  const calculateTotal = () => {
    return dataOrder.cart.reduce(
      (total, item) => total + item.product.actualPrice * item.quantityBuy,
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
      renderCell: (params) => <span>{params.value}</span>,
    },
    {
      field: "total",
      headerName: "Tổng",
      width: 150,
      renderCell: (params) => <span>{params.value}</span>,
    },
  ];

  return (
    <>
      {isLoading ? (
        <LinearProgress />
      ) : error ? (
        <div>Error</div>
      ) : (
        dataOrder && (
          <Paper elevation={3} style={{ padding: 16, margin: 16 }}>
            <Typography
              variant="h4"
              gutterBottom
              sx={{ color: "green", textAlign: "center" }}
            >
              <b>Chi tiết đơn hàng</b>
            </Typography>
            <Divider />
            <Grid container spacing={10}>
              <Grid item xs={12} md={6} mt={2}>
                <Typography variant="h6">
                  <b>Thông tin khách hàng</b>
                </Typography>
                <TableContainer>
                  <Table>
                    <TableBody>
                      <TableRow>
                        <TableCell>Họ và tên:</TableCell>
                        <TableCell>{dataOrder.userInfo.name}</TableCell>
                      </TableRow>
                      <TableRow>
                        <TableCell>Số điện thoại:</TableCell>
                        <TableCell>{dataOrder.userInfo.phone}</TableCell>
                      </TableRow>
                      <TableRow>
                        <TableCell>Địa chỉ:</TableCell>
                        <TableCell>{dataOrder.userInfo.address}</TableCell>
                      </TableRow>
                      <TableRow>
                        <TableCell>Email:</TableCell>
                        <TableCell>{dataOrder.userInfo.email}</TableCell>
                      </TableRow>
                    </TableBody>
                  </Table>
                </TableContainer>
              </Grid>

              <Grid item xs={12} md={6} mt={2}>
                <Typography variant="h6">
                  <b>Thông tin bổ sung</b>
                </Typography>
                <TableContainer>
                  <Table>
                    <TableBody>
                      <TableRow>
                        <TableCell>Mã đơn hàng:</TableCell>
                        <TableCell>{dataOrder._id}</TableCell>
                      </TableRow>
                      <TableRow>
                        <TableCell>Ghi chú:</TableCell>
                        <TableCell>{dataOrder.note}</TableCell>
                      </TableRow>
                      <TableRow>
                        <TableCell>Trạng thái:</TableCell>
                        <TableCell>{dataOrder.status}</TableCell>
                      </TableRow>
                      <TableRow>
                        <TableCell>Ngày tạo đơn:</TableCell>
                        <TableCell>
                          {moment(dataOrder.createdAt).format(
                            "HH:mm:ss, DD/MM/YYYY"
                          )}
                        </TableCell>
                      </TableRow>
                    </TableBody>
                  </Table>
                </TableContainer>
              </Grid>

              <Grid item xs={12} mb={12}>
                <Typography variant="h6">
                  <b>Giỏ hàng</b>
                </Typography>
                {rows && (
                  <DataGrid
                    density="comfortable"
                    rows={rows}
                    columns={columns}
                    rowHeight={100}
                    pageSize={5}
                  />
                )}
                <Box mt={3}>
                  <h3>
                    Tổng tiền hóa đơn:{" "}
                    <b style={{ color: "red" }}>
                      {new Intl.NumberFormat("vi-VN").format(calculateTotal())}{" "}
                      VND
                    </b>
                  </h3>
                </Box>
              </Grid>
            </Grid>
          </Paper>
        )
      )}
    </>
  );
};

export default OrderDetail;
