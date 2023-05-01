import Image from "next/image";
<<<<<<< Updated upstream
<<<<<<< Updated upstream
import { Inter, Nabla } from "next/font/google";
import NavBar from "@/components/navbar/navbar";
=======
import { Inter } from "next/font/google";
>>>>>>> Stashed changes
import { Box } from "@mui/system";
import ExpertFreelancer from "@/components/expertFreelander";
import PopularCat from "@/components/popularCat";
import Footer from "./footer";
<<<<<<< Updated upstream
import Hero from "../components/hero section/hero";
=======
import NavBar from "../components/navbar/navbar";
>>>>>>> Stashed changes

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
<<<<<<< Updated upstream
      <Hero />
=======
>>>>>>> Stashed changes
    </div>
  );
}
