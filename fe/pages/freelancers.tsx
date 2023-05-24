import FreelancersPage from "@/components/freelaancersPage/freelancerHeader";
import React, { useEffect, useState } from "react";
import { Box } from "@mui/system";
import { Pagination } from "@mui/material";
import FreelancersBody from "@/components/freelaancersPage/freelancersBody";
import FreelancerHeader from "@/components/freelaancersPage/freelancerHeader";
import axios from "axios";

const Freelancers = () => {
  const [freelancers, setFreelancers] = useState([]);

  useEffect(() => {
    async function getdata() {
      const res = await axios.get("http://localhost:8000/freelancers");
      if (res && res.data && res?.data?.freelancers) {
        setFreelancers(res?.data?.freelancers);
      }
    }
    getdata();
  }, []);

  return (
    <>
      <Box sx={{ background: "#F0F2EF" }}>
        <FreelancerHeader />
        <FreelancersBody
          freelancers={freelancers}
          setFreelancers={setFreelancers}
        />
        <Pagination count={10} size="large" sx={{ margin: "" }} />
      </Box>
    </>
  );
};

export default Freelancers;
