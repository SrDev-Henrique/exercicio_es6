# Exercício ES6 — Filtrar alunos aprovados

Este projeto é um exercício de JavaScript (ES6+) que cria uma lista de alunos e utiliza o método `filter()` para retornar apenas os aprovados — ou seja, alunos com nota maior ou igual a 6.

## O que foi feito

1. **Configuração do Babel** — O projeto foi configurado com as dependências `@babel/cli`, `@babel/core` e `@babel/preset-env` para transpilar código ES6+ para uma versão compatível com o Node.js.

2. **Lista de alunos** — Foi criado um array de objetos em `src/index.js`, onde cada aluno possui:
   - `name`: nome do aluno
   - `grade`: nota

3. **Função de aprovação** — A função `isStudentApproved` verifica se a nota do aluno é maior ou igual a 6. A função `approveStudents` utiliza `filter()` para retornar somente os alunos que atendem a essa condição.

4. **Saída no console** — O resultado retornado por `approveStudents()` é exibido com `console.log()`.

## Estrutura do projeto

```
exercicio_es6/
├── src/
│   └── index.js      # Código-fonte ES6+
├── dist/             # Código transpilado (gerado pelo Babel)
├── .babelrc          # Configuração do Babel
├── .gitignore        # Arquivos ignorados pelo Git
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
  { name: 'Ana Silva', grade: 8.5 },
  { name: 'Carla Souza', grade: 9 },
  { name: 'Elena Martins', grade: 7.1 }
]
```

Alunos com nota abaixo de 6 (como Bruno, com 4.2, e Diego, com 5.8) não aparecem no resultado.

## Tecnologias utilizadas

- **JavaScript (ES6+)** — arrow functions, `const`, objetos, funções e o método `filter()`
- **Babel** — transpilação de código moderno para compatibilidade com o ambiente de execução
