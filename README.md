## Tecnologias

Esse projeto foi desenvolvido com as seguintes tecnologias:

- [Express](https://expressjs.com/pt-br/)
- [Jest](https://jestjs.io/)
- [Node.js](https://nodejs.org/en/)
- [Material UI](https://mui.com/pt/)
- [React](https://reactjs.org)
- [TypeScript](https://www.typescriptlang.org/)
- [Styled Components](https://styled-components.com/)

## Projeto

A aplicação consiste em um sistema web para a listagem de corretores, comissões e leads. Construido utilizando uma arquitetura de **monorepo**, com aplicações separadas por responsabilidades:

- Backend: faz a gestão dos endpoints e o retorno dos dados; possui testes automatizados.

- Database: utiliza ORM para acesso e definição dos dados na base de dados, por padrão, utiliza postgres. Possui um script de seeds, para popular o banco de dados.

- Web: interface web para consulta dos dados, possui como rota princial `/broker`.

## Licença

Esse projeto está sob a licença Apache 2.0. Veja o arquivo [LICENSE](LICENSE) para mais detalhes.

---

Feito por Caio Cesar de Morais Sales.
