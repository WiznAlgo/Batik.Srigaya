import { useState } from "react";
import { portfolio } from "../data/siteData";
import SectionHeading from "../components/SectionHeading";
import { useReveal } from "../components/Layout";

export default function Lookbook() {
  useReveal();
  const [openIndex, setOpenIndex] = useState(null);
  const activeImage = openIndex !== null ? portfolio[openIndex] : null;

  return (
    <>
      <section className="px-4 py-8 md:px-6 md:py-16">
        <div className="mx-auto w-full max-w-[1280px]">
          <SectionHeading
            eyebrow="Portfolio Editorial"
            title="Presentasi visual dan dokumentasi mahakarya."
            text="Eksibisi visual eksklusif: merangkum detail kemasan, potret karakter, gaya hidup, hingga bidikan mode editorial."
          />

          <div className="mt-10 columns-1 gap-4 sm:columns-2 xl:columns-3">
            {portfolio.map((item, index) => (
              <button
                key={item.title}
                data-reveal
                type="button"
                onClick={() => setOpenIndex(index)}
                className="mb-4 w-full break-inside-avoid overflow-hidden rounded-[26px] border border-white/10 bg-white/5 text-left shadow-[0_18px_60px_rgba(0,0,0,0.28)] opacity-0 translate-y-6 transition duration-700 hover:-translate-y-1"
              >
                <div className="relative">
                  <img src={item.src} alt={item.title} className="w-full object-cover transition duration-700 hover:scale-[1.03]" />
                  <div className="absolute left-4 top-4 rounded-full border border-[rgba(224,194,127,0.22)] bg-black/50 px-3 py-1 text-[10px] uppercase tracking-[0.28em] backdrop-blur-lg">
                    {item.tag}
                  </div>
                  <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/84 via-black/12 to-transparent p-5">
                    <h3 className="font-serif text-2xl">{item.title}</h3>
                    <p className="mt-2 text-sm leading-7 text-white/72">{item.text}</p>
                  </div>
                </div>
              </button>
            ))}
          </div>
        </div>
      </section>

      {activeImage ? (
        <div
          className="fixed inset-0 z-[80] grid place-items-center bg-black/85 p-4 backdrop-blur-md"
          onClick={() => setOpenIndex(null)}
        >
          <button
            className="absolute right-5 top-5 grid h-11 w-11 place-items-center rounded-full border border-[rgba(224,194,127,0.24)] bg-white/6 text-2xl text-[var(--cream)] transition hover:bg-white/20"
            onClick={() => setOpenIndex(null)}
            aria-label="Close preview"
          >
            &times;
          </button>
          <img
            src={activeImage.src}
            alt={activeImage.title}
            className="max-h-[88vh] max-w-[min(1100px,94vw)] rounded-[22px] border border-white/14 object-contain shadow-[0_20px_80px_rgba(0,0,0,0.45)]"
            onClick={(e) => e.stopPropagation()}
          />
        </div>
      ) : null}
    </>
  );
}
