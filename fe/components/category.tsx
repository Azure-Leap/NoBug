import { useContext, useState } from "react";
import { Typography, Grid, Link, Box } from "@mui/material";
import { ClassNames } from "@emotion/react";
import { CategoryContext } from "@/context/categoryContext";

export default function HoverDropdown({ categories }: any) {
  // const [open, setOpen] = useState(false);
  // const [subCat, setSubCat] = useState<any>([]);
  const { subCat, setSubCat, open, setOpen, categoriesData }: any =
    useContext(CategoryContext);
  console.log(categoriesData);

  return (
    <div className="bg-slate-100 -mt-4  hidden md:block">
      <div className="max-w-screen-xl flex  items-center p-3 ">
        <div onMouseLeave={() => setOpen(false)} className="flex">
          {categoriesData?.map((e: any, index: any) => (
            <Link
              key={index}
              href="#"
              underline="none"
              onMouseOver={() => {
                setOpen(true);
                setSubCat(e.subCategory);
              }}
              className=" flex flex-wrap items-center justify-between mx-auto p-3"
              sx={{ color: "#333333" }}
            >
              {e.title}
            </Link>
          ))}
          {/* <p className="hidden md:block">Text to hide on small screens</p>
          <p className="hidden xl:block">Text to hide on big screens</p> */}

          <ul
            className={`absolute mt-14 mb-10 flex  w-full  p-3  font-medium justify-between rounded-b-xl bg-slate-200 -ml-4   ${
              open ? "block" : "hidden"
            }`}
          >
            <div className=" flex flex-row flex-wrap gap-8 p-2  ">
              {subCat.map((e: any) => (
                <Box className="flex">
                  <Link href="#" underline="hover" color="#555555">
                    {e.subtitle}
                  </Link>
                </Box>
              ))}
            </div>
          </ul>
        </div>
      </div>
    </div>
  );
}
