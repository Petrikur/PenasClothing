import React from "react";
import Header from "../components/layout/Header";
import Footer from "../components/layout/Footer";
import MegaMenu from "../components/layout/Megamenu";
import LoginForm from "../components/LoginForm";

const Login = () => {
  return (
    <>
      <Header />
      <MegaMenu />

      <LoginForm />

      <Footer />
    </>
  );
};

export default Login;
