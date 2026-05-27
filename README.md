🚀 Desafio Cypress
Projeto de automação de testes desenvolvido com Cypress, utilizando a arquitetura Page Objects e integração com Cucumber (BDD).

O objetivo deste projeto é validar fluxos de Web (UI) e API, simulando cenários reais de cadastro de usuários, navegação e validações automatizadas.

📌 Sobre o Projeto
Este projeto foi criado como parte de um desafio prático de automação de testes, com foco em:

Automação de testes E2E
Estrutura escalável com Page Objects
Escrita de cenários em BDD utilizando Gherkin
Integração de testes Web (UI) e API
Organização de elementos, páginas e steps
Boas práticas de automação com Cypress
🛠️ Tecnologias Utilizadas
JavaScript
Cypress
Cucumber (BDD / Gherkin)
Faker.js
Node.js

📂 Estrutura do Projeto
```text
Desafio_Cypress
│
├── cypress
│   ├── e2e
│   │   ├── api
│   │   └── ui
│   │ 
│   ├── evidencias
│   │
│   ├── fixtures
│   │
│   ├── plugins
│   │
│   └── support
│       ├── elements
│       ├── pages
│       ├── step-definitions
│       └── utel
│
├── node_modules
├── cypress.config.js
├── package-lock.json
├── package.json
└── README.md
```
✅ Funcionalidades Automatizadas

🌐 Testes Web (UI)
Cadastro de usuário
Navegação entre páginas
Fluxo de login
Interação com o carrinho de compras
Validação de informações da conta

🔌 Testes de API
Criação de usuário via API
Validação de status code e respostas
Automação de requisições HTTP (GET, POST, PUT, DELETE)

🏗️ Arquitetura Utilizada
O projeto foi estruturado seguindo o padrão Page Object Model (POM), com o objetivo de tornar a automação mais organizada, escalável e de fácil manutenção.

Essa abordagem melhora:

Reutilização de código
Organização dos testes
Facilidade de manutenção
Escalabilidade do framework

📁 Estrutura de camadas
Camada	Responsabilidade
elements	Mapeamento dos elementos da interface (locators/selectors)
pages	Implementação das ações e comportamentos das páginas
step-definitions	Implementação dos passos BDD (Given / When / Then)
e2e	Cenários de testes escritos em Gherkin (.feature)

Node.js (versão 18+ recomendada)
npm ou fio
Git
