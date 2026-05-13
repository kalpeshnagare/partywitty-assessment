import { useNavigate } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { ShieldCheck, SwitchCamera, Sun, Circle } from "lucide-react";

const VERIFY_IMAGE_FILTER = "hue-rotate(140deg) saturate(1.2)";

export const VerifyFacePage = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-[#0B1014] flex items-center justify-center p-4">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className="w-full max-w-[420px] relative"
      >
        <motion.div
          initial={{ scale: 0.95 }}
          animate={{ scale: 1 }}
          transition={{ type: "spring", stiffness: 200 }}
          className="relative rounded-[40%/30%] aspect-square overflow-hidden mx-auto bg-[#0E2A2A]"
        >
          <img
            src="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?w=900&q=80"
            className="w-full h-full object-cover opacity-90"
            alt="face scan"
            style={{ filter: VERIFY_IMAGE_FILTER }}
          />

          <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
              className="w-[58%] aspect-[3/4] rounded-[50%/55%] border-2 border-white/80 shadow-[0_0_60px_rgba(120,255,220,0.35)] relative"
            >
              <span className="absolute -top-2 left-1/2 -translate-x-1/2 w-8 h-1.5 rounded-full bg-white" />
              <span className="absolute -bottom-2 left-1/2 -translate-x-1/2 w-8 h-1.5 rounded-full bg-white" />
              <div className="absolute inset-0 flex items-center justify-center">
                <span className="bg-black/45 backdrop-blur-md text-white text-[13px] font-semibold px-4 py-1.5 rounded-full">
                  Look straight
                </span>
              </div>
            </motion.div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="text-center mt-6 text-white"
        >
          <h2 className="text-[18px] font-bold">Keep your face within the frame</h2>
          <p className="text-[13px] text-white/60 mt-1">Center your face and wait for the scan to start</p>
          <div className="inline-flex items-center gap-1.5 mt-4 bg-white/10 backdrop-blur px-3 py-1.5 rounded-full text-[12px]">
            <ShieldCheck size={12} /> Used only for verification
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="flex items-center justify-center gap-8 mt-6"
        >
          <motion.button
            type="button"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            className="w-11 h-11 rounded-full bg-white/10 text-white flex items-center justify-center hover:bg-white/20 transition-colors"
          >
            <SwitchCamera size={18} />
          </motion.button>

          <motion.button
            type="button"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => navigate({ to: "/verified" })}
            className="w-16 h-16 rounded-full border-4 border-white flex items-center justify-center hover:border-pw-purple transition-colors"
          >
            <Circle size={44} className="fill-white text-white" />
          </motion.button>

          <motion.button
            type="button"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            className="w-11 h-11 rounded-full bg-white/10 text-white flex items-center justify-center hover:bg-white/20 transition-colors"
          >
            <Sun size={18} />
          </motion.button>
        </motion.div>
      </motion.div>
    </div>
  );
};
