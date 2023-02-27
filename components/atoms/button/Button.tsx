import React from "react";
import { cva, VariantProps } from "cva";

export interface ButtonProps {
  /** Content of button */
  children: string | React.ReactNode;
  /** Classes to be applied to component */
  className?: string;
  /** If button spans width of container */
  fullWidth?: boolean;
  /** Purpose of button */
  intent?: "primary" | "secondary" | "danger";
  /** Purpose of button */
  onClick: () => undefined;
  /** Size of button */
  rounded?: boolean;
  /** Size of button */
  size?: "sm" | "md" | "lg";
  /** Additional props */
  [x: string]: any;
}

const buttonStyles = cva(["font-bold"], {
  variants: {
    fullWidth: {
      true: ["w-full"],
    },
    intent: {
      primary: [
        "bg-purple-500",
        "hover:bg-purple-400",
        "focus:outline-purple-200",
        "focus:outline-offset-2",
        "active:bg-purple-300",
        "text-white",
      ],
      secondary: ["bg-ghost-900"],
      danger: ["bg-red-500"],
    },
    rounded: {
      true: "rounded-full",
      false: "rounded",
    },
    size: {
      sm: ["px-3", "py-1.5"],
      md: ["px-4", "py-2"],
      lg: ["px-4", "py-2.5"],
    },
  },
  defaultVariants: {
    fullWidth: false,
    intent: "primary",
    rounded: false,
    size: "md",
  },
});

// interface Props extends ButtonProps, VariantProps<typeof buttonStyles> {}

export const Button = ({
  children,
  className,
  fullWidth = false,
  intent = "primary",
  onClick,
  rounded = false,
  size = "md",
  ...rest
}: ButtonProps) => (
  <button
    className={buttonStyles({ fullWidth, intent, rounded, size })}
    onClick={onClick}
  >
    {children}
  </button>
);
