import { urgencyPoints } from "@/data/site-content";
import { ButtonLink } from "../ui/button-link";
import { Container } from "../ui/container";
import { Reveal } from "../ui/reveal";

export function UrgencySection() {
  return (
    <section className="section-space bg-white/70">
      <Container>
        <Reveal>
          <div className="card-surface grid gap-8 p-8 lg:grid-cols-[1.1fr_0.9fr] lg:items-center lg:p-10">
            <div>
              <span className="eyebrow">Urgency</span>
              <h2 className="mt-5 font-display text-3xl font-bold leading-tight text-balance text-foreground sm:text-4xl">
                Limited capacity keeps the work hands-on and the optimization real.
              </h2>
            </div>
            <div>
              <div className="space-y-3">
                {urgencyPoints.map((point) => (
                  <div
                    key={point}
                    className="rounded-[22px] border border-line bg-white px-5 py-4 text-sm font-semibold text-foreground"
                  >
                    {point}
                  </div>
                ))}
              </div>
              <ButtonLink href="#contact-form" className="mt-6 w-full">
                Reserve Your Spot
              </ButtonLink>
            </div>
          </div>
        </Reveal>
      </Container>
    </section>
  );
}
