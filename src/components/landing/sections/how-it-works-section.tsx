import { steps } from "@/data/site-content";
import { Container } from "../ui/container";
import { Reveal } from "../ui/reveal";
import { SectionHeading } from "../ui/section-heading";

export function HowItWorksSection() {
  return (
    <section id="how-it-works" className="section-space">
      <Container>
        <Reveal>
          <SectionHeading
            eyebrow="How It Works"
            title="A simple four-step path from ad chaos to consistent lead flow."
            description="You do not need more tactics piled on top of each other. You need one clear process that is easy to understand and easy to optimize."
            align="center"
          />
        </Reveal>
        <div className="mt-12 grid gap-5 lg:grid-cols-4">
          {steps.map((step, index) => (
            <Reveal key={step.title} delay={index * 90}>
              <div className="card-surface relative h-full p-6">
                <div className="absolute left-6 top-6 h-16 w-16 rounded-full bg-surface-strong" />
                <div className="relative">
                  <p className="font-display text-5xl font-bold text-primary/20">
                    0{index + 1}
                  </p>
                  <h3 className="mt-6 text-xl font-semibold text-foreground">
                    {step.title}
                  </h3>
                  <p className="mt-3 text-sm leading-7 text-muted">
                    {step.description}
                  </p>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  );
}
