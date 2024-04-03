## Introduction with NYT-Articles:

## Getting Started

## Installation & build

1. In the project using Node version `node ≥ 18` & Yarn version `1.22.19`.

2. Run `yarn install` to install the project dependencies.

3. Run `yarn prepare` to install husky improves your commits.

4. Run `cp .env.example .env` generates a key which is required to run the application.

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
