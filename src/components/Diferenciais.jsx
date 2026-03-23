import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

const diferenciais = [
  {
    num: "01",
    title: "Tudo fresco e caseiro",
    text: "Cada item é preparado com ingredientes frescos, sem misturas industriais. Do bolo ao kit festa, tudo sai daqui.",
  },
  {
    num: "02",
    title: "Do seu jeito",
    text: "Conta pra gente o que você quer: a data, o tema, quantas pessoas. A gente monta uma proposta que cabe no seu plano.",
  },
  {
    num: "03",
    title: "Com você do início ao fim",
    text: "Combinamos entrega, retirada ou almoço no local. A gente não desaparece depois que fecha o pedido.",
  },
];

export default function Diferenciais() {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 });

  return (
    <section ref={ref} className="bg-gossamer px-6 py-28 lg:px-10">
      <div className="mx-auto max-w-7xl">
        <div className="flex items-center gap-4 mb-16">
          <span className="h-px w-10 bg-copper flex-shrink-0" />
          <span className="text-[10px] tracking-[0.44em] uppercase text-stone font-[300]">Como trabalhamos</span>
        </div>

        <div className="divide-y divide-ink/10">
          {diferenciais.map((d, i) => (
            <motion.div
              key={d.num}
              initial={{ opacity: 0, y: 16 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: i * 0.14, duration: 0.75, ease: [0.22, 1, 0.36, 1] }}
              className="group grid grid-cols-[64px_1fr] sm:grid-cols-[80px_1fr_1fr] gap-6 sm:gap-10 py-10 lg:py-14 items-start"
            >
              <span className="font-display text-[3.5rem] text-ink/12 font-[300] leading-none group-hover:text-copper/40 transition-colors duration-500 select-none">
                {d.num}
              </span>
              <h3 className="font-display italic font-[300] text-ink leading-[1.1]" style={{ fontSize: "clamp(1.8rem, 3vw, 2.6rem)" }}>
                {d.title}
              </h3>
              <p className="hidden sm:block text-base leading-[1.88] text-stone font-[300] max-w-sm self-center">
                {d.text}
              </p>
              <p className="sm:hidden col-span-2 text-base leading-[1.88] text-stone font-[300] mt-1">
                {d.text}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
