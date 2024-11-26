import React from "react";
import "../css/components-css/CustomModal.css";
import { PiSealCheckFill } from "react-icons/pi";

const CustomModal = ({ isOpen, onRequestClose, children }) => {
  if (!isOpen) return null;

  return (
    <div className="custom-modal-overlay" onClick={onRequestClose}>
      <div
        className="custom-modal-content"
        onClick={(e) => e.stopPropagation()}
      >
        <PiSealCheckFill className="modal-icon" />
        {children}
      </div>
    </div>
  );
};

export default CustomModal;
