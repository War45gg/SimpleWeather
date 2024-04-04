import React, { useMemo, useState } from "react";
import styles from "./DayItem.module.css";
import ChangeIcon from "./ChangeIcon/ChangeIcon";

export default function DayItem({ data, active, setActiveData }) {
  const classNameStr = useMemo(() => {
    return active
      ? `${styles.itemBody} ${styles.dayItemActive}`
      : `${styles.itemBody}`;
  }, [active]);
  const weather = data.weather[0].main.toLocaleLowerCase();
  return (
    <div className={classNameStr} onClick={() => setActiveData(data)}>
      <ChangeIcon weather={weather}/>

      <h3 className={styles.title}>{data.day.slice(0, 3)}</h3>
      <span className={styles.tempirature}>{`${Math.floor(
        data.main.temp
      )} °C`}</span>
    </div>
  );
}
