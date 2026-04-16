import { siteConfig } from "@/data/site-content";
import { Container } from "../ui/container";
import { ContactForm } from "../ui/contact-form";
import { Reveal } from "../ui/reveal";

export function FinalCtaSection() {
  return (
    <section id="contact" className="section-space">
      <Container>
        <div className="mx-auto max-w-3xl">
          <Reveal>
            <div
              id="contact-form"
              className="scroll-mt-28 rounded-[36px] border border-white/80 bg-gradient-to-br from-white via-[#f7faff] to-[#eef4ff] p-6 shadow-[0_30px_80px_rgba(15,23,42,0.12)] sm:p-8 lg:p-10"
            >
              <p className="text-sm font-semibold uppercase tracking-[0.24em] text-muted-soft">
                Final Step
              </p>
              <h2 className="mt-4 font-display text-3xl font-bold leading-tight text-balance text-foreground sm:text-4xl">
                Ready to Stop Guessing and Start Getting Real Customers?
              </h2>
              <p className="mt-3 text-sm leading-7 text-muted sm:text-base">
                Fill in this short form and you will be redirected to WhatsApp to
                continue instantly.
              </p>
              <div className="mt-8 rounded-[28px] border border-primary/10 bg-white/90 p-4 sm:p-6">
                <ContactForm redirectHref={siteConfig.postSubmitWhatsappHref} />
              </div>
            </div>
          </Reveal>
        </div>
      </Container>
    </section>
  );
}
