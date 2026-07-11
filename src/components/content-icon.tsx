import {
  Award,
  BadgeCheck,
  CalendarClock,
  CalendarHeart,
  Eraser,
  Footprints,
  Gem,
  Hand,
  HeartHandshake,
  Home,
  Layers,
  Palette,
  ShieldCheck,
  Smile,
  Sparkle,
  Sparkles,
  Star,
  Timer,
  Wrench,
  type LucideIcon,
} from "lucide-react";

const icons: Record<string, LucideIcon> = {
  award: Award,
  "badge-check": BadgeCheck,
  "calendar-clock": CalendarClock,
  "calendar-heart": CalendarHeart,
  eraser: Eraser,
  footprints: Footprints,
  gem: Gem,
  hand: Hand,
  "heart-handshake": HeartHandshake,
  home: Home,
  layers: Layers,
  palette: Palette,
  "shield-check": ShieldCheck,
  smile: Smile,
  sparkle: Sparkle,
  sparkles: Sparkles,
  star: Star,
  timer: Timer,
  wrench: Wrench,
};

export function ContentIcon({
  name,
  className,
}: {
  name?: string;
  className?: string;
}) {
  const Icon = (name && icons[name]) || Sparkles;
  return <Icon className={className} aria-hidden />;
}
