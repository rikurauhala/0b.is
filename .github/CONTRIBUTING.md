# Contributing to the project

Hello there and thank you for your interest! **0b.is** is an open source project and we welcome all contributions, big or small. Please read this document before opening a new issue or a pull request. The aim is to make contributing as easy and beginner friendly as possible.

If you have any questions, you may email the [maintainer](https://github.com/rikurauhala) directly.

## Reporting an issue

Bugs or other unexpected behaviour can be reported using the [Issues](https://github.com/rikurauhala/0b.is/issues) page. Try to describe the problem in detail to make it easier to fix.

Don't hesitate to report an issue you may have found with the application. Even minor typo corrections are appreciated.

## Suggesting improvements

New features can be suggested or requested by opening a new issue. If you wish to contribute to the source code, fork the repository and make a [pull request](https://github.com/rikurauhala/0b.is/pulls). Please explain what you did and how you think it would improve the application!

Make as many pull requests as you want. I would recommend keeping the requests small and not changing too many things at once. Don't make a pull request you wouldn't want to review yourself!

Refactoring and optimizing existing code is also highly encouraged.

## Style

### ESLint

[ESLint](https://eslint.org) is used to enforce a consistent code style. The file [.eslintrc](https://github.com/rikurauhala/0b.is/blob/main/.eslintrc) contains the specific rules the code should follow. Before making a pull request, check the code style with `npm run lint`.

### Commits

Keep the commits small so they are easy to handle. Don't change too many things per commit. Commit messages should be descriptive. Pay attention to good grammar and use the *imperative mood*.

```bash
# Yes
$ git commit -m "Create README.md"

# No
$ git commit -m "Changed something"
$ git commit -m "Created README.md"
$ git commit -m "README"
$ git commit -m "Some changes"
$ git commit -m "Removed some links"
```

## Set up the application locally

If you wish you contribute to the source code itself, here's how to install the application and start developing on your machine. You should be familiar with React, JavaScript/TypeScript and have Node.js installed. I would recommend using Visual Studio Code but any other editor will do just fine if Code is not your thing.

### How to install

```bash
# Get the source code
$ git clone git@github.com:rikurauhala/0b.is.git

# Change directory
$ cd 0b.is

# Install dependencies
$ npm install
```

### How to run

After running the application, your default browser should automatically open and the app should be running locally. If not, go to http://localhost:3000 manually.

```bash
# Run the application
$ npm start
```

### How to test

Please make sure to always run the unit tests and the linter before creating a pull request.

```bash
# Run the unit tests
$ CI=true npm test

# Check the code style quality
$ npm run lint
```

## Useful resources

Here are some useful resources to help you make your first contribution.

- [0b.is documentation](https://github.com/rikurauhala/0b.is/wiki)

This is the most important page for all contributors. All relevant documentation can be found here. Please refer to the [software requirements specification](https://github.com/rikurauhala/0b.is/wiki/Software-Requirements-Specification) document for the vision of the final application. Please note that it is rarely a good idea or even possible to design a completely final product beforehand. This means that the specification will live with the development cycle and is subject to change. Even the specification is open to suggestions!

- [Material UI documentation](https://mui.com/material-ui/getting-started/overview)

The user interface is built using Material UI. Their documentation is excellent and contains everything you need to know about different components.

- [React documentation](https://reactjs.org/docs/getting-started.html)

As React is very much powering the application, referring to the React documentation would be a good idea.

- [TypeScript documentation](https://www.typescriptlang.org/docs)

TypeScript documentation could be useful when encountering issues with types or interfaces.

- [Full Stack Open](https://fullstackopen.com/en)

I cannot recommend this course enough. It will teach you everything you need to know about modern web development. Taking the course is completely free for everyone!
