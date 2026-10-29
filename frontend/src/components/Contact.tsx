import {
  Clock3,
  MapPin,
  MessageCircle,
  Phone,
  Smile
} from 'lucide-react';
import { clinic, getWhatsAppUrl } from '../config/clinic';

export default function Contact() {
  const mapsUrl = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
    clinic.address
  )}`;

  return (
    <>
      <section id="contacto" className="bg-blue-950 py-20 text-white md:py-24">
        <div className="container-page grid gap-12 md:grid-cols-2 md:items-center">
          <div>
            <span className="text-sm font-extrabold uppercase tracking-[0.2em] text-cyan-300">
              Estamos para ayudarte
            </span>

            <h2 className="mt-4 text-3xl font-black tracking-tight sm:text-4xl">
              Agenda una consulta con nuestro equipo
            </h2>

            <p className="mt-5 max-w-lg leading-7 text-blue-100/80">
              Escríbenos para consultar por nuestros servicios y coordinar
              una cita según la disponibilidad de la clínica.
            </p>

            <a
              href={getWhatsAppUrl()}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-8 inline-flex items-center gap-3 rounded-full bg-emerald-500 px-6 py-4 font-extrabold text-white transition hover:bg-emerald-600"
            >
              <MessageCircle size={22} />
              Escribir por WhatsApp
            </a>
          </div>

          <div className="space-y-4">
            <div className="flex gap-4 rounded-2xl border border-white/10 bg-white/5 p-5">
              <MapPin className="mt-1 shrink-0 text-cyan-300" size={23} />
              <div>
                <h3 className="font-bold">Visítanos</h3>
                <p className="mt-2 text-sm leading-6 text-blue-100/80">
                  {clinic.address}
                </p>
                <a
                  href={mapsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-3 inline-block text-sm font-bold text-cyan-300 underline underline-offset-4"
                >
                  Buscar ubicación
                </a>
              </div>
            </div>

            <div className="flex gap-4 rounded-2xl border border-white/10 bg-white/5 p-5">
              <Phone className="mt-1 shrink-0 text-cyan-300" size={23} />
              <div>
                <h3 className="font-bold">Teléfonos de contacto</h3>
                <p className="mt-2 text-sm text-blue-100/80">
                  {clinic.phoneDisplay}
                </p>
                <p className="mt-1 text-sm text-blue-100/80">
                  {clinic.alternatePhoneDisplay}
                </p>
              </div>
            </div>

            <div className="flex gap-4 rounded-2xl border border-white/10 bg-white/5 p-5">
              <Clock3 className="mt-1 shrink-0 text-cyan-300" size={23} />
              <div>
                <h3 className="font-bold">Horario de atención</h3>
                <p className="mt-2 text-sm leading-6 text-blue-100/80">
                  Consulta nuestros horarios disponibles por WhatsApp.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <footer className="bg-slate-950 py-7 text-slate-400">
        <div className="container-page flex flex-col items-center justify-between gap-4 text-center sm:flex-row sm:text-left">
          <a href="#inicio" className="flex items-center gap-2 font-bold text-white">
            <Smile size={22} className="text-cyan-300" />
            {clinic.name}
          </a>

          <p className="text-xs leading-5">
            © {new Date().getFullYear()} Clínica Dental Asiry. Todos los derechos reservados.
          </p>
        </div>
      </footer>
    </>
  );
}
