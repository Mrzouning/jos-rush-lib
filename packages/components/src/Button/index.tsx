import React from "react";
import cn from "classnames";
// import "./button.css";

interface ButtonProps {
  /**
   * Is this the principal call to action on the page?
   */
  primary?: boolean;
  /**
   * What background color to use
   */
  backgroundColor?: string;
  /**
   * How large should the button be?
   */
  size?: "small" | "medium" | "large";
  /**
   * Button contents
   */
  label: string;
  /**
   * Optional click handler
   */
  onClick?: () => void;
}

/**
 * Primary UI component for user interaction
 */
const Button = ({
  primary = false,
  size = "medium",
  backgroundColor,
  label,
  ...props
}: ButtonProps) => {
  return (
    <button
      type="button"
      className={cn(
        "bg-primary text-red-300 px-2 w-[80px]h-8",
        "after:content-['']",
        "hover:bg-emerald-400 transition duration-150 first-letter:text-red-500"
      )}
      style={{ backgroundColor }}
      {...props}>
      {label}
    </button>
  );
};
export default Button;
