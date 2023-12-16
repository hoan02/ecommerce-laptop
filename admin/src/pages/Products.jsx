import { useNavigate } from "react-router-dom";
import { Button } from "@mui/material";

import ListProduct from "../components/product/ListProduct";

const Products = () => {
  const navigate = useNavigate();

  return (
    <>
      <Button
        variant="contained"
        color="success"
        onClick={() => navigate(`/products/create`)}
        sx={{ mb: 2 }}
      >
        Thêm laptop mới
      </Button>

      <ListProduct />
    </>
  );
};

export default Products;
