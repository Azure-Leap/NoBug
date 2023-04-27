import React, { useState } from "react";

import SignInForm from "./signIn";
import SignUpForm from "./signUp";

import styles from "./styles.module.css";

export default function App() {
  const [type, setType] = useState("signIn");

  const handleOnClick = (text: string) => {
    if (text !== type) {
      setType(text);
      return;
    }
  };

  return (
    <div className={styles.body}>
      <div
        className={`${styles.container} ${
          type === "signUp" ? styles.rightPanelActive : ""
        }`}
        id="container"
      >
        <SignUpForm />
        <SignInForm />
        <div className={styles.overlayContainer}>
          <div className={styles.overlay}>
            <div className={`${styles.overlayPanel} ${styles.overlayLeft}`}>
              <h1 className={styles.head1}>Welcome Back!</h1>
              <p className={styles.par1}>
                To keep connected with us please login with your personal info
              </p>
              <button
                className={`${styles.ghost} ${styles.btn}`}
                id="signIn"
                onClick={() => handleOnClick("signIn")}
              >
                Sign In
              </button>
            </div>
            <div className={`${styles.overlayPanel} ${styles.overlayRight}`}>
              <h1 className={styles.head1}>Hello, Friend!</h1>
              <p className={styles.par1}>
                Enter your personal details and start journey with us
              </p>
              <button
                className={`${styles.ghost} ${styles.btn}`}
                id="signUp"
                onClick={() => handleOnClick("signUp")}
              >
                Sign Up
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
