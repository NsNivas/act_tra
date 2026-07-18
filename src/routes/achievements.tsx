import { createFileRoute } from "@tanstack/react-router";
import { motion } from "framer-motion";
import * as Icons from "lucide-react";
import { Trophy, Flame, Target, Gift } from "lucide-react";
import { PageShell } from "@/components/layout/PageShell";
import { GlassCard } from "@/components/widgets/GlassCard";
import { achievements } from "@/lib/mock-data";

export const Route = createFileRoute("/achievements")({ component: AchievementsPage });

const challenges = [
  { name: "10K Steps Challenge", days: "5/7 days", pct: 71 },
  { name: "Hydration Week", days: "6/7 days", pct: 85 },
  { name: "March Strength", days: "18/30 days", pct: 60 },
];

function AchievementsPage() {
  return (
    <PageShell title="Achievements" subtitle="Level up your health journey">
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-4">
        <GlassCard strong className="text-center">
          <div className="w-12 h-12 rounded-2xl gradient-primary text-white grid place-items-center mx-auto shadow-glow"><Flame className="w-6 h-6" /></div>
          <div className="text-3xl font-bold font-display mt-3">12</div>
          <div className="text-xs text-muted-foreground">Day Streak</div>
        </GlassCard>
        <GlassCard strong className="text-center">
          <div className="w-12 h-12 rounded-2xl bg-yellow-500 text-white grid place-items-center mx-auto shadow-soft"><Trophy className="w-6 h-6" /></div>
          <div className="text-3xl font-bold font-display mt-3">3</div>
          <div className="text-xs text-muted-foreground">Badges Earned</div>
        </GlassCard>
        <GlassCard strong className="text-center">
          <div className="w-12 h-12 rounded-2xl bg-blue-500 text-white grid place-items-center mx-auto shadow-soft"><Target className="w-6 h-6" /></div>
          <div className="text-3xl font-bold font-display mt-3">8</div>
          <div className="text-xs text-muted-foreground">Weekly Wins</div>
        </GlassCard>
        <GlassCard strong className="text-center">
          <div className="w-12 h-12 rounded-2xl bg-purple-500 text-white grid place-items-center mx-auto shadow-soft"><Gift className="w-6 h-6" /></div>
          <div className="text-3xl font-bold font-display mt-3">2,480</div>
          <div className="text-xs text-muted-foreground">XP Points</div>
        </GlassCard>
      </div>

      <GlassCard className="mb-4">
        <h3 className="font-semibold mb-4">Active Challenges</h3>
        <div className="grid md:grid-cols-3 gap-3">
          {challenges.map((c) => (
            <div key={c.name} className="rounded-xl border border-border/50 p-4 bg-white/40">
              <div className="flex items-center justify-between">
                <span className="font-semibold text-sm">{c.name}</span>
                <span className="text-xs text-primary font-medium">{c.pct}%</span>
              </div>
              <div className="text-xs text-muted-foreground mt-1">{c.days}</div>
              <div className="h-2 rounded-full bg-secondary overflow-hidden mt-3">
                <motion.div initial={{ width: 0 }} animate={{ width: `${c.pct}%` }} transition={{ duration: 0.8 }} className="h-full gradient-primary rounded-full" />
              </div>
            </div>
          ))}
        </div>
      </GlassCard>

      <GlassCard>
        <h3 className="font-semibold mb-4">Badges</h3>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {achievements.map((a) => {
            const Icon = (Icons as any)[a.icon] || Trophy;
            return (
              <motion.div
                key={a.id} whileHover={{ y: -4 }}
                className={`rounded-2xl p-4 border text-center transition ${a.earned ? "gradient-primary text-white border-transparent shadow-glow" : "bg-white/40 border-border/50"}`}
              >
                <div className={`w-14 h-14 rounded-2xl grid place-items-center mx-auto ${a.earned ? "bg-white/20" : "bg-secondary"}`}>
                  <Icon className={`w-7 h-7 ${a.earned ? "text-white" : "text-muted-foreground"}`} />
                </div>
                <div className={`font-semibold text-sm mt-3 ${a.earned ? "" : ""}`}>{a.name}</div>
                <div className={`text-xs mt-1 ${a.earned ? "text-white/80" : "text-muted-foreground"}`}>{a.desc}</div>
                {!a.earned && (
                  <div className="mt-3">
                    <div className="h-1.5 rounded-full bg-secondary overflow-hidden">
                      <div className="h-full gradient-primary rounded-full" style={{ width: `${a.progress}%` }} />
                    </div>
                    <div className="text-xs text-muted-foreground mt-1">{a.progress}%</div>
                  </div>
                )}
              </motion.div>
            );
          })}
        </div>
      </GlassCard>
    </PageShell>
  );
}
