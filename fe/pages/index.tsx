import Image from "next/image";
import { Inter } from "next/font/google";
import NavBar from "@/components/navbar/navbar";
import { Box } from "@mui/system";
import ExpertFreelancer from "@/components/expertFreelander";
import PopularCat from "@/components/popularCat";
import Footer from "./footer";

const inter = Inter({ subsets: ["latin"] });

export default function Home({ data }: any) {
  return (
    <>
      <NavBar />
      {/* <Box
        sx={{
          width: { xs: "95%", xl: "75%" },
          marginX: "auto",
        }}
      > */}
      <PopularCat />
      <ExpertFreelancer data={data.freelancer} />
      {/* </Box> */}
      <Footer />
    </>
  );
}

export async function getServerSideProps() {
  const res = await fetch("http://localhost:8000/freelancer");
  const data = await res.json();
  return {
    props: {
      data,
    },
  };
}
