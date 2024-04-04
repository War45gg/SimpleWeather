import React from "react";
import styles from "./Buttone.module.css";

export default function Buttone({ children, setModal }) {
  return (
    <button onClick={(e) => setModal(true)} className={styles.btn}>
      {children}
    </button>
  );
}
