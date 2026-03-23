import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { Link } from "react-router-dom";

const produtos = [
  {
    name: "Bolo de Aniversário",
    tag: "Bolo",
    img: "/images/confeiteira-1.jpg",
    price: "A partir de R$ 180",
  },
  {
    name: "Kit Festa Completo",
    tag: "Kit Festa",
    img: "/images/logolilisemfundo.png",
    price: "A partir de R$ 280",
  },
  {
    name: "Mesa de Evento",
    tag: "Eventos",
    img: "/images/logolilisemfundo.png",
    price: "Sob consulta",
  },
];

export default function Vitrine() {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.06 });

  return (
    <section ref={ref} className="bg-parchment px-6 py-28 lg:px-10">
      <div className="mx-auto max-w-7xl">

        {/* Header row */}
        <div className="flex items-end justify-between mb-16">
          <div>
            <div className="flex items-center gap-4 mb-6">
              <span className="h-px w-10 bg-copper flex-shrink-0" />
              <span className="text-[10px] tracking-[0.44em] uppercase text-stone font-[300]">O que fazemos</span>
            </div>
            <h2
              className="font-display italic font-[300] text-ink leading-[0.92]"
              style={{ fontSize: "clamp(2.4rem, 5.5vw, 5.5rem)" }}
            >
              Bolos, kits<br />e muito mais.
            </h2>
          </div>
          <Link
            to="/bolos"
            className="hidden sm:flex items-center gap-3 text-[10.5px] tracking-[0.32em] uppercase text-stone hover:text-ink transition-colors duration-300 group font-[300]"
          >
            Ver todos
            <span className="h-px w-4 bg-stone group-hover:w-8 group-hover:bg-ink transition-all duration-500 flex-shrink-0" />
          </Link>
        </div>

        {/* Asymmetric editorial grid */}
        <div className="grid grid-cols-1 gap-6 lg:grid-cols-[1.45fr_1fr] lg:gap-10">

          {/* Large left image */}
          <motion.div
            initial={{ opacity: 0, y: 28 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
            className="group cursor-pointer"
          >
            <div className="overflow-hidden aspect-[3/4]">
              <img
                src={produtos[0].img}
                alt={produtos[0].name}
                className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-[1.03]"
              />
            </div>
            <div className="mt-4 pb-4 border-b border-ink/10 flex items-start justify-between">
              <div>
                <p className="text-[9px] tracking-[0.38em] uppercase text-copper font-[400]">{produtos[0].tag}</p>
                <p className="mt-1 font-display text-[1.5rem] italic font-[300] text-ink">{produtos[0].name}</p>
              </div>
              <p className="text-[10px] tracking-[0.2em] uppercase text-stone font-[300] mt-1 text-right shrink-0 ml-4">
                {produtos[0].price}
              </p>
            </div>
          </motion.div>

          {/* Right: two stacked */}
          <div className="flex flex-col gap-8">
            {produtos.slice(1).map((p, i) => (
              <motion.div
                key={p.name}
                initial={{ opacity: 0, y: 28 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: 0.15 + i * 0.13, duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
                className="group cursor-pointer"
              >
                <div className="overflow-hidden aspect-[4/3]">
                  <img
                    src={p.img}
                    alt={p.name}
                    className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-[1.04]"
                  />
                </div>
                <div className="mt-3 pb-3 border-b border-ink/10 flex items-start justify-between">
                  <div>
                    <p className="text-[9px] tracking-[0.38em] uppercase text-copper font-[400]">{p.tag}</p>
                    <p className="mt-1 font-display text-[1.2rem] italic font-[300] text-ink">{p.name}</p>
                  </div>
                  <p className="text-[10px] tracking-[0.2em] uppercase text-stone font-[300] text-right shrink-0 ml-4">{p.price}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        <div className="mt-10 sm:hidden">
          <Link
            to="/bolos"
            className="text-[10.5px] tracking-[0.32em] uppercase text-stone hover:text-ink transition-colors duration-300 font-[300]"
          >
            Ver todos os bolos 
          </Link>
        </div>
      </div>
    </section>
  );
}
