import { Inter } from "next/font/google";
import { Box } from "@mui/system";
// import { CookiesProvider } from "react-cookie";

import ExpertFreelancer from "@/components/expertFreelander";
import PopularCat from "@/components/popularCat";
import CommendPart from "@/components/commendPart";
import Hero from "@/components/hero section/hero";

const inter = Inter({ subsets: ["latin"] });

export default function Home({ data }: any) {
  console.log(
    "ahshhahahahsijdhsljfhjsakhfljsakhfljkasdhflkjashflaskjdfh",
    data.freelancer
  );
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
  const res = await fetch("http://localhost:8000/freelancer");
  const data = await res.json();
  return {
    props: {
      data,
    },
  };
}
