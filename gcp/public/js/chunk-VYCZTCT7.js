var g = Object.create;
var d = Object.defineProperty;
var h = Object.getOwnPropertyDescriptor;
var i = Object.getOwnPropertyNames;
var j = Object.getPrototypeOf,
  k = Object.prototype.hasOwnProperty;
var l = (a) => d(a, '__esModule', { value: !0 });
var n = (a, b) => () => b || a((b = { exports: {} }).exports, b), b.exports;
var m = (a, b, f, e) => {
    if ((b && typeof b == 'object') || typeof b == 'function')
      for (let c of i(b))
        !k.call(a, c) &&
          (f || c !== 'default') &&
          d(a, c, {
            get: () => b[c],
            enumerable: !(e = h(b, c)) || e.enumerable,
          });
    return a;
  },
  o = (a, b) =>
    m(
      l(
        d(
          a != null ? g(j(a)) : {},
          'default',
          !b && a && a.__esModule
            ? { get: () => a.default, enumerable: !0 }
            : { value: a, enumerable: !0 }
        )
      ),
      a
    );
export { n as a, o as b };
