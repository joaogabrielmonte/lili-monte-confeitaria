import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

export default function Footer() {
  const year = new Date().getFullYear();
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 });

  return (
    <footer ref={ref} className="bg-parchment border-t border-ink/10 px-6 py-20 lg:px-10">
      <div className="mx-auto max-w-7xl">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          className="grid grid-cols-1 gap-12 lg:grid-cols-[2fr_1fr_1fr]"
        >
          {/* Brand */}
          <div>
            <p className="font-display text-[2rem] italic font-[300] text-ink leading-none">
              Lili Monte
            </p>
            <p className="mt-1.5 text-[9px] tracking-[0.44em] uppercase text-stone font-[300]">
              Confeitaria & eventos · Recife - PE
            </p>
            <p className="mt-6 max-w-xs text-base leading-[1.9] text-stone font-[300]">
              Bolos, kits festa, almoços e eventos comemorativos feitos com cuidado e carinho, sempre sob encomenda.
            </p>
          </div>

          {/* Nav */}
          <div>
            <p className="text-[10px] tracking-[0.4em] uppercase text-stone font-[400] mb-6">Navegação</p>
            <nav className="flex flex-col gap-3">
              {[
                { to: "/",        label: "Início"  },
                { to: "/bolos",   label: "Bolos"   },
                { to: "/contato", label: "Contato" },
              ].map((l) => (
                <Link
                  key={l.to}
                  to={l.to}
                  className="text-sm text-stone hover:text-ink transition-colors duration-200 font-[300]"
                >
                  {l.label}
                </Link>
              ))}
            </nav>
          </div>

          {/* Contact */}
          <div>
            <p className="text-[10px] tracking-[0.4em] uppercase text-stone font-[400] mb-6">Contato</p>
            <div className="flex flex-col gap-2 text-sm text-stone font-[300]">
              <p>contato@elianemonte.com</p>
              <p>(11) 99999-9999</p>
            </div>
            <div className="mt-6 flex gap-3">
              {["Instagram", "WhatsApp"].map((s) => (
                <a
                  key={s}
                  href="#"
                  className="text-[9.5px] tracking-[0.3em] uppercase text-stone border border-ink/15 px-4 py-2 hover:border-copper hover:text-copper transition-all duration-200 font-[300]"
                >
                  {s}
                </a>
              ))}
            </div>
          </div>
        </motion.div>

        <div className="mt-16 pt-6 border-t border-ink/8 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3 text-[10px] tracking-[0.22em] uppercase text-stone/60 font-[300]">
          <p>© {year} Lili Monte Confeitaria. Todos os direitos reservados.</p>
          <p>Confeitaria & eventos · Encomendas sob medida</p>
        </div>
      </div>
    </footer>
  );
}
