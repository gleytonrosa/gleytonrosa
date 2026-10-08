# Remover branding visível do Lovable

## Situação atual
- O código do site (src/, public/, index.html) não contém nenhum selo, texto ou rodapé "Made with Lovable" — não há nada a remover no código-fonte.
- A configuração de publicação `hide_badge` está atualmente **desativada** (`hide_badge: false`), o que faz o badge flutuante "Edit with Lovable" (ícone + texto + botão de fechar) aparecer no site publicado.

## O que será feito
1. Ativar `hide_badge` (badge flutuante desativado) nas configurações de publicação do projeto — sem nenhum substituto, sem espaço vazio proposital.
2. Conferir as páginas publicadas (desktop e mobile) para confirmar que nenhum elemento de branding do Lovable aparece:
   - https://gleytonrosa.lovable.app
   - https://grrosa.online

## O que NÃO será alterado
- Nenhum componente interno, layout, rotas, contatos, dados ou identidade visual do site.
- A página não será republicada automaticamente (a mudança de configuração entra em vigor conforme o fluxo normal de publicação do Lovable).
