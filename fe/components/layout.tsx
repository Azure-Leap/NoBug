import Footer from "@/components/footer";
import React from "react";
import NavBar from "./navbar/navbar";

const Layout = ({ children }: any) => {
  return (
    <>
      <NavBar />
      <main>{children}</main>
      <Footer />
    </>
  );
};

export default Layout;
