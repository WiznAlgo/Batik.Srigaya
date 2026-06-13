import { process } from "../data/siteData";
import SectionHeading from "../components/SectionHeading";
import { useReveal } from "../components/Layout";

export default function Process() {
  useReveal();

  return (
    <section className="px-4 py-8 md:px-6 md:py-16">
      <div className="mx-auto w-full max-w-[1280px]">
        <SectionHeading
          eyebrow="Proses Berkarya"
          title="Rangkaian Lintas Waktu, Dari Riset Hingga Mahakarya."
          text="Sebuah garis waktu ketelitian yang menautkan narasi leluhur menjadi peninggalan estetika masa kini."
        />

        <div className="mt-10 grid gap-4 lg:grid-cols-4">
          {process.map((item) => (
            <article
              key={item.step}
              data-reveal
              className="min-h-[230px] flex flex-col justify-between rounded-[28px] border border-white/10 bg-[linear-gradient(180deg,rgba(255,255,255,0.06),rgba(255,255,255,0.03))] p-6 opacity-0 translate-y-6 shadow-[0_18px_60px_rgba(0,0,0,0.28)] transition duration-700"
            >
              <div>
                <div className="mb-5 inline-flex h-11 w-11 items-center justify-center rounded-full border border-[rgba(224,194,127,0.22)] bg-[rgba(200,163,91,0.12)] font-serif text-[var(--gold-2)]">
                  {item.step}
                </div>
                <h3 className="font-serif text-2xl">{item.title}</h3>
                <p className="mt-4 text-sm leading-7 text-white/72">{item.text}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
