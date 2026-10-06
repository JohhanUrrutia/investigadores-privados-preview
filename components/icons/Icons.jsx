const base = {
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 1.5,
  strokeLinecap: "round",
  strokeLinejoin: "round",
};

export function PhoneIcon(props) {
  return (
    <svg {...base} {...props}>
      <path d="M5.5 3.5h3L10 8l-2 1.5a11 11 0 0 0 6.5 6.5L16 14l4.5 1.5v3c0 1.1-.9 2-2 2C10.8 20.5 3.5 13.2 3.5 5.5c0-1.1.9-2 2-2Z" />
    </svg>
  );
}

export function LinkedInIcon(props) {
  return (
    <svg {...base} {...props}>
      <rect x="3.5" y="3.5" width="17" height="17" rx="2" />
      <line x1="7.5" y1="10.5" x2="7.5" y2="16.5" />
      <circle cx="7.5" cy="7.2" r="0.4" fill="currentColor" />
      <path d="M11.5 16.5v-4c0-1.4 1-2.3 2.3-2.3 1.3 0 2.2.9 2.2 2.3v4" />
      <line x1="11.5" y1="10.5" x2="11.5" y2="16.5" />
    </svg>
  );
}

export function LocationIcon(props) {
  return (
    <svg {...base} {...props}>
      <path d="M12 21s7-6.5 7-11.5A7 7 0 0 0 5 9.5C5 14.5 12 21 12 21Z" />
      <circle cx="12" cy="9.5" r="2.3" />
    </svg>
  );
}

export function MenuIcon(props) {
  return (
    <svg {...base} {...props}>
      <line x1="3.5" y1="6.5" x2="20.5" y2="6.5" />
      <line x1="3.5" y1="12" x2="20.5" y2="12" />
      <line x1="3.5" y1="17.5" x2="20.5" y2="17.5" />
    </svg>
  );
}

export function CloseIcon(props) {
  return (
    <svg {...base} {...props}>
      <line x1="5" y1="5" x2="19" y2="19" />
      <line x1="19" y1="5" x2="5" y2="19" />
    </svg>
  );
}

export function ArrowIcon(props) {
  return (
    <svg {...base} {...props}>
      <line x1="6" y1="18" x2="18" y2="6" />
      <polyline points="8 6 18 6 18 16" />
    </svg>
  );
}

export function SurveillanceIcon(props) {
  return (
    <svg {...base} {...props}>
      <path d="M2.5 12S6 5.5 12 5.5 21.5 12 21.5 12 18 18.5 12 18.5 2.5 12 2.5 12Z" />
      <circle cx="12" cy="12" r="3" />
    </svg>
  );
}

export function VehicleIcon(props) {
  return (
    <svg {...base} {...props}>
      <path d="M3.5 15.5v-3l2-4.5a2 2 0 0 1 1.8-1.2h9.4a2 2 0 0 1 1.8 1.2l2 4.5v3" />
      <path d="M3.5 15.5h17v2.2a1 1 0 0 1-1 1h-1.2a1 1 0 0 1-1-1v-1.2h-10.6v1.2a1 1 0 0 1-1 1H4.5a1 1 0 0 1-1-1v-2.2Z" />
      <line x1="3.5" y1="11.5" x2="20.5" y2="11.5" />
      <circle cx="7.5" cy="15.3" r="0.4" fill="currentColor" />
      <circle cx="16.5" cy="15.3" r="0.4" fill="currentColor" />
    </svg>
  );
}

export function CameraIcon(props) {
  return (
    <svg {...base} {...props}>
      <path d="M3.5 8.5a1 1 0 0 1 1-1h2.2l1-1.6h8.6l1 1.6h2.2a1 1 0 0 1 1 1v9a1 1 0 0 1-1 1h-15a1 1 0 0 1-1-1v-9Z" />
      <circle cx="12" cy="13" r="3.3" />
    </svg>
  );
}

export function FamilyIcon(props) {
  return (
    <svg {...base} {...props}>
      <circle cx="8.5" cy="8" r="2.4" />
      <circle cx="16" cy="8" r="2.4" />
      <path d="M3.5 19v-1.5A3.5 3.5 0 0 1 7 14h3a3.5 3.5 0 0 1 3.5 3.5V19" />
      <path d="M13.5 14.3A3.5 3.5 0 0 1 17 14h0a3.5 3.5 0 0 1 3.5 3.5V19" />
    </svg>
  );
}

export function JudicialIcon(props) {
  return (
    <svg {...base} {...props}>
      <line x1="12" y1="4" x2="12" y2="19.5" />
      <line x1="6" y1="19.5" x2="18" y2="19.5" />
      <line x1="4" y1="7" x2="20" y2="4.5" />
      <path d="M4 7 1.5 11.5a2.7 2.7 0 0 0 5 0L4 7Z" />
      <path d="M20 4.5 17.5 9.5a2.7 2.7 0 0 0 5 0L20 4.5Z" />
    </svg>
  );
}

export function NetworkIcon(props) {
  return (
    <svg {...base} {...props}>
      <circle cx="5.5" cy="6.5" r="2" />
      <circle cx="18.5" cy="6.5" r="2" />
      <circle cx="12" cy="17.5" r="2" />
      <line x1="7.2" y1="7.6" x2="10.4" y2="16" />
      <line x1="16.8" y1="7.6" x2="13.6" y2="16" />
      <line x1="7.5" y1="6.5" x2="16.5" y2="6.5" />
    </svg>
  );
}

export function DnaIcon(props) {
  return (
    <svg {...base} {...props}>
      <path d="M7 3.5c0 5 10 5 10 8.5s-10 3.5-10 8.5" />
      <path d="M17 3.5c0 5-10 5-10 8.5s10 3.5 10 8.5" />
      <line x1="8" y1="7" x2="16" y2="7" />
      <line x1="8" y1="17" x2="16" y2="17" />
    </svg>
  );
}

