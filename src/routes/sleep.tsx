import { createFileRoute } from "@tanstack/react-router";
import { Moon, Sunrise, Sparkles } from "lucide-react";
import { BarChart, Bar, XAxis, YAxis, ResponsiveContainer, Tooltip, CartesianGrid, Legend } from "recharts";
import { PageShell } from "@/components/layout/PageShell";
import { GlassCard } from "@/components/widgets/GlassCard";
import { StatCard } from "@/components/widgets/StatCard";
import { CircularProgress } from "@/components/widgets/CircularProgress";
import { sleepData } from "@/lib/mock-data";

export const Route = createFileRoute("/sleep")({ component: SleepPage });

const monthly = Array.from({ length: 30 }, (_, i) => ({
  day: i + 1,
  hours: +(6 + Math.random() * 3).toFixed(1),
}));

function SleepPage() {
  return (
    <PageShell title="Sleep" subtitle="Recovery is where growth happens">
      <div className="grid lg:grid-cols-3 gap-4 mb-4">
        <GlassCard strong className="lg:col-span-2 relative overflow-hidden">
          <div className="absolute -right-10 -top-10 w-56 h-56 rounded-full bg-[color:var(--sleep)]/20 blur-3xl" />
          <div className="relative flex flex-col md:flex-row items-center gap-6">
            <CircularProgress value={7.7} max={8} size={150} stroke={12} color="#8b5cf6" label="7h 42m" sublabel="Last night" />
            <div className="flex-1 space-y-3">
              <div>
                <div className="text-xs uppercase text-muted-foreground tracking-wide">Quality</div>
                <div className="text-3xl font-display font-bold text-gradient-primary">88%</div>
              </div>
              <div className="grid grid-cols-3 gap-2 text-center">
                <div className="rounded-xl bg-secondary/60 p-2.5">
                  <div className="text-xs text-muted-foreground">Deep</div>
                  <div className="font-bold text-sm">2h 10m</div>
                </div>
                <div className="rounded-xl bg-secondary/60 p-2.5">
                  <div className="text-xs text-muted-foreground">Light</div>
                  <div className="font-bold text-sm">4h 22m</div>
                </div>
                <div className="rounded-xl bg-secondary/60 p-2.5">
                  <div className="text-xs text-muted-foreground">REM</div>
                  <div className="font-bold text-sm">1h 10m</div>
                </div>
              </div>
            </div>
          </div>
        </GlassCard>

        <GlassCard>
          <div className="flex items-center gap-2 mb-3"><Sparkles className="w-4 h-4 text-primary" /><h3 className="font-semibold">Sleep Insights</h3></div>
          <p className="text-sm text-muted-foreground">Your deep sleep is 8% above weekly average. Keep bedtime consistent for the next 3 nights to lock in the pattern.</p>
          <div className="mt-4 grid grid-cols-2 gap-2">
            <div className="rounded-xl bg-secondary/60 p-3"><div className="flex items-center gap-1.5 text-xs text-muted-foreground"><Moon className="w-3 h-3" /> Bedtime</div><div className="font-semibold mt-1">22:48</div></div>
            <div className="rounded-xl bg-secondary/60 p-3"><div className="flex items-center gap-1.5 text-xs text-muted-foreground"><Sunrise className="w-3 h-3" /> Wake</div><div className="font-semibold mt-1">06:30</div></div>
          </div>
        </GlassCard>
      </div>

      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-4">
        <StatCard icon={Moon} label="Avg Sleep" value="7.6" unit="h" tint="sleep" />
        <StatCard icon={Moon} label="Deep Sleep" value="1.9" unit="h" tint="sleep" />
        <StatCard icon={Moon} label="REM" value="1.5" unit="h" tint="sleep" />
        <StatCard icon={Sparkles} label="Efficiency" value="92" unit="%" tint="primary" />
      </div>

      <div className="grid lg:grid-cols-2 gap-4">
        <GlassCard>
          <h3 className="font-semibold mb-4">Weekly Breakdown</h3>
          <div className="h-64">
            <ResponsiveContainer>
              <BarChart data={sleepData}>
                <CartesianGrid strokeDasharray="3 3" stroke="var(--border)" vertical={false} />
                <XAxis dataKey="day" tick={{ fontSize: 12 }} axisLine={false} tickLine={false} />
                <YAxis tick={{ fontSize: 11 }} axisLine={false} tickLine={false} />
                <Tooltip contentStyle={{ background: "rgba(255,255,255,0.9)", border: "1px solid var(--border)", borderRadius: 12 }} />
                <Legend wrapperStyle={{ fontSize: 12 }} />
                <Bar dataKey="deep" stackId="s" fill="#7c3aed" radius={[0,0,0,0]} />
                <Bar dataKey="light" stackId="s" fill="#a78bfa" />
                <Bar dataKey="rem" stackId="s" fill="#c4b5fd" radius={[8,8,0,0]} />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </GlassCard>

        <GlassCard>
          <h3 className="font-semibold mb-4">Monthly Sleep Hours</h3>
          <div className="h-64">
            <ResponsiveContainer>
              <BarChart data={monthly}>
                <CartesianGrid strokeDasharray="3 3" stroke="var(--border)" vertical={false} />
                <XAxis dataKey="day" tick={{ fontSize: 11 }} axisLine={false} tickLine={false} />
                <YAxis tick={{ fontSize: 11 }} axisLine={false} tickLine={false} />
                <Tooltip contentStyle={{ background: "rgba(255,255,255,0.9)", border: "1px solid var(--border)", borderRadius: 12 }} />
                <Bar dataKey="hours" fill="#8b5cf6" radius={[6, 6, 0, 0]} />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </GlassCard>
      </div>
    </PageShell>
  );
}
