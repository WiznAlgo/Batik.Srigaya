import { portfolio } from "../data/siteData";
import SectionHeading from "../components/SectionHeading";
import { useReveal } from "../components/Layout";

export default function Collections() {
  useReveal();

  return (
    <>
      <section className="px-4 py-8 md:px-6 md:py-16">
        <div className="mx-auto grid w-full max-w-[1280px] gap-8 lg:grid-cols-[1.08fr_0.92fr]">
          <div className="grid gap-4">
            <SectionHeading
              eyebrow="Koleksi"
              title="Batik Tulis, Kombinasi, & Busana Siap Pakai."
              text="Ragam rupa yang dikurasi sebagai representasi kebanggaan, diwujudkan menjadi tampilan yang anggun namun tetap kokoh menjaga tradisi."
            />
            <div className="grid gap-4 md:grid-cols-2">
              <article data-reveal className="overflow-hidden rounded-[30px] border border-white/10 bg-white/5 opacity-0 translate-y-6 transition duration-700">
                <img src={portfolio[3].src} alt="Koleksi batik kombinasi" className="h-[360px] w-full object-cover" />
                <div className="p-6">
                  <h3 className="font-serif text-3xl">Batik Kombinasi</h3>
                  <p className="mt-3 text-sm leading-7 text-white/72">
                    Seni memadukan ragam kain, motif, dan gaya cipta corak—menyatukan unsur masa kini tanpa menanggalkan pakem luhur.
                  </p>
                </div>
              </article>
              <article data-reveal className="overflow-hidden rounded-[30px] border border-white/10 bg-white/5 opacity-0 translate-y-6 transition duration-700">
                <img src={portfolio[4].src} alt="Busana siap pakai" className="h-[360px] w-full object-cover" />
                <div className="p-6">
                  <h3 className="font-serif text-3xl">Busana Siap Pakai</h3>
                  <p className="mt-3 text-sm leading-7 text-white/72">
                    Siluet luwes yang dapat memancarkan pesona di keseharian, tampil prima untuk ragam perayaan maupun ranah mode.
                  </p>
                </div>
              </article>
            </div>
          </div>

          <div data-reveal className="overflow-hidden rounded-[34px] border border-white/10 bg-white/5 shadow-[0_18px_60px_rgba(0,0,0,0.3)] opacity-0 translate-y-6 transition duration-700">
            <img src={portfolio[2].src} alt="Nuansa Editorial" className="h-[360px] w-full object-cover md:h-[440px]" />
            <div className="p-7">
              <h3 className="font-serif text-4xl leading-none">Kemasan & Nilai Premium</h3>
              <p className="mt-4 text-base leading-8 text-white/72">
                Penyajian visual dan elemen identitas bukanlah sebuah pembungkus semata, melainkan esensi dari pengalaman. Kami memastikan setiap peninggalan budaya ini layak diapresiasi.
              </p>
              <div className="mt-6 grid gap-3 sm:grid-cols-3">
                {["Kotak Eksklusif", "Sesuai Bingkisan", "Sentuhan Kolektor"].map((chip) => (
                  <span
                    key={chip}
                    className="rounded-full border border-[rgba(224,194,127,0.18)] bg-white/4 px-4 py-2 text-center text-xs uppercase tracking-[0.22em] text-white/78"
                  >
                    {chip}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="px-4 py-8 md:px-6 md:py-16">
        <div className="mx-auto grid w-full max-w-[1280px] gap-8 lg:grid-cols-[0.96fr_1.04fr]">
          <div data-reveal className="overflow-hidden rounded-[34px] border border-white/10 bg-white/5 opacity-0 translate-y-6 transition duration-700">
            <img src={portfolio[5].src} alt={portfolio[5].title} className="h-full w-full object-cover" />
          </div>

          <div data-reveal className="overflow-hidden rounded-[34px] border border-white/10 bg-white/5 opacity-0 translate-y-6 transition duration-700">
            <img src={portfolio[7].src} alt={portfolio[7].title} className="h-[520px] w-full object-cover" />
            <div className="p-7">
              <h3 className="font-serif text-4xl leading-none">Gaya Hidup & Arahan Karakter</h3>
              <p className="mt-4 text-base leading-8 text-white/72">
                Fotografi yang disusun melampaui dokumentasi busana, mengantarkan Srigaya sebagai sebuah peradaban kecil yang menawan. Hasil purna yang premium dan sanggup menyampaikan kehangatan.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
