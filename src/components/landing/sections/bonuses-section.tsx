import { bonuses } from "@/data/site-content";
import { Container } from "../ui/container";
import { Reveal } from "../ui/reveal";
import { SectionHeading } from "../ui/section-heading";

export function BonusesSection() {
  return (
    <section className="section-space bg-white/70">
      <Container>
        <Reveal>
          <SectionHeading
            eyebrow="Bonuses"
            title="Extra assets that help you move faster after launch."
            description="These bonuses reduce creative bottlenecks, sharpen your market positioning, and help your sales conversations convert better."
          />
        </Reveal>
        <div className="mt-10 grid gap-5 md:grid-cols-3">
          {bonuses.map((bonus, index) => (
            <Reveal key={bonus} delay={index * 100}>
              <div className="card-surface h-full p-6">
                <p className="text-2xl">🎁</p>
                <h3 className="mt-4 text-xl font-semibold text-foreground">{bonus}</h3>
              </div>
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  );
}
