import { clientLogos, proofBlocks, proofStats } from "@/data/site-content";
import { Container } from "../ui/container";
import { Reveal } from "../ui/reveal";
import { SectionHeading } from "../ui/section-heading";

export function SocialProofSection() {
  return (
    <section id="proof" className="section-space">
      <Container>
        <Reveal>
          <SectionHeading
            eyebrow="Social Proof"
            title="Built to feel credible before the first call ever happens."
            description="Use these proof areas to show business owners that the system is tested, measured, and focused on qualified lead generation."
          />
        </Reveal>
        <Reveal delay={80}>
          <div className="mt-10 card-surface p-6 sm:p-8">
            <p className="text-sm font-semibold uppercase tracking-[0.24em] text-muted-soft">
              Client Logos Placeholder
            </p>
            <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-5">
              {clientLogos.map((logo) => (
                <div
                  key={logo}
                  className="rounded-[22px] border border-dashed border-line bg-slate-50 px-5 py-6 text-center text-sm font-semibold text-muted"
                >
                  {logo}
                </div>
              ))}
            </div>
          </div>
        </Reveal>
        <div className="mt-8 grid gap-5 lg:grid-cols-[0.75fr_1.25fr]">
          <Reveal delay={120}>
            <div className="card-surface h-full p-6 sm:p-8">
              <p className="text-sm font-semibold uppercase tracking-[0.24em] text-muted-soft">
                Stats Snapshot
              </p>
              <div className="mt-6 space-y-5">
                {proofStats.map((stat) => (
                  <div key={stat.label} className="rounded-[22px] bg-slate-50 p-5">
                    <p className="font-display text-4xl font-bold text-foreground">
                      {stat.value}
                    </p>
                    <p className="mt-2 text-sm text-muted">{stat.label}</p>
                  </div>
                ))}
              </div>
            </div>
          </Reveal>
          <div className="grid gap-5">
            {proofBlocks.map((block, index) => (
              <Reveal key={block.label} delay={180 + index * 70}>
                <div className="card-surface p-6 sm:p-8">
                  <div className="flex items-center justify-between gap-4">
                    <p className="text-sm font-semibold uppercase tracking-[0.24em] text-primary">
                      {block.label}
                    </p>
                    <div className="rounded-full border border-line px-3 py-1 text-xs font-medium text-muted">
                      Results Block Placeholder
                    </div>
                  </div>
                  <h3 className="mt-5 text-2xl font-semibold text-foreground">
                    {block.title}
                  </h3>
                  <p className="mt-3 text-sm leading-7 text-muted">
                    {block.description}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}
