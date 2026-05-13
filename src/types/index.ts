import type { ComponentType } from "react";

export interface Profile {
  id: number;
  name: string;
  age: number;
  verified: boolean;
  mutualMates: number;
  tags: string[];
  vibe: string;
  photo: string;
  venue: string;
  location: string;
  distance: string;
  date: string;
  eventName: string;
  rating: number;
  reviews: number;
  venueBadge: string;
  time: string;
  bio: string;
}

export interface Drink {
  id: number;
  name: string;
  desc: string;
  price: number;
  badge: string;
  badgeColor: "green" | "pink";
  photo: string;
  category: string;
}

export interface Gesture {
  id: number;
  name: string;
  emoji: string;
  price: number;
  description: string;
}

export interface EventItem {
  id: number;
  name: string;
  venue: string;
  day: string;
  time: string;
  rating: number;
  locationName: string;
  address: string;
  distance: string;
  discount: string;
  type: string;
  photo: string;
  socialProof: string;
  circleAvatars: string[];
  circleCount: number;
  price: number;
  tags: string[];
  isLive: boolean;
}

export interface User {
  id: number;
  name: string;
  photo: string;
  verified: boolean;
  company: string;
  role: string;
}

export interface Notification {
  id: number;
  type: "invite" | "accept" | "message" | "system";
  title: string;
  message: string;
  time: string;
  read: boolean;
  avatar?: string;
}

export interface HowItWorksItem {
  title: string;
  desc: string;
  img: string;
}

export type NavItem = {
  label: string;
  to: string;
  icon: ComponentType<{
    size?: number;
    className?: string;
    strokeWidth?: number;
  }>;
};

export type ToastType = "success" | "error" | "info";

export interface Toast {
  id: string;
  message: string;
  type: ToastType;
}
