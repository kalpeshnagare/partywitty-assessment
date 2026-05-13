import { useEffect, useState } from "react";
import { useNavigate } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { BadgeCheck, Sparkles, Heart } from "lucide-react";
import { PurpleButton } from "@/components/ui/GradientButton";

const VERIFY_IMAGE_FILTER = "hue-rotate(140deg) saturate(1.2)";

export const VerifiedPage = () => {
  const navigate = useNavigate();
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const t = setTimeout(() => setProgress(98.4), 400);
    return () => clearTimeout(t);
  }, []);

  return (
    <div className="min-h-screen bg-app-bg flex items-center justify-center p-4">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="w-full max-w-[420px] text-center"
      >
        <motion.div
          initial={{ scale: 0.8 }}
          animate={{ scale: 1 }}
          transition={{ type: "spring", stiffness: 200, damping: 20 }}
          className="relative mx-auto w-[260px] h-[260px]"
        >
          <motion.div
            animate={{ rotate: 360 }}
            transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
            className="absolute inset-0 rounded-full bg-white/60 shadow-pw-lg"
          />

          <div className="absolute inset-4 rounded-full bg-white/80 border border-[#E5E1F5]" />

          <div className="absolute inset-8 rounded-full overflow-hidden bg-gradient-to-br from-[#2B6F75] to-[#0E2A2A]">
            <img
              src="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?w=400&q=80"
              alt="verified"
              className="w-full h-full object-cover opacity-90"
              style={{ filter: VERIFY_IMAGE_FILTER }}
            />
            <div className="absolute top-1/2 left-0 right-0 -translate-y-1/2 bg-black/70 text-white text-[10px] font-bold tracking-[0.2em] py-1 text-center">
              VERIFIED
            </div>
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ delay: 0.5, type: "spring" }}
              className="absolute bottom-6 left-1/2 -translate-x-1/2 inline-flex items-center gap-1 bg-pw-green text-white text-[10px] font-bold px-3 py-1.5 rounded-full whitespace-nowrap"
            >
              <BadgeCheck size={12} className="fill-white text-pw-green" /> VERIFIED
            </motion.div>
          </div>

          <motion.span
            animate={{ y: [0, -5, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="absolute top-2 right-4 w-9 h-9 rounded-full bg-[#EEEEFF] flex items-center justify-center text-pw-purple"
          >
            <Sparkles size={16} />
          </motion.span>
          <motion.span
            animate={{ y: [0, 5, 0] }}
            transition={{ duration: 2.5, repeat: Infinity }}
            className="absolute bottom-12 left-2 w-7 h-7 rounded-full bg-[#EEEEFF] flex items-center justify-center text-pw-purple"
          >
            <Heart size={12} className="fill-pw-purple" />
          </motion.span>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
        >
          <h1 className="text-[32px] lg:text-[34px] font-bold mt-6 leading-tight text-app-dark">You&apos;re verified</h1>
          <p className="text-[14px] text-app-dark/70 mt-1">No fake vibes here. You&apos;re almost in</p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
          className="mt-5"
        >
          <div className="h-2 bg-[#E5E1F5] rounded-full overflow-hidden">
            <motion.div
              initial={{ width: 0 }}
              animate={{ width: `${progress}%` }}
              transition={{ duration: 0.7, ease: "easeOut" }}
              className="h-full bg-gradient-to-r from-pw-purple-light to-pw-purple-dark"
            />
          </div>
          <div className="text-[10.5px] tracking-[0.18em] uppercase text-app-dark/70 mt-2 font-semibold">
            Identity Match {progress.toFixed(1)}%
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
        >
          <PurpleButton className="w-full mt-6" onClick={() => navigate({ to: "/events" })}>
            Go to Dashboard
          </PurpleButton>
          <p className="text-[12px] text-app-muted mt-3">No fake vibes here. You&apos;re almost in</p>
        </motion.div>
      </motion.div>
    </div>
  );
};
