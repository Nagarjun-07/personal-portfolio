import { PageContainer } from "@/components/ui/page-container";
import { Section, SectionTitle } from "@/components/ui/section";
import { ContactForm } from "@/components/contact-form";
import { Card, CardContent } from "@/components/ui/card";
import { Github, Linkedin, Mail, MapPin } from "lucide-react";
import { data } from "@/lib/data";

const contactDetails = [
  { icon: <Mail />, text: data.contact.email, href: `mailto:${data.contact.email}` },
  { icon: <MapPin />, text: data.contact.location },
  { icon: <Linkedin />, text: "Nagarjun-H", href: data.contact.linkedin },
  { icon: <Github />, text: "Nagarjun-07", href: data.contact.github },
];

export default function ContactPage() {
  return (
    <PageContainer>
      <Section id="contact">
        <SectionTitle>Get In Touch</SectionTitle>
        <div className="grid md:grid-cols-2 gap-12">
          <div className="space-y-6">
            <h3 className="text-2xl font-bold font-headline">Contact Information</h3>
            <p className="text-muted-foreground text-lg">
              I'm currently open to new opportunities and collaborations. Feel free to reach out through the form or via my social channels. I'll get back to you as soon as possible!
            </p>
            <Card className="border-2 border-border/60 shadow-lg">
              <CardContent className="p-6 space-y-4">
                {contactDetails.map((detail, index) => (
                  <div key={index} className="flex items-center gap-4">
                    <span className="text-primary">{detail.icon}</span>
                    {detail.href ? (
                      <a href={detail.href} target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary transition-colors">
                        {detail.text}
                      </a>
                    ) : (
                      <span className="text-muted-foreground">{detail.text}</span>
                    )}
                  </div>
                ))}
              </CardContent>
            </Card>
          </div>
          <div>
            <ContactForm />
          </div>
        </div>
      </Section>
    </PageContainer>
  );
}
