<h1 align="center">
  <img alt="Be The Hero" src="./frontend/src/assets/logo.svg" width="200px"/>
</h1>

## Tecnologias utilizadas :rocket:

 - [NodeJS](https://nodejs.org/en/) utilizando um banco de dados [SQLite](https://www.sqlite.org/index.html) na etapa de desenvolvimento do back-end
 - [React](https://reactjs.org) na etapa de desenvolvimento front-end
 - [React Native](https://facebook.github.io/react-native/) utilizando o framework [Expo](https://expo.io/) na etapa de desenvolvimento do mobile

## Objetivo do projeto :dart:

Este é um projeto que foi desenvolvido durante a semana <strong>OmniStack 11.0</strong>, e que resumidamente, tem como objetivo fazer com que pessoas possam ter uma forma de ajudar ONGs a conseguirem ajuda financeira para se manterem abertas, continuando com seu trabalho.


## Funcionamento da aplicação :on:

O funcionamento da aplicação se basea em duas entidades, pessoas comuns, e ONGs. ONGs podem registrar casos(que dentro do código estão com o nome de incidents)utilizando a aplicação na versão web, registrando um título, descrição, valor e afins. As pessoas comuns podem usar a aplicação em seus dispositos móveis, onde uma listagem de todos os casos será feita, e após isso a pessoa pode entrar em contato com a ONG por Whatsapp ou E-mail, e assim a pessoa pode se tornar o herói de um caso, ajudando a ONG com determinado valor monetário.

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

Após isso abra 3 janelas do seu terminal(CMD, git bash, etc) na raiz do projeto, e utilize uma para iniciar o back-end, uma para o front-end e outra para o mobile, siga os passos abaixo:

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

Após ter realizado todos estes passos, o front-end estará disponível na porta 3000(a não ser que você tenha configurado outra porta), basta digitar "localhost:3000" na barra de endereços de seu navegador.

Para utilizar a versão mobile, basta instalar o app Expo([Android](https://play.google.com/store/apps/details?id=host.exp.exponent)/[iOS](https://apps.apple.com/us/app/expo-client/id982107779)) no seu celular, após instalar escaneie o QR Code que apareceu em seu terminal, ou você pode escanear o QR Code que está na guia que seu navegador abriu após ter iniciado o mobile(caso a guia não tenha sido aberta, ela está disponível no endereço "localhost:19002")
