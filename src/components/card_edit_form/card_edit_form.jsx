import React from "react";
import Button from "../button/button";
import ImageFileInput from "../image_file_input/image_file_input";
import styles from "./card_edit_form.module.css";

const Card_edit_form = ({ card }) => {
  const { name, company, title, theme, email, message, fileName } = card;
  const onSubmit = () => {};
  return (
    <form action="" className={styles.form}>
      <input
        className={styles.input}
        type="text"
        name="name"
        id=""
        value={name}
      />
      <input
        className={styles.input}
        type="text"
        name="company"
        id=""
        value={company}
      />
      <select name="theme" value={theme} className={styles.select}>
        <option value="Light">Light</option>
        <option value="Dark">Dark</option>
        <option value="Colorful">Colorful</option>
      </select>
      <input
        className={styles.input}
        type="text"
        name="title"
        id=""
        value={title}
      />
      <input
        className={styles.input}
        type="text"
        name="email"
        id=""
        value={email}
      />
      <textarea
        className={styles.textarea}
        name="message"
        value={message}
      ></textarea>
      <div className={styles.fileInput}>
        <ImageFileInput />
      </div>
      <Button onClick={onSubmit} name="Delete" />
    </form>
  );
};

export default Card_edit_form;
