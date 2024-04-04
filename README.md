## Installation & build

1. In the project using Node version `node ≥ 20` & Yarn version `1.22.19`, *Note
Don't use `node 19` because cypress doesn't run well.*

2. Run `yarn install`

3. Run `cp .env.example .env` generates a key which is required to run the application.*Note
set these values on env file*
`base url ===> https://api.nytimes.com/svc/mostpopular/v2/viewed` and
`api key ===> zJGbCG8VmASOpvhFAdaXLQc3jVpjAPOU`.

### Available Scripts

In the project directory, you can run:

#### Start & Build

 1. `yarn start`
 2. `yarn build`

#### Testing

1. `yarn test`
2. `yarn cypress:open`
3. `yarn coverage`

#### Linting & Prettier

1. `yarn lint:check`
2. `yarn lint:fix`
3. `yarn prettier`
4. `yarn format`

### Tools and Packages

1. [React](https://react.dev/)
2. [React Router](https://reactrouter.com/en/main)
3. [React Testing Library](https://testing-library.com/docs/react-testing-library/intro/)
4. [Axios](https://axios-http.com/docs/intro)
5. [Chakra UI](https://chakra-ui.com/)
6. [Cypress](https://www.cypress.io/)
7. [Typescript](https://www.typescriptlang.org/)
8. [CI-github-actions](https://github.com/mahmoud-mamdouh-matwaly/nyt-popular-articles/actions)