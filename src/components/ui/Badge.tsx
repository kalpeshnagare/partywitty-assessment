import { cn } from "@/utils";

interface BadgeProps {
  children: React.ReactNode;
  variant?: "green" | "pink" | "purple" | "default";
  className?: string;
}

const variants = {
  green: "bg-pw-green-light text-pw-green-text",
  pink: "bg-pink-50 text-pink-600",
  purple: "bg-[#EAE6F5] text-pw-purple",
  default: "bg-app-bg text-app-muted",
};

export const Badge = ({
  children,
  variant = "default",
  className,
}: BadgeProps) => (
  <span
    className={cn(
      "inline-block text-[10px] font-bold tracking-wide uppercase px-2.5 py-1 rounded-full",
      variants[variant],
      className
    )}
  >
    {children}
  </span>
);
