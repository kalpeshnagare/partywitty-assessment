import { useState } from "react";
import { useNavigate, Link } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { MapPin, Clock, BadgeCheck, Pencil, ChevronRight } from "lucide-react";
import { DesktopLayout } from "@/components/layout/DesktopLayout";
import { DrinkCard } from "@/components/cards/DrinkCard";
import { GestureCard } from "@/components/cards/GestureCard";
import { PurpleButton } from "@/components/ui/GradientButton";
import { drinks, gestures, profiles } from "@/data/mockData";
import { cn } from "@/utils";

export const BuyDrinksPage = () => {
  const [selected, setSelected] = useState(1);
  const [selectedGesture, setSelectedGesture] = useState<number | null>(null);
  const [bio, setBio] = useState("Hey, I'm Aman, into good music and chill nights");
  const [isEditing, setIsEditing] = useState(false);
  const navigate = useNavigate();
  const profile = profiles[0];

  return (
    <DesktopLayout>
      <div className="p-4 lg:p-6 max-w-[1380px] mx-auto pb-32 lg:pb-6">
        <div className="text-[13px] text-app-muted mb-4">
          <Link to="/feed" className="hover:text-app-dark transition-colors">
            Home
          </Link>{" "}
          /{" "}
          <Link to="/events" className="hover:text-app-dark transition-colors">
            Party Package
          </Link>{" "}
          / <span className="text-app-dark font-semibold">Selected item</span>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-[340px_1fr] gap-6">
          <div className="space-y-4">
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              className="bg-white rounded-2xl shadow-pw p-4 flex items-center gap-3"
            >
              <div className="p-[2px] rounded-full bg-pw-gradient">
                <img
                  src="https://res.cloudinary.com/debrimebw/image/upload/image-1_ndt9z7"
                  className="w-12 h-12 rounded-full object-cover border-2 border-white"
                  alt=""
                />
              </div>
              <div className="flex-1">
                <div className="font-bold text-app-dark">Kalpesh Nagare</div>
              </div>
              <button
                type="button"
                className="bg-pw-gradient text-white text-[12px] font-bold px-3 py-1.5 rounded-full hover:shadow-pw-pink transition-shadow"
              >
                Get Verified
              </button>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="rounded-2xl overflow-hidden relative aspect-[4/5] shadow-pw"
            >
              <img
                src="https://images.unsplash.com/photo-1519225421980-715cb0215aed?w=600&q=80"
                className="absolute inset-0 w-full h-full object-cover"
                alt=""
              />
              <div className="absolute inset-x-0 bottom-0 h-1/2 bg-gradient-to-t from-black/85 to-transparent" />
              <div className="absolute bottom-3 left-3 right-3 text-white">
                <div className="flex items-center gap-2">
                  <img
                    src={profile.photo}
                    className="w-8 h-8 rounded-full object-cover border border-white/40"
                    alt=""
                  />
                  <div>
                    <div className="text-[13px] font-bold flex items-center gap-1">
                      {profile.name}, {profile.age}
                      <BadgeCheck size={12} className="text-[#3B9EFF] fill-white" />
                    </div>
                    <div className="text-[11px] text-white/80">{profile.venue}</div>
                  </div>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="bg-white rounded-2xl shadow-pw p-4 space-y-2.5 text-[13px]"
            >
              <div className="flex items-center gap-2 text-app-dark">
                <MapPin size={14} className="text-pw-purple shrink-0" />
                Sector 38, Noida at ILLUSION
              </div>
              <div className="flex items-center gap-2 text-app-dark">
                <Clock size={14} className="text-pw-purple shrink-0" />
                Tonight, 10:30 PM -
              </div>
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="bg-white/60 backdrop-blur rounded-3xl shadow-pw p-4 lg:p-6"
          >
            <h1 className="text-[20px] lg:text-[22px] font-bold text-app-dark">
              One Step Before Your First Move
            </h1>
            <p className="text-[13px] text-app-muted mt-1">
              Verify your profile to send invites and offer drinks.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mt-5">
              {drinks.map((d, i) => (
                <DrinkCard
                  key={d.id}
                  drink={d}
                  selected={selected === d.id}
                  onSelect={() => setSelected(d.id)}
                  index={i}
                />
              ))}
            </div>

            <div className="grid grid-cols-3 gap-3 mt-5">
              {gestures.map((g, i) => (
                <GestureCard
                  key={g.id}
                  gesture={g}
                  selected={selectedGesture === g.id}
                  onSelect={() =>
                    setSelectedGesture(selectedGesture === g.id ? null : g.id)
                  }
                  index={i}
                />
              ))}
            </div>

            <div className="mt-5">
              <label className="text-[13px] text-app-muted font-medium">A Little About Me</label>
              <div className="mt-1 relative">
                <textarea
                  value={bio}
                  onChange={(e) => setBio(e.target.value)}
                  onFocus={() => setIsEditing(true)}
                  onBlur={() => setIsEditing(false)}
                  rows={2}
                  className={cn(
                    "w-full bg-white rounded-2xl p-3 pr-10 text-[14px] resize-none border transition-all outline-none",
                    isEditing
                      ? "border-pw-purple/40 ring-2 ring-pw-purple/20"
                      : "border-black/5"
                  )}
                />
                <Pencil size={14} className="absolute right-3 top-3 text-app-muted" />
              </div>
            </div>
          </motion.div>
        </div>

        <div className="fixed bottom-0 left-0 lg:left-[72px] right-0 p-4 lg:p-6 flex justify-center pointer-events-none z-40">
          <PurpleButton
            className="pointer-events-auto px-8 lg:px-12 shadow-pw-lg"
            onClick={() => navigate({ to: "/order-summary" })}
          >
            Make The Move Now
            <ChevronRight size={18} />
          </PurpleButton>
        </div>
      </div>
    </DesktopLayout>
  );
};
