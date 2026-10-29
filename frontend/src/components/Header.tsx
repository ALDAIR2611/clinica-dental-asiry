import { Menu, Smile, X } from 'lucide-react';
import { useState } from 'react';
import { clinic, getWhatsAppUrl } from '../config/clinic';

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  const links = [
    { href: '#inicio', label: 'Inicio' },
    { href: '#nosotros', label: 'Nosotros' },
    { href: '#servicios', label: 'Servicios' },
    { href: '#contacto', label: 'Contacto' }
  ];

  return (
    <header className="sticky top-0 z-40 border-b border-blue-100 bg-white/95 backdrop-blur">
      <div className="container-page flex min-h-20 items-center justify-between gap-4">
        <a
          href="#inicio"
          className="flex items-center gap-3"
          aria-label="Ir al inicio"
        >
          <span className="grid h-11 w-11 place-items-center rounded-2xl bg-blue-700 text-white">
            <Smile size={27} />
          </span>

          <span>
            <span className="block text-lg font-extrabold tracking-tight text-blue-950">
              DENTAL ASIRY
            </span>
            <span className="block text-xs font-medium tracking-widest text-blue-600">
              CUIDAMOS TU SONRISA
            </span>
          </span>
        </a>

        <nav className="hidden items-center gap-7 md:flex" aria-label="Principal">
          {links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-sm font-semibold text-slate-600 transition hover:text-blue-700"
            >
              {link.label}
            </a>
          ))}

          <a
            href={getWhatsAppUrl()}
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-full bg-blue-700 px-5 py-3 text-sm font-bold text-white transition hover:bg-blue-800"
          >
            Consultar ahora
          </a>
        </nav>

        <button
          type="button"
          className="rounded-xl p-2 text-blue-900 md:hidden"
          aria-label={menuOpen ? 'Cerrar menú' : 'Abrir menú'}
          aria-expanded={menuOpen}
          onClick={() => setMenuOpen((open) => !open)}
        >
          {menuOpen ? <X size={25} /> : <Menu size={25} />}
        </button>
      </div>

      {menuOpen && (
        <nav className="border-t border-blue-100 bg-white p-5 md:hidden" aria-label="Móvil">
          {links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setMenuOpen(false)}
              className="block rounded-xl px-3 py-3 font-semibold text-slate-700 hover:bg-blue-50"
            >
              {link.label}
            </a>
          ))}

          <a
            href={getWhatsAppUrl()}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-3 block rounded-xl bg-blue-700 px-4 py-3 text-center font-bold text-white"
          >
            Contactar a {clinic.name}
          </a>
        </nav>
      )}
    </header>
  );
}
