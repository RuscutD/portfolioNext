import React from "react";

// CSS styles
import style from "../styles/button.module.scss";

// Interface
export interface IButton {
  label: string;
  onClick: any;
}

export default function Button({ label, onClick }: IButton) {
  return (
    <button className={`${style.button} drop-shadow-md`} onClick={onClick}>
      {label}
    </button>
  );
}
