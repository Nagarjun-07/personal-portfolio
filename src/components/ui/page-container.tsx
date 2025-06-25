import { cn } from "@/lib/utils";
import type { ReactNode } from "react";

export function PageContainer({
  className,
  children,
}: {
  className?: string;
  children: ReactNode;
}) {
  return (
    <div
      // The animation class is applied here
      className={cn(
        "container mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-20 animate-fade-in-up",
        className
      )}
    >
      {children}
    </div>
  );
}
