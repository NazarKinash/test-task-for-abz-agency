import React from "react";

const Baner = () => {
  return (
    <div className="baner-wrapper">
      <div className="container">
        <h1 className="baner--title">Test assignment for Frontend Developer position</h1>
        <p className="baner--text">
          We kindly remind you that your test assignment should be submitted as a link to github/bitbucket repository.
          Please be patient, we consider and respond to every application that meets minimum requirements. We look
          forward to your submission. Good luck! The photo has to scale in the banner area on the different screens
        </p>
        <a href="#" className="baner--btn">
          Sing up now
        </a>
      </div>
    </div>
  );
};

export default Baner;
