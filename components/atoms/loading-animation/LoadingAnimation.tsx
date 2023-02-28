import React from "react";

interface LoadingProps {
  /** Size of loader */
  size?: "sm" | "md" | "lg";
}

export const LoadingAnimation = ({ size }: LoadingProps) => {
  return (
    <div
      className={`border-white border-b-purple-200 border-4 text-center rounded-full animate-spin ${
        size === "lg" ? "w-20 h-20" : size === "sm" ? "w-4 h-4" : "w-6 h-6"
      }`}
    />
  );
};
