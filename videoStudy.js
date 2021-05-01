webpackJsonp([0], Array(175).concat([function (t, e, i) {
    "use strict";

    function n(t, e) {
        return new a.a([
            ["1", "第" + t + "章"],
            ["2", "任务" + t],
            ["3", "第" + t + "部分"],
            ["4", "项目" + t],
            ["5", "模块" + t],
            ["6", "案例" + t]
        ]).get(e + "")
    }

    i.d(e, "b", function () {
        return r
    }), i.d(e, "e", function () {
        return s
    }), i.d(e, "f", function () {
        return l
    }), i.d(e, "d", function () {
        return d
    }), i.d(e, "c", function () {
        return u
    }), e.a = n;
    var o = i(266),
        a = i.n(o),
        r = function (t) {
            if (document.cookie.length > 0) {
                var e = document.cookie.indexOf(t + "=");
                if (-1 != e) {
                    e = e + t.length + 1;
                    var i = document.cookie.indexOf(";", e);
                    return -1 == i && (i = document.cookie.length), decodeURIComponent(document.cookie.substring(e, i))
                }
            }
            return ""
        },
        s = function (t, e, i) {
            var n = new Date,
                o = i || 3;
            n.setTime(n.getTime() + 24 * o * 60 * 60 * 1e3), document.cookie = t + "=" + e + ";expires=" + n.toGMTString() + ";path=/"
        },
        l = function (t) {
            return ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"][t - 1]
        },
        d = function (t) {
            var e = 0,
                i = 0,
                n = 0;
            return t = Number(t), t <= 0 || (t < 10 ? parseInt(t) : 10 <= t && t < 60 ? parseInt(t) : 60 <= t && t < 600 ? (i = Math.floor(t / 60), n = parseInt(t % 60)) : 600 <= t && t < 3600 ? (i = Math.floor(t / 60), n = parseInt(t % 60)) : 3600 <= t && (e = Math.floor(t / 3600))), i = Math.floor((t - 3600 * e) / 60), n = parseInt(t % 60), "0" + e + ":" + (i < 10 ? "0" + i : i) + ":" + (n < 10 ? "0" + n : n)
        },
        u = function (t) {
            return $.trim(t), null == t || void 0 == t || "undefined" == t || "" == t || 0 == t.length || !/[^(^\s*)|(\s*$)]/.test(t)
        }
}, , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , ,
    function (t, e, i) {
        function n(t) {
            i(839)
        }

        var o = i(110)(i(755), i(862), n, null, null);
        t.exports = o.exports
    }, function (t, e) {
        function i(t, e) {
            "createCanvas" === t && (K = null), Z[t] = e
        }

        function n(t) {
            if (null == t || "object" != typeof t) return t;
            var e = t,
                i = W.call(t);
            if ("[object Array]" === i) {
                if (!z(t)) {
                    e = [];
                    for (var o = 0, a = t.length; o < a; o++) e[o] = n(t[o])
                }
            } else if (q[i]) {
                if (!z(t)) {
                    var r = t.constructor;
                    if (t.constructor.from) e = r.from(t);
                    else {
                        e = new r(t.length);
                        for (var o = 0, a = t.length; o < a; o++) e[o] = n(t[o])
                    }
                }
            } else if (!H[i] && !z(t) && !I(t)) {
                e = {};
                for (var s in t) t.hasOwnProperty(s) && (e[s] = n(t[s]))
            }
            return e
        }

        function o(t, e, i) {
            if (!S(e) || !S(t)) return i ? n(e) : t;
            for (var a in e)
                if (e.hasOwnProperty(a)) {
                    var r = t[a],
                        s = e[a];
                    !S(s) || !S(r) || x(s) || x(r) || I(s) || I(r) || C(s) || C(r) || z(s) || z(r) ? !i && a in t || (t[a] = n(e[a], !0)) : o(r, s, i)
                }
            return t
        }

        function a(t, e) {
            for (var i = t[0], n = 1, a = t.length; n < a; n++) i = o(i, t[n], e);
            return i
        }

        function r(t, e) {
            for (var i in e) e.hasOwnProperty(i) && (t[i] = e[i]);
            return t
        }

        function s(t, e, i) {
            for (var n in e) e.hasOwnProperty(n) && (i ? null != e[n] : null == t[n]) && (t[n] = e[n]);
            return t
        }

        function l() {
            return K || (K = Q().getContext("2d")), K
        }

        function d(t, e) {
            if (t) {
                if (t.indexOf) return t.indexOf(e);
                for (var i = 0, n = t.length; i < n; i++)
                    if (t[i] === e) return i
            }
            return -1
        }

        function u(t, e) {
            function i() {
            }

            var n = t.prototype;
            i.prototype = e.prototype, t.prototype = new i;
            for (var o in n) n.hasOwnProperty(o) && (t.prototype[o] = n[o]);
            t.prototype.constructor = t, t.superClass = e
        }

        function c(t, e, i) {
            t = "prototype" in t ? t.prototype : t, e = "prototype" in e ? e.prototype : e, s(t, e, i)
        }

        function h(t) {
            if (t) return "string" != typeof t && "number" == typeof t.length
        }

        function f(t, e, i) {
            if (t && e)
                if (t.forEach && t.forEach === j) t.forEach(e, i);
                else if (t.length === +t.length)
                    for (var n = 0, o = t.length; n < o; n++) e.call(i, t[n], n, t);
                else
                    for (var a in t) t.hasOwnProperty(a) && e.call(i, t[a], a, t)
        }

        function p(t, e, i) {
            if (t && e) {
                if (t.map && t.map === Y) return t.map(e, i);
                for (var n = [], o = 0, a = t.length; o < a; o++) n.push(e.call(i, t[o], o, t));
                return n
            }
        }

        function g(t, e, i, n) {
            if (t && e) {
                if (t.reduce && t.reduce === $) return t.reduce(e, i, n);
                for (var o = 0, a = t.length; o < a; o++) i = e.call(n, i, t[o], o, t);
                return i
            }
        }

        function v(t, e, i) {
            if (t && e) {
                if (t.filter && t.filter === G) return t.filter(e, i);
                for (var n = [], o = 0, a = t.length; o < a; o++) e.call(i, t[o], o, t) && n.push(t[o]);
                return n
            }
        }

        function m(t, e, i) {
            if (t && e)
                for (var n = 0, o = t.length; n < o; n++)
                    if (e.call(i, t[n], n, t)) return t[n]
        }

        function _(t, e) {
            var i = X.call(arguments, 2);
            return function () {
                return t.apply(e, i.concat(X.call(arguments)))
            }
        }

        function y(t) {
            var e = X.call(arguments, 1);
            return function () {
                return t.apply(this, e.concat(X.call(arguments)))
            }
        }

        function x(t) {
            return "[object Array]" === W.call(t)
        }

        function b(t) {
            return "function" == typeof t
        }

        function w(t) {
            return "[object String]" === W.call(t)
        }

        function S(t) {
            var e = typeof t;
            return "function" === e || !!t && "object" === e
        }

        function C(t) {
            return !!H[W.call(t)]
        }

        function k(t) {
            return !!q[W.call(t)]
        }

        function I(t) {
            return "object" == typeof t && "number" == typeof t.nodeType && "object" == typeof t.ownerDocument
        }

        function T(t) {
            return t !== t
        }

        function D(t) {
            for (var e = 0, i = arguments.length; e < i; e++)
                if (null != arguments[e]) return arguments[e]
        }

        function M(t, e) {
            return null != t ? t : e
        }

        function A(t, e, i) {
            return null != t ? t : null != e ? e : i
        }

        function L() {
            return Function.call.apply(X, arguments)
        }

        function P(t) {
            if ("number" == typeof t) return [t, t, t, t];
            var e = t.length;
            return 2 === e ? [t[0], t[1], t[0], t[1]] : 3 === e ? [t[0], t[1], t[2], t[1]] : t
        }

        function O(t, e) {
            if (!t) throw new Error(e)
        }

        function R(t) {
            return null == t ? null : "function" == typeof t.trim ? t.trim() : t.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g, "")
        }

        function E(t) {
            t[J] = !0
        }

        function z(t) {
            return t[J]
        }

        function N(t) {
            function e(t, e) {
                i ? n.set(t, e) : n.set(e, t)
            }

            var i = x(t);
            this.data = {};
            var n = this;
            t instanceof N ? t.each(e) : t && f(t, e)
        }

        function B(t) {
            return new N(t)
        }

        function F(t, e) {
            for (var i = new t.constructor(t.length + e.length), n = 0; n < t.length; n++) i[n] = t[n];
            var o = t.length;
            for (n = 0; n < e.length; n++) i[n + o] = e[n];
            return i
        }

        function V() {
        }

        var H = {
                "[object Function]": 1,
                "[object RegExp]": 1,
                "[object Date]": 1,
                "[object Error]": 1,
                "[object CanvasGradient]": 1,
                "[object CanvasPattern]": 1,
                "[object Image]": 1,
                "[object Canvas]": 1
            },
            q = {
                "[object Int8Array]": 1,
                "[object Uint8Array]": 1,
                "[object Uint8ClampedArray]": 1,
                "[object Int16Array]": 1,
                "[object Uint16Array]": 1,
                "[object Int32Array]": 1,
                "[object Uint32Array]": 1,
                "[object Float32Array]": 1,
                "[object Float64Array]": 1
            },
            W = Object.prototype.toString,
            U = Array.prototype,
            j = U.forEach,
            G = U.filter,
            X = U.slice,
            Y = U.map,
            $ = U.reduce,
            Z = {},
            Q = function () {
                return Z.createCanvas()
            };
        Z.createCanvas = function () {
            return document.createElement("canvas")
        };
        var K, J = "__ec_primitive__";
        N.prototype = {
            constructor: N,
            get: function (t) {
                return this.data.hasOwnProperty(t) ? this.data[t] : null
            },
            set: function (t, e) {
                return this.data[t] = e
            },
            each: function (t, e) {
                void 0 !== e && (t = _(t, e));
                for (var i in this.data) this.data.hasOwnProperty(i) && t(this.data[i], i)
            },
            removeKey: function (t) {
                delete this.data[t]
            }
        }, e.$override = i, e.clone = n, e.merge = o, e.mergeAll = a, e.extend = r, e.defaults = s, e.createCanvas = Q, e.getContext = l, e.indexOf = d, e.inherits = u, e.mixin = c, e.isArrayLike = h, e.each = f, e.map = p, e.reduce = g, e.filter = v, e.find = m, e.bind = _, e.curry = y, e.isArray = x, e.isFunction = b, e.isString = w, e.isObject = S, e.isBuiltInObject = C, e.isTypedArray = k, e.isDom = I, e.eqNaN = T, e.retrieve = D, e.retrieve2 = M, e.retrieve3 = A, e.slice = L, e.normalizeCssArray = P, e.assert = O, e.trim = R, e.setAsPrimitive = E, e.isPrimitive = z, e.createHashMap = B, e.concatArray = F, e.noop = V
    }, function (t, e, i) {
        function n(t) {
            return t instanceof Array ? t : null == t ? [] : [t]
        }

        function o(t, e, i) {
            if (t) {
                t[e] = t[e] || {}, t.emphasis = t.emphasis || {}, t.emphasis[e] = t.emphasis[e] || {};
                for (var n = 0, o = i.length; n < o; n++) {
                    var a = i[n];
                    !t.emphasis[e].hasOwnProperty(a) && t[e].hasOwnProperty(a) && (t.emphasis[e][a] = t[e][a])
                }
            }
        }

        function a(t) {
            return !S(t) || C(t) || t instanceof Date ? t : t.value
        }

        function r(t) {
            return S(t) && !(t instanceof Array)
        }

        function s(t, e) {
            e = (e || []).slice();
            var i = x.map(t || [], function (t, e) {
                return {
                    exist: t
                }
            });
            return w(e, function (t, n) {
                if (S(t)) {
                    for (var o = 0; o < i.length; o++)
                        if (!i[o].option && null != t.id && i[o].exist.id === t.id + "") return i[o].option = t, void (e[n] = null);
                    for (var o = 0; o < i.length; o++) {
                        var a = i[o].exist;
                        if (!(i[o].option || null != a.id && null != t.id || null == t.name || u(t) || u(a) || a.name !== t.name + "")) return i[o].option = t, void (e[n] = null)
                    }
                }
            }), w(e, function (t, e) {
                if (S(t)) {
                    for (var n = 0; n < i.length; n++) {
                        var o = i[n].exist;
                        if (!i[n].option && !u(o) && null == t.id) {
                            i[n].option = t;
                            break
                        }
                    }
                    n >= i.length && i.push({
                        option: t
                    })
                }
            }), i
        }

        function l(t) {
            var e = x.createHashMap();
            w(t, function (t, i) {
                var n = t.exist;
                n && e.set(n.id, t)
            }), w(t, function (t, i) {
                var n = t.option;
                x.assert(!n || null == n.id || !e.get(n.id) || e.get(n.id) === t, "id duplicates: " + (n && n.id)), n && null != n.id && e.set(n.id, t), !t.keyInfo && (t.keyInfo = {})
            }), w(t, function (t, i) {
                var n = t.exist,
                    o = t.option,
                    a = t.keyInfo;
                if (S(o)) {
                    if (a.name = null != o.name ? o.name + "" : n ? n.name : k + i, n) a.id = n.id;
                    else if (null != o.id) a.id = o.id + "";
                    else {
                        var r = 0;
                        do {
                            a.id = "\0" + a.name + "\0" + r++
                        } while (e.get(a.id))
                    }
                    e.set(a.id, t)
                }
            })
        }

        function d(t) {
            var e = t.name;
            return !(!e || !e.indexOf(k))
        }

        function u(t) {
            return S(t) && t.id && 0 === (t.id + "").indexOf("\0_ec_\0")
        }

        function c(t, e) {
            function i(t, e, i) {
                for (var o = 0, a = t.length; o < a; o++)
                    for (var r = t[o].seriesId, s = n(t[o].dataIndex), l = i && i[r], d = 0, u = s.length; d < u; d++) {
                        var c = s[d];
                        l && l[c] ? l[c] = null : (e[r] || (e[r] = {}))[c] = 1
                    }
            }

            function o(t, e) {
                var i = [];
                for (var n in t)
                    if (t.hasOwnProperty(n) && null != t[n])
                        if (e) i.push(+n);
                        else {
                            var a = o(t[n], !0);
                            a.length && i.push({
                                seriesId: n,
                                dataIndex: a
                            })
                        }
                return i
            }

            var a = {},
                r = {};
            return i(t || [], a), i(e || [], r, a), [o(a), o(r)]
        }

        function h(t, e) {
            return null != e.dataIndexInside ? e.dataIndexInside : null != e.dataIndex ? x.isArray(e.dataIndex) ? x.map(e.dataIndex, function (e) {
                return t.indexOfRawIndex(e)
            }) : t.indexOfRawIndex(e.dataIndex) : null != e.name ? x.isArray(e.name) ? x.map(e.name, function (e) {
                return t.indexOfName(e)
            }) : t.indexOfName(e.name) : void 0
        }

        function f() {
            var t = "__\0ec_inner_" + T++ + "_" + Math.random().toFixed(5);
            return function (e) {
                return e[t] || (e[t] = {})
            }
        }

        function p(t, e, i) {
            if (x.isString(e)) {
                var n = {};
                n[e + "Index"] = 0, e = n
            }
            var o = i && i.defaultMainType;
            !o || g(e, o + "Index") || g(e, o + "Id") || g(e, o + "Name") || (e[o + "Index"] = 0);
            var a = {};
            return w(e, function (n, o) {
                var n = e[o];
                if ("dataIndex" === o || "dataIndexInside" === o) return void (a[o] = n);
                var r = o.match(/^(\w+)(Index|Id|Name)$/) || [],
                    s = r[1],
                    l = (r[2] || "").toLowerCase();
                if (!(!s || !l || null == n || "index" === l && "none" === n || i && i.includeMainTypes && x.indexOf(i.includeMainTypes, s) < 0)) {
                    var d = {
                        mainType: s
                    };
                    "index" === l && "all" === n || (d[l] = n);
                    var u = t.queryComponents(d);
                    a[s + "Models"] = u, a[s + "Model"] = u[0]
                }
            }), a
        }

        function g(t, e) {
            return t && t.hasOwnProperty(e)
        }

        function v(t, e, i) {
            t.setAttribute ? t.setAttribute(e, i) : t[e] = i
        }

        function m(t, e) {
            return t.getAttribute ? t.getAttribute(e) : t[e]
        }

        function _(t) {
            return "auto" === t ? b.domSupported ? "html" : "richText" : t || "html"
        }

        function y(t, e) {
            var i = x.createHashMap(),
                n = [];
            return x.each(t, function (t) {
                var o = e(t);
                (i.get(o) || (n.push(o), i.set(o, []))).push(t)
            }), {
                keys: n,
                buckets: i
            }
        }

        var x = i(630),
            b = i(637),
            w = x.each,
            S = x.isObject,
            C = x.isArray,
            k = "series\0",
            I = ["fontStyle", "fontWeight", "fontSize", "fontFamily", "rich", "tag", "color", "textBorderColor", "textBorderWidth", "width", "height", "lineHeight", "align", "verticalAlign", "baseline", "shadowColor", "shadowBlur", "shadowOffsetX", "shadowOffsetY", "textShadowColor", "textShadowBlur", "textShadowOffsetX", "textShadowOffsetY", "backgroundColor", "borderColor", "borderWidth", "borderRadius", "padding"],
            T = 0;
        e.normalizeToArray = n, e.defaultEmphasis = o, e.TEXT_STYLE_OPTIONS = I, e.getDataItemValue = a, e.isDataItemOption = r, e.mappingToExists = s, e.makeIdAndName = l, e.isNameSpecified = d, e.isIdInner = u, e.compressBatches = c, e.queryDataIndex = h, e.makeInner = f, e.parseFinder = p, e.setAttribute = v, e.getAttribute = m, e.getTooltipRenderMode = _, e.groupData = y
    }, function (t, e, i) {
        function n(t) {
            return t.replace(/^\s+|\s+$/g, "")
        }

        function o(t, e, i, n) {
            var o = e[1] - e[0],
                a = i[1] - i[0];
            if (0 === o) return 0 === a ? i[0] : (i[0] + i[1]) / 2;
            if (n)
                if (o > 0) {
                    if (t <= e[0]) return i[0];
                    if (t >= e[1]) return i[1]
                } else {
                    if (t >= e[0]) return i[0];
                    if (t <= e[1]) return i[1]
                }
            else {
                if (t === e[0]) return i[0];
                if (t === e[1]) return i[1]
            }
            return (t - e[0]) / o * a + i[0]
        }

        function a(t, e) {
            switch (t) {
                case "center":
                case "middle":
                    t = "50%";
                    break;
                case "left":
                case "top":
                    t = "0%";
                    break;
                case "right":
                case "bottom":
                    t = "100%"
            }
            return "string" == typeof t ? n(t).match(/%$/) ? parseFloat(t) / 100 * e : parseFloat(t) : null == t ? NaN : +t
        }

        function r(t, e, i) {
            return null == e && (e = 10), e = Math.min(Math.max(0, e), 20), t = (+t).toFixed(e), i ? t : +t
        }

        function s(t) {
            return t.sort(function (t, e) {
                return t - e
            }), t
        }

        function l(t) {
            if (t = +t, isNaN(t)) return 0;
            for (var e = 1, i = 0; Math.round(t * e) / e !== t;) e *= 10, i++;
            return i
        }

        function d(t) {
            var e = t.toString(),
                i = e.indexOf("e");
            if (i > 0) {
                var n = +e.slice(i + 1);
                return n < 0 ? -n : 0
            }
            var o = e.indexOf(".");
            return o < 0 ? 0 : e.length - 1 - o
        }

        function u(t, e) {
            var i = Math.log,
                n = Math.LN10,
                o = Math.floor(i(t[1] - t[0]) / n),
                a = Math.round(i(Math.abs(e[1] - e[0])) / n),
                r = Math.min(Math.max(-o + a, 0), 20);
            return isFinite(r) ? r : 20
        }

        function c(t, e, i) {
            if (!t[e]) return 0;
            var n = b.reduce(t, function (t, e) {
                return t + (isNaN(e) ? 0 : e)
            }, 0);
            if (0 === n) return 0;
            for (var o = Math.pow(10, i), a = b.map(t, function (t) {
                return (isNaN(t) ? 0 : t) / n * o * 100
            }), r = 100 * o, s = b.map(a, function (t) {
                return Math.floor(t)
            }), l = b.reduce(s, function (t, e) {
                return t + e
            }, 0), d = b.map(a, function (t, e) {
                return t - s[e]
            }); l < r;) {
                for (var u = Number.NEGATIVE_INFINITY, c = null, h = 0, f = d.length; h < f; ++h) d[h] > u && (u = d[h], c = h);
                ++s[c], d[c] = 0, ++l
            }
            return s[e] / o
        }

        function h(t) {
            var e = 2 * Math.PI;
            return (t % e + e) % e
        }

        function f(t) {
            return t > -w && t < w
        }

        function p(t) {
            if (t instanceof Date) return t;
            if ("string" == typeof t) {
                var e = S.exec(t);
                if (!e) return new Date(NaN);
                if (e[8]) {
                    var i = +e[4] || 0;
                    return "Z" !== e[8].toUpperCase() && (i -= e[8].slice(0, 3)), new Date(Date.UTC(+e[1], +(e[2] || 1) - 1, +e[3] || 1, i, +(e[5] || 0), +e[6] || 0, +e[7] || 0))
                }
                return new Date(+e[1], +(e[2] || 1) - 1, +e[3] || 1, +e[4] || 0, +(e[5] || 0), +e[6] || 0, +e[7] || 0)
            }
            return null == t ? new Date(NaN) : new Date(Math.round(t))
        }

        function g(t) {
            return Math.pow(10, v(t))
        }

        function v(t) {
            if (0 === t) return 0;
            var e = Math.floor(Math.log(t) / Math.LN10);
            return t / Math.pow(10, e) >= 10 && e++, e
        }

        function m(t, e) {
            var i, n = v(t),
                o = Math.pow(10, n),
                a = t / o;
            return i = e ? a < 1.5 ? 1 : a < 2.5 ? 2 : a < 4 ? 3 : a < 7 ? 5 : 10 : a < 1 ? 1 : a < 2 ? 2 : a < 3 ? 3 : a < 5 ? 5 : 10, t = i * o, n >= -20 ? +t.toFixed(n < 0 ? -n : 0) : t
        }

        function _(t, e) {
            var i = (t.length - 1) * e + 1,
                n = Math.floor(i),
                o = +t[n - 1],
                a = i - n;
            return a ? o + a * (t[n] - o) : o
        }

        function y(t) {
            function e(t, i, n) {
                return t.interval[n] < i.interval[n] || t.interval[n] === i.interval[n] && (t.close[n] - i.close[n] == (n ? -1 : 1) || !n && e(t, i, 1))
            }

            t.sort(function (t, i) {
                return e(t, i, 0) ? -1 : 1
            });
            for (var i = -1 / 0, n = 1, o = 0; o < t.length;) {
                for (var a = t[o].interval, r = t[o].close, s = 0; s < 2; s++) a[s] <= i && (a[s] = i, r[s] = s ? 1 : 1 - n), i = a[s], n = r[s];
                a[0] === a[1] && r[0] * r[1] != 1 ? t.splice(o, 1) : o++
            }
            return t
        }

        function x(t) {
            return t - parseFloat(t) >= 0
        }

        var b = i(630),
            w = 1e-4,
            S = /^(?:(\d{4})(?:[-\/](\d{1,2})(?:[-\/](\d{1,2})(?:[T ](\d{1,2})(?::(\d\d)(?::(\d\d)(?:[.,](\d+))?)?)?(Z|[\+\-]\d\d:?\d\d)?)?)?)?)?$/;
        e.linearMap = o, e.parsePercent = a, e.round = r, e.asc = s, e.getPrecision = l, e.getPrecisionSafe = d, e.getPixelPrecision = u, e.getPercentWithPrecision = c, e.MAX_SAFE_INTEGER = 9007199254740991, e.remRadian = h, e.isRadianAroundZero = f, e.parseDate = p, e.quantity = g, e.quantityExponent = v, e.nice = m, e.quantile = _, e.reformIntervals = y, e.isNumeric = x
    }, function (t, e, i) {
        function n(t) {
            o.call(this, t), this.path = null
        }

        var o = i(664),
            a = i(630),
            r = i(662),
            s = i(888),
            l = i(721),
            d = l.prototype.getCanvasPattern,
            u = Math.abs,
            c = new r(!0);
        n.prototype = {
            constructor: n,
            type: "path",
            __dirtyPath: !0,
            strokeContainThreshold: 5,
            segmentIgnoreThreshold: 0,
            subPixelOptimize: !1,
            brush: function (t, e) {
                var i = this.style,
                    n = this.path || c,
                    o = i.hasStroke(),
                    a = i.hasFill(),
                    r = i.fill,
                    s = i.stroke,
                    l = a && !!r.colorStops,
                    u = o && !!s.colorStops,
                    h = a && !!r.image,
                    f = o && !!s.image;
                if (i.bind(t, this, e), this.setTransform(t), this.__dirty) {
                    var p;
                    l && (p = p || this.getBoundingRect(), this._fillGradient = i.getGradient(t, r, p)), u && (p = p || this.getBoundingRect(), this._strokeGradient = i.getGradient(t, s, p))
                }
                l ? t.fillStyle = this._fillGradient : h && (t.fillStyle = d.call(r, t)), u ? t.strokeStyle = this._strokeGradient : f && (t.strokeStyle = d.call(s, t));
                var g = i.lineDash,
                    v = i.lineDashOffset,
                    m = !!t.setLineDash,
                    _ = this.getGlobalScale();
                if (n.setScale(_[0], _[1], this.segmentIgnoreThreshold), this.__dirtyPath || g && !m && o ? (n.beginPath(t), g && !m && (n.setLineDash(g), n.setLineDashOffset(v)), this.buildPath(n, this.shape, !1), this.path && (this.__dirtyPath = !1)) : (t.beginPath(), this.path.rebuildPath(t)), a)
                    if (null != i.fillOpacity) {
                        var y = t.globalAlpha;
                        t.globalAlpha = i.fillOpacity * i.opacity, n.fill(t), t.globalAlpha = y
                    } else n.fill(t);
                if (g && m && (t.setLineDash(g), t.lineDashOffset = v), o)
                    if (null != i.strokeOpacity) {
                        var y = t.globalAlpha;
                        t.globalAlpha = i.strokeOpacity * i.opacity, n.stroke(t), t.globalAlpha = y
                    } else n.stroke(t);
                g && m && t.setLineDash([]), null != i.text && (this.restoreTransform(t), this.drawRectText(t, this.getBoundingRect()))
            },
            buildPath: function (t, e, i) {
            },
            createPathProxy: function () {
                this.path = new r
            },
            getBoundingRect: function () {
                var t = this._rect,
                    e = this.style,
                    i = !t;
                if (i) {
                    var n = this.path;
                    n || (n = this.path = new r), this.__dirtyPath && (n.beginPath(), this.buildPath(n, this.shape, !1)), t = n.getBoundingRect()
                }
                if (this._rect = t, e.hasStroke()) {
                    var o = this._rectWithStroke || (this._rectWithStroke = t.clone());
                    if (this.__dirty || i) {
                        o.copy(t);
                        var a = e.lineWidth,
                            s = e.strokeNoScale ? this.getLineScale() : 1;
                        e.hasFill() || (a = Math.max(a, this.strokeContainThreshold || 4)), s > 1e-10 && (o.width += a / s, o.height += a / s, o.x -= a / s / 2, o.y -= a / s / 2)
                    }
                    return o
                }
                return t
            },
            contain: function (t, e) {
                var i = this.transformCoordToLocal(t, e),
                    n = this.getBoundingRect(),
                    o = this.style;
                if (t = i[0], e = i[1], n.contain(t, e)) {
                    var a = this.path.data;
                    if (o.hasStroke()) {
                        var r = o.lineWidth,
                            l = o.strokeNoScale ? this.getLineScale() : 1;
                        if (l > 1e-10 && (o.hasFill() || (r = Math.max(r, this.strokeContainThreshold)), s.containStroke(a, r / l, t, e))) return !0
                    }
                    if (o.hasFill()) return s.contain(a, t, e)
                }
                return !1
            },
            dirty: function (t) {
                null == t && (t = !0), t && (this.__dirtyPath = t, this._rect = null), this.__dirty = this.__dirtyText = !0, this.__zr && this.__zr.refresh(), this.__clipTarget && this.__clipTarget.dirty()
            },
            animateShape: function (t) {
                return this.animate("shape", t)
            },
            attrKV: function (t, e) {
                "shape" === t ? (this.setShape(e), this.__dirtyPath = !0, this._rect = null) : o.prototype.attrKV.call(this, t, e)
            },
            setShape: function (t, e) {
                var i = this.shape;
                if (i) {
                    if (a.isObject(t))
                        for (var n in t) t.hasOwnProperty(n) && (i[n] = t[n]);
                    else i[t] = e;
                    this.dirty(!0)
                }
                return this
            },
            getLineScale: function () {
                var t = this.transform;
                return t && u(t[0] - 1) > 1e-10 && u(t[3] - 1) > 1e-10 ? Math.sqrt(u(t[0] * t[3] - t[2] * t[1])) : 1
            }
        }, n.extend = function (t) {
            var e = function (e) {
                n.call(this, e), t.style && this.style.extendFrom(t.style, !1);
                var i = t.shape;
                if (i) {
                    this.shape = this.shape || {};
                    var o = this.shape;
                    for (var a in i) !o.hasOwnProperty(a) && i.hasOwnProperty(a) && (o[a] = i[a])
                }
                t.init && t.init.call(this, e)
            };
            a.inherits(e, n);
            for (var i in t) "style" !== i && "shape" !== i && (e.prototype[i] = t[i]);
            return e
        }, a.inherits(n, o);
        var h = n;
        t.exports = h
    }, function (t, e, i) {
        (function (t) {
            var i;
            "undefined" != typeof window ? i = window.__DEV__ : void 0 !== t && (i = t.__DEV__), void 0 === i && (i = !0);
            var n = i;
            e.__DEV__ = n
        }).call(e, i(64))
    }, function (t, e) {
        function i(t, e) {
            var i = new S(2);
            return null == t && (t = 0), null == e && (e = 0), i[0] = t, i[1] = e, i
        }

        function n(t, e) {
            return t[0] = e[0], t[1] = e[1], t
        }

        function o(t) {
            var e = new S(2);
            return e[0] = t[0], e[1] = t[1], e
        }

        function a(t, e, i) {
            return t[0] = e, t[1] = i, t
        }

        function r(t, e, i) {
            return t[0] = e[0] + i[0], t[1] = e[1] + i[1], t
        }

        function s(t, e, i, n) {
            return t[0] = e[0] + i[0] * n, t[1] = e[1] + i[1] * n, t
        }

        function l(t, e, i) {
            return t[0] = e[0] - i[0], t[1] = e[1] - i[1], t
        }

        function d(t) {
            return Math.sqrt(u(t))
        }

        function u(t) {
            return t[0] * t[0] + t[1] * t[1]
        }

        function c(t, e, i) {
            return t[0] = e[0] * i[0], t[1] = e[1] * i[1], t
        }

        function h(t, e, i) {
            return t[0] = e[0] / i[0], t[1] = e[1] / i[1], t
        }

        function f(t, e) {
            return t[0] * e[0] + t[1] * e[1]
        }

        function p(t, e, i) {
            return t[0] = e[0] * i, t[1] = e[1] * i, t
        }

        function g(t, e) {
            var i = d(e);
            return 0 === i ? (t[0] = 0, t[1] = 0) : (t[0] = e[0] / i, t[1] = e[1] / i), t
        }

        function v(t, e) {
            return Math.sqrt((t[0] - e[0]) * (t[0] - e[0]) + (t[1] - e[1]) * (t[1] - e[1]))
        }

        function m(t, e) {
            return (t[0] - e[0]) * (t[0] - e[0]) + (t[1] - e[1]) * (t[1] - e[1])
        }

        function _(t, e) {
            return t[0] = -e[0], t[1] = -e[1], t
        }

        function y(t, e, i, n) {
            return t[0] = e[0] + n * (i[0] - e[0]), t[1] = e[1] + n * (i[1] - e[1]), t
        }

        function x(t, e, i) {
            var n = e[0],
                o = e[1];
            return t[0] = i[0] * n + i[2] * o + i[4], t[1] = i[1] * n + i[3] * o + i[5], t
        }

        function b(t, e, i) {
            return t[0] = Math.min(e[0], i[0]), t[1] = Math.min(e[1], i[1]), t
        }

        function w(t, e, i) {
            return t[0] = Math.max(e[0], i[0]), t[1] = Math.max(e[1], i[1]), t
        }

        var S = "undefined" == typeof Float32Array ? Array : Float32Array,
            C = d,
            k = u,
            I = v,
            T = m;
        e.create = i, e.copy = n, e.clone = o, e.set = a, e.add = r, e.scaleAndAdd = s, e.sub = l, e.len = d, e.length = C, e.lenSquare = u, e.lengthSquare = k, e.mul = c, e.div = h, e.dot = f, e.scale = p, e.normalize = g, e.distance = v, e.dist = I, e.distanceSquare = m, e.distSquare = T, e.negate = _, e.lerp = y, e.applyTransform = x, e.min = b, e.max = w
    }, function (t, e, i) {
        function n(t, e, i, n) {
            i < 0 && (t += i, i = -i), n < 0 && (e += n, n = -n), this.x = t, this.y = e, this.width = i, this.height = n
        }

        var o = i(635),
            a = i(657),
            r = o.applyTransform,
            s = Math.min,
            l = Math.max;
        n.prototype = {
            constructor: n,
            union: function (t) {
                var e = s(t.x, this.x),
                    i = s(t.y, this.y);
                this.width = l(t.x + t.width, this.x + this.width) - e, this.height = l(t.y + t.height, this.y + this.height) - i, this.x = e, this.y = i
            },
            applyTransform: function () {
                var t = [],
                    e = [],
                    i = [],
                    n = [];
                return function (o) {
                    if (o) {
                        t[0] = i[0] = this.x, t[1] = n[1] = this.y, e[0] = n[0] = this.x + this.width, e[1] = i[1] = this.y + this.height, r(t, t, o), r(e, e, o), r(i, i, o), r(n, n, o), this.x = s(t[0], e[0], i[0], n[0]), this.y = s(t[1], e[1], i[1], n[1]);
                        var a = l(t[0], e[0], i[0], n[0]),
                            d = l(t[1], e[1], i[1], n[1]);
                        this.width = a - this.x, this.height = d - this.y
                    }
                }
            }(),
            calculateTransform: function (t) {
                var e = this,
                    i = t.width / e.width,
                    n = t.height / e.height,
                    o = a.create();
                return a.translate(o, o, [-e.x, -e.y]), a.scale(o, o, [i, n]), a.translate(o, o, [t.x, t.y]), o
            },
            intersect: function (t) {
                if (!t) return !1;
                t instanceof n || (t = n.create(t));
                var e = this,
                    i = e.x,
                    o = e.x + e.width,
                    a = e.y,
                    r = e.y + e.height,
                    s = t.x,
                    l = t.x + t.width,
                    d = t.y,
                    u = t.y + t.height;
                return !(o < s || l < i || r < d || u < a)
            },
            contain: function (t, e) {
                var i = this;
                return t >= i.x && t <= i.x + i.width && e >= i.y && e <= i.y + i.height
            },
            clone: function () {
                return new n(this.x, this.y, this.width, this.height)
            },
            copy: function (t) {
                this.x = t.x, this.y = t.y, this.width = t.width, this.height = t.height
            },
            plain: function () {
                return {
                    x: this.x,
                    y: this.y,
                    width: this.width,
                    height: this.height
                }
            }
        }, n.create = function (t) {
            return new n(t.x, t.y, t.width, t.height)
        };
        var d = n;
        t.exports = d
    }, function (t, e) {
        var i = {};
        i = "object" == typeof wx && "function" == typeof wx.getSystemInfoSync ? {
            browser: {},
            os: {},
            node: !1,
            wxa: !0,
            canvasSupported: !0,
            svgSupported: !1,
            touchEventsSupported: !0,
            domSupported: !1
        } : "undefined" == typeof document && "undefined" != typeof self ? {
            browser: {},
            os: {},
            node: !1,
            worker: !0,
            canvasSupported: !0,
            domSupported: !1
        } : "undefined" == typeof navigator ? {
            browser: {},
            os: {},
            node: !0,
            worker: !1,
            canvasSupported: !0,
            svgSupported: !0,
            domSupported: !1
        } : function (t) {
            var e = {},
                i = {},
                n = t.match(/Firefox\/([\d.]+)/),
                o = t.match(/MSIE\s([\d.]+)/) || t.match(/Trident\/.+?rv:(([\d.]+))/),
                a = t.match(/Edge\/([\d.]+)/),
                r = /micromessenger/i.test(t);
            return n && (i.firefox = !0, i.version = n[1]), o && (i.ie = !0, i.version = o[1]), a && (i.edge = !0, i.version = a[1]), r && (i.weChat = !0), {
                browser: i,
                os: e,
                node: !1,
                canvasSupported: !!document.createElement("canvas").getContext,
                svgSupported: "undefined" != typeof SVGRect,
                touchEventsSupported: "ontouchstart" in window && !i.ie && !i.edge,
                pointerEventsSupported: "onpointerdown" in window && (i.edge || i.ie && i.version >= 11),
                domSupported: "undefined" != typeof document
            }
        }(navigator.userAgent);
        var n = i;
        t.exports = n
    }, function (t, e, i) {
        function n(t) {
            return rt.extend(t)
        }

        function o(t, e) {
            return it.extendFromString(t, e)
        }

        function a(t, e) {
            Et[t] = e
        }

        function r(t) {
            if (Et.hasOwnProperty(t)) return Et[t]
        }

        function s(t, e, i, n) {
            var o = it.createFromString(t, e);
            return i && ("center" === n && (i = d(i, o.getBoundingRect())), u(o, i)), o
        }

        function l(t, e, i) {
            var n = new lt({
                style: {
                    image: t,
                    x: e.x,
                    y: e.y,
                    width: e.width,
                    height: e.height
                },
                onload: function (t) {
                    if ("center" === i) {
                        var o = {
                            width: t.width,
                            height: t.height
                        };
                        n.setStyle(d(e, o))
                    }
                }
            });
            return n
        }

        function d(t, e) {
            var i, n = e.width / e.height,
                o = t.height * n;
            return o <= t.width ? i = t.height : (o = t.width, i = o / n), {
                x: t.x + t.width / 2 - o / 2,
                y: t.y + t.height / 2 - i / 2,
                width: o,
                height: i
            }
        }

        function u(t, e) {
            if (t.applyTransform) {
                var i = t.getBoundingRect(),
                    n = i.calculateTransform(e);
                t.applyTransform(n)
            }
        }

        function c(t) {
            return kt.subPixelOptimizeLine(t.shape, t.shape, t.style), t
        }

        function h(t) {
            return kt.subPixelOptimizeRect(t.shape, t.shape, t.style), t
        }

        function f(t) {
            return null != t && "none" !== t
        }

        function p(t) {
            if ("string" != typeof t) return t;
            var e = Bt.get(t);
            return e || (e = nt.lift(t, -.1), Ft < 1e4 && (Bt.set(t, e), Ft++)), e
        }

        function g(t) {
            if (t.__hoverStlDirty) {
                t.__hoverStlDirty = !1;
                var e = t.__hoverStl;
                if (!e) return void (t.__cachedNormalStl = t.__cachedNormalZ2 = null);
                var i = t.__cachedNormalStl = {};
                t.__cachedNormalZ2 = t.z2;
                var n = t.style;
                for (var o in e) null != e[o] && (i[o] = n[o]);
                i.fill = n.fill, i.stroke = n.stroke
            }
        }

        function v(t) {
            var e = t.__hoverStl;
            if (e && !t.__highlighted) {
                var i = t.__zr,
                    n = t.useHoverLayer && i && "canvas" === i.painter.type;
                if (t.__highlighted = n ? "layer" : "plain", !(t.isGroup || !i && t.useHoverLayer)) {
                    var o = t,
                        a = t.style;
                    n && (o = i.addHover(t), a = o.style), F(a), n || g(o), a.extendFrom(e), m(a, e, "fill"), m(a, e, "stroke"), B(a), n || (t.dirty(!1), t.z2 += Mt)
                }
            }
        }

        function m(t, e, i) {
            !f(e[i]) && f(t[i]) && (t[i] = p(t[i]))
        }

        function _(t) {
            var e = t.__highlighted;
            if (e && (t.__highlighted = !1, !t.isGroup))
                if ("layer" === e) t.__zr && t.__zr.removeHover(t);
                else {
                    var i = t.style,
                        n = t.__cachedNormalStl;
                    n && (F(i), t.setStyle(n), B(i));
                    var o = t.__cachedNormalZ2;
                    null != o && t.z2 - o === Mt && (t.z2 = o)
                }
        }

        function y(t, e, i) {
            var n, o = Pt,
                a = Pt;
            t.__highlighted && (o = Lt, n = !0), e(t, i), t.__highlighted && (a = Lt, n = !0), t.isGroup && t.traverse(function (t) {
                !t.isGroup && e(t, i)
            }), n && t.__highDownOnUpdate && t.__highDownOnUpdate(o, a)
        }

        function x(t, e) {
            e = t.__hoverStl = !1 !== e && (t.hoverStyle || e || {}), t.__hoverStlDirty = !0, t.__highlighted && (t.__cachedNormalStl = null, _(t), v(t))
        }

        function b(t) {
            !k(this, t) && !this.__highByOuter && y(this, v)
        }

        function w(t) {
            !k(this, t) && !this.__highByOuter && y(this, _)
        }

        function S(t) {
            this.__highByOuter |= 1 << (t || 0), y(this, v)
        }

        function C(t) {
            !(this.__highByOuter &= ~(1 << (t || 0))) && y(this, _)
        }

        function k(t, e) {
            return t.__highDownSilentOnTouch && e.zrByTouch
        }

        function I(t, e) {
            T(t, !0), y(t, x, e)
        }

        function T(t, e) {
            var i = !1 === e;
            if (t.__highDownSilentOnTouch = t.highDownSilentOnTouch, t.__highDownOnUpdate = t.highDownOnUpdate, !i || t.__highDownDispatcher) {
                var n = i ? "off" : "on";
                t[n]("mouseover", b)[n]("mouseout", w), t[n]("emphasis", S)[n]("normal", C), t.__highByOuter = t.__highByOuter || 0, t.__highDownDispatcher = !i
            }
        }

        function D(t) {
            return !(!t || !t.__highDownDispatcher)
        }

        function M(t) {
            var e = Rt[t];
            return null == e && Ot <= 32 && (e = Rt[t] = Ot++), e
        }

        function A(t, e, i, n, o, a, r) {
            o = o || Dt;
            var s, l = o.labelFetcher,
                d = o.labelDataIndex,
                u = o.labelDimIndex,
                c = o.labelProp,
                h = i.getShallow("show"),
                f = n.getShallow("show");
            (h || f) && (l && (s = l.getFormattedLabel(d, "normal", null, u, c)), null == s && (s = et.isFunction(o.defaultText) ? o.defaultText(d, o) : o.defaultText));
            var p = h ? s : null,
                g = f ? et.retrieve2(l ? l.getFormattedLabel(d, "emphasis", null, u, c) : null, s) : null;
            null == p && null == g || (P(t, i, a, o), P(e, n, r, o, !0)), t.text = p, e.text = g
        }

        function L(t, e, i) {
            var n = t.style;
            e && (F(n), t.setStyle(e), B(n)), n = t.__hoverStl, i && n && (F(n), et.extend(n, i), B(n))
        }

        function P(t, e, i, n, o) {
            return R(t, e, n, o), i && et.extend(t, i), t
        }

        function O(t, e, i) {
            var n, o = {
                isRectText: !0
            };
            !1 === i ? n = !0 : o.autoColor = i, R(t, e, o, n)
        }

        function R(t, e, i, n) {
            if (i = i || Dt, i.isRectText) {
                var o;
                i.getTextPosition ? o = i.getTextPosition(e, n) : "outside" === (o = e.getShallow("position") || (n ? null : "inside")) && (o = "top"), t.textPosition = o, t.textOffset = e.getShallow("offset");
                var a = e.getShallow("rotate");
                null != a && (a *= Math.PI / 180), t.textRotation = a, t.textDistance = et.retrieve2(e.getShallow("distance"), n ? null : 5)
            }
            var r, s = e.ecModel,
                l = s && s.option.textStyle,
                d = E(e);
            if (d) {
                r = {};
                for (var u in d)
                    if (d.hasOwnProperty(u)) {
                        var c = e.getModel(["rich", u]);
                        z(r[u] = {}, c, l, i, n)
                    }
            }
            return t.rich = r, z(t, e, l, i, n, !0), i.forceRich && !i.textStyle && (i.textStyle = {}), t
        }

        function E(t) {
            for (var e; t && t !== t.ecModel;) {
                var i = (t.option || Dt).rich;
                if (i) {
                    e = e || {};
                    for (var n in i) i.hasOwnProperty(n) && (e[n] = 1)
                }
                t = t.parentModel
            }
            return e
        }

        function z(t, e, i, n, o, a) {
            i = !o && i || Dt, t.textFill = N(e.getShallow("color"), n) || i.color, t.textStroke = N(e.getShallow("textBorderColor"), n) || i.textBorderColor, t.textStrokeWidth = et.retrieve2(e.getShallow("textBorderWidth"), i.textBorderWidth), o || (a && (t.insideRollbackOpt = n, B(t)), null == t.textFill && (t.textFill = n.autoColor)), t.fontStyle = e.getShallow("fontStyle") || i.fontStyle, t.fontWeight = e.getShallow("fontWeight") || i.fontWeight, t.fontSize = e.getShallow("fontSize") || i.fontSize, t.fontFamily = e.getShallow("fontFamily") || i.fontFamily, t.textAlign = e.getShallow("align"), t.textVerticalAlign = e.getShallow("verticalAlign") || e.getShallow("baseline"), t.textLineHeight = e.getShallow("lineHeight"), t.textWidth = e.getShallow("width"), t.textHeight = e.getShallow("height"), t.textTag = e.getShallow("tag"), a && n.disableBox || (t.textBackgroundColor = N(e.getShallow("backgroundColor"), n), t.textPadding = e.getShallow("padding"), t.textBorderColor = N(e.getShallow("borderColor"), n), t.textBorderWidth = e.getShallow("borderWidth"), t.textBorderRadius = e.getShallow("borderRadius"), t.textBoxShadowColor = e.getShallow("shadowColor"), t.textBoxShadowBlur = e.getShallow("shadowBlur"), t.textBoxShadowOffsetX = e.getShallow("shadowOffsetX"), t.textBoxShadowOffsetY = e.getShallow("shadowOffsetY")), t.textShadowColor = e.getShallow("textShadowColor") || i.textShadowColor, t.textShadowBlur = e.getShallow("textShadowBlur") || i.textShadowBlur, t.textShadowOffsetX = e.getShallow("textShadowOffsetX") || i.textShadowOffsetX, t.textShadowOffsetY = e.getShallow("textShadowOffsetY") || i.textShadowOffsetY
        }

        function N(t, e) {
            return "auto" !== t ? t : e && e.autoColor ? e.autoColor : null
        }

        function B(t) {
            var e, i = t.textPosition,
                n = t.insideRollbackOpt;
            if (n && null == t.textFill) {
                var o = n.autoColor,
                    a = n.isRectText,
                    r = n.useInsideStyle,
                    s = !1 !== r && (!0 === r || a && i && "string" == typeof i && i.indexOf("inside") >= 0),
                    l = !s && null != o;
                (s || l) && (e = {
                    textFill: t.textFill,
                    textStroke: t.textStroke,
                    textStrokeWidth: t.textStrokeWidth
                }), s && (t.textFill = "#fff", null == t.textStroke && (t.textStroke = o, null == t.textStrokeWidth && (t.textStrokeWidth = 2))), l && (t.textFill = o)
            }
            t.insideRollback = e
        }

        function F(t) {
            var e = t.insideRollback;
            e && (t.textFill = e.textFill, t.textStroke = e.textStroke, t.textStrokeWidth = e.textStrokeWidth, t.insideRollback = null)
        }

        function V(t, e) {
            var i = e && e.getModel("textStyle");
            return et.trim([t.fontStyle || i && i.getShallow("fontStyle") || "", t.fontWeight || i && i.getShallow("fontWeight") || "", (t.fontSize || i && i.getShallow("fontSize") || 12) + "px", t.fontFamily || i && i.getShallow("fontFamily") || "sans-serif"].join(" "))
        }

        function H(t, e, i, n, o, a) {
            if ("function" == typeof o && (a = o, o = null), n && n.isAnimationEnabled()) {
                var r = t ? "Update" : "",
                    s = n.getShallow("animationDuration" + r),
                    l = n.getShallow("animationEasing" + r),
                    d = n.getShallow("animationDelay" + r);
                "function" == typeof d && (d = d(o, n.getAnimationDelayParams ? n.getAnimationDelayParams(e, o) : null)), "function" == typeof s && (s = s(o)), s > 0 ? e.animateTo(i, s, d || 0, l, a, !!a) : (e.stopAnimation(), e.attr(i), a && a())
            } else e.stopAnimation(), e.attr(i), a && a()
        }

        function q(t, e, i, n, o) {
            H(!0, t, e, i, n, o)
        }

        function W(t, e, i, n, o) {
            H(!1, t, e, i, n, o)
        }

        function U(t, e) {
            for (var i = ot.identity([]); t && t !== e;) ot.mul(i, t.getLocalTransform(), i), t = t.parent;
            return i
        }

        function j(t, e, i) {
            return e && !et.isArrayLike(e) && (e = st.getLocalTransform(e)), i && (e = ot.invert([], e)), at.applyTransform([], t, e)
        }

        function G(t, e, i) {
            var n = 0 === e[4] || 0 === e[5] || 0 === e[0] ? 1 : Math.abs(2 * e[4] / e[0]),
                o = 0 === e[4] || 0 === e[5] || 0 === e[2] ? 1 : Math.abs(2 * e[4] / e[2]),
                a = ["left" === t ? -n : "right" === t ? n : 0, "top" === t ? -o : "bottom" === t ? o : 0];
            return a = j(a, e, i), Math.abs(a[0]) > Math.abs(a[1]) ? a[0] > 0 ? "right" : "left" : a[1] > 0 ? "bottom" : "top"
        }

        function X(t, e, i, n) {
            function o(t) {
                var e = {
                    position: at.clone(t.position),
                    rotation: t.rotation
                };
                return t.shape && (e.shape = et.extend({}, t.shape)), e
            }

            if (t && e) {
                var a = function (t) {
                    var e = {};
                    return t.traverse(function (t) {
                        !t.isGroup && t.anid && (e[t.anid] = t)
                    }), e
                }(t);
                e.traverse(function (t) {
                    if (!t.isGroup && t.anid) {
                        var e = a[t.anid];
                        if (e) {
                            var n = o(t);
                            t.attr(o(e)), q(t, n, i, t.dataIndex)
                        }
                    }
                })
            }
        }

        function Y(t, e) {
            return et.map(t, function (t) {
                var i = t[0];
                i = It(i, e.x), i = Tt(i, e.x + e.width);
                var n = t[1];
                return n = It(n, e.y), n = Tt(n, e.y + e.height), [i, n]
            })
        }

        function $(t, e) {
            var i = It(t.x, e.x),
                n = Tt(t.x + t.width, e.x + e.width),
                o = It(t.y, e.y),
                a = Tt(t.y + t.height, e.y + e.height);
            if (n >= i && a >= o) return {
                x: i,
                y: o,
                width: n - i,
                height: a - o
            }
        }

        function Z(t, e, i) {
            e = et.extend({
                rectHover: !0
            }, e);
            var n = e.style = {
                strokeNoScale: !0
            };
            if (i = i || {
                x: -1,
                y: -1,
                width: 2,
                height: 2
            }, t) return 0 === t.indexOf("image://") ? (n.image = t.slice(8), et.defaults(n, i), new lt(e)) : s(t.replace("path://", ""), e, i, "center")
        }

        function Q(t, e, i, n, o) {
            for (var a = 0, r = o[o.length - 1]; a < o.length; a++) {
                var s = o[a];
                if (K(t, e, i, n, s[0], s[1], r[0], r[1])) return !0;
                r = s
            }
        }

        function K(t, e, i, n, o, a, r, s) {
            var l = i - t,
                d = n - e,
                u = r - o,
                c = s - a,
                h = J(u, c, l, d);
            if (tt(h)) return !1;
            var f = t - o,
                p = e - a,
                g = J(f, p, l, d) / h;
            if (g < 0 || g > 1) return !1;
            var v = J(f, p, u, c) / h;
            return !(v < 0 || v > 1)
        }

        function J(t, e, i, n) {
            return t * n - i * e
        }

        function tt(t) {
            return t <= 1e-6 && t >= -1e-6
        }

        var et = i(630),
            it = i(733),
            nt = i(666),
            ot = i(657),
            at = i(635),
            rt = i(633),
            st = i(732),
            lt = i(693);
        e.Image = lt;
        var dt = i(656);
        e.Group = dt;
        var ut = i(722);
        e.Text = ut;
        var ct = i(727);
        e.Circle = ct;
        var ht = i(906);
        e.Sector = ht;
        var ft = i(905);
        e.Ring = ft;
        var pt = i(729);
        e.Polygon = pt;
        var gt = i(730);
        e.Polyline = gt;
        var vt = i(731);
        e.Rect = vt;
        var mt = i(728);
        e.Line = mt;
        var _t = i(903);
        e.BezierCurve = _t;
        var yt = i(902);
        e.Arc = yt;
        var xt = i(895);
        e.CompoundPath = xt;
        var bt = i(720);
        e.LinearGradient = bt;
        var wt = i(897);
        e.RadialGradient = wt;
        var St = i(636);
        e.BoundingRect = St;
        var Ct = i(896);
        e.IncrementalDisplayable = Ct;
        var kt = i(696),
            It = Math.max,
            Tt = Math.min,
            Dt = {},
            Mt = 1,
            At = {
                color: "textFill",
                textBorderColor: "textStroke",
                textBorderWidth: "textStrokeWidth"
            },
            Lt = "emphasis",
            Pt = "normal",
            Ot = 1,
            Rt = {},
            Et = {},
            zt = it.mergePath,
            Nt = kt.subPixelOptimize,
            Bt = et.createHashMap(),
            Ft = 0;
        a("circle", ct), a("sector", ht), a("ring", ft), a("polygon", pt), a("polyline", gt), a("rect", vt), a("line", mt), a("bezierCurve", _t), a("arc", yt), e.Z2_EMPHASIS_LIFT = Mt, e.CACHED_LABEL_STYLE_PROPERTIES = At, e.extendShape = n, e.extendPath = o, e.registerShape = a, e.getShapeClass = r, e.makePath = s, e.makeImage = l, e.mergePath = zt, e.resizePath = u, e.subPixelOptimizeLine = c, e.subPixelOptimizeRect = h, e.subPixelOptimize = Nt, e.setElementHoverStyle = x, e.setHoverStyle = I, e.setAsHighDownDispatcher = T, e.isHighDownDispatcher = D, e.getHighlightDigit = M, e.setLabelStyle = A, e.modifyLabelStyle = L, e.setTextStyle = P, e.setText = O, e.getFont = V, e.updateProps = q, e.initProps = W, e.getTransform = U, e.applyTransform = j, e.transformDirection = G, e.groupTransition = X, e.clipPointsByRect = Y, e.clipRectByRect = $, e.createIcon = Z, e.linePolygonIntersect = Q, e.lineLineIntersect = K
    }, function (t, e, i) {
        function n(t, e) {
            return function (i, n, o) {
                if (!e && this._disposed) return void this.id;
                i = i && i.toLowerCase(), it.prototype[t].call(this, i, n, o)
            }
        }

        function o() {
            it.call(this)
        }

        function a(t, e, i) {
            function n(t, e) {
                return t.__prio - e.__prio
            }

            i = i || {}, "string" == typeof e && (e = Gt[e]), this.id, this.group, this._dom = t;
            var a = this._zr = Q.init(t, {
                renderer: i.renderer || "canvas",
                devicePixelRatio: i.devicePixelRatio,
                width: i.width,
                height: i.height
            });
            this._throttledZrFlush = vt(K.bind(a.flush, a), 17);
            var e = K.clone(e);
            e && st(e, !0), this._theme = e, this._chartsViews = [], this._chartsMap = {}, this._componentsViews = [], this._componentsMap = {}, this._coordSysMgr = new at;
            var r = this._api = S(this);
            et(jt, n), et(qt, n), this._scheduler = new xt(this, r, qt, jt), it.call(this, this._ecEventProcessor = new C), this._messageCenter = new o, this._initEvents(), this.resize = K.bind(this.resize, this), this._pendingActions = [], a.animation.on("frame", this._onframe, this), f(a, this), K.setAsPrimitive(this)
        }

        function r(t, e, i) {
            if (this._disposed) return void this.id;
            var n, o = this._model,
                a = this._coordSysMgr.getCoordinateSystems();
            e = pt.parseFinder(o, e);
            for (var r = 0; r < a.length; r++) {
                var s = a[r];
                if (s[t] && null != (n = s[t](o, e, i))) return n
            }
        }

        function s(t) {
            var e = t._model,
                i = t._scheduler;
            i.restorePipelines(e), i.prepareStageTasks(), p(t, "component", e, i), p(t, "chart", e, i), i.plan()
        }

        function l(t, e, i, n, o) {
            function a(n) {
                n && n.__alive && n[e] && n[e](n.__model, r, t._api, i)
            }

            var r = t._model;
            if (!n) return void kt(t._componentsViews.concat(t._chartsViews), a);
            var s = {};
            s[n + "Id"] = i[n + "Id"], s[n + "Index"] = i[n + "Index"], s[n + "Name"] = i[n + "Name"];
            var l = {
                mainType: n,
                query: s
            };
            o && (l.subType = o);
            var d = i.excludeSeriesId;
            null != d && (d = K.createHashMap(pt.normalizeToArray(d))), r && r.eachComponent(l, function (e) {
                d && null != d.get(e.id) || a(t["series" === n ? "_chartsMap" : "_componentsMap"][e.__viewId])
            }, t)
        }

        function d(t, e) {
            var i = t._chartsMap,
                n = t._scheduler;
            e.eachSeries(function (t) {
                n.updateStreamModes(t, i[t.__viewId])
            })
        }

        function u(t, e) {
            var i = t.type,
                n = t.escapeConnect,
                o = Vt[i],
                a = o.actionInfo,
                r = (a.update || "update").split(":"),
                d = r.pop();
            r = null != r[0] && Dt(r[0]), this[Rt] = !0;
            var u = [t],
                c = !1;
            t.batch && (c = !0, u = K.map(t.batch, function (e) {
                return e = K.defaults(K.extend({}, e), t), e.batch = null, e
            }));
            var h, f = [],
                p = "highlight" === i || "downplay" === i;
            kt(u, function (t) {
                h = o.action(t, this._model, this._api), h = h || K.extend({}, t), h.type = a.event || h.type, f.push(h), p ? l(this, d, t, "series") : r && l(this, d, t, r.main, r.sub)
            }, this), "none" === d || p || r || (this[Et] ? (s(this), Bt.update.call(this, t), this[Et] = !1) : Bt[d].call(this, t)), h = c ? {
                type: a.event || i,
                escapeConnect: n,
                batch: f
            } : f[0], this[Rt] = !1, !e && this._messageCenter.trigger(h.type, h)
        }

        function c(t) {
            for (var e = this._pendingActions; e.length;) {
                var i = e.shift();
                u.call(this, i, t)
            }
        }

        function h(t) {
            !t && this.trigger("updated")
        }

        function f(t, e) {
            t.on("rendered", function () {
                e.trigger("rendered"), !t.animation.isFinished() || e[Et] || e._scheduler.unfinished || e._pendingActions.length || e.trigger("finished")
            })
        }

        function p(t, e, i, n) {
            function o(t) {
                var e = "_ec_" + t.id + "_" + t.type,
                    o = s[e];
                if (!o) {
                    var u = Dt(t.type);
                    o = new (a ? ct.getClass(u.main, u.sub) : ht.getClass(u.sub)), o.init(i, d), s[e] = o, r.push(o), l.add(o.group)
                }
                t.__viewId = o.__id = e, o.__alive = !0, o.__model = t, o.group.__ecComponentInfo = {
                    mainType: t.mainType,
                    index: t.componentIndex
                }, !a && n.prepareView(o, t, i, d)
            }

            for (var a = "component" === e, r = a ? t._componentsViews : t._chartsViews, s = a ? t._componentsMap : t._chartsMap, l = t._zr, d = t._api, u = 0; u < r.length; u++) r[u].__alive = !1;
            a ? i.eachComponent(function (t, e) {
                "series" !== t && o(e)
            }) : i.eachSeries(o);
            for (var u = 0; u < r.length;) {
                var c = r[u];
                c.__alive ? u++ : (!a && c.renderTask.dispose(), l.remove(c.group), c.dispose(i, d), r.splice(u, 1), delete s[c.__id], c.__id = c.group.__ecComponentInfo = null)
            }
        }

        function g(t) {
            t.clearColorPalette(), t.eachSeries(function (t) {
                t.clearColorPalette()
            })
        }

        function v(t, e, i, n) {
            m(t, e, i, n), kt(t._chartsViews, function (t) {
                t.__alive = !1
            }), _(t, e, i, n), kt(t._chartsViews, function (t) {
                t.__alive || t.remove(e, i)
            })
        }

        function m(t, e, i, n, o) {
            kt(o || t._componentsViews, function (t) {
                var o = t.__model;
                t.render(o, e, i, n), w(o, t)
            })
        }

        function _(t, e, i, n, o) {
            var a, r = t._scheduler;
            e.eachSeries(function (e) {
                var i = t._chartsMap[e.__viewId];
                i.__alive = !0;
                var s = i.renderTask;
                r.updatePayload(s, n), o && o.get(e.uid) && s.dirty(), a |= s.perform(r.getPerformArgs(s)), i.group.silent = !!e.get("silent"), w(e, i), b(e, i)
            }), r.unfinished |= a, x(t, e), _t(t._zr.dom, e)
        }

        function y(t, e) {
            kt(Ut, function (i) {
                i(t, e)
            })
        }

        function x(t, e) {
            var i = t._zr,
                n = i.storage,
                o = 0;
            n.traverse(function (t) {
                o++
            }), o > e.get("hoverLayerThreshold") && !tt.node && e.eachSeries(function (e) {
                if (!e.preventUsingHoverLayer) {
                    var i = t._chartsMap[e.__viewId];
                    i.__alive && i.group.traverse(function (t) {
                        t.useHoverLayer = !0
                    })
                }
            })
        }

        function b(t, e) {
            var i = t.get("blendMode") || null;
            e.group.traverse(function (t) {
                t.isGroup || t.style.blend !== i && t.setStyle("blend", i), t.eachPendingDisplayable && t.eachPendingDisplayable(function (t) {
                    t.setStyle("blend", i)
                })
            })
        }

        function w(t, e) {
            var i = t.get("z"),
                n = t.get("zlevel");
            e.group.traverse(function (t) {
                "group" !== t.type && (null != i && (t.z = i), null != n && (t.zlevel = n))
            })
        }

        function S(t) {
            var e = t._coordSysMgr;
            return K.extend(new ot(t), {
                getCoordinateSystems: K.bind(e.getCoordinateSystems, e),
                getComponentByElement: function (e) {
                    for (; e;) {
                        var i = e.__ecComponentInfo;
                        if (null != i) return t._model.getComponent(i.mainType, i.index);
                        e = e.parent
                    }
                }
            })
        }

        function C() {
            this.eventInfo
        }

        function k(t) {
            function e(t, e) {
                for (var n = 0; n < t.length; n++) t[n][i] = e
            }

            var i = "__connectUpdateStatus";
            kt(Ht, function (n, o) {
                t._messageCenter.on(o, function (n) {
                    if ($t[t.group] && 0 !== t[i]) {
                        if (n && n.escapeConnect) return;
                        var o = t.makeActionFromEvent(n),
                            a = [];
                        kt(Yt, function (e) {
                            e !== t && e.group === t.group && a.push(e)
                        }), e(a, 0), kt(a, function (t) {
                            1 !== t[i] && t.dispatchAction(o)
                        }), e(a, 2)
                    }
                })
            })
        }

        function I(t, e, i) {
            var n = A(t);
            if (n) return n;
            var o = new a(t, e, i);
            return o.id = "ec_" + Zt++, Yt[o.id] = o, pt.setAttribute(t, Kt, o.id), k(o), o
        }

        function T(t) {
            if (K.isArray(t)) {
                var e = t;
                t = null, kt(e, function (e) {
                    null != e.group && (t = e.group)
                }), t = t || "g_" + Qt++, kt(e, function (e) {
                    e.group = t
                })
            }
            return $t[t] = !0, t
        }

        function D(t) {
            $t[t] = !1
        }

        function M(t) {
            "string" == typeof t ? t = Yt[t] : t instanceof a || (t = A(t)), t instanceof a && !t.isDisposed() && t.dispose()
        }

        function A(t) {
            return Yt[pt.getAttribute(t, Kt)]
        }

        function L(t) {
            return Yt[t]
        }

        function P(t, e) {
            Gt[t] = e
        }

        function O(t) {
            Wt.push(t)
        }

        function R(t, e) {
            H(qt, t, e, At)
        }

        function E(t) {
            Ut.push(t)
        }

        function z(t, e, i) {
            "function" == typeof e && (i = e, e = "");
            var n = Tt(t) ? t.type : [t, t = {
                event: e
            }][0];
            t.event = (t.event || n).toLowerCase(), e = t.event, Ct(zt.test(n) && zt.test(e)), Vt[n] || (Vt[n] = {
                action: i,
                actionInfo: t
            }), Ht[e] = n
        }

        function N(t, e) {
            at.register(t, e)
        }

        function B(t) {
            var e = at.get(t);
            if (e) return e.getDimensionsInfo ? e.getDimensionsInfo() : e.dimensions.slice()
        }

        function F(t, e) {
            H(jt, t, e, Lt, "layout")
        }

        function V(t, e) {
            H(jt, t, e, Pt, "visual")
        }

        function H(t, e, i, n, o) {
            (It(e) || Tt(e)) && (i = e, e = n);
            var a = xt.wrapStageHandler(i, o);
            return a.__prio = e, a.__raw = i, t.push(a), a
        }

        function q(t, e) {
            Xt[t] = e
        }

        function W(t) {
            return dt.extend(t)
        }

        function U(t) {
            return ct.extend(t)
        }

        function j(t) {
            return ut.extend(t)
        }

        function G(t) {
            return ht.extend(t)
        }

        function X(t) {
            K.$override("createCanvas", t)
        }

        function Y(t, e, i) {
            St.registerMap(t, e, i)
        }

        function $(t) {
            var e = St.retrieveMap(t);
            return e && e[0] && {
                geoJson: e[0].geoJSON,
                specialAreas: e[0].specialAreas
            }
        }

        var Z = i(634),
            Q = (Z.__DEV__, i(734)),
            K = i(630),
            J = i(666),
            tt = i(637),
            et = i(691),
            it = i(658),
            nt = i(704),
            ot = i(698),
            at = i(697),
            rt = i(801),
            st = i(811),
            lt = i(814),
            dt = i(645),
            ut = i(802),
            ct = i(710),
            ht = i(709),
            ft = i(638),
            pt = i(631),
            gt = i(708),
            vt = gt.throttle,
            mt = i(824),
            _t = i(822),
            yt = i(800),
            xt = i(818),
            bt = i(820),
            wt = i(819);
        i(781);
        var St = i(793),
            Ct = K.assert,
            kt = K.each,
            It = K.isFunction,
            Tt = K.isObject,
            Dt = dt.parseClassType,
            Mt = {
                zrender: "4.3.2"
            },
            At = 1e3,
            Lt = 1e3,
            Pt = 3e3,
            Ot = {
                PROCESSOR: {
                    FILTER: At,
                    SERIES_FILTER: 800,
                    STATISTIC: 5e3
                },
                VISUAL: {
                    LAYOUT: Lt,
                    PROGRESSIVE_LAYOUT: 1100,
                    GLOBAL: 2e3,
                    CHART: Pt,
                    POST_CHART_LAYOUT: 3500,
                    COMPONENT: 4e3,
                    BRUSH: 5e3
                }
            },
            Rt = "__flagInMainProcess",
            Et = "__optionUpdated",
            zt = /^[a-zA-Z0-9_]+$/;
        o.prototype.on = n("on", !0), o.prototype.off = n("off", !0), o.prototype.one = n("one", !0), K.mixin(o, it);
        var Nt = a.prototype;
        Nt._onframe = function () {
            if (!this._disposed) {
                var t = this._scheduler;
                if (this[Et]) {
                    var e = this[Et].silent;
                    this[Rt] = !0, s(this), Bt.update.call(this), this[Rt] = !1, this[Et] = !1, c.call(this, e), h.call(this, e)
                } else if (t.unfinished) {
                    var i = 1,
                        n = this._model,
                        o = this._api;
                    t.unfinished = !1;
                    do {
                        var a = +new Date;
                        t.performSeriesTasks(n), t.performDataProcessorTasks(n), d(this, n), t.performVisualTasks(n), _(this, this._model, o, "remain"), i -= +new Date - a
                    } while (i > 0 && t.unfinished);
                    t.unfinished || this._zr.flush()
                }
            }
        }, Nt.getDom = function () {
            return this._dom
        }, Nt.getZr = function () {
            return this._zr
        }, Nt.setOption = function (t, e, i) {
            if (this._disposed) return void this.id;
            var n;
            if (Tt(e) && (i = e.lazyUpdate, n = e.silent, e = e.notMerge), this[Rt] = !0, !this._model || e) {
                var o = new rt(this._api),
                    a = this._theme,
                    r = this._model = new nt;
                r.scheduler = this._scheduler, r.init(null, null, a, o)
            }
            this._model.setOption(t, Wt), i ? (this[Et] = {
                silent: n
            }, this[Rt] = !1) : (s(this), Bt.update.call(this), this._zr.flush(), this[Et] = !1, this[Rt] = !1, c.call(this, n), h.call(this, n))
        }, Nt.setTheme = function () {
            console.error("ECharts#setTheme() is DEPRECATED in ECharts 3.0")
        }, Nt.getModel = function () {
            return this._model
        }, Nt.getOption = function () {
            return this._model && this._model.getOption()
        }, Nt.getWidth = function () {
            return this._zr.getWidth()
        }, Nt.getHeight = function () {
            return this._zr.getHeight()
        }, Nt.getDevicePixelRatio = function () {
            return this._zr.painter.dpr || window.devicePixelRatio || 1
        }, Nt.getRenderedCanvas = function (t) {
            if (tt.canvasSupported) return t = t || {}, t.pixelRatio = t.pixelRatio || 1, t.backgroundColor = t.backgroundColor || this._model.get("backgroundColor"), this._zr.painter.getRenderedCanvas(t)
        }, Nt.getSvgDataURL = function () {
            if (tt.svgSupported) {
                var t = this._zr,
                    e = t.storage.getDisplayList();
                return K.each(e, function (t) {
                    t.stopAnimation(!0)
                }), t.painter.toDataURL()
            }
        }, Nt.getDataURL = function (t) {
            if (this._disposed) return void this.id;
            t = t || {};
            var e = t.excludeComponents,
                i = this._model,
                n = [],
                o = this;
            kt(e, function (t) {
                i.eachComponent({
                    mainType: t
                }, function (t) {
                    var e = o._componentsMap[t.__viewId];
                    e.group.ignore || (n.push(e), e.group.ignore = !0)
                })
            });
            var a = "svg" === this._zr.painter.getType() ? this.getSvgDataURL() : this.getRenderedCanvas(t).toDataURL("image/" + (t && t.type || "png"));
            return kt(n, function (t) {
                t.group.ignore = !1
            }), a
        }, Nt.getConnectedDataURL = function (t) {
            if (this._disposed) return void this.id;
            if (tt.canvasSupported) {
                var e = "svg" === t.type,
                    i = this.group,
                    n = Math.min,
                    o = Math.max;
                if ($t[i]) {
                    var a = 1 / 0,
                        r = 1 / 0,
                        s = -1 / 0,
                        l = -1 / 0,
                        d = [],
                        u = t && t.pixelRatio || 1;
                    K.each(Yt, function (u, c) {
                        if (u.group === i) {
                            var h = e ? u.getZr().painter.getSvgDom().innerHTML : u.getRenderedCanvas(K.clone(t)),
                                f = u.getDom().getBoundingClientRect();
                            a = n(f.left, a), r = n(f.top, r), s = o(f.right, s), l = o(f.bottom, l), d.push({
                                dom: h,
                                left: f.left,
                                top: f.top
                            })
                        }
                    }), a *= u, r *= u, s *= u, l *= u;
                    var c = s - a,
                        h = l - r,
                        f = K.createCanvas(),
                        p = Q.init(f, {
                            renderer: e ? "svg" : "canvas"
                        });
                    if (p.resize({
                        width: c,
                        height: h
                    }), e) {
                        var g = "";
                        return kt(d, function (t) {
                            var e = t.left - a,
                                i = t.top - r;
                            g += '<g transform="translate(' + e + "," + i + ')">' + t.dom + "</g>"
                        }), p.painter.getSvgRoot().innerHTML = g, t.connectedBackgroundColor && p.painter.setBackgroundColor(t.connectedBackgroundColor), p.refreshImmediately(), p.painter.toDataURL()
                    }
                    return t.connectedBackgroundColor && p.add(new ft.Rect({
                        shape: {
                            x: 0,
                            y: 0,
                            width: c,
                            height: h
                        },
                        style: {
                            fill: t.connectedBackgroundColor
                        }
                    })), kt(d, function (t) {
                        var e = new ft.Image({
                            style: {
                                x: t.left * u - a,
                                y: t.top * u - r,
                                image: t.dom
                            }
                        });
                        p.add(e)
                    }), p.refreshImmediately(), f.toDataURL("image/" + (t && t.type || "png"))
                }
                return this.getDataURL(t)
            }
        }, Nt.convertToPixel = K.curry(r, "convertToPixel"), Nt.convertFromPixel = K.curry(r, "convertFromPixel"), Nt.containPixel = function (t, e) {
            if (this._disposed) return void this.id;
            var i, n = this._model;
            return t = pt.parseFinder(n, t), K.each(t, function (t, n) {
                n.indexOf("Models") >= 0 && K.each(t, function (t) {
                    var o = t.coordinateSystem;
                    if (o && o.containPoint) i |= !!o.containPoint(e);
                    else if ("seriesModels" === n) {
                        var a = this._chartsMap[t.__viewId];
                        a && a.containPoint && (i |= a.containPoint(e, t))
                    }
                }, this)
            }, this), !!i
        }, Nt.getVisual = function (t, e) {
            var i = this._model;
            t = pt.parseFinder(i, t, {
                defaultMainType: "series"
            });
            var n = t.seriesModel,
                o = n.getData(),
                a = t.hasOwnProperty("dataIndexInside") ? t.dataIndexInside : t.hasOwnProperty("dataIndex") ? o.indexOfRawIndex(t.dataIndex) : null;
            return null != a ? o.getItemVisual(a, e) : o.getVisual(e)
        }, Nt.getViewOfComponentModel = function (t) {
            return this._componentsMap[t.__viewId]
        }, Nt.getViewOfSeriesModel = function (t) {
            return this._chartsMap[t.__viewId]
        };
        var Bt = {
            prepareAndUpdate: function (t) {
                s(this), Bt.update.call(this, t)
            },
            update: function (t) {
                var e = this._model,
                    i = this._api,
                    n = this._zr,
                    o = this._coordSysMgr,
                    a = this._scheduler;
                if (e) {
                    a.restoreData(e, t), a.performSeriesTasks(e), o.create(e, i), a.performDataProcessorTasks(e, t), d(this, e), o.update(e, i), g(e), a.performVisualTasks(e, t), v(this, e, i, t);
                    var r = e.get("backgroundColor") || "transparent";
                    if (tt.canvasSupported) n.setBackgroundColor(r);
                    else {
                        var s = J.parse(r);
                        r = J.stringify(s, "rgb"), 0 === s[3] && (r = "transparent")
                    }
                    y(e, i)
                }
            },
            updateTransform: function (t) {
                var e = this._model,
                    i = this,
                    n = this._api;
                if (e) {
                    var o = [];
                    e.eachComponent(function (a, r) {
                        var s = i.getViewOfComponentModel(r);
                        if (s && s.__alive)
                            if (s.updateTransform) {
                                var l = s.updateTransform(r, e, n, t);
                                l && l.update && o.push(s)
                            } else o.push(s)
                    });
                    var a = K.createHashMap();
                    e.eachSeries(function (o) {
                        var r = i._chartsMap[o.__viewId];
                        if (r.updateTransform) {
                            var s = r.updateTransform(o, e, n, t);
                            s && s.update && a.set(o.uid, 1)
                        } else a.set(o.uid, 1)
                    }), g(e), this._scheduler.performVisualTasks(e, t, {
                        setDirty: !0,
                        dirtyMap: a
                    }), _(i, e, n, t, a), y(e, this._api)
                }
            },
            updateView: function (t) {
                var e = this._model;
                e && (ht.markUpdateMethod(t, "updateView"), g(e), this._scheduler.performVisualTasks(e, t, {
                    setDirty: !0
                }), v(this, this._model, this._api, t), y(e, this._api))
            },
            updateVisual: function (t) {
                Bt.update.call(this, t)
            },
            updateLayout: function (t) {
                Bt.update.call(this, t)
            }
        };
        Nt.resize = function (t) {
            if (this._disposed) return void this.id;
            this._zr.resize(t);
            var e = this._model;
            if (this._loadingFX && this._loadingFX.resize(), e) {
                var i = e.resetOption("media"),
                    n = t && t.silent;
                this[Rt] = !0, i && s(this), Bt.update.call(this), this[Rt] = !1, c.call(this, n), h.call(this, n)
            }
        }, Nt.showLoading = function (t, e) {
            if (this._disposed) return void this.id;
            if (Tt(t) && (e = t, t = ""), t = t || "default", this.hideLoading(), Xt[t]) {
                var i = Xt[t](this._api, e),
                    n = this._zr;
                this._loadingFX = i, n.add(i)
            }
        }, Nt.hideLoading = function () {
            if (this._disposed) return void this.id;
            this._loadingFX && this._zr.remove(this._loadingFX), this._loadingFX = null
        }, Nt.makeActionFromEvent = function (t) {
            var e = K.extend({}, t);
            return e.type = Ht[t.type], e
        }, Nt.dispatchAction = function (t, e) {
            if (this._disposed) return void this.id;
            if (Tt(e) || (e = {
                silent: !!e
            }), Vt[t.type] && this._model) {
                if (this[Rt]) return void this._pendingActions.push(t);
                u.call(this, t, e.silent), e.flush ? this._zr.flush(!0) : !1 !== e.flush && tt.browser.weChat && this._throttledZrFlush(), c.call(this, e.silent), h.call(this, e.silent)
            }
        }, Nt.appendData = function (t) {
            if (this._disposed) return void this.id;
            var e = t.seriesIndex;
            this.getModel().getSeriesByIndex(e).appendData(t), this._scheduler.unfinished = !0
        }, Nt.on = n("on", !1), Nt.off = n("off", !1), Nt.one = n("one", !1);
        var Ft = ["click", "dblclick", "mouseover", "mouseout", "mousemove", "mousedown", "mouseup", "globalout", "contextmenu"];
        Nt._initEvents = function () {
            kt(Ft, function (t) {
                var e = function (e) {
                    var i, n = this.getModel(),
                        o = e.target;
                    if ("globalout" === t) i = {};
                    else if (o && null != o.dataIndex) {
                        var a = o.dataModel || n.getSeriesByIndex(o.seriesIndex);
                        i = a && a.getDataParams(o.dataIndex, o.dataType, o) || {}
                    } else o && o.eventData && (i = K.extend({}, o.eventData));
                    if (i) {
                        var r = i.componentType,
                            s = i.componentIndex;
                        "markLine" !== r && "markPoint" !== r && "markArea" !== r || (r = "series", s = i.seriesIndex);
                        var l = r && null != s && n.getComponent(r, s),
                            d = l && this["series" === l.mainType ? "_chartsMap" : "_componentsMap"][l.__viewId];
                        i.event = e, i.type = t, this._ecEventProcessor.eventInfo = {
                            targetEl: o,
                            packedEvent: i,
                            model: l,
                            view: d
                        }, this.trigger(t, i)
                    }
                };
                e.zrEventfulCallAtLast = !0, this._zr.on(t, e, this)
            }, this), kt(Ht, function (t, e) {
                this._messageCenter.on(e, function (t) {
                    this.trigger(e, t)
                }, this)
            }, this)
        }, Nt.isDisposed = function () {
            return this._disposed
        }, Nt.clear = function () {
            if (this._disposed) return void this.id;
            this.setOption({
                series: []
            }, !0)
        }, Nt.dispose = function () {
            if (this._disposed) return void this.id;
            this._disposed = !0, pt.setAttribute(this.getDom(), Kt, "");
            var t = this._api,
                e = this._model;
            kt(this._componentsViews, function (i) {
                i.dispose(e, t)
            }), kt(this._chartsViews, function (i) {
                i.dispose(e, t)
            }), this._zr.dispose(), delete Yt[this.id]
        }, K.mixin(a, it), C.prototype = {
            constructor: C,
            normalizeQuery: function (t) {
                var e = {},
                    i = {},
                    n = {};
                if (K.isString(t)) {
                    var o = Dt(t);
                    e.mainType = o.main || null, e.subType = o.sub || null
                } else {
                    var a = ["Index", "Name", "Id"],
                        r = {
                            name: 1,
                            dataIndex: 1,
                            dataType: 1
                        };
                    K.each(t, function (t, o) {
                        for (var s = !1, l = 0; l < a.length; l++) {
                            var d = a[l],
                                u = o.lastIndexOf(d);
                            if (u > 0 && u === o.length - d.length) {
                                var c = o.slice(0, u);
                                "data" !== c && (e.mainType = c, e[d.toLowerCase()] = t, s = !0)
                            }
                        }
                        r.hasOwnProperty(o) && (i[o] = t, s = !0), s || (n[o] = t)
                    })
                }
                return {
                    cptQuery: e,
                    dataQuery: i,
                    otherQuery: n
                }
            },
            filter: function (t, e, i) {
                function n(t, e, i, n) {
                    return null == t[i] || e[n || i] === t[i]
                }

                var o = this.eventInfo;
                if (!o) return !0;
                var a = o.targetEl,
                    r = o.packedEvent,
                    s = o.model,
                    l = o.view;
                if (!s || !l) return !0;
                var d = e.cptQuery,
                    u = e.dataQuery;
                return n(d, s, "mainType") && n(d, s, "subType") && n(d, s, "index", "componentIndex") && n(d, s, "name") && n(d, s, "id") && n(u, r, "name") && n(u, r, "dataIndex") && n(u, r, "dataType") && (!l.filterForExposedEvent || l.filterForExposedEvent(t, e.otherQuery, a, r))
            },
            afterTrigger: function () {
                this.eventInfo = null
            }
        };
        var Vt = {},
            Ht = {},
            qt = [],
            Wt = [],
            Ut = [],
            jt = [],
            Gt = {},
            Xt = {},
            Yt = {},
            $t = {},
            Zt = new Date - 0,
            Qt = new Date - 0,
            Kt = "_echarts_instance_",
            Jt = D;
        V(2e3, mt), O(st), R(900, lt), q("default", yt), z({
            type: "highlight",
            event: "highlight",
            update: "highlight"
        }, K.noop), z({
            type: "downplay",
            event: "downplay",
            update: "downplay"
        }, K.noop), P("light", bt), P("dark", wt);
        var te = {};
        e.version = "4.9.0", e.dependencies = Mt, e.PRIORITY = Ot, e.init = I, e.connect = T, e.disConnect = D, e.disconnect = Jt, e.dispose = M, e.getInstanceByDom = A, e.getInstanceById = L, e.registerTheme = P, e.registerPreprocessor = O, e.registerProcessor = R, e.registerPostUpdate = E, e.registerAction = z, e.registerCoordinateSystem = N, e.getCoordinateSystemDimensions = B, e.registerLayout = F, e.registerVisual = V, e.registerLoading = q, e.extendComponentModel = W, e.extendComponentView = U, e.extendSeriesModel = j, e.extendChartView = G, e.setCanvasCreator = X, e.registerMap = Y, e.getMap = $, e.dataTool = te;
        var ee = i(797);
        !function () {
            for (var t in ee) ee.hasOwnProperty(t) && (e[t] = ee[t])
        }()
    }, function (t, e, i) {
        function n(t, e) {
            E[t] = e
        }

        function o(t, e) {
            e = e || R;
            var i = t + ":" + e;
            if (A[i]) return A[i];
            for (var n = (t + "").split("\n"), o = 0, a = 0, r = n.length; a < r; a++) o = Math.max(m(n[a], e).width, o);
            return L > P && (L = 0, A = {}), L++, A[i] = o, o
        }

        function a(t, e, i, n, o, a, l, d) {
            return l ? s(t, e, i, n, o, a, l, d) : r(t, e, i, n, o, a, d)
        }

        function r(t, e, i, n, a, r, s) {
            var u = _(t, e, a, r, s),
                c = o(t, e);
            a && (c += a[1] + a[3]);
            var h = u.outerHeight,
                f = l(0, c, i),
                p = d(0, h, n),
                g = new w(f, p, c, h);
            return g.lineHeight = u.lineHeight, g
        }

        function s(t, e, i, n, o, a, r, s) {
            var u = y(t, {
                    rich: r,
                    truncate: s,
                    font: e,
                    textAlign: i,
                    textPadding: o,
                    textLineHeight: a
                }),
                c = u.outerWidth,
                h = u.outerHeight,
                f = l(0, c, i),
                p = d(0, h, n);
            return new w(f, p, c, h)
        }

        function l(t, e, i) {
            return "right" === i ? t -= e : "center" === i && (t -= e / 2), t
        }

        function d(t, e, i) {
            return "middle" === i ? t -= e / 2 : "bottom" === i && (t -= e), t
        }

        function u(t, e, i) {
            var n = e.textPosition,
                o = e.textDistance,
                a = i.x,
                r = i.y;
            o = o || 0;
            var s = i.height,
                l = i.width,
                d = s / 2,
                u = "left",
                c = "top";
            switch (n) {
                case "left":
                    a -= o, r += d, u = "right", c = "middle";
                    break;
                case "right":
                    a += o + l, r += d, c = "middle";
                    break;
                case "top":
                    a += l / 2, r -= o, u = "center", c = "bottom";
                    break;
                case "bottom":
                    a += l / 2, r += s + o, u = "center";
                    break;
                case "inside":
                    a += l / 2, r += d, u = "center", c = "middle";
                    break;
                case "insideLeft":
                    a += o, r += d, c = "middle";
                    break;
                case "insideRight":
                    a += l - o, r += d, u = "right", c = "middle";
                    break;
                case "insideTop":
                    a += l / 2, r += o, u = "center";
                    break;
                case "insideBottom":
                    a += l / 2, r += s - o, u = "center", c = "bottom";
                    break;
                case "insideTopLeft":
                    a += o, r += o;
                    break;
                case "insideTopRight":
                    a += l - o, r += o, u = "right";
                    break;
                case "insideBottomLeft":
                    a += o, r += s - o, c = "bottom";
                    break;
                case "insideBottomRight":
                    a += l - o, r += s - o, u = "right", c = "bottom"
            }
            return t = t || {}, t.x = a, t.y = r, t.textAlign = u, t.textVerticalAlign = c, t
        }

        function c(t, e, i) {
            return u({}, {
                textPosition: t,
                textDistance: i
            }, e)
        }

        function h(t, e, i, n, o) {
            if (!e) return "";
            var a = (t + "").split("\n");
            o = f(e, i, n, o);
            for (var r = 0, s = a.length; r < s; r++) a[r] = p(a[r], o);
            return a.join("\n")
        }

        function f(t, e, i, n) {
            n = I({}, n), n.font = e;
            var i = T(i, "...");
            n.maxIterations = T(n.maxIterations, 2);
            var a = n.minChar = T(n.minChar, 0);
            n.cnCharWidth = o("国", e);
            var r = n.ascCharWidth = o("a", e);
            n.placeholder = T(n.placeholder, "");
            for (var s = t = Math.max(0, t - 1), l = 0; l < a && s >= r; l++) s -= r;
            var d = o(i, e);
            return d > s && (i = "", d = 0), s = t - d, n.ellipsis = i, n.ellipsisWidth = d, n.contentWidth = s, n.containerWidth = t, n
        }

        function p(t, e) {
            var i = e.containerWidth,
                n = e.font,
                a = e.contentWidth;
            if (!i) return "";
            var r = o(t, n);
            if (r <= i) return t;
            for (var s = 0; ; s++) {
                if (r <= a || s >= e.maxIterations) {
                    t += e.ellipsis;
                    break
                }
                var l = 0 === s ? g(t, a, e.ascCharWidth, e.cnCharWidth) : r > 0 ? Math.floor(t.length * a / r) : 0;
                t = t.substr(0, l), r = o(t, n)
            }
            return "" === t && (t = e.placeholder), t
        }

        function g(t, e, i, n) {
            for (var o = 0, a = 0, r = t.length; a < r && o < e; a++) {
                var s = t.charCodeAt(a);
                o += 0 <= s && s <= 127 ? i : n
            }
            return a
        }

        function v(t) {
            return o("国", t)
        }

        function m(t, e) {
            return E.measureText(t, e)
        }

        function _(t, e, i, n, o) {
            null != t && (t += "");
            var a = T(n, v(e)),
                r = t ? t.split("\n") : [],
                s = r.length * a,
                l = s,
                d = !0;
            if (i && (l += i[0] + i[2]), t && o) {
                d = !1;
                var u = o.outerHeight,
                    c = o.outerWidth;
                if (null != u && l > u) t = "", r = [];
                else if (null != c)
                    for (var h = f(c - (i ? i[1] + i[3] : 0), e, o.ellipsis, {
                        minChar: o.minChar,
                        placeholder: o.placeholder
                    }), g = 0, m = r.length; g < m; g++) r[g] = p(r[g], h)
            }
            return {
                lines: r,
                height: s,
                outerHeight: l,
                lineHeight: a,
                canCacheByTextString: d
            }
        }

        function y(t, e) {
            var i = {
                lines: [],
                width: 0,
                height: 0
            };
            if (null != t && (t += ""), !t) return i;
            for (var n, a = O.lastIndex = 0; null != (n = O.exec(t));) {
                var r = n.index;
                r > a && x(i, t.substring(a, r)), x(i, n[2], n[1]), a = O.lastIndex
            }
            a < t.length && x(i, t.substring(a, t.length));
            var s = i.lines,
                l = 0,
                d = 0,
                u = [],
                c = e.textPadding,
                f = e.truncate,
                p = f && f.outerWidth,
                g = f && f.outerHeight;
            c && (null != p && (p -= c[1] + c[3]), null != g && (g -= c[0] + c[2]));
            for (var m = 0; m < s.length; m++) {
                for (var _ = s[m], y = 0, b = 0, w = 0; w < _.tokens.length; w++) {
                    var C = _.tokens[w],
                        k = C.styleName && e.rich[C.styleName] || {},
                        I = C.textPadding = k.textPadding,
                        M = C.font = k.font || e.font,
                        A = C.textHeight = T(k.textHeight, v(M));
                    if (I && (A += I[0] + I[2]), C.height = A, C.lineHeight = D(k.textLineHeight, e.textLineHeight, A), C.textAlign = k && k.textAlign || e.textAlign, C.textVerticalAlign = k && k.textVerticalAlign || "middle", null != g && l + C.lineHeight > g) return {
                        lines: [],
                        width: 0,
                        height: 0
                    };
                    C.textWidth = o(C.text, M);
                    var L = k.textWidth,
                        P = null == L || "auto" === L;
                    if ("string" == typeof L && "%" === L.charAt(L.length - 1)) C.percentWidth = L, u.push(C), L = 0;
                    else {
                        if (P) {
                            L = C.textWidth;
                            var R = k.textBackgroundColor,
                                E = R && R.image;
                            E && (E = S.findExistImage(E), S.isImageReady(E) && (L = Math.max(L, E.width * A / E.height)))
                        }
                        var z = I ? I[1] + I[3] : 0;
                        L += z;
                        var N = null != p ? p - b : null;
                        null != N && N < L && (!P || N < z ? (C.text = "", C.textWidth = L = 0) : (C.text = h(C.text, N - z, M, f.ellipsis, {
                            minChar: f.minChar
                        }), C.textWidth = o(C.text, M), L = C.textWidth + z))
                    }
                    b += C.width = L, k && (y = Math.max(y, C.lineHeight))
                }
                _.width = b, _.lineHeight = y, l += y, d = Math.max(d, b)
            }
            i.outerWidth = i.width = T(e.textWidth, d), i.outerHeight = i.height = T(e.textHeight, l), c && (i.outerWidth += c[1] + c[3], i.outerHeight += c[0] + c[2]);
            for (var m = 0; m < u.length; m++) {
                var C = u[m],
                    B = C.percentWidth;
                C.width = parseInt(B, 10) / 100 * d
            }
            return i
        }

        function x(t, e, i) {
            for (var n = "" === e, o = e.split("\n"), a = t.lines, r = 0; r < o.length; r++) {
                var s = o[r],
                    l = {
                        styleName: i,
                        text: s,
                        isLineHolder: !s && !n
                    };
                if (r) a.push({
                    tokens: [l]
                });
                else {
                    var d = (a[a.length - 1] || (a[0] = {
                            tokens: []
                        })).tokens,
                        u = d.length;
                    1 === u && d[0].isLineHolder ? d[0] = l : (s || !u || n) && d.push(l)
                }
            }
        }

        function b(t) {
            var e = (t.fontSize || t.fontFamily) && [t.fontStyle, t.fontWeight, (t.fontSize || 12) + "px", t.fontFamily || "sans-serif"].join(" ");
            return e && M(e) || t.textFont || t.font
        }

        var w = i(636),
            S = i(695),
            C = i(630),
            k = C.getContext,
            I = C.extend,
            T = C.retrieve2,
            D = C.retrieve3,
            M = C.trim,
            A = {},
            L = 0,
            P = 5e3,
            O = /\{([a-zA-Z0-9_]+)\|([^}]*)\}/g,
            R = "12px sans-serif",
            E = {};
        E.measureText = function (t, e) {
            var i = k();
            return i.font = e || R, i.measureText(t)
        }, e.DEFAULT_FONT = R, e.$override = n, e.getWidth = o, e.getBoundingRect = a, e.adjustTextX = l, e.adjustTextY = d, e.calculateTextPosition = u, e.adjustTextPositionOnRect = c, e.truncateText = h, e.getLineHeight = v, e.measureText = m, e.parsePlainText = _, e.parseRichText = y, e.makeFont = b
    }, function (t, e, i) {
        function n(t) {
            var e = {
                main: "",
                sub: ""
            };
            return t && (t = t.split(f), e.main = t[0] || "", e.sub = t[1] || ""), e
        }

        function o(t) {
            h.assert(/^[a-zA-Z0-9_]+([.][a-zA-Z0-9_]+)?$/.test(t), 'componentType "' + t + '" illegal')
        }

        function a(t, e) {
            t.$constructor = t, t.extend = function (t) {
                var e = this,
                    i = function () {
                        t.$constructor ? t.$constructor.apply(this, arguments) : e.apply(this, arguments)
                    };
                return h.extend(i.prototype, t), i.extend = this.extend, i.superCall = s, i.superApply = l, h.inherits(i, this), i.superClass = e, i
            }
        }

        function r(t) {
            var e = ["__\0is_clz", g++, Math.random().toFixed(3)].join("_");
            t.prototype[e] = !0, t.isInstance = function (t) {
                return !(!t || !t[e])
            }
        }

        function s(t, e) {
            var i = h.slice(arguments, 2);
            return this.superClass.prototype[e].apply(t, i)
        }

        function l(t, e, i) {
            return this.superClass.prototype[e].apply(t, i)
        }

        function d(t, e) {
            function i(t) {
                var e = a[t.main];
                return e && e[p] || (e = a[t.main] = {}, e[p] = !0), e
            }

            e = e || {};
            var a = {};
            if (t.registerClass = function (t, e) {
                if (e)
                    if (o(e), e = n(e), e.sub) {
                        if (e.sub !== p) {
                            var r = i(e);
                            r[e.sub] = t
                        }
                    } else a[e.main] = t;
                return t
            }, t.getClass = function (t, e, i) {
                var n = a[t];
                if (n && n[p] && (n = e ? n[e] : null), i && !n) throw new Error(e ? "Component " + t + "." + (e || "") + " not exists. Load it first." : t + ".type should be specified.");
                return n
            }, t.getClassesByMainType = function (t) {
                t = n(t);
                var e = [],
                    i = a[t.main];
                return i && i[p] ? h.each(i, function (t, i) {
                    i !== p && e.push(t)
                }) : e.push(i), e
            }, t.hasClass = function (t) {
                return t = n(t), !!a[t.main]
            }, t.getAllClassMainTypes = function () {
                var t = [];
                return h.each(a, function (e, i) {
                    t.push(i)
                }), t
            }, t.hasSubTypes = function (t) {
                t = n(t);
                var e = a[t.main];
                return e && e[p]
            }, t.parseClassType = n, e.registerWhenExtend) {
                var r = t.extend;
                r && (t.extend = function (e) {
                    var i = r.call(this, e);
                    return t.registerClass(i, e.type)
                })
            }
            return t
        }

        function u(t, e) {
        }

        var c = i(634),
            h = (c.__DEV__, i(630)),
            f = ".",
            p = "___EC__COMPONENT__CONTAINER___",
            g = 0;
        e.parseClassType = n, e.enableClassExtend = a, e.enableClassCheck = r, e.enableClassManagement = d, e.setReadOnly = u
    }, function (t, e, i) {
        function n(t) {
            return isNaN(t) ? "-" : (t = (t + "").split("."), t[0].replace(/(\d{1,3})(?=(?:\d{3})+(?!\d))/g, "$1,") + (t.length > 1 ? "." + t[1] : ""))
        }

        function o(t, e) {
            return t = (t || "").toLowerCase().replace(/-(.)/g, function (t, e) {
                return e.toUpperCase()
            }), e && t && (t = t.charAt(0).toUpperCase() + t.slice(1)), t
        }

        function a(t) {
            return null == t ? "" : (t + "").replace(y, function (t, e) {
                return x[e]
            })
        }

        function r(t, e, i) {
            g.isArray(e) || (e = [e]);
            var n = e.length;
            if (!n) return "";
            for (var o = e[0].$vars || [], r = 0; r < o.length; r++) {
                var s = b[r];
                t = t.replace(w(s), w(s, 0))
            }
            for (var l = 0; l < n; l++)
                for (var d = 0; d < o.length; d++) {
                    var u = e[l][o[d]];
                    t = t.replace(w(b[d], l), i ? a(u) : u)
                }
            return t
        }

        function s(t, e, i) {
            return g.each(e, function (e, n) {
                t = t.replace("{" + n + "}", i ? a(e) : e)
            }), t
        }

        function l(t, e) {
            t = g.isString(t) ? {
                color: t,
                extraCssText: e
            } : t || {};
            var i = t.color,
                n = t.type,
                e = t.extraCssText,
                o = t.renderMode || "html",
                r = t.markerId || "X";
            return i ? "html" === o ? "subItem" === n ? '<span style="display:inline-block;vertical-align:middle;margin-right:8px;margin-left:3px;border-radius:4px;width:4px;height:4px;background-color:' + a(i) + ";" + (e || "") + '"></span>' : '<span style="display:inline-block;margin-right:5px;border-radius:10px;width:10px;height:10px;background-color:' + a(i) + ";" + (e || "") + '"></span>' : {
                renderMode: o,
                content: "{marker" + r + "|}  ",
                style: {
                    color: i
                }
            } : ""
        }

        function d(t, e) {
            return t += "", "0000".substr(0, e - t.length) + t
        }

        function u(t, e, i) {
            "week" !== t && "month" !== t && "quarter" !== t && "half-year" !== t && "year" !== t || (t = "MM-dd\nyyyy");
            var n = m.parseDate(e),
                o = i ? "UTC" : "",
                a = n["get" + o + "FullYear"](),
                r = n["get" + o + "Month"]() + 1,
                s = n["get" + o + "Date"](),
                l = n["get" + o + "Hours"](),
                u = n["get" + o + "Minutes"](),
                c = n["get" + o + "Seconds"](),
                h = n["get" + o + "Milliseconds"]();
            return t = t.replace("MM", d(r, 2)).replace("M", r).replace("yyyy", a).replace("yy", a % 100).replace("dd", d(s, 2)).replace("d", s).replace("hh", d(l, 2)).replace("h", l).replace("mm", d(u, 2)).replace("m", u).replace("ss", d(c, 2)).replace("s", c).replace("SSS", d(h, 3))
        }

        function c(t) {
            return t ? t.charAt(0).toUpperCase() + t.substr(1) : t
        }

        function h(t) {
            return v.getBoundingRect(t.text, t.font, t.textAlign, t.textVerticalAlign, t.textPadding, t.textLineHeight, t.rich, t.truncate)
        }

        function f(t, e, i, n, o, a, r, s) {
            return v.getBoundingRect(t, e, i, n, o, s, a, r)
        }

        function p(t, e) {
            if ("_blank" === e || "blank" === e) {
                var i = window.open();
                i.opener = null, i.location = t
            } else window.open(t, e)
        }

        var g = i(630),
            v = i(640),
            m = i(632),
            _ = g.normalizeCssArray,
            y = /([&<>"'])/g,
            x = {
                "&": "&amp;",
                "<": "&lt;",
                ">": "&gt;",
                '"': "&quot;",
                "'": "&#39;"
            },
            b = ["a", "b", "c", "d", "e", "f", "g"],
            w = function (t, e) {
                return "{" + t + (null == e ? "" : e) + "}"
            },
            S = v.truncateText;
        e.addCommas = n, e.toCamelCase = o, e.normalizeCssArray = _, e.encodeHTML = a, e.formatTpl = r, e.formatTplSimple = s, e.getTooltipMarker = l, e.formatTime = u, e.capitalFirst = c, e.truncateText = S, e.getTextBoundingRect = h, e.getTextRect = f, e.windowOpen = p
    }, function (t, e, i) {
        "use strict";
        var n = /^([+-])?0*(\d+)(\.(\d+))?$/,
            o = /^([+-])?0*(\d+)(\.(\d+))?e(([+-])?(\d+))$/i,
            a = e.e2ten = function (t) {
                var e = o.exec(t.toString());
                if (!e) return t;
                var i = e[2],
                    n = e[4] || "",
                    a = e[5] ? +e[5] : 0;
                if (a > 0) {
                    var r = n.substr(0, a);
                    r = r.length < a ? r + new Array(a - r.length + 1).join("0") : r, n = n.substr(a), i += r
                } else {
                    a = -a;
                    var s = i.length - a;
                    s = s < 0 ? 0 : s;
                    var l = i.substr(s, a);
                    l = l.length < a ? new Array(a - l.length + 1).join("0") + l : l, i = i.substring(0, s), n = l + n
                }
                return i = "" == i ? "0" : i, ("-" == e[1] ? "-" : "") + i + (n ? "." + n : "")
            };
        e.getNumbResult = function (t) {
            var e = n.exec(t.toString());
            if (!e && o.test(t.toString()) && (e = n.exec(a(t.toString()))), e) return {
                int: e[2],
                decimal: e[4],
                minus: "-" == e[1],
                num: e.slice(1, 3).join("")
            }
        }, e.centerArray = function t(e, i) {
            if (e.splice.apply(e, [0, i.length].concat(i.splice(0, i.length))), arguments.length > 2) {
                var n = [].slice.call(arguments, 2);
                n.unshift(e), t.apply(null, n)
            }
            return e
        };
        var r = e.hasAttr = function (t, e) {
            return Object.prototype.hasOwnProperty.call(t, e)
        };
        e.extend = function (t) {
            for (var e, i = arguments[0] || {}, n = Array.prototype.slice.call(arguments, 1), o = 0; o < n.length; o++) {
                var a = n[o];
                for (e in a) r(a, e) && (i[e] = a[e])
            }
            return i
        }, e.getDigit = function (t) {
            return t >= 5 ? 4 * (t - 4) + 4 : t
        }, e.unshiftZero = function (t, e) {
            if (null == e && (e = 1), !(e <= 0))
                for (; e--;) t.unshift(0)
        }, e.clearZero = function (t, e, i) {
            if (null == t) return "";
            var n = ~"*.?+$^[](){}|\\/".indexOf(e) ? "\\" + e : e,
                o = new RegExp("^" + n + "+"),
                a = new RegExp(n + "+$"),
                r = new RegExp(n + "{2}", "g");
            return t = t.toString(), "^" == i && (t = t.replace(o, "")), i && "$" != i || (t = t.replace(a, "")), i && "nto1" != i || (t = t.replace(r, e)), t
        }
    }, function (t, e, i) {
        function n(t) {
            var e = t.option.source,
                i = z;
            if (T(e)) i = N;
            else if (C(e)) {
                0 === e.length && (i = O);
                for (var n = 0, o = e.length; n < o; n++) {
                    var a = e[n];
                    if (null != a) {
                        if (C(a)) {
                            i = O;
                            break
                        }
                        if (I(a)) {
                            i = R;
                            break
                        }
                    }
                }
            } else if (I(e)) {
                for (var r in e)
                    if (e.hasOwnProperty(r) && D(e[r])) {
                        i = E;
                        break
                    }
            } else if (null != e) throw new Error("Invalid data");
            V(t).sourceFormat = i
        }

        function o(t) {
            return V(t).source
        }

        function a(t) {
            V(t).datasetMap = b()
        }

        function r(t) {
            var e = t.option,
                i = e.data,
                n = T(i) ? N : P,
                o = !1,
                a = e.seriesLayoutBy,
                r = e.sourceHeader,
                l = e.dimensions,
                d = f(t);
            if (d) {
                var u = d.option;
                i = u.source, n = V(d).sourceFormat, o = !0, a = a || u.seriesLayoutBy, null == r && (r = u.sourceHeader), l = l || u.dimensions
            }
            var c = s(i, n, a, r, l);
            V(t).source = new A({
                data: i,
                fromDataset: o,
                seriesLayoutBy: a,
                sourceFormat: n,
                dimensionsDefine: c.dimensionsDefine,
                startIndex: c.startIndex,
                dimensionsDetectCount: c.dimensionsDetectCount,
                encodeDefine: e.encode
            })
        }

        function s(t, e, i, n, o) {
            if (!t) return {
                dimensionsDefine: l(o)
            };
            var a, r;
            if (e === O) "auto" === n || null == n ? d(function (t) {
                null != t && "-" !== t && (k(t) ? null == r && (r = 1) : r = 0)
            }, i, t, 10) : r = n ? 1 : 0, o || 1 !== r || (o = [], d(function (t, e) {
                o[e] = null != t ? t : ""
            }, i, t)), a = o ? o.length : i === B ? t.length : t[0] ? t[0].length : null;
            else if (e === R) o || (o = u(t));
            else if (e === E) o || (o = [], w(t, function (t, e) {
                o.push(e)
            }));
            else if (e === P) {
                var s = y(t[0]);
                a = C(s) && s.length || 1
            }
            return {
                startIndex: r,
                dimensionsDefine: l(o),
                dimensionsDetectCount: a
            }
        }

        function l(t) {
            if (t) {
                var e = b();
                return S(t, function (t, i) {
                    if (t = M({}, I(t) ? t : {
                        name: t
                    }), null == t.name) return t;
                    t.name += "", null == t.displayName && (t.displayName = t.name);
                    var n = e.get(t.name);
                    return n ? t.name += "-" + n.count++ : e.set(t.name, {
                        count: 1
                    }), t
                })
            }
        }

        function d(t, e, i, n) {
            if (null == n && (n = 1 / 0), e === B)
                for (var o = 0; o < i.length && o < n; o++) t(i[o] ? i[o][0] : null, o);
            else
                for (var a = i[0] || [], o = 0; o < a.length && o < n; o++) t(a[o], o)
        }

        function u(t) {
            for (var e, i = 0; i < t.length && !(e = t[i++]);) ;
            if (e) {
                var n = [];
                return w(e, function (t, e) {
                    n.push(e)
                }), n
            }
        }

        function c(t, e, i) {
            function n(t, e, i) {
                for (var n = 0; n < i; n++) t.push(e + n)
            }

            function o(t) {
                var e = t.dimsDef;
                return e ? e.length : 1
            }

            var a = {},
                r = f(e);
            if (!r || !t) return a;
            var s, l, d = [],
                u = [],
                c = e.ecModel,
                h = V(c).datasetMap,
                p = r.uid + "_" + i.seriesLayoutBy;
            t = t.slice(), w(t, function (e, i) {
                !I(e) && (t[i] = {
                    name: e
                }), "ordinal" === e.type && null == s && (s = i, l = o(t[i])), a[e.name] = []
            });
            var g = h.get(p) || h.set(p, {
                categoryWayDim: l,
                valueWayDim: 0
            });
            return w(t, function (t, e) {
                var i = t.name,
                    r = o(t);
                if (null == s) {
                    var l = g.valueWayDim;
                    n(a[i], l, r), n(u, l, r), g.valueWayDim += r
                } else if (s === e) n(a[i], 0, r), n(d, 0, r);
                else {
                    var l = g.categoryWayDim;
                    n(a[i], l, r), n(u, l, r), g.categoryWayDim += r
                }
            }), d.length && (a.itemName = d), u.length && (a.seriesName = u), a
        }

        function h(t, e, i) {
            var n = {};
            if (!f(t)) return n;
            var o, a = e.sourceFormat,
                r = e.dimensionsDefine;
            a !== R && a !== E || w(r, function (t, e) {
                "name" === (I(t) ? t.name : t) && (o = e)
            });
            var s = function () {
                function t(t) {
                    return null != t.v && null != t.n
                }

                for (var n = {}, s = {}, l = [], d = 0, u = Math.min(5, i); d < u; d++) {
                    var c = g(e.data, a, e.seriesLayoutBy, r, e.startIndex, d);
                    l.push(c);
                    var h = c === F.Not;
                    if (h && null == n.v && d !== o && (n.v = d), (null == n.n || n.n === n.v || !h && l[n.n] === F.Not) && (n.n = d), t(n) && l[n.n] !== F.Not) return n;
                    h || (c === F.Might && null == s.v && d !== o && (s.v = d), null != s.n && s.n !== s.v || (s.n = d))
                }
                return t(n) ? n : t(s) ? s : null
            }();
            if (s) {
                n.value = s.v;
                var l = null != o ? o : s.n;
                n.itemName = [l], n.seriesName = [l]
            }
            return n
        }

        function f(t) {
            var e = t.option;
            if (!e.data) return t.ecModel.getComponent("dataset", e.datasetIndex || 0)
        }

        function p(t, e) {
            return g(t.data, t.sourceFormat, t.seriesLayoutBy, t.dimensionsDefine, t.startIndex, e)
        }

        function g(t, e, i, n, o, a) {
            function r(t) {
                var e = k(t);
                return null != t && isFinite(t) && "" !== t ? e ? F.Might : F.Not : e && "-" !== t ? F.Must : void 0
            }

            var s;
            if (T(t)) return F.Not;
            var l, d;
            if (n) {
                var u = n[a];
                I(u) ? (l = u.name, d = u.type) : k(u) && (l = u)
            }
            if (null != d) return "ordinal" === d ? F.Must : F.Not;
            if (e === O)
                if (i === B) {
                    for (var c = t[a], h = 0; h < (c || []).length && h < 5; h++)
                        if (null != (s = r(c[o + h]))) return s
                } else
                    for (var h = 0; h < t.length && h < 5; h++) {
                        var f = t[o + h];
                        if (f && null != (s = r(f[a]))) return s
                    } else if (e === R) {
                if (!l) return F.Not;
                for (var h = 0; h < t.length && h < 5; h++) {
                    var p = t[h];
                    if (p && null != (s = r(p[l]))) return s
                }
            } else if (e === E) {
                if (!l) return F.Not;
                var c = t[l];
                if (!c || T(c)) return F.Not;
                for (var h = 0; h < c.length && h < 5; h++)
                    if (null != (s = r(c[h]))) return s
            } else if (e === P)
                for (var h = 0; h < t.length && h < 5; h++) {
                    var p = t[h],
                        g = y(p);
                    if (!C(g)) return F.Not;
                    if (null != (s = r(g[a]))) return s
                }
            return F.Not
        }

        var v = i(634),
            m = (v.__DEV__, i(631)),
            _ = m.makeInner,
            y = m.getDataItemValue,
            x = i(630),
            b = x.createHashMap,
            w = x.each,
            S = x.map,
            C = x.isArray,
            k = x.isString,
            I = x.isObject,
            T = x.isTypedArray,
            D = x.isArrayLike,
            M = x.extend,
            A = (x.assert, i(649)),
            L = i(651),
            P = L.SOURCE_FORMAT_ORIGINAL,
            O = L.SOURCE_FORMAT_ARRAY_ROWS,
            R = L.SOURCE_FORMAT_OBJECT_ROWS,
            E = L.SOURCE_FORMAT_KEYED_COLUMNS,
            z = L.SOURCE_FORMAT_UNKNOWN,
            N = L.SOURCE_FORMAT_TYPED_ARRAY,
            B = L.SERIES_LAYOUT_BY_ROW,
            F = {
                Must: 1,
                Might: 2,
                Not: 3
            },
            V = _();
        e.BE_ORDINAL = F, e.detectSourceFormat = n, e.getSource = o, e.resetSourceDefaulter = a, e.prepareSource = r, e.makeSeriesEncodeForAxisCoordSys = c, e.makeSeriesEncodeForNameBased = h, e.guessOrdinal = p
    }, function (t, e, i) {
        function n(t) {
            var e = [];
            return o.each(g.getClassesByMainType(t), function (t) {
                e = e.concat(t.prototype.dependencies || [])
            }), e = o.map(e, function (t) {
                return d(t).main
            }), "dataset" !== t && o.indexOf(e, "dataset") <= 0 && e.unshift("dataset"), e
        }

        var o = i(630),
            a = i(646),
            r = i(660),
            s = i(641),
            l = s.enableClassManagement,
            d = s.parseClassType,
            u = i(631),
            c = u.makeInner,
            h = i(647),
            f = i(805),
            p = c(),
            g = a.extend({
                type: "component",
                id: "",
                name: "",
                mainType: "",
                subType: "",
                componentIndex: 0,
                defaultOption: null,
                ecModel: null,
                dependentModels: [],
                uid: null,
                layoutMode: null,
                $constructor: function (t, e, i, n) {
                    a.call(this, t, e, i, n), this.uid = r.getUID("ec_cpt_model")
                },
                init: function (t, e, i, n) {
                    this.mergeDefaultAndTheme(t, i)
                },
                mergeDefaultAndTheme: function (t, e) {
                    var i = this.layoutMode,
                        n = i ? h.getLayoutParams(t) : {},
                        a = e.getTheme();
                    o.merge(t, a.get(this.mainType)), o.merge(t, this.getDefaultOption()), i && h.mergeLayoutParam(t, n, i)
                },
                mergeOption: function (t, e) {
                    o.merge(this.option, t, !0);
                    var i = this.layoutMode;
                    i && h.mergeLayoutParam(this.option, t, i)
                },
                optionUpdated: function (t, e) {
                },
                getDefaultOption: function () {
                    var t = p(this);
                    if (!t.defaultOption) {
                        for (var e = [], i = this.constructor; i;) {
                            var n = i.prototype.defaultOption;
                            n && e.push(n), i = i.superClass
                        }
                        for (var a = {}, r = e.length - 1; r >= 0; r--) a = o.merge(a, e[r], !0);
                        t.defaultOption = a
                    }
                    return t.defaultOption
                },
                getReferringComponents: function (t) {
                    return this.ecModel.queryComponents({
                        mainType: t,
                        index: this.get(t + "Index", !0),
                        id: this.get(t + "Id", !0)
                    })
                }
            });
        l(g, {
            registerWhenExtend: !0
        }), r.enableSubTypeDefaulter(g), r.enableTopologicalTravel(g, n), o.mixin(g, f);
        var v = g;
        t.exports = v
    }, function (t, e, i) {
        function n(t, e, i) {
            this.parentModel = e, this.ecModel = i, this.option = t
        }

        function o(t, e, i) {
            for (var n = 0; n < e.length && (!e[n] || null != (t = t && "object" == typeof t ? t[e[n]] : null)); n++) ;
            return null == t && i && (t = i.get(e)), t
        }

        function a(t, e) {
            var i = _(t).getParent;
            return i ? i.call(t, e) : t.parentModel
        }

        var r = i(630),
            s = i(637),
            l = i(631),
            d = l.makeInner,
            u = i(641),
            c = u.enableClassExtend,
            h = u.enableClassCheck,
            f = i(808),
            p = i(804),
            g = i(809),
            v = i(807),
            m = r.mixin,
            _ = d();
        n.prototype = {
            constructor: n,
            init: null,
            mergeOption: function (t) {
                r.merge(this.option, t, !0)
            },
            get: function (t, e) {
                return null == t ? this.option : o(this.option, this.parsePath(t), !e && a(this, t))
            },
            getShallow: function (t, e) {
                var i = this.option,
                    n = null == i ? i : i[t],
                    o = !e && a(this, t);
                return null == n && o && (n = o.getShallow(t)), n
            },
            getModel: function (t, e) {
                var i, r = null == t ? this.option : o(this.option, t = this.parsePath(t));
                return e = e || (i = a(this, t)) && i.getModel(t), new n(r, e, this.ecModel)
            },
            isEmpty: function () {
                return null == this.option
            },
            restoreData: function () {
            },
            clone: function () {
                return new (0, this.constructor)(r.clone(this.option))
            },
            setReadOnly: function (t) {
            },
            parsePath: function (t) {
                return "string" == typeof t && (t = t.split(".")), t
            },
            customizeGetParent: function (t) {
                _(this).getParent = t
            },
            isAnimationEnabled: function () {
                if (!s.node) {
                    if (null != this.option.animation) return !!this.option.animation;
                    if (this.parentModel) return this.parentModel.isAnimationEnabled()
                }
            }
        }, c(n), h(n), m(n, f), m(n, p), m(n, g), m(n, v);
        var y = n;
        t.exports = y
    }, function (t, e, i) {
        function n(t, e, i, n, o) {
            var a = 0,
                r = 0;
            null == n && (n = 1 / 0), null == o && (o = 1 / 0);
            var s = 0;
            e.eachChild(function (l, d) {
                var u, c, h = l.position,
                    f = l.getBoundingRect(),
                    p = e.childAt(d + 1),
                    g = p && p.getBoundingRect();
                if ("horizontal" === t) {
                    var v = f.width + (g ? -g.x + f.x : 0);
                    u = a + v, u > n || l.newline ? (a = 0, u = v, r += s + i, s = f.height) : s = Math.max(s, f.height)
                } else {
                    var m = f.height + (g ? -g.y + f.y : 0);
                    c = r + m, c > o || l.newline ? (a += s + i, r = 0, c = m, s = f.width) : s = Math.max(s, f.width)
                }
                l.newline || (h[0] = a, h[1] = r, "horizontal" === t ? a = u + i : r = c + i)
            })
        }

        function o(t, e, i) {
            var n = e.width,
                o = e.height,
                a = p(t.x, n),
                r = p(t.y, o),
                s = p(t.x2, n),
                l = p(t.y2, o);
            return (isNaN(a) || isNaN(parseFloat(t.x))) && (a = 0), (isNaN(s) || isNaN(parseFloat(t.x2))) && (s = n), (isNaN(r) || isNaN(parseFloat(t.y))) && (r = 0), (isNaN(l) || isNaN(parseFloat(t.y2))) && (l = o), i = g.normalizeCssArray(i || 0), {
                width: Math.max(s - a - i[1] - i[3], 0),
                height: Math.max(l - r - i[0] - i[2], 0)
            }
        }

        function a(t, e, i) {
            i = g.normalizeCssArray(i || 0);
            var n = e.width,
                o = e.height,
                a = p(t.left, n),
                r = p(t.top, o),
                s = p(t.right, n),
                l = p(t.bottom, o),
                d = p(t.width, n),
                u = p(t.height, o),
                c = i[2] + i[0],
                f = i[1] + i[3],
                v = t.aspect;
            switch (isNaN(d) && (d = n - s - f - a), isNaN(u) && (u = o - l - c - r), null != v && (isNaN(d) && isNaN(u) && (v > n / o ? d = .8 * n : u = .8 * o), isNaN(d) && (d = v * u), isNaN(u) && (u = d / v)), isNaN(a) && (a = n - s - d - f), isNaN(r) && (r = o - l - u - c), t.left || t.right) {
                case "center":
                    a = n / 2 - d / 2 - i[3];
                    break;
                case "right":
                    a = n - d - f
            }
            switch (t.top || t.bottom) {
                case "middle":
                case "center":
                    r = o / 2 - u / 2 - i[0];
                    break;
                case "bottom":
                    r = o - u - c
            }
            a = a || 0, r = r || 0, isNaN(d) && (d = n - f - a - (s || 0)), isNaN(u) && (u = o - c - r - (l || 0));
            var m = new h(a + i[3], r + i[0], d, u);
            return m.margin = i, m
        }

        function r(t, e, i, n, o) {
            var r = !o || !o.hv || o.hv[0],
                s = !o || !o.hv || o.hv[1],
                l = o && o.boundingMode || "all";
            if (r || s) {
                var d;
                if ("raw" === l) d = "group" === t.type ? new h(0, 0, +e.width || 0, +e.height || 0) : t.getBoundingRect();
                else if (d = t.getBoundingRect(), t.needLocalTransform()) {
                    var u = t.getLocalTransform();
                    d = d.clone(), d.applyTransform(u)
                }
                e = a(c.defaults({
                    width: d.width,
                    height: d.height
                }, e), i, n);
                var f = t.position,
                    p = r ? e.x - d.x : 0,
                    g = s ? e.y - d.y : 0;
                t.attr("position", "raw" === l ? [p, g] : [f[0] + p, f[1] + g])
            }
        }

        function s(t, e) {
            return null != t[_[e][0]] || null != t[_[e][1]] && null != t[_[e][2]]
        }

        function l(t, e, i) {
            function n(i, n) {
                var r = {},
                    l = 0,
                    d = {},
                    u = 0;
                if (v(i, function (e) {
                    d[e] = t[e]
                }), v(i, function (t) {
                    o(e, t) && (r[t] = d[t] = e[t]), a(r, t) && l++, a(d, t) && u++
                }), s[n]) return a(e, i[1]) ? d[i[2]] = null : a(e, i[2]) && (d[i[1]] = null), d;
                if (2 !== u && l) {
                    if (l >= 2) return r;
                    for (var c = 0; c < i.length; c++) {
                        var h = i[c];
                        if (!o(r, h) && o(t, h)) {
                            r[h] = t[h];
                            break
                        }
                    }
                    return r
                }
                return d
            }

            function o(t, e) {
                return t.hasOwnProperty(e)
            }

            function a(t, e) {
                return null != t[e] && "auto" !== t[e]
            }

            function r(t, e, i) {
                v(t, function (t) {
                    e[t] = i[t]
                })
            }

            !c.isObject(i) && (i = {});
            var s = i.ignoreSize;
            !c.isArray(s) && (s = [s, s]);
            var l = n(_[0], 0),
                d = n(_[1], 1);
            r(_[0], t, l), r(_[1], t, d)
        }

        function d(t) {
            return u({}, t)
        }

        function u(t, e) {
            return e && t && v(m, function (i) {
                e.hasOwnProperty(i) && (t[i] = e[i])
            }), t
        }

        var c = i(630),
            h = i(636),
            f = i(632),
            p = f.parsePercent,
            g = i(642),
            v = c.each,
            m = ["left", "right", "top", "bottom", "width", "height"],
            _ = [
                ["width", "left", "right"],
                ["height", "top", "bottom"]
            ],
            y = n,
            x = c.curry(n, "vertical"),
            b = c.curry(n, "horizontal");
        e.LOCATION_PARAMS = m, e.HV_NAMES = _, e.box = y, e.vbox = x, e.hbox = b, e.getAvailableSize = o, e.getLayoutRect = a, e.positionElement = r, e.sizeCalculable = s, e.mergeLayoutParam = l, e.getLayoutParams = d, e.copyLayoutParams = u
    }, function (t, e, i) {
        function n(t) {
            return t > -w && t < w
        }

        function o(t) {
            return t > w || t < -w
        }

        function a(t, e, i, n, o) {
            var a = 1 - o;
            return a * a * (a * t + 3 * o * e) + o * o * (o * n + 3 * a * i)
        }

        function r(t, e, i, n, o) {
            var a = 1 - o;
            return 3 * (((e - t) * a + 2 * (i - e) * o) * a + (n - i) * o * o)
        }

        function s(t, e, i, o, a, r) {
            var s = o + 3 * (e - i) - t,
                l = 3 * (i - 2 * e + t),
                d = 3 * (e - t),
                u = t - a,
                c = l * l - 3 * s * d,
                h = l * d - 9 * s * u,
                f = d * d - 3 * l * u,
                p = 0;
            if (n(c) && n(h))
                if (n(l)) r[0] = 0;
                else {
                    var g = -d / l;
                    g >= 0 && g <= 1 && (r[p++] = g)
                }
            else {
                var v = h * h - 4 * c * f;
                if (n(v)) {
                    var m = h / c,
                        g = -l / s + m,
                        _ = -m / 2;
                    g >= 0 && g <= 1 && (r[p++] = g), _ >= 0 && _ <= 1 && (r[p++] = _)
                } else if (v > 0) {
                    var y = b(v),
                        w = c * l + 1.5 * s * (-h + y),
                        S = c * l + 1.5 * s * (-h - y);
                    w = w < 0 ? -x(-w, k) : x(w, k), S = S < 0 ? -x(-S, k) : x(S, k);
                    var g = (-l - (w + S)) / (3 * s);
                    g >= 0 && g <= 1 && (r[p++] = g)
                } else {
                    var I = (2 * c * l - 3 * s * h) / (2 * b(c * c * c)),
                        T = Math.acos(I) / 3,
                        D = b(c),
                        M = Math.cos(T),
                        g = (-l - 2 * D * M) / (3 * s),
                        _ = (-l + D * (M + C * Math.sin(T))) / (3 * s),
                        A = (-l + D * (M - C * Math.sin(T))) / (3 * s);
                    g >= 0 && g <= 1 && (r[p++] = g), _ >= 0 && _ <= 1 && (r[p++] = _), A >= 0 && A <= 1 && (r[p++] = A)
                }
            }
            return p
        }

        function l(t, e, i, a, r) {
            var s = 6 * i - 12 * e + 6 * t,
                l = 9 * e + 3 * a - 3 * t - 9 * i,
                d = 3 * e - 3 * t,
                u = 0;
            if (n(l)) {
                if (o(s)) {
                    var c = -d / s;
                    c >= 0 && c <= 1 && (r[u++] = c)
                }
            } else {
                var h = s * s - 4 * l * d;
                if (n(h)) r[0] = -s / (2 * l);
                else if (h > 0) {
                    var f = b(h),
                        c = (-s + f) / (2 * l),
                        p = (-s - f) / (2 * l);
                    c >= 0 && c <= 1 && (r[u++] = c), p >= 0 && p <= 1 && (r[u++] = p)
                }
            }
            return u
        }

        function d(t, e, i, n, o, a) {
            var r = (e - t) * o + t,
                s = (i - e) * o + e,
                l = (n - i) * o + i,
                d = (s - r) * o + r,
                u = (l - s) * o + s,
                c = (u - d) * o + d;
            a[0] = t, a[1] = r, a[2] = d, a[3] = c, a[4] = c, a[5] = u, a[6] = l, a[7] = n
        }

        function u(t, e, i, n, o, r, s, l, d, u, c) {
            var h, f, p, g, v, m = .005,
                _ = 1 / 0;
            I[0] = d, I[1] = u;
            for (var x = 0; x < 1; x += .05) T[0] = a(t, i, o, s, x), T[1] = a(e, n, r, l, x), (g = y(I, T)) < _ && (h = x, _ = g);
            _ = 1 / 0;
            for (var w = 0; w < 32 && !(m < S); w++) f = h - m, p = h + m, T[0] = a(t, i, o, s, f), T[1] = a(e, n, r, l, f), g = y(T, I), f >= 0 && g < _ ? (h = f, _ = g) : (D[0] = a(t, i, o, s, p), D[1] = a(e, n, r, l, p), v = y(D, I), p <= 1 && v < _ ? (h = p, _ = v) : m *= .5);
            return c && (c[0] = a(t, i, o, s, h), c[1] = a(e, n, r, l, h)), b(_)
        }

        function c(t, e, i, n) {
            var o = 1 - n;
            return o * (o * t + 2 * n * e) + n * n * i
        }

        function h(t, e, i, n) {
            return 2 * ((1 - n) * (e - t) + n * (i - e))
        }

        function f(t, e, i, a, r) {
            var s = t - 2 * e + i,
                l = 2 * (e - t),
                d = t - a,
                u = 0;
            if (n(s)) {
                if (o(l)) {
                    var c = -d / l;
                    c >= 0 && c <= 1 && (r[u++] = c)
                }
            } else {
                var h = l * l - 4 * s * d;
                if (n(h)) {
                    var c = -l / (2 * s);
                    c >= 0 && c <= 1 && (r[u++] = c)
                } else if (h > 0) {
                    var f = b(h),
                        c = (-l + f) / (2 * s),
                        p = (-l - f) / (2 * s);
                    c >= 0 && c <= 1 && (r[u++] = c), p >= 0 && p <= 1 && (r[u++] = p)
                }
            }
            return u
        }

        function p(t, e, i) {
            var n = t + i - 2 * e;
            return 0 === n ? .5 : (t - e) / n
        }

        function g(t, e, i, n, o) {
            var a = (e - t) * n + t,
                r = (i - e) * n + e,
                s = (r - a) * n + a;
            o[0] = t, o[1] = a, o[2] = s, o[3] = s, o[4] = r, o[5] = i
        }

        function v(t, e, i, n, o, a, r, s, l) {
            var d, u = .005,
                h = 1 / 0;
            I[0] = r, I[1] = s;
            for (var f = 0; f < 1; f += .05) {
                T[0] = c(t, i, o, f), T[1] = c(e, n, a, f);
                var p = y(I, T);
                p < h && (d = f, h = p)
            }
            h = 1 / 0;
            for (var g = 0; g < 32 && !(u < S); g++) {
                var v = d - u,
                    m = d + u;
                T[0] = c(t, i, o, v), T[1] = c(e, n, a, v);
                var p = y(T, I);
                if (v >= 0 && p < h) d = v, h = p;
                else {
                    D[0] = c(t, i, o, m), D[1] = c(e, n, a, m);
                    var _ = y(D, I);
                    m <= 1 && _ < h ? (d = m, h = _) : u *= .5
                }
            }
            return l && (l[0] = c(t, i, o, d), l[1] = c(e, n, a, d)), b(h)
        }

        var m = i(635),
            _ = m.create,
            y = m.distSquare,
            x = Math.pow,
            b = Math.sqrt,
            w = 1e-8,
            S = 1e-4,
            C = b(3),
            k = 1 / 3,
            I = _(),
            T = _(),
            D = _();
        e.cubicAt = a, e.cubicDerivativeAt = r, e.cubicRootAt = s, e.cubicExtrema = l, e.cubicSubdivide = d, e.cubicProjectPoint = u, e.quadraticAt = c, e.quadraticDerivativeAt = h, e.quadraticRootAt = f, e.quadraticExtremum = p, e.quadraticSubdivide = g, e.quadraticProjectPoint = v
    }, function (t, e, i) {
        function n(t) {
            this.fromDataset = t.fromDataset, this.data = t.data || (t.sourceFormat === p ? {} : []), this.sourceFormat = t.sourceFormat || h, this.seriesLayoutBy = t.seriesLayoutBy || c, this.dimensionsDefine = t.dimensionsDefine, this.encodeDefine = t.encodeDefine && a(t.encodeDefine), this.startIndex = t.startIndex || 0, this.dimensionsDetectCount = t.dimensionsDetectCount
        }

        var o = i(630),
            a = o.createHashMap,
            r = o.isTypedArray,
            s = i(641),
            l = s.enableClassCheck,
            d = i(651),
            u = d.SOURCE_FORMAT_ORIGINAL,
            c = d.SERIES_LAYOUT_BY_COLUMN,
            h = d.SOURCE_FORMAT_UNKNOWN,
            f = d.SOURCE_FORMAT_TYPED_ARRAY,
            p = d.SOURCE_FORMAT_KEYED_COLUMNS;
        n.seriesDataToSource = function (t) {
            return new n({
                data: t,
                sourceFormat: r(t) ? f : u,
                fromDataset: !1
            })
        }, l(n);
        var g = n;
        t.exports = g
    }, function (t, e, i) {
        function n(t, e) {
            w.isInstance(t) || (t = w.seriesDataToSource(t)), this._source = t;
            var i = this._data = t.data,
                n = t.sourceFormat;
            n === C && (this._offset = 0, this._dimSize = e, this._data = i);
            var o = M[n === k ? n + "_" + t.seriesLayoutBy : n];
            p(this, o)
        }

        function o() {
            return this._data.length
        }

        function a(t) {
            return this._data[t]
        }

        function r(t) {
            for (var e = 0; e < t.length; e++) this._data.push(t[e])
        }

        function s(t, e, i, n) {
            return null != i ? t[i] : t
        }

        function l(t, e, i, n) {
            return d(t[n], this._dimensionInfos[e])
        }

        function d(t, e) {
            var i = e && e.type;
            if ("ordinal" === i) {
                var n = e && e.ordinalMeta;
                return n ? n.parseAndCollect(t) : t
            }
            return "time" === i && "number" != typeof t && null != t && "-" !== t && (t = +b(t)), null == t || "" === t ? NaN : +t
        }

        function u(t, e, i) {
            if (t) {
                var n = t.getRawDataItem(e);
                if (null != n) {
                    var o, a, r = t.getProvider().getSource().sourceFormat,
                        s = t.getDimensionInfo(i);
                    return s && (o = s.name, a = s.index), A[r](n, e, a, o)
                }
            }
        }

        function c(t, e, i) {
            if (t) {
                var n = t.getProvider().getSource().sourceFormat;
                if (n === I || n === T) {
                    var o = t.getRawDataItem(e);
                    return n !== I || v(o) || (o = null), o ? o[i] : void 0
                }
            }
        }

        var h = i(634),
            f = (h.__DEV__, i(630)),
            p = (f.isTypedArray, f.extend),
            g = (f.assert, f.each),
            v = f.isObject,
            m = i(631),
            _ = m.getDataItemValue,
            y = m.isDataItemOption,
            x = i(632),
            b = x.parseDate,
            w = i(649),
            S = i(651),
            C = S.SOURCE_FORMAT_TYPED_ARRAY,
            k = S.SOURCE_FORMAT_ARRAY_ROWS,
            I = S.SOURCE_FORMAT_ORIGINAL,
            T = S.SOURCE_FORMAT_OBJECT_ROWS,
            D = n.prototype;
        D.pure = !1, D.persistent = !0, D.getSource = function () {
            return this._source
        };
        var M = {
                arrayRows_column: {
                    pure: !0,
                    count: function () {
                        return Math.max(0, this._data.length - this._source.startIndex)
                    },
                    getItem: function (t) {
                        return this._data[t + this._source.startIndex]
                    },
                    appendData: r
                },
                arrayRows_row: {
                    pure: !0,
                    count: function () {
                        var t = this._data[0];
                        return t ? Math.max(0, t.length - this._source.startIndex) : 0
                    },
                    getItem: function (t) {
                        t += this._source.startIndex;
                        for (var e = [], i = this._data, n = 0; n < i.length; n++) {
                            var o = i[n];
                            e.push(o ? o[t] : null)
                        }
                        return e
                    },
                    appendData: function () {
                        throw new Error('Do not support appendData when set seriesLayoutBy: "row".')
                    }
                },
                objectRows: {
                    pure: !0,
                    count: o,
                    getItem: a,
                    appendData: r
                },
                keyedColumns: {
                    pure: !0,
                    count: function () {
                        var t = this._source.dimensionsDefine[0].name,
                            e = this._data[t];
                        return e ? e.length : 0
                    },
                    getItem: function (t) {
                        for (var e = [], i = this._source.dimensionsDefine, n = 0; n < i.length; n++) {
                            var o = this._data[i[n].name];
                            e.push(o ? o[t] : null)
                        }
                        return e
                    },
                    appendData: function (t) {
                        var e = this._data;
                        g(t, function (t, i) {
                            for (var n = e[i] || (e[i] = []), o = 0; o < (t || []).length; o++) n.push(t[o])
                        })
                    }
                },
                original: {
                    count: o,
                    getItem: a,
                    appendData: r
                },
                typedArray: {
                    persistent: !1,
                    pure: !0,
                    count: function () {
                        return this._data ? this._data.length / this._dimSize : 0
                    },
                    getItem: function (t, e) {
                        t -= this._offset, e = e || [];
                        for (var i = this._dimSize * t, n = 0; n < this._dimSize; n++) e[n] = this._data[i + n];
                        return e
                    },
                    appendData: function (t) {
                        this._data = t
                    },
                    clean: function () {
                        this._offset += this.count(), this._data = null
                    }
                }
            },
            A = {
                arrayRows: s,
                objectRows: function (t, e, i, n) {
                    return null != i ? t[n] : t
                },
                keyedColumns: s,
                original: function (t, e, i, n) {
                    var o = _(t);
                    return null != i && o instanceof Array ? o[i] : o
                },
                typedArray: s
            },
            L = {
                arrayRows: l,
                objectRows: function (t, e, i, n) {
                    return d(t[e], this._dimensionInfos[e])
                },
                keyedColumns: l,
                original: function (t, e, i, n) {
                    var o = t && (null == t.value ? t : t.value);
                    return !this._rawData.pure && y(t) && (this.hasItemOption = !0), d(o instanceof Array ? o[n] : o, this._dimensionInfos[e])
                },
                typedArray: function (t, e, i, n) {
                    return t[n]
                }
            };
        e.DefaultDataProvider = n, e.defaultDimValueGetters = L, e.retrieveRawValue = u, e.retrieveRawAttr = c
    }, function (t, e) {
        e.SOURCE_FORMAT_ORIGINAL = "original", e.SOURCE_FORMAT_ARRAY_ROWS = "arrayRows", e.SOURCE_FORMAT_OBJECT_ROWS = "objectRows", e.SOURCE_FORMAT_KEYED_COLUMNS = "keyedColumns", e.SOURCE_FORMAT_UNKNOWN = "unknown", e.SOURCE_FORMAT_TYPED_ARRAY = "typedArray", e.SERIES_LAYOUT_BY_COLUMN = "column", e.SERIES_LAYOUT_BY_ROW = "row"
    }, function (t, e, i) {
        function n(t, e) {
            return {
                encodeS: function (e, i) {
                    return i = a.extend({
                        ww: !0,
                        tenMin: !0
                    }, i), o.CL.call(t, e, i)
                },
                encodeB: function (t, i) {
                    return i = a.extend({
                        ww: !0
                    }, i), o.CL.call(e, t, i)
                },
                decodeS: function () {
                    return o.unCL.apply(t, arguments)
                },
                decodeB: function () {
                    return o.unCL.apply(e, arguments)
                },
                toMoney: function (t, i) {
                    return i = a.extend({
                        ww: !0
                    }, i), o.toMoney.call(e, t, i)
                }
            }
        }

        var o = i(653),
            a = i(643);
        t.exports = n
    }, function (t, e, i) {
        function n(t, e) {
            var i = r.getNumbResult(t);
            if (!i) return t;
            e = e || {};
            var n = this.ch,
                o = this.ch_u,
                a = this.ch_f || "",
                s = this.ch_d || ".",
                l = n.charAt(0),
                d = i.int,
                u = i.decimal,
                c = i.minus,
                h = "",
                f = "",
                p = c ? a : "";
            if (u) {
                u = r.clearZero(u, "0", "$");
                for (var g = 0; g < u.length; g++) f += n.charAt(+u.charAt(g));
                f = f ? s + f : ""
            }
            if (h = function t(i, a, s) {
                i = r.getNumbResult(i).int;
                var d = "",
                    u = arguments.length > 1 ? arguments[1] : e.tenMin,
                    c = i.length;
                if (1 == c) return n.charAt(+i);
                if (c <= 4)
                    for (var h = 0, f = c; f--;) {
                        var p = +i.charAt(h);
                        d += u && 2 == c && 0 == h && 1 == p ? "" : n.charAt(p), d += p && f ? o.charAt(f) : "", h++
                    } else {
                    for (var g = i.length / 4 >> 0, v = i.length % 4; 0 == v || !o.charAt(3 + g);) v += 4, g--;
                    var m = i.substr(0, v),
                        _ = i.substr(v);
                    d = t(m, u) + o.charAt(3 + g) + ("0" == _.charAt(0) ? l : "") + t(_, u)
                }
                return d = r.clearZero(d, l)
            }(d), e.ww && o.length > 5) {
                var v = o.charAt(4),
                    m = o.charAt(5),
                    _ = h.lastIndexOf(m);
                ~_ && (h = h.substring(0, _).replace(new RegExp(m, "g"), v + v) + h.substring(_))
            }
            return p + h + f
        }

        function o(t) {
            t = t.toString();
            var e = t.split(this.ch_d),
                i = e[0].replace(this.ch_f, ""),
                n = e[1],
                o = !!~e[0].indexOf(this.ch_f),
                a = this.ch_u.charAt(1),
                s = this.ch_u.charAt(4),
                l = this.ch_u.charAt(5);
            i = i.replace(new RegExp(s + "{2}", "g"), l);
            for (var d = i.split(""), u = 0, c = 0, h = [], f = [], p = [], g = 0; g < d.length; g++) {
                var v = d[g],
                    m = 0,
                    _ = 0;
                if (~(m = this.ch.indexOf(v))) m > 0 && p.unshift(m);
                else if (~(_ = this.ch_u.indexOf(v))) {
                    var y = r.getDigit(_);
                    u > _ ? (r.unshiftZero(p, y), r.centerArray(f, p)) : _ >= c ? (0 == g && (p = [1]), r.centerArray(h, f, p), h.length > 0 && r.unshiftZero(h, y), c = _) : (0 == p.length && a == v && (p = [1]), r.centerArray(f, p), r.unshiftZero(f, r.getDigit(_)), u = _)
                }
            }
            r.centerArray(h, f, p).reverse(), 0 == h.length && h.push(0);
            var x = 0;
            if (n) {
                h.push("."), x = "0.";
                for (var g = 0; g < n.length; g++) x += this.ch.indexOf(n.charAt(g)), h.push(this.ch.indexOf(n.charAt(g)));
                x = +x
            }
            return o && h.unshift("-"), parseFloat(h.join(""))
        }

        function a(t, e) {
            var i = {
                    ww: !0,
                    complete: !1,
                    outSymbol: !0
                },
                o = r.getNumbResult(t),
                a = this.ch.charAt(0);
            if (e = "object" == typeof e ? e : {}, !o) return t;
            e = r.extend(i, e);
            var s = o.num,
                l = o.decimal || "",
                d = e.outSymbol ? this.m_t : "",
                u = l ? "" : this.m_z,
                c = "";
            if (e.complete) {
                for (var h = 1; h < this.m_u.length; h++) c += n.call(this, l.charAt(h - 1) || "0") + this.m_u.charAt(h);
                u = n.call(this, s, e) + this.m_u.charAt(0)
            } else {
                if (l = r.clearZero(l, "0", "$"))
                    for (var f, h = 0; h < this.m_u.length - 1; h++) l.charAt(h) && "0" != l.charAt(h) && (c += n.call(this, l.charAt(h)) + this.m_u.charAt(h + 1), f = !1), "0" !== l.charAt(h) || f || (0 == h && "0" == s || (c += a), f = !0);
                "0" == s && !u && c || (u = n.call(this, s, e) + this.m_u.charAt(0) + u)
            }
            return d + u + c
        }

        var r = i(643);
        t.exports = {
            CL: n,
            unCL: o,
            toMoney: a
        }
    }, function (t, e) {
        t.exports = {
            ch: "零壹贰叁肆伍陆柒捌玖",
            ch_u: "个拾佰仟万亿",
            ch_f: "负",
            ch_d: "点",
            m_t: "人民币",
            m_z: "整",
            m_u: "元角分"
        }
    }, function (t, e) {
        t.exports = {
            ch: "零一二三四五六七八九",
            ch_u: "个十百千万亿",
            ch_f: "负",
            ch_d: "点"
        }
    }, function (t, e, i) {
        var n = i(630),
            o = i(711),
            a = i(636),
            r = function (t) {
                t = t || {}, o.call(this, t);
                for (var e in t) t.hasOwnProperty(e) && (this[e] = t[e]);
                this._children = [], this.__storage = null, this.__dirty = !0
            };
        r.prototype = {
            constructor: r,
            isGroup: !0,
            type: "group",
            silent: !1,
            children: function () {
                return this._children.slice()
            },
            childAt: function (t) {
                return this._children[t]
            },
            childOfName: function (t) {
                for (var e = this._children, i = 0; i < e.length; i++)
                    if (e[i].name === t) return e[i]
            },
            childCount: function () {
                return this._children.length
            },
            add: function (t) {
                return t && t !== this && t.parent !== this && (this._children.push(t), this._doAdd(t)), this
            },
            addBefore: function (t, e) {
                if (t && t !== this && t.parent !== this && e && e.parent === this) {
                    var i = this._children,
                        n = i.indexOf(e);
                    n >= 0 && (i.splice(n, 0, t), this._doAdd(t))
                }
                return this
            },
            _doAdd: function (t) {
                t.parent && t.parent.remove(t), t.parent = this;
                var e = this.__storage,
                    i = this.__zr;
                e && e !== t.__storage && (e.addToStorage(t), t instanceof r && t.addChildrenToStorage(e)), i && i.refresh()
            },
            remove: function (t) {
                var e = this.__zr,
                    i = this.__storage,
                    o = this._children,
                    a = n.indexOf(o, t);
                return a < 0 ? this : (o.splice(a, 1), t.parent = null, i && (i.delFromStorage(t), t instanceof r && t.delChildrenFromStorage(i)), e && e.refresh(), this)
            },
            removeAll: function () {
                var t, e, i = this._children,
                    n = this.__storage;
                for (e = 0; e < i.length; e++) t = i[e], n && (n.delFromStorage(t), t instanceof r && t.delChildrenFromStorage(n)), t.parent = null;
                return i.length = 0, this
            },
            eachChild: function (t, e) {
                for (var i = this._children, n = 0; n < i.length; n++) {
                    var o = i[n];
                    t.call(e, o, n)
                }
                return this
            },
            traverse: function (t, e) {
                for (var i = 0; i < this._children.length; i++) {
                    var n = this._children[i];
                    t.call(e, n), "group" === n.type && n.traverse(t, e)
                }
                return this
            },
            addChildrenToStorage: function (t) {
                for (var e = 0; e < this._children.length; e++) {
                    var i = this._children[e];
                    t.addToStorage(i), i instanceof r && i.addChildrenToStorage(t)
                }
            },
            delChildrenFromStorage: function (t) {
                for (var e = 0; e < this._children.length; e++) {
                    var i = this._children[e];
                    t.delFromStorage(i), i instanceof r && i.delChildrenFromStorage(t)
                }
            },
            dirty: function () {
                return this.__dirty = !0, this.__zr && this.__zr.refresh(), this
            },
            getBoundingRect: function (t) {
                for (var e = null, i = new a(0, 0, 0, 0), n = t || this._children, o = [], r = 0; r < n.length; r++) {
                    var s = n[r];
                    if (!s.ignore && !s.invisible) {
                        var l = s.getBoundingRect(),
                            d = s.getLocalTransform(o);
                        d ? (i.copy(l), i.applyTransform(d), e = e || i.clone(), e.union(i)) : (e = e || l.clone(), e.union(l))
                    }
                }
                return e || i
            }
        }, n.inherits(r, o);
        var s = r;
        t.exports = s
    }, function (t, e) {
        function i() {
            var t = new c(6);
            return n(t), t
        }

        function n(t) {
            return t[0] = 1, t[1] = 0, t[2] = 0, t[3] = 1, t[4] = 0, t[5] = 0, t
        }

        function o(t, e) {
            return t[0] = e[0], t[1] = e[1], t[2] = e[2], t[3] = e[3], t[4] = e[4], t[5] = e[5], t
        }

        function a(t, e, i) {
            var n = e[0] * i[0] + e[2] * i[1],
                o = e[1] * i[0] + e[3] * i[1],
                a = e[0] * i[2] + e[2] * i[3],
                r = e[1] * i[2] + e[3] * i[3],
                s = e[0] * i[4] + e[2] * i[5] + e[4],
                l = e[1] * i[4] + e[3] * i[5] + e[5];
            return t[0] = n, t[1] = o, t[2] = a, t[3] = r, t[4] = s, t[5] = l, t
        }

        function r(t, e, i) {
            return t[0] = e[0], t[1] = e[1], t[2] = e[2], t[3] = e[3], t[4] = e[4] + i[0], t[5] = e[5] + i[1], t
        }

        function s(t, e, i) {
            var n = e[0],
                o = e[2],
                a = e[4],
                r = e[1],
                s = e[3],
                l = e[5],
                d = Math.sin(i),
                u = Math.cos(i);
            return t[0] = n * u + r * d, t[1] = -n * d + r * u, t[2] = o * u + s * d, t[3] = -o * d + u * s, t[4] = u * a + d * l, t[5] = u * l - d * a, t
        }

        function l(t, e, i) {
            var n = i[0],
                o = i[1];
            return t[0] = e[0] * n, t[1] = e[1] * o, t[2] = e[2] * n, t[3] = e[3] * o, t[4] = e[4] * n, t[5] = e[5] * o, t
        }

        function d(t, e) {
            var i = e[0],
                n = e[2],
                o = e[4],
                a = e[1],
                r = e[3],
                s = e[5],
                l = i * r - a * n;
            return l ? (l = 1 / l, t[0] = r * l, t[1] = -a * l, t[2] = -n * l, t[3] = i * l, t[4] = (n * s - r * o) * l, t[5] = (a * o - i * s) * l, t) : null
        }

        function u(t) {
            var e = i();
            return o(e, t), e
        }

        var c = "undefined" == typeof Float32Array ? Array : Float32Array;
        e.create = i, e.identity = n, e.copy = o, e.mul = a, e.translate = r, e.rotate = s, e.scale = l, e.invert = d, e.clone = u
    }, function (t, e) {
        function i(t, e) {
            var i = t._$eventProcessor;
            return null != e && i && i.normalizeQuery && (e = i.normalizeQuery(e)), e
        }

        function n(t, e, n, o, a, r) {
            var s = t._$handlers;
            if ("function" == typeof n && (a = o, o = n, n = null), !o || !e) return t;
            n = i(t, n), s[e] || (s[e] = []);
            for (var l = 0; l < s[e].length; l++)
                if (s[e][l].h === o) return t;
            var d = {
                    h: o,
                    one: r,
                    query: n,
                    ctx: a || t,
                    callAtLast: o.zrEventfulCallAtLast
                },
                u = s[e].length - 1,
                c = s[e][u];
            return c && c.callAtLast ? s[e].splice(u, 0, d) : s[e].push(d), t
        }

        var o = Array.prototype.slice,
            a = function (t) {
                this._$handlers = {}, this._$eventProcessor = t
            };
        a.prototype = {
            constructor: a,
            one: function (t, e, i, o) {
                return n(this, t, e, i, o, !0)
            },
            on: function (t, e, i, o) {
                return n(this, t, e, i, o, !1)
            },
            isSilent: function (t) {
                var e = this._$handlers;
                return !e[t] || !e[t].length
            },
            off: function (t, e) {
                var i = this._$handlers;
                if (!t) return this._$handlers = {}, this;
                if (e) {
                    if (i[t]) {
                        for (var n = [], o = 0, a = i[t].length; o < a; o++) i[t][o].h !== e && n.push(i[t][o]);
                        i[t] = n
                    }
                    i[t] && 0 === i[t].length && delete i[t]
                } else delete i[t];
                return this
            },
            trigger: function (t) {
                var e = this._$handlers[t],
                    i = this._$eventProcessor;
                if (e) {
                    var n = arguments,
                        a = n.length;
                    a > 3 && (n = o.call(n, 1));
                    for (var r = e.length, s = 0; s < r;) {
                        var l = e[s];
                        if (i && i.filter && null != l.query && !i.filter(t, l.query)) s++;
                        else {
                            switch (a) {
                                case 1:
                                    l.h.call(l.ctx);
                                    break;
                                case 2:
                                    l.h.call(l.ctx, n[1]);
                                    break;
                                case 3:
                                    l.h.call(l.ctx, n[1], n[2]);
                                    break;
                                default:
                                    l.h.apply(l.ctx, n)
                            }
                            l.one ? (e.splice(s, 1), r--) : s++
                        }
                    }
                }
                return i && i.afterTrigger && i.afterTrigger(t), this
            },
            triggerWithContext: function (t) {
                var e = this._$handlers[t],
                    i = this._$eventProcessor;
                if (e) {
                    var n = arguments,
                        a = n.length;
                    a > 4 && (n = o.call(n, 1, n.length - 1));
                    for (var r = n[n.length - 1], s = e.length, l = 0; l < s;) {
                        var d = e[l];
                        if (i && i.filter && null != d.query && !i.filter(t, d.query)) l++;
                        else {
                            switch (a) {
                                case 1:
                                    d.h.call(r);
                                    break;
                                case 2:
                                    d.h.call(r, n[1]);
                                    break;
                                case 3:
                                    d.h.call(r, n[1], n[2]);
                                    break;
                                default:
                                    d.h.apply(r, n)
                            }
                            d.one ? (e.splice(l, 1), s--) : l++
                        }
                    }
                }
                return i && i.afterTrigger && i.afterTrigger(t), this
            }
        };
        var r = a;
        t.exports = r
    }, function (t, e, i) {
        function n(t) {
            this._setting = t || {}, this._extent = [1 / 0, -1 / 0], this._interval = 0, this.init && this.init.apply(this, arguments)
        }

        var o = i(641);
        n.prototype.parse = function (t) {
            return t
        }, n.prototype.getSetting = function (t) {
            return this._setting[t]
        }, n.prototype.contain = function (t) {
            var e = this._extent;
            return t >= e[0] && t <= e[1]
        }, n.prototype.normalize = function (t) {
            var e = this._extent;
            return e[1] === e[0] ? .5 : (t - e[0]) / (e[1] - e[0])
        }, n.prototype.scale = function (t) {
            var e = this._extent;
            return t * (e[1] - e[0]) + e[0]
        }, n.prototype.unionExtent = function (t) {
            var e = this._extent;
            t[0] < e[0] && (e[0] = t[0]), t[1] > e[1] && (e[1] = t[1])
        }, n.prototype.unionExtentFromData = function (t, e) {
            this.unionExtent(t.getApproximateExtent(e))
        }, n.prototype.getExtent = function () {
            return this._extent.slice()
        }, n.prototype.setExtent = function (t, e) {
            var i = this._extent;
            isNaN(t) || (i[0] = t), isNaN(e) || (i[1] = e)
        }, n.prototype.isBlank = function () {
            return this._isBlank
        }, n.prototype.setBlank = function (t) {
            this._isBlank = t
        }, n.prototype.getLabel = null, o.enableClassExtend(n), o.enableClassManagement(n, {
            registerWhenExtend: !0
        });
        var a = n;
        t.exports = a
    }, function (t, e, i) {
        function n(t) {
            return [t || "", d++, Math.random().toFixed(5)].join("_")
        }

        function o(t) {
            var e = {};
            return t.registerSubTypeDefaulter = function (t, i) {
                t = l(t), e[t.main] = i
            }, t.determineSubType = function (i, n) {
                var o = n.type;
                if (!o) {
                    var a = l(i).main;
                    t.hasSubTypes(i) && e[a] && (o = e[a](n))
                }
                return o
            }, t
        }

        function a(t, e) {
            function i(t) {
                var i = {},
                    a = [];
                return r.each(t, function (s) {
                    var l = n(i, s),
                        d = l.originalDeps = e(s),
                        u = o(d, t);
                    l.entryCount = u.length, 0 === l.entryCount && a.push(s), r.each(u, function (t) {
                        r.indexOf(l.predecessor, t) < 0 && l.predecessor.push(t);
                        var e = n(i, t);
                        r.indexOf(e.successor, t) < 0 && e.successor.push(s)
                    })
                }), {
                    graph: i,
                    noEntryList: a
                }
            }

            function n(t, e) {
                return t[e] || (t[e] = {
                    predecessor: [],
                    successor: []
                }), t[e]
            }

            function o(t, e) {
                var i = [];
                return r.each(t, function (t) {
                    r.indexOf(e, t) >= 0 && i.push(t)
                }), i
            }

            t.topologicalTravel = function (t, e, n, o) {
                function a(t) {
                    0 == --d[t].entryCount && u.push(t)
                }

                function s(t) {
                    c[t] = !0, a(t)
                }

                if (t.length) {
                    var l = i(e),
                        d = l.graph,
                        u = l.noEntryList,
                        c = {};
                    for (r.each(t, function (t) {
                        c[t] = !0
                    }); u.length;) {
                        var h = u.pop(),
                            f = d[h],
                            p = !!c[h];
                        p && (n.call(o, h, f.originalDeps.slice()), delete c[h]), r.each(f.successor, p ? s : a)
                    }
                    r.each(c, function () {
                        throw new Error("Circle dependency may exists")
                    })
                }
            }
        }

        var r = i(630),
            s = i(641),
            l = s.parseClassType,
            d = 0;
        e.getUID = n, e.enableSubTypeDefaulter = o, e.enableTopologicalTravel = a
    }, function (t, e) {
        var i = 1;
        "undefined" != typeof window && (i = Math.max(window.devicePixelRatio || 1, 1));
        var n = i;
        e.debugMode = 0, e.devicePixelRatio = n
    }, function (t, e, i) {
        var n = i(648),
            o = i(635),
            a = i(717),
            r = i(636),
            s = i(661),
            l = s.devicePixelRatio,
            d = {
                M: 1,
                L: 2,
                C: 3,
                Q: 4,
                A: 5,
                Z: 6,
                R: 7
            },
            u = [],
            c = [],
            h = [],
            f = [],
            p = Math.min,
            g = Math.max,
            v = Math.cos,
            m = Math.sin,
            _ = Math.sqrt,
            y = Math.abs,
            x = "undefined" != typeof Float32Array,
            b = function (t) {
                this._saveData = !t, this._saveData && (this.data = []), this._ctx = null
            };
        b.prototype = {
            constructor: b,
            _xi: 0,
            _yi: 0,
            _x0: 0,
            _y0: 0,
            _ux: 0,
            _uy: 0,
            _len: 0,
            _lineDash: null,
            _dashOffset: 0,
            _dashIdx: 0,
            _dashSum: 0,
            setScale: function (t, e, i) {
                i = i || 0, this._ux = y(i / l / t) || 0, this._uy = y(i / l / e) || 0
            },
            getContext: function () {
                return this._ctx
            },
            beginPath: function (t) {
                return this._ctx = t, t && t.beginPath(), t && (this.dpr = t.dpr), this._saveData && (this._len = 0), this._lineDash && (this._lineDash = null, this._dashOffset = 0), this
            },
            moveTo: function (t, e) {
                return this.addData(d.M, t, e), this._ctx && this._ctx.moveTo(t, e), this._x0 = t, this._y0 = e, this._xi = t, this._yi = e, this
            },
            lineTo: function (t, e) {
                var i = y(t - this._xi) > this._ux || y(e - this._yi) > this._uy || this._len < 5;
                return this.addData(d.L, t, e), this._ctx && i && (this._needsDash() ? this._dashedLineTo(t, e) : this._ctx.lineTo(t, e)), i && (this._xi = t, this._yi = e), this
            },
            bezierCurveTo: function (t, e, i, n, o, a) {
                return this.addData(d.C, t, e, i, n, o, a), this._ctx && (this._needsDash() ? this._dashedBezierTo(t, e, i, n, o, a) : this._ctx.bezierCurveTo(t, e, i, n, o, a)), this._xi = o, this._yi = a, this
            },
            quadraticCurveTo: function (t, e, i, n) {
                return this.addData(d.Q, t, e, i, n), this._ctx && (this._needsDash() ? this._dashedQuadraticTo(t, e, i, n) : this._ctx.quadraticCurveTo(t, e, i, n)), this._xi = i, this._yi = n, this
            },
            arc: function (t, e, i, n, o, a) {
                return this.addData(d.A, t, e, i, i, n, o - n, 0, a ? 0 : 1), this._ctx && this._ctx.arc(t, e, i, n, o, a), this._xi = v(o) * i + t, this._yi = m(o) * i + e, this
            },
            arcTo: function (t, e, i, n, o) {
                return this._ctx && this._ctx.arcTo(t, e, i, n, o), this
            },
            rect: function (t, e, i, n) {
                return this._ctx && this._ctx.rect(t, e, i, n), this.addData(d.R, t, e, i, n), this
            },
            closePath: function () {
                this.addData(d.Z);
                var t = this._ctx,
                    e = this._x0,
                    i = this._y0;
                return t && (this._needsDash() && this._dashedLineTo(e, i), t.closePath()), this._xi = e, this._yi = i, this
            },
            fill: function (t) {
                t && t.fill(), this.toStatic()
            },
            stroke: function (t) {
                t && t.stroke(), this.toStatic()
            },
            setLineDash: function (t) {
                if (t instanceof Array) {
                    this._lineDash = t, this._dashIdx = 0;
                    for (var e = 0, i = 0; i < t.length; i++) e += t[i];
                    this._dashSum = e
                }
                return this
            },
            setLineDashOffset: function (t) {
                return this._dashOffset = t, this
            },
            len: function () {
                return this._len
            },
            setData: function (t) {
                var e = t.length;
                this.data && this.data.length === e || !x || (this.data = new Float32Array(e));
                for (var i = 0; i < e; i++) this.data[i] = t[i];
                this._len = e
            },
            appendPath: function (t) {
                t instanceof Array || (t = [t]);
                for (var e = t.length, i = 0, n = this._len, o = 0; o < e; o++) i += t[o].len();
                x && this.data instanceof Float32Array && (this.data = new Float32Array(n + i));
                for (var o = 0; o < e; o++)
                    for (var a = t[o].data, r = 0; r < a.length; r++) this.data[n++] = a[r];
                this._len = n
            },
            addData: function (t) {
                if (this._saveData) {
                    var e = this.data;
                    this._len + arguments.length > e.length && (this._expandData(), e = this.data);
                    for (var i = 0; i < arguments.length; i++) e[this._len++] = arguments[i];
                    this._prevCmd = t
                }
            },
            _expandData: function () {
                if (!(this.data instanceof Array)) {
                    for (var t = [], e = 0; e < this._len; e++) t[e] = this.data[e];
                    this.data = t
                }
            },
            _needsDash: function () {
                return this._lineDash
            },
            _dashedLineTo: function (t, e) {
                var i, n, o = this._dashSum,
                    a = this._dashOffset,
                    r = this._lineDash,
                    s = this._ctx,
                    l = this._xi,
                    d = this._yi,
                    u = t - l,
                    c = e - d,
                    h = _(u * u + c * c),
                    f = l,
                    v = d,
                    m = r.length;
                for (u /= h, c /= h, a < 0 && (a = o + a), a %= o, f -= a * u, v -= a * c; u > 0 && f <= t || u < 0 && f >= t || 0 === u && (c > 0 && v <= e || c < 0 && v >= e);) n = this._dashIdx, i = r[n], f += u * i, v += c * i, this._dashIdx = (n + 1) % m, u > 0 && f < l || u < 0 && f > l || c > 0 && v < d || c < 0 && v > d || s[n % 2 ? "moveTo" : "lineTo"](u >= 0 ? p(f, t) : g(f, t), c >= 0 ? p(v, e) : g(v, e));
                u = f - t, c = v - e, this._dashOffset = -_(u * u + c * c)
            },
            _dashedBezierTo: function (t, e, i, o, a, r) {
                var s, l, d, u, c, h = this._dashSum,
                    f = this._dashOffset,
                    p = this._lineDash,
                    g = this._ctx,
                    v = this._xi,
                    m = this._yi,
                    y = n.cubicAt,
                    x = 0,
                    b = this._dashIdx,
                    w = p.length,
                    S = 0;
                for (f < 0 && (f = h + f), f %= h, s = 0; s < 1; s += .1) l = y(v, t, i, a, s + .1) - y(v, t, i, a, s), d = y(m, e, o, r, s + .1) - y(m, e, o, r, s), x += _(l * l + d * d);
                for (; b < w && !((S += p[b]) > f); b++) ;
                for (s = (S - f) / x; s <= 1;) u = y(v, t, i, a, s), c = y(m, e, o, r, s), b % 2 ? g.moveTo(u, c) : g.lineTo(u, c), s += p[b] / x, b = (b + 1) % w;
                b % 2 != 0 && g.lineTo(a, r), l = a - u, d = r - c, this._dashOffset = -_(l * l + d * d)
            },
            _dashedQuadraticTo: function (t, e, i, n) {
                var o = i,
                    a = n;
                i = (i + 2 * t) / 3, n = (n + 2 * e) / 3, t = (this._xi + 2 * t) / 3, e = (this._yi + 2 * e) / 3, this._dashedBezierTo(t, e, i, n, o, a)
            },
            toStatic: function () {
                var t = this.data;
                t instanceof Array && (t.length = this._len, x && (this.data = new Float32Array(t)))
            },
            getBoundingRect: function () {
                u[0] = u[1] = h[0] = h[1] = Number.MAX_VALUE, c[0] = c[1] = f[0] = f[1] = -Number.MAX_VALUE;
                for (var t = this.data, e = 0, i = 0, n = 0, s = 0, l = 0; l < t.length;) {
                    var p = t[l++];
                    switch (1 === l && (e = t[l], i = t[l + 1], n = e, s = i), p) {
                        case d.M:
                            n = t[l++], s = t[l++], e = n, i = s, h[0] = n, h[1] = s, f[0] = n, f[1] = s;
                            break;
                        case d.L:
                            a.fromLine(e, i, t[l], t[l + 1], h, f), e = t[l++], i = t[l++];
                            break;
                        case d.C:
                            a.fromCubic(e, i, t[l++], t[l++], t[l++], t[l++], t[l], t[l + 1], h, f), e = t[l++], i = t[l++];
                            break;
                        case d.Q:
                            a.fromQuadratic(e, i, t[l++], t[l++], t[l], t[l + 1], h, f), e = t[l++], i = t[l++];
                            break;
                        case d.A:
                            var g = t[l++],
                                _ = t[l++],
                                y = t[l++],
                                x = t[l++],
                                b = t[l++],
                                w = t[l++] + b;
                            l += 1;
                            var S = 1 - t[l++];
                            1 === l && (n = v(b) * y + g, s = m(b) * x + _), a.fromArc(g, _, y, x, b, w, S, h, f), e = v(w) * y + g, i = m(w) * x + _;
                            break;
                        case d.R:
                            n = e = t[l++], s = i = t[l++];
                            var C = t[l++],
                                k = t[l++];
                            a.fromLine(n, s, n + C, s + k, h, f);
                            break;
                        case d.Z:
                            e = n, i = s
                    }
                    o.min(u, u, h), o.max(c, c, f)
                }
                return 0 === l && (u[0] = u[1] = c[0] = c[1] = 0), new r(u[0], u[1], c[0] - u[0], c[1] - u[1])
            },
            rebuildPath: function (t) {
                for (var e, i, n, o, a, r, s = this.data, l = this._ux, u = this._uy, c = this._len, h = 0; h < c;) {
                    var f = s[h++];
                    switch (1 === h && (n = s[h], o = s[h + 1], e = n, i = o), f) {
                        case d.M:
                            e = n = s[h++], i = o = s[h++], t.moveTo(n, o);
                            break;
                        case d.L:
                            a = s[h++], r = s[h++], (y(a - n) > l || y(r - o) > u || h === c - 1) && (t.lineTo(a, r), n = a, o = r);
                            break;
                        case d.C:
                            t.bezierCurveTo(s[h++], s[h++], s[h++], s[h++], s[h++], s[h++]), n = s[h - 2], o = s[h - 1];
                            break;
                        case d.Q:
                            t.quadraticCurveTo(s[h++], s[h++], s[h++], s[h++]), n = s[h - 2], o = s[h - 1];
                            break;
                        case d.A:
                            var p = s[h++],
                                g = s[h++],
                                _ = s[h++],
                                x = s[h++],
                                b = s[h++],
                                w = s[h++],
                                S = s[h++],
                                C = s[h++],
                                k = _ > x ? _ : x,
                                I = _ > x ? 1 : _ / x,
                                T = _ > x ? x / _ : 1,
                                D = Math.abs(_ - x) > .001,
                                M = b + w;
                            D ? (t.translate(p, g), t.rotate(S), t.scale(I, T), t.arc(0, 0, k, b, M, 1 - C), t.scale(1 / I, 1 / T), t.rotate(-S), t.translate(-p, -g)) : t.arc(p, g, k, b, M, 1 - C), 1 === h && (e = v(b) * _ + p, i = m(b) * x + g), n = v(M) * _ + p, o = m(M) * x + g;
                            break;
                        case d.R:
                            e = n = s[h], i = o = s[h + 1], t.rect(s[h++], s[h++], s[h++], s[h++]);
                            break;
                        case d.Z:
                            t.closePath(), n = e, o = i
                    }
                }
            }
        }, b.CMD = d;
        var w = b;
        t.exports = w
    }, function (t, e, i) {
        function n(t, e, i, n) {
            return i = i || {}, n || !h.canvasSupported ? o(t, e, i) : h.browser.firefox && null != e.layerX && e.layerX !== e.offsetX ? (i.zrX = e.layerX, i.zrY = e.layerY) : null != e.offsetX ? (i.zrX = e.offsetX, i.zrY = e.offsetY) : o(t, e, i), i
        }

        function o(t, e, i) {
            if (h.domSupported && t.getBoundingClientRect) {
                var n = e.clientX,
                    o = e.clientY;
                if (p(t)) {
                    var a = t.getBoundingClientRect();
                    return i.zrX = n - a.left, void (i.zrY = o - a.top)
                }
                if (g(_, t, n, o)) return i.zrX = _[0], void (i.zrY = _[1])
            }
            i.zrX = i.zrY = 0
        }

        function a(t) {
            return t || window.event
        }

        function r(t, e, i) {
            if (e = a(e), null != e.zrX) return e;
            var o = e.type;
            if (o && o.indexOf("touch") >= 0) {
                var r = "touchend" !== o ? e.targetTouches[0] : e.changedTouches[0];
                r && n(t, r, e, i)
            } else n(t, e, e, i), e.zrDelta = e.wheelDelta ? e.wheelDelta / 120 : -(e.detail || 0) / 3;
            var s = e.button;
            return null == e.which && void 0 !== s && m.test(e.type) && (e.which = 1 & s ? 1 : 2 & s ? 3 : 4 & s ? 2 : 0), e
        }

        function s(t, e, i, n) {
            v ? t.addEventListener(e, i, n) : t.attachEvent("on" + e, i)
        }

        function l(t, e, i, n) {
            v ? t.removeEventListener(e, i, n) : t.detachEvent("on" + e, i)
        }

        function d(t) {
            return 2 === t.which || 3 === t.which
        }

        function u(t) {
            return t.which > 1
        }

        var c = i(658);
        e.Dispatcher = c;
        var h = i(637),
            f = i(892),
            p = f.isCanvasEl,
            g = f.transformCoordWithViewport,
            v = "undefined" != typeof window && !!window.addEventListener,
            m = /^(?:mouse|pointer|contextmenu|drag|drop)|click/,
            _ = [],
            y = v ? function (t) {
                t.preventDefault(), t.stopPropagation(), t.cancelBubble = !0
            } : function (t) {
                t.returnValue = !1, t.cancelBubble = !0
            };
        e.clientToLocal = n, e.getNativeEvent = a, e.normalizeEvent = r, e.addEventListener = s, e.removeEventListener = l, e.stop = y, e.isMiddleOrRightButtonOnMouseUpDown = d, e.notLeftMouse = u
    }, function (t, e, i) {
        function n(t) {
            t = t || {}, r.call(this, t);
            for (var e in t) t.hasOwnProperty(e) && "style" !== e && (this[e] = t[e]);
            this.style = new a(t.style, this), this._rect = null, this.__clipPaths = null
        }

        var o = i(630),
            a = i(694),
            r = i(711),
            s = i(901);
        n.prototype = {
            constructor: n,
            type: "displayable",
            __dirty: !0,
            invisible: !1,
            z: 0,
            z2: 0,
            zlevel: 0,
            draggable: !1,
            dragging: !1,
            silent: !1,
            culling: !1,
            cursor: "pointer",
            rectHover: !1,
            progressive: !1,
            incremental: !1,
            globalScaleRatio: 1,
            beforeBrush: function (t) {
            },
            afterBrush: function (t) {
            },
            brush: function (t, e) {
            },
            getBoundingRect: function () {
            },
            contain: function (t, e) {
                return this.rectContain(t, e)
            },
            traverse: function (t, e) {
                t.call(e, this)
            },
            rectContain: function (t, e) {
                var i = this.transformCoordToLocal(t, e);
                return this.getBoundingRect().contain(i[0], i[1])
            },
            dirty: function () {
                this.__dirty = this.__dirtyText = !0, this._rect = null, this.__zr && this.__zr.refresh()
            },
            animateStyle: function (t) {
                return this.animate("style", t)
            },
            attrKV: function (t, e) {
                "style" !== t ? r.prototype.attrKV.call(this, t, e) : this.style.set(e)
            },
            setStyle: function (t, e) {
                return this.style.set(t, e), this.dirty(!1), this
            },
            useStyle: function (t) {
                return this.style = new a(t, this), this.dirty(!1), this
            },
            calculateTextPosition: null
        }, o.inherits(n, r), o.mixin(n, s);
        var l = n;
        t.exports = l
    }, function (t, e) {
        var i = {
            NONE: 0,
            STYLE_BIND: 1,
            PLAIN_TEXT: 2
        };
        e.ContextCachedBy = i, e.WILL_BE_RESTORED = 9
    }, function (t, e, i) {
        function n(t) {
            return t = Math.round(t), t < 0 ? 0 : t > 255 ? 255 : t
        }

        function o(t) {
            return t = Math.round(t), t < 0 ? 0 : t > 360 ? 360 : t
        }

        function a(t) {
            return t < 0 ? 0 : t > 1 ? 1 : t
        }

        function r(t) {
            return n(t.length && "%" === t.charAt(t.length - 1) ? parseFloat(t) / 100 * 255 : parseInt(t, 10))
        }

        function s(t) {
            return a(t.length && "%" === t.charAt(t.length - 1) ? parseFloat(t) / 100 : parseFloat(t))
        }

        function l(t, e, i) {
            return i < 0 ? i += 1 : i > 1 && (i -= 1), 6 * i < 1 ? t + (e - t) * i * 6 : 2 * i < 1 ? e : 3 * i < 2 ? t + (e - t) * (2 / 3 - i) * 6 : t
        }

        function d(t, e, i) {
            return t + (e - t) * i
        }

        function u(t, e, i, n, o) {
            return t[0] = e, t[1] = i, t[2] = n, t[3] = o, t
        }

        function c(t, e) {
            return t[0] = e[0], t[1] = e[1], t[2] = e[2], t[3] = e[3], t
        }

        function h(t, e) {
            I && c(I, e), I = k.put(t, I || e.slice())
        }

        function f(t, e) {
            if (t) {
                e = e || [];
                var i = k.get(t);
                if (i) return c(e, i);
                t += "";
                var n = t.replace(/ /g, "").toLowerCase();
                if (n in C) return c(e, C[n]), h(t, e), e;
                if ("#" !== n.charAt(0)) {
                    var o = n.indexOf("("),
                        a = n.indexOf(")");
                    if (-1 !== o && a + 1 === n.length) {
                        var l = n.substr(0, o),
                            d = n.substr(o + 1, a - (o + 1)).split(","),
                            f = 1;
                        switch (l) {
                            case "rgba":
                                if (4 !== d.length) return void u(e, 0, 0, 0, 1);
                                f = s(d.pop());
                            case "rgb":
                                return 3 !== d.length ? void u(e, 0, 0, 0, 1) : (u(e, r(d[0]), r(d[1]), r(d[2]), f), h(t, e), e);
                            case "hsla":
                                return 4 !== d.length ? void u(e, 0, 0, 0, 1) : (d[3] = s(d[3]), p(d, e), h(t, e), e);
                            case "hsl":
                                return 3 !== d.length ? void u(e, 0, 0, 0, 1) : (p(d, e), h(t, e), e);
                            default:
                                return
                        }
                    }
                    u(e, 0, 0, 0, 1)
                } else {
                    if (4 === n.length) {
                        var g = parseInt(n.substr(1), 16);
                        return g >= 0 && g <= 4095 ? (u(e, (3840 & g) >> 4 | (3840 & g) >> 8, 240 & g | (240 & g) >> 4, 15 & g | (15 & g) << 4, 1), h(t, e), e) : void u(e, 0, 0, 0, 1)
                    }
                    if (7 === n.length) {
                        var g = parseInt(n.substr(1), 16);
                        return g >= 0 && g <= 16777215 ? (u(e, (16711680 & g) >> 16, (65280 & g) >> 8, 255 & g, 1), h(t, e), e) : void u(e, 0, 0, 0, 1)
                    }
                }
            }
        }

        function p(t, e) {
            var i = (parseFloat(t[0]) % 360 + 360) % 360 / 360,
                o = s(t[1]),
                a = s(t[2]),
                r = a <= .5 ? a * (o + 1) : a + o - a * o,
                d = 2 * a - r;
            return e = e || [], u(e, n(255 * l(d, r, i + 1 / 3)), n(255 * l(d, r, i)), n(255 * l(d, r, i - 1 / 3)), 1), 4 === t.length && (e[3] = t[3]), e
        }

        function g(t) {
            if (t) {
                var e, i, n = t[0] / 255,
                    o = t[1] / 255,
                    a = t[2] / 255,
                    r = Math.min(n, o, a),
                    s = Math.max(n, o, a),
                    l = s - r,
                    d = (s + r) / 2;
                if (0 === l) e = 0, i = 0;
                else {
                    i = d < .5 ? l / (s + r) : l / (2 - s - r);
                    var u = ((s - n) / 6 + l / 2) / l,
                        c = ((s - o) / 6 + l / 2) / l,
                        h = ((s - a) / 6 + l / 2) / l;
                    n === s ? e = h - c : o === s ? e = 1 / 3 + u - h : a === s && (e = 2 / 3 + c - u), e < 0 && (e += 1), e > 1 && (e -= 1)
                }
                var f = [360 * e, i, d];
                return null != t[3] && f.push(t[3]), f
            }
        }

        function v(t, e) {
            var i = f(t);
            if (i) {
                for (var n = 0; n < 3; n++) i[n] = e < 0 ? i[n] * (1 - e) | 0 : (255 - i[n]) * e + i[n] | 0, i[n] > 255 ? i[n] = 255 : t[n] < 0 && (i[n] = 0);
                return w(i, 4 === i.length ? "rgba" : "rgb")
            }
        }

        function m(t) {
            var e = f(t);
            if (e) return ((1 << 24) + (e[0] << 16) + (e[1] << 8) + +e[2]).toString(16).slice(1)
        }

        function _(t, e, i) {
            if (e && e.length && t >= 0 && t <= 1) {
                i = i || [];
                var o = t * (e.length - 1),
                    r = Math.floor(o),
                    s = Math.ceil(o),
                    l = e[r],
                    u = e[s],
                    c = o - r;
                return i[0] = n(d(l[0], u[0], c)), i[1] = n(d(l[1], u[1], c)), i[2] = n(d(l[2], u[2], c)), i[3] = a(d(l[3], u[3], c)), i
            }
        }

        function y(t, e, i) {
            if (e && e.length && t >= 0 && t <= 1) {
                var o = t * (e.length - 1),
                    r = Math.floor(o),
                    s = Math.ceil(o),
                    l = f(e[r]),
                    u = f(e[s]),
                    c = o - r,
                    h = w([n(d(l[0], u[0], c)), n(d(l[1], u[1], c)), n(d(l[2], u[2], c)), a(d(l[3], u[3], c))], "rgba");
                return i ? {
                    color: h,
                    leftIndex: r,
                    rightIndex: s,
                    value: o
                } : h
            }
        }

        function x(t, e, i, n) {
            if (t = f(t)) return t = g(t), null != e && (t[0] = o(e)), null != i && (t[1] = s(i)), null != n && (t[2] = s(n)), w(p(t), "rgba")
        }

        function b(t, e) {
            if ((t = f(t)) && null != e) return t[3] = a(e), w(t, "rgba")
        }

        function w(t, e) {
            if (t && t.length) {
                var i = t[0] + "," + t[1] + "," + t[2];
                return "rgba" !== e && "hsva" !== e && "hsla" !== e || (i += "," + t[3]), e + "(" + i + ")"
            }
        }

        var S = i(716),
            C = {
                transparent: [0, 0, 0, 0],
                aliceblue: [240, 248, 255, 1],
                antiquewhite: [250, 235, 215, 1],
                aqua: [0, 255, 255, 1],
                aquamarine: [127, 255, 212, 1],
                azure: [240, 255, 255, 1],
                beige: [245, 245, 220, 1],
                bisque: [255, 228, 196, 1],
                black: [0, 0, 0, 1],
                blanchedalmond: [255, 235, 205, 1],
                blue: [0, 0, 255, 1],
                blueviolet: [138, 43, 226, 1],
                brown: [165, 42, 42, 1],
                burlywood: [222, 184, 135, 1],
                cadetblue: [95, 158, 160, 1],
                chartreuse: [127, 255, 0, 1],
                chocolate: [210, 105, 30, 1],
                coral: [255, 127, 80, 1],
                cornflowerblue: [100, 149, 237, 1],
                cornsilk: [255, 248, 220, 1],
                crimson: [220, 20, 60, 1],
                cyan: [0, 255, 255, 1],
                darkblue: [0, 0, 139, 1],
                darkcyan: [0, 139, 139, 1],
                darkgoldenrod: [184, 134, 11, 1],
                darkgray: [169, 169, 169, 1],
                darkgreen: [0, 100, 0, 1],
                darkgrey: [169, 169, 169, 1],
                darkkhaki: [189, 183, 107, 1],
                darkmagenta: [139, 0, 139, 1],
                darkolivegreen: [85, 107, 47, 1],
                darkorange: [255, 140, 0, 1],
                darkorchid: [153, 50, 204, 1],
                darkred: [139, 0, 0, 1],
                darksalmon: [233, 150, 122, 1],
                darkseagreen: [143, 188, 143, 1],
                darkslateblue: [72, 61, 139, 1],
                darkslategray: [47, 79, 79, 1],
                darkslategrey: [47, 79, 79, 1],
                darkturquoise: [0, 206, 209, 1],
                darkviolet: [148, 0, 211, 1],
                deeppink: [255, 20, 147, 1],
                deepskyblue: [0, 191, 255, 1],
                dimgray: [105, 105, 105, 1],
                dimgrey: [105, 105, 105, 1],
                dodgerblue: [30, 144, 255, 1],
                firebrick: [178, 34, 34, 1],
                floralwhite: [255, 250, 240, 1],
                forestgreen: [34, 139, 34, 1],
                fuchsia: [255, 0, 255, 1],
                gainsboro: [220, 220, 220, 1],
                ghostwhite: [248, 248, 255, 1],
                gold: [255, 215, 0, 1],
                goldenrod: [218, 165, 32, 1],
                gray: [128, 128, 128, 1],
                green: [0, 128, 0, 1],
                greenyellow: [173, 255, 47, 1],
                grey: [128, 128, 128, 1],
                honeydew: [240, 255, 240, 1],
                hotpink: [255, 105, 180, 1],
                indianred: [205, 92, 92, 1],
                indigo: [75, 0, 130, 1],
                ivory: [255, 255, 240, 1],
                khaki: [240, 230, 140, 1],
                lavender: [230, 230, 250, 1],
                lavenderblush: [255, 240, 245, 1],
                lawngreen: [124, 252, 0, 1],
                lemonchiffon: [255, 250, 205, 1],
                lightblue: [173, 216, 230, 1],
                lightcoral: [240, 128, 128, 1],
                lightcyan: [224, 255, 255, 1],
                lightgoldenrodyellow: [250, 250, 210, 1],
                lightgray: [211, 211, 211, 1],
                lightgreen: [144, 238, 144, 1],
                lightgrey: [211, 211, 211, 1],
                lightpink: [255, 182, 193, 1],
                lightsalmon: [255, 160, 122, 1],
                lightseagreen: [32, 178, 170, 1],
                lightskyblue: [135, 206, 250, 1],
                lightslategray: [119, 136, 153, 1],
                lightslategrey: [119, 136, 153, 1],
                lightsteelblue: [176, 196, 222, 1],
                lightyellow: [255, 255, 224, 1],
                lime: [0, 255, 0, 1],
                limegreen: [50, 205, 50, 1],
                linen: [250, 240, 230, 1],
                magenta: [255, 0, 255, 1],
                maroon: [128, 0, 0, 1],
                mediumaquamarine: [102, 205, 170, 1],
                mediumblue: [0, 0, 205, 1],
                mediumorchid: [186, 85, 211, 1],
                mediumpurple: [147, 112, 219, 1],
                mediumseagreen: [60, 179, 113, 1],
                mediumslateblue: [123, 104, 238, 1],
                mediumspringgreen: [0, 250, 154, 1],
                mediumturquoise: [72, 209, 204, 1],
                mediumvioletred: [199, 21, 133, 1],
                midnightblue: [25, 25, 112, 1],
                mintcream: [245, 255, 250, 1],
                mistyrose: [255, 228, 225, 1],
                moccasin: [255, 228, 181, 1],
                navajowhite: [255, 222, 173, 1],
                navy: [0, 0, 128, 1],
                oldlace: [253, 245, 230, 1],
                olive: [128, 128, 0, 1],
                olivedrab: [107, 142, 35, 1],
                orange: [255, 165, 0, 1],
                orangered: [255, 69, 0, 1],
                orchid: [218, 112, 214, 1],
                palegoldenrod: [238, 232, 170, 1],
                palegreen: [152, 251, 152, 1],
                paleturquoise: [175, 238, 238, 1],
                palevioletred: [219, 112, 147, 1],
                papayawhip: [255, 239, 213, 1],
                peachpuff: [255, 218, 185, 1],
                peru: [205, 133, 63, 1],
                pink: [255, 192, 203, 1],
                plum: [221, 160, 221, 1],
                powderblue: [176, 224, 230, 1],
                purple: [128, 0, 128, 1],
                red: [255, 0, 0, 1],
                rosybrown: [188, 143, 143, 1],
                royalblue: [65, 105, 225, 1],
                saddlebrown: [139, 69, 19, 1],
                salmon: [250, 128, 114, 1],
                sandybrown: [244, 164, 96, 1],
                seagreen: [46, 139, 87, 1],
                seashell: [255, 245, 238, 1],
                sienna: [160, 82, 45, 1],
                silver: [192, 192, 192, 1],
                skyblue: [135, 206, 235, 1],
                slateblue: [106, 90, 205, 1],
                slategray: [112, 128, 144, 1],
                slategrey: [112, 128, 144, 1],
                snow: [255, 250, 250, 1],
                springgreen: [0, 255, 127, 1],
                steelblue: [70, 130, 180, 1],
                tan: [210, 180, 140, 1],
                teal: [0, 128, 128, 1],
                thistle: [216, 191, 216, 1],
                tomato: [255, 99, 71, 1],
                turquoise: [64, 224, 208, 1],
                violet: [238, 130, 238, 1],
                wheat: [245, 222, 179, 1],
                white: [255, 255, 255, 1],
                whitesmoke: [245, 245, 245, 1],
                yellow: [255, 255, 0, 1],
                yellowgreen: [154, 205, 50, 1]
            },
            k = new S(20),
            I = null,
            T = _,
            D = y;
        e.parse = f, e.lift = v, e.toHex = m, e.fastLerp = _, e.fastMapToColor = T, e.lerp = y, e.mapToColor = D, e.modifyHSL = x, e.modifyAlpha = b, e.stringify = w
    }, function (t, e, i) {
        t.exports = {
            default: i(671),
            __esModule: !0
        }
    }, function (t, e, i) {
        t.exports = {
            default: i(672),
            __esModule: !0
        }
    }, function (t, e, i) {
        "use strict";
        e.__esModule = !0;
        var n = i(177),
            o = function (t) {
                return t && t.__esModule ? t : {
                    default: t
                }
            }(n);
        e.default = function (t) {
            return function () {
                var e = t.apply(this, arguments);
                return new o.default(function (t, i) {
                    function n(a, r) {
                        try {
                            var s = e[a](r),
                                l = s.value
                        } catch (t) {
                            return void i(t)
                        }
                        if (!s.done) return o.default.resolve(l).then(function (t) {
                            n("next", t)
                        }, function (t) {
                            n("throw", t)
                        });
                        t(l)
                    }

                    return n("next")
                })
            }
        }
    }, function (t, e, i) {
        t.exports = i(687)
    }, function (t, e, i) {
        var n = i(26),
            o = n.JSON || (n.JSON = {
                stringify: JSON.stringify
            });
        t.exports = function (t) {
            return o.stringify.apply(o, arguments)
        }
    }, function (t, e, i) {
        i(674), t.exports = i(26).Object.keys
    }, function (t, e, i) {
        var n = i(32),
            o = i(26),
            a = i(65);
        t.exports = function (t, e) {
            var i = (o.Object || {})[t] || Object[t],
                r = {};
            r[t] = e(i), n(n.S + n.F * a(function () {
                i(1)
            }), "Object", r)
        }
    }, function (t, e, i) {
        var n = i(85),
            o = i(84);
        i(673)("keys", function () {
            return function (t) {
                return o(n(t))
            }
        })
    }, function (t, e, i) {
        function n(t) {
            return t._rawCount > 65535 ? L : O
        }

        function o(t) {
            var e = t.constructor;
            return e === Array ? t.slice() : new e(t)
        }

        function a(t, e) {
            m.each(R.concat(e.__wrappedMethods || []), function (i) {
                e.hasOwnProperty(i) && (t[i] = e[i])
            }), t.__wrappedMethods = e.__wrappedMethods, m.each(E, function (i) {
                t[i] = m.clone(e[i])
            }), t._calculationInfo = m.extend(e._calculationInfo)
        }

        function r(t, e, i, n, o) {
            var a = A[e.type],
                r = n - 1,
                s = e.name,
                l = t[s][r];
            if (l && l.length < i) {
                for (var d = new a(Math.min(o - r * i, i)), u = 0; u < l.length; u++) d[u] = l[u];
                t[s][r] = d
            }
            for (var c = n * i; c < o; c += i) t[s].push(new a(Math.min(o - c, i)))
        }

        function s(t) {
            var e = t._invertedIndicesMap;
            m.each(e, function (i, n) {
                var o = t._dimensionInfos[n],
                    a = o.ordinalMeta;
                if (a) {
                    i = e[n] = new P(a.categories.length);
                    for (var r = 0; r < i.length; r++) i[r] = D;
                    for (var r = 0; r < t._count; r++) i[t.get(n, r)] = r
                }
            })
        }

        function l(t, e, i) {
            var n;
            if (null != e) {
                var o = t._chunkSize,
                    a = Math.floor(i / o),
                    r = i % o,
                    s = t.dimensions[e],
                    l = t._storage[s][a];
                if (l) {
                    n = l[r];
                    var d = t._dimensionInfos[s].ordinalMeta;
                    d && d.categories.length && (n = d.categories[n])
                }
            }
            return n
        }

        function d(t) {
            return t
        }

        function u(t) {
            return t < this._count && t >= 0 ? this._indices[t] : -1
        }

        function c(t, e) {
            var i = t._idList[e];
            return null == i && (i = l(t, t._idDimIdx, e)), null == i && (i = M + e), i
        }

        function h(t) {
            return m.isArray(t) || (t = [t]), t
        }

        function f(t, e) {
            var i = t.dimensions,
                n = new z(m.map(i, t.getDimensionInfo, t), t.hostModel);
            a(n, t);
            for (var o = n._storage = {}, r = t._storage, s = 0; s < i.length; s++) {
                var l = i[s];
                r[l] && (m.indexOf(e, l) >= 0 ? (o[l] = p(r[l]), n._rawExtent[l] = g(), n._extent[l] = null) : o[l] = r[l])
            }
            return n
        }

        function p(t) {
            for (var e = new Array(t.length), i = 0; i < t.length; i++) e[i] = o(t[i]);
            return e
        }

        function g() {
            return [1 / 0, -1 / 0]
        }

        var v = i(634),
            m = (v.__DEV__, i(630)),
            _ = i(646),
            y = i(795),
            x = i(649),
            b = i(650),
            w = b.defaultDimValueGetters,
            S = b.DefaultDataProvider,
            C = i(678),
            k = C.summarizeDimensions,
            I = i(701),
            T = m.isObject,
            D = -1,
            M = "e\0\0",
            A = {
                float: "undefined" == typeof Float64Array ? Array : Float64Array,
                int: "undefined" == typeof Int32Array ? Array : Int32Array,
                ordinal: Array,
                number: Array,
                time: Array
            },
            L = "undefined" == typeof Uint32Array ? Array : Uint32Array,
            P = "undefined" == typeof Int32Array ? Array : Int32Array,
            O = "undefined" == typeof Uint16Array ? Array : Uint16Array,
            R = ["hasItemOption", "_nameList", "_idList", "_invertedIndicesMap", "_rawData", "_chunkSize", "_chunkCount", "_dimValueGetter", "_count", "_rawCount", "_nameDimIdx", "_idDimIdx"],
            E = ["_extent", "_approximateExtent", "_rawExtent"],
            z = function (t, e) {
                t = t || ["x", "y"];
                for (var i = {}, n = [], o = {}, a = 0; a < t.length; a++) {
                    var r = t[a];
                    m.isString(r) ? r = new I({
                        name: r
                    }) : r instanceof I || (r = new I(r));
                    var s = r.name;
                    r.type = r.type || "float", r.coordDim || (r.coordDim = s, r.coordDimIndex = 0), r.otherDims = r.otherDims || {}, n.push(s), i[s] = r, r.index = a, r.createInvertedIndices && (o[s] = [])
                }
                this.dimensions = n, this._dimensionInfos = i, this.hostModel = e, this.dataType, this._indices = null, this._count = 0, this._rawCount = 0, this._storage = {}, this._nameList = [], this._idList = [], this._optionModels = [], this._visual = {}, this._layout = {}, this._itemVisuals = [], this.hasItemVisual = {}, this._itemLayouts = [], this._graphicEls = [], this._chunkSize = 1e5, this._chunkCount = 0, this._rawData, this._rawExtent = {}, this._extent = {}, this._approximateExtent = {}, this._dimensionsSummary = k(this), this._invertedIndicesMap = o, this._calculationInfo = {}, this.userOutput = this._dimensionsSummary.userOutput
            },
            N = z.prototype;
        N.type = "list", N.hasItemOption = !0, N.getDimension = function (t) {
            return "number" != typeof t && (isNaN(t) || this._dimensionInfos.hasOwnProperty(t)) || (t = this.dimensions[t]), t
        }, N.getDimensionInfo = function (t) {
            return this._dimensionInfos[this.getDimension(t)]
        }, N.getDimensionsOnCoord = function () {
            return this._dimensionsSummary.dataDimsOnCoord.slice()
        }, N.mapDimension = function (t, e) {
            var i = this._dimensionsSummary;
            if (null == e) return i.encodeFirstDimNotExtra[t];
            var n = i.encode[t];
            return !0 === e ? (n || []).slice() : n && n[e]
        }, N.initData = function (t, e, i) {
            (x.isInstance(t) || m.isArrayLike(t)) && (t = new S(t, this.dimensions.length)), this._rawData = t, this._storage = {}, this._indices = null, this._nameList = e || [], this._idList = [], this._nameRepeatCount = {}, i || (this.hasItemOption = !1), this.defaultDimValueGetter = w[this._rawData.getSource().sourceFormat], this._dimValueGetter = i = i || this.defaultDimValueGetter, this._dimValueGetterArrayRows = w.arrayRows, this._rawExtent = {}, this._initDataFromProvider(0, t.count()), t.pure && (this.hasItemOption = !1)
        }, N.getProvider = function () {
            return this._rawData
        }, N.appendData = function (t) {
            var e = this._rawData,
                i = this.count();
            e.appendData(t);
            var n = e.count();
            e.persistent || (n += i), this._initDataFromProvider(i, n)
        }, N.appendValues = function (t, e) {
            for (var i = this._chunkSize, n = this._storage, o = this.dimensions, a = o.length, l = this._rawExtent, d = this.count(), u = d + Math.max(t.length, e ? e.length : 0), c = this._chunkCount, h = 0; h < a; h++) {
                var f = o[h];
                l[f] || (l[f] = g()), n[f] || (n[f] = []), r(n, this._dimensionInfos[f], i, c, u), this._chunkCount = n[f].length
            }
            for (var p = new Array(a), v = d; v < u; v++) {
                for (var m = v - d, _ = Math.floor(v / i), y = v % i, x = 0; x < a; x++) {
                    var f = o[x],
                        b = this._dimValueGetterArrayRows(t[m] || p, f, m, x);
                    n[f][_][y] = b;
                    var w = l[f];
                    b < w[0] && (w[0] = b), b > w[1] && (w[1] = b)
                }
                e && (this._nameList[v] = e[m])
            }
            this._rawCount = this._count = u, this._extent = {}, s(this)
        }, N._initDataFromProvider = function (t, e) {
            if (!(t >= e)) {
                for (var i, n = this._chunkSize, o = this._rawData, a = this._storage, l = this.dimensions, d = l.length, u = this._dimensionInfos, c = this._nameList, h = this._idList, f = this._rawExtent, p = this._nameRepeatCount = {}, v = this._chunkCount, m = 0; m < d; m++) {
                    var _ = l[m];
                    f[_] || (f[_] = g());
                    var y = u[_];
                    0 === y.otherDims.itemName && (i = this._nameDimIdx = m), 0 === y.otherDims.itemId && (this._idDimIdx = m), a[_] || (a[_] = []), r(a, y, n, v, e), this._chunkCount = a[_].length
                }
                for (var x = new Array(d), b = t; b < e; b++) {
                    x = o.getItem(b, x);
                    for (var w = Math.floor(b / n), S = b % n, C = 0; C < d; C++) {
                        var _ = l[C],
                            k = a[_][w],
                            I = this._dimValueGetter(x, _, b, C);
                        k[S] = I;
                        var T = f[_];
                        I < T[0] && (T[0] = I), I > T[1] && (T[1] = I)
                    }
                    if (!o.pure) {
                        var D = c[b];
                        if (x && null == D)
                            if (null != x.name) c[b] = D = x.name;
                            else if (null != i) {
                                var M = l[i],
                                    A = a[M][w];
                                if (A) {
                                    D = A[S];
                                    var L = u[M].ordinalMeta;
                                    L && L.categories.length && (D = L.categories[D])
                                }
                            }
                        var P = null == x ? null : x.id;
                        null == P && null != D && (p[D] = p[D] || 0, P = D, p[D] > 0 && (P += "__ec__" + p[D]), p[D]++), null != P && (h[b] = P)
                    }
                }
                !o.persistent && o.clean && o.clean(), this._rawCount = this._count = e, this._extent = {}, s(this)
            }
        }, N.count = function () {
            return this._count
        }, N.getIndices = function () {
            var t, e = this._indices;
            if (e) {
                var i = e.constructor,
                    o = this._count;
                if (i === Array) {
                    t = new i(o);
                    for (var a = 0; a < o; a++) t[a] = e[a]
                } else t = new i(e.buffer, 0, o)
            } else
                for (var i = n(this), t = new i(this.count()), a = 0; a < t.length; a++) t[a] = a;
            return t
        }, N.get = function (t, e) {
            if (!(e >= 0 && e < this._count)) return NaN;
            var i = this._storage;
            if (!i[t]) return NaN;
            e = this.getRawIndex(e);
            var n = Math.floor(e / this._chunkSize),
                o = e % this._chunkSize;
            return i[t][n][o]
        }, N.getByRawIndex = function (t, e) {
            if (!(e >= 0 && e < this._rawCount)) return NaN;
            var i = this._storage[t];
            if (!i) return NaN;
            var n = Math.floor(e / this._chunkSize),
                o = e % this._chunkSize;
            return i[n][o]
        }, N._getFast = function (t, e) {
            var i = Math.floor(e / this._chunkSize),
                n = e % this._chunkSize;
            return this._storage[t][i][n]
        }, N.getValues = function (t, e) {
            var i = [];
            m.isArray(t) || (e = t, t = this.dimensions);
            for (var n = 0, o = t.length; n < o; n++) i.push(this.get(t[n], e));
            return i
        }, N.hasValue = function (t) {
            for (var e = this._dimensionsSummary.dataDimsOnCoord, i = 0, n = e.length; i < n; i++)
                if (isNaN(this.get(e[i], t))) return !1;
            return !0
        }, N.getDataExtent = function (t) {
            t = this.getDimension(t);
            var e = this._storage[t],
                i = g();
            if (!e) return i;
            var n, o = this.count();
            if (!this._indices) return this._rawExtent[t].slice();
            if (n = this._extent[t]) return n.slice();
            n = i;
            for (var a = n[0], r = n[1], s = 0; s < o; s++) {
                var l = this._getFast(t, this.getRawIndex(s));
                l < a && (a = l), l > r && (r = l)
            }
            return n = [a, r], this._extent[t] = n, n
        }, N.getApproximateExtent = function (t) {
            return t = this.getDimension(t), this._approximateExtent[t] || this.getDataExtent(t)
        }, N.setApproximateExtent = function (t, e) {
            e = this.getDimension(e), this._approximateExtent[e] = t.slice()
        }, N.getCalculationInfo = function (t) {
            return this._calculationInfo[t]
        }, N.setCalculationInfo = function (t, e) {
            T(t) ? m.extend(this._calculationInfo, t) : this._calculationInfo[t] = e
        }, N.getSum = function (t) {
            var e = this._storage[t],
                i = 0;
            if (e)
                for (var n = 0, o = this.count(); n < o; n++) {
                    var a = this.get(t, n);
                    isNaN(a) || (i += a)
                }
            return i
        }, N.getMedian = function (t) {
            var e = [];
            this.each(t, function (t, i) {
                isNaN(t) || e.push(t)
            });
            var i = [].concat(e).sort(function (t, e) {
                    return t - e
                }),
                n = this.count();
            return 0 === n ? 0 : n % 2 == 1 ? i[(n - 1) / 2] : (i[n / 2] + i[n / 2 - 1]) / 2
        }, N.rawIndexOf = function (t, e) {
            var i = t && this._invertedIndicesMap[t],
                n = i[e];
            return null == n || isNaN(n) ? D : n
        }, N.indexOfName = function (t) {
            for (var e = 0, i = this.count(); e < i; e++)
                if (this.getName(e) === t) return e;
            return -1
        }, N.indexOfRawIndex = function (t) {
            if (t >= this._rawCount || t < 0) return -1;
            if (!this._indices) return t;
            var e = this._indices,
                i = e[t];
            if (null != i && i < this._count && i === t) return t;
            for (var n = 0, o = this._count - 1; n <= o;) {
                var a = (n + o) / 2 | 0;
                if (e[a] < t) n = a + 1;
                else {
                    if (!(e[a] > t)) return a;
                    o = a - 1
                }
            }
            return -1
        }, N.indicesOfNearest = function (t, e, i) {
            var n = this._storage,
                o = n[t],
                a = [];
            if (!o) return a;
            null == i && (i = 1 / 0);
            for (var r = 1 / 0, s = -1, l = 0, d = 0, u = this.count(); d < u; d++) {
                var c = e - this.get(t, d),
                    h = Math.abs(c);
                h <= i && ((h < r || h === r && c >= 0 && s < 0) && (r = h, s = c, l = 0), c === s && (a[l++] = d))
            }
            return a.length = l, a
        }, N.getRawIndex = d, N.getRawDataItem = function (t) {
            if (this._rawData.persistent) return this._rawData.getItem(this.getRawIndex(t));
            for (var e = [], i = 0; i < this.dimensions.length; i++) {
                var n = this.dimensions[i];
                e.push(this.get(n, t))
            }
            return e
        }, N.getName = function (t) {
            var e = this.getRawIndex(t);
            return this._nameList[e] || l(this, this._nameDimIdx, e) || ""
        }, N.getId = function (t) {
            return c(this, this.getRawIndex(t))
        }, N.each = function (t, e, i, n) {
            "use strict";
            if (this._count) {
                "function" == typeof t && (n = i, i = e, e = t, t = []), i = i || n || this, t = m.map(h(t), this.getDimension, this);
                for (var o = t.length, a = 0; a < this.count(); a++) switch (o) {
                    case 0:
                        e.call(i, a);
                        break;
                    case 1:
                        e.call(i, this.get(t[0], a), a);
                        break;
                    case 2:
                        e.call(i, this.get(t[0], a), this.get(t[1], a), a);
                        break;
                    default:
                        for (var r = 0, s = []; r < o; r++) s[r] = this.get(t[r], a);
                        s[r] = a, e.apply(i, s)
                }
            }
        }, N.filterSelf = function (t, e, i, o) {
            "use strict";
            if (this._count) {
                "function" == typeof t && (o = i, i = e, e = t, t = []), i = i || o || this, t = m.map(h(t), this.getDimension, this);
                for (var a = this.count(), r = n(this), s = new r(a), l = [], c = t.length, f = 0, p = t[0], g = 0; g < a; g++) {
                    var v, _ = this.getRawIndex(g);
                    if (0 === c) v = e.call(i, g);
                    else if (1 === c) {
                        var y = this._getFast(p, _);
                        v = e.call(i, y, g)
                    } else {
                        for (var x = 0; x < c; x++) l[x] = this._getFast(p, _);
                        l[x] = g, v = e.apply(i, l)
                    }
                    v && (s[f++] = _)
                }
                return f < a && (this._indices = s), this._count = f, this._extent = {}, this.getRawIndex = this._indices ? u : d, this
            }
        }, N.selectRange = function (t) {
            "use strict";
            if (this._count) {
                var e = [];
                for (var i in t) t.hasOwnProperty(i) && e.push(i);
                var o = e.length;
                if (o) {
                    var a = this.count(),
                        r = n(this),
                        s = new r(a),
                        l = 0,
                        c = e[0],
                        h = t[c][0],
                        f = t[c][1],
                        p = !1;
                    if (!this._indices) {
                        var g = 0;
                        if (1 === o) {
                            for (var v = this._storage[e[0]], m = 0; m < this._chunkCount; m++)
                                for (var _ = v[m], y = Math.min(this._count - m * this._chunkSize, this._chunkSize), x = 0; x < y; x++) {
                                    var b = _[x];
                                    (b >= h && b <= f || isNaN(b)) && (s[l++] = g), g++
                                }
                            p = !0
                        } else if (2 === o) {
                            for (var v = this._storage[c], w = this._storage[e[1]], S = t[e[1]][0], C = t[e[1]][1], m = 0; m < this._chunkCount; m++)
                                for (var _ = v[m], k = w[m], y = Math.min(this._count - m * this._chunkSize, this._chunkSize), x = 0; x < y; x++) {
                                    var b = _[x],
                                        I = k[x];
                                    (b >= h && b <= f || isNaN(b)) && (I >= S && I <= C || isNaN(I)) && (s[l++] = g), g++
                                }
                            p = !0
                        }
                    }
                    if (!p)
                        if (1 === o)
                            for (var x = 0; x < a; x++) {
                                var T = this.getRawIndex(x),
                                    b = this._getFast(c, T);
                                (b >= h && b <= f || isNaN(b)) && (s[l++] = T)
                            } else
                            for (var x = 0; x < a; x++) {
                                for (var D = !0, T = this.getRawIndex(x), m = 0; m < o; m++) {
                                    var M = e[m],
                                        b = this._getFast(i, T);
                                    (b < t[M][0] || b > t[M][1]) && (D = !1)
                                }
                                D && (s[l++] = this.getRawIndex(x))
                            }
                    return l < a && (this._indices = s), this._count = l, this._extent = {}, this.getRawIndex = this._indices ? u : d, this
                }
            }
        }, N.mapArray = function (t, e, i, n) {
            "use strict";
            "function" == typeof t && (n = i, i = e, e = t, t = []), i = i || n || this;
            var o = [];
            return this.each(t, function () {
                o.push(e && e.apply(this, arguments))
            }, i), o
        }, N.map = function (t, e, i, n) {
            "use strict";
            i = i || n || this, t = m.map(h(t), this.getDimension, this);
            var o = f(this, t);
            o._indices = this._indices, o.getRawIndex = o._indices ? u : d;
            for (var a = o._storage, r = [], s = this._chunkSize, l = t.length, c = this.count(), p = [], g = o._rawExtent, v = 0; v < c; v++) {
                for (var _ = 0; _ < l; _++) p[_] = this.get(t[_], v);
                p[l] = v;
                var y = e && e.apply(i, p);
                if (null != y) {
                    "object" != typeof y && (r[0] = y, y = r);
                    for (var x = this.getRawIndex(v), b = Math.floor(x / s), w = x % s, S = 0; S < y.length; S++) {
                        var C = t[S],
                            k = y[S],
                            I = g[C],
                            T = a[C];
                        T && (T[b][w] = k), k < I[0] && (I[0] = k), k > I[1] && (I[1] = k)
                    }
                }
            }
            return o
        }, N.downSample = function (t, e, i, o) {
            for (var a = f(this, [t]), r = a._storage, s = [], l = Math.floor(1 / e), d = r[t], c = this.count(), h = this._chunkSize, p = a._rawExtent[t], g = new (n(this))(c), v = 0, m = 0; m < c; m += l) {
                l > c - m && (l = c - m, s.length = l);
                for (var _ = 0; _ < l; _++) {
                    var y = this.getRawIndex(m + _),
                        x = Math.floor(y / h),
                        b = y % h;
                    s[_] = d[x][b]
                }
                var w = i(s),
                    S = this.getRawIndex(Math.min(m + o(s, w) || 0, c - 1)),
                    C = Math.floor(S / h),
                    k = S % h;
                d[C][k] = w, w < p[0] && (p[0] = w), w > p[1] && (p[1] = w), g[v++] = S
            }
            return a._count = v, a._indices = g, a.getRawIndex = u, a
        }, N.getItemModel = function (t) {
            var e = this.hostModel;
            return new _(this.getRawDataItem(t), e, e && e.ecModel)
        }, N.diff = function (t) {
            var e = this;
            return new y(t ? t.getIndices() : [], this.getIndices(), function (e) {
                return c(t, e)
            }, function (t) {
                return c(e, t)
            })
        }, N.getVisual = function (t) {
            var e = this._visual;
            return e && e[t]
        }, N.setVisual = function (t, e) {
            if (T(t))
                for (var i in t) t.hasOwnProperty(i) && this.setVisual(i, t[i]);
            else this._visual = this._visual || {}, this._visual[t] = e
        }, N.setLayout = function (t, e) {
            if (T(t))
                for (var i in t) t.hasOwnProperty(i) && this.setLayout(i, t[i]);
            else this._layout[t] = e
        }, N.getLayout = function (t) {
            return this._layout[t]
        }, N.getItemLayout = function (t) {
            return this._itemLayouts[t]
        }, N.setItemLayout = function (t, e, i) {
            this._itemLayouts[t] = i ? m.extend(this._itemLayouts[t] || {}, e) : e
        }, N.clearItemLayouts = function () {
            this._itemLayouts.length = 0
        }, N.getItemVisual = function (t, e, i) {
            var n = this._itemVisuals[t],
                o = n && n[e];
            return null != o || i ? o : this.getVisual(e)
        }, N.setItemVisual = function (t, e, i) {
            var n = this._itemVisuals[t] || {},
                o = this.hasItemVisual;
            if (this._itemVisuals[t] = n, T(e))
                for (var a in e) e.hasOwnProperty(a) && (n[a] = e[a], o[a] = !0);
            else n[e] = i, o[e] = !0
        }, N.clearAllVisual = function () {
            this._visual = {}, this._itemVisuals = [], this.hasItemVisual = {}
        };
        var B = function (t) {
            t.seriesIndex = this.seriesIndex, t.dataIndex = this.dataIndex, t.dataType = this.dataType
        };
        N.setItemGraphicEl = function (t, e) {
            var i = this.hostModel;
            e && (e.dataIndex = t, e.dataType = this.dataType, e.seriesIndex = i && i.seriesIndex, "group" === e.type && e.traverse(B, e)), this._graphicEls[t] = e
        }, N.getItemGraphicEl = function (t) {
            return this._graphicEls[t]
        }, N.eachItemGraphicEl = function (t, e) {
            m.each(this._graphicEls, function (i, n) {
                i && t && t.call(e, i, n)
            })
        }, N.cloneShallow = function (t) {
            if (!t) {
                var e = m.map(this.dimensions, this.getDimensionInfo, this);
                t = new z(e, this.hostModel)
            }
            if (t._storage = this._storage, a(t, this), this._indices) {
                var i = this._indices.constructor;
                t._indices = new i(this._indices)
            } else t._indices = null;
            return t.getRawIndex = t._indices ? u : d, t
        }, N.wrapMethod = function (t, e) {
            var i = this[t];
            "function" == typeof i && (this.__wrappedMethods = this.__wrappedMethods || [], this.__wrappedMethods.push(t), this[t] = function () {
                var t = i.apply(this, arguments);
                return e.apply(this, [t].concat(m.slice(arguments)))
            })
        }, N.TRANSFERABLE_METHODS = ["cloneShallow", "downSample", "map"], N.CHANGABLE_METHODS = ["filterSelf", "selectRange"];
        var F = z;
        t.exports = F
    }, function (t, e, i) {
        function n(t, e) {
            return e = e || {}, o(e.coordDimensions || [], t, {
                dimsDef: e.dimensionsDefine || t.dimensionsDefine,
                encodeDef: e.encodeDefine || t.encodeDefine,
                dimCount: e.dimensionsCount,
                encodeDefaulter: e.encodeDefaulter,
                generateCoord: e.generateCoord,
                generateCoordCount: e.generateCoordCount
            })
        }

        var o = i(702);
        t.exports = n
    }, function (t, e, i) {
        function n(t, e, i) {
            i = i || {};
            var n, o, a, r, d = i.byIndex,
                u = i.stackedCoordDimension,
                c = !(!t || !t.get("stack"));
            if (s(e, function (t, i) {
                l(t) && (e[i] = t = {
                    name: t
                }), c && !t.isExtraCoord && (d || n || !t.ordinalMeta || (n = t), o || "ordinal" === t.type || "time" === t.type || u && u !== t.coordDim || (o = t))
            }), !o || d || n || (d = !0), o) {
                a = "__\0ecstackresult", r = "__\0ecstackedover", n && (n.createInvertedIndices = !0);
                var h = o.coordDim,
                    f = o.type,
                    p = 0;
                s(e, function (t) {
                    t.coordDim === h && p++
                }), e.push({
                    name: a,
                    coordDim: h,
                    coordDimIndex: p,
                    type: f,
                    isExtraCoord: !0,
                    isCalculationCoord: !0
                }), p++, e.push({
                    name: r,
                    coordDim: r,
                    coordDimIndex: p,
                    type: f,
                    isExtraCoord: !0,
                    isCalculationCoord: !0
                })
            }
            return {
                stackedDimension: o && o.name,
                stackedByDimension: n && n.name,
                isStackedByIndex: d,
                stackedOverDimension: r,
                stackResultDimension: a
            }
        }

        function o(t, e) {
            return !!e && e === t.getCalculationInfo("stackedDimension")
        }

        function a(t, e) {
            return o(t, e) ? t.getCalculationInfo("stackResultDimension") : e
        }

        var r = i(630),
            s = r.each,
            l = r.isString;
        e.enableDataStack = n, e.isDimensionStacked = o, e.getStackedDimension = a
    }, function (t, e, i) {
        function n(t) {
            var e = {},
                i = e.encode = {},
                n = d(),
                a = [],
                s = [],
                u = e.userOutput = {
                    dimensionNames: t.dimensions.slice(),
                    encode: {}
                };
            l(t.dimensions, function (e) {
                var l = t.getDimensionInfo(e),
                    d = l.coordDim;
                if (d) {
                    var h = l.coordDimIndex;
                    o(i, d)[h] = e, l.isExtraCoord || (n.set(d, 1), r(l.type) && (a[0] = e), o(u.encode, d)[h] = l.index), l.defaultTooltip && s.push(e)
                }
                c.each(function (t, e) {
                    var n = o(i, e),
                        a = l.otherDims[e];
                    null != a && !1 !== a && (n[a] = l.name)
                })
            });
            var h = [],
                f = {};
            n.each(function (t, e) {
                var n = i[e];
                f[e] = n[0], h = h.concat(n)
            }), e.dataDimsOnCoord = h, e.encodeFirstDimNotExtra = f;
            var p = i.label;
            p && p.length && (a = p.slice());
            var g = i.tooltip;
            return g && g.length ? s = g.slice() : s.length || (s = a.slice()), i.defaultedLabel = a, i.defaultedTooltip = s, e
        }

        function o(t, e) {
            return t.hasOwnProperty(e) || (t[e] = []), t[e]
        }

        function a(t) {
            return "category" === t ? "ordinal" : "time" === t ? "time" : "float"
        }

        function r(t) {
            return !("ordinal" === t || "time" === t)
        }

        var s = i(630),
            l = s.each,
            d = s.createHashMap,
            u = (s.assert, i(634)),
            c = (u.__DEV__, d(["tooltip", "label", "itemName", "itemId", "seriesName"]));
        e.OTHER_DIMENSIONS = c, e.summarizeDimensions = n, e.getDimensionTypeByAxis = a
    }, function (t, e, i) {
        function n(t) {
            for (var e = 0; e < t.length; e++) t[e][1] || (t[e][1] = t[e][0]);
            return function (e, i, n) {
                for (var a = {}, r = 0; r < t.length; r++) {
                    var s = t[r][1];
                    if (!(i && o.indexOf(i, s) >= 0 || n && o.indexOf(n, s) < 0)) {
                        var l = e.getShallow(s);
                        null != l && (a[t[r][0]] = l)
                    }
                }
                return a
            }
        }

        var o = i(630);
        t.exports = n
    }, function (t, e, i) {
        var n = i(632),
            o = i(642),
            a = i(659),
            r = i(706),
            s = n.round,
            l = a.extend({
                type: "interval",
                _interval: 0,
                _intervalPrecision: 2,
                setExtent: function (t, e) {
                    var i = this._extent;
                    isNaN(t) || (i[0] = parseFloat(t)), isNaN(e) || (i[1] = parseFloat(e))
                },
                unionExtent: function (t) {
                    var e = this._extent;
                    t[0] < e[0] && (e[0] = t[0]), t[1] > e[1] && (e[1] = t[1]), l.prototype.setExtent.call(this, e[0], e[1])
                },
                getInterval: function () {
                    return this._interval
                },
                setInterval: function (t) {
                    this._interval = t, this._niceExtent = this._extent.slice(), this._intervalPrecision = r.getIntervalPrecision(t)
                },
                getTicks: function (t) {
                    var e = this._interval,
                        i = this._extent,
                        n = this._niceExtent,
                        o = this._intervalPrecision,
                        a = [];
                    if (!e) return a;
                    i[0] < n[0] && (t ? a.push(s(n[0] - e, o)) : a.push(i[0]));
                    for (var r = n[0]; r <= n[1] && (a.push(r), (r = s(r + e, o)) !== a[a.length - 1]);)
                        if (a.length > 1e4) return [];
                    var l = a.length ? a[a.length - 1] : n[1];
                    return i[1] > l && (t ? a.push(s(l + e, o)) : a.push(i[1])), a
                },
                getMinorTicks: function (t) {
                    for (var e = this.getTicks(!0), i = [], o = this.getExtent(), a = 1; a < e.length; a++) {
                        for (var r = e[a], s = e[a - 1], l = 0, d = [], u = r - s, c = u / t; l < t - 1;) {
                            var h = n.round(s + (l + 1) * c);
                            h > o[0] && h < o[1] && d.push(h), l++
                        }
                        i.push(d)
                    }
                    return i
                },
                getLabel: function (t, e) {
                    if (null == t) return "";
                    var i = e && e.precision;
                    return null == i ? i = n.getPrecisionSafe(t) || 0 : "auto" === i && (i = this._intervalPrecision), t = s(t, i, !0), o.addCommas(t)
                },
                niceTicks: function (t, e, i) {
                    t = t || 5;
                    var n = this._extent,
                        o = n[1] - n[0];
                    if (isFinite(o)) {
                        o < 0 && (o = -o, n.reverse());
                        var a = r.intervalScaleNiceTicks(n, t, e, i);
                        this._intervalPrecision = a.intervalPrecision, this._interval = a.interval, this._niceExtent = a.niceTickExtent
                    }
                },
                niceExtent: function (t) {
                    var e = this._extent;
                    if (e[0] === e[1])
                        if (0 !== e[0]) {
                            var i = e[0];
                            t.fixMax ? e[0] -= i / 2 : (e[1] += i / 2, e[0] -= i / 2)
                        } else e[1] = 1;
                    var n = e[1] - e[0];
                    isFinite(n) || (e[0] = 0, e[1] = 1), this.niceTicks(t.splitNumber, t.minInterval, t.maxInterval);
                    var o = this._interval;
                    t.fixMin || (e[0] = s(Math.floor(e[0] / o) * o)), t.fixMax || (e[1] = s(Math.ceil(e[1] / o) * o))
                }
            });
        l.create = function () {
            return new l
        };
        var d = l;
        t.exports = d
    }, function (t, e, i) {
        function n(t) {
            return new o(t)
        }

        function o(t) {
            t = t || {}, this._reset = t.reset, this._plan = t.plan, this._count = t.count, this._onDirty = t.onDirty, this._dirty = !0, this.context
        }

        function a(t, e, i, n, o, a) {
            c.reset(i, n, o, a), t._callingProgress = e, t._callingProgress({
                start: i,
                end: n,
                count: n - i,
                next: c.next
            }, t.context)
        }

        function r(t, e) {
            t._dueIndex = t._outputDueEnd = t._dueEnd = 0, t._settedOutputEnd = null;
            var i, n;
            !e && t._reset && (i = t._reset(t.context), i && i.progress && (n = i.forceFirstProgress, i = i.progress), l(i) && !i.length && (i = null)), t._progress = i, t._modBy = t._modDataCount = null;
            var o = t._downstream;
            return o && o.dirty(), n
        }

        var s = i(630),
            l = (s.assert, s.isArray),
            d = i(634),
            u = (d.__DEV__, o.prototype);
        u.perform = function (t) {
            function e(t) {
                return !(t >= 1) && (t = 1), t
            }

            var i = this._upstream,
                n = t && t.skip;
            if (this._dirty && i) {
                var o = this.context;
                o.data = o.outputData = i.context.outputData
            }
            this.__pipeline && (this.__pipeline.currentTask = this);
            var s;
            this._plan && !n && (s = this._plan(this.context));
            var d = e(this._modBy),
                u = this._modDataCount || 0,
                c = e(t && t.modBy),
                h = t && t.modDataCount || 0;
            d === c && u === h || (s = "reset");
            var f;
            (this._dirty || "reset" === s) && (this._dirty = !1, f = r(this, n)), this._modBy = c, this._modDataCount = h;
            var p = t && t.step;
            if (this._dueEnd = i ? i._outputDueEnd : this._count ? this._count(this.context) : 1 / 0, this._progress) {
                var g = this._dueIndex,
                    v = Math.min(null != p ? this._dueIndex + p : 1 / 0, this._dueEnd);
                if (!n && (f || g < v)) {
                    var m = this._progress;
                    if (l(m))
                        for (var _ = 0; _ < m.length; _++) a(this, m[_], g, v, c, h);
                    else a(this, m, g, v, c, h)
                }
                this._dueIndex = v;
                var y = null != this._settedOutputEnd ? this._settedOutputEnd : v;
                this._outputDueEnd = y
            } else this._dueIndex = this._outputDueEnd = null != this._settedOutputEnd ? this._settedOutputEnd : this._dueEnd;
            return this.unfinished()
        };
        var c = function () {
            function t() {
                return n < i ? n++ : null
            }

            function e() {
                var t = n % r * o + Math.ceil(n / r),
                    e = n >= i ? null : t < a ? t : n;
                return n++, e
            }

            var i, n, o, a, r, s = {
                reset: function (l, d, u, c) {
                    n = l, i = d, o = u, a = c, r = Math.ceil(a / o), s.next = o > 1 && a > 0 ? e : t
                }
            };
            return s
        }();
        u.dirty = function () {
            this._dirty = !0, this._onDirty && this._onDirty(this.context)
        }, u.unfinished = function () {
            return this._progress && this._dueIndex < this._dueEnd
        }, u.pipe = function (t) {
            (this._downstream !== t || this._dirty) && (this._downstream = t, t._upstream = this, t.dirty())
        }, u.dispose = function () {
            this._disposed || (this._upstream && (this._upstream._downstream = null), this._downstream && (this._downstream._upstream = null), this._dirty = !1, this._disposed = !0)
        }, u.getUpstream = function () {
            return this._upstream
        }, u.getDownstream = function () {
            return this._downstream
        }, u.setOutputEnd = function (t) {
            this._outputDueEnd = this._settedOutputEnd = t
        }, e.createTask = n
    }, function (t, e, i) {
        (function (e) {
            var i, n;
            !function (e, o) {
                t.exports = function (o) {
                    "use strict";
                    o = o || {};
                    var a, r = o.Base64,
                        s = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/",
                        l = function (t) {
                            for (var e = {}, i = 0, n = t.length; i < n; i++) e[t.charAt(i)] = i;
                            return e
                        }(s),
                        d = String.fromCharCode,
                        u = function (t) {
                            if (t.length < 2) {
                                var e = t.charCodeAt(0);
                                return e < 128 ? t : e < 2048 ? d(192 | e >>> 6) + d(128 | 63 & e) : d(224 | e >>> 12 & 15) + d(128 | e >>> 6 & 63) + d(128 | 63 & e)
                            }
                            var e = 65536 + 1024 * (t.charCodeAt(0) - 55296) + (t.charCodeAt(1) - 56320);
                            return d(240 | e >>> 18 & 7) + d(128 | e >>> 12 & 63) + d(128 | e >>> 6 & 63) + d(128 | 63 & e)
                        },
                        c = /[\uD800-\uDBFF][\uDC00-\uDFFFF]|[^\x00-\x7F]/g,
                        h = function (t) {
                            return t.replace(c, u)
                        },
                        f = function (t) {
                            var e = [0, 2, 1][t.length % 3],
                                i = t.charCodeAt(0) << 16 | (t.length > 1 ? t.charCodeAt(1) : 0) << 8 | (t.length > 2 ? t.charCodeAt(2) : 0);
                            return [s.charAt(i >>> 18), s.charAt(i >>> 12 & 63), e >= 2 ? "=" : s.charAt(i >>> 6 & 63), e >= 1 ? "=" : s.charAt(63 & i)].join("")
                        },
                        p = o.btoa && "function" == typeof o.btoa ? function (t) {
                            return o.btoa(t)
                        } : function (t) {
                            if (t.match(/[^\x00-\xFF]/)) throw new RangeError("The string contains invalid characters.");
                            return t.replace(/[\s\S]{1,3}/g, f)
                        },
                        g = function (t) {
                            return p(h(String(t)))
                        },
                        v = function (t) {
                            return t.replace(/[+\/]/g, function (t) {
                                return "+" == t ? "-" : "_"
                            }).replace(/=/g, "")
                        },
                        m = function (t, e) {
                            return e ? v(g(t)) : g(t)
                        },
                        _ = function (t) {
                            return m(t, !0)
                        };
                    o.Uint8Array && (a = function (t, e) {
                        for (var i = "", n = 0, o = t.length; n < o; n += 3) {
                            var a = t[n],
                                r = t[n + 1],
                                l = t[n + 2],
                                d = a << 16 | r << 8 | l;
                            i += s.charAt(d >>> 18) + s.charAt(d >>> 12 & 63) + (void 0 !== r ? s.charAt(d >>> 6 & 63) : "=") + (void 0 !== l ? s.charAt(63 & d) : "=")
                        }
                        return e ? v(i) : i
                    });
                    var y, x = /[\xC0-\xDF][\x80-\xBF]|[\xE0-\xEF][\x80-\xBF]{2}|[\xF0-\xF7][\x80-\xBF]{3}/g,
                        b = function (t) {
                            switch (t.length) {
                                case 4:
                                    var e = (7 & t.charCodeAt(0)) << 18 | (63 & t.charCodeAt(1)) << 12 | (63 & t.charCodeAt(2)) << 6 | 63 & t.charCodeAt(3),
                                        i = e - 65536;
                                    return d(55296 + (i >>> 10)) + d(56320 + (1023 & i));
                                case 3:
                                    return d((15 & t.charCodeAt(0)) << 12 | (63 & t.charCodeAt(1)) << 6 | 63 & t.charCodeAt(2));
                                default:
                                    return d((31 & t.charCodeAt(0)) << 6 | 63 & t.charCodeAt(1))
                            }
                        },
                        w = function (t) {
                            return t.replace(x, b)
                        },
                        S = function (t) {
                            var e = t.length,
                                i = e % 4,
                                n = (e > 0 ? l[t.charAt(0)] << 18 : 0) | (e > 1 ? l[t.charAt(1)] << 12 : 0) | (e > 2 ? l[t.charAt(2)] << 6 : 0) | (e > 3 ? l[t.charAt(3)] : 0),
                                o = [d(n >>> 16), d(n >>> 8 & 255), d(255 & n)];
                            return o.length -= [0, 0, 2, 1][i], o.join("")
                        },
                        C = o.atob && "function" == typeof o.atob ? function (t) {
                            return o.atob(t)
                        } : function (t) {
                            return t.replace(/\S{1,4}/g, S)
                        },
                        k = function (t) {
                            return C(String(t).replace(/[^A-Za-z0-9\+\/]/g, ""))
                        },
                        I = function (t) {
                            return w(C(t))
                        },
                        T = function (t) {
                            return String(t).replace(/[-_]/g, function (t) {
                                return "-" == t ? "+" : "/"
                            }).replace(/[^A-Za-z0-9\+\/]/g, "")
                        },
                        D = function (t) {
                            return I(T(t))
                        };
                    o.Uint8Array && (y = function (t) {
                        return Uint8Array.from(k(T(t)), function (t) {
                            return t.charCodeAt(0)
                        })
                    });
                    var M = function () {
                        var t = o.Base64;
                        return o.Base64 = r, t
                    };
                    if (o.Base64 = {
                        VERSION: "2.6.4",
                        atob: k,
                        btoa: p,
                        fromBase64: D,
                        toBase64: m,
                        utob: h,
                        encode: m,
                        encodeURI: _,
                        btou: w,
                        decode: D,
                        noConflict: M,
                        fromUint8Array: a,
                        toUint8Array: y
                    }, "function" == typeof Object.defineProperty) {
                        var A = function (t) {
                            return {
                                value: t,
                                enumerable: !1,
                                writable: !0,
                                configurable: !0
                            }
                        };
                        o.Base64.extendString = function () {
                            Object.defineProperty(String.prototype, "fromBase64", A(function () {
                                return D(this)
                            })), Object.defineProperty(String.prototype, "toBase64", A(function (t) {
                                return m(this, t)
                            })), Object.defineProperty(String.prototype, "toBase64URI", A(function () {
                                return m(this, !0)
                            }))
                        }
                    }
                    return o.Meteor && (Base64 = o.Base64), void 0 !== t && t.exports ? t.exports.Base64 = o.Base64 : (i = [], void 0 !== (n = function () {
                        return o.Base64
                    }.apply(e, i)) && (t.exports = n)), {
                        Base64: o.Base64
                    }
                }(e)
            }("undefined" != typeof self ? self : "undefined" != typeof window ? window : void 0 !== e ? e : this)
        }).call(e, i(64))
    }, function (t, e, i) {
        var n = i(652),
            o = {
                s: i(655),
                b: i(654)
            };
        t.exports = n(o.s, o.b)
    }, function (t, e, i) {
        var n = i(653),
            o = (i(643), i(652)),
            a = {
                s: i(655),
                b: i(654),
                hk_s: i(686),
                hk_b: i(685)
            },
            r = function (t) {
                this.lang = t, this.encode = function () {
                    return n.CL.apply(t, arguments)
                }, this.decode = function () {
                    return n.unCL.apply(t, arguments)
                }, this.toMoney = function () {
                    return n.toMoney.apply(t, arguments)
                }
            };
        r.langs = a, r.cn = o(a.s, a.b), r.hk = o(a.hk_s, a.hk_b), t.exports = r
    }, function (t, e) {
        t.exports = {
            ch: "零壹貳參肆伍陸柒捌玖",
            ch_u: "個拾佰仟萬億",
            ch_f: "負",
            ch_d: "點",
            m_t: "$",
            m_z: "整",
            m_u: "圓角分"
        }
    }, function (t, e) {
        t.exports = {
            ch: "零一二三四五六七八九",
            ch_u: "個十百千萬億",
            ch_f: "負",
            ch_d: "點"
        }
    }, function (t, e, i) {
        var n = function () {
                return this
            }() || Function("return this")(),
            o = n.regeneratorRuntime && Object.getOwnPropertyNames(n).indexOf("regeneratorRuntime") >= 0,
            a = o && n.regeneratorRuntime;
        if (n.regeneratorRuntime = void 0, t.exports = i(688), o) n.regeneratorRuntime = a;
        else try {
            delete n.regeneratorRuntime
        } catch (t) {
            n.regeneratorRuntime = void 0
        }
    }, function (t, e) {
        !function (e) {
            "use strict";

            function i(t, e, i, n) {
                var a = e && e.prototype instanceof o ? e : o,
                    r = Object.create(a.prototype),
                    s = new f(n || []);
                return r._invoke = d(t, i, s), r
            }

            function n(t, e, i) {
                try {
                    return {
                        type: "normal",
                        arg: t.call(e, i)
                    }
                } catch (t) {
                    return {
                        type: "throw",
                        arg: t
                    }
                }
            }

            function o() {
            }

            function a() {
            }

            function r() {
            }

            function s(t) {
                ["next", "throw", "return"].forEach(function (e) {
                    t[e] = function (t) {
                        return this._invoke(e, t)
                    }
                })
            }

            function l(t) {
                function e(i, o, a, r) {
                    var s = n(t[i], t, o);
                    if ("throw" !== s.type) {
                        var l = s.arg,
                            d = l.value;
                        return d && "object" == typeof d && _.call(d, "__await") ? Promise.resolve(d.__await).then(function (t) {
                            e("next", t, a, r)
                        }, function (t) {
                            e("throw", t, a, r)
                        }) : Promise.resolve(d).then(function (t) {
                            l.value = t, a(l)
                        }, r)
                    }
                    r(s.arg)
                }

                function i(t, i) {
                    function n() {
                        return new Promise(function (n, o) {
                            e(t, i, n, o)
                        })
                    }

                    return o = o ? o.then(n, n) : n()
                }

                var o;
                this._invoke = i
            }

            function d(t, e, i) {
                var o = k;
                return function (a, r) {
                    if (o === T) throw new Error("Generator is already running");
                    if (o === D) {
                        if ("throw" === a) throw r;
                        return g()
                    }
                    for (i.method = a, i.arg = r; ;) {
                        var s = i.delegate;
                        if (s) {
                            var l = u(s, i);
                            if (l) {
                                if (l === M) continue;
                                return l
                            }
                        }
                        if ("next" === i.method) i.sent = i._sent = i.arg;
                        else if ("throw" === i.method) {
                            if (o === k) throw o = D, i.arg;
                            i.dispatchException(i.arg)
                        } else "return" === i.method && i.abrupt("return", i.arg);
                        o = T;
                        var d = n(t, e, i);
                        if ("normal" === d.type) {
                            if (o = i.done ? D : I, d.arg === M) continue;
                            return {
                                value: d.arg,
                                done: i.done
                            }
                        }
                        "throw" === d.type && (o = D, i.method = "throw", i.arg = d.arg)
                    }
                }
            }

            function u(t, e) {
                var i = t.iterator[e.method];
                if (i === v) {
                    if (e.delegate = null, "throw" === e.method) {
                        if (t.iterator.return && (e.method = "return", e.arg = v, u(t, e), "throw" === e.method)) return M;
                        e.method = "throw", e.arg = new TypeError("The iterator does not provide a 'throw' method")
                    }
                    return M
                }
                var o = n(i, t.iterator, e.arg);
                if ("throw" === o.type) return e.method = "throw", e.arg = o.arg, e.delegate = null, M;
                var a = o.arg;
                return a ? a.done ? (e[t.resultName] = a.value, e.next = t.nextLoc, "return" !== e.method && (e.method = "next", e.arg = v), e.delegate = null, M) : a : (e.method = "throw", e.arg = new TypeError("iterator result is not an object"), e.delegate = null, M)
            }

            function c(t) {
                var e = {
                    tryLoc: t[0]
                };
                1 in t && (e.catchLoc = t[1]), 2 in t && (e.finallyLoc = t[2], e.afterLoc = t[3]), this.tryEntries.push(e)
            }

            function h(t) {
                var e = t.completion || {};
                e.type = "normal", delete e.arg, t.completion = e
            }

            function f(t) {
                this.tryEntries = [{
                    tryLoc: "root"
                }], t.forEach(c, this), this.reset(!0)
            }

            function p(t) {
                if (t) {
                    var e = t[x];
                    if (e) return e.call(t);
                    if ("function" == typeof t.next) return t;
                    if (!isNaN(t.length)) {
                        var i = -1,
                            n = function e() {
                                for (; ++i < t.length;)
                                    if (_.call(t, i)) return e.value = t[i], e.done = !1, e;
                                return e.value = v, e.done = !0, e
                            };
                        return n.next = n
                    }
                }
                return {
                    next: g
                }
            }

            function g() {
                return {
                    value: v,
                    done: !0
                }
            }

            var v, m = Object.prototype,
                _ = m.hasOwnProperty,
                y = "function" == typeof Symbol ? Symbol : {},
                x = y.iterator || "@@iterator",
                b = y.asyncIterator || "@@asyncIterator",
                w = y.toStringTag || "@@toStringTag",
                S = "object" == typeof t,
                C = e.regeneratorRuntime;
            if (C) return void (S && (t.exports = C));
            C = e.regeneratorRuntime = S ? t.exports : {}, C.wrap = i;
            var k = "suspendedStart",
                I = "suspendedYield",
                T = "executing",
                D = "completed",
                M = {},
                A = {};
            A[x] = function () {
                return this
            };
            var L = Object.getPrototypeOf,
                P = L && L(L(p([])));
            P && P !== m && _.call(P, x) && (A = P);
            var O = r.prototype = o.prototype = Object.create(A);
            a.prototype = O.constructor = r, r.constructor = a, r[w] = a.displayName = "GeneratorFunction", C.isGeneratorFunction = function (t) {
                var e = "function" == typeof t && t.constructor;
                return !!e && (e === a || "GeneratorFunction" === (e.displayName || e.name))
            }, C.mark = function (t) {
                return Object.setPrototypeOf ? Object.setPrototypeOf(t, r) : (t.__proto__ = r, w in t || (t[w] = "GeneratorFunction")), t.prototype = Object.create(O), t
            }, C.awrap = function (t) {
                return {
                    __await: t
                }
            }, s(l.prototype), l.prototype[b] = function () {
                return this
            }, C.AsyncIterator = l, C.async = function (t, e, n, o) {
                var a = new l(i(t, e, n, o));
                return C.isGeneratorFunction(e) ? a : a.next().then(function (t) {
                    return t.done ? t.value : a.next()
                })
            }, s(O), O[w] = "Generator", O[x] = function () {
                return this
            }, O.toString = function () {
                return "[object Generator]"
            }, C.keys = function (t) {
                var e = [];
                for (var i in t) e.push(i);
                return e.reverse(),
                    function i() {
                        for (; e.length;) {
                            var n = e.pop();
                            if (n in t) return i.value = n, i.done = !1, i
                        }
                        return i.done = !0, i
                    }
            }, C.values = p, f.prototype = {
                constructor: f,
                reset: function (t) {
                    if (this.prev = 0, this.next = 0, this.sent = this._sent = v, this.done = !1, this.delegate = null, this.method = "next", this.arg = v, this.tryEntries.forEach(h), !t)
                        for (var e in this) "t" === e.charAt(0) && _.call(this, e) && !isNaN(+e.slice(1)) && (this[e] = v)
                },
                stop: function () {
                    this.done = !0;
                    var t = this.tryEntries[0],
                        e = t.completion;
                    if ("throw" === e.type) throw e.arg;
                    return this.rval
                },
                dispatchException: function (t) {
                    function e(e, n) {
                        return a.type = "throw", a.arg = t, i.next = e, n && (i.method = "next", i.arg = v), !!n
                    }

                    if (this.done) throw t;
                    for (var i = this, n = this.tryEntries.length - 1; n >= 0; --n) {
                        var o = this.tryEntries[n],
                            a = o.completion;
                        if ("root" === o.tryLoc) return e("end");
                        if (o.tryLoc <= this.prev) {
                            var r = _.call(o, "catchLoc"),
                                s = _.call(o, "finallyLoc");
                            if (r && s) {
                                if (this.prev < o.catchLoc) return e(o.catchLoc, !0);
                                if (this.prev < o.finallyLoc) return e(o.finallyLoc)
                            } else if (r) {
                                if (this.prev < o.catchLoc) return e(o.catchLoc, !0)
                            } else {
                                if (!s) throw new Error("try statement without catch or finally");
                                if (this.prev < o.finallyLoc) return e(o.finallyLoc)
                            }
                        }
                    }
                },
                abrupt: function (t, e) {
                    for (var i = this.tryEntries.length - 1; i >= 0; --i) {
                        var n = this.tryEntries[i];
                        if (n.tryLoc <= this.prev && _.call(n, "finallyLoc") && this.prev < n.finallyLoc) {
                            var o = n;
                            break
                        }
                    }
                    o && ("break" === t || "continue" === t) && o.tryLoc <= e && e <= o.finallyLoc && (o = null);
                    var a = o ? o.completion : {};
                    return a.type = t, a.arg = e, o ? (this.method = "next", this.next = o.finallyLoc, M) : this.complete(a)
                },
                complete: function (t, e) {
                    if ("throw" === t.type) throw t.arg;
                    return "break" === t.type || "continue" === t.type ? this.next = t.arg : "return" === t.type ? (this.rval = this.arg = t.arg, this.method = "return", this.next = "end") : "normal" === t.type && e && (this.next = e), M
                },
                finish: function (t) {
                    for (var e = this.tryEntries.length - 1; e >= 0; --e) {
                        var i = this.tryEntries[e];
                        if (i.finallyLoc === t) return this.complete(i.completion, i.afterLoc), h(i), M
                    }
                },
                catch: function (t) {
                    for (var e = this.tryEntries.length - 1; e >= 0; --e) {
                        var i = this.tryEntries[e];
                        if (i.tryLoc === t) {
                            var n = i.completion;
                            if ("throw" === n.type) {
                                var o = n.arg;
                                h(i)
                            }
                            return o
                        }
                    }
                    throw new Error("illegal catch attempt")
                },
                delegateYield: function (t, e, i) {
                    return this.delegate = {
                        iterator: p(t),
                        resultName: e,
                        nextLoc: i
                    }, "next" === this.method && (this.arg = v), M
                }
            }
        }(function () {
            return this
        }() || Function("return this")())
    }, , , function (t, e) {
        function i(t) {
            for (var e = 0; t >= u;) e |= 1 & t, t >>= 1;
            return t + e
        }

        function n(t, e, i, n) {
            var a = e + 1;
            if (a === i) return 1;
            if (n(t[a++], t[e]) < 0) {
                for (; a < i && n(t[a], t[a - 1]) < 0;) a++;
                o(t, e, a)
            } else
                for (; a < i && n(t[a], t[a - 1]) >= 0;) a++;
            return a - e
        }

        function o(t, e, i) {
            for (i--; e < i;) {
                var n = t[e];
                t[e++] = t[i], t[i--] = n
            }
        }

        function a(t, e, i, n, o) {
            for (n === e && n++; n < i; n++) {
                for (var a, r = t[n], s = e, l = n; s < l;) a = s + l >>> 1, o(r, t[a]) < 0 ? l = a : s = a + 1;
                var d = n - s;
                switch (d) {
                    case 3:
                        t[s + 3] = t[s + 2];
                    case 2:
                        t[s + 2] = t[s + 1];
                    case 1:
                        t[s + 1] = t[s];
                        break;
                    default:
                        for (; d > 0;) t[s + d] = t[s + d - 1], d--
                }
                t[s] = r
            }
        }

        function r(t, e, i, n, o, a) {
            var r = 0,
                s = 0,
                l = 1;
            if (a(t, e[i + o]) > 0) {
                for (s = n - o; l < s && a(t, e[i + o + l]) > 0;) r = l, (l = 1 + (l << 1)) <= 0 && (l = s);
                l > s && (l = s), r += o, l += o
            } else {
                for (s = o + 1; l < s && a(t, e[i + o - l]) <= 0;) r = l, (l = 1 + (l << 1)) <= 0 && (l = s);
                l > s && (l = s);
                var d = r;
                r = o - l, l = o - d
            }
            for (r++; r < l;) {
                var u = r + (l - r >>> 1);
                a(t, e[i + u]) > 0 ? r = u + 1 : l = u
            }
            return l
        }

        function s(t, e, i, n, o, a) {
            var r = 0,
                s = 0,
                l = 1;
            if (a(t, e[i + o]) < 0) {
                for (s = o + 1; l < s && a(t, e[i + o - l]) < 0;) r = l, (l = 1 + (l << 1)) <= 0 && (l = s);
                l > s && (l = s);
                var d = r;
                r = o - l, l = o - d
            } else {
                for (s = n - o; l < s && a(t, e[i + o + l]) >= 0;) r = l, (l = 1 + (l << 1)) <= 0 && (l = s);
                l > s && (l = s), r += o, l += o
            }
            for (r++; r < l;) {
                var u = r + (l - r >>> 1);
                a(t, e[i + u]) < 0 ? l = u : r = u + 1
            }
            return l
        }

        function l(t, e) {
            function i(t, e) {
                u[p] = t, h[p] = e, p += 1
            }

            function n() {
                for (; p > 1;) {
                    var t = p - 2;
                    if (t >= 1 && h[t - 1] <= h[t] + h[t + 1] || t >= 2 && h[t - 2] <= h[t] + h[t - 1]) h[t - 1] < h[t + 1] && t--;
                    else if (h[t] > h[t + 1]) break;
                    a(t)
                }
            }

            function o() {
                for (; p > 1;) {
                    var t = p - 2;
                    t > 0 && h[t - 1] < h[t + 1] && t--, a(t)
                }
            }

            function a(i) {
                var n = u[i],
                    o = h[i],
                    a = u[i + 1],
                    c = h[i + 1];
                h[i] = o + c, i === p - 3 && (u[i + 1] = u[i + 2], h[i + 1] = h[i + 2]), p--;
                var f = s(t[a], t, n, o, 0, e);
                n += f, 0 != (o -= f) && 0 !== (c = r(t[n + o - 1], t, a, c, c - 1, e)) && (o <= c ? l(n, o, a, c) : d(n, o, a, c))
            }

            function l(i, n, o, a) {
                var l = 0;
                for (l = 0; l < n; l++) g[l] = t[i + l];
                var d = 0,
                    u = o,
                    h = i;
                if (t[h++] = t[u++], 0 != --a) {
                    if (1 === n) {
                        for (l = 0; l < a; l++) t[h + l] = t[u + l];
                        return void (t[h + a] = g[d])
                    }
                    for (var p, v, m, _ = f; ;) {
                        p = 0, v = 0, m = !1;
                        do {
                            if (e(t[u], g[d]) < 0) {
                                if (t[h++] = t[u++], v++, p = 0, 0 == --a) {
                                    m = !0;
                                    break
                                }
                            } else if (t[h++] = g[d++], p++, v = 0, 1 == --n) {
                                m = !0;
                                break
                            }
                        } while ((p | v) < _);
                        if (m) break;
                        do {
                            if (0 !== (p = s(t[u], g, d, n, 0, e))) {
                                for (l = 0; l < p; l++) t[h + l] = g[d + l];
                                if (h += p, d += p, (n -= p) <= 1) {
                                    m = !0;
                                    break
                                }
                            }
                            if (t[h++] = t[u++], 0 == --a) {
                                m = !0;
                                break
                            }
                            if (0 !== (v = r(g[d], t, u, a, 0, e))) {
                                for (l = 0; l < v; l++) t[h + l] = t[u + l];
                                if (h += v, u += v, 0 == (a -= v)) {
                                    m = !0;
                                    break
                                }
                            }
                            if (t[h++] = g[d++], 1 == --n) {
                                m = !0;
                                break
                            }
                            _--
                        } while (p >= c || v >= c);
                        if (m) break;
                        _ < 0 && (_ = 0), _ += 2
                    }
                    if (f = _, f < 1 && (f = 1), 1 === n) {
                        for (l = 0; l < a; l++) t[h + l] = t[u + l];
                        t[h + a] = g[d]
                    } else {
                        if (0 === n) throw new Error;
                        for (l = 0; l < n; l++) t[h + l] = g[d + l]
                    }
                } else
                    for (l = 0; l < n; l++) t[h + l] = g[d + l]
            }

            function d(i, n, o, a) {
                var l = 0;
                for (l = 0; l < a; l++) g[l] = t[o + l];
                var d = i + n - 1,
                    u = a - 1,
                    h = o + a - 1,
                    p = 0,
                    v = 0;
                if (t[h--] = t[d--], 0 != --n) {
                    if (1 === a) {
                        for (h -= n, d -= n, v = h + 1, p = d + 1, l = n - 1; l >= 0; l--) t[v + l] = t[p + l];
                        return void (t[h] = g[u])
                    }
                    for (var m = f; ;) {
                        var _ = 0,
                            y = 0,
                            x = !1;
                        do {
                            if (e(g[u], t[d]) < 0) {
                                if (t[h--] = t[d--], _++, y = 0, 0 == --n) {
                                    x = !0;
                                    break
                                }
                            } else if (t[h--] = g[u--], y++, _ = 0, 1 == --a) {
                                x = !0;
                                break
                            }
                        } while ((_ | y) < m);
                        if (x) break;
                        do {
                            if (0 != (_ = n - s(g[u], t, i, n, n - 1, e))) {
                                for (h -= _, d -= _, n -= _, v = h + 1, p = d + 1, l = _ - 1; l >= 0; l--) t[v + l] = t[p + l];
                                if (0 === n) {
                                    x = !0;
                                    break
                                }
                            }
                            if (t[h--] = g[u--], 1 == --a) {
                                x = !0;
                                break
                            }
                            if (0 != (y = a - r(t[d], g, 0, a, a - 1, e))) {
                                for (h -= y, u -= y, a -= y, v = h + 1, p = u + 1, l = 0; l < y; l++) t[v + l] = g[p + l];
                                if (a <= 1) {
                                    x = !0;
                                    break
                                }
                            }
                            if (t[h--] = t[d--], 0 == --n) {
                                x = !0;
                                break
                            }
                            m--
                        } while (_ >= c || y >= c);
                        if (x) break;
                        m < 0 && (m = 0), m += 2
                    }
                    if (f = m, f < 1 && (f = 1), 1 === a) {
                        for (h -= n, d -= n, v = h + 1, p = d + 1, l = n - 1; l >= 0; l--) t[v + l] = t[p + l];
                        t[h] = g[u]
                    } else {
                        if (0 === a) throw new Error;
                        for (p = h - (a - 1), l = 0; l < a; l++) t[p + l] = g[l]
                    }
                } else
                    for (p = h - (a - 1), l = 0; l < a; l++) t[p + l] = g[l]
            }

            var u, h, f = c,
                p = 0;
            t.length;
            var g = [];
            u = [], h = [], this.mergeRuns = n, this.forceMergeRuns = o, this.pushRun = i
        }

        function d(t, e, o, r) {
            o || (o = 0), r || (r = t.length);
            var s = r - o;
            if (!(s < 2)) {
                var d = 0;
                if (s < u) return d = n(t, o, r, e), void a(t, o, r, o + d, e);
                var c = new l(t, e),
                    h = i(s);
                do {
                    if ((d = n(t, o, r, e)) < h) {
                        var f = s;
                        f > h && (f = h), a(t, o, o + f, o + d, e), d = f
                    }
                    c.pushRun(o, d), c.mergeRuns(), s -= d, o += d
                } while (0 !== s);
                c.forceMergeRuns()
            }
        }

        var u = 32,
            c = 7;
        t.exports = d
    }, function (t, e) {
        var i = function (t) {
            this.colorStops = t || []
        };
        i.prototype = {
            constructor: i,
            addColorStop: function (t, e) {
                this.colorStops.push({
                    offset: t,
                    color: e
                })
            }
        };
        var n = i;
        t.exports = n
    }, function (t, e, i) {
        function n(t) {
            o.call(this, t)
        }

        var o = i(664),
            a = i(636),
            r = i(630),
            s = i(695);
        n.prototype = {
            constructor: n,
            type: "image",
            brush: function (t, e) {
                var i = this.style,
                    n = i.image;
                i.bind(t, this, e);
                var o = this._image = s.createOrUpdateImage(n, this._image, this, this.onload);
                if (o && s.isImageReady(o)) {
                    var a = i.x || 0,
                        r = i.y || 0,
                        l = i.width,
                        d = i.height,
                        u = o.width / o.height;
                    if (null == l && null != d ? l = d * u : null == d && null != l ? d = l / u : null == l && null == d && (l = o.width, d = o.height), this.setTransform(t), i.sWidth && i.sHeight) {
                        var c = i.sx || 0,
                            h = i.sy || 0;
                        t.drawImage(o, c, h, i.sWidth, i.sHeight, a, r, l, d)
                    } else if (i.sx && i.sy) {
                        var c = i.sx,
                            h = i.sy,
                            f = l - c,
                            p = d - h;
                        t.drawImage(o, c, h, f, p, a, r, l, d)
                    } else t.drawImage(o, a, r, l, d);
                    null != i.text && (this.restoreTransform(t), this.drawRectText(t, this.getBoundingRect()))
                }
            },
            getBoundingRect: function () {
                var t = this.style;
                return this._rect || (this._rect = new a(t.x || 0, t.y || 0, t.width || 0, t.height || 0)), this._rect
            }
        }, r.inherits(n, o);
        var l = n;
        t.exports = l
    }, function (t, e, i) {
        function n(t, e, i) {
            var n = null == e.x ? 0 : e.x,
                o = null == e.x2 ? 1 : e.x2,
                a = null == e.y ? 0 : e.y,
                r = null == e.y2 ? 0 : e.y2;
            return e.global || (n = n * i.width + i.x, o = o * i.width + i.x, a = a * i.height + i.y, r = r * i.height + i.y), n = isNaN(n) ? 0 : n, o = isNaN(o) ? 1 : o, a = isNaN(a) ? 0 : a, r = isNaN(r) ? 0 : r, t.createLinearGradient(n, a, o, r)
        }

        function o(t, e, i) {
            var n = i.width,
                o = i.height,
                a = Math.min(n, o),
                r = null == e.x ? .5 : e.x,
                s = null == e.y ? .5 : e.y,
                l = null == e.r ? .5 : e.r;
            return e.global || (r = r * n + i.x, s = s * o + i.y, l *= a), t.createRadialGradient(r, s, 0, r, s, l)
        }

        var a = i(723),
            r = i(665),
            s = r.ContextCachedBy,
            l = [
                ["shadowBlur", 0],
                ["shadowOffsetX", 0],
                ["shadowOffsetY", 0],
                ["shadowColor", "#000"],
                ["lineCap", "butt"],
                ["lineJoin", "miter"],
                ["miterLimit", 10]
            ],
            d = function (t) {
                this.extendFrom(t, !1)
            };
        d.prototype = {
            constructor: d,
            fill: "#000",
            stroke: null,
            opacity: 1,
            fillOpacity: null,
            strokeOpacity: null,
            lineDash: null,
            lineDashOffset: 0,
            shadowBlur: 0,
            shadowOffsetX: 0,
            shadowOffsetY: 0,
            lineWidth: 1,
            strokeNoScale: !1,
            text: null,
            font: null,
            textFont: null,
            fontStyle: null,
            fontWeight: null,
            fontSize: null,
            fontFamily: null,
            textTag: null,
            textFill: "#000",
            textStroke: null,
            textWidth: null,
            textHeight: null,
            textStrokeWidth: 0,
            textLineHeight: null,
            textPosition: "inside",
            textRect: null,
            textOffset: null,
            textAlign: null,
            textVerticalAlign: null,
            textDistance: 5,
            textShadowColor: "transparent",
            textShadowBlur: 0,
            textShadowOffsetX: 0,
            textShadowOffsetY: 0,
            textBoxShadowColor: "transparent",
            textBoxShadowBlur: 0,
            textBoxShadowOffsetX: 0,
            textBoxShadowOffsetY: 0,
            transformText: !1,
            textRotation: 0,
            textOrigin: null,
            textBackgroundColor: null,
            textBorderColor: null,
            textBorderWidth: 0,
            textBorderRadius: 0,
            textPadding: null,
            rich: null,
            truncate: null,
            blend: null,
            bind: function (t, e, i) {
                var n = this,
                    o = i && i.style,
                    r = !o || t.__attrCachedBy !== s.STYLE_BIND;
                t.__attrCachedBy = s.STYLE_BIND;
                for (var d = 0; d < l.length; d++) {
                    var u = l[d],
                        c = u[0];
                    (r || n[c] !== o[c]) && (t[c] = a(t, c, n[c] || u[1]))
                }
                if ((r || n.fill !== o.fill) && (t.fillStyle = n.fill), (r || n.stroke !== o.stroke) && (t.strokeStyle = n.stroke), (r || n.opacity !== o.opacity) && (t.globalAlpha = null == n.opacity ? 1 : n.opacity), (r || n.blend !== o.blend) && (t.globalCompositeOperation = n.blend || "source-over"), this.hasStroke()) {
                    var h = n.lineWidth;
                    t.lineWidth = h / (this.strokeNoScale && e && e.getLineScale ? e.getLineScale() : 1)
                }
            },
            hasFill: function () {
                var t = this.fill;
                return null != t && "none" !== t
            },
            hasStroke: function () {
                var t = this.stroke;
                return null != t && "none" !== t && this.lineWidth > 0
            },
            extendFrom: function (t, e) {
                if (t)
                    for (var i in t) !t.hasOwnProperty(i) || !0 !== e && (!1 === e ? this.hasOwnProperty(i) : null == t[i]) || (this[i] = t[i])
            },
            set: function (t, e) {
                "string" == typeof t ? this[t] = e : this.extendFrom(t, !0)
            },
            clone: function () {
                var t = new this.constructor;
                return t.extendFrom(this, !0), t
            },
            getGradient: function (t, e, i) {
                for (var a = "radial" === e.type ? o : n, r = a(t, e, i), s = e.colorStops, l = 0; l < s.length; l++) r.addColorStop(s[l].offset, s[l].color);
                return r
            }
        };
        for (var u = d.prototype, c = 0; c < l.length; c++) {
            var h = l[c];
            h[0] in u || (u[h[0]] = h[1])
        }
        d.getGradient = u.getGradient;
        var f = d;
        t.exports = f
    }, function (t, e, i) {
        function n(t) {
            if ("string" == typeof t) {
                var e = l.get(t);
                return e && e.image
            }
            return t
        }

        function o(t, e, i, n, o) {
            if (t) {
                if ("string" == typeof t) {
                    if (e && e.__zrImageSrc === t || !i) return e;
                    var s = l.get(t),
                        d = {
                            hostEl: i,
                            cb: n,
                            cbPayload: o
                        };
                    return s ? (e = s.image, !r(e) && s.pending.push(d)) : (e = new Image, e.onload = e.onerror = a, l.put(t, e.__cachedImgObj = {
                        image: e,
                        pending: [d]
                    }), e.src = e.__zrImageSrc = t), e
                }
                return t
            }
            return e
        }

        function a() {
            var t = this.__cachedImgObj;
            this.onload = this.onerror = this.__cachedImgObj = null;
            for (var e = 0; e < t.pending.length; e++) {
                var i = t.pending[e],
                    n = i.cb;
                n && n(this, i.cbPayload), i.hostEl.dirty()
            }
            t.pending.length = 0
        }

        function r(t) {
            return t && t.width && t.height
        }

        var s = i(716),
            l = new s(50);
        e.findExistImage = n, e.createOrUpdateImage = o, e.isImageReady = r
    }, function (t, e) {
        function i(t, e, i) {
            if (e) {
                var n = e.x1,
                    r = e.x2,
                    s = e.y1,
                    l = e.y2;
                t.x1 = n, t.x2 = r, t.y1 = s, t.y2 = l;
                var d = i && i.lineWidth;
                d && (a(2 * n) === a(2 * r) && (t.x1 = t.x2 = o(n, d, !0)), a(2 * s) === a(2 * l) && (t.y1 = t.y2 = o(s, d, !0)))
            }
        }

        function n(t, e, i) {
            if (e) {
                var n = e.x,
                    a = e.y,
                    r = e.width,
                    s = e.height;
                t.x = n, t.y = a, t.width = r, t.height = s;
                var l = i && i.lineWidth;
                l && (t.x = o(n, l, !0), t.y = o(a, l, !0), t.width = Math.max(o(n + r, l, !1) - t.x, 0 === r ? 0 : 1), t.height = Math.max(o(a + s, l, !1) - t.y, 0 === s ? 0 : 1))
            }
        }

        function o(t, e, i) {
            if (!e) return t;
            var n = a(2 * t);
            return (n + a(e)) % 2 == 0 ? n / 2 : (n + (i ? 1 : -1)) / 2
        }

        var a = Math.round;
        e.subPixelOptimizeLine = i, e.subPixelOptimizeRect = n, e.subPixelOptimize = o
    }, function (t, e, i) {
        function n() {
            this._coordinateSystems = []
        }

        var o = i(630),
            a = {};
        n.prototype = {
            constructor: n,
            create: function (t, e) {
                var i = [];
                o.each(a, function (n, o) {
                    var a = n.create(t, e);
                    i = i.concat(a || [])
                }), this._coordinateSystems = i
            },
            update: function (t, e) {
                o.each(this._coordinateSystems, function (i) {
                    i.update && i.update(t, e)
                })
            },
            getCoordinateSystems: function () {
                return this._coordinateSystems.slice()
            }
        }, n.register = function (t, e) {
            a[t] = e
        }, n.get = function (t) {
            return a[t]
        };
        var r = n;
        t.exports = r
    }, function (t, e, i) {
        function n(t) {
            o.each(a, function (e) {
                this[e] = o.bind(t[e], t)
            }, this)
        }

        var o = i(630),
            a = ["getDom", "getZr", "getWidth", "getHeight", "getDevicePixelRatio", "dispatchAction", "isDisposed", "on", "off", "getDataURL", "getConnectedDataURL", "getModel", "getOption", "getViewOfComponentModel", "getViewOfSeriesModel"],
            r = n;
        t.exports = r
    }, function (t, e, i) {
        function n() {
            var t = a();
            return function (e) {
                var i = t(e),
                    n = e.pipelineContext,
                    o = i.large,
                    a = i.progressiveRender,
                    r = i.large = n && n.large,
                    s = i.progressiveRender = n && n.progressiveRender;
                return !!(o ^ r || a ^ s) && "reset"
            }
        }

        var o = i(631),
            a = o.makeInner;
        t.exports = n
    }, function (t, e, i) {
        function n(t, e) {
            var i, n, a, r = t.type,
                s = e.getMin(),
                l = e.getMax(),
                d = t.getExtent();
            "ordinal" === r ? i = e.getCategories().length : (n = e.get("boundaryGap"), g.isArray(n) || (n = [n || 0, n || 0]), "boolean" == typeof n[0] && (n = [0, 0]), n[0] = y.parsePercent(n[0], 1), n[1] = y.parsePercent(n[1], 1), a = d[1] - d[0] || Math.abs(d[0])), "dataMin" === s ? s = d[0] : "function" == typeof s && (s = s({
                min: d[0],
                max: d[1]
            })), "dataMax" === l ? l = d[1] : "function" == typeof l && (l = l({
                min: d[0],
                max: d[1]
            }));
            var u = null != s,
                c = null != l;
            null == s && (s = "ordinal" === r ? i ? 0 : NaN : d[0] - n[0] * a), null == l && (l = "ordinal" === r ? i ? i - 1 : NaN : d[1] + n[1] * a), (null == s || !isFinite(s)) && (s = NaN), (null == l || !isFinite(l)) && (l = NaN), t.setBlank(g.eqNaN(s) || g.eqNaN(l) || "ordinal" === r && !t.getOrdinalMeta().categories.length), e.getNeedCrossZero() && (s > 0 && l > 0 && !u && (s = 0), s < 0 && l < 0 && !c && (l = 0));
            var h = e.ecModel;
            if (h && "time" === r) {
                var f, p = b("bar", h);
                if (g.each(p, function (t) {
                    f |= t.getBaseAxis() === e.axis
                }), f) {
                    var v = w(p),
                        m = o(s, l, e, v);
                    s = m.min, l = m.max
                }
            }
            return {
                extent: [s, l],
                fixMin: u,
                fixMax: c
            }
        }

        function o(t, e, i, n) {
            var o = i.axis.getExtent(),
                a = o[1] - o[0],
                r = S(n, i.axis);
            if (void 0 === r) return {
                min: t,
                max: e
            };
            var s = 1 / 0;
            g.each(r, function (t) {
                s = Math.min(t.offset, s)
            });
            var l = -1 / 0;
            g.each(r, function (t) {
                l = Math.max(t.offset + t.width, l)
            }), s = Math.abs(s), l = Math.abs(l);
            var d = s + l,
                u = e - t,
                c = 1 - (s + l) / a,
                h = u / c - u;
            return e += h * (l / d), t -= h * (s / d), {
                min: t,
                max: e
            }
        }

        function a(t, e) {
            var i = n(t, e),
                o = i.extent,
                a = e.get("splitNumber");
            "log" === t.type && (t.base = e.get("logBase"));
            var r = t.type;
            t.setExtent(o[0], o[1]), t.niceExtent({
                splitNumber: a,
                fixMin: i.fixMin,
                fixMax: i.fixMax,
                minInterval: "interval" === r || "time" === r ? e.get("minInterval") : null,
                maxInterval: "interval" === r || "time" === r ? e.get("maxInterval") : null
            });
            var s = e.get("interval");
            null != s && t.setInterval && t.setInterval(s)
        }

        function r(t, e) {
            if (e = e || t.get("type")) switch (e) {
                case "category":
                    return new v(t.getOrdinalMeta ? t.getOrdinalMeta() : t.getCategories(), [1 / 0, -1 / 0]);
                case "value":
                    return new m;
                default:
                    return (_.getClass(e) || m).create(t)
            }
        }

        function s(t) {
            var e = t.scale.getExtent(),
                i = e[0],
                n = e[1];
            return !(i > 0 && n > 0 || i < 0 && n < 0)
        }

        function l(t) {
            var e = t.getLabelModel().get("formatter"),
                i = "category" === t.type ? t.scale.getExtent()[0] : null;
            return "string" == typeof e ? e = function (e) {
                return function (i) {
                    return i = t.scale.getLabel(i), e.replace("{value}", null != i ? i : "")
                }
            }(e) : "function" == typeof e ? function (n, o) {
                return null != i && (o = n - i), e(d(t, n), o)
            } : function (e) {
                return t.scale.getLabel(e)
            }
        }

        function d(t, e) {
            return "category" === t.type ? t.scale.getLabel(e) : e
        }

        function u(t) {
            var e = t.model,
                i = t.scale;
            if (e.get("axisLabel.show") && !i.isBlank()) {
                var n, o, a = "category" === t.type,
                    r = i.getExtent();
                a ? o = i.count() : (n = i.getTicks(), o = n.length);
                var s, d = t.getLabelModel(),
                    u = l(t),
                    h = 1;
                o > 40 && (h = Math.ceil(o / 40));
                for (var f = 0; f < o; f += h) {
                    var p = n ? n[f] : r[0] + f,
                        g = u(p),
                        v = d.getTextRect(g),
                        m = c(v, d.get("rotate") || 0);
                    s ? s.union(m) : s = m
                }
                return s
            }
        }

        function c(t, e) {
            var i = e * Math.PI / 180,
                n = t.plain(),
                o = n.width,
                a = n.height,
                r = o * Math.abs(Math.cos(i)) + Math.abs(a * Math.sin(i)),
                s = o * Math.abs(Math.sin(i)) + Math.abs(a * Math.cos(i));
            return new C(n.x, n.y, r, s)
        }

        function h(t) {
            var e = t.get("interval");
            return null == e ? "auto" : e
        }

        function f(t) {
            return "category" === t.type && 0 === h(t.getLabelModel())
        }

        var p = i(634),
            g = (p.__DEV__, i(630)),
            v = i(816),
            m = i(680),
            _ = i(659),
            y = i(632),
            x = i(799),
            b = x.prepareLayoutBarSeries,
            w = x.makeColumnLayout,
            S = x.retrieveColumnLayout,
            C = i(636);
        i(817), i(815), e.getScaleExtent = n, e.niceScaleExtent = a, e.createScaleByModel = r, e.ifAxisCrossZero = s, e.makeLabelFormatter = l, e.getAxisRawValue = d, e.estimateLabelUnionRect = u, e.getOptionCategoryInterval = h, e.shouldShowAllLabels = f
    }, function (t, e, i) {
        function n(t) {
            null != t && o.extend(this, t), this.otherDims = {}
        }

        var o = i(630),
            a = n;
        t.exports = a
    }, function (t, e, i) {
        function n(t, e, i) {
            function n(t, e, i) {
                null != b.get(e) ? t.otherDims[e] = i : (t.coordDim = e, t.coordDimIndex = i, v.set(e, !0))
            }

            y.isInstance(e) || (e = y.seriesDataToSource(e)), i = i || {}, t = (t || []).slice();
            for (var r = (i.dimsDef || []).slice(), p = s(), v = s(), x = [], S = o(e, t, r, i.dimCount), C = 0; C < S; C++) {
                var k = r[C] = c({}, h(r[C]) ? r[C] : {
                        name: r[C]
                    }),
                    I = k.name,
                    T = x[C] = new w;
                null != I && null == p.get(I) && (T.name = T.displayName = I, p.set(I, C)), null != k.type && (T.type = k.type), null != k.displayName && (T.displayName = k.displayName)
            }
            var D = i.encodeDef;
            !D && i.encodeDefaulter && (D = i.encodeDefaulter(e, S)), D = s(D), D.each(function (t, e) {
                if (t = g(t).slice(), 1 === t.length && !d(t[0]) && t[0] < 0) return void D.set(e, !1);
                var i = D.set(e, []);
                l(t, function (t, o) {
                    d(t) && (t = p.get(t)), null != t && t < S && (i[o] = t, n(x[t], e, o))
                })
            });
            var M = 0;
            l(t, function (t, e) {
                var i, t, o, a;
                if (d(t)) i = t, t = {};
                else {
                    i = t.name;
                    var r = t.ordinalMeta;
                    t.ordinalMeta = null, t = f(t), t.ordinalMeta = r, o = t.dimsDef, a = t.otherDims, t.name = t.coordDim = t.coordDimIndex = t.dimsDef = t.otherDims = null
                }
                var s = D.get(i);
                if (!1 !== s) {
                    var s = g(s);
                    if (!s.length)
                        for (var c = 0; c < (o && o.length || 1); c++) {
                            for (; M < x.length && null != x[M].coordDim;) M++;
                            M < x.length && s.push(M++)
                        }
                    l(s, function (e, r) {
                        var s = x[e];
                        if (n(u(s, t), i, r), null == s.name && o) {
                            var l = o[r];
                            !h(l) && (l = {
                                name: l
                            }), s.name = s.displayName = l.name, s.defaultTooltip = l.defaultTooltip
                        }
                        a && u(s.otherDims, a)
                    })
                }
            });
            var A = i.generateCoord,
                L = i.generateCoordCount,
                P = null != L;
            L = A ? L || 1 : 0;
            for (var O = A || "value", R = 0; R < S; R++) {
                var T = x[R] = x[R] || new w;
                null == T.coordDim && (T.coordDim = a(O, v, P), T.coordDimIndex = 0, (!A || L <= 0) && (T.isExtraCoord = !0), L--), null == T.name && (T.name = a(T.coordDim, p)), null != T.type || m(e, R, T.name) !== _.Must && (!T.isExtraCoord || null == T.otherDims.itemName && null == T.otherDims.seriesName) || (T.type = "ordinal")
            }
            return x
        }

        function o(t, e, i, n) {
            var o = Math.max(t.dimensionsDetectCount || 1, e.length, i.length, n || 0);
            return l(e, function (t) {
                var e = t.dimsDef;
                e && (o = Math.max(o, e.length))
            }), o
        }

        function a(t, e, i) {
            if (i || null != e.get(t)) {
                for (var n = 0; null != e.get(t + n);) n++;
                t += n
            }
            return e.set(t, !0), t
        }

        var r = i(630),
            s = r.createHashMap,
            l = r.each,
            d = r.isString,
            u = r.defaults,
            c = r.extend,
            h = r.isObject,
            f = r.clone,
            p = i(631),
            g = p.normalizeToArray,
            v = i(644),
            m = v.guessOrdinal,
            _ = v.BE_ORDINAL,
            y = i(649),
            x = i(678),
            b = x.OTHER_DIMENSIONS,
            w = i(701),
            S = n;
        t.exports = S
    }, function (t, e) {
        var i = {
            legend: {
                selector: {
                    all: "全选",
                    inverse: "反选"
                }
            },
            toolbox: {
                brush: {
                    title: {
                        rect: "矩形选择",
                        polygon: "圈选",
                        lineX: "横向选择",
                        lineY: "纵向选择",
                        keep: "保持选择",
                        clear: "清除选择"
                    }
                },
                dataView: {
                    title: "数据视图",
                    lang: ["数据视图", "关闭", "刷新"]
                },
                dataZoom: {
                    title: {
                        zoom: "区域缩放",
                        back: "区域缩放还原"
                    }
                },
                magicType: {
                    title: {
                        line: "切换为折线图",
                        bar: "切换为柱状图",
                        stack: "切换为堆叠",
                        tiled: "切换为平铺"
                    }
                },
                restore: {
                    title: "还原"
                },
                saveAsImage: {
                    title: "保存为图片",
                    lang: ["右键另存为图片"]
                }
            },
            series: {
                typeNames: {
                    pie: "饼图",
                    bar: "柱状图",
                    line: "折线图",
                    scatter: "散点图",
                    effectScatter: "涟漪散点图",
                    radar: "雷达图",
                    tree: "树图",
                    treemap: "矩形树图",
                    boxplot: "箱型图",
                    candlestick: "K线图",
                    k: "K线图",
                    heatmap: "热力图",
                    map: "地图",
                    parallel: "平行坐标图",
                    lines: "线图",
                    graph: "关系图",
                    sankey: "桑基图",
                    funnel: "漏斗图",
                    gauge: "仪表盘图",
                    pictorialBar: "象形柱图",
                    themeRiver: "主题河流图",
                    sunburst: "旭日图"
                }
            },
            aria: {
                general: {
                    withTitle: "这是一个关于“{title}”的图表。",
                    withoutTitle: "这是一个图表，"
                },
                series: {
                    single: {
                        prefix: "",
                        withName: "图表类型是{seriesType}，表示{seriesName}。",
                        withoutName: "图表类型是{seriesType}。"
                    },
                    multiple: {
                        prefix: "它由{seriesCount}个图表系列组成。",
                        withName: "第{seriesId}个系列是一个表示{seriesName}的{seriesType}，",
                        withoutName: "第{seriesId}个系列是一个{seriesType}，",
                        separator: {
                            middle: "；",
                            end: "。"
                        }
                    }
                },
                data: {
                    allData: "其数据是——",
                    partialData: "其中，前{displayCnt}项是——",
                    withName: "{name}的数据是{value}",
                    withoutName: "{value}",
                    separator: {
                        middle: "，",
                        end: ""
                    }
                }
            }
        };
        t.exports = i
    }, function (t, e, i) {
        function n(t, e) {
            if (e) {
                var i = e.seiresIndex,
                    n = e.seriesId,
                    o = e.seriesName;
                return null != i && t.componentIndex !== i || null != n && t.id !== n || null != o && t.name !== o
            }
        }

        function o(t, e) {
            var i = t.color && !t.colorLayer;
            h(e, function (e, n) {
                "colorLayer" === n && i || T.hasClass(n) || ("object" == typeof e ? t[n] = t[n] ? w(t[n], e, !1) : b(e) : null == t[n] && (t[n] = e))
            })
        }

        function a(t) {
            t = t, this.option = {}, this.option[P] = 1, this._componentsMap = y({
                series: []
            }), this._seriesIndices, this._seriesIndicesMap, o(t, this._theme.option), w(t, D, !1), this.mergeOption(t)
        }

        function r(t, e) {
            g(e) || (e = e ? [e] : []);
            var i = {};
            return h(e, function (e) {
                i[e] = (t.get(e) || []).slice()
            }), i
        }

        function s(t, e, i) {
            return e.type ? e.type : i ? i.subType : T.determineSubType(t, e)
        }

        function l(t, e) {
            t._seriesIndicesMap = y(t._seriesIndices = p(e, function (t) {
                return t.componentIndex
            }) || [])
        }

        function d(t, e) {
            return e.hasOwnProperty("subType") ? f(t, function (t) {
                return t.subType === e.subType
            }) : t
        }

        var u = i(634),
            c = (u.__DEV__, i(630)),
            h = c.each,
            f = c.filter,
            p = c.map,
            g = c.isArray,
            v = c.indexOf,
            m = c.isObject,
            _ = c.isString,
            y = c.createHashMap,
            x = c.assert,
            b = c.clone,
            w = c.merge,
            S = c.extend,
            C = c.mixin,
            k = i(631),
            I = i(646),
            T = i(645),
            D = i(803),
            M = i(705),
            A = i(644),
            L = A.resetSourceDefaulter,
            P = "\0_ec_inner",
            O = I.extend({
                init: function (t, e, i, n) {
                    i = i || {}, this.option = null, this._theme = new I(i), this._optionManager = n
                },
                setOption: function (t, e) {
                    x(!(P in t), "please use chart.getOption()"), this._optionManager.setOption(t, e), this.resetOption(null)
                },
                resetOption: function (t) {
                    var e = !1,
                        i = this._optionManager;
                    if (!t || "recreate" === t) {
                        var n = i.mountOption("recreate" === t);
                        this.option && "recreate" !== t ? (this.restoreData(), this.mergeOption(n)) : a.call(this, n), e = !0
                    }
                    if ("timeline" !== t && "media" !== t || this.restoreData(), !t || "recreate" === t || "timeline" === t) {
                        var o = i.getTimelineOption(this);
                        o && (this.mergeOption(o), e = !0)
                    }
                    if (!t || "recreate" === t || "media" === t) {
                        var r = i.getMediaOption(this, this._api);
                        r.length && h(r, function (t) {
                            this.mergeOption(t, e = !0)
                        }, this)
                    }
                    return e
                },
                mergeOption: function (t) {
                    function e(e, o) {
                        var a = k.normalizeToArray(t[e]),
                            d = k.mappingToExists(n.get(e), a);
                        k.makeIdAndName(d), h(d, function (t, i) {
                            var n = t.option;
                            m(n) && (t.keyInfo.mainType = e, t.keyInfo.subType = s(e, n, t.exist))
                        });
                        var u = r(n, o);
                        i[e] = [], n.set(e, []), h(d, function (t, o) {
                            var a = t.exist,
                                r = t.option;
                            if (x(m(r) || a, "Empty component definition"), r) {
                                var s = T.getClass(e, t.keyInfo.subType, !0);
                                if (a && a.constructor === s) a.name = t.keyInfo.name, a.mergeOption(r, this), a.optionUpdated(r, !1);
                                else {
                                    var l = S({
                                        dependentModels: u,
                                        componentIndex: o
                                    }, t.keyInfo);
                                    a = new s(r, this, this, l), S(a, l), a.init(r, this, this, l), a.optionUpdated(null, !0)
                                }
                            } else a.mergeOption({}, this), a.optionUpdated({}, !1);
                            n.get(e)[o] = a, i[e][o] = a.option
                        }, this), "series" === e && l(this, n.get("series"))
                    }

                    var i = this.option,
                        n = this._componentsMap,
                        o = [];
                    L(this), h(t, function (t, e) {
                        null != t && (T.hasClass(e) ? e && o.push(e) : i[e] = null == i[e] ? b(t) : w(i[e], t, !0))
                    }), T.topologicalTravel(o, T.getAllClassMainTypes(), e, this), this._seriesIndicesMap = y(this._seriesIndices = this._seriesIndices || [])
                },
                getOption: function () {
                    var t = b(this.option);
                    return h(t, function (e, i) {
                        if (T.hasClass(i)) {
                            for (var e = k.normalizeToArray(e), n = e.length - 1; n >= 0; n--) k.isIdInner(e[n]) && e.splice(n, 1);
                            t[i] = e
                        }
                    }), delete t[P], t
                },
                getTheme: function () {
                    return this._theme
                },
                getComponent: function (t, e) {
                    var i = this._componentsMap.get(t);
                    if (i) return i[e || 0]
                },
                queryComponents: function (t) {
                    var e = t.mainType;
                    if (!e) return [];
                    var i = t.index,
                        n = t.id,
                        o = t.name,
                        a = this._componentsMap.get(e);
                    if (!a || !a.length) return [];
                    var r;
                    if (null != i) g(i) || (i = [i]), r = f(p(i, function (t) {
                        return a[t]
                    }), function (t) {
                        return !!t
                    });
                    else if (null != n) {
                        var s = g(n);
                        r = f(a, function (t) {
                            return s && v(n, t.id) >= 0 || !s && t.id === n
                        })
                    } else if (null != o) {
                        var l = g(o);
                        r = f(a, function (t) {
                            return l && v(o, t.name) >= 0 || !l && t.name === o
                        })
                    } else r = a.slice();
                    return d(r, t)
                },
                findComponents: function (t) {
                    var e = t.query,
                        i = t.mainType,
                        n = function (t) {
                            var e = i + "Index",
                                n = i + "Id",
                                o = i + "Name";
                            return !t || null == t[e] && null == t[n] && null == t[o] ? null : {
                                mainType: i,
                                index: t[e],
                                id: t[n],
                                name: t[o]
                            }
                        }(e),
                        o = n ? this.queryComponents(n) : this._componentsMap.get(i);
                    return function (e) {
                        return t.filter ? f(e, t.filter) : e
                    }(d(o, t))
                },
                eachComponent: function (t, e, i) {
                    var n = this._componentsMap;
                    if ("function" == typeof t) i = e, e = t, n.each(function (t, n) {
                        h(t, function (t, o) {
                            e.call(i, n, t, o)
                        })
                    });
                    else if (_(t)) h(n.get(t), e, i);
                    else if (m(t)) {
                        var o = this.findComponents(t);
                        h(o, e, i)
                    }
                },
                getSeriesByName: function (t) {
                    var e = this._componentsMap.get("series");
                    return f(e, function (e) {
                        return e.name === t
                    })
                },
                getSeriesByIndex: function (t) {
                    return this._componentsMap.get("series")[t]
                },
                getSeriesByType: function (t) {
                    var e = this._componentsMap.get("series");
                    return f(e, function (e) {
                        return e.subType === t
                    })
                },
                getSeries: function () {
                    return this._componentsMap.get("series").slice()
                },
                getSeriesCount: function () {
                    return this._componentsMap.get("series").length
                },
                eachSeries: function (t, e) {
                    h(this._seriesIndices, function (i) {
                        var n = this._componentsMap.get("series")[i];
                        t.call(e, n, i)
                    }, this)
                },
                eachRawSeries: function (t, e) {
                    h(this._componentsMap.get("series"), t, e)
                },
                eachSeriesByType: function (t, e, i) {
                    h(this._seriesIndices, function (n) {
                        var o = this._componentsMap.get("series")[n];
                        o.subType === t && e.call(i, o, n)
                    }, this)
                },
                eachRawSeriesByType: function (t, e, i) {
                    return h(this.getSeriesByType(t), e, i)
                },
                isSeriesFiltered: function (t) {
                    return null == this._seriesIndicesMap.get(t.componentIndex)
                },
                getCurrentSeriesIndices: function () {
                    return (this._seriesIndices || []).slice()
                },
                filterSeries: function (t, e) {
                    l(this, f(this._componentsMap.get("series"), t, e))
                },
                restoreData: function (t) {
                    var e = this._componentsMap;
                    l(this, e.get("series"));
                    var i = [];
                    e.each(function (t, e) {
                        i.push(e)
                    }), T.topologicalTravel(i, T.getAllClassMainTypes(), function (i, o) {
                        h(e.get(i), function (e) {
                            ("series" !== i || !n(e, t)) && e.restoreData()
                        })
                    })
                }
            });
        C(O, M);
        var R = O;
        t.exports = R
    }, function (t, e, i) {
        function n(t, e) {
            for (var i = t.length, n = 0; n < i; n++)
                if (t[n].length > e) return t[n];
            return t[i - 1]
        }

        var o = i(631),
            a = o.makeInner,
            r = o.normalizeToArray,
            s = a(),
            l = {
                clearColorPalette: function () {
                    s(this).colorIdx = 0, s(this).colorNameMap = {}
                },
                getColorFromPalette: function (t, e, i) {
                    e = e || this;
                    var o = s(e),
                        a = o.colorIdx || 0,
                        l = o.colorNameMap = o.colorNameMap || {};
                    if (l.hasOwnProperty(t)) return l[t];
                    var d = r(this.get("color", !0)),
                        u = this.get("colorLayer", !0),
                        c = null != i && u ? n(u, i) : d;
                    if ((c = c || d) && c.length) {
                        var h = c[a];
                        return t && (l[t] = h), o.colorIdx = (a + 1) % c.length, h
                    }
                }
            };
        t.exports = l
    }, function (t, e, i) {
        function n(t, e, i, n) {
            var a = {},
                d = t[1] - t[0],
                u = a.interval = s.nice(d / e, !0);
            null != i && u < i && (u = a.interval = i), null != n && u > n && (u = a.interval = n);
            var c = a.intervalPrecision = o(u);
            return r(a.niceTickExtent = [l(Math.ceil(t[0] / u) * u, c), l(Math.floor(t[1] / u) * u, c)], t), a
        }

        function o(t) {
            return s.getPrecisionSafe(t) + 2
        }

        function a(t, e, i) {
            t[e] = Math.max(Math.min(t[e], i[1]), i[0])
        }

        function r(t, e) {
            !isFinite(t[0]) && (t[0] = e[0]), !isFinite(t[1]) && (t[1] = e[1]), a(t, 0, e), a(t, 1, e), t[0] > t[1] && (t[0] = t[1])
        }

        var s = i(632),
            l = s.round;
        e.intervalScaleNiceTicks = n, e.getIntervalPrecision = o, e.fixExtent = r
    }, function (t, e, i) {
        function n(t, e) {
            if ("image" !== this.type) {
                var i = this.style,
                    n = this.shape;
                n && "line" === n.symbolType ? i.stroke = t : this.__isEmptyBrush ? (i.stroke = t, i.fill = e || "#fff") : (i.fill && (i.fill = t), i.stroke && (i.stroke = t)), this.dirty(!1)
            }
        }

        function o(t, e, i, o, a, l, d) {
            var u = 0 === t.indexOf("empty");
            u && (t = t.substr(5, 1).toLowerCase() + t.substr(6));
            var c;
            return c = 0 === t.indexOf("image://") ? r.makeImage(t.slice(8), new s(e, i, o, a), d ? "center" : "cover") : 0 === t.indexOf("path://") ? r.makePath(t.slice(7), {}, new s(e, i, o, a), d ? "center" : "cover") : new m({
                shape: {
                    symbolType: t,
                    x: e,
                    y: i,
                    width: o,
                    height: a
                }
            }), c.__isEmptyBrush = u, c.setColor = n, c.setColor(l), c
        }

        var a = i(630),
            r = i(638),
            s = i(636),
            l = i(640),
            d = l.calculateTextPosition,
            u = r.extendShape({
                type: "triangle",
                shape: {
                    cx: 0,
                    cy: 0,
                    width: 0,
                    height: 0
                },
                buildPath: function (t, e) {
                    var i = e.cx,
                        n = e.cy,
                        o = e.width / 2,
                        a = e.height / 2;
                    t.moveTo(i, n - a), t.lineTo(i + o, n + a), t.lineTo(i - o, n + a), t.closePath()
                }
            }),
            c = r.extendShape({
                type: "diamond",
                shape: {
                    cx: 0,
                    cy: 0,
                    width: 0,
                    height: 0
                },
                buildPath: function (t, e) {
                    var i = e.cx,
                        n = e.cy,
                        o = e.width / 2,
                        a = e.height / 2;
                    t.moveTo(i, n - a), t.lineTo(i + o, n), t.lineTo(i, n + a), t.lineTo(i - o, n), t.closePath()
                }
            }),
            h = r.extendShape({
                type: "pin",
                shape: {
                    x: 0,
                    y: 0,
                    width: 0,
                    height: 0
                },
                buildPath: function (t, e) {
                    var i = e.x,
                        n = e.y,
                        o = e.width / 5 * 3,
                        a = Math.max(o, e.height),
                        r = o / 2,
                        s = r * r / (a - r),
                        l = n - a + r + s,
                        d = Math.asin(s / r),
                        u = Math.cos(d) * r,
                        c = Math.sin(d),
                        h = Math.cos(d),
                        f = .6 * r,
                        p = .7 * r;
                    t.moveTo(i - u, l + s), t.arc(i, l, r, Math.PI - d, 2 * Math.PI + d), t.bezierCurveTo(i + u - c * f, l + s + h * f, i, n - p, i, n), t.bezierCurveTo(i, n - p, i - u + c * f, l + s + h * f, i - u, l + s), t.closePath()
                }
            }),
            f = r.extendShape({
                type: "arrow",
                shape: {
                    x: 0,
                    y: 0,
                    width: 0,
                    height: 0
                },
                buildPath: function (t, e) {
                    var i = e.height,
                        n = e.width,
                        o = e.x,
                        a = e.y,
                        r = n / 3 * 2;
                    t.moveTo(o, a), t.lineTo(o + r, a + i), t.lineTo(o, a + i / 4 * 3), t.lineTo(o - r, a + i), t.lineTo(o, a), t.closePath()
                }
            }),
            p = {
                line: r.Line,
                rect: r.Rect,
                roundRect: r.Rect,
                square: r.Rect,
                circle: r.Circle,
                diamond: c,
                pin: h,
                arrow: f,
                triangle: u
            },
            g = {
                line: function (t, e, i, n, o) {
                    o.x1 = t, o.y1 = e + n / 2, o.x2 = t + i, o.y2 = e + n / 2
                },
                rect: function (t, e, i, n, o) {
                    o.x = t, o.y = e, o.width = i, o.height = n
                },
                roundRect: function (t, e, i, n, o) {
                    o.x = t, o.y = e, o.width = i, o.height = n, o.r = Math.min(i, n) / 4
                },
                square: function (t, e, i, n, o) {
                    var a = Math.min(i, n);
                    o.x = t, o.y = e, o.width = a, o.height = a
                },
                circle: function (t, e, i, n, o) {
                    o.cx = t + i / 2, o.cy = e + n / 2, o.r = Math.min(i, n) / 2
                },
                diamond: function (t, e, i, n, o) {
                    o.cx = t + i / 2, o.cy = e + n / 2, o.width = i, o.height = n
                },
                pin: function (t, e, i, n, o) {
                    o.x = t + i / 2, o.y = e + n / 2, o.width = i, o.height = n
                },
                arrow: function (t, e, i, n, o) {
                    o.x = t + i / 2, o.y = e + n / 2, o.width = i, o.height = n
                },
                triangle: function (t, e, i, n, o) {
                    o.cx = t + i / 2, o.cy = e + n / 2, o.width = i, o.height = n
                }
            },
            v = {};
        a.each(p, function (t, e) {
            v[e] = new t
        });
        var m = r.extendShape({
            type: "symbol",
            shape: {
                symbolType: "",
                x: 0,
                y: 0,
                width: 0,
                height: 0
            },
            calculateTextPosition: function (t, e, i) {
                var n = d(t, e, i),
                    o = this.shape;
                return o && "pin" === o.symbolType && "inside" === e.textPosition && (n.y = i.y + .4 * i.height), n
            },
            buildPath: function (t, e, i) {
                var n = e.symbolType;
                if ("none" !== n) {
                    var o = v[n];
                    o || (n = "rect", o = v[n]), g[n](e.x, e.y, e.width, e.height, o.shape), o.buildPath(t, o.shape, i)
                }
            }
        });
        e.createSymbol = o
    }, function (t, e) {
        function i(t, e, i) {
            function n() {
                u = (new Date).getTime(), c = null, t.apply(r, s || [])
            }

            var o, a, r, s, l, d = 0,
                u = 0,
                c = null;
            e = e || 0;
            var h = function () {
                o = (new Date).getTime(), r = this, s = arguments;
                var t = l || e,
                    h = l || i;
                l = null, a = o - (h ? d : u) - t, clearTimeout(c), h ? c = setTimeout(n, t) : a >= 0 ? n() : c = setTimeout(n, -a), d = o
            };
            return h.clear = function () {
                c && (clearTimeout(c), c = null)
            }, h.debounceNextCall = function (t) {
                l = t
            }, h
        }

        function n(t, e, n, o) {
            var l = t[e];
            if (l) {
                var d = l[a] || l,
                    u = l[s];
                if (l[r] !== n || u !== o) {
                    if (null == n || !o) return t[e] = d;
                    l = t[e] = i(d, n, "debounce" === o), l[a] = d, l[s] = o, l[r] = n
                }
                return l
            }
        }

        function o(t, e) {
            var i = t[e];
            i && i[a] && (t[e] = i[a])
        }

        var a = "\0__throttleOriginMethod",
            r = "\0__throttleRate",
            s = "\0__throttleType";
        e.throttle = i, e.createOrUpdate = n, e.clear = o
    }, function (t, e, i) {
        function n() {
            this.group = new u, this.uid = c.getUID("viewChart"), this.renderTask = v({
                plan: r,
                reset: s
            }), this.renderTask.context = {
                view: this
            }
        }

        function o(t, e, i) {
            if (t && (t.trigger(e, i), t.isGroup && !p.isHighDownDispatcher(t)))
                for (var n = 0, a = t.childCount(); n < a; n++) o(t.childAt(n), e, i)
        }

        function a(t, e, i) {
            var n = f.queryDataIndex(t, e),
                a = e && null != e.highlightKey ? p.getHighlightDigit(e.highlightKey) : null;
            null != n ? d(f.normalizeToArray(n), function (e) {
                o(t.getItemGraphicEl(e), i, a)
            }) : t.eachItemGraphicEl(function (t) {
                o(t, i, a)
            })
        }

        function r(t) {
            return y(t.model)
        }

        function s(t) {
            var e = t.model,
                i = t.ecModel,
                n = t.api,
                o = t.payload,
                a = e.pipelineContext.progressiveRender,
                r = t.view,
                s = o && _(o).updateMethod,
                l = a ? "incrementalPrepareRender" : s && r[s] ? s : "render";
            return "render" !== l && r[l](e, i, n, o), b[l]
        }

        var l = i(630),
            d = l.each,
            u = i(656),
            c = i(660),
            h = i(641),
            f = i(631),
            p = i(638),
            g = i(681),
            v = g.createTask,
            m = i(699),
            _ = f.makeInner(),
            y = m();
        n.prototype = {
            type: "chart",
            init: function (t, e) {
            },
            render: function (t, e, i, n) {
            },
            highlight: function (t, e, i, n) {
                a(t.getData(), n, "emphasis")
            },
            downplay: function (t, e, i, n) {
                a(t.getData(), n, "normal")
            },
            remove: function (t, e) {
                this.group.removeAll()
            },
            dispose: function () {
            },
            incrementalPrepareRender: null,
            incrementalRender: null,
            updateTransform: null,
            filterForExposedEvent: null
        };
        var x = n.prototype;
        x.updateView = x.updateLayout = x.updateVisual = function (t, e, i, n) {
            this.render(t, e, i, n)
        }, h.enableClassExtend(n, ["dispose"]), h.enableClassManagement(n, {
            registerWhenExtend: !0
        }), n.markUpdateMethod = function (t, e) {
            _(t).updateMethod = e
        };
        var b = {
                incrementalPrepareRender: {
                    progress: function (t, e) {
                        e.view.incrementalRender(t, e.model, e.ecModel, e.api, e.payload)
                    }
                },
                render: {
                    forceFirstProgress: !0,
                    progress: function (t, e) {
                        e.view.render(e.model, e.ecModel, e.api, e.payload)
                    }
                }
            },
            w = n;
        t.exports = w
    }, function (t, e, i) {
        var n = i(656),
            o = i(660),
            a = i(641),
            r = function () {
                this.group = new n, this.uid = o.getUID("viewComponent")
            };
        r.prototype = {
            constructor: r,
            init: function (t, e) {
            },
            render: function (t, e, i, n) {
            },
            dispose: function () {
            },
            filterForExposedEvent: null
        };
        var s = r.prototype;
        s.updateView = s.updateLayout = s.updateVisual = function (t, e, i, n) {
        }, a.enableClassExtend(r), a.enableClassManagement(r, {
            registerWhenExtend: !0
        });
        var l = r;
        t.exports = l
    }, function (t, e, i) {
        var n = i(718),
            o = i(658),
            a = i(732),
            r = i(907),
            s = i(630),
            l = function (t) {
                a.call(this, t), o.call(this, t), r.call(this, t), this.id = t.id || n()
            };
        l.prototype = {
            type: "element",
            name: "",
            __zr: null,
            ignore: !1,
            clipPath: null,
            isGroup: !1,
            drift: function (t, e) {
                switch (this.draggable) {
                    case "horizontal":
                        e = 0;
                        break;
                    case "vertical":
                        t = 0
                }
                var i = this.transform;
                i || (i = this.transform = [1, 0, 0, 1, 0, 0]), i[4] += t, i[5] += e, this.decomposeTransform(), this.dirty(!1)
            },
            beforeUpdate: function () {
            },
            afterUpdate: function () {
            },
            update: function () {
                this.updateTransform()
            },
            traverse: function (t, e) {
            },
            attrKV: function (t, e) {
                if ("position" === t || "scale" === t || "origin" === t) {
                    if (e) {
                        var i = this[t];
                        i || (i = this[t] = []), i[0] = e[0], i[1] = e[1]
                    }
                } else this[t] = e
            },
            hide: function () {
                this.ignore = !0, this.__zr && this.__zr.refresh()
            },
            show: function () {
                this.ignore = !1, this.__zr && this.__zr.refresh()
            },
            attr: function (t, e) {
                if ("string" == typeof t) this.attrKV(t, e);
                else if (s.isObject(t))
                    for (var i in t) t.hasOwnProperty(i) && this.attrKV(i, t[i]);
                return this.dirty(!1), this
            },
            setClipPath: function (t) {
                var e = this.__zr;
                e && t.addSelfToZr(e), this.clipPath && this.clipPath !== t && this.removeClipPath(), this.clipPath = t, t.__zr = e, t.__clipTarget = this, this.dirty(!1)
            },
            removeClipPath: function () {
                var t = this.clipPath;
                t && (t.__zr && t.removeSelfFromZr(t.__zr), t.__zr = null, t.__clipTarget = null, this.clipPath = null, this.dirty(!1))
            },
            addSelfToZr: function (t) {
                this.__zr = t;
                var e = this.animators;
                if (e)
                    for (var i = 0; i < e.length; i++) t.animation.addAnimator(e[i]);
                this.clipPath && this.clipPath.addSelfToZr(t)
            },
            removeSelfFromZr: function (t) {
                this.__zr = null;
                var e = this.animators;
                if (e)
                    for (var i = 0; i < e.length; i++) t.animation.removeAnimator(e[i]);
                this.clipPath && this.clipPath.removeSelfFromZr(t)
            }
        }, s.mixin(l, r), s.mixin(l, a), s.mixin(l, o);
        var d = l;
        t.exports = d
    }, function (t, e, i) {
        function n(t, e) {
            return t[e]
        }

        function o(t, e, i) {
            t[e] = i
        }

        function a(t, e, i) {
            return (e - t) * i + t
        }

        function r(t, e, i) {
            return i > .5 ? e : t
        }

        function s(t, e, i, n, o) {
            var r = t.length;
            if (1 === o)
                for (var s = 0; s < r; s++) n[s] = a(t[s], e[s], i);
            else
                for (var l = r && t[0].length, s = 0; s < r; s++)
                    for (var d = 0; d < l; d++) n[s][d] = a(t[s][d], e[s][d], i)
        }

        function l(t, e, i) {
            var n = t.length,
                o = e.length;
            if (n !== o)
                if (n > o) t.length = o;
                else
                    for (var a = n; a < o; a++) t.push(1 === i ? e[a] : x.call(e[a]));
            for (var r = t[0] && t[0].length, a = 0; a < t.length; a++)
                if (1 === i) isNaN(t[a]) && (t[a] = e[a]);
                else
                    for (var s = 0; s < r; s++) isNaN(t[a][s]) && (t[a][s] = e[a][s])
        }

        function d(t, e, i) {
            if (t === e) return !0;
            var n = t.length;
            if (n !== e.length) return !1;
            if (1 === i) {
                for (var o = 0; o < n; o++)
                    if (t[o] !== e[o]) return !1
            } else
                for (var a = t[0].length, o = 0; o < n; o++)
                    for (var r = 0; r < a; r++)
                        if (t[o][r] !== e[o][r]) return !1;
            return !0
        }

        function u(t, e, i, n, o, a, r, s, l) {
            var d = t.length;
            if (1 === l)
                for (var u = 0; u < d; u++) s[u] = c(t[u], e[u], i[u], n[u], o, a, r);
            else
                for (var h = t[0].length, u = 0; u < d; u++)
                    for (var f = 0; f < h; f++) s[u][f] = c(t[u][f], e[u][f], i[u][f], n[u][f], o, a, r)
        }

        function c(t, e, i, n, o, a, r) {
            var s = .5 * (i - t),
                l = .5 * (n - e);
            return (2 * (e - i) + s + l) * r + (-3 * (e - i) - 2 * s - l) * a + s * o + e
        }

        function h(t) {
            if (y(t)) {
                var e = t.length;
                if (y(t[0])) {
                    for (var i = [], n = 0; n < e; n++) i.push(x.call(t[n]));
                    return i
                }
                return x.call(t)
            }
            return t
        }

        function f(t) {
            return t[0] = Math.floor(t[0]), t[1] = Math.floor(t[1]), t[2] = Math.floor(t[2]), "rgba(" + t.join(",") + ")"
        }

        function p(t) {
            var e = t[t.length - 1].value;
            return y(e && e[0]) ? 2 : 1
        }

        function g(t, e, i, n, o, h) {
            var g = t._getter,
                _ = t._setter,
                x = "spline" === e,
                b = n.length;
            if (b) {
                var w, S = n[0].value,
                    C = y(S),
                    k = !1,
                    I = !1,
                    T = C ? p(n) : 0;
                n.sort(function (t, e) {
                    return t.time - e.time
                }), w = n[b - 1].time;
                for (var D = [], M = [], A = n[0].value, L = !0, P = 0; P < b; P++) {
                    D.push(n[P].time / w);
                    var O = n[P].value;
                    if (C && d(O, A, T) || !C && O === A || (L = !1), A = O, "string" == typeof O) {
                        var R = m.parse(O);
                        R ? (O = R, k = !0) : I = !0
                    }
                    M.push(O)
                }
                if (h || !L) {
                    for (var E = M[b - 1], P = 0; P < b - 1; P++) C ? l(M[P], E, T) : !isNaN(M[P]) || isNaN(E) || I || k || (M[P] = E);
                    C && l(g(t._target, o), E, T);
                    var z, N, B, F, V, H, q = 0,
                        W = 0;
                    if (k) var U = [0, 0, 0, 0];
                    var j = function (t, e) {
                            var i;
                            if (e < 0) i = 0;
                            else if (e < W) {
                                for (z = Math.min(q + 1, b - 1), i = z; i >= 0 && !(D[i] <= e); i--) ;
                                i = Math.min(i, b - 2)
                            } else {
                                for (i = q; i < b && !(D[i] > e); i++) ;
                                i = Math.min(i - 1, b - 2)
                            }
                            q = i, W = e;
                            var n = D[i + 1] - D[i];
                            if (0 !== n)
                                if (N = (e - D[i]) / n, x)
                                    if (F = M[i], B = M[0 === i ? i : i - 1], V = M[i > b - 2 ? b - 1 : i + 1], H = M[i > b - 3 ? b - 1 : i + 2], C) u(B, F, V, H, N, N * N, N * N * N, g(t, o), T);
                                    else {
                                        var l;
                                        if (k) l = u(B, F, V, H, N, N * N, N * N * N, U, 1), l = f(U);
                                        else {
                                            if (I) return r(F, V, N);
                                            l = c(B, F, V, H, N, N * N, N * N * N)
                                        }
                                        _(t, o, l)
                                    }
                                else if (C) s(M[i], M[i + 1], N, g(t, o), T);
                                else {
                                    var l;
                                    if (k) s(M[i], M[i + 1], N, U, 1), l = f(U);
                                    else {
                                        if (I) return r(M[i], M[i + 1], N);
                                        l = a(M[i], M[i + 1], N)
                                    }
                                    _(t, o, l)
                                }
                        },
                        G = new v({
                            target: t._target,
                            life: w,
                            loop: t._loop,
                            delay: t._delay,
                            onframe: j,
                            ondestroy: i
                        });
                    return e && "spline" !== e && (G.easing = e), G
                }
            }
        }

        var v = i(883),
            m = i(666),
            _ = i(630),
            y = _.isArrayLike,
            x = Array.prototype.slice,
            b = function (t, e, i, a) {
                this._tracks = {}, this._target = t, this._loop = e || !1, this._getter = i || n, this._setter = a || o, this._clipCount = 0, this._delay = 0, this._doneList = [], this._onframeList = [], this._clipList = []
            };
        b.prototype = {
            when: function (t, e) {
                var i = this._tracks;
                for (var n in e)
                    if (e.hasOwnProperty(n)) {
                        if (!i[n]) {
                            i[n] = [];
                            var o = this._getter(this._target, n);
                            if (null == o) continue;
                            0 !== t && i[n].push({
                                time: 0,
                                value: h(o)
                            })
                        }
                        i[n].push({
                            time: t,
                            value: e[n]
                        })
                    }
                return this
            },
            during: function (t) {
                return this._onframeList.push(t), this
            },
            pause: function () {
                for (var t = 0; t < this._clipList.length; t++) this._clipList[t].pause();
                this._paused = !0
            },
            resume: function () {
                for (var t = 0; t < this._clipList.length; t++) this._clipList[t].resume();
                this._paused = !1
            },
            isPaused: function () {
                return !!this._paused
            },
            _doneCallback: function () {
                this._tracks = {}, this._clipList.length = 0;
                for (var t = this._doneList, e = t.length, i = 0; i < e; i++) t[i].call(this)
            },
            start: function (t, e) {
                var i, n = this,
                    o = 0,
                    a = function () {
                        --o || n._doneCallback()
                    };
                for (var r in this._tracks)
                    if (this._tracks.hasOwnProperty(r)) {
                        var s = g(this, t, a, this._tracks[r], r, e);
                        s && (this._clipList.push(s), o++, this.animation && this.animation.addClip(s), i = s)
                    }
                if (i) {
                    var l = i.onframe;
                    i.onframe = function (t, e) {
                        l(t, e);
                        for (var i = 0; i < n._onframeList.length; i++) n._onframeList[i](t, e)
                    }
                }
                return o || this._doneCallback(), this
            },
            stop: function (t) {
                for (var e = this._clipList, i = this.animation, n = 0; n < e.length; n++) {
                    var o = e[n];
                    t && o.onframe(this._target, 1), i && i.removeClip(o)
                }
                e.length = 0
            },
            delay: function (t) {
                return this._delay = t, this
            },
            done: function (t) {
                return t && this._doneList.push(t), this
            },
            getClips: function () {
                return this._clipList
            }
        };
        var w = b;
        t.exports = w
    }, function (t, e) {
        var i = "undefined" != typeof window && (window.requestAnimationFrame && window.requestAnimationFrame.bind(window) || window.msRequestAnimationFrame && window.msRequestAnimationFrame.bind(window) || window.mozRequestAnimationFrame || window.webkitRequestAnimationFrame) || function (t) {
            setTimeout(t, 16)
        };
        t.exports = i
    }, function (t, e) {
        function i(t) {
            return t %= n, t < 0 && (t += n), t
        }

        var n = 2 * Math.PI;
        e.normalizeRadian = i
    }, function (t, e) {
        function i(t, e, i, n, o, a) {
            if (a > e && a > n || a < e && a < n) return 0;
            if (n === e) return 0;
            var r = n < e ? 1 : -1,
                s = (a - e) / (n - e);
            1 !== s && 0 !== s || (r = n < e ? .5 : -.5);
            var l = s * (i - t) + t;
            return l === o ? 1 / 0 : l > o ? r : 0
        }

        t.exports = i
    }, function (t, e) {
        var i = function () {
                this.head = null, this.tail = null, this._len = 0
            },
            n = i.prototype;
        n.insert = function (t) {
            var e = new o(t);
            return this.insertEntry(e), e
        }, n.insertEntry = function (t) {
            this.head ? (this.tail.next = t, t.prev = this.tail, t.next = null, this.tail = t) : this.head = this.tail = t, this._len++
        }, n.remove = function (t) {
            var e = t.prev,
                i = t.next;
            e ? e.next = i : this.head = i, i ? i.prev = e : this.tail = e, t.next = t.prev = null, this._len--
        }, n.len = function () {
            return this._len
        }, n.clear = function () {
            this.head = this.tail = null, this._len = 0
        };
        var o = function (t) {
                this.value = t, this.next, this.prev
            },
            a = function (t) {
                this._list = new i, this._map = {}, this._maxSize = t || 10, this._lastRemovedEntry = null
            },
            r = a.prototype;
        r.put = function (t, e) {
            var i = this._list,
                n = this._map,
                a = null;
            if (null == n[t]) {
                var r = i.len(),
                    s = this._lastRemovedEntry;
                if (r >= this._maxSize && r > 0) {
                    var l = i.head;
                    i.remove(l), delete n[l.key], a = l.value, this._lastRemovedEntry = l
                }
                s ? s.value = e : s = new o(e), s.key = t, i.insertEntry(s), n[t] = s
            }
            return a
        }, r.get = function (t) {
            var e = this._map[t],
                i = this._list;
            if (null != e) return e !== i.tail && (i.remove(e), i.insertEntry(e)), e.value
        }, r.clear = function () {
            this._list.clear(), this._map = {}
        };
        var s = a;
        t.exports = s
    }, function (t, e, i) {
        function n(t, e, i) {
            if (0 !== t.length) {
                var n, o = t[0],
                    a = o[0],
                    r = o[0],
                    s = o[1],
                    l = o[1];
                for (n = 1; n < t.length; n++) o = t[n], a = u(a, o[0]), r = c(r, o[0]), s = u(s, o[1]), l = c(l, o[1]);
                e[0] = a, e[1] = s, i[0] = r, i[1] = l
            }
        }

        function o(t, e, i, n, o, a) {
            o[0] = u(t, i), o[1] = u(e, n), a[0] = c(t, i), a[1] = c(e, n)
        }

        function a(t, e, i, n, o, a, r, s, l, h) {
            var f, p = d.cubicExtrema,
                g = d.cubicAt,
                v = p(t, i, o, r, _);
            for (l[0] = 1 / 0, l[1] = 1 / 0, h[0] = -1 / 0, h[1] = -1 / 0, f = 0; f < v; f++) {
                var m = g(t, i, o, r, _[f]);
                l[0] = u(m, l[0]), h[0] = c(m, h[0])
            }
            for (v = p(e, n, a, s, y), f = 0; f < v; f++) {
                var x = g(e, n, a, s, y[f]);
                l[1] = u(x, l[1]), h[1] = c(x, h[1])
            }
            l[0] = u(t, l[0]), h[0] = c(t, h[0]), l[0] = u(r, l[0]), h[0] = c(r, h[0]), l[1] = u(e, l[1]), h[1] = c(e, h[1]), l[1] = u(s, l[1]), h[1] = c(s, h[1])
        }

        function r(t, e, i, n, o, a, r, s) {
            var l = d.quadraticExtremum,
                h = d.quadraticAt,
                f = c(u(l(t, i, o), 1), 0),
                p = c(u(l(e, n, a), 1), 0),
                g = h(t, i, o, f),
                v = h(e, n, a, p);
            r[0] = u(t, o, g), r[1] = u(e, a, v), s[0] = c(t, o, g), s[1] = c(e, a, v)
        }

        function s(t, e, i, n, o, a, r, s, d) {
            var u = l.min,
                c = l.max,
                _ = Math.abs(o - a);
            if (_ % p < 1e-4 && _ > 1e-4) return s[0] = t - i, s[1] = e - n, d[0] = t + i, void (d[1] = e + n);
            if (g[0] = f(o) * i + t, g[1] = h(o) * n + e, v[0] = f(a) * i + t, v[1] = h(a) * n + e, u(s, g, v), c(d, g, v), o %= p, o < 0 && (o += p), a %= p, a < 0 && (a += p), o > a && !r ? a += p : o < a && r && (o += p), r) {
                var y = a;
                a = o, o = y
            }
            for (var x = 0; x < a; x += Math.PI / 2) x > o && (m[0] = f(x) * i + t, m[1] = h(x) * n + e, u(s, m, s), c(d, m, d))
        }

        var l = i(635),
            d = i(648),
            u = Math.min,
            c = Math.max,
            h = Math.sin,
            f = Math.cos,
            p = 2 * Math.PI,
            g = l.create(),
            v = l.create(),
            m = l.create(),
            _ = [],
            y = [];
        e.fromPoints = n, e.fromLine = o, e.fromCubic = a, e.fromQuadratic = r, e.fromArc = s
    }, function (t, e) {
        function i() {
            return n++
        }

        var n = 2311;
        t.exports = i
    }, function (t, e, i) {
        var n = i(661),
            o = n.debugMode,
            a = function () {
            };
        1 === o && (a = console.error);
        var r = a;
        t.exports = r
    }, function (t, e, i) {
        var n = i(630),
            o = i(692),
            a = function (t, e, i, n, a, r) {
                this.x = null == t ? 0 : t, this.y = null == e ? 0 : e, this.x2 = null == i ? 1 : i, this.y2 = null == n ? 0 : n, this.type = "linear", this.global = r || !1, o.call(this, a)
            };
        a.prototype = {
            constructor: a
        }, n.inherits(a, o);
        var r = a;
        t.exports = r
    }, function (t, e) {
        var i = function (t, e) {
            this.image = t, this.repeat = e, this.type = "pattern"
        };
        i.prototype.getCanvasPattern = function (t) {
            return t.createPattern(this.image, this.repeat || "repeat")
        };
        var n = i;
        t.exports = n
    }, function (t, e, i) {
        var n = i(664),
            o = i(630),
            a = i(640),
            r = i(726),
            s = i(665),
            l = s.ContextCachedBy,
            d = function (t) {
                n.call(this, t)
            };
        d.prototype = {
            constructor: d,
            type: "text",
            brush: function (t, e) {
                var i = this.style;
                this.__dirty && r.normalizeTextStyle(i, !0), i.fill = i.stroke = i.shadowBlur = i.shadowColor = i.shadowOffsetX = i.shadowOffsetY = null;
                var n = i.text;
                if (null != n && (n += ""), !r.needDrawText(n, i)) return void (t.__attrCachedBy = l.NONE);
                this.setTransform(t), r.renderText(this, t, n, i, null, e), this.restoreTransform(t)
            },
            getBoundingRect: function () {
                var t = this.style;
                if (this.__dirty && r.normalizeTextStyle(t, !0), !this._rect) {
                    var e = t.text;
                    null != e ? e += "" : e = "";
                    var i = a.getBoundingRect(t.text + "", t.font, t.textAlign, t.textVerticalAlign, t.textPadding, t.textLineHeight, t.rich);
                    if (i.x += t.x || 0, i.y += t.y || 0, r.getStroke(t.textStroke, t.textStrokeWidth)) {
                        var n = t.textStrokeWidth;
                        i.x -= n / 2, i.y -= n / 2, i.width += n, i.height += n
                    }
                    this._rect = i
                }
                return this._rect
            }
        }, o.inherits(d, n);
        var u = d;
        t.exports = u
    }, function (t, e) {
        function i(t, e, i) {
            return n.hasOwnProperty(e) ? i *= t.dpr : i
        }

        var n = {
            shadowBlur: 1,
            shadowOffsetX: 1,
            shadowOffsetY: 1,
            textShadowBlur: 1,
            textShadowOffsetX: 1,
            textShadowOffsetY: 1,
            textBoxShadowBlur: 1,
            textBoxShadowOffsetX: 1,
            textBoxShadowOffsetY: 1
        };
        t.exports = i
    }, function (t, e, i) {
        function n(t, e, i) {
            var n = e.points,
                r = e.smooth;
            if (n && n.length >= 2) {
                if (r && "spline" !== r) {
                    var s = a(n, r, i, e.smoothConstraint);
                    t.moveTo(n[0][0], n[0][1]);
                    for (var l = n.length, d = 0; d < (i ? l : l - 1); d++) {
                        var u = s[2 * d],
                            c = s[2 * d + 1],
                            h = n[(d + 1) % l];
                        t.bezierCurveTo(u[0], u[1], c[0], c[1], h[0], h[1])
                    }
                } else {
                    "spline" === r && (n = o(n, i)), t.moveTo(n[0][0], n[0][1]);
                    for (var d = 1, f = n.length; d < f; d++) t.lineTo(n[d][0], n[d][1])
                }
                i && t.closePath()
            }
        }

        var o = i(900),
            a = i(899);
        e.buildPath = n
    }, function (t, e) {
        function i(t, e) {
            var i, n, o, a, r = e.x,
                s = e.y,
                l = e.width,
                d = e.height,
                u = e.r;
            l < 0 && (r += l, l = -l), d < 0 && (s += d, d = -d), "number" == typeof u ? i = n = o = a = u : u instanceof Array ? 1 === u.length ? i = n = o = a = u[0] : 2 === u.length ? (i = o = u[0], n = a = u[1]) : 3 === u.length ? (i = u[0], n = a = u[1], o = u[2]) : (i = u[0], n = u[1], o = u[2], a = u[3]) : i = n = o = a = 0;
            var c;
            i + n > l && (c = i + n, i *= l / c, n *= l / c), o + a > l && (c = o + a, o *= l / c, a *= l / c), n + o > d && (c = n + o, n *= d / c, o *= d / c), i + a > d && (c = i + a, i *= d / c, a *= d / c), t.moveTo(r + i, s), t.lineTo(r + l - n, s), 0 !== n && t.arc(r + l - n, s + n, n, -Math.PI / 2, 0), t.lineTo(r + l, s + d - o), 0 !== o && t.arc(r + l - o, s + d - o, o, 0, Math.PI / 2), t.lineTo(r + a, s + d), 0 !== a && t.arc(r + a, s + d - a, a, Math.PI / 2, Math.PI), t.lineTo(r, s + i), 0 !== i && t.arc(r + i, s + i, i, Math.PI, 1.5 * Math.PI)
        }

        e.buildPath = i
    }, function (t, e, i) {
        function n(t) {
            return o(t), C(t.rich, o), t
        }

        function o(t) {
            if (t) {
                t.font = D.makeFont(t);
                var e = t.textAlign;
                "middle" === e && (e = "center"), t.textAlign = null == e || z[e] ? e : "left";
                var i = t.textVerticalAlign || t.textBaseline;
                "center" === i && (i = "middle"), t.textVerticalAlign = null == i || N[i] ? i : "top", t.textPadding && (t.textPadding = k(t.textPadding))
            }
        }

        function a(t, e, i, n, o, a) {
            n.rich ? s(t, e, i, n, o, a) : r(t, e, i, n, o, a)
        }

        function r(t, e, i, n, o, a) {
            "use strict";
            var r, s = c(n),
                l = !1,
                u = e.__attrCachedBy === O.PLAIN_TEXT;
            a !== R ? (a && (r = a.style, l = !s && u && r), e.__attrCachedBy = s ? O.NONE : O.PLAIN_TEXT) : u && (e.__attrCachedBy = O.NONE);
            var f = n.font || E;
            l && f === (r.font || E) || (e.font = f);
            var g = t.__computedFont;
            t.__styleFont !== f && (t.__styleFont = f, g = t.__computedFont = e.font);
            var _ = n.textPadding,
                x = n.textLineHeight,
                b = t.__textCotentBlock;
            b && !t.__dirtyText || (b = t.__textCotentBlock = D.parsePlainText(i, g, _, x, n.truncate));
            var w = b.outerHeight,
                S = b.lines,
                C = b.lineHeight,
                k = p(V, t, n, o),
                I = k.baseX,
                T = k.baseY,
                M = k.textAlign || "left",
                A = k.textVerticalAlign;
            d(e, n, o, I, T);
            var P = D.adjustTextY(T, w, A),
                z = I,
                N = P;
            if (s || _) {
                var F = D.getWidth(i, g),
                    H = F;
                _ && (H += _[1] + _[3]);
                var q = D.adjustTextX(I, H, M);
                s && h(t, e, n, q, P, H, w), _ && (z = y(I, M, _), N += _[0])
            }
            e.textAlign = M, e.textBaseline = "middle", e.globalAlpha = n.opacity || 1;
            for (var W = 0; W < B.length; W++) {
                var U = B[W],
                    j = U[0],
                    G = U[1],
                    X = n[j];
                l && X === r[j] || (e[G] = L(e, G, X || U[2]))
            }
            N += C / 2;
            var Y = n.textStrokeWidth,
                $ = l ? r.textStrokeWidth : null,
                Z = !l || Y !== $,
                Q = !l || Z || n.textStroke !== r.textStroke,
                K = v(n.textStroke, Y),
                J = m(n.textFill);
            if (K && (Z && (e.lineWidth = Y), Q && (e.strokeStyle = K)), J && (l && n.textFill === r.textFill || (e.fillStyle = J)), 1 === S.length) K && e.strokeText(S[0], z, N), J && e.fillText(S[0], z, N);
            else
                for (var W = 0; W < S.length; W++) K && e.strokeText(S[W], z, N), J && e.fillText(S[W], z, N), N += C
        }

        function s(t, e, i, n, o, a) {
            a !== R && (e.__attrCachedBy = O.NONE);
            var r = t.__textCotentBlock;
            r && !t.__dirtyText || (r = t.__textCotentBlock = D.parseRichText(i, n)), l(t, e, r, n, o)
        }

        function l(t, e, i, n, o) {
            var a = i.width,
                r = i.outerWidth,
                s = i.outerHeight,
                l = n.textPadding,
                f = p(V, t, n, o),
                g = f.baseX,
                v = f.baseY,
                m = f.textAlign,
                _ = f.textVerticalAlign;
            d(e, n, o, g, v);
            var y = D.adjustTextX(g, r, m),
                x = D.adjustTextY(v, s, _),
                b = y,
                w = x;
            l && (b += l[3], w += l[0]);
            var S = b + a;
            c(n) && h(t, e, n, y, x, r, s);
            for (var C = 0; C < i.lines.length; C++) {
                for (var k, I = i.lines[C], T = I.tokens, M = T.length, A = I.lineHeight, L = I.width, P = 0, O = b, R = S, E = M - 1; P < M && (k = T[P], !k.textAlign || "left" === k.textAlign);) u(t, e, k, n, A, w, O, "left"), L -= k.width, O += k.width, P++;
                for (; E >= 0 && (k = T[E], "right" === k.textAlign);) u(t, e, k, n, A, w, R, "right"), L -= k.width, R -= k.width, E--;
                for (O += (a - (O - b) - (S - R) - L) / 2; P <= E;) k = T[P], u(t, e, k, n, A, w, O + k.width / 2, "center"), O += k.width, P++;
                w += A
            }
        }

        function d(t, e, i, n, o) {
            if (i && e.textRotation) {
                var a = e.textOrigin;
                "center" === a ? (n = i.width / 2 + i.x, o = i.height / 2 + i.y) : a && (n = a[0] + i.x, o = a[1] + i.y), t.translate(n, o), t.rotate(-e.textRotation), t.translate(-n, -o)
            }
        }

        function u(t, e, i, n, o, a, r, s) {
            var l = n.rich[i.styleName] || {};
            l.text = i.text;
            var d = i.textVerticalAlign,
                u = a + o / 2;
            "top" === d ? u = a + i.height / 2 : "bottom" === d && (u = a + o - i.height / 2), !i.isLineHolder && c(l) && h(t, e, l, "right" === s ? r - i.width : "center" === s ? r - i.width / 2 : r, u - i.height / 2, i.width, i.height);
            var f = i.textPadding;
            f && (r = y(r, s, f), u -= i.height / 2 - f[2] - i.textHeight / 2), g(e, "shadowBlur", S(l.textShadowBlur, n.textShadowBlur, 0)), g(e, "shadowColor", l.textShadowColor || n.textShadowColor || "transparent"), g(e, "shadowOffsetX", S(l.textShadowOffsetX, n.textShadowOffsetX, 0)), g(e, "shadowOffsetY", S(l.textShadowOffsetY, n.textShadowOffsetY, 0)), g(e, "textAlign", s), g(e, "textBaseline", "middle"), g(e, "font", i.font || E);
            var p = v(l.textStroke || n.textStroke, x),
                _ = m(l.textFill || n.textFill),
                x = w(l.textStrokeWidth, n.textStrokeWidth);
            p && (g(e, "lineWidth", x), g(e, "strokeStyle", p), e.strokeText(i.text, r, u)), _ && (g(e, "fillStyle", _), e.fillText(i.text, r, u))
        }

        function c(t) {
            return !!(t.textBackgroundColor || t.textBorderWidth && t.textBorderColor)
        }

        function h(t, e, i, n, o, a, r) {
            var s = i.textBackgroundColor,
                l = i.textBorderWidth,
                d = i.textBorderColor,
                u = I(s);
            if (g(e, "shadowBlur", i.textBoxShadowBlur || 0), g(e, "shadowColor", i.textBoxShadowColor || "transparent"), g(e, "shadowOffsetX", i.textBoxShadowOffsetX || 0), g(e, "shadowOffsetY", i.textBoxShadowOffsetY || 0), u || l && d) {
                e.beginPath();
                var c = i.textBorderRadius;
                c ? M.buildPath(e, {
                    x: n,
                    y: o,
                    width: a,
                    height: r,
                    r: c
                }) : e.rect(n, o, a, r), e.closePath()
            }
            if (u)
                if (g(e, "fillStyle", s), null != i.fillOpacity) {
                    var h = e.globalAlpha;
                    e.globalAlpha = i.fillOpacity * i.opacity, e.fill(), e.globalAlpha = h
                } else e.fill();
            else if (T(s)) {
                var p = s.image;
                (p = A.createOrUpdateImage(p, null, t, f, s)) && A.isImageReady(p) && e.drawImage(p, n, o, a, r)
            }
            if (l && d)
                if (g(e, "lineWidth", l), g(e, "strokeStyle", d), null != i.strokeOpacity) {
                    var h = e.globalAlpha;
                    e.globalAlpha = i.strokeOpacity * i.opacity, e.stroke(), e.globalAlpha = h
                } else e.stroke()
        }

        function f(t, e) {
            e.image = t
        }

        function p(t, e, i, n) {
            var o = i.x || 0,
                a = i.y || 0,
                r = i.textAlign,
                s = i.textVerticalAlign;
            if (n) {
                var l = i.textPosition;
                if (l instanceof Array) o = n.x + _(l[0], n.width), a = n.y + _(l[1], n.height);
                else {
                    var d = e && e.calculateTextPosition ? e.calculateTextPosition(F, i, n) : D.calculateTextPosition(F, i, n);
                    o = d.x, a = d.y, r = r || d.textAlign, s = s || d.textVerticalAlign
                }
                var u = i.textOffset;
                u && (o += u[0], a += u[1])
            }
            return t = t || {}, t.baseX = o, t.baseY = a, t.textAlign = r, t.textVerticalAlign = s, t
        }

        function g(t, e, i) {
            return t[e] = L(t, e, i), t[e]
        }

        function v(t, e) {
            return null == t || e <= 0 || "transparent" === t || "none" === t ? null : t.image || t.colorStops ? "#000" : t
        }

        function m(t) {
            return null == t || "none" === t ? null : t.image || t.colorStops ? "#000" : t
        }

        function _(t, e) {
            return "string" == typeof t ? t.lastIndexOf("%") >= 0 ? parseFloat(t) / 100 * e : parseFloat(t) : t
        }

        function y(t, e, i) {
            return "right" === e ? t - i[1] : "center" === e ? t + i[3] / 2 - i[1] / 2 : t + i[3]
        }

        function x(t, e) {
            return null != t && (t || e.textBackgroundColor || e.textBorderWidth && e.textBorderColor || e.textPadding)
        }

        var b = i(630),
            w = b.retrieve2,
            S = b.retrieve3,
            C = b.each,
            k = b.normalizeCssArray,
            I = b.isString,
            T = b.isObject,
            D = i(640),
            M = i(725),
            A = i(695),
            L = i(723),
            P = i(665),
            O = P.ContextCachedBy,
            R = P.WILL_BE_RESTORED,
            E = D.DEFAULT_FONT,
            z = {
                left: 1,
                right: 1,
                center: 1
            },
            N = {
                top: 1,
                bottom: 1,
                middle: 1
            },
            B = [
                ["textShadowBlur", "shadowBlur", 0],
                ["textShadowOffsetX", "shadowOffsetX", 0],
                ["textShadowOffsetY", "shadowOffsetY", 0],
                ["textShadowColor", "shadowColor", "transparent"]
            ],
            F = {},
            V = {};
        e.normalizeTextStyle = n, e.renderText = a, e.getBoxPosition = p, e.getStroke = v, e.getFill = m, e.parsePercent = _, e.needDrawText = x
    }, function (t, e, i) {
        var n = i(633),
            o = n.extend({
                type: "circle",
                shape: {
                    cx: 0,
                    cy: 0,
                    r: 0
                },
                buildPath: function (t, e, i) {
                    i && t.moveTo(e.cx + e.r, e.cy), t.arc(e.cx, e.cy, e.r, 0, 2 * Math.PI, !0)
                }
            });
        t.exports = o
    }, function (t, e, i) {
        var n = i(633),
            o = i(696),
            a = o.subPixelOptimizeLine,
            r = {},
            s = n.extend({
                type: "line",
                shape: {
                    x1: 0,
                    y1: 0,
                    x2: 0,
                    y2: 0,
                    percent: 1
                },
                style: {
                    stroke: "#000",
                    fill: null
                },
                buildPath: function (t, e) {
                    var i, n, o, s;
                    this.subPixelOptimize ? (a(r, e, this.style), i = r.x1, n = r.y1, o = r.x2, s = r.y2) : (i = e.x1, n = e.y1, o = e.x2, s = e.y2);
                    var l = e.percent;
                    0 !== l && (t.moveTo(i, n), l < 1 && (o = i * (1 - l) + o * l, s = n * (1 - l) + s * l), t.lineTo(o, s))
                },
                pointAt: function (t) {
                    var e = this.shape;
                    return [e.x1 * (1 - t) + e.x2 * t, e.y1 * (1 - t) + e.y2 * t]
                }
            });
        t.exports = s
    }, function (t, e, i) {
        var n = i(633),
            o = i(724),
            a = n.extend({
                type: "polygon",
                shape: {
                    points: null,
                    smooth: !1,
                    smoothConstraint: null
                },
                buildPath: function (t, e) {
                    o.buildPath(t, e, !0)
                }
            });
        t.exports = a
    }, function (t, e, i) {
        var n = i(633),
            o = i(724),
            a = n.extend({
                type: "polyline",
                shape: {
                    points: null,
                    smooth: !1,
                    smoothConstraint: null
                },
                style: {
                    stroke: "#000",
                    fill: null
                },
                buildPath: function (t, e) {
                    o.buildPath(t, e, !1)
                }
            });
        t.exports = a
    }, function (t, e, i) {
        var n = i(633),
            o = i(725),
            a = i(696),
            r = a.subPixelOptimizeRect,
            s = {},
            l = n.extend({
                type: "rect",
                shape: {
                    r: 0,
                    x: 0,
                    y: 0,
                    width: 0,
                    height: 0
                },
                buildPath: function (t, e) {
                    var i, n, a, l;
                    this.subPixelOptimize ? (r(s, e, this.style), i = s.x, n = s.y, a = s.width, l = s.height, s.r = e.r, e = s) : (i = e.x, n = e.y, a = e.width, l = e.height), e.r ? o.buildPath(t, e) : t.rect(i, n, a, l), t.closePath()
                }
            });
        t.exports = l
    }, function (t, e, i) {
        function n(t) {
            return t > s || t < -s
        }

        var o = i(657),
            a = i(635),
            r = o.identity,
            s = 5e-5,
            l = function (t) {
                t = t || {}, t.position || (this.position = [0, 0]), null == t.rotation && (this.rotation = 0), t.scale || (this.scale = [1, 1]), this.origin = this.origin || null
            },
            d = l.prototype;
        d.transform = null, d.needLocalTransform = function () {
            return n(this.rotation) || n(this.position[0]) || n(this.position[1]) || n(this.scale[0] - 1) || n(this.scale[1] - 1)
        };
        var u = [];
        d.updateTransform = function () {
            var t = this.parent,
                e = t && t.transform,
                i = this.needLocalTransform(),
                n = this.transform;
            if (!i && !e) return void (n && r(n));
            n = n || o.create(), i ? this.getLocalTransform(n) : r(n), e && (i ? o.mul(n, t.transform, n) : o.copy(n, t.transform)), this.transform = n;
            var a = this.globalScaleRatio;
            if (null != a && 1 !== a) {
                this.getGlobalScale(u);
                var s = u[0] < 0 ? -1 : 1,
                    l = u[1] < 0 ? -1 : 1,
                    d = ((u[0] - s) * a + s) / u[0] || 0,
                    c = ((u[1] - l) * a + l) / u[1] || 0;
                n[0] *= d, n[1] *= d, n[2] *= c, n[3] *= c
            }
            this.invTransform = this.invTransform || o.create(), o.invert(this.invTransform, n)
        }, d.getLocalTransform = function (t) {
            return l.getLocalTransform(this, t)
        }, d.setTransform = function (t) {
            var e = this.transform,
                i = t.dpr || 1;
            e ? t.setTransform(i * e[0], i * e[1], i * e[2], i * e[3], i * e[4], i * e[5]) : t.setTransform(i, 0, 0, i, 0, 0)
        }, d.restoreTransform = function (t) {
            var e = t.dpr || 1;
            t.setTransform(e, 0, 0, e, 0, 0)
        };
        var c = [],
            h = o.create();
        d.setLocalTransform = function (t) {
            if (t) {
                var e = t[0] * t[0] + t[1] * t[1],
                    i = t[2] * t[2] + t[3] * t[3],
                    o = this.position,
                    a = this.scale;
                n(e - 1) && (e = Math.sqrt(e)), n(i - 1) && (i = Math.sqrt(i)), t[0] < 0 && (e = -e), t[3] < 0 && (i = -i), o[0] = t[4], o[1] = t[5], a[0] = e, a[1] = i, this.rotation = Math.atan2(-t[1] / i, t[0] / e)
            }
        }, d.decomposeTransform = function () {
            if (this.transform) {
                var t = this.parent,
                    e = this.transform;
                t && t.transform && (o.mul(c, t.invTransform, e), e = c);
                var i = this.origin;
                i && (i[0] || i[1]) && (h[4] = i[0], h[5] = i[1], o.mul(c, e, h), c[4] -= i[0], c[5] -= i[1], e = c), this.setLocalTransform(e)
            }
        }, d.getGlobalScale = function (t) {
            var e = this.transform;
            return t = t || [], e ? (t[0] = Math.sqrt(e[0] * e[0] + e[1] * e[1]), t[1] = Math.sqrt(e[2] * e[2] + e[3] * e[3]), e[0] < 0 && (t[0] = -t[0]), e[3] < 0 && (t[1] = -t[1]), t) : (t[0] = 1, t[1] = 1, t)
        }, d.transformCoordToLocal = function (t, e) {
            var i = [t, e],
                n = this.invTransform;
            return n && a.applyTransform(i, i, n), i
        }, d.transformCoordToGlobal = function (t, e) {
            var i = [t, e],
                n = this.transform;
            return n && a.applyTransform(i, i, n), i
        }, l.getLocalTransform = function (t, e) {
            e = e || [], r(e);
            var i = t.origin,
                n = t.scale || [1, 1],
                a = t.rotation || 0,
                s = t.position || [0, 0];
            return i && (e[4] -= i[0], e[5] -= i[1]), o.scale(e, e, n), a && o.rotate(e, e, a), i && (e[4] += i[0], e[5] += i[1]), e[4] += s[0], e[5] += s[1], e
        };
        var f = l;
        t.exports = f
    }, function (t, e, i) {
        function n(t, e, i, n, o, a, r, s, l, d, u) {
            var c = l * (g / 180),
                v = p(c) * (t - i) / 2 + f(c) * (e - n) / 2,
                y = -1 * f(c) * (t - i) / 2 + p(c) * (e - n) / 2,
                x = v * v / (r * r) + y * y / (s * s);
            x > 1 && (r *= h(x), s *= h(x));
            var b = (o === a ? -1 : 1) * h((r * r * (s * s) - r * r * (y * y) - s * s * (v * v)) / (r * r * (y * y) + s * s * (v * v))) || 0,
                w = b * r * y / s,
                S = b * -s * v / r,
                C = (t + i) / 2 + p(c) * w - f(c) * S,
                k = (e + n) / 2 + f(c) * w + p(c) * S,
                I = _([1, 0], [(v - w) / r, (y - S) / s]),
                T = [(v - w) / r, (y - S) / s],
                D = [(-1 * v - w) / r, (-1 * y - S) / s],
                M = _(T, D);
            m(T, D) <= -1 && (M = g), m(T, D) >= 1 && (M = 0), 0 === a && M > 0 && (M -= 2 * g), 1 === a && M < 0 && (M += 2 * g), u.addData(d, C, k, r, s, I, M, c, a)
        }

        function o(t) {
            if (!t) return new u;
            for (var e, i = 0, o = 0, a = i, r = o, s = new u, l = u.CMD, d = t.match(y), c = 0; c < d.length; c++) {
                for (var h, f = d[c], p = f.charAt(0), g = f.match(x) || [], v = g.length, m = 0; m < v; m++) g[m] = parseFloat(g[m]);
                for (var _ = 0; _ < v;) {
                    var b, w, S, C, k, I, T, D = i,
                        M = o;
                    switch (p) {
                        case "l":
                            i += g[_++], o += g[_++], h = l.L, s.addData(h, i, o);
                            break;
                        case "L":
                            i = g[_++], o = g[_++], h = l.L, s.addData(h, i, o);
                            break;
                        case "m":
                            i += g[_++], o += g[_++], h = l.M, s.addData(h, i, o), a = i, r = o, p = "l";
                            break;
                        case "M":
                            i = g[_++], o = g[_++], h = l.M, s.addData(h, i, o), a = i, r = o, p = "L";
                            break;
                        case "h":
                            i += g[_++], h = l.L, s.addData(h, i, o);
                            break;
                        case "H":
                            i = g[_++], h = l.L, s.addData(h, i, o);
                            break;
                        case "v":
                            o += g[_++], h = l.L, s.addData(h, i, o);
                            break;
                        case "V":
                            o = g[_++], h = l.L, s.addData(h, i, o);
                            break;
                        case "C":
                            h = l.C, s.addData(h, g[_++], g[_++], g[_++], g[_++], g[_++], g[_++]), i = g[_ - 2], o = g[_ - 1];
                            break;
                        case "c":
                            h = l.C, s.addData(h, g[_++] + i, g[_++] + o, g[_++] + i, g[_++] + o, g[_++] + i, g[_++] + o), i += g[_ - 2], o += g[_ - 1];
                            break;
                        case "S":
                            b = i, w = o;
                            var A = s.len(),
                                L = s.data;
                            e === l.C && (b += i - L[A - 4], w += o - L[A - 3]), h = l.C, D = g[_++], M = g[_++], i = g[_++], o = g[_++], s.addData(h, b, w, D, M, i, o);
                            break;
                        case "s":
                            b = i, w = o;
                            var A = s.len(),
                                L = s.data;
                            e === l.C && (b += i - L[A - 4], w += o - L[A - 3]), h = l.C, D = i + g[_++], M = o + g[_++], i += g[_++], o += g[_++], s.addData(h, b, w, D, M, i, o);
                            break;
                        case "Q":
                            D = g[_++], M = g[_++], i = g[_++], o = g[_++], h = l.Q, s.addData(h, D, M, i, o);
                            break;
                        case "q":
                            D = g[_++] + i, M = g[_++] + o, i += g[_++], o += g[_++], h = l.Q, s.addData(h, D, M, i, o);
                            break;
                        case "T":
                            b = i, w = o;
                            var A = s.len(),
                                L = s.data;
                            e === l.Q && (b += i - L[A - 4], w += o - L[A - 3]), i = g[_++], o = g[_++], h = l.Q, s.addData(h, b, w, i, o);
                            break;
                        case "t":
                            b = i, w = o;
                            var A = s.len(),
                                L = s.data;
                            e === l.Q && (b += i - L[A - 4], w += o - L[A - 3]), i += g[_++], o += g[_++], h = l.Q, s.addData(h, b, w, i, o);
                            break;
                        case "A":
                            S = g[_++], C = g[_++], k = g[_++], I = g[_++], T = g[_++], D = i, M = o, i = g[_++], o = g[_++], h = l.A, n(D, M, i, o, I, T, S, C, k, h, s);
                            break;
                        case "a":
                            S = g[_++], C = g[_++], k = g[_++], I = g[_++], T = g[_++], D = i, M = o, i += g[_++], o += g[_++], h = l.A, n(D, M, i, o, I, T, S, C, k, h, s)
                    }
                }
                "z" !== p && "Z" !== p || (h = l.Z, s.addData(h), i = a, o = r), e = h
            }
            return s.toStatic(), s
        }

        function a(t, e) {
            var i = o(t);
            return e = e || {}, e.buildPath = function (t) {
                if (t.setData) {
                    t.setData(i.data);
                    var e = t.getContext();
                    e && t.rebuildPath(e)
                } else {
                    var e = t;
                    i.rebuildPath(e)
                }
            }, e.applyTransform = function (t) {
                c(i, t), this.dirty(!0)
            }, e
        }

        function r(t, e) {
            return new d(a(t, e))
        }

        function s(t, e) {
            return d.extend(a(t, e))
        }

        function l(t, e) {
            for (var i = [], n = t.length, o = 0; o < n; o++) {
                var a = t[o];
                a.path || a.createPathProxy(), a.__dirtyPath && a.buildPath(a.path, a.shape, !0), i.push(a.path)
            }
            var r = new d(e);
            return r.createPathProxy(), r.buildPath = function (t) {
                t.appendPath(i);
                var e = t.getContext();
                e && t.rebuildPath(e)
            }, r
        }

        var d = i(633),
            u = i(662),
            c = i(910),
            h = Math.sqrt,
            f = Math.sin,
            p = Math.cos,
            g = Math.PI,
            v = function (t) {
                return Math.sqrt(t[0] * t[0] + t[1] * t[1])
            },
            m = function (t, e) {
                return (t[0] * e[0] + t[1] * e[1]) / (v(t) * v(e))
            },
            _ = function (t, e) {
                return (t[0] * e[1] < t[1] * e[0] ? -1 : 1) * Math.acos(m(t, e))
            },
            y = /([mlvhzcqtsa])([^mlvhzcqtsa]*)/gi,
            x = /-?([0-9]*\.)?[0-9]+([eE]-?[0-9]+)?/g;
        e.createFromString = r, e.extendFromString = s, e.mergePath = l
    }, function (t, e, i) {
        function n(t, e) {
            var i = new y(l(), t, e);
            return _[i.id] = i, i
        }

        function o(t) {
            if (t) t.dispose();
            else {
                for (var e in _) _.hasOwnProperty(e) && _[e].dispose();
                _ = {}
            }
            return this
        }

        function a(t) {
            return _[t]
        }

        function r(t, e) {
            m[t] = e
        }

        function s(t) {
            delete _[t]
        }

        var l = i(718),
            d = i(637),
            u = i(630),
            c = i(878),
            h = i(881),
            f = i(880),
            p = i(882),
            g = i(894),
            v = !d.canvasSupported,
            m = {
                canvas: f
            },
            _ = {},
            y = function (t, e, i) {
                i = i || {}, this.dom = e, this.id = t;
                var n = this,
                    o = new h,
                    a = i.renderer;
                if (v) {
                    if (!m.vml) throw new Error("You need to require 'zrender/vml/vml' to support IE8");
                    a = "vml"
                } else a && m[a] || (a = "canvas");
                var r = new m[a](e, o, i, t);
                this.storage = o, this.painter = r;
                var s = d.node || d.worker ? null : new g(r.getViewportRoot(), r.root);
                this.handler = new c(o, r, s, r.root), this.animation = new p({
                    stage: {
                        update: u.bind(this.flush, this)
                    }
                }), this.animation.start(), this._needsRefresh;
                var l = o.delFromStorage,
                    f = o.addToStorage;
                o.delFromStorage = function (t) {
                    l.call(o, t), t && t.removeSelfFromZr(n)
                }, o.addToStorage = function (t) {
                    f.call(o, t), t.addSelfToZr(n)
                }
            };
        y.prototype = {
            constructor: y,
            getId: function () {
                return this.id
            },
            add: function (t) {
                this.storage.addRoot(t), this._needsRefresh = !0
            },
            remove: function (t) {
                this.storage.delRoot(t), this._needsRefresh = !0
            },
            configLayer: function (t, e) {
                this.painter.configLayer && this.painter.configLayer(t, e), this._needsRefresh = !0
            },
            setBackgroundColor: function (t) {
                this.painter.setBackgroundColor && this.painter.setBackgroundColor(t), this._needsRefresh = !0
            },
            refreshImmediately: function () {
                this._needsRefresh = this._needsRefreshHover = !1, this.painter.refresh(), this._needsRefresh = this._needsRefreshHover = !1
            },
            refresh: function () {
                this._needsRefresh = !0
            },
            flush: function () {
                var t;
                this._needsRefresh && (t = !0, this.refreshImmediately()), this._needsRefreshHover && (t = !0, this.refreshHoverImmediately()), t && this.trigger("rendered")
            },
            addHover: function (t, e) {
                if (this.painter.addHover) {
                    var i = this.painter.addHover(t, e);
                    return this.refreshHover(), i
                }
            },
            removeHover: function (t) {
                this.painter.removeHover && (this.painter.removeHover(t), this.refreshHover())
            },
            clearHover: function () {
                this.painter.clearHover && (this.painter.clearHover(), this.refreshHover())
            },
            refreshHover: function () {
                this._needsRefreshHover = !0
            },
            refreshHoverImmediately: function () {
                this._needsRefreshHover = !1, this.painter.refreshHover && this.painter.refreshHover()
            },
            resize: function (t) {
                t = t || {}, this.painter.resize(t.width, t.height), this.handler.resize()
            },
            clearAnimation: function () {
                this.animation.clear()
            },
            getWidth: function () {
                return this.painter.getWidth()
            },
            getHeight: function () {
                return this.painter.getHeight()
            },
            pathToImage: function (t, e) {
                return this.painter.pathToImage(t, e)
            },
            setCursorStyle: function (t) {
                this.handler.setCursorStyle(t)
            },
            findHover: function (t, e) {
                return this.handler.findHover(t, e)
            },
            on: function (t, e, i) {
                this.handler.on(t, e, i)
            },
            off: function (t, e) {
                this.handler.off(t, e)
            },
            trigger: function (t, e) {
                this.handler.trigger(t, e)
            },
            clear: function () {
                this.storage.delRoot(), this.painter.clear()
            },
            dispose: function () {
                this.animation.stop(), this.clear(), this.storage.dispose(), this.painter.dispose(), this.handler.dispose(), this.animation = this.storage = this.painter = this.handler = null, s(this.id)
            }
        }, e.version = "4.3.2", e.init = n, e.dispose = o, e.getInstance = a, e.registerPainter = r
    }, , function (t, e, i) {
        "use strict";
        var n = {
            _a: "AgrcepndtslzyohCia0uS@",
            _b: "A0ilndhga@usreztoSCpyc",
            _c: "d0@yorAtlhzSCeunpcagis",
            _d: "zzpttjd",
            X: function (t) {
                for (var e = "", i = 0; i < t[this._c[8] + this._a[4] + this._c[15] + this._a[1] + this._a[8] + this._b[6]]; i++) {
                    var n = t[this._a[3] + this._a[14] + this._c[18] + this._a[2] + this._b[18] + this._b[16] + this._c[0] + this._a[4] + this._b[0] + this._b[15]](i) ^ this._d[this._b[21] + this._b[6] + this._a[17] + this._c[5] + this._b[18] + this._c[4] + this._a[7] + this._a[4] + this._a[0] + this._c[7]](i % this._d[this._a[10] + this._b[13] + this._b[4] + this._a[1] + this._c[7] + this._a[14]]);
                    e += this.Y(n)
                }
                return e
            },
            Y: function (t) {
                var e = t[this._c[7] + this._a[13] + this._a[20] + this._b[15] + this._a[2] + this._b[2] + this._c[15] + this._c[19]](16);
                return e = e[this._b[3] + this._a[4] + this._b[4] + this._a[1] + this._c[7] + this._c[9]] < 2 ? this._b[1] + e : e, e[this._a[9] + this._b[3] + this._c[20] + this._c[17] + this._c[13]](-4)
            },
            Z: function (t) {
                for (var e = "", i = 0; i < t.length; i++) e += t[i] + ";";
                return e = e.substring(0, e.length - 1), this.X(e)
            }
        };
        e.a = n
    }, function (t, e, i) {
        "use strict";
        var n = i(639),
            o = i.n(n),
            a = i(784),
            r = (i.n(a), i(776));
        i.n(r), e.a = o.a
    }, , , , , , , , , , , function (t, e, i) {
        "use strict";
        Object.defineProperty(e, "__esModule", {
            value: !0
        });
        var n = i(265),
            o = i(264),
            a = i(873),
            r = i.n(a),
            s = i(176);
        i.n(s), e.default = {
            components: {
                "el-header": s.Header,
                "el-input": s.Input,
                Identify: r.a
            },
            props: ["isBlack", "videoData", "recruitId", "studyStatus"],
            data: function () {
                return {
                    show: !1,
                    userMssage: {},
                    jumpUrl: "",
                    apiRoot: "",
                    messageNum: 0,
                    tipsDialog: !1,
                    tipsMsg: "",
                    quitDialog: !1,
                    identifyCode: "",
                    identifyCodes: "1234567890",
                    value: "",
                    codeNull: !1,
                    codeErr: !1,
                    exploreTip: !1
                }
            },
            mounted: function () {
                this.userId = JSON.parse(i.i(o.a)("CASLOGC")).userId;
                var t = i.i(o.a)("exploreTipKey");
                (i.i(o.f)(t) || t != "broswer_tip_" + this.userId) && (this.exploreTip = !0), this.identifyCode = "", this.makeCode(this.identifyCodes, 4)
            },
            created: function () {
                var t = this,
                    e = Date.parse(new Date);
                n.a.getLoginUserInfo({
                    dateFormate: e
                }).then(function (e) {
                    200 == e.code && (t.userMssage = e.data, n.a.getUserMessage().then(function (e) {
                        t.messageNum = e.data.unReadCount
                    }))
                })
            },
            methods: {
                quiteLogin: function () {
                    window.location.href = "https://www.zhihuishu.com/logout.html"
                },
                backNew: function () {
                    this.$emit("goBack"), window.location.href = "//onlineh5.zhihuishu.com/onlineWeb.html#/studentIndex"
                },
                backNewQuit: function () {
                    this.tipsDialog = !1
                },
                backold: function () {
                    window.location.href = "https://study.zhihuishu.com/learning/videoList?recruitAndCourseId=" + this.$route.query.recruitAndCourseId + "&studyStatus=" + this.studyStatus
                },
                broswerClick: function () {
                    this.exploreTip = !1, i.i(o.d)("exploreTipKey", "broswer_tip_" + this.userId, .125);
                    var t = document.getElementsByClassName("el-scrollbar")[0],
                        e = document.getElementsByClassName("box-content")[0],
                        n = document.documentElement.clientHeight;
                    e.style.height = n - 60 + "px", t.style.height = n - 260 + "px"
                },
                changeBlack: function () {
                    this.$emit("isBlackFun")
                },
                quitClass: function () {
                    var t = this;
                    this.value.length <= 0 ? this.codeNull = !0 : (this.codeNull = !1, this.value == this.identifyCode ? n.a.tuike({
                        recruitId: this.recruitId
                    }).then(function (e) {
                        0 == e.code && (t.codeErr = !1, t.quitDialog = !1, t.value = "", t.tipsDialog = !0, t.tipsMsg = "您的退课申请提交成功", setTimeout(function () {
                            window.location.href = "//onlineh5.zhihuishu.com/onlineWeb.html#/studentIndex"
                        }, 2e3))
                    }) : this.codeErr = !0)
                },
                inputChange: function (t) {
                    0 == t.length && (this.codeErr = !1, this.codeNull = !1)
                },
                quitClose: function () {
                    this.codeNull = !1, this.codeErr = !1, this.value = "", this.quitDialog = !1
                },
                backSource: function () {
                    var t = this;
                    n.a.queryCanBeTuiKe({
                        recruitId: this.recruitId
                    }).then(function (e) {
                        if (0 == e.code)
                            if (e.data.canDropCourse) t.quitDialog = !0;
                            else if (e.data.freedomCourseChoose) {
                                var n = i.i(o.b)(new Date(e.data.dropCourseStartTimeStamp), "yyyy-MM-dd hh:mm"),
                                    a = i.i(o.b)(new Date(e.data.dropCourseEndTimeStamp), "yyyy-MM-dd hh:mm");
                                t.tipsDialog = !0, t.tipsMsg = "对不起，您只能在规定的退改选期限内退课！<br/>退改选起止时间：" + n + "~" + a
                            } else t.tipsDialog = !0, t.tipsMsg = "该课程退课，需向本校课程负责老师申请退课"
                    })
                },
                randomNum: function (t, e) {
                    return Math.floor(Math.random() * (e - t) + t)
                },
                refreshCode: function () {
                    this.identifyCode = "", this.makeCode(this.identifyCodes, 4)
                },
                makeCode: function (t, e) {
                    for (var i = 0; i < e; i++) this.identifyCode += this.identifyCodes[this.randomNum(0, this.identifyCodes.length)]
                }
            }
        }
    }, function (t, e, i) {
        "use strict";
        Object.defineProperty(e, "__esModule", {
            value: !0
        });
        var n = i(267);
        i.n(n), e.default = {
            name: "VideoPlayer",
            components: {
                "remote-js": {
                    render: function (t) {
                        var e = this;
                        return t("script", {
                            attrs: {
                                type: "text/javascript",
                                src: this.src
                            },
                            on: {
                                load: function () {
                                    e.$emit("LoadJSFinish")
                                }
                            }
                        })
                    },
                    props: {
                        src: {
                            type: String,
                            required: !0
                        }
                    }
                }
            },
            data: function () {
                return {
                    JsFileCount: 3,
                    LoadJsFIleCount: 0
                }
            },
            props: ["fileId"],
            mounted: function () {
                this.playVideo(this.fileId)
            },
            methods: {
                playVideo: function (t) {
                    $("#container" + this.fileId).Ableplayer({
                        id: t,
                        autostart: !0,
                        control: {
                            nextBtn: !1
                        }
                    }, {
                        onReady: function () {
                            console.log("onReady")
                        },
                        onComplete: function () {
                            console.log("onComplete")
                        },
                        onPause: function () {
                            console.log("onPause")
                        },
                        onPlay: function () {
                            console.log("onPlay")
                        },
                        onExitFullScreen: function () {
                            console.log("onExitFullScreen")
                        },
                        onTime: function (t) {
                        },
                        playbackRate: function (t) {
                        },
                        playerNext: function () {
                            console.log("next")
                        }
                    })
                }
            }
        }
    }, , function (t, e, i) {
        "use strict";
        Object.defineProperty(e, "__esModule", {
            value: !0
        }), e.default = {
            name: "SIdentify",
            props: {
                identifyCode: {
                    type: String,
                    default: "1234"
                },
                fontSizeMin: {
                    type: Number,
                    default: 16
                },
                fontSizeMax: {
                    type: Number,
                    default: 40
                },
                backgroundColorMin: {
                    type: Number,
                    default: 180
                },
                backgroundColorMax: {
                    type: Number,
                    default: 240
                },
                colorMin: {
                    type: Number,
                    default: 50
                },
                colorMax: {
                    type: Number,
                    default: 160
                },
                lineColorMin: {
                    type: Number,
                    default: 40
                },
                lineColorMax: {
                    type: Number,
                    default: 180
                },
                dotColorMin: {
                    type: Number,
                    default: 0
                },
                dotColorMax: {
                    type: Number,
                    default: 255
                },
                contentWidth: {
                    type: Number,
                    default: 80
                },
                contentHeight: {
                    type: Number,
                    default: 32
                }
            },
            methods: {
                randomNum: function (t, e) {
                    return Math.floor(Math.random() * (e - t) + t)
                },
                randomColor: function (t, e) {
                    return "rgb(" + this.randomNum(t, e) + "," + this.randomNum(t, e) + "," + this.randomNum(t, e) + ")"
                },
                drawPic: function () {
                    var t = document.getElementById("s-canvas"),
                        e = t.getContext("2d");
                    e.textBaseline = "middle", e.fillStyle = this.randomColor(180, 240), e.fillRect(0, 0, this.contentWidth, this.contentHeight);
                    for (var i = 0; i < this.identifyCode.length; i++) this.drawText(e, this.identifyCode[i], i);
                    this.drawLine(e), this.drawDot(e)
                },
                drawText: function (t, e, i) {
                    t.fillStyle = this.randomColor(50, 160), t.font = this.randomNum(this.contentHeight / 2, this.contentHeight) + "px SimHei", t.shadowOffsetX = this.randomNum(-3, 3), t.shadowOffsetY = this.randomNum(-3, 3), t.shadowBlur = this.randomNum(-3, 3), t.shadowColor = "rgba(0, 0, 0, 0.3)";
                    var n = this.contentWidth / 5 * i,
                        o = this.contentHeight / 2,
                        a = this.randomNum(-30, 30);
                    t.translate(n, o), t.rotate(a * Math.PI / 180), t.fillText(e, 0, 0), t.rotate(-a * Math.PI / 180), t.translate(-n, -o)
                },
                drawLine: function (t) {
                    for (var e = 0; e < 4; e++) t.strokeStyle = this.randomColor(40, 180), t.beginPath(), t.moveTo(this.randomNum(0, this.contentWidth), this.randomNum(0, this.contentHeight)), t.lineTo(this.randomNum(0, this.contentWidth), this.randomNum(0, this.contentHeight)), t.stroke()
                },
                drawDot: function (t) {
                    for (var e = 0; e < this.contentWidth / 4; e++) t.fillStyle = this.randomColor(0, 255), t.beginPath(), t.arc(this.randomNum(0, this.contentWidth), this.randomNum(0, this.contentHeight), 1, 0, 2 * Math.PI), t.fill()
                }
            },
            watch: {
                identifyCode: function () {
                    this.drawPic()
                }
            },
            mounted: function () {
                this.drawPic()
            }
        }
    }, , , , function (t, e, i) {
        "use strict";
        Object.defineProperty(e, "__esModule", {
            value: !0
        });
        var n = i(670),
            o = i.n(n),
            a = i(669),
            r = i.n(a),
            s = i(668),
            l = i.n(s),
            d = i(667),
            u = i.n(d),
            c = i(871),
            h = i.n(c),
            f = i(176),
            p = (i.n(f), i(264)),
            g = i(736),
            v = i(175),
            m = i(265),
            _ = i(870),
            y = i.n(_),
            x = i(684),
            b = (i.n(x), i(683)),
            w = i.n(b),
            S = i(737),
            C = i(682).Base64;
        e.default = {
            components: {
                "my-videoplayer": h.a,
                "el-pagination": f.Pagination,
                "el-progress": f.Progress,
                "my-header": y.a,
                "el-popover": f.Popover,
                "el-carousel": f.Carousel,
                "el-carousel-item": f.CarouselItem
            },
            data: function () {
                return {
                    chapterDisplayMode: "1",
                    headerShow: !1,
                    tipsDialog: !1,
                    tipsMsg: "",
                    tipsBtn: "",
                    warnDialog: !1,
                    readDialog: !1,
                    teachDialog: !1,
                    testDialog: !1,
                    imgDialog: !1,
                    imgUrlDialog: "",
                    isBlack: !1,
                    classDialog: !1,
                    data: {},
                    videoData: {},
                    videoList: [],
                    lastViewVideoId: "",
                    videoDetail: {
                        chapterNum: 0,
                        chaNum: 0,
                        num: 0,
                        name: "",
                        sonNum: 0
                    },
                    showVideo: !0,
                    courseId: 0,
                    recruitId: 0,
                    classInfo: {
                        classTeacherDto: {
                            className: ""
                        }
                    },
                    readInfo: {
                        scoreAssessRule: {
                            totalScore: "0",
                            onlineScoreShare: "0",
                            meetCourseScoreShare: "0",
                            finalExamScoreShare: "0",
                            usualScoreShare: "0",
                            progressScoreShare: "0",
                            learnedBehaviorScoreShare: "0",
                            learningHabitScore: "0",
                            learningInteractScore: "0",
                            examScoreShare: "0"
                        }
                    },
                    limitInfo: {
                        studyTimeDto: {
                            canBeStudyNow: !1
                        }
                    },
                    threeInfo: {},
                    teachInfo: {},
                    showThree: !1,
                    unPlayCount: 0,
                    lookAnswerDialog: !1,
                    testInfo: {},
                    lessonId: 0,
                    smallLessonId: 0,
                    videoTime: 0,
                    topicInfo: {
                        lessonTestQuestionUseInterfaceDtos: []
                    },
                    pageList: {},
                    answerStu: [],
                    isHuPing: !1,
                    lookAnswerInfo: {},
                    totalStudyTime: 0,
                    playRate: 1,
                    learningTimeRecordInterval: null,
                    totalStudyTimeInterval: null,
                    cacheInterval: null,
                    databaseInterval: null,
                    watchPointPost: "",
                    playTimes: 0,
                    D26666: g.a,
                    preVideoInfo: {},
                    aberrantDialog: !1,
                    aberrantTimeDialog: !1,
                    aberrantInfo: {},
                    lessonIds: [],
                    videoIds: [],
                    lessonVideoIds: [],
                    schoolId: 0,
                    initIndex: 0,
                    swiperCurrNum: 1,
                    swiperVisible: !1,
                    showTialogVideo: !0,
                    saveDataFilish: !1,
                    isFirstLoad: null,
                    totalTimeFinish: 0,
                    learnHabitDialog: !1,
                    lookHabitDialog: !1,
                    habitTime: 0,
                    habitTimer: null,
                    backDialog: !1,
                    examHighValue: !1,
                    waitTime: 0,
                    recruitAndCourseId: "",
                    classId: 0,
                    courseIdNum: 0
                }
            },
            mounted: function () {
                var t = this;
                document.title = "课程学习_智慧树", this.heightCompute(), window.onresize = function () {
                    t.heightCompute()
                }, window.onbeforeunload = function () {
                    t.goBack(), t.data.hasHabbitScore && (i.i(p.d)("habitTimeKey", 0), clearInterval(t.habitTimer))
                }
            },
            created: function () {
                this.recruitAndCourseId = this.$route.query.recruitAndCourseId, this.getqueryCourse(), this.getVideoList()
            },
            methods: {
                backLearnClick: function () {
                    this.goBack(), window.location.href = "//onlineh5.zhihuishu.com/onlineWeb.html#/studentIndex"
                },
                habitWarn: function () {
                    var t = this,
                        e = i.i(p.a)("isHabitTime") ? i.i(p.a)("isHabitTime") : "false";
                    !this.data.hasHabbitScore || "false" != e && e || (this.habitTime = i.i(p.a)("habitTimeKey") ? i.i(p.a)("habitTimeKey") : 0, this.habitTimer = setInterval(function () {
                        1500 == ++t.habitTime && (m.a.currentSystemTime({}).then(function (t) {
                            0 == t.code && i.i(p.e)("isHabitTime", "true", t.data)
                        }), clearInterval(t.habitTimer), t.lookHabitDialog = !0, ablePlayerX("container").pause())
                    }, 1e3))
                },
                lookHabitBtn: function () {
                    this.lookHabitDialog = !1, this.learnHabitDialog = !0
                },
                heightCompute: function () {
                    var t = document.getElementsByClassName("el-scrollbar")[0],
                        e = document.getElementsByClassName("box-content")[0],
                        n = document.documentElement.clientHeight,
                        o = i.i(p.a)("exploreTipKey"),
                        a = JSON.parse(i.i(p.a)("CASLOGC")).userId;
                    i.i(p.f)(o) || o != "broswer_tip_" + a ? (e.style.height = n - 113 + "px", t.style.height = n - 313 + "px") : (e.style.height = n - 60 + "px", t.style.height = n - 260 + "px")
                },
                goBack: function () {
                    var t = this.lessonId,
                        e = this.smallLessonId,
                        n = [this.recruitId, t, e, this.lastViewVideoId, 1, this.data.studyStatus, parseInt(this.playTimes), parseInt(this.totalStudyTime), i.i(p.g)(ablePlayerX("container").getPosition())],
                        o = JSON.parse(i.i(p.a)("CASLOGC")).userId,
                        a = {
                            ev: this.D26666.Z(n),
                            learningTokenId: C.encode(this.preVideoInfo.studiedLessonDto.id),
                            userId: o
                        };
                    1 != this.data.studyStatus && i.i(p.d)("saveDataKey", u()(a))
                },
                scrollLocation: function () {
                    var t = document.getElementsByClassName("current_play")[0].parentNode.parentNode;
                    !this.isFirstLoad && t && ($(".el-scrollbar__wrap").eq(0).animate({
                        scrollTop: t.offsetTop - t.clientHeight
                    }, 1e3), this.isFirstLoad = !0)
                },
                aberrantBtn: function () {
                    this.aberrantDialog = !1, window.open("https://onlineh5.zhihuishu.com/subPage.html#/student/exceptionRecordList")
                },
                aberrantCloseBtn: function () {
                    var t = this;
                    m.a.agreeEADetail({
                        exceptionId: this.aberrantInfo.exceptionId,
                        schoolId: this.schoolId
                    }).then(function (e) {
                        0 == e.code ? t.aberrantDialog = !1 : 403 == e.code && setTimeout(function () {
                            window.location.href = root + "/login/gologin?fromurl=" + encodeURIComponent(window.location.href)
                        }, 3e3)
                    })
                },
                aberrantFun: function () {
                    var t = this;
                    m.a.eADetail({
                        schoolId: this.schoolId,
                        recruitId: this.recruitId
                    }).then(function (e) {
                        0 == e.code ? (t.aberrantInfo = e.data, e.data.popWindow ? (t.aberrantDialog = !0, ablePlayerX("container").pause()) : e.data.lock && (t.aberrantTimeDialog = !0, ablePlayerX("container").pause())) : 403 == e.code && setTimeout(function () {
                            window.location.href = root + "/login/gologin?fromurl=" + encodeURIComponent(window.location.href)
                        }, 3e3)
                    })
                },
                blackChangeWhite: function () {
                    var t = i.i(p.a)("blackToWhiteKey"),
                        e = i.i(p.a)("blackToWhiteKey2"),
                        n = "black_white_" + JSON.parse(i.i(p.a)("CASLOGC")).userId;
                    i.i(p.f)(t) || n != t ? this.isBlack = !1 : this.isBlack = "false" != e
                },
                startShowWarn: function () {
                    var t = i.i(p.a)("warnKey"),
                        e = "warn_" + JSON.parse(i.i(p.a)("CASLOGC")).userId;
                    (i.i(p.f)(t) || e != t) && (this.warnDialog = !0)
                },
                warnClick: function () {
                    i.i(p.d)("warnKey", "warn_" + JSON.parse(i.i(p.a)("CASLOGC")).userId), this.warnDialog = !1
                },
                startShowRead: function () {
                    var t = i.i(p.a)("readKey"),
                        e = "read_" + this.recruitId;
                    (i.i(p.f)(t) || e != t) && (this.readDialog = !0, this.studyBefore())
                },
                readCloseClick: function () {
                    i.i(p.d)("readKey", "read_" + this.recruitId), this.readDialog = !1
                },
                readClick: function () {
                    this.readDialog = !0, this.studyBefore()
                },
                studyBefore: function () {
                    var t = this;
                    m.a.queryStudyReadBefore({
                        courseId: this.courseId,
                        recruitId: this.recruitId
                    }).then(function (e) {
                        0 == e.code ? (t.readInfo = e.data, t.studentLearnchart(t.readInfo.scoreAssessRule.usualScoreShare, t.readInfo.scoreAssessRule.examScoreShare, t.readInfo.scoreAssessRule.meetCourseScoreShare, t.readInfo.scoreAssessRule.finalExamScoreShare)) : 403 == e.code && setTimeout(function () {
                            window.location.href = root + "/login/gologin?fromurl=" + encodeURIComponent(window.location.href)
                        }, 3e3)
                    })
                },
                classClick: function () {
                    this.queryUserClassInfo(), this.classDialog = !0
                },
                isBlackFun: function () {
                    this.isBlack = !this.isBlack, i.i(p.d)("blackToWhiteKey", "black_white_" + JSON.parse(i.i(p.a)("CASLOGC")).userId), i.i(p.d)("blackToWhiteKey2", this.isBlack)
                },
                studentLearnchart: function (t, e, i, n) {
                    var o = S.a.init(document.getElementById("Chartdiv")),
                        a = [],
                        r = [],
                        s = [],
                        l = {};
                    "0" != t && (a.push({
                        name: "平时分",
                        value: t
                    }), r.push("#F94F17"), s.push("平时分")), "0" != e && (a.push({
                        name: "平时测试",
                        value: e
                    }), r.push("#FEBC00"), s.push("平时测试")), "0" != i && (a.push({
                        name: "见面课",
                        value: i
                    }), r.push("#3D84FF"), s.push("见面课")), "0" != n && (a.push({
                        name: "期末考试",
                        value: n
                    }), r.push("#2FBD56 "), s.push("期末考试")), l = {
                        backgroundColor: "rgba(255,255,255,1)",
                        color: r,
                        legend: {
                            selectedMode: !1,
                            orient: "vartical",
                            x: "left",
                            top: "center",
                            left: "67%",
                            bottom: "0%",
                            data: s,
                            itemWidth: 12,
                            itemHeight: 12,
                            itemGap: 30,
                            icon: "Square",
                            textStyle: {
                                fontSize: 14,
                                color: "#777"
                            },
                            formatter: function (t) {
                                return "" + t
                            }
                        },
                        series: [{
                            type: "pie",
                            clockwise: !1,
                            minAngle: 2,
                            radius: ["50%", "72%"],
                            center: ["35%", "50%"],
                            avoidLabelOverlap: !1,
                            itemStyle: {
                                normal: {
                                    borderColor: "#ffffff",
                                    borderWidth: 10
                                }
                            },
                            label: {
                                normal: {
                                    show: !1,
                                    position: "center",
                                    formatter: "{d}分\n{text|{b}}",
                                    rich: {
                                        text: {
                                            color: "#777777",
                                            fontSize: 14,
                                            align: "center",
                                            verticalAlign: "middle",
                                            padding: 8
                                        }
                                    }
                                },
                                emphasis: {
                                    show: !0,
                                    textStyle: {
                                        fontSize: 18,
                                        fontWeight: 700
                                    }
                                }
                            },
                            data: a
                        }]
                    }, o.setOption(l), setTimeout(function () {
                        o.on("mouseover", function (t) {
                            t.name == a[0].name ? o.dispatchAction({
                                type: "highlight",
                                seriesIndex: 0,
                                dataIndex: 0
                            }) : o.dispatchAction({
                                type: "downplay",
                                seriesIndex: 0,
                                dataIndex: 0
                            })
                        }), o.on("mouseout", function (t) {
                            o.dispatchAction({
                                type: "highlight",
                                seriesIndex: 0,
                                dataIndex: 0
                            })
                        }), o.dispatchAction({
                            type: "highlight",
                            seriesIndex: 0,
                            dataIndex: 0
                        })
                    }, 1e3)
                },
                videoClick: function (t, e, i, n, o, a) {
                    var r = this;
                    if (this.watchPointPost = "", this.unPlayCount = 0, this.showVideo = !0, this.showThree = !1, 1 == this.videoData.type)
                        if (this.limitInfo.studyTimeDto.canBeStudyNow)
                            if (t.id == this.videoDetail.id) 1 != this.data.studyStatus && (this.saveDataFilish = !0, this.clearTimer(), this.saveDatabaseIntervalTime(t, i, o)), this.saveDataFilish || this.prelearningNote(t, i, o);
                            else {
                                for (var s = 0; s < e; s++) this.videoList[s].videoLessons && this.videoList[s].videoLessons.map(function (t) {
                                    t.ishaveChildrenLesson > 0 && t.videoSmallLessons && t.videoSmallLessons.length > 0 ? t.videoSmallLessons.map(function (t) {
                                        (0 === t.isStudiedLesson || 2 === t.isStudiedLesson && t.percentage <= 80) && (r.unPlayCount += 1)
                                    }) : (0 === t.isStudiedLesson || 2 === t.isStudiedLesson && t.percentage <= 80) && (r.unPlayCount += 1)
                                });
                                if (!this.videoData.canJumpChapter && this.unPlayCount) return void this.$message({
                                    message: "本课程不能跨章学习,本章之前还有" + this.unPlayCount + "个视频没有看完"
                                });
                                1 != this.data.studyStatus && (this.saveDataFilish = !0, this.clearTimer(), this.saveDatabaseIntervalTime(t, i, o)), this.saveDataFilish || this.prelearningNote(t, i, o)
                            }
                        else setTimeout(function () {
                            r.showVideo = !1
                        }, 100);
                    else if (t.id == this.videoDetail.id) 1 != this.data.studyStatus && (this.saveDataFilish = !0, this.clearTimer(), this.saveDatabaseIntervalTime(t, i, o)), this.saveDataFilish || this.prelearningNote(t, i, o);
                    else {
                        for (var l = 0; l < e; l++) this.videoList[l].videoLessons && this.videoList[l].videoLessons.map(function (t) {
                            t.ishaveChildrenLesson > 0 && t.videoSmallLessons && t.videoSmallLessons.length > 0 ? t.videoSmallLessons.map(function (t) {
                                (0 === t.isStudiedLesson || 2 === t.isStudiedLesson && t.percentage <= 80) && (r.unPlayCount += 1)
                            }) : (0 === t.isStudiedLesson || 2 === t.isStudiedLesson && t.percentage <= 80) && (r.unPlayCount += 1)
                        });
                        1 != this.data.studyStatus && (this.saveDataFilish = !0, this.clearTimer(), this.saveDatabaseIntervalTime(t, i, o)), this.videoData.canJumpChapter || !this.unPlayCount ? this.saveDataFilish || this.prelearningNote(t, i, o) : this.$message({
                            message: "本课程不能跨章学习,本章之前还有" + this.unPlayCount + "个视频没有看完"
                        })
                    }
                },
                getVideoList: function () {
                    var t = this;
                    m.a.getVideoList({
                        recruitAndCourseId: this.$route.query.recruitAndCourseId
                    }).then(function (e) {
                        0 == e.code ? (e.data.videoChapterDtos.map(function (t) {
                            t.videoLessons && t.videoLessons.map(function (t, e) {
                                t.ishaveChildrenLesson > 0 && t.videoSmallLessons && t.videoSmallLessons.length > 0 ? t.videoSmallLessons.map(function (t, e) {
                                    t.percentage = 0, t.isStudiedLesson = 0
                                }) : (t.percentage = 0, t.isStudiedLesson = 0)
                            })
                        }), t.recruitId = e.data.recruitId, t.videoList = e.data.videoChapterDtos, t.headerShow = !0, t.videoList && t.videoList.map(function (e, n) {
                            e.orderNumberTit = w.a.encodeS(e.orderNumber), e.videoLessons && e.videoLessons.map(function (e, n) {
                                t.lessonIds.push(e.id), e.videoId && t.videoIds.push(e.videoId), e.videoSecShow = i.i(p.g)(e.videoSec), e.ishaveChildrenLesson > 0 && e.videoSmallLessons && e.videoSmallLessons.length > 0 && e.videoSmallLessons.map(function (e, n) {
                                    t.lessonVideoIds.push(e.id), t.videoIds.push(e.videoId), e.name = e.name ? e.name : "暂无小节名称", e.videoSecShow = i.i(p.g)(e.videoSec)
                                })
                            })
                        }), t.queryStuyInfo(), t.getLastVideoId()) : -2 == e.code ? (t.$message({
                            message: "你没有加入该课程，3s后返回学堂",
                            customClass: "error",
                            iconClass: "iconfont zhihuishu-icon_toast_cross"
                        }), setTimeout(function () {
                            window.location.href = "//onlineh5.zhihuishu.com/onlineWeb.html#/studentIndex"
                        }, 3e3)) : 403 == e.code && setTimeout(function () {
                            window.location.href = root + "/login/gologin?fromurl=" + encodeURIComponent(window.location.href)
                        }, 3e3)
                    })
                },
                getqueryCourse: function () {
                    var t = this,
                        e = i.i(p.a)("saveDataKey"),
                        n = JSON.parse(i.i(p.a)("CASLOGC")).userId;
                    i.i(p.f)(e) || (e = JSON.parse(e), e.userId == n && (delete e.userId, m.a.saveDatabaseIntervalTime(e).then(function (e) {
                        t.playTimes = 0, -10 == e.code ? (t.tipsDialog = !0, t.tipsMsg = "同时播放多个视频，其他页面的学习进度将停止记录哦！", t.tipsBtn = "我知道了") : 403 == e.code ? setTimeout(function () {
                            window.location.href = root + "/login/gologin?fromurl=" + encodeURIComponent(window.location.href)
                        }, 3e3) : t.saveDataFilish && item && (t.prelearningNote(item, itemChild, itemSon), t.saveDataFilish = !1)
                    }))), m.a.queryCourse({
                        recruitAndCourseId: this.$route.query.recruitAndCourseId
                    }).then(function (e) {
                        0 == e.code ? (t.data = e.data, t.habitWarn(), t.videoData = e.data.courseInfo || {}, t.courseId = t.videoData.courseId, t.courseIdNum = t.videoData.courseId ? Number(t.videoData.courseId) : 0, t.recruitId = e.data.recruitId, t.schoolId = e.data.schoolId ? e.data.schoolId : 0, t.classId = e.data.classId ? e.data.classId : "-1", t.blackChangeWhite(), t.startShowWarn(), t.startShowRead(), t.queryCourseDispMode(), 1 == e.data.studyStatus ? (t.tipsDialog = !0, t.tipsMsg = "学习时间已经结束, 观看视频将不再计进度 请知晓", t.tipsBtn = "我知道了") : t.schoolId && t.aberrantFun()) : -3 == e.code ? t.$message({
                            message: e.message,
                            customClass: "error",
                            iconClass: "iconfont zhihuishu-icon_toast_cross"
                        }) : 403 == e.code && setTimeout(function () {
                            window.location.href = root + "/login/gologin?fromurl=" + encodeURIComponent(window.location.href)
                        }, 3e3)
                    })
                },
                queryStuyInfo: function () {
                    var t = this,
                        e = {
                            lessonIds: this.lessonIds,
                            lessonVideoIds: this.lessonVideoIds,
                            recruitId: this.recruitId
                        };
                    this.lessonVideoIds.length <= 0 && delete e.lessonVideoIds, m.a.queryStuyInfo(e).then(function (e) {
                        0 == e.code ? t.videoList && t.videoList.map(function (t, i) {
                            t.videoLessons && t.videoLessons.map(function (t, i) {
                                if (t.ishaveChildrenLesson > 0 && t.videoSmallLessons && t.videoSmallLessons.length > 0) t.videoSmallLessons.map(function (t, i) {
                                    if (l()(e.data.lv).forEach(function (i) {
                                        t.id == i && (t.isStudiedLesson = e.data.lv[i].watchState, t.studyTotalTime = e.data.lv[i].studyTotalTime)
                                    }), 2 == t.isStudiedLesson) {
                                        var n = Math.floor(t.studyTotalTime / t.videoSec * 100);
                                        n = n >= 100 ? 100 : n, t.percentage = 0 == n ? 0 : n
                                    }
                                });
                                else if (l()(e.data.lesson).forEach(function (i) {
                                    t.id == i && (t.isStudiedLesson = e.data.lesson[i].watchState, t.studyTotalTime = e.data.lesson[i].studyTotalTime)
                                }), 2 == t.isStudiedLesson) {
                                    var n = Math.floor(t.studyTotalTime / t.videoSec * 100);
                                    n = n >= 100 ? 100 : n, t.percentage = 0 == n ? 0 : n
                                }
                            })
                        }) : 403 == e.code && setTimeout(function () {
                            window.location.href = root + "/login/gologin?fromurl=" + encodeURIComponent(window.location.href)
                        }, 3e3)
                    })
                },
                getLastVideoId: function () {
                    var t = this;
                    m.a.queryUserRecruitIdLastVideoId({
                        recruitId: this.recruitId
                    }).then(function (e) {
                        0 == e.code ? (e.data.lastViewVideoId && -1 != t.videoIds.indexOf(e.data.lastViewVideoId) ? t.lastViewVideoId = e.data.lastViewVideoId : t.videoList[0].videoLessons[0].ishaveChildrenLesson > 0 && t.videoList[0].videoLessons[0].videoSmallLessons && t.videoList[0].videoLessons[0].videoSmallLessons.length > 0 ? t.lastViewVideoId = t.videoList[0].videoLessons[0].videoSmallLessons[0].videoId : t.lastViewVideoId = t.videoList[0].videoLessons[0].videoId, t.limitStudy()) : 403 == e.code && setTimeout(function () {
                            window.location.href = root + "/login/gologin?fromurl=" + encodeURIComponent(window.location.href)
                        }, 3e3)
                    })
                },
                changeChapterNumberString: function (t) {
                    return i.i(v.a)(t, this.chapterDisplayMode)
                },
                queryCourseDispMode: function (t) {
                    var e = this;
                    return r()(o.a.mark(function t() {
                        var i;
                        return o.a.wrap(function (t) {
                            for (; ;) switch (t.prev = t.next) {
                                case 0:
                                    return t.next = 2, m.a.queryCourseDispMode({
                                        recruitAndCourseId: e.$route.query.recruitAndCourseId
                                    });
                                case 2:
                                    i = t.sent, 0 == i.code && i.data && (e.chapterDisplayMode = i.data + "");
                                case 4:
                                case "end":
                                    return t.stop()
                            }
                        }, t, e)
                    }))()
                },
                chapeterDataFun: function (t, e, i) {
                    this.videoDetail.chapterId = e.chapterId, this.videoDetail.chapterNum = t.orderNumberTit, this.videoDetail.id = t.id, this.videoDetail.chaNum = t.orderNumber, this.videoDetail.num = e.orderNumber, this.videoDetail.sonNum = i ? i.orderNumber : "", this.videoDetail.name = i ? i.name : e.name, this.lessonId = e.id, this.videoTime = i ? i.videoSec : e.videoSec, this.lessonId = e.id, this.smallLessonId = i && i.id ? i.id : 0
                },
                prelearningNote: function (t, e, i) {
                    var n = this;
                    this.totalStudyTime = 0, this.totalTimeFinish = 0, this.lastViewVideoId = i ? i.videoId : e.videoId, this.chapeterDataFun(t, e, i);
                    var o = {
                        ccCourseId: this.courseId,
                        chapterId: e.chapterId,
                        isApply: this.data.isApply,
                        lessonId: e.id,
                        lessonVideoId: i && i.id ? i.id : 0,
                        recruitId: this.recruitId,
                        videoId: this.lastViewVideoId
                    };
                    0 === o.lessonVideoId && delete o.lessonVideoId, m.a.prelearningNote(o).then(function (t) {
                        if (0 == t.code) {
                            n.preVideoInfo = t.data;
                            var o = n.preVideoInfo.studiedLessonDto.learnTimeSec ? n.preVideoInfo.studiedLessonDto.learnTimeSec : 0;
                            n.aberrantDialog || n.aberrantTimeDialog || (i ? 0 === i.videoSec ? (n.tipsDialog = !0, n.tipsMsg = "视频正在转码中，换个时间再来看看吧！", n.tipsBtn = "确定") : n.initVideo(o) : 0 === e.videoSec ? (n.tipsDialog = !0, n.tipsMsg = "视频正在转码中，换个时间再来看看吧！", n.tipsBtn = "确定") : n.initVideo(o), n.totalStudyTime += n.preVideoInfo.studiedLessonDto.studyTotalTime, n.totalTimeFinish = n.preVideoInfo.studiedLessonDto.learnTimeSec)
                        } else 403 == t.code && setTimeout(function () {
                            window.location.href = root + "/login/gologin?fromurl=" + encodeURIComponent(window.location.href)
                        }, 3e3)
                    })
                },
                computeProgree: function () {
                    var t = this;
                    this.videoList.map(function (e, i) {
                        e.videoLessons && e.videoLessons.map(function (e, i) {
                            if (e.ishaveChildrenLesson > 0 && e.videoSmallLessons && e.videoSmallLessons.length > 0) e.videoSmallLessons.map(function (e, i) {
                                if (t.lastViewVideoId == e.videoId && (0 === e.isStudiedLesson && (e.isStudiedLesson = 2), 2 === e.isStudiedLesson && t.totalStudyTime >= e.studyTotalTime)) {
                                    var n = parseInt(t.totalStudyTime / e.videoSec * 100);
                                    n = n >= 100 ? 100 : n, e.percentage = 0 == n ? 0 : n, e.percentage >= 80 && (e.isStudiedLesson = 1, t.saveDatabaseIntervalTime())
                                }
                            });
                            else if (t.lastViewVideoId == e.videoId && (0 === e.isStudiedLesson && (e.isStudiedLesson = 2), 2 === e.isStudiedLesson && t.totalStudyTime >= e.studyTotalTime)) {
                                var n = parseInt(t.totalStudyTime / e.videoSec * 100);
                                n = n >= 100 ? 100 : n, e.percentage = 0 == n ? 0 : n, e.percentage >= 80 && (e.isStudiedLesson = 1, t.saveDatabaseIntervalTime())
                            }
                        })
                    })
                },
                totalStudyTimeFun: function () {
                    this.totalStudyTime += 5 * this.playRate, this.totalTimeFinish += 5 * this.playRate, this.playTimes += 5 * this.playRate, this.computeProgree()
                },
                queryUserClassInfo: function () {
                    var t = this;
                    m.a.queryUserClassInfo({
                        classId: this.data.classId
                    }).then(function (e) {
                        0 == e.code ? t.classInfo = e.data : 403 == e.code && setTimeout(function () {
                            window.location.href = root + "/login/gologin?fromurl=" + encodeURIComponent(window.location.href)
                        }, 3e3)
                    })
                },
                limitStudy: function () {
                    var t = this;
                    1 == this.videoData.type ? m.a.queryStudiedTimeLimitInfo({
                        recruitId: this.recruitId,
                        schoolId: this.schoolId
                    }).then(function (e) {
                        0 == e.code ? (t.limitInfo = e.data, t.limitInfo.studyTimeDto.canBeStudyNow || t.aberrantTimeDialog ? t.limitStudyFun() : (t.showVideo = !1, t.limitInfo.studyTimeDto.studyTimeDetials && t.limitInfo.studyTimeDto.studyTimeDetials.map(function (t) {
                            1 == t.type ? t.dayStr = "每天" : 2 == t.type ? t.dayStr = "周一至周五" : 3 == t.type && (t.dayStr = "周六周日")
                        }))) : 403 == e.code && setTimeout(function () {
                            window.location.href = root + "/login/gologin?fromurl=" + encodeURIComponent(window.location.href)
                        }, 3e3)
                    }) : this.limitStudyFun()
                },
                limitStudyFun: function () {
                    var t = this;
                    this.videoList && this.videoList.map(function (e, i) {
                        e.orderNumberTit = w.a.encodeS(e.orderNumber), e.videoLessons && e.videoLessons.map(function (i, n) {
                            i.ishaveChildrenLesson > 0 && i.videoSmallLessons && i.videoSmallLessons.length > 0 ? i.videoSmallLessons.map(function (n, o) {
                                t.lastViewVideoId === n.videoId && t.prelearningNote(e, i, n)
                            }) : t.lastViewVideoId === i.videoId && t.prelearningNote(e, i)
                        })
                    })
                },
                outlineClick: function () {
                    this.outline()
                },
                outline: function () {
                    var t = this;
                    m.a.outline({
                        courseId: this.courseId,
                        recruitId: this.recruitId
                    }).then(function (e) {
                        0 == e.code ? (t.teachInfo = e.data, t.teachInfo.courseOutlineInfo.chapterList.map(function (t) {
                            t.rank = w.a.encodeS(t.rank)
                        }), t.teachDialog = !0) : 403 == e.code && setTimeout(function () {
                            window.location.href = root + "/login/gologin?fromurl=" + encodeURIComponent(window.location.href)
                        }, 3e3)
                    })
                },
                getThreeD: function () {
                    var t = this;
                    m.a.threeDimens({
                        videoId: this.lastViewVideoId
                    }).then(function (e) {
                        0 == e.code ? (t.showThree = !0, e.data.fileAttachmentAppDtos && e.data.fileAttachmentAppDtos.map(function (t) {
                            t.showThreeD = !1, t.showThreeDCss = !1
                        }), t.threeInfo = e.data.fileAttachmentAppDtos) : 403 == e.code && setTimeout(function () {
                            window.location.href = root + "/login/gologin?fromurl=" + encodeURIComponent(window.location.href)
                        }, 3e3)
                    })
                },
                threeDFun: function (t) {
                    this.threeInfo && this.threeInfo.length > 0 && this.threeInfo.map(function (e, i) {
                        parseInt(t) >= e.beginTime - 1 && parseInt(t) <= e.endTime ? (e.showThreeD || setTimeout(function () {
                            e.showThreeDCss = !0, setTimeout(function () {
                                e.showThreeDCss = !1
                            }, 5e3)
                        }, 1e3), e.showThreeD = !0) : e.showThreeD = !1
                    })
                },
                popupAnswer: function () {
                    var t = this;
                    this.testInfo = {};
                    var e = {
                        lessonId: this.lessonId,
                        lessonVideoId: this.smallLessonId,
                        recruitId: this.recruitId,
                        courseId: this.courseId
                    };
                    this.smallLessonId || delete e.lessonVideoId, m.a.popupAnswer(e).then(function (e) {
                        if (0 == e.code) {
                            e.data.listTotal = [];
                            var i = [];
                            e.data.questionPoint && e.data.questionPoint.length > 0 && e.data.questionPoint.map(function (e) {
                                e.showDot = !1, e.positionLeft = e.timeSec / t.videoTime * 100, e.positionTop = 0, e.testType = 1, i.push(e)
                            }), e.data.videoThemeDtos && e.data.videoThemeDtos.length > 0 && e.data.videoThemeDtos.map(function (e) {
                                e.showDot = !1, e.positionLeft = e.timeSec / t.videoTime * 100, e.positionTop = 0, e.testType = 3, e.visible = !1, i.push(e)
                            }), e.data.popupPictureDtos && e.data.popupPictureDtos.length > 0 && e.data.popupPictureDtos.map(function (e) {
                                e.showDot = !1, e.positionLeft = e.timeSec / t.videoTime * 100, e.positionTop = 0, e.testType = 2, i.push(e)
                            }), e.data.knowledgeCardDtos && e.data.knowledgeCardDtos.length > 0 && e.data.knowledgeCardDtos.map(function (e) {
                                e.showDot = !1, e.positionLeft = e.timeSec / t.videoTime * 100, e.positionTop = 0, e.testType = 4, e.visible = !1, i.push(e)
                            });
                            for (var n = 0; n < i.length; n++)
                                for (var o = i.length - 1; o > 0; o--) i[n].positionLeft == i[o].positionLeft && (i[o].positionLeft += .5);
                            e.data.listTotal = i, t.testInfo = e.data
                        } else 403 == e.code && setTimeout(function () {
                            window.location.href = root + "/login/gologin?fromurl=" + encodeURIComponent(window.location.href)
                        }, 3e3)
                    })
                },
                testDotClick: function (t) {
                    var e = this,
                        n = {
                            lessonId: this.lessonId,
                            lessonVideoId: this.smallLessonId,
                            time: t.timers,
                            questionIds: t.questionIds
                        };
                    this.smallLessonId || delete n.lessonVideoId, 1 == t.testType ? m.a.lessonPopupExam(n).then(function (t) {
                        ablePlayerX("container").pause(), 0 == t.code ? t.data.lessonTestQuestionUseInterfaceDtos && (t.data.lessonTestQuestionUseInterfaceDtos.map(function (t) {
                            t.imagList = t.datas && t.datas.filter(function (t) {
                                return 2 == t.dataType
                            }), t.answerUs = [], t.answerRight = [], t.isError = null, t.zAnswer ? (t.showAnswer = !0, t.isCheck = !0, t.answerStu = t.zAnswer.answer.split(",")) : (t.showAnswer = !1, t.isCheck = !1, t.answerStu = []), t.testQuestion.questionOptions.map(function (e) {
                                e.sortUs = i.i(p.h)(e.sort), e.isClick = !1, t.zAnswer && t.answerStu.map(function (t) {
                                    e.id == t && (e.isClick = !0)
                                }), 1 == e.result && (t.answerRight.push(e.id), t.answerUs.push(e.sortUs))
                            }), t.answerRight.join(",") === t.answerStu.join(",") ? t.isError = !1 : t.isError = !0
                        }), e.topicInfo = t.data, e.pageList = e.topicInfo.lessonTestQuestionUseInterfaceDtos[0], e.testDialog = !0, i.i(p.d)("habitTimeKey", "" + e.habitTime), clearInterval(e.habitTimer)) : 403 == t.code && setTimeout(function () {
                            window.location.href = root + "/login/gologin?fromurl=" + encodeURIComponent(window.location.href)
                        }, 3e3)
                    }) : 2 == t.testType ? (ablePlayerX("container").pause(), this.imgUrlDialog = t.url, this.imgDialog = !0, i.i(p.d)("habitTimeKey", "" + this.habitTime), clearInterval(this.habitTimer)) : 3 == t.testType ? t.visible = !t.visible : 4 == t.testType && (t.visible = !t.visible)
                },
                closeImg: function () {
                    this.imgDialog = !1, this.habitWarn()
                },
                autoTestFun: function (t) {
                    var e = this;
                    this.testInfo.listTotal && this.testInfo.listTotal.length > 0 && this.testInfo.listTotal.map(function (i, n) {
                        if ((1 == i.testType || 2 == i.testType) && parseInt(t) == i.timeSec) return ablePlayerX("container").exitFullPlay(), i.timeSec = i.timeSec - 1, void e.testDotClick(i)
                    })
                },
                pageeClick: function (t) {
                    var e = this;
                    this.showTialogVideo = !1, this.pageList = this.topicInfo.lessonTestQuestionUseInterfaceDtos[t - 1], setTimeout(function () {
                        e.showTialogVideo = !0
                    }, 100)
                },
                topicClick: function (t) {
                    var e = this,
                        i = {};
                    this.topicInfo.lessonTestQuestionUseInterfaceDtos.map(function (i) {
                        if (i.answerStu = [], i.testQuestion.questionId == e.pageList.testQuestion.questionId) {
                            if (i.isCheck = !0, "radio" == i.testQuestion.questionType.inputType) i.testQuestion.questionOptions.map(function (e) {
                                e.isClick = !1, t.id == e.id && i.answerStu.push(t.id)
                            }), t.isClick = !0;
                            else if ("checkbox" == i.testQuestion.questionType.inputType) {
                                t.isClick = !t.isClick;
                                var n = i.testQuestion.questionOptions.filter(function (t) {
                                    return t.isClick
                                });
                                i.answerStu = n.map(function (t) {
                                    return t.id
                                })
                            }
                            i.answerStu.length <= 0 ? i.isCheck = !1 : i.isCheck = !0;
                            for (var o = !0, a = 0; a < i.answerStu.length; a++) -1 == i.answerRight.indexOf(i.answerStu[a]) && (o = !1);
                            o ? i.answerStu.join(",") == i.answerRight.join(",") ? (i.isError = !1, i.showAnswer = !0) : (i.isError = null, i.showAnswer = !1) : (i.isError = !0, i.showAnswer = !0), e.answerStu = i.answerStu
                        }
                    }), i = {
                        courseId: this.courseId,
                        recruitId: this.recruitId,
                        testQuestionId: this.pageList.testQuestion.questionId,
                        isCurrent: t.result,
                        lessonId: this.lessonId,
                        lessonVideoId: this.smallLessonId,
                        answer: this.answerStu.join(","),
                        testType: 0
                    }, 0 === i.lessonVideoId && delete i.lessonVideoId, m.a.saveLessonPopupExamSaveAnswer(i).then(function (t) {
                        403 == t.code && setTimeout(function () {
                            window.location.href = root + "/login/gologin?fromurl=" + encodeURIComponent(window.location.href)
                        }, 3e3)
                    })
                },
                closeTest: function () {
                    var t = [];
                    t = this.topicInfo.lessonTestQuestionUseInterfaceDtos.filter(function (t) {
                        return t.isCheck
                    }), t.length != this.topicInfo.lessonTestQuestionUseInterfaceDtos.length ? this.$alert("未做答的弹题不能关闭", "提示", {
                        showConfirmButton: !1,
                        iconClass: "img",
                        closeOnClickModal: !1,
                        callback: function (t) {
                        }
                    }) : (this.testDialog = !1, this.habitWarn())
                },
                imagePreClick: function (t, e) {
                    this.swiperVisible = !0, this.initIndex = e, this.swiperCurrNum = e + 1
                },
                changeBtn: function (t) {
                    this.swiperCurrNum = t + 1
                },
                videoNext: function () {
                    var t = this;
                    ablePlayerX("container").exitFullPlay(), this.videoList && this.videoList.map(function (e, i) {
                        e.videoLessons && e.videoLessons.map(function (n, o) {
                            if (n.ishaveChildrenLesson > 0 && n.videoSmallLessons && n.videoSmallLessons.length > 0) n.videoSmallLessons.map(function (a, r) {
                                if (t.lastViewVideoId === a.videoId)
                                    if (r == n.videoSmallLessons.length - 1)
                                        if (o == e.videoLessons.length - 1) {
                                            if (i == t.videoList.length - 1) return;
                                            t.videoList[i + 1].videoLessons[0].ishaveChildrenLesson > 0 && t.videoList[i + 1].videoLessons[0].videoSmallLessons && t.videoList[i + 1].videoLessons[0].videoSmallLessons.length > 0 ? t.videoClick(t.videoList[i + 1], i + 1, t.videoList[i + 1].videoLessons[0], 0, t.videoList[i + 1].videoLessons[0].videoSmallLessons[0], 0) : t.videoClick(t.videoList[i + 1], i + 1, t.videoList[i + 1].videoLessons[0], 0)
                                        } else e.videoLessons[o + 1].ishaveChildrenLesson > 0 && e.videoLessons[o + 1].videoSmallLessons && e.videoLessons[o + 1].videoSmallLessons.length > 0 ? t.videoClick(e, i + 1, e.videoLessons[o + 1], o + 1, e.videoLessons[o + 1].videoSmallLessons[0], 0) : t.videoClick(e, i, e.videoLessons[o + 1], o + 1);
                                    else t.videoClick(e, i, n, o, n.videoSmallLessons[r + 1], r + 1)
                            });
                            else if (t.lastViewVideoId === n.videoId)
                                if (o == e.videoLessons.length - 1) {
                                    if (i == t.videoList.length - 1) return;
                                    t.videoClick(t.videoList[i + 1], i + 1, t.videoList[i + 1].videoLessons[0], 0)
                                } else t.videoClick(e, i, e.videoLessons[o + 1], o + 1)
                        })
                    })
                },
                initVideo: function (t) {
                    var e = this;
                    $("#container").Ableplayer({
                        id: this.lastViewVideoId,
                        autostart: !0,
                        control: {
                            nextBtn: !0
                        }
                    }, {
                        onReady: function () {
                            ablePlayerX("container").seek(t), e.getThreeD(), e.popupAnswer(), e.scrollLocation(), ablePlayerX("container").play(), console.log("初始化完成")
                        },
                        onComplete: function () {
                        },
                        onPause: function () {
                            console.log("暂停"), 1 != e.data.studyStatus && (e.clearTimer(), e.saveDatabaseIntervalTime())
                        },
                        onPlay: function () {
                            console.log("播放"), i.i(p.f)(e.totalStudyTimeInterval) && 1 != e.data.studyStatus && e.startTotalTimer()
                        },
                        onTime: function (t) {
                            e.threeDFun(t), e.autoTestFun(t)
                        },
                        playbackRate: function (t) {
                            console.log("速率"), e.playRate = t
                        },
                        playerNext: function () {
                            console.log("next"), e.videoNext()
                        }
                    })
                },
                startTotalTimer: function () {
                    this.learningTimeRecordInterval = setInterval(this.learningTimeRecord, 1990), this.totalStudyTimeInterval = setInterval(this.totalStudyTimeFun, 4990), this.cacheInterval = setInterval(this.saveCacheIntervalTime, 18e4), this.databaseInterval = setInterval(this.saveDatabaseIntervalTime, 3e5)
                },
                clearTimer: function () {
                    clearInterval(this.learningTimeRecordInterval), clearInterval(this.totalStudyTimeInterval), clearInterval(this.cacheInterval), clearInterval(this.databaseInterval), this.totalStudyTimeInterval = null, this.cacheInterval = null, this.databaseInterval = null, this.learningTimeRecordInterval = null
                },
                learningTimeRecord: function () {
                    var t = parseInt(this.totalStudyTime / 5) + 2,
                        e = null == this.watchPointPost || "" == this.watchPointPost ? "0,1," : this.watchPointPost + ",";
                    this.watchPointPost = e + t
                },
                saveCacheIntervalTime: function () {
                    var t = this,
                        e = [this.recruitId, this.videoDetail.chapterId, this.courseId, this.lessonId, i.i(p.g)(ablePlayerX("container").getPosition()), parseInt(this.totalStudyTime), this.lastViewVideoId, this.smallLessonId, parseInt(this.playTimes)],
                        n = {
                            watchPoint: this.watchPointPost,
                            ev: this.D26666.Z(e),
                            learningTokenId: C.encode(this.preVideoInfo.studiedLessonDto.id)
                        };
                    console.log("提交进度时间:" + this.playTimes), console.log("观看总时间:" + this.totalStudyTime), m.a.saveCacheIntervalTime(n).then(function (e) {
                        t.playTimes = 0, t.watchPointPost = "", -10 == e.code ? (t.tipsDialog = !0, t.tipsMsg = "同时播放多个视频，其他页面的学习进度将停止记录哦！", t.tipsBtn = "我知道了") : 0 != e.code && (t.backDialog = !0)
                    })
                },
                saveDatabaseIntervalTime: function (t, e, n) {
                    var o = this,
                        a = this.lessonId,
                        r = this.smallLessonId,
                        s = [this.recruitId, a, r, this.lastViewVideoId, this.videoDetail.chapterId, this.data.studyStatus, parseInt(this.playTimes), parseInt(this.totalStudyTime), i.i(p.g)(ablePlayerX("container").getPosition())],
                        l = {
                            watchPoint: this.watchPointPost,
                            ev: this.D26666.Z(s),
                            learningTokenId: C.encode(this.preVideoInfo.studiedLessonDto.id),
                            courseId: this.courseId
                        };
                    console.log("提交进度时间:" + this.playTimes), console.log("观看总时间:" + this.totalStudyTime), m.a.saveDatabaseIntervalTime(l).then(function (i) {
                        o.playTimes = 0, o.watchPointPost = "", -10 == i.code ? (o.tipsDialog = !0, o.tipsMsg = "同时播放多个视频，其他页面的学习进度将停止记录哦！", o.tipsBtn = "我知道了") : 403 == i.code ? setTimeout(function () {
                            window.location.href = root + "/login/gologin?fromurl=" + encodeURIComponent(window.location.href)
                        }, 3e3) : 0 != i.code ? o.backDialog = !0 : o.saveDataFilish && t && (o.prelearningNote(t, e, n), o.saveDataFilish = !1)
                    })
                },
                chapterExamEntry: function (t) {
                    var e = this;
                    m.a.queryStudentIsLimitFlow({}).then(function (i) {
                        200 == i.status && i.rt.isOpen ? (e.waitTime = i.rt.time ? i.rt.time : 0, e.limitEntryDialog()) : e.judgeLookAnswer(t)
                    })
                },
                judgeLookAnswer: function (t) {
                    var e = this,
                        i = "";
                    if (this.lookAnswerInfo = t.studentExamDto, 1 == this.data.studyStatus || !t.studentExamDto.id) return this.goToExamListUrl(), !1;
                    m.a.findExamCorrectType({
                        examId: t.studentExamDto.exam.id,
                        recruitId: this.recruitId
                    }).then(function (t) {
                        0 == t.code ? 0 == t.data ? e.isHuPing = !1 : e.isHuPing = !0 : 403 == t.code && setTimeout(function () {
                            window.location.href = root + "/login/gologin?fromurl=" + encodeURIComponent(window.location.href)
                        }, 3e3)
                    }), 3 !== t.studentExamDto.state && 4 !== t.studentExamDto.state ? (i = this.isHuPing ? "https://exam.zhihuishu.com/onlineExam/studentExam/stuExam?recruitId=" + this.recruitId : t.studentExamDto.examUrl, window.open(i)) : 3 == t.studentExamDto.state ? (this.tipsDialog = !0, this.tipsMsg = "作业已上交，不可查看", this.tipsBtn = "我知道了") : 4 == t.studentExamDto.state && m.a.isCheckAnswer({
                        studentExamId: t.studentExamDto.id
                    }).then(function (n) {
                        0 == n.code ? n.data.checkAnswer ? (i = e.isHuPing ? "https://exam.zhihuishu.com/onlineExam/studentExam/stuExam?recruitId=" + e.recruitId : t.studentExamDto.examUrl, window.open(i)) : e.lookAnswerDialog = !0 : 403 == n.code && setTimeout(function () {
                            window.location.href = root + "/login/gologin?fromurl=" + encodeURIComponent(window.location.href)
                        }, 3e3)
                    })
                },
                lookAnsSureBtn: function () {
                    var t = this,
                        e = "";
                    m.a.updateCheckAnswer({
                        studentExamId: this.lookAnswerInfo.id
                    }).then(function (i) {
                        0 == i.code ? (e = t.isHuPing ? "https://exam.zhihuishu.com/onlineExam/studentExam/stuExam?recruitId=" + t.recruitId : t.lookAnswerInfo.examUrl, t.lookAnswerDialog = !1, window.open(e)) : 403 == i.code && setTimeout(function () {
                            window.location.href = root + "/login/gologin?fromurl=" + encodeURIComponent(window.location.href)
                        }, 3e3)
                    })
                },
                goToExamListUrl: function () {
                    var t = i.i(p.i)(this.recruitId);
                    t = encodeURIComponent(t);
                    var e = "//onlineexamh5new.zhihuishu.com/stuExamWeb.html#/webExamList?recruitId=" + t;
                    window.open(e)
                },
                goToExamJudge: function () {
                    var t = this;
                    m.a.queryStudentIsLimitFlow({}).then(function (e) {
                        200 == e.status && e.rt.isOpen ? (t.waitTime = e.rt.time ? e.rt.time : 0, t.limitEntryDialog()) : t.goToExamListUrl()
                    })
                },
                limitEntryDialog: function () {
                    var t = this.waitTime;
                    return this.tipsDialog = !0, this.tipsMsg = "目前为作业考试高峰期，请错开时间，" + t + "分钟后再来~", this.tipsBtn = "我知道了", !1
                }
            }
        }
    }, , , , , , , , , function (t, e, i) {
        e = t.exports = i(622)(!1), e.push([t.i, '@charset "UTF-8";.el-header{height:60px;color:#3d4059;background:#3d84ff;box-shadow:0 2px 8px 0 rgba(0,0,0,.1);z-index:30;position:fixed;width:100%;padding:0 62px;left:0}.el-header .banner{margin:0 auto;min-width:1200px;height:60px;position:relative}.el-header .banner .back{color:#fff;text-decoration:none;font-size:14px;line-height:60px;opacity:.75;display:inline;cursor:pointer}.el-header .banner .back:hover{opacity:.5}.el-header .banner .back:hover i{opacity:.75}.el-header .banner .back i{font-size:19px;color:#fff;float:left;margin-top:1px;margin-right:3px}.el-header .banner .source-con{position:absolute;left:50%;text-align:center;top:0;transform:translateX(-50%);-webkit-transform:translateX(-50%);-moz-transform:translateX(-50%);-ms-transform:translateX(-50%);-o-transform:translateX(-50%);margin-top:10px}.el-header .banner .source-con .source-name{overflow:hidden;text-overflow:ellipsis;white-space:nowrap;width:300px;color:#fff;font-size:14px}.el-header .banner .source-con .source-down{margin-top:5px;display:inline}.el-header .banner .source-con .source-down span{font-size:12px;color:#fff;opacity:.75}.el-header .banner .source-con .source-down .source-n{margin-right:10px}.el-header .banner .header_userInfo{float:right;margin:10px 0 0 30px;height:26px;border-radius:2px;line-height:26px;width:36px;position:relative;cursor:pointer;z-index:51;padding-bottom:24px}.el-header .banner .header_userInfo .userInfo_header{float:left;margin:2px;height:32px;width:32px}.el-header .banner .header_userInfo .userInfo_header img{vertical-align:top;border-radius:100px}.el-header .banner .header_userInfo:hover .userLinks{display:block}.el-header .banner .header_userInfo .userLinks{position:absolute;z-index:51;display:none;width:120px;top:49px;right:0;height:80px;padding:10px 0;background:#fff;box-shadow:0 5px 15px 0 rgba(0,0,0,.1);border-radius:2px}.el-header .banner .header_userInfo .userLinks li{height:40px;line-height:40px}.el-header .banner .header_userInfo .userLinks li:hover{background:#ededed}.el-header .banner .header_userInfo .userLinks li .userLinks_item{font-size:13px;color:#2a2a2a;padding:0 15px;display:inline-block}.el-header .banner .header_userInfo .userLinks li .userLinks_item .iconfont{margin-right:5px;display:inline-block;color:#777}.el-header .banner .menudivright-r-div{float:right}.el-header .banner .menudivright-r-div .Patternbtn-div{float:left;width:80px;text-align:center;padding-top:8px;cursor:pointer;height:60px;box-sizing:border-box}.el-header .banner .menudivright-r-div .Patternbtn-div:hover{background:#2b70e6}.el-header .banner .menudivright-r-div .Patternbtn-div em{font-size:26px;display:inline-block;color:#cee0ff}.el-header .banner .menudivright-r-div .Patternbtn-div .icon{width:25px;height:25px}.el-header .banner .menudivright-r-div .Patternbtn-div p{font-size:12px;color:#cee0ff}.el-header .banner .menudivright-r-div .morebtn-div{width:80px;height:60px;text-align:center;position:relative;cursor:pointer;float:left;padding-top:8px;box-sizing:border-box}.el-header .banner .menudivright-r-div .morebtn-div:hover{background:#2b70e6}.el-header .banner .menudivright-r-div .morebtn-div em{font-size:26px;display:inline-block;color:#cee0ff;margin-left:-3px}.el-header .banner .menudivright-r-div .morebtn-div p{font-size:12px;color:#cee0ff}.el-header .banner .menudivright-r-div .morebtn-div:hover .Retirebtn-div{display:block}.el-header .banner .menudivright-r-div .morebtn-div .Retirebtn-div{display:none;width:120px;height:40px;position:absolute;top:60px;left:0;background:#fff;line-height:40px;box-shadow:0 5px 15px 0 rgba(0,0,0,.1)}.el-header .banner .menudivright-r-div .morebtn-div .Retirebtn-div .iconbaizhoumoshi-tuike{margin:3px 0 0 12px;display:inline-block;color:#d8d8d8;width:25px}.el-header .banner .menudivright-r-div .morebtn-div .Retirebtn-div span{font-size:13px;color:#bfbfbf}.el-header .banner .menudivright-r-div .morebtn-div .Retirebtn-div:hover span{color:#2a2a2a}.el-header .banner .menudivright-r-div .morebtn-div .Retirebtn-div:hover .iconbaizhoumoshi-tuike{color:#bfbfbf}.el-header .banner .menudivright-r-div .InformationCenter-div{margin-left:76px;margin-right:30px;position:relative}.el-header .banner .menudivright-r-div .InformationCenter-div a{line-height:60px;font-size:14px;color:#fff;opacity:.75;cursor:pointer}.el-header .banner .menudivright-r-div .InformationCenter-div a:hover{opacity:.5}.el-header .banner .menudivright-r-div .InformationCenter-div .noticeTips{display:inline-block;min-width:18px;height:18px;background:#ff8013;border-radius:50%;margin-left:5px;color:#fff;line-height:18px;text-align:center;font-size:12px;position:absolute;top:21px;right:-22px}.el-header .banner .menudivright-r-div .backold-div{font-size:14px;color:#fff;opacity:.75;cursor:pointer;line-height:60px}.el-header .banner .menudivright-r-div .backold-div:hover{opacity:.5}.el-header .banner .message-reddot{text-decoration:none;position:absolute;top:-6px;right:-14px;min-width:14px;height:14px;text-align:center;line-height:14px;font-size:12px;color:#fff;border-radius:14px;background:#e10e01;padding:0 3px!important}.dialog-quit .el-dialog{width:400px;height:480px;border-radius:2px}.dialog-quit .el-dialog .el-dialog__header{padding:20px 30px;padding-bottom:15px;border-bottom:1px solid #ededed}.dialog-quit .el-dialog .el-dialog__title{font-weight:700}.dialog-quit .el-dialog .el-dialog__headerbtn{right:30px}.dialog-quit .el-dialog .el-dialog__close{color:#777;font-size:18px}.dialog-quit .el-dialog .el-dialog__body{padding:0}.dialog-quit .el-dialog .el-dialog__body .quit-con{margin-top:30px;padding:0 30px}.dialog-quit .el-dialog .el-dialog__body .quit-con h2{font-size:18px;color:#2a2a2a;margin-bottom:90px;line-height:30px}.dialog-quit .el-dialog .el-dialog__body .quit-con .yecode{margin-bottom:100px}.dialog-quit .el-dialog .el-dialog__body .quit-con .yecode p{font-size:14px;color:#2a2a2a;letter-spacing:.25px;line-height:24px;margin-bottom:10px}.dialog-quit .el-dialog .el-dialog__body .quit-con .yecode .text{overflow:hidden;clear:both}.dialog-quit .el-dialog .el-dialog__body .quit-con .yecode .text .el-input{width:180px;float:left}.dialog-quit .el-dialog .el-dialog__body .quit-con .yecode .text .el-input .el-input__inner{width:180px;height:32px;line-height:32px;padding-left:5px;box-sizing:border-box;background:#f6f6f6;border:1px solid #ededed;border-radius:2px;color:#2a2a2a}.dialog-quit .el-dialog .el-dialog__body .quit-con .yecode .text .el-input .el-input__inner:focus{box-shadow:inherit}.dialog-quit .el-dialog .el-dialog__body .quit-con .yecode .text .el-input .el-input__inner::-webkit-input-placeholder{font-size:14px;color:#bfbfbf;font-weight:100}.dialog-quit .el-dialog .el-dialog__body .quit-con .yecode .text .el-input .el-input__inner:-moz-placeholder,.dialog-quit .el-dialog .el-dialog__body .quit-con .yecode .text .el-input .el-input__inner::-moz-placeholder{font-size:14px;color:#bfbfbf;font-weight:100}.dialog-quit .el-dialog .el-dialog__body .quit-con .yecode .text .el-input .el-input__inner:-ms-input-placeholder{font-size:14px;color:#bfbfbf;font-weight:100}.dialog-quit .el-dialog .el-dialog__body .quit-con .yecode .text .s-canvas,.dialog-quit .el-dialog .el-dialog__body .quit-con .yecode .text img{margin:0 10px;height:32px;width:80px;float:left}.dialog-quit .el-dialog .el-dialog__body .quit-con .yecode .text span{float:left;line-height:32px;color:#777;font-size:14px;cursor:pointer}.dialog-quit .el-dialog .el-dialog__body .quit-con .yecode .error-code{color:#ff2a24;line-height:24px;margin-top:10px}.dialog-quit .el-dialog .el-dialog__body .con-up{margin-bottom:30px}.dialog-quit .el-dialog .el-dialog__body .tit{font-size:14px;color:#777;line-height:24px;margin-bottom:5px}.dialog-quit .el-dialog .el-dialog__body .con{font-size:14px;color:#2a2a2a;line-height:24px;font-weight:700}.dialog-quit .el-dialog .el-dialog__body textarea{margin-bottom:10px;resize:none;width:340px;height:80px;padding:5px 10px;box-sizing:border-box;background:#f6f6f6;border:1px solid #ededed;box-shadow:inset 0 -1px 0 0 #ededed;border-radius:2px;color:#2a2a2a}.dialog-quit .el-dialog .el-dialog__body textarea::-webkit-input-placeholder{font-size:14px;color:#bfbfbf;font-weight:100}.dialog-quit .el-dialog .el-dialog__body textarea:-moz-placeholder,.dialog-quit .el-dialog .el-dialog__body textarea::-moz-placeholder{font-size:14px;color:#bfbfbf;font-weight:100}.dialog-quit .el-dialog .el-dialog__body textarea:-ms-input-placeholder{font-size:14px;color:#bfbfbf;font-weight:100}.dialog-quit .el-dialog .el-dialog__body .tip{font-size:12px;color:#777;line-height:18px}.dialog-quit .el-dialog .el-dialog__footer{padding:0;text-align:center;position:absolute;bottom:20px;left:75px}.dialog-quit .el-dialog .el-dialog__footer .btn{background:#3d84ff;width:120px;height:40px;text-align:center;color:#fff;border:1px solid #3d84ff;border-radius:0}.dialog-quit .el-dialog .el-dialog__footer .btn:hover{background:rgba(61,132,255,.8)}.dialog-quit .el-dialog .el-dialog__footer .cancel{background:#fff;border:1px solid #ededed;color:#2a2a2a}.dialog-quit .el-dialog .el-dialog__footer .cancel:hover{background:#ededed}.black .el-header{background:#2a2a2a}.black .el-header .banner .back{color:#777;opacity:inherit}.black .el-header .banner .back:hover,.black .el-header .banner .back:hover i{color:#bfbfbf;opacity:inherit}.black .el-header .banner .back i{color:#777}.black .el-header .banner .source-con .source-name{color:#bfbfbf}.black .el-header .banner .source-con .source-down span{color:#777;opacity:inherit}.black .el-header .banner .header_userInfo .userLinks{background:#2a2a2a;box-shadow:0 5px 15px 0 rgba(0,0,0,.1)}.black .el-header .banner .header_userInfo .userLinks li:hover{background:#3f3f3f}.black .el-header .banner .header_userInfo .userLinks li .userLinks_item{color:#777}.black .el-header .banner .header_userInfo .userLinks li .userLinks_item:hover,.black .el-header .banner .header_userInfo .userLinks li .userLinks_item:hover .iconfont{color:#bfbfbf}.black .el-header .banner .menudivright-r-div .Patternbtn-div:hover{background:#1d1d1d}.black .el-header .banner .menudivright-r-div .Patternbtn-div em,.black .el-header .banner .menudivright-r-div .Patternbtn-div p{color:#777}.black .el-header .banner .menudivright-r-div .morebtn-div:hover{background:#1d1d1d}.black .el-header .banner .menudivright-r-div .morebtn-div em,.black .el-header .banner .menudivright-r-div .morebtn-div p{color:#777}.black .el-header .banner .menudivright-r-div .morebtn-div .Retirebtn-div{background:#2a2a2a;box-shadow:0 5px 15px 0 rgba(0,0,0,.1)}.black .el-header .banner .menudivright-r-div .morebtn-div .Retirebtn-div .iconbaizhoumoshi-tuike,.black .el-header .banner .menudivright-r-div .morebtn-div .Retirebtn-div span{color:#3f3f3f}.black .el-header .banner .menudivright-r-div .morebtn-div .Retirebtn-div:hover .iconbaizhoumoshi-tuike,.black .el-header .banner .menudivright-r-div .morebtn-div .Retirebtn-div:hover span{color:#bfbfbf}.black .el-header .banner .menudivright-r-div .InformationCenter-div a{color:#777;opacity:inherit}.black .el-header .banner .menudivright-r-div .InformationCenter-div a:hover{opacity:inherit;color:#bfbfbf}.black .el-header .banner .menudivright-r-div .InformationCenter-div .noticeTips{background:#ff8013;color:#fff}.black .el-header .banner .menudivright-r-div .InformationCenter-div .noticeTips:hover{opacity:inherit;color:#fff}.black .el-header .banner .menudivright-r-div .backold-div{color:#777;opacity:inherit}.black .el-header .banner .menudivright-r-div .backold-div:hover{opacity:inherit;color:#bfbfbf}.exploreTip{height:52px;background-color:#fbbf30;width:100%;text-align:center;line-height:52px;font-size:16px;position:relative;z-index:33;border-bottom:1px solid #ccc;font-family:Microsoft Yahei}.exploreTip div{color:#a77600}.exploreTip div .browser-download{position:relative;cursor:pointer;color:#fff}.exploreTip div .browser-download .browser-version-list{position:absolute;top:20px;left:50%;margin-left:-48px;display:none}.exploreTip div .browser-download .browser-version-list li{width:96px;height:40px}.exploreTip div .browser-download .browser-version-list li a{display:block;background:#000;line-height:40px;text-decoration:none;font-size:14px}.exploreTip div .browser-download .browser-version-list .arrow{width:16px;height:8px;margin-left:40px;background:url(//image.zhihuishu.com/testzhs/ablecommons/demo/201704/0b241b0….png) no-repeat}.exploreTip .hint_delete{position:absolute;top:0;right:40px}.exploreTip .hint_delete a{display:block;width:78px;height:26px;margin-top:13px;font-size:14px;text-decoration:none;color:#fbbf30;text-align:center;line-height:26px;background:#fff;border-radius:13px}', ""])
    }, , , , , , , function (t, e, i) {
        e = t.exports = i(622)(!1), e.push([t.i, '.video-study{height:100%;overflow:hidden}.video-study .box-content{margin-top:60px;position:relative;height:100%;min-width:1200px}.video-study .box-content .box-left{width:calc(100% - 340px);height:100%;background:#000;position:relative}.video-study .box-content .box-left .left-top{background:#f6f6f6;box-shadow:inset -1px 0 0 0 #ededed;right:340px;height:40px;line-height:40px;position:absolute;left:0;top:0;padding:0 35px 0 60px;z-index:2;width:100%;box-sizing:border-box}.video-study .box-content .box-left .left-top .videotop_lesson{text-align:right}.video-study .box-content .box-left .left-top .videotop_lesson,.video-study .box-content .box-left .left-top .videotop_lesson_tit{height:40px;line-height:40px;overflow:hidden;white-space:nowrap;text-overflow:ellipsis;display:inline-block;font-size:12px;color:#2a2a2a}.video-study .box-content .box-left .left-top .videotop_lesson_tit{max-width:400px;margin-left:5px}.video-study .box-content .box-left .left-top .videotop_all ul li{float:left;margin:6px 5px 0 0;cursor:pointer;list-style:none;height:30px;line-height:30px;font-size:12px;text-align:right;padding-left:14px;padding-right:10px}.video-study .box-content .box-left .left-top .videotop_all ul li em{margin-top:0;margin-right:3px;color:#d8d8d8}.video-study .box-content .box-left .left-top .videotop_all ul li span{color:#777}.video-study .box-content .box-left .left-top .videotop_all ul li:hover span{color:#2a2a2a}.video-study .box-content .box-left .limitInfo{position:absolute;transform:translate(-50%,-50%);-webkit-transform:translate(-50%,-50%);-moz-transform:translate(-50%,-50%);-ms-transform:translate(-50%,-50%);-o-transform:translate(-50%,-50%);background:rgba(42,42,42,.95);border-radius:30px;width:630px;top:50%;left:50%;box-sizing:border-box}.video-study .box-content .box-left .limitInfo .title{line-height:30px;color:#ededed;font-size:18px;text-align:center;margin-top:30px}.video-study .box-content .box-left .limitInfo .limit-tips{line-height:20px;margin-top:20px;color:#bfbfbf;font-size:14px;text-align:center}.video-study .box-content .box-left .limitInfo ul{margin-top:5px;margin-bottom:20px}.video-study .box-content .box-left .limitInfo ul li{line-height:48px;color:#fff;font-size:24px;text-align:center}.video-study .box-content .box-left .threed-box{position:absolute;bottom:120px;left:40px;height:32px;background:hsla(0,0%,100%,.9);border-radius:21px;width:32px;overflow:hidden;clear:both;transition:.5s;cursor:pointer;z-index:2}.video-study .box-content .box-left .threed-box .icon{width:24px;height:24px;float:left;border:4px solid #fff;margin-right:5px;border-radius:50px}.video-study .box-content .box-left .threed-box span{margin:0 5px;font-size:14px;line-height:32px;color:#666;max-width:145px;overflow:hidden;text-overflow:ellipsis;white-space:nowrap;display:block;float:left}.video-study .box-content .box-left .threed-box .iconfont{font-size:20px;transform:rotateY(180deg);float:right;color:#666;margin-right:8px;margin-top:5px}.video-study .box-content .box-left .three-show{width:220px}.video-study .box-content .box-left .video-topic{position:absolute;bottom:10px;width:100%;height:20px;right:5px;z-index:2}.video-study .box-content .box-left .video-topic ul{margin-right:10px}.video-study .box-content .box-left .video-topic ul li{cursor:pointer;background:#fff;width:5px;height:5px;border-radius:5px;position:absolute}.video-study .box-content .box-left .video-topic ul li span{display:block;width:100%;height:5px;position:relative}.video-study .box-content .box-left .video-topic ul li span .el-popover{left:0;bottom:10px}.video-study .box-content .box-right{position:absolute;height:100%;top:0;bottom:0;right:0;width:340px}.video-study .box-content .box-right .newListTest{padding:0 15px;overflow:hidden;clear:both}.video-study .box-content .box-right .newListTest li{margin-right:5px;height:80px;list-style:none;float:left;width:100px;text-align:center;line-height:30px;font-size:12px;color:#bfbfbf;cursor:pointer}.video-study .box-content .box-right .newListTest li:nth-child(3n){margin-right:0}.video-study .box-content .box-right .newListTest li:hover{background:#ededed}.video-study .box-content .box-right .newListTest li a{font-size:12px;color:#777;display:inline-block;line-height:19px;margin-top:10px}.video-study .box-content .box-right .newListTest li a .icon{width:40px;height:40px}.video-study .box-content .box-right .topicTitle{width:340px;height:40px;background:#f6f6f6}.video-study .box-content .box-right .topicTitle ul{margin-left:20px}.video-study .box-content .box-right .topicTitle ul .tabTitle{font-size:14px;color:#2a2a2a;line-height:40px}.video-study .box-content .box-right .list{position:relative;padding-bottom:20px;background:url(//image.zhihuishu.com/zhs/ablecommons/demo/201907/892e66724a934d7291452c71a992f244.png) 68px 0 repeat-y}.video-study .box-content .box-right .list .position_first_bg{position:absolute;z-index:1;left:68px;top:-11px;display:inline-block;height:20px;width:2px}.video-study .box-content .box-right .list li{position:relative;padding:7px 10px 7px 3px!important;height:36px;font-family:Tahoma;width:100%;font-size:12px}.video-study .box-content .box-right .list li:hover{background:#ededed;font-size:12px;color:#2a2a2a}.video-study .box-content .box-right .list li:hover .chapter-em{background:url(https://image.zhihuishu.com/zhs_yufa_150820/ablecommons/demo/201910/2644659e82f34d9ea62a0f436f0ac1e9.png) no-repeat}.video-study .box-content .box-right .list li .catalogue_title3{font-size:12px;color:#777;line-height:38px;height:26px;display:inline-block;text-align:right;width:50px;padding-right:7px;overflow:hidden}.video-study .box-content .box-right .list li .catalogue_title4{font-size:12px;color:#999;line-height:38px;height:26px;display:inline-block;text-align:right;width:50px;padding-right:7px;overflow:hidden}.video-study .box-content .box-right .list li .cataloguediv-l{width:50px;padding-right:18px}.video-study .box-content .box-right .list li .time_ico_box{display:block;height:20px;margin-left:1px;margin-right:14px}.video-study .box-content .box-right .list li .catalogue_title{font-size:12px;color:#2a2a2a;margin-bottom:5px;line-height:18px;display:block;overflow:hidden;text-overflow:ellipsis;white-space:nowrap;width:200px}.video-study .box-content .box-right .list li .small-lesson{line-height:36px}.video-study .box-content .box-right .list li .cataloguediv-c{width:210px;margin-left:20px}.video-study .box-content .box-right .list li .time_ico_half{background:url(//image.zhihuishu.com/zhs/ablecommons/demo/201907/5efaa4c4040e4042bde4fc1fa61a8e10.png) no-repeat;display:inline-block;height:12px;margin:1px 5px 0 0;width:12px}.video-study .box-content .box-right .list li .time_icofinish{background:url(//image.zhihuishu.com/zhs/ablecommons/demo/201907/5b3134c2c263451c8d45cb477b5f79e4.png) no-repeat;position:absolute;right:24px;top:17px;width:17px;height:17px;display:block}.video-study .box-content .box-right .list li .el-progress{position:absolute;right:25px;top:10px}.video-study .box-content .box-right .list li .el-progress .el-progress-circle{height:16px!important;width:16px!important}.video-study .box-content .box-right .list li .el-progress .el-progress__text{font-size:12px!important;color:#3d84ff}.video-study .box-content .box-right .list li .el-progress .el-progress-circle__track{stroke:#3d84ff;opacity:.3}.video-study .box-content .box-right .list li .el-progress .el-progress-circle__path{stroke:#3d84ff}.video-study .box-content .box-right .list li .progress-num{position:absolute;right:20px;top:28px;font-size:12px!important;color:#3d84ff}.video-study .box-content .box-right .list li .time{color:#777;font-size:12px}.video-study .box-content .box-right .list li .learningPercentage-div{width:20px;height:20px;position:relative;right:14px}.video-study .box-content .box-right .list li .learningPercentage-div .learningPercentage-span{position:absolute;bottom:-16px;left:0;font-size:12px;color:#3d84ff}.video-study .box-content .box-right .list li .learningPercentage-div .progressCricle{width:20px;height:20px}.video-study .box-content .box-right .list li .Sectionmark-em{background:url(//image.zhihuishu.com/zhs/ablecommons/demo/201907/5e635034f9e24ab48c97fc7fcf1b516a.png) no-repeat;width:11px;height:11px;display:inline-block;position:absolute;left:64px;top:20px}.video-study .box-content .box-right .list .chapter-test{padding-left:61px!important;cursor:pointer;line-height:40px;line-height:37px;color:#2a2a2a;position:relative}.video-study .box-content .box-right .list .chapter-test .name{margin-left:30px;color:#2a2a2a;font-size:12px}.video-study .box-content .box-right .list .chapter-test .iconfont{padding:0 20px;cursor:pointer;position:absolute;right:62px;top:8px;color:#666}.video-study .box-content .box-right .list .chapter-test .finish{height:17px;width:17px;display:block;cursor:pointer;position:absolute;right:82px;top:17px;background:url(//image.zhihuishu.com/zhs/ablecommons/demo/201907/5b3134c2c263451c8d45cb477b5f79e4.png) no-repeat}.video-study .box-content .box-right .list .video{cursor:pointer}.video-study .box-content .box-right .list .font_gray_inclined .catalogue_title{margin-top:10px;font-size:14px;font-weight:700}.video-study .box-content .box-right .list .font_gray_inclined .chapter-em{background:url(//image.zhihuishu.com/zhs/ablecommons/demo/201907/7943740388164e14980b89c244f35c58.png) no-repeat;width:11px;height:11px;display:inline-block;margin:13px 0 0 3px}.video-study .box-content .box-right .list .current_play{background:rgba(61,132,255,.15)}.video-study .box-content .box-right .list .current_play .catalogue_title3,.video-study .box-content .box-right .list .current_play .catalogue_title4{color:#3d84ff}.video-study .box-content .box-right .list .current_play .catalogue_title{color:#3d84ff;font-weight:700}.video-study .box-content .box-right .list .current_play .time_ico_half{background:url(//image.zhihuishu.com/zhs/ablecommons/demo/201907/51172bf9b834437492667911fb2a6b68.png) no-repeat}.video-study .box-content .box-right .list .current_play .time{font-size:12px;color:rgba(61,132,255,.8);letter-spacing:.1px}.video-study .el-scrollbar .el-scrollbar__wrap{overflow-x:hidden}.video-study .el-scrollbar .el-scrollbar__bar{right:0}.video-study .el-scrollbar .is-horizontal{opacity:0!important;display:none}.video-study .el-scrollbar .el-scrollbar__thumb{background:#bfbfbf;width:4px}.video-study .dialog-aberrant .el-dialog,.video-study .dialog-back .el-dialog,.video-study .dialog-class .el-dialog,.video-study .dialog-img .el-dialog,.video-study .dialog-look-ans .el-dialog,.video-study .dialog-read .el-dialog,.video-study .dialog-teach .el-dialog,.video-study .dialog-test .el-dialog,.video-study .dialog-tips .el-dialog,.video-study .dialog-warn .el-dialog,.video-study .read-learn .el-dialog{width:400px;height:250px;border-radius:2px}.video-study .dialog-aberrant .el-dialog .el-dialog__header,.video-study .dialog-back .el-dialog .el-dialog__header,.video-study .dialog-class .el-dialog .el-dialog__header,.video-study .dialog-img .el-dialog .el-dialog__header,.video-study .dialog-look-ans .el-dialog .el-dialog__header,.video-study .dialog-read .el-dialog .el-dialog__header,.video-study .dialog-teach .el-dialog .el-dialog__header,.video-study .dialog-test .el-dialog .el-dialog__header,.video-study .dialog-tips .el-dialog .el-dialog__header,.video-study .dialog-warn .el-dialog .el-dialog__header,.video-study .read-learn .el-dialog .el-dialog__header{padding:20px 30px;padding-bottom:15px}.video-study .dialog-aberrant .el-dialog .el-dialog__title,.video-study .dialog-back .el-dialog .el-dialog__title,.video-study .dialog-class .el-dialog .el-dialog__title,.video-study .dialog-img .el-dialog .el-dialog__title,.video-study .dialog-look-ans .el-dialog .el-dialog__title,.video-study .dialog-read .el-dialog .el-dialog__title,.video-study .dialog-teach .el-dialog .el-dialog__title,.video-study .dialog-test .el-dialog .el-dialog__title,.video-study .dialog-tips .el-dialog .el-dialog__title,.video-study .dialog-warn .el-dialog .el-dialog__title,.video-study .read-learn .el-dialog .el-dialog__title{font-weight:700}.video-study .dialog-aberrant .el-dialog .el-dialog__headerbtn,.video-study .dialog-back .el-dialog .el-dialog__headerbtn,.video-study .dialog-class .el-dialog .el-dialog__headerbtn,.video-study .dialog-img .el-dialog .el-dialog__headerbtn,.video-study .dialog-look-ans .el-dialog .el-dialog__headerbtn,.video-study .dialog-read .el-dialog .el-dialog__headerbtn,.video-study .dialog-teach .el-dialog .el-dialog__headerbtn,.video-study .dialog-test .el-dialog .el-dialog__headerbtn,.video-study .dialog-tips .el-dialog .el-dialog__headerbtn,.video-study .dialog-warn .el-dialog .el-dialog__headerbtn,.video-study .read-learn .el-dialog .el-dialog__headerbtn{right:30px}.video-study .dialog-aberrant .el-dialog .el-dialog__close,.video-study .dialog-back .el-dialog .el-dialog__close,.video-study .dialog-class .el-dialog .el-dialog__close,.video-study .dialog-img .el-dialog .el-dialog__close,.video-study .dialog-look-ans .el-dialog .el-dialog__close,.video-study .dialog-read .el-dialog .el-dialog__close,.video-study .dialog-teach .el-dialog .el-dialog__close,.video-study .dialog-test .el-dialog .el-dialog__close,.video-study .dialog-tips .el-dialog .el-dialog__close,.video-study .dialog-warn .el-dialog .el-dialog__close,.video-study .read-learn .el-dialog .el-dialog__close{color:#777;font-size:18px}.video-study .dialog-aberrant .el-dialog .el-dialog__body,.video-study .dialog-back .el-dialog .el-dialog__body,.video-study .dialog-class .el-dialog .el-dialog__body,.video-study .dialog-img .el-dialog .el-dialog__body,.video-study .dialog-look-ans .el-dialog .el-dialog__body,.video-study .dialog-read .el-dialog .el-dialog__body,.video-study .dialog-teach .el-dialog .el-dialog__body,.video-study .dialog-test .el-dialog .el-dialog__body,.video-study .dialog-tips .el-dialog .el-dialog__body,.video-study .dialog-warn .el-dialog .el-dialog__body,.video-study .read-learn .el-dialog .el-dialog__body{padding:0 64px;text-align:center}.video-study .dialog-aberrant .el-dialog .el-dialog__body img,.video-study .dialog-back .el-dialog .el-dialog__body img,.video-study .dialog-class .el-dialog .el-dialog__body img,.video-study .dialog-img .el-dialog .el-dialog__body img,.video-study .dialog-look-ans .el-dialog .el-dialog__body img,.video-study .dialog-read .el-dialog .el-dialog__body img,.video-study .dialog-teach .el-dialog .el-dialog__body img,.video-study .dialog-test .el-dialog .el-dialog__body img,.video-study .dialog-tips .el-dialog .el-dialog__body img,.video-study .dialog-warn .el-dialog .el-dialog__body img,.video-study .read-learn .el-dialog .el-dialog__body img{margin-bottom:5px}.video-study .dialog-aberrant .el-dialog .el-dialog__body p,.video-study .dialog-back .el-dialog .el-dialog__body p,.video-study .dialog-class .el-dialog .el-dialog__body p,.video-study .dialog-img .el-dialog .el-dialog__body p,.video-study .dialog-look-ans .el-dialog .el-dialog__body p,.video-study .dialog-read .el-dialog .el-dialog__body p,.video-study .dialog-teach .el-dialog .el-dialog__body p,.video-study .dialog-test .el-dialog .el-dialog__body p,.video-study .dialog-tips .el-dialog .el-dialog__body p,.video-study .dialog-warn .el-dialog .el-dialog__body p,.video-study .read-learn .el-dialog .el-dialog__body p{font-size:14px;color:#2a2a2a;line-height:24px}.video-study .dialog-aberrant .el-dialog .el-dialog__footer,.video-study .dialog-back .el-dialog .el-dialog__footer,.video-study .dialog-class .el-dialog .el-dialog__footer,.video-study .dialog-img .el-dialog .el-dialog__footer,.video-study .dialog-look-ans .el-dialog .el-dialog__footer,.video-study .dialog-read .el-dialog .el-dialog__footer,.video-study .dialog-teach .el-dialog .el-dialog__footer,.video-study .dialog-test .el-dialog .el-dialog__footer,.video-study .dialog-tips .el-dialog .el-dialog__footer,.video-study .dialog-warn .el-dialog .el-dialog__footer,.video-study .read-learn .el-dialog .el-dialog__footer{padding:0;text-align:center;position:absolute;bottom:20px;left:50%;transform:translateX(-50%);-webkit-transform:translateX(-50%);-moz-transform:translateX(-50%);-ms-transform:translateX(-50%);-o-transform:translateX(-50%)}.video-study .dialog-aberrant .el-dialog .el-dialog__footer .btn,.video-study .dialog-back .el-dialog .el-dialog__footer .btn,.video-study .dialog-class .el-dialog .el-dialog__footer .btn,.video-study .dialog-img .el-dialog .el-dialog__footer .btn,.video-study .dialog-look-ans .el-dialog .el-dialog__footer .btn,.video-study .dialog-read .el-dialog .el-dialog__footer .btn,.video-study .dialog-teach .el-dialog .el-dialog__footer .btn,.video-study .dialog-test .el-dialog .el-dialog__footer .btn,.video-study .dialog-tips .el-dialog .el-dialog__footer .btn,.video-study .dialog-warn .el-dialog .el-dialog__footer .btn,.video-study .read-learn .el-dialog .el-dialog__footer .btn{background:#3d84ff;width:120px;height:40px;text-align:center;color:#fff;border:0;border-radius:0}.video-study .dialog-aberrant .el-dialog .el-dialog__footer .btn:hover,.video-study .dialog-back .el-dialog .el-dialog__footer .btn:hover,.video-study .dialog-class .el-dialog .el-dialog__footer .btn:hover,.video-study .dialog-img .el-dialog .el-dialog__footer .btn:hover,.video-study .dialog-look-ans .el-dialog .el-dialog__footer .btn:hover,.video-study .dialog-read .el-dialog .el-dialog__footer .btn:hover,.video-study .dialog-teach .el-dialog .el-dialog__footer .btn:hover,.video-study .dialog-test .el-dialog .el-dialog__footer .btn:hover,.video-study .dialog-tips .el-dialog .el-dialog__footer .btn:hover,.video-study .dialog-warn .el-dialog .el-dialog__footer .btn:hover,.video-study .read-learn .el-dialog .el-dialog__footer .btn:hover{background:rgba(61,132,255,.8)}.video-study .dialog-tips .el-dialog .el-dialog__body{padding:0 26px}.video-study .dialog-aberrant .el-dialog{height:300px}.video-study .dialog-aberrant .el-dialog .el-dialog__body{padding:0 26px}.video-study .dialog-back .el-dialog .el-dialog__body{margin-top:20px;padding:0 35px;text-align:left}.video-study .dialog-back .el-dialog .el-dialog__body p{font-size:16px;color:#2a2a2a;line-height:24px}.video-study .aberrant{position:absolute;transform:translate(-50%,-50%);-webkit-transform:translate(-50%,-50%);-moz-transform:translate(-50%,-50%);-ms-transform:translate(-50%,-50%);-o-transform:translate(-50%,-50%);background:rgba(42,42,42,.95);border-radius:30px;width:630px;top:50%;left:50%;box-sizing:border-box;z-index:101}.video-study .aberrant .title{line-height:30px;color:#ededed;font-size:18px;text-align:center;margin-top:30px;padding:0 40px}.video-study .aberrant .limit-tips{line-height:20px;margin-top:20px;color:#bfbfbf;font-size:14px;text-align:center}.video-study .aberrant ul{margin-top:5px;margin-bottom:20px}.video-study .aberrant ul li{line-height:48px;color:#fff;font-size:24px;text-align:center}.video-study .aberrant a{display:block;background:#3d84ff;width:120px;height:40px;text-align:center;color:#fff;border:0;border-radius:0;margin:0 auto;margin-bottom:20px;line-height:40px;cursor:pointer;z-index:20}.video-study .dialog-teach .el-dialog,.video-study .dialog-test .el-dialog,.video-study .dialog-warn .el-dialog{height:480px;width:630px}.video-study .dialog-teach .el-dialog .el-dialog__body,.video-study .dialog-test .el-dialog .el-dialog__body,.video-study .dialog-warn .el-dialog .el-dialog__body{padding:0 90px;text-align:center;margin-top:30px}.video-study .dialog-teach .el-dialog .el-dialog__body img,.video-study .dialog-test .el-dialog .el-dialog__body img,.video-study .dialog-warn .el-dialog .el-dialog__body img{margin-bottom:30px}.video-study .dialog-teach .el-dialog .el-dialog__body p,.video-study .dialog-test .el-dialog .el-dialog__body p,.video-study .dialog-warn .el-dialog .el-dialog__body p{font-size:14px;color:#2a2a2a;line-height:24px;text-align:left}.video-study .dialog-teach .el-dialog .el-dialog__body{padding:0;text-align:left;margin-top:30px}.video-study .dialog-teach .el-dialog .el-dialog__body h2{text-align:center;line-height:30px;font-size:18px;color:#2a2a2a;margin-bottom:20px}.video-study .dialog-teach .el-dialog .el-dialog__body h3{text-align:left;line-height:20px;font-size:14px;color:#2a2a2a}.video-study .dialog-teach .el-dialog .el-dialog__body .teach-box{padding:0 90px}.video-study .dialog-teach .el-dialog .el-dialog__body ul li p{margin:12px 0;font-size:14px;color:#2a2a2a;line-height:24px;text-align:left;word-wrap:break-word}.video-study .dialog-test .el-dialog .el-dialog__header{border-bottom:1px solid #ededed}.video-study .dialog-test .el-dialog .el-dialog__header h4{font-size:18px;color:#2a2a2a;line-height:30px}.video-study .dialog-test .el-dialog .el-dialog__header p{font-size:12px;color:#777;position:relative;line-height:18px}.video-study .dialog-test .el-dialog .el-dialog__body{margin-top:0;padding:0}.video-study .dialog-test .el-dialog .el-scrollbar__wrap{padding-top:30px}.video-study .dialog-test .el-dialog .radio{margin:0 90px;margin-bottom:90px}.video-study .dialog-test .el-dialog .topic-title{font-size:14px;line-height:24px;color:#333;margin-bottom:10px;position:relative}.video-study .dialog-test .el-dialog .topic-title .title-tit{color:#151515;font-weight:600}.video-study .dialog-test .el-dialog .topic-title img{max-width:100%;height:auto!important;-o-object-fit:cover;object-fit:cover}.video-study .dialog-test .el-dialog .topic-title .error,.video-study .dialog-test .el-dialog .topic-title .right{color:#00d789;margin-right:12px;position:absolute;left:-48px}.video-study .dialog-test .el-dialog .topic-title .error .iconfont,.video-study .dialog-test .el-dialog .topic-title .right .iconfont{font-size:14px;position:absolute;left:-20px}.video-study .dialog-test .el-dialog .topic-title .error{color:#f94f17}.video-study .dialog-test .el-dialog .topic-list{margin-left:0;list-style:none}.video-study .dialog-test .el-dialog .topic-list .topic-item{font-size:14px;color:#2a2a2a;padding:13px 20px 13px 60px;position:relative;line-height:24px;word-break:break-all;cursor:pointer}.video-study .dialog-test .el-dialog .topic-list .topic-item .topic-option{position:absolute;top:50%;margin-top:-9px;width:18px;height:18px;text-align:center;left:15px}.video-study .dialog-test .el-dialog .topic-list .topic-item .topic-option-item{position:absolute;top:50%;margin-top:-12px;text-align:center;left:40px;color:#2a2a2a;font-size:14px}.video-study .dialog-test .el-dialog .topic-list .topic-item .active,.video-study .dialog-test .el-dialog .topic-list .topic-item .iconxuanzhong{color:#3d84ff}.video-study .dialog-test .el-dialog .topic-list .topic-item .item-topic{text-align:left}.video-study .dialog-test .el-dialog .topic-list .topic-item .item-topic p{display:inline-block}.video-study .dialog-test .el-dialog .topic-list .topic-item .item-topic img{max-width:100%;height:auto!important;-o-object-fit:cover;object-fit:cover}.video-study .dialog-test .el-dialog .answer-tit{margin-top:13px;margin-bottom:26px;font-size:14px;color:#2a2a2a;font-weight:600}.video-study .dialog-test .el-dialog .answer{margin-bottom:28px;font-size:14px;color:#2a2a2a}.video-study .dialog-test .el-dialog .answer span{color:#3d84ff}.video-study .dialog-test .el-dialog .answer-ans{font-size:14px;color:#2a2a2a;text-align:left}.video-study .dialog-test .el-dialog .answer-ans ul{width:535px}.video-study .dialog-test .el-dialog .answer-ans ul li{float:left;margin-right:15px}.video-study .dialog-test .el-dialog .answer-ans ul li img{background-size:cover;width:120px;height:120px}.video-study .dialog-test .el-dialog .el-dialog__footer .dialog-footer .btn{height:22px;line-height:22px;color:#3d4059;border-radius:12px;border:1px solid #d8d8d8;background:#fff;font-size:14px;width:100px;cursor:pointer}.video-study .dialog-img .el-dialog{height:480px;width:630px}.video-study .dialog-img .el-dialog .el-dialog__body{padding:0 30px;text-align:center;margin-top:10px;height:360px}.video-study .dialog-img .el-dialog .el-dialog__body img{-o-object-fit:cover;object-fit:cover;max-width:570px;height:100%}.video-study .read-learn .el-dialog{height:300px;width:440px}.video-study .read-learn .el-dialog .el-dialog__body{padding:0 30px;text-align:center;margin-top:10px;height:360px}.video-study .read-learn .el-dialog .el-dialog__body p{text-align:left}.video-study .read-learn .el-dialog .el-dialog__body p span{display:block;color:#3d84ff;margin-top:10px}.video-study .dialog-class .el-dialog{height:430px}.video-study .dialog-class .el-dialog .el-dialog__body{text-align:left;padding:0}.video-study .dialog-class .el-dialog .el-dialog__body .el-scrollbar .el-scrollbar__wrap{padding:0 30px}.video-study .dialog-class .el-dialog .el-dialog__body .el-scrollbar .my-class .title,.video-study .dialog-class .el-dialog .el-dialog__body .el-scrollbar .my-teacher .title{line-height:24px;color:#2a2a2a;font-size:14px;font-weight:700;margin-bottom:10px}.video-study .dialog-class .el-dialog .el-dialog__body .el-scrollbar .my-class .title span,.video-study .dialog-class .el-dialog .el-dialog__body .el-scrollbar .my-teacher .title span{height:14px;width:2px;background:#3d84ff;float:left;margin-right:5px;margin-top:5px}.video-study .dialog-class .el-dialog .el-dialog__body .el-scrollbar .my-class .name,.video-study .dialog-class .el-dialog .el-dialog__body .el-scrollbar .my-teacher .name{line-height:24px;font-size:14px;color:#2a2a2a;margin-bottom:30px}.video-study .dialog-class .el-dialog .el-dialog__body .el-scrollbar .my-class .teacher-info,.video-study .dialog-class .el-dialog .el-dialog__body .el-scrollbar .my-teacher .teacher-info{margin-bottom:21px}.video-study .dialog-class .el-dialog .el-dialog__body .el-scrollbar .my-class .teacher-info span,.video-study .dialog-class .el-dialog .el-dialog__body .el-scrollbar .my-teacher .teacher-info span{display:block}.video-study .dialog-class .el-dialog .el-dialog__body .el-scrollbar .my-class .teacher-info .name,.video-study .dialog-class .el-dialog .el-dialog__body .el-scrollbar .my-teacher .teacher-info .name{line-height:24px;font-size:14px;color:#2a2a2a;margin-bottom:5px}.video-study .dialog-class .el-dialog .el-dialog__body .el-scrollbar .my-class .teacher-info .num,.video-study .dialog-class .el-dialog .el-dialog__body .el-scrollbar .my-teacher .teacher-info .num{font-size:12px;color:#777;line-height:18px}.video-study .dialog .mask{position:fixed;left:0;top:0;width:100%;height:100%;opacity:.5;background:#000;z-index:100}.video-study .dialog-read{width:630px;height:480px;top:50%;left:50%;position:fixed;transform:translate(-50%,-50%);background:#fff;z-index:101}.video-study .dialog-read .el-dialog__header{border-bottom:1px solid #ededed;padding:20px 30px;padding-bottom:15px;position:relative}.video-study .dialog-read .el-dialog__header h4{font-size:18px;color:#2a2a2a;line-height:30px}.video-study .dialog-read .el-dialog__header p{font-size:12px;color:#3d84ff;position:relative;line-height:18px}.video-study .dialog-read .el-dialog__header .iconguanbi{position:absolute;top:30px;right:30px;font-size:20px;color:#777;cursor:pointer}.video-study .dialog-read .el-dialog__body{padding:0}.video-study .dialog-look-ans .el-dialog{position:relative}.video-study .dialog-look-ans .el-dialog .el-dialog__body{padding:0 65px}.video-study .dialog-look-ans .el-dialog .el-dialog__footer{padding:0;text-align:center;position:absolute;bottom:20px;width:100%}.video-study .dialog-look-ans .el-dialog .el-dialog__footer .btn{background:#3d84ff;width:120px;height:40px;text-align:center;color:#fff;border:1px solid #3d84ff;border-radius:0}.video-study .dialog-look-ans .el-dialog .el-dialog__footer .btn:hover{background:rgba(61,132,255,.8)}.video-study .dialog-look-ans .el-dialog .el-dialog__footer .cancel{background:#fff;border:1px solid #ededed;color:#2a2a2a}.video-study .dialog-look-ans .el-dialog .el-dialog__footer .cancel:hover{background:#ededed}.video-study .dialog-look-habit .el-dialog{width:500px;height:346px;border-radius:2px}.video-study .dialog-look-habit .el-dialog .el-dialog__header{padding:20px 30px;padding-bottom:15px;border-bottom:1px solid #ededed}.video-study .dialog-look-habit .el-dialog .el-dialog__title{font-weight:700}.video-study .dialog-look-habit .el-dialog .el-dialog__headerbtn{right:30px}.video-study .dialog-look-habit .el-dialog .el-dialog__close{color:#777;font-size:18px}.video-study .dialog-look-habit .el-dialog .el-dialog__body{padding:0 40px;text-align:left;margin-top:20px}.video-study .dialog-look-habit .el-dialog .el-dialog__body p{font-size:14px;color:#2a2a2a;line-height:24px}.video-study .dialog-look-habit .el-dialog .el-dialog__body p a{color:#3d84ff;cursor:pointer}.video-study .dialog-look-habit .el-dialog .el-dialog__footer{padding:0;text-align:center;position:absolute;bottom:30px;left:50%;width:500px;transform:translateX(-50%);-webkit-transform:translateX(-50%);-moz-transform:translateX(-50%);-ms-transform:translateX(-50%);-o-transform:translateX(-50%)}.video-study .dialog-look-habit .el-dialog .el-dialog__footer .btn{background:#3d84ff;width:140px;height:32px;line-height:32px;text-align:center;color:#fff;border:0;padding:0;border-radius:2px}.video-study .dialog-look-habit .el-dialog .el-dialog__footer .btn:hover{background:rgba(61,132,255,.8)}.video-study .dialog-look-habit .el-dialog .habit-teshu{margin-top:10px;text-align:left;font-size:12px;color:#f94f17;line-height:18px;padding:10px;background:#fef5e2}.video-study .dialog-learn-habit .el-dialog{width:570px;height:520px;border-radius:2px}.video-study .dialog-learn-habit .el-dialog .el-dialog__header{padding:20px 30px;padding-bottom:15px}.video-study .dialog-learn-habit .el-dialog .el-dialog__title{font-weight:700}.video-study .dialog-learn-habit .el-dialog .el-dialog__headerbtn{right:30px}.video-study .dialog-learn-habit .el-dialog .el-dialog__close{color:#777;font-size:18px}.video-study .dialog-learn-habit .el-dialog .el-dialog__body{padding:0;text-align:left}.video-study .preschool-Mustread-div{padding:0 30px 55px;background:#fff}.video-study .preschool-Mustread-div .studyExam-div{border-top:1px solid #ededed;border-bottom:1px solid #ededed;padding:15px 0;text-align:center}.video-study .preschool-Mustread-div .studyExam-div .studytime-div{margin-bottom:15px}.video-study .preschool-Mustread-div .studyExam-div .studytime-div .studytime-p1{color:#333;line-height:26px;font-weight:700;font-size:16px}.video-study .preschool-Mustread-div .studyExam-div .studytime-div .studytime-p2{font-size:12px;color:#2a2a2a;line-height:18px;margin-top:5px}.video-study .preschool-Mustread-div .studyExam-div .Examtime-div .Examtime-p1{color:#333;line-height:26px;font-weight:700;font-size:16px}.video-study .preschool-Mustread-div .studyExam-div .Examtime-div .Examtime-p2{font-size:12px;color:#2a2a2a;line-height:18px;margin-top:5px}.video-study .preschool-Mustread-div .studyhint-p{font-size:12px;color:#666;line-height:18px;margin-top:10px;text-align:center}.video-study .AchievementRules-div{margin-top:40px}.video-study .AchievementRules-div h1{font-size:18px;color:#000;line-height:30px;font-weight:700}.video-study .AchievementRules-div h2{font-size:14px;color:#2a2a2a;letter-spacing:.07px;line-height:24px;font-weight:700;margin-top:18px}.video-study .AchievementRules-div .p1{font-size:14px;color:#777;letter-spacing:.07px;line-height:24px}.video-study .AchievementRulesbg-div{background:#f7f9fe;border-radius:2px;padding:20px 25px}.video-study .AchievementRulesbg-div ul li{font-size:14px;color:#777;letter-spacing:.07px;line-height:24px}.video-study .AchievementRulesbg-div ul .bulefont{color:#3d84ff}.video-study .AchievementRuleslist{margin-bottom:45px}.video-study .nano-content-all{height:370px}.video-study .el-pagination{margin-bottom:18px}.video-study .el-pagination .el-pager li{background:#fff;border:1px solid #ededed;border-radius:12px;font-size:12px;color:#2a2a2a}.video-study .el-pagination .el-pager .active,.video-study .el-pagination .el-pager li:hover{background:#3d84ff;color:#fff;border:1px solid #3d84ff}.video-study-black .box-content .box-left .left-top{background:#1d1d1d;box-shadow:inset -1px 0 0 0 #2a2a2a;color:#777}.video-study-black .box-content .box-left .left-top .videotop_lesson,.video-study-black .box-content .box-left .left-top .videotop_lesson_tit{color:#bfbfbf}.video-study-black .box-content .box-left .left-top .videotop_all ul li em,.video-study-black .box-content .box-left .left-top .videotop_all ul li span{color:#777}.video-study-black .box-content .box-left .left-top .videotop_all ul li:hover em,.video-study-black .box-content .box-left .left-top .videotop_all ul li:hover span{color:#bfbfbf}.video-study-black .box-content .box-right{background:#1d1d1d}.video-study-black .box-content .box-right .newListTest li{color:#777}.video-study-black .box-content .box-right .newListTest li:hover{background:#2a2a2a}.video-study-black .box-content .box-right .newListTest li a{color:#777}.video-study-black .box-content .box-right .newListTest li a em{color:#bfbfbf}.video-study-black .box-content .box-right .newListTest li a div{margin-top:5px}.video-study-black .box-content .box-right .topicTitle{background:#2a2a2a;box-shadow:inset 0 -1px 0 0 #2a2a2a}.video-study-black .box-content .box-right .topicTitle ul .tabTitle{color:#bfbfbf}.video-study-black .box-content .box-right .list{background:url(//image.zhihuishu.com/zhs/ablecommons/demo/201907/2e21819f5b664b67b29113d2ba582974.png) 68px 0 repeat-y}.video-study-black .box-content .box-right .list li:hover{background:#2a2a2a;color:#ededed}.video-study-black .box-content .box-right .list li:hover .chapter-em{background:url(https://image.zhihuishu.com/zhs_yufa_150820/ablecommons/demo/201910/2592813a3dee4adb9687bd4e4805c8ba.png) no-repeat}.video-study-black .box-content .box-right .list li .catalogue_title3{color:#777}.video-study-black .box-content .box-right .list li .catalogue_title4{color:#999}.video-study-black .box-content .box-right .list li .catalogue_title{color:#ededed}.video-study-black .box-content .box-right .list li .time{color:#777}.video-study-black .box-content .box-right .list li .Sectionmark-em{background:url(//image.zhihuishu.com/zhs/ablecommons/demo/201907/bcefe48e05f44b38ab1bf8615c6ca3d0.png) no-repeat}.video-study-black .box-content .box-right .list .chapter-test .name{color:#ededed}.video-study-black .box-content .box-right .list .chapter-test .iconfont{color:#777}.video-study-black .box-content .box-right .list .chapter-test .iconyiwancheng{color:#3d84ff}.video-study-black .box-content .box-right .list .font_gray_inclined .chapter-em{background:url(https://image.zhihuishu.com/zhs_yufa_150820/ablecommons/demo/201910/92769ecc02ba46b39d7ae8785def5396.png) no-repeat}.video-study-black .box-content .box-right .list .current_play{background:rgba(61,132,255,.15);color:#3d84ff}.el-message-box{border-radius:2px}.el-message-box .el-message-box__header{padding:15px 30px}.el-message-box .el-message-box__header span{font-weight:700}.el-message-box .el-message-box__header .el-message-box__headerbtn{right:30px}.el-message-box .el-message-box__header .el-message-box__close{color:#777;font-size:18px}.el-message-box .el-message-box__header .el-message-box__close:before{background:inherit!important;color:#777!important}.el-message-box .el-message-box__content{padding:0;text-align:center}.el-message-box .el-message-box__content .el-message-box__message{padding:0}.el-message-box .el-message-box__content .el-message-box__message p{text-align:center;color:#2a2a2a;line-height:24px}.el-message-box .el-message-box__content .img{background:url(//image.zhihuishu.com/zhs/ablecommons/demo/201907/4f4b9902b4ca4cd18a66978a86bc181b.png) no-repeat;background-size:100% 100%;display:block;margin-bottom:5px;height:60px;width:60px;position:inherit;transform:inherit;display:inline-block}.el-message--info{height:50px;line-height:50px;color:#fff;background:#7e7e7c;font-size:12px;border-radius:50px;padding:0 20px;top:50%!important;left:50%;transform:translate(-50%,-50%);-webkit-transform:translate(-50%,-50%);-moz-transform:translate(-50%,-50%);-ms-transform:translate(-50%,-50%);-o-transform:translate(-50%,-50%)}.el-message--info .el-icon-info{display:none}@keyframes showSmallSty{0%{width:42px}to{width:300px}}@keyframes showBigSty{0%{width:300px}to{width:42px}}.swiper{position:relative;height:100%;width:100%;z-index:1000000}.swiper .close{position:fixed;top:20px;right:20px;z-index:20;cursor:pointer}.swiper .close i{font-size:24px;color:#fff}.swiper .swiper-mask{background:rgba(16,17,28,.7);z-index:5}.swiper .el-carousel,.swiper .swiper-mask{position:fixed;top:0;left:0;height:100%;width:100%}.swiper .el-carousel{z-index:10}.swiper .el-carousel .el-carousel__container{height:100%;overflow:hidden}.swiper .el-carousel .el-carousel__arrow{background-color:rgba(165,167,192,.5);width:48px;height:48px}.swiper .el-carousel [class*=" el-icon-"],.swiper .el-carousel [class^=el-icon-]{color:#3d4059;font-size:20px;font-weight:600}.swiper .el-carousel .el-carousel__indicators{display:none}.swiper .el-carousel .el-carousel__item{text-align:center;margin-top:calc((100vh - 460px)/2)}.swiper .el-carousel .swiper-img{max-width:690px;height:460px;-o-object-fit:cover;object-fit:cover}.swiper .swiper-num{position:absolute;top:50%;left:50%;font-size:24px;color:#a5a7c0;font-family:priceFont;margin-top:240px}.swiper .swiper-num span{font-size:32px;color:#fff}', ""])
    }, , function (t, e, i) {
        function n(t, e) {
            a.each(e, function (e) {
                e.update = "updateView", o.registerAction(e, function (i, n) {
                    var o = {};
                    return n.eachComponent({
                        mainType: "series",
                        subType: t,
                        query: i
                    }, function (t) {
                        t[e.method] && t[e.method](i.name, i.dataIndex);
                        var n = t.getData();
                        n.each(function (e) {
                            var i = n.getName(e);
                            o[i] = t.isSelected(i) || !1
                        })
                    }), {
                        name: i.name,
                        selected: o,
                        seriesId: i.seriesId
                    }
                })
            })
        }

        var o = i(639),
            a = i(630);
        t.exports = n
    }, function (t, e, i) {
        function n(t, e, i) {
            i = i || {}, _.isInstance(t) || (t = _.seriesDataToSource(t));
            var n, a = e.get("coordinateSystem"),
                d = g.get(a),
                u = m(e);
            u && (n = r.map(u.coordSysDims, function (t) {
                var e = {
                        name: t
                    },
                    i = u.axisMap.get(t);
                if (i) {
                    var n = i.get("type");
                    e.type = h(n)
                }
                return e
            })), n || (n = d && (d.getDimensionsInfo ? d.getDimensionsInfo() : d.dimensions.slice()) || ["x", "y"]);
            var c, f, p = l(t, {
                coordDimensions: n,
                generateCoord: i.generateCoord,
                encodeDefaulter: i.useEncodeDefaulter ? r.curry(w, n, e) : null
            });
            u && r.each(p, function (t, e) {
                var i = t.coordDim,
                    n = u.categoryAxisMap.get(i);
                n && (null == c && (c = e), t.ordinalMeta = n.getOrdinalMeta()), null != t.otherDims.itemName && (f = !0)
            }), f || null == c || (p[c].otherDims.itemName = 0);
            var v = x(e, p),
                y = new s(p, e);
            y.setCalculationInfo(v);
            var b = null != c && o(t) ? function (t, e, i, n) {
                return n === c ? i : this.defaultDimValueGetter(t, e, i, n)
            } : null;
            return y.hasItemOption = !1, y.initData(t, null, b), y
        }

        function o(t) {
            if (t.sourceFormat === u) {
                var e = a(t.data || []);
                return null != e && !r.isArray(p(e))
            }
        }

        function a(t) {
            for (var e = 0; e < t.length && null == t[e];) e++;
            return t[e]
        }

        var r = i(630),
            s = i(675),
            l = i(676),
            d = i(651),
            u = d.SOURCE_FORMAT_ORIGINAL,
            c = i(678),
            h = c.getDimensionTypeByAxis,
            f = i(631),
            p = f.getDataItemValue,
            g = i(697),
            v = i(810),
            m = v.getCoordSysInfoBySeries,
            _ = i(649),
            y = i(677),
            x = y.enableDataStack,
            b = i(644),
            w = b.makeSeriesEncodeForAxisCoordSys,
            S = n;
        t.exports = S
    }, function (t, e, i) {
        function n(t, e, i) {
            e = l(e) && {
                coordDimensions: e
            } || s({}, e);
            var n = t.getSource(),
                r = o(n, e),
                d = new a(r, t);
            return d.initData(n, i), d
        }

        var o = i(676),
            a = i(675),
            r = i(630),
            s = r.extend,
            l = r.isArray;
        t.exports = n
    }, function (t, e, i) {
        var n = i(639),
            o = i(630);
        i(777), i(778);
        var a = i(773),
            r = i(823),
            s = i(780),
            l = i(813);
        a("pie", [{
            type: "pieToggleSelect",
            event: "pieselectchanged",
            method: "toggleSelected"
        }, {
            type: "pieSelect",
            event: "pieselected",
            method: "select"
        }, {
            type: "pieUnSelect",
            event: "pieunselected",
            method: "unSelect"
        }]), n.registerVisual(r("pie")), n.registerLayout(o.curry(s, "pie")), n.registerProcessor(l("pie"))
    }, function (t, e, i) {
        var n = i(639),
            o = i(775),
            a = i(630),
            r = i(631),
            s = i(632),
            l = s.getPercentWithPrecision,
            d = i(783),
            u = i(650),
            c = u.retrieveRawAttr,
            h = i(644),
            f = h.makeSeriesEncodeForNameBased,
            p = i(821),
            g = n.extendSeriesModel({
                type: "series.pie",
                init: function (t) {
                    g.superApply(this, "init", arguments), this.legendVisualProvider = new p(a.bind(this.getData, this), a.bind(this.getRawData, this)), this.updateSelectedMap(this._createSelectableList()), this._defaultLabelLine(t)
                },
                mergeOption: function (t) {
                    g.superCall(this, "mergeOption", t), this.updateSelectedMap(this._createSelectableList())
                },
                getInitialData: function (t, e) {
                    return o(this, {
                        coordDimensions: ["value"],
                        encodeDefaulter: a.curry(f, this)
                    })
                },
                _createSelectableList: function () {
                    for (var t = this.getRawData(), e = t.mapDimension("value"), i = [], n = 0, o = t.count(); n < o; n++) i.push({
                        name: t.getName(n),
                        value: t.get(e, n),
                        selected: c(t, n, "selected")
                    });
                    return i
                },
                getDataParams: function (t) {
                    var e = this.getData(),
                        i = g.superCall(this, "getDataParams", t),
                        n = [];
                    return e.each(e.mapDimension("value"), function (t) {
                        n.push(t)
                    }), i.percent = l(n, t, e.hostModel.get("percentPrecision")), i.$vars.push("percent"), i
                },
                _defaultLabelLine: function (t) {
                    r.defaultEmphasis(t, "labelLine", ["show"]);
                    var e = t.labelLine,
                        i = t.emphasis.labelLine;
                    e.show = e.show && t.label.show, i.show = i.show && t.emphasis.label.show
                },
                defaultOption: {
                    zlevel: 0,
                    z: 2,
                    legendHoverLink: !0,
                    hoverAnimation: !0,
                    center: ["50%", "50%"],
                    radius: [0, "75%"],
                    clockwise: !0,
                    startAngle: 90,
                    minAngle: 0,
                    minShowLabelAngle: 0,
                    selectedOffset: 10,
                    hoverOffset: 10,
                    avoidLabelOverlap: !0,
                    percentPrecision: 2,
                    stillShowZeroSum: !0,
                    left: 0,
                    top: 0,
                    right: 0,
                    bottom: 0,
                    width: null,
                    height: null,
                    label: {
                        rotate: !1,
                        show: !0,
                        position: "outer",
                        alignTo: "none",
                        margin: "25%",
                        bleedMargin: 10,
                        distanceToLabelLine: 5
                    },
                    labelLine: {
                        show: !0,
                        length: 15,
                        length2: 15,
                        smooth: !1,
                        lineStyle: {
                            width: 1,
                            type: "solid"
                        }
                    },
                    itemStyle: {
                        borderWidth: 1
                    },
                    animationType: "expansion",
                    animationTypeUpdate: "transition",
                    animationEasing: "cubicOut"
                }
            });
        a.mixin(g, d);
        var v = g;
        t.exports = v
    }, function (t, e, i) {
        function n(t, e, i, n) {
            var a = e.getData(),
                r = this.dataIndex,
                s = a.getName(r),
                l = e.get("selectedOffset");
            n.dispatchAction({
                type: "pieToggleSelect",
                from: t,
                name: s,
                seriesId: e.id
            }), a.each(function (t) {
                o(a.getItemGraphicEl(t), a.getItemLayout(t), e.isSelected(a.getName(t)), l, i)
            })
        }

        function o(t, e, i, n, o) {
            var a = (e.startAngle + e.endAngle) / 2,
                r = Math.cos(a),
                s = Math.sin(a),
                l = i ? n : 0,
                d = [r * l, s * l];
            o ? t.animate().when(200, {
                position: d
            }).start("bounceOut") : t.attr("position", d)
        }

        function a(t, e) {
            s.Group.call(this);
            var i = new s.Sector({
                    z2: 2
                }),
                n = new s.Polyline,
                o = new s.Text;
            this.add(i), this.add(n), this.add(o), this.updateData(t, e, !0)
        }

        var r = i(630),
            s = i(638),
            l = i(709),
            d = a.prototype;
        d.updateData = function (t, e, i) {
            var n = this.childAt(0),
                a = this.childAt(1),
                l = this.childAt(2),
                d = t.hostModel,
                u = t.getItemModel(e),
                c = t.getItemLayout(e),
                h = r.extend({}, c);
            h.label = null;
            var f = d.getShallow("animationTypeUpdate");
            i ? (n.setShape(h), "scale" === d.getShallow("animationType") ? (n.shape.r = c.r0, s.initProps(n, {
                shape: {
                    r: c.r
                }
            }, d, e)) : (n.shape.endAngle = c.startAngle, s.updateProps(n, {
                shape: {
                    endAngle: c.endAngle
                }
            }, d, e))) : "expansion" === f ? n.setShape(h) : s.updateProps(n, {
                shape: h
            }, d, e);
            var p = t.getItemVisual(e, "color");
            n.useStyle(r.defaults({
                lineJoin: "bevel",
                fill: p
            }, u.getModel("itemStyle").getItemStyle())), n.hoverStyle = u.getModel("emphasis.itemStyle").getItemStyle();
            var g = u.getShallow("cursor");
            g && n.attr("cursor", g), o(this, t.getItemLayout(e), d.isSelected(t.getName(e)), d.get("selectedOffset"), d.get("animation"));
            var v = !i && "transition" === f;
            this._updateLabel(t, e, v), this.highDownOnUpdate = d.get("silent") ? null : function (t, e) {
                var i = d.isAnimationEnabled() && u.get("hoverAnimation");
                "emphasis" === e ? (a.ignore = a.hoverIgnore, l.ignore = l.hoverIgnore, i && (n.stopAnimation(!0), n.animateTo({
                    shape: {
                        r: c.r + d.get("hoverOffset")
                    }
                }, 300, "elasticOut"))) : (a.ignore = a.normalIgnore, l.ignore = l.normalIgnore, i && (n.stopAnimation(!0), n.animateTo({
                    shape: {
                        r: c.r
                    }
                }, 300, "elasticOut")))
            }, s.setHoverStyle(this)
        }, d._updateLabel = function (t, e, i) {
            var n = this.childAt(1),
                o = this.childAt(2),
                a = t.hostModel,
                r = t.getItemModel(e),
                l = t.getItemLayout(e),
                d = l.label,
                u = t.getItemVisual(e, "color");
            if (!d || isNaN(d.x) || isNaN(d.y)) return void (o.ignore = o.normalIgnore = o.hoverIgnore = n.ignore = n.normalIgnore = n.hoverIgnore = !0);
            var c = {
                    points: d.linePoints || [
                        [d.x, d.y],
                        [d.x, d.y],
                        [d.x, d.y]
                    ]
                },
                h = {
                    x: d.x,
                    y: d.y
                };
            i ? (s.updateProps(n, {
                shape: c
            }, a, e), s.updateProps(o, {
                style: h
            }, a, e)) : (n.attr({
                shape: c
            }), o.attr({
                style: h
            })), o.attr({
                rotation: d.rotation,
                origin: [d.x, d.y],
                z2: 10
            });
            var f = r.getModel("label"),
                p = r.getModel("emphasis.label"),
                g = r.getModel("labelLine"),
                v = r.getModel("emphasis.labelLine"),
                u = t.getItemVisual(e, "color");
            s.setLabelStyle(o.style, o.hoverStyle = {}, f, p, {
                labelFetcher: t.hostModel,
                labelDataIndex: e,
                defaultText: d.text,
                autoColor: u,
                useInsideStyle: !!d.inside
            }, {
                textAlign: d.textAlign,
                textVerticalAlign: d.verticalAlign,
                opacity: t.getItemVisual(e, "opacity")
            }), o.ignore = o.normalIgnore = !f.get("show"), o.hoverIgnore = !p.get("show"), n.ignore = n.normalIgnore = !g.get("show"), n.hoverIgnore = !v.get("show"), n.setStyle({
                stroke: u,
                opacity: t.getItemVisual(e, "opacity")
            }), n.setStyle(g.getModel("lineStyle").getLineStyle()), n.hoverStyle = v.getModel("lineStyle").getLineStyle();
            var m = g.get("smooth");
            m && !0 === m && (m = .4), n.setShape({
                smooth: m
            })
        }, r.inherits(a, s.Group);
        var u = l.extend({
                type: "pie",
                init: function () {
                    var t = new s.Group;
                    this._sectorGroup = t
                },
                render: function (t, e, i, o) {
                    if (!o || o.from !== this.uid) {
                        var s = t.getData(),
                            l = this._data,
                            d = this.group,
                            u = e.get("animation"),
                            c = !l,
                            h = t.get("animationType"),
                            f = t.get("animationTypeUpdate"),
                            p = r.curry(n, this.uid, t, u, i),
                            g = t.get("selectedMode");
                        if (s.diff(l).add(function (t) {
                            var e = new a(s, t);
                            c && "scale" !== h && e.eachChild(function (t) {
                                t.stopAnimation(!0)
                            }), g && e.on("click", p), s.setItemGraphicEl(t, e), d.add(e)
                        }).update(function (t, e) {
                            var i = l.getItemGraphicEl(e);
                            c || "transition" === f || i.eachChild(function (t) {
                                t.stopAnimation(!0)
                            }), i.updateData(s, t), i.off("click"), g && i.on("click", p), d.add(i), s.setItemGraphicEl(t, i)
                        }).remove(function (t) {
                            var e = l.getItemGraphicEl(t);
                            d.remove(e)
                        }).execute(), u && s.count() > 0 && (c ? "scale" !== h : "transition" !== f)) {
                            for (var v = s.getItemLayout(0), m = 1; isNaN(v.startAngle) && m < s.count(); ++m) v = s.getItemLayout(m);
                            var _ = Math.max(i.getWidth(), i.getHeight()) / 2,
                                y = r.bind(d.removeClipPath, d);
                            d.setClipPath(this._createClipPath(v.cx, v.cy, _, v.startAngle, v.clockwise, y, t, c))
                        } else d.removeClipPath();
                        this._data = s
                    }
                },
                dispose: function () {
                },
                _createClipPath: function (t, e, i, n, o, a, r, l) {
                    var d = new s.Sector({
                        shape: {
                            cx: t,
                            cy: e,
                            r0: 0,
                            r: i,
                            startAngle: n,
                            endAngle: n,
                            clockwise: o
                        }
                    });
                    return (l ? s.initProps : s.updateProps)(d, {
                        shape: {
                            endAngle: n + (o ? 1 : -1) * Math.PI * 2
                        }
                    }, r, a), d
                },
                containPoint: function (t, e) {
                    var i = e.getData(),
                        n = i.getItemLayout(0);
                    if (n) {
                        var o = t[0] - n.cx,
                            a = t[1] - n.cy,
                            r = Math.sqrt(o * o + a * a);
                        return r <= n.r && r >= n.r0
                    }
                }
            }),
            c = u;
        t.exports = c
    }, function (t, e, i) {
        function n(t, e, i, n, o, a, r, s, l, d) {
            function u(e, i) {
                for (var n = e; n >= 0 && !(t[n].y - i < l) && (t[n].y -= i, !(n > 0 && t[n].y > t[n - 1].y + t[n - 1].height)); n--) ;
            }

            function c(t, e, i, n, o, a) {
                for (var r = e ? Number.MAX_VALUE : 0, s = 0, l = t.length; s < l; s++)
                    if ("none" === t[s].labelAlignTo) {
                        var d = Math.abs(t[s].y - n),
                            u = t[s].len,
                            c = t[s].len2,
                            h = d < o + u ? Math.sqrt((o + u + c) * (o + u + c) - d * d) : Math.abs(t[s].x - i);
                        e && h >= r && (h = r - 10), !e && h <= r && (h = r + 10), t[s].x = i + h * a, r = h
                    }
            }

            t.sort(function (t, e) {
                return t.y - e.y
            });
            for (var h, f = 0, p = t.length, g = [], v = [], m = 0; m < p; m++) {
                if ("outer" === t[m].position && "labelLine" === t[m].labelAlignTo) {
                    var _ = t[m].x - d;
                    t[m].linePoints[1][0] += _, t[m].x = d
                }
                h = t[m].y - f, h < 0 && function (e, i, n, o) {
                    for (var a = e; a < i && !(t[a].y + n > l + r); a++)
                        if (t[a].y += n, a > e && a + 1 < i && t[a + 1].y > t[a].y + t[a].height) return void u(a, n / 2);
                    u(i - 1, n / 2)
                }(m, p, -h), f = t[m].y + t[m].height
            }
            r - f < 0 && u(p - 1, f - r);
            for (var m = 0; m < p; m++) t[m].y >= i ? v.push(t[m]) : g.push(t[m]);
            c(g, !1, e, i, n, o), c(v, !0, e, i, n, o)
        }

        function o(t, e, i, o, r, l, d, u) {
            for (var c = [], h = [], f = Number.MAX_VALUE, p = -Number.MAX_VALUE, g = 0; g < t.length; g++) a(t[g]) || (t[g].x < e ? (f = Math.min(f, t[g].x), c.push(t[g])) : (p = Math.max(p, t[g].x), h.push(t[g])));
            n(h, e, i, o, 1, r, l, d, u, p), n(c, e, i, o, -1, r, l, d, u, f);
            for (var g = 0; g < t.length; g++) {
                var v = t[g];
                if (!a(v)) {
                    var m = v.linePoints;
                    if (m) {
                        var _, y = "edge" === v.labelAlignTo,
                            x = v.textRect.width;
                        (_ = y ? v.x < e ? m[2][0] - v.labelDistance - d - v.labelMargin : d + r - v.labelMargin - m[2][0] - v.labelDistance : v.x < e ? v.x - d - v.bleedMargin : d + r - v.x - v.bleedMargin) < v.textRect.width && (v.text = s.truncateText(v.text, _, v.font), "edge" === v.labelAlignTo && (x = s.getWidth(v.text, v.font)));
                        var b = m[1][0] - m[2][0];
                        y ? v.x < e ? m[2][0] = d + v.labelMargin + x + v.labelDistance : m[2][0] = d + r - v.labelMargin - x - v.labelDistance : (v.x < e ? m[2][0] = v.x + v.labelDistance : m[2][0] = v.x - v.labelDistance, m[1][0] = m[2][0] + b), m[1][1] = m[2][1] = v.y
                    }
                }
            }
        }

        function a(t) {
            return "center" === t.position
        }

        function r(t, e, i, n, a, r) {
            var l, c, h = t.getData(),
                f = [],
                p = !1,
                g = (t.get("minShowLabelAngle") || 0) * u;
            h.each(function (n) {
                var o = h.getItemLayout(n),
                    r = h.getItemModel(n),
                    u = r.getModel("label"),
                    v = u.get("position") || r.get("emphasis.label.position"),
                    m = u.get("distanceToLabelLine"),
                    _ = u.get("alignTo"),
                    y = d(u.get("margin"), i),
                    x = u.get("bleedMargin"),
                    b = u.getFont(),
                    w = r.getModel("labelLine"),
                    S = w.get("length");
                S = d(S, i);
                var C = w.get("length2");
                if (C = d(C, i), !(o.angle < g)) {
                    var k, I, T, D, M = (o.startAngle + o.endAngle) / 2,
                        A = Math.cos(M),
                        L = Math.sin(M);
                    l = o.cx, c = o.cy;
                    var P = t.getFormattedLabel(n, "normal") || h.getName(n),
                        O = s.getBoundingRect(P, b, D, "top"),
                        R = "inside" === v || "inner" === v;
                    if ("center" === v) k = o.cx, I = o.cy, D = "center";
                    else {
                        var E = (R ? (o.r + o.r0) / 2 * A : o.r * A) + l,
                            z = (R ? (o.r + o.r0) / 2 * L : o.r * L) + c;
                        if (k = E + 3 * A, I = z + 3 * L, !R) {
                            var N = E + A * (S + e - o.r),
                                B = z + L * (S + e - o.r),
                                F = N + (A < 0 ? -1 : 1) * C,
                                V = B;
                            k = "edge" === _ ? A < 0 ? a + y : a + i - y : F + (A < 0 ? -m : m), I = V, T = [
                                [E, z],
                                [N, B],
                                [F, V]
                            ]
                        }
                        D = R ? "center" : "edge" === _ ? A > 0 ? "right" : "left" : A > 0 ? "left" : "right"
                    }
                    var H, q = u.get("rotate");
                    H = "number" == typeof q ? q * (Math.PI / 180) : q ? A < 0 ? -M + Math.PI : -M : 0, p = !!H, o.label = {
                        x: k,
                        y: I,
                        position: v,
                        height: O.height,
                        len: S,
                        len2: C,
                        linePoints: T,
                        textAlign: D,
                        verticalAlign: "middle",
                        rotation: H,
                        inside: R,
                        labelDistance: m,
                        labelAlignTo: _,
                        labelMargin: y,
                        bleedMargin: x,
                        textRect: O,
                        text: P,
                        font: b
                    }, R || f.push(o.label)
                }
            }), !p && t.get("avoidLabelOverlap") && o(f, l, c, e, i, n, a, r)
        }

        var s = i(640),
            l = i(632),
            d = l.parsePercent,
            u = Math.PI / 180;
        t.exports = r
    }, function (t, e, i) {
        function n(t, e) {
            return l.getLayoutRect(t.getBoxLayoutParams(), {
                width: e.getWidth(),
                height: e.getHeight()
            })
        }

        function o(t, e, i, o) {
            e.eachSeriesByType(t, function (t) {
                var e = t.getData(),
                    o = e.mapDimension("value"),
                    a = n(t, i),
                    l = t.get("center"),
                    f = t.get("radius");
                u.isArray(f) || (f = [0, f]), u.isArray(l) || (l = [l, l]);
                var p = r(a.width, i.getWidth()),
                    g = r(a.height, i.getHeight()),
                    v = Math.min(p, g),
                    m = r(l[0], p) + a.x,
                    _ = r(l[1], g) + a.y,
                    y = r(f[0], v / 2),
                    x = r(f[1], v / 2),
                    b = -t.get("startAngle") * h,
                    w = t.get("minAngle") * h,
                    S = 0;
                e.each(o, function (t) {
                    !isNaN(t) && S++
                });
                var C = e.getSum(o),
                    k = Math.PI / (C || S) * 2,
                    I = t.get("clockwise"),
                    T = t.get("roseType"),
                    D = t.get("stillShowZeroSum"),
                    M = e.getDataExtent(o);
                M[0] = 0;
                var A = c,
                    L = 0,
                    P = b,
                    O = I ? 1 : -1;
                if (e.each(o, function (t, i) {
                    var n;
                    if (isNaN(t)) return void e.setItemLayout(i, {
                        angle: NaN,
                        startAngle: NaN,
                        endAngle: NaN,
                        clockwise: I,
                        cx: m,
                        cy: _,
                        r0: y,
                        r: T ? NaN : x,
                        viewRect: a
                    });
                    n = "area" !== T ? 0 === C && D ? k : t * k : c / S, n < w ? (n = w, A -= w) : L += t;
                    var o = P + O * n;
                    e.setItemLayout(i, {
                        angle: n,
                        startAngle: P,
                        endAngle: o,
                        clockwise: I,
                        cx: m,
                        cy: _,
                        r0: y,
                        r: T ? s(t, M, [y, x]) : x,
                        viewRect: a
                    }), P = o
                }), A < c && S)
                    if (A <= .001) {
                        var R = c / S;
                        e.each(o, function (t, i) {
                            if (!isNaN(t)) {
                                var n = e.getItemLayout(i);
                                n.angle = R, n.startAngle = b + O * i * R, n.endAngle = b + O * (i + 1) * R
                            }
                        })
                    } else k = A / L, P = b, e.each(o, function (t, i) {
                        if (!isNaN(t)) {
                            var n = e.getItemLayout(i),
                                o = n.angle === w ? w : t * k;
                            n.startAngle = P, n.endAngle = P + O * o, P += O * o
                        }
                    });
                d(t, x, a.width, a.height, a.x, a.y)
            })
        }

        var a = i(632),
            r = a.parsePercent,
            s = a.linearMap,
            l = i(647),
            d = i(779),
            u = i(630),
            c = 2 * Math.PI,
            h = Math.PI / 180;
        t.exports = o
    }, function (t, e, i) {
        var n = i(645),
            o = i(710),
            a = i(644),
            r = a.detectSourceFormat,
            s = i(651),
            l = s.SERIES_LAYOUT_BY_COLUMN;
        n.extend({
            type: "dataset",
            defaultOption: {
                seriesLayoutBy: l,
                sourceHeader: null,
                dimensions: null,
                source: null
            },
            optionUpdated: function () {
                r(this)
            }
        }), o.extend({
            type: "dataset"
        })
    }, function (t, e, i) {
        function n(t, e, i) {
            var n = e.getBoxLayoutParams(),
                o = e.get("padding"),
                a = {
                    width: i.getWidth(),
                    height: i.getHeight()
                },
                d = r(n, a, o);
            s(e.get("orient"), t, e.get("itemGap"), d.width, d.height), l(t, n, a, o)
        }

        function o(t, e) {
            var i = d.normalizeCssArray(e.get("padding")),
                n = e.getItemStyle(["color", "opacity"]);
            n.fill = e.get("backgroundColor");
            var t = new u.Rect({
                shape: {
                    x: t.x - i[3],
                    y: t.y - i[0],
                    width: t.width + i[1] + i[3],
                    height: t.height + i[0] + i[2],
                    r: e.get("borderRadius")
                },
                style: n,
                silent: !0,
                z2: -1
            });
            return t
        }

        var a = i(647),
            r = a.getLayoutRect,
            s = a.box,
            l = a.positionElement,
            d = i(642),
            u = i(638);
        e.layout = n, e.makeBackground = o
    }, function (t, e, i) {
        var n = i(630),
            o = {
                updateSelectedMap: function (t) {
                    this._targetList = n.isArray(t) ? t.slice() : [], this._selectTargetMap = n.reduce(t || [], function (t, e) {
                        return t.set(e.name, e), t
                    }, n.createHashMap())
                },
                select: function (t, e) {
                    var i = null != e ? this._targetList[e] : this._selectTargetMap.get(t);
                    "single" === this.get("selectedMode") && this._selectTargetMap.each(function (t) {
                        t.selected = !1
                    }), i && (i.selected = !0)
                },
                unSelect: function (t, e) {
                    var i = null != e ? this._targetList[e] : this._selectTargetMap.get(t);
                    i && (i.selected = !1)
                },
                toggleSelected: function (t, e) {
                    var i = null != e ? this._targetList[e] : this._selectTargetMap.get(t);
                    if (null != i) return this[i.selected ? "unSelect" : "select"](t, e), i.selected
                },
                isSelected: function (t, e) {
                    var i = null != e ? this._targetList[e] : this._selectTargetMap.get(t);
                    return i && i.selected
                }
            };
        t.exports = o
    }, function (t, e, i) {
        var n = i(639);
        i(785), i(787), i(786);
        var o = i(788),
            a = i(645);
        n.registerProcessor(n.PRIORITY.PROCESSOR.SERIES_FILTER, o), a.registerSubTypeDefaulter("legend", function () {
            return "plain"
        })
    }, function (t, e, i) {
        var n = i(639),
            o = i(630),
            a = i(646),
            r = i(631),
            s = r.isNameSpecified,
            l = i(703),
            d = l.legend.selector,
            u = {
                all: {
                    type: "all",
                    title: o.clone(d.all)
                },
                inverse: {
                    type: "inverse",
                    title: o.clone(d.inverse)
                }
            },
            c = n.extendComponentModel({
                type: "legend.plain",
                dependencies: ["series"],
                layoutMode: {
                    type: "box",
                    ignoreSize: !0
                },
                init: function (t, e, i) {
                    this.mergeDefaultAndTheme(t, i), t.selected = t.selected || {}, this._updateSelector(t)
                },
                mergeOption: function (t) {
                    c.superCall(this, "mergeOption", t), this._updateSelector(t)
                },
                _updateSelector: function (t) {
                    var e = t.selector;
                    !0 === e && (e = t.selector = ["all", "inverse"]), o.isArray(e) && o.each(e, function (t, i) {
                        o.isString(t) && (t = {
                            type: t
                        }), e[i] = o.merge(t, u[t.type])
                    })
                },
                optionUpdated: function () {
                    this._updateData(this.ecModel);
                    var t = this._data;
                    if (t[0] && "single" === this.get("selectedMode")) {
                        for (var e = !1, i = 0; i < t.length; i++) {
                            var n = t[i].get("name");
                            if (this.isSelected(n)) {
                                this.select(n), e = !0;
                                break
                            }
                        }
                        !e && this.select(t[0].get("name"))
                    }
                },
                _updateData: function (t) {
                    var e = [],
                        i = [];
                    t.eachRawSeries(function (n) {
                        var o = n.name;
                        i.push(o);
                        var a;
                        if (n.legendVisualProvider) {
                            var r = n.legendVisualProvider,
                                l = r.getAllNames();
                            t.isSeriesFiltered(n) || (i = i.concat(l)), l.length ? e = e.concat(l) : a = !0
                        } else a = !0;
                        a && s(n) && e.push(n.name)
                    }), this._availableNames = i;
                    var n = this.get("data") || e,
                        r = o.map(n, function (t) {
                            return "string" != typeof t && "number" != typeof t || (t = {
                                name: t
                            }), new a(t, this, this.ecModel)
                        }, this);
                    this._data = r
                },
                getData: function () {
                    return this._data
                },
                select: function (t) {
                    var e = this.option.selected;
                    if ("single" === this.get("selectedMode")) {
                        var i = this._data;
                        o.each(i, function (t) {
                            e[t.get("name")] = !1
                        })
                    }
                    e[t] = !0
                },
                unSelect: function (t) {
                    "single" !== this.get("selectedMode") && (this.option.selected[t] = !1)
                },
                toggleSelected: function (t) {
                    var e = this.option.selected;
                    e.hasOwnProperty(t) || (e[t] = !0), this[e[t] ? "unSelect" : "select"](t)
                },
                allSelect: function () {
                    var t = this._data,
                        e = this.option.selected;
                    o.each(t, function (t) {
                        e[t.get("name", !0)] = !0
                    })
                },
                inverseSelect: function () {
                    var t = this._data,
                        e = this.option.selected;
                    o.each(t, function (t) {
                        var i = t.get("name", !0);
                        e.hasOwnProperty(i) || (e[i] = !0), e[i] = !e[i]
                    })
                },
                isSelected: function (t) {
                    var e = this.option.selected;
                    return !(e.hasOwnProperty(t) && !e[t]) && o.indexOf(this._availableNames, t) >= 0
                },
                getOrient: function () {
                    return "vertical" === this.get("orient") ? {
                        index: 1,
                        name: "vertical"
                    } : {
                        index: 0,
                        name: "horizontal"
                    }
                },
                defaultOption: {
                    zlevel: 0,
                    z: 4,
                    show: !0,
                    orient: "horizontal",
                    left: "center",
                    top: 0,
                    align: "auto",
                    backgroundColor: "rgba(0,0,0,0)",
                    borderColor: "#ccc",
                    borderRadius: 0,
                    borderWidth: 0,
                    padding: 5,
                    itemGap: 10,
                    itemWidth: 25,
                    itemHeight: 14,
                    inactiveColor: "#ccc",
                    inactiveBorderColor: "#ccc",
                    itemStyle: {
                        borderWidth: 0
                    },
                    textStyle: {
                        color: "#333"
                    },
                    selectedMode: !0,
                    selector: !1,
                    selectorLabel: {
                        show: !0,
                        borderRadius: 10,
                        padding: [3, 5, 3, 5],
                        fontSize: 12,
                        fontFamily: " sans-serif",
                        color: "#666",
                        borderWidth: 1,
                        borderColor: "#666"
                    },
                    emphasis: {
                        selectorLabel: {
                            show: !0,
                            color: "#eee",
                            backgroundColor: "#666"
                        }
                    },
                    selectorPosition: "auto",
                    selectorItemGap: 7,
                    selectorButtonGap: 10,
                    tooltip: {
                        show: !1
                    }
                }
            }),
            h = c;
        t.exports = h
    }, function (t, e, i) {
        function n(t, e, i, n, o, a) {
            var r;
            return "line" !== e && e.indexOf("empty") < 0 ? (r = i.getItemStyle(), t.style.stroke = n, a || (r.stroke = o)) : r = i.getItemStyle(["borderWidth", "borderColor"]), t.setStyle(r)
        }

        function o(t, e, i, n) {
            r(t, e, i, n), i.dispatchAction({
                type: "legendToggleSelect",
                name: null != t ? t : e
            }), a(t, e, i, n)
        }

        function a(t, e, i, n) {
            var o = i.getZr().storage.getDisplayList()[0];
            o && o.useHoverLayer || i.dispatchAction({
                type: "highlight",
                seriesName: t,
                name: e,
                excludeSeriesId: n
            })
        }

        function r(t, e, i, n) {
            var o = i.getZr().storage.getDisplayList()[0];
            o && o.useHoverLayer || i.dispatchAction({
                type: "downplay",
                seriesName: t,
                name: e,
                excludeSeriesId: n
            })
        }

        var s = i(634),
            l = (s.__DEV__, i(639)),
            d = i(630),
            u = i(707),
            c = u.createSymbol,
            h = i(638),
            f = i(782),
            p = f.makeBackground,
            g = i(647),
            v = d.curry,
            m = d.each,
            _ = h.Group,
            y = l.extendComponentView({
                type: "legend.plain",
                newlineDisabled: !1,
                init: function () {
                    this.group.add(this._contentGroup = new _), this._backgroundEl, this.group.add(this._selectorGroup = new _), this._isFirstRender = !0
                },
                getContentGroup: function () {
                    return this._contentGroup
                },
                getSelectorGroup: function () {
                    return this._selectorGroup
                },
                render: function (t, e, i) {
                    var n = this._isFirstRender;
                    if (this._isFirstRender = !1, this.resetInner(), t.get("show", !0)) {
                        var o = t.get("align"),
                            a = t.get("orient");
                        o && "auto" !== o || (o = "right" === t.get("left") && "vertical" === a ? "right" : "left");
                        var r = t.get("selector", !0),
                            s = t.get("selectorPosition", !0);
                        !r || s && "auto" !== s || (s = "horizontal" === a ? "end" : "start"), this.renderInner(o, t, e, i, r, a, s);
                        var l = t.getBoxLayoutParams(),
                            u = {
                                width: i.getWidth(),
                                height: i.getHeight()
                            },
                            c = t.get("padding"),
                            h = g.getLayoutRect(l, u, c),
                            f = this.layoutInner(t, o, h, n, r, s),
                            v = g.getLayoutRect(d.defaults({
                                width: f.width,
                                height: f.height
                            }, l), u, c);
                        this.group.attr("position", [v.x - f.x, v.y - f.y]), this.group.add(this._backgroundEl = p(f, t))
                    }
                },
                resetInner: function () {
                    this.getContentGroup().removeAll(), this._backgroundEl && this.group.remove(this._backgroundEl), this.getSelectorGroup().removeAll()
                },
                renderInner: function (t, e, i, n, s, l, u) {
                    var c = this.getContentGroup(),
                        h = d.createHashMap(),
                        f = e.get("selectedMode"),
                        p = [];
                    i.eachRawSeries(function (t) {
                        !t.get("legendHoverLink") && p.push(t.id)
                    }), m(e.getData(), function (s, l) {
                        var d = s.get("name");
                        if (!this.newlineDisabled && ("" === d || "\n" === d)) return void c.add(new _({
                            newline: !0
                        }));
                        var u = i.getSeriesByName(d)[0];
                        if (!h.get(d))
                            if (u) {
                                var g = u.getData(),
                                    m = g.getVisual("color"),
                                    y = g.getVisual("borderColor");
                                "function" == typeof m && (m = m(u.getDataParams(0))), "function" == typeof y && (y = y(u.getDataParams(0)));
                                var x = g.getVisual("legendSymbol") || "roundRect",
                                    b = g.getVisual("symbol"),
                                    w = this._createItem(d, l, s, e, x, b, t, m, y, f);
                                w.on("click", v(o, d, null, n, p)).on("mouseover", v(a, u.name, null, n, p)).on("mouseout", v(r, u.name, null, n, p)), h.set(d, !0)
                            } else i.eachRawSeries(function (i) {
                                if (!h.get(d) && i.legendVisualProvider) {
                                    var u = i.legendVisualProvider;
                                    if (!u.containName(d)) return;
                                    var c = u.indexOfName(d),
                                        g = u.getItemVisual(c, "color"),
                                        m = u.getItemVisual(c, "borderColor");
                                    this._createItem(d, l, s, e, "roundRect", null, t, g, m, f).on("click", v(o, null, d, n, p)).on("mouseover", v(a, null, d, n, p)).on("mouseout", v(r, null, d, n, p)), h.set(d, !0)
                                }
                            }, this)
                    }, this), s && this._createSelector(s, e, n, l, u)
                },
                _createSelector: function (t, e, i, n, o) {
                    function a(t) {
                        var n = t.type,
                            o = new h.Text({
                                style: {
                                    x: 0,
                                    y: 0,
                                    align: "center",
                                    verticalAlign: "middle"
                                },
                                onclick: function () {
                                    i.dispatchAction({
                                        type: "all" === n ? "legendAllSelect" : "legendInverseSelect"
                                    })
                                }
                            });
                        r.add(o);
                        var a = e.getModel("selectorLabel"),
                            s = e.getModel("emphasis.selectorLabel");
                        h.setLabelStyle(o.style, o.hoverStyle = {}, a, s, {
                            defaultText: t.title,
                            isRectText: !1
                        }), h.setHoverStyle(o)
                    }

                    var r = this.getSelectorGroup();
                    m(t, function (t) {
                        a(t)
                    })
                },
                _createItem: function (t, e, i, o, a, r, s, l, u, f) {
                    var p = o.get("itemWidth"),
                        g = o.get("itemHeight"),
                        v = o.get("inactiveColor"),
                        m = o.get("inactiveBorderColor"),
                        y = o.get("symbolKeepAspect"),
                        x = o.getModel("itemStyle"),
                        b = o.isSelected(t),
                        w = new _,
                        S = i.getModel("textStyle"),
                        C = i.get("icon"),
                        k = i.getModel("tooltip"),
                        I = k.parentModel;
                    a = C || a;
                    var T = c(a, 0, 0, p, g, b ? l : v, null == y || y);
                    if (w.add(n(T, a, x, u, m, b)), !C && r && (r !== a || "none" === r)) {
                        var D = .8 * g;
                        "none" === r && (r = "circle");
                        var M = c(r, (p - D) / 2, (g - D) / 2, D, D, b ? l : v, null == y || y);
                        w.add(n(M, r, x, u, m, b))
                    }
                    var A = "left" === s ? p + 5 : -5,
                        L = s,
                        P = o.get("formatter"),
                        O = t;
                    "string" == typeof P && P ? O = P.replace("{name}", null != t ? t : "") : "function" == typeof P && (O = P(t)), w.add(new h.Text({
                        style: h.setTextStyle({}, S, {
                            text: O,
                            x: A,
                            y: g / 2,
                            textFill: b ? S.getTextColor() : v,
                            textAlign: L,
                            textVerticalAlign: "middle"
                        })
                    }));
                    var R = new h.Rect({
                        shape: w.getBoundingRect(),
                        invisible: !0,
                        tooltip: k.get("show") ? d.extend({
                            content: t,
                            formatter: I.get("formatter", !0) || function () {
                                return t
                            },
                            formatterParams: {
                                componentType: "legend",
                                legendIndex: o.componentIndex,
                                name: t,
                                $vars: ["name"]
                            }
                        }, k.option) : null
                    });
                    return w.add(R), w.eachChild(function (t) {
                        t.silent = !0
                    }), R.silent = !f, this.getContentGroup().add(w), h.setHoverStyle(w), w.__legendDataIndex = e, w
                },
                layoutInner: function (t, e, i, n, o, a) {
                    var r = this.getContentGroup(),
                        s = this.getSelectorGroup();
                    g.box(t.get("orient"), r, t.get("itemGap"), i.width, i.height);
                    var l = r.getBoundingRect(),
                        d = [-l.x, -l.y];
                    if (o) {
                        g.box("horizontal", s, t.get("selectorItemGap", !0));
                        var u = s.getBoundingRect(),
                            c = [-u.x, -u.y],
                            h = t.get("selectorButtonGap", !0),
                            f = t.getOrient().index,
                            p = 0 === f ? "width" : "height",
                            v = 0 === f ? "height" : "width",
                            m = 0 === f ? "y" : "x";
                        "end" === a ? c[f] += l[p] + h : d[f] += u[p] + h, c[1 - f] += l[v] / 2 - u[v] / 2, s.attr("position", c), r.attr("position", d);
                        var _ = {
                            x: 0,
                            y: 0
                        };
                        return _[p] = l[p] + h + u[p], _[v] = Math.max(l[v], u[v]), _[m] = Math.min(0, u[m] + c[1 - f]), _
                    }
                    return r.attr("position", d), this.group.getBoundingRect()
                },
                remove: function () {
                    this.getContentGroup().removeAll(), this._isFirstRender = !0
                }
            });
        t.exports = y
    }, function (t, e, i) {
        function n(t, e, i) {
            var n, o = {},
                r = "toggleSelected" === t;
            return i.eachComponent("legend", function (i) {
                r && null != n ? i[n ? "select" : "unSelect"](e.name) : "allSelect" === t || "inverseSelect" === t ? i[t]() : (i[t](e.name), n = i.isSelected(e.name));
                var s = i.getData();
                a.each(s, function (t) {
                    var e = t.get("name");
                    if ("\n" !== e && "" !== e) {
                        var n = i.isSelected(e);
                        o.hasOwnProperty(e) ? o[e] = o[e] && n : o[e] = n
                    }
                })
            }), "allSelect" === t || "inverseSelect" === t ? {
                selected: o
            } : {
                name: e.name,
                selected: o
            }
        }

        var o = i(639),
            a = i(630);
        o.registerAction("legendToggleSelect", "legendselectchanged", a.curry(n, "toggleSelected")), o.registerAction("legendAllSelect", "legendselectall", a.curry(n, "allSelect")), o.registerAction("legendInverseSelect", "legendinverseselect", a.curry(n, "inverseSelect")), o.registerAction("legendSelect", "legendselected", a.curry(n, "select")), o.registerAction("legendUnSelect", "legendunselected", a.curry(n, "unSelect"))
    }, function (t, e) {
        function i(t) {
            var e = t.findComponents({
                mainType: "legend"
            });
            e && e.length && t.filterSeries(function (t) {
                for (var i = 0; i < e.length; i++)
                    if (!e[i].isSelected(t.name)) return !1;
                return !0
            })
        }

        t.exports = i
    }, function (t, e, i) {
        function n(t, e) {
            var i = t[1] - t[0],
                n = e,
                o = i / n / 2;
            t[0] += o, t[1] -= o
        }

        function o(t, e, i, n) {
            function o(t, e) {
                return t = c(t), e = c(e), f ? t > e : t < e
            }

            var a = e.length;
            if (t.onBand && !i && a) {
                var s, l, d = t.getExtent();
                if (1 === a) e[0].coord = d[0], s = e[1] = {
                    coord: d[0]
                };
                else {
                    var u = e[a - 1].tickValue - e[0].tickValue,
                        h = (e[a - 1].coord - e[0].coord) / u;
                    r(e, function (t) {
                        t.coord -= h / 2
                    }), l = 1 + t.scale.getExtent()[1] - e[a - 1].tickValue, s = {
                        coord: e[a - 1].coord + h * l
                    }, e.push(s)
                }
                var f = d[0] > d[1];
                o(e[0].coord, d[0]) && (n ? e[0].coord = d[0] : e.shift()), n && o(d[0], e[0].coord) && e.unshift({
                    coord: d[0]
                }), o(d[1], s.coord) && (n ? s.coord = d[1] : e.pop()), n && o(s.coord, d[1]) && e.push({
                    coord: d[1]
                })
            }
        }

        var a = i(630),
            r = a.each,
            s = a.map,
            l = i(632),
            d = l.linearMap,
            u = l.getPixelPrecision,
            c = l.round,
            h = i(791),
            f = h.createAxisTicks,
            p = h.createAxisLabels,
            g = h.calculateCategoryInterval,
            v = [0, 1],
            m = function (t, e, i) {
                this.dim = t, this.scale = e, this._extent = i || [0, 0], this.inverse = !1, this.onBand = !1
            };
        m.prototype = {
            constructor: m,
            contain: function (t) {
                var e = this._extent,
                    i = Math.min(e[0], e[1]),
                    n = Math.max(e[0], e[1]);
                return t >= i && t <= n
            },
            containData: function (t) {
                return this.scale.contain(t)
            },
            getExtent: function () {
                return this._extent.slice()
            },
            getPixelPrecision: function (t) {
                return u(t || this.scale.getExtent(), this._extent)
            },
            setExtent: function (t, e) {
                var i = this._extent;
                i[0] = t, i[1] = e
            },
            dataToCoord: function (t, e) {
                var i = this._extent,
                    o = this.scale;
                return t = o.normalize(t), this.onBand && "ordinal" === o.type && (i = i.slice(), n(i, o.count())), d(t, v, i, e)
            },
            coordToData: function (t, e) {
                var i = this._extent,
                    o = this.scale;
                this.onBand && "ordinal" === o.type && (i = i.slice(), n(i, o.count()));
                var a = d(t, i, v, e);
                return this.scale.scale(a)
            },
            pointToData: function (t, e) {
            },
            getTicksCoords: function (t) {
                t = t || {};
                var e = t.tickModel || this.getTickModel(),
                    i = f(this, e),
                    n = i.ticks,
                    a = s(n, function (t) {
                        return {
                            coord: this.dataToCoord(t),
                            tickValue: t
                        }
                    }, this);
                return o(this, a, e.get("alignWithLabel"), t.clamp), a
            },
            getMinorTicksCoords: function () {
                if ("ordinal" === this.scale.type) return [];
                var t = this.model.getModel("minorTick"),
                    e = t.get("splitNumber");
                e > 0 && e < 100 || (e = 5);
                var i = this.scale.getMinorTicks(e);
                return s(i, function (t) {
                    return s(t, function (t) {
                        return {
                            coord: this.dataToCoord(t),
                            tickValue: t
                        }
                    }, this)
                }, this)
            },
            getViewLabels: function () {
                return p(this).labels
            },
            getLabelModel: function () {
                return this.model.getModel("axisLabel")
            },
            getTickModel: function () {
                return this.model.getModel("axisTick")
            },
            getBandWidth: function () {
                var t = this._extent,
                    e = this.scale.getExtent(),
                    i = e[1] - e[0] + (this.onBand ? 1 : 0);
                0 === i && (i = 1);
                var n = Math.abs(t[1] - t[0]);
                return Math.abs(n) / i
            },
            isHorizontal: null,
            getRotate: null,
            calculateCategoryInterval: function () {
                return g(this)
            }
        };
        var _ = m;
        t.exports = _
    }, function (t, e, i) {
        var n = i(630),
            o = {
                getMin: function (t) {
                    var e = this.option,
                        i = t || null == e.rangeStart ? e.min : e.rangeStart;
                    return this.axis && null != i && "dataMin" !== i && "function" != typeof i && !n.eqNaN(i) && (i = this.axis.scale.parse(i)), i
                },
                getMax: function (t) {
                    var e = this.option,
                        i = t || null == e.rangeEnd ? e.max : e.rangeEnd;
                    return this.axis && null != i && "dataMax" !== i && "function" != typeof i && !n.eqNaN(i) && (i = this.axis.scale.parse(i)), i
                },
                getNeedCrossZero: function () {
                    var t = this.option;
                    return null == t.rangeStart && null == t.rangeEnd && !t.scale
                },
                getCoordSysModel: n.noop,
                setRange: function (t, e) {
                    this.option.rangeStart = t, this.option.rangeEnd = e
                },
                resetRange: function () {
                    this.option.rangeStart = this.option.rangeEnd = null
                }
            };
        t.exports = o
    }, function (t, e, i) {
        function n(t) {
            return "category" === t.type ? a(t) : l(t)
        }

        function o(t, e) {
            return "category" === t.type ? s(t, e) : {
                ticks: t.scale.getTicks()
            }
        }

        function a(t) {
            var e = t.getLabelModel(),
                i = r(t, e);
            return !e.get("show") || t.scale.isBlank() ? {
                labels: [],
                labelCategoryInterval: i.labelCategoryInterval
            } : i
        }

        function r(t, e) {
            var i = d(t, "labels"),
                n = S(e),
                o = u(i, n);
            if (o) return o;
            var a, r;
            return m.isFunction(n) ? a = v(t, n) : (r = "auto" === n ? h(t) : n, a = g(t, r)), c(i, n, {
                labels: a,
                labelCategoryInterval: r
            })
        }

        function s(t, e) {
            var i = d(t, "ticks"),
                n = S(e),
                o = u(i, n);
            if (o) return o;
            var a, s;
            if (e.get("show") && !t.scale.isBlank() || (a = []), m.isFunction(n)) a = v(t, n, !0);
            else if ("auto" === n) {
                var l = r(t, t.getLabelModel());
                s = l.labelCategoryInterval, a = m.map(l.labels, function (t) {
                    return t.tickValue
                })
            } else s = n, a = g(t, s, !0);
            return c(i, n, {
                ticks: a,
                tickCategoryInterval: s
            })
        }

        function l(t) {
            var e = t.scale.getTicks(),
                i = w(t);
            return {
                labels: m.map(e, function (e, n) {
                    return {
                        formattedLabel: i(e, n),
                        rawLabel: t.scale.getLabel(e),
                        tickValue: e
                    }
                })
            }
        }

        function d(t, e) {
            return k(t)[e] || (k(t)[e] = [])
        }

        function u(t, e) {
            for (var i = 0; i < t.length; i++)
                if (t[i].key === e) return t[i].value
        }

        function c(t, e, i) {
            return t.push({
                key: e,
                value: i
            }), i
        }

        function h(t) {
            var e = k(t).autoInterval;
            return null != e ? e : k(t).autoInterval = t.calculateCategoryInterval()
        }

        function f(t) {
            var e = p(t),
                i = w(t),
                n = (e.axisRotate - e.labelRotate) / 180 * Math.PI,
                o = t.scale,
                a = o.getExtent(),
                r = o.count();
            if (a[1] - a[0] < 1) return 0;
            var s = 1;
            r > 40 && (s = Math.max(1, Math.floor(r / 40)));
            for (var l = a[0], d = t.dataToCoord(l + 1) - t.dataToCoord(l), u = Math.abs(d * Math.cos(n)), c = Math.abs(d * Math.sin(n)), h = 0, f = 0; l <= a[1]; l += s) {
                var g = 0,
                    v = 0,
                    m = _.getBoundingRect(i(l), e.font, "center", "top");
                g = 1.3 * m.width, v = 1.3 * m.height, h = Math.max(h, g, 7), f = Math.max(f, v, 7)
            }
            var y = h / u,
                x = f / c;
            isNaN(y) && (y = 1 / 0), isNaN(x) && (x = 1 / 0);
            var b = Math.max(0, Math.floor(Math.min(y, x))),
                S = k(t.model),
                C = t.getExtent(),
                I = S.lastAutoInterval,
                T = S.lastTickCount;
            return null != I && null != T && Math.abs(I - b) <= 1 && Math.abs(T - r) <= 1 && I > b && S.axisExtend0 === C[0] && S.axisExtend1 === C[1] ? b = I : (S.lastTickCount = r, S.lastAutoInterval = b, S.axisExtend0 = C[0], S.axisExtend1 = C[1]), b
        }

        function p(t) {
            var e = t.getLabelModel();
            return {
                axisRotate: t.getRotate ? t.getRotate() : t.isHorizontal && !t.isHorizontal() ? 90 : 0,
                labelRotate: e.get("rotate") || 0,
                font: e.getFont()
            }
        }

        function g(t, e, i) {
            function n(t) {
                l.push(i ? t : {
                    formattedLabel: o(t),
                    rawLabel: a.getLabel(t),
                    tickValue: t
                })
            }

            var o = w(t),
                a = t.scale,
                r = a.getExtent(),
                s = t.getLabelModel(),
                l = [],
                d = Math.max((e || 0) + 1, 1),
                u = r[0],
                c = a.count();
            0 !== u && d > 1 && c / d > 2 && (u = Math.round(Math.ceil(u / d) * d));
            var h = C(t),
                f = s.get("showMinLabel") || h,
                p = s.get("showMaxLabel") || h;
            f && u !== r[0] && n(r[0]);
            for (var g = u; g <= r[1]; g += d) n(g);
            return p && g - d !== r[1] && n(r[1]), l
        }

        function v(t, e, i) {
            var n = t.scale,
                o = w(t),
                a = [];
            return m.each(n.getTicks(), function (t) {
                var r = n.getLabel(t);
                e(t, r) && a.push(i ? t : {
                    formattedLabel: o(t),
                    rawLabel: r,
                    tickValue: t
                })
            }), a
        }

        var m = i(630),
            _ = i(640),
            y = i(631),
            x = y.makeInner,
            b = i(700),
            w = b.makeLabelFormatter,
            S = b.getOptionCategoryInterval,
            C = b.shouldShowAllLabels,
            k = x();
        e.createAxisLabels = n, e.createAxisTicks = o, e.calculateCategoryInterval = f
    }, function (t, e, i) {
        function n(t, e, i) {
            if (this.name = t, this.geometries = e, i) i = [i[0], i[1]];
            else {
                var n = this.getBoundingRect();
                i = [n.x + n.width / 2, n.y + n.height / 2]
            }
            this.center = i
        }

        var o = i(636),
            a = i(717),
            r = i(635),
            s = i(889);
        n.prototype = {
            constructor: n,
            properties: null,
            getBoundingRect: function () {
                var t = this._rect;
                if (t) return t;
                for (var e = Number.MAX_VALUE, i = [e, e], n = [-e, -e], s = [], l = [], d = this.geometries, u = 0; u < d.length; u++)
                    if ("polygon" === d[u].type) {
                        var c = d[u].exterior;
                        a.fromPoints(c, s, l), r.min(i, i, s), r.max(n, n, l)
                    }
                return 0 === u && (i[0] = i[1] = n[0] = n[1] = 0), this._rect = new o(i[0], i[1], n[0] - i[0], n[1] - i[1])
            },
            contain: function (t) {
                var e = this.getBoundingRect(),
                    i = this.geometries;
                if (!e.contain(t[0], t[1])) return !1;
                t: for (var n = 0, o = i.length; n < o; n++)
                    if ("polygon" === i[n].type) {
                        var a = i[n].exterior,
                            r = i[n].interiors;
                        if (s.contain(a, t[0], t[1])) {
                            for (var l = 0; l < (r ? r.length : 0); l++)
                                if (s.contain(r[l])) continue t;
                            return !0
                        }
                    }
                return !1
            },
            transformTo: function (t, e, i, n) {
                var a = this.getBoundingRect(),
                    s = a.width / a.height;
                i ? n || (n = i / s) : i = s * n;
                for (var l = new o(t, e, i, n), d = a.calculateTransform(l), u = this.geometries, c = 0; c < u.length; c++)
                    if ("polygon" === u[c].type) {
                        for (var h = u[c].exterior, f = u[c].interiors, p = 0; p < h.length; p++) r.applyTransform(h[p], h[p], d);
                        for (var g = 0; g < (f ? f.length : 0); g++)
                            for (var p = 0; p < f[g].length; p++) r.applyTransform(f[g][p], f[g][p], d)
                    }
                a = this._rect, a.copy(l), this.center = [a.x + a.width / 2, a.y + a.height / 2]
            },
            cloneShallow: function (t) {
                null == t && (t = this.name);
                var e = new n(t, this.geometries, this.center);
                return e._rect = this._rect, e.transformTo = null, e
            }
        };
        var l = n;
        t.exports = l
    }, function (t, e, i) {
        var n = i(634),
            o = (n.__DEV__, i(630)),
            a = o.createHashMap,
            r = o.isString,
            s = o.isArray,
            l = o.each,
            d = (o.assert, i(909)),
            u = d.parseXML,
            c = a(),
            h = {
                registerMap: function (t, e, i) {
                    var n;
                    return s(e) ? n = e : e.svg ? n = [{
                        type: "svg",
                        source: e.svg,
                        specialAreas: e.specialAreas
                    }] : (e.geoJson && !e.features && (i = e.specialAreas, e = e.geoJson), n = [{
                        type: "geoJSON",
                        source: e,
                        specialAreas: i
                    }]), l(n, function (t) {
                        var e = t.type;
                        "geoJson" === e && (e = t.type = "geoJSON"), (0, f[e])(t)
                    }), c.set(t, n)
                },
                retrieveMap: function (t) {
                    return c.get(t)
                }
            },
            f = {
                geoJSON: function (t) {
                    var e = t.source;
                    t.geoJSON = r(e) ? "undefined" != typeof JSON && JSON.parse ? JSON.parse(e) : new Function("return (" + e + ");")() : e
                },
                svg: function (t) {
                    t.svgXML = u(t.source)
                }
            };
        t.exports = h
    }, function (t, e, i) {
        function n(t) {
            if (!t.UTF8Encoding) return t;
            var e = t.UTF8Scale;
            null == e && (e = 1024);
            for (var i = t.features, n = 0; n < i.length; n++)
                for (var a = i[n], r = a.geometry, s = r.coordinates, l = r.encodeOffsets, d = 0; d < s.length; d++) {
                    var u = s[d];
                    if ("Polygon" === r.type) s[d] = o(u, l[d], e);
                    else if ("MultiPolygon" === r.type)
                        for (var c = 0; c < u.length; c++) {
                            var h = u[c];
                            u[c] = o(h, l[d][c], e)
                        }
                }
            return t.UTF8Encoding = !1, t
        }

        function o(t, e, i) {
            for (var n = [], o = e[0], a = e[1], r = 0; r < t.length; r += 2) {
                var s = t.charCodeAt(r) - 64,
                    l = t.charCodeAt(r + 1) - 64;
                s = s >> 1 ^ -(1 & s), l = l >> 1 ^ -(1 & l), s += o, l += a, o = s, a = l, n.push([s / i, l / i])
            }
            return n
        }

        function a(t, e) {
            return n(t), r.map(r.filter(t.features, function (t) {
                return t.geometry && t.properties && t.geometry.coordinates.length > 0
            }), function (t) {
                var i = t.properties,
                    n = t.geometry,
                    o = n.coordinates,
                    a = [];
                "Polygon" === n.type && a.push({
                    type: "polygon",
                    exterior: o[0],
                    interiors: o.slice(1)
                }), "MultiPolygon" === n.type && r.each(o, function (t) {
                    t[0] && a.push({
                        type: "polygon",
                        exterior: t[0],
                        interiors: t.slice(1)
                    })
                });
                var l = new s(i[e || "name"], a, i.cp);
                return l.properties = i, l
            })
        }

        var r = i(630),
            s = i(792);
        t.exports = a
    }, function (t, e) {
        function i(t) {
            return t
        }

        function n(t, e, n, o, a) {
            this._old = t, this._new = e, this._oldKeyGetter = n || i, this._newKeyGetter = o || i, this.context = a
        }

        function o(t, e, i, n, o) {
            for (var a = 0; a < t.length; a++) {
                var r = "_ec_" + o[n](t[a], a),
                    s = e[r];
                null == s ? (i.push(r), e[r] = a) : (s.length || (e[r] = s = [s]), s.push(a))
            }
        }

        n.prototype = {
            constructor: n,
            add: function (t) {
                return this._add = t, this
            },
            update: function (t) {
                return this._update = t, this
            },
            remove: function (t) {
                return this._remove = t, this
            },
            execute: function () {
                var t, e = this._old,
                    i = this._new,
                    n = {},
                    a = {},
                    r = [],
                    s = [];
                for (o(e, n, r, "_oldKeyGetter", this), o(i, a, s, "_newKeyGetter", this), t = 0; t < e.length; t++) {
                    var l = r[t],
                        d = a[l];
                    if (null != d) {
                        var u = d.length;
                        u ? (1 === u && (a[l] = null), d = d.shift()) : a[l] = null, this._update && this._update(d, t)
                    } else this._remove && this._remove(t)
                }
                for (var t = 0; t < s.length; t++) {
                    var l = s[t];
                    if (a.hasOwnProperty(l)) {
                        var d = a[l];
                        if (null == d) continue;
                        if (d.length)
                            for (var c = 0, u = d.length; c < u; c++) this._add && this._add(d[c]);
                        else this._add && this._add(d)
                    }
                }
            }
        };
        var a = n;
        t.exports = a
    }, function (t, e, i) {
        function n(t) {
            this.categories = t.categories || [], this._needCollect = t.needCollect, this._deduplication = t.deduplication, this._map
        }

        function o(t) {
            return t._map || (t._map = s(t.categories))
        }

        function a(t) {
            return l(t) && null != t.value ? t.value : t + ""
        }

        var r = i(630),
            s = r.createHashMap,
            l = r.isObject,
            d = r.map;
        n.createByAxisModel = function (t) {
            var e = t.option,
                i = e.data,
                o = i && d(i, a);
            return new n({
                categories: o,
                needCollect: !o,
                deduplication: !1 !== e.dedplication
            })
        };
        var u = n.prototype;
        u.getOrdinal = function (t) {
            return o(this).get(t)
        }, u.parseAndCollect = function (t) {
            var e, i = this._needCollect;
            if ("string" != typeof t && !i) return t;
            if (i && !this._deduplication) return e = this.categories.length, this.categories[e] = t, e;
            var n = o(this);
            return e = n.get(t), null == e && (i ? (e = this.categories.length, this.categories[e] = t, n.set(t, e)) : e = NaN), e
        };
        var c = n;
        t.exports = c
    }, function (t, e, i) {
        var n = i(734);
        e.zrender = n;
        var o = i(657);
        e.matrix = o;
        var a = i(635);
        e.vector = a;
        var r = i(630),
            s = i(666);
        e.color = s;
        var l = i(638),
            d = i(632);
        e.number = d;
        var u = i(642);
        e.format = u;
        var c = i(708);
        c.throttle, e.throttle = c.throttle;
        var h = i(798);
        e.helper = h;
        var f = i(794);
        e.parseGeoJSON = f;
        var p = i(675);
        e.List = p;
        var g = i(646);
        e.Model = g;
        var v = i(789);
        e.Axis = v;
        var m = i(637);
        e.env = m;
        var _ = f,
            y = {};
        r.each(["map", "each", "filter", "indexOf", "inherits", "reduce", "filter", "bind", "curry", "isArray", "isString", "isObject", "isFunction", "extend", "defaults", "clone", "merge"], function (t) {
            y[t] = r[t]
        });
        var x = {};
        r.each(["extendShape", "extendPath", "makePath", "makeImage", "mergePath", "resizePath", "createIcon", "setHoverStyle", "setLabelStyle", "setTextStyle", "setText", "getFont", "updateProps", "initProps", "getTransform", "clipPointsByRect", "clipRectByRect", "registerShape", "getShapeClass", "Group", "Image", "Text", "Circle", "Sector", "Ring", "Polygon", "Polyline", "Rect", "Line", "BezierCurve", "Arc", "IncrementalDisplayable", "CompoundPath", "LinearGradient", "RadialGradient", "BoundingRect"], function (t) {
            x[t] = l[t]
        }), e.parseGeoJson = _, e.util = y, e.graphic = x
    }, function (t, e, i) {
        function n(t) {
            return s(t.getSource(), t)
        }

        function o(t, e) {
            var i = e;
            u.isInstance(e) || (i = new u(e), r.mixin(i, d));
            var n = l.createScaleByModel(i);
            return n.setExtent(t[0], t[1]), l.niceScaleExtent(n, i), n
        }

        function a(t) {
            r.mixin(t, d)
        }

        var r = i(630),
            s = i(774),
            l = i(700),
            d = i(790),
            u = i(646),
            c = i(647);
        c.getLayoutRect, e.getLayoutRect = c.getLayoutRect;
        var h = i(677),
            f = h.enableDataStack,
            p = h.isDimensionStacked,
            g = h.getStackedDimension,
            v = i(702);
        e.completeDimensions = v;
        var m = i(676);
        e.createDimensions = m;
        var _ = i(707);
        e.createSymbol = _.createSymbol;
        var y = {
            isDimensionStacked: p,
            enableDataStack: f,
            getStackedDimension: g
        };
        e.createList = n, e.dataStack = y, e.createScale = o, e.mixinAxisModelCommonMethods = a
    }, function (t, e, i) {
        function n(t) {
            return t.get("stack") || b + t.seriesIndex
        }

        function o(t) {
            return t.dim + t.index
        }

        function a(t) {
            var e = [],
                i = t.axis;
            if ("category" === i.type) {
                for (var n = i.getBandWidth(), o = 0; o < t.count; o++) e.push(g.defaults({
                    bandWidth: n,
                    axisKey: "axis0",
                    stackId: b + o
                }, t));
                for (var a = d(e), r = [], o = 0; o < t.count; o++) {
                    var s = a.axis0[b + o];
                    s.offsetCenter = s.offset + s.width / 2, r.push(s)
                }
                return r
            }
        }

        function r(t, e) {
            var i = [];
            return e.eachSeriesByType(t, function (t) {
                h(t) && !f(t) && i.push(t)
            }), i
        }

        function s(t) {
            var e = {};
            g.each(t, function (t) {
                var i = t.coordinateSystem,
                    n = i.getBaseAxis();
                if ("time" === n.type || "value" === n.type)
                    for (var o = t.getData(), a = n.dim + "_" + n.index, r = o.mapDimension(n.dim), s = 0, l = o.count(); s < l; ++s) {
                        var d = o.get(r, s);
                        e[a] ? e[a].push(d) : e[a] = [d]
                    }
            });
            var i = [];
            for (var n in e)
                if (e.hasOwnProperty(n)) {
                    var o = e[n];
                    if (o) {
                        o.sort(function (t, e) {
                            return t - e
                        });
                        for (var a = null, r = 1; r < o.length; ++r) {
                            var s = o[r] - o[r - 1];
                            s > 0 && (a = null === a ? s : Math.min(a, s))
                        }
                        i[n] = a
                    }
                }
            return i
        }

        function l(t) {
            var e = s(t),
                i = [];
            return g.each(t, function (t) {
                var a, r = t.coordinateSystem,
                    s = r.getBaseAxis(),
                    l = s.getExtent();
                if ("category" === s.type) a = s.getBandWidth();
                else if ("value" === s.type || "time" === s.type) {
                    var d = s.dim + "_" + s.index,
                        u = e[d],
                        c = Math.abs(l[1] - l[0]),
                        h = s.scale.getExtent(),
                        f = Math.abs(h[1] - h[0]);
                    a = u ? c / f * u : c
                } else {
                    var p = t.getData();
                    a = Math.abs(l[1] - l[0]) / p.count()
                }
                var g = m(t.get("barWidth"), a),
                    v = m(t.get("barMaxWidth"), a),
                    _ = m(t.get("barMinWidth") || 1, a),
                    y = t.get("barGap"),
                    x = t.get("barCategoryGap");
                i.push({
                    bandWidth: a,
                    barWidth: g,
                    barMaxWidth: v,
                    barMinWidth: _,
                    barGap: y,
                    barCategoryGap: x,
                    axisKey: o(s),
                    stackId: n(t)
                })
            }), d(i)
        }

        function d(t) {
            var e = {};
            g.each(t, function (t, i) {
                var n = t.axisKey,
                    o = t.bandWidth,
                    a = e[n] || {
                        bandWidth: o,
                        remainedWidth: o,
                        autoWidthCount: 0,
                        categoryGap: "20%",
                        gap: "30%",
                        stacks: {}
                    },
                    r = a.stacks;
                e[n] = a;
                var s = t.stackId;
                r[s] || a.autoWidthCount++, r[s] = r[s] || {
                    width: 0,
                    maxWidth: 0
                };
                var l = t.barWidth;
                l && !r[s].width && (r[s].width = l, l = Math.min(a.remainedWidth, l), a.remainedWidth -= l);
                var d = t.barMaxWidth;
                d && (r[s].maxWidth = d);
                var u = t.barMinWidth;
                u && (r[s].minWidth = u);
                var c = t.barGap;
                null != c && (a.gap = c);
                var h = t.barCategoryGap;
                null != h && (a.categoryGap = h)
            });
            var i = {};
            return g.each(e, function (t, e) {
                i[e] = {};
                var n = t.stacks,
                    o = t.bandWidth,
                    a = m(t.categoryGap, o),
                    r = m(t.gap, 1),
                    s = t.remainedWidth,
                    l = t.autoWidthCount,
                    d = (s - a) / (l + (l - 1) * r);
                d = Math.max(d, 0), g.each(n, function (t) {
                    var e = t.maxWidth,
                        i = t.minWidth;
                    if (t.width) {
                        var n = t.width;
                        e && (n = Math.min(n, e)), i && (n = Math.max(n, i)), t.width = n, s -= n + r * n, l--
                    } else {
                        var n = d;
                        e && e < n && (n = Math.min(e, s)), i && i > n && (n = i), n !== d && (t.width = n, s -= n + r * n, l--)
                    }
                }), d = (s - a) / (l + (l - 1) * r), d = Math.max(d, 0);
                var u, c = 0;
                g.each(n, function (t, e) {
                    t.width || (t.width = d), u = t, c += t.width * (1 + r)
                }), u && (c -= u.width * r);
                var h = -c / 2;
                g.each(n, function (t, n) {
                    i[e][n] = i[e][n] || {
                        bandWidth: o,
                        offset: h,
                        width: t.width
                    }, h += t.width * (1 + r)
                })
            }), i
        }

        function u(t, e, i) {
            if (t && e) {
                var a = t[o(e)];
                return null != a && null != i && (a = a[n(i)]), a
            }
        }

        function c(t, e) {
            var i = r(t, e),
                a = l(i),
                s = {},
                d = {};
            g.each(i, function (t) {
                var e = t.getData(),
                    i = t.coordinateSystem,
                    r = i.getBaseAxis(),
                    l = n(t),
                    u = a[o(r)][l],
                    c = u.offset,
                    h = u.width,
                    f = i.getOtherAxis(r),
                    g = t.get("barMinHeight") || 0;
                s[l] = s[l] || [], d[l] = d[l] || [], e.setLayout({
                    bandWidth: u.bandWidth,
                    offset: c,
                    size: h
                });
                for (var v = e.mapDimension(f.dim), m = e.mapDimension(r.dim), _ = y(e, v), x = f.isHorizontal(), b = p(r, f, _), w = 0, S = e.count(); w < S; w++) {
                    var C = e.get(v, w),
                        k = e.get(m, w),
                        I = C >= 0 ? "p" : "n",
                        T = b;
                    _ && (s[l][k] || (s[l][k] = {
                        p: b,
                        n: b
                    }), T = s[l][k][I]);
                    var D, M, A, L;
                    if (x) {
                        var P = i.dataToPoint([C, k]);
                        D = T, M = P[1] + c, A = P[0] - b, L = h, Math.abs(A) < g && (A = (A < 0 ? -1 : 1) * g), isNaN(A) || _ && (s[l][k][I] += A)
                    } else {
                        var P = i.dataToPoint([k, C]);
                        D = P[0] + c, M = T, A = h, L = P[1] - b, Math.abs(L) < g && (L = (L <= 0 ? -1 : 1) * g), isNaN(L) || _ && (s[l][k][I] += L)
                    }
                    e.setItemLayout(w, {
                        x: D,
                        y: M,
                        width: A,
                        height: L
                    })
                }
            }, this)
        }

        function h(t) {
            return t.coordinateSystem && "cartesian2d" === t.coordinateSystem.type
        }

        function f(t) {
            return t.pipelineContext && t.pipelineContext.large
        }

        function p(t, e, i) {
            return e.toGlobalCoord(e.dataToCoord("log" === e.type ? 1 : 0))
        }

        var g = i(630),
            v = i(632),
            m = v.parsePercent,
            _ = i(677),
            y = _.isDimensionStacked,
            x = i(699),
            b = "__ec_stack_",
            w = "undefined" != typeof Float32Array ? Float32Array : Array,
            S = {
                seriesType: "bar",
                plan: x(),
                reset: function (t) {
                    function e(t, e) {
                        for (var i, l = t.count, u = new w(2 * l), h = new w(2 * l), f = new w(l), m = [], _ = [], y = 0, x = 0; null != (i = t.next());) _[g] = e.get(s, i), _[1 - g] = e.get(d, i), m = n.dataToPoint(_, null, m), h[y] = c ? o.x + o.width : m[0], u[y++] = m[0], h[y] = c ? m[1] : o.y + o.height, u[y++] = m[1], f[x++] = i;
                        e.setLayout({
                            largePoints: u,
                            largeDataIndices: f,
                            largeBackgroundPoints: h,
                            barWidth: v,
                            valueAxisStart: p(a, r, !1),
                            backgroundStart: c ? o.x : o.y,
                            valueAxisHorizontal: c
                        })
                    }

                    if (h(t) && f(t)) {
                        var i = t.getData(),
                            n = t.coordinateSystem,
                            o = n.grid.getRect(),
                            a = n.getBaseAxis(),
                            r = n.getOtherAxis(a),
                            s = i.mapDimension(r.dim),
                            d = i.mapDimension(a.dim),
                            c = r.isHorizontal(),
                            g = c ? 0 : 1,
                            v = u(l([t]), a, t).width;
                        return v > .5 || (v = .5), {
                            progress: e
                        }
                    }
                }
            };
        e.getLayoutOnAxis = a, e.prepareLayoutBarSeries = r, e.makeColumnLayout = l, e.retrieveColumnLayout = u, e.layout = c, e.largeLayout = S
    }, function (t, e, i) {
        function n(t, e) {
            e = e || {}, o.defaults(e, {
                text: "loading",
                textColor: "#000",
                fontSize: "12px",
                maskColor: "rgba(255, 255, 255, 0.8)",
                showSpinner: !0,
                color: "#c23531",
                spinnerRadius: 10,
                lineWidth: 5,
                zlevel: 0
            });
            var i = new a.Group,
                n = new a.Rect({
                    style: {
                        fill: e.maskColor
                    },
                    zlevel: e.zlevel,
                    z: 1e4
                });
            i.add(n);
            var l = e.fontSize + " sans-serif",
                d = new a.Rect({
                    style: {
                        fill: "none",
                        text: e.text,
                        font: l,
                        textPosition: "right",
                        textDistance: 10,
                        textFill: e.textColor
                    },
                    zlevel: e.zlevel,
                    z: 10001
                });
            if (i.add(d), e.showSpinner) {
                var u = new a.Arc({
                    shape: {
                        startAngle: -s / 2,
                        endAngle: -s / 2 + .1,
                        r: e.spinnerRadius
                    },
                    style: {
                        stroke: e.color,
                        lineCap: "round",
                        lineWidth: e.lineWidth
                    },
                    zlevel: e.zlevel,
                    z: 10001
                });
                u.animateShape(!0).when(1e3, {
                    endAngle: 3 * s / 2
                }).start("circularInOut"), u.animateShape(!0).when(1e3, {
                    startAngle: 3 * s / 2
                }).delay(300).start("circularInOut"), i.add(u)
            }
            return i.resize = function () {
                var i = r.getWidth(e.text, l),
                    o = e.showSpinner ? e.spinnerRadius : 0,
                    a = (t.getWidth() - 2 * o - (e.showSpinner && i ? 10 : 0) - i) / 2 - (e.showSpinner ? 0 : i / 2),
                    s = t.getHeight() / 2;
                e.showSpinner && u.setShape({
                    cx: a,
                    cy: s
                }), d.setShape({
                    x: a - o,
                    y: s - o,
                    width: 2 * o,
                    height: 2 * o
                }), n.setShape({
                    x: 0,
                    y: 0,
                    width: t.getWidth(),
                    height: t.getHeight()
                })
            }, i.resize(), i
        }

        var o = i(630),
            a = i(638),
            r = i(640),
            s = Math.PI;
        t.exports = n
    }, function (t, e, i) {
        function n(t) {
            this._api = t, this._timelineOptions = [], this._mediaList = [], this._mediaDefault, this._currentMediaIndices = [], this._optionBackup, this._newBaseOption
        }

        function o(t, e, i) {
            var n, o, a = [],
                r = [],
                s = t.timeline;
            if (t.baseOption && (o = t.baseOption), (s || t.options) && (o = o || {}, a = (t.options || []).slice()), t.media) {
                o = o || {};
                var l = t.media;
                h(l, function (t) {
                    t && t.option && (t.query ? r.push(t) : n || (n = t))
                })
            }
            return o || (o = t), o.timeline || (o.timeline = s), h([o].concat(a).concat(d.map(r, function (t) {
                return t.option
            })), function (t) {
                h(e, function (e) {
                    e(t, i)
                })
            }), {
                baseOption: o,
                timelineOptions: a,
                mediaDefault: n,
                mediaList: r
            }
        }

        function a(t, e, i) {
            var n = {
                    width: e,
                    height: i,
                    aspectratio: e / i
                },
                o = !0;
            return d.each(t, function (t, e) {
                var i = e.match(v);
                if (i && i[1] && i[2]) {
                    var a = i[1],
                        s = i[2].toLowerCase();
                    r(n[s], t, a) || (o = !1)
                }
            }), o
        }

        function r(t, e, i) {
            return "min" === i ? t >= e : "max" === i ? t <= e : t === e
        }

        function s(t, e) {
            return t.join(",") === e.join(",")
        }

        function l(t, e) {
            e = e || {}, h(e, function (e, i) {
                if (null != e) {
                    var n = t[i];
                    if (c.hasClass(i)) {
                        e = u.normalizeToArray(e), n = u.normalizeToArray(n);
                        var o = u.mappingToExists(n, e);
                        t[i] = p(o, function (t) {
                            return t.option && t.exist ? g(t.exist, t.option, !0) : t.exist || t.option
                        })
                    } else t[i] = g(n, e, !0)
                }
            })
        }

        var d = i(630),
            u = i(631),
            c = i(645),
            h = d.each,
            f = d.clone,
            p = d.map,
            g = d.merge,
            v = /^(min|max)?(.+)$/;
        n.prototype = {
            constructor: n,
            setOption: function (t, e) {
                t && d.each(u.normalizeToArray(t.series), function (t) {
                    t && t.data && d.isTypedArray(t.data) && d.setAsPrimitive(t.data)
                }), t = f(t);
                var i = this._optionBackup,
                    n = o.call(this, t, e, !i);
                this._newBaseOption = n.baseOption, i ? (l(i.baseOption, n.baseOption), n.timelineOptions.length && (i.timelineOptions = n.timelineOptions), n.mediaList.length && (i.mediaList = n.mediaList), n.mediaDefault && (i.mediaDefault = n.mediaDefault)) : this._optionBackup = n
            },
            mountOption: function (t) {
                var e = this._optionBackup;
                return this._timelineOptions = p(e.timelineOptions, f), this._mediaList = p(e.mediaList, f), this._mediaDefault = f(e.mediaDefault), this._currentMediaIndices = [], f(t ? e.baseOption : this._newBaseOption)
            },
            getTimelineOption: function (t) {
                var e, i = this._timelineOptions;
                if (i.length) {
                    var n = t.getComponent("timeline");
                    n && (e = f(i[n.getCurrentIndex()], !0))
                }
                return e
            },
            getMediaOption: function (t) {
                var e = this._api.getWidth(),
                    i = this._api.getHeight(),
                    n = this._mediaList,
                    o = this._mediaDefault,
                    r = [],
                    l = [];
                if (!n.length && !o) return l;
                for (var d = 0, u = n.length; d < u; d++) a(n[d].query, e, i) && r.push(d);
                return !r.length && o && (r = [-1]), r.length && !s(r, this._currentMediaIndices) && (l = p(r, function (t) {
                    return f(-1 === t ? o.option : n[t].option)
                })), this._currentMediaIndices = r, l
            }
        };
        var m = n;
        t.exports = m
    }, function (t, e, i) {
        function n(t) {
            var e = t.name;
            y.isNameSpecified(t) || (t.name = o(t) || e)
        }

        function o(t) {
            var e = t.getRawData(),
                i = e.mapDimension("seriesName", !0),
                n = [];
            return h.each(i, function (t) {
                var i = e.getDimensionInfo(t);
                i.displayName && n.push(i.displayName)
            }), n.join(" ")
        }

        function a(t) {
            return t.model.getRawData().count()
        }

        function r(t) {
            var e = t.model;
            return e.setData(e.getRawData().cloneShallow()), s
        }

        function s(t, e) {
            e.outputData && t.end > e.outputData.count() && e.model.getRawData().cloneShallow(e.outputData)
        }

        function l(t, e) {
            h.each(t.CHANGABLE_METHODS, function (i) {
                t.wrapMethod(i, h.curry(d, e))
            })
        }

        function d(t) {
            var e = u(t);
            e && e.setOutputEnd(this.count())
        }

        function u(t) {
            var e = (t.ecModel || {}).scheduler,
                i = e && e.getPipeline(t.uid);
            if (i) {
                var n = i.currentTask;
                if (n) {
                    var o = n.agentStubMap;
                    o && (n = o.get(t.uid))
                }
                return n
            }
        }

        var c = i(634),
            h = (c.__DEV__, i(630)),
            f = i(637),
            p = i(642),
            g = p.formatTime,
            v = p.encodeHTML,
            m = p.addCommas,
            _ = p.getTooltipMarker,
            y = i(631),
            x = i(645),
            b = i(705),
            w = i(806),
            S = i(647),
            C = S.getLayoutParams,
            k = S.mergeLayoutParam,
            I = i(681),
            T = I.createTask,
            D = i(644),
            M = D.prepareSource,
            A = D.getSource,
            L = i(650),
            P = L.retrieveRawValue,
            O = y.makeInner(),
            R = x.extend({
                type: "series.__base__",
                seriesIndex: 0,
                coordinateSystem: null,
                defaultOption: null,
                legendVisualProvider: null,
                visualColorAccessPath: "itemStyle.color",
                visualBorderColorAccessPath: "itemStyle.borderColor",
                layoutMode: null,
                init: function (t, e, i, o) {
                    this.seriesIndex = this.componentIndex, this.dataTask = T({
                        count: a,
                        reset: r
                    }), this.dataTask.context = {
                        model: this
                    }, this.mergeDefaultAndTheme(t, i), M(this);
                    var s = this.getInitialData(t, i);
                    l(s, this), this.dataTask.context.data = s, O(this).dataBeforeProcessed = s, n(this)
                },
                mergeDefaultAndTheme: function (t, e) {
                    var i = this.layoutMode,
                        n = i ? C(t) : {},
                        o = this.subType;
                    x.hasClass(o) && (o += "Series"), h.merge(t, e.getTheme().get(this.subType)), h.merge(t, this.getDefaultOption()), y.defaultEmphasis(t, "label", ["show"]), this.fillDataTextStyle(t.data), i && k(t, n, i)
                },
                mergeOption: function (t, e) {
                    t = h.merge(this.option, t, !0), this.fillDataTextStyle(t.data);
                    var i = this.layoutMode;
                    i && k(this.option, t, i), M(this);
                    var o = this.getInitialData(t, e);
                    l(o, this), this.dataTask.dirty(), this.dataTask.context.data = o, O(this).dataBeforeProcessed = o, n(this)
                },
                fillDataTextStyle: function (t) {
                    if (t && !h.isTypedArray(t))
                        for (var e = ["show"], i = 0; i < t.length; i++) t[i] && t[i].label && y.defaultEmphasis(t[i], "label", e)
                },
                getInitialData: function () {
                },
                appendData: function (t) {
                    this.getRawData().appendData(t.data)
                },
                getData: function (t) {
                    var e = u(this);
                    if (e) {
                        var i = e.context.data;
                        return null == t ? i : i.getLinkedData(t)
                    }
                    return O(this).data
                },
                setData: function (t) {
                    var e = u(this);
                    if (e) {
                        var i = e.context;
                        i.data !== t && e.modifyOutputEnd && e.setOutputEnd(t.count()), i.outputData = t, e !== this.dataTask && (i.data = t)
                    }
                    O(this).data = t
                },
                getSource: function () {
                    return A(this)
                },
                getRawData: function () {
                    return O(this).dataBeforeProcessed
                },
                getBaseAxis: function () {
                    var t = this.coordinateSystem;
                    return t && t.getBaseAxis && t.getBaseAxis()
                },
                formatTooltip: function (t, e, i, n) {
                    var o = this;
                    n = n || "html";
                    var a = "html" === n ? "<br/>" : "\n",
                        r = "richText" === n,
                        s = {},
                        l = 0,
                        d = this.getData(),
                        u = d.mapDimension("defaultedTooltip", !0),
                        c = u.length,
                        f = this.getRawValue(t),
                        p = h.isArray(f),
                        x = d.getItemVisual(t, "color");
                    h.isObject(x) && x.colorStops && (x = (x.colorStops[0] || {}).color), x = x || "transparent";
                    var b = c > 1 || p && !c ? function (i) {
                            function a(t, i) {
                                var a = d.getDimensionInfo(i);
                                if (a && !1 !== a.otherDims.tooltip) {
                                    var u = a.type,
                                        h = "sub" + o.seriesIndex + "at" + l,
                                        p = _({
                                            color: x,
                                            type: "subItem",
                                            renderMode: n,
                                            markerId: h
                                        }),
                                        y = "string" == typeof p ? p : p.content,
                                        b = (c ? y + v(a.displayName || "-") + ": " : "") + v("ordinal" === u ? t + "" : "time" === u ? e ? "" : g("yyyy/MM/dd hh:mm:ss", t) : m(t));
                                    b && f.push(b), r && (s[h] = x, ++l)
                                }
                            }

                            var c = h.reduce(i, function (t, e, i) {
                                    var n = d.getDimensionInfo(i);
                                    return t |= n && !1 !== n.tooltip && null != n.displayName
                                }, 0),
                                f = [];
                            u.length ? h.each(u, function (e) {
                                a(P(d, t, e), e)
                            }) : h.each(i, a);
                            var p = c ? r ? "\n" : "<br/>" : "",
                                y = p + f.join(p || ", ");
                            return {
                                renderMode: n,
                                content: y,
                                style: s
                            }
                        }(f) : function (t) {
                            return {
                                renderMode: n,
                                content: v(m(t)),
                                style: s
                            }
                        }(c ? P(d, t, u[0]) : p ? f[0] : f),
                        w = b.content,
                        S = o.seriesIndex + "at" + l,
                        C = _({
                            color: x,
                            type: "item",
                            renderMode: n,
                            markerId: S
                        });
                    s[S] = x, ++l;
                    var k = d.getName(t),
                        I = this.name;
                    y.isNameSpecified(this) || (I = ""), I = I ? v(I) + (e ? ": " : a) : "";
                    var T = "string" == typeof C ? C : C.content;
                    return {
                        html: e ? T + I + w : I + T + (k ? v(k) + ": " + w : w),
                        markers: s
                    }
                },
                isAnimationEnabled: function () {
                    if (f.node) return !1;
                    var t = this.getShallow("animation");
                    return t && this.getData().count() > this.getShallow("animationThreshold") && (t = !1), t
                },
                restoreData: function () {
                    this.dataTask.dirty()
                },
                getColorFromPalette: function (t, e, i) {
                    var n = this.ecModel,
                        o = b.getColorFromPalette.call(this, t, e, i);
                    return o || (o = n.getColorFromPalette(t, e, i)), o
                },
                coordDimToDataDim: function (t) {
                    return this.getRawData().mapDimension(t, !0)
                },
                getProgressive: function () {
                    return this.get("progressive")
                },
                getProgressiveThreshold: function () {
                    return this.get("progressiveThreshold")
                },
                getAxisTooltipData: null,
                getTooltipPosition: null,
                pipeTask: null,
                preventIncremental: null,
                pipelineContext: null
            });
        h.mixin(R, w), h.mixin(R, b);
        var E = R;
        t.exports = E
    }, function (t, e) {
        var i = "";
        "undefined" != typeof navigator && (i = navigator.platform || "");
        var n = {
            color: ["#c23531", "#2f4554", "#61a0a8", "#d48265", "#91c7ae", "#749f83", "#ca8622", "#bda29a", "#6e7074", "#546570", "#c4ccd3"],
            gradientColor: ["#f6efa6", "#d88273", "#bf444c"],
            textStyle: {
                fontFamily: i.match(/^Win/) ? "Microsoft YaHei" : "sans-serif",
                fontSize: 12,
                fontStyle: "normal",
                fontWeight: "normal"
            },
            blendMode: null,
            animation: "auto",
            animationDuration: 1e3,
            animationDurationUpdate: 300,
            animationEasing: "exponentialOut",
            animationEasingUpdate: "cubicOut",
            animationThreshold: 2e3,
            progressiveThreshold: 3e3,
            progressive: 400,
            hoverLayerThreshold: 3e3,
            useUTC: !1
        };
        t.exports = n
    }, function (t, e, i) {
        var n = i(679),
            o = n([
                ["fill", "color"],
                ["shadowBlur"],
                ["shadowOffsetX"],
                ["shadowOffsetY"],
                ["opacity"],
                ["shadowColor"]
            ]),
            a = {
                getAreaStyle: function (t, e) {
                    return o(this, t, e)
                }
            };
        t.exports = a
    }, function (t, e) {
        var i = {
            getBoxLayoutParams: function () {
                return {
                    left: this.get("left"),
                    top: this.get("top"),
                    right: this.get("right"),
                    bottom: this.get("bottom"),
                    width: this.get("width"),
                    height: this.get("height")
                }
            }
        };
        t.exports = i
    }, function (t, e, i) {
        var n = i(650),
            o = n.retrieveRawValue,
            a = i(642),
            r = a.getTooltipMarker,
            s = a.formatTpl,
            l = i(631),
            d = l.getTooltipRenderMode,
            u = /\{@(.+?)\}/g,
            c = {
                getDataParams: function (t, e) {
                    var i = this.getData(e),
                        n = this.getRawValue(t, e),
                        o = i.getRawIndex(t),
                        a = i.getName(t),
                        s = i.getRawDataItem(t),
                        l = i.getItemVisual(t, "color"),
                        u = i.getItemVisual(t, "borderColor"),
                        c = this.ecModel.getComponent("tooltip"),
                        h = c && c.get("renderMode"),
                        f = d(h),
                        p = this.mainType,
                        g = "series" === p,
                        v = i.userOutput;
                    return {
                        componentType: p,
                        componentSubType: this.subType,
                        componentIndex: this.componentIndex,
                        seriesType: g ? this.subType : null,
                        seriesIndex: this.seriesIndex,
                        seriesId: g ? this.id : null,
                        seriesName: g ? this.name : null,
                        name: a,
                        dataIndex: o,
                        data: s,
                        dataType: e,
                        value: n,
                        color: l,
                        borderColor: u,
                        dimensionNames: v ? v.dimensionNames : null,
                        encode: v ? v.encode : null,
                        marker: r({
                            color: l,
                            renderMode: f
                        }),
                        $vars: ["seriesName", "name", "value"]
                    }
                },
                getFormattedLabel: function (t, e, i, n, a) {
                    e = e || "normal";
                    var r = this.getData(i),
                        l = r.getItemModel(t),
                        d = this.getDataParams(t, i);
                    null != n && d.value instanceof Array && (d.value = d.value[n]);
                    var c = l.get("normal" === e ? [a || "label", "formatter"] : [e, a || "label", "formatter"]);
                    return "function" == typeof c ? (d.status = e, d.dimensionIndex = n, c(d)) : "string" == typeof c ? s(c, d).replace(u, function (e, i) {
                        var n = i.length;
                        return "[" === i.charAt(0) && "]" === i.charAt(n - 1) && (i = +i.slice(1, n - 1)), o(r, t, i)
                    }) : void 0
                },
                getRawValue: function (t, e) {
                    return o(this.getData(e), t)
                },
                formatTooltip: function () {
                }
            };
        t.exports = c
    }, function (t, e, i) {
        var n = i(679),
            o = n([
                ["fill", "color"],
                ["stroke", "borderColor"],
                ["lineWidth", "borderWidth"],
                ["opacity"],
                ["shadowBlur"],
                ["shadowOffsetX"],
                ["shadowOffsetY"],
                ["shadowColor"],
                ["textPosition"],
                ["textAlign"]
            ]),
            a = {
                getItemStyle: function (t, e) {
                    var i = o(this, t, e),
                        n = this.getBorderLineDash();
                    return n && (i.lineDash = n), i
                },
                getBorderLineDash: function () {
                    var t = this.get("borderType");
                    return "solid" === t || null == t ? null : "dashed" === t ? [5, 5] : [1, 1]
                }
            };
        t.exports = a
    }, function (t, e, i) {
        var n = i(679),
            o = n([
                ["lineWidth", "width"],
                ["stroke", "color"],
                ["opacity"],
                ["shadowBlur"],
                ["shadowOffsetX"],
                ["shadowOffsetY"],
                ["shadowColor"]
            ]),
            a = {
                getLineStyle: function (t) {
                    var e = o(this, t);
                    return e.lineDash = this.getLineDash(e.lineWidth), e
                },
                getLineDash: function (t) {
                    null == t && (t = 1);
                    var e = this.get("type"),
                        i = Math.max(t, 2),
                        n = 4 * t;
                    return "solid" !== e && null != e && ("dashed" === e ? [n, n] : [i, i])
                }
            };
        t.exports = a
    }, function (t, e, i) {
        var n = i(640),
            o = i(638),
            a = ["textStyle", "color"],
            r = {
                getTextColor: function (t) {
                    var e = this.ecModel;
                    return this.getShallow("color") || (!t && e ? e.get(a) : null)
                },
                getFont: function () {
                    return o.getFont({
                        fontStyle: this.getShallow("fontStyle"),
                        fontWeight: this.getShallow("fontWeight"),
                        fontSize: this.getShallow("fontSize"),
                        fontFamily: this.getShallow("fontFamily")
                    }, this.ecModel)
                },
                getTextRect: function (t) {
                    return n.getBoundingRect(t, this.getFont(), this.getShallow("align"), this.getShallow("verticalAlign") || this.getShallow("baseline"), this.getShallow("padding"), this.getShallow("lineHeight"), this.getShallow("rich"), this.getShallow("truncateText"))
                }
            };
        t.exports = r
    }, function (t, e, i) {
        function n(t) {
            this.coordSysName = t, this.coordSysDims = [], this.axisMap = l(), this.categoryAxisMap = l(), this.firstCategoryDimIndex = null
        }

        function o(t) {
            var e = t.get("coordinateSystem"),
                i = new n(e),
                o = u[e];
            if (o) return o(t, i, i.axisMap, i.categoryAxisMap), i
        }

        function a(t) {
            return "category" === t.get("type")
        }

        var r = i(634),
            s = (r.__DEV__, i(630)),
            l = s.createHashMap,
            d = (s.retrieve, s.each),
            u = {
                cartesian2d: function (t, e, i, n) {
                    var o = t.getReferringComponents("xAxis")[0],
                        r = t.getReferringComponents("yAxis")[0];
                    e.coordSysDims = ["x", "y"], i.set("x", o), i.set("y", r), a(o) && (n.set("x", o), e.firstCategoryDimIndex = 0), a(r) && (n.set("y", r), e.firstCategoryDimIndex, e.firstCategoryDimIndex = 1)
                },
                singleAxis: function (t, e, i, n) {
                    var o = t.getReferringComponents("singleAxis")[0];
                    e.coordSysDims = ["single"], i.set("single", o), a(o) && (n.set("single", o), e.firstCategoryDimIndex = 0)
                },
                polar: function (t, e, i, n) {
                    var o = t.getReferringComponents("polar")[0],
                        r = o.findAxisModel("radiusAxis"),
                        s = o.findAxisModel("angleAxis");
                    e.coordSysDims = ["radius", "angle"], i.set("radius", r), i.set("angle", s), a(r) && (n.set("radius", r), e.firstCategoryDimIndex = 0), a(s) && (n.set("angle", s), null == e.firstCategoryDimIndex && (e.firstCategoryDimIndex = 1))
                },
                geo: function (t, e, i, n) {
                    e.coordSysDims = ["lng", "lat"]
                },
                parallel: function (t, e, i, n) {
                    var o = t.ecModel,
                        r = o.getComponent("parallel", t.get("parallelIndex")),
                        s = e.coordSysDims = r.dimensions.slice();
                    d(r.parallelAxisIndex, function (t, r) {
                        var l = o.getComponent("parallelAxis", t),
                            d = s[r];
                        i.set(d, l), a(l) && null == e.firstCategoryDimIndex && (n.set(d, l), e.firstCategoryDimIndex = r)
                    })
                }
            };
        e.getCoordSysInfoBySeries = o
    }, function (t, e, i) {
        function n(t, e) {
            e = e.split(",");
            for (var i = t, n = 0; n < e.length && null != (i = i && i[e[n]]); n++) ;
            return i
        }

        function o(t, e, i, n) {
            e = e.split(",");
            for (var o, a = t, r = 0; r < e.length - 1; r++) o = e[r], null == a[o] && (a[o] = {}), a = a[o];
            (n || null == a[e[r]]) && (a[e[r]] = i)
        }

        function a(t) {
            l(p, function (e) {
                e[0] in t && !(e[1] in t) && (t[e[1]] = t[e[0]])
            })
        }

        function r(t, e) {
            c(t, e), t.series = f(t.series), l(t.series, function (t) {
                if (u(t)) {
                    var e = t.type;
                    if ("line" === e) null != t.clipOverflow && (t.clip = t.clipOverflow);
                    else if ("pie" === e || "gauge" === e) null != t.clockWise && (t.clockwise = t.clockWise);
                    else if ("gauge" === e) {
                        var i = n(t, "pointer.color");
                        null != i && o(t, "itemStyle.color", i)
                    }
                    a(t)
                }
            }), t.dataRange && (t.visualMap = t.dataRange), l(g, function (e) {
                var i = t[e];
                i && (d(i) || (i = [i]), l(i, function (t) {
                    a(t)
                }))
            })
        }

        var s = i(630),
            l = s.each,
            d = s.isArray,
            u = s.isObject,
            c = i(812),
            h = i(631),
            f = h.normalizeToArray,
            p = [
                ["x", "left"],
                ["y", "top"],
                ["x2", "right"],
                ["y2", "bottom"]
            ],
            g = ["grid", "geo", "parallel", "legend", "toolbox", "title", "visualMap", "dataZoom", "timeline"];
        t.exports = r
    }, function (t, e, i) {
        function n(t) {
            var e = t && t.itemStyle;
            if (e)
                for (var i = 0, n = v.length; i < n; i++) {
                    var o = v[i],
                        a = e.normal,
                        r = e.emphasis;
                    a && a[o] && (t[o] = t[o] || {}, t[o].normal ? h.merge(t[o].normal, a[o]) : t[o].normal = a[o], a[o] = null), r && r[o] && (t[o] = t[o] || {}, t[o].emphasis ? h.merge(t[o].emphasis, r[o]) : t[o].emphasis = r[o], r[o] = null)
                }
        }

        function o(t, e, i) {
            if (t && t[e] && (t[e].normal || t[e].emphasis)) {
                var n = t[e].normal,
                    o = t[e].emphasis;
                n && (i ? (t[e].normal = t[e].emphasis = null, h.defaults(t[e], n)) : t[e] = n), o && (t.emphasis = t.emphasis || {}, t.emphasis[e] = o)
            }
        }

        function a(t) {
            o(t, "itemStyle"), o(t, "lineStyle"), o(t, "areaStyle"), o(t, "label"), o(t, "labelLine"), o(t, "upperLabel"), o(t, "edgeLabel")
        }

        function r(t, e) {
            var i = g(t) && t[e],
                n = g(i) && i.textStyle;
            if (n)
                for (var o = 0, a = f.TEXT_STYLE_OPTIONS.length; o < a; o++) {
                    var e = f.TEXT_STYLE_OPTIONS[o];
                    n.hasOwnProperty(e) && (i[e] = n[e])
                }
        }

        function s(t) {
            t && (a(t), r(t, "label"), t.emphasis && r(t.emphasis, "label"))
        }

        function l(t) {
            if (g(t)) {
                n(t), a(t), r(t, "label"), r(t, "upperLabel"), r(t, "edgeLabel"), t.emphasis && (r(t.emphasis, "label"), r(t.emphasis, "upperLabel"), r(t.emphasis, "edgeLabel"));
                var e = t.markPoint;
                e && (n(e), s(e));
                var i = t.markLine;
                i && (n(i), s(i));
                var l = t.markArea;
                l && s(l);
                var d = t.data;
                if ("graph" === t.type) {
                    d = d || t.nodes;
                    var u = t.links || t.edges;
                    if (u && !h.isTypedArray(u))
                        for (var c = 0; c < u.length; c++) s(u[c]);
                    h.each(t.categories, function (t) {
                        a(t)
                    })
                }
                if (d && !h.isTypedArray(d))
                    for (var c = 0; c < d.length; c++) s(d[c]);
                var e = t.markPoint;
                if (e && e.data)
                    for (var f = e.data, c = 0; c < f.length; c++) s(f[c]);
                var i = t.markLine;
                if (i && i.data)
                    for (var p = i.data, c = 0; c < p.length; c++) h.isArray(p[c]) ? (s(p[c][0]), s(p[c][1])) : s(p[c]);
                "gauge" === t.type ? (r(t, "axisLabel"), r(t, "title"), r(t, "detail")) : "treemap" === t.type ? (o(t.breadcrumb, "itemStyle"), h.each(t.levels, function (t) {
                    a(t)
                })) : "tree" === t.type && a(t.leaves)
            }
        }

        function d(t) {
            return h.isArray(t) ? t : t ? [t] : []
        }

        function u(t) {
            return (h.isArray(t) ? t[0] : t) || {}
        }

        function c(t, e) {
            p(d(t.series), function (t) {
                g(t) && l(t)
            });
            var i = ["xAxis", "yAxis", "radiusAxis", "angleAxis", "singleAxis", "parallelAxis", "radar"];
            e && i.push("valueAxis", "categoryAxis", "logAxis", "timeAxis"), p(i, function (e) {
                p(d(t[e]), function (t) {
                    t && (r(t, "axisLabel"), r(t.axisPointer, "label"))
                })
            }), p(d(t.parallel), function (t) {
                var e = t && t.parallelAxisDefault;
                r(e, "axisLabel"), r(e && e.axisPointer, "label")
            }), p(d(t.calendar), function (t) {
                o(t, "itemStyle"), r(t, "dayLabel"), r(t, "monthLabel"), r(t, "yearLabel")
            }), p(d(t.radar), function (t) {
                r(t, "name")
            }), p(d(t.geo), function (t) {
                g(t) && (s(t), p(d(t.regions), function (t) {
                    s(t)
                }))
            }), p(d(t.timeline), function (t) {
                s(t), o(t, "label"), o(t, "itemStyle"), o(t, "controlStyle", !0);
                var e = t.data;
                h.isArray(e) && h.each(e, function (t) {
                    h.isObject(t) && (o(t, "label"), o(t, "itemStyle"))
                })
            }), p(d(t.toolbox), function (t) {
                o(t, "iconStyle"), p(t.feature, function (t) {
                    o(t, "iconStyle")
                })
            }), r(u(t.axisPointer), "label"), r(u(t.tooltip).axisPointer, "label")
        }

        var h = i(630),
            f = i(631),
            p = h.each,
            g = h.isObject,
            v = ["areaStyle", "lineStyle", "nodeStyle", "linkStyle", "chordStyle", "label", "labelLine"];
        t.exports = c
    }, function (t, e) {
        function i(t) {
            return {
                seriesType: t,
                reset: function (t, e) {
                    var i = e.findComponents({
                        mainType: "legend"
                    });
                    if (i && i.length) {
                        var n = t.getData();
                        n.filterSelf(function (t) {
                            for (var e = n.getName(t), o = 0; o < i.length; o++)
                                if (!i[o].isSelected(e)) return !1;
                            return !0
                        })
                    }
                }
            }
        }

        t.exports = i
    }, function (t, e, i) {
        function n(t) {
            var e = r();
            t.eachSeries(function (t) {
                var i = t.get("stack");
                if (i) {
                    var n = e.get(i) || e.set(i, []),
                        o = t.getData(),
                        a = {
                            stackResultDimension: o.getCalculationInfo("stackResultDimension"),
                            stackedOverDimension: o.getCalculationInfo("stackedOverDimension"),
                            stackedDimension: o.getCalculationInfo("stackedDimension"),
                            stackedByDimension: o.getCalculationInfo("stackedByDimension"),
                            isStackedByIndex: o.getCalculationInfo("isStackedByIndex"),
                            data: o,
                            seriesModel: t
                        };
                    if (!a.stackedDimension || !a.isStackedByIndex && !a.stackedByDimension) return;
                    n.length && o.setCalculationInfo("stackedOnSeries", n[n.length - 1].seriesModel), n.push(a)
                }
            }), e.each(o)
        }

        function o(t) {
            s(t, function (e, i) {
                var n = [],
                    o = [NaN, NaN],
                    a = [e.stackResultDimension, e.stackedOverDimension],
                    r = e.data,
                    s = e.isStackedByIndex,
                    l = r.map(a, function (a, l, d) {
                        var u = r.get(e.stackedDimension, d);
                        if (isNaN(u)) return o;
                        var c, h;
                        s ? h = r.getRawIndex(d) : c = r.get(e.stackedByDimension, d);
                        for (var f = NaN, p = i - 1; p >= 0; p--) {
                            var g = t[p];
                            if (s || (h = g.data.rawIndexOf(g.stackedByDimension, c)), h >= 0) {
                                var v = g.data.getByRawIndex(g.stackResultDimension, h);
                                if (u >= 0 && v > 0 || u <= 0 && v < 0) {
                                    u += v, f = v;
                                    break
                                }
                            }
                        }
                        return n[0] = u, n[1] = f, n
                    });
                r.hostModel.setData(l), e.data = l
            })
        }

        var a = i(630),
            r = a.createHashMap,
            s = a.each;
        t.exports = n
    }, function (t, e, i) {
        function n(t, e) {
            return c(t, u(e))
        }

        var o = i(630),
            a = i(659),
            r = i(632),
            s = i(680),
            l = a.prototype,
            d = s.prototype,
            u = r.getPrecisionSafe,
            c = r.round,
            h = Math.floor,
            f = Math.ceil,
            p = Math.pow,
            g = Math.log,
            v = a.extend({
                type: "log",
                base: 10,
                $constructor: function () {
                    a.apply(this, arguments), this._originalScale = new s
                },
                getTicks: function (t) {
                    var e = this._originalScale,
                        i = this._extent,
                        a = e.getExtent();
                    return o.map(d.getTicks.call(this, t), function (t) {
                        var o = r.round(p(this.base, t));
                        return o = t === i[0] && e.__fixMin ? n(o, a[0]) : o, o = t === i[1] && e.__fixMax ? n(o, a[1]) : o
                    }, this)
                },
                getMinorTicks: d.getMinorTicks,
                getLabel: d.getLabel,
                scale: function (t) {
                    return t = l.scale.call(this, t), p(this.base, t)
                },
                setExtent: function (t, e) {
                    var i = this.base;
                    t = g(t) / g(i), e = g(e) / g(i), d.setExtent.call(this, t, e)
                },
                getExtent: function () {
                    var t = this.base,
                        e = l.getExtent.call(this);
                    e[0] = p(t, e[0]), e[1] = p(t, e[1]);
                    var i = this._originalScale,
                        o = i.getExtent();
                    return i.__fixMin && (e[0] = n(e[0], o[0])), i.__fixMax && (e[1] = n(e[1], o[1])), e
                },
                unionExtent: function (t) {
                    this._originalScale.unionExtent(t);
                    var e = this.base;
                    t[0] = g(t[0]) / g(e), t[1] = g(t[1]) / g(e), l.unionExtent.call(this, t)
                },
                unionExtentFromData: function (t, e) {
                    this.unionExtent(t.getApproximateExtent(e))
                },
                niceTicks: function (t) {
                    t = t || 10;
                    var e = this._extent,
                        i = e[1] - e[0];
                    if (!(i === 1 / 0 || i <= 0)) {
                        var n = r.quantity(i),
                            o = t / i * n;
                        for (o <= .5 && (n *= 10); !isNaN(n) && Math.abs(n) < 1 && Math.abs(n) > 0;) n *= 10;
                        var a = [r.round(f(e[0] / n) * n), r.round(h(e[1] / n) * n)];
                        this._interval = n, this._niceExtent = a
                    }
                },
                niceExtent: function (t) {
                    d.niceExtent.call(this, t);
                    var e = this._originalScale;
                    e.__fixMin = t.fixMin, e.__fixMax = t.fixMax
                }
            });
        o.each(["contain", "normalize"], function (t) {
            v.prototype[t] = function (e) {
                return e = g(e) / g(this.base), l[t].call(this, e)
            }
        }), v.create = function () {
            return new v
        };
        var m = v;
        t.exports = m
    }, function (t, e, i) {
        var n = i(630),
            o = i(659),
            a = i(796),
            r = o.prototype,
            s = o.extend({
                type: "ordinal",
                init: function (t, e) {
                    t && !n.isArray(t) || (t = new a({
                        categories: t
                    })), this._ordinalMeta = t, this._extent = e || [0, t.categories.length - 1]
                },
                parse: function (t) {
                    return "string" == typeof t ? this._ordinalMeta.getOrdinal(t) : Math.round(t)
                },
                contain: function (t) {
                    return t = this.parse(t), r.contain.call(this, t) && null != this._ordinalMeta.categories[t]
                },
                normalize: function (t) {
                    return r.normalize.call(this, this.parse(t))
                },
                scale: function (t) {
                    return Math.round(r.scale.call(this, t))
                },
                getTicks: function () {
                    for (var t = [], e = this._extent, i = e[0]; i <= e[1];) t.push(i), i++;
                    return t
                },
                getLabel: function (t) {
                    if (!this.isBlank()) return this._ordinalMeta.categories[t]
                },
                count: function () {
                    return this._extent[1] - this._extent[0] + 1
                },
                unionExtentFromData: function (t, e) {
                    this.unionExtent(t.getApproximateExtent(e))
                },
                getOrdinalMeta: function () {
                    return this._ordinalMeta
                },
                niceTicks: n.noop,
                niceExtent: n.noop
            });
        s.create = function () {
            return new s
        };
        var l = s;
        t.exports = l
    }, function (t, e, i) {
        var n = i(630),
            o = i(632),
            a = i(642),
            r = i(706),
            s = i(680),
            l = s.prototype,
            d = Math.ceil,
            u = Math.floor,
            c = function (t, e, i, n) {
                for (; i < n;) {
                    var o = i + n >>> 1;
                    t[o][1] < e ? i = o + 1 : n = o
                }
                return i
            },
            h = s.extend({
                type: "time",
                getLabel: function (t) {
                    var e = this._stepLvl,
                        i = new Date(t);
                    return a.formatTime(e[0], i, this.getSetting("useUTC"))
                },
                niceExtent: function (t) {
                    var e = this._extent;
                    if (e[0] === e[1] && (e[0] -= 864e5, e[1] += 864e5), e[1] === -1 / 0 && e[0] === 1 / 0) {
                        var i = new Date;
                        e[1] = +new Date(i.getFullYear(), i.getMonth(), i.getDate()), e[0] = e[1] - 864e5
                    }
                    this.niceTicks(t.splitNumber, t.minInterval, t.maxInterval);
                    var n = this._interval;
                    t.fixMin || (e[0] = o.round(u(e[0] / n) * n)), t.fixMax || (e[1] = o.round(d(e[1] / n) * n))
                },
                niceTicks: function (t, e, i) {
                    t = t || 10;
                    var n = this._extent,
                        a = n[1] - n[0],
                        s = a / t;
                    null != e && s < e && (s = e), null != i && s > i && (s = i);
                    var l = f.length,
                        h = c(f, s, 0, l),
                        p = f[Math.min(h, l - 1)],
                        g = p[1];
                    if ("year" === p[0]) {
                        var v = a / g;
                        g *= o.nice(v / t, !0)
                    }
                    var m = this.getSetting("useUTC") ? 0 : 60 * new Date(+n[0] || +n[1]).getTimezoneOffset() * 1e3,
                        _ = [Math.round(d((n[0] - m) / g) * g + m), Math.round(u((n[1] - m) / g) * g + m)];
                    r.fixExtent(_, n), this._stepLvl = p, this._interval = g, this._niceExtent = _
                },
                parse: function (t) {
                    return +o.parseDate(t)
                }
            });
        n.each(["contain", "normalize"], function (t) {
            h.prototype[t] = function (e) {
                return l[t].call(this, this.parse(e))
            }
        });
        var f = [
            ["hh:mm:ss", 1e3],
            ["hh:mm:ss", 5e3],
            ["hh:mm:ss", 1e4],
            ["hh:mm:ss", 15e3],
            ["hh:mm:ss", 3e4],
            ["hh:mm\nMM-dd", 6e4],
            ["hh:mm\nMM-dd", 3e5],
            ["hh:mm\nMM-dd", 6e5],
            ["hh:mm\nMM-dd", 9e5],
            ["hh:mm\nMM-dd", 18e5],
            ["hh:mm\nMM-dd", 36e5],
            ["hh:mm\nMM-dd", 72e5],
            ["hh:mm\nMM-dd", 216e5],
            ["hh:mm\nMM-dd", 432e5],
            ["MM-dd\nyyyy", 864e5],
            ["MM-dd\nyyyy", 1728e5],
            ["MM-dd\nyyyy", 2592e5],
            ["MM-dd\nyyyy", 3456e5],
            ["MM-dd\nyyyy", 432e6],
            ["MM-dd\nyyyy", 5184e5],
            ["week", 6048e5],
            ["MM-dd\nyyyy", 864e6],
            ["week", 12096e5],
            ["week", 18144e5],
            ["month", 26784e5],
            ["week", 36288e5],
            ["month", 53568e5],
            ["week", 6048e6],
            ["quarter", 8208e6],
            ["month", 107136e5],
            ["month", 13392e6],
            ["half-year", 16416e6],
            ["month", 214272e5],
            ["month", 26784e6],
            ["year", 32832e6]
        ];
        h.create = function (t) {
            return new h({
                useUTC: t.ecModel.get("useUTC")
            })
        };
        var p = h;
        t.exports = p
    }, function (t, e, i) {
        function n(t, e, i, n) {
            this.ecInstance = t, this.api = e, this.unfinished;
            var i = this._dataProcessorHandlers = i.slice(),
                n = this._visualHandlers = n.slice();
            this._allHandlers = i.concat(n), this._stageTaskMap = w()
        }

        function o(t, e, i, n, o) {
            function a(t, e) {
                return t.setDirty && (!t.dirtyMap || t.dirtyMap.get(e.__pipeline.id))
            }

            o = o || {};
            var r;
            y(e, function (e, s) {
                if (!o.visualType || o.visualType === e.visualType) {
                    var l = t._stageTaskMap.get(e.uid),
                        d = l.seriesTaskMap,
                        u = l.overallTask;
                    if (u) {
                        var c, h = u.agentStubMap;
                        h.each(function (t) {
                            a(o, t) && (t.dirty(), c = !0)
                        }), c && u.dirty(), O(u, n);
                        var f = t.getPerformArgs(u, o.block);
                        h.each(function (t) {
                            t.perform(f)
                        }), r |= u.perform(f)
                    } else d && d.each(function (s, l) {
                        a(o, s) && s.dirty();
                        var d = t.getPerformArgs(s, o.block);
                        d.skip = !e.performRawSeries && i.isSeriesFiltered(s.context.model), O(s, n), r |= s.perform(d)
                    })
                }
            }), t.unfinished |= r
        }

        function a(t, e, i, n, o) {
            function a(i) {
                var a = i.uid,
                    s = r.get(a) || r.set(a, k({
                        plan: c,
                        reset: h,
                        count: p
                    }));
                s.context = {
                    model: i,
                    ecModel: n,
                    api: o,
                    useClearVisual: e.isVisual && !e.isLayout,
                    plan: e.plan,
                    reset: e.reset,
                    scheduler: t
                }, g(t, i, s)
            }

            var r = i.seriesTaskMap || (i.seriesTaskMap = w()),
                s = e.seriesType,
                l = e.getTargetSeries;
            e.createOnAllSeries ? n.eachRawSeries(a) : s ? n.eachRawSeriesByType(s, a) : l && l(n, o).each(a);
            var d = t._pipelineMap;
            r.each(function (t, e) {
                d.get(e) || (t.dispose(), r.removeKey(e))
            })
        }

        function r(t, e, i, n, o) {
            function a(e) {
                var i = e.uid,
                    n = d.get(i);
                n || (n = d.set(i, k({
                    reset: l,
                    onDirty: u
                })), r.dirty()), n.context = {
                    model: e,
                    overallProgress: f,
                    modifyOutputEnd: p
                }, n.agent = r, n.__block = f, g(t, e, n)
            }

            var r = i.overallTask = i.overallTask || k({
                reset: s
            });
            r.context = {
                ecModel: n,
                api: o,
                overallReset: e.overallReset,
                scheduler: t
            };
            var d = r.agentStubMap = r.agentStubMap || w(),
                c = e.seriesType,
                h = e.getTargetSeries,
                f = !0,
                p = e.modifyOutputEnd;
            c ? n.eachRawSeriesByType(c, a) : h ? h(n, o).each(a) : (f = !1, y(n.getSeries(), a));
            var v = t._pipelineMap;
            d.each(function (t, e) {
                v.get(e) || (t.dispose(), r.dirty(), d.removeKey(e))
            })
        }

        function s(t) {
            t.overallReset(t.ecModel, t.api, t.payload)
        }

        function l(t, e) {
            return t.overallProgress && d
        }

        function d() {
            this.agent.dirty(), this.getDownstream().dirty()
        }

        function u() {
            this.agent && this.agent.dirty()
        }

        function c(t) {
            return t.plan && t.plan(t.model, t.ecModel, t.api, t.payload)
        }

        function h(t) {
            t.useClearVisual && t.data.clearAllVisual();
            var e = t.resetDefines = L(t.reset(t.model, t.ecModel, t.api, t.payload));
            return e.length > 1 ? x(e, function (t, e) {
                return f(e)
            }) : R
        }

        function f(t) {
            return function (e, i) {
                var n = i.data,
                    o = i.resetDefines[t];
                if (o && o.dataEach)
                    for (var a = e.start; a < e.end; a++) o.dataEach(n, a);
                else o && o.progress && o.progress(e, n)
            }
        }

        function p(t) {
            return t.data.count()
        }

        function g(t, e, i) {
            var n = e.uid,
                o = t._pipelineMap.get(n);
            !o.head && (o.head = i), o.tail && o.tail.pipe(i), o.tail = i, i.__idxInPipeline = o.count++, i.__pipeline = o
        }

        function v(t) {
            E = null;
            try {
                t(z, N)
            } catch (t) {
            }
            return E
        }

        function m(t, e) {
            for (var i in e.prototype) t[i] = S
        }

        var _ = i(630),
            y = _.each,
            x = _.map,
            b = _.isFunction,
            w = _.createHashMap,
            S = _.noop,
            C = i(681),
            k = C.createTask,
            I = i(660),
            T = I.getUID,
            D = i(704),
            M = i(698),
            A = i(631),
            L = A.normalizeToArray,
            P = n.prototype;
        P.restoreData = function (t, e) {
            t.restoreData(e), this._stageTaskMap.each(function (t) {
                var e = t.overallTask;
                e && e.dirty()
            })
        }, P.getPerformArgs = function (t, e) {
            if (t.__pipeline) {
                var i = this._pipelineMap.get(t.__pipeline.id),
                    n = i.context,
                    o = !e && i.progressiveEnabled && (!n || n.progressiveRender) && t.__idxInPipeline > i.blockIndex,
                    a = o ? i.step : null,
                    r = n && n.modDataCount;
                return {
                    step: a,
                    modBy: null != r ? Math.ceil(r / a) : null,
                    modDataCount: r
                }
            }
        }, P.getPipeline = function (t) {
            return this._pipelineMap.get(t)
        }, P.updateStreamModes = function (t, e) {
            var i = this._pipelineMap.get(t.uid),
                n = t.getData(),
                o = n.count(),
                a = i.progressiveEnabled && e.incrementalPrepareRender && o >= i.threshold,
                r = t.get("large") && o >= t.get("largeThreshold"),
                s = "mod" === t.get("progressiveChunkMode") ? o : null;
            t.pipelineContext = i.context = {
                progressiveRender: a,
                modDataCount: s,
                large: r
            }
        }, P.restorePipelines = function (t) {
            var e = this,
                i = e._pipelineMap = w();
            t.eachSeries(function (t) {
                var n = t.getProgressive(),
                    o = t.uid;
                i.set(o, {
                    id: o,
                    head: null,
                    tail: null,
                    threshold: t.getProgressiveThreshold(),
                    progressiveEnabled: n && !(t.preventIncremental && t.preventIncremental()),
                    blockIndex: -1,
                    step: Math.round(n || 700),
                    count: 0
                }), g(e, t, t.dataTask)
            })
        }, P.prepareStageTasks = function () {
            var t = this._stageTaskMap,
                e = this.ecInstance.getModel(),
                i = this.api;
            y(this._allHandlers, function (n) {
                var o = t.get(n.uid) || t.set(n.uid, []);
                n.reset && a(this, n, o, e, i), n.overallReset && r(this, n, o, e, i)
            }, this)
        }, P.prepareView = function (t, e, i, n) {
            var o = t.renderTask,
                a = o.context;
            a.model = e, a.ecModel = i, a.api = n, o.__block = !t.incrementalPrepareRender, g(this, e, o)
        }, P.performDataProcessorTasks = function (t, e) {
            o(this, this._dataProcessorHandlers, t, e, {
                block: !0
            })
        }, P.performVisualTasks = function (t, e, i) {
            o(this, this._visualHandlers, t, e, i)
        }, P.performSeriesTasks = function (t) {
            var e;
            t.eachSeries(function (t) {
                e |= t.dataTask.perform()
            }), this.unfinished |= e
        }, P.plan = function () {
            this._pipelineMap.each(function (t) {
                var e = t.tail;
                do {
                    if (e.__block) {
                        t.blockIndex = e.__idxInPipeline;
                        break
                    }
                    e = e.getUpstream()
                } while (e)
            })
        };
        var O = P.updatePayload = function (t, e) {
                "remain" !== e && (t.context.payload = e)
            },
            R = f(0);
        n.wrapStageHandler = function (t, e) {
            return b(t) && (t = {
                overallReset: t,
                seriesType: v(t)
            }), t.uid = T("stageHandler"), e && (t.visualType = e), t
        };
        var E, z = {},
            N = {};
        m(z, D), m(N, M), z.eachSeriesByType = z.eachRawSeriesByType = function (t) {
            E = t
        }, z.eachComponent = function (t) {
            "series" === t.mainType && t.subType && (E = t.subType)
        };
        var B = n;
        t.exports = B
    }, function (t, e) {
        var i = function () {
                return {
                    axisLine: {
                        lineStyle: {
                            color: "#eee"
                        }
                    },
                    axisTick: {
                        lineStyle: {
                            color: "#eee"
                        }
                    },
                    axisLabel: {
                        textStyle: {
                            color: "#eee"
                        }
                    },
                    splitLine: {
                        lineStyle: {
                            type: "dashed",
                            color: "#aaa"
                        }
                    },
                    splitArea: {
                        areaStyle: {
                            color: "#eee"
                        }
                    }
                }
            },
            n = ["#dd6b66", "#759aa0", "#e69d87", "#8dc1a9", "#ea7e53", "#eedd78", "#73a373", "#73b9bc", "#7289ab", "#91ca8c", "#f49f42"],
            o = {
                color: n,
                backgroundColor: "#333",
                tooltip: {
                    axisPointer: {
                        lineStyle: {
                            color: "#eee"
                        },
                        crossStyle: {
                            color: "#eee"
                        },
                        label: {
                            color: "#000"
                        }
                    }
                },
                legend: {
                    textStyle: {
                        color: "#eee"
                    }
                },
                textStyle: {
                    color: "#eee"
                },
                title: {
                    textStyle: {
                        color: "#eee"
                    }
                },
                toolbox: {
                    iconStyle: {
                        normal: {
                            borderColor: "#eee"
                        }
                    }
                },
                dataZoom: {
                    textStyle: {
                        color: "#eee"
                    }
                },
                visualMap: {
                    textStyle: {
                        color: "#eee"
                    }
                },
                timeline: {
                    lineStyle: {
                        color: "#eee"
                    },
                    itemStyle: {
                        normal: {
                            color: n[1]
                        }
                    },
                    label: {
                        normal: {
                            textStyle: {
                                color: "#eee"
                            }
                        }
                    },
                    controlStyle: {
                        normal: {
                            color: "#eee",
                            borderColor: "#eee"
                        }
                    }
                },
                timeAxis: i(),
                logAxis: i(),
                valueAxis: i(),
                categoryAxis: i(),
                line: {
                    symbol: "circle"
                },
                graph: {
                    color: n
                },
                gauge: {
                    title: {
                        textStyle: {
                            color: "#eee"
                        }
                    }
                },
                candlestick: {
                    itemStyle: {
                        normal: {
                            color: "#FD1050",
                            color0: "#0CF49B",
                            borderColor: "#FD1050",
                            borderColor0: "#0CF49B"
                        }
                    }
                }
            };
        o.categoryAxis.splitLine.show = !1;
        var a = o;
        t.exports = a
    }, function (t, e) {
        var i = ["#37A2DA", "#32C5E9", "#67E0E3", "#9FE6B8", "#FFDB5C", "#ff9f7f", "#fb7293", "#E062AE", "#E690D1", "#e7bcf3", "#9d96f5", "#8378EA", "#96BFFF"],
            n = {
                color: i,
                colorLayer: [
                    ["#37A2DA", "#ffd85c", "#fd7b5f"],
                    ["#37A2DA", "#67E0E3", "#FFDB5C", "#ff9f7f", "#E062AE", "#9d96f5"],
                    ["#37A2DA", "#32C5E9", "#9FE6B8", "#FFDB5C", "#ff9f7f", "#fb7293", "#e7bcf3", "#8378EA", "#96BFFF"], i
                ]
            };
        t.exports = n
    }, function (t, e) {
        function i(t, e) {
            this.getAllNames = function () {
                var t = e();
                return t.mapArray(t.getName)
            }, this.containName = function (t) {
                return e().indexOfName(t) >= 0
            }, this.indexOfName = function (e) {
                return t().indexOfName(e)
            }, this.getItemVisual = function (e, i) {
                return t().getItemVisual(e, i)
            }
        }

        var n = i;
        t.exports = n
    }, function (t, e, i) {
        function n(t, e) {
            function i(t, e) {
                if ("string" != typeof t) return t;
                var i = t;
                return o.each(e, function (t, e) {
                    i = i.replace(new RegExp("\\{\\s*" + e + "\\s*\\}", "g"), t)
                }), i
            }

            function n(t) {
                var e = l.get(t);
                if (null == e) {
                    for (var i = t.split("."), n = a.aria, o = 0; o < i.length; ++o) n = n[i[o]];
                    return n
                }
                return e
            }

            function r(t) {
                return a.series.typeNames[t] || "自定义图"
            }

            var l = e.getModel("aria");
            if (l.get("show")) {
                if (l.get("description")) return void t.setAttribute("aria-label", l.get("description"));
                var d = 0;
                e.eachSeries(function (t, e) {
                    ++d
                }, this);
                var u, c = l.get("data.maxCount") || 10,
                    h = l.get("series.maxCount") || 10,
                    f = Math.min(d, h);
                if (!(d < 1)) {
                    var p = function () {
                        var t = e.getModel("title").option;
                        return t && t.length && (t = t[0]), t && t.text
                    }();
                    u = p ? i(n("general.withTitle"), {
                        title: p
                    }) : n("general.withoutTitle");
                    var g = [];
                    u += i(n(d > 1 ? "series.multiple.prefix" : "series.single.prefix"), {
                        seriesCount: d
                    }), e.eachSeries(function (t, e) {
                        if (e < f) {
                            var o, a = t.get("name"),
                                l = "series." + (d > 1 ? "multiple" : "single") + ".";
                            o = n(a ? l + "withName" : l + "withoutName"), o = i(o, {
                                seriesId: t.seriesIndex,
                                seriesName: t.get("name"),
                                seriesType: r(t.subType)
                            });
                            var u = t.getData();
                            window.data = u, u.count() > c ? o += i(n("data.partialData"), {
                                displayCnt: c
                            }) : o += n("data.allData");
                            for (var h = [], p = 0; p < u.count(); p++)
                                if (p < c) {
                                    var v = u.getName(p),
                                        m = s(u, p);
                                    h.push(i(n(v ? "data.withName" : "data.withoutName"), {
                                        name: v,
                                        value: m
                                    }))
                                }
                            o += h.join(n("data.separator.middle")) + n("data.separator.end"), g.push(o)
                        }
                    }), u += g.join(n("series.multiple.separator.middle")) + n("series.multiple.separator.end"), t.setAttribute("aria-label", u)
                }
            }
        }

        var o = i(630),
            a = i(703),
            r = i(650),
            s = r.retrieveRawValue;
        t.exports = n
    }, function (t, e, i) {
        function n(t) {
            return {
                getTargetSeries: function (e) {
                    var i = {},
                        n = a();
                    return e.eachSeriesByType(t, function (t) {
                        t.__paletteScope = i, n.set(t.uid, t)
                    }), n
                },
                reset: function (t, e) {
                    var i = t.getRawData(),
                        n = {},
                        o = t.getData();
                    o.each(function (t) {
                        var e = o.getRawIndex(t);
                        n[e] = t
                    }), i.each(function (e) {
                        var a, r = n[e],
                            s = null != r && o.getItemVisual(r, "color", !0),
                            l = null != r && o.getItemVisual(r, "borderColor", !0);
                        if (s && l || (a = i.getItemModel(e)), !s) {
                            var d = a.get("itemStyle.color") || t.getColorFromPalette(i.getName(e) || e + "", t.__paletteScope, i.count());
                            null != r && o.setItemVisual(r, "color", d)
                        }
                        if (!l) {
                            var u = a.get("itemStyle.borderColor");
                            null != r && o.setItemVisual(r, "borderColor", u)
                        }
                    })
                }
            }
        }

        var o = i(630),
            a = o.createHashMap;
        t.exports = n
    }, function (t, e, i) {
        var n = i(692),
            o = i(630),
            a = o.isFunction,
            r = {
                createOnAllSeries: !0,
                performRawSeries: !0,
                reset: function (t, e) {
                    var i = t.getData(),
                        o = (t.visualColorAccessPath || "itemStyle.color").split("."),
                        r = t.get(o),
                        s = !a(r) || r instanceof n ? null : r;
                    r && !s || (r = t.getColorFromPalette(t.name, null, e.getSeriesCount())), i.setVisual("color", r);
                    var l = (t.visualBorderColorAccessPath || "itemStyle.borderColor").split("."),
                        d = t.get(l);
                    if (i.setVisual("borderColor", d), !e.isSeriesFiltered(t)) {
                        s && i.each(function (e) {
                            i.setItemVisual(e, "color", s(t.getDataParams(e)))
                        });
                        var u = function (t, e) {
                            var i = t.getItemModel(e),
                                n = i.get(o, !0),
                                a = i.get(l, !0);
                            null != n && t.setItemVisual(e, "color", n), null != a && t.setItemVisual(e, "borderColor", a)
                        };
                        return {
                            dataEach: i.hasItemOption ? u : null
                        }
                    }
                }
            };
        t.exports = r
    }, , , , , , , , function (t, e, i) {
        var n = i(764);
        "string" == typeof n && (n = [
            [t.i, n, ""]
        ]), n.locals && (t.exports = n.locals), i(623)("1c236463", n, !0, {})
    }, , , , , , , function (t, e, i) {
        var n = i(771);
        "string" == typeof n && (n = [
            [t.i, n, ""]
        ]), n.locals && (t.exports = n.locals), i(623)("62ea4bc0", n, !0, {})
    }, , , , , , , , , , function (t, e) {
        t.exports = {
            render: function () {
                var t = this,
                    e = t.$createElement,
                    i = t._self._c || e;
                return i("div", [i("div", {
                    staticStyle: {
                        width: "500px",
                        height: "300px",
                        "margin-bottom": "20px"
                    },
                    attrs: {
                        id: "container" + t.fileId
                    }
                })])
            },
            staticRenderFns: []
        }
    }, , , , , function (t, e) {
        t.exports = {
            render: function () {
                var t = this,
                    e = t.$createElement,
                    i = t._self._c || e;
                return i("div", {
                    class: t.isBlack ? "black" : ""
                }, [t.exploreTip ? i("div", {
                    staticClass: "exploreTip"
                }, [t._m(0), t._v(" "), i("span", {
                    staticClass: "hint_delete"
                }, [i("a", {
                    attrs: {
                        href: "javascript:void(0);"
                    },
                    on: {
                        click: t.broswerClick
                    }
                }, [t._v("不再提示")])])]) : t._e(), t._v(" "), i("el-header", {
                    style: t.exploreTip ? "top:inherit" : "top:0"
                }, [i("div", {
                    staticClass: "banner"
                }, [i("div", {
                    staticClass: "back",
                    on: {
                        click: t.backNew
                    }
                }, [i("i", {
                    staticClass: "iconfont iconheiyemoshi-fanhui"
                }), t._v("返回学堂")]), t._v(" "), i("div", {
                    staticClass: "source-con"
                }, [i("p", {
                    staticClass: "source-name"
                }, [t._v(t._s(t.videoData.name))]), t._v(" "), i("p", {
                    staticClass: "source-down"
                }, [i("span", {
                    staticClass: "source-n"
                }, [t._v(t._s(t.videoData.teacherName))]), t._v(" "), i("span", [t._v(t._s(t.videoData.schoolName))])])]), t._v(" "), i("div", {
                    staticClass: "header_userInfo"
                }, [i("a", {
                    staticClass: "fl",
                    attrs: {
                        href: "https://onlineh5.zhihuishu.com/onlineWeb.html#/entry",
                        target: "_blank"
                    }
                }, [i("span", {
                    staticClass: "userInfo_header"
                }, [i("img", {
                    attrs: {
                        src: t.userMssage.headPicUrl,
                        width: "32",
                        height: "32"
                    }
                })])]), t._v(" "), i("div", {
                    staticClass: "userLinks"
                }, [i("ul", [i("li", [i("a", {
                    staticClass: "userLinks_item clearfix",
                    attrs: {
                        href: "//user.zhihuishu.com/zhsuser/account/new",
                        target: "_self"
                    }
                }, [i("em", {
                    staticClass: "fl iconfont iconheiyemoshi-zhanghaoshezhi"
                }), i("span", {
                    staticClass: "fl"
                }, [t._v("账号设置")])])]), t._v(" "), i("li", [i("span", {
                    staticClass: "userLinks_item clearfix",
                    attrs: {
                        target: "_self"
                    },
                    on: {
                        click: t.quiteLogin
                    }
                }, [i("em", {
                    staticClass: "fl iconfont iconheiyemoshi-anquantuichu"
                }), i("span", {
                    staticClass: "fl"
                }, [t._v("安全退出")])])])])])]), t._v(" "), i("div", {
                    staticClass: "menudivright-r-div"
                }, [i("div", {
                    staticClass: "Patternbtn-div",
                    on: {
                        click: t.changeBlack
                    }
                }, [t.isBlack ? i("svg", {
                    staticClass: "icon",
                    attrs: {
                        "aria-hidden": "true"
                    }
                }, [i("use", {
                    attrs: {
                        "xlink:href": "#iconheiyemoshi-shenyemoshi"
                    }
                })]) : i("svg", {
                    staticClass: "icon",
                    attrs: {
                        "aria-hidden": "true"
                    }
                }, [i("use", {
                    attrs: {
                        "xlink:href": "#iconbaizhoumoshi"
                    }
                })]), t._v(" "), t.isBlack ? t._e() : i("p", [t._v("白昼模式")]), t._v(" "), t.isBlack ? i("p", [t._v("夜间模式")]) : t._e()]), t._v(" "), i("div", {
                    staticClass: "morebtn-div showMore"
                }, [i("em", {
                    staticClass: "iconfont iconbaizhoumoshi-gengduo"
                }), t._v(" "), i("p", [t._v("更多")]), t._v(" "), i("div", {
                    staticClass: "Retirebtn-div",
                    on: {
                        click: t.backSource
                    }
                }, [i("em", {
                    staticClass: "fl iconfont iconbaizhoumoshi-tuike"
                }), i("span", {
                    staticClass: "fl"
                }, [t._v("退课")])])]), t._v(" "), i("div", {
                    staticClass: "fl InformationCenter-div"
                }, [i("a", {
                    attrs: {
                        target: "_blank",
                        href: "https://onlineh5.zhihuishu.com/onlineWeb.html#/student/noticeCenter?noticeType=0"
                    }
                }, [t._v("消息中心")]), t._v(" "), t.messageNum ? i("a", {
                    staticClass: "noticeTips pa",
                    attrs: {
                        href: "https://onlineh5.zhihuishu.com/onlineWeb.html#/student/noticeCenter?noticeType=0",
                        target: "_blank",
                        rel: "external nofollow"
                    }
                }, [t._v(t._s(t.messageNum))]) : t._e()])])])]), t._v(" "), i("el-dialog", {
                    staticClass: "dialog-tips",
                    attrs: {
                        title: "温馨提示",
                        "close-on-click-modal": !1,
                        visible: t.tipsDialog
                    },
                    on: {
                        "update:visible": function (e) {
                            t.tipsDialog = e
                        }
                    }
                }, [i("div", {
                    staticClass: "operate-dialog-1 "
                }, [i("img", {
                    attrs: {
                        src: "//image.zhihuishu.com/zhs/ablecommons/demo/201907/4f4b9902b4ca4cd18a66978a86bc181b.png",
                        alt: ""
                    }
                }), t._v(" "), i("p", {
                    domProps: {
                        innerHTML: t._s(t.tipsMsg)
                    }
                })]), t._v(" "), i("span", {
                    staticClass: "dialog-footer",
                    attrs: {
                        slot: "footer"
                    },
                    slot: "footer"
                }, [i("el-button", {
                    staticClass: "btn",
                    attrs: {
                        type: "primary"
                    },
                    on: {
                        click: t.backNewQuit
                    }
                }, [t._v("我知道了")])], 1)]), t._v(" "), i("el-dialog", {
                    staticClass: "dialog-quit",
                    attrs: {
                        title: "退课申请",
                        visible: t.quitDialog,
                        "close-on-click-modal": !1,
                        "before-close": t.quitClose
                    },
                    on: {
                        "update:visible": function (e) {
                            t.quitDialog = e
                        }
                    }
                }, [i("el-scrollbar", {
                    staticStyle: {
                        height: "350px"
                    }
                }, [i("div", {
                    staticClass: "quit-con"
                }, [i("h2", [t._v(t._s(t.userMssage.realname) + "同学你好，确认将《" + t._s(t.videoData.name) + "》进行退课操作吗？")]), t._v(" "), i("div", {
                    staticClass: "yecode"
                }, [i("p", [t._v("确认验证")]), t._v(" "), i("div", {
                    staticClass: "text"
                }, [i("el-input", {
                    attrs: {
                        type: "text",
                        placeholder: "输入验证码"
                    },
                    on: {
                        change: t.inputChange
                    },
                    model: {
                        value: t.value,
                        callback: function (e) {
                            t.value = e
                        },
                        expression: "value"
                    }
                }), t._v(" "), i("Identify", {
                    attrs: {
                        identifyCode: t.identifyCode
                    }
                }), t._v(" "), i("span", {
                    on: {
                        click: t.refreshCode
                    }
                }, [t._v("换一张")])], 1), t._v(" "), t.codeErr ? i("div", {
                    staticClass: "error-code"
                }, [t._v("验证码错误")]) : t._e(), t._v(" "), t.codeNull ? i("div", {
                    staticClass: "error-code"
                }, [t._v("请输入验证码")]) : t._e()])])]), t._v(" "), i("span", {
                    staticClass: "dialog-footer",
                    attrs: {
                        slot: "footer"
                    },
                    slot: "footer"
                }, [i("el-button", {
                    staticClass: "btn cancel",
                    attrs: {
                        type: "primary"
                    },
                    on: {
                        click: t.quitClose
                    }
                }, [t._v("取消")]), t._v(" "), i("el-button", {
                    staticClass: "btn",
                    attrs: {
                        type: "primary"
                    },
                    on: {
                        click: t.quitClass
                    }
                }, [t._v("确定")])], 1)], 1)], 1)
            },
            staticRenderFns: [function () {
                var t = this,
                    e = t.$createElement,
                    i = t._self._c || e;
                return i("div", [t._v("温馨提示：为了确保学习进度的准确性，建议使用\n            "), i("span", {
                    staticClass: "browser-download"
                }, [t._v("火狐浏览器\n                "), i("ul", {
                    staticClass: "browser-version-list"
                }, [i("li", {
                    staticClass: "arrow"
                }), t._v(" "), i("li", [i("a", {
                    attrs: {
                        href: "//file.zhihuishu.com/file/static/Firefox_52.0.2.6291_setup.exe",
                        target: "_blank"
                    }
                }, [t._v("Windows版")])]), t._v(" "), i("li", [i("a", {
                    attrs: {
                        href: "//file.zhihuishu.com/file/static/Firefox-latest_mac_52.0.dmg",
                        target: "_blank"
                    }
                }, [t._v("Mac版")])])])]), t._v("\n            或\n            "), i("span", {
                    staticClass: "browser-download"
                }, [t._v("谷歌浏览器\n                "), i("ul", {
                    staticClass: "browser-version-list"
                }, [i("li", {
                    staticClass: "arrow"
                }), t._v(" "), i("li", [i("a", {
                    attrs: {
                        href: "//file.zhihuishu.com/file/static/ChromeStandalone_57.0.2987.133_Setup.exe",
                        target: "_blank"
                    }
                }, [t._v("Windows版")])]), t._v(" "), i("li", [i("a", {
                    attrs: {
                        href: "//file.zhihuishu.com/file/static/googlechrome_mac_55.0.2883.95.dmg",
                        target: "_blank"
                    }
                }, [t._v("Mac版")])])])]), t._v("\n            观看视频！\n        ")])
            }]
        }
    }, , , function (t, e) {
        t.exports = {
            render: function () {
                var t = this,
                    e = t.$createElement,
                    i = t._self._c || e;
                return i("div", {
                    staticClass: "s-canvas"
                }, [i("canvas", {
                    attrs: {
                        id: "s-canvas",
                        width: t.contentWidth,
                        height: t.contentHeight
                    }
                })])
            },
            staticRenderFns: []
        }
    }, , , , , function (t, e) {
        t.exports = {
            render: function () {
                var t = this,
                    e = t.$createElement,
                    i = t._self._c || e;
                return i("div", {
                    staticClass: "video-study",
                    class: t.isBlack ? "video-study-black" : ""
                }, [t.headerShow ? i("my-header", {
                    attrs: {
                        studyStatus: t.data.studyStatus,
                        isBlack: t.isBlack,
                        videoData: t.videoData,
                        recruitId: t.recruitId
                    },
                    on: {
                        isBlackFun: t.isBlackFun,
                        goBack: t.goBack
                    }
                }) : t._e(), t._v(" "), i("div", {
                    staticClass: "box-content"
                }, [i("div", {
                    staticClass: "box-left"
                }, [i("div", {
                    staticClass: "left-top clearfix"
                }, [1 == t.videoData.type ? i("div", {
                    staticClass: "videotop_box fl"
                }, ["零" == t.videoDetail.chapterNum ? i("span", {
                    staticClass: "videotop_lesson fl",
                    attrs: {
                        title: "绪章"
                    }
                }, [i("b", [t._v("绪章")])]) : i("span", {
                    staticClass: "videotop_lesson fl",
                    attrs: {
                        title: t.changeChapterNumberString(t.videoDetail.chapterNum)
                    }
                }, [i("b", [t._v(t._s(t.changeChapterNumberString(t.videoDetail.chapterNum)))])]), t._v(" "), t.videoDetail.sonNum ? t._e() : i("span", {
                    staticClass: "videotop_lesson_tit fl",
                    attrs: {
                        id: "lessonOrder",
                        title: t.videoDetail.chaNum + "." + t.videoDetail.num + "." + t.videoDetail.sonNum + "、" + t.videoDetail.name
                    }
                }, [t._v(t._s(t.videoDetail.chaNum) + "." + t._s(t.videoDetail.num) + "、" + t._s(t.videoDetail.name))]), t._v(" "), t.videoDetail.sonNum ? i("span", {
                    staticClass: "videotop_lesson_tit fl",
                    attrs: {
                        id: "lessonOrder",
                        title: t.videoDetail.chaNum + "." + t.videoDetail.num + "." + t.videoDetail.sonNum + "、" + t.videoDetail.name
                    }
                }, [t._v(t._s(t.videoDetail.chaNum) + "." + t._s(t.videoDetail.num) + "." + t._s(t.videoDetail.sonNum) + "、" + t._s(t.videoDetail.name))]) : t._e()]) : t._e(), t._v(" "), 2 == t.videoData.type ? i("div", {
                    staticClass: "videotop_box fl"
                }, [i("span", {
                    staticClass: "videotop_lesson_tit fl",
                    attrs: {
                        id: "lessonOrder",
                        title: t.videoDetail.name
                    }
                }, [t._v("课时" + t._s(t.videoDetail.num) + t._s(t.videoDetail.name))])]) : t._e(), t._v(" "), i("div", {
                    staticClass: "videotop_all fr"
                }, [i("ul", {
                    staticClass: "newList clearfix"
                }, [2 != t.videoData.type && t.data.showStudyBefore && 1 == t.videoData.isShareCourse && t.data.runStandard >= 1 ? i("li", {
                    on: {
                        click: t.readClick
                    }
                }, [i("em", {
                    staticClass: "fl iconfont iconbaizhoumoshi-xueqianbidu"
                }), t._v(" "), i("span", {
                    staticClass: "fl"
                }, [t._v("学前必读")])]) : t._e(), t._v(" "), i("li", {
                    on: {
                        click: t.outlineClick
                    }
                }, [i("em", {
                    staticClass: "fl iconfont iconbaizhoumoshi-jiaoxuedagang"
                }), t._v(" "), i("span", {
                    staticClass: "fl"
                }, [t._v("教学大纲")])]), t._v(" "), i("li", {
                    on: {
                        click: t.classClick
                    }
                }, [i("em", {
                    staticClass: "fl iconfont iconbaizhoumoshi-banjixinxi"
                }), t._v(" "), i("span", {
                    staticClass: "fl"
                }, [t._v("班级信息")])])]), t._v(" "), i("div", {
                    staticClass: "classmsgDialog"
                })])]), t._v(" "), !1 === t.showVideo ? i("div", {
                    staticClass: "limitInfo"
                }, [t._m(0), t._v(" "), i("p", {
                    staticClass: "limit-tips"
                }, [t._v("课程在以下时间开放学习")]), t._v(" "), i("ul", t._l(t.limitInfo.studyTimeDto.studyTimeDetials, function (e) {
                    return i("li", [t._v(t._s(e.dayStr) + "  " + t._s(e.startTimeStr) + " - " + t._s(e.offTimeStr))])
                }), 0)]) : t._e(), t._v(" "), i("div", {
                    ref: "player1",
                    staticStyle: {
                        width: "100%",
                        height: "90%",
                        background: "#000",
                        "padding-top": "40px"
                    }
                }, [i("div", {
                    staticStyle: {
                        width: "100%",
                        height: "100%",
                        margin: "0",
                        overflow: "hidden"
                    },
                    attrs: {
                        id: "container"
                    }
                })]), t._v(" "), t._l(t.threeInfo, function (e, n) {
                    return t.showThree && e.showThreeD ? i("div", {
                        key: n + e.attachmentTitle,
                        staticClass: "threed-box",
                        class: e.showThreeDCss ? "three-show" : "",
                        style: "bottom:" + (120 + 42 * n) + "px"
                    }, [i("a", {
                        attrs: {
                            target: "_blank",
                            href: e.attachmentUrl
                        }
                    }, [i("img", {
                        staticClass: "icon",
                        attrs: {
                            src: "//image.zhihuishu.com/zhs_yufa_150820/ablecommons/demo/201907/8b7e9d4eef3a4731b94024a0163e0694.png"
                        }
                    }), t._v(" "), i("span", [t._v(t._s(e.attachmentTitle))]), t._v(" "), i("i", {
                        staticClass: "iconfont iconheiyemoshi-fanhui"
                    })])]) : t._e()
                }), t._v(" "), i("div", {
                    staticClass: "video-topic"
                }, [i("ul", [t._l(t.testInfo.popupPictureDtos, function (e, n) {
                    return i("li", {
                        key: n + e.timeSec,
                        style: "left:" + e.positionLeft + "%;top:" + e.positionTop + "px",
                        on: {
                            click: function (i) {
                                return t.testDotClick(e)
                            }
                        }
                    })
                }), t._v(" "), t._l(t.testInfo.questionPoint, function (e, n) {
                    return i("li", {
                        key: n,
                        style: "left:" + e.positionLeft + "%;top:" + e.positionTop + "px",
                        on: {
                            click: function (i) {
                                return t.testDotClick(e)
                            }
                        }
                    })
                }), t._v(" "), t._l(t.testInfo.videoThemeDtos, function (e, n) {
                    return i("li", {
                        key: n + e.id,
                        style: "left:" + e.positionLeft + "%;top:" + e.positionTop + "px",
                        on: {
                            click: function (i) {
                                return t.testDotClick(e)
                            }
                        }
                    }, [i("el-popover", {
                        attrs: {
                            placement: "top",
                            title: "",
                            width: "200",
                            trigger: "click",
                            content: e.content
                        },
                        model: {
                            value: e.visible,
                            callback: function (i) {
                                t.$set(e, "visible", i)
                            },
                            expression: "item.visible"
                        }
                    })], 1)
                }), t._v(" "), t._l(t.testInfo.knowledgeCardDtos, function (e, n) {
                    return i("li", {
                        key: n + e.id,
                        style: "left:" + e.positionLeft + "%;top:" + e.positionTop + "px",
                        on: {
                            click: function (i) {
                                return t.testDotClick(e)
                            }
                        }
                    }, [i("el-popover", {
                        attrs: {
                            placement: "top",
                            "visible-arrow": !0,
                            title: e.title,
                            width: "200",
                            trigger: "click",
                            content: e.content
                        },
                        model: {
                            value: e.visible,
                            callback: function (i) {
                                t.$set(e, "visible", i)
                            },
                            expression: "item.visible"
                        }
                    })], 1)
                })], 2)])], 2), t._v(" "), i("div", {
                    staticClass: "box-right"
                }, [i("ul", {
                    staticClass: "newListTest"
                }, [null != t.videoData.courseMode && 1 == t.videoData.courseMode && 2 != t.videoData.type ? i("li", {
                    staticClass: "homeworkExam"
                }, [i("a", {
                    attrs: {
                        target: "_blank",
                        href: "//stuonline.zhihuishu.com/stuonline/teachMeeting/stuListV2?recruitId=" + t.recruitId
                    }
                }, [t.isBlack ? i("svg", {
                    staticClass: "icon",
                    attrs: {
                        "aria-hidden": "true"
                    }
                }, [i("use", {
                    attrs: {
                        "xlink:href": "#iconheiyemoshi-jianmianke"
                    }
                })]) : i("svg", {
                    staticClass: "icon",
                    attrs: {
                        "aria-hidden": "true"
                    }
                }, [i("use", {
                    attrs: {
                        "xlink:href": "#iconbaizhoumoshi-jianmianke"
                    }
                })]), t._v(" "), i("div", [t._v("见面课")])])]) : t._e(), t._v(" "), i("li", {
                    staticClass: "homeworkExam",
                    on: {
                        click: t.goToExamJudge
                    }
                }, [i("a", {
                    attrs: {
                        href: "javascript:void(0)"
                    }
                }, [t.isBlack ? i("svg", {
                    staticClass: "icon",
                    attrs: {
                        "aria-hidden": "true"
                    }
                }, [i("use", {
                    attrs: {
                        "xlink:href": "#iconheiyemoshi-zuoyekaoshi"
                    }
                })]) : i("svg", {
                    staticClass: "icon",
                    attrs: {
                        "aria-hidden": "true"
                    }
                }, [i("use", {
                    attrs: {
                        "xlink:href": "#iconbaizhoumoshi-zuoyekaoshi"
                    }
                })]), t._v(" "), i("div", [t._v("作业考试")])])]), t._v(" "), i("li", {
                    staticClass: "questionAnswer"
                }, [i("a", {
                    attrs: {
                        target: "_blank",
                        href: "//qah5.zhihuishu.com/qa.html#/web/home/" + t.courseId + "?role=2&recruitId=" + t.recruitId + "&fromUrl=2"
                    }
                }, [t.isBlack ? i("svg", {
                    staticClass: "icon",
                    attrs: {
                        "aria-hidden": "true"
                    }
                }, [i("use", {
                    attrs: {
                        "xlink:href": "#iconheiyemoshi-kechengwenda"
                    }
                })]) : i("svg", {
                    staticClass: "icon",
                    attrs: {
                        "aria-hidden": "true"
                    }
                }, [i("use", {
                    attrs: {
                        "xlink:href": "#iconbaizhoumoshi-kechengwenda"
                    }
                })]), t._v(" "), i("div", [t._v("课程问答")])])]), t._v(" "), t.data.classSchedule ? i("li", {
                    staticClass: "coursesurface"
                }, [t.courseIdNum >= 1e9 ? i("a", {
                    attrs: {
                        target: "_blank",
                        href: "https://onlineh5.zhihuishu.com/subPage.html#/student/studentPlanList/" + t.courseId + "/" + t.recruitId + "/1?schooId=" + t.schoolId + "&recruitAndCourseId=" + t.recruitAndCourseId + "&classId=" + t.classId
                    }
                }, [t.isBlack ? i("svg", {
                    staticClass: "icon",
                    attrs: {
                        "aria-hidden": "true"
                    }
                }, [i("use", {
                    attrs: {
                        "xlink:href": "#iconheiyemoshi-kechengbiao"
                    }
                })]) : i("svg", {
                    staticClass: "icon",
                    attrs: {
                        "aria-hidden": "true"
                    }
                }, [i("use", {
                    attrs: {
                        "xlink:href": "#iconbaizhoumoshi-kechengbiao"
                    }
                })]), t._v(" "), i("div", [t._v("课程表")])]) : i("a", {
                    attrs: {
                        target: "_blank",
                        href: "https://stuonline.zhihuishu.com/stuonline/courseMaintain/studentPlanListV2?recruitId=" + t.recruitId + "&courseId=" + t.courseId
                    }
                }, [t.isBlack ? i("svg", {
                    staticClass: "icon",
                    attrs: {
                        "aria-hidden": "true"
                    }
                }, [i("use", {
                    attrs: {
                        "xlink:href": "#iconheiyemoshi-kechengbiao"
                    }
                })]) : i("svg", {
                    staticClass: "icon",
                    attrs: {
                        "aria-hidden": "true"
                    }
                }, [i("use", {
                    attrs: {
                        "xlink:href": "#iconbaizhoumoshi-kechengbiao"
                    }
                })]), t._v(" "), i("div", [t._v("课程表")])])]) : t._e(), t._v(" "), 2 != t.videoData.type ? i("li", {
                    staticClass: "myGrades"
                }, [i("a", {
                    attrs: {
                        target: "_blank",
                        href: "https://stuonline.zhihuishu.com/stuonline/stuLearnReportNew/index?recruitId=" + t.recruitId + "&courseId=" + t.courseId
                    }
                }, [t.isBlack ? i("svg", {
                    staticClass: "icon",
                    attrs: {
                        "aria-hidden": "true"
                    }
                }, [i("use", {
                    attrs: {
                        "xlink:href": "#iconheiyemoshi-chengjifenxi"
                    }
                })]) : i("svg", {
                    staticClass: "icon",
                    attrs: {
                        "aria-hidden": "true"
                    }
                }, [i("use", {
                    attrs: {
                        "xlink:href": "#iconbaizhoumoshi-chengjifenxi"
                    }
                })]), t._v(" "), i("div", [t._v("成绩分析")])])]) : t._e(), t._v(" "), i("li", {
                    staticClass: "courseMaterials"
                }, [i("a", {
                    attrs: {
                        href: "//stuonline.zhihuishu.com/stuonline/folder/stuIndexV2?recruitId=" + t.recruitId + "&courseId=" + t.courseId,
                        target: "_blank"
                    }
                }, [t.isBlack ? i("svg", {
                    staticClass: "icon",
                    attrs: {
                        "aria-hidden": "true"
                    }
                }, [i("use", {
                    attrs: {
                        "xlink:href": "#iconheiyemoshi-kechengziliao"
                    }
                })]) : i("svg", {
                    staticClass: "icon",
                    attrs: {
                        "aria-hidden": "true"
                    }
                }, [i("use", {
                    attrs: {
                        "xlink:href": "#iconbaizhoumoshi-kechengziliao"
                    }
                })]), t._v(" "), i("div", [t._v("课程资料")])])]), t._v(" "), t.data.experimentCourseId ? i("li", {
                    staticClass: "courseMaterials"
                }, [i("a", {
                    attrs: {
                        target: "_blank",
                        href: "https://www.zhihuishu.com/portals_h5/virtualExperiment.html#/CourseExperiment?courseId=" + t.data.experimentCourseId + "&recruitAndCourseId=" + t.recruitAndCourseId + "&sharecourseId=" + t.courseId
                    }
                }, [t.isBlack ? i("svg", {
                    staticClass: "icon",
                    attrs: {
                        "aria-hidden": "true"
                    }
                }, [i("use", {
                    attrs: {
                        "xlink:href": "#iconkechengshiyanicon"
                    }
                })]) : i("svg", {
                    staticClass: "icon",
                    attrs: {
                        "aria-hidden": "true"
                    }
                }, [i("use", {
                    attrs: {
                        "xlink:href": "#iconkechengshiyanicon-"
                    }
                })]), t._v(" "), i("div", [t._v("课程实验")])])]) : t._e()]), t._v(" "), t._m(1), t._v(" "), i("el-scrollbar", {
                    ref: "scrollbar",
                    staticStyle: {
                        height: "100%"
                    }
                }, t._l(t.videoList, function (e, n) {
                    return i("ul", {
                        key: e.orderNumberTit + n,
                        staticClass: "list"
                    }, [i("span", {
                        staticClass: "position_first_bg"
                    }), t._v(" "), 1 == t.videoData.type ? i("li", {
                        staticClass: "clearfix font_gray_inclined chapter"
                    }, ["零" == e.orderNumberTit ? i("span", {
                        staticClass: "catalogue_title3 fl",
                        attrs: {
                            title: "绪章"
                        }
                    }, [i("b", [t._v("绪章")])]) : i("span", {
                        staticClass: "catalogue_title3 fl",
                        attrs: {
                            title: t.changeChapterNumberString(e.orderNumberTit)
                        }
                    }, [i("b", [t._v(t._s(t.changeChapterNumberString(e.orderNumberTit)))])]), t._v(" "), i("em", {
                        staticClass: "chapter-em fl"
                    }), t._v(" "), i("span", {
                        staticClass: "time_ico_box fl"
                    }), t._v(" "), i("span", {
                        staticClass: "catalogue_title fl catalogue_titleweight",
                        attrs: {
                            title: e.name
                        }
                    }, [t._v(t._s(e.name))])]) : t._e(), t._v(" "), t._l(e.videoLessons, function (o, a) {
                        return i("div", {
                            key: e.name + a
                        }, [o.ishaveChildrenLesson > 0 || o.videoSmallLessons && o.videoSmallLessons.length > 0 ? t._e() : i("li", {
                            staticClass: "clearfix video",
                            class: o.videoId === t.lastViewVideoId ? "current_play" : "",
                            on: {
                                click: function (i) {
                                    return t.videoClick(e, n, o, a)
                                }
                            }
                        }, [i("span", {
                            staticClass: "catalogue_title3 fl cataloguediv-l"
                        }, [1 == t.videoData.type ? i("b", {
                            staticClass: "pl5  hour"
                        }, [t._v(t._s(e.orderNumber) + "." + t._s(o.orderNumber))]) : t._e(), t._v(" "), 2 == t.videoData.type ? i("b", {
                            staticClass: "pl5  hour"
                        }, [t._v("课时" + t._s(o.orderNumber))]) : t._e()]), t._v(" "), i("div", {
                            staticClass: "fl cataloguediv-c"
                        }, [i("span", {
                            staticClass: "catalogue_title",
                            attrs: {
                                title: o.name
                            }
                        }, [t._v(t._s(o.name))]), t._v(" "), i("div", [i("b", {
                            staticClass: "time_ico_half fl"
                        }), t._v(" "), 1 === o.isStudiedLesson ? i("b", {
                            staticClass: "fl time_icofinish"
                        }) : t._e(), t._v(" "), 2 === o.isStudiedLesson && 0 != o.percentage ? i("div", [i("el-progress", {
                            attrs: {
                                type: "circle",
                                "stroke-width": 30,
                                percentage: o.percentage,
                                "show-text": !1
                            }
                        }), t._v(" "), i("span", {
                            staticClass: "progress-num"
                        }, [t._v(t._s(o.percentage) + "%")])], 1) : t._e(), t._v(" "), i("span", {
                            staticClass: "time fl"
                        }, [t._v(t._s(o.videoSecShow))])])]), t._v(" "), i("em", {
                            staticClass: "Sectionmark-em"
                        })]), t._v(" "), o.ishaveChildrenLesson > 0 && o.videoSmallLessons && o.videoSmallLessons.length > 0 ? i("li", {
                            staticClass: "clearfix"
                        }, [i("span", {
                            staticClass: "catalogue_title3 fl cataloguediv-l"
                        }, [1 == t.videoData.type ? i("b", {
                            staticClass: "pl5  hour"
                        }, [t._v(t._s(e.orderNumber) + "." + t._s(o.orderNumber))]) : t._e(), t._v(" "), 2 == t.videoData.type ? i("b", {
                            staticClass: "pl5  hour"
                        }, [t._v("课时" + t._s(o.orderNumber))]) : t._e()]), t._v(" "), i("div", {
                            staticClass: "fl cataloguediv-c"
                        }, [i("span", {
                            staticClass: "catalogue_title small-lesson",
                            attrs: {
                                title: o.name
                            }
                        }, [t._v(t._s(o.name))])]), t._v(" "), i("em", {
                            staticClass: "Sectionmark-em"
                        })]) : t._e(), t._v(" "), o.ishaveChildrenLesson > 0 && o.videoSmallLessons && o.videoSmallLessons.length > 0 ? i("ul", t._l(o.videoSmallLessons, function (r, s) {
                            return i("li", {
                                key: e.name + s,
                                staticClass: "clearfix video",
                                class: r.videoId === t.lastViewVideoId ? "current_play" : "",
                                on: {
                                    click: function (i) {
                                        return t.videoClick(e, n, o, a, r, s)
                                    }
                                }
                            }, [i("span", {
                                staticClass: "catalogue_title4 fl cataloguediv-l"
                            }, [i("b", {
                                staticClass: "pl5  hour"
                            }, [t._v(t._s(e.orderNumber) + "." + t._s(o.orderNumber) + "." + t._s(r.orderNumber))])]), t._v(" "), i("div", {
                                staticClass: "fl cataloguediv-c"
                            }, [i("span", {
                                staticClass: "catalogue_title",
                                attrs: {
                                    title: r.name
                                }
                            }, [t._v(t._s(r.name ? r.name : "暂无小节名称"))]), t._v(" "), i("b", {
                                staticClass: "time_ico_half fl"
                            }), t._v(" "), 1 === r.isStudiedLesson ? i("b", {
                                staticClass: "fl time_icofinish"
                            }) : t._e(), t._v(" "), 2 === r.isStudiedLesson && 0 != r.percentage ? i("div", [i("el-progress", {
                                attrs: {
                                    type: "circle",
                                    "stroke-width": 30,
                                    percentage: r.percentage,
                                    "show-text": !1
                                }
                            }), t._v(" "), i("span", {
                                staticClass: "progress-num"
                            }, [t._v(t._s(r.percentage) + "%")])], 1) : t._e(), t._v(" "), i("span", {
                                staticClass: "time fl"
                            }, [t._v(t._s(r.videoSecShow))])]), t._v(" "), i("em", {
                                staticClass: "Sectionmark-em"
                            })])
                        }), 0) : t._e()])
                    }), t._v(" "), e.studentExamDto ? i("li", {
                        staticClass: "chapter-test",
                        attrs: {
                            title: "点击测试"
                        },
                        on: {
                            click: function (i) {
                                return t.chapterExamEntry(e)
                            }
                        }
                    }, [i("span", {
                        staticClass: "name"
                    }, [t._v("\n                            平时测试\n                           "), 1 != t.data.studyStatus ? i("span", [3 != e.studentExamDto.state && 4 != e.studentExamDto.state ? i("span", {
                        staticClass: "iconfont iconbaizhoumoshi-zhangceshi-shubiaoyiru"
                    }) : t._e(), t._v(" "), 3 == e.studentExamDto.state || 4 == e.studentExamDto.state ? i("b", {
                        staticClass: "finish"
                    }) : t._e()]) : t._e()]), t._v(" "), i("em", {
                        staticClass: "Sectionmark-em"
                    })]) : t._e()], 2)
                }), 0)], 1)]), t._v(" "), i("el-dialog", {
                    staticClass: "dialog-tips",
                    attrs: {
                        title: "温馨提示",
                        visible: t.tipsDialog,
                        "close-on-click-modal": !1
                    },
                    on: {
                        "update:visible": function (e) {
                            t.tipsDialog = e
                        }
                    }
                }, [i("div", {
                    staticClass: "operate-dialog-1 "
                }, [i("img", {
                    attrs: {
                        src: "//image.zhihuishu.com/zhs/ablecommons/demo/201907/4f4b9902b4ca4cd18a66978a86bc181b.png",
                        alt: ""
                    }
                }), t._v(" "), i("p", [t._v(t._s(t.tipsMsg))])]), t._v(" "), i("span", {
                    staticClass: "dialog-footer",
                    attrs: {
                        slot: "footer"
                    },
                    slot: "footer"
                }, [i("el-button", {
                    staticClass: "btn",
                    attrs: {
                        type: "primary"
                    },
                    on: {
                        click: function (e) {
                            t.tipsDialog = !1
                        }
                    }
                }, [t._v(t._s(t.tipsBtn))])], 1)]), t._v(" "), i("el-dialog", {
                    staticClass: "dialog-aberrant",
                    attrs: {
                        title: "异常行为提示",
                        visible: t.aberrantDialog,
                        "close-on-click-modal": !1,
                        "before-close": t.aberrantCloseBtn
                    },
                    on: {
                        "update:visible": function (e) {
                            t.aberrantDialog = e
                        }
                    }
                }, [i("div", {
                    staticClass: "operate-dialog-1 "
                }, [i("img", {
                    attrs: {
                        src: "//image.zhihuishu.com/zhs/ablecommons/demo/201907/4f4b9902b4ca4cd18a66978a86bc181b.png",
                        alt: ""
                    }
                }), t._v(" "), i("p", [t._v("平台监测到你存在异常学习行为，已将相关的异常学习进度清除，请严肃对待，诚信学习。详细异常行为记录可点击【查看异常记录】进行查看")])]), t._v(" "), i("span", {
                    staticClass: "dialog-footer",
                    attrs: {
                        slot: "footer"
                    },
                    slot: "footer"
                }, [i("el-button", {
                    staticClass: "btn",
                    attrs: {
                        type: "primary"
                    },
                    on: {
                        click: t.aberrantBtn
                    }
                }, [t._v("查看异常")])], 1)]), t._v(" "), i("div", {
                    directives: [{
                        name: "show",
                        rawName: "v-show",
                        value: t.aberrantTimeDialog,
                        expression: "aberrantTimeDialog"
                    }],
                    staticClass: "dialog"
                }, [i("div", {
                    staticClass: "mask"
                }), t._v(" "), i("div", {
                    staticClass: "aberrant"
                }, [i("p", {
                    staticClass: "title"
                }, [t._v("平台监测到你存在异常学习行为，已将你的所有学分课程锁定，详细异常行为记录可点击“查看异常记录”进行查看")]), t._v(" "), i("p", {
                    staticClass: "limit-tips"
                }, [t._v("课程在以下时间被锁定")]), t._v(" "), i("ul", [0 == this.aberrantInfo.whetherDate ? i("li", [t._v(t._s(this.aberrantInfo.tipStr) + "前")]) : t._e(), t._v(" "), 1 == this.aberrantInfo.whetherDate ? i("li", [t._v(t._s(this.aberrantInfo.endTime) + "前")]) : t._e(), t._v(" "), i("li", [t._v("不再允许学习")])]), t._v(" "), i("a", {
                    attrs: {
                        href: "https://onlineh5.zhihuishu.com/subPage.html#/student/exceptionRecordList",
                        target: "_blank"
                    }
                }, [t._v("查看异常")])])]), t._v(" "), i("el-dialog", {
                    staticClass: "dialog-warn",
                    attrs: {
                        title: "智慧树警告",
                        visible: t.warnDialog,
                        "close-on-click-modal": !1,
                        "before-close": t.warnClick
                    },
                    on: {
                        "update:visible": function (e) {
                            t.warnDialog = e
                        }
                    }
                }, [i("div", {
                    staticClass: "operate-dialog-1"
                }, [i("img", {
                    staticClass: "studypoplogoimg",
                    attrs: {
                        src: "https://www.zhihuishu.com/assets/images/course-logo.png",
                        alt: ""
                    }
                }), t._v(" "), i("p", [t._v("同学你好！智慧树网实行严格的审查制度，将实时监测学生账户的学习过程及学习行为。若发现账户存在异常，我们将对该账户及相关异常数据进行记录存档，并反馈给学校教务部门，由此带来的处理后果由学生自行承担。智慧树网特提醒广大学子务必诚信学习。")])]), t._v(" "), i("span", {
                    staticClass: "dialog-footer",
                    attrs: {
                        slot: "footer"
                    },
                    slot: "footer"
                }, [i("el-button", {
                    staticClass: "btn",
                    attrs: {
                        type: "primary"
                    },
                    on: {
                        click: t.warnClick
                    }
                }, [t._v("我知道了")])], 1)]), t._v(" "), t.classDialog ? i("el-dialog", {
                    staticClass: "dialog-class",
                    attrs: {
                        title: "班级信息",
                        "close-on-click-modal": !1,
                        visible: t.classDialog
                    },
                    on: {
                        "update:visible": function (e) {
                            t.classDialog = e
                        }
                    }
                }, [i("el-scrollbar", {
                    staticStyle: {
                        height: "370px"
                    }
                }, [i("div", {
                    staticClass: "my-class"
                }, [i("p", {
                    staticClass: "title"
                }, [i("span"), t._v("我的班级")]), t._v(" "), i("p", {
                    staticClass: "name"
                }, [t._v(t._s(t.classInfo.classTeacherDto.className))])]), t._v(" "), i("div", {
                    staticClass: "my-teacher"
                }, [i("p", {
                    staticClass: "title"
                }, [i("span"), t._v("辅导老师")]), t._v(" "), t._l(t.classInfo.userPrivacyOpenDtoList, function (e, n) {
                    return i("p", {
                        staticClass: "teacher-info"
                    }, [i("span", {
                        staticClass: "name"
                    }, [t._v(t._s(e.realname))])])
                })], 2)])], 1) : t._e(), t._v(" "), t.teachDialog ? i("el-dialog", {
                    staticClass: "dialog-teach",
                    attrs: {
                        title: "教学大纲",
                        visible: t.teachDialog,
                        "close-on-click-modal": !1
                    },
                    on: {
                        "update:visible": function (e) {
                            t.teachDialog = e
                        }
                    }
                }, [i("el-scrollbar", {
                    staticStyle: {
                        height: "370px"
                    }
                }, [i("div", {
                    staticClass: "teach-box"
                }, [i("h2", [t._v(t._s(t.teachInfo.courseOutlineInfo.name))]), t._v(" "), t._l(t.teachInfo.courseOutlineInfo.chapterList, function (e, n) {
                    return i("ul", [i("li", [0 == e.rank || "零" == e.rank ? i("h3", [t._v("绪论 " + t._s(e.name))]) : i("h3", [t._v(t._s(t.changeChapterNumberString(e.rank)) + " " + t._s(e.name))]), t._v(" "), i("p", {
                        domProps: {
                            innerHTML: t._s(e.description)
                        }
                    })]), t._v(" "), t._l(e.lessonInfoDtoList, function (e) {
                        return i("li", [i("h3", [t._v(t._s(e.rank) + "." + t._s(e.name))]), t._v(" "), i("p", {
                            domProps: {
                                innerHTML: t._s(e.introduction)
                            }
                        })])
                    })], 2)
                })], 2)])], 1) : t._e(), t._v(" "), t.testDialog ? i("el-dialog", {
                    staticClass: "dialog-test",
                    attrs: {
                        title: "弹题测验",
                        visible: t.testDialog,
                        "close-on-click-modal": !1,
                        "before-close": t.closeTest
                    },
                    on: {
                        "update:visible": function (e) {
                            t.testDialog = e
                        }
                    }
                }, [i("div", {
                    attrs: {
                        slot: "title"
                    },
                    slot: "title"
                }, [i("h4", [t._v("弹题测验")]), t._v(" "), i("p", [t._v("弹题是为了帮助同学们巩固知识点，不会影响到大家作业和考试的成绩。")])]), t._v(" "), i("el-scrollbar", {
                    staticStyle: {
                        height: "370px"
                    }
                }, [i("div", {
                    staticClass: "topic"
                }, [i("el-pagination", {
                    attrs: {
                        "page-size": 1,
                        layout: "prev, pager,next",
                        total: t.topicInfo.lessonTestQuestionUseInterfaceDtos.length
                    },
                    on: {
                        "current-change": t.pageeClick,
                        "prev-click": t.pageeClick,
                        "next-click": t.pageeClick
                    }
                }), t._v(" "), i("div", {
                    staticClass: "radio"
                }, [i("p", {
                    staticClass: "topic-title"
                }, [t.pageList.isCheck ? i("span", [!0 === t.pageList.isError ? i("span", {
                    staticClass: "error"
                }, [i("i", {
                    staticClass: "iconfont iconcuowu1"
                }), t._v("\n                                    错误\n                                ")]) : t._e(), t._v(" "), !1 === t.pageList.isError ? i("span", {
                    staticClass: "right"
                }, [i("i", {
                    staticClass: "iconfont iconzhengque1"
                }), t._v("\n                                    正确\n                                ")]) : t._e()]) : t._e(), t._v(" "), i("span", {
                    staticClass: "title-tit"
                }, [t._v("【" + t._s(t.pageList.testQuestion.questionType.name) + "】")]), t._v(" "), i("span", {
                    domProps: {
                        innerHTML: t._s(t.pageList.testQuestion.name)
                    }
                })]), t._v(" "), i("ul", {
                    staticClass: "topic-list"
                }, t._l(t.pageList.testQuestion.questionOptions, function (e) {
                    return i("li", {
                        staticClass: "topic-item",
                        on: {
                            click: function (i) {
                                return t.topicClick(e)
                            }
                        }
                    }, ["radio" == t.pageList.testQuestion.questionType.inputType ? i("div", [e.isClick ? i("svg", {
                        staticClass: "icon topic-option",
                        attrs: {
                            "aria-hidden": "true"
                        }
                    }, [i("use", {
                        attrs: {
                            "xlink:href": "#iconxuanzhong"
                        }
                    })]) : t._e(), t._v(" "), e.isClick ? t._e() : i("svg", {
                        staticClass: "icon topic-option",
                        attrs: {
                            "aria-hidden": "true"
                        }
                    }, [i("use", {
                        attrs: {
                            "xlink:href": "#iconxuan"
                        }
                    })])]) : t._e(), t._v(" "), "checkbox" == t.pageList.testQuestion.questionType.inputType ? i("div", [e.isClick ? i("svg", {
                        staticClass: "icon topic-option",
                        attrs: {
                            "aria-hidden": "true"
                        }
                    }, [i("use", {
                        attrs: {
                            "xlink:href": "#iconfuxuanzhong"
                        }
                    })]) : t._e(), t._v(" "), e.isClick ? t._e() : i("svg", {
                        staticClass: "icon topic-option",
                        attrs: {
                            "aria-hidden": "true"
                        }
                    }, [i("use", {
                        attrs: {
                            "xlink:href": "#iconfuxuan"
                        }
                    })])]) : t._e(), t._v(" "), i("span", {
                        staticClass: "topic-option-item",
                        class: e.isClick ? "active" : ""
                    }, [t._v(t._s(e.sortUs) + ".")]), t._v(" "), i("div", {
                        staticClass: "item-topic",
                        class: e.isClick ? "active" : "",
                        domProps: {
                            innerHTML: t._s(e.content)
                        }
                    })])
                }), 0), t._v(" "), t.pageList.showAnswer ? i("div", [i("p", {
                    staticClass: "answer"
                }, [t._v("正确答案："), i("span", [t._v(t._s(t.pageList.answerUs.join(",")))])])]) : t._e()])], 1)]), t._v(" "), i("span", {
                    staticClass: "dialog-footer",
                    attrs: {
                        slot: "footer"
                    },
                    slot: "footer"
                }, [i("div", {
                    staticClass: "btn",
                    on: {
                        click: t.closeTest
                    }
                }, [t._v("关闭")])])], 1) : t._e(), t._v(" "), t.swiperVisible ? i("div", {
                    staticClass: "swiper"
                }, [i("div", {
                    staticClass: "swiper-mask"
                }), t._v(" "), i("div", {
                    staticClass: "close",
                    on: {
                        click: function (e) {
                            t.swiperVisible = !1
                        }
                    }
                }, [i("i", {
                    staticClass: "iconfont iconguanbi"
                })]), t._v(" "), i("el-carousel", {
                    attrs: {
                        arrow: "always",
                        autoplay: !1,
                        "initial-index": t.initIndex
                    },
                    on: {
                        change: t.changeBtn
                    }
                }, [t._l(t.pageList.imagList, function (t, e) {
                    return i("el-carousel-item", {
                        key: e
                    }, [i("img", {
                        staticClass: "swiper-img",
                        attrs: {
                            src: t.url
                        }
                    })])
                }), t._v(" "), i("p", {
                    staticClass: "swiper-num"
                }, [i("span", [t._v(t._s(t.swiperCurrNum) + " ")]), t._v("/" + t._s(t.pageList.imagList.length))])], 2)], 1) : t._e(), t._v(" "), t.imgDialog ? i("el-dialog", {
                    staticClass: "dialog-img",
                    attrs: {
                        title: "弹图",
                        visible: t.imgDialog,
                        "close-on-click-modal": !1,
                        "before-close": t.closeImg
                    },
                    on: {
                        "update:visible": function (e) {
                            t.imgDialog = e
                        }
                    }
                }, [i("img", {
                    attrs: {
                        src: t.imgUrlDialog,
                        alt: ""
                    }
                })]) : t._e(), t._v(" "), i("div", {
                    directives: [{
                        name: "show",
                        rawName: "v-show",
                        value: t.readDialog && t.data.showStudyBefore && 2 != t.videoData.type && 1 == t.videoData.isShareCourse && t.data.runStandard >= 1 && (1 == t.data.scorePublishRule || 3 == t.data.scorePublishRule),
                        expression: "readDialog&&data.showStudyBefore&&videoData.type!=2&&videoData.isShareCourse==1&&data.runStandard>=1&&(data.scorePublishRule==1||data.scorePublishRule==3)"
                    }],
                    staticClass: "dialog"
                }, [i("div", {
                    staticClass: "mask"
                }), t._v(" "), i("div", {
                    staticClass: "dialog-read"
                }, [i("div", {
                    staticClass: "el-dialog__header"
                }, [i("h4", [t._v("学前必读")]), t._v(" "), i("p", [t._v("感谢你选择修读这门课程，以下为本课程的学习指导卡，请同学们务必知晓")]), t._v(" "), i("i", {
                    staticClass: "iconfont iconguanbi",
                    on: {
                        click: t.readCloseClick
                    }
                })]), t._v(" "), i("el-scrollbar", {
                    staticStyle: {
                        height: "370px"
                    }
                }, [i("div", {
                    staticClass: "nano-content-all"
                }, [i("div", {
                    staticClass: "preschool-Mustread-div",
                    staticStyle: {
                        outline: "none",
                        right: "-17px"
                    }
                }, [i("div", {
                    staticClass: "Chartdiv",
                    staticStyle: {
                        width: "580px",
                        height: "230px"
                    },
                    attrs: {
                        id: "Chartdiv"
                    }
                }), t._v(" "), i("div", {
                    staticClass: "studyExam-div"
                }, [i("div", {
                    staticClass: "studytime-div"
                }, [i("p", {
                    staticClass: "studytime-p1"
                }, [t._v("学 / 习 / 时 / 间")]), t._v(" "), i("p", {
                    staticClass: "studytime-p2"
                }, [t._v(t._s(t.readInfo.courseStart) + "至" + t._s(t.readInfo.courseEnd))])]), t._v(" "), i("div", {
                    staticClass: "Examtime-div"
                }, [i("p", {
                    staticClass: "Examtime-p1"
                }, [t._v("考 / 试 / 时 / 间")]), t._v(" "), t.readInfo.examStart && t.readInfo.examEnd ? i("p", {
                    staticClass: "Examtime-p2"
                }, [t._v(t._s(t.readInfo.examStart) + "至" + t._s(t.readInfo.examEnd))]) : i("p", {
                    staticClass: "Examtime-p2"
                }, [t._v("线下考试，具体考试时间以学校通知为准")])]), t._v(" "), i("div", {
                    staticClass: "Examtime-div"
                }, [i("p", {
                    staticClass: "Examtime-p1"
                }, [t._v("是否允许补考")]), t._v(" "), i("p", {
                    staticClass: "Examtime-p2"
                }, [t._v(t._s(t.readInfo.makeUpInfo))])])]), t._v(" "), i("p", {
                    staticClass: "studyhint-p"
                }, [t._v("超过学习时间，学习不记进度、作业停止提交、见面课不记签到。")]), t._v(" "), i("div", {
                    staticClass: "AchievementRules-div"
                }, [i("h1", [t._v("成绩规则")]), t._v(" "), i("div", {
                    staticClass: "AchievementRuleslist"
                }, [i("h2", [t._v("总成绩")]), t._v(" "), i("p", {
                    staticClass: "p1"
                }, [t._v("\n                                    总成绩(" + t._s(t.readInfo.scoreAssessRule.totalScore) + "分)=\n                                    平时成绩(" + t._s(t.readInfo.scoreAssessRule.usualScoreShare) + ")+\n                                    平时测试成绩(" + t._s(t.readInfo.scoreAssessRule.examScoreShare) + ")+\n                                    见面课成绩(" + t._s(t.readInfo.scoreAssessRule.meetCourseScoreShare) + ")+\n                                    期末考试成绩(" + t._s(t.readInfo.scoreAssessRule.finalExamScoreShare) + ")\n                                ")]), t._v(" "), i("div", {
                    staticClass: "AchievementRulesbg-div"
                }, [t.readInfo.examMakeup ? i("ul", [i("li", {
                    staticClass: "bulefont"
                }, [t._v("1、总成绩在考试截止时间48小时之后统一发布；")]), t._v(" "), i("li", {
                    staticClass: "bulefont"
                }, [t._v("2、学校规定，总成绩不合格有一次补考机会，但是否允许补考以实际为准；")]), t._v(" "), i("li", [t._v("3、若期末考试有主观题，则由老师批阅后手动发布成绩")])]) : t._e(), t._v(" "), t.readInfo.examMakeup ? t._e() : i("ul", [i("li", {
                    staticClass: "bulefont"
                }, [t._v("1、总成绩在考试截止时间48小时之后统一发布；")]), t._v(" "), i("li", {
                    staticClass: "bulefont"
                }, [t._v("2、学校规定，总成绩不合格将不允许补考；")]), t._v(" "), i("li", [t._v("2、若期末考试有主观题，则由老师批阅后手动发布成绩")])])])]), t._v(" "), i("div", {
                    staticClass: "AchievementRuleslist"
                }, [i("h2", [t._v("平时成绩(" + t._s(t.readInfo.scoreAssessRule.usualScoreShare) + "分)")]), t._v(" "), i("p", {
                    staticClass: "p1"
                }, [t._v("平时成绩=学习进度成绩（" + t._s(t.readInfo.scoreAssessRule.progressScoreShare) + "分）+\n                                    学习习惯成绩（" + t._s(t.readInfo.scoreAssessRule.learningHabitScore) + "分）+\n                                    我的互动成绩（" + t._s(t.readInfo.scoreAssessRule.learningInteractScore) + "分）")]), t._v(" "), i("p", {
                    staticClass: "p1"
                }, [t._v("学习结束之前观看完视频完成平时测试可获得进度成绩 ，合理规划学习行为、积极参与问答讨论可获得行为成绩。")])]), t._v(" "), i("div", {
                    staticClass: "AchievementRuleslist"
                }, [i("h2", [t._v("见面课成绩(" + t._s(t.readInfo.scoreAssessRule.meetCourseScoreShare) + "分)")]), t._v(" "), i("p", {
                    staticClass: "p1"
                }, [t._v("见面课成绩为学生所有签到成绩、表现成绩与随堂测验成绩的总和")]), t._v(" "), i("div", {
                    staticClass: "AchievementRulesbg-div"
                }, [i("ul", [i("li", [t._v("1、签到成绩-学生通过参加见面课时完成对应的签到后获得的成绩")]), t._v(" "), i("li", [t._v("2、表现成绩-老师会根据学生参与见面课的表现给予相应的分数成绩")]), t._v(" "), i("li", [t._v("3、测验成绩-见面课后，老师会布置随堂测验，完成测验获得相应的成绩。")])])])]), t._v(" "), i("div", {
                    staticClass: "AchievementRuleslist"
                }, [i("h2", [t._v("平时测试成绩(" + t._s(t.readInfo.scoreAssessRule.examScoreShare) + "分)")]), t._v(" "), i("p", {
                    staticClass: "p1"
                }, [t._v("平时测试成绩=所有平时测试得分之和/所有平时测试总分*" + t._s(t.readInfo.scoreAssessRule.examScoreShare))])]), t._v(" "), i("div", {
                    staticClass: "AchievementRuleslist"
                }, [i("h2", [t._v("期末考试成绩(" + t._s(t.readInfo.scoreAssessRule.finalExamScoreShare) + "分)")]), t._v(" "), i("p", {
                    staticClass: "p1"
                }, [t._v("期末考试成绩=[期末考试分/期末考试总分]*100*" + t._s(t.readInfo.scoreAssessRule.finalExamScoreShare) + "%")])]), t._v(" "), i("img", {
                    attrs: {
                        src: "//image.zhihuishu.com/zhs_yufa_150820/ablecommons/demo/201911/392cc0eb4e1344a6aff3a7b73c60af81.png",
                        width: "570"
                    }
                }), t._v(" "), i("img", {
                    attrs: {
                        src: "//image.zhihuishu.com/zhs_yufa_150820/ablecommons/demo/202103/14ded5fab068428eb3995c4b4f6cecae.jpg",
                        width: "570"
                    }
                }), t._v(" "), i("img", {
                    attrs: {
                        src: "//image.zhihuishu.com/zhs_yufa_150820/ablecommons/zhangying/202103/f97d4f1ba41d48a68647ca211371a240.png",
                        width: "570"
                    }
                })])])])])], 1)]), t._v(" "), t.readDialog ? i("el-dialog", {
                    staticClass: "read-learn",
                    attrs: {
                        title: "学前必读",
                        visible: t.readDialog && t.data.showStudyBefore && 2 != t.videoData.type && 1 == t.videoData.isShareCourse && 1 == t.data.runStandard && 2 == t.data.scorePublishRule,
                        "close-on-click-modal": !1,
                        "before-close": t.readCloseClick
                    },
                    on: {
                        "update:visible": function (e) {
                            return t.$set(t.readDialog && t.data.showStudyBefore && 2 != t.videoData.type && 1 == t.videoData.isShareCourse && 1 == t.data.runStandard && t.data, "scorePublishRule==2", e)
                        }
                    }
                }, [i("div", [i("p", [t._v("同学你好，你所选的课程，智慧树会在课程结束时提供您线上成绩的数据给予到你的学校，你的学校根据自身教学情况，置顶最终的成绩考核标准\n                "), i("span", [t._v("So，我们也无法知道您的线上成绩会占总成绩额多少，成绩仅供参考，最终成绩请在课程结束后咨询学校的相关老师")])])]), t._v(" "), i("span", {
                    staticClass: "dialog-footer",
                    attrs: {
                        slot: "footer"
                    },
                    slot: "footer"
                }, [i("el-button", {
                    staticClass: "btn cancel",
                    attrs: {
                        type: "primary"
                    },
                    on: {
                        click: function (e) {
                            t.readDialog = !1
                        }
                    }
                }, [t._v("我知道了")])], 1)]) : t._e(), t._v(" "), t.lookAnswerDialog ? i("el-dialog", {
                    staticClass: "dialog-look-ans",
                    attrs: {
                        title: "提示",
                        visible: t.lookAnswerDialog,
                        "close-on-click-modal": !1
                    },
                    on: {
                        "update:visible": function (e) {
                            t.lookAnswerDialog = e
                        }
                    }
                }, [i("div", {
                    staticClass: "operate-dialog-1"
                }, [i("img", {
                    attrs: {
                        src: "https://image.zhihuishu.com/zhs_yufa_150820/ablecommons/demo/201909/4f1a95240cc44064943583175f17b98f.png",
                        alt: ""
                    }
                }), t._v(" "), i("p", [t._v("你确定要查看答案吗？查看答案后不可以在申请重做")])]), t._v(" "), i("span", {
                    staticClass: "dialog-footer",
                    attrs: {
                        slot: "footer"
                    },
                    slot: "footer"
                }, [i("el-button", {
                    staticClass: "btn",
                    attrs: {
                        type: "primary"
                    },
                    on: {
                        click: t.lookAnsSureBtn
                    }
                }, [t._v("确定")]), t._v(" "), i("el-button", {
                    staticClass: "btn cancel",
                    attrs: {
                        type: "primary"
                    },
                    on: {
                        click: function (e) {
                            t.lookAnswerDialog = !1
                        }
                    }
                }, [t._v("取消")])], 1)]) : t._e(), t._v(" "), t.lookHabitDialog ? i("el-dialog", {
                    staticClass: "dialog-look-habit",
                    attrs: {
                        title: "温馨提示",
                        visible: t.lookHabitDialog,
                        "close-on-click-modal": !1
                    },
                    on: {
                        "update:visible": function (e) {
                            t.lookHabitDialog = e
                        }
                    }
                }, [i("div", {
                    staticClass: "operate-dialog-1"
                }, [i("p", [t._v("您今日已经学习了一段时间，若超前学习可能无法获得【习惯分】，只有每日学习一定时间才能获得【习惯分】，您可以每日去【\n                "), i("a", {
                    attrs: {
                        target: "_blank",
                        href: "https://stuonline.zhihuishu.com/stuonline/stuLearnReportNew/index?recruitId=" + t.recruitId + "&courseId=" + t.courseId
                    }
                }, [t._v("成绩分析")]), t._v("】中查看昨日的学习是否有效。了解【习惯分】规则，请戳下方按钮。\n            ")]), t._v(" "), i("div", {
                    staticClass: "habit-teshu"
                }, [t._v("特殊说明：此次提醒仅告知您可能会超长学习，并不代表您已完成了当日的学习时间，请自觉根据习惯分规则，计算自己的有效观看时间，或第二天去成绩分析中查看学习是否有效。")])]), t._v(" "), i("span", {
                    staticClass: "dialog-footer",
                    attrs: {
                        slot: "footer"
                    },
                    slot: "footer"
                }, [i("el-button", {
                    staticClass: "btn",
                    attrs: {
                        type: "primary"
                    },
                    on: {
                        click: t.lookHabitBtn
                    }
                }, [t._v("查看习惯分规则")])], 1)]) : t._e(), t._v(" "), t.learnHabitDialog ? i("el-dialog", {
                    staticClass: "dialog-learn-habit",
                    attrs: {
                        title: "学习习惯分规则",
                        visible: t.learnHabitDialog,
                        "close-on-click-modal": !1
                    },
                    on: {
                        "update:visible": function (e) {
                            t.learnHabitDialog = e
                        }
                    }
                }, [i("div", {
                    staticClass: "operate-dialog-1"
                }, [i("img", {
                    attrs: {
                        src: "//image.zhihuishu.com/zhs_yufa_150820/ablecommons/demo/202103/14ded5fab068428eb3995c4b4f6cecae.jpg",
                        width: "570"
                    }
                })])]) : t._e(), t._v(" "), i("el-dialog", {
                    staticClass: "dialog-back",
                    attrs: {
                        title: "温馨提示",
                        visible: t.backDialog,
                        "close-on-click-modal": !1
                    },
                    on: {
                        "update:visible": function (e) {
                            t.backDialog = e
                        }
                    }
                }, [i("div", {
                    staticClass: "operate-dialog-1"
                }, [i("p", [t._v("因网络连接问题，导致学习进度提交失败，为保证您不丢失学习进度，请回到学堂重新进入视频学习页。")])]), t._v(" "), i("span", {
                    staticClass: "dialog-footer",
                    attrs: {
                        slot: "footer"
                    },
                    slot: "footer"
                }, [i("el-button", {
                    staticClass: "btn",
                    attrs: {
                        type: "primary"
                    },
                    on: {
                        click: t.backLearnClick
                    }
                }, [t._v("返回学堂")])], 1)])], 1)
            },
            staticRenderFns: [function () {
                var t = this,
                    e = t.$createElement,
                    i = t._self._c || e;
                return i("p", {
                    staticClass: "title"
                }, [t._v("由于学校要求，当前不在课程开放时间，"), i("br"), t._v("请在课程开放时再来学习课程")])
            }, function () {
                var t = this,
                    e = t.$createElement,
                    i = t._self._c || e;
                return i("div", {
                    staticClass: "topicTitle clearfix"
                }, [i("ul", [i("li", {
                    staticClass: "tabTitle select",
                    attrs: {
                        tid: "1"
                    }
                }, [i("span", [t._v("目录")])])])])
            }]
        }
    }, , , , , , , , function (t, e, i) {
        function n(t) {
            i(832)
        }

        var o = i(110)(i(748), i(854), n, null, null);
        t.exports = o.exports
    }, function (t, e, i) {
        var n = i(110)(i(749), i(849), null, null, null);
        t.exports = n.exports
    }, , function (t, e, i) {
        var n = i(110)(i(751), i(857), null, null, null);
        t.exports = n.exports
    }, , , , , function (t, e, i) {
        function n(t, e, i) {
            return {
                type: t,
                event: i,
                target: e.target,
                topTarget: e.topTarget,
                cancelBubble: !1,
                offsetX: i.zrX,
                offsetY: i.zrY,
                gestureEvent: i.gestureEvent,
                pinchX: i.pinchX,
                pinchY: i.pinchY,
                pinchScale: i.pinchScale,
                wheelDelta: i.zrDelta,
                zrByTouch: i.zrByTouch,
                which: i.which,
                stop: o
            }
        }

        function o() {
            h.stop(this.event)
        }

        function a() {
        }

        function r(t, e, i) {
            if (t[t.rectHover ? "rectContain" : "contain"](e, i)) {
                for (var n, o = t; o;) {
                    if (o.clipPath && !o.clipPath.contain(e, i)) return !1;
                    o.silent && (n = !0), o = o.parent
                }
                return !n || p
            }
            return !1
        }

        function s(t, e, i) {
            var n = t.painter;
            return e < 0 || e > n.getWidth() || i < 0 || i > n.getHeight()
        }

        var l = i(630),
            d = i(635),
            u = i(908),
            c = i(658),
            h = i(663),
            f = i(891),
            p = "silent";
        a.prototype.dispose = function () {
        };
        var g = ["click", "dblclick", "mousewheel", "mouseout", "mouseup", "mousedown", "mousemove", "contextmenu"],
            v = function (t, e, i, n) {
                c.call(this), this.storage = t, this.painter = e, this.painterRoot = n, i = i || new a, this.proxy = null, this._hovered = {}, this._lastTouchMoment, this._lastX, this._lastY, this._gestureMgr, u.call(this), this.setHandlerProxy(i)
            };
        v.prototype = {
            constructor: v,
            setHandlerProxy: function (t) {
                this.proxy && this.proxy.dispose(), t && (l.each(g, function (e) {
                    t.on && t.on(e, this[e], this)
                }, this), t.handler = this), this.proxy = t
            },
            mousemove: function (t) {
                var e = t.zrX,
                    i = t.zrY,
                    n = s(this, e, i),
                    o = this._hovered,
                    a = o.target;
                a && !a.__zr && (o = this.findHover(o.x, o.y), a = o.target);
                var r = this._hovered = n ? {
                        x: e,
                        y: i
                    } : this.findHover(e, i),
                    l = r.target,
                    d = this.proxy;
                d.setCursor && d.setCursor(l ? l.cursor : "default"), a && l !== a && this.dispatchToElement(o, "mouseout", t), this.dispatchToElement(r, "mousemove", t), l && l !== a && this.dispatchToElement(r, "mouseover", t)
            },
            mouseout: function (t) {
                var e = t.zrEventControl,
                    i = t.zrIsToLocalDOM;
                "only_globalout" !== e && this.dispatchToElement(this._hovered, "mouseout", t), "no_globalout" !== e && !i && this.trigger("globalout", {
                    type: "globalout",
                    event: t
                })
            },
            resize: function (t) {
                this._hovered = {}
            },
            dispatch: function (t, e) {
                var i = this[t];
                i && i.call(this, e)
            },
            dispose: function () {
                this.proxy.dispose(), this.storage = this.proxy = this.painter = null
            },
            setCursorStyle: function (t) {
                var e = this.proxy;
                e.setCursor && e.setCursor(t)
            },
            dispatchToElement: function (t, e, i) {
                t = t || {};
                var o = t.target;
                if (!o || !o.silent) {
                    for (var a = "on" + e, r = n(e, t, i); o && (o[a] && (r.cancelBubble = o[a].call(o, r)), o.trigger(e, r), o = o.parent, !r.cancelBubble);) ;
                    r.cancelBubble || (this.trigger(e, r), this.painter && this.painter.eachOtherLayer(function (t) {
                        "function" == typeof t[a] && t[a].call(t, r), t.trigger && t.trigger(e, r)
                    }))
                }
            },
            findHover: function (t, e, i) {
                for (var n = this.storage.getDisplayList(), o = {
                    x: t,
                    y: e
                }, a = n.length - 1; a >= 0; a--) {
                    var s;
                    if (n[a] !== i && !n[a].ignore && (s = r(n[a], t, e)) && (!o.topTarget && (o.topTarget = n[a]), s !== p)) {
                        o.target = n[a];
                        break
                    }
                }
                return o
            },
            processGesture: function (t, e) {
                this._gestureMgr || (this._gestureMgr = new f);
                var i = this._gestureMgr;
                "start" === e && i.clear();
                var n = i.recognize(t, this.findHover(t.zrX, t.zrY, null).target, this.proxy.dom);
                if ("end" === e && i.clear(), n) {
                    var o = n.type;
                    t.gestureEvent = o, this.dispatchToElement({
                        target: n.target
                    }, o, n.event)
                }
            }
        }, l.each(["click", "mousedown", "mouseup", "mousewheel", "dblclick", "contextmenu"], function (t) {
            v.prototype[t] = function (e) {
                var i, n, o = e.zrX,
                    a = e.zrY,
                    r = s(this, o, a);
                if ("mouseup" === t && r || (i = this.findHover(o, a), n = i.target), "mousedown" === t) this._downEl = n, this._downPoint = [e.zrX, e.zrY], this._upEl = n;
                else if ("mouseup" === t) this._upEl = n;
                else if ("click" === t) {
                    if (this._downEl !== this._upEl || !this._downPoint || d.dist(this._downPoint, [e.zrX, e.zrY]) > 4) return;
                    this._downPoint = null
                }
                this.dispatchToElement(i, t, e)
            }
        }), l.mixin(v, c), l.mixin(v, u);
        var m = v;
        t.exports = m
    }, function (t, e, i) {
        function n() {
            return !1
        }

        function o(t, e, i) {
            var n = a.createCanvas(),
                o = e.getWidth(),
                r = e.getHeight(),
                s = n.style;
            return s && (s.position = "absolute", s.left = 0, s.top = 0, s.width = o + "px", s.height = r + "px", n.setAttribute("data-zr-dom-id", t)), n.width = o * i, n.height = r * i, n
        }

        var a = i(630),
            r = i(661),
            s = r.devicePixelRatio,
            l = i(694),
            d = i(721),
            u = function (t, e, i) {
                var r;
                i = i || s, "string" == typeof t ? r = o(t, e, i) : a.isObject(t) && (r = t, t = r.id), this.id = t, this.dom = r;
                var l = r.style;
                l && (r.onselectstart = n, l["-webkit-user-select"] = "none", l["user-select"] = "none", l["-webkit-touch-callout"] = "none", l["-webkit-tap-highlight-color"] = "rgba(0,0,0,0)", l.padding = 0, l.margin = 0, l["border-width"] = 0), this.domBack = null, this.ctxBack = null, this.painter = e, this.config = null, this.clearColor = 0, this.motionBlur = !1, this.lastFrameAlpha = .7, this.dpr = i
            };
        u.prototype = {
            constructor: u,
            __dirty: !0,
            __used: !1,
            __drawIndex: 0,
            __startIndex: 0,
            __endIndex: 0,
            incremental: !1,
            getElementCount: function () {
                return this.__endIndex - this.__startIndex
            },
            initContext: function () {
                this.ctx = this.dom.getContext("2d"), this.ctx.dpr = this.dpr
            },
            createBackBuffer: function () {
                var t = this.dpr;
                this.domBack = o("back-" + this.id, this.painter, t), this.ctxBack = this.domBack.getContext("2d"), 1 !== t && this.ctxBack.scale(t, t)
            },
            resize: function (t, e) {
                var i = this.dpr,
                    n = this.dom,
                    o = n.style,
                    a = this.domBack;
                o && (o.width = t + "px", o.height = e + "px"), n.width = t * i, n.height = e * i, a && (a.width = t * i, a.height = e * i, 1 !== i && this.ctxBack.scale(i, i))
            },
            clear: function (t, e) {
                var i = this.dom,
                    n = this.ctx,
                    o = i.width,
                    a = i.height,
                    e = e || this.clearColor,
                    r = this.motionBlur && !t,
                    s = this.lastFrameAlpha,
                    u = this.dpr;
                if (r && (this.domBack || this.createBackBuffer(), this.ctxBack.globalCompositeOperation = "copy", this.ctxBack.drawImage(i, 0, 0, o / u, a / u)), n.clearRect(0, 0, o, a), e && "transparent" !== e) {
                    var c;
                    e.colorStops ? (c = e.__canvasGradient || l.getGradient(n, e, {
                        x: 0,
                        y: 0,
                        width: o,
                        height: a
                    }), e.__canvasGradient = c) : e.image && (c = d.prototype.getCanvasPattern.call(e, n)), n.save(), n.fillStyle = c || e, n.fillRect(0, 0, o, a), n.restore()
                }
                if (r) {
                    var h = this.domBack;
                    n.save(), n.globalAlpha = s, n.drawImage(h, 0, 0, o, a), n.restore()
                }
            }
        };
        var c = u;
        t.exports = c
    }, function (t, e, i) {
        function n(t) {
            return parseInt(t, 10)
        }

        function o(t) {
            return !!t && (!!t.__builtin__ || "function" == typeof t.resize && "function" == typeof t.refresh)
        }

        function a(t, e, i) {
            return y.copy(t.getBoundingRect()), t.transform && y.applyTransform(t.transform), x.width = e, x.height = i, !y.intersect(x)
        }

        function r(t, e) {
            if (t === e) return !1;
            if (!t || !e || t.length !== e.length) return !0;
            for (var i = 0; i < t.length; i++)
                if (t[i] !== e[i]) return !0;
            return !1
        }

        function s(t, e) {
            for (var i = 0; i < t.length; i++) {
                var n = t[i];
                n.setTransform(e), e.beginPath(), n.buildPath(e, n.shape), e.clip(), n.restoreTransform(e)
            }
        }

        function l(t, e) {
            var i = document.createElement("div");
            return i.style.cssText = ["position:relative", "width:" + t + "px", "height:" + e + "px", "padding:0", "margin:0", "border-width:0"].join(";") + ";", i
        }

        var d = i(661),
            u = d.devicePixelRatio,
            c = i(630),
            h = i(719),
            f = i(636),
            p = i(691),
            g = i(879),
            v = i(713),
            m = i(693),
            _ = i(637),
            y = new f(0, 0, 0, 0),
            x = new f(0, 0, 0, 0),
            b = function (t, e, i) {
                this.type = "canvas";
                var n = !t.nodeName || "CANVAS" === t.nodeName.toUpperCase();
                this._opts = i = c.extend({}, i || {}), this.dpr = i.devicePixelRatio || u, this._singleCanvas = n, this.root = t;
                var o = t.style;
                o && (o["-webkit-tap-highlight-color"] = "transparent", o["-webkit-user-select"] = o["user-select"] = o["-webkit-touch-callout"] = "none", t.innerHTML = ""), this.storage = e;
                var a = this._zlevelList = [],
                    r = this._layers = {};
                if (this._layerConfig = {}, this._needsManuallyCompositing = !1, n) {
                    var s = t.width,
                        d = t.height;
                    null != i.width && (s = i.width), null != i.height && (d = i.height), this.dpr = i.devicePixelRatio || 1, t.width = s * this.dpr, t.height = d * this.dpr, this._width = s, this._height = d;
                    var h = new g(t, this, this.dpr);
                    h.__builtin__ = !0, h.initContext(), r[314159] = h, h.zlevel = 314159, a.push(314159), this._domRoot = t
                } else {
                    this._width = this._getSize(0), this._height = this._getSize(1);
                    var f = this._domRoot = l(this._width, this._height);
                    t.appendChild(f)
                }
                this._hoverlayer = null, this._hoverElements = []
            };
        b.prototype = {
            constructor: b,
            getType: function () {
                return "canvas"
            },
            isSingleCanvas: function () {
                return this._singleCanvas
            },
            getViewportRoot: function () {
                return this._domRoot
            },
            getViewportRootOffset: function () {
                var t = this.getViewportRoot();
                if (t) return {
                    offsetLeft: t.offsetLeft || 0,
                    offsetTop: t.offsetTop || 0
                }
            },
            refresh: function (t) {
                var e = this.storage.getDisplayList(!0),
                    i = this._zlevelList;
                this._redrawId = Math.random(), this._paintList(e, t, this._redrawId);
                for (var n = 0; n < i.length; n++) {
                    var o = i[n],
                        a = this._layers[o];
                    if (!a.__builtin__ && a.refresh) {
                        var r = 0 === n ? this._backgroundColor : null;
                        a.refresh(r)
                    }
                }
                return this.refreshHover(), this
            },
            addHover: function (t, e) {
                if (!t.__hoverMir) {
                    var i = new t.constructor({
                        style: t.style,
                        shape: t.shape,
                        z: t.z,
                        z2: t.z2,
                        silent: t.silent
                    });
                    return i.__from = t, t.__hoverMir = i, e && i.setStyle(e), this._hoverElements.push(i), i
                }
            },
            removeHover: function (t) {
                var e = t.__hoverMir,
                    i = this._hoverElements,
                    n = c.indexOf(i, e);
                n >= 0 && i.splice(n, 1), t.__hoverMir = null
            },
            clearHover: function (t) {
                for (var e = this._hoverElements, i = 0; i < e.length; i++) {
                    var n = e[i].__from;
                    n && (n.__hoverMir = null)
                }
                e.length = 0
            },
            refreshHover: function () {
                var t = this._hoverElements,
                    e = t.length,
                    i = this._hoverlayer;
                if (i && i.clear(), e) {
                    p(t, this.storage.displayableSortFunc), i || (i = this._hoverlayer = this.getLayer(1e5));
                    var n = {};
                    i.ctx.save();
                    for (var o = 0; o < e;) {
                        var a = t[o],
                            r = a.__from;
                        r && r.__zr ? (o++, r.invisible || (a.transform = r.transform, a.invTransform = r.invTransform, a.__clipPaths = r.__clipPaths, this._doPaintEl(a, i, !0, n))) : (t.splice(o, 1), r.__hoverMir = null, e--)
                    }
                    i.ctx.restore()
                }
            },
            getHoverLayer: function () {
                return this.getLayer(1e5)
            },
            _paintList: function (t, e, i) {
                if (this._redrawId === i) {
                    e = e || !1, this._updateLayerStatus(t);
                    var n = this._doPaintList(t, e);
                    if (this._needsManuallyCompositing && this._compositeManually(), !n) {
                        var o = this;
                        v(function () {
                            o._paintList(t, e, i)
                        })
                    }
                }
            },
            _compositeManually: function () {
                var t = this.getLayer(314159).ctx,
                    e = this._domRoot.width,
                    i = this._domRoot.height;
                t.clearRect(0, 0, e, i), this.eachBuiltinLayer(function (n) {
                    n.virtual && t.drawImage(n.dom, 0, 0, e, i)
                })
            },
            _doPaintList: function (t, e) {
                for (var i = [], n = 0; n < this._zlevelList.length; n++) {
                    var o = this._zlevelList[n],
                        a = this._layers[o];
                    a.__builtin__ && a !== this._hoverlayer && (a.__dirty || e) && i.push(a)
                }
                for (var r = !0, s = 0; s < i.length; s++) {
                    var a = i[s],
                        l = a.ctx,
                        d = {};
                    l.save();
                    var u = e ? a.__startIndex : a.__drawIndex,
                        h = !e && a.incremental && Date.now,
                        f = h && Date.now(),
                        p = a.zlevel === this._zlevelList[0] ? this._backgroundColor : null;
                    if (a.__startIndex === a.__endIndex) a.clear(!1, p);
                    else if (u === a.__startIndex) {
                        var g = t[u];
                        g.incremental && g.notClear && !e || a.clear(!1, p)
                    }
                    -1 === u && (console.error("For some unknown reason. drawIndex is -1"), u = a.__startIndex);
                    for (var v = u; v < a.__endIndex; v++) {
                        var m = t[v];
                        if (this._doPaintEl(m, a, e, d), m.__dirty = m.__dirtyText = !1, h && Date.now() - f > 15) break
                    }
                    a.__drawIndex = v, a.__drawIndex < a.__endIndex && (r = !1), d.prevElClipPaths && l.restore(), l.restore()
                }
                return _.wxa && c.each(this._layers, function (t) {
                    t && t.ctx && t.ctx.draw && t.ctx.draw()
                }), r
            },
            _doPaintEl: function (t, e, i, n) {
                var o = e.ctx,
                    l = t.transform;
                if ((e.__dirty || i) && !t.invisible && 0 !== t.style.opacity && (!l || l[0] || l[3]) && (!t.culling || !a(t, this._width, this._height))) {
                    var d = t.__clipPaths,
                        u = n.prevElClipPaths;
                    u && !r(d, u) || (u && (o.restore(), n.prevElClipPaths = null, n.prevEl = null), d && (o.save(), s(d, o), n.prevElClipPaths = d)), t.beforeBrush && t.beforeBrush(o), t.brush(o, n.prevEl || null), n.prevEl = t, t.afterBrush && t.afterBrush(o)
                }
            },
            getLayer: function (t, e) {
                this._singleCanvas && !this._needsManuallyCompositing && (t = 314159);
                var i = this._layers[t];
                return i || (i = new g("zr_" + t, this, this.dpr), i.zlevel = t, i.__builtin__ = !0, this._layerConfig[t] ? c.merge(i, this._layerConfig[t], !0) : this._layerConfig[t - .01] && c.merge(i, this._layerConfig[t - .01], !0), e && (i.virtual = e), this.insertLayer(t, i), i.initContext()), i
            },
            insertLayer: function (t, e) {
                var i = this._layers,
                    n = this._zlevelList,
                    a = n.length,
                    r = null,
                    s = -1,
                    l = this._domRoot;
                if (i[t]) return void h("ZLevel " + t + " has been used already");
                if (!o(e)) return void h("Layer of zlevel " + t + " is not valid");
                if (a > 0 && t > n[0]) {
                    for (s = 0; s < a - 1 && !(n[s] < t && n[s + 1] > t); s++) ;
                    r = i[n[s]]
                }
                if (n.splice(s + 1, 0, t), i[t] = e, !e.virtual)
                    if (r) {
                        var d = r.dom;
                        d.nextSibling ? l.insertBefore(e.dom, d.nextSibling) : l.appendChild(e.dom)
                    } else l.firstChild ? l.insertBefore(e.dom, l.firstChild) : l.appendChild(e.dom)
            },
            eachLayer: function (t, e) {
                var i, n, o = this._zlevelList;
                for (n = 0; n < o.length; n++) i = o[n], t.call(e, this._layers[i], i)
            },
            eachBuiltinLayer: function (t, e) {
                var i, n, o, a = this._zlevelList;
                for (o = 0; o < a.length; o++) n = a[o], i = this._layers[n], i.__builtin__ && t.call(e, i, n)
            },
            eachOtherLayer: function (t, e) {
                var i, n, o, a = this._zlevelList;
                for (o = 0; o < a.length; o++) n = a[o], i = this._layers[n], i.__builtin__ || t.call(e, i, n)
            },
            getLayers: function () {
                return this._layers
            },
            _updateLayerStatus: function (t) {
                function e(t) {
                    a && (a.__endIndex !== t && (a.__dirty = !0), a.__endIndex = t)
                }

                if (this.eachBuiltinLayer(function (t, e) {
                    t.__dirty = t.__used = !1
                }), this._singleCanvas)
                    for (var i = 1; i < t.length; i++) {
                        var n = t[i];
                        if (n.zlevel !== t[i - 1].zlevel || n.incremental) {
                            this._needsManuallyCompositing = !0;
                            break
                        }
                    }
                for (var o, a = null, r = 0, i = 0; i < t.length; i++) {
                    var s, n = t[i],
                        l = n.zlevel;
                    o !== l && (o = l, r = 0), n.incremental ? (s = this.getLayer(l + .001, this._needsManuallyCompositing), s.incremental = !0, r = 1) : s = this.getLayer(l + (r > 0 ? .01 : 0), this._needsManuallyCompositing), s.__builtin__ || h("ZLevel " + l + " has been used by unkown layer " + s.id), s !== a && (s.__used = !0, s.__startIndex !== i && (s.__dirty = !0), s.__startIndex = i, s.incremental ? s.__drawIndex = -1 : s.__drawIndex = i, e(i), a = s), n.__dirty && (s.__dirty = !0, s.incremental && s.__drawIndex < 0 && (s.__drawIndex = i))
                }
                e(i), this.eachBuiltinLayer(function (t, e) {
                    !t.__used && t.getElementCount() > 0 && (t.__dirty = !0, t.__startIndex = t.__endIndex = t.__drawIndex = 0), t.__dirty && t.__drawIndex < 0 && (t.__drawIndex = t.__startIndex)
                })
            },
            clear: function () {
                return this.eachBuiltinLayer(this._clearLayer), this
            },
            _clearLayer: function (t) {
                t.clear()
            },
            setBackgroundColor: function (t) {
                this._backgroundColor = t
            },
            configLayer: function (t, e) {
                if (e) {
                    var i = this._layerConfig;
                    i[t] ? c.merge(i[t], e, !0) : i[t] = e;
                    for (var n = 0; n < this._zlevelList.length; n++) {
                        var o = this._zlevelList[n];
                        if (o === t || o === t + .01) {
                            var a = this._layers[o];
                            c.merge(a, i[t], !0)
                        }
                    }
                }
            },
            delLayer: function (t) {
                var e = this._layers,
                    i = this._zlevelList,
                    n = e[t];
                n && (n.dom.parentNode.removeChild(n.dom), delete e[t], i.splice(c.indexOf(i, t), 1))
            },
            resize: function (t, e) {
                if (this._domRoot.style) {
                    var i = this._domRoot;
                    i.style.display = "none";
                    var n = this._opts;
                    if (null != t && (n.width = t), null != e && (n.height = e), t = this._getSize(0), e = this._getSize(1), i.style.display = "", this._width !== t || e !== this._height) {
                        i.style.width = t + "px", i.style.height = e + "px";
                        for (var o in this._layers) this._layers.hasOwnProperty(o) && this._layers[o].resize(t, e);
                        c.each(this._progressiveLayers, function (i) {
                            i.resize(t, e)
                        }), this.refresh(!0)
                    }
                    this._width = t, this._height = e
                } else {
                    if (null == t || null == e) return;
                    this._width = t, this._height = e, this.getLayer(314159).resize(t, e)
                }
                return this
            },
            clearLayer: function (t) {
                var e = this._layers[t];
                e && e.clear()
            },
            dispose: function () {
                this.root.innerHTML = "", this.root = this.storage = this._domRoot = this._layers = null
            },
            getRenderedCanvas: function (t) {
                if (t = t || {}, this._singleCanvas && !this._compositeManually) return this._layers[314159].dom;
                var e = new g("image", this, t.pixelRatio || this.dpr);
                if (e.initContext(), e.clear(!1, t.backgroundColor || this._backgroundColor), t.pixelRatio <= this.dpr) {
                    this.refresh();
                    var i = e.dom.width,
                        n = e.dom.height,
                        o = e.ctx;
                    this.eachLayer(function (t) {
                        t.__builtin__ ? o.drawImage(t.dom, 0, 0, i, n) : t.renderToCanvas && (e.ctx.save(), t.renderToCanvas(e.ctx), e.ctx.restore())
                    })
                } else
                    for (var a = {}, r = this.storage.getDisplayList(!0), s = 0; s < r.length; s++) {
                        var l = r[s];
                        this._doPaintEl(l, e, !0, a)
                    }
                return e.dom
            },
            getWidth: function () {
                return this._width
            },
            getHeight: function () {
                return this._height
            },
            _getSize: function (t) {
                var e = this._opts,
                    i = ["width", "height"][t],
                    o = ["clientWidth", "clientHeight"][t],
                    a = ["paddingLeft", "paddingTop"][t],
                    r = ["paddingRight", "paddingBottom"][t];
                if (null != e[i] && "auto" !== e[i]) return parseFloat(e[i]);
                var s = this.root,
                    l = document.defaultView.getComputedStyle(s);
                return (s[o] || n(l[i]) || n(s.style[i])) - (n(l[a]) || 0) - (n(l[r]) || 0) | 0
            },
            pathToImage: function (t, e) {
                e = e || this.dpr;
                var i = document.createElement("canvas"),
                    n = i.getContext("2d"),
                    o = t.getBoundingRect(),
                    a = t.style,
                    r = a.shadowBlur * e,
                    s = a.shadowOffsetX * e,
                    l = a.shadowOffsetY * e,
                    d = a.hasStroke() ? a.lineWidth : 0,
                    u = Math.max(d / 2, -s + r),
                    c = Math.max(d / 2, s + r),
                    h = Math.max(d / 2, -l + r),
                    f = Math.max(d / 2, l + r),
                    p = o.width + u + c,
                    g = o.height + h + f;
                i.width = p * e, i.height = g * e, n.scale(e, e), n.clearRect(0, 0, p, g), n.dpr = e;
                var v = {
                    position: t.position,
                    rotation: t.rotation,
                    scale: t.scale
                };
                t.position = [u - o.x, h - o.y], t.rotation = 0, t.scale = [1, 1], t.updateTransform(), t && t.brush(n);
                var _ = m,
                    y = new _({
                        style: {
                            x: 0,
                            y: 0,
                            image: i
                        }
                    });
                return null != v.position && (y.position = t.position = v.position), null != v.rotation && (y.rotation = t.rotation = v.rotation), null != v.scale && (y.scale = t.scale = v.scale), y
            }
        };
        var w = b;
        t.exports = w
    }, function (t, e, i) {
        function n(t, e) {
            return t.zlevel === e.zlevel ? t.z === e.z ? t.z2 - e.z2 : t.z - e.z : t.zlevel - e.zlevel
        }

        var o = i(630),
            a = i(637),
            r = i(656),
            s = i(691),
            l = function () {
                this._roots = [], this._displayList = [], this._displayListLen = 0
            };
        l.prototype = {
            constructor: l,
            traverse: function (t, e) {
                for (var i = 0; i < this._roots.length; i++) this._roots[i].traverse(t, e)
            },
            getDisplayList: function (t, e) {
                return e = e || !1, t && this.updateDisplayList(e), this._displayList
            },
            updateDisplayList: function (t) {
                this._displayListLen = 0;
                for (var e = this._roots, i = this._displayList, o = 0, r = e.length; o < r; o++) this._updateAndAddDisplayable(e[o], null, t);
                i.length = this._displayListLen, a.canvasSupported && s(i, n)
            },
            _updateAndAddDisplayable: function (t, e, i) {
                if (!t.ignore || i) {
                    t.beforeUpdate(), t.__dirty && t.update(), t.afterUpdate();
                    var n = t.clipPath;
                    if (n) {
                        e = e ? e.slice() : [];
                        for (var o = n, a = t; o;) o.parent = a, o.updateTransform(), e.push(o), a = o, o = o.clipPath
                    }
                    if (t.isGroup) {
                        for (var r = t._children, s = 0; s < r.length; s++) {
                            var l = r[s];
                            t.__dirty && (l.__dirty = !0), this._updateAndAddDisplayable(l, e, i)
                        }
                        t.__dirty = !1
                    } else t.__clipPaths = e, this._displayList[this._displayListLen++] = t
                }
            },
            addRoot: function (t) {
                t.__storage !== this && (t instanceof r && t.addChildrenToStorage(this), this.addToStorage(t), this._roots.push(t))
            },
            delRoot: function (t) {
                if (null == t) {
                    for (var e = 0; e < this._roots.length; e++) {
                        var i = this._roots[e];
                        i instanceof r && i.delChildrenFromStorage(this)
                    }
                    return this._roots = [], this._displayList = [], void (this._displayListLen = 0)
                }
                if (t instanceof Array)
                    for (var e = 0, n = t.length; e < n; e++) this.delRoot(t[e]);
                else {
                    var a = o.indexOf(this._roots, t);
                    a >= 0 && (this.delFromStorage(t), this._roots.splice(a, 1), t instanceof r && t.delChildrenFromStorage(this))
                }
            },
            addToStorage: function (t) {
                return t && (t.__storage = this, t.dirty(!1)), this
            },
            delFromStorage: function (t) {
                return t && (t.__storage = null), this
            },
            dispose: function () {
                this._renderList = this._roots = null
            },
            displayableSortFunc: n
        };
        var d = l;
        t.exports = d
    }, function (t, e, i) {
        var n = i(630),
            o = i(663),
            a = o.Dispatcher,
            r = i(713),
            s = i(712),
            l = function (t) {
                t = t || {}, this.stage = t.stage || {}, this.onframe = t.onframe || function () {
                }, this._clips = [], this._running = !1, this._time, this._pausedTime, this._pauseStart, this._paused = !1, a.call(this)
            };
        l.prototype = {
            constructor: l,
            addClip: function (t) {
                this._clips.push(t)
            },
            addAnimator: function (t) {
                t.animation = this;
                for (var e = t.getClips(), i = 0; i < e.length; i++) this.addClip(e[i])
            },
            removeClip: function (t) {
                var e = n.indexOf(this._clips, t);
                e >= 0 && this._clips.splice(e, 1)
            },
            removeAnimator: function (t) {
                for (var e = t.getClips(), i = 0; i < e.length; i++) this.removeClip(e[i]);
                t.animation = null
            },
            _update: function () {
                for (var t = (new Date).getTime() - this._pausedTime, e = t - this._time, i = this._clips, n = i.length, o = [], a = [], r = 0; r < n; r++) {
                    var s = i[r],
                        l = s.step(t, e);
                    l && (o.push(l), a.push(s))
                }
                for (var r = 0; r < n;) i[r]._needsRemove ? (i[r] = i[n - 1], i.pop(), n--) : r++;
                n = o.length;
                for (var r = 0; r < n; r++) a[r].fire(o[r]);
                this._time = t, this.onframe(e), this.trigger("frame", e), this.stage.update && this.stage.update()
            },
            _startLoop: function () {
                function t() {
                    e._running && (r(t), !e._paused && e._update())
                }

                var e = this;
                this._running = !0, r(t)
            },
            start: function () {
                this._time = (new Date).getTime(), this._pausedTime = 0, this._startLoop()
            },
            stop: function () {
                this._running = !1
            },
            pause: function () {
                this._paused || (this._pauseStart = (new Date).getTime(), this._paused = !0)
            },
            resume: function () {
                this._paused && (this._pausedTime += (new Date).getTime() - this._pauseStart, this._paused = !1)
            },
            clear: function () {
                this._clips = []
            },
            isFinished: function () {
                return !this._clips.length
            },
            animate: function (t, e) {
                e = e || {};
                var i = new s(t, e.loop, e.getter, e.setter);
                return this.addAnimator(i), i
            }
        }, n.mixin(l, a);
        var d = l;
        t.exports = d
    }, function (t, e, i) {
        function n(t) {
            this._target = t.target, this._life = t.life || 1e3, this._delay = t.delay || 0, this._initialized = !1, this.loop = null != t.loop && t.loop, this.gap = t.gap || 0, this.easing = t.easing || "Linear", this.onframe = t.onframe, this.ondestroy = t.ondestroy, this.onrestart = t.onrestart, this._pausedTime = 0, this._paused = !1
        }

        var o = i(884);
        n.prototype = {
            constructor: n,
            step: function (t, e) {
                if (this._initialized || (this._startTime = t + this._delay, this._initialized = !0), this._paused) return void (this._pausedTime += e);
                var i = (t - this._startTime - this._pausedTime) / this._life;
                if (!(i < 0)) {
                    i = Math.min(i, 1);
                    var n = this.easing,
                        a = "string" == typeof n ? o[n] : n,
                        r = "function" == typeof a ? a(i) : i;
                    return this.fire("frame", r), 1 === i ? this.loop ? (this.restart(t), "restart") : (this._needsRemove = !0, "destroy") : null
                }
            },
            restart: function (t) {
                var e = (t - this._startTime - this._pausedTime) % this._life;
                this._startTime = t - e + this.gap, this._pausedTime = 0, this._needsRemove = !1
            },
            fire: function (t, e) {
                t = "on" + t, this[t] && this[t](this._target, e)
            },
            pause: function () {
                this._paused = !0
            },
            resume: function () {
                this._paused = !1
            }
        };
        var a = n;
        t.exports = a
    }, function (t, e) {
        var i = {
                linear: function (t) {
                    return t
                },
                quadraticIn: function (t) {
                    return t * t
                },
                quadraticOut: function (t) {
                    return t * (2 - t)
                },
                quadraticInOut: function (t) {
                    return (t *= 2) < 1 ? .5 * t * t : -.5 * (--t * (t - 2) - 1)
                },
                cubicIn: function (t) {
                    return t * t * t
                },
                cubicOut: function (t) {
                    return --t * t * t + 1
                },
                cubicInOut: function (t) {
                    return (t *= 2) < 1 ? .5 * t * t * t : .5 * ((t -= 2) * t * t + 2)
                },
                quarticIn: function (t) {
                    return t * t * t * t
                },
                quarticOut: function (t) {
                    return 1 - --t * t * t * t
                },
                quarticInOut: function (t) {
                    return (t *= 2) < 1 ? .5 * t * t * t * t : -.5 * ((t -= 2) * t * t * t - 2)
                },
                quinticIn: function (t) {
                    return t * t * t * t * t
                },
                quinticOut: function (t) {
                    return --t * t * t * t * t + 1
                },
                quinticInOut: function (t) {
                    return (t *= 2) < 1 ? .5 * t * t * t * t * t : .5 * ((t -= 2) * t * t * t * t + 2)
                },
                sinusoidalIn: function (t) {
                    return 1 - Math.cos(t * Math.PI / 2)
                },
                sinusoidalOut: function (t) {
                    return Math.sin(t * Math.PI / 2)
                },
                sinusoidalInOut: function (t) {
                    return .5 * (1 - Math.cos(Math.PI * t))
                },
                exponentialIn: function (t) {
                    return 0 === t ? 0 : Math.pow(1024, t - 1)
                },
                exponentialOut: function (t) {
                    return 1 === t ? 1 : 1 - Math.pow(2, -10 * t)
                },
                exponentialInOut: function (t) {
                    return 0 === t ? 0 : 1 === t ? 1 : (t *= 2) < 1 ? .5 * Math.pow(1024, t - 1) : .5 * (2 - Math.pow(2, -10 * (t - 1)))
                },
                circularIn: function (t) {
                    return 1 - Math.sqrt(1 - t * t)
                },
                circularOut: function (t) {
                    return Math.sqrt(1 - --t * t)
                },
                circularInOut: function (t) {
                    return (t *= 2) < 1 ? -.5 * (Math.sqrt(1 - t * t) - 1) : .5 * (Math.sqrt(1 - (t -= 2) * t) + 1)
                },
                elasticIn: function (t) {
                    var e, i = .1;
                    return 0 === t ? 0 : 1 === t ? 1 : (!i || i < 1 ? (i = 1, e = .1) : e = .4 * Math.asin(1 / i) / (2 * Math.PI), -i * Math.pow(2, 10 * (t -= 1)) * Math.sin((t - e) * (2 * Math.PI) / .4))
                },
                elasticOut: function (t) {
                    var e, i = .1;
                    return 0 === t ? 0 : 1 === t ? 1 : (!i || i < 1 ? (i = 1, e = .1) : e = .4 * Math.asin(1 / i) / (2 * Math.PI), i * Math.pow(2, -10 * t) * Math.sin((t - e) * (2 * Math.PI) / .4) + 1)
                },
                elasticInOut: function (t) {
                    var e, i = .1;
                    return 0 === t ? 0 : 1 === t ? 1 : (!i || i < 1 ? (i = 1, e = .1) : e = .4 * Math.asin(1 / i) / (2 * Math.PI), (t *= 2) < 1 ? i * Math.pow(2, 10 * (t -= 1)) * Math.sin((t - e) * (2 * Math.PI) / .4) * -.5 : i * Math.pow(2, -10 * (t -= 1)) * Math.sin((t - e) * (2 * Math.PI) / .4) * .5 + 1)
                },
                backIn: function (t) {
                    var e = 1.70158;
                    return t * t * ((e + 1) * t - e)
                },
                backOut: function (t) {
                    var e = 1.70158;
                    return --t * t * ((e + 1) * t + e) + 1
                },
                backInOut: function (t) {
                    var e = 2.5949095;
                    return (t *= 2) < 1 ? t * t * ((e + 1) * t - e) * .5 : .5 * ((t -= 2) * t * ((e + 1) * t + e) + 2)
                },
                bounceIn: function (t) {
                    return 1 - i.bounceOut(1 - t)
                },
                bounceOut: function (t) {
                    return t < 1 / 2.75 ? 7.5625 * t * t : t < 2 / 2.75 ? 7.5625 * (t -= 1.5 / 2.75) * t + .75 : t < 2.5 / 2.75 ? 7.5625 * (t -= 2.25 / 2.75) * t + .9375 : 7.5625 * (t -= 2.625 / 2.75) * t + .984375
                },
                bounceInOut: function (t) {
                    return t < .5 ? .5 * i.bounceIn(2 * t) : .5 * i.bounceOut(2 * t - 1) + .5
                }
            },
            n = i;
        t.exports = n
    }, function (t, e, i) {
        function n(t, e, i, n, o, s, l, d, u) {
            if (0 === l) return !1;
            var c = l;
            d -= t, u -= e;
            var h = Math.sqrt(d * d + u * u);
            if (h - c > i || h + c < i) return !1;
            if (Math.abs(n - o) % r < 1e-4) return !0;
            if (s) {
                var f = n;
                n = a(o), o = a(f)
            } else n = a(n), o = a(o);
            n > o && (o += r);
            var p = Math.atan2(u, d);
            return p < 0 && (p += r), p >= n && p <= o || p + r >= n && p + r <= o
        }

        var o = i(714),
            a = o.normalizeRadian,
            r = 2 * Math.PI;
        e.containStroke = n
    }, function (t, e, i) {
        function n(t, e, i, n, a, r, s, l, d, u, c) {
            if (0 === d) return !1;
            var h = d;
            return !(c > e + h && c > n + h && c > r + h && c > l + h || c < e - h && c < n - h && c < r - h && c < l - h || u > t + h && u > i + h && u > a + h && u > s + h || u < t - h && u < i - h && u < a - h && u < s - h) && o.cubicProjectPoint(t, e, i, n, a, r, s, l, u, c, null) <= h / 2
        }

        var o = i(648);
        e.containStroke = n
    }, function (t, e) {
        function i(t, e, i, n, o, a, r) {
            if (0 === o) return !1;
            var s = o,
                l = 0,
                d = t;
            if (r > e + s && r > n + s || r < e - s && r < n - s || a > t + s && a > i + s || a < t - s && a < i - s) return !1;
            if (t === i) return Math.abs(a - t) <= s / 2;
            l = (e - n) / (t - i), d = (t * n - i * e) / (t - i);
            var u = l * a - r + d;
            return u * u / (l * l + 1) <= s / 2 * s / 2
        }

        e.containStroke = i
    }, function (t, e, i) {
        function n(t, e) {
            return Math.abs(t - e) < w
        }

        function o() {
            var t = C[0];
            C[0] = C[1], C[1] = t
        }

        function a(t, e, i, n, a, r, s, l, d, u) {
            if (u > e && u > n && u > r && u > l || u < e && u < n && u < r && u < l) return 0;
            var c = _.cubicRootAt(e, n, r, l, u, S);
            if (0 === c) return 0;
            for (var h, f, p = 0, g = -1, v = 0; v < c; v++) {
                var m = S[v],
                    y = 0 === m || 1 === m ? .5 : 1;
                _.cubicAt(t, i, a, s, m) < d || (g < 0 && (g = _.cubicExtrema(e, n, r, l, C), C[1] < C[0] && g > 1 && o(), h = _.cubicAt(e, n, r, l, C[0]), g > 1 && (f = _.cubicAt(e, n, r, l, C[1]))), 2 === g ? m < C[0] ? p += h < e ? y : -y : m < C[1] ? p += f < h ? y : -y : p += l < f ? y : -y : m < C[0] ? p += h < e ? y : -y : p += l < h ? y : -y)
            }
            return p
        }

        function r(t, e, i, n, o, a, r, s) {
            if (s > e && s > n && s > a || s < e && s < n && s < a) return 0;
            var l = _.quadraticRootAt(e, n, a, s, S);
            if (0 === l) return 0;
            var d = _.quadraticExtremum(e, n, a);
            if (d >= 0 && d <= 1) {
                for (var u = 0, c = _.quadraticAt(e, n, a, d), h = 0; h < l; h++) {
                    var f = 0 === S[h] || 1 === S[h] ? .5 : 1,
                        p = _.quadraticAt(t, i, o, S[h]);
                    p < r || (S[h] < d ? u += c < e ? f : -f : u += a < c ? f : -f)
                }
                return u
            }
            var f = 0 === S[0] || 1 === S[0] ? .5 : 1,
                p = _.quadraticAt(t, i, o, S[0]);
            return p < r ? 0 : a < e ? f : -f
        }

        function s(t, e, i, n, o, a, r, s) {
            if ((s -= e) > i || s < -i) return 0;
            var l = Math.sqrt(i * i - s * s);
            S[0] = -l, S[1] = l;
            var d = Math.abs(n - o);
            if (d < 1e-4) return 0;
            if (d % b < 1e-4) {
                n = 0, o = b;
                var u = a ? 1 : -1;
                return r >= S[0] + t && r <= S[1] + t ? u : 0
            }
            if (a) {
                var l = n;
                n = m(o), o = m(l)
            } else n = m(n), o = m(o);
            n > o && (o += b);
            for (var c = 0, h = 0; h < 2; h++) {
                var f = S[h];
                if (f + t > r) {
                    var p = Math.atan2(s, f),
                        u = a ? 1 : -1;
                    p < 0 && (p = b + p), (p >= n && p <= o || p + b >= n && p + b <= o) && (p > Math.PI / 2 && p < 1.5 * Math.PI && (u = -u), c += u)
                }
            }
            return c
        }

        function l(t, e, i, o, l) {
            for (var d = 0, u = 0, c = 0, v = 0, m = 0, _ = 0; _ < t.length;) {
                var b = t[_++];
                switch (b === x.M && _ > 1 && (i || (d += y(u, c, v, m, o, l))), 1 === _ && (u = t[_], c = t[_ + 1], v = u, m = c), b) {
                    case x.M:
                        v = t[_++], m = t[_++], u = v, c = m;
                        break;
                    case x.L:
                        if (i) {
                            if (h.containStroke(u, c, t[_], t[_ + 1], e, o, l)) return !0
                        } else d += y(u, c, t[_], t[_ + 1], o, l) || 0;
                        u = t[_++], c = t[_++];
                        break;
                    case x.C:
                        if (i) {
                            if (f.containStroke(u, c, t[_++], t[_++], t[_++], t[_++], t[_], t[_ + 1], e, o, l)) return !0
                        } else d += a(u, c, t[_++], t[_++], t[_++], t[_++], t[_], t[_ + 1], o, l) || 0;
                        u = t[_++], c = t[_++];
                        break;
                    case x.Q:
                        if (i) {
                            if (p.containStroke(u, c, t[_++], t[_++], t[_], t[_ + 1], e, o, l)) return !0
                        } else d += r(u, c, t[_++], t[_++], t[_], t[_ + 1], o, l) || 0;
                        u = t[_++], c = t[_++];
                        break;
                    case x.A:
                        var w = t[_++],
                            S = t[_++],
                            C = t[_++],
                            k = t[_++],
                            I = t[_++],
                            T = t[_++];
                        _ += 1;
                        var D = 1 - t[_++],
                            M = Math.cos(I) * C + w,
                            A = Math.sin(I) * k + S;
                        _ > 1 ? d += y(u, c, M, A, o, l) : (v = M, m = A);
                        var L = (o - w) * k / C + w;
                        if (i) {
                            if (g.containStroke(w, S, k, I, I + T, D, e, L, l)) return !0
                        } else d += s(w, S, k, I, I + T, D, L, l);
                        u = Math.cos(I + T) * C + w, c = Math.sin(I + T) * k + S;
                        break;
                    case x.R:
                        v = u = t[_++], m = c = t[_++];
                        var P = t[_++],
                            O = t[_++],
                            M = v + P,
                            A = m + O;
                        if (i) {
                            if (h.containStroke(v, m, M, m, e, o, l) || h.containStroke(M, m, M, A, e, o, l) || h.containStroke(M, A, v, A, e, o, l) || h.containStroke(v, A, v, m, e, o, l)) return !0
                        } else d += y(M, m, M, A, o, l), d += y(v, A, v, m, o, l);
                        break;
                    case x.Z:
                        if (i) {
                            if (h.containStroke(u, c, v, m, e, o, l)) return !0
                        } else d += y(u, c, v, m, o, l);
                        u = v, c = m
                }
            }
            return i || n(c, m) || (d += y(u, c, v, m, o, l) || 0), 0 !== d
        }

        function d(t, e, i) {
            return l(t, 0, !1, e, i)
        }

        function u(t, e, i, n) {
            return l(t, e, !0, i, n)
        }

        var c = i(662),
            h = i(887),
            f = i(886),
            p = i(890),
            g = i(885),
            v = i(714),
            m = v.normalizeRadian,
            _ = i(648),
            y = i(715),
            x = c.CMD,
            b = 2 * Math.PI,
            w = 1e-4,
            S = [-1, -1, -1],
            C = [-1, -1];
        e.contain = d, e.containStroke = u
    }, function (t, e, i) {
        function n(t, e) {
            return Math.abs(t - e) < r
        }

        function o(t, e, i) {
            var o = 0,
                r = t[0];
            if (!r) return !1;
            for (var s = 1; s < t.length; s++) {
                var l = t[s];
                o += a(r[0], r[1], l[0], l[1], e, i), r = l
            }
            var d = t[0];
            return n(r[0], d[0]) && n(r[1], d[1]) || (o += a(r[0], r[1], d[0], d[1], e, i)), 0 !== o
        }

        var a = i(715),
            r = 1e-8;
        e.contain = o
    }, function (t, e, i) {
        function n(t, e, i, n, o, r, s, l, d) {
            if (0 === s) return !1;
            var u = s;
            return !(d > e + u && d > n + u && d > r + u || d < e - u && d < n - u && d < r - u || l > t + u && l > i + u && l > o + u || l < t - u && l < i - u && l < o - u) && a(t, e, i, n, o, r, l, d, null) <= u / 2
        }

        var o = i(648),
            a = o.quadraticProjectPoint;
        e.containStroke = n
    }, function (t, e, i) {
        function n(t) {
            var e = t[1][0] - t[0][0],
                i = t[1][1] - t[0][1];
            return Math.sqrt(e * e + i * i)
        }

        function o(t) {
            return [(t[0][0] + t[1][0]) / 2, (t[0][1] + t[1][1]) / 2]
        }

        var a = i(663),
            r = function () {
                this._track = []
            };
        r.prototype = {
            constructor: r,
            recognize: function (t, e, i) {
                return this._doTrack(t, e, i), this._recognize(t)
            },
            clear: function () {
                return this._track.length = 0, this
            },
            _doTrack: function (t, e, i) {
                var n = t.touches;
                if (n) {
                    for (var o = {
                        points: [],
                        touches: [],
                        target: e,
                        event: t
                    }, r = 0, s = n.length; r < s; r++) {
                        var l = n[r],
                            d = a.clientToLocal(i, l, {});
                        o.points.push([d.zrX, d.zrY]), o.touches.push(l)
                    }
                    this._track.push(o)
                }
            },
            _recognize: function (t) {
                for (var e in s)
                    if (s.hasOwnProperty(e)) {
                        var i = s[e](this._track, t);
                        if (i) return i
                    }
            }
        };
        var s = {
                pinch: function (t, e) {
                    var i = t.length;
                    if (i) {
                        var a = (t[i - 1] || {}).points,
                            r = (t[i - 2] || {}).points || a;
                        if (r && r.length > 1 && a && a.length > 1) {
                            var s = n(a) / n(r);
                            !isFinite(s) && (s = 1), e.pinchScale = s;
                            var l = o(a);
                            return e.pinchX = l[0], e.pinchY = l[1], {
                                type: "pinch",
                                target: t[0].target,
                                event: e
                            }
                        }
                    }
                }
            },
            l = r;
        t.exports = l
    }, function (t, e, i) {
        function n(t, e, i, n, a) {
            return o(h, e, n, a, !0) && o(t, i, h[0], h[1])
        }

        function o(t, e, i, n, o) {
            if (e.getBoundingClientRect && l.domSupported && !s(e)) {
                var d = e[c] || (e[c] = {}),
                    u = a(e, d),
                    h = r(u, d, o);
                if (h) return h(t, i, n), !0
            }
            return !1
        }

        function a(t, e) {
            var i = e.markers;
            if (i) return i;
            i = e.markers = [];
            for (var n = ["left", "right"], o = ["top", "bottom"], a = 0; a < 4; a++) {
                var r = document.createElement("div"),
                    s = r.style,
                    l = a % 2,
                    d = (a >> 1) % 2;
                s.cssText = ["position: absolute", "visibility: hidden", "padding: 0", "margin: 0", "border-width: 0", "user-select: none", "width:0", "height:0", n[l] + ":0", o[d] + ":0", n[1 - l] + ":auto", o[1 - d] + ":auto", ""].join("!important;"), t.appendChild(r), i.push(r)
            }
            return i
        }

        function r(t, e, i) {
            for (var n = i ? "invTrans" : "trans", o = e[n], a = e.srcCoords, r = !0, s = [], l = [], d = 0; d < 4; d++) {
                var c = t[d].getBoundingClientRect(),
                    h = 2 * d,
                    f = c.left,
                    p = c.top;
                s.push(f, p), r = r && a && f === a[h] && p === a[h + 1], l.push(t[d].offsetLeft, t[d].offsetTop)
            }
            return r && o ? o : (e.srcCoords = s, e[n] = i ? u(l, s) : u(s, l))
        }

        function s(t) {
            return "CANVAS" === t.nodeName.toUpperCase()
        }

        var l = i(637),
            d = i(893),
            u = d.buildTransformer,
            c = "___zrEVENTSAVED",
            h = [];
        e.transformLocalCoord = n, e.transformCoordWithViewport = o, e.isCanvasEl = s
    }, function (t, e) {
        function i(t, e, n, a, r, s) {
            var l = a + "-" + r,
                d = t.length;
            if (s.hasOwnProperty(l)) return s[l];
            if (1 === e) {
                var u = Math.round(Math.log((1 << d) - 1 & ~r) / o);
                return t[n][u]
            }
            for (var c = a | 1 << n, h = n + 1; a & 1 << h;) h++;
            for (var f = 0, p = 0, g = 0; p < d; p++) {
                var v = 1 << p;
                v & r || (f += (g % 2 ? -1 : 1) * t[n][p] * i(t, e - 1, h, c, r | v, s), g++)
            }
            return s[l] = f, f
        }

        function n(t, e) {
            var n = [
                    [t[0], t[1], 1, 0, 0, 0, -e[0] * t[0], -e[0] * t[1]],
                    [0, 0, 0, t[0], t[1], 1, -e[1] * t[0], -e[1] * t[1]],
                    [t[2], t[3], 1, 0, 0, 0, -e[2] * t[2], -e[2] * t[3]],
                    [0, 0, 0, t[2], t[3], 1, -e[3] * t[2], -e[3] * t[3]],
                    [t[4], t[5], 1, 0, 0, 0, -e[4] * t[4], -e[4] * t[5]],
                    [0, 0, 0, t[4], t[5], 1, -e[5] * t[4], -e[5] * t[5]],
                    [t[6], t[7], 1, 0, 0, 0, -e[6] * t[6], -e[6] * t[7]],
                    [0, 0, 0, t[6], t[7], 1, -e[7] * t[6], -e[7] * t[7]]
                ],
                o = {},
                a = i(n, 8, 0, 0, 0, o);
            if (0 !== a) {
                for (var r = [], s = 0; s < 8; s++)
                    for (var l = 0; l < 8; l++) null == r[l] && (r[l] = 0), r[l] += ((s + l) % 2 ? -1 : 1) * i(n, 7, 0 === s ? 1 : 0, 1 << s, 1 << l, o) / a * e[s];
                return function (t, e, i) {
                    var n = e * r[6] + i * r[7] + 1;
                    t[0] = (e * r[0] + i * r[1] + r[2]) / n, t[1] = (e * r[3] + i * r[4] + r[5]) / n
                }
            }
        }

        var o = Math.log(2);
        e.buildTransformer = n
    }, function (t, e, i) {
        function n(t) {
            return "mousewheel" === t && C.browser.firefox ? "DOMMouseScroll" : t
        }

        function o(t) {
            var e = t.pointerType;
            return "pen" === e || "touch" === e
        }

        function a(t) {
            t.touching = !0, null != t.touchTimer && (clearTimeout(t.touchTimer), t.touchTimer = null), t.touchTimer = setTimeout(function () {
                t.touching = !1, t.touchTimer = null
            }, 700)
        }

        function r(t) {
            t && (t.zrByTouch = !0)
        }

        function s(t, e) {
            return x(t.dom, new d(t, e), !0)
        }

        function l(t, e) {
            for (var i = e, n = !1; i && 9 !== i.nodeType && !(n = i.domBelongToZr || i !== e && i === t.painterRoot);) i = i.parentNode;
            return n
        }

        function d(t, e) {
            this.type = e.type, this.target = this.currentTarget = t.dom, this.pointerType = e.pointerType, this.clientX = e.clientX, this.clientY = e.clientY
        }

        function u(t, e) {
            var i = e.domHandlers;
            C.pointerEventsSupported ? w.each(I.pointer, function (n) {
                h(e, n, function (e) {
                    i[n].call(t, e)
                })
            }) : (C.touchEventsSupported && w.each(I.touch, function (n) {
                h(e, n, function (o) {
                    i[n].call(t, o), a(e)
                })
            }), w.each(I.mouse, function (n) {
                h(e, n, function (o) {
                    o = b(o), e.touching || i[n].call(t, o)
                })
            }))
        }

        function c(t, e) {
            function i(i) {
                function n(n) {
                    n = b(n), l(t, n.target) || (n = s(t, n), e.domHandlers[i].call(t, n))
                }

                h(e, i, n, {
                    capture: !0
                })
            }

            C.pointerEventsSupported ? w.each(T.pointer, i) : C.touchEventsSupported || w.each(T.mouse, i)
        }

        function h(t, e, i, o) {
            t.mounted[e] = i, t.listenerOpts[e] = o, _(t.domTarget, n(e), i, o)
        }

        function f(t) {
            var e = t.mounted;
            for (var i in e) e.hasOwnProperty(i) && y(t.domTarget, n(i), e[i], t.listenerOpts[i]);
            t.mounted = {}
        }

        function p(t, e) {
            if (t._mayPointerCapture = null, k && t._pointerCapturing ^ e) {
                t._pointerCapturing = e;
                var i = t._globalHandlerScope;
                e ? c(t, i) : f(i)
            }
        }

        function g(t, e) {
            this.domTarget = t, this.domHandlers = e, this.mounted = {}, this.listenerOpts = {}, this.touchTimer = null, this.touching = !1
        }

        function v(t, e) {
            S.call(this), this.dom = t, this.painterRoot = e, this._localHandlerScope = new g(t, M), k && (this._globalHandlerScope = new g(document, A)), this._pointerCapturing = !1, this._mayPointerCapture = null, u(this, this._localHandlerScope)
        }

        var m = i(663),
            _ = m.addEventListener,
            y = m.removeEventListener,
            x = m.normalizeEvent,
            b = m.getNativeEvent,
            w = i(630),
            S = i(658),
            C = i(637),
            k = C.domSupported,
            I = function () {
                var t = ["click", "dblclick", "mousewheel", "mouseout", "mouseup", "mousedown", "mousemove", "contextmenu"],
                    e = {
                        pointerdown: 1,
                        pointerup: 1,
                        pointermove: 1,
                        pointerout: 1
                    };
                return {
                    mouse: t,
                    touch: ["touchstart", "touchend", "touchmove"],
                    pointer: w.map(t, function (t) {
                        var i = t.replace("mouse", "pointer");
                        return e.hasOwnProperty(i) ? i : t
                    })
                }
            }(),
            T = {
                mouse: ["mousemove", "mouseup"],
                pointer: ["pointermove", "pointerup"]
            },
            D = d.prototype;
        D.stopPropagation = D.stopImmediatePropagation = D.preventDefault = w.noop;
        var M = {
            mousedown: function (t) {
                t = x(this.dom, t), this._mayPointerCapture = [t.zrX, t.zrY], this.trigger("mousedown", t)
            },
            mousemove: function (t) {
                t = x(this.dom, t);
                var e = this._mayPointerCapture;
                !e || t.zrX === e[0] && t.zrY === e[1] || p(this, !0), this.trigger("mousemove", t)
            },
            mouseup: function (t) {
                t = x(this.dom, t), p(this, !1), this.trigger("mouseup", t)
            },
            mouseout: function (t) {
                t = x(this.dom, t), this._pointerCapturing && (t.zrEventControl = "no_globalout");
                var e = t.toElement || t.relatedTarget;
                t.zrIsToLocalDOM = l(this, e), this.trigger("mouseout", t)
            },
            touchstart: function (t) {
                t = x(this.dom, t), r(t), this._lastTouchMoment = new Date, this.handler.processGesture(t, "start"), M.mousemove.call(this, t), M.mousedown.call(this, t)
            },
            touchmove: function (t) {
                t = x(this.dom, t), r(t), this.handler.processGesture(t, "change"), M.mousemove.call(this, t)
            },
            touchend: function (t) {
                t = x(this.dom, t), r(t), this.handler.processGesture(t, "end"), M.mouseup.call(this, t), +new Date - this._lastTouchMoment < 300 && M.click.call(this, t)
            },
            pointerdown: function (t) {
                M.mousedown.call(this, t)
            },
            pointermove: function (t) {
                o(t) || M.mousemove.call(this, t)
            },
            pointerup: function (t) {
                M.mouseup.call(this, t)
            },
            pointerout: function (t) {
                o(t) || M.mouseout.call(this, t)
            }
        };
        w.each(["click", "mousewheel", "dblclick", "contextmenu"], function (t) {
            M[t] = function (e) {
                e = x(this.dom, e), this.trigger(t, e)
            }
        });
        var A = {
                pointermove: function (t) {
                    o(t) || A.mousemove.call(this, t)
                },
                pointerup: function (t) {
                    A.mouseup.call(this, t)
                },
                mousemove: function (t) {
                    this.trigger("mousemove", t)
                },
                mouseup: function (t) {
                    var e = this._pointerCapturing;
                    p(this, !1), this.trigger("mouseup", t), e && (t.zrEventControl = "only_globalout", this.trigger("mouseout", t))
                }
            },
            L = v.prototype;
        L.dispose = function () {
            f(this._localHandlerScope), k && f(this._globalHandlerScope)
        }, L.setCursor = function (t) {
            this.dom.style && (this.dom.style.cursor = t || "default")
        }, w.mixin(v, S);
        var P = v;
        t.exports = P
    }, function (t, e, i) {
        var n = i(633),
            o = n.extend({
                type: "compound",
                shape: {
                    paths: null
                },
                _updatePathDirty: function () {
                    for (var t = this.__dirtyPath, e = this.shape.paths, i = 0; i < e.length; i++) t = t || e[i].__dirtyPath;
                    this.__dirtyPath = t, this.__dirty = this.__dirty || t
                },
                beforeBrush: function () {
                    this._updatePathDirty();
                    for (var t = this.shape.paths || [], e = this.getGlobalScale(), i = 0; i < t.length; i++) t[i].path || t[i].createPathProxy(), t[i].path.setScale(e[0], e[1], t[i].segmentIgnoreThreshold)
                },
                buildPath: function (t, e) {
                    for (var i = e.paths || [], n = 0; n < i.length; n++) i[n].buildPath(t, i[n].shape, !0)
                },
                afterBrush: function () {
                    for (var t = this.shape.paths || [], e = 0; e < t.length; e++) t[e].__dirtyPath = !1
                },
                getBoundingRect: function () {
                    return this._updatePathDirty(), n.prototype.getBoundingRect.call(this)
                }
            });
        t.exports = o
    }, function (t, e, i) {
        function n(t) {
            r.call(this, t), this._displayables = [], this._temporaryDisplayables = [], this._cursor = 0, this.notClear = !0
        }

        var o = i(630),
            a = o.inherits,
            r = i(664),
            s = i(636);
        n.prototype.incremental = !0, n.prototype.clearDisplaybles = function () {
            this._displayables = [], this._temporaryDisplayables = [], this._cursor = 0, this.dirty(), this.notClear = !1
        }, n.prototype.addDisplayable = function (t, e) {
            e ? this._temporaryDisplayables.push(t) : this._displayables.push(t), this.dirty()
        }, n.prototype.addDisplayables = function (t, e) {
            e = e || !1;
            for (var i = 0; i < t.length; i++) this.addDisplayable(t[i], e)
        }, n.prototype.eachPendingDisplayable = function (t) {
            for (var e = this._cursor; e < this._displayables.length; e++) t && t(this._displayables[e]);
            for (var e = 0; e < this._temporaryDisplayables.length; e++) t && t(this._temporaryDisplayables[e])
        }, n.prototype.update = function () {
            this.updateTransform();
            for (var t = this._cursor; t < this._displayables.length; t++) {
                var e = this._displayables[t];
                e.parent = this, e.update(), e.parent = null
            }
            for (var t = 0; t < this._temporaryDisplayables.length; t++) {
                var e = this._temporaryDisplayables[t];
                e.parent = this, e.update(), e.parent = null
            }
        }, n.prototype.brush = function (t, e) {
            for (var i = this._cursor; i < this._displayables.length; i++) {
                var n = this._displayables[i];
                n.beforeBrush && n.beforeBrush(t), n.brush(t, i === this._cursor ? null : this._displayables[i - 1]), n.afterBrush && n.afterBrush(t)
            }
            this._cursor = i;
            for (var i = 0; i < this._temporaryDisplayables.length; i++) {
                var n = this._temporaryDisplayables[i];
                n.beforeBrush && n.beforeBrush(t), n.brush(t, 0 === i ? null : this._temporaryDisplayables[i - 1]), n.afterBrush && n.afterBrush(t)
            }
            this._temporaryDisplayables = [], this.notClear = !0
        };
        var l = [];
        n.prototype.getBoundingRect = function () {
            if (!this._rect) {
                for (var t = new s(1 / 0, 1 / 0, -1 / 0, -1 / 0), e = 0; e < this._displayables.length; e++) {
                    var i = this._displayables[e],
                        n = i.getBoundingRect().clone();
                    i.needLocalTransform() && n.applyTransform(i.getLocalTransform(l)), t.union(n)
                }
                this._rect = t
            }
            return this._rect
        }, n.prototype.contain = function (t, e) {
            var i = this.transformCoordToLocal(t, e);
            if (this.getBoundingRect().contain(i[0], i[1]))
                for (var n = 0; n < this._displayables.length; n++) {
                    var o = this._displayables[n];
                    if (o.contain(t, e)) return !0
                }
            return !1
        }, a(n, r);
        var d = n;
        t.exports = d
    }, function (t, e, i) {
        var n = i(630),
            o = i(692),
            a = function (t, e, i, n, a) {
                this.x = null == t ? .5 : t, this.y = null == e ? .5 : e, this.r = null == i ? .5 : i, this.type = "radial", this.global = a || !1, o.call(this, n)
            };
        a.prototype = {
            constructor: a
        }, n.inherits(a, o);
        var r = a;
        t.exports = r
    }, function (t, e, i) {
        function n(t) {
            return o.browser.ie && o.browser.version >= 11 ? function () {
                var e, i = this.__clipPaths,
                    n = this.style;
                if (i)
                    for (var o = 0; o < i.length; o++) {
                        var r = i[o],
                            s = r && r.shape,
                            l = r && r.type;
                        if (s && ("sector" === l && s.startAngle === s.endAngle || "rect" === l && (!s.width || !s.height))) {
                            for (var d = 0; d < a.length; d++) a[d][2] = n[a[d][0]], n[a[d][0]] = a[d][1];
                            e = !0;
                            break
                        }
                    }
                if (t.apply(this, arguments), e)
                    for (var d = 0; d < a.length; d++) n[a[d][0]] = a[d][2]
            } : t
        }

        var o = i(637),
            a = [
                ["shadowBlur", 0],
                ["shadowColor", "#000"],
                ["shadowOffsetX", 0],
                ["shadowOffsetY", 0]
            ];
        t.exports = n
    }, function (t, e, i) {
        function n(t, e, i, n) {
            var o, h, f, p, g = [],
                v = [],
                m = [],
                _ = [];
            if (n) {
                f = [1 / 0, 1 / 0], p = [-1 / 0, -1 / 0];
                for (var y = 0, x = t.length; y < x; y++) a(f, f, t[y]), r(p, p, t[y]);
                a(f, f, n[0]), r(p, p, n[1])
            }
            for (var y = 0, x = t.length; y < x; y++) {
                var b = t[y];
                if (i) o = t[y ? y - 1 : x - 1], h = t[(y + 1) % x];
                else {
                    if (0 === y || y === x - 1) {
                        g.push(u(t[y]));
                        continue
                    }
                    o = t[y - 1], h = t[y + 1]
                }
                c(v, h, o), s(v, v, e);
                var w = l(b, o),
                    S = l(b, h),
                    C = w + S;
                0 !== C && (w /= C, S /= C), s(m, v, -w), s(_, v, S);
                var k = d([], b, m),
                    I = d([], b, _);
                n && (r(k, k, f), a(k, k, p), r(I, I, f), a(I, I, p)), g.push(k), g.push(I)
            }
            return i && g.push(g.shift()), g
        }

        var o = i(635),
            a = o.min,
            r = o.max,
            s = o.scale,
            l = o.distance,
            d = o.add,
            u = o.clone,
            c = o.sub;
        t.exports = n
    }, function (t, e, i) {
        function n(t, e, i, n, o, a, r) {
            var s = .5 * (i - t),
                l = .5 * (n - e);
            return (2 * (e - i) + s + l) * r + (-3 * (e - i) - 2 * s - l) * a + s * o + e
        }

        function o(t, e) {
            for (var i = t.length, o = [], a = 0, s = 1; s < i; s++) a += r(t[s - 1], t[s]);
            var l = a / 2;
            l = l < i ? i : l;
            for (var s = 0; s < l; s++) {
                var d, u, c, h = s / (l - 1) * (e ? i : i - 1),
                    f = Math.floor(h),
                    p = h - f,
                    g = t[f % i];
                e ? (d = t[(f - 1 + i) % i], u = t[(f + 1) % i], c = t[(f + 2) % i]) : (d = t[0 === f ? f : f - 1], u = t[f > i - 2 ? i - 1 : f + 1], c = t[f > i - 3 ? i - 1 : f + 2]);
                var v = p * p,
                    m = p * v;
                o.push([n(d[0], g[0], u[0], c[0], p, v, m), n(d[1], g[1], u[1], c[1], p, v, m)])
            }
            return o
        }

        var a = i(635),
            r = a.distance;
        t.exports = o
    }, function (t, e, i) {
        var n = i(726),
            o = i(636),
            a = i(665),
            r = a.WILL_BE_RESTORED,
            s = new o,
            l = function () {
            };
        l.prototype = {
            constructor: l,
            drawRectText: function (t, e) {
                var i = this.style;
                e = i.textRect || e, this.__dirty && n.normalizeTextStyle(i, !0);
                var o = i.text;
                if (null != o && (o += ""), n.needDrawText(o, i)) {
                    t.save();
                    var a = this.transform;
                    i.transformText ? this.setTransform(t) : a && (s.copy(e), s.applyTransform(a), e = s), n.renderText(this, t, o, i, e, r), t.restore()
                }
            }
        };
        var d = l;
        t.exports = d
    }, function (t, e, i) {
        var n = i(633),
            o = n.extend({
                type: "arc",
                shape: {
                    cx: 0,
                    cy: 0,
                    r: 0,
                    startAngle: 0,
                    endAngle: 2 * Math.PI,
                    clockwise: !0
                },
                style: {
                    stroke: "#000",
                    fill: null
                },
                buildPath: function (t, e) {
                    var i = e.cx,
                        n = e.cy,
                        o = Math.max(e.r, 0),
                        a = e.startAngle,
                        r = e.endAngle,
                        s = e.clockwise,
                        l = Math.cos(a),
                        d = Math.sin(a);
                    t.moveTo(l * o + i, d * o + n), t.arc(i, n, o, a, r, !s)
                }
            });
        t.exports = o
    }, function (t, e, i) {
        function n(t, e, i) {
            var n = t.cpx2,
                o = t.cpy2;
            return null === n || null === o ? [(i ? h : u)(t.x1, t.cpx1, t.cpx2, t.x2, e), (i ? h : u)(t.y1, t.cpy1, t.cpy2, t.y2, e)] : [(i ? c : d)(t.x1, t.cpx1, t.x2, e), (i ? c : d)(t.y1, t.cpy1, t.y2, e)]
        }

        var o = i(633),
            a = i(635),
            r = i(648),
            s = r.quadraticSubdivide,
            l = r.cubicSubdivide,
            d = r.quadraticAt,
            u = r.cubicAt,
            c = r.quadraticDerivativeAt,
            h = r.cubicDerivativeAt,
            f = [],
            p = o.extend({
                type: "bezier-curve",
                shape: {
                    x1: 0,
                    y1: 0,
                    x2: 0,
                    y2: 0,
                    cpx1: 0,
                    cpy1: 0,
                    percent: 1
                },
                style: {
                    stroke: "#000",
                    fill: null
                },
                buildPath: function (t, e) {
                    var i = e.x1,
                        n = e.y1,
                        o = e.x2,
                        a = e.y2,
                        r = e.cpx1,
                        d = e.cpy1,
                        u = e.cpx2,
                        c = e.cpy2,
                        h = e.percent;
                    0 !== h && (t.moveTo(i, n), null == u || null == c ? (h < 1 && (s(i, r, o, h, f), r = f[1], o = f[2], s(n, d, a, h, f), d = f[1], a = f[2]), t.quadraticCurveTo(r, d, o, a)) : (h < 1 && (l(i, r, u, o, h, f), r = f[1], u = f[2], o = f[3], l(n, d, c, a, h, f), d = f[1], c = f[2], a = f[3]), t.bezierCurveTo(r, d, u, c, o, a)))
                },
                pointAt: function (t) {
                    return n(this.shape, t, !1)
                },
                tangentAt: function (t) {
                    var e = n(this.shape, t, !0);
                    return a.normalize(e, e)
                }
            });
        t.exports = p
    }, function (t, e, i) {
        var n = i(633),
            o = n.extend({
                type: "ellipse",
                shape: {
                    cx: 0,
                    cy: 0,
                    rx: 0,
                    ry: 0
                },
                buildPath: function (t, e) {
                    var i = .5522848,
                        n = e.cx,
                        o = e.cy,
                        a = e.rx,
                        r = e.ry,
                        s = a * i,
                        l = r * i;
                    t.moveTo(n - a, o), t.bezierCurveTo(n - a, o - l, n - s, o - r, n, o - r), t.bezierCurveTo(n + s, o - r, n + a, o - l, n + a, o), t.bezierCurveTo(n + a, o + l, n + s, o + r, n, o + r), t.bezierCurveTo(n - s, o + r, n - a, o + l, n - a, o), t.closePath()
                }
            });
        t.exports = o
    }, function (t, e, i) {
        var n = i(633),
            o = n.extend({
                type: "ring",
                shape: {
                    cx: 0,
                    cy: 0,
                    r: 0,
                    r0: 0
                },
                buildPath: function (t, e) {
                    var i = e.cx,
                        n = e.cy,
                        o = 2 * Math.PI;
                    t.moveTo(i + e.r, n), t.arc(i, n, e.r, 0, o, !1), t.moveTo(i + e.r0, n), t.arc(i, n, e.r0, 0, o, !0)
                }
            });
        t.exports = o
    }, function (t, e, i) {
        var n = i(633),
            o = i(898),
            a = n.extend({
                type: "sector",
                shape: {
                    cx: 0,
                    cy: 0,
                    r0: 0,
                    r: 0,
                    startAngle: 0,
                    endAngle: 2 * Math.PI,
                    clockwise: !0
                },
                brush: o(n.prototype.brush),
                buildPath: function (t, e) {
                    var i = e.cx,
                        n = e.cy,
                        o = Math.max(e.r0 || 0, 0),
                        a = Math.max(e.r, 0),
                        r = e.startAngle,
                        s = e.endAngle,
                        l = e.clockwise,
                        d = Math.cos(r),
                        u = Math.sin(r);
                    t.moveTo(d * o + i, u * o + n), t.lineTo(d * a + i, u * a + n), t.arc(i, n, a, r, s, !l), t.lineTo(Math.cos(s) * o + i, Math.sin(s) * o + n), 0 !== o && t.arc(i, n, o, s, r, l), t.closePath()
                }
            });
        t.exports = a
    }, function (t, e, i) {
        function n(t, e, i, n, a, r, s, l) {
            function c() {
                --f || r && r()
            }

            d(n) ? (r = a, a = n, n = 0) : u(a) ? (r = a, a = "linear", n = 0) : u(n) ? (r = n, n = 0) : u(i) ? (r = i, i = 500) : i || (i = 500), t.stopAnimation(), o(t, "", t, e, i, n, l);
            var h = t.animators.slice(),
                f = h.length;
            f || r && r();
            for (var p = 0; p < h.length; p++) h[p].done(c).start(a, s)
        }

        function o(t, e, i, n, r, s, l) {
            var d = {},
                u = 0;
            for (var f in n) n.hasOwnProperty(f) && (null != i[f] ? c(n[f]) && !h(n[f]) ? o(t, e ? e + "." + f : f, i[f], n[f], r, s, l) : (l ? (d[f] = i[f], a(t, e, f, n[f])) : d[f] = n[f], u++) : null == n[f] || l || a(t, e, f, n[f]));
            u > 0 && t.animate(e, !1).when(null == r ? 500 : r, d).delay(s || 0)
        }

        function a(t, e, i, n) {
            if (e) {
                var o = {};
                o[e] = {}, o[e][i] = n, t.attr(o)
            } else t.attr(i, n)
        }

        var r = i(712),
            s = i(719),
            l = i(630),
            d = l.isString,
            u = l.isFunction,
            c = l.isObject,
            h = l.isArrayLike,
            f = l.indexOf,
            p = function () {
                this.animators = []
            };
        p.prototype = {
            constructor: p,
            animate: function (t, e) {
                var i, n = !1,
                    o = this,
                    a = this.__zr;
                if (t) {
                    var l = t.split("."),
                        d = o;
                    n = "shape" === l[0];
                    for (var u = 0, c = l.length; u < c; u++) d && (d = d[l[u]]);
                    d && (i = d)
                } else i = o;
                if (!i) return void s('Property "' + t + '" is not existed in element ' + o.id);
                var h = o.animators,
                    p = new r(i, e);
                return p.during(function (t) {
                    o.dirty(n)
                }).done(function () {
                    h.splice(f(h, p), 1)
                }), h.push(p), a && a.animation.addAnimator(p), p
            },
            stopAnimation: function (t) {
                for (var e = this.animators, i = e.length, n = 0; n < i; n++) e[n].stop(t);
                return e.length = 0, this
            },
            animateTo: function (t, e, i, o, a, r) {
                n(this, t, e, i, o, a, r)
            },
            animateFrom: function (t, e, i, o, a, r) {
                n(this, t, e, i, o, a, r, !0)
            }
        };
        var g = p;
        t.exports = g
    }, function (t, e) {
        function i() {
            this.on("mousedown", this._dragStart, this), this.on("mousemove", this._drag, this), this.on("mouseup", this._dragEnd, this)
        }

        function n(t, e) {
            return {
                target: t,
                topTarget: e && e.topTarget
            }
        }

        i.prototype = {
            constructor: i,
            _dragStart: function (t) {
                for (var e = t.target; e && !e.draggable;) e = e.parent;
                e && (this._draggingTarget = e, e.dragging = !0, this._x = t.offsetX, this._y = t.offsetY, this.dispatchToElement(n(e, t), "dragstart", t.event))
            },
            _drag: function (t) {
                var e = this._draggingTarget;
                if (e) {
                    var i = t.offsetX,
                        o = t.offsetY,
                        a = i - this._x,
                        r = o - this._y;
                    this._x = i, this._y = o, e.drift(a, r, t), this.dispatchToElement(n(e, t), "drag", t.event);
                    var s = this.findHover(i, o, e).target,
                        l = this._dropTarget;
                    this._dropTarget = s, e !== s && (l && s !== l && this.dispatchToElement(n(l, t), "dragleave", t.event), s && s !== l && this.dispatchToElement(n(s, t), "dragenter", t.event))
                }
            },
            _dragEnd: function (t) {
                var e = this._draggingTarget;
                e && (e.dragging = !1), this.dispatchToElement(n(e, t), "dragend", t.event), this._dropTarget && this.dispatchToElement(n(this._dropTarget, t), "drop", t.event), this._draggingTarget = null, this._dropTarget = null
            }
        };
        var o = i;
        t.exports = o
    }, function (t, e, i) {
        function n(t) {
            for (A(t) && (t = (new DOMParser).parseFromString(t, "text/xml")), 9 === t.nodeType && (t = t.firstChild);
                 "svg" !== t.nodeName.toLowerCase() || 1 !== t.nodeType;) t = t.nextSibling;
            return t
        }

        function o() {
            this._defs = {}, this._root = null, this._isDefine = !1, this._isText = !1
        }

        function a(t, e) {
            for (var i = t.firstChild; i;) {
                if (1 === i.nodeType) {
                    var n = i.getAttribute("offset");
                    n = n.indexOf("%") > 0 ? parseInt(n, 10) / 100 : n ? parseFloat(n) : 0;
                    var o = i.getAttribute("stop-color") || "#000000";
                    e.addColorStop(n, o)
                }
                i = i.nextSibling
            }
        }

        function r(t, e) {
            t && t.__inheritedStyle && (e.__inheritedStyle || (e.__inheritedStyle = {}), P(e.__inheritedStyle, t.__inheritedStyle))
        }

        function s(t) {
            for (var e = O(t).split(E), i = [], n = 0; n < e.length; n += 2) {
                var o = parseFloat(e[n]),
                    a = parseFloat(e[n + 1]);
                i.push([o, a])
            }
            return i
        }

        function l(t, e, i, n) {
            var o = e.__inheritedStyle || {},
                a = "text" === e.type;
            if (1 === t.nodeType && (u(t, e), L(o, c(t)), !n))
                for (var r in B)
                    if (B.hasOwnProperty(r)) {
                        var s = t.getAttribute(r);
                        null != s && (o[B[r]] = s)
                    }
            var l = a ? "textFill" : "fill",
                h = a ? "textStroke" : "stroke";
            e.style = e.style || new k;
            var f = e.style;
            null != o.fill && f.set(l, d(o.fill, i)), null != o.stroke && f.set(h, d(o.stroke, i)), R(["lineWidth", "opacity", "fillOpacity", "strokeOpacity", "miterLimit", "fontSize"], function (t) {
                var e = "lineWidth" === t && a ? "textStrokeWidth" : t;
                null != o[t] && f.set(e, parseFloat(o[t]))
            }), o.textBaseline && "auto" !== o.textBaseline || (o.textBaseline = "alphabetic"), "alphabetic" === o.textBaseline && (o.textBaseline = "bottom"), "start" === o.textAlign && (o.textAlign = "left"), "end" === o.textAlign && (o.textAlign = "right"), R(["lineDashOffset", "lineCap", "lineJoin", "fontWeight", "fontFamily", "fontStyle", "textAlign", "textBaseline"], function (t) {
                null != o[t] && f.set(t, o[t])
            }), o.lineDash && (e.style.lineDash = O(o.lineDash).split(E)), f[h] && "none" !== f[h] && (e[h] = !0), e.__inheritedStyle = o
        }

        function d(t, e) {
            var i = e && t && t.match(F);
            return i ? e[O(i[1])] : t
        }

        function u(t, e) {
            var i = t.getAttribute("transform");
            if (i) {
                i = i.replace(/,/g, " ");
                var n = null,
                    o = [];
                i.replace(V, function (t, e, i) {
                    o.push(e, i)
                });
                for (var a = o.length - 1; a > 0; a -= 2) {
                    var r = o[a],
                        s = o[a - 1];
                    switch (n = n || I.create(), s) {
                        case "translate":
                            r = O(r).split(E), I.translate(n, n, [parseFloat(r[0]), parseFloat(r[1] || 0)]);
                            break;
                        case "scale":
                            r = O(r).split(E), I.scale(n, n, [parseFloat(r[0]), parseFloat(r[1] || r[0])]);
                            break;
                        case "rotate":
                            r = O(r).split(E), I.rotate(n, n, parseFloat(r[0]));
                            break;
                        case "skew":
                            r = O(r).split(E), console.warn("Skew transform is not supported yet");
                            break;
                        case "matrix":
                            var r = O(r).split(E);
                            n[0] = parseFloat(r[0]), n[1] = parseFloat(r[1]), n[2] = parseFloat(r[2]), n[3] = parseFloat(r[3]), n[4] = parseFloat(r[4]), n[5] = parseFloat(r[5])
                    }
                }
                e.setLocalTransform(n)
            }
        }

        function c(t) {
            var e = t.getAttribute("style"),
                i = {};
            if (!e) return i;
            var n = {};
            H.lastIndex = 0;
            for (var o; null != (o = H.exec(e));) n[o[1]] = o[2];
            for (var a in B) B.hasOwnProperty(a) && null != n[a] && (i[B[a]] = n[a]);
            return i
        }

        function h(t, e, i) {
            var n = e / t.width,
                o = i / t.height,
                a = Math.min(n, o);
            return {
                scale: [a, a],
                position: [-(t.x + t.width / 2) * a + e / 2, -(t.y + t.height / 2) * a + i / 2]
            }
        }

        function f(t, e) {
            return (new o).parse(t, e)
        }

        var p = i(656),
            g = i(693),
            v = i(722),
            m = i(727),
            _ = i(731),
            y = i(904),
            x = i(728),
            b = i(633),
            w = i(729),
            S = i(730),
            C = i(720),
            k = i(694),
            I = i(657),
            T = i(733),
            D = T.createFromString,
            M = i(630),
            A = M.isString,
            L = M.extend,
            P = M.defaults,
            O = M.trim,
            R = M.each,
            E = /[\s,]+/;
        o.prototype.parse = function (t, e) {
            e = e || {};
            var i = n(t);
            if (!i) throw new Error("Illegal svg");
            var o = new p;
            this._root = o;
            var a = i.getAttribute("viewBox") || "",
                r = parseFloat(i.getAttribute("width") || e.width),
                s = parseFloat(i.getAttribute("height") || e.height);
            isNaN(r) && (r = null), isNaN(s) && (s = null), l(i, o, null, !0);
            for (var d = i.firstChild; d;) this._parseNode(d, o), d = d.nextSibling;
            var u, c;
            if (a) {
                var f = O(a).split(E);
                f.length >= 4 && (u = {
                    x: parseFloat(f[0] || 0),
                    y: parseFloat(f[1] || 0),
                    width: parseFloat(f[2]),
                    height: parseFloat(f[3])
                })
            }
            if (u && null != r && null != s && (c = h(u, r, s), !e.ignoreViewBox)) {
                var g = o;
                o = new p, o.add(g), g.scale = c.scale.slice(), g.position = c.position.slice()
            }
            return e.ignoreRootClip || null == r || null == s || o.setClipPath(new _({
                shape: {
                    x: 0,
                    y: 0,
                    width: r,
                    height: s
                }
            })), {
                root: o,
                width: r,
                height: s,
                viewBoxRect: u,
                viewBoxTransform: c
            }
        }, o.prototype._parseNode = function (t, e) {
            var i = t.nodeName.toLowerCase();
            "defs" === i ? this._isDefine = !0 : "text" === i && (this._isText = !0);
            var n;
            if (this._isDefine) {
                var o = N[i];
                if (o) {
                    var a = o.call(this, t),
                        r = t.getAttribute("id");
                    r && (this._defs[r] = a)
                }
            } else {
                var o = z[i];
                o && (n = o.call(this, t, e), e.add(n))
            }
            for (var s = t.firstChild; s;) 1 === s.nodeType && this._parseNode(s, n), 3 === s.nodeType && this._isText && this._parseText(s, n), s = s.nextSibling;
            "defs" === i ? this._isDefine = !1 : "text" === i && (this._isText = !1)
        }, o.prototype._parseText = function (t, e) {
            if (1 === t.nodeType) {
                var i = t.getAttribute("dx") || 0,
                    n = t.getAttribute("dy") || 0;
                this._textX += parseFloat(i), this._textY += parseFloat(n)
            }
            var o = new v({
                style: {
                    text: t.textContent,
                    transformText: !0
                },
                position: [this._textX || 0, this._textY || 0]
            });
            r(e, o), l(t, o, this._defs);
            var a = o.style.fontSize;
            a && a < 9 && (o.style.fontSize = 9, o.scale = o.scale || [1, 1], o.scale[0] *= a / 9, o.scale[1] *= a / 9);
            var s = o.getBoundingRect();
            return this._textX += s.width, e.add(o), o
        };
        var z = {
                g: function (t, e) {
                    var i = new p;
                    return r(e, i), l(t, i, this._defs), i
                },
                rect: function (t, e) {
                    var i = new _;
                    return r(e, i), l(t, i, this._defs), i.setShape({
                        x: parseFloat(t.getAttribute("x") || 0),
                        y: parseFloat(t.getAttribute("y") || 0),
                        width: parseFloat(t.getAttribute("width") || 0),
                        height: parseFloat(t.getAttribute("height") || 0)
                    }), i
                },
                circle: function (t, e) {
                    var i = new m;
                    return r(e, i), l(t, i, this._defs), i.setShape({
                        cx: parseFloat(t.getAttribute("cx") || 0),
                        cy: parseFloat(t.getAttribute("cy") || 0),
                        r: parseFloat(t.getAttribute("r") || 0)
                    }), i
                },
                line: function (t, e) {
                    var i = new x;
                    return r(e, i), l(t, i, this._defs), i.setShape({
                        x1: parseFloat(t.getAttribute("x1") || 0),
                        y1: parseFloat(t.getAttribute("y1") || 0),
                        x2: parseFloat(t.getAttribute("x2") || 0),
                        y2: parseFloat(t.getAttribute("y2") || 0)
                    }), i
                },
                ellipse: function (t, e) {
                    var i = new y;
                    return r(e, i), l(t, i, this._defs), i.setShape({
                        cx: parseFloat(t.getAttribute("cx") || 0),
                        cy: parseFloat(t.getAttribute("cy") || 0),
                        rx: parseFloat(t.getAttribute("rx") || 0),
                        ry: parseFloat(t.getAttribute("ry") || 0)
                    }), i
                },
                polygon: function (t, e) {
                    var i = t.getAttribute("points");
                    i && (i = s(i));
                    var n = new w({
                        shape: {
                            points: i || []
                        }
                    });
                    return r(e, n), l(t, n, this._defs), n
                },
                polyline: function (t, e) {
                    var i = new b;
                    r(e, i), l(t, i, this._defs);
                    var n = t.getAttribute("points");
                    return n && (n = s(n)), new S({
                        shape: {
                            points: n || []
                        }
                    })
                },
                image: function (t, e) {
                    var i = new g;
                    return r(e, i), l(t, i, this._defs), i.setStyle({
                        image: t.getAttribute("xlink:href"),
                        x: t.getAttribute("x"),
                        y: t.getAttribute("y"),
                        width: t.getAttribute("width"),
                        height: t.getAttribute("height")
                    }), i
                },
                text: function (t, e) {
                    var i = t.getAttribute("x") || 0,
                        n = t.getAttribute("y") || 0,
                        o = t.getAttribute("dx") || 0,
                        a = t.getAttribute("dy") || 0;
                    this._textX = parseFloat(i) + parseFloat(o), this._textY = parseFloat(n) + parseFloat(a);
                    var s = new p;
                    return r(e, s), l(t, s, this._defs), s
                },
                tspan: function (t, e) {
                    var i = t.getAttribute("x"),
                        n = t.getAttribute("y");
                    null != i && (this._textX = parseFloat(i)), null != n && (this._textY = parseFloat(n));
                    var o = t.getAttribute("dx") || 0,
                        a = t.getAttribute("dy") || 0,
                        s = new p;
                    return r(e, s), l(t, s, this._defs), this._textX += o, this._textY += a, s
                },
                path: function (t, e) {
                    var i = t.getAttribute("d") || "",
                        n = D(i);
                    return r(e, n), l(t, n, this._defs), n
                }
            },
            N = {
                lineargradient: function (t) {
                    var e = parseInt(t.getAttribute("x1") || 0, 10),
                        i = parseInt(t.getAttribute("y1") || 0, 10),
                        n = parseInt(t.getAttribute("x2") || 10, 10),
                        o = parseInt(t.getAttribute("y2") || 0, 10),
                        r = new C(e, i, n, o);
                    return a(t, r), r
                },
                radialgradient: function (t) {
                }
            },
            B = {
                fill: "fill",
                stroke: "stroke",
                "stroke-width": "lineWidth",
                opacity: "opacity",
                "fill-opacity": "fillOpacity",
                "stroke-opacity": "strokeOpacity",
                "stroke-dasharray": "lineDash",
                "stroke-dashoffset": "lineDashOffset",
                "stroke-linecap": "lineCap",
                "stroke-linejoin": "lineJoin",
                "stroke-miterlimit": "miterLimit",
                "font-family": "fontFamily",
                "font-size": "fontSize",
                "font-style": "fontStyle",
                "font-weight": "fontWeight",
                "text-align": "textAlign",
                "alignment-baseline": "textBaseline"
            },
            F = /url\(\s*#(.*?)\)/,
            V = /(translate|scale|rotate|skewX|skewY|matrix)\(([\-\s0-9\.e,]*)\)/g,
            H = /([^\s:;]+)\s*:\s*([^:;]+)/g;
        e.parseXML = n, e.makeViewBoxTransform = h, e.parseSVG = f
    }, function (t, e, i) {
        function n(t, e) {
            var i, n, o, a, c, h, f = t.data,
                p = s.M,
                g = s.C,
                v = s.L,
                m = s.R,
                _ = s.A,
                y = s.Q;
            for (o = 0, a = 0; o < f.length;) {
                switch (i = f[o++], a = o, n = 0, i) {
                    case p:
                    case v:
                        n = 1;
                        break;
                    case g:
                        n = 3;
                        break;
                    case y:
                        n = 2;
                        break;
                    case _:
                        var x = e[4],
                            b = e[5],
                            w = d(e[0] * e[0] + e[1] * e[1]),
                            S = d(e[2] * e[2] + e[3] * e[3]),
                            C = u(-e[1] / S, e[0] / w);
                        f[o] *= w, f[o++] += x, f[o] *= S, f[o++] += b, f[o++] *= w, f[o++] *= S, f[o++] += C, f[o++] += C, o += 2, a = o;
                        break;
                    case m:
                        h[0] = f[o++], h[1] = f[o++], r(h, h, e), f[a++] = h[0], f[a++] = h[1], h[0] += f[o++], h[1] += f[o++], r(h, h, e), f[a++] = h[0], f[a++] = h[1]
                }
                for (c = 0; c < n; c++) {
                    var h = l[c];
                    h[0] = f[o++], h[1] = f[o++], r(h, h, e), f[a++] = h[0], f[a++] = h[1]
                }
            }
        }

        var o = i(662),
            a = i(635),
            r = a.applyTransform,
            s = o.CMD,
            l = [
                [],
                [],
                []
            ],
            d = Math.sqrt,
            u = Math.atan2;
        t.exports = n
    }]));
