import React from "react";
import styles from "./Input.module.css";
export default function Input({value,changeValue}) {
  return <input value={value} onChange={(e) => changeValue(e.target.value)} placeholder="City " className={styles.input}></input>;
}
