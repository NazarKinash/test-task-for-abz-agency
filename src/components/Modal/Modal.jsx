import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import { registerInfo } from "../../redux/slices/registerInfoSlice";

const Modal = ({ setIsModal }) => {
  const modalContent = useSelector(registerInfo);

  //

  useEffect(() => {
    document.addEventListener("keydown", (e) => closeModal(e));
    return () => {
      document.addEventListener("keydown", (e) => closeModal(e));
    };
  }, []);

  //
  // ---=== close handler ===---
  const closeModal = (e) => {
    (e.key === "Escape" || e.target.id === "close") && setIsModal(false);
  };

  return (
    <div className="modal--owerlay" onClick={closeModal} id="close">
      <div className="modal">
        <div className="modal--header-container">
          <h2 className="heading2">{modalContent.success ? "Congratulations" : "WARNING"}</h2>
          <svg
            id="close"
            className="modal--close-icon"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 14 14"
            width="14"
            height="14"
          >
            <path
              id="close"
              className="shp0"
              d="M13 10.9L10.9 13L7 9.1L3.1 13L1 10.9L4.9 7L1 3.1L3.1 1L7 4.9L10.9 1L13 3.1L9.1 7L13 10.9Z"
            />
          </svg>
        </div>
        <div className="modal--message-container">
          <p className="paragraph modal--message">{modalContent.message}</p>
        </div>
        <div className="modal--btn-container">
          <button className="Btn modal--btn" id="close">
            {modalContent.success ? "Great" : "Close"}
          </button>
        </div>
      </div>
    </div>
  );
};

export default Modal;
