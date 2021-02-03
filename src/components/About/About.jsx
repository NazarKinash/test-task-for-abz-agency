import React from "react";

const About = () => {
  return (
    <div>
      <div className="container">
        <div className="about--component-wrapper">
          <h2 className="component-title">Let's get acquainted</h2>
          <div className="about--content-wrapper">
            <img src="" alt="" />
            <div className="about--content">
              <h3>I am cool frontend developer</h3>
              <p>
                We will evaluate how clean your approach to writing CSS and Javascript code is. You can use any CSS and
                Javascript 3rd party libraries without any restriction.
              </p>
              <p>
                If 3rd party css/javascript libraries are added to the project via bower/npm/yarn you will get bonus
                points. If you use any task runner (gulp/webpack) you will get bonus points as well. Slice service
                directory page P​SD mockup​ into HTML5/CSS3.
              </p>
              <a href="">Sing up now</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
