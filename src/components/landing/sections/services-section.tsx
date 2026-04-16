import { services } from "@/data/site-content";
import { Container } from "../ui/container";
import { Reveal } from "../ui/reveal";
import { SectionHeading } from "../ui/section-heading";

export function ServicesSection() {
  return (
    <section id="services" className="section-space bg-white/70">
      <Container>
        <Reveal>
          <SectionHeading
            eyebrow="Services"
            title="Everything needed to turn Meta Ads into a predictable acquisition channel."
            description="Every deliverable is designed to support the same outcome: more qualified leads with less uncertainty."
          />
        </Reveal>
        <div className="mt-12 grid gap-5 md:grid-cols-2 xl:grid-cols-3">
          {services.map((service, index) => (
            <Reveal key={service.title} delay={index * 70}>
              <div className="card-surface h-full p-6">
                <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-primary/10 text-lg font-bold text-primary">
                  {index + 1}
                </div>
                <h3 className="mt-5 text-xl font-semibold text-foreground">
                  {service.title}
                </h3>
                <p className="mt-3 text-sm leading-7 text-muted">
                  {service.description}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  );
}
