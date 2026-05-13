import { useState } from "react";
import { useNavigate } from "@tanstack/react-router";
import { motion, AnimatePresence } from "framer-motion";
import { Plus, Trash2, Sparkles, Users, Layers } from "lucide-react";
import { GradientButton } from "@/components/ui/GradientButton";

type Slot =
  | { id: string; type: "empty" }
  | { id: string; type: "photo"; src: string }
  | { id: string; type: "hint"; icon: "users" | "layers"; label: string };

const PHOTO_POOL = [
  "https://images.unsplash.com/photo-1517841905240-472988babdf9?w=400&q=80",
  "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400&q=80",
  "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=400&q=80",
] as const;

const initialSlots: Slot[] = [
  { id: "vibe-slot-0", type: "empty" },
  {
    id: "vibe-slot-1",
    type: "photo",
    src: "https://images.unsplash.com/photo-1524504388940-b1c1722653e1?w=400&q=80",
  },
  {
    id: "vibe-slot-2",
    type: "photo",
    src: "https://images.unsplash.com/photo-1531746020798-e6953c6e8e04?w=400&q=80",
  },
  {
    id: "vibe-slot-3",
    type: "photo",
    src: "https://images.unsplash.com/photo-1521252659862-eec69941b071?w=400&q=80",
  },
  { id: "vibe-slot-4", type: "hint", icon: "users", label: "With friends" },
  { id: "vibe-slot-5", type: "hint", icon: "layers", label: "Candid > posed" },
];

const pickRandomPhoto = (): string => {
  const [n] = crypto.getRandomValues(new Uint32Array(1));
  return PHOTO_POOL[n % PHOTO_POOL.length]!;
};

export const ShowVibePage = () => {
  const [slots, setSlots] = useState<Slot[]>(initialSlots);
  const navigate = useNavigate();
  const count = slots.filter((s) => s.type === "photo").length;

  const remove = (id: string) =>
    setSlots((prev) =>
      prev.map((s) => (s.id === id ? { id: s.id, type: "empty" as const } : s))
    );

  const addPhoto = (id: string) => {
    const emptyCount = slots.filter((s) => s.type === "empty").length;
    if (emptyCount <= 0) return;
    setSlots((prev) =>
      prev.map((s) =>
        s.id === id && s.type === "empty" ? { ...s, type: "photo", src: pickRandomPhoto() } : s
      )
    );
  };

  return (
    <div className="min-h-screen bg-app-bg flex items-start justify-center p-4 py-8">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="w-full max-w-[420px]"
      >
        <h1 className="text-[28px] font-bold leading-tight text-app-dark">Show your vibe</h1>
        <p className="text-[14px] text-app-dark/70 mt-1">Add up to 6 photos people will actually vibe with</p>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.1 }}
          className="mt-5 flex items-center gap-3"
        >
          <span className="text-[11px] font-bold tracking-wider text-app-dark">{count}/6 ADDED</span>
          <div className="flex-1 h-1.5 bg-[#D7D2C8] rounded-full overflow-hidden">
            <motion.div
              initial={{ width: 0 }}
              animate={{ width: `${(count / 6) * 100}%` }}
              transition={{ duration: 0.5 }}
              className="h-full bg-app-dark transition-all"
            />
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="mt-4 flex items-center gap-2 bg-[#D7D2C8]/60 rounded-full px-3 py-2.5 text-[13px]"
        >
          <span className="w-7 h-7 bg-[#C4BFD9]/60 rounded-full flex items-center justify-center">
            <Sparkles size={14} />
          </span>
          <span className="font-semibold text-app-dark">Profiles with 4+ photos get 3x more invites</span>
        </motion.div>

        <div className="grid grid-cols-3 gap-3 mt-5">
          <AnimatePresence mode="popLayout">
            {slots.map((s) => (
              <motion.div
                key={s.id}
                layout
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.8 }}
                className="relative aspect-[3/4] rounded-2xl overflow-hidden bg-[#D7D2C8]/70"
              >
                {s.type === "photo" && (
                  <>
                    <img
                      src={s.src}
                      className="absolute inset-0 w-full h-full object-cover"
                      alt=""
                    />
                    <motion.button
                      type="button"
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.9 }}
                      onClick={() => remove(s.id)}
                      className="absolute bottom-2 left-2 w-7 h-7 bg-pw-red text-white rounded-full flex items-center justify-center shadow-md"
                    >
                      <Trash2 size={13} />
                    </motion.button>
                  </>
                )}
                {s.type === "empty" && (
                  <motion.button
                    type="button"
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    onClick={() => addPhoto(s.id)}
                    className="absolute inset-0 flex flex-col items-center justify-center gap-2 text-app-dark/70 hover:text-app-dark transition-colors"
                  >
                    <span className="w-10 h-10 bg-app-dark/80 text-white rounded-full flex items-center justify-center">
                      <Plus size={18} />
                    </span>
                    <span className="text-[12px] font-semibold">+ Add Photo</span>
                  </motion.button>
                )}
                {s.type === "hint" && (
                  <div className="absolute inset-0 flex flex-col items-center justify-center gap-1.5 text-app-dark/70">
                    <span className="w-10 h-10 bg-app-dark/80 text-white rounded-full flex items-center justify-center">
                      {s.icon === "users" ? <Users size={16} /> : <Layers size={16} />}
                    </span>
                    <span className="text-[10px] font-bold tracking-wider">HINT</span>
                    <span className="text-[11px]">{s.label}</span>
                  </div>
                )}
              </motion.div>
            ))}
          </AnimatePresence>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
        >
          <GradientButton className="w-full mt-6" onClick={() => navigate({ to: "/buy-drinks" })}>
            Continue
          </GradientButton>
        </motion.div>
      </motion.div>
    </div>
  );
};
