import { Link, useLocation } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { Home, Search, Heart, User, PlusCircle } from "lucide-react";
import { cn } from "@/utils";

const MOBILE_NAV = [
  { to: "/feed", Icon: Home, label: "Home" },
  { to: "/events", Icon: Search, label: "Explore" },
  { to: "/buy-drinks", Icon: PlusCircle, label: "Send" },
  { to: "/feed", Icon: Heart, label: "Likes" },
  { to: "/show-vibe", Icon: User, label: "Profile" },
];

export const MobileNav = () => {
  const { pathname } = useLocation();

  return (
    <nav className="fixed bottom-0 left-0 right-0 bg-white/90 backdrop-blur-xl border-t border-black/5 z-50 safe-bottom lg:hidden">
      <div className="flex items-center justify-around py-2 px-4">
        {MOBILE_NAV.map(({ to, Icon, label }) => {
          const active = pathname === to;
          return (
            <Link
              key={label}
              to={to}
              className="relative flex flex-col items-center gap-0.5 py-1 px-3"
            >
              {active && (
                <motion.div
                  layoutId="mobileNav"
                  className="absolute -top-2 w-8 h-1 bg-pw-gradient rounded-full"
                  transition={{ type: "spring", stiffness: 500, damping: 30 }}
                />
              )}
              <Icon
                size={22}
                className={cn(
                  "transition-colors",
                  active ? "text-pw-purple" : "text-app-muted"
                )}
              />
              <span
                className={cn(
                  "text-[10px] font-medium",
                  active ? "text-pw-purple" : "text-app-muted"
                )}
              >
                {label}
              </span>
            </Link>
          );
        })}
      </div>
    </nav>
  );
}
