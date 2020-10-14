!(function(n, e) {
  for (var t in e) n[t] = e[t];
})(
  window,
  (function(n) {
    var e = {};
    function t(r) {
      if (e[r]) return e[r].exports;
      var o = (e[r] = { i: r, l: !1, exports: {} });
      return n[r].call(o.exports, o, o.exports, t), (o.l = !0), o.exports;
    }
    return (
      (t.m = n),
      (t.c = e),
      (t.d = function(n, e, r) {
        t.o(n, e) || Object.defineProperty(n, e, { enumerable: !0, get: r });
      }),
      (t.r = function(n) {
        "undefined" != typeof Symbol &&
          Symbol.toStringTag &&
          Object.defineProperty(n, Symbol.toStringTag, { value: "Module" }),
          Object.defineProperty(n, "__esModule", { value: !0 });
      }),
      (t.t = function(n, e) {
        if ((1 & e && (n = t(n)), 8 & e)) return n;
        if (4 & e && "object" == typeof n && n && n.__esModule) return n;
        var r = Object.create(null);
        if (
          (t.r(r),
          Object.defineProperty(r, "default", { enumerable: !0, value: n }),
          2 & e && "string" != typeof n)
        )
          for (var o in n)
            t.d(
              r,
              o,
              function(e) {
                return n[e];
              }.bind(null, o)
            );
        return r;
      }),
      (t.n = function(n) {
        var e =
          n && n.__esModule
            ? function() {
                return n.default;
              }
            : function() {
                return n;
              };
        return t.d(e, "a", e), e;
      }),
      (t.o = function(n, e) {
        return {}.hasOwnProperty.call(n, e);
      }),
      (t.p = ""),
      t((t.s = 2))
    );
  })([
    function(n, e, t) {
      n.exports = t(1);
    },
    function(n, e, t) {
      var r;
      "undefined" != typeof self && self,
        (r = function() {
          return (function(n) {
            var e = {};
            function t(r) {
              if (e[r]) return e[r].exports;
              var o = (e[r] = { i: r, l: !1, exports: {} });
              return (
                n[r].call(o.exports, o, o.exports, t), (o.l = !0), o.exports
              );
            }
            return (
              (t.m = n),
              (t.c = e),
              (t.d = function(n, e, r) {
                t.o(n, e) ||
                  Object.defineProperty(n, e, { enumerable: !0, get: r });
              }),
              (t.r = function(n) {
                "undefined" != typeof Symbol &&
                  Symbol.toStringTag &&
                  Object.defineProperty(n, Symbol.toStringTag, {
                    value: "Module"
                  }),
                  Object.defineProperty(n, "__esModule", { value: !0 });
              }),
              (t.t = function(n, e) {
                if ((1 & e && (n = t(n)), 8 & e)) return n;
                if (4 & e && "object" == typeof n && n && n.__esModule)
                  return n;
                var r = Object.create(null);
                if (
                  (t.r(r),
                  Object.defineProperty(r, "default", {
                    enumerable: !0,
                    value: n
                  }),
                  2 & e && "string" != typeof n)
                )
                  for (var o in n)
                    t.d(
                      r,
                      o,
                      function(e) {
                        return n[e];
                      }.bind(null, o)
                    );
                return r;
              }),
              (t.n = function(n) {
                var e =
                  n && n.__esModule
                    ? function() {
                        return n.default;
                      }
                    : function() {
                        return n;
                      };
                return t.d(e, "a", e), e;
              }),
              (t.o = function(n, e) {
                return {}.hasOwnProperty.call(n, e);
              }),
              (t.p = ""),
              t((t.s = 0))
            );
          })([
            function(n, e, t) {
              "use strict";
              t.r(e);
              var r = {
                ELEMENT: "element",
                TEXT: "text",
                COMPONENT: "component",
                FRAGMENT: "fragment"
              };
              function o(n, e) {
                for (var t = [], r = 0; r < n.length; r++) {
                  var o = n[r].render(e);
                  if (o)
                    if (Array.isArray(o))
                      for (var i = 0; i < o.length; i++) {
                        var a = o[i];
                        a && t.push(a);
                      }
                    else t.push(o);
                }
                return t;
              }
              var i = (function() {
                  function n(n, e, t) {
                    (this.type = r.ELEMENT),
                      (this.name = void 0),
                      (this.props = void 0),
                      (this.children = void 0),
                      (this.onRender = void 0),
                      (this.name = n),
                      (this.props = e),
                      (this.children = t);
                    var o = e.onRender;
                    "function" == typeof o &&
                      ((this.onRender = o), delete e.onRender);
                  }
                  var e = n.prototype;
                  return (
                    (e.render = function(n) {
                      var e = n(this);
                      return this.onRender && this.onRender(e), e;
                    }),
                    (e.renderChildren = function(n) {
                      return o(this.children, n);
                    }),
                    n
                  );
                })(),
                a = (function() {
                  function n(n) {
                    (this.type = r.FRAGMENT),
                      (this.children = void 0),
                      (this.children = n);
                  }
                  return (
                    (n.prototype.render = function(n) {
                      return o(this.children, n);
                    }),
                    n
                  );
                })(),
                u = (function() {
                  function n(n) {
                    (this.type = r.TEXT), (this.text = void 0), (this.text = n);
                  }
                  return (
                    (n.prototype.render = function(n) {
                      return n(this);
                    }),
                    n
                  );
                })(),
                c = (function() {
                  function n(n, e, t) {
                    (this.type = r.COMPONENT),
                      (this.component = void 0),
                      (this.props = void 0),
                      (this.children = void 0),
                      (this.component = n),
                      (this.props = e),
                      (this.children = t);
                  }
                  var e = n.prototype;
                  return (
                    (e.renderComponent = function(n) {
                      var e = (function(n) {
                        var e = s(Array.isArray(n) ? n : [n]);
                        return 1 === e.length
                          ? e[0]
                          : e.length > 1
                          ? new a(e)
                          : void 0;
                      })(this.component(this.props, this.children));
                      if (e) return e.render(n);
                    }),
                    (e.render = function(n) {
                      return n(this);
                    }),
                    (e.renderChildren = function(n) {
                      return o(this.children, n);
                    }),
                    n
                  );
                })();
              function s(n) {
                for (var e = [], t = 0; t < n.length; t++) {
                  var o = n[t];
                  if (o)
                    if ("string" == typeof o) e.push(new u(o));
                    else if (Array.isArray(o))
                      for (var i = 0, a = s(o); i < a.length; i++) e.push(a[i]);
                    else {
                      if (
                        !o ||
                        (o.type !== r.ELEMENT &&
                          o.type !== r.TEXT &&
                          o.type !== r.COMPONENT)
                      )
                        throw new TypeError(
                          "Unrecognized node type: " + typeof o
                        );
                      e.push(o);
                    }
                }
                return e;
              }
              var l,
                d = function(n, e) {
                  for (
                    var t = arguments.length,
                      r = new Array(t > 2 ? t - 2 : 0),
                      o = 2;
                    o < t;
                    o++
                  )
                    r[o - 2] = arguments[o];
                  if (((e = e || {}), (r = s(r)), "string" == typeof n))
                    return new i(n, e, r);
                  if ("function" == typeof n) return new c(n, e, r);
                  throw new TypeError(
                    "Expected jsx element to be a string or a function"
                  );
                },
                f = function(n, e) {
                  if (n && Object.keys(n).length)
                    throw new Error("Do not pass props to Fragment");
                  return e;
                },
                p = "0123456789abcdef",
                h = {
                  HTML: "html",
                  IFRAME: "iframe",
                  SCRIPT: "script",
                  NODE: "node",
                  DEFAULT: "default"
                },
                E = { ID: "id", INNER_HTML: "innerHTML", EL: "el" },
                y =
                  (((l = {})[h.IFRAME] = function(n, e) {
                    var t = e.children[0];
                    if (
                      1 !== e.children.length ||
                      !t ||
                      t.type !== r.ELEMENT ||
                      t.name !== h.HTML
                    )
                      throw new Error(
                        "Expected only single html element node as child of " +
                          h.IFRAME +
                          " element"
                      );
                    n.addEventListener("load", function() {
                      var e = n.contentWindow;
                      if (!e)
                        throw new Error("Expected frame to have contentWindow");
                      for (
                        var r = e.document, o = r.documentElement;
                        o.children && o.children.length;

                      )
                        o.removeChild(o.children[0]);
                      for (var i = t.render(m({ doc: r })); i.children.length; )
                        o.appendChild(i.children[0]);
                    });
                  }),
                  (l[h.SCRIPT] = function(n, e) {
                    var t = e.children[0];
                    if (1 !== e.children.length || !t || t.type !== r.TEXT)
                      throw new Error(
                        "Expected only single text node as child of " +
                          h.SCRIPT +
                          " element"
                      );
                    n.text = t.text;
                  }),
                  (l[h.DEFAULT] = function(n, e, t) {
                    for (var r = 0, o = e.renderChildren(t); r < o.length; r++)
                      n.appendChild(o[r]);
                  }),
                  l);
              function m(n) {
                void 0 === n && (n = {});
                var e = n.doc,
                  t = void 0 === e ? document : e;
                return function n(e) {
                  if (e.type === r.COMPONENT) return e.renderComponent(n);
                  if (e.type === r.TEXT)
                    return (function(n, e) {
                      return n.createTextNode(e.text);
                    })(t, e);
                  if (e.type === r.ELEMENT) {
                    var o = (function(n, e) {
                      return e.props[E.EL]
                        ? e.props[E.EL]
                        : n.createElement(e.name);
                    })(t, e);
                    return (
                      (function(n, e) {
                        for (
                          var t = e.props, r = 0, o = Object.keys(t);
                          r < o.length;
                          r++
                        ) {
                          var i = o[r],
                            a = t[i];
                          null != a &&
                            i !== E.EL &&
                            i !== E.INNER_HTML &&
                            (i.match(/^on[A-Z][a-z]/) && "function" == typeof a
                              ? n.addEventListener(i.slice(2).toLowerCase(), a)
                              : "string" == typeof a || "number" == typeof a
                              ? n.setAttribute(i, a.toString())
                              : "boolean" == typeof a &&
                                !0 === a &&
                                n.setAttribute(i, ""));
                        }
                        n.tagName.toLowerCase() !== h.IFRAME ||
                          t.id ||
                          n.setAttribute(
                            E.ID,
                            "jsx-iframe-" +
                              "xxxxxxxxxx".replace(/./g, function() {
                                return p.charAt(
                                  Math.floor(Math.random() * p.length)
                                );
                              })
                          );
                      })(o, e),
                      (function(n, e, t, r) {
                        if (e.props.hasOwnProperty(E.INNER_HTML)) {
                          if (e.children.length)
                            throw new Error(
                              "Expected no children to be passed when " +
                                E.INNER_HTML +
                                " prop is set"
                            );
                          var o = e.props[E.INNER_HTML];
                          if ("string" != typeof o)
                            throw new TypeError(
                              E.INNER_HTML + " prop must be string"
                            );
                          e.name === h.SCRIPT
                            ? (n.text = o)
                            : ((n.innerHTML = o),
                              (function(n, e) {
                                void 0 === e && (e = window.document);
                                for (
                                  var t = 0, r = n.querySelectorAll("script");
                                  t < r.length;
                                  t++
                                ) {
                                  var o = r[t],
                                    i = o.parentNode;
                                  if (i) {
                                    var a = e.createElement("script");
                                    (a.text = o.textContent),
                                      i.replaceChild(a, o);
                                  }
                                }
                              })(n, t));
                        } else (y[e.name] || y[h.DEFAULT])(n, e, r);
                      })(o, e, t, n),
                      o
                    );
                  }
                  throw new TypeError("Unhandleable node");
                };
              }
              function g() {
                return (g =
                  Object.assign ||
                  function(n) {
                    for (var e = 1; e < arguments.length; e++) {
                      var t = arguments[e];
                      for (var r in t)
                        ({}.hasOwnProperty.call(t, r) && (n[r] = t[r]));
                    }
                    return n;
                  }).apply(this, arguments);
              }
              function w(n, e) {
                if (null == n) return {};
                var t,
                  r,
                  o = {},
                  i = Object.keys(n);
                for (r = 0; r < i.length; r++)
                  e.indexOf((t = i[r])) >= 0 || (o[t] = n[t]);
                return o;
              }
              function v(n) {
                var e = (void 0 === n ? {} : n).React;
                if (!e)
                  throw new Error("Must pass React library to react renderer");
                return function n(t) {
                  if (t.type === r.COMPONENT)
                    return e.createElement.apply(
                      e,
                      [
                        function() {
                          return t.renderComponent(n) || null;
                        },
                        t.props
                      ].concat(t.renderChildren(n))
                    );
                  if (t.type === r.ELEMENT)
                    return e.createElement.apply(
                      e,
                      [
                        t.name,
                        ((o = t.props),
                        (i = o.innerHTML),
                        g(
                          {
                            dangerouslySetInnerHTML: i ? { __html: i } : null,
                            className: o.class
                          },
                          w(o, ["innerHTML", "class"])
                        ))
                      ].concat(t.renderChildren(n))
                    );
                  var o, i;
                  if (t.type === r.TEXT) return t.text;
                  throw new TypeError("Unhandleable node");
                };
              }
              var C = { INNER_HTML: "innerHTML" },
                L = { br: !0 };
              function T(n) {
                return n
                  .replace(/&/g, "&amp;")
                  .replace(/</g, "&lt;")
                  .replace(/>/g, "&gt;")
                  .replace(/"/g, "&quot;")
                  .replace(/'/g, "&#39;")
                  .replace(/\//g, "&#x2F;");
              }
              function b() {
                return function n(e) {
                  if (e.type === r.COMPONENT)
                    return [].concat(e.renderComponent(n)).join("");
                  if (e.type === r.ELEMENT) {
                    var t =
                      ((i = e.props),
                      (a = Object.keys(i).filter(function(n) {
                        var e = i[n];
                        return (
                          n !== C.INNER_HTML &&
                          !!e &&
                          ("string" == typeof e ||
                            "number" == typeof e ||
                            !0 === e)
                        );
                      })).length
                        ? " " +
                          a
                            .map(function(n) {
                              var e = i[n];
                              if (!0 === e) return "" + T(n);
                              if ("string" != typeof e && "number" != typeof e)
                                throw new TypeError(
                                  "Unexpected prop type: " + typeof e
                                );
                              return T(n) + '="' + T(e.toString()) + '"';
                            })
                            .join(" ")
                        : "");
                    if (L[e.name]) return "<" + e.name + t + " />";
                    var o =
                      "string" == typeof e.props[C.INNER_HTML]
                        ? e.props[C.INNER_HTML]
                        : e.renderChildren(n).join("");
                    return "<" + e.name + t + ">" + o + "</" + e.name + ">";
                  }
                  var i, a;
                  if (e.type === r.TEXT) return T(e.text);
                  throw new TypeError("Unhandleable node: " + e.type);
                };
              }
              function N(n) {
                var e = (void 0 === n ? {} : n).Preact;
                if (!e)
                  throw new Error("Must pass Preact library to react renderer");
                return function n(t) {
                  if (t.type === r.COMPONENT)
                    return e.h.apply(
                      e,
                      [
                        function() {
                          return t.renderComponent(n) || null;
                        },
                        t.props
                      ].concat(t.renderChildren(n))
                    );
                  if (t.type === r.ELEMENT)
                    return e.h.apply(
                      e,
                      [
                        t.name,
                        ((o = t.props),
                        (i = o.innerHTML),
                        g(
                          { dangerouslySetInnerHTML: i ? { __html: i } : null },
                          w(o, ["innerHTML"])
                        ))
                      ].concat(t.renderChildren(n))
                    );
                  var o, i;
                  if (t.type === r.TEXT) return t.text;
                  throw new TypeError("Unhandleable node");
                };
              }
              t.d(e, "ElementNode", function() {
                return i;
              }),
                t.d(e, "FragmentNode", function() {
                  return a;
                }),
                t.d(e, "TextNode", function() {
                  return u;
                }),
                t.d(e, "ComponentNode", function() {
                  return c;
                }),
                t.d(e, "node", function() {
                  return d;
                }),
                t.d(e, "Fragment", function() {
                  return f;
                }),
                t.d(e, "dom", function() {
                  return m;
                }),
                t.d(e, "react", function() {
                  return v;
                }),
                t.d(e, "html", function() {
                  return b;
                }),
                t.d(e, "preact", function() {
                  return N;
                }),
                t.d(e, "NODE_TYPE", function() {
                  return r;
                });
            }
          ]);
        }),
        (n.exports = r());
    },
    function(n, e, t) {
      "use strict";
      t.r(e);
      var r = {};
      t.r(r),
        t.d(r, "Promise", function() {
          return T;
        }),
        t.d(r, "ProxyWindow", function() {
          return wr;
        }),
        t.d(r, "setup", function() {
          return Wr;
        }),
        t.d(r, "destroy", function() {
          return Zr;
        }),
        t.d(r, "serializeMessage", function() {
          return Hr;
        }),
        t.d(r, "deserializeMessage", function() {
          return Ur;
        }),
        t.d(r, "createProxyWindow", function() {
          return Br;
        }),
        t.d(r, "toProxyWindow", function() {
          return jr;
        }),
        t.d(r, "on", function() {
          return Fr;
        }),
        t.d(r, "once", function() {
          return Dr;
        }),
        t.d(r, "send", function() {
          return kr;
        }),
        t.d(r, "markWindowKnown", function() {
          return ar;
        }),
        t.d(r, "cleanUpWindow", function() {
          return Kr;
        }),
        t.d(r, "bridge", function() {
          return Gr;
        }),
        t.d(r, "TYPES", function() {
          return qr;
        });
      var o = {};
      t.r(o),
        t.d(o, "Buttons", function() {
          return du;
        }),
        t.d(o, "Checkout", function() {
          return fu;
        }),
        t.d(o, "CardFields", function() {
          return pu;
        }),
        t.d(o, "Menu", function() {
          return hu;
        }),
        t.d(o, "Modal", function() {
          return Eu;
        }),
        t.d(o, "ButtonsTemplate", function() {
          return yu;
        }),
        t.d(o, "PopupOpenError", function() {
          return mu;
        }),
        t.d(o, "allowIframe", function() {
          return gu;
        }),
        t.d(o, "forceIframe", function() {
          return wu;
        }),
        t.d(o, "destroyAll", function() {
          return vu;
        }),
        t.d(o, "setup", function() {
          return Cu;
        }),
        t.d(o, "destroy", function() {
          return Lu;
        });
      var i = {};
      t.r(i),
        t.d(i, "ThreeDomainSecure", function() {
          return bu;
        }),
        t.d(i, "postRobot", function() {
          return Nu;
        });
      var a = {};
      t.r(a),
        t.d(a, "setup", function() {
          return Au;
        });
      var u = {};
      function c(n, e) {
        if (null == n) return {};
        var t,
          r,
          o = {},
          i = Object.keys(n);
        for (r = 0; r < i.length; r++)
          e.indexOf((t = i[r])) >= 0 || (o[t] = n[t]);
        return o;
      }
      function s() {
        return window.navigator.mockUserAgent || window.navigator.userAgent;
      }
      function l(n) {
        return (
          void 0 === n && (n = s()),
          !!n.match(
            /Android|webOS|iPhone|iPad|iPod|bada|Symbian|Palm|CriOS|BlackBerry|IEMobile|WindowsMobile|Opera Mini/i
          )
        );
      }
      function d(n) {
        return void 0 === n && (n = s()), n.indexOf("Opera Mini") > -1;
      }
      function f(n) {
        return void 0 === n && (n = s()), /iPhone|iPod|iPad/.test(n);
      }
      function p(n) {
        return (
          void 0 === n && (n = s()),
          !(
            (function(n) {
              return (
                void 0 === n && (n = s()),
                !!f(n) &&
                  (!!(function(n) {
                    return void 0 === n && (n = s()), /\bGSA\b/.test(n);
                  })(n) ||
                    /.+AppleWebKit(?!.*Safari)/.test(n))
              );
            })(n) ||
            (function(n) {
              return (
                void 0 === n && (n = s()),
                !!(function(n) {
                  return void 0 === n && (n = s()), /Android/.test(n);
                })(n) &&
                  /Version\/[\d.]+/.test(n) &&
                  !d(n)
              );
            })(n) ||
            d(n) ||
            (function(n) {
              return void 0 === n && (n = s()), /FxiOS/i.test(n);
            })(n) ||
            (function(n) {
              return void 0 === n && (n = s()), /EdgiOS/i.test(n);
            })(n) ||
            (function(n) {
              return (
                void 0 === n && (n = s()),
                -1 !== n.indexOf("FBAN") || -1 !== n.indexOf("FBAV")
              );
            })(n) ||
            (function(n) {
              return void 0 === n && (n = s()), /QQBrowser/.test(n);
            })(n) ||
            ("undefined" != typeof process &&
              process.versions &&
              process.versions.electron) ||
            ((e = s()), /Macintosh.*AppleWebKit(?!.*Safari)/i.test(e)) ||
            !0 === window.navigator.standalone ||
            window.matchMedia("(display-mode: standalone)").matches
          )
        );
        var e;
      }
      function h() {
        return (h =
          Object.assign ||
          function(n) {
            for (var e = 1; e < arguments.length; e++) {
              var t = arguments[e];
              for (var r in t) ({}.hasOwnProperty.call(t, r) && (n[r] = t[r]));
            }
            return n;
          }).apply(this, arguments);
      }
      function E(n) {
        try {
          if (!n) return !1;
          if ("undefined" != typeof Promise && n instanceof Promise) return !0;
          if (
            "undefined" != typeof window &&
            "function" == typeof window.Window &&
            n instanceof window.Window
          )
            return !1;
          if (
            "undefined" != typeof window &&
            "function" == typeof window.constructor &&
            n instanceof window.constructor
          )
            return !1;
          var e = {}.toString;
          if (e) {
            var t = e.call(n);
            if (
              "[object Window]" === t ||
              "[object global]" === t ||
              "[object DOMWindow]" === t
            )
              return !1;
          }
          if ("function" == typeof n.then) return !0;
        } catch (n) {
          return !1;
        }
        return !1;
      }
      t.r(u),
        t.d(u, "FUNDING", function() {
          return Ke;
        }),
        t.d(u, "setup", function() {
          return Su;
        });
      var y,
        m = [],
        g = [],
        w = 0;
      function v() {
        if (!w && y) {
          var n = y;
          (y = null), n.resolve();
        }
      }
      function C() {
        w += 1;
      }
      function L() {
        (w -= 1), v();
      }
      var T = (function() {
        function n(n) {
          var e = this;
          if (
            ((this.resolved = void 0),
            (this.rejected = void 0),
            (this.errorHandled = void 0),
            (this.value = void 0),
            (this.error = void 0),
            (this.handlers = void 0),
            (this.dispatching = void 0),
            (this.stack = void 0),
            (this.resolved = !1),
            (this.rejected = !1),
            (this.errorHandled = !1),
            (this.handlers = []),
            n)
          ) {
            var t,
              r,
              o = !1,
              i = !1,
              a = !1;
            C();
            try {
              n(
                function(n) {
                  a ? e.resolve(n) : ((o = !0), (t = n));
                },
                function(n) {
                  a ? e.reject(n) : ((i = !0), (r = n));
                }
              );
            } catch (n) {
              return L(), void this.reject(n);
            }
            L(), (a = !0), o ? this.resolve(t) : i && this.reject(r);
          }
        }
        var e = n.prototype;
        return (
          (e.resolve = function(n) {
            if (this.resolved || this.rejected) return this;
            if (E(n))
              throw new Error("Can not resolve promise with another promise");
            return (
              (this.resolved = !0), (this.value = n), this.dispatch(), this
            );
          }),
          (e.reject = function(n) {
            var e = this;
            if (this.resolved || this.rejected) return this;
            if (E(n))
              throw new Error("Can not reject promise with another promise");
            if (!n) {
              var t =
                n && "function" == typeof n.toString
                  ? n.toString()
                  : {}.toString.call(n);
              n = new Error(
                "Expected reject to be called with Error, got " + t
              );
            }
            return (
              (this.rejected = !0),
              (this.error = n),
              this.errorHandled ||
                setTimeout(function() {
                  e.errorHandled ||
                    (function(n, e) {
                      if (-1 === m.indexOf(n)) {
                        m.push(n),
                          setTimeout(function() {
                            throw n;
                          }, 1);
                        for (var t = 0; t < g.length; t++) g[t](n, e);
                      }
                    })(n, e);
                }, 1),
              this.dispatch(),
              this
            );
          }),
          (e.asyncReject = function(n) {
            return (this.errorHandled = !0), this.reject(n), this;
          }),
          (e.dispatch = function() {
            var e = this.resolved,
              t = this.rejected,
              r = this.handlers;
            if (!this.dispatching && (e || t)) {
              (this.dispatching = !0), C();
              for (
                var o = function(n, e) {
                    return n.then(
                      function(n) {
                        e.resolve(n);
                      },
                      function(n) {
                        e.reject(n);
                      }
                    );
                  },
                  i = 0;
                i < r.length;
                i++
              ) {
                var a = r[i],
                  u = a.onSuccess,
                  c = a.onError,
                  s = a.promise,
                  l = void 0;
                if (e)
                  try {
                    l = u ? u(this.value) : this.value;
                  } catch (n) {
                    s.reject(n);
                    continue;
                  }
                else if (t) {
                  if (!c) {
                    s.reject(this.error);
                    continue;
                  }
                  try {
                    l = c(this.error);
                  } catch (n) {
                    s.reject(n);
                    continue;
                  }
                }
                l instanceof n && (l.resolved || l.rejected)
                  ? (l.resolved ? s.resolve(l.value) : s.reject(l.error),
                    (l.errorHandled = !0))
                  : E(l)
                  ? l instanceof n && (l.resolved || l.rejected)
                    ? l.resolved
                      ? s.resolve(l.value)
                      : s.reject(l.error)
                    : o(l, s)
                  : s.resolve(l);
              }
              (r.length = 0), (this.dispatching = !1), L();
            }
          }),
          (e.then = function(e, t) {
            if (e && "function" != typeof e && !e.call)
              throw new Error(
                "Promise.then expected a function for success handler"
              );
            if (t && "function" != typeof t && !t.call)
              throw new Error(
                "Promise.then expected a function for error handler"
              );
            var r = new n();
            return (
              this.handlers.push({ promise: r, onSuccess: e, onError: t }),
              (this.errorHandled = !0),
              this.dispatch(),
              r
            );
          }),
          (e.catch = function(n) {
            return this.then(void 0, n);
          }),
          (e.finally = function(e) {
            if (e && "function" != typeof e && !e.call)
              throw new Error("Promise.finally expected a function");
            return this.then(
              function(t) {
                return n.try(e).then(function() {
                  return t;
                });
              },
              function(t) {
                return n.try(e).then(function() {
                  throw t;
                });
              }
            );
          }),
          (e.timeout = function(n, e) {
            var t = this;
            if (this.resolved || this.rejected) return this;
            var r = setTimeout(function() {
              t.resolved ||
                t.rejected ||
                t.reject(e || new Error("Promise timed out after " + n + "ms"));
            }, n);
            return this.then(function(n) {
              return clearTimeout(r), n;
            });
          }),
          (e.toPromise = function() {
            if ("undefined" == typeof Promise)
              throw new TypeError("Could not find Promise");
            return Promise.resolve(this);
          }),
          (n.resolve = function(e) {
            return e instanceof n
              ? e
              : E(e)
              ? new n(function(n, t) {
                  return e.then(n, t);
                })
              : new n().resolve(e);
          }),
          (n.reject = function(e) {
            return new n().reject(e);
          }),
          (n.asyncReject = function(e) {
            return new n().asyncReject(e);
          }),
          (n.all = function(e) {
            var t = new n(),
              r = e.length,
              o = [];
            if (!r) return t.resolve(o), t;
            for (
              var i = function(n, e, i) {
                  return e.then(
                    function(e) {
                      (o[n] = e), 0 == (r -= 1) && t.resolve(o);
                    },
                    function(n) {
                      i.reject(n);
                    }
                  );
                },
                a = 0;
              a < e.length;
              a++
            ) {
              var u = e[a];
              if (u instanceof n) {
                if (u.resolved) {
                  (o[a] = u.value), (r -= 1);
                  continue;
                }
              } else if (!E(u)) {
                (o[a] = u), (r -= 1);
                continue;
              }
              i(a, n.resolve(u), t);
            }
            return 0 === r && t.resolve(o), t;
          }),
          (n.hash = function(e) {
            var t = {};
            return n
              .all(
                Object.keys(e).map(function(r) {
                  return n.resolve(e[r]).then(function(n) {
                    t[r] = n;
                  });
                })
              )
              .then(function() {
                return t;
              });
          }),
          (n.map = function(e, t) {
            return n.all(e.map(t));
          }),
          (n.onPossiblyUnhandledException = function(n) {
            return (function(n) {
              return (
                g.push(n),
                {
                  cancel: function() {
                    g.splice(g.indexOf(n), 1);
                  }
                }
              );
            })(n);
          }),
          (n.try = function(e, t, r) {
            if (e && "function" != typeof e && !e.call)
              throw new Error("Promise.try expected a function");
            var o;
            C();
            try {
              o = e.apply(t, r || []);
            } catch (e) {
              return L(), n.reject(e);
            }
            return L(), n.resolve(o);
          }),
          (n.delay = function(e) {
            return new n(function(n) {
              setTimeout(n, e);
            });
          }),
          (n.isPromise = function(e) {
            return !!(e && e instanceof n) || E(e);
          }),
          (n.flush = function() {
            return (e = y = y || new n()), v(), e;
            var e;
          }),
          n
        );
      })();
      function b(n) {
        return "[object RegExp]" === {}.toString.call(n);
      }
      var N = { MOCK: "mock:", FILE: "file:", ABOUT: "about:" },
        O = "*",
        R = { IFRAME: "iframe", POPUP: "popup" },
        A = "Call was rejected by callee.\r\n";
      function S(n) {
        return void 0 === n && (n = window), n.location.protocol === N.ABOUT;
      }
      function I(n) {
        if ((void 0 === n && (n = window), n))
          try {
            if (n.parent && n.parent !== n) return n.parent;
          } catch (n) {}
      }
      function _(n) {
        if ((void 0 === n && (n = window), n && !I(n)))
          try {
            return n.opener;
          } catch (n) {}
      }
      function x(n) {
        try {
          return !0;
        } catch (n) {}
        return !1;
      }
      function P(n) {
        void 0 === n && (n = window);
        var e = n.location;
        if (!e) throw new Error("Can not read window location");
        var t = e.protocol;
        if (!t) throw new Error("Can not read window protocol");
        if (t === N.FILE) return N.FILE + "//";
        if (t === N.ABOUT) {
          var r = I(n);
          return r && x() ? P(r) : N.ABOUT + "//";
        }
        var o = e.host;
        if (!o) throw new Error("Can not read window host");
        return t + "//" + o;
      }
      function M(n) {
        void 0 === n && (n = window);
        var e = P(n);
        return e && n.mockDomain && 0 === n.mockDomain.indexOf(N.MOCK)
          ? n.mockDomain
          : e;
      }
      function F(n) {
        if (
          !(function(n) {
            try {
              if (n === window) return !0;
            } catch (n) {}
            try {
              var e = Object.getOwnPropertyDescriptor(n, "location");
              if (e && !1 === e.enumerable) return !1;
            } catch (n) {}
            try {
              if (S(n) && x()) return !0;
            } catch (n) {}
            try {
              if (P(n) === P(window)) return !0;
            } catch (n) {}
            return !1;
          })(n)
        )
          return !1;
        try {
          if (n === window) return !0;
          if (S(n) && x()) return !0;
          if (M(window) === M(n)) return !0;
        } catch (n) {}
        return !1;
      }
      function D(n) {
        if (!F(n)) throw new Error("Expected window to be same domain");
        return n;
      }
      function k(n, e) {
        if (!n || !e) return !1;
        var t = I(e);
        return t
          ? t === n
          : -1 !==
              (function(n) {
                var e = [];
                try {
                  for (; n.parent !== n; ) e.push(n.parent), (n = n.parent);
                } catch (n) {}
                return e;
              })(e).indexOf(n);
      }
      function H(n) {
        var e,
          t,
          r = [];
        try {
          e = n.frames;
        } catch (t) {
          e = n;
        }
        try {
          t = e.length;
        } catch (n) {}
        if (0 === t) return r;
        if (t) {
          for (var o = 0; o < t; o++) {
            var i = void 0;
            try {
              i = e[o];
            } catch (n) {
              continue;
            }
            r.push(i);
          }
          return r;
        }
        for (var a = 0; a < 100; a++) {
          var u = void 0;
          try {
            u = e[a];
          } catch (n) {
            return r;
          }
          if (!u) return r;
          r.push(u);
        }
        return r;
      }
      function U(n) {
        for (var e = [], t = 0, r = H(n); t < r.length; t++) {
          var o = r[t];
          e.push(o);
          for (var i = 0, a = U(o); i < a.length; i++) e.push(a[i]);
        }
        return e;
      }
      function B(n) {
        void 0 === n && (n = window);
        try {
          if (n.top) return n.top;
        } catch (n) {}
        if (I(n) === n) return n;
        try {
          if (k(window, n) && window.top) return window.top;
        } catch (n) {}
        try {
          if (k(n, window) && window.top) return window.top;
        } catch (n) {}
        for (var e = 0, t = U(n); e < t.length; e++) {
          var r = t[e];
          try {
            if (r.top) return r.top;
          } catch (n) {}
          if (I(r) === r) return r;
        }
      }
      function j(n) {
        var e = B(n);
        if (!e) throw new Error("Can not determine top window");
        var t = [].concat(U(e), [e]);
        return -1 === t.indexOf(n) && (t = [].concat(t, [n], U(n))), t;
      }
      var W = [],
        Z = [];
      function G(n, e) {
        void 0 === e && (e = !0);
        try {
          if (n === window) return !1;
        } catch (n) {
          return !0;
        }
        try {
          if (!n) return !0;
        } catch (n) {
          return !0;
        }
        try {
          if (n.closed) return !0;
        } catch (n) {
          return !n || n.message !== A;
        }
        if (e && F(n))
          try {
            if (n.mockclosed) return !0;
          } catch (n) {}
        try {
          if (!n.parent || !n.top) return !0;
        } catch (n) {}
        var t = (function(n, e) {
          for (var t = 0; t < n.length; t++)
            try {
              if (n[t] === e) return t;
            } catch (n) {}
          return -1;
        })(W, n);
        if (-1 !== t) {
          var r = Z[t];
          if (
            r &&
            (function(n) {
              if (!n.contentWindow) return !0;
              if (!n.parentNode) return !0;
              var e = n.ownerDocument;
              if (e && e.documentElement && !e.documentElement.contains(n)) {
                for (var t = n; t.parentNode && t.parentNode !== t; )
                  t = t.parentNode;
                if (!t.host || !e.documentElement.contains(t.host)) return !0;
              }
              return !1;
            })(r)
          )
            return !0;
        }
        return !1;
      }
      function q(n) {
        return (
          void 0 === n && (n = window), _((n = n || window)) || I(n) || void 0
        );
      }
      function K(n, e) {
        for (var t = 0; t < n.length; t++)
          for (var r = n[t], o = 0; o < e.length; o++)
            if (r === e[o]) return !0;
        return !1;
      }
      function z(n) {
        void 0 === n && (n = window);
        for (var e = 0, t = n; t; ) (t = I(t)) && (e += 1);
        return e;
      }
      function V(n, e) {
        var t = B(n) || n,
          r = B(e) || e;
        try {
          if (t && r) return t === r;
        } catch (n) {}
        var o = j(n),
          i = j(e);
        if (K(o, i)) return !0;
        var a = _(t),
          u = _(r);
        return !((a && K(j(a), i)) || (u && K(j(u), o), 1));
      }
      function Y(n, e) {
        if ("string" == typeof n) {
          if ("string" == typeof e) return n === O || e === n;
          if (b(e)) return !1;
          if (Array.isArray(e)) return !1;
        }
        return b(n)
          ? b(e)
            ? n.toString() === e.toString()
            : !Array.isArray(e) && Boolean(e.match(n))
          : !!Array.isArray(n) &&
              (Array.isArray(e)
                ? JSON.stringify(n) === JSON.stringify(e)
                : !b(e) &&
                  n.some(function(n) {
                    return Y(n, e);
                  }));
      }
      function X(n) {
        return n.match(/^(https?|mock|file):\/\//)
          ? n
              .split("/")
              .slice(0, 3)
              .join("/")
          : M();
      }
      function J(n, e, t, r) {
        var o;
        return (
          void 0 === t && (t = 1e3),
          void 0 === r && (r = 1 / 0),
          (function i() {
            if (G(n)) return o && clearTimeout(o), e();
            r <= 0 ? clearTimeout(o) : ((r -= t), (o = setTimeout(i, t)));
          })(),
          {
            cancel: function() {
              o && clearTimeout(o);
            }
          }
        );
      }
      function $(n) {
        try {
          if (n === window) return !0;
        } catch (n) {
          if (n && n.message === A) return !0;
        }
        try {
          if ("[object Window]" === {}.toString.call(n)) return !0;
        } catch (n) {
          if (n && n.message === A) return !0;
        }
        try {
          if (window.Window && n instanceof window.Window) return !0;
        } catch (n) {
          if (n && n.message === A) return !0;
        }
        try {
          if (n && n.self === n) return !0;
        } catch (n) {
          if (n && n.message === A) return !0;
        }
        try {
          if (n && n.parent === n) return !0;
        } catch (n) {
          if (n && n.message === A) return !0;
        }
        try {
          if (n && n.top === n) return !0;
        } catch (n) {
          if (n && n.message === A) return !0;
        }
        try {
          if (
            n &&
            "__unlikely_value__" === n.__cross_domain_utils_window_check__
          )
            return !1;
        } catch (n) {
          return !0;
        }
        return !1;
      }
      function Q(n) {
        try {
          n.close();
        } catch (n) {}
      }
      function nn(n, e) {
        for (var t = 0; t < n.length; t++)
          try {
            if (n[t] === e) return t;
          } catch (n) {}
        return -1;
      }
      var en,
        tn,
        rn = (function() {
          function n() {
            if (
              ((this.name = void 0),
              (this.weakmap = void 0),
              (this.keys = void 0),
              (this.values = void 0),
              (this.name = "__weakmap_" + ((1e9 * Math.random()) >>> 0) + "__"),
              (function() {
                if ("undefined" == typeof WeakMap) return !1;
                if (void 0 === Object.freeze) return !1;
                try {
                  var n = new WeakMap(),
                    e = {};
                  return (
                    Object.freeze(e),
                    n.set(e, "__testvalue__"),
                    "__testvalue__" === n.get(e)
                  );
                } catch (n) {
                  return !1;
                }
              })())
            )
              try {
                this.weakmap = new WeakMap();
              } catch (n) {}
            (this.keys = []), (this.values = []);
          }
          var e = n.prototype;
          return (
            (e._cleanupClosedWindows = function() {
              for (
                var n = this.weakmap, e = this.keys, t = 0;
                t < e.length;
                t++
              ) {
                var r = e[t];
                if ($(r) && G(r)) {
                  if (n)
                    try {
                      n.delete(r);
                    } catch (n) {}
                  e.splice(t, 1), this.values.splice(t, 1), (t -= 1);
                }
              }
            }),
            (e.isSafeToReadWrite = function(n) {
              return !$(n);
            }),
            (e.set = function(n, e) {
              if (!n) throw new Error("WeakMap expected key");
              var t = this.weakmap;
              if (t)
                try {
                  t.set(n, e);
                } catch (n) {
                  delete this.weakmap;
                }
              if (this.isSafeToReadWrite(n))
                try {
                  var r = this.name,
                    o = n[r];
                  return void (o && o[0] === n
                    ? (o[1] = e)
                    : Object.defineProperty(n, r, {
                        value: [n, e],
                        writable: !0
                      }));
                } catch (n) {}
              this._cleanupClosedWindows();
              var i = this.keys,
                a = this.values,
                u = nn(i, n);
              -1 === u ? (i.push(n), a.push(e)) : (a[u] = e);
            }),
            (e.get = function(n) {
              if (!n) throw new Error("WeakMap expected key");
              var e = this.weakmap;
              if (e)
                try {
                  if (e.has(n)) return e.get(n);
                } catch (n) {
                  delete this.weakmap;
                }
              if (this.isSafeToReadWrite(n))
                try {
                  var t = n[this.name];
                  return t && t[0] === n ? t[1] : void 0;
                } catch (n) {}
              this._cleanupClosedWindows();
              var r = nn(this.keys, n);
              if (-1 !== r) return this.values[r];
            }),
            (e.delete = function(n) {
              if (!n) throw new Error("WeakMap expected key");
              var e = this.weakmap;
              if (e)
                try {
                  e.delete(n);
                } catch (n) {
                  delete this.weakmap;
                }
              if (this.isSafeToReadWrite(n))
                try {
                  var t = n[this.name];
                  t && t[0] === n && (t[0] = t[1] = void 0);
                } catch (n) {}
              this._cleanupClosedWindows();
              var r = this.keys,
                o = nn(r, n);
              -1 !== o && (r.splice(o, 1), this.values.splice(o, 1));
            }),
            (e.has = function(n) {
              if (!n) throw new Error("WeakMap expected key");
              var e = this.weakmap;
              if (e)
                try {
                  if (e.has(n)) return !0;
                } catch (n) {
                  delete this.weakmap;
                }
              if (this.isSafeToReadWrite(n))
                try {
                  var t = n[this.name];
                  return !(!t || t[0] !== n);
                } catch (n) {}
              return this._cleanupClosedWindows(), -1 !== nn(this.keys, n);
            }),
            (e.getOrSet = function(n, e) {
              if (this.has(n)) return this.get(n);
              var t = e();
              return this.set(n, t), t;
            }),
            n
          );
        })();
      function on(n) {
        return n.name || n.__name__ || n.displayName || "anonymous";
      }
      function an(n, e) {
        try {
          delete n.name, (n.name = e);
        } catch (n) {}
        return (n.__name__ = n.displayName = e), n;
      }
      function un(n) {
        if ("function" == typeof btoa)
          return btoa(
            encodeURIComponent(n).replace(/%([0-9A-F]{2})/g, function(n, e) {
              return String.fromCharCode(parseInt(e, 16));
            })
          );
        if ("undefined" != typeof Buffer)
          return Buffer.from(n, "utf8").toString("base64");
        throw new Error("Can not find window.btoa or Buffer");
      }
      function cn(n) {
        if ("function" == typeof atob)
          return decodeURIComponent(
            [].map
              .call(atob(n), function(n) {
                return "%" + ("00" + n.charCodeAt(0).toString(16)).slice(-2);
              })
              .join("")
          );
        if ("undefined" != typeof Buffer)
          return Buffer.from(n, "base64").toString("utf8");
        throw new Error("Can not find window.atob or Buffer");
      }
      function sn() {
        var n = "0123456789abcdef";
        return (
          "xxxxxxxxxx".replace(/./g, function() {
            return n.charAt(Math.floor(Math.random() * n.length));
          }) +
          "_" +
          un(
            new Date()
              .toISOString()
              .slice(11, 19)
              .replace("T", ".")
          )
            .replace(/[^a-zA-Z0-9]/g, "")
            .toLowerCase()
        );
      }
      function ln() {
        if ("undefined" != typeof window) return window;
        if ("undefined" != typeof window) return window;
        if ("undefined" != typeof global) return global;
        throw new Error("No global found");
      }
      function dn(n) {
        try {
          return JSON.stringify([].slice.call(n), function(n, e) {
            return "function" == typeof e
              ? "memoize[" +
                  (function(n) {
                    if (
                      ((en = en || new rn()),
                      null == n ||
                        ("object" != typeof n && "function" != typeof n))
                    )
                      throw new Error("Invalid object");
                    var e = en.get(n);
                    return e || ((e = typeof n + ":" + sn()), en.set(n, e)), e;
                  })(e) +
                  "]"
              : e;
          });
        } catch (n) {
          throw new Error(
            "Arguments not serializable -- can not be used to memoize"
          );
        }
      }
      function fn(n, e) {
        var t = this;
        void 0 === e && (e = {});
        var r = new rn(),
          o = function() {
            for (var t = arguments.length, o = new Array(t), i = 0; i < t; i++)
              o[i] = arguments[i];
            var a = r.getOrSet(e.thisNamespace ? this : n, function() {
                return {};
              }),
              u = dn(o),
              c = e.time;
            if ((a[u] && c && Date.now() - a[u].time < c && delete a[u], a[u]))
              return a[u].value;
            var s = Date.now(),
              l = n.apply(this, arguments);
            return (a[u] = { time: s, value: l }), a[u].value;
          };
        return (
          (o.reset = function() {
            r.delete(e.thisNamespace ? t : n);
          }),
          an(o, on(n) + "::memoized")
        );
      }
      function pn(n) {
        var e = {};
        function t() {
          for (
            var t = arguments,
              r = this,
              o = arguments.length,
              i = new Array(o),
              a = 0;
            a < o;
            a++
          )
            i[a] = arguments[a];
          var u = dn(i);
          return e.hasOwnProperty(u)
            ? e[u]
            : ((e[u] = T.try(function() {
                return n.apply(r, t);
              }).finally(function() {
                delete e[u];
              })),
              e[u]);
        }
        return (
          (t.reset = function() {
            e = {};
          }),
          an(t, on(n) + "::promiseMemoized")
        );
      }
      function hn(n, e, t) {
        void 0 === t && (t = []);
        var r = (n.__inline_memoize_cache__ = n.__inline_memoize_cache__ || {}),
          o = dn(t);
        return r.hasOwnProperty(o) ? r[o] : (r[o] = e.apply(void 0, t));
      }
      function En() {}
      function yn(n) {
        var e = !1;
        return an(function() {
          if (!e) return (e = !0), n.apply(this, arguments);
        }, on(n) + "::once");
      }
      function mn(n, e) {
        if ((void 0 === e && (e = 1), e >= 3))
          return "stringifyError stack overflow";
        try {
          if (!n) return "<unknown error: " + {}.toString.call(n) + ">";
          if ("string" == typeof n) return n;
          if (n instanceof Error) {
            var t = n && n.stack,
              r = n && n.message;
            if (t && r) return -1 !== t.indexOf(r) ? t : r + "\n" + t;
            if (t) return t;
            if (r) return r;
          }
          return n && n.toString && "function" == typeof n.toString
            ? n.toString()
            : {}.toString.call(n);
        } catch (n) {
          return "Error while stringifying error: " + mn(n, e + 1);
        }
      }
      function gn(n) {
        var e = "<unknown error: " + {}.toString.call(n) + ">";
        return n
          ? n instanceof Error
            ? n.message || e
            : ("string" == typeof n.message && n.message) || e
          : e;
      }
      function wn(n) {
        return "string" == typeof n
          ? n
          : n && n.toString && "function" == typeof n.toString
          ? n.toString()
          : {}.toString.call(n);
      }
      function vn(n, e) {
        if (!e) return n;
        if (Object.assign) return Object.assign(n, e);
        for (var t in e) e.hasOwnProperty(t) && (n[t] = e[t]);
        return n;
      }
      function Cn(n) {
        var e = [];
        for (var t in n) n.hasOwnProperty(t) && e.push(n[t]);
        return e;
      }
      function Ln(n, e) {
        return Math.round((n * e) / 100);
      }
      function Tn() {
        return Math.max.apply(Math, arguments);
      }
      function bn(n) {
        return "data:image/svg+xml;base64," + un(n);
      }
      function Nn(n, e) {
        void 0 === e && (e = Boolean);
        var t = {};
        for (var r in n) n.hasOwnProperty(r) && e(n[r], r) && (t[r] = n[r]);
        return t;
      }
      function On(n) {
        return n;
      }
      function Rn(n, e) {
        var t;
        return (
          (function r() {
            t = setTimeout(function() {
              n(), r();
            }, e);
          })(),
          {
            cancel: function() {
              clearTimeout(t);
            }
          }
        );
      }
      function An() {
        var n = {},
          e = {};
        return {
          on: function(n, t) {
            var r = (e[n] = e[n] || []);
            r.push(t);
            var o = !1;
            return {
              cancel: function() {
                o || ((o = !0), r.splice(r.indexOf(t), 1));
              }
            };
          },
          once: function(n, e) {
            var t = this.on(n, function() {
              t.cancel(), e();
            });
            return t;
          },
          trigger: function(n) {
            for (
              var t = arguments.length, r = new Array(t > 1 ? t - 1 : 0), o = 1;
              o < t;
              o++
            )
              r[o - 1] = arguments[o];
            var i = e[n],
              a = [];
            if (i)
              for (
                var u = function(n) {
                    var e = i[n];
                    a.push(
                      T.try(function() {
                        return e.apply(void 0, r);
                      })
                    );
                  },
                  c = 0;
                c < i.length;
                c++
              )
                u(c);
            return T.all(a).then(En);
          },
          triggerOnce: function(e) {
            if (n[e]) return T.resolve();
            n[e] = !0;
            for (
              var t = arguments.length, r = new Array(t > 1 ? t - 1 : 0), o = 1;
              o < t;
              o++
            )
              r[o - 1] = arguments[o];
            return this.trigger.apply(this, [e].concat(r));
          },
          reset: function() {
            e = {};
          }
        };
      }
      function Sn(n) {
        return n.charAt(0).toUpperCase() + n.slice(1).toLowerCase();
      }
      function In(n, e, t) {
        if (Array.isArray(n)) {
          if ("number" != typeof e)
            throw new TypeError("Array key must be number");
        } else if ("object" == typeof n && null !== n && "string" != typeof e)
          throw new TypeError("Object key must be string");
        Object.defineProperty(n, e, {
          configurable: !0,
          enumerable: !0,
          get: function() {
            delete n[e];
            var r = t();
            return (n[e] = r), r;
          },
          set: function(t) {
            delete n[e], (n[e] = t);
          }
        });
      }
      function _n(n) {
        return [].slice.call(n);
      }
      function xn(n) {
        return (
          "object" == typeof (e = n) &&
          null !== e &&
          "[object Object]" === {}.toString.call(n)
        );
        var e;
      }
      function Pn(n) {
        if (!xn(n)) return !1;
        var e = n.constructor;
        if ("function" != typeof e) return !1;
        var t = e.prototype;
        return !!xn(t) && !!t.hasOwnProperty("isPrototypeOf");
      }
      function Mn(n, e, t) {
        if ((void 0 === t && (t = ""), Array.isArray(n))) {
          for (
            var r = n.length,
              o = [],
              i = function(r) {
                In(o, r, function() {
                  var o = t ? t + "." + r : "" + r,
                    i = e(n[r], r, o);
                  return (Pn(i) || Array.isArray(i)) && (i = Mn(i, e, o)), i;
                });
              },
              a = 0;
            a < r;
            a++
          )
            i(a);
          return o;
        }
        if (Pn(n)) {
          var u = {},
            c = function(r) {
              if (!n.hasOwnProperty(r)) return "continue";
              In(u, r, function() {
                var o = t ? t + "." + r : "" + r,
                  i = e(n[r], r, o);
                return (Pn(i) || Array.isArray(i)) && (i = Mn(i, e, o)), i;
              });
            };
          for (var s in n) c(s);
          return u;
        }
        throw new Error("Pass an object or array");
      }
      function Fn(n) {
        return null != n;
      }
      function Dn(n) {
        return "[object RegExp]" === {}.toString.call(n);
      }
      function kn(n, e, t) {
        if (n.hasOwnProperty(e)) return n[e];
        var r = t();
        return (n[e] = r), r;
      }
      function Hn(n) {
        var e = [],
          t = !1;
        return {
          set: function(e, r) {
            return (
              t ||
                ((n[e] = r),
                this.register(function() {
                  delete n[e];
                })),
              r
            );
          },
          register: function(n) {
            t ? n() : e.push(yn(n));
          },
          all: function() {
            var n = [];
            for (t = !0; e.length; ) {
              var r = e.shift();
              n.push(r());
            }
            return T.all(n).then(En);
          }
        };
      }
      function Un(n, e) {
        if (null == e) throw new Error("Expected " + n + " to be present");
        return e;
      }
      function Bn() {
        return Boolean(document.body) && "complete" === document.readyState;
      }
      function jn(n) {
        return n
          .replace(/\?/g, "%3F")
          .replace(/&/g, "%26")
          .replace(/#/g, "%23")
          .replace(/\+/g, "%2B");
      }
      function Wn() {
        return hn(Wn, function() {
          return new T(function(n) {
            Bn() && n(),
              window.addEventListener("load", function() {
                return n();
              });
          });
        });
      }
      function Zn() {
        return hn(Zn, function() {
          return new T(function(n) {
            if (Bn()) return n();
            var e = setInterval(function() {
              if (Bn()) return clearInterval(e), n();
            }, 10);
          });
        });
      }
      function Gn(n) {
        return hn(
          Gn,
          function() {
            var e = {};
            if (!n) return e;
            if (-1 === n.indexOf("=")) return e;
            for (var t = 0, r = n.split("&"); t < r.length; t++) {
              var o = r[t];
              (o = o.split("="))[0] &&
                o[1] &&
                (e[decodeURIComponent(o[0])] = decodeURIComponent(o[1]));
            }
            return e;
          },
          [n]
        );
      }
      function qn(n, e) {
        return (
          void 0 === e && (e = {}),
          e && Object.keys(e).length
            ? (void 0 === (t = h({}, Gn(n), {}, e)) && (t = {}),
              Object.keys(t)
                .filter(function(n) {
                  return "string" == typeof t[n];
                })
                .map(function(n) {
                  return jn(n) + "=" + jn(t[n]);
                })
                .join("&"))
            : n
        );
        var t;
      }
      function Kn(n, e) {
        void 0 === e && (e = {});
        var t,
          r,
          o = e.query || {},
          i = e.hash || {},
          a = n.split("#");
        r = a[1];
        var u = (t = a[0]).split("?");
        t = u[0];
        var c = qn(u[1], o),
          s = qn(r, i);
        return c && (t = t + "?" + c), s && (t = t + "#" + s), t;
      }
      function zn() {
        return hn(zn, function() {
          return Boolean(
            window.performance &&
              performance.now &&
              performance.timing &&
              performance.timing.connectEnd &&
              performance.timing.navigationStart &&
              Math.abs(performance.now() - Date.now()) > 1e3 &&
              performance.now() -
                (performance.timing.connectEnd -
                  performance.timing.navigationStart) >
                0
          );
        });
      }
      function Vn() {
        return "undefined" != typeof window;
      }
      function Yn(n) {
        var e = n.host,
          t = void 0 === e ? window.location.host : e,
          r = n.path;
        return hn(
          Yn,
          function() {
            for (
              var n = "" + t + r,
                e = [].slice.call(document.getElementsByTagName("script")),
                o = 0;
              o < e.length;
              o++
            ) {
              var i = e[o];
              if (
                i.src &&
                i.src.replace(/^https?:\/\//, "").split("?")[0] === n
              )
                return i;
            }
          },
          [r]
        );
      }
      function Xn() {
        return hn(Xn, function() {
          try {
            if ("undefined" == typeof window) return !1;
            if (window.localStorage) {
              var n = Math.random().toString();
              window.localStorage.setItem("__test__localStorage__", n);
              var e = window.localStorage.getItem("__test__localStorage__");
              if (
                (window.localStorage.removeItem("__test__localStorage__"),
                n === e)
              )
                return !0;
            }
          } catch (n) {}
          return !1;
        });
      }
      function Jn() {
        var n = window.navigator,
          e = n.languages ? [].slice.apply(n.languages) : [];
        return (
          n.language && e.push(n.language),
          n.userLanguage && e.push(n.userLanguage),
          e
            .map(function(n) {
              if (n && n.match(/^[a-z]{2}[-_][A-Z]{2}$/)) {
                var e = n.split(/[-_]/);
                return { country: e[1], lang: e[0] };
              }
              return n && n.match(/^[a-z]{2}$/) ? { lang: n } : null;
            })
            .filter(Boolean)
        );
      }
      function $n(n, e) {
        n.appendChild(e);
      }
      function Qn(n) {
        return (
          n instanceof window.Element ||
          (null !== n &&
            "object" == typeof n &&
            1 === n.nodeType &&
            "object" == typeof n.style &&
            "object" == typeof n.ownerDocument)
        );
      }
      function ne(n, e) {
        return (
          void 0 === e && (e = document),
          Qn(n) ? n : "string" == typeof n ? e.querySelector(n) : void 0
        );
      }
      function ee(n, e) {
        void 0 === e && (e = document);
        var t = ne(n, e);
        if (t) return t;
        throw new Error("Can not find element: " + wn(n));
      }
      function te(n) {
        this.message = n;
      }
      function re(n, e) {
        var t = (e = e || {}).width,
          r = e.height,
          o = 0,
          i = 0;
        t &&
          (window.outerWidth
            ? (i = Math.round((window.outerWidth - t) / 2) + window.screenX)
            : window.screen.width &&
              (i = Math.round((window.screen.width - t) / 2))),
          r &&
            (window.outerHeight
              ? (o = Math.round((window.outerHeight - r) / 2) + window.screenY)
              : window.screen.height &&
                (o = Math.round((window.screen.height - r) / 2))),
          t &&
            r &&
            (e = h(
              {
                top: o,
                left: i,
                width: t,
                height: r,
                status: 1,
                toolbar: 0,
                menubar: 0,
                resizable: 1,
                scrollbars: 1
              },
              e
            ));
        var a = e.name || "";
        delete e.name;
        var u,
          c,
          s = Object.keys(e)
            .map(function(n) {
              if (null != e[n]) return n + "=" + wn(e[n]);
            })
            .filter(Boolean)
            .join(",");
        try {
          u = window.open(n, a, s, !0);
        } catch (c) {
          throw new te("Can not open popup window - " + (c.stack || c.message));
        }
        if (G(u)) throw new te("Can not open popup window - blocked");
        return (
          window.addEventListener("unload", function() {
            return u.close();
          }),
          u
        );
      }
      function oe(n, e) {
        var t = e.tagName.toLowerCase();
        if ("html" !== t)
          throw new Error("Expected element to be html, got " + t);
        for (
          var r = n.document.documentElement, o = 0, i = _n(r.children);
          o < i.length;
          o++
        )
          r.removeChild(i[o]);
        for (var a = 0, u = _n(e.children); a < u.length; a++)
          r.appendChild(u[a]);
      }
      function ie(n) {
        if ((tn = tn || new rn()).has(n)) {
          var e = tn.get(n);
          if (e) return e;
        }
        var t = new T(function(e, t) {
          n.addEventListener("load", function() {
            (function(n) {
              if (
                ((function() {
                  for (var n = 0; n < W.length; n++) {
                    var e = !1;
                    try {
                      e = W[n].closed;
                    } catch (n) {}
                    e && (Z.splice(n, 1), W.splice(n, 1));
                  }
                })(),
                n && n.contentWindow)
              )
                try {
                  W.push(n.contentWindow), Z.push(n);
                } catch (n) {}
            })(n),
              e(n);
          }),
            n.addEventListener("error", function(r) {
              n.contentWindow ? e(n) : t(r);
            });
        });
        return tn.set(n, t), t;
      }
      function ae(n) {
        return ie(n).then(function(n) {
          if (!n.contentWindow)
            throw new Error("Could not find window in iframe");
          return n.contentWindow;
        });
      }
      function ue(n, e) {
        void 0 === n && (n = {});
        var t = n.style || {},
          r = (function(n, e, t) {
            void 0 === n && (n = "div"),
              void 0 === e && (e = {}),
              (n = n.toLowerCase());
            var r,
              o,
              i,
              a = document.createElement(n);
            if (
              (e.style && vn(a.style, e.style),
              e.class && (a.className = e.class.join(" ")),
              e.id && a.setAttribute("id", e.id),
              e.attributes)
            )
              for (
                var u = 0, c = Object.keys(e.attributes);
                u < c.length;
                u++
              ) {
                var s = c[u];
                a.setAttribute(s, e.attributes[s]);
              }
            if (
              (e.styleSheet &&
                ((r = a),
                (o = e.styleSheet),
                void 0 === i && (i = window.document),
                r.styleSheet
                  ? (r.styleSheet.cssText = o)
                  : r.appendChild(i.createTextNode(o))),
              e.html)
            ) {
              if ("iframe" === n)
                throw new Error(
                  "Iframe html can not be written unless container provided and iframe in DOM"
                );
              a.innerHTML = e.html;
            }
            return a;
          })("iframe", {
            attributes: h({ allowTransparency: "true" }, n.attributes || {}),
            style: h({ backgroundColor: "transparent", border: "none" }, t),
            html: n.html,
            class: n.class
          }),
          o = window.navigator.userAgent.match(/MSIE|Edge/i);
        return (
          r.hasAttribute("id") || r.setAttribute("id", sn()),
          ie(r),
          e && ee(e).appendChild(r),
          (n.url || o) && r.setAttribute("src", n.url || "about:blank"),
          r
        );
      }
      function ce(n, e, t) {
        return (
          n.addEventListener(e, t),
          {
            cancel: function() {
              n.removeEventListener(e, t);
            }
          }
        );
      }
      function se(n, e, t) {
        t = yn(t);
        for (var r = 0; r < e.length; r++) n.addEventListener(e[r], t);
        return {
          cancel: yn(function() {
            for (var r = 0; r < e.length; r++) n.removeEventListener(e[r], t);
          })
        };
      }
      te.prototype = Object.create(Error.prototype);
      var le = ["webkit", "moz", "ms", "o"],
        de = [
          "animationstart",
          "webkitAnimationStart",
          "oAnimationStart",
          "MSAnimationStart"
        ],
        fe = [
          "animationend",
          "webkitAnimationEnd",
          "oAnimationEnd",
          "MSAnimationEnd"
        ];
      function pe(n, e, t, r) {
        return (
          void 0 === r && (r = 1e3),
          new T(function(o, i) {
            var a = ee(n);
            if (!a) return o();
            var u,
              c,
              s,
              l,
              d = !1;
            function f() {
              clearTimeout(u), clearTimeout(c), s.cancel(), l.cancel();
            }
            (s = se(a, de, function(n) {
              n.target === a &&
                n.animationName === e &&
                (clearTimeout(u),
                n.stopPropagation(),
                s.cancel(),
                (d = !0),
                (c = setTimeout(function() {
                  f(), o();
                }, r)));
            })),
              (l = se(a, fe, function(n) {
                if (n.target === a && n.animationName === e)
                  return (
                    f(),
                    "string" == typeof n.animationName && n.animationName !== e
                      ? i(
                          "Expected animation name to be " +
                            e +
                            ", found " +
                            n.animationName
                        )
                      : o()
                  );
              })),
              (function(n, e, t) {
                n.style[e] = t;
                for (var r = Sn(e), o = 0; o < le.length; o++)
                  n.style["" + le[o] + r] = t;
              })(a, "animationName", e),
              (u = setTimeout(function() {
                if (!d) return f(), o();
              }, 200)),
              t && t(f);
          })
        );
      }
      var he = {
        DISPLAY: { NONE: "none", BLOCK: "block" },
        VISIBILITY: { VISIBLE: "visible", HIDDEN: "hidden" },
        IMPORTANT: "important"
      };
      function Ee(n) {
        n.style.setProperty("display", "");
      }
      function ye(n) {
        n.style.setProperty("display", he.DISPLAY.NONE, he.IMPORTANT);
      }
      function me(n) {
        n && n.parentNode && n.parentNode.removeChild(n);
      }
      function ge(n) {
        return !n || !n.parentNode;
      }
      function we(n, e, t) {
        var r = void 0 === t ? {} : t,
          o = r.width,
          i = void 0 === o || o,
          a = r.height,
          u = void 0 === a || a,
          c = r.interval,
          s = void 0 === c ? 100 : c,
          l = r.win,
          d = void 0 === l ? window : l,
          f = n.offsetWidth,
          p = n.offsetHeight;
        e({ width: f, height: p });
        var h,
          E,
          y = function() {
            var t = n.offsetWidth,
              r = n.offsetHeight;
            ((i && t !== f) || (u && r !== p)) && e({ width: t, height: r }),
              (f = t),
              (p = r);
          };
        return (
          void 0 !== d.ResizeObserver
            ? (h = new d.ResizeObserver(y)).observe(n)
            : void 0 !== d.MutationObserver
            ? ((h = new d.MutationObserver(y)).observe(n, {
                attributes: !0,
                childList: !0,
                subtree: !0,
                characterData: !1
              }),
              d.addEventListener("resize", y))
            : (function n() {
                y(), (E = setTimeout(n, s));
              })(),
          {
            cancel: function() {
              h.disconnect(),
                window.removeEventListener("resize", y),
                clearTimeout(E);
            }
          }
        );
      }
      function ve(n) {
        for (; n.parentNode; ) n = n.parentNode;
        return "[object ShadowRoot]" === n.toString();
      }
      var Ce = 12e5;
      function Le(n) {
        var e = n.name,
          t = n.lifetime,
          r = void 0 === t ? Ce : t;
        return hn(
          Le,
          function() {
            var n,
              t = "__" + e + "_storage__";
            function o(e) {
              var r,
                o = Xn();
              if ((n && (r = n), !r && o)) {
                var i = window.localStorage.getItem(t);
                i && (r = JSON.parse(i));
              }
              r || (r = ln()[t]),
                r || (r = { id: sn() }),
                r.id || (r.id = sn()),
                (n = r);
              var a = e(r);
              return (
                o
                  ? window.localStorage.setItem(t, JSON.stringify(r))
                  : (ln()[t] = r),
                (n = null),
                a
              );
            }
            function i(n) {
              return o(function(e) {
                var t = e.__session__,
                  o = Date.now();
                return (
                  t && o - t.created > r && (t = null),
                  t || (t = { guid: sn(), created: o }),
                  (e.__session__ = t),
                  n(t)
                );
              });
            }
            return {
              getState: o,
              getID: function() {
                return o(function(n) {
                  return n.id;
                });
              },
              getSessionState: function(n) {
                return i(function(e) {
                  return (e.state = e.state || {}), n(e.state);
                });
              },
              getSessionID: function() {
                return i(function(n) {
                  return n.guid;
                });
              }
            };
          },
          [{ name: e, lifetime: r }]
        );
      }
      var Te = { CONTENT_TYPE: "content-type", ACCEPT: "accept" },
        be = [];
      function Ne(n) {
        return "string" == typeof n && /^[0-9]+%$/.test(n);
      }
      function Oe(n) {
        if ("number" == typeof n) return n;
        var e = n.match(/^([0-9]+)(px|%)$/);
        if (!e) throw new Error("Could not match css value from " + n);
        return parseInt(e[1], 10);
      }
      function Re(n) {
        return Oe(n) + "px";
      }
      function Ae(n) {
        return "number" == typeof n ? Re(n) : Ne(n) ? n : Re(n);
      }
      function Se(n, e) {
        if ("number" == typeof n) return n;
        if (Ne(n))
          return (function(n, e) {
            return parseInt((n * Oe(e)) / 100, 10);
          })(e, n);
        if ("string" == typeof (t = n) && /^[0-9]+px$/.test(t)) return Oe(n);
        var t;
        throw new Error("Can not normalize dimension: " + n);
      }
      var Ie = {
          AD: "AD",
          AE: "AE",
          AG: "AG",
          AI: "AI",
          AL: "AL",
          AM: "AM",
          AN: "AN",
          AO: "AO",
          AR: "AR",
          AT: "AT",
          AU: "AU",
          AW: "AW",
          AZ: "AZ",
          BA: "BA",
          BB: "BB",
          BE: "BE",
          BF: "BF",
          BG: "BG",
          BH: "BH",
          BI: "BI",
          BJ: "BJ",
          BM: "BM",
          BN: "BN",
          BO: "BO",
          BR: "BR",
          BS: "BS",
          BT: "BT",
          BW: "BW",
          BY: "BY",
          BZ: "BZ",
          CA: "CA",
          CD: "CD",
          CG: "CG",
          CH: "CH",
          CI: "CI",
          CK: "CK",
          CL: "CL",
          CM: "CM",
          CN: "CN",
          CO: "CO",
          CR: "CR",
          CV: "CV",
          CY: "CY",
          CZ: "CZ",
          DE: "DE",
          DJ: "DJ",
          DK: "DK",
          DM: "DM",
          DO: "DO",
          DZ: "DZ",
          EC: "EC",
          EE: "EE",
          EG: "EG",
          ER: "ER",
          ES: "ES",
          ET: "ET",
          FI: "FI",
          FJ: "FJ",
          FK: "FK",
          FM: "FM",
          FO: "FO",
          FR: "FR",
          GA: "GA",
          GB: "GB",
          GD: "GD",
          GE: "GE",
          GF: "GF",
          GI: "GI",
          GL: "GL",
          GM: "GM",
          GN: "GN",
          GP: "GP",
          GR: "GR",
          GT: "GT",
          GW: "GW",
          GY: "GY",
          HK: "HK",
          HN: "HN",
          HR: "HR",
          HU: "HU",
          ID: "ID",
          IE: "IE",
          IL: "IL",
          IN: "IN",
          IS: "IS",
          IT: "IT",
          JM: "JM",
          JO: "JO",
          JP: "JP",
          KE: "KE",
          KG: "KG",
          KH: "KH",
          KI: "KI",
          KM: "KM",
          KN: "KN",
          KR: "KR",
          KW: "KW",
          KY: "KY",
          KZ: "KZ",
          LA: "LA",
          LC: "LC",
          LI: "LI",
          LK: "LK",
          LS: "LS",
          LT: "LT",
          LU: "LU",
          LV: "LV",
          MA: "MA",
          MC: "MC",
          MD: "MD",
          ME: "ME",
          MG: "MG",
          MH: "MH",
          MK: "MK",
          ML: "ML",
          MN: "MN",
          MQ: "MQ",
          MR: "MR",
          MS: "MS",
          MT: "MT",
          MU: "MU",
          MV: "MV",
          MW: "MW",
          MX: "MX",
          MY: "MY",
          MZ: "MZ",
          NA: "NA",
          NC: "NC",
          NE: "NE",
          NF: "NF",
          NG: "NG",
          NI: "NI",
          NL: "NL",
          NO: "NO",
          NP: "NP",
          NR: "NR",
          NU: "NU",
          NZ: "NZ",
          OM: "OM",
          PA: "PA",
          PE: "PE",
          PF: "PF",
          PG: "PG",
          PH: "PH",
          PL: "PL",
          PM: "PM",
          PN: "PN",
          PT: "PT",
          PW: "PW",
          PY: "PY",
          QA: "QA",
          RE: "RE",
          RO: "RO",
          RS: "RS",
          RU: "RU",
          RW: "RW",
          SA: "SA",
          SB: "SB",
          SC: "SC",
          SE: "SE",
          SG: "SG",
          SH: "SH",
          SI: "SI",
          SJ: "SJ",
          SK: "SK",
          SL: "SL",
          SM: "SM",
          SN: "SN",
          SO: "SO",
          SR: "SR",
          ST: "ST",
          SV: "SV",
          SZ: "SZ",
          TC: "TC",
          TD: "TD",
          TG: "TG",
          TH: "TH",
          TJ: "TJ",
          TM: "TM",
          TN: "TN",
          TO: "TO",
          TR: "TR",
          TT: "TT",
          TV: "TV",
          TW: "TW",
          TZ: "TZ",
          UA: "UA",
          UG: "UG",
          US: "US",
          UY: "UY",
          VA: "VA",
          VC: "VC",
          VE: "VE",
          VG: "VG",
          VN: "VN",
          VU: "VU",
          WF: "WF",
          WS: "WS",
          YE: "YE",
          YT: "YT",
          ZA: "ZA",
          ZM: "ZM",
          ZW: "ZW"
        },
        _e = {
          AR: "ar",
          CS: "cs",
          DA: "da",
          DE: "de",
          EL: "el",
          EN: "en",
          ES: "es",
          FI: "fi",
          FR: "fr",
          HE: "he",
          HU: "hu",
          ID: "id",
          IT: "it",
          JA: "ja",
          KO: "ko",
          NL: "nl",
          NO: "no",
          PL: "pl",
          PT: "pt",
          RU: "ru",
          SK: "sk",
          SV: "sv",
          TH: "th",
          TR: "tr",
          ZH: "zh"
        },
        xe = {
          AD: [_e.EN, _e.FR, _e.ES, _e.ZH],
          AE: [_e.EN, _e.FR, _e.ES, _e.ZH, _e.AR],
          AG: [_e.EN, _e.FR, _e.ES, _e.ZH],
          AI: [_e.EN, _e.FR, _e.ES, _e.ZH],
          AL: [_e.EN],
          AM: [_e.EN, _e.FR, _e.ES, _e.ZH],
          AN: [_e.EN, _e.FR, _e.ES, _e.ZH],
          AO: [_e.EN, _e.FR, _e.ES, _e.ZH],
          AR: [_e.ES, _e.EN],
          AT: [_e.DE, _e.EN],
          AU: [_e.EN],
          AW: [_e.EN, _e.FR, _e.ES, _e.ZH],
          AZ: [_e.EN, _e.FR, _e.ES, _e.ZH],
          BA: [_e.EN],
          BB: [_e.EN, _e.FR, _e.ES, _e.ZH],
          BE: [_e.EN, _e.NL, _e.FR],
          BF: [_e.FR, _e.EN, _e.ES, _e.ZH],
          BG: [_e.EN],
          BH: [_e.AR, _e.EN, _e.FR, _e.ES, _e.ZH],
          BI: [_e.FR, _e.EN, _e.ES, _e.ZH],
          BJ: [_e.FR, _e.EN, _e.ES, _e.ZH],
          BM: [_e.EN, _e.FR, _e.ES, _e.ZH],
          BN: [_e.EN],
          BO: [_e.ES, _e.EN, _e.FR, _e.ZH],
          BR: [_e.PT, _e.EN],
          BS: [_e.EN, _e.FR, _e.ES, _e.ZH],
          BT: [_e.EN],
          BW: [_e.EN, _e.FR, _e.ES, _e.ZH],
          BY: [_e.EN],
          BZ: [_e.EN, _e.ES, _e.FR, _e.ZH],
          CA: [_e.EN, _e.FR],
          CD: [_e.FR, _e.EN, _e.ES, _e.ZH],
          CG: [_e.EN, _e.FR, _e.ES, _e.ZH],
          CH: [_e.DE, _e.FR, _e.EN],
          CI: [_e.FR, _e.EN],
          CK: [_e.EN, _e.FR, _e.ES, _e.ZH],
          CL: [_e.ES, _e.EN, _e.FR, _e.ZH],
          CM: [_e.FR, _e.EN],
          CN: [_e.ZH],
          CO: [_e.ES, _e.EN, _e.FR, _e.ZH],
          CR: [_e.ES, _e.EN, _e.FR, _e.ZH],
          CV: [_e.EN, _e.FR, _e.ES, _e.ZH],
          CY: [_e.EN],
          CZ: [_e.CS, _e.EN, _e.FR, _e.ES, _e.ZH],
          DE: [_e.DE, _e.EN],
          DJ: [_e.FR, _e.EN, _e.ES, _e.ZH],
          DK: [_e.DA, _e.EN],
          DM: [_e.EN, _e.FR, _e.ES, _e.ZH],
          DO: [_e.ES, _e.EN, _e.FR, _e.ZH],
          DZ: [_e.AR, _e.EN, _e.FR, _e.ES, _e.ZH],
          EC: [_e.ES, _e.EN, _e.FR, _e.ZH],
          EE: [_e.EN, _e.RU, _e.FR, _e.ES, _e.ZH],
          EG: [_e.AR, _e.EN, _e.FR, _e.ES, _e.ZH],
          ER: [_e.EN, _e.FR, _e.ES, _e.ZH],
          ES: [_e.ES, _e.EN],
          ET: [_e.EN, _e.FR, _e.ES, _e.ZH],
          FI: [_e.FI, _e.EN, _e.FR, _e.ES, _e.ZH],
          FJ: [_e.EN, _e.FR, _e.ES, _e.ZH],
          FK: [_e.EN, _e.FR, _e.ES, _e.ZH],
          FM: [_e.EN],
          FO: [_e.DA, _e.EN, _e.FR, _e.ES, _e.ZH],
          FR: [_e.FR, _e.EN],
          GA: [_e.FR, _e.EN, _e.ES, _e.ZH],
          GB: [_e.EN],
          GD: [_e.EN, _e.FR, _e.ES, _e.ZH],
          GE: [_e.EN, _e.FR, _e.ES, _e.ZH],
          GF: [_e.EN, _e.FR, _e.ES, _e.ZH],
          GI: [_e.EN, _e.FR, _e.ES, _e.ZH],
          GL: [_e.DA, _e.EN, _e.FR, _e.ES, _e.ZH],
          GM: [_e.EN, _e.FR, _e.ES, _e.ZH],
          GN: [_e.FR, _e.EN, _e.ES, _e.ZH],
          GP: [_e.EN, _e.FR, _e.ES, _e.ZH],
          GR: [_e.EL, _e.EN, _e.FR, _e.ES, _e.ZH],
          GT: [_e.ES, _e.EN, _e.FR, _e.ZH],
          GW: [_e.EN, _e.FR, _e.ES, _e.ZH],
          GY: [_e.EN, _e.FR, _e.ES, _e.ZH],
          HK: [_e.EN, _e.ZH],
          HN: [_e.ES, _e.EN, _e.FR, _e.ZH],
          HR: [_e.EN],
          HU: [_e.HU, _e.EN, _e.FR, _e.ES, _e.ZH],
          ID: [_e.ID, _e.EN],
          IE: [_e.EN, _e.FR, _e.ES, _e.ZH],
          IL: [_e.HE, _e.EN],
          IN: [_e.EN],
          IS: [_e.EN],
          IT: [_e.IT, _e.EN],
          JM: [_e.EN, _e.ES, _e.FR, _e.ZH],
          JO: [_e.AR, _e.EN, _e.FR, _e.ES, _e.ZH],
          JP: [_e.JA, _e.EN],
          KE: [_e.EN, _e.FR, _e.ES, _e.ZH],
          KG: [_e.EN, _e.FR, _e.ES, _e.ZH],
          KH: [_e.EN],
          KI: [_e.EN, _e.FR, _e.ES, _e.ZH],
          KM: [_e.FR, _e.EN, _e.ES, _e.ZH],
          KN: [_e.EN, _e.FR, _e.ES, _e.ZH],
          KR: [_e.KO, _e.EN],
          KW: [_e.AR, _e.EN, _e.FR, _e.ES, _e.ZH],
          KY: [_e.EN, _e.FR, _e.ES, _e.ZH],
          KZ: [_e.EN, _e.FR, _e.ES, _e.ZH],
          LA: [_e.EN],
          LC: [_e.EN, _e.FR, _e.ES, _e.ZH],
          LI: [_e.EN, _e.FR, _e.ES, _e.ZH],
          LK: [_e.EN],
          LS: [_e.EN, _e.FR, _e.ES, _e.ZH],
          LT: [_e.EN, _e.RU, _e.FR, _e.ES, _e.ZH],
          LU: [_e.EN, _e.DE, _e.FR, _e.ES, _e.ZH],
          LV: [_e.EN, _e.RU, _e.FR, _e.ES, _e.ZH],
          MA: [_e.AR, _e.EN, _e.FR, _e.ES, _e.ZH],
          MC: [_e.FR, _e.EN],
          MD: [_e.EN],
          ME: [_e.EN],
          MG: [_e.EN, _e.FR, _e.ES, _e.ZH],
          MH: [_e.EN, _e.FR, _e.ES, _e.ZH],
          MK: [_e.EN],
          ML: [_e.FR, _e.EN, _e.ES, _e.ZH],
          MN: [_e.EN],
          MQ: [_e.EN, _e.FR, _e.ES, _e.ZH],
          MR: [_e.EN, _e.FR, _e.ES, _e.ZH],
          MS: [_e.EN, _e.FR, _e.ES, _e.ZH],
          MT: [_e.EN],
          MU: [_e.EN, _e.FR, _e.ES, _e.ZH],
          MV: [_e.EN],
          MW: [_e.EN, _e.FR, _e.ES, _e.ZH],
          MX: [_e.ES, _e.EN],
          MY: [_e.EN],
          MZ: [_e.EN, _e.FR, _e.ES, _e.ZH],
          NA: [_e.EN, _e.FR, _e.ES, _e.ZH],
          NC: [_e.EN, _e.FR, _e.ES, _e.ZH],
          NE: [_e.FR, _e.EN, _e.ES, _e.ZH],
          NF: [_e.EN, _e.FR, _e.ES, _e.ZH],
          NG: [_e.EN],
          NI: [_e.ES, _e.EN, _e.FR, _e.ZH],
          NL: [_e.NL, _e.EN],
          NO: [_e.NO, _e.EN],
          NP: [_e.EN],
          NR: [_e.EN, _e.FR, _e.ES, _e.ZH],
          NU: [_e.EN, _e.FR, _e.ES, _e.ZH],
          NZ: [_e.EN, _e.FR, _e.ES, _e.ZH],
          OM: [_e.AR, _e.EN, _e.FR, _e.ES, _e.ZH],
          PA: [_e.ES, _e.EN, _e.FR, _e.ZH],
          PE: [_e.ES, _e.EN, _e.FR, _e.ZH],
          PF: [_e.EN, _e.FR, _e.ES, _e.ZH],
          PG: [_e.EN, _e.FR, _e.ES, _e.ZH],
          PH: [_e.EN],
          PL: [_e.PL, _e.EN],
          PM: [_e.EN, _e.FR, _e.ES, _e.ZH],
          PN: [_e.EN, _e.FR, _e.ES, _e.ZH],
          PT: [_e.PT, _e.EN],
          PW: [_e.EN, _e.FR, _e.ES, _e.ZH],
          PY: [_e.ES, _e.EN],
          QA: [_e.EN, _e.FR, _e.ES, _e.ZH, _e.AR],
          RE: [_e.EN, _e.FR, _e.ES, _e.ZH],
          RO: [_e.EN, _e.FR, _e.ES, _e.ZH],
          RS: [_e.EN, _e.FR, _e.ES, _e.ZH],
          RU: [_e.RU, _e.EN],
          RW: [_e.FR, _e.EN, _e.ES, _e.ZH],
          SA: [_e.AR, _e.EN, _e.FR, _e.ES, _e.ZH],
          SB: [_e.EN, _e.FR, _e.ES, _e.ZH],
          SC: [_e.FR, _e.EN, _e.ES, _e.ZH],
          SE: [_e.SV, _e.EN],
          SG: [_e.EN],
          SH: [_e.EN, _e.FR, _e.ES, _e.ZH],
          SI: [_e.EN, _e.FR, _e.ES, _e.ZH],
          SJ: [_e.EN, _e.FR, _e.ES, _e.ZH],
          SK: [_e.SK, _e.EN, _e.FR, _e.ES, _e.ZH],
          SL: [_e.EN, _e.FR, _e.ES, _e.ZH],
          SM: [_e.EN, _e.FR, _e.ES, _e.ZH],
          SN: [_e.FR, _e.EN, _e.ES, _e.ZH],
          SO: [_e.EN, _e.FR, _e.ES, _e.ZH],
          SR: [_e.EN, _e.FR, _e.ES, _e.ZH],
          ST: [_e.EN, _e.FR, _e.ES, _e.ZH],
          SV: [_e.ES, _e.EN, _e.FR, _e.ZH],
          SZ: [_e.EN, _e.FR, _e.ES, _e.ZH],
          TC: [_e.EN, _e.FR, _e.ES, _e.ZH],
          TD: [_e.FR, _e.EN, _e.ES, _e.ZH],
          TG: [_e.FR, _e.EN, _e.ES, _e.ZH],
          TH: [_e.TH, _e.EN],
          TJ: [_e.EN, _e.FR, _e.ES, _e.ZH],
          TM: [_e.EN, _e.FR, _e.ES, _e.ZH],
          TN: [_e.AR, _e.EN, _e.FR, _e.ES, _e.ZH],
          TO: [_e.EN],
          TR: [_e.TR, _e.EN],
          TT: [_e.EN, _e.FR, _e.ES, _e.ZH],
          TV: [_e.EN, _e.FR, _e.ES, _e.ZH],
          TW: [_e.ZH, _e.EN],
          TZ: [_e.EN, _e.FR, _e.ES, _e.ZH],
          UA: [_e.EN, _e.RU, _e.FR, _e.ES, _e.ZH],
          UG: [_e.EN, _e.FR, _e.ES, _e.ZH],
          US: [_e.EN, _e.FR, _e.ES, _e.ZH],
          UY: [_e.ES, _e.EN, _e.FR, _e.ZH],
          VA: [_e.EN, _e.FR, _e.ES, _e.ZH],
          VC: [_e.EN, _e.FR, _e.ES, _e.ZH],
          VE: [_e.ES, _e.EN, _e.FR, _e.ZH],
          VG: [_e.EN, _e.FR, _e.ES, _e.ZH],
          VN: [_e.EN],
          VU: [_e.EN, _e.FR, _e.ES, _e.ZH],
          WF: [_e.EN, _e.FR, _e.ES, _e.ZH],
          WS: [_e.EN],
          YE: [_e.AR, _e.EN, _e.FR, _e.ES, _e.ZH],
          YT: [_e.EN, _e.FR, _e.ES, _e.ZH],
          ZA: [_e.EN, _e.FR, _e.ES, _e.ZH],
          ZM: [_e.EN, _e.FR, _e.ES, _e.ZH],
          ZW: [_e.EN]
        },
        Pe = {
          NAMESPACE: "data-namespace",
          CLIENT_TOKEN: "data-client-token",
          MERCHANT_ID: "data-merchant-id",
          PARTNER_ATTRIBUTION_ID: "data-partner-attribution-id",
          STAGE_HOST: "data-stage-host",
          API_STAGE_HOST: "data-api-stage-host",
          CSP_NONCE: "data-csp-nonce",
          ENABLE_3DS: "data-enable-3ds",
          SDK_INTEGRATION_SOURCE: "data-sdk-integration-source",
          USER_ACCESS_TOKEN: "data-user-access-token",
          USER_AUTH_CODE: "data-user-auth-code",
          CLIENT_ACCESS_TOKEN: "data-client-access-token"
        },
        Me = {
          COMPONENTS: "components",
          ENV: "env",
          DEBUG: "debug",
          CACHEBUST: "cachebust",
          CLIENT_ID: "client-id",
          MERCHANT_ID: "merchant-id",
          MERCHANT_EMAIL_HASH: "merchant-email-hash",
          LOCALE: "locale",
          CURRENCY: "currency",
          INTENT: "intent",
          COMMIT: "commit",
          VAULT: "vault",
          BUYER_COUNTRY: "buyer-country",
          DISABLE_FUNDING: "disable-funding",
          DISABLE_CARD: "disable-card",
          LOCALE_COUNTRY: "locale-country",
          LOCALE_LANG: "locale-lang",
          FRAMEWORK: "framework",
          INTEGRATION_DATE: "integration-date",
          ORDER_CURRENCY: "order-currency",
          ORDER_INTENT: "order-intent",
          ORDER_COMMIT: "order-commit",
          ORDER_VAULT: "order-vault",
          STAGE_HOST: "stage-host"
        },
        Fe = { BUTTONS: "buttons", HOSTED_FIELDS: "hosted-fields" },
        De = { TRUE: "true", FALSE: "false" },
        ke = "unknown",
        He = {
          LOCAL: "local",
          STAGE: "stage",
          SANDBOX: "sandbox",
          PRODUCTION: "production",
          TEST: "test"
        },
        Ue = {
          FEED: "feed_name",
          STATE: "state_name",
          TRANSITION: "transition_name",
          BUTTON_TYPE: "button_type",
          SESSION_UID: "page_session_id",
          BUTTON_SESSION_UID: "button_session_id",
          TOKEN: "token",
          CONTEXT_ID: "context_id",
          CONTEXT_TYPE: "context_type",
          REFERER: "referer_url",
          MERCHANT_DOMAIN: "merchant_domain",
          PAY_ID: "pay_id",
          SELLER_ID: "seller_id",
          CLIENT_ID: "client_id",
          DATA_SOURCE: "serverside_data_source",
          BUTTON_SOURCE: "button_source",
          ERROR_CODE: "ext_error_code",
          ERROR_DESC: "ext_error_desc",
          PAGE_LOAD_TIME: "page_load_time",
          EXPERIMENT_NAME: "pxp_exp_id",
          TREATMENT_NAME: "pxp_trtmnt_id",
          TRANSITION_TIME: "transition_time",
          FUNDING_LIST: "eligible_payment_methods",
          FUNDING_COUNT: "eligible_payment_count",
          CHOSEN_FUNDING: "selected_payment_method",
          BUTTON_LAYOUT: "button_layout",
          VERSION: "checkoutjs_version",
          LOCALE: "locale",
          BUYER_COUNTRY: "buyer_cntry",
          INTEGRATION_IDENTIFIER: "integration_identifier",
          PARTNER_ATTRIBUTION_ID: "bn_code",
          SDK_NAME: "sdk_name",
          SDK_VERSION: "sdk_version",
          USER_AGENT: "user_agent",
          USER_ACTION: "user_action",
          CONTEXT_CORRID: "context_correlation_id",
          SDK_CACHE: "sdk_cache",
          SDK_LOAD_TIME: "sdk_load_time",
          IS_VAULT: "is_vault",
          DISABLE_FUNDING: "disable_funding",
          DISABLE_CARD: "disable_card",
          RESPONSE_DURATION: "response_duration",
          SDK_INTEGRATION_SOURCE: "sdk_integration_source",
          PAYMENT_FLOW: "payment_flow",
          BUTTON_VERSION: "button_version"
        },
        Be = { COMMIT: "commit", CONTINUE: "continue" },
        je = { PAYMENTS_SDK: "checkout" },
        We = { PAYMENTS_SDK: "payments_sdk" },
        Ze = { PAYMENTS_SDK: "payments_sdk" },
        Ge = { CAPTURE: "capture", AUTHORIZE: "authorize", ORDER: "order" },
        qe = { DESKTOP: "desktop", MOBILE: "mobile" },
        Ke = {
          PAYPAL: "paypal",
          VENMO: "venmo",
          ITAU: "itau",
          CREDIT: "credit",
          CARD: "card",
          IDEAL: "ideal",
          SEPA: "sepa",
          BANCONTACT: "bancontact",
          GIROPAY: "giropay",
          SOFORT: "sofort",
          EPS: "eps",
          MYBANK: "mybank",
          P24: "p24",
          VERKKOPANKKI: "verkkopankki",
          PAYU: "payu",
          BLIK: "blik",
          TRUSTLY: "trustly",
          ZIMPLER: "zimpler",
          MAXIMA: "maxima",
          OXXO: "oxxo",
          BOLETO: "boleto",
          WECHATPAY: "wechatpay"
        },
        ze = {
          VISA: "visa",
          MASTERCARD: "mastercard",
          AMEX: "amex",
          DISCOVER: "discover",
          HIPER: "hiper",
          ELO: "elo",
          JCB: "jcb",
          CUP: "cup"
        },
        Ve = "USD",
        Ye = Ge.CAPTURE,
        Xe = !0,
        Je = !0,
        $e = !1;
      function Qe() {
        return "sandbox";
      }
      function nt() {
        return "5.0.109";
      }
      function et() {
        return "d7aada7c09b5";
      }
      function tt() {
        return !1;
      }
      function rt() {
        return ["buttons"];
      }
      function ot() {
        return l() ? qe.MOBILE : qe.DESKTOP;
      }
      var it = {
        sb:
          "AZDxjDScFpQtjWTOUtWKbyN_bDt4OgqaF4eYXlewfBP4-8aqX3PiV8e1GWU6liB2CUXlkA59kJXE7M6R"
      };
      function at() {
        return hn(at, function() {
          var n =
              "sandbox" === He.SANDBOX
                ? "www.paypal.com"
                : "www.sandbox.paypal.com",
            e = Yn({ host: n, path: "/sdk/js" });
          if (!e)
            throw new Error(
              'PayPal Payments SDK script not present on page! Excected to find <script src="https://' +
                n +
                '/sdk/js">'
            );
          return e;
        });
      }
      function ut() {
        return hn(ut, function() {
          for (var n = {}, e = 0, t = at().attributes; e < t.length; e++) {
            var r = t[e];
            0 === r.name.indexOf("data-") && (n[r.name] = r.value);
          }
          return n;
        });
      }
      function ct(n, e) {
        return ut()[n] || e;
      }
      function st(n, e) {
        return Gn(at().src.split("?")[1] || "")[n] || e;
      }
      function lt() {
        var n = at().getAttribute("src");
        if (!n) throw new Error("Can not find src for sdk script");
        return n;
      }
      function dt(n, e) {
        return st(n, e ? e.toString() : De.FALSE) === De.TRUE;
      }
      function ft() {
        var n = st(Me.CLIENT_ID);
        if (!n)
          throw new Error("Expected " + Me.CLIENT_ID + " parameter in sdk url");
        return it[n] ? it[n] : n;
      }
      function pt() {
        var n = st(Me.MERCHANT_ID);
        return "*" === n && (n = ct(Pe.MERCHANT_ID)), n ? n.split(",") : [];
      }
      function ht() {
        return st(Me.INTENT, Ye);
      }
      function Et() {
        return dt(Me.COMMIT, ht() === Ge.CAPTURE ? Xe : Je);
      }
      function yt() {
        return dt(Me.VAULT, $e);
      }
      function mt() {
        return st(Me.CURRENCY, Ve);
      }
      function gt() {
        var n = st(Me.DISABLE_FUNDING);
        return n ? n.split(",") : [];
      }
      function wt() {
        var n = st(Me.DISABLE_CARD);
        return n ? n.split(",") : [];
      }
      function vt() {
        return st(Me.BUYER_COUNTRY);
      }
      function Ct() {
        return ct(Pe.NAMESPACE) || "paypal";
      }
      function Lt() {
        var n = ct(Pe.CLIENT_ACCESS_TOKEN);
        if (n) return n;
        var e = ct(Pe.CLIENT_TOKEN);
        return e ? JSON.parse(cn(e)).paypal.accessToken : void 0;
      }
      function Tt() {
        return ct(Pe.PARTNER_ATTRIBUTION_ID);
      }
      function bt() {
        return ct(Pe.STAGE_HOST, null);
      }
      function Nt() {
        return ct(Pe.API_STAGE_HOST, null);
      }
      function Ot() {
        var n = st(Me.LOCALE);
        if (n) {
          var e = n.split("_");
          return { lang: e[0], country: e[1] };
        }
        for (var t = 0, r = Jn(); t < r.length; t++) {
          var o = r[t],
            i = o.country,
            a = o.lang;
          if (xe.hasOwnProperty(i) && -1 !== xe[i].indexOf(a))
            return { country: i, lang: a };
        }
        for (var u = 0, c = Jn(); u < c.length; u++) {
          var s = c[u].country;
          if (xe.hasOwnProperty(s)) return { country: s, lang: xe[s][0] };
        }
        return { lang: _e.EN, country: Ie.US };
      }
      function Rt() {
        return ct(Pe.CSP_NONCE);
      }
      function At() {
        return ut().hasOwnProperty(Pe.ENABLE_3DS);
      }
      function St(n) {
        var e = (function(n, e) {
          if ("object" != typeof n || null === n) return n;
          var t = n[Symbol.toPrimitive];
          if (void 0 !== t) {
            var r = t.call(n, "string");
            if ("object" != typeof r) return r;
            throw new TypeError("@@toPrimitive must return a primitive value.");
          }
          return String(n);
        })(n);
        return "symbol" == typeof e ? e : String(e);
      }
      var It = {
        LOGGER: "/xoplatform/logger/api/logger",
        AUTH: "/v1/oauth2/token",
        ORDER: "/v2/checkout/orders"
      };
      function _t() {
        return bt(), "https://www.sandbox.paypal.com";
      }
      function xt() {
        return Boolean(M().match(/\.paypal\.com(:\d+)?$/));
      }
      var Pt = { DEBUG: "debug", INFO: "info", WARN: "warn", ERROR: "error" },
        Mt = { FILE: "file:" },
        Ft = [Pt.WARN, Pt.ERROR],
        Dt = [Pt.ERROR, Pt.WARN, Pt.INFO, Pt.DEBUG],
        kt = 6e4,
        Ht = Pt.WARN;
      function Ut(n) {
        return (function(n) {
          var e = n.url,
            t = n.method,
            r = void 0 === t ? "get" : t,
            o = n.headers,
            i = void 0 === o ? {} : o,
            a = n.json,
            u = n.data,
            c = n.body,
            s = n.win,
            l = void 0 === s ? window : s,
            d = n.timeout,
            f = void 0 === d ? 0 : d;
          return new T(function(n, t) {
            if ((a && u) || (a && c) || (u && a))
              throw new Error(
                "Only options.json or options.data or options.body should be passed"
              );
            for (var o = {}, s = 0, d = Object.keys(i); s < d.length; s++) {
              var p = d[s];
              o[p.toLowerCase()] = i[p];
            }
            a
              ? (o[Te.CONTENT_TYPE] = o[Te.CONTENT_TYPE] || "application/json")
              : (u || c) &&
                (o[Te.CONTENT_TYPE] =
                  o[Te.CONTENT_TYPE] ||
                  "application/x-www-form-urlencoded; charset=utf-8"),
              (o[Te.ACCEPT] = o[Te.ACCEPT] || "application/json");
            for (var h = 0; h < be.length; h++)
              for (
                var E = (0, be[h])(), y = 0, m = Object.keys(E);
                y < m.length;
                y++
              ) {
                var g = m[y];
                o[g.toLowerCase()] = E[g];
              }
            var w = new l.XMLHttpRequest();
            for (var v in (w.addEventListener(
              "load",
              function() {
                var o = (function(n) {
                  void 0 === n && (n = "");
                  for (
                    var e = {}, t = 0, r = n.trim().split("\n");
                    t < r.length;
                    t++
                  ) {
                    var o = r[t].split(":"),
                      i = o[0],
                      a = o.slice(1);
                    e[i.toLowerCase()] = a.join(":").trim();
                  }
                  return e;
                })(this.getAllResponseHeaders());
                if (!this.status)
                  return t(
                    new Error(
                      "Request to " +
                        r.toLowerCase() +
                        " " +
                        e +
                        " failed: no response status code."
                    )
                  );
                var i = o["content-type"],
                  a =
                    i &&
                    (0 === i.indexOf("application/json") ||
                      0 === i.indexOf("text/json")),
                  u = this.responseText;
                try {
                  u = JSON.parse(u);
                } catch (n) {
                  if (a)
                    return t(
                      new Error("Invalid json: " + this.responseText + ".")
                    );
                }
                return n({ status: this.status, headers: o, body: u });
              },
              !1
            ),
            w.addEventListener(
              "error",
              function(n) {
                t(
                  new Error(
                    "Request to " +
                      r.toLowerCase() +
                      " " +
                      e +
                      " failed: " +
                      n.toString() +
                      "."
                  )
                );
              },
              !1
            ),
            w.open(r, e, !0),
            o))
              o.hasOwnProperty(v) && w.setRequestHeader(v, o[v]);
            a
              ? (c = JSON.stringify(a))
              : u &&
                (c = Object.keys(u)
                  .map(function(n) {
                    return (
                      encodeURIComponent(n) +
                      "=" +
                      (u ? encodeURIComponent(u[n]) : "")
                    );
                  })
                  .join("&")),
              (w.timeout = f),
              (w.ontimeout = function() {
                t(
                  new Error(
                    "Request to " + r.toLowerCase() + " " + e + " has timed out"
                  )
                );
              }),
              w.send(c);
          });
        })({
          url: n.url,
          method: n.method,
          headers: n.headers,
          json: n.json
        }).then(En);
      }
      function Bt(n, e) {
        for (var t in e) e.hasOwnProperty(t) && e[t] && !n[t] && (n[t] = e[t]);
      }
      function jt() {
        return Le({ name: Ct() });
      }
      function Wt() {
        return jt().getSessionID();
      }
      function Zt(n) {
        return jt().getState(n);
      }
      function Gt() {
        return hn(Gt, function() {
          return (function(n) {
            var e = n.url,
              t = n.prefix,
              r = n.logLevel,
              o = void 0 === r ? Ht : r,
              i = n.transport,
              a = void 0 === i ? Ut : i,
              u = n.flushInterval,
              c = void 0 === u ? kt : u,
              s = [],
              l = [],
              d = [],
              f = [],
              p = [],
              E = [];
            function y(n, e, t) {
              if (
                Vn() &&
                window.console &&
                window.console.log &&
                !(Dt.indexOf(n) > Dt.indexOf(o))
              ) {
                var r = [e];
                r.push(t),
                  (t.error || t.warning) &&
                    r.push("\n\n", t.error || t.warning);
                try {
                  window.console[n] && window.console[n].apply
                    ? window.console[n].apply(window.console, r)
                    : window.console.log &&
                      window.console.log.apply &&
                      window.console.log.apply(window.console, r);
                } catch (n) {}
              }
            }
            function m() {
              return T.try(function() {
                if (
                  Vn() &&
                  window.location.protocol !== Mt.FILE &&
                  (s.length || l.length)
                ) {
                  for (var n = {}, t = 0; t < f.length; t++)
                    Bt(n, (0, f[t])(n));
                  for (var r = {}, o = 0; o < E.length; o++)
                    Bt(r, (0, E[o])(r));
                  var i = a({
                    method: "POST",
                    url: e,
                    headers: r,
                    json: { events: s, meta: n, tracking: l }
                  });
                  return (s = []), (l = []), i.then(En);
                }
              });
            }
            var g,
              w,
              v,
              C,
              L =
                (void 0 === w && (w = 50),
                an(function() {
                  C && clearTimeout(C);
                  var n = (v = v || new T());
                  return (
                    (C = setTimeout(function() {
                      (v = null),
                        (C = null),
                        T.try(g).then(
                          function(e) {
                            n.resolve(e);
                          },
                          function(e) {
                            n.reject(e);
                          }
                        );
                    }, w)),
                    n
                  );
                }, on((g = m)) + "::promiseDebounced"));
            function b(n, e, r) {
              if ((void 0 === r && (r = {}), !Vn())) return O;
              t && (e = t + "_" + e);
              for (
                var o = h({}, Nn(r), { timestamp: Date.now().toString() }),
                  i = 0;
                i < d.length;
                i++
              )
                Bt(o, (0, d[i])(o));
              return (
                (function(n, e, t) {
                  s.push({ level: n, event: e, payload: t }),
                    -1 !== Ft.indexOf(n) && L();
                })(n, e, o),
                y(n, e, o),
                O
              );
            }
            function N(n, e) {
              return n.push(e), O;
            }
            Vn() && Rn(L, c);
            var O = {
              debug: function(n, e) {
                return b(Pt.DEBUG, n, e);
              },
              info: function(n, e) {
                return b(Pt.INFO, n, e);
              },
              warn: function(n, e) {
                return b(Pt.WARN, n, e);
              },
              error: function(n, e) {
                return b(Pt.ERROR, n, e);
              },
              track: function(n) {
                if ((void 0 === n && (n = {}), !Vn())) return O;
                for (var e = Nn(n), t = 0; t < p.length; t++)
                  Bt(e, (0, p[t])(e));
                return y(Pt.DEBUG, "track", e), l.push(e), O;
              },
              flush: L,
              immediateFlush: m,
              addPayloadBuilder: function(n) {
                return N(d, n);
              },
              addMetaBuilder: function(n) {
                return N(f, n);
              },
              addTrackingBuilder: function(n) {
                return N(p, n);
              },
              addHeaderBuilder: function(n) {
                return N(E, n);
              },
              setTransport: function(n) {
                return (a = n), O;
              }
            };
            return O;
          })({ url: (void 0 === (n = It.LOGGER) && (n = ""), "" + _t() + n) });
          var n;
        });
      }
      function qt() {
        return un(
          JSON.stringify({ url: lt(), stageHost: bt(), apiStageHost: Nt() })
        ).replace(/\=+$/, "");
      }
      function Kt() {
        return hn(Kt, function() {
          return An();
        });
      }
      var zt = {
          METHOD: "postrobot_method",
          HELLO: "postrobot_hello",
          OPEN_TUNNEL: "postrobot_open_tunnel"
        },
        Vt = "*",
        Yt = {
          CROSS_DOMAIN_ZALGO_PROMISE: "cross_domain_zalgo_promise",
          CROSS_DOMAIN_FUNCTION: "cross_domain_function",
          CROSS_DOMAIN_WINDOW: "cross_domain_window"
        };
      function Xt(n) {
        return (
          void 0 === n && (n = window),
          n !== window
            ? n.__post_robot_10_0_31__
            : (n.__post_robot_10_0_31__ = n.__post_robot_10_0_31__ || {})
        );
      }
      var Jt = function() {
        return {};
      };
      function $t(n, e) {
        return (
          void 0 === n && (n = "store"),
          void 0 === e && (e = Jt),
          kn(Xt(), n, function() {
            var n = e();
            return {
              has: function(e) {
                return n.hasOwnProperty(e);
              },
              get: function(e, t) {
                return n.hasOwnProperty(e) ? n[e] : t;
              },
              set: function(e, t) {
                return (n[e] = t), t;
              },
              del: function(e) {
                delete n[e];
              },
              getOrSet: function(e, t) {
                return kn(n, e, t);
              },
              reset: function() {
                n = e();
              },
              keys: function() {
                return Object.keys(n);
              }
            };
          })
        );
      }
      var Qt = function() {};
      function nr() {
        var n = Xt();
        return (
          (n.WINDOW_WILDCARD = n.WINDOW_WILDCARD || new Qt()), n.WINDOW_WILDCARD
        );
      }
      function er(n, e) {
        return (
          void 0 === n && (n = "store"),
          void 0 === e && (e = Jt),
          $t("windowStore").getOrSet(n, function() {
            var t = new rn(),
              r = function(n) {
                return t.getOrSet(n, e);
              };
            return {
              has: function(e) {
                return r(e).hasOwnProperty(n);
              },
              get: function(e, t) {
                var o = r(e);
                return o.hasOwnProperty(n) ? o[n] : t;
              },
              set: function(e, t) {
                return (r(e)[n] = t), t;
              },
              del: function(e) {
                delete r(e)[n];
              },
              getOrSet: function(e, t) {
                return kn(r(e), n, t);
              }
            };
          })
        );
      }
      function tr() {
        return $t("instance").getOrSet("instanceID", sn);
      }
      function rr(n, e) {
        var t = e.domain,
          r = er("helloPromises"),
          o = r.get(n);
        o && o.resolve({ domain: t });
        var i = T.resolve({ domain: t });
        return r.set(n, i), i;
      }
      function or(n, e) {
        return (0, e.send)(
          n,
          zt.HELLO,
          { instanceID: tr() },
          { domain: Vt, timeout: -1 }
        ).then(function(e) {
          var t = e.origin,
            r = e.data.instanceID;
          return rr(n, { domain: t }), { win: n, domain: t, instanceID: r };
        });
      }
      function ir(n, e) {
        var t = e.send;
        return er("windowInstanceIDPromises").getOrSet(n, function() {
          return or(n, { send: t }).then(function(n) {
            return n.instanceID;
          });
        });
      }
      function ar(n) {
        er("knownWindows").set(n, !0);
      }
      var ur,
        cr = {
          FUNCTION: "function",
          ERROR: "error",
          PROMISE: "promise",
          REGEX: "regex",
          DATE: "date",
          ARRAY: "array",
          OBJECT: "object",
          STRING: "string",
          NUMBER: "number",
          BOOLEAN: "boolean",
          NULL: "null",
          UNDEFINED: "undefined"
        };
      function sr(n) {
        return (
          "object" == typeof n && null !== n && "string" == typeof n.__type__
        );
      }
      function lr(n) {
        return void 0 === n
          ? cr.UNDEFINED
          : null === n
          ? cr.NULL
          : Array.isArray(n)
          ? cr.ARRAY
          : "function" == typeof n
          ? cr.FUNCTION
          : "object" == typeof n
          ? n instanceof Error
            ? cr.ERROR
            : "function" == typeof n.then
            ? cr.PROMISE
            : "[object RegExp]" === {}.toString.call(n)
            ? cr.REGEX
            : "[object Date]" === {}.toString.call(n)
            ? cr.DATE
            : cr.OBJECT
          : "string" == typeof n
          ? cr.STRING
          : "number" == typeof n
          ? cr.NUMBER
          : "boolean" == typeof n
          ? cr.BOOLEAN
          : void 0;
      }
      function dr(n, e) {
        return { __type__: n, __val__: e };
      }
      var fr,
        pr =
          (((ur = {})[cr.FUNCTION] = function() {}),
          (ur[cr.ERROR] = function(n) {
            return dr(cr.ERROR, {
              message: n.message,
              stack: n.stack,
              code: n.code
            });
          }),
          (ur[cr.PROMISE] = function() {}),
          (ur[cr.REGEX] = function(n) {
            return dr(cr.REGEX, n.source);
          }),
          (ur[cr.DATE] = function(n) {
            return dr(cr.DATE, n.toJSON());
          }),
          (ur[cr.ARRAY] = function(n) {
            return n;
          }),
          (ur[cr.OBJECT] = function(n) {
            return n;
          }),
          (ur[cr.STRING] = function(n) {
            return n;
          }),
          (ur[cr.NUMBER] = function(n) {
            return n;
          }),
          (ur[cr.BOOLEAN] = function(n) {
            return n;
          }),
          (ur[cr.NULL] = function(n) {
            return n;
          }),
          ur),
        hr = {},
        Er =
          (((fr = {})[cr.FUNCTION] = function() {
            throw new Error(
              "Function serialization is not implemented; nothing to deserialize"
            );
          }),
          (fr[cr.ERROR] = function(n) {
            var e = n.stack,
              t = n.code,
              r = new Error(n.message);
            return (r.code = t), (r.stack = e + "\n\n" + r.stack), r;
          }),
          (fr[cr.PROMISE] = function() {
            throw new Error(
              "Promise serialization is not implemented; nothing to deserialize"
            );
          }),
          (fr[cr.REGEX] = function(n) {
            return new RegExp(n);
          }),
          (fr[cr.DATE] = function(n) {
            return new Date(n);
          }),
          (fr[cr.ARRAY] = function(n) {
            return n;
          }),
          (fr[cr.OBJECT] = function(n) {
            return n;
          }),
          (fr[cr.STRING] = function(n) {
            return n;
          }),
          (fr[cr.NUMBER] = function(n) {
            return n;
          }),
          (fr[cr.BOOLEAN] = function(n) {
            return n;
          }),
          (fr[cr.NULL] = function(n) {
            return n;
          }),
          fr),
        yr = {};
      function mr() {
        for (
          var n = $t("idToProxyWindow"), e = 0, t = n.keys();
          e < t.length;
          e++
        ) {
          var r = t[e];
          n.get(r).shouldClean() && n.del(r);
        }
      }
      function gr(n, e) {
        var t = e.send,
          r = e.id,
          o = void 0 === r ? sn() : r,
          i = n.then(function(n) {
            if (F(n)) return D(n).name;
          });
        return {
          id: o,
          getType: function() {
            return n.then(function(n) {
              return _(n) ? R.POPUP : R.IFRAME;
            });
          },
          getInstanceID: pn(function() {
            return n.then(function(n) {
              return ir(n, { send: t });
            });
          }),
          close: function() {
            return n.then(Q);
          },
          getName: function() {
            return n.then(function(n) {
              if (!G(n)) return F(n) ? D(n).name : i;
            });
          },
          focus: function() {
            return n.then(function(n) {
              n.focus();
            });
          },
          isClosed: function() {
            return n.then(function(n) {
              return G(n);
            });
          },
          setLocation: function(e) {
            return n.then(function(n) {
              if (F(n))
                try {
                  if (n.location && "function" == typeof n.location.replace)
                    return void n.location.replace(e);
                } catch (n) {}
              n.location = e;
            });
          },
          setName: function(e) {
            return n.then(function(n) {
              var t = F(n),
                r = (function(n) {
                  if (F(n)) return D(n).frameElement;
                  for (
                    var e = 0, t = document.querySelectorAll("iframe");
                    e < t.length;
                    e++
                  ) {
                    var r = t[e];
                    if (r && r.contentWindow && r.contentWindow === n) return r;
                  }
                })(n);
              if (!t)
                throw new Error(
                  "Can not set name for cross-domain window: " + e
                );
              (D(n).name = e),
                r && r.setAttribute("name", e),
                (i = T.resolve(e));
            });
          }
        };
      }
      new T(function(n) {
        if (window.document && window.document.body)
          return n(window.document.body);
        var e = setInterval(function() {
          if (window.document && window.document.body)
            return clearInterval(e), n(window.document.body);
        }, 10);
      });
      var wr = (function() {
        function n(n) {
          var e = n.send,
            t = n.win,
            r = n.serializedWindow;
          (this.id = void 0),
            (this.isProxyWindow = !0),
            (this.serializedWindow = void 0),
            (this.actualWindow = void 0),
            (this.actualWindowPromise = void 0),
            (this.send = void 0),
            (this.name = void 0),
            (this.actualWindowPromise = new T()),
            (this.serializedWindow =
              r || gr(this.actualWindowPromise, { send: e })),
            $t("idToProxyWindow").set(this.getID(), this),
            t && this.setWindow(t, { send: e });
        }
        var e = n.prototype;
        return (
          (e.getID = function() {
            return this.serializedWindow.id;
          }),
          (e.getType = function() {
            return this.serializedWindow.getType();
          }),
          (e.isPopup = function() {
            return this.getType().then(function(n) {
              return n === R.POPUP;
            });
          }),
          (e.setLocation = function(n) {
            var e = this;
            return this.serializedWindow.setLocation(n).then(function() {
              return e;
            });
          }),
          (e.getName = function() {
            return this.serializedWindow.getName();
          }),
          (e.setName = function(n) {
            var e = this;
            return this.serializedWindow.setName(n).then(function() {
              return e;
            });
          }),
          (e.close = function() {
            var n = this;
            return this.serializedWindow.close().then(function() {
              return n;
            });
          }),
          (e.focus = function() {
            var n = this,
              e = this.isPopup(),
              t = this.getName(),
              r = T.hash({ isPopup: e, name: t }).then(function(n) {
                var e = n.name;
                n.isPopup && e && window.open("", e);
              }),
              o = this.serializedWindow.focus();
            return T.all([r, o]).then(function() {
              return n;
            });
          }),
          (e.isClosed = function() {
            return this.serializedWindow.isClosed();
          }),
          (e.getWindow = function() {
            return this.actualWindow;
          }),
          (e.setWindow = function(n, e) {
            var t = e.send;
            (this.actualWindow = n),
              this.actualWindowPromise.resolve(this.actualWindow),
              (this.serializedWindow = gr(this.actualWindowPromise, {
                send: t,
                id: this.getID()
              })),
              er("winToProxyWindow").set(n, this);
          }),
          (e.awaitWindow = function() {
            return this.actualWindowPromise;
          }),
          (e.matchWindow = function(n, e) {
            var t = this,
              r = e.send;
            return T.try(function() {
              return t.actualWindow
                ? n === t.actualWindow
                : T.hash({
                    proxyInstanceID: t.getInstanceID(),
                    knownWindowInstanceID: ir(n, { send: r })
                  }).then(function(e) {
                    var o = e.proxyInstanceID === e.knownWindowInstanceID;
                    return o && t.setWindow(n, { send: r }), o;
                  });
            });
          }),
          (e.unwrap = function() {
            return this.actualWindow || this;
          }),
          (e.getInstanceID = function() {
            return this.serializedWindow.getInstanceID();
          }),
          (e.shouldClean = function() {
            return Boolean(this.actualWindow && G(this.actualWindow));
          }),
          (e.serialize = function() {
            return this.serializedWindow;
          }),
          (n.unwrap = function(e) {
            return n.isProxyWindow(e) ? e.unwrap() : e;
          }),
          (n.serialize = function(e, t) {
            var r = t.send;
            return mr(), n.toProxyWindow(e, { send: r }).serialize();
          }),
          (n.deserialize = function(e, t) {
            var r = t.send;
            return (
              mr(),
              $t("idToProxyWindow").get(e.id) ||
                new n({ serializedWindow: e, send: r })
            );
          }),
          (n.isProxyWindow = function(n) {
            return Boolean(n && !$(n) && n.isProxyWindow);
          }),
          (n.toProxyWindow = function(e, t) {
            var r = t.send;
            if ((mr(), n.isProxyWindow(e))) return e;
            var o = e;
            return er("winToProxyWindow").get(o) || new n({ win: o, send: r });
          }),
          n
        );
      })();
      function vr(n, e, t, r, o) {
        var i = er("methodStore"),
          a = $t("proxyWindowMethods");
        wr.isProxyWindow(r)
          ? a.set(n, { val: e, name: t, domain: o, source: r })
          : (a.del(n),
            (i.getOrSet(r, function() {
              return {};
            })[n] = { domain: o, name: t, val: e, source: r }));
      }
      function Cr(n, e) {
        var t = er("methodStore"),
          r = $t("proxyWindowMethods");
        return (
          t.getOrSet(n, function() {
            return {};
          })[e] || r.get(e)
        );
      }
      function Lr(n, e, t, r, o) {
        var i, a, u;
        (a = (i = { on: o.on, send: o.send }).on),
          (u = i.send),
          $t("builtinListeners").getOrSet("functionCalls", function() {
            return a(zt.METHOD, { domain: Vt }, function(n) {
              var e = n.source,
                t = n.origin,
                r = n.data,
                o = r.id,
                i = r.name,
                a = Cr(e, o);
              if (!a)
                throw new Error(
                  "Could not find method '" +
                    i +
                    "' with id: " +
                    r.id +
                    " in " +
                    M(window)
                );
              var c = a.source,
                s = a.domain,
                l = a.val;
              return T.try(function() {
                if (!Y(s, t))
                  throw new Error(
                    "Method '" +
                      r.name +
                      "' domain " +
                      JSON.stringify(
                        Dn(a.domain) ? a.domain.source : a.domain
                      ) +
                      " does not match origin " +
                      t +
                      " in " +
                      M(window)
                  );
                if (wr.isProxyWindow(c))
                  return c.matchWindow(e, { send: u }).then(function(n) {
                    if (!n)
                      throw new Error(
                        "Method call '" +
                          r.name +
                          "' failed - proxy window does not match source in " +
                          M(window)
                      );
                  });
              })
                .then(
                  function() {
                    return l.apply({ source: e, origin: t }, r.args);
                  },
                  function(n) {
                    return T.try(function() {
                      if (l.onError) return l.onError(n);
                    }).then(function() {
                      var e;
                      throw (n.stack &&
                        (n.stack =
                          "Remote call to " +
                          i +
                          "(" +
                          (void 0 === (e = r.args) && (e = []),
                          _n(e)
                            .map(function(n) {
                              return "string" == typeof n
                                ? "'" + n + "'"
                                : void 0 === n
                                ? "undefined"
                                : null === n
                                ? "null"
                                : "boolean" == typeof n
                                ? n.toString()
                                : Array.isArray(n)
                                ? "[ ... ]"
                                : "object" == typeof n
                                ? "{ ... }"
                                : "function" == typeof n
                                ? "() => { ... }"
                                : "<" + typeof n + ">";
                            })
                            .join(", ")) +
                          ") failed\n\n" +
                          n.stack),
                      n);
                    });
                  }
                )
                .then(function(n) {
                  return { result: n, id: o, name: i };
                });
            });
          });
        var c = t.__id__ || sn();
        n = wr.unwrap(n);
        var s = t.__name__ || t.name || r;
        return (
          "string" == typeof s &&
            "function" == typeof s.indexOf &&
            0 === s.indexOf("anonymous::") &&
            (s = s.replace("anonymous::", r + "::")),
          wr.isProxyWindow(n)
            ? (vr(c, t, s, n, e),
              n.awaitWindow().then(function(n) {
                vr(c, t, s, n, e);
              }))
            : vr(c, t, s, n, e),
          dr(Yt.CROSS_DOMAIN_FUNCTION, { id: c, name: s })
        );
      }
      function Tr(n, e, t, r) {
        var o,
          i = r.on,
          a = r.send;
        return (function(n, e) {
          void 0 === e && (e = hr);
          var t = JSON.stringify(n, function(n) {
            var t = this[n];
            if (sr(this)) return t;
            var r = lr(t);
            if (!r) return t;
            var o = e[r] || pr[r];
            return o ? o(t, n) : t;
          });
          return void 0 === t ? cr.UNDEFINED : t;
        })(
          t,
          (((o = {})[cr.PROMISE] = function(t, r) {
            return (function(n, e, t, r, o) {
              return dr(Yt.CROSS_DOMAIN_ZALGO_PROMISE, {
                then: Lr(
                  n,
                  e,
                  function(n, e) {
                    return t.then(n, e);
                  },
                  r,
                  { on: o.on, send: o.send }
                )
              });
            })(n, e, t, r, { on: i, send: a });
          }),
          (o[cr.FUNCTION] = function(t, r) {
            return Lr(n, e, t, r, { on: i, send: a });
          }),
          (o[cr.OBJECT] = function(n) {
            return $(n) || wr.isProxyWindow(n)
              ? dr(Yt.CROSS_DOMAIN_WINDOW, wr.serialize(n, { send: a }))
              : n;
          }),
          o)
        );
      }
      function br(n, e, t, r) {
        var o,
          i = r.on,
          a = r.send;
        return (function(n, e) {
          if ((void 0 === e && (e = yr), n !== cr.UNDEFINED))
            return JSON.parse(n, function(n, t) {
              if (sr(this)) return t;
              var r, o;
              if (
                (sr(t)
                  ? ((r = t.__type__), (o = t.__val__))
                  : ((r = lr(t)), (o = t)),
                !r)
              )
                return o;
              var i = e[r] || Er[r];
              return i ? i(o, n) : o;
            });
        })(
          t,
          (((o = {})[Yt.CROSS_DOMAIN_ZALGO_PROMISE] = function(n) {
            return (function(n, e, t) {
              return new T(t.then);
            })(0, 0, n);
          }),
          (o[Yt.CROSS_DOMAIN_FUNCTION] = function(t) {
            return (function(n, e, t, r) {
              var o = t.id,
                i = t.name,
                a = r.send,
                u = function(t) {
                  function r() {
                    var u = arguments;
                    return wr
                      .toProxyWindow(n, { send: a })
                      .awaitWindow()
                      .then(function(n) {
                        var c = Cr(n, o);
                        if (c && c.val !== r)
                          return c.val.apply(
                            { source: window, origin: M() },
                            u
                          );
                        var s = { domain: e, fireAndForget: t.fireAndForget },
                          l = [].slice.call(u);
                        return a(
                          n,
                          zt.METHOD,
                          { id: o, name: i, args: l },
                          s
                        ).then(function(n) {
                          if (!t.fireAndForget) return n.data.result;
                        });
                      })
                      .catch(function(n) {
                        throw n;
                      });
                  }
                  return (
                    void 0 === t && (t = {}),
                    (r.__name__ = i),
                    (r.__origin__ = e),
                    (r.__source__ = n),
                    (r.__id__ = o),
                    (r.origin = e),
                    r
                  );
                },
                c = u();
              return (c.fireAndForget = u({ fireAndForget: !0 })), c;
            })(n, e, t, { on: i, send: a });
          }),
          (o[Yt.CROSS_DOMAIN_WINDOW] = function(n) {
            return wr.deserialize(n, { send: a });
          }),
          o)
        );
      }
      var Nr = {};
      function Or(n, e, t, r) {
        var o,
          i = r.on,
          a = r.send;
        if (G(n)) throw new Error("Window is closed");
        for (
          var u = Tr(
              n,
              e,
              (((o = {}).__post_robot_10_0_31__ = h(
                { id: sn(), origin: M(window) },
                t
              )),
              o),
              { on: i, send: a }
            ),
            c = Object.keys(Nr),
            s = [],
            l = 0;
          l < c.length;
          l++
        ) {
          var d = c[l];
          try {
            Nr[d](n, u, e);
          } catch (n) {
            s.push(n);
          }
        }
        if (s.length === c.length)
          throw new Error(
            "All post-robot messaging strategies failed:\n\n" +
              s
                .map(function(n, e) {
                  return e + ". " + mn(n);
                })
                .join("\n\n")
          );
      }
      (Nr.postrobot_post_message = function(n, e, t) {
        (Array.isArray(t) ? t : "string" == typeof t ? [t] : [Vt])
          .map(function(n) {
            return 0 === n.indexOf(N.FILE) ? Vt : n;
          })
          .forEach(function(t) {
            n.postMessage(e, t);
          });
      }),
        (Nr.postrobot_global = function(n, e) {
          if (
            !(function(n) {
              return (
                (n = n || window).navigator.mockUserAgent ||
                n.navigator.userAgent
              );
            })(window).match(/MSIE|rv:11|trident|edge\/12|edge\/13/i)
          )
            throw new Error("Global messaging not needed for browser");
          if (!F(n))
            throw new Error(
              "Post message through global disabled between different domain windows"
            );
          if (!1 !== V(window, n))
            throw new Error(
              "Can only use global to communicate between two different windows, not between frames"
            );
          var t = Xt(n);
          if (!t)
            throw new Error("Can not find postRobot global on foreign window");
          t.receiveMessage({ source: window, origin: M(), data: e });
        });
      var Rr,
        Ar = "__domain_regex__";
      function Sr(n) {
        return $t("responseListeners").get(n);
      }
      function Ir(n) {
        $t("responseListeners").del(n);
      }
      function _r(n) {
        return $t("erroredResponseListeners").has(n);
      }
      function xr(n) {
        var e = n.name,
          t = n.win,
          r = n.domain,
          o = er("requestListeners");
        if ((t === Vt && (t = null), r === Vt && (r = null), !e))
          throw new Error("Name required to get request listener");
        for (var i = 0, a = [t, nr()]; i < a.length; i++) {
          var u = a[i];
          if (u) {
            var c = o.get(u);
            if (c) {
              var s = c[e];
              if (s) {
                if (r && "string" == typeof r) {
                  if (s[r]) return s[r];
                  if (s[Ar])
                    for (var l = 0, d = s[Ar]; l < d.length; l++) {
                      var f = d[l],
                        p = f.listener;
                      if (Y(f.regex, r)) return p;
                    }
                }
                if (s[Vt]) return s[Vt];
              }
            }
          }
        }
      }
      var Pr =
        (((Rr = {}).postrobot_message_request = function(n, e, t, r) {
          var o = r.on,
            i = r.send,
            a = xr({ name: t.name, win: n, domain: e }),
            u =
              t.name === zt.METHOD && t.data && "string" == typeof t.data.name
                ? t.data.name + "()"
                : t.name;
          function c(r, a, c) {
            if ((void 0 === c && (c = {}), !t.fireAndForget && !G(n)))
              try {
                Or(
                  n,
                  e,
                  h({ type: r, ack: a, hash: t.hash, name: t.name }, c),
                  { on: o, send: i }
                );
              } catch (n) {
                throw new Error(
                  "Send response message failed for " +
                    u +
                    " in " +
                    M() +
                    "\n\n" +
                    mn(n)
                );
              }
          }
          return T.all([
            c("postrobot_message_ack"),
            T.try(function() {
              if (!a)
                throw new Error(
                  "No handler found for post message: " +
                    t.name +
                    " from " +
                    e +
                    " in " +
                    window.location.protocol +
                    "//" +
                    window.location.host +
                    window.location.pathname
                );
              if (!Y(a.domain, e))
                throw new Error(
                  "Request origin " +
                    e +
                    " does not match domain " +
                    a.domain.toString()
                );
              return a.handler({ source: n, origin: e, data: t.data });
            }).then(
              function(n) {
                return c("postrobot_message_response", "success", { data: n });
              },
              function(n) {
                return c("postrobot_message_response", "error", { error: n });
              }
            )
          ])
            .then(En)
            .catch(function(n) {
              if (a && a.handleError) return a.handleError(n);
              throw n;
            });
        }),
        (Rr.postrobot_message_ack = function(n, e, t) {
          if (!_r(t.hash)) {
            var r = Sr(t.hash);
            if (!r)
              throw new Error(
                "No handler found for post message ack for message: " +
                  t.name +
                  " from " +
                  e +
                  " in " +
                  window.location.protocol +
                  "//" +
                  window.location.host +
                  window.location.pathname
              );
            try {
              if (!Y(r.domain, e))
                throw new Error(
                  "Ack origin " +
                    e +
                    " does not match domain " +
                    r.domain.toString()
                );
              if (n !== r.win)
                throw new Error("Ack source does not match registered window");
            } catch (n) {
              r.promise.reject(n);
            }
            r.ack = !0;
          }
        }),
        (Rr.postrobot_message_response = function(n, e, t) {
          if (!_r(t.hash)) {
            var r,
              o = Sr(t.hash);
            if (!o)
              throw new Error(
                "No handler found for post message response for message: " +
                  t.name +
                  " from " +
                  e +
                  " in " +
                  window.location.protocol +
                  "//" +
                  window.location.host +
                  window.location.pathname
              );
            if (!Y(o.domain, e))
              throw new Error(
                "Response origin " +
                  e +
                  " does not match domain " +
                  ((r = o.domain),
                  Array.isArray(r)
                    ? "(" + r.join(" | ") + ")"
                    : b(r)
                    ? "RegExp(" + r.toString()
                    : r.toString())
              );
            if (n !== o.win)
              throw new Error(
                "Response source does not match registered window"
              );
            Ir(t.hash),
              "error" === t.ack
                ? o.promise.reject(t.error)
                : "success" === t.ack &&
                  o.promise.resolve({ source: n, origin: e, data: t.data });
          }
        }),
        Rr);
      function Mr(n, e) {
        var t = e.on,
          r = e.send,
          o = $t("receivedMessages");
        try {
          if (!window || window.closed || !n.source) return;
        } catch (n) {
          return;
        }
        var i = n.source,
          a = n.origin,
          u = (function(n, e, t, r) {
            var o,
              i = r.on,
              a = r.send;
            try {
              o = br(e, t, n, { on: i, send: a });
            } catch (n) {
              return;
            }
            if (
              o &&
              "object" == typeof o &&
              null !== o &&
              (o = o.__post_robot_10_0_31__) &&
              "object" == typeof o &&
              null !== o &&
              o.type &&
              "string" == typeof o.type &&
              Pr[o.type]
            )
              return o;
          })(n.data, i, a, { on: t, send: r });
        u &&
          (ar(i),
          o.has(u.id) ||
            (o.set(u.id, !0),
            (G(i) && !u.fireAndForget) ||
              (0 === u.origin.indexOf(N.FILE) && (a = N.FILE + "//"),
              Pr[u.type](i, a, u, { on: t, send: r }))));
      }
      function Fr(n, e, t) {
        if (!n) throw new Error("Expected name");
        if (("function" == typeof e && ((t = e), (e = {})), !t))
          throw new Error("Expected handler");
        ((e = e || {}).name = n), (e.handler = t || e.handler);
        var r = e.window,
          o = e.domain,
          i = (function n(e, t) {
            var r = e.name,
              o = e.win,
              i = e.domain,
              a = er("requestListeners");
            if (!r || "string" != typeof r)
              throw new Error("Name required to add request listener");
            if (Array.isArray(o)) {
              for (var u = [], c = 0, s = o; c < s.length; c++)
                u.push(n({ name: r, domain: i, win: s[c] }, t));
              return {
                cancel: function() {
                  for (var n = 0; n < u.length; n++) u[n].cancel();
                }
              };
            }
            if (Array.isArray(i)) {
              for (var l = [], d = 0, f = i; d < f.length; d++)
                l.push(n({ name: r, win: o, domain: f[d] }, t));
              return {
                cancel: function() {
                  for (var n = 0; n < l.length; n++) l[n].cancel();
                }
              };
            }
            var p = xr({ name: r, win: o, domain: i });
            if (((o && o !== Vt) || (o = nr()), (i = i || Vt), p))
              throw o && i
                ? new Error(
                    "Request listener already exists for " +
                      r +
                      " on domain " +
                      i.toString() +
                      " for " +
                      (o === nr() ? "wildcard" : "specified") +
                      " window"
                  )
                : o
                ? new Error(
                    "Request listener already exists for " +
                      r +
                      " for " +
                      (o === nr() ? "wildcard" : "specified") +
                      " window"
                  )
                : i
                ? new Error(
                    "Request listener already exists for " +
                      r +
                      " on domain " +
                      i.toString()
                  )
                : new Error("Request listener already exists for " + r);
            var h,
              E,
              y = a.getOrSet(o, function() {
                return {};
              }),
              m = kn(y, r, function() {
                return {};
              }),
              g = i.toString();
            return (
              Dn(i)
                ? (h = kn(m, Ar, function() {
                    return [];
                  })).push((E = { regex: i, listener: t }))
                : (m[g] = t),
              {
                cancel: function() {
                  delete m[g],
                    E && (h.splice(h.indexOf(E, 1)), h.length || delete m[Ar]),
                    Object.keys(m).length || delete y[r],
                    o && !Object.keys(y).length && a.del(o);
                }
              }
            );
          })(
            { name: n, win: r, domain: o },
            {
              handler: e.handler,
              handleError:
                e.errorHandler ||
                function(n) {
                  throw n;
                },
              window: r,
              domain: o || Vt,
              name: n
            }
          );
        return {
          cancel: function() {
            i.cancel();
          }
        };
      }
      function Dr(n, e, t) {
        "function" == typeof (e = e || {}) && ((t = e), (e = {}));
        var r,
          o = new T();
        return (
          (e.errorHandler = function(n) {
            r.cancel(), o.reject(n);
          }),
          (r = Fr(n, e, function(n) {
            if ((r.cancel(), o.resolve(n), t)) return t(n);
          })),
          (o.cancel = r.cancel),
          o
        );
      }
      var kr = function n(e, t, r, o) {
        var i = (o = o || {}).domain || Vt,
          a = o.timeout || -1,
          u = o.timeout || 5e3,
          c = o.fireAndForget || !1;
        return T.try(function() {
          if (
            ((function(n, e, t) {
              if (!n) throw new Error("Expected name");
              if (t && "string" != typeof t && !Array.isArray(t) && !Dn(t))
                throw new TypeError(
                  "Expected domain to be a string, array, or regex"
                );
              if (G(e)) throw new Error("Target window is closed");
            })(t, e, i),
            (function(n, e) {
              var t = q(e);
              if (t) return t === n;
              if (e === n) return !1;
              if (B(e) === e) return !1;
              for (var r = 0, o = H(n); r < o.length; r++)
                if (o[r] === e) return !0;
              return !1;
            })(window, e))
          )
            return (function(n, e, t) {
              void 0 === e && (e = 5e3), void 0 === t && (t = "Window");
              var r = (function(n) {
                return er("helloPromises").getOrSet(n, function() {
                  return new T();
                });
              })(n);
              return (
                -1 !== e &&
                  (r = r.timeout(
                    e,
                    new Error(t + " did not load after " + e + "ms")
                  )),
                r
              );
            })(e, u);
        })
          .then(function(t) {
            return (function(n, e, t, r) {
              var o = r.send;
              return "string" == typeof e
                ? T.resolve(e)
                : T.try(function() {
                    return (
                      t ||
                      or(n, { send: o }).then(function(n) {
                        return n.domain;
                      })
                    );
                  }).then(function(n) {
                    if (!Y(e, e))
                      throw new Error(
                        "Domain " + wn(e) + " does not match " + wn(e)
                      );
                    return n;
                  });
            })(e, i, (void 0 === t ? {} : t).domain, { send: n });
          })
          .then(function(o) {
            i = o;
            var u =
                t === zt.METHOD && r && "string" == typeof r.name
                  ? r.name + "()"
                  : t,
              s = new T(),
              l = t + "_" + sn();
            if (!c) {
              var d = { name: t, win: e, domain: i, promise: s };
              !(function(n, e) {
                $t("responseListeners").set(n, e);
              })(l, d);
              var f = er("requestPromises").getOrSet(e, function() {
                return [];
              });
              f.push(s),
                s.catch(function() {
                  !(function(n) {
                    $t("erroredResponseListeners").set(n, !0);
                  })(l),
                    Ir(l);
                });
              var p = (function(n) {
                  return er("knownWindows").get(n, !1);
                })(e)
                  ? 1e4
                  : 2e3,
                h = a,
                E = p,
                y = h,
                m = Rn(function() {
                  return G(e)
                    ? s.reject(
                        new Error(
                          "Window closed for " +
                            t +
                            " before " +
                            (d.ack ? "response" : "ack")
                        )
                      )
                    : d.cancelled
                    ? s.reject(
                        new Error("Response listener was cancelled for " + t)
                      )
                    : ((E = Math.max(E - 500, 0)),
                      -1 !== y && (y = Math.max(y - 500, 0)),
                      d.ack || 0 !== E
                        ? 0 === y
                          ? s.reject(
                              new Error(
                                "No response for postMessage " +
                                  u +
                                  " in " +
                                  M() +
                                  " in " +
                                  h +
                                  "ms"
                              )
                            )
                          : void 0
                        : s.reject(
                            new Error(
                              "No ack for postMessage " +
                                u +
                                " in " +
                                M() +
                                " in " +
                                p +
                                "ms"
                            )
                          ));
                }, 500);
              s.finally(function() {
                m.cancel(), f.splice(f.indexOf(s, 1));
              }).catch(En);
            }
            try {
              Or(
                e,
                i,
                {
                  type: "postrobot_message_request",
                  hash: l,
                  name: t,
                  data: r,
                  fireAndForget: c
                },
                { on: Fr, send: n }
              );
            } catch (n) {
              throw new Error(
                "Send request message failed for " +
                  u +
                  " in " +
                  M() +
                  "\n\n" +
                  mn(n)
              );
            }
            return c ? s.resolve() : s;
          });
      };
      function Hr(n, e, t) {
        return Tr(n, e, t, { on: Fr, send: kr });
      }
      function Ur(n, e, t) {
        return br(n, e, t, { on: Fr, send: kr });
      }
      function Br(n) {
        return new wr({ send: kr, win: n });
      }
      function jr(n) {
        return wr.toProxyWindow(n, { send: kr });
      }
      function Wr() {
        var n, e, t;
        Xt().initialized ||
          ((Xt().initialized = !0),
          (function(n) {
            var e = n.on,
              t = n.send,
              r = Xt();
            r.receiveMessage =
              r.receiveMessage ||
              function(n) {
                return Mr(n, { on: e, send: t });
              };
          })({ on: Fr, send: kr }),
          (e = (n = { on: Fr, send: kr }).on),
          (t = n.send),
          $t().getOrSet("postMessageListener", function() {
            return ce(window, "message", function(n) {
              !(function(n, e) {
                var t = e.on,
                  r = e.send,
                  o = n.source || n.sourceElement,
                  i = n.origin || (n.originalEvent && n.originalEvent.origin),
                  a = n.data;
                if (("null" === i && (i = N.FILE + "//"), o)) {
                  if (!i)
                    throw new Error("Post message did not have origin domain");
                  Mr({ source: o, origin: i, data: a }, { on: t, send: r });
                }
              })(n, { on: e, send: t });
            });
          }),
          (function(n) {
            var e = n.on,
              t = n.send;
            $t("builtinListeners").getOrSet("helloListener", function() {
              var n = e(zt.HELLO, { domain: Vt }, function(n) {
                  return (
                    rr(n.source, { domain: n.origin }), { instanceID: tr() }
                  );
                }),
                r = q();
              return r && or(r, { send: t }).catch(En), n;
            });
          })({ on: Fr, send: kr }));
      }
      function Zr() {
        var n;
        !(function() {
          for (
            var n = $t("responseListeners"), e = 0, t = n.keys();
            e < t.length;
            e++
          ) {
            var r = t[e],
              o = n.get(r);
            o && (o.cancelled = !0), n.del(r);
          }
        })(),
          (n = $t().get("postMessageListener")) && n.cancel(),
          delete window.__post_robot_10_0_31__;
      }
      var Gr,
        qr = !0;
      function Kr(n) {
        for (var e = 0, t = er("requestPromises").get(n, []); e < t.length; e++)
          t[e]
            .reject(
              new Error(
                "Window " +
                  (G(n) ? "closed" : "cleaned up") +
                  " before response"
              )
            )
            .catch(En);
      }
      function zr(n) {
        if ((void 0 === n && (n = window), !F(n)))
          throw new Error("Can not get global for window on different domain");
        return n.__zoid_9_0_42__ || (n.__zoid_9_0_42__ = {}), n.__zoid_9_0_42__;
      }
      function Vr(n) {
        return {
          get: function() {
            var e = this;
            return T.try(function() {
              if (e.source && e.source !== window)
                throw new Error(
                  "Can not call get on proxy object from a remote window"
                );
              return n;
            });
          }
        };
      }
      Wr();
      var Yr = "zoid",
        Xr = {
          DELEGATE: Yr + "_delegate",
          ALLOW_DELEGATE: Yr + "_allow_delegate"
        },
        Jr = { RAW: "raw", UID: "uid" },
        $r = { OPENER: "opener", PARENT: "parent", GLOBAL: "global" },
        Qr = { JSON: "json", DOTIFY: "dotify", BASE64: "base64" },
        no = R,
        eo = "*",
        to = { WIDTH: "300px", HEIGHT: "150px" },
        ro = {
          RENDER: "zoid-render",
          RENDERED: "zoid-rendered",
          DISPLAY: "zoid-display",
          ERROR: "zoid-error",
          CLOSE: "zoid-close",
          DESTROY: "zoid-destroy",
          PROPS: "zoid-props",
          RESIZE: "zoid-resize",
          FOCUS: "zoid-focus"
        };
      function oo(n, e, t, r, o) {
        if (!n.hasOwnProperty(t)) return r;
        var i = n[t];
        return "function" == typeof i.childDecorate
          ? i.childDecorate({
              value: r,
              close: o.close,
              focus: o.focus,
              onError: o.onError,
              onProps: o.onProps,
              resize: o.resize,
              getParent: o.getParent,
              getParentDomain: o.getParentDomain,
              show: o.show,
              hide: o.hide
            })
          : r;
      }
      function io(n) {
        return hn(
          io,
          function() {
            if (!n) throw new Error("No window name");
            var e = n.split("__"),
              t = e[1],
              r = e[2],
              o = e[3];
            if (t !== Yr)
              throw new Error("Window not rendered by zoid - got " + t);
            if (!r) throw new Error("Expected component name");
            if (!o) throw new Error("Expected encoded payload");
            try {
              return JSON.parse(cn(o));
            } catch (n) {
              throw new Error(
                "Can not decode window name payload: " + o + ": " + mn(n)
              );
            }
          },
          [n]
        );
      }
      function ao() {
        try {
          return io(window.name);
        } catch (n) {}
      }
      function uo() {
        return T.try(function() {
          window.focus();
        });
      }
      function co() {
        return T.try(function() {
          window.close();
        });
      }
      function so(n, e, t) {
        return T.try(function() {
          return "function" == typeof n.queryParam
            ? n.queryParam({ value: t })
            : "string" == typeof n.queryParam
            ? n.queryParam
            : e;
        });
      }
      function lo(n, e, t) {
        return T.try(function() {
          return "function" == typeof n.queryValue && Fn(t)
            ? n.queryValue({ value: t })
            : t;
        });
      }
      var fo = function() {
        return {};
      };
      function po(n, e, t) {
        void 0 === e && (e = fo()), void 0 === t && (t = window);
        var r,
          o,
          i,
          a = n.propsDef,
          u = n.containerTemplate,
          c = n.prerenderTemplate,
          s = n.tag,
          l = n.name,
          d = n.attributes,
          f = n.dimensions,
          p = n.autoResize,
          E = n.url,
          y = n.domain,
          m = new T(),
          g = [],
          w = Hn(),
          v = {},
          C = e.event ? e.event : An(),
          L = e.props ? e.props : {},
          b = !0,
          O = e.onError,
          R = e.getProxyContainer,
          A = e.show,
          S = e.hide,
          I = e.close,
          _ = e.renderContainer,
          x = e.getProxyWindow,
          P = e.setProxyWin,
          k = e.openFrame,
          H = e.openPrerenderFrame,
          U = e.prerender,
          B = e.open,
          j = e.openPrerender,
          W = e.watchForUnload,
          Z = function(n) {
            for (var e = {}, t = 0, r = Object.keys(L); t < r.length; t++) {
              var o = r[t],
                i = a[o];
              (i && !1 === i.sendToChild) ||
                (i && i.sameDomain && !Y(n, M(window))) ||
                (e[o] = L[o]);
            }
            return e;
          },
          q = function() {
            return x
              ? x()
              : T.try(function() {
                  var n = L.window;
                  if (n) {
                    var e = jr(n);
                    return (
                      w.register(function() {
                        return n.close();
                      }),
                      e
                    );
                  }
                  return new wr({ send: kr });
                });
          },
          K = function(n) {
            return R
              ? R(n)
              : T.try(function() {
                  return (
                    (e = n),
                    new T(function(n, t) {
                      var r = wn(e),
                        o = ne(e);
                      if (o) return n(o);
                      if (Bn())
                        return t(
                          new Error(
                            "Document is ready and element " +
                              r +
                              " does not exist"
                          )
                        );
                      var i = setInterval(function() {
                        return (o = ne(e))
                          ? (clearInterval(i), n(o))
                          : Bn()
                          ? (clearInterval(i),
                            t(
                              new Error(
                                "Document is ready and element " +
                                  r +
                                  " does not exist"
                              )
                            ))
                          : void 0;
                      }, 10);
                    })
                  );
                  var e;
                }).then(function(n) {
                  return (
                    ve(n) &&
                      (n = (function(n) {
                        var e = (function(n) {
                          var e = (function(n) {
                            for (; n.parentNode; ) n = n.parentNode;
                            if (ve(n)) return n;
                          })(n);
                          if (e.host) return e.host;
                        })(n);
                        if (!e) throw new Error("Element is not in shadow dom");
                        if (ve(e))
                          throw new Error("Host element is also in shadow dom");
                        var t = "shadow-slot-" + sn(),
                          r = document.createElement("slot");
                        r.setAttribute("name", t), n.appendChild(r);
                        var o = document.createElement("div");
                        return o.setAttribute("slot", t), e.appendChild(o), o;
                      })(n)),
                    Vr(n)
                  );
                });
          },
          $ = function(n, e, t, r) {
            var o = Hr(n, t, Z(t)),
              i =
                e === M()
                  ? { type: Jr.UID, uid: r }
                  : { type: Jr.RAW, value: o };
            if (i.type === Jr.UID) {
              var a = zr(window);
              (a.props = a.props || {}),
                (a.props[r] = o),
                w.register(function() {
                  delete a.props[r];
                });
            }
            return i;
          },
          nn = function(n) {
            return P
              ? P(n)
              : T.try(function() {
                  r = n;
                });
          },
          en = function() {
            return A
              ? A()
              : T.try(function() {
                  if (((b = !0), o)) return o.get().then(Ee);
                });
          },
          tn = function() {
            return S
              ? S()
              : T.try(function() {
                  if (((b = !1), o)) return o.get().then(ye);
                });
          },
          rn = function() {
            return "function" == typeof E ? E({ props: L }) : E;
          },
          on = function() {
            return y && "string" == typeof y ? y : X(rn());
          },
          an = function() {
            return y && Dn(y) ? y : on();
          },
          cn = function(n, e) {
            var t = e.windowName;
            return k
              ? k(n, { windowName: t })
              : T.try(function() {
                  if (n === no.IFRAME)
                    return Vr(
                      ue({ attributes: h({ name: t, title: l }, d.iframe) })
                    );
                });
          },
          ln = function(n) {
            return H
              ? H(n)
              : T.try(function() {
                  if (n === no.IFRAME)
                    return Vr(
                      ue({
                        attributes: h(
                          {
                            name:
                              "__zoid_prerender_frame__" +
                              l +
                              "_" +
                              sn() +
                              "__",
                            title: "prerender__" + l
                          },
                          d.iframe
                        )
                      })
                    );
                });
          },
          dn = function(n, e, t) {
            return j
              ? j(n, e, t)
              : T.try(function() {
                  if (n === no.IFRAME) {
                    if (!t)
                      throw new Error("Expected proxy frame to be passed");
                    return t.get().then(function(n) {
                      return (
                        w.register(function() {
                          return me(n);
                        }),
                        ae(n)
                          .then(function(n) {
                            return D(n);
                          })
                          .then(function(n) {
                            return jr(n);
                          })
                      );
                    });
                  }
                  if (n === no.POPUP) return e;
                  throw new Error("No render target found");
                });
          },
          fn = function() {
            return T.try(function() {
              if (r) return T.all([C.trigger(ro.FOCUS), r.focus()]).then(En);
            });
          },
          pn = function(n, e, t, r) {
            if (e === M(window)) {
              var o = zr(window);
              return (
                (o.windows = o.windows || {}),
                (o.windows[t] = window),
                w.register(function() {
                  delete o.windows[t];
                }),
                { type: $r.GLOBAL, uid: t }
              );
            }
            return r === no.POPUP
              ? { type: $r.OPENER }
              : { type: $r.PARENT, distance: z(window) };
          },
          hn = function(n) {
            return T.try(function() {
              (i = n),
                m.resolve(),
                w.register(function() {
                  return n.close.fireAndForget().catch(En);
                });
            });
          },
          gn = function(n) {
            var e = n.width,
              t = n.height;
            return T.try(function() {
              C.trigger(ro.RESIZE, { width: e, height: t });
            });
          },
          Cn = function(n) {
            return T.try(function() {
              return C.trigger(ro.DESTROY);
            })
              .catch(En)
              .then(function() {
                return w.all();
              })
              .then(function() {
                m.asyncReject(n || new Error("Component destroyed"));
              });
          },
          Ln = function() {
            return I
              ? I()
              : T.try(function() {
                  return C.trigger(ro.CLOSE);
                }).then(function() {
                  return Cn(new Error("Window closed"));
                });
          },
          Tn = function(n, e) {
            var t = e.proxyWin,
              r = e.proxyFrame,
              o = e.windowName;
            return B
              ? B(n, { proxyWin: t, proxyFrame: r, windowName: o })
              : T.try(function() {
                  if (n === no.IFRAME) {
                    if (!r)
                      throw new Error("Expected proxy frame to be passed");
                    return r.get().then(function(n) {
                      return ae(n).then(function(e) {
                        var t,
                          r,
                          o,
                          i =
                            ((t = n),
                            (r = yn((r = Ln))),
                            ge(t)
                              ? r()
                              : (o = Rn(function() {
                                  ge(t) && (o.cancel(), r());
                                }, 50)),
                            {
                              cancel: function() {
                                o && o.cancel();
                              }
                            });
                        return (
                          w.register(function() {
                            return i.cancel();
                          }),
                          w.register(function() {
                            return me(n);
                          }),
                          w.register(function() {
                            return Kr(e);
                          }),
                          e
                        );
                      });
                    });
                  }
                  if (n === no.POPUP) {
                    var e = f.width,
                      t = f.height;
                    (e = Se(e, window.outerWidth)),
                      (t = Se(t, window.outerWidth));
                    var i = re(
                      "",
                      h({ name: o, width: e, height: t }, d.popup)
                    );
                    return (
                      w.register(function() {
                        return Q(i);
                      }),
                      w.register(function() {
                        return Kr(i);
                      }),
                      i
                    );
                  }
                  throw new Error("No render target found");
                }).then(function(n) {
                  return t.setWindow(n, { send: kr }), t;
                });
          },
          bn = function() {
            return T.try(function() {
              var n = ce(
                  window,
                  "unload",
                  yn(function() {
                    Cn(new Error("Window navigated away"));
                  })
                ),
                e = J(t, Cn, 3e3);
              if ((w.register(e.cancel), w.register(n.cancel), W)) return W();
            });
          },
          Nn = function(n) {
            var e = !1;
            return n
              .isClosed()
              .then(function(t) {
                return t
                  ? ((e = !0), Ln())
                  : T.delay(200)
                      .then(function() {
                        return n.isClosed();
                      })
                      .then(function(n) {
                        if (n) return (e = !0), Ln();
                      });
              })
              .then(function() {
                return e;
              });
          },
          On = function(n) {
            return O
              ? O(n)
              : T.try(function() {
                  if (-1 === g.indexOf(n))
                    return g.push(n), m.asyncReject(n), C.trigger(ro.ERROR, n);
                });
          };
        hn.onError = On;
        var Sn = function(n, e) {
            return n({
              container: e.container,
              context: e.context,
              uid: e.uid,
              doc: e.doc,
              frame: e.frame,
              prerenderFrame: e.prerenderFrame,
              focus: fn,
              close: Ln,
              state: v,
              props: L,
              tag: s,
              dimensions: f,
              event: C
            });
          },
          In = function(n, e) {
            var t = e.context,
              r = e.uid;
            return U
              ? U(n, { context: t, uid: r })
              : T.try(function() {
                  if (c) {
                    var e = n.getWindow();
                    if (
                      e &&
                      F(e) &&
                      (function(n) {
                        try {
                          if (!n.location.href) return !0;
                          if ("about:blank" === n.location.href) return !0;
                        } catch (n) {}
                        return !1;
                      })(e)
                    ) {
                      var o = (e = D(e)).document,
                        i = Sn(c, { context: t, uid: r, doc: o });
                      if (i) {
                        if (i.ownerDocument !== o)
                          throw new Error(
                            "Expected prerender template to have been created with document from child window"
                          );
                        oe(e, i);
                        var a = p.width,
                          u = void 0 !== a && a,
                          s = p.height,
                          l = void 0 !== s && s,
                          d = p.element,
                          f = void 0 === d ? "body" : d;
                        (f = ne(f, o)) &&
                          (u || l) &&
                          we(
                            f,
                            function(n) {
                              gn({
                                width: u ? n.width : void 0,
                                height: l ? n.height : void 0
                              });
                            },
                            { width: u, height: l, win: e }
                          );
                      }
                    }
                  }
                });
          },
          _n = function(n, e) {
            var t = e.proxyFrame,
              r = e.proxyPrerenderFrame,
              i = e.context,
              a = e.uid;
            return _
              ? _(n, {
                  proxyFrame: t,
                  proxyPrerenderFrame: r,
                  context: i,
                  uid: a
                })
              : T.hash({
                  container: n.get(),
                  frame: t ? t.get() : null,
                  prerenderFrame: r ? r.get() : null
                }).then(function(n) {
                  var e = n.container,
                    t = Sn(u, {
                      context: i,
                      uid: a,
                      container: e,
                      frame: n.frame,
                      prerenderFrame: n.prerenderFrame,
                      doc: document
                    });
                  if (t)
                    return (
                      b || ye(t),
                      $n(e, t),
                      w.register(function() {
                        return me(t);
                      }),
                      (o = Vr(t))
                    );
                });
          },
          xn = function() {
            return {
              state: v,
              event: C,
              close: Ln,
              focus: fn,
              resize: gn,
              onError: On,
              updateProps: Mn,
              show: en,
              hide: tn
            };
          },
          Pn = function(n, e) {
            void 0 === e && (e = !1);
            var t = xn();
            !(function(n, e, t, r, o) {
              void 0 === o && (o = !1), vn(e, (t = t || {}));
              for (
                var i = o ? [] : [].concat(Object.keys(n)),
                  a = 0,
                  u = Object.keys(t);
                a < u.length;
                a++
              ) {
                var c = u[a];
                -1 === i.indexOf(c) && i.push(c);
              }
              for (
                var s = [],
                  l = r.state,
                  d = r.close,
                  f = r.focus,
                  p = r.event,
                  h = r.onError,
                  E = 0;
                E < i.length;
                E++
              ) {
                var y = i[E],
                  m = n[y],
                  g = t[y];
                if (m) {
                  var w = m.alias;
                  if (
                    (w && (!Fn(g) && Fn(t[w]) && (g = t[w]), s.push(w)),
                    m.value &&
                      (g = m.value({
                        props: e,
                        state: l,
                        close: d,
                        focus: f,
                        event: p,
                        onError: h
                      })),
                    !Fn(g) &&
                      m.default &&
                      (g = m.default({
                        props: e,
                        state: l,
                        close: d,
                        focus: f,
                        event: p,
                        onError: h
                      })),
                    Fn(g) &&
                      ("array" === m.type
                        ? !Array.isArray(g)
                        : typeof g !== m.type))
                  )
                    throw new TypeError(
                      "Prop is not of type " + m.type + ": " + y
                    );
                  e[y] = g;
                }
              }
              for (var v = 0; v < s.length; v++) delete e[s[v]];
              for (var C = 0, L = Object.keys(e); C < L.length; C++) {
                var T = L[C],
                  b = n[T],
                  N = e[T];
                b &&
                  Fn(N) &&
                  b.decorate &&
                  (e[T] = b.decorate({
                    value: N,
                    props: e,
                    state: l,
                    close: d,
                    focus: f,
                    event: p,
                    onError: h
                  }));
              }
              for (var O = 0, R = Object.keys(n); O < R.length; O++) {
                var A = R[O];
                if (!1 !== n[A].required && !Fn(e[A]))
                  throw new Error('Expected prop "' + A + '" to be defined');
              }
            })(a, L, n, t, e);
          },
          Mn = function(n) {
            return (
              Pn(n, !0),
              m.then(function() {
                var n = r;
                if (i && n)
                  return i.updateProps(Z(an())).catch(function(e) {
                    return Nn(n).then(function(n) {
                      if (!n) throw e;
                    });
                  });
              })
            );
          };
        return {
          init: function() {
            C.on(ro.RENDER, function() {
              return L.onRender();
            }),
              C.on(ro.DISPLAY, function() {
                return L.onDisplay();
              }),
              C.on(ro.RENDERED, function() {
                return L.onRendered();
              }),
              C.on(ro.CLOSE, function() {
                return L.onClose();
              }),
              C.on(ro.DESTROY, function() {
                return L.onDestroy();
              }),
              C.on(ro.RESIZE, function() {
                return L.onResize();
              }),
              C.on(ro.FOCUS, function() {
                return L.onFocus();
              }),
              C.on(ro.PROPS, function(n) {
                return L.onProps(n);
              }),
              C.on(ro.ERROR, function(n) {
                return L && L.onError
                  ? L.onError(n)
                  : m.reject(n).then(function() {
                      setTimeout(function() {
                        throw n;
                      }, 1);
                    });
              }),
              w.register(C.reset);
          },
          render: function(n, e, t) {
            return T.try(function() {
              var o = Yr + "-" + s + "-" + sn(),
                i = an(),
                u = on();
              !(function(n, e, t) {
                if (n !== window) {
                  if (!V(window, n))
                    throw new Error("Can only renderTo an adjacent frame");
                  var r = M();
                  if (!Y(e, r) && !F(n))
                    throw new Error(
                      "Can not render remotely to " +
                        e.toString() +
                        " - can only render to " +
                        r
                    );
                  if (t && "string" != typeof t)
                    throw new Error(
                      "Container passed to renderTo must be a string selector, got " +
                        typeof t +
                        " }"
                    );
                }
              })(n, i, e);
              var c = T.try(function() {
                  if (n !== window)
                    return (function(n, e) {
                      for (
                        var t = {}, r = 0, o = Object.keys(L);
                        r < o.length;
                        r++
                      ) {
                        var i = o[r],
                          u = a[i];
                        u && u.allowDelegate && (t[i] = L[i]);
                      }
                      var c = kr(e, Xr.DELEGATE + "_" + l, {
                        overrides: {
                          props: t,
                          event: C,
                          close: Ln,
                          onError: On
                        }
                      })
                        .then(function(n) {
                          var t = n.data.parent;
                          return (
                            w.register(function() {
                              if (!G(e)) return t.destroy();
                            }),
                            t.getDelegateOverrides()
                          );
                        })
                        .catch(function(n) {
                          throw new Error(
                            "Unable to delegate rendering. Possibly the component is not loaded in the target window.\n\n" +
                              mn(n)
                          );
                        });
                      return (
                        (R = function() {
                          for (
                            var n = arguments.length, e = new Array(n), t = 0;
                            t < n;
                            t++
                          )
                            e[t] = arguments[t];
                          return c.then(function(n) {
                            return n.getProxyContainer.apply(n, e);
                          });
                        }),
                        (_ = function() {
                          for (
                            var n = arguments.length, e = new Array(n), t = 0;
                            t < n;
                            t++
                          )
                            e[t] = arguments[t];
                          return c.then(function(n) {
                            return n.renderContainer.apply(n, e);
                          });
                        }),
                        (A = function() {
                          for (
                            var n = arguments.length, e = new Array(n), t = 0;
                            t < n;
                            t++
                          )
                            e[t] = arguments[t];
                          return c.then(function(n) {
                            return n.show.apply(n, e);
                          });
                        }),
                        (S = function() {
                          for (
                            var n = arguments.length, e = new Array(n), t = 0;
                            t < n;
                            t++
                          )
                            e[t] = arguments[t];
                          return c.then(function(n) {
                            return n.hide.apply(n, e);
                          });
                        }),
                        (W = function() {
                          for (
                            var n = arguments.length, e = new Array(n), t = 0;
                            t < n;
                            t++
                          )
                            e[t] = arguments[t];
                          return c.then(function(n) {
                            return n.watchForUnload.apply(n, e);
                          });
                        }),
                        n === no.IFRAME
                          ? ((x = function() {
                              for (
                                var n = arguments.length,
                                  e = new Array(n),
                                  t = 0;
                                t < n;
                                t++
                              )
                                e[t] = arguments[t];
                              return c.then(function(n) {
                                return n.getProxyWindow.apply(n, e);
                              });
                            }),
                            (k = function() {
                              for (
                                var n = arguments.length,
                                  e = new Array(n),
                                  t = 0;
                                t < n;
                                t++
                              )
                                e[t] = arguments[t];
                              return c.then(function(n) {
                                return n.openFrame.apply(n, e);
                              });
                            }),
                            (H = function() {
                              for (
                                var n = arguments.length,
                                  e = new Array(n),
                                  t = 0;
                                t < n;
                                t++
                              )
                                e[t] = arguments[t];
                              return c.then(function(n) {
                                return n.openPrerenderFrame.apply(n, e);
                              });
                            }),
                            (U = function() {
                              for (
                                var n = arguments.length,
                                  e = new Array(n),
                                  t = 0;
                                t < n;
                                t++
                              )
                                e[t] = arguments[t];
                              return c.then(function(n) {
                                return n.prerender.apply(n, e);
                              });
                            }),
                            (B = function() {
                              for (
                                var n = arguments.length,
                                  e = new Array(n),
                                  t = 0;
                                t < n;
                                t++
                              )
                                e[t] = arguments[t];
                              return c.then(function(n) {
                                return n.open.apply(n, e);
                              });
                            }),
                            (j = function() {
                              for (
                                var n = arguments.length,
                                  e = new Array(n),
                                  t = 0;
                                t < n;
                                t++
                              )
                                e[t] = arguments[t];
                              return c.then(function(n) {
                                return n.openPrerender.apply(n, e);
                              });
                            }))
                          : n === no.POPUP &&
                            (P = function() {
                              for (
                                var n = arguments.length,
                                  e = new Array(n),
                                  t = 0;
                                t < n;
                                t++
                              )
                                e[t] = arguments[t];
                              return c.then(function(n) {
                                return n.setProxyWin.apply(n, e);
                              });
                            }),
                        c
                      );
                    })(t, n);
                }),
                d = L.window,
                f = bn(),
                p = (function(n, e) {
                  var t = {},
                    r = Object.keys(e);
                  return T.all(
                    r.map(function(r) {
                      var o = n[r];
                      if (o)
                        return T.resolve()
                          .then(function() {
                            var n = e[r];
                            if (n && o.queryParam) return n;
                          })
                          .then(function(n) {
                            if (null != n)
                              return T.all([so(o, r, n), lo(o, 0, n)]).then(
                                function(n) {
                                  var e,
                                    i = n[0],
                                    a = n[1];
                                  if ("boolean" == typeof a) e = a.toString();
                                  else if ("string" == typeof a)
                                    e = a.toString();
                                  else if ("object" == typeof a && null !== a) {
                                    if (o.serialization === Qr.JSON)
                                      e = JSON.stringify(a);
                                    else if (o.serialization === Qr.BASE64)
                                      e = btoa(JSON.stringify(a));
                                    else if (
                                      o.serialization === Qr.DOTIFY ||
                                      !o.serialization
                                    ) {
                                      e = (function n(e, t, r) {
                                        for (var o in (void 0 === t && (t = ""),
                                        void 0 === r && (r = {}),
                                        (t = t ? t + "." : t),
                                        e))
                                          e.hasOwnProperty(o) &&
                                            null != e[o] &&
                                            "function" != typeof e[o] &&
                                            (e[o] &&
                                            Array.isArray(e[o]) &&
                                            e[o].length &&
                                            e[o].every(function(n) {
                                              return "object" != typeof n;
                                            })
                                              ? (r["" + t + o + "[]"] = e[
                                                  o
                                                ].join(","))
                                              : e[o] && "object" == typeof e[o]
                                              ? (r = n(e[o], "" + t + o, r))
                                              : (r["" + t + o] = e[
                                                  o
                                                ].toString()));
                                        return r;
                                      })(a, r);
                                      for (
                                        var u = 0, c = Object.keys(e);
                                        u < c.length;
                                        u++
                                      ) {
                                        var s = c[u];
                                        t[s] = e[s];
                                      }
                                      return;
                                    }
                                  } else
                                    "number" == typeof a && (e = a.toString());
                                  t[i] = e;
                                }
                              );
                          });
                    })
                  ).then(function() {
                    return t;
                  });
                })(a, L).then(function(n) {
                  return Kn(
                    (function(n) {
                      if (0 !== X(n).indexOf(N.MOCK)) return n;
                      throw new Error(
                        "Mock urls not supported out of test mode"
                      );
                    })(rn()),
                    { query: n }
                  );
                }),
                h = C.trigger(ro.RENDER),
                E = K(e),
                y = q(),
                g = y.then(function(e) {
                  return (function(n) {
                    var e,
                      t,
                      r,
                      o,
                      i,
                      a,
                      u,
                      c,
                      d =
                        ((o = (r =
                          void 0 ===
                          (e = {
                            proxyWin: n.proxyWin,
                            childDomain: n.childDomain,
                            domain: n.domain,
                            target: n.target,
                            context: n.context,
                            uid: n.uid
                          })
                            ? {}
                            : e).proxyWin),
                        (i = r.childDomain),
                        (a = r.domain),
                        void 0 === r.target && window,
                        {
                          uid: (c = r.uid),
                          context: (u = r.context),
                          tag: s,
                          version: "9_0_42",
                          childDomain: i,
                          parentDomain: M(window),
                          parent: pn(0, i, c, u),
                          props: $(o, i, a, c),
                          exports: Hr(
                            o,
                            a,
                            ((t = o),
                            {
                              init: hn,
                              close: Ln,
                              checkClose: function() {
                                return Nn(t);
                              },
                              resize: gn,
                              onError: On,
                              show: en,
                              hide: tn
                            })
                          )
                        });
                    return (
                      "__" + Yr + "__" + l + "__" + un(JSON.stringify(d)) + "__"
                    );
                  })({
                    proxyWin: e,
                    childDomain: u,
                    domain: i,
                    target: n,
                    context: t,
                    uid: o
                  });
                }),
                v = g.then(function(n) {
                  return cn(t, { windowName: n });
                }),
                b = ln(t),
                O = T.hash({
                  proxyContainer: E,
                  proxyFrame: v,
                  proxyPrerenderFrame: b
                })
                  .then(function(n) {
                    return _n(n.proxyContainer, {
                      context: t,
                      uid: o,
                      proxyFrame: n.proxyFrame,
                      proxyPrerenderFrame: n.proxyPrerenderFrame
                    });
                  })
                  .then(function(n) {
                    return n;
                  }),
                I = T.hash({ windowName: g, proxyFrame: v, proxyWin: y }).then(
                  function(n) {
                    var e = n.proxyWin;
                    return d
                      ? e
                      : Tn(t, {
                          windowName: n.windowName,
                          proxyWin: e,
                          proxyFrame: n.proxyFrame
                        });
                  }
                ),
                D = T.hash({ proxyWin: I, proxyPrerenderFrame: b }).then(
                  function(n) {
                    return dn(t, n.proxyWin, n.proxyPrerenderFrame);
                  }
                ),
                Z = I.then(function(n) {
                  return (r = n), nn(n);
                }),
                z = T.hash({ proxyPrerenderWin: D, state: Z }).then(function(
                  n
                ) {
                  return In(n.proxyPrerenderWin, { context: t, uid: o });
                }),
                J = T.hash({ proxyWin: I, windowName: g }).then(function(n) {
                  if (d) return n.proxyWin.setName(n.windowName);
                }),
                Q = T.hash({
                  proxyWin: I,
                  builtUrl: p,
                  windowName: J,
                  prerender: z
                }).then(function(n) {
                  return n.proxyWin.setLocation(n.builtUrl);
                }),
                fn = I.then(function(n) {
                  !(function n(e) {
                    var t = !1;
                    return (
                      w.register(function() {
                        t = !0;
                      }),
                      T.delay(2e3)
                        .then(function() {
                          return e.isClosed();
                        })
                        .then(function(r) {
                          return r ? Ln() : t ? void 0 : n(e);
                        })
                    );
                  })(n);
                }),
                En = T.hash({ container: O, prerender: z }).then(function() {
                  return C.trigger(ro.DISPLAY);
                }),
                yn = I.then(function(n) {}),
                wn = Q.then(function() {
                  return T.try(function() {
                    var n = L.timeout;
                    if (n)
                      return m.timeout(
                        n,
                        new Error(
                          "Loading component timed out after " +
                            n +
                            " milliseconds"
                        )
                      );
                  });
                }),
                vn = m.then(function() {
                  return C.trigger(ro.RENDERED);
                });
              return T.hash({
                initPromise: m,
                buildUrlPromise: p,
                onRenderPromise: h,
                getProxyContainerPromise: E,
                openFramePromise: v,
                openPrerenderFramePromise: b,
                renderContainerPromise: O,
                openPromise: I,
                openPrerenderPromise: D,
                setStatePromise: Z,
                prerenderPromise: z,
                loadUrlPromise: Q,
                buildWindowNamePromise: g,
                setWindowNamePromise: J,
                watchForClosePromise: fn,
                onDisplayPromise: En,
                openBridgePromise: yn,
                runTimeoutPromise: wn,
                onRenderedPromise: vn,
                delegatePromise: c,
                watchForUnloadPromise: f
              });
            })
              .catch(function(n) {
                return T.all([On(n), Cn(n)]).then(
                  function() {
                    throw n;
                  },
                  function() {
                    throw n;
                  }
                );
              })
              .then(En);
          },
          destroy: Cn,
          setProps: Pn,
          getHelpers: xn,
          getDelegateOverrides: function() {
            return T.try(function() {
              return {
                getProxyContainer: K,
                show: en,
                hide: tn,
                renderContainer: _n,
                getProxyWindow: q,
                watchForUnload: bn,
                openFrame: cn,
                openPrerenderFrame: ln,
                prerender: In,
                open: Tn,
                openPrerender: dn,
                setProxyWin: nn
              };
            });
          }
        };
      }
      var ho = {
          register: function(n, e, t, r) {
            var o = r.React,
              i = r.ReactDOM;
            return (function(n) {
              var e, r;
              function a() {
                return n.apply(this, arguments) || this;
              }
              (r = n),
                ((e = a).prototype = Object.create(r.prototype)),
                (e.prototype.constructor = e),
                (e.__proto__ = r);
              var u = a.prototype;
              return (
                (u.render = function() {
                  return o.createElement("div", null);
                }),
                (u.componentDidMount = function() {
                  var n = i.findDOMNode(this),
                    e = t(vn({}, this.props));
                  e.render(n, no.IFRAME), this.setState({ parent: e });
                }),
                (u.componentDidUpdate = function() {
                  this.state &&
                    this.state.parent &&
                    this.state.parent.updateProps(vn({}, this.props)).catch(En);
                }),
                a
              );
            })(o.Component);
          }
        },
        Eo = {
          register: function(n, e, t, r) {
            return r.component(n, {
              render: function(n) {
                return n("div");
              },
              inheritAttrs: !1,
              mounted: function() {
                var n = this.$el;
                (this.parent = t(h({}, this.$attrs))),
                  this.parent.render(n, no.IFRAME);
              },
              watch: {
                $attrs: {
                  handler: function() {
                    this.parent &&
                      this.$attrs &&
                      this.parent.updateProps(h({}, this.$attrs)).catch(En);
                  },
                  deep: !0
                }
              }
            });
          }
        },
        yo = {
          register: function(n, e, t, r) {
            return r.module(n, []).directive(
              n.replace(/-([a-z])/g, function(n) {
                return n[1].toUpperCase();
              }),
              function() {
                for (var n = {}, r = 0, o = Object.keys(e); r < o.length; r++)
                  n[o[r]] = "=";
                return (
                  (n.props = "="),
                  {
                    scope: n,
                    restrict: "E",
                    controller: [
                      "$scope",
                      "$element",
                      function(n, e) {
                        function r() {
                          if (
                            "$apply" !== n.$root.$$phase &&
                            "$digest" !== n.$root.$$phase
                          )
                            try {
                              n.$apply();
                            } catch (n) {}
                        }
                        var o = function() {
                            return Mn(n.props, function(n) {
                              return "function" == typeof n
                                ? function() {
                                    var e = n.apply(this, arguments);
                                    return r(), e;
                                  }
                                : n;
                            });
                          },
                          i = t(o());
                        i.render(e[0], no.IFRAME),
                          n.$watch(function() {
                            i.updateProps(o()).catch(En);
                          });
                      }
                    ]
                  }
                );
              }
            );
          }
        },
        mo = {
          register: function(n, e, t, r) {
            var o = r.NgModule,
              i = r.ElementRef,
              a = r.NgZone,
              u = function(n) {
                return Mn(h({}, n.internalProps, {}, n.props), function(e) {
                  return "function" == typeof e
                    ? function() {
                        var t = arguments,
                          r = this;
                        return n.zone.run(function() {
                          return e.apply(r, t);
                        });
                      }
                    : e;
                });
              },
              c = (0, r.Component)({
                selector: n,
                template: "<div></div>",
                inputs: ["props"]
              }).Class({
                constructor: [
                  i,
                  a,
                  function(n, e) {
                    (this._props = {}), (this.elementRef = n), (this.zone = e);
                  }
                ],
                ngOnInit: function() {
                  var n = this.elementRef.nativeElement;
                  (this.parent = t(u(this))), this.parent.render(n, no.IFRAME);
                },
                ngDoCheck: function() {
                  this.parent &&
                    !(function(n, e) {
                      var t = {};
                      for (var r in n)
                        if (n.hasOwnProperty(r) && ((t[r] = !0), n[r] !== e[r]))
                          return !1;
                      for (var o in e) if (!t[o]) return !1;
                      return !0;
                    })(this._props, this.props) &&
                    ((this._props = h({}, this.props)),
                    this.parent.updateProps(u(this)));
                }
              });
            return o({ declarations: [c], exports: [c] }).Class({
              constructor: function() {}
            });
          }
        },
        go = { VISIBLE: "zoid-visible", INVISIBLE: "zoid-invisible" };
      function wo(n) {
        var e = n.uid,
          t = n.frame,
          r = n.prerenderFrame,
          o = n.doc,
          i = n.props,
          a = n.event,
          u = n.dimensions,
          c = u.width,
          s = u.height;
        if (t && r) {
          var l = o.createElement("div");
          l.setAttribute("id", e);
          var d = o.createElement("style");
          return (
            i.cspNonce && d.setAttribute("nonce", i.cspNonce),
            d.appendChild(
              o.createTextNode(
                "\n            #" +
                  e +
                  " {\n                display: inline-block;\n                position: relative;\n                width: " +
                  c +
                  ";\n                height: " +
                  s +
                  ";\n            }\n\n            #" +
                  e +
                  " > iframe {\n                display: inline-block;\n                position: absolute;\n                width: 100%;\n                height: 100%;\n                top: 0;\n                left: 0;\n                transition: opacity .2s ease-in-out;\n            }\n\n            #" +
                  e +
                  " > iframe." +
                  go.INVISIBLE +
                  " {\n                opacity: 0;\n            }\n\n            #" +
                  e +
                  " > iframe." +
                  go.VISIBLE +
                  " {\n                opacity: 1;\n        }\n        "
              )
            ),
            l.appendChild(t),
            l.appendChild(r),
            l.appendChild(d),
            r.classList.add(go.VISIBLE),
            t.classList.add(go.INVISIBLE),
            a.on(ro.RENDERED, function() {
              r.classList.remove(go.VISIBLE),
                r.classList.add(go.INVISIBLE),
                t.classList.remove(go.INVISIBLE),
                t.classList.add(go.VISIBLE),
                setTimeout(function() {
                  me(r);
                }, 1);
            }),
            a.on(ro.RESIZE, function(n) {
              var e = n.width,
                t = n.height;
              "number" == typeof e && (l.style.width = Ae(e)),
                "number" == typeof t && (l.style.height = Ae(t));
            }),
            l
          );
        }
      }
      function vo(n) {
        var e = n.doc,
          t = n.props,
          r = e.createElement("html"),
          o = e.createElement("body"),
          i = e.createElement("style"),
          a = e.createElement("div");
        return (
          a.classList.add("spinner"),
          t.cspNonce && i.setAttribute("nonce", t.cspNonce),
          r.appendChild(o),
          o.appendChild(a),
          o.appendChild(i),
          i.appendChild(
            e.createTextNode(
              "\n            html, body {\n                width: 100%;\n                height: 100%;\n            }\n\n            .spinner {\n                position: fixed;\n                max-height: 60vmin;\n                max-width: 60vmin;\n                height: 40px;\n                width: 40px;\n                top: 50%;\n                left: 50%;\n                box-sizing: border-box;\n                border: 3px solid rgba(0, 0, 0, .2);\n                border-top-color: rgba(33, 128, 192, 0.8);\n                border-radius: 100%;\n                animation: rotation .7s infinite linear;\n            }\n\n            @keyframes rotation {\n                from {\n                    transform: translateX(-50%) translateY(-50%) rotate(0deg);\n                }\n                to {\n                    transform: translateX(-50%) translateY(-50%) rotate(359deg);\n                }\n            }\n        "
            )
          ),
          r
        );
      }
      var Co = function() {
          return En;
        },
        Lo = function(n) {
          return yn(n.value);
        },
        To = Hn();
      function bo(n) {
        var e = (function(n) {
            var e = n.tag,
              t = n.url,
              r = n.domain,
              o = n.bridgeUrl,
              i = n.props,
              a = void 0 === i ? {} : i,
              u = n.dimensions,
              c = void 0 === u ? {} : u,
              s = n.autoResize,
              l = void 0 === s ? {} : s,
              d = n.allowedParentDomains,
              f = void 0 === d ? eo : d,
              p = n.attributes,
              E = void 0 === p ? {} : p,
              y = n.defaultContext,
              m = void 0 === y ? no.IFRAME : y,
              g = n.containerTemplate,
              w = void 0 === g ? wo : g,
              v = n.prerenderTemplate,
              C = void 0 === v ? vo : v,
              L = n.validate,
              T = n.logger,
              b = void 0 === T ? { info: En } : T,
              N = e.replace(/-/g, "_"),
              O = c.width,
              R = void 0 === O ? to.WIDTH : O,
              A = c.height,
              S = void 0 === A ? to.HEIGHT : A;
            if (
              ((a = h(
                {},
                {
                  window: {
                    type: "object",
                    sendToChild: !1,
                    required: !1,
                    allowDelegate: !0,
                    validate: function(n) {},
                    decorate: function(n) {
                      return jr(n.value);
                    }
                  },
                  timeout: { type: "number", required: !1, sendToChild: !1 },
                  close: {
                    type: "function",
                    required: !1,
                    sendToChild: !1,
                    childDecorate: function(n) {
                      return n.close;
                    }
                  },
                  focus: {
                    type: "function",
                    required: !1,
                    sendToChild: !1,
                    childDecorate: function(n) {
                      return n.focus;
                    }
                  },
                  resize: {
                    type: "function",
                    required: !1,
                    sendToChild: !1,
                    childDecorate: function(n) {
                      return n.resize;
                    }
                  },
                  cspNonce: { type: "string", required: !1 },
                  getParent: {
                    type: "function",
                    required: !1,
                    sendToChild: !1,
                    childDecorate: function(n) {
                      return n.getParent;
                    }
                  },
                  getParentDomain: {
                    type: "function",
                    required: !1,
                    sendToChild: !1,
                    childDecorate: function(n) {
                      return n.getParentDomain;
                    }
                  },
                  show: {
                    type: "function",
                    required: !1,
                    sendToChild: !1,
                    childDecorate: function(n) {
                      return n.show;
                    }
                  },
                  hide: {
                    type: "function",
                    required: !1,
                    sendToChild: !1,
                    childDecorate: function(n) {
                      return n.hide;
                    }
                  },
                  onDisplay: {
                    type: "function",
                    required: !1,
                    sendToChild: !1,
                    allowDelegate: !0,
                    default: Co,
                    decorate: Lo
                  },
                  onRendered: {
                    type: "function",
                    required: !1,
                    sendToChild: !1,
                    default: Co,
                    decorate: Lo
                  },
                  onRender: {
                    type: "function",
                    required: !1,
                    sendToChild: !1,
                    default: Co,
                    decorate: Lo
                  },
                  onClose: {
                    type: "function",
                    required: !1,
                    sendToChild: !1,
                    allowDelegate: !0,
                    default: Co,
                    decorate: Lo
                  },
                  onDestroy: {
                    type: "function",
                    required: !1,
                    sendToChild: !1,
                    allowDelegate: !0,
                    default: Co,
                    decorate: Lo
                  },
                  onResize: {
                    type: "function",
                    required: !1,
                    sendToChild: !1,
                    allowDelegate: !0,
                    default: Co
                  },
                  onFocus: {
                    type: "function",
                    required: !1,
                    sendToChild: !1,
                    allowDelegate: !0,
                    default: Co
                  },
                  onError: {
                    type: "function",
                    required: !1,
                    sendToChild: !1,
                    childDecorate: function(n) {
                      return n.onError;
                    }
                  },
                  onProps: {
                    type: "function",
                    required: !1,
                    sendToChild: !1,
                    default: Co,
                    childDecorate: function(n) {
                      return n.onProps;
                    }
                  }
                },
                {},
                a
              )),
              !w)
            )
              throw new Error("Container template required");
            return {
              name: N,
              tag: e,
              url: t,
              domain: r,
              bridgeUrl: o,
              propsDef: a,
              dimensions: { width: R, height: S },
              autoResize: l,
              allowedParentDomains: f,
              attributes: E,
              defaultContext: m,
              containerTemplate: w,
              prerenderTemplate: C,
              validate: L,
              logger: b
            };
          })(n),
          t = e.name,
          r = e.tag,
          o = e.defaultContext,
          i = e.propsDef,
          a = zr(),
          u = {},
          c = function() {
            var n = ao();
            return Boolean(n && n.tag === r && n.childDomain === M());
          },
          s = fn(function() {
            if (c()) {
              if (window.xprops)
                throw (delete a.components[r],
                new Error(
                  "Can not register " +
                    t +
                    " as child - child already registered"
                ));
              var n = (function(n) {
                var e,
                  t = n.propsDef,
                  r = n.autoResize,
                  o = n.allowedParentDomains,
                  i = [],
                  a = ao();
                if (!a) throw new Error("No child payload found");
                if ("9_0_42" !== a.version)
                  throw new Error(
                    "Parent window has zoid version " +
                      a.version +
                      ", child window has version 9_0_42"
                  );
                var u = a.parentDomain,
                  c = a.exports,
                  s = a.context,
                  l = a.props,
                  d = (function(n) {
                    var e,
                      t,
                      r = n.type;
                    if (r === $r.OPENER) return Un("opener", _(window));
                    if (r === $r.PARENT && "number" == typeof n.distance)
                      return Un(
                        "parent",
                        ((e = window),
                        void 0 === (t = n.distance) && (t = 1),
                        (function(n, e) {
                          void 0 === e && (e = 1);
                          for (var t = n, r = 0; r < e; r++) {
                            if (!t) return;
                            t = I(t);
                          }
                          return t;
                        })(e, z(e) - t))
                      );
                    if (r === $r.GLOBAL && n.uid && "string" == typeof n.uid) {
                      var o = n.uid,
                        i = q(window);
                      if (!i) throw new Error("Can not find ancestor window");
                      for (var a = 0, u = j(i); a < u.length; a++) {
                        var c = u[a];
                        if (F(c)) {
                          var s = zr(c);
                          if (s && s.windows && s.windows[o])
                            return s.windows[o];
                        }
                      }
                    }
                    throw new Error(
                      "Unable to find " + r + " parent component window"
                    );
                  })(a.parent),
                  f = Ur(d, u, c),
                  p = f.show,
                  h = f.hide,
                  E = f.close,
                  y = function() {
                    return d;
                  },
                  m = function() {
                    return u;
                  },
                  g = function(n) {
                    i.push(n);
                  },
                  w = function(n) {
                    return T.try(function() {
                      if (f && f.onError) return f.onError(n);
                      throw n;
                    });
                  },
                  v = function(n) {
                    return f.resize.fireAndForget({
                      width: n.width,
                      height: n.height
                    });
                  },
                  C = function(n, r, o) {
                    void 0 === o && (o = !1);
                    var a = (function(n, e, t, r, o, i) {
                      void 0 === i && (i = !1);
                      for (
                        var a = {}, u = 0, c = Object.keys(t);
                        u < c.length;
                        u++
                      ) {
                        var s = c[u],
                          l = e[s];
                        if (!l || !l.sameDomain || (r === M(window) && F(n))) {
                          var d = oo(e, 0, s, t[s], o);
                          (a[s] = d),
                            l && l.alias && !a[l.alias] && (a[l.alias] = d);
                        }
                      }
                      if (!i)
                        for (var f = 0, p = Object.keys(e); f < p.length; f++) {
                          var h = p[f];
                          t.hasOwnProperty(h) ||
                            (a[h] = oo(e, 0, h, void 0, o));
                        }
                      return a;
                    })(
                      d,
                      t,
                      n,
                      r,
                      {
                        show: p,
                        hide: h,
                        close: E,
                        focus: uo,
                        onError: w,
                        resize: v,
                        onProps: g,
                        getParent: y,
                        getParentDomain: m
                      },
                      o
                    );
                    e ? vn(e, a) : (e = a);
                    for (var u = 0; u < i.length; u++) (0, i[u])(e);
                  },
                  L = function(n) {
                    return T.try(function() {
                      return C(n, u, !0);
                    });
                  };
                return {
                  init: function() {
                    return T.try(function() {
                      return (
                        (function(n, e) {
                          if (!Y(n, e))
                            throw new Error(
                              "Can not be rendered by domain: " + e
                            );
                        })(o, u),
                        ar(d),
                        window.addEventListener("beforeunload", function() {
                          f.checkClose.fireAndForget();
                        }),
                        window.addEventListener("unload", function() {
                          f.checkClose.fireAndForget();
                        }),
                        J(d, function() {
                          co();
                        }),
                        f.init({ updateProps: L, close: co })
                      );
                    })
                      .then(function() {
                        return Zn()
                          .then(function() {
                            if (document.body) return document.body;
                            throw new Error(
                              "Document ready but document.body not present"
                            );
                          })
                          .then(function() {
                            var n = (function() {
                                var n = r.width,
                                  e = r.height,
                                  t = r.element,
                                  o = void 0 === t ? "body" : t;
                                return {
                                  width: void 0 !== n && n,
                                  height: void 0 !== e && e,
                                  element: (o = ne(o))
                                };
                              })(),
                              e = n.width,
                              t = n.height,
                              o = n.element;
                            o &&
                              (e || t) &&
                              s !== no.POPUP &&
                              we(
                                o,
                                function(n) {
                                  v({
                                    width: e ? n.width : void 0,
                                    height: t ? n.height : void 0
                                  });
                                },
                                { width: e, height: t }
                              );
                          });
                      })
                      .catch(function(n) {
                        w(n);
                      });
                  },
                  getProps: function() {
                    return (
                      e ||
                      (C(
                        (function(n, e, t) {
                          var r,
                            o = t.type,
                            i = t.uid;
                          if (o === Jr.RAW) r = t.value;
                          else if (o === Jr.UID) {
                            if (!F(n))
                              throw new Error(
                                "Parent component window is on a different domain - expected " +
                                  M() +
                                  " - can not retrieve props"
                              );
                            var a = zr(n);
                            r = Un("props", a && a.props[i]);
                          }
                          if (!r) throw new Error("Could not find props");
                          return Ur(n, e, r);
                        })(d, u, l),
                        u
                      ),
                      e)
                    );
                  }
                };
              })(e);
              return n.init(), n;
            }
          }),
          l = function(n) {
            (n = n || {}).onDestroy = fn(n.onDestroy || En);
            var t = po(e);
            t.init(),
              t.setProps(n),
              To.register(function() {
                t.destroy(new Error("zoid destroyed all components"));
              });
            var r = function(e, r, i) {
              return T.try(function() {
                if (!$(e)) throw new Error("Must pass window to renderTo");
                return (function(n, e) {
                  return T.try(function() {
                    if (n.window) return jr(n.window).getType();
                    if (e) {
                      if (e !== no.IFRAME && e !== no.POPUP)
                        throw new Error("Unrecognized context: " + e);
                      return e;
                    }
                    return o;
                  });
                })(n, i);
              })
                .then(function(n) {
                  return (
                    (r = (function(n, e) {
                      if (e) {
                        if ("string" != typeof e && !Qn(e))
                          throw new TypeError(
                            "Expected string or element selector to be passed"
                          );
                        return e;
                      }
                      if (n === no.POPUP) return "body";
                      throw new Error(
                        "Expected element to be passed to render iframe"
                      );
                    })(n, r)),
                    t.render(e, r, n)
                  );
                })
                .catch(function(n) {
                  return t.destroy(n).then(function() {
                    throw n;
                  });
                });
            };
            return h({}, t.getHelpers(), {
              render: function(n, e) {
                return r(window, n, e);
              },
              renderTo: function(n, e, t) {
                return r(n, e, t);
              }
            });
          };
        if (
          (s(),
          Fr(Xr.ALLOW_DELEGATE + "_" + t, function() {
            return !0;
          }),
          Fr(Xr.DELEGATE + "_" + t, function(n) {
            return { parent: po(e, n.data.overrides, n.source) };
          }),
          (a.components = a.components || {}),
          a.components[r])
        )
          throw new Error(
            "Can not register multiple components with the same tag: " + r
          );
        return (
          (a.components[r] = !0),
          {
            init: l,
            driver: function(n, e) {
              var t = { react: ho, angular: yo, vue: Eo, angular2: mo };
              if (!t[n])
                throw new Error("Could not find driver for framework: " + n);
              return u[n] || (u[n] = t[n].register(r, i, l, e)), u[n];
            },
            isChild: c,
            canRenderTo: function(n) {
              return kr(n, Xr.ALLOW_DELEGATE + "_" + t)
                .then(function(n) {
                  return n.data;
                })
                .catch(function() {
                  return !1;
                });
            },
            registerChild: s
          }
        );
      }
      function No(n) {
        Wr();
        var e = bo(n),
          t = function(n) {
            return e.init(n);
          };
        (t.driver = function(n, t) {
          return e.driver(n, t);
        }),
          (t.isChild = function() {
            return e.isChild();
          }),
          (t.canRenderTo = function(n) {
            return e.canRenderTo(n);
          });
        var r = e.registerChild();
        return r && (window.xprops = t.xprops = r.getProps()), t;
      }
      function Oo() {
        Gr && Gr.destroyBridges();
        var n = To.all();
        return (To = Hn()), n;
      }
      var Ro = Oo;
      function Ao() {
        return window.xprops && window.xprops.sessionID
          ? window.xprops.sessionID
          : Wt();
      }
      function So() {
        if (!xt())
          throw new Error(
            "Can only determine if iframe rendering is allowed on paypal domain"
          );
        if (!p()) return !0;
        var n = window.xprops && window.xprops.getParent();
        return !(!n || !F(n));
      }
      var Io = function(n) {
          return n === _e.HE || n === _e.AR;
        },
        _o = {
          ELEMENT: "element",
          TEXT: "text",
          COMPONENT: "component",
          FRAGMENT: "fragment"
        };
      function xo(n, e) {
        for (var t = [], r = 0; r < n.length; r++) {
          var o = n[r].render(e);
          if (o)
            if (Array.isArray(o))
              for (var i = 0; i < o.length; i++) {
                var a = o[i];
                a && t.push(a);
              }
            else t.push(o);
        }
        return t;
      }
      var Po = (function() {
          function n(n, e, t) {
            (this.type = _o.ELEMENT),
              (this.name = void 0),
              (this.props = void 0),
              (this.children = void 0),
              (this.onRender = void 0),
              (this.name = n),
              (this.props = e),
              (this.children = t);
            var r = e.onRender;
            "function" == typeof r && ((this.onRender = r), delete e.onRender);
          }
          var e = n.prototype;
          return (
            (e.render = function(n) {
              var e = n(this);
              return this.onRender && this.onRender(e), e;
            }),
            (e.renderChildren = function(n) {
              return xo(this.children, n);
            }),
            n
          );
        })(),
        Mo = (function() {
          function n(n) {
            (this.type = _o.FRAGMENT),
              (this.children = void 0),
              (this.children = n);
          }
          return (
            (n.prototype.render = function(n) {
              return xo(this.children, n);
            }),
            n
          );
        })(),
        Fo = (function() {
          function n(n) {
            (this.type = _o.TEXT), (this.text = void 0), (this.text = n);
          }
          return (
            (n.prototype.render = function(n) {
              return n(this);
            }),
            n
          );
        })(),
        Do = (function() {
          function n(n, e, t) {
            (this.type = _o.COMPONENT),
              (this.component = void 0),
              (this.props = void 0),
              (this.children = void 0),
              (this.component = n),
              (this.props = e),
              (this.children = t);
          }
          var e = n.prototype;
          return (
            (e.renderComponent = function(n) {
              var e = (function(n) {
                var e = ko(Array.isArray(n) ? n : [n]);
                return 1 === e.length
                  ? e[0]
                  : e.length > 1
                  ? new Mo(e)
                  : void 0;
              })(this.component(this.props, this.children));
              if (e) return e.render(n);
            }),
            (e.render = function(n) {
              return n(this);
            }),
            (e.renderChildren = function(n) {
              return xo(this.children, n);
            }),
            n
          );
        })();
      function ko(n) {
        for (var e = [], t = 0; t < n.length; t++) {
          var r = n[t];
          if (r)
            if ("string" == typeof r) e.push(new Fo(r));
            else if (Array.isArray(r))
              for (var o = 0, i = ko(r); o < i.length; o++) e.push(i[o]);
            else {
              if (
                !r ||
                (r.type !== _o.ELEMENT &&
                  r.type !== _o.TEXT &&
                  r.type !== _o.COMPONENT)
              )
                throw new TypeError("Unrecognized node type: " + typeof r);
              e.push(r);
            }
        }
        return e;
      }
      var Ho,
        Uo = function(n, e) {
          for (
            var t = arguments.length, r = new Array(t > 2 ? t - 2 : 0), o = 2;
            o < t;
            o++
          )
            r[o - 2] = arguments[o];
          if (((e = e || {}), (r = ko(r)), "string" == typeof n))
            return new Po(n, e, r);
          if ("function" == typeof n) return new Do(n, e, r);
          throw new TypeError(
            "Expected jsx element to be a string or a function"
          );
        },
        Bo = function(n, e) {
          if (n && Object.keys(n).length)
            throw new Error("Do not pass props to Fragment");
          return e;
        },
        jo = "0123456789abcdef",
        Wo = {
          HTML: "html",
          IFRAME: "iframe",
          SCRIPT: "script",
          NODE: "node",
          DEFAULT: "default"
        },
        Zo = { ID: "id", INNER_HTML: "innerHTML", EL: "el" },
        Go =
          (((Ho = {})[Wo.IFRAME] = function(n, e) {
            var t = e.children[0];
            if (
              1 !== e.children.length ||
              !t ||
              t.type !== _o.ELEMENT ||
              t.name !== Wo.HTML
            )
              throw new Error(
                "Expected only single html element node as child of " +
                  Wo.IFRAME +
                  " element"
              );
            n.addEventListener("load", function() {
              var e = n.contentWindow;
              if (!e) throw new Error("Expected frame to have contentWindow");
              for (
                var r = e.document, o = r.documentElement;
                o.children && o.children.length;

              )
                o.removeChild(o.children[0]);
              for (var i = t.render(qo({ doc: r })); i.children.length; )
                o.appendChild(i.children[0]);
            });
          }),
          (Ho[Wo.SCRIPT] = function(n, e) {
            var t = e.children[0];
            if (1 !== e.children.length || !t || t.type !== _o.TEXT)
              throw new Error(
                "Expected only single text node as child of " +
                  Wo.SCRIPT +
                  " element"
              );
            n.text = t.text;
          }),
          (Ho[Wo.DEFAULT] = function(n, e, t) {
            for (var r = 0, o = e.renderChildren(t); r < o.length; r++)
              n.appendChild(o[r]);
          }),
          Ho);
      function qo(n) {
        void 0 === n && (n = {});
        var e = n.doc,
          t = void 0 === e ? document : e;
        return function n(e) {
          if (e.type === _o.COMPONENT) return e.renderComponent(n);
          if (e.type === _o.TEXT)
            return (function(n, e) {
              return n.createTextNode(e.text);
            })(t, e);
          if (e.type === _o.ELEMENT) {
            var r = (function(n, e) {
              return e.props[Zo.EL] ? e.props[Zo.EL] : n.createElement(e.name);
            })(t, e);
            return (
              (function(n, e) {
                for (
                  var t = e.props, r = 0, o = Object.keys(t);
                  r < o.length;
                  r++
                ) {
                  var i = o[r],
                    a = t[i];
                  null != a &&
                    i !== Zo.EL &&
                    i !== Zo.INNER_HTML &&
                    (i.match(/^on[A-Z][a-z]/) && "function" == typeof a
                      ? n.addEventListener(i.slice(2).toLowerCase(), a)
                      : "string" == typeof a || "number" == typeof a
                      ? n.setAttribute(i, a.toString())
                      : "boolean" == typeof a &&
                        !0 === a &&
                        n.setAttribute(i, ""));
                }
                n.tagName.toLowerCase() !== Wo.IFRAME ||
                  t.id ||
                  n.setAttribute(
                    Zo.ID,
                    "jsx-iframe-" +
                      "xxxxxxxxxx".replace(/./g, function() {
                        return jo.charAt(Math.floor(Math.random() * jo.length));
                      })
                  );
              })(r, e),
              (function(n, e, t, r) {
                if (e.props.hasOwnProperty(Zo.INNER_HTML)) {
                  if (e.children.length)
                    throw new Error(
                      "Expected no children to be passed when " +
                        Zo.INNER_HTML +
                        " prop is set"
                    );
                  var o = e.props[Zo.INNER_HTML];
                  if ("string" != typeof o)
                    throw new TypeError(Zo.INNER_HTML + " prop must be string");
                  e.name === Wo.SCRIPT
                    ? (n.text = o)
                    : ((n.innerHTML = o),
                      (function(n, e) {
                        void 0 === e && (e = window.document);
                        for (
                          var t = 0, r = n.querySelectorAll("script");
                          t < r.length;
                          t++
                        ) {
                          var o = r[t],
                            i = o.parentNode;
                          if (i) {
                            var a = e.createElement("script");
                            (a.text = o.textContent), i.replaceChild(a, o);
                          }
                        }
                      })(n, t));
                } else (Go[e.name] || Go[Wo.DEFAULT])(n, e, r);
              })(r, e, t, n),
              r
            );
          }
          throw new TypeError("Unhandleable node");
        };
      }
      var Ko = { INNER_HTML: "innerHTML" },
        zo = { br: !0 };
      function Vo(n) {
        return n
          .replace(/&/g, "&amp;")
          .replace(/</g, "&lt;")
          .replace(/>/g, "&gt;")
          .replace(/"/g, "&quot;")
          .replace(/'/g, "&#39;")
          .replace(/\//g, "&#x2F;");
      }
      var Yo,
        Xo,
        Jo,
        $o,
        Qo,
        ni,
        ei,
        ti,
        ri,
        oi = {
          PP: "pp",
          PAYPAL: "paypal",
          VENMO: "venmo",
          ITAU: "itau",
          CREDIT: "credit",
          IDEAL: "ideal",
          ELV: "elv",
          SEPA: "sepa",
          BANCONTACT: "bancontact",
          GIROPAY: "giropay",
          SOFORT: "sofort",
          EPS: "eps",
          MYBANK: "mybank",
          P24: "p24",
          ZIMPLER: "zimpler",
          WECHATPAY: "wechatpay",
          PAYU: "payu",
          VERKKOPANKKI: "verkkopankki",
          BLIK: "blik",
          TRUSTLY: "trustly",
          OXXO: "oxxo",
          BOLETO: "boleto",
          MAXIMA: "maxima"
        },
        ii = {
          BLUE: "blue",
          BLACK: "black",
          WHITE: "white",
          DEFAULT: "default"
        },
        ai = {
          LOGO: "paypal-logo",
          CARD: "paypal-logo-card",
          LOGO_COLOR: "paypal-logo-color"
        };
      function ui(n) {
        var e = n.svg,
          t = c(n, ["svg"]);
        if (!e) throw new TypeError("Expected svg prop");
        if (
          "string" !=
          typeof (e = e.render(function n(e) {
            if (e.type === _o.COMPONENT)
              return [].concat(e.renderComponent(n)).join("");
            if (e.type === _o.ELEMENT) {
              var t =
                ((o = e.props),
                (i = Object.keys(o).filter(function(n) {
                  var e = o[n];
                  return (
                    n !== Ko.INNER_HTML &&
                    !!e &&
                    ("string" == typeof e || "number" == typeof e || !0 === e)
                  );
                })).length
                  ? " " +
                    i
                      .map(function(n) {
                        var e = o[n];
                        if (!0 === e) return "" + Vo(n);
                        if ("string" != typeof e && "number" != typeof e)
                          throw new TypeError(
                            "Unexpected prop type: " + typeof e
                          );
                        return Vo(n) + '="' + Vo(e.toString()) + '"';
                      })
                      .join(" ")
                  : "");
              if (zo[e.name]) return "<" + e.name + t + " />";
              var r =
                "string" == typeof e.props[Ko.INNER_HTML]
                  ? e.props[Ko.INNER_HTML]
                  : e.renderChildren(n).join("");
              return "<" + e.name + t + ">" + r + "</" + e.name + ">";
            }
            var o, i;
            if (e.type === _o.TEXT) return Vo(e.text);
            throw new TypeError("Unhandleable node: " + e.type);
          }))
        )
          throw new TypeError("Expected svg prop to be a string or jsx node");
        return Uo("img", h({ src: bn(e) }, t));
      }
      function ci(n) {
        var e = n.render,
          t = n.name,
          r = n.alt,
          o = n.logoColor,
          i = c(n, ["render", "name", "alt", "logoColor"]);
        return Uo(
          ui,
          h({}, i, {
            svg: e(),
            alt: r || Sn(t),
            class:
              ai.LOGO +
              " " +
              ai.LOGO +
              "-" +
              t +
              " " +
              (o ? ai.LOGO_COLOR + "-" + o : "")
          })
        );
      }
      function si(n) {
        var e = n.render,
          t = n.name,
          r = c(n, ["render", "name"]);
        return Uo(
          ui,
          h({}, r, {
            svg: e(),
            alt: Sn(t),
            class: ai.CARD + " " + ai.CARD + "-" + t
          })
        );
      }
      function li(n, e, t) {
        var r = t ? e[t] : e[ii.DEFAULT];
        if (!r)
          throw new Error(
            "No " + (t || ii.DEFAULT) + " logo available for " + n
          );
        return r;
      }
      function di(n) {
        var e = h({}, void 0 === n ? {} : n);
        return Uo(
          si,
          h({}, e, {
            name: ze.AMEX,
            render: function() {
              return Uo(
                "svg",
                {
                  width: "40",
                  height: "24",
                  viewBox: "0 0 40 24",
                  preserveAspectRatio: "xMinYMin meet",
                  xmlns: "http://www.w3.org/2000/svg"
                },
                Uo("path", {
                  d:
                    "M38.333 24H1.667C.75 24 0 23.28 0 22.4V1.6C0 .72.75 0 1.667 0h36.666C39.25 0 40 .72 40 1.6v20.8c0 .88-.75 1.6-1.667 1.6z",
                  fill: "rgb(20, 119, 190)"
                }),
                Uo("path", {
                  d:
                    "M6.26 12.32h2.313L7.415 9.66M27.353 9.977h-3.738v1.23h3.666v1.384h-3.675v1.385h3.821v1.005c.623-.77 1.33-1.466 2.025-2.235l.707-.77c-.934-1.004-1.87-2.08-2.804-3.075v1.077z",
                  fill: "rgb(255, 255, 255)"
                }),
                Uo("path", {
                  d:
                    "M38.25 7h-5.605l-1.328 1.4L30.072 7H16.984l-1.017 2.416L14.877 7h-9.58L1.25 16.5h4.826l.623-1.556h1.4l.623 1.556H29.99l1.327-1.483 1.328 1.483h5.605l-4.36-4.667L38.25 7zm-17.685 8.1h-1.557V9.883L16.673 15.1h-1.33L13.01 9.883l-.084 5.217H9.73l-.623-1.556h-3.27L5.132 15.1H3.42l2.884-6.772h2.42l2.645 6.233V8.33h2.646l2.107 4.51 1.868-4.51h2.575V15.1zm14.727 0h-2.024l-2.024-2.26-2.023 2.26H22.06V8.328H29.53l1.795 2.177 2.024-2.177h2.025L32.26 11.75l3.032 3.35z",
                  fill: "rgb(255, 255, 255)"
                })
              );
            }
          })
        );
      }
      function fi(n) {
        var e = h({}, void 0 === n ? {} : n);
        return Uo(
          si,
          h({}, e, {
            name: ze.MASTERCARD,
            render: function() {
              return Uo(
                "svg",
                {
                  width: "40",
                  height: "24",
                  viewBox: "0 0 40 24",
                  preserveAspectRatio: "xMinYMin meet",
                  xmlns: "http://www.w3.org/2000/svg"
                },
                Uo("path", {
                  d:
                    "M0 1.927C0 .863.892 0 1.992 0h36.016C39.108 0 40 .863 40 1.927v20.146C40 23.137 39.108 24 38.008 24H1.992C.892 24 0 23.137 0 22.073V1.927z",
                  fill: "rgb(62, 57, 57)"
                }),
                Uo("path", {
                  fill: "rgb(255, 95, 0)",
                  d:
                    "M 22.205 3.901 L 15.688 3.901 L 15.688 15.589 L 22.205 15.589"
                }),
                Uo("path", {
                  d:
                    "M 16.1 9.747 C 16.1 7.371 17.218 5.265 18.935 3.901 C 17.67 2.912 16.078 2.312 14.342 2.312 C 10.223 2.312 6.892 5.636 6.892 9.746 C 6.892 13.853 10.223 17.178 14.342 17.178 C 16.078 17.178 17.67 16.58 18.935 15.588 C 17.216 14.246 16.099 12.119 16.099 9.745 Z",
                  fill: "rgb(235, 0, 27)"
                }),
                Uo("path", {
                  d:
                    "M 30.996 9.747 C 30.996 13.854 27.663 17.179 23.547 17.179 C 21.81 17.179 20.216 16.581 18.954 15.589 C 20.691 14.227 21.788 12.12 21.788 9.746 C 21.788 7.37 20.671 5.264 18.954 3.9 C 20.216 2.911 21.81 2.311 23.547 2.311 C 27.663 2.311 30.996 5.657 30.996 9.745 Z",
                  fill: "rgb(247, 158, 27)"
                }),
                Uo("path", {
                  d:
                    "M 7.167 22.481 L 7.167 20.43 C 7.167 19.641 6.685 19.127 5.857 19.127 C 5.443 19.127 4.993 19.262 4.683 19.71 C 4.44 19.332 4.096 19.127 3.579 19.127 C 3.233 19.127 2.888 19.23 2.612 19.607 L 2.612 19.197 L 1.886 19.197 L 1.886 22.481 L 2.612 22.481 L 2.612 20.668 C 2.612 20.086 2.921 19.812 3.406 19.812 C 3.888 19.812 4.131 20.121 4.131 20.669 L 4.131 22.481 L 4.856 22.481 L 4.856 20.668 C 4.856 20.086 5.204 19.812 5.651 19.812 C 6.137 19.812 6.377 20.121 6.377 20.669 L 6.377 22.481 L 7.171 22.481 Z M 17.909 19.197 L 16.734 19.197 L 16.734 18.204 L 16.007 18.204 L 16.007 19.197 L 15.352 19.197 L 15.352 19.845 L 16.007 19.845 L 16.007 21.351 C 16.007 22.106 16.319 22.551 17.146 22.551 C 17.459 22.551 17.804 22.449 18.044 22.309 L 17.839 21.695 C 17.632 21.831 17.389 21.867 17.216 21.867 C 16.872 21.867 16.734 21.66 16.734 21.319 L 16.734 19.847 L 17.909 19.847 L 17.909 19.198 Z M 24.053 19.127 C 23.639 19.127 23.364 19.332 23.191 19.607 L 23.191 19.197 L 22.465 19.197 L 22.465 22.481 L 23.191 22.481 L 23.191 20.633 C 23.191 20.086 23.434 19.777 23.882 19.777 C 24.018 19.777 24.192 19.812 24.33 19.847 L 24.538 19.162 C 24.401 19.127 24.192 19.127 24.052 19.127 Z M 14.765 19.469 C 14.42 19.229 13.937 19.127 13.418 19.127 C 12.588 19.127 12.036 19.538 12.036 20.188 C 12.036 20.736 12.453 21.044 13.175 21.146 L 13.524 21.181 C 13.903 21.249 14.108 21.351 14.108 21.523 C 14.108 21.765 13.832 21.934 13.35 21.934 C 12.864 21.934 12.484 21.764 12.244 21.592 L 11.898 22.139 C 12.278 22.411 12.794 22.549 13.313 22.549 C 14.28 22.549 14.831 22.105 14.831 21.488 C 14.831 20.908 14.383 20.599 13.692 20.496 L 13.348 20.462 C 13.037 20.428 12.795 20.36 12.795 20.155 C 12.795 19.914 13.038 19.777 13.418 19.777 C 13.83 19.777 14.245 19.949 14.453 20.052 L 14.764 19.469 Z M 34.033 19.127 C 33.618 19.127 33.342 19.332 33.171 19.607 L 33.171 19.197 L 32.445 19.197 L 32.445 22.481 L 33.171 22.481 L 33.171 20.633 C 33.171 20.086 33.414 19.777 33.862 19.777 C 33.998 19.777 34.17 19.812 34.307 19.847 L 34.515 19.162 C 34.38 19.127 34.172 19.127 34.033 19.127 Z M 24.779 20.838 C 24.779 21.834 25.47 22.551 26.54 22.551 C 27.025 22.551 27.369 22.449 27.715 22.173 L 27.369 21.593 C 27.092 21.798 26.816 21.901 26.504 21.901 C 25.919 21.901 25.505 21.49 25.505 20.84 C 25.505 20.226 25.919 19.813 26.507 19.78 C 26.816 19.78 27.092 19.883 27.369 20.089 L 27.715 19.507 C 27.369 19.233 27.024 19.13 26.54 19.13 C 25.47 19.13 24.779 19.85 24.779 20.841 Z M 31.478 20.838 L 31.478 19.198 L 30.75 19.198 L 30.75 19.608 C 30.51 19.3 30.165 19.128 29.717 19.128 C 28.784 19.128 28.058 19.848 28.058 20.84 C 28.058 21.835 28.784 22.552 29.716 22.552 C 30.197 22.552 30.543 22.382 30.748 22.074 L 30.748 22.484 L 31.477 22.484 L 31.477 20.84 Z M 28.818 20.838 C 28.818 20.259 29.196 19.779 29.819 19.779 C 30.406 19.779 30.821 20.224 30.821 20.84 C 30.821 21.424 30.406 21.902 29.819 21.902 C 29.196 21.869 28.818 21.424 28.818 20.841 Z M 20.148 19.128 C 19.183 19.128 18.494 19.813 18.494 20.84 C 18.494 21.869 19.183 22.552 20.185 22.552 C 20.671 22.552 21.154 22.417 21.533 22.108 L 21.188 21.595 C 20.914 21.799 20.565 21.937 20.222 21.937 C 19.772 21.937 19.323 21.732 19.219 21.149 L 21.671 21.149 L 21.671 20.878 C 21.705 19.815 21.083 19.13 20.15 19.13 Z M 20.148 19.748 C 20.6 19.748 20.911 20.019 20.98 20.532 L 19.253 20.532 C 19.321 20.087 19.633 19.748 20.148 19.748 Z M 38.141 20.84 L 38.141 17.898 L 37.412 17.898 L 37.412 19.61 C 37.173 19.302 36.828 19.13 36.38 19.13 C 35.446 19.13 34.721 19.85 34.721 20.841 C 34.721 21.837 35.446 22.554 36.379 22.554 C 36.861 22.554 37.206 22.383 37.41 22.076 L 37.41 22.486 L 38.14 22.486 L 38.14 20.841 Z M 35.481 20.84 C 35.481 20.261 35.861 19.78 36.484 19.78 C 37.069 19.78 37.486 20.226 37.486 20.841 C 37.486 21.426 37.069 21.904 36.484 21.904 C 35.861 21.87 35.481 21.426 35.481 20.843 Z M 11.237 20.84 L 11.237 19.2 L 10.515 19.2 L 10.515 19.61 C 10.272 19.302 9.928 19.13 9.478 19.13 C 8.545 19.13 7.82 19.85 7.82 20.841 C 7.82 21.837 8.545 22.554 9.477 22.554 C 9.96 22.554 10.304 22.383 10.512 22.076 L 10.512 22.486 L 11.236 22.486 L 11.236 20.841 Z M 8.546 20.84 C 8.546 20.261 8.926 19.78 9.548 19.78 C 10.134 19.78 10.55 20.226 10.55 20.841 C 10.55 21.426 10.134 21.904 9.548 21.904 C 8.926 21.87 8.546 21.426 8.546 20.843 Z",
                  fill: "rgb(255, 255, 255)"
                })
              );
            }
          })
        );
      }
      function pi(n) {
        var e = h({}, void 0 === n ? {} : n);
        return Uo(
          si,
          h({}, e, {
            name: ze.VISA,
            render: function() {
              return Uo(
                "svg",
                {
                  width: "40",
                  height: "24",
                  viewBox: "0 0 40 24",
                  preserveAspectRatio: "xMinYMin meet",
                  xmlns: "http://www.w3.org/2000/svg"
                },
                Uo("path", {
                  d:
                    "M0 1.927C0 .863.892 0 1.992 0h36.016C39.108 0 40 .863 40 1.927v20.146C40 23.137 39.108 24 38.008 24H1.992C.892 24 0 23.137 0 22.073V1.927z",
                  fill: "rgb(33, 86, 154)"
                }),
                Uo("path", {
                  d:
                    "M19.596 7.885l-2.11 9.478H14.93l2.11-9.478h2.554zm10.743 6.12l1.343-3.56.773 3.56H30.34zm2.85 3.358h2.36l-2.063-9.478H31.31c-.492 0-.905.274-1.088.695l-3.832 8.783h2.682l.532-1.415h3.276l.31 1.415zm-6.667-3.094c.01-2.502-3.6-2.64-3.577-3.76.008-.338.345-.7 1.083-.793.365-.045 1.373-.08 2.517.425l.448-2.01c-.615-.214-1.405-.42-2.39-.42-2.523 0-4.3 1.288-4.313 3.133-.016 1.364 1.268 2.125 2.234 2.58.996.464 1.33.762 1.325 1.177-.006.636-.793.918-1.526.928-1.285.02-2.03-.333-2.623-.6l-.462 2.08c.598.262 1.7.49 2.84.502 2.682 0 4.437-1.273 4.445-3.243zM15.948 7.884l-4.138 9.478h-2.7L7.076 9.8c-.123-.466-.23-.637-.606-.834-.615-.32-1.63-.62-2.52-.806l.06-.275h4.345c.554 0 1.052.354 1.178.966l1.076 5.486 2.655-6.45h2.683z",
                  fill: "rgb(255, 255, 255)"
                })
              );
            }
          })
        );
      }
      function hi(n) {
        var e = void 0 === n ? {} : n,
          t = e.color,
          r = void 0 === t ? "#000000" : t,
          o = c(e, ["color"]);
        return Uo(
          si,
          h({}, o, {
            name: "",
            render: function() {
              return Uo(
                "svg",
                {
                  width: "24px",
                  height: "18px",
                  viewBox: "0 0 24 18",
                  xmlns: "http://www.w3.org/2000/svg"
                },
                Uo(
                  "g",
                  {
                    stroke: "none",
                    "stroke-width": "1",
                    fill: "none",
                    "fill-rule": "evenodd"
                  },
                  Uo(
                    "g",
                    {
                      transform: "translate(-3.000000, -6.000000)",
                      fill: r,
                      "fill-rule": "nonzero"
                    },
                    Uo("path", {
                      d:
                        "M8.27521338,12.5122653 C7.93003542,12.5122653 7.65021338,12.2324432 7.65021338,11.8872653 C7.65021338,11.5420873 7.93003542,11.2622653 8.27521338,11.2622653 L24.7879042,11.2622653 C25.5955939,11.2622653 26.25,11.9175905 26.25,12.7255368 L26.25,22.2867284 C26.25,23.0946748 25.5955939,23.75 24.7879042,23.75 L5.21231302,23.75 C4.40462325,23.75 3.75,23.0946748 3.75,22.2867397 L3.75,7.71327152 C3.75,6.90532518 4.40440608,6.25 5.21227212,6.25 L24.7880664,6.25552163 C25.5956079,6.25573147 26.25,6.91099507 26.25,7.71870362 L26.25,9.23577161 C26.25,9.58094958 25.9702675,9.86081168 25.6250895,9.86086112 C25.2799115,9.86091055 25.0000494,9.5811286 25,9.23595063 L24.9997827,7.71879313 C24.9997827,7.60083189 24.9046611,7.50555197 24.7877278,7.50552158 L5.21209583,7.49999998 C5.09515506,7.49999998 5,7.59528868 5,7.71326028 L5.00021718,22.2867284 C5.00021718,22.4047113 5.09537223,22.5 5.21231302,22.5 L24.7879042,22.5 C24.904845,22.5 25,22.4047113 25,22.2867284 L25,12.7255368 C25,12.607554 24.9048449,12.5122653 24.7879042,12.5122653 L8.27521338,12.5122653 Z",
                      id: "Stroke-1"
                    })
                  )
                )
              );
            }
          })
        );
      }
      ((Yo = {})[ii.DEFAULT] = { primary: "#005498", secondary: "#FFD800" }),
        (Yo[ii.WHITE] = { primary: "#ffffff", secondary: "#ffffff" }),
        (Yo[ii.BLACK] = { primary: "#005498", secondary: "#FFD800" }),
        ((Xo = {})[ii.DEFAULT] = { primary: "#003087" }),
        (Xo[ii.BLUE] = { primary: "#003087" }),
        (Xo[ii.WHITE] = { primary: "#ffffff" }),
        (Xo[ii.BLACK] = { primary: "#333030" }),
        ((Jo = {})[ii.DEFAULT] = { primary: "#c8036f", secondary: "#71706f" }),
        (Jo[ii.WHITE] = { primary: "#ffffff", secondary: "#ffffff" }),
        (Jo[ii.BLACK] = { primary: "#71706F", secondary: "#C8036F" }),
        (($o = {})[ii.DEFAULT] = {
          primary: "#ED1C24",
          secondary: "#ffffff",
          tertiary: "#003a7d"
        }),
        ($o[ii.WHITE] = {
          primary: "#ffffff",
          secondary: "#ffffff",
          tertiary: "#ffffff"
        }),
        ($o[ii.BLACK] = {
          primary: "#FFFFFF",
          secondary: "#003A7D",
          tertiary: "#ED1C24"
        }),
        ((Qo = {})[ii.DEFAULT] = {
          primary: "#000000",
          secondary: "#cd0067",
          tertiary: "#ffffff"
        }),
        (Qo[ii.WHITE] = {
          primary: "#ffffff",
          secondary: "#ffffff",
          tertiary: "#ffffff"
        }),
        (Qo[ii.BLACK] = {
          primary: "#000000",
          secondary: "#FFFFFF",
          tertiary: "#CD0067"
        }),
        ((ni = {})[ii.DEFAULT] = { primary: "#00C0EE", secondary: "#1a4b67" }),
        (ni[ii.WHITE] = { primary: "#ffffff", secondary: "#ffffff" }),
        (ni[ii.BLACK] = { primary: "#1A4B67", secondary: "#00C0EE" }),
        ((ei = {})[ii.DEFAULT] = { primary: "#d03238", secondary: "#b3b1b1" }),
        (ei[ii.WHITE] = { primary: "#ffffff", secondary: "#ffffff" }),
        (ei[ii.BLACK] = { primary: "#d03238", secondary: "#b3b1b1" });
      var Ei =
        (((ti = {})[ii.DEFAULT] = { primary: "#003087", secondary: "#009cde" }),
        (ti[ii.BLUE] = { primary: "#003087", secondary: "#009cde" }),
        (ti[ii.WHITE] = { primary: "#ffffff", secondary: "#ffffff" }),
        (ti[ii.BLACK] = { primary: "#333030", secondary: "#636363" }),
        ti);
      function yi(n) {
        var e = n.logoColor,
          t = void 0 === e ? ii.DEFAULT : e,
          r = c(n, ["logoColor"]),
          o = li(oi.PAYPAL, Ei, t),
          i = o.primary,
          a = o.secondary;
        return Uo(
          ci,
          h({}, r, r, {
            name: oi.PAYPAL,
            alt: "PayPal",
            logoColor: t,
            render: function() {
              return Uo(
                "svg",
                {
                  width: "100",
                  height: "32",
                  viewBox: "0 0 100 32",
                  preserveAspectRatio: "xMinYMin meet",
                  xmlns: "http://www.w3.org/2000/svg"
                },
                Uo("path", {
                  fill: i,
                  d:
                    "M 12.237 2.444 L 4.437 2.444 C 3.937 2.444 3.437 2.844 3.337 3.344 L 0.237 23.344 C 0.137 23.744 0.437 24.044 0.837 24.044 L 4.537 24.044 C 5.037 24.044 5.537 23.644 5.637 23.144 L 6.437 17.744 C 6.537 17.244 6.937 16.844 7.537 16.844 L 10.037 16.844 C 15.137 16.844 18.137 14.344 18.937 9.444 C 19.237 7.344 18.937 5.644 17.937 4.444 C 16.837 3.144 14.837 2.444 12.237 2.444 Z M 13.137 9.744 C 12.737 12.544 10.537 12.544 8.537 12.544 L 7.337 12.544 L 8.137 7.344 C 8.137 7.044 8.437 6.844 8.737 6.844 L 9.237 6.844 C 10.637 6.844 11.937 6.844 12.637 7.644 C 13.137 8.044 13.337 8.744 13.137 9.744 Z"
                }),
                Uo("path", {
                  fill: i,
                  d:
                    "M 35.437 9.644 L 31.737 9.644 C 31.437 9.644 31.137 9.844 31.137 10.144 L 30.937 11.144 L 30.637 10.744 C 29.837 9.544 28.037 9.144 26.237 9.144 C 22.137 9.144 18.637 12.244 17.937 16.644 C 17.537 18.844 18.037 20.944 19.337 22.344 C 20.437 23.644 22.137 24.244 24.037 24.244 C 27.337 24.244 29.237 22.144 29.237 22.144 L 29.037 23.144 C 28.937 23.544 29.237 23.944 29.637 23.944 L 33.037 23.944 C 33.537 23.944 34.037 23.544 34.137 23.044 L 36.137 10.244 C 36.237 10.044 35.837 9.644 35.437 9.644 Z M 30.337 16.844 C 29.937 18.944 28.337 20.444 26.137 20.444 C 25.037 20.444 24.237 20.144 23.637 19.444 C 23.037 18.744 22.837 17.844 23.037 16.844 C 23.337 14.744 25.137 13.244 27.237 13.244 C 28.337 13.244 29.137 13.644 29.737 14.244 C 30.237 14.944 30.437 15.844 30.337 16.844 Z"
                }),
                Uo("path", {
                  fill: i,
                  d:
                    "M 55.337 9.644 L 51.637 9.644 C 51.237 9.644 50.937 9.844 50.737 10.144 L 45.537 17.744 L 43.337 10.444 C 43.237 9.944 42.737 9.644 42.337 9.644 L 38.637 9.644 C 38.237 9.644 37.837 10.044 38.037 10.544 L 42.137 22.644 L 38.237 28.044 C 37.937 28.444 38.237 29.044 38.737 29.044 L 42.437 29.044 C 42.837 29.044 43.137 28.844 43.337 28.544 L 55.837 10.544 C 56.137 10.244 55.837 9.644 55.337 9.644 Z"
                }),
                Uo("path", {
                  fill: a,
                  d:
                    "M 67.737 2.444 L 59.937 2.444 C 59.437 2.444 58.937 2.844 58.837 3.344 L 55.737 23.244 C 55.637 23.644 55.937 23.944 56.337 23.944 L 60.337 23.944 C 60.737 23.944 61.037 23.644 61.037 23.344 L 61.937 17.644 C 62.037 17.144 62.437 16.744 63.037 16.744 L 65.537 16.744 C 70.637 16.744 73.637 14.244 74.437 9.344 C 74.737 7.244 74.437 5.544 73.437 4.344 C 72.237 3.144 70.337 2.444 67.737 2.444 Z M 68.637 9.744 C 68.237 12.544 66.037 12.544 64.037 12.544 L 62.837 12.544 L 63.637 7.344 C 63.637 7.044 63.937 6.844 64.237 6.844 L 64.737 6.844 C 66.137 6.844 67.437 6.844 68.137 7.644 C 68.637 8.044 68.737 8.744 68.637 9.744 Z"
                }),
                Uo("path", {
                  fill: a,
                  d:
                    "M 90.937 9.644 L 87.237 9.644 C 86.937 9.644 86.637 9.844 86.637 10.144 L 86.437 11.144 L 86.137 10.744 C 85.337 9.544 83.537 9.144 81.737 9.144 C 77.637 9.144 74.137 12.244 73.437 16.644 C 73.037 18.844 73.537 20.944 74.837 22.344 C 75.937 23.644 77.637 24.244 79.537 24.244 C 82.837 24.244 84.737 22.144 84.737 22.144 L 84.537 23.144 C 84.437 23.544 84.737 23.944 85.137 23.944 L 88.537 23.944 C 89.037 23.944 89.537 23.544 89.637 23.044 L 91.637 10.244 C 91.637 10.044 91.337 9.644 90.937 9.644 Z M 85.737 16.844 C 85.337 18.944 83.737 20.444 81.537 20.444 C 80.437 20.444 79.637 20.144 79.037 19.444 C 78.437 18.744 78.237 17.844 78.437 16.844 C 78.737 14.744 80.537 13.244 82.637 13.244 C 83.737 13.244 84.537 13.644 85.137 14.244 C 85.737 14.944 85.937 15.844 85.737 16.844 Z"
                }),
                Uo("path", {
                  fill: a,
                  d:
                    "M 95.337 2.944 L 92.137 23.244 C 92.037 23.644 92.337 23.944 92.737 23.944 L 95.937 23.944 C 96.437 23.944 96.937 23.544 97.037 23.044 L 100.237 3.144 C 100.337 2.744 100.037 2.444 99.637 2.444 L 96.037 2.444 C 95.637 2.444 95.437 2.644 95.337 2.944 Z"
                })
              );
            }
          })
        );
      }
      var mi,
        gi,
        wi,
        vi,
        Ci,
        Li,
        Ti,
        bi,
        Ni = "1",
        Oi =
          (((ri = {})[ii.DEFAULT] = {
            primary: "#009cde",
            secondary: "#012169",
            tertiary: "#003087"
          }),
          (ri[ii.BLUE] = {
            primary: "#009cde",
            secondary: "#012169",
            tertiary: "#003087"
          }),
          (ri[ii.WHITE] = {
            primary: "#ffffff",
            primaryOpacity: "0.7",
            secondary: "#ffffff",
            secondaryOpacity: "0.7",
            tertiary: "#ffffff"
          }),
          ri);
      function Ri(n) {
        var e = n.logoColor,
          t = void 0 === e ? ii.DEFAULT : e,
          r = c(n, ["logoColor"]),
          o = li(oi.PP, Oi, t),
          i = o.primary,
          a = o.secondary,
          u = o.tertiary,
          s = o.primaryOpacity,
          l = void 0 === s ? Ni : s,
          d = o.secondaryOpacity,
          f = void 0 === d ? Ni : d,
          p = o.tertiaryOpacity,
          E = void 0 === p ? Ni : p;
        return Uo(
          ci,
          h({}, r, r, {
            name: oi.PP,
            alt: "PP",
            logoColor: t,
            render: function() {
              return Uo(
                "svg",
                {
                  width: "24",
                  height: "32",
                  viewBox: "0 0 24 32",
                  preserveAspectRatio: "xMinYMin meet",
                  xmlns: "http://www.w3.org/2000/svg"
                },
                Uo("path", {
                  fill: i,
                  opacity: l,
                  d:
                    "M 20.924 7.157 C 21.204 5.057 20.924 3.657 19.801 2.357 C 18.583 0.957 16.43 0.257 13.716 0.257 L 5.758 0.257 C 5.29 0.257 4.729 0.757 4.634 1.257 L 1.358 23.457 C 1.358 23.857 1.639 24.357 2.107 24.357 L 6.975 24.357 L 6.694 26.557 C 6.6 26.957 6.881 27.257 7.255 27.257 L 11.375 27.257 C 11.844 27.257 12.311 26.957 12.405 26.457 L 12.405 26.157 L 13.247 20.957 L 13.247 20.757 C 13.341 20.257 13.809 19.857 14.277 19.857 L 14.84 19.857 C 18.864 19.857 21.954 18.157 22.89 13.157 C 23.358 11.057 23.172 9.357 22.048 8.157 C 21.767 7.757 21.298 7.457 20.924 7.157 L 20.924 7.157"
                }),
                Uo("path", {
                  fill: a,
                  opacity: f,
                  d:
                    "M 20.924 7.157 C 21.204 5.057 20.924 3.657 19.801 2.357 C 18.583 0.957 16.43 0.257 13.716 0.257 L 5.758 0.257 C 5.29 0.257 4.729 0.757 4.634 1.257 L 1.358 23.457 C 1.358 23.857 1.639 24.357 2.107 24.357 L 6.975 24.357 L 8.286 16.057 L 8.192 16.357 C 8.286 15.757 8.754 15.357 9.315 15.357 L 11.655 15.357 C 16.243 15.357 19.801 13.357 20.924 7.757 C 20.831 7.457 20.924 7.357 20.924 7.157"
                }),
                Uo("path", {
                  fill: u,
                  opacity: E,
                  d:
                    "M 9.504 7.157 C 9.596 6.857 9.784 6.557 10.065 6.357 C 10.251 6.357 10.345 6.257 10.532 6.257 L 16.711 6.257 C 17.461 6.257 18.208 6.357 18.772 6.457 C 18.958 6.457 19.146 6.457 19.333 6.557 C 19.52 6.657 19.707 6.657 19.801 6.757 C 19.894 6.757 19.987 6.757 20.082 6.757 C 20.362 6.857 20.643 7.057 20.924 7.157 C 21.204 5.057 20.924 3.657 19.801 2.257 C 18.677 0.857 16.525 0.257 13.809 0.257 L 5.758 0.257 C 5.29 0.257 4.729 0.657 4.634 1.257 L 1.358 23.457 C 1.358 23.857 1.639 24.357 2.107 24.357 L 6.975 24.357 L 8.286 16.057 L 9.504 7.157 Z"
                })
              );
            }
          })
        );
      }
      ((mi = {})[ii.DEFAULT] = { main: "#005DA0", card: "#AEB1BC" }),
        (mi[ii.WHITE] = { main: "#FFFFFF", card: "#FFFFFF" }),
        (mi[ii.BLACK] = { main: "#333030", card: "#333030" }),
        ((gi = {})[ii.DEFAULT] = { primary: "#FFFFFF", secondary: "#EB6F93" }),
        (gi[ii.WHITE] = { primary: "#FFFFFF", secondary: "#2C2E2F" }),
        (gi[ii.BLACK] = { primary: "#FFFFFF", secondary: "#EB6F93" }),
        ((wi = {})[ii.DEFAULT] = { primary: "#3D93CE" }),
        (wi[ii.BLUE] = { primary: "#3D93CE" }),
        (wi[ii.WHITE] = { primary: "#ffffff" }),
        (wi[ii.BLACK] = { primary: "#333030" }),
        ((vi = {})[ii.DEFAULT] = { primary: "#ffffff" }),
        (vi[ii.BLUE] = { primary: "#003087" }),
        (vi[ii.WHITE] = { primary: "#ffffff" }),
        (vi[ii.BLACK] = { primary: "#333030" }),
        ((Ci = {})[ii.DEFAULT] = { primary: "#1AAD19", secondary: "#4D4D4D" }),
        (Ci[ii.WHITE] = { primary: "#FFFFFF", secondary: "#FFFFFF" }),
        (Ci[ii.BLACK] = { primary: "#333030", secondary: "#333030" }),
        ((Li = {})[ii.DEFAULT] = { primary: "#00A599" }),
        (Li[ii.WHITE] = { primary: "#FFFFFF" }),
        (Li[ii.BLACK] = { primary: "#00A599" }),
        ((Ti = {})[ii.DEFAULT] = {
          primary: "#A6d71c",
          secondary: "#3C932A",
          tertiary: "#6CC62E",
          quaternary: "#278D30"
        }),
        (Ti[ii.WHITE] = {
          primary: "#FFFFFF",
          secondary: "#FFFFFF",
          tertiary: "#000000",
          quaternary: "#FFFFFF"
        }),
        (Ti[ii.BLACK] = {
          primary: "#333030",
          secondary: "#333030",
          tertiary: "#ffffff",
          quaternary: "#333030"
        });
      var Ai,
        Si,
        Ii,
        _i,
        xi,
        Pi =
          (((bi = {})[ii.DEFAULT] = {
            primary: "#FFFFFF",
            secondary: "#CACCC8",
            tertiary: "#2D59A1",
            quaternary: "#1F3364",
            quinary: "#4E4E4E",
            senary: "#1B4482"
          }),
          (bi[ii.WHITE] = {
            primary: "#FFFFFF",
            secondary: "#CACCC8",
            tertiary: "#2D59A1",
            quaternary: "#1F3364",
            quinary: "#4E4E4E",
            senary: "#1B4482"
          }),
          (bi[ii.BLACK] = {
            primary: "#000000",
            secondary: "#000000",
            tertiary: "#FFFFFF",
            quaternary: "#FFFFFF",
            quinary: "#000000",
            senary: "#000000"
          }),
          bi);
      ((Ai = {})[ii.DEFAULT] = {
        primary: "#4D4D4F",
        secondary: "#000000",
        tertiary: "#FF0000",
        quaternary: "#E83E49",
        quinary: "#FF00FF",
        senary: "#FFFFFF"
      }),
        (Ai[ii.WHITE] = {
          primary: "#FFFFFF",
          secondary: "#FFFFFF",
          tertiary: "#000000",
          quaternary: "#000000",
          quinary: "#000000",
          senary: "#000000"
        }),
        (Ai[ii.BLACK] = {
          primary: "#4D4D4F",
          secondary: "#000000",
          tertiary: "#FF0000",
          quaternary: "#E83E49",
          quinary: "#FF00FF",
          senary: "#FFFFFF"
        }),
        ((Si = {})[ii.DEFAULT] = { primary: "#020202", secondary: "#64CC07" }),
        (Si[ii.WHITE] = { primary: "#FFFFFF", secondary: "#FFFFFF" }),
        (Si[ii.BLACK] = { primary: "#000000", secondary: "#000000" }),
        ((Ii = {})[ii.DEFAULT] = {
          primary: "#EC1D24",
          secondary: "#EDA42D",
          tertiary: "#FEFEFE"
        }),
        (Ii[ii.WHITE] = {
          primary: "#EC1D24",
          secondary: "#EDA42D",
          tertiary: "#FEFEFE"
        }),
        (Ii[ii.BLACK] = {
          primary: "#EC1D24",
          secondary: "#EDA42D",
          tertiary: "#FEFEFE"
        }),
        ((_i = {})[ii.DEFAULT] = { primary: "#1A1919", secondary: "#FFFFFE" }),
        (_i[ii.WHITE] = { primary: "#1A1919", secondary: "#FFFFFE" }),
        (_i[ii.BLACK] = { primary: "#1A1919", secondary: "#FFFFFE" }),
        ((xi = {})[ii.DEFAULT] = { primary: "#004A91", secondary: "#ED1921" }),
        (xi[ii.WHITE] = { primary: "#004A91", secondary: "#ED1921" }),
        (xi[ii.BLACK] = { primary: "#004A91", secondary: "#ED1921" });
      var Mi = {
        OUTLET: "outlet",
        VISIBLE: "visible",
        INVISIBLE: "invisible",
        COMPONENT_FRAME: "component-frame",
        PRERENDER_FRAME: "prerender-frame"
      };
      function Fi(n) {
        var e,
          t = n.context,
          r = n.close,
          o = n.focus,
          i = n.event,
          a = n.frame,
          u = n.prerenderFrame,
          c = n.content,
          s = void 0 === c ? {} : c,
          l = "paypal-overlay-" + sn(),
          d = function(n) {
            return function(e) {
              i.on(ro.DISPLAY, function() {
                return pe(e, "show-" + n, En);
              }),
                i.on(ro.CLOSE, function() {
                  return pe(e, "hide-" + n, En);
                });
            };
          };
        return (
          a &&
            u &&
            (a.classList.add(Mi.COMPONENT_FRAME),
            u.classList.add(Mi.PRERENDER_FRAME),
            u.classList.add(Mi.VISIBLE),
            a.classList.add(Mi.INVISIBLE),
            i.on(ro.RENDERED, function() {
              u.classList.remove(Mi.VISIBLE),
                u.classList.add(Mi.INVISIBLE),
                a.classList.remove(Mi.INVISIBLE),
                a.classList.add(Mi.VISIBLE),
                setTimeout(function() {
                  me(u);
                }, 1);
            }),
            (e = Uo(
              "div",
              { class: Mi.OUTLET, onRender: d("component") },
              Uo("node", { el: a }),
              Uo("node", { el: u })
            ))),
          Uo(
            "div",
            {
              id: l,
              onRender: d("container"),
              class: "paypal-checkout-sandbox"
            },
            Uo(
              "style",
              null,
              (function(n) {
                var e = n.uid;
                return (
                  "\n        #" +
                  e +
                  ".paypal-checkout-sandbox {\n            display: block;\n            position: fixed;\n            top: 0;\n            left: 0;\n\n            width: 100%;\n            height: 100%;\n            width: 100vw;\n            height: 100vh;\n            max-width: 100%;\n            max-height: 100%;\n            min-width: 100%;\n            min-height: 100%;\n\n            z-index: 2147483647;\n\n            animation-duration: 0.3s;\n            animation-iteration-count: 1;\n            animation-fill-mode: forwards !important;\n            opacity: 0;\n        }\n\n        #" +
                  e +
                  ".paypal-checkout-sandbox .paypal-checkout-sandbox-iframe {\n            display: block;\n            position: absolute;\n            top: 0;\n            left: 0;\n            width: 100%;\n            height: 100%;\n        }\n\n        @keyframes show-container {\n            from {\n                opacity: 0;\n            }\n\n            to {\n                opacity: 1;\n            }\n        }\n\n        @keyframes hide-container {\n            from {\n                opacity: 1;\n            }\n\n            50% {\n                opacity: 1;\n            }\n\n            to {\n                opacity: 0;\n            }\n        }\n    "
                );
              })({ uid: l })
            ),
            Uo(
              "iframe",
              {
                title: "PayPal Checkout Overlay",
                name: "__paypal_checkout_sandbox_" + l + "__",
                scrolling: "no",
                class: "paypal-checkout-sandbox-iframe"
              },
              Uo(
                "html",
                null,
                Uo(
                  "body",
                  null,
                  Uo(
                    "div",
                    {
                      id: l,
                      onClick: function(n) {
                        n.preventDefault(),
                          n.stopPropagation(),
                          f()
                            ? window.alert(
                                "Please switch tabs to reactivate the PayPal window"
                              )
                            : o();
                      },
                      class:
                        "paypal-overlay-context-" +
                        t +
                        " paypal-checkout-overlay"
                    },
                    Uo("a", {
                      href: "#",
                      class: "paypal-checkout-close",
                      onClick: function(n) {
                        n.preventDefault(), n.stopPropagation(), r();
                      },
                      "aria-label": "close",
                      role: "button"
                    }),
                    Uo(
                      "div",
                      { class: "paypal-checkout-modal" },
                      Uo(
                        "div",
                        { class: "paypal-checkout-logo" },
                        Uo(Ri, { logoColor: ii.WHITE }),
                        Uo(yi, { logoColor: ii.WHITE })
                      ),
                      s.windowMessage &&
                        Uo(
                          "div",
                          { class: "paypal-checkout-message" },
                          s.windowMessage
                        ),
                      s.continueMessage &&
                        Uo(
                          "div",
                          { class: "paypal-checkout-continue" },
                          Uo("a", { onClick: o, href: "#" }, s.continueMessage)
                        ),
                      Uo(
                        "div",
                        { class: "paypal-checkout-loader" },
                        Uo("div", { class: "paypal-spinner" })
                      )
                    ),
                    Uo("div", { class: "paypal-checkout-iframe-container" }, e),
                    Uo(
                      "style",
                      null,
                      (function(n) {
                        var e = n.uid;
                        return (
                          "\n        #" +
                          e +
                          " {\n            position: absolute;\n            z-index: 2147483647;\n            top: 0;\n            left: 0;\n            width: 100%;\n            height: 100%;\n\n            transform: translate3d(0, 0, 0);\n\n            background-color: black;\n            background-color: rgba(0, 0, 0, 0.8);\n            background: radial-gradient(50% 50%, ellipse closest-corner, rgba(0,0,0,0.6) 1%, rgba(0,0,0,0.8) 100%);\n\n            color: #fff;\n        }\n\n        #" +
                          e +
                          " a {\n            color: #fff;\n        }\n\n        #" +
                          e +
                          " .paypal-checkout-close:before,\n        #" +
                          e +
                          " .paypal-checkout-close:after {\n            background-color: #fff;\n        }\n\n        #" +
                          e +
                          ".paypal-overlay-context-" +
                          no.POPUP +
                          " {\n            cursor: pointer;\n        }\n\n        #" +
                          e +
                          " a {\n            text-decoration: none;\n        }\n\n        #" +
                          e +
                          ' .paypal-checkout-modal {\n            font-family: "HelveticaNeue", "HelveticaNeue-Light", "Helvetica Neue Light", helvetica, arial, sans-serif;\n            font-size: 14px;\n            text-align: center;\n\n            box-sizing: border-box;\n            max-width: 350px;\n            top: 50%;\n            left: 50%;\n            position: absolute;\n            transform: translateX(-50%) translateY(-50%);\n            cursor: pointer;\n            text-align: center;\n        }\n\n        #' +
                          e +
                          ".paypal-overlay-loading .paypal-checkout-message, #" +
                          e +
                          ".paypal-overlay-loading .paypal-checkout-continue {\n            display: none;\n        }\n\n        .paypal-checkout-loader {\n            display: none;\n        }\n\n        #" +
                          e +
                          ".paypal-overlay-loading .paypal-checkout-loader {\n            display: block;\n        }\n\n        #" +
                          e +
                          " .paypal-checkout-modal .paypal-checkout-logo {\n            cursor: pointer;\n            margin-bottom: 30px;\n            display: inline-block;\n        }\n\n        #" +
                          e +
                          " .paypal-checkout-modal .paypal-checkout-logo img {\n            height: 36px;\n        }\n\n        #" +
                          e +
                          " .paypal-checkout-modal .paypal-checkout-logo img.paypal-checkout-logo-pp {\n            margin-right: 10px;\n        }\n\n        #" +
                          e +
                          " .paypal-checkout-modal .paypal-checkout-message {\n            font-size: 15px;\n            line-height: 1.5;\n            padding: 10px 0;\n        }\n\n        #" +
                          e +
                          ".paypal-overlay-context-" +
                          no.IFRAME +
                          " .paypal-checkout-message, #" +
                          e +
                          ".paypal-overlay-context-" +
                          no.IFRAME +
                          " .paypal-checkout-continue {\n            display: none;\n        }\n\n        #" +
                          e +
                          " .paypal-checkout-modal .paypal-checkout-continue {\n            font-size: 15px;\n            line-height: 1.35;\n            padding: 10px 0;\n            font-weight: bold;\n        }\n\n        #" +
                          e +
                          " .paypal-checkout-modal .paypal-checkout-continue a {\n            border-bottom: 1px solid white;\n        }\n\n        #" +
                          e +
                          " .paypal-checkout-close {\n            position: absolute;\n            right: 16px;\n            top: 16px;\n            width: 16px;\n            height: 16px;\n            opacity: 0.6;\n        }\n\n        #" +
                          e +
                          ".paypal-overlay-loading .paypal-checkout-close {\n            display: none;\n        }\n\n        #" +
                          e +
                          " .paypal-checkout-close:hover {\n            opacity: 1;\n        }\n\n        #" +
                          e +
                          " .paypal-checkout-close:before, .paypal-checkout-close:after {\n            position: absolute;\n            left: 8px;\n            content: ' ';\n            height: 16px;\n            width: 2px;\n        }\n\n        #" +
                          e +
                          " .paypal-checkout-close:before {\n            transform: rotate(45deg);\n        }\n\n        #" +
                          e +
                          " .paypal-checkout-close:after {\n            transform: rotate(-45deg);\n        }\n\n        #" +
                          e +
                          " .paypal-checkout-iframe-container {\n            display: none;\n        }\n\n        #" +
                          e +
                          ".paypal-overlay-context-" +
                          no.IFRAME +
                          " .paypal-checkout-iframe-container,\n        #" +
                          e +
                          ".paypal-overlay-context-" +
                          no.IFRAME +
                          " .paypal-checkout-iframe-container > ." +
                          Mi.OUTLET +
                          ",\n        #" +
                          e +
                          ".paypal-overlay-context-" +
                          no.IFRAME +
                          " .paypal-checkout-iframe-container > ." +
                          Mi.OUTLET +
                          " > iframe {\n            max-height: 95vh;\n            max-width: 95vw;\n        }\n\n        #" +
                          e +
                          ".paypal-overlay-context-" +
                          no.IFRAME +
                          " .paypal-checkout-iframe-container {\n\n            display: block;\n\n            position: absolute;\n\n            top: 50%;\n            left: 50%;\n\n            min-width: 450px;\n\n            transform: translate(-50%, -50%);\n            transform: translate3d(-50%, -50%, 0);\n\n            border-radius: 10px;\n            overflow: hidden;\n        }\n\n        #" +
                          e +
                          ".paypal-overlay-context-" +
                          no.IFRAME +
                          " ." +
                          Mi.OUTLET +
                          " {\n\n            position: relative;\n\n            transition: all 0.3s ease;\n            animation-duration: 0.3s;\n            animation-fill-mode: forwards !important;\n\n            min-width: 450px;\n            max-width: 450px;\n            width: 450px;\n            height: 535px;\n\n            background-color: white;\n\n            overflow: auto;\n\n            opacity: 0;\n            transform: scale3d(.3, .3, .3);\n\n            -webkit-overflow-scrolling: touch;\n        }\n\n        #" +
                          e +
                          ".paypal-overlay-context-" +
                          no.IFRAME +
                          " ." +
                          Mi.OUTLET +
                          " > iframe {\n            position: absolute;\n            top: 0;\n            left: 0;\n            transition: opacity .4s ease-in-out;\n        }\n\n        #" +
                          e +
                          ".paypal-overlay-context-" +
                          no.IFRAME +
                          " ." +
                          Mi.OUTLET +
                          " > iframe." +
                          Mi.COMPONENT_FRAME +
                          " {\n            z-index: 100;\n        }\n\n        #" +
                          e +
                          ".paypal-overlay-context-" +
                          no.IFRAME +
                          " ." +
                          Mi.OUTLET +
                          " > iframe." +
                          Mi.PRERENDER_FRAME +
                          " {\n            z-index: 200;\n        }\n\n        #" +
                          e +
                          ".paypal-overlay-context-" +
                          no.IFRAME +
                          " ." +
                          Mi.OUTLET +
                          " > iframe." +
                          Mi.VISIBLE +
                          " {\n            opacity: 1;\n            z-index: 200;\n        }\n\n        #" +
                          e +
                          ".paypal-overlay-context-" +
                          no.IFRAME +
                          " ." +
                          Mi.OUTLET +
                          " > iframe." +
                          Mi.INVISIBLE +
                          " {\n            opacity: 0;\n            z-index: 100;\n        }\n\n        @media screen and (max-width: 470px) {\n\n            #" +
                          e +
                          ".paypal-overlay-context-" +
                          no.IFRAME +
                          " .paypal-checkout-iframe-container,\n            #" +
                          e +
                          ".paypal-overlay-context-" +
                          no.IFRAME +
                          " ." +
                          Mi.OUTLET +
                          " {\n                min-width: 100%;\n                min-width: calc(100% - 20px);\n\n                max-width: 100%;\n                max-width: calc(100% - 20px);\n            }\n        }\n\n        #" +
                          e +
                          ".paypal-overlay-context-" +
                          no.IFRAME +
                          " ." +
                          Mi.OUTLET +
                          " iframe {\n            width: 1px;\n            min-width: 100%;\n            height: 100%;\n        }\n\n        @keyframes show-component {\n            from {\n                opacity: 0;\n                transform: scale3d(.3, .3, .3);\n            }\n\n            to {\n                opacity: 1;\n                transform: scale3d(1, 1, 1);\n            }\n        }\n\n        @keyframes hide-component {\n            from {\n                opacity: 1;\n                transform: scale3d(1, 1, 1);\n            }\n\n            to {\n                opacity: 0;\n                transform: scale3d(.3, .3, .3);\n            }\n        }\n\n        .paypal-spinner {\n            height: 30px;\n            width: 30px;\n            display: inline-block;\n            box-sizing: content-box;\n            opacity: 1;\n            filter: alpha(opacity=100);\n            animation: rotation .7s infinite linear;\n            border-left: 8px solid rgba(0, 0, 0, .2);\n            border-right: 8px solid rgba(0, 0, 0, .2);\n            border-bottom: 8px solid rgba(0, 0, 0, .2);\n            border-top: 8px solid #fff;\n            border-radius: 100%\n        }\n\n        @keyframes rotation {\n            from {\n                transform: rotate(0deg)\n            }\n            to {\n                transform: rotate(359deg)\n            }\n        }\n    "
                        );
                      })({ uid: l })
                    )
                  )
                )
              )
            )
          )
        );
      }
      var Di = { THREEDOMAINSECURE: "/webapps/helios" };
      function ki() {
        return "" + _t() + Di.THREEDOMAINSECURE;
      }
      function Hi() {
        return hn(Hi, function() {
          var n = No({
            tag: "three-domain-secure",
            url: ki,
            attributes: { iframe: { scrolling: "no" } },
            containerTemplate: function(n) {
              var e = n.doc;
              return Uo(Fi, {
                context: n.context,
                close: n.close,
                focus: n.focus,
                event: n.event,
                frame: n.frame,
                prerenderFrame: n.prerenderFrame,
                content: n.props.content
              }).render(qo({ doc: e }));
            },
            props: {
              action: {
                type: "string",
                queryParam: !0,
                value: function() {
                  return "verify";
                }
              },
              xcomponent: {
                type: "string",
                queryParam: !0,
                value: function() {
                  return "1";
                }
              },
              flow: {
                type: "string",
                queryParam: !0,
                value: function() {
                  return "3ds";
                }
              },
              createOrder: {
                type: "function",
                queryParam: "cart_id",
                queryValue: function(n) {
                  return T.try(n.value);
                }
              },
              clientID: { type: "string", value: ft, queryParam: !0 },
              onSuccess: {
                type: "function",
                alias: "onContingencyResult",
                decorate: function(n) {
                  var e = n.value,
                    t = n.onError;
                  return function(n, r) {
                    return n ? t(n) : e(r);
                  };
                }
              },
              sdkMeta: {
                type: "string",
                queryParam: !0,
                sendToChild: !1,
                value: qt
              },
              content: { type: "object", required: !1 },
              userType: { type: "string", required: !1 }
            }
          });
          return (
            n.isChild() && (window.xchild = { props: n.xprops, close: En }), n
          );
        });
      }
      var Ui =
        "\n\n    body {\n        width: 100%;\n        height: 100%;\n        overflow: hidden;\n        position: fixed;\n        top: 0;\n        left: 0;\n        margin: 0;\n    }\n\n    .spinner {\n        height: 100%;\n        width: 100%;\n        position: absolute;\n        z-index: 10\n    }\n\n    .spinner .spinWrap {\n        width: 200px;\n        height: 100px;\n        position: absolute;\n        top: 50%;\n        left: 50%;\n        margin-left: -100px;\n        margin-top: -50px\n    }\n\n    .spinner .loader,\n    .spinner .spinnerImage {\n        height: 100px;\n        width: 100px;\n        position: absolute;\n        top: 0;\n        left: 50%;\n        opacity: 1;\n        filter: alpha(opacity=100)\n    }\n\n    .spinner .spinnerImage {\n        margin: 28px 0 0 -25px;\n        background: url(https://www.paypalobjects.com/images/checkout/hermes/icon_ot_spin_lock_skinny.png) no-repeat\n    }\n\n    .spinner .loader {\n        margin: 0 0 0 -55px;\n        background-color: transparent;\n        animation: rotation .7s infinite linear;\n        border-left: 5px solid #cbcbca;\n        border-right: 5px solid #cbcbca;\n        border-bottom: 5px solid #cbcbca;\n        border-top: 5px solid #2380be;\n        border-radius: 100%\n    }\n\n    @keyframes rotation {\n        from {\n            transform: rotate(0deg)\n        }\n        to {\n            transform: rotate(359deg)\n        }\n    }\n";
      function Bi(n, e) {
        var t = n.nonce;
        return Uo(
          "html",
          null,
          Uo(
            "head",
            null,
            Uo("title", null, "PayPal"),
            Uo("meta", {
              name: "viewport",
              content: "width=device-width, initial-scale=1"
            })
          ),
          Uo(
            "body",
            null,
            Uo(
              "div",
              { class: "preloader spinner" },
              Uo("style", { nonce: t, innerHTML: Ui }),
              Uo(
                "div",
                { class: "spinWrap" },
                Uo("p", { class: "spinnerImage" }),
                Uo("p", { class: "loader" })
              )
            ),
            e
          )
        );
      }
      var ji = {
          de: {
            windowMessage:
              "Sie sehen das sichere Browserfenster von PayPal nicht? Hier können Sie es wieder öffnen und Ihren Einkauf abschließen",
            continueMessage: "Weiter"
          },
          en: {
            windowMessage:
              "Don’t see the secure PayPal browser? We’ll help you re-launch the window to complete your purchase",
            continueMessage: "Click to Continue"
          },
          zh: {
            windowMessage:
              "没有找到安全的PayPal浏览器？我们将帮助您重启窗口以完成付款",
            continueMessage: "继续"
          },
          es: {
            windowMessage:
              "¿No ve el navegador seguro de PayPal? Abriremos la ventana nuevamente para que pueda completar su compra",
            continueMessage: "Continuar"
          },
          fr: {
            windowMessage:
              "Le navigateur sécurisé de PayPal n’apparaît pas ? Nous allons vous aider à rouvrir la fenêtre pour finaliser votre achat",
            continueMessage: "Continuer"
          },
          ar: {
            windowMessage:
              "لا ترى متصفح PayPal الآمن؟ سنساعدك في إعادة فتح النافذة لاستكمال مشترياتك",
            continueMessage: "متابعة"
          },
          da: {
            windowMessage:
              "Kan du ikke se PayPals sikre browser? Vi hjælper dig med at genstarte vinduet, så du kan betale",
            continueMessage: "Fortsæt"
          },
          ru: {
            windowMessage:
              "Не отображается безопасная страница PayPal в браузере? Мы поможем вам повторно загрузить окно, чтобы завершить покупку",
            continueMessage: "Продолжить"
          },
          tr: {
            windowMessage:
              "Güvenli PayPal tarayıcısını görmüyor musunuz? Alışverişinizi tamamlamak için pencereyi yeniden başlatmanıza yardımcı olacağız",
            continueMessage: "Devam"
          },
          th: {
            windowMessage:
              "ถ้าคุณไม่เห็นเบราว์เซอร์ที่มีระบบความปลอดภัยของ PayPal เราจะช่วยคุณเปิดหน้าต่างอีกครั้งเพื่อชำระเงินให้เรียบร้อย",
            continueMessage: "ดำเนินการต่อ"
          },
          sk: {
            windowMessage:
              "Nezobrazuje sa vám zabezpečený prehliadač PayPal? Pomôžeme vám znova otvoriť okno, aby ste mohli nákup dokončiť",
            continueMessage: "Pokračovať"
          },
          sv: {
            windowMessage:
              "Ser du inte den säkra PayPal-webbläsaren? Vi hjälper dig att starta om fönstret för att slutföra ditt köp",
            continueMessage: "Fortsätt"
          },
          pt: {
            windowMessage:
              "Não está vendo o navegador seguro do PayPal? Ajudaremos você a reabrir a janela para concluir a compra",
            continueMessage: "Continuar"
          },
          pl: {
            windowMessage:
              "Nie widzisz bezpiecznej przeglądarki PayPal? Pomożemy Ci ponownie uruchomić to okno w celu dokonania zakupu",
            continueMessage: "Kontynuuj"
          },
          no: {
            windowMessage:
              "Ser du ikke den sikre PayPal-nettleseren? Vi hjelper deg med å starte vinduet på nytt så du kan fullføre kjøpet",
            continueMessage: "Fortsett"
          },
          nl: {
            windowMessage:
              "Ziet u de beveiligde PayPal-browser niet? We helpen u het venster opnieuw te openen om uw aankoop te voltooien",
            continueMessage: "Doorgaan"
          },
          ko: {
            windowMessage:
              "보안 PayPal 브라우저가 보이지 않으신가요? 창을 다시 실행하여 결제를 완료할 수 있도록 도와드리겠습니다",
            continueMessage: "계속"
          },
          ja: {
            windowMessage:
              "セキュアなブラウザが表示されない場合は、ウィンドウを再起動して、支払いを完了できるようお手伝いいたします",
            continueMessage: "続行"
          },
          it: {
            windowMessage:
              "Non vedi la pagina sicura di PayPal? Ti aiuteremo a riaprire la finestra per completare l’acquisto",
            continueMessage: "Continua"
          },
          he: {
            windowMessage:
              "לא רואה את דפדפן PayPal המאובטח? נעזור לך לפתוח מחדש את החלון כדי להשלים את הקנייה שלך",
            continueMessage: "המשך"
          },
          hu: {
            windowMessage:
              "Nem látja a biztonságos PayPal-böngészőt? Segítünk újra betölteni az ablakot, hogy befejezhesse a vásárlást",
            continueMessage: "Folytatás"
          },
          id: {
            windowMessage:
              "Browser PayPal yang aman tidak terlihat? Kami akan membantu menampilkan ulang jendela untuk menyelesaikan pembayaran Anda",
            continueMessage: "Lanjutkan"
          },
          el: {
            windowMessage:
              "Δεν βλέπετε το ασφαλές πρόγραμμα περιήγησης PayPal; Θα σας βοηθήσουμε να επανεκκινήσετε το παράθυρο για να ολοκληρώσετε την αγορά σας",
            continueMessage: "Συνέχεια"
          },
          fi: {
            windowMessage:
              "Eikö suojattua PayPal-selainta näy? Autamme avaamaan ikkunan uudelleen oston viimeistelyä varten",
            continueMessage: "Jatka"
          },
          cs: {
            windowMessage:
              "Nezobrazuje se vám bezpečný prohlížeč PayPal? Pomůžeme vám okno znovu otevřít, abyste mohli nákup dokončit",
            continueMessage: "Pokračovat"
          }
        },
        Wi = { WIDTH: 500, HEIGHT: 590 };
      function Zi() {
        return hn(Zi, function() {
          var n = No({
            tag: "paypal-checkout",
            url: function() {
              return "" + _t() + (window.__CHECKOUT_URI__ || "/checkoutnow");
            },
            attributes: { iframe: { scrolling: "yes" } },
            defaultContext: p() ? no.POPUP : no.IFRAME,
            domain: /\.paypal\.com(:\d+)?$/,
            logger: Gt(),
            prerenderTemplate: function(n) {
              var e = n.doc;
              return Uo(Bi, { nonce: n.props.nonce }).render(qo({ doc: e }));
            },
            containerTemplate: function(n) {
              var e = n.doc;
              return Uo(Fi, {
                context: n.context,
                close: n.close,
                focus: n.focus,
                event: n.event,
                frame: n.frame,
                prerenderFrame: n.prerenderFrame,
                content: ji[n.props.locale.lang]
              }).render(qo({ doc: e }));
            },
            props: {
              clientID: {
                type: "string",
                value: function() {
                  return ft();
                },
                queryParam: !0
              },
              sessionID: { type: "string", value: Ao, queryParam: !0 },
              buttonSessionID: { type: "string", queryParam: !0, required: !1 },
              env: { type: "string", queryParam: !0, value: Qe },
              sdkMeta: { type: "string", queryParam: !0, value: qt },
              nonce: { type: "string", required: !1, value: Rt },
              buyerCountry: {
                type: "string",
                queryParam: !0,
                required: !1,
                default: vt
              },
              locale: {
                type: "object",
                queryParam: "locale.x",
                allowDelegate: !0,
                queryValue: function(n) {
                  var e = n.value;
                  return e.lang + "_" + e.country;
                },
                value: Ot
              },
              createOrder: {
                type: "function",
                queryParam: "token",
                alias: "payment",
                queryValue: function(n) {
                  return T.try(n.value);
                },
                decorate: function(n) {
                  return fn(n.value);
                }
              },
              xcomponent: {
                type: "string",
                queryParam: !0,
                value: function() {
                  return "1";
                }
              },
              version: { type: "string", queryParam: !0, value: nt },
              commit: { type: "boolean", queryParam: !0, value: Et },
              fundingSource: {
                type: "string",
                queryParam: !0,
                default: function() {
                  return Ke.PAYPAL;
                }
              },
              onApprove: { type: "function", alias: "onAuthorize" },
              onShippingChange: { type: "function", required: !1 },
              onAuth: { type: "function", required: !1, sameDomain: !0 },
              accessToken: { type: "string", required: !1 },
              onCancel: { type: "function", required: !1 },
              onFocused: {
                type: "function",
                value: function(n) {
                  var e = n.event;
                  return function(n) {
                    return e.on(ro.FOCUS, n);
                  };
                }
              },
              test: {
                type: "object",
                default: function() {
                  return window.__test__ || { action: "checkout" };
                }
              }
            },
            dimensions: l()
              ? { width: "100%", height: Wi.HEIGHT + "px" }
              : { width: Wi.WIDTH + "px", height: Wi.HEIGHT + "px" }
          });
          return (
            n.isChild() &&
              ((window.xchild = { props: n.xprops, show: En, hide: En }),
              (function() {
                try {
                  if (!window.injector) return;
                  var n = window.injector.get("$util");
                  if (!n || !n.redirect) return;
                  var e = n.redirect;
                  n.redirect = function(n) {
                    try {
                      -1 !== n.indexOf("/ppcreditapply") &&
                        -1 !== n.indexOf("key=") &&
                        -1 === n.indexOf("sdkMeta") &&
                        (n += "&sdkMeta=" + qt());
                    } catch (n) {}
                    for (
                      var t = arguments.length,
                        r = new Array(t > 1 ? t - 1 : 0),
                        o = 1;
                      o < t;
                      o++
                    )
                      r[o - 1] = arguments[o];
                    return e.call.apply(e, [this, n].concat(r));
                  };
                } catch (n) {}
              })()),
            n
          );
        });
      }
      var Gi = [
          Ke.PAYPAL,
          Ke.VENMO,
          Ke.ITAU,
          Ke.CREDIT,
          Ke.IDEAL,
          Ke.SEPA,
          Ke.BANCONTACT,
          Ke.GIROPAY,
          Ke.EPS,
          Ke.SOFORT,
          Ke.MYBANK,
          Ke.BLIK,
          Ke.P24,
          Ke.ZIMPLER,
          Ke.WECHATPAY,
          Ke.PAYU,
          Ke.VERKKOPANKKI,
          Ke.TRUSTLY,
          Ke.OXXO,
          Ke.BOLETO,
          Ke.MAXIMA,
          Ke.CARD
        ],
        qi = [Ke.PAYPAL, Ke.VENMO, Ke.ITAU],
        Ki = "domain",
        zi = "client-id",
        Vi = "sdkMeta",
        Yi = "funding-sources",
        Xi = "expiry",
        Ji = function() {
          return Zt(function(n) {
            return (
              (n.funding = n.funding || {}),
              Object.keys(n.funding).filter(function(e) {
                var t = n.funding[e];
                return !(
                  (t.expiry && Date.now() > t.expiry) ||
                  !n.funding[e].remembered
                );
              })
            );
          });
        };
      function $i(n) {
        return -1 !== Ji().indexOf(n);
      }
      var Qi,
        na,
        ea,
        ta,
        ra = function() {
          for (
            var n = Object({
                paypal: Object({ eligible: !0, vaultable: !0 }),
                card: Object({
                  eligible: !0,
                  branded: !0,
                  vendors: Object({
                    visa: Object({ eligible: !0, vaultable: !0 }),
                    mastercard: Object({ eligible: !0, vaultable: !0 }),
                    amex: Object({ eligible: !0, vaultable: !0 }),
                    discover: Object({ eligible: !1, vaultable: !0 }),
                    hiper: Object({ eligible: !1, vaultable: !1 }),
                    elo: Object({ eligible: !1, vaultable: !0 }),
                    jcb: Object({ eligible: !1, vaultable: !0 })
                  })
                }),
                venmo: Object({ eligible: !1 }),
                itau: Object({ eligible: !1 }),
                credit: Object({ eligible: !1 }),
                sepa: Object({ eligible: !1 }),
                ideal: Object({ eligible: !1 }),
                bancontact: Object({ eligible: !1 }),
                giropay: Object({ eligible: !1 }),
                eps: Object({ eligible: !1 }),
                sofort: Object({ eligible: !1 }),
                mybank: Object({ eligible: !1 }),
                p24: Object({ eligible: !1 }),
                zimpler: Object({ eligible: !1 }),
                wechatpay: Object({ eligible: !1 }),
                payu: Object({ eligible: !1 }),
                blik: Object({ eligible: !1 }),
                trustly: Object({ eligible: !1 }),
                oxxo: Object({ eligible: !1 }),
                maxima: Object({ eligible: !1 }),
                boleto: Object({ eligible: !1 })
              }),
              e = 0;
            e < qi.length;
            e++
          ) {
            var t,
              r = qi[e];
            if ($i(r)) {
              var o = n[r];
              o &&
                (n = h(
                  {},
                  n,
                  (((t = {})[r] = h({}, o, { eligible: !0, recommended: !0 })),
                  t)
                ));
            }
          }
          return n;
        },
        oa = {
          PAYPAL: "paypal",
          CHECKOUT: "checkout",
          BUYNOW: "buynow",
          PAY: "pay",
          INSTALLMENT: "installment",
          SUBSCRIBE: "subscribe"
        },
        ia = {
          DEFAULT: "default",
          GOLD: "gold",
          BLUE: "blue",
          SILVER: "silver",
          DARKBLUE: "darkblue",
          BLACK: "black",
          WHITE: "white",
          TRANSPARENT: "transparent"
        },
        aa = { BLACK: "black", WHITE: "white", DEFAULT: "default" },
        ua = {
          TINY: "tiny",
          SMALL: "small",
          MEDIUM: "medium",
          LARGE: "large",
          HUGE: "huge",
          RESPONSIVE: "responsive"
        },
        ca = { PILL: "pill", RECT: "rect" },
        sa = { HORIZONTAL: "horizontal", VERTICAL: "vertical" },
        la = { SINGLE: "single", MULTIPLE: "multiple" },
        da = {
          BUTTON: "data-button",
          FUNDING_SOURCE: "data-funding-source",
          PAYMENT_METHOD_ID: "data-payment-method-id",
          CARD: "data-card",
          MENU: "data-menu",
          OPTIONAL: "optional"
        },
        fa = "default",
        pa = {
          CONTAINER: "paypal-button-container",
          BUTTON: "paypal-button",
          BUTTON_LABEL: "paypal-button-label-container",
          LABEL: "paypal-button-label",
          COLOR: "paypal-button-color",
          TEXT_COLOR: "paypal-button-text-color",
          SHAPE: "paypal-button-shape",
          LAYOUT: "paypal-button-layout",
          NUMBER: "paypal-button-number",
          ENV: "paypal-button-env",
          VAULT: "paypal-button-vault",
          LOADING: "paypal-button-loading",
          SPINNER: "paypal-button-spinner",
          TAGLINE: "paypal-button-tagline",
          POWERED_BY: "paypal-powered-by",
          TEXT: "paypal-button-text",
          SPACE: "paypal-button-space",
          CARD: "paypal-button-card",
          PERSONALIZATION_TEXT: "paypal-personalization-text",
          VAULT_LABEL: "paypal-vault-label",
          VAULT_HEADER: "paypal-vault-header",
          MENU_TOGGLE: "menu-toggle",
          SEPARATOR: "paypal-separator",
          DOM_READY: "dom-ready",
          HIDDEN: "hidden"
        };
      function ha(n, e) {
        var t = n.optional,
          r = n.className;
        return Uo(
          "span",
          {
            class: [pa.TEXT].concat(void 0 === r ? [] : r).join(" "),
            optional: t
          },
          e
        );
      }
      function Ea() {
        return Uo("span", { class: [pa.SPACE].join(" ") }, " ");
      }
      function ya(n) {
        return n.logo;
      }
      t(0);
      var ma = {
        layouts: [sa.VERTICAL],
        platforms: [qe.DESKTOP, qe.MOBILE],
        colors: [ia.SILVER, ia.BLACK, ia.WHITE],
        logoColors: ((Qi = {}), (Qi[ia.BLACK] = ii.WHITE), Qi),
        shapes: [ca.RECT, ca.PILL],
        textColors:
          ((na = {}),
          (na[fa] = ia.BLACK),
          (na[ia.BLUE] = ia.WHITE),
          (na[ia.BLACK] = ia.WHITE),
          (na[ia.DARKBLUE] = ia.WHITE),
          na),
        secondaryColors:
          ((ea = {}),
          (ea[fa] = ia.SILVER),
          (ea[ia.BLACK] = ia.BLACK),
          (ea[ia.WHITE] = ia.WHITE),
          ea),
        secondaryVaultColors:
          ((ta = {}),
          (ta[fa] = ia.SILVER),
          (ta[ia.BLACK] = ia.BLACK),
          (ta[ia.WHITE] = ia.WHITE),
          ta),
        Logo: function() {
          throw new Error("Not implemented");
        },
        Label: ya
      };
      function ga(n) {
        var e = n.url;
        return Uo(
          Bo,
          null,
          Uo("style", {
            nonce: n.nonce,
            innerHTML:
              "\n                    .tracking-beacon {\n                        visibility: hidden;\n                        position: absolute;\n                        height: 1px;\n                        width: 1px;\n                    }\n                "
          }),
          Uo("img", { class: "tracking-beacon", src: e })
        );
      }
      var wa,
        va,
        Ca,
        La = "\n    max-width: 0%;\n    opacity: 0;\n    overflow: hidden;\n",
        Ta =
          "\n\n    ." +
          pa.BUTTON +
          " ." +
          pa.TEXT +
          " {\n        \n    position: absolute;\n    visibility: hidden;\n\n    }\n\n    ." +
          pa.BUTTON +
          " ." +
          pa.VAULT_LABEL +
          " {\n        max-width: 60%;\n        text-overflow: ellipsis;\n        overflow: hidden;\n        white-space: nowrap;\n    }\n\n    ." +
          pa.DOM_READY +
          " ." +
          pa.BUTTON +
          " ." +
          pa.TEXT +
          ":not(." +
          pa.PERSONALIZATION_TEXT +
          "):not(." +
          pa.HIDDEN +
          ") {\n        \n    position: static;\n    visibility: visible;\n\n        " +
          La +
          "\n        animation: show-text 1s 0s forwards;\n    }\n\n    @keyframes show-text {\n        0% { " +
          La +
          " }\n        100% { \n    max-width: 100%;\n    opacity: 1;\n }\n    }\n";
      function ba(n) {
        var e = n.logoColor;
        return Uo(
          Bo,
          null,
          Uo(Ri, { logoColor: e }),
          Uo(Ea, null),
          Uo(yi, { logoColor: e })
        );
      }
      function Na(n) {}
      function Oa(n) {
        return Uo(Bo, null, Uo(ya, n), Uo(Na, n));
      }
      function Ra(n) {
        var e = n.label;
        return Uo(
          Bo,
          null,
          Uo(Ri, { logoColor: n.logoColor, optional: !0 }),
          " ",
          Uo(ha, { className: pa.VAULT_LABEL }, e)
        );
      }
      function Aa(n) {
        return null;
      }
      function Sa() {
        return hn(Sa, function() {
          var n, e;
          return (
            ((n = {})[Ke.PAYPAL] = h({}, ma, {
              layouts: [sa.VERTICAL, sa.HORIZONTAL],
              colors: [ia.GOLD, ia.BLUE, ia.SILVER, ia.BLACK, ia.WHITE],
              logoColors:
                ((e = {}),
                (e[ia.GOLD] = ii.BLUE),
                (e[ia.SILVER] = ii.BLUE),
                (e[ia.BLUE] = ii.WHITE),
                (e[ia.BLACK] = ii.WHITE),
                (e[ia.WHITE] = ii.BLUE),
                e),
              Logo: ba,
              Label: Oa,
              VaultLabel: Ra,
              Tag: Aa
            })),
            (n[Ke.VENMO] = null),
            (n[Ke.ITAU] = null),
            (n[Ke.CREDIT] = null),
            (n[Ke.CARD] = (function() {
              var n,
                e,
                t,
                r = (function() {
                  var n;
                  return (
                    ((n = {})[ze.VISA] = { Label: pi }),
                    (n[ze.AMEX] = { Label: di }),
                    (n[ze.MASTERCARD] = { Label: fi }),
                    (n[ze.DISCOVER] = null),
                    (n[ze.JCB] = null),
                    (n[ze.ELO] = null),
                    (n[ze.HIPER] = null),
                    n
                  );
                })(),
                o = (((n = {})[Ie.BR] = 5), n);
              return h({}, ma, {
                eligible: function(n) {
                  var e = n.fundingSource,
                    t = n.fundingEligibility.card,
                    r = t && t.vendors,
                    o = Boolean(-1 !== n.components.indexOf(Fe.HOSTED_FIELDS)),
                    i = Boolean(t && t.eligible),
                    a = Boolean(t && t.branded),
                    u = Boolean(
                      r &&
                        Object.keys(r).some(function(n) {
                          return Boolean(
                            r[n] &&
                              r[n].vaultedInstruments &&
                              r[n].vaultedInstruments.length
                          );
                        })
                    );
                  return !(!i || (!a && !u && e !== Ke.CARD && o));
                },
                layouts: [sa.VERTICAL],
                maxCards: o,
                vendors: r,
                colors: [ia.BLACK, ia.WHITE],
                secondaryColors: h(
                  {},
                  ma.secondaryColors,
                  ((e = {}), (e[fa] = ia.BLACK), e)
                ),
                logoColors:
                  ((t = {}), (t[ia.WHITE] = ia.BLACK), (t[fa] = ia.WHITE), t),
                Logo: function(n) {
                  return Uo(hi, { color: n.logoColor });
                },
                Label: function(n) {
                  var e = n.logo,
                    t = n.content,
                    r = Io(n.locale.lang);
                  return Uo(
                    Bo,
                    null,
                    r
                      ? Uo(
                          Bo,
                          null,
                          Uo(ha, { optional: !0 }, t.payWithDebitOrCreditCard),
                          Uo(Ea, null)
                        )
                      : null,
                    e,
                    r
                      ? null
                      : Uo(
                          Bo,
                          null,
                          Uo(Ea, null),
                          Uo(ha, { optional: !0 }, t.payWithDebitOrCreditCard)
                        )
                  );
                },
                VaultLabel: function(n) {
                  var e = n.vendor,
                    t = n.label;
                  if (!e)
                    throw new Error("Vendor required for card vault label");
                  var o = r[e];
                  if (!o)
                    throw new Error("Could not find vendor config for " + e);
                  return Uo(
                    Bo,
                    null,
                    Uo(o.Label, { optional: !0 }),
                    " ",
                    Uo(ha, { className: pa.VAULT_LABEL }, t)
                  );
                }
              });
            })()),
            (n[Ke.IDEAL] = null),
            (n[Ke.SEPA] = null),
            (n[Ke.BANCONTACT] = null),
            (n[Ke.GIROPAY] = null),
            (n[Ke.SOFORT] = null),
            (n[Ke.EPS] = null),
            (n[Ke.MYBANK] = null),
            (n[Ke.P24] = null),
            (n[Ke.PAYU] = null),
            (n[Ke.VERKKOPANKKI] =
              void 0 !==
                Object({
                  paypal: Object({ eligible: !0, vaultable: !0 }),
                  card: Object({
                    eligible: !0,
                    branded: !0,
                    vendors: Object({
                      visa: Object({ eligible: !0, vaultable: !0 }),
                      mastercard: Object({ eligible: !0, vaultable: !0 }),
                      amex: Object({ eligible: !0, vaultable: !0 }),
                      discover: Object({ eligible: !1, vaultable: !0 }),
                      hiper: Object({ eligible: !1, vaultable: !1 }),
                      elo: Object({ eligible: !1, vaultable: !0 }),
                      jcb: Object({ eligible: !1, vaultable: !0 })
                    })
                  }),
                  venmo: Object({ eligible: !1 }),
                  itau: Object({ eligible: !1 }),
                  credit: Object({ eligible: !1 }),
                  sepa: Object({ eligible: !1 }),
                  ideal: Object({ eligible: !1 }),
                  bancontact: Object({ eligible: !1 }),
                  giropay: Object({ eligible: !1 }),
                  eps: Object({ eligible: !1 }),
                  sofort: Object({ eligible: !1 }),
                  mybank: Object({ eligible: !1 }),
                  p24: Object({ eligible: !1 }),
                  zimpler: Object({ eligible: !1 }),
                  wechatpay: Object({ eligible: !1 }),
                  payu: Object({ eligible: !1 }),
                  blik: Object({ eligible: !1 }),
                  trustly: Object({ eligible: !1 }),
                  oxxo: Object({ eligible: !1 }),
                  maxima: Object({ eligible: !1 }),
                  boleto: Object({ eligible: !1 })
                }).verkkopankki &&
              Object({
                paypal: Object({ eligible: !0, vaultable: !0 }),
                card: Object({
                  eligible: !0,
                  branded: !0,
                  vendors: Object({
                    visa: Object({ eligible: !0, vaultable: !0 }),
                    mastercard: Object({ eligible: !0, vaultable: !0 }),
                    amex: Object({ eligible: !0, vaultable: !0 }),
                    discover: Object({ eligible: !1, vaultable: !0 }),
                    hiper: Object({ eligible: !1, vaultable: !1 }),
                    elo: Object({ eligible: !1, vaultable: !0 }),
                    jcb: Object({ eligible: !1, vaultable: !0 })
                  })
                }),
                venmo: Object({ eligible: !1 }),
                itau: Object({ eligible: !1 }),
                credit: Object({ eligible: !1 }),
                sepa: Object({ eligible: !1 }),
                ideal: Object({ eligible: !1 }),
                bancontact: Object({ eligible: !1 }),
                giropay: Object({ eligible: !1 }),
                eps: Object({ eligible: !1 }),
                sofort: Object({ eligible: !1 }),
                mybank: Object({ eligible: !1 }),
                p24: Object({ eligible: !1 }),
                zimpler: Object({ eligible: !1 }),
                wechatpay: Object({ eligible: !1 }),
                payu: Object({ eligible: !1 }),
                blik: Object({ eligible: !1 }),
                trustly: Object({ eligible: !1 }),
                oxxo: Object({ eligible: !1 }),
                maxima: Object({ eligible: !1 }),
                boleto: Object({ eligible: !1 })
              }).verkkopankki.eligible
                ? h({}, ma, {
                    layouts: [sa.VERTICAL],
                    shippingChange: !1,
                    Logo: function(n) {
                      return (function(n) {
                        var e = n.logoColor,
                          t = void 0 === e ? ii.DEFAULT : e,
                          r = c(n, ["logoColor"]),
                          o = li(oi.VERKKOPANKKI, Pi, t),
                          i = o.primary,
                          a = o.secondary,
                          u = o.tertiary,
                          s = o.quaternary,
                          l = o.quinary,
                          d = o.senary;
                        return Uo(
                          ci,
                          h({}, r, {
                            name: oi.VERKKOPANKKI,
                            logoColor: t,
                            render: function() {
                              return Uo(
                                "svg",
                                {
                                  width: "83px",
                                  height: "32px",
                                  viewBox: "0 0 83 32",
                                  version: "1.1",
                                  xmlns: "http://www.w3.org/2000/svg"
                                },
                                Uo(
                                  "defs",
                                  null,
                                  Uo("path", {
                                    d:
                                      "M6.75,0.0879407407 C3.0375,0.0879407407 0,2.96794074 0,6.48794074 L0,6.48794074 L0,24.5027556 C0,28.0227556 3.0375,30.9027556 6.75,30.9027556 L6.75,30.9027556 L25.75025,30.9027556 C29.4625,30.9027556 32.5,28.0227556 32.5,24.5027556 L32.5,24.5027556 L32.5,6.48794074 C32.5,2.96794074 29.4625,0.0879407407 25.75025,0.0879407407 L25.75025,0.0879407407 L6.75,0.0879407407 Z",
                                    id: "path-1"
                                  }),
                                  Uo(
                                    "linearGradient",
                                    {
                                      x1: "80.3415915%",
                                      y1: "2.75555705%",
                                      x2: "19.6584085%",
                                      y2: "97.2445831%",
                                      id: "linearGradient-3"
                                    },
                                    Uo("stop", {
                                      "stop-color": i,
                                      offset: "0%"
                                    }),
                                    Uo("stop", {
                                      "stop-color": a,
                                      offset: "100%"
                                    })
                                  ),
                                  Uo("path", {
                                    d:
                                      "M6.6155,0.206459259 C3.04575,0.206459259 0.125,2.97576296 0.125,6.36041481 L0.125,6.36041481 L0.125,23.6821333 C0.125,27.0670222 3.04575,29.8360889 6.6155,29.8360889 L6.6155,29.8360889 L24.8845,29.8360889 C28.45425,29.8360889 31.375,27.0670222 31.375,23.6821333 L31.375,23.6821333 L31.375,6.36041481 C31.375,2.97576296 28.45425,0.206459259 24.8845,0.206459259 L24.8845,0.206459259 L6.6155,0.206459259 Z",
                                    id: "path-4"
                                  }),
                                  Uo(
                                    "linearGradient",
                                    {
                                      x1: "6.10096128%",
                                      y1: "89.4646408%",
                                      x2: "93.8990386%",
                                      y2: "10.5354941%",
                                      id: "linearGradient-6"
                                    },
                                    Uo("stop", {
                                      "stop-color": i,
                                      offset: "0%"
                                    }),
                                    Uo("stop", {
                                      "stop-color": a,
                                      offset: "100%"
                                    })
                                  ),
                                  Uo("polygon", {
                                    id: "path-7",
                                    points:
                                      "6.5 0.206459259 6.5 10.8330667 0.125 10.8330667 0.125 19.129363 6.5 19.129363 6.5 29.8360889 15.25 29.8360889 15.25 19.129363 31.375 19.129363 31.375 10.8330667 15.25 10.8330667 15.25 0.206459259"
                                  }),
                                  Uo(
                                    "linearGradient",
                                    {
                                      x1: "6.26612168%",
                                      y1: "82.243184%",
                                      x2: "78.1338463%",
                                      y2: "17.635184%",
                                      id: "linearGradient-9"
                                    },
                                    Uo("stop", {
                                      "stop-color": u,
                                      offset: "0%"
                                    }),
                                    Uo("stop", {
                                      "stop-color": s,
                                      offset: "100%"
                                    })
                                  ),
                                  Uo("polygon", {
                                    id: "path-10",
                                    points:
                                      "0.106675 0.228266667 3.17249309 0.228266667 3.17249309 6.24822519 0.106675 6.24822519"
                                  }),
                                  Uo("polygon", {
                                    id: "path-12",
                                    points:
                                      "0.2434 0.228266667 3.30921809 0.228266667 3.30921809 6.24822519 0.2434 6.24822519"
                                  }),
                                  Uo("polygon", {
                                    id: "path-14",
                                    points:
                                      "0.0454 0.228266667 3.11102683 0.228266667 3.11102683 6.24822519 0.0454 6.24822519"
                                  }),
                                  Uo("polygon", {
                                    id: "path-16",
                                    points:
                                      "0.181875 0.228266667 3.24775183 0.228266667 3.24775183 6.24822519 0.181875 6.24822519"
                                  }),
                                  Uo("polygon", {
                                    id: "path-18",
                                    points:
                                      "0.1455 0.211057778 0.90525 0.211057778 0.90525 1.20969481 0.1455 1.20969481"
                                  }),
                                  Uo("polygon", {
                                    id: "path-20",
                                    points:
                                      "0 31.762963 82.90525 31.762963 82.90525 0.228266667 0 0.228266667"
                                  })
                                ),
                                Uo(
                                  "g",
                                  {
                                    stroke: "none",
                                    "stroke-width": "1",
                                    fill: "none",
                                    "fill-rule": "evenodd"
                                  },
                                  Uo(
                                    "g",
                                    {
                                      transform:
                                        "translate(-219.000000, -536.000000)"
                                    },
                                    Uo(
                                      "g",
                                      {
                                        transform:
                                          "translate(219.000000, 536.000000)"
                                      },
                                      Uo(
                                        "g",
                                        {
                                          transform:
                                            "translate(0.000000, 0.482844)"
                                        },
                                        Uo(
                                          "mask",
                                          { fill: i },
                                          Uo("use", { href: "#path-1" })
                                        ),
                                        Uo("path", {
                                          d:
                                            "M6.75,0.0879407407 C3.0375,0.0879407407 0,2.96794074 0,6.48794074 L0,6.48794074 L0,24.5027556 C0,28.0227556 3.0375,30.9027556 6.75,30.9027556 L6.75,30.9027556 L25.75025,30.9027556 C29.4625,30.9027556 32.5,28.0227556 32.5,24.5027556 L32.5,24.5027556 L32.5,6.48794074 C32.5,2.96794074 29.4625,0.0879407407 25.75025,0.0879407407 L25.75025,0.0879407407 L6.75,0.0879407407 Z",
                                          fill: "url(#linearGradient-3)",
                                          mask: "url(#mask-2)"
                                        })
                                      ),
                                      Uo(
                                        "g",
                                        {
                                          transform:
                                            "translate(0.500000, 0.956919)"
                                        },
                                        Uo(
                                          "mask",
                                          { fill: i },
                                          Uo("use", { href: "#path-4" })
                                        ),
                                        Uo("path", {
                                          d:
                                            "M6.6155,0.206459259 C3.04575,0.206459259 0.125,2.97576296 0.125,6.36041481 L0.125,6.36041481 L0.125,23.6821333 C0.125,27.0670222 3.04575,29.8360889 6.6155,29.8360889 L6.6155,29.8360889 L24.8845,29.8360889 C28.45425,29.8360889 31.375,27.0670222 31.375,23.6821333 L31.375,23.6821333 L31.375,6.36041481 C31.375,2.97576296 28.45425,0.206459259 24.8845,0.206459259 L24.8845,0.206459259 L6.6155,0.206459259 Z",
                                          fill: "url(#linearGradient-6)",
                                          mask: "url(#mask-5)"
                                        })
                                      ),
                                      Uo(
                                        "g",
                                        {
                                          transform:
                                            "translate(0.500000, 0.956919)"
                                        },
                                        Uo(
                                          "mask",
                                          { id: "mask-8", fill: i },
                                          Uo("use", { href: "#path-7" })
                                        ),
                                        Uo("polygon", {
                                          id: "Fill-7",
                                          fill: "url(#linearGradient-9)",
                                          mask: "url(#mask-8)",
                                          points:
                                            "6.5 0.206459259 6.5 10.8330667 0.125 10.8330667 0.125 19.129363 6.5 19.129363 6.5 29.8360889 15.25 29.8360889 15.25 19.129363 31.375 19.129363 31.375 10.8330667 15.25 10.8330667 15.25 0.206459259"
                                        })
                                      ),
                                      Uo(
                                        "g",
                                        {
                                          transform:
                                            "translate(0.000000, 0.008770)"
                                        },
                                        Uo("path", {
                                          d:
                                            "M41.86625,0.448142222 L41.4055,0.448142222 C41.353,0.448142222 41.30625,0.480142222 41.2895,0.527312593 L39.593,5.31949037 L37.89675,0.527312593 C37.88,0.480142222 37.83325,0.448142222 37.7805,0.448142222 L37.312,0.448142222 C37.2725,0.448142222 37.2355,0.466157037 37.2125,0.496734815 C37.1895,0.527075556 37.1835,0.566186667 37.196,0.601505185 L39.18525,6.16926815 C39.202,6.21643852 39.24875,6.24820148 39.30125,6.24820148 L39.877,6.24820148 C39.9295,6.24820148 39.97625,6.21643852 39.993,6.16926815 L41.98225,0.601505185 C41.995,0.566186667 41.9887546,0.527075556 41.96575,0.496734815 C41.94275,0.466157037 41.90575,0.448142222 41.86625,0.448142222",
                                          fill: l
                                        }),
                                        Uo("path", {
                                          d:
                                            "M42.770925,3.87662222 C42.776925,3.51656296 42.812175,3.23591111 42.875675,3.04106667 C42.940925,2.84148148 43.045425,2.7058963 43.194675,2.62648889 C43.352175,2.54305185 43.589175,2.50085926 43.899175,2.50085926 C44.163925,2.50085926 44.371675,2.52764444 44.515675,2.58026667 C44.645425,2.62767407 44.736675,2.70684444 44.795175,2.82228148 C44.858175,2.94625185 44.890175,3.12853333 44.890175,3.3632 C44.890175,3.5634963 44.845925,3.69884444 44.758675,3.76616296 C44.663925,3.83964444 44.498675,3.87662222 44.267925,3.87662222 L42.770925,3.87662222 Z M45.209425,4.16983704 C45.430425,3.99845926 45.542675,3.72681481 45.542675,3.3632 C45.542675,3.01238519 45.483675,2.72865185 45.366925,2.52005926 C45.245425,2.30364444 45.058675,2.14767407 44.811175,2.05641481 C44.578175,1.97084444 44.271425,1.92722963 43.899175,1.92722963 C43.455925,1.92722963 43.099425,1.99312593 42.840175,2.12278519 C42.569425,2.25742222 42.372675,2.48995556 42.255175,2.81374815 C42.143675,3.12047407 42.087175,3.55306667 42.087175,4.09896296 C42.087175,4.64035556 42.140925,5.07105185 42.246925,5.37896296 C42.358175,5.70417778 42.548675,5.94168889 42.813175,6.08462222 C43.068925,6.22305185 43.426425,6.29345185 43.876175,6.29345185 C44.339425,6.29345185 44.832675,6.26500741 45.341925,6.2093037 C45.403675,6.20266667 45.450425,6.15312593 45.450425,6.09386667 L45.450425,5.82838519 C45.450425,5.76438519 45.395425,5.71223704 45.327925,5.71223704 L43.975925,5.71223704 C43.640425,5.71223704 43.385175,5.66767407 43.217675,5.57925926 C43.057675,5.49463704 42.949425,5.36260741 42.886925,5.17511111 C42.826425,4.99377778 42.790425,4.74014815 42.780175,4.41991111 L44.298675,4.41991111 C44.689925,4.41991111 44.996175,4.33576296 45.209425,4.16983704 L45.209425,4.16983704 Z",
                                          fill: l
                                        }),
                                        Uo("path", {
                                          d:
                                            "M48.8798,1.97755259 C48.7618,1.94413037 48.6158,1.92730074 48.4458,1.92730074 C48.1323,1.92730074 47.8433,2.00196741 47.58705,2.14893037 C47.40355,2.25441185 47.2248,2.39118222 47.0538,2.55734519 L46.97705,2.0716563 C46.96805,2.01476741 46.9163,1.97257481 46.8558,1.97257481 L46.52555,1.97257481 C46.4578,1.97257481 46.40305,2.02472296 46.40305,2.08896 L46.40305,6.1318637 C46.40305,6.19610074 46.4578,6.24824889 46.52555,6.24824889 L46.97105,6.24824889 C47.0388,6.24824889 47.09355,6.19610074 47.09355,6.1318637 L47.09355,3.20730074 C47.32605,2.99610074 47.5388,2.84178963 47.7263,2.74934519 C47.9178,2.65476741 48.1468,2.60712296 48.40705,2.60712296 C48.5178,2.60712296 48.65755,2.62181926 48.82255,2.65073778 C48.85805,2.65713778 48.8953,2.64789333 48.9233,2.62584889 C48.95105,2.60380444 48.96755,2.57109333 48.96755,2.53648593 L48.96755,2.08896 C48.96755,2.03752296 48.9318,1.99224889 48.8798,1.97755259",
                                          fill: l
                                        }),
                                        Uo(
                                          "g",
                                          {
                                            transform:
                                              "translate(49.500000, 0.000000)"
                                          },
                                          Uo(
                                            "mask",
                                            { id: "mask-11", fill: i },
                                            Uo("use", { href: "#path-10" })
                                          ),
                                          Uo("path", {
                                            d:
                                              "M1.301675,3.9731437 L3.039925,2.16715852 C3.072675,2.13302519 3.080925,2.08395852 3.061425,2.04200296 C3.041925,2.00004741 2.997925,1.97278815 2.949425,1.97278815 L2.373425,1.97278815 C2.338925,1.97278815 2.306425,1.98629926 2.283175,2.01047704 L0.797175,3.54979556 L0.797175,0.344343704 C0.797175,0.280343704 0.742425,0.228195556 0.674675,0.228195556 L0.229175,0.228195556 C0.161425,0.228195556 0.106675,0.280343704 0.106675,0.344343704 L0.106675,6.13184 C0.106675,6.19607704 0.161425,6.24822519 0.229175,6.24822519 L0.674675,6.24822519 C0.742425,6.24822519 0.797175,6.19607704 0.797175,6.13184 L0.797175,4.41948444 L2.370925,6.20650667 C2.394175,6.23281778 2.428675,6.24822519 2.464925,6.24822519 L3.049925,6.24822519 C3.097675,6.24822519 3.140675,6.22191407 3.160925,6.18090667 C3.181175,6.14037333 3.174425,6.09178074 3.143925,6.05741037 L1.301675,3.9731437 Z",
                                            fill: l,
                                            mask: "url(#mask-11)"
                                          })
                                        ),
                                        Uo(
                                          "g",
                                          {
                                            transform:
                                              "translate(53.250000, 0.000000)"
                                          },
                                          Uo(
                                            "mask",
                                            { id: "mask-13", fill: i },
                                            Uo("use", { href: "#path-12" })
                                          ),
                                          Uo("path", {
                                            d:
                                              "M1.4384,3.9731437 L3.1764,2.16715852 C3.20915,2.13302519 3.2174,2.08395852 3.1979,2.04200296 C3.1784,2.00004741 3.1344,1.97278815 3.0859,1.97278815 L2.51015,1.97278815 C2.47565,1.97278815 2.44315,1.98629926 2.4199,2.01047704 L0.9339,3.54979556 L0.9339,0.344343704 C0.9339,0.280343704 0.87915,0.228195556 0.8114,0.228195556 L0.3659,0.228195556 C0.29815,0.228195556 0.2434,0.280343704 0.2434,0.344343704 L0.2434,6.13184 C0.2434,6.19607704 0.29815,6.24822519 0.3659,6.24822519 L0.8114,6.24822519 C0.87915,6.24822519 0.9339,6.19607704 0.9339,6.13184 L0.9339,4.41948444 L2.5074,6.20650667 C2.53065,6.23281778 2.56515,6.24822519 2.6014,6.24822519 L3.18665,6.24822519 C3.2344,6.24822519 3.2774,6.22191407 3.29765,6.18090667 C3.3179,6.14037333 3.31115,6.09178074 3.28065,6.05741037 L1.4384,3.9731437 Z",
                                            fill: l,
                                            mask: "url(#mask-13)"
                                          })
                                        ),
                                        Uo(
                                          "g",
                                          {
                                            transform:
                                              "translate(74.500000, 0.000000)"
                                          },
                                          Uo(
                                            "mask",
                                            { id: "mask-15", fill: i },
                                            Uo("use", { href: "#path-14" })
                                          ),
                                          Uo("path", {
                                            d:
                                              "M1.2404,3.9731437 L2.9784,2.16715852 C3.01115,2.13302519 3.0194,2.08395852 2.9999,2.04200296 C2.9804,2.00004741 2.9364,1.97278815 2.8879,1.97278815 L2.3119,1.97278815 C2.2774,1.97278815 2.2449,1.98629926 2.22165,2.01047704 L0.7359,3.54955852 L0.7359,0.344343704 C0.7359,0.280343704 0.68115,0.228195556 0.6134,0.228195556 L0.1679,0.228195556 C0.10015,0.228195556 0.0454,0.280343704 0.0454,0.344343704 L0.0454,6.13184 C0.0454,6.19607704 0.10015,6.24822519 0.1679,6.24822519 L0.6134,6.24822519 C0.68115,6.24822519 0.7359,6.19607704 0.7359,6.13184 L0.7359,4.41995852 L2.3094,6.20650667 C2.33265,6.23281778 2.36715,6.24822519 2.4034,6.24822519 L2.9884,6.24822519 C3.03615,6.24822519 3.07915,6.22191407 3.09965,6.18090667 C3.11965,6.14037333 3.1129,6.09178074 3.0824,6.05741037 L1.2404,3.9731437 Z",
                                            fill: l,
                                            mask: "url(#mask-15)"
                                          })
                                        ),
                                        Uo(
                                          "g",
                                          {
                                            transform:
                                              "translate(78.250000, 0.000000)"
                                          },
                                          Uo(
                                            "mask",
                                            { id: "mask-17", fill: i },
                                            Uo("use", { href: "#path-16" })
                                          ),
                                          Uo("path", {
                                            d:
                                              "M1.377125,3.9731437 L3.115125,2.16715852 C3.147875,2.13302519 3.156125,2.08395852 3.136625,2.04200296 C3.117125,2.00004741 3.073125,1.97278815 3.024625,1.97278815 L2.448625,1.97278815 C2.414125,1.97278815 2.381625,1.98629926 2.358375,2.01047704 L0.872375,3.54979556 L0.872375,0.344343704 C0.872375,0.280343704 0.817625,0.228195556 0.749875,0.228195556 L0.304375,0.228195556 C0.236625,0.228195556 0.181875,0.280343704 0.181875,0.344343704 L0.181875,6.13184 C0.181875,6.19607704 0.236625,6.24822519 0.304375,6.24822519 L0.749875,6.24822519 C0.817625,6.24822519 0.872375,6.19607704 0.872375,6.13184 L0.872375,4.41948444 L2.446125,6.20650667 C2.469375,6.23281778 2.503875,6.24822519 2.540125,6.24822519 L3.125125,6.24822519 C3.172875,6.24822519 3.215875,6.22191407 3.236375,6.18090667 C3.256375,6.14037333 3.249625,6.09178074 3.219125,6.05741037 L1.377125,3.9731437 Z",
                                            fill: l,
                                            mask: "url(#mask-17)"
                                          })
                                        ),
                                        Uo("path", {
                                          d:
                                            "M58.732575,5.68936296 C58.439825,5.68936296 58.209325,5.65238519 58.047825,5.57937778 C57.899325,5.51253333 57.782075,5.37078519 57.699325,5.15863704 C57.610075,4.9298963 57.564825,4.576 57.564825,4.10642963 C57.564825,3.63733333 57.610075,3.28201481 57.699325,3.05042963 C57.781825,2.83685926 57.898825,2.69534815 58.046575,2.63063704 C58.209075,2.55952593 58.439825,2.52373333 58.732575,2.52373333 C59.020325,2.52373333 59.250075,2.55952593 59.415075,2.63063704 C59.565825,2.69582222 59.685075,2.83757037 59.769575,3.05161481 C59.861575,3.28248889 59.907825,3.63733333 59.907825,4.10642963 C59.907825,4.57576296 59.861575,4.92942222 59.769825,5.15768889 C59.685075,5.37007407 59.565075,5.51205926 59.414325,5.57914074 C59.249825,5.65238519 59.020575,5.68936296 58.732575,5.68936296 M59.771825,2.10512593 C59.508075,1.98731852 59.158325,1.92734815 58.732575,1.92734815 C58.306325,1.92734815 57.958325,1.9858963 57.697825,2.1010963 C57.424575,2.22222222 57.215075,2.44835556 57.075325,2.77333333 C56.942075,3.08432593 56.874325,3.5328 56.874325,4.10642963 C56.874325,4.6701037 56.942075,5.11478519 57.075325,5.42814815 C57.214825,5.7554963 57.425075,5.98542222 57.700075,6.11128889 C57.964575,6.23217778 58.311575,6.29357037 58.732575,6.29357037 C59.158575,6.29357037 59.508575,6.23217778 59.772825,6.11128889 C60.048325,5.98518519 60.258325,5.75668148 60.397325,5.43217778 C60.530575,5.12118519 60.598575,4.67508148 60.598575,4.10642963 C60.598575,3.53848889 60.530575,3.09238519 60.397325,2.78068148 C60.258075,2.45617778 60.047825,2.22885926 59.771825,2.10512593",
                                          fill: l
                                        }),
                                        Uo("path", {
                                          d:
                                            "M64.20645,4.09908148 C64.20645,5.1693037 63.87745,5.68936296 63.19995,5.68936296 C62.8272,5.68936296 62.43195,5.5808 62.0247,5.36651852 L62.0247,2.85771852 C62.2282,2.75958519 62.4192,2.67922963 62.59295,2.61902222 C62.7757,2.5554963 62.97995,2.52373333 63.19995,2.52373333 C63.4832,2.52373333 63.7147,2.64557037 63.90745,2.89682963 C64.10595,3.15591111 64.20645,3.56077037 64.20645,4.09908148 M63.2997,1.92734815 C63.0547,1.92734815 62.78745,1.98115556 62.5057,2.08734815 C62.30445,2.16296296 62.12945,2.24284444 61.9832,2.32533333 L61.92195,2.06364444 C61.9097,2.01031111 61.8597,1.97262222 61.80245,1.97262222 L61.4567,1.97262222 C61.38895,1.97262222 61.3342,2.02477037 61.3342,2.08900741 L61.3342,7.9296 C61.3342,7.99383704 61.38895,8.04574815 61.4567,8.04574815 L61.9022,8.04574815 C61.96995,8.04574815 62.0247,7.99383704 62.0247,7.9296 L62.0247,5.96077037 C62.19345,6.04562963 62.3712,6.11721481 62.55545,6.17386667 C62.8122,6.25327407 63.0627,6.29357037 63.2997,6.29357037 C64.35945,6.29357037 64.8972,5.5552 64.8972,4.09908148 C64.8972,3.49985185 64.77145,2.98808889 64.52345,2.57754074 C64.2632,2.14613333 63.85145,1.92734815 63.2997,1.92734815",
                                          fill: l
                                        }),
                                        Uo("path", {
                                          d:
                                            "M67.38835,5.62915556 C66.91085,5.75265185 66.61485,5.74459259 66.3756,5.56325926 C66.2516,5.46915556 66.19135,5.31531852 66.19135,5.0925037 L66.19135,4.90311111 C66.19135,4.69973333 66.25035,4.54234074 66.37235,4.42216296 C66.4921,4.30364444 66.6886,4.23917037 66.95685,4.23016296 L68.2581,4.18204444 L68.2581,5.35348148 L67.9846,5.45042963 C67.8086,5.51253333 67.6081,5.5725037 67.38835,5.62915556 M67.4206,1.90435556 C66.95785,1.90435556 66.46885,1.93801481 65.96735,2.00414815 C65.90685,2.01220741 65.86185,2.06127407 65.86185,2.11911111 L65.86185,2.38459259 C65.86185,2.44882963 65.9166,2.50097778 65.98435,2.50097778 L67.26685,2.50097778 C67.6521,2.50097778 67.9166,2.56379259 68.05385,2.68847407 C68.18935,2.8114963 68.2581,3.00562963 68.2581,3.26447407 L68.2581,3.70962963 L66.8831,3.70962963 C66.4486,3.70962963 66.1066,3.81700741 65.86635,4.02915556 C65.62385,4.2432 65.50085,4.53475556 65.50085,4.89528889 L65.50085,5.16859259 C65.50085,5.51324444 65.61035,5.7901037 65.8256,5.99087407 C66.04035,6.19164444 66.3211,6.29357037 66.66035,6.29357037 C66.8921,6.29357037 67.14185,6.2546963 67.40285,6.17813333 C67.65735,6.10394074 67.88985,6.02168889 68.0931,5.93422222 C68.1851,5.89463704 68.2541,5.86405926 68.30635,5.83988148 L68.3676,6.15324444 C68.37835,6.208 68.42885,6.24805926 68.48785,6.24805926 L68.82585,6.24805926 C68.8936,6.24805926 68.94835,6.19614815 68.94835,6.13191111 L68.94835,3.24195556 C68.94835,2.79585185 68.8216,2.45712593 68.5716,2.23573333 C68.32385,2.016 67.93635,1.90435556 67.4206,1.90435556",
                                          fill: l
                                        }),
                                        Uo("path", {
                                          d:
                                            "M72.05925,1.90440296 C71.77425,1.90440296 71.48575,1.95702519 71.20125,2.0601363 C70.9805,2.14049185 70.7715,2.2393363 70.5785,2.35477333 L70.50425,2.06179556 C70.49125,2.00941037 70.44175,1.97266963 70.38525,1.97266963 L70.055,1.97266963 C69.9875,1.97266963 69.9325,2.02481778 69.9325,2.08881778 L69.9325,6.13195852 C69.9325,6.19595852 69.9875,6.24810667 70.055,6.24810667 L70.5005,6.24810667 C70.568,6.24810667 70.623,6.19595852 70.623,6.13195852 L70.623,2.91536593 C70.86175,2.78926222 71.07525,2.69515852 71.2585,2.63471407 C71.4525,2.57118815 71.6805,2.53895111 71.9365,2.53895111 C72.18875,2.53895111 72.3835,2.61646222 72.53225,2.77646222 C72.68475,2.94049185 72.75875,3.14481778 72.75875,3.40105481 L72.75875,6.13195852 C72.75875,6.19595852 72.81375,6.24810667 72.88125,6.24810667 L73.3265,6.24810667 C73.39425,6.24810667 73.44925,6.19595852 73.44925,6.13195852 L73.44925,3.3555437 C73.44925,2.9561363 73.33025,2.61243259 73.096,2.33462519 C72.855,2.04923259 72.506,1.90440296 72.05925,1.90440296",
                                          fill: l
                                        }),
                                        Uo("path", {
                                          d:
                                            "M82.751875,1.97269333 L82.306375,1.97269333 C82.238625,1.97269333 82.183875,2.02484148 82.183875,2.08884148 L82.183875,6.13198222 C82.183875,6.19598222 82.238625,6.24813037 82.306375,6.24813037 L82.751875,6.24813037 C82.819625,6.24813037 82.874375,6.19598222 82.874375,6.13198222 L82.874375,2.08884148 C82.874375,2.02484148 82.819625,1.97269333 82.751875,1.97269333",
                                          fill: l
                                        }),
                                        Uo(
                                          "g",
                                          {
                                            transform:
                                              "translate(82.000000, 0.237037)"
                                          },
                                          Uo(
                                            "mask",
                                            { id: "mask-19", fill: i },
                                            Uo("use", { href: "#path-18" })
                                          ),
                                          Uo("path", {
                                            d:
                                              "M0.68275,0.211057778 L0.38325,0.211057778 C0.239,0.211057778 0.1455,0.301368889 0.1455,0.441220741 L0.1455,0.979531852 C0.1455,1.0617837 0.1805,1.11393185 0.21,1.14308741 C0.2405,1.17342815 0.29525,1.20969481 0.38325,1.20969481 L0.68275,1.20969481 C0.78525,1.20969481 0.90525,1.14925037 0.90525,0.979531852 L0.90525,0.441220741 C0.90525,0.271502222 0.78525,0.211057778 0.68275,0.211057778 L0.68275,0.211057778 Z",
                                            fill: l,
                                            mask: "url(#mask-19)"
                                          })
                                        ),
                                        Uo("polygon", {
                                          fill: d,
                                          points:
                                            "54.410575 25.6368119 53.503075 25.6368119 51.980825 27.2138193 51.980825 23.8924563 51.290325 23.8924563 51.290325 29.9122489 51.980825 29.9122489 51.980825 28.0835081 53.591325 29.9122489 54.496075 29.9122489 52.485575 27.6371674"
                                        }),
                                        Uo("path", {
                                          d:
                                            "M38.2935,12.7641126 L40.91225,12.7261867 L40.91225,12.171283 L38.2935,12.133357 L38.2935,10.654957 C38.2935,10.4489719 38.344,10.2948978 38.4435,10.1967644 C38.5435,10.098157 38.68275,10.0505126 38.86975,10.0505126 L41.235,10.0505126 L41.235,9.48233481 L41.1185,9.47688296 C40.2725,9.43658667 39.47975,9.41596444 38.76225,9.41596444 C38.44075,9.41596444 38.16525,9.51149037 37.9435,9.69969778 C37.7175,9.89146074 37.603,10.1948681 37.603,10.6016237 L37.603,15.2160237 L38.2935,15.2160237 L38.2935,12.7641126 Z",
                                          fill: d
                                        }),
                                        Uo("path", {
                                          d:
                                            "M42.21085,10.3483733 C42.24135,10.3787141 42.2961,10.4145067 42.3836,10.4145067 L42.68335,10.4145067 C42.78585,10.4145067 42.9056,10.3540622 42.9056,10.1845807 L42.9056,9.64603259 C42.9056,9.47631407 42.78585,9.41586963 42.68335,9.41586963 L42.3836,9.41586963 C42.23935,9.41586963 42.1461,9.50618074 42.1461,9.64603259 L42.1461,10.1845807 C42.1461,10.2665956 42.1811,10.3189807 42.2106,10.3481363 L42.21085,10.3483733 Z",
                                          fill: d
                                        }),
                                        Uo(
                                          "mask",
                                          { id: "mask-21", fill: i },
                                          Uo("use", { href: "#path-20" })
                                        ),
                                        Uo("polygon", {
                                          fill: d,
                                          mask: "url(#mask-21)",
                                          points:
                                            "42.1845 15.2158815 42.875 15.2158815 42.875 10.9404444 42.1845 10.9404444"
                                        }),
                                        Uo("path", {
                                          d:
                                            "M47.4611,15.2159763 L47.4611,12.3236504 C47.4611,11.9240059 47.3421,11.5805393 47.10785,11.3027319 C46.86635,11.0171022 46.5176,10.8722726 46.07085,10.8722726 C45.78635,10.8722726 45.4976,10.9246578 45.21335,11.0280059 C44.9921,11.1083615 44.7831,11.2072059 44.59035,11.322643 L44.49335,10.9405393 L43.94435,10.9405393 L43.94435,15.2159763 L44.6346,15.2159763 L44.6346,11.8829985 C44.8736,11.7568948 45.08735,11.6627911 45.2701,11.6028207 C45.46435,11.5388207 45.6926,11.5068207 45.9481,11.5068207 C46.20035,11.5068207 46.39535,11.5843319 46.5441,11.7443319 C46.6966,11.9083615 46.7706,12.1126874 46.7706,12.3689244 L46.7706,15.2159763 L47.4611,15.2159763 Z",
                                          fill: d,
                                          mask: "url(#mask-21)"
                                        }),
                                        Uo("path", {
                                          d:
                                            "M51.33365,15.2159763 L52.02415,15.2159763 L52.02415,12.3236504 C52.02415,11.9240059 51.90515,11.5805393 51.67115,11.3027319 C51.42965,11.0171022 51.0809,10.8722726 50.63415,10.8722726 C50.34915,10.8722726 50.06065,10.9246578 49.7764,11.0280059 C49.5554,11.1083615 49.3464,11.2072059 49.1534,11.322643 L49.05665,10.9405393 L48.50715,10.9405393 L48.50715,15.2159763 L49.1979,15.2159763 L49.1979,11.8829985 C49.4369,11.7568948 49.65065,11.6627911 49.83365,11.6028207 C50.02715,11.5388207 50.2554,11.5068207 50.5114,11.5068207 C50.76365,11.5068207 50.9584,11.5843319 51.10715,11.7443319 C51.25965,11.9083615 51.33365,12.1126874 51.33365,12.3689244 L51.33365,15.2159763 Z",
                                          fill: d,
                                          mask: "url(#mask-21)"
                                        }),
                                        Uo("polygon", {
                                          fill: d,
                                          mask: "url(#mask-21)",
                                          points:
                                            "53.07025 15.2158815 53.761 15.2158815 53.761 10.9404444 53.07025 10.9404444"
                                        }),
                                        Uo("path", {
                                          d:
                                            "M53.2697,10.4145778 L53.5692,10.4145778 C53.6717,10.4145778 53.7917,10.3541333 53.7917,10.1844148 L53.7917,9.6461037 C53.7917,9.47638519 53.6717,9.41594074 53.5692,9.41594074 L53.2697,9.41594074 C53.12545,9.41594074 53.03195,9.50625185 53.03195,9.6461037 L53.03195,10.1844148 C53.03195,10.2666667 53.06695,10.3190519 53.0967,10.3482074 C53.1272,10.3785481 53.1817,10.4145778 53.2697,10.4145778",
                                          id: "Fill-52",
                                          fill: d,
                                          mask: "url(#mask-21)"
                                        }),
                                        Uo("path", {
                                          d:
                                            "M55.15935,13.1527822 C55.3896,13.3137304 55.7216,13.3952711 56.1461,13.3952711 L56.6991,13.3952711 C56.9451,13.3952711 57.12785,13.4412563 57.24285,13.5318044 C57.3526,13.6180859 57.40585,13.7439526 57.40585,13.9165156 L57.40585,14.1137304 C57.40585,14.3467378 57.34735,14.4984415 57.23135,14.5638637 C57.0951,14.6409007 56.87735,14.6800119 56.5836,14.6800119 L54.82535,14.6800119 L54.82535,15.1588267 L54.9261,15.1761304 C55.0501,15.1972267 55.28985,15.2164267 55.65985,15.2346785 C56.0211,15.2522193 56.3111,15.2614637 56.52235,15.2614637 C56.99485,15.2614637 57.36685,15.1813452 57.6286,15.0234785 C57.90835,14.8549452 58.05035,14.5565156 58.05035,14.1362489 L58.05035,13.8785896 C58.05035,13.5313304 57.93135,13.2580267 57.6966,13.0662637 C57.46735,12.8790044 57.15235,12.7837156 56.76035,12.7837156 L56.19985,12.7837156 C55.9266,12.7837156 55.7246,12.7474489 55.59885,12.6751526 C55.49285,12.6147081 55.43935,12.4812563 55.43935,12.2781156 L55.43935,12.1034193 C55.43935,11.8753896 55.4986,11.717997 55.6161,11.6357452 C55.74485,11.54496 55.95435,11.4989748 56.2381,11.4989748 L57.8966,11.4989748 L57.8966,11.0111526 L57.7936,10.9952711 C57.6266,10.9696711 57.3876,10.9473896 57.08285,10.9293748 C56.77935,10.9118341 56.5161,10.9028267 56.29985,10.9028267 C55.78935,10.9028267 55.42085,10.9971674 55.17335,11.1910637 C54.92235,11.3880415 54.79485,11.6950044 54.79485,12.1034193 L54.79485,12.3082193 C54.79485,12.6998044 54.9176,12.9840119 55.15935,13.1527822",
                                          fill: d,
                                          mask: "url(#mask-21)"
                                        }),
                                        Uo("path", {
                                          d:
                                            "M61.668375,12.3615763 L61.668375,15.2159763 L62.358875,15.2159763 L62.358875,12.3236504 C62.358875,11.9138133 62.238125,11.5672652 62.000375,11.2939615 C61.756875,11.0140207 61.409875,10.8722726 60.968875,10.8722726 C60.683875,10.8722726 60.394125,10.9246578 60.107625,11.0277689 C59.902625,11.1017244 59.709875,11.1910874 59.532625,11.2944356 L59.532625,9.1961837 L58.841875,9.1961837 L58.841875,15.2159763 L59.532625,15.2159763 L59.532625,11.8829985 C59.771625,11.7571319 59.985125,11.6630281 60.167875,11.6028207 C60.361625,11.5388207 60.590125,11.5068207 60.846125,11.5068207 C61.098375,11.5068207 61.293125,11.5843319 61.441625,11.7440948 C61.594125,11.9085985 61.668375,12.1105541 61.668375,12.3615763",
                                          fill: d,
                                          mask: "url(#mask-21)"
                                        }),
                                        Uo("path", {
                                          d:
                                            "M41.2896,19.6944356 C41.2896,20.3666726 41.2346,20.874643 41.1261,21.2031763 C41.0241,21.5127467 40.8696,21.7208652 40.66735,21.821843 C40.45385,21.9285096 40.13585,21.9825541 39.72235,21.9825541 C39.2936,21.9825541 38.96785,21.9285096 38.7541,21.821843 C38.5526,21.7211022 38.40235,21.515117 38.3076,21.2093393 C38.20635,20.8829393 38.1551,20.3730726 38.1551,19.6944356 C38.1551,19.0020504 38.2151,18.4784356 38.33335,18.1380504 C38.44535,17.815443 38.6046,17.6018726 38.80685,17.5032652 C39.0211,17.3982578 39.3291,17.3453985 39.72235,17.3453985 C40.13585,17.3453985 40.4541,17.3982578 40.6686,17.5032652 C40.86985,17.6013985 41.02385,17.8116504 41.12585,18.1280948 C41.23435,18.4646874 41.2896,18.9916207 41.2896,19.6944356 M41.01035,16.9474133 C40.6946,16.7957096 40.26135,16.7184356 39.72235,16.7184356 C39.19885,16.7184356 38.77185,16.7957096 38.45385,16.9471763 C38.1241,17.1045689 37.87285,17.4070281 37.70635,17.8460207 C37.5461,18.2684207 37.46485,18.8904059 37.46485,19.6944356 C37.46485,20.4982281 37.54485,21.1149985 37.7026,21.527917 C37.86685,21.9579022 38.11535,22.2501689 38.44085,22.3971319 C38.75285,22.5379319 39.18385,22.609517 39.72235,22.609517 C40.2606,22.609517 40.6916,22.5379319 41.00385,22.3971319 C41.3296,22.2499319 41.57785,21.9576652 41.7421,21.527917 C41.89985,21.1149985 41.97985,20.4982281 41.97985,19.6944356 C41.97985,18.8863763 41.90135,18.263443 41.74635,17.8429393 C41.5851,17.406317 41.3376,17.1048059 41.01035,16.9474133",
                                          fill: d,
                                          mask: "url(#mask-21)"
                                        }),
                                        Uo("path", {
                                          d:
                                            "M45.212575,18.2203733 C44.927325,18.2203733 44.638825,18.2729956 44.354825,18.3761067 C44.133575,18.4564622 43.924825,18.5553067 43.731825,18.6705067 L43.634825,18.28864 L43.085575,18.28864 L43.085575,22.564077 L43.776325,22.564077 L43.776325,19.2313363 C44.015325,19.1049956 44.228825,19.0108919 44.411825,18.9509215 C44.605575,18.8871585 44.833825,18.8549215 45.089825,18.8549215 C45.342325,18.8549215 45.536825,18.9324326 45.685575,19.0924326 C45.838075,19.2566993 45.912325,19.4610252 45.912325,19.7170252 L45.912325,22.564077 L46.602825,22.564077 L46.602825,19.6717511 C46.602825,19.2723437 46.483825,18.928877 46.249075,18.6508326 C46.007825,18.365203 45.658825,18.2203733 45.212575,18.2203733",
                                          fill: d,
                                          mask: "url(#mask-21)"
                                        }),
                                        Uo("path", {
                                          d:
                                            "M50.09245,16.7641126 L49.79295,16.7641126 C49.64845,16.7641126 49.55495,16.8544237 49.55495,16.9942756 L49.55495,17.5325867 C49.55495,17.6143644 49.5897,17.6665126 49.61895,17.6959052 L49.61995,17.6968533 C49.65045,17.726957 49.70545,17.7627496 49.79295,17.7627496 L50.09245,17.7627496 C50.19495,17.7627496 50.31495,17.7023052 50.31495,17.5325867 L50.31495,16.9942756 C50.31495,16.824557 50.19495,16.7641126 50.09245,16.7641126",
                                          id: "Fill-57",
                                          fill: d,
                                          mask: "url(#mask-21)"
                                        }),
                                        Uo("polygon", {
                                          fill: d,
                                          mask: "url(#mask-21)",
                                          points:
                                            "49.59325 22.5640296 50.284 22.5640296 50.284 18.2885926 49.59325 18.2885926"
                                        }),
                                        Uo("polygon", {
                                          fill: d,
                                          mask: "url(#mask-21)",
                                          points:
                                            "47.71725 22.5640296 48.408 22.5640296 48.408 16.544 47.71725 16.544"
                                        }),
                                        Uo("path", {
                                          d:
                                            "M53.753575,18.2203733 C53.468325,18.2203733 53.179825,18.2729956 52.895825,18.3761067 C52.674575,18.4564622 52.465825,18.5553067 52.272825,18.6705067 L52.175825,18.28864 L51.626575,18.28864 L51.626575,22.564077 L52.317325,22.564077 L52.317325,19.2313363 C52.556325,19.1052326 52.769575,19.0111289 52.952575,18.9509215 C53.146325,18.8871585 53.374575,18.8549215 53.630825,18.8549215 C53.883075,18.8549215 54.077575,18.9324326 54.226325,19.0924326 C54.378825,19.2566993 54.453075,19.4610252 54.453075,19.7170252 L54.453075,22.564077 L55.143575,22.564077 L55.143575,19.6717511 C55.143575,19.2723437 55.024575,18.928877 54.790075,18.6508326 C54.548825,18.365203 54.200075,18.2203733 53.753575,18.2203733",
                                          fill: d,
                                          mask: "url(#mask-21)"
                                        }),
                                        Uo("path", {
                                          d:
                                            "M58.651775,19.6791704 C58.651775,19.8792296 58.607525,20.0148148 58.520275,20.0821333 C58.425525,20.1556148 58.260275,20.1925926 58.029275,20.1925926 L56.532025,20.1925926 C56.538275,19.8330074 56.573525,19.5523556 56.637025,19.357037 C56.702275,19.1572148 56.806525,19.0218667 56.956025,18.9426963 C57.114025,18.8590222 57.351025,18.8168296 57.660775,18.8168296 C57.925525,18.8168296 58.133025,18.8436148 58.276775,18.896237 C58.406775,18.9438815 58.498025,19.0230519 58.556275,19.1382519 C58.619775,19.2629333 58.651775,19.4452148 58.651775,19.6791704 M59.103275,22.5252741 L59.211525,22.5134222 L59.211525,22.0282074 L57.737525,22.0282074 C57.401775,22.0282074 57.146525,21.9836444 56.979025,21.8952296 C56.818775,21.8106074 56.710775,21.6785778 56.648275,21.4913185 C56.588025,21.3095111 56.552275,21.0558815 56.541775,20.7361185 L58.060275,20.7361185 C58.451025,20.7361185 58.757525,20.6519704 58.970775,20.4858074 C59.191775,20.3146667 59.303775,20.0430222 59.303775,19.6791704 C59.303775,19.3285926 59.244775,19.0446222 59.128275,18.8360296 C59.007025,18.6196148 58.820275,18.4636444 58.572775,18.3723852 C58.339025,18.2868148 58.032275,18.2432 57.660775,18.2432 C57.217775,18.2432 56.861275,18.3090963 56.601275,18.4387556 C56.330525,18.5741037 56.133775,18.8064 56.016775,19.1294815 C55.905275,19.4359704 55.848525,19.868563 55.848525,20.4149333 C55.848525,20.9563259 55.902275,21.3867852 56.008275,21.6949333 C56.119775,22.0203852 56.310525,22.2578963 56.574525,22.4008296 C56.830275,22.5392593 57.188025,22.6094222 57.637525,22.6094222 C58.101025,22.6094222 58.594025,22.5809778 59.103275,22.5252741",
                                          fill: d,
                                          mask: "url(#mask-21)"
                                        }),
                                        Uo("path", {
                                          d:
                                            "M38.2935,26.6307793 L38.2935,24.7392237 L39.707,24.7392237 C40.294,24.7392237 40.5675,25.0253274 40.5675,25.6392533 C40.5675,25.94432 40.489,26.1901274 40.334,26.3700385 C40.183,26.545683 39.993,26.6307793 39.753,26.6307793 L38.2935,26.6307793 Z M38.2935,27.2195793 L39.7685,27.2195793 C40.061,27.2195793 40.29575,27.3034904 40.4865,27.4755793 C40.6755,27.646483 40.76725,27.87712 40.76725,28.1805274 C40.76725,28.6060089 40.68275,28.8994607 40.51625,29.0528237 C40.349,29.2071348 40.09725,29.285357 39.7685,29.285357 L38.2935,29.285357 L38.2935,27.2195793 Z M40.63425,26.8919941 C40.76925,26.8064237 40.88875,26.6893274 40.99175,26.5416533 C41.158,26.3034311 41.2425,26.0023941 41.2425,25.6470756 C41.2425,24.6429867 40.71425,24.1124978 39.71475,24.1124978 L37.603,24.1124978 L37.603,29.91232 L39.77625,29.91232 C40.313,29.91232 40.7285,29.7857422 41.0115,29.5361422 C41.29725,29.2844089 41.44225,28.8513422 41.44225,28.2487941 C41.44225,27.8166756 41.327,27.4762904 41.0995,27.2380681 C40.95575,27.0873126 40.80025,26.9714015 40.63425,26.8919941 L40.63425,26.8919941 Z",
                                          fill: d,
                                          mask: "url(#mask-21)"
                                        }),
                                        Uo("path", {
                                          d:
                                            "M44.049475,29.2935111 C43.567225,29.4170074 43.274725,29.4084741 43.036725,29.2276148 C42.912725,29.1337481 42.852725,28.9801481 42.852725,28.7568593 L42.852725,28.5674667 C42.852725,28.3636148 42.911725,28.2064593 43.033475,28.0862815 C43.152975,27.968 43.349475,27.9035259 43.617975,27.8945185 L44.919225,27.8464 L44.919225,29.017837 L44.645225,29.1145481 C44.471975,29.1759407 44.271725,29.2361481 44.049475,29.2935111 M44.081725,25.5687111 C43.617225,25.5687111 43.128225,25.6023704 42.628475,25.6685037 L42.522975,25.6827259 L42.522975,26.1653333 L43.927975,26.1653333 C44.313225,26.1653333 44.577975,26.2281481 44.714975,26.3528296 C44.850475,26.4758519 44.919225,26.6699852 44.919225,26.9288296 L44.919225,27.3739852 L43.544225,27.3739852 C43.109475,27.3739852 42.767475,27.4816 42.527475,27.6935111 C42.284975,27.9073185 42.161975,28.1988741 42.161975,28.5596444 L42.161975,28.8329481 C42.161975,29.1771259 42.271225,29.4537481 42.486475,29.6549926 C42.701475,29.856 42.982475,29.9579259 43.321475,29.9579259 C43.552225,29.9579259 43.801975,29.9190519 44.063975,29.8424889 C44.318475,29.7682963 44.550975,29.6860444 44.754475,29.5985778 C44.846475,29.5589926 44.915225,29.5281778 44.967475,29.504237 L45.047225,29.9121778 L45.609475,29.9121778 L45.609475,26.9063111 C45.609475,26.4602074 45.482725,26.1214815 45.232725,25.8998519 C44.984975,25.6801185 44.597725,25.5687111 44.081725,25.5687111",
                                          fill: d,
                                          mask: "url(#mask-21)"
                                        }),
                                        Uo("path", {
                                          d:
                                            "M48.907625,25.5687585 C48.622625,25.5687585 48.334125,25.6213807 48.049875,25.7244919 C47.828875,25.8046104 47.620125,25.9034548 47.426875,26.0191289 L47.329875,25.6370252 L46.780625,25.6370252 L46.780625,29.9122252 L47.471375,29.9122252 L47.471375,26.5797215 C47.709125,26.4538548 47.922875,26.3597511 48.107125,26.2990696 C48.300125,26.2355437 48.528125,26.2033067 48.784875,26.2033067 C49.037125,26.2033067 49.231875,26.2808178 49.380625,26.4408178 C49.533125,26.6046104 49.607125,26.8089363 49.607125,27.0654104 L49.607125,29.9122252 L50.297625,29.9122252 L50.297625,27.0198993 C50.297625,26.6204919 50.178625,26.2772622 49.944375,25.9989807 C49.703375,25.7135881 49.354375,25.5687585 48.907625,25.5687585",
                                          fill: d,
                                          mask: "url(#mask-21)"
                                        }),
                                        Uo("polygon", {
                                          fill: d,
                                          mask: "url(#mask-21)",
                                          points:
                                            "55.21725 29.9121778 55.908 29.9121778 55.908 25.6369778 55.21725 25.6369778"
                                        }),
                                        Uo("path", {
                                          d:
                                            "M55.716225,24.1124978 L55.416725,24.1124978 C55.272475,24.1124978 55.178975,24.2028089 55.178975,24.3424237 L55.178975,24.8809719 C55.178975,24.9632237 55.213975,25.0153719 55.243475,25.0445274 C55.273975,25.0751052 55.328475,25.1108978 55.416725,25.1108978 L55.716225,25.1108978 C55.818725,25.1108978 55.938725,25.0506904 55.938725,24.8809719 L55.938725,24.3424237 C55.938725,24.1727052 55.818725,24.1124978 55.716225,24.1124978",
                                          fill: d,
                                          mask: "url(#mask-21)"
                                        }),
                                        Uo("path", {
                                          d:
                                            "M59.166675,25.5687585 C58.881425,25.5687585 58.592925,25.6213807 58.308925,25.7244919 C58.087675,25.8048474 57.878675,25.9036919 57.685675,26.0191289 L57.588675,25.6370252 L57.039675,25.6370252 L57.039675,29.9122252 L57.730425,29.9122252 L57.730425,26.5797215 C57.967675,26.4540919 58.181175,26.3599881 58.365675,26.2990696 C58.559175,26.2355437 58.787175,26.2033067 59.043925,26.2033067 C59.296175,26.2033067 59.490675,26.2808178 59.639425,26.4408178 C59.791925,26.6046104 59.865925,26.8089363 59.865925,27.0654104 L59.865925,29.9122252 L60.556425,29.9122252 L60.556425,27.0198993 C60.556425,26.6204919 60.437425,26.2767881 60.203175,25.9989807 C59.962175,25.7135881 59.613175,25.5687585 59.166675,25.5687585",
                                          fill: d,
                                          mask: "url(#mask-21)"
                                        }),
                                        Uo("path", {
                                          d:
                                            "M62.08805,30.3800889 C62.08805,30.1537185 62.16505,29.9894519 62.32305,29.8778074 C62.49205,29.7581037 62.6943,29.7000296 62.94105,29.7000296 L64.07005,29.7000296 C64.4113,29.7000296 64.65005,29.7550222 64.7798,29.8640593 C64.90705,29.9707259 64.9688,30.1274074 64.9688,30.342163 L64.9688,30.5166222 C64.9688,30.7420444 64.89005,30.9063111 64.7278,31.0179556 C64.55505,31.1367111 64.3028,31.1969185 63.97805,31.1969185 L62.98705,31.1969185 C62.6868,31.1969185 62.4558,31.1454815 62.30055,31.0433185 C62.1573,30.9489778 62.08805,30.7941926 62.08805,30.5697185 L62.08805,30.3800889 Z M64.54655,27.1184593 C64.54655,27.6655407 64.2463,27.9201185 63.60155,27.9201185 L63.13305,27.9201185 C62.5773,27.9201185 62.31855,27.6463407 62.31855,27.0577778 C62.31855,26.7550815 62.3953,26.5367704 62.5463,26.4087704 C62.7018,26.2772148 62.93555,26.2106074 63.24055,26.2106074 L63.6783,26.2106074 C64.27055,26.2106074 64.54655,26.4990815 64.54655,27.1184593 L64.54655,27.1184593 Z M65.62855,25.6293926 L63.3248,25.6293926 C61.9478,25.6293926 61.6588,26.3978667 61.6588,27.0426074 C61.6588,27.3180444 61.72155,27.5721481 61.8453,27.7980444 C61.9318,27.9552 62.05855,28.0865185 62.22355,28.1912889 C61.8153,28.3617185 61.72005,28.6679704 61.72005,28.9161481 C61.72005,29.0702222 61.76205,29.2079407 61.8443,29.3257481 C61.88505,29.3838222 61.9348,29.4359704 61.9928,29.4814815 C61.85355,29.561363 61.73455,29.6623407 61.6378,29.7825185 C61.4938,29.9614815 61.42055,30.1831111 61.42055,30.4407704 L61.42055,30.6379852 C61.42055,31.0037333 61.56005,31.2874667 61.8348,31.481837 C62.0983,31.6683852 62.45505,31.762963 62.89505,31.762963 L64.01605,31.762963 C64.52405,31.762963 64.92255,31.6532148 65.20005,31.4368 C65.4843,31.2146963 65.62855,30.8977778 65.62855,30.4938667 L65.62855,30.3118222 C65.62855,29.9185778 65.50005,29.6168296 65.24705,29.4153481 C64.99955,29.2183704 64.6218,29.1185778 64.1238,29.1185778 L62.6953,29.1185778 C62.59755,29.1185778 62.51655,29.0958222 62.4473,29.049363 C62.41205,29.0251852 62.36455,28.9796741 62.36455,28.8632889 C62.36455,28.6926222 62.4413,28.6312296 62.49905,28.5997037 C62.61005,28.5394963 62.78455,28.5089185 63.01805,28.5089185 L63.64755,28.5089185 C64.1883,28.5089185 64.58855,28.3761778 64.8368,28.1137778 C65.08205,27.8554074 65.2063,27.5358815 65.2063,27.1642074 C65.2063,26.918163 65.1723,26.7121778 65.1053,26.5521778 C65.03605,26.3872 64.95555,26.2665481 64.85905,26.1833481 C64.8503,26.1755259 64.8413,26.1677037 64.83205,26.1601185 L65.62855,26.1124741 L65.62855,25.6293926 Z",
                                          fill: d,
                                          mask: "url(#mask-21)"
                                        })
                                      )
                                    )
                                  )
                                )
                              );
                            }
                          })
                        );
                      })({ logoColor: n.logoColor, optional: n.optional });
                    }
                  })
                : null),
            (n[Ke.BLIK] = null),
            (n[Ke.TRUSTLY] = null),
            (n[Ke.ZIMPLER] = null),
            (n[Ke.WECHATPAY] = null),
            (n[Ke.OXXO] = null),
            (n[Ke.BOLETO] = null),
            (n[Ke.MAXIMA] = null),
            n
          );
        });
      }
      function Ia(n, e) {
        var t = e.layout,
          r = e.platform,
          o = e.fundingSource,
          i = e.fundingEligibility,
          a = e.components,
          u = e.onShippingChange;
        if (!i[n] || !i[n].eligible) return !1;
        var c = Sa()[n];
        return !(
          !c ||
          (c.eligible &&
            !c.eligible({
              components: a,
              fundingSource: o,
              fundingEligibility: i,
              layout: t
            })) ||
          (t && c.layouts && -1 === c.layouts.indexOf(t)) ||
          (c.platforms && -1 === c.platforms.indexOf(r)) ||
          (!1 === c.shippingChange && u)
        );
      }
      var _a =
          (((wa = {})[sa.HORIZONTAL] = ua.SMALL),
          (wa[sa.VERTICAL] = ua.MEDIUM),
          wa),
        xa =
          (((va = {})[sa.HORIZONTAL] = ua.HUGE),
          (va[sa.VERTICAL] = ua.HUGE),
          va),
        Pa = { TAGLINE: 50, VERTICAL_MARGIN: 30 },
        Ma =
          (((Ca = {})[ua.TINY] = {
            defaultWidth: 75,
            defaultHeight: 25,
            minWidth: 75,
            maxWidth: 150,
            minHeight: 25,
            maxHeight: 30
          }),
          (Ca[ua.SMALL] = {
            defaultWidth: 150,
            defaultHeight: 25,
            minWidth: 150,
            maxWidth: 200,
            minHeight: 25,
            maxHeight: 55
          }),
          (Ca[ua.MEDIUM] = {
            defaultWidth: 250,
            defaultHeight: 35,
            minWidth: 200,
            maxWidth: 300,
            minHeight: 35,
            maxHeight: 55
          }),
          (Ca[ua.LARGE] = {
            defaultWidth: 350,
            defaultHeight: 45,
            minWidth: 300,
            maxWidth: 500,
            minHeight: 30,
            maxHeight: 55
          }),
          (Ca[ua.HUGE] = {
            defaultWidth: 500,
            defaultHeight: 55,
            minWidth: 500,
            maxWidth: 750,
            minHeight: 40,
            maxHeight: 55
          }),
          Ca),
        Fa = {
          LOCALE: { country: Ie.US, lang: _e.EN },
          COMMIT: !0,
          VAULT: !1,
          INTENT: Ge.CAPTURE,
          ENV: He.PRODUCTION,
          PLATFORM: qe.DESKTOP
        };
      function Da(n, e) {
        if (!e) throw new Error("Expected props.style to be set");
        var t = n.fundingSource,
          r = Sa(),
          o = r[t || Ke.PAYPAL] || r[Ke.PAYPAL];
        if (!o)
          throw new Error("Expected " + (t || Ke.PAYPAL) + " to be eligible");
        var i = e.label,
          a = e.layout,
          u = void 0 === a ? (t ? sa.HORIZONTAL : o.layouts[0]) : a,
          c = e.color,
          s = void 0 === c ? o.colors[0] : c,
          l = e.shape,
          d = void 0 === l ? o.shapes[0] : l,
          f = e.tagline,
          p = void 0 === f ? u === sa.HORIZONTAL && !t : f,
          h = e.height,
          E = e.period;
        if (-1 === Cn(sa).indexOf(u)) throw new Error("Invalid layout: " + u);
        if (i && -1 === Cn(oa).indexOf(i))
          throw new Error("Invalid label: " + i);
        if (s && -1 === o.colors.indexOf(s))
          throw new Error(
            "Unexpected style.color for " +
              Ke.PAYPAL +
              " button: " +
              s +
              ", expected " +
              o.colors.join(", ")
          );
        if (d && -1 === o.shapes.indexOf(d))
          throw new Error(
            "Unexpected style.shape for " +
              Ke.PAYPAL +
              " button: " +
              d +
              ", expected " +
              o.shapes.join(", ")
          );
        if (void 0 !== h) {
          if ("number" != typeof h)
            throw new TypeError(
              "Expected style.height to be a number, got: " + h
            );
          var y = [Ma[ua.SMALL].minHeight, Ma[ua.HUGE].maxHeight],
            m = y[0],
            g = y[1];
          if (h < m || h > g)
            throw new Error(
              "Expected style.height to be between " +
                m +
                "px and " +
                g +
                "px - got " +
                h +
                "px"
            );
        }
        if (u === sa.VERTICAL && p)
          throw new Error(
            "style.tagline is not allowed for " + sa.VERTICAL + " layout"
          );
        return {
          label: i,
          layout: u,
          color: s,
          shape: d,
          tagline: p,
          height: h,
          period: E
        };
      }
      var ka = Cn(Ie),
        Ha = Cn(Ke),
        Ua = Cn(He),
        Ba = Cn(qe),
        ja = {
          VISIBLE: "visible",
          INVISIBLE: "invisible",
          COMPONENT_FRAME: "component-frame",
          PRERENDER_FRAME: "prerender-frame",
          SMART_MENU: "smart-menu"
        },
        Wa = { SMART_MENU: "smart-menu" };
      function Za(n) {
        var e = n.uid,
          t = n.props,
          r = n.tag,
          o = n.context,
          i = n.frame,
          a = n.prerenderFrame,
          u = n.doc,
          c = n.container,
          s = n.event;
        if (i && a) {
          if (c && "button" === c.tagName.toLowerCase())
            throw new Error(
              "Do not render the PayPal button into a button element"
            );
          i.classList.add(ja.COMPONENT_FRAME),
            a.classList.add(ja.PRERENDER_FRAME),
            i.classList.add(ja.INVISIBLE),
            a.classList.add(ja.VISIBLE),
            s.on(ro.RENDERED, function() {
              a.classList.remove(ja.VISIBLE),
                a.classList.add(ja.INVISIBLE),
                i.classList.remove(ja.INVISIBLE),
                i.classList.add(ja.VISIBLE),
                setTimeout(function() {
                  me(a);
                }, 1e3);
            });
          var l = t.style,
            d = l.label,
            f = l.layout,
            p = l.height,
            h = _a[f],
            E = xa[f];
          if (p) {
            var y = Cn(ua).filter(function(n) {
              return Ma[n] && p && Ma[n].minHeight <= p && Ma[n].maxHeight >= p;
            });
            y.sort(function(n, e) {
              return Ma[n].defaultWidth - Ma[e].defaultWidth;
            }),
              (h = y[0]);
          }
          var m = Uo(
            "div",
            {
              id: e,
              onRender: function(n) {
                s.on(ro.RESIZE, function(e) {
                  var t = e.width,
                    r = e.height;
                  "number" == typeof t && (n.style.width = Ae(t)),
                    "number" == typeof r && (n.style.height = Ae(r));
                });
              },
              class:
                r +
                " " +
                r +
                "-context-" +
                o +
                " " +
                r +
                "-label-" +
                d +
                " " +
                r +
                "-layout-" +
                f
            },
            Uo(
              "style",
              null,
              "\n                    #" +
                e +
                " {\n                        position: relative;\n                        display: inline-block;\n                        width: 100%;\n                        min-height: " +
                Ma[h].minHeight +
                "px;\n                        min-width: " +
                Ma[h].minWidth +
                "px;\n                        max-width: " +
                Ma[E].maxWidth +
                "px;\n                        font-size: 0;\n                    }\n\n                    #" +
                e +
                " > iframe {\n                        position: absolute;\n                        top: 0;\n                        left: 0;\n                        width: 100%;\n                        height: 100%;\n                    }\n\n                    #" +
                e +
                " > iframe." +
                ja.COMPONENT_FRAME +
                " {\n                        z-index: 100;\n                    }\n\n                    #" +
                e +
                " > iframe." +
                ja.PRERENDER_FRAME +
                " {\n                        transition: opacity .2s linear;\n                        z-index: 200;\n                    }\n\n                    #" +
                e +
                " > iframe." +
                ja.VISIBLE +
                " {\n                        opacity: 1;\n                    }\n\n                    #" +
                e +
                " > iframe." +
                ja.INVISIBLE +
                " {\n                        opacity: 0;\n                        pointer-events: none;\n                    }\n\n                    #" +
                e +
                " > ." +
                ja.SMART_MENU +
                " {\n                        position: absolute;\n                        z-index: 300;\n                        top: 0;\n                        left: 0;\n                        width: 100%;\n                    }\n                "
            ),
            Uo("node", { el: i }),
            Uo("node", { el: a }),
            Uo("div", { id: Wa.SMART_MENU, class: ja.SMART_MENU })
          ).render(qo({ doc: u }));
          return (
            s.on(ro.RENDERED, function() {
              setTimeout(function() {
                m.style.transition = "all 0.2s ease-in-out";
              }, 1e3);
            }),
            m
          );
        }
      }
      var Ga =
          "\n    html, body {\n        padding: 0;\n        margin: 0;\n        width: 100%;\n        overflow: hidden;\n        text-align: center;\n    }\n\n    body {\n        display: inline-block;\n        vertical-align: top;\n        border-collapse: collapse;\n    }\n\n    * {\n        touch-callout: none;\n        user-select: none;\n        cursor: default;\n        box-sizing: border-box;\n    }\n\n    ." +
          pa.HIDDEN +
          " {\n        position: absolute;\n        visibility: hidden;\n    }\n",
        qa =
          "\n\n    ." +
          pa.CONTAINER +
          ' {\n        display: block;\n        white-space: nowrap;\n        margin: 0;\n        background: 0;\n        border: 0;\n        font-family: "Helvetica Neue", Helvetica, Arial, sans-serif;\n        text-transform: none;\n        font-weight: 500;\n        font-smoothing: antialiased;\n        z-index: 0;\n        font-size: 0;\n        width: 100%;\n        box-sizing: border-box;\n    }\n\n    .' +
          pa.BUTTON +
          " {\n        border: 1px solid transparent;\n        border-radius: 0 3px 3px 0;\n        position: relative;\n        width: 100%;\n        box-sizing: border-box;\n        border: none;\n        vertical-align: top;\n        cursor: pointer;\n        overflow: hidden;\n    }\n\n    ." +
          pa.BUTTON +
          " * {\n        cursor: pointer;\n    }\n\n    ." +
          pa.CONTAINER +
          "." +
          pa.ENV +
          "-" +
          He.TEST +
          " ." +
          pa.TEXT +
          " {\n        font-family: Arial !important;\n        background: rgba(0, 0, 0, 0.5) !important;\n        color: transparent  !important;\n        text-shadow: none  !important;\n    }\n\n    ." +
          pa.CARD +
          " {\n        cursor: pointer;\n    }\n\n    ." +
          ai.LOGO +
          " {\n        padding: 0;\n        display: inline-block;\n        background: none;\n        border: none;\n        width: auto;\n    }\n\n    ." +
          pa.TEXT +
          ", ." +
          pa.SPACE +
          " {\n        display: inline-block;\n        white-space: pre;\n    }\n\n    ." +
          pa.BUTTON +
          " > ." +
          pa.BUTTON_LABEL +
          " {\n        position: relative;\n        top: 50%;\n        transform: translateY(-50%);\n    }\n\n    ." +
          pa.BUTTON +
          " > ." +
          pa.BUTTON_LABEL +
          " > * {\n        vertical-align: top;\n        height: 100%;\n        text-align: left;\n    }\n    \n    ." +
          pa.TAGLINE +
          " {\n        max-width: 100%;\n        font-weight: normal;\n        display: block;\n        text-align: center;\n        width: auto;\n    }\n\n    ." +
          pa.BUTTON +
          " ." +
          pa.SPINNER +
          " {\n        position: absolute;\n        height: 40px;\n        width: 40px;\n        top: 50%;\n        left: 50%;\n        transform: translateX(-50%) translateY(-50%);\n        box-sizing: border-box;\n        border: 3px solid rgba(0, 0, 0, .2);\n        border-top-color: rgba(33, 128, 192, 0.8);\n        border-radius: 100%;\n        animation: " +
          pa.SPINNER +
          "-rotation .7s infinite linear;\n    }\n\n    @keyframes " +
          pa.SPINNER +
          "-rotation {\n        from {\n            transform: translateX(-50%) translateY(-50%) rotate(0deg);\n        }\n        to {\n            transform: translateX(-50%) translateY(-50%) rotate(359deg);\n        }\n    }\n\n    ." +
          pa.BUTTON +
          " ." +
          pa.SPINNER +
          " {\n        display: none !important;\n    }\n\n    ." +
          pa.BUTTON +
          "." +
          pa.LOADING +
          " * {\n        display: none !important;\n    }\n\n    ." +
          pa.BUTTON +
          "." +
          pa.LOADING +
          " ." +
          pa.SPINNER +
          " {\n        display: block !important;\n    }\n\n    ." +
          pa.CONTAINER +
          " ." +
          pa.VAULT_HEADER +
          " {\n        margin-top: 10px;\n    }\n",
        Ka = 2.8,
        za =
          "\n\n\n    ." +
          pa.BUTTON +
          "." +
          pa.TEXT_COLOR +
          "-" +
          aa.BLACK +
          " {\n        color: #2C2E2F;\n    }\n\n    ." +
          pa.BUTTON +
          "." +
          pa.TEXT_COLOR +
          "-" +
          aa.WHITE +
          " {\n        color: #fff;\n    }\n\n\n    ." +
          pa.BUTTON +
          "." +
          pa.COLOR +
          "-" +
          ia.GOLD +
          " {\n        background: #ffc439;\n    }\n\n    ." +
          pa.BUTTON +
          "." +
          pa.COLOR +
          "-" +
          ia.GOLD +
          ":hover {\n        filter: brightness(0.95);\n    }\n\n    ." +
          pa.BUTTON +
          "." +
          pa.COLOR +
          "-" +
          ia.GOLD +
          ":focus {\n        outline: none;\n        box-shadow: 0px 0px 1px 3px #0c67ff inset;\n    }\n\n\n\n\n    ." +
          pa.BUTTON +
          "." +
          pa.COLOR +
          "-" +
          ia.BLUE +
          " {\n        background: #009cde;\n    }\n\n    ." +
          pa.BUTTON +
          "." +
          pa.COLOR +
          "-" +
          ia.BLUE +
          ":hover {\n        filter: brightness(0.95);\n    }\n\n    ." +
          pa.BUTTON +
          "." +
          pa.COLOR +
          "-" +
          ia.BLUE +
          ":focus {\n        outline: none;\n        box-shadow: 0px 0px 1px 3px #0c67ff inset;\n    }\n\n\n\n    ." +
          pa.BUTTON +
          "." +
          pa.COLOR +
          "-" +
          ia.SILVER +
          " {\n        background: #eee;\n    }\n\n    ." +
          pa.BUTTON +
          "." +
          pa.COLOR +
          "-" +
          ia.SILVER +
          ":hover {\n        filter: brightness(0.95);\n    }\n\n    ." +
          pa.BUTTON +
          "." +
          pa.COLOR +
          "-" +
          ia.SILVER +
          ":focus {\n        outline: none;\n        box-shadow: 0px 0px 1px 3px #0c67ff inset;\n    }\n\n\n\n    ." +
          pa.BUTTON +
          "." +
          pa.COLOR +
          "-" +
          ia.DARKBLUE +
          " {\n        background: #003087;\n    }\n\n    ." +
          pa.BUTTON +
          "." +
          pa.COLOR +
          "-" +
          ia.DARKBLUE +
          ":hover {\n        filter: brightness(1.2);\n    }\n\n    ." +
          pa.BUTTON +
          "." +
          pa.COLOR +
          "-" +
          ia.DARKBLUE +
          ":focus {\n        outline: none;\n        box-shadow: 0px 0px 1px 3px #0c67ff inset;\n    }\n\n\n\n    ." +
          pa.BUTTON +
          "." +
          pa.COLOR +
          "-" +
          ia.BLACK +
          " {\n        background: #2C2E2F;\n    }\n\n    ." +
          pa.BUTTON +
          "." +
          pa.COLOR +
          "-" +
          ia.BLACK +
          ":hover {\n        filter: brightness(1.2);\n    }\n\n    ." +
          pa.BUTTON +
          "." +
          pa.COLOR +
          "-" +
          ia.BLACK +
          ":focus {\n        outline: none;\n        box-shadow: 0px 0px 1px 3px #0c67ff inset;\n    }\n\n\n\n    ." +
          pa.BUTTON +
          "." +
          pa.COLOR +
          "-" +
          ia.WHITE +
          " {\n        background: #fff;\n        border: 1px solid #2C2E2F;\n    }\n\n    ." +
          pa.BUTTON +
          "." +
          pa.COLOR +
          "-" +
          ia.WHITE +
          ":hover {\n        filter: brightness(0.95);\n    }\n\n    ." +
          pa.BUTTON +
          "." +
          pa.COLOR +
          "-" +
          ia.WHITE +
          ":focus {\n        outline: none;\n        box-shadow: 0px 0px 1px 3px #0c67ff inset;\n    }\n\n\n    ." +
          pa.BUTTON +
          " ." +
          pa.CARD +
          " {\n        position: relative;\n    }\n\n    ." +
          pa.BUTTON +
          " ." +
          pa.CARD +
          "::after {\n        content: '';\n        width: 100%;\n        height: 100%;\n        position: absolute;\n        top: 0;\n        left: 0;\n    }\n\n    ." +
          pa.BUTTON +
          " ." +
          pa.CARD +
          ":hover {\n        filter: brightness(1.2);\n    }\n\n    ." +
          pa.BUTTON +
          " ." +
          pa.CARD +
          ":focus {\n        outline: none;\n    }\n\n    ." +
          pa.BUTTON +
          " ." +
          pa.CARD +
          ":focus::after {\n        box-shadow: 0px 0px 1px 3px #0c67ff inset;\n    }\n";
      function Va(n) {
        var e = n.nonce,
          t = (function(n) {
            return (
              "\n        " +
              Ga +
              "\n        " +
              qa +
              "\n        " +
              za +
              "\n        " +
              Ta +
              "\n        " +
              (function(n) {
                var e = n.height;
                return Object.keys(Ma)
                  .map(function(n) {
                    var t = Ma[n],
                      r = e || t.defaultHeight,
                      o = Math.round(r * Ka * 2);
                    return (
                      "\n\n            @media only screen and (min-width: " +
                      t.minWidth +
                      "px) {\n\n                ." +
                      pa.CONTAINER +
                      " {\n                    min-width: " +
                      t.minWidth +
                      "px;\n                    max-width: " +
                      t.maxWidth +
                      "px;\n                    font-size: " +
                      Tn(Ln(r, 32), 10) +
                      "px;\n                }\n\n                ." +
                      pa.BUTTON +
                      " {\n                    height: " +
                      r +
                      "px;\n                    min-height: " +
                      (e || t.minHeight) +
                      "px;\n                    max-height: " +
                      (e || t.maxHeight) +
                      "px;\n                }\n                \n                ." +
                      pa.BUTTON +
                      " ." +
                      pa.SPINNER +
                      " {\n                    height: " +
                      Ln(r, 50) +
                      "px;\n                    width: " +
                      Ln(r, 50) +
                      "px;\n                }\n\n                ." +
                      pa.BUTTON +
                      " > ." +
                      pa.BUTTON_LABEL +
                      " {\n                    height: " +
                      (Ln(r, 35) + 5) +
                      "px;\n                    max-height: " +
                      Ln(r, 60) +
                      "px;\n                    min-height: " +
                      Ln(r, 40) +
                      "px;\n                }\n\n                ." +
                      pa.BUTTON +
                      "[" +
                      da.FUNDING_SOURCE +
                      "=" +
                      Ke.EPS +
                      "] ." +
                      pa.BUTTON_LABEL +
                      ",\n                ." +
                      pa.BUTTON +
                      "[" +
                      da.FUNDING_SOURCE +
                      "=" +
                      Ke.MYBANK +
                      "] ." +
                      pa.BUTTON_LABEL +
                      " {\n                    height: " +
                      (Ln(r, 50) + 5) +
                      "px;\n                    max-height: " +
                      Ln(r, 70) +
                      "px;\n                    min-height: " +
                      Ln(r, 40) +
                      "px;\n                }\n\n                ." +
                      pa.BUTTON +
                      "." +
                      pa.SHAPE +
                      "-" +
                      ca.RECT +
                      " {\n                    border-radius: 4px;\n                }\n\n                ." +
                      pa.BUTTON +
                      "." +
                      pa.SHAPE +
                      "-" +
                      ca.PILL +
                      " {\n                    border-radius: " +
                      Math.ceil(r / 2) +
                      "px;\n                }\n\n                ." +
                      pa.BUTTON +
                      "." +
                      pa.LAYOUT +
                      "-" +
                      sa.VERTICAL +
                      " {\n                    margin-bottom: " +
                      Ln(r, Pa.VERTICAL_MARGIN) +
                      "px;\n                }\n\n                ." +
                      pa.BUTTON +
                      "." +
                      pa.LAYOUT +
                      "-" +
                      sa.VERTICAL +
                      ":last-of-type {\n                    margin-bottom: 0;\n                }\n                \n                ." +
                      pa.TAGLINE +
                      " ." +
                      pa.TEXT +
                      " {\n                    height: " +
                      Ln(r, Pa.TAGLINE) +
                      "px;\n                    line-height: " +
                      Ln(r, Pa.TAGLINE) +
                      "px;\n                }\n\n                ." +
                      pa.CARD +
                      " {\n                    display: inline-block;\n                    height: 100%;\n                }\n\n                ." +
                      pa.MENU_TOGGLE +
                      " {\n                    position: absolute;\n                    height: 100%;\n                    right: 0;\n                    top: 0;\n                    width: " +
                      r +
                      "px;\n                    border-left: 1px solid rgba(100, 100, 100, 0.1);\n                }\n\n                ." +
                      pa.MENU_TOGGLE +
                      ":hover {\n                    background: rgba(100, 100, 100, 0.1);\n                }\n\n                ." +
                      pa.MENU_TOGGLE +
                      " img {\n                    width: 30%;\n                    position: absolute;\n                    top: 50%;\n                    left: 50%;\n                    transform: translateX(-50%) translateY(-50%);\n                }\n            }\n\n            @media only screen and (min-width: " +
                      t.minWidth +
                      "px) and (max-width: " +
                      o +
                      "px) {\n\n                ." +
                      pa.BUTTON +
                      "." +
                      pa.LAYOUT +
                      "-" +
                      sa.HORIZONTAL +
                      "." +
                      pa.NUMBER +
                      "-" +
                      la.MULTIPLE +
                      "." +
                      pa.NUMBER +
                      "-0 {\n                    width: 100%;\n                    margin-right: 0;\n                }\n\n                ." +
                      pa.BUTTON +
                      "." +
                      pa.LAYOUT +
                      "-" +
                      sa.HORIZONTAL +
                      "." +
                      pa.NUMBER +
                      "-" +
                      la.MULTIPLE +
                      "." +
                      pa.NUMBER +
                      "-1 {\n                    display: none;\n                }\n\n                ." +
                      pa.CONTAINER +
                      "." +
                      pa.LAYOUT +
                      "-" +
                      sa.HORIZONTAL +
                      "." +
                      pa.NUMBER +
                      "-" +
                      la.MULTIPLE +
                      " ." +
                      pa.TAGLINE +
                      " {\n                    display: none;\n                }\n            }\n\n            @media only screen and (min-width: " +
                      Tn(t.minWidth, o) +
                      "px) {\n\n                ." +
                      pa.BUTTON +
                      "." +
                      pa.LAYOUT +
                      "-" +
                      sa.HORIZONTAL +
                      "." +
                      pa.NUMBER +
                      "-" +
                      la.MULTIPLE +
                      "." +
                      pa.NUMBER +
                      "-0 {\n                    display: inline-block;\n                    width: calc(50% - 2px);\n                    margin-right: 4px;\n                }\n\n                ." +
                      pa.BUTTON +
                      "." +
                      pa.LAYOUT +
                      "-" +
                      sa.HORIZONTAL +
                      "." +
                      pa.NUMBER +
                      "-" +
                      la.MULTIPLE +
                      "." +
                      pa.NUMBER +
                      "-1 {\n                    display: inline-block;\n                    width: calc(50% - 2px);\n                }\n\n                ." +
                      pa.CONTAINER +
                      "." +
                      pa.LAYOUT +
                      "-" +
                      sa.HORIZONTAL +
                      "." +
                      pa.NUMBER +
                      "-" +
                      la.MULTIPLE +
                      " ." +
                      pa.TAGLINE +
                      " {\n                    display: block;\n                }\n            }\n        "
                    );
                  })
                  .join("\n");
              })({ height: n.height }) +
              "\n    "
            );
          })({ height: n.style.height });
        return Uo("style", { nonce: e, innerHTML: t });
      }
      function Ya() {
        return Uo("div", { class: pa.SPINNER });
      }
      function Xa(n) {
        var e = (void 0 === n ? {} : n).color,
          t = void 0 === e ? "#848484" : e;
        return Uo(ci, {
          name: "chevron",
          render: function() {
            return Uo(
              "svg",
              {
                width: "256",
                height: "158.18601989746094",
                viewBox: "-1.935 0.221 256 158.186",
                xmlns: "http://www.w3.org/2000/svg"
              },
              Uo("polygon", {
                points:
                  "223.878 0.221 126.065 98.034 28.252 0.221 -1.935 30.407 126.065 158.407 254.065 30.407",
                transform: "matrix(1, 0, 0, 1, 0, 0)",
                fill: t
              })
            );
          }
        });
      }
      function Ja(n) {
        var e,
          t = (void 0 === n ? {} : n).color,
          r = void 0 === t ? aa.BLACK : t;
        return Uo(
          "div",
          h({}, (((e = {})[da.MENU] = !0), e), { class: pa.MENU_TOGGLE }),
          Uo(Xa, { color: r })
        );
      }
      function $a(n) {
        var e,
          t = n.fundingSource,
          r = n.style,
          o = n.multiple,
          i = n.locale,
          a = n.env,
          u = n.fundingEligibility,
          c = n.i,
          s = n.nonce,
          l = n.clientAccessToken,
          d = n.personalization,
          f = n.onShippingChange,
          p = n.onClick,
          E = void 0 === p ? En : p,
          y = n.content,
          m = n.tagline,
          g = Sa()[t];
        if (!g) throw new Error("Can not find funding config for " + t);
        var w = g.colors,
          v = g.secondaryColors || {},
          C =
            (function(n) {
              if (!n.onShippingChange) {
                var e = n.fundingEligibility[n.fundingSource];
                if (e) {
                  if (e.vaultedInstruments && e.vaultedInstruments.length)
                    return { vaultedInstrument: e.vaultedInstruments[0] };
                  if (e.vendors)
                    for (
                      var t = 0, r = Object.keys(e.vendors);
                      t < r.length;
                      t++
                    ) {
                      var o = r[t],
                        i = e.vendors[o];
                      if (
                        i &&
                        i.vaultedInstruments &&
                        i.vaultedInstruments.length
                      )
                        return {
                          vendor: o,
                          vaultedInstrument: i.vaultedInstruments[0]
                        };
                    }
                }
              }
            })({
              fundingEligibility: u,
              fundingSource: t,
              onShippingChange: f
            }) || {},
          L = C.vaultedInstrument,
          T = C.vendor,
          b = r.color,
          N = void 0 === b ? w[0] : b,
          O = r.period,
          R = r.label;
        o && c > 0 && (N = v[N] || v[ia.DEFAULT] || w[0]);
        var A = g.logoColors,
          S = g.textColors,
          I = A[N] || A[ii.DEFAULT] || ii.DEFAULT,
          _ = S[N] || S[aa.DEFAULT] || aa.DEFAULT,
          x = g.Label,
          P = g.VaultLabel,
          M = function(n, e) {
            n.preventDefault(),
              n.stopPropagation(),
              n.target.blur(),
              E(n, h({ fundingSource: t }, e));
          },
          F = function(n, e) {
            (13 !== n.keyCode && 32 !== n.keyCode) || M(n, e);
          },
          D = r.layout,
          k = r.shape,
          H = Uo(g.Logo, {
            label: R,
            locale: i,
            logoColor: I,
            fundingEligibility: u,
            onClick: M,
            onKeyPress: F,
            nonce: s
          }),
          U =
            L && P
              ? Uo(P, {
                  nonce: s,
                  logoColor: I,
                  label: L.label.description,
                  vendor: T
                })
              : Uo(x, {
                  i: c,
                  logo: H,
                  label: R,
                  nonce: s,
                  locale: i,
                  logoColor: I,
                  period: O,
                  layout: D,
                  multiple: o,
                  fundingEligibility: u,
                  onClick: M,
                  onKeyPress: F,
                  clientAccessToken: l,
                  personalization: d,
                  tagline: m,
                  content: y
                });
        return Uo(
          "div",
          h(
            { role: "button" },
            (((e = {})[da.BUTTON] = !0),
            (e[da.FUNDING_SOURCE] = t),
            (e[da.PAYMENT_METHOD_ID] = L ? L.id : null),
            e),
            {
              class: [
                pa.BUTTON,
                pa.NUMBER + "-" + c,
                pa.LAYOUT + "-" + D,
                pa.SHAPE + "-" + k,
                pa.NUMBER + "-" + (o ? la.MULTIPLE : la.SINGLE),
                pa.ENV + "-" + a,
                pa.COLOR + "-" + N,
                pa.TEXT_COLOR + "-" + _,
                ai.LOGO_COLOR + "-" + I
              ].join(" "),
              onClick: M,
              onKeyPress: F,
              tabindex: "0"
            }
          ),
          Uo("div", { class: pa.BUTTON_LABEL }, U),
          Uo(Ya, null),
          L ? Uo(Ja, { color: _ }) : null
        );
      }
      function Qa(n) {
        var e = n.fundingSource,
          t = n.locale,
          r = n.multiple,
          o = n.nonce,
          i = n.personalization,
          a = n.style.label,
          u = Sa()[e];
        if (!u) throw new Error("Can not get config for " + e);
        var c = u.Tag;
        if (c) {
          var s = i && i.tagline;
          return Uo(
            "div",
            { class: pa.TAGLINE },
            s && !r
              ? Uo(
                  Bo,
                  null,
                  Uo(
                    "span",
                    null,
                    s.Component ? Uo(s.Component, null) : s.text
                  ),
                  s.tracking &&
                    s.tracking.impression &&
                    Uo(ga, { url: s.tracking.impression, nonce: o })
                )
              : Uo(c, { label: a, nonce: o, locale: t, multiple: r })
          );
        }
      }
      function nu(n) {
        return Uo("script", {
          nonce: n.nonce,
          innerHTML:
            "(" +
            function() {
              var n = { OPTIONAL: "optional" },
                e = { HIDDEN: "hidden", DOM_READY: "dom-ready" },
                t = { ALL: "*", OPTIONAL: "[" + n.OPTIONAL + "]" },
                r = { STYLE: "style" };
              function o(n) {
                return [].slice.call(n);
              }
              function i(n, e) {
                return o((e = e || document).querySelectorAll(n)).filter(
                  function(n) {
                    return n.tagName.toLowerCase() !== r.STYLE;
                  }
                );
              }
              function a(e) {
                return parseInt(e.getAttribute(n.OPTIONAL) || 0, 10);
              }
              function u(n) {
                return (function(n) {
                  for (var e = 0, t = 0; t < n.length; t++) e += n[t];
                  return e;
                })(
                  n.map(function(n) {
                    return n.offsetWidth;
                  })
                );
              }
              var c = (function(n) {
                for (var e = [], t = 0; t < n.length; t++) {
                  var r = n[t];
                  -1 === e.indexOf(r) && e.push(r);
                }
                return e;
              })(
                i(t.OPTIONAL)
                  .map(function(n) {
                    return n.parentElement;
                  })
                  .filter(Boolean)
              ).map(function(n) {
                return {
                  optionalParent: n,
                  allChildren: i(t.ALL, n),
                  optionalChildren: o(i(t.OPTIONAL, n)).sort(function(n, e) {
                    return a(n) - a(e);
                  })
                };
              });
              function s() {
                for (var n = 0; n < c.length; n++)
                  for (
                    var t = c[n],
                      r = t.optionalChildren,
                      o = t.optionalParent.offsetWidth,
                      i = u(t.allChildren) - u(r),
                      a = 0;
                    a < r.length;
                    a++
                  ) {
                    var s = r[a];
                    (i += s.offsetWidth) > o
                      ? s.classList.add(e.HIDDEN)
                      : s.classList.remove(e.HIDDEN);
                  }
              }
              var l,
                d,
                f,
                p = (function(n) {
                  var e = !1;
                  return function() {
                    e || ((e = !0), n.apply(void 0, arguments));
                  };
                })(
                  ((l = function() {
                    window.addEventListener("resize", s),
                      document.body && document.body.classList.add(e.DOM_READY);
                  }),
                  void 0 === d && (d = 50),
                  function() {
                    for (
                      var n = arguments.length, e = new Array(n), t = 0;
                      t < n;
                      t++
                    )
                      e[t] = arguments[t];
                    clearTimeout(f),
                      (f = setTimeout(function() {
                        l.apply(void 0, e);
                      }, d));
                  })
                ),
                h = function() {
                  s(), p();
                };
              s(),
                document.addEventListener("DOMContentLoaded", h),
                window.addEventListener("load", h),
                window.addEventListener("resize", h);
            }.toString() +
            ")()"
        });
      }
      var eu =
        "\n    ." +
        pa.POWERED_BY +
        " {\n        text-align: center;\n        margin: 10px auto;\n        height: 14px;\n        font-family: PayPal-Sans, HelveticaNeue, sans-serif;\n        font-size: 11px;\n        font-weight: normal;\n        font-style: italic;\n        font-stretch: normal;\n        color: #7b8388;\n        position: relative;\n        margin-right: 3px;\n        bottom: 3px;\n    }\n    \n    ." +
        pa.POWERED_BY +
        " > ." +
        pa.TEXT +
        ",\n    ." +
        pa.POWERED_BY +
        " > ." +
        ai.LOGO +
        " {\n        display: inline-block;\n        vertical-align: middle;\n        height: 16px;\n        line-height: 16px;\n    }\n";
      function tu(n) {
        return Uo(
          "div",
          { class: pa.POWERED_BY },
          Uo("style", { innerHTML: eu }),
          Uo(ha, null)
        );
      }
      function ru(n) {
        var e = n.onClick,
          t = void 0 === e ? En : e,
          r = (function(n) {
            if (!n) throw new Error("Expected props");
            var e = n.clientID,
              t = n.fundingSource,
              r = n.style,
              o = void 0 === r ? {} : r,
              i = n.remembered,
              a = void 0 === i ? [] : i,
              u = n.locale,
              c = void 0 === u ? Fa.LOCALE : u,
              s = n.env,
              l = void 0 === s ? Fa.ENV : s,
              d = n.platform,
              f = void 0 === d ? Fa.PLATFORM : d,
              p = n.commit,
              h = void 0 === p ? Fa.COMMIT : p,
              E = n.fundingEligibility,
              y = n.sessionID,
              m = void 0 === y ? sn() : y,
              g = n.buttonSessionID,
              w = void 0 === g ? sn() : g,
              v = n.csp,
              C = void 0 === v ? {} : v,
              L = n.components,
              T = void 0 === L ? [Fe.BUTTONS] : L,
              b = n.nonce,
              N = void 0 === b ? "" : b,
              O = n.onShippingChange,
              R = n.personalization,
              A = n.clientAccessToken,
              S = n.content,
              I = void 0 === S ? {} : S,
              _ = c.country,
              x = c.lang;
            if (!_ || -1 === ka.indexOf(_))
              throw new Error(
                "Expected valid country, got " + (_ || "undefined")
              );
            if (!x || -1 === xe[_].indexOf(x))
              throw new Error("Expected valid lang, got " + (x || "undefined"));
            if (
              a.some(function(n) {
                return -1 === Ha.indexOf(n);
              })
            )
              throw new Error(
                "Expected valid funding sources, got " + JSON.stringify(a)
              );
            if (-1 === Ua.indexOf(l))
              throw new Error("Expected valid env, got " + (l || "undefined"));
            if (!E) throw new Error("Expected fundingEligibility");
            if (-1 === Ba.indexOf(f))
              throw new Error(
                "Expected valid platform, got " + (f || "undefined")
              );
            if ((C && C.nonce && (N = C.nonce), t)) {
              if (-1 === Gi.indexOf(t))
                throw new Error("Invalid funding source: " + t);
              if (
                !Ia(t, {
                  platform: f,
                  fundingSource: t,
                  fundingEligibility: E,
                  components: T,
                  onShippingChange: O
                })
              )
                throw new Error("Funding Source not eligible: " + t);
            }
            return {
              clientID: e,
              fundingSource: t,
              style: (o = Da(n, o)),
              locale: c,
              remembered: a,
              env: l,
              fundingEligibility: E,
              platform: f,
              clientAccessToken: A,
              buttonSessionID: w,
              commit: h,
              sessionID: m,
              nonce: N,
              components: T,
              onShippingChange: O,
              personalization: R,
              content: I
            };
          })(n),
          o = r.fundingSource,
          i = r.style,
          a = r.locale,
          u = r.env,
          c = r.fundingEligibility,
          s = r.nonce,
          l = r.onShippingChange,
          d = r.personalization,
          f = r.clientAccessToken,
          p = r.content,
          h = i.layout,
          E = i.shape,
          y = i.tagline,
          m = (function(n) {
            var e = n.fundingSource,
              t = n.layout,
              r = n.platform,
              o = n.remembered,
              i = n.fundingEligibility,
              a = n.components,
              u = n.onShippingChange;
            if (e) return [e];
            var c = Gi.filter(function(n) {
              return Ia(n, {
                layout: t,
                platform: r,
                remembered: o,
                fundingSource: e,
                fundingEligibility: i,
                components: a,
                onShippingChange: u
              });
            });
            return t === sa.HORIZONTAL && (c = c.slice(0, 2)), c;
          })({
            fundingSource: o,
            layout: h,
            remembered: r.remembered,
            platform: r.platform,
            fundingEligibility: c,
            components: r.components,
            onShippingChange: l
          }),
          g = m.length > 1;
        if (!m.length)
          throw new Error(
            "No eligible funding fundingSources found to render buttons:\n\n" +
              JSON.stringify(c, null, 4)
          );
        return Uo(
          "div",
          {
            class: [
              pa.CONTAINER,
              pa.LAYOUT + "-" + h,
              pa.SHAPE + "-" + E,
              pa.NUMBER + "-" + (g ? la.MULTIPLE : la.SINGLE),
              pa.ENV + "-" + u
            ].join(" ")
          },
          Uo(Va, { nonce: s, style: i, locale: a }),
          m.map(function(n, e) {
            return Uo($a, {
              content: p,
              i: e,
              style: i,
              fundingSource: n,
              multiple: g,
              env: u,
              locale: a,
              nonce: s,
              fundingEligibility: c,
              onShippingChange: l,
              onClick: t,
              clientAccessToken: f,
              personalization: d,
              tagline: y
            });
          }),
          y && h === sa.HORIZONTAL && !o
            ? Uo(Qa, {
                fundingSource: m[0],
                style: i,
                locale: a,
                multiple: g,
                nonce: s,
                personalization: d
              })
            : null,
          h === sa.VERTICAL && -1 !== m.indexOf(Ke.CARD)
            ? Uo(tu, { locale: a })
            : null,
          Uo(nu, { nonce: s })
        );
      }
      function ou(n) {
        var e = n.nonce,
          t = n.onRenderCheckout;
        return Uo(
          "html",
          null,
          Uo(
            "body",
            null,
            Uo(
              ru,
              h({}, n.props, {
                onClick: function(n, r) {
                  var o = r.fundingSource,
                    i = r.card;
                  if (p()) {
                    var a = D(re("", { width: Wi.WIDTH, height: Wi.HEIGHT })),
                      u = window.document;
                    oe(a, Uo(Bi, { nonce: e }).render(qo({ doc: u }))),
                      t({ win: a, fundingSource: o, card: i });
                  } else t({ fundingSource: o, card: i });
                }
              })
            )
          )
        );
      }
      var iu = fn(function() {
        var n = No({
            tag: "paypal-buttons",
            url: function() {
              return "" + _t() + (window.__CHECKOUT_URI__ || "/smart/buttons");
            },
            domain: /\.paypal\.com(:\d+)?$/,
            autoResize: { width: !1, height: !0 },
            containerTemplate: Za,
            logger: Gt(),
            prerenderTemplate: function(n) {
              var e = n.state,
                t = n.props,
                r = n.doc;
              return Uo(ou, {
                nonce: t.nonce,
                props: t,
                onRenderCheckout: function(n) {
                  e.prerenderDetails = {
                    win: n.win,
                    fundingSource: n.fundingSource,
                    card: n.card
                  };
                }
              }).render(qo({ doc: r }));
            },
            attributes: {
              iframe: {
                allowpaymentrequest: "allowpaymentrequest",
                scrolling: "no"
              }
            },
            props: {
              style: {
                type: "object",
                queryParam: !0,
                required: !1,
                decorate: function(n) {
                  return Da(n.props, n.value);
                },
                validate: function(n) {
                  var e = n.value;
                  Da(n.props, void 0 === e ? {} : e);
                },
                default: function() {
                  return {};
                }
              },
              components: { type: "array", queryParam: !0, value: rt },
              locale: { type: "object", queryParam: !0, value: Ot },
              fundingSource: { type: "string", queryParam: !0, required: !1 },
              sdkMeta: {
                type: "string",
                queryParam: !0,
                sendToChild: !1,
                value: qt
              },
              createOrder: { type: "function", required: !1 },
              createBillingAgreement: { type: "function", required: !1 },
              createSubscription: { type: "function", required: !1 },
              onApprove: { type: "function", required: !1 },
              onShippingChange: {
                type: "function",
                required: !1,
                queryParam: !0,
                queryValue: function(n) {
                  return n.value ? De.TRUE : De.FALSE;
                }
              },
              onCancel: { type: "function", required: !1 },
              onClick: { type: "function", required: !1 },
              getPrerenderDetails: {
                type: "function",
                value: function(n) {
                  var e = n.state;
                  return function() {
                    return e.prerenderDetails;
                  };
                }
              },
              getPopupBridge: {
                type: "function",
                required: !1,
                value: function() {
                  return function() {
                    if (window.popupBridge)
                      return {
                        nativeUrl: window.popupBridge.getReturnUrlPrefix(),
                        start: function(n) {
                          return new T(function(e, t) {
                            (window.popupBridge.onComplete = function(n, r) {
                              return n ? t(n) : e(r.queryItems);
                            }),
                              window.popupBridge.open(n);
                          });
                        }
                      };
                  };
                }
              },
              clientID: { type: "string", value: ft, queryParam: !0 },
              clientAccessToken: {
                type: "string",
                required: !1,
                queryParam: !0,
                value: Lt
              },
              partnerAttributionID: { type: "string", required: !1, value: Tt },
              enableThreeDomainSecure: { type: "boolean", value: At },
              correlationID: { type: "string", required: !1, value: et },
              sessionID: { type: "string", value: Ao, queryParam: !0 },
              buttonSessionID: { type: "string", value: sn, queryParam: !0 },
              enableVault: { type: "boolean", required: !1, queryParam: !0 },
              env: { type: "string", queryParam: !0, value: Qe },
              stageHost: { type: "string", value: bt, required: !1 },
              apiStageHost: { type: "string", value: Nt, required: !1 },
              fundingEligibility: {
                type: "object",
                value: function() {
                  var n = ra();
                  try {
                    if (
                      (n.paypal && delete n.paypal.vaultable,
                      n.card && n.card.vendors)
                    )
                      for (var e = 0, t = Cn(ze); e < t.length; e++) {
                        var r = t[e];
                        n.card.vendors[r] && delete n.card.vendors[r].vaultable;
                      }
                  } catch (n) {}
                  return n;
                },
                queryParam: !0,
                serialization: "base64"
              },
              platform: { type: "string", queryParam: !0, value: ot },
              remembered: { type: "array", queryParam: !0, value: Ji },
              remember: {
                type: "function",
                value: function() {
                  return function(n) {
                    return (function(n, e) {
                      void 0 === e && (e = {});
                      var t = Cn(Ke),
                        r = e.cookie,
                        o = void 0 === r || r,
                        i = e.expiry;
                      if (!n || !n.length)
                        throw new Error("Pass array of funding sources");
                      for (var a = 0; a < n.length; a++) {
                        var u = n[a];
                        if (-1 === t.indexOf(u))
                          throw new Error("Invalid funding source: " + u);
                      }
                      o &&
                        !xt() &&
                        (function(n, e) {
                          var t;
                          void 0 === e && (e = {});
                          var r = e.expiry,
                            o = document.createElement("iframe");
                          (o.style.display = "none"),
                            o.setAttribute("sandbox", "allow-scripts"),
                            o.setAttribute(
                              "src",
                              Kn(_t() + "/smart/funding/remember", {
                                query:
                                  ((t = {}),
                                  (t[Ki] = M()),
                                  (t[zi] = ft()),
                                  (t[Vi] = qt()),
                                  (t[Yi] = n.join(",")),
                                  (t[Xi] = (r || "").toString()),
                                  t)
                              })
                            );
                          var i = document.body;
                          if (!i) throw new Error("Can not find body");
                          i.appendChild(o);
                        })(n, { expiry: i }),
                        Zt(function(e) {
                          e.funding = e.fundingConfig || {};
                          for (var t = 0; t < n.length; t++) {
                            var r = n[t],
                              o = (e.funding[r] = e.funding[r] || {});
                            (o.remembered = !0),
                              i && (o.expiry = Date.now() + 1e3 * i);
                          }
                        });
                    })(n, { cookie: !1 });
                  };
                }
              },
              currency: { type: "string", queryParam: !0, value: mt },
              intent: { type: "string", queryParam: !0, value: ht },
              buyerCountry: {
                type: "string",
                queryParam: !0,
                required: !1,
                value: vt
              },
              commit: { type: "boolean", queryParam: !0, value: Et },
              vault: { type: "boolean", queryParam: !0, value: yt },
              disableFunding: { type: "array", queryParam: !0, value: gt },
              disableCard: { type: "array", queryParam: !0, value: wt },
              merchantID: { type: "array", queryParam: !0, value: pt },
              csp: {
                type: "object",
                required: !1,
                value: function() {
                  return { nonce: Rt() };
                }
              },
              getPageUrl: {
                type: "function",
                value: function() {
                  return function() {
                    return window.location.href;
                  };
                }
              },
              debug: { type: "boolean", value: tt, queryParam: !0 },
              test: {
                type: "object",
                default: function() {
                  return { action: "checkout" };
                }
              }
            }
          }),
          e = [],
          t = function t(r) {
            var o;
            void 0 === r && (r = {});
            var i = r.onDestroy || En;
            return (
              (r.onDestroy = function() {
                return (
                  o && e.splice(e.indexOf(o), 1), i.apply(void 0, arguments)
                );
              }),
              (o = n(r)),
              e.push(o),
              (o.isEligible = function() {
                var n = r.fundingSource,
                  e = r.onShippingChange,
                  t = r.style,
                  o = (void 0 === t ? {} : t).layout,
                  i = ot(),
                  a = ra();
                return (
                  !n ||
                  Ia(n, {
                    layout: o,
                    platform: i,
                    fundingSource: n,
                    fundingEligibility: a,
                    components: ["buttons"],
                    onShippingChange: e
                  })
                );
              }),
              (o.clone = function(n) {
                var e = (void 0 === n ? {} : n).decorate;
                return t((void 0 === e ? On : e)(r));
              }),
              o
            );
          };
        return (
          (t.driver = n.driver),
          (t.isChild = n.isChild),
          (t.canRenderTo = n.canRenderTo),
          (t.instances = e),
          t
        );
      });
      function au() {
        return hn(au, function() {
          return No({
            tag: "paypal-card-fields",
            url: function() {
              return (
                "" + _t() + (window.__CHECKOUT_URI__ || "/smart/card-fields")
              );
            },
            dimensions: { height: "300px", width: "100%" },
            attributes: {
              iframe: {
                allowpaymentrequest: "allowpaymentrequest",
                scrolling: "no"
              }
            },
            autoResize: { height: !0, width: !1 },
            props: {
              sessionID: {
                type: "string",
                required: !1,
                def: Ao,
                queryParam: !0
              },
              createOrder: {
                type: "function",
                queryParam: "token",
                alias: "payment",
                queryValue: function(n) {
                  return T.try(n.value);
                }
              },
              buttonSessionID: { type: "string", queryParam: !0 },
              commit: { type: "boolean", queryParam: !0, value: Et },
              env: { type: "string", queryParam: !0, value: Qe },
              locale: {
                type: "object",
                queryParam: "locale.x",
                allowDelegate: !0,
                queryValue: function(n) {
                  var e = n.value;
                  return e.lang + "_" + e.country;
                },
                value: Ot
              },
              onApprove: { type: "function", alias: "onAuthorize" },
              onAuth: { type: "function", required: !1, sameDomain: !0 },
              onCancel: { type: "function", required: !1 },
              sdkMeta: { type: "string", queryParam: !0, value: qt },
              style: { type: "object", required: !1, queryParam: !0 },
              disableCard: {
                type: "array",
                queryParam: "disable-card",
                allowDelegate: !0,
                queryValue: function(n) {
                  return n.value.join(",");
                },
                value: wt
              }
            }
          });
        });
      }
      function uu() {
        return hn(uu, function() {
          return No({
            tag: "paypal-menu",
            url: function() {
              return "" + _t() + (window.__CHECKOUT_URI__ || "/smart/menu");
            },
            domain: /\.paypal\.com(:\d+)?$/,
            autoResize: { width: !1, height: !0 },
            dimensions: { width: "100%", height: "150px" },
            logger: Gt(),
            prerenderTemplate: function() {
              return null;
            },
            attributes: { iframe: { scrolling: "no" } },
            props: {
              sdkMeta: {
                type: "string",
                queryParam: !0,
                sendToChild: !1,
                value: qt
              },
              clientID: { type: "string", queryParam: !0 }
            }
          });
        });
      }
      var cu = { VISIBLE: "visible", INVISIBLE: "invisible" };
      function su() {
        return hn(su, function() {
          return No({
            tag: "paypal-modal",
            url: function() {
              return "" + _t() + (window.__CHECKOUT_URI__ || "/smart/modal");
            },
            domain: /\.paypal\.com(:\d+)?$/,
            dimensions: { width: "100%", height: "100%" },
            logger: Gt(),
            containerTemplate: function(n) {
              var e = n.frame,
                t = n.prerenderFrame,
                r = n.doc,
                o = n.uid,
                i = n.event;
              if (e && t) {
                var a = n.props.cspNonce;
                return (
                  t.classList.add(cu.VISIBLE),
                  e.classList.add(cu.INVISIBLE),
                  i.on(ro.RENDERED, function() {
                    t.classList.remove(cu.VISIBLE),
                      t.classList.add(cu.INVISIBLE),
                      e.classList.remove(cu.INVISIBLE),
                      e.classList.add(cu.VISIBLE),
                      setTimeout(function() {
                        me(t);
                      }, 1);
                  }),
                  Uo(
                    "div",
                    {
                      id: o,
                      onRender: function(n) {
                        i.on(ro.RESIZE, function(e) {
                          var t = e.width,
                            r = e.height;
                          "number" == typeof t && (n.style.width = Ae(t)),
                            "number" == typeof r && (n.style.height = Ae(r));
                        });
                      }
                    },
                    Uo("style", {
                      nonce: a,
                      innerHTML:
                        "\n                                #" +
                        o +
                        " {\n                                    display: block;\n                                    position: fixed;\n                                    width: 100%;\n                                    height: 100%;\n                                    top: 0;\n                                    left: 0;\n                                    z-index: 200000;\n                                }\n\n                                #" +
                        o +
                        " > iframe {\n                                    display: inline-block;\n                                    position: absolute;\n                                    width: 100%;\n                                    height: 100%;\n                                    top: 0;\n                                    left: 0;\n                                    transition: opacity .2s ease-in-out;\n                                }\n                                #" +
                        o +
                        " > iframe." +
                        cu.INVISIBLE +
                        " {\n                                    opacity: 0;\n                                }\n                                #" +
                        o +
                        " > iframe." +
                        cu.VISIBLE +
                        " {\n                                    opacity: 1;\n                                }\n                            "
                    }),
                    Uo("node", { el: e }),
                    Uo("node", { el: t })
                  ).render(qo({ doc: r }))
                );
              }
            },
            prerenderTemplate: function() {
              return null;
            },
            attributes: { iframe: { scrolling: "no" } },
            props: {
              sdkMeta: {
                type: "string",
                queryParam: !0,
                sendToChild: !1,
                value: qt
              },
              clientID: { type: "string", queryParam: !0 },
              orderID: { type: "string", queryParam: !0 },
              customerID: { type: "string", queryParam: !0 }
            }
          });
        });
      }
      function lu(n) {
        if (xt()) return n;
      }
      var du = {
          __get__: function() {
            return iu();
          }
        },
        fu = {
          __get__: function() {
            return lu(Zi());
          }
        },
        pu = {
          __get__: function() {
            return lu(au());
          }
        },
        hu = {
          __get__: function() {
            return lu(uu());
          }
        },
        Eu = {
          __get__: function() {
            return lu(su());
          }
        },
        yu = {
          __get__: function() {
            return lu(ru);
          }
        },
        mu = {
          __get__: function() {
            return lu(te);
          }
        },
        gu = {
          __get__: function() {
            return lu(So);
          }
        },
        wu = {
          __get__: function() {
            return lu(So);
          }
        },
        vu = {
          __get__: function() {
            return lu(Ro);
          }
        };
      function Cu() {
        iu(), Zi();
      }
      function Lu() {
        Oo(), delete window.__zoid_9_0_42__, Zr();
      }
      function Tu(n) {
        if (xt()) return n;
      }
      var bu = {
          __get__: function() {
            return Tu(Hi());
          }
        },
        Nu = {
          __get__: function() {
            return Tu(r);
          }
        },
        Ou = {
          error: function(n, e) {
            try {
              var t,
                r = Gt();
              r.track(
                (((t = {})[Ue.ERROR_CODE] = "paypal-muse-components"),
                (t[Ue.ERROR_DESC] = JSON.stringify({ name: n, error: gn(e) })),
                t)
              ),
                r.error(n, { err: mn(e) }),
                r.flush().catch(En);
            } catch (e) {
              var o,
                i = Gt();
              i.track(
                (((o = {})[Ue.ERROR_CODE] = "paypal-muse-components"),
                (o[Ue.ERROR_DESC] =
                  "Error logging error event for " + (n || "")),
                o)
              ),
                i.error("logger_error", { err: mn(e) }),
                i.flush().catch(En);
            }
          }
        },
        Ru = "xo-pptm";
      function Au() {
        document.addEventListener("DOMContentLoaded", function() {
          !(function(n, e) {
            void 0 === n && (n = "sandbox"), void 0 === e && (e = !1);
            try {
              if ("mock://www.paypal.com" !== window.mockDomain && !xt()) {
                if (n === He.SANDBOX && !0 !== e) return;
                var t = (function() {
                    var n = pt();
                    if (n.length && n[0] !== ke) return n[0];
                  })(),
                  r = ft(),
                  o = window.location.hostname,
                  i = _t(),
                  a = document.createElement("script"),
                  u = document.querySelector("head"),
                  c = (function(n, e, t, r) {
                    var o =
                      n +
                      "/tagmanager/pptm.js?id=" +
                      r +
                      "&t=xo&v=5.0.109&source=payments_sdk";
                    return (
                      e && (o += "&mrid=" + e), t && (o += "&client_id=" + t), o
                    );
                  })(i, t, r, o);
                (a.src = c), (a.id = Ru), (a.async = !0), u && u.appendChild(a);
              }
            } catch (n) {
              Ou.error("insertPPTM", n);
            }
          })("sandbox", !1);
        }),
          Kt().on("button_render", function() {
            (window.paypalDDL = window.paypalDDL || []),
              0 ===
                window.paypalDDL.filter(function(n) {
                  return "paypalButtonRender" === n.event;
                }).length &&
                window.paypalDDL.push({ event: "paypalButtonRender" });
          });
      }
      function Su() {
        var n;
        at(),
          (n = Gt()),
          Date.now(),
          n.addPayloadBuilder(function() {
            return { referer: window.location.host, uid: Wt(), env: "sandbox" };
          }),
          n.addTrackingBuilder(function() {
            var n,
              e = Ot(),
              t = e.lang,
              r = e.country,
              o = pt();
            return (
              ((n = {})[Ue.FEED] = We.PAYMENTS_SDK),
              (n[Ue.DATA_SOURCE] = je.PAYMENTS_SDK),
              (n[Ue.CLIENT_ID] = ft()),
              (n[Ue.SELLER_ID] = o && o.toString()),
              (n[Ue.SESSION_UID] = Wt()),
              (n[Ue.REFERER] = window.location.host),
              (n[Ue.LOCALE] = t + "_" + r),
              (n[Ue.INTEGRATION_IDENTIFIER] = ft()),
              (n[Ue.PARTNER_ATTRIBUTION_ID] = Tt()),
              (n[Ue.SDK_NAME] = Ze.PAYMENTS_SDK),
              (n[Ue.SDK_VERSION] = "5.0.109"),
              (n[Ue.USER_AGENT] =
                window.navigator && window.navigator.userAgent),
              (n[Ue.USER_ACTION] = Et() ? Be.COMMIT : Be.CONTINUE),
              (n[Ue.CONTEXT_CORRID] = "d7aada7c09b5"),
              (n[Ue.SDK_INTEGRATION_SOURCE] = ct(Pe.SDK_INTEGRATION_SOURCE)),
              n
            );
          }),
          T.onPossiblyUnhandledException(function(e) {
            var t;
            n.track(
              (((t = {})[Ue.ERROR_CODE] = "payments_sdk_error"),
              (t[Ue.ERROR_DESC] = gn(e)),
              t)
            ),
              n.error("unhandled_error", { err: mn(e) }),
              n.flush().catch(En);
          }),
          Wn().then(function() {
            var e,
              t,
              r = (function(n) {
                if (
                  zn() &&
                  window.performance &&
                  "function" == typeof window.performance.getEntries
                )
                  for (
                    var e = window.performance.getEntries(), t = 0;
                    t < e.length;
                    t++
                  ) {
                    var r = e[t];
                    if (
                      r &&
                      r.name &&
                      0 === r.name.indexOf(n) &&
                      "number" == typeof r.duration
                    )
                      return Math.floor(r.duration);
                  }
              })(at().src);
            (t =
              0 === r
                ? "sdk_client_cache_hit"
                : "number" == typeof r
                ? "sdk_client_cache_miss"
                : "sdk_client_cache_unknown"),
              n
                .info("setup_sandbox")
                .info(t)
                .track(
                  ((e = {}),
                  (e[Ue.TRANSITION] = "process_js_sdk_init_client"),
                  (e[Ue.SDK_LOAD_TIME] =
                    "number" == typeof r ? r.toString() : void 0),
                  (e[Ue.SDK_CACHE] = t),
                  e)
                )
                .flush(),
              (function() {
                if (window.document.documentMode)
                  try {
                    var n = window.status;
                    return (
                      (window.status = "testIntranetMode"),
                      "testIntranetMode" === window.status &&
                        ((window.status = n), !0)
                    );
                  } catch (n) {
                    return !1;
                  }
                return !1;
              })() && n.warn("ie_intranet_mode");
          });
      }
      !(function(n) {
        var e = Ct(),
          t = window[e];
        if (t) {
          if (!t.__internal_destroy__)
            throw new Error(
              "Attempted to load sdk version 5.0.109 on page, but version " +
                ((t && t.version) || "unknown") +
                ' already loaded.\n\nTo load this sdk alongside the existing version, please specify a different namespace in the script tag, e.g. <script src="https://www.paypal.com/sdk/js?client-id=CLIENT_ID" data-namespace="paypal_sdk"></script>, then use the paypal_sdk namespace in place of paypal in your code.'
            );
          t.__internal_destroy__(), delete window[e];
        }
        (window[e] = window[e] || {}), (window[e].version = "5.0.109");
        for (
          var r = [],
            o = function(t) {
              var o = n[t],
                i = o.name,
                a = o.requirer,
                u = o.setupHandler;
              try {
                var s = a(),
                  l = s[u],
                  d = s.setup,
                  f = s.destroy,
                  p = c(s, [u, "setup", "destroy"].map(St));
                l ? l() : d && d(), f && r.push(f);
                for (var h = 0, E = Object.keys(p); h < E.length; h++) {
                  var y = E[h],
                    m = p[y];
                  m && m.__get__ && (m = m.__get__()), m && (window[e][y] = m);
                }
              } catch (n) {
                return (
                  setTimeout(function() {
                    throw new Error(
                      "Bootstrap Error for " +
                        i +
                        ":\n\n" +
                        n.message +
                        "\n\n" +
                        n.stack
                    );
                  }, 1),
                  "continue"
                );
              }
            },
            i = 0;
          i < n.length;
          i++
        )
          o(i);
        Object.defineProperty(window[e], "__internal_destroy__", {
          enumerable: !1,
          value: function() {
            r.forEach(function(n) {
              return n();
            }),
              me(at()),
              delete window[e];
          }
        });
      })([
        {
          name: "buttons",
          setupHandler: "setupButtons",
          requirer: function() {
            return o;
          }
        },
        {
          name: "common",
          setupHandler: null,
          requirer: function() {
            return i;
          }
        },
        {
          name: "muse",
          setupHandler: null,
          requirer: function() {
            return a;
          }
        },
        {
          name: "__paypal-sdk-client__",
          setupHandler: "setupClient",
          requirer: function() {
            return u;
          }
        }
      ]);
    }
  ])
);
