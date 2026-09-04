import { MessageCircle } from "lucide-react";
import { whatsappHref } from "@/lib/site";

export function WhatsAppFab() {
  return (
    <a
      href={whatsappHref}
      target="_blank"
      rel="noreferrer noopener"
      aria-label="Chat with ENT Care Clinic on WhatsApp"
      className="fixed right-4 bottom-4 z-40 grid size-14 place-items-center rounded-full text-white shadow-float transition-transform hover:scale-105 focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 focus-visible:outline-none md:right-6 md:bottom-6"
      style={{ backgroundColor: "#25D366", animation: "float-pulse 2.6s infinite" }}
    >
      <MessageCircle className="size-7" />
    </a>
  );
}
