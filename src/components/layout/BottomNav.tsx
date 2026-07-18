import { Link, useRouterState } from "@tanstack/react-router";
import { LayoutDashboard, Dumbbell, Apple, Sparkles, User } from "lucide-react";

const items = [
  { to: "/", label: "Home", icon: LayoutDashboard },
  { to: "/workout", label: "Workout", icon: Dumbbell },
  { to: "/nutrition", label: "Food", icon: Apple },
  { to: "/ai-coach", label: "Coach", icon: Sparkles },
  { to: "/profile", label: "Profile", icon: User },
];

export function BottomNav() {
  const pathname = useRouterState({ select: (s) => s.location.pathname });
  return (
    <nav className="lg:hidden fixed bottom-0 inset-x-0 z-30 glass-strong border-t border-border/50 px-2 py-2">
      <div className="flex items-center justify-around">
        {items.map(({ to, label, icon: Icon }) => {
          const active = pathname === to;
          return (
            <Link
              key={to}
              to={to}
              className="flex flex-col items-center gap-1 px-3 py-1.5 rounded-xl text-xs"
              data-active={active}
            >
              <div className={active ? "w-10 h-10 grid place-items-center rounded-xl gradient-primary shadow-soft" : "w-10 h-10 grid place-items-center rounded-xl"}>
                <Icon className={active ? "w-5 h-5 text-white" : "w-5 h-5 text-muted-foreground"} />
              </div>
              <span className={active ? "text-primary font-medium" : "text-muted-foreground"}>{label}</span>
            </Link>
          );
        })}
      </div>
    </nav>
  );
}
