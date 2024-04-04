import React from "react";
import WeatherParam from "./WeatherParam/WeatherParam";
import styles from "./WeatherInfo.module.css";
import DayItem from "./DayItem/DayItem";
import Buttone from "../../../Buttone/Buttone";

export default function WeatherInfo({ data, activeData, setActiveData,setModal }) {
  return (
    <div className={styles.itemBody}>
      <div className={styles.paramWrap}>
        <WeatherParam title={"Sky"} value={activeData.weather[0].main} />
        <WeatherParam
          title={"Humidity"}
          value={`${activeData.main.humidity}%`}
        />
        <WeatherParam title={"Wind"} value={`${activeData.wind.speed} m/s`} />
      </div>
      <div className={styles.DayItemBody}>
        {data.map((item, index) => {
          return (
            <DayItem
              data={item}
              active={index === activeData.id}
              setActiveData={setActiveData}
              key={index}
            />
          );
        })}
      </div>
      <Buttone setModal={setModal}>
        <img src="./geo.svg" alt="" />
        <span>Change Location</span>
      </Buttone>
    </div>
  );
}
