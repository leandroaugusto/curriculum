"use client";

import { ButtonProps } from "./types";
import "./styles.css";

export default function Button({
  handleClick,
  label,
  className,
  id,
}: ButtonProps): React.ReactElement<HTMLButtonElement> {
  return (
    <button className={`btn ${className}`} onClick={handleClick} id={id}>
      {label}
    </button>
  );
}
