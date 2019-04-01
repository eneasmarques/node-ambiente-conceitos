# node-ambiente-conceitos

- [node-ambiente-conceitos](#node-ambiente-conceitos)
  - [Descrição](#descri%C3%A7%C3%A3o)
  - [Iniciando Projeto](#iniciando-projeto)
  - [Pacotes](#pacotes)

## Descrição

Consiste na verificação de uma idade informada na rota inicial `/` por meio do Middleware `checaIdade`.
Caso informação válida a rota `/major` ou `/minor` será chamada dependendo do valor informado.
Se informação não for válida será reencaminhado para rota inicial `/`.

## Iniciando Projeto

- **`yarn init -y`** - comando para criar `package.json`
- **`yarn start`** - inicia aplicação

## Pacotes

**`-D`** - instala pacote como dependência de desenvolvedor

- **`yarn add express`** - trabalhar com rotas
- **`yarn add nodemon -D`** - monitora alterações e reinicia o servidor.
- **`yarn add nunjucks`** - template engine para JavaScript
- **`yarn add eslint`** - padronizar um guia de estilo de código
  - **`yarn eslint --init`** - iniciar configuração de estilo
