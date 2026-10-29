
import { ArrowDown, CalendarCheck, MapPin, ShieldCheck } from 'lucide-react';
import { clinic, getWhatsAppUrl } from '../config/clinic';

export default function Hero() {
  return (
    <section id="inicio" className="overflow-hidden bg-gradient-to-br from-blue-50 via-white to-cyan-50">
      <div className="container-page grid items-center gap-12 py-16 md:grid-cols-2 md:py-24">
        <div>
          <span className="inline-flex items-center gap-2 rounded-full border border-blue-200 bg-white px-4 py-2 text-sm font-semibold text-blue-800">
            <ShieldCheck size={17} />
            Atención odontológica profesional
          </span>

          <h1 className="mt-6 max-w-xl text-4xl font-black leading-tight tracking-tight text-blue-950 sm:text-5xl lg:text-6xl">
            Tu sonrisa merece
            <span className="block text-blue-700">lo mejor de nosotros.</span>
          </h1>

          <p className="mt-6 max-w-lg text-lg leading-8 text-slate-600">
            En {clinic.name} te orientamos sobre el cuidado de tu salud bucal
            con una atención cercana y tratamientos evaluados de forma profesional.
          </p>

          <div className="mt-8 flex flex-wrap gap-4">
            <a
              href={getWhatsAppUrl()}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-full bg-blue-700 px-6 py-4 font-bold text-white shadow-lg shadow-blue-700/20 transition hover:-translate-y-0.5 hover:bg-blue-800"
            >
              <CalendarCheck size={20} />
              Consulta por WhatsApp
            </a>

            <a
              href="#servicios"
              className="inline-flex items-center gap-2 rounded-full border border-blue-200 bg-white px-6 py-4 font-bold text-blue-900 transition hover:bg-blue-50"
            >
              Ver servicios
              <ArrowDown size={18} />
            </a>
          </div>

          <div className="mt-8 flex items-start gap-3 text-sm text-slate-500">
            <MapPin size={20} className="mt-0.5 shrink-0 text-blue-700" />
            <span>{clinic.locationShort}</span>
          </div>
        </div>

        <div id="nosotros" className="relative">
          <div className="absolute -inset-4 rounded-[2.5rem] bg-blue-200/50 blur-2xl" />

          <div className="relative overflow-hidden rounded-[2rem] border border-blue-100 bg-white p-3 shadow-2xl shadow-blue-900/10">
            <div
              role="img"
              aria-label="Espacio reservado para una fotografía real del consultorio dental"
              className="flex min-h-[350px] flex-col items-center justify-center rounded-[1.5rem] bg-gradient-to-br from-blue-100 via-cyan-50 to-blue-200 p-8 text-center sm:min-h-[440px]"
            >
              <div className="grid h-24 w-24 place-items-center rounded-3xl bg-white text-blue-700 shadow-lg shadow-blue-900/10">
                <svg
                  viewBox="0 0 64 64"
                  className="h-16 w-16"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2.5"
                  aria-hidden="true"
                >
                  <path d="M18 11c-7 0-11 6-9 15l7 25c2 7 8 7 10 0l6-17 6 17c2 7 8 7 10 0l7-25c2-9-2-15-9-15-5 0-9 4-14 4s-9-4-14-4Z" />
                  <path d="M24 18c4 2 12 2 16 0" />
                </svg>
              </div>

              <h2 className="mt-7 text-2xl font-extrabold text-blue-950">
                Nuestro consultorio
              </h2>

              <p className="mt-3 max-w-xs text-sm leading-6 text-blue-900/70">
                Aquí podrás colocar fotografías de la clínica, sus ambientes y
                el equipo odontológico.
              </p>

              <span className="mt-5 rounded-full border border-blue-200 bg-white/80 px-4 py-2 text-xs font-bold uppercase tracking-wider text-blue-700">
                Fotografía por incorporar
              </span>
            </div>
          </div>

          <div className="absolute -bottom-5 -left-3 rounded-2xl bg-white p-4 shadow-xl sm:-left-8 sm:p-5">
            <p className="text-sm font-extrabold text-blue-950">
              Clínica Dental Asiry
            </p>
            <p className="mt-1 text-xs text-slate-500">
              Cuidamos tu sonrisa
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
