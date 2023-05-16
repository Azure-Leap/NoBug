import * as React from "react";
import Box from "@mui/material/Box";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import { useContext, useState } from "react";
import { CategoryContext } from "@/context/categoryContext";

export default function BasicSelect() {
  const [post, setPost] = React.useState("");
  const { categoriesData }: any = useContext(CategoryContext);
  const handleChange = (event: any) => {
    setPost(event.target.value);
  };
  console.log(`sda`, categoriesData);

  return (
    <div>
      {categoriesData?.map((e: any, index: any) => (
        <Box sx={{ maxWidth: 100 }}>
          <FormControl fullWidth>
            <InputLabel id="demo-simple-select-label">Girls</InputLabel>
            <Select
              labelId="demo-simple-select-label"
              id="demo-simple-select"
              value={post}
              label="Girls"
              onChange={handleChange}
            >
              <MenuItem value={10}>Manavi</MenuItem>
              <MenuItem value={10}>Manavi</MenuItem>
              <MenuItem value={10}>Manavi</MenuItem>
              <MenuItem value={10}>Manavi</MenuItem>
              <MenuItem value={10}>Manavi</MenuItem>
              <MenuItem value={10}>Manavi</MenuItem>
              <MenuItem value={10}>Manavi</MenuItem>
            </Select>
          </FormControl>
        </Box>
      ))}
    </div>
  );
}
