# react-ts-cdk

<p align="center">
    <span>
        <img alt="travis ci build status" src="https://img.shields.io/travis/santospatrick/react-ts-cdk/develop.svg?style=flat-square">
    </span>
    <span>
        <img alt="percentage of code coverage by tests" src="https://img.shields.io/codecov/c/github/santospatrick/react-ts-cdk/develop.svg?style=flat-square">
    </span>
    <span>
        <img alt="npm" src="https://img.shields.io/npm/v/npm.svg?style=flat-square">
    </span>
    <span>
        <img alt="code style: prettier" src="https://img.shields.io/badge/code_style-prettier-ff69b4.svg?style=flat-square">
    </span>
    <span>
        <img alt="commitizen friendly" src="https://img.shields.io/badge/commitizen-friendly-brightgreen.svg">
    </span>
</p>

> 🔥 React + Typescript Boilerplate to develop your own react components and reuse in another projects

![React Typescript Component Development Kit](images/intro.jpg)

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
|           └── types.ts                # Types for props
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

## Contributing

1. Fork it!
2. Create your feature branch: `git checkout -b my-new-feature`
3. Check our [workflow](#workflow) (it will help you understand how you should develop your feature), if you haven't yet.
4. Commit your changes: `yarn run commit`
5. Push to the branch: `git push origin my-new-feature`
6. Submit a pull request :smile:

## License

[MIT](https://github.com/santospatrick/react-ts-cdk/blob/master/LICENSE)
