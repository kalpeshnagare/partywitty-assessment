import { useState } from "react";
import { Link, useLocation } from "@tanstack/react-router";
import { motion, AnimatePresence } from "framer-motion";
import {
  ClipboardList,
  Gavel,
  RefreshCw,
  Search,
  MessageCircle,
  Bell,
  Bookmark,
  Wallet,
  PanelLeft,
  Crown,
  Menu,
  X,
} from "lucide-react";
import { Logo } from "@/components/ui/Logo";
import { cn } from "@/utils";
import { currentUser } from "@/data/mockData";
import { useIsMobile } from "@/hooks/useIsMobile";

const NAV = [
  { label: "My Plan", to: "/feed", Icon: ClipboardList },
  { label: "My Bids", to: "/buy-drinks", Icon: Gavel },
  { label: "My Booking", to: "/order-summary", Icon: RefreshCw },
  { label: "Search", to: "/events", Icon: Search },
  { label: "Chat Room", to: "/feed", Icon: MessageCircle },
  { label: "Notifications", to: "/feed", Icon: Bell },
  { label: "Save & Like", to: "/feed", Icon: Bookmark },
  { label: "Rewards", to: "/feed", Icon: Wallet },
] as const;

export const Sidebar = () => {
  const [pinned, setPinned] = useState(false);
  const [hover, setHover] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const expanded = pinned || hover;
  const { pathname } = useLocation();
  const { isMobile } = useIsMobile();

  // Mobile sidebar
  if (isMobile) {
    return (
      <>
        {/* Mobile Toggle Button */}
        <button
          onClick={() => setMobileOpen(true)}
          className="fixed top-4 left-4 z-50 w-10 h-10 bg-white rounded-full shadow-pw-md flex items-center justify-center"
        >
          <Menu size={20} className="text-app-dark" />
        </button>

        {/* Mobile Overlay */}
        <AnimatePresence>
          {mobileOpen && (
            <>
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                onClick={() => setMobileOpen(false)}
                className="fixed inset-0 bg-black/50 z-50 backdrop-blur-sm"
              />
              <motion.aside
                initial={{ x: -280 }}
                animate={{ x: 0 }}
                exit={{ x: -280 }}
                transition={{ type: "spring", damping: 25, stiffness: 200 }}
                className="fixed left-0 top-0 bottom-0 w-[280px] bg-white z-50 shadow-pw-lg flex flex-col"
              >
                <div className="px-4 pt-5 pb-3 flex items-center justify-between">
                  <Logo />
                  <button
                    onClick={() => setMobileOpen(false)}
                    className="w-8 h-8 rounded-full bg-app-bg flex items-center justify-center"
                  >
                    <X size={16} />
                  </button>
                </div>

                <nav className="px-3 mt-2 flex-1 space-y-1">
                  {NAV.map(({ label, to, Icon }) => {
                    const active = pathname === to && (to !== "/feed" || label === "My Plan");
                    return (
                      <Link
                        key={label}
                        to={to}
                        onClick={() => setMobileOpen(false)}
                        className={cn(
                          "flex items-center gap-3 px-3 py-3 rounded-xl text-[15px] font-semibold transition-all",
                          active
                            ? "bg-pw-purple text-white shadow-pw-purple"
                            : "text-app-dark hover:bg-app-bg"
                        )}
                      >
                        <Icon size={20} />
                        {label}
                      </Link>
                    );
                  })}
                </nav>

                <div className="px-3 pb-4 space-y-3">
                  <div className="rounded-xl overflow-hidden bg-gradient-to-br from-[#1A1A2E] to-[#2A1B45] p-3 text-white">
                    <div className="flex items-center gap-2 text-[12px] font-semibold">
                      <Crown size={14} className="text-[#FFD700]" />
                      Corporate Employee Offer
                    </div>
                    <div className="text-[11px] mt-0.5 text-white/80">
                      1 Month <span className="text-pw-gradient font-bold">For ₹1</span>
                    </div>
                  </div>

                  <div className="flex items-center gap-3 px-1">
                    <img
                      src={currentUser.photo}
                      className="w-10 h-10 rounded-full object-cover shrink-0"
                      alt="user"
                    />
                    <div className="leading-tight min-w-0">
                      <div className="text-[13px] font-bold truncate">
                        {currentUser.name}
                      </div>
                      <div className="text-[11px] text-app-muted truncate">
                        {currentUser.company} {currentUser.role}
                      </div>
                    </div>
                  </div>
                </div>
              </motion.aside>
            </>
          )}
        </AnimatePresence>
      </>
    );
  }

  // Desktop sidebar
  return (
    <aside
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
      className={cn(
        "shrink-0 flex flex-col h-screen sticky top-0 z-30",
        "transition-[width] duration-300 ease-out",
        expanded ? "w-[240px]" : "w-[72px]"
      )}
      style={{
        background: 'rgba(255, 255, 255, 0.18)',
        backdropFilter: 'blur(24px)',
        WebkitBackdropFilter: 'blur(24px)',
        borderRight: '1px solid rgba(108, 99, 255, 0.20)',
        boxShadow: '2px 0 16px rgba(0,0,0,0.04)',
        overflow: 'visible',
      }}
    >
      {/* Logo row */}
      <div className="px-4 pt-5 pb-3 flex items-center min-h-[56px] relative">
        <Logo withText={expanded} />

        <button
          onClick={(e) => { e.stopPropagation(); setPinned(p => !p); }}
          className={cn(
            "absolute top-1/2 -translate-y-1/2 rounded-full flex items-center justify-center shrink-0 transition-all duration-300",
            expanded ? "right-4 w-8 h-8" : "-right-[18px] w-9 h-9"
          )}
          style={{
            background: 'rgba(232, 227, 245, 1)',
            border: '1px solid rgba(108, 99, 255, 0.28)',
          }}
        >
          <PanelLeft size={expanded ? 16 : 18} style={{ color: '#6C63FF' }} />
        </button>
      </div>

      {/* Nav */}
      <nav className="px-3 mt-4 flex-1 space-y-1">
        {NAV.map(({ label, to, Icon }) => {
          const active = pathname === to && (to !== "/feed" || label === "My Plan");
          return (
            <Link
              key={label}
              to={to}
              className={cn(
                "flex items-center gap-3 px-3 py-3 rounded-xl text-[15px] font-semibold transition-all whitespace-nowrap",
                active
                  ? "text-[#6C63FF] bg-white/25 backdrop-blur-sm"
                  : "text-[#131621] hover:bg-white/20"
              )}
            >
              <Icon
                size={20}
                className="shrink-0"
                strokeWidth={active ? 2 : 1.5}
              />
              <span className={cn(
                "transition-opacity duration-200",
                expanded ? "opacity-100" : "opacity-0 w-0"
              )}>
                {label}
              </span>
            </Link>
          );
        })}
      </nav>

      {/* Bottom */}
      <div className="px-3 pb-4 space-y-3">
        {/* More button */}
        <button className="w-full flex items-center gap-3 px-3 py-2.5 text-[14px] font-semibold text-[#131621] hover:text-[#35445C] transition-colors">
          <Menu size={18} className="shrink-0" />
          <span className={cn(expanded ? "opacity-100" : "opacity-0 w-0")}>
            More
          </span>
        </button>

        {/* Corporate offer card */}
        {expanded && (
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            className="rounded-xl overflow-hidden p-3 text-white"
            style={{ background: 'linear-gradient(135deg, #1A1A2E 0%, #2A1B45 100%)' }}
          >
            <div className="flex items-center gap-2 text-[12px] font-semibold">
              <Crown size={14} className="text-[#FFD700]" />
              Corporate Employee Offer
            </div>
            <div className="text-[11px] mt-0.5 text-white/80">
              1 Month{' '}
              <span
                className="font-bold"
                style={{ background: 'linear-gradient(90deg, #FF3CAC, #6C63FF)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}
              >
                For ₹1
              </span>
            </div>
          </motion.div>
        )}

        {/* User row */}
        <div className="flex items-center gap-3 px-1">
          <img
            src={currentUser.photo}
            className="w-9 h-9 rounded-full object-cover shrink-0 ring-2 ring-white/40"
            alt="user"
          />
          {expanded && (
            <div className="leading-tight min-w-0 flex-1">
              <div className="text-[12px] font-bold truncate text-[#131621]">
                {currentUser.name}
              </div>
              <div className="text-[10px] truncate" style={{ color: '#35445C' }}>
                {currentUser.company} {currentUser.role}
              </div>
            </div>
          )}
          {expanded && (
            <svg width="14" height="14" viewBox="0 0 14 14" fill="none" className="shrink-0 text-[#35445C]">
              <path d="M3 11L11 3M11 3H5M11 3V9" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          )}
        </div>
      </div>
    </aside>
  );
}
