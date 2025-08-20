import React from "react";

import "./contact.css";

export default function Contact() {
  return (
    <div className="maincon-div">
      <div className="contact-div">
        <div>CONTACT US</div>
        <div className="subcontact-div">
          <div className="flexcon-div">
            <label htmlFor="">name</label>
          </div>
          <div>
            <input type="text" placeholder="enter your name .." />
          </div>
        </div>

        <div className="subcontact-div">
          <div className="flexcon-div">
            <label htmlFor="">email id</label>
          </div>
          <div>
            <input type="text" placeholder="enter your email id .."/>
          </div>
        </div>

        <div className="subcontact-div">
          <div className="flexcon-div">
            <label htmlFor="">phone number</label>
          </div>
          <div>
            <input type="text" placeholder="enter your phonr number .." />
          </div>
        </div>

        <div className="subcontact-div">
          <div className="flexcon-div">
            <label htmlFor="">subject</label>
          </div>
          <div>
            <input type="text" placeholder="enter your purpose .."/>
          </div>
        </div>

        <div className="contactbtn-div">
          <button type="submit">submit</button>
        </div>
      </div>
    </div>
  );
}
