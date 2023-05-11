import { Inter } from "next/font/google";
import { Box } from "@mui/system";
import ExpertFreelancer from "@/components/expertFreelander";
import PopularCat from "@/components/popularCat";
import CommendPart from "@/components/commendPart";
import Hero from "@/components/hero section/hero";
import { useContext } from "react";
import { CategoryContext } from "@/context/categoryContext";

const inter = Inter({ subsets: ["latin"] });

export default function Home({ data, categoriesData }: any) {
  const { setCategoriesData }: any = useContext(CategoryContext);
  setCategoriesData(categoriesData.category);

  return (
    <>
      <Box
        sx={
          {
            // width: { xs: "95%", xl: "75%" },
            // marginX: "auto",
          }
        }
      >
        <Hero />
        <PopularCat />
        <CommendPart />
        <ExpertFreelancer data={data.freelancer} />
      </Box>
    </>
  );
}
// export async function getServerSideProps() {
//   const res = await fetch("http://localhost:8000/freelancer");
//   const data = await res.json();
//   return {
//     props: {
//       data,
//     },
//   };
// }

export async function getServerSideProps() {
  const res = await fetch("https://skill-hive-1giq.onrender.com/freelancer");
  const categories = await fetch("http://localhost:8000/categories");
  const data = await res.json();
  const categoriesData = await categories.json();
  return {
    props: {
      data,
      categoriesData,
    },
  };
}
