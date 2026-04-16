import { siteConfig } from "@/data/site-content";

export function WhatsAppFloat() {
  return (
    <a
      href={siteConfig.whatsappHref}
      aria-label="Chat on WhatsApp"
      className="fixed bottom-24 right-4 z-40 inline-flex h-14 w-14 items-center justify-center rounded-full bg-[#25D366] text-2xl font-bold text-white shadow-[0_20px_40px_rgba(37,211,102,0.3)] transition hover:-translate-y-1 sm:bottom-6 sm:right-6"
    >
      W
    </a>
  );
}
