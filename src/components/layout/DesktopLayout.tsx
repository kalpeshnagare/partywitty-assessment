import { type ReactNode } from "react";
import { Sidebar } from "./Sidebar";
import { useIsMobile } from "@/hooks/useIsMobile";
import { cn } from "@/utils";

const APP_PAGE_BACKGROUND =
  "radial-gradient(circle at top left, var(--color-lavender-200) 0%, transparent 45%), radial-gradient(circle at top right, var(--color-soft-linen-200) 0%, transparent 45%), radial-gradient(circle at bottom left, var(--color-soft-linen-200) 0%, transparent 45%), var(--color-white-smoke-50)";

export const DesktopLayout = ({ children }: { children: ReactNode }) => {
  const { isMobile } = useIsMobile();

  return (
    <div className="min-h-screen flex" style={{ background: APP_PAGE_BACKGROUND }}>
      <Sidebar />
      <main className={cn("flex-1 min-w-0 overflow-x-hidden", isMobile ? "pt-16 px-4" : "")}>
        {children}
      </main>
    </div>
  );
};
