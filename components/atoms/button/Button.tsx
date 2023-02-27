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
  outline?: boolean;
  /** Size of button */
  rounded?: boolean;
  /** Size of button */
  size?: "sm" | "md" | "lg";
  /** Additional props */
  [x: string]: any;
}

const buttonStyles = cva(
  ["font-bold", "ease-in-out", "transition-all", "duration-150", "box-border"],
  {
    variants: {
      fullWidth: {
        true: ["w-full"],
      },
      intent: {
        primary: [
          "hover:bg-purple-400",
          "focus:outline-purple-200",
          "focus:outline-offset-2",
          "active:bg-purple-300",
        ],
        secondary: [
          "hover:bg-ghost-300",
          "focus:outline-ghost-300",
          "focus:outline-offset-2",
          "active:bg-ghost-200",
          "text-text-500",
        ],
        danger: [
          "hover:bg-red-300",
          "focus:outline-red-300",
          "focus:outline-offset-2",
          "active:bg-red-200",
        ],
      },
      outline: {
        true: [""],
        false: [""],
      },
      rounded: {
        true: "rounded-full",
        false: "rounded",
      },
      size: {
        sm: ["px-3", "py-1.5", "text-sms"],
        md: ["px-4", "py-2"],
        lg: ["px-4", "py-2.5", "text-lg"],
      },
    },
    compoundVariants: [
      {
        intent: "primary",
        outline: false,
        class: ["bg-purple-500", "text-white"],
      },
      {
        intent: "primary",
        outline: true,
        class: [
          "bg-transparent",
          "ring-2",
          "ring-inset",
          "ring-purple-500",
          "text-purple-500",
          "hover:text-white",
          "active:text-white",
        ],
      },
      {
        intent: "secondary",
        outline: false,
        class: ["bg-ghost-500"],
      },
      {
        intent: "secondary",
        outline: true,
        class: ["bg-transparent", "ring-2", "ring-inset", "ring-ghost-500"],
      },
      {
        intent: "danger",
        outline: false,
        class: ["bg-red-500", "text-white"],
      },
      {
        intent: "danger",
        outline: true,
        class: [
          "bg-transparent",
          "ring-2",
          "ring-inset",
          "ring-red-500",
          "text-red-500",
          "hover:text-white",
          "active:text-white",
        ],
      },
    ],
    defaultVariants: {
      fullWidth: false,
      intent: "primary",
      outline: false,
      rounded: false,
      size: "md",
    },
  }
);

// interface Props extends ButtonProps, VariantProps<typeof buttonStyles> {}

export const Button = ({
  children,
  className,
  fullWidth = false,
  intent = "primary",
  onClick,
  outline,
  rounded = false,
  size = "md",
  ...rest
}: ButtonProps) => (
  <button
    className={buttonStyles({ fullWidth, intent, outline, rounded, size })}
    onClick={onClick}
  >
    {children}
  </button>
);
