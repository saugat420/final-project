import { benefits } from "@/data/site-content";
import { Container } from "../ui/container";
import { Reveal } from "../ui/reveal";
import { SectionHeading } from "../ui/section-heading";

export function BenefitsSection() {
  return (
    <section className="section-space bg-white/70">
      <Container>
        <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
          <Reveal>
            <SectionHeading
              eyebrow="Benefits"
              title="The outcome is not just more leads. It is more control."
              description="When the acquisition system becomes predictable, business owners make better decisions, scale more calmly, and stop relying on random referrals."
            />
          </Reveal>
          <div className="grid gap-4 sm:grid-cols-2">
            {benefits.map((benefit, index) => (
              <Reveal key={benefit} delay={index * 80}>
                <div className="card-surface h-full p-6">
                  <div className="flex items-center gap-4">
                    <div className="flex h-11 w-11 items-center justify-center rounded-full bg-success/12 text-success">
                      ✓
                    </div>
                    <h3 className="text-lg font-semibold text-foreground">{benefit}</h3>
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
