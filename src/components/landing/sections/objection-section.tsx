import { objections } from "@/data/site-content";
import { Container } from "../ui/container";
import { Reveal } from "../ui/reveal";
import { SectionHeading } from "../ui/section-heading";

export function ObjectionSection() {
  return (
    <section className="section-space">
      <Container>
        <Reveal>
          <SectionHeading
            eyebrow="Objection Handling"
            title="The common reasons people hesitate are exactly what this system is built to solve."
            description="Strong lead generation is not about blind optimism. It is about reducing risk, increasing visibility, and building the right process around the ads."
          />
        </Reveal>
        <div className="mt-12 grid gap-5 lg:grid-cols-2">
          {objections.map((item, index) => (
            <Reveal key={item.question} delay={index * 90}>
              <div className="card-surface h-full p-6 sm:p-8">
                <h3 className="text-xl font-semibold text-foreground">
                  {item.question}
                </h3>
                <p className="mt-4 text-sm leading-7 text-muted">{item.answer}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  );
}
