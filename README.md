# invariant

A mirror of Facebook's `invariant` (e.g. [React](https://github.com/facebook/react/blob/v0.13.3/src/vendor/core/invariant.js), [flux](https://github.com/facebook/flux/blob/2.0.2/src/invariant.js)).

A way to provide descriptive errors in development but generic errors in production.

## Install

With [npm](http://npmjs.org) do:

```sh
npm install invariant
```

## `invariant(condition, message)`

```js
var invariant = require('invariant');

invariant(someTruthyVal, 'This will not throw');
// No errors

invariant(someFalseyVal, 'This will throw an error with this message');
// Error: Invariant Violation: This will throw an error with this message
```

**Note:** When `process.env.NODE_ENV` is not `production`, the message is required. If omitted, `invariant` will throw regardless of the truthiness of the condition. When `process.env.NODE_ENV` is `production`, the message is optional – so they can be minified away.

### Compatibility

Used Underscore.js's way of making universal module, so it will probably work for all types of imports.
Raise an issue if doesn't work, and will update.