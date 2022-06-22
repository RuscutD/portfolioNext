import React from "react";

// CSS styles
import style from "../styles/button.module.scss";

// Interface
export interface IButton {
  label: string;
}

export default function Button({ label }: IButton) {
  return <button className={`${style.button} drop-shadow-md`}>{label}</button>;
}
