import { useState } from "react";
import { useParams } from "react-router-dom";
import { Box, TextField, Button, Select, MenuItem } from "@mui/material";
import { useMutation, useQueryClient } from "@tanstack/react-query";

import newRequest from "../../utils/newRequest.js";
import toastService from "../../utils/toastService.js";

const NewItem = () => {
  const slug = useParams().slug;
  const queryClient = useQueryClient();
  const [input, setInput] = useState("");
  const [selectedBrand, setSelectedBrand] = useState("");

  const isBrandSlug = slug === "brand";

  // POST: Create a new item
  const createNewItem = useMutation({
    mutationFn: (data) => {
      return newRequest.post(`item/create`, data);
    },
    onSuccess: (res) => {
      toastService.success(res.data.message);
      queryClient.invalidateQueries([`${slug}`]);
    },
  });

  const handleSubmit = () => {
    const data = {
      name: input,
      slug: slug,
      parent: selectedBrand, // Thêm dữ liệu thương hiệu vào request
    };
    createNewItem.mutate(data);
    setInput("");
    setSelectedBrand("");
  };

  return (
    <Box>
      New {slug}
      <Box sx={{ mt: 2 }}>
        <TextField
          id="outlined-basic"
          label={`Add new ${slug}`}
          variant="outlined"
          value={input}
          onChange={(e) => setInput(e.target.value)}
        />
      </Box>
      {isBrandSlug && (
        <Box sx={{ mt: 2 }}>
          <Select
            value={selectedBrand}
            onChange={(e) => setSelectedBrand(e.target.value)}
            displayEmpty
            inputProps={{ "aria-label": "Without label" }}
          >
            <MenuItem value="" disabled>
              Select Brand
            </MenuItem>
            <MenuItem value="Laptop Dell">Laptop Dell</MenuItem>
            <MenuItem value="Laptop Acer">Laptop Acer</MenuItem>
            <MenuItem value="Laptop HP">Laptop HP</MenuItem>
            <MenuItem value="Laptop Asus">Laptop Asus</MenuItem>
            <MenuItem value="Laptop Lenovo">Laptop Lenovo</MenuItem>
            <MenuItem value="Laptop MSI">Laptop MSI</MenuItem>
          </Select>
        </Box>
      )}
      <Button sx={{ mt: 2 }} variant="contained" onClick={handleSubmit}>
        Add
      </Button>
    </Box>
  );
};

export default NewItem;
