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
          <div className="image-div">
            <img src={assets.chart} alt="" />
          </div>

          <div className="text-div">
            <p>Advanced Algos</p>
            <span className="span1-div">State of the art trading tools</span>
            <br />

            <span className="span2-div">
              Automate complicated price action, get easy signals, and detect
              reversals by smart money. Our world class trading algos are the
              best way to level up your TradingView charts.
            </span>
          </div>
        </div>

        <div className="services2-div">
          <div className="image-div">
            <img src={assets.chart} alt="" />
          </div>

          <div className="text-div">
            <p>Screeners & Alerts</p>

            <span className="span1-div">
              Easily find high probability setups
            </span>
            <br />
            <span className="span2-div">
              Use professional-grade screeners & alerts with our most exclusive
              trading algorithms. Filter out market chaos and find trade setups
              on stocks, crypto, & forex markets.
            </span>
          </div>
        </div>

        <div className="services2-div">
          <div className="image-div">
            <img src={assets.chart} alt="" />
          </div>

          <div className="text-div">
            <p>Next-Gen Backtesting</p>

            <span className="span1-div">
              An AI agent to build winning strategies
            </span>
            <br />

            <span className="span2-div">
              Ask our AI agent to find the best trading strategies and do the
              work for you. Plug our backtesting software into any platform to
              automate your trades like a pro.
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}
