## Introduction with NYT-Popular-Articles:

## Getting Started

## Installation & build

1. In the project using Node version `node ≥ 20` & Yarn version `1.22.19`.
# Note
    Don't use node 19 because cypress doesn't run well
2. Run `yarn install` to install the project dependencies.

3. Run `yarn prepare` to install husky improves your commits.

4. Run `cp .env.example .env` generates a key which is required to run the application.
# Note
    set these values on env file
    base url ===> https://api.nytimes.com/svc/mostpopular/v2/viewed
    api key ===> zJGbCG8VmASOpvhFAdaXLQc3jVpjAPOU 

5. Run `yarn run build` to building our library with both Commonjs and ES Modules, This will allow our component to have more compatibility in projects with different JavaScript versions.

### Available Scripts

In the project directory, you can run:

#### `yarn start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

#### `yarn test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

#### `yarn cypress:open`

The yarn cypress:open command is used to open the Cypress Test Runner, which allows you to interactively run and debug your end-to-end (E2E) tests.

1. Opens Cypress Test Runner: This command launches the Cypress Test Runner, a graphical interface that allows you to execute and debug your E2E tests interactively.

2. Runs E2E tests: Once the Cypress Test Runner is opened, you can select and run your E2E test suites directly from the interface.

#### `yarn coverage`

The yarn coverage command is used to generate test coverage reports for project using Jest.

1. Runs tests with coverage: This command runs your project's test suite with coverage collection enabled.

2. Generates coverage report: After running the tests, Jest generates a coverage report that includes information about which parts of your code were tested and which were not.

3. Displays coverage summary: The coverage report provides a summary of code coverage, including percentages for statements, branches, functions, and lines of code covered by tests.

4. Saves coverage report: Jest saves the coverage report in the coverage directory by default. You can view the detailed coverage report in various formats, such as HTML, text, or LCov.

#### `yarn run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

### Linting & Prettier

 Linting is the automated checking of your source code for programmatic and stylistic errors.

1. `yarn lint:check`, Run to check `Linting`.
2. `yarn lint:fix`, Run to fix `Linting`.
3. `yarn prettier`, Run Prettier.
4. `yarn format`, Run Prettier to write.

#### Tools and Packages

1. [React](https://react.dev/)
2. [React Router](https://reactrouter.com/en/main)
3. [React Testing Library](https://testing-library.com/docs/react-testing-library/intro/)
4. [Axios](https://axios-http.com/docs/intro)
5. [Chakra UI](https://chakra-ui.com/)
6. [Cypress](https://www.cypress.io/)
7. [Typescript](https://www.typescriptlang.org/)
