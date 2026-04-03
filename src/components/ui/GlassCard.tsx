import type { ReactNode } from "react";

type GlassCardProps = {
  children: ReactNode;
  className?: string;
};

export function GlassCard({ children, className = "" }: GlassCardProps) {
  return <article className={`glass rounded-2xl p-6 shadow-soft ${className}`}>{children}</article>;
}
