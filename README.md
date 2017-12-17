# invariants

Used [Underscore.js](https://github.com/jashkenas/underscore)'s way of making universal module, and used codebase of [zertosh's invariants repo](https://github.com/zertosh/invariant), to make it usable everywhere.

A mirror of Facebook's `invariant` (e.g. [React](https://github.com/facebook/react/blob/v0.13.3/src/vendor/core/invariant.js), [flux](https://github.com/facebook/flux/blob/2.0.2/src/invariant.js)).

A way to provide descriptive errors in development but generic errors in production.

## Install

With [npm](http://npmjs.org) do:

```sh
npm install invariants
```

## `invariants(condition, message)`

```js
const invariants = require('invariants');

invariants(someTruthyVal, 'This will not throw');
// No errors

invariants(someFalseyVal, 'This will throw an error with this message');
// Error: Invariants Violation: This will throw an error with this message
```

**Note:** When `process.env.NODE_ENV` is not `production`, the message is required. If omitted, `invariants` will throw regardless of the truthiness of the condition. When `process.env.NODE_ENV` is `production`, the message is optional – so they can be minified away.