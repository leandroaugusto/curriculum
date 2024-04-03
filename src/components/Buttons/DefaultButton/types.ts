export interface ButtonProps {
  handleClick?: () => void;
  readonly label: string;
  readonly className?: string;
  readonly id: string;
}
