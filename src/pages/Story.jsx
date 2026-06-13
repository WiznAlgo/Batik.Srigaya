import { portfolio, features } from "../data/siteData";
import SectionHeading from "../components/SectionHeading";
import { useReveal } from "../components/Layout";

export default function Story() {
  useReveal();

  return (
    <section className="px-4 py-8 md:px-6 md:py-16">
      <div className="mx-auto grid w-full max-w-[1280px] gap-8 lg:grid-cols-[0.92fr_1.08fr] lg:items-center">
        <div
          data-reveal
          className="overflow-hidden rounded-[34px] border border-white/10 bg-white/5 shadow-[0_18px_60px_rgba(0,0,0,0.3)] opacity-0 translate-y-6 transition duration-700"
        >
          <img src={portfolio[0].src} alt={portfolio[0].title} className="h-full w-full object-cover" />
        </div>

        <div
          data-reveal
          className="rounded-[34px] border border-[rgba(224,194,127,0.18)] bg-[linear-gradient(180deg,rgba(255,255,255,0.06),rgba(255,255,255,0.03))] p-7 shadow-[0_18px_60px_rgba(0,0,0,0.3)] opacity-0 translate-y-6 transition duration-700 md:p-9"
        >
          <SectionHeading
            eyebrow="Kisah Brand"
            title="Srigaya Sebagai Identitas Wastra."
            text="Kami merangkai setiap helai batik bukan sebatas produk, melainkan lembaran mahakarya yang menonjolkan jalinan kisah, raba tekstur, dan kedalaman rasa."
          />

          <p className="mt-6 text-base leading-8 text-white/72">
            Batik Srigaya adalah prasasti keindahan yang lahir dari rahim Kabupaten Kediri, Jawa Timur. Ilham 
            utamanya meresap dari pahatan agung Candi Surowono dan Candi Tegowangi, yang kemudian dialihrupakan 
            menjadi pesona visual yang memikat dan relevan bagi panggung mode masa kini.
          </p>

          <div className="mt-7 grid gap-4 md:grid-cols-3">
            {features.map((item) => (
              <article key={item.title} className="rounded-[22px] border border-white/10 bg-white/4 p-5">
                <h3 className="text-sm uppercase tracking-[0.24em] text-[var(--gold-2)]">{item.title}</h3>
                <p className="mt-3 text-sm leading-7 text-white/72">{item.text}</p>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
