import Link from "next/link";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Github, ExternalLink } from "lucide-react";

type Project = {
  title: string;
  tech: string[];
  date: string;
  description: string;
  link?: string;
  github?: string;
};

export function ProjectCard({ project }: { project: Project }) {
  return (
    <Card className="group flex flex-col h-full overflow-hidden transition-all duration-300 ease-in-out hover:shadow-2xl hover:-translate-y-1 border-2 border-border/60">
      <CardHeader>
        <CardTitle className="font-headline text-2xl">{project.title}</CardTitle>
        <CardDescription>{project.date}</CardDescription>
      </CardHeader>
      <CardContent className="flex-grow">
        <p className="text-muted-foreground mb-4">{project.description}</p>
        <div className="flex flex-wrap gap-2">
          {project.tech.map((tech) => (
            <Badge key={tech} variant="secondary">{tech}</Badge>
          ))}
        </div>
      </CardContent>
      <CardFooter className="mt-auto bg-secondary/20 p-4">
        <div className="flex w-full justify-end gap-2">
          {project.github && (
            <Button variant="ghost" size="icon" asChild>
              <Link href={project.github} target="_blank" rel="noopener noreferrer" aria-label="GitHub">
                <Github className="h-5 w-5" />
                <span className="sr-only">GitHub</span>
              </Link>
            </Button>
          )}
          {project.link && (
            <Button variant="outline" asChild>
              <Link href={project.link} target="_blank" rel="noopener noreferrer">
                <ExternalLink className="mr-2 h-4 w-4" />
                Live Demo
              </Link>
            </Button>
          )}
        </div>
      </CardFooter>
    </Card>
  );
}
