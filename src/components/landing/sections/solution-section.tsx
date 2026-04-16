import { solutionPillars } from "@/data/site-content";
import { Container } from "../ui/container";
import { Reveal } from "../ui/reveal";
import { SectionHeading } from "../ui/section-heading";

export function SolutionSection() {
  return (
    <section className="section-space bg-white/70">
      <Container>
        <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
          <Reveal>
            <SectionHeading
              eyebrow="The Solution"
              title="We install a 30-Day Predictable Leads System."
              description="The difference is simple: system over ads. Ads bring attention, but landing pages, follow-up, and tracking are what turn attention into qualified customers."
            />
          </Reveal>
          <div className="grid gap-4">
            {solutionPillars.map((pillar, index) => (
              <Reveal key={pillar} delay={index * 80}>
                <div className="card-surface flex items-start gap-4 p-6">
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-primary text-sm font-bold text-white">
                    {index + 1}
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-foreground">{pillar}</h3>
                    <p className="mt-2 text-sm leading-7 text-muted">
                      Each piece is designed to move cold traffic into booked calls,
                      WhatsApp conversations, or qualified form submissions.
                    </p>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}
