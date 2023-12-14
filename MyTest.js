function (e) {
    "use strict";
    function t(e, t) {
        var n = (65535 & e) + (65535 & t),
        o = (e >> 16) + (t >> 16) + (n >> 16);
        return o << 16 | 65535 & n
    }
    function n(e, t) {
        return e << t | e >>> 32 - t
    }
    function o(e, o, r, i, a, s) {
        return t(n(t(t(o, e), t(i, s)), a), r)
    }
    function r(e, t, n, r, i, a, s) {
        return o(t & n | ~t & r, e, t, i, a, s)
    }
    function i(e, t, n, r, i, a, s) {
        return o(t & r | n & ~r, e, t, i, a, s)
    }
    function a(e, t, n, r, i, a, s) {
        return o(t ^ n ^ r, e, t, i, a, s)
    }
    function s(e, t, n, r, i, a, s) {
        return o(n ^ (t | ~r), e, t, i, a, s)
    }
    function c(e, n) {
        e[n >> 5] |= 128 << n % 32,
        e[(n + 64 >>> 9 << 4) + 14] = n;
        var o, c, u, d, f, l = 1732584193,
        g = -271733879,
        p = -1732584194,
        _ = 271733878;
        for (o = 0; o < e.length; o += 16) c = l,
        u = g,
        d = p,
        f = _,
        l = r(l, g, p, _, e[o], 7, -680876936),
        _ = r(_, l, g, p, e[o + 1], 12, -389564586),
        p = r(p, _, l, g, e[o + 2], 17, 606105819),
        g = r(g, p, _, l, e[o + 3], 22, -1044525330),
        l = r(l, g, p, _, e[o + 4], 7, -176418897),
        _ = r(_, l, g, p, e[o + 5], 12, 1200080426),
        p = r(p, _, l, g, e[o + 6], 17, -1473231341),
        g = r(g, p, _, l, e[o + 7], 22, -45705983),
        l = r(l, g, p, _, e[o + 8], 7, 1770035416),
        _ = r(_, l, g, p, e[o + 9], 12, -1958414417),
        p = r(p, _, l, g, e[o + 10], 17, -42063),
        g = r(g, p, _, l, e[o + 11], 22, -1990404162),
        l = r(l, g, p, _, e[o + 12], 7, 1804603682),
        _ = r(_, l, g, p, e[o + 13], 12, -40341101),
        p = r(p, _, l, g, e[o + 14], 17, -1502002290),
        g = r(g, p, _, l, e[o + 15], 22, 1236535329),
        l = i(l, g, p, _, e[o + 1], 5, -165796510),
        _ = i(_, l, g, p, e[o + 6], 9, -1069501632),
        p = i(p, _, l, g, e[o + 11], 14, 643717713),
        g = i(g, p, _, l, e[o], 20, -373897302),
        l = i(l, g, p, _, e[o + 5], 5, -701558691),
        _ = i(_, l, g, p, e[o + 10], 9, 38016083),
        p = i(p, _, l, g, e[o + 15], 14, -660478335),
        g = i(g, p, _, l, e[o + 4], 20, -405537848),
        l = i(l, g, p, _, e[o + 9], 5, 568446438),
        _ = i(_, l, g, p, e[o + 14], 9, -1019803690),
        p = i(p, _, l, g, e[o + 3], 14, -187363961),
        g = i(g, p, _, l, e[o + 8], 20, 1163531501),
        l = i(l, g, p, _, e[o + 13], 5, -1444681467),
        _ = i(_, l, g, p, e[o + 2], 9, -51403784),
        p = i(p, _, l, g, e[o + 7], 14, 1735328473),
        g = i(g, p, _, l, e[o + 12], 20, -1926607734),
        l = a(l, g, p, _, e[o + 5], 4, -378558),
        _ = a(_, l, g, p, e[o + 8], 11, -2022574463),
        p = a(p, _, l, g, e[o + 11], 16, 1839030562),
        g = a(g, p, _, l, e[o + 14], 23, -35309556),
        l = a(l, g, p, _, e[o + 1], 4, -1530992060),
        _ = a(_, l, g, p, e[o + 4], 11, 1272893353),
        p = a(p, _, l, g, e[o + 7], 16, -155497632),
        g = a(g, p, _, l, e[o + 10], 23, -1094730640),
        l = a(l, g, p, _, e[o + 13], 4, 681279174),
        _ = a(_, l, g, p, e[o], 11, -358537222),
        p = a(p, _, l, g, e[o + 3], 16, -722521979),
        g = a(g, p, _, l, e[o + 6], 23, 76029189),
        l = a(l, g, p, _, e[o + 9], 4, -640364487),
        _ = a(_, l, g, p, e[o + 12], 11, -421815835),
        p = a(p, _, l, g, e[o + 15], 16, 530742520),
        g = a(g, p, _, l, e[o + 2], 23, -995338651),
        l = s(l, g, p, _, e[o], 6, -198630844),
        _ = s(_, l, g, p, e[o + 7], 10, 1126891415),
        p = s(p, _, l, g, e[o + 14], 15, -1416354905),
        g = s(g, p, _, l, e[o + 5], 21, -57434055),
        l = s(l, g, p, _, e[o + 12], 6, 1700485571),
        _ = s(_, l, g, p, e[o + 3], 10, -1894986606),
        p = s(p, _, l, g, e[o + 10], 15, -1051523),
        g = s(g, p, _, l, e[o + 1], 21, -2054922799),
        l = s(l, g, p, _, e[o + 8], 6, 1873313359),
        _ = s(_, l, g, p, e[o + 15], 10, -30611744),
        p = s(p, _, l, g, e[o + 6], 15, -1560198380),
        g = s(g, p, _, l, e[o + 13], 21, 1309151649),
        l = s(l, g, p, _, e[o + 4], 6, -145523070),
        _ = s(_, l, g, p, e[o + 11], 10, -1120210379),
        p = s(p, _, l, g, e[o + 2], 15, 718787259),
        g = s(g, p, _, l, e[o + 9], 21, -343485551),
        l = t(l, c),
        g = t(g, u),
        p = t(p, d),
        _ = t(_, f);
        return [l, g, p, _]
    }
    function u(e) {
        var t, n = "",
        o = 32 * e.length;
        for (t = 0; o > t; t += 8) n += String.fromCharCode(e[t >> 5] >>> t % 32 & 255);
        return n
    }
    function d(e) {
        var t, n = [];
        for (n[(e.length >> 2) - 1] = void 0, t = 0; t < n.length; t += 1) n[t] = 0;
        var o = 8 * e.length;
        for (t = 0; o > t; t += 8) n[t >> 5] |= (255 & e.charCodeAt(t / 8)) << t % 32;
        return n
    }
    function f(e) {
        return u(c(d(e), 8 * e.length))
    }
    function l(e, t) {
        var n, o, r = d(e),
        i = [],
        a = [];
        for (i[15] = a[15] = void 0, r.length > 16 && (r = c(r, 8 * e.length)), n = 0; 16 > n; n += 1) i[n] = 909522486 ^ r[n],
        a[n] = 1549556828 ^ r[n];
        return o = c(i.concat(d(t)), 512 + 8 * t.length),
        u(c(a.concat(o), 640))
    }
    function g(e) {
        var t, n, o = "0123456789abcdef",
        r = "";
        for (n = 0; n < e.length; n += 1) t = e.charCodeAt(n),
        r += o.charAt(t >>> 4 & 15) + o.charAt(15 & t);
        return r
    }
    function p(e) {
        return unescape(encodeURIComponent(e))
    }
    function _(e) {
        return f(p(e))
    }
    function v(e) {
        return g(_(e))
    }
    function m(e, t) {
        return l(p(e), p(t))
    }
    function h(e, t) {
        return g(m(e, t))
    }
    function S(e, t, n) {
        return t ? n ? m(t, e) : h(t, e) : n ? _(e) : v(e)
    }
    e.md5 = S
};
