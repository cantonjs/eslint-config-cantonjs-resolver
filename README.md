# eslint-config-cantonjs-resolver

[![Build Status](https://travis-ci.org/cantonjs/eslint-config-cantonjs-resolver.svg?branch=master)](https://travis-ci.org/cantonjs/eslint-config-cantonjs-resolver)

> ESLint [shareable config](http://eslint.org/docs/developer-guide/shareable-configs.html) for the Cantonjs, with [import/resolver](https://github.com/benmosher/eslint-plugin-import)


## Installation

```
$ npm install --save-dev eslint eslint-config-cantonjs-resolver
```

You may also need to add [babel-plugin-module-resolver](https://github.com/tleunen/babel-plugin-module-resolver) and [webpack](https://github.com/webpack/webpack)


## Usage

Once the `eslint-config-cantonjs-resolver` package is installed, you can use it by specifying `cantonjs-resolver` in the [`extends`](http://eslint.org/docs/user-guide/configuring#extending-configuration-files) section of your [ESLint configuration](http://eslint.org/docs/user-guide/configuring).

```js
{
  "extends": "cantonjs-resolver",
  "rules": {
    // Additional, per-project rules...
  }
}
```

**Note** You may also need to config [babel-plugin-module-resolver](https://github.com/tleunen/babel-plugin-module-resolver/blob/master/DOCS.md) and [webpack resolve](https://webpack.js.org/configuration/resolve/) to make resolvers work

## Configures / Extends

- `extends: "cantonjs-resolver"` [eslint-config-cantonjs](https://github.com/cantonjs/eslint-config-cantonjs) + [import/resolver](https://github.com/benmosher/eslint-plugin-import)
- `extends: "cantonjs-resolver/base"` the same with `extends: "cantonjs-resolver"`
- `extends: "cantonjs-resolver/react-resolve"` `base` + `react` + [import/resolver](https://github.com/benmosher/eslint-plugin-import)


## Related Projects

- [eslint-config-cantonjs](https://github.com/cantonjs/eslint-config-cantonjs)


## License

MIT © Cantonjs
