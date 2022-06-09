import React, { useRef } from "react";
import Button from "../button/button";
import ImageFileInput from "../image_file_input/image_file_input";
import styles from "./card_add_form.module.css";

const CardAddForm = ({ onAdd }) => {
  const Refname = useRef();
  const Refcompany = useRef();
  const Reftheme = useRef();
  const Reftitle = useRef();
  const Refemail = useRef();
  const Refmessage = useRef();
  const formRef = useRef();
  const onSubmit = (e) => {
    e.preventDefault();
    const card = {
      id: Date.now(),
      name: Refname.current.value || "",
      company: Refcompany.current.value || "",
      theme: Reftheme.current.value || "",
      title: Reftitle.current.value || "",
      email: Refemail.current.value || "",
      message: Refmessage.current.value || "",
      fileName: "",
      fileURL: "",
    };
    formRef.current.reset();
    onAdd(card);
  };
  return (
    <form ref={formRef} action="" className={styles.form}>
      <input
        ref={Refname}
        className={styles.input}
        type="text"
        name="name"
        id=""
        placeholder="name"
      />
      <input
        ref={Refcompany}
        className={styles.input}
        type="text"
        name="company"
        id=""
        placeholder="company"
      />
      <select
        ref={Reftheme}
        name="theme"
        placeholder="theme"
        className={styles.select}
      >
        <option placeholder="light">light</option>
        <option placeholder="dark">dark</option>
        <option placeholder="colorful">colorful</option>
      </select>
      <input
        ref={Reftitle}
        className={styles.input}
        type="text"
        name="title"
        id=""
        placeholder="title"
      />
      <input
        ref={Refemail}
        className={styles.input}
        type="text"
        name="email"
        id=""
        placeholder="email"
      />
      <textarea
        ref={Refmessage}
        className={styles.textarea}
        name="message"
        placeholder="message"
      ></textarea>
      <div className={styles.fileInput}>
        <ImageFileInput />
      </div>
      <Button name="Add" onClick={onSubmit} />
    </form>
  );
};

export default CardAddForm;
