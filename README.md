# Controle Financeiro

Aplicação web de controle de finanças pessoais: registro de entradas e saídas, resumo do saldo e busca de transações. Feita em **React + TypeScript** com **styled-components**, consumindo uma API simulada com **json-server**.

> **Estado do repositório:** a versão concluída do app (janeiro de 2023) está no commit [`a05ce48`](https://github.com/AlanDiogoR/Controle-finaceiro/tree/a05ce48), na pasta `Controle-finanças/`. Em setembro de 2025 a branch `main` foi reiniciada para uma nova versão com API própria e hoje contém só uma referência à pasta `api` (submódulo sem `.gitmodules`), sem código executável. As instruções abaixo valem para a versão concluída.

## Stack (versão concluída)

- **React 18** + **TypeScript** + **Vite 4**
- **styled-components** com tema tipado
- **React Hook Form** + **Zod** para formulários e validação
- **Radix UI** (Dialog e Radio Group) para o modal acessível
- **use-context-selector** para consumir o contexto sem re-renderizações desnecessárias
- **Axios** + **json-server** como API fake (porta 3333)
- **Phosphor Icons** e **ESLint**

## Funcionalidades

Verificadas no código do commit `a05ce48`:

- **Resumo financeiro:** cards de Entradas, Saídas e Total, calculados com `reduce` dentro de um `useMemo` (hook `useSummary`)
- **Nova transação:** modal (Radix Dialog) com descrição, preço, categoria e tipo (entrada/saída via Radio Group), validado com Zod
- **Listagem de transações** ordenada da mais recente para a mais antiga, com preço em reais e data formatados via `Intl`
- **Busca de transações** por texto, com botão desabilitado enquanto a requisição está em andamento
- **Estado global** em Context API (`TransactionsContext`), com criação otimista na lista após o `POST`

## Como rodar (versão concluída)

Requisitos: Node.js 18+ e npm.

```bash
git clone https://github.com/AlanDiogoR/Controle-finaceiro.git
cd Controle-finaceiro
git checkout a05ce48
cd "Controle-finanças"
npm install

npm run dev:server   # API fake (json-server) em http://localhost:3333
npm run dev          # em outro terminal: app em http://localhost:5173
```

Não há variáveis de ambiente: a URL da API (`http://localhost:3333`) está em `src/lib/axios.ts`, e os dados de exemplo ficam em `server.json`.

Outros scripts: `npm run build`, `npm run preview`, `npm run lint` e `npm run lint:fix`.

## Estrutura (versão concluída)

```
Controle-finanças/
├── server.json                 # Base de dados do json-server
└── src/
    ├── components/             # Header, Summary, NewTransactionModal
    ├── contexts/               # TransactionsContext (fetch e create)
    ├── hooks/useSummary.ts     # Cálculo de entradas, saídas e total
    ├── pages/Transactions/     # Tabela de transações e SearchForm
    ├── styles/                 # Tema e estilos globais
    └── utils/formater.ts       # Formatadores de data e moeda (pt-BR)
```
