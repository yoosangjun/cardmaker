import React, { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import Editor from "../editor/editor";
import Footer from "../footer/footer";
import Header from "../header/header";
import Preview from "../preview/preview";
import styles from "./maker.module.css";

const Maker = ({ authService }) => {
  const [cards, setCards] = useState([
    {
      id: "1",
      name: "bong7",
      company: "백수",
      theme: "dark",
      title: "software Engineer",
      email: "love2ysj@gmail.com",
      message: "do Not Give up",
      fileName: null,
      // fileURL:
    },
    {
      id: "2",
      name: "bong8",
      company: "백수",
      theme: "colorful",
      title: "software Engineer",
      email: "love2ysj@gmail.com",
      message: "do Not Give up",
      fileName: null,
      // fileURL:
    },
    {
      id: "3",
      name: "bong9",
      company: "백수",
      theme: "light",
      title: "software Engineer",
      email: "love2ysj@gmail.com",
      message: "do Not Give up",
      fileName: null,
      // fileURL:
    },
  ]);

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
    <section className={styles.maker}>
      <Header onLogout={onLogout} />
      <div className={styles.container}>
        <Editor cards={cards} />
        <Preview cards={cards} />
      </div>
      <Footer />
    </section>
  );
};

export default Maker;
