import React from "react";
import { useRouter } from "next/router";
import styles from "./styles.module.css";
import { FcGoogle } from "react-icons/fc";
import { BsFacebook } from "react-icons/bs";

function SignInForm() {
  const router = useRouter();

  const routeTo = (url: string) => {
    router.replace(url);
  };
  const [state, setState] = React.useState({
    email: "",
    password: "",
  });
  const handleChange = (evt: any) => {
    const value = evt.target.value;
    setState({
      ...state,
      [evt.target.name]: value,
    });
  };

  console.log("state", state);
  const handleOnSubmit = (evt: any) => {
    evt.preventDefault();

    const { email, password } = state;
    alert(`You are login with email: ${email} and password: ${password}`);

    for (const key in state) {
      setState({
        ...state,
        [key]: "",
      });
    }
  };

  return (
    <div className={`${styles.formContainer} ${styles.signInContainer}`}>
      <form onSubmit={handleOnSubmit} className={styles.form}>
        <h1 className={styles.head1}>Нэвтрэх</h1>
        <div className={styles.socialContainer}>
          <a>
            <FcGoogle
              onClick={() => {
                routeTo("https://mail.google.com/mail/u/0/#inbox");
              }}
              size={40}
            />
          </a>
          <a>
            <BsFacebook
              onClick={() => {
                routeTo("https://www.facebook.com/login/");
              }}
              size={40}
              color={"#3b5998"}
            />
          </a>
        </div>
        <span className={styles.span1}>Бусад бүртгэлээр нэвтрэх</span>
        <input
          type="email"
          placeholder="И-мейл"
          name="email"
          value={state.email}
          onChange={handleChange}
          className={styles.input}
        />
        <input
          type="password"
          name="password"
          placeholder="Нууц үг"
          value={state.password}
          onChange={handleChange}
          className={styles.input}
        />
        <a href="#" className={styles.aLink}>
          Нууц үг сэргээх?
        </a>
        <button className={styles.btn}>Нэвтрэх</button>
      </form>
    </div>
  );
}

export default SignInForm;
