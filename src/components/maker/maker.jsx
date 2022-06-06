import React, { useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import Footer from "../footer/footer";
import Header from "../header/header";
import styles from "./maker.module.css";

const Maker = ({ authService }) => {
  const navigate = useNavigate();
  const onLogout = () => {
    authService.logout();
  };
  const location = useLocation();
  const { data } = location.state;
  console.log(data);
  console.log(location.state);

  useEffect(() => {
    authService.onAuthChange((user) => {
      if (!user) {
        navigate("/");
      }
    });
  });
  return (
    <section>
      <Header onLogout={onLogout} />
      <Footer />
    </section>
  );
};

export default Maker;
