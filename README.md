# Exercício ES6 — Filtrar alunos aprovados

Este projeto é um exercício de JavaScript (ES6+) que utiliza o método `filter()` para selecionar apenas os alunos aprovados de uma lista.

## O que foi feito

1. **Configuração do Babel** — O projeto foi configurado com as dependências `@babel/cli`, `@babel/core` e `@babel/preset-env` para transpilar código ES6+ para uma versão compatível com o Node.js.

2. **Lista de alunos** — Foi criado um array de objetos em `src/index.js`, onde cada aluno possui:
   - `name`: nome do aluno
   - `grade`: nota
   - `approved`: indica se foi aprovado (`true` ou `false`)

3. **Filtro com `filter()`** — O método `filter()` percorre a lista e retorna somente os alunos cujo campo `approved` é `true`.

4. **Saída no console** — O resultado é exibido com `console.log()`.

## Estrutura do projeto

```
exercicio_es6/
├── src/
│   └── index.js      # Código-fonte ES6+
├── dist/             # Código transpilado (gerado pelo Babel)
├── .babelrc          # Configuração do Babel
├── package.json      # Dependências e scripts
└── README.md
```

## Como executar

Instale as dependências (apenas na primeira vez):

```bash
npm install
```

Execute o projeto:

```bash
npm start
```

O comando `npm start` transpila o código de `src/` para `dist/` e em seguida executa o arquivo gerado.

Para apenas compilar, sem executar:

```bash
npm run build
```

## Exemplo de saída

```
[
  { name: 'Ana Silva', grade: 8.5, approved: true },
  { name: 'Carla Souza', grade: 9, approved: true },
  { name: 'Elena Martins', grade: 7.1, approved: true }
]
```

## Tecnologias utilizadas

- **JavaScript (ES6+)** — arrow functions, `const`, objetos e o método `filter()`
- **Babel** — transpilação de código moderno para compatibilidade com o ambiente de execução
