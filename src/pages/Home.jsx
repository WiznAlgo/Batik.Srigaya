import { Link } from "react-router-dom";
import { motion } from "motion/react";
import { brand, storyStats, heroImages, portfolio, whyChooseUs, features } from "../data/siteData";

const marqueeItems = [
  "Batik Tulis Premium",
  "Heritage Editorial",
  "Busana Siap Pakai",
  "Karya Kediri",
  "Lookbook Esensial",
  "Pesanan Pribadi",
];

const fadeUpVariant = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] } }
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.15, delayChildren: 0.1 } }
};

export default function Home() {
  return (
    <>
      <section className="px-4 pb-16 md:px-6">
        <div className="mx-auto grid w-full max-w-[1280px] items-center gap-12 lg:grid-cols-[1.05fr_0.95fr]">
          <motion.div 
            variants={staggerContainer}
            initial="hidden"
            animate="visible"
          >
            <motion.p variants={fadeUpVariant} className="mb-5 inline-flex items-center gap-3 text-xs uppercase tracking-[0.4em] text-[var(--gold)]/90">
              <span className="h-px w-10 bg-gradient-to-r from-transparent via-[var(--gold)] to-transparent" />
              Est. 2022 • Pare, Kediri
            </motion.p>
            <motion.h1 
              variants={fadeUpVariant} 
              className="max-w-3xl font-serif text-5xl leading-[0.9] tracking-[-0.02em] md:text-[6.5rem]"
            >
              <span className="block italic text-white/90">Batiknya,</span> Istimewa.
            </motion.h1>
            <motion.p variants={fadeUpVariant} className="mt-8 max-w-2xl text-base leading-relaxed text-white/70 md:text-lg md:leading-loose">
              {brand.short}
            </motion.p>

            <motion.div variants={fadeUpVariant} className="mt-10 flex flex-wrap gap-4">
              <Link to="/collections" className="group relative overflow-hidden rounded-full border border-transparent bg-[linear-gradient(135deg,rgba(200,163,91,0.98),rgba(176,141,69,0.86))] px-8 py-4 text-xs font-semibold uppercase tracking-widest text-[#1a1408] shadow-[0_14px_44px_rgba(176,141,69,0.2)] transition-all hover:scale-[1.02]">
                <span className="relative z-10 transition-transform group-hover:block">Lihat Koleksi Eksklusif</span>
              </Link>
              <a href="https://wa.me/6281225833063" target="_blank" rel="noreferrer" className="rounded-full border border-[rgba(224,194,127,0.3)] bg-white/5 px-8 py-4 text-xs font-semibold uppercase tracking-widest text-[var(--cream)] transition-all hover:scale-[1.02] hover:bg-white/10">
                Pesan via WhatsApp
              </a>
            </motion.div>

            <motion.div variants={staggerContainer} className="mt-14 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
              {storyStats.map((stat) => (
                <motion.article
                  variants={fadeUpVariant}
                  key={stat.title}
                  className="rounded-[24px] border border-[rgba(224,194,127,0.14)] bg-white/5 p-6 shadow-[0_18px_60px_rgba(0,0,0,0.22)] backdrop-blur-sm"
                >
                  <b className="block font-serif text-4xl leading-none text-[var(--gold-2)]">{stat.value}</b>
                  <p className="mt-3 text-xs uppercase tracking-widest text-white/50">{stat.desc}</p>
                </motion.article>
              ))}
            </motion.div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, ease: [0.22, 1, 0.36, 1], delay: 0.3 }}
          >
            <div className="grid gap-4 md:grid-cols-[1.02fr_0.92fr]">
              <div className="group relative min-h-[640px] overflow-hidden rounded-[32px] border border-white/10 bg-white/5 shadow-[0_18px_60px_rgba(0,0,0,0.32)] md:row-span-2">
                <img src={heroImages[0].src} alt={heroImages[0].title} className="h-full w-full object-cover transition-transform duration-[1.5s] ease-out group-hover:scale-110" />
                <div className="absolute left-5 top-5 rounded-full border border-[rgba(224,194,127,0.24)] bg-black/45 px-4 py-2 text-[10px] uppercase tracking-[0.3em] backdrop-blur-lg">
                  Koleksi Pilihan
                </div>
                <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/90 via-black/30 to-transparent p-8">
                  <h3 className="font-serif text-3xl italic tracking-wide">{heroImages[0].title}</h3>
                  <p className="mt-3 max-w-md text-sm leading-relaxed text-white/70">{heroImages[0].desc}</p>
                </div>
              </div>

              <div className="grid gap-4">
                {heroImages.slice(1).map((item, idx) => (
                  <div
                    key={item.title}
                    className={`group relative overflow-hidden rounded-[28px] border border-white/10 bg-white/4 shadow-[0_18px_60px_rgba(0,0,0,0.28)] ${idx === 0 ? "min-h-[308px]" : "min-h-[250px]"}`}
                  >
                    <img src={item.src} alt={item.title} className="h-full w-full object-cover transition-transform duration-[1.5s] ease-out group-hover:scale-110" />
                    <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/90 via-black/30 to-transparent p-6">
                      <h3 className="font-serif text-xl tracking-wide">{item.title}</h3>
                      <p className="mt-2 text-xs uppercase tracking-widest text-white/50">{item.desc}</p>
                    </div>
                  </div>
                ))}
                <div className="group relative overflow-hidden rounded-[28px] border border-[rgba(224,194,127,0.18)] bg-[linear-gradient(135deg,rgba(200,163,91,0.1),transparent)] p-7 min-h-[250px] shadow-[0_18px_60px_rgba(0,0,0,0.28)] flex flex-col justify-end transition-colors hover:bg-[linear-gradient(135deg,rgba(200,163,91,0.15),transparent)]">
                  <h3 className="font-serif text-2xl italic tracking-wide text-[var(--gold-2)]">Telusuri Lebih Lanjut</h3>
                  <p className="mt-3 text-sm leading-relaxed text-white/70">
                    Kenali cerita, temukan mahakarya, dan lihat proses kami lebih dalam.
                  </p>
                  <Link to="/collections" className="mt-6 flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.2em] text-white/90 group-hover:text-[var(--gold)] transition-colors">
                    Lihat Koleksi <span className="transition-transform group-hover:translate-x-2">&rarr;</span>
                  </Link>
                </div>
              </div>
            </div>
          </motion.div>
        </div>

        <div className="mt-20 overflow-hidden border-y border-white/5 bg-black/20 py-5 backdrop-blur-md">
          <div className="marquee whitespace-nowrap text-xs font-medium uppercase tracking-[0.4em] text-white/50">
            {marqueeItems.map((item) => (
              <span key={item} className="mx-8 inline-flex items-center gap-8">
                {item}
                <span className="inline-block h-[2px] w-4 bg-[var(--gold)]/50" />
              </span>
            ))}
            {marqueeItems.map((item) => (
              <span key={`${item}-2`} className="mx-8 inline-flex items-center gap-8">
                {item}
                <span className="inline-block h-[2px] w-4 bg-[var(--gold)]/50" />
              </span>
            ))}
          </div>
        </div>
      </section>

      <section className="px-4 py-24 md:px-6 relative">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-px h-16 bg-gradient-to-b from-[var(--gold)] to-transparent opacity-50"></div>
        <div className="mx-auto grid w-full max-w-[1280px] gap-16 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={staggerContainer}
            className="order-2 lg:order-1"
          >
            <motion.p variants={fadeUpVariant} className="mb-4 text-xs font-semibold uppercase tracking-[0.3em] text-[var(--gold-2)]">Cerita Di Balik Motif</motion.p>
            <motion.h2 variants={fadeUpVariant} className="font-serif text-5xl leading-[1] tracking-tight md:text-6xl">
              Sekilas Tentang <span className="italic block mt-1 text-white/80">Srigaya</span>
            </motion.h2>
            <motion.p variants={fadeUpVariant} className="mt-8 text-base leading-relaxed text-white/70">
              Lahir dari keagungan budaya Kediri, Batik Srigaya bukan sekadar lembaran kain, melainkan tutur sejarah yang dihidupkan kembali. Setiap goresan malam menyuratkan inspirasi dari relief Candi Surowono dan Candi Tegowangi. 
            </motion.p>
            <motion.p variants={fadeUpVariant} className="mt-4 text-base leading-relaxed text-white/70">
              Kami percaya bahwa warisan leluhur dapat bersanding serasi dengan gaya hidup masa kini. Melalui dedikasi para pengrajin, kami mempersembahkan estetika paripurna yang tak lekang oleh waktu.
            </motion.p>
            <motion.div variants={fadeUpVariant} className="mt-10">
              <Link to="/story" className="group inline-flex items-center gap-3 rounded-full border border-[rgba(224,194,127,0.3)] bg-transparent px-8 py-4 text-xs font-semibold uppercase tracking-widest text-[var(--cream)] transition-all hover:bg-white/5">
                Baca Kisah Selengkapnya 
                <span className="transition-transform group-hover:translate-x-1">&rarr;</span>
              </Link>
            </motion.div>
          </motion.div>
          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
            viewport={{ once: true, margin: "-100px" }}
            className="order-1 lg:order-2 overflow-hidden rounded-[34px] border border-white/10 bg-white/5 shadow-[0_18px_60px_rgba(0,0,0,0.4)]"
          >
            <img src={portfolio[2].src} alt="Kisah Batik Srigaya" className="h-[450px] w-full object-cover md:h-[600px] transition-transform duration-[2s] hover:scale-105" />
          </motion.div>
        </div>
      </section>

      <section className="px-4 py-24 md:px-6 bg-black/10">
        <div className="mx-auto max-w-[1280px]">
          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={staggerContainer}
            className="text-center mb-16"
          >
            <motion.h2 variants={fadeUpVariant} className="font-serif text-4xl leading-[1] md:text-5xl">
              Koleksi <span className="italic font-light text-[var(--gold-2)]">Srigaya</span>
            </motion.h2>
          </motion.div>
          
          <div className="grid gap-6 md:grid-cols-3">
            {features.map((feature, idx) => (
              <motion.article 
                key={feature.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: idx * 0.15 }}
                viewport={{ once: true, margin: "-50px" }}
                className="group relative overflow-hidden rounded-[2xl] border border-[rgba(224,194,127,0.1)] bg-white/5 p-8 transition-colors hover:bg-white/10"
              >
                <div className="mb-6 h-px w-12 bg-[var(--gold-2)]/50 transition-all duration-500 group-hover:w-full"></div>
                <h3 className="font-serif text-2xl mb-4">{feature.title}</h3>
                <p className="text-sm leading-relaxed text-white/60">{feature.text}</p>
              </motion.article>
            ))}
          </div>
        </div>
      </section>

      <section className="px-4 py-24 md:px-6 relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(200,163,91,0.05),transparent_50%)] pointer-events-none"></div>
        <div className="mx-auto max-w-[1280px]">
          <div className="grid lg:grid-cols-[0.8fr_1.2fr] gap-16 items-center">
            <motion.div 
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              variants={staggerContainer}
            >
              <motion.p variants={fadeUpVariant} className="mb-4 text-xs font-semibold uppercase tracking-[0.3em] text-[var(--gold-2)]">Keistimewaan Srigaya</motion.p>
              <motion.h2 variants={fadeUpVariant} className="font-serif text-5xl leading-[1] tracking-tight">
                Mengapa Memilih <span className="italic block mt-2 text-white/80">Karya Kami?</span>
              </motion.h2>
              <motion.p variants={fadeUpVariant} className="mt-6 text-base leading-relaxed text-white/60">
                Lebih dari sekadar pakaian, setiap potong Batik Srigaya adalah manifestasi dari dedikasi, kebanggaan luhur, dan komitmen pada kualitas tanpa kompromi.
              </motion.p>
            </motion.div>
            
            <motion.div 
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              variants={staggerContainer}
              className="grid gap-6 sm:grid-cols-2"
            >
              {whyChooseUs.map((item, idx) => (
                <motion.div variants={fadeUpVariant} key={item.title} className="rounded-2xl border border-white/5 bg-white/5 p-6 backdrop-blur-sm">
                  <div className="text-[var(--gold-2)] font-serif text-3xl mb-3 opacity-40">0{idx + 1}</div>
                  <h4 className="font-serif text-xl tracking-wide mb-2">{item.title}</h4>
                  <p className="text-xs leading-relaxed text-white/60">{item.desc}</p>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>
      </section>
    </>
  );
}
