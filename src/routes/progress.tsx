import { createFileRoute } from "@tanstack/react-router";
import { Scale, Percent, Zap, Award } from "lucide-react";
import { LineChart, Line, XAxis, YAxis, ResponsiveContainer, Tooltip, CartesianGrid, Legend } from "recharts";
import { PageShell } from "@/components/layout/PageShell";
import { GlassCard } from "@/components/widgets/GlassCard";
import { StatCard } from "@/components/widgets/StatCard";
import { weightHistory } from "@/lib/mock-data";

export const Route = createFileRoute("/progress")({ component: ProgressPage });

const milestones = [
  { date: "Week 8", label: "Hit target weight range", tone: "primary" },
  { date: "Week 6", label: "Body fat below 17%", tone: "calories" },
  { date: "Week 4", label: "Lost 1.5 kg total", tone: "water" },
  { date: "Week 2", label: "Started strength program", tone: "sleep" },
];

function ProgressPage() {
  return (
    <PageShell title="Progress" subtitle="Small daily changes → massive results">
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-4">
        <StatCard icon={Scale} label="Weight" value="75.4" unit="kg" trend="-3.1kg" />
        <StatCard icon={Percent} label="Body Fat" value="15.9" unit="%" trend="-2.3%" tint="calories" />
        <StatCard icon={Zap} label="Muscle" value="44.1" unit="kg" trend="+2.0kg" tint="primary" />
        <StatCard icon={Award} label="BMI" value="22.4" unit="Normal" tint="water" />
      </div>

      <div className="grid lg:grid-cols-3 gap-4">
        <GlassCard className="lg:col-span-2">
          <h3 className="font-semibold mb-4">Body Composition Trend</h3>
          <div className="h-72">
            <ResponsiveContainer>
              <LineChart data={weightHistory}>
                <CartesianGrid strokeDasharray="3 3" stroke="var(--border)" vertical={false} />
                <XAxis dataKey="week" tick={{ fontSize: 12 }} axisLine={false} tickLine={false} />
                <YAxis tick={{ fontSize: 11 }} axisLine={false} tickLine={false} />
                <Tooltip contentStyle={{ background: "rgba(255,255,255,0.9)", border: "1px solid var(--border)", borderRadius: 12 }} />
                <Legend wrapperStyle={{ fontSize: 12 }} />
                <Line type="monotone" dataKey="weight" stroke="#22c55e" strokeWidth={2.5} dot={{ r: 4 }} />
                <Line type="monotone" dataKey="bodyFat" stroke="#f97316" strokeWidth={2.5} dot={{ r: 4 }} />
                <Line type="monotone" dataKey="muscle" stroke="#3b82f6" strokeWidth={2.5} dot={{ r: 4 }} />
              </LineChart>
            </ResponsiveContainer>
          </div>
        </GlassCard>

        <GlassCard>
          <h3 className="font-semibold mb-4">Achievement Timeline</h3>
          <div className="relative pl-6 space-y-4">
            <div className="absolute left-2 top-2 bottom-2 w-px bg-border" />
            {milestones.map((m, i) => (
              <div key={i} className="relative">
                <div className="absolute -left-6 top-1 w-4 h-4 rounded-full gradient-primary shadow-soft" />
                <div className="text-xs text-muted-foreground">{m.date}</div>
                <div className="font-medium text-sm">{m.label}</div>
              </div>
            ))}
          </div>
        </GlassCard>
      </div>
    </PageShell>
  );
}
