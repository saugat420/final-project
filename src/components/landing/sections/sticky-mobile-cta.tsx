import { siteConfig } from "@/data/site-content";
import { ButtonLink } from "../ui/button-link";

export function StickyMobileCta() {
  return (
    <div className="fixed inset-x-0 bottom-0 z-50 border-t border-line bg-white/95 p-3 shadow-[0_-12px_30px_rgba(15,23,42,0.08)] backdrop-blur lg:hidden">
      <div className="section-shell flex items-center gap-3">
        <ButtonLink href="#contact" className="flex-1 text-center">
          Book Call
        </ButtonLink>
        <ButtonLink
          href={siteConfig.whatsappHref}
          variant="secondary"
          className="flex-1 text-center"
        >
          WhatsApp
        </ButtonLink>
      </div>
    </div>
  );
}
