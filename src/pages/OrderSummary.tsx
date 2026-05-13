import { useState } from "react";
import { useNavigate, Link } from "@tanstack/react-router";
import { motion } from "framer-motion";
import {
  ArrowLeft,
  Star,
  BadgeCheck,
  MapPin,
  ShieldCheck,
  MoreHorizontal,
} from "lucide-react";
import { Logo } from "@/components/ui/Logo";
import { PurpleButton } from "@/components/ui/GradientButton";
import { profiles, drinks } from "@/data/mockData";

const ORDER_SUMMARY_PAGE_BG =
  "radial-gradient(circle at top left, var(--color-lavender-200) 0%, transparent 45%), radial-gradient(circle at top right, var(--color-soft-linen-200) 0%, transparent 45%), radial-gradient(circle at bottom left, var(--color-soft-linen-200) 0%, transparent 45%), var(--color-white-smoke-50)";

export const OrderSummaryPage = () => {
  const [agreed, setAgreed] = useState(false);
  const [isProcessing, setIsProcessing] = useState(false);
  const navigate = useNavigate();
  const p = profiles[0];
  const drink = drinks.find((d) => d.id === 4) ?? drinks[3]!;

  const handleConfirm = () => {
    if (!agreed) return;
    setIsProcessing(true);
    setTimeout(() => {
      navigate({ to: "/feed" });
    }, 1500);
  };

  return (
    <div className="min-h-screen relative overflow-hidden" style={{ background: ORDER_SUMMARY_PAGE_BG }}>
      <div className="max-w-[900px] mx-auto p-4 lg:p-6 pb-32">
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          className="flex items-center justify-between"
        >
          <Link
            to="/buy-drinks"
            className="inline-flex items-center gap-2 text-[15px] font-semibold text-carbon-black-900 hover:text-lavender-500 transition-colors"
          >
            <span className="w-8 h-8 bg-white rounded-full shadow-pw flex items-center justify-center">
              <ArrowLeft size={16} />
            </span>
            Back
          </Link>
          <Logo />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="bg-white/70 backdrop-blur-md rounded-[32px] shadow-[0_8px_40px_rgba(0,0,0,0.04)] p-4 lg:p-6 mt-6"
        >
          <div className="bg-white rounded-2xl p-4 shadow-[0_2px_10px_rgba(0,0,0,0.02)] flex flex-col sm:flex-row justify-between gap-4">
            <div className="flex-1">
              <div className="flex items-center gap-2 flex-wrap">
                <h2 className="text-[18px] font-bold text-carbon-black-900">{p.eventName}</h2>
                <Star size={16} className="text-pw-yellow fill-pw-yellow" />
                <span className="text-[14px] font-semibold text-carbon-black-900">{p.rating}</span>
                <span className="text-[12px] underline text-carbon-black-600">
                  Review ({String(p.reviews).padStart(2, "0")})
                </span>
              </div>
              <div className="flex items-center gap-3 mt-3">
                <img src={p.photo} className="w-12 h-12 rounded-full object-cover" alt="" />
                <div>
                  <div className="font-bold flex items-center gap-1 text-carbon-black-900">
                    {p.name}, {p.age} <BadgeCheck size={14} className="text-lavender-500" />
                  </div>
                  <div className="text-[13px] text-carbon-black-700">{p.venue}</div>
                  <div className="text-[12px] text-carbon-black-500 flex items-center gap-1 mt-0.5">
                    <MapPin size={11} /> {p.location} • {p.distance}
                  </div>
                </div>
              </div>
            </div>
            <div className="bg-white-smoke-100 rounded-xl px-4 py-2 text-center h-fit shrink-0">
              <div className="text-[10px] font-semibold text-carbon-black-600">{p.date.split(" ")[0]}</div>
              <div className="text-[20px] font-bold leading-tight text-carbon-black-900">
                {p.date.split(" ")[1]}
              </div>
            </div>
          </div>

          <div className="flex justify-between items-center mt-5 px-1">
            <span className="font-bold text-carbon-black-900">Tickets Price</span>
            <span className="font-bold text-carbon-black-900">₹59.00</span>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="bg-white rounded-2xl p-4 mt-3 shadow-[0_2px_10px_rgba(0,0,0,0.02)] flex gap-3 items-center"
          >
            <div className="w-16 h-16 rounded-full bg-[#1A1A2E] flex items-center justify-center overflow-hidden shrink-0">
              <img src={drink.photo} className="w-full h-full object-cover" alt="" />
            </div>
            <div className="flex-1 min-w-0">
              <div className="font-bold text-carbon-black-900">{drink.name}</div>
              <div className="text-[12px] text-carbon-black-600">{drink.desc}</div>
              <div className="mt-2 inline-block bg-[#E6F8EE] text-[#2E9C5C] text-[11px] font-semibold px-2.5 py-1 rounded-full">
                You only pay for the drink if they accept your invite
              </div>
            </div>
            <div className="font-bold text-carbon-black-900 shrink-0">₹{drink.price}</div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="mt-6 border-t border-dim-grey-200/50 pt-4"
          >
            <div className="font-bold mb-3 text-carbon-black-900">Bill Details</div>
            <div className="space-y-2.5 text-[14px]">
              <div className="flex justify-between text-carbon-black-900">
                <span>Tickets Amount</span>
                <span>₹59</span>
              </div>
              <button
                type="button"
                className="flex justify-between w-full text-lavender-500 underline text-left"
              >
                <span>Platform & Other Charges</span>
                <span>₹5.90</span>
              </button>
              <div className="flex justify-between font-bold pt-1 text-carbon-black-900 text-[15px]">
                <span>Grand Total</span>
                <span>₹64.90</span>
              </div>
            </div>
          </motion.div>

          <motion.label
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
            className="flex items-start gap-2 mt-5 text-[13px] cursor-pointer"
          >
            <input
              type="checkbox"
              checked={agreed}
              onChange={(e) => setAgreed(e.target.checked)}
              className="w-4 h-4 accent-lavender-500 mt-0.5 shrink-0 rounded border-dim-grey-300"
            />
            <span className="text-carbon-black-900">
              I agree to the{" "}
              <span className="text-lavender-500 cursor-pointer hover:underline">Terms of Service</span> and{" "}
              <span className="text-lavender-500 cursor-pointer hover:underline">Privacy Policy</span>.
            </span>
          </motion.label>
        </motion.div>
      </div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.5 }}
        className="fixed bottom-6 inset-x-0 flex justify-center px-4 z-40"
      >
        <div className="bg-white rounded-full shadow-pw-lg flex items-center gap-2 p-1.5 pl-4">
          <ShieldCheck size={20} className="text-lavender-600" />
          <button
            type="button"
            className="w-9 h-9 rounded-full bg-lavender-500 text-white flex items-center justify-center hover:bg-lavender-600 transition-colors"
          >
            <MoreHorizontal size={16} />
          </button>
          <PurpleButton
            onClick={handleConfirm}
            isLoading={isProcessing}
            disabled={!agreed}
            className="!py-3 !px-6 lg:!px-7 !bg-lavender-500 hover:!bg-lavender-600 !shadow-none"
          >
            Make The Move Now
          </PurpleButton>
        </div>
      </motion.div>
    </div>
  );
};
