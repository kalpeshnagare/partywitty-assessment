import { useNavigate } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { Check, ShieldCheck, UserCircle2 } from "lucide-react";
import { GradientButton } from "@/components/ui/GradientButton";

const benefits = [
  "Builds trust instantly",
  "Better chances she accepts",
  "Unlocks special invites",
];

export const VerifyPromptPage = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-app-bg flex items-center justify-center p-4">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ type: "spring", stiffness: 300, damping: 30 }}
        className="w-full max-w-[420px] text-center"
      >
        <motion.div
          initial={{ scale: 0.8 }}
          animate={{ scale: 1 }}
          transition={{ delay: 0.1, type: "spring" }}
          className="mx-auto rounded-3xl border-2 border-dashed border-[#C4BFD9] p-6 w-fit relative"
        >
          <div className="w-32 h-36 rounded-[40%] bg-app-bg border-2 border-app-dark/70 flex items-center justify-center">
            <UserCircle2 size={56} className="text-app-dark/70" strokeWidth={1.4} />
          </div>
          <span className="absolute -top-2 -right-2 w-7 h-7 bg-[#C4BFD9] rounded-full flex items-center justify-center text-app-dark">
            <ShieldCheck size={14} />
          </span>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
        >
          <h1 className="text-[24px] font-bold mt-6 text-app-dark">You&apos;re one step away</h1>
          <p className="text-[14px] text-app-dark/70 mt-2 leading-relaxed">
            Verify your profile to send this invite and connect with people around you.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="flex flex-wrap justify-center gap-3 mt-5"
        >
          {benefits.map((b, i) => (
            <motion.div
              key={b}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.35 + i * 0.05 }}
              className="inline-flex items-center gap-1.5 text-[12px] text-app-dark"
            >
              <span className="w-4 h-4 bg-pw-green-light rounded-full flex items-center justify-center">
                <Check size={10} className="text-pw-green-text" strokeWidth={3} />
              </span>
              {b}
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
        >
          <GradientButton className="w-full mt-6" onClick={() => navigate({ to: "/verify-face" })}>
            Verify & Send Invite
          </GradientButton>
          <p className="text-[10.5px] tracking-[0.15em] uppercase text-app-muted mt-3 font-semibold">
            Takes less than 30 seconds
          </p>
        </motion.div>
      </motion.div>
    </div>
  );
};
