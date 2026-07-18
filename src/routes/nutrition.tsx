import { createFileRoute } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { useState } from "react";
import { Plus, Droplets, Coffee, Sandwich, Utensils, Cookie } from "lucide-react";
import { PageShell } from "@/components/layout/PageShell";
import { GlassCard } from "@/components/widgets/GlassCard";
import { CircularProgress } from "@/components/widgets/CircularProgress";
import { foodDiary } from "@/lib/mock-data";

export const Route = createFileRoute("/nutrition")({ component: NutritionPage });

const meals = [
  { id: "breakfast", label: "Breakfast", icon: Coffee, items: foodDiary.breakfast },
  { id: "lunch", label: "Lunch", icon: Sandwich, items: foodDiary.lunch },
  { id: "dinner", label: "Dinner", icon: Utensils, items: foodDiary.dinner },
  { id: "snacks", label: "Snacks", icon: Cookie, items: foodDiary.snacks },
];

function NutritionPage() {
  const [water, setWater] = useState(6);
  const waterGoal = 10;

  const totals = meals.reduce(
    (acc, m) => {
      m.items.forEach((it) => {
        acc.calories += it.calories; acc.protein += it.protein; acc.carbs += it.carbs; acc.fat += it.fat;
      });
      return acc;
    },
    { calories: 0, protein: 0, carbs: 0, fat: 0 }
  );
  const caloriesGoal = 2400, proteinGoal = 160, carbsGoal = 260, fatGoal = 80;

  return (
    <PageShell title="Nutrition" subtitle="Fuel smart, hit macros">
      <div className="grid lg:grid-cols-3 gap-4 mb-4">
        <GlassCard strong className="lg:col-span-2">
          <div className="flex items-center justify-between mb-4">
            <div>
              <h3 className="font-semibold">Daily Macros</h3>
              <p className="text-xs text-muted-foreground">Progress rings toward your targets</p>
            </div>
            <div className="text-right">
              <div className="text-2xl font-bold font-display">{totals.calories}</div>
              <div className="text-xs text-muted-foreground">/ {caloriesGoal} kcal</div>
            </div>
          </div>
          <div className="grid grid-cols-4 gap-3 place-items-center">
            <div className="text-center">
              <CircularProgress value={totals.calories} max={caloriesGoal} size={110} stroke={10} color="#22c55e" label={`${Math.round((totals.calories/caloriesGoal)*100)}%`} sublabel="Calories" />
            </div>
            <div className="text-center">
              <CircularProgress value={totals.protein} max={proteinGoal} size={110} stroke={10} color="#ef4444" label={`${totals.protein}g`} sublabel="Protein" />
            </div>
            <div className="text-center">
              <CircularProgress value={totals.carbs} max={carbsGoal} size={110} stroke={10} color="#f59e0b" label={`${totals.carbs}g`} sublabel="Carbs" />
            </div>
            <div className="text-center">
              <CircularProgress value={totals.fat} max={fatGoal} size={110} stroke={10} color="#8b5cf6" label={`${totals.fat}g`} sublabel="Fat" />
            </div>
          </div>
        </GlassCard>

        <GlassCard strong>
          <div className="flex items-center gap-2 mb-2"><Droplets className="w-4 h-4 text-[color:var(--water)]" /><h3 className="font-semibold">Water Intake</h3></div>
          <div className="text-3xl font-bold font-display">{(water * 0.25).toFixed(2)} <span className="text-sm text-muted-foreground font-normal">/ {(waterGoal*0.25).toFixed(1)} L</span></div>
          <div className="grid grid-cols-10 gap-1.5 mt-4">
            {Array.from({ length: waterGoal }).map((_, i) => (
              <button
                key={i}
                onClick={() => setWater(i + 1 === water ? i : i + 1)}
                className={`h-10 rounded-lg transition ${i < water ? "bg-gradient-to-b from-[color:var(--water)] to-blue-500 shadow-soft" : "bg-secondary"}`}
              />
            ))}
          </div>
          <button onClick={() => setWater((w) => Math.min(waterGoal, w + 1))} className="mt-4 w-full py-2.5 rounded-xl gradient-primary text-white text-sm font-medium shadow-soft flex items-center justify-center gap-2">
            <Plus className="w-4 h-4" /> Add 250ml
          </button>
        </GlassCard>
      </div>

      <div className="grid md:grid-cols-2 gap-4">
        {meals.map((m) => {
          const cal = m.items.reduce((s, i) => s + i.calories, 0);
          const Icon = m.icon;
          return (
            <GlassCard key={m.id}>
              <div className="flex items-center justify-between mb-3">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl gradient-primary text-white grid place-items-center"><Icon className="w-4 h-4" /></div>
                  <div>
                    <div className="font-semibold text-sm">{m.label}</div>
                    <div className="text-xs text-muted-foreground">{cal} kcal · {m.items.length} items</div>
                  </div>
                </div>
                <button className="w-8 h-8 rounded-lg bg-secondary grid place-items-center hover:bg-accent transition"><Plus className="w-4 h-4" /></button>
              </div>
              <div className="space-y-2">
                {m.items.map((it, i) => (
                  <motion.div key={i} whileHover={{ x: 2 }} className="flex items-center justify-between rounded-xl bg-white/40 border border-border/50 p-3">
                    <div className="min-w-0">
                      <div className="text-sm font-medium truncate">{it.name}</div>
                      <div className="text-xs text-muted-foreground">P {it.protein}g · C {it.carbs}g · F {it.fat}g</div>
                    </div>
                    <div className="text-sm font-semibold text-primary">{it.calories}</div>
                  </motion.div>
                ))}
              </div>
            </GlassCard>
          );
        })}
      </div>
    </PageShell>
  );
}
