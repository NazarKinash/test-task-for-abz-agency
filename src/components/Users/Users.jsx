import React from "react";

const Users = () => {
  return (
    <div>
      <div className="container">
        <h2>Our cheerful users</h2>
        <p>Attention! Sorting users by registration date</p>
        <div className="users--list"></div>
        <button className="isers--show-more">Show more</button>
      </div>
    </div>
  );
};

export default Users;
