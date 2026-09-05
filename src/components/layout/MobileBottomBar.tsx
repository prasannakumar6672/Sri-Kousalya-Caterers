import { Link } from "react-router-dom";
import { Phone, MessageCircle, FileText } from "lucide-react";
import { defaultWaMessage, primaryPhone, waLink } from "@/data/siteData";

export function MobileBottomBar() {
  return (
    <div
      className="fixed inset-x-0 bottom-0 z-40 border-t border-gold/25 bg-background/95 backdrop-blur lg:hidden"
      style={{ paddingBottom: "env(safe-area-inset-bottom)" }}
    >
      <div className="grid grid-cols-[1fr_1.3fr_1fr] items-stretch gap-2 px-3 py-2">
        <a
          href={`tel:${primaryPhone.tel}`}
          className="flex min-h-12 flex-col items-center justify-center rounded-xl border border-primary/20 text-[0.7rem] font-semibold text-primary"
          aria-label={`Call ${primaryPhone.display}`}
        >
          <Phone className="mb-0.5 size-4" aria-hidden="true" />
          Call
        </a>
        <a
          href={waLink(defaultWaMessage)}
          target="_blank"
          rel="noopener noreferrer"
          className="flex min-h-12 flex-col items-center justify-center rounded-xl bg-[#128C7E] text-[0.75rem] font-bold text-white shadow-soft"
        >
          <MessageCircle className="mb-0.5 size-5" aria-hidden="true" />
          WhatsApp
        </a>
        <Link
          to="/quote"
          className="flex min-h-12 flex-col items-center justify-center rounded-xl bg-primary text-[0.7rem] font-semibold text-primary-foreground"
        >
          <FileText className="mb-0.5 size-4" aria-hidden="true" />
          Get Quote
        </Link>
      </div>
    </div>
  );
}
