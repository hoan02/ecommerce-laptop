import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Box, Button, LinearProgress } from "@mui/material";
import { DataGrid, GridToolbar } from "@mui/x-data-grid";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";

import newRequest from "../../utils/newRequest.js";
import toastService from "../../utils/toastService.js";

const ListProduct = () => {
  const navigate = useNavigate();
  const queryClient = useQueryClient();
  const [list, setList] = useState();

  const columns = [
    {
      field: "stt",
      headerName: "STT",
      width: 100,
    },
    {
      field: "image",
      headerName: "Image",
      width: 150,
      renderCell: (params) => (
        <a href={params.value} target="_blank" rel="noopener noreferrer">
          <img
            src={params.value}
            alt=""
            style={{
              width: "120px",
              height: "120px",
              objectFit: "cover",
            }}
          />
        </a>
      ),
    },
    {
      field: "title",
      headerName: "Title product name",
      width: 900,
    },
    {
      field: "Update",
      headerName: "",
      width: 100,
      sortable: false,
      filterable: false,
      disableColumnMenu: true,
      renderCell: (params) => (
        <Button
          variant="contained"
          color="success"
          onClick={() => navigate(`/products/update/${params.row.id}`)}
        >
          Update
        </Button>
      ),
    },
    {
      field: "Delete",
      headerName: "",
      width: 200,
      sortable: false,
      filterable: false,
      disableColumnMenu: true,
      renderCell: (params) => (
        <Button
          variant="contained"
          color="error"
          onClick={() => clickDelete(params.row.id)}
        >
          Delete
        </Button>
      ),
    },
  ];

  // GET: Get all products
  const { isLoading, error } = useQuery({
    queryKey: ["products"],
    queryFn: () => newRequest.get(`product`),
    onSuccess: (res) => {
      const data = res.data.reverse().map((item, index) => ({
        id: item._id,
        stt: index + 1,
        title: item.title,
        image: item.imageFeatured.url,
      }));
      setList(data);
    },
  });

  // DELETE: Delete product
  const deleteProduct = useMutation({
    mutationFn: (id) => {
      return newRequest.delete(`/product/delete/${id}`);
    },
    onSuccess: (res) => {
      toastService.success(res.data.message);
      queryClient.invalidateQueries([`products`]);
    },
  });

  const clickDelete = (id) => {
    deleteProduct.mutate(id);
  };

  return (
    <Box sx={{ pt: 2 }}>
      {isLoading ? (
        <LinearProgress />
      ) : error ? (
        <div>Error</div>
      ) : (
        list && (
          <DataGrid
            density="comfortable"
            getRowId={(row) => row.stt}
            rows={list}
            columns={columns}
            components={{ Toolbar: GridToolbar }}
          />
        )
      )}
    </Box>
  );
};

export default ListProduct;
