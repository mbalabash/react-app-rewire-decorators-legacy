# This module is specifically for Babel 6.x and replicates the old decorator behavior from Babel 5.

## Installation

```
yarn add -D react-app-rewire-decorators-legacy
```

OR

```
npm install --save-dev react-app-rewire-decorators
```

## Usage

legacy: true (Use the legacy (stage 1) decorators syntax and behavior. Defaults to false).

```js
// config-overrides.js
const rewireDecorators = require("react-app-rewire-decorators-legacy");

module.exports = function override(config, env) {
  config = rewireDecorators(config, env);
  // other rewires...
  return config;
};
```

or

```js
// config-overrides.js
const { compose } = require("react-app-required");
const rewireDecorators = require("react-app-rewire-decorators-legacy");

module.exports = compose(
  rewireDecorators
  // other rewires...
);
```

## Use cases

```js
import {withRouter} from ‘react-router’

@withRouter

class MyComponent extends
```

```js
@isTestable(true)
class MyClass {}

function isTestable(value) {
  return function decorator(Target) {
    return class extends Target {
      isTestable = `isTestable: ${value}`;
    };
  };
}
```

```js
class C {
  @enumerable(false)
  method() {}
}

function enumerable(value) {
  return function(target, key, descriptor) {
    descriptor.enumerable = value;
    return descriptor;
  };
}
```

### More information about [decorators](https://cabbageapps.com/fell-love-js-decorators/)
