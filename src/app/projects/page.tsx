import { PageContainer } from "@/components/ui/page-container";
import { Section, SectionTitle } from "@/components/ui/section";
import { ProjectCard } from "@/components/project-card";
import { data } from "@/lib/data";

export default function ProjectsPage() {
  return (
    <PageContainer>
      <Section id="projects">
        <SectionTitle>My Projects</SectionTitle>
        <p className="-mt-12 mb-16 text-center text-lg text-muted-foreground max-w-3xl mx-auto">
          Here is a selection of projects I've worked on, showcasing my skills in AI, web development, and more.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {data.projects.map((project, index) => (
            <ProjectCard key={index} project={project} />
          ))}
        </div>
      </Section>
    </PageContainer>
  );
}
