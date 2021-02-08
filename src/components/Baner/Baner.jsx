import React from "react";
import { useMediaQuery } from "react-responsive";

const Baner = () => {
  const isMobile = useMediaQuery({
    query: "(max-device-width: 767px)",
  });
  return (
    <div className="baner-wrapper">
      <div className="container">
        <h1 className="Heaging1 baner--title">Test assignment for Frontend Developer position</h1>
        <p className="paragraph baner--text">
          {isMobile
            ? "We kindly remind you that your test assignment should be submitted as a link to github/bitbucket repository."
            : "We kindly remind you that your test assignment should be submitted as a link to github/bitbucket repository. Please be patient, we consider and respond to every application that meets minimum requirements. We look forward to your submission. Good luck! The photo has to scale in the banner area on the different screens"}
        </p>
        <a href="#register" className="Btn baner--btn">
          Sing up now
        </a>
      </div>
    </div>
  );
};

export default Baner;
