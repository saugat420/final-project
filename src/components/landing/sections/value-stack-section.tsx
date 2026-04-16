import { valueStack } from "@/data/site-content";
import { Container } from "../ui/container";
import { Reveal } from "../ui/reveal";
import { SectionHeading } from "../ui/section-heading";

export function ValueStackSection() {
  return (
    <section className="section-space">
      <Container>
        <Reveal>
          <SectionHeading
            eyebrow="What’s Included"
            title="A value stack built around lead quality, speed-to-contact, and conversion."
            description="You are not paying for disconnected deliverables. You are getting every moving part required to make Meta Ads perform like a sales system."
            align="center"
          />
        </Reveal>
        <div className="mt-12 grid gap-5 lg:grid-cols-5">
          {valueStack.map((item, index) => (
            <Reveal key={item} delay={index * 80}>
              <div className="card-surface h-full p-6 text-center">
                <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-primary text-lg font-bold text-white">
                  {index + 1}
                </div>
                <h3 className="mt-5 text-lg font-semibold leading-8 text-foreground">
                  {item}
                </h3>
              </div>
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  );
}
