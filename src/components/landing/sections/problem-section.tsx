import { problemPoints } from "@/data/site-content";
import { Container } from "../ui/container";
import { Reveal } from "../ui/reveal";
import { SectionHeading } from "../ui/section-heading";

export function ProblemSection() {
  return (
    <section className="section-space">
      <Container>
        <Reveal>
          <SectionHeading
            eyebrow="The Problem"
            title="Wasted ad spend usually comes from confusion, not lack of effort."
            description="Most business owners are not short on activity. They are short on a reliable system. That leads to frustration, unclear data, and money being spent without confidence."
          />
        </Reveal>
        <div className="mt-10 grid gap-5 md:grid-cols-2 xl:grid-cols-5">
          {problemPoints.map((point, index) => (
            <Reveal key={point} delay={index * 80}>
              <div className="card-surface h-full p-6">
                <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-accent-soft text-lg font-bold text-accent">
                  0{index + 1}
                </div>
                <p className="mt-5 text-lg font-semibold leading-8 text-foreground">
                  {point}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  );
}
