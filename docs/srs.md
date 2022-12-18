# Software requirements specification

## Purpose

The purpose of the application is to provide a **simple**, **fast** and **easy-to-use** way to convert decimal numbers to binary and vice versa. Other number formats will be supported as well. The intended audience consists of university students majoring in computer science or other technical fields and any others interested in number conversion.

Source code is to be published with an open source license. Source code will be hosted on GitHub and will be open to issues and pull requests from anyone wishing to contribute to the project.

## Technology

The application is written in [TypeScript](https://www.typescriptlang.org) using the [React](https://reactjs.org) library. The application is deployed to [GitHub Pages](https://pages.github.com) and can be accessed via any modern web browser.

Continuous integration is implemented with [GitHub Actions](https://github.com/features/actions). The CI pipeline runs [ESLint](https://eslint.org) to enforce code style rules. The pipeline should also run unit tests.

## User interface

As a web application, the app can be accessed via any modern web browser. The user interface is built with [Material UI](https://mui.com). It should be simple and contain only relevant information with no distractions or unnecessary elements to keep the application informative and uncluttered.

## Functionality

### Primary

- The application will support at least the following number types:
  - Decimal
  - Binary
  - Hexadecimal

### Secondary

Secondary functionality could be implemented at a later date.
