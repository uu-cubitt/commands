# Cubitt Commands

Typescript CQRS command library for the Cubitt framework.

[![GitHub license](https://img.shields.io/badge/license-MIT-blue.svg)](https://raw.githubusercontent.com/uu-cubitt/commands/master/LICENSE)
[![npm version](https://badge.fury.io/js/cubitt-commands.svg)](https://badge.fury.io/js/cubitt-commands)
[![Build Status](https://travis-ci.org/uu-cubitt/commands.svg?branch=master)](https://travis-ci.org/uu-cubitt/commands)
[![Test Coverage](https://codeclimate.com/github/uu-cubitt/commands/badges/coverage.svg)](https://codeclimate.com/github/uu-cubitt/commands/coverage)

## About

This library contains the commands available for editing the Cubitt Graph, they are handled by the command handler.
For more information about the command handler, please take a look [here](https://uu-cubitt.github.io/command-handler/).
The commands provide all basic graph operations, such as addition and removal of nodes, edges, models and connectors.
For more information about the CQRS implementation of the Cubitt Graph, please take a look [here](https://uu-cubitt.github.io/).

## Features

* 16 CQRS commands for a human readable command stream.

## Usage

Install the package and then use it in your code.

```bash
npm install cubitt-commands
```

```typescript
import * as Commands from "cubitt-commands";
```

## Documentation

* [Code documentation](https://uu-cubitt.github.io/commands/)
* [Design documentation](https://uu-cubitt.github.io/commands/design/)

## For developers

To get started:

```bash
npm run dev
```

To run the unit tests:

```bash
npm run test
```

To generate a test coverage report:

```bash
npm run test-coverage
```

To generate documentation:

```bash
npm run typedoc
```

## License

[MIT](LICENSE)

## Changelog

[Changelog](changelog.md)