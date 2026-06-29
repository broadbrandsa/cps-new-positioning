import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement>;

export const ArrowRight = (props: IconProps) => (
  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} {...props}>
    <path d="M5 12h14M13 5l7 7-7 7" />
  </svg>
);

export const Check = (props: IconProps) => (
  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={3} {...props}>
    <polyline points="20 6 9 17 4 12" />
  </svg>
);

export const Mail = (props: IconProps) => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} {...props}>
    <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
    <polyline points="22,6 12,13 2,6" />
  </svg>
);

export const Phone = (props: IconProps) => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} {...props}>
    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
  </svg>
);

export const User = (props: IconProps) => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} {...props}>
    <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" />
    <circle cx="12" cy="7" r="4" />
  </svg>
);

export const Building = (props: IconProps) => (
  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.8} {...props}>
    <path d="M3 21h18M5 21V7l7-4 7 4v14M9 9h.01M9 13h.01M9 17h.01M14 9h.01M14 13h.01M14 17h.01" />
  </svg>
);

export const ClipboardCheck = (props: IconProps) => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.8} {...props}>
    <path d="M9 11l3 3L22 4M21 12v7a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11" />
  </svg>
);

export const Clock = (props: IconProps) => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.8} {...props}>
    <circle cx="12" cy="12" r="10" />
    <path d="M12 6v6l4 2" />
  </svg>
);

export const TrendingUp = (props: IconProps) => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.8} {...props}>
    <path d="M3 3v18h18" />
    <path d="M7 14l4-4 4 4 5-5" />
  </svg>
);

export const Globe = (props: IconProps) => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.8} {...props}>
    <circle cx="12" cy="12" r="10" />
    <path d="M2 12h20M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
  </svg>
);

export const ShieldCheck = (props: IconProps) => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.8} {...props}>
    <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
    <polyline points="22 4 12 14.01 9 11.01" />
  </svg>
);

export const Layers = (props: IconProps) => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.8} {...props}>
    <path d="M12 2L2 7l10 5 10-5-10-5z" />
    <path d="M2 17l10 5 10-5M2 12l10 5 10-5" />
  </svg>
);

export const Settings = (props: IconProps) => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.8} {...props}>
    <circle cx="12" cy="12" r="3" />
    <path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1 0 2.83 2 2 0 0 1-2.83 0l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-2 2 2 2 0 0 1-2-2v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83 0 2 2 0 0 1 0-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1-2-2 2 2 0 0 1 2-2h.09A1.65 1.65 0 0 0 4.6 9 1.65 1.65 0 0 0 4.27 7.18l-.06-.06a2 2 0 0 1 0-2.83 2 2 0 0 1 2.83 0l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 2-2 2 2 0 0 1 2 2v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 0 2 2 0 0 1 0 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 2 2 2 2 0 0 1-2 2h-.09a1.65 1.65 0 0 0-1.51 1z" />
  </svg>
);

export const Burger = (props: IconProps) => (
  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} {...props}>
    <line x1="3" y1="6" x2="21" y2="6" />
    <line x1="3" y1="12" x2="21" y2="12" />
    <line x1="3" y1="18" x2="21" y2="18" />
  </svg>
);

export const Close = (props: IconProps) => (
  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} {...props}>
    <line x1="18" y1="6" x2="6" y2="18" />
    <line x1="6" y1="6" x2="18" y2="18" />
  </svg>
);

export const CheckSmall = (props: IconProps) => (
  <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={3} {...props}>
    <polyline points="20 6 9 17 4 12" />
  </svg>
);

export const ArrowRightSmall = (props: IconProps) => (
  <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} {...props}>
    <path d="M5 12h14M13 5l7 7-7 7" />
  </svg>
);

/* ---------- Extended icon set: varied glyphs for section variation ---------- */

export const Compass = (props: IconProps) => (
  <svg width={20} height={20} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.8} strokeLinecap="round" strokeLinejoin="round" {...props}>
    <circle cx="12" cy="12" r="10" />
    <polygon points="16.24 7.76 14.12 14.12 7.76 16.24 9.88 9.88 16.24 7.76" />
  </svg>
);

