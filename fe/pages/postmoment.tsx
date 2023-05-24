import * as React from "react";
import Box from "@mui/material/Box";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";

import {
  Select,
  Typography,
  Container,
  TextField,
  Input,
  Button,
} from "@mui/material";
import { useContext, useState } from "react";
import { CategoryContext } from "@/context/categoryContext";
import { BASE_URL } from "@/variables";

export default function BasicSelect({}: any) {
  const [post, setPost] = React.useState(true);
  const [selectedImage, setSelectedImage] = useState<any>(null);
  const { categoriesData }: any = useContext(CategoryContext);
  const [cat, setCat] = useState(null) as any;
  const handleChange = (event: any) => {
    setCat(event.target.value);
  };

  return (
    <Container className="mb-10 mt-5">
      <Box className="my-7 border-b-2">
        <Typography variant="h4">Post a project</Typography>
        <Typography variant="h6">
          Describe what you need, then receive custom proposals from
          freelancers.
        </Typography>
      </Box>
      <Box>
        <Typography variant="h6" className="text-slate-500">
          Select a relevant category so that freelancers can find your project
        </Typography>
      </Box>
      <Box className="flex flex-wrap gap-10 my-7">
        <FormControl sx={{ width: "400px" }}>
          <InputLabel id="demo-simple-select-label">Category</InputLabel>
          <Select
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            label="Girls"
            value={cat}
            onChange={handleChange}
          >
            {categoriesData?.map((e: any) => {
              return (
                <MenuItem key={e.title} value={e}>
                  {e.title}
                </MenuItem>
              );
            })}
          </Select>
        </FormControl>
        <FormControl sx={{ width: "400px" }}>
          <InputLabel id="demo-simple-select-label">Sub Category</InputLabel>
          <Select
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            label="Girls"
            // onChange={handleChange}
          >
            {cat?.subCategory?.map((e: any) => {
              return (
                <MenuItem key={e.subtitle} value={e}>
                  {e.subtitle}
                </MenuItem>
              );
            })}
          </Select>
        </FormControl>
      </Box>
      <Box className="my-7">
        <Typography>Project title</Typography>
        <TextField
          id="outlined-basic"
          label="Outlined"
          variant="outlined"
          fullWidth
        />
      </Box>
      <Box className="my-7">
        <Typography>Project description</Typography>
        <TextField
          id="outlined-basic"
          label="Outlined"
          variant="outlined"
          fullWidth
          size="medium"
        />
      </Box>
      <h1>UPLOAD SAMPLES AND OTHER HELPFUL MATERIAL </h1>
      <div className="border-2  w-full h-full content-center">
        {selectedImage && (
          <div>
            <img
              alt="not found"
              width={"250px"}
              src={URL.createObjectURL(selectedImage)}
            />
            <br />
            <button onClick={() => setSelectedImage(null)}>Remove</button>
          </div>
        )}

        <br />
        <br />

        <input
          type="file"
          name="myImage"
          onChange={(event) => {
            console.log(event.target.files?.[0]);
            setSelectedImage(event.target.files?.[0]);
          }}
        />
      </div>

      <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mt-5 mb-5">
        Post Project
      </button>
    </Container>
  );
}

export async function getServerSideProps() {
  const categoriesData = await fetch(`${BASE_URL}/categories`).then((res) =>
    res.json()
  );
  return {
    props: {
      categoriesData,
    },
  };
}
