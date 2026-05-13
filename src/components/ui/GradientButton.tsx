import { forwardRef } from "react";
import { motion, type HTMLMotionProps } from "framer-motion";
import { cn } from "@/utils";

interface ButtonProps extends Omit<HTMLMotionProps<"button">, "children"> {
  children?: React.ReactNode;
  isLoading?: boolean;
  variant?: "gradient" | "purple" | "outline";
}

const variantStyles: Record<NonNullable<ButtonProps["variant"]>, string> = {
  gradient:
    "bg-pw-gradient text-white shadow-pw-pink hover:shadow-pw-pink-lg",
  purple: "bg-pw-purple-light hover:bg-pw-purple text-white shadow-pw-purple",
  outline:
    "border-2 border-app-dark/10 text-app-dark hover:border-pw-purple hover:text-pw-purple",
};

export const GradientButton = forwardRef<HTMLButtonElement, ButtonProps>(
  (
    {
      className,
      children,
      isLoading,
      disabled,
      variant = "gradient",
      type = "button",
      ...props
    },
    ref
  ) => (
    <motion.button
      ref={ref}
      type={type}
      {...props}
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
      disabled={disabled || isLoading}
      className={cn(
        "flex items-center justify-center gap-2 font-bold rounded-full px-6 py-3.5 text-[15px]",
        "transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed",
        variantStyles[variant],
        className
      )}
    >
      {isLoading ? (
        <span className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
      ) : (
        children
      )}
    </motion.button>
  )
);
GradientButton.displayName = "GradientButton";

export const PurpleButton = forwardRef<HTMLButtonElement, ButtonProps>((props, ref) => (
  <GradientButton ref={ref} variant="purple" {...props} />
));
PurpleButton.displayName = "PurpleButton";

export const OutlineButton = forwardRef<HTMLButtonElement, ButtonProps>((props, ref) => (
  <GradientButton ref={ref} variant="outline" {...props} />
));
OutlineButton.displayName = "OutlineButton";
