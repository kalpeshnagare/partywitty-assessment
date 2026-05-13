import { motion } from "framer-motion";
import type { Gesture } from "@/types";

interface GestureCardProps {
  gesture: Gesture;
  selected?: boolean;
  onSelect?: () => void;
  index?: number;
}

export const GestureCard = ({
  gesture,
  selected,
  onSelect,
  index = 0,
}: GestureCardProps) => (
    <motion.button
      type="button"
      onClick={onSelect}
      initial={{ opacity: 0, y: 15 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.3 + index * 0.05 }}
      whileHover={{ y: -2, scale: 1.02 }}
      whileTap={{ scale: 0.95 }}
      className={
        selected
          ? "bg-pw-purple/10 ring-2 ring-pw-purple rounded-2xl shadow-pw p-4 text-center transition-all"
          : "bg-white rounded-2xl shadow-pw p-4 text-center hover:shadow-pw-md transition-all"
      }
    >
      <div className="text-3xl mb-1">{gesture.emoji}</div>
      <div className="font-semibold text-[13px] text-app-dark">
        {gesture.name}
      </div>
      <div className="text-[11px] text-app-muted mt-0.5 font-medium">
        {gesture.price === 0 ? "FREE" : `₹${gesture.price}`}
      </div>
    </motion.button>
);
