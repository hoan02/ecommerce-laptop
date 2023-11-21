import React, { useState } from "react";
import { useParams } from "react-router-dom";
import { Box, TextField, Button } from "@mui/material";
import { useMutation, useQueryClient } from "@tanstack/react-query";

import newRequest from "../../utils/newRequest.js";
import toastService from "../../utils/toastService.js";

const NewItem = () => {
  const slug = useParams().slug;
  const queryClient = useQueryClient();
  const [input, setInput] = useState("");

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
    };
    createNewItem.mutate(data);
  };

  return (
    <Box>
      New {slug}
      <Box sx={{ mt: 2 }}>
        <TextField
          id="outlined-basic"
          label={`Add new ${slug}`}
          variant="outlined"
          onChange={(e) => setInput(e.target.value)}
        />
      </Box>
      <Button sx={{ mt: 2 }} variant="contained" onClick={handleSubmit}>
        Add
      </Button>
    </Box>
  );
};

export default NewItem;
