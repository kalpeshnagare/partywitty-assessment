import { motion } from "framer-motion";
import { BadgeCheck, Flame, Heart, X, Plus } from "lucide-react";
import type { Profile } from "@/types";
import { cn } from "@/utils";

const CARD_FRAME = {
  borderRadius: "2rem",
  background: "#fff",
  boxShadow: "0 16px 56px rgba(0,0,0,0.16)",
} as const;

const PHOTO_ASPECT = { aspectRatio: "3/4" } as const;

const PHOTO_GRADIENT = {
  background:
    "linear-gradient(to top, rgba(0,0,0,0.82) 0%, rgba(0,0,0,0.3) 40%, transparent 65%)",
} as const;

const VIBE_BADGE = {
  background: "rgba(0,0,0,0.28)",
  backdropFilter: "blur(12px)",
  border: "1px solid rgba(255,255,255,0.12)",
} as const;

const FLAME_ACCENT = { color: "#FF6B6B" } as const;

const MUTUAL_TEXT = { color: "rgba(255,255,255,0.70)" } as const;

const MATE_BTN_BG = { background: "linear-gradient(90deg, #FF3CAC, #a855f7)" } as const;

const TAG_PILL = {
  background: "rgba(255,255,255,0.12)",
  backdropFilter: "blur(8px)",
  border: "1px solid rgba(255,255,255,0.15)",
  color: "#fff",
} as const;

const ACTION_BAR = {
  background: "#F1EBED",
  borderRadius: "100px",
  border: "1px solid #E2DEDA",
} as const;

const PASS_BTN = {
  border: "1px solid #E2DEDA",
  color: "#aaa",
  boxShadow: "0 1px 4px rgba(0,0,0,0.06)",
} as const;

const GO_TONIGHT_BTN = {
  background: "linear-gradient(90deg, #D537A6, #C82EB4)",
  boxShadow: "0 4px 18px rgba(213,55,166,0.40)",
} as const;

const LIKE_BTN = {
  background: "#F0CCD9",
  border: "1px solid rgba(213,55,166,0.15)",
} as const;

const HEART_ICON = { color: "#D537A6" } as const;

interface ProfileCardProps {
  profile: Profile;
  onMate?: () => void;
  onLike?: () => void;
  onPass?: () => void;
  className?: string;
}

export const ProfileCard = ({
  profile,
  onMate,
  onLike,
  onPass,
  className,
}: ProfileCardProps) => (
  <div className={cn("w-full flex flex-col", className)}>
    <div className="w-full overflow-hidden" style={CARD_FRAME}>
      <div className="relative w-full" style={PHOTO_ASPECT}>
        <img
          src={profile.photo}
          alt={profile.name}
          className="absolute inset-0 w-full h-full object-cover"
          loading="eager"
        />

        <div className="absolute inset-0" style={PHOTO_GRADIENT} />

        <div className="absolute top-4 left-4 z-10">
          <span
            className="inline-flex items-center gap-1.5 text-white text-[11px] font-semibold px-3 py-1.5 rounded-full"
            style={VIBE_BADGE}
          >
            <Flame size={11} style={FLAME_ACCENT} />
            {profile.vibe}
          </span>
        </div>

        <div className="absolute bottom-0 inset-x-0 p-4 text-white">
          <div className="flex items-end justify-between gap-3">
            <div className="min-w-0 flex-1">
              <div className="flex items-center gap-1.5 flex-wrap">
                <h3 className="text-[22px] font-bold leading-tight">
                  {profile.name}, {profile.age}
                </h3>
                {profile.verified && (
                  <BadgeCheck size={18} className="text-[#3B9EFF] fill-white shrink-0" />
                )}
              </div>
              <p className="text-[13px] mt-0.5" style={MUTUAL_TEXT}>
                {profile.mutualMates} Mutual Mates
              </p>
            </div>

            {onMate && (
              <motion.button
                type="button"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={onMate}
                className="flex items-center gap-1.5 text-white text-[13px] font-bold px-4 py-2 rounded-full shrink-0"
                style={MATE_BTN_BG}
              >
                <Plus size={14} /> Mate
              </motion.button>
            )}
          </div>

          <div className="flex flex-wrap gap-1.5 mt-3">
            {profile.tags.map((tag) => (
              <span key={tag} className="text-[11px] px-2.5 py-1 rounded-full" style={TAG_PILL}>
                {tag}
              </span>
            ))}
          </div>
        </div>
      </div>
    </div>

    <div className="flex items-center justify-between mt-3 px-3 py-3 mx-1" style={ACTION_BAR}>
      <motion.button
        type="button"
        whileHover={{ scale: 1.08 }}
        whileTap={{ scale: 0.92 }}
        onClick={onPass}
        className="w-11 h-11 rounded-full flex items-center justify-center bg-white"
        style={PASS_BTN}
      >
        <X size={17} />
      </motion.button>

      <motion.button
        type="button"
        whileHover={{ scale: 1.02 }}
        whileTap={{ scale: 0.97 }}
        onClick={onMate}
        className="flex items-center gap-2 text-white font-bold text-[14px] px-7 py-3 rounded-full"
        style={GO_TONIGHT_BTN}
      >
        <Flame size={15} />
        Go Tonight
      </motion.button>

      <motion.button
        type="button"
        whileHover={{ scale: 1.08 }}
        whileTap={{ scale: 0.92 }}
        onClick={onLike}
        className="w-11 h-11 rounded-full flex items-center justify-center"
        style={LIKE_BTN}
      >
        <Heart size={17} style={HEART_ICON} />
      </motion.button>
    </div>
  </div>
);
