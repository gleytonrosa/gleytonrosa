import { createFileRoute } from "@tanstack/react-router";
import { Mail, Phone, Instagram, Facebook, Linkedin, MapPin } from "lucide-react";

import monogram from "@/assets/gr-monogram.png.asset.json";
import portrait from "@/assets/gleyton-portrait.png.asset.json";

const TITLE = "Gleyton Rosa — Executivo de Negócios e Estratégia Comercial";
const DESCRIPTION =
  "Executivo de negócios e estratégia comercial em Campos dos Goytacazes. Foco, estratégia e resultados na condução de operações e times comerciais.";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: TITLE },
      { name: "description", content: DESCRIPTION },
      { property: "og:title", content: TITLE },
      { property: "og:description", content: DESCRIPTION },
    ],
  }),
  component: Index,
});

const nav = [
  { href: "#sobre", label: "Sobre" },
  { href: "#atuacao", label: "Atuação" },
  { href: "#trajetoria", label: "Trajetória" },
  { href: "#contato", label: "Contato" },
];

const pilares = [
  {
    n: "01",
    t: "Estratégia Comercial",
    d: "Desenho de posicionamento, política comercial e metas que sustentam crescimento previsível.",
  },
  {
    n: "02",
    t: "Gestão de Operações",
    d: "Processos, indicadores e rotina de gestão para transformar plano em execução diária.",
  },
  {
    n: "03",
    t: "Liderança de Times",
    d: "Formação, treinamento e cobrança de equipes de vendas com clareza de papel e resultado.",
  },
  {
    n: "04",
    t: "Expansão e Novos Negócios",
    d: "Abertura de mercados, parcerias e canais com leitura fina de contexto regional.",
  },
];

const trajetoria = [
  {
    p: "Atual",
    c: "Executivo de Negócios · Consultoria independente",
    d: "Condução de projetos de estruturação comercial e aceleração de resultados para empresas do Norte Fluminense.",
  },
  {
    p: "Anos recentes",
    c: "Gestão Comercial · Operações regionais",
    d: "Liderança de equipes de vendas, definição de metas e implantação de rotina de acompanhamento por indicadores.",
  },
  {
    p: "Início de carreira",
    c: "Vendas e Relacionamento",
    d: "Base construída no campo: negociação, carteira de clientes e leitura direta da necessidade do cliente.",
  },
];

const contatos = [
  { Icon: Mail, label: "E-mail", value: "gleytoncomercial@gmail.com", href: "mailto:gleytoncomercial@gmail.com" },
  { Icon: Phone, label: "Telefone", value: "22 99261-5382", href: "tel:+5522992615382" },
  { Icon: Instagram, label: "Instagram", value: "@gleyton.rosa", href: "https://instagram.com/gleyton.rosa" },
  { Icon: Facebook, label: "Facebook", value: "@gleyton.rosa", href: "https://facebook.com/gleyton.rosa" },
  { Icon: Linkedin, label: "LinkedIn", value: "@gleyton.rosa", href: "https://linkedin.com/in/gleyton.rosa" },
  { Icon: MapPin, label: "Localização", value: "Campos dos Goytacazes — RJ", href: null },
];

function SectionLabel({ n, children }: { n: string; children: string }) {
  return (
    <div className="flex items-center gap-4">
      <span className="font-sans text-[11px] tracking-brand text-primary">{n}</span>
      <span className="font-sans text-[11px] uppercase tracking-brand text-muted-foreground">{children}</span>
      <span className="h-px flex-1 bg-border" />
    </div>
  );
}

