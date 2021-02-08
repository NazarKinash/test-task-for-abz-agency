import React from "react";
import aboutComponnentImage from "../../../public/images/about-component-img.svg";

const About = () => {
  return (
    <div>
      <div className="container" id="about">
        <div className="about--component-wrapper">
          <h2 className="Heaging1 component-title">Let's get acquainted</h2>
          <div className="about--content-wrapper">
            <img className="about--component-img" src={aboutComponnentImage} alt="about-component-img" />
            <div className="about--content">
              <h3 className="heading2">I am cool frontend developer</h3>
              <p className="paragraph about--paragraph">
                We will evaluate how clean your approach to writing CSS and Javascript code is. You can use any CSS and
                Javascript 3rd party libraries without any restriction.
              </p>
              <p className="paragraph about--paragraph">
                If 3rd party css/javascript libraries are added to the project via bower/npm/yarn you will get bonus
                points. If you use any task runner (gulp/webpack) you will get bonus points as well. Slice service
                directory page P​SD mockup​ into HTML5/CSS3.
              </p>
              <a href="#register" className="about--link">
                Sing up now
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
