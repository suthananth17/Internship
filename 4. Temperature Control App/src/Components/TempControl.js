import React, { useState } from "react";
import styles from "./TempControl.module.css";
import "./temp.css";


//Gradually Increasing Colors without css
const TempControl = () => {
  const [temperatureValue, setTemperatureValue] = useState(15);
  const [temperatureColor, setTemperatureColor] = useState("neutral");

  const increaseTemperature = () => {
    const newTemperatureValue = temperatureValue + 1;

    if (newTemperatureValue === 15) {
      setTemperatureColor("neutral");
    }
    else if (newTemperatureValue >= 15) {
      setTemperatureColor("hot");
    }

    setTemperatureValue(newTemperatureValue);
  };

  const decreaseTemperature = () => {
    const newTemperatureValue = temperatureValue - 1;

    if (newTemperatureValue === 15) {
      setTemperatureColor("neutral");
    }
    else if (newTemperatureValue < 15) {
      setTemperatureColor("cold");
    }

    setTemperatureValue(newTemperatureValue);
  };



  return (
    <div className={styles.card_container}>
      <div className={styles.temp_display_container}>
        <div className={`${styles.temp_display} ${temperatureColor}`}>
          {temperatureValue}°C
        </div>
      </div>
      <div className={styles.btn_container}>
        <button
          className={styles.button_minus}
          onClick={decreaseTemperature}
        >
          {" "}
          -{" "}
        </button>

        <button className={styles.button_plus} onClick={increaseTemperature}>
          {" "}
          +{" "}
        </button>
      </div>
    </div>
  );
};

export default TempControl;
