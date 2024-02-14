import React from "react";
import BlackHeartIcon from "./BlackHeartIcon";
import "./NavBarup.css";

export default function Navbarup() {
  const mystyle = {
    display: "flex",
    alignItems: "flex-start",
    alignContent: "center",
    flexWrap: "wrap",
    backgroundColor: "white",
    height: "60px", // Adjust height as needed
    width: "100%",
    borderBottom: "2px solid #ccc", // Adjust width as needed
    gap : "15px",
    padding : "0px 0px 0px 2px" 
  };

  return (
    <div style={mystyle}>
      <div className="heart">
        <BlackHeartIcon />
      </div>
      <div className="sidetext">
        <p>Numerous Philantrophic Misanthropes</p>
      </div>
    </div>
  );
}
