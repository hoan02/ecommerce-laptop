import React, { useState } from "react";
import { useParams } from "react-router-dom";
import { Box, Button, LinearProgress } from "@mui/material";
import { DataGrid, GridToolbar } from "@mui/x-data-grid";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";

import newRequest from "../../utils/newRequest.js";
import toastService from "../../utils/toastService.js";

const ListItem = () => {
  const slug = useParams().slug || "";
  const queryClient = useQueryClient();
  const [list, setList] = useState([]);

  const columns = [
    {
      field: "stt",
      headerName: "STT",
      width: 100,
    },
    {
      field: "name",
      headerName: "Name",
      width: 700,
    },
    {
      field: "id",
      headerName: "ID",
      width: 240,
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

  // GET: Get item by slug
  const { isLoading, error } = useQuery({
    queryKey: [`${slug}`],
    queryFn: () => newRequest.get(`item/all?slug=${slug}`),
    onSuccess: (res) => {
      const data = res.data.reverse().map((item, index) => ({
        id: item._id,
        stt: index + 1,
        name: item.name,
      }));
      setList(data);
    },
  });

  // DELETE: Delete item
  const deleteFood = useMutation({
    mutationFn: (id) => {
      return newRequest.delete(`/item/delete/${id}`);
    },
    onSuccess: (res) => {
      toastService.success(res.data.message);
      queryClient.invalidateQueries([`${slug}`]);
    },
  });

  const clickDelete = (id) => {
    deleteFood.mutate(id);
  };

  return (
    <Box sx={{ pt: 2 }}>
      {isLoading ? (
        <LinearProgress />
      ) : error ? (
        <div>Error</div>
      ) : (
        <DataGrid
          density="comfortable"
          getRowId={(row) => row.stt}
          rows={list}
          columns={columns}
          components={{ Toolbar: GridToolbar }}
        />
      )}
    </Box>
  );
};

export default ListItem;
