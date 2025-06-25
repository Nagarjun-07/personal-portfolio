import { PageContainer } from "@/components/ui/page-container";
import { Section, SectionTitle } from "@/components/ui/section";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { Github, Linkedin, Mail } from "lucide-react";
import { data } from "@/lib/data";
import { AboutMeEditor } from "@/components/ai/about-me-editor";

export default function Home() {
  return (
    <PageContainer>
      <div className="space-y-16 md:space-y-24">
        {/* Hero Section */}
        <Section id="hero" className="text-center">
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-black mb-4 animate-fade-in-up" style={{ animationDelay: "0.2s" }}>
            {data.name}
          </h1>
          <p className="text-xl md:text-2xl text-primary max-w-3xl mx-auto mb-8 animate-fade-in-up" style={{ animationDelay: "0.4s" }}>
            {data.headline}
          </p>
          <div className="flex justify-center items-center gap-4 animate-fade-in-up" style={{ animationDelay: "0.6s" }}>
            <Button asChild>
              <a href={`mailto:${data.contact.email}`}>
                <Mail /> Get in Touch
              </a>
            </Button>
            <Button variant="secondary" asChild>
              <Link href="/projects">View My Work</Link>
            </Button>
          </div>
        </Section>

        {/* About Section */}
        <Section id="about">
          <SectionTitle>About Me</SectionTitle>
          <div className="grid md:grid-cols-5 gap-8 md:gap-12 items-start">
            <div className="md:col-span-3 space-y-4 text-lg text-muted-foreground leading-relaxed">
              <p>
                I'm a passionate and driven software engineer with a strong foundation in machine learning, cloud technologies, and full-stack web development. My journey in tech has been fueled by a desire to build innovative solutions that solve real-world problems.
              </p>
              <p>
                From developing AI-powered SaaS platforms to creating intelligent data extraction tools, I thrive on tackling challenges and continuously learning. I am a collaborative team player with leadership experience, dedicated to delivering high-quality, scalable, and user-centric applications.
              </p>
            </div>
            <div className="md:col-span-2">
              <AboutMeEditor />
            </div>
          </div>
        </Section>

        {/* Skills Section */}
        <Section id="skills">
          <SectionTitle>Technical Skills</SectionTitle>
          <Card className="shadow-lg border-2 border-border/60">
            <CardContent className="p-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {Object.entries(data.skills).map(([category, skills]) => (
                  <div key={category}>
                    <h3 className="text-xl font-bold mb-4 capitalize font-headline">{category.replace(/_/g, ' ')}</h3>
                    <div className="flex flex-wrap gap-2">
                      {skills.map((skill) => (
                        <Badge key={skill} variant="secondary" className="text-sm px-3 py-1">{skill}</Badge>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </Section>
      </div>
    </PageContainer>
  );
}
