<h1 align="center">
  <img alt="Be The Hero" src="./frontend/src/assets/logo.svg" width="200px"/>
</h1>

## Tecnologias utilizadas :rocket:

 - [NodeJS](https://nodejs.org/en/) utilizando um banco de dados [SQLite](https://www.sqlite.org/index.html) na etapa de desenvolvimento do back-end
 - [React](https://reactjs.org) na etapa de desenvolvimento front-end
 - [React Native](https://facebook.github.io/react-native/) utilizando o framework [Expo](https://expo.io/) na etapa de desenvolvimento do mobile

## Objetivo do projeto :dart:

Este é um projeto que foi desenvolvido durante a semana <strong>OmniStack 11.0</strong>, e que resumidamente, tem como objetivo fazer com que pessoas possam ter uma forma de ajudar ONGs a conseguirem ajuda financeira para se manterem abertas, continuando com seu trabalho.


## Como executar o projeto em sua máquina :arrow_forward:

Para utilizar a aplicação, você precisará ter o [Git](https://git-scm.com) e o [Node.JS/NPM](https://nodejs.org/en/) instalados em seu computador.

Utilizando a linha de comando:

### Baixando o projeto
```bash
# Clone o repositório
$ git clone https://github.com/TiagoDiass/be-the-hero.git

# Entre no repositório
$ cd be-the-hero
```

### Iniciando o back-end
```bash
# Entre no back-end
$ cd backend

# Instale as dependências
$ npm install

# Realize as migrações do banco de dados
$ npx knex migrate:latest 

# Inicie a aplicação
$ npm start
```

### Iniciando o front-end
```bash

# Entre no front-end
$ cd frontend

# Instale as dependências
$ npm install

# Inicie a aplicação
$ npm start
```

### Iniciando o mobile
```bash

# Entre no mobile
$ cd mobile

# Instale as dependências
$ npm install

# Inicie a aplicação
$ npm start
```
