import React from "react";
import logo from "../../../public/images/logo.svg";
import { useMediaQuery } from "react-responsive";

const Header = () => {
  // ---=== media query for mobile ===---
  const isTablet = useMediaQuery({ query: "(max-device-width: 767px)" });

  return (
    <div className="header">
      <div className="container">
        <div className="header--wrapper">
          <img src={logo} alt="logo" />

          {isTablet ? (
            <svg
              tabIndex="2"
              className="header--menu-icon"
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="15"
              viewBox="0 0 20 15"
            >
              <path
                id="menu_icon"
                data-name="menu icon"
                className="cls-1"
                d="M325,13h20v3H325V13Zm0,6h20v3H325V19Zm0,6h20v3H325V25Z"
                transform="translate(-325 -13)"
              />
            </svg>
          ) : (
            <nav className="header--navigation">
              <a href="#about" className="header--navigation-link ">
                About me
              </a>
              <a href="#register" className="header--navigation-link">
                Relationships
              </a>
              <a href="#register" className="header--navigation-link">
                Requirements
              </a>
              <a href="#users" className="header--navigation-link">
                Users
              </a>
              <a href="#register" className="header--navigation-link">
                Sign Up
              </a>
            </nav>
          )}
          <div className="menu">
            <header className="menu--head">
              <img src={logo} alt="logo" />
            </header>
            <div className="header--menu">
              <section className="menu--section">
                <a href="#about" className="header--navigation-link ">
                  About me
                </a>
                <a href="#register" className="header--navigation-link">
                  Relationships
                </a>
                <a href="#register" className="header--navigation-link">
                  Requirements
                </a>
                <a href="#users" className="header--navigation-link">
                  Users
                </a>
                <a href="#register" className="header--navigation-link">
                  Sign Up
                </a>
              </section>
              <section className="menu--section">
                <a href="#about" className="header--navigation-link ">
                  About me
                </a>
                <a href="#register" className="header--navigation-link">
                  Relationships
                </a>
                <a href="#register" className="header--navigation-link">
                  Requirements
                </a>
                <a href="#users" className="header--navigation-link">
                  Users
                </a>
                <a href="#register" className="header--navigation-link">
                  Sign Up
                </a>
              </section>
              <section className="menu--section">
                <a href="#about" className="header--navigation-link ">
                  About me
                </a>
                <a href="#register" className="header--navigation-link">
                  Relationships
                </a>
                <a href="#register" className="header--navigation-link">
                  Requirements
                </a>
                <a href="#users" className="header--navigation-link">
                  Users
                </a>
                <a href="#register" className="header--navigation-link">
                  Sign Up
                </a>
              </section>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
