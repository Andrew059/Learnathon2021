import React from "react";
import shhh from "../images/shhh.png";
import "./Header.css";

const Header = props => {
  return (
    <div>
      <div className="logo-container">
        <img src={shhh} />
      </div>
      <div className="title">Secret Manager</div>
    </div>
  );
};

export default Header;
