import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import HeroSection from "../components/HeroSection";
import Diferenciais from "../components/Diferenciais";
import Vitrine from "../components/Vitrine";
import Depoimentos from "../components/Depoimentos";

const faqs = [
  {
    q: "O que vocês fazem?",
    a: "Bolos personalizados, kits festa, almoços comemorativos e mesas de eventos. Tudo feito aqui, com cuidado e sem pressa.",
  },
  {
    q: "Qual o prazo para encomendar?",
    a: "Bolos simples a partir de 2 dias. Kits festa e almoços pedem pelo menos 5 dias. Quanto antes avisar, melhor.",
  },
  {
    q: "Atendem restrições alimentares?",
    a: "Sim! Temos opções sem lactose e adaptamos receitas conforme a necessidade. É só avisar na hora do pedido.",
  },
  {
    q: "Como faço o pedido?",
    a: "Pelo WhatsApp ou pelo formulário aqui do site. Conta pra gente a data, a ocasião e quantas pessoas — a gente resolve o resto.",
  },
];

export default function Home() {
  return (
    <div className="bg-parchment">
      <HeroSection />
      <Diferenciais />
      <Vitrine />

      {/* CTA Section */}
      <section className="bg-gossamer px-6 py-28 lg:px-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.85, ease: [0.22, 1, 0.36, 1] }}
          className="mx-auto max-w-7xl grid grid-cols-1 gap-14 lg:grid-cols-2 lg:items-end"
        >
          <div>
            <div className="flex items-center gap-4 mb-8">
              <span className="h-px w-10 bg-copper flex-shrink-0" />
              <span className="text-[10px] tracking-[0.44em] uppercase text-stone font-[300]">Encomendas</span>
            </div>
            <h2
              className="font-display italic font-[300] text-ink leading-[0.9]"
              style={{ fontSize: "clamp(2.4rem, 5vw, 5rem)" }}
            >
              Me conta o que
você precisa,<br />a gente resolve.
            </h2>
          </div>

          <div>
            <p className="text-base leading-[1.9] text-stone font-[300] mb-8">
              Bolo, kit festa, almoço ou evento — é só mandar mensagem com a data e a quantidade de pessoas. A gente te responde rápido.
            </p>
            <div className="grid grid-cols-2 gap-6 mb-10 pt-6 border-t border-ink/10">
              <div>
                <p className="text-[9px] tracking-[0.4em] uppercase text-copper font-[400]">Ideal para</p>
                <p className="mt-2 text-sm leading-6 text-stone font-[300]">Aniversários, casamentos, formaturas, confraternizações.</p>
              </div>
              <div>
                <p className="text-[9px] tracking-[0.4em] uppercase text-copper font-[400]">Prazo médio</p>
                <p className="mt-2 text-sm leading-6 text-stone font-[300]">De 2 a 7 dias dependendo do que for. Quanto antes melhor!</p>
              </div>
            </div>
            <Link
              to="/contato"
              className="inline-flex items-center gap-4 text-[10.5px] tracking-[0.32em] uppercase text-parchment bg-ink px-8 py-4 hover:bg-copper transition-colors duration-300 font-[400]"
            >
              Enviar detalhes do pedido
              <span className="h-px w-4 bg-parchment/50 flex-shrink-0" />
            </Link>
          </div>
        </motion.div>
      </section>

      <Depoimentos />

      {/* FAQ Section */}
      <section className="bg-parchment px-6 py-28 lg:px-10">
        <div className="mx-auto max-w-7xl">
          <div className="flex items-center gap-4 mb-16">
            <span className="h-px w-10 bg-copper flex-shrink-0" />
            <span className="text-[10px] tracking-[0.44em] uppercase text-stone font-[300]">Dúvidas frequentes</span>
          </div>
          <div className="divide-y divide-ink/8">
            {faqs.map((faq, i) => (
              <motion.div
                key={faq.q}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.07, duration: 0.65 }}
                className="grid grid-cols-1 sm:grid-cols-[1fr_1.2fr] gap-4 sm:gap-14 py-8 lg:py-10 items-start"
              >
                <h3 className="font-display italic font-[300] text-ink leading-[1.3]" style={{ fontSize: "clamp(1.2rem, 2vw, 1.4rem)" }}>
                  {faq.q}
                </h3>
                <p className="text-base leading-[1.88] text-stone font-[300]">{faq.a}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
