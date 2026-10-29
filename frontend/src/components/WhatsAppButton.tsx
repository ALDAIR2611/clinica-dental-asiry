
import { MessageCircle } from 'lucide-react';
import { getWhatsAppUrl } from '../config/clinic';

export default function WhatsAppButton() {
  return (
    <a
      href={getWhatsAppUrl()}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Contactar a Clínica Dental Asiry por WhatsApp"
      title="Escríbenos por WhatsApp"
      className="fixed bottom-5 right-5 z-50 grid h-14 w-14 place-items-center rounded-full bg-emerald-500 text-white shadow-xl shadow-emerald-950/25 transition hover:scale-105 hover:bg-emerald-600 focus-visible:outline-emerald-300 sm:bottom-7 sm:right-7 sm:h-16 sm:w-16"
    >
      <MessageCircle size={30} strokeWidth={2.2} />
    </a>
  );
}
