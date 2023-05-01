import Image from "next/image";
<<<<<<< Updated upstream
import { Inter, Nabla } from "next/font/google";
import NavBar from "@/components/navbar/navbar";
import { Box } from "@mui/system";
import ExpertFreelancer from "@/components/expertFreelander";
import PopularCat from "@/components/popularCat";
import Footer from "./footer";
import Hero from "../components/hero section/hero";

=======
import { Inter } from "next/font/google";
import NavBar from "@/components/navbar/navbar";
import Hero from "@/components/hero section/hero";
>>>>>>> Stashed changes
const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <div>
      <NavBar />
      <Hero />
    </div>
  );
}
