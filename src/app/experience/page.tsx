import { PageContainer } from "@/components/ui/page-container";
import { Section, SectionTitle } from "@/components/ui/section";
import { ExperienceTimeline } from "@/components/experience-timeline";
import { data } from "@/lib/data";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Award, BookOpen, Briefcase } from "lucide-react";

export default function ExperiencePage() {
  return (
    <PageContainer>
      <div className="space-y-20">
        <Section id="work-experience">
          <SectionTitle>Work Experience</SectionTitle>
          <ExperienceTimeline items={data.experience} icon={<Briefcase />} />
        </Section>
        
        <Section id="education">
          <SectionTitle>Education</SectionTitle>
          <ExperienceTimeline items={data.education} icon={<BookOpen />} />
        </Section>

        <Section id="certifications">
          <SectionTitle>Certifications & Achievements</SectionTitle>
          <Card className="shadow-lg border-2 border-border/60">
            <CardContent className="p-6">
              <ul className="space-y-4">
                {data.certifications.map((cert, index) => (
                  <li key={index} className="flex items-start gap-4">
                    <Award className="h-6 w-6 mt-1 text-primary shrink-0" />
                    <span className="text-lg text-muted-foreground">{cert}</span>
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>
        </Section>
      </div>
    </PageContainer>
  );
}
