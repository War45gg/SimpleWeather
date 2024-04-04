import React, { useEffect, useMemo, useState } from "react";
import styles from "./ImageItem.module.css";

export default function ImageItem({ activeData }) {
  

  const dayData = useMemo(() => {
    console.log(activeData.dt_txt.split(" ")[0]);
    const date = new Date(activeData.dt_txt.split(" ")[0]);
    const options = { day: "numeric", month: "short", year: "numeric" };
    return date
      .toLocaleDateString("en-US", options)
      .split("")
      .filter((item) => item != ",")
      .join("");
  }, [activeData]);

  return (
    <div className={styles.itemWrap}>
      <div className={styles.itemBody}>
        <div>
          <h2 className={styles.dayTitle}>{activeData.day}</h2>
          <span className={styles.date}>{dayData}</span>
          <span className={styles.geo}>{activeData.geo}</span>
        </div>

        <div>
          <h1 className={styles.tempiratureTitle}>{`${Math.floor(
            activeData.main.temp
          )} °C`}</h1>
          <h3 className={styles.weatherTitle}>
            {activeData.weather[0].description.replace(/^\w/, (c) =>
              c.toUpperCase()
            )}
          </h3>
        </div>
      </div>
      <div className={styles.image}>
        <img src={activeData.image ? activeData.image : './example.jpg'} alt="city photo" />
      </div>
    </div>
  );
}
