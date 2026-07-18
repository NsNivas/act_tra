import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Sparkles, Send, Dumbbell, Apple, Heart, Zap } from "lucide-react";
import { PageShell } from "@/components/layout/PageShell";
import { GlassCard } from "@/components/widgets/GlassCard";

export const Route = createFileRoute("/ai-coach")({ component: AICoachPage });

const suggested = [
  "Build me a 4-week strength plan",
  "What should I eat post-workout?",
  "Why am I not losing weight?",
  "Best mobility routine for desk workers",
];

const tips = [
  { icon: Dumbbell, title: "Progressive Overload", text: "Add 2.5kg or 1 rep this week — small, consistent gains beat spikes." },
  { icon: Apple, title: "Protein Timing", text: "Aim for 30–40g protein within 2 hours of training for optimal recovery." },
  { icon: Heart, title: "Zone 2 Cardio", text: "Two 30-min Zone 2 sessions per week improves recovery between lifts." },
  { icon: Zap, title: "Sleep Debt", text: "One hour extra tonight will restore reaction time and mood by tomorrow." },
];

type Msg = { role: "user" | "assistant"; content: string };

function AICoachPage() {
  const [messages, setMessages] = useState<Msg[]>([
    { role: "assistant", content: "Hey Alex! 👋 I'm your AI Coach. I've analyzed your last 30 days — you're trending strong. What would you like to focus on today?" },
  ]);
  const [input, setInput] = useState("");

  const send = (text: string) => {
    if (!text.trim()) return;
    setMessages((m) => [...m, { role: "user", content: text }]);
    setInput("");
    setTimeout(() => {
      setMessages((m) => [...m, {
        role: "assistant",
        content: "Great question! Based on your recent data, I recommend focusing on progressive overload for your upper body. Try 4 sets of 6-8 reps at 75% 1RM this week, and prioritize 8+ hours of sleep to maximize adaptation. Want me to build a full plan?",
      }]);
    }, 600);
  };

  return (
    <PageShell title="AI Coach" subtitle="Your intelligent training companion">
      <div className="grid lg:grid-cols-3 gap-4">
        <GlassCard strong className="lg:col-span-2 flex flex-col h-[70vh] min-h-[500px]">
          <div className="flex items-center gap-3 pb-4 border-b border-border/50">
            <div className="w-10 h-10 rounded-xl gradient-primary text-white grid place-items-center shadow-glow"><Sparkles className="w-5 h-5" /></div>
            <div>
              <div className="font-semibold">Fitness AI</div>
              <div className="text-xs text-primary flex items-center gap-1.5"><span className="w-1.5 h-1.5 rounded-full bg-primary animate-pulse" /> Online</div>
            </div>
          </div>

          <div className="flex-1 overflow-y-auto py-4 space-y-3">
            <AnimatePresence initial={false}>
              {messages.map((m, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 8 }} animate={{ opacity: 1, y: 0 }}
                  className={`flex ${m.role === "user" ? "justify-end" : "justify-start"}`}
                >
                  <div className={`max-w-[80%] rounded-2xl px-4 py-2.5 text-sm ${
                    m.role === "user" ? "gradient-primary text-white shadow-soft" : "bg-secondary text-foreground"
                  }`}>
                    {m.content}
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </div>

          <div className="pt-3 border-t border-border/50">
            <div className="flex flex-wrap gap-2 mb-3">
              {suggested.map((s) => (
                <button key={s} onClick={() => send(s)} className="text-xs bg-secondary hover:bg-accent transition rounded-full px-3 py-1.5">
                  {s}
                </button>
              ))}
            </div>
            <form onSubmit={(e) => { e.preventDefault(); send(input); }} className="flex gap-2">
              <input
                value={input} onChange={(e) => setInput(e.target.value)}
                placeholder="Ask about training, nutrition, recovery..."
                className="flex-1 bg-secondary/60 border border-border/50 rounded-xl px-4 py-2.5 text-sm outline-none focus:ring-2 focus:ring-ring/50"
              />
              <button type="submit" className="w-11 h-11 rounded-xl gradient-primary text-white grid place-items-center shadow-soft">
                <Send className="w-4 h-4" />
              </button>
            </form>
          </div>
        </GlassCard>

        <div className="space-y-4">
          <GlassCard>
            <h3 className="font-semibold mb-3">Daily Health Tips</h3>
            <div className="space-y-3">
              {tips.map((t) => {
                const Icon = t.icon;
                return (
                  <div key={t.title} className="flex gap-3">
                    <div className="w-9 h-9 rounded-lg bg-primary/10 text-primary grid place-items-center shrink-0"><Icon className="w-4 h-4" /></div>
                    <div>
                      <div className="font-semibold text-sm">{t.title}</div>
                      <div className="text-xs text-muted-foreground">{t.text}</div>
                    </div>
                  </div>
                );
              })}
            </div>
          </GlassCard>

          <GlassCard className="relative overflow-hidden gradient-primary text-white">
            <div className="absolute -right-6 -bottom-6 w-32 h-32 rounded-full bg-white/10 blur-2xl" />
            <div className="relative">
              <div className="text-xs uppercase tracking-wider opacity-90">Motivation</div>
              <p className="font-display font-bold text-xl mt-2 leading-tight">"Discipline is choosing between what you want now and what you want most."</p>
              <div className="text-xs opacity-80 mt-3">— Abraham Lincoln</div>
            </div>
          </GlassCard>
        </div>
      </div>
    </PageShell>
  );
}
