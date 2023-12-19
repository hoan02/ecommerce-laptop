import { useState } from "react";
import { useQuery } from "@tanstack/react-query";
import { Box, LinearProgress } from "@mui/material";
import { useLocation } from "react-router-dom";
import Banner from "../../components/banner/Banner";
import Card from "../../components/card/Card";

import newRequest from "../../utils/newRequest.js";
import "./Home.scss";

const Home = () => {
  const location = useLocation();
  const searchTerm = new URLSearchParams(location.search).get("query");

  const [products, setProducts] = useState([]);

  // GET: Get all products
  const { isLoading, error } = useQuery({
    queryKey: ["products"],
    queryFn: () => newRequest.get(`product`),
    onSuccess: (res) => {
      setProducts(res.data.reverse());
    },
  });
  console.log(searchTerm);

  // Logic tìm kiếm
  const filteredProducts = searchTerm
    ? products.filter((item) =>
        item.title.toLowerCase().includes(searchTerm.toLowerCase())
      )
    : products;

  return (
    <div className="home">
      <Banner />
      <Box className="product-container" sx={{ mt: 1 }}>
        {isLoading ? (
          <LinearProgress />
        ) : error ? (
          <>error</>
        ) : (
          <>
            {filteredProducts.length === 0 ? (
              <p>Không có kết quả tìm kiếm cho "{searchTerm}"</p>
            ) : (
              filteredProducts.map((item) => (
                <Card key={item._id} data={item} />
              ))
            )}
          </>
        )}
      </Box>
    </div>
  );
};

export default Home;
