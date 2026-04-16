import { Container } from "../ui/container";
import { Reveal } from "../ui/reveal";

export function GuaranteeSection() {
  return (
    <section className="section-space">
      <Container>
        <Reveal>
          <div className="overflow-hidden rounded-[36px] bg-[#0f172a] p-8 text-white shadow-[0_30px_80px_rgba(15,23,42,0.22)] sm:p-12">
            <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
              <div>
                <span className="inline-flex rounded-full bg-white/10 px-4 py-2 text-xs font-semibold uppercase tracking-[0.24em] text-blue-200">
                  30-Day Guarantee
                </span>
                <h2 className="mt-6 font-display text-3xl font-bold leading-tight text-balance sm:text-4xl lg:text-5xl">
                  If 20-50 qualified leads are not generated in 30 days, the work
                  continues for free until achieved.
                </h2>
              </div>
              <div className="rounded-[28px] border border-white/10 bg-white/5 p-6 sm:p-8">
                <p className="text-lg leading-8 text-slate-200">
                  This is risk reversal built into the offer. The goal is to make
                  the decision feel safer for serious business owners while
                  signaling confidence in the system itself.
                </p>
                <div className="mt-6 grid gap-4 sm:grid-cols-2">
                  <div className="rounded-[22px] bg-white/10 p-5">
                    <p className="text-sm uppercase tracking-[0.2em] text-blue-200">
                      Promise
                    </p>
                    <p className="mt-3 text-xl font-semibold">Qualified leads, not noise</p>
                  </div>
                  <div className="rounded-[22px] bg-white/10 p-5">
                    <p className="text-sm uppercase tracking-[0.2em] text-blue-200">
                      Protection
                    </p>
                    <p className="mt-3 text-xl font-semibold">Work continues for free</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Reveal>
      </Container>
    </section>
  );
}
