# This module add stage 1 decorators syntax and behavior.

## Installation

```
yarn add -D react-app-rewire-decorators-legacy
```

OR

```
npm install --save-dev react-app-rewire-decorators
```

## Usage

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

### More information about decorators [1](https://github.com/wycats/javascript-decorators/blob/master/README.md), [2](https://cabbageapps.com/fell-love-js-decorators/)
