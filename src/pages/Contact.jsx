import { useState } from "react";
import { contacts } from "../data/siteData";
import SectionHeading from "../components/SectionHeading";
import { useReveal } from "../components/Layout";

const contactLinks = [
  { label: "Instagram", value: "@batik.srigaya", href: contacts.instagram, external: true },
  { label: "Linktree", value: "Semua tautan resmi", href: contacts.linktree, external: true },
  { label: "WhatsApp", value: "+62 812-2583-3053", href: contacts.whatsapp, external: true },
  { label: "Email", value: "batiksrigaya@gmail.com", href: contacts.email, external: false },
];

export default function Contact() {
  useReveal();
  const [status, setStatus] = useState({ type: "idle", message: "" });
  const [form, setForm] = useState({ name: "", email: "", message: "" });

  const sendInquiry = async (e) => {
    e.preventDefault();
    setStatus({ type: "loading", message: "Menyampaikan pesan..." });

    try {
      const res = await fetch("/api/inquiry", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });

      const data = await res.json();
      if (!res.ok) throw new Error(data?.message || "Gagal menyampaikan pesan.");

      setStatus({ type: "success", message: data.message || "Pesan telah berlabuh." });
      setForm({ name: "", email: "", message: "" });
    } catch (err) {
      setStatus({ type: "error", message: err.message });
    }
  };

  return (
    <section className="px-4 py-8 md:px-6 md:py-16">
      <div className="mx-auto grid w-full max-w-[1280px] gap-8 lg:grid-cols-[1.06fr_0.94fr]">
        <div
          data-reveal
          className="rounded-[34px] border border-[rgba(224,194,127,0.18)] bg-[linear-gradient(180deg,rgba(255,255,255,0.06),rgba(255,255,255,0.03))] p-7 opacity-0 translate-y-6 shadow-[0_18px_60px_rgba(0,0,0,0.3)] transition duration-700 md:p-9"
        >
          <SectionHeading
            eyebrow="Hubungi Kami"
            title="Sapa Kami Untuk Pesanan Khusus."
            text="Tinggalkan pesan, ajukan kolaborasi, atau diskusikan kebutuhan busana eksklusif Anda."
          />

          <form onSubmit={sendInquiry} className="mt-8 grid gap-4">
            <input
              value={form.name}
              onChange={(e) => setForm((s) => ({ ...s, name: e.target.value }))}
              className="w-full rounded-2xl border border-white/10 bg-white/5 px-4 py-4 text-white outline-none transition placeholder:text-white/36 focus:border-[rgba(224,194,127,0.28)]"
              placeholder="Nama"
              required
            />
            <input
              type="email"
              value={form.email}
              onChange={(e) => setForm((s) => ({ ...s, email: e.target.value }))}
              className="w-full rounded-2xl border border-white/10 bg-white/5 px-4 py-4 text-white outline-none transition placeholder:text-white/36 focus:border-[rgba(224,194,127,0.28)]"
              placeholder="Surel / E-mail"
              required
            />
            <textarea
              rows="5"
              value={form.message}
              onChange={(e) => setForm((s) => ({ ...s, message: e.target.value }))}
              className="w-full rounded-2xl border border-white/10 bg-white/5 px-4 py-4 text-white outline-none transition placeholder:text-white/36 focus:border-[rgba(224,194,127,0.28)]"
              placeholder="Pesan Anda"
              required
            />
            <button
              type="submit"
              className="rounded-full border border-transparent bg-[linear-gradient(135deg,rgba(200,163,91,0.98),rgba(176,141,69,0.86))] px-5 py-3 font-medium text-[#1a1408] transition hover:-translate-y-0.5"
            >
              Kirim Pesan
            </button>

            {status.type !== "idle" ? (
              <p
                className={`text-sm ${
                  status.type === "success"
                    ? "text-emerald-300"
                    : status.type === "error"
                    ? "text-rose-300"
                    : "text-white/70"
                }`}
              >
                {status.message}
              </p>
            ) : null}
          </form>
        </div>

        <div data-reveal className="grid gap-4 opacity-0 translate-y-6 transition duration-700">
          <div className="rounded-[34px] border border-white/10 bg-white/5 p-7 shadow-[0_18px_60px_rgba(0,0,0,0.3)]">
            <h3 className="font-serif text-4xl leading-none">Kontak & Lokasi</h3>
            <p className="mt-3 text-sm leading-7 text-white/68">
              Klik kartu di bawah untuk langsung membuka kanal resmi Batik Srigaya.
            </p>

            <div className="mt-6 grid gap-3">
              {contactLinks.map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  target={item.external ? "_blank" : undefined}
                  rel={item.external ? "noreferrer" : undefined}
                  className="flex items-center justify-between gap-4 rounded-2xl border border-white/10 bg-white/5 p-4 transition duration-300 hover:-translate-y-0.5 hover:border-[rgba(224,194,127,0.25)] hover:bg-white/8"
                >
                  <div className="min-w-0">
                    <span className="block text-[11px] uppercase tracking-[0.28em] text-[var(--gold-2)]">
                      {item.label}
                    </span>
                    <span className="mt-1 block break-words text-sm font-medium leading-7 text-white/84">
                      {item.value}
                    </span>
                  </div>
                  <span className="shrink-0 text-white/40 transition group-hover:text-[var(--gold-2)]">
                    ↗
                  </span>
                </a>
              ))}

              <div className="rounded-2xl border border-white/10 bg-white/5 p-4">
                <span className="block text-[11px] uppercase tracking-[0.28em] text-[var(--gold-2)]">
                  Alamat Butik
                </span>
                <p className="mt-2 text-sm leading-7 text-white/78">{contacts.address}</p>
              </div>
            </div>
          </div>

          <div className="rounded-[34px] border border-white/10 bg-white/5 p-7 shadow-[0_18px_60px_rgba(0,0,0,0.28)]">
            <h4 className="font-serif text-3xl">Pesan Eksklusif</h4>
            <p className="mt-4 text-sm leading-7 text-white/72">
              Koleksi dibuat dengan seksama dan membutuhkan waktu khusus dalam pengerjaannya, menjamin setiap kain memiliki jati dirinya tersendiri.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