export function SealIcon(props) {
  return (
    <svg {...base} {...props}>
      <circle cx="10.5" cy="10.5" r="6.5" />
      <path d="M8 10.5l1.8 1.8 3.4-3.9" />
      <line x1="15.2" y1="15.2" x2="20.5" y2="20.5" />
    </svg>
  );
}

export function LinkIcon(props) {
  return (
    <svg {...base} {...props}>
      <circle cx="10" cy="10" r="6" />
      <path d="M7.5 10a2.7 2.7 0 0 1 2.7-2.7 2.7 2.7 0 0 1 2.7 2.7 2.7 2.7 0 0 1-2.7 2.7" />
      <line x1="14.5" y1="14.5" x2="20.5" y2="20.5" />
    </svg>
  );
}

export function ShieldIcon(props) {
  return (
    <svg {...base} {...props}>
      <path d="M12 3.5 19.5 6.5v5.3c0 5-3.2 8.1-7.5 9.7-4.3-1.6-7.5-4.7-7.5-9.7V6.5L12 3.5Z" />
      <path d="M9.2 12l1.9 1.9 3.7-4" />
    </svg>
  );
}

export function SearchDocIcon(props) {
  return (
    <svg {...base} {...props}>
      <path d="M13.5 20.5H6a1.5 1.5 0 0 1-1.5-1.5V5A1.5 1.5 0 0 1 6 3.5h7.5l4 4V10" />
      <path d="M13.5 3.5v4h4" />
      <line x1="7.5" y1="10" x2="12" y2="10" />
      <line x1="7.5" y1="13.5" x2="10.5" y2="13.5" />
      <circle cx="16" cy="16" r="3" />
      <line x1="18.2" y1="18.2" x2="20.5" y2="20.5" />
    </svg>
  );
}

export function HeartIcon(props) {
  return (
    <svg {...base} {...props}>
      <path d="M12 19.5s-7.5-4.4-7.5-10A4.2 4.2 0 0 1 12 7a4.2 4.2 0 0 1 7.5 2.5c0 5.6-7.5 10-7.5 10Z" />
      <path d="M12 7l-1.2 3.2 2.4 1.6-1.2 3.2" />
    </svg>
  );
}

export function HomeMailIcon(props) {
  return (
    <svg {...base} {...props}>
      <path d="M3.5 11 12 4l8.5 7" />
      <path d="M5.5 9.5v10h13v-10" />
      <rect x="8.5" y="12.5" width="7" height="5" rx="0.5" />
      <path d="M8.5 13l3.5 2.5 3.5-2.5" />
    </svg>
  );
}

export function AlertIcon(props) {
  return (
    <svg {...base} {...props}>
      <path d="M12 3.5 21 19.5H3L12 3.5Z" />
      <line x1="12" y1="10" x2="12" y2="14" />
      <circle cx="12" cy="16.8" r="0.4" fill="currentColor" />
    </svg>
  );
}

export function CalendarIcon(props) {
  return (
    <svg {...base} {...props}>
      <rect x="3.5" y="5" width="17" height="15.5" rx="1.5" />
      <line x1="3.5" y1="9.5" x2="20.5" y2="9.5" />
      <line x1="8" y1="3" x2="8" y2="6.5" />
      <line x1="16" y1="3" x2="16" y2="6.5" />
      <line x1="9.5" y1="13" x2="14.5" y2="18" />
      <line x1="14.5" y1="13" x2="9.5" y2="18" />
    </svg>
  );
}

export function BriefcaseIcon(props) {
  return (
    <svg {...base} {...props}>
      <rect x="3.5" y="7.5" width="17" height="12" rx="1.5" />
      <path d="M9 7.5V5.5a1 1 0 0 1 1-1h4a1 1 0 0 1 1 1v2" />
      <line x1="3.5" y1="12.5" x2="20.5" y2="12.5" />
      <line x1="12" y1="11.5" x2="12" y2="13.5" />
    </svg>
  );
}

export function ClipboardCheckIcon(props) {
  return (
    <svg {...base} {...props}>
      <rect x="5" y="4.5" width="14" height="16" rx="1.5" />
      <rect x="9" y="3" width="6" height="3" rx="0.8" />
      <path d="M8.8 13l2.2 2.2 4.2-4.7" />
    </svg>
  );
}

export function ScrollIcon(props) {
  return (
    <svg {...base} {...props}>
      <path d="M7 3.5h11.5v14a3 3 0 0 1-3 3H7" />
      <path d="M7 3.5a2.5 2.5 0 0 0-2.5 2.5v1.5H7" />
      <path d="M7 3.5v14a3 3 0 0 0 3 3" />
      <circle cx="12.8" cy="10.5" r="2.3" />
      <line x1="10.5" y1="16" x2="15.5" y2="16" />
    </svg>
  );
}

export function LockIcon(props) {
  return (
    <svg {...base} {...props}>
      <rect x="5" y="10.5" width="14" height="10" rx="1.5" />
      <path d="M8 10.5V7.5a4 4 0 0 1 8 0v3" />
      <line x1="12" y1="14.5" x2="12" y2="16.5" />
    </svg>
  );
}

export function GlobeIcon(props) {
  return (
    <svg {...base} {...props}>
      <circle cx="12" cy="12" r="8.5" />
      <line x1="3.5" y1="12" x2="20.5" y2="12" />
      <path d="M12 3.5c2.3 2.4 3.5 5.2 3.5 8.5s-1.2 6.1-3.5 8.5c-2.3-2.4-3.5-5.2-3.5-8.5S9.7 5.9 12 3.5Z" />
    </svg>
  );
}
