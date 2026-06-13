import { useState } from "react";
import { contacts } from "../data/siteData";
import SectionHeading from "../components/SectionHeading";
import { useReveal } from "../components/Layout";

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
        <div data-reveal className="rounded-[34px] border border-[rgba(224,194,127,0.18)] bg-[linear-gradient(180deg,rgba(255,255,255,0.06),rgba(255,255,255,0.03))] p-7 opacity-0 translate-y-6 shadow-[0_18px_60px_rgba(0,0,0,0.3)] transition duration-700 md:p-9">
          <SectionHeading
            eyebrow="Hubungi Kami"
            title="Sapa Kami Untuk Pesanan Khusus."
            text="Tinggalkan pesan, ajukan kolaborasi, atau diskusikan kebutuhan busana eksklusif Anda."
          />

          <form onSubmit={sendInquiry} className="mt-8 grid gap-4">
            <input
              value={form.name}
              onChange={(e) => setForm((s) => ({ ...s, name: e.target.value }))}
              className="w-full rounded-2xl border border-white/10 bg-white/4 px-4 py-4 text-white outline-none transition placeholder:text-white/36 focus:border-[rgba(224,194,127,0.28)]"
              placeholder="Nama"
              required
            />
            <input
              type="email"
              value={form.email}
              onChange={(e) => setForm((s) => ({ ...s, email: e.target.value }))}
              className="w-full rounded-2xl border border-white/10 bg-white/4 px-4 py-4 text-white outline-none transition placeholder:text-white/36 focus:border-[rgba(224,194,127,0.28)]"
              placeholder="Surel / E-mail"
              required
            />
            <textarea
              rows="5"
              value={form.message}
              onChange={(e) => setForm((s) => ({ ...s, message: e.target.value }))}
              className="w-full rounded-2xl border border-white/10 bg-white/4 px-4 py-4 text-white outline-none transition placeholder:text-white/36 focus:border-[rgba(224,194,127,0.28)]"
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
              <p className={`text-sm ${status.type === "success" ? "text-emerald-300" : status.type === "error" ? "text-rose-300" : "text-white/70"}`}>
                {status.message}
              </p>
            ) : null}
          </form>
        </div>

        <div data-reveal className="grid gap-4 opacity-0 translate-y-6 transition duration-700">
          <div className="rounded-[34px] border border-white/10 bg-white/5 p-7 shadow-[0_18px_60px_rgba(0,0,0,0.3)]">
            <h3 className="font-serif text-4xl leading-none">Kontak & Lokasi</h3>
            <div className="mt-6 grid gap-3">
              {[
                ["Instagram", contacts.instagram, "https://instagram.com/batik.srigaya"],
                ["Linktree", contacts.linktree, "https://linktr.ee/batiksrigaya"],
                ["WhatsApp", contacts.whatsapp, "https://wa.me/6281225833053"],
                ["Surel Pribadi", contacts.email, "mailto:batiksrigaya@gmail.com"],
                ["Alamat", contacts.address, null],
              ].map(([label, value, link]) => (
                <div key={label} className="flex flex-col gap-1 rounded-2xl border border-white/10 bg-white/4 p-4">
                  <span className="text-xs uppercase tracking-[0.25em] text-[var(--gold-2)]">{label}</span>
                  {link ? (
                    <a href={link} target="_blank" rel="noreferrer" className="text-sm font-medium leading-7 text-white/84 hover:text-[var(--gold-2)] transition">
                      {value}
                    </a>
                  ) : (
                    <b className="text-sm font-medium leading-7 text-white/84">{value}</b>
                  )}
                </div>
              ))}
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
