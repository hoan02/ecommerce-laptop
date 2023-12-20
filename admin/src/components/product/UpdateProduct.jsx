import { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import {
  Box,
  Button,
  FormControl,
  Grid,
  MenuItem,
  Select,
  LinearProgress,
  TextField,
} from "@mui/material";

import newRequest from "../../utils/newRequest";
import toastService from "../../utils/toastService";

const UpdateProduct = () => {
  const queryClient = useQueryClient();
  const navigate = useNavigate();
  const idProduct = useParams().id;
  const [titleProduct, setTitleProduct] = useState("");

  const [formData, setFormData] = useState({
    title: "",
    name: "",
    brand: "",
    chip: "",
    ram: "",
    capacity: "",
    card: "",
    screen: "",
    imageFeatured: "",
    quantity: 0,
    purchasePrice: 0,
    retailPrice: 0,
    actualPrice: 0,
    warranty: {
      duration: 0,
    },
  });

  const [items, setItems] = useState([]);

  // GET: Get all items
  const { isLoading, error } = useQuery({
    queryKey: ["items"],
    queryFn: () => newRequest.get(`item`),
    onSuccess: (res) => {
      setItems(res.data);
    },
  });

  // GET: Get product by id
  const { isLoadingProduct, errorProduct } = useQuery({
    queryKey: ["product"],
    queryFn: () => newRequest.get(`product/${idProduct}`),
    onSuccess: (res) => {
      setFormData(res.data);
    },
  });

  // POST: Update product
  const updateProduct = useMutation({
    mutationFn: (formData) => {
      return newRequest.put(`product/update/${idProduct}`, formData);
    },
    onSuccess: (res) => {
      toastService.success(res.data.message);
      queryClient.invalidateQueries(["products"]);
      navigate(`/products/board`);
    },
  });

  const getCategorizedItems = (categorySlug) => {
    return items.filter((item) => item.slug === categorySlug);
  };

  useEffect(() => {
    // Hàm xử lý để tạo titleProduct
    const { brand, name, chip, ram, capacity, card, screen } = formData;
    const title = `${brand} ${name} (${chip}, ${ram}, ${capacity}, ${card}, ${screen})`;
    setTitleProduct(title);
  }, [formData]);

  const handleImageChange = (e) => {
    // e.preventDefault();
    const file = e.target.files[0];

    if (!file) {
      return;
    }
    console.log(file);

    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onloadend = async () => {
      try {
        const res = await newRequest.post(`image/create`, {
          file: reader.result,
          name: file.name,
          folder: `dac-ta-phan-mem/products`,
        });
        toastService.success("Upload ảnh thành công!");
        setFormData({ ...formData, imageFeatured: res.data.image });
      } catch (err) {
        console.log(err);
      }
    };
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const newData = {
      ...formData,
      title: titleProduct,
    };

    updateProduct.mutate(newData);
  };

  return (
    <Box sx={{ pt: 1 }}>
      {isLoading && isLoadingProduct ? (
        <LinearProgress />
      ) : error && errorProduct ? (
        <div>Error</div>
      ) : (
        <Box>
          <div>
            <Box sx={{ textAlign: "center", fontSize: 30, fontWeight: "bold" }}>
              Thêm sản phẩm mới
            </Box>
            <form onSubmit={handleSubmit}>
              Tên hiển thị:
              <TextField
                fullWidth
                sx={{ mb: 2 }}
                value={titleProduct}
                disabled
              />
              <Grid container spacing={2}>
                {/* Left Column */}
                <Grid item xs={6}>
                  Tên sản phẩm:
                  <TextField
                    fullWidth
                    sx={{ mb: 2 }}
                    value={formData.name}
                    onChange={(e) =>
                      setFormData({ ...formData, name: e.target.value })
                    }
                  />
                  <FormControl fullWidth sx={{ mb: 2 }}>
                    Thương hiệu:
                    <Select
                      value={formData.brand}
                      onChange={(e) =>
                        setFormData({ ...formData, brand: e.target.value })
                      }
                    >
                      {getCategorizedItems("brand").map((item) => (
                        <MenuItem key={item._id} value={item.name}>
                          {item.name}
                        </MenuItem>
                      ))}
                    </Select>
                  </FormControl>
                  <FormControl fullWidth sx={{ mb: 2 }}>
                    Số lượng:
                    <TextField
                      type="number"
                      fullWidth
                      value={formData.quantity}
                      onChange={(e) =>
                        setFormData({ ...formData, quantity: e.target.value })
                      }
                      inputProps={{ min: 0 }}
                    />
                  </FormControl>
                  <FormControl fullWidth sx={{ mb: 2 }}>
                    Giá mua:
                    <TextField
                      type="number"
                      fullWidth
                      value={formData.purchasePrice}
                      onChange={(e) =>
                        setFormData({
                          ...formData,
                          purchasePrice: e.target.value,
                        })
                      }
                      inputProps={{ min: 0 }}
                    />
                  </FormControl>
                  <FormControl fullWidth sx={{ mb: 2 }}>
                    Giá bán niêm yết:
                    <TextField
                      type="number"
                      fullWidth
                      value={formData.retailPrice}
                      onChange={(e) =>
                        setFormData({
                          ...formData,
                          retailPrice: e.target.value,
                        })
                      }
                      inputProps={{ min: 0 }}
                    />
                  </FormControl>
                  <FormControl fullWidth sx={{ mb: 2 }}>
                    Giá bán thực tế:
                    <TextField
                      type="number"
                      fullWidth
                      value={formData.actualPrice}
                      onChange={(e) =>
                        setFormData({
                          ...formData,
                          actualPrice: e.target.value,
                        })
                      }
                      inputProps={{ min: 0 }}
                    />
                  </FormControl>
                </Grid>

                {/* Right Column */}
                <Grid item xs={6}>
                  <FormControl fullWidth sx={{ mb: 2 }}>
                    CPU:
                    <Select
                      value={formData.chip}
                      onChange={(e) =>
                        setFormData({ ...formData, chip: e.target.value })
                      }
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
                      value={formData.ram}
                      onChange={(e) =>
                        setFormData({ ...formData, ram: e.target.value })
                      }
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
                      value={formData.capacity}
                      onChange={(e) =>
                        setFormData({ ...formData, capacity: e.target.value })
                      }
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
                      value={formData.card}
                      onChange={(e) =>
                        setFormData({ ...formData, card: e.target.value })
                      }
                    >
                      {getCategorizedItems("card").map((item) => (
                        <MenuItem key={item._id} value={item.name}>
                          {item.name}
                        </MenuItem>
                      ))}
                    </Select>
                  </FormControl>
                  <FormControl fullWidth sx={{ mb: 2 }}>
                    Màn hình:
                    <TextField
                      fullWidth
                      value={formData.screen}
                      onChange={(e) =>
                        setFormData({ ...formData, screen: e.target.value })
                      }
                    />
                  </FormControl>
                  <FormControl fullWidth sx={{ mb: 2 }}>
                    Thời gian bảo hành (tháng):
                    <TextField
                      type="number"
                      fullWidth
                      value={formData.warranty.duration}
                      onChange={(e) =>
                        setFormData({
                          ...formData,
                          warranty: {
                            duration: e.target.value,
                          },
                        })
                      }
                      inputProps={{ min: 0 }}
                    />
                  </FormControl>
                </Grid>
              </Grid>
              Image featured:
              <Box fullWidth>
                {formData.imageFeatured && (
                  <img
                    src={formData.imageFeatured.url}
                    alt="Preview"
                    style={{
                      width: "250px",
                      height: "250px",
                      objectFit: "cover",
                    }}
                  />
                )}
                <input
                  type="file"
                  accept="image/*"
                  onChange={handleImageChange}
                />
              </Box>
              <Button type="submit" variant="contained" color="success">
                Gửi
              </Button>
              <Button
                sx={{ ml: 3 }}
                variant="contained"
                color="primary"
                onClick={() => navigate(`/products/broad`)}
              >
                Thoát
              </Button>
            </form>
          </div>
        </Box>
      )}
    </Box>
  );
};

export default UpdateProduct;
