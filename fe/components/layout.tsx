import Footer from "@/components/footer";
import React from "react";
import Loading from "./loading";
import NavBar from "./navbar/navbar";

const Layout = ({ children }: any) => {
  return (
    <>
      <NavBar />
      <main>{children}</main>
      <Footer />
      <Loading />
    </>
  );
};

export default Layout;
