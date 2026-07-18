import { Link, useRouterState } from "@tanstack/react-router";
import { motion } from "framer-motion";
import {
  LayoutDashboard, Dumbbell, Apple, Activity, Moon, TrendingUp,
  Sparkles, Trophy, Bell, User, Settings, Zap,
} from "lucide-react";

const items = [
  { to: "/", label: "Dashboard", icon: LayoutDashboard },
  { to: "/workout", label: "Workout", icon: Dumbbell },
  { to: "/nutrition", label: "Nutrition", icon: Apple },
  { to: "/activity", label: "Activity", icon: Activity },
  { to: "/sleep", label: "Sleep", icon: Moon },
  { to: "/progress", label: "Progress", icon: TrendingUp },
  { to: "/ai-coach", label: "AI Coach", icon: Sparkles },
  { to: "/achievements", label: "Achievements", icon: Trophy },
  { to: "/notifications", label: "Notifications", icon: Bell },
  { to: "/profile", label: "Profile", icon: User },
  { to: "/settings", label: "Settings", icon: Settings },
];

export function AppSidebar() {
  const pathname = useRouterState({ select: (s) => s.location.pathname });

  return (
    <aside className="hidden lg:flex flex-col fixed top-0 left-0 h-screen w-64 z-30 glass-strong border-r border-border/50 p-4">
      <div className="flex items-center gap-3 px-3 py-4 mb-4">
        <div className="w-10 h-10 rounded-xl gradient-primary grid place-items-center shadow-glow">
          <Zap className="w-5 h-5 text-white" strokeWidth={2.5} />
        </div>
        <div>
          <div className="font-display font-bold text-lg leading-none">Fitness</div>
          <div className="text-xs text-muted-foreground mt-1">Premium tracker</div>
        </div>
      </div>

      <nav className="flex-1 space-y-1 overflow-y-auto">
        {items.map((item) => {
          const active = pathname === item.to;
          const Icon = item.icon;
          return (
            <Link
              key={item.to}
              to={item.to}
              className="relative flex items-center gap-3 px-3 py-2.5 rounded-xl text-sm font-medium transition-colors data-[active=true]:text-primary-foreground text-foreground/70 hover:text-foreground hover:bg-accent/50"
              data-active={active}
            >
              {active && (
                <motion.div
                  layoutId="activeNav"
                  className="absolute inset-0 rounded-xl gradient-primary shadow-soft"
                  transition={{ type: "spring", stiffness: 380, damping: 30 }}
                />
              )}
              <Icon className="w-[18px] h-[18px] relative z-10" />
              <span className="relative z-10">{item.label}</span>
            </Link>
          );
        })}
      </nav>

      <div className="mt-4 rounded-2xl p-4 gradient-primary text-white shadow-glow">
        <div className="text-xs opacity-90">Health Score</div>
        <div className="text-3xl font-bold font-display mt-1">92</div>
        <div className="text-xs opacity-90 mt-1">Excellent condition</div>
      </div>
    </aside>
  );
}
