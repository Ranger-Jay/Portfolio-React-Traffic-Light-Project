import React, { useState } from "react";

//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";

//create your first component
const Home = () => {
  const [selectedColor, setSelectedColor] = useState("");
  return (
    <div className="center">
      <div className="wire"></div>

      <div className="box">
        <br />
        <div
          onClick={() => setSelectedColor("red")}
          className={"light red " + (selectedColor === "red" ? "ambient" : "")}
        ></div>
        <br />

        <div
          onClick={() => setSelectedColor("yellow")}
          className={
            "light yellow " + (selectedColor === "yellow" ? "ambient" : "")
          }
        ></div>
        <br />

        <div
          onClick={() => setSelectedColor("green")}
          className={
            "light green " + (selectedColor === "green" ? "ambient" : "")
          }
        ></div>
      </div>
    </div>
  );
};

export default Home;
