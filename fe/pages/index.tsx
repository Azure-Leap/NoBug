import Image from "next/image";
import { Inter } from "next/font/google";
import NavBar from "@/components/navbar/navbar";
import { Box } from "@mui/system";
import ExpertFreelancer from "@/components/expertFreelander";
import PopularCat from "@/components/popularCat";
import Footer from "./footer";
import CommendPart from "@/components/commendPart";

const inter = Inter({ subsets: ["latin"] });

export default function Home({ data }: any) {
  return (
    <>
      <NavBar />
      <Box
        sx={{
          mt: 10,
          // width: { xs: "95%", xl: "75%" },
          // marginX: "auto",
        }}
      >
        <PopularCat />
        <CommendPart />
        <ExpertFreelancer data={data.freelancer} />
      </Box>
      <Footer />
    </>
  );
}

export async function getServerSideProps() {
  const res = await fetch("https://skill-hive-1giq.onrender.com/freelancer");
  const data = await res.json();
  return {
    props: {
      data,
    },
  };
}
