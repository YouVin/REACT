import styles from "./Button.module.css";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  color?: string;
  bg?: string;
}

function Button({ children, bg, color, ...rest }: ButtonProps) {
  let btnColor = {
    gray: "bg-gray-500",
    red: "bg-red-500",
    yellow: "bg-yellow-500",
  };

  let btnSize = {
    sm: "py-1 px-2 text-sm",
    md: "py-2 px-4 text-base",
    lg: "py-2 px-6 text-lg",
  };

  return (
    <button
      className="${} border-0 text-white py-1.5 px-4 text-center my-1 mx-0.5 rounded-md cursor-pointer"
      {...rest}
    >
      {children}
    </button>
  );
}

export default Button;
