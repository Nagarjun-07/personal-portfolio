import { cn } from "@/lib/utils";
import type { ReactNode } from "react";

export function Section({
  id,
  className,
  children,
}: {
  id?: string;
  className?: string;
  children: ReactNode;
}) {
  return (
    <section id={id} className={cn("py-12 md:py-16", className)}>
      {children}
    </section>
  );
}

export function SectionTitle({
  className,
  children,
}: {
  className?: string;
  children: ReactNode;
}) {
  return (
    <h2
      className={cn(
        "text-4xl md:text-5xl font-extrabold text-center font-headline mb-12 md:mb-16 tracking-tight",
        className
      )}
    >
      {children}
    </h2>
  );
}