export const Target = (props: IconProps) => (
  <svg width={20} height={20} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.8} strokeLinecap="round" strokeLinejoin="round" {...props}>
    <circle cx="12" cy="12" r="10" />
    <circle cx="12" cy="12" r="6" />
    <circle cx="12" cy="12" r="2" />
  </svg>
);

export const Lightbulb = (props: IconProps) => (
  <svg width={20} height={20} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.8} strokeLinecap="round" strokeLinejoin="round" {...props}>
    <path d="M9 18h6M10 22h4" />
    <path d="M12 2a7 7 0 0 0-4 12.74V17h8v-2.26A7 7 0 0 0 12 2z" />
  </svg>
);

export const Trophy = (props: IconProps) => (
  <svg width={20} height={20} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.8} strokeLinecap="round" strokeLinejoin="round" {...props}>
    <path d="M6 9H4.5a2.5 2.5 0 0 1 0-5H6" />
    <path d="M18 9h1.5a2.5 2.5 0 0 0 0-5H18" />
    <path d="M4 22h16" />
    <path d="M10 14.66V17c0 .55-.47 .98-.97 1.21C7.85 18.75 7 20.24 7 22" />
    <path d="M14 14.66V17c0 .55.47 .98.97 1.21C16.15 18.75 17 20.24 17 22" />
    <path d="M18 2H6v7a6 6 0 0 0 12 0V2z" />
  </svg>
);

export const Briefcase = (props: IconProps) => (
  <svg width={20} height={20} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.8} strokeLinecap="round" strokeLinejoin="round" {...props}>
    <rect x="2" y="7" width="20" height="14" rx="2" />
    <path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16" />
  </svg>
);

export const MapPin = (props: IconProps) => (
  <svg width={20} height={20} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.8} strokeLinecap="round" strokeLinejoin="round" {...props}>
    <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0z" />
    <circle cx="12" cy="10" r="3" />
  </svg>
);

export const Users = (props: IconProps) => (
  <svg width={20} height={20} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.8} strokeLinecap="round" strokeLinejoin="round" {...props}>
    <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
    <circle cx="9" cy="7" r="4" />
    <path d="M23 21v-2a4 4 0 0 0-3-3.87M16 3.13a4 4 0 0 1 0 7.75" />
  </svg>
);

export const BarChart3 = (props: IconProps) => (
  <svg width={20} height={20} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.8} strokeLinecap="round" strokeLinejoin="round" {...props}>
    <path d="M3 3v18h18" />
    <path d="M8 17V11M13 17V7M18 17v-4" />
  </svg>
);

export const Workflow = (props: IconProps) => (
  <svg width={20} height={20} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.8} strokeLinecap="round" strokeLinejoin="round" {...props}>
    <rect x="3" y="3" width="8" height="8" rx="2" />
    <rect x="13" y="13" width="8" height="8" rx="2" />
    <path d="M7 11v4a2 2 0 0 0 2 2h4" />
  </svg>
);

export const Sparkle = (props: IconProps) => (
  <svg width={20} height={20} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.8} strokeLinecap="round" strokeLinejoin="round" {...props}>
    <path d="M12 3v3M12 18v3M3 12h3M18 12h3M5.6 5.6l2.1 2.1M16.3 16.3l2.1 2.1M5.6 18.4l2.1-2.1M16.3 7.7l2.1-2.1" />
  </svg>
);

export const Zap = (props: IconProps) => (
  <svg width={20} height={20} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.8} strokeLinecap="round" strokeLinejoin="round" {...props}>
    <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2" />
  </svg>
);

export const BookOpen = (props: IconProps) => (
  <svg width={20} height={20} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.8} strokeLinecap="round" strokeLinejoin="round" {...props}>
    <path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z" />
    <path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z" />
  </svg>
);

export const MessageSquare = (props: IconProps) => (
  <svg width={20} height={20} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.8} strokeLinecap="round" strokeLinejoin="round" {...props}>
    <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
  </svg>
);

export const Calendar = (props: IconProps) => (
  <svg width={20} height={20} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.8} strokeLinecap="round" strokeLinejoin="round" {...props}>
    <rect x="3" y="4" width="18" height="18" rx="2" />
    <path d="M16 2v4M8 2v4M3 10h18" />
  </svg>
);

