import { useNavigate } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { Search, Mic, BadgeCheck } from "lucide-react";
import { DesktopLayout } from "@/components/layout/DesktopLayout";
import { EventCard } from "@/components/cards/EventCard";
import { events, profiles } from "@/data/mockData";

export const EventsPage = () => {
  const navigate = useNavigate();
  const profile = profiles[0];

  return (
    <DesktopLayout>
      <div className="p-4 lg:p-6 max-w-[1380px] mx-auto pb-24 lg:pb-12 animate-fade-up">
        <div className="text-[13px] text-app-muted mb-4 hidden lg:block">
          Home / Party Package /{" "}
          <span className="text-app-dark font-semibold">Selected item</span>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          className="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-4 mb-6"
        >
          <div className="flex-1 bg-white/70 backdrop-blur rounded-2xl shadow-pw p-4 w-full lg:w-auto">
            <h2 className="text-[16px] font-bold text-app-dark">Pick a plan you&apos;d both enjoy</h2>
            <div className="flex items-center gap-2 mt-2">
              <img
                src={profile.photo}
                className="w-8 h-8 rounded-full object-cover"
                alt=""
              />
              <span className="text-[14px] font-semibold text-app-dark">
                {profile.name}, {profile.age}
              </span>
              <BadgeCheck size={14} className="text-pw-purple" />
            </div>
          </div>

          <div className="flex items-center gap-3 bg-white/70 backdrop-blur rounded-full shadow-pw p-2 pr-4 w-full lg:w-auto">
            <div className="p-[2px] rounded-full bg-pw-gradient">
              <img
                src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=120&q=80"
                className="w-10 h-10 rounded-full object-cover border-2 border-white"
                alt=""
              />
            </div>
            <div className="leading-tight">
              <div className="text-[13px] font-bold text-app-dark">Alen Markram</div>
              <button
                type="button"
                className="bg-pw-gradient text-white text-[10px] font-bold px-2.5 py-0.5 rounded-full mt-0.5"
              >
                Get Verified
              </button>
            </div>
          </div>
        </motion.div>

        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between mb-4 gap-3">
          <motion.h1
            initial={{ opacity: 0, x: -10 }}
            animate={{ opacity: 1, x: 0 }}
            className="text-[22px] font-bold text-app-dark"
          >
            Tonight near you
          </motion.h1>
          <motion.div
            initial={{ opacity: 0, x: 10 }}
            animate={{ opacity: 1, x: 0 }}
            className="flex items-center gap-2 bg-white rounded-full shadow-pw px-4 py-2.5 w-full sm:w-[280px]"
          >
            <Search size={14} className="text-app-muted" />
            <input
              placeholder="Search events..."
              className="flex-1 bg-transparent text-[13px] outline-none text-app-dark placeholder:text-app-muted"
            />
            <Mic size={14} className="text-app-muted" />
          </motion.div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-5">
          {events.map((ev, i) => (
            <EventCard
              key={ev.id}
              event={ev}
              onClick={() => navigate({ to: "/buy-drinks" })}
              index={i}
            />
          ))}
        </div>
      </div>
    </DesktopLayout>
  );
};
