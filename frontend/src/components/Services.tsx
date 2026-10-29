import {
  Activity,
  HeartPulse,
  Layers,
  MessageCircle,
  Smile,
  Sparkles,
  Sun,
  type LucideIcon
} from 'lucide-react';
import { clinic, getWhatsAppUrl } from '../config/clinic';

const icons: Record<string, LucideIcon> = {
  tooth: Smile,
  activity: Activity,
  sparkles: Sparkles,
  smile: Smile,
  sun: Sun,
  layers: Layers,
  'heart-pulse': HeartPulse
};

export default function Services() {
  return (
    <section id="servicios" className="bg-white py-20 md:py-28">
      <div className="container-page">
        <div className="mx-auto max-w-2xl text-center">
          <span className="text-sm font-extrabold uppercase tracking-[0.2em] text-blue-600">
            Nuestros servicios
          </span>

          <h2 className="mt-4 text-3xl font-black tracking-tight text-blue-950 sm:text-4xl">
            Cuidamos cada detalle de tu sonrisa
          </h2>

          <p className="mt-5 leading-7 text-slate-600">
            Conoce nuestros servicios odontológicos y consulta cuál es la
            alternativa adecuada para ti después de una evaluación profesional.
          </p>
        </div>

        <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {clinic.services.map((service) => {
            const Icon = icons[service.icon] ?? Smile;

            const url = getWhatsAppUrl(
              `Hola, Clínica Dental Asiry. Quisiera información sobre el servicio de ${service.title}.`
            );

            return (
              <article
                key={service.id}
                className="group flex flex-col rounded-3xl border border-slate-100 bg-slate-50/70 p-6 transition duration-300 hover:-translate-y-1 hover:border-blue-200 hover:bg-white hover:shadow-xl hover:shadow-blue-900/5 sm:p-7"
              >
                <div className="grid h-14 w-14 place-items-center rounded-2xl bg-blue-100 text-blue-700 transition group-hover:bg-blue-700 group-hover:text-white">
                  <Icon size={27} strokeWidth={1.8} />
                </div>

                <h3 className="mt-6 text-xl font-extrabold text-blue-950">
                  {service.title}
                </h3>

                <p className="mt-3 flex-1 text-sm leading-7 text-slate-600">
                  {service.description}
                </p>

                <a
                  href={url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-6 inline-flex items-center gap-2 text-sm font-bold text-blue-700 hover:text-blue-900"
                >
                  Consultar servicio
                  <MessageCircle size={17} />
                </a>
              </article>
            );
          })}
        </div>

        <p className="mt-8 text-center text-xs leading-5 text-slate-500">
          La indicación y disponibilidad de los tratamientos dependen de la
          evaluación realizada por el profesional odontológico.
        </p>
      </div>
    </section>
  );
}
