# Manual de Emergências

Aplicativo web progressivo (PWA) em português do Brasil, baseado no **Guia de Resposta a Emergências (ERG) 2024**. O conteúdo é voltado a bombeiros, defesa civil, socorristas e profissionais que atuam em ocorrências com produtos perigosos.

## Principais recursos

- Busca por número ONU, nome do produto ou número do guia
- Índices por número ONU e nome do produto
- Guias de emergência e tabelas de isolamento
- Diagramas e placas de risco
- Interface responsiva e modo escuro
- Instalação como aplicativo e uso offline após o primeiro acesso com internet

## Tecnologias

React, Vite, TypeScript, Tailwind CSS, Framer Motion, Fuse.js e Vite PWA.

## Desenvolvimento local

```bash
npm install
npm run dev
```

Testes e build:

```bash
npm test
npm run build
npm run preview
```

## Publicação

O build de produção usa a base `/manual/` e deve ser publicado em:

```text
https://seudominio.com.br/manual/
```

O servidor deve redirecionar rotas internas da aplicação para `/manual/index.html`.

## Autoria

Desenvolvido por **GH Rodrigues**.
