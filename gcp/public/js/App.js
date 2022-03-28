import { a as qe, b as Po } from './chunk-VYCZTCT7.js';
var ol = qe((rd, To) => {
  'use strict';
  var No = Object.getOwnPropertySymbols,
    Ga = Object.prototype.hasOwnProperty,
    Za = Object.prototype.propertyIsEnumerable;
  function qa(e) {
    if (e == null)
      throw new TypeError(
        'Object.assign cannot be called with null or undefined'
      );
    return Object(e);
  }
  function Ja() {
    try {
      if (!Object.assign) return !1;
      var e = new String('abc');
      if (((e[5] = 'de'), Object.getOwnPropertyNames(e)[0] === '5')) return !1;
      for (var t = {}, n = 0; n < 10; n++) t['_' + String.fromCharCode(n)] = n;
      var r = Object.getOwnPropertyNames(t).map(function (i) {
        return t[i];
      });
      if (r.join('') !== '0123456789') return !1;
      var l = {};
      return (
        'abcdefghijklmnopqrst'.split('').forEach(function (i) {
          l[i] = i;
        }),
        Object.keys(Object.assign({}, l)).join('') === 'abcdefghijklmnopqrst'
      );
    } catch {
      return !1;
    }
  }
  To.exports = Ja()
    ? Object.assign
    : function (e, t) {
        for (var n, r = qa(e), l, i = 1; i < arguments.length; i++) {
          n = Object(arguments[i]);
          for (var o in n) Ga.call(n, o) && (r[o] = n[o]);
          if (No) {
            l = No(n);
            for (var u = 0; u < l.length; u++)
              Za.call(n, l[u]) && (r[l[u]] = n[l[u]]);
          }
        }
        return r;
      };
});
var Wo = qe((O) => {
  'use strict';
  var sl = ol(),
    pt = 60103,
    Mo = 60106;
  O.Fragment = 60107;
  O.StrictMode = 60108;
  O.Profiler = 60114;
  var zo = 60109,
    Do = 60110,
    Ro = 60112;
  O.Suspense = 60113;
  var Fo = 60115,
    jo = 60116;
  typeof Symbol == 'function' &&
    Symbol.for &&
    ((le = Symbol.for),
    (pt = le('react.element')),
    (Mo = le('react.portal')),
    (O.Fragment = le('react.fragment')),
    (O.StrictMode = le('react.strict_mode')),
    (O.Profiler = le('react.profiler')),
    (zo = le('react.provider')),
    (Do = le('react.context')),
    (Ro = le('react.forward_ref')),
    (O.Suspense = le('react.suspense')),
    (Fo = le('react.memo')),
    (jo = le('react.lazy')));
  var le,
    Oo = typeof Symbol == 'function' && Symbol.iterator;
  function ba(e) {
    return e === null || typeof e != 'object'
      ? null
      : ((e = (Oo && e[Oo]) || e['@@iterator']),
        typeof e == 'function' ? e : null);
  }
  function Yt(e) {
    for (
      var t = 'https://reactjs.org/docs/error-decoder.html?invariant=' + e,
        n = 1;
      n < arguments.length;
      n++
    )
      t += '&args[]=' + encodeURIComponent(arguments[n]);
    return (
      'Minified React error #' +
      e +
      '; visit ' +
      t +
      ' for the full message or use the non-minified dev environment for full errors and additional helpful warnings.'
    );
  }
  var Io = {
      isMounted: function () {
        return !1;
      },
      enqueueForceUpdate: function () {},
      enqueueReplaceState: function () {},
      enqueueSetState: function () {},
    },
    Uo = {};
  function mt(e, t, n) {
    (this.props = e),
      (this.context = t),
      (this.refs = Uo),
      (this.updater = n || Io);
  }
  mt.prototype.isReactComponent = {};
  mt.prototype.setState = function (e, t) {
    if (typeof e != 'object' && typeof e != 'function' && e != null)
      throw Error(Yt(85));
    this.updater.enqueueSetState(this, e, t, 'setState');
  };
  mt.prototype.forceUpdate = function (e) {
    this.updater.enqueueForceUpdate(this, e, 'forceUpdate');
  };
  function Vo() {}
  Vo.prototype = mt.prototype;
  function al(e, t, n) {
    (this.props = e),
      (this.context = t),
      (this.refs = Uo),
      (this.updater = n || Io);
  }
  var fl = (al.prototype = new Vo());
  fl.constructor = al;
  sl(fl, mt.prototype);
  fl.isPureReactComponent = !0;
  var cl = { current: null },
    Bo = Object.prototype.hasOwnProperty,
    Ao = { key: !0, ref: !0, __self: !0, __source: !0 };
  function $o(e, t, n) {
    var r,
      l = {},
      i = null,
      o = null;
    if (t != null)
      for (r in (t.ref !== void 0 && (o = t.ref),
      t.key !== void 0 && (i = '' + t.key),
      t))
        Bo.call(t, r) && !Ao.hasOwnProperty(r) && (l[r] = t[r]);
    var u = arguments.length - 2;
    if (u === 1) l.children = n;
    else if (1 < u) {
      for (var s = Array(u), c = 0; c < u; c++) s[c] = arguments[c + 2];
      l.children = s;
    }
    if (e && e.defaultProps)
      for (r in ((u = e.defaultProps), u)) l[r] === void 0 && (l[r] = u[r]);
    return {
      $$typeof: pt,
      type: e,
      key: i,
      ref: o,
      props: l,
      _owner: cl.current,
    };
  }
  function ef(e, t) {
    return {
      $$typeof: pt,
      type: e.type,
      key: t,
      ref: e.ref,
      props: e.props,
      _owner: e._owner,
    };
  }
  function dl(e) {
    return typeof e == 'object' && e !== null && e.$$typeof === pt;
  }
  function tf(e) {
    var t = { '=': '=0', ':': '=2' };
    return (
      '$' +
      e.replace(/[=:]/g, function (n) {
        return t[n];
      })
    );
  }
  var Lo = /\/+/g;
  function ul(e, t) {
    return typeof e == 'object' && e !== null && e.key != null
      ? tf('' + e.key)
      : t.toString(36);
  }
  function Kn(e, t, n, r, l) {
    var i = typeof e;
    (i === 'undefined' || i === 'boolean') && (e = null);
    var o = !1;
    if (e === null) o = !0;
    else
      switch (i) {
        case 'string':
        case 'number':
          o = !0;
          break;
        case 'object':
          switch (e.$$typeof) {
            case pt:
            case Mo:
              o = !0;
          }
      }
    if (o)
      return (
        (o = e),
        (l = l(o)),
        (e = r === '' ? '.' + ul(o, 0) : r),
        Array.isArray(l)
          ? ((n = ''),
            e != null && (n = e.replace(Lo, '$&/') + '/'),
            Kn(l, t, n, '', function (c) {
              return c;
            }))
          : l != null &&
            (dl(l) &&
              (l = ef(
                l,
                n +
                  (!l.key || (o && o.key === l.key)
                    ? ''
                    : ('' + l.key).replace(Lo, '$&/') + '/') +
                  e
              )),
            t.push(l)),
        1
      );
    if (((o = 0), (r = r === '' ? '.' : r + ':'), Array.isArray(e)))
      for (var u = 0; u < e.length; u++) {
        i = e[u];
        var s = r + ul(i, u);
        o += Kn(i, t, n, s, l);
      }
    else if (((s = ba(e)), typeof s == 'function'))
      for (e = s.call(e), u = 0; !(i = e.next()).done; )
        (i = i.value), (s = r + ul(i, u++)), (o += Kn(i, t, n, s, l));
    else if (i === 'object')
      throw (
        ((t = '' + e),
        Error(
          Yt(
            31,
            t === '[object Object]'
              ? 'object with keys {' + Object.keys(e).join(', ') + '}'
              : t
          )
        ))
      );
    return o;
  }
  function Yn(e, t, n) {
    if (e == null) return e;
    var r = [],
      l = 0;
    return (
      Kn(e, r, '', '', function (i) {
        return t.call(n, i, l++);
      }),
      r
    );
  }
  function nf(e) {
    if (e._status === -1) {
      var t = e._result;
      (t = t()),
        (e._status = 0),
        (e._result = t),
        t.then(
          function (n) {
            e._status === 0 &&
              ((n = n.default), (e._status = 1), (e._result = n));
          },
          function (n) {
            e._status === 0 && ((e._status = 2), (e._result = n));
          }
        );
    }
    if (e._status === 1) return e._result;
    throw e._result;
  }
  var Ho = { current: null };
  function Ee() {
    var e = Ho.current;
    if (e === null) throw Error(Yt(321));
    return e;
  }
  var rf = {
    ReactCurrentDispatcher: Ho,
    ReactCurrentBatchConfig: { transition: 0 },
    ReactCurrentOwner: cl,
    IsSomeRendererActing: { current: !1 },
    assign: sl,
  };
  O.Children = {
    map: Yn,
    forEach: function (e, t, n) {
      Yn(
        e,
        function () {
          t.apply(this, arguments);
        },
        n
      );
    },
    count: function (e) {
      var t = 0;
      return (
        Yn(e, function () {
          t++;
        }),
        t
      );
    },
    toArray: function (e) {
      return (
        Yn(e, function (t) {
          return t;
        }) || []
      );
    },
    only: function (e) {
      if (!dl(e)) throw Error(Yt(143));
      return e;
    },
  };
  O.Component = mt;
  O.PureComponent = al;
  O.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = rf;
  O.cloneElement = function (e, t, n) {
    if (e == null) throw Error(Yt(267, e));
    var r = sl({}, e.props),
      l = e.key,
      i = e.ref,
      o = e._owner;
    if (t != null) {
      if (
        (t.ref !== void 0 && ((i = t.ref), (o = cl.current)),
        t.key !== void 0 && (l = '' + t.key),
        e.type && e.type.defaultProps)
      )
        var u = e.type.defaultProps;
      for (s in t)
        Bo.call(t, s) &&
          !Ao.hasOwnProperty(s) &&
          (r[s] = t[s] === void 0 && u !== void 0 ? u[s] : t[s]);
    }
    var s = arguments.length - 2;
    if (s === 1) r.children = n;
    else if (1 < s) {
      u = Array(s);
      for (var c = 0; c < s; c++) u[c] = arguments[c + 2];
      r.children = u;
    }
    return { $$typeof: pt, type: e.type, key: l, ref: i, props: r, _owner: o };
  };
  O.createContext = function (e, t) {
    return (
      t === void 0 && (t = null),
      (e = {
        $$typeof: Do,
        _calculateChangedBits: t,
        _currentValue: e,
        _currentValue2: e,
        _threadCount: 0,
        Provider: null,
        Consumer: null,
      }),
      (e.Provider = { $$typeof: zo, _context: e }),
      (e.Consumer = e)
    );
  };
  O.createElement = $o;
  O.createFactory = function (e) {
    var t = $o.bind(null, e);
    return (t.type = e), t;
  };
  O.createRef = function () {
    return { current: null };
  };
  O.forwardRef = function (e) {
    return { $$typeof: Ro, render: e };
  };
  O.isValidElement = dl;
  O.lazy = function (e) {
    return { $$typeof: jo, _payload: { _status: -1, _result: e }, _init: nf };
  };
  O.memo = function (e, t) {
    return { $$typeof: Fo, type: e, compare: t === void 0 ? null : t };
  };
  O.useCallback = function (e, t) {
    return Ee().useCallback(e, t);
  };
  O.useContext = function (e, t) {
    return Ee().useContext(e, t);
  };
  O.useDebugValue = function () {};
  O.useEffect = function (e, t) {
    return Ee().useEffect(e, t);
  };
  O.useImperativeHandle = function (e, t, n) {
    return Ee().useImperativeHandle(e, t, n);
  };
  O.useLayoutEffect = function (e, t) {
    return Ee().useLayoutEffect(e, t);
  };
  O.useMemo = function (e, t) {
    return Ee().useMemo(e, t);
  };
  O.useReducer = function (e, t, n) {
    return Ee().useReducer(e, t, n);
  };
  O.useRef = function (e) {
    return Ee().useRef(e);
  };
  O.useState = function (e) {
    return Ee().useState(e);
  };
  O.version = '17.0.2';
});
var pl = qe((id, Qo) => {
  'use strict';
  Qo.exports = Wo();
});
var qo = qe((L) => {
  'use strict';
  var vt, Gt, qn, Sl;
  typeof performance == 'object' && typeof performance.now == 'function'
    ? ((Yo = performance),
      (L.unstable_now = function () {
        return Yo.now();
      }))
    : ((ml = Date),
      (Ko = ml.now()),
      (L.unstable_now = function () {
        return ml.now() - Ko;
      }));
  var Yo, ml, Ko;
  typeof window > 'u' || typeof MessageChannel != 'function'
    ? ((ht = null),
      (hl = null),
      (vl = function () {
        if (ht !== null)
          try {
            var e = L.unstable_now();
            ht(!0, e), (ht = null);
          } catch (t) {
            throw (setTimeout(vl, 0), t);
          }
      }),
      (vt = function (e) {
        ht !== null ? setTimeout(vt, 0, e) : ((ht = e), setTimeout(vl, 0));
      }),
      (Gt = function (e, t) {
        hl = setTimeout(e, t);
      }),
      (qn = function () {
        clearTimeout(hl);
      }),
      (L.unstable_shouldYield = function () {
        return !1;
      }),
      (Sl = L.unstable_forceFrameRate = function () {}))
    : ((Xo = window.setTimeout),
      (Go = window.clearTimeout),
      typeof console < 'u' &&
        ((Zo = window.cancelAnimationFrame),
        typeof window.requestAnimationFrame != 'function' &&
          console.error(
            "This browser doesn't support requestAnimationFrame. Make sure that you load a polyfill in older browsers. https://reactjs.org/link/react-polyfills"
          ),
        typeof Zo != 'function' &&
          console.error(
            "This browser doesn't support cancelAnimationFrame. Make sure that you load a polyfill in older browsers. https://reactjs.org/link/react-polyfills"
          )),
      (Kt = !1),
      (Xt = null),
      (Xn = -1),
      (yl = 5),
      (gl = 0),
      (L.unstable_shouldYield = function () {
        return L.unstable_now() >= gl;
      }),
      (Sl = function () {}),
      (L.unstable_forceFrameRate = function (e) {
        0 > e || 125 < e
          ? console.error(
              'forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported'
            )
          : (yl = 0 < e ? Math.floor(1e3 / e) : 5);
      }),
      (wl = new MessageChannel()),
      (Gn = wl.port2),
      (wl.port1.onmessage = function () {
        if (Xt !== null) {
          var e = L.unstable_now();
          gl = e + yl;
          try {
            Xt(!0, e) ? Gn.postMessage(null) : ((Kt = !1), (Xt = null));
          } catch (t) {
            throw (Gn.postMessage(null), t);
          }
        } else Kt = !1;
      }),
      (vt = function (e) {
        (Xt = e), Kt || ((Kt = !0), Gn.postMessage(null));
      }),
      (Gt = function (e, t) {
        Xn = Xo(function () {
          e(L.unstable_now());
        }, t);
      }),
      (qn = function () {
        Go(Xn), (Xn = -1);
      }));
  var ht, hl, vl, Xo, Go, Zo, Kt, Xt, Xn, yl, gl, wl, Gn;
  function kl(e, t) {
    var n = e.length;
    e.push(t);
    e: for (;;) {
      var r = (n - 1) >>> 1,
        l = e[r];
      if (l !== void 0 && 0 < Zn(l, t)) (e[r] = t), (e[n] = l), (n = r);
      else break e;
    }
  }
  function de(e) {
    return (e = e[0]), e === void 0 ? null : e;
  }
  function Jn(e) {
    var t = e[0];
    if (t !== void 0) {
      var n = e.pop();
      if (n !== t) {
        e[0] = n;
        e: for (var r = 0, l = e.length; r < l; ) {
          var i = 2 * (r + 1) - 1,
            o = e[i],
            u = i + 1,
            s = e[u];
          if (o !== void 0 && 0 > Zn(o, n))
            s !== void 0 && 0 > Zn(s, o)
              ? ((e[r] = s), (e[u] = n), (r = u))
              : ((e[r] = o), (e[i] = n), (r = i));
          else if (s !== void 0 && 0 > Zn(s, n))
            (e[r] = s), (e[u] = n), (r = u);
          else break e;
        }
      }
      return t;
    }
    return null;
  }
  function Zn(e, t) {
    var n = e.sortIndex - t.sortIndex;
    return n !== 0 ? n : e.id - t.id;
  }
  var he = [],
    Le = [],
    lf = 1,
    ie = null,
    Q = 3,
    bn = !1,
    Je = !1,
    Zt = !1;
  function El(e) {
    for (var t = de(Le); t !== null; ) {
      if (t.callback === null) Jn(Le);
      else if (t.startTime <= e)
        Jn(Le), (t.sortIndex = t.expirationTime), kl(he, t);
      else break;
      t = de(Le);
    }
  }
  function _l(e) {
    if (((Zt = !1), El(e), !Je))
      if (de(he) !== null) (Je = !0), vt(Cl);
      else {
        var t = de(Le);
        t !== null && Gt(_l, t.startTime - e);
      }
  }
  function Cl(e, t) {
    (Je = !1), Zt && ((Zt = !1), qn()), (bn = !0);
    var n = Q;
    try {
      for (
        El(t), ie = de(he);
        ie !== null &&
        (!(ie.expirationTime > t) || (e && !L.unstable_shouldYield()));

      ) {
        var r = ie.callback;
        if (typeof r == 'function') {
          (ie.callback = null), (Q = ie.priorityLevel);
          var l = r(ie.expirationTime <= t);
          (t = L.unstable_now()),
            typeof l == 'function'
              ? (ie.callback = l)
              : ie === de(he) && Jn(he),
            El(t);
        } else Jn(he);
        ie = de(he);
      }
      if (ie !== null) var i = !0;
      else {
        var o = de(Le);
        o !== null && Gt(_l, o.startTime - t), (i = !1);
      }
      return i;
    } finally {
      (ie = null), (Q = n), (bn = !1);
    }
  }
  var of = Sl;
  L.unstable_IdlePriority = 5;
  L.unstable_ImmediatePriority = 1;
  L.unstable_LowPriority = 4;
  L.unstable_NormalPriority = 3;
  L.unstable_Profiling = null;
  L.unstable_UserBlockingPriority = 2;
  L.unstable_cancelCallback = function (e) {
    e.callback = null;
  };
  L.unstable_continueExecution = function () {
    Je || bn || ((Je = !0), vt(Cl));
  };
  L.unstable_getCurrentPriorityLevel = function () {
    return Q;
  };
  L.unstable_getFirstCallbackNode = function () {
    return de(he);
  };
  L.unstable_next = function (e) {
    switch (Q) {
      case 1:
      case 2:
      case 3:
        var t = 3;
        break;
      default:
        t = Q;
    }
    var n = Q;
    Q = t;
    try {
      return e();
    } finally {
      Q = n;
    }
  };
  L.unstable_pauseExecution = function () {};
  L.unstable_requestPaint = of;
  L.unstable_runWithPriority = function (e, t) {
    switch (e) {
      case 1:
      case 2:
      case 3:
      case 4:
      case 5:
        break;
      default:
        e = 3;
    }
    var n = Q;
    Q = e;
    try {
      return t();
    } finally {
      Q = n;
    }
  };
  L.unstable_scheduleCallback = function (e, t, n) {
    var r = L.unstable_now();
    switch (
      (typeof n == 'object' && n !== null
        ? ((n = n.delay), (n = typeof n == 'number' && 0 < n ? r + n : r))
        : (n = r),
      e)
    ) {
      case 1:
        var l = -1;
        break;
      case 2:
        l = 250;
        break;
      case 5:
        l = 1073741823;
        break;
      case 4:
        l = 1e4;
        break;
      default:
        l = 5e3;
    }
    return (
      (l = n + l),
      (e = {
        id: lf++,
        callback: t,
        priorityLevel: e,
        startTime: n,
        expirationTime: l,
        sortIndex: -1,
      }),
      n > r
        ? ((e.sortIndex = n),
          kl(Le, e),
          de(he) === null &&
            e === de(Le) &&
            (Zt ? qn() : (Zt = !0), Gt(_l, n - r)))
        : ((e.sortIndex = l), kl(he, e), Je || bn || ((Je = !0), vt(Cl))),
      e
    );
  };
  L.unstable_wrapCallback = function (e) {
    var t = Q;
    return function () {
      var n = Q;
      Q = t;
      try {
        return e.apply(this, arguments);
      } finally {
        Q = n;
      }
    };
  };
});
var bo = qe((ud, Jo) => {
  'use strict';
  Jo.exports = qo();
});
var Va = qe((ce) => {
  'use strict';
  var Yr = pl(),
    R = ol(),
    A = bo();
  function y(e) {
    for (
      var t = 'https://reactjs.org/docs/error-decoder.html?invariant=' + e,
        n = 1;
      n < arguments.length;
      n++
    )
      t += '&args[]=' + encodeURIComponent(arguments[n]);
    return (
      'Minified React error #' +
      e +
      '; visit ' +
      t +
      ' for the full message or use the non-minified dev environment for full errors and additional helpful warnings.'
    );
  }
  if (!Yr) throw Error(y(227));
  var ds = new Set(),
    Nn = {};
  function at(e, t) {
    It(e, t), It(e + 'Capture', t);
  }
  function It(e, t) {
    for (Nn[e] = t, e = 0; e < t.length; e++) ds.add(t[e]);
  }
  var Te = !(
      typeof window > 'u' ||
      typeof window.document > 'u' ||
      typeof window.document.createElement > 'u'
    ),
    uf =
      /^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,
    eu = Object.prototype.hasOwnProperty,
    tu = {},
    nu = {};
  function sf(e) {
    return eu.call(nu, e)
      ? !0
      : eu.call(tu, e)
      ? !1
      : uf.test(e)
      ? (nu[e] = !0)
      : ((tu[e] = !0), !1);
  }
  function af(e, t, n, r) {
    if (n !== null && n.type === 0) return !1;
    switch (typeof t) {
      case 'function':
      case 'symbol':
        return !0;
      case 'boolean':
        return r
          ? !1
          : n !== null
          ? !n.acceptsBooleans
          : ((e = e.toLowerCase().slice(0, 5)), e !== 'data-' && e !== 'aria-');
      default:
        return !1;
    }
  }
  function ff(e, t, n, r) {
    if (t === null || typeof t > 'u' || af(e, t, n, r)) return !0;
    if (r) return !1;
    if (n !== null)
      switch (n.type) {
        case 3:
          return !t;
        case 4:
          return t === !1;
        case 5:
          return isNaN(t);
        case 6:
          return isNaN(t) || 1 > t;
      }
    return !1;
  }
  function q(e, t, n, r, l, i, o) {
    (this.acceptsBooleans = t === 2 || t === 3 || t === 4),
      (this.attributeName = r),
      (this.attributeNamespace = l),
      (this.mustUseProperty = n),
      (this.propertyName = e),
      (this.type = t),
      (this.sanitizeURL = i),
      (this.removeEmptyString = o);
  }
  var W = {};
  'children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style'
    .split(' ')
    .forEach(function (e) {
      W[e] = new q(e, 0, !1, e, null, !1, !1);
    });
  [
    ['acceptCharset', 'accept-charset'],
    ['className', 'class'],
    ['htmlFor', 'for'],
    ['httpEquiv', 'http-equiv'],
  ].forEach(function (e) {
    var t = e[0];
    W[t] = new q(t, 1, !1, e[1], null, !1, !1);
  });
  ['contentEditable', 'draggable', 'spellCheck', 'value'].forEach(function (e) {
    W[e] = new q(e, 2, !1, e.toLowerCase(), null, !1, !1);
  });
  [
    'autoReverse',
    'externalResourcesRequired',
    'focusable',
    'preserveAlpha',
  ].forEach(function (e) {
    W[e] = new q(e, 2, !1, e, null, !1, !1);
  });
  'allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope'
    .split(' ')
    .forEach(function (e) {
      W[e] = new q(e, 3, !1, e.toLowerCase(), null, !1, !1);
    });
  ['checked', 'multiple', 'muted', 'selected'].forEach(function (e) {
    W[e] = new q(e, 3, !0, e, null, !1, !1);
  });
  ['capture', 'download'].forEach(function (e) {
    W[e] = new q(e, 4, !1, e, null, !1, !1);
  });
  ['cols', 'rows', 'size', 'span'].forEach(function (e) {
    W[e] = new q(e, 6, !1, e, null, !1, !1);
  });
  ['rowSpan', 'start'].forEach(function (e) {
    W[e] = new q(e, 5, !1, e.toLowerCase(), null, !1, !1);
  });
  var Di = /[\-:]([a-z])/g;
  function Ri(e) {
    return e[1].toUpperCase();
  }
  'accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height'
    .split(' ')
    .forEach(function (e) {
      var t = e.replace(Di, Ri);
      W[t] = new q(t, 1, !1, e, null, !1, !1);
    });
  'xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type'
    .split(' ')
    .forEach(function (e) {
      var t = e.replace(Di, Ri);
      W[t] = new q(t, 1, !1, e, 'http://www.w3.org/1999/xlink', !1, !1);
    });
  ['xml:base', 'xml:lang', 'xml:space'].forEach(function (e) {
    var t = e.replace(Di, Ri);
    W[t] = new q(t, 1, !1, e, 'http://www.w3.org/XML/1998/namespace', !1, !1);
  });
  ['tabIndex', 'crossOrigin'].forEach(function (e) {
    W[e] = new q(e, 1, !1, e.toLowerCase(), null, !1, !1);
  });
  W.xlinkHref = new q(
    'xlinkHref',
    1,
    !1,
    'xlink:href',
    'http://www.w3.org/1999/xlink',
    !0,
    !1
  );
  ['src', 'href', 'action', 'formAction'].forEach(function (e) {
    W[e] = new q(e, 1, !1, e.toLowerCase(), null, !0, !0);
  });
  function Fi(e, t, n, r) {
    var l = W.hasOwnProperty(t) ? W[t] : null,
      i =
        l !== null
          ? l.type === 0
          : r
          ? !1
          : !(
              !(2 < t.length) ||
              (t[0] !== 'o' && t[0] !== 'O') ||
              (t[1] !== 'n' && t[1] !== 'N')
            );
    i ||
      (ff(t, n, l, r) && (n = null),
      r || l === null
        ? sf(t) &&
          (n === null ? e.removeAttribute(t) : e.setAttribute(t, '' + n))
        : l.mustUseProperty
        ? (e[l.propertyName] = n === null ? (l.type === 3 ? !1 : '') : n)
        : ((t = l.attributeName),
          (r = l.attributeNamespace),
          n === null
            ? e.removeAttribute(t)
            : ((l = l.type),
              (n = l === 3 || (l === 4 && n === !0) ? '' : '' + n),
              r ? e.setAttributeNS(r, t, n) : e.setAttribute(t, n))));
  }
  var ft = Yr.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,
    fn = 60103,
    et = 60106,
    ze = 60107,
    ji = 60108,
    hn = 60114,
    Ii = 60109,
    Ui = 60110,
    Kr = 60112,
    vn = 60113,
    _r = 60120,
    Xr = 60115,
    Vi = 60116,
    Bi = 60121,
    Ai = 60128,
    ps = 60129,
    $i = 60130,
    Kl = 60131;
  typeof Symbol == 'function' &&
    Symbol.for &&
    ((V = Symbol.for),
    (fn = V('react.element')),
    (et = V('react.portal')),
    (ze = V('react.fragment')),
    (ji = V('react.strict_mode')),
    (hn = V('react.profiler')),
    (Ii = V('react.provider')),
    (Ui = V('react.context')),
    (Kr = V('react.forward_ref')),
    (vn = V('react.suspense')),
    (_r = V('react.suspense_list')),
    (Xr = V('react.memo')),
    (Vi = V('react.lazy')),
    (Bi = V('react.block')),
    V('react.scope'),
    (Ai = V('react.opaque.id')),
    (ps = V('react.debug_trace_mode')),
    ($i = V('react.offscreen')),
    (Kl = V('react.legacy_hidden')));
  var V,
    ru = typeof Symbol == 'function' && Symbol.iterator;
  function qt(e) {
    return e === null || typeof e != 'object'
      ? null
      : ((e = (ru && e[ru]) || e['@@iterator']),
        typeof e == 'function' ? e : null);
  }
  var xl;
  function cn(e) {
    if (xl === void 0)
      try {
        throw Error();
      } catch (n) {
        var t = n.stack.trim().match(/\n( *(at )?)/);
        xl = (t && t[1]) || '';
      }
    return (
      `
` +
      xl +
      e
    );
  }
  var Pl = !1;
  function er(e, t) {
    if (!e || Pl) return '';
    Pl = !0;
    var n = Error.prepareStackTrace;
    Error.prepareStackTrace = void 0;
    try {
      if (t)
        if (
          ((t = function () {
            throw Error();
          }),
          Object.defineProperty(t.prototype, 'props', {
            set: function () {
              throw Error();
            },
          }),
          typeof Reflect == 'object' && Reflect.construct)
        ) {
          try {
            Reflect.construct(t, []);
          } catch (s) {
            var r = s;
          }
          Reflect.construct(e, [], t);
        } else {
          try {
            t.call();
          } catch (s) {
            r = s;
          }
          e.call(t.prototype);
        }
      else {
        try {
          throw Error();
        } catch (s) {
          r = s;
        }
        e();
      }
    } catch (s) {
      if (s && r && typeof s.stack == 'string') {
        for (
          var l = s.stack.split(`
`),
            i = r.stack.split(`
`),
            o = l.length - 1,
            u = i.length - 1;
          1 <= o && 0 <= u && l[o] !== i[u];

        )
          u--;
        for (; 1 <= o && 0 <= u; o--, u--)
          if (l[o] !== i[u]) {
            if (o !== 1 || u !== 1)
              do
                if ((o--, u--, 0 > u || l[o] !== i[u]))
                  return (
                    `
` + l[o].replace(' at new ', ' at ')
                  );
              while (1 <= o && 0 <= u);
            break;
          }
      }
    } finally {
      (Pl = !1), (Error.prepareStackTrace = n);
    }
    return (e = e ? e.displayName || e.name : '') ? cn(e) : '';
  }
  function cf(e) {
    switch (e.tag) {
      case 5:
        return cn(e.type);
      case 16:
        return cn('Lazy');
      case 13:
        return cn('Suspense');
      case 19:
        return cn('SuspenseList');
      case 0:
      case 2:
      case 15:
        return (e = er(e.type, !1)), e;
      case 11:
        return (e = er(e.type.render, !1)), e;
      case 22:
        return (e = er(e.type._render, !1)), e;
      case 1:
        return (e = er(e.type, !0)), e;
      default:
        return '';
    }
  }
  function Nt(e) {
    if (e == null) return null;
    if (typeof e == 'function') return e.displayName || e.name || null;
    if (typeof e == 'string') return e;
    switch (e) {
      case ze:
        return 'Fragment';
      case et:
        return 'Portal';
      case hn:
        return 'Profiler';
      case ji:
        return 'StrictMode';
      case vn:
        return 'Suspense';
      case _r:
        return 'SuspenseList';
    }
    if (typeof e == 'object')
      switch (e.$$typeof) {
        case Ui:
          return (e.displayName || 'Context') + '.Consumer';
        case Ii:
          return (e._context.displayName || 'Context') + '.Provider';
        case Kr:
          var t = e.render;
          return (
            (t = t.displayName || t.name || ''),
            e.displayName || (t !== '' ? 'ForwardRef(' + t + ')' : 'ForwardRef')
          );
        case Xr:
          return Nt(e.type);
        case Bi:
          return Nt(e._render);
        case Vi:
          (t = e._payload), (e = e._init);
          try {
            return Nt(e(t));
          } catch {}
      }
    return null;
  }
  function We(e) {
    switch (typeof e) {
      case 'boolean':
      case 'number':
      case 'object':
      case 'string':
      case 'undefined':
        return e;
      default:
        return '';
    }
  }
  function ms(e) {
    var t = e.type;
    return (
      (e = e.nodeName) &&
      e.toLowerCase() === 'input' &&
      (t === 'checkbox' || t === 'radio')
    );
  }
  function df(e) {
    var t = ms(e) ? 'checked' : 'value',
      n = Object.getOwnPropertyDescriptor(e.constructor.prototype, t),
      r = '' + e[t];
    if (
      !e.hasOwnProperty(t) &&
      typeof n < 'u' &&
      typeof n.get == 'function' &&
      typeof n.set == 'function'
    ) {
      var l = n.get,
        i = n.set;
      return (
        Object.defineProperty(e, t, {
          configurable: !0,
          get: function () {
            return l.call(this);
          },
          set: function (o) {
            (r = '' + o), i.call(this, o);
          },
        }),
        Object.defineProperty(e, t, { enumerable: n.enumerable }),
        {
          getValue: function () {
            return r;
          },
          setValue: function (o) {
            r = '' + o;
          },
          stopTracking: function () {
            (e._valueTracker = null), delete e[t];
          },
        }
      );
    }
  }
  function tr(e) {
    e._valueTracker || (e._valueTracker = df(e));
  }
  function hs(e) {
    if (!e) return !1;
    var t = e._valueTracker;
    if (!t) return !0;
    var n = t.getValue(),
      r = '';
    return (
      e && (r = ms(e) ? (e.checked ? 'true' : 'false') : e.value),
      (e = r),
      e !== n ? (t.setValue(e), !0) : !1
    );
  }
  function Cr(e) {
    if (
      ((e = e || (typeof document < 'u' ? document : void 0)), typeof e > 'u')
    )
      return null;
    try {
      return e.activeElement || e.body;
    } catch {
      return e.body;
    }
  }
  function Xl(e, t) {
    var n = t.checked;
    return R({}, t, {
      defaultChecked: void 0,
      defaultValue: void 0,
      value: void 0,
      checked: n ?? e._wrapperState.initialChecked,
    });
  }
  function lu(e, t) {
    var n = t.defaultValue == null ? '' : t.defaultValue,
      r = t.checked != null ? t.checked : t.defaultChecked;
    (n = We(t.value != null ? t.value : n)),
      (e._wrapperState = {
        initialChecked: r,
        initialValue: n,
        controlled:
          t.type === 'checkbox' || t.type === 'radio'
            ? t.checked != null
            : t.value != null,
      });
  }
  function vs(e, t) {
    (t = t.checked), t != null && Fi(e, 'checked', t, !1);
  }
  function Gl(e, t) {
    vs(e, t);
    var n = We(t.value),
      r = t.type;
    if (n != null)
      r === 'number'
        ? ((n === 0 && e.value === '') || e.value != n) && (e.value = '' + n)
        : e.value !== '' + n && (e.value = '' + n);
    else if (r === 'submit' || r === 'reset') {
      e.removeAttribute('value');
      return;
    }
    t.hasOwnProperty('value')
      ? Zl(e, t.type, n)
      : t.hasOwnProperty('defaultValue') && Zl(e, t.type, We(t.defaultValue)),
      t.checked == null &&
        t.defaultChecked != null &&
        (e.defaultChecked = !!t.defaultChecked);
  }
  function iu(e, t, n) {
    if (t.hasOwnProperty('value') || t.hasOwnProperty('defaultValue')) {
      var r = t.type;
      if (
        !(
          (r !== 'submit' && r !== 'reset') ||
          (t.value !== void 0 && t.value !== null)
        )
      )
        return;
      (t = '' + e._wrapperState.initialValue),
        n || t === e.value || (e.value = t),
        (e.defaultValue = t);
    }
    (n = e.name),
      n !== '' && (e.name = ''),
      (e.defaultChecked = !!e._wrapperState.initialChecked),
      n !== '' && (e.name = n);
  }
  function Zl(e, t, n) {
    (t !== 'number' || Cr(e.ownerDocument) !== e) &&
      (n == null
        ? (e.defaultValue = '' + e._wrapperState.initialValue)
        : e.defaultValue !== '' + n && (e.defaultValue = '' + n));
  }
  function pf(e) {
    var t = '';
    return (
      Yr.Children.forEach(e, function (n) {
        n != null && (t += n);
      }),
      t
    );
  }
  function ql(e, t) {
    return (
      (e = R({ children: void 0 }, t)),
      (t = pf(t.children)) && (e.children = t),
      e
    );
  }
  function Tt(e, t, n, r) {
    if (((e = e.options), t)) {
      t = {};
      for (var l = 0; l < n.length; l++) t['$' + n[l]] = !0;
      for (n = 0; n < e.length; n++)
        (l = t.hasOwnProperty('$' + e[n].value)),
          e[n].selected !== l && (e[n].selected = l),
          l && r && (e[n].defaultSelected = !0);
    } else {
      for (n = '' + We(n), t = null, l = 0; l < e.length; l++) {
        if (e[l].value === n) {
          (e[l].selected = !0), r && (e[l].defaultSelected = !0);
          return;
        }
        t !== null || e[l].disabled || (t = e[l]);
      }
      t !== null && (t.selected = !0);
    }
  }
  function Jl(e, t) {
    if (t.dangerouslySetInnerHTML != null) throw Error(y(91));
    return R({}, t, {
      value: void 0,
      defaultValue: void 0,
      children: '' + e._wrapperState.initialValue,
    });
  }
  function ou(e, t) {
    var n = t.value;
    if (n == null) {
      if (((n = t.children), (t = t.defaultValue), n != null)) {
        if (t != null) throw Error(y(92));
        if (Array.isArray(n)) {
          if (!(1 >= n.length)) throw Error(y(93));
          n = n[0];
        }
        t = n;
      }
      t == null && (t = ''), (n = t);
    }
    e._wrapperState = { initialValue: We(n) };
  }
  function ys(e, t) {
    var n = We(t.value),
      r = We(t.defaultValue);
    n != null &&
      ((n = '' + n),
      n !== e.value && (e.value = n),
      t.defaultValue == null && e.defaultValue !== n && (e.defaultValue = n)),
      r != null && (e.defaultValue = '' + r);
  }
  function uu(e) {
    var t = e.textContent;
    t === e._wrapperState.initialValue &&
      t !== '' &&
      t !== null &&
      (e.value = t);
  }
  var bl = {
    html: 'http://www.w3.org/1999/xhtml',
    mathml: 'http://www.w3.org/1998/Math/MathML',
    svg: 'http://www.w3.org/2000/svg',
  };
  function gs(e) {
    switch (e) {
      case 'svg':
        return 'http://www.w3.org/2000/svg';
      case 'math':
        return 'http://www.w3.org/1998/Math/MathML';
      default:
        return 'http://www.w3.org/1999/xhtml';
    }
  }
  function ei(e, t) {
    return e == null || e === 'http://www.w3.org/1999/xhtml'
      ? gs(t)
      : e === 'http://www.w3.org/2000/svg' && t === 'foreignObject'
      ? 'http://www.w3.org/1999/xhtml'
      : e;
  }
  var nr,
    ws = (function (e) {
      return typeof MSApp < 'u' && MSApp.execUnsafeLocalFunction
        ? function (t, n, r, l) {
            MSApp.execUnsafeLocalFunction(function () {
              return e(t, n, r, l);
            });
          }
        : e;
    })(function (e, t) {
      if (e.namespaceURI !== bl.svg || 'innerHTML' in e) e.innerHTML = t;
      else {
        for (
          nr = nr || document.createElement('div'),
            nr.innerHTML = '<svg>' + t.valueOf().toString() + '</svg>',
            t = nr.firstChild;
          e.firstChild;

        )
          e.removeChild(e.firstChild);
        for (; t.firstChild; ) e.appendChild(t.firstChild);
      }
    });
  function Tn(e, t) {
    if (t) {
      var n = e.firstChild;
      if (n && n === e.lastChild && n.nodeType === 3) {
        n.nodeValue = t;
        return;
      }
    }
    e.textContent = t;
  }
  var yn = {
      animationIterationCount: !0,
      borderImageOutset: !0,
      borderImageSlice: !0,
      borderImageWidth: !0,
      boxFlex: !0,
      boxFlexGroup: !0,
      boxOrdinalGroup: !0,
      columnCount: !0,
      columns: !0,
      flex: !0,
      flexGrow: !0,
      flexPositive: !0,
      flexShrink: !0,
      flexNegative: !0,
      flexOrder: !0,
      gridArea: !0,
      gridRow: !0,
      gridRowEnd: !0,
      gridRowSpan: !0,
      gridRowStart: !0,
      gridColumn: !0,
      gridColumnEnd: !0,
      gridColumnSpan: !0,
      gridColumnStart: !0,
      fontWeight: !0,
      lineClamp: !0,
      lineHeight: !0,
      opacity: !0,
      order: !0,
      orphans: !0,
      tabSize: !0,
      widows: !0,
      zIndex: !0,
      zoom: !0,
      fillOpacity: !0,
      floodOpacity: !0,
      stopOpacity: !0,
      strokeDasharray: !0,
      strokeDashoffset: !0,
      strokeMiterlimit: !0,
      strokeOpacity: !0,
      strokeWidth: !0,
    },
    mf = ['Webkit', 'ms', 'Moz', 'O'];
  Object.keys(yn).forEach(function (e) {
    mf.forEach(function (t) {
      (t = t + e.charAt(0).toUpperCase() + e.substring(1)), (yn[t] = yn[e]);
    });
  });
  function Ss(e, t, n) {
    return t == null || typeof t == 'boolean' || t === ''
      ? ''
      : n || typeof t != 'number' || t === 0 || (yn.hasOwnProperty(e) && yn[e])
      ? ('' + t).trim()
      : t + 'px';
  }
  function ks(e, t) {
    e = e.style;
    for (var n in t)
      if (t.hasOwnProperty(n)) {
        var r = n.indexOf('--') === 0,
          l = Ss(n, t[n], r);
        n === 'float' && (n = 'cssFloat'), r ? e.setProperty(n, l) : (e[n] = l);
      }
  }
  var hf = R(
    { menuitem: !0 },
    {
      area: !0,
      base: !0,
      br: !0,
      col: !0,
      embed: !0,
      hr: !0,
      img: !0,
      input: !0,
      keygen: !0,
      link: !0,
      meta: !0,
      param: !0,
      source: !0,
      track: !0,
      wbr: !0,
    }
  );
  function ti(e, t) {
    if (t) {
      if (hf[e] && (t.children != null || t.dangerouslySetInnerHTML != null))
        throw Error(y(137, e));
      if (t.dangerouslySetInnerHTML != null) {
        if (t.children != null) throw Error(y(60));
        if (
          !(
            typeof t.dangerouslySetInnerHTML == 'object' &&
            '__html' in t.dangerouslySetInnerHTML
          )
        )
          throw Error(y(61));
      }
      if (t.style != null && typeof t.style != 'object') throw Error(y(62));
    }
  }
  function ni(e, t) {
    if (e.indexOf('-') === -1) return typeof t.is == 'string';
    switch (e) {
      case 'annotation-xml':
      case 'color-profile':
      case 'font-face':
      case 'font-face-src':
      case 'font-face-uri':
      case 'font-face-format':
      case 'font-face-name':
      case 'missing-glyph':
        return !1;
      default:
        return !0;
    }
  }
  function Hi(e) {
    return (
      (e = e.target || e.srcElement || window),
      e.correspondingUseElement && (e = e.correspondingUseElement),
      e.nodeType === 3 ? e.parentNode : e
    );
  }
  var ri = null,
    Ot = null,
    Lt = null;
  function su(e) {
    if ((e = $n(e))) {
      if (typeof ri != 'function') throw Error(y(280));
      var t = e.stateNode;
      t && ((t = el(t)), ri(e.stateNode, e.type, t));
    }
  }
  function Es(e) {
    Ot ? (Lt ? Lt.push(e) : (Lt = [e])) : (Ot = e);
  }
  function _s() {
    if (Ot) {
      var e = Ot,
        t = Lt;
      if (((Lt = Ot = null), su(e), t)) for (e = 0; e < t.length; e++) su(t[e]);
    }
  }
  function Wi(e, t) {
    return e(t);
  }
  function Cs(e, t, n, r, l) {
    return e(t, n, r, l);
  }
  function Qi() {}
  var xs = Wi,
    tt = !1,
    Nl = !1;
  function Yi() {
    (Ot !== null || Lt !== null) && (Qi(), _s());
  }
  function vf(e, t, n) {
    if (Nl) return e(t, n);
    Nl = !0;
    try {
      return xs(e, t, n);
    } finally {
      (Nl = !1), Yi();
    }
  }
  function On(e, t) {
    var n = e.stateNode;
    if (n === null) return null;
    var r = el(n);
    if (r === null) return null;
    n = r[t];
    e: switch (t) {
      case 'onClick':
      case 'onClickCapture':
      case 'onDoubleClick':
      case 'onDoubleClickCapture':
      case 'onMouseDown':
      case 'onMouseDownCapture':
      case 'onMouseMove':
      case 'onMouseMoveCapture':
      case 'onMouseUp':
      case 'onMouseUpCapture':
      case 'onMouseEnter':
        (r = !r.disabled) ||
          ((e = e.type),
          (r = !(
            e === 'button' ||
            e === 'input' ||
            e === 'select' ||
            e === 'textarea'
          ))),
          (e = !r);
        break e;
      default:
        e = !1;
    }
    if (e) return null;
    if (n && typeof n != 'function') throw Error(y(231, t, typeof n));
    return n;
  }
  var li = !1;
  if (Te)
    try {
      (yt = {}),
        Object.defineProperty(yt, 'passive', {
          get: function () {
            li = !0;
          },
        }),
        window.addEventListener('test', yt, yt),
        window.removeEventListener('test', yt, yt);
    } catch {
      li = !1;
    }
  var yt;
  function yf(e, t, n, r, l, i, o, u, s) {
    var c = Array.prototype.slice.call(arguments, 3);
    try {
      t.apply(n, c);
    } catch (v) {
      this.onError(v);
    }
  }
  var gn = !1,
    xr = null,
    Pr = !1,
    ii = null,
    gf = {
      onError: function (e) {
        (gn = !0), (xr = e);
      },
    };
  function wf(e, t, n, r, l, i, o, u, s) {
    (gn = !1), (xr = null), yf.apply(gf, arguments);
  }
  function Sf(e, t, n, r, l, i, o, u, s) {
    if ((wf.apply(this, arguments), gn)) {
      if (gn) {
        var c = xr;
        (gn = !1), (xr = null);
      } else throw Error(y(198));
      Pr || ((Pr = !0), (ii = c));
    }
  }
  function ct(e) {
    var t = e,
      n = e;
    if (e.alternate) for (; t.return; ) t = t.return;
    else {
      e = t;
      do (t = e), (t.flags & 1026) !== 0 && (n = t.return), (e = t.return);
      while (e);
    }
    return t.tag === 3 ? n : null;
  }
  function Ps(e) {
    if (e.tag === 13) {
      var t = e.memoizedState;
      if (
        (t === null && ((e = e.alternate), e !== null && (t = e.memoizedState)),
        t !== null)
      )
        return t.dehydrated;
    }
    return null;
  }
  function au(e) {
    if (ct(e) !== e) throw Error(y(188));
  }
  function kf(e) {
    var t = e.alternate;
    if (!t) {
      if (((t = ct(e)), t === null)) throw Error(y(188));
      return t !== e ? null : e;
    }
    for (var n = e, r = t; ; ) {
      var l = n.return;
      if (l === null) break;
      var i = l.alternate;
      if (i === null) {
        if (((r = l.return), r !== null)) {
          n = r;
          continue;
        }
        break;
      }
      if (l.child === i.child) {
        for (i = l.child; i; ) {
          if (i === n) return au(l), e;
          if (i === r) return au(l), t;
          i = i.sibling;
        }
        throw Error(y(188));
      }
      if (n.return !== r.return) (n = l), (r = i);
      else {
        for (var o = !1, u = l.child; u; ) {
          if (u === n) {
            (o = !0), (n = l), (r = i);
            break;
          }
          if (u === r) {
            (o = !0), (r = l), (n = i);
            break;
          }
          u = u.sibling;
        }
        if (!o) {
          for (u = i.child; u; ) {
            if (u === n) {
              (o = !0), (n = i), (r = l);
              break;
            }
            if (u === r) {
              (o = !0), (r = i), (n = l);
              break;
            }
            u = u.sibling;
          }
          if (!o) throw Error(y(189));
        }
      }
      if (n.alternate !== r) throw Error(y(190));
    }
    if (n.tag !== 3) throw Error(y(188));
    return n.stateNode.current === n ? e : t;
  }
  function Ns(e) {
    if (((e = kf(e)), !e)) return null;
    for (var t = e; ; ) {
      if (t.tag === 5 || t.tag === 6) return t;
      if (t.child) (t.child.return = t), (t = t.child);
      else {
        if (t === e) break;
        for (; !t.sibling; ) {
          if (!t.return || t.return === e) return null;
          t = t.return;
        }
        (t.sibling.return = t.return), (t = t.sibling);
      }
    }
    return null;
  }
  function fu(e, t) {
    for (var n = e.alternate; t !== null; ) {
      if (t === e || t === n) return !0;
      t = t.return;
    }
    return !1;
  }
  var Ts,
    Ki,
    Os,
    Ls,
    oi = !1,
    ve = [],
    je = null,
    Ie = null,
    Ue = null,
    Ln = new Map(),
    Mn = new Map(),
    Jt = [],
    cu =
      'mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit'.split(
        ' '
      );
  function ui(e, t, n, r, l) {
    return {
      blockedOn: e,
      domEventName: t,
      eventSystemFlags: n | 16,
      nativeEvent: l,
      targetContainers: [r],
    };
  }
  function du(e, t) {
    switch (e) {
      case 'focusin':
      case 'focusout':
        je = null;
        break;
      case 'dragenter':
      case 'dragleave':
        Ie = null;
        break;
      case 'mouseover':
      case 'mouseout':
        Ue = null;
        break;
      case 'pointerover':
      case 'pointerout':
        Ln.delete(t.pointerId);
        break;
      case 'gotpointercapture':
      case 'lostpointercapture':
        Mn.delete(t.pointerId);
    }
  }
  function bt(e, t, n, r, l, i) {
    return e === null || e.nativeEvent !== i
      ? ((e = ui(t, n, r, l, i)),
        t !== null && ((t = $n(t)), t !== null && Ki(t)),
        e)
      : ((e.eventSystemFlags |= r),
        (t = e.targetContainers),
        l !== null && t.indexOf(l) === -1 && t.push(l),
        e);
  }
  function Ef(e, t, n, r, l) {
    switch (t) {
      case 'focusin':
        return (je = bt(je, e, t, n, r, l)), !0;
      case 'dragenter':
        return (Ie = bt(Ie, e, t, n, r, l)), !0;
      case 'mouseover':
        return (Ue = bt(Ue, e, t, n, r, l)), !0;
      case 'pointerover':
        var i = l.pointerId;
        return Ln.set(i, bt(Ln.get(i) || null, e, t, n, r, l)), !0;
      case 'gotpointercapture':
        return (
          (i = l.pointerId), Mn.set(i, bt(Mn.get(i) || null, e, t, n, r, l)), !0
        );
    }
    return !1;
  }
  function _f(e) {
    var t = nt(e.target);
    if (t !== null) {
      var n = ct(t);
      if (n !== null) {
        if (((t = n.tag), t === 13)) {
          if (((t = Ps(n)), t !== null)) {
            (e.blockedOn = t),
              Ls(e.lanePriority, function () {
                A.unstable_runWithPriority(e.priority, function () {
                  Os(n);
                });
              });
            return;
          }
        } else if (t === 3 && n.stateNode.hydrate) {
          e.blockedOn = n.tag === 3 ? n.stateNode.containerInfo : null;
          return;
        }
      }
    }
    e.blockedOn = null;
  }
  function pr(e) {
    if (e.blockedOn !== null) return !1;
    for (var t = e.targetContainers; 0 < t.length; ) {
      var n = qi(e.domEventName, e.eventSystemFlags, t[0], e.nativeEvent);
      if (n !== null)
        return (t = $n(n)), t !== null && Ki(t), (e.blockedOn = n), !1;
      t.shift();
    }
    return !0;
  }
  function pu(e, t, n) {
    pr(e) && n.delete(t);
  }
  function Cf() {
    for (oi = !1; 0 < ve.length; ) {
      var e = ve[0];
      if (e.blockedOn !== null) {
        (e = $n(e.blockedOn)), e !== null && Ts(e);
        break;
      }
      for (var t = e.targetContainers; 0 < t.length; ) {
        var n = qi(e.domEventName, e.eventSystemFlags, t[0], e.nativeEvent);
        if (n !== null) {
          e.blockedOn = n;
          break;
        }
        t.shift();
      }
      e.blockedOn === null && ve.shift();
    }
    je !== null && pr(je) && (je = null),
      Ie !== null && pr(Ie) && (Ie = null),
      Ue !== null && pr(Ue) && (Ue = null),
      Ln.forEach(pu),
      Mn.forEach(pu);
  }
  function en(e, t) {
    e.blockedOn === t &&
      ((e.blockedOn = null),
      oi ||
        ((oi = !0),
        A.unstable_scheduleCallback(A.unstable_NormalPriority, Cf)));
  }
  function Ms(e) {
    function t(l) {
      return en(l, e);
    }
    if (0 < ve.length) {
      en(ve[0], e);
      for (var n = 1; n < ve.length; n++) {
        var r = ve[n];
        r.blockedOn === e && (r.blockedOn = null);
      }
    }
    for (
      je !== null && en(je, e),
        Ie !== null && en(Ie, e),
        Ue !== null && en(Ue, e),
        Ln.forEach(t),
        Mn.forEach(t),
        n = 0;
      n < Jt.length;
      n++
    )
      (r = Jt[n]), r.blockedOn === e && (r.blockedOn = null);
    for (; 0 < Jt.length && ((n = Jt[0]), n.blockedOn === null); )
      _f(n), n.blockedOn === null && Jt.shift();
  }
  function rr(e, t) {
    var n = {};
    return (
      (n[e.toLowerCase()] = t.toLowerCase()),
      (n['Webkit' + e] = 'webkit' + t),
      (n['Moz' + e] = 'moz' + t),
      n
    );
  }
  var kt = {
      animationend: rr('Animation', 'AnimationEnd'),
      animationiteration: rr('Animation', 'AnimationIteration'),
      animationstart: rr('Animation', 'AnimationStart'),
      transitionend: rr('Transition', 'TransitionEnd'),
    },
    Tl = {},
    zs = {};
  Te &&
    ((zs = document.createElement('div').style),
    'AnimationEvent' in window ||
      (delete kt.animationend.animation,
      delete kt.animationiteration.animation,
      delete kt.animationstart.animation),
    'TransitionEvent' in window || delete kt.transitionend.transition);
  function Gr(e) {
    if (Tl[e]) return Tl[e];
    if (!kt[e]) return e;
    var t = kt[e],
      n;
    for (n in t) if (t.hasOwnProperty(n) && n in zs) return (Tl[e] = t[n]);
    return e;
  }
  var Ds = Gr('animationend'),
    Rs = Gr('animationiteration'),
    Fs = Gr('animationstart'),
    js = Gr('transitionend'),
    Is = new Map(),
    Xi = new Map(),
    xf = [
      'abort',
      'abort',
      Ds,
      'animationEnd',
      Rs,
      'animationIteration',
      Fs,
      'animationStart',
      'canplay',
      'canPlay',
      'canplaythrough',
      'canPlayThrough',
      'durationchange',
      'durationChange',
      'emptied',
      'emptied',
      'encrypted',
      'encrypted',
      'ended',
      'ended',
      'error',
      'error',
      'gotpointercapture',
      'gotPointerCapture',
      'load',
      'load',
      'loadeddata',
      'loadedData',
      'loadedmetadata',
      'loadedMetadata',
      'loadstart',
      'loadStart',
      'lostpointercapture',
      'lostPointerCapture',
      'playing',
      'playing',
      'progress',
      'progress',
      'seeking',
      'seeking',
      'stalled',
      'stalled',
      'suspend',
      'suspend',
      'timeupdate',
      'timeUpdate',
      js,
      'transitionEnd',
      'waiting',
      'waiting',
    ];
  function Gi(e, t) {
    for (var n = 0; n < e.length; n += 2) {
      var r = e[n],
        l = e[n + 1];
      (l = 'on' + (l[0].toUpperCase() + l.slice(1))),
        Xi.set(r, t),
        Is.set(r, l),
        at(l, [r]);
    }
  }
  var Pf = A.unstable_now;
  Pf();
  var M = 8;
  function wt(e) {
    if ((1 & e) !== 0) return (M = 15), 1;
    if ((2 & e) !== 0) return (M = 14), 2;
    if ((4 & e) !== 0) return (M = 13), 4;
    var t = 24 & e;
    return t !== 0
      ? ((M = 12), t)
      : (e & 32) !== 0
      ? ((M = 11), 32)
      : ((t = 192 & e),
        t !== 0
          ? ((M = 10), t)
          : (e & 256) !== 0
          ? ((M = 9), 256)
          : ((t = 3584 & e),
            t !== 0
              ? ((M = 8), t)
              : (e & 4096) !== 0
              ? ((M = 7), 4096)
              : ((t = 4186112 & e),
                t !== 0
                  ? ((M = 6), t)
                  : ((t = 62914560 & e),
                    t !== 0
                      ? ((M = 5), t)
                      : e & 67108864
                      ? ((M = 4), 67108864)
                      : (e & 134217728) !== 0
                      ? ((M = 3), 134217728)
                      : ((t = 805306368 & e),
                        t !== 0
                          ? ((M = 2), t)
                          : (1073741824 & e) !== 0
                          ? ((M = 1), 1073741824)
                          : ((M = 8), e))))));
  }
  function Nf(e) {
    switch (e) {
      case 99:
        return 15;
      case 98:
        return 10;
      case 97:
      case 96:
        return 8;
      case 95:
        return 2;
      default:
        return 0;
    }
  }
  function Tf(e) {
    switch (e) {
      case 15:
      case 14:
        return 99;
      case 13:
      case 12:
      case 11:
      case 10:
        return 98;
      case 9:
      case 8:
      case 7:
      case 6:
      case 4:
      case 5:
        return 97;
      case 3:
      case 2:
      case 1:
        return 95;
      case 0:
        return 90;
      default:
        throw Error(y(358, e));
    }
  }
  function zn(e, t) {
    var n = e.pendingLanes;
    if (n === 0) return (M = 0);
    var r = 0,
      l = 0,
      i = e.expiredLanes,
      o = e.suspendedLanes,
      u = e.pingedLanes;
    if (i !== 0) (r = i), (l = M = 15);
    else if (((i = n & 134217727), i !== 0)) {
      var s = i & ~o;
      s !== 0
        ? ((r = wt(s)), (l = M))
        : ((u &= i), u !== 0 && ((r = wt(u)), (l = M)));
    } else
      (i = n & ~o),
        i !== 0 ? ((r = wt(i)), (l = M)) : u !== 0 && ((r = wt(u)), (l = M));
    if (r === 0) return 0;
    if (
      ((r = 31 - Qe(r)),
      (r = n & (((0 > r ? 0 : 1 << r) << 1) - 1)),
      t !== 0 && t !== r && (t & o) === 0)
    ) {
      if ((wt(t), l <= M)) return t;
      M = l;
    }
    if (((t = e.entangledLanes), t !== 0))
      for (e = e.entanglements, t &= r; 0 < t; )
        (n = 31 - Qe(t)), (l = 1 << n), (r |= e[n]), (t &= ~l);
    return r;
  }
  function Us(e) {
    return (
      (e = e.pendingLanes & -1073741825),
      e !== 0 ? e : e & 1073741824 ? 1073741824 : 0
    );
  }
  function Nr(e, t) {
    switch (e) {
      case 15:
        return 1;
      case 14:
        return 2;
      case 12:
        return (e = St(24 & ~t)), e === 0 ? Nr(10, t) : e;
      case 10:
        return (e = St(192 & ~t)), e === 0 ? Nr(8, t) : e;
      case 8:
        return (
          (e = St(3584 & ~t)),
          e === 0 && ((e = St(4186112 & ~t)), e === 0 && (e = 512)),
          e
        );
      case 2:
        return (t = St(805306368 & ~t)), t === 0 && (t = 268435456), t;
    }
    throw Error(y(358, e));
  }
  function St(e) {
    return e & -e;
  }
  function Ol(e) {
    for (var t = [], n = 0; 31 > n; n++) t.push(e);
    return t;
  }
  function Zr(e, t, n) {
    e.pendingLanes |= t;
    var r = t - 1;
    (e.suspendedLanes &= r),
      (e.pingedLanes &= r),
      (e = e.eventTimes),
      (t = 31 - Qe(t)),
      (e[t] = n);
  }
  var Qe = Math.clz32 ? Math.clz32 : Mf,
    Of = Math.log,
    Lf = Math.LN2;
  function Mf(e) {
    return e === 0 ? 32 : (31 - ((Of(e) / Lf) | 0)) | 0;
  }
  var zf = A.unstable_UserBlockingPriority,
    Df = A.unstable_runWithPriority,
    mr = !0;
  function Rf(e, t, n, r) {
    tt || Qi();
    var l = Zi,
      i = tt;
    tt = !0;
    try {
      Cs(l, e, t, n, r);
    } finally {
      (tt = i) || Yi();
    }
  }
  function Ff(e, t, n, r) {
    Df(zf, Zi.bind(null, e, t, n, r));
  }
  function Zi(e, t, n, r) {
    if (mr) {
      var l;
      if ((l = (t & 4) === 0) && 0 < ve.length && -1 < cu.indexOf(e))
        (e = ui(null, e, t, n, r)), ve.push(e);
      else {
        var i = qi(e, t, n, r);
        if (i === null) l && du(e, r);
        else {
          if (l) {
            if (-1 < cu.indexOf(e)) {
              (e = ui(i, e, t, n, r)), ve.push(e);
              return;
            }
            if (Ef(i, e, t, n, r)) return;
            du(e, r);
          }
          qs(e, t, r, null, n);
        }
      }
    }
  }
  function qi(e, t, n, r) {
    var l = Hi(r);
    if (((l = nt(l)), l !== null)) {
      var i = ct(l);
      if (i === null) l = null;
      else {
        var o = i.tag;
        if (o === 13) {
          if (((l = Ps(i)), l !== null)) return l;
          l = null;
        } else if (o === 3) {
          if (i.stateNode.hydrate)
            return i.tag === 3 ? i.stateNode.containerInfo : null;
          l = null;
        } else i !== l && (l = null);
      }
    }
    return qs(e, t, r, l, n), null;
  }
  var De = null,
    Ji = null,
    hr = null;
  function Vs() {
    if (hr) return hr;
    var e,
      t = Ji,
      n = t.length,
      r,
      l = 'value' in De ? De.value : De.textContent,
      i = l.length;
    for (e = 0; e < n && t[e] === l[e]; e++);
    var o = n - e;
    for (r = 1; r <= o && t[n - r] === l[i - r]; r++);
    return (hr = l.slice(e, 1 < r ? 1 - r : void 0));
  }
  function vr(e) {
    var t = e.keyCode;
    return (
      'charCode' in e
        ? ((e = e.charCode), e === 0 && t === 13 && (e = 13))
        : (e = t),
      e === 10 && (e = 13),
      32 <= e || e === 13 ? e : 0
    );
  }
  function lr() {
    return !0;
  }
  function mu() {
    return !1;
  }
  function re(e) {
    function t(n, r, l, i, o) {
      (this._reactName = n),
        (this._targetInst = l),
        (this.type = r),
        (this.nativeEvent = i),
        (this.target = o),
        (this.currentTarget = null);
      for (var u in e)
        e.hasOwnProperty(u) && ((n = e[u]), (this[u] = n ? n(i) : i[u]));
      return (
        (this.isDefaultPrevented = (
          i.defaultPrevented != null ? i.defaultPrevented : i.returnValue === !1
        )
          ? lr
          : mu),
        (this.isPropagationStopped = mu),
        this
      );
    }
    return (
      R(t.prototype, {
        preventDefault: function () {
          this.defaultPrevented = !0;
          var n = this.nativeEvent;
          n &&
            (n.preventDefault
              ? n.preventDefault()
              : typeof n.returnValue != 'unknown' && (n.returnValue = !1),
            (this.isDefaultPrevented = lr));
        },
        stopPropagation: function () {
          var n = this.nativeEvent;
          n &&
            (n.stopPropagation
              ? n.stopPropagation()
              : typeof n.cancelBubble != 'unknown' && (n.cancelBubble = !0),
            (this.isPropagationStopped = lr));
        },
        persist: function () {},
        isPersistent: lr,
      }),
      t
    );
  }
  var At = {
      eventPhase: 0,
      bubbles: 0,
      cancelable: 0,
      timeStamp: function (e) {
        return e.timeStamp || Date.now();
      },
      defaultPrevented: 0,
      isTrusted: 0,
    },
    bi = re(At),
    An = R({}, At, { view: 0, detail: 0 }),
    jf = re(An),
    Ll,
    Ml,
    tn,
    qr = R({}, An, {
      screenX: 0,
      screenY: 0,
      clientX: 0,
      clientY: 0,
      pageX: 0,
      pageY: 0,
      ctrlKey: 0,
      shiftKey: 0,
      altKey: 0,
      metaKey: 0,
      getModifierState: eo,
      button: 0,
      buttons: 0,
      relatedTarget: function (e) {
        return e.relatedTarget === void 0
          ? e.fromElement === e.srcElement
            ? e.toElement
            : e.fromElement
          : e.relatedTarget;
      },
      movementX: function (e) {
        return 'movementX' in e
          ? e.movementX
          : (e !== tn &&
              (tn && e.type === 'mousemove'
                ? ((Ll = e.screenX - tn.screenX), (Ml = e.screenY - tn.screenY))
                : (Ml = Ll = 0),
              (tn = e)),
            Ll);
      },
      movementY: function (e) {
        return 'movementY' in e ? e.movementY : Ml;
      },
    }),
    hu = re(qr),
    If = R({}, qr, { dataTransfer: 0 }),
    Uf = re(If),
    Vf = R({}, An, { relatedTarget: 0 }),
    zl = re(Vf),
    Bf = R({}, At, { animationName: 0, elapsedTime: 0, pseudoElement: 0 }),
    Af = re(Bf),
    $f = R({}, At, {
      clipboardData: function (e) {
        return 'clipboardData' in e ? e.clipboardData : window.clipboardData;
      },
    }),
    Hf = re($f),
    Wf = R({}, At, { data: 0 }),
    vu = re(Wf),
    Qf = {
      Esc: 'Escape',
      Spacebar: ' ',
      Left: 'ArrowLeft',
      Up: 'ArrowUp',
      Right: 'ArrowRight',
      Down: 'ArrowDown',
      Del: 'Delete',
      Win: 'OS',
      Menu: 'ContextMenu',
      Apps: 'ContextMenu',
      Scroll: 'ScrollLock',
      MozPrintableKey: 'Unidentified',
    },
    Yf = {
      8: 'Backspace',
      9: 'Tab',
      12: 'Clear',
      13: 'Enter',
      16: 'Shift',
      17: 'Control',
      18: 'Alt',
      19: 'Pause',
      20: 'CapsLock',
      27: 'Escape',
      32: ' ',
      33: 'PageUp',
      34: 'PageDown',
      35: 'End',
      36: 'Home',
      37: 'ArrowLeft',
      38: 'ArrowUp',
      39: 'ArrowRight',
      40: 'ArrowDown',
      45: 'Insert',
      46: 'Delete',
      112: 'F1',
      113: 'F2',
      114: 'F3',
      115: 'F4',
      116: 'F5',
      117: 'F6',
      118: 'F7',
      119: 'F8',
      120: 'F9',
      121: 'F10',
      122: 'F11',
      123: 'F12',
      144: 'NumLock',
      145: 'ScrollLock',
      224: 'Meta',
    },
    Kf = {
      Alt: 'altKey',
      Control: 'ctrlKey',
      Meta: 'metaKey',
      Shift: 'shiftKey',
    };
  function Xf(e) {
    var t = this.nativeEvent;
    return t.getModifierState
      ? t.getModifierState(e)
      : (e = Kf[e])
      ? !!t[e]
      : !1;
  }
  function eo() {
    return Xf;
  }
  var Gf = R({}, An, {
      key: function (e) {
        if (e.key) {
          var t = Qf[e.key] || e.key;
          if (t !== 'Unidentified') return t;
        }
        return e.type === 'keypress'
          ? ((e = vr(e)), e === 13 ? 'Enter' : String.fromCharCode(e))
          : e.type === 'keydown' || e.type === 'keyup'
          ? Yf[e.keyCode] || 'Unidentified'
          : '';
      },
      code: 0,
      location: 0,
      ctrlKey: 0,
      shiftKey: 0,
      altKey: 0,
      metaKey: 0,
      repeat: 0,
      locale: 0,
      getModifierState: eo,
      charCode: function (e) {
        return e.type === 'keypress' ? vr(e) : 0;
      },
      keyCode: function (e) {
        return e.type === 'keydown' || e.type === 'keyup' ? e.keyCode : 0;
      },
      which: function (e) {
        return e.type === 'keypress'
          ? vr(e)
          : e.type === 'keydown' || e.type === 'keyup'
          ? e.keyCode
          : 0;
      },
    }),
    Zf = re(Gf),
    qf = R({}, qr, {
      pointerId: 0,
      width: 0,
      height: 0,
      pressure: 0,
      tangentialPressure: 0,
      tiltX: 0,
      tiltY: 0,
      twist: 0,
      pointerType: 0,
      isPrimary: 0,
    }),
    yu = re(qf),
    Jf = R({}, An, {
      touches: 0,
      targetTouches: 0,
      changedTouches: 0,
      altKey: 0,
      metaKey: 0,
      ctrlKey: 0,
      shiftKey: 0,
      getModifierState: eo,
    }),
    bf = re(Jf),
    ec = R({}, At, { propertyName: 0, elapsedTime: 0, pseudoElement: 0 }),
    tc = re(ec),
    nc = R({}, qr, {
      deltaX: function (e) {
        return 'deltaX' in e
          ? e.deltaX
          : 'wheelDeltaX' in e
          ? -e.wheelDeltaX
          : 0;
      },
      deltaY: function (e) {
        return 'deltaY' in e
          ? e.deltaY
          : 'wheelDeltaY' in e
          ? -e.wheelDeltaY
          : 'wheelDelta' in e
          ? -e.wheelDelta
          : 0;
      },
      deltaZ: 0,
      deltaMode: 0,
    }),
    rc = re(nc),
    lc = [9, 13, 27, 32],
    to = Te && 'CompositionEvent' in window,
    wn = null;
  Te && 'documentMode' in document && (wn = document.documentMode);
  var ic = Te && 'TextEvent' in window && !wn,
    Bs = Te && (!to || (wn && 8 < wn && 11 >= wn)),
    gu = String.fromCharCode(32),
    wu = !1;
  function As(e, t) {
    switch (e) {
      case 'keyup':
        return lc.indexOf(t.keyCode) !== -1;
      case 'keydown':
        return t.keyCode !== 229;
      case 'keypress':
      case 'mousedown':
      case 'focusout':
        return !0;
      default:
        return !1;
    }
  }
  function $s(e) {
    return (e = e.detail), typeof e == 'object' && 'data' in e ? e.data : null;
  }
  var Et = !1;
  function oc(e, t) {
    switch (e) {
      case 'compositionend':
        return $s(t);
      case 'keypress':
        return t.which !== 32 ? null : ((wu = !0), gu);
      case 'textInput':
        return (e = t.data), e === gu && wu ? null : e;
      default:
        return null;
    }
  }
  function uc(e, t) {
    if (Et)
      return e === 'compositionend' || (!to && As(e, t))
        ? ((e = Vs()), (hr = Ji = De = null), (Et = !1), e)
        : null;
    switch (e) {
      case 'paste':
        return null;
      case 'keypress':
        if (!(t.ctrlKey || t.altKey || t.metaKey) || (t.ctrlKey && t.altKey)) {
          if (t.char && 1 < t.char.length) return t.char;
          if (t.which) return String.fromCharCode(t.which);
        }
        return null;
      case 'compositionend':
        return Bs && t.locale !== 'ko' ? null : t.data;
      default:
        return null;
    }
  }
  var sc = {
    color: !0,
    date: !0,
    datetime: !0,
    'datetime-local': !0,
    email: !0,
    month: !0,
    number: !0,
    password: !0,
    range: !0,
    search: !0,
    tel: !0,
    text: !0,
    time: !0,
    url: !0,
    week: !0,
  };
  function Su(e) {
    var t = e && e.nodeName && e.nodeName.toLowerCase();
    return t === 'input' ? !!sc[e.type] : t === 'textarea';
  }
  function Hs(e, t, n, r) {
    Es(r),
      (t = Tr(t, 'onChange')),
      0 < t.length &&
        ((n = new bi('onChange', 'change', null, n, r)),
        e.push({ event: n, listeners: t }));
  }
  var Sn = null,
    Dn = null;
  function ac(e) {
    Xs(e, 0);
  }
  function Jr(e) {
    var t = Ct(e);
    if (hs(t)) return e;
  }
  function fc(e, t) {
    if (e === 'change') return t;
  }
  var Ws = !1;
  Te &&
    (Te
      ? ((or = 'oninput' in document),
        or ||
          ((Dl = document.createElement('div')),
          Dl.setAttribute('oninput', 'return;'),
          (or = typeof Dl.oninput == 'function')),
        (ir = or))
      : (ir = !1),
    (Ws = ir && (!document.documentMode || 9 < document.documentMode)));
  var ir, or, Dl;
  function ku() {
    Sn && (Sn.detachEvent('onpropertychange', Qs), (Dn = Sn = null));
  }
  function Qs(e) {
    if (e.propertyName === 'value' && Jr(Dn)) {
      var t = [];
      if ((Hs(t, Dn, e, Hi(e)), (e = ac), tt)) e(t);
      else {
        tt = !0;
        try {
          Wi(e, t);
        } finally {
          (tt = !1), Yi();
        }
      }
    }
  }
  function cc(e, t, n) {
    e === 'focusin'
      ? (ku(), (Sn = t), (Dn = n), Sn.attachEvent('onpropertychange', Qs))
      : e === 'focusout' && ku();
  }
  function dc(e) {
    if (e === 'selectionchange' || e === 'keyup' || e === 'keydown')
      return Jr(Dn);
  }
  function pc(e, t) {
    if (e === 'click') return Jr(t);
  }
  function mc(e, t) {
    if (e === 'input' || e === 'change') return Jr(t);
  }
  function hc(e, t) {
    return (e === t && (e !== 0 || 1 / e === 1 / t)) || (e !== e && t !== t);
  }
  var oe = typeof Object.is == 'function' ? Object.is : hc,
    vc = Object.prototype.hasOwnProperty;
  function Rn(e, t) {
    if (oe(e, t)) return !0;
    if (
      typeof e != 'object' ||
      e === null ||
      typeof t != 'object' ||
      t === null
    )
      return !1;
    var n = Object.keys(e),
      r = Object.keys(t);
    if (n.length !== r.length) return !1;
    for (r = 0; r < n.length; r++)
      if (!vc.call(t, n[r]) || !oe(e[n[r]], t[n[r]])) return !1;
    return !0;
  }
  function Eu(e) {
    for (; e && e.firstChild; ) e = e.firstChild;
    return e;
  }
  function _u(e, t) {
    var n = Eu(e);
    e = 0;
    for (var r; n; ) {
      if (n.nodeType === 3) {
        if (((r = e + n.textContent.length), e <= t && r >= t))
          return { node: n, offset: t - e };
        e = r;
      }
      e: {
        for (; n; ) {
          if (n.nextSibling) {
            n = n.nextSibling;
            break e;
          }
          n = n.parentNode;
        }
        n = void 0;
      }
      n = Eu(n);
    }
  }
  function Ys(e, t) {
    return e && t
      ? e === t
        ? !0
        : e && e.nodeType === 3
        ? !1
        : t && t.nodeType === 3
        ? Ys(e, t.parentNode)
        : 'contains' in e
        ? e.contains(t)
        : e.compareDocumentPosition
        ? !!(e.compareDocumentPosition(t) & 16)
        : !1
      : !1;
  }
  function Cu() {
    for (var e = window, t = Cr(); t instanceof e.HTMLIFrameElement; ) {
      try {
        var n = typeof t.contentWindow.location.href == 'string';
      } catch {
        n = !1;
      }
      if (n) e = t.contentWindow;
      else break;
      t = Cr(e.document);
    }
    return t;
  }
  function si(e) {
    var t = e && e.nodeName && e.nodeName.toLowerCase();
    return (
      t &&
      ((t === 'input' &&
        (e.type === 'text' ||
          e.type === 'search' ||
          e.type === 'tel' ||
          e.type === 'url' ||
          e.type === 'password')) ||
        t === 'textarea' ||
        e.contentEditable === 'true')
    );
  }
  var yc = Te && 'documentMode' in document && 11 >= document.documentMode,
    _t = null,
    ai = null,
    kn = null,
    fi = !1;
  function xu(e, t, n) {
    var r =
      n.window === n ? n.document : n.nodeType === 9 ? n : n.ownerDocument;
    fi ||
      _t == null ||
      _t !== Cr(r) ||
      ((r = _t),
      'selectionStart' in r && si(r)
        ? (r = { start: r.selectionStart, end: r.selectionEnd })
        : ((r = (
            (r.ownerDocument && r.ownerDocument.defaultView) ||
            window
          ).getSelection()),
          (r = {
            anchorNode: r.anchorNode,
            anchorOffset: r.anchorOffset,
            focusNode: r.focusNode,
            focusOffset: r.focusOffset,
          })),
      (kn && Rn(kn, r)) ||
        ((kn = r),
        (r = Tr(ai, 'onSelect')),
        0 < r.length &&
          ((t = new bi('onSelect', 'select', null, t, n)),
          e.push({ event: t, listeners: r }),
          (t.target = _t))));
  }
  Gi(
    'cancel cancel click click close close contextmenu contextMenu copy copy cut cut auxclick auxClick dblclick doubleClick dragend dragEnd dragstart dragStart drop drop focusin focus focusout blur input input invalid invalid keydown keyDown keypress keyPress keyup keyUp mousedown mouseDown mouseup mouseUp paste paste pause pause play play pointercancel pointerCancel pointerdown pointerDown pointerup pointerUp ratechange rateChange reset reset seeked seeked submit submit touchcancel touchCancel touchend touchEnd touchstart touchStart volumechange volumeChange'.split(
      ' '
    ),
    0
  );
  Gi(
    'drag drag dragenter dragEnter dragexit dragExit dragleave dragLeave dragover dragOver mousemove mouseMove mouseout mouseOut mouseover mouseOver pointermove pointerMove pointerout pointerOut pointerover pointerOver scroll scroll toggle toggle touchmove touchMove wheel wheel'.split(
      ' '
    ),
    1
  );
  Gi(xf, 2);
  for (
    Rl =
      'change selectionchange textInput compositionstart compositionend compositionupdate'.split(
        ' '
      ),
      ur = 0;
    ur < Rl.length;
    ur++
  )
    Xi.set(Rl[ur], 0);
  var Rl, ur;
  It('onMouseEnter', ['mouseout', 'mouseover']);
  It('onMouseLeave', ['mouseout', 'mouseover']);
  It('onPointerEnter', ['pointerout', 'pointerover']);
  It('onPointerLeave', ['pointerout', 'pointerover']);
  at(
    'onChange',
    'change click focusin focusout input keydown keyup selectionchange'.split(
      ' '
    )
  );
  at(
    'onSelect',
    'focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange'.split(
      ' '
    )
  );
  at('onBeforeInput', ['compositionend', 'keypress', 'textInput', 'paste']);
  at(
    'onCompositionEnd',
    'compositionend focusout keydown keypress keyup mousedown'.split(' ')
  );
  at(
    'onCompositionStart',
    'compositionstart focusout keydown keypress keyup mousedown'.split(' ')
  );
  at(
    'onCompositionUpdate',
    'compositionupdate focusout keydown keypress keyup mousedown'.split(' ')
  );
  var dn =
      'abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange seeked seeking stalled suspend timeupdate volumechange waiting'.split(
        ' '
      ),
    Ks = new Set(
      'cancel close invalid load scroll toggle'.split(' ').concat(dn)
    );
  function Pu(e, t, n) {
    var r = e.type || 'unknown-event';
    (e.currentTarget = n), Sf(r, t, void 0, e), (e.currentTarget = null);
  }
  function Xs(e, t) {
    t = (t & 4) !== 0;
    for (var n = 0; n < e.length; n++) {
      var r = e[n],
        l = r.event;
      r = r.listeners;
      e: {
        var i = void 0;
        if (t)
          for (var o = r.length - 1; 0 <= o; o--) {
            var u = r[o],
              s = u.instance,
              c = u.currentTarget;
            if (((u = u.listener), s !== i && l.isPropagationStopped()))
              break e;
            Pu(l, u, c), (i = s);
          }
        else
          for (o = 0; o < r.length; o++) {
            if (
              ((u = r[o]),
              (s = u.instance),
              (c = u.currentTarget),
              (u = u.listener),
              s !== i && l.isPropagationStopped())
            )
              break e;
            Pu(l, u, c), (i = s);
          }
      }
    }
    if (Pr) throw ((e = ii), (Pr = !1), (ii = null), e);
  }
  function z(e, t) {
    var n = bs(t),
      r = e + '__bubble';
    n.has(r) || (Zs(t, e, 2, !1), n.add(r));
  }
  var Nu = '_reactListening' + Math.random().toString(36).slice(2);
  function Gs(e) {
    e[Nu] ||
      ((e[Nu] = !0),
      ds.forEach(function (t) {
        Ks.has(t) || Tu(t, !1, e, null), Tu(t, !0, e, null);
      }));
  }
  function Tu(e, t, n, r) {
    var l = 4 < arguments.length && arguments[4] !== void 0 ? arguments[4] : 0,
      i = n;
    if (
      (e === 'selectionchange' && n.nodeType !== 9 && (i = n.ownerDocument),
      r !== null && !t && Ks.has(e))
    ) {
      if (e !== 'scroll') return;
      (l |= 2), (i = r);
    }
    var o = bs(i),
      u = e + '__' + (t ? 'capture' : 'bubble');
    o.has(u) || (t && (l |= 4), Zs(i, e, l, t), o.add(u));
  }
  function Zs(e, t, n, r) {
    var l = Xi.get(t);
    switch (l === void 0 ? 2 : l) {
      case 0:
        l = Rf;
        break;
      case 1:
        l = Ff;
        break;
      default:
        l = Zi;
    }
    (n = l.bind(null, t, n, e)),
      (l = void 0),
      !li ||
        (t !== 'touchstart' && t !== 'touchmove' && t !== 'wheel') ||
        (l = !0),
      r
        ? l !== void 0
          ? e.addEventListener(t, n, { capture: !0, passive: l })
          : e.addEventListener(t, n, !0)
        : l !== void 0
        ? e.addEventListener(t, n, { passive: l })
        : e.addEventListener(t, n, !1);
  }
  function qs(e, t, n, r, l) {
    var i = r;
    if ((t & 1) === 0 && (t & 2) === 0 && r !== null)
      e: for (;;) {
        if (r === null) return;
        var o = r.tag;
        if (o === 3 || o === 4) {
          var u = r.stateNode.containerInfo;
          if (u === l || (u.nodeType === 8 && u.parentNode === l)) break;
          if (o === 4)
            for (o = r.return; o !== null; ) {
              var s = o.tag;
              if (
                (s === 3 || s === 4) &&
                ((s = o.stateNode.containerInfo),
                s === l || (s.nodeType === 8 && s.parentNode === l))
              )
                return;
              o = o.return;
            }
          for (; u !== null; ) {
            if (((o = nt(u)), o === null)) return;
            if (((s = o.tag), s === 5 || s === 6)) {
              r = i = o;
              continue e;
            }
            u = u.parentNode;
          }
        }
        r = r.return;
      }
    vf(function () {
      var c = i,
        v = Hi(n),
        k = [];
      e: {
        var p = Is.get(e);
        if (p !== void 0) {
          var g = bi,
            _ = e;
          switch (e) {
            case 'keypress':
              if (vr(n) === 0) break e;
            case 'keydown':
            case 'keyup':
              g = Zf;
              break;
            case 'focusin':
              (_ = 'focus'), (g = zl);
              break;
            case 'focusout':
              (_ = 'blur'), (g = zl);
              break;
            case 'beforeblur':
            case 'afterblur':
              g = zl;
              break;
            case 'click':
              if (n.button === 2) break e;
            case 'auxclick':
            case 'dblclick':
            case 'mousedown':
            case 'mousemove':
            case 'mouseup':
            case 'mouseout':
            case 'mouseover':
            case 'contextmenu':
              g = hu;
              break;
            case 'drag':
            case 'dragend':
            case 'dragenter':
            case 'dragexit':
            case 'dragleave':
            case 'dragover':
            case 'dragstart':
            case 'drop':
              g = Uf;
              break;
            case 'touchcancel':
            case 'touchend':
            case 'touchmove':
            case 'touchstart':
              g = bf;
              break;
            case Ds:
            case Rs:
            case Fs:
              g = Af;
              break;
            case js:
              g = tc;
              break;
            case 'scroll':
              g = jf;
              break;
            case 'wheel':
              g = rc;
              break;
            case 'copy':
            case 'cut':
            case 'paste':
              g = Hf;
              break;
            case 'gotpointercapture':
            case 'lostpointercapture':
            case 'pointercancel':
            case 'pointerdown':
            case 'pointermove':
            case 'pointerout':
            case 'pointerover':
            case 'pointerup':
              g = yu;
          }
          var E = (t & 4) !== 0,
            d = !E && e === 'scroll',
            a = E ? (p !== null ? p + 'Capture' : null) : p;
          E = [];
          for (var f = c, m; f !== null; ) {
            m = f;
            var h = m.stateNode;
            if (
              (m.tag === 5 &&
                h !== null &&
                ((m = h),
                a !== null &&
                  ((h = On(f, a)), h != null && E.push(Fn(f, h, m)))),
              d)
            )
              break;
            f = f.return;
          }
          0 < E.length &&
            ((p = new g(p, _, null, n, v)), k.push({ event: p, listeners: E }));
        }
      }
      if ((t & 7) === 0) {
        e: {
          if (
            ((p = e === 'mouseover' || e === 'pointerover'),
            (g = e === 'mouseout' || e === 'pointerout'),
            p &&
              (t & 16) === 0 &&
              (_ = n.relatedTarget || n.fromElement) &&
              (nt(_) || _[$t]))
          )
            break e;
          if (
            (g || p) &&
            ((p =
              v.window === v
                ? v
                : (p = v.ownerDocument)
                ? p.defaultView || p.parentWindow
                : window),
            g
              ? ((_ = n.relatedTarget || n.toElement),
                (g = c),
                (_ = _ ? nt(_) : null),
                _ !== null &&
                  ((d = ct(_)), _ !== d || (_.tag !== 5 && _.tag !== 6)) &&
                  (_ = null))
              : ((g = null), (_ = c)),
            g !== _)
          ) {
            if (
              ((E = hu),
              (h = 'onMouseLeave'),
              (a = 'onMouseEnter'),
              (f = 'mouse'),
              (e === 'pointerout' || e === 'pointerover') &&
                ((E = yu),
                (h = 'onPointerLeave'),
                (a = 'onPointerEnter'),
                (f = 'pointer')),
              (d = g == null ? p : Ct(g)),
              (m = _ == null ? p : Ct(_)),
              (p = new E(h, f + 'leave', g, n, v)),
              (p.target = d),
              (p.relatedTarget = m),
              (h = null),
              nt(v) === c &&
                ((E = new E(a, f + 'enter', _, n, v)),
                (E.target = m),
                (E.relatedTarget = d),
                (h = E)),
              (d = h),
              g && _)
            )
              t: {
                for (E = g, a = _, f = 0, m = E; m; m = gt(m)) f++;
                for (m = 0, h = a; h; h = gt(h)) m++;
                for (; 0 < f - m; ) (E = gt(E)), f--;
                for (; 0 < m - f; ) (a = gt(a)), m--;
                for (; f--; ) {
                  if (E === a || (a !== null && E === a.alternate)) break t;
                  (E = gt(E)), (a = gt(a));
                }
                E = null;
              }
            else E = null;
            g !== null && Ou(k, p, g, E, !1),
              _ !== null && d !== null && Ou(k, d, _, E, !0);
          }
        }
        e: {
          if (
            ((p = c ? Ct(c) : window),
            (g = p.nodeName && p.nodeName.toLowerCase()),
            g === 'select' || (g === 'input' && p.type === 'file'))
          )
            var x = fc;
          else if (Su(p))
            if (Ws) x = mc;
            else {
              x = dc;
              var S = cc;
            }
          else
            (g = p.nodeName) &&
              g.toLowerCase() === 'input' &&
              (p.type === 'checkbox' || p.type === 'radio') &&
              (x = pc);
          if (x && (x = x(e, c))) {
            Hs(k, x, n, v);
            break e;
          }
          S && S(e, p, c),
            e === 'focusout' &&
              (S = p._wrapperState) &&
              S.controlled &&
              p.type === 'number' &&
              Zl(p, 'number', p.value);
        }
        switch (((S = c ? Ct(c) : window), e)) {
          case 'focusin':
            (Su(S) || S.contentEditable === 'true') &&
              ((_t = S), (ai = c), (kn = null));
            break;
          case 'focusout':
            kn = ai = _t = null;
            break;
          case 'mousedown':
            fi = !0;
            break;
          case 'contextmenu':
          case 'mouseup':
          case 'dragend':
            (fi = !1), xu(k, n, v);
            break;
          case 'selectionchange':
            if (yc) break;
          case 'keydown':
          case 'keyup':
            xu(k, n, v);
        }
        var P;
        if (to)
          e: {
            switch (e) {
              case 'compositionstart':
                var T = 'onCompositionStart';
                break e;
              case 'compositionend':
                T = 'onCompositionEnd';
                break e;
              case 'compositionupdate':
                T = 'onCompositionUpdate';
                break e;
            }
            T = void 0;
          }
        else
          Et
            ? As(e, n) && (T = 'onCompositionEnd')
            : e === 'keydown' &&
              n.keyCode === 229 &&
              (T = 'onCompositionStart');
        T &&
          (Bs &&
            n.locale !== 'ko' &&
            (Et || T !== 'onCompositionStart'
              ? T === 'onCompositionEnd' && Et && (P = Vs())
              : ((De = v),
                (Ji = 'value' in De ? De.value : De.textContent),
                (Et = !0))),
          (S = Tr(c, T)),
          0 < S.length &&
            ((T = new vu(T, e, null, n, v)),
            k.push({ event: T, listeners: S }),
            P ? (T.data = P) : ((P = $s(n)), P !== null && (T.data = P)))),
          (P = ic ? oc(e, n) : uc(e, n)) &&
            ((c = Tr(c, 'onBeforeInput')),
            0 < c.length &&
              ((v = new vu('onBeforeInput', 'beforeinput', null, n, v)),
              k.push({ event: v, listeners: c }),
              (v.data = P)));
      }
      Xs(k, t);
    });
  }
  function Fn(e, t, n) {
    return { instance: e, listener: t, currentTarget: n };
  }
  function Tr(e, t) {
    for (var n = t + 'Capture', r = []; e !== null; ) {
      var l = e,
        i = l.stateNode;
      l.tag === 5 &&
        i !== null &&
        ((l = i),
        (i = On(e, n)),
        i != null && r.unshift(Fn(e, i, l)),
        (i = On(e, t)),
        i != null && r.push(Fn(e, i, l))),
        (e = e.return);
    }
    return r;
  }
  function gt(e) {
    if (e === null) return null;
    do e = e.return;
    while (e && e.tag !== 5);
    return e || null;
  }
  function Ou(e, t, n, r, l) {
    for (var i = t._reactName, o = []; n !== null && n !== r; ) {
      var u = n,
        s = u.alternate,
        c = u.stateNode;
      if (s !== null && s === r) break;
      u.tag === 5 &&
        c !== null &&
        ((u = c),
        l
          ? ((s = On(n, i)), s != null && o.unshift(Fn(n, s, u)))
          : l || ((s = On(n, i)), s != null && o.push(Fn(n, s, u)))),
        (n = n.return);
    }
    o.length !== 0 && e.push({ event: t, listeners: o });
  }
  function Or() {}
  var Fl = null,
    jl = null;
  function Js(e, t) {
    switch (e) {
      case 'button':
      case 'input':
      case 'select':
      case 'textarea':
        return !!t.autoFocus;
    }
    return !1;
  }
  function ci(e, t) {
    return (
      e === 'textarea' ||
      e === 'option' ||
      e === 'noscript' ||
      typeof t.children == 'string' ||
      typeof t.children == 'number' ||
      (typeof t.dangerouslySetInnerHTML == 'object' &&
        t.dangerouslySetInnerHTML !== null &&
        t.dangerouslySetInnerHTML.__html != null)
    );
  }
  var Lu = typeof setTimeout == 'function' ? setTimeout : void 0,
    gc = typeof clearTimeout == 'function' ? clearTimeout : void 0;
  function no(e) {
    e.nodeType === 1
      ? (e.textContent = '')
      : e.nodeType === 9 && ((e = e.body), e != null && (e.textContent = ''));
  }
  function Mt(e) {
    for (; e != null; e = e.nextSibling) {
      var t = e.nodeType;
      if (t === 1 || t === 3) break;
    }
    return e;
  }
  function Mu(e) {
    e = e.previousSibling;
    for (var t = 0; e; ) {
      if (e.nodeType === 8) {
        var n = e.data;
        if (n === '$' || n === '$!' || n === '$?') {
          if (t === 0) return e;
          t--;
        } else n === '/$' && t++;
      }
      e = e.previousSibling;
    }
    return null;
  }
  var Il = 0;
  function wc(e) {
    return { $$typeof: Ai, toString: e, valueOf: e };
  }
  var br = Math.random().toString(36).slice(2),
    Re = '__reactFiber$' + br,
    Lr = '__reactProps$' + br,
    $t = '__reactContainer$' + br,
    zu = '__reactEvents$' + br;
  function nt(e) {
    var t = e[Re];
    if (t) return t;
    for (var n = e.parentNode; n; ) {
      if ((t = n[$t] || n[Re])) {
        if (
          ((n = t.alternate),
          t.child !== null || (n !== null && n.child !== null))
        )
          for (e = Mu(e); e !== null; ) {
            if ((n = e[Re])) return n;
            e = Mu(e);
          }
        return t;
      }
      (e = n), (n = e.parentNode);
    }
    return null;
  }
  function $n(e) {
    return (
      (e = e[Re] || e[$t]),
      !e || (e.tag !== 5 && e.tag !== 6 && e.tag !== 13 && e.tag !== 3)
        ? null
        : e
    );
  }
  function Ct(e) {
    if (e.tag === 5 || e.tag === 6) return e.stateNode;
    throw Error(y(33));
  }
  function el(e) {
    return e[Lr] || null;
  }
  function bs(e) {
    var t = e[zu];
    return t === void 0 && (t = e[zu] = new Set()), t;
  }
  var di = [],
    xt = -1;
  function Ge(e) {
    return { current: e };
  }
  function D(e) {
    0 > xt || ((e.current = di[xt]), (di[xt] = null), xt--);
  }
  function I(e, t) {
    xt++, (di[xt] = e.current), (e.current = t);
  }
  var Ye = {},
    G = Ge(Ye),
    ee = Ge(!1),
    ot = Ye;
  function Ut(e, t) {
    var n = e.type.contextTypes;
    if (!n) return Ye;
    var r = e.stateNode;
    if (r && r.__reactInternalMemoizedUnmaskedChildContext === t)
      return r.__reactInternalMemoizedMaskedChildContext;
    var l = {},
      i;
    for (i in n) l[i] = t[i];
    return (
      r &&
        ((e = e.stateNode),
        (e.__reactInternalMemoizedUnmaskedChildContext = t),
        (e.__reactInternalMemoizedMaskedChildContext = l)),
      l
    );
  }
  function te(e) {
    return (e = e.childContextTypes), e != null;
  }
  function Mr() {
    D(ee), D(G);
  }
  function Du(e, t, n) {
    if (G.current !== Ye) throw Error(y(168));
    I(G, t), I(ee, n);
  }
  function ea(e, t, n) {
    var r = e.stateNode;
    if (((e = t.childContextTypes), typeof r.getChildContext != 'function'))
      return n;
    r = r.getChildContext();
    for (var l in r) if (!(l in e)) throw Error(y(108, Nt(t) || 'Unknown', l));
    return R({}, n, r);
  }
  function yr(e) {
    return (
      (e =
        ((e = e.stateNode) && e.__reactInternalMemoizedMergedChildContext) ||
        Ye),
      (ot = G.current),
      I(G, e),
      I(ee, ee.current),
      !0
    );
  }
  function Ru(e, t, n) {
    var r = e.stateNode;
    if (!r) throw Error(y(169));
    n
      ? ((e = ea(e, t, ot)),
        (r.__reactInternalMemoizedMergedChildContext = e),
        D(ee),
        D(G),
        I(G, e))
      : D(ee),
      I(ee, n);
  }
  var ro = null,
    it = null,
    Sc = A.unstable_runWithPriority,
    lo = A.unstable_scheduleCallback,
    pi = A.unstable_cancelCallback,
    kc = A.unstable_shouldYield,
    Fu = A.unstable_requestPaint,
    mi = A.unstable_now,
    Ec = A.unstable_getCurrentPriorityLevel,
    tl = A.unstable_ImmediatePriority,
    ta = A.unstable_UserBlockingPriority,
    na = A.unstable_NormalPriority,
    ra = A.unstable_LowPriority,
    la = A.unstable_IdlePriority,
    Ul = {},
    _c = Fu !== void 0 ? Fu : function () {},
    _e = null,
    gr = null,
    Vl = !1,
    ju = mi(),
    K =
      1e4 > ju
        ? mi
        : function () {
            return mi() - ju;
          };
  function Vt() {
    switch (Ec()) {
      case tl:
        return 99;
      case ta:
        return 98;
      case na:
        return 97;
      case ra:
        return 96;
      case la:
        return 95;
      default:
        throw Error(y(332));
    }
  }
  function ia(e) {
    switch (e) {
      case 99:
        return tl;
      case 98:
        return ta;
      case 97:
        return na;
      case 96:
        return ra;
      case 95:
        return la;
      default:
        throw Error(y(332));
    }
  }
  function ut(e, t) {
    return (e = ia(e)), Sc(e, t);
  }
  function jn(e, t, n) {
    return (e = ia(e)), lo(e, t, n);
  }
  function ke() {
    if (gr !== null) {
      var e = gr;
      (gr = null), pi(e);
    }
    oa();
  }
  function oa() {
    if (!Vl && _e !== null) {
      Vl = !0;
      var e = 0;
      try {
        var t = _e;
        ut(99, function () {
          for (; e < t.length; e++) {
            var n = t[e];
            do n = n(!0);
            while (n !== null);
          }
        }),
          (_e = null);
      } catch (n) {
        throw (_e !== null && (_e = _e.slice(e + 1)), lo(tl, ke), n);
      } finally {
        Vl = !1;
      }
    }
  }
  var Cc = ft.ReactCurrentBatchConfig;
  function pe(e, t) {
    if (e && e.defaultProps) {
      (t = R({}, t)), (e = e.defaultProps);
      for (var n in e) t[n] === void 0 && (t[n] = e[n]);
      return t;
    }
    return t;
  }
  var zr = Ge(null),
    Dr = null,
    Pt = null,
    Rr = null;
  function io() {
    Rr = Pt = Dr = null;
  }
  function oo(e) {
    var t = zr.current;
    D(zr), (e.type._context._currentValue = t);
  }
  function ua(e, t) {
    for (; e !== null; ) {
      var n = e.alternate;
      if ((e.childLanes & t) === t) {
        if (n === null || (n.childLanes & t) === t) break;
        n.childLanes |= t;
      } else (e.childLanes |= t), n !== null && (n.childLanes |= t);
      e = e.return;
    }
  }
  function zt(e, t) {
    (Dr = e),
      (Rr = Pt = null),
      (e = e.dependencies),
      e !== null &&
        e.firstContext !== null &&
        ((e.lanes & t) !== 0 && (me = !0), (e.firstContext = null));
  }
  function ae(e, t) {
    if (Rr !== e && t !== !1 && t !== 0)
      if (
        ((typeof t != 'number' || t === 1073741823) &&
          ((Rr = e), (t = 1073741823)),
        (t = { context: e, observedBits: t, next: null }),
        Pt === null)
      ) {
        if (Dr === null) throw Error(y(308));
        (Pt = t),
          (Dr.dependencies = { lanes: 0, firstContext: t, responders: null });
      } else Pt = Pt.next = t;
    return e._currentValue;
  }
  var Me = !1;
  function uo(e) {
    e.updateQueue = {
      baseState: e.memoizedState,
      firstBaseUpdate: null,
      lastBaseUpdate: null,
      shared: { pending: null },
      effects: null,
    };
  }
  function sa(e, t) {
    (e = e.updateQueue),
      t.updateQueue === e &&
        (t.updateQueue = {
          baseState: e.baseState,
          firstBaseUpdate: e.firstBaseUpdate,
          lastBaseUpdate: e.lastBaseUpdate,
          shared: e.shared,
          effects: e.effects,
        });
  }
  function Ve(e, t) {
    return {
      eventTime: e,
      lane: t,
      tag: 0,
      payload: null,
      callback: null,
      next: null,
    };
  }
  function Be(e, t) {
    if (((e = e.updateQueue), e !== null)) {
      e = e.shared;
      var n = e.pending;
      n === null ? (t.next = t) : ((t.next = n.next), (n.next = t)),
        (e.pending = t);
    }
  }
  function Iu(e, t) {
    var n = e.updateQueue,
      r = e.alternate;
    if (r !== null && ((r = r.updateQueue), n === r)) {
      var l = null,
        i = null;
      if (((n = n.firstBaseUpdate), n !== null)) {
        do {
          var o = {
            eventTime: n.eventTime,
            lane: n.lane,
            tag: n.tag,
            payload: n.payload,
            callback: n.callback,
            next: null,
          };
          i === null ? (l = i = o) : (i = i.next = o), (n = n.next);
        } while (n !== null);
        i === null ? (l = i = t) : (i = i.next = t);
      } else l = i = t;
      (n = {
        baseState: r.baseState,
        firstBaseUpdate: l,
        lastBaseUpdate: i,
        shared: r.shared,
        effects: r.effects,
      }),
        (e.updateQueue = n);
      return;
    }
    (e = n.lastBaseUpdate),
      e === null ? (n.firstBaseUpdate = t) : (e.next = t),
      (n.lastBaseUpdate = t);
  }
  function In(e, t, n, r) {
    var l = e.updateQueue;
    Me = !1;
    var i = l.firstBaseUpdate,
      o = l.lastBaseUpdate,
      u = l.shared.pending;
    if (u !== null) {
      l.shared.pending = null;
      var s = u,
        c = s.next;
      (s.next = null), o === null ? (i = c) : (o.next = c), (o = s);
      var v = e.alternate;
      if (v !== null) {
        v = v.updateQueue;
        var k = v.lastBaseUpdate;
        k !== o &&
          (k === null ? (v.firstBaseUpdate = c) : (k.next = c),
          (v.lastBaseUpdate = s));
      }
    }
    if (i !== null) {
      (k = l.baseState), (o = 0), (v = c = s = null);
      do {
        u = i.lane;
        var p = i.eventTime;
        if ((r & u) === u) {
          v !== null &&
            (v = v.next =
              {
                eventTime: p,
                lane: 0,
                tag: i.tag,
                payload: i.payload,
                callback: i.callback,
                next: null,
              });
          e: {
            var g = e,
              _ = i;
            switch (((u = t), (p = n), _.tag)) {
              case 1:
                if (((g = _.payload), typeof g == 'function')) {
                  k = g.call(p, k, u);
                  break e;
                }
                k = g;
                break e;
              case 3:
                g.flags = (g.flags & -4097) | 64;
              case 0:
                if (
                  ((g = _.payload),
                  (u = typeof g == 'function' ? g.call(p, k, u) : g),
                  u == null)
                )
                  break e;
                k = R({}, k, u);
                break e;
              case 2:
                Me = !0;
            }
          }
          i.callback !== null &&
            ((e.flags |= 32),
            (u = l.effects),
            u === null ? (l.effects = [i]) : u.push(i));
        } else
          (p = {
            eventTime: p,
            lane: u,
            tag: i.tag,
            payload: i.payload,
            callback: i.callback,
            next: null,
          }),
            v === null ? ((c = v = p), (s = k)) : (v = v.next = p),
            (o |= u);
        if (((i = i.next), i === null)) {
          if (((u = l.shared.pending), u === null)) break;
          (i = u.next),
            (u.next = null),
            (l.lastBaseUpdate = u),
            (l.shared.pending = null);
        }
      } while (1);
      v === null && (s = k),
        (l.baseState = s),
        (l.firstBaseUpdate = c),
        (l.lastBaseUpdate = v),
        (Wn |= o),
        (e.lanes = o),
        (e.memoizedState = k);
    }
  }
  function Uu(e, t, n) {
    if (((e = t.effects), (t.effects = null), e !== null))
      for (t = 0; t < e.length; t++) {
        var r = e[t],
          l = r.callback;
        if (l !== null) {
          if (((r.callback = null), (r = n), typeof l != 'function'))
            throw Error(y(191, l));
          l.call(r);
        }
      }
  }
  var aa = new Yr.Component().refs;
  function Fr(e, t, n, r) {
    (t = e.memoizedState),
      (n = n(r, t)),
      (n = n == null ? t : R({}, t, n)),
      (e.memoizedState = n),
      e.lanes === 0 && (e.updateQueue.baseState = n);
  }
  var nl = {
    isMounted: function (e) {
      return (e = e._reactInternals) ? ct(e) === e : !1;
    },
    enqueueSetState: function (e, t, n) {
      e = e._reactInternals;
      var r = ne(),
        l = Ae(e),
        i = Ve(r, l);
      (i.payload = t), n != null && (i.callback = n), Be(e, i), $e(e, l, r);
    },
    enqueueReplaceState: function (e, t, n) {
      e = e._reactInternals;
      var r = ne(),
        l = Ae(e),
        i = Ve(r, l);
      (i.tag = 1),
        (i.payload = t),
        n != null && (i.callback = n),
        Be(e, i),
        $e(e, l, r);
    },
    enqueueForceUpdate: function (e, t) {
      e = e._reactInternals;
      var n = ne(),
        r = Ae(e),
        l = Ve(n, r);
      (l.tag = 2), t != null && (l.callback = t), Be(e, l), $e(e, r, n);
    },
  };
  function Vu(e, t, n, r, l, i, o) {
    return (
      (e = e.stateNode),
      typeof e.shouldComponentUpdate == 'function'
        ? e.shouldComponentUpdate(r, i, o)
        : t.prototype && t.prototype.isPureReactComponent
        ? !Rn(n, r) || !Rn(l, i)
        : !0
    );
  }
  function fa(e, t, n) {
    var r = !1,
      l = Ye,
      i = t.contextType;
    return (
      typeof i == 'object' && i !== null
        ? (i = ae(i))
        : ((l = te(t) ? ot : G.current),
          (r = t.contextTypes),
          (i = (r = r != null) ? Ut(e, l) : Ye)),
      (t = new t(n, i)),
      (e.memoizedState =
        t.state !== null && t.state !== void 0 ? t.state : null),
      (t.updater = nl),
      (e.stateNode = t),
      (t._reactInternals = e),
      r &&
        ((e = e.stateNode),
        (e.__reactInternalMemoizedUnmaskedChildContext = l),
        (e.__reactInternalMemoizedMaskedChildContext = i)),
      t
    );
  }
  function Bu(e, t, n, r) {
    (e = t.state),
      typeof t.componentWillReceiveProps == 'function' &&
        t.componentWillReceiveProps(n, r),
      typeof t.UNSAFE_componentWillReceiveProps == 'function' &&
        t.UNSAFE_componentWillReceiveProps(n, r),
      t.state !== e && nl.enqueueReplaceState(t, t.state, null);
  }
  function hi(e, t, n, r) {
    var l = e.stateNode;
    (l.props = n), (l.state = e.memoizedState), (l.refs = aa), uo(e);
    var i = t.contextType;
    typeof i == 'object' && i !== null
      ? (l.context = ae(i))
      : ((i = te(t) ? ot : G.current), (l.context = Ut(e, i))),
      In(e, n, l, r),
      (l.state = e.memoizedState),
      (i = t.getDerivedStateFromProps),
      typeof i == 'function' && (Fr(e, t, i, n), (l.state = e.memoizedState)),
      typeof t.getDerivedStateFromProps == 'function' ||
        typeof l.getSnapshotBeforeUpdate == 'function' ||
        (typeof l.UNSAFE_componentWillMount != 'function' &&
          typeof l.componentWillMount != 'function') ||
        ((t = l.state),
        typeof l.componentWillMount == 'function' && l.componentWillMount(),
        typeof l.UNSAFE_componentWillMount == 'function' &&
          l.UNSAFE_componentWillMount(),
        t !== l.state && nl.enqueueReplaceState(l, l.state, null),
        In(e, n, l, r),
        (l.state = e.memoizedState)),
      typeof l.componentDidMount == 'function' && (e.flags |= 4);
  }
  var sr = Array.isArray;
  function nn(e, t, n) {
    if (
      ((e = n.ref),
      e !== null && typeof e != 'function' && typeof e != 'object')
    ) {
      if (n._owner) {
        if (((n = n._owner), n)) {
          if (n.tag !== 1) throw Error(y(309));
          var r = n.stateNode;
        }
        if (!r) throw Error(y(147, e));
        var l = '' + e;
        return t !== null &&
          t.ref !== null &&
          typeof t.ref == 'function' &&
          t.ref._stringRef === l
          ? t.ref
          : ((t = function (i) {
              var o = r.refs;
              o === aa && (o = r.refs = {}),
                i === null ? delete o[l] : (o[l] = i);
            }),
            (t._stringRef = l),
            t);
      }
      if (typeof e != 'string') throw Error(y(284));
      if (!n._owner) throw Error(y(290, e));
    }
    return e;
  }
  function ar(e, t) {
    if (e.type !== 'textarea')
      throw Error(
        y(
          31,
          Object.prototype.toString.call(t) === '[object Object]'
            ? 'object with keys {' + Object.keys(t).join(', ') + '}'
            : t
        )
      );
  }
  function ca(e) {
    function t(d, a) {
      if (e) {
        var f = d.lastEffect;
        f !== null
          ? ((f.nextEffect = a), (d.lastEffect = a))
          : (d.firstEffect = d.lastEffect = a),
          (a.nextEffect = null),
          (a.flags = 8);
      }
    }
    function n(d, a) {
      if (!e) return null;
      for (; a !== null; ) t(d, a), (a = a.sibling);
      return null;
    }
    function r(d, a) {
      for (d = new Map(); a !== null; )
        a.key !== null ? d.set(a.key, a) : d.set(a.index, a), (a = a.sibling);
      return d;
    }
    function l(d, a) {
      return (d = Xe(d, a)), (d.index = 0), (d.sibling = null), d;
    }
    function i(d, a, f) {
      return (
        (d.index = f),
        e
          ? ((f = d.alternate),
            f !== null
              ? ((f = f.index), f < a ? ((d.flags = 2), a) : f)
              : ((d.flags = 2), a))
          : a
      );
    }
    function o(d) {
      return e && d.alternate === null && (d.flags = 2), d;
    }
    function u(d, a, f, m) {
      return a === null || a.tag !== 6
        ? ((a = Wl(f, d.mode, m)), (a.return = d), a)
        : ((a = l(a, f)), (a.return = d), a);
    }
    function s(d, a, f, m) {
      return a !== null && a.elementType === f.type
        ? ((m = l(a, f.props)), (m.ref = nn(d, a, f)), (m.return = d), m)
        : ((m = Er(f.type, f.key, f.props, null, d.mode, m)),
          (m.ref = nn(d, a, f)),
          (m.return = d),
          m);
    }
    function c(d, a, f, m) {
      return a === null ||
        a.tag !== 4 ||
        a.stateNode.containerInfo !== f.containerInfo ||
        a.stateNode.implementation !== f.implementation
        ? ((a = Ql(f, d.mode, m)), (a.return = d), a)
        : ((a = l(a, f.children || [])), (a.return = d), a);
    }
    function v(d, a, f, m, h) {
      return a === null || a.tag !== 7
        ? ((a = jt(f, d.mode, m, h)), (a.return = d), a)
        : ((a = l(a, f)), (a.return = d), a);
    }
    function k(d, a, f) {
      if (typeof a == 'string' || typeof a == 'number')
        return (a = Wl('' + a, d.mode, f)), (a.return = d), a;
      if (typeof a == 'object' && a !== null) {
        switch (a.$$typeof) {
          case fn:
            return (
              (f = Er(a.type, a.key, a.props, null, d.mode, f)),
              (f.ref = nn(d, null, a)),
              (f.return = d),
              f
            );
          case et:
            return (a = Ql(a, d.mode, f)), (a.return = d), a;
        }
        if (sr(a) || qt(a))
          return (a = jt(a, d.mode, f, null)), (a.return = d), a;
        ar(d, a);
      }
      return null;
    }
    function p(d, a, f, m) {
      var h = a !== null ? a.key : null;
      if (typeof f == 'string' || typeof f == 'number')
        return h !== null ? null : u(d, a, '' + f, m);
      if (typeof f == 'object' && f !== null) {
        switch (f.$$typeof) {
          case fn:
            return f.key === h
              ? f.type === ze
                ? v(d, a, f.props.children, m, h)
                : s(d, a, f, m)
              : null;
          case et:
            return f.key === h ? c(d, a, f, m) : null;
        }
        if (sr(f) || qt(f)) return h !== null ? null : v(d, a, f, m, null);
        ar(d, f);
      }
      return null;
    }
    function g(d, a, f, m, h) {
      if (typeof m == 'string' || typeof m == 'number')
        return (d = d.get(f) || null), u(a, d, '' + m, h);
      if (typeof m == 'object' && m !== null) {
        switch (m.$$typeof) {
          case fn:
            return (
              (d = d.get(m.key === null ? f : m.key) || null),
              m.type === ze
                ? v(a, d, m.props.children, h, m.key)
                : s(a, d, m, h)
            );
          case et:
            return (
              (d = d.get(m.key === null ? f : m.key) || null), c(a, d, m, h)
            );
        }
        if (sr(m) || qt(m)) return (d = d.get(f) || null), v(a, d, m, h, null);
        ar(a, m);
      }
      return null;
    }
    function _(d, a, f, m) {
      for (
        var h = null, x = null, S = a, P = (a = 0), T = null;
        S !== null && P < f.length;
        P++
      ) {
        S.index > P ? ((T = S), (S = null)) : (T = S.sibling);
        var N = p(d, S, f[P], m);
        if (N === null) {
          S === null && (S = T);
          break;
        }
        e && S && N.alternate === null && t(d, S),
          (a = i(N, a, P)),
          x === null ? (h = N) : (x.sibling = N),
          (x = N),
          (S = T);
      }
      if (P === f.length) return n(d, S), h;
      if (S === null) {
        for (; P < f.length; P++)
          (S = k(d, f[P], m)),
            S !== null &&
              ((a = i(S, a, P)),
              x === null ? (h = S) : (x.sibling = S),
              (x = S));
        return h;
      }
      for (S = r(d, S); P < f.length; P++)
        (T = g(S, d, P, f[P], m)),
          T !== null &&
            (e && T.alternate !== null && S.delete(T.key === null ? P : T.key),
            (a = i(T, a, P)),
            x === null ? (h = T) : (x.sibling = T),
            (x = T));
      return (
        e &&
          S.forEach(function (Oe) {
            return t(d, Oe);
          }),
        h
      );
    }
    function E(d, a, f, m) {
      var h = qt(f);
      if (typeof h != 'function') throw Error(y(150));
      if (((f = h.call(f)), f == null)) throw Error(y(151));
      for (
        var x = (h = null), S = a, P = (a = 0), T = null, N = f.next();
        S !== null && !N.done;
        P++, N = f.next()
      ) {
        S.index > P ? ((T = S), (S = null)) : (T = S.sibling);
        var Oe = p(d, S, N.value, m);
        if (Oe === null) {
          S === null && (S = T);
          break;
        }
        e && S && Oe.alternate === null && t(d, S),
          (a = i(Oe, a, P)),
          x === null ? (h = Oe) : (x.sibling = Oe),
          (x = Oe),
          (S = T);
      }
      if (N.done) return n(d, S), h;
      if (S === null) {
        for (; !N.done; P++, N = f.next())
          (N = k(d, N.value, m)),
            N !== null &&
              ((a = i(N, a, P)),
              x === null ? (h = N) : (x.sibling = N),
              (x = N));
        return h;
      }
      for (S = r(d, S); !N.done; P++, N = f.next())
        (N = g(S, d, P, N.value, m)),
          N !== null &&
            (e && N.alternate !== null && S.delete(N.key === null ? P : N.key),
            (a = i(N, a, P)),
            x === null ? (h = N) : (x.sibling = N),
            (x = N));
      return (
        e &&
          S.forEach(function (Xa) {
            return t(d, Xa);
          }),
        h
      );
    }
    return function (d, a, f, m) {
      var h =
        typeof f == 'object' && f !== null && f.type === ze && f.key === null;
      h && (f = f.props.children);
      var x = typeof f == 'object' && f !== null;
      if (x)
        switch (f.$$typeof) {
          case fn:
            e: {
              for (x = f.key, h = a; h !== null; ) {
                if (h.key === x) {
                  switch (h.tag) {
                    case 7:
                      if (f.type === ze) {
                        n(d, h.sibling),
                          (a = l(h, f.props.children)),
                          (a.return = d),
                          (d = a);
                        break e;
                      }
                      break;
                    default:
                      if (h.elementType === f.type) {
                        n(d, h.sibling),
                          (a = l(h, f.props)),
                          (a.ref = nn(d, h, f)),
                          (a.return = d),
                          (d = a);
                        break e;
                      }
                  }
                  n(d, h);
                  break;
                } else t(d, h);
                h = h.sibling;
              }
              f.type === ze
                ? ((a = jt(f.props.children, d.mode, m, f.key)),
                  (a.return = d),
                  (d = a))
                : ((m = Er(f.type, f.key, f.props, null, d.mode, m)),
                  (m.ref = nn(d, a, f)),
                  (m.return = d),
                  (d = m));
            }
            return o(d);
          case et:
            e: {
              for (h = f.key; a !== null; ) {
                if (a.key === h)
                  if (
                    a.tag === 4 &&
                    a.stateNode.containerInfo === f.containerInfo &&
                    a.stateNode.implementation === f.implementation
                  ) {
                    n(d, a.sibling),
                      (a = l(a, f.children || [])),
                      (a.return = d),
                      (d = a);
                    break e;
                  } else {
                    n(d, a);
                    break;
                  }
                else t(d, a);
                a = a.sibling;
              }
              (a = Ql(f, d.mode, m)), (a.return = d), (d = a);
            }
            return o(d);
        }
      if (typeof f == 'string' || typeof f == 'number')
        return (
          (f = '' + f),
          a !== null && a.tag === 6
            ? (n(d, a.sibling), (a = l(a, f)), (a.return = d), (d = a))
            : (n(d, a), (a = Wl(f, d.mode, m)), (a.return = d), (d = a)),
          o(d)
        );
      if (sr(f)) return _(d, a, f, m);
      if (qt(f)) return E(d, a, f, m);
      if ((x && ar(d, f), typeof f > 'u' && !h))
        switch (d.tag) {
          case 1:
          case 22:
          case 0:
          case 11:
          case 15:
            throw Error(y(152, Nt(d.type) || 'Component'));
        }
      return n(d, a);
    };
  }
  var jr = ca(!0),
    da = ca(!1),
    Hn = {},
    we = Ge(Hn),
    Un = Ge(Hn),
    Vn = Ge(Hn);
  function rt(e) {
    if (e === Hn) throw Error(y(174));
    return e;
  }
  function vi(e, t) {
    switch ((I(Vn, t), I(Un, e), I(we, Hn), (e = t.nodeType), e)) {
      case 9:
      case 11:
        t = (t = t.documentElement) ? t.namespaceURI : ei(null, '');
        break;
      default:
        (e = e === 8 ? t.parentNode : t),
          (t = e.namespaceURI || null),
          (e = e.tagName),
          (t = ei(t, e));
    }
    D(we), I(we, t);
  }
  function Bt() {
    D(we), D(Un), D(Vn);
  }
  function Au(e) {
    rt(Vn.current);
    var t = rt(we.current),
      n = ei(t, e.type);
    t !== n && (I(Un, e), I(we, n));
  }
  function so(e) {
    Un.current === e && (D(we), D(Un));
  }
  var j = Ge(0);
  function Ir(e) {
    for (var t = e; t !== null; ) {
      if (t.tag === 13) {
        var n = t.memoizedState;
        if (
          n !== null &&
          ((n = n.dehydrated), n === null || n.data === '$?' || n.data === '$!')
        )
          return t;
      } else if (t.tag === 19 && t.memoizedProps.revealOrder !== void 0) {
        if ((t.flags & 64) !== 0) return t;
      } else if (t.child !== null) {
        (t.child.return = t), (t = t.child);
        continue;
      }
      if (t === e) break;
      for (; t.sibling === null; ) {
        if (t.return === null || t.return === e) return null;
        t = t.return;
      }
      (t.sibling.return = t.return), (t = t.sibling);
    }
    return null;
  }
  var xe = null,
    Fe = null,
    Se = !1;
  function pa(e, t) {
    var n = ue(5, null, null, 0);
    (n.elementType = 'DELETED'),
      (n.type = 'DELETED'),
      (n.stateNode = t),
      (n.return = e),
      (n.flags = 8),
      e.lastEffect !== null
        ? ((e.lastEffect.nextEffect = n), (e.lastEffect = n))
        : (e.firstEffect = e.lastEffect = n);
  }
  function $u(e, t) {
    switch (e.tag) {
      case 5:
        var n = e.type;
        return (
          (t =
            t.nodeType !== 1 || n.toLowerCase() !== t.nodeName.toLowerCase()
              ? null
              : t),
          t !== null ? ((e.stateNode = t), !0) : !1
        );
      case 6:
        return (
          (t = e.pendingProps === '' || t.nodeType !== 3 ? null : t),
          t !== null ? ((e.stateNode = t), !0) : !1
        );
      case 13:
        return !1;
      default:
        return !1;
    }
  }
  function yi(e) {
    if (Se) {
      var t = Fe;
      if (t) {
        var n = t;
        if (!$u(e, t)) {
          if (((t = Mt(n.nextSibling)), !t || !$u(e, t))) {
            (e.flags = (e.flags & -1025) | 2), (Se = !1), (xe = e);
            return;
          }
          pa(xe, n);
        }
        (xe = e), (Fe = Mt(t.firstChild));
      } else (e.flags = (e.flags & -1025) | 2), (Se = !1), (xe = e);
    }
  }
  function Hu(e) {
    for (
      e = e.return;
      e !== null && e.tag !== 5 && e.tag !== 3 && e.tag !== 13;

    )
      e = e.return;
    xe = e;
  }
  function fr(e) {
    if (e !== xe) return !1;
    if (!Se) return Hu(e), (Se = !0), !1;
    var t = e.type;
    if (
      e.tag !== 5 ||
      (t !== 'head' && t !== 'body' && !ci(t, e.memoizedProps))
    )
      for (t = Fe; t; ) pa(e, t), (t = Mt(t.nextSibling));
    if ((Hu(e), e.tag === 13)) {
      if (((e = e.memoizedState), (e = e !== null ? e.dehydrated : null), !e))
        throw Error(y(317));
      e: {
        for (e = e.nextSibling, t = 0; e; ) {
          if (e.nodeType === 8) {
            var n = e.data;
            if (n === '/$') {
              if (t === 0) {
                Fe = Mt(e.nextSibling);
                break e;
              }
              t--;
            } else (n !== '$' && n !== '$!' && n !== '$?') || t++;
          }
          e = e.nextSibling;
        }
        Fe = null;
      }
    } else Fe = xe ? Mt(e.stateNode.nextSibling) : null;
    return !0;
  }
  function Bl() {
    (Fe = xe = null), (Se = !1);
  }
  var Dt = [];
  function ao() {
    for (var e = 0; e < Dt.length; e++)
      Dt[e]._workInProgressVersionPrimary = null;
    Dt.length = 0;
  }
  var En = ft.ReactCurrentDispatcher,
    se = ft.ReactCurrentBatchConfig,
    Bn = 0,
    U = null,
    Y = null,
    $ = null,
    Ur = !1,
    _n = !1;
  function J() {
    throw Error(y(321));
  }
  function fo(e, t) {
    if (t === null) return !1;
    for (var n = 0; n < t.length && n < e.length; n++)
      if (!oe(e[n], t[n])) return !1;
    return !0;
  }
  function co(e, t, n, r, l, i) {
    if (
      ((Bn = i),
      (U = t),
      (t.memoizedState = null),
      (t.updateQueue = null),
      (t.lanes = 0),
      (En.current = e === null || e.memoizedState === null ? Pc : Nc),
      (e = n(r, l)),
      _n)
    ) {
      i = 0;
      do {
        if (((_n = !1), !(25 > i))) throw Error(y(301));
        (i += 1),
          ($ = Y = null),
          (t.updateQueue = null),
          (En.current = Tc),
          (e = n(r, l));
      } while (_n);
    }
    if (
      ((En.current = $r),
      (t = Y !== null && Y.next !== null),
      (Bn = 0),
      ($ = Y = U = null),
      (Ur = !1),
      t)
    )
      throw Error(y(300));
    return e;
  }
  function lt() {
    var e = {
      memoizedState: null,
      baseState: null,
      baseQueue: null,
      queue: null,
      next: null,
    };
    return $ === null ? (U.memoizedState = $ = e) : ($ = $.next = e), $;
  }
  function dt() {
    if (Y === null) {
      var e = U.alternate;
      e = e !== null ? e.memoizedState : null;
    } else e = Y.next;
    var t = $ === null ? U.memoizedState : $.next;
    if (t !== null) ($ = t), (Y = e);
    else {
      if (e === null) throw Error(y(310));
      (Y = e),
        (e = {
          memoizedState: Y.memoizedState,
          baseState: Y.baseState,
          baseQueue: Y.baseQueue,
          queue: Y.queue,
          next: null,
        }),
        $ === null ? (U.memoizedState = $ = e) : ($ = $.next = e);
    }
    return $;
  }
  function ye(e, t) {
    return typeof t == 'function' ? t(e) : t;
  }
  function rn(e) {
    var t = dt(),
      n = t.queue;
    if (n === null) throw Error(y(311));
    n.lastRenderedReducer = e;
    var r = Y,
      l = r.baseQueue,
      i = n.pending;
    if (i !== null) {
      if (l !== null) {
        var o = l.next;
        (l.next = i.next), (i.next = o);
      }
      (r.baseQueue = l = i), (n.pending = null);
    }
    if (l !== null) {
      (l = l.next), (r = r.baseState);
      var u = (o = i = null),
        s = l;
      do {
        var c = s.lane;
        if ((Bn & c) === c)
          u !== null &&
            (u = u.next =
              {
                lane: 0,
                action: s.action,
                eagerReducer: s.eagerReducer,
                eagerState: s.eagerState,
                next: null,
              }),
            (r = s.eagerReducer === e ? s.eagerState : e(r, s.action));
        else {
          var v = {
            lane: c,
            action: s.action,
            eagerReducer: s.eagerReducer,
            eagerState: s.eagerState,
            next: null,
          };
          u === null ? ((o = u = v), (i = r)) : (u = u.next = v),
            (U.lanes |= c),
            (Wn |= c);
        }
        s = s.next;
      } while (s !== null && s !== l);
      u === null ? (i = r) : (u.next = o),
        oe(r, t.memoizedState) || (me = !0),
        (t.memoizedState = r),
        (t.baseState = i),
        (t.baseQueue = u),
        (n.lastRenderedState = r);
    }
    return [t.memoizedState, n.dispatch];
  }
  function ln(e) {
    var t = dt(),
      n = t.queue;
    if (n === null) throw Error(y(311));
    n.lastRenderedReducer = e;
    var r = n.dispatch,
      l = n.pending,
      i = t.memoizedState;
    if (l !== null) {
      n.pending = null;
      var o = (l = l.next);
      do (i = e(i, o.action)), (o = o.next);
      while (o !== l);
      oe(i, t.memoizedState) || (me = !0),
        (t.memoizedState = i),
        t.baseQueue === null && (t.baseState = i),
        (n.lastRenderedState = i);
    }
    return [i, r];
  }
  function Wu(e, t, n) {
    var r = t._getVersion;
    r = r(t._source);
    var l = t._workInProgressVersionPrimary;
    if (
      (l !== null
        ? (e = l === r)
        : ((e = e.mutableReadLanes),
          (e = (Bn & e) === e) &&
            ((t._workInProgressVersionPrimary = r), Dt.push(t))),
      e)
    )
      return n(t._source);
    throw (Dt.push(t), Error(y(350)));
  }
  function ma(e, t, n, r) {
    var l = Z;
    if (l === null) throw Error(y(349));
    var i = t._getVersion,
      o = i(t._source),
      u = En.current,
      s = u.useState(function () {
        return Wu(l, t, n);
      }),
      c = s[1],
      v = s[0];
    s = $;
    var k = e.memoizedState,
      p = k.refs,
      g = p.getSnapshot,
      _ = k.source;
    k = k.subscribe;
    var E = U;
    return (
      (e.memoizedState = { refs: p, source: t, subscribe: r }),
      u.useEffect(
        function () {
          (p.getSnapshot = n), (p.setSnapshot = c);
          var d = i(t._source);
          if (!oe(o, d)) {
            (d = n(t._source)),
              oe(v, d) ||
                (c(d), (d = Ae(E)), (l.mutableReadLanes |= d & l.pendingLanes)),
              (d = l.mutableReadLanes),
              (l.entangledLanes |= d);
            for (var a = l.entanglements, f = d; 0 < f; ) {
              var m = 31 - Qe(f),
                h = 1 << m;
              (a[m] |= d), (f &= ~h);
            }
          }
        },
        [n, t, r]
      ),
      u.useEffect(
        function () {
          return r(t._source, function () {
            var d = p.getSnapshot,
              a = p.setSnapshot;
            try {
              a(d(t._source));
              var f = Ae(E);
              l.mutableReadLanes |= f & l.pendingLanes;
            } catch (m) {
              a(function () {
                throw m;
              });
            }
          });
        },
        [t, r]
      ),
      (oe(g, n) && oe(_, t) && oe(k, r)) ||
        ((e = {
          pending: null,
          dispatch: null,
          lastRenderedReducer: ye,
          lastRenderedState: v,
        }),
        (e.dispatch = c = ho.bind(null, U, e)),
        (s.queue = e),
        (s.baseQueue = null),
        (v = Wu(l, t, n)),
        (s.memoizedState = s.baseState = v)),
      v
    );
  }
  function ha(e, t, n) {
    var r = dt();
    return ma(r, e, t, n);
  }
  function on(e) {
    var t = lt();
    return (
      typeof e == 'function' && (e = e()),
      (t.memoizedState = t.baseState = e),
      (e = t.queue =
        {
          pending: null,
          dispatch: null,
          lastRenderedReducer: ye,
          lastRenderedState: e,
        }),
      (e = e.dispatch = ho.bind(null, U, e)),
      [t.memoizedState, e]
    );
  }
  function Vr(e, t, n, r) {
    return (
      (e = { tag: e, create: t, destroy: n, deps: r, next: null }),
      (t = U.updateQueue),
      t === null
        ? ((t = { lastEffect: null }),
          (U.updateQueue = t),
          (t.lastEffect = e.next = e))
        : ((n = t.lastEffect),
          n === null
            ? (t.lastEffect = e.next = e)
            : ((r = n.next), (n.next = e), (e.next = r), (t.lastEffect = e))),
      e
    );
  }
  function Qu(e) {
    var t = lt();
    return (e = { current: e }), (t.memoizedState = e);
  }
  function Br() {
    return dt().memoizedState;
  }
  function gi(e, t, n, r) {
    var l = lt();
    (U.flags |= e),
      (l.memoizedState = Vr(1 | t, n, void 0, r === void 0 ? null : r));
  }
  function po(e, t, n, r) {
    var l = dt();
    r = r === void 0 ? null : r;
    var i = void 0;
    if (Y !== null) {
      var o = Y.memoizedState;
      if (((i = o.destroy), r !== null && fo(r, o.deps))) {
        Vr(t, n, i, r);
        return;
      }
    }
    (U.flags |= e), (l.memoizedState = Vr(1 | t, n, i, r));
  }
  function Yu(e, t) {
    return gi(516, 4, e, t);
  }
  function Ar(e, t) {
    return po(516, 4, e, t);
  }
  function va(e, t) {
    return po(4, 2, e, t);
  }
  function ya(e, t) {
    if (typeof t == 'function')
      return (
        (e = e()),
        t(e),
        function () {
          t(null);
        }
      );
    if (t != null)
      return (
        (e = e()),
        (t.current = e),
        function () {
          t.current = null;
        }
      );
  }
  function ga(e, t, n) {
    return (
      (n = n != null ? n.concat([e]) : null), po(4, 2, ya.bind(null, t, e), n)
    );
  }
  function mo() {}
  function wa(e, t) {
    var n = dt();
    t = t === void 0 ? null : t;
    var r = n.memoizedState;
    return r !== null && t !== null && fo(t, r[1])
      ? r[0]
      : ((n.memoizedState = [e, t]), e);
  }
  function Sa(e, t) {
    var n = dt();
    t = t === void 0 ? null : t;
    var r = n.memoizedState;
    return r !== null && t !== null && fo(t, r[1])
      ? r[0]
      : ((e = e()), (n.memoizedState = [e, t]), e);
  }
  function xc(e, t) {
    var n = Vt();
    ut(98 > n ? 98 : n, function () {
      e(!0);
    }),
      ut(97 < n ? 97 : n, function () {
        var r = se.transition;
        se.transition = 1;
        try {
          e(!1), t();
        } finally {
          se.transition = r;
        }
      });
  }
  function ho(e, t, n) {
    var r = ne(),
      l = Ae(e),
      i = {
        lane: l,
        action: n,
        eagerReducer: null,
        eagerState: null,
        next: null,
      },
      o = t.pending;
    if (
      (o === null ? (i.next = i) : ((i.next = o.next), (o.next = i)),
      (t.pending = i),
      (o = e.alternate),
      e === U || (o !== null && o === U))
    )
      _n = Ur = !0;
    else {
      if (
        e.lanes === 0 &&
        (o === null || o.lanes === 0) &&
        ((o = t.lastRenderedReducer), o !== null)
      )
        try {
          var u = t.lastRenderedState,
            s = o(u, n);
          if (((i.eagerReducer = o), (i.eagerState = s), oe(s, u))) return;
        } catch {
        } finally {
        }
      $e(e, l, r);
    }
  }
  var $r = {
      readContext: ae,
      useCallback: J,
      useContext: J,
      useEffect: J,
      useImperativeHandle: J,
      useLayoutEffect: J,
      useMemo: J,
      useReducer: J,
      useRef: J,
      useState: J,
      useDebugValue: J,
      useDeferredValue: J,
      useTransition: J,
      useMutableSource: J,
      useOpaqueIdentifier: J,
      unstable_isNewReconciler: !1,
    },
    Pc = {
      readContext: ae,
      useCallback: function (e, t) {
        return (lt().memoizedState = [e, t === void 0 ? null : t]), e;
      },
      useContext: ae,
      useEffect: Yu,
      useImperativeHandle: function (e, t, n) {
        return (
          (n = n != null ? n.concat([e]) : null),
          gi(4, 2, ya.bind(null, t, e), n)
        );
      },
      useLayoutEffect: function (e, t) {
        return gi(4, 2, e, t);
      },
      useMemo: function (e, t) {
        var n = lt();
        return (
          (t = t === void 0 ? null : t),
          (e = e()),
          (n.memoizedState = [e, t]),
          e
        );
      },
      useReducer: function (e, t, n) {
        var r = lt();
        return (
          (t = n !== void 0 ? n(t) : t),
          (r.memoizedState = r.baseState = t),
          (e = r.queue =
            {
              pending: null,
              dispatch: null,
              lastRenderedReducer: e,
              lastRenderedState: t,
            }),
          (e = e.dispatch = ho.bind(null, U, e)),
          [r.memoizedState, e]
        );
      },
      useRef: Qu,
      useState: on,
      useDebugValue: mo,
      useDeferredValue: function (e) {
        var t = on(e),
          n = t[0],
          r = t[1];
        return (
          Yu(
            function () {
              var l = se.transition;
              se.transition = 1;
              try {
                r(e);
              } finally {
                se.transition = l;
              }
            },
            [e]
          ),
          n
        );
      },
      useTransition: function () {
        var e = on(!1),
          t = e[0];
        return (e = xc.bind(null, e[1])), Qu(e), [e, t];
      },
      useMutableSource: function (e, t, n) {
        var r = lt();
        return (
          (r.memoizedState = {
            refs: { getSnapshot: t, setSnapshot: null },
            source: e,
            subscribe: n,
          }),
          ma(r, e, t, n)
        );
      },
      useOpaqueIdentifier: function () {
        if (Se) {
          var e = !1,
            t = wc(function () {
              throw (
                (e || ((e = !0), n('r:' + (Il++).toString(36))), Error(y(355)))
              );
            }),
            n = on(t)[1];
          return (
            (U.mode & 2) === 0 &&
              ((U.flags |= 516),
              Vr(
                5,
                function () {
                  n('r:' + (Il++).toString(36));
                },
                void 0,
                null
              )),
            t
          );
        }
        return (t = 'r:' + (Il++).toString(36)), on(t), t;
      },
      unstable_isNewReconciler: !1,
    },
    Nc = {
      readContext: ae,
      useCallback: wa,
      useContext: ae,
      useEffect: Ar,
      useImperativeHandle: ga,
      useLayoutEffect: va,
      useMemo: Sa,
      useReducer: rn,
      useRef: Br,
      useState: function () {
        return rn(ye);
      },
      useDebugValue: mo,
      useDeferredValue: function (e) {
        var t = rn(ye),
          n = t[0],
          r = t[1];
        return (
          Ar(
            function () {
              var l = se.transition;
              se.transition = 1;
              try {
                r(e);
              } finally {
                se.transition = l;
              }
            },
            [e]
          ),
          n
        );
      },
      useTransition: function () {
        var e = rn(ye)[0];
        return [Br().current, e];
      },
      useMutableSource: ha,
      useOpaqueIdentifier: function () {
        return rn(ye)[0];
      },
      unstable_isNewReconciler: !1,
    },
    Tc = {
      readContext: ae,
      useCallback: wa,
      useContext: ae,
      useEffect: Ar,
      useImperativeHandle: ga,
      useLayoutEffect: va,
      useMemo: Sa,
      useReducer: ln,
      useRef: Br,
      useState: function () {
        return ln(ye);
      },
      useDebugValue: mo,
      useDeferredValue: function (e) {
        var t = ln(ye),
          n = t[0],
          r = t[1];
        return (
          Ar(
            function () {
              var l = se.transition;
              se.transition = 1;
              try {
                r(e);
              } finally {
                se.transition = l;
              }
            },
            [e]
          ),
          n
        );
      },
      useTransition: function () {
        var e = ln(ye)[0];
        return [Br().current, e];
      },
      useMutableSource: ha,
      useOpaqueIdentifier: function () {
        return ln(ye)[0];
      },
      unstable_isNewReconciler: !1,
    },
    Oc = ft.ReactCurrentOwner,
    me = !1;
  function b(e, t, n, r) {
    t.child = e === null ? da(t, null, n, r) : jr(t, e.child, n, r);
  }
  function Ku(e, t, n, r, l) {
    n = n.render;
    var i = t.ref;
    return (
      zt(t, l),
      (r = co(e, t, n, r, i, l)),
      e !== null && !me
        ? ((t.updateQueue = e.updateQueue),
          (t.flags &= -517),
          (e.lanes &= ~l),
          Pe(e, t, l))
        : ((t.flags |= 1), b(e, t, r, l), t.child)
    );
  }
  function Xu(e, t, n, r, l, i) {
    if (e === null) {
      var o = n.type;
      return typeof o == 'function' &&
        !ko(o) &&
        o.defaultProps === void 0 &&
        n.compare === null &&
        n.defaultProps === void 0
        ? ((t.tag = 15), (t.type = o), ka(e, t, o, r, l, i))
        : ((e = Er(n.type, null, r, t, t.mode, i)),
          (e.ref = t.ref),
          (e.return = t),
          (t.child = e));
    }
    return (
      (o = e.child),
      (l & i) === 0 &&
      ((l = o.memoizedProps),
      (n = n.compare),
      (n = n !== null ? n : Rn),
      n(l, r) && e.ref === t.ref)
        ? Pe(e, t, i)
        : ((t.flags |= 1),
          (e = Xe(o, r)),
          (e.ref = t.ref),
          (e.return = t),
          (t.child = e))
    );
  }
  function ka(e, t, n, r, l, i) {
    if (e !== null && Rn(e.memoizedProps, r) && e.ref === t.ref)
      if (((me = !1), (i & l) !== 0)) (e.flags & 16384) !== 0 && (me = !0);
      else return (t.lanes = e.lanes), Pe(e, t, i);
    return wi(e, t, n, r, i);
  }
  function Al(e, t, n) {
    var r = t.pendingProps,
      l = r.children,
      i = e !== null ? e.memoizedState : null;
    if (r.mode === 'hidden' || r.mode === 'unstable-defer-without-hiding')
      if ((t.mode & 4) === 0) (t.memoizedState = { baseLanes: 0 }), dr(t, n);
      else if ((n & 1073741824) !== 0)
        (t.memoizedState = { baseLanes: 0 }),
          dr(t, i !== null ? i.baseLanes : n);
      else
        return (
          (e = i !== null ? i.baseLanes | n : n),
          (t.lanes = t.childLanes = 1073741824),
          (t.memoizedState = { baseLanes: e }),
          dr(t, e),
          null
        );
    else
      i !== null ? ((r = i.baseLanes | n), (t.memoizedState = null)) : (r = n),
        dr(t, r);
    return b(e, t, l, n), t.child;
  }
  function Ea(e, t) {
    var n = t.ref;
    ((e === null && n !== null) || (e !== null && e.ref !== n)) &&
      (t.flags |= 128);
  }
  function wi(e, t, n, r, l) {
    var i = te(n) ? ot : G.current;
    return (
      (i = Ut(t, i)),
      zt(t, l),
      (n = co(e, t, n, r, i, l)),
      e !== null && !me
        ? ((t.updateQueue = e.updateQueue),
          (t.flags &= -517),
          (e.lanes &= ~l),
          Pe(e, t, l))
        : ((t.flags |= 1), b(e, t, n, l), t.child)
    );
  }
  function Gu(e, t, n, r, l) {
    if (te(n)) {
      var i = !0;
      yr(t);
    } else i = !1;
    if ((zt(t, l), t.stateNode === null))
      e !== null &&
        ((e.alternate = null), (t.alternate = null), (t.flags |= 2)),
        fa(t, n, r),
        hi(t, n, r, l),
        (r = !0);
    else if (e === null) {
      var o = t.stateNode,
        u = t.memoizedProps;
      o.props = u;
      var s = o.context,
        c = n.contextType;
      typeof c == 'object' && c !== null
        ? (c = ae(c))
        : ((c = te(n) ? ot : G.current), (c = Ut(t, c)));
      var v = n.getDerivedStateFromProps,
        k =
          typeof v == 'function' ||
          typeof o.getSnapshotBeforeUpdate == 'function';
      k ||
        (typeof o.UNSAFE_componentWillReceiveProps != 'function' &&
          typeof o.componentWillReceiveProps != 'function') ||
        ((u !== r || s !== c) && Bu(t, o, r, c)),
        (Me = !1);
      var p = t.memoizedState;
      (o.state = p),
        In(t, r, o, l),
        (s = t.memoizedState),
        u !== r || p !== s || ee.current || Me
          ? (typeof v == 'function' && (Fr(t, n, v, r), (s = t.memoizedState)),
            (u = Me || Vu(t, n, u, r, p, s, c))
              ? (k ||
                  (typeof o.UNSAFE_componentWillMount != 'function' &&
                    typeof o.componentWillMount != 'function') ||
                  (typeof o.componentWillMount == 'function' &&
                    o.componentWillMount(),
                  typeof o.UNSAFE_componentWillMount == 'function' &&
                    o.UNSAFE_componentWillMount()),
                typeof o.componentDidMount == 'function' && (t.flags |= 4))
              : (typeof o.componentDidMount == 'function' && (t.flags |= 4),
                (t.memoizedProps = r),
                (t.memoizedState = s)),
            (o.props = r),
            (o.state = s),
            (o.context = c),
            (r = u))
          : (typeof o.componentDidMount == 'function' && (t.flags |= 4),
            (r = !1));
    } else {
      (o = t.stateNode),
        sa(e, t),
        (u = t.memoizedProps),
        (c = t.type === t.elementType ? u : pe(t.type, u)),
        (o.props = c),
        (k = t.pendingProps),
        (p = o.context),
        (s = n.contextType),
        typeof s == 'object' && s !== null
          ? (s = ae(s))
          : ((s = te(n) ? ot : G.current), (s = Ut(t, s)));
      var g = n.getDerivedStateFromProps;
      (v =
        typeof g == 'function' ||
        typeof o.getSnapshotBeforeUpdate == 'function') ||
        (typeof o.UNSAFE_componentWillReceiveProps != 'function' &&
          typeof o.componentWillReceiveProps != 'function') ||
        ((u !== k || p !== s) && Bu(t, o, r, s)),
        (Me = !1),
        (p = t.memoizedState),
        (o.state = p),
        In(t, r, o, l);
      var _ = t.memoizedState;
      u !== k || p !== _ || ee.current || Me
        ? (typeof g == 'function' && (Fr(t, n, g, r), (_ = t.memoizedState)),
          (c = Me || Vu(t, n, c, r, p, _, s))
            ? (v ||
                (typeof o.UNSAFE_componentWillUpdate != 'function' &&
                  typeof o.componentWillUpdate != 'function') ||
                (typeof o.componentWillUpdate == 'function' &&
                  o.componentWillUpdate(r, _, s),
                typeof o.UNSAFE_componentWillUpdate == 'function' &&
                  o.UNSAFE_componentWillUpdate(r, _, s)),
              typeof o.componentDidUpdate == 'function' && (t.flags |= 4),
              typeof o.getSnapshotBeforeUpdate == 'function' &&
                (t.flags |= 256))
            : (typeof o.componentDidUpdate != 'function' ||
                (u === e.memoizedProps && p === e.memoizedState) ||
                (t.flags |= 4),
              typeof o.getSnapshotBeforeUpdate != 'function' ||
                (u === e.memoizedProps && p === e.memoizedState) ||
                (t.flags |= 256),
              (t.memoizedProps = r),
              (t.memoizedState = _)),
          (o.props = r),
          (o.state = _),
          (o.context = s),
          (r = c))
        : (typeof o.componentDidUpdate != 'function' ||
            (u === e.memoizedProps && p === e.memoizedState) ||
            (t.flags |= 4),
          typeof o.getSnapshotBeforeUpdate != 'function' ||
            (u === e.memoizedProps && p === e.memoizedState) ||
            (t.flags |= 256),
          (r = !1));
    }
    return Si(e, t, n, r, i, l);
  }
  function Si(e, t, n, r, l, i) {
    Ea(e, t);
    var o = (t.flags & 64) !== 0;
    if (!r && !o) return l && Ru(t, n, !1), Pe(e, t, i);
    (r = t.stateNode), (Oc.current = t);
    var u =
      o && typeof n.getDerivedStateFromError != 'function' ? null : r.render();
    return (
      (t.flags |= 1),
      e !== null && o
        ? ((t.child = jr(t, e.child, null, i)), (t.child = jr(t, null, u, i)))
        : b(e, t, u, i),
      (t.memoizedState = r.state),
      l && Ru(t, n, !0),
      t.child
    );
  }
  function Zu(e) {
    var t = e.stateNode;
    t.pendingContext
      ? Du(e, t.pendingContext, t.pendingContext !== t.context)
      : t.context && Du(e, t.context, !1),
      vi(e, t.containerInfo);
  }
  var cr = { dehydrated: null, retryLane: 0 };
  function qu(e, t, n) {
    var r = t.pendingProps,
      l = j.current,
      i = !1,
      o;
    return (
      (o = (t.flags & 64) !== 0) ||
        (o = e !== null && e.memoizedState === null ? !1 : (l & 2) !== 0),
      o
        ? ((i = !0), (t.flags &= -65))
        : (e !== null && e.memoizedState === null) ||
          r.fallback === void 0 ||
          r.unstable_avoidThisFallback === !0 ||
          (l |= 1),
      I(j, l & 1),
      e === null
        ? (r.fallback !== void 0 && yi(t),
          (e = r.children),
          (l = r.fallback),
          i
            ? ((e = Ju(t, e, l, n)),
              (t.child.memoizedState = { baseLanes: n }),
              (t.memoizedState = cr),
              e)
            : typeof r.unstable_expectedLoadTime == 'number'
            ? ((e = Ju(t, e, l, n)),
              (t.child.memoizedState = { baseLanes: n }),
              (t.memoizedState = cr),
              (t.lanes = 33554432),
              e)
            : ((n = Eo({ mode: 'visible', children: e }, t.mode, n, null)),
              (n.return = t),
              (t.child = n)))
        : e.memoizedState !== null
        ? i
          ? ((r = es(e, t, r.children, r.fallback, n)),
            (i = t.child),
            (l = e.child.memoizedState),
            (i.memoizedState =
              l === null ? { baseLanes: n } : { baseLanes: l.baseLanes | n }),
            (i.childLanes = e.childLanes & ~n),
            (t.memoizedState = cr),
            r)
          : ((n = bu(e, t, r.children, n)), (t.memoizedState = null), n)
        : i
        ? ((r = es(e, t, r.children, r.fallback, n)),
          (i = t.child),
          (l = e.child.memoizedState),
          (i.memoizedState =
            l === null ? { baseLanes: n } : { baseLanes: l.baseLanes | n }),
          (i.childLanes = e.childLanes & ~n),
          (t.memoizedState = cr),
          r)
        : ((n = bu(e, t, r.children, n)), (t.memoizedState = null), n)
    );
  }
  function Ju(e, t, n, r) {
    var l = e.mode,
      i = e.child;
    return (
      (t = { mode: 'hidden', children: t }),
      (l & 2) === 0 && i !== null
        ? ((i.childLanes = 0), (i.pendingProps = t))
        : (i = Eo(t, l, 0, null)),
      (n = jt(n, l, r, null)),
      (i.return = e),
      (n.return = e),
      (i.sibling = n),
      (e.child = i),
      n
    );
  }
  function bu(e, t, n, r) {
    var l = e.child;
    return (
      (e = l.sibling),
      (n = Xe(l, { mode: 'visible', children: n })),
      (t.mode & 2) === 0 && (n.lanes = r),
      (n.return = t),
      (n.sibling = null),
      e !== null &&
        ((e.nextEffect = null),
        (e.flags = 8),
        (t.firstEffect = t.lastEffect = e)),
      (t.child = n)
    );
  }
  function es(e, t, n, r, l) {
    var i = t.mode,
      o = e.child;
    e = o.sibling;
    var u = { mode: 'hidden', children: n };
    return (
      (i & 2) === 0 && t.child !== o
        ? ((n = t.child),
          (n.childLanes = 0),
          (n.pendingProps = u),
          (o = n.lastEffect),
          o !== null
            ? ((t.firstEffect = n.firstEffect),
              (t.lastEffect = o),
              (o.nextEffect = null))
            : (t.firstEffect = t.lastEffect = null))
        : (n = Xe(o, u)),
      e !== null ? (r = Xe(e, r)) : ((r = jt(r, i, l, null)), (r.flags |= 2)),
      (r.return = t),
      (n.return = t),
      (n.sibling = r),
      (t.child = n),
      r
    );
  }
  function ts(e, t) {
    e.lanes |= t;
    var n = e.alternate;
    n !== null && (n.lanes |= t), ua(e.return, t);
  }
  function $l(e, t, n, r, l, i) {
    var o = e.memoizedState;
    o === null
      ? (e.memoizedState = {
          isBackwards: t,
          rendering: null,
          renderingStartTime: 0,
          last: r,
          tail: n,
          tailMode: l,
          lastEffect: i,
        })
      : ((o.isBackwards = t),
        (o.rendering = null),
        (o.renderingStartTime = 0),
        (o.last = r),
        (o.tail = n),
        (o.tailMode = l),
        (o.lastEffect = i));
  }
  function ns(e, t, n) {
    var r = t.pendingProps,
      l = r.revealOrder,
      i = r.tail;
    if ((b(e, t, r.children, n), (r = j.current), (r & 2) !== 0))
      (r = (r & 1) | 2), (t.flags |= 64);
    else {
      if (e !== null && (e.flags & 64) !== 0)
        e: for (e = t.child; e !== null; ) {
          if (e.tag === 13) e.memoizedState !== null && ts(e, n);
          else if (e.tag === 19) ts(e, n);
          else if (e.child !== null) {
            (e.child.return = e), (e = e.child);
            continue;
          }
          if (e === t) break e;
          for (; e.sibling === null; ) {
            if (e.return === null || e.return === t) break e;
            e = e.return;
          }
          (e.sibling.return = e.return), (e = e.sibling);
        }
      r &= 1;
    }
    if ((I(j, r), (t.mode & 2) === 0)) t.memoizedState = null;
    else
      switch (l) {
        case 'forwards':
          for (n = t.child, l = null; n !== null; )
            (e = n.alternate),
              e !== null && Ir(e) === null && (l = n),
              (n = n.sibling);
          (n = l),
            n === null
              ? ((l = t.child), (t.child = null))
              : ((l = n.sibling), (n.sibling = null)),
            $l(t, !1, l, n, i, t.lastEffect);
          break;
        case 'backwards':
          for (n = null, l = t.child, t.child = null; l !== null; ) {
            if (((e = l.alternate), e !== null && Ir(e) === null)) {
              t.child = l;
              break;
            }
            (e = l.sibling), (l.sibling = n), (n = l), (l = e);
          }
          $l(t, !0, n, null, i, t.lastEffect);
          break;
        case 'together':
          $l(t, !1, null, null, void 0, t.lastEffect);
          break;
        default:
          t.memoizedState = null;
      }
    return t.child;
  }
  function Pe(e, t, n) {
    if (
      (e !== null && (t.dependencies = e.dependencies),
      (Wn |= t.lanes),
      (n & t.childLanes) !== 0)
    ) {
      if (e !== null && t.child !== e.child) throw Error(y(153));
      if (t.child !== null) {
        for (
          e = t.child, n = Xe(e, e.pendingProps), t.child = n, n.return = t;
          e.sibling !== null;

        )
          (e = e.sibling),
            (n = n.sibling = Xe(e, e.pendingProps)),
            (n.return = t);
        n.sibling = null;
      }
      return t.child;
    }
    return null;
  }
  var _a, ki, Ca, xa;
  _a = function (e, t) {
    for (var n = t.child; n !== null; ) {
      if (n.tag === 5 || n.tag === 6) e.appendChild(n.stateNode);
      else if (n.tag !== 4 && n.child !== null) {
        (n.child.return = n), (n = n.child);
        continue;
      }
      if (n === t) break;
      for (; n.sibling === null; ) {
        if (n.return === null || n.return === t) return;
        n = n.return;
      }
      (n.sibling.return = n.return), (n = n.sibling);
    }
  };
  ki = function () {};
  Ca = function (e, t, n, r) {
    var l = e.memoizedProps;
    if (l !== r) {
      (e = t.stateNode), rt(we.current);
      var i = null;
      switch (n) {
        case 'input':
          (l = Xl(e, l)), (r = Xl(e, r)), (i = []);
          break;
        case 'option':
          (l = ql(e, l)), (r = ql(e, r)), (i = []);
          break;
        case 'select':
          (l = R({}, l, { value: void 0 })),
            (r = R({}, r, { value: void 0 })),
            (i = []);
          break;
        case 'textarea':
          (l = Jl(e, l)), (r = Jl(e, r)), (i = []);
          break;
        default:
          typeof l.onClick != 'function' &&
            typeof r.onClick == 'function' &&
            (e.onclick = Or);
      }
      ti(n, r);
      var o;
      n = null;
      for (c in l)
        if (!r.hasOwnProperty(c) && l.hasOwnProperty(c) && l[c] != null)
          if (c === 'style') {
            var u = l[c];
            for (o in u) u.hasOwnProperty(o) && (n || (n = {}), (n[o] = ''));
          } else
            c !== 'dangerouslySetInnerHTML' &&
              c !== 'children' &&
              c !== 'suppressContentEditableWarning' &&
              c !== 'suppressHydrationWarning' &&
              c !== 'autoFocus' &&
              (Nn.hasOwnProperty(c)
                ? i || (i = [])
                : (i = i || []).push(c, null));
      for (c in r) {
        var s = r[c];
        if (
          ((u = l != null ? l[c] : void 0),
          r.hasOwnProperty(c) && s !== u && (s != null || u != null))
        )
          if (c === 'style')
            if (u) {
              for (o in u)
                !u.hasOwnProperty(o) ||
                  (s && s.hasOwnProperty(o)) ||
                  (n || (n = {}), (n[o] = ''));
              for (o in s)
                s.hasOwnProperty(o) &&
                  u[o] !== s[o] &&
                  (n || (n = {}), (n[o] = s[o]));
            } else n || (i || (i = []), i.push(c, n)), (n = s);
          else
            c === 'dangerouslySetInnerHTML'
              ? ((s = s ? s.__html : void 0),
                (u = u ? u.__html : void 0),
                s != null && u !== s && (i = i || []).push(c, s))
              : c === 'children'
              ? (typeof s != 'string' && typeof s != 'number') ||
                (i = i || []).push(c, '' + s)
              : c !== 'suppressContentEditableWarning' &&
                c !== 'suppressHydrationWarning' &&
                (Nn.hasOwnProperty(c)
                  ? (s != null && c === 'onScroll' && z('scroll', e),
                    i || u === s || (i = []))
                  : typeof s == 'object' && s !== null && s.$$typeof === Ai
                  ? s.toString()
                  : (i = i || []).push(c, s));
      }
      n && (i = i || []).push('style', n);
      var c = i;
      (t.updateQueue = c) && (t.flags |= 4);
    }
  };
  xa = function (e, t, n, r) {
    n !== r && (t.flags |= 4);
  };
  function un(e, t) {
    if (!Se)
      switch (e.tailMode) {
        case 'hidden':
          t = e.tail;
          for (var n = null; t !== null; )
            t.alternate !== null && (n = t), (t = t.sibling);
          n === null ? (e.tail = null) : (n.sibling = null);
          break;
        case 'collapsed':
          n = e.tail;
          for (var r = null; n !== null; )
            n.alternate !== null && (r = n), (n = n.sibling);
          r === null
            ? t || e.tail === null
              ? (e.tail = null)
              : (e.tail.sibling = null)
            : (r.sibling = null);
      }
  }
  function Lc(e, t, n) {
    var r = t.pendingProps;
    switch (t.tag) {
      case 2:
      case 16:
      case 15:
      case 0:
      case 11:
      case 7:
      case 8:
      case 12:
      case 9:
      case 14:
        return null;
      case 1:
        return te(t.type) && Mr(), null;
      case 3:
        return (
          Bt(),
          D(ee),
          D(G),
          ao(),
          (r = t.stateNode),
          r.pendingContext &&
            ((r.context = r.pendingContext), (r.pendingContext = null)),
          (e === null || e.child === null) &&
            (fr(t) ? (t.flags |= 4) : r.hydrate || (t.flags |= 256)),
          ki(t),
          null
        );
      case 5:
        so(t);
        var l = rt(Vn.current);
        if (((n = t.type), e !== null && t.stateNode != null))
          Ca(e, t, n, r, l), e.ref !== t.ref && (t.flags |= 128);
        else {
          if (!r) {
            if (t.stateNode === null) throw Error(y(166));
            return null;
          }
          if (((e = rt(we.current)), fr(t))) {
            (r = t.stateNode), (n = t.type);
            var i = t.memoizedProps;
            switch (((r[Re] = t), (r[Lr] = i), n)) {
              case 'dialog':
                z('cancel', r), z('close', r);
                break;
              case 'iframe':
              case 'object':
              case 'embed':
                z('load', r);
                break;
              case 'video':
              case 'audio':
                for (e = 0; e < dn.length; e++) z(dn[e], r);
                break;
              case 'source':
                z('error', r);
                break;
              case 'img':
              case 'image':
              case 'link':
                z('error', r), z('load', r);
                break;
              case 'details':
                z('toggle', r);
                break;
              case 'input':
                lu(r, i), z('invalid', r);
                break;
              case 'select':
                (r._wrapperState = { wasMultiple: !!i.multiple }),
                  z('invalid', r);
                break;
              case 'textarea':
                ou(r, i), z('invalid', r);
            }
            ti(n, i), (e = null);
            for (var o in i)
              i.hasOwnProperty(o) &&
                ((l = i[o]),
                o === 'children'
                  ? typeof l == 'string'
                    ? r.textContent !== l && (e = ['children', l])
                    : typeof l == 'number' &&
                      r.textContent !== '' + l &&
                      (e = ['children', '' + l])
                  : Nn.hasOwnProperty(o) &&
                    l != null &&
                    o === 'onScroll' &&
                    z('scroll', r));
            switch (n) {
              case 'input':
                tr(r), iu(r, i, !0);
                break;
              case 'textarea':
                tr(r), uu(r);
                break;
              case 'select':
              case 'option':
                break;
              default:
                typeof i.onClick == 'function' && (r.onclick = Or);
            }
            (r = e), (t.updateQueue = r), r !== null && (t.flags |= 4);
          } else {
            switch (
              ((o = l.nodeType === 9 ? l : l.ownerDocument),
              e === bl.html && (e = gs(n)),
              e === bl.html
                ? n === 'script'
                  ? ((e = o.createElement('div')),
                    (e.innerHTML = '<script></script>'),
                    (e = e.removeChild(e.firstChild)))
                  : typeof r.is == 'string'
                  ? (e = o.createElement(n, { is: r.is }))
                  : ((e = o.createElement(n)),
                    n === 'select' &&
                      ((o = e),
                      r.multiple
                        ? (o.multiple = !0)
                        : r.size && (o.size = r.size)))
                : (e = o.createElementNS(e, n)),
              (e[Re] = t),
              (e[Lr] = r),
              _a(e, t, !1, !1),
              (t.stateNode = e),
              (o = ni(n, r)),
              n)
            ) {
              case 'dialog':
                z('cancel', e), z('close', e), (l = r);
                break;
              case 'iframe':
              case 'object':
              case 'embed':
                z('load', e), (l = r);
                break;
              case 'video':
              case 'audio':
                for (l = 0; l < dn.length; l++) z(dn[l], e);
                l = r;
                break;
              case 'source':
                z('error', e), (l = r);
                break;
              case 'img':
              case 'image':
              case 'link':
                z('error', e), z('load', e), (l = r);
                break;
              case 'details':
                z('toggle', e), (l = r);
                break;
              case 'input':
                lu(e, r), (l = Xl(e, r)), z('invalid', e);
                break;
              case 'option':
                l = ql(e, r);
                break;
              case 'select':
                (e._wrapperState = { wasMultiple: !!r.multiple }),
                  (l = R({}, r, { value: void 0 })),
                  z('invalid', e);
                break;
              case 'textarea':
                ou(e, r), (l = Jl(e, r)), z('invalid', e);
                break;
              default:
                l = r;
            }
            ti(n, l);
            var u = l;
            for (i in u)
              if (u.hasOwnProperty(i)) {
                var s = u[i];
                i === 'style'
                  ? ks(e, s)
                  : i === 'dangerouslySetInnerHTML'
                  ? ((s = s ? s.__html : void 0), s != null && ws(e, s))
                  : i === 'children'
                  ? typeof s == 'string'
                    ? (n !== 'textarea' || s !== '') && Tn(e, s)
                    : typeof s == 'number' && Tn(e, '' + s)
                  : i !== 'suppressContentEditableWarning' &&
                    i !== 'suppressHydrationWarning' &&
                    i !== 'autoFocus' &&
                    (Nn.hasOwnProperty(i)
                      ? s != null && i === 'onScroll' && z('scroll', e)
                      : s != null && Fi(e, i, s, o));
              }
            switch (n) {
              case 'input':
                tr(e), iu(e, r, !1);
                break;
              case 'textarea':
                tr(e), uu(e);
                break;
              case 'option':
                r.value != null && e.setAttribute('value', '' + We(r.value));
                break;
              case 'select':
                (e.multiple = !!r.multiple),
                  (i = r.value),
                  i != null
                    ? Tt(e, !!r.multiple, i, !1)
                    : r.defaultValue != null &&
                      Tt(e, !!r.multiple, r.defaultValue, !0);
                break;
              default:
                typeof l.onClick == 'function' && (e.onclick = Or);
            }
            Js(n, r) && (t.flags |= 4);
          }
          t.ref !== null && (t.flags |= 128);
        }
        return null;
      case 6:
        if (e && t.stateNode != null) xa(e, t, e.memoizedProps, r);
        else {
          if (typeof r != 'string' && t.stateNode === null) throw Error(y(166));
          (n = rt(Vn.current)),
            rt(we.current),
            fr(t)
              ? ((r = t.stateNode),
                (n = t.memoizedProps),
                (r[Re] = t),
                r.nodeValue !== n && (t.flags |= 4))
              : ((r = (n.nodeType === 9 ? n : n.ownerDocument).createTextNode(
                  r
                )),
                (r[Re] = t),
                (t.stateNode = r));
        }
        return null;
      case 13:
        return (
          D(j),
          (r = t.memoizedState),
          (t.flags & 64) !== 0
            ? ((t.lanes = n), t)
            : ((r = r !== null),
              (n = !1),
              e === null
                ? t.memoizedProps.fallback !== void 0 && fr(t)
                : (n = e.memoizedState !== null),
              r &&
                !n &&
                (t.mode & 2) !== 0 &&
                ((e === null &&
                  t.memoizedProps.unstable_avoidThisFallback !== !0) ||
                (j.current & 1) !== 0
                  ? H === 0 && (H = 3)
                  : ((H === 0 || H === 3) && (H = 4),
                    Z === null ||
                      ((Wn & 134217727) === 0 && (Wt & 134217727) === 0) ||
                      Rt(Z, X))),
              (r || n) && (t.flags |= 4),
              null)
        );
      case 4:
        return Bt(), ki(t), e === null && Gs(t.stateNode.containerInfo), null;
      case 10:
        return oo(t), null;
      case 17:
        return te(t.type) && Mr(), null;
      case 19:
        if ((D(j), (r = t.memoizedState), r === null)) return null;
        if (((i = (t.flags & 64) !== 0), (o = r.rendering), o === null))
          if (i) un(r, !1);
          else {
            if (H !== 0 || (e !== null && (e.flags & 64) !== 0))
              for (e = t.child; e !== null; ) {
                if (((o = Ir(e)), o !== null)) {
                  for (
                    t.flags |= 64,
                      un(r, !1),
                      i = o.updateQueue,
                      i !== null && ((t.updateQueue = i), (t.flags |= 4)),
                      r.lastEffect === null && (t.firstEffect = null),
                      t.lastEffect = r.lastEffect,
                      r = n,
                      n = t.child;
                    n !== null;

                  )
                    (i = n),
                      (e = r),
                      (i.flags &= 2),
                      (i.nextEffect = null),
                      (i.firstEffect = null),
                      (i.lastEffect = null),
                      (o = i.alternate),
                      o === null
                        ? ((i.childLanes = 0),
                          (i.lanes = e),
                          (i.child = null),
                          (i.memoizedProps = null),
                          (i.memoizedState = null),
                          (i.updateQueue = null),
                          (i.dependencies = null),
                          (i.stateNode = null))
                        : ((i.childLanes = o.childLanes),
                          (i.lanes = o.lanes),
                          (i.child = o.child),
                          (i.memoizedProps = o.memoizedProps),
                          (i.memoizedState = o.memoizedState),
                          (i.updateQueue = o.updateQueue),
                          (i.type = o.type),
                          (e = o.dependencies),
                          (i.dependencies =
                            e === null
                              ? null
                              : {
                                  lanes: e.lanes,
                                  firstContext: e.firstContext,
                                })),
                      (n = n.sibling);
                  return I(j, (j.current & 1) | 2), t.child;
                }
                e = e.sibling;
              }
            r.tail !== null &&
              K() > Ni &&
              ((t.flags |= 64), (i = !0), un(r, !1), (t.lanes = 33554432));
          }
        else {
          if (!i)
            if (((e = Ir(o)), e !== null)) {
              if (
                ((t.flags |= 64),
                (i = !0),
                (n = e.updateQueue),
                n !== null && ((t.updateQueue = n), (t.flags |= 4)),
                un(r, !0),
                r.tail === null &&
                  r.tailMode === 'hidden' &&
                  !o.alternate &&
                  !Se)
              )
                return (
                  (t = t.lastEffect = r.lastEffect),
                  t !== null && (t.nextEffect = null),
                  null
                );
            } else
              2 * K() - r.renderingStartTime > Ni &&
                n !== 1073741824 &&
                ((t.flags |= 64), (i = !0), un(r, !1), (t.lanes = 33554432));
          r.isBackwards
            ? ((o.sibling = t.child), (t.child = o))
            : ((n = r.last),
              n !== null ? (n.sibling = o) : (t.child = o),
              (r.last = o));
        }
        return r.tail !== null
          ? ((n = r.tail),
            (r.rendering = n),
            (r.tail = n.sibling),
            (r.lastEffect = t.lastEffect),
            (r.renderingStartTime = K()),
            (n.sibling = null),
            (t = j.current),
            I(j, i ? (t & 1) | 2 : t & 1),
            n)
          : null;
      case 23:
      case 24:
        return (
          So(),
          e !== null &&
            (e.memoizedState !== null) != (t.memoizedState !== null) &&
            r.mode !== 'unstable-defer-without-hiding' &&
            (t.flags |= 4),
          null
        );
    }
    throw Error(y(156, t.tag));
  }
  function Mc(e) {
    switch (e.tag) {
      case 1:
        te(e.type) && Mr();
        var t = e.flags;
        return t & 4096 ? ((e.flags = (t & -4097) | 64), e) : null;
      case 3:
        if ((Bt(), D(ee), D(G), ao(), (t = e.flags), (t & 64) !== 0))
          throw Error(y(285));
        return (e.flags = (t & -4097) | 64), e;
      case 5:
        return so(e), null;
      case 13:
        return (
          D(j),
          (t = e.flags),
          t & 4096 ? ((e.flags = (t & -4097) | 64), e) : null
        );
      case 19:
        return D(j), null;
      case 4:
        return Bt(), null;
      case 10:
        return oo(e), null;
      case 23:
      case 24:
        return So(), null;
      default:
        return null;
    }
  }
  function vo(e, t) {
    try {
      var n = '',
        r = t;
      do (n += cf(r)), (r = r.return);
      while (r);
      var l = n;
    } catch (i) {
      l =
        `
Error generating stack: ` +
        i.message +
        `
` +
        i.stack;
    }
    return { value: e, source: t, stack: l };
  }
  function Ei(e, t) {
    try {
      console.error(t.value);
    } catch (n) {
      setTimeout(function () {
        throw n;
      });
    }
  }
  var zc = typeof WeakMap == 'function' ? WeakMap : Map;
  function Pa(e, t, n) {
    (n = Ve(-1, n)), (n.tag = 3), (n.payload = { element: null });
    var r = t.value;
    return (
      (n.callback = function () {
        Wr || ((Wr = !0), (Ti = r)), Ei(e, t);
      }),
      n
    );
  }
  function Na(e, t, n) {
    (n = Ve(-1, n)), (n.tag = 3);
    var r = e.type.getDerivedStateFromError;
    if (typeof r == 'function') {
      var l = t.value;
      n.payload = function () {
        return Ei(e, t), r(l);
      };
    }
    var i = e.stateNode;
    return (
      i !== null &&
        typeof i.componentDidCatch == 'function' &&
        (n.callback = function () {
          typeof r != 'function' &&
            (ge === null ? (ge = new Set([this])) : ge.add(this), Ei(e, t));
          var o = t.stack;
          this.componentDidCatch(t.value, {
            componentStack: o !== null ? o : '',
          });
        }),
      n
    );
  }
  var Dc = typeof WeakSet == 'function' ? WeakSet : Set;
  function rs(e) {
    var t = e.ref;
    if (t !== null)
      if (typeof t == 'function')
        try {
          t(null);
        } catch (n) {
          He(e, n);
        }
      else t.current = null;
  }
  function Rc(e, t) {
    switch (t.tag) {
      case 0:
      case 11:
      case 15:
      case 22:
        return;
      case 1:
        if (t.flags & 256 && e !== null) {
          var n = e.memoizedProps,
            r = e.memoizedState;
          (e = t.stateNode),
            (t = e.getSnapshotBeforeUpdate(
              t.elementType === t.type ? n : pe(t.type, n),
              r
            )),
            (e.__reactInternalSnapshotBeforeUpdate = t);
        }
        return;
      case 3:
        t.flags & 256 && no(t.stateNode.containerInfo);
        return;
      case 5:
      case 6:
      case 4:
      case 17:
        return;
    }
    throw Error(y(163));
  }
  function Fc(e, t, n) {
    switch (n.tag) {
      case 0:
      case 11:
      case 15:
      case 22:
        if (
          ((t = n.updateQueue),
          (t = t !== null ? t.lastEffect : null),
          t !== null)
        ) {
          e = t = t.next;
          do {
            if ((e.tag & 3) === 3) {
              var r = e.create;
              e.destroy = r();
            }
            e = e.next;
          } while (e !== t);
        }
        if (
          ((t = n.updateQueue),
          (t = t !== null ? t.lastEffect : null),
          t !== null)
        ) {
          e = t = t.next;
          do {
            var l = e;
            (r = l.next),
              (l = l.tag),
              (l & 4) !== 0 && (l & 1) !== 0 && (ja(n, e), Hc(n, e)),
              (e = r);
          } while (e !== t);
        }
        return;
      case 1:
        (e = n.stateNode),
          n.flags & 4 &&
            (t === null
              ? e.componentDidMount()
              : ((r =
                  n.elementType === n.type
                    ? t.memoizedProps
                    : pe(n.type, t.memoizedProps)),
                e.componentDidUpdate(
                  r,
                  t.memoizedState,
                  e.__reactInternalSnapshotBeforeUpdate
                ))),
          (t = n.updateQueue),
          t !== null && Uu(n, t, e);
        return;
      case 3:
        if (((t = n.updateQueue), t !== null)) {
          if (((e = null), n.child !== null))
            switch (n.child.tag) {
              case 5:
                e = n.child.stateNode;
                break;
              case 1:
                e = n.child.stateNode;
            }
          Uu(n, t, e);
        }
        return;
      case 5:
        (e = n.stateNode),
          t === null && n.flags & 4 && Js(n.type, n.memoizedProps) && e.focus();
        return;
      case 6:
        return;
      case 4:
        return;
      case 12:
        return;
      case 13:
        n.memoizedState === null &&
          ((n = n.alternate),
          n !== null &&
            ((n = n.memoizedState),
            n !== null && ((n = n.dehydrated), n !== null && Ms(n))));
        return;
      case 19:
      case 17:
      case 20:
      case 21:
      case 23:
      case 24:
        return;
    }
    throw Error(y(163));
  }
  function ls(e, t) {
    for (var n = e; ; ) {
      if (n.tag === 5) {
        var r = n.stateNode;
        if (t)
          (r = r.style),
            typeof r.setProperty == 'function'
              ? r.setProperty('display', 'none', 'important')
              : (r.display = 'none');
        else {
          r = n.stateNode;
          var l = n.memoizedProps.style;
          (l = l != null && l.hasOwnProperty('display') ? l.display : null),
            (r.style.display = Ss('display', l));
        }
      } else if (n.tag === 6) n.stateNode.nodeValue = t ? '' : n.memoizedProps;
      else if (
        ((n.tag !== 23 && n.tag !== 24) ||
          n.memoizedState === null ||
          n === e) &&
        n.child !== null
      ) {
        (n.child.return = n), (n = n.child);
        continue;
      }
      if (n === e) break;
      for (; n.sibling === null; ) {
        if (n.return === null || n.return === e) return;
        n = n.return;
      }
      (n.sibling.return = n.return), (n = n.sibling);
    }
  }
  function is(e, t) {
    if (it && typeof it.onCommitFiberUnmount == 'function')
      try {
        it.onCommitFiberUnmount(ro, t);
      } catch {}
    switch (t.tag) {
      case 0:
      case 11:
      case 14:
      case 15:
      case 22:
        if (
          ((e = t.updateQueue), e !== null && ((e = e.lastEffect), e !== null))
        ) {
          var n = (e = e.next);
          do {
            var r = n,
              l = r.destroy;
            if (((r = r.tag), l !== void 0))
              if ((r & 4) !== 0) ja(t, n);
              else {
                r = t;
                try {
                  l();
                } catch (i) {
                  He(r, i);
                }
              }
            n = n.next;
          } while (n !== e);
        }
        break;
      case 1:
        if (
          (rs(t),
          (e = t.stateNode),
          typeof e.componentWillUnmount == 'function')
        )
          try {
            (e.props = t.memoizedProps),
              (e.state = t.memoizedState),
              e.componentWillUnmount();
          } catch (i) {
            He(t, i);
          }
        break;
      case 5:
        rs(t);
        break;
      case 4:
        Ta(e, t);
    }
  }
  function os(e) {
    (e.alternate = null),
      (e.child = null),
      (e.dependencies = null),
      (e.firstEffect = null),
      (e.lastEffect = null),
      (e.memoizedProps = null),
      (e.memoizedState = null),
      (e.pendingProps = null),
      (e.return = null),
      (e.updateQueue = null);
  }
  function us(e) {
    return e.tag === 5 || e.tag === 3 || e.tag === 4;
  }
  function ss(e) {
    e: {
      for (var t = e.return; t !== null; ) {
        if (us(t)) break e;
        t = t.return;
      }
      throw Error(y(160));
    }
    var n = t;
    switch (((t = n.stateNode), n.tag)) {
      case 5:
        var r = !1;
        break;
      case 3:
        (t = t.containerInfo), (r = !0);
        break;
      case 4:
        (t = t.containerInfo), (r = !0);
        break;
      default:
        throw Error(y(161));
    }
    n.flags & 16 && (Tn(t, ''), (n.flags &= -17));
    e: t: for (n = e; ; ) {
      for (; n.sibling === null; ) {
        if (n.return === null || us(n.return)) {
          n = null;
          break e;
        }
        n = n.return;
      }
      for (
        n.sibling.return = n.return, n = n.sibling;
        n.tag !== 5 && n.tag !== 6 && n.tag !== 18;

      ) {
        if (n.flags & 2 || n.child === null || n.tag === 4) continue t;
        (n.child.return = n), (n = n.child);
      }
      if (!(n.flags & 2)) {
        n = n.stateNode;
        break e;
      }
    }
    r ? _i(e, n, t) : Ci(e, n, t);
  }
  function _i(e, t, n) {
    var r = e.tag,
      l = r === 5 || r === 6;
    if (l)
      (e = l ? e.stateNode : e.stateNode.instance),
        t
          ? n.nodeType === 8
            ? n.parentNode.insertBefore(e, t)
            : n.insertBefore(e, t)
          : (n.nodeType === 8
              ? ((t = n.parentNode), t.insertBefore(e, n))
              : ((t = n), t.appendChild(e)),
            (n = n._reactRootContainer),
            n != null || t.onclick !== null || (t.onclick = Or));
    else if (r !== 4 && ((e = e.child), e !== null))
      for (_i(e, t, n), e = e.sibling; e !== null; )
        _i(e, t, n), (e = e.sibling);
  }
  function Ci(e, t, n) {
    var r = e.tag,
      l = r === 5 || r === 6;
    if (l)
      (e = l ? e.stateNode : e.stateNode.instance),
        t ? n.insertBefore(e, t) : n.appendChild(e);
    else if (r !== 4 && ((e = e.child), e !== null))
      for (Ci(e, t, n), e = e.sibling; e !== null; )
        Ci(e, t, n), (e = e.sibling);
  }
  function Ta(e, t) {
    for (var n = t, r = !1, l, i; ; ) {
      if (!r) {
        r = n.return;
        e: for (;;) {
          if (r === null) throw Error(y(160));
          switch (((l = r.stateNode), r.tag)) {
            case 5:
              i = !1;
              break e;
            case 3:
              (l = l.containerInfo), (i = !0);
              break e;
            case 4:
              (l = l.containerInfo), (i = !0);
              break e;
          }
          r = r.return;
        }
        r = !0;
      }
      if (n.tag === 5 || n.tag === 6) {
        e: for (var o = e, u = n, s = u; ; )
          if ((is(o, s), s.child !== null && s.tag !== 4))
            (s.child.return = s), (s = s.child);
          else {
            if (s === u) break e;
            for (; s.sibling === null; ) {
              if (s.return === null || s.return === u) break e;
              s = s.return;
            }
            (s.sibling.return = s.return), (s = s.sibling);
          }
        i
          ? ((o = l),
            (u = n.stateNode),
            o.nodeType === 8 ? o.parentNode.removeChild(u) : o.removeChild(u))
          : l.removeChild(n.stateNode);
      } else if (n.tag === 4) {
        if (n.child !== null) {
          (l = n.stateNode.containerInfo),
            (i = !0),
            (n.child.return = n),
            (n = n.child);
          continue;
        }
      } else if ((is(e, n), n.child !== null)) {
        (n.child.return = n), (n = n.child);
        continue;
      }
      if (n === t) break;
      for (; n.sibling === null; ) {
        if (n.return === null || n.return === t) return;
        (n = n.return), n.tag === 4 && (r = !1);
      }
      (n.sibling.return = n.return), (n = n.sibling);
    }
  }
  function Hl(e, t) {
    switch (t.tag) {
      case 0:
      case 11:
      case 14:
      case 15:
      case 22:
        var n = t.updateQueue;
        if (((n = n !== null ? n.lastEffect : null), n !== null)) {
          var r = (n = n.next);
          do
            (r.tag & 3) === 3 &&
              ((e = r.destroy), (r.destroy = void 0), e !== void 0 && e()),
              (r = r.next);
          while (r !== n);
        }
        return;
      case 1:
        return;
      case 5:
        if (((n = t.stateNode), n != null)) {
          r = t.memoizedProps;
          var l = e !== null ? e.memoizedProps : r;
          e = t.type;
          var i = t.updateQueue;
          if (((t.updateQueue = null), i !== null)) {
            for (
              n[Lr] = r,
                e === 'input' &&
                  r.type === 'radio' &&
                  r.name != null &&
                  vs(n, r),
                ni(e, l),
                t = ni(e, r),
                l = 0;
              l < i.length;
              l += 2
            ) {
              var o = i[l],
                u = i[l + 1];
              o === 'style'
                ? ks(n, u)
                : o === 'dangerouslySetInnerHTML'
                ? ws(n, u)
                : o === 'children'
                ? Tn(n, u)
                : Fi(n, o, u, t);
            }
            switch (e) {
              case 'input':
                Gl(n, r);
                break;
              case 'textarea':
                ys(n, r);
                break;
              case 'select':
                (e = n._wrapperState.wasMultiple),
                  (n._wrapperState.wasMultiple = !!r.multiple),
                  (i = r.value),
                  i != null
                    ? Tt(n, !!r.multiple, i, !1)
                    : e !== !!r.multiple &&
                      (r.defaultValue != null
                        ? Tt(n, !!r.multiple, r.defaultValue, !0)
                        : Tt(n, !!r.multiple, r.multiple ? [] : '', !1));
            }
          }
        }
        return;
      case 6:
        if (t.stateNode === null) throw Error(y(162));
        t.stateNode.nodeValue = t.memoizedProps;
        return;
      case 3:
        (n = t.stateNode), n.hydrate && ((n.hydrate = !1), Ms(n.containerInfo));
        return;
      case 12:
        return;
      case 13:
        t.memoizedState !== null && ((wo = K()), ls(t.child, !0)), as(t);
        return;
      case 19:
        as(t);
        return;
      case 17:
        return;
      case 23:
      case 24:
        ls(t, t.memoizedState !== null);
        return;
    }
    throw Error(y(163));
  }
  function as(e) {
    var t = e.updateQueue;
    if (t !== null) {
      e.updateQueue = null;
      var n = e.stateNode;
      n === null && (n = e.stateNode = new Dc()),
        t.forEach(function (r) {
          var l = Yc.bind(null, e, r);
          n.has(r) || (n.add(r), r.then(l, l));
        });
    }
  }
  function jc(e, t) {
    return e !== null &&
      ((e = e.memoizedState), e === null || e.dehydrated !== null)
      ? ((t = t.memoizedState), t !== null && t.dehydrated === null)
      : !1;
  }
  var Ic = Math.ceil,
    Hr = ft.ReactCurrentDispatcher,
    yo = ft.ReactCurrentOwner,
    C = 0,
    Z = null,
    B = null,
    X = 0,
    st = 0,
    xi = Ge(0),
    H = 0,
    rl = null,
    Ht = 0,
    Wn = 0,
    Wt = 0,
    go = 0,
    Pi = null,
    wo = 0,
    Ni = 1 / 0;
  function Qt() {
    Ni = K() + 500;
  }
  var w = null,
    Wr = !1,
    Ti = null,
    ge = null,
    Ke = !1,
    Cn = null,
    pn = 90,
    Oi = [],
    Li = [],
    Ne = null,
    xn = 0,
    Mi = null,
    wr = -1,
    Ce = 0,
    Sr = 0,
    Pn = null,
    kr = !1;
  function ne() {
    return (C & 48) !== 0 ? K() : wr !== -1 ? wr : (wr = K());
  }
  function Ae(e) {
    if (((e = e.mode), (e & 2) === 0)) return 1;
    if ((e & 4) === 0) return Vt() === 99 ? 1 : 2;
    if ((Ce === 0 && (Ce = Ht), Cc.transition !== 0)) {
      Sr !== 0 && (Sr = Pi !== null ? Pi.pendingLanes : 0), (e = Ce);
      var t = 4186112 & ~Sr;
      return (
        (t &= -t),
        t === 0 && ((e = 4186112 & ~e), (t = e & -e), t === 0 && (t = 8192)),
        t
      );
    }
    return (
      (e = Vt()),
      (C & 4) !== 0 && e === 98
        ? (e = Nr(12, Ce))
        : ((e = Nf(e)), (e = Nr(e, Ce))),
      e
    );
  }
  function $e(e, t, n) {
    if (50 < xn) throw ((xn = 0), (Mi = null), Error(y(185)));
    if (((e = ll(e, t)), e === null)) return null;
    Zr(e, t, n), e === Z && ((Wt |= t), H === 4 && Rt(e, X));
    var r = Vt();
    t === 1
      ? (C & 8) !== 0 && (C & 48) === 0
        ? zi(e)
        : (fe(e, n), C === 0 && (Qt(), ke()))
      : ((C & 4) === 0 ||
          (r !== 98 && r !== 99) ||
          (Ne === null ? (Ne = new Set([e])) : Ne.add(e)),
        fe(e, n)),
      (Pi = e);
  }
  function ll(e, t) {
    e.lanes |= t;
    var n = e.alternate;
    for (n !== null && (n.lanes |= t), n = e, e = e.return; e !== null; )
      (e.childLanes |= t),
        (n = e.alternate),
        n !== null && (n.childLanes |= t),
        (n = e),
        (e = e.return);
    return n.tag === 3 ? n.stateNode : null;
  }
  function fe(e, t) {
    for (
      var n = e.callbackNode,
        r = e.suspendedLanes,
        l = e.pingedLanes,
        i = e.expirationTimes,
        o = e.pendingLanes;
      0 < o;

    ) {
      var u = 31 - Qe(o),
        s = 1 << u,
        c = i[u];
      if (c === -1) {
        if ((s & r) === 0 || (s & l) !== 0) {
          (c = t), wt(s);
          var v = M;
          i[u] = 10 <= v ? c + 250 : 6 <= v ? c + 5e3 : -1;
        }
      } else c <= t && (e.expiredLanes |= s);
      o &= ~s;
    }
    if (((r = zn(e, e === Z ? X : 0)), (t = M), r === 0))
      n !== null &&
        (n !== Ul && pi(n), (e.callbackNode = null), (e.callbackPriority = 0));
    else {
      if (n !== null) {
        if (e.callbackPriority === t) return;
        n !== Ul && pi(n);
      }
      t === 15
        ? ((n = zi.bind(null, e)),
          _e === null ? ((_e = [n]), (gr = lo(tl, oa))) : _e.push(n),
          (n = Ul))
        : t === 14
        ? (n = jn(99, zi.bind(null, e)))
        : ((n = Tf(t)), (n = jn(n, Oa.bind(null, e)))),
        (e.callbackPriority = t),
        (e.callbackNode = n);
    }
  }
  function Oa(e) {
    if (((wr = -1), (Sr = Ce = 0), (C & 48) !== 0)) throw Error(y(327));
    var t = e.callbackNode;
    if (Ze() && e.callbackNode !== t) return null;
    var n = zn(e, e === Z ? X : 0);
    if (n === 0) return null;
    var r = n,
      l = C;
    C |= 16;
    var i = Da();
    (Z !== e || X !== r) && (Qt(), Ft(e, r));
    do
      try {
        Bc();
        break;
      } catch (u) {
        za(e, u);
      }
    while (1);
    if (
      (io(),
      (Hr.current = i),
      (C = l),
      B !== null ? (r = 0) : ((Z = null), (X = 0), (r = H)),
      (Ht & Wt) !== 0)
    )
      Ft(e, 0);
    else if (r !== 0) {
      if (
        (r === 2 &&
          ((C |= 64),
          e.hydrate && ((e.hydrate = !1), no(e.containerInfo)),
          (n = Us(e)),
          n !== 0 && (r = mn(e, n))),
        r === 1)
      )
        throw ((t = rl), Ft(e, 0), Rt(e, n), fe(e, K()), t);
      switch (
        ((e.finishedWork = e.current.alternate), (e.finishedLanes = n), r)
      ) {
        case 0:
        case 1:
          throw Error(y(345));
        case 2:
          be(e);
          break;
        case 3:
          if (
            (Rt(e, n), (n & 62914560) === n && ((r = wo + 500 - K()), 10 < r))
          ) {
            if (zn(e, 0) !== 0) break;
            if (((l = e.suspendedLanes), (l & n) !== n)) {
              ne(), (e.pingedLanes |= e.suspendedLanes & l);
              break;
            }
            e.timeoutHandle = Lu(be.bind(null, e), r);
            break;
          }
          be(e);
          break;
        case 4:
          if ((Rt(e, n), (n & 4186112) === n)) break;
          for (r = e.eventTimes, l = -1; 0 < n; ) {
            var o = 31 - Qe(n);
            (i = 1 << o), (o = r[o]), o > l && (l = o), (n &= ~i);
          }
          if (
            ((n = l),
            (n = K() - n),
            (n =
              (120 > n
                ? 120
                : 480 > n
                ? 480
                : 1080 > n
                ? 1080
                : 1920 > n
                ? 1920
                : 3e3 > n
                ? 3e3
                : 4320 > n
                ? 4320
                : 1960 * Ic(n / 1960)) - n),
            10 < n)
          ) {
            e.timeoutHandle = Lu(be.bind(null, e), n);
            break;
          }
          be(e);
          break;
        case 5:
          be(e);
          break;
        default:
          throw Error(y(329));
      }
    }
    return fe(e, K()), e.callbackNode === t ? Oa.bind(null, e) : null;
  }
  function Rt(e, t) {
    for (
      t &= ~go,
        t &= ~Wt,
        e.suspendedLanes |= t,
        e.pingedLanes &= ~t,
        e = e.expirationTimes;
      0 < t;

    ) {
      var n = 31 - Qe(t),
        r = 1 << n;
      (e[n] = -1), (t &= ~r);
    }
  }
  function zi(e) {
    if ((C & 48) !== 0) throw Error(y(327));
    if ((Ze(), e === Z && (e.expiredLanes & X) !== 0)) {
      var t = X,
        n = mn(e, t);
      (Ht & Wt) !== 0 && ((t = zn(e, t)), (n = mn(e, t)));
    } else (t = zn(e, 0)), (n = mn(e, t));
    if (
      (e.tag !== 0 &&
        n === 2 &&
        ((C |= 64),
        e.hydrate && ((e.hydrate = !1), no(e.containerInfo)),
        (t = Us(e)),
        t !== 0 && (n = mn(e, t))),
      n === 1)
    )
      throw ((n = rl), Ft(e, 0), Rt(e, t), fe(e, K()), n);
    return (
      (e.finishedWork = e.current.alternate),
      (e.finishedLanes = t),
      be(e),
      fe(e, K()),
      null
    );
  }
  function Uc() {
    if (Ne !== null) {
      var e = Ne;
      (Ne = null),
        e.forEach(function (t) {
          (t.expiredLanes |= 24 & t.pendingLanes), fe(t, K());
        });
    }
    ke();
  }
  function La(e, t) {
    var n = C;
    C |= 1;
    try {
      return e(t);
    } finally {
      (C = n), C === 0 && (Qt(), ke());
    }
  }
  function Ma(e, t) {
    var n = C;
    (C &= -2), (C |= 8);
    try {
      return e(t);
    } finally {
      (C = n), C === 0 && (Qt(), ke());
    }
  }
  function dr(e, t) {
    I(xi, st), (st |= t), (Ht |= t);
  }
  function So() {
    (st = xi.current), D(xi);
  }
  function Ft(e, t) {
    (e.finishedWork = null), (e.finishedLanes = 0);
    var n = e.timeoutHandle;
    if ((n !== -1 && ((e.timeoutHandle = -1), gc(n)), B !== null))
      for (n = B.return; n !== null; ) {
        var r = n;
        switch (r.tag) {
          case 1:
            (r = r.type.childContextTypes), r != null && Mr();
            break;
          case 3:
            Bt(), D(ee), D(G), ao();
            break;
          case 5:
            so(r);
            break;
          case 4:
            Bt();
            break;
          case 13:
            D(j);
            break;
          case 19:
            D(j);
            break;
          case 10:
            oo(r);
            break;
          case 23:
          case 24:
            So();
        }
        n = n.return;
      }
    (Z = e),
      (B = Xe(e.current, null)),
      (X = st = Ht = t),
      (H = 0),
      (rl = null),
      (go = Wt = Wn = 0);
  }
  function za(e, t) {
    do {
      var n = B;
      try {
        if ((io(), (En.current = $r), Ur)) {
          for (var r = U.memoizedState; r !== null; ) {
            var l = r.queue;
            l !== null && (l.pending = null), (r = r.next);
          }
          Ur = !1;
        }
        if (
          ((Bn = 0),
          ($ = Y = U = null),
          (_n = !1),
          (yo.current = null),
          n === null || n.return === null)
        ) {
          (H = 1), (rl = t), (B = null);
          break;
        }
        e: {
          var i = e,
            o = n.return,
            u = n,
            s = t;
          if (
            ((t = X),
            (u.flags |= 2048),
            (u.firstEffect = u.lastEffect = null),
            s !== null && typeof s == 'object' && typeof s.then == 'function')
          ) {
            var c = s;
            if ((u.mode & 2) === 0) {
              var v = u.alternate;
              v
                ? ((u.updateQueue = v.updateQueue),
                  (u.memoizedState = v.memoizedState),
                  (u.lanes = v.lanes))
                : ((u.updateQueue = null), (u.memoizedState = null));
            }
            var k = (j.current & 1) !== 0,
              p = o;
            do {
              var g;
              if ((g = p.tag === 13)) {
                var _ = p.memoizedState;
                if (_ !== null) g = _.dehydrated !== null;
                else {
                  var E = p.memoizedProps;
                  g =
                    E.fallback === void 0
                      ? !1
                      : E.unstable_avoidThisFallback !== !0
                      ? !0
                      : !k;
                }
              }
              if (g) {
                var d = p.updateQueue;
                if (d === null) {
                  var a = new Set();
                  a.add(c), (p.updateQueue = a);
                } else d.add(c);
                if ((p.mode & 2) === 0) {
                  if (
                    ((p.flags |= 64),
                    (u.flags |= 16384),
                    (u.flags &= -2981),
                    u.tag === 1)
                  )
                    if (u.alternate === null) u.tag = 17;
                    else {
                      var f = Ve(-1, 1);
                      (f.tag = 2), Be(u, f);
                    }
                  u.lanes |= 1;
                  break e;
                }
                (s = void 0), (u = t);
                var m = i.pingCache;
                if (
                  (m === null
                    ? ((m = i.pingCache = new zc()),
                      (s = new Set()),
                      m.set(c, s))
                    : ((s = m.get(c)),
                      s === void 0 && ((s = new Set()), m.set(c, s))),
                  !s.has(u))
                ) {
                  s.add(u);
                  var h = Qc.bind(null, i, c, u);
                  c.then(h, h);
                }
                (p.flags |= 4096), (p.lanes = t);
                break e;
              }
              p = p.return;
            } while (p !== null);
            s = Error(
              (Nt(u.type) || 'A React component') +
                ` suspended while rendering, but no fallback UI was specified.

Add a <Suspense fallback=...> component higher in the tree to provide a loading indicator or placeholder to display.`
            );
          }
          H !== 5 && (H = 2), (s = vo(s, u)), (p = o);
          do {
            switch (p.tag) {
              case 3:
                (i = s), (p.flags |= 4096), (t &= -t), (p.lanes |= t);
                var x = Pa(p, i, t);
                Iu(p, x);
                break e;
              case 1:
                i = s;
                var S = p.type,
                  P = p.stateNode;
                if (
                  (p.flags & 64) === 0 &&
                  (typeof S.getDerivedStateFromError == 'function' ||
                    (P !== null &&
                      typeof P.componentDidCatch == 'function' &&
                      (ge === null || !ge.has(P))))
                ) {
                  (p.flags |= 4096), (t &= -t), (p.lanes |= t);
                  var T = Na(p, i, t);
                  Iu(p, T);
                  break e;
                }
            }
            p = p.return;
          } while (p !== null);
        }
        Fa(n);
      } catch (N) {
        (t = N), B === n && n !== null && (B = n = n.return);
        continue;
      }
      break;
    } while (1);
  }
  function Da() {
    var e = Hr.current;
    return (Hr.current = $r), e === null ? $r : e;
  }
  function mn(e, t) {
    var n = C;
    C |= 16;
    var r = Da();
    (Z === e && X === t) || Ft(e, t);
    do
      try {
        Vc();
        break;
      } catch (l) {
        za(e, l);
      }
    while (1);
    if ((io(), (C = n), (Hr.current = r), B !== null)) throw Error(y(261));
    return (Z = null), (X = 0), H;
  }
  function Vc() {
    for (; B !== null; ) Ra(B);
  }
  function Bc() {
    for (; B !== null && !kc(); ) Ra(B);
  }
  function Ra(e) {
    var t = Ia(e.alternate, e, st);
    (e.memoizedProps = e.pendingProps),
      t === null ? Fa(e) : (B = t),
      (yo.current = null);
  }
  function Fa(e) {
    var t = e;
    do {
      var n = t.alternate;
      if (((e = t.return), (t.flags & 2048) === 0)) {
        if (((n = Lc(n, t, st)), n !== null)) {
          B = n;
          return;
        }
        if (
          ((n = t),
          (n.tag !== 24 && n.tag !== 23) ||
            n.memoizedState === null ||
            (st & 1073741824) !== 0 ||
            (n.mode & 4) === 0)
        ) {
          for (var r = 0, l = n.child; l !== null; )
            (r |= l.lanes | l.childLanes), (l = l.sibling);
          n.childLanes = r;
        }
        e !== null &&
          (e.flags & 2048) === 0 &&
          (e.firstEffect === null && (e.firstEffect = t.firstEffect),
          t.lastEffect !== null &&
            (e.lastEffect !== null && (e.lastEffect.nextEffect = t.firstEffect),
            (e.lastEffect = t.lastEffect)),
          1 < t.flags &&
            (e.lastEffect !== null
              ? (e.lastEffect.nextEffect = t)
              : (e.firstEffect = t),
            (e.lastEffect = t)));
      } else {
        if (((n = Mc(t)), n !== null)) {
          (n.flags &= 2047), (B = n);
          return;
        }
        e !== null &&
          ((e.firstEffect = e.lastEffect = null), (e.flags |= 2048));
      }
      if (((t = t.sibling), t !== null)) {
        B = t;
        return;
      }
      B = t = e;
    } while (t !== null);
    H === 0 && (H = 5);
  }
  function be(e) {
    var t = Vt();
    return ut(99, Ac.bind(null, e, t)), null;
  }
  function Ac(e, t) {
    do Ze();
    while (Cn !== null);
    if ((C & 48) !== 0) throw Error(y(327));
    var n = e.finishedWork;
    if (n === null) return null;
    if (((e.finishedWork = null), (e.finishedLanes = 0), n === e.current))
      throw Error(y(177));
    e.callbackNode = null;
    var r = n.lanes | n.childLanes,
      l = r,
      i = e.pendingLanes & ~l;
    (e.pendingLanes = l),
      (e.suspendedLanes = 0),
      (e.pingedLanes = 0),
      (e.expiredLanes &= l),
      (e.mutableReadLanes &= l),
      (e.entangledLanes &= l),
      (l = e.entanglements);
    for (var o = e.eventTimes, u = e.expirationTimes; 0 < i; ) {
      var s = 31 - Qe(i),
        c = 1 << s;
      (l[s] = 0), (o[s] = -1), (u[s] = -1), (i &= ~c);
    }
    if (
      (Ne !== null && (r & 24) === 0 && Ne.has(e) && Ne.delete(e),
      e === Z && ((B = Z = null), (X = 0)),
      1 < n.flags
        ? n.lastEffect !== null
          ? ((n.lastEffect.nextEffect = n), (r = n.firstEffect))
          : (r = n)
        : (r = n.firstEffect),
      r !== null)
    ) {
      if (
        ((l = C), (C |= 32), (yo.current = null), (Fl = mr), (o = Cu()), si(o))
      ) {
        if ('selectionStart' in o)
          u = { start: o.selectionStart, end: o.selectionEnd };
        else
          e: if (
            ((u = ((u = o.ownerDocument) && u.defaultView) || window),
            (c = u.getSelection && u.getSelection()) && c.rangeCount !== 0)
          ) {
            (u = c.anchorNode),
              (i = c.anchorOffset),
              (s = c.focusNode),
              (c = c.focusOffset);
            try {
              u.nodeType, s.nodeType;
            } catch {
              u = null;
              break e;
            }
            var v = 0,
              k = -1,
              p = -1,
              g = 0,
              _ = 0,
              E = o,
              d = null;
            t: for (;;) {
              for (
                var a;
                E !== u || (i !== 0 && E.nodeType !== 3) || (k = v + i),
                  E !== s || (c !== 0 && E.nodeType !== 3) || (p = v + c),
                  E.nodeType === 3 && (v += E.nodeValue.length),
                  (a = E.firstChild) !== null;

              )
                (d = E), (E = a);
              for (;;) {
                if (E === o) break t;
                if (
                  (d === u && ++g === i && (k = v),
                  d === s && ++_ === c && (p = v),
                  (a = E.nextSibling) !== null)
                )
                  break;
                (E = d), (d = E.parentNode);
              }
              E = a;
            }
            u = k === -1 || p === -1 ? null : { start: k, end: p };
          } else u = null;
        u = u || { start: 0, end: 0 };
      } else u = null;
      (jl = { focusedElem: o, selectionRange: u }),
        (mr = !1),
        (Pn = null),
        (kr = !1),
        (w = r);
      do
        try {
          $c();
        } catch (N) {
          if (w === null) throw Error(y(330));
          He(w, N), (w = w.nextEffect);
        }
      while (w !== null);
      (Pn = null), (w = r);
      do
        try {
          for (o = e; w !== null; ) {
            var f = w.flags;
            if ((f & 16 && Tn(w.stateNode, ''), f & 128)) {
              var m = w.alternate;
              if (m !== null) {
                var h = m.ref;
                h !== null &&
                  (typeof h == 'function' ? h(null) : (h.current = null));
              }
            }
            switch (f & 1038) {
              case 2:
                ss(w), (w.flags &= -3);
                break;
              case 6:
                ss(w), (w.flags &= -3), Hl(w.alternate, w);
                break;
              case 1024:
                w.flags &= -1025;
                break;
              case 1028:
                (w.flags &= -1025), Hl(w.alternate, w);
                break;
              case 4:
                Hl(w.alternate, w);
                break;
              case 8:
                (u = w), Ta(o, u);
                var x = u.alternate;
                os(u), x !== null && os(x);
            }
            w = w.nextEffect;
          }
        } catch (N) {
          if (w === null) throw Error(y(330));
          He(w, N), (w = w.nextEffect);
        }
      while (w !== null);
      if (
        ((h = jl),
        (m = Cu()),
        (f = h.focusedElem),
        (o = h.selectionRange),
        m !== f &&
          f &&
          f.ownerDocument &&
          Ys(f.ownerDocument.documentElement, f))
      ) {
        for (
          o !== null &&
            si(f) &&
            ((m = o.start),
            (h = o.end),
            h === void 0 && (h = m),
            ('selectionStart' in f)
              ? ((f.selectionStart = m),
                (f.selectionEnd = Math.min(h, f.value.length)))
              : ((h =
                  ((m = f.ownerDocument || document) && m.defaultView) ||
                  window),
                h.getSelection &&
                  ((h = h.getSelection()),
                  (u = f.textContent.length),
                  (x = Math.min(o.start, u)),
                  (o = o.end === void 0 ? x : Math.min(o.end, u)),
                  !h.extend && x > o && ((u = o), (o = x), (x = u)),
                  (u = _u(f, x)),
                  (i = _u(f, o)),
                  u &&
                    i &&
                    (h.rangeCount !== 1 ||
                      h.anchorNode !== u.node ||
                      h.anchorOffset !== u.offset ||
                      h.focusNode !== i.node ||
                      h.focusOffset !== i.offset) &&
                    ((m = m.createRange()),
                    m.setStart(u.node, u.offset),
                    h.removeAllRanges(),
                    x > o
                      ? (h.addRange(m), h.extend(i.node, i.offset))
                      : (m.setEnd(i.node, i.offset), h.addRange(m)))))),
            m = [],
            h = f;
          (h = h.parentNode);

        )
          h.nodeType === 1 &&
            m.push({ element: h, left: h.scrollLeft, top: h.scrollTop });
        for (
          typeof f.focus == 'function' && f.focus(), f = 0;
          f < m.length;
          f++
        )
          (h = m[f]),
            (h.element.scrollLeft = h.left),
            (h.element.scrollTop = h.top);
      }
      (mr = !!Fl), (jl = Fl = null), (e.current = n), (w = r);
      do
        try {
          for (f = e; w !== null; ) {
            var S = w.flags;
            if ((S & 36 && Fc(f, w.alternate, w), S & 128)) {
              m = void 0;
              var P = w.ref;
              if (P !== null) {
                var T = w.stateNode;
                switch (w.tag) {
                  case 5:
                    m = T;
                    break;
                  default:
                    m = T;
                }
                typeof P == 'function' ? P(m) : (P.current = m);
              }
            }
            w = w.nextEffect;
          }
        } catch (N) {
          if (w === null) throw Error(y(330));
          He(w, N), (w = w.nextEffect);
        }
      while (w !== null);
      (w = null), _c(), (C = l);
    } else e.current = n;
    if (Ke) (Ke = !1), (Cn = e), (pn = t);
    else
      for (w = r; w !== null; )
        (t = w.nextEffect),
          (w.nextEffect = null),
          w.flags & 8 && ((S = w), (S.sibling = null), (S.stateNode = null)),
          (w = t);
    if (
      ((r = e.pendingLanes),
      r === 0 && (ge = null),
      r === 1 ? (e === Mi ? xn++ : ((xn = 0), (Mi = e))) : (xn = 0),
      (n = n.stateNode),
      it && typeof it.onCommitFiberRoot == 'function')
    )
      try {
        it.onCommitFiberRoot(ro, n, void 0, (n.current.flags & 64) === 64);
      } catch {}
    if ((fe(e, K()), Wr)) throw ((Wr = !1), (e = Ti), (Ti = null), e);
    return (C & 8) !== 0 || ke(), null;
  }
  function $c() {
    for (; w !== null; ) {
      var e = w.alternate;
      kr ||
        Pn === null ||
        ((w.flags & 8) !== 0
          ? fu(w, Pn) && (kr = !0)
          : w.tag === 13 && jc(e, w) && fu(w, Pn) && (kr = !0));
      var t = w.flags;
      (t & 256) !== 0 && Rc(e, w),
        (t & 512) === 0 ||
          Ke ||
          ((Ke = !0),
          jn(97, function () {
            return Ze(), null;
          })),
        (w = w.nextEffect);
    }
  }
  function Ze() {
    if (pn !== 90) {
      var e = 97 < pn ? 97 : pn;
      return (pn = 90), ut(e, Wc);
    }
    return !1;
  }
  function Hc(e, t) {
    Oi.push(t, e),
      Ke ||
        ((Ke = !0),
        jn(97, function () {
          return Ze(), null;
        }));
  }
  function ja(e, t) {
    Li.push(t, e),
      Ke ||
        ((Ke = !0),
        jn(97, function () {
          return Ze(), null;
        }));
  }
  function Wc() {
    if (Cn === null) return !1;
    var e = Cn;
    if (((Cn = null), (C & 48) !== 0)) throw Error(y(331));
    var t = C;
    C |= 32;
    var n = Li;
    Li = [];
    for (var r = 0; r < n.length; r += 2) {
      var l = n[r],
        i = n[r + 1],
        o = l.destroy;
      if (((l.destroy = void 0), typeof o == 'function'))
        try {
          o();
        } catch (s) {
          if (i === null) throw Error(y(330));
          He(i, s);
        }
    }
    for (n = Oi, Oi = [], r = 0; r < n.length; r += 2) {
      (l = n[r]), (i = n[r + 1]);
      try {
        var u = l.create;
        l.destroy = u();
      } catch (s) {
        if (i === null) throw Error(y(330));
        He(i, s);
      }
    }
    for (u = e.current.firstEffect; u !== null; )
      (e = u.nextEffect),
        (u.nextEffect = null),
        u.flags & 8 && ((u.sibling = null), (u.stateNode = null)),
        (u = e);
    return (C = t), ke(), !0;
  }
  function fs(e, t, n) {
    (t = vo(n, t)),
      (t = Pa(e, t, 1)),
      Be(e, t),
      (t = ne()),
      (e = ll(e, 1)),
      e !== null && (Zr(e, 1, t), fe(e, t));
  }
  function He(e, t) {
    if (e.tag === 3) fs(e, e, t);
    else
      for (var n = e.return; n !== null; ) {
        if (n.tag === 3) {
          fs(n, e, t);
          break;
        } else if (n.tag === 1) {
          var r = n.stateNode;
          if (
            typeof n.type.getDerivedStateFromError == 'function' ||
            (typeof r.componentDidCatch == 'function' &&
              (ge === null || !ge.has(r)))
          ) {
            e = vo(t, e);
            var l = Na(n, e, 1);
            if ((Be(n, l), (l = ne()), (n = ll(n, 1)), n !== null))
              Zr(n, 1, l), fe(n, l);
            else if (
              typeof r.componentDidCatch == 'function' &&
              (ge === null || !ge.has(r))
            )
              try {
                r.componentDidCatch(t, e);
              } catch {}
            break;
          }
        }
        n = n.return;
      }
  }
  function Qc(e, t, n) {
    var r = e.pingCache;
    r !== null && r.delete(t),
      (t = ne()),
      (e.pingedLanes |= e.suspendedLanes & n),
      Z === e &&
        (X & n) === n &&
        (H === 4 || (H === 3 && (X & 62914560) === X && 500 > K() - wo)
          ? Ft(e, 0)
          : (go |= n)),
      fe(e, t);
  }
  function Yc(e, t) {
    var n = e.stateNode;
    n !== null && n.delete(t),
      (t = 0),
      t === 0 &&
        ((t = e.mode),
        (t & 2) === 0
          ? (t = 1)
          : (t & 4) === 0
          ? (t = Vt() === 99 ? 1 : 2)
          : (Ce === 0 && (Ce = Ht),
            (t = St(62914560 & ~Ce)),
            t === 0 && (t = 4194304))),
      (n = ne()),
      (e = ll(e, t)),
      e !== null && (Zr(e, t, n), fe(e, n));
  }
  var Ia;
  Ia = function (e, t, n) {
    var r = t.lanes;
    if (e !== null)
      if (e.memoizedProps !== t.pendingProps || ee.current) me = !0;
      else if ((n & r) !== 0) me = (e.flags & 16384) !== 0;
      else {
        switch (((me = !1), t.tag)) {
          case 3:
            Zu(t), Bl();
            break;
          case 5:
            Au(t);
            break;
          case 1:
            te(t.type) && yr(t);
            break;
          case 4:
            vi(t, t.stateNode.containerInfo);
            break;
          case 10:
            r = t.memoizedProps.value;
            var l = t.type._context;
            I(zr, l._currentValue), (l._currentValue = r);
            break;
          case 13:
            if (t.memoizedState !== null)
              return (n & t.child.childLanes) !== 0
                ? qu(e, t, n)
                : (I(j, j.current & 1),
                  (t = Pe(e, t, n)),
                  t !== null ? t.sibling : null);
            I(j, j.current & 1);
            break;
          case 19:
            if (((r = (n & t.childLanes) !== 0), (e.flags & 64) !== 0)) {
              if (r) return ns(e, t, n);
              t.flags |= 64;
            }
            if (
              ((l = t.memoizedState),
              l !== null &&
                ((l.rendering = null), (l.tail = null), (l.lastEffect = null)),
              I(j, j.current),
              r)
            )
              break;
            return null;
          case 23:
          case 24:
            return (t.lanes = 0), Al(e, t, n);
        }
        return Pe(e, t, n);
      }
    else me = !1;
    switch (((t.lanes = 0), t.tag)) {
      case 2:
        if (
          ((r = t.type),
          e !== null &&
            ((e.alternate = null), (t.alternate = null), (t.flags |= 2)),
          (e = t.pendingProps),
          (l = Ut(t, G.current)),
          zt(t, n),
          (l = co(null, t, r, e, l, n)),
          (t.flags |= 1),
          typeof l == 'object' &&
            l !== null &&
            typeof l.render == 'function' &&
            l.$$typeof === void 0)
        ) {
          if (
            ((t.tag = 1),
            (t.memoizedState = null),
            (t.updateQueue = null),
            te(r))
          ) {
            var i = !0;
            yr(t);
          } else i = !1;
          (t.memoizedState =
            l.state !== null && l.state !== void 0 ? l.state : null),
            uo(t);
          var o = r.getDerivedStateFromProps;
          typeof o == 'function' && Fr(t, r, o, e),
            (l.updater = nl),
            (t.stateNode = l),
            (l._reactInternals = t),
            hi(t, r, e, n),
            (t = Si(null, t, r, !0, i, n));
        } else (t.tag = 0), b(null, t, l, n), (t = t.child);
        return t;
      case 16:
        l = t.elementType;
        e: {
          switch (
            (e !== null &&
              ((e.alternate = null), (t.alternate = null), (t.flags |= 2)),
            (e = t.pendingProps),
            (i = l._init),
            (l = i(l._payload)),
            (t.type = l),
            (i = t.tag = Xc(l)),
            (e = pe(l, e)),
            i)
          ) {
            case 0:
              t = wi(null, t, l, e, n);
              break e;
            case 1:
              t = Gu(null, t, l, e, n);
              break e;
            case 11:
              t = Ku(null, t, l, e, n);
              break e;
            case 14:
              t = Xu(null, t, l, pe(l.type, e), r, n);
              break e;
          }
          throw Error(y(306, l, ''));
        }
        return t;
      case 0:
        return (
          (r = t.type),
          (l = t.pendingProps),
          (l = t.elementType === r ? l : pe(r, l)),
          wi(e, t, r, l, n)
        );
      case 1:
        return (
          (r = t.type),
          (l = t.pendingProps),
          (l = t.elementType === r ? l : pe(r, l)),
          Gu(e, t, r, l, n)
        );
      case 3:
        if ((Zu(t), (r = t.updateQueue), e === null || r === null))
          throw Error(y(282));
        if (
          ((r = t.pendingProps),
          (l = t.memoizedState),
          (l = l !== null ? l.element : null),
          sa(e, t),
          In(t, r, null, n),
          (r = t.memoizedState.element),
          r === l)
        )
          Bl(), (t = Pe(e, t, n));
        else {
          if (
            ((l = t.stateNode),
            (i = l.hydrate) &&
              ((Fe = Mt(t.stateNode.containerInfo.firstChild)),
              (xe = t),
              (i = Se = !0)),
            i)
          ) {
            if (((e = l.mutableSourceEagerHydrationData), e != null))
              for (l = 0; l < e.length; l += 2)
                (i = e[l]),
                  (i._workInProgressVersionPrimary = e[l + 1]),
                  Dt.push(i);
            for (n = da(t, null, r, n), t.child = n; n; )
              (n.flags = (n.flags & -3) | 1024), (n = n.sibling);
          } else b(e, t, r, n), Bl();
          t = t.child;
        }
        return t;
      case 5:
        return (
          Au(t),
          e === null && yi(t),
          (r = t.type),
          (l = t.pendingProps),
          (i = e !== null ? e.memoizedProps : null),
          (o = l.children),
          ci(r, l) ? (o = null) : i !== null && ci(r, i) && (t.flags |= 16),
          Ea(e, t),
          b(e, t, o, n),
          t.child
        );
      case 6:
        return e === null && yi(t), null;
      case 13:
        return qu(e, t, n);
      case 4:
        return (
          vi(t, t.stateNode.containerInfo),
          (r = t.pendingProps),
          e === null ? (t.child = jr(t, null, r, n)) : b(e, t, r, n),
          t.child
        );
      case 11:
        return (
          (r = t.type),
          (l = t.pendingProps),
          (l = t.elementType === r ? l : pe(r, l)),
          Ku(e, t, r, l, n)
        );
      case 7:
        return b(e, t, t.pendingProps, n), t.child;
      case 8:
        return b(e, t, t.pendingProps.children, n), t.child;
      case 12:
        return b(e, t, t.pendingProps.children, n), t.child;
      case 10:
        e: {
          (r = t.type._context),
            (l = t.pendingProps),
            (o = t.memoizedProps),
            (i = l.value);
          var u = t.type._context;
          if ((I(zr, u._currentValue), (u._currentValue = i), o !== null))
            if (
              ((u = o.value),
              (i = oe(u, i)
                ? 0
                : (typeof r._calculateChangedBits == 'function'
                    ? r._calculateChangedBits(u, i)
                    : 1073741823) | 0),
              i === 0)
            ) {
              if (o.children === l.children && !ee.current) {
                t = Pe(e, t, n);
                break e;
              }
            } else
              for (u = t.child, u !== null && (u.return = t); u !== null; ) {
                var s = u.dependencies;
                if (s !== null) {
                  o = u.child;
                  for (var c = s.firstContext; c !== null; ) {
                    if (c.context === r && (c.observedBits & i) !== 0) {
                      u.tag === 1 &&
                        ((c = Ve(-1, n & -n)), (c.tag = 2), Be(u, c)),
                        (u.lanes |= n),
                        (c = u.alternate),
                        c !== null && (c.lanes |= n),
                        ua(u.return, n),
                        (s.lanes |= n);
                      break;
                    }
                    c = c.next;
                  }
                } else o = u.tag === 10 && u.type === t.type ? null : u.child;
                if (o !== null) o.return = u;
                else
                  for (o = u; o !== null; ) {
                    if (o === t) {
                      o = null;
                      break;
                    }
                    if (((u = o.sibling), u !== null)) {
                      (u.return = o.return), (o = u);
                      break;
                    }
                    o = o.return;
                  }
                u = o;
              }
          b(e, t, l.children, n), (t = t.child);
        }
        return t;
      case 9:
        return (
          (l = t.type),
          (i = t.pendingProps),
          (r = i.children),
          zt(t, n),
          (l = ae(l, i.unstable_observedBits)),
          (r = r(l)),
          (t.flags |= 1),
          b(e, t, r, n),
          t.child
        );
      case 14:
        return (
          (l = t.type),
          (i = pe(l, t.pendingProps)),
          (i = pe(l.type, i)),
          Xu(e, t, l, i, r, n)
        );
      case 15:
        return ka(e, t, t.type, t.pendingProps, r, n);
      case 17:
        return (
          (r = t.type),
          (l = t.pendingProps),
          (l = t.elementType === r ? l : pe(r, l)),
          e !== null &&
            ((e.alternate = null), (t.alternate = null), (t.flags |= 2)),
          (t.tag = 1),
          te(r) ? ((e = !0), yr(t)) : (e = !1),
          zt(t, n),
          fa(t, r, l),
          hi(t, r, l, n),
          Si(null, t, r, !0, e, n)
        );
      case 19:
        return ns(e, t, n);
      case 23:
        return Al(e, t, n);
      case 24:
        return Al(e, t, n);
    }
    throw Error(y(156, t.tag));
  };
  function Kc(e, t, n, r) {
    (this.tag = e),
      (this.key = n),
      (this.sibling =
        this.child =
        this.return =
        this.stateNode =
        this.type =
        this.elementType =
          null),
      (this.index = 0),
      (this.ref = null),
      (this.pendingProps = t),
      (this.dependencies =
        this.memoizedState =
        this.updateQueue =
        this.memoizedProps =
          null),
      (this.mode = r),
      (this.flags = 0),
      (this.lastEffect = this.firstEffect = this.nextEffect = null),
      (this.childLanes = this.lanes = 0),
      (this.alternate = null);
  }
  function ue(e, t, n, r) {
    return new Kc(e, t, n, r);
  }
  function ko(e) {
    return (e = e.prototype), !(!e || !e.isReactComponent);
  }
  function Xc(e) {
    if (typeof e == 'function') return ko(e) ? 1 : 0;
    if (e != null) {
      if (((e = e.$$typeof), e === Kr)) return 11;
      if (e === Xr) return 14;
    }
    return 2;
  }
  function Xe(e, t) {
    var n = e.alternate;
    return (
      n === null
        ? ((n = ue(e.tag, t, e.key, e.mode)),
          (n.elementType = e.elementType),
          (n.type = e.type),
          (n.stateNode = e.stateNode),
          (n.alternate = e),
          (e.alternate = n))
        : ((n.pendingProps = t),
          (n.type = e.type),
          (n.flags = 0),
          (n.nextEffect = null),
          (n.firstEffect = null),
          (n.lastEffect = null)),
      (n.childLanes = e.childLanes),
      (n.lanes = e.lanes),
      (n.child = e.child),
      (n.memoizedProps = e.memoizedProps),
      (n.memoizedState = e.memoizedState),
      (n.updateQueue = e.updateQueue),
      (t = e.dependencies),
      (n.dependencies =
        t === null ? null : { lanes: t.lanes, firstContext: t.firstContext }),
      (n.sibling = e.sibling),
      (n.index = e.index),
      (n.ref = e.ref),
      n
    );
  }
  function Er(e, t, n, r, l, i) {
    var o = 2;
    if (((r = e), typeof e == 'function')) ko(e) && (o = 1);
    else if (typeof e == 'string') o = 5;
    else
      e: switch (e) {
        case ze:
          return jt(n.children, l, i, t);
        case ps:
          (o = 8), (l |= 16);
          break;
        case ji:
          (o = 8), (l |= 1);
          break;
        case hn:
          return (
            (e = ue(12, n, t, l | 8)),
            (e.elementType = hn),
            (e.type = hn),
            (e.lanes = i),
            e
          );
        case vn:
          return (
            (e = ue(13, n, t, l)),
            (e.type = vn),
            (e.elementType = vn),
            (e.lanes = i),
            e
          );
        case _r:
          return (e = ue(19, n, t, l)), (e.elementType = _r), (e.lanes = i), e;
        case $i:
          return Eo(n, l, i, t);
        case Kl:
          return (e = ue(24, n, t, l)), (e.elementType = Kl), (e.lanes = i), e;
        default:
          if (typeof e == 'object' && e !== null)
            switch (e.$$typeof) {
              case Ii:
                o = 10;
                break e;
              case Ui:
                o = 9;
                break e;
              case Kr:
                o = 11;
                break e;
              case Xr:
                o = 14;
                break e;
              case Vi:
                (o = 16), (r = null);
                break e;
              case Bi:
                o = 22;
                break e;
            }
          throw Error(y(130, e == null ? e : typeof e, ''));
      }
    return (
      (t = ue(o, n, t, l)), (t.elementType = e), (t.type = r), (t.lanes = i), t
    );
  }
  function jt(e, t, n, r) {
    return (e = ue(7, e, r, t)), (e.lanes = n), e;
  }
  function Eo(e, t, n, r) {
    return (e = ue(23, e, r, t)), (e.elementType = $i), (e.lanes = n), e;
  }
  function Wl(e, t, n) {
    return (e = ue(6, e, null, t)), (e.lanes = n), e;
  }
  function Ql(e, t, n) {
    return (
      (t = ue(4, e.children !== null ? e.children : [], e.key, t)),
      (t.lanes = n),
      (t.stateNode = {
        containerInfo: e.containerInfo,
        pendingChildren: null,
        implementation: e.implementation,
      }),
      t
    );
  }
  function Gc(e, t, n) {
    (this.tag = t),
      (this.containerInfo = e),
      (this.finishedWork =
        this.pingCache =
        this.current =
        this.pendingChildren =
          null),
      (this.timeoutHandle = -1),
      (this.pendingContext = this.context = null),
      (this.hydrate = n),
      (this.callbackNode = null),
      (this.callbackPriority = 0),
      (this.eventTimes = Ol(0)),
      (this.expirationTimes = Ol(-1)),
      (this.entangledLanes =
        this.finishedLanes =
        this.mutableReadLanes =
        this.expiredLanes =
        this.pingedLanes =
        this.suspendedLanes =
        this.pendingLanes =
          0),
      (this.entanglements = Ol(0)),
      (this.mutableSourceEagerHydrationData = null);
  }
  function Zc(e, t, n) {
    var r =
      3 < arguments.length && arguments[3] !== void 0 ? arguments[3] : null;
    return {
      $$typeof: et,
      key: r == null ? null : '' + r,
      children: e,
      containerInfo: t,
      implementation: n,
    };
  }
  function Qr(e, t, n, r) {
    var l = t.current,
      i = ne(),
      o = Ae(l);
    e: if (n) {
      n = n._reactInternals;
      t: {
        if (ct(n) !== n || n.tag !== 1) throw Error(y(170));
        var u = n;
        do {
          switch (u.tag) {
            case 3:
              u = u.stateNode.context;
              break t;
            case 1:
              if (te(u.type)) {
                u = u.stateNode.__reactInternalMemoizedMergedChildContext;
                break t;
              }
          }
          u = u.return;
        } while (u !== null);
        throw Error(y(171));
      }
      if (n.tag === 1) {
        var s = n.type;
        if (te(s)) {
          n = ea(n, s, u);
          break e;
        }
      }
      n = u;
    } else n = Ye;
    return (
      t.context === null ? (t.context = n) : (t.pendingContext = n),
      (t = Ve(i, o)),
      (t.payload = { element: e }),
      (r = r === void 0 ? null : r),
      r !== null && (t.callback = r),
      Be(l, t),
      $e(l, o, i),
      o
    );
  }
  function Yl(e) {
    if (((e = e.current), !e.child)) return null;
    switch (e.child.tag) {
      case 5:
        return e.child.stateNode;
      default:
        return e.child.stateNode;
    }
  }
  function cs(e, t) {
    if (((e = e.memoizedState), e !== null && e.dehydrated !== null)) {
      var n = e.retryLane;
      e.retryLane = n !== 0 && n < t ? n : t;
    }
  }
  function _o(e, t) {
    cs(e, t), (e = e.alternate) && cs(e, t);
  }
  function qc() {
    return null;
  }
  function Co(e, t, n) {
    var r =
      (n != null &&
        n.hydrationOptions != null &&
        n.hydrationOptions.mutableSources) ||
      null;
    if (
      ((n = new Gc(e, t, n != null && n.hydrate === !0)),
      (t = ue(3, null, null, t === 2 ? 7 : t === 1 ? 3 : 0)),
      (n.current = t),
      (t.stateNode = n),
      uo(t),
      (e[$t] = n.current),
      Gs(e.nodeType === 8 ? e.parentNode : e),
      r)
    )
      for (e = 0; e < r.length; e++) {
        t = r[e];
        var l = t._getVersion;
        (l = l(t._source)),
          n.mutableSourceEagerHydrationData == null
            ? (n.mutableSourceEagerHydrationData = [t, l])
            : n.mutableSourceEagerHydrationData.push(t, l);
      }
    this._internalRoot = n;
  }
  Co.prototype.render = function (e) {
    Qr(e, this._internalRoot, null, null);
  };
  Co.prototype.unmount = function () {
    var e = this._internalRoot,
      t = e.containerInfo;
    Qr(null, e, null, function () {
      t[$t] = null;
    });
  };
  function Qn(e) {
    return !(
      !e ||
      (e.nodeType !== 1 &&
        e.nodeType !== 9 &&
        e.nodeType !== 11 &&
        (e.nodeType !== 8 || e.nodeValue !== ' react-mount-point-unstable '))
    );
  }
  function Jc(e, t) {
    if (
      (t ||
        ((t = e ? (e.nodeType === 9 ? e.documentElement : e.firstChild) : null),
        (t = !(!t || t.nodeType !== 1 || !t.hasAttribute('data-reactroot')))),
      !t)
    )
      for (var n; (n = e.lastChild); ) e.removeChild(n);
    return new Co(e, 0, t ? { hydrate: !0 } : void 0);
  }
  function il(e, t, n, r, l) {
    var i = n._reactRootContainer;
    if (i) {
      var o = i._internalRoot;
      if (typeof l == 'function') {
        var u = l;
        l = function () {
          var c = Yl(o);
          u.call(c);
        };
      }
      Qr(t, o, e, l);
    } else {
      if (
        ((i = n._reactRootContainer = Jc(n, r)),
        (o = i._internalRoot),
        typeof l == 'function')
      ) {
        var s = l;
        l = function () {
          var c = Yl(o);
          s.call(c);
        };
      }
      Ma(function () {
        Qr(t, o, e, l);
      });
    }
    return Yl(o);
  }
  Ts = function (e) {
    if (e.tag === 13) {
      var t = ne();
      $e(e, 4, t), _o(e, 4);
    }
  };
  Ki = function (e) {
    if (e.tag === 13) {
      var t = ne();
      $e(e, 67108864, t), _o(e, 67108864);
    }
  };
  Os = function (e) {
    if (e.tag === 13) {
      var t = ne(),
        n = Ae(e);
      $e(e, n, t), _o(e, n);
    }
  };
  Ls = function (e, t) {
    return t();
  };
  ri = function (e, t, n) {
    switch (t) {
      case 'input':
        if ((Gl(e, n), (t = n.name), n.type === 'radio' && t != null)) {
          for (n = e; n.parentNode; ) n = n.parentNode;
          for (
            n = n.querySelectorAll(
              'input[name=' + JSON.stringify('' + t) + '][type="radio"]'
            ),
              t = 0;
            t < n.length;
            t++
          ) {
            var r = n[t];
            if (r !== e && r.form === e.form) {
              var l = el(r);
              if (!l) throw Error(y(90));
              hs(r), Gl(r, l);
            }
          }
        }
        break;
      case 'textarea':
        ys(e, n);
        break;
      case 'select':
        (t = n.value), t != null && Tt(e, !!n.multiple, t, !1);
    }
  };
  Wi = La;
  Cs = function (e, t, n, r, l) {
    var i = C;
    C |= 4;
    try {
      return ut(98, e.bind(null, t, n, r, l));
    } finally {
      (C = i), C === 0 && (Qt(), ke());
    }
  };
  Qi = function () {
    (C & 49) === 0 && (Uc(), Ze());
  };
  xs = function (e, t) {
    var n = C;
    C |= 2;
    try {
      return e(t);
    } finally {
      (C = n), C === 0 && (Qt(), ke());
    }
  };
  function Ua(e, t) {
    var n =
      2 < arguments.length && arguments[2] !== void 0 ? arguments[2] : null;
    if (!Qn(t)) throw Error(y(200));
    return Zc(e, t, null, n);
  }
  var bc = { Events: [$n, Ct, el, Es, _s, Ze, { current: !1 }] },
    sn = {
      findFiberByHostInstance: nt,
      bundleType: 0,
      version: '17.0.2',
      rendererPackageName: 'react-dom',
    },
    ed = {
      bundleType: sn.bundleType,
      version: sn.version,
      rendererPackageName: sn.rendererPackageName,
      rendererConfig: sn.rendererConfig,
      overrideHookState: null,
      overrideHookStateDeletePath: null,
      overrideHookStateRenamePath: null,
      overrideProps: null,
      overridePropsDeletePath: null,
      overridePropsRenamePath: null,
      setSuspenseHandler: null,
      scheduleUpdate: null,
      currentDispatcherRef: ft.ReactCurrentDispatcher,
      findHostInstanceByFiber: function (e) {
        return (e = Ns(e)), e === null ? null : e.stateNode;
      },
      findFiberByHostInstance: sn.findFiberByHostInstance || qc,
      findHostInstancesForRefresh: null,
      scheduleRefresh: null,
      scheduleRoot: null,
      setRefreshHandler: null,
      getCurrentFiber: null,
    };
  if (
    typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < 'u' &&
    ((an = __REACT_DEVTOOLS_GLOBAL_HOOK__), !an.isDisabled && an.supportsFiber)
  )
    try {
      (ro = an.inject(ed)), (it = an);
    } catch {}
  var an;
  ce.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = bc;
  ce.createPortal = Ua;
  ce.findDOMNode = function (e) {
    if (e == null) return null;
    if (e.nodeType === 1) return e;
    var t = e._reactInternals;
    if (t === void 0)
      throw typeof e.render == 'function'
        ? Error(y(188))
        : Error(y(268, Object.keys(e)));
    return (e = Ns(t)), (e = e === null ? null : e.stateNode), e;
  };
  ce.flushSync = function (e, t) {
    var n = C;
    if ((n & 48) !== 0) return e(t);
    C |= 1;
    try {
      if (e) return ut(99, e.bind(null, t));
    } finally {
      (C = n), ke();
    }
  };
  ce.hydrate = function (e, t, n) {
    if (!Qn(t)) throw Error(y(200));
    return il(null, e, t, !0, n);
  };
  ce.render = function (e, t, n) {
    if (!Qn(t)) throw Error(y(200));
    return il(null, e, t, !1, n);
  };
  ce.unmountComponentAtNode = function (e) {
    if (!Qn(e)) throw Error(y(40));
    return e._reactRootContainer
      ? (Ma(function () {
          il(null, null, e, !1, function () {
            (e._reactRootContainer = null), (e[$t] = null);
          });
        }),
        !0)
      : !1;
  };
  ce.unstable_batchedUpdates = La;
  ce.unstable_createPortal = function (e, t) {
    return Ua(
      e,
      t,
      2 < arguments.length && arguments[2] !== void 0 ? arguments[2] : null
    );
  };
  ce.unstable_renderSubtreeIntoContainer = function (e, t, n, r) {
    if (!Qn(n)) throw Error(y(200));
    if (e == null || e._reactInternals === void 0) throw Error(y(38));
    return il(e, t, n, !1, r);
  };
  ce.version = '17.0.2';
});
var $a = qe((ad, Aa) => {
  'use strict';
  function Ba() {
    if (
      !(
        typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > 'u' ||
        typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != 'function'
      )
    )
      try {
        __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(Ba);
      } catch (e) {
        console.error(e);
      }
  }
  Ba(), (Aa.exports = Va());
});
var F = Po(pl(), 1),
  Wa = Po($a(), 1),
  Qa = class extends F.default.Component {
    render() {
      return F.default.createElement(
        'div',
        { className: 'row' },
        this.props.rowArr.map(function (t, n) {
          return F.default.createElement(Ya, {
            rowIndex: this.props.rowIndex,
            index: n,
            cell: t,
            handlePieceClick: this.props.handlePieceClick,
          });
        }, this)
      );
    }
  },
  Ya = class extends F.default.Component {
    render() {
      return F.default.createElement(
        'div',
        { className: 'cell cell-' + this.props.cell },
        F.default.createElement('div', {
          onClick: this.props.handlePieceClick,
          'data-row': this.props.rowIndex,
          'data-cell': this.props.index,
          className: 'gamePiece',
        })
      );
    }
  },
  Ka = class extends F.default.Component {
    render() {
      return F.default.createElement(
        'div',
        { className: 'stats' },
        F.default.createElement(
          'div',
          { className: 'half', style: { color: '#e26b6b' } },
          'Red:',
          F.default.createElement('br', null),
          (
            this.props.board
              .map(function (t) {
                return t.join('');
              })
              .join('')
              .match(/r/g) || []
          ).length,
          ' ',
          'Soldiers',
          F.default.createElement('br', null),
          (
            this.props.board
              .map(function (t) {
                return t.join('');
              })
              .join('')
              .match(/r\sk/g) || []
          ).length,
          ' ',
          'Kings'
        ),
        F.default.createElement(
          'div',
          { className: 'half' },
          'Black:',
          F.default.createElement('br', null),
          (
            this.props.board
              .map(function (t) {
                return t.join('');
              })
              .join('')
              .match(/b/g) || []
          ).length,
          ' ',
          'Soldiers',
          F.default.createElement('br', null),
          (
            this.props.board
              .map(function (t) {
                return t.join('');
              })
              .join('')
              .match(/b\sk/g) || []
          ).length,
          ' ',
          'Kings'
        )
      );
    }
  },
  xo = class extends F.default.Component {
    constructor(t) {
      super(t);
      this.state = {
        snapp: {},
        board: [
          ['b', '-', 'b', '-', 'b', '-', 'b', '-'],
          ['-', 'b', '-', 'b', '-', 'b', '-', 'b'],
          ['b', '-', 'b', '-', 'b', '-', 'b', '-'],
          ['-', '-', '-', '-', '-', '-', '-', '-'],
          ['-', '-', '-', '-', '-', '-', '-', '-'],
          ['-', 'r', '-', 'r', '-', 'r', '-', 'r'],
          ['r', '-', 'r', '-', 'r', '-', 'r', '-'],
          ['-', 'r', '-', 'r', '-', 'r', '-', 'r'],
        ],
        activePlayer: 'b',
        gameDone: !1,
        isDeployed: !1,
      };
    }
    async updateState() {
      let t = await this.state.snapp.getSnappState();
      this.setState({
        board: t.board,
        activePlayer: t.nextPlayer ? 'r' : 'b',
        gameDone: t.gameDone,
      });
    }
    render() {
      let t = async function () {
        if (this.state.isDeployed) return;
        this.setState({ isDeployed: !1 });
        let r = await (await import('./checkers-ELOERASD.js')).deploy(),
          l = await r.getSnappState();
        this.setState({
          snapp: r,
          board: l.board,
          activePlayer: l.nextPlayer ? 'r' : 'b',
          gameDone: l.gameDone,
          isDeployed: !0,
        });
      }.bind(this);
      return F.default.createElement(
        'div',
        { className: 'container' },
        F.default.createElement(
          'div',
          { className: 'board ' + this.state.activePlayer },
          this.state.board.map(function (n, r) {
            return F.default.createElement(Qa, {
              rowArr: n,
              handlePieceClick: this.handlePieceClick.bind(this),
              rowIndex: r,
            });
          }, this)
        ),
        F.default.createElement('div', { className: 'clear' }),
        F.default.createElement(
          nd,
          { onClick: t, disabled: this.state.isDeployed },
          'Deploy'
        ),
        F.default.createElement(Ka, { board: this.state.board })
      );
    }
    handlePieceClick(t) {
      if (this.state.isDeployed == !0) {
        var n = parseInt(t.target.attributes['data-row'].nodeValue),
          r = parseInt(t.target.attributes['data-cell'].nodeValue);
        this.state.board[n][r].indexOf(this.state.activePlayer) > -1
          ? ((this.state.board = this.state.board.map(function (l) {
              return l.map(function (i) {
                return i.replace('a', '');
              });
            })),
            (this.state.board[n][r] = 'a' + this.state.board[n][r]),
            this.highlightPossibleMoves(n, r))
          : this.state.board[n][r].indexOf('h') > -1 &&
            (this.executeMove(n, r, this.state.board, this.state.activePlayer),
            this.winDetection(this.state.board, this.state.activePlayer) &&
              console.log(this.state.activePlayer + ' won the game!'));
      }
    }
    async executeMove(t, n, r, l) {
      let i, o, u;
      for (var s = 0; s < r.length; s++)
        for (var c = 0; c < r[s].length; c++)
          r[s][c].indexOf('a') > -1 && ((i = r[s][c]), (o = c), (u = s));
      return await this.state.snapp.play(l, o, u, t, n), this.updateState(), r;
    }
    executeMoveOld(t, n, r, l) {
      for (var i, o = 0; o < r.length; o++)
        for (var u = 0; u < r[o].length; u++)
          r[o][u].indexOf('a') > -1 && (i = r[o][u]);
      var s = r[t][n].match(/d\d\d/g);
      if (typeof s !== void 0 && s !== null && s.length > 0)
        for (var c = 0; c < s.length; c++) {
          var v = s[c].replace('d', '').split('');
          r[v[0]][v[1]] = '-';
        }
      return (
        (r = r.map(function (k) {
          return k.map(function (p) {
            return p.replace(i, '-');
          });
        })),
        (r = r.map(function (k) {
          return k.map(function (p) {
            return p.replace('h', '-').replace(/d\d\d/g, '').trim();
          });
        })),
        (r[t][n] = i.replace('a', '')),
        ((l == 'b' && t == 7) || (l == 'r' && t == 0)) && (r[t][n] += ' k'),
        r
      );
    }
    highlightPossibleMoves(t, n) {
      this.state.board = this.state.board.map(function (u) {
        return u.map(function (s) {
          return s.replace('h', '-').replace(/d\d\d/g, '').trim();
        });
      });
      for (
        var r = this.findAllPossibleMoves(
            t,
            n,
            this.state.board,
            this.state.activePlayer
          ),
          l = 0;
        l < r.length;
        l++
      ) {
        for (var i = 'h ', o = 0; o < r[l].wouldDelete.length; o++)
          i +=
            'd' +
            String(r[l].wouldDelete[o].targetRow) +
            String(r[l].wouldDelete[o].targetCell) +
            ' ';
        this.state.board[r[l].targetRow][r[l].targetCell] = i;
      }
      this.setState(this.state);
    }
    findAllPossibleMoves(t, n, r, l) {
      var i = [],
        o = [],
        u = [1, -1],
        s = r[t][n].indexOf('k') > -1;
      l == 'b' ? o.push(1) : o.push(-1), s && o.push(o[0] * -1);
      for (var c = 0; c < o.length; c++)
        for (var v = 0; v < u.length; v++)
          typeof r[t + o[c]] < 'u' &&
            typeof r[t + o[c]][n + u[v]] < 'u' &&
            r[t + o[c]][n + u[v]] == '-' &&
            i
              .map(function (p) {
                return String(p.targetRow) + String(p.targetCell);
              })
              .indexOf(String(t + o[c]) + String(n + u[v])) < 0 &&
            i.push({
              targetRow: t + o[c],
              targetCell: n + u[v],
              wouldDelete: [],
            });
      for (
        var k = this.findAllJumps(t, n, r, o[0], [], [], s, l), v = 0;
        v < k.length;
        v++
      )
        i.push(k[v]);
      return i;
    }
    findAllJumps(t, n, r, l, i, o, u, s) {
      var c = !1,
        v = [l],
        k = [1, -1];
      u && v.push(v[0] * -1);
      for (var p = 0; p < v.length; p++)
        for (var g = 0; g < k.length; g++)
          if (
            (k[g],
            typeof r[t + v[p]] < 'u' &&
              typeof r[t + v[p]][n + k[g]] < 'u' &&
              typeof r[t + v[p] * 2] < 'u' &&
              typeof r[t + v[p] * 2][n + k[g] * 2] < 'u' &&
              r[t + v[p]][n + k[g]].indexOf(s == 'r' ? 'b' : 'r') > -1 &&
              r[t + v[p] * 2][n + k[g] * 2] == '-' &&
              i
                .map(function (m) {
                  return String(m.targetRow) + String(m.targetCell);
                })
                .indexOf(String(t + v[p] * 2) + String(n + k[g] * 2)) < 0)
          ) {
            for (
              var _ = {
                  targetRow: t + v[p] * 2,
                  targetCell: n + k[g] * 2,
                  wouldDelete: [{ targetRow: t + v[p], targetCell: n + k[g] }],
                },
                E = 0;
              E < o.length;
              E++
            )
              _.wouldDelete.push(o[E]);
            i.push(_), (c = !0);
          }
      if (c)
        for (var E = 0; E < i.length; E++)
          for (
            var d = [i[E].targetRow, i[E].targetCell],
              a = this.findAllJumps(
                d[0],
                d[1],
                r,
                l,
                i,
                i[E].wouldDelete,
                u,
                s
              ),
              f = 0;
            f < a.length;
            f++
          )
            i.indexOf(a[f]) < 0 && i.push(a[f]);
      return i;
    }
    reset() {
      this.setState({
        board: [
          ['b', '-', 'b', '-', 'b', '-', 'b', '-'],
          ['-', 'b', '-', 'b', '-', 'b', '-', 'b'],
          ['b', '-', 'b', '-', 'b', '-', 'b', '-'],
          ['-', '-', '-', '-', '-', '-', '-', '-'],
          ['-', '-', '-', '-', '-', '-', '-', '-'],
          ['-', 'r', '-', 'r', '-', 'r', '-', 'r'],
          ['r', '-', 'r', '-', 'r', '-', 'r', '-'],
          ['-', 'r', '-', 'r', '-', 'r', '-', 'r'],
        ],
        activePlayer: 'r',
      });
    }
    winDetection(t, n) {
      for (var r = n == 'r' ? 'b' : 'r', l = !0, i = 0; i < t.length; i++)
        for (var o = 0; o < t[i].length; o++)
          t[i][o].indexOf(r) > -1 && (l = !1);
      return l;
    }
    cloneBoard(t) {
      for (var n = [], r = 0; r < t.length; r++) n.push(t[r].slice(0));
      return n;
    }
  },
  td = '#cccccc',
  Ha = '#999999';
function nd({ disabled: e = !1, ...t }) {
  return F.default.createElement('button', {
    className: 'highlight',
    style: {
      color: e ? Ha : 'black',
      fontSize: '1rem',
      fontWeight: 'bold',
      backgroundColor: e ? 'white !important' : 'white',
      borderRadius: '10px',
      paddingTop: '10px',
      paddingBottom: '10px',
      width: '100%',
      border: e ? `4px ${Ha} solid` : '4px black solid',
      boxShadow: `${td} 3px 3px 3px`,
      cursor: e ? void 0 : 'pointer',
    },
    disabled: e,
    ...t,
  });
}
(0, Wa.render)(
  F.default.createElement(xo, null),
  document.getElementById('board')
);
export { Ya as Cell, Qa as Row, Ka as Statistics, xo as default };
/*
object-assign
(c) Sindre Sorhus
@license MIT
*/
/** @license React v0.20.2
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
/** @license React v17.0.2
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
/** @license React v17.0.2
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
