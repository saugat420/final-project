import Image from "next/image";
import { heroContent, siteConfig } from "@/data/site-content";
import { ButtonLink } from "../ui/button-link";
import { Container } from "../ui/container";
import { Reveal } from "../ui/reveal";

export function HeroSection() {
  return (
    <header className="relative overflow-hidden">
      <div className="absolute inset-0 grid-overlay opacity-50" />
      <Container className="relative z-10">
        <div className="flex items-center justify-between border-b border-white/60 py-4">
          <a href="#" aria-label={siteConfig.brand} className="inline-flex items-center">
            <Image
              src="/sAUGAT new logo.png"
              alt={siteConfig.brand}
              width={320}
              height={96}
              priority
              className="h-12 w-auto object-contain sm:h-14"
            />
          </a>
          <nav className="hidden items-center gap-7 text-sm font-medium text-muted lg:flex">
            {siteConfig.navLinks.map((link) => (
              <a key={link.href} href={link.href} className="transition hover:text-primary">
                {link.label}
              </a>
            ))}
            <ButtonLink href={siteConfig.primaryCtaHref} className="px-5 py-3">
              Book Call
            </ButtonLink>
          </nav>
        </div>
        <div className="section-space grid items-center gap-10 lg:grid-cols-[1.1fr_0.9fr] lg:gap-14">
          <Reveal>
            <div className="max-w-3xl">
              <span className="eyebrow">Meta Ads Lead Generation</span>
              <h1 className="mt-5 font-display text-[2.6rem] font-extrabold leading-[1.04] text-balance text-foreground sm:text-[3.4rem] lg:text-[4.2rem]">
                {heroContent.headline}
              </h1>
              <p className="mt-4 max-w-2xl text-lg font-semibold leading-8 text-foreground sm:text-xl lg:text-[1.7rem] lg:leading-9">
                {heroContent.subheadline}
              </p>
              <p className="mt-4 max-w-2xl text-[15px] leading-7 text-muted sm:text-base">
                A complete done-for-you lead generation system for business owners
                who want predictable customers every week, not random sales or
                boosted posts.
              </p>
              <p className="mt-4 max-w-2xl rounded-3xl border border-accent/20 bg-accent-soft px-5 py-4 text-sm font-medium leading-6 text-foreground sm:text-[15px]">
                {heroContent.hook}
              </p>
              <div className="mt-7 flex flex-col gap-3 sm:flex-row">
                <ButtonLink href={siteConfig.primaryCtaHref} className="min-w-44">
                  Get Leads Now
                </ButtonLink>
                <ButtonLink
                  href={siteConfig.secondaryCtaHref}
                  variant="secondary"
                  className="min-w-44"
                >
                  Learn More
                </ButtonLink>
              </div>
              <div className="mt-7 flex flex-wrap gap-3">
                {heroContent.trustIndicators.map((item) => (
                  <div
                    key={item}
                    className="rounded-full border border-line bg-white px-4 py-2 text-[13px] font-medium text-muted"
                  >
                    {item}
                  </div>
                ))}
              </div>
            </div>
          </Reveal>
          <Reveal delay={150}>
            <div className="card-surface relative overflow-hidden p-5 sm:p-7">
              <div className="absolute inset-x-0 top-0 h-1.5 bg-gradient-to-r from-primary via-accent to-primary" />
              <div className="grid gap-5 sm:grid-cols-3 lg:grid-cols-1">
                {heroContent.stats.map((stat) => (
                  <div
                    key={stat.label}
                    className="rounded-[24px] border border-line bg-surface p-5"
                  >
                    <p className="font-display text-[1.9rem] font-bold text-foreground sm:text-[2.2rem]">
                      {stat.value}
                    </p>
                    <p className="mt-2 text-[13px] leading-6 text-muted">{stat.label}</p>
                  </div>
                ))}
              </div>
              <div className="mt-5 rounded-[24px] bg-[#0f172a] p-5 text-white">
                <p className="text-[11px] uppercase tracking-[0.22em] text-blue-200">
                  What You Actually Get
                </p>
                <p className="mt-3 text-[1.45rem] font-semibold leading-8">
                  A complete lead engine, not just someone pressing buttons in Ads
                  Manager.
                </p>
              </div>
            </div>
          </Reveal>
        </div>
      </Container>
    </header>
  );
}
