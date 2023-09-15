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
- `lint:fix`: Executa o Eslint e tenta corrigir automaticamente os problemas.
- `format`: Formata todos os arquivos com o Prettier.
- `lint-staged`: Executa as verificações de lint e formato nos arquivos em estágio (etapa) de commit.

## Padrões de Mensagem de Commit

Este boilerplate utiliza o Commitlint para aplicar um padrão de mensagens de commit. Certifique-se de seguir o padrão ao criar commits. Os commits devem seguir o seguinte formato:

```
<tipo>(escopo opcional): mensagem do commit
```

Exemplo:

- `feat: adicionar nova funcionalidade`
- `fix: corrigir bug no componente X`
- `chore: atualizar dependências`

## Contribuição

Sinta-se à vontade para contribuir com melhorias neste boilerplate. Você pode abrir issues, enviar solicitações de pull ou relatar problemas.