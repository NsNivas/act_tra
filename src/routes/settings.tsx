import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { Moon, Sun, Bell, Globe, Ruler, Shield, Info } from "lucide-react";
import { PageShell } from "@/components/layout/PageShell";
import { GlassCard } from "@/components/widgets/GlassCard";

export const Route = createFileRoute("/settings")({ component: SettingsPage });

function SettingsPage() {
  const [dark, setDark] = useState(false);
  const [units, setUnits] = useState<"metric" | "imperial">("metric");
  const [lang, setLang] = useState("English");

  const toggleTheme = () => {
    const next = !dark;
    setDark(next);
    document.documentElement.classList.toggle("dark", next);
  };

  return (
    <PageShell title="Settings" subtitle="Personalize your experience">
      <div className="space-y-4 max-w-3xl">
        <GlassCard>
          <div className="flex items-center gap-2 mb-3">{dark ? <Moon className="w-4 h-4 text-primary" /> : <Sun className="w-4 h-4 text-primary" />}<h3 className="font-semibold">Appearance</h3></div>
          <div className="flex items-center justify-between rounded-xl bg-secondary/60 p-3">
            <div>
              <div className="font-medium text-sm">Dark mode</div>
              <div className="text-xs text-muted-foreground">Switch between light and dark themes</div>
            </div>
            <button
              onClick={toggleTheme}
              className={`relative w-12 h-7 rounded-full transition ${dark ? "gradient-primary" : "bg-secondary border border-border"}`}
            >
              <span className={`absolute top-0.5 w-6 h-6 rounded-full bg-white shadow transition-all ${dark ? "left-[22px]" : "left-0.5"}`} />
            </button>
          </div>
        </GlassCard>

        <GlassCard>
          <div className="flex items-center gap-2 mb-3"><Bell className="w-4 h-4 text-primary" /><h3 className="font-semibold">Notifications</h3></div>
          <div className="space-y-2">
            {["Workout reminders", "Water reminders", "Sleep reminders", "Achievement alerts", "Weekly summary"].map((label, i) => (
              <label key={label} className="flex items-center justify-between rounded-xl bg-secondary/60 p-3">
                <span className="text-sm">{label}</span>
                <input type="checkbox" defaultChecked={i < 4} className="accent-[color:var(--primary)] w-4 h-4" />
              </label>
            ))}
          </div>
        </GlassCard>

        <GlassCard>
          <div className="flex items-center gap-2 mb-3"><Ruler className="w-4 h-4 text-primary" /><h3 className="font-semibold">Units</h3></div>
          <div className="grid grid-cols-2 gap-2">
            {(["metric", "imperial"] as const).map((u) => (
              <button
                key={u}
                onClick={() => setUnits(u)}
                className={`rounded-xl p-3 text-sm font-medium capitalize transition ${units === u ? "gradient-primary text-white shadow-soft" : "bg-secondary"}`}
              >
                {u} {u === "metric" ? "(kg, cm, km)" : "(lb, in, mi)"}
              </button>
            ))}
          </div>
        </GlassCard>

        <GlassCard>
          <div className="flex items-center gap-2 mb-3"><Globe className="w-4 h-4 text-primary" /><h3 className="font-semibold">Language</h3></div>
          <select value={lang} onChange={(e) => setLang(e.target.value)} className="w-full rounded-xl bg-secondary/60 border border-border/50 p-3 text-sm outline-none">
            {["English", "Español", "Français", "Deutsch", "日本語", "中文"].map((l) => <option key={l}>{l}</option>)}
          </select>
        </GlassCard>

        <GlassCard>
          <div className="flex items-center gap-2 mb-3"><Shield className="w-4 h-4 text-primary" /><h3 className="font-semibold">Privacy</h3></div>
          <div className="space-y-2">
            {["Data export", "Delete account", "Manage sessions", "Third-party integrations"].map((label) => (
              <button key={label} className="w-full flex items-center justify-between rounded-xl bg-secondary/60 p-3 text-sm hover:bg-accent transition">
                <span>{label}</span>
                <span className="text-muted-foreground">→</span>
              </button>
            ))}
          </div>
        </GlassCard>

        <GlassCard>
          <div className="flex items-center gap-2 mb-3"><Info className="w-4 h-4 text-primary" /><h3 className="font-semibold">About</h3></div>
          <div className="text-sm text-muted-foreground">Version 2.4.1 · Build 2026.11 · Terms · Privacy · Support</div>
        </GlassCard>
      </div>
    </PageShell>
  );
}
