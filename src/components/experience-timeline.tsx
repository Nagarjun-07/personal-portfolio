import { cn } from "@/lib/utils";

type TimelineItem = {
  role?: string;
  company?: string;
  degree?: string;
  institution?: string;
  duration: string;
  location?: string;
  description: string | string[];
};

interface ExperienceTimelineProps {
  items: TimelineItem[];
  icon?: React.ReactNode;
}

export function ExperienceTimeline({ items, icon }: ExperienceTimelineProps) {
  return (
    <div className="relative">
      <div className="absolute left-5 md:left-1/2 top-0 h-full w-0.5 bg-border -translate-x-1/2"></div>
      {items.map((item, index) => (
        <div key={index} className="relative flex items-start md:grid md:grid-cols-2 gap-8 mb-12">
          {/* Left Side (Desktop) / Empty on Mobile */}
          <div className={cn("hidden md:block", index % 2 === 0 ? "md:order-1 text-right" : "md:order-2 text-left")}>
            <p className="text-muted-foreground font-semibold">{item.duration}</p>
            {item.location && <p className="text-muted-foreground text-sm">{item.location}</p>}
          </div>

          {/* Timeline Dot */}
          <div className="absolute left-5 top-1 md:left-1/2 h-6 w-6 bg-background rounded-full border-4 border-primary flex items-center justify-center -translate-x-1/2">
            {icon && <div className="text-primary">{icon}</div>}
          </div>

          {/* Right Side (Desktop) / Main Content on Mobile */}
          <div className={cn("ml-12 md:ml-0 flex-1", index % 2 === 0 ? "md:order-2" : "md:order-1 md:text-right")}>
             <div className="bg-card/80 backdrop-blur-sm p-6 rounded-lg border-2 border-primary/20 shadow-xl shadow-primary/10 transition-all hover:shadow-primary/20 hover:border-primary/30">
              <h3 className="text-xl font-bold font-headline">{item.role || item.degree}</h3>
              <p className="text-primary font-semibold mb-3">{item.company || item.institution}</p>
              <div className="md:hidden mb-2">
                 <p className="text-muted-foreground font-semibold text-sm">{item.duration}</p>
                 {item.location && <p className="text-muted-foreground text-xs">{item.location}</p>}
              </div>
              {Array.isArray(item.description) ? (
                <ul className="list-disc list-inside space-y-2 text-muted-foreground">
                  {item.description.map((point, i) => <li key={i}>{point}</li>)}
                </ul>
              ) : (
                <p className="text-muted-foreground">{item.description}</p>
              )}
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
