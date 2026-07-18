import { motion } from "framer-motion";

export function CircularProgress({
  value, max = 100, size = 120, stroke = 10, color = "var(--primary)", trackColor,
  label, sublabel,
}: {
  value: number; max?: number; size?: number; stroke?: number; color?: string; trackColor?: string;
  label?: string; sublabel?: string;
}) {
  const pct = Math.min(100, (value / max) * 100);
  const r = (size - stroke) / 2;
  const c = 2 * Math.PI * r;
  const offset = c - (pct / 100) * c;
  return (
    <div className="relative inline-grid place-items-center" style={{ width: size, height: size }}>
      <svg width={size} height={size} className="-rotate-90">
        <circle
          cx={size / 2} cy={size / 2} r={r}
          stroke={trackColor ?? "var(--muted)"} strokeWidth={stroke} fill="none"
        />
        <motion.circle
          cx={size / 2} cy={size / 2} r={r}
          stroke={color} strokeWidth={stroke} fill="none" strokeLinecap="round"
          strokeDasharray={c}
          initial={{ strokeDashoffset: c }}
          animate={{ strokeDashoffset: offset }}
          transition={{ duration: 1.1, ease: "easeOut" }}
        />
      </svg>
      <div className="absolute inset-0 grid place-items-center text-center">
        <div>
          <div className="text-2xl font-bold font-display leading-none">{label ?? `${Math.round(pct)}%`}</div>
          {sublabel && <div className="text-[10px] text-muted-foreground uppercase tracking-wide mt-1">{sublabel}</div>}
        </div>
      </div>
    </div>
  );
}
