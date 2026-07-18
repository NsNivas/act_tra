import { createFileRoute } from "@tanstack/react-router";
import { Watch, Smartphone, Scale, Shield, ChevronRight } from "lucide-react";
import { PageShell } from "@/components/layout/PageShell";
import { GlassCard } from "@/components/widgets/GlassCard";

export const Route = createFileRoute("/profile")({ component: ProfilePage });

const fields = [
  { label: "Height", value: "182 cm" },
  { label: "Weight", value: "75.4 kg" },
  { label: "Age", value: "29" },
  { label: "Gender", value: "Male" },
  { label: "Blood Type", value: "O+" },
  { label: "Activity Level", value: "Active" },
];

const goals = [
  { label: "Target Weight", value: "74 kg" },
  { label: "Daily Steps", value: "10,000" },
  { label: "Weekly Workouts", value: "5" },
  { label: "Daily Calories", value: "2,400 kcal" },
];

const devices = [
  { name: "Apple Watch Series 9", status: "Connected", icon: Watch },
  { name: "iPhone 15 Pro", status: "Syncing", icon: Smartphone },
  { name: "Withings Body+ Scale", status: "Connected", icon: Scale },
];

function ProfilePage() {
  return (
    <PageShell title="Profile" subtitle="Manage your health identity">
      <GlassCard strong className="mb-4">
        <div className="flex flex-col md:flex-row md:items-center gap-4">
          <div className="w-20 h-20 rounded-2xl gradient-primary text-white grid place-items-center text-2xl font-bold font-display shadow-glow">AK</div>
          <div className="flex-1">
            <div className="text-xl font-bold font-display">Alex Kane</div>
            <div className="text-sm text-muted-foreground">alex.kane@example.com · Member since Jan 2024</div>
            <div className="flex gap-2 mt-2 flex-wrap">
              <span className="text-xs bg-primary/10 text-primary rounded-full px-2.5 py-1">Premium</span>
              <span className="text-xs bg-secondary rounded-full px-2.5 py-1">12-day streak 🔥</span>
              <span className="text-xs bg-secondary rounded-full px-2.5 py-1">Level 8</span>
            </div>
          </div>
          <button className="rounded-xl gradient-primary text-white px-4 py-2.5 text-sm font-medium shadow-soft">Edit profile</button>
        </div>
      </GlassCard>

      <div className="grid lg:grid-cols-2 gap-4 mb-4">
        <GlassCard>
          <h3 className="font-semibold mb-3">User Information</h3>
          <div className="grid grid-cols-2 gap-3">
            {fields.map((f) => (
              <div key={f.label} className="rounded-xl bg-secondary/60 p-3">
                <div className="text-xs text-muted-foreground">{f.label}</div>
                <div className="font-semibold mt-0.5">{f.value}</div>
              </div>
            ))}
          </div>
        </GlassCard>

        <GlassCard>
          <h3 className="font-semibold mb-3">Goals</h3>
          <div className="space-y-2">
            {goals.map((g) => (
              <div key={g.label} className="flex justify-between items-center rounded-xl bg-secondary/60 p-3">
                <span className="text-sm text-muted-foreground">{g.label}</span>
                <span className="font-semibold text-sm">{g.value}</span>
              </div>
            ))}
          </div>
        </GlassCard>
      </div>

      <div className="grid lg:grid-cols-2 gap-4">
        <GlassCard>
          <h3 className="font-semibold mb-3">Connected Devices</h3>
          <div className="space-y-2">
            {devices.map((d) => {
              const Icon = d.icon;
              return (
                <div key={d.name} className="flex items-center gap-3 rounded-xl bg-white/40 border border-border/50 p-3">
                  <div className="w-10 h-10 rounded-lg bg-primary/10 text-primary grid place-items-center"><Icon className="w-4 h-4" /></div>
                  <div className="flex-1">
                    <div className="text-sm font-semibold">{d.name}</div>
                    <div className="text-xs text-primary">{d.status}</div>
                  </div>
                  <ChevronRight className="w-4 h-4 text-muted-foreground" />
                </div>
              );
            })}
          </div>
        </GlassCard>

        <GlassCard>
          <div className="flex items-center gap-2 mb-3"><Shield className="w-4 h-4 text-primary" /><h3 className="font-semibold">Privacy</h3></div>
          <div className="space-y-2">
            {["Share data with Coach", "Public profile", "Show on leaderboard", "Anonymous analytics"].map((label, i) => (
              <label key={label} className="flex items-center justify-between rounded-xl bg-secondary/60 p-3">
                <span className="text-sm">{label}</span>
                <input type="checkbox" defaultChecked={i !== 1} className="accent-[color:var(--primary)] w-4 h-4" />
              </label>
            ))}
          </div>
        </GlassCard>
      </div>
    </PageShell>
  );
}
