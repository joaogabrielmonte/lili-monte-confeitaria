import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

const depoimentos = [
  {
    text: "O bolo do aniversário da minha filha ficou lindo e gostoso. Resolveu tudo numa encomenda só.",
    name: "Renata Oliveira",
    detalhe: "Aniversário infantil",
  },
  {
    text: "Pedi o kit festa completo e não precisei me preocupar com nada. Chegou tudo certinho e no horário.",
    name: "Marcos Ventura",
    detalhe: "Kit festa · 30 pessoas",
  },
  {
    text: "Fiz o almoço comemorativo pelo trabalho dela e todo mundo perguntou o contato. Recomendo muito.",
    name: "Clara Santos",
    detalhe: "Almoço comemorativo",
  },
];

export default function Depoimentos() {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 });

  return (
    <section ref={ref} className="bg-ink px-6 py-28 lg:px-10">
      <div className="mx-auto max-w-7xl">

        <div className="flex items-center gap-4 mb-16">
          <span className="h-px w-10 bg-copper flex-shrink-0" />
          <span className="text-[10px] tracking-[0.44em] uppercase text-parchment/35 font-[300]">Depoimentos</span>
        </div>

        <div className="grid grid-cols-1 gap-px bg-white/8 lg:grid-cols-3">
          {depoimentos.map((d, i) => (
            <motion.div
              key={d.name}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: i * 0.14, duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
              className="bg-ink px-8 py-10 lg:px-10 lg:py-12 flex flex-col"
              style={{ backgroundColor: "#1C1009" }}
            >
              <span className="font-display text-5xl leading-[0.85] text-copper font-[400] select-none">"</span>
              <p
                className="mt-5 font-display italic font-[300] text-parchment/82 leading-[1.42] flex-1"
                style={{ fontSize: "clamp(1.4rem, 2.2vw, 1.9rem)" }}
              >
                {d.text}
              </p>
              <div className="mt-8 pt-6 border-t border-parchment/10">
                <p className="text-sm font-[400] text-parchment/90">{d.name}</p>
                <p className="mt-1 text-[9.5px] tracking-[0.32em] uppercase text-parchment/35 font-[300]">{d.detalhe}</p>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
