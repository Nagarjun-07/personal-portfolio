import Image from "next/image";
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
  image: string;
  aiHint: string;
  link?: string;
  github?: string;
};

export function ProjectCard({ project }: { project: Project }) {
  return (
    <Card className="group flex flex-col h-full overflow-hidden transition-all duration-300 ease-in-out hover:shadow-2xl hover:-translate-y-1 border-2 border-border/60">
      <CardHeader className="p-0">
        <div className="aspect-[3/2] relative overflow-hidden">
          <Image
            src={project.image}
            alt={project.title}
            fill
            className="object-cover rounded-t-lg transition-transform duration-500 ease-in-out group-hover:scale-105"
            data-ai-hint={project.aiHint}
          />
           <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-black/10 to-transparent group-hover:from-black/40 transition-all duration-300"></div>
        </div>
        <div className="p-6">
            <CardTitle className="font-headline text-2xl">{project.title}</CardTitle>
            <CardDescription>{project.date}</CardDescription>
        </div>
      </CardHeader>
      <CardContent className="flex-grow pt-0 px-6">
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
