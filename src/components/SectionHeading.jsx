export default function SectionHeading({ eyebrow, title, text, align = "left" }) {
  const alignClass = align === "center" ? "mx-auto text-center" : "";
  
  // Pisahkan kata pertama atau kata spesifik untuk di italic (agar tipografi lebih artistik)
  const words = title.split(" ");
  const firstWord = words.shift();
  const restOfTitle = words.join(" ");

  return (
    <div className={`max-w-4xl ${alignClass}`}>
      {eyebrow ? (
        <p className="mb-4 text-xs font-semibold uppercase tracking-[0.35em] text-[var(--gold-2)]">
          {eyebrow}
        </p>
      ) : null}
      <h2 className="font-serif text-4xl leading-[1] tracking-tight md:text-6xl">
        <span className="italic font-medium text-white/90">{firstWord}</span> {restOfTitle}
      </h2>
      {text ? (
        <p className="mt-5 max-w-3xl text-sm leading-relaxed text-white/70 md:text-base md:leading-loose">
          {text}
        </p>
      ) : null}
    </div>
  );
}
