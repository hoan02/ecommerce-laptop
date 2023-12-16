import React, { useState } from "react";
import {
  Box,
  Button,
  FormControl,
  Grid,
  InputLabel,
  MenuItem,
  Select,
  LinearProgress,
  TextField,
} from "@mui/material";
import { useQuery } from "@tanstack/react-query";

import newRequest from "../../utils/newRequest";

const NewProduct = () => {
  const [items, setItems] = useState([]);
  const [selectedCPU, setSelectedCPU] = useState("");
  const [selectedRAM, setSelectedRAM] = useState("");
  const [selectedCapacity, setSelectedCapacity] = useState("");
  const [selectedCard, setSelectedCard] = useState("");
  const [productName, setProductName] = useState("");
  const [screenSize, setScreenSize] = useState("");

  // GET: Get all items
  const { isLoading, error } = useQuery({
    queryKey: ["items"],
    queryFn: () => newRequest.get(`item`),
    onSuccess: (res) => {
      setItems(res.data);
    },
  });

  const getCategorizedItems = (categorySlug) => {
    return items.filter((item) => item.slug === categorySlug);
  };

  return (
    <Box sx={{ pt: 1 }}>
      {isLoading ? (
        <LinearProgress />
      ) : error ? (
        <div>Error</div>
      ) : (
        <Box>
          <div>
            <Box sx={{ textAlign: "center", fontSize: 30, fontWeight: "bold" }}>
              Thêm sản phẩm mới
            </Box>
            <form>
              Tên sản phẩm:
              <TextField
                fullWidth
                sx={{ mb: 2 }}
                value={productName}
                onChange={(e) => setProductName(e.target.value)}
              />
              <Grid container spacing={2}>
                {/* Left Column */}
                <Grid item xs={4}>
                  <Box sx={{}}>
                    <FormControl fullWidth sx={{ mb: 2 }}>
                      CPU:
                      <Select
                        value={selectedCPU}
                        onChange={(e) => setSelectedCPU(e.target.value)}
                      >
                        {getCategorizedItems("chip").map((item) => (
                          <MenuItem key={item._id} value={item.name}>
                            {item.name}
                          </MenuItem>
                        ))}
                      </Select>
                    </FormControl>
                    <FormControl fullWidth sx={{ mb: 2 }}>
                      RAM:
                      <Select
                        value={selectedRAM}
                        onChange={(e) => setSelectedRAM(e.target.value)}
                      >
                        {getCategorizedItems("ram").map((item) => (
                          <MenuItem key={item._id} value={item.name}>
                            {item.name}
                          </MenuItem>
                        ))}
                      </Select>
                    </FormControl>
                    <FormControl fullWidth sx={{ mb: 2 }}>
                      Ổ cứng:
                      <Select
                        value={selectedCapacity}
                        onChange={(e) => setSelectedCapacity(e.target.value)}
                      >
                        {getCategorizedItems("capacity").map((item) => (
                          <MenuItem key={item._id} value={item.name}>
                            {item.name}
                          </MenuItem>
                        ))}
                      </Select>
                    </FormControl>
                    <FormControl fullWidth sx={{ mb: 2 }}>
                      Card rời:
                      <Select
                        value={selectedCard}
                        onChange={(e) => setSelectedCard(e.target.value)}
                      >
                        {getCategorizedItems("card").map((item) => (
                          <MenuItem key={item._id} value={item.name}>
                            {item.name}
                          </MenuItem>
                        ))}
                      </Select>
                    </FormControl>
                    Màn hình:
                    <TextField
                      fullWidth
                      sx={{ mb: 2 }}
                      value={screenSize}
                      onChange={(e) => setScreenSize(e.target.value)}
                    />
                  </Box>
                </Grid>

                {/* Right Column */}
                <Grid item xs={8}>
                  <Box>
                    {/* Add your image upload functionality here */}
                    <Button variant="contained" color="primary">
                      Thêm hình ảnh
                    </Button>
                  </Box>
                </Grid>
              </Grid>
              <Button type="submit" variant="contained" color="primary">
                Gửi
              </Button>
            </form>
          </div>
        </Box>
      )}
    </Box>
  );
};

export default NewProduct;
