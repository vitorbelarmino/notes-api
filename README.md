# NotesAPI

## 💻 Projeto
 Este é um aplicativo de notas autoadesivas desenvolvido para proporcionar aos usuários uma experiência intuitiva e prática na gestão de suas anotações. Com ele, é possível criar, editar, marcar como favoritas e excluir notas de forma simples e rápida.
  Este projeto é FullStack, e o repositório do front-end pode ser encontrado [aqui](https://github.com/vitorbelarmino/notes-app).

## 🚀 Tecnologias

Esse projeto foi desenvolvido com as seguintes tecnologias:

-  **[Node.js](https://nodejs.org/en/)**
-  **[Express](https://expressjs.com/)**
-  **[TypeScript](https://www.typescriptlang.org/)**
-  **[PostgresSQL](https://www.postgresql.org/)**
-  **[Prisma](https://www.prisma.io/)**
-  **[Docker](https://www.docker.com/)**
-  **[JOI](https://joi.dev/)**
-  **[Nodemon](https://nodemon.io/)**
-  **[DotENV](https://github.com/motdotla/dotenv)**
-  **[Eslint](https://eslint.org/)**
-  **[Prettier](https://prettier.io/)**

</br>

## ⬇️ Como executar o projeto

```bash

# Clone este repositório
$ git clone git@github.com:vitorbelarmino/notes-api.git

# Acesse a pasta do projeto no terminal/cmd
$ cd notes-api

# Instale as dependências
$ npm install

# Eu deixei um arquivo .env.example configurado, basta renomea-lo para .env, ou configurar um proprio.

# Para o banco de dados, pode usar o docker-compose disponibilizado no projeto, usando o comando abaixo.
$ npm run db:up

# rode as migration
$ npx prisma migrate dev

# Execute a aplicação
$ npm run dev

# O App inciará na porta:3333 - acesse http://localhost:3333
```

> Github: https://github.com/vitorbelarmino

> Linkedin: https://www.linkedin.com/in/vitor-belarmino/

> Email: vitor.belarmino@hotmail.com