export const Award = (props: IconProps) => (
  <svg width={20} height={20} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.8} strokeLinecap="round" strokeLinejoin="round" {...props}>
    <circle cx="12" cy="8" r="6" />
    <path d="M15.5 12.5L17 22l-5-3-5 3 1.5-9.5" />
  </svg>
);

export const ArrowRightLong = (props: IconProps) => (
  <svg width={80} height={32} viewBox="0 0 80 32" fill="none" stroke="currentColor" strokeWidth={2.4} strokeLinecap="round" strokeLinejoin="round" {...props}>
    <line x1="0" y1="16" x2="72" y2="16" />
    <polyline points="60 6, 72 16, 60 26" />
  </svg>
);

export const Rocket = (props: IconProps) => (
  <svg width={20} height={20} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.8} strokeLinecap="round" strokeLinejoin="round" {...props}>
    <path d="M4.5 16.5c-1.5 1.26-2 5-2 5s3.74-.5 5-2c.71-.84.7-2.13-.09-2.91a2.18 2.18 0 0 0-2.91-.09z" />
    <path d="M12 15l-3-3a22 22 0 0 1 2-3.95A12.88 12.88 0 0 1 22 2c0 2.72-.78 7.5-6 11a22.35 22.35 0 0 1-4 2z" />
    <path d="M9 12H4s.55-3.03 2-4c1.62-1.08 5 0 5 0" />
    <path d="M12 15v5s3.03-.55 4-2c1.08-1.62 0-5 0-5" />
  </svg>
);

/* ---------- Social ---------- */
export const Facebook = (props: IconProps) => (
  <svg {...props} viewBox="0 0 24 24" fill="currentColor" aria-hidden>
    <path d="M22 12.07C22 6.51 17.52 2 12 2S2 6.51 2 12.07c0 5.02 3.66 9.19 8.44 9.93v-7.02H7.9v-2.91h2.54V9.84c0-2.51 1.49-3.9 3.78-3.9 1.1 0 2.24.2 2.24.2v2.46h-1.26c-1.24 0-1.63.77-1.63 1.56v1.87h2.78l-.44 2.91h-2.34V22c4.78-.74 8.44-4.91 8.44-9.93z" />
  </svg>
);

export const Twitter = (props: IconProps) => (
  <svg {...props} viewBox="0 0 24 24" fill="currentColor" aria-hidden>
    {/* X logo */}
    <path d="M18.244 2H21.5l-7.5 8.57L23 22h-7.094l-5.55-7.26L3.99 22H.733l8.02-9.17L1 2h7.27l5.012 6.63L18.244 2Zm-1.24 18.07h1.799L7.07 3.84H5.14l11.864 16.23Z" />
  </svg>
);

export const LinkedIn = (props: IconProps) => (
  <svg {...props} viewBox="0 0 24 24" fill="currentColor" aria-hidden>
    <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14ZM8.34 18.34v-7.96H5.67v7.96h2.67ZM7 9.27a1.55 1.55 0 1 0 0-3.09 1.55 1.55 0 0 0 0 3.09Zm11.34 9.07v-4.36c0-2.31-1.23-3.39-2.88-3.39-1.33 0-1.92.73-2.26 1.25v-1.07h-2.67c.04.75 0 7.96 0 7.96h2.67v-4.45c0-.24.02-.48.09-.65.19-.48.63-.98 1.36-.98.96 0 1.34.73 1.34 1.8v4.28h2.35Z" />
  </svg>
);

export const YouTube = (props: IconProps) => (
  <svg {...props} viewBox="0 0 24 24" fill="currentColor" aria-hidden>
    <path d="M23.5 6.5a3 3 0 0 0-2.12-2.12C19.5 4 12 4 12 4s-7.5 0-9.38.38A3 3 0 0 0 .5 6.5C.12 8.38.12 12 .12 12s0 3.62.38 5.5A3 3 0 0 0 2.62 19.62C4.5 20 12 20 12 20s7.5 0 9.38-.38a3 3 0 0 0 2.12-2.12C23.88 15.62 23.88 12 23.88 12s0-3.62-.38-5.5Zm-13.88 9V8.5L15.62 12l-6 3.5Z" />
  </svg>
);
