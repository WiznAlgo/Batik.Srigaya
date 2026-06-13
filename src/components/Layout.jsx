import { useEffect, useState } from "react";
import { Link, Outlet, useLocation } from "react-router-dom";
import { Menu, X } from "lucide-react";
import { brand, nav, portfolio, contacts } from "../data/siteData";
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

export default function Layout() {
  useReveal();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <div className="min-h-screen overflow-x-hidden bg-[radial-gradient(circle_at_top_left,rgba(200,163,91,0.12),transparent_24%),radial-gradient(circle_at_80%_20%,rgba(255,120,66,0.08),transparent_24%),linear-gradient(180deg,#07130f_0%,#0b201c_32%,#081512_100%)] text-[var(--cream)]">
      <header className="fixed left-1/2 top-4 z-50 w-[min(1280px,calc(100%-24px))] -translate-x-1/2 rounded-full border border-white/10 bg-black/25 px-5 py-2 shadow-[0_10px_40px_rgba(0,0,0,0.22)] backdrop-blur-xl transition-all duration-300 data-[scroll=true]:bg-black/55">
        <div className="flex items-center justify-between gap-4">
          <Link to="/" className="flex items-center gap-3 w-40" onClick={() => setIsMenuOpen(false)}>
            <img src={brandLogo} alt="Batik Srigaya logo" className="h-8 w-8 rounded-full object-cover border border-[rgba(224,194,127,0.28)]" />
            <div className="leading-none">
              <div className="font-serif text-base tracking-[0.08em] uppercase text-[var(--gold-2)]">{brand.name}</div>
            </div>
          </Link>

          <nav className="hidden flex-wrap items-center justify-center gap-4 text-sm text-white/78 md:flex md:gap-6">
            {nav.map((item) => (
              <Link key={item.href} to={item.href} className="transition hover:text-[var(--gold-2)] uppercase tracking-wider text-xs">
                {item.label}
              </Link>
            ))}
          </nav>
          
          <div className="flex justify-end w-32">
            <button 
              onClick={() => setIsMenuOpen(true)} 
              className="flex items-center gap-2 text-[var(--gold-2)] hover:text-white transition md:hidden"
              aria-label="Buka Menu"
            >
              <Menu className="w-6 h-6" />
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Menu Overlay */}
      {isMenuOpen && (
        <div className="fixed inset-0 z-[100] bg-black/95 backdrop-blur-xl flex flex-col p-6 animate-[fadeIn_0.3s_ease-out]">
          <div className="flex justify-end">
            <button onClick={() => setIsMenuOpen(false)} className="p-2 text-[var(--gold-2)] hover:text-white transition">
              <X className="w-8 h-8" />
            </button>
          </div>
          <nav className="flex flex-col gap-8 mt-16 items-center text-center">
            {nav.map(item => (
              <Link 
                key={item.href} 
                to={item.href} 
                className="font-serif text-2xl tracking-widest uppercase text-white/80 hover:text-[var(--gold-2)] transition" 
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

      <footer className="mt-20 border-t border-[rgba(224,194,127,0.15)] bg-black/20 pt-16 pb-8 px-4 md:px-6 relative z-10">
        <div className="mx-auto grid max-w-[1280px] gap-10 md:grid-cols-3">
          <div>
            <div className="font-serif text-2xl tracking-[0.08em] uppercase text-[var(--gold-2)] mb-4">{brand.name}</div>
            <p className="text-sm leading-8 text-white/60 max-w-sm">
              Mahakarya wastra premium, merajut harmoni dan kebanggaan lokal melalui sentuhan editorial dan mode kontemporer.
            </p>
          </div>
          
          <div>
            <h4 className="text-xs font-semibold uppercase tracking-[0.25em] text-[var(--gold-2)] mb-6">Navigasi Halaman</h4>
            <ul className="grid gap-3">
              {nav.map((item) => (
                <li key={item.href}>
                  <Link to={item.href} className="text-sm text-white/70 hover:text-[var(--gold)] transition">
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          
          <div>
            <h4 className="text-xs font-semibold uppercase tracking-[0.25em] text-[var(--gold-2)] mb-6">Kontak & Sosial</h4>
            <ul className="grid gap-3 text-sm text-white/70">
              <li><span className="text-white/40 inline-block w-24">Instagram</span> {contacts.instagram}</li>
              <li><span className="text-white/40 inline-block w-24">Linktree</span> {contacts.linktree}</li>
              <li><span className="text-white/40 inline-block w-24">WhatsApp</span> {contacts.whatsapp}</li>
              <li><span className="text-white/40 inline-block w-24">Surel / Email</span> {contacts.email}</li>
              <li className="mt-3 leading-7"><span className="text-white/40 block mb-1">Alamat Butik</span> {contacts.address}</li>
            </ul>
          </div>
        </div>
        
        <div className="mx-auto max-w-[1280px] mt-16 pt-8 border-t border-white/10 text-xs text-white/40 flex flex-col md:flex-row justify-between items-center gap-4 text-center md:text-left">
           <span>&copy; {new Date().getFullYear()} {brand.name}. Seluruh hak cipta dilindungi.</span>
           <span>Dibuat dengan presisi dan kebanggaan di Kediri.</span>
        </div>
      </footer>
    </div>
  );
}
