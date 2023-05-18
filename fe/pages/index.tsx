import { Inter } from "next/font/google";
import { Box } from "@mui/system";
// import { CookiesProvider } from "react-cookie";

import ExpertFreelancer from "@/components/expertFreelander";
import PopularCat from "@/components/popularCat";
import CommendPart from "@/components/commendPart";
import Hero from "@/components/hero section/hero";
import { useContext } from "react";
import { CategoryContext } from "@/context/categoryContext";
import { BASE_URL } from "@/variables";

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
  const data = await fetch(`${BASE_URL}/freelancer`).then((res) => res.json());
  const categoriesData = await fetch(`${BASE_URL}/categories`).then((res) =>
    res.json()
  );
  return {
    props: {
      data,
      categoriesData,
    },
  };
}
