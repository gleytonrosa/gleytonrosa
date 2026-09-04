import { createFileRoute } from "@tanstack/react-router";
import { Mail, Instagram, Facebook, Linkedin, MapPin } from "lucide-react";

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
    d: "Condução de projetos de estruturação comercial e aceleração de resultados para empresas de todo o território nacional.",
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
  { Icon: Mail, label: "E-mail", value: "gleyton.corporativo@gmail.com", href: "mailto:gleyton.corporativo@gmail.com" },
  { Icon: WhatsAppIcon, label: "WhatsApp", value: "22 99261-5382", href: "https://wa.me/5522992615382" },
  { Icon: WhatsAppIcon, label: "Comercial", value: "22 98830-8762", href: "https://wa.me/5522988308762" },
  { Icon: WhatsAppIcon, label: "Marketing", value: "22 92550-0775", href: "https://wa.me/5522925500775" },
  { Icon: Instagram, label: "Instagram", value: "@gleyton.rosa", href: "https://instagram.com/gleyton.rosa" },
  { Icon: Facebook, label: "Facebook", value: "@gleyton.rosa", href: "https://facebook.com/gleyton.rosa" },
  { Icon: Linkedin, label: "LinkedIn", value: "@gleyton.rosa", href: "https://linkedin.com/in/gleyton.rosa" },
  { Icon: MapPin, label: "Localização", value: "Campos dos Goytacazes — RJ", href: null },
];

function WhatsAppIcon({ className }: { className?: string; strokeWidth?: number }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
    </svg>
  );
}

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
            src={monogram.url}
            alt="Marca GR — Gleyton Rosa"
            className="mx-auto w-24 object-contain sm:w-32"
          />
          <h1 className="mt-8 font-display text-4xl font-light leading-tight tracking-wide sm:text-6xl">
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
          <div className="mt-8 flex flex-col gap-6 sm:flex-row sm:items-start">
            <img
              src={portrait.url}
              alt="Gleyton Rosa"
              className="size-24 shrink-0 rounded-full object-cover ring-1 ring-primary/40 sm:size-28"
            />
            <div className="min-w-0">
              <p className="max-w-[56ch] text-[15px] leading-relaxed text-foreground/90">
                Atuo na fronteira entre estratégia e execução comercial. Meu trabalho começa no diagnóstico
                honesto da operação e termina na rotina de gestão que faz o número acontecer — com time engajado
                e processo claro.
              </p>
              <p className="mt-4 max-w-[56ch] text-[15px] leading-relaxed text-muted-foreground">
                Residente em Campos dos Goytacazes, conduzo projetos de estruturação comercial, expansão de mercado
                e desenvolvimento de lideranças para empresas que querem crescer com consistência.
              </p>
            </div>
          </div>
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
