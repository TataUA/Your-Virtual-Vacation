import { cn } from "@/services/utils/cn";
import { ButtonHTMLAttributes } from "react";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "default" | "outline" | "ghost";
}

export function Button({
  variant = "default",
  className,
  ...props
}: ButtonProps) {
  return (
    <button
      className={cn(
        "px-4 py-2 rounded-lg font-medium transition",
        variant === "default" && "bg-blue-600 text-white hover:bg-blue-700",
        variant === "outline" &&
          "border border-gray-300 text-gray-700 hover:bg-gray-100",
        variant === "ghost" && "text-gray-600 hover:bg-gray-200",
        className
      )}
      {...props}
    />
  );
}
