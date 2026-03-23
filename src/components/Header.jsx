import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";

export default function Header() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [open]);

  useEffect(() => setOpen(false), [location.pathname]);

  const links = [
    { to: "/",       label: "Início"  },
    { to: "/bolos",  label: "Bolos"   },
    { to: "/contato",label: "Contato" },
  ];

  return (
    <>
      <motion.header
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          scrolled ? "bg-parchment/95 backdrop-blur-sm border-b border-ink/8" : ""
        }`}
      >
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-5 lg:px-10">
          <Link to="/" className="group flex flex-col leading-none">
            <span className="font-display text-[1.65rem] italic font-[400] text-ink tracking-wide leading-none group-hover:text-copper transition-colors duration-300">
              Lili Monte
            </span>
            <span className="mt-1 text-[9px] tracking-[0.38em] uppercase text-stone font-[300]">
              Confeitaria & eventos
            </span>
          </Link>

          <nav className="hidden items-center gap-8 md:flex">
            {links.map((link) => (
              <Link
                key={link.to}
                to={link.to}
                className="relative text-[10.5px] tracking-[0.28em] uppercase text-stone hover:text-ink transition-colors duration-200 group"
              >
                {link.label}
                <span className="absolute -bottom-0.5 left-0 h-px w-0 bg-copper group-hover:w-full transition-all duration-400 origin-left" />
              </Link>
            ))}
            <Link
              to="/contato"
              className="text-[10.5px] tracking-[0.28em] uppercase text-parchment bg-ink px-5 py-2.5 hover:bg-copper transition-colors duration-300 font-[400]"
            >
              Pedir agora
            </Link>
          </nav>

          <button
            onClick={() => setOpen(!open)}
            aria-label="Menu"
            className="md:hidden flex flex-col gap-[5px] bg-transparent border-none cursor-pointer p-1"
          >
            <motion.span
              animate={{ rotate: open ? 45 : 0, y: open ? 7 : 0 }}
              className="block h-px w-7 bg-ink origin-center"
            />
            <motion.span
              animate={{ opacity: open ? 0 : 1 }}
              className="block h-px w-7 bg-ink"
            />
            <motion.span
              animate={{ rotate: open ? -45 : 0, y: open ? -7 : 0 }}
              className="block h-px w-7 bg-ink origin-center"
            />
          </button>
        </div>
      </motion.header>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, x: "100%" }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: "100%" }}
            transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
            className="fixed inset-0 z-40 flex flex-col bg-ink px-8 pt-24 md:hidden"
          >
            <nav className="flex flex-col gap-4">
              {links.map((link, i) => (
                <motion.div
                  key={link.to}
                  initial={{ opacity: 0, x: 24 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.1 + i * 0.08 }}
                >
                  <Link
                    to={link.to}
                    onClick={() => setOpen(false)}
                    className="font-display text-[3rem] italic font-[300] text-parchment/70 hover:text-parchment leading-[1.15] block"
                  >
                    {link.label}
                  </Link>
                </motion.div>
              ))}
              <motion.div
                initial={{ opacity: 0, x: 24 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.36 }}
                className="mt-6"
              >
                <Link
                  to="/contato"
                  onClick={() => setOpen(false)}
                  className="text-[11px] tracking-[0.35em] uppercase text-copper font-[400]"
                >
                   Fazer pedido
                </Link>
              </motion.div>
            </nav>
            <div className="mt-auto pb-10 border-t border-parchment/10 pt-8">
              <p className="text-[10px] tracking-[0.38em] uppercase text-parchment/30 font-[300]">
                Recife - PE  Encomendas abertas
              </p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
