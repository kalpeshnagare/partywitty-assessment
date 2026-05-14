import { useState } from "react";
import { useNavigate } from "@tanstack/react-router";
import { motion, AnimatePresence } from "framer-motion";
import { Check, Eye } from "lucide-react";
import { DesktopLayout } from "@/components/layout/DesktopLayout";
import { ProfileCard } from "@/components/cards/ProfileCard";
import { profiles, howItWorks, benefits } from "@/data/mockData";

const FEED_GHOST_BACK = {
  top: "10px",
  left: "12px",
  right: "12px",
  bottom: "0",
  background: "rgba(255,255,255,0.40)",
  zIndex: 0,
} as const;

const FEED_GHOST_MID = {
  top: "5px",
  left: "6px",
  right: "6px",
  bottom: "0",
  background: "rgba(255,255,255,0.62)",
  zIndex: 1,
} as const;

const FEED_SIDEBAR = {
  background: "#f4f0f4",
} as const;

const FEED_TEXT_PRIMARY = { color: "#1e151c" } as const;
const FEED_TEXT_MUTED = { color: "#594055" } as const;
const FEED_DIVIDER = { background: "#d4c4d2" } as const;
const FEED_BADGE_NUM = { background: "#d12ea6" } as const;
const FEED_CHECK_WRAP = { background: "#edefdc" } as const;
const FEED_CHECK_ICON = { color: "#828d3f" } as const;
const FEED_CTA_GRADIENT = {
  background: "linear-gradient(90deg, #d12ea6, #6C63FF)",
} as const;
const FEED_FOOTNOTE = { color: "#765672" } as const;

export const FeedPage = () => {
  const navigate = useNavigate();
  const [idx, setIdx] = useState(0);
  const [direction, setDirection] = useState(0);
  const profile = profiles[idx % profiles.length];

  const handleNext = (dir: number) => {
    setDirection(dir);
    setIdx((i) => i + 1);
  };

  const variants = {
    enter: (dir: number) => ({
      x: dir > 0 ? 300 : -300,
      opacity: 0,
      scale: 0.9,
    }),
    center: {
      x: 0,
      opacity: 1,
      scale: 1,
    },
    exit: (dir: number) => ({
      x: dir > 0 ? -300 : 300,
      opacity: 0,
      scale: 0.9,
    }),
  };

  return (
    <DesktopLayout>
      <div className="min-h-full relative overflow-hidden">
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_360px] gap-6 p-4 lg:p-6 max-w-[1380px] mx-auto pb-24 lg:pb-6 relative z-10">
          <div className="flex flex-col items-center">
            <motion.button
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              className="bg-pw-purple hover:bg-pw-purple-dark text-white font-bold tracking-wider text-[11px] uppercase px-7 py-2.5 rounded-full mb-4 lg:mb-6 shadow-pw-purple"
            >
              Explore Feed
            </motion.button>

            <div className="w-full max-w-[380px] mx-auto">
              <AnimatePresence mode="wait" custom={direction}>
                <motion.div
                  key={profile.id}
                  custom={direction}
                  variants={variants}
                  initial="enter"
                  animate="center"
                  exit="exit"
                  transition={{ type: "spring", stiffness: 300, damping: 30 }}
                  className="relative"
                >
                  <div
                    className="absolute rounded-[2rem] pointer-events-none"
                    style={FEED_GHOST_BACK}
                  />
                  <div
                    className="absolute rounded-[2rem] pointer-events-none"
                    style={FEED_GHOST_MID}
                  />
                  <div className="relative" style={{ zIndex: 2 }}>
                    <ProfileCard
                      profile={profile}
                      onMate={() => navigate({ to: "/go-tonight" })}
                      onLike={() => handleNext(1)}
                      onPass={() => handleNext(-1)}
                    />
                  </div>
                </motion.div>
              </AnimatePresence>
            </div>
          </div>

          <aside className="hidden lg:block">
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.1 }}
              className="rounded-3xl p-6 h-fit sticky top-6"
              style={FEED_SIDEBAR}
            >
              <div className="flex flex-col items-center text-center">
                <div className="p-[3px] rounded-full bg-pw-gradient">
                  <img
                    src="https://res.cloudinary.com/debrimebw/image/upload/image-1_ndt9z7"
                    className="w-[72px] h-[72px] rounded-full object-cover border-2 border-white"
                    alt="me"
                  />
                </div>
                <h3
                  className="font-bold text-[18px] mt-3 leading-tight"
                  style={FEED_TEXT_PRIMARY}
                >
                  Make Your First Move
                </h3>
                <p className="text-[12.5px] mt-1 leading-relaxed" style={FEED_TEXT_MUTED}>
                  Verify your profile to start sending invites and offering drinks.
                </p>
              </div>

              <div className="my-4 h-px" style={FEED_DIVIDER} />

              <div>
                <div className="font-bold text-[15px] mb-4" style={FEED_TEXT_PRIMARY}>
                  How It Works
                </div>
                <div className="space-y-4">
                  {howItWorks.map((h, i) => (
                    <motion.div
                      key={`how-it-works-${h.title}`}
                      initial={{ opacity: 0, x: 10 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.2 + i * 0.1 }}
                      className="flex items-start gap-3"
                    >
                      <div className="relative shrink-0">
                        <img
                          src={h.img}
                          className="w-[80px] h-[80px] rounded-xl object-cover"
                          alt=""
                          loading="lazy"
                        />
                        <span
                          className="absolute top-1.5 left-1.5 w-5 h-5 rounded-full flex items-center justify-center text-white text-[10px] font-bold"
                          style={FEED_BADGE_NUM}
                        >
                          {i + 1}
                        </span>
                        <span className="absolute top-1.5 right-1.5">
                          <Eye size={12} className="text-white opacity-80" />
                        </span>
                      </div>

                      <div className="min-w-0 pt-1">
                        <div
                          className="font-bold text-[13px] leading-tight"
                          style={FEED_TEXT_PRIMARY}
                        >
                          {h.title}
                        </div>
                        <div
                          className="text-[11px] mt-0.5 leading-snug"
                          style={FEED_TEXT_MUTED}
                        >
                          {h.desc}
                        </div>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>

              <div className="my-4 h-px" style={FEED_DIVIDER} />

              <div className="space-y-2.5">
                {benefits.map((b, i) => (
                  <motion.div
                    key={b}
                    initial={{ opacity: 0, x: 10 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.5 + i * 0.05 }}
                    className="flex items-center gap-2.5 text-[13px]"
                    style={FEED_TEXT_PRIMARY}
                  >
                    <span
                      className="w-5 h-5 rounded-full flex items-center justify-center shrink-0"
                      style={FEED_CHECK_WRAP}
                    >
                      <Check size={11} style={FEED_CHECK_ICON} strokeWidth={3} />
                    </span>
                    {b}
                  </motion.div>
                ))}
              </div>

              <button
                type="button"
                className="w-full mt-5 py-3.5 rounded-full text-white font-bold text-[15px]"
                style={FEED_CTA_GRADIENT}
                onClick={() => navigate({ to: "/verify-prompt" })}
              >
                Get Verified
              </button>
              <p className="text-[11px] text-center mt-2" style={FEED_FOOTNOTE}>
                Takes less than 60 seconds
              </p>
              <button className="w-full text-[12px] underline mt-1" style={FEED_FOOTNOTE}>
                Maybe later
              </button>
            </motion.div>
          </aside>
        </div>
      </div>
    </DesktopLayout>
  );
};
