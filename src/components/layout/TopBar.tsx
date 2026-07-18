import { Bell, Search } from "lucide-react";
import { Link } from "@tanstack/react-router";

export function TopBar() {
  return (
    <header className="sticky top-0 z-20 glass-strong border-b border-border/40 px-4 lg:px-8 py-3 flex items-center gap-3">
      <div className="lg:hidden font-display font-bold text-lg">Fitness</div>
      <div className="flex-1 hidden md:flex items-center gap-2 max-w-md">
        <div className="relative w-full">
          <Search className="w-4 h-4 absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground" />
          <input
            placeholder="Search workouts, foods, exercises..."
            className="w-full bg-secondary/60 border border-border/50 rounded-xl pl-9 pr-3 py-2 text-sm outline-none focus:ring-2 focus:ring-ring/50"
          />
        </div>
      </div>
      <div className="flex-1 md:hidden" />
      <Link to="/notifications" className="relative w-10 h-10 grid place-items-center rounded-xl bg-secondary/60 hover:bg-secondary transition">
        <Bell className="w-4 h-4" />
        <span className="absolute top-1.5 right-1.5 w-2 h-2 rounded-full bg-destructive" />
      </Link>
      <Link to="/profile" className="w-10 h-10 rounded-xl gradient-primary text-white grid place-items-center font-semibold text-sm shadow-soft">
        AK
      </Link>
    </header>
  );
}
