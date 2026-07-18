import { createFileRoute, Link } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { Zap, Mail, Lock } from "lucide-react";

export const Route = createFileRoute("/auth/login")({ component: Login });

function Login() {
  return (
    <div className="min-h-screen grid place-items-center px-4 py-8">
      <motion.div initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} className="glass-strong rounded-3xl p-8 w-full max-w-md">
        <div className="w-14 h-14 rounded-2xl gradient-primary grid place-items-center shadow-glow mb-4"><Zap className="w-7 h-7 text-white" /></div>
        <h1 className="text-2xl font-bold font-display">Welcome back</h1>
        <p className="text-sm text-muted-foreground mt-1">Sign in to continue your journey</p>
        <form className="mt-6 space-y-3">
          <div className="relative">
            <Mail className="w-4 h-4 absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground" />
            <input type="email" placeholder="Email" className="w-full bg-secondary/60 border border-border/50 rounded-xl pl-10 pr-3 py-3 text-sm outline-none focus:ring-2 focus:ring-ring/50" />
          </div>
          <div className="relative">
            <Lock className="w-4 h-4 absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground" />
            <input type="password" placeholder="Password" className="w-full bg-secondary/60 border border-border/50 rounded-xl pl-10 pr-3 py-3 text-sm outline-none focus:ring-2 focus:ring-ring/50" />
          </div>
          <div className="flex justify-between text-xs">
            <label className="flex items-center gap-2"><input type="checkbox" className="accent-[color:var(--primary)]" /> Remember me</label>
            <Link to="/auth/forgot" className="text-primary font-medium">Forgot password?</Link>
          </div>
          <Link to="/" className="block text-center rounded-xl gradient-primary text-white py-3 text-sm font-semibold shadow-soft">Sign in</Link>
        </form>
        <div className="text-center text-sm text-muted-foreground mt-4">
          New here? <Link to="/auth/register" className="text-primary font-medium">Create account</Link>
        </div>
      </motion.div>
    </div>
  );
}
