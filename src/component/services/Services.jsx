import React from "react";
import "./services.css";
import { assets } from "../../assets/assets";

export default function Services() {
  return (
    <div>
      <div className="main-div">
        <div className="services-div">
          <img src={assets.chart} alt="" />
          <img src={assets.d11} alt="" />
          <img src={assets.d12} alt="" />
          <img src={assets.d13} alt="" />
        </div>
        <div className="services2-div">
          <img src={assets.chart} alt="" />
          <img src={assets.d11} alt="" />
          <img src={assets.d12} alt="" />
          <img src={assets.d13} alt="" />
        </div>
        <div className="services2-div">
          <img src={assets.chart} alt="" />
          <img src={assets.d11} alt="" />
          <img src={assets.d12} alt="" />
          <img src={assets.d13} alt="" />
        </div>
        <div className="services2-div">
          <img src={assets.chart} alt="" />
          <img src={assets.d11} alt="" />
          <img src={assets.d12} alt="" />
          <img src={assets.d13} alt="" />
        </div>
      </div>
    </div>
  );
}
