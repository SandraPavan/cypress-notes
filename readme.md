# Projeto de Testes Automatizados com Cypress

Este projeto contém testes automatizados para uma aplicação web utilizando o **Cypress**. Os testes cobrem fluxos end-to-end (E2E) e a integração com a API da aplicação, utilizando variáveis de ambiente para configurar informações sensíveis como **login** e **senha**.

## Índice

- [Projeto de Testes Automatizados com Cypress](#projeto-de-testes-automatizados-com-cypress)
  - [Índice](#índice)
  - [Descrição](#descrição)
  - [Instalação](#instalação)
  - [Configuração](#configuração)
    - [Arquivo `.env`](#arquivo-env)
    - [Configuração da `baseUrl`](#configuração-da-baseurl)
  - [Execução dos Testes](#execução-dos-testes)
    - [Testes End-to-End (E2E)](#testes-end-to-end-e2e)
    - [Testes de API](#testes-de-api)
    - [Execução de Todos os Testes](#execução-de-todos-os-testes)
  - [Relatórios](#relatórios)

## Descrição

Este projeto utiliza **Cypress** para realizar testes end-to-end (E2E) e de API, garantindo que as principais funcionalidades da aplicação web e os endpoints da API funcionem corretamente.

## Instalação

Para configurar o projeto localmente, siga os passos abaixo:

1. **Clone o repositório:**

   ```bash
   git clone https://github.com/SandraPavan/cypress-notes.git
   cd cypress-notes
   ```

2. **Instale as dependências:**

   Certifique-se de ter o **Node.js** e o **npm** instalados. Então, rode o comando abaixo para instalar as dependências do projeto:

   ```bash
   npm install
   ```

## Configuração

### Arquivo `.env`

O projeto utiliza um arquivo **`.env`** para configurar variáveis de ambiente, como **login**, **senha**, e a **baseUrl** da aplicação. Crie um arquivo `.env` na raiz do projeto com as seguintes informações:

```
CYPRESS_BASE_URL=https://api.exemplo.com
CYPRESS_LOGIN_EMAIL=seu-email@example.com
CYPRESS_LOGIN_PASSWORD=sua-senha
CYPRESS_LOGIN_USUARIO_EMAIL=seu-email@example.com
CYPRESS_LOGIN_USUARIO_PASSWORD=sua-senha
CYPRESS_AUTH_TOKEN = 
CYPRESS_ID = 
```

Essas variáveis serão automaticamente carregadas nos testes do Cypress.

### Configuração da `baseUrl`

A `baseUrl` é a URL base da aplicação ou da API, que será usada em todas as requisições durante os testes. Ela pode ser configurada diretamente no arquivo `.env` ou de forma manual no arquivo `cypress.config.js`:

```javascript
const { defineConfig } = require('cypress');

module.exports = defineConfig({
  e2e: {
    baseUrl: process.env.CYPRESS_BASE_URL || 'https://api.exemplo.com',
  },
});
```

Com essa configuração, a `baseUrl` será definida com base na variável de ambiente `CYPRESS_BASE_URL` do arquivo `.env`.

## Execução dos Testes

### Testes End-to-End (E2E)

Para rodar os testes **end-to-end** que simulam a interação do usuário com a interface, utilize o seguinte comando:

```bash
npm run test:e2e
```

Esse comando executa todos os testes localizados no diretório `cypress/e2e/`.

### Testes de API

Para rodar os testes de **API** (que validam os endpoints), utilize o seguinte comando:

```bash
npm run test:api
```

Esse comando executa todos os testes localizados no diretório `cypress/api/`.

### Execução de Todos os Testes

Para rodar **todos os testes** (E2E e API) de uma vez, utilize:

```bash
npm run test:all
```

Esse comando executa todos os testes E2E e API do projeto.

## Relatórios

O projeto utiliza o **Mochawesome** para gerar relatórios detalhados dos testes. Após rodar os testes, um relatório em formato HTML será gerado no diretório `cypress/reports/mochawesome/`.

Para visualizar o relatório, abra o arquivo `.html` correspondente no navegador.