import React from "react";
import defaultAvatar from "../../../public/images/defaultAvatar.svg";

const UserCard = ({ userInfo }) => {
  const { photo, position, phone, email, name } = userInfo;

  return (
    <div className="user-card">
      <img src={photo ? photo : defaultAvatar} alt="Avatar" className="user-card--image" />
      <h4 className="heading2 user-card--title">{name}</h4>
      <div className="tooltip">
        <p className="paragraph user-card--position">{position}</p>
        <span className="tooltiptext">{position}</span>
      </div>
      <div className="tooltip">
        <p className="paragraph user-card--email">{email}</p>
        <span className="tooltiptext">{email}</span>
      </div>

      <p className="paragraph user-card--phone">{phone}</p>
    </div>
  );
};

export default UserCard;
