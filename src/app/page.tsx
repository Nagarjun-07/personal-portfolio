import { PageContainer } from "@/components/ui/page-container";
import { Section, SectionTitle } from "@/components/ui/section";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { Mail, User, Wrench, Award } from "lucide-react";
import { data } from "@/lib/data";

export default function Home() {
  return (
    <>
      <PageContainer>
        {/* New Hero Section */}
        <section id="hero" className="text-center py-20 md:py-32">
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-black mb-4 bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
            {data.name}
          </h1>
          <p className="text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto mb-8">
            {data.headline}
          </p>
          <div className="flex flex-wrap justify-center items-center gap-4">
            <Button asChild size="lg">
              <a href={`mailto:${data.contact.email}`}>
                <Mail /> Get in Touch
              </a>
            </Button>
            <Button variant="secondary" asChild size="lg">
              <Link href="/projects">View My Work</Link>
            </Button>
            <Button variant="secondary" asChild size="lg">
              <Link href="/experience">My Experience</Link>
            </Button>
            <Button variant="secondary" asChild size="lg">
              <a href="https://github.com/Nagarjun-07/Certifications" target="_blank" rel="noopener noreferrer">
                <Award className="mr-2 h-4 w-4" /> Certificates
              </a>
            </Button>
          </div>
        </section>

        <div className="space-y-16 md:space-y-24">
          {/* About Section */}
          <Section id="about">
            <SectionTitle>
              <User className="inline-block mr-4 -mt-2 text-primary" />
              About Me
            </SectionTitle>
            <div className="space-y-4 text-lg text-muted-foreground leading-relaxed max-w-4xl mx-auto text-center">
              <p>
                I'm a passionate and driven software engineer with a strong foundation in machine learning, cloud technologies, and full-stack web development. My journey in tech has been fueled by a desire to build innovative solutions that solve real-world problems.
              </p>
              <p>
                From developing AI-powered SaaS platforms to creating intelligent data extraction tools, I thrive on tackling challenges and continuously learning. I am a collaborative team player with leadership experience, dedicated to delivering high-quality, scalable, and user-centric applications.
              </p>
            </div>
          </Section>

          {/* Skills Section */}
          <Section id="skills">
            <SectionTitle>
              <Wrench className="inline-block mr-4 -mt-2 text-primary" />
              Skills
            </SectionTitle>
            <Card className="shadow-lg border-2 border-border/60">
              <CardContent className="p-6">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
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
    </>
  );
}
