// 加密 js 函数
a = {
    _a: "AgrcepndtslzyohCia0uS@",
    _b: "A0ilndhga@usreztoSCpyc",
    _c: "d0@yorAtlhzSCeunpcagis",
    _d: "zzpttjd",
    X: function(t) {
        for (var e = "", i = 0; i < t[this._c[8] + this._a[4] + this._c[15] + this._a[1] + this._a[8] + this._b[6]]; i++) {
            var n = t[this._a[3] + this._a[14] + this._c[18] + this._a[2] + this._b[18] + this._b[16] + this._c[0] + this._a[4] + this._b[0] + this._b[15]](i) ^ this._d[this._b[21] + this._b[6] + this._a[17] + this._c[5] + this._b[18] + this._c[4] + this._a[7] + this._a[4] + this._a[0] + this._c[7]](i % this._d[this._a[10] + this._b[13] + this._b[4] + this._a[1] + this._c[7] + this._a[14]]);
            e += this.Y(n)
        }
        return e
    },
    Y: function(t) {
        var e = t[this._c[7] + this._a[13] + this._a[20] + this._b[15] + this._a[2] + this._b[2] + this._c[15] + this._c[19]](16);
        return e = e[this._b[3] + this._a[4] + this._b[4] + this._a[1] + this._c[7] + this._c[9]] < 2 ? this._b[1] + e : e,
        e[this._a[9] + this._b[3] + this._c[20] + this._c[17] + this._c[13]](-4)
    },
    Z: function(t) {
        for (var e = "", i  = 0; i < t.length; i++)
            e += t[i] + ";";
        return e = e.substring(0, e.length - 1), this.X(e)
    }
}


// p.g
function g(h) {
    var a = 0
        , l = 0
        , i = 0;
    return h = Number(h),
        h <= 0 || (h < 10 ? parseInt(h) : 10 <= h && h < 60 ? parseInt(h) : 60 <= h && h < 600 ? (l = Math.floor(h / 60),
            i = parseInt(h % 60)) : 600 <= h && h < 3600 ? (l = Math.floor(h / 60),
                i = parseInt(h % 60)) : 3600 <= h && (a = Math.floor(h / 3600))),
        l = Math.floor((h - 3600 * a) / 60),
        i = parseInt(h % 60),
        "0" + a + ":" + (l < 10 ? "0" + l : l) + ":" + (i < 10 ? "0" + i : i)
}


[
    48111,
    1000299402,
    1000219422,
    11939783,
    1000107260,
    "0",
    5,
    515,
    "00:01:03"
]
