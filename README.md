# api-restaurant

API REST simples para gerenciamento de produtos, feita com Express, TypeScript e Knex (SQLite).

## Tecnologias

- [Node.js](https://nodejs.org/) (rodando TypeScript nativamente via [tsx](https://github.com/privatenumber/tsx))
- [Express](https://expressjs.com/)
- [Knex](https://knexjs.org/) + [SQLite3](https://www.sqlite.org/)
- [Zod](https://zod.dev/) para validação de dados

## Instalação

```bash
npm install
```

## Rodando o projeto

```bash
npm run dev
```

O servidor sobe em `http://localhost:3333`.

## Migrations

```bash
# criar uma nova migration
npm run knex -- migrate:make nome-da-migration

# rodar as migrations pendentes
npm run knex -- migrate:latest

# desfazer a última migration
npm run knex -- migrate:rollback
```

## Build para produção

```bash
npm run build
npm start
```

## Endpoints

Todas as rotas de produto ficam sob o prefixo `/products`.

| Método | Rota           | Descrição                              |
|--------|----------------|------------------------------------------|
| GET    | `/products`    | Lista produtos (aceita `?name=` para filtrar por nome) |
| POST   | `/products`    | Cria um produto (`name`, `price`)      |
| PUT    | `/products/:id`| Atualiza um produto existente          |
| DELETE | `/products/:id`| Remove um produto                      |

### Corpo esperado (POST / PUT)

```json
{
  "name": "Nome do produto",
  "price": 19.9
}
```
