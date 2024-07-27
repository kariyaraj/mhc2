import exp from "constants";
import {
  Code,
  Facebook,
  Github,
  ImageIcon,
  Instagram,
  LayoutDashboard,
  MessageSquare,
  UserRound,
  Music,
  Settings,
  Twitter,
  VideoIcon,
  AlertTriangle,
  PersonStanding,
  Brain,
  SmilePlus
} from "lucide-react";

export const MAX_FREE_COUNTS = 100 as const;

export const TESTIMONIALS = [
  {
    name: "Raj",
    image: "/testimonials/raj.jpeg",
    title: "Marketing Specialist",
    description:
      "It's almost as if I'm talking to my therapist.At first, I couldn't believe it was a chatbot. It feels like it knows me better than I know myself sometimes.",
  },
  {
    name: "Dhyey",
    image: "/testimonials/dhyey.jpeg",
    title: "Student",
    description:
      "I got my first job during the pandemic and, recently, it was my first time ever going into an office. I had really bad social anxiety, so my therapist recommended I try out Elomia. It helped me to manage my anxious thoughts in real-time, so I didn't have to wait until my next session to discuss them.",
  },
  {
    name: "Srijit",
    image: "/testimonials/aniket.jpeg",
    title: "Entrepreneur",
    description:
      "I had difficulty finding the words to express myself to my boss and I needed quick advice, so I decided to try Elomia. Since then, I have used it for everything. It even helped me gain perspective on my relationship with my fiancé. I am so grateful for this app.",
  },
] as const;

export const TOOLS = [
  {
    label: "General Chat",
    icon: MessageSquare,
    color: "text-violet-500",
    bgColor: "bg-violet-500/10",
    href: "/conversation",
    description:"Demo"
  },
  {
    label: "Crisis Support",
    icon: AlertTriangle,
    color: "text-violet-500",
    bgColor: "bg-violet-500/10",
    href: "/crisis-support",
    description: "Demo"
  },
  {
    label: "Therapist",
    icon: PersonStanding,
    color: "text-violet-500",
    bgColor: "bg-violet-500/10",
    href: "/therapist",
    description: "Demo"
  },
  {
    label: "Mindfulness and Meditation",
  icon: Brain,
  color: "text-violet-500",
  bgColor: "bg-violet-500/10",
  href: "/mindfulness",
  description: "Demo"
  },
  {
    label: "Mood Tracking",
    icon: SmilePlus,
    color: "text-violet-500",
    bgColor: "bg-violet-500/10",
    href: "/mood-tracking",
    description: "Demo"
  },
  // {
  //   label: "Code Generation",
  //   icon: Code,
  //   color: "text-green-700",
  //   bgColor: "bg-green-700/10",
  //   href: "/code",
  //   description:"Demo"
  // },
] as const;

export const ROUTES = [
  {
    label: "Dashboard",
    icon: LayoutDashboard,
    href: "/dashboard",
    color: "text-sky-500",
  },
  {
    label: "Profile",
    icon: UserRound,
    href: "/profile",
    color: "text-sky-500",
  },
  ...TOOLS,
] as const;

export const SETTINGS = [
  {
    label: "Settings",
    icon: Settings,
    href: "/settings",
    color: null,
  }
] as const;

export const FOOTER_LINKS = [
  {
    name: "Facebook",
    icon: Facebook,
    link: "https://facebook.com",
  },
  {
    name: "Twitter",
    icon: Twitter,
    link: "https://twitter.com",
  },
  {
    name: "Instagram",
    icon: Instagram,
    link: "https://instagram.com",
  },
  {
    name: "Github",
    icon: Github,
    link: "https://github.com",
  },
];
