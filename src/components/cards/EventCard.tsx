import { motion } from "framer-motion";
import { MapPin, Star, ChevronDown } from "lucide-react";
import type { EventItem } from "@/types";

interface EventCardProps {
  event: EventItem;
  onClick: () => void;
  index?: number;
}

export const EventCard = ({ event, onClick, index = 0 }: EventCardProps) => {
  return (
    <motion.button
      type="button"
      onClick={onClick}
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.1, duration: 0.4 }}
      whileHover={{ y: -4 }}
      className="text-left bg-white rounded-3xl overflow-hidden shadow-pw hover:shadow-pw-lg transition-all duration-300 group"
    >
      {/* Image Section */}
      <div className="relative aspect-[4/3] overflow-hidden">
        <img
          src={event.photo}
          alt={event.name}
          className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
          loading="lazy"
        />

        {/* Badges */}
        <div className="absolute top-3 left-3 flex gap-2">
          {event.isLive && (
            <span className="text-[10px] font-bold uppercase tracking-wider text-pw-green bg-black/40 backdrop-blur-md px-2.5 py-1 rounded-full flex items-center gap-1">
              <span className="w-1.5 h-1.5 bg-pw-green rounded-full animate-pulse" />
              Happening Now
            </span>
          )}
        </div>

        <span className="absolute top-3 right-3 text-[11px] font-semibold text-white bg-black/40 backdrop-blur-md px-2.5 py-1 rounded-full">
          Vibe Matches
        </span>

        {/* Bottom Gradient */}
        <div className="absolute inset-x-0 bottom-0 h-3/4 bg-gradient-to-t from-black/85 via-black/40 to-transparent" />

        {/* Event Info Overlay */}
        <div className="absolute bottom-3 left-3 right-3 text-white">
          <div className="text-[10px] font-semibold tracking-wider opacity-80 uppercase">
            {event.venue}
          </div>
          <div className="flex items-end justify-between mt-1">
            <h3 className="text-[20px] font-bold leading-tight">{event.name}</h3>
            <div className="text-right shrink-0">
              <div className="text-[11px] opacity-80">{event.day}</div>
              <div className="text-[11px] opacity-80">{event.time}</div>
            </div>
          </div>
          <div className="flex items-center gap-1 mt-1.5 text-[12px]">
            <Star size={11} className="text-pw-yellow fill-pw-yellow" />
            <span className="font-semibold">{event.rating}</span>
          </div>
        </div>

        {/* Social Proof Pill */}
        <motion.div
          className="absolute -bottom-3 left-1/2 -translate-x-1/2 bg-pw-gradient text-white text-[11px] font-semibold px-3 py-1.5 rounded-full shadow-pw-pink whitespace-nowrap flex items-center gap-1.5 z-10"
          whileHover={{ scale: 1.05 }}
        >
          <img
            src={event.circleAvatars[0]}
            className="w-4 h-4 rounded-full object-cover border border-white/50"
            alt=""
          />
          {event.socialProof}
        </motion.div>
      </div>

      {/* Details Section */}
      <div className="p-4 pt-6">
        <div className="flex items-start justify-between gap-2">
          <div className="min-w-0 flex-1">
            <div className="font-bold text-[14px] flex items-center gap-1.5 text-app-dark">
              <MapPin size={12} className="text-pw-purple shrink-0" />
              <span className="truncate">{event.locationName}</span>
            </div>
            <div className="text-[11.5px] text-app-muted mt-0.5 ml-5">
              {event.address} • {event.distance}
            </div>
          </div>
          <ChevronDown
            size={16}
            className="text-app-muted mt-1 shrink-0 rotate-[-90deg] group-hover:rotate-0 transition-transform duration-300"
          />
        </div>

        <div className="flex items-center justify-between mt-3">
          <div className="flex items-center">
            <div className="flex -space-x-2">
              {event.circleAvatars.map((src, i) => (
                <img
                  key={`${event.id}-avatar-${i}-${src}`}
                  src={src}
                  className="w-7 h-7 rounded-full border-2 border-white object-cover"
                  alt=""
                  loading="lazy"
                />
              ))}
              <span className="w-7 h-7 rounded-full bg-app-dark text-white text-[10px] font-bold flex items-center justify-center border-2 border-white">
                {event.circleCount}+
              </span>
            </div>
            <span className="text-[11px] text-app-muted ml-2">Your Circle</span>
          </div>
          <div className="flex items-center gap-2 text-[12px]">
            <span className="text-pw-green font-bold">{event.discount}</span>
            <span className="text-app-muted">{event.type}</span>
          </div>
        </div>

        {/* Tags */}
        {event.tags && (
          <div className="flex gap-1.5 mt-3">
            {event.tags.map((tag) => (
              <span
                key={tag}
                className="text-[10px] bg-app-bg text-app-muted px-2 py-0.5 rounded-full font-medium"
              >
                {tag}
              </span>
            ))}
          </div>
        )}
      </div>
    </motion.button>
  );
}
