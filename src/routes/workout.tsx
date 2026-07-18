import { createFileRoute } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { useState, useEffect } from "react";
import { Play, Pause, RotateCcw, Heart, Star, Clock, Flame, Plus, Dumbbell } from "lucide-react";
import { PageShell } from "@/components/layout/PageShell";
import { GlassCard } from "@/components/widgets/GlassCard";
import { workoutCategories, exercises, recentWorkouts } from "@/lib/mock-data";

export const Route = createFileRoute("/workout")({ component: WorkoutPage });

function WorkoutPage() {
  const [selected, setSelected] = useState<string | null>(null);
  const [running, setRunning] = useState(false);
  const [seconds, setSeconds] = useState(0);
  const [favs, setFavs] = useState<Set<string>>(new Set(["1", "3"]));

  useEffect(() => {
    if (!running) return;
    const id = setInterval(() => setSeconds((s) => s + 1), 1000);
    return () => clearInterval(id);
  }, [running]);

  const mm = String(Math.floor(seconds / 60)).padStart(2, "0");
  const ss = String(seconds % 60).padStart(2, "0");

  const toggleFav = (id: string) => {
    setFavs((prev) => {
      const n = new Set(prev);
      n.has(id) ? n.delete(id) : n.add(id);
      return n;
    });
  };

  return (
    <PageShell title="Workouts" subtitle="Build strength, track sets, crush goals">
      {/* Timer */}
      <GlassCard strong className="mb-4 relative overflow-hidden">
        <div className="absolute -left-10 -bottom-10 w-56 h-56 rounded-full bg-primary/15 blur-3xl" />
        <div className="relative flex flex-col md:flex-row md:items-center gap-6">
          <div className="text-center md:text-left">
            <div className="text-xs uppercase tracking-wider text-muted-foreground">Workout Timer</div>
            <div className="font-display font-bold text-6xl mt-1 tabular-nums">{mm}:{ss}</div>
            <div className="text-xs text-muted-foreground">Session · Upper Body</div>
          </div>
          <div className="flex-1 grid grid-cols-3 gap-3">
            <div className="rounded-xl bg-secondary/60 p-3 text-center">
              <div className="text-xs text-muted-foreground">Sets</div>
              <div className="font-display font-bold text-2xl">8/12</div>
            </div>
            <div className="rounded-xl bg-secondary/60 p-3 text-center">
              <div className="text-xs text-muted-foreground">Reps</div>
              <div className="font-display font-bold text-2xl">96</div>
            </div>
            <div className="rounded-xl bg-secondary/60 p-3 text-center">
              <div className="text-xs text-muted-foreground">Rest</div>
              <div className="font-display font-bold text-2xl">45s</div>
            </div>
          </div>
          <div className="flex gap-2 justify-center">
            <button onClick={() => setRunning((r) => !r)} className="w-14 h-14 rounded-2xl gradient-primary text-white grid place-items-center shadow-glow">
              {running ? <Pause className="w-6 h-6" /> : <Play className="w-6 h-6" />}
            </button>
            <button onClick={() => { setRunning(false); setSeconds(0); }} className="w-14 h-14 rounded-2xl bg-secondary grid place-items-center">
              <RotateCcw className="w-5 h-5" />
            </button>
          </div>
        </div>
      </GlassCard>

      {/* Categories */}
      <h2 className="font-semibold mb-3">Categories</h2>
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-3 mb-6">
        {workoutCategories.map((c) => (
          <motion.button
            key={c.id}
            whileHover={{ y: -3 }}
            onClick={() => setSelected(c.id === selected ? null : c.id)}
            className={`glass rounded-2xl p-4 text-left transition ${selected === c.id ? "ring-2 ring-primary" : ""}`}
          >
            <div className={`w-10 h-10 rounded-xl bg-gradient-to-br ${c.color} grid place-items-center text-white mb-3`}>
              <Dumbbell className="w-5 h-5" />
            </div>
            <div className="text-sm font-semibold">{c.name}</div>
            <div className="text-xs text-muted-foreground mt-0.5">{c.exercises} exercises</div>
          </motion.button>
        ))}
      </div>

      {/* Exercise library */}
      <div className="grid lg:grid-cols-3 gap-4">
        <GlassCard className="lg:col-span-2">
          <div className="flex items-center justify-between mb-3">
            <h3 className="font-semibold">Exercise Library</h3>
            <button className="text-xs inline-flex items-center gap-1 text-primary font-medium"><Plus className="w-3 h-3" /> Add custom</button>
          </div>
          <div className="space-y-2">
            {exercises.filter(e => !selected || e.category === selected).map((e) => (
              <motion.div key={e.id} whileHover={{ x: 3 }} className="flex items-center gap-3 rounded-xl border border-border/50 p-3 bg-white/40">
                <div className="w-11 h-11 rounded-xl gradient-primary text-white grid place-items-center"><Dumbbell className="w-4 h-4" /></div>
                <div className="flex-1 min-w-0">
                  <div className="flex items-center gap-2 flex-wrap">
                    <span className="font-semibold text-sm">{e.name}</span>
                    <span className="text-[10px] uppercase tracking-wide bg-secondary rounded-full px-2 py-0.5">{e.difficulty}</span>
                  </div>
                  <div className="text-xs text-muted-foreground mt-0.5">{e.muscles.join(" · ")}</div>
                </div>
                <div className="hidden sm:flex gap-3 text-xs text-muted-foreground">
                  <span>{e.sets} sets</span>
                  <span>{e.reps} reps</span>
                  <span>{e.rest}s rest</span>
                </div>
                <button onClick={() => toggleFav(e.id)}>
                  <Star className={`w-4 h-4 ${favs.has(e.id) ? "fill-yellow-400 text-yellow-400" : "text-muted-foreground"}`} />
                </button>
              </motion.div>
            ))}
          </div>
        </GlassCard>

        <GlassCard>
          <h3 className="font-semibold mb-3">Workout History</h3>
          <div className="space-y-3">
            {recentWorkouts.map((w) => (
              <div key={w.id} className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-secondary grid place-items-center"><Heart className="w-4 h-4 text-primary" /></div>
                <div className="flex-1 min-w-0">
                  <div className="text-sm font-semibold truncate">{w.name}</div>
                  <div className="text-xs text-muted-foreground flex items-center gap-2">
                    <Clock className="w-3 h-3" /> {w.duration}m
                    <Flame className="w-3 h-3" /> {w.calories}
                  </div>
                </div>
                <div className="text-xs text-muted-foreground">{w.date}</div>
              </div>
            ))}
          </div>
        </GlassCard>
      </div>
    </PageShell>
  );
}
