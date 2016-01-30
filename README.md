# Cubitt Commands
Typescript CQRS command library for the Cubitt framework.

## About

This library contains the commands available for editing the Cubitt Graph, they are handled by the command handler.
For more information about the command handler, please take a look [here](https://uu-cubitt.github.io/command-handler/).
The commands provide all basic graph operations, such as addition and removal of nodes, edges and connectors.
For more information about the CQRS implementation of the Cubitt Graph, please take a look [here](https://uu-cubitt.github.io/).

## Installation

```bash
$ npm install cubitt-commands
```

## Features

* 16 CQRS commands for a human readable command stream

## Documentation

* [Code documentation](https://uu-cubitt.github.io/commands/)
* [Design documentation](https://uu-cubitt.github.io/commands/design/)

## For developers

To generate documentation run:
```bash
$ npm install --only=dev
$ node_modules/.bin/typedoc --out doc/ --module commonjs --target ES5 --mode file src/
```

## People

The original authors of Cubitt are Sander Klock and Thomas Ipskamp. The project is coordinated by [Jan Martijn van der Werf](http://www.uu.nl/staff/JMEMvanderWerf).

## License

[MIT](LICENSE)
