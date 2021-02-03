import React from "react";
import logo from "../../../public/images/logo.svg";

const Header = () => {
  return (
    <div className="header">
      <div className="container">
        <img src={logo} alt="logo" />
        <nav className="header--navigation">
          <a href="" className="header--navigation-link">
            About me
          </a>
          <a href="" className="header--navigation-link">
            Relationships
          </a>
          <a href="" className="header--navigation-link">
            Requirements
          </a>
          <a href="" className="header--navigation-link">
            Users
          </a>
          <a href="" className="header--navigation-link">
            Sign Up
          </a>
        </nav>
      </div>
    </div>
  );
};

export default Header;