function Index() {
  return (
    <div className="min-h-screen bg-background">
      <header className="sticky top-0 z-50 border-b border-border bg-background/85 backdrop-blur-md">
        <div className="mx-auto flex max-w-4xl items-center justify-between px-5 py-3.5">
          <a href="#topo" className="flex items-center gap-2.5">
            <img src={monogram.url} alt="Monograma GR de Gleyton Rosa" className="size-7 object-contain" />
            <span className="font-display text-base tracking-wide text-foreground">Gleyton Rosa</span>
          </a>
          <nav className="hidden items-center gap-6 sm:flex">
            {nav.map((i) => (
              <a
                key={i.href}
                href={i.href}
                className="font-sans text-[11px] uppercase tracking-[0.18em] text-muted-foreground transition-colors hover:text-primary"
              >
                {i.label}
              </a>
            ))}
          </nav>
        </div>
      </header>

      <main id="topo" className="mx-auto max-w-4xl px-5">
        <section className="pt-16 pb-20 text-center sm:pt-24">
          <img
            src={portrait.url}
            alt="Gleyton Rosa"
            className="mx-auto size-28 rounded-full object-cover ring-1 ring-border sm:size-32"
          />
          <img
            src={monogram.url}
            alt="Marca GR — Gleyton Rosa"
            className="mx-auto mt-6 w-20 object-contain opacity-70 sm:w-24"
          />
          <h1 className="mt-6 font-display text-4xl font-light leading-tight tracking-wide sm:text-6xl">
            <span className="text-foreground">GLEYTON </span>
            <span className="text-gold">ROSA</span>
          </h1>
          <div className="mt-5 flex items-center justify-center gap-4">
            <span className="h-px w-10 rule-gold" />
            <p className="font-sans text-[10px] uppercase leading-relaxed tracking-brand text-muted-foreground sm:text-[11px]">
              Executivo de Negócios e
              <br />
              Estratégia Comercial
            </p>
            <span className="h-px w-10 rule-gold" />
          </div>
          <p className="mx-auto mt-10 max-w-[46ch] text-[15px] leading-relaxed text-muted-foreground">
            Transformo intenção comercial em operação que entrega. Estratégia, disciplina de execução e
            liderança de equipes que sustentam resultado no longo prazo.
          </p>
          <a
            href="#contato"
            className="mt-10 inline-block rounded-sm px-8 py-3.5 font-sans text-[11px] uppercase tracking-brand text-primary-foreground shadow-[var(--shadow-gold)] transition-opacity hover:opacity-90"
            style={{ backgroundImage: "var(--gradient-gold)" }}
          >
            Fale comigo
          </a>
          <div className="mt-16 border-t border-border pt-4">
            <p className="font-sans text-[10px] uppercase tracking-brand text-muted-foreground">
              Foco <span className="text-primary">•</span> Estratégia <span className="text-primary">•</span>{" "}
              Resultados
            </p>
          </div>
        </section>

        <section id="sobre" className="border-t border-border py-16">
          <SectionLabel n="01">Sobre</SectionLabel>
          <p className="mt-8 max-w-[56ch] text-[15px] leading-relaxed text-foreground/90">
            Atuo na fronteira entre estratégia e execução comercial. Meu trabalho começa no diagnóstico honesto
            da operação e termina na rotina de gestão que faz o número acontecer — com time engajado e processo
            claro.
          </p>
          <p className="mt-4 max-w-[56ch] text-[15px] leading-relaxed text-muted-foreground">
            Baseado em Campos dos Goytacazes, conduzo projetos de estruturação comercial, expansão de mercado e
            desenvolvimento de lideranças para empresas que querem crescer com consistência.
          </p>
        </section>

        <section id="atuacao" className="border-t border-border py-16">
          <SectionLabel n="02">Atuação</SectionLabel>
          <div className="mt-8 grid gap-px overflow-hidden border border-border bg-border sm:grid-cols-2">
            {pilares.map((p) => (
              <div key={p.n} className="bg-card p-6">
                <span className="font-sans text-[11px] tracking-brand text-primary">{p.n}</span>
                <h3 className="mt-3 font-display text-xl tracking-wide text-foreground">{p.t}</h3>
                <p className="mt-2 text-[13.5px] leading-relaxed text-muted-foreground">{p.d}</p>
              </div>
            ))}
          </div>
        </section>

        <section id="trajetoria" className="border-t border-border py-16">
          <SectionLabel n="03">Trajetória</SectionLabel>
          <ol className="relative mt-10 border-l border-border">
            {trajetoria.map((t) => (
              <li key={t.c} className="relative pb-10 pl-7 last:pb-0">
                <span className="absolute -left-[4.5px] top-2 size-2 rounded-full bg-primary" />
                <p className="font-sans text-[10px] uppercase tracking-brand text-primary">{t.p}</p>
                <h3 className="mt-2 font-display text-xl tracking-wide text-foreground">{t.c}</h3>
                <p className="mt-1.5 max-w-[48ch] text-[13.5px] leading-relaxed text-muted-foreground">{t.d}</p>
              </li>
            ))}
          </ol>
        </section>

        <section className="border-t border-border py-20 text-center">
          <p className="mx-auto max-w-[26ch] font-display text-2xl font-light italic leading-snug text-foreground sm:text-3xl">
            “Resultado não é sorte. É estratégia repetida com disciplina.”
          </p>
          <p className="mt-6 font-sans text-[10px] uppercase tracking-brand text-muted-foreground">
            Gleyton Rosa
          </p>
        </section>

        <section id="contato" className="border-t border-border py-16">
          <SectionLabel n="04">Contato</SectionLabel>
          <h2 className="mt-8 max-w-[24ch] font-display text-3xl font-light leading-tight tracking-wide text-foreground">
            Vamos conversar sobre o próximo passo do seu negócio.
          </h2>
          <div className="mt-8 grid gap-px overflow-hidden border border-border bg-border sm:grid-cols-2">
            {contatos.map(({ Icon, label, value, href }) => {
              const inner = (
                <span className="flex items-center gap-4">
                  <span className="grid size-9 shrink-0 place-items-center rounded-full border border-primary/50">
                    <Icon className="size-4 text-primary" strokeWidth={1.5} />
                  </span>
                  <span className="min-w-0">
                    <span className="block font-sans text-[10px] uppercase tracking-brand text-muted-foreground">
                      {label}
                    </span>
                    <span className="block truncate text-[14px] text-foreground">{value}</span>
                  </span>
                </span>
              );
              return href ? (
                <a
                  key={label}
                  href={href}
                  target={href.startsWith("http") ? "_blank" : undefined}
                  rel={href.startsWith("http") ? "noreferrer" : undefined}
                  className="bg-card p-5 transition-colors hover:bg-secondary"
                >
                  {inner}
                </a>
              ) : (
                <div key={label} className="bg-card p-5">
                  {inner}
                </div>
              );
            })}
          </div>
        </section>
      </main>

      <footer className="border-t border-border py-10 text-center">
        <p className="font-sans text-[10px] uppercase tracking-brand text-muted-foreground">
          Foco <span className="text-primary">•</span> Estratégia <span className="text-primary">•</span>{" "}
          Resultados
        </p>
        <p className="mt-3 font-sans text-[10px] tracking-[0.15em] text-muted-foreground/60">
          © {new Date().getFullYear()} Gleyton Rosa · Campos dos Goytacazes — RJ
        </p>
      </footer>
    </div>
  );
}
