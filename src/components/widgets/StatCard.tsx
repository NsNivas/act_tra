import { motion } from "framer-motion";
import type { LucideIcon } from "lucide-react";
import type { ReactNode } from "react";

export function StatCard({
  icon: Icon, label, value, unit, trend, tint = "primary", children,
}: {
  icon: LucideIcon; label: string; value: string | number; unit?: string;
  trend?: string; tint?: "primary" | "water" | "calories" | "sleep" | "heart"; children?: ReactNode;
}) {
  const tintMap: Record<string, string> = {
    primary: "bg-primary/10 text-primary",
    water: "bg-[color:var(--water)]/10 text-[color:var(--water)]",
    calories: "bg-[color:var(--calories)]/10 text-[color:var(--calories)]",
    sleep: "bg-[color:var(--sleep)]/10 text-[color:var(--sleep)]",
    heart: "bg-[color:var(--heart)]/10 text-[color:var(--heart)]",
  };
  return (
    <motion.div
      whileHover={{ y: -3 }}
      className="glass rounded-2xl p-5 relative overflow-hidden"
    >
      <div className="flex items-start justify-between">
        <div className={`w-11 h-11 rounded-xl grid place-items-center ${tintMap[tint]}`}>
          <Icon className="w-5 h-5" />
        </div>
        {trend && <span className="text-xs font-medium text-primary bg-primary/10 rounded-full px-2 py-0.5">{trend}</span>}
      </div>
      <div className="mt-4">
        <div className="text-xs text-muted-foreground uppercase tracking-wide">{label}</div>
        <div className="flex items-baseline gap-1.5 mt-1">
          <span className="text-2xl lg:text-3xl font-bold font-display">{value}</span>
          {unit && <span className="text-sm text-muted-foreground">{unit}</span>}
        </div>
      </div>
      {children && <div className="mt-3">{children}</div>}
    </motion.div>
  );
}
