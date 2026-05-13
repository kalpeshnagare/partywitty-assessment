import { useNavigate } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { X, BadgeCheck, Flame, Heart } from "lucide-react";
import { GradientButton } from "@/components/ui/GradientButton";
import { profiles } from "@/data/mockData";

export const GoTonightPage = () => {
  const navigate = useNavigate();
  const p = profiles[0];

  return (
    <div className="min-h-screen bg-app-bg flex items-center justify-center p-4">
      <motion.div
        initial={{ opacity: 0, y: 24, scale: 0.96 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        transition={{ type: "spring", stiffness: 300, damping: 30 }}
        className="w-full max-w-[420px] bg-[#EDEAE5] rounded-3xl p-5 shadow-pw-lg relative"
      >
        <motion.button
          type="button"
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          onClick={() => navigate({ to: "/feed" })}
          className="absolute top-4 right-4 w-9 h-9 bg-[#D7D2E8]/70 rounded-full flex items-center justify-center text-pw-purple z-10"
        >
          <X size={16} />
        </motion.button>

        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
        >
          <h1 className="text-[28px] font-bold leading-tight text-app-dark">You chose her</h1>
          <p className="text-[14px] text-app-dark/70 mt-1">
            You&apos;re about to send her a{" "}
            <span className="text-pw-gradient font-semibold">special invite</span>
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="relative mt-5 rounded-[2rem] overflow-hidden aspect-[3/4] bg-black"
        >
          <img
            src={p.photo}
            className="absolute inset-0 w-full h-full object-cover"
            alt=""
          />

          <span className="absolute top-3 left-3 inline-flex items-center gap-1 bg-black/40 backdrop-blur-md text-white text-[11px] font-semibold px-3 py-1.5 rounded-full">
            <Flame size={11} className="text-[#FF6B6B]" /> {p.venueBadge}
          </span>

          <motion.button
            type="button"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            className="absolute top-3 right-3 w-9 h-9 bg-white/20 backdrop-blur-md rounded-full flex items-center justify-center text-white"
          >
            <Heart size={16} />
          </motion.button>

          <div className="absolute inset-x-0 bottom-0 h-2/3 bg-gradient-to-t from-black/90 via-black/40 to-transparent" />

          <div className="absolute bottom-0 inset-x-0 p-4 text-white">
            <div className="flex items-center gap-1.5">
              <h3 className="text-[20px] font-bold">
                {p.name}, {p.age}
              </h3>
              <BadgeCheck size={16} className="text-[#3B9EFF] fill-white" />
            </div>
            <p className="text-[12px] text-white/70 mt-0.5">{p.mutualMates} Mutual Mates</p>
            <div className="flex flex-wrap gap-1.5 mt-2">
              {p.tags.map((t) => (
                <span
                  key={t}
                  className="text-[10px] bg-white/15 backdrop-blur border border-white/15 px-2.5 py-1 rounded-full"
                >
                  {t}
                </span>
              ))}
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
        >
          <GradientButton className="w-full mt-5" onClick={() => navigate({ to: "/verify-prompt" })}>
            Make Your Move
          </GradientButton>
          <p className="text-[12px] text-app-muted text-center mt-3">Add a drink to introduce yourself</p>
        </motion.div>
      </motion.div>
    </div>
  );
};
