interface ButtonProps {
  color: string;
  children: string;
  onClick: (event: React.MouseEvent) => void;
}

function Button({ color, children, onClick: handleClick }: ButtonProps) {
  return (
    <button
      type="button"
      style={{ backgroundColor: color }}
      onClick={handleClick}
      className="rounded-button"
    >
      {children}
    </button>
  );
}

export default Button;
