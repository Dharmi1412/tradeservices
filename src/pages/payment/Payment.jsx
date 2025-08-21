import React, { useState } from "react";
import "./payment.css";
import Monthly from "../../component/monthly/Monthly";
import Yearly from "../../component/yearly/Yearly";

export default function Payment() {
  const [isMonthly, setIsMonthly] = useState(true); // default Monthly

  return (
    <div>
      <div>Plans for every style of trading</div>

      <div>
        <nav className="main-reg-div">
          <div className="reg2-div">
            <p
              onClick={() => setIsMonthly(true)}
              className={`reg-btn ${isMonthly ? "active" : ""}`}
            >
              monthly
            </p>

            <p
              onClick={() => setIsMonthly(false)}
              className={`reg-btn ${!isMonthly ? "active" : ""}`}
            >
              yearly
            </p>
          </div>
        </nav>

        {isMonthly ? <Monthly /> : <Yearly />}
      </div>
    </div>
  );
}
