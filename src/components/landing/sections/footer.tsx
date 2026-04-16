import { siteConfig } from "@/data/site-content";
import { Container } from "../ui/container";

export function Footer() {
  return (
    <footer className="border-t border-white/70 py-10">
      <Container>
        <div className="flex flex-col gap-5 sm:flex-row sm:items-center sm:justify-between">
          <div>
            <p className="font-display text-lg font-semibold text-foreground">
              {siteConfig.brand}
            </p>
            <p className="mt-2 text-sm text-muted">
              Predictable Meta Ads lead generation for growth-focused businesses.
            </p>
          </div>
          <div className="flex flex-wrap items-center gap-5 text-sm font-medium text-muted">
            <a href={`mailto:${siteConfig.supportEmail}`} className="transition hover:text-primary">
              {siteConfig.supportEmail}
            </a>
            <a href={siteConfig.whatsappHref} className="transition hover:text-primary">
              WhatsApp
            </a>
            <a href="#contact" className="transition hover:text-primary">
              Contact
            </a>
          </div>
        </div>
      </Container>
    </footer>
  );
}
