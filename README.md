# Boilerplate Next.js com Eslint, Prettier, Husky, Commitlint, lint-staged e Tailwind CSS

Este é um boilerplate para iniciar rapidamente seus projetos Next.js com uma configuração sólida de ferramentas de desenvolvimento e estilização. Use este boilerplate como ponto de partida para seus projetos e economize tempo na configuração inicial.

## Tecnologias Incluídas

- [Next.js](https://nextjs.org/): O framework React de última geração.
- [Eslint](https://eslint.org/): Ferramenta de análise estática de código JavaScript/TypeScript.
- [Prettier](https://prettier.io/): Formatador de código automático.
- [Husky](https://typicode.github.io/husky/): Hooks Git para execução de scripts.
- [Commitlint](https://commitlint.js.org/): Verifica se suas mensagens de commit atendem a um padrão.
- [lint-staged](https://github.com/okonet/lint-staged): Executa scripts em arquivos com alterações no Git.
- [Tailwind CSS](https://tailwindcss.com/): Framework CSS utilitário de baixo nível.
- [Jest](https://jestjs.io/): Framework de teste JavaScript.
- [Testing Library](https://testing-library.com/): Conjunto de ferramentas para testar componentes React de forma acessível.
- [Storybook](https://storybook.js.org/): Ferramenta para documentação de componentes React.
- [Plop](https://plopjs.com/): Ferramenta de geração de código.

## Requisitos

Certifique-se de ter o [Node.js](https://nodejs.org/) instalado na sua máquina antes de começar.

## Como Usar

1. Clone este repositório:

```bash
git clone https://github.com/joaotuliojt/next13-boilerplate.git
```

2. Acesse o diretório do projeto:

```bash
cd next13-boilerplate
```

3. Instale as dependências:

```bash
npm install
# ou
yarn install
```

4. Inicie o servidor de desenvolvimento:

```bash
npm run dev
# ou
yarn dev
```

5. Comece a construir seu aplicativo Next.js!

## Scripts Disponíveis

- `dev`: Inicia o servidor de desenvolvimento Next.js.
- `build`: Cria uma versão otimizada para produção do seu aplicativo.
- `start`: Inicia o servidor de produção (após a construção).
- `lint`: Executa o Eslint para verificar a formatação e a qualidade do código.
- `prepare`: Script usado para instalar o Husky.
- `test`: Executa os testes usando o Jest.
- `test:watch`: Executa os testes no modo de observação interativa.
- `test:ci`: Executa os testes em um ambiente de integração contínua.
- `generate`: Inicia o gerador de código Plop para criar componentes.
- `storybook`: Inicia o Storybook na porta http://localhost:6006.
- `build-storybook`: Cria uma versão otimizada do Storybook para implantação.

## Testes
Os testes são escritos usando o framework Jest e a Testing Library

## Geração de Código
Você pode usar o Plop para gerar componentes de forma rápida e padronizada. Execute npm run generate ou yarn generate para começar a usar o Plop.

## Storybook
O Storybook é uma ferramenta útil para desenvolver componentes React isolados. Execute npm run storybook ou yarn storybook para iniciar o ambiente de desenvolvimento do Storybook.

## Contribuição

Sinta-se à vontade para contribuir com melhorias neste boilerplate. Você pode abrir issues, enviar solicitações de pull ou relatar problemas.
