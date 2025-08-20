import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./nav.css";
import { assets } from "../../assets/assets";

export default function Nav() {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div>
      <div className="nav-div">
        <div>
          <img src={assets.logo} alt="logo" />
        </div>
        <button className="mobile-toggle" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? "✖" : "☰"}
        </button>
        <div className={`link-div${isOpen ? " open" : ""}`}>
          {[
            { path: "/", text: "Home" },
            { path: "/contact", text: "Contact Us" },
            { path: "/terms", text: "Terms & Condition" },

          ].map((elem, index) => (
            <Link key={index} to={elem.path} onClick={() => setIsOpen(false)}>
              {elem.text}
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
