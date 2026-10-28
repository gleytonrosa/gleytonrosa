import { createFileRoute } from "@tanstack/react-router";
import { Mail, Instagram, Facebook, MapPin } from "lucide-react";

import logoPrincipal from "@/assets/gr-logo-principal.png.asset.json";
import monograma from "@/assets/gr-monograma.png.asset.json";
import portrait from "@/assets/gleyton-portrait.png.asset.json";

const TITLE = "Gleyton Rosa — IA Aplicada a Negócios, Marketing e Estratégia Comercial";
const DESCRIPTION =
  "Gleyton Rosa, executivo de gestão comercial e marketing em Campos dos Goytacazes. IA aplicada a negócios, estratégia comercial, RevOps, dados e BI.";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: TITLE },
      { name: "description", content: DESCRIPTION },
      { property: "og:title", content: TITLE },
      { property: "og:description", content: DESCRIPTION },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary" },
    ],
  }),
  component: Index,
});

const nav = [
  { href: "#sobre", label: "Sobre" },
  { href: "#atuacao", label: "Atuação" },
  { href: "#ia", label: "IA" },
  { href: "#servicos", label: "Serviços" },
  { href: "#trajetoria", label: "Trajetória" },
  { href: "#formacao", label: "Formação" },
  { href: "#conteudo", label: "Conteúdo" },
  { href: "#contato", label: "Contato" },
];

const pilares = [
  {
    n: "01",
    t: "Marketing e Posicionamento",
    d: "Marca, posicionamento e geração de demanda para atrair o cliente certo e sustentar a venda.",
  },
  {
    n: "02",
    t: "Estratégia Comercial",
    d: "Modelo de vendas, prospecção, política comercial e metas que sustentam crescimento previsível.",
  },
  {
    n: "03",
    t: "Tecnologia e IA",
    d: "Automação, CRM, dados e inteligência artificial aplicados ao processo comercial e à gestão.",
  },
  {
    n: "04",
    t: "Gestão e Expansão",
    d: "Processos, indicadores e rotina de gestão, com leitura de mercado para abrir canais e novos negócios.",
  },
];

const iaTopicos = [
  "ChatGPT e IA generativa",
  "Engenharia de prompts e assistentes",
  "Agentes e automação de processos",
  "RevOps e CRM",
  "BI e dados",
  "Prototipagem de soluções digitais",
  "IA em marketing, vendas e gestão",
];

const servicos = [
  { t: "Consultoria em IA aplicada a negócios", d: "Diagnóstico de processos e identificação de onde a IA gera ganho real de produtividade e decisão." },
  { t: "ChatGPT e engenharia de prompts", d: "Uso estruturado de IA generativa, prompts e assistentes para rotinas comerciais e de gestão." },
  { t: "Inteligência comercial e RevOps", d: "Integração de marketing, vendas e pós-venda com processos, CRM e indicadores comuns." },
  { t: "Dados e BI", d: "Organização de dados e painéis para acompanhar resultados e apoiar decisões." },
  { t: "Desenvolvimento e prototipagem com IA", d: "Prototipagem de soluções digitais e automações para validar ideias com agilidade." },
  { t: "Treinamentos corporativos", d: "Capacitação de equipes em IA, marketing, vendas e gestão comercial." },
];

const conteudos = [
  { t: "GR Educação", d: "Cursos, e-books e treinamentos", futureHref: "https://suportei.grrosa.online" },
  { t: "GR Notícias", d: "Notícias, análises e tendências em IA e tecnologia", futureHref: "https://noticias.grrosa.online" },
];

const trajetoria = [
  {
    p: "Atual",
    c: "Executivo de Negócios · Gleyton Rosa",
    d: "Marketing, estratégia comercial, tecnologia e IA aplicados a negócios, com atuação direta e individual.",
  },
  {
    p: "Atual",
    c: "Diretor Comercial e de Marketing · Inovação Licitações",
    d: "Condução da área comercial e do marketing da empresa, com foco em licitações.",
  },
  {
    p: "Negócios próprios",
    c: "Empresário · Ilumina Empreendimentos",
    d: "Proprietário da Ilumina Empreendimentos.",
  },
  {
    p: "Projetos técnicos",
    c: "Segurança e Coordenação de Projetos",
    d: "Sistemas de segurança na Fort Macaé e coordenação técnica de projetos na Tela Viva Ltda.",
  },
  {
    p: "Início de carreira",
    c: "Base técnica e corporativa",
    d: "Técnico de sistemas na Servcom, gerente no Bradesco, consultor técnico na Volkswagen e suporte e tecnologia na Embratel.",
  },
];

