import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cn } from "@/lib/utils"; // Uses the utility we just fixed

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "outline" | "ghost" | "danger";
  size?: "sm" | "md" | "lg" | "xl";
  asChild?: boolean;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant = "primary", size = "md", asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : "button";
    
    // Base styles using Manrope for buttons [cite: 2026-01-08]
    const baseStyles = "inline-flex items-center justify-center font-bold transition-all active:scale-[0.98] disabled:opacity-50 disabled:pointer-events-none font-manrope";
    
    const variants = {
      primary: "bg-[#0A0A0A] text-white hover:bg-[#222]",
      outline: "border-2 border-[#0A0A0A] text-[#0A0A0A] hover:bg-gray-50",
      ghost: "text-gray-500 hover:text-[#0A0A0A] hover:bg-gray-100",
      danger: "bg-red-50 text-red-600 hover:bg-red-100",
    };

    const sizes = {
      sm: "px-4 py-2 text-xs rounded-xl",
      md: "px-6 py-3 text-sm rounded-2xl",
      lg: "px-8 py-4 text-base rounded-2xl",
      xl: "px-10 py-5 text-lg rounded-[20px]", // Matching Register button scale
    };

    return (
      <Comp
        className={cn(baseStyles, variants[variant], sizes[size], className)}
        ref={ref}
        {...props}
      />
    );
  }
);
Button.displayName = "Button";

export { Button };