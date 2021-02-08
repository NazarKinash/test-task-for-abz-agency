import React from "react";
import defaultAvatar from "../../../public/images/defaultAvatar.svg";

const UserCard = ({ userInfo }) => {
  const { photo, position, phone, email, name } = userInfo;

  return (
    <div className="user-card">
      <img src={photo ? photo : defaultAvatar} alt="Avatar" className="user-card--image" />
      <h4 className="heading2 user-card--title">{name}</h4>
      <p className="paragraph user-card--position">{position}</p>
      <p className="paragraph user-card--email">{email}</p>
      <p className="paragraph user-card--phone">{phone}</p>
    </div>
  );
};

export default UserCard;
