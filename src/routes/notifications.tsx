import { createFileRoute } from "@tanstack/react-router";
import { Dumbbell, Droplets, Trophy, Moon, Target, Bell } from "lucide-react";
import { PageShell } from "@/components/layout/PageShell";
import { GlassCard } from "@/components/widgets/GlassCard";
import { notifications } from "@/lib/mock-data";

export const Route = createFileRoute("/notifications")({ component: NotificationsPage });

const iconMap: Record<string, any> = { workout: Dumbbell, water: Droplets, achievement: Trophy, sleep: Moon, goal: Target };
const tintMap: Record<string, string> = {
  workout: "bg-primary/10 text-primary",
  water: "bg-[color:var(--water)]/10 text-[color:var(--water)]",
  achievement: "bg-yellow-500/10 text-yellow-600",
  sleep: "bg-[color:var(--sleep)]/10 text-[color:var(--sleep)]",
  goal: "bg-[color:var(--calories)]/10 text-[color:var(--calories)]",
};

function NotificationsPage() {
  return (
    <PageShell title="Notifications" subtitle="Reminders and updates">
      <GlassCard>
        <div className="space-y-2">
          {notifications.map((n) => {
            const Icon = iconMap[n.type] || Bell;
            return (
              <div key={n.id} className={`flex items-start gap-3 rounded-xl p-3 border ${n.unread ? "bg-primary/5 border-primary/20" : "bg-white/40 border-border/50"}`}>
                <div className={`w-10 h-10 rounded-xl grid place-items-center shrink-0 ${tintMap[n.type]}`}><Icon className="w-4 h-4" /></div>
                <div className="flex-1 min-w-0">
                  <div className="flex items-center gap-2">
                    <span className="font-semibold text-sm">{n.title}</span>
                    {n.unread && <span className="w-2 h-2 rounded-full bg-primary" />}
                  </div>
                  <div className="text-sm text-muted-foreground mt-0.5">{n.body}</div>
                  <div className="text-xs text-muted-foreground mt-1">{n.time}</div>
                </div>
              </div>
            );
          })}
        </div>
      </GlassCard>
    </PageShell>
  );
}
