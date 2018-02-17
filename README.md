# vraw

<p align="center">
    <span>
        <img alt="latest release" src="https://img.shields.io/github/release/agrotis-io/vraw/all.svg?style=flat-square">
    </span>
    <span>
        <img alt="travis ci build status" src="https://img.shields.io/travis/agrotis-io/vraw/master.svg?style=flat-square">
    </span>
    <span>
        <img alt="percentage of code coverage by tests" src="https://img.shields.io/codecov/c/github/agrotis-io/vraw/master.svg?style=flat-square">
    </span>
    <span>
        <img alt="minimum node version" src="https://img.shields.io/node/v/vraw.svg?style=flat-square">
    </span>
    <span>
        <img alt="code style: prettier" src="https://img.shields.io/badge/code_style-prettier-ff69b4.svg?style=flat-square">
    </span>
    <span>
        <img alt="commitizen friendly" src="https://img.shields.io/badge/commitizen-friendly-brightgreen.svg?style=flat-square">
    </span>
    <span>
        <img alt="semantic release" src="https://img.shields.io/badge/%20%20%F0%9F%93%A6%F0%9F%9A%80-semantic--release-e10079.svg?style=flat-square">
    </span>
</p>

> 🌱 Vraw is a implementation of react stateless components that can be used as a npm package in your projects.

![Vraw Logomark with text "vraw" under the symbol](images/intro.jpg)

## Usage

using npm:

```bash
$ npm install vraw --save
```

in code:

```jsx
import React, { Component } from "react";
// importing Clock component
import { Clock } from "vraw";

class App extends Component {
  render() {
    return (
      // using Clock component
      <Clock msg="It works!" date={new Date()} />
    );
  }
}

export default App;
```

## Motivation

Components are cool! We should use them everywhere. So, you expent time developing a lot of components and now you want to reuse them in another awesome project & all your projects need your components updated when a new feature is released (and you also need typechecking, tests, hot module replacement & all the good stuff).

## Directory Structure

```
.
├── src
|   └── components
|       └── MyComponent                 # Your component
|           ├── MyComponent.story.tsx   # Storybook of your component
|           ├── MyComponent.test.tsx    # Jest + Enzyme tests
|           ├── MyComponent.tsx         # Its JSX + Typescript file
|           ├── MyComponent.types.ts    # Types for props
|           └── index.ts                # Export Component
|       └── MyComponentX                # Another component X
|       └── MyComponentY                # Another component Y
|       └── MyComponentZ                # Another component Z
|       └── stories.tsx                 # Storybook config file
├── dist
|    └── index.js                       # Exporting all Componentss
```

## Features

* [x] React
* [x] Typescript
* [x] Storybook
* [x] Jest
* [x] Enzyme
* [x] Webpack
* [x] Prettier
* [x] Commitizen

## Workflow

[See presentation](http://slides.com/santospatrick/react-typescript-cdk/fullscreen)

![Repository Workflow](images/workflow.png)
