"use client";

import "./styles.css";

interface ButtonProps {
  handleClick?: () => void;
  readonly label: string;
  readonly className?: string;
  readonly id: string;
}

export default function Button({
  handleClick,
  label,
  className,
  id,
}: ButtonProps) {
  return (
    <button className={`btn ${className}`} onClick={handleClick} id={id}>
      {label}
    </button>
  );
}
