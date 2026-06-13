import { useEffect, useState } from "react";
import { Link, Outlet, useLocation } from "react-router-dom";
import { Menu, X } from "lucide-react";
import { brand, nav, contacts } from "../data/siteData";
import brandLogo from "../assets/logo.jpg";

export function useReveal() {
  const location = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);

    const els = document.querySelectorAll("[data-reveal]");
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.14 }
    );

    els.forEach((el) => {
      el.classList.remove("is-visible");
      observer.observe(el);
    });

    return () => observer.disconnect();
  }, [location.pathname]);
}

const footerContacts = [
  { label: "Instagram", value: "@batik.srigaya", href: contacts.instagram, external: true },
  { label: "Linktree", value: "Link resmi", href: contacts.linktree, external: true },
  { label: "WhatsApp", value: "+62 812-2583-3053", href: contacts.whatsapp, external: true },
  { label: "Email", value: "batiksrigaya@gmail.com", href: contacts.email, external: false },
];

export default function Layout() {
  useReveal();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <div className="min-h-screen overflow-x-hidden bg-[radial-gradient(circle_at_top_left,rgba(200,163,91,0.12),transparent_24%),radial-gradient(circle_at_80%_20%,rgba(255,120,66,0.08),transparent_24%),linear-gradient(180deg,#07130f_0%,#0b201c_32%,#081512_100%)] text-[var(--cream)]">
      <header className="fixed left-1/2 top-4 z-50 w-[min(1280px,calc(100%-24px))] -translate-x-1/2 rounded-full border border-white/10 bg-black/25 px-5 py-2 shadow-[0_10px_40px_rgba(0,0,0,0.22)] backdrop-blur-xl transition-all duration-300">
        <div className="flex items-center justify-between gap-4">
          <Link
            to="/"
            className="flex w-40 items-center gap-3"
            onClick={() => setIsMenuOpen(false)}
          >
            <img
              src={brandLogo}
              alt="Batik Srigaya logo"
              className="h-8 w-8 rounded-full border border-[rgba(224,194,127,0.28)] object-cover"
            />
            <div className="leading-none">
              <div className="font-serif text-base uppercase tracking-[0.08em] text-[var(--gold-2)]">
                {brand.name}
              </div>
            </div>
          </Link>

          <nav className="hidden flex-wrap items-center justify-center gap-6 text-sm text-white/78 md:flex">
            {nav.map((item) => (
              <Link
                key={item.href}
                to={item.href}
                className="text-xs uppercase tracking-wider transition hover:text-[var(--gold-2)]"
              >
                {item.label}
              </Link>
            ))}
          </nav>

          <div className="flex w-32 justify-end">
            <button
              onClick={() => setIsMenuOpen(true)}
              className="flex items-center gap-2 text-[var(--gold-2)] transition hover:text-white md:hidden"
              aria-label="Buka menu"
            >
              <Menu className="h-6 w-6" />
            </button>
          </div>
        </div>
      </header>

      {isMenuOpen && (
        <div className="fixed inset-0 z-[100] flex flex-col bg-black/95 p-6 backdrop-blur-xl">
          <div className="flex justify-end">
            <button
              onClick={() => setIsMenuOpen(false)}
              className="p-2 text-[var(--gold-2)] transition hover:text-white"
              aria-label="Tutup menu"
            >
              <X className="h-8 w-8" />
            </button>
          </div>

          <nav className="mt-16 flex flex-col items-center gap-8 text-center">
            {nav.map((item) => (
              <Link
                key={item.href}
                to={item.href}
                className="font-serif text-2xl uppercase tracking-widest text-white/80 transition hover:text-[var(--gold-2)]"
                onClick={() => setIsMenuOpen(false)}
              >
                {item.label}
              </Link>
            ))}
          </nav>
        </div>
      )}

      <main id="top" className="relative z-10 pt-28 md:pt-32">
        <Outlet />
      </main>

      <footer className="relative z-10 mt-20 border-t border-[rgba(224,194,127,0.16)] bg-black/20 px-4 pb-8 pt-16 md:px-6">
        <div className="mx-auto grid max-w-[1280px] gap-10 lg:grid-cols-[1.15fr_0.85fr_1fr]">
          <div className="space-y-5">
            <div className="flex items-center gap-3">
              <img
                src={brandLogo}
                alt="Batik Srigaya logo"
                className="h-12 w-12 rounded-full border border-[rgba(224,194,127,0.18)] object-cover"
              />
              <div>
                <div className="font-serif text-2xl uppercase tracking-[0.08em] text-[var(--gold-2)]">
                  {brand.name}
                </div>
                <p className="text-xs uppercase tracking-[0.28em] text-white/38">
                  Wastra premium dari Kediri
                </p>
              </div>
            </div>

            <p className="max-w-sm text-sm leading-8 text-white/62">
              Mahakarya wastra premium, merajut harmoni dan kebanggaan lokal melalui sentuhan editorial dan mode kontemporer.
            </p>
          </div>

          <div>
            <h4 className="mb-6 text-xs font-semibold uppercase tracking-[0.25em] text-[var(--gold-2)]">
              Navigasi Halaman
            </h4>
            <ul className="grid gap-3">
              {nav.map((item) => (
                <li key={item.href}>
                  <Link
                    to={item.href}
                    className="inline-flex items-center gap-2 text-sm text-white/72 transition hover:text-[var(--gold)]"
                  >
                    <span className="h-1.5 w-1.5 rounded-full bg-[var(--gold-2)]/70" />
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="mb-6 text-xs font-semibold uppercase tracking-[0.25em] text-[var(--gold-2)]">
              Kontak & Sosial
            </h4>

            <div className="grid gap-3">
              {footerContacts.map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  target={item.external ? "_blank" : undefined}
                  rel={item.external ? "noreferrer" : undefined}
                  className="flex items-center justify-between gap-4 rounded-2xl border border-white/10 bg-white/5 px-4 py-4 transition duration-300 hover:-translate-y-0.5 hover:border-[rgba(224,194,127,0.26)] hover:bg-white/8"
                >
                  <div className="min-w-0">
                    <span className="block text-[11px] uppercase tracking-[0.28em] text-[var(--gold-2)]">
                      {item.label}
                    </span>
                    <span className="mt-1 block break-words text-sm font-medium text-white/84">
                      {item.value}
                    </span>
                  </div>
                  <span className="shrink-0 text-white/40 transition group-hover:text-[var(--gold-2)]">
                    ↗
                  </span>
                </a>
              ))}

              <div className="rounded-2xl border border-white/10 bg-white/5 px-4 py-4">
                <span className="block text-[11px] uppercase tracking-[0.28em] text-[var(--gold-2)]">
                  Alamat Butik
                </span>
                <p className="mt-2 text-sm leading-7 text-white/78">{contacts.address}</p>
              </div>
            </div>
          </div>
        </div>

        <div className="mx-auto mt-16 flex max-w-[1280px] flex-col items-center justify-between gap-4 border-t border-white/10 pt-8 text-center text-xs text-white/42 md:flex-row md:text-left">
          <span>
            &copy; {new Date().getFullYear()} {brand.name}. Seluruh hak cipta dilindungi.
          </span>
          <span>Dibuat dengan presisi dan kebanggaan di Kediri.</span>
        </div>
      </footer>
    </div>
  );
}
