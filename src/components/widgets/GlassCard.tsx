import type { ReactNode } from "react";
import { cn } from "@/lib/utils";

export function GlassCard({ children, className, strong }: { children: ReactNode; className?: string; strong?: boolean }) {
  return <div className={cn(strong ? "glass-strong" : "glass", "rounded-2xl p-5", className)}>{children}</div>;
}