const graduacao = [
  "Tecnólogo em Marketing",
  "Tecnólogo em Logística",
  "Engenharia da Computação (em andamento)",
];

const posGraduacao = [
  {
    t: "Marketing e Vendas",
    itens: [
      "MBA Executivo em Gestão Comercial, Marketing e Vendas",
      "MBA Executivo em Gestão Estratégica de Marketing, Planejamento e Inteligência Competitiva",
      "MBA Executivo em Marketing e Redes Sociais",
    ],
  },
  {
    t: "Gestão e Inovação",
    itens: ["MBA Executivo em Gestão Empresarial", "MBA em Gestão Empresarial e Inovação"],
  },
  {
    t: "Inteligência de Mercado e Dados",
    itens: [
      "MBA Executivo em Inteligência Comercial e de Mercado",
      "MBA Executivo em Gestão Competitiva e Business Intelligence (BI)",
      "MBA em Tecnologia para Negócios: Data Science e Big Data",
      "Business Intelligence",
    ],
  },
  { t: "Tecnologia", itens: ["Inteligência Artificial"] },
];

const contatos = [
  { Icon: Mail, label: "E-mail", value: "contato@grrosa.online", href: "mailto:contato@grrosa.online" },
  { Icon: WhatsAppIcon, label: "WhatsApp", value: "22 99261-5382", href: "https://wa.me/5522992615382" },
  { Icon: WhatsAppIcon, label: "Comercial", value: "22 98830-8762", href: "https://wa.me/5522988308762" },
  { Icon: Instagram, label: "Instagram", value: "@gleyton.rosa", href: "https://instagram.com/gleyton.rosa" },
  { Icon: Facebook, label: "Facebook", value: "@gleyton.rosa", href: "https://facebook.com/gleyton.rosa" },
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
            <img src={monograma.url} alt="Monograma GR de Gleyton Rosa" className="size-7 object-contain" />
            <span className="font-display text-base tracking-wide text-foreground">Gleyton Rosa</span>
          </a>
          <nav aria-label="Seções" className="hidden items-center gap-5 lg:flex">
            {nav.map((i) => (
              <a
                key={i.href}
                href={i.href}
                className="font-sans text-[11px] uppercase tracking-[0.16em] text-muted-foreground transition-colors hover:text-primary"
              >
                {i.label}
              </a>
            ))}
          </nav>
        </div>
        <nav aria-label="Seções" className="overflow-x-auto border-t border-border lg:hidden">
          <div className="mx-auto flex w-max gap-5 px-5 py-2.5">
            {nav.map((i) => (
              <a
                key={i.href}
                href={i.href}
                className="whitespace-nowrap font-sans text-[11px] uppercase tracking-[0.16em] text-muted-foreground transition-colors hover:text-primary"
              >
                {i.label}
              </a>
            ))}
          </div>
        </nav>
      </header>

      <main id="topo" className="mx-auto max-w-4xl px-5">
        <section className="pt-14 pb-20 text-center sm:pt-20">
          <h1 className="sr-only">
            Gleyton Rosa — Executivo de Marketing, Estratégia Comercial e IA Aplicada a Negócios
          </h1>
          <img
            src={logoPrincipal.url}
            alt="Gleyton Rosa — Executivo • Marketing • Estratégia • Tecnologia e IA"
            className="mx-auto w-[260px] object-contain sm:w-[340px]"
          />
          <p className="mx-auto mt-10 max-w-[48ch] text-[15px] leading-relaxed text-muted-foreground">
            Gestão comercial e marketing com estratégia, processos, dados e inteligência artificial aplicada a
            negócios — para transformar intenção comercial em operação que entrega.
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

        <section id="sobre" className="scroll-mt-28 border-t border-border py-16">
          <SectionLabel n="01">Sobre</SectionLabel>
          <h2 className="sr-only">Sobre Gleyton Rosa</h2>
          <div className="mt-8 flex flex-col gap-6 sm:flex-row sm:items-start">
            <img
              src={portrait.url}
              alt="Gleyton Rosa"
              className="size-24 shrink-0 rounded-full object-cover ring-1 ring-primary/40 sm:size-28"
            />
            <div className="min-w-0">
              <p className="max-w-[56ch] text-[15px] leading-relaxed text-foreground/90">
                Executivo de gestão comercial e marketing, atuo na fronteira entre estratégia e execução. Combino
                processos, dados, tecnologia e inteligência artificial para estruturar operações comerciais mais
                eficientes — do diagnóstico honesto à rotina de gestão que faz o número acontecer.
              </p>
              <p className="mt-4 max-w-[56ch] text-[15px] leading-relaxed text-muted-foreground">
                Residente em Campos dos Goytacazes, conduzo projetos de estruturação comercial, marketing, expansão
                de mercado e soluções de IA aplicada a negócios em todo o território nacional.
              </p>
            </div>
          </div>
        </section>

        <section id="atuacao" className="scroll-mt-28 border-t border-border py-16">
          <SectionLabel n="02">Atuação</SectionLabel>
          <h2 className="mt-6 font-display text-[19px] font-light leading-snug text-foreground/90 sm:text-[22px]">
            Atuação direta: quem analisa e desenha o projeto é quem acompanha até o resultado.
          </h2>
          <div className="mt-10 grid gap-px overflow-hidden border border-border bg-border sm:grid-cols-2">
            {pilares.map((p) => (
              <div key={p.n} className="bg-card p-6">
                <span className="font-sans text-[11px] tracking-brand text-primary">{p.n}</span>
                <h3 className="mt-3 font-display text-xl tracking-wide text-foreground">{p.t}</h3>
                <p className="mt-2 text-[13.5px] leading-relaxed text-muted-foreground">{p.d}</p>
              </div>
            ))}
          </div>
        </section>

        <section id="ia" className="scroll-mt-28 border-t border-border py-16">
          <SectionLabel n="03">IA Aplicada</SectionLabel>
          <h2 className="mt-6 font-display text-3xl font-light leading-tight tracking-wide text-foreground">
            IA Aplicada a Negócios
          </h2>
          <p className="mt-4 max-w-[60ch] text-[15px] leading-relaxed text-muted-foreground">
            A inteligência artificial é uma ferramenta de gestão: bem aplicada, reduz trabalho repetitivo, organiza
            informação e apoia decisões comerciais. O foco está no uso prático, ligado a processos e indicadores do
            negócio.
          </p>
          <ul className="mt-8 grid gap-x-8 gap-y-3 sm:grid-cols-2">
            {iaTopicos.map((t) => (
              <li key={t} className="flex items-start gap-3 text-[14px] leading-relaxed text-foreground/90">
                <span className="mt-2 size-1.5 shrink-0 rounded-full bg-primary" aria-hidden="true" />
                {t}
              </li>
            ))}
          </ul>
        </section>

        <section id="servicos" className="scroll-mt-28 border-t border-border py-16">
          <SectionLabel n="04">Serviços</SectionLabel>
          <h2 className="mt-6 font-display text-3xl font-light leading-tight tracking-wide text-foreground">
            Serviços e Soluções
          </h2>
          <p className="mt-4 max-w-[60ch] text-[15px] leading-relaxed text-muted-foreground">
            Áreas de atuação e soluções, adaptadas à realidade de cada empresa.
          </p>
          <div className="mt-8 grid gap-px overflow-hidden border border-border bg-border sm:grid-cols-2">
            {servicos.map((s) => (
              <div key={s.t} className="bg-card p-6">
                <h3 className="font-display text-xl tracking-wide text-foreground">{s.t}</h3>
                <p className="mt-2 text-[13.5px] leading-relaxed text-muted-foreground">{s.d}</p>
              </div>
            ))}
          </div>
        </section>

        <section id="trajetoria" className="scroll-mt-28 border-t border-border py-16">
          <SectionLabel n="05">Trajetória</SectionLabel>
          <h2 className="sr-only">Trajetória profissional</h2>
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

        <section id="formacao" className="scroll-mt-28 border-t border-border py-16">
          <SectionLabel n="06">Formação</SectionLabel>
          <h2 className="sr-only">Formação acadêmica</h2>

          <div className="mt-10 grid gap-3 border-b border-border pb-7 sm:grid-cols-[200px_1fr] sm:gap-6">
            <h3 className="font-sans text-[10px] uppercase tracking-brand text-primary sm:pt-1.5">Graduação</h3>
            <ul className="space-y-1.5">
              {graduacao.map((g) => (
                <li key={g} className="font-display text-[19px] font-light leading-snug text-foreground sm:text-[21px]">
                  {g}
                </li>
              ))}
            </ul>
          </div>

          <h3 className="mt-8 font-sans text-[10px] uppercase tracking-brand text-primary">
            Pós-graduação e MBAs
          </h3>
          <dl className="mt-5">
            {posGraduacao.map((g) => (
              <div
                key={g.t}
                className="grid gap-2 border-b border-border py-5 sm:grid-cols-[200px_1fr] sm:gap-6"
              >
                <dt className="font-display text-[17px] tracking-wide text-foreground sm:pt-0.5">
                  {g.t}
                </dt>
                <dd className="space-y-1.5">
                  {g.itens.map((i) => (
                    <p key={i} className="text-[13.5px] leading-relaxed text-muted-foreground">
                      {i}
                    </p>
                  ))}
                </dd>
              </div>
            ))}
          </dl>
        </section>

        <section id="conteudo" className="scroll-mt-28 border-t border-border py-16">
          <SectionLabel n="07">Conteúdo</SectionLabel>
          <h2 className="mt-6 font-display text-3xl font-light leading-tight tracking-wide text-foreground">
            Conhecimento e Conteúdo
          </h2>
          <div className="mt-8 grid gap-4 sm:grid-cols-2">
            {conteudos.map((c) => (
              // futureHref reservado: transformar em link quando o portal estiver ativo
              <div key={c.t} data-future-href={c.futureHref} className="border border-border bg-card p-7">
                <img src={monograma.url} alt="" aria-hidden="true" className="size-9 object-contain" />
                <h3 className="mt-5 font-display text-2xl tracking-wide text-foreground">{c.t}</h3>
                <p className="mt-2 text-[13.5px] leading-relaxed text-muted-foreground">{c.d}</p>
                <span className="mt-5 inline-block rounded-sm border border-primary/50 px-3 py-1 font-sans text-[10px] uppercase tracking-brand text-primary">
                  Em preparação
                </span>
              </div>
            ))}
          </div>
        </section>

        <section className="border-t border-border py-20 text-center">
          <p className="mx-auto max-w-[26ch] font-display text-2xl font-light italic leading-snug text-foreground sm:text-3xl">
            “Resultado não é sorte. É estratégia repetida com disciplina.”
          </p>
          <p className="mt-6 font-sans text-[10px] uppercase tracking-brand text-muted-foreground">
            Gleyton Rosa
          </p>
        </section>

        <section id="contato" className="scroll-mt-28 border-t border-border py-16">
          <SectionLabel n="08">Contato</SectionLabel>
          <h2 className="mt-8 max-w-[24ch] font-display text-3xl font-light leading-tight tracking-wide text-foreground">
            Vamos conversar sobre o próximo passo do seu negócio.
          </h2>
          <div className="mt-8 grid gap-px overflow-hidden border border-border bg-border sm:grid-cols-2">
            {contatos.map(({ Icon, label, value, href }) => {
              const inner = (
                <span className="flex items-center gap-4">
                  <span className="grid size-10 shrink-0 place-items-center rounded-full border border-primary/50">
                    <Icon className="size-[18px] text-primary" strokeWidth={1.5} />
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
                  className="bg-card p-6 transition-colors hover:bg-secondary"
                >
                  {inner}
                </a>
              ) : (
                <div key={label} className="bg-card p-6">
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
