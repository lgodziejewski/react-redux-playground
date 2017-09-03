# react-redux-playground

This project was bootstrapped with
[Create React App](https://github.com/facebookincubator/create-react-app).

## Requirements
This project assumes that you have Node.js v6.x+ installed.

As this app is based on CRA, all of the following commands are just like in
the CRA User Guide linked above.

## Installation

Please use the command below to install all package requirements.
```
npm install
```
## Development
To start local dev server, use the following command:
```
npm start
```
## Testing
To run tests, please use
```
npm test
```

By default, it runs only tests according to current diff. If you want to run
all tests, press 'a' after the interactive console is shown.

Tests are currently implemented only for the `Comments` container(actions, reducers).

There are also simple `render` tests for all views. 

## Structure

The `src` directory contains all of the source files - application bootstrapper index.js
and entry React component - App.js. The rest of the application logic is placed inside `app`.

The `app` directory contains the following files and directories:
+ components - directory containing component directories. Inside are placed presentational
components, their styles and tests
+ container - directory containing container directories. Inside stateful components can be
found, along with their actions, reducers and tests
+ constants.js - as the name says - list of app constants
+ reducers.js - combine all container reducers
+ utils.js - helper functions, currently containing localStorageWrapper
