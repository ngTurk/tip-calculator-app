import React from "react";

import './input.scss';

export default function index({ id, title, placeholder }) {
  return (
    <div className="custom-input">
      <label htmlFor={id}>{title}</label>
      <input className={id} id={id} type="text" placeholder={placeholder} />
    </div>
  );
}
