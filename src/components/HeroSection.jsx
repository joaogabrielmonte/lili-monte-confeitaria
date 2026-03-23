import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const tickerItems = [
  "Bolos", "·", "Kits Festa", "·", "Almoços", "·",
  "Eventos Comemorativos", "·", "Aniversários", "·", "Casamentos", "·", "Recife - PE", "·",
];

export default function HeroSection() {
  const stagger = {
    hidden: {},
    visible: { transition: { staggerChildren: 0.11, delayChildren: 0.3 } },
  };
  const item = {
    hidden: { opacity: 0, y: 36 },
    visible: { opacity: 1, y: 0, transition: { duration: 1.1, ease: [0.22, 1, 0.36, 1] } },
  };

  return (
    <section className="relative min-h-screen bg-parchment overflow-hidden">
      <motion.div
        variants={stagger}
        initial="hidden"
        animate="visible"
        className="mx-auto max-w-7xl px-6 lg:px-10 pt-32 pb-28 sm:pt-36"
      >
        {/* Top label */}
        <motion.div variants={item} className="flex items-center gap-3 mb-14">
          <span className="h-px w-10 bg-copper flex-shrink-0" />
          <span className="text-[10px] tracking-[0.44em] uppercase text-stone font-[300]">
            Recife · PE · Encomendas abertas
          </span>
        </motion.div>

        {/* Main grid */}
        <div className="grid grid-cols-1 gap-14 lg:grid-cols-[3fr_2fr] lg:gap-20 items-end">

          {/* Left: heading block */}
          <div>
            <motion.h1
              variants={item}
              className="font-display italic font-[300] text-ink leading-[0.88]"
              style={{ fontSize: "clamp(3.8rem, 9.5vw, 9.5rem)" }}
            >
              Feito com<br />
              <span className="not-italic font-[400]">carinho</span><br />
              pra você.
            </motion.h1>

            <motion.p
              variants={item}
              className="mt-10 max-w-md text-[1.05rem] leading-[1.9] text-stone font-[300]"
            >
              Bolos, kits festa, almoços e eventos comemorativos feitos
              com cuidado e carinho pela Lili Monte, aqui em Recife.
            </motion.p>

            <motion.div variants={item} className="mt-10 flex flex-wrap gap-8 items-center">
              <Link
                to="/contato"
                className="group flex items-center gap-4 text-[10.5px] tracking-[0.32em] uppercase text-ink font-[400]"
              >
                <span className="h-px w-6 bg-ink group-hover:w-12 transition-[width] duration-500 flex-shrink-0" />
                Pedir orçamento
              </Link>
              <Link
                to="/bolos"
                className="group flex items-center gap-4 text-[10.5px] tracking-[0.32em] uppercase text-stone hover:text-ink transition-colors duration-300 font-[300]"
              >
                Ver catálogo
                <span className="h-px w-4 bg-stone group-hover:bg-ink group-hover:w-8 transition-all duration-500 flex-shrink-0" />
              </Link>
            </motion.div>
          </div>

          {/* Right: image */}
          <motion.div variants={item} className="relative">
            <div
              className="relative overflow-hidden aspect-[3/4]"
              style={{ maxHeight: "72vh" }}
            >
              <img
                src="/images/confeiteira-1.jpg"
                alt="Bolo artesanal com frutas vermelhas"
                className="h-full w-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-ink/65 via-ink/5 to-transparent" />
              <div className="absolute bottom-0 left-0 right-0 p-6">
                <p className="text-[9px] tracking-[0.42em] uppercase text-parchment/45 font-[300]">Em destaque</p>
                <p className="mt-1.5 font-display text-[1.35rem] italic font-[300] text-parchment/90">
                  Baunilha &amp; Frutas Vermelhas
                </p>
              </div>
            </div>
            {/* Geometric offset accent */}
            <div
              className="absolute inset-0 border border-copper/25 pointer-events-none"
              style={{ transform: "translate(12px, 12px)", zIndex: -1 }}
            />
          </motion.div>
        </div>

        {/* Stats strip */}
        <motion.div
          variants={item}
          className="mt-20 pt-8 border-t border-ink/10 grid grid-cols-3 gap-6"
        >
          {[
            { n: "500+",   l: "Encomendas feitas" },
            { n: "5 anos", l: "Servindo Recife"   },
            { n: "100%",   l: "Feito na hora"     },
          ].map((s) => (
            <div key={s.n}>
              <p className="font-display text-[2.2rem] font-[400] text-ink leading-none">{s.n}</p>
              <p className="mt-2 text-[10px] tracking-[0.3em] uppercase text-stone font-[300]">{s.l}</p>
            </div>
          ))}
        </motion.div>
      </motion.div>

      {/* Ticker strip */}
      <div className="absolute bottom-0 left-0 right-0 overflow-hidden border-t border-ink/8 bg-gossamer py-3">
        <div className="flex animate-ticker whitespace-nowrap" style={{ width: "max-content" }}>
          {[...tickerItems, ...tickerItems].map((item, i) => (
            <span
              key={i}
              className="inline-block px-5 text-[10px] tracking-[0.4em] uppercase text-stone font-[300] flex-shrink-0"
            >
              {item}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
