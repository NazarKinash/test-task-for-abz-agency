import React from "react";

const Register = () => {
  return (
    <div>
      <div className="container">
        <h2 className="component-title">Register to get a work</h2>
        <p className="component-subtitle">
          Attention! After successful registration and alert, update the list of users in the block from the top
        </p>
        <form action="" className="register--form">
          <label htmlFor="name"></label>
          <input type="text" placeholder="Name" />
          <label htmlFor="email"></label>
          <input type="email" placeholder="Email" />
          <label htmlFor="phone"></label>
          <input type="text" />
          <label htmlFor="phone"></label>
          <input type="text" />

          {/*  */}
          <label htmlFor="photo"></label>
          <input type="file" />
          <input type="submit" value="Sing up now" />
        </form>
        rm
      </div>
    </div>
  );
};

export default Register;
