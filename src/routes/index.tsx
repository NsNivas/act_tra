import { createFileRoute, Link } from "@tanstack/react-router";
import { motion } from "framer-motion";
import {
  Footprints, Flame, Utensils, Droplets, Moon, Scale,
  Activity, Sparkles, Plus, Dumbbell, Apple, Play,
} from "lucide-react";
import {
  AreaChart, Area, XAxis, YAxis, ResponsiveContainer, Tooltip, CartesianGrid,
} from "recharts";
import { PageShell } from "@/components/layout/PageShell";
import { StatCard } from "@/components/widgets/StatCard";
import { CircularProgress } from "@/components/widgets/CircularProgress";
import { GlassCard } from "@/components/widgets/GlassCard";
import { weeklySteps, recentWorkouts } from "@/lib/mock-data";

export const Route = createFileRoute("/")({ component: Dashboard });

function Dashboard() {
  return (
    <PageShell
      title="Good morning, Alex"
      subtitle="Here's your health snapshot for today"
      actions={
        <Link to="/workout" className="inline-flex items-center gap-2 rounded-xl gradient-primary text-white px-4 py-2.5 text-sm font-medium shadow-soft">
          <Play className="w-4 h-4" /> Start workout
        </Link>
      }
    >
      {/* Hero row */}
      <div className="grid lg:grid-cols-3 gap-4 mb-4">
        <GlassCard strong className="lg:col-span-2 relative overflow-hidden">
          <div className="absolute -right-16 -top-16 w-64 h-64 rounded-full bg-primary/20 blur-3xl" />
          <div className="relative flex flex-col md:flex-row md:items-center gap-6">
            <CircularProgress value={92} size={140} stroke={12} label="92" sublabel="Health Score" color="url(#healthGrad)" />
            <svg width="0" height="0"><defs>
              <linearGradient id="healthGrad" x1="0" y1="0" x2="1" y2="1">
                <stop offset="0%" stopColor="#22c55e" />
                <stop offset="100%" stopColor="#14b8a6" />
              </linearGradient>
            </defs></svg>
            <div className="flex-1">
              <div className="text-xs uppercase tracking-wider text-muted-foreground">AI Health Summary</div>
              <h3 className="text-lg font-semibold font-display mt-1">You're on a 12-day streak 🔥</h3>
              <p className="text-sm text-muted-foreground mt-1.5">
                Your recovery is optimal and consistency is trending up. Consider a moderate-intensity session today —
                your body is primed for progressive overload.
              </p>
              <div className="flex flex-wrap gap-2 mt-3">
                <span className="text-xs bg-primary/10 text-primary rounded-full px-2.5 py-1">Recovered</span>
                <span className="text-xs bg-[color:var(--water)]/10 text-[color:var(--water)] rounded-full px-2.5 py-1">Hydrated</span>
                <span className="text-xs bg-[color:var(--sleep)]/10 text-[color:var(--sleep)] rounded-full px-2.5 py-1">Well rested</span>
              </div>
            </div>
          </div>
        </GlassCard>

        <GlassCard strong>
          <div className="flex items-center justify-between">
            <div className="text-sm font-semibold">Today's Goals</div>
            <span className="text-xs text-muted-foreground">4 / 6</span>
          </div>
          <div className="mt-4 space-y-3">
            {[
              { label: "10,000 steps", pct: 84, color: "bg-primary" },
              { label: "2.5L water", pct: 72, color: "bg-[color:var(--water)]" },
              { label: "500 kcal burn", pct: 91, color: "bg-[color:var(--calories)]" },
              { label: "8h sleep", pct: 95, color: "bg-[color:var(--sleep)]" },
            ].map((g) => (
              <div key={g.label}>
                <div className="flex justify-between text-xs mb-1">
                  <span className="text-muted-foreground">{g.label}</span>
                  <span className="font-medium">{g.pct}%</span>
                </div>
                <div className="h-2 rounded-full bg-secondary overflow-hidden">
                  <motion.div initial={{ width: 0 }} animate={{ width: `${g.pct}%` }} transition={{ duration: 0.9, ease: "easeOut" }} className={`h-full rounded-full ${g.color}`} />
                </div>
              </div>
            ))}
          </div>
        </GlassCard>
      </div>

      {/* Stat cards */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-4">
        <StatCard icon={Footprints} label="Steps" value="8,420" unit="/ 10k" trend="+12%" tint="primary" />
        <StatCard icon={Flame} label="Burned" value="486" unit="kcal" trend="+8%" tint="calories" />
        <StatCard icon={Utensils} label="Consumed" value="1,820" unit="kcal" tint="calories" />
        <StatCard icon={Droplets} label="Water" value="1.8" unit="L" trend="72%" tint="water" />
        <StatCard icon={Moon} label="Sleep" value="7h 42m" tint="sleep" />
        <StatCard icon={Scale} label="Weight" value="75.4" unit="kg" trend="-0.5" tint="primary" />
        <StatCard icon={Activity} label="BMI" value="22.4" unit="normal" tint="primary" />
        <StatCard icon={Sparkles} label="Streak" value="12" unit="days" trend="🔥" tint="calories" />
      </div>

      {/* Charts row */}
      <div className="grid lg:grid-cols-3 gap-4 mb-4">
        <GlassCard className="lg:col-span-2">
          <div className="flex items-center justify-between mb-4">
            <div>
              <h3 className="font-semibold">Weekly Activity</h3>
              <p className="text-xs text-muted-foreground">Steps and calories over 7 days</p>
            </div>
            <div className="flex gap-2 text-xs">
              <span className="flex items-center gap-1.5"><span className="w-2 h-2 rounded-full bg-primary" />Steps</span>
              <span className="flex items-center gap-1.5"><span className="w-2 h-2 rounded-full bg-[color:var(--calories)]" />Calories</span>
            </div>
          </div>
          <div className="h-64">
            <ResponsiveContainer>
              <AreaChart data={weeklySteps}>
                <defs>
                  <linearGradient id="gStep" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="0%" stopColor="#22c55e" stopOpacity={0.4} />
                    <stop offset="100%" stopColor="#22c55e" stopOpacity={0} />
                  </linearGradient>
                  <linearGradient id="gCal" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="0%" stopColor="#f97316" stopOpacity={0.35} />
                    <stop offset="100%" stopColor="#f97316" stopOpacity={0} />
                  </linearGradient>
                </defs>
                <CartesianGrid strokeDasharray="3 3" stroke="var(--border)" vertical={false} />
                <XAxis dataKey="day" tick={{ fontSize: 12 }} axisLine={false} tickLine={false} />
                <YAxis tick={{ fontSize: 11 }} axisLine={false} tickLine={false} />
                <Tooltip contentStyle={{ background: "rgba(255,255,255,0.9)", border: "1px solid var(--border)", borderRadius: 12, backdropFilter: "blur(10px)" }} />
                <Area type="monotone" dataKey="steps" stroke="#22c55e" strokeWidth={2.5} fill="url(#gStep)" />
                <Area type="monotone" dataKey="calories" stroke="#f97316" strokeWidth={2.5} fill="url(#gCal)" />
              </AreaChart>
            </ResponsiveContainer>
          </div>
        </GlassCard>

        <GlassCard>
          <h3 className="font-semibold mb-4">Quick Actions</h3>
          <div className="grid grid-cols-2 gap-2">
            {[
              { icon: Dumbbell, label: "Log Workout", to: "/workout" },
              { icon: Apple, label: "Log Meal", to: "/nutrition" },
              { icon: Droplets, label: "Add Water", to: "/nutrition" },
              { icon: Moon, label: "Log Sleep", to: "/sleep" },
              { icon: Sparkles, label: "Ask AI", to: "/ai-coach" },
              { icon: Plus, label: "Weigh In", to: "/progress" },
            ].map(({ icon: Icon, label, to }) => (
              <Link key={label} to={to} className="flex flex-col items-center gap-2 p-3 rounded-xl bg-secondary/60 hover:bg-secondary transition">
                <div className="w-9 h-9 rounded-lg gradient-primary text-white grid place-items-center"><Icon className="w-4 h-4" /></div>
                <span className="text-xs font-medium text-center">{label}</span>
              </Link>
            ))}
          </div>
        </GlassCard>
      </div>

      {/* Recent workouts */}
      <GlassCard>
        <div className="flex items-center justify-between mb-4">
          <h3 className="font-semibold">Recent Workouts</h3>
          <Link to="/workout" className="text-xs text-primary font-medium">View all →</Link>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-3">
          {recentWorkouts.map((w) => (
            <motion.div key={w.id} whileHover={{ y: -3 }} className="rounded-xl border border-border/50 p-4 bg-white/40">
              <div className="w-10 h-10 rounded-lg gradient-primary grid place-items-center text-white mb-3"><Dumbbell className="w-4 h-4" /></div>
              <div className="font-semibold text-sm">{w.name}</div>
              <div className="text-xs text-muted-foreground mt-0.5">{w.date}</div>
              <div className="flex gap-3 mt-3 text-xs text-muted-foreground">
                <span>{w.duration} min</span>
                <span>·</span>
                <span>{w.calories} kcal</span>
                <span>·</span>
                <span>{w.exercises} ex</span>
              </div>
            </motion.div>
          ))}
        </div>
      </GlassCard>
    </PageShell>
  );
}
