import React, {
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useState,
} from "react";
import getData from "../../../Services/GetData/GetData";
import WeatherInfo from "./WeatherInfo/WeatherInfo";
import ImageItem from "./ImageItem/ImageItem";
import { InfinitySpin } from "react-loader-spinner";
import Input from "../../Input/Input";
import Modal from "../../Modal/Modal";

const apiGetSetings = {
  apiKey: "a77b9550874f1bdbb980e219b2ec904c",
  days: 4,
  units: "metric",
};

const fetchImageSetings = {
  orientation: "portrait",
  unsplashAccessKey: "Q63DiXl_xtuFNQh_PIR3W8cxiKITMeKYcxoGtcKtMbw",
};

export default function Home() {
  const [data, setData] = useState([]);

  const [activeData, setActiveData] = useState({});

  const [city, setCity] = useState("Nizhny Tagil");

  const createApiUrl = useCallback(
    (setings, city) => {
      return `https://api.openweathermap.org/data/2.5/forecast?q=${city}&cnt=${
        setings.days * 8
      }&units=${setings.units}&appid=${setings.apiKey}`;
    },
    [city]
  );

  const apiUrl = useMemo(() => createApiUrl(apiGetSetings, city), [city]);

  const [modal, setModal] = useState(false);

  const [input, setInput] = useState("");

  function changeCity(value) {
    setCity(value);
    setModal(false);
  }

  useEffect(() => {
    getData(apiUrl, fetchImageSetings).then(([data, activeData]) => {
      setData(data);
      setActiveData(activeData);
    });
  }, [apiUrl]);
  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        height: "100vh",
      }}
    >
      {data.length !== 0 ? (
        <>
          <ImageItem activeData={activeData} />
          <WeatherInfo
            data={data}
            activeData={activeData}
            setActiveData={setActiveData}
            setModal={setModal}
          />
          <Modal modal={modal}>
            <h3>Enter your city</h3>
            <Input value={input} changeValue={setInput}></Input>
            <button onClick={(e) => changeCity(input)}>Submit</button>
          </Modal>
        </>
      ) : (
        <div>
          <InfinitySpin color="#89CBE1" />
          <h2
            style={{ color: "#fff", textAlign: "center", marginRight: "18px" }}
          >
            Loading Data
          </h2>
        </div>
      )}
    </div>
  );
}
