import { motion } from "framer-motion";
import type { ReactNode } from "react";

export function PageShell({ title, subtitle, children, actions }: { title: string; subtitle?: string; children: ReactNode; actions?: ReactNode }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 12 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.35, ease: "easeOut" }}
      className="px-4 lg:px-8 py-6 pb-28 lg:pb-10 max-w-7xl mx-auto w-full"
    >
      <div className="flex items-start justify-between gap-4 mb-6 flex-wrap">
        <div className="min-w-0">
          <h1 className="text-2xl lg:text-3xl font-bold font-display">{title}</h1>
          {subtitle && <p className="text-sm text-muted-foreground mt-1">{subtitle}</p>}
        </div>
        {actions}
      </div>
      {children}
    </motion.div>
  );
}
