import { motion } from "framer-motion";
import { cn } from "@/utils";
import type { Drink } from "@/types";

interface DrinkCardProps {
  drink: Drink;
  selected: boolean;
  onSelect: () => void;
  index?: number;
}

export const DrinkCard = ({ drink, selected, onSelect, index = 0 }: DrinkCardProps) => (
    <motion.button
      type="button"
      onClick={onSelect}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.05 }}
      whileHover={{ y: -2 }}
      whileTap={{ scale: 0.98 }}
      className={cn(
        "relative w-full text-left bg-white rounded-2xl p-3 flex gap-3 transition-all duration-200",
        selected
          ? "ring-2 ring-pw-pink shadow-[0_0_0_4px_rgba(255,60,172,0.12)]"
          : "ring-1 ring-black/5 hover:ring-pw-pink/30 shadow-pw hover:shadow-pw-md"
      )}
    >
      <div className="relative shrink-0">
        <img
          src={drink.photo}
          alt={drink.name}
          className="w-[88px] h-[88px] rounded-xl object-cover"
          loading="lazy"
        />
        {selected && (
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            className="absolute -top-1.5 -right-1.5 w-5 h-5 bg-pw-pink rounded-full flex items-center justify-center"
          >
            <svg width="10" height="8" viewBox="0 0 10 8" fill="none">
              <path
                d="M1 4L3.5 6.5L9 1"
                stroke="white"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </motion.div>
        )}
      </div>

      <div className="flex-1 min-w-0 pr-14">
        <div className="font-bold text-[15px] leading-tight text-app-dark">
          {drink.name}
        </div>
        <div className="text-[12px] text-app-muted mt-0.5">{drink.desc}</div>
        <div className="mt-2">
          <span
            className={cn(
              "inline-block text-[9px] font-bold tracking-wider uppercase px-2 py-1 rounded-full",
              drink.badgeColor === "green"
                ? "bg-pw-green-light text-pw-green-text"
                : "bg-pink-50 text-pink-600"
            )}
          >
            {drink.badge}
          </span>
        </div>
      </div>

      <span className="absolute top-3 right-3 bg-pw-gradient text-white text-[11px] font-bold px-2.5 py-1 rounded-bl-xl rounded-tr-xl">
        ₹{drink.price}
      </span>
    </motion.button>
);
