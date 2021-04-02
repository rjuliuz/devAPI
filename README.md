![DevApi](https://devapi.com.br/static/images/cover.png)


<h1 align="center">DESAFIO NODE DEVAPI</h1>

   <h2 align="center">Tópicos 📋</h2>

   <p>

   - [Sobre 📖](#about-)
   - [Tecnologias Utilizadas e Dependências📱](#preview-)
   - [Funcionalidades 🛠️](#funcionalidades-%EF%B8%8F)
   - [Desafios na construção do desafio 🤯](#Desafios-na-construção-do-desafio)
   - [Como utilizar 🤔](#how-to-use-)
   - [License 📝](#license-)

   </p>

---


<h2 align="center">Sobre 📖</h2>

<p>
   A devAPI foi construída em Typescript 💙 e Nodejs com Express💛.<br>
   Essa aplicação é capaz de criar novos Conectores, listar todos os conectores existentes, fazer edição em algum campo do Conector, Deletar um Conector e filtrar em busca por nome, tipo, categoria e privacidade dos Conectores<br>
   A arquitetura dessa aplicação segue os moldes REST, SOLID e padrão airbnb na organização do código.<br>
   As rotas estão seguras por utilizar o método de autenticação JWT, com token no formato Bearer. E também implementei a dependência CORS, onde consigo definir quais ips terão permissão pra fazer requisição na aplicação.<br>
   Aplicação possui um script pra popular o banco de dados com 10 Conectores.<br>
   O banco de dados escolhido para essa aplicação foi o SQLite por questão de simplicidade e agilidade na integração e implementação de um banco na aplicação, explico melhor o motivo na sessão Desafios. E por conta disso utilizei o Knex pra fazer a integração entre aplicação e o meu banco de dados.
</p>

---

<h2 align="center">Tecnologias Utilizadas e Dependências 📱</h2>

   > * Nodejs, Typescript e Express 🧐📂
   > * Jsonwebtoken e cors para segurança da aplicação e das rotas.
   > * SQLite e Knex para banco de dados e comunicação.
   > * uuID pra gerar ids únicos pros Conectores.
   > * ESLint, prettier e airbnb pra organização do código.

---

<h2 align="center">Funcionalidades 🛠️</h2>

   <p>

- Criar um Conector
  -  Rota: http://localhost:3333/conector
  -  Método: POST
  -  Header: Authorization com token JWT.
  -  JSON: com os dados do Conector.

- Listar todos os Conectores
  -  Rota: http://localhost:3333/conector
  -  Método: GET
  -  Header: Authorization com token JWT.

- Atualizar um Conector
  -  Rota: http://localhost:3333/conector
  -  Método: PUT
  -  Header: Authorization com token JWT.
  -  JSON: com os dados que precisam ser alterados do Conector.

- Deletar um Conector
  -  Rota: http://localhost:3333/conector/id:
  -  Método: DELETE
  -  Header: Authorization com token JWT.

- Listar Conectores com filtro
  -  Rota: http://localhost:3333/conector/filters
  -  Método: GET
  -  Header: Authorization com token JWT.
   </p>

---

<h2 align="center">Desafios na construção da API 🤯</h2>

   <p>
    O grande desafio dessa aplicação em Nodejs foi criar a rota pra fazer o filtro, que até então eu nunca havia feito, acostumado com o CRUD padrão, tive que pedir ajuda na comunidade DEV pra fazer esse desafio. 💪<br>
    Outro grande desafio foi gerar esse token no padrão JWT e Bearer que também nunca havia implementado, esse consegui através de tutorial no site: https://www.luiztools.com.br/post/autenticacao-json-web-token-jwt-em-nodejs/<br>
    O tempo foi outro grande desafio, pois além desse desafio técnico, tive que fazer outros 2, e o terceiro com prazo pra entrega daqui a 2 dias. Conciliar esses desafios foi meu maior desafio e por isso tive que tomar algumas decisões ao longo do processo, como a escolha do Banco de Dados, que foi utilizado o SQLite, pela sua simplicidade e agilidade na construção.<br>
    Estou muito grato e feliz com esse teste, independente do resultado final, pois foi de grande aprendizado, primeiro a questão da gestão do tempo, lidar com vários desafios técnicos ao mesmo tempo com prazos diferentes de entrega, e as coisas novas que aprendi durante a construção dessa API, como por exemplo: criar rotas pra executar filtros na aplicação e autenticação JWT.<br>
    Um grande aprendizado que eu levo pro resto da vida: seja flexível, focado, determinado e organizado. Com isso as coisas tendem a fluir da melhor maneira possível. 🚀
   </p>

---

<h2 align="center">Como utilizar a aplicação 🤔</h2>

   ```

   - Clonar esse repositório:
   $ git clone https://github.com/rjuliuz/devAPI.git

   - Entrar no diretório:
   $ cd devAPI

   - Instalar todas as dependências:
   $ yarn install

   - Rodar a aplicação de forma local:
   $ yarn dev

   - Rodar o banco de dados de forma local:
   $ yarn knex:migrate:run

   - Popular o Banco de Dados da Aplicação com script:
   $ yarn knex:seed
   ```

---

<h2 align="center">License 📝</h2>

<p align="center">
   This repository is under MIT license.
</p>

   ---

   >Esse desafio foi produzido com muito ❤️ por **[@Rafael Julio](https://www.linkedin.com/in/rjuliodev/)**
---


