import { createFileRoute } from "@tanstack/react-router";
import { Footprints, MapPin, Timer, Flame } from "lucide-react";
import { BarChart, Bar, XAxis, YAxis, ResponsiveContainer, Tooltip, CartesianGrid, Line, LineChart } from "recharts";
import { PageShell } from "@/components/layout/PageShell";
import { GlassCard } from "@/components/widgets/GlassCard";
import { StatCard } from "@/components/widgets/StatCard";
import { weeklySteps } from "@/lib/mock-data";

export const Route = createFileRoute("/activity")({ component: ActivityPage });

const monthly = Array.from({ length: 30 }, (_, i) => ({
  day: i + 1,
  steps: Math.round(6000 + Math.random() * 8000),
}));

const timeline = [
  { time: "07:30", label: "Morning walk", detail: "2.4 km · 320 steps", icon: Footprints },
  { time: "09:15", label: "Cycling to work", detail: "5.8 km · 22 min", icon: MapPin },
  { time: "12:40", label: "Lunchtime stroll", detail: "1.1 km · 1,420 steps", icon: Footprints },
  { time: "18:20", label: "Evening run", detail: "6.5 km · 34 min · 412 kcal", icon: Timer },
];

function ActivityPage() {
  return (
    <PageShell title="Activity" subtitle="Every step, every mile — tracked">
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-4">
        <StatCard icon={Footprints} label="Steps Today" value="8,420" trend="+12%" />
        <StatCard icon={MapPin} label="Distance" value="6.2" unit="km" />
        <StatCard icon={Timer} label="Active Min" value="68" tint="water" />
        <StatCard icon={Flame} label="Cal Burned" value="486" tint="calories" />
      </div>

      <div className="grid lg:grid-cols-2 gap-4 mb-4">
        <GlassCard>
          <h3 className="font-semibold mb-4">Weekly Steps</h3>
          <div className="h-64">
            <ResponsiveContainer>
              <BarChart data={weeklySteps}>
                <defs>
                  <linearGradient id="stepBar" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="0%" stopColor="#22c55e" />
                    <stop offset="100%" stopColor="#14b8a6" />
                  </linearGradient>
                </defs>
                <CartesianGrid strokeDasharray="3 3" stroke="var(--border)" vertical={false} />
                <XAxis dataKey="day" tick={{ fontSize: 12 }} axisLine={false} tickLine={false} />
                <YAxis tick={{ fontSize: 11 }} axisLine={false} tickLine={false} />
                <Tooltip contentStyle={{ background: "rgba(255,255,255,0.9)", border: "1px solid var(--border)", borderRadius: 12 }} />
                <Bar dataKey="steps" fill="url(#stepBar)" radius={[8, 8, 0, 0]} />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </GlassCard>

        <GlassCard>
          <h3 className="font-semibold mb-4">Monthly Trend</h3>
          <div className="h-64">
            <ResponsiveContainer>
              <LineChart data={monthly}>
                <CartesianGrid strokeDasharray="3 3" stroke="var(--border)" vertical={false} />
                <XAxis dataKey="day" tick={{ fontSize: 11 }} axisLine={false} tickLine={false} />
                <YAxis tick={{ fontSize: 11 }} axisLine={false} tickLine={false} />
                <Tooltip contentStyle={{ background: "rgba(255,255,255,0.9)", border: "1px solid var(--border)", borderRadius: 12 }} />
                <Line type="monotone" dataKey="steps" stroke="#22c55e" strokeWidth={2.5} dot={{ r: 3 }} activeDot={{ r: 5 }} />
              </LineChart>
            </ResponsiveContainer>
          </div>
        </GlassCard>
      </div>

      <GlassCard>
        <h3 className="font-semibold mb-4">Activity Timeline</h3>
        <div className="relative space-y-4 pl-8">
          <div className="absolute left-4 top-2 bottom-2 w-px bg-border" />
          {timeline.map((t, i) => {
            const Icon = t.icon;
            return (
              <div key={i} className="relative">
                <div className="absolute -left-8 top-0 w-8 h-8 rounded-full gradient-primary text-white grid place-items-center shadow-soft">
                  <Icon className="w-4 h-4" />
                </div>
                <div className="flex items-baseline gap-3 flex-wrap">
                  <span className="text-xs text-muted-foreground font-mono">{t.time}</span>
                  <span className="font-semibold text-sm">{t.label}</span>
                </div>
                <div className="text-xs text-muted-foreground mt-0.5">{t.detail}</div>
              </div>
            );
          })}
        </div>
      </GlassCard>
    </PageShell>
  );
}
