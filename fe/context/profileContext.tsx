import React, { useState } from "react";
import { createContext } from "react";
import { useRouter } from "next/router";
import axios from "axios";

export const ProfileContext = createContext<any>({});

const ProfileProvider = ({ children }: any) => {
  const [profileData, setProfileData] = useState();
  return (
    <ProfileContext.Provider value={{ profileData, setProfileData }}>
      {children}
    </ProfileContext.Provider>
  );
};

export default ProfileProvider;

//test
