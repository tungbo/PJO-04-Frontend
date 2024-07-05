import React, { useState, useEffect } from "react";
import "./toaster.css";
const Toaster = ({ message, type, onClose }) => {
  useEffect(() => {
    const timer = setTimeout(() => {
      onClose();
    }, 3000);
    return () => clearTimeout(timer);
  }, [onClose]);

  return (
    <div className={`toaster ${type}`}>
      {message}
      <button onClick={onClose}>X</button>
    </div>
  );
};

export default Toaster;
