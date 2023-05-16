import React, { useState } from "react";
import { createContext } from "react";
import { useRouter } from "next/router";
import axios from "axios";
export const UserContext = createContext({});

const UserProvider = ({ children }: any) => {
  const router = useRouter();
  const [userData, setUserData] = useState<{}>();
  const [signUpData, setSignUpData] = useState({
    name: "",
    email: "",
    password: "",
    role: "",
  });

  const [signInData, setSignInData] = React.useState({
    email: "",
    password: "",
  });

  const whatRole = (e: any) => {
    setSignUpData({ ...signUpData, role: e });
  };

  const editUser = async (event: any) => {
    console.log(event);
    // event.preventDefault();
    try {
      const res = await axios.put(
        "http://localhost:8000/users/6459eced991e3e926bea2542",
        {
          avatar: event.data,
        }
      );
      console.log(res);
    } catch (err) {
      console.log("err", err);
    }
  };
  const signUp = async (event: any) => {
    event.preventDefault();
    try {
      const res = await axios.post(
        "http://localhost:8000/auth/register",
        signUpData
      );
      console.log(res);
    } catch (err) {
      console.log("err", err);
    }
  };

  const signIn = async (event: any) => {
    event.preventDefault();
    try {
      const res = await axios.post(
        "http://localhost:8000/auth/login",
        signInData
      );

      console.log(res);
      router.push("/");
      // window.location.href = "/";
    } catch (err) {
      console.log("err", err);
    }
  };

  return (
    <UserContext.Provider
      value={{
        signUpData,
        setSignUpData,
        signUp,
        signIn,
        whatRole,
        signInData,
        setSignInData,
        editUser,
      }}
    >
      {children}
    </UserContext.Provider>
  );
};

export default UserProvider;

//test
