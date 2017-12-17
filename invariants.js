// Caching of node runtime environment
var NODE_ENV = process.env.NODE_ENV;

var invariants = function(condition, format, a, b, c, d, e, f) {
  if (NODE_ENV !== 'production') {
    if (format === undefined) {
      throw new Error('invariants requires an error message argument');
    }
  }

  if (!condition) {
    var error;
    if (format === undefined) {
      error = new Error(
        'Minified exception occurred; use the non-minified dev environment ' +
        'for the full error message and additional helpful warnings.'
      );
    } else {
      var args = [a, b, c, d, e, f];
      var argIndex = 0;
      error = new Error(
        format.replace(/%s/g, function() { return args[argIndex++]; })
      );
      error.name = 'invariants Violation';
    }

    error.framesToPop = 1; // we don't care about invariants's own frame
    throw error;
  }
};


// Establish the root object, `window` (`self`) in the browser, `global`
// on the server, or `this` in some virtual machines. We use `self`
// instead of `window` for `WebWorker` support.
var root = typeof self == 'object' && self.self === self && self ||
  typeof global == 'object' && global.global === global && global ||
  this || {};

// Export the Invariants object for **Node.js**, with
// backwards-compatibility for their old module API. If we're in
// the browser, add `invariants` as a global object.
// (`nodeType` is checked to ensure that `module`
// and `exports` are not HTML elements.)
if (typeof exports != 'undefined' && !exports.nodeType) {
  if (typeof module != 'undefined' && !module.nodeType && module.exports) {
    exports = module.exports = invariants;
  }
  exports.invariants = invariants;
} else {
  root.invariants = invariants;
}