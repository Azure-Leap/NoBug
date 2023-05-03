<<<<<<< HEAD
import Image from "next/image";
import { Inter, Nabla } from "next/font/google";
import NavBar from "@/components/navbar/navbar";
import { Box } from "@mui/system";
import ExpertFreelancer from "@/components/expertFreelander";
import PopularCat from "@/components/popularCat";
import Footer from "./footer";
import Hero from "../components/hero section/hero";
import HoverDropdown from "@/components/category";
=======
import { Inter } from "next/font/google";
import { Box } from "@mui/system";
import ExpertFreelancer from "@/components/expertFreelander";
import PopularCat from "@/components/popularCat";
import CommendPart from "@/components/commendPart";
>>>>>>> main

const inter = Inter({ subsets: ["latin"] });

export default function Home({ data }: any) {
  return (
<<<<<<< HEAD
    <div>
      <NavBar />
      {/* <Hero /> */}
      <HoverDropdown />
    </div>
=======
    <>
      <Box
        sx={
          {
            // width: { xs: "95%", xl: "75%" },
            // marginX: "auto",
          }
        }
      >
        <PopularCat />
        <CommendPart />
        <ExpertFreelancer data={data.freelancer} />
      </Box>
    </>
>>>>>>> main
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
  const data = await res.json();
  return {
    props: {
      data,
    },
  };
}
