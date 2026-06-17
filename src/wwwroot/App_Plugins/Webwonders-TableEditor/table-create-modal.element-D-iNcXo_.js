import { html as pa, css as Is, state as Aa, customElement as Ns } from "@umbraco-cms/backoffice/external/lit";
import { UmbModalBaseElement as Ps } from "@umbraco-cms/backoffice/modal";
var Mn = 1252, Ls = [874, 932, 936, 949, 950, 1250, 1251, 1252, 1253, 1254, 1255, 1256, 1257, 1258, 1e4], e0 = {
  /*::[*/
  0: 1252,
  /* ANSI */
  /*::[*/
  1: 65001,
  /* DEFAULT */
  /*::[*/
  2: 65001,
  /* SYMBOL */
  /*::[*/
  77: 1e4,
  /* MAC */
  /*::[*/
  128: 932,
  /* SHIFTJIS */
  /*::[*/
  129: 949,
  /* HANGUL */
  /*::[*/
  130: 1361,
  /* JOHAB */
  /*::[*/
  134: 936,
  /* GB2312 */
  /*::[*/
  136: 950,
  /* CHINESEBIG5 */
  /*::[*/
  161: 1253,
  /* GREEK */
  /*::[*/
  162: 1254,
  /* TURKISH */
  /*::[*/
  163: 1258,
  /* VIETNAMESE */
  /*::[*/
  177: 1255,
  /* HEBREW */
  /*::[*/
  178: 1256,
  /* ARABIC */
  /*::[*/
  186: 1257,
  /* BALTIC */
  /*::[*/
  204: 1251,
  /* RUSSIAN */
  /*::[*/
  222: 874,
  /* THAI */
  /*::[*/
  238: 1250,
  /* EASTEUROPE */
  /*::[*/
  255: 1252,
  /* OEM */
  /*::[*/
  69: 6969
  /* MISC */
}, r0 = function(e) {
  Ls.indexOf(e) != -1 && (Mn = e0[0] = e);
};
function bs() {
  r0(1252);
}
var Dr = function(e) {
  r0(e);
};
function Bn() {
  Dr(1200), bs();
}
function R0(e) {
  for (var a = [], r = 0, n = e.length; r < n; ++r) a[r] = e.charCodeAt(r);
  return a;
}
function Ms(e) {
  for (var a = [], r = 0; r < e.length >> 1; ++r) a[r] = String.fromCharCode(e.charCodeAt(2 * r) + (e.charCodeAt(2 * r + 1) << 8));
  return a.join("");
}
function Un(e) {
  for (var a = [], r = 0; r < e.length >> 1; ++r) a[r] = String.fromCharCode(e.charCodeAt(2 * r + 1) + (e.charCodeAt(2 * r) << 8));
  return a.join("");
}
var Ra = function(e) {
  var a = e.charCodeAt(0), r = e.charCodeAt(1);
  return a == 255 && r == 254 ? Ms(e.slice(2)) : a == 254 && r == 255 ? Un(e.slice(2)) : a == 65279 ? e.slice(1) : e;
}, st = function(a) {
  return String.fromCharCode(a);
}, I0 = function(a) {
  return String.fromCharCode(a);
}, Xa, Yr = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=";
function N0(e) {
  for (var a = "", r = 0, n = 0, t = 0, i = 0, s = 0, c = 0, o = 0, f = 0; f < e.length; )
    r = e.charCodeAt(f++), i = r >> 2, n = e.charCodeAt(f++), s = (r & 3) << 4 | n >> 4, t = e.charCodeAt(f++), c = (n & 15) << 2 | t >> 6, o = t & 63, isNaN(n) ? c = o = 64 : isNaN(t) && (o = 64), a += Yr.charAt(i) + Yr.charAt(s) + Yr.charAt(c) + Yr.charAt(o);
  return a;
}
function Tr(e) {
  var a = "", r = 0, n = 0, t = 0, i = 0, s = 0, c = 0, o = 0;
  e = e.replace(/[^\w\+\/\=]/g, "");
  for (var f = 0; f < e.length; )
    i = Yr.indexOf(e.charAt(f++)), s = Yr.indexOf(e.charAt(f++)), r = i << 2 | s >> 4, a += String.fromCharCode(r), c = Yr.indexOf(e.charAt(f++)), n = (s & 15) << 4 | c >> 2, c !== 64 && (a += String.fromCharCode(n)), o = Yr.indexOf(e.charAt(f++)), t = (c & 3) << 6 | o, o !== 64 && (a += String.fromCharCode(t));
  return a;
}
var Ae = /* @__PURE__ */ (function() {
  return typeof Buffer < "u" && typeof process < "u" && typeof process.versions < "u" && !!process.versions.node;
})(), fa = /* @__PURE__ */ (function() {
  if (typeof Buffer < "u") {
    var e = !Buffer.from;
    if (!e) try {
      Buffer.from("foo", "utf8");
    } catch {
      e = !0;
    }
    return e ? function(a, r) {
      return r ? new Buffer(a, r) : new Buffer(a);
    } : Buffer.from.bind(Buffer);
  }
  return function() {
  };
})();
function qr(e) {
  return Ae ? Buffer.alloc ? Buffer.alloc(e) : new Buffer(e) : typeof Uint8Array < "u" ? new Uint8Array(e) : new Array(e);
}
function P0(e) {
  return Ae ? Buffer.allocUnsafe ? Buffer.allocUnsafe(e) : new Buffer(e) : typeof Uint8Array < "u" ? new Uint8Array(e) : new Array(e);
}
var Or = function(a) {
  return Ae ? fa(a, "binary") : a.split("").map(function(r) {
    return r.charCodeAt(0) & 255;
  });
};
function oa(e) {
  if (Array.isArray(e)) return e.map(function(n) {
    return String.fromCharCode(n);
  }).join("");
  for (var a = [], r = 0; r < e.length; ++r) a[r] = String.fromCharCode(e[r]);
  return a.join("");
}
function a0(e) {
  if (typeof ArrayBuffer > "u") throw new Error("Unsupported");
  if (e instanceof ArrayBuffer) return a0(new Uint8Array(e));
  for (var a = new Array(e.length), r = 0; r < e.length; ++r) a[r] = e[r];
  return a;
}
var Kr = Ae ? function(e) {
  return Buffer.concat(e.map(function(a) {
    return Buffer.isBuffer(a) ? a : fa(a);
  }));
} : function(e) {
  if (typeof Uint8Array < "u") {
    var a = 0, r = 0;
    for (a = 0; a < e.length; ++a) r += e[a].length;
    var n = new Uint8Array(r), t = 0;
    for (a = 0, r = 0; a < e.length; r += t, ++a)
      if (t = e[a].length, e[a] instanceof Uint8Array) n.set(e[a], r);
      else {
        if (typeof e[a] == "string")
          throw "wtf";
        n.set(new Uint8Array(e[a]), r);
      }
    return n;
  }
  return [].concat.apply([], e.map(function(i) {
    return Array.isArray(i) ? i : [].slice.call(i);
  }));
};
function Bs(e) {
  for (var a = [], r = 0, n = e.length + 250, t = qr(e.length + 255), i = 0; i < e.length; ++i) {
    var s = e.charCodeAt(i);
    if (s < 128) t[r++] = s;
    else if (s < 2048)
      t[r++] = 192 | s >> 6 & 31, t[r++] = 128 | s & 63;
    else if (s >= 55296 && s < 57344) {
      s = (s & 1023) + 64;
      var c = e.charCodeAt(++i) & 1023;
      t[r++] = 240 | s >> 8 & 7, t[r++] = 128 | s >> 2 & 63, t[r++] = 128 | c >> 6 & 15 | (s & 3) << 4, t[r++] = 128 | c & 63;
    } else
      t[r++] = 224 | s >> 12 & 15, t[r++] = 128 | s >> 6 & 63, t[r++] = 128 | s & 63;
    r > n && (a.push(t.slice(0, r)), r = 0, t = qr(65535), n = 65530);
  }
  return a.push(t.slice(0, r)), Kr(a);
}
var dr = /\u0000/g, Ia = /[\u0001-\u0006]/g;
function _a(e) {
  for (var a = "", r = e.length - 1; r >= 0; ) a += e.charAt(r--);
  return a;
}
function Rr(e, a) {
  var r = "" + e;
  return r.length >= a ? r : Be("0", a - r.length) + r;
}
function t0(e, a) {
  var r = "" + e;
  return r.length >= a ? r : Be(" ", a - r.length) + r;
}
function vt(e, a) {
  var r = "" + e;
  return r.length >= a ? r : r + Be(" ", a - r.length);
}
function Us(e, a) {
  var r = "" + Math.round(e);
  return r.length >= a ? r : Be("0", a - r.length) + r;
}
function Hs(e, a) {
  var r = "" + e;
  return r.length >= a ? r : Be("0", a - r.length) + r;
}
var L0 = /* @__PURE__ */ Math.pow(2, 32);
function va(e, a) {
  if (e > L0 || e < -L0) return Us(e, a);
  var r = Math.round(e);
  return Hs(r, a);
}
function gt(e, a) {
  return a = a || 0, e.length >= 7 + a && (e.charCodeAt(a) | 32) === 103 && (e.charCodeAt(a + 1) | 32) === 101 && (e.charCodeAt(a + 2) | 32) === 110 && (e.charCodeAt(a + 3) | 32) === 101 && (e.charCodeAt(a + 4) | 32) === 114 && (e.charCodeAt(a + 5) | 32) === 97 && (e.charCodeAt(a + 6) | 32) === 108;
}
var b0 = [
  ["Sun", "Sunday"],
  ["Mon", "Monday"],
  ["Tue", "Tuesday"],
  ["Wed", "Wednesday"],
  ["Thu", "Thursday"],
  ["Fri", "Friday"],
  ["Sat", "Saturday"]
], Nt = [
  ["J", "Jan", "January"],
  ["F", "Feb", "February"],
  ["M", "Mar", "March"],
  ["A", "Apr", "April"],
  ["M", "May", "May"],
  ["J", "Jun", "June"],
  ["J", "Jul", "July"],
  ["A", "Aug", "August"],
  ["S", "Sep", "September"],
  ["O", "Oct", "October"],
  ["N", "Nov", "November"],
  ["D", "Dec", "December"]
];
function Ws(e) {
  return e || (e = {}), e[0] = "General", e[1] = "0", e[2] = "0.00", e[3] = "#,##0", e[4] = "#,##0.00", e[9] = "0%", e[10] = "0.00%", e[11] = "0.00E+00", e[12] = "# ?/?", e[13] = "# ??/??", e[14] = "m/d/yy", e[15] = "d-mmm-yy", e[16] = "d-mmm", e[17] = "mmm-yy", e[18] = "h:mm AM/PM", e[19] = "h:mm:ss AM/PM", e[20] = "h:mm", e[21] = "h:mm:ss", e[22] = "m/d/yy h:mm", e[37] = "#,##0 ;(#,##0)", e[38] = "#,##0 ;[Red](#,##0)", e[39] = "#,##0.00;(#,##0.00)", e[40] = "#,##0.00;[Red](#,##0.00)", e[45] = "mm:ss", e[46] = "[h]:mm:ss", e[47] = "mmss.0", e[48] = "##0.0E+0", e[49] = "@", e[56] = '"上午/下午 "hh"時"mm"分"ss"秒 "', e;
}
var Ee = {
  0: "General",
  1: "0",
  2: "0.00",
  3: "#,##0",
  4: "#,##0.00",
  9: "0%",
  10: "0.00%",
  11: "0.00E+00",
  12: "# ?/?",
  13: "# ??/??",
  14: "m/d/yy",
  15: "d-mmm-yy",
  16: "d-mmm",
  17: "mmm-yy",
  18: "h:mm AM/PM",
  19: "h:mm:ss AM/PM",
  20: "h:mm",
  21: "h:mm:ss",
  22: "m/d/yy h:mm",
  37: "#,##0 ;(#,##0)",
  38: "#,##0 ;[Red](#,##0)",
  39: "#,##0.00;(#,##0.00)",
  40: "#,##0.00;[Red](#,##0.00)",
  45: "mm:ss",
  46: "[h]:mm:ss",
  47: "mmss.0",
  48: "##0.0E+0",
  49: "@",
  56: '"上午/下午 "hh"時"mm"分"ss"秒 "'
}, M0 = {
  5: 37,
  6: 38,
  7: 39,
  8: 40,
  //  5 -> 37 ...  8 -> 40
  23: 0,
  24: 0,
  25: 0,
  26: 0,
  // 23 ->  0 ... 26 ->  0
  27: 14,
  28: 14,
  29: 14,
  30: 14,
  31: 14,
  // 27 -> 14 ... 31 -> 14
  50: 14,
  51: 14,
  52: 14,
  53: 14,
  54: 14,
  // 50 -> 14 ... 58 -> 14
  55: 14,
  56: 14,
  57: 14,
  58: 14,
  59: 1,
  60: 2,
  61: 3,
  62: 4,
  // 59 ->  1 ... 62 ->  4
  67: 9,
  68: 10,
  // 67 ->  9 ... 68 -> 10
  69: 12,
  70: 13,
  71: 14,
  // 69 -> 12 ... 71 -> 14
  72: 14,
  73: 15,
  74: 16,
  75: 17,
  // 72 -> 14 ... 75 -> 17
  76: 20,
  77: 21,
  78: 22,
  // 76 -> 20 ... 78 -> 22
  79: 45,
  80: 46,
  81: 47,
  // 79 -> 45 ... 81 -> 47
  82: 0
  // 82 ->  0 ... 65536 -> 0 (omitted)
}, Vs = {
  //  5 -- Currency,   0 decimal, black negative
  5: '"$"#,##0_);\\("$"#,##0\\)',
  63: '"$"#,##0_);\\("$"#,##0\\)',
  //  6 -- Currency,   0 decimal, red   negative
  6: '"$"#,##0_);[Red]\\("$"#,##0\\)',
  64: '"$"#,##0_);[Red]\\("$"#,##0\\)',
  //  7 -- Currency,   2 decimal, black negative
  7: '"$"#,##0.00_);\\("$"#,##0.00\\)',
  65: '"$"#,##0.00_);\\("$"#,##0.00\\)',
  //  8 -- Currency,   2 decimal, red   negative
  8: '"$"#,##0.00_);[Red]\\("$"#,##0.00\\)',
  66: '"$"#,##0.00_);[Red]\\("$"#,##0.00\\)',
  // 41 -- Accounting, 0 decimal, No Symbol
  41: '_(* #,##0_);_(* \\(#,##0\\);_(* "-"_);_(@_)',
  // 42 -- Accounting, 0 decimal, $  Symbol
  42: '_("$"* #,##0_);_("$"* \\(#,##0\\);_("$"* "-"_);_(@_)',
  // 43 -- Accounting, 2 decimal, No Symbol
  43: '_(* #,##0.00_);_(* \\(#,##0.00\\);_(* "-"??_);_(@_)',
  // 44 -- Accounting, 2 decimal, $  Symbol
  44: '_("$"* #,##0.00_);_("$"* \\(#,##0.00\\);_("$"* "-"??_);_(@_)'
};
function mt(e, a, r) {
  for (var n = e < 0 ? -1 : 1, t = e * n, i = 0, s = 1, c = 0, o = 1, f = 0, l = 0, u = Math.floor(t); f < a && (u = Math.floor(t), c = u * s + i, l = u * f + o, !(t - u < 5e-8)); )
    t = 1 / (t - u), i = s, s = c, o = f, f = l;
  if (l > a && (f > a ? (l = o, c = i) : (l = f, c = s)), !r) return [0, n * c, l];
  var h = Math.floor(n * c / l);
  return [h, n * c - h * l, l];
}
function aa(e, a, r) {
  if (e > 2958465 || e < 0) return null;
  var n = e | 0, t = Math.floor(86400 * (e - n)), i = 0, s = [], c = { D: n, T: t, u: 86400 * (e - n) - t, y: 0, m: 0, d: 0, H: 0, M: 0, S: 0, q: 0 };
  if (Math.abs(c.u) < 1e-6 && (c.u = 0), a && a.date1904 && (n += 1462), c.u > 0.9999 && (c.u = 0, ++t == 86400 && (c.T = t = 0, ++n, ++c.D)), n === 60)
    s = r ? [1317, 10, 29] : [1900, 2, 29], i = 3;
  else if (n === 0)
    s = r ? [1317, 8, 29] : [1900, 1, 0], i = 6;
  else {
    n > 60 && --n;
    var o = new Date(1900, 0, 1);
    o.setDate(o.getDate() + n - 1), s = [o.getFullYear(), o.getMonth() + 1, o.getDate()], i = o.getDay(), n < 60 && (i = (i + 6) % 7), r && (i = Ys(o, s));
  }
  return c.y = s[0], c.m = s[1], c.d = s[2], c.S = t % 60, t = Math.floor(t / 60), c.M = t % 60, t = Math.floor(t / 60), c.H = t, c.q = i, c;
}
var Hn = /* @__PURE__ */ new Date(1899, 11, 31, 0, 0, 0), Gs = /* @__PURE__ */ Hn.getTime(), Xs = /* @__PURE__ */ new Date(1900, 2, 1, 0, 0, 0);
function Wn(e, a) {
  var r = /* @__PURE__ */ e.getTime();
  return a ? r -= 1461 * 24 * 60 * 60 * 1e3 : e >= Xs && (r += 1440 * 60 * 1e3), (r - (Gs + (/* @__PURE__ */ e.getTimezoneOffset() - /* @__PURE__ */ Hn.getTimezoneOffset()) * 6e4)) / (1440 * 60 * 1e3);
}
function n0(e) {
  return e.indexOf(".") == -1 ? e : e.replace(/(?:\.0*|(\.\d*[1-9])0+)$/, "$1");
}
function zs(e) {
  return e.indexOf("E") == -1 ? e : e.replace(/(?:\.0*|(\.\d*[1-9])0+)[Ee]/, "$1E").replace(/(E[+-])(\d)$/, "$10$2");
}
function $s(e) {
  var a = e < 0 ? 12 : 11, r = n0(e.toFixed(12));
  return r.length <= a || (r = e.toPrecision(10), r.length <= a) ? r : e.toExponential(5);
}
function Ks(e) {
  var a = n0(e.toFixed(11));
  return a.length > (e < 0 ? 12 : 11) || a === "0" || a === "-0" ? e.toPrecision(6) : a;
}
function za(e) {
  var a = Math.floor(Math.log(Math.abs(e)) * Math.LOG10E), r;
  return a >= -4 && a <= -1 ? r = e.toPrecision(10 + a) : Math.abs(a) <= 9 ? r = $s(e) : a === 10 ? r = e.toFixed(10).substr(0, 12) : r = Ks(e), n0(zs(r.toUpperCase()));
}
function ia(e, a) {
  switch (typeof e) {
    case "string":
      return e;
    case "boolean":
      return e ? "TRUE" : "FALSE";
    case "number":
      return (e | 0) === e ? e.toString(10) : za(e);
    case "undefined":
      return "";
    case "object":
      if (e == null) return "";
      if (e instanceof Date) return Fr(14, Wn(e, a && a.date1904), a);
  }
  throw new Error("unsupported value in General format: " + e);
}
function Ys(e, a) {
  a[0] -= 581;
  var r = e.getDay();
  return e < 60 && (r = (r + 6) % 7), r;
}
function js(e, a, r, n) {
  var t = "", i = 0, s = 0, c = r.y, o, f = 0;
  switch (e) {
    case 98:
      c = r.y + 543;
    /* falls through */
    case 121:
      switch (a.length) {
        case 1:
        case 2:
          o = c % 100, f = 2;
          break;
        default:
          o = c % 1e4, f = 4;
          break;
      }
      break;
    case 109:
      switch (a.length) {
        case 1:
        case 2:
          o = r.m, f = a.length;
          break;
        case 3:
          return Nt[r.m - 1][1];
        case 5:
          return Nt[r.m - 1][0];
        default:
          return Nt[r.m - 1][2];
      }
      break;
    case 100:
      switch (a.length) {
        case 1:
        case 2:
          o = r.d, f = a.length;
          break;
        case 3:
          return b0[r.q][0];
        default:
          return b0[r.q][1];
      }
      break;
    case 104:
      switch (a.length) {
        case 1:
        case 2:
          o = 1 + (r.H + 11) % 12, f = a.length;
          break;
        default:
          throw "bad hour format: " + a;
      }
      break;
    case 72:
      switch (a.length) {
        case 1:
        case 2:
          o = r.H, f = a.length;
          break;
        default:
          throw "bad hour format: " + a;
      }
      break;
    case 77:
      switch (a.length) {
        case 1:
        case 2:
          o = r.M, f = a.length;
          break;
        default:
          throw "bad minute format: " + a;
      }
      break;
    case 115:
      if (a != "s" && a != "ss" && a != ".0" && a != ".00" && a != ".000") throw "bad second format: " + a;
      return r.u === 0 && (a == "s" || a == "ss") ? Rr(r.S, a.length) : (n >= 2 ? s = n === 3 ? 1e3 : 100 : s = n === 1 ? 10 : 1, i = Math.round(s * (r.S + r.u)), i >= 60 * s && (i = 0), a === "s" ? i === 0 ? "0" : "" + i / s : (t = Rr(i, 2 + n), a === "ss" ? t.substr(0, 2) : "." + t.substr(2, a.length - 1)));
    case 90:
      switch (a) {
        case "[h]":
        case "[hh]":
          o = r.D * 24 + r.H;
          break;
        case "[m]":
        case "[mm]":
          o = (r.D * 24 + r.H) * 60 + r.M;
          break;
        case "[s]":
        case "[ss]":
          o = ((r.D * 24 + r.H) * 60 + r.M) * 60 + Math.round(r.S + r.u);
          break;
        default:
          throw "bad abstime format: " + a;
      }
      f = a.length === 3 ? 1 : 2;
      break;
    case 101:
      o = c, f = 1;
      break;
  }
  var l = f > 0 ? Rr(o, f) : "";
  return l;
}
function jr(e) {
  var a = 3;
  if (e.length <= a) return e;
  for (var r = e.length % a, n = e.substr(0, r); r != e.length; r += a) n += (n.length > 0 ? "," : "") + e.substr(r, a);
  return n;
}
var Vn = /%/g;
function Js(e, a, r) {
  var n = a.replace(Vn, ""), t = a.length - n.length;
  return Wr(e, n, r * Math.pow(10, 2 * t)) + Be("%", t);
}
function qs(e, a, r) {
  for (var n = a.length - 1; a.charCodeAt(n - 1) === 44; ) --n;
  return Wr(e, a.substr(0, n), r / Math.pow(10, 3 * (a.length - n)));
}
function Gn(e, a) {
  var r, n = e.indexOf("E") - e.indexOf(".") - 1;
  if (e.match(/^#+0.0E\+0$/)) {
    if (a == 0) return "0.0E+0";
    if (a < 0) return "-" + Gn(e, -a);
    var t = e.indexOf(".");
    t === -1 && (t = e.indexOf("E"));
    var i = Math.floor(Math.log(a) * Math.LOG10E) % t;
    if (i < 0 && (i += t), r = (a / Math.pow(10, i)).toPrecision(n + 1 + (t + i) % t), r.indexOf("e") === -1) {
      var s = Math.floor(Math.log(a) * Math.LOG10E);
      for (r.indexOf(".") === -1 ? r = r.charAt(0) + "." + r.substr(1) + "E+" + (s - r.length + i) : r += "E+" + (s - i); r.substr(0, 2) === "0."; )
        r = r.charAt(0) + r.substr(2, t) + "." + r.substr(2 + t), r = r.replace(/^0+([1-9])/, "$1").replace(/^0+\./, "0.");
      r = r.replace(/\+-/, "-");
    }
    r = r.replace(/^([+-]?)(\d*)\.(\d*)[Ee]/, function(c, o, f, l) {
      return o + f + l.substr(0, (t + i) % t) + "." + l.substr(i) + "E";
    });
  } else r = a.toExponential(n);
  return e.match(/E\+00$/) && r.match(/e[+-]\d$/) && (r = r.substr(0, r.length - 1) + "0" + r.charAt(r.length - 1)), e.match(/E\-/) && r.match(/e\+/) && (r = r.replace(/e\+/, "e")), r.replace("e", "E");
}
var Xn = /# (\?+)( ?)\/( ?)(\d+)/;
function Zs(e, a, r) {
  var n = parseInt(e[4], 10), t = Math.round(a * n), i = Math.floor(t / n), s = t - i * n, c = n;
  return r + (i === 0 ? "" : "" + i) + " " + (s === 0 ? Be(" ", e[1].length + 1 + e[4].length) : t0(s, e[1].length) + e[2] + "/" + e[3] + Rr(c, e[4].length));
}
function Qs(e, a, r) {
  return r + (a === 0 ? "" : "" + a) + Be(" ", e[1].length + 2 + e[4].length);
}
var zn = /^#*0*\.([0#]+)/, $n = /\).*[0#]/, Kn = /\(###\) ###\\?-####/;
function ur(e) {
  for (var a = "", r, n = 0; n != e.length; ++n) switch (r = e.charCodeAt(n)) {
    case 35:
      break;
    case 63:
      a += " ";
      break;
    case 48:
      a += "0";
      break;
    default:
      a += String.fromCharCode(r);
  }
  return a;
}
function B0(e, a) {
  var r = Math.pow(10, a);
  return "" + Math.round(e * r) / r;
}
function U0(e, a) {
  var r = e - Math.floor(e), n = Math.pow(10, a);
  return a < ("" + Math.round(r * n)).length ? 0 : Math.round(r * n);
}
function ec(e, a) {
  return a < ("" + Math.round((e - Math.floor(e)) * Math.pow(10, a))).length ? 1 : 0;
}
function rc(e) {
  return e < 2147483647 && e > -2147483648 ? "" + (e >= 0 ? e | 0 : e - 1 | 0) : "" + Math.floor(e);
}
function wr(e, a, r) {
  if (e.charCodeAt(0) === 40 && !a.match($n)) {
    var n = a.replace(/\( */, "").replace(/ \)/, "").replace(/\)/, "");
    return r >= 0 ? wr("n", n, r) : "(" + wr("n", n, -r) + ")";
  }
  if (a.charCodeAt(a.length - 1) === 44) return qs(e, a, r);
  if (a.indexOf("%") !== -1) return Js(e, a, r);
  if (a.indexOf("E") !== -1) return Gn(a, r);
  if (a.charCodeAt(0) === 36) return "$" + wr(e, a.substr(a.charAt(1) == " " ? 2 : 1), r);
  var t, i, s, c, o = Math.abs(r), f = r < 0 ? "-" : "";
  if (a.match(/^00+$/)) return f + va(o, a.length);
  if (a.match(/^[#?]+$/))
    return t = va(r, 0), t === "0" && (t = ""), t.length > a.length ? t : ur(a.substr(0, a.length - t.length)) + t;
  if (i = a.match(Xn)) return Zs(i, o, f);
  if (a.match(/^#+0+$/)) return f + va(o, a.length - a.indexOf("0"));
  if (i = a.match(zn))
    return t = B0(r, i[1].length).replace(/^([^\.]+)$/, "$1." + ur(i[1])).replace(/\.$/, "." + ur(i[1])).replace(/\.(\d*)$/, function(p, x) {
      return "." + x + Be("0", ur(
        /*::(*/
        i[1]
      ).length - x.length);
    }), a.indexOf("0.") !== -1 ? t : t.replace(/^0\./, ".");
  if (a = a.replace(/^#+([0.])/, "$1"), i = a.match(/^(0*)\.(#*)$/))
    return f + B0(o, i[2].length).replace(/\.(\d*[1-9])0*$/, ".$1").replace(/^(-?\d*)$/, "$1.").replace(/^0\./, i[1].length ? "0." : ".");
  if (i = a.match(/^#{1,3},##0(\.?)$/)) return f + jr(va(o, 0));
  if (i = a.match(/^#,##0\.([#0]*0)$/))
    return r < 0 ? "-" + wr(e, a, -r) : jr("" + (Math.floor(r) + ec(r, i[1].length))) + "." + Rr(U0(r, i[1].length), i[1].length);
  if (i = a.match(/^#,#*,#0/)) return wr(e, a.replace(/^#,#*,/, ""), r);
  if (i = a.match(/^([0#]+)(\\?-([0#]+))+$/))
    return t = _a(wr(e, a.replace(/[\\-]/g, ""), r)), s = 0, _a(_a(a.replace(/\\/g, "")).replace(/[0#]/g, function(p) {
      return s < t.length ? t.charAt(s++) : p === "0" ? "0" : "";
    }));
  if (a.match(Kn))
    return t = wr(e, "##########", r), "(" + t.substr(0, 3) + ") " + t.substr(3, 3) + "-" + t.substr(6);
  var l = "";
  if (i = a.match(/^([#0?]+)( ?)\/( ?)([#0?]+)/))
    return s = Math.min(
      /*::String(*/
      i[4].length,
      7
    ), c = mt(o, Math.pow(10, s) - 1, !1), t = "" + f, l = Wr(
      "n",
      /*::String(*/
      i[1],
      c[1]
    ), l.charAt(l.length - 1) == " " && (l = l.substr(0, l.length - 1) + "0"), t += l + /*::String(*/
    i[2] + "/" + /*::String(*/
    i[3], l = vt(c[2], s), l.length < i[4].length && (l = ur(i[4].substr(i[4].length - l.length)) + l), t += l, t;
  if (i = a.match(/^# ([#0?]+)( ?)\/( ?)([#0?]+)/))
    return s = Math.min(Math.max(i[1].length, i[4].length), 7), c = mt(o, Math.pow(10, s) - 1, !0), f + (c[0] || (c[1] ? "" : "0")) + " " + (c[1] ? t0(c[1], s) + i[2] + "/" + i[3] + vt(c[2], s) : Be(" ", 2 * s + 1 + i[2].length + i[3].length));
  if (i = a.match(/^[#0?]+$/))
    return t = va(r, 0), a.length <= t.length ? t : ur(a.substr(0, a.length - t.length)) + t;
  if (i = a.match(/^([#0?]+)\.([#0]+)$/)) {
    t = "" + r.toFixed(Math.min(i[2].length, 10)).replace(/([^0])0+$/, "$1"), s = t.indexOf(".");
    var u = a.indexOf(".") - s, h = a.length - t.length - u;
    return ur(a.substr(0, u) + t + a.substr(a.length - h));
  }
  if (i = a.match(/^00,000\.([#0]*0)$/))
    return s = U0(r, i[1].length), r < 0 ? "-" + wr(e, a, -r) : jr(rc(r)).replace(/^\d,\d{3}$/, "0$&").replace(/^\d*$/, function(p) {
      return "00," + (p.length < 3 ? Rr(0, 3 - p.length) : "") + p;
    }) + "." + Rr(s, i[1].length);
  switch (a) {
    case "###,##0.00":
      return wr(e, "#,##0.00", r);
    case "###,###":
    case "##,###":
    case "#,###":
      var d = jr(va(o, 0));
      return d !== "0" ? f + d : "";
    case "###,###.00":
      return wr(e, "###,##0.00", r).replace(/^0\./, ".");
    case "#,###.00":
      return wr(e, "#,##0.00", r).replace(/^0\./, ".");
  }
  throw new Error("unsupported format |" + a + "|");
}
function ac(e, a, r) {
  for (var n = a.length - 1; a.charCodeAt(n - 1) === 44; ) --n;
  return Wr(e, a.substr(0, n), r / Math.pow(10, 3 * (a.length - n)));
}
function tc(e, a, r) {
  var n = a.replace(Vn, ""), t = a.length - n.length;
  return Wr(e, n, r * Math.pow(10, 2 * t)) + Be("%", t);
}
function Yn(e, a) {
  var r, n = e.indexOf("E") - e.indexOf(".") - 1;
  if (e.match(/^#+0.0E\+0$/)) {
    if (a == 0) return "0.0E+0";
    if (a < 0) return "-" + Yn(e, -a);
    var t = e.indexOf(".");
    t === -1 && (t = e.indexOf("E"));
    var i = Math.floor(Math.log(a) * Math.LOG10E) % t;
    if (i < 0 && (i += t), r = (a / Math.pow(10, i)).toPrecision(n + 1 + (t + i) % t), !r.match(/[Ee]/)) {
      var s = Math.floor(Math.log(a) * Math.LOG10E);
      r.indexOf(".") === -1 ? r = r.charAt(0) + "." + r.substr(1) + "E+" + (s - r.length + i) : r += "E+" + (s - i), r = r.replace(/\+-/, "-");
    }
    r = r.replace(/^([+-]?)(\d*)\.(\d*)[Ee]/, function(c, o, f, l) {
      return o + f + l.substr(0, (t + i) % t) + "." + l.substr(i) + "E";
    });
  } else r = a.toExponential(n);
  return e.match(/E\+00$/) && r.match(/e[+-]\d$/) && (r = r.substr(0, r.length - 1) + "0" + r.charAt(r.length - 1)), e.match(/E\-/) && r.match(/e\+/) && (r = r.replace(/e\+/, "e")), r.replace("e", "E");
}
function Lr(e, a, r) {
  if (e.charCodeAt(0) === 40 && !a.match($n)) {
    var n = a.replace(/\( */, "").replace(/ \)/, "").replace(/\)/, "");
    return r >= 0 ? Lr("n", n, r) : "(" + Lr("n", n, -r) + ")";
  }
  if (a.charCodeAt(a.length - 1) === 44) return ac(e, a, r);
  if (a.indexOf("%") !== -1) return tc(e, a, r);
  if (a.indexOf("E") !== -1) return Yn(a, r);
  if (a.charCodeAt(0) === 36) return "$" + Lr(e, a.substr(a.charAt(1) == " " ? 2 : 1), r);
  var t, i, s, c, o = Math.abs(r), f = r < 0 ? "-" : "";
  if (a.match(/^00+$/)) return f + Rr(o, a.length);
  if (a.match(/^[#?]+$/))
    return t = "" + r, r === 0 && (t = ""), t.length > a.length ? t : ur(a.substr(0, a.length - t.length)) + t;
  if (i = a.match(Xn)) return Qs(i, o, f);
  if (a.match(/^#+0+$/)) return f + Rr(o, a.length - a.indexOf("0"));
  if (i = a.match(zn))
    return t = ("" + r).replace(/^([^\.]+)$/, "$1." + ur(i[1])).replace(/\.$/, "." + ur(i[1])), t = t.replace(/\.(\d*)$/, function(p, x) {
      return "." + x + Be("0", ur(i[1]).length - x.length);
    }), a.indexOf("0.") !== -1 ? t : t.replace(/^0\./, ".");
  if (a = a.replace(/^#+([0.])/, "$1"), i = a.match(/^(0*)\.(#*)$/))
    return f + ("" + o).replace(/\.(\d*[1-9])0*$/, ".$1").replace(/^(-?\d*)$/, "$1.").replace(/^0\./, i[1].length ? "0." : ".");
  if (i = a.match(/^#{1,3},##0(\.?)$/)) return f + jr("" + o);
  if (i = a.match(/^#,##0\.([#0]*0)$/))
    return r < 0 ? "-" + Lr(e, a, -r) : jr("" + r) + "." + Be("0", i[1].length);
  if (i = a.match(/^#,#*,#0/)) return Lr(e, a.replace(/^#,#*,/, ""), r);
  if (i = a.match(/^([0#]+)(\\?-([0#]+))+$/))
    return t = _a(Lr(e, a.replace(/[\\-]/g, ""), r)), s = 0, _a(_a(a.replace(/\\/g, "")).replace(/[0#]/g, function(p) {
      return s < t.length ? t.charAt(s++) : p === "0" ? "0" : "";
    }));
  if (a.match(Kn))
    return t = Lr(e, "##########", r), "(" + t.substr(0, 3) + ") " + t.substr(3, 3) + "-" + t.substr(6);
  var l = "";
  if (i = a.match(/^([#0?]+)( ?)\/( ?)([#0?]+)/))
    return s = Math.min(
      /*::String(*/
      i[4].length,
      7
    ), c = mt(o, Math.pow(10, s) - 1, !1), t = "" + f, l = Wr(
      "n",
      /*::String(*/
      i[1],
      c[1]
    ), l.charAt(l.length - 1) == " " && (l = l.substr(0, l.length - 1) + "0"), t += l + /*::String(*/
    i[2] + "/" + /*::String(*/
    i[3], l = vt(c[2], s), l.length < i[4].length && (l = ur(i[4].substr(i[4].length - l.length)) + l), t += l, t;
  if (i = a.match(/^# ([#0?]+)( ?)\/( ?)([#0?]+)/))
    return s = Math.min(Math.max(i[1].length, i[4].length), 7), c = mt(o, Math.pow(10, s) - 1, !0), f + (c[0] || (c[1] ? "" : "0")) + " " + (c[1] ? t0(c[1], s) + i[2] + "/" + i[3] + vt(c[2], s) : Be(" ", 2 * s + 1 + i[2].length + i[3].length));
  if (i = a.match(/^[#0?]+$/))
    return t = "" + r, a.length <= t.length ? t : ur(a.substr(0, a.length - t.length)) + t;
  if (i = a.match(/^([#0]+)\.([#0]+)$/)) {
    t = "" + r.toFixed(Math.min(i[2].length, 10)).replace(/([^0])0+$/, "$1"), s = t.indexOf(".");
    var u = a.indexOf(".") - s, h = a.length - t.length - u;
    return ur(a.substr(0, u) + t + a.substr(a.length - h));
  }
  if (i = a.match(/^00,000\.([#0]*0)$/))
    return r < 0 ? "-" + Lr(e, a, -r) : jr("" + r).replace(/^\d,\d{3}$/, "0$&").replace(/^\d*$/, function(p) {
      return "00," + (p.length < 3 ? Rr(0, 3 - p.length) : "") + p;
    }) + "." + Rr(0, i[1].length);
  switch (a) {
    case "###,###":
    case "##,###":
    case "#,###":
      var d = jr("" + o);
      return d !== "0" ? f + d : "";
    default:
      if (a.match(/\.[0#?]*$/)) return Lr(e, a.slice(0, a.lastIndexOf(".")), r) + ur(a.slice(a.lastIndexOf(".")));
  }
  throw new Error("unsupported format |" + a + "|");
}
function Wr(e, a, r) {
  return (r | 0) === r ? Lr(e, a, r) : wr(e, a, r);
}
function nc(e) {
  for (var a = [], r = !1, n = 0, t = 0; n < e.length; ++n) switch (
    /*cc=*/
    e.charCodeAt(n)
  ) {
    case 34:
      r = !r;
      break;
    case 95:
    case 42:
    case 92:
      ++n;
      break;
    case 59:
      a[a.length] = e.substr(t, n - t), t = n + 1;
  }
  if (a[a.length] = e.substr(t), r === !0) throw new Error("Format |" + e + "| unterminated string ");
  return a;
}
var jn = /\[[HhMmSs\u0E0A\u0E19\u0E17]*\]/;
function Fa(e) {
  for (var a = 0, r = "", n = ""; a < e.length; )
    switch (r = e.charAt(a)) {
      case "G":
        gt(e, a) && (a += 6), a++;
        break;
      case '"':
        for (
          ;
          /*cc=*/
          e.charCodeAt(++a) !== 34 && a < e.length;
        )
          ;
        ++a;
        break;
      case "\\":
        a += 2;
        break;
      case "_":
        a += 2;
        break;
      case "@":
        ++a;
        break;
      case "B":
      case "b":
        if (e.charAt(a + 1) === "1" || e.charAt(a + 1) === "2") return !0;
      /* falls through */
      case "M":
      case "D":
      case "Y":
      case "H":
      case "S":
      case "E":
      /* falls through */
      case "m":
      case "d":
      case "y":
      case "h":
      case "s":
      case "e":
      case "g":
        return !0;
      case "A":
      case "a":
      case "上":
        if (e.substr(a, 3).toUpperCase() === "A/P" || e.substr(a, 5).toUpperCase() === "AM/PM" || e.substr(a, 5).toUpperCase() === "上午/下午") return !0;
        ++a;
        break;
      case "[":
        for (n = r; e.charAt(a++) !== "]" && a < e.length; ) n += e.charAt(a);
        if (n.match(jn)) return !0;
        break;
      case ".":
      /* falls through */
      case "0":
      case "#":
        for (; a < e.length && ("0#?.,E+-%".indexOf(r = e.charAt(++a)) > -1 || r == "\\" && e.charAt(a + 1) == "-" && "0#".indexOf(e.charAt(a + 2)) > -1); )
          ;
        break;
      case "?":
        for (; e.charAt(++a) === r; )
          ;
        break;
      case "*":
        ++a, (e.charAt(a) == " " || e.charAt(a) == "*") && ++a;
        break;
      case "(":
      case ")":
        ++a;
        break;
      case "1":
      case "2":
      case "3":
      case "4":
      case "5":
      case "6":
      case "7":
      case "8":
      case "9":
        for (; a < e.length && "0123456789".indexOf(e.charAt(++a)) > -1; )
          ;
        break;
      case " ":
        ++a;
        break;
      default:
        ++a;
        break;
    }
  return !1;
}
function ic(e, a, r, n) {
  for (var t = [], i = "", s = 0, c = "", o = "t", f, l, u, h = "H"; s < e.length; )
    switch (c = e.charAt(s)) {
      case "G":
        if (!gt(e, s)) throw new Error("unrecognized character " + c + " in " + e);
        t[t.length] = { t: "G", v: "General" }, s += 7;
        break;
      case '"':
        for (i = ""; (u = e.charCodeAt(++s)) !== 34 && s < e.length; ) i += String.fromCharCode(u);
        t[t.length] = { t: "t", v: i }, ++s;
        break;
      case "\\":
        var d = e.charAt(++s), p = d === "(" || d === ")" ? d : "t";
        t[t.length] = { t: p, v: d }, ++s;
        break;
      case "_":
        t[t.length] = { t: "t", v: " " }, s += 2;
        break;
      case "@":
        t[t.length] = { t: "T", v: a }, ++s;
        break;
      case "B":
      case "b":
        if (e.charAt(s + 1) === "1" || e.charAt(s + 1) === "2") {
          if (f == null && (f = aa(a, r, e.charAt(s + 1) === "2"), f == null))
            return "";
          t[t.length] = { t: "X", v: e.substr(s, 2) }, o = c, s += 2;
          break;
        }
      /* falls through */
      case "M":
      case "D":
      case "Y":
      case "H":
      case "S":
      case "E":
        c = c.toLowerCase();
      /* falls through */
      case "m":
      case "d":
      case "y":
      case "h":
      case "s":
      case "e":
      case "g":
        if (a < 0 || f == null && (f = aa(a, r), f == null))
          return "";
        for (i = c; ++s < e.length && e.charAt(s).toLowerCase() === c; ) i += c;
        c === "m" && o.toLowerCase() === "h" && (c = "M"), c === "h" && (c = h), t[t.length] = { t: c, v: i }, o = c;
        break;
      case "A":
      case "a":
      case "上":
        var x = { t: c, v: c };
        if (f == null && (f = aa(a, r)), e.substr(s, 3).toUpperCase() === "A/P" ? (f != null && (x.v = f.H >= 12 ? "P" : "A"), x.t = "T", h = "h", s += 3) : e.substr(s, 5).toUpperCase() === "AM/PM" ? (f != null && (x.v = f.H >= 12 ? "PM" : "AM"), x.t = "T", s += 5, h = "h") : e.substr(s, 5).toUpperCase() === "上午/下午" ? (f != null && (x.v = f.H >= 12 ? "下午" : "上午"), x.t = "T", s += 5, h = "h") : (x.t = "t", ++s), f == null && x.t === "T") return "";
        t[t.length] = x, o = c;
        break;
      case "[":
        for (i = c; e.charAt(s++) !== "]" && s < e.length; ) i += e.charAt(s);
        if (i.slice(-1) !== "]") throw 'unterminated "[" block: |' + i + "|";
        if (i.match(jn)) {
          if (f == null && (f = aa(a, r), f == null))
            return "";
          t[t.length] = { t: "Z", v: i.toLowerCase() }, o = i.charAt(1);
        } else i.indexOf("$") > -1 && (i = (i.match(/\$([^-\[\]]*)/) || [])[1] || "$", Fa(e) || (t[t.length] = { t: "t", v: i }));
        break;
      /* Numbers */
      case ".":
        if (f != null) {
          for (i = c; ++s < e.length && (c = e.charAt(s)) === "0"; ) i += c;
          t[t.length] = { t: "s", v: i };
          break;
        }
      /* falls through */
      case "0":
      case "#":
        for (i = c; ++s < e.length && "0#?.,E+-%".indexOf(c = e.charAt(s)) > -1; ) i += c;
        t[t.length] = { t: "n", v: i };
        break;
      case "?":
        for (i = c; e.charAt(++s) === c; ) i += c;
        t[t.length] = { t: c, v: i }, o = c;
        break;
      case "*":
        ++s, (e.charAt(s) == " " || e.charAt(s) == "*") && ++s;
        break;
      // **
      case "(":
      case ")":
        t[t.length] = { t: n === 1 ? "t" : c, v: c }, ++s;
        break;
      case "1":
      case "2":
      case "3":
      case "4":
      case "5":
      case "6":
      case "7":
      case "8":
      case "9":
        for (i = c; s < e.length && "0123456789".indexOf(e.charAt(++s)) > -1; ) i += e.charAt(s);
        t[t.length] = { t: "D", v: i };
        break;
      case " ":
        t[t.length] = { t: c, v: c }, ++s;
        break;
      case "$":
        t[t.length] = { t: "t", v: "$" }, ++s;
        break;
      default:
        if (",$-+/():!^&'~{}<>=€acfijklopqrtuvwxzP".indexOf(c) === -1) throw new Error("unrecognized character " + c + " in " + e);
        t[t.length] = { t: "t", v: c }, ++s;
        break;
    }
  var g = 0, O = 0, I;
  for (s = t.length - 1, o = "t"; s >= 0; --s)
    switch (t[s].t) {
      case "h":
      case "H":
        t[s].t = h, o = "h", g < 1 && (g = 1);
        break;
      case "s":
        (I = t[s].v.match(/\.0+$/)) && (O = Math.max(O, I[0].length - 1)), g < 3 && (g = 3);
      /* falls through */
      case "d":
      case "y":
      case "M":
      case "e":
        o = t[s].t;
        break;
      case "m":
        o === "s" && (t[s].t = "M", g < 2 && (g = 2));
        break;
      case "X":
        break;
      case "Z":
        g < 1 && t[s].v.match(/[Hh]/) && (g = 1), g < 2 && t[s].v.match(/[Mm]/) && (g = 2), g < 3 && t[s].v.match(/[Ss]/) && (g = 3);
    }
  switch (g) {
    case 0:
      break;
    case 1:
      f.u >= 0.5 && (f.u = 0, ++f.S), f.S >= 60 && (f.S = 0, ++f.M), f.M >= 60 && (f.M = 0, ++f.H);
      break;
    case 2:
      f.u >= 0.5 && (f.u = 0, ++f.S), f.S >= 60 && (f.S = 0, ++f.M);
      break;
  }
  var T = "", U;
  for (s = 0; s < t.length; ++s)
    switch (t[s].t) {
      case "t":
      case "T":
      case " ":
      case "D":
        break;
      case "X":
        t[s].v = "", t[s].t = ";";
        break;
      case "d":
      case "m":
      case "y":
      case "h":
      case "H":
      case "M":
      case "s":
      case "e":
      case "b":
      case "Z":
        t[s].v = js(t[s].t.charCodeAt(0), t[s].v, f, O), t[s].t = "t";
        break;
      case "n":
      case "?":
        for (U = s + 1; t[U] != null && ((c = t[U].t) === "?" || c === "D" || (c === " " || c === "t") && t[U + 1] != null && (t[U + 1].t === "?" || t[U + 1].t === "t" && t[U + 1].v === "/") || t[s].t === "(" && (c === " " || c === "n" || c === ")") || c === "t" && (t[U].v === "/" || t[U].v === " " && t[U + 1] != null && t[U + 1].t == "?")); )
          t[s].v += t[U].v, t[U] = { v: "", t: ";" }, ++U;
        T += t[s].v, s = U - 1;
        break;
      case "G":
        t[s].t = "t", t[s].v = ia(a, r);
        break;
    }
  var V = "", B, A;
  if (T.length > 0) {
    T.charCodeAt(0) == 40 ? (B = a < 0 && T.charCodeAt(0) === 45 ? -a : a, A = Wr("n", T, B)) : (B = a < 0 && n > 1 ? -a : a, A = Wr("n", T, B), B < 0 && t[0] && t[0].t == "t" && (A = A.substr(1), t[0].v = "-" + t[0].v)), U = A.length - 1;
    var _ = t.length;
    for (s = 0; s < t.length; ++s) if (t[s] != null && t[s].t != "t" && t[s].v.indexOf(".") > -1) {
      _ = s;
      break;
    }
    var m = t.length;
    if (_ === t.length && A.indexOf("E") === -1) {
      for (s = t.length - 1; s >= 0; --s)
        t[s] == null || "n?".indexOf(t[s].t) === -1 || (U >= t[s].v.length - 1 ? (U -= t[s].v.length, t[s].v = A.substr(U + 1, t[s].v.length)) : U < 0 ? t[s].v = "" : (t[s].v = A.substr(0, U + 1), U = -1), t[s].t = "t", m = s);
      U >= 0 && m < t.length && (t[m].v = A.substr(0, U + 1) + t[m].v);
    } else if (_ !== t.length && A.indexOf("E") === -1) {
      for (U = A.indexOf(".") - 1, s = _; s >= 0; --s)
        if (!(t[s] == null || "n?".indexOf(t[s].t) === -1)) {
          for (l = t[s].v.indexOf(".") > -1 && s === _ ? t[s].v.indexOf(".") - 1 : t[s].v.length - 1, V = t[s].v.substr(l + 1); l >= 0; --l)
            U >= 0 && (t[s].v.charAt(l) === "0" || t[s].v.charAt(l) === "#") && (V = A.charAt(U--) + V);
          t[s].v = V, t[s].t = "t", m = s;
        }
      for (U >= 0 && m < t.length && (t[m].v = A.substr(0, U + 1) + t[m].v), U = A.indexOf(".") + 1, s = _; s < t.length; ++s)
        if (!(t[s] == null || "n?(".indexOf(t[s].t) === -1 && s !== _)) {
          for (l = t[s].v.indexOf(".") > -1 && s === _ ? t[s].v.indexOf(".") + 1 : 0, V = t[s].v.substr(0, l); l < t[s].v.length; ++l)
            U < A.length && (V += A.charAt(U++));
          t[s].v = V, t[s].t = "t", m = s;
        }
    }
  }
  for (s = 0; s < t.length; ++s) t[s] != null && "n?".indexOf(t[s].t) > -1 && (B = n > 1 && a < 0 && s > 0 && t[s - 1].v === "-" ? -a : a, t[s].v = Wr(t[s].t, t[s].v, B), t[s].t = "t");
  var R = "";
  for (s = 0; s !== t.length; ++s) t[s] != null && (R += t[s].v);
  return R;
}
var H0 = /\[(=|>[=]?|<[>=]?)(-?\d+(?:\.\d*)?)\]/;
function W0(e, a) {
  if (a == null) return !1;
  var r = parseFloat(a[2]);
  switch (a[1]) {
    case "=":
      if (e == r) return !0;
      break;
    case ">":
      if (e > r) return !0;
      break;
    case "<":
      if (e < r) return !0;
      break;
    case "<>":
      if (e != r) return !0;
      break;
    case ">=":
      if (e >= r) return !0;
      break;
    case "<=":
      if (e <= r) return !0;
      break;
  }
  return !1;
}
function sc(e, a) {
  var r = nc(e), n = r.length, t = r[n - 1].indexOf("@");
  if (n < 4 && t > -1 && --n, r.length > 4) throw new Error("cannot find right format for |" + r.join("|") + "|");
  if (typeof a != "number") return [4, r.length === 4 || t > -1 ? r[r.length - 1] : "@"];
  switch (r.length) {
    case 1:
      r = t > -1 ? ["General", "General", "General", r[0]] : [r[0], r[0], r[0], "@"];
      break;
    case 2:
      r = t > -1 ? [r[0], r[0], r[0], r[1]] : [r[0], r[1], r[0], "@"];
      break;
    case 3:
      r = t > -1 ? [r[0], r[1], r[0], r[2]] : [r[0], r[1], r[2], "@"];
      break;
  }
  var i = a > 0 ? r[0] : a < 0 ? r[1] : r[2];
  if (r[0].indexOf("[") === -1 && r[1].indexOf("[") === -1) return [n, i];
  if (r[0].match(/\[[=<>]/) != null || r[1].match(/\[[=<>]/) != null) {
    var s = r[0].match(H0), c = r[1].match(H0);
    return W0(a, s) ? [n, r[0]] : W0(a, c) ? [n, r[1]] : [n, r[s != null && c != null ? 2 : 1]];
  }
  return [n, i];
}
function Fr(e, a, r) {
  r == null && (r = {});
  var n = "";
  switch (typeof e) {
    case "string":
      e == "m/d/yy" && r.dateNF ? n = r.dateNF : n = e;
      break;
    case "number":
      e == 14 && r.dateNF ? n = r.dateNF : n = (r.table != null ? r.table : Ee)[e], n == null && (n = r.table && r.table[M0[e]] || Ee[M0[e]]), n == null && (n = Vs[e] || "General");
      break;
  }
  if (gt(n, 0)) return ia(a, r);
  a instanceof Date && (a = Wn(a, r.date1904));
  var t = sc(n, a);
  if (gt(t[1])) return ia(a, r);
  if (a === !0) a = "TRUE";
  else if (a === !1) a = "FALSE";
  else if (a === "" || a == null) return "";
  return ic(t[1], a, r, t[0]);
}
function ta(e, a) {
  if (typeof a != "number") {
    a = +a || -1;
    for (var r = 0; r < 392; ++r) {
      if (Ee[r] == null) {
        a < 0 && (a = r);
        continue;
      }
      if (Ee[r] == e) {
        a = r;
        break;
      }
    }
    a < 0 && (a = 391);
  }
  return Ee[a] = e, a;
}
function Jn() {
  Ee = Ws();
}
var cc = {
  5: '"$"#,##0_);\\("$"#,##0\\)',
  6: '"$"#,##0_);[Red]\\("$"#,##0\\)',
  7: '"$"#,##0.00_);\\("$"#,##0.00\\)',
  8: '"$"#,##0.00_);[Red]\\("$"#,##0.00\\)',
  23: "General",
  24: "General",
  25: "General",
  26: "General",
  27: "m/d/yy",
  28: "m/d/yy",
  29: "m/d/yy",
  30: "m/d/yy",
  31: "m/d/yy",
  32: "h:mm:ss",
  33: "h:mm:ss",
  34: "h:mm:ss",
  35: "h:mm:ss",
  36: "m/d/yy",
  41: '_(* #,##0_);_(* (#,##0);_(* "-"_);_(@_)',
  42: '_("$"* #,##0_);_("$"* (#,##0);_("$"* "-"_);_(@_)',
  43: '_(* #,##0.00_);_(* (#,##0.00);_(* "-"??_);_(@_)',
  44: '_("$"* #,##0.00_);_("$"* (#,##0.00);_("$"* "-"??_);_(@_)',
  50: "m/d/yy",
  51: "m/d/yy",
  52: "m/d/yy",
  53: "m/d/yy",
  54: "m/d/yy",
  55: "m/d/yy",
  56: "m/d/yy",
  57: "m/d/yy",
  58: "m/d/yy",
  59: "0",
  60: "0.00",
  61: "#,##0",
  62: "#,##0.00",
  63: '"$"#,##0_);\\("$"#,##0\\)',
  64: '"$"#,##0_);[Red]\\("$"#,##0\\)',
  65: '"$"#,##0.00_);\\("$"#,##0.00\\)',
  66: '"$"#,##0.00_);[Red]\\("$"#,##0.00\\)',
  67: "0%",
  68: "0.00%",
  69: "# ?/?",
  70: "# ??/??",
  71: "m/d/yy",
  72: "m/d/yy",
  73: "d-mmm-yy",
  74: "d-mmm",
  75: "mmm-yy",
  76: "h:mm",
  77: "h:mm:ss",
  78: "m/d/yy h:mm",
  79: "mm:ss",
  80: "[h]:mm:ss",
  81: "mmss.0"
}, qn = /[dD]+|[mM]+|[yYeE]+|[Hh]+|[Ss]+/g;
function fc(e) {
  var a = typeof e == "number" ? Ee[e] : e;
  return a = a.replace(qn, "(\\d+)"), new RegExp("^" + a + "$");
}
function oc(e, a, r) {
  var n = -1, t = -1, i = -1, s = -1, c = -1, o = -1;
  (a.match(qn) || []).forEach(function(u, h) {
    var d = parseInt(r[h + 1], 10);
    switch (u.toLowerCase().charAt(0)) {
      case "y":
        n = d;
        break;
      case "d":
        i = d;
        break;
      case "h":
        s = d;
        break;
      case "s":
        o = d;
        break;
      case "m":
        s >= 0 ? c = d : t = d;
        break;
    }
  }), o >= 0 && c == -1 && t >= 0 && (c = t, t = -1);
  var f = ("" + (n >= 0 ? n : (/* @__PURE__ */ new Date()).getFullYear())).slice(-4) + "-" + ("00" + (t >= 1 ? t : 1)).slice(-2) + "-" + ("00" + (i >= 1 ? i : 1)).slice(-2);
  f.length == 7 && (f = "0" + f), f.length == 8 && (f = "20" + f);
  var l = ("00" + (s >= 0 ? s : 0)).slice(-2) + ":" + ("00" + (c >= 0 ? c : 0)).slice(-2) + ":" + ("00" + (o >= 0 ? o : 0)).slice(-2);
  return s == -1 && c == -1 && o == -1 ? f : n == -1 && t == -1 && i == -1 ? l : f + "T" + l;
}
var lc = /* @__PURE__ */ (function() {
  var e = {};
  e.version = "1.2.0";
  function a() {
    for (var A = 0, _ = new Array(256), m = 0; m != 256; ++m)
      A = m, A = A & 1 ? -306674912 ^ A >>> 1 : A >>> 1, A = A & 1 ? -306674912 ^ A >>> 1 : A >>> 1, A = A & 1 ? -306674912 ^ A >>> 1 : A >>> 1, A = A & 1 ? -306674912 ^ A >>> 1 : A >>> 1, A = A & 1 ? -306674912 ^ A >>> 1 : A >>> 1, A = A & 1 ? -306674912 ^ A >>> 1 : A >>> 1, A = A & 1 ? -306674912 ^ A >>> 1 : A >>> 1, A = A & 1 ? -306674912 ^ A >>> 1 : A >>> 1, _[m] = A;
    return typeof Int32Array < "u" ? new Int32Array(_) : _;
  }
  var r = a();
  function n(A) {
    var _ = 0, m = 0, R = 0, L = typeof Int32Array < "u" ? new Int32Array(4096) : new Array(4096);
    for (R = 0; R != 256; ++R) L[R] = A[R];
    for (R = 0; R != 256; ++R)
      for (m = A[R], _ = 256 + R; _ < 4096; _ += 256) m = L[_] = m >>> 8 ^ A[m & 255];
    var D = [];
    for (R = 1; R != 16; ++R) D[R - 1] = typeof Int32Array < "u" ? L.subarray(R * 256, R * 256 + 256) : L.slice(R * 256, R * 256 + 256);
    return D;
  }
  var t = n(r), i = t[0], s = t[1], c = t[2], o = t[3], f = t[4], l = t[5], u = t[6], h = t[7], d = t[8], p = t[9], x = t[10], g = t[11], O = t[12], I = t[13], T = t[14];
  function U(A, _) {
    for (var m = _ ^ -1, R = 0, L = A.length; R < L; ) m = m >>> 8 ^ r[(m ^ A.charCodeAt(R++)) & 255];
    return ~m;
  }
  function V(A, _) {
    for (var m = _ ^ -1, R = A.length - 15, L = 0; L < R; ) m = T[A[L++] ^ m & 255] ^ I[A[L++] ^ m >> 8 & 255] ^ O[A[L++] ^ m >> 16 & 255] ^ g[A[L++] ^ m >>> 24] ^ x[A[L++]] ^ p[A[L++]] ^ d[A[L++]] ^ h[A[L++]] ^ u[A[L++]] ^ l[A[L++]] ^ f[A[L++]] ^ o[A[L++]] ^ c[A[L++]] ^ s[A[L++]] ^ i[A[L++]] ^ r[A[L++]];
    for (R += 15; L < R; ) m = m >>> 8 ^ r[(m ^ A[L++]) & 255];
    return ~m;
  }
  function B(A, _) {
    for (var m = _ ^ -1, R = 0, L = A.length, D = 0, z = 0; R < L; )
      D = A.charCodeAt(R++), D < 128 ? m = m >>> 8 ^ r[(m ^ D) & 255] : D < 2048 ? (m = m >>> 8 ^ r[(m ^ (192 | D >> 6 & 31)) & 255], m = m >>> 8 ^ r[(m ^ (128 | D & 63)) & 255]) : D >= 55296 && D < 57344 ? (D = (D & 1023) + 64, z = A.charCodeAt(R++) & 1023, m = m >>> 8 ^ r[(m ^ (240 | D >> 8 & 7)) & 255], m = m >>> 8 ^ r[(m ^ (128 | D >> 2 & 63)) & 255], m = m >>> 8 ^ r[(m ^ (128 | z >> 6 & 15 | (D & 3) << 4)) & 255], m = m >>> 8 ^ r[(m ^ (128 | z & 63)) & 255]) : (m = m >>> 8 ^ r[(m ^ (224 | D >> 12 & 15)) & 255], m = m >>> 8 ^ r[(m ^ (128 | D >> 6 & 63)) & 255], m = m >>> 8 ^ r[(m ^ (128 | D & 63)) & 255]);
    return ~m;
  }
  return e.table = r, e.bstr = U, e.buf = V, e.str = B, e;
})(), Fe = /* @__PURE__ */ (function() {
  var a = {};
  a.version = "1.2.1";
  function r(v, F) {
    for (var E = v.split("/"), k = F.split("/"), S = 0, y = 0, W = Math.min(E.length, k.length); S < W; ++S) {
      if (y = E[S].length - k[S].length) return y;
      if (E[S] != k[S]) return E[S] < k[S] ? -1 : 1;
    }
    return E.length - k.length;
  }
  function n(v) {
    if (v.charAt(v.length - 1) == "/") return v.slice(0, -1).indexOf("/") === -1 ? v : n(v.slice(0, -1));
    var F = v.lastIndexOf("/");
    return F === -1 ? v : v.slice(0, F + 1);
  }
  function t(v) {
    if (v.charAt(v.length - 1) == "/") return t(v.slice(0, -1));
    var F = v.lastIndexOf("/");
    return F === -1 ? v : v.slice(F + 1);
  }
  function i(v, F) {
    typeof F == "string" && (F = new Date(F));
    var E = F.getHours();
    E = E << 6 | F.getMinutes(), E = E << 5 | F.getSeconds() >>> 1, v.write_shift(2, E);
    var k = F.getFullYear() - 1980;
    k = k << 4 | F.getMonth() + 1, k = k << 5 | F.getDate(), v.write_shift(2, k);
  }
  function s(v) {
    var F = v.read_shift(2) & 65535, E = v.read_shift(2) & 65535, k = /* @__PURE__ */ new Date(), S = E & 31;
    E >>>= 5;
    var y = E & 15;
    E >>>= 4, k.setMilliseconds(0), k.setFullYear(E + 1980), k.setMonth(y - 1), k.setDate(S);
    var W = F & 31;
    F >>>= 5;
    var Y = F & 63;
    return F >>>= 6, k.setHours(F), k.setMinutes(Y), k.setSeconds(W << 1), k;
  }
  function c(v) {
    Ze(v, 0);
    for (var F = (
      /*::(*/
      {}
    ), E = 0; v.l <= v.length - 4; ) {
      var k = v.read_shift(2), S = v.read_shift(2), y = v.l + S, W = {};
      k === 21589 && (E = v.read_shift(1), E & 1 && (W.mtime = v.read_shift(4)), S > 5 && (E & 2 && (W.atime = v.read_shift(4)), E & 4 && (W.ctime = v.read_shift(4))), W.mtime && (W.mt = new Date(W.mtime * 1e3))), v.l = y, F[k] = W;
    }
    return F;
  }
  var o;
  function f() {
    return o || (o = {});
  }
  function l(v, F) {
    if (v[0] == 80 && v[1] == 75) return D0(v, F);
    if ((v[0] | 32) == 109 && (v[1] | 32) == 105) return Ss(v, F);
    if (v.length < 512) throw new Error("CFB file size " + v.length + " < 512");
    var E = 3, k = 512, S = 0, y = 0, W = 0, Y = 0, H = 0, G = [], X = (
      /*::(*/
      v.slice(0, 512)
    );
    Ze(X, 0);
    var Q = u(X);
    switch (E = Q[0], E) {
      case 3:
        k = 512;
        break;
      case 4:
        k = 4096;
        break;
      case 0:
        if (Q[1] == 0) return D0(v, F);
      /* falls through */
      default:
        throw new Error("Major Version: Expected 3 or 4 saw " + E);
    }
    k !== 512 && (X = /*::(*/
    v.slice(0, k), Ze(
      X,
      28
      /* blob.l */
    ));
    var ce = v.slice(0, k);
    h(X, E);
    var ue = X.read_shift(4, "i");
    if (E === 3 && ue !== 0) throw new Error("# Directory Sectors: Expected 0 saw " + ue);
    X.l += 4, W = X.read_shift(4, "i"), X.l += 4, X.chk("00100000", "Mini Stream Cutoff Size: "), Y = X.read_shift(4, "i"), S = X.read_shift(4, "i"), H = X.read_shift(4, "i"), y = X.read_shift(4, "i");
    for (var ae = -1, le = 0; le < 109 && (ae = X.read_shift(4, "i"), !(ae < 0)); ++le)
      G[le] = ae;
    var _e = d(v, k);
    g(H, y, _e, k, G);
    var be = I(_e, W, G, k);
    be[W].name = "!Directory", S > 0 && Y !== z && (be[Y].name = "!MiniFAT"), be[G[0]].name = "!FAT", be.fat_addrs = G, be.ssz = k;
    var Me = {}, tr = [], ya = [], Oa = [];
    T(W, be, _e, tr, S, Me, ya, Y), p(ya, Oa, tr), tr.shift();
    var Da = {
      FileIndex: ya,
      FullPaths: Oa
    };
    return F && F.raw && (Da.raw = { header: ce, sectors: _e }), Da;
  }
  function u(v) {
    if (v[v.l] == 80 && v[v.l + 1] == 75) return [0, 0];
    v.chk(ie, "Header Signature: "), v.l += 16;
    var F = v.read_shift(2, "u");
    return [v.read_shift(2, "u"), F];
  }
  function h(v, F) {
    var E = 9;
    switch (v.l += 2, E = v.read_shift(2)) {
      case 9:
        if (F != 3) throw new Error("Sector Shift: Expected 9 saw " + E);
        break;
      case 12:
        if (F != 4) throw new Error("Sector Shift: Expected 12 saw " + E);
        break;
      default:
        throw new Error("Sector Shift: Expected 9 or 12 saw " + E);
    }
    v.chk("0600", "Mini Sector Shift: "), v.chk("000000000000", "Reserved: ");
  }
  function d(v, F) {
    for (var E = Math.ceil(v.length / F) - 1, k = [], S = 1; S < E; ++S) k[S - 1] = v.slice(S * F, (S + 1) * F);
    return k[E - 1] = v.slice(E * F), k;
  }
  function p(v, F, E) {
    for (var k = 0, S = 0, y = 0, W = 0, Y = 0, H = E.length, G = [], X = []; k < H; ++k)
      G[k] = X[k] = k, F[k] = E[k];
    for (; Y < X.length; ++Y)
      k = X[Y], S = v[k].L, y = v[k].R, W = v[k].C, G[k] === k && (S !== -1 && G[S] !== S && (G[k] = G[S]), y !== -1 && G[y] !== y && (G[k] = G[y])), W !== -1 && (G[W] = k), S !== -1 && k != G[k] && (G[S] = G[k], X.lastIndexOf(S) < Y && X.push(S)), y !== -1 && k != G[k] && (G[y] = G[k], X.lastIndexOf(y) < Y && X.push(y));
    for (k = 1; k < H; ++k) G[k] === k && (y !== -1 && G[y] !== y ? G[k] = G[y] : S !== -1 && G[S] !== S && (G[k] = G[S]));
    for (k = 1; k < H; ++k)
      if (v[k].type !== 0) {
        if (Y = k, Y != G[Y]) do
          Y = G[Y], F[k] = F[Y] + "/" + F[k];
        while (Y !== 0 && G[Y] !== -1 && Y != G[Y]);
        G[k] = -1;
      }
    for (F[0] += "/", k = 1; k < H; ++k)
      v[k].type !== 2 && (F[k] += "/");
  }
  function x(v, F, E) {
    for (var k = v.start, S = v.size, y = [], W = k; E && S > 0 && W >= 0; )
      y.push(F.slice(W * D, W * D + D)), S -= D, W = ra(E, W * 4);
    return y.length === 0 ? Ke(0) : Kr(y).slice(0, v.size);
  }
  function g(v, F, E, k, S) {
    var y = z;
    if (v === z) {
      if (F !== 0) throw new Error("DIFAT chain shorter than expected");
    } else if (v !== -1) {
      var W = E[v], Y = (k >>> 2) - 1;
      if (!W) return;
      for (var H = 0; H < Y && (y = ra(W, H * 4)) !== z; ++H)
        S.push(y);
      g(ra(W, k - 4), F - 1, E, k, S);
    }
  }
  function O(v, F, E, k, S) {
    var y = [], W = [];
    S || (S = []);
    var Y = k - 1, H = 0, G = 0;
    for (H = F; H >= 0; ) {
      S[H] = !0, y[y.length] = H, W.push(v[H]);
      var X = E[Math.floor(H * 4 / k)];
      if (G = H * 4 & Y, k < 4 + G) throw new Error("FAT boundary crossed: " + H + " 4 " + k);
      if (!v[X]) break;
      H = ra(v[X], G);
    }
    return { nodes: y, data: q0([W]) };
  }
  function I(v, F, E, k) {
    var S = v.length, y = [], W = [], Y = [], H = [], G = k - 1, X = 0, Q = 0, ce = 0, ue = 0;
    for (X = 0; X < S; ++X)
      if (Y = [], ce = X + F, ce >= S && (ce -= S), !W[ce]) {
        H = [];
        var ae = [];
        for (Q = ce; Q >= 0; ) {
          ae[Q] = !0, W[Q] = !0, Y[Y.length] = Q, H.push(v[Q]);
          var le = E[Math.floor(Q * 4 / k)];
          if (ue = Q * 4 & G, k < 4 + ue) throw new Error("FAT boundary crossed: " + Q + " 4 " + k);
          if (!v[le] || (Q = ra(v[le], ue), ae[Q])) break;
        }
        y[ce] = { nodes: Y, data: q0([H]) };
      }
    return y;
  }
  function T(v, F, E, k, S, y, W, Y) {
    for (var H = 0, G = k.length ? 2 : 0, X = F[v].data, Q = 0, ce = 0, ue; Q < X.length; Q += 128) {
      var ae = (
        /*::(*/
        X.slice(Q, Q + 128)
      );
      Ze(ae, 64), ce = ae.read_shift(2), ue = o0(ae, 0, ce - G), k.push(ue);
      var le = {
        name: ue,
        type: ae.read_shift(1),
        color: ae.read_shift(1),
        L: ae.read_shift(4, "i"),
        R: ae.read_shift(4, "i"),
        C: ae.read_shift(4, "i"),
        clsid: ae.read_shift(16),
        state: ae.read_shift(4, "i"),
        start: 0,
        size: 0
      }, _e = ae.read_shift(2) + ae.read_shift(2) + ae.read_shift(2) + ae.read_shift(2);
      _e !== 0 && (le.ct = U(ae, ae.l - 8));
      var be = ae.read_shift(2) + ae.read_shift(2) + ae.read_shift(2) + ae.read_shift(2);
      be !== 0 && (le.mt = U(ae, ae.l - 8)), le.start = ae.read_shift(4, "i"), le.size = ae.read_shift(4, "i"), le.size < 0 && le.start < 0 && (le.size = le.type = 0, le.start = z, le.name = ""), le.type === 5 ? (H = le.start, S > 0 && H !== z && (F[H].name = "!StreamData")) : le.size >= 4096 ? (le.storage = "fat", F[le.start] === void 0 && (F[le.start] = O(E, le.start, F.fat_addrs, F.ssz)), F[le.start].name = le.name, le.content = F[le.start].data.slice(0, le.size)) : (le.storage = "minifat", le.size < 0 ? le.size = 0 : H !== z && le.start !== z && F[H] && (le.content = x(le, F[H].data, (F[Y] || {}).data))), le.content && Ze(le.content, 0), y[ue] = le, W.push(le);
    }
  }
  function U(v, F) {
    return new Date((_r(v, F + 4) / 1e7 * Math.pow(2, 32) + _r(v, F) / 1e7 - 11644473600) * 1e3);
  }
  function V(v, F) {
    return f(), l(o.readFileSync(v), F);
  }
  function B(v, F) {
    var E = F && F.type;
    switch (E || Ae && Buffer.isBuffer(v) && (E = "buffer"), E || "base64") {
      case "file":
        return V(v, F);
      case "base64":
        return l(Or(Tr(v)), F);
      case "binary":
        return l(Or(v), F);
    }
    return l(
      /*::typeof blob == 'string' ? new Buffer(blob, 'utf-8') : */
      v,
      F
    );
  }
  function A(v, F) {
    var E = F || {}, k = E.root || "Root Entry";
    if (v.FullPaths || (v.FullPaths = []), v.FileIndex || (v.FileIndex = []), v.FullPaths.length !== v.FileIndex.length) throw new Error("inconsistent CFB structure");
    v.FullPaths.length === 0 && (v.FullPaths[0] = k + "/", v.FileIndex[0] = { name: k, type: 5 }), E.CLSID && (v.FileIndex[0].clsid = E.CLSID), _(v);
  }
  function _(v) {
    var F = "Sh33tJ5";
    if (!Fe.find(v, "/" + F)) {
      var E = Ke(4);
      E[0] = 55, E[1] = E[3] = 50, E[2] = 54, v.FileIndex.push({ name: F, type: 2, content: E, size: 4, L: 69, R: 69, C: 69 }), v.FullPaths.push(v.FullPaths[0] + F), m(v);
    }
  }
  function m(v, F) {
    A(v);
    for (var E = !1, k = !1, S = v.FullPaths.length - 1; S >= 0; --S) {
      var y = v.FileIndex[S];
      switch (y.type) {
        case 0:
          k ? E = !0 : (v.FileIndex.pop(), v.FullPaths.pop());
          break;
        case 1:
        case 2:
        case 5:
          k = !0, isNaN(y.R * y.L * y.C) && (E = !0), y.R > -1 && y.L > -1 && y.R == y.L && (E = !0);
          break;
        default:
          E = !0;
          break;
      }
    }
    if (!(!E && !F)) {
      var W = new Date(1987, 1, 19), Y = 0, H = Object.create ? /* @__PURE__ */ Object.create(null) : {}, G = [];
      for (S = 0; S < v.FullPaths.length; ++S)
        H[v.FullPaths[S]] = !0, v.FileIndex[S].type !== 0 && G.push([v.FullPaths[S], v.FileIndex[S]]);
      for (S = 0; S < G.length; ++S) {
        var X = n(G[S][0]);
        k = H[X], k || (G.push([X, {
          name: t(X).replace("/", ""),
          type: 1,
          clsid: fe,
          ct: W,
          mt: W,
          content: null
        }]), H[X] = !0);
      }
      for (G.sort(function(ue, ae) {
        return r(ue[0], ae[0]);
      }), v.FullPaths = [], v.FileIndex = [], S = 0; S < G.length; ++S)
        v.FullPaths[S] = G[S][0], v.FileIndex[S] = G[S][1];
      for (S = 0; S < G.length; ++S) {
        var Q = v.FileIndex[S], ce = v.FullPaths[S];
        if (Q.name = t(ce).replace("/", ""), Q.L = Q.R = Q.C = -(Q.color = 1), Q.size = Q.content ? Q.content.length : 0, Q.start = 0, Q.clsid = Q.clsid || fe, S === 0)
          Q.C = G.length > 1 ? 1 : -1, Q.size = 0, Q.type = 5;
        else if (ce.slice(-1) == "/") {
          for (Y = S + 1; Y < G.length && n(v.FullPaths[Y]) != ce; ++Y) ;
          for (Q.C = Y >= G.length ? -1 : Y, Y = S + 1; Y < G.length && n(v.FullPaths[Y]) != n(ce); ++Y) ;
          Q.R = Y >= G.length ? -1 : Y, Q.type = 1;
        } else
          n(v.FullPaths[S + 1] || "") == n(ce) && (Q.R = S + 1), Q.type = 2;
      }
    }
  }
  function R(v, F) {
    var E = F || {};
    if (E.fileType == "mad") return Cs(v, E);
    if (m(v), E.fileType === "zip")
      return Es(v, E);
    var k = (function(ue) {
      for (var ae = 0, le = 0, _e = 0; _e < ue.FileIndex.length; ++_e) {
        var be = ue.FileIndex[_e];
        if (be.content) {
          var Me = be.content.length;
          Me > 0 && (Me < 4096 ? ae += Me + 63 >> 6 : le += Me + 511 >> 9);
        }
      }
      for (var tr = ue.FullPaths.length + 3 >> 2, ya = ae + 7 >> 3, Oa = ae + 127 >> 7, Da = ya + le + tr + Oa, ea = Da + 127 >> 7, It = ea <= 109 ? 0 : Math.ceil((ea - 109) / 127); Da + ea + It + 127 >> 7 > ea; ) It = ++ea <= 109 ? 0 : Math.ceil((ea - 109) / 127);
      var Ur = [1, It, ea, Oa, tr, le, ae, 0];
      return ue.FileIndex[0].size = ae << 6, Ur[7] = (ue.FileIndex[0].start = Ur[0] + Ur[1] + Ur[2] + Ur[3] + Ur[4] + Ur[5]) + (Ur[6] + 7 >> 3), Ur;
    })(v), S = Ke(k[7] << 9), y = 0, W = 0;
    {
      for (y = 0; y < 8; ++y) S.write_shift(1, re[y]);
      for (y = 0; y < 8; ++y) S.write_shift(2, 0);
      for (S.write_shift(2, 62), S.write_shift(2, 3), S.write_shift(2, 65534), S.write_shift(2, 9), S.write_shift(2, 6), y = 0; y < 3; ++y) S.write_shift(2, 0);
      for (S.write_shift(4, 0), S.write_shift(4, k[2]), S.write_shift(4, k[0] + k[1] + k[2] + k[3] - 1), S.write_shift(4, 0), S.write_shift(4, 4096), S.write_shift(4, k[3] ? k[0] + k[1] + k[2] - 1 : z), S.write_shift(4, k[3]), S.write_shift(-4, k[1] ? k[0] - 1 : z), S.write_shift(4, k[1]), y = 0; y < 109; ++y) S.write_shift(-4, y < k[2] ? k[1] + y : -1);
    }
    if (k[1])
      for (W = 0; W < k[1]; ++W) {
        for (; y < 236 + W * 127; ++y) S.write_shift(-4, y < k[2] ? k[1] + y : -1);
        S.write_shift(-4, W === k[1] - 1 ? z : W + 1);
      }
    var Y = function(ue) {
      for (W += ue; y < W - 1; ++y) S.write_shift(-4, y + 1);
      ue && (++y, S.write_shift(-4, z));
    };
    for (W = y = 0, W += k[1]; y < W; ++y) S.write_shift(-4, q.DIFSECT);
    for (W += k[2]; y < W; ++y) S.write_shift(-4, q.FATSECT);
    Y(k[3]), Y(k[4]);
    for (var H = 0, G = 0, X = v.FileIndex[0]; H < v.FileIndex.length; ++H)
      X = v.FileIndex[H], X.content && (G = X.content.length, !(G < 4096) && (X.start = W, Y(G + 511 >> 9)));
    for (Y(k[6] + 7 >> 3); S.l & 511; ) S.write_shift(-4, q.ENDOFCHAIN);
    for (W = y = 0, H = 0; H < v.FileIndex.length; ++H)
      X = v.FileIndex[H], X.content && (G = X.content.length, !(!G || G >= 4096) && (X.start = W, Y(G + 63 >> 6)));
    for (; S.l & 511; ) S.write_shift(-4, q.ENDOFCHAIN);
    for (y = 0; y < k[4] << 2; ++y) {
      var Q = v.FullPaths[y];
      if (!Q || Q.length === 0) {
        for (H = 0; H < 17; ++H) S.write_shift(4, 0);
        for (H = 0; H < 3; ++H) S.write_shift(4, -1);
        for (H = 0; H < 12; ++H) S.write_shift(4, 0);
        continue;
      }
      X = v.FileIndex[y], y === 0 && (X.start = X.size ? X.start - 1 : z);
      var ce = y === 0 && E.root || X.name;
      if (G = 2 * (ce.length + 1), S.write_shift(64, ce, "utf16le"), S.write_shift(2, G), S.write_shift(1, X.type), S.write_shift(1, X.color), S.write_shift(-4, X.L), S.write_shift(-4, X.R), S.write_shift(-4, X.C), X.clsid) S.write_shift(16, X.clsid, "hex");
      else for (H = 0; H < 4; ++H) S.write_shift(4, 0);
      S.write_shift(4, X.state || 0), S.write_shift(4, 0), S.write_shift(4, 0), S.write_shift(4, 0), S.write_shift(4, 0), S.write_shift(4, X.start), S.write_shift(4, X.size), S.write_shift(4, 0);
    }
    for (y = 1; y < v.FileIndex.length; ++y)
      if (X = v.FileIndex[y], X.size >= 4096)
        if (S.l = X.start + 1 << 9, Ae && Buffer.isBuffer(X.content))
          X.content.copy(S, S.l, 0, X.size), S.l += X.size + 511 & -512;
        else {
          for (H = 0; H < X.size; ++H) S.write_shift(1, X.content[H]);
          for (; H & 511; ++H) S.write_shift(1, 0);
        }
    for (y = 1; y < v.FileIndex.length; ++y)
      if (X = v.FileIndex[y], X.size > 0 && X.size < 4096)
        if (Ae && Buffer.isBuffer(X.content))
          X.content.copy(S, S.l, 0, X.size), S.l += X.size + 63 & -64;
        else {
          for (H = 0; H < X.size; ++H) S.write_shift(1, X.content[H]);
          for (; H & 63; ++H) S.write_shift(1, 0);
        }
    if (Ae)
      S.l = S.length;
    else
      for (; S.l < S.length; ) S.write_shift(1, 0);
    return S;
  }
  function L(v, F) {
    var E = v.FullPaths.map(function(H) {
      return H.toUpperCase();
    }), k = E.map(function(H) {
      var G = H.split("/");
      return G[G.length - (H.slice(-1) == "/" ? 2 : 1)];
    }), S = !1;
    F.charCodeAt(0) === 47 ? (S = !0, F = E[0].slice(0, -1) + F) : S = F.indexOf("/") !== -1;
    var y = F.toUpperCase(), W = S === !0 ? E.indexOf(y) : k.indexOf(y);
    if (W !== -1) return v.FileIndex[W];
    var Y = !y.match(Ia);
    for (y = y.replace(dr, ""), Y && (y = y.replace(Ia, "!")), W = 0; W < E.length; ++W)
      if ((Y ? E[W].replace(Ia, "!") : E[W]).replace(dr, "") == y || (Y ? k[W].replace(Ia, "!") : k[W]).replace(dr, "") == y) return v.FileIndex[W];
    return null;
  }
  var D = 64, z = -2, ie = "d0cf11e0a1b11ae1", re = [208, 207, 17, 224, 161, 177, 26, 225], fe = "00000000000000000000000000000000", q = {
    /* 2.1 Compund File Sector Numbers and Types */
    MAXREGSECT: -6,
    DIFSECT: -4,
    FATSECT: -3,
    ENDOFCHAIN: z,
    FREESECT: -1,
    /* 2.2 Compound File Header */
    HEADER_SIGNATURE: ie,
    HEADER_MINOR_VERSION: "3e00",
    MAXREGSID: -6,
    NOSTREAM: -1,
    HEADER_CLSID: fe,
    /* 2.6.1 Compound File Directory Entry */
    EntryTypes: ["unknown", "storage", "stream", "lockbytes", "property", "root"]
  };
  function ve(v, F, E) {
    f();
    var k = R(v, E);
    o.writeFileSync(F, k);
  }
  function M(v) {
    for (var F = new Array(v.length), E = 0; E < v.length; ++E) F[E] = String.fromCharCode(v[E]);
    return F.join("");
  }
  function he(v, F) {
    var E = R(v, F);
    switch (F && F.type || "buffer") {
      case "file":
        return f(), o.writeFileSync(F.filename, E), E;
      case "binary":
        return typeof E == "string" ? E : M(E);
      case "base64":
        return N0(typeof E == "string" ? E : M(E));
      case "buffer":
        if (Ae) return Buffer.isBuffer(E) ? E : fa(E);
      /* falls through */
      case "array":
        return typeof E == "string" ? Or(E) : E;
    }
    return E;
  }
  var te;
  function w(v) {
    try {
      var F = v.InflateRaw, E = new F();
      if (E._processChunk(new Uint8Array([3, 0]), E._finishFlushFlag), E.bytesRead) te = v;
      else throw new Error("zlib does not expose bytesRead");
    } catch (k) {
      console.error("cannot use native zlib: " + (k.message || k));
    }
  }
  function P(v, F) {
    if (!te) return y0(v, F);
    var E = te.InflateRaw, k = new E(), S = k._processChunk(v.slice(v.l), k._finishFlushFlag);
    return v.l += k.bytesRead, S;
  }
  function b(v) {
    return te ? te.deflateRawSync(v) : ke(v);
  }
  var N = [16, 17, 18, 0, 8, 7, 9, 6, 10, 5, 11, 4, 12, 3, 13, 2, 14, 1, 15], K = [3, 4, 5, 6, 7, 8, 9, 10, 11, 13, 15, 17, 19, 23, 27, 31, 35, 43, 51, 59, 67, 83, 99, 115, 131, 163, 195, 227, 258], ee = [1, 2, 3, 4, 5, 7, 9, 13, 17, 25, 33, 49, 65, 97, 129, 193, 257, 385, 513, 769, 1025, 1537, 2049, 3073, 4097, 6145, 8193, 12289, 16385, 24577];
  function Z(v) {
    var F = (v << 1 | v << 11) & 139536 | (v << 5 | v << 15) & 558144;
    return (F >> 16 | F >> 8 | F) & 255;
  }
  for (var J = typeof Uint8Array < "u", j = J ? new Uint8Array(256) : [], se = 0; se < 256; ++se) j[se] = Z(se);
  function C(v, F) {
    var E = j[v & 255];
    return F <= 8 ? E >>> 8 - F : (E = E << 8 | j[v >> 8 & 255], F <= 16 ? E >>> 16 - F : (E = E << 8 | j[v >> 16 & 255], E >>> 24 - F));
  }
  function Te(v, F) {
    var E = F & 7, k = F >>> 3;
    return (v[k] | (E <= 6 ? 0 : v[k + 1] << 8)) >>> E & 3;
  }
  function de(v, F) {
    var E = F & 7, k = F >>> 3;
    return (v[k] | (E <= 5 ? 0 : v[k + 1] << 8)) >>> E & 7;
  }
  function pe(v, F) {
    var E = F & 7, k = F >>> 3;
    return (v[k] | (E <= 4 ? 0 : v[k + 1] << 8)) >>> E & 15;
  }
  function oe(v, F) {
    var E = F & 7, k = F >>> 3;
    return (v[k] | (E <= 3 ? 0 : v[k + 1] << 8)) >>> E & 31;
  }
  function ne(v, F) {
    var E = F & 7, k = F >>> 3;
    return (v[k] | (E <= 1 ? 0 : v[k + 1] << 8)) >>> E & 127;
  }
  function xe(v, F, E) {
    var k = F & 7, S = F >>> 3, y = (1 << E) - 1, W = v[S] >>> k;
    return E < 8 - k || (W |= v[S + 1] << 8 - k, E < 16 - k) || (W |= v[S + 2] << 16 - k, E < 24 - k) || (W |= v[S + 3] << 24 - k), W & y;
  }
  function we(v, F, E) {
    var k = F & 7, S = F >>> 3;
    return k <= 5 ? v[S] |= (E & 7) << k : (v[S] |= E << k & 255, v[S + 1] = (E & 7) >> 8 - k), F + 3;
  }
  function $e(v, F, E) {
    var k = F & 7, S = F >>> 3;
    return E = (E & 1) << k, v[S] |= E, F + 1;
  }
  function rr(v, F, E) {
    var k = F & 7, S = F >>> 3;
    return E <<= k, v[S] |= E & 255, E >>>= 8, v[S + 1] = E, F + 8;
  }
  function ar(v, F, E) {
    var k = F & 7, S = F >>> 3;
    return E <<= k, v[S] |= E & 255, E >>>= 8, v[S + 1] = E & 255, v[S + 2] = E >>> 8, F + 16;
  }
  function vr(v, F) {
    var E = v.length, k = 2 * E > F ? 2 * E : F + 5, S = 0;
    if (E >= F) return v;
    if (Ae) {
      var y = P0(k);
      if (v.copy) v.copy(y);
      else for (; S < v.length; ++S) y[S] = v[S];
      return y;
    } else if (J) {
      var W = new Uint8Array(k);
      if (W.set) W.set(v);
      else for (; S < E; ++S) W[S] = v[S];
      return W;
    }
    return v.length = k, v;
  }
  function ye(v) {
    for (var F = new Array(v), E = 0; E < v; ++E) F[E] = 0;
    return F;
  }
  function We(v, F, E) {
    var k = 1, S = 0, y = 0, W = 0, Y = 0, H = v.length, G = J ? new Uint16Array(32) : ye(32);
    for (y = 0; y < 32; ++y) G[y] = 0;
    for (y = H; y < E; ++y) v[y] = 0;
    H = v.length;
    var X = J ? new Uint16Array(H) : ye(H);
    for (y = 0; y < H; ++y)
      G[S = v[y]]++, k < S && (k = S), X[y] = 0;
    for (G[0] = 0, y = 1; y <= k; ++y) G[y + 16] = Y = Y + G[y - 1] << 1;
    for (y = 0; y < H; ++y)
      Y = v[y], Y != 0 && (X[y] = G[Y + 16]++);
    var Q = 0;
    for (y = 0; y < H; ++y)
      if (Q = v[y], Q != 0)
        for (Y = C(X[y], k) >> k - Q, W = (1 << k + 4 - Q) - 1; W >= 0; --W)
          F[Y | W << Q] = Q & 15 | y << 4;
    return k;
  }
  var De = J ? new Uint16Array(512) : ye(512), Ve = J ? new Uint16Array(32) : ye(32);
  if (!J) {
    for (var Ie = 0; Ie < 512; ++Ie) De[Ie] = 0;
    for (Ie = 0; Ie < 32; ++Ie) Ve[Ie] = 0;
  }
  (function() {
    for (var v = [], F = 0; F < 32; F++) v.push(5);
    We(v, Ve, 32);
    var E = [];
    for (F = 0; F <= 143; F++) E.push(8);
    for (; F <= 255; F++) E.push(9);
    for (; F <= 279; F++) E.push(7);
    for (; F <= 287; F++) E.push(8);
    We(E, De, 288);
  })();
  var gr = /* @__PURE__ */ (function() {
    for (var F = J ? new Uint8Array(32768) : [], E = 0, k = 0; E < ee.length - 1; ++E)
      for (; k < ee[E + 1]; ++k) F[k] = E;
    for (; k < 32768; ++k) F[k] = 29;
    var S = J ? new Uint8Array(259) : [];
    for (E = 0, k = 0; E < K.length - 1; ++E)
      for (; k < K[E + 1]; ++k) S[k] = E;
    function y(Y, H) {
      for (var G = 0; G < Y.length; ) {
        var X = Math.min(65535, Y.length - G), Q = G + X == Y.length;
        for (H.write_shift(1, +Q), H.write_shift(2, X), H.write_shift(2, ~X & 65535); X-- > 0; ) H[H.l++] = Y[G++];
      }
      return H.l;
    }
    function W(Y, H) {
      for (var G = 0, X = 0, Q = J ? new Uint16Array(32768) : []; X < Y.length; ) {
        var ce = (
          /* data.length - boff; */
          Math.min(65535, Y.length - X)
        );
        if (ce < 10) {
          for (G = we(H, G, +(X + ce == Y.length)), G & 7 && (G += 8 - (G & 7)), H.l = G / 8 | 0, H.write_shift(2, ce), H.write_shift(2, ~ce & 65535); ce-- > 0; ) H[H.l++] = Y[X++];
          G = H.l * 8;
          continue;
        }
        G = we(H, G, +(X + ce == Y.length) + 2);
        for (var ue = 0; ce-- > 0; ) {
          var ae = Y[X];
          ue = (ue << 5 ^ ae) & 32767;
          var le = -1, _e = 0;
          if ((le = Q[ue]) && (le |= X & -32768, le > X && (le -= 32768), le < X))
            for (; Y[le + _e] == Y[X + _e] && _e < 250; ) ++_e;
          if (_e > 2) {
            ae = S[_e], ae <= 22 ? G = rr(H, G, j[ae + 1] >> 1) - 1 : (rr(H, G, 3), G += 5, rr(H, G, j[ae - 23] >> 5), G += 3);
            var be = ae < 8 ? 0 : ae - 4 >> 2;
            be > 0 && (ar(H, G, _e - K[ae]), G += be), ae = F[X - le], G = rr(H, G, j[ae] >> 3), G -= 3;
            var Me = ae < 4 ? 0 : ae - 2 >> 1;
            Me > 0 && (ar(H, G, X - le - ee[ae]), G += Me);
            for (var tr = 0; tr < _e; ++tr)
              Q[ue] = X & 32767, ue = (ue << 5 ^ Y[X]) & 32767, ++X;
            ce -= _e - 1;
          } else
            ae <= 143 ? ae = ae + 48 : G = $e(H, G, 1), G = rr(H, G, j[ae]), Q[ue] = X & 32767, ++X;
        }
        G = rr(H, G, 0) - 1;
      }
      return H.l = (G + 7) / 8 | 0, H.l;
    }
    return function(H, G) {
      return H.length < 8 ? y(H, G) : W(H, G);
    };
  })();
  function ke(v) {
    var F = Ke(50 + Math.floor(v.length * 1.1)), E = gr(v, F);
    return F.slice(0, E);
  }
  var Oe = J ? new Uint16Array(32768) : ye(32768), Le = J ? new Uint16Array(32768) : ye(32768), Ne = J ? new Uint16Array(128) : ye(128), Nr = 1, C0 = 1;
  function gs(v, F) {
    var E = oe(v, F) + 257;
    F += 5;
    var k = oe(v, F) + 1;
    F += 5;
    var S = pe(v, F) + 4;
    F += 4;
    for (var y = 0, W = J ? new Uint8Array(19) : ye(19), Y = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], H = 1, G = J ? new Uint8Array(8) : ye(8), X = J ? new Uint8Array(8) : ye(8), Q = W.length, ce = 0; ce < S; ++ce)
      W[N[ce]] = y = de(v, F), H < y && (H = y), G[y]++, F += 3;
    var ue = 0;
    for (G[0] = 0, ce = 1; ce <= H; ++ce) X[ce] = ue = ue + G[ce - 1] << 1;
    for (ce = 0; ce < Q; ++ce) (ue = W[ce]) != 0 && (Y[ce] = X[ue]++);
    var ae = 0;
    for (ce = 0; ce < Q; ++ce)
      if (ae = W[ce], ae != 0) {
        ue = j[Y[ce]] >> 8 - ae;
        for (var le = (1 << 7 - ae) - 1; le >= 0; --le) Ne[ue | le << ae] = ae & 7 | ce << 3;
      }
    var _e = [];
    for (H = 1; _e.length < E + k; )
      switch (ue = Ne[ne(v, F)], F += ue & 7, ue >>>= 3) {
        case 16:
          for (y = 3 + Te(v, F), F += 2, ue = _e[_e.length - 1]; y-- > 0; ) _e.push(ue);
          break;
        case 17:
          for (y = 3 + de(v, F), F += 3; y-- > 0; ) _e.push(0);
          break;
        case 18:
          for (y = 11 + ne(v, F), F += 7; y-- > 0; ) _e.push(0);
          break;
        default:
          _e.push(ue), H < ue && (H = ue);
          break;
      }
    var be = _e.slice(0, E), Me = _e.slice(E);
    for (ce = E; ce < 286; ++ce) be[ce] = 0;
    for (ce = k; ce < 30; ++ce) Me[ce] = 0;
    return Nr = We(be, Oe, 286), C0 = We(Me, Le, 30), F;
  }
  function ms(v, F) {
    if (v[0] == 3 && !(v[1] & 3))
      return [qr(F), 2];
    for (var E = 0, k = 0, S = P0(F || 1 << 18), y = 0, W = S.length >>> 0, Y = 0, H = 0; (k & 1) == 0; ) {
      if (k = de(v, E), E += 3, k >>> 1)
        k >> 1 == 1 ? (Y = 9, H = 5) : (E = gs(v, E), Y = Nr, H = C0);
      else {
        E & 7 && (E += 8 - (E & 7));
        var G = v[E >>> 3] | v[(E >>> 3) + 1] << 8;
        if (E += 32, G > 0)
          for (!F && W < y + G && (S = vr(S, y + G), W = S.length); G-- > 0; )
            S[y++] = v[E >>> 3], E += 8;
        continue;
      }
      for (; ; ) {
        !F && W < y + 32767 && (S = vr(S, y + 32767), W = S.length);
        var X = xe(v, E, Y), Q = k >>> 1 == 1 ? De[X] : Oe[X];
        if (E += Q & 15, Q >>>= 4, (Q >>> 8 & 255) === 0) S[y++] = Q;
        else {
          if (Q == 256) break;
          Q -= 257;
          var ce = Q < 8 ? 0 : Q - 4 >> 2;
          ce > 5 && (ce = 0);
          var ue = y + K[Q];
          ce > 0 && (ue += xe(v, E, ce), E += ce), X = xe(v, E, H), Q = k >>> 1 == 1 ? Ve[X] : Le[X], E += Q & 15, Q >>>= 4;
          var ae = Q < 4 ? 0 : Q - 2 >> 1, le = ee[Q];
          for (ae > 0 && (le += xe(v, E, ae), E += ae), !F && W < ue && (S = vr(S, ue + 100), W = S.length); y < ue; )
            S[y] = S[y - le], ++y;
        }
      }
    }
    return F ? [S, E + 7 >>> 3] : [S.slice(0, y), E + 7 >>> 3];
  }
  function y0(v, F) {
    var E = v.slice(v.l || 0), k = ms(E, F);
    return v.l += k[1], k[0];
  }
  function O0(v, F) {
    if (v)
      typeof console < "u" && console.error(F);
    else throw new Error(F);
  }
  function D0(v, F) {
    var E = (
      /*::(*/
      v
    );
    Ze(E, 0);
    var k = [], S = [], y = {
      FileIndex: k,
      FullPaths: S
    };
    A(y, { root: F.root });
    for (var W = E.length - 4; (E[W] != 80 || E[W + 1] != 75 || E[W + 2] != 5 || E[W + 3] != 6) && W >= 0; ) --W;
    E.l = W + 4, E.l += 4;
    var Y = E.read_shift(2);
    E.l += 6;
    var H = E.read_shift(4);
    for (E.l = H, W = 0; W < Y; ++W) {
      E.l += 20;
      var G = E.read_shift(4), X = E.read_shift(4), Q = E.read_shift(2), ce = E.read_shift(2), ue = E.read_shift(2);
      E.l += 8;
      var ae = E.read_shift(4), le = c(
        /*::(*/
        E.slice(E.l + Q, E.l + Q + ce)
        /*:: :any)*/
      );
      E.l += Q + ce + ue;
      var _e = E.l;
      E.l = ae + 4, _s(E, G, X, y, le), E.l = _e;
    }
    return y;
  }
  function _s(v, F, E, k, S) {
    v.l += 2;
    var y = v.read_shift(2), W = v.read_shift(2), Y = s(v);
    if (y & 8257) throw new Error("Unsupported ZIP encryption");
    for (var H = v.read_shift(4), G = v.read_shift(4), X = v.read_shift(4), Q = v.read_shift(2), ce = v.read_shift(2), ue = "", ae = 0; ae < Q; ++ae) ue += String.fromCharCode(v[v.l++]);
    if (ce) {
      var le = c(
        /*::(*/
        v.slice(v.l, v.l + ce)
        /*:: :any)*/
      );
      (le[21589] || {}).mt && (Y = le[21589].mt), ((S || {})[21589] || {}).mt && (Y = S[21589].mt);
    }
    v.l += ce;
    var _e = v.slice(v.l, v.l + G);
    switch (W) {
      case 8:
        _e = P(v, X);
        break;
      case 0:
        break;
      // TODO: scan for magic number
      default:
        throw new Error("Unsupported ZIP Compression method " + W);
    }
    var be = !1;
    y & 8 && (H = v.read_shift(4), H == 134695760 && (H = v.read_shift(4), be = !0), G = v.read_shift(4), X = v.read_shift(4)), G != F && O0(be, "Bad compressed size: " + F + " != " + G), X != E && O0(be, "Bad uncompressed size: " + E + " != " + X), Rt(k, ue, _e, { unsafe: !0, mt: Y });
  }
  function Es(v, F) {
    var E = F || {}, k = [], S = [], y = Ke(1), W = E.compression ? 8 : 0, Y = 0, H = 0, G = 0, X = 0, Q = 0, ce = v.FullPaths[0], ue = ce, ae = v.FileIndex[0], le = [], _e = 0;
    for (H = 1; H < v.FullPaths.length; ++H)
      if (ue = v.FullPaths[H].slice(ce.length), ae = v.FileIndex[H], !(!ae.size || !ae.content || ue == "Sh33tJ5")) {
        var be = X, Me = Ke(ue.length);
        for (G = 0; G < ue.length; ++G) Me.write_shift(1, ue.charCodeAt(G) & 127);
        Me = Me.slice(0, Me.l), le[Q] = lc.buf(
          /*::((*/
          ae.content,
          0
        );
        var tr = ae.content;
        W == 8 && (tr = b(tr)), y = Ke(30), y.write_shift(4, 67324752), y.write_shift(2, 20), y.write_shift(2, Y), y.write_shift(2, W), ae.mt ? i(y, ae.mt) : y.write_shift(4, 0), y.write_shift(-4, le[Q]), y.write_shift(4, tr.length), y.write_shift(
          4,
          /*::(*/
          ae.content.length
        ), y.write_shift(2, Me.length), y.write_shift(2, 0), X += y.length, k.push(y), X += Me.length, k.push(Me), X += tr.length, k.push(tr), y = Ke(46), y.write_shift(4, 33639248), y.write_shift(2, 0), y.write_shift(2, 20), y.write_shift(2, Y), y.write_shift(2, W), y.write_shift(4, 0), y.write_shift(-4, le[Q]), y.write_shift(4, tr.length), y.write_shift(
          4,
          /*::(*/
          ae.content.length
        ), y.write_shift(2, Me.length), y.write_shift(2, 0), y.write_shift(2, 0), y.write_shift(2, 0), y.write_shift(2, 0), y.write_shift(4, 0), y.write_shift(4, be), _e += y.l, S.push(y), _e += Me.length, S.push(Me), ++Q;
      }
    return y = Ke(22), y.write_shift(4, 101010256), y.write_shift(2, 0), y.write_shift(2, 0), y.write_shift(2, Q), y.write_shift(2, Q), y.write_shift(4, _e), y.write_shift(4, X), y.write_shift(2, 0), Kr([Kr(k), Kr(S), y]);
  }
  var it = {
    htm: "text/html",
    xml: "text/xml",
    gif: "image/gif",
    jpg: "image/jpeg",
    png: "image/png",
    mso: "application/x-mso",
    thmx: "application/vnd.ms-officetheme",
    sh33tj5: "application/octet-stream"
  };
  function Ts(v, F) {
    if (v.ctype) return v.ctype;
    var E = v.name || "", k = E.match(/\.([^\.]+)$/);
    return k && it[k[1]] || F && (k = (E = F).match(/[\.\\]([^\.\\])+$/), k && it[k[1]]) ? it[k[1]] : "application/octet-stream";
  }
  function ks(v) {
    for (var F = N0(v), E = [], k = 0; k < F.length; k += 76) E.push(F.slice(k, k + 76));
    return E.join(`\r
`) + `\r
`;
  }
  function ws(v) {
    var F = v.replace(/[\x00-\x08\x0B\x0C\x0E-\x1F\x7E-\xFF=]/g, function(G) {
      var X = G.charCodeAt(0).toString(16).toUpperCase();
      return "=" + (X.length == 1 ? "0" + X : X);
    });
    F = F.replace(/ $/mg, "=20").replace(/\t$/mg, "=09"), F.charAt(0) == `
` && (F = "=0D" + F.slice(1)), F = F.replace(/\r(?!\n)/mg, "=0D").replace(/\n\n/mg, `
=0A`).replace(/([^\r\n])\n/mg, "$1=0A");
    for (var E = [], k = F.split(`\r
`), S = 0; S < k.length; ++S) {
      var y = k[S];
      if (y.length == 0) {
        E.push("");
        continue;
      }
      for (var W = 0; W < y.length; ) {
        var Y = 76, H = y.slice(W, W + Y);
        H.charAt(Y - 1) == "=" ? Y-- : H.charAt(Y - 2) == "=" ? Y -= 2 : H.charAt(Y - 3) == "=" && (Y -= 3), H = y.slice(W, W + Y), W += Y, W < y.length && (H += "="), E.push(H);
      }
    }
    return E.join(`\r
`);
  }
  function As(v) {
    for (var F = [], E = 0; E < v.length; ++E) {
      for (var k = v[E]; E <= v.length && k.charAt(k.length - 1) == "="; ) k = k.slice(0, k.length - 1) + v[++E];
      F.push(k);
    }
    for (var S = 0; S < F.length; ++S) F[S] = F[S].replace(/[=][0-9A-Fa-f]{2}/g, function(y) {
      return String.fromCharCode(parseInt(y.slice(1), 16));
    });
    return Or(F.join(`\r
`));
  }
  function Fs(v, F, E) {
    for (var k = "", S = "", y = "", W, Y = 0; Y < 10; ++Y) {
      var H = F[Y];
      if (!H || H.match(/^\s*$/)) break;
      var G = H.match(/^(.*?):\s*([^\s].*)$/);
      if (G) switch (G[1].toLowerCase()) {
        case "content-location":
          k = G[2].trim();
          break;
        case "content-type":
          y = G[2].trim();
          break;
        case "content-transfer-encoding":
          S = G[2].trim();
          break;
      }
    }
    switch (++Y, S.toLowerCase()) {
      case "base64":
        W = Or(Tr(F.slice(Y).join("")));
        break;
      case "quoted-printable":
        W = As(F.slice(Y));
        break;
      default:
        throw new Error("Unsupported Content-Transfer-Encoding " + S);
    }
    var X = Rt(v, k.slice(E.length), W, { unsafe: !0 });
    y && (X.ctype = y);
  }
  function Ss(v, F) {
    if (M(v.slice(0, 13)).toLowerCase() != "mime-version:") throw new Error("Unsupported MAD header");
    var E = F && F.root || "", k = (Ae && Buffer.isBuffer(v) ? v.toString("binary") : M(v)).split(`\r
`), S = 0, y = "";
    for (S = 0; S < k.length; ++S)
      if (y = k[S], !!/^Content-Location:/i.test(y) && (y = y.slice(y.indexOf("file")), E || (E = y.slice(0, y.lastIndexOf("/") + 1)), y.slice(0, E.length) != E))
        for (; E.length > 0 && (E = E.slice(0, E.length - 1), E = E.slice(0, E.lastIndexOf("/") + 1), y.slice(0, E.length) != E); )
          ;
    var W = (k[1] || "").match(/boundary="(.*?)"/);
    if (!W) throw new Error("MAD cannot find boundary");
    var Y = "--" + (W[1] || ""), H = [], G = [], X = {
      FileIndex: H,
      FullPaths: G
    };
    A(X);
    var Q, ce = 0;
    for (S = 0; S < k.length; ++S) {
      var ue = k[S];
      ue !== Y && ue !== Y + "--" || (ce++ && Fs(X, k.slice(Q, S), E), Q = S);
    }
    return X;
  }
  function Cs(v, F) {
    var E = F || {}, k = E.boundary || "SheetJS";
    k = "------=" + k;
    for (var S = [
      "MIME-Version: 1.0",
      'Content-Type: multipart/related; boundary="' + k.slice(2) + '"',
      "",
      "",
      ""
    ], y = v.FullPaths[0], W = y, Y = v.FileIndex[0], H = 1; H < v.FullPaths.length; ++H)
      if (W = v.FullPaths[H].slice(y.length), Y = v.FileIndex[H], !(!Y.size || !Y.content || W == "Sh33tJ5")) {
        W = W.replace(/[\x00-\x08\x0B\x0C\x0E-\x1F\x7E-\xFF]/g, function(_e) {
          return "_x" + _e.charCodeAt(0).toString(16) + "_";
        }).replace(/[\u0080-\uFFFF]/g, function(_e) {
          return "_u" + _e.charCodeAt(0).toString(16) + "_";
        });
        for (var G = Y.content, X = Ae && Buffer.isBuffer(G) ? G.toString("binary") : M(G), Q = 0, ce = Math.min(1024, X.length), ue = 0, ae = 0; ae <= ce; ++ae) (ue = X.charCodeAt(ae)) >= 32 && ue < 128 && ++Q;
        var le = Q >= ce * 4 / 5;
        S.push(k), S.push("Content-Location: " + (E.root || "file:///C:/SheetJS/") + W), S.push("Content-Transfer-Encoding: " + (le ? "quoted-printable" : "base64")), S.push("Content-Type: " + Ts(Y, W)), S.push(""), S.push(le ? ws(X) : ks(X));
      }
    return S.push(k + `--\r
`), S.join(`\r
`);
  }
  function ys(v) {
    var F = {};
    return A(F, v), F;
  }
  function Rt(v, F, E, k) {
    var S = k && k.unsafe;
    S || A(v);
    var y = !S && Fe.find(v, F);
    if (!y) {
      var W = v.FullPaths[0];
      F.slice(0, W.length) == W ? W = F : (W.slice(-1) != "/" && (W += "/"), W = (W + F).replace("//", "/")), y = { name: t(F), type: 2 }, v.FileIndex.push(y), v.FullPaths.push(W), S || Fe.utils.cfb_gc(v);
    }
    return y.content = E, y.size = E ? E.length : 0, k && (k.CLSID && (y.clsid = k.CLSID), k.mt && (y.mt = k.mt), k.ct && (y.ct = k.ct)), y;
  }
  function Os(v, F) {
    A(v);
    var E = Fe.find(v, F);
    if (E) {
      for (var k = 0; k < v.FileIndex.length; ++k) if (v.FileIndex[k] == E)
        return v.FileIndex.splice(k, 1), v.FullPaths.splice(k, 1), !0;
    }
    return !1;
  }
  function Ds(v, F, E) {
    A(v);
    var k = Fe.find(v, F);
    if (k) {
      for (var S = 0; S < v.FileIndex.length; ++S) if (v.FileIndex[S] == k)
        return v.FileIndex[S].name = t(E), v.FullPaths[S] = E, !0;
    }
    return !1;
  }
  function Rs(v) {
    m(v, !0);
  }
  return a.find = L, a.read = B, a.parse = l, a.write = he, a.writeFile = ve, a.utils = {
    cfb_new: ys,
    cfb_add: Rt,
    cfb_del: Os,
    cfb_mov: Ds,
    cfb_gc: Rs,
    ReadShift: La,
    CheckField: _i,
    prep_blob: Ze,
    bconcat: Kr,
    use_zlib: w,
    _deflateRaw: ke,
    _inflateRaw: y0,
    consts: q
  }, a;
})();
function uc(e) {
  if (typeof Deno < "u") return Deno.readFileSync(e);
  if (typeof $ < "u" && typeof File < "u" && typeof Folder < "u") try {
    var a = File(e);
    a.open("r"), a.encoding = "binary";
    var r = a.read();
    return a.close(), r;
  } catch (n) {
    if (!n.message || !n.message.match(/onstruct/)) throw n;
  }
  throw new Error("Cannot access file " + e);
}
function br(e) {
  for (var a = Object.keys(e), r = [], n = 0; n < a.length; ++n) Object.prototype.hasOwnProperty.call(e, a[n]) && r.push(a[n]);
  return r;
}
function i0(e) {
  for (var a = [], r = br(e), n = 0; n !== r.length; ++n) a[e[r[n]]] = r[n];
  return a;
}
var _t = /* @__PURE__ */ new Date(1899, 11, 30, 0, 0, 0);
function pr(e, a) {
  var r = /* @__PURE__ */ e.getTime(), n = /* @__PURE__ */ _t.getTime() + (/* @__PURE__ */ e.getTimezoneOffset() - /* @__PURE__ */ _t.getTimezoneOffset()) * 6e4;
  return (r - n) / (1440 * 60 * 1e3);
}
var Zn = /* @__PURE__ */ new Date(), hc = /* @__PURE__ */ _t.getTime() + (/* @__PURE__ */ Zn.getTimezoneOffset() - /* @__PURE__ */ _t.getTimezoneOffset()) * 6e4, V0 = /* @__PURE__ */ Zn.getTimezoneOffset();
function Ct(e) {
  var a = /* @__PURE__ */ new Date();
  return a.setTime(e * 24 * 60 * 60 * 1e3 + hc), a.getTimezoneOffset() !== V0 && a.setTime(a.getTime() + (a.getTimezoneOffset() - V0) * 6e4), a;
}
function xc(e) {
  var a = 0, r = 0, n = !1, t = e.match(/P([0-9\.]+Y)?([0-9\.]+M)?([0-9\.]+D)?T([0-9\.]+H)?([0-9\.]+M)?([0-9\.]+S)?/);
  if (!t) throw new Error("|" + e + "| is not an ISO8601 Duration");
  for (var i = 1; i != t.length; ++i)
    if (t[i]) {
      switch (r = 1, i > 3 && (n = !0), t[i].slice(t[i].length - 1)) {
        case "Y":
          throw new Error("Unsupported ISO Duration Field: " + t[i].slice(t[i].length - 1));
        case "D":
          r *= 24;
        /* falls through */
        case "H":
          r *= 60;
        /* falls through */
        case "M":
          if (n) r *= 60;
          else throw new Error("Unsupported ISO Duration Field: M");
      }
      a += r * parseInt(t[i], 10);
    }
  return a;
}
var G0 = /* @__PURE__ */ new Date("2017-02-19T19:06:09.000Z"), Qn = /* @__PURE__ */ isNaN(/* @__PURE__ */ G0.getFullYear()) ? /* @__PURE__ */ new Date("2/19/17") : G0, dc = /* @__PURE__ */ Qn.getFullYear() == 2017;
function qe(e, a) {
  var r = new Date(e);
  if (dc)
    return a > 0 ? r.setTime(r.getTime() + r.getTimezoneOffset() * 60 * 1e3) : a < 0 && r.setTime(r.getTime() - r.getTimezoneOffset() * 60 * 1e3), r;
  if (e instanceof Date) return e;
  if (Qn.getFullYear() == 1917 && !isNaN(r.getFullYear())) {
    var n = r.getFullYear();
    return e.indexOf("" + n) > -1 || r.setFullYear(r.getFullYear() + 100), r;
  }
  var t = e.match(/\d+/g) || ["2017", "2", "19", "0", "0", "0"], i = new Date(+t[0], +t[1] - 1, +t[2], +t[3] || 0, +t[4] || 0, +t[5] || 0);
  return e.indexOf("Z") > -1 && (i = new Date(i.getTime() - i.getTimezoneOffset() * 60 * 1e3)), i;
}
function sa(e, a) {
  if (Ae && Buffer.isBuffer(e)) {
    if (a) {
      if (e[0] == 255 && e[1] == 254) return Pa(e.slice(2).toString("utf16le"));
      if (e[1] == 254 && e[2] == 255) return Pa(Un(e.slice(2).toString("binary")));
    }
    return e.toString("binary");
  }
  if (typeof TextDecoder < "u") try {
    if (a) {
      if (e[0] == 255 && e[1] == 254) return Pa(new TextDecoder("utf-16le").decode(e.slice(2)));
      if (e[0] == 254 && e[1] == 255) return Pa(new TextDecoder("utf-16be").decode(e.slice(2)));
    }
    var r = {
      "€": "",
      "‚": "",
      ƒ: "",
      "„": "",
      "…": "",
      "†": "",
      "‡": "",
      "ˆ": "",
      "‰": "",
      Š: "",
      "‹": "",
      Œ: "",
      Ž: "",
      "‘": "",
      "’": "",
      "“": "",
      "”": "",
      "•": "",
      "–": "",
      "—": "",
      "˜": "",
      "™": "",
      š: "",
      "›": "",
      œ: "",
      ž: "",
      Ÿ: ""
    };
    return Array.isArray(e) && (e = new Uint8Array(e)), new TextDecoder("latin1").decode(e).replace(/[€‚ƒ„…†‡ˆ‰Š‹ŒŽ‘’“”•–—˜™š›œžŸ]/g, function(i) {
      return r[i] || i;
    });
  } catch {
  }
  for (var n = [], t = 0; t != e.length; ++t) n.push(String.fromCharCode(e[t]));
  return n.join("");
}
function Qe(e) {
  if (typeof JSON < "u" && !Array.isArray(e)) return JSON.parse(JSON.stringify(e));
  if (typeof e != "object" || e == null) return e;
  if (e instanceof Date) return new Date(e.getTime());
  var a = {};
  for (var r in e) Object.prototype.hasOwnProperty.call(e, r) && (a[r] = Qe(e[r]));
  return a;
}
function Be(e, a) {
  for (var r = ""; r.length < a; ) r += e;
  return r;
}
function Ir(e) {
  var a = Number(e);
  if (!isNaN(a)) return isFinite(a) ? a : NaN;
  if (!/\d/.test(e)) return a;
  var r = 1, n = e.replace(/([\d]),([\d])/g, "$1$2").replace(/[$]/g, "").replace(/[%]/g, function() {
    return r *= 100, "";
  });
  return !isNaN(a = Number(n)) || (n = n.replace(/[(](.*)[)]/, function(t, i) {
    return r = -r, i;
  }), !isNaN(a = Number(n))) ? a / r : a;
}
var pc = ["january", "february", "march", "april", "may", "june", "july", "august", "september", "october", "november", "december"];
function ka(e) {
  var a = new Date(e), r = /* @__PURE__ */ new Date(NaN), n = a.getYear(), t = a.getMonth(), i = a.getDate();
  if (isNaN(i)) return r;
  var s = e.toLowerCase();
  if (s.match(/jan|feb|mar|apr|may|jun|jul|aug|sep|oct|nov|dec/)) {
    if (s = s.replace(/[^a-z]/g, "").replace(/([^a-z]|^)[ap]m?([^a-z]|$)/, ""), s.length > 3 && pc.indexOf(s) == -1) return r;
  } else if (s.match(/[a-z]/)) return r;
  return n < 0 || n > 8099 ? r : (t > 0 || i > 1) && n != 101 ? a : e.match(/[^-0-9:,\/\\]/) ? r : a;
}
var vc = /* @__PURE__ */ (function() {
  var e = "abacaba".split(/(:?b)/i).length == 5;
  return function(r, n, t) {
    if (e || typeof n == "string") return r.split(n);
    for (var i = r.split(n), s = [i[0]], c = 1; c < i.length; ++c)
      s.push(t), s.push(i[c]);
    return s;
  };
})();
function ei(e) {
  return e ? e.content && e.type ? sa(e.content, !0) : e.data ? Ra(e.data) : e.asNodeBuffer && Ae ? Ra(e.asNodeBuffer().toString("binary")) : e.asBinary ? Ra(e.asBinary()) : e._data && e._data.getContent ? Ra(sa(Array.prototype.slice.call(e._data.getContent(), 0))) : null : null;
}
function ri(e) {
  if (!e) return null;
  if (e.data) return R0(e.data);
  if (e.asNodeBuffer && Ae) return e.asNodeBuffer();
  if (e._data && e._data.getContent) {
    var a = e._data.getContent();
    return typeof a == "string" ? R0(a) : Array.prototype.slice.call(a);
  }
  return e.content && e.type ? e.content : null;
}
function gc(e) {
  return e && e.name.slice(-4) === ".bin" ? ri(e) : ei(e);
}
function Ar(e, a) {
  for (var r = e.FullPaths || br(e.files), n = a.toLowerCase().replace(/[\/]/g, "\\"), t = n.replace(/\\/g, "/"), i = 0; i < r.length; ++i) {
    var s = r[i].replace(/^Root Entry[\/]/, "").toLowerCase();
    if (n == s || t == s) return e.files ? e.files[r[i]] : e.FileIndex[i];
  }
  return null;
}
function s0(e, a) {
  var r = Ar(e, a);
  if (r == null) throw new Error("Cannot find file " + a + " in zip");
  return r;
}
function Xe(e, a, r) {
  if (!r) return gc(s0(e, a));
  if (!a) return null;
  try {
    return Xe(e, a);
  } catch {
    return null;
  }
}
function Er(e, a, r) {
  if (!r) return ei(s0(e, a));
  if (!a) return null;
  try {
    return Er(e, a);
  } catch {
    return null;
  }
}
function mc(e, a, r) {
  return ri(s0(e, a));
}
function X0(e) {
  for (var a = e.FullPaths || br(e.files), r = [], n = 0; n < a.length; ++n) a[n].slice(-1) != "/" && r.push(a[n].replace(/^Root Entry[\/]/, ""));
  return r.sort();
}
function _c(e, a, r) {
  if (e.FullPaths) {
    if (typeof r == "string") {
      var n;
      return Ae ? n = fa(r) : n = Bs(r), Fe.utils.cfb_add(e, a, n);
    }
    Fe.utils.cfb_add(e, a, r);
  } else e.file(a, r);
}
function ai(e, a) {
  switch (a.type) {
    case "base64":
      return Fe.read(e, { type: "base64" });
    case "binary":
      return Fe.read(e, { type: "binary" });
    case "buffer":
    case "array":
      return Fe.read(e, { type: "buffer" });
  }
  throw new Error("Unrecognized type " + a.type);
}
function Na(e, a) {
  if (e.charAt(0) == "/") return e.slice(1);
  var r = a.split("/");
  a.slice(-1) != "/" && r.pop();
  for (var n = e.split("/"); n.length !== 0; ) {
    var t = n.shift();
    t === ".." ? r.pop() : t !== "." && r.push(t);
  }
  return r.join("/");
}
var ti = `<?xml version="1.0" encoding="UTF-8" standalone="yes"?>\r
`, Ec = /([^"\s?>\/]+)\s*=\s*((?:")([^"]*)(?:")|(?:')([^']*)(?:')|([^'">\s]+))/g, z0 = /<[\/\?]?[a-zA-Z0-9:_-]+(?:\s+[^"\s?>\/]+\s*=\s*(?:"[^"]*"|'[^']*'|[^'">\s=]+))*\s*[\/\?]?>/mg, Tc = /<[^>]*>/g, lr = /* @__PURE__ */ ti.match(z0) ? z0 : Tc, kc = /<\w*:/, wc = /<(\/?)\w+:/;
function ge(e, a, r) {
  for (var n = {}, t = 0, i = 0; t !== e.length && !((i = e.charCodeAt(t)) === 32 || i === 10 || i === 13); ++t) ;
  if (a || (n[0] = e.slice(0, t)), t === e.length) return n;
  var s = e.match(Ec), c = 0, o = "", f = 0, l = "", u = "", h = 1;
  if (s) for (f = 0; f != s.length; ++f) {
    for (u = s[f], i = 0; i != u.length && u.charCodeAt(i) !== 61; ++i) ;
    for (l = u.slice(0, i).trim(); u.charCodeAt(i + 1) == 32; ) ++i;
    for (h = (t = u.charCodeAt(i + 1)) == 34 || t == 39 ? 1 : 0, o = u.slice(i + 1 + h, u.length - h), c = 0; c != l.length && l.charCodeAt(c) !== 58; ++c) ;
    if (c === l.length)
      l.indexOf("_") > 0 && (l = l.slice(0, l.indexOf("_"))), n[l] = o, n[l.toLowerCase()] = o;
    else {
      var d = (c === 5 && l.slice(0, 5) === "xmlns" ? "xmlns" : "") + l.slice(c + 1);
      if (n[d] && l.slice(c - 3, c) == "ext") continue;
      n[d] = o, n[d.toLowerCase()] = o;
    }
  }
  return n;
}
function Mr(e) {
  return e.replace(wc, "<$1");
}
var ni = {
  "&quot;": '"',
  "&apos;": "'",
  "&gt;": ">",
  "&lt;": "<",
  "&amp;": "&"
}, Ac = /* @__PURE__ */ i0(ni), Ce = /* @__PURE__ */ (function() {
  var e = /&(?:quot|apos|gt|lt|amp|#x?([\da-fA-F]+));/ig, a = /_x([\da-fA-F]{4})_/ig;
  return function r(n) {
    var t = n + "", i = t.indexOf("<![CDATA[");
    if (i == -1) return t.replace(e, function(c, o) {
      return ni[c] || String.fromCharCode(parseInt(o, c.indexOf("x") > -1 ? 16 : 10)) || c;
    }).replace(a, function(c, o) {
      return String.fromCharCode(parseInt(o, 16));
    });
    var s = t.indexOf("]]>");
    return r(t.slice(0, i)) + t.slice(i + 9, s) + r(t.slice(s + 3));
  };
})(), Fc = /[&<>'"]/g, Sc = /[\u0000-\u001f]/g;
function c0(e) {
  var a = e + "";
  return a.replace(Fc, function(r) {
    return Ac[r];
  }).replace(/\n/g, "<br/>").replace(Sc, function(r) {
    return "&#x" + ("000" + r.charCodeAt(0).toString(16)).slice(-4) + ";";
  });
}
var $0 = /* @__PURE__ */ (function() {
  var e = /&#(\d+);/g;
  function a(r, n) {
    return String.fromCharCode(parseInt(n, 10));
  }
  return function(n) {
    return n.replace(e, a);
  };
})();
function Pe(e) {
  switch (e) {
    case 1:
    case !0:
    case "1":
    case "true":
    case "TRUE":
      return !0;
    /* case '0': case 'false': case 'FALSE':*/
    default:
      return !1;
  }
}
function Pt(e) {
  for (var a = "", r = 0, n = 0, t = 0, i = 0, s = 0, c = 0; r < e.length; ) {
    if (n = e.charCodeAt(r++), n < 128) {
      a += String.fromCharCode(n);
      continue;
    }
    if (t = e.charCodeAt(r++), n > 191 && n < 224) {
      s = (n & 31) << 6, s |= t & 63, a += String.fromCharCode(s);
      continue;
    }
    if (i = e.charCodeAt(r++), n < 240) {
      a += String.fromCharCode((n & 15) << 12 | (t & 63) << 6 | i & 63);
      continue;
    }
    s = e.charCodeAt(r++), c = ((n & 7) << 18 | (t & 63) << 12 | (i & 63) << 6 | s & 63) - 65536, a += String.fromCharCode(55296 + (c >>> 10 & 1023)), a += String.fromCharCode(56320 + (c & 1023));
  }
  return a;
}
function K0(e) {
  var a = qr(2 * e.length), r, n, t = 1, i = 0, s = 0, c;
  for (n = 0; n < e.length; n += t)
    t = 1, (c = e.charCodeAt(n)) < 128 ? r = c : c < 224 ? (r = (c & 31) * 64 + (e.charCodeAt(n + 1) & 63), t = 2) : c < 240 ? (r = (c & 15) * 4096 + (e.charCodeAt(n + 1) & 63) * 64 + (e.charCodeAt(n + 2) & 63), t = 3) : (t = 4, r = (c & 7) * 262144 + (e.charCodeAt(n + 1) & 63) * 4096 + (e.charCodeAt(n + 2) & 63) * 64 + (e.charCodeAt(n + 3) & 63), r -= 65536, s = 55296 + (r >>> 10 & 1023), r = 56320 + (r & 1023)), s !== 0 && (a[i++] = s & 255, a[i++] = s >>> 8, s = 0), a[i++] = r % 256, a[i++] = r >>> 8;
  return a.slice(0, i).toString("ucs2");
}
function Y0(e) {
  return fa(e, "binary").toString("utf8");
}
var ct = "foo bar bazâð£", Re = Ae && (/* @__PURE__ */ Y0(ct) == /* @__PURE__ */ Pt(ct) && Y0 || /* @__PURE__ */ K0(ct) == /* @__PURE__ */ Pt(ct) && K0) || Pt, Pa = Ae ? function(e) {
  return fa(e, "utf8").toString("binary");
} : function(e) {
  for (var a = [], r = 0, n = 0, t = 0; r < e.length; )
    switch (n = e.charCodeAt(r++), !0) {
      case n < 128:
        a.push(String.fromCharCode(n));
        break;
      case n < 2048:
        a.push(String.fromCharCode(192 + (n >> 6))), a.push(String.fromCharCode(128 + (n & 63)));
        break;
      case (n >= 55296 && n < 57344):
        n -= 55296, t = e.charCodeAt(r++) - 56320 + (n << 10), a.push(String.fromCharCode(240 + (t >> 18 & 7))), a.push(String.fromCharCode(144 + (t >> 12 & 63))), a.push(String.fromCharCode(128 + (t >> 6 & 63))), a.push(String.fromCharCode(128 + (t & 63)));
        break;
      default:
        a.push(String.fromCharCode(224 + (n >> 12))), a.push(String.fromCharCode(128 + (n >> 6 & 63))), a.push(String.fromCharCode(128 + (n & 63)));
    }
  return a.join("");
}, $a = /* @__PURE__ */ (function() {
  var e = {};
  return function(r, n) {
    var t = r + "|" + (n || "");
    return e[t] ? e[t] : e[t] = new RegExp("<(?:\\w+:)?" + r + '(?: xml:space="preserve")?(?:[^>]*)>([\\s\\S]*?)</(?:\\w+:)?' + r + ">", n || "");
  };
})(), ii = /* @__PURE__ */ (function() {
  var e = [
    ["nbsp", " "],
    ["middot", "·"],
    ["quot", '"'],
    ["apos", "'"],
    ["gt", ">"],
    ["lt", "<"],
    ["amp", "&"]
  ].map(function(a) {
    return [new RegExp("&" + a[0] + ";", "ig"), a[1]];
  });
  return function(r) {
    for (var n = r.replace(/^[\t\n\r ]+/, "").replace(/[\t\n\r ]+$/, "").replace(/>\s+/g, ">").replace(/\s+</g, "<").replace(/[\t\n\r ]+/g, " ").replace(/<\s*[bB][rR]\s*\/?>/g, `
`).replace(/<[^>]*>/g, ""), t = 0; t < e.length; ++t) n = n.replace(e[t][0], e[t][1]);
    return n;
  };
})(), Cc = /* @__PURE__ */ (function() {
  var e = {};
  return function(r) {
    return e[r] !== void 0 ? e[r] : e[r] = new RegExp("<(?:vt:)?" + r + ">([\\s\\S]*?)</(?:vt:)?" + r + ">", "g");
  };
})(), yc = /<\/?(?:vt:)?variant>/g, Oc = /<(?:vt:)([^>]*)>([\s\S]*)</;
function j0(e, a) {
  var r = ge(e), n = e.match(Cc(r.baseType)) || [], t = [];
  if (n.length != r.size) {
    if (a.WTF) throw new Error("unexpected vector length " + n.length + " != " + r.size);
    return t;
  }
  return n.forEach(function(i) {
    var s = i.replace(yc, "").match(Oc);
    s && t.push({ v: Re(s[2]), t: s[1] });
  }), t;
}
var Dc = /(^\s|\s$|\n)/;
function Rc(e) {
  return br(e).map(function(a) {
    return " " + a + '="' + e[a] + '"';
  }).join("");
}
function Ic(e, a, r) {
  return "<" + e + (r != null ? Rc(r) : "") + (a != null ? (a.match(Dc) ? ' xml:space="preserve"' : "") + ">" + a + "</" + e : "/") + ">";
}
function f0(e) {
  if (Ae && /*::typeof Buffer !== "undefined" && d != null && d instanceof Buffer &&*/
  Buffer.isBuffer(e)) return e.toString("utf8");
  if (typeof e == "string") return e;
  if (typeof Uint8Array < "u" && e instanceof Uint8Array) return Re(oa(a0(e)));
  throw new Error("Bad input format: expected Buffer or string");
}
var Ka = /<(\/?)([^\s?><!\/:]*:|)([^\s?<>:\/]+)(?:[\s?:\/][^>]*)?>/mg, Nc = {
  CT: "http://schemas.openxmlformats.org/package/2006/content-types"
}, Pc = [
  "http://schemas.openxmlformats.org/spreadsheetml/2006/main",
  "http://purl.oclc.org/ooxml/spreadsheetml/main",
  "http://schemas.microsoft.com/office/excel/2006/main",
  "http://schemas.microsoft.com/office/excel/2006/2"
];
function Lc(e, a) {
  for (var r = 1 - 2 * (e[a + 7] >>> 7), n = ((e[a + 7] & 127) << 4) + (e[a + 6] >>> 4 & 15), t = e[a + 6] & 15, i = 5; i >= 0; --i) t = t * 256 + e[a + i];
  return n == 2047 ? t == 0 ? r * (1 / 0) : NaN : (n == 0 ? n = -1022 : (n -= 1023, t += Math.pow(2, 52)), r * Math.pow(2, n - 52) * t);
}
function bc(e, a, r) {
  var n = (a < 0 || 1 / a == -1 / 0 ? 1 : 0) << 7, t = 0, i = 0, s = n ? -a : a;
  isFinite(s) ? s == 0 ? t = i = 0 : (t = Math.floor(Math.log(s) / Math.LN2), i = s * Math.pow(2, 52 - t), t <= -1023 && (!isFinite(i) || i < Math.pow(2, 52)) ? t = -1022 : (i -= Math.pow(2, 52), t += 1023)) : (t = 2047, i = isNaN(a) ? 26985 : 0);
  for (var c = 0; c <= 5; ++c, i /= 256) e[r + c] = i & 255;
  e[r + 6] = (t & 15) << 4 | i & 15, e[r + 7] = t >> 4 | n;
}
var J0 = function(e) {
  for (var a = [], r = 10240, n = 0; n < e[0].length; ++n) if (e[0][n]) for (var t = 0, i = e[0][n].length; t < i; t += r) a.push.apply(a, e[0][n].slice(t, t + r));
  return a;
}, q0 = Ae ? function(e) {
  return e[0].length > 0 && Buffer.isBuffer(e[0][0]) ? Buffer.concat(e[0].map(function(a) {
    return Buffer.isBuffer(a) ? a : fa(a);
  })) : J0(e);
} : J0, Z0 = function(e, a, r) {
  for (var n = [], t = a; t < r; t += 2) n.push(String.fromCharCode(Hr(e, t)));
  return n.join("").replace(dr, "");
}, o0 = Ae ? function(e, a, r) {
  return Buffer.isBuffer(e) ? e.toString("utf16le", a, r).replace(dr, "") : Z0(e, a, r);
} : Z0, Q0 = function(e, a, r) {
  for (var n = [], t = a; t < a + r; ++t) n.push(("0" + e[t].toString(16)).slice(-2));
  return n.join("");
}, si = Ae ? function(e, a, r) {
  return Buffer.isBuffer(e) ? e.toString("hex", a, a + r) : Q0(e, a, r);
} : Q0, en = function(e, a, r) {
  for (var n = [], t = a; t < r; t++) n.push(String.fromCharCode(ga(e, t)));
  return n.join("");
}, Qa = Ae ? function(a, r, n) {
  return Buffer.isBuffer(a) ? a.toString("utf8", r, n) : en(a, r, n);
} : en, ci = function(e, a) {
  var r = _r(e, a);
  return r > 0 ? Qa(e, a + 4, a + 4 + r - 1) : "";
}, fi = ci, oi = function(e, a) {
  var r = _r(e, a);
  return r > 0 ? Qa(e, a + 4, a + 4 + r - 1) : "";
}, li = oi, ui = function(e, a) {
  var r = 2 * _r(e, a);
  return r > 0 ? Qa(e, a + 4, a + 4 + r - 1) : "";
}, hi = ui, xi = function(a, r) {
  var n = _r(a, r);
  return n > 0 ? o0(a, r + 4, r + 4 + n) : "";
}, di = xi, pi = function(e, a) {
  var r = _r(e, a);
  return r > 0 ? Qa(e, a + 4, a + 4 + r) : "";
}, vi = pi, gi = function(e, a) {
  return Lc(e, a);
}, Et = gi, mi = function(a) {
  return Array.isArray(a) || typeof Uint8Array < "u" && a instanceof Uint8Array;
};
Ae && (fi = function(a, r) {
  if (!Buffer.isBuffer(a)) return ci(a, r);
  var n = a.readUInt32LE(r);
  return n > 0 ? a.toString("utf8", r + 4, r + 4 + n - 1) : "";
}, li = function(a, r) {
  if (!Buffer.isBuffer(a)) return oi(a, r);
  var n = a.readUInt32LE(r);
  return n > 0 ? a.toString("utf8", r + 4, r + 4 + n - 1) : "";
}, hi = function(a, r) {
  if (!Buffer.isBuffer(a)) return ui(a, r);
  var n = 2 * a.readUInt32LE(r);
  return a.toString("utf16le", r + 4, r + 4 + n - 1);
}, di = function(a, r) {
  if (!Buffer.isBuffer(a)) return xi(a, r);
  var n = a.readUInt32LE(r);
  return a.toString("utf16le", r + 4, r + 4 + n);
}, vi = function(a, r) {
  if (!Buffer.isBuffer(a)) return pi(a, r);
  var n = a.readUInt32LE(r);
  return a.toString("utf8", r + 4, r + 4 + n);
}, Et = function(a, r) {
  return Buffer.isBuffer(a) ? a.readDoubleLE(r) : gi(a, r);
}, mi = function(a) {
  return Buffer.isBuffer(a) || Array.isArray(a) || typeof Uint8Array < "u" && a instanceof Uint8Array;
});
var ga = function(e, a) {
  return e[a];
}, Hr = function(e, a) {
  return e[a + 1] * 256 + e[a];
}, Mc = function(e, a) {
  var r = e[a + 1] * 256 + e[a];
  return r < 32768 ? r : (65535 - r + 1) * -1;
}, _r = function(e, a) {
  return e[a + 3] * (1 << 24) + (e[a + 2] << 16) + (e[a + 1] << 8) + e[a];
}, ra = function(e, a) {
  return e[a + 3] << 24 | e[a + 2] << 16 | e[a + 1] << 8 | e[a];
}, Bc = function(e, a) {
  return e[a] << 24 | e[a + 1] << 16 | e[a + 2] << 8 | e[a + 3];
};
function La(e, a) {
  var r = "", n, t, i = [], s, c, o, f;
  switch (a) {
    case "dbcs":
      if (f = this.l, Ae && Buffer.isBuffer(this)) r = this.slice(this.l, this.l + 2 * e).toString("utf16le");
      else for (o = 0; o < e; ++o)
        r += String.fromCharCode(Hr(this, f)), f += 2;
      e *= 2;
      break;
    case "utf8":
      r = Qa(this, this.l, this.l + e);
      break;
    case "utf16le":
      e *= 2, r = o0(this, this.l, this.l + e);
      break;
    case "wstr":
      return La.call(this, e, "dbcs");
    /* [MS-OLEDS] 2.1.4 LengthPrefixedAnsiString */
    case "lpstr-ansi":
      r = fi(this, this.l), e = 4 + _r(this, this.l);
      break;
    case "lpstr-cp":
      r = li(this, this.l), e = 4 + _r(this, this.l);
      break;
    /* [MS-OLEDS] 2.1.5 LengthPrefixedUnicodeString */
    case "lpwstr":
      r = hi(this, this.l), e = 4 + 2 * _r(this, this.l);
      break;
    /* [MS-OFFCRYPTO] 2.1.2 Length-Prefixed Padded Unicode String (UNICODE-LP-P4) */
    case "lpp4":
      e = 4 + _r(this, this.l), r = di(this, this.l), e & 2 && (e += 2);
      break;
    /* [MS-OFFCRYPTO] 2.1.3 Length-Prefixed UTF-8 String (UTF-8-LP-P4) */
    case "8lpp4":
      e = 4 + _r(this, this.l), r = vi(this, this.l), e & 3 && (e += 4 - (e & 3));
      break;
    case "cstr":
      for (e = 0, r = ""; (s = ga(this, this.l + e++)) !== 0; ) i.push(st(s));
      r = i.join("");
      break;
    case "_wstr":
      for (e = 0, r = ""; (s = Hr(this, this.l + e)) !== 0; )
        i.push(st(s)), e += 2;
      e += 2, r = i.join("");
      break;
    /* sbcs and dbcs support continue records in the SST way TODO codepages */
    case "dbcs-cont":
      for (r = "", f = this.l, o = 0; o < e; ++o) {
        if (this.lens && this.lens.indexOf(f) !== -1)
          return s = ga(this, f), this.l = f + 1, c = La.call(this, e - o, s ? "dbcs-cont" : "sbcs-cont"), i.join("") + c;
        i.push(st(Hr(this, f))), f += 2;
      }
      r = i.join(""), e *= 2;
      break;
    case "cpstr":
    /* falls through */
    case "sbcs-cont":
      for (r = "", f = this.l, o = 0; o != e; ++o) {
        if (this.lens && this.lens.indexOf(f) !== -1)
          return s = ga(this, f), this.l = f + 1, c = La.call(this, e - o, s ? "dbcs-cont" : "sbcs-cont"), i.join("") + c;
        i.push(st(ga(this, f))), f += 1;
      }
      r = i.join("");
      break;
    default:
      switch (e) {
        case 1:
          return n = ga(this, this.l), this.l++, n;
        case 2:
          return n = (a === "i" ? Mc : Hr)(this, this.l), this.l += 2, n;
        case 4:
        case -4:
          return a === "i" || (this[this.l + 3] & 128) === 0 ? (n = (e > 0 ? ra : Bc)(this, this.l), this.l += 4, n) : (t = _r(this, this.l), this.l += 4, t);
        case 8:
        case -8:
          if (a === "f")
            return e == 8 ? t = Et(this, this.l) : t = Et([this[this.l + 7], this[this.l + 6], this[this.l + 5], this[this.l + 4], this[this.l + 3], this[this.l + 2], this[this.l + 1], this[this.l + 0]], 0), this.l += 8, t;
          e = 8;
        /* falls through */
        case 16:
          r = si(this, this.l, e);
          break;
      }
  }
  return this.l += e, r;
}
var Uc = function(e, a, r) {
  e[r] = a & 255, e[r + 1] = a >>> 8 & 255, e[r + 2] = a >>> 16 & 255, e[r + 3] = a >>> 24 & 255;
}, Hc = function(e, a, r) {
  e[r] = a & 255, e[r + 1] = a >> 8 & 255, e[r + 2] = a >> 16 & 255, e[r + 3] = a >> 24 & 255;
}, Wc = function(e, a, r) {
  e[r] = a & 255, e[r + 1] = a >>> 8 & 255;
};
function Vc(e, a, r) {
  var n = 0, t = 0;
  if (r === "dbcs") {
    for (t = 0; t != a.length; ++t) Wc(this, a.charCodeAt(t), this.l + 2 * t);
    n = 2 * a.length;
  } else if (r === "sbcs") {
    for (a = a.replace(/[^\x00-\x7F]/g, "_"), t = 0; t != a.length; ++t) this[this.l + t] = a.charCodeAt(t) & 255;
    n = a.length;
  } else if (r === "hex") {
    for (; t < e; ++t)
      this[this.l++] = parseInt(a.slice(2 * t, 2 * t + 2), 16) || 0;
    return this;
  } else if (r === "utf16le") {
    var i = Math.min(this.l + e, this.length);
    for (t = 0; t < Math.min(a.length, e); ++t) {
      var s = a.charCodeAt(t);
      this[this.l++] = s & 255, this[this.l++] = s >> 8;
    }
    for (; this.l < i; ) this[this.l++] = 0;
    return this;
  } else switch (e) {
    case 1:
      n = 1, this[this.l] = a & 255;
      break;
    case 2:
      n = 2, this[this.l] = a & 255, a >>>= 8, this[this.l + 1] = a & 255;
      break;
    case 3:
      n = 3, this[this.l] = a & 255, a >>>= 8, this[this.l + 1] = a & 255, a >>>= 8, this[this.l + 2] = a & 255;
      break;
    case 4:
      n = 4, Uc(this, a, this.l);
      break;
    case 8:
      if (n = 8, r === "f") {
        bc(this, a, this.l);
        break;
      }
    /* falls through */
    case 16:
      break;
    case -4:
      n = 4, Hc(this, a, this.l);
      break;
  }
  return this.l += n, this;
}
function _i(e, a) {
  var r = si(this, this.l, e.length >> 1);
  if (r !== e) throw new Error(a + "Expected " + e + " saw " + r);
  this.l += e.length >> 1;
}
function Ze(e, a) {
  e.l = a, e.read_shift = /*::(*/
  La, e.chk = _i, e.write_shift = Vc;
}
function or(e, a) {
  e.l += a;
}
function Ke(e) {
  var a = qr(e);
  return Ze(a, 0), a;
}
function zr(e, a, r) {
  if (e) {
    var n, t, i;
    Ze(e, e.l || 0);
    for (var s = e.length, c = 0, o = 0; e.l < s; ) {
      c = e.read_shift(1), c & 128 && (c = (c & 127) + ((e.read_shift(1) & 127) << 7));
      var f = St[c] || St[65535];
      for (n = e.read_shift(1), i = n & 127, t = 1; t < 4 && n & 128; ++t) i += ((n = e.read_shift(1)) & 127) << 7 * t;
      o = e.l + i;
      var l = f.f && f.f(e, i, r);
      if (e.l = o, a(l, f, c)) return;
    }
  }
}
function Gt() {
  var e = [], a = Ae ? 256 : 2048, r = function(f) {
    var l = Ke(f);
    return Ze(l, 0), l;
  }, n = r(a), t = function() {
    n && (n.length > n.l && (n = n.slice(0, n.l), n.l = n.length), n.length > 0 && e.push(n), n = null);
  }, i = function(f) {
    return n && f < n.length - n.l ? n : (t(), n = r(Math.max(f + 1, a)));
  }, s = function() {
    return t(), Kr(e);
  }, c = function(f) {
    t(), n = f, n.l == null && (n.l = n.length), i(a);
  };
  return { next: i, push: c, end: s, _bufs: e };
}
function ba(e, a, r) {
  var n = Qe(e);
  if (a.s ? (n.cRel && (n.c += a.s.c), n.rRel && (n.r += a.s.r)) : (n.cRel && (n.c += a.c), n.rRel && (n.r += a.r)), !r || r.biff < 12) {
    for (; n.c >= 256; ) n.c -= 256;
    for (; n.r >= 65536; ) n.r -= 65536;
  }
  return n;
}
function rn(e, a, r) {
  var n = Qe(e);
  return n.s = ba(n.s, a.s, r), n.e = ba(n.e, a.s, r), n;
}
function Ma(e, a) {
  if (e.cRel && e.c < 0)
    for (e = Qe(e); e.c < 0; ) e.c += a > 8 ? 16384 : 256;
  if (e.rRel && e.r < 0)
    for (e = Qe(e); e.r < 0; ) e.r += a > 8 ? 1048576 : a > 5 ? 65536 : 16384;
  var r = me(e);
  return !e.cRel && e.cRel != null && (r = zc(r)), !e.rRel && e.rRel != null && (r = Gc(r)), r;
}
function Lt(e, a) {
  return e.s.r == 0 && !e.s.rRel && e.e.r == (a.biff >= 12 ? 1048575 : a.biff >= 8 ? 65536 : 16384) && !e.e.rRel ? (e.s.cRel ? "" : "$") + Ye(e.s.c) + ":" + (e.e.cRel ? "" : "$") + Ye(e.e.c) : e.s.c == 0 && !e.s.cRel && e.e.c == (a.biff >= 12 ? 16383 : 255) && !e.e.cRel ? (e.s.rRel ? "" : "$") + er(e.s.r) + ":" + (e.e.rRel ? "" : "$") + er(e.e.r) : Ma(e.s, a.biff) + ":" + Ma(e.e, a.biff);
}
function l0(e) {
  return parseInt(Xc(e), 10) - 1;
}
function er(e) {
  return "" + (e + 1);
}
function Gc(e) {
  return e.replace(/([A-Z]|^)(\d+)$/, "$1$$$2");
}
function Xc(e) {
  return e.replace(/\$(\d+)$/, "$1");
}
function u0(e) {
  for (var a = $c(e), r = 0, n = 0; n !== a.length; ++n) r = 26 * r + a.charCodeAt(n) - 64;
  return r - 1;
}
function Ye(e) {
  if (e < 0) throw new Error("invalid column " + e);
  var a = "";
  for (++e; e; e = Math.floor((e - 1) / 26)) a = String.fromCharCode((e - 1) % 26 + 65) + a;
  return a;
}
function zc(e) {
  return e.replace(/^([A-Z])/, "$$$1");
}
function $c(e) {
  return e.replace(/^\$([A-Z])/, "$1");
}
function Kc(e) {
  return e.replace(/(\$?[A-Z]*)(\$?\d*)/, "$1,$2").split(",");
}
function xr(e) {
  for (var a = 0, r = 0, n = 0; n < e.length; ++n) {
    var t = e.charCodeAt(n);
    t >= 48 && t <= 57 ? a = 10 * a + (t - 48) : t >= 65 && t <= 90 && (r = 26 * r + (t - 64));
  }
  return { c: r - 1, r: a - 1 };
}
function me(e) {
  for (var a = e.c + 1, r = ""; a; a = (a - 1) / 26 | 0) r = String.fromCharCode((a - 1) % 26 + 65) + r;
  return r + (e.r + 1);
}
function Sa(e) {
  var a = e.indexOf(":");
  return a == -1 ? { s: xr(e), e: xr(e) } : { s: xr(e.slice(0, a)), e: xr(e.slice(a + 1)) };
}
function Se(e, a) {
  return typeof a > "u" || typeof a == "number" ? Se(e.s, e.e) : (typeof e != "string" && (e = me(e)), typeof a != "string" && (a = me(a)), e == a ? e : e + ":" + a);
}
function Ue(e) {
  var a = { s: { c: 0, r: 0 }, e: { c: 0, r: 0 } }, r = 0, n = 0, t = 0, i = e.length;
  for (r = 0; n < i && !((t = e.charCodeAt(n) - 64) < 1 || t > 26); ++n)
    r = 26 * r + t;
  for (a.s.c = --r, r = 0; n < i && !((t = e.charCodeAt(n) - 48) < 0 || t > 9); ++n)
    r = 10 * r + t;
  if (a.s.r = --r, n === i || t != 10)
    return a.e.c = a.s.c, a.e.r = a.s.r, a;
  for (++n, r = 0; n != i && !((t = e.charCodeAt(n) - 64) < 1 || t > 26); ++n)
    r = 26 * r + t;
  for (a.e.c = --r, r = 0; n != i && !((t = e.charCodeAt(n) - 48) < 0 || t > 9); ++n)
    r = 10 * r + t;
  return a.e.r = --r, a;
}
function an(e, a) {
  var r = e.t == "d" && a instanceof Date;
  if (e.z != null) try {
    return e.w = Fr(e.z, r ? pr(a) : a);
  } catch {
  }
  try {
    return e.w = Fr((e.XF || {}).numFmtId || (r ? 14 : 0), r ? pr(a) : a);
  } catch {
    return "" + a;
  }
}
function Gr(e, a, r) {
  return e == null || e.t == null || e.t == "z" ? "" : e.w !== void 0 ? e.w : (e.t == "d" && !e.z && r && r.dateNF && (e.z = r.dateNF), e.t == "e" ? ha[e.v] || e.v : a == null ? an(e, e.v) : an(e, a));
}
function Qr(e, a) {
  var r = a && a.sheet ? a.sheet : "Sheet1", n = {};
  return n[r] = e, { SheetNames: [r], Sheets: n };
}
function Ei(e, a, r) {
  var n = r || {}, t = e ? Array.isArray(e) : n.dense, i = e || (t ? [] : {}), s = 0, c = 0;
  if (i && n.origin != null) {
    if (typeof n.origin == "number") s = n.origin;
    else {
      var o = typeof n.origin == "string" ? xr(n.origin) : n.origin;
      s = o.r, c = o.c;
    }
    i["!ref"] || (i["!ref"] = "A1:A1");
  }
  var f = { s: { c: 1e7, r: 1e7 }, e: { c: 0, r: 0 } };
  if (i["!ref"]) {
    var l = Ue(i["!ref"]);
    f.s.c = l.s.c, f.s.r = l.s.r, f.e.c = Math.max(f.e.c, l.e.c), f.e.r = Math.max(f.e.r, l.e.r), s == -1 && (f.e.r = s = l.e.r + 1);
  }
  for (var u = 0; u != a.length; ++u)
    if (a[u]) {
      if (!Array.isArray(a[u])) throw new Error("aoa_to_sheet expects an array of arrays");
      for (var h = 0; h != a[u].length; ++h)
        if (!(typeof a[u][h] > "u")) {
          var d = { v: a[u][h] }, p = s + u, x = c + h;
          if (f.s.r > p && (f.s.r = p), f.s.c > x && (f.s.c = x), f.e.r < p && (f.e.r = p), f.e.c < x && (f.e.c = x), a[u][h] && typeof a[u][h] == "object" && !Array.isArray(a[u][h]) && !(a[u][h] instanceof Date)) d = a[u][h];
          else if (Array.isArray(d.v) && (d.f = a[u][h][1], d.v = d.v[0]), d.v === null)
            if (d.f) d.t = "n";
            else if (n.nullError)
              d.t = "e", d.v = 0;
            else if (n.sheetStubs) d.t = "z";
            else continue;
          else typeof d.v == "number" ? d.t = "n" : typeof d.v == "boolean" ? d.t = "b" : d.v instanceof Date ? (d.z = n.dateNF || Ee[14], n.cellDates ? (d.t = "d", d.w = Fr(d.z, pr(d.v))) : (d.t = "n", d.v = pr(d.v), d.w = Fr(d.z, d.v))) : d.t = "s";
          if (t)
            i[p] || (i[p] = []), i[p][x] && i[p][x].z && (d.z = i[p][x].z), i[p][x] = d;
          else {
            var g = me({ c: x, r: p });
            i[g] && i[g].z && (d.z = i[g].z), i[g] = d;
          }
        }
    }
  return f.s.c < 1e7 && (i["!ref"] = Se(f)), i;
}
function Ca(e, a) {
  return Ei(null, e, a);
}
function Yc(e) {
  return e.read_shift(4, "i");
}
function fr(e) {
  var a = e.read_shift(4);
  return a === 0 ? "" : e.read_shift(a, "dbcs");
}
function jc(e) {
  return { ich: e.read_shift(2), ifnt: e.read_shift(2) };
}
function h0(e, a) {
  var r = e.l, n = e.read_shift(1), t = fr(e), i = [], s = { t, h: t };
  if ((n & 1) !== 0) {
    for (var c = e.read_shift(4), o = 0; o != c; ++o) i.push(jc(e));
    s.r = i;
  } else s.r = [{ ich: 0, ifnt: 0 }];
  return e.l = r + a, s;
}
var Jc = h0;
function Sr(e) {
  var a = e.read_shift(4), r = e.read_shift(2);
  return r += e.read_shift(1) << 16, e.l++, { c: a, iStyleRef: r };
}
function la(e) {
  var a = e.read_shift(2);
  return a += e.read_shift(1) << 16, e.l++, { c: -1, iStyleRef: a };
}
var qc = fr;
function x0(e) {
  var a = e.read_shift(4);
  return a === 0 || a === 4294967295 ? "" : e.read_shift(a, "dbcs");
}
var Zc = fr, Xt = x0;
function d0(e) {
  var a = e.slice(e.l, e.l + 4), r = a[0] & 1, n = a[0] & 2;
  e.l += 4;
  var t = n === 0 ? Et([0, 0, 0, 0, a[0] & 252, a[1], a[2], a[3]], 0) : ra(a, 0) >> 2;
  return r ? t / 100 : t;
}
function Ti(e) {
  var a = { s: {}, e: {} };
  return a.s.r = e.read_shift(4), a.e.r = e.read_shift(4), a.s.c = e.read_shift(4), a.e.c = e.read_shift(4), a;
}
var ua = Ti;
function sr(e) {
  if (e.length - e.l < 8) throw "XLS Xnum Buffer underflow";
  return e.read_shift(8, "f");
}
function Qc(e) {
  var a = {}, r = e.read_shift(1), n = r >>> 1, t = e.read_shift(1), i = e.read_shift(2, "i"), s = e.read_shift(1), c = e.read_shift(1), o = e.read_shift(1);
  switch (e.l++, n) {
    case 0:
      a.auto = 1;
      break;
    case 1:
      a.index = t;
      var f = na[t];
      f && (a.rgb = ja(f));
      break;
    case 2:
      a.rgb = ja([s, c, o]);
      break;
    case 3:
      a.theme = t;
      break;
  }
  return i != 0 && (a.tint = i > 0 ? i / 32767 : i / 32768), a;
}
function ef(e) {
  var a = e.read_shift(1);
  e.l++;
  var r = {
    fBold: a & 1,
    fItalic: a & 2,
    fUnderline: a & 4,
    fStrikeout: a & 8,
    fOutline: a & 16,
    fShadow: a & 32,
    fCondense: a & 64,
    fExtend: a & 128
  };
  return r;
}
function ki(e, a) {
  var r = { 2: "BITMAP", 3: "METAFILEPICT", 8: "DIB", 14: "ENHMETAFILE" }, n = e.read_shift(4);
  switch (n) {
    case 0:
      return "";
    case 4294967295:
    case 4294967294:
      return r[e.read_shift(4)] || "";
  }
  if (n > 400) throw new Error("Unsupported Clipboard: " + n.toString(16));
  return e.l -= 4, e.read_shift(0, a == 1 ? "lpstr" : "lpwstr");
}
function rf(e) {
  return ki(e, 1);
}
function af(e) {
  return ki(e, 2);
}
var p0 = 2, mr = 3, ft = 11, tn = 12, Tt = 19, ot = 64, tf = 65, nf = 71, sf = 4108, cf = 4126, Je = 80, wi = 81, ff = [Je, wi], of = {
  /*::[*/
  1: { n: "CodePage", t: p0 },
  /*::[*/
  2: { n: "Category", t: Je },
  /*::[*/
  3: { n: "PresentationFormat", t: Je },
  /*::[*/
  4: { n: "ByteCount", t: mr },
  /*::[*/
  5: { n: "LineCount", t: mr },
  /*::[*/
  6: { n: "ParagraphCount", t: mr },
  /*::[*/
  7: { n: "SlideCount", t: mr },
  /*::[*/
  8: { n: "NoteCount", t: mr },
  /*::[*/
  9: { n: "HiddenCount", t: mr },
  /*::[*/
  10: { n: "MultimediaClipCount", t: mr },
  /*::[*/
  11: { n: "ScaleCrop", t: ft },
  /*::[*/
  12: {
    n: "HeadingPairs",
    t: sf
    /* VT_VECTOR | VT_VARIANT */
  },
  /*::[*/
  13: {
    n: "TitlesOfParts",
    t: cf
    /* VT_VECTOR | VT_LPSTR */
  },
  /*::[*/
  14: { n: "Manager", t: Je },
  /*::[*/
  15: { n: "Company", t: Je },
  /*::[*/
  16: { n: "LinksUpToDate", t: ft },
  /*::[*/
  17: { n: "CharacterCount", t: mr },
  /*::[*/
  19: { n: "SharedDoc", t: ft },
  /*::[*/
  22: { n: "HyperlinksChanged", t: ft },
  /*::[*/
  23: { n: "AppVersion", t: mr, p: "version" },
  /*::[*/
  24: { n: "DigSig", t: tf },
  /*::[*/
  26: { n: "ContentType", t: Je },
  /*::[*/
  27: { n: "ContentStatus", t: Je },
  /*::[*/
  28: { n: "Language", t: Je },
  /*::[*/
  29: { n: "Version", t: Je },
  /*::[*/
  255: {},
  /* [MS-OLEPS] 2.18 */
  /*::[*/
  2147483648: { n: "Locale", t: Tt },
  /*::[*/
  2147483651: { n: "Behavior", t: Tt },
  /*::[*/
  1919054434: {}
}, lf = {
  /*::[*/
  1: { n: "CodePage", t: p0 },
  /*::[*/
  2: { n: "Title", t: Je },
  /*::[*/
  3: { n: "Subject", t: Je },
  /*::[*/
  4: { n: "Author", t: Je },
  /*::[*/
  5: { n: "Keywords", t: Je },
  /*::[*/
  6: { n: "Comments", t: Je },
  /*::[*/
  7: { n: "Template", t: Je },
  /*::[*/
  8: { n: "LastAuthor", t: Je },
  /*::[*/
  9: { n: "RevNumber", t: Je },
  /*::[*/
  10: { n: "EditTime", t: ot },
  /*::[*/
  11: { n: "LastPrinted", t: ot },
  /*::[*/
  12: { n: "CreatedDate", t: ot },
  /*::[*/
  13: { n: "ModifiedDate", t: ot },
  /*::[*/
  14: { n: "PageCount", t: mr },
  /*::[*/
  15: { n: "WordCount", t: mr },
  /*::[*/
  16: { n: "CharCount", t: mr },
  /*::[*/
  17: { n: "Thumbnail", t: nf },
  /*::[*/
  18: { n: "Application", t: Je },
  /*::[*/
  19: { n: "DocSecurity", t: mr },
  /*::[*/
  255: {},
  /* [MS-OLEPS] 2.18 */
  /*::[*/
  2147483648: { n: "Locale", t: Tt },
  /*::[*/
  2147483651: { n: "Behavior", t: Tt },
  /*::[*/
  1919054434: {}
}, nn = {
  /*::[*/
  1: "US",
  // United States
  /*::[*/
  2: "CA",
  // Canada
  /*::[*/
  3: "",
  // Latin America (except Brazil)
  /*::[*/
  7: "RU",
  // Russia
  /*::[*/
  20: "EG",
  // Egypt
  /*::[*/
  30: "GR",
  // Greece
  /*::[*/
  31: "NL",
  // Netherlands
  /*::[*/
  32: "BE",
  // Belgium
  /*::[*/
  33: "FR",
  // France
  /*::[*/
  34: "ES",
  // Spain
  /*::[*/
  36: "HU",
  // Hungary
  /*::[*/
  39: "IT",
  // Italy
  /*::[*/
  41: "CH",
  // Switzerland
  /*::[*/
  43: "AT",
  // Austria
  /*::[*/
  44: "GB",
  // United Kingdom
  /*::[*/
  45: "DK",
  // Denmark
  /*::[*/
  46: "SE",
  // Sweden
  /*::[*/
  47: "NO",
  // Norway
  /*::[*/
  48: "PL",
  // Poland
  /*::[*/
  49: "DE",
  // Germany
  /*::[*/
  52: "MX",
  // Mexico
  /*::[*/
  55: "BR",
  // Brazil
  /*::[*/
  61: "AU",
  // Australia
  /*::[*/
  64: "NZ",
  // New Zealand
  /*::[*/
  66: "TH",
  // Thailand
  /*::[*/
  81: "JP",
  // Japan
  /*::[*/
  82: "KR",
  // Korea
  /*::[*/
  84: "VN",
  // Viet Nam
  /*::[*/
  86: "CN",
  // China
  /*::[*/
  90: "TR",
  // Turkey
  /*::[*/
  105: "JS",
  // Ramastan
  /*::[*/
  213: "DZ",
  // Algeria
  /*::[*/
  216: "MA",
  // Morocco
  /*::[*/
  218: "LY",
  // Libya
  /*::[*/
  351: "PT",
  // Portugal
  /*::[*/
  354: "IS",
  // Iceland
  /*::[*/
  358: "FI",
  // Finland
  /*::[*/
  420: "CZ",
  // Czech Republic
  /*::[*/
  886: "TW",
  // Taiwan
  /*::[*/
  961: "LB",
  // Lebanon
  /*::[*/
  962: "JO",
  // Jordan
  /*::[*/
  963: "SY",
  // Syria
  /*::[*/
  964: "IQ",
  // Iraq
  /*::[*/
  965: "KW",
  // Kuwait
  /*::[*/
  966: "SA",
  // Saudi Arabia
  /*::[*/
  971: "AE",
  // United Arab Emirates
  /*::[*/
  972: "IL",
  // Israel
  /*::[*/
  974: "QA",
  // Qatar
  /*::[*/
  981: "IR",
  // Iran
  /*::[*/
  65535: "US"
  // United States
}, uf = [
  null,
  "solid",
  "mediumGray",
  "darkGray",
  "lightGray",
  "darkHorizontal",
  "darkVertical",
  "darkDown",
  "darkUp",
  "darkGrid",
  "darkTrellis",
  "lightHorizontal",
  "lightVertical",
  "lightDown",
  "lightUp",
  "lightGrid",
  "lightTrellis",
  "gray125",
  "gray0625"
];
function hf(e) {
  return e.map(function(a) {
    return [a >> 16 & 255, a >> 8 & 255, a & 255];
  });
}
var xf = /* @__PURE__ */ hf([
  /* Color Constants */
  0,
  16777215,
  16711680,
  65280,
  255,
  16776960,
  16711935,
  65535,
  /* Overridable Defaults */
  0,
  16777215,
  16711680,
  65280,
  255,
  16776960,
  16711935,
  65535,
  8388608,
  32768,
  128,
  8421376,
  8388736,
  32896,
  12632256,
  8421504,
  10066431,
  10040166,
  16777164,
  13434879,
  6684774,
  16744576,
  26316,
  13421823,
  128,
  16711935,
  16776960,
  65535,
  8388736,
  8388608,
  32896,
  255,
  52479,
  13434879,
  13434828,
  16777113,
  10079487,
  16751052,
  13408767,
  16764057,
  3368703,
  3394764,
  10079232,
  16763904,
  16750848,
  16737792,
  6710937,
  9868950,
  13158,
  3381606,
  13056,
  3355392,
  10040064,
  10040166,
  3355545,
  3355443,
  /* Other entries to appease BIFF8/12 */
  16777215,
  /* 0x40 icvForeground ?? */
  0,
  /* 0x41 icvBackground ?? */
  0,
  /* 0x42 icvFrame ?? */
  0,
  /* 0x43 icv3D ?? */
  0,
  /* 0x44 icv3DText ?? */
  0,
  /* 0x45 icv3DHilite ?? */
  0,
  /* 0x46 icv3DShadow ?? */
  0,
  /* 0x47 icvHilite ?? */
  0,
  /* 0x48 icvCtlText ?? */
  0,
  /* 0x49 icvCtlScrl ?? */
  0,
  /* 0x4A icvCtlInv ?? */
  0,
  /* 0x4B icvCtlBody ?? */
  0,
  /* 0x4C icvCtlFrame ?? */
  0,
  /* 0x4D icvCtlFore ?? */
  0,
  /* 0x4E icvCtlBack ?? */
  0,
  /* 0x4F icvCtlNeutral */
  0,
  /* 0x50 icvInfoBk ?? */
  0
  /* 0x51 icvInfoText ?? */
]), na = /* @__PURE__ */ Qe(xf), ha = {
  /*::[*/
  0: "#NULL!",
  /*::[*/
  7: "#DIV/0!",
  /*::[*/
  15: "#VALUE!",
  /*::[*/
  23: "#REF!",
  /*::[*/
  29: "#NAME?",
  /*::[*/
  36: "#NUM!",
  /*::[*/
  42: "#N/A",
  /*::[*/
  43: "#GETTING_DATA",
  /*::[*/
  255: "#WTF?"
}, Ai = {
  "#NULL!": 0,
  "#DIV/0!": 7,
  "#VALUE!": 15,
  "#REF!": 23,
  "#NAME?": 29,
  "#NUM!": 36,
  "#N/A": 42,
  "#GETTING_DATA": 43,
  "#WTF?": 255
}, sn = {
  /* Workbook */
  "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet.main+xml": "workbooks",
  "application/vnd.ms-excel.sheet.macroEnabled.main+xml": "workbooks",
  "application/vnd.ms-excel.sheet.binary.macroEnabled.main": "workbooks",
  "application/vnd.ms-excel.addin.macroEnabled.main+xml": "workbooks",
  "application/vnd.openxmlformats-officedocument.spreadsheetml.template.main+xml": "workbooks",
  /* Worksheet */
  "application/vnd.openxmlformats-officedocument.spreadsheetml.worksheet+xml": "sheets",
  "application/vnd.ms-excel.worksheet": "sheets",
  "application/vnd.ms-excel.binIndexWs": "TODO",
  /* Binary Index */
  /* Chartsheet */
  "application/vnd.openxmlformats-officedocument.spreadsheetml.chartsheet+xml": "charts",
  "application/vnd.ms-excel.chartsheet": "charts",
  /* Macrosheet */
  "application/vnd.ms-excel.macrosheet+xml": "macros",
  "application/vnd.ms-excel.macrosheet": "macros",
  "application/vnd.ms-excel.intlmacrosheet": "TODO",
  "application/vnd.ms-excel.binIndexMs": "TODO",
  /* Binary Index */
  /* Dialogsheet */
  "application/vnd.openxmlformats-officedocument.spreadsheetml.dialogsheet+xml": "dialogs",
  "application/vnd.ms-excel.dialogsheet": "dialogs",
  /* Shared Strings */
  "application/vnd.openxmlformats-officedocument.spreadsheetml.sharedStrings+xml": "strs",
  "application/vnd.ms-excel.sharedStrings": "strs",
  /* Styles */
  "application/vnd.openxmlformats-officedocument.spreadsheetml.styles+xml": "styles",
  "application/vnd.ms-excel.styles": "styles",
  /* File Properties */
  "application/vnd.openxmlformats-package.core-properties+xml": "coreprops",
  "application/vnd.openxmlformats-officedocument.custom-properties+xml": "custprops",
  "application/vnd.openxmlformats-officedocument.extended-properties+xml": "extprops",
  /* Custom Data Properties */
  "application/vnd.openxmlformats-officedocument.customXmlProperties+xml": "TODO",
  "application/vnd.openxmlformats-officedocument.spreadsheetml.customProperty": "TODO",
  /* Comments */
  "application/vnd.openxmlformats-officedocument.spreadsheetml.comments+xml": "comments",
  "application/vnd.ms-excel.comments": "comments",
  "application/vnd.ms-excel.threadedcomments+xml": "threadedcomments",
  "application/vnd.ms-excel.person+xml": "people",
  /* Metadata (Stock/Geography and Dynamic Array) */
  "application/vnd.openxmlformats-officedocument.spreadsheetml.sheetMetadata+xml": "metadata",
  "application/vnd.ms-excel.sheetMetadata": "metadata",
  /* PivotTable */
  "application/vnd.ms-excel.pivotTable": "TODO",
  "application/vnd.openxmlformats-officedocument.spreadsheetml.pivotTable+xml": "TODO",
  /* Chart Objects */
  "application/vnd.openxmlformats-officedocument.drawingml.chart+xml": "TODO",
  /* Chart Colors */
  "application/vnd.ms-office.chartcolorstyle+xml": "TODO",
  /* Chart Style */
  "application/vnd.ms-office.chartstyle+xml": "TODO",
  /* Chart Advanced */
  "application/vnd.ms-office.chartex+xml": "TODO",
  /* Calculation Chain */
  "application/vnd.ms-excel.calcChain": "calcchains",
  "application/vnd.openxmlformats-officedocument.spreadsheetml.calcChain+xml": "calcchains",
  /* Printer Settings */
  "application/vnd.openxmlformats-officedocument.spreadsheetml.printerSettings": "TODO",
  /* ActiveX */
  "application/vnd.ms-office.activeX": "TODO",
  "application/vnd.ms-office.activeX+xml": "TODO",
  /* Custom Toolbars */
  "application/vnd.ms-excel.attachedToolbars": "TODO",
  /* External Data Connections */
  "application/vnd.ms-excel.connections": "TODO",
  "application/vnd.openxmlformats-officedocument.spreadsheetml.connections+xml": "TODO",
  /* External Links */
  "application/vnd.ms-excel.externalLink": "links",
  "application/vnd.openxmlformats-officedocument.spreadsheetml.externalLink+xml": "links",
  /* PivotCache */
  "application/vnd.ms-excel.pivotCacheDefinition": "TODO",
  "application/vnd.ms-excel.pivotCacheRecords": "TODO",
  "application/vnd.openxmlformats-officedocument.spreadsheetml.pivotCacheDefinition+xml": "TODO",
  "application/vnd.openxmlformats-officedocument.spreadsheetml.pivotCacheRecords+xml": "TODO",
  /* Query Table */
  "application/vnd.ms-excel.queryTable": "TODO",
  "application/vnd.openxmlformats-officedocument.spreadsheetml.queryTable+xml": "TODO",
  /* Shared Workbook */
  "application/vnd.ms-excel.userNames": "TODO",
  "application/vnd.ms-excel.revisionHeaders": "TODO",
  "application/vnd.ms-excel.revisionLog": "TODO",
  "application/vnd.openxmlformats-officedocument.spreadsheetml.revisionHeaders+xml": "TODO",
  "application/vnd.openxmlformats-officedocument.spreadsheetml.revisionLog+xml": "TODO",
  "application/vnd.openxmlformats-officedocument.spreadsheetml.userNames+xml": "TODO",
  /* Single Cell Table */
  "application/vnd.ms-excel.tableSingleCells": "TODO",
  "application/vnd.openxmlformats-officedocument.spreadsheetml.tableSingleCells+xml": "TODO",
  /* Slicer */
  "application/vnd.ms-excel.slicer": "TODO",
  "application/vnd.ms-excel.slicerCache": "TODO",
  "application/vnd.ms-excel.slicer+xml": "TODO",
  "application/vnd.ms-excel.slicerCache+xml": "TODO",
  /* Sort Map */
  "application/vnd.ms-excel.wsSortMap": "TODO",
  /* Table */
  "application/vnd.ms-excel.table": "TODO",
  "application/vnd.openxmlformats-officedocument.spreadsheetml.table+xml": "TODO",
  /* Themes */
  "application/vnd.openxmlformats-officedocument.theme+xml": "themes",
  /* Theme Override */
  "application/vnd.openxmlformats-officedocument.themeOverride+xml": "TODO",
  /* Timeline */
  "application/vnd.ms-excel.Timeline+xml": "TODO",
  /* verify */
  "application/vnd.ms-excel.TimelineCache+xml": "TODO",
  /* verify */
  /* VBA */
  "application/vnd.ms-office.vbaProject": "vba",
  "application/vnd.ms-office.vbaProjectSignature": "TODO",
  /* Volatile Dependencies */
  "application/vnd.ms-office.volatileDependencies": "TODO",
  "application/vnd.openxmlformats-officedocument.spreadsheetml.volatileDependencies+xml": "TODO",
  /* Control Properties */
  "application/vnd.ms-excel.controlproperties+xml": "TODO",
  /* Data Model */
  "application/vnd.openxmlformats-officedocument.model+data": "TODO",
  /* Survey */
  "application/vnd.ms-excel.Survey+xml": "TODO",
  /* Drawing */
  "application/vnd.openxmlformats-officedocument.drawing+xml": "drawings",
  "application/vnd.openxmlformats-officedocument.drawingml.chartshapes+xml": "TODO",
  "application/vnd.openxmlformats-officedocument.drawingml.diagramColors+xml": "TODO",
  "application/vnd.openxmlformats-officedocument.drawingml.diagramData+xml": "TODO",
  "application/vnd.openxmlformats-officedocument.drawingml.diagramLayout+xml": "TODO",
  "application/vnd.openxmlformats-officedocument.drawingml.diagramStyle+xml": "TODO",
  /* VML */
  "application/vnd.openxmlformats-officedocument.vmlDrawing": "TODO",
  "application/vnd.openxmlformats-package.relationships+xml": "rels",
  "application/vnd.openxmlformats-officedocument.oleObject": "TODO",
  /* Image */
  "image/png": "TODO",
  sheet: "js"
};
function df() {
  return {
    workbooks: [],
    sheets: [],
    charts: [],
    dialogs: [],
    macros: [],
    rels: [],
    strs: [],
    comments: [],
    threadedcomments: [],
    links: [],
    coreprops: [],
    extprops: [],
    custprops: [],
    themes: [],
    styles: [],
    calcchains: [],
    vba: [],
    drawings: [],
    metadata: [],
    people: [],
    TODO: [],
    xmlns: ""
  };
}
function pf(e) {
  var a = df();
  if (!e || !e.match) return a;
  var r = {};
  if ((e.match(lr) || []).forEach(function(n) {
    var t = ge(n);
    switch (t[0].replace(kc, "<")) {
      case "<?xml":
        break;
      case "<Types":
        a.xmlns = t["xmlns" + (t[0].match(/<(\w+):/) || ["", ""])[1]];
        break;
      case "<Default":
        r[t.Extension] = t.ContentType;
        break;
      case "<Override":
        a[sn[t.ContentType]] !== void 0 && a[sn[t.ContentType]].push(t.PartName);
        break;
    }
  }), a.xmlns !== Nc.CT) throw new Error("Unknown Namespace: " + a.xmlns);
  return a.calcchain = a.calcchains.length > 0 ? a.calcchains[0] : "", a.sst = a.strs.length > 0 ? a.strs[0] : "", a.style = a.styles.length > 0 ? a.styles[0] : "", a.defaults = r, delete a.calcchains, a;
}
var ma = {
  WB: "http://schemas.openxmlformats.org/officeDocument/2006/relationships/officeDocument",
  SHEET: "http://sheetjs.openxmlformats.org/officeDocument/2006/relationships/officeDocument",
  HLINK: "http://schemas.openxmlformats.org/officeDocument/2006/relationships/hyperlink",
  VML: "http://schemas.openxmlformats.org/officeDocument/2006/relationships/vmlDrawing",
  XPATH: "http://schemas.openxmlformats.org/officeDocument/2006/relationships/externalLinkPath",
  XMISS: "http://schemas.microsoft.com/office/2006/relationships/xlExternalLinkPath/xlPathMissing",
  XLINK: "http://schemas.openxmlformats.org/officeDocument/2006/relationships/externalLink",
  CXML: "http://schemas.openxmlformats.org/officeDocument/2006/relationships/customXml",
  CXMLP: "http://schemas.openxmlformats.org/officeDocument/2006/relationships/customXmlProps",
  CMNT: "http://schemas.openxmlformats.org/officeDocument/2006/relationships/comments",
  CORE_PROPS: "http://schemas.openxmlformats.org/package/2006/relationships/metadata/core-properties",
  EXT_PROPS: "http://schemas.openxmlformats.org/officeDocument/2006/relationships/extended-properties",
  CUST_PROPS: "http://schemas.openxmlformats.org/officeDocument/2006/relationships/custom-properties",
  SST: "http://schemas.openxmlformats.org/officeDocument/2006/relationships/sharedStrings",
  STY: "http://schemas.openxmlformats.org/officeDocument/2006/relationships/styles",
  THEME: "http://schemas.openxmlformats.org/officeDocument/2006/relationships/theme",
  CHART: "http://schemas.openxmlformats.org/officeDocument/2006/relationships/chart",
  CHARTEX: "http://schemas.microsoft.com/office/2014/relationships/chartEx",
  CS: "http://schemas.openxmlformats.org/officeDocument/2006/relationships/chartsheet",
  WS: [
    "http://schemas.openxmlformats.org/officeDocument/2006/relationships/worksheet",
    "http://purl.oclc.org/ooxml/officeDocument/relationships/worksheet"
  ],
  DS: "http://schemas.openxmlformats.org/officeDocument/2006/relationships/dialogsheet",
  MS: "http://schemas.microsoft.com/office/2006/relationships/xlMacrosheet",
  IMG: "http://schemas.openxmlformats.org/officeDocument/2006/relationships/image",
  DRAW: "http://schemas.openxmlformats.org/officeDocument/2006/relationships/drawing",
  XLMETA: "http://schemas.openxmlformats.org/officeDocument/2006/relationships/sheetMetadata",
  TCMNT: "http://schemas.microsoft.com/office/2017/10/relationships/threadedComment",
  PEOPLE: "http://schemas.microsoft.com/office/2017/10/relationships/person",
  VBA: "http://schemas.microsoft.com/office/2006/relationships/vbaProject"
};
function zt(e) {
  var a = e.lastIndexOf("/");
  return e.slice(0, a + 1) + "_rels/" + e.slice(a + 1) + ".rels";
}
function Ba(e, a) {
  var r = { "!id": {} };
  if (!e) return r;
  a.charAt(0) !== "/" && (a = "/" + a);
  var n = {};
  return (e.match(lr) || []).forEach(function(t) {
    var i = ge(t);
    if (i[0] === "<Relationship") {
      var s = {};
      s.Type = i.Type, s.Target = i.Target, s.Id = i.Id, i.TargetMode && (s.TargetMode = i.TargetMode);
      var c = i.TargetMode === "External" ? i.Target : Na(i.Target, a);
      r[c] = s, n[i.Id] = s;
    }
  }), r["!id"] = n, r;
}
var vf = "application/vnd.oasis.opendocument.spreadsheet";
function gf(e, a) {
  for (var r = f0(e), n, t; n = Ka.exec(r); ) switch (n[3]) {
    case "manifest":
      break;
    // 4.2 <manifest:manifest>
    case "file-entry":
      if (t = ge(n[0], !1), t.path == "/" && t.type !== vf) throw new Error("This OpenDocument is not a spreadsheet");
      break;
    case "encryption-data":
    // 4.4 <manifest:encryption-data>
    case "algorithm":
    // 4.5 <manifest:algorithm>
    case "start-key-generation":
    // 4.6 <manifest:start-key-generation>
    case "key-derivation":
      throw new Error("Unsupported ODS Encryption");
    default:
      if (a && a.WTF) throw n;
  }
}
var Ua = [
  ["cp:category", "Category"],
  ["cp:contentStatus", "ContentStatus"],
  ["cp:keywords", "Keywords"],
  ["cp:lastModifiedBy", "LastAuthor"],
  ["cp:lastPrinted", "LastPrinted"],
  ["cp:revision", "RevNumber"],
  ["cp:version", "Version"],
  ["dc:creator", "Author"],
  ["dc:description", "Comments"],
  ["dc:identifier", "Identifier"],
  ["dc:language", "Language"],
  ["dc:subject", "Subject"],
  ["dc:title", "Title"],
  ["dcterms:created", "CreatedDate", "date"],
  ["dcterms:modified", "ModifiedDate", "date"]
], mf = /* @__PURE__ */ (function() {
  for (var e = new Array(Ua.length), a = 0; a < Ua.length; ++a) {
    var r = Ua[a], n = "(?:" + r[0].slice(0, r[0].indexOf(":")) + ":)" + r[0].slice(r[0].indexOf(":") + 1);
    e[a] = new RegExp("<" + n + "[^>]*>([\\s\\S]*?)</" + n + ">");
  }
  return e;
})();
function Fi(e) {
  var a = {};
  e = Re(e);
  for (var r = 0; r < Ua.length; ++r) {
    var n = Ua[r], t = e.match(mf[r]);
    t != null && t.length > 0 && (a[n[1]] = Ce(t[1])), n[2] === "date" && a[n[1]] && (a[n[1]] = qe(a[n[1]]));
  }
  return a;
}
var _f = [
  ["Application", "Application", "string"],
  ["AppVersion", "AppVersion", "string"],
  ["Company", "Company", "string"],
  ["DocSecurity", "DocSecurity", "string"],
  ["Manager", "Manager", "string"],
  ["HyperlinksChanged", "HyperlinksChanged", "bool"],
  ["SharedDoc", "SharedDoc", "bool"],
  ["LinksUpToDate", "LinksUpToDate", "bool"],
  ["ScaleCrop", "ScaleCrop", "bool"],
  ["HeadingPairs", "HeadingPairs", "raw"],
  ["TitlesOfParts", "TitlesOfParts", "raw"]
];
function Si(e, a, r, n) {
  var t = [];
  if (typeof e == "string") t = j0(e, n);
  else for (var i = 0; i < e.length; ++i) t = t.concat(e[i].map(function(l) {
    return { v: l };
  }));
  var s = typeof a == "string" ? j0(a, n).map(function(l) {
    return l.v;
  }) : a, c = 0, o = 0;
  if (s.length > 0) for (var f = 0; f !== t.length; f += 2) {
    switch (o = +t[f + 1].v, t[f].v) {
      case "Worksheets":
      case "工作表":
      case "Листы":
      case "أوراق العمل":
      case "ワークシート":
      case "גליונות עבודה":
      case "Arbeitsblätter":
      case "Çalışma Sayfaları":
      case "Feuilles de calcul":
      case "Fogli di lavoro":
      case "Folhas de cálculo":
      case "Planilhas":
      case "Regneark":
      case "Hojas de cálculo":
      case "Werkbladen":
        r.Worksheets = o, r.SheetNames = s.slice(c, c + o);
        break;
      case "Named Ranges":
      case "Rangos con nombre":
      case "名前付き一覧":
      case "Benannte Bereiche":
      case "Navngivne områder":
        r.NamedRanges = o, r.DefinedNames = s.slice(c, c + o);
        break;
      case "Charts":
      case "Diagramme":
        r.Chartsheets = o, r.ChartNames = s.slice(c, c + o);
        break;
    }
    c += o;
  }
}
function Ef(e, a, r) {
  var n = {};
  return a || (a = {}), e = Re(e), _f.forEach(function(t) {
    var i = (e.match($a(t[0])) || [])[1];
    switch (t[2]) {
      case "string":
        i && (a[t[1]] = Ce(i));
        break;
      case "bool":
        a[t[1]] = i === "true";
        break;
      case "raw":
        var s = e.match(new RegExp("<" + t[0] + "[^>]*>([\\s\\S]*?)</" + t[0] + ">"));
        s && s.length > 0 && (n[t[1]] = s[1]);
        break;
    }
  }), n.HeadingPairs && n.TitlesOfParts && Si(n.HeadingPairs, n.TitlesOfParts, a, r), a;
}
var Tf = /<[^>]+>[^<]*/g;
function kf(e, a) {
  var r = {}, n = "", t = e.match(Tf);
  if (t) for (var i = 0; i != t.length; ++i) {
    var s = t[i], c = ge(s);
    switch (c[0]) {
      case "<?xml":
        break;
      case "<Properties":
        break;
      case "<property":
        n = Ce(c.name);
        break;
      case "</property>":
        n = null;
        break;
      default:
        if (s.indexOf("<vt:") === 0) {
          var o = s.split(">"), f = o[0].slice(4), l = o[1];
          switch (f) {
            case "lpstr":
            case "bstr":
            case "lpwstr":
              r[n] = Ce(l);
              break;
            case "bool":
              r[n] = Pe(l);
              break;
            case "i1":
            case "i2":
            case "i4":
            case "i8":
            case "int":
            case "uint":
              r[n] = parseInt(l, 10);
              break;
            case "r4":
            case "r8":
            case "decimal":
              r[n] = parseFloat(l);
              break;
            case "filetime":
            case "date":
              r[n] = qe(l);
              break;
            case "cy":
            case "error":
              r[n] = Ce(l);
              break;
            default:
              if (f.slice(-1) == "/") break;
              a.WTF && typeof console < "u" && console.warn("Unexpected", s, f, o);
          }
        } else if (s.slice(0, 2) !== "</") {
          if (a.WTF) throw new Error(s);
        }
    }
  }
  return r;
}
var wf = {
  Title: "Title",
  Subject: "Subject",
  Author: "Author",
  Keywords: "Keywords",
  Comments: "Description",
  LastAuthor: "LastAuthor",
  RevNumber: "Revision",
  Application: "AppName",
  /* TotalTime: 'TotalTime', */
  LastPrinted: "LastPrinted",
  CreatedDate: "Created",
  ModifiedDate: "LastSaved",
  /* Pages */
  /* Words */
  /* Characters */
  Category: "Category",
  /* PresentationFormat */
  Manager: "Manager",
  Company: "Company",
  /* Guid */
  /* HyperlinkBase */
  /* Bytes */
  /* Lines */
  /* Paragraphs */
  /* CharactersWithSpaces */
  AppVersion: "Version",
  ContentStatus: "ContentStatus",
  /* NOTE: missing from schema */
  Identifier: "Identifier",
  /* NOTE: missing from schema */
  Language: "Language"
  /* NOTE: missing from schema */
}, bt;
function Af(e, a, r) {
  bt || (bt = i0(wf)), a = bt[a] || a, e[a] = r;
}
function v0(e) {
  var a = e.read_shift(4), r = e.read_shift(4);
  return new Date((r / 1e7 * Math.pow(2, 32) + a / 1e7 - 11644473600) * 1e3).toISOString().replace(/\.000/, "");
}
function Ci(e, a, r) {
  var n = e.l, t = e.read_shift(0, "lpstr-cp");
  if (r) for (; e.l - n & 3; ) ++e.l;
  return t;
}
function yi(e, a, r) {
  var n = e.read_shift(0, "lpwstr");
  return n;
}
function Oi(e, a, r) {
  return a === 31 ? yi(e) : Ci(e, a, r);
}
function $t(e, a, r) {
  return Oi(e, a, r === !1 ? 0 : 4);
}
function Ff(e, a) {
  if (!a) throw new Error("VtUnalignedString must have positive length");
  return Oi(e, a, 0);
}
function Sf(e) {
  for (var a = e.read_shift(4), r = [], n = 0; n != a; ++n) {
    var t = e.l;
    r[n] = e.read_shift(0, "lpwstr").replace(dr, ""), e.l - t & 2 && (e.l += 2);
  }
  return r;
}
function Cf(e) {
  for (var a = e.read_shift(4), r = [], n = 0; n != a; ++n) r[n] = e.read_shift(0, "lpstr-cp").replace(dr, "");
  return r;
}
function yf(e) {
  var a = e.l, r = kt(e, wi);
  e[e.l] == 0 && e[e.l + 1] == 0 && e.l - a & 2 && (e.l += 2);
  var n = kt(e, mr);
  return [r, n];
}
function Of(e) {
  for (var a = e.read_shift(4), r = [], n = 0; n < a / 2; ++n) r.push(yf(e));
  return r;
}
function cn(e, a) {
  for (var r = e.read_shift(4), n = {}, t = 0; t != r; ++t) {
    var i = e.read_shift(4), s = e.read_shift(4);
    n[i] = e.read_shift(s, a === 1200 ? "utf16le" : "utf8").replace(dr, "").replace(Ia, "!"), a === 1200 && s % 2 && (e.l += 2);
  }
  return e.l & 3 && (e.l = e.l >> 3 << 2), n;
}
function Di(e) {
  var a = e.read_shift(4), r = e.slice(e.l, e.l + a);
  return e.l += a, (a & 3) > 0 && (e.l += 4 - (a & 3) & 3), r;
}
function Df(e) {
  var a = {};
  return a.Size = e.read_shift(4), e.l += a.Size + 3 - (a.Size - 1) % 4, a;
}
function kt(e, a, r) {
  var n = e.read_shift(2), t, i = r || {};
  if (e.l += 2, a !== tn && n !== a && ff.indexOf(a) === -1 && !((a & 65534) == 4126 && (n & 65534) == 4126))
    throw new Error("Expected type " + a + " saw " + n);
  switch (a === tn ? n : a) {
    case 2:
      return t = e.read_shift(2, "i"), i.raw || (e.l += 2), t;
    case 3:
      return t = e.read_shift(4, "i"), t;
    case 11:
      return e.read_shift(4) !== 0;
    case 19:
      return t = e.read_shift(4), t;
    case 30:
      return Ci(e, n, 4).replace(dr, "");
    case 31:
      return yi(e);
    case 64:
      return v0(e);
    case 65:
      return Di(e);
    case 71:
      return Df(e);
    case 80:
      return $t(e, n, !i.raw).replace(dr, "");
    case 81:
      return Ff(
        e,
        n
        /*, 4*/
      ).replace(dr, "");
    case 4108:
      return Of(e);
    case 4126:
    case 4127:
      return n == 4127 ? Sf(e) : Cf(e);
    default:
      throw new Error("TypedPropertyValue unrecognized type " + a + " " + n);
  }
}
function fn(e, a) {
  var r = e.l, n = e.read_shift(4), t = e.read_shift(4), i = [], s = 0, c = 0, o = -1, f = {};
  for (s = 0; s != t; ++s) {
    var l = e.read_shift(4), u = e.read_shift(4);
    i[s] = [l, u + r];
  }
  i.sort(function(I, T) {
    return I[1] - T[1];
  });
  var h = {};
  for (s = 0; s != t; ++s) {
    if (e.l !== i[s][1]) {
      var d = !0;
      if (s > 0 && a) switch (a[i[s - 1][0]].t) {
        case 2:
          e.l + 2 === i[s][1] && (e.l += 2, d = !1);
          break;
        case 80:
          e.l <= i[s][1] && (e.l = i[s][1], d = !1);
          break;
        case 4108:
          e.l <= i[s][1] && (e.l = i[s][1], d = !1);
          break;
      }
      if ((!a || s == 0) && e.l <= i[s][1] && (d = !1, e.l = i[s][1]), d) throw new Error("Read Error: Expected address " + i[s][1] + " at " + e.l + " :" + s);
    }
    if (a) {
      var p = a[i[s][0]];
      if (h[p.n] = kt(e, p.t, { raw: !0 }), p.p === "version" && (h[p.n] = String(h[p.n] >> 16) + "." + ("0000" + String(h[p.n] & 65535)).slice(-4)), p.n == "CodePage") switch (h[p.n]) {
        case 0:
          h[p.n] = 1252;
        /* falls through */
        case 874:
        case 932:
        case 936:
        case 949:
        case 950:
        case 1250:
        case 1251:
        case 1253:
        case 1254:
        case 1255:
        case 1256:
        case 1257:
        case 1258:
        case 1e4:
        case 1200:
        case 1201:
        case 1252:
        case 65e3:
        case -536:
        case 65001:
        case -535:
          Dr(c = h[p.n] >>> 0 & 65535);
          break;
        default:
          throw new Error("Unsupported CodePage: " + h[p.n]);
      }
    } else if (i[s][0] === 1) {
      if (c = h.CodePage = kt(e, p0), Dr(c), o !== -1) {
        var x = e.l;
        e.l = i[o][1], f = cn(e, c), e.l = x;
      }
    } else if (i[s][0] === 0) {
      if (c === 0) {
        o = s, e.l = i[s + 1][1];
        continue;
      }
      f = cn(e, c);
    } else {
      var g = f[i[s][0]], O;
      switch (e[e.l]) {
        case 65:
          e.l += 4, O = Di(e);
          break;
        case 30:
          e.l += 4, O = $t(e, e[e.l - 4]).replace(/\u0000+$/, "");
          break;
        case 31:
          e.l += 4, O = $t(e, e[e.l - 4]).replace(/\u0000+$/, "");
          break;
        case 3:
          e.l += 4, O = e.read_shift(4, "i");
          break;
        case 19:
          e.l += 4, O = e.read_shift(4);
          break;
        case 5:
          e.l += 4, O = e.read_shift(8, "f");
          break;
        case 11:
          e.l += 4, O = He(e, 4);
          break;
        case 64:
          e.l += 4, O = qe(v0(e));
          break;
        default:
          throw new Error("unparsed value: " + e[e.l]);
      }
      h[g] = O;
    }
  }
  return e.l = r + n, h;
}
function on(e, a, r) {
  var n = e.content;
  if (!n) return {};
  Ze(n, 0);
  var t, i, s, c, o = 0;
  n.chk("feff", "Byte Order: "), n.read_shift(2);
  var f = n.read_shift(4), l = n.read_shift(16);
  if (l !== Fe.utils.consts.HEADER_CLSID && l !== r) throw new Error("Bad PropertySet CLSID " + l);
  if (t = n.read_shift(4), t !== 1 && t !== 2) throw new Error("Unrecognized #Sets: " + t);
  if (i = n.read_shift(16), c = n.read_shift(4), t === 1 && c !== n.l) throw new Error("Length mismatch: " + c + " !== " + n.l);
  t === 2 && (s = n.read_shift(16), o = n.read_shift(4));
  var u = fn(n, a), h = { SystemIdentifier: f };
  for (var d in u) h[d] = u[d];
  if (h.FMTID = i, t === 1) return h;
  if (o - n.l == 2 && (n.l += 2), n.l !== o) throw new Error("Length mismatch 2: " + n.l + " !== " + o);
  var p;
  try {
    p = fn(n, null);
  } catch {
  }
  for (d in p) h[d] = p[d];
  return h.FMTID = [i, s], h;
}
function $r(e, a) {
  return e.read_shift(a), null;
}
function Rf(e, a, r) {
  for (var n = [], t = e.l + a; e.l < t; ) n.push(r(e, t - e.l));
  if (t !== e.l) throw new Error("Slurp error");
  return n;
}
function He(e, a) {
  return e.read_shift(a) === 1;
}
function ze(e) {
  return e.read_shift(2, "u");
}
function Ri(e, a) {
  return Rf(e, a, ze);
}
function If(e) {
  var a = e.read_shift(1), r = e.read_shift(1);
  return r === 1 ? a : a === 1;
}
function et(e, a, r) {
  var n = e.read_shift(r && r.biff >= 12 ? 2 : 1), t = "sbcs-cont";
  if (r && r.biff >= 8, !r || r.biff == 8) {
    var i = e.read_shift(1);
    i && (t = "dbcs-cont");
  } else r.biff == 12 && (t = "wstr");
  r.biff >= 2 && r.biff <= 5 && (t = "cpstr");
  var s = n ? e.read_shift(n, t) : "";
  return s;
}
function Nf(e) {
  var a = e.read_shift(2), r = e.read_shift(1), n = r & 4, t = r & 8, i = 1 + (r & 1), s = 0, c, o = {};
  t && (s = e.read_shift(2)), n && (c = e.read_shift(4));
  var f = i == 2 ? "dbcs-cont" : "sbcs-cont", l = a === 0 ? "" : e.read_shift(a, f);
  return t && (e.l += 4 * s), n && (e.l += c), o.t = l, t || (o.raw = "<t>" + o.t + "</t>", o.r = o.t), o;
}
function ca(e, a, r) {
  var n;
  if (r) {
    if (r.biff >= 2 && r.biff <= 5) return e.read_shift(a, "cpstr");
    if (r.biff >= 12) return e.read_shift(a, "dbcs-cont");
  }
  var t = e.read_shift(1);
  return t === 0 ? n = e.read_shift(a, "sbcs-cont") : n = e.read_shift(a, "dbcs-cont"), n;
}
function rt(e, a, r) {
  var n = e.read_shift(r && r.biff == 2 ? 1 : 2);
  return n === 0 ? (e.l++, "") : ca(e, n, r);
}
function xa(e, a, r) {
  if (r.biff > 5) return rt(e, a, r);
  var n = e.read_shift(1);
  return n === 0 ? (e.l++, "") : e.read_shift(n, r.biff <= 4 || !e.lens ? "cpstr" : "sbcs-cont");
}
function Pf(e) {
  var a = e.read_shift(1);
  e.l++;
  var r = e.read_shift(2);
  return e.l += 2, [a, r];
}
function Lf(e) {
  var a = e.read_shift(4), r = e.l, n = !1;
  a > 24 && (e.l += a - 24, e.read_shift(16) === "795881f43b1d7f48af2c825dc4852763" && (n = !0), e.l = r);
  var t = e.read_shift((n ? a - 24 : a) >> 1, "utf16le").replace(dr, "");
  return n && (e.l += 24), t;
}
function bf(e) {
  for (var a = e.read_shift(2), r = ""; a-- > 0; ) r += "../";
  var n = e.read_shift(0, "lpstr-ansi");
  if (e.l += 2, e.read_shift(2) != 57005) throw new Error("Bad FileMoniker");
  var t = e.read_shift(4);
  if (t === 0) return r + n.replace(/\\/g, "/");
  var i = e.read_shift(4);
  if (e.read_shift(2) != 3) throw new Error("Bad FileMoniker");
  var s = e.read_shift(i >> 1, "utf16le").replace(dr, "");
  return r + s;
}
function Mf(e, a) {
  var r = e.read_shift(16);
  switch (r) {
    case "e0c9ea79f9bace118c8200aa004ba90b":
      return Lf(e);
    case "0303000000000000c000000000000046":
      return bf(e);
    default:
      throw new Error("Unsupported Moniker " + r);
  }
}
function lt(e) {
  var a = e.read_shift(4), r = a > 0 ? e.read_shift(a, "utf16le").replace(dr, "") : "";
  return r;
}
function Bf(e, a) {
  var r = e.l + a, n = e.read_shift(4);
  if (n !== 2) throw new Error("Unrecognized streamVersion: " + n);
  var t = e.read_shift(2);
  e.l += 2;
  var i, s, c, o, f = "", l, u;
  t & 16 && (i = lt(e, r - e.l)), t & 128 && (s = lt(e, r - e.l)), (t & 257) === 257 && (c = lt(e, r - e.l)), (t & 257) === 1 && (o = Mf(e, r - e.l)), t & 8 && (f = lt(e, r - e.l)), t & 32 && (l = e.read_shift(16)), t & 64 && (u = v0(
    e
    /*, 8*/
  )), e.l = r;
  var h = s || c || o || "";
  h && f && (h += "#" + f), h || (h = "#" + f), t & 2 && h.charAt(0) == "/" && h.charAt(1) != "/" && (h = "file://" + h);
  var d = { Target: h };
  return l && (d.guid = l), u && (d.time = u), i && (d.Tooltip = i), d;
}
function Ii(e) {
  var a = e.read_shift(1), r = e.read_shift(1), n = e.read_shift(1), t = e.read_shift(1);
  return [a, r, n, t];
}
function Ni(e, a) {
  var r = Ii(e);
  return r[3] = 0, r;
}
function Br(e) {
  var a = e.read_shift(2), r = e.read_shift(2), n = e.read_shift(2);
  return { r: a, c: r, ixfe: n };
}
function Uf(e) {
  var a = e.read_shift(2), r = e.read_shift(2);
  return e.l += 8, { type: a, flags: r };
}
function Hf(e, a, r) {
  return a === 0 ? "" : xa(e, a, r);
}
function Wf(e, a, r) {
  var n = r.biff > 8 ? 4 : 2, t = e.read_shift(n), i = e.read_shift(n, "i"), s = e.read_shift(n, "i");
  return [t, i, s];
}
function Pi(e) {
  var a = e.read_shift(2), r = d0(e);
  return [a, r];
}
function Vf(e, a, r) {
  e.l += 4, a -= 4;
  var n = e.l + a, t = et(e, a, r), i = e.read_shift(2);
  if (n -= e.l, i !== n) throw new Error("Malformed AddinUdf: padding = " + n + " != " + i);
  return e.l += i, t;
}
function yt(e) {
  var a = e.read_shift(2), r = e.read_shift(2), n = e.read_shift(2), t = e.read_shift(2);
  return { s: { c: n, r: a }, e: { c: t, r } };
}
function Li(e) {
  var a = e.read_shift(2), r = e.read_shift(2), n = e.read_shift(1), t = e.read_shift(1);
  return { s: { c: n, r: a }, e: { c: t, r } };
}
var Gf = Li;
function bi(e) {
  e.l += 4;
  var a = e.read_shift(2), r = e.read_shift(2), n = e.read_shift(2);
  return e.l += 12, [r, a, n];
}
function Xf(e) {
  var a = {};
  return e.l += 4, e.l += 16, a.fSharedNote = e.read_shift(2), e.l += 4, a;
}
function zf(e) {
  var a = {};
  return e.l += 4, e.cf = e.read_shift(2), a;
}
function nr(e) {
  e.l += 2, e.l += e.read_shift(2);
}
var $f = {
  /*::[*/
  0: nr,
  /* FtEnd */
  /*::[*/
  4: nr,
  /* FtMacro */
  /*::[*/
  5: nr,
  /* FtButton */
  /*::[*/
  6: nr,
  /* FtGmo */
  /*::[*/
  7: zf,
  /* FtCf */
  /*::[*/
  8: nr,
  /* FtPioGrbit */
  /*::[*/
  9: nr,
  /* FtPictFmla */
  /*::[*/
  10: nr,
  /* FtCbls */
  /*::[*/
  11: nr,
  /* FtRbo */
  /*::[*/
  12: nr,
  /* FtSbs */
  /*::[*/
  13: Xf,
  /* FtNts */
  /*::[*/
  14: nr,
  /* FtSbsFmla */
  /*::[*/
  15: nr,
  /* FtGboData */
  /*::[*/
  16: nr,
  /* FtEdoData */
  /*::[*/
  17: nr,
  /* FtRboData */
  /*::[*/
  18: nr,
  /* FtCblsData */
  /*::[*/
  19: nr,
  /* FtLbsData */
  /*::[*/
  20: nr,
  /* FtCblsFmla */
  /*::[*/
  21: bi
};
function Kf(e, a) {
  for (var r = e.l + a, n = []; e.l < r; ) {
    var t = e.read_shift(2);
    e.l -= 2;
    try {
      n.push($f[t](e, r - e.l));
    } catch {
      return e.l = r, n;
    }
  }
  return e.l != r && (e.l = r), n;
}
function ut(e, a) {
  var r = { BIFFVer: 0, dt: 0 };
  switch (r.BIFFVer = e.read_shift(2), a -= 2, a >= 2 && (r.dt = e.read_shift(2), e.l -= 2), r.BIFFVer) {
    case 1536:
    /* BIFF8 */
    case 1280:
    /* BIFF5 */
    case 1024:
    /* BIFF4 */
    case 768:
    /* BIFF3 */
    case 512:
    /* BIFF2 */
    case 2:
    case 7:
      break;
    default:
      if (a > 6) throw new Error("Unexpected BIFF Ver " + r.BIFFVer);
  }
  return e.read_shift(a), r;
}
function Yf(e, a) {
  return a === 0 || e.read_shift(2), 1200;
}
function jf(e, a, r) {
  if (r.enc)
    return e.l += a, "";
  var n = e.l, t = xa(e, 0, r);
  return e.read_shift(a + n - e.l), t;
}
function Jf(e, a, r) {
  var n = r && r.biff == 8 || a == 2 ? e.read_shift(2) : (e.l += a, 0);
  return { fDialog: n & 16, fBelow: n & 64, fRight: n & 128 };
}
function qf(e, a, r) {
  var n = e.read_shift(4), t = e.read_shift(1) & 3, i = e.read_shift(1);
  switch (i) {
    case 0:
      i = "Worksheet";
      break;
    case 1:
      i = "Macrosheet";
      break;
    case 2:
      i = "Chartsheet";
      break;
    case 6:
      i = "VBAModule";
      break;
  }
  var s = et(e, 0, r);
  return s.length === 0 && (s = "Sheet1"), { pos: n, hs: t, dt: i, name: s };
}
function Zf(e, a) {
  for (var r = e.l + a, n = e.read_shift(4), t = e.read_shift(4), i = [], s = 0; s != t && e.l < r; ++s)
    i.push(Nf(e));
  return i.Count = n, i.Unique = t, i;
}
function Qf(e, a) {
  var r = {};
  return r.dsst = e.read_shift(2), e.l += a - 2, r;
}
function eo(e) {
  var a = {};
  a.r = e.read_shift(2), a.c = e.read_shift(2), a.cnt = e.read_shift(2) - a.c;
  var r = e.read_shift(2);
  e.l += 4;
  var n = e.read_shift(1);
  return e.l += 3, n & 7 && (a.level = n & 7), n & 32 && (a.hidden = !0), n & 64 && (a.hpt = r / 20), a;
}
function ro(e) {
  var a = Uf(e);
  if (a.type != 2211) throw new Error("Invalid Future Record " + a.type);
  var r = e.read_shift(4);
  return r !== 0;
}
function ao(e) {
  return e.read_shift(2), e.read_shift(4);
}
function ln(e, a, r) {
  var n = 0;
  r && r.biff == 2 || (n = e.read_shift(2));
  var t = e.read_shift(2);
  r && r.biff == 2 && (n = 1 - (t >> 15), t &= 32767);
  var i = { Unsynced: n & 1, DyZero: (n & 2) >> 1, ExAsc: (n & 4) >> 2, ExDsc: (n & 8) >> 3 };
  return [i, t];
}
function to(e) {
  var a = e.read_shift(2), r = e.read_shift(2), n = e.read_shift(2), t = e.read_shift(2), i = e.read_shift(2), s = e.read_shift(2), c = e.read_shift(2), o = e.read_shift(2), f = e.read_shift(2);
  return {
    Pos: [a, r],
    Dim: [n, t],
    Flags: i,
    CurTab: s,
    FirstTab: c,
    Selected: o,
    TabRatio: f
  };
}
function no(e, a, r) {
  if (r && r.biff >= 2 && r.biff < 5) return {};
  var n = e.read_shift(2);
  return { RTL: n & 64 };
}
function io() {
}
function so(e, a, r) {
  var n = {
    dyHeight: e.read_shift(2),
    fl: e.read_shift(2)
  };
  switch (r && r.biff || 8) {
    case 2:
      break;
    case 3:
    case 4:
      e.l += 2;
      break;
    default:
      e.l += 10;
      break;
  }
  return n.name = et(e, 0, r), n;
}
function co(e) {
  var a = Br(e);
  return a.isst = e.read_shift(4), a;
}
function fo(e, a, r) {
  r.biffguess && r.biff == 2 && (r.biff = 5);
  var n = e.l + a, t = Br(e);
  r.biff == 2 && e.l++;
  var i = rt(e, n - e.l, r);
  return t.val = i, t;
}
function oo(e, a, r) {
  var n = e.read_shift(2), t = xa(e, 0, r);
  return [n, t];
}
var lo = xa;
function un(e, a, r) {
  var n = e.l + a, t = r.biff == 8 || !r.biff ? 4 : 2, i = e.read_shift(t), s = e.read_shift(t), c = e.read_shift(2), o = e.read_shift(2);
  return e.l = n, { s: { r: i, c }, e: { r: s, c: o } };
}
function uo(e) {
  var a = e.read_shift(2), r = e.read_shift(2), n = Pi(e);
  return { r: a, c: r, ixfe: n[0], rknum: n[1] };
}
function ho(e, a) {
  for (var r = e.l + a - 2, n = e.read_shift(2), t = e.read_shift(2), i = []; e.l < r; ) i.push(Pi(e));
  if (e.l !== r) throw new Error("MulRK read error");
  var s = e.read_shift(2);
  if (i.length != s - t + 1) throw new Error("MulRK length mismatch");
  return { r: n, c: t, C: s, rkrec: i };
}
function xo(e, a) {
  for (var r = e.l + a - 2, n = e.read_shift(2), t = e.read_shift(2), i = []; e.l < r; ) i.push(e.read_shift(2));
  if (e.l !== r) throw new Error("MulBlank read error");
  var s = e.read_shift(2);
  if (i.length != s - t + 1) throw new Error("MulBlank length mismatch");
  return { r: n, c: t, C: s, ixfe: i };
}
function po(e, a, r, n) {
  var t = {}, i = e.read_shift(4), s = e.read_shift(4), c = e.read_shift(4), o = e.read_shift(2);
  return t.patternType = uf[c >> 26], n.cellStyles && (t.alc = i & 7, t.fWrap = i >> 3 & 1, t.alcV = i >> 4 & 7, t.fJustLast = i >> 7 & 1, t.trot = i >> 8 & 255, t.cIndent = i >> 16 & 15, t.fShrinkToFit = i >> 20 & 1, t.iReadOrder = i >> 22 & 2, t.fAtrNum = i >> 26 & 1, t.fAtrFnt = i >> 27 & 1, t.fAtrAlc = i >> 28 & 1, t.fAtrBdr = i >> 29 & 1, t.fAtrPat = i >> 30 & 1, t.fAtrProt = i >> 31 & 1, t.dgLeft = s & 15, t.dgRight = s >> 4 & 15, t.dgTop = s >> 8 & 15, t.dgBottom = s >> 12 & 15, t.icvLeft = s >> 16 & 127, t.icvRight = s >> 23 & 127, t.grbitDiag = s >> 30 & 3, t.icvTop = c & 127, t.icvBottom = c >> 7 & 127, t.icvDiag = c >> 14 & 127, t.dgDiag = c >> 21 & 15, t.icvFore = o & 127, t.icvBack = o >> 7 & 127, t.fsxButton = o >> 14 & 1), t;
}
function vo(e, a, r) {
  var n = {};
  return n.ifnt = e.read_shift(2), n.numFmtId = e.read_shift(2), n.flags = e.read_shift(2), n.fStyle = n.flags >> 2 & 1, a -= 6, n.data = po(e, a, n.fStyle, r), n;
}
function go(e) {
  e.l += 4;
  var a = [e.read_shift(2), e.read_shift(2)];
  if (a[0] !== 0 && a[0]--, a[1] !== 0 && a[1]--, a[0] > 7 || a[1] > 7) throw new Error("Bad Gutters: " + a.join("|"));
  return a;
}
function hn(e, a, r) {
  var n = Br(e);
  (r.biff == 2 || a == 9) && ++e.l;
  var t = If(e);
  return n.val = t, n.t = t === !0 || t === !1 ? "b" : "e", n;
}
function mo(e, a, r) {
  r.biffguess && r.biff == 2 && (r.biff = 5);
  var n = Br(e), t = sr(e);
  return n.val = t, n;
}
var xn = Hf;
function _o(e, a, r) {
  var n = e.l + a, t = e.read_shift(2), i = e.read_shift(2);
  if (r.sbcch = i, i == 1025 || i == 14849) return [i, t];
  if (i < 1 || i > 255) throw new Error("Unexpected SupBook type: " + i);
  for (var s = ca(e, i), c = []; n > e.l; ) c.push(rt(e));
  return [i, t, s, c];
}
function dn(e, a, r) {
  var n = e.read_shift(2), t, i = {
    fBuiltIn: n & 1,
    fWantAdvise: n >>> 1 & 1,
    fWantPict: n >>> 2 & 1,
    fOle: n >>> 3 & 1,
    fOleLink: n >>> 4 & 1,
    cf: n >>> 5 & 1023,
    fIcon: n >>> 15 & 1
  };
  return r.sbcch === 14849 && (t = Vf(e, a - 2, r)), i.body = t || e.read_shift(a - 2), typeof t == "string" && (i.Name = t), i;
}
var Eo = [
  "_xlnm.Consolidate_Area",
  "_xlnm.Auto_Open",
  "_xlnm.Auto_Close",
  "_xlnm.Extract",
  "_xlnm.Database",
  "_xlnm.Criteria",
  "_xlnm.Print_Area",
  "_xlnm.Print_Titles",
  "_xlnm.Recorder",
  "_xlnm.Data_Form",
  "_xlnm.Auto_Activate",
  "_xlnm.Auto_Deactivate",
  "_xlnm.Sheet_Title",
  "_xlnm._FilterDatabase"
];
function pn(e, a, r) {
  var n = e.l + a, t = e.read_shift(2), i = e.read_shift(1), s = e.read_shift(1), c = e.read_shift(r && r.biff == 2 ? 1 : 2), o = 0;
  (!r || r.biff >= 5) && (r.biff != 5 && (e.l += 2), o = e.read_shift(2), r.biff == 5 && (e.l += 2), e.l += 4);
  var f = ca(e, s, r);
  t & 32 && (f = Eo[f.charCodeAt(0)]);
  var l = n - e.l;
  r && r.biff == 2 && --l;
  var u = n == e.l || c === 0 || !(l > 0) ? [] : r1(e, l, r, c);
  return {
    chKey: i,
    Name: f,
    itab: o,
    rgce: u
  };
}
function Mi(e, a, r) {
  if (r.biff < 8) return To(e, a, r);
  for (var n = [], t = e.l + a, i = e.read_shift(r.biff > 8 ? 4 : 2); i-- !== 0; ) n.push(Wf(e, r.biff > 8 ? 12 : 6, r));
  if (e.l != t) throw new Error("Bad ExternSheet: " + e.l + " != " + t);
  return n;
}
function To(e, a, r) {
  e[e.l + 1] == 3 && e[e.l]++;
  var n = et(e, a, r);
  return n.charCodeAt(0) == 3 ? n.slice(1) : n;
}
function ko(e, a, r) {
  if (r.biff < 8) {
    e.l += a;
    return;
  }
  var n = e.read_shift(2), t = e.read_shift(2), i = ca(e, n, r), s = ca(e, t, r);
  return [i, s];
}
function wo(e, a, r) {
  var n = Li(e);
  e.l++;
  var t = e.read_shift(1);
  return a -= 8, [a1(e, a, r), t, n];
}
function vn(e, a, r) {
  var n = Gf(e);
  switch (r.biff) {
    case 2:
      e.l++, a -= 7;
      break;
    case 3:
    case 4:
      e.l += 2, a -= 8;
      break;
    default:
      e.l += 6, a -= 12;
  }
  return [n, Qh(e, a, r)];
}
function Ao(e) {
  var a = e.read_shift(4) !== 0, r = e.read_shift(4) !== 0, n = e.read_shift(4);
  return [a, r, n];
}
function Fo(e, a, r) {
  if (!(r.biff < 8)) {
    var n = e.read_shift(2), t = e.read_shift(2), i = e.read_shift(2), s = e.read_shift(2), c = xa(e, 0, r);
    return r.biff < 8 && e.read_shift(1), [{ r: n, c: t }, c, s, i];
  }
}
function So(e, a, r) {
  return Fo(e, a, r);
}
function Co(e, a) {
  for (var r = [], n = e.read_shift(2); n--; ) r.push(yt(e));
  return r;
}
function yo(e, a, r) {
  if (r && r.biff < 8) return Do(e, a, r);
  var n = bi(e), t = Kf(e, a - 22, n[1]);
  return { cmo: n, ft: t };
}
var Oo = {
  8: function(e, a) {
    var r = e.l + a;
    e.l += 10;
    var n = e.read_shift(2);
    e.l += 4, e.l += 2, e.l += 2, e.l += 2, e.l += 4;
    var t = e.read_shift(1);
    return e.l += t, e.l = r, { fmt: n };
  }
};
function Do(e, a, r) {
  e.l += 4;
  var n = e.read_shift(2), t = e.read_shift(2), i = e.read_shift(2);
  e.l += 2, e.l += 2, e.l += 2, e.l += 2, e.l += 2, e.l += 2, e.l += 2, e.l += 2, e.l += 2, e.l += 6, a -= 36;
  var s = [];
  return s.push((Oo[n] || or)(e, a, r)), { cmo: [t, n, i], ft: s };
}
function Ro(e, a, r) {
  var n = e.l, t = "";
  try {
    e.l += 4;
    var i = (r.lastobj || { cmo: [0, 0] }).cmo[1], s;
    [0, 5, 7, 11, 12, 14].indexOf(i) == -1 ? e.l += 6 : s = Pf(e, 6, r);
    var c = e.read_shift(2);
    e.read_shift(2), ze(e, 2);
    var o = e.read_shift(2);
    e.l += o;
    for (var f = 1; f < e.lens.length - 1; ++f) {
      if (e.l - n != e.lens[f]) throw new Error("TxO: bad continue record");
      var l = e[e.l], u = ca(e, e.lens[f + 1] - e.lens[f] - 1);
      if (t += u, t.length >= (l ? c : 2 * c)) break;
    }
    if (t.length !== c && t.length !== c * 2)
      throw new Error("cchText: " + c + " != " + t.length);
    return e.l = n + a, { t };
  } catch {
    return e.l = n + a, { t };
  }
}
function Io(e, a) {
  var r = yt(e);
  e.l += 16;
  var n = Bf(e, a - 24);
  return [r, n];
}
function No(e, a) {
  e.read_shift(2);
  var r = yt(e), n = e.read_shift((a - 10) / 2, "dbcs-cont");
  return n = n.replace(dr, ""), [r, n];
}
function Po(e) {
  var a = [0, 0], r;
  return r = e.read_shift(2), a[0] = nn[r] || r, r = e.read_shift(2), a[1] = nn[r] || r, a;
}
function Lo(e) {
  for (var a = e.read_shift(2), r = []; a-- > 0; ) r.push(Ni(e));
  return r;
}
function bo(e) {
  for (var a = e.read_shift(2), r = []; a-- > 0; ) r.push(Ni(e));
  return r;
}
function Mo(e) {
  e.l += 2;
  var a = { cxfs: 0, crc: 0 };
  return a.cxfs = e.read_shift(2), a.crc = e.read_shift(4), a;
}
function Bi(e, a, r) {
  if (!r.cellStyles) return or(e, a);
  var n = r && r.biff >= 12 ? 4 : 2, t = e.read_shift(n), i = e.read_shift(n), s = e.read_shift(n), c = e.read_shift(n), o = e.read_shift(2);
  n == 2 && (e.l += 2);
  var f = { s: t, e: i, w: s, ixfe: c, flags: o };
  return (r.biff >= 5 || !r.biff) && (f.level = o >> 8 & 7), f;
}
function Bo(e, a) {
  var r = {};
  return a < 32 || (e.l += 16, r.header = sr(e), r.footer = sr(e), e.l += 2), r;
}
function Uo(e, a, r) {
  var n = { area: !1 };
  if (r.biff != 5)
    return e.l += a, n;
  var t = e.read_shift(1);
  return e.l += 3, t & 16 && (n.area = !0), n;
}
var Ho = Br, Wo = Ri, Vo = rt;
function Go(e) {
  var a = e.read_shift(2), r = e.read_shift(2), n = e.read_shift(4), t = { fmt: a, env: r, len: n, data: e.slice(e.l, e.l + n) };
  return e.l += n, t;
}
function Xo(e, a, r) {
  r.biffguess && r.biff == 5 && (r.biff = 2);
  var n = Br(e);
  ++e.l;
  var t = xa(e, a - 7, r);
  return n.t = "str", n.val = t, n;
}
function zo(e) {
  var a = Br(e);
  ++e.l;
  var r = sr(e);
  return a.t = "n", a.val = r, a;
}
function $o(e) {
  var a = Br(e);
  ++e.l;
  var r = e.read_shift(2);
  return a.t = "n", a.val = r, a;
}
function Ko(e) {
  var a = e.read_shift(1);
  return a === 0 ? (e.l++, "") : e.read_shift(a, "sbcs-cont");
}
function Yo(e, a) {
  e.l += 6, e.l += 2, e.l += 1, e.l += 3, e.l += 1, e.l += a - 13;
}
function jo(e, a, r) {
  var n = e.l + a, t = Br(e), i = e.read_shift(2), s = ca(e, i, r);
  return e.l = n, t.t = "str", t.val = s, t;
}
var Jo = [2, 3, 48, 49, 131, 139, 140, 245], gn = /* @__PURE__ */ (function() {
  var e = {
    /* Code Pages Supported by Visual FoxPro */
    /*::[*/
    1: 437,
    /*::[*/
    2: 850,
    /*::[*/
    3: 1252,
    /*::[*/
    4: 1e4,
    /*::[*/
    100: 852,
    /*::[*/
    101: 866,
    /*::[*/
    102: 865,
    /*::[*/
    103: 861,
    /*::[*/
    104: 895,
    /*::[*/
    105: 620,
    /*::[*/
    106: 737,
    /*::[*/
    107: 857,
    /*::[*/
    120: 950,
    /*::[*/
    121: 949,
    /*::[*/
    122: 936,
    /*::[*/
    123: 932,
    /*::[*/
    124: 874,
    /*::[*/
    125: 1255,
    /*::[*/
    126: 1256,
    /*::[*/
    150: 10007,
    /*::[*/
    151: 10029,
    /*::[*/
    152: 10006,
    /*::[*/
    200: 1250,
    /*::[*/
    201: 1251,
    /*::[*/
    202: 1254,
    /*::[*/
    203: 1253,
    /* shapefile DBF extension */
    /*::[*/
    0: 20127,
    /*::[*/
    8: 865,
    /*::[*/
    9: 437,
    /*::[*/
    10: 850,
    /*::[*/
    11: 437,
    /*::[*/
    13: 437,
    /*::[*/
    14: 850,
    /*::[*/
    15: 437,
    /*::[*/
    16: 850,
    /*::[*/
    17: 437,
    /*::[*/
    18: 850,
    /*::[*/
    19: 932,
    /*::[*/
    20: 850,
    /*::[*/
    21: 437,
    /*::[*/
    22: 850,
    /*::[*/
    23: 865,
    /*::[*/
    24: 437,
    /*::[*/
    25: 437,
    /*::[*/
    26: 850,
    /*::[*/
    27: 437,
    /*::[*/
    28: 863,
    /*::[*/
    29: 850,
    /*::[*/
    31: 852,
    /*::[*/
    34: 852,
    /*::[*/
    35: 852,
    /*::[*/
    36: 860,
    /*::[*/
    37: 850,
    /*::[*/
    38: 866,
    /*::[*/
    55: 850,
    /*::[*/
    64: 852,
    /*::[*/
    77: 936,
    /*::[*/
    78: 949,
    /*::[*/
    79: 950,
    /*::[*/
    80: 874,
    /*::[*/
    87: 1252,
    /*::[*/
    88: 1252,
    /*::[*/
    89: 1252,
    /*::[*/
    108: 863,
    /*::[*/
    134: 737,
    /*::[*/
    135: 852,
    /*::[*/
    136: 857,
    /*::[*/
    204: 1257,
    /*::[*/
    255: 16969
  }, a = i0({
    /*::[*/
    1: 437,
    /*::[*/
    2: 850,
    /*::[*/
    3: 1252,
    /*::[*/
    4: 1e4,
    /*::[*/
    100: 852,
    /*::[*/
    101: 866,
    /*::[*/
    102: 865,
    /*::[*/
    103: 861,
    /*::[*/
    104: 895,
    /*::[*/
    105: 620,
    /*::[*/
    106: 737,
    /*::[*/
    107: 857,
    /*::[*/
    120: 950,
    /*::[*/
    121: 949,
    /*::[*/
    122: 936,
    /*::[*/
    123: 932,
    /*::[*/
    124: 874,
    /*::[*/
    125: 1255,
    /*::[*/
    126: 1256,
    /*::[*/
    150: 10007,
    /*::[*/
    151: 10029,
    /*::[*/
    152: 10006,
    /*::[*/
    200: 1250,
    /*::[*/
    201: 1251,
    /*::[*/
    202: 1254,
    /*::[*/
    203: 1253,
    /*::[*/
    0: 20127
  });
  function r(c, o) {
    var f = [], l = qr(1);
    switch (o.type) {
      case "base64":
        l = Or(Tr(c));
        break;
      case "binary":
        l = Or(c);
        break;
      case "buffer":
      case "array":
        l = c;
        break;
    }
    Ze(l, 0);
    var u = l.read_shift(1), h = !!(u & 136), d = !1, p = !1;
    switch (u) {
      case 2:
        break;
      // dBASE II
      case 3:
        break;
      // dBASE III
      case 48:
        d = !0, h = !0;
        break;
      // VFP
      case 49:
        d = !0, h = !0;
        break;
      // VFP with autoincrement
      // 0x43 dBASE IV SQL table files
      // 0x63 dBASE IV SQL system files
      case 131:
        break;
      // dBASE III with memo
      case 139:
        break;
      // dBASE IV with memo
      case 140:
        p = !0;
        break;
      // dBASE Level 7 with memo
      // case 0xCB dBASE IV SQL table files with memo
      case 245:
        break;
      // FoxPro 2.x with memo
      // case 0xFB FoxBASE
      default:
        throw new Error("DBF Unsupported Version: " + u.toString(16));
    }
    var x = 0, g = 521;
    u == 2 && (x = l.read_shift(2)), l.l += 3, u != 2 && (x = l.read_shift(4)), x > 1048576 && (x = 1e6), u != 2 && (g = l.read_shift(2));
    var O = l.read_shift(2), I = o.codepage || 1252;
    u != 2 && (l.l += 16, l.read_shift(1), l[l.l] !== 0 && (I = e[l[l.l]]), l.l += 1, l.l += 2), p && (l.l += 36);
    for (var T = [], U = {}, V = Math.min(l.length, u == 2 ? 521 : g - 10 - (d ? 264 : 0)), B = p ? 32 : 11; l.l < V && l[l.l] != 13; )
      switch (U = {}, U.name = Xa.utils.decode(I, l.slice(l.l, l.l + B)).replace(/[\u0000\r\n].*$/g, ""), l.l += B, U.type = String.fromCharCode(l.read_shift(1)), u != 2 && !p && (U.offset = l.read_shift(4)), U.len = l.read_shift(1), u == 2 && (U.offset = l.read_shift(2)), U.dec = l.read_shift(1), U.name.length && T.push(U), u != 2 && (l.l += p ? 13 : 14), U.type) {
        case "B":
          (!d || U.len != 8) && o.WTF && console.log("Skipping " + U.name + ":" + U.type);
          break;
        case "G":
        // General (FoxPro and dBASE L7)
        case "P":
          o.WTF && console.log("Skipping " + U.name + ":" + U.type);
          break;
        case "+":
        // Autoincrement (dBASE L7 only)
        case "0":
        // _NullFlags (VFP only)
        case "@":
        // Timestamp (dBASE L7 only)
        case "C":
        // Character (dBASE II)
        case "D":
        // Date (dBASE III)
        case "F":
        // Float (dBASE IV)
        case "I":
        // Long (VFP and dBASE L7)
        case "L":
        // Logical (dBASE II)
        case "M":
        // Memo (dBASE III)
        case "N":
        // Number (dBASE II)
        case "O":
        // Double (dBASE L7 only)
        case "T":
        // Datetime (VFP only)
        case "Y":
          break;
        default:
          throw new Error("Unknown Field Type: " + U.type);
      }
    if (l[l.l] !== 13 && (l.l = g - 1), l.read_shift(1) !== 13) throw new Error("DBF Terminator not found " + l.l + " " + l[l.l]);
    l.l = g;
    var A = 0, _ = 0;
    for (f[0] = [], _ = 0; _ != T.length; ++_) f[0][_] = T[_].name;
    for (; x-- > 0; ) {
      if (l[l.l] === 42) {
        l.l += O;
        continue;
      }
      for (++l.l, f[++A] = [], _ = 0, _ = 0; _ != T.length; ++_) {
        var m = l.slice(l.l, l.l + T[_].len);
        l.l += T[_].len, Ze(m, 0);
        var R = Xa.utils.decode(I, m);
        switch (T[_].type) {
          case "C":
            R.trim().length && (f[A][_] = R.replace(/\s+$/, ""));
            break;
          case "D":
            R.length === 8 ? f[A][_] = new Date(+R.slice(0, 4), +R.slice(4, 6) - 1, +R.slice(6, 8)) : f[A][_] = R;
            break;
          case "F":
            f[A][_] = parseFloat(R.trim());
            break;
          case "+":
          case "I":
            f[A][_] = p ? m.read_shift(-4, "i") ^ 2147483648 : m.read_shift(4, "i");
            break;
          case "L":
            switch (R.trim().toUpperCase()) {
              case "Y":
              case "T":
                f[A][_] = !0;
                break;
              case "N":
              case "F":
                f[A][_] = !1;
                break;
              case "":
              case "?":
                break;
              default:
                throw new Error("DBF Unrecognized L:|" + R + "|");
            }
            break;
          case "M":
            if (!h) throw new Error("DBF Unexpected MEMO for type " + u.toString(16));
            f[A][_] = "##MEMO##" + (p ? parseInt(R.trim(), 10) : m.read_shift(4));
            break;
          case "N":
            R = R.replace(/\u0000/g, "").trim(), R && R != "." && (f[A][_] = +R || 0);
            break;
          case "@":
            f[A][_] = new Date(m.read_shift(-8, "f") - 621356832e5);
            break;
          case "T":
            f[A][_] = new Date((m.read_shift(4) - 2440588) * 864e5 + m.read_shift(4));
            break;
          case "Y":
            f[A][_] = m.read_shift(4, "i") / 1e4 + m.read_shift(4, "i") / 1e4 * Math.pow(2, 32);
            break;
          case "O":
            f[A][_] = -m.read_shift(-8, "f");
            break;
          case "B":
            if (d && T[_].len == 8) {
              f[A][_] = m.read_shift(8, "f");
              break;
            }
          /* falls through */
          case "G":
          case "P":
            m.l += T[_].len;
            break;
          case "0":
            if (T[_].name === "_NullFlags") break;
          /* falls through */
          default:
            throw new Error("DBF Unsupported data type " + T[_].type);
        }
      }
    }
    if (u != 2 && l.l < l.length && l[l.l++] != 26) throw new Error("DBF EOF Marker missing " + (l.l - 1) + " of " + l.length + " " + l[l.l - 1].toString(16));
    return o && o.sheetRows && (f = f.slice(0, o.sheetRows)), o.DBF = T, f;
  }
  function n(c, o) {
    var f = o || {};
    f.dateNF || (f.dateNF = "yyyymmdd");
    var l = Ca(r(c, f), f);
    return l["!cols"] = f.DBF.map(function(u) {
      return {
        wch: u.len,
        DBF: u
      };
    }), delete f.DBF, l;
  }
  function t(c, o) {
    try {
      return Qr(n(c, o), o);
    } catch (f) {
      if (o && o.WTF) throw f;
    }
    return { SheetNames: [], Sheets: {} };
  }
  var i = { B: 8, C: 250, L: 1, D: 8, "?": 0, "": 0 };
  function s(c, o) {
    var f = o || {};
    if (+f.codepage >= 0 && Dr(+f.codepage), f.type == "string") throw new Error("Cannot write DBF to JS string");
    var l = Gt(), u = Qt(c, { header: 1, raw: !0, cellDates: !0 }), h = u[0], d = u.slice(1), p = c["!cols"] || [], x = 0, g = 0, O = 0, I = 1;
    for (x = 0; x < h.length; ++x) {
      if (((p[x] || {}).DBF || {}).name) {
        h[x] = p[x].DBF.name, ++O;
        continue;
      }
      if (h[x] != null) {
        if (++O, typeof h[x] == "number" && (h[x] = h[x].toString(10)), typeof h[x] != "string") throw new Error("DBF Invalid column name " + h[x] + " |" + typeof h[x] + "|");
        if (h.indexOf(h[x]) !== x) {
          for (g = 0; g < 1024; ++g)
            if (h.indexOf(h[x] + "_" + g) == -1) {
              h[x] += "_" + g;
              break;
            }
        }
      }
    }
    var T = Ue(c["!ref"]), U = [], V = [], B = [];
    for (x = 0; x <= T.e.c - T.s.c; ++x) {
      var A = "", _ = "", m = 0, R = [];
      for (g = 0; g < d.length; ++g)
        d[g][x] != null && R.push(d[g][x]);
      if (R.length == 0 || h[x] == null) {
        U[x] = "?";
        continue;
      }
      for (g = 0; g < R.length; ++g) {
        switch (typeof R[g]) {
          /* TODO: check if L2 compat is desired */
          case "number":
            _ = "B";
            break;
          case "string":
            _ = "C";
            break;
          case "boolean":
            _ = "L";
            break;
          case "object":
            _ = R[g] instanceof Date ? "D" : "C";
            break;
          default:
            _ = "C";
        }
        m = Math.max(m, String(R[g]).length), A = A && A != _ ? "C" : _;
      }
      m > 250 && (m = 250), _ = ((p[x] || {}).DBF || {}).type, _ == "C" && p[x].DBF.len > m && (m = p[x].DBF.len), A == "B" && _ == "N" && (A = "N", B[x] = p[x].DBF.dec, m = p[x].DBF.len), V[x] = A == "C" || _ == "N" ? m : i[A] || 0, I += V[x], U[x] = A;
    }
    var L = l.next(32);
    for (L.write_shift(4, 318902576), L.write_shift(4, d.length), L.write_shift(2, 296 + 32 * O), L.write_shift(2, I), x = 0; x < 4; ++x) L.write_shift(4, 0);
    for (L.write_shift(4, 0 | (+a[
      /*::String(*/
      Mn
      /*::)*/
    ] || 3) << 8), x = 0, g = 0; x < h.length; ++x)
      if (h[x] != null) {
        var D = l.next(32), z = (h[x].slice(-10) + "\0\0\0\0\0\0\0\0\0\0\0").slice(0, 11);
        D.write_shift(1, z, "sbcs"), D.write_shift(1, U[x] == "?" ? "C" : U[x], "sbcs"), D.write_shift(4, g), D.write_shift(1, V[x] || i[U[x]] || 0), D.write_shift(1, B[x] || 0), D.write_shift(1, 2), D.write_shift(4, 0), D.write_shift(1, 0), D.write_shift(4, 0), D.write_shift(4, 0), g += V[x] || i[U[x]] || 0;
      }
    var ie = l.next(264);
    for (ie.write_shift(4, 13), x = 0; x < 65; ++x) ie.write_shift(4, 0);
    for (x = 0; x < d.length; ++x) {
      var re = l.next(I);
      for (re.write_shift(1, 0), g = 0; g < h.length; ++g)
        if (h[g] != null)
          switch (U[g]) {
            case "L":
              re.write_shift(1, d[x][g] == null ? 63 : d[x][g] ? 84 : 70);
              break;
            case "B":
              re.write_shift(8, d[x][g] || 0, "f");
              break;
            case "N":
              var fe = "0";
              for (typeof d[x][g] == "number" && (fe = d[x][g].toFixed(B[g] || 0)), O = 0; O < V[g] - fe.length; ++O) re.write_shift(1, 32);
              re.write_shift(1, fe, "sbcs");
              break;
            case "D":
              d[x][g] ? (re.write_shift(4, ("0000" + d[x][g].getFullYear()).slice(-4), "sbcs"), re.write_shift(2, ("00" + (d[x][g].getMonth() + 1)).slice(-2), "sbcs"), re.write_shift(2, ("00" + d[x][g].getDate()).slice(-2), "sbcs")) : re.write_shift(8, "00000000", "sbcs");
              break;
            case "C":
              var q = String(d[x][g] != null ? d[x][g] : "").slice(0, V[g]);
              for (re.write_shift(1, q, "sbcs"), O = 0; O < V[g] - q.length; ++O) re.write_shift(1, 32);
              break;
          }
    }
    return l.next(1).write_shift(1, 26), l.end();
  }
  return {
    to_workbook: t,
    to_sheet: n,
    from_sheet: s
  };
})(), qo = /* @__PURE__ */ (function() {
  var e = {
    AA: "À",
    BA: "Á",
    CA: "Â",
    DA: 195,
    HA: "Ä",
    JA: 197,
    AE: "È",
    BE: "É",
    CE: "Ê",
    HE: "Ë",
    AI: "Ì",
    BI: "Í",
    CI: "Î",
    HI: "Ï",
    AO: "Ò",
    BO: "Ó",
    CO: "Ô",
    DO: 213,
    HO: "Ö",
    AU: "Ù",
    BU: "Ú",
    CU: "Û",
    HU: "Ü",
    Aa: "à",
    Ba: "á",
    Ca: "â",
    Da: 227,
    Ha: "ä",
    Ja: 229,
    Ae: "è",
    Be: "é",
    Ce: "ê",
    He: "ë",
    Ai: "ì",
    Bi: "í",
    Ci: "î",
    Hi: "ï",
    Ao: "ò",
    Bo: "ó",
    Co: "ô",
    Do: 245,
    Ho: "ö",
    Au: "ù",
    Bu: "ú",
    Cu: "û",
    Hu: "ü",
    KC: "Ç",
    Kc: "ç",
    q: "æ",
    z: "œ",
    a: "Æ",
    j: "Œ",
    DN: 209,
    Dn: 241,
    Hy: 255,
    S: 169,
    c: 170,
    R: 174,
    "B ": 180,
    /*::[*/
    0: 176,
    /*::[*/
    1: 177,
    /*::[*/
    2: 178,
    /*::[*/
    3: 179,
    /*::[*/
    5: 181,
    /*::[*/
    6: 182,
    /*::[*/
    7: 183,
    Q: 185,
    k: 186,
    b: 208,
    i: 216,
    l: 222,
    s: 240,
    y: 248,
    "!": 161,
    '"': 162,
    "#": 163,
    "(": 164,
    "%": 165,
    "'": 167,
    "H ": 168,
    "+": 171,
    ";": 187,
    "<": 188,
    "=": 189,
    ">": 190,
    "?": 191,
    "{": 223
  }, a = new RegExp("\x1BN(" + br(e).join("|").replace(/\|\|\|/, "|\\||").replace(/([?()+])/g, "\\$1") + "|\\|)", "gm"), r = function(h, d) {
    var p = e[d];
    return typeof p == "number" ? I0(p) : p;
  }, n = function(h, d, p) {
    var x = d.charCodeAt(0) - 32 << 4 | p.charCodeAt(0) - 48;
    return x == 59 ? h : I0(x);
  };
  e["|"] = 254;
  function t(h, d) {
    switch (d.type) {
      case "base64":
        return i(Tr(h), d);
      case "binary":
        return i(h, d);
      case "buffer":
        return i(Ae && Buffer.isBuffer(h) ? h.toString("binary") : oa(h), d);
      case "array":
        return i(sa(h), d);
    }
    throw new Error("Unrecognized type " + d.type);
  }
  function i(h, d) {
    var p = h.split(/[\n\r]+/), x = -1, g = -1, O = 0, I = 0, T = [], U = [], V = null, B = {}, A = [], _ = [], m = [], R = 0, L;
    for (+d.codepage >= 0 && Dr(+d.codepage); O !== p.length; ++O) {
      R = 0;
      var D = p[O].trim().replace(/\x1B([\x20-\x2F])([\x30-\x3F])/g, n).replace(a, r), z = D.replace(/;;/g, "\0").split(";").map(function(N) {
        return N.replace(/\u0000/g, ";");
      }), ie = z[0], re;
      if (D.length > 0) switch (ie) {
        case "ID":
          break;
        /* header */
        case "E":
          break;
        /* EOF */
        case "B":
          break;
        /* dimensions */
        case "O":
          break;
        /* options? */
        case "W":
          break;
        /* window? */
        case "P":
          z[1].charAt(0) == "P" && U.push(D.slice(3).replace(/;;/g, ";"));
          break;
        case "C":
          var fe = !1, q = !1, ve = !1, M = !1, he = -1, te = -1;
          for (I = 1; I < z.length; ++I) switch (z[I].charAt(0)) {
            case "A":
              break;
            // TODO: comment
            case "X":
              g = parseInt(z[I].slice(1)) - 1, q = !0;
              break;
            case "Y":
              for (x = parseInt(z[I].slice(1)) - 1, q || (g = 0), L = T.length; L <= x; ++L) T[L] = [];
              break;
            case "K":
              re = z[I].slice(1), re.charAt(0) === '"' ? re = re.slice(1, re.length - 1) : re === "TRUE" ? re = !0 : re === "FALSE" ? re = !1 : isNaN(Ir(re)) ? isNaN(ka(re).getDate()) || (re = qe(re)) : (re = Ir(re), V !== null && Fa(V) && (re = Ct(re))), fe = !0;
              break;
            case "E":
              M = !0;
              var w = Ea(z[I].slice(1), { r: x, c: g });
              T[x][g] = [T[x][g], w];
              break;
            case "S":
              ve = !0, T[x][g] = [T[x][g], "S5S"];
              break;
            case "G":
              break;
            // unknown
            case "R":
              he = parseInt(z[I].slice(1)) - 1;
              break;
            case "C":
              te = parseInt(z[I].slice(1)) - 1;
              break;
            default:
              if (d && d.WTF) throw new Error("SYLK bad record " + D);
          }
          if (fe && (T[x][g] && T[x][g].length == 2 ? T[x][g][0] = re : T[x][g] = re, V = null), ve) {
            if (M) throw new Error("SYLK shared formula cannot have own formula");
            var P = he > -1 && T[he][te];
            if (!P || !P[1]) throw new Error("SYLK shared formula cannot find base");
            T[x][g][1] = Yi(P[1], { r: x - he, c: g - te });
          }
          break;
        case "F":
          var b = 0;
          for (I = 1; I < z.length; ++I) switch (z[I].charAt(0)) {
            case "X":
              g = parseInt(z[I].slice(1)) - 1, ++b;
              break;
            case "Y":
              for (x = parseInt(z[I].slice(1)) - 1, L = T.length; L <= x; ++L) T[L] = [];
              break;
            case "M":
              R = parseInt(z[I].slice(1)) / 20;
              break;
            case "F":
              break;
            /* ??? */
            case "G":
              break;
            /* hide grid */
            case "P":
              V = U[parseInt(z[I].slice(1))];
              break;
            case "S":
              break;
            /* cell style */
            case "D":
              break;
            /* column */
            case "N":
              break;
            /* font */
            case "W":
              for (m = z[I].slice(1).split(" "), L = parseInt(m[0], 10); L <= parseInt(m[1], 10); ++L)
                R = parseInt(m[2], 10), _[L - 1] = R === 0 ? { hidden: !0 } : { wch: R }, wa(_[L - 1]);
              break;
            case "C":
              g = parseInt(z[I].slice(1)) - 1, _[g] || (_[g] = {});
              break;
            case "R":
              x = parseInt(z[I].slice(1)) - 1, A[x] || (A[x] = {}), R > 0 ? (A[x].hpt = R, A[x].hpx = Ja(R)) : R === 0 && (A[x].hidden = !0);
              break;
            default:
              if (d && d.WTF) throw new Error("SYLK bad record " + D);
          }
          b < 1 && (V = null);
          break;
        default:
          if (d && d.WTF) throw new Error("SYLK bad record " + D);
      }
    }
    return A.length > 0 && (B["!rows"] = A), _.length > 0 && (B["!cols"] = _), d && d.sheetRows && (T = T.slice(0, d.sheetRows)), [T, B];
  }
  function s(h, d) {
    var p = t(h, d), x = p[0], g = p[1], O = Ca(x, d);
    return br(g).forEach(function(I) {
      O[I] = g[I];
    }), O;
  }
  function c(h, d) {
    return Qr(s(h, d), d);
  }
  function o(h, d, p, x) {
    var g = "C;Y" + (p + 1) + ";X" + (x + 1) + ";K";
    switch (h.t) {
      case "n":
        g += h.v || 0, h.f && !h.F && (g += ";E" + Mu(h.f, { r: p, c: x }));
        break;
      case "b":
        g += h.v ? "TRUE" : "FALSE";
        break;
      case "e":
        g += h.w || h.v;
        break;
      case "d":
        g += '"' + (h.w || h.v) + '"';
        break;
      case "s":
        g += '"' + h.v.replace(/"/g, "").replace(/;/g, ";;") + '"';
        break;
    }
    return g;
  }
  function f(h, d) {
    d.forEach(function(p, x) {
      var g = "F;W" + (x + 1) + " " + (x + 1) + " ";
      p.hidden ? g += "0" : (typeof p.width == "number" && !p.wpx && (p.wpx = At(p.width)), typeof p.wpx == "number" && !p.wch && (p.wch = Ft(p.wpx)), typeof p.wch == "number" && (g += Math.round(p.wch))), g.charAt(g.length - 1) != " " && h.push(g);
    });
  }
  function l(h, d) {
    d.forEach(function(p, x) {
      var g = "F;";
      p.hidden ? g += "M0;" : p.hpt ? g += "M" + 20 * p.hpt + ";" : p.hpx && (g += "M" + 20 * zi(p.hpx) + ";"), g.length > 2 && h.push(g + "R" + (x + 1));
    });
  }
  function u(h, d) {
    var p = ["ID;PWXL;N;E"], x = [], g = Ue(h["!ref"]), O, I = Array.isArray(h), T = `\r
`;
    p.push("P;PGeneral"), p.push("F;P0;DG0G8;M255"), h["!cols"] && f(p, h["!cols"]), h["!rows"] && l(p, h["!rows"]), p.push("B;Y" + (g.e.r - g.s.r + 1) + ";X" + (g.e.c - g.s.c + 1) + ";D" + [g.s.c, g.s.r, g.e.c, g.e.r].join(" "));
    for (var U = g.s.r; U <= g.e.r; ++U)
      for (var V = g.s.c; V <= g.e.c; ++V) {
        var B = me({ r: U, c: V });
        O = I ? (h[U] || [])[V] : h[B], !(!O || O.v == null && (!O.f || O.F)) && x.push(o(O, h, U, V));
      }
    return p.join(T) + T + x.join(T) + T + "E" + T;
  }
  return {
    to_workbook: c,
    to_sheet: s,
    from_sheet: u
  };
})(), Zo = /* @__PURE__ */ (function() {
  function e(i, s) {
    switch (s.type) {
      case "base64":
        return a(Tr(i), s);
      case "binary":
        return a(i, s);
      case "buffer":
        return a(Ae && Buffer.isBuffer(i) ? i.toString("binary") : oa(i), s);
      case "array":
        return a(sa(i), s);
    }
    throw new Error("Unrecognized type " + s.type);
  }
  function a(i, s) {
    for (var c = i.split(`
`), o = -1, f = -1, l = 0, u = []; l !== c.length; ++l) {
      if (c[l].trim() === "BOT") {
        u[++o] = [], f = 0;
        continue;
      }
      if (!(o < 0)) {
        var h = c[l].trim().split(","), d = h[0], p = h[1];
        ++l;
        for (var x = c[l] || ""; (x.match(/["]/g) || []).length & 1 && l < c.length - 1; ) x += `
` + c[++l];
        switch (x = x.trim(), +d) {
          case -1:
            if (x === "BOT") {
              u[++o] = [], f = 0;
              continue;
            } else if (x !== "EOD") throw new Error("Unrecognized DIF special command " + x);
            break;
          case 0:
            x === "TRUE" ? u[o][f] = !0 : x === "FALSE" ? u[o][f] = !1 : isNaN(Ir(p)) ? isNaN(ka(p).getDate()) ? u[o][f] = p : u[o][f] = qe(p) : u[o][f] = Ir(p), ++f;
            break;
          case 1:
            x = x.slice(1, x.length - 1), x = x.replace(/""/g, '"'), x && x.match(/^=".*"$/) && (x = x.slice(2, -1)), u[o][f++] = x !== "" ? x : null;
            break;
        }
        if (x === "EOD") break;
      }
    }
    return s && s.sheetRows && (u = u.slice(0, s.sheetRows)), u;
  }
  function r(i, s) {
    return Ca(e(i, s), s);
  }
  function n(i, s) {
    return Qr(r(i, s), s);
  }
  var t = /* @__PURE__ */ (function() {
    var i = function(o, f, l, u, h) {
      o.push(f), o.push(l + "," + u), o.push('"' + h.replace(/"/g, '""') + '"');
    }, s = function(o, f, l, u) {
      o.push(f + "," + l), o.push(f == 1 ? '"' + u.replace(/"/g, '""') + '"' : u);
    };
    return function(o) {
      var f = [], l = Ue(o["!ref"]), u, h = Array.isArray(o);
      i(f, "TABLE", 0, 1, "sheetjs"), i(f, "VECTORS", 0, l.e.r - l.s.r + 1, ""), i(f, "TUPLES", 0, l.e.c - l.s.c + 1, ""), i(f, "DATA", 0, 0, "");
      for (var d = l.s.r; d <= l.e.r; ++d) {
        s(f, -1, 0, "BOT");
        for (var p = l.s.c; p <= l.e.c; ++p) {
          var x = me({ r: d, c: p });
          if (u = h ? (o[d] || [])[p] : o[x], !u) {
            s(f, 1, 0, "");
            continue;
          }
          switch (u.t) {
            case "n":
              var g = u.w;
              !g && u.v != null && (g = u.v), g == null ? u.f && !u.F ? s(f, 1, 0, "=" + u.f) : s(f, 1, 0, "") : s(f, 0, g, "V");
              break;
            case "b":
              s(f, 0, u.v ? 1 : 0, u.v ? "TRUE" : "FALSE");
              break;
            case "s":
              s(f, 1, 0, isNaN(u.v) ? u.v : '="' + u.v + '"');
              break;
            case "d":
              u.w || (u.w = Fr(u.z || Ee[14], pr(qe(u.v)))), s(f, 0, u.w, "V");
              break;
            default:
              s(f, 1, 0, "");
          }
        }
      }
      s(f, -1, 0, "EOD");
      var O = `\r
`, I = f.join(O);
      return I;
    };
  })();
  return {
    to_workbook: n,
    to_sheet: r,
    from_sheet: t
  };
})(), Qo = /* @__PURE__ */ (function() {
  function e(u) {
    return u.replace(/\\b/g, "\\").replace(/\\c/g, ":").replace(/\\n/g, `
`);
  }
  function a(u) {
    return u.replace(/\\/g, "\\b").replace(/:/g, "\\c").replace(/\n/g, "\\n");
  }
  function r(u, h) {
    for (var d = u.split(`
`), p = -1, x = -1, g = 0, O = []; g !== d.length; ++g) {
      var I = d[g].trim().split(":");
      if (I[0] === "cell") {
        var T = xr(I[1]);
        if (O.length <= T.r) for (p = O.length; p <= T.r; ++p) O[p] || (O[p] = []);
        switch (p = T.r, x = T.c, I[2]) {
          case "t":
            O[p][x] = e(I[3]);
            break;
          case "v":
            O[p][x] = +I[3];
            break;
          case "vtf":
            var U = I[I.length - 1];
          /* falls through */
          case "vtc":
            I[3] === "nl" ? O[p][x] = !!+I[4] : O[p][x] = +I[4], I[2] == "vtf" && (O[p][x] = [O[p][x], U]);
        }
      }
    }
    return h && h.sheetRows && (O = O.slice(0, h.sheetRows)), O;
  }
  function n(u, h) {
    return Ca(r(u, h), h);
  }
  function t(u, h) {
    return Qr(n(u, h), h);
  }
  var i = [
    "socialcalc:version:1.5",
    "MIME-Version: 1.0",
    "Content-Type: multipart/mixed; boundary=SocialCalcSpreadsheetControlSave"
  ].join(`
`), s = [
    "--SocialCalcSpreadsheetControlSave",
    "Content-type: text/plain; charset=UTF-8"
  ].join(`
`) + `
`, c = [
    "# SocialCalc Spreadsheet Control Save",
    "part:sheet"
  ].join(`
`), o = "--SocialCalcSpreadsheetControlSave--";
  function f(u) {
    if (!u || !u["!ref"]) return "";
    for (var h = [], d = [], p, x = "", g = Sa(u["!ref"]), O = Array.isArray(u), I = g.s.r; I <= g.e.r; ++I)
      for (var T = g.s.c; T <= g.e.c; ++T)
        if (x = me({ r: I, c: T }), p = O ? (u[I] || [])[T] : u[x], !(!p || p.v == null || p.t === "z")) {
          switch (d = ["cell", x, "t"], p.t) {
            case "s":
            case "str":
              d.push(a(p.v));
              break;
            case "n":
              p.f ? (d[2] = "vtf", d[3] = "n", d[4] = p.v, d[5] = a(p.f)) : (d[2] = "v", d[3] = p.v);
              break;
            case "b":
              d[2] = "vt" + (p.f ? "f" : "c"), d[3] = "nl", d[4] = p.v ? "1" : "0", d[5] = a(p.f || (p.v ? "TRUE" : "FALSE"));
              break;
            case "d":
              var U = pr(qe(p.v));
              d[2] = "vtc", d[3] = "nd", d[4] = "" + U, d[5] = p.w || Fr(p.z || Ee[14], U);
              break;
            case "e":
              continue;
          }
          h.push(d.join(":"));
        }
    return h.push("sheet:c:" + (g.e.c - g.s.c + 1) + ":r:" + (g.e.r - g.s.r + 1) + ":tvf:1"), h.push("valueformat:1:text-wiki"), h.join(`
`);
  }
  function l(u) {
    return [i, s, c, s, f(u), o].join(`
`);
  }
  return {
    to_workbook: t,
    to_sheet: n,
    from_sheet: l
  };
})(), Ya = /* @__PURE__ */ (function() {
  function e(l, u, h, d, p) {
    p.raw ? u[h][d] = l : l === "" || (l === "TRUE" ? u[h][d] = !0 : l === "FALSE" ? u[h][d] = !1 : isNaN(Ir(l)) ? isNaN(ka(l).getDate()) ? u[h][d] = l : u[h][d] = qe(l) : u[h][d] = Ir(l));
  }
  function a(l, u) {
    var h = u || {}, d = [];
    if (!l || l.length === 0) return d;
    for (var p = l.split(/[\r\n]/), x = p.length - 1; x >= 0 && p[x].length === 0; ) --x;
    for (var g = 10, O = 0, I = 0; I <= x; ++I)
      O = p[I].indexOf(" "), O == -1 ? O = p[I].length : O++, g = Math.max(g, O);
    for (I = 0; I <= x; ++I) {
      d[I] = [];
      var T = 0;
      for (e(p[I].slice(0, g).trim(), d, I, T, h), T = 1; T <= (p[I].length - g) / 10 + 1; ++T)
        e(p[I].slice(g + (T - 1) * 10, g + T * 10).trim(), d, I, T, h);
    }
    return h.sheetRows && (d = d.slice(0, h.sheetRows)), d;
  }
  var r = {
    /*::[*/
    44: ",",
    /*::[*/
    9: "	",
    /*::[*/
    59: ";",
    /*::[*/
    124: "|"
  }, n = {
    /*::[*/
    44: 3,
    /*::[*/
    9: 2,
    /*::[*/
    59: 1,
    /*::[*/
    124: 0
  };
  function t(l) {
    for (var u = {}, h = !1, d = 0, p = 0; d < l.length; ++d)
      (p = l.charCodeAt(d)) == 34 ? h = !h : !h && p in r && (u[p] = (u[p] || 0) + 1);
    p = [];
    for (d in u) Object.prototype.hasOwnProperty.call(u, d) && p.push([u[d], d]);
    if (!p.length) {
      u = n;
      for (d in u) Object.prototype.hasOwnProperty.call(u, d) && p.push([u[d], d]);
    }
    return p.sort(function(x, g) {
      return x[0] - g[0] || n[x[1]] - n[g[1]];
    }), r[p.pop()[1]] || 44;
  }
  function i(l, u) {
    var h = u || {}, d = "", p = h.dense ? [] : {}, x = { s: { c: 0, r: 0 }, e: { c: 0, r: 0 } };
    l.slice(0, 4) == "sep=" ? l.charCodeAt(5) == 13 && l.charCodeAt(6) == 10 ? (d = l.charAt(4), l = l.slice(7)) : l.charCodeAt(5) == 13 || l.charCodeAt(5) == 10 ? (d = l.charAt(4), l = l.slice(6)) : d = t(l.slice(0, 1024)) : h && h.FS ? d = h.FS : d = t(l.slice(0, 1024));
    var g = 0, O = 0, I = 0, T = 0, U = 0, V = d.charCodeAt(0), B = !1, A = 0, _ = l.charCodeAt(0);
    l = l.replace(/\r\n/mg, `
`);
    var m = h.dateNF != null ? fc(h.dateNF) : null;
    function R() {
      var L = l.slice(T, U), D = {};
      if (L.charAt(0) == '"' && L.charAt(L.length - 1) == '"' && (L = L.slice(1, -1).replace(/""/g, '"')), L.length === 0) D.t = "z";
      else if (h.raw)
        D.t = "s", D.v = L;
      else if (L.trim().length === 0)
        D.t = "s", D.v = L;
      else if (L.charCodeAt(0) == 61)
        L.charCodeAt(1) == 34 && L.charCodeAt(L.length - 1) == 34 ? (D.t = "s", D.v = L.slice(2, -1).replace(/""/g, '"')) : Uu(L) ? (D.t = "n", D.f = L.slice(1)) : (D.t = "s", D.v = L);
      else if (L == "TRUE")
        D.t = "b", D.v = !0;
      else if (L == "FALSE")
        D.t = "b", D.v = !1;
      else if (!isNaN(I = Ir(L)))
        D.t = "n", h.cellText !== !1 && (D.w = L), D.v = I;
      else if (!isNaN(ka(L).getDate()) || m && L.match(m)) {
        D.z = h.dateNF || Ee[14];
        var z = 0;
        m && L.match(m) && (L = oc(L, h.dateNF, L.match(m) || []), z = 1), h.cellDates ? (D.t = "d", D.v = qe(L, z)) : (D.t = "n", D.v = pr(qe(L, z))), h.cellText !== !1 && (D.w = Fr(D.z, D.v instanceof Date ? pr(D.v) : D.v)), h.cellNF || delete D.z;
      } else
        D.t = "s", D.v = L;
      if (D.t == "z" || (h.dense ? (p[g] || (p[g] = []), p[g][O] = D) : p[me({ c: O, r: g })] = D), T = U + 1, _ = l.charCodeAt(T), x.e.c < O && (x.e.c = O), x.e.r < g && (x.e.r = g), A == V) ++O;
      else if (O = 0, ++g, h.sheetRows && h.sheetRows <= g) return !0;
    }
    e: for (; U < l.length; ++U) switch (A = l.charCodeAt(U)) {
      case 34:
        _ === 34 && (B = !B);
        break;
      case V:
      case 10:
      case 13:
        if (!B && R()) break e;
        break;
    }
    return U - T > 0 && R(), p["!ref"] = Se(x), p;
  }
  function s(l, u) {
    return !(u && u.PRN) || u.FS || l.slice(0, 4) == "sep=" || l.indexOf("	") >= 0 || l.indexOf(",") >= 0 || l.indexOf(";") >= 0 ? i(l, u) : Ca(a(l, u), u);
  }
  function c(l, u) {
    var h = "", d = u.type == "string" ? [0, 0, 0, 0] : A0(l, u);
    switch (u.type) {
      case "base64":
        h = Tr(l);
        break;
      case "binary":
        h = l;
        break;
      case "buffer":
        u.codepage == 65001 ? h = l.toString("utf8") : u.codepage && typeof Xa < "u" || (h = Ae && Buffer.isBuffer(l) ? l.toString("binary") : oa(l));
        break;
      case "array":
        h = sa(l);
        break;
      case "string":
        h = l;
        break;
      default:
        throw new Error("Unrecognized type " + u.type);
    }
    return d[0] == 239 && d[1] == 187 && d[2] == 191 ? h = Re(h.slice(3)) : u.type != "string" && u.type != "buffer" && u.codepage == 65001 ? h = Re(h) : u.type == "binary" && typeof Xa < "u", h.slice(0, 19) == "socialcalc:version:" ? Qo.to_sheet(u.type == "string" ? h : Re(h), u) : s(h, u);
  }
  function o(l, u) {
    return Qr(c(l, u), u);
  }
  function f(l) {
    for (var u = [], h = Ue(l["!ref"]), d, p = Array.isArray(l), x = h.s.r; x <= h.e.r; ++x) {
      for (var g = [], O = h.s.c; O <= h.e.c; ++O) {
        var I = me({ r: x, c: O });
        if (d = p ? (l[x] || [])[O] : l[I], !d || d.v == null) {
          g.push("          ");
          continue;
        }
        for (var T = (d.w || (Gr(d), d.w) || "").slice(0, 10); T.length < 10; ) T += " ";
        g.push(T + (O === 0 ? " " : ""));
      }
      u.push(g.join(""));
    }
    return u.join(`
`);
  }
  return {
    to_workbook: o,
    to_sheet: c,
    from_sheet: f
  };
})();
function el(e, a) {
  var r = a || {}, n = !!r.WTF;
  r.WTF = !0;
  try {
    var t = qo.to_workbook(e, r);
    return r.WTF = n, t;
  } catch (i) {
    if (r.WTF = n, !i.message.match(/SYLK bad record ID/) && n) throw i;
    return Ya.to_workbook(e, a);
  }
}
var Ha = /* @__PURE__ */ (function() {
  function e(w, P, b) {
    if (w) {
      Ze(w, w.l || 0);
      for (var N = b.Enum || he; w.l < w.length; ) {
        var K = w.read_shift(2), ee = N[K] || N[65535], Z = w.read_shift(2), J = w.l + Z, j = ee.f && ee.f(w, Z, b);
        if (w.l = J, P(j, ee, K)) return;
      }
    }
  }
  function a(w, P) {
    switch (P.type) {
      case "base64":
        return r(Or(Tr(w)), P);
      case "binary":
        return r(Or(w), P);
      case "buffer":
      case "array":
        return r(w, P);
    }
    throw "Unsupported type " + P.type;
  }
  function r(w, P) {
    if (!w) return w;
    var b = P || {}, N = b.dense ? [] : {}, K = "Sheet1", ee = "", Z = 0, J = {}, j = [], se = [], C = { s: { r: 0, c: 0 }, e: { r: 0, c: 0 } }, Te = b.sheetRows || 0;
    if (w[2] == 0 && (w[3] == 8 || w[3] == 9) && w.length >= 16 && w[14] == 5 && w[15] === 108)
      throw new Error("Unsupported Works 3 for Mac file");
    if (w[2] == 2)
      b.Enum = he, e(w, function(ne, xe, we) {
        switch (we) {
          case 0:
            b.vers = ne, ne >= 4096 && (b.qpro = !0);
            break;
          case 6:
            C = ne;
            break;
          /* RANGE */
          case 204:
            ne && (ee = ne);
            break;
          /* SHEETNAMECS */
          case 222:
            ee = ne;
            break;
          /* SHEETNAMELP */
          case 15:
          /* LABEL */
          case 51:
            b.qpro || (ne[1].v = ne[1].v.slice(1));
          /* falls through */
          case 13:
          /* INTEGER */
          case 14:
          /* NUMBER */
          case 16:
            we == 14 && (ne[2] & 112) == 112 && (ne[2] & 15) > 1 && (ne[2] & 15) < 15 && (ne[1].z = b.dateNF || Ee[14], b.cellDates && (ne[1].t = "d", ne[1].v = Ct(ne[1].v))), b.qpro && ne[3] > Z && (N["!ref"] = Se(C), J[K] = N, j.push(K), N = b.dense ? [] : {}, C = { s: { r: 0, c: 0 }, e: { r: 0, c: 0 } }, Z = ne[3], K = ee || "Sheet" + (Z + 1), ee = "");
            var $e = b.dense ? (N[ne[0].r] || [])[ne[0].c] : N[me(ne[0])];
            if ($e) {
              $e.t = ne[1].t, $e.v = ne[1].v, ne[1].z != null && ($e.z = ne[1].z), ne[1].f != null && ($e.f = ne[1].f);
              break;
            }
            b.dense ? (N[ne[0].r] || (N[ne[0].r] = []), N[ne[0].r][ne[0].c] = ne[1]) : N[me(ne[0])] = ne[1];
            break;
        }
      }, b);
    else if (w[2] == 26 || w[2] == 14)
      b.Enum = te, w[2] == 14 && (b.qpro = !0, w.l = 0), e(w, function(ne, xe, we) {
        switch (we) {
          case 204:
            K = ne;
            break;
          /* SHEETNAMECS */
          case 22:
            ne[1].v = ne[1].v.slice(1);
          /* falls through */
          case 23:
          /* NUMBER17 */
          case 24:
          /* NUMBER18 */
          case 25:
          /* FORMULA19 */
          case 37:
          /* NUMBER25 */
          case 39:
          /* NUMBER27 */
          case 40:
            if (ne[3] > Z && (N["!ref"] = Se(C), J[K] = N, j.push(K), N = b.dense ? [] : {}, C = { s: { r: 0, c: 0 }, e: { r: 0, c: 0 } }, Z = ne[3], K = "Sheet" + (Z + 1)), Te > 0 && ne[0].r >= Te) break;
            b.dense ? (N[ne[0].r] || (N[ne[0].r] = []), N[ne[0].r][ne[0].c] = ne[1]) : N[me(ne[0])] = ne[1], C.e.c < ne[0].c && (C.e.c = ne[0].c), C.e.r < ne[0].r && (C.e.r = ne[0].r);
            break;
          case 27:
            ne[14e3] && (se[ne[14e3][0]] = ne[14e3][1]);
            break;
          case 1537:
            se[ne[0]] = ne[1], ne[0] == Z && (K = ne[1]);
            break;
        }
      }, b);
    else throw new Error("Unrecognized LOTUS BOF " + w[2]);
    if (N["!ref"] = Se(C), J[ee || K] = N, j.push(ee || K), !se.length) return { SheetNames: j, Sheets: J };
    for (var de = {}, pe = [], oe = 0; oe < se.length; ++oe) J[j[oe]] ? (pe.push(se[oe] || j[oe]), de[se[oe]] = J[se[oe]] || J[j[oe]]) : (pe.push(se[oe]), de[se[oe]] = { "!ref": "A1" });
    return { SheetNames: pe, Sheets: de };
  }
  function n(w, P) {
    var b = P || {};
    if (+b.codepage >= 0 && Dr(+b.codepage), b.type == "string") throw new Error("Cannot write WK1 to JS string");
    var N = Gt(), K = Ue(w["!ref"]), ee = Array.isArray(w), Z = [];
    yr(N, 0, i(1030)), yr(N, 6, o(K));
    for (var J = Math.min(K.e.r, 8191), j = K.s.r; j <= J; ++j)
      for (var se = er(j), C = K.s.c; C <= K.e.c; ++C) {
        j === K.s.r && (Z[C] = Ye(C));
        var Te = Z[C] + se, de = ee ? (w[j] || [])[C] : w[Te];
        if (!(!de || de.t == "z"))
          if (de.t == "n")
            (de.v | 0) == de.v && de.v >= -32768 && de.v <= 32767 ? yr(N, 13, d(j, C, de.v)) : yr(N, 14, x(j, C, de.v));
          else {
            var pe = Gr(de);
            yr(N, 15, u(j, C, pe.slice(0, 239)));
          }
      }
    return yr(N, 1), N.end();
  }
  function t(w, P) {
    var b = P || {};
    if (+b.codepage >= 0 && Dr(+b.codepage), b.type == "string") throw new Error("Cannot write WK3 to JS string");
    var N = Gt();
    yr(N, 0, s(w));
    for (var K = 0, ee = 0; K < w.SheetNames.length; ++K) (w.Sheets[w.SheetNames[K]] || {})["!ref"] && yr(N, 27, M(w.SheetNames[K], ee++));
    var Z = 0;
    for (K = 0; K < w.SheetNames.length; ++K) {
      var J = w.Sheets[w.SheetNames[K]];
      if (!(!J || !J["!ref"])) {
        for (var j = Ue(J["!ref"]), se = Array.isArray(J), C = [], Te = Math.min(j.e.r, 8191), de = j.s.r; de <= Te; ++de)
          for (var pe = er(de), oe = j.s.c; oe <= j.e.c; ++oe) {
            de === j.s.r && (C[oe] = Ye(oe));
            var ne = C[oe] + pe, xe = se ? (J[de] || [])[oe] : J[ne];
            if (!(!xe || xe.t == "z"))
              if (xe.t == "n")
                yr(N, 23, R(de, oe, Z, xe.v));
              else {
                var we = Gr(xe);
                yr(N, 22, A(de, oe, Z, we.slice(0, 239)));
              }
          }
        ++Z;
      }
    }
    return yr(N, 1), N.end();
  }
  function i(w) {
    var P = Ke(2);
    return P.write_shift(2, w), P;
  }
  function s(w) {
    var P = Ke(26);
    P.write_shift(2, 4096), P.write_shift(2, 4), P.write_shift(4, 0);
    for (var b = 0, N = 0, K = 0, ee = 0; ee < w.SheetNames.length; ++ee) {
      var Z = w.SheetNames[ee], J = w.Sheets[Z];
      if (!(!J || !J["!ref"])) {
        ++K;
        var j = Sa(J["!ref"]);
        b < j.e.r && (b = j.e.r), N < j.e.c && (N = j.e.c);
      }
    }
    return b > 8191 && (b = 8191), P.write_shift(2, b), P.write_shift(1, K), P.write_shift(1, N), P.write_shift(2, 0), P.write_shift(2, 0), P.write_shift(1, 1), P.write_shift(1, 2), P.write_shift(4, 0), P.write_shift(4, 0), P;
  }
  function c(w, P, b) {
    var N = { s: { c: 0, r: 0 }, e: { c: 0, r: 0 } };
    return P == 8 && b.qpro ? (N.s.c = w.read_shift(1), w.l++, N.s.r = w.read_shift(2), N.e.c = w.read_shift(1), w.l++, N.e.r = w.read_shift(2), N) : (N.s.c = w.read_shift(2), N.s.r = w.read_shift(2), P == 12 && b.qpro && (w.l += 2), N.e.c = w.read_shift(2), N.e.r = w.read_shift(2), P == 12 && b.qpro && (w.l += 2), N.s.c == 65535 && (N.s.c = N.e.c = N.s.r = N.e.r = 0), N);
  }
  function o(w) {
    var P = Ke(8);
    return P.write_shift(2, w.s.c), P.write_shift(2, w.s.r), P.write_shift(2, w.e.c), P.write_shift(2, w.e.r), P;
  }
  function f(w, P, b) {
    var N = [{ c: 0, r: 0 }, { t: "n", v: 0 }, 0, 0];
    return b.qpro && b.vers != 20768 ? (N[0].c = w.read_shift(1), N[3] = w.read_shift(1), N[0].r = w.read_shift(2), w.l += 2) : (N[2] = w.read_shift(1), N[0].c = w.read_shift(2), N[0].r = w.read_shift(2)), N;
  }
  function l(w, P, b) {
    var N = w.l + P, K = f(w, P, b);
    if (K[1].t = "s", b.vers == 20768) {
      w.l++;
      var ee = w.read_shift(1);
      return K[1].v = w.read_shift(ee, "utf8"), K;
    }
    return b.qpro && w.l++, K[1].v = w.read_shift(N - w.l, "cstr"), K;
  }
  function u(w, P, b) {
    var N = Ke(7 + b.length);
    N.write_shift(1, 255), N.write_shift(2, P), N.write_shift(2, w), N.write_shift(1, 39);
    for (var K = 0; K < N.length; ++K) {
      var ee = b.charCodeAt(K);
      N.write_shift(1, ee >= 128 ? 95 : ee);
    }
    return N.write_shift(1, 0), N;
  }
  function h(w, P, b) {
    var N = f(w, P, b);
    return N[1].v = w.read_shift(2, "i"), N;
  }
  function d(w, P, b) {
    var N = Ke(7);
    return N.write_shift(1, 255), N.write_shift(2, P), N.write_shift(2, w), N.write_shift(2, b, "i"), N;
  }
  function p(w, P, b) {
    var N = f(w, P, b);
    return N[1].v = w.read_shift(8, "f"), N;
  }
  function x(w, P, b) {
    var N = Ke(13);
    return N.write_shift(1, 255), N.write_shift(2, P), N.write_shift(2, w), N.write_shift(8, b, "f"), N;
  }
  function g(w, P, b) {
    var N = w.l + P, K = f(w, P, b);
    if (K[1].v = w.read_shift(8, "f"), b.qpro) w.l = N;
    else {
      var ee = w.read_shift(2);
      U(w.slice(w.l, w.l + ee), K), w.l += ee;
    }
    return K;
  }
  function O(w, P, b) {
    var N = P & 32768;
    return P &= -32769, P = (N ? w : 0) + (P >= 8192 ? P - 16384 : P), (N ? "" : "$") + (b ? Ye(P) : er(P));
  }
  var I = {
    51: ["FALSE", 0],
    52: ["TRUE", 0],
    70: ["LEN", 1],
    80: ["SUM", 69],
    81: ["AVERAGEA", 69],
    82: ["COUNTA", 69],
    83: ["MINA", 69],
    84: ["MAXA", 69],
    111: ["T", 1]
  }, T = [
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    // eslint-disable-line no-mixed-spaces-and-tabs
    "",
    "+",
    "-",
    "*",
    "/",
    "^",
    "=",
    "<>",
    // eslint-disable-line no-mixed-spaces-and-tabs
    "<=",
    ">=",
    "<",
    ">",
    "",
    "",
    "",
    "",
    // eslint-disable-line no-mixed-spaces-and-tabs
    "&",
    "",
    "",
    "",
    "",
    "",
    "",
    ""
    // eslint-disable-line no-mixed-spaces-and-tabs
  ];
  function U(w, P) {
    Ze(w, 0);
    for (var b = [], N = 0, K = "", ee = "", Z = "", J = ""; w.l < w.length; ) {
      var j = w[w.l++];
      switch (j) {
        case 0:
          b.push(w.read_shift(8, "f"));
          break;
        case 1:
          ee = O(P[0].c, w.read_shift(2), !0), K = O(P[0].r, w.read_shift(2), !1), b.push(ee + K);
          break;
        case 2:
          {
            var se = O(P[0].c, w.read_shift(2), !0), C = O(P[0].r, w.read_shift(2), !1);
            ee = O(P[0].c, w.read_shift(2), !0), K = O(P[0].r, w.read_shift(2), !1), b.push(se + C + ":" + ee + K);
          }
          break;
        case 3:
          if (w.l < w.length) {
            console.error("WK1 premature formula end");
            return;
          }
          break;
        case 4:
          b.push("(" + b.pop() + ")");
          break;
        case 5:
          b.push(w.read_shift(2));
          break;
        case 6:
          {
            for (var Te = ""; j = w[w.l++]; ) Te += String.fromCharCode(j);
            b.push('"' + Te.replace(/"/g, '""') + '"');
          }
          break;
        case 8:
          b.push("-" + b.pop());
          break;
        case 23:
          b.push("+" + b.pop());
          break;
        case 22:
          b.push("NOT(" + b.pop() + ")");
          break;
        case 20:
        case 21:
          J = b.pop(), Z = b.pop(), b.push(["AND", "OR"][j - 20] + "(" + Z + "," + J + ")");
          break;
        default:
          if (j < 32 && T[j])
            J = b.pop(), Z = b.pop(), b.push(Z + T[j] + J);
          else if (I[j]) {
            if (N = I[j][1], N == 69 && (N = w[w.l++]), N > b.length) {
              console.error("WK1 bad formula parse 0x" + j.toString(16) + ":|" + b.join("|") + "|");
              return;
            }
            var de = b.slice(-N);
            b.length -= N, b.push(I[j][0] + "(" + de.join(",") + ")");
          } else return j <= 7 ? console.error("WK1 invalid opcode " + j.toString(16)) : j <= 24 ? console.error("WK1 unsupported op " + j.toString(16)) : j <= 30 ? console.error("WK1 invalid opcode " + j.toString(16)) : j <= 115 ? console.error("WK1 unsupported function opcode " + j.toString(16)) : console.error("WK1 unrecognized opcode " + j.toString(16));
      }
    }
    b.length == 1 ? P[1].f = "" + b[0] : console.error("WK1 bad formula parse |" + b.join("|") + "|");
  }
  function V(w) {
    var P = [{ c: 0, r: 0 }, { t: "n", v: 0 }, 0];
    return P[0].r = w.read_shift(2), P[3] = w[w.l++], P[0].c = w[w.l++], P;
  }
  function B(w, P) {
    var b = V(w);
    return b[1].t = "s", b[1].v = w.read_shift(P - 4, "cstr"), b;
  }
  function A(w, P, b, N) {
    var K = Ke(6 + N.length);
    K.write_shift(2, w), K.write_shift(1, b), K.write_shift(1, P), K.write_shift(1, 39);
    for (var ee = 0; ee < N.length; ++ee) {
      var Z = N.charCodeAt(ee);
      K.write_shift(1, Z >= 128 ? 95 : Z);
    }
    return K.write_shift(1, 0), K;
  }
  function _(w, P) {
    var b = V(w);
    b[1].v = w.read_shift(2);
    var N = b[1].v >> 1;
    if (b[1].v & 1)
      switch (N & 7) {
        case 0:
          N = (N >> 3) * 5e3;
          break;
        case 1:
          N = (N >> 3) * 500;
          break;
        case 2:
          N = (N >> 3) / 20;
          break;
        case 3:
          N = (N >> 3) / 200;
          break;
        case 4:
          N = (N >> 3) / 2e3;
          break;
        case 5:
          N = (N >> 3) / 2e4;
          break;
        case 6:
          N = (N >> 3) / 16;
          break;
        case 7:
          N = (N >> 3) / 64;
          break;
      }
    return b[1].v = N, b;
  }
  function m(w, P) {
    var b = V(w), N = w.read_shift(4), K = w.read_shift(4), ee = w.read_shift(2);
    if (ee == 65535)
      return N === 0 && K === 3221225472 ? (b[1].t = "e", b[1].v = 15) : N === 0 && K === 3489660928 ? (b[1].t = "e", b[1].v = 42) : b[1].v = 0, b;
    var Z = ee & 32768;
    return ee = (ee & 32767) - 16446, b[1].v = (1 - Z * 2) * (K * Math.pow(2, ee + 32) + N * Math.pow(2, ee)), b;
  }
  function R(w, P, b, N) {
    var K = Ke(14);
    if (K.write_shift(2, w), K.write_shift(1, b), K.write_shift(1, P), N == 0)
      return K.write_shift(4, 0), K.write_shift(4, 0), K.write_shift(2, 65535), K;
    var ee = 0, Z = 0, J = 0, j = 0;
    return N < 0 && (ee = 1, N = -N), Z = Math.log2(N) | 0, N /= Math.pow(2, Z - 31), j = N >>> 0, (j & 2147483648) == 0 && (N /= 2, ++Z, j = N >>> 0), N -= j, j |= 2147483648, j >>>= 0, N *= Math.pow(2, 32), J = N >>> 0, K.write_shift(4, J), K.write_shift(4, j), Z += 16383 + (ee ? 32768 : 0), K.write_shift(2, Z), K;
  }
  function L(w, P) {
    var b = m(w);
    return w.l += P - 14, b;
  }
  function D(w, P) {
    var b = V(w), N = w.read_shift(4);
    return b[1].v = N >> 6, b;
  }
  function z(w, P) {
    var b = V(w), N = w.read_shift(8, "f");
    return b[1].v = N, b;
  }
  function ie(w, P) {
    var b = z(w);
    return w.l += P - 10, b;
  }
  function re(w, P) {
    return w[w.l + P - 1] == 0 ? w.read_shift(P, "cstr") : "";
  }
  function fe(w, P) {
    var b = w[w.l++];
    b > P - 1 && (b = P - 1);
    for (var N = ""; N.length < b; ) N += String.fromCharCode(w[w.l++]);
    return N;
  }
  function q(w, P, b) {
    if (!(!b.qpro || P < 21)) {
      var N = w.read_shift(1);
      w.l += 17, w.l += 1, w.l += 2;
      var K = w.read_shift(P - 21, "cstr");
      return [N, K];
    }
  }
  function ve(w, P) {
    for (var b = {}, N = w.l + P; w.l < N; ) {
      var K = w.read_shift(2);
      if (K == 14e3) {
        for (b[K] = [0, ""], b[K][0] = w.read_shift(2); w[w.l]; )
          b[K][1] += String.fromCharCode(w[w.l]), w.l++;
        w.l++;
      }
    }
    return b;
  }
  function M(w, P) {
    var b = Ke(5 + w.length);
    b.write_shift(2, 14e3), b.write_shift(2, P);
    for (var N = 0; N < w.length; ++N) {
      var K = w.charCodeAt(N);
      b[b.l++] = K > 127 ? 95 : K;
    }
    return b[b.l++] = 0, b;
  }
  var he = {
    /*::[*/
    0: { n: "BOF", f: ze },
    /*::[*/
    1: { n: "EOF" },
    /*::[*/
    2: { n: "CALCMODE" },
    /*::[*/
    3: { n: "CALCORDER" },
    /*::[*/
    4: { n: "SPLIT" },
    /*::[*/
    5: { n: "SYNC" },
    /*::[*/
    6: { n: "RANGE", f: c },
    /*::[*/
    7: { n: "WINDOW1" },
    /*::[*/
    8: { n: "COLW1" },
    /*::[*/
    9: { n: "WINTWO" },
    /*::[*/
    10: { n: "COLW2" },
    /*::[*/
    11: { n: "NAME" },
    /*::[*/
    12: { n: "BLANK" },
    /*::[*/
    13: { n: "INTEGER", f: h },
    /*::[*/
    14: { n: "NUMBER", f: p },
    /*::[*/
    15: { n: "LABEL", f: l },
    /*::[*/
    16: { n: "FORMULA", f: g },
    /*::[*/
    24: { n: "TABLE" },
    /*::[*/
    25: { n: "ORANGE" },
    /*::[*/
    26: { n: "PRANGE" },
    /*::[*/
    27: { n: "SRANGE" },
    /*::[*/
    28: { n: "FRANGE" },
    /*::[*/
    29: { n: "KRANGE1" },
    /*::[*/
    32: { n: "HRANGE" },
    /*::[*/
    35: { n: "KRANGE2" },
    /*::[*/
    36: { n: "PROTEC" },
    /*::[*/
    37: { n: "FOOTER" },
    /*::[*/
    38: { n: "HEADER" },
    /*::[*/
    39: { n: "SETUP" },
    /*::[*/
    40: { n: "MARGINS" },
    /*::[*/
    41: { n: "LABELFMT" },
    /*::[*/
    42: { n: "TITLES" },
    /*::[*/
    43: { n: "SHEETJS" },
    /*::[*/
    45: { n: "GRAPH" },
    /*::[*/
    46: { n: "NGRAPH" },
    /*::[*/
    47: { n: "CALCCOUNT" },
    /*::[*/
    48: { n: "UNFORMATTED" },
    /*::[*/
    49: { n: "CURSORW12" },
    /*::[*/
    50: { n: "WINDOW" },
    /*::[*/
    51: { n: "STRING", f: l },
    /*::[*/
    55: { n: "PASSWORD" },
    /*::[*/
    56: { n: "LOCKED" },
    /*::[*/
    60: { n: "QUERY" },
    /*::[*/
    61: { n: "QUERYNAME" },
    /*::[*/
    62: { n: "PRINT" },
    /*::[*/
    63: { n: "PRINTNAME" },
    /*::[*/
    64: { n: "GRAPH2" },
    /*::[*/
    65: { n: "GRAPHNAME" },
    /*::[*/
    66: { n: "ZOOM" },
    /*::[*/
    67: { n: "SYMSPLIT" },
    /*::[*/
    68: { n: "NSROWS" },
    /*::[*/
    69: { n: "NSCOLS" },
    /*::[*/
    70: { n: "RULER" },
    /*::[*/
    71: { n: "NNAME" },
    /*::[*/
    72: { n: "ACOMM" },
    /*::[*/
    73: { n: "AMACRO" },
    /*::[*/
    74: { n: "PARSE" },
    /*::[*/
    102: { n: "PRANGES??" },
    /*::[*/
    103: { n: "RRANGES??" },
    /*::[*/
    104: { n: "FNAME??" },
    /*::[*/
    105: { n: "MRANGES??" },
    /*::[*/
    204: { n: "SHEETNAMECS", f: re },
    /*::[*/
    222: { n: "SHEETNAMELP", f: fe },
    /*::[*/
    65535: { n: "" }
  }, te = {
    /*::[*/
    0: { n: "BOF" },
    /*::[*/
    1: { n: "EOF" },
    /*::[*/
    2: { n: "PASSWORD" },
    /*::[*/
    3: { n: "CALCSET" },
    /*::[*/
    4: { n: "WINDOWSET" },
    /*::[*/
    5: { n: "SHEETCELLPTR" },
    /*::[*/
    6: { n: "SHEETLAYOUT" },
    /*::[*/
    7: { n: "COLUMNWIDTH" },
    /*::[*/
    8: { n: "HIDDENCOLUMN" },
    /*::[*/
    9: { n: "USERRANGE" },
    /*::[*/
    10: { n: "SYSTEMRANGE" },
    /*::[*/
    11: { n: "ZEROFORCE" },
    /*::[*/
    12: { n: "SORTKEYDIR" },
    /*::[*/
    13: { n: "FILESEAL" },
    /*::[*/
    14: { n: "DATAFILLNUMS" },
    /*::[*/
    15: { n: "PRINTMAIN" },
    /*::[*/
    16: { n: "PRINTSTRING" },
    /*::[*/
    17: { n: "GRAPHMAIN" },
    /*::[*/
    18: { n: "GRAPHSTRING" },
    /*::[*/
    19: { n: "??" },
    /*::[*/
    20: { n: "ERRCELL" },
    /*::[*/
    21: { n: "NACELL" },
    /*::[*/
    22: { n: "LABEL16", f: B },
    /*::[*/
    23: { n: "NUMBER17", f: m },
    /*::[*/
    24: { n: "NUMBER18", f: _ },
    /*::[*/
    25: { n: "FORMULA19", f: L },
    /*::[*/
    26: { n: "FORMULA1A" },
    /*::[*/
    27: { n: "XFORMAT", f: ve },
    /*::[*/
    28: { n: "DTLABELMISC" },
    /*::[*/
    29: { n: "DTLABELCELL" },
    /*::[*/
    30: { n: "GRAPHWINDOW" },
    /*::[*/
    31: { n: "CPA" },
    /*::[*/
    32: { n: "LPLAUTO" },
    /*::[*/
    33: { n: "QUERY" },
    /*::[*/
    34: { n: "HIDDENSHEET" },
    /*::[*/
    35: { n: "??" },
    /*::[*/
    37: { n: "NUMBER25", f: D },
    /*::[*/
    38: { n: "??" },
    /*::[*/
    39: { n: "NUMBER27", f: z },
    /*::[*/
    40: { n: "FORMULA28", f: ie },
    /*::[*/
    142: { n: "??" },
    /*::[*/
    147: { n: "??" },
    /*::[*/
    150: { n: "??" },
    /*::[*/
    151: { n: "??" },
    /*::[*/
    152: { n: "??" },
    /*::[*/
    153: { n: "??" },
    /*::[*/
    154: { n: "??" },
    /*::[*/
    155: { n: "??" },
    /*::[*/
    156: { n: "??" },
    /*::[*/
    163: { n: "??" },
    /*::[*/
    174: { n: "??" },
    /*::[*/
    175: { n: "??" },
    /*::[*/
    176: { n: "??" },
    /*::[*/
    177: { n: "??" },
    /*::[*/
    184: { n: "??" },
    /*::[*/
    185: { n: "??" },
    /*::[*/
    186: { n: "??" },
    /*::[*/
    187: { n: "??" },
    /*::[*/
    188: { n: "??" },
    /*::[*/
    195: { n: "??" },
    /*::[*/
    201: { n: "??" },
    /*::[*/
    204: { n: "SHEETNAMECS", f: re },
    /*::[*/
    205: { n: "??" },
    /*::[*/
    206: { n: "??" },
    /*::[*/
    207: { n: "??" },
    /*::[*/
    208: { n: "??" },
    /*::[*/
    256: { n: "??" },
    /*::[*/
    259: { n: "??" },
    /*::[*/
    260: { n: "??" },
    /*::[*/
    261: { n: "??" },
    /*::[*/
    262: { n: "??" },
    /*::[*/
    263: { n: "??" },
    /*::[*/
    265: { n: "??" },
    /*::[*/
    266: { n: "??" },
    /*::[*/
    267: { n: "??" },
    /*::[*/
    268: { n: "??" },
    /*::[*/
    270: { n: "??" },
    /*::[*/
    271: { n: "??" },
    /*::[*/
    384: { n: "??" },
    /*::[*/
    389: { n: "??" },
    /*::[*/
    390: { n: "??" },
    /*::[*/
    393: { n: "??" },
    /*::[*/
    396: { n: "??" },
    /*::[*/
    512: { n: "??" },
    /*::[*/
    514: { n: "??" },
    /*::[*/
    513: { n: "??" },
    /*::[*/
    516: { n: "??" },
    /*::[*/
    517: { n: "??" },
    /*::[*/
    640: { n: "??" },
    /*::[*/
    641: { n: "??" },
    /*::[*/
    642: { n: "??" },
    /*::[*/
    643: { n: "??" },
    /*::[*/
    644: { n: "??" },
    /*::[*/
    645: { n: "??" },
    /*::[*/
    646: { n: "??" },
    /*::[*/
    647: { n: "??" },
    /*::[*/
    648: { n: "??" },
    /*::[*/
    658: { n: "??" },
    /*::[*/
    659: { n: "??" },
    /*::[*/
    660: { n: "??" },
    /*::[*/
    661: { n: "??" },
    /*::[*/
    662: { n: "??" },
    /*::[*/
    665: { n: "??" },
    /*::[*/
    666: { n: "??" },
    /*::[*/
    768: { n: "??" },
    /*::[*/
    772: { n: "??" },
    /*::[*/
    1537: { n: "SHEETINFOQP", f: q },
    /*::[*/
    1600: { n: "??" },
    /*::[*/
    1602: { n: "??" },
    /*::[*/
    1793: { n: "??" },
    /*::[*/
    1794: { n: "??" },
    /*::[*/
    1795: { n: "??" },
    /*::[*/
    1796: { n: "??" },
    /*::[*/
    1920: { n: "??" },
    /*::[*/
    2048: { n: "??" },
    /*::[*/
    2049: { n: "??" },
    /*::[*/
    2052: { n: "??" },
    /*::[*/
    2688: { n: "??" },
    /*::[*/
    10998: { n: "??" },
    /*::[*/
    12849: { n: "??" },
    /*::[*/
    28233: { n: "??" },
    /*::[*/
    28484: { n: "??" },
    /*::[*/
    65535: { n: "" }
  };
  return {
    sheet_to_wk1: n,
    book_to_wk3: t,
    to_workbook: a
  };
})();
function rl(e) {
  var a = {}, r = e.match(lr), n = 0, t = !1;
  if (r) for (; n != r.length; ++n) {
    var i = ge(r[n]);
    switch (i[0].replace(/\w*:/g, "")) {
      /* 18.8.12 condense CT_BooleanProperty */
      /* ** not required . */
      case "<condense":
        break;
      /* 18.8.17 extend CT_BooleanProperty */
      /* ** not required . */
      case "<extend":
        break;
      /* 18.8.36 shadow CT_BooleanProperty */
      /* ** not required . */
      case "<shadow":
        if (!i.val) break;
      /* falls through */
      case "<shadow>":
      case "<shadow/>":
        a.shadow = 1;
        break;
      case "</shadow>":
        break;
      /* 18.4.1 charset CT_IntProperty TODO */
      case "<charset":
        if (i.val == "1") break;
        a.cp = e0[parseInt(i.val, 10)];
        break;
      /* 18.4.2 outline CT_BooleanProperty TODO */
      case "<outline":
        if (!i.val) break;
      /* falls through */
      case "<outline>":
      case "<outline/>":
        a.outline = 1;
        break;
      case "</outline>":
        break;
      /* 18.4.5 rFont CT_FontName */
      case "<rFont":
        a.name = i.val;
        break;
      /* 18.4.11 sz CT_FontSize */
      case "<sz":
        a.sz = i.val;
        break;
      /* 18.4.10 strike CT_BooleanProperty */
      case "<strike":
        if (!i.val) break;
      /* falls through */
      case "<strike>":
      case "<strike/>":
        a.strike = 1;
        break;
      case "</strike>":
        break;
      /* 18.4.13 u CT_UnderlineProperty */
      case "<u":
        if (!i.val) break;
        switch (i.val) {
          case "double":
            a.uval = "double";
            break;
          case "singleAccounting":
            a.uval = "single-accounting";
            break;
          case "doubleAccounting":
            a.uval = "double-accounting";
            break;
        }
      /* falls through */
      case "<u>":
      case "<u/>":
        a.u = 1;
        break;
      case "</u>":
        break;
      /* 18.8.2 b */
      case "<b":
        if (i.val == "0") break;
      /* falls through */
      case "<b>":
      case "<b/>":
        a.b = 1;
        break;
      case "</b>":
        break;
      /* 18.8.26 i */
      case "<i":
        if (i.val == "0") break;
      /* falls through */
      case "<i>":
      case "<i/>":
        a.i = 1;
        break;
      case "</i>":
        break;
      /* 18.3.1.15 color CT_Color TODO: tint, theme, auto, indexed */
      case "<color":
        i.rgb && (a.color = i.rgb.slice(2, 8));
        break;
      case "<color>":
      case "<color/>":
      case "</color>":
        break;
      /* 18.8.18 family ST_FontFamily */
      case "<family":
        a.family = i.val;
        break;
      case "<family>":
      case "<family/>":
      case "</family>":
        break;
      /* 18.4.14 vertAlign CT_VerticalAlignFontProperty TODO */
      case "<vertAlign":
        a.valign = i.val;
        break;
      case "<vertAlign>":
      case "<vertAlign/>":
      case "</vertAlign>":
        break;
      /* 18.8.35 scheme CT_FontScheme TODO */
      case "<scheme":
        break;
      case "<scheme>":
      case "<scheme/>":
      case "</scheme>":
        break;
      /* 18.2.10 extLst CT_ExtensionList ? */
      case "<extLst":
      case "<extLst>":
      case "</extLst>":
        break;
      case "<ext":
        t = !0;
        break;
      case "</ext>":
        t = !1;
        break;
      default:
        if (i[0].charCodeAt(1) !== 47 && !t) throw new Error("Unrecognized rich format " + i[0]);
    }
  }
  return a;
}
var al = /* @__PURE__ */ (function() {
  var e = $a("t"), a = $a("rPr");
  function r(i) {
    var s = i.match(e);
    if (!s) return { t: "s", v: "" };
    var c = { t: "s", v: Ce(s[1]) }, o = i.match(a);
    return o && (c.s = rl(o[1])), c;
  }
  var n = /<(?:\w+:)?r>/g, t = /<\/(?:\w+:)?r>/;
  return function(s) {
    return s.replace(n, "").split(t).map(r).filter(function(c) {
      return c.v;
    });
  };
})(), tl = /* @__PURE__ */ (function() {
  var a = /(\r\n|\n)/g;
  function r(t, i, s) {
    var c = [];
    t.u && c.push("text-decoration: underline;"), t.uval && c.push("text-underline-style:" + t.uval + ";"), t.sz && c.push("font-size:" + t.sz + "pt;"), t.outline && c.push("text-effect: outline;"), t.shadow && c.push("text-shadow: auto;"), i.push('<span style="' + c.join("") + '">'), t.b && (i.push("<b>"), s.push("</b>")), t.i && (i.push("<i>"), s.push("</i>")), t.strike && (i.push("<s>"), s.push("</s>"));
    var o = t.valign || "";
    return o == "superscript" || o == "super" ? o = "sup" : o == "subscript" && (o = "sub"), o != "" && (i.push("<" + o + ">"), s.push("</" + o + ">")), s.push("</span>"), t;
  }
  function n(t) {
    var i = [[], t.v, []];
    return t.v ? (t.s && r(t.s, i[0], i[2]), i[0].join("") + i[1].replace(a, "<br/>") + i[2].join("")) : "";
  }
  return function(i) {
    return i.map(n).join("");
  };
})(), nl = /<(?:\w+:)?t[^>]*>([^<]*)<\/(?:\w+:)?t>/g, il = /<(?:\w+:)?r>/, sl = /<(?:\w+:)?rPh.*?>([\s\S]*?)<\/(?:\w+:)?rPh>/g;
function g0(e, a) {
  var r = a ? a.cellHTML : !0, n = {};
  return e ? (e.match(/^\s*<(?:\w+:)?t[^>]*>/) ? (n.t = Ce(Re(e.slice(e.indexOf(">") + 1).split(/<\/(?:\w+:)?t>/)[0] || "")), n.r = Re(e), r && (n.h = c0(n.t))) : (
    /*y = */
    e.match(il) && (n.r = Re(e), n.t = Ce(Re((e.replace(sl, "").match(nl) || []).join("").replace(lr, ""))), r && (n.h = tl(al(n.r))))
  ), n) : { t: "" };
}
var cl = /<(?:\w+:)?sst([^>]*)>([\s\S]*)<\/(?:\w+:)?sst>/, fl = /<(?:\w+:)?(?:si|sstItem)>/g, ol = /<\/(?:\w+:)?(?:si|sstItem)>/;
function ll(e, a) {
  var r = [], n = "";
  if (!e) return r;
  var t = e.match(cl);
  if (t) {
    n = t[2].replace(fl, "").split(ol);
    for (var i = 0; i != n.length; ++i) {
      var s = g0(n[i].trim(), a);
      s != null && (r[r.length] = s);
    }
    t = ge(t[1]), r.Count = t.count, r.Unique = t.uniqueCount;
  }
  return r;
}
function ul(e) {
  return [e.read_shift(4), e.read_shift(4)];
}
function hl(e, a) {
  var r = [], n = !1;
  return zr(e, function(i, s, c) {
    switch (c) {
      case 159:
        r.Count = i[0], r.Unique = i[1];
        break;
      case 19:
        r.push(i);
        break;
      case 160:
        return !0;
      case 35:
        n = !0;
        break;
      case 36:
        n = !1;
        break;
      default:
        if (s.T, !n || a.WTF) throw new Error("Unexpected record 0x" + c.toString(16));
    }
  }), r;
}
function Ui(e) {
  for (var a = [], r = e.split(""), n = 0; n < r.length; ++n) a[n] = r[n].charCodeAt(0);
  return a;
}
function Vr(e, a) {
  var r = {};
  return r.Major = e.read_shift(2), r.Minor = e.read_shift(2), a >= 4 && (e.l += a - 4), r;
}
function xl(e) {
  var a = {};
  return a.id = e.read_shift(0, "lpp4"), a.R = Vr(e, 4), a.U = Vr(e, 4), a.W = Vr(e, 4), a;
}
function dl(e) {
  for (var a = e.read_shift(4), r = e.l + a - 4, n = {}, t = e.read_shift(4), i = []; t-- > 0; ) i.push({ t: e.read_shift(4), v: e.read_shift(0, "lpp4") });
  if (n.name = e.read_shift(0, "lpp4"), n.comps = i, e.l != r) throw new Error("Bad DataSpaceMapEntry: " + e.l + " != " + r);
  return n;
}
function pl(e) {
  var a = [];
  e.l += 4;
  for (var r = e.read_shift(4); r-- > 0; ) a.push(dl(e));
  return a;
}
function vl(e) {
  var a = [];
  e.l += 4;
  for (var r = e.read_shift(4); r-- > 0; ) a.push(e.read_shift(0, "lpp4"));
  return a;
}
function gl(e) {
  var a = {};
  return e.read_shift(4), e.l += 4, a.id = e.read_shift(0, "lpp4"), a.name = e.read_shift(0, "lpp4"), a.R = Vr(e, 4), a.U = Vr(e, 4), a.W = Vr(e, 4), a;
}
function ml(e) {
  var a = gl(e);
  if (a.ename = e.read_shift(0, "8lpp4"), a.blksz = e.read_shift(4), a.cmode = e.read_shift(4), e.read_shift(4) != 4) throw new Error("Bad !Primary record");
  return a;
}
function Hi(e, a) {
  var r = e.l + a, n = {};
  n.Flags = e.read_shift(4) & 63, e.l += 4, n.AlgID = e.read_shift(4);
  var t = !1;
  switch (n.AlgID) {
    case 26126:
    case 26127:
    case 26128:
      t = n.Flags == 36;
      break;
    case 26625:
      t = n.Flags == 4;
      break;
    case 0:
      t = n.Flags == 16 || n.Flags == 4 || n.Flags == 36;
      break;
    default:
      throw "Unrecognized encryption algorithm: " + n.AlgID;
  }
  if (!t) throw new Error("Encryption Flags/AlgID mismatch");
  return n.AlgIDHash = e.read_shift(4), n.KeySize = e.read_shift(4), n.ProviderType = e.read_shift(4), e.l += 8, n.CSPName = e.read_shift(r - e.l >> 1, "utf16le"), e.l = r, n;
}
function Wi(e, a) {
  var r = {}, n = e.l + a;
  return e.l += 4, r.Salt = e.slice(e.l, e.l + 16), e.l += 16, r.Verifier = e.slice(e.l, e.l + 16), e.l += 16, e.read_shift(4), r.VerifierHash = e.slice(e.l, n), e.l = n, r;
}
function _l(e) {
  var a = Vr(e);
  switch (a.Minor) {
    case 2:
      return [a.Minor, El(e)];
    case 3:
      return [a.Minor, Tl()];
    case 4:
      return [a.Minor, kl(e)];
  }
  throw new Error("ECMA-376 Encrypted file unrecognized Version: " + a.Minor);
}
function El(e) {
  var a = e.read_shift(4);
  if ((a & 63) != 36) throw new Error("EncryptionInfo mismatch");
  var r = e.read_shift(4), n = Hi(e, r), t = Wi(e, e.length - e.l);
  return { t: "Std", h: n, v: t };
}
function Tl() {
  throw new Error("File is password-protected: ECMA-376 Extensible");
}
function kl(e) {
  var a = ["saltSize", "blockSize", "keyBits", "hashSize", "cipherAlgorithm", "cipherChaining", "hashAlgorithm", "saltValue"];
  e.l += 4;
  var r = e.read_shift(e.length - e.l, "utf8"), n = {};
  return r.replace(lr, function(i) {
    var s = ge(i);
    switch (Mr(s[0])) {
      case "<?xml":
        break;
      case "<encryption":
      case "</encryption>":
        break;
      case "<keyData":
        a.forEach(function(c) {
          n[c] = s[c];
        });
        break;
      case "<dataIntegrity":
        n.encryptedHmacKey = s.encryptedHmacKey, n.encryptedHmacValue = s.encryptedHmacValue;
        break;
      case "<keyEncryptors>":
      case "<keyEncryptors":
        n.encs = [];
        break;
      case "</keyEncryptors>":
        break;
      case "<keyEncryptor":
        n.uri = s.uri;
        break;
      case "</keyEncryptor>":
        break;
      case "<encryptedKey":
        n.encs.push(s);
        break;
      default:
        throw s[0];
    }
  }), n;
}
function wl(e, a) {
  var r = {}, n = r.EncryptionVersionInfo = Vr(e, 4);
  if (a -= 4, n.Minor != 2) throw new Error("unrecognized minor version code: " + n.Minor);
  if (n.Major > 4 || n.Major < 2) throw new Error("unrecognized major version code: " + n.Major);
  r.Flags = e.read_shift(4), a -= 4;
  var t = e.read_shift(4);
  return a -= 4, r.EncryptionHeader = Hi(e, t), a -= t, r.EncryptionVerifier = Wi(e, a), r;
}
function Al(e) {
  var a = {}, r = a.EncryptionVersionInfo = Vr(e, 4);
  if (r.Major != 1 || r.Minor != 1) throw "unrecognized version code " + r.Major + " : " + r.Minor;
  return a.Salt = e.read_shift(16), a.EncryptedVerifier = e.read_shift(16), a.EncryptedVerifierHash = e.read_shift(16), a;
}
function Fl(e) {
  var a = 0, r, n = Ui(e), t = n.length + 1, i, s, c, o, f;
  for (r = qr(t), r[0] = n.length, i = 1; i != t; ++i) r[i] = n[i - 1];
  for (i = t - 1; i >= 0; --i)
    s = r[i], c = (a & 16384) === 0 ? 0 : 1, o = a << 1 & 32767, f = c | o, a = f ^ s;
  return a ^ 52811;
}
var Vi = /* @__PURE__ */ (function() {
  var e = [187, 255, 255, 186, 255, 255, 185, 128, 0, 190, 15, 0, 191, 15, 0], a = [57840, 7439, 52380, 33984, 4364, 3600, 61902, 12606, 6258, 57657, 54287, 34041, 10252, 43370, 20163], r = [44796, 19929, 39858, 10053, 20106, 40212, 10761, 31585, 63170, 64933, 60267, 50935, 40399, 11199, 17763, 35526, 1453, 2906, 5812, 11624, 23248, 885, 1770, 3540, 7080, 14160, 28320, 56640, 55369, 41139, 20807, 41614, 21821, 43642, 17621, 28485, 56970, 44341, 19019, 38038, 14605, 29210, 60195, 50791, 40175, 10751, 21502, 43004, 24537, 18387, 36774, 3949, 7898, 15796, 31592, 63184, 47201, 24803, 49606, 37805, 14203, 28406, 56812, 17824, 35648, 1697, 3394, 6788, 13576, 27152, 43601, 17539, 35078, 557, 1114, 2228, 4456, 30388, 60776, 51953, 34243, 7079, 14158, 28316, 14128, 28256, 56512, 43425, 17251, 34502, 7597, 13105, 26210, 52420, 35241, 883, 1766, 3532, 4129, 8258, 16516, 33032, 4657, 9314, 18628], n = function(s) {
    return (s / 2 | s * 128) & 255;
  }, t = function(s, c) {
    return n(s ^ c);
  }, i = function(s) {
    for (var c = a[s.length - 1], o = 104, f = s.length - 1; f >= 0; --f)
      for (var l = s[f], u = 0; u != 7; ++u)
        l & 64 && (c ^= r[o]), l *= 2, --o;
    return c;
  };
  return function(s) {
    for (var c = Ui(s), o = i(c), f = c.length, l = qr(16), u = 0; u != 16; ++u) l[u] = 0;
    var h, d, p;
    for ((f & 1) === 1 && (h = o >> 8, l[f] = t(e[0], h), --f, h = o & 255, d = c[c.length - 1], l[f] = t(d, h)); f > 0; )
      --f, h = o >> 8, l[f] = t(c[f], h), --f, h = o & 255, l[f] = t(c[f], h);
    for (f = 15, p = 15 - c.length; p > 0; )
      h = o >> 8, l[f] = t(e[p], h), --f, --p, h = o & 255, l[f] = t(c[f], h), --f, --p;
    return l;
  };
})(), Sl = function(e, a, r, n, t) {
  t || (t = a), n || (n = Vi(e));
  var i, s;
  for (i = 0; i != a.length; ++i)
    s = a[i], s ^= n[r], s = (s >> 5 | s << 3) & 255, t[i] = s, ++r;
  return [t, r, n];
}, Cl = function(e) {
  var a = 0, r = Vi(e);
  return function(n) {
    var t = Sl("", n, a, r);
    return a = t[1], t[0];
  };
};
function yl(e, a, r, n) {
  var t = { key: ze(e), verificationBytes: ze(e) };
  return r.password && (t.verifier = Fl(r.password)), n.valid = t.verificationBytes === t.verifier, n.valid && (n.insitu = Cl(r.password)), t;
}
function Ol(e, a, r) {
  var n = r || {};
  return n.Info = e.read_shift(2), e.l -= 2, n.Info === 1 ? n.Data = Al(e) : n.Data = wl(e, a), n;
}
function Dl(e, a, r) {
  var n = { Type: r.biff >= 8 ? e.read_shift(2) : 0 };
  return n.Type ? Ol(e, a - 2, n) : yl(e, r.biff >= 8 ? a : a - 2, r, n), n;
}
var Rl = /* @__PURE__ */ (function() {
  function e(t, i) {
    switch (i.type) {
      case "base64":
        return a(Tr(t), i);
      case "binary":
        return a(t, i);
      case "buffer":
        return a(Ae && Buffer.isBuffer(t) ? t.toString("binary") : oa(t), i);
      case "array":
        return a(sa(t), i);
    }
    throw new Error("Unrecognized type " + i.type);
  }
  function a(t, i) {
    var s = i || {}, c = s.dense ? [] : {}, o = t.match(/\\trowd.*?\\row\b/g);
    if (!o.length) throw new Error("RTF missing table");
    var f = { s: { c: 0, r: 0 }, e: { c: 0, r: o.length - 1 } };
    return o.forEach(function(l, u) {
      Array.isArray(c) && (c[u] = []);
      for (var h = /\\\w+\b/g, d = 0, p, x = -1; p = h.exec(l); ) {
        switch (p[0]) {
          case "\\cell":
            var g = l.slice(d, h.lastIndex - p[0].length);
            if (g[0] == " " && (g = g.slice(1)), ++x, g.length) {
              var O = { v: g, t: "s" };
              Array.isArray(c) ? c[u][x] = O : c[me({ r: u, c: x })] = O;
            }
            break;
        }
        d = h.lastIndex;
      }
      x > f.e.c && (f.e.c = x);
    }), c["!ref"] = Se(f), c;
  }
  function r(t, i) {
    return Qr(e(t, i), i);
  }
  function n(t) {
    for (var i = ["{\\rtf1\\ansi"], s = Ue(t["!ref"]), c, o = Array.isArray(t), f = s.s.r; f <= s.e.r; ++f) {
      i.push("\\trowd\\trautofit1");
      for (var l = s.s.c; l <= s.e.c; ++l) i.push("\\cellx" + (l + 1));
      for (i.push("\\pard\\intbl"), l = s.s.c; l <= s.e.c; ++l) {
        var u = me({ r: f, c: l });
        c = o ? (t[f] || [])[l] : t[u], !(!c || c.v == null && (!c.f || c.F)) && (i.push(" " + (c.w || (Gr(c), c.w))), i.push("\\cell"));
      }
      i.push("\\pard\\intbl\\row");
    }
    return i.join("") + "}";
  }
  return {
    to_workbook: r,
    to_sheet: e,
    from_sheet: n
  };
})();
function Il(e) {
  var a = e.slice(e[0] === "#" ? 1 : 0).slice(0, 6);
  return [parseInt(a.slice(0, 2), 16), parseInt(a.slice(2, 4), 16), parseInt(a.slice(4, 6), 16)];
}
function ja(e) {
  for (var a = 0, r = 1; a != 3; ++a) r = r * 256 + (e[a] > 255 ? 255 : e[a] < 0 ? 0 : e[a]);
  return r.toString(16).toUpperCase().slice(1);
}
function Nl(e) {
  var a = e[0] / 255, r = e[1] / 255, n = e[2] / 255, t = Math.max(a, r, n), i = Math.min(a, r, n), s = t - i;
  if (s === 0) return [0, 0, a];
  var c = 0, o = 0, f = t + i;
  switch (o = s / (f > 1 ? 2 - f : f), t) {
    case a:
      c = ((r - n) / s + 6) % 6;
      break;
    case r:
      c = (n - a) / s + 2;
      break;
    case n:
      c = (a - r) / s + 4;
      break;
  }
  return [c / 6, o, f / 2];
}
function Pl(e) {
  var a = e[0], r = e[1], n = e[2], t = r * 2 * (n < 0.5 ? n : 1 - n), i = n - t / 2, s = [i, i, i], c = 6 * a, o;
  if (r !== 0) switch (c | 0) {
    case 0:
    case 6:
      o = t * c, s[0] += t, s[1] += o;
      break;
    case 1:
      o = t * (2 - c), s[0] += o, s[1] += t;
      break;
    case 2:
      o = t * (c - 2), s[1] += t, s[2] += o;
      break;
    case 3:
      o = t * (4 - c), s[1] += o, s[2] += t;
      break;
    case 4:
      o = t * (c - 4), s[2] += t, s[0] += o;
      break;
    case 5:
      o = t * (6 - c), s[2] += o, s[0] += t;
      break;
  }
  for (var f = 0; f != 3; ++f) s[f] = Math.round(s[f] * 255);
  return s;
}
function wt(e, a) {
  if (a === 0) return e;
  var r = Nl(Il(e));
  return a < 0 ? r[2] = r[2] * (1 + a) : r[2] = 1 - (1 - r[2]) * (1 - a), ja(Pl(r));
}
var Gi = 6, Ll = 15, bl = 1, hr = Gi;
function At(e) {
  return Math.floor((e + Math.round(128 / hr) / 256) * hr);
}
function Ft(e) {
  return Math.floor((e - 5) / hr * 100 + 0.5) / 100;
}
function Kt(e) {
  return Math.round((e * hr + 5) / hr * 256) / 256;
}
function Mt(e) {
  return Kt(Ft(At(e)));
}
function m0(e) {
  var a = Math.abs(e - Mt(e)), r = hr;
  if (a > 5e-3) for (hr = bl; hr < Ll; ++hr) Math.abs(e - Mt(e)) <= a && (a = Math.abs(e - Mt(e)), r = hr);
  hr = r;
}
function wa(e) {
  e.width ? (e.wpx = At(e.width), e.wch = Ft(e.wpx), e.MDW = hr) : e.wpx ? (e.wch = Ft(e.wpx), e.width = Kt(e.wch), e.MDW = hr) : typeof e.wch == "number" && (e.width = Kt(e.wch), e.wpx = At(e.width), e.MDW = hr), e.customWidth && delete e.customWidth;
}
var Ml = 96, Xi = Ml;
function zi(e) {
  return e * 96 / Xi;
}
function Ja(e) {
  return e * Xi / 96;
}
var Bl = {
  None: "none",
  Solid: "solid",
  Gray50: "mediumGray",
  Gray75: "darkGray",
  Gray25: "lightGray",
  HorzStripe: "darkHorizontal",
  VertStripe: "darkVertical",
  ReverseDiagStripe: "darkDown",
  DiagStripe: "darkUp",
  DiagCross: "darkGrid",
  ThickDiagCross: "darkTrellis",
  ThinHorzStripe: "lightHorizontal",
  ThinVertStripe: "lightVertical",
  ThinReverseDiagStripe: "lightDown",
  ThinHorzCross: "lightGrid"
};
function Ul(e, a, r, n) {
  a.Borders = [];
  var t = {}, i = !1;
  (e[0].match(lr) || []).forEach(function(s) {
    var c = ge(s);
    switch (Mr(c[0])) {
      case "<borders":
      case "<borders>":
      case "</borders>":
        break;
      /* 18.8.4 border CT_Border */
      case "<border":
      case "<border>":
      case "<border/>":
        t = /*::(*/
        {}, c.diagonalUp && (t.diagonalUp = Pe(c.diagonalUp)), c.diagonalDown && (t.diagonalDown = Pe(c.diagonalDown)), a.Borders.push(t);
        break;
      case "</border>":
        break;
      /* note: not in spec, appears to be CT_BorderPr */
      case "<left/>":
        break;
      case "<left":
      case "<left>":
        break;
      case "</left>":
        break;
      /* note: not in spec, appears to be CT_BorderPr */
      case "<right/>":
        break;
      case "<right":
      case "<right>":
        break;
      case "</right>":
        break;
      /* 18.8.43 top CT_BorderPr */
      case "<top/>":
        break;
      case "<top":
      case "<top>":
        break;
      case "</top>":
        break;
      /* 18.8.6 bottom CT_BorderPr */
      case "<bottom/>":
        break;
      case "<bottom":
      case "<bottom>":
        break;
      case "</bottom>":
        break;
      /* 18.8.13 diagonal CT_BorderPr */
      case "<diagonal":
      case "<diagonal>":
      case "<diagonal/>":
        break;
      case "</diagonal>":
        break;
      /* 18.8.25 horizontal CT_BorderPr */
      case "<horizontal":
      case "<horizontal>":
      case "<horizontal/>":
        break;
      case "</horizontal>":
        break;
      /* 18.8.44 vertical CT_BorderPr */
      case "<vertical":
      case "<vertical>":
      case "<vertical/>":
        break;
      case "</vertical>":
        break;
      /* 18.8.37 start CT_BorderPr */
      case "<start":
      case "<start>":
      case "<start/>":
        break;
      case "</start>":
        break;
      /* 18.8.16 end CT_BorderPr */
      case "<end":
      case "<end>":
      case "<end/>":
        break;
      case "</end>":
        break;
      /* 18.8.? color CT_Color */
      case "<color":
      case "<color>":
        break;
      case "<color/>":
      case "</color>":
        break;
      /* 18.2.10 extLst CT_ExtensionList ? */
      case "<extLst":
      case "<extLst>":
      case "</extLst>":
        break;
      case "<ext":
        i = !0;
        break;
      case "</ext>":
        i = !1;
        break;
      default:
        if (n && n.WTF && !i)
          throw new Error("unrecognized " + c[0] + " in borders");
    }
  });
}
function Hl(e, a, r, n) {
  a.Fills = [];
  var t = {}, i = !1;
  (e[0].match(lr) || []).forEach(function(s) {
    var c = ge(s);
    switch (Mr(c[0])) {
      case "<fills":
      case "<fills>":
      case "</fills>":
        break;
      /* 18.8.20 fill CT_Fill */
      case "<fill>":
      case "<fill":
      case "<fill/>":
        t = {}, a.Fills.push(t);
        break;
      case "</fill>":
        break;
      /* 18.8.24 gradientFill CT_GradientFill */
      case "<gradientFill>":
        break;
      case "<gradientFill":
      case "</gradientFill>":
        a.Fills.push(t), t = {};
        break;
      /* 18.8.32 patternFill CT_PatternFill */
      case "<patternFill":
      case "<patternFill>":
        c.patternType && (t.patternType = c.patternType);
        break;
      case "<patternFill/>":
      case "</patternFill>":
        break;
      /* 18.8.3 bgColor CT_Color */
      case "<bgColor":
        t.bgColor || (t.bgColor = {}), c.indexed && (t.bgColor.indexed = parseInt(c.indexed, 10)), c.theme && (t.bgColor.theme = parseInt(c.theme, 10)), c.tint && (t.bgColor.tint = parseFloat(c.tint)), c.rgb && (t.bgColor.rgb = c.rgb.slice(-6));
        break;
      case "<bgColor/>":
      case "</bgColor>":
        break;
      /* 18.8.19 fgColor CT_Color */
      case "<fgColor":
        t.fgColor || (t.fgColor = {}), c.theme && (t.fgColor.theme = parseInt(c.theme, 10)), c.tint && (t.fgColor.tint = parseFloat(c.tint)), c.rgb != null && (t.fgColor.rgb = c.rgb.slice(-6));
        break;
      case "<fgColor/>":
      case "</fgColor>":
        break;
      /* 18.8.38 stop CT_GradientStop */
      case "<stop":
      case "<stop/>":
        break;
      case "</stop>":
        break;
      /* 18.8.? color CT_Color */
      case "<color":
      case "<color/>":
        break;
      case "</color>":
        break;
      /* 18.2.10 extLst CT_ExtensionList ? */
      case "<extLst":
      case "<extLst>":
      case "</extLst>":
        break;
      case "<ext":
        i = !0;
        break;
      case "</ext>":
        i = !1;
        break;
      default:
        if (n && n.WTF && !i)
          throw new Error("unrecognized " + c[0] + " in fills");
    }
  });
}
function Wl(e, a, r, n) {
  a.Fonts = [];
  var t = {}, i = !1;
  (e[0].match(lr) || []).forEach(function(s) {
    var c = ge(s);
    switch (Mr(c[0])) {
      case "<fonts":
      case "<fonts>":
      case "</fonts>":
        break;
      /* 18.8.22 font CT_Font */
      case "<font":
      case "<font>":
        break;
      case "</font>":
      case "<font/>":
        a.Fonts.push(t), t = {};
        break;
      /* 18.8.29 name CT_FontName */
      case "<name":
        c.val && (t.name = Re(c.val));
        break;
      case "<name/>":
      case "</name>":
        break;
      /* 18.8.2  b CT_BooleanProperty */
      case "<b":
        t.bold = c.val ? Pe(c.val) : 1;
        break;
      case "<b/>":
        t.bold = 1;
        break;
      /* 18.8.26 i CT_BooleanProperty */
      case "<i":
        t.italic = c.val ? Pe(c.val) : 1;
        break;
      case "<i/>":
        t.italic = 1;
        break;
      /* 18.4.13 u CT_UnderlineProperty */
      case "<u":
        switch (c.val) {
          case "none":
            t.underline = 0;
            break;
          case "single":
            t.underline = 1;
            break;
          case "double":
            t.underline = 2;
            break;
          case "singleAccounting":
            t.underline = 33;
            break;
          case "doubleAccounting":
            t.underline = 34;
            break;
        }
        break;
      case "<u/>":
        t.underline = 1;
        break;
      /* 18.4.10 strike CT_BooleanProperty */
      case "<strike":
        t.strike = c.val ? Pe(c.val) : 1;
        break;
      case "<strike/>":
        t.strike = 1;
        break;
      /* 18.4.2  outline CT_BooleanProperty */
      case "<outline":
        t.outline = c.val ? Pe(c.val) : 1;
        break;
      case "<outline/>":
        t.outline = 1;
        break;
      /* 18.8.36 shadow CT_BooleanProperty */
      case "<shadow":
        t.shadow = c.val ? Pe(c.val) : 1;
        break;
      case "<shadow/>":
        t.shadow = 1;
        break;
      /* 18.8.12 condense CT_BooleanProperty */
      case "<condense":
        t.condense = c.val ? Pe(c.val) : 1;
        break;
      case "<condense/>":
        t.condense = 1;
        break;
      /* 18.8.17 extend CT_BooleanProperty */
      case "<extend":
        t.extend = c.val ? Pe(c.val) : 1;
        break;
      case "<extend/>":
        t.extend = 1;
        break;
      /* 18.4.11 sz CT_FontSize */
      case "<sz":
        c.val && (t.sz = +c.val);
        break;
      case "<sz/>":
      case "</sz>":
        break;
      /* 18.4.14 vertAlign CT_VerticalAlignFontProperty */
      case "<vertAlign":
        c.val && (t.vertAlign = c.val);
        break;
      case "<vertAlign/>":
      case "</vertAlign>":
        break;
      /* 18.8.18 family CT_FontFamily */
      case "<family":
        c.val && (t.family = parseInt(c.val, 10));
        break;
      case "<family/>":
      case "</family>":
        break;
      /* 18.8.35 scheme CT_FontScheme */
      case "<scheme":
        c.val && (t.scheme = c.val);
        break;
      case "<scheme/>":
      case "</scheme>":
        break;
      /* 18.4.1 charset CT_IntProperty */
      case "<charset":
        if (c.val == "1") break;
        c.codepage = e0[parseInt(c.val, 10)];
        break;
      /* 18.?.? color CT_Color */
      case "<color":
        if (t.color || (t.color = {}), c.auto && (t.color.auto = Pe(c.auto)), c.rgb) t.color.rgb = c.rgb.slice(-6);
        else if (c.indexed) {
          t.color.index = parseInt(c.indexed, 10);
          var o = na[t.color.index];
          t.color.index == 81 && (o = na[1]), o || (o = na[1]), t.color.rgb = o[0].toString(16) + o[1].toString(16) + o[2].toString(16);
        } else c.theme && (t.color.theme = parseInt(c.theme, 10), c.tint && (t.color.tint = parseFloat(c.tint)), c.theme && r.themeElements && r.themeElements.clrScheme && (t.color.rgb = wt(r.themeElements.clrScheme[t.color.theme].rgb, t.color.tint || 0)));
        break;
      case "<color/>":
      case "</color>":
        break;
      /* note: sometimes mc:AlternateContent appears bare */
      case "<AlternateContent":
        i = !0;
        break;
      case "</AlternateContent>":
        i = !1;
        break;
      /* 18.2.10 extLst CT_ExtensionList ? */
      case "<extLst":
      case "<extLst>":
      case "</extLst>":
        break;
      case "<ext":
        i = !0;
        break;
      case "</ext>":
        i = !1;
        break;
      default:
        if (n && n.WTF && !i)
          throw new Error("unrecognized " + c[0] + " in fonts");
    }
  });
}
function Vl(e, a, r) {
  a.NumberFmt = [];
  for (var n = br(Ee), t = 0; t < n.length; ++t) a.NumberFmt[n[t]] = Ee[n[t]];
  var i = e[0].match(lr);
  if (i)
    for (t = 0; t < i.length; ++t) {
      var s = ge(i[t]);
      switch (Mr(s[0])) {
        case "<numFmts":
        case "</numFmts>":
        case "<numFmts/>":
        case "<numFmts>":
          break;
        case "<numFmt":
          {
            var c = Ce(Re(s.formatCode)), o = parseInt(s.numFmtId, 10);
            if (a.NumberFmt[o] = c, o > 0) {
              if (o > 392) {
                for (o = 392; o > 60 && a.NumberFmt[o] != null; --o) ;
                a.NumberFmt[o] = c;
              }
              ta(c, o);
            }
          }
          break;
        case "</numFmt>":
          break;
        default:
          if (r.WTF) throw new Error("unrecognized " + s[0] + " in numFmts");
      }
    }
}
var ht = ["numFmtId", "fillId", "fontId", "borderId", "xfId"], xt = ["applyAlignment", "applyBorder", "applyFill", "applyFont", "applyNumberFormat", "applyProtection", "pivotButton", "quotePrefix"];
function Gl(e, a, r) {
  a.CellXf = [];
  var n, t = !1;
  (e[0].match(lr) || []).forEach(function(i) {
    var s = ge(i), c = 0;
    switch (Mr(s[0])) {
      case "<cellXfs":
      case "<cellXfs>":
      case "<cellXfs/>":
      case "</cellXfs>":
        break;
      /* 18.8.45 xf CT_Xf */
      case "<xf":
      case "<xf/>":
        for (n = s, delete n[0], c = 0; c < ht.length; ++c) n[ht[c]] && (n[ht[c]] = parseInt(n[ht[c]], 10));
        for (c = 0; c < xt.length; ++c) n[xt[c]] && (n[xt[c]] = Pe(n[xt[c]]));
        if (a.NumberFmt && n.numFmtId > 392) {
          for (c = 392; c > 60; --c) if (a.NumberFmt[n.numFmtId] == a.NumberFmt[c]) {
            n.numFmtId = c;
            break;
          }
        }
        a.CellXf.push(n);
        break;
      case "</xf>":
        break;
      /* 18.8.1 alignment CT_CellAlignment */
      case "<alignment":
      case "<alignment/>":
        var o = {};
        s.vertical && (o.vertical = s.vertical), s.horizontal && (o.horizontal = s.horizontal), s.textRotation != null && (o.textRotation = s.textRotation), s.indent && (o.indent = s.indent), s.wrapText && (o.wrapText = Pe(s.wrapText)), n.alignment = o;
        break;
      case "</alignment>":
        break;
      /* 18.8.33 protection CT_CellProtection */
      case "<protection":
        break;
      case "</protection>":
      case "<protection/>":
        break;
      /* note: sometimes mc:AlternateContent appears bare */
      case "<AlternateContent":
        t = !0;
        break;
      case "</AlternateContent>":
        t = !1;
        break;
      /* 18.2.10 extLst CT_ExtensionList ? */
      case "<extLst":
      case "<extLst>":
      case "</extLst>":
        break;
      case "<ext":
        t = !0;
        break;
      case "</ext>":
        t = !1;
        break;
      default:
        if (r && r.WTF && !t)
          throw new Error("unrecognized " + s[0] + " in cellXfs");
    }
  });
}
var Xl = /* @__PURE__ */ (function() {
  var a = /<(?:\w+:)?numFmts([^>]*)>[\S\s]*?<\/(?:\w+:)?numFmts>/, r = /<(?:\w+:)?cellXfs([^>]*)>[\S\s]*?<\/(?:\w+:)?cellXfs>/, n = /<(?:\w+:)?fills([^>]*)>[\S\s]*?<\/(?:\w+:)?fills>/, t = /<(?:\w+:)?fonts([^>]*)>[\S\s]*?<\/(?:\w+:)?fonts>/, i = /<(?:\w+:)?borders([^>]*)>[\S\s]*?<\/(?:\w+:)?borders>/;
  return function(c, o, f) {
    var l = {};
    if (!c) return l;
    c = c.replace(/<!--([\s\S]*?)-->/mg, "").replace(/<!DOCTYPE[^\[]*\[[^\]]*\]>/gm, "");
    var u;
    return (u = c.match(a)) && Vl(u, l, f), (u = c.match(t)) && Wl(u, l, o, f), (u = c.match(n)) && Hl(u, l, o, f), (u = c.match(i)) && Ul(u, l, o, f), (u = c.match(r)) && Gl(u, l, f), l;
  };
})();
function zl(e, a) {
  var r = e.read_shift(2), n = fr(e);
  return [r, n];
}
function $l(e, a, r) {
  var n = {};
  n.sz = e.read_shift(2) / 20;
  var t = ef(e);
  t.fItalic && (n.italic = 1), t.fCondense && (n.condense = 1), t.fExtend && (n.extend = 1), t.fShadow && (n.shadow = 1), t.fOutline && (n.outline = 1), t.fStrikeout && (n.strike = 1);
  var i = e.read_shift(2);
  switch (i === 700 && (n.bold = 1), e.read_shift(2)) {
    /* case 0: out.vertAlign = "baseline"; break; */
    case 1:
      n.vertAlign = "superscript";
      break;
    case 2:
      n.vertAlign = "subscript";
      break;
  }
  var s = e.read_shift(1);
  s != 0 && (n.underline = s);
  var c = e.read_shift(1);
  c > 0 && (n.family = c);
  var o = e.read_shift(1);
  switch (o > 0 && (n.charset = o), e.l++, n.color = Qc(e), e.read_shift(1)) {
    /* case 0: out.scheme = "none": break; */
    case 1:
      n.scheme = "major";
      break;
    case 2:
      n.scheme = "minor";
      break;
  }
  return n.name = fr(e), n;
}
var Kl = or;
function Yl(e, a) {
  var r = e.l + a, n = e.read_shift(2), t = e.read_shift(2);
  return e.l = r, { ixfe: n, numFmtId: t };
}
var jl = or;
function Jl(e, a, r) {
  var n = {};
  n.NumberFmt = [];
  for (var t in Ee) n.NumberFmt[t] = Ee[t];
  n.CellXf = [], n.Fonts = [];
  var i = [], s = !1;
  return zr(e, function(o, f, l) {
    switch (l) {
      case 44:
        n.NumberFmt[o[0]] = o[1], ta(o[1], o[0]);
        break;
      case 43:
        n.Fonts.push(o), o.color.theme != null && a && a.themeElements && a.themeElements.clrScheme && (o.color.rgb = wt(a.themeElements.clrScheme[o.color.theme].rgb, o.color.tint || 0));
        break;
      case 1025:
        break;
      case 45:
        break;
      case 46:
        break;
      case 47:
        i[i.length - 1] == 617 && n.CellXf.push(o);
        break;
      case 48:
      /* BrtStyle */
      case 507:
      /* BrtDXF */
      case 572:
      /* BrtMRUColor */
      case 475:
        break;
      case 1171:
      /* BrtDXF14 */
      case 2102:
      /* BrtDXF15 */
      case 1130:
      /* BrtSlicerStyleElement */
      case 512:
      /* BrtTableStyleElement */
      case 2095:
      /* BrtTimelineStyleElement */
      case 3072:
        break;
      case 35:
        s = !0;
        break;
      case 36:
        s = !1;
        break;
      case 37:
        i.push(l), s = !0;
        break;
      case 38:
        i.pop(), s = !1;
        break;
      default:
        if (f.T > 0) i.push(l);
        else if (f.T < 0) i.pop();
        else if (!s || r.WTF && i[i.length - 1] != 37) throw new Error("Unexpected record 0x" + l.toString(16));
    }
  }), n;
}
var ql = [
  "</a:lt1>",
  "</a:dk1>",
  "</a:lt2>",
  "</a:dk2>",
  "</a:accent1>",
  "</a:accent2>",
  "</a:accent3>",
  "</a:accent4>",
  "</a:accent5>",
  "</a:accent6>",
  "</a:hlink>",
  "</a:folHlink>"
];
function Zl(e, a, r) {
  a.themeElements.clrScheme = [];
  var n = {};
  (e[0].match(lr) || []).forEach(function(t) {
    var i = ge(t);
    switch (i[0]) {
      /* 20.1.6.2 clrScheme (Color Scheme) CT_ColorScheme */
      case "<a:clrScheme":
      case "</a:clrScheme>":
        break;
      /* 20.1.2.3.32 srgbClr CT_SRgbColor */
      case "<a:srgbClr":
        n.rgb = i.val;
        break;
      /* 20.1.2.3.33 sysClr CT_SystemColor */
      case "<a:sysClr":
        n.rgb = i.lastClr;
        break;
      /* 20.1.4.1.1 accent1 (Accent 1) */
      /* 20.1.4.1.2 accent2 (Accent 2) */
      /* 20.1.4.1.3 accent3 (Accent 3) */
      /* 20.1.4.1.4 accent4 (Accent 4) */
      /* 20.1.4.1.5 accent5 (Accent 5) */
      /* 20.1.4.1.6 accent6 (Accent 6) */
      /* 20.1.4.1.9 dk1 (Dark 1) */
      /* 20.1.4.1.10 dk2 (Dark 2) */
      /* 20.1.4.1.15 folHlink (Followed Hyperlink) */
      /* 20.1.4.1.19 hlink (Hyperlink) */
      /* 20.1.4.1.22 lt1 (Light 1) */
      /* 20.1.4.1.23 lt2 (Light 2) */
      case "<a:dk1>":
      case "</a:dk1>":
      case "<a:lt1>":
      case "</a:lt1>":
      case "<a:dk2>":
      case "</a:dk2>":
      case "<a:lt2>":
      case "</a:lt2>":
      case "<a:accent1>":
      case "</a:accent1>":
      case "<a:accent2>":
      case "</a:accent2>":
      case "<a:accent3>":
      case "</a:accent3>":
      case "<a:accent4>":
      case "</a:accent4>":
      case "<a:accent5>":
      case "</a:accent5>":
      case "<a:accent6>":
      case "</a:accent6>":
      case "<a:hlink>":
      case "</a:hlink>":
      case "<a:folHlink>":
      case "</a:folHlink>":
        i[0].charAt(1) === "/" ? (a.themeElements.clrScheme[ql.indexOf(i[0])] = n, n = {}) : n.name = i[0].slice(3, i[0].length - 1);
        break;
      default:
        if (r && r.WTF) throw new Error("Unrecognized " + i[0] + " in clrScheme");
    }
  });
}
function Ql() {
}
function eu() {
}
var ru = /<a:clrScheme([^>]*)>[\s\S]*<\/a:clrScheme>/, au = /<a:fontScheme([^>]*)>[\s\S]*<\/a:fontScheme>/, tu = /<a:fmtScheme([^>]*)>[\s\S]*<\/a:fmtScheme>/;
function nu(e, a, r) {
  a.themeElements = {};
  var n;
  [
    /* clrScheme CT_ColorScheme */
    ["clrScheme", ru, Zl],
    /* fontScheme CT_FontScheme */
    ["fontScheme", au, Ql],
    /* fmtScheme CT_StyleMatrix */
    ["fmtScheme", tu, eu]
  ].forEach(function(t) {
    if (!(n = e.match(t[1]))) throw new Error(t[0] + " not found in themeElements");
    t[2](n, a, r);
  });
}
var iu = /<a:themeElements([^>]*)>[\s\S]*<\/a:themeElements>/;
function $i(e, a) {
  (!e || e.length === 0) && (e = su());
  var r, n = {};
  if (!(r = e.match(iu))) throw new Error("themeElements not found in theme");
  return nu(r[0], n, a), n.raw = e, n;
}
function su(e, a) {
  var r = [ti];
  return r[r.length] = '<a:theme xmlns:a="http://schemas.openxmlformats.org/drawingml/2006/main" name="Office Theme">', r[r.length] = "<a:themeElements>", r[r.length] = '<a:clrScheme name="Office">', r[r.length] = '<a:dk1><a:sysClr val="windowText" lastClr="000000"/></a:dk1>', r[r.length] = '<a:lt1><a:sysClr val="window" lastClr="FFFFFF"/></a:lt1>', r[r.length] = '<a:dk2><a:srgbClr val="1F497D"/></a:dk2>', r[r.length] = '<a:lt2><a:srgbClr val="EEECE1"/></a:lt2>', r[r.length] = '<a:accent1><a:srgbClr val="4F81BD"/></a:accent1>', r[r.length] = '<a:accent2><a:srgbClr val="C0504D"/></a:accent2>', r[r.length] = '<a:accent3><a:srgbClr val="9BBB59"/></a:accent3>', r[r.length] = '<a:accent4><a:srgbClr val="8064A2"/></a:accent4>', r[r.length] = '<a:accent5><a:srgbClr val="4BACC6"/></a:accent5>', r[r.length] = '<a:accent6><a:srgbClr val="F79646"/></a:accent6>', r[r.length] = '<a:hlink><a:srgbClr val="0000FF"/></a:hlink>', r[r.length] = '<a:folHlink><a:srgbClr val="800080"/></a:folHlink>', r[r.length] = "</a:clrScheme>", r[r.length] = '<a:fontScheme name="Office">', r[r.length] = "<a:majorFont>", r[r.length] = '<a:latin typeface="Cambria"/>', r[r.length] = '<a:ea typeface=""/>', r[r.length] = '<a:cs typeface=""/>', r[r.length] = '<a:font script="Jpan" typeface="ＭＳ Ｐゴシック"/>', r[r.length] = '<a:font script="Hang" typeface="맑은 고딕"/>', r[r.length] = '<a:font script="Hans" typeface="宋体"/>', r[r.length] = '<a:font script="Hant" typeface="新細明體"/>', r[r.length] = '<a:font script="Arab" typeface="Times New Roman"/>', r[r.length] = '<a:font script="Hebr" typeface="Times New Roman"/>', r[r.length] = '<a:font script="Thai" typeface="Tahoma"/>', r[r.length] = '<a:font script="Ethi" typeface="Nyala"/>', r[r.length] = '<a:font script="Beng" typeface="Vrinda"/>', r[r.length] = '<a:font script="Gujr" typeface="Shruti"/>', r[r.length] = '<a:font script="Khmr" typeface="MoolBoran"/>', r[r.length] = '<a:font script="Knda" typeface="Tunga"/>', r[r.length] = '<a:font script="Guru" typeface="Raavi"/>', r[r.length] = '<a:font script="Cans" typeface="Euphemia"/>', r[r.length] = '<a:font script="Cher" typeface="Plantagenet Cherokee"/>', r[r.length] = '<a:font script="Yiii" typeface="Microsoft Yi Baiti"/>', r[r.length] = '<a:font script="Tibt" typeface="Microsoft Himalaya"/>', r[r.length] = '<a:font script="Thaa" typeface="MV Boli"/>', r[r.length] = '<a:font script="Deva" typeface="Mangal"/>', r[r.length] = '<a:font script="Telu" typeface="Gautami"/>', r[r.length] = '<a:font script="Taml" typeface="Latha"/>', r[r.length] = '<a:font script="Syrc" typeface="Estrangelo Edessa"/>', r[r.length] = '<a:font script="Orya" typeface="Kalinga"/>', r[r.length] = '<a:font script="Mlym" typeface="Kartika"/>', r[r.length] = '<a:font script="Laoo" typeface="DokChampa"/>', r[r.length] = '<a:font script="Sinh" typeface="Iskoola Pota"/>', r[r.length] = '<a:font script="Mong" typeface="Mongolian Baiti"/>', r[r.length] = '<a:font script="Viet" typeface="Times New Roman"/>', r[r.length] = '<a:font script="Uigh" typeface="Microsoft Uighur"/>', r[r.length] = '<a:font script="Geor" typeface="Sylfaen"/>', r[r.length] = "</a:majorFont>", r[r.length] = "<a:minorFont>", r[r.length] = '<a:latin typeface="Calibri"/>', r[r.length] = '<a:ea typeface=""/>', r[r.length] = '<a:cs typeface=""/>', r[r.length] = '<a:font script="Jpan" typeface="ＭＳ Ｐゴシック"/>', r[r.length] = '<a:font script="Hang" typeface="맑은 고딕"/>', r[r.length] = '<a:font script="Hans" typeface="宋体"/>', r[r.length] = '<a:font script="Hant" typeface="新細明體"/>', r[r.length] = '<a:font script="Arab" typeface="Arial"/>', r[r.length] = '<a:font script="Hebr" typeface="Arial"/>', r[r.length] = '<a:font script="Thai" typeface="Tahoma"/>', r[r.length] = '<a:font script="Ethi" typeface="Nyala"/>', r[r.length] = '<a:font script="Beng" typeface="Vrinda"/>', r[r.length] = '<a:font script="Gujr" typeface="Shruti"/>', r[r.length] = '<a:font script="Khmr" typeface="DaunPenh"/>', r[r.length] = '<a:font script="Knda" typeface="Tunga"/>', r[r.length] = '<a:font script="Guru" typeface="Raavi"/>', r[r.length] = '<a:font script="Cans" typeface="Euphemia"/>', r[r.length] = '<a:font script="Cher" typeface="Plantagenet Cherokee"/>', r[r.length] = '<a:font script="Yiii" typeface="Microsoft Yi Baiti"/>', r[r.length] = '<a:font script="Tibt" typeface="Microsoft Himalaya"/>', r[r.length] = '<a:font script="Thaa" typeface="MV Boli"/>', r[r.length] = '<a:font script="Deva" typeface="Mangal"/>', r[r.length] = '<a:font script="Telu" typeface="Gautami"/>', r[r.length] = '<a:font script="Taml" typeface="Latha"/>', r[r.length] = '<a:font script="Syrc" typeface="Estrangelo Edessa"/>', r[r.length] = '<a:font script="Orya" typeface="Kalinga"/>', r[r.length] = '<a:font script="Mlym" typeface="Kartika"/>', r[r.length] = '<a:font script="Laoo" typeface="DokChampa"/>', r[r.length] = '<a:font script="Sinh" typeface="Iskoola Pota"/>', r[r.length] = '<a:font script="Mong" typeface="Mongolian Baiti"/>', r[r.length] = '<a:font script="Viet" typeface="Arial"/>', r[r.length] = '<a:font script="Uigh" typeface="Microsoft Uighur"/>', r[r.length] = '<a:font script="Geor" typeface="Sylfaen"/>', r[r.length] = "</a:minorFont>", r[r.length] = "</a:fontScheme>", r[r.length] = '<a:fmtScheme name="Office">', r[r.length] = "<a:fillStyleLst>", r[r.length] = '<a:solidFill><a:schemeClr val="phClr"/></a:solidFill>', r[r.length] = '<a:gradFill rotWithShape="1">', r[r.length] = "<a:gsLst>", r[r.length] = '<a:gs pos="0"><a:schemeClr val="phClr"><a:tint val="50000"/><a:satMod val="300000"/></a:schemeClr></a:gs>', r[r.length] = '<a:gs pos="35000"><a:schemeClr val="phClr"><a:tint val="37000"/><a:satMod val="300000"/></a:schemeClr></a:gs>', r[r.length] = '<a:gs pos="100000"><a:schemeClr val="phClr"><a:tint val="15000"/><a:satMod val="350000"/></a:schemeClr></a:gs>', r[r.length] = "</a:gsLst>", r[r.length] = '<a:lin ang="16200000" scaled="1"/>', r[r.length] = "</a:gradFill>", r[r.length] = '<a:gradFill rotWithShape="1">', r[r.length] = "<a:gsLst>", r[r.length] = '<a:gs pos="0"><a:schemeClr val="phClr"><a:tint val="100000"/><a:shade val="100000"/><a:satMod val="130000"/></a:schemeClr></a:gs>', r[r.length] = '<a:gs pos="100000"><a:schemeClr val="phClr"><a:tint val="50000"/><a:shade val="100000"/><a:satMod val="350000"/></a:schemeClr></a:gs>', r[r.length] = "</a:gsLst>", r[r.length] = '<a:lin ang="16200000" scaled="0"/>', r[r.length] = "</a:gradFill>", r[r.length] = "</a:fillStyleLst>", r[r.length] = "<a:lnStyleLst>", r[r.length] = '<a:ln w="9525" cap="flat" cmpd="sng" algn="ctr"><a:solidFill><a:schemeClr val="phClr"><a:shade val="95000"/><a:satMod val="105000"/></a:schemeClr></a:solidFill><a:prstDash val="solid"/></a:ln>', r[r.length] = '<a:ln w="25400" cap="flat" cmpd="sng" algn="ctr"><a:solidFill><a:schemeClr val="phClr"/></a:solidFill><a:prstDash val="solid"/></a:ln>', r[r.length] = '<a:ln w="38100" cap="flat" cmpd="sng" algn="ctr"><a:solidFill><a:schemeClr val="phClr"/></a:solidFill><a:prstDash val="solid"/></a:ln>', r[r.length] = "</a:lnStyleLst>", r[r.length] = "<a:effectStyleLst>", r[r.length] = "<a:effectStyle>", r[r.length] = "<a:effectLst>", r[r.length] = '<a:outerShdw blurRad="40000" dist="20000" dir="5400000" rotWithShape="0"><a:srgbClr val="000000"><a:alpha val="38000"/></a:srgbClr></a:outerShdw>', r[r.length] = "</a:effectLst>", r[r.length] = "</a:effectStyle>", r[r.length] = "<a:effectStyle>", r[r.length] = "<a:effectLst>", r[r.length] = '<a:outerShdw blurRad="40000" dist="23000" dir="5400000" rotWithShape="0"><a:srgbClr val="000000"><a:alpha val="35000"/></a:srgbClr></a:outerShdw>', r[r.length] = "</a:effectLst>", r[r.length] = "</a:effectStyle>", r[r.length] = "<a:effectStyle>", r[r.length] = "<a:effectLst>", r[r.length] = '<a:outerShdw blurRad="40000" dist="23000" dir="5400000" rotWithShape="0"><a:srgbClr val="000000"><a:alpha val="35000"/></a:srgbClr></a:outerShdw>', r[r.length] = "</a:effectLst>", r[r.length] = '<a:scene3d><a:camera prst="orthographicFront"><a:rot lat="0" lon="0" rev="0"/></a:camera><a:lightRig rig="threePt" dir="t"><a:rot lat="0" lon="0" rev="1200000"/></a:lightRig></a:scene3d>', r[r.length] = '<a:sp3d><a:bevelT w="63500" h="25400"/></a:sp3d>', r[r.length] = "</a:effectStyle>", r[r.length] = "</a:effectStyleLst>", r[r.length] = "<a:bgFillStyleLst>", r[r.length] = '<a:solidFill><a:schemeClr val="phClr"/></a:solidFill>', r[r.length] = '<a:gradFill rotWithShape="1">', r[r.length] = "<a:gsLst>", r[r.length] = '<a:gs pos="0"><a:schemeClr val="phClr"><a:tint val="40000"/><a:satMod val="350000"/></a:schemeClr></a:gs>', r[r.length] = '<a:gs pos="40000"><a:schemeClr val="phClr"><a:tint val="45000"/><a:shade val="99000"/><a:satMod val="350000"/></a:schemeClr></a:gs>', r[r.length] = '<a:gs pos="100000"><a:schemeClr val="phClr"><a:shade val="20000"/><a:satMod val="255000"/></a:schemeClr></a:gs>', r[r.length] = "</a:gsLst>", r[r.length] = '<a:path path="circle"><a:fillToRect l="50000" t="-80000" r="50000" b="180000"/></a:path>', r[r.length] = "</a:gradFill>", r[r.length] = '<a:gradFill rotWithShape="1">', r[r.length] = "<a:gsLst>", r[r.length] = '<a:gs pos="0"><a:schemeClr val="phClr"><a:tint val="80000"/><a:satMod val="300000"/></a:schemeClr></a:gs>', r[r.length] = '<a:gs pos="100000"><a:schemeClr val="phClr"><a:shade val="30000"/><a:satMod val="200000"/></a:schemeClr></a:gs>', r[r.length] = "</a:gsLst>", r[r.length] = '<a:path path="circle"><a:fillToRect l="50000" t="50000" r="50000" b="50000"/></a:path>', r[r.length] = "</a:gradFill>", r[r.length] = "</a:bgFillStyleLst>", r[r.length] = "</a:fmtScheme>", r[r.length] = "</a:themeElements>", r[r.length] = "<a:objectDefaults>", r[r.length] = "<a:spDef>", r[r.length] = '<a:spPr/><a:bodyPr/><a:lstStyle/><a:style><a:lnRef idx="1"><a:schemeClr val="accent1"/></a:lnRef><a:fillRef idx="3"><a:schemeClr val="accent1"/></a:fillRef><a:effectRef idx="2"><a:schemeClr val="accent1"/></a:effectRef><a:fontRef idx="minor"><a:schemeClr val="lt1"/></a:fontRef></a:style>', r[r.length] = "</a:spDef>", r[r.length] = "<a:lnDef>", r[r.length] = '<a:spPr/><a:bodyPr/><a:lstStyle/><a:style><a:lnRef idx="2"><a:schemeClr val="accent1"/></a:lnRef><a:fillRef idx="0"><a:schemeClr val="accent1"/></a:fillRef><a:effectRef idx="1"><a:schemeClr val="accent1"/></a:effectRef><a:fontRef idx="minor"><a:schemeClr val="tx1"/></a:fontRef></a:style>', r[r.length] = "</a:lnDef>", r[r.length] = "</a:objectDefaults>", r[r.length] = "<a:extraClrSchemeLst/>", r[r.length] = "</a:theme>", r.join("");
}
function cu(e, a, r) {
  var n = e.l + a, t = e.read_shift(4);
  if (t !== 124226) {
    if (!r.cellStyles) {
      e.l = n;
      return;
    }
    var i = e.slice(e.l);
    e.l = n;
    var s;
    try {
      s = ai(i, { type: "array" });
    } catch {
      return;
    }
    var c = Er(s, "theme/theme/theme1.xml", !0);
    if (c)
      return $i(c, r);
  }
}
function fu(e) {
  return e.read_shift(4);
}
function ou(e) {
  var a = {};
  switch (a.xclrType = e.read_shift(2), a.nTintShade = e.read_shift(2), a.xclrType) {
    case 0:
      e.l += 4;
      break;
    case 1:
      a.xclrValue = lu(e, 4);
      break;
    case 2:
      a.xclrValue = Ii(e);
      break;
    case 3:
      a.xclrValue = fu(e);
      break;
    case 4:
      e.l += 4;
      break;
  }
  return e.l += 8, a;
}
function lu(e, a) {
  return or(e, a);
}
function uu(e, a) {
  return or(e, a);
}
function hu(e) {
  var a = e.read_shift(2), r = e.read_shift(2) - 4, n = [a];
  switch (a) {
    case 4:
    case 5:
    case 7:
    case 8:
    case 9:
    case 10:
    case 11:
    case 13:
      n[1] = ou(e);
      break;
    case 6:
      n[1] = uu(e, r);
      break;
    case 14:
    case 15:
      n[1] = e.read_shift(r === 1 ? 1 : 2);
      break;
    default:
      throw new Error("Unrecognized ExtProp type: " + a + " " + r);
  }
  return n;
}
function xu(e, a) {
  var r = e.l + a;
  e.l += 2;
  var n = e.read_shift(2);
  e.l += 2;
  for (var t = e.read_shift(2), i = []; t-- > 0; ) i.push(hu(e, r - e.l));
  return { ixfe: n, ext: i };
}
function du(e, a) {
  a.forEach(function(r) {
    r[0];
  });
}
function pu(e, a) {
  return {
    flags: e.read_shift(4),
    version: e.read_shift(4),
    name: fr(e)
  };
}
function vu(e) {
  for (var a = [], r = e.read_shift(4); r-- > 0; )
    a.push([e.read_shift(4), e.read_shift(4)]);
  return a;
}
function gu(e) {
  return e.l += 4, e.read_shift(4) != 0;
}
function mu(e, a, r) {
  var n = { Types: [], Cell: [], Value: [] }, t = r || {}, i = [], s = !1, c = 2;
  return zr(e, function(o, f, l) {
    switch (l) {
      case 335:
        n.Types.push({ name: o.name });
        break;
      case 51:
        o.forEach(function(u) {
          c == 1 ? n.Cell.push({ type: n.Types[u[0] - 1].name, index: u[1] }) : c == 0 && n.Value.push({ type: n.Types[u[0] - 1].name, index: u[1] });
        });
        break;
      case 337:
        c = o ? 1 : 0;
        break;
      case 338:
        c = 2;
        break;
      case 35:
        i.push(l), s = !0;
        break;
      case 36:
        i.pop(), s = !1;
        break;
      default:
        if (!f.T) {
          if (!s || t.WTF && i[i.length - 1] != 35)
            throw new Error("Unexpected record 0x" + l.toString(16));
        }
    }
  }), n;
}
function _u(e, a, r) {
  var n = { Types: [], Cell: [], Value: [] };
  if (!e)
    return n;
  var t = !1, i = 2, s;
  return e.replace(lr, function(c) {
    var o = ge(c);
    switch (Mr(o[0])) {
      case "<?xml":
        break;
      case "<metadata":
      case "</metadata>":
        break;
      case "<metadataTypes":
      case "</metadataTypes>":
        break;
      case "<metadataType":
        n.Types.push({ name: o.name });
        break;
      case "</metadataType>":
        break;
      case "<futureMetadata":
        for (var f = 0; f < n.Types.length; ++f)
          n.Types[f].name == o.name && (s = n.Types[f]);
        break;
      case "</futureMetadata>":
        break;
      case "<bk>":
        break;
      case "</bk>":
        break;
      case "<rc":
        i == 1 ? n.Cell.push({ type: n.Types[o.t - 1].name, index: +o.v }) : i == 0 && n.Value.push({ type: n.Types[o.t - 1].name, index: +o.v });
        break;
      case "</rc>":
        break;
      case "<cellMetadata":
        i = 1;
        break;
      case "</cellMetadata>":
        i = 2;
        break;
      case "<valueMetadata":
        i = 0;
        break;
      case "</valueMetadata>":
        i = 2;
        break;
      case "<extLst":
      case "<extLst>":
      case "</extLst>":
      case "<extLst/>":
        break;
      case "<ext":
        t = !0;
        break;
      case "</ext>":
        t = !1;
        break;
      case "<rvb":
        if (!s)
          break;
        s.offsets || (s.offsets = []), s.offsets.push(+o.i);
        break;
      default:
        if (!t && r.WTF)
          throw new Error("unrecognized " + o[0] + " in metadata");
    }
    return c;
  }), n;
}
function Eu(e) {
  var a = [];
  if (!e) return a;
  var r = 1;
  return (e.match(lr) || []).forEach(function(n) {
    var t = ge(n);
    switch (t[0]) {
      case "<?xml":
        break;
      /* 18.6.2  calcChain CT_CalcChain 1 */
      case "<calcChain":
      case "<calcChain>":
      case "</calcChain>":
        break;
      /* 18.6.1  c CT_CalcCell 1 */
      case "<c":
        delete t[0], t.i ? r = t.i : t.i = r, a.push(t);
        break;
    }
  }), a;
}
function Tu(e) {
  var a = {};
  a.i = e.read_shift(4);
  var r = {};
  r.r = e.read_shift(4), r.c = e.read_shift(4), a.r = me(r);
  var n = e.read_shift(1);
  return n & 2 && (a.l = "1"), n & 8 && (a.a = "1"), a;
}
function ku(e, a, r) {
  var n = [];
  return zr(e, function(i, s, c) {
    switch (c) {
      case 63:
        n.push(i);
        break;
      default:
        if (!s.T) throw new Error("Unexpected record 0x" + c.toString(16));
    }
  }), n;
}
function wu(e, a, r, n) {
  if (!e) return e;
  var t = n || {}, i = !1;
  zr(e, function(c, o, f) {
    switch (f) {
      case 359:
      /* 'BrtSupTabs' */
      case 363:
      /* 'BrtExternTableStart' */
      case 364:
      /* 'BrtExternTableEnd' */
      case 366:
      /* 'BrtExternRowHdr' */
      case 367:
      /* 'BrtExternCellBlank' */
      case 368:
      /* 'BrtExternCellReal' */
      case 369:
      /* 'BrtExternCellBool' */
      case 370:
      /* 'BrtExternCellError' */
      case 371:
      /* 'BrtExternCellString' */
      case 472:
      /* 'BrtExternValueMeta' */
      case 577:
      /* 'BrtSupNameStart' */
      case 578:
      /* 'BrtSupNameValueStart' */
      case 579:
      /* 'BrtSupNameValueEnd' */
      case 580:
      /* 'BrtSupNameNum' */
      case 581:
      /* 'BrtSupNameErr' */
      case 582:
      /* 'BrtSupNameSt' */
      case 583:
      /* 'BrtSupNameNil' */
      case 584:
      /* 'BrtSupNameBool' */
      case 585:
      /* 'BrtSupNameFmla' */
      case 586:
      /* 'BrtSupNameBits' */
      case 587:
        break;
      case 35:
        i = !0;
        break;
      case 36:
        i = !1;
        break;
      default:
        if (!o.T) {
          if (!i || t.WTF) throw new Error("Unexpected record 0x" + f.toString(16));
        }
    }
  }, t);
}
function Au(e, a) {
  if (!e) return "??";
  var r = (e.match(/<c:chart [^>]*r:id="([^"]*)"/) || ["", ""])[1];
  return a["!id"][r].Target;
}
function mn(e, a, r, n) {
  var t = Array.isArray(e), i;
  a.forEach(function(s) {
    var c = xr(s.ref);
    if (t ? (e[c.r] || (e[c.r] = []), i = e[c.r][c.c]) : i = e[s.ref], !i) {
      i = { t: "z" }, t ? e[c.r][c.c] = i : e[s.ref] = i;
      var o = Ue(e["!ref"] || "BDWGO1000001:A1");
      o.s.r > c.r && (o.s.r = c.r), o.e.r < c.r && (o.e.r = c.r), o.s.c > c.c && (o.s.c = c.c), o.e.c < c.c && (o.e.c = c.c);
      var f = Se(o);
      f !== e["!ref"] && (e["!ref"] = f);
    }
    i.c || (i.c = []);
    var l = { a: s.author, t: s.t, r: s.r, T: r };
    s.h && (l.h = s.h);
    for (var u = i.c.length - 1; u >= 0; --u) {
      if (!r && i.c[u].T) return;
      r && !i.c[u].T && i.c.splice(u, 1);
    }
    if (r && n) {
      for (u = 0; u < n.length; ++u)
        if (l.a == n[u].id) {
          l.a = n[u].name || l.a;
          break;
        }
    }
    i.c.push(l);
  });
}
function Fu(e, a) {
  if (e.match(/<(?:\w+:)?comments *\/>/)) return [];
  var r = [], n = [], t = e.match(/<(?:\w+:)?authors>([\s\S]*)<\/(?:\w+:)?authors>/);
  t && t[1] && t[1].split(/<\/\w*:?author>/).forEach(function(s) {
    if (!(s === "" || s.trim() === "")) {
      var c = s.match(/<(?:\w+:)?author[^>]*>(.*)/);
      c && r.push(c[1]);
    }
  });
  var i = e.match(/<(?:\w+:)?commentList>([\s\S]*)<\/(?:\w+:)?commentList>/);
  return i && i[1] && i[1].split(/<\/\w*:?comment>/).forEach(function(s) {
    if (!(s === "" || s.trim() === "")) {
      var c = s.match(/<(?:\w+:)?comment[^>]*>/);
      if (c) {
        var o = ge(c[0]), f = { author: o.authorId && r[o.authorId] || "sheetjsghost", ref: o.ref, guid: o.guid }, l = xr(o.ref);
        if (!(a.sheetRows && a.sheetRows <= l.r)) {
          var u = s.match(/<(?:\w+:)?text>([\s\S]*)<\/(?:\w+:)?text>/), h = !!u && !!u[1] && g0(u[1]) || { r: "", t: "", h: "" };
          f.r = h.r, h.r == "<t></t>" && (h.t = h.h = ""), f.t = (h.t || "").replace(/\r\n/g, `
`).replace(/\r/g, `
`), a.cellHTML && (f.h = h.h), n.push(f);
        }
      }
    }
  }), n;
}
function Su(e, a) {
  var r = [], n = !1, t = {}, i = 0;
  return e.replace(lr, function(c, o) {
    var f = ge(c);
    switch (Mr(f[0])) {
      case "<?xml":
        break;
      /* 2.6.207 ThreadedComments CT_ThreadedComments */
      case "<ThreadedComments":
        break;
      case "</ThreadedComments>":
        break;
      /* 2.6.205 threadedComment CT_ThreadedComment */
      case "<threadedComment":
        t = { author: f.personId, guid: f.id, ref: f.ref, T: 1 };
        break;
      case "</threadedComment>":
        t.t != null && r.push(t);
        break;
      case "<text>":
      case "<text":
        i = o + c.length;
        break;
      case "</text>":
        t.t = e.slice(i, o).replace(/\r\n/g, `
`).replace(/\r/g, `
`);
        break;
      /* 2.6.206 mentions CT_ThreadedCommentMentions TODO */
      case "<mentions":
      case "<mentions>":
        n = !0;
        break;
      case "</mentions>":
        n = !1;
        break;
      /* 2.6.202 mention CT_Mention TODO */
      /* 18.2.10 extLst CT_ExtensionList ? */
      case "<extLst":
      case "<extLst>":
      case "</extLst>":
      case "<extLst/>":
        break;
      /* 18.2.7  ext CT_Extension + */
      case "<ext":
        n = !0;
        break;
      case "</ext>":
        n = !1;
        break;
      default:
        if (!n && a.WTF) throw new Error("unrecognized " + f[0] + " in threaded comments");
    }
    return c;
  }), r;
}
function Cu(e, a) {
  var r = [], n = !1;
  return e.replace(lr, function(i) {
    var s = ge(i);
    switch (Mr(s[0])) {
      case "<?xml":
        break;
      /* 2.4.85 personList CT_PersonList */
      case "<personList":
        break;
      case "</personList>":
        break;
      /* 2.6.203 person CT_Person TODO: providers */
      case "<person":
        r.push({ name: s.displayname, id: s.id });
        break;
      case "</person>":
        break;
      /* 18.2.10 extLst CT_ExtensionList ? */
      case "<extLst":
      case "<extLst>":
      case "</extLst>":
      case "<extLst/>":
        break;
      /* 18.2.7  ext CT_Extension + */
      case "<ext":
        n = !0;
        break;
      case "</ext>":
        n = !1;
        break;
      default:
        if (!n && a.WTF) throw new Error("unrecognized " + s[0] + " in threaded comments");
    }
    return i;
  }), r;
}
function yu(e) {
  var a = {};
  a.iauthor = e.read_shift(4);
  var r = ua(e);
  return a.rfx = r.s, a.ref = me(r.s), e.l += 16, a;
}
var Ou = fr;
function Du(e, a) {
  var r = [], n = [], t = {}, i = !1;
  return zr(e, function(c, o, f) {
    switch (f) {
      case 632:
        n.push(c);
        break;
      case 635:
        t = c;
        break;
      case 637:
        t.t = c.t, t.h = c.h, t.r = c.r;
        break;
      case 636:
        if (t.author = n[t.iauthor], delete t.iauthor, a.sheetRows && t.rfx && a.sheetRows <= t.rfx.r) break;
        t.t || (t.t = ""), delete t.rfx, r.push(t);
        break;
      case 3072:
        break;
      case 35:
        i = !0;
        break;
      case 36:
        i = !1;
        break;
      case 37:
        break;
      case 38:
        break;
      default:
        if (!o.T) {
          if (!i || a.WTF) throw new Error("Unexpected record 0x" + f.toString(16));
        }
    }
  }), r;
}
var Ru = "application/vnd.ms-office.vbaProject";
function Iu(e) {
  var a = Fe.utils.cfb_new({ root: "R" });
  return e.FullPaths.forEach(function(r, n) {
    if (!(r.slice(-1) === "/" || !r.match(/_VBA_PROJECT_CUR/))) {
      var t = r.replace(/^[^\/]*/, "R").replace(/\/_VBA_PROJECT_CUR\u0000*/, "");
      Fe.utils.cfb_add(a, t, e.FileIndex[n].content);
    }
  }), Fe.write(a);
}
function Nu() {
  return { "!type": "dialog" };
}
function Pu() {
  return { "!type": "dialog" };
}
function Lu() {
  return { "!type": "macro" };
}
function bu() {
  return { "!type": "macro" };
}
var Ea = /* @__PURE__ */ (function() {
  var e = /(^|[^A-Za-z_])R(\[?-?\d+\]|[1-9]\d*|)C(\[?-?\d+\]|[1-9]\d*|)(?![A-Za-z0-9_])/g, a = { r: 0, c: 0 };
  function r(n, t, i, s) {
    var c = !1, o = !1;
    i.length == 0 ? o = !0 : i.charAt(0) == "[" && (o = !0, i = i.slice(1, -1)), s.length == 0 ? c = !0 : s.charAt(0) == "[" && (c = !0, s = s.slice(1, -1));
    var f = i.length > 0 ? parseInt(i, 10) | 0 : 0, l = s.length > 0 ? parseInt(s, 10) | 0 : 0;
    return c ? l += a.c : --l, o ? f += a.r : --f, t + (c ? "" : "$") + Ye(l) + (o ? "" : "$") + er(f);
  }
  return function(t, i) {
    return a = i, t.replace(e, r);
  };
})(), Ki = /(^|[^._A-Z0-9])([$]?)([A-Z]{1,2}|[A-W][A-Z]{2}|X[A-E][A-Z]|XF[A-D])([$]?)(10[0-3]\d{4}|104[0-7]\d{3}|1048[0-4]\d{2}|10485[0-6]\d|104857[0-6]|[1-9]\d{0,5})(?![_.\(A-Za-z0-9])/g, Mu = /* @__PURE__ */ (function() {
  return function(a, r) {
    return a.replace(Ki, function(n, t, i, s, c, o) {
      var f = u0(s) - (i ? 0 : r.c), l = l0(o) - (c ? 0 : r.r), u = l == 0 ? "" : c ? l + 1 : "[" + l + "]", h = f == 0 ? "" : i ? f + 1 : "[" + f + "]";
      return t + "R" + u + "C" + h;
    });
  };
})();
function Yi(e, a) {
  return e.replace(Ki, function(r, n, t, i, s, c) {
    return n + (t == "$" ? t + i : Ye(u0(i) + a.c)) + (s == "$" ? s + c : er(l0(c) + a.r));
  });
}
function Bu(e, a, r) {
  var n = Sa(a), t = n.s, i = xr(r), s = { r: i.r - t.r, c: i.c - t.c };
  return Yi(e, s);
}
function Uu(e) {
  return e.length != 1;
}
function _n(e) {
  return e.replace(/_xlfn\./g, "");
}
function Ge(e) {
  e.l += 1;
}
function Zr(e, a) {
  var r = e.read_shift(2);
  return [r & 16383, r >> 14 & 1, r >> 15 & 1];
}
function ji(e, a, r) {
  var n = 2;
  if (r) {
    if (r.biff >= 2 && r.biff <= 5) return Ji(e);
    r.biff == 12 && (n = 4);
  }
  var t = e.read_shift(n), i = e.read_shift(n), s = Zr(e), c = Zr(e);
  return { s: { r: t, c: s[0], cRel: s[1], rRel: s[2] }, e: { r: i, c: c[0], cRel: c[1], rRel: c[2] } };
}
function Ji(e) {
  var a = Zr(e), r = Zr(e), n = e.read_shift(1), t = e.read_shift(1);
  return { s: { r: a[0], c: n, cRel: a[1], rRel: a[2] }, e: { r: r[0], c: t, cRel: r[1], rRel: r[2] } };
}
function Hu(e, a, r) {
  if (r.biff < 8) return Ji(e);
  var n = e.read_shift(r.biff == 12 ? 4 : 2), t = e.read_shift(r.biff == 12 ? 4 : 2), i = Zr(e), s = Zr(e);
  return { s: { r: n, c: i[0], cRel: i[1], rRel: i[2] }, e: { r: t, c: s[0], cRel: s[1], rRel: s[2] } };
}
function qi(e, a, r) {
  if (r && r.biff >= 2 && r.biff <= 5) return Wu(e);
  var n = e.read_shift(r && r.biff == 12 ? 4 : 2), t = Zr(e);
  return { r: n, c: t[0], cRel: t[1], rRel: t[2] };
}
function Wu(e) {
  var a = Zr(e), r = e.read_shift(1);
  return { r: a[0], c: r, cRel: a[1], rRel: a[2] };
}
function Vu(e) {
  var a = e.read_shift(2), r = e.read_shift(2);
  return { r: a, c: r & 255, fQuoted: !!(r & 16384), cRel: r >> 15, rRel: r >> 15 };
}
function Gu(e, a, r) {
  var n = r && r.biff ? r.biff : 8;
  if (n >= 2 && n <= 5) return Xu(e);
  var t = e.read_shift(n >= 12 ? 4 : 2), i = e.read_shift(2), s = (i & 16384) >> 14, c = (i & 32768) >> 15;
  if (i &= 16383, c == 1) for (; t > 524287; ) t -= 1048576;
  if (s == 1) for (; i > 8191; ) i = i - 16384;
  return { r: t, c: i, cRel: s, rRel: c };
}
function Xu(e) {
  var a = e.read_shift(2), r = e.read_shift(1), n = (a & 32768) >> 15, t = (a & 16384) >> 14;
  return a &= 16383, n == 1 && a >= 8192 && (a = a - 16384), t == 1 && r >= 128 && (r = r - 256), { r: a, c: r, cRel: t, rRel: n };
}
function zu(e, a, r) {
  var n = (e[e.l++] & 96) >> 5, t = ji(e, r.biff >= 2 && r.biff <= 5 ? 6 : 8, r);
  return [n, t];
}
function $u(e, a, r) {
  var n = (e[e.l++] & 96) >> 5, t = e.read_shift(2, "i"), i = 8;
  if (r) switch (r.biff) {
    case 5:
      e.l += 12, i = 6;
      break;
    case 12:
      i = 12;
      break;
  }
  var s = ji(e, i, r);
  return [n, t, s];
}
function Ku(e, a, r) {
  var n = (e[e.l++] & 96) >> 5;
  return e.l += r && r.biff > 8 ? 12 : r.biff < 8 ? 6 : 8, [n];
}
function Yu(e, a, r) {
  var n = (e[e.l++] & 96) >> 5, t = e.read_shift(2), i = 8;
  if (r) switch (r.biff) {
    case 5:
      e.l += 12, i = 6;
      break;
    case 12:
      i = 12;
      break;
  }
  return e.l += i, [n, t];
}
function ju(e, a, r) {
  var n = (e[e.l++] & 96) >> 5, t = Hu(e, a - 1, r);
  return [n, t];
}
function Ju(e, a, r) {
  var n = (e[e.l++] & 96) >> 5;
  return e.l += r.biff == 2 ? 6 : r.biff == 12 ? 14 : 7, [n];
}
function En(e) {
  var a = e[e.l + 1] & 1, r = 1;
  return e.l += 4, [a, r];
}
function qu(e, a, r) {
  e.l += 2;
  for (var n = e.read_shift(r && r.biff == 2 ? 1 : 2), t = [], i = 0; i <= n; ++i) t.push(e.read_shift(r && r.biff == 2 ? 1 : 2));
  return t;
}
function Zu(e, a, r) {
  var n = e[e.l + 1] & 255 ? 1 : 0;
  return e.l += 2, [n, e.read_shift(r && r.biff == 2 ? 1 : 2)];
}
function Qu(e, a, r) {
  var n = e[e.l + 1] & 255 ? 1 : 0;
  return e.l += 2, [n, e.read_shift(r && r.biff == 2 ? 1 : 2)];
}
function eh(e) {
  var a = e[e.l + 1] & 255 ? 1 : 0;
  return e.l += 2, [a, e.read_shift(2)];
}
function rh(e, a, r) {
  var n = e[e.l + 1] & 255 ? 1 : 0;
  return e.l += r && r.biff == 2 ? 3 : 4, [n];
}
function Zi(e) {
  var a = e.read_shift(1), r = e.read_shift(1);
  return [a, r];
}
function ah(e) {
  return e.read_shift(2), Zi(e);
}
function th(e) {
  return e.read_shift(2), Zi(e);
}
function nh(e, a, r) {
  var n = (e[e.l] & 96) >> 5;
  e.l += 1;
  var t = qi(e, 0, r);
  return [n, t];
}
function ih(e, a, r) {
  var n = (e[e.l] & 96) >> 5;
  e.l += 1;
  var t = Gu(e, 0, r);
  return [n, t];
}
function sh(e, a, r) {
  var n = (e[e.l] & 96) >> 5;
  e.l += 1;
  var t = e.read_shift(2);
  r && r.biff == 5 && (e.l += 12);
  var i = qi(e, 0, r);
  return [n, t, i];
}
function ch(e, a, r) {
  var n = (e[e.l] & 96) >> 5;
  e.l += 1;
  var t = e.read_shift(r && r.biff <= 3 ? 1 : 2);
  return [f1[t], rs[t], n];
}
function fh(e, a, r) {
  var n = e[e.l++], t = e.read_shift(1), i = r && r.biff <= 3 ? [n == 88 ? -1 : 0, e.read_shift(1)] : oh(e);
  return [t, (i[0] === 0 ? rs : c1)[i[1]]];
}
function oh(e) {
  return [e[e.l + 1] >> 7, e.read_shift(2) & 32767];
}
function lh(e, a, r) {
  e.l += r && r.biff == 2 ? 3 : 4;
}
function uh(e, a, r) {
  if (e.l++, r && r.biff == 12) return [e.read_shift(4, "i"), 0];
  var n = e.read_shift(2), t = e.read_shift(r && r.biff == 2 ? 1 : 2);
  return [n, t];
}
function hh(e) {
  return e.l++, ha[e.read_shift(1)];
}
function xh(e) {
  return e.l++, e.read_shift(2);
}
function dh(e) {
  return e.l++, e.read_shift(1) !== 0;
}
function ph(e) {
  return e.l++, sr(e);
}
function vh(e, a, r) {
  return e.l++, et(e, a - 1, r);
}
function gh(e, a) {
  var r = [e.read_shift(1)];
  if (a == 12) switch (r[0]) {
    case 2:
      r[0] = 4;
      break;
    /* SerBool */
    case 4:
      r[0] = 16;
      break;
    /* SerErr */
    case 0:
      r[0] = 1;
      break;
    /* SerNum */
    case 1:
      r[0] = 2;
      break;
  }
  switch (r[0]) {
    case 4:
      r[1] = He(e, 1) ? "TRUE" : "FALSE", a != 12 && (e.l += 7);
      break;
    case 37:
    /* appears to be an alias */
    case 16:
      r[1] = ha[e[e.l]], e.l += a == 12 ? 4 : 8;
      break;
    case 0:
      e.l += 8;
      break;
    case 1:
      r[1] = sr(e);
      break;
    case 2:
      r[1] = xa(e, 0, { biff: a > 0 && a < 8 ? 2 : a });
      break;
    default:
      throw new Error("Bad SerAr: " + r[0]);
  }
  return r;
}
function mh(e, a, r) {
  for (var n = e.read_shift(r.biff == 12 ? 4 : 2), t = [], i = 0; i != n; ++i) t.push((r.biff == 12 ? ua : yt)(e));
  return t;
}
function _h(e, a, r) {
  var n = 0, t = 0;
  r.biff == 12 ? (n = e.read_shift(4), t = e.read_shift(4)) : (t = 1 + e.read_shift(1), n = 1 + e.read_shift(2)), r.biff >= 2 && r.biff < 8 && (--n, --t == 0 && (t = 256));
  for (var i = 0, s = []; i != n && (s[i] = []); ++i)
    for (var c = 0; c != t; ++c) s[i][c] = gh(e, r.biff);
  return s;
}
function Eh(e, a, r) {
  var n = e.read_shift(1) >>> 5 & 3, t = !r || r.biff >= 8 ? 4 : 2, i = e.read_shift(t);
  switch (r.biff) {
    case 2:
      e.l += 5;
      break;
    case 3:
    case 4:
      e.l += 8;
      break;
    case 5:
      e.l += 12;
      break;
  }
  return [n, 0, i];
}
function Th(e, a, r) {
  if (r.biff == 5) return kh(e);
  var n = e.read_shift(1) >>> 5 & 3, t = e.read_shift(2), i = e.read_shift(4);
  return [n, t, i];
}
function kh(e) {
  var a = e.read_shift(1) >>> 5 & 3, r = e.read_shift(2, "i");
  e.l += 8;
  var n = e.read_shift(2);
  return e.l += 12, [a, r, n];
}
function wh(e, a, r) {
  var n = e.read_shift(1) >>> 5 & 3;
  e.l += r && r.biff == 2 ? 3 : 4;
  var t = e.read_shift(r && r.biff == 2 ? 1 : 2);
  return [n, t];
}
function Ah(e, a, r) {
  var n = e.read_shift(1) >>> 5 & 3, t = e.read_shift(r && r.biff == 2 ? 1 : 2);
  return [n, t];
}
function Fh(e, a, r) {
  var n = e.read_shift(1) >>> 5 & 3;
  return e.l += 4, r.biff < 8 && e.l--, r.biff == 12 && (e.l += 2), [n];
}
function Sh(e, a, r) {
  var n = (e[e.l++] & 96) >> 5, t = e.read_shift(2), i = 4;
  if (r) switch (r.biff) {
    case 5:
      i = 15;
      break;
    case 12:
      i = 6;
      break;
  }
  return e.l += i, [n, t];
}
var Ch = or, yh = or, Oh = or;
function at(e, a, r) {
  return e.l += 2, [Vu(e)];
}
function _0(e) {
  return e.l += 6, [];
}
var Dh = at, Rh = _0, Ih = _0, Nh = at;
function Qi(e) {
  return e.l += 2, [ze(e), e.read_shift(2) & 1];
}
var Ph = at, Lh = Qi, bh = _0, Mh = at, Bh = at, Uh = [
  "Data",
  "All",
  "Headers",
  "??",
  "?Data2",
  "??",
  "?DataHeaders",
  "??",
  "Totals",
  "??",
  "??",
  "??",
  "?DataTotals",
  "??",
  "??",
  "??",
  "?Current"
];
function Hh(e) {
  e.l += 2;
  var a = e.read_shift(2), r = e.read_shift(2), n = e.read_shift(4), t = e.read_shift(2), i = e.read_shift(2), s = Uh[r >> 2 & 31];
  return { ixti: a, coltype: r & 3, rt: s, idx: n, c: t, C: i };
}
function Wh(e) {
  return e.l += 2, [e.read_shift(4)];
}
function Vh(e, a, r) {
  return e.l += 5, e.l += 2, e.l += r.biff == 2 ? 1 : 4, ["PTGSHEET"];
}
function Gh(e, a, r) {
  return e.l += r.biff == 2 ? 4 : 5, ["PTGENDSHEET"];
}
function Xh(e) {
  var a = e.read_shift(1) >>> 5 & 3, r = e.read_shift(2);
  return [a, r];
}
function zh(e) {
  var a = e.read_shift(1) >>> 5 & 3, r = e.read_shift(2);
  return [a, r];
}
function $h(e) {
  return e.l += 4, [0, 0];
}
var Tn = {
  /*::[*/
  1: { n: "PtgExp", f: uh },
  /*::[*/
  2: { n: "PtgTbl", f: Oh },
  /*::[*/
  3: { n: "PtgAdd", f: Ge },
  /*::[*/
  4: { n: "PtgSub", f: Ge },
  /*::[*/
  5: { n: "PtgMul", f: Ge },
  /*::[*/
  6: { n: "PtgDiv", f: Ge },
  /*::[*/
  7: { n: "PtgPower", f: Ge },
  /*::[*/
  8: { n: "PtgConcat", f: Ge },
  /*::[*/
  9: { n: "PtgLt", f: Ge },
  /*::[*/
  10: { n: "PtgLe", f: Ge },
  /*::[*/
  11: { n: "PtgEq", f: Ge },
  /*::[*/
  12: { n: "PtgGe", f: Ge },
  /*::[*/
  13: { n: "PtgGt", f: Ge },
  /*::[*/
  14: { n: "PtgNe", f: Ge },
  /*::[*/
  15: { n: "PtgIsect", f: Ge },
  /*::[*/
  16: { n: "PtgUnion", f: Ge },
  /*::[*/
  17: { n: "PtgRange", f: Ge },
  /*::[*/
  18: { n: "PtgUplus", f: Ge },
  /*::[*/
  19: { n: "PtgUminus", f: Ge },
  /*::[*/
  20: { n: "PtgPercent", f: Ge },
  /*::[*/
  21: { n: "PtgParen", f: Ge },
  /*::[*/
  22: { n: "PtgMissArg", f: Ge },
  /*::[*/
  23: { n: "PtgStr", f: vh },
  /*::[*/
  26: { n: "PtgSheet", f: Vh },
  /*::[*/
  27: { n: "PtgEndSheet", f: Gh },
  /*::[*/
  28: { n: "PtgErr", f: hh },
  /*::[*/
  29: { n: "PtgBool", f: dh },
  /*::[*/
  30: { n: "PtgInt", f: xh },
  /*::[*/
  31: { n: "PtgNum", f: ph },
  /*::[*/
  32: { n: "PtgArray", f: Ju },
  /*::[*/
  33: { n: "PtgFunc", f: ch },
  /*::[*/
  34: { n: "PtgFuncVar", f: fh },
  /*::[*/
  35: { n: "PtgName", f: Eh },
  /*::[*/
  36: { n: "PtgRef", f: nh },
  /*::[*/
  37: { n: "PtgArea", f: zu },
  /*::[*/
  38: { n: "PtgMemArea", f: wh },
  /*::[*/
  39: { n: "PtgMemErr", f: Ch },
  /*::[*/
  40: { n: "PtgMemNoMem", f: yh },
  /*::[*/
  41: { n: "PtgMemFunc", f: Ah },
  /*::[*/
  42: { n: "PtgRefErr", f: Fh },
  /*::[*/
  43: { n: "PtgAreaErr", f: Ku },
  /*::[*/
  44: { n: "PtgRefN", f: ih },
  /*::[*/
  45: { n: "PtgAreaN", f: ju },
  /*::[*/
  46: { n: "PtgMemAreaN", f: Xh },
  /*::[*/
  47: { n: "PtgMemNoMemN", f: zh },
  /*::[*/
  57: { n: "PtgNameX", f: Th },
  /*::[*/
  58: { n: "PtgRef3d", f: sh },
  /*::[*/
  59: { n: "PtgArea3d", f: $u },
  /*::[*/
  60: { n: "PtgRefErr3d", f: Sh },
  /*::[*/
  61: { n: "PtgAreaErr3d", f: Yu },
  /*::[*/
  255: {}
}, Kh = {
  /*::[*/
  64: 32,
  /*::[*/
  96: 32,
  /*::[*/
  65: 33,
  /*::[*/
  97: 33,
  /*::[*/
  66: 34,
  /*::[*/
  98: 34,
  /*::[*/
  67: 35,
  /*::[*/
  99: 35,
  /*::[*/
  68: 36,
  /*::[*/
  100: 36,
  /*::[*/
  69: 37,
  /*::[*/
  101: 37,
  /*::[*/
  70: 38,
  /*::[*/
  102: 38,
  /*::[*/
  71: 39,
  /*::[*/
  103: 39,
  /*::[*/
  72: 40,
  /*::[*/
  104: 40,
  /*::[*/
  73: 41,
  /*::[*/
  105: 41,
  /*::[*/
  74: 42,
  /*::[*/
  106: 42,
  /*::[*/
  75: 43,
  /*::[*/
  107: 43,
  /*::[*/
  76: 44,
  /*::[*/
  108: 44,
  /*::[*/
  77: 45,
  /*::[*/
  109: 45,
  /*::[*/
  78: 46,
  /*::[*/
  110: 46,
  /*::[*/
  79: 47,
  /*::[*/
  111: 47,
  /*::[*/
  88: 34,
  /*::[*/
  120: 34,
  /*::[*/
  89: 57,
  /*::[*/
  121: 57,
  /*::[*/
  90: 58,
  /*::[*/
  122: 58,
  /*::[*/
  91: 59,
  /*::[*/
  123: 59,
  /*::[*/
  92: 60,
  /*::[*/
  124: 60,
  /*::[*/
  93: 61,
  /*::[*/
  125: 61
}, Yh = {
  /*::[*/
  1: { n: "PtgElfLel", f: Qi },
  /*::[*/
  2: { n: "PtgElfRw", f: Mh },
  /*::[*/
  3: { n: "PtgElfCol", f: Dh },
  /*::[*/
  6: { n: "PtgElfRwV", f: Bh },
  /*::[*/
  7: { n: "PtgElfColV", f: Nh },
  /*::[*/
  10: { n: "PtgElfRadical", f: Ph },
  /*::[*/
  11: { n: "PtgElfRadicalS", f: bh },
  /*::[*/
  13: { n: "PtgElfColS", f: Rh },
  /*::[*/
  15: { n: "PtgElfColSV", f: Ih },
  /*::[*/
  16: { n: "PtgElfRadicalLel", f: Lh },
  /*::[*/
  25: { n: "PtgList", f: Hh },
  /*::[*/
  29: { n: "PtgSxName", f: Wh },
  /*::[*/
  255: {}
}, jh = {
  /*::[*/
  0: { n: "PtgAttrNoop", f: $h },
  /*::[*/
  1: { n: "PtgAttrSemi", f: rh },
  /*::[*/
  2: { n: "PtgAttrIf", f: Qu },
  /*::[*/
  4: { n: "PtgAttrChoose", f: qu },
  /*::[*/
  8: { n: "PtgAttrGoto", f: Zu },
  /*::[*/
  16: { n: "PtgAttrSum", f: lh },
  /*::[*/
  32: { n: "PtgAttrBaxcel", f: En },
  /*::[*/
  33: { n: "PtgAttrBaxcel", f: En },
  /*::[*/
  64: { n: "PtgAttrSpace", f: ah },
  /*::[*/
  65: { n: "PtgAttrSpaceSemi", f: th },
  /*::[*/
  128: { n: "PtgAttrIfError", f: eh },
  /*::[*/
  255: {}
};
function tt(e, a, r, n) {
  if (n.biff < 8) return or(e, a);
  for (var t = e.l + a, i = [], s = 0; s !== r.length; ++s)
    switch (r[s][0]) {
      case "PtgArray":
        r[s][1] = _h(e, 0, n), i.push(r[s][1]);
        break;
      case "PtgMemArea":
        r[s][2] = mh(e, r[s][1], n), i.push(r[s][2]);
        break;
      case "PtgExp":
        n && n.biff == 12 && (r[s][1][1] = e.read_shift(4), i.push(r[s][1]));
        break;
      case "PtgList":
      /* TODO: PtgList -> PtgExtraList */
      case "PtgElfRadicalS":
      /* TODO: PtgElfRadicalS -> PtgExtraElf */
      case "PtgElfColS":
      /* TODO: PtgElfColS -> PtgExtraElf */
      case "PtgElfColSV":
        throw "Unsupported " + r[s][0];
    }
  return a = t - e.l, a !== 0 && i.push(or(e, a)), i;
}
function nt(e, a, r) {
  for (var n = e.l + a, t, i, s = []; n != e.l; )
    a = n - e.l, i = e[e.l], t = Tn[i] || Tn[Kh[i]], (i === 24 || i === 25) && (t = (i === 24 ? Yh : jh)[e[e.l + 1]]), !t || !t.f ? or(e, a) : s.push([t.n, t.f(e, a, r)]);
  return s;
}
function Jh(e) {
  for (var a = [], r = 0; r < e.length; ++r) {
    for (var n = e[r], t = [], i = 0; i < n.length; ++i) {
      var s = n[i];
      s ? s[0] === 2 ? t.push('"' + s[1].replace(/"/g, '""') + '"') : t.push(s[1]) : t.push("");
    }
    a.push(t.join(","));
  }
  return a.join(";");
}
var qh = {
  PtgAdd: "+",
  PtgConcat: "&",
  PtgDiv: "/",
  PtgEq: "=",
  PtgGe: ">=",
  PtgGt: ">",
  PtgLe: "<=",
  PtgLt: "<",
  PtgMul: "*",
  PtgNe: "<>",
  PtgPower: "^",
  PtgSub: "-"
};
function Zh(e, a) {
  if (!e && !(a && a.biff <= 5 && a.biff >= 2)) throw new Error("empty sheet name");
  return /[^\w\u4E00-\u9FFF\u3040-\u30FF]/.test(e) ? "'" + e + "'" : e;
}
function es(e, a, r) {
  if (!e) return "SH33TJSERR0";
  if (r.biff > 8 && (!e.XTI || !e.XTI[a])) return e.SheetNames[a];
  if (!e.XTI) return "SH33TJSERR6";
  var n = e.XTI[a];
  if (r.biff < 8)
    return a > 1e4 && (a -= 65536), a < 0 && (a = -a), a == 0 ? "" : e.XTI[a - 1];
  if (!n) return "SH33TJSERR1";
  var t = "";
  if (r.biff > 8) switch (e[n[0]][0]) {
    case 357:
      return t = n[1] == -1 ? "#REF" : e.SheetNames[n[1]], n[1] == n[2] ? t : t + ":" + e.SheetNames[n[2]];
    case 358:
      return r.SID != null ? e.SheetNames[r.SID] : "SH33TJSSAME" + e[n[0]][0];
    /* 'BrtSupBookSrc' */
    /* falls through */
    default:
      return "SH33TJSSRC" + e[n[0]][0];
  }
  switch (e[n[0]][0][0]) {
    case 1025:
      return t = n[1] == -1 ? "#REF" : e.SheetNames[n[1]] || "SH33TJSERR3", n[1] == n[2] ? t : t + ":" + e.SheetNames[n[2]];
    case 14849:
      return e[n[0]].slice(1).map(function(i) {
        return i.Name;
      }).join(";;");
    //return "SH33TJSERR8";
    default:
      return e[n[0]][0][3] ? (t = n[1] == -1 ? "#REF" : e[n[0]][0][3][n[1]] || "SH33TJSERR4", n[1] == n[2] ? t : t + ":" + e[n[0]][0][3][n[2]]) : "SH33TJSERR2";
  }
}
function kn(e, a, r) {
  var n = es(e, a, r);
  return n == "#REF" ? n : Zh(n, r);
}
function ir(e, a, r, n, t) {
  var i = t && t.biff || 8, s = (
    /*range != null ? range :*/
    { s: { c: 0, r: 0 } }
  ), c = [], o, f, l, u = 0, h = 0, d, p = "";
  if (!e[0] || !e[0][0]) return "";
  for (var x = -1, g = "", O = 0, I = e[0].length; O < I; ++O) {
    var T = e[0][O];
    switch (T[0]) {
      case "PtgUminus":
        c.push("-" + c.pop());
        break;
      case "PtgUplus":
        c.push("+" + c.pop());
        break;
      case "PtgPercent":
        c.push(c.pop() + "%");
        break;
      case "PtgAdd":
      /* [MS-XLS] 2.5.198.26 */
      case "PtgConcat":
      /* [MS-XLS] 2.5.198.43 */
      case "PtgDiv":
      /* [MS-XLS] 2.5.198.45 */
      case "PtgEq":
      /* [MS-XLS] 2.5.198.56 */
      case "PtgGe":
      /* [MS-XLS] 2.5.198.64 */
      case "PtgGt":
      /* [MS-XLS] 2.5.198.65 */
      case "PtgLe":
      /* [MS-XLS] 2.5.198.68 */
      case "PtgLt":
      /* [MS-XLS] 2.5.198.69 */
      case "PtgMul":
      /* [MS-XLS] 2.5.198.75 */
      case "PtgNe":
      /* [MS-XLS] 2.5.198.78 */
      case "PtgPower":
      /* [MS-XLS] 2.5.198.82 */
      case "PtgSub":
        if (o = c.pop(), f = c.pop(), x >= 0) {
          switch (e[0][x][1][0]) {
            case 0:
              g = Be(" ", e[0][x][1][1]);
              break;
            case 1:
              g = Be("\r", e[0][x][1][1]);
              break;
            default:
              if (g = "", t.WTF) throw new Error("Unexpected PtgAttrSpaceType " + e[0][x][1][0]);
          }
          f = f + g, x = -1;
        }
        c.push(f + qh[T[0]] + o);
        break;
      case "PtgIsect":
        o = c.pop(), f = c.pop(), c.push(f + " " + o);
        break;
      case "PtgUnion":
        o = c.pop(), f = c.pop(), c.push(f + "," + o);
        break;
      case "PtgRange":
        o = c.pop(), f = c.pop(), c.push(f + ":" + o);
        break;
      case "PtgAttrChoose":
        break;
      case "PtgAttrGoto":
        break;
      case "PtgAttrIf":
        break;
      case "PtgAttrIfError":
        break;
      case "PtgRef":
        l = ba(T[1][1], s, t), c.push(Ma(l, i));
        break;
      case "PtgRefN":
        l = r ? ba(T[1][1], r, t) : T[1][1], c.push(Ma(l, i));
        break;
      case "PtgRef3d":
        u = /*::Number(*/
        T[1][1], l = ba(T[1][2], s, t), p = kn(n, u, t), c.push(p + "!" + Ma(l, i));
        break;
      case "PtgFunc":
      /* [MS-XLS] 2.5.198.62 */
      case "PtgFuncVar":
        var U = T[1][0], V = T[1][1];
        U || (U = 0), U &= 127;
        var B = U == 0 ? [] : c.slice(-U);
        c.length -= U, V === "User" && (V = B.shift()), c.push(V + "(" + B.join(",") + ")");
        break;
      case "PtgBool":
        c.push(T[1] ? "TRUE" : "FALSE");
        break;
      case "PtgInt":
        c.push(
          /*::String(*/
          T[1]
          /*::)*/
        );
        break;
      case "PtgNum":
        c.push(String(T[1]));
        break;
      case "PtgStr":
        c.push('"' + T[1].replace(/"/g, '""') + '"');
        break;
      case "PtgErr":
        c.push(
          /*::String(*/
          T[1]
          /*::)*/
        );
        break;
      case "PtgAreaN":
        d = rn(T[1][1], r ? { s: r } : s, t), c.push(Lt(d, t));
        break;
      case "PtgArea":
        d = rn(T[1][1], s, t), c.push(Lt(d, t));
        break;
      case "PtgArea3d":
        u = /*::Number(*/
        T[1][1], d = T[1][2], p = kn(n, u, t), c.push(p + "!" + Lt(d, t));
        break;
      case "PtgAttrSum":
        c.push("SUM(" + c.pop() + ")");
        break;
      case "PtgAttrBaxcel":
      /* [MS-XLS] 2.5.198.33 */
      case "PtgAttrSemi":
        break;
      case "PtgName":
        h = T[1][2];
        var A = (n.names || [])[h - 1] || (n[0] || [])[h], _ = A ? A.Name : "SH33TJSNAME" + String(h);
        _ && _.slice(0, 6) == "_xlfn." && !t.xlfn && (_ = _.slice(6)), c.push(_);
        break;
      case "PtgNameX":
        var m = T[1][1];
        h = T[1][2];
        var R;
        if (t.biff <= 5)
          m < 0 && (m = -m), n[m] && (R = n[m][h]);
        else {
          var L = "";
          if (((n[m] || [])[0] || [])[0] == 14849 || (((n[m] || [])[0] || [])[0] == 1025 ? n[m][h] && n[m][h].itab > 0 && (L = n.SheetNames[n[m][h].itab - 1] + "!") : L = n.SheetNames[h - 1] + "!"), n[m] && n[m][h]) L += n[m][h].Name;
          else if (n[0] && n[0][h]) L += n[0][h].Name;
          else {
            var D = (es(n, m, t) || "").split(";;");
            D[h - 1] ? L = D[h - 1] : L += "SH33TJSERRX";
          }
          c.push(L);
          break;
        }
        R || (R = { Name: "SH33TJSERRY" }), c.push(R.Name);
        break;
      case "PtgParen":
        var z = "(", ie = ")";
        if (x >= 0) {
          switch (g = "", e[0][x][1][0]) {
            // $FlowIgnore
            case 2:
              z = Be(" ", e[0][x][1][1]) + z;
              break;
            // $FlowIgnore
            case 3:
              z = Be("\r", e[0][x][1][1]) + z;
              break;
            // $FlowIgnore
            case 4:
              ie = Be(" ", e[0][x][1][1]) + ie;
              break;
            // $FlowIgnore
            case 5:
              ie = Be("\r", e[0][x][1][1]) + ie;
              break;
            default:
              if (t.WTF) throw new Error("Unexpected PtgAttrSpaceType " + e[0][x][1][0]);
          }
          x = -1;
        }
        c.push(z + c.pop() + ie);
        break;
      case "PtgRefErr":
        c.push("#REF!");
        break;
      case "PtgRefErr3d":
        c.push("#REF!");
        break;
      case "PtgExp":
        l = { c: T[1][1], r: T[1][0] };
        var re = { c: r.c, r: r.r };
        if (n.sharedf[me(l)]) {
          var fe = n.sharedf[me(l)];
          c.push(ir(fe, s, re, n, t));
        } else {
          var q = !1;
          for (o = 0; o != n.arrayf.length; ++o)
            if (f = n.arrayf[o], !(l.c < f[0].s.c || l.c > f[0].e.c) && !(l.r < f[0].s.r || l.r > f[0].e.r)) {
              c.push(ir(f[1], s, re, n, t)), q = !0;
              break;
            }
          q || c.push(
            /*::String(*/
            T[1]
            /*::)*/
          );
        }
        break;
      case "PtgArray":
        c.push("{" + Jh(
          /*::(*/
          T[1]
          /*:: :any)*/
        ) + "}");
        break;
      case "PtgMemArea":
        break;
      case "PtgAttrSpace":
      /* [MS-XLS] 2.5.198.38 */
      case "PtgAttrSpaceSemi":
        x = O;
        break;
      case "PtgTbl":
        break;
      case "PtgMemErr":
        break;
      case "PtgMissArg":
        c.push("");
        break;
      case "PtgAreaErr":
        c.push("#REF!");
        break;
      case "PtgAreaErr3d":
        c.push("#REF!");
        break;
      case "PtgList":
        c.push("Table" + T[1].idx + "[#" + T[1].rt + "]");
        break;
      case "PtgMemAreaN":
      case "PtgMemNoMemN":
      case "PtgAttrNoop":
      case "PtgSheet":
      case "PtgEndSheet":
        break;
      case "PtgMemFunc":
        break;
      case "PtgMemNoMem":
        break;
      case "PtgElfCol":
      /* [MS-XLS] 2.5.198.46 */
      case "PtgElfColS":
      /* [MS-XLS] 2.5.198.47 */
      case "PtgElfColSV":
      /* [MS-XLS] 2.5.198.48 */
      case "PtgElfColV":
      /* [MS-XLS] 2.5.198.49 */
      case "PtgElfLel":
      /* [MS-XLS] 2.5.198.50 */
      case "PtgElfRadical":
      /* [MS-XLS] 2.5.198.51 */
      case "PtgElfRadicalLel":
      /* [MS-XLS] 2.5.198.52 */
      case "PtgElfRadicalS":
      /* [MS-XLS] 2.5.198.53 */
      case "PtgElfRw":
      /* [MS-XLS] 2.5.198.54 */
      case "PtgElfRwV":
        throw new Error("Unsupported ELFs");
      case "PtgSxName":
        throw new Error("Unrecognized Formula Token: " + String(T));
      default:
        throw new Error("Unrecognized Formula Token: " + String(T));
    }
    var ve = ["PtgAttrSpace", "PtgAttrSpaceSemi", "PtgAttrGoto"];
    if (t.biff != 3 && x >= 0 && ve.indexOf(e[0][O][0]) == -1) {
      T = e[0][x];
      var M = !0;
      switch (T[1][0]) {
        /* note: some bad XLSB files omit the PtgParen */
        case 4:
          M = !1;
        /* falls through */
        case 0:
          g = Be(" ", T[1][1]);
          break;
        case 5:
          M = !1;
        /* falls through */
        case 1:
          g = Be("\r", T[1][1]);
          break;
        default:
          if (g = "", t.WTF) throw new Error("Unexpected PtgAttrSpaceType " + T[1][0]);
      }
      c.push((M ? g : "") + c.pop() + (M ? "" : g)), x = -1;
    }
  }
  if (c.length > 1 && t.WTF) throw new Error("bad formula stack");
  return c[0];
}
function Qh(e, a, r) {
  var n = e.l + a, t = r.biff == 2 ? 1 : 2, i, s = e.read_shift(t);
  if (s == 65535) return [[], or(e, a - 2)];
  var c = nt(e, s, r);
  return a !== s + t && (i = tt(e, a - s - t, c, r)), e.l = n, [c, i];
}
function e1(e, a, r) {
  var n = e.l + a, t = r.biff == 2 ? 1 : 2, i, s = e.read_shift(t);
  if (s == 65535) return [[], or(e, a - 2)];
  var c = nt(e, s, r);
  return a !== s + t && (i = tt(e, a - s - t, c, r)), e.l = n, [c, i];
}
function r1(e, a, r, n) {
  var t = e.l + a, i = nt(e, n, r), s;
  return t !== e.l && (s = tt(e, t - e.l, i, r)), [i, s];
}
function a1(e, a, r) {
  var n = e.l + a, t, i = e.read_shift(2), s = nt(e, i, r);
  return i == 65535 ? [[], or(e, a - 2)] : (a !== i + 2 && (t = tt(e, n - i - 2, s, r)), [s, t]);
}
function t1(e) {
  var a;
  if (Hr(e, e.l + 6) !== 65535) return [sr(e), "n"];
  switch (e[e.l]) {
    case 0:
      return e.l += 8, ["String", "s"];
    case 1:
      return a = e[e.l + 2] === 1, e.l += 8, [a, "b"];
    case 2:
      return a = e[e.l + 2], e.l += 8, [a, "e"];
    case 3:
      return e.l += 8, ["", "s"];
  }
  return [];
}
function Bt(e, a, r) {
  var n = e.l + a, t = Br(e);
  r.biff == 2 && ++e.l;
  var i = t1(e), s = e.read_shift(1);
  r.biff != 2 && (e.read_shift(1), r.biff >= 5 && e.read_shift(4));
  var c = e1(e, n - e.l, r);
  return { cell: t, val: i[0], formula: c, shared: s >> 3 & 1, tt: i[1] };
}
function Ot(e, a, r) {
  var n = e.read_shift(4), t = nt(e, n, r), i = e.read_shift(4), s = i > 0 ? tt(e, i, t, r) : null;
  return [t, s];
}
var n1 = Ot, Dt = Ot, i1 = Ot, s1 = Ot, c1 = {
  0: "BEEP",
  1: "OPEN",
  2: "OPEN.LINKS",
  3: "CLOSE.ALL",
  4: "SAVE",
  5: "SAVE.AS",
  6: "FILE.DELETE",
  7: "PAGE.SETUP",
  8: "PRINT",
  9: "PRINTER.SETUP",
  10: "QUIT",
  11: "NEW.WINDOW",
  12: "ARRANGE.ALL",
  13: "WINDOW.SIZE",
  14: "WINDOW.MOVE",
  15: "FULL",
  16: "CLOSE",
  17: "RUN",
  22: "SET.PRINT.AREA",
  23: "SET.PRINT.TITLES",
  24: "SET.PAGE.BREAK",
  25: "REMOVE.PAGE.BREAK",
  26: "FONT",
  27: "DISPLAY",
  28: "PROTECT.DOCUMENT",
  29: "PRECISION",
  30: "A1.R1C1",
  31: "CALCULATE.NOW",
  32: "CALCULATION",
  34: "DATA.FIND",
  35: "EXTRACT",
  36: "DATA.DELETE",
  37: "SET.DATABASE",
  38: "SET.CRITERIA",
  39: "SORT",
  40: "DATA.SERIES",
  41: "TABLE",
  42: "FORMAT.NUMBER",
  43: "ALIGNMENT",
  44: "STYLE",
  45: "BORDER",
  46: "CELL.PROTECTION",
  47: "COLUMN.WIDTH",
  48: "UNDO",
  49: "CUT",
  50: "COPY",
  51: "PASTE",
  52: "CLEAR",
  53: "PASTE.SPECIAL",
  54: "EDIT.DELETE",
  55: "INSERT",
  56: "FILL.RIGHT",
  57: "FILL.DOWN",
  61: "DEFINE.NAME",
  62: "CREATE.NAMES",
  63: "FORMULA.GOTO",
  64: "FORMULA.FIND",
  65: "SELECT.LAST.CELL",
  66: "SHOW.ACTIVE.CELL",
  67: "GALLERY.AREA",
  68: "GALLERY.BAR",
  69: "GALLERY.COLUMN",
  70: "GALLERY.LINE",
  71: "GALLERY.PIE",
  72: "GALLERY.SCATTER",
  73: "COMBINATION",
  74: "PREFERRED",
  75: "ADD.OVERLAY",
  76: "GRIDLINES",
  77: "SET.PREFERRED",
  78: "AXES",
  79: "LEGEND",
  80: "ATTACH.TEXT",
  81: "ADD.ARROW",
  82: "SELECT.CHART",
  83: "SELECT.PLOT.AREA",
  84: "PATTERNS",
  85: "MAIN.CHART",
  86: "OVERLAY",
  87: "SCALE",
  88: "FORMAT.LEGEND",
  89: "FORMAT.TEXT",
  90: "EDIT.REPEAT",
  91: "PARSE",
  92: "JUSTIFY",
  93: "HIDE",
  94: "UNHIDE",
  95: "WORKSPACE",
  96: "FORMULA",
  97: "FORMULA.FILL",
  98: "FORMULA.ARRAY",
  99: "DATA.FIND.NEXT",
  100: "DATA.FIND.PREV",
  101: "FORMULA.FIND.NEXT",
  102: "FORMULA.FIND.PREV",
  103: "ACTIVATE",
  104: "ACTIVATE.NEXT",
  105: "ACTIVATE.PREV",
  106: "UNLOCKED.NEXT",
  107: "UNLOCKED.PREV",
  108: "COPY.PICTURE",
  109: "SELECT",
  110: "DELETE.NAME",
  111: "DELETE.FORMAT",
  112: "VLINE",
  113: "HLINE",
  114: "VPAGE",
  115: "HPAGE",
  116: "VSCROLL",
  117: "HSCROLL",
  118: "ALERT",
  119: "NEW",
  120: "CANCEL.COPY",
  121: "SHOW.CLIPBOARD",
  122: "MESSAGE",
  124: "PASTE.LINK",
  125: "APP.ACTIVATE",
  126: "DELETE.ARROW",
  127: "ROW.HEIGHT",
  128: "FORMAT.MOVE",
  129: "FORMAT.SIZE",
  130: "FORMULA.REPLACE",
  131: "SEND.KEYS",
  132: "SELECT.SPECIAL",
  133: "APPLY.NAMES",
  134: "REPLACE.FONT",
  135: "FREEZE.PANES",
  136: "SHOW.INFO",
  137: "SPLIT",
  138: "ON.WINDOW",
  139: "ON.DATA",
  140: "DISABLE.INPUT",
  142: "OUTLINE",
  143: "LIST.NAMES",
  144: "FILE.CLOSE",
  145: "SAVE.WORKBOOK",
  146: "DATA.FORM",
  147: "COPY.CHART",
  148: "ON.TIME",
  149: "WAIT",
  150: "FORMAT.FONT",
  151: "FILL.UP",
  152: "FILL.LEFT",
  153: "DELETE.OVERLAY",
  155: "SHORT.MENUS",
  159: "SET.UPDATE.STATUS",
  161: "COLOR.PALETTE",
  162: "DELETE.STYLE",
  163: "WINDOW.RESTORE",
  164: "WINDOW.MAXIMIZE",
  166: "CHANGE.LINK",
  167: "CALCULATE.DOCUMENT",
  168: "ON.KEY",
  169: "APP.RESTORE",
  170: "APP.MOVE",
  171: "APP.SIZE",
  172: "APP.MINIMIZE",
  173: "APP.MAXIMIZE",
  174: "BRING.TO.FRONT",
  175: "SEND.TO.BACK",
  185: "MAIN.CHART.TYPE",
  186: "OVERLAY.CHART.TYPE",
  187: "SELECT.END",
  188: "OPEN.MAIL",
  189: "SEND.MAIL",
  190: "STANDARD.FONT",
  191: "CONSOLIDATE",
  192: "SORT.SPECIAL",
  193: "GALLERY.3D.AREA",
  194: "GALLERY.3D.COLUMN",
  195: "GALLERY.3D.LINE",
  196: "GALLERY.3D.PIE",
  197: "VIEW.3D",
  198: "GOAL.SEEK",
  199: "WORKGROUP",
  200: "FILL.GROUP",
  201: "UPDATE.LINK",
  202: "PROMOTE",
  203: "DEMOTE",
  204: "SHOW.DETAIL",
  206: "UNGROUP",
  207: "OBJECT.PROPERTIES",
  208: "SAVE.NEW.OBJECT",
  209: "SHARE",
  210: "SHARE.NAME",
  211: "DUPLICATE",
  212: "APPLY.STYLE",
  213: "ASSIGN.TO.OBJECT",
  214: "OBJECT.PROTECTION",
  215: "HIDE.OBJECT",
  216: "SET.EXTRACT",
  217: "CREATE.PUBLISHER",
  218: "SUBSCRIBE.TO",
  219: "ATTRIBUTES",
  220: "SHOW.TOOLBAR",
  222: "PRINT.PREVIEW",
  223: "EDIT.COLOR",
  224: "SHOW.LEVELS",
  225: "FORMAT.MAIN",
  226: "FORMAT.OVERLAY",
  227: "ON.RECALC",
  228: "EDIT.SERIES",
  229: "DEFINE.STYLE",
  240: "LINE.PRINT",
  243: "ENTER.DATA",
  249: "GALLERY.RADAR",
  250: "MERGE.STYLES",
  251: "EDITION.OPTIONS",
  252: "PASTE.PICTURE",
  253: "PASTE.PICTURE.LINK",
  254: "SPELLING",
  256: "ZOOM",
  259: "INSERT.OBJECT",
  260: "WINDOW.MINIMIZE",
  265: "SOUND.NOTE",
  266: "SOUND.PLAY",
  267: "FORMAT.SHAPE",
  268: "EXTEND.POLYGON",
  269: "FORMAT.AUTO",
  272: "GALLERY.3D.BAR",
  273: "GALLERY.3D.SURFACE",
  274: "FILL.AUTO",
  276: "CUSTOMIZE.TOOLBAR",
  277: "ADD.TOOL",
  278: "EDIT.OBJECT",
  279: "ON.DOUBLECLICK",
  280: "ON.ENTRY",
  281: "WORKBOOK.ADD",
  282: "WORKBOOK.MOVE",
  283: "WORKBOOK.COPY",
  284: "WORKBOOK.OPTIONS",
  285: "SAVE.WORKSPACE",
  288: "CHART.WIZARD",
  289: "DELETE.TOOL",
  290: "MOVE.TOOL",
  291: "WORKBOOK.SELECT",
  292: "WORKBOOK.ACTIVATE",
  293: "ASSIGN.TO.TOOL",
  295: "COPY.TOOL",
  296: "RESET.TOOL",
  297: "CONSTRAIN.NUMERIC",
  298: "PASTE.TOOL",
  302: "WORKBOOK.NEW",
  305: "SCENARIO.CELLS",
  306: "SCENARIO.DELETE",
  307: "SCENARIO.ADD",
  308: "SCENARIO.EDIT",
  309: "SCENARIO.SHOW",
  310: "SCENARIO.SHOW.NEXT",
  311: "SCENARIO.SUMMARY",
  312: "PIVOT.TABLE.WIZARD",
  313: "PIVOT.FIELD.PROPERTIES",
  314: "PIVOT.FIELD",
  315: "PIVOT.ITEM",
  316: "PIVOT.ADD.FIELDS",
  318: "OPTIONS.CALCULATION",
  319: "OPTIONS.EDIT",
  320: "OPTIONS.VIEW",
  321: "ADDIN.MANAGER",
  322: "MENU.EDITOR",
  323: "ATTACH.TOOLBARS",
  324: "VBAActivate",
  325: "OPTIONS.CHART",
  328: "VBA.INSERT.FILE",
  330: "VBA.PROCEDURE.DEFINITION",
  336: "ROUTING.SLIP",
  338: "ROUTE.DOCUMENT",
  339: "MAIL.LOGON",
  342: "INSERT.PICTURE",
  343: "EDIT.TOOL",
  344: "GALLERY.DOUGHNUT",
  350: "CHART.TREND",
  352: "PIVOT.ITEM.PROPERTIES",
  354: "WORKBOOK.INSERT",
  355: "OPTIONS.TRANSITION",
  356: "OPTIONS.GENERAL",
  370: "FILTER.ADVANCED",
  373: "MAIL.ADD.MAILER",
  374: "MAIL.DELETE.MAILER",
  375: "MAIL.REPLY",
  376: "MAIL.REPLY.ALL",
  377: "MAIL.FORWARD",
  378: "MAIL.NEXT.LETTER",
  379: "DATA.LABEL",
  380: "INSERT.TITLE",
  381: "FONT.PROPERTIES",
  382: "MACRO.OPTIONS",
  383: "WORKBOOK.HIDE",
  384: "WORKBOOK.UNHIDE",
  385: "WORKBOOK.DELETE",
  386: "WORKBOOK.NAME",
  388: "GALLERY.CUSTOM",
  390: "ADD.CHART.AUTOFORMAT",
  391: "DELETE.CHART.AUTOFORMAT",
  392: "CHART.ADD.DATA",
  393: "AUTO.OUTLINE",
  394: "TAB.ORDER",
  395: "SHOW.DIALOG",
  396: "SELECT.ALL",
  397: "UNGROUP.SHEETS",
  398: "SUBTOTAL.CREATE",
  399: "SUBTOTAL.REMOVE",
  400: "RENAME.OBJECT",
  412: "WORKBOOK.SCROLL",
  413: "WORKBOOK.NEXT",
  414: "WORKBOOK.PREV",
  415: "WORKBOOK.TAB.SPLIT",
  416: "FULL.SCREEN",
  417: "WORKBOOK.PROTECT",
  420: "SCROLLBAR.PROPERTIES",
  421: "PIVOT.SHOW.PAGES",
  422: "TEXT.TO.COLUMNS",
  423: "FORMAT.CHARTTYPE",
  424: "LINK.FORMAT",
  425: "TRACER.DISPLAY",
  430: "TRACER.NAVIGATE",
  431: "TRACER.CLEAR",
  432: "TRACER.ERROR",
  433: "PIVOT.FIELD.GROUP",
  434: "PIVOT.FIELD.UNGROUP",
  435: "CHECKBOX.PROPERTIES",
  436: "LABEL.PROPERTIES",
  437: "LISTBOX.PROPERTIES",
  438: "EDITBOX.PROPERTIES",
  439: "PIVOT.REFRESH",
  440: "LINK.COMBO",
  441: "OPEN.TEXT",
  442: "HIDE.DIALOG",
  443: "SET.DIALOG.FOCUS",
  444: "ENABLE.OBJECT",
  445: "PUSHBUTTON.PROPERTIES",
  446: "SET.DIALOG.DEFAULT",
  447: "FILTER",
  448: "FILTER.SHOW.ALL",
  449: "CLEAR.OUTLINE",
  450: "FUNCTION.WIZARD",
  451: "ADD.LIST.ITEM",
  452: "SET.LIST.ITEM",
  453: "REMOVE.LIST.ITEM",
  454: "SELECT.LIST.ITEM",
  455: "SET.CONTROL.VALUE",
  456: "SAVE.COPY.AS",
  458: "OPTIONS.LISTS.ADD",
  459: "OPTIONS.LISTS.DELETE",
  460: "SERIES.AXES",
  461: "SERIES.X",
  462: "SERIES.Y",
  463: "ERRORBAR.X",
  464: "ERRORBAR.Y",
  465: "FORMAT.CHART",
  466: "SERIES.ORDER",
  467: "MAIL.LOGOFF",
  468: "CLEAR.ROUTING.SLIP",
  469: "APP.ACTIVATE.MICROSOFT",
  470: "MAIL.EDIT.MAILER",
  471: "ON.SHEET",
  472: "STANDARD.WIDTH",
  473: "SCENARIO.MERGE",
  474: "SUMMARY.INFO",
  475: "FIND.FILE",
  476: "ACTIVE.CELL.FONT",
  477: "ENABLE.TIPWIZARD",
  478: "VBA.MAKE.ADDIN",
  480: "INSERTDATATABLE",
  481: "WORKGROUP.OPTIONS",
  482: "MAIL.SEND.MAILER",
  485: "AUTOCORRECT",
  489: "POST.DOCUMENT",
  491: "PICKLIST",
  493: "VIEW.SHOW",
  494: "VIEW.DEFINE",
  495: "VIEW.DELETE",
  509: "SHEET.BACKGROUND",
  510: "INSERT.MAP.OBJECT",
  511: "OPTIONS.MENONO",
  517: "MSOCHECKS",
  518: "NORMAL",
  519: "LAYOUT",
  520: "RM.PRINT.AREA",
  521: "CLEAR.PRINT.AREA",
  522: "ADD.PRINT.AREA",
  523: "MOVE.BRK",
  545: "HIDECURR.NOTE",
  546: "HIDEALL.NOTES",
  547: "DELETE.NOTE",
  548: "TRAVERSE.NOTES",
  549: "ACTIVATE.NOTES",
  620: "PROTECT.REVISIONS",
  621: "UNPROTECT.REVISIONS",
  647: "OPTIONS.ME",
  653: "WEB.PUBLISH",
  667: "NEWWEBQUERY",
  673: "PIVOT.TABLE.CHART",
  753: "OPTIONS.SAVE",
  755: "OPTIONS.SPELL",
  808: "HIDEALL.INKANNOTS"
}, rs = {
  0: "COUNT",
  1: "IF",
  2: "ISNA",
  3: "ISERROR",
  4: "SUM",
  5: "AVERAGE",
  6: "MIN",
  7: "MAX",
  8: "ROW",
  9: "COLUMN",
  10: "NA",
  11: "NPV",
  12: "STDEV",
  13: "DOLLAR",
  14: "FIXED",
  15: "SIN",
  16: "COS",
  17: "TAN",
  18: "ATAN",
  19: "PI",
  20: "SQRT",
  21: "EXP",
  22: "LN",
  23: "LOG10",
  24: "ABS",
  25: "INT",
  26: "SIGN",
  27: "ROUND",
  28: "LOOKUP",
  29: "INDEX",
  30: "REPT",
  31: "MID",
  32: "LEN",
  33: "VALUE",
  34: "TRUE",
  35: "FALSE",
  36: "AND",
  37: "OR",
  38: "NOT",
  39: "MOD",
  40: "DCOUNT",
  41: "DSUM",
  42: "DAVERAGE",
  43: "DMIN",
  44: "DMAX",
  45: "DSTDEV",
  46: "VAR",
  47: "DVAR",
  48: "TEXT",
  49: "LINEST",
  50: "TREND",
  51: "LOGEST",
  52: "GROWTH",
  53: "GOTO",
  54: "HALT",
  55: "RETURN",
  56: "PV",
  57: "FV",
  58: "NPER",
  59: "PMT",
  60: "RATE",
  61: "MIRR",
  62: "IRR",
  63: "RAND",
  64: "MATCH",
  65: "DATE",
  66: "TIME",
  67: "DAY",
  68: "MONTH",
  69: "YEAR",
  70: "WEEKDAY",
  71: "HOUR",
  72: "MINUTE",
  73: "SECOND",
  74: "NOW",
  75: "AREAS",
  76: "ROWS",
  77: "COLUMNS",
  78: "OFFSET",
  79: "ABSREF",
  80: "RELREF",
  81: "ARGUMENT",
  82: "SEARCH",
  83: "TRANSPOSE",
  84: "ERROR",
  85: "STEP",
  86: "TYPE",
  87: "ECHO",
  88: "SET.NAME",
  89: "CALLER",
  90: "DEREF",
  91: "WINDOWS",
  92: "SERIES",
  93: "DOCUMENTS",
  94: "ACTIVE.CELL",
  95: "SELECTION",
  96: "RESULT",
  97: "ATAN2",
  98: "ASIN",
  99: "ACOS",
  100: "CHOOSE",
  101: "HLOOKUP",
  102: "VLOOKUP",
  103: "LINKS",
  104: "INPUT",
  105: "ISREF",
  106: "GET.FORMULA",
  107: "GET.NAME",
  108: "SET.VALUE",
  109: "LOG",
  110: "EXEC",
  111: "CHAR",
  112: "LOWER",
  113: "UPPER",
  114: "PROPER",
  115: "LEFT",
  116: "RIGHT",
  117: "EXACT",
  118: "TRIM",
  119: "REPLACE",
  120: "SUBSTITUTE",
  121: "CODE",
  122: "NAMES",
  123: "DIRECTORY",
  124: "FIND",
  125: "CELL",
  126: "ISERR",
  127: "ISTEXT",
  128: "ISNUMBER",
  129: "ISBLANK",
  130: "T",
  131: "N",
  132: "FOPEN",
  133: "FCLOSE",
  134: "FSIZE",
  135: "FREADLN",
  136: "FREAD",
  137: "FWRITELN",
  138: "FWRITE",
  139: "FPOS",
  140: "DATEVALUE",
  141: "TIMEVALUE",
  142: "SLN",
  143: "SYD",
  144: "DDB",
  145: "GET.DEF",
  146: "REFTEXT",
  147: "TEXTREF",
  148: "INDIRECT",
  149: "REGISTER",
  150: "CALL",
  151: "ADD.BAR",
  152: "ADD.MENU",
  153: "ADD.COMMAND",
  154: "ENABLE.COMMAND",
  155: "CHECK.COMMAND",
  156: "RENAME.COMMAND",
  157: "SHOW.BAR",
  158: "DELETE.MENU",
  159: "DELETE.COMMAND",
  160: "GET.CHART.ITEM",
  161: "DIALOG.BOX",
  162: "CLEAN",
  163: "MDETERM",
  164: "MINVERSE",
  165: "MMULT",
  166: "FILES",
  167: "IPMT",
  168: "PPMT",
  169: "COUNTA",
  170: "CANCEL.KEY",
  171: "FOR",
  172: "WHILE",
  173: "BREAK",
  174: "NEXT",
  175: "INITIATE",
  176: "REQUEST",
  177: "POKE",
  178: "EXECUTE",
  179: "TERMINATE",
  180: "RESTART",
  181: "HELP",
  182: "GET.BAR",
  183: "PRODUCT",
  184: "FACT",
  185: "GET.CELL",
  186: "GET.WORKSPACE",
  187: "GET.WINDOW",
  188: "GET.DOCUMENT",
  189: "DPRODUCT",
  190: "ISNONTEXT",
  191: "GET.NOTE",
  192: "NOTE",
  193: "STDEVP",
  194: "VARP",
  195: "DSTDEVP",
  196: "DVARP",
  197: "TRUNC",
  198: "ISLOGICAL",
  199: "DCOUNTA",
  200: "DELETE.BAR",
  201: "UNREGISTER",
  204: "USDOLLAR",
  205: "FINDB",
  206: "SEARCHB",
  207: "REPLACEB",
  208: "LEFTB",
  209: "RIGHTB",
  210: "MIDB",
  211: "LENB",
  212: "ROUNDUP",
  213: "ROUNDDOWN",
  214: "ASC",
  215: "DBCS",
  216: "RANK",
  219: "ADDRESS",
  220: "DAYS360",
  221: "TODAY",
  222: "VDB",
  223: "ELSE",
  224: "ELSE.IF",
  225: "END.IF",
  226: "FOR.CELL",
  227: "MEDIAN",
  228: "SUMPRODUCT",
  229: "SINH",
  230: "COSH",
  231: "TANH",
  232: "ASINH",
  233: "ACOSH",
  234: "ATANH",
  235: "DGET",
  236: "CREATE.OBJECT",
  237: "VOLATILE",
  238: "LAST.ERROR",
  239: "CUSTOM.UNDO",
  240: "CUSTOM.REPEAT",
  241: "FORMULA.CONVERT",
  242: "GET.LINK.INFO",
  243: "TEXT.BOX",
  244: "INFO",
  245: "GROUP",
  246: "GET.OBJECT",
  247: "DB",
  248: "PAUSE",
  251: "RESUME",
  252: "FREQUENCY",
  253: "ADD.TOOLBAR",
  254: "DELETE.TOOLBAR",
  255: "User",
  256: "RESET.TOOLBAR",
  257: "EVALUATE",
  258: "GET.TOOLBAR",
  259: "GET.TOOL",
  260: "SPELLING.CHECK",
  261: "ERROR.TYPE",
  262: "APP.TITLE",
  263: "WINDOW.TITLE",
  264: "SAVE.TOOLBAR",
  265: "ENABLE.TOOL",
  266: "PRESS.TOOL",
  267: "REGISTER.ID",
  268: "GET.WORKBOOK",
  269: "AVEDEV",
  270: "BETADIST",
  271: "GAMMALN",
  272: "BETAINV",
  273: "BINOMDIST",
  274: "CHIDIST",
  275: "CHIINV",
  276: "COMBIN",
  277: "CONFIDENCE",
  278: "CRITBINOM",
  279: "EVEN",
  280: "EXPONDIST",
  281: "FDIST",
  282: "FINV",
  283: "FISHER",
  284: "FISHERINV",
  285: "FLOOR",
  286: "GAMMADIST",
  287: "GAMMAINV",
  288: "CEILING",
  289: "HYPGEOMDIST",
  290: "LOGNORMDIST",
  291: "LOGINV",
  292: "NEGBINOMDIST",
  293: "NORMDIST",
  294: "NORMSDIST",
  295: "NORMINV",
  296: "NORMSINV",
  297: "STANDARDIZE",
  298: "ODD",
  299: "PERMUT",
  300: "POISSON",
  301: "TDIST",
  302: "WEIBULL",
  303: "SUMXMY2",
  304: "SUMX2MY2",
  305: "SUMX2PY2",
  306: "CHITEST",
  307: "CORREL",
  308: "COVAR",
  309: "FORECAST",
  310: "FTEST",
  311: "INTERCEPT",
  312: "PEARSON",
  313: "RSQ",
  314: "STEYX",
  315: "SLOPE",
  316: "TTEST",
  317: "PROB",
  318: "DEVSQ",
  319: "GEOMEAN",
  320: "HARMEAN",
  321: "SUMSQ",
  322: "KURT",
  323: "SKEW",
  324: "ZTEST",
  325: "LARGE",
  326: "SMALL",
  327: "QUARTILE",
  328: "PERCENTILE",
  329: "PERCENTRANK",
  330: "MODE",
  331: "TRIMMEAN",
  332: "TINV",
  334: "MOVIE.COMMAND",
  335: "GET.MOVIE",
  336: "CONCATENATE",
  337: "POWER",
  338: "PIVOT.ADD.DATA",
  339: "GET.PIVOT.TABLE",
  340: "GET.PIVOT.FIELD",
  341: "GET.PIVOT.ITEM",
  342: "RADIANS",
  343: "DEGREES",
  344: "SUBTOTAL",
  345: "SUMIF",
  346: "COUNTIF",
  347: "COUNTBLANK",
  348: "SCENARIO.GET",
  349: "OPTIONS.LISTS.GET",
  350: "ISPMT",
  351: "DATEDIF",
  352: "DATESTRING",
  353: "NUMBERSTRING",
  354: "ROMAN",
  355: "OPEN.DIALOG",
  356: "SAVE.DIALOG",
  357: "VIEW.GET",
  358: "GETPIVOTDATA",
  359: "HYPERLINK",
  360: "PHONETIC",
  361: "AVERAGEA",
  362: "MAXA",
  363: "MINA",
  364: "STDEVPA",
  365: "VARPA",
  366: "STDEVA",
  367: "VARA",
  368: "BAHTTEXT",
  369: "THAIDAYOFWEEK",
  370: "THAIDIGIT",
  371: "THAIMONTHOFYEAR",
  372: "THAINUMSOUND",
  373: "THAINUMSTRING",
  374: "THAISTRINGLENGTH",
  375: "ISTHAIDIGIT",
  376: "ROUNDBAHTDOWN",
  377: "ROUNDBAHTUP",
  378: "THAIYEAR",
  379: "RTD",
  380: "CUBEVALUE",
  381: "CUBEMEMBER",
  382: "CUBEMEMBERPROPERTY",
  383: "CUBERANKEDMEMBER",
  384: "HEX2BIN",
  385: "HEX2DEC",
  386: "HEX2OCT",
  387: "DEC2BIN",
  388: "DEC2HEX",
  389: "DEC2OCT",
  390: "OCT2BIN",
  391: "OCT2HEX",
  392: "OCT2DEC",
  393: "BIN2DEC",
  394: "BIN2OCT",
  395: "BIN2HEX",
  396: "IMSUB",
  397: "IMDIV",
  398: "IMPOWER",
  399: "IMABS",
  400: "IMSQRT",
  401: "IMLN",
  402: "IMLOG2",
  403: "IMLOG10",
  404: "IMSIN",
  405: "IMCOS",
  406: "IMEXP",
  407: "IMARGUMENT",
  408: "IMCONJUGATE",
  409: "IMAGINARY",
  410: "IMREAL",
  411: "COMPLEX",
  412: "IMSUM",
  413: "IMPRODUCT",
  414: "SERIESSUM",
  415: "FACTDOUBLE",
  416: "SQRTPI",
  417: "QUOTIENT",
  418: "DELTA",
  419: "GESTEP",
  420: "ISEVEN",
  421: "ISODD",
  422: "MROUND",
  423: "ERF",
  424: "ERFC",
  425: "BESSELJ",
  426: "BESSELK",
  427: "BESSELY",
  428: "BESSELI",
  429: "XIRR",
  430: "XNPV",
  431: "PRICEMAT",
  432: "YIELDMAT",
  433: "INTRATE",
  434: "RECEIVED",
  435: "DISC",
  436: "PRICEDISC",
  437: "YIELDDISC",
  438: "TBILLEQ",
  439: "TBILLPRICE",
  440: "TBILLYIELD",
  441: "PRICE",
  442: "YIELD",
  443: "DOLLARDE",
  444: "DOLLARFR",
  445: "NOMINAL",
  446: "EFFECT",
  447: "CUMPRINC",
  448: "CUMIPMT",
  449: "EDATE",
  450: "EOMONTH",
  451: "YEARFRAC",
  452: "COUPDAYBS",
  453: "COUPDAYS",
  454: "COUPDAYSNC",
  455: "COUPNCD",
  456: "COUPNUM",
  457: "COUPPCD",
  458: "DURATION",
  459: "MDURATION",
  460: "ODDLPRICE",
  461: "ODDLYIELD",
  462: "ODDFPRICE",
  463: "ODDFYIELD",
  464: "RANDBETWEEN",
  465: "WEEKNUM",
  466: "AMORDEGRC",
  467: "AMORLINC",
  468: "CONVERT",
  724: "SHEETJS",
  469: "ACCRINT",
  470: "ACCRINTM",
  471: "WORKDAY",
  472: "NETWORKDAYS",
  473: "GCD",
  474: "MULTINOMIAL",
  475: "LCM",
  476: "FVSCHEDULE",
  477: "CUBEKPIMEMBER",
  478: "CUBESET",
  479: "CUBESETCOUNT",
  480: "IFERROR",
  481: "COUNTIFS",
  482: "SUMIFS",
  483: "AVERAGEIF",
  484: "AVERAGEIFS"
}, f1 = {
  2: 1,
  3: 1,
  10: 0,
  15: 1,
  16: 1,
  17: 1,
  18: 1,
  19: 0,
  20: 1,
  21: 1,
  22: 1,
  23: 1,
  24: 1,
  25: 1,
  26: 1,
  27: 2,
  30: 2,
  31: 3,
  32: 1,
  33: 1,
  34: 0,
  35: 0,
  38: 1,
  39: 2,
  40: 3,
  41: 3,
  42: 3,
  43: 3,
  44: 3,
  45: 3,
  47: 3,
  48: 2,
  53: 1,
  61: 3,
  63: 0,
  65: 3,
  66: 3,
  67: 1,
  68: 1,
  69: 1,
  70: 1,
  71: 1,
  72: 1,
  73: 1,
  74: 0,
  75: 1,
  76: 1,
  77: 1,
  79: 2,
  80: 2,
  83: 1,
  85: 0,
  86: 1,
  89: 0,
  90: 1,
  94: 0,
  95: 0,
  97: 2,
  98: 1,
  99: 1,
  101: 3,
  102: 3,
  105: 1,
  106: 1,
  108: 2,
  111: 1,
  112: 1,
  113: 1,
  114: 1,
  117: 2,
  118: 1,
  119: 4,
  121: 1,
  126: 1,
  127: 1,
  128: 1,
  129: 1,
  130: 1,
  131: 1,
  133: 1,
  134: 1,
  135: 1,
  136: 2,
  137: 2,
  138: 2,
  140: 1,
  141: 1,
  142: 3,
  143: 4,
  144: 4,
  161: 1,
  162: 1,
  163: 1,
  164: 1,
  165: 2,
  172: 1,
  175: 2,
  176: 2,
  177: 3,
  178: 2,
  179: 1,
  184: 1,
  186: 1,
  189: 3,
  190: 1,
  195: 3,
  196: 3,
  197: 1,
  198: 1,
  199: 3,
  201: 1,
  207: 4,
  210: 3,
  211: 1,
  212: 2,
  213: 2,
  214: 1,
  215: 1,
  225: 0,
  229: 1,
  230: 1,
  231: 1,
  232: 1,
  233: 1,
  234: 1,
  235: 3,
  244: 1,
  247: 4,
  252: 2,
  257: 1,
  261: 1,
  271: 1,
  273: 4,
  274: 2,
  275: 2,
  276: 2,
  277: 3,
  278: 3,
  279: 1,
  280: 3,
  281: 3,
  282: 3,
  283: 1,
  284: 1,
  285: 2,
  286: 4,
  287: 3,
  288: 2,
  289: 4,
  290: 3,
  291: 3,
  292: 3,
  293: 4,
  294: 1,
  295: 3,
  296: 1,
  297: 3,
  298: 1,
  299: 2,
  300: 3,
  301: 3,
  302: 4,
  303: 2,
  304: 2,
  305: 2,
  306: 2,
  307: 2,
  308: 2,
  309: 3,
  310: 2,
  311: 2,
  312: 2,
  313: 2,
  314: 2,
  315: 2,
  316: 4,
  325: 2,
  326: 2,
  327: 2,
  328: 2,
  331: 2,
  332: 2,
  337: 2,
  342: 1,
  343: 1,
  346: 2,
  347: 1,
  350: 4,
  351: 3,
  352: 1,
  353: 2,
  360: 1,
  368: 1,
  369: 1,
  370: 1,
  371: 1,
  372: 1,
  373: 1,
  374: 1,
  375: 1,
  376: 1,
  377: 1,
  378: 1,
  382: 3,
  385: 1,
  392: 1,
  393: 1,
  396: 2,
  397: 2,
  398: 2,
  399: 1,
  400: 1,
  401: 1,
  402: 1,
  403: 1,
  404: 1,
  405: 1,
  406: 1,
  407: 1,
  408: 1,
  409: 1,
  410: 1,
  414: 4,
  415: 1,
  416: 1,
  417: 2,
  420: 1,
  421: 1,
  422: 2,
  424: 1,
  425: 2,
  426: 2,
  427: 2,
  428: 2,
  430: 3,
  438: 3,
  439: 3,
  440: 3,
  443: 2,
  444: 2,
  445: 2,
  446: 2,
  447: 6,
  448: 6,
  449: 2,
  450: 2,
  464: 2,
  468: 3,
  476: 2,
  479: 1,
  480: 2,
  65535: 0
};
function wn(e) {
  return e.slice(0, 3) == "of:" && (e = e.slice(3)), e.charCodeAt(0) == 61 && (e = e.slice(1), e.charCodeAt(0) == 61 && (e = e.slice(1))), e = e.replace(/COM\.MICROSOFT\./g, ""), e = e.replace(/\[((?:\.[A-Z]+[0-9]+)(?::\.[A-Z]+[0-9]+)?)\]/g, function(a, r) {
    return r.replace(/\./g, "");
  }), e = e.replace(/\[.(#[A-Z]*[?!])\]/g, "$1"), e.replace(/[;~]/g, ",").replace(/\|/g, ";");
}
function Ut(e) {
  var a = e.split(":"), r = a[0].split(".")[0];
  return [r, a[0].split(".")[1] + (a.length > 1 ? ":" + (a[1].split(".")[1] || a[1].split(".")[0]) : "")];
}
var Wa = {}, Ta = {};
function Va(e, a) {
  if (e) {
    var r = [0.7, 0.7, 0.75, 0.75, 0.3, 0.3];
    a == "xlml" && (r = [1, 1, 1, 1, 0.5, 0.5]), e.left == null && (e.left = r[0]), e.right == null && (e.right = r[1]), e.top == null && (e.top = r[2]), e.bottom == null && (e.bottom = r[3]), e.header == null && (e.header = r[4]), e.footer == null && (e.footer = r[5]);
  }
}
function as(e, a, r, n, t, i) {
  try {
    n.cellNF && (e.z = Ee[a]);
  } catch (c) {
    if (n.WTF) throw c;
  }
  if (!(e.t === "z" && !n.cellStyles)) {
    if (e.t === "d" && typeof e.v == "string" && (e.v = qe(e.v)), (!n || n.cellText !== !1) && e.t !== "z") try {
      if (Ee[a] == null && ta(cc[a] || "General", a), e.t === "e") e.w = e.w || ha[e.v];
      else if (a === 0)
        if (e.t === "n")
          (e.v | 0) === e.v ? e.w = e.v.toString(10) : e.w = za(e.v);
        else if (e.t === "d") {
          var s = pr(e.v);
          (s | 0) === s ? e.w = s.toString(10) : e.w = za(s);
        } else {
          if (e.v === void 0) return "";
          e.w = ia(e.v, Ta);
        }
      else e.t === "d" ? e.w = Fr(a, pr(e.v), Ta) : e.w = Fr(a, e.v, Ta);
    } catch (c) {
      if (n.WTF) throw c;
    }
    if (n.cellStyles && r != null)
      try {
        e.s = i.Fills[r], e.s.fgColor && e.s.fgColor.theme && !e.s.fgColor.rgb && (e.s.fgColor.rgb = wt(t.themeElements.clrScheme[e.s.fgColor.theme].rgb, e.s.fgColor.tint || 0), n.WTF && (e.s.fgColor.raw_rgb = t.themeElements.clrScheme[e.s.fgColor.theme].rgb)), e.s.bgColor && e.s.bgColor.theme && (e.s.bgColor.rgb = wt(t.themeElements.clrScheme[e.s.bgColor.theme].rgb, e.s.bgColor.tint || 0), n.WTF && (e.s.bgColor.raw_rgb = t.themeElements.clrScheme[e.s.bgColor.theme].rgb));
      } catch (c) {
        if (n.WTF && i.Fills) throw c;
      }
  }
}
function o1(e, a) {
  var r = Ue(a);
  r.s.r <= r.e.r && r.s.c <= r.e.c && r.s.r >= 0 && r.s.c >= 0 && (e["!ref"] = Se(r));
}
var l1 = /<(?:\w:)?mergeCell ref="[A-Z0-9:]+"\s*[\/]?>/g, u1 = /<(?:\w+:)?sheetData[^>]*>([\s\S]*)<\/(?:\w+:)?sheetData>/, h1 = /<(?:\w:)?hyperlink [^>]*>/mg, x1 = /"(\w*:\w*)"/, d1 = /<(?:\w:)?col\b[^>]*[\/]?>/g, p1 = /<(?:\w:)?autoFilter[^>]*([\/]|>([\s\S]*)<\/(?:\w:)?autoFilter)>/g, v1 = /<(?:\w:)?pageMargins[^>]*\/>/g, ts = /<(?:\w:)?sheetPr\b(?:[^>a-z][^>]*)?\/>/, g1 = /<(?:\w:)?sheetPr[^>]*(?:[\/]|>([\s\S]*)<\/(?:\w:)?sheetPr)>/, m1 = /<(?:\w:)?sheetViews[^>]*(?:[\/]|>([\s\S]*)<\/(?:\w:)?sheetViews)>/;
function _1(e, a, r, n, t, i, s) {
  if (!e) return e;
  n || (n = { "!id": {} });
  var c = a.dense ? [] : {}, o = { s: { r: 2e6, c: 2e6 }, e: { r: 0, c: 0 } }, f = "", l = "", u = e.match(u1);
  u ? (f = e.slice(0, u.index), l = e.slice(u.index + u[0].length)) : f = l = e;
  var h = f.match(ts);
  h ? E0(h[0], c, t, r) : (h = f.match(g1)) && E1(h[0], h[1] || "", c, t, r);
  var d = (f.match(/<(?:\w*:)?dimension/) || { index: -1 }).index;
  if (d > 0) {
    var p = f.slice(d, d + 50).match(x1);
    p && o1(c, p[1]);
  }
  var x = f.match(m1);
  x && x[1] && S1(x[1], t);
  var g = [];
  if (a.cellStyles) {
    var O = f.match(d1);
    O && w1(g, O);
  }
  u && C1(u[1], c, a, o, i, s);
  var I = l.match(p1);
  I && (c["!autofilter"] = A1(I[0]));
  var T = [], U = l.match(l1);
  if (U) for (d = 0; d != U.length; ++d)
    T[d] = Ue(U[d].slice(U[d].indexOf('"') + 1));
  var V = l.match(h1);
  V && T1(c, V, n);
  var B = l.match(v1);
  if (B && (c["!margins"] = k1(ge(B[0]))), !c["!ref"] && o.e.c >= o.s.c && o.e.r >= o.s.r && (c["!ref"] = Se(o)), a.sheetRows > 0 && c["!ref"]) {
    var A = Ue(c["!ref"]);
    a.sheetRows <= +A.e.r && (A.e.r = a.sheetRows - 1, A.e.r > o.e.r && (A.e.r = o.e.r), A.e.r < A.s.r && (A.s.r = A.e.r), A.e.c > o.e.c && (A.e.c = o.e.c), A.e.c < A.s.c && (A.s.c = A.e.c), c["!fullref"] = c["!ref"], c["!ref"] = Se(A));
  }
  return g.length > 0 && (c["!cols"] = g), T.length > 0 && (c["!merges"] = T), c;
}
function E0(e, a, r, n) {
  var t = ge(e);
  r.Sheets[n] || (r.Sheets[n] = {}), t.codeName && (r.Sheets[n].CodeName = Ce(Re(t.codeName)));
}
function E1(e, a, r, n, t) {
  E0(e.slice(0, e.indexOf(">")), r, n, t);
}
function T1(e, a, r) {
  for (var n = Array.isArray(e), t = 0; t != a.length; ++t) {
    var i = ge(Re(a[t]), !0);
    if (!i.ref) return;
    var s = ((r || {})["!id"] || [])[i.id];
    s ? (i.Target = s.Target, i.location && (i.Target += "#" + Ce(i.location))) : (i.Target = "#" + Ce(i.location), s = { Target: i.Target, TargetMode: "Internal" }), i.Rel = s, i.tooltip && (i.Tooltip = i.tooltip, delete i.tooltip);
    for (var c = Ue(i.ref), o = c.s.r; o <= c.e.r; ++o) for (var f = c.s.c; f <= c.e.c; ++f) {
      var l = me({ c: f, r: o });
      n ? (e[o] || (e[o] = []), e[o][f] || (e[o][f] = { t: "z", v: void 0 }), e[o][f].l = i) : (e[l] || (e[l] = { t: "z", v: void 0 }), e[l].l = i);
    }
  }
}
function k1(e) {
  var a = {};
  return ["left", "right", "top", "bottom", "header", "footer"].forEach(function(r) {
    e[r] && (a[r] = parseFloat(e[r]));
  }), a;
}
function w1(e, a) {
  for (var r = !1, n = 0; n != a.length; ++n) {
    var t = ge(a[n], !0);
    t.hidden && (t.hidden = Pe(t.hidden));
    var i = parseInt(t.min, 10) - 1, s = parseInt(t.max, 10) - 1;
    for (t.outlineLevel && (t.level = +t.outlineLevel || 0), delete t.min, delete t.max, t.width = +t.width, !r && t.width && (r = !0, m0(t.width)), wa(t); i <= s; ) e[i++] = Qe(t);
  }
}
function A1(e) {
  var a = { ref: (e.match(/ref="([^"]*)"/) || [])[1] };
  return a;
}
var F1 = /<(?:\w:)?sheetView(?:[^>a-z][^>]*)?\/?>/;
function S1(e, a) {
  a.Views || (a.Views = [{}]), (e.match(F1) || []).forEach(function(r, n) {
    var t = ge(r);
    a.Views[n] || (a.Views[n] = {}), +t.zoomScale && (a.Views[n].zoom = +t.zoomScale), Pe(t.rightToLeft) && (a.Views[n].RTL = !0);
  });
}
var C1 = /* @__PURE__ */ (function() {
  var e = /<(?:\w+:)?c[ \/>]/, a = /<\/(?:\w+:)?row>/, r = /r=["']([^"']*)["']/, n = /<(?:\w+:)?is>([\S\s]*?)<\/(?:\w+:)?is>/, t = /ref=["']([^"']*)["']/, i = $a("v"), s = $a("f");
  return function(o, f, l, u, h, d) {
    for (var p = 0, x = "", g = [], O = [], I = 0, T = 0, U = 0, V = "", B, A, _ = 0, m = 0, R, L, D = 0, z = 0, ie = Array.isArray(d.CellXf), re, fe = [], q = [], ve = Array.isArray(f), M = [], he = {}, te = !1, w = !!l.sheetStubs, P = o.split(a), b = 0, N = P.length; b != N; ++b) {
      x = P[b].trim();
      var K = x.length;
      if (K !== 0) {
        var ee = 0;
        e: for (p = 0; p < K; ++p) switch (
          /*x.charCodeAt(ri)*/
          x[p]
        ) {
          case ">":
            if (
              /*x.charCodeAt(ri-1) != 47*/
              x[p - 1] != "/"
            ) {
              ++p;
              break e;
            }
            if (l && l.cellStyles) {
              if (A = ge(x.slice(ee, p), !0), _ = A.r != null ? parseInt(A.r, 10) : _ + 1, m = -1, l.sheetRows && l.sheetRows < _) continue;
              he = {}, te = !1, A.ht && (te = !0, he.hpt = parseFloat(A.ht), he.hpx = Ja(he.hpt)), A.hidden == "1" && (te = !0, he.hidden = !0), A.outlineLevel != null && (te = !0, he.level = +A.outlineLevel), te && (M[_ - 1] = he);
            }
            break;
          case "<":
            ee = p;
            break;
        }
        if (ee >= p) break;
        if (A = ge(x.slice(ee, p), !0), _ = A.r != null ? parseInt(A.r, 10) : _ + 1, m = -1, !(l.sheetRows && l.sheetRows < _)) {
          u.s.r > _ - 1 && (u.s.r = _ - 1), u.e.r < _ - 1 && (u.e.r = _ - 1), l && l.cellStyles && (he = {}, te = !1, A.ht && (te = !0, he.hpt = parseFloat(A.ht), he.hpx = Ja(he.hpt)), A.hidden == "1" && (te = !0, he.hidden = !0), A.outlineLevel != null && (te = !0, he.level = +A.outlineLevel), te && (M[_ - 1] = he)), g = x.slice(p).split(e);
          for (var Z = 0; Z != g.length && g[Z].trim().charAt(0) == "<"; ++Z) ;
          for (g = g.slice(Z), p = 0; p != g.length; ++p)
            if (x = g[p].trim(), x.length !== 0) {
              if (O = x.match(r), I = p, T = 0, U = 0, x = "<c " + (x.slice(0, 1) == "<" ? ">" : "") + x, O != null && O.length === 2) {
                for (I = 0, V = O[1], T = 0; T != V.length && !((U = V.charCodeAt(T) - 64) < 1 || U > 26); ++T)
                  I = 26 * I + U;
                --I, m = I;
              } else ++m;
              for (T = 0; T != x.length && x.charCodeAt(T) !== 62; ++T) ;
              if (++T, A = ge(x.slice(0, T), !0), A.r || (A.r = me({ r: _ - 1, c: m })), V = x.slice(T), B = { t: "" }, (O = V.match(i)) != null && /*::cref != null && */
              O[1] !== "" && (B.v = Ce(O[1])), l.cellFormula) {
                if ((O = V.match(s)) != null && /*::cref != null && */
                O[1] !== "") {
                  if (B.f = Ce(Re(O[1])).replace(/\r\n/g, `
`), l.xlfn || (B.f = _n(B.f)), /*::cref != null && cref[0] != null && */
                  O[0].indexOf('t="array"') > -1)
                    B.F = (V.match(t) || [])[1], B.F.indexOf(":") > -1 && fe.push([Ue(B.F), B.F]);
                  else if (
                    /*::cref != null && cref[0] != null && */
                    O[0].indexOf('t="shared"') > -1
                  ) {
                    L = ge(O[0]);
                    var J = Ce(Re(O[1]));
                    l.xlfn || (J = _n(J)), q[parseInt(L.si, 10)] = [L, J, A.r];
                  }
                } else (O = V.match(/<f[^>]*\/>/)) && (L = ge(O[0]), q[L.si] && (B.f = Bu(q[L.si][1], q[L.si][2], A.r)));
                var j = xr(A.r);
                for (T = 0; T < fe.length; ++T)
                  j.r >= fe[T][0].s.r && j.r <= fe[T][0].e.r && j.c >= fe[T][0].s.c && j.c <= fe[T][0].e.c && (B.F = fe[T][1]);
              }
              if (A.t == null && B.v === void 0)
                if (B.f || B.F)
                  B.v = 0, B.t = "n";
                else if (w) B.t = "z";
                else continue;
              else B.t = A.t || "n";
              switch (u.s.c > m && (u.s.c = m), u.e.c < m && (u.e.c = m), B.t) {
                case "n":
                  if (B.v == "" || B.v == null) {
                    if (!w) continue;
                    B.t = "z";
                  } else B.v = parseFloat(B.v);
                  break;
                case "s":
                  if (typeof B.v > "u") {
                    if (!w) continue;
                    B.t = "z";
                  } else
                    R = Wa[parseInt(B.v, 10)], B.v = R.t, B.r = R.r, l.cellHTML && (B.h = R.h);
                  break;
                case "str":
                  B.t = "s", B.v = B.v != null ? Re(B.v) : "", l.cellHTML && (B.h = c0(B.v));
                  break;
                case "inlineStr":
                  O = V.match(n), B.t = "s", O != null && (R = g0(O[1])) ? (B.v = R.t, l.cellHTML && (B.h = R.h)) : B.v = "";
                  break;
                case "b":
                  B.v = Pe(B.v);
                  break;
                case "d":
                  l.cellDates ? B.v = qe(B.v, 1) : (B.v = pr(qe(B.v, 1)), B.t = "n");
                  break;
                /* error string in .w, number in .v */
                case "e":
                  (!l || l.cellText !== !1) && (B.w = B.v), B.v = Ai[B.v];
                  break;
              }
              if (D = z = 0, re = null, ie && A.s !== void 0 && (re = d.CellXf[A.s], re != null && (re.numFmtId != null && (D = re.numFmtId), l.cellStyles && re.fillId != null && (z = re.fillId))), as(B, D, z, l, h, d), l.cellDates && ie && B.t == "n" && Fa(Ee[D]) && (B.t = "d", B.v = Ct(B.v)), A.cm && l.xlmeta) {
                var se = (l.xlmeta.Cell || [])[+A.cm - 1];
                se && se.type == "XLDAPR" && (B.D = !0);
              }
              if (ve) {
                var C = xr(A.r);
                f[C.r] || (f[C.r] = []), f[C.r][C.c] = B;
              } else f[A.r] = B;
            }
        }
      }
    }
    M.length > 0 && (f["!rows"] = M);
  };
})();
function y1(e, a) {
  var r = {}, n = e.l + a;
  r.r = e.read_shift(4), e.l += 4;
  var t = e.read_shift(2);
  e.l += 1;
  var i = e.read_shift(1);
  return e.l = n, i & 7 && (r.level = i & 7), i & 16 && (r.hidden = !0), i & 32 && (r.hpt = t / 20), r;
}
var O1 = ua;
function D1() {
}
function R1(e, a) {
  var r = {}, n = e[e.l];
  return ++e.l, r.above = !(n & 64), r.left = !(n & 128), e.l += 18, r.name = qc(e), r;
}
function I1(e) {
  var a = Sr(e);
  return [a];
}
function N1(e) {
  var a = la(e);
  return [a];
}
function P1(e) {
  var a = Sr(e), r = e.read_shift(1);
  return [a, r, "b"];
}
function L1(e) {
  var a = la(e), r = e.read_shift(1);
  return [a, r, "b"];
}
function b1(e) {
  var a = Sr(e), r = e.read_shift(1);
  return [a, r, "e"];
}
function M1(e) {
  var a = la(e), r = e.read_shift(1);
  return [a, r, "e"];
}
function B1(e) {
  var a = Sr(e), r = e.read_shift(4);
  return [a, r, "s"];
}
function U1(e) {
  var a = la(e), r = e.read_shift(4);
  return [a, r, "s"];
}
function H1(e) {
  var a = Sr(e), r = sr(e);
  return [a, r, "n"];
}
function ns(e) {
  var a = la(e), r = sr(e);
  return [a, r, "n"];
}
function W1(e) {
  var a = Sr(e), r = d0(e);
  return [a, r, "n"];
}
function V1(e) {
  var a = la(e), r = d0(e);
  return [a, r, "n"];
}
function G1(e) {
  var a = Sr(e), r = h0(e);
  return [a, r, "is"];
}
function X1(e) {
  var a = Sr(e), r = fr(e);
  return [a, r, "str"];
}
function z1(e) {
  var a = la(e), r = fr(e);
  return [a, r, "str"];
}
function $1(e, a, r) {
  var n = e.l + a, t = Sr(e);
  t.r = r["!row"];
  var i = e.read_shift(1), s = [t, i, "b"];
  if (r.cellFormula) {
    e.l += 2;
    var c = Dt(e, n - e.l, r);
    s[3] = ir(c, null, t, r.supbooks, r);
  } else e.l = n;
  return s;
}
function K1(e, a, r) {
  var n = e.l + a, t = Sr(e);
  t.r = r["!row"];
  var i = e.read_shift(1), s = [t, i, "e"];
  if (r.cellFormula) {
    e.l += 2;
    var c = Dt(e, n - e.l, r);
    s[3] = ir(c, null, t, r.supbooks, r);
  } else e.l = n;
  return s;
}
function Y1(e, a, r) {
  var n = e.l + a, t = Sr(e);
  t.r = r["!row"];
  var i = sr(e), s = [t, i, "n"];
  if (r.cellFormula) {
    e.l += 2;
    var c = Dt(e, n - e.l, r);
    s[3] = ir(c, null, t, r.supbooks, r);
  } else e.l = n;
  return s;
}
function j1(e, a, r) {
  var n = e.l + a, t = Sr(e);
  t.r = r["!row"];
  var i = fr(e), s = [t, i, "str"];
  if (r.cellFormula) {
    e.l += 2;
    var c = Dt(e, n - e.l, r);
    s[3] = ir(c, null, t, r.supbooks, r);
  } else e.l = n;
  return s;
}
var J1 = ua;
function q1(e, a) {
  var r = e.l + a, n = ua(e), t = x0(e), i = fr(e), s = fr(e), c = fr(e);
  e.l = r;
  var o = { rfx: n, relId: t, loc: i, display: c };
  return s && (o.Tooltip = s), o;
}
function Z1() {
}
function Q1(e, a, r) {
  var n = e.l + a, t = Ti(e), i = e.read_shift(1), s = [t];
  if (s[2] = i, r.cellFormula) {
    var c = n1(e, n - e.l, r);
    s[1] = c;
  } else e.l = n;
  return s;
}
function ex(e, a, r) {
  var n = e.l + a, t = ua(e), i = [t];
  if (r.cellFormula) {
    var s = s1(e, n - e.l, r);
    i[1] = s, e.l = n;
  } else e.l = n;
  return i;
}
var rx = ["left", "right", "top", "bottom", "header", "footer"];
function ax(e) {
  var a = {};
  return rx.forEach(function(r) {
    a[r] = sr(e);
  }), a;
}
function tx(e) {
  var a = e.read_shift(2);
  return e.l += 28, { RTL: a & 32 };
}
function nx() {
}
function ix() {
}
function sx(e, a, r, n, t, i, s) {
  if (!e) return e;
  var c = a || {};
  n || (n = { "!id": {} });
  var o = c.dense ? [] : {}, f, l = { s: { r: 2e6, c: 2e6 }, e: { r: 0, c: 0 } }, u = !1, h = !1, d, p, x, g, O, I, T, U, V, B = [];
  c.biff = 12, c["!row"] = 0;
  var A = 0, _ = !1, m = [], R = {}, L = c.supbooks || /*::(*/
  t.supbooks || [[]];
  if (L.sharedf = R, L.arrayf = m, L.SheetNames = t.SheetNames || t.Sheets.map(function(ve) {
    return ve.name;
  }), !c.supbooks && (c.supbooks = L, t.Names))
    for (var D = 0; D < t.Names.length; ++D) L[0][D + 1] = t.Names[D];
  var z = [], ie = [], re = !1;
  St[16] = { n: "BrtShortReal", f: ns };
  var fe;
  if (zr(e, function(M, he, te) {
    if (!h)
      switch (te) {
        case 148:
          f = M;
          break;
        case 0:
          d = M, c.sheetRows && c.sheetRows <= d.r && (h = !0), U = er(g = d.r), c["!row"] = d.r, (M.hidden || M.hpt || M.level != null) && (M.hpt && (M.hpx = Ja(M.hpt)), ie[M.r] = M);
          break;
        case 2:
        /* 'BrtCellRk' */
        case 3:
        /* 'BrtCellError' */
        case 4:
        /* 'BrtCellBool' */
        case 5:
        /* 'BrtCellReal' */
        case 6:
        /* 'BrtCellSt' */
        case 7:
        /* 'BrtCellIsst' */
        case 8:
        /* 'BrtFmlaString' */
        case 9:
        /* 'BrtFmlaNum' */
        case 10:
        /* 'BrtFmlaBool' */
        case 11:
        /* 'BrtFmlaError' */
        case 13:
        /* 'BrtShortRk' */
        case 14:
        /* 'BrtShortError' */
        case 15:
        /* 'BrtShortBool' */
        case 16:
        /* 'BrtShortReal' */
        case 17:
        /* 'BrtShortSt' */
        case 18:
        /* 'BrtShortIsst' */
        case 62:
          switch (p = { t: M[2] }, M[2]) {
            case "n":
              p.v = M[1];
              break;
            case "s":
              T = Wa[M[1]], p.v = T.t, p.r = T.r;
              break;
            case "b":
              p.v = !!M[1];
              break;
            case "e":
              p.v = M[1], c.cellText !== !1 && (p.w = ha[p.v]);
              break;
            case "str":
              p.t = "s", p.v = M[1];
              break;
            case "is":
              p.t = "s", p.v = M[1].t;
              break;
          }
          if ((x = s.CellXf[M[0].iStyleRef]) && as(p, x.numFmtId, null, c, i, s), O = M[0].c == -1 ? O + 1 : M[0].c, c.dense ? (o[g] || (o[g] = []), o[g][O] = p) : o[Ye(O) + U] = p, c.cellFormula) {
            for (_ = !1, A = 0; A < m.length; ++A) {
              var w = m[A];
              d.r >= w[0].s.r && d.r <= w[0].e.r && O >= w[0].s.c && O <= w[0].e.c && (p.F = Se(w[0]), _ = !0);
            }
            !_ && M.length > 3 && (p.f = M[3]);
          }
          if (l.s.r > d.r && (l.s.r = d.r), l.s.c > O && (l.s.c = O), l.e.r < d.r && (l.e.r = d.r), l.e.c < O && (l.e.c = O), c.cellDates && x && p.t == "n" && Fa(Ee[x.numFmtId])) {
            var P = aa(p.v);
            P && (p.t = "d", p.v = new Date(P.y, P.m - 1, P.d, P.H, P.M, P.S, P.u));
          }
          fe && (fe.type == "XLDAPR" && (p.D = !0), fe = void 0);
          break;
        case 1:
        /* 'BrtCellBlank' */
        case 12:
          if (!c.sheetStubs || u) break;
          p = { t: "z", v: void 0 }, O = M[0].c == -1 ? O + 1 : M[0].c, c.dense ? (o[g] || (o[g] = []), o[g][O] = p) : o[Ye(O) + U] = p, l.s.r > d.r && (l.s.r = d.r), l.s.c > O && (l.s.c = O), l.e.r < d.r && (l.e.r = d.r), l.e.c < O && (l.e.c = O), fe && (fe.type == "XLDAPR" && (p.D = !0), fe = void 0);
          break;
        case 176:
          B.push(M);
          break;
        case 49:
          fe = ((c.xlmeta || {}).Cell || [])[M - 1];
          break;
        case 494:
          var b = n["!id"][M.relId];
          for (b ? (M.Target = b.Target, M.loc && (M.Target += "#" + M.loc), M.Rel = b) : M.relId == "" && (M.Target = "#" + M.loc), g = M.rfx.s.r; g <= M.rfx.e.r; ++g) for (O = M.rfx.s.c; O <= M.rfx.e.c; ++O)
            c.dense ? (o[g] || (o[g] = []), o[g][O] || (o[g][O] = { t: "z", v: void 0 }), o[g][O].l = M) : (I = me({ c: O, r: g }), o[I] || (o[I] = { t: "z", v: void 0 }), o[I].l = M);
          break;
        case 426:
          if (!c.cellFormula) break;
          m.push(M), V = c.dense ? o[g][O] : o[Ye(O) + U], V.f = ir(M[1], l, { r: d.r, c: O }, L, c), V.F = Se(M[0]);
          break;
        case 427:
          if (!c.cellFormula) break;
          R[me(M[0].s)] = M[1], V = c.dense ? o[g][O] : o[Ye(O) + U], V.f = ir(M[1], l, { r: d.r, c: O }, L, c);
          break;
        /* identical to 'ColInfo' in XLS */
        case 60:
          if (!c.cellStyles) break;
          for (; M.e >= M.s; )
            z[M.e--] = { width: M.w / 256, hidden: !!(M.flags & 1), level: M.level }, re || (re = !0, m0(M.w / 256)), wa(z[M.e + 1]);
          break;
        case 161:
          o["!autofilter"] = { ref: Se(M) };
          break;
        case 476:
          o["!margins"] = M;
          break;
        case 147:
          t.Sheets[r] || (t.Sheets[r] = {}), M.name && (t.Sheets[r].CodeName = M.name), (M.above || M.left) && (o["!outline"] = { above: M.above, left: M.left });
          break;
        case 137:
          t.Views || (t.Views = [{}]), t.Views[0] || (t.Views[0] = {}), M.RTL && (t.Views[0].RTL = !0);
          break;
        case 485:
          break;
        case 64:
        /* 'BrtDVal' */
        case 1053:
          break;
        case 151:
          break;
        case 152:
        /* 'BrtSel' */
        case 175:
        /* 'BrtAFilterDateGroupItem' */
        case 644:
        /* 'BrtActiveX' */
        case 625:
        /* 'BrtBigName' */
        case 562:
        /* 'BrtBkHim' */
        case 396:
        /* 'BrtBrk' */
        case 1112:
        /* 'BrtCFIcon' */
        case 1146:
        /* 'BrtCFRuleExt' */
        case 471:
        /* 'BrtCFVO' */
        case 1050:
        /* 'BrtCFVO14' */
        case 649:
        /* 'BrtCellIgnoreEC' */
        case 1105:
        /* 'BrtCellIgnoreEC14' */
        case 589:
        /* 'BrtCellSmartTagProperty' */
        case 607:
        /* 'BrtCellWatch' */
        case 564:
        /* 'BrtColor' */
        case 1055:
        /* 'BrtColor14' */
        case 168:
        /* 'BrtColorFilter' */
        case 174:
        /* 'BrtCustomFilter' */
        case 1180:
        /* 'BrtCustomFilter14' */
        case 499:
        /* 'BrtDRef' */
        case 507:
        /* 'BrtDXF' */
        case 550:
        /* 'BrtDrawing' */
        case 171:
        /* 'BrtDynamicFilter' */
        case 167:
        /* 'BrtFilter' */
        case 1177:
        /* 'BrtFilter14' */
        case 169:
        /* 'BrtIconFilter' */
        case 1181:
        /* 'BrtIconFilter14' */
        case 551:
        /* 'BrtLegacyDrawing' */
        case 552:
        /* 'BrtLegacyDrawingHF' */
        case 661:
        /* 'BrtListPart' */
        case 639:
        /* 'BrtOleObject' */
        case 478:
        /* 'BrtPageSetup' */
        case 537:
        /* 'BrtPhoneticInfo' */
        case 477:
        /* 'BrtPrintOptions' */
        case 536:
        /* 'BrtRangeProtection' */
        case 1103:
        /* 'BrtRangeProtection14' */
        case 680:
        /* 'BrtRangeProtectionIso' */
        case 1104:
        /* 'BrtRangeProtectionIso14' */
        case 1024:
        /* 'BrtRwDescent' */
        case 663:
        /* 'BrtSheetCalcProp' */
        case 535:
        /* 'BrtSheetProtection' */
        case 678:
        /* 'BrtSheetProtectionIso' */
        case 504:
        /* 'BrtSlc' */
        case 1043:
        /* 'BrtSparkline' */
        case 428:
        /* 'BrtTable' */
        case 170:
        /* 'BrtTop10Filter' */
        case 3072:
        /* 'BrtUid' */
        case 50:
        /* 'BrtValueMeta' */
        case 2070:
        /* 'BrtWebExtension' */
        case 1045:
          break;
        case 35:
          u = !0;
          break;
        case 36:
          u = !1;
          break;
        case 37:
          u = !0;
          break;
        case 38:
          u = !1;
          break;
        default:
          if (!he.T) {
            if (!u || c.WTF) throw new Error("Unexpected record 0x" + te.toString(16));
          }
      }
  }, c), delete c.supbooks, delete c["!row"], !o["!ref"] && (l.s.r < 2e6 || f && (f.e.r > 0 || f.e.c > 0 || f.s.r > 0 || f.s.c > 0)) && (o["!ref"] = Se(f || l)), c.sheetRows && o["!ref"]) {
    var q = Ue(o["!ref"]);
    c.sheetRows <= +q.e.r && (q.e.r = c.sheetRows - 1, q.e.r > l.e.r && (q.e.r = l.e.r), q.e.r < q.s.r && (q.s.r = q.e.r), q.e.c > l.e.c && (q.e.c = l.e.c), q.e.c < q.s.c && (q.s.c = q.e.c), o["!fullref"] = o["!ref"], o["!ref"] = Se(q));
  }
  return B.length > 0 && (o["!merges"] = B), z.length > 0 && (o["!cols"] = z), ie.length > 0 && (o["!rows"] = ie), o;
}
function cx(e) {
  var a = [], r = e.match(/^<c:numCache>/), n;
  (e.match(/<c:pt idx="(\d*)">(.*?)<\/c:pt>/mg) || []).forEach(function(i) {
    var s = i.match(/<c:pt idx="(\d*?)"><c:v>(.*)<\/c:v><\/c:pt>/);
    s && (a[+s[1]] = r ? +s[2] : s[2]);
  });
  var t = Ce((e.match(/<c:formatCode>([\s\S]*?)<\/c:formatCode>/) || ["", "General"])[1]);
  return (e.match(/<c:f>(.*?)<\/c:f>/mg) || []).forEach(function(i) {
    n = i.replace(/<.*?>/g, "");
  }), [a, t, n];
}
function fx(e, a, r, n, t, i) {
  var s = i || { "!type": "chart" };
  if (!e) return i;
  var c = 0, o = 0, f = "A", l = { s: { r: 2e6, c: 2e6 }, e: { r: 0, c: 0 } };
  return (e.match(/<c:numCache>[\s\S]*?<\/c:numCache>/gm) || []).forEach(function(u) {
    var h = cx(u);
    l.s.r = l.s.c = 0, l.e.c = c, f = Ye(c), h[0].forEach(function(d, p) {
      s[f + er(p)] = { t: "n", v: d, z: h[1] }, o = p;
    }), l.e.r < o && (l.e.r = o), ++c;
  }), c > 0 && (s["!ref"] = Se(l)), s;
}
function ox(e, a, r, n, t) {
  if (!e) return e;
  n || (n = { "!id": {} });
  var i = { "!type": "chart", "!drawel": null, "!rel": "" }, s, c = e.match(ts);
  return c && E0(c[0], i, t, r), (s = e.match(/drawing r:id="(.*?)"/)) && (i["!rel"] = s[1]), n["!id"][i["!rel"]] && (i["!drawel"] = n["!id"][i["!rel"]]), i;
}
function lx(e, a) {
  e.l += 10;
  var r = fr(e);
  return { name: r };
}
function ux(e, a, r, n, t) {
  if (!e) return e;
  n || (n = { "!id": {} });
  var i = { "!type": "chart", "!drawel": null, "!rel": "" }, s = !1;
  return zr(e, function(o, f, l) {
    switch (l) {
      case 550:
        i["!rel"] = o;
        break;
      case 651:
        t.Sheets[r] || (t.Sheets[r] = {}), o.name && (t.Sheets[r].CodeName = o.name);
        break;
      case 562:
      /* 'BrtBkHim' */
      case 652:
      /* 'BrtCsPageSetup' */
      case 669:
      /* 'BrtCsProtection' */
      case 679:
      /* 'BrtCsProtectionIso' */
      case 551:
      /* 'BrtLegacyDrawing' */
      case 552:
      /* 'BrtLegacyDrawingHF' */
      case 476:
      /* 'BrtMargins' */
      case 3072:
        break;
      case 35:
        s = !0;
        break;
      case 36:
        s = !1;
        break;
      case 37:
        break;
      case 38:
        break;
      default:
        if (!(f.T > 0)) {
          if (!(f.T < 0)) {
            if (!s || a.WTF) throw new Error("Unexpected record 0x" + l.toString(16));
          }
        }
    }
  }, a), n["!id"][i["!rel"]] && (i["!drawel"] = n["!id"][i["!rel"]]), i;
}
var is = [
  ["allowRefreshQuery", !1, "bool"],
  ["autoCompressPictures", !0, "bool"],
  ["backupFile", !1, "bool"],
  ["checkCompatibility", !1, "bool"],
  ["CodeName", ""],
  ["date1904", !1, "bool"],
  ["defaultThemeVersion", 0, "int"],
  ["filterPrivacy", !1, "bool"],
  ["hidePivotFieldList", !1, "bool"],
  ["promptedSolutions", !1, "bool"],
  ["publishItems", !1, "bool"],
  ["refreshAllConnections", !1, "bool"],
  ["saveExternalLinkValues", !0, "bool"],
  ["showBorderUnselectedTables", !0, "bool"],
  ["showInkAnnotation", !0, "bool"],
  ["showObjects", "all"],
  ["showPivotChartFilter", !1, "bool"],
  ["updateLinks", "userSet"]
], hx = [
  ["activeTab", 0, "int"],
  ["autoFilterDateGrouping", !0, "bool"],
  ["firstSheet", 0, "int"],
  ["minimized", !1, "bool"],
  ["showHorizontalScroll", !0, "bool"],
  ["showSheetTabs", !0, "bool"],
  ["showVerticalScroll", !0, "bool"],
  ["tabRatio", 600, "int"],
  ["visibility", "visible"]
  //window{Height,Width}, {x,y}Window
], xx = [
  //['state', 'visible']
], dx = [
  ["calcCompleted", "true"],
  ["calcMode", "auto"],
  ["calcOnSave", "true"],
  ["concurrentCalc", "true"],
  ["fullCalcOnLoad", "false"],
  ["fullPrecision", "true"],
  ["iterate", "false"],
  ["iterateCount", "100"],
  ["iterateDelta", "0.001"],
  ["refMode", "A1"]
];
function An(e, a) {
  for (var r = 0; r != e.length; ++r)
    for (var n = e[r], t = 0; t != a.length; ++t) {
      var i = a[t];
      if (n[i[0]] == null) n[i[0]] = i[1];
      else switch (i[2]) {
        case "bool":
          typeof n[i[0]] == "string" && (n[i[0]] = Pe(n[i[0]]));
          break;
        case "int":
          typeof n[i[0]] == "string" && (n[i[0]] = parseInt(n[i[0]], 10));
          break;
      }
    }
}
function Fn(e, a) {
  for (var r = 0; r != a.length; ++r) {
    var n = a[r];
    if (e[n[0]] == null) e[n[0]] = n[1];
    else switch (n[2]) {
      case "bool":
        typeof e[n[0]] == "string" && (e[n[0]] = Pe(e[n[0]]));
        break;
      case "int":
        typeof e[n[0]] == "string" && (e[n[0]] = parseInt(e[n[0]], 10));
        break;
    }
  }
}
function ss(e) {
  Fn(e.WBProps, is), Fn(e.CalcPr, dx), An(e.WBView, hx), An(e.Sheets, xx), Ta.date1904 = Pe(e.WBProps.date1904);
}
var px = /* @__PURE__ */ "][*?/\\".split("");
function vx(e, a) {
  if (e.length > 31)
    throw new Error("Sheet names cannot exceed 31 chars");
  var r = !0;
  return px.forEach(function(n) {
    if (e.indexOf(n) != -1)
      throw new Error("Sheet name cannot contain : \\ / ? * [ ]");
  }), r;
}
var gx = /<\w+:workbook/;
function mx(e, a) {
  if (!e) throw new Error("Could not find file");
  var r = (
    /*::(*/
    { AppVersion: {}, WBProps: {}, WBView: [], Sheets: [], CalcPr: {}, Names: [], xmlns: "" }
  ), n = !1, t = "xmlns", i = {}, s = 0;
  if (e.replace(lr, function(o, f) {
    var l = ge(o);
    switch (Mr(l[0])) {
      case "<?xml":
        break;
      /* 18.2.27 workbook CT_Workbook 1 */
      case "<workbook":
        o.match(gx) && (t = "xmlns" + o.match(/<(\w+):/)[1]), r.xmlns = l[t];
        break;
      case "</workbook>":
        break;
      /* 18.2.13 fileVersion CT_FileVersion ? */
      case "<fileVersion":
        delete l[0], r.AppVersion = l;
        break;
      case "<fileVersion/>":
      case "</fileVersion>":
        break;
      /* 18.2.12 fileSharing CT_FileSharing ? */
      case "<fileSharing":
        break;
      case "<fileSharing/>":
        break;
      /* 18.2.28 workbookPr CT_WorkbookPr ? */
      case "<workbookPr":
      case "<workbookPr/>":
        is.forEach(function(u) {
          if (l[u[0]] != null)
            switch (u[2]) {
              case "bool":
                r.WBProps[u[0]] = Pe(l[u[0]]);
                break;
              case "int":
                r.WBProps[u[0]] = parseInt(l[u[0]], 10);
                break;
              default:
                r.WBProps[u[0]] = l[u[0]];
            }
        }), l.codeName && (r.WBProps.CodeName = Re(l.codeName));
        break;
      case "</workbookPr>":
        break;
      /* 18.2.29 workbookProtection CT_WorkbookProtection ? */
      case "<workbookProtection":
        break;
      case "<workbookProtection/>":
        break;
      /* 18.2.1  bookViews CT_BookViews ? */
      case "<bookViews":
      case "<bookViews>":
      case "</bookViews>":
        break;
      /* 18.2.30   workbookView CT_BookView + */
      case "<workbookView":
      case "<workbookView/>":
        delete l[0], r.WBView.push(l);
        break;
      case "</workbookView>":
        break;
      /* 18.2.20 sheets CT_Sheets 1 */
      case "<sheets":
      case "<sheets>":
      case "</sheets>":
        break;
      // aggregate sheet
      /* 18.2.19   sheet CT_Sheet + */
      case "<sheet":
        switch (l.state) {
          case "hidden":
            l.Hidden = 1;
            break;
          case "veryHidden":
            l.Hidden = 2;
            break;
          default:
            l.Hidden = 0;
        }
        delete l.state, l.name = Ce(Re(l.name)), delete l[0], r.Sheets.push(l);
        break;
      case "</sheet>":
        break;
      /* 18.2.15 functionGroups CT_FunctionGroups ? */
      case "<functionGroups":
      case "<functionGroups/>":
        break;
      /* 18.2.14   functionGroup CT_FunctionGroup + */
      case "<functionGroup":
        break;
      /* 18.2.9  externalReferences CT_ExternalReferences ? */
      case "<externalReferences":
      case "</externalReferences>":
      case "<externalReferences>":
        break;
      /* 18.2.8    externalReference CT_ExternalReference + */
      case "<externalReference":
        break;
      /* 18.2.6  definedNames CT_DefinedNames ? */
      case "<definedNames/>":
        break;
      case "<definedNames>":
      case "<definedNames":
        n = !0;
        break;
      case "</definedNames>":
        n = !1;
        break;
      /* 18.2.5    definedName CT_DefinedName + */
      case "<definedName":
        i = {}, i.Name = Re(l.name), l.comment && (i.Comment = l.comment), l.localSheetId && (i.Sheet = +l.localSheetId), Pe(l.hidden || "0") && (i.Hidden = !0), s = f + o.length;
        break;
      case "</definedName>":
        i.Ref = Ce(Re(e.slice(s, f))), r.Names.push(i);
        break;
      case "<definedName/>":
        break;
      /* 18.2.2  calcPr CT_CalcPr ? */
      case "<calcPr":
        delete l[0], r.CalcPr = l;
        break;
      case "<calcPr/>":
        delete l[0], r.CalcPr = l;
        break;
      case "</calcPr>":
        break;
      /* 18.2.16 oleSize CT_OleSize ? (ref required) */
      case "<oleSize":
        break;
      /* 18.2.4  customWorkbookViews CT_CustomWorkbookViews ? */
      case "<customWorkbookViews>":
      case "</customWorkbookViews>":
      case "<customWorkbookViews":
        break;
      /* 18.2.3  customWorkbookView CT_CustomWorkbookView + */
      case "<customWorkbookView":
      case "</customWorkbookView>":
        break;
      /* 18.2.18 pivotCaches CT_PivotCaches ? */
      case "<pivotCaches>":
      case "</pivotCaches>":
      case "<pivotCaches":
        break;
      /* 18.2.17 pivotCache CT_PivotCache ? */
      case "<pivotCache":
        break;
      /* 18.2.21 smartTagPr CT_SmartTagPr ? */
      case "<smartTagPr":
      case "<smartTagPr/>":
        break;
      /* 18.2.23 smartTagTypes CT_SmartTagTypes ? */
      case "<smartTagTypes":
      case "<smartTagTypes>":
      case "</smartTagTypes>":
        break;
      /* 18.2.22 smartTagType CT_SmartTagType ? */
      case "<smartTagType":
        break;
      /* 18.2.24 webPublishing CT_WebPublishing ? */
      case "<webPublishing":
      case "<webPublishing/>":
        break;
      /* 18.2.11 fileRecoveryPr CT_FileRecoveryPr ? */
      case "<fileRecoveryPr":
      case "<fileRecoveryPr/>":
        break;
      /* 18.2.26 webPublishObjects CT_WebPublishObjects ? */
      case "<webPublishObjects>":
      case "<webPublishObjects":
      case "</webPublishObjects>":
        break;
      /* 18.2.25 webPublishObject CT_WebPublishObject ? */
      case "<webPublishObject":
        break;
      /* 18.2.10 extLst CT_ExtensionList ? */
      case "<extLst":
      case "<extLst>":
      case "</extLst>":
      case "<extLst/>":
        break;
      /* 18.2.7  ext CT_Extension + */
      case "<ext":
        n = !0;
        break;
      //TODO: check with versions of excel
      case "</ext>":
        n = !1;
        break;
      /* Others */
      case "<ArchID":
        break;
      case "<AlternateContent":
      case "<AlternateContent>":
        n = !0;
        break;
      case "</AlternateContent>":
        n = !1;
        break;
      /* TODO */
      case "<revisionPtr":
        break;
      default:
        if (!n && a.WTF) throw new Error("unrecognized " + l[0] + " in workbook");
    }
    return o;
  }), Pc.indexOf(r.xmlns) === -1) throw new Error("Unknown Namespace: " + r.xmlns);
  return ss(r), r;
}
function _x(e, a) {
  var r = {};
  return r.Hidden = e.read_shift(4), r.iTabID = e.read_shift(4), r.strRelID = Xt(e), r.name = fr(e), r;
}
function Ex(e, a) {
  var r = {}, n = e.read_shift(4);
  r.defaultThemeVersion = e.read_shift(4);
  var t = a > 8 ? fr(e) : "";
  return t.length > 0 && (r.CodeName = t), r.autoCompressPictures = !!(n & 65536), r.backupFile = !!(n & 64), r.checkCompatibility = !!(n & 4096), r.date1904 = !!(n & 1), r.filterPrivacy = !!(n & 8), r.hidePivotFieldList = !!(n & 1024), r.promptedSolutions = !!(n & 16), r.publishItems = !!(n & 2048), r.refreshAllConnections = !!(n & 262144), r.saveExternalLinkValues = !!(n & 128), r.showBorderUnselectedTables = !!(n & 4), r.showInkAnnotation = !!(n & 32), r.showObjects = ["all", "placeholders", "none"][n >> 13 & 3], r.showPivotChartFilter = !!(n & 32768), r.updateLinks = ["userSet", "never", "always"][n >> 8 & 3], r;
}
function Tx(e, a) {
  var r = {};
  return e.read_shift(4), r.ArchID = e.read_shift(4), e.l += a - 8, r;
}
function kx(e, a, r) {
  var n = e.l + a;
  e.l += 4, e.l += 1;
  var t = e.read_shift(4), i = Zc(e), s = i1(e, 0, r), c = x0(e);
  e.l = n;
  var o = { Name: i, Ptg: s };
  return t < 268435455 && (o.Sheet = t), c && (o.Comment = c), o;
}
function wx(e, a) {
  var r = { AppVersion: {}, WBProps: {}, WBView: [], Sheets: [], CalcPr: {}, xmlns: "" }, n = [], t = !1;
  a || (a = {}), a.biff = 12;
  var i = [], s = [[]];
  return s.SheetNames = [], s.XTI = [], St[16] = { n: "BrtFRTArchID$", f: Tx }, zr(e, function(o, f, l) {
    switch (l) {
      case 156:
        s.SheetNames.push(o.name), r.Sheets.push(o);
        break;
      case 153:
        r.WBProps = o;
        break;
      case 39:
        o.Sheet != null && (a.SID = o.Sheet), o.Ref = ir(o.Ptg, null, null, s, a), delete a.SID, delete o.Ptg, i.push(o);
        break;
      case 1036:
        break;
      case 357:
      /* 'BrtSupSelf' */
      case 358:
      /* 'BrtSupSame' */
      case 355:
      /* 'BrtSupBookSrc' */
      case 667:
        s[0].length ? s.push([l, o]) : s[0] = [l, o], s[s.length - 1].XTI = [];
        break;
      case 362:
        s.length === 0 && (s[0] = [], s[0].XTI = []), s[s.length - 1].XTI = s[s.length - 1].XTI.concat(o), s.XTI = s.XTI.concat(o);
        break;
      case 361:
        break;
      case 2071:
      /* 'BrtAbsPath15' */
      case 158:
      /* 'BrtBookView' */
      case 143:
      /* 'BrtBeginBundleShs' */
      case 664:
      /* 'BrtBeginFnGroup' */
      case 353:
        break;
      /* case 'BrtModelTimeGroupingCalcCol' */
      case 3072:
      /* 'BrtUid' */
      case 3073:
      /* 'BrtRevisionPtr' */
      case 534:
      /* 'BrtBookProtection' */
      case 677:
      /* 'BrtBookProtectionIso' */
      case 157:
      /* 'BrtCalcProp' */
      case 610:
      /* 'BrtCrashRecErr' */
      case 2050:
      /* 'BrtDecoupledPivotCacheID' */
      case 155:
      /* 'BrtFileRecover' */
      case 548:
      /* 'BrtFileSharing' */
      case 676:
      /* 'BrtFileSharingIso' */
      case 128:
      /* 'BrtFileVersion' */
      case 665:
      /* 'BrtFnGroup' */
      case 2128:
      /* 'BrtModelRelationship' */
      case 2125:
      /* 'BrtModelTable' */
      case 549:
      /* 'BrtOleSize' */
      case 2053:
      /* 'BrtPivotTableRef' */
      case 596:
      /* 'BrtSmartTagType' */
      case 2076:
      /* 'BrtTableSlicerCacheID' */
      case 2075:
      /* 'BrtTableSlicerCacheIDs' */
      case 2082:
      /* 'BrtTimelineCachePivotCacheID' */
      case 397:
      /* 'BrtUserBookView' */
      case 154:
      /* 'BrtWbFactoid' */
      case 1117:
      /* 'BrtWbProp14' */
      case 553:
      /* 'BrtWebOpt' */
      case 2091:
        break;
      case 35:
        n.push(l), t = !0;
        break;
      case 36:
        n.pop(), t = !1;
        break;
      case 37:
        n.push(l), t = !0;
        break;
      case 38:
        n.pop(), t = !1;
        break;
      case 16:
        break;
      default:
        if (!f.T) {
          if (!t || a.WTF && n[n.length - 1] != 37 && n[n.length - 1] != 35) throw new Error("Unexpected record 0x" + l.toString(16));
        }
    }
  }, a), ss(r), r.Names = i, r.supbooks = s, r;
}
function Ax(e, a, r) {
  return a.slice(-4) === ".bin" ? wx(e, r) : mx(e, r);
}
function Fx(e, a, r, n, t, i, s, c) {
  return a.slice(-4) === ".bin" ? sx(e, n, r, t, i, s, c) : _1(e, n, r, t, i, s, c);
}
function Sx(e, a, r, n, t, i, s, c) {
  return a.slice(-4) === ".bin" ? ux(e, n, r, t, i) : ox(e, n, r, t, i);
}
function Cx(e, a, r, n, t, i, s, c) {
  return a.slice(-4) === ".bin" ? Lu() : bu();
}
function yx(e, a, r, n, t, i, s, c) {
  return a.slice(-4) === ".bin" ? Nu() : Pu();
}
function Ox(e, a, r, n) {
  return a.slice(-4) === ".bin" ? Jl(e, r, n) : Xl(e, r, n);
}
function Dx(e, a, r) {
  return $i(e, r);
}
function Rx(e, a, r) {
  return a.slice(-4) === ".bin" ? hl(e, r) : ll(e, r);
}
function Ix(e, a, r) {
  return a.slice(-4) === ".bin" ? Du(e, r) : Fu(e, r);
}
function Nx(e, a, r) {
  return a.slice(-4) === ".bin" ? ku(e) : Eu(e);
}
function Px(e, a, r, n) {
  return r.slice(-4) === ".bin" ? wu(e, a, r, n) : void 0;
}
function Lx(e, a, r) {
  return a.slice(-4) === ".bin" ? mu(e, a, r) : _u(e, a, r);
}
var cs = /([\w:]+)=((?:")([^"]*)(?:")|(?:')([^']*)(?:'))/g, fs = /([\w:]+)=((?:")(?:[^"]*)(?:")|(?:')(?:[^']*)(?:'))/;
function Cr(e, a) {
  var r = e.split(/\s+/), n = [];
  if (n[0] = r[0], r.length === 1) return n;
  var t = e.match(cs), i, s, c, o;
  if (t) for (o = 0; o != t.length; ++o)
    i = t[o].match(fs), (s = i[1].indexOf(":")) === -1 ? n[i[1]] = i[2].slice(1, i[2].length - 1) : (i[1].slice(0, 6) === "xmlns:" ? c = "xmlns" + i[1].slice(6) : c = i[1].slice(s + 1), n[c] = i[2].slice(1, i[2].length - 1));
  return n;
}
function bx(e) {
  var a = e.split(/\s+/), r = {};
  if (a.length === 1) return r;
  var n = e.match(cs), t, i, s, c;
  if (n) for (c = 0; c != n.length; ++c)
    t = n[c].match(fs), (i = t[1].indexOf(":")) === -1 ? r[t[1]] = t[2].slice(1, t[2].length - 1) : (t[1].slice(0, 6) === "xmlns:" ? s = "xmlns" + t[1].slice(6) : s = t[1].slice(i + 1), r[s] = t[2].slice(1, t[2].length - 1));
  return r;
}
var Ga;
function Mx(e, a) {
  var r = Ga[e] || Ce(e);
  return r === "General" ? ia(a) : Fr(r, a);
}
function Bx(e, a, r, n) {
  var t = n;
  switch ((r[0].match(/dt:dt="([\w.]+)"/) || ["", ""])[1]) {
    case "boolean":
      t = Pe(n);
      break;
    case "i2":
    case "int":
      t = parseInt(n, 10);
      break;
    case "r4":
    case "float":
      t = parseFloat(n);
      break;
    case "date":
    case "dateTime.tz":
      t = qe(n);
      break;
    case "i8":
    case "string":
    case "fixed":
    case "uuid":
    case "bin.base64":
      break;
    default:
      throw new Error("bad custprop:" + r[0]);
  }
  e[Ce(a)] = t;
}
function Ux(e, a, r) {
  if (e.t !== "z") {
    if (!r || r.cellText !== !1) try {
      e.t === "e" ? e.w = e.w || ha[e.v] : a === "General" ? e.t === "n" ? (e.v | 0) === e.v ? e.w = e.v.toString(10) : e.w = za(e.v) : e.w = ia(e.v) : e.w = Mx(a || "General", e.v);
    } catch (i) {
      if (r.WTF) throw i;
    }
    try {
      var n = Ga[a] || a || "General";
      if (r.cellNF && (e.z = n), r.cellDates && e.t == "n" && Fa(n)) {
        var t = aa(e.v);
        t && (e.t = "d", e.v = new Date(t.y, t.m - 1, t.d, t.H, t.M, t.S, t.u));
      }
    } catch (i) {
      if (r.WTF) throw i;
    }
  }
}
function Hx(e, a, r) {
  if (r.cellStyles && a.Interior) {
    var n = a.Interior;
    n.Pattern && (n.patternType = Bl[n.Pattern] || n.Pattern);
  }
  e[a.ID] = a;
}
function Wx(e, a, r, n, t, i, s, c, o, f) {
  var l = "General", u = n.StyleID, h = {};
  f = f || {};
  var d = [], p = 0;
  for (u === void 0 && c && (u = c.StyleID), u === void 0 && s && (u = s.StyleID); i[u] !== void 0 && (i[u].nf && (l = i[u].nf), i[u].Interior && d.push(i[u].Interior), !!i[u].Parent); )
    u = i[u].Parent;
  switch (r.Type) {
    case "Boolean":
      n.t = "b", n.v = Pe(e);
      break;
    case "String":
      n.t = "s", n.r = $0(Ce(e)), n.v = e.indexOf("<") > -1 ? Ce(a || e).replace(/<.*?>/g, "") : n.r;
      break;
    case "DateTime":
      e.slice(-1) != "Z" && (e += "Z"), n.v = (qe(e) - new Date(Date.UTC(1899, 11, 30))) / (1440 * 60 * 1e3), n.v !== n.v ? n.v = Ce(e) : n.v < 60 && (n.v = n.v - 1), (!l || l == "General") && (l = "yyyy-mm-dd");
    /* falls through */
    case "Number":
      n.v === void 0 && (n.v = +e), n.t || (n.t = "n");
      break;
    case "Error":
      n.t = "e", n.v = Ai[e], f.cellText !== !1 && (n.w = e);
      break;
    default:
      e == "" && a == "" ? n.t = "z" : (n.t = "s", n.v = $0(a || e));
      break;
  }
  if (Ux(n, l, f), f.cellFormula !== !1)
    if (n.Formula) {
      var x = Ce(n.Formula);
      x.charCodeAt(0) == 61 && (x = x.slice(1)), n.f = Ea(x, t), delete n.Formula, n.ArrayRange == "RC" ? n.F = Ea("RC:RC", t) : n.ArrayRange && (n.F = Ea(n.ArrayRange, t), o.push([Ue(n.F), n.F]));
    } else
      for (p = 0; p < o.length; ++p)
        t.r >= o[p][0].s.r && t.r <= o[p][0].e.r && t.c >= o[p][0].s.c && t.c <= o[p][0].e.c && (n.F = o[p][1]);
  f.cellStyles && (d.forEach(function(g) {
    !h.patternType && g.patternType && (h.patternType = g.patternType);
  }), n.s = h), n.StyleID !== void 0 && (n.ixfe = n.StyleID);
}
function Vx(e) {
  e.t = e.v || "", e.t = e.t.replace(/\r\n/g, `
`).replace(/\r/g, `
`), e.v = e.w = e.ixfe = void 0;
}
function Ht(e, a) {
  var r = a || {};
  Jn();
  var n = Ra(f0(e));
  (r.type == "binary" || r.type == "array" || r.type == "base64") && (n = Re(n));
  var t = n.slice(0, 1024).toLowerCase(), i = !1;
  if (t = t.replace(/".*?"/g, ""), (t.indexOf(">") & 1023) > Math.min(t.indexOf(",") & 1023, t.indexOf(";") & 1023)) {
    var s = Qe(r);
    return s.type = "string", Ya.to_workbook(n, s);
  }
  if (t.indexOf("<?xml") == -1 && ["html", "table", "head", "meta", "script", "style", "div"].forEach(function(xe) {
    t.indexOf("<" + xe) >= 0 && (i = !0);
  }), i) return qx(n, r);
  Ga = {
    "General Number": "General",
    "General Date": Ee[22],
    "Long Date": "dddd, mmmm dd, yyyy",
    "Medium Date": Ee[15],
    "Short Date": Ee[14],
    "Long Time": Ee[19],
    "Medium Time": Ee[18],
    "Short Time": Ee[20],
    Currency: '"$"#,##0.00_);[Red]\\("$"#,##0.00\\)',
    Fixed: Ee[2],
    Standard: Ee[4],
    Percent: Ee[10],
    Scientific: Ee[11],
    "Yes/No": '"Yes";"Yes";"No";@',
    "True/False": '"True";"True";"False";@',
    "On/Off": '"Yes";"Yes";"No";@'
  };
  var c, o = [], f, l = {}, u = [], h = r.dense ? [] : {}, d = "", p = {}, x = {}, g = Cr('<Data ss:Type="String">'), O = 0, I = 0, T = 0, U = { s: { r: 2e6, c: 2e6 }, e: { r: 0, c: 0 } }, V = {}, B = {}, A = "", _ = 0, m = [], R = {}, L = {}, D = 0, z = [], ie = [], re = {}, fe = [], q, ve = !1, M = [], he = [], te = {}, w = 0, P = 0, b = { Sheets: [], WBProps: { date1904: !1 } }, N = {};
  Ka.lastIndex = 0, n = n.replace(/<!--([\s\S]*?)-->/mg, "");
  for (var K = ""; c = Ka.exec(n); ) switch (c[3] = (K = c[3]).toLowerCase()) {
    case "data":
      if (K == "data") {
        if (c[1] === "/") {
          if ((f = o.pop())[0] !== c[3]) throw new Error("Bad state: " + f.join("|"));
        } else c[0].charAt(c[0].length - 2) !== "/" && o.push([c[3], !0]);
        break;
      }
      if (o[o.length - 1][1]) break;
      c[1] === "/" ? Wx(n.slice(O, c.index), A, g, o[o.length - 1][0] == /*"Comment"*/
      "comment" ? re : p, { c: I, r: T }, V, fe[I], x, M, r) : (A = "", g = Cr(c[0]), O = c.index + c[0].length);
      break;
    case "cell":
      if (c[1] === "/")
        if (ie.length > 0 && (p.c = ie), (!r.sheetRows || r.sheetRows > T) && p.v !== void 0 && (r.dense ? (h[T] || (h[T] = []), h[T][I] = p) : h[Ye(I) + er(T)] = p), p.HRef && (p.l = { Target: Ce(p.HRef) }, p.HRefScreenTip && (p.l.Tooltip = p.HRefScreenTip), delete p.HRef, delete p.HRefScreenTip), (p.MergeAcross || p.MergeDown) && (w = I + (parseInt(p.MergeAcross, 10) | 0), P = T + (parseInt(p.MergeDown, 10) | 0), m.push({ s: { c: I, r: T }, e: { c: w, r: P } })), !r.sheetStubs)
          p.MergeAcross ? I = w + 1 : ++I;
        else if (p.MergeAcross || p.MergeDown) {
          for (var ee = I; ee <= w; ++ee)
            for (var Z = T; Z <= P; ++Z)
              (ee > I || Z > T) && (r.dense ? (h[Z] || (h[Z] = []), h[Z][ee] = { t: "z" }) : h[Ye(ee) + er(Z)] = { t: "z" });
          I = w + 1;
        } else ++I;
      else
        p = bx(c[0]), p.Index && (I = +p.Index - 1), I < U.s.c && (U.s.c = I), I > U.e.c && (U.e.c = I), c[0].slice(-2) === "/>" && ++I, ie = [];
      break;
    case "row":
      c[1] === "/" || c[0].slice(-2) === "/>" ? (T < U.s.r && (U.s.r = T), T > U.e.r && (U.e.r = T), c[0].slice(-2) === "/>" && (x = Cr(c[0]), x.Index && (T = +x.Index - 1)), I = 0, ++T) : (x = Cr(c[0]), x.Index && (T = +x.Index - 1), te = {}, (x.AutoFitHeight == "0" || x.Height) && (te.hpx = parseInt(x.Height, 10), te.hpt = zi(te.hpx), he[T] = te), x.Hidden == "1" && (te.hidden = !0, he[T] = te));
      break;
    case "worksheet":
      if (c[1] === "/") {
        if ((f = o.pop())[0] !== c[3]) throw new Error("Bad state: " + f.join("|"));
        u.push(d), U.s.r <= U.e.r && U.s.c <= U.e.c && (h["!ref"] = Se(U), r.sheetRows && r.sheetRows <= U.e.r && (h["!fullref"] = h["!ref"], U.e.r = r.sheetRows - 1, h["!ref"] = Se(U))), m.length && (h["!merges"] = m), fe.length > 0 && (h["!cols"] = fe), he.length > 0 && (h["!rows"] = he), l[d] = h;
      } else
        U = { s: { r: 2e6, c: 2e6 }, e: { r: 0, c: 0 } }, T = I = 0, o.push([c[3], !1]), f = Cr(c[0]), d = Ce(f.Name), h = r.dense ? [] : {}, m = [], M = [], he = [], N = { name: d, Hidden: 0 }, b.Sheets.push(N);
      break;
    case "table":
      if (c[1] === "/") {
        if ((f = o.pop())[0] !== c[3]) throw new Error("Bad state: " + f.join("|"));
      } else {
        if (c[0].slice(-2) == "/>") break;
        o.push([c[3], !1]), fe = [], ve = !1;
      }
      break;
    case "style":
      c[1] === "/" ? Hx(V, B, r) : B = Cr(c[0]);
      break;
    case "numberformat":
      B.nf = Ce(Cr(c[0]).Format || "General"), Ga[B.nf] && (B.nf = Ga[B.nf]);
      for (var J = 0; J != 392 && Ee[J] != B.nf; ++J) ;
      if (J == 392) {
        for (J = 57; J != 392; ++J) if (Ee[J] == null) {
          ta(B.nf, J);
          break;
        }
      }
      break;
    case "column":
      if (o[o.length - 1][0] !== /*'Table'*/
      "table") break;
      if (q = Cr(c[0]), q.Hidden && (q.hidden = !0, delete q.Hidden), q.Width && (q.wpx = parseInt(q.Width, 10)), !ve && q.wpx > 10) {
        ve = !0, hr = Gi;
        for (var j = 0; j < fe.length; ++j) fe[j] && wa(fe[j]);
      }
      ve && wa(q), fe[q.Index - 1 || fe.length] = q;
      for (var se = 0; se < +q.Span; ++se) fe[fe.length] = Qe(q);
      break;
    case "namedrange":
      if (c[1] === "/") break;
      b.Names || (b.Names = []);
      var C = ge(c[0]), Te = {
        Name: C.Name,
        Ref: Ea(C.RefersTo.slice(1), { r: 0, c: 0 })
      };
      b.Sheets.length > 0 && (Te.Sheet = b.Sheets.length - 1), b.Names.push(Te);
      break;
    case "namedcell":
      break;
    case "b":
      break;
    case "i":
      break;
    case "u":
      break;
    case "s":
      break;
    case "em":
      break;
    case "h2":
      break;
    case "h3":
      break;
    case "sub":
      break;
    case "sup":
      break;
    case "span":
      break;
    case "alignment":
      break;
    case "borders":
      break;
    case "border":
      break;
    case "font":
      if (c[0].slice(-2) === "/>") break;
      c[1] === "/" ? A += n.slice(_, c.index) : _ = c.index + c[0].length;
      break;
    case "interior":
      if (!r.cellStyles) break;
      B.Interior = Cr(c[0]);
      break;
    case "protection":
      break;
    case "author":
    case "title":
    case "description":
    case "created":
    case "keywords":
    case "subject":
    case "category":
    case "company":
    case "lastauthor":
    case "lastsaved":
    case "lastprinted":
    case "version":
    case "revision":
    case "totaltime":
    case "hyperlinkbase":
    case "manager":
    case "contentstatus":
    case "identifier":
    case "language":
    case "appname":
      if (c[0].slice(-2) === "/>") break;
      c[1] === "/" ? Af(R, K, n.slice(D, c.index)) : D = c.index + c[0].length;
      break;
    case "paragraphs":
      break;
    case "styles":
    case "workbook":
      if (c[1] === "/") {
        if ((f = o.pop())[0] !== c[3]) throw new Error("Bad state: " + f.join("|"));
      } else o.push([c[3], !1]);
      break;
    case "comment":
      if (c[1] === "/") {
        if ((f = o.pop())[0] !== c[3]) throw new Error("Bad state: " + f.join("|"));
        Vx(re), ie.push(re);
      } else
        o.push([c[3], !1]), f = Cr(c[0]), re = { a: f.Author };
      break;
    case "autofilter":
      if (c[1] === "/") {
        if ((f = o.pop())[0] !== c[3]) throw new Error("Bad state: " + f.join("|"));
      } else if (c[0].charAt(c[0].length - 2) !== "/") {
        var de = Cr(c[0]);
        h["!autofilter"] = { ref: Ea(de.Range).replace(/\$/g, "") }, o.push([c[3], !0]);
      }
      break;
    case "name":
      break;
    case "datavalidation":
      if (c[1] === "/") {
        if ((f = o.pop())[0] !== c[3]) throw new Error("Bad state: " + f.join("|"));
      } else
        c[0].charAt(c[0].length - 2) !== "/" && o.push([c[3], !0]);
      break;
    case "pixelsperinch":
      break;
    case "componentoptions":
    case "documentproperties":
    case "customdocumentproperties":
    case "officedocumentsettings":
    case "pivottable":
    case "pivotcache":
    case "names":
    case "mapinfo":
    case "pagebreaks":
    case "querytable":
    case "sorting":
    case "schema":
    //case 'data' /*case 'data'*/:
    case "conditionalformatting":
    case "smarttagtype":
    case "smarttags":
    case "excelworkbook":
    case "workbookoptions":
    case "worksheetoptions":
      if (c[1] === "/") {
        if ((f = o.pop())[0] !== c[3]) throw new Error("Bad state: " + f.join("|"));
      } else c[0].charAt(c[0].length - 2) !== "/" && o.push([c[3], !0]);
      break;
    case "null":
      break;
    default:
      if (o.length == 0 && c[3] == "document" || o.length == 0 && c[3] == "uof") return Rn(n, r);
      var pe = !0;
      switch (o[o.length - 1][0]) {
        /* OfficeDocumentSettings */
        case "officedocumentsettings":
          switch (c[3]) {
            case "allowpng":
              break;
            case "removepersonalinformation":
              break;
            case "downloadcomponents":
              break;
            case "locationofcomponents":
              break;
            case "colors":
              break;
            case "color":
              break;
            case "index":
              break;
            case "rgb":
              break;
            case "targetscreensize":
              break;
            case "readonlyrecommended":
              break;
            default:
              pe = !1;
          }
          break;
        /* ComponentOptions */
        case "componentoptions":
          switch (c[3]) {
            case "toolbar":
              break;
            case "hideofficelogo":
              break;
            case "spreadsheetautofit":
              break;
            case "label":
              break;
            case "caption":
              break;
            case "maxheight":
              break;
            case "maxwidth":
              break;
            case "nextsheetnumber":
              break;
            default:
              pe = !1;
          }
          break;
        /* ExcelWorkbook */
        case "excelworkbook":
          switch (c[3]) {
            case "date1904":
              b.WBProps.date1904 = !0;
              break;
            case "windowheight":
              break;
            case "windowwidth":
              break;
            case "windowtopx":
              break;
            case "windowtopy":
              break;
            case "tabratio":
              break;
            case "protectstructure":
              break;
            case "protectwindow":
              break;
            case "protectwindows":
              break;
            case "activesheet":
              break;
            case "displayinknotes":
              break;
            case "firstvisiblesheet":
              break;
            case "supbook":
              break;
            case "sheetname":
              break;
            case "sheetindex":
              break;
            case "sheetindexfirst":
              break;
            case "sheetindexlast":
              break;
            case "dll":
              break;
            case "acceptlabelsinformulas":
              break;
            case "donotsavelinkvalues":
              break;
            case "iteration":
              break;
            case "maxiterations":
              break;
            case "maxchange":
              break;
            case "path":
              break;
            case "xct":
              break;
            case "count":
              break;
            case "selectedsheets":
              break;
            case "calculation":
              break;
            case "uncalced":
              break;
            case "startupprompt":
              break;
            case "crn":
              break;
            case "externname":
              break;
            case "formula":
              break;
            case "colfirst":
              break;
            case "collast":
              break;
            case "wantadvise":
              break;
            case "boolean":
              break;
            case "error":
              break;
            case "text":
              break;
            case "ole":
              break;
            case "noautorecover":
              break;
            case "publishobjects":
              break;
            case "donotcalculatebeforesave":
              break;
            case "number":
              break;
            case "refmoder1c1":
              break;
            case "embedsavesmarttags":
              break;
            default:
              pe = !1;
          }
          break;
        /* WorkbookOptions */
        case "workbookoptions":
          switch (c[3]) {
            case "owcversion":
              break;
            case "height":
              break;
            case "width":
              break;
            default:
              pe = !1;
          }
          break;
        /* WorksheetOptions */
        case "worksheetoptions":
          switch (c[3]) {
            case "visible":
              if (c[0].slice(-2) !== "/>") if (c[1] === "/") switch (n.slice(D, c.index)) {
                case "SheetHidden":
                  N.Hidden = 1;
                  break;
                case "SheetVeryHidden":
                  N.Hidden = 2;
                  break;
              }
              else D = c.index + c[0].length;
              break;
            case "header":
              h["!margins"] || Va(h["!margins"] = {}, "xlml"), isNaN(+ge(c[0]).Margin) || (h["!margins"].header = +ge(c[0]).Margin);
              break;
            case "footer":
              h["!margins"] || Va(h["!margins"] = {}, "xlml"), isNaN(+ge(c[0]).Margin) || (h["!margins"].footer = +ge(c[0]).Margin);
              break;
            case "pagemargins":
              var oe = ge(c[0]);
              h["!margins"] || Va(h["!margins"] = {}, "xlml"), isNaN(+oe.Top) || (h["!margins"].top = +oe.Top), isNaN(+oe.Left) || (h["!margins"].left = +oe.Left), isNaN(+oe.Right) || (h["!margins"].right = +oe.Right), isNaN(+oe.Bottom) || (h["!margins"].bottom = +oe.Bottom);
              break;
            case "displayrighttoleft":
              b.Views || (b.Views = []), b.Views[0] || (b.Views[0] = {}), b.Views[0].RTL = !0;
              break;
            case "freezepanes":
              break;
            case "frozennosplit":
              break;
            case "splithorizontal":
            case "splitvertical":
              break;
            case "donotdisplaygridlines":
              break;
            case "activerow":
              break;
            case "activecol":
              break;
            case "toprowbottompane":
              break;
            case "leftcolumnrightpane":
              break;
            case "unsynced":
              break;
            case "print":
              break;
            case "printerrors":
              break;
            case "panes":
              break;
            case "scale":
              break;
            case "pane":
              break;
            case "number":
              break;
            case "layout":
              break;
            case "pagesetup":
              break;
            case "selected":
              break;
            case "protectobjects":
              break;
            case "enableselection":
              break;
            case "protectscenarios":
              break;
            case "validprinterinfo":
              break;
            case "horizontalresolution":
              break;
            case "verticalresolution":
              break;
            case "numberofcopies":
              break;
            case "activepane":
              break;
            case "toprowvisible":
              break;
            case "leftcolumnvisible":
              break;
            case "fittopage":
              break;
            case "rangeselection":
              break;
            case "papersizeindex":
              break;
            case "pagelayoutzoom":
              break;
            case "pagebreakzoom":
              break;
            case "filteron":
              break;
            case "fitwidth":
              break;
            case "fitheight":
              break;
            case "commentslayout":
              break;
            case "zoom":
              break;
            case "lefttoright":
              break;
            case "gridlines":
              break;
            case "allowsort":
              break;
            case "allowfilter":
              break;
            case "allowinsertrows":
              break;
            case "allowdeleterows":
              break;
            case "allowinsertcols":
              break;
            case "allowdeletecols":
              break;
            case "allowinserthyperlinks":
              break;
            case "allowformatcells":
              break;
            case "allowsizecols":
              break;
            case "allowsizerows":
              break;
            case "nosummaryrowsbelowdetail":
              h["!outline"] || (h["!outline"] = {}), h["!outline"].above = !0;
              break;
            case "tabcolorindex":
              break;
            case "donotdisplayheadings":
              break;
            case "showpagelayoutzoom":
              break;
            case "nosummarycolumnsrightdetail":
              h["!outline"] || (h["!outline"] = {}), h["!outline"].left = !0;
              break;
            case "blackandwhite":
              break;
            case "donotdisplayzeros":
              break;
            case "displaypagebreak":
              break;
            case "rowcolheadings":
              break;
            case "donotdisplayoutline":
              break;
            case "noorientation":
              break;
            case "allowusepivottables":
              break;
            case "zeroheight":
              break;
            case "viewablerange":
              break;
            case "selection":
              break;
            case "protectcontents":
              break;
            default:
              pe = !1;
          }
          break;
        /* PivotTable */
        case "pivottable":
        case "pivotcache":
          switch (c[3]) {
            case "immediateitemsondrop":
              break;
            case "showpagemultipleitemlabel":
              break;
            case "compactrowindent":
              break;
            case "location":
              break;
            case "pivotfield":
              break;
            case "orientation":
              break;
            case "layoutform":
              break;
            case "layoutsubtotallocation":
              break;
            case "layoutcompactrow":
              break;
            case "position":
              break;
            case "pivotitem":
              break;
            case "datatype":
              break;
            case "datafield":
              break;
            case "sourcename":
              break;
            case "parentfield":
              break;
            case "ptlineitems":
              break;
            case "ptlineitem":
              break;
            case "countofsameitems":
              break;
            case "item":
              break;
            case "itemtype":
              break;
            case "ptsource":
              break;
            case "cacheindex":
              break;
            case "consolidationreference":
              break;
            case "filename":
              break;
            case "reference":
              break;
            case "nocolumngrand":
              break;
            case "norowgrand":
              break;
            case "blanklineafteritems":
              break;
            case "hidden":
              break;
            case "subtotal":
              break;
            case "basefield":
              break;
            case "mapchilditems":
              break;
            case "function":
              break;
            case "refreshonfileopen":
              break;
            case "printsettitles":
              break;
            case "mergelabels":
              break;
            case "defaultversion":
              break;
            case "refreshname":
              break;
            case "refreshdate":
              break;
            case "refreshdatecopy":
              break;
            case "versionlastrefresh":
              break;
            case "versionlastupdate":
              break;
            case "versionupdateablemin":
              break;
            case "versionrefreshablemin":
              break;
            case "calculation":
              break;
            default:
              pe = !1;
          }
          break;
        /* PageBreaks */
        case "pagebreaks":
          switch (c[3]) {
            case "colbreaks":
              break;
            case "colbreak":
              break;
            case "rowbreaks":
              break;
            case "rowbreak":
              break;
            case "colstart":
              break;
            case "colend":
              break;
            case "rowend":
              break;
            default:
              pe = !1;
          }
          break;
        /* AutoFilter */
        case "autofilter":
          switch (c[3]) {
            case "autofiltercolumn":
              break;
            case "autofiltercondition":
              break;
            case "autofilterand":
              break;
            case "autofilteror":
              break;
            default:
              pe = !1;
          }
          break;
        /* QueryTable */
        case "querytable":
          switch (c[3]) {
            case "id":
              break;
            case "autoformatfont":
              break;
            case "autoformatpattern":
              break;
            case "querysource":
              break;
            case "querytype":
              break;
            case "enableredirections":
              break;
            case "refreshedinxl9":
              break;
            case "urlstring":
              break;
            case "htmltables":
              break;
            case "connection":
              break;
            case "commandtext":
              break;
            case "refreshinfo":
              break;
            case "notitles":
              break;
            case "nextid":
              break;
            case "columninfo":
              break;
            case "overwritecells":
              break;
            case "donotpromptforfile":
              break;
            case "textwizardsettings":
              break;
            case "source":
              break;
            case "number":
              break;
            case "decimal":
              break;
            case "thousandseparator":
              break;
            case "trailingminusnumbers":
              break;
            case "formatsettings":
              break;
            case "fieldtype":
              break;
            case "delimiters":
              break;
            case "tab":
              break;
            case "comma":
              break;
            case "autoformatname":
              break;
            case "versionlastedit":
              break;
            case "versionlastrefresh":
              break;
            default:
              pe = !1;
          }
          break;
        case "datavalidation":
          switch (c[3]) {
            case "range":
              break;
            case "type":
              break;
            case "min":
              break;
            case "max":
              break;
            case "sort":
              break;
            case "descending":
              break;
            case "order":
              break;
            case "casesensitive":
              break;
            case "value":
              break;
            case "errorstyle":
              break;
            case "errormessage":
              break;
            case "errortitle":
              break;
            case "inputmessage":
              break;
            case "inputtitle":
              break;
            case "combohide":
              break;
            case "inputhide":
              break;
            case "condition":
              break;
            case "qualifier":
              break;
            case "useblank":
              break;
            case "value1":
              break;
            case "value2":
              break;
            case "format":
              break;
            case "cellrangelist":
              break;
            default:
              pe = !1;
          }
          break;
        case "sorting":
        case "conditionalformatting":
          switch (c[3]) {
            case "range":
              break;
            case "type":
              break;
            case "min":
              break;
            case "max":
              break;
            case "sort":
              break;
            case "descending":
              break;
            case "order":
              break;
            case "casesensitive":
              break;
            case "value":
              break;
            case "errorstyle":
              break;
            case "errormessage":
              break;
            case "errortitle":
              break;
            case "cellrangelist":
              break;
            case "inputmessage":
              break;
            case "inputtitle":
              break;
            case "combohide":
              break;
            case "inputhide":
              break;
            case "condition":
              break;
            case "qualifier":
              break;
            case "useblank":
              break;
            case "value1":
              break;
            case "value2":
              break;
            case "format":
              break;
            default:
              pe = !1;
          }
          break;
        /* MapInfo (schema) */
        case "mapinfo":
        case "schema":
        case "data":
          switch (c[3]) {
            case "map":
              break;
            case "entry":
              break;
            case "range":
              break;
            case "xpath":
              break;
            case "field":
              break;
            case "xsdtype":
              break;
            case "filteron":
              break;
            case "aggregate":
              break;
            case "elementtype":
              break;
            case "attributetype":
              break;
            /* These are from xsd (XML Schema Definition) */
            case "schema":
            case "element":
            case "complextype":
            case "datatype":
            case "all":
            case "attribute":
            case "extends":
              break;
            case "row":
              break;
            default:
              pe = !1;
          }
          break;
        /* SmartTags (can be anything) */
        case "smarttags":
          break;
        default:
          pe = !1;
          break;
      }
      if (pe || c[3].match(/!\[CDATA/)) break;
      if (!o[o.length - 1][1]) throw "Unrecognized tag: " + c[3] + "|" + o.join("|");
      if (o[o.length - 1][0] === /*'CustomDocumentProperties'*/
      "customdocumentproperties") {
        if (c[0].slice(-2) === "/>") break;
        c[1] === "/" ? Bx(L, K, z, n.slice(D, c.index)) : (z = c, D = c.index + c[0].length);
        break;
      }
      if (r.WTF) throw "Unrecognized tag: " + c[3] + "|" + o.join("|");
  }
  var ne = {};
  return !r.bookSheets && !r.bookProps && (ne.Sheets = l), ne.SheetNames = u, ne.Workbook = b, ne.SSF = Qe(Ee), ne.Props = R, ne.Custprops = L, ne;
}
function Yt(e, a) {
  switch (w0(a = a || {}), a.type || "base64") {
    case "base64":
      return Ht(Tr(e), a);
    case "binary":
    case "buffer":
    case "file":
      return Ht(e, a);
    case "array":
      return Ht(oa(e), a);
  }
}
function Gx(e) {
  var a = {}, r = e.content;
  if (r.l = 28, a.AnsiUserType = r.read_shift(0, "lpstr-ansi"), a.AnsiClipboardFormat = rf(r), r.length - r.l <= 4) return a;
  var n = r.read_shift(4);
  if (n == 0 || n > 40 || (r.l -= 4, a.Reserved1 = r.read_shift(0, "lpstr-ansi"), r.length - r.l <= 4) || (n = r.read_shift(4), n !== 1907505652) || (a.UnicodeClipboardFormat = af(r), n = r.read_shift(4), n == 0 || n > 40)) return a;
  r.l -= 4, a.Reserved2 = r.read_shift(0, "lpwstr");
}
var Xx = [60, 1084, 2066, 2165, 2175];
function zx(e, a, r, n, t) {
  var i = n, s = [], c = r.slice(r.l, r.l + i);
  if (t && t.enc && t.enc.insitu && c.length > 0) switch (e) {
    case 9:
    case 521:
    case 1033:
    case 2057:
    case 47:
    case 405:
    case 225:
    case 406:
    case 312:
    case 404:
    case 10:
      break;
    case 133:
      break;
    default:
      t.enc.insitu(c);
  }
  s.push(c), r.l += i;
  for (var o = Hr(r, r.l), f = jt[o], l = 0; f != null && Xx.indexOf(o) > -1; )
    i = Hr(r, r.l + 2), l = r.l + 4, o == 2066 ? l += 4 : (o == 2165 || o == 2175) && (l += 12), c = r.slice(l, r.l + 4 + i), s.push(c), r.l += 4 + i, f = jt[o = Hr(r, r.l)];
  var u = Kr(s);
  Ze(u, 0);
  var h = 0;
  u.lens = [];
  for (var d = 0; d < s.length; ++d)
    u.lens.push(h), h += s[d].length;
  if (u.length < n) throw "XLS Record 0x" + e.toString(16) + " Truncated: " + u.length + " < " + n;
  return a.f(u, u.length, t);
}
function Pr(e, a, r) {
  if (e.t !== "z" && e.XF) {
    var n = 0;
    try {
      n = e.z || e.XF.numFmtId || 0, a.cellNF && (e.z = Ee[n]);
    } catch (i) {
      if (a.WTF) throw i;
    }
    if (!a || a.cellText !== !1) try {
      e.t === "e" ? e.w = e.w || ha[e.v] : n === 0 || n == "General" ? e.t === "n" ? (e.v | 0) === e.v ? e.w = e.v.toString(10) : e.w = za(e.v) : e.w = ia(e.v) : e.w = Fr(n, e.v, { date1904: !!r, dateNF: a && a.dateNF });
    } catch (i) {
      if (a.WTF) throw i;
    }
    if (a.cellDates && n && e.t == "n" && Fa(Ee[n] || String(n))) {
      var t = aa(e.v);
      t && (e.t = "d", e.v = new Date(t.y, t.m - 1, t.d, t.H, t.M, t.S, t.u));
    }
  }
}
function dt(e, a, r) {
  return { v: e, ixfe: a, t: r };
}
function $x(e, a) {
  var r = { opts: {} }, n = {}, t = a.dense ? [] : {}, i = {}, s = {}, c = null, o = [], f = "", l = {}, u, h = "", d, p, x, g, O = {}, I = [], T, U, V = [], B = [], A = { Sheets: [], WBProps: { date1904: !1 }, Views: [{}] }, _ = {}, m = function(ke) {
    return ke < 8 ? na[ke] : ke < 64 && B[ke - 8] || na[ke];
  }, R = function(ke, Oe, Le) {
    var Ne = Oe.XF.data;
    if (!(!Ne || !Ne.patternType || !Le || !Le.cellStyles)) {
      Oe.s = {}, Oe.s.patternType = Ne.patternType;
      var Nr;
      (Nr = ja(m(Ne.icvFore))) && (Oe.s.fgColor = { rgb: Nr }), (Nr = ja(m(Ne.icvBack))) && (Oe.s.bgColor = { rgb: Nr });
    }
  }, L = function(ke, Oe, Le) {
    if (!(te > 1) && !(Le.sheetRows && ke.r >= Le.sheetRows)) {
      if (Le.cellStyles && Oe.XF && Oe.XF.data && R(ke, Oe, Le), delete Oe.ixfe, delete Oe.XF, u = ke, h = me(ke), (!s || !s.s || !s.e) && (s = { s: { r: 0, c: 0 }, e: { r: 0, c: 0 } }), ke.r < s.s.r && (s.s.r = ke.r), ke.c < s.s.c && (s.s.c = ke.c), ke.r + 1 > s.e.r && (s.e.r = ke.r + 1), ke.c + 1 > s.e.c && (s.e.c = ke.c + 1), Le.cellFormula && Oe.f) {
        for (var Ne = 0; Ne < I.length; ++Ne)
          if (!(I[Ne][0].s.c > ke.c || I[Ne][0].s.r > ke.r) && !(I[Ne][0].e.c < ke.c || I[Ne][0].e.r < ke.r)) {
            Oe.F = Se(I[Ne][0]), (I[Ne][0].s.c != ke.c || I[Ne][0].s.r != ke.r) && delete Oe.f, Oe.f && (Oe.f = "" + ir(I[Ne][1], s, ke, M, D));
            break;
          }
      }
      Le.dense ? (t[ke.r] || (t[ke.r] = []), t[ke.r][ke.c] = Oe) : t[h] = Oe;
    }
  }, D = {
    enc: !1,
    // encrypted
    sbcch: 0,
    // cch in the preceding SupBook
    snames: [],
    // sheetnames
    sharedf: O,
    // shared formulae by address
    arrayf: I,
    // array formulae array
    rrtabid: [],
    // RRTabId
    lastuser: "",
    // Last User from WriteAccess
    biff: 8,
    // BIFF version
    codepage: 0,
    // CP from CodePage record
    winlocked: 0,
    // fLockWn from WinProtect
    cellStyles: !!a && !!a.cellStyles,
    WTF: !!a && !!a.wtf
  };
  a.password && (D.password = a.password);
  var z, ie = [], re = [], fe = [], q = [], ve = !1, M = [];
  M.SheetNames = D.snames, M.sharedf = D.sharedf, M.arrayf = D.arrayf, M.names = [], M.XTI = [];
  var he = 0, te = 0, w = 0, P = [], b = [], N;
  D.codepage = 1200, Dr(1200);
  for (var K = !1; e.l < e.length - 1; ) {
    var ee = e.l, Z = e.read_shift(2);
    if (Z === 0 && he === 10) break;
    var J = e.l === e.length ? 0 : e.read_shift(2), j = jt[Z];
    if (j && j.f) {
      if (a.bookSheets && he === 133 && Z !== 133)
        break;
      if (he = Z, j.r === 2 || j.r == 12) {
        var se = e.read_shift(2);
        if (J -= 2, !D.enc && se !== Z && ((se & 255) << 8 | se >> 8) !== Z) throw new Error("rt mismatch: " + se + "!=" + Z);
        j.r == 12 && (e.l += 10, J -= 10);
      }
      var C = {};
      if (Z === 10 ? C = /*::(*/
      j.f(e, J, D) : C = /*::(*/
      zx(Z, j, e, J, D), te == 0 && [9, 521, 1033, 2057].indexOf(he) === -1) continue;
      switch (Z) {
        case 34:
          r.opts.Date1904 = A.WBProps.date1904 = C;
          break;
        case 134:
          r.opts.WriteProtect = !0;
          break;
        case 47:
          if (D.enc || (e.l = 0), D.enc = C, !a.password) throw new Error("File is password-protected");
          if (C.valid == null) throw new Error("Encryption scheme unsupported");
          if (!C.valid) throw new Error("Password is incorrect");
          break;
        case 92:
          D.lastuser = C;
          break;
        case 66:
          var Te = Number(C);
          switch (Te) {
            case 21010:
              Te = 1200;
              break;
            case 32768:
              Te = 1e4;
              break;
            case 32769:
              Te = 1252;
              break;
          }
          Dr(D.codepage = Te), K = !0;
          break;
        case 317:
          D.rrtabid = C;
          break;
        case 25:
          D.winlocked = C;
          break;
        case 439:
          r.opts.RefreshAll = C;
          break;
        case 12:
          r.opts.CalcCount = C;
          break;
        case 16:
          r.opts.CalcDelta = C;
          break;
        case 17:
          r.opts.CalcIter = C;
          break;
        case 13:
          r.opts.CalcMode = C;
          break;
        case 14:
          r.opts.CalcPrecision = C;
          break;
        case 95:
          r.opts.CalcSaveRecalc = C;
          break;
        case 15:
          D.CalcRefMode = C;
          break;
        // TODO: implement R1C1
        case 2211:
          r.opts.FullCalc = C;
          break;
        case 129:
          C.fDialog && (t["!type"] = "dialog"), C.fBelow || ((t["!outline"] || (t["!outline"] = {})).above = !0), C.fRight || ((t["!outline"] || (t["!outline"] = {})).left = !0);
          break;
        // TODO
        case 224:
          V.push(C);
          break;
        case 430:
          M.push([C]), M[M.length - 1].XTI = [];
          break;
        case 35:
        case 547:
          M[M.length - 1].push(C);
          break;
        case 24:
        case 536:
          N = {
            Name: C.Name,
            Ref: ir(C.rgce, s, null, M, D)
          }, C.itab > 0 && (N.Sheet = C.itab - 1), M.names.push(N), M[0] || (M[0] = [], M[0].XTI = []), M[M.length - 1].push(C), C.Name == "_xlnm._FilterDatabase" && C.itab > 0 && C.rgce && C.rgce[0] && C.rgce[0][0] && C.rgce[0][0][0] == "PtgArea3d" && (b[C.itab - 1] = { ref: Se(C.rgce[0][0][1][2]) });
          break;
        case 22:
          D.ExternCount = C;
          break;
        case 23:
          M.length == 0 && (M[0] = [], M[0].XTI = []), M[M.length - 1].XTI = M[M.length - 1].XTI.concat(C), M.XTI = M.XTI.concat(C);
          break;
        case 2196:
          if (D.biff < 8) break;
          N != null && (N.Comment = C[1]);
          break;
        case 18:
          t["!protect"] = C;
          break;
        /* for sheet or book */
        case 19:
          C !== 0 && D.WTF && console.error("Password verifier: " + C);
          break;
        case 133:
          i[C.pos] = C, D.snames.push(C.name);
          break;
        case 10:
          {
            if (--te) break;
            if (s.e) {
              if (s.e.r > 0 && s.e.c > 0) {
                if (s.e.r--, s.e.c--, t["!ref"] = Se(s), a.sheetRows && a.sheetRows <= s.e.r) {
                  var de = s.e.r;
                  s.e.r = a.sheetRows - 1, t["!fullref"] = t["!ref"], t["!ref"] = Se(s), s.e.r = de;
                }
                s.e.r++, s.e.c++;
              }
              ie.length > 0 && (t["!merges"] = ie), re.length > 0 && (t["!objects"] = re), fe.length > 0 && (t["!cols"] = fe), q.length > 0 && (t["!rows"] = q), A.Sheets.push(_);
            }
            f === "" ? l = t : n[f] = t, t = a.dense ? [] : {};
          }
          break;
        case 9:
        case 521:
        case 1033:
        case 2057:
          {
            if (D.biff === 8 && (D.biff = {
              /*::[*/
              9: 2,
              /*::[*/
              521: 3,
              /*::[*/
              1033: 4
            }[Z] || {
              /*::[*/
              512: 2,
              /*::[*/
              768: 3,
              /*::[*/
              1024: 4,
              /*::[*/
              1280: 5,
              /*::[*/
              1536: 8,
              /*::[*/
              2: 2,
              /*::[*/
              7: 2
            }[C.BIFFVer] || 8), D.biffguess = C.BIFFVer == 0, C.BIFFVer == 0 && C.dt == 4096 && (D.biff = 5, K = !0, Dr(D.codepage = 28591)), D.biff == 8 && C.BIFFVer == 0 && C.dt == 16 && (D.biff = 2), te++) break;
            if (t = a.dense ? [] : {}, D.biff < 8 && !K && (K = !0, Dr(D.codepage = a.codepage || 1252)), D.biff < 5 || C.BIFFVer == 0 && C.dt == 4096) {
              f === "" && (f = "Sheet1"), s = { s: { r: 0, c: 0 }, e: { r: 0, c: 0 } };
              var pe = { pos: e.l - J, name: f };
              i[pe.pos] = pe, D.snames.push(f);
            } else f = (i[ee] || { name: "" }).name;
            C.dt == 32 && (t["!type"] = "chart"), C.dt == 64 && (t["!type"] = "macro"), ie = [], re = [], D.arrayf = I = [], fe = [], q = [], ve = !1, _ = { Hidden: (i[ee] || { hs: 0 }).hs, name: f };
          }
          break;
        case 515:
        case 3:
        case 2:
          t["!type"] == "chart" && (a.dense ? (t[C.r] || [])[C.c] : t[me({ c: C.c, r: C.r })]) && ++C.c, T = { ixfe: C.ixfe, XF: V[C.ixfe] || {}, v: C.val, t: "n" }, w > 0 && (T.z = P[T.ixfe >> 8 & 63]), Pr(T, a, r.opts.Date1904), L({ c: C.c, r: C.r }, T, a);
          break;
        case 5:
        case 517:
          T = { ixfe: C.ixfe, XF: V[C.ixfe], v: C.val, t: C.t }, w > 0 && (T.z = P[T.ixfe >> 8 & 63]), Pr(T, a, r.opts.Date1904), L({ c: C.c, r: C.r }, T, a);
          break;
        case 638:
          T = { ixfe: C.ixfe, XF: V[C.ixfe], v: C.rknum, t: "n" }, w > 0 && (T.z = P[T.ixfe >> 8 & 63]), Pr(T, a, r.opts.Date1904), L({ c: C.c, r: C.r }, T, a);
          break;
        case 189:
          for (var oe = C.c; oe <= C.C; ++oe) {
            var ne = C.rkrec[oe - C.c][0];
            T = { ixfe: ne, XF: V[ne], v: C.rkrec[oe - C.c][1], t: "n" }, w > 0 && (T.z = P[T.ixfe >> 8 & 63]), Pr(T, a, r.opts.Date1904), L({ c: oe, r: C.r }, T, a);
          }
          break;
        case 6:
        case 518:
        case 1030:
          {
            if (C.val == "String") {
              c = C;
              break;
            }
            if (T = dt(C.val, C.cell.ixfe, C.tt), T.XF = V[T.ixfe], a.cellFormula) {
              var xe = C.formula;
              if (xe && xe[0] && xe[0][0] && xe[0][0][0] == "PtgExp") {
                var we = xe[0][0][1][0], $e = xe[0][0][1][1], rr = me({ r: we, c: $e });
                O[rr] ? T.f = "" + ir(C.formula, s, C.cell, M, D) : T.F = ((a.dense ? (t[we] || [])[$e] : t[rr]) || {}).F;
              } else T.f = "" + ir(C.formula, s, C.cell, M, D);
            }
            w > 0 && (T.z = P[T.ixfe >> 8 & 63]), Pr(T, a, r.opts.Date1904), L(C.cell, T, a), c = C;
          }
          break;
        case 7:
        case 519:
          if (c)
            c.val = C, T = dt(C, c.cell.ixfe, "s"), T.XF = V[T.ixfe], a.cellFormula && (T.f = "" + ir(c.formula, s, c.cell, M, D)), w > 0 && (T.z = P[T.ixfe >> 8 & 63]), Pr(T, a, r.opts.Date1904), L(c.cell, T, a), c = null;
          else throw new Error("String record expects Formula");
          break;
        case 33:
        case 545:
          {
            I.push(C);
            var ar = me(C[0].s);
            if (d = a.dense ? (t[C[0].s.r] || [])[C[0].s.c] : t[ar], a.cellFormula && d) {
              if (!c || !ar || !d) break;
              d.f = "" + ir(C[1], s, C[0], M, D), d.F = Se(C[0]);
            }
          }
          break;
        case 1212:
          {
            if (!a.cellFormula) break;
            if (h) {
              if (!c) break;
              O[me(c.cell)] = C[0], d = a.dense ? (t[c.cell.r] || [])[c.cell.c] : t[me(c.cell)], (d || {}).f = "" + ir(C[0], s, u, M, D);
            }
          }
          break;
        case 253:
          T = dt(o[C.isst].t, C.ixfe, "s"), o[C.isst].h && (T.h = o[C.isst].h), T.XF = V[T.ixfe], w > 0 && (T.z = P[T.ixfe >> 8 & 63]), Pr(T, a, r.opts.Date1904), L({ c: C.c, r: C.r }, T, a);
          break;
        case 513:
          a.sheetStubs && (T = { ixfe: C.ixfe, XF: V[C.ixfe], t: "z" }, w > 0 && (T.z = P[T.ixfe >> 8 & 63]), Pr(T, a, r.opts.Date1904), L({ c: C.c, r: C.r }, T, a));
          break;
        case 190:
          if (a.sheetStubs)
            for (var vr = C.c; vr <= C.C; ++vr) {
              var ye = C.ixfe[vr - C.c];
              T = { ixfe: ye, XF: V[ye], t: "z" }, w > 0 && (T.z = P[T.ixfe >> 8 & 63]), Pr(T, a, r.opts.Date1904), L({ c: vr, r: C.r }, T, a);
            }
          break;
        case 214:
        case 516:
        case 4:
          T = dt(C.val, C.ixfe, "s"), T.XF = V[T.ixfe], w > 0 && (T.z = P[T.ixfe >> 8 & 63]), Pr(T, a, r.opts.Date1904), L({ c: C.c, r: C.r }, T, a);
          break;
        case 0:
        case 512:
          te === 1 && (s = C);
          break;
        case 252:
          o = C;
          break;
        case 1054:
          if (D.biff == 4) {
            P[w++] = C[1];
            for (var We = 0; We < w + 163 && Ee[We] != C[1]; ++We) ;
            We >= 163 && ta(C[1], w + 163);
          } else ta(C[1], C[0]);
          break;
        case 30:
          {
            P[w++] = C;
            for (var De = 0; De < w + 163 && Ee[De] != C; ++De) ;
            De >= 163 && ta(C, w + 163);
          }
          break;
        case 229:
          ie = ie.concat(C);
          break;
        case 93:
          re[C.cmo[0]] = D.lastobj = C;
          break;
        case 438:
          D.lastobj.TxO = C;
          break;
        case 127:
          D.lastobj.ImData = C;
          break;
        case 440:
          for (g = C[0].s.r; g <= C[0].e.r; ++g)
            for (x = C[0].s.c; x <= C[0].e.c; ++x)
              d = a.dense ? (t[g] || [])[x] : t[me({ c: x, r: g })], d && (d.l = C[1]);
          break;
        case 2048:
          for (g = C[0].s.r; g <= C[0].e.r; ++g)
            for (x = C[0].s.c; x <= C[0].e.c; ++x)
              d = a.dense ? (t[g] || [])[x] : t[me({ c: x, r: g })], d && d.l && (d.l.Tooltip = C[1]);
          break;
        case 28:
          {
            if (D.biff <= 5 && D.biff >= 2) break;
            d = a.dense ? (t[C[0].r] || [])[C[0].c] : t[me(C[0])];
            var Ve = re[C[2]];
            d || (a.dense ? (t[C[0].r] || (t[C[0].r] = []), d = t[C[0].r][C[0].c] = { t: "z" }) : d = t[me(C[0])] = { t: "z" }, s.e.r = Math.max(s.e.r, C[0].r), s.s.r = Math.min(s.s.r, C[0].r), s.e.c = Math.max(s.e.c, C[0].c), s.s.c = Math.min(s.s.c, C[0].c)), d.c || (d.c = []), p = { a: C[1], t: Ve.TxO.t }, d.c.push(p);
          }
          break;
        case 2173:
          du(V[C.ixfe], C.ext);
          break;
        case 125:
          {
            if (!D.cellStyles) break;
            for (; C.e >= C.s; )
              fe[C.e--] = { width: C.w / 256, level: C.level || 0, hidden: !!(C.flags & 1) }, ve || (ve = !0, m0(C.w / 256)), wa(fe[C.e + 1]);
          }
          break;
        case 520:
          {
            var Ie = {};
            C.level != null && (q[C.r] = Ie, Ie.level = C.level), C.hidden && (q[C.r] = Ie, Ie.hidden = !0), C.hpt && (q[C.r] = Ie, Ie.hpt = C.hpt, Ie.hpx = Ja(C.hpt));
          }
          break;
        case 38:
        case 39:
        case 40:
        case 41:
          t["!margins"] || Va(t["!margins"] = {}), t["!margins"][{ 38: "left", 39: "right", 40: "top", 41: "bottom" }[Z]] = C;
          break;
        case 161:
          t["!margins"] || Va(t["!margins"] = {}), t["!margins"].header = C.header, t["!margins"].footer = C.footer;
          break;
        case 574:
          C.RTL && (A.Views[0].RTL = !0);
          break;
        case 146:
          B = C;
          break;
        case 2198:
          z = C;
          break;
        case 140:
          U = C;
          break;
        case 442:
          f ? _.CodeName = C || _.name : A.WBProps.CodeName = C || "ThisWorkbook";
          break;
      }
    } else
      j || console.error("Missing Info for XLS Record 0x" + Z.toString(16)), e.l += J;
  }
  return r.SheetNames = br(i).sort(function(gr, ke) {
    return Number(gr) - Number(ke);
  }).map(function(gr) {
    return i[gr].name;
  }), a.bookSheets || (r.Sheets = n), !r.SheetNames.length && l["!ref"] ? (r.SheetNames.push("Sheet1"), r.Sheets && (r.Sheets.Sheet1 = l)) : r.Preamble = l, r.Sheets && b.forEach(function(gr, ke) {
    r.Sheets[r.SheetNames[ke]]["!autofilter"] = gr;
  }), r.Strings = o, r.SSF = Qe(Ee), D.enc && (r.Encryption = D.enc), z && (r.Themes = z), r.Metadata = {}, U !== void 0 && (r.Metadata.Country = U), M.names.length > 0 && (A.Names = M.names), r.Workbook = A, r;
}
var Sn = {
  SI: "e0859ff2f94f6810ab9108002b27b3d9",
  DSI: "02d5cdd59c2e1b10939708002b2cf9ae",
  UDI: "05d5cdd59c2e1b10939708002b2cf9ae"
};
function Kx(e, a, r) {
  var n = Fe.find(e, "/!DocumentSummaryInformation");
  if (n && n.size > 0) try {
    var t = on(n, of, Sn.DSI);
    for (var i in t) a[i] = t[i];
  } catch (f) {
    if (r.WTF) throw f;
  }
  var s = Fe.find(e, "/!SummaryInformation");
  if (s && s.size > 0) try {
    var c = on(s, lf, Sn.SI);
    for (var o in c) a[o] == null && (a[o] = c[o]);
  } catch (f) {
    if (r.WTF) throw f;
  }
  a.HeadingPairs && a.TitlesOfParts && (Si(a.HeadingPairs, a.TitlesOfParts, a, r), delete a.HeadingPairs, delete a.TitlesOfParts);
}
function os(e, a) {
  a || (a = {}), w0(a), Bn(), a.codepage && r0(a.codepage);
  var r, n;
  if (e.FullPaths) {
    if (Fe.find(e, "/encryption")) throw new Error("File is password-protected");
    r = Fe.find(e, "!CompObj"), n = Fe.find(e, "/Workbook") || Fe.find(e, "/Book");
  } else {
    switch (a.type) {
      case "base64":
        e = Or(Tr(e));
        break;
      case "binary":
        e = Or(e);
        break;
      case "buffer":
        break;
      case "array":
        Array.isArray(e) || (e = Array.prototype.slice.call(e));
        break;
    }
    Ze(e, 0), n = { content: e };
  }
  var t, i;
  if (r && Gx(r), a.bookProps && !a.bookSheets) t = {};
  else {
    var s = Ae ? "buffer" : "array";
    if (n && n.content) t = $x(n.content, a);
    else if ((i = Fe.find(e, "PerfectOffice_MAIN")) && i.content) t = Ha.to_workbook(i.content, (a.type = s, a));
    else if ((i = Fe.find(e, "NativeContent_MAIN")) && i.content) t = Ha.to_workbook(i.content, (a.type = s, a));
    else throw (i = Fe.find(e, "MN0")) && i.content ? new Error("Unsupported Works 4 for Mac file") : new Error("Cannot find Workbook stream");
    a.bookVBA && e.FullPaths && Fe.find(e, "/_VBA_PROJECT_CUR/VBA/dir") && (t.vbaraw = Iu(e));
  }
  var c = {};
  return e.FullPaths && Kx(
    /*::((*/
    e,
    c,
    a
  ), t.Props = t.Custprops = c, a.bookFiles && (t.cfb = e), t;
}
var St = {
  /*::[*/
  0: {
    /* n:"BrtRowHdr", */
    f: y1
  },
  /*::[*/
  1: {
    /* n:"BrtCellBlank", */
    f: I1
  },
  /*::[*/
  2: {
    /* n:"BrtCellRk", */
    f: W1
  },
  /*::[*/
  3: {
    /* n:"BrtCellError", */
    f: b1
  },
  /*::[*/
  4: {
    /* n:"BrtCellBool", */
    f: P1
  },
  /*::[*/
  5: {
    /* n:"BrtCellReal", */
    f: H1
  },
  /*::[*/
  6: {
    /* n:"BrtCellSt", */
    f: X1
  },
  /*::[*/
  7: {
    /* n:"BrtCellIsst", */
    f: B1
  },
  /*::[*/
  8: {
    /* n:"BrtFmlaString", */
    f: j1
  },
  /*::[*/
  9: {
    /* n:"BrtFmlaNum", */
    f: Y1
  },
  /*::[*/
  10: {
    /* n:"BrtFmlaBool", */
    f: $1
  },
  /*::[*/
  11: {
    /* n:"BrtFmlaError", */
    f: K1
  },
  /*::[*/
  12: {
    /* n:"BrtShortBlank", */
    f: N1
  },
  /*::[*/
  13: {
    /* n:"BrtShortRk", */
    f: V1
  },
  /*::[*/
  14: {
    /* n:"BrtShortError", */
    f: M1
  },
  /*::[*/
  15: {
    /* n:"BrtShortBool", */
    f: L1
  },
  /*::[*/
  16: {
    /* n:"BrtShortReal", */
    f: ns
  },
  /*::[*/
  17: {
    /* n:"BrtShortSt", */
    f: z1
  },
  /*::[*/
  18: {
    /* n:"BrtShortIsst", */
    f: U1
  },
  /*::[*/
  19: {
    /* n:"BrtSSTItem", */
    f: h0
  },
  /*::[*/
  20: {
    /* n:"BrtPCDIMissing" */
  },
  /*::[*/
  21: {
    /* n:"BrtPCDINumber" */
  },
  /*::[*/
  22: {
    /* n:"BrtPCDIBoolean" */
  },
  /*::[*/
  23: {
    /* n:"BrtPCDIError" */
  },
  /*::[*/
  24: {
    /* n:"BrtPCDIString" */
  },
  /*::[*/
  25: {
    /* n:"BrtPCDIDatetime" */
  },
  /*::[*/
  26: {
    /* n:"BrtPCDIIndex" */
  },
  /*::[*/
  27: {
    /* n:"BrtPCDIAMissing" */
  },
  /*::[*/
  28: {
    /* n:"BrtPCDIANumber" */
  },
  /*::[*/
  29: {
    /* n:"BrtPCDIABoolean" */
  },
  /*::[*/
  30: {
    /* n:"BrtPCDIAError" */
  },
  /*::[*/
  31: {
    /* n:"BrtPCDIAString" */
  },
  /*::[*/
  32: {
    /* n:"BrtPCDIADatetime" */
  },
  /*::[*/
  33: {
    /* n:"BrtPCRRecord" */
  },
  /*::[*/
  34: {
    /* n:"BrtPCRRecordDt" */
  },
  /*::[*/
  35: {
    /* n:"BrtFRTBegin", */
    T: 1
  },
  /*::[*/
  36: {
    /* n:"BrtFRTEnd", */
    T: -1
  },
  /*::[*/
  37: {
    /* n:"BrtACBegin", */
    T: 1
  },
  /*::[*/
  38: {
    /* n:"BrtACEnd", */
    T: -1
  },
  /*::[*/
  39: {
    /* n:"BrtName", */
    f: kx
  },
  /*::[*/
  40: {
    /* n:"BrtIndexRowBlock" */
  },
  /*::[*/
  42: {
    /* n:"BrtIndexBlock" */
  },
  /*::[*/
  43: {
    /* n:"BrtFont", */
    f: $l
  },
  /*::[*/
  44: {
    /* n:"BrtFmt", */
    f: zl
  },
  /*::[*/
  45: {
    /* n:"BrtFill", */
    f: Kl
  },
  /*::[*/
  46: {
    /* n:"BrtBorder", */
    f: jl
  },
  /*::[*/
  47: {
    /* n:"BrtXF", */
    f: Yl
  },
  /*::[*/
  48: {
    /* n:"BrtStyle" */
  },
  /*::[*/
  49: {
    /* n:"BrtCellMeta", */
    f: Yc
  },
  /*::[*/
  50: {
    /* n:"BrtValueMeta" */
  },
  /*::[*/
  51: {
    /* n:"BrtMdb" */
    f: vu
  },
  /*::[*/
  52: {
    /* n:"BrtBeginFmd", */
    T: 1
  },
  /*::[*/
  53: {
    /* n:"BrtEndFmd", */
    T: -1
  },
  /*::[*/
  54: {
    /* n:"BrtBeginMdx", */
    T: 1
  },
  /*::[*/
  55: {
    /* n:"BrtEndMdx", */
    T: -1
  },
  /*::[*/
  56: {
    /* n:"BrtBeginMdxTuple", */
    T: 1
  },
  /*::[*/
  57: {
    /* n:"BrtEndMdxTuple", */
    T: -1
  },
  /*::[*/
  58: {
    /* n:"BrtMdxMbrIstr" */
  },
  /*::[*/
  59: {
    /* n:"BrtStr" */
  },
  /*::[*/
  60: {
    /* n:"BrtColInfo", */
    f: Bi
  },
  /*::[*/
  62: {
    /* n:"BrtCellRString", */
    f: G1
  },
  /*::[*/
  63: {
    /* n:"BrtCalcChainItem$", */
    f: Tu
  },
  /*::[*/
  64: {
    /* n:"BrtDVal", */
    f: nx
  },
  /*::[*/
  65: {
    /* n:"BrtSxvcellNum" */
  },
  /*::[*/
  66: {
    /* n:"BrtSxvcellStr" */
  },
  /*::[*/
  67: {
    /* n:"BrtSxvcellBool" */
  },
  /*::[*/
  68: {
    /* n:"BrtSxvcellErr" */
  },
  /*::[*/
  69: {
    /* n:"BrtSxvcellDate" */
  },
  /*::[*/
  70: {
    /* n:"BrtSxvcellNil" */
  },
  /*::[*/
  128: {
    /* n:"BrtFileVersion" */
  },
  /*::[*/
  129: {
    /* n:"BrtBeginSheet", */
    T: 1
  },
  /*::[*/
  130: {
    /* n:"BrtEndSheet", */
    T: -1
  },
  /*::[*/
  131: {
    /* n:"BrtBeginBook", */
    T: 1,
    f: or,
    p: 0
  },
  /*::[*/
  132: {
    /* n:"BrtEndBook", */
    T: -1
  },
  /*::[*/
  133: {
    /* n:"BrtBeginWsViews", */
    T: 1
  },
  /*::[*/
  134: {
    /* n:"BrtEndWsViews", */
    T: -1
  },
  /*::[*/
  135: {
    /* n:"BrtBeginBookViews", */
    T: 1
  },
  /*::[*/
  136: {
    /* n:"BrtEndBookViews", */
    T: -1
  },
  /*::[*/
  137: {
    /* n:"BrtBeginWsView", */
    T: 1,
    f: tx
  },
  /*::[*/
  138: {
    /* n:"BrtEndWsView", */
    T: -1
  },
  /*::[*/
  139: {
    /* n:"BrtBeginCsViews", */
    T: 1
  },
  /*::[*/
  140: {
    /* n:"BrtEndCsViews", */
    T: -1
  },
  /*::[*/
  141: {
    /* n:"BrtBeginCsView", */
    T: 1
  },
  /*::[*/
  142: {
    /* n:"BrtEndCsView", */
    T: -1
  },
  /*::[*/
  143: {
    /* n:"BrtBeginBundleShs", */
    T: 1
  },
  /*::[*/
  144: {
    /* n:"BrtEndBundleShs", */
    T: -1
  },
  /*::[*/
  145: {
    /* n:"BrtBeginSheetData", */
    T: 1
  },
  /*::[*/
  146: {
    /* n:"BrtEndSheetData", */
    T: -1
  },
  /*::[*/
  147: {
    /* n:"BrtWsProp", */
    f: R1
  },
  /*::[*/
  148: {
    /* n:"BrtWsDim", */
    f: O1,
    p: 16
  },
  /*::[*/
  151: {
    /* n:"BrtPane", */
    f: Z1
  },
  /*::[*/
  152: {
    /* n:"BrtSel" */
  },
  /*::[*/
  153: {
    /* n:"BrtWbProp", */
    f: Ex
  },
  /*::[*/
  154: {
    /* n:"BrtWbFactoid" */
  },
  /*::[*/
  155: {
    /* n:"BrtFileRecover" */
  },
  /*::[*/
  156: {
    /* n:"BrtBundleSh", */
    f: _x
  },
  /*::[*/
  157: {
    /* n:"BrtCalcProp" */
  },
  /*::[*/
  158: {
    /* n:"BrtBookView" */
  },
  /*::[*/
  159: {
    /* n:"BrtBeginSst", */
    T: 1,
    f: ul
  },
  /*::[*/
  160: {
    /* n:"BrtEndSst", */
    T: -1
  },
  /*::[*/
  161: {
    /* n:"BrtBeginAFilter", */
    T: 1,
    f: ua
  },
  /*::[*/
  162: {
    /* n:"BrtEndAFilter", */
    T: -1
  },
  /*::[*/
  163: {
    /* n:"BrtBeginFilterColumn", */
    T: 1
  },
  /*::[*/
  164: {
    /* n:"BrtEndFilterColumn", */
    T: -1
  },
  /*::[*/
  165: {
    /* n:"BrtBeginFilters", */
    T: 1
  },
  /*::[*/
  166: {
    /* n:"BrtEndFilters", */
    T: -1
  },
  /*::[*/
  167: {
    /* n:"BrtFilter" */
  },
  /*::[*/
  168: {
    /* n:"BrtColorFilter" */
  },
  /*::[*/
  169: {
    /* n:"BrtIconFilter" */
  },
  /*::[*/
  170: {
    /* n:"BrtTop10Filter" */
  },
  /*::[*/
  171: {
    /* n:"BrtDynamicFilter" */
  },
  /*::[*/
  172: {
    /* n:"BrtBeginCustomFilters", */
    T: 1
  },
  /*::[*/
  173: {
    /* n:"BrtEndCustomFilters", */
    T: -1
  },
  /*::[*/
  174: {
    /* n:"BrtCustomFilter" */
  },
  /*::[*/
  175: {
    /* n:"BrtAFilterDateGroupItem" */
  },
  /*::[*/
  176: {
    /* n:"BrtMergeCell", */
    f: J1
  },
  /*::[*/
  177: {
    /* n:"BrtBeginMergeCells", */
    T: 1
  },
  /*::[*/
  178: {
    /* n:"BrtEndMergeCells", */
    T: -1
  },
  /*::[*/
  179: {
    /* n:"BrtBeginPivotCacheDef", */
    T: 1
  },
  /*::[*/
  180: {
    /* n:"BrtEndPivotCacheDef", */
    T: -1
  },
  /*::[*/
  181: {
    /* n:"BrtBeginPCDFields", */
    T: 1
  },
  /*::[*/
  182: {
    /* n:"BrtEndPCDFields", */
    T: -1
  },
  /*::[*/
  183: {
    /* n:"BrtBeginPCDField", */
    T: 1
  },
  /*::[*/
  184: {
    /* n:"BrtEndPCDField", */
    T: -1
  },
  /*::[*/
  185: {
    /* n:"BrtBeginPCDSource", */
    T: 1
  },
  /*::[*/
  186: {
    /* n:"BrtEndPCDSource", */
    T: -1
  },
  /*::[*/
  187: {
    /* n:"BrtBeginPCDSRange", */
    T: 1
  },
  /*::[*/
  188: {
    /* n:"BrtEndPCDSRange", */
    T: -1
  },
  /*::[*/
  189: {
    /* n:"BrtBeginPCDFAtbl", */
    T: 1
  },
  /*::[*/
  190: {
    /* n:"BrtEndPCDFAtbl", */
    T: -1
  },
  /*::[*/
  191: {
    /* n:"BrtBeginPCDIRun", */
    T: 1
  },
  /*::[*/
  192: {
    /* n:"BrtEndPCDIRun", */
    T: -1
  },
  /*::[*/
  193: {
    /* n:"BrtBeginPivotCacheRecords", */
    T: 1
  },
  /*::[*/
  194: {
    /* n:"BrtEndPivotCacheRecords", */
    T: -1
  },
  /*::[*/
  195: {
    /* n:"BrtBeginPCDHierarchies", */
    T: 1
  },
  /*::[*/
  196: {
    /* n:"BrtEndPCDHierarchies", */
    T: -1
  },
  /*::[*/
  197: {
    /* n:"BrtBeginPCDHierarchy", */
    T: 1
  },
  /*::[*/
  198: {
    /* n:"BrtEndPCDHierarchy", */
    T: -1
  },
  /*::[*/
  199: {
    /* n:"BrtBeginPCDHFieldsUsage", */
    T: 1
  },
  /*::[*/
  200: {
    /* n:"BrtEndPCDHFieldsUsage", */
    T: -1
  },
  /*::[*/
  201: {
    /* n:"BrtBeginExtConnection", */
    T: 1
  },
  /*::[*/
  202: {
    /* n:"BrtEndExtConnection", */
    T: -1
  },
  /*::[*/
  203: {
    /* n:"BrtBeginECDbProps", */
    T: 1
  },
  /*::[*/
  204: {
    /* n:"BrtEndECDbProps", */
    T: -1
  },
  /*::[*/
  205: {
    /* n:"BrtBeginECOlapProps", */
    T: 1
  },
  /*::[*/
  206: {
    /* n:"BrtEndECOlapProps", */
    T: -1
  },
  /*::[*/
  207: {
    /* n:"BrtBeginPCDSConsol", */
    T: 1
  },
  /*::[*/
  208: {
    /* n:"BrtEndPCDSConsol", */
    T: -1
  },
  /*::[*/
  209: {
    /* n:"BrtBeginPCDSCPages", */
    T: 1
  },
  /*::[*/
  210: {
    /* n:"BrtEndPCDSCPages", */
    T: -1
  },
  /*::[*/
  211: {
    /* n:"BrtBeginPCDSCPage", */
    T: 1
  },
  /*::[*/
  212: {
    /* n:"BrtEndPCDSCPage", */
    T: -1
  },
  /*::[*/
  213: {
    /* n:"BrtBeginPCDSCPItem", */
    T: 1
  },
  /*::[*/
  214: {
    /* n:"BrtEndPCDSCPItem", */
    T: -1
  },
  /*::[*/
  215: {
    /* n:"BrtBeginPCDSCSets", */
    T: 1
  },
  /*::[*/
  216: {
    /* n:"BrtEndPCDSCSets", */
    T: -1
  },
  /*::[*/
  217: {
    /* n:"BrtBeginPCDSCSet", */
    T: 1
  },
  /*::[*/
  218: {
    /* n:"BrtEndPCDSCSet", */
    T: -1
  },
  /*::[*/
  219: {
    /* n:"BrtBeginPCDFGroup", */
    T: 1
  },
  /*::[*/
  220: {
    /* n:"BrtEndPCDFGroup", */
    T: -1
  },
  /*::[*/
  221: {
    /* n:"BrtBeginPCDFGItems", */
    T: 1
  },
  /*::[*/
  222: {
    /* n:"BrtEndPCDFGItems", */
    T: -1
  },
  /*::[*/
  223: {
    /* n:"BrtBeginPCDFGRange", */
    T: 1
  },
  /*::[*/
  224: {
    /* n:"BrtEndPCDFGRange", */
    T: -1
  },
  /*::[*/
  225: {
    /* n:"BrtBeginPCDFGDiscrete", */
    T: 1
  },
  /*::[*/
  226: {
    /* n:"BrtEndPCDFGDiscrete", */
    T: -1
  },
  /*::[*/
  227: {
    /* n:"BrtBeginPCDSDTupleCache", */
    T: 1
  },
  /*::[*/
  228: {
    /* n:"BrtEndPCDSDTupleCache", */
    T: -1
  },
  /*::[*/
  229: {
    /* n:"BrtBeginPCDSDTCEntries", */
    T: 1
  },
  /*::[*/
  230: {
    /* n:"BrtEndPCDSDTCEntries", */
    T: -1
  },
  /*::[*/
  231: {
    /* n:"BrtBeginPCDSDTCEMembers", */
    T: 1
  },
  /*::[*/
  232: {
    /* n:"BrtEndPCDSDTCEMembers", */
    T: -1
  },
  /*::[*/
  233: {
    /* n:"BrtBeginPCDSDTCEMember", */
    T: 1
  },
  /*::[*/
  234: {
    /* n:"BrtEndPCDSDTCEMember", */
    T: -1
  },
  /*::[*/
  235: {
    /* n:"BrtBeginPCDSDTCQueries", */
    T: 1
  },
  /*::[*/
  236: {
    /* n:"BrtEndPCDSDTCQueries", */
    T: -1
  },
  /*::[*/
  237: {
    /* n:"BrtBeginPCDSDTCQuery", */
    T: 1
  },
  /*::[*/
  238: {
    /* n:"BrtEndPCDSDTCQuery", */
    T: -1
  },
  /*::[*/
  239: {
    /* n:"BrtBeginPCDSDTCSets", */
    T: 1
  },
  /*::[*/
  240: {
    /* n:"BrtEndPCDSDTCSets", */
    T: -1
  },
  /*::[*/
  241: {
    /* n:"BrtBeginPCDSDTCSet", */
    T: 1
  },
  /*::[*/
  242: {
    /* n:"BrtEndPCDSDTCSet", */
    T: -1
  },
  /*::[*/
  243: {
    /* n:"BrtBeginPCDCalcItems", */
    T: 1
  },
  /*::[*/
  244: {
    /* n:"BrtEndPCDCalcItems", */
    T: -1
  },
  /*::[*/
  245: {
    /* n:"BrtBeginPCDCalcItem", */
    T: 1
  },
  /*::[*/
  246: {
    /* n:"BrtEndPCDCalcItem", */
    T: -1
  },
  /*::[*/
  247: {
    /* n:"BrtBeginPRule", */
    T: 1
  },
  /*::[*/
  248: {
    /* n:"BrtEndPRule", */
    T: -1
  },
  /*::[*/
  249: {
    /* n:"BrtBeginPRFilters", */
    T: 1
  },
  /*::[*/
  250: {
    /* n:"BrtEndPRFilters", */
    T: -1
  },
  /*::[*/
  251: {
    /* n:"BrtBeginPRFilter", */
    T: 1
  },
  /*::[*/
  252: {
    /* n:"BrtEndPRFilter", */
    T: -1
  },
  /*::[*/
  253: {
    /* n:"BrtBeginPNames", */
    T: 1
  },
  /*::[*/
  254: {
    /* n:"BrtEndPNames", */
    T: -1
  },
  /*::[*/
  255: {
    /* n:"BrtBeginPName", */
    T: 1
  },
  /*::[*/
  256: {
    /* n:"BrtEndPName", */
    T: -1
  },
  /*::[*/
  257: {
    /* n:"BrtBeginPNPairs", */
    T: 1
  },
  /*::[*/
  258: {
    /* n:"BrtEndPNPairs", */
    T: -1
  },
  /*::[*/
  259: {
    /* n:"BrtBeginPNPair", */
    T: 1
  },
  /*::[*/
  260: {
    /* n:"BrtEndPNPair", */
    T: -1
  },
  /*::[*/
  261: {
    /* n:"BrtBeginECWebProps", */
    T: 1
  },
  /*::[*/
  262: {
    /* n:"BrtEndECWebProps", */
    T: -1
  },
  /*::[*/
  263: {
    /* n:"BrtBeginEcWpTables", */
    T: 1
  },
  /*::[*/
  264: {
    /* n:"BrtEndECWPTables", */
    T: -1
  },
  /*::[*/
  265: {
    /* n:"BrtBeginECParams", */
    T: 1
  },
  /*::[*/
  266: {
    /* n:"BrtEndECParams", */
    T: -1
  },
  /*::[*/
  267: {
    /* n:"BrtBeginECParam", */
    T: 1
  },
  /*::[*/
  268: {
    /* n:"BrtEndECParam", */
    T: -1
  },
  /*::[*/
  269: {
    /* n:"BrtBeginPCDKPIs", */
    T: 1
  },
  /*::[*/
  270: {
    /* n:"BrtEndPCDKPIs", */
    T: -1
  },
  /*::[*/
  271: {
    /* n:"BrtBeginPCDKPI", */
    T: 1
  },
  /*::[*/
  272: {
    /* n:"BrtEndPCDKPI", */
    T: -1
  },
  /*::[*/
  273: {
    /* n:"BrtBeginDims", */
    T: 1
  },
  /*::[*/
  274: {
    /* n:"BrtEndDims", */
    T: -1
  },
  /*::[*/
  275: {
    /* n:"BrtBeginDim", */
    T: 1
  },
  /*::[*/
  276: {
    /* n:"BrtEndDim", */
    T: -1
  },
  /*::[*/
  277: {
    /* n:"BrtIndexPartEnd" */
  },
  /*::[*/
  278: {
    /* n:"BrtBeginStyleSheet", */
    T: 1
  },
  /*::[*/
  279: {
    /* n:"BrtEndStyleSheet", */
    T: -1
  },
  /*::[*/
  280: {
    /* n:"BrtBeginSXView", */
    T: 1
  },
  /*::[*/
  281: {
    /* n:"BrtEndSXVI", */
    T: -1
  },
  /*::[*/
  282: {
    /* n:"BrtBeginSXVI", */
    T: 1
  },
  /*::[*/
  283: {
    /* n:"BrtBeginSXVIs", */
    T: 1
  },
  /*::[*/
  284: {
    /* n:"BrtEndSXVIs", */
    T: -1
  },
  /*::[*/
  285: {
    /* n:"BrtBeginSXVD", */
    T: 1
  },
  /*::[*/
  286: {
    /* n:"BrtEndSXVD", */
    T: -1
  },
  /*::[*/
  287: {
    /* n:"BrtBeginSXVDs", */
    T: 1
  },
  /*::[*/
  288: {
    /* n:"BrtEndSXVDs", */
    T: -1
  },
  /*::[*/
  289: {
    /* n:"BrtBeginSXPI", */
    T: 1
  },
  /*::[*/
  290: {
    /* n:"BrtEndSXPI", */
    T: -1
  },
  /*::[*/
  291: {
    /* n:"BrtBeginSXPIs", */
    T: 1
  },
  /*::[*/
  292: {
    /* n:"BrtEndSXPIs", */
    T: -1
  },
  /*::[*/
  293: {
    /* n:"BrtBeginSXDI", */
    T: 1
  },
  /*::[*/
  294: {
    /* n:"BrtEndSXDI", */
    T: -1
  },
  /*::[*/
  295: {
    /* n:"BrtBeginSXDIs", */
    T: 1
  },
  /*::[*/
  296: {
    /* n:"BrtEndSXDIs", */
    T: -1
  },
  /*::[*/
  297: {
    /* n:"BrtBeginSXLI", */
    T: 1
  },
  /*::[*/
  298: {
    /* n:"BrtEndSXLI", */
    T: -1
  },
  /*::[*/
  299: {
    /* n:"BrtBeginSXLIRws", */
    T: 1
  },
  /*::[*/
  300: {
    /* n:"BrtEndSXLIRws", */
    T: -1
  },
  /*::[*/
  301: {
    /* n:"BrtBeginSXLICols", */
    T: 1
  },
  /*::[*/
  302: {
    /* n:"BrtEndSXLICols", */
    T: -1
  },
  /*::[*/
  303: {
    /* n:"BrtBeginSXFormat", */
    T: 1
  },
  /*::[*/
  304: {
    /* n:"BrtEndSXFormat", */
    T: -1
  },
  /*::[*/
  305: {
    /* n:"BrtBeginSXFormats", */
    T: 1
  },
  /*::[*/
  306: {
    /* n:"BrtEndSxFormats", */
    T: -1
  },
  /*::[*/
  307: {
    /* n:"BrtBeginSxSelect", */
    T: 1
  },
  /*::[*/
  308: {
    /* n:"BrtEndSxSelect", */
    T: -1
  },
  /*::[*/
  309: {
    /* n:"BrtBeginISXVDRws", */
    T: 1
  },
  /*::[*/
  310: {
    /* n:"BrtEndISXVDRws", */
    T: -1
  },
  /*::[*/
  311: {
    /* n:"BrtBeginISXVDCols", */
    T: 1
  },
  /*::[*/
  312: {
    /* n:"BrtEndISXVDCols", */
    T: -1
  },
  /*::[*/
  313: {
    /* n:"BrtEndSXLocation", */
    T: -1
  },
  /*::[*/
  314: {
    /* n:"BrtBeginSXLocation", */
    T: 1
  },
  /*::[*/
  315: {
    /* n:"BrtEndSXView", */
    T: -1
  },
  /*::[*/
  316: {
    /* n:"BrtBeginSXTHs", */
    T: 1
  },
  /*::[*/
  317: {
    /* n:"BrtEndSXTHs", */
    T: -1
  },
  /*::[*/
  318: {
    /* n:"BrtBeginSXTH", */
    T: 1
  },
  /*::[*/
  319: {
    /* n:"BrtEndSXTH", */
    T: -1
  },
  /*::[*/
  320: {
    /* n:"BrtBeginISXTHRws", */
    T: 1
  },
  /*::[*/
  321: {
    /* n:"BrtEndISXTHRws", */
    T: -1
  },
  /*::[*/
  322: {
    /* n:"BrtBeginISXTHCols", */
    T: 1
  },
  /*::[*/
  323: {
    /* n:"BrtEndISXTHCols", */
    T: -1
  },
  /*::[*/
  324: {
    /* n:"BrtBeginSXTDMPS", */
    T: 1
  },
  /*::[*/
  325: {
    /* n:"BrtEndSXTDMPs", */
    T: -1
  },
  /*::[*/
  326: {
    /* n:"BrtBeginSXTDMP", */
    T: 1
  },
  /*::[*/
  327: {
    /* n:"BrtEndSXTDMP", */
    T: -1
  },
  /*::[*/
  328: {
    /* n:"BrtBeginSXTHItems", */
    T: 1
  },
  /*::[*/
  329: {
    /* n:"BrtEndSXTHItems", */
    T: -1
  },
  /*::[*/
  330: {
    /* n:"BrtBeginSXTHItem", */
    T: 1
  },
  /*::[*/
  331: {
    /* n:"BrtEndSXTHItem", */
    T: -1
  },
  /*::[*/
  332: {
    /* n:"BrtBeginMetadata", */
    T: 1
  },
  /*::[*/
  333: {
    /* n:"BrtEndMetadata", */
    T: -1
  },
  /*::[*/
  334: {
    /* n:"BrtBeginEsmdtinfo", */
    T: 1
  },
  /*::[*/
  335: {
    /* n:"BrtMdtinfo", */
    f: pu
  },
  /*::[*/
  336: {
    /* n:"BrtEndEsmdtinfo", */
    T: -1
  },
  /*::[*/
  337: {
    /* n:"BrtBeginEsmdb", */
    f: gu,
    T: 1
  },
  /*::[*/
  338: {
    /* n:"BrtEndEsmdb", */
    T: -1
  },
  /*::[*/
  339: {
    /* n:"BrtBeginEsfmd", */
    T: 1
  },
  /*::[*/
  340: {
    /* n:"BrtEndEsfmd", */
    T: -1
  },
  /*::[*/
  341: {
    /* n:"BrtBeginSingleCells", */
    T: 1
  },
  /*::[*/
  342: {
    /* n:"BrtEndSingleCells", */
    T: -1
  },
  /*::[*/
  343: {
    /* n:"BrtBeginList", */
    T: 1
  },
  /*::[*/
  344: {
    /* n:"BrtEndList", */
    T: -1
  },
  /*::[*/
  345: {
    /* n:"BrtBeginListCols", */
    T: 1
  },
  /*::[*/
  346: {
    /* n:"BrtEndListCols", */
    T: -1
  },
  /*::[*/
  347: {
    /* n:"BrtBeginListCol", */
    T: 1
  },
  /*::[*/
  348: {
    /* n:"BrtEndListCol", */
    T: -1
  },
  /*::[*/
  349: {
    /* n:"BrtBeginListXmlCPr", */
    T: 1
  },
  /*::[*/
  350: {
    /* n:"BrtEndListXmlCPr", */
    T: -1
  },
  /*::[*/
  351: {
    /* n:"BrtListCCFmla" */
  },
  /*::[*/
  352: {
    /* n:"BrtListTrFmla" */
  },
  /*::[*/
  353: {
    /* n:"BrtBeginExternals", */
    T: 1
  },
  /*::[*/
  354: {
    /* n:"BrtEndExternals", */
    T: -1
  },
  /*::[*/
  355: {
    /* n:"BrtSupBookSrc", */
    f: Xt
  },
  /*::[*/
  357: {
    /* n:"BrtSupSelf" */
  },
  /*::[*/
  358: {
    /* n:"BrtSupSame" */
  },
  /*::[*/
  359: {
    /* n:"BrtSupTabs" */
  },
  /*::[*/
  360: {
    /* n:"BrtBeginSupBook", */
    T: 1
  },
  /*::[*/
  361: {
    /* n:"BrtPlaceholderName" */
  },
  /*::[*/
  362: {
    /* n:"BrtExternSheet", */
    f: Mi
  },
  /*::[*/
  363: {
    /* n:"BrtExternTableStart" */
  },
  /*::[*/
  364: {
    /* n:"BrtExternTableEnd" */
  },
  /*::[*/
  366: {
    /* n:"BrtExternRowHdr" */
  },
  /*::[*/
  367: {
    /* n:"BrtExternCellBlank" */
  },
  /*::[*/
  368: {
    /* n:"BrtExternCellReal" */
  },
  /*::[*/
  369: {
    /* n:"BrtExternCellBool" */
  },
  /*::[*/
  370: {
    /* n:"BrtExternCellError" */
  },
  /*::[*/
  371: {
    /* n:"BrtExternCellString" */
  },
  /*::[*/
  372: {
    /* n:"BrtBeginEsmdx", */
    T: 1
  },
  /*::[*/
  373: {
    /* n:"BrtEndEsmdx", */
    T: -1
  },
  /*::[*/
  374: {
    /* n:"BrtBeginMdxSet", */
    T: 1
  },
  /*::[*/
  375: {
    /* n:"BrtEndMdxSet", */
    T: -1
  },
  /*::[*/
  376: {
    /* n:"BrtBeginMdxMbrProp", */
    T: 1
  },
  /*::[*/
  377: {
    /* n:"BrtEndMdxMbrProp", */
    T: -1
  },
  /*::[*/
  378: {
    /* n:"BrtBeginMdxKPI", */
    T: 1
  },
  /*::[*/
  379: {
    /* n:"BrtEndMdxKPI", */
    T: -1
  },
  /*::[*/
  380: {
    /* n:"BrtBeginEsstr", */
    T: 1
  },
  /*::[*/
  381: {
    /* n:"BrtEndEsstr", */
    T: -1
  },
  /*::[*/
  382: {
    /* n:"BrtBeginPRFItem", */
    T: 1
  },
  /*::[*/
  383: {
    /* n:"BrtEndPRFItem", */
    T: -1
  },
  /*::[*/
  384: {
    /* n:"BrtBeginPivotCacheIDs", */
    T: 1
  },
  /*::[*/
  385: {
    /* n:"BrtEndPivotCacheIDs", */
    T: -1
  },
  /*::[*/
  386: {
    /* n:"BrtBeginPivotCacheID", */
    T: 1
  },
  /*::[*/
  387: {
    /* n:"BrtEndPivotCacheID", */
    T: -1
  },
  /*::[*/
  388: {
    /* n:"BrtBeginISXVIs", */
    T: 1
  },
  /*::[*/
  389: {
    /* n:"BrtEndISXVIs", */
    T: -1
  },
  /*::[*/
  390: {
    /* n:"BrtBeginColInfos", */
    T: 1
  },
  /*::[*/
  391: {
    /* n:"BrtEndColInfos", */
    T: -1
  },
  /*::[*/
  392: {
    /* n:"BrtBeginRwBrk", */
    T: 1
  },
  /*::[*/
  393: {
    /* n:"BrtEndRwBrk", */
    T: -1
  },
  /*::[*/
  394: {
    /* n:"BrtBeginColBrk", */
    T: 1
  },
  /*::[*/
  395: {
    /* n:"BrtEndColBrk", */
    T: -1
  },
  /*::[*/
  396: {
    /* n:"BrtBrk" */
  },
  /*::[*/
  397: {
    /* n:"BrtUserBookView" */
  },
  /*::[*/
  398: {
    /* n:"BrtInfo" */
  },
  /*::[*/
  399: {
    /* n:"BrtCUsr" */
  },
  /*::[*/
  400: {
    /* n:"BrtUsr" */
  },
  /*::[*/
  401: {
    /* n:"BrtBeginUsers", */
    T: 1
  },
  /*::[*/
  403: {
    /* n:"BrtEOF" */
  },
  /*::[*/
  404: {
    /* n:"BrtUCR" */
  },
  /*::[*/
  405: {
    /* n:"BrtRRInsDel" */
  },
  /*::[*/
  406: {
    /* n:"BrtRREndInsDel" */
  },
  /*::[*/
  407: {
    /* n:"BrtRRMove" */
  },
  /*::[*/
  408: {
    /* n:"BrtRREndMove" */
  },
  /*::[*/
  409: {
    /* n:"BrtRRChgCell" */
  },
  /*::[*/
  410: {
    /* n:"BrtRREndChgCell" */
  },
  /*::[*/
  411: {
    /* n:"BrtRRHeader" */
  },
  /*::[*/
  412: {
    /* n:"BrtRRUserView" */
  },
  /*::[*/
  413: {
    /* n:"BrtRRRenSheet" */
  },
  /*::[*/
  414: {
    /* n:"BrtRRInsertSh" */
  },
  /*::[*/
  415: {
    /* n:"BrtRRDefName" */
  },
  /*::[*/
  416: {
    /* n:"BrtRRNote" */
  },
  /*::[*/
  417: {
    /* n:"BrtRRConflict" */
  },
  /*::[*/
  418: {
    /* n:"BrtRRTQSIF" */
  },
  /*::[*/
  419: {
    /* n:"BrtRRFormat" */
  },
  /*::[*/
  420: {
    /* n:"BrtRREndFormat" */
  },
  /*::[*/
  421: {
    /* n:"BrtRRAutoFmt" */
  },
  /*::[*/
  422: {
    /* n:"BrtBeginUserShViews", */
    T: 1
  },
  /*::[*/
  423: {
    /* n:"BrtBeginUserShView", */
    T: 1
  },
  /*::[*/
  424: {
    /* n:"BrtEndUserShView", */
    T: -1
  },
  /*::[*/
  425: {
    /* n:"BrtEndUserShViews", */
    T: -1
  },
  /*::[*/
  426: {
    /* n:"BrtArrFmla", */
    f: Q1
  },
  /*::[*/
  427: {
    /* n:"BrtShrFmla", */
    f: ex
  },
  /*::[*/
  428: {
    /* n:"BrtTable" */
  },
  /*::[*/
  429: {
    /* n:"BrtBeginExtConnections", */
    T: 1
  },
  /*::[*/
  430: {
    /* n:"BrtEndExtConnections", */
    T: -1
  },
  /*::[*/
  431: {
    /* n:"BrtBeginPCDCalcMems", */
    T: 1
  },
  /*::[*/
  432: {
    /* n:"BrtEndPCDCalcMems", */
    T: -1
  },
  /*::[*/
  433: {
    /* n:"BrtBeginPCDCalcMem", */
    T: 1
  },
  /*::[*/
  434: {
    /* n:"BrtEndPCDCalcMem", */
    T: -1
  },
  /*::[*/
  435: {
    /* n:"BrtBeginPCDHGLevels", */
    T: 1
  },
  /*::[*/
  436: {
    /* n:"BrtEndPCDHGLevels", */
    T: -1
  },
  /*::[*/
  437: {
    /* n:"BrtBeginPCDHGLevel", */
    T: 1
  },
  /*::[*/
  438: {
    /* n:"BrtEndPCDHGLevel", */
    T: -1
  },
  /*::[*/
  439: {
    /* n:"BrtBeginPCDHGLGroups", */
    T: 1
  },
  /*::[*/
  440: {
    /* n:"BrtEndPCDHGLGroups", */
    T: -1
  },
  /*::[*/
  441: {
    /* n:"BrtBeginPCDHGLGroup", */
    T: 1
  },
  /*::[*/
  442: {
    /* n:"BrtEndPCDHGLGroup", */
    T: -1
  },
  /*::[*/
  443: {
    /* n:"BrtBeginPCDHGLGMembers", */
    T: 1
  },
  /*::[*/
  444: {
    /* n:"BrtEndPCDHGLGMembers", */
    T: -1
  },
  /*::[*/
  445: {
    /* n:"BrtBeginPCDHGLGMember", */
    T: 1
  },
  /*::[*/
  446: {
    /* n:"BrtEndPCDHGLGMember", */
    T: -1
  },
  /*::[*/
  447: {
    /* n:"BrtBeginQSI", */
    T: 1
  },
  /*::[*/
  448: {
    /* n:"BrtEndQSI", */
    T: -1
  },
  /*::[*/
  449: {
    /* n:"BrtBeginQSIR", */
    T: 1
  },
  /*::[*/
  450: {
    /* n:"BrtEndQSIR", */
    T: -1
  },
  /*::[*/
  451: {
    /* n:"BrtBeginDeletedNames", */
    T: 1
  },
  /*::[*/
  452: {
    /* n:"BrtEndDeletedNames", */
    T: -1
  },
  /*::[*/
  453: {
    /* n:"BrtBeginDeletedName", */
    T: 1
  },
  /*::[*/
  454: {
    /* n:"BrtEndDeletedName", */
    T: -1
  },
  /*::[*/
  455: {
    /* n:"BrtBeginQSIFs", */
    T: 1
  },
  /*::[*/
  456: {
    /* n:"BrtEndQSIFs", */
    T: -1
  },
  /*::[*/
  457: {
    /* n:"BrtBeginQSIF", */
    T: 1
  },
  /*::[*/
  458: {
    /* n:"BrtEndQSIF", */
    T: -1
  },
  /*::[*/
  459: {
    /* n:"BrtBeginAutoSortScope", */
    T: 1
  },
  /*::[*/
  460: {
    /* n:"BrtEndAutoSortScope", */
    T: -1
  },
  /*::[*/
  461: {
    /* n:"BrtBeginConditionalFormatting", */
    T: 1
  },
  /*::[*/
  462: {
    /* n:"BrtEndConditionalFormatting", */
    T: -1
  },
  /*::[*/
  463: {
    /* n:"BrtBeginCFRule", */
    T: 1
  },
  /*::[*/
  464: {
    /* n:"BrtEndCFRule", */
    T: -1
  },
  /*::[*/
  465: {
    /* n:"BrtBeginIconSet", */
    T: 1
  },
  /*::[*/
  466: {
    /* n:"BrtEndIconSet", */
    T: -1
  },
  /*::[*/
  467: {
    /* n:"BrtBeginDatabar", */
    T: 1
  },
  /*::[*/
  468: {
    /* n:"BrtEndDatabar", */
    T: -1
  },
  /*::[*/
  469: {
    /* n:"BrtBeginColorScale", */
    T: 1
  },
  /*::[*/
  470: {
    /* n:"BrtEndColorScale", */
    T: -1
  },
  /*::[*/
  471: {
    /* n:"BrtCFVO" */
  },
  /*::[*/
  472: {
    /* n:"BrtExternValueMeta" */
  },
  /*::[*/
  473: {
    /* n:"BrtBeginColorPalette", */
    T: 1
  },
  /*::[*/
  474: {
    /* n:"BrtEndColorPalette", */
    T: -1
  },
  /*::[*/
  475: {
    /* n:"BrtIndexedColor" */
  },
  /*::[*/
  476: {
    /* n:"BrtMargins", */
    f: ax
  },
  /*::[*/
  477: {
    /* n:"BrtPrintOptions" */
  },
  /*::[*/
  478: {
    /* n:"BrtPageSetup" */
  },
  /*::[*/
  479: {
    /* n:"BrtBeginHeaderFooter", */
    T: 1
  },
  /*::[*/
  480: {
    /* n:"BrtEndHeaderFooter", */
    T: -1
  },
  /*::[*/
  481: {
    /* n:"BrtBeginSXCrtFormat", */
    T: 1
  },
  /*::[*/
  482: {
    /* n:"BrtEndSXCrtFormat", */
    T: -1
  },
  /*::[*/
  483: {
    /* n:"BrtBeginSXCrtFormats", */
    T: 1
  },
  /*::[*/
  484: {
    /* n:"BrtEndSXCrtFormats", */
    T: -1
  },
  /*::[*/
  485: {
    /* n:"BrtWsFmtInfo", */
    f: D1
  },
  /*::[*/
  486: {
    /* n:"BrtBeginMgs", */
    T: 1
  },
  /*::[*/
  487: {
    /* n:"BrtEndMGs", */
    T: -1
  },
  /*::[*/
  488: {
    /* n:"BrtBeginMGMaps", */
    T: 1
  },
  /*::[*/
  489: {
    /* n:"BrtEndMGMaps", */
    T: -1
  },
  /*::[*/
  490: {
    /* n:"BrtBeginMG", */
    T: 1
  },
  /*::[*/
  491: {
    /* n:"BrtEndMG", */
    T: -1
  },
  /*::[*/
  492: {
    /* n:"BrtBeginMap", */
    T: 1
  },
  /*::[*/
  493: {
    /* n:"BrtEndMap", */
    T: -1
  },
  /*::[*/
  494: {
    /* n:"BrtHLink", */
    f: q1
  },
  /*::[*/
  495: {
    /* n:"BrtBeginDCon", */
    T: 1
  },
  /*::[*/
  496: {
    /* n:"BrtEndDCon", */
    T: -1
  },
  /*::[*/
  497: {
    /* n:"BrtBeginDRefs", */
    T: 1
  },
  /*::[*/
  498: {
    /* n:"BrtEndDRefs", */
    T: -1
  },
  /*::[*/
  499: {
    /* n:"BrtDRef" */
  },
  /*::[*/
  500: {
    /* n:"BrtBeginScenMan", */
    T: 1
  },
  /*::[*/
  501: {
    /* n:"BrtEndScenMan", */
    T: -1
  },
  /*::[*/
  502: {
    /* n:"BrtBeginSct", */
    T: 1
  },
  /*::[*/
  503: {
    /* n:"BrtEndSct", */
    T: -1
  },
  /*::[*/
  504: {
    /* n:"BrtSlc" */
  },
  /*::[*/
  505: {
    /* n:"BrtBeginDXFs", */
    T: 1
  },
  /*::[*/
  506: {
    /* n:"BrtEndDXFs", */
    T: -1
  },
  /*::[*/
  507: {
    /* n:"BrtDXF" */
  },
  /*::[*/
  508: {
    /* n:"BrtBeginTableStyles", */
    T: 1
  },
  /*::[*/
  509: {
    /* n:"BrtEndTableStyles", */
    T: -1
  },
  /*::[*/
  510: {
    /* n:"BrtBeginTableStyle", */
    T: 1
  },
  /*::[*/
  511: {
    /* n:"BrtEndTableStyle", */
    T: -1
  },
  /*::[*/
  512: {
    /* n:"BrtTableStyleElement" */
  },
  /*::[*/
  513: {
    /* n:"BrtTableStyleClient" */
  },
  /*::[*/
  514: {
    /* n:"BrtBeginVolDeps", */
    T: 1
  },
  /*::[*/
  515: {
    /* n:"BrtEndVolDeps", */
    T: -1
  },
  /*::[*/
  516: {
    /* n:"BrtBeginVolType", */
    T: 1
  },
  /*::[*/
  517: {
    /* n:"BrtEndVolType", */
    T: -1
  },
  /*::[*/
  518: {
    /* n:"BrtBeginVolMain", */
    T: 1
  },
  /*::[*/
  519: {
    /* n:"BrtEndVolMain", */
    T: -1
  },
  /*::[*/
  520: {
    /* n:"BrtBeginVolTopic", */
    T: 1
  },
  /*::[*/
  521: {
    /* n:"BrtEndVolTopic", */
    T: -1
  },
  /*::[*/
  522: {
    /* n:"BrtVolSubtopic" */
  },
  /*::[*/
  523: {
    /* n:"BrtVolRef" */
  },
  /*::[*/
  524: {
    /* n:"BrtVolNum" */
  },
  /*::[*/
  525: {
    /* n:"BrtVolErr" */
  },
  /*::[*/
  526: {
    /* n:"BrtVolStr" */
  },
  /*::[*/
  527: {
    /* n:"BrtVolBool" */
  },
  /*::[*/
  528: {
    /* n:"BrtBeginCalcChain$", */
    T: 1
  },
  /*::[*/
  529: {
    /* n:"BrtEndCalcChain$", */
    T: -1
  },
  /*::[*/
  530: {
    /* n:"BrtBeginSortState", */
    T: 1
  },
  /*::[*/
  531: {
    /* n:"BrtEndSortState", */
    T: -1
  },
  /*::[*/
  532: {
    /* n:"BrtBeginSortCond", */
    T: 1
  },
  /*::[*/
  533: {
    /* n:"BrtEndSortCond", */
    T: -1
  },
  /*::[*/
  534: {
    /* n:"BrtBookProtection" */
  },
  /*::[*/
  535: {
    /* n:"BrtSheetProtection" */
  },
  /*::[*/
  536: {
    /* n:"BrtRangeProtection" */
  },
  /*::[*/
  537: {
    /* n:"BrtPhoneticInfo" */
  },
  /*::[*/
  538: {
    /* n:"BrtBeginECTxtWiz", */
    T: 1
  },
  /*::[*/
  539: {
    /* n:"BrtEndECTxtWiz", */
    T: -1
  },
  /*::[*/
  540: {
    /* n:"BrtBeginECTWFldInfoLst", */
    T: 1
  },
  /*::[*/
  541: {
    /* n:"BrtEndECTWFldInfoLst", */
    T: -1
  },
  /*::[*/
  542: {
    /* n:"BrtBeginECTwFldInfo", */
    T: 1
  },
  /*::[*/
  548: {
    /* n:"BrtFileSharing" */
  },
  /*::[*/
  549: {
    /* n:"BrtOleSize" */
  },
  /*::[*/
  550: {
    /* n:"BrtDrawing", */
    f: Xt
  },
  /*::[*/
  551: {
    /* n:"BrtLegacyDrawing" */
  },
  /*::[*/
  552: {
    /* n:"BrtLegacyDrawingHF" */
  },
  /*::[*/
  553: {
    /* n:"BrtWebOpt" */
  },
  /*::[*/
  554: {
    /* n:"BrtBeginWebPubItems", */
    T: 1
  },
  /*::[*/
  555: {
    /* n:"BrtEndWebPubItems", */
    T: -1
  },
  /*::[*/
  556: {
    /* n:"BrtBeginWebPubItem", */
    T: 1
  },
  /*::[*/
  557: {
    /* n:"BrtEndWebPubItem", */
    T: -1
  },
  /*::[*/
  558: {
    /* n:"BrtBeginSXCondFmt", */
    T: 1
  },
  /*::[*/
  559: {
    /* n:"BrtEndSXCondFmt", */
    T: -1
  },
  /*::[*/
  560: {
    /* n:"BrtBeginSXCondFmts", */
    T: 1
  },
  /*::[*/
  561: {
    /* n:"BrtEndSXCondFmts", */
    T: -1
  },
  /*::[*/
  562: {
    /* n:"BrtBkHim" */
  },
  /*::[*/
  564: {
    /* n:"BrtColor" */
  },
  /*::[*/
  565: {
    /* n:"BrtBeginIndexedColors", */
    T: 1
  },
  /*::[*/
  566: {
    /* n:"BrtEndIndexedColors", */
    T: -1
  },
  /*::[*/
  569: {
    /* n:"BrtBeginMRUColors", */
    T: 1
  },
  /*::[*/
  570: {
    /* n:"BrtEndMRUColors", */
    T: -1
  },
  /*::[*/
  572: {
    /* n:"BrtMRUColor" */
  },
  /*::[*/
  573: {
    /* n:"BrtBeginDVals", */
    T: 1
  },
  /*::[*/
  574: {
    /* n:"BrtEndDVals", */
    T: -1
  },
  /*::[*/
  577: {
    /* n:"BrtSupNameStart" */
  },
  /*::[*/
  578: {
    /* n:"BrtSupNameValueStart" */
  },
  /*::[*/
  579: {
    /* n:"BrtSupNameValueEnd" */
  },
  /*::[*/
  580: {
    /* n:"BrtSupNameNum" */
  },
  /*::[*/
  581: {
    /* n:"BrtSupNameErr" */
  },
  /*::[*/
  582: {
    /* n:"BrtSupNameSt" */
  },
  /*::[*/
  583: {
    /* n:"BrtSupNameNil" */
  },
  /*::[*/
  584: {
    /* n:"BrtSupNameBool" */
  },
  /*::[*/
  585: {
    /* n:"BrtSupNameFmla" */
  },
  /*::[*/
  586: {
    /* n:"BrtSupNameBits" */
  },
  /*::[*/
  587: {
    /* n:"BrtSupNameEnd" */
  },
  /*::[*/
  588: {
    /* n:"BrtEndSupBook", */
    T: -1
  },
  /*::[*/
  589: {
    /* n:"BrtCellSmartTagProperty" */
  },
  /*::[*/
  590: {
    /* n:"BrtBeginCellSmartTag", */
    T: 1
  },
  /*::[*/
  591: {
    /* n:"BrtEndCellSmartTag", */
    T: -1
  },
  /*::[*/
  592: {
    /* n:"BrtBeginCellSmartTags", */
    T: 1
  },
  /*::[*/
  593: {
    /* n:"BrtEndCellSmartTags", */
    T: -1
  },
  /*::[*/
  594: {
    /* n:"BrtBeginSmartTags", */
    T: 1
  },
  /*::[*/
  595: {
    /* n:"BrtEndSmartTags", */
    T: -1
  },
  /*::[*/
  596: {
    /* n:"BrtSmartTagType" */
  },
  /*::[*/
  597: {
    /* n:"BrtBeginSmartTagTypes", */
    T: 1
  },
  /*::[*/
  598: {
    /* n:"BrtEndSmartTagTypes", */
    T: -1
  },
  /*::[*/
  599: {
    /* n:"BrtBeginSXFilters", */
    T: 1
  },
  /*::[*/
  600: {
    /* n:"BrtEndSXFilters", */
    T: -1
  },
  /*::[*/
  601: {
    /* n:"BrtBeginSXFILTER", */
    T: 1
  },
  /*::[*/
  602: {
    /* n:"BrtEndSXFilter", */
    T: -1
  },
  /*::[*/
  603: {
    /* n:"BrtBeginFills", */
    T: 1
  },
  /*::[*/
  604: {
    /* n:"BrtEndFills", */
    T: -1
  },
  /*::[*/
  605: {
    /* n:"BrtBeginCellWatches", */
    T: 1
  },
  /*::[*/
  606: {
    /* n:"BrtEndCellWatches", */
    T: -1
  },
  /*::[*/
  607: {
    /* n:"BrtCellWatch" */
  },
  /*::[*/
  608: {
    /* n:"BrtBeginCRErrs", */
    T: 1
  },
  /*::[*/
  609: {
    /* n:"BrtEndCRErrs", */
    T: -1
  },
  /*::[*/
  610: {
    /* n:"BrtCrashRecErr" */
  },
  /*::[*/
  611: {
    /* n:"BrtBeginFonts", */
    T: 1
  },
  /*::[*/
  612: {
    /* n:"BrtEndFonts", */
    T: -1
  },
  /*::[*/
  613: {
    /* n:"BrtBeginBorders", */
    T: 1
  },
  /*::[*/
  614: {
    /* n:"BrtEndBorders", */
    T: -1
  },
  /*::[*/
  615: {
    /* n:"BrtBeginFmts", */
    T: 1
  },
  /*::[*/
  616: {
    /* n:"BrtEndFmts", */
    T: -1
  },
  /*::[*/
  617: {
    /* n:"BrtBeginCellXFs", */
    T: 1
  },
  /*::[*/
  618: {
    /* n:"BrtEndCellXFs", */
    T: -1
  },
  /*::[*/
  619: {
    /* n:"BrtBeginStyles", */
    T: 1
  },
  /*::[*/
  620: {
    /* n:"BrtEndStyles", */
    T: -1
  },
  /*::[*/
  625: {
    /* n:"BrtBigName" */
  },
  /*::[*/
  626: {
    /* n:"BrtBeginCellStyleXFs", */
    T: 1
  },
  /*::[*/
  627: {
    /* n:"BrtEndCellStyleXFs", */
    T: -1
  },
  /*::[*/
  628: {
    /* n:"BrtBeginComments", */
    T: 1
  },
  /*::[*/
  629: {
    /* n:"BrtEndComments", */
    T: -1
  },
  /*::[*/
  630: {
    /* n:"BrtBeginCommentAuthors", */
    T: 1
  },
  /*::[*/
  631: {
    /* n:"BrtEndCommentAuthors", */
    T: -1
  },
  /*::[*/
  632: {
    /* n:"BrtCommentAuthor", */
    f: Ou
  },
  /*::[*/
  633: {
    /* n:"BrtBeginCommentList", */
    T: 1
  },
  /*::[*/
  634: {
    /* n:"BrtEndCommentList", */
    T: -1
  },
  /*::[*/
  635: {
    /* n:"BrtBeginComment", */
    T: 1,
    f: yu
  },
  /*::[*/
  636: {
    /* n:"BrtEndComment", */
    T: -1
  },
  /*::[*/
  637: {
    /* n:"BrtCommentText", */
    f: Jc
  },
  /*::[*/
  638: {
    /* n:"BrtBeginOleObjects", */
    T: 1
  },
  /*::[*/
  639: {
    /* n:"BrtOleObject" */
  },
  /*::[*/
  640: {
    /* n:"BrtEndOleObjects", */
    T: -1
  },
  /*::[*/
  641: {
    /* n:"BrtBeginSxrules", */
    T: 1
  },
  /*::[*/
  642: {
    /* n:"BrtEndSxRules", */
    T: -1
  },
  /*::[*/
  643: {
    /* n:"BrtBeginActiveXControls", */
    T: 1
  },
  /*::[*/
  644: {
    /* n:"BrtActiveX" */
  },
  /*::[*/
  645: {
    /* n:"BrtEndActiveXControls", */
    T: -1
  },
  /*::[*/
  646: {
    /* n:"BrtBeginPCDSDTCEMembersSortBy", */
    T: 1
  },
  /*::[*/
  648: {
    /* n:"BrtBeginCellIgnoreECs", */
    T: 1
  },
  /*::[*/
  649: {
    /* n:"BrtCellIgnoreEC" */
  },
  /*::[*/
  650: {
    /* n:"BrtEndCellIgnoreECs", */
    T: -1
  },
  /*::[*/
  651: {
    /* n:"BrtCsProp", */
    f: lx
  },
  /*::[*/
  652: {
    /* n:"BrtCsPageSetup" */
  },
  /*::[*/
  653: {
    /* n:"BrtBeginUserCsViews", */
    T: 1
  },
  /*::[*/
  654: {
    /* n:"BrtEndUserCsViews", */
    T: -1
  },
  /*::[*/
  655: {
    /* n:"BrtBeginUserCsView", */
    T: 1
  },
  /*::[*/
  656: {
    /* n:"BrtEndUserCsView", */
    T: -1
  },
  /*::[*/
  657: {
    /* n:"BrtBeginPcdSFCIEntries", */
    T: 1
  },
  /*::[*/
  658: {
    /* n:"BrtEndPCDSFCIEntries", */
    T: -1
  },
  /*::[*/
  659: {
    /* n:"BrtPCDSFCIEntry" */
  },
  /*::[*/
  660: {
    /* n:"BrtBeginListParts", */
    T: 1
  },
  /*::[*/
  661: {
    /* n:"BrtListPart" */
  },
  /*::[*/
  662: {
    /* n:"BrtEndListParts", */
    T: -1
  },
  /*::[*/
  663: {
    /* n:"BrtSheetCalcProp" */
  },
  /*::[*/
  664: {
    /* n:"BrtBeginFnGroup", */
    T: 1
  },
  /*::[*/
  665: {
    /* n:"BrtFnGroup" */
  },
  /*::[*/
  666: {
    /* n:"BrtEndFnGroup", */
    T: -1
  },
  /*::[*/
  667: {
    /* n:"BrtSupAddin" */
  },
  /*::[*/
  668: {
    /* n:"BrtSXTDMPOrder" */
  },
  /*::[*/
  669: {
    /* n:"BrtCsProtection" */
  },
  /*::[*/
  671: {
    /* n:"BrtBeginWsSortMap", */
    T: 1
  },
  /*::[*/
  672: {
    /* n:"BrtEndWsSortMap", */
    T: -1
  },
  /*::[*/
  673: {
    /* n:"BrtBeginRRSort", */
    T: 1
  },
  /*::[*/
  674: {
    /* n:"BrtEndRRSort", */
    T: -1
  },
  /*::[*/
  675: {
    /* n:"BrtRRSortItem" */
  },
  /*::[*/
  676: {
    /* n:"BrtFileSharingIso" */
  },
  /*::[*/
  677: {
    /* n:"BrtBookProtectionIso" */
  },
  /*::[*/
  678: {
    /* n:"BrtSheetProtectionIso" */
  },
  /*::[*/
  679: {
    /* n:"BrtCsProtectionIso" */
  },
  /*::[*/
  680: {
    /* n:"BrtRangeProtectionIso" */
  },
  /*::[*/
  681: {
    /* n:"BrtDValList" */
  },
  /*::[*/
  1024: {
    /* n:"BrtRwDescent" */
  },
  /*::[*/
  1025: {
    /* n:"BrtKnownFonts" */
  },
  /*::[*/
  1026: {
    /* n:"BrtBeginSXTupleSet", */
    T: 1
  },
  /*::[*/
  1027: {
    /* n:"BrtEndSXTupleSet", */
    T: -1
  },
  /*::[*/
  1028: {
    /* n:"BrtBeginSXTupleSetHeader", */
    T: 1
  },
  /*::[*/
  1029: {
    /* n:"BrtEndSXTupleSetHeader", */
    T: -1
  },
  /*::[*/
  1030: {
    /* n:"BrtSXTupleSetHeaderItem" */
  },
  /*::[*/
  1031: {
    /* n:"BrtBeginSXTupleSetData", */
    T: 1
  },
  /*::[*/
  1032: {
    /* n:"BrtEndSXTupleSetData", */
    T: -1
  },
  /*::[*/
  1033: {
    /* n:"BrtBeginSXTupleSetRow", */
    T: 1
  },
  /*::[*/
  1034: {
    /* n:"BrtEndSXTupleSetRow", */
    T: -1
  },
  /*::[*/
  1035: {
    /* n:"BrtSXTupleSetRowItem" */
  },
  /*::[*/
  1036: {
    /* n:"BrtNameExt" */
  },
  /*::[*/
  1037: {
    /* n:"BrtPCDH14" */
  },
  /*::[*/
  1038: {
    /* n:"BrtBeginPCDCalcMem14", */
    T: 1
  },
  /*::[*/
  1039: {
    /* n:"BrtEndPCDCalcMem14", */
    T: -1
  },
  /*::[*/
  1040: {
    /* n:"BrtSXTH14" */
  },
  /*::[*/
  1041: {
    /* n:"BrtBeginSparklineGroup", */
    T: 1
  },
  /*::[*/
  1042: {
    /* n:"BrtEndSparklineGroup", */
    T: -1
  },
  /*::[*/
  1043: {
    /* n:"BrtSparkline" */
  },
  /*::[*/
  1044: {
    /* n:"BrtSXDI14" */
  },
  /*::[*/
  1045: {
    /* n:"BrtWsFmtInfoEx14" */
  },
  /*::[*/
  1046: {
    /* n:"BrtBeginConditionalFormatting14", */
    T: 1
  },
  /*::[*/
  1047: {
    /* n:"BrtEndConditionalFormatting14", */
    T: -1
  },
  /*::[*/
  1048: {
    /* n:"BrtBeginCFRule14", */
    T: 1
  },
  /*::[*/
  1049: {
    /* n:"BrtEndCFRule14", */
    T: -1
  },
  /*::[*/
  1050: {
    /* n:"BrtCFVO14" */
  },
  /*::[*/
  1051: {
    /* n:"BrtBeginDatabar14", */
    T: 1
  },
  /*::[*/
  1052: {
    /* n:"BrtBeginIconSet14", */
    T: 1
  },
  /*::[*/
  1053: {
    /* n:"BrtDVal14", */
    f: ix
  },
  /*::[*/
  1054: {
    /* n:"BrtBeginDVals14", */
    T: 1
  },
  /*::[*/
  1055: {
    /* n:"BrtColor14" */
  },
  /*::[*/
  1056: {
    /* n:"BrtBeginSparklines", */
    T: 1
  },
  /*::[*/
  1057: {
    /* n:"BrtEndSparklines", */
    T: -1
  },
  /*::[*/
  1058: {
    /* n:"BrtBeginSparklineGroups", */
    T: 1
  },
  /*::[*/
  1059: {
    /* n:"BrtEndSparklineGroups", */
    T: -1
  },
  /*::[*/
  1061: {
    /* n:"BrtSXVD14" */
  },
  /*::[*/
  1062: {
    /* n:"BrtBeginSXView14", */
    T: 1
  },
  /*::[*/
  1063: {
    /* n:"BrtEndSXView14", */
    T: -1
  },
  /*::[*/
  1064: {
    /* n:"BrtBeginSXView16", */
    T: 1
  },
  /*::[*/
  1065: {
    /* n:"BrtEndSXView16", */
    T: -1
  },
  /*::[*/
  1066: {
    /* n:"BrtBeginPCD14", */
    T: 1
  },
  /*::[*/
  1067: {
    /* n:"BrtEndPCD14", */
    T: -1
  },
  /*::[*/
  1068: {
    /* n:"BrtBeginExtConn14", */
    T: 1
  },
  /*::[*/
  1069: {
    /* n:"BrtEndExtConn14", */
    T: -1
  },
  /*::[*/
  1070: {
    /* n:"BrtBeginSlicerCacheIDs", */
    T: 1
  },
  /*::[*/
  1071: {
    /* n:"BrtEndSlicerCacheIDs", */
    T: -1
  },
  /*::[*/
  1072: {
    /* n:"BrtBeginSlicerCacheID", */
    T: 1
  },
  /*::[*/
  1073: {
    /* n:"BrtEndSlicerCacheID", */
    T: -1
  },
  /*::[*/
  1075: {
    /* n:"BrtBeginSlicerCache", */
    T: 1
  },
  /*::[*/
  1076: {
    /* n:"BrtEndSlicerCache", */
    T: -1
  },
  /*::[*/
  1077: {
    /* n:"BrtBeginSlicerCacheDef", */
    T: 1
  },
  /*::[*/
  1078: {
    /* n:"BrtEndSlicerCacheDef", */
    T: -1
  },
  /*::[*/
  1079: {
    /* n:"BrtBeginSlicersEx", */
    T: 1
  },
  /*::[*/
  1080: {
    /* n:"BrtEndSlicersEx", */
    T: -1
  },
  /*::[*/
  1081: {
    /* n:"BrtBeginSlicerEx", */
    T: 1
  },
  /*::[*/
  1082: {
    /* n:"BrtEndSlicerEx", */
    T: -1
  },
  /*::[*/
  1083: {
    /* n:"BrtBeginSlicer", */
    T: 1
  },
  /*::[*/
  1084: {
    /* n:"BrtEndSlicer", */
    T: -1
  },
  /*::[*/
  1085: {
    /* n:"BrtSlicerCachePivotTables" */
  },
  /*::[*/
  1086: {
    /* n:"BrtBeginSlicerCacheOlapImpl", */
    T: 1
  },
  /*::[*/
  1087: {
    /* n:"BrtEndSlicerCacheOlapImpl", */
    T: -1
  },
  /*::[*/
  1088: {
    /* n:"BrtBeginSlicerCacheLevelsData", */
    T: 1
  },
  /*::[*/
  1089: {
    /* n:"BrtEndSlicerCacheLevelsData", */
    T: -1
  },
  /*::[*/
  1090: {
    /* n:"BrtBeginSlicerCacheLevelData", */
    T: 1
  },
  /*::[*/
  1091: {
    /* n:"BrtEndSlicerCacheLevelData", */
    T: -1
  },
  /*::[*/
  1092: {
    /* n:"BrtBeginSlicerCacheSiRanges", */
    T: 1
  },
  /*::[*/
  1093: {
    /* n:"BrtEndSlicerCacheSiRanges", */
    T: -1
  },
  /*::[*/
  1094: {
    /* n:"BrtBeginSlicerCacheSiRange", */
    T: 1
  },
  /*::[*/
  1095: {
    /* n:"BrtEndSlicerCacheSiRange", */
    T: -1
  },
  /*::[*/
  1096: {
    /* n:"BrtSlicerCacheOlapItem" */
  },
  /*::[*/
  1097: {
    /* n:"BrtBeginSlicerCacheSelections", */
    T: 1
  },
  /*::[*/
  1098: {
    /* n:"BrtSlicerCacheSelection" */
  },
  /*::[*/
  1099: {
    /* n:"BrtEndSlicerCacheSelections", */
    T: -1
  },
  /*::[*/
  1100: {
    /* n:"BrtBeginSlicerCacheNative", */
    T: 1
  },
  /*::[*/
  1101: {
    /* n:"BrtEndSlicerCacheNative", */
    T: -1
  },
  /*::[*/
  1102: {
    /* n:"BrtSlicerCacheNativeItem" */
  },
  /*::[*/
  1103: {
    /* n:"BrtRangeProtection14" */
  },
  /*::[*/
  1104: {
    /* n:"BrtRangeProtectionIso14" */
  },
  /*::[*/
  1105: {
    /* n:"BrtCellIgnoreEC14" */
  },
  /*::[*/
  1111: {
    /* n:"BrtList14" */
  },
  /*::[*/
  1112: {
    /* n:"BrtCFIcon" */
  },
  /*::[*/
  1113: {
    /* n:"BrtBeginSlicerCachesPivotCacheIDs", */
    T: 1
  },
  /*::[*/
  1114: {
    /* n:"BrtEndSlicerCachesPivotCacheIDs", */
    T: -1
  },
  /*::[*/
  1115: {
    /* n:"BrtBeginSlicers", */
    T: 1
  },
  /*::[*/
  1116: {
    /* n:"BrtEndSlicers", */
    T: -1
  },
  /*::[*/
  1117: {
    /* n:"BrtWbProp14" */
  },
  /*::[*/
  1118: {
    /* n:"BrtBeginSXEdit", */
    T: 1
  },
  /*::[*/
  1119: {
    /* n:"BrtEndSXEdit", */
    T: -1
  },
  /*::[*/
  1120: {
    /* n:"BrtBeginSXEdits", */
    T: 1
  },
  /*::[*/
  1121: {
    /* n:"BrtEndSXEdits", */
    T: -1
  },
  /*::[*/
  1122: {
    /* n:"BrtBeginSXChange", */
    T: 1
  },
  /*::[*/
  1123: {
    /* n:"BrtEndSXChange", */
    T: -1
  },
  /*::[*/
  1124: {
    /* n:"BrtBeginSXChanges", */
    T: 1
  },
  /*::[*/
  1125: {
    /* n:"BrtEndSXChanges", */
    T: -1
  },
  /*::[*/
  1126: {
    /* n:"BrtSXTupleItems" */
  },
  /*::[*/
  1128: {
    /* n:"BrtBeginSlicerStyle", */
    T: 1
  },
  /*::[*/
  1129: {
    /* n:"BrtEndSlicerStyle", */
    T: -1
  },
  /*::[*/
  1130: {
    /* n:"BrtSlicerStyleElement" */
  },
  /*::[*/
  1131: {
    /* n:"BrtBeginStyleSheetExt14", */
    T: 1
  },
  /*::[*/
  1132: {
    /* n:"BrtEndStyleSheetExt14", */
    T: -1
  },
  /*::[*/
  1133: {
    /* n:"BrtBeginSlicerCachesPivotCacheID", */
    T: 1
  },
  /*::[*/
  1134: {
    /* n:"BrtEndSlicerCachesPivotCacheID", */
    T: -1
  },
  /*::[*/
  1135: {
    /* n:"BrtBeginConditionalFormattings", */
    T: 1
  },
  /*::[*/
  1136: {
    /* n:"BrtEndConditionalFormattings", */
    T: -1
  },
  /*::[*/
  1137: {
    /* n:"BrtBeginPCDCalcMemExt", */
    T: 1
  },
  /*::[*/
  1138: {
    /* n:"BrtEndPCDCalcMemExt", */
    T: -1
  },
  /*::[*/
  1139: {
    /* n:"BrtBeginPCDCalcMemsExt", */
    T: 1
  },
  /*::[*/
  1140: {
    /* n:"BrtEndPCDCalcMemsExt", */
    T: -1
  },
  /*::[*/
  1141: {
    /* n:"BrtPCDField14" */
  },
  /*::[*/
  1142: {
    /* n:"BrtBeginSlicerStyles", */
    T: 1
  },
  /*::[*/
  1143: {
    /* n:"BrtEndSlicerStyles", */
    T: -1
  },
  /*::[*/
  1144: {
    /* n:"BrtBeginSlicerStyleElements", */
    T: 1
  },
  /*::[*/
  1145: {
    /* n:"BrtEndSlicerStyleElements", */
    T: -1
  },
  /*::[*/
  1146: {
    /* n:"BrtCFRuleExt" */
  },
  /*::[*/
  1147: {
    /* n:"BrtBeginSXCondFmt14", */
    T: 1
  },
  /*::[*/
  1148: {
    /* n:"BrtEndSXCondFmt14", */
    T: -1
  },
  /*::[*/
  1149: {
    /* n:"BrtBeginSXCondFmts14", */
    T: 1
  },
  /*::[*/
  1150: {
    /* n:"BrtEndSXCondFmts14", */
    T: -1
  },
  /*::[*/
  1152: {
    /* n:"BrtBeginSortCond14", */
    T: 1
  },
  /*::[*/
  1153: {
    /* n:"BrtEndSortCond14", */
    T: -1
  },
  /*::[*/
  1154: {
    /* n:"BrtEndDVals14", */
    T: -1
  },
  /*::[*/
  1155: {
    /* n:"BrtEndIconSet14", */
    T: -1
  },
  /*::[*/
  1156: {
    /* n:"BrtEndDatabar14", */
    T: -1
  },
  /*::[*/
  1157: {
    /* n:"BrtBeginColorScale14", */
    T: 1
  },
  /*::[*/
  1158: {
    /* n:"BrtEndColorScale14", */
    T: -1
  },
  /*::[*/
  1159: {
    /* n:"BrtBeginSxrules14", */
    T: 1
  },
  /*::[*/
  1160: {
    /* n:"BrtEndSxrules14", */
    T: -1
  },
  /*::[*/
  1161: {
    /* n:"BrtBeginPRule14", */
    T: 1
  },
  /*::[*/
  1162: {
    /* n:"BrtEndPRule14", */
    T: -1
  },
  /*::[*/
  1163: {
    /* n:"BrtBeginPRFilters14", */
    T: 1
  },
  /*::[*/
  1164: {
    /* n:"BrtEndPRFilters14", */
    T: -1
  },
  /*::[*/
  1165: {
    /* n:"BrtBeginPRFilter14", */
    T: 1
  },
  /*::[*/
  1166: {
    /* n:"BrtEndPRFilter14", */
    T: -1
  },
  /*::[*/
  1167: {
    /* n:"BrtBeginPRFItem14", */
    T: 1
  },
  /*::[*/
  1168: {
    /* n:"BrtEndPRFItem14", */
    T: -1
  },
  /*::[*/
  1169: {
    /* n:"BrtBeginCellIgnoreECs14", */
    T: 1
  },
  /*::[*/
  1170: {
    /* n:"BrtEndCellIgnoreECs14", */
    T: -1
  },
  /*::[*/
  1171: {
    /* n:"BrtDxf14" */
  },
  /*::[*/
  1172: {
    /* n:"BrtBeginDxF14s", */
    T: 1
  },
  /*::[*/
  1173: {
    /* n:"BrtEndDxf14s", */
    T: -1
  },
  /*::[*/
  1177: {
    /* n:"BrtFilter14" */
  },
  /*::[*/
  1178: {
    /* n:"BrtBeginCustomFilters14", */
    T: 1
  },
  /*::[*/
  1180: {
    /* n:"BrtCustomFilter14" */
  },
  /*::[*/
  1181: {
    /* n:"BrtIconFilter14" */
  },
  /*::[*/
  1182: {
    /* n:"BrtPivotCacheConnectionName" */
  },
  /*::[*/
  2048: {
    /* n:"BrtBeginDecoupledPivotCacheIDs", */
    T: 1
  },
  /*::[*/
  2049: {
    /* n:"BrtEndDecoupledPivotCacheIDs", */
    T: -1
  },
  /*::[*/
  2050: {
    /* n:"BrtDecoupledPivotCacheID" */
  },
  /*::[*/
  2051: {
    /* n:"BrtBeginPivotTableRefs", */
    T: 1
  },
  /*::[*/
  2052: {
    /* n:"BrtEndPivotTableRefs", */
    T: -1
  },
  /*::[*/
  2053: {
    /* n:"BrtPivotTableRef" */
  },
  /*::[*/
  2054: {
    /* n:"BrtSlicerCacheBookPivotTables" */
  },
  /*::[*/
  2055: {
    /* n:"BrtBeginSxvcells", */
    T: 1
  },
  /*::[*/
  2056: {
    /* n:"BrtEndSxvcells", */
    T: -1
  },
  /*::[*/
  2057: {
    /* n:"BrtBeginSxRow", */
    T: 1
  },
  /*::[*/
  2058: {
    /* n:"BrtEndSxRow", */
    T: -1
  },
  /*::[*/
  2060: {
    /* n:"BrtPcdCalcMem15" */
  },
  /*::[*/
  2067: {
    /* n:"BrtQsi15" */
  },
  /*::[*/
  2068: {
    /* n:"BrtBeginWebExtensions", */
    T: 1
  },
  /*::[*/
  2069: {
    /* n:"BrtEndWebExtensions", */
    T: -1
  },
  /*::[*/
  2070: {
    /* n:"BrtWebExtension" */
  },
  /*::[*/
  2071: {
    /* n:"BrtAbsPath15" */
  },
  /*::[*/
  2072: {
    /* n:"BrtBeginPivotTableUISettings", */
    T: 1
  },
  /*::[*/
  2073: {
    /* n:"BrtEndPivotTableUISettings", */
    T: -1
  },
  /*::[*/
  2075: {
    /* n:"BrtTableSlicerCacheIDs" */
  },
  /*::[*/
  2076: {
    /* n:"BrtTableSlicerCacheID" */
  },
  /*::[*/
  2077: {
    /* n:"BrtBeginTableSlicerCache", */
    T: 1
  },
  /*::[*/
  2078: {
    /* n:"BrtEndTableSlicerCache", */
    T: -1
  },
  /*::[*/
  2079: {
    /* n:"BrtSxFilter15" */
  },
  /*::[*/
  2080: {
    /* n:"BrtBeginTimelineCachePivotCacheIDs", */
    T: 1
  },
  /*::[*/
  2081: {
    /* n:"BrtEndTimelineCachePivotCacheIDs", */
    T: -1
  },
  /*::[*/
  2082: {
    /* n:"BrtTimelineCachePivotCacheID" */
  },
  /*::[*/
  2083: {
    /* n:"BrtBeginTimelineCacheIDs", */
    T: 1
  },
  /*::[*/
  2084: {
    /* n:"BrtEndTimelineCacheIDs", */
    T: -1
  },
  /*::[*/
  2085: {
    /* n:"BrtBeginTimelineCacheID", */
    T: 1
  },
  /*::[*/
  2086: {
    /* n:"BrtEndTimelineCacheID", */
    T: -1
  },
  /*::[*/
  2087: {
    /* n:"BrtBeginTimelinesEx", */
    T: 1
  },
  /*::[*/
  2088: {
    /* n:"BrtEndTimelinesEx", */
    T: -1
  },
  /*::[*/
  2089: {
    /* n:"BrtBeginTimelineEx", */
    T: 1
  },
  /*::[*/
  2090: {
    /* n:"BrtEndTimelineEx", */
    T: -1
  },
  /*::[*/
  2091: {
    /* n:"BrtWorkBookPr15" */
  },
  /*::[*/
  2092: {
    /* n:"BrtPCDH15" */
  },
  /*::[*/
  2093: {
    /* n:"BrtBeginTimelineStyle", */
    T: 1
  },
  /*::[*/
  2094: {
    /* n:"BrtEndTimelineStyle", */
    T: -1
  },
  /*::[*/
  2095: {
    /* n:"BrtTimelineStyleElement" */
  },
  /*::[*/
  2096: {
    /* n:"BrtBeginTimelineStylesheetExt15", */
    T: 1
  },
  /*::[*/
  2097: {
    /* n:"BrtEndTimelineStylesheetExt15", */
    T: -1
  },
  /*::[*/
  2098: {
    /* n:"BrtBeginTimelineStyles", */
    T: 1
  },
  /*::[*/
  2099: {
    /* n:"BrtEndTimelineStyles", */
    T: -1
  },
  /*::[*/
  2100: {
    /* n:"BrtBeginTimelineStyleElements", */
    T: 1
  },
  /*::[*/
  2101: {
    /* n:"BrtEndTimelineStyleElements", */
    T: -1
  },
  /*::[*/
  2102: {
    /* n:"BrtDxf15" */
  },
  /*::[*/
  2103: {
    /* n:"BrtBeginDxfs15", */
    T: 1
  },
  /*::[*/
  2104: {
    /* n:"BrtEndDxfs15", */
    T: -1
  },
  /*::[*/
  2105: {
    /* n:"BrtSlicerCacheHideItemsWithNoData" */
  },
  /*::[*/
  2106: {
    /* n:"BrtBeginItemUniqueNames", */
    T: 1
  },
  /*::[*/
  2107: {
    /* n:"BrtEndItemUniqueNames", */
    T: -1
  },
  /*::[*/
  2108: {
    /* n:"BrtItemUniqueName" */
  },
  /*::[*/
  2109: {
    /* n:"BrtBeginExtConn15", */
    T: 1
  },
  /*::[*/
  2110: {
    /* n:"BrtEndExtConn15", */
    T: -1
  },
  /*::[*/
  2111: {
    /* n:"BrtBeginOledbPr15", */
    T: 1
  },
  /*::[*/
  2112: {
    /* n:"BrtEndOledbPr15", */
    T: -1
  },
  /*::[*/
  2113: {
    /* n:"BrtBeginDataFeedPr15", */
    T: 1
  },
  /*::[*/
  2114: {
    /* n:"BrtEndDataFeedPr15", */
    T: -1
  },
  /*::[*/
  2115: {
    /* n:"BrtTextPr15" */
  },
  /*::[*/
  2116: {
    /* n:"BrtRangePr15" */
  },
  /*::[*/
  2117: {
    /* n:"BrtDbCommand15" */
  },
  /*::[*/
  2118: {
    /* n:"BrtBeginDbTables15", */
    T: 1
  },
  /*::[*/
  2119: {
    /* n:"BrtEndDbTables15", */
    T: -1
  },
  /*::[*/
  2120: {
    /* n:"BrtDbTable15" */
  },
  /*::[*/
  2121: {
    /* n:"BrtBeginDataModel", */
    T: 1
  },
  /*::[*/
  2122: {
    /* n:"BrtEndDataModel", */
    T: -1
  },
  /*::[*/
  2123: {
    /* n:"BrtBeginModelTables", */
    T: 1
  },
  /*::[*/
  2124: {
    /* n:"BrtEndModelTables", */
    T: -1
  },
  /*::[*/
  2125: {
    /* n:"BrtModelTable" */
  },
  /*::[*/
  2126: {
    /* n:"BrtBeginModelRelationships", */
    T: 1
  },
  /*::[*/
  2127: {
    /* n:"BrtEndModelRelationships", */
    T: -1
  },
  /*::[*/
  2128: {
    /* n:"BrtModelRelationship" */
  },
  /*::[*/
  2129: {
    /* n:"BrtBeginECTxtWiz15", */
    T: 1
  },
  /*::[*/
  2130: {
    /* n:"BrtEndECTxtWiz15", */
    T: -1
  },
  /*::[*/
  2131: {
    /* n:"BrtBeginECTWFldInfoLst15", */
    T: 1
  },
  /*::[*/
  2132: {
    /* n:"BrtEndECTWFldInfoLst15", */
    T: -1
  },
  /*::[*/
  2133: {
    /* n:"BrtBeginECTWFldInfo15", */
    T: 1
  },
  /*::[*/
  2134: {
    /* n:"BrtFieldListActiveItem" */
  },
  /*::[*/
  2135: {
    /* n:"BrtPivotCacheIdVersion" */
  },
  /*::[*/
  2136: {
    /* n:"BrtSXDI15" */
  },
  /*::[*/
  2137: {
    /* n:"BrtBeginModelTimeGroupings", */
    T: 1
  },
  /*::[*/
  2138: {
    /* n:"BrtEndModelTimeGroupings", */
    T: -1
  },
  /*::[*/
  2139: {
    /* n:"BrtBeginModelTimeGrouping", */
    T: 1
  },
  /*::[*/
  2140: {
    /* n:"BrtEndModelTimeGrouping", */
    T: -1
  },
  /*::[*/
  2141: {
    /* n:"BrtModelTimeGroupingCalcCol" */
  },
  /*::[*/
  3072: {
    /* n:"BrtUid" */
  },
  /*::[*/
  3073: {
    /* n:"BrtRevisionPtr" */
  },
  /*::[*/
  4096: {
    /* n:"BrtBeginDynamicArrayPr", */
    T: 1
  },
  /*::[*/
  4097: {
    /* n:"BrtEndDynamicArrayPr", */
    T: -1
  },
  /*::[*/
  5002: {
    /* n:"BrtBeginRichValueBlock", */
    T: 1
  },
  /*::[*/
  5003: {
    /* n:"BrtEndRichValueBlock", */
    T: -1
  },
  /*::[*/
  5081: {
    /* n:"BrtBeginRichFilters", */
    T: 1
  },
  /*::[*/
  5082: {
    /* n:"BrtEndRichFilters", */
    T: -1
  },
  /*::[*/
  5083: {
    /* n:"BrtRichFilter" */
  },
  /*::[*/
  5084: {
    /* n:"BrtBeginRichFilterColumn", */
    T: 1
  },
  /*::[*/
  5085: {
    /* n:"BrtEndRichFilterColumn", */
    T: -1
  },
  /*::[*/
  5086: {
    /* n:"BrtBeginCustomRichFilters", */
    T: 1
  },
  /*::[*/
  5087: {
    /* n:"BrtEndCustomRichFilters", */
    T: -1
  },
  /*::[*/
  5088: {
    /* n:"BrtCustomRichFilter" */
  },
  /*::[*/
  5089: {
    /* n:"BrtTop10RichFilter" */
  },
  /*::[*/
  5090: {
    /* n:"BrtDynamicRichFilter" */
  },
  /*::[*/
  5092: {
    /* n:"BrtBeginRichSortCondition", */
    T: 1
  },
  /*::[*/
  5093: {
    /* n:"BrtEndRichSortCondition", */
    T: -1
  },
  /*::[*/
  5094: {
    /* n:"BrtRichFilterDateGroupItem" */
  },
  /*::[*/
  5095: {
    /* n:"BrtBeginCalcFeatures", */
    T: 1
  },
  /*::[*/
  5096: {
    /* n:"BrtEndCalcFeatures", */
    T: -1
  },
  /*::[*/
  5097: {
    /* n:"BrtCalcFeature" */
  },
  /*::[*/
  5099: {
    /* n:"BrtExternalLinksPr" */
  },
  /*::[*/
  65535: { n: "" }
}, jt = {
  /* [MS-XLS] 2.3 Record Enumeration 2021-08-17 */
  /*::[*/
  6: {
    /* n:"Formula", */
    f: Bt
  },
  /*::[*/
  10: {
    /* n:"EOF", */
    f: $r
  },
  /*::[*/
  12: {
    /* n:"CalcCount", */
    f: ze
  },
  //
  /*::[*/
  13: {
    /* n:"CalcMode", */
    f: ze
  },
  //
  /*::[*/
  14: {
    /* n:"CalcPrecision", */
    f: He
  },
  //
  /*::[*/
  15: {
    /* n:"CalcRefMode", */
    f: He
  },
  //
  /*::[*/
  16: {
    /* n:"CalcDelta", */
    f: sr
  },
  //
  /*::[*/
  17: {
    /* n:"CalcIter", */
    f: He
  },
  //
  /*::[*/
  18: {
    /* n:"Protect", */
    f: He
  },
  /*::[*/
  19: {
    /* n:"Password", */
    f: ze
  },
  /*::[*/
  20: {
    /* n:"Header", */
    f: xn
  },
  /*::[*/
  21: {
    /* n:"Footer", */
    f: xn
  },
  /*::[*/
  23: {
    /* n:"ExternSheet", */
    f: Mi
  },
  /*::[*/
  24: {
    /* n:"Lbl", */
    f: pn
  },
  /*::[*/
  25: {
    /* n:"WinProtect", */
    f: He
  },
  /*::[*/
  26: {
    /* n:"VerticalPageBreaks", */
  },
  /*::[*/
  27: {
    /* n:"HorizontalPageBreaks", */
  },
  /*::[*/
  28: {
    /* n:"Note", */
    f: So
  },
  /*::[*/
  29: {
    /* n:"Selection", */
  },
  /*::[*/
  34: {
    /* n:"Date1904", */
    f: He
  },
  /*::[*/
  35: {
    /* n:"ExternName", */
    f: dn
  },
  /*::[*/
  38: {
    /* n:"LeftMargin", */
    f: sr
  },
  // *
  /*::[*/
  39: {
    /* n:"RightMargin", */
    f: sr
  },
  // *
  /*::[*/
  40: {
    /* n:"TopMargin", */
    f: sr
  },
  // *
  /*::[*/
  41: {
    /* n:"BottomMargin", */
    f: sr
  },
  // *
  /*::[*/
  42: {
    /* n:"PrintRowCol", */
    f: He
  },
  /*::[*/
  43: {
    /* n:"PrintGrid", */
    f: He
  },
  /*::[*/
  47: {
    /* n:"FilePass", */
    f: Dl
  },
  /*::[*/
  49: {
    /* n:"Font", */
    f: so
  },
  /*::[*/
  51: {
    /* n:"PrintSize", */
    f: ze
  },
  /*::[*/
  60: {
    /* n:"Continue", */
  },
  /*::[*/
  61: {
    /* n:"Window1", */
    f: to
  },
  /*::[*/
  64: {
    /* n:"Backup", */
    f: He
  },
  /*::[*/
  65: {
    /* n:"Pane", */
    f: io
  },
  /*::[*/
  66: {
    /* n:"CodePage", */
    f: ze
  },
  /*::[*/
  77: {
    /* n:"Pls", */
  },
  /*::[*/
  80: {
    /* n:"DCon", */
  },
  /*::[*/
  81: {
    /* n:"DConRef", */
  },
  /*::[*/
  82: {
    /* n:"DConName", */
  },
  /*::[*/
  85: {
    /* n:"DefColWidth", */
    f: ze
  },
  /*::[*/
  89: {
    /* n:"XCT", */
  },
  /*::[*/
  90: {
    /* n:"CRN", */
  },
  /*::[*/
  91: {
    /* n:"FileSharing", */
  },
  /*::[*/
  92: {
    /* n:"WriteAccess", */
    f: jf
  },
  /*::[*/
  93: {
    /* n:"Obj", */
    f: yo
  },
  /*::[*/
  94: {
    /* n:"Uncalced", */
  },
  /*::[*/
  95: {
    /* n:"CalcSaveRecalc", */
    f: He
  },
  //
  /*::[*/
  96: {
    /* n:"Template", */
  },
  /*::[*/
  97: {
    /* n:"Intl", */
  },
  /*::[*/
  99: {
    /* n:"ObjProtect", */
    f: He
  },
  /*::[*/
  125: {
    /* n:"ColInfo", */
    f: Bi
  },
  /*::[*/
  128: {
    /* n:"Guts", */
    f: go
  },
  /*::[*/
  129: {
    /* n:"WsBool", */
    f: Jf
  },
  /*::[*/
  130: {
    /* n:"GridSet", */
    f: ze
  },
  /*::[*/
  131: {
    /* n:"HCenter", */
    f: He
  },
  /*::[*/
  132: {
    /* n:"VCenter", */
    f: He
  },
  /*::[*/
  133: {
    /* n:"BoundSheet8", */
    f: qf
  },
  /*::[*/
  134: {
    /* n:"WriteProtect", */
  },
  /*::[*/
  140: {
    /* n:"Country", */
    f: Po
  },
  /*::[*/
  141: {
    /* n:"HideObj", */
    f: ze
  },
  /*::[*/
  144: {
    /* n:"Sort", */
  },
  /*::[*/
  146: {
    /* n:"Palette", */
    f: bo
  },
  /*::[*/
  151: {
    /* n:"Sync", */
  },
  /*::[*/
  152: {
    /* n:"LPr", */
  },
  /*::[*/
  153: {
    /* n:"DxGCol", */
  },
  /*::[*/
  154: {
    /* n:"FnGroupName", */
  },
  /*::[*/
  155: {
    /* n:"FilterMode", */
  },
  /*::[*/
  156: {
    /* n:"BuiltInFnGroupCount", */
    f: ze
  },
  /*::[*/
  157: {
    /* n:"AutoFilterInfo", */
  },
  /*::[*/
  158: {
    /* n:"AutoFilter", */
  },
  /*::[*/
  160: {
    /* n:"Scl", */
    f: Wo
  },
  /*::[*/
  161: {
    /* n:"Setup", */
    f: Bo
  },
  /*::[*/
  174: {
    /* n:"ScenMan", */
  },
  /*::[*/
  175: {
    /* n:"SCENARIO", */
  },
  /*::[*/
  176: {
    /* n:"SxView", */
  },
  /*::[*/
  177: {
    /* n:"Sxvd", */
  },
  /*::[*/
  178: {
    /* n:"SXVI", */
  },
  /*::[*/
  180: {
    /* n:"SxIvd", */
  },
  /*::[*/
  181: {
    /* n:"SXLI", */
  },
  /*::[*/
  182: {
    /* n:"SXPI", */
  },
  /*::[*/
  184: {
    /* n:"DocRoute", */
  },
  /*::[*/
  185: {
    /* n:"RecipName", */
  },
  /*::[*/
  189: {
    /* n:"MulRk", */
    f: ho
  },
  /*::[*/
  190: {
    /* n:"MulBlank", */
    f: xo
  },
  /*::[*/
  193: {
    /* n:"Mms", */
    f: $r
  },
  /*::[*/
  197: {
    /* n:"SXDI", */
  },
  /*::[*/
  198: {
    /* n:"SXDB", */
  },
  /*::[*/
  199: {
    /* n:"SXFDB", */
  },
  /*::[*/
  200: {
    /* n:"SXDBB", */
  },
  /*::[*/
  201: {
    /* n:"SXNum", */
  },
  /*::[*/
  202: {
    /* n:"SxBool", */
    f: He
  },
  /*::[*/
  203: {
    /* n:"SxErr", */
  },
  /*::[*/
  204: {
    /* n:"SXInt", */
  },
  /*::[*/
  205: {
    /* n:"SXString", */
  },
  /*::[*/
  206: {
    /* n:"SXDtr", */
  },
  /*::[*/
  207: {
    /* n:"SxNil", */
  },
  /*::[*/
  208: {
    /* n:"SXTbl", */
  },
  /*::[*/
  209: {
    /* n:"SXTBRGIITM", */
  },
  /*::[*/
  210: {
    /* n:"SxTbpg", */
  },
  /*::[*/
  211: {
    /* n:"ObProj", */
  },
  /*::[*/
  213: {
    /* n:"SXStreamID", */
  },
  /*::[*/
  215: {
    /* n:"DBCell", */
  },
  /*::[*/
  216: {
    /* n:"SXRng", */
  },
  /*::[*/
  217: {
    /* n:"SxIsxoper", */
  },
  /*::[*/
  218: {
    /* n:"BookBool", */
    f: ze
  },
  /*::[*/
  220: {
    /* n:"DbOrParamQry", */
  },
  /*::[*/
  221: {
    /* n:"ScenarioProtect", */
    f: He
  },
  /*::[*/
  222: {
    /* n:"OleObjectSize", */
  },
  /*::[*/
  224: {
    /* n:"XF", */
    f: vo
  },
  /*::[*/
  225: {
    /* n:"InterfaceHdr", */
    f: Yf
  },
  /*::[*/
  226: {
    /* n:"InterfaceEnd", */
    f: $r
  },
  /*::[*/
  227: {
    /* n:"SXVS", */
  },
  /*::[*/
  229: {
    /* n:"MergeCells", */
    f: Co
  },
  /*::[*/
  233: {
    /* n:"BkHim", */
  },
  /*::[*/
  235: {
    /* n:"MsoDrawingGroup", */
  },
  /*::[*/
  236: {
    /* n:"MsoDrawing", */
  },
  /*::[*/
  237: {
    /* n:"MsoDrawingSelection", */
  },
  /*::[*/
  239: {
    /* n:"PhoneticInfo", */
  },
  /*::[*/
  240: {
    /* n:"SxRule", */
  },
  /*::[*/
  241: {
    /* n:"SXEx", */
  },
  /*::[*/
  242: {
    /* n:"SxFilt", */
  },
  /*::[*/
  244: {
    /* n:"SxDXF", */
  },
  /*::[*/
  245: {
    /* n:"SxItm", */
  },
  /*::[*/
  246: {
    /* n:"SxName", */
  },
  /*::[*/
  247: {
    /* n:"SxSelect", */
  },
  /*::[*/
  248: {
    /* n:"SXPair", */
  },
  /*::[*/
  249: {
    /* n:"SxFmla", */
  },
  /*::[*/
  251: {
    /* n:"SxFormat", */
  },
  /*::[*/
  252: {
    /* n:"SST", */
    f: Zf
  },
  /*::[*/
  253: {
    /* n:"LabelSst", */
    f: co
  },
  /*::[*/
  255: {
    /* n:"ExtSST", */
    f: Qf
  },
  /*::[*/
  256: {
    /* n:"SXVDEx", */
  },
  /*::[*/
  259: {
    /* n:"SXFormula", */
  },
  /*::[*/
  290: {
    /* n:"SXDBEx", */
  },
  /*::[*/
  311: {
    /* n:"RRDInsDel", */
  },
  /*::[*/
  312: {
    /* n:"RRDHead", */
  },
  /*::[*/
  315: {
    /* n:"RRDChgCell", */
  },
  /*::[*/
  317: {
    /* n:"RRTabId", */
    f: Ri
  },
  /*::[*/
  318: {
    /* n:"RRDRenSheet", */
  },
  /*::[*/
  319: {
    /* n:"RRSort", */
  },
  /*::[*/
  320: {
    /* n:"RRDMove", */
  },
  /*::[*/
  330: {
    /* n:"RRFormat", */
  },
  /*::[*/
  331: {
    /* n:"RRAutoFmt", */
  },
  /*::[*/
  333: {
    /* n:"RRInsertSh", */
  },
  /*::[*/
  334: {
    /* n:"RRDMoveBegin", */
  },
  /*::[*/
  335: {
    /* n:"RRDMoveEnd", */
  },
  /*::[*/
  336: {
    /* n:"RRDInsDelBegin", */
  },
  /*::[*/
  337: {
    /* n:"RRDInsDelEnd", */
  },
  /*::[*/
  338: {
    /* n:"RRDConflict", */
  },
  /*::[*/
  339: {
    /* n:"RRDDefName", */
  },
  /*::[*/
  340: {
    /* n:"RRDRstEtxp", */
  },
  /*::[*/
  351: {
    /* n:"LRng", */
  },
  /*::[*/
  352: {
    /* n:"UsesELFs", */
    f: He
  },
  /*::[*/
  353: {
    /* n:"DSF", */
    f: $r
  },
  /*::[*/
  401: {
    /* n:"CUsr", */
  },
  /*::[*/
  402: {
    /* n:"CbUsr", */
  },
  /*::[*/
  403: {
    /* n:"UsrInfo", */
  },
  /*::[*/
  404: {
    /* n:"UsrExcl", */
  },
  /*::[*/
  405: {
    /* n:"FileLock", */
  },
  /*::[*/
  406: {
    /* n:"RRDInfo", */
  },
  /*::[*/
  407: {
    /* n:"BCUsrs", */
  },
  /*::[*/
  408: {
    /* n:"UsrChk", */
  },
  /*::[*/
  425: {
    /* n:"UserBView", */
  },
  /*::[*/
  426: {
    /* n:"UserSViewBegin", */
  },
  /*::[*/
  427: {
    /* n:"UserSViewEnd", */
  },
  /*::[*/
  428: {
    /* n:"RRDUserView", */
  },
  /*::[*/
  429: {
    /* n:"Qsi", */
  },
  /*::[*/
  430: {
    /* n:"SupBook", */
    f: _o
  },
  /*::[*/
  431: {
    /* n:"Prot4Rev", */
    f: He
  },
  /*::[*/
  432: {
    /* n:"CondFmt", */
  },
  /*::[*/
  433: {
    /* n:"CF", */
  },
  /*::[*/
  434: {
    /* n:"DVal", */
  },
  /*::[*/
  437: {
    /* n:"DConBin", */
  },
  /*::[*/
  438: {
    /* n:"TxO", */
    f: Ro
  },
  /*::[*/
  439: {
    /* n:"RefreshAll", */
    f: He
  },
  //
  /*::[*/
  440: {
    /* n:"HLink", */
    f: Io
  },
  /*::[*/
  441: {
    /* n:"Lel", */
  },
  /*::[*/
  442: {
    /* n:"CodeName", */
    f: rt
  },
  /*::[*/
  443: {
    /* n:"SXFDBType", */
  },
  /*::[*/
  444: {
    /* n:"Prot4RevPass", */
    f: ze
  },
  /*::[*/
  445: {
    /* n:"ObNoMacros", */
  },
  /*::[*/
  446: {
    /* n:"Dv", */
  },
  /*::[*/
  448: {
    /* n:"Excel9File", */
    f: $r
  },
  /*::[*/
  449: {
    /* n:"RecalcId", */
    f: ao,
    r: 2
  },
  /*::[*/
  450: {
    /* n:"EntExU2", */
    f: $r
  },
  /*::[*/
  512: {
    /* n:"Dimensions", */
    f: un
  },
  /*::[*/
  513: {
    /* n:"Blank", */
    f: Ho
  },
  /*::[*/
  515: {
    /* n:"Number", */
    f: mo
  },
  /*::[*/
  516: {
    /* n:"Label", */
    f: fo
  },
  /*::[*/
  517: {
    /* n:"BoolErr", */
    f: hn
  },
  /*::[*/
  519: {
    /* n:"String", */
    f: Vo
  },
  /*::[*/
  520: {
    /* n:"Row", */
    f: eo
  },
  /*::[*/
  523: {
    /* n:"Index", */
  },
  /*::[*/
  545: {
    /* n:"Array", */
    f: vn
  },
  /*::[*/
  549: {
    /* n:"DefaultRowHeight", */
    f: ln
  },
  /*::[*/
  566: {
    /* n:"Table", */
  },
  /*::[*/
  574: {
    /* n:"Window2", */
    f: no
  },
  /*::[*/
  638: {
    /* n:"RK", */
    f: uo
  },
  /*::[*/
  659: {
    /* n:"Style", */
  },
  /*::[*/
  1048: {
    /* n:"BigName", */
  },
  /*::[*/
  1054: {
    /* n:"Format", */
    f: oo
  },
  /*::[*/
  1084: {
    /* n:"ContinueBigName", */
  },
  /*::[*/
  1212: {
    /* n:"ShrFmla", */
    f: wo
  },
  /*::[*/
  2048: {
    /* n:"HLinkTooltip", */
    f: No
  },
  /*::[*/
  2049: {
    /* n:"WebPub", */
  },
  /*::[*/
  2050: {
    /* n:"QsiSXTag", */
  },
  /*::[*/
  2051: {
    /* n:"DBQueryExt", */
  },
  /*::[*/
  2052: {
    /* n:"ExtString", */
  },
  /*::[*/
  2053: {
    /* n:"TxtQry", */
  },
  /*::[*/
  2054: {
    /* n:"Qsir", */
  },
  /*::[*/
  2055: {
    /* n:"Qsif", */
  },
  /*::[*/
  2056: {
    /* n:"RRDTQSIF", */
  },
  /*::[*/
  2057: {
    /* n:"BOF", */
    f: ut
  },
  /*::[*/
  2058: {
    /* n:"OleDbConn", */
  },
  /*::[*/
  2059: {
    /* n:"WOpt", */
  },
  /*::[*/
  2060: {
    /* n:"SXViewEx", */
  },
  /*::[*/
  2061: {
    /* n:"SXTH", */
  },
  /*::[*/
  2062: {
    /* n:"SXPIEx", */
  },
  /*::[*/
  2063: {
    /* n:"SXVDTEx", */
  },
  /*::[*/
  2064: {
    /* n:"SXViewEx9", */
  },
  /*::[*/
  2066: {
    /* n:"ContinueFrt", */
  },
  /*::[*/
  2067: {
    /* n:"RealTimeData", */
  },
  /*::[*/
  2128: {
    /* n:"ChartFrtInfo", */
  },
  /*::[*/
  2129: {
    /* n:"FrtWrapper", */
  },
  /*::[*/
  2130: {
    /* n:"StartBlock", */
  },
  /*::[*/
  2131: {
    /* n:"EndBlock", */
  },
  /*::[*/
  2132: {
    /* n:"StartObject", */
  },
  /*::[*/
  2133: {
    /* n:"EndObject", */
  },
  /*::[*/
  2134: {
    /* n:"CatLab", */
  },
  /*::[*/
  2135: {
    /* n:"YMult", */
  },
  /*::[*/
  2136: {
    /* n:"SXViewLink", */
  },
  /*::[*/
  2137: {
    /* n:"PivotChartBits", */
  },
  /*::[*/
  2138: {
    /* n:"FrtFontList", */
  },
  /*::[*/
  2146: {
    /* n:"SheetExt", */
  },
  /*::[*/
  2147: {
    /* n:"BookExt", */
    r: 12
  },
  /*::[*/
  2148: {
    /* n:"SXAddl", */
  },
  /*::[*/
  2149: {
    /* n:"CrErr", */
  },
  /*::[*/
  2150: {
    /* n:"HFPicture", */
  },
  /*::[*/
  2151: {
    /* n:"FeatHdr", */
    f: $r
  },
  /*::[*/
  2152: {
    /* n:"Feat", */
  },
  /*::[*/
  2154: {
    /* n:"DataLabExt", */
  },
  /*::[*/
  2155: {
    /* n:"DataLabExtContents", */
  },
  /*::[*/
  2156: {
    /* n:"CellWatch", */
  },
  /*::[*/
  2161: {
    /* n:"FeatHdr11", */
  },
  /*::[*/
  2162: {
    /* n:"Feature11", */
  },
  /*::[*/
  2164: {
    /* n:"DropDownObjIds", */
  },
  /*::[*/
  2165: {
    /* n:"ContinueFrt11", */
  },
  /*::[*/
  2166: {
    /* n:"DConn", */
  },
  /*::[*/
  2167: {
    /* n:"List12", */
  },
  /*::[*/
  2168: {
    /* n:"Feature12", */
  },
  /*::[*/
  2169: {
    /* n:"CondFmt12", */
  },
  /*::[*/
  2170: {
    /* n:"CF12", */
  },
  /*::[*/
  2171: {
    /* n:"CFEx", */
  },
  /*::[*/
  2172: {
    /* n:"XFCRC", */
    f: Mo,
    r: 12
  },
  /*::[*/
  2173: {
    /* n:"XFExt", */
    f: xu,
    r: 12
  },
  /*::[*/
  2174: {
    /* n:"AutoFilter12", */
  },
  /*::[*/
  2175: {
    /* n:"ContinueFrt12", */
  },
  /*::[*/
  2180: {
    /* n:"MDTInfo", */
  },
  /*::[*/
  2181: {
    /* n:"MDXStr", */
  },
  /*::[*/
  2182: {
    /* n:"MDXTuple", */
  },
  /*::[*/
  2183: {
    /* n:"MDXSet", */
  },
  /*::[*/
  2184: {
    /* n:"MDXProp", */
  },
  /*::[*/
  2185: {
    /* n:"MDXKPI", */
  },
  /*::[*/
  2186: {
    /* n:"MDB", */
  },
  /*::[*/
  2187: {
    /* n:"PLV", */
  },
  /*::[*/
  2188: {
    /* n:"Compat12", */
    f: He,
    r: 12
  },
  /*::[*/
  2189: {
    /* n:"DXF", */
  },
  /*::[*/
  2190: {
    /* n:"TableStyles", */
    r: 12
  },
  /*::[*/
  2191: {
    /* n:"TableStyle", */
  },
  /*::[*/
  2192: {
    /* n:"TableStyleElement", */
  },
  /*::[*/
  2194: {
    /* n:"StyleExt", */
  },
  /*::[*/
  2195: {
    /* n:"NamePublish", */
  },
  /*::[*/
  2196: {
    /* n:"NameCmt", */
    f: ko,
    r: 12
  },
  /*::[*/
  2197: {
    /* n:"SortData", */
  },
  /*::[*/
  2198: {
    /* n:"Theme", */
    f: cu,
    r: 12
  },
  /*::[*/
  2199: {
    /* n:"GUIDTypeLib", */
  },
  /*::[*/
  2200: {
    /* n:"FnGrp12", */
  },
  /*::[*/
  2201: {
    /* n:"NameFnGrp12", */
  },
  /*::[*/
  2202: {
    /* n:"MTRSettings", */
    f: Ao,
    r: 12
  },
  /*::[*/
  2203: {
    /* n:"CompressPictures", */
    f: $r
  },
  /*::[*/
  2204: {
    /* n:"HeaderFooter", */
  },
  /*::[*/
  2205: {
    /* n:"CrtLayout12", */
  },
  /*::[*/
  2206: {
    /* n:"CrtMlFrt", */
  },
  /*::[*/
  2207: {
    /* n:"CrtMlFrtContinue", */
  },
  /*::[*/
  2211: {
    /* n:"ForceFullCalculation", */
    f: ro
  },
  /*::[*/
  2212: {
    /* n:"ShapePropsStream", */
  },
  /*::[*/
  2213: {
    /* n:"TextPropsStream", */
  },
  /*::[*/
  2214: {
    /* n:"RichTextStream", */
  },
  /*::[*/
  2215: {
    /* n:"CrtLayout12A", */
  },
  /*::[*/
  4097: {
    /* n:"Units", */
  },
  /*::[*/
  4098: {
    /* n:"Chart", */
  },
  /*::[*/
  4099: {
    /* n:"Series", */
  },
  /*::[*/
  4102: {
    /* n:"DataFormat", */
  },
  /*::[*/
  4103: {
    /* n:"LineFormat", */
  },
  /*::[*/
  4105: {
    /* n:"MarkerFormat", */
  },
  /*::[*/
  4106: {
    /* n:"AreaFormat", */
  },
  /*::[*/
  4107: {
    /* n:"PieFormat", */
  },
  /*::[*/
  4108: {
    /* n:"AttachedLabel", */
  },
  /*::[*/
  4109: {
    /* n:"SeriesText", */
  },
  /*::[*/
  4116: {
    /* n:"ChartFormat", */
  },
  /*::[*/
  4117: {
    /* n:"Legend", */
  },
  /*::[*/
  4118: {
    /* n:"SeriesList", */
  },
  /*::[*/
  4119: {
    /* n:"Bar", */
  },
  /*::[*/
  4120: {
    /* n:"Line", */
  },
  /*::[*/
  4121: {
    /* n:"Pie", */
  },
  /*::[*/
  4122: {
    /* n:"Area", */
  },
  /*::[*/
  4123: {
    /* n:"Scatter", */
  },
  /*::[*/
  4124: {
    /* n:"CrtLine", */
  },
  /*::[*/
  4125: {
    /* n:"Axis", */
  },
  /*::[*/
  4126: {
    /* n:"Tick", */
  },
  /*::[*/
  4127: {
    /* n:"ValueRange", */
  },
  /*::[*/
  4128: {
    /* n:"CatSerRange", */
  },
  /*::[*/
  4129: {
    /* n:"AxisLine", */
  },
  /*::[*/
  4130: {
    /* n:"CrtLink", */
  },
  /*::[*/
  4132: {
    /* n:"DefaultText", */
  },
  /*::[*/
  4133: {
    /* n:"Text", */
  },
  /*::[*/
  4134: {
    /* n:"FontX", */
    f: ze
  },
  /*::[*/
  4135: {
    /* n:"ObjectLink", */
  },
  /*::[*/
  4146: {
    /* n:"Frame", */
  },
  /*::[*/
  4147: {
    /* n:"Begin", */
  },
  /*::[*/
  4148: {
    /* n:"End", */
  },
  /*::[*/
  4149: {
    /* n:"PlotArea", */
  },
  /*::[*/
  4154: {
    /* n:"Chart3d", */
  },
  /*::[*/
  4156: {
    /* n:"PicF", */
  },
  /*::[*/
  4157: {
    /* n:"DropBar", */
  },
  /*::[*/
  4158: {
    /* n:"Radar", */
  },
  /*::[*/
  4159: {
    /* n:"Surf", */
  },
  /*::[*/
  4160: {
    /* n:"RadarArea", */
  },
  /*::[*/
  4161: {
    /* n:"AxisParent", */
  },
  /*::[*/
  4163: {
    /* n:"LegendException", */
  },
  /*::[*/
  4164: {
    /* n:"ShtProps", */
    f: Uo
  },
  /*::[*/
  4165: {
    /* n:"SerToCrt", */
  },
  /*::[*/
  4166: {
    /* n:"AxesUsed", */
  },
  /*::[*/
  4168: {
    /* n:"SBaseRef", */
  },
  /*::[*/
  4170: {
    /* n:"SerParent", */
  },
  /*::[*/
  4171: {
    /* n:"SerAuxTrend", */
  },
  /*::[*/
  4174: {
    /* n:"IFmtRecord", */
  },
  /*::[*/
  4175: {
    /* n:"Pos", */
  },
  /*::[*/
  4176: {
    /* n:"AlRuns", */
  },
  /*::[*/
  4177: {
    /* n:"BRAI", */
  },
  /*::[*/
  4187: {
    /* n:"SerAuxErrBar", */
  },
  /*::[*/
  4188: {
    /* n:"ClrtClient", */
    f: Lo
  },
  /*::[*/
  4189: {
    /* n:"SerFmt", */
  },
  /*::[*/
  4191: {
    /* n:"Chart3DBarShape", */
  },
  /*::[*/
  4192: {
    /* n:"Fbi", */
  },
  /*::[*/
  4193: {
    /* n:"BopPop", */
  },
  /*::[*/
  4194: {
    /* n:"AxcExt", */
  },
  /*::[*/
  4195: {
    /* n:"Dat", */
  },
  /*::[*/
  4196: {
    /* n:"PlotGrowth", */
  },
  /*::[*/
  4197: {
    /* n:"SIIndex", */
  },
  /*::[*/
  4198: {
    /* n:"GelFrame", */
  },
  /*::[*/
  4199: {
    /* n:"BopPopCustom", */
  },
  /*::[*/
  4200: {
    /* n:"Fbi2", */
  },
  /*::[*/
  0: {
    /* n:"Dimensions", */
    f: un
  },
  /*::[*/
  1: {
    /* n:"BIFF2BLANK", */
  },
  /*::[*/
  2: {
    /* n:"BIFF2INT", */
    f: $o
  },
  /*::[*/
  3: {
    /* n:"BIFF2NUM", */
    f: zo
  },
  /*::[*/
  4: {
    /* n:"BIFF2STR", */
    f: Xo
  },
  /*::[*/
  5: {
    /* n:"BoolErr", */
    f: hn
  },
  /*::[*/
  7: {
    /* n:"String", */
    f: Ko
  },
  /*::[*/
  8: {
    /* n:"BIFF2ROW", */
  },
  /*::[*/
  9: {
    /* n:"BOF", */
    f: ut
  },
  /*::[*/
  11: {
    /* n:"Index", */
  },
  /*::[*/
  22: {
    /* n:"ExternCount", */
    f: ze
  },
  /*::[*/
  30: {
    /* n:"BIFF2FORMAT", */
    f: lo
  },
  /*::[*/
  31: {
    /* n:"BIFF2FMTCNT", */
  },
  /* 16-bit cnt of BIFF2FORMAT records */
  /*::[*/
  32: {
    /* n:"BIFF2COLINFO", */
  },
  /*::[*/
  33: {
    /* n:"Array", */
    f: vn
  },
  /*::[*/
  36: {
    /* n:"COLWIDTH", */
  },
  /*::[*/
  37: {
    /* n:"DefaultRowHeight", */
    f: ln
  },
  // 0x2c ??
  // 0x2d ??
  // 0x2e ??
  // 0x30 FONTCOUNT: number of fonts
  /*::[*/
  50: {
    /* n:"BIFF2FONTXTRA", */
    f: Yo
  },
  // 0x35: INFOOPTS
  // 0x36: TABLE (BIFF2 only)
  // 0x37: TABLE2 (BIFF2 only)
  // 0x38: WNDESK
  // 0x39 ??
  // 0x3a: BEGINPREF
  // 0x3b: ENDPREF
  /*::[*/
  62: {
    /* n:"BIFF2WINDOW2", */
  },
  // 0x3f ??
  // 0x46: SHOWSCROLL
  // 0x47: SHOWFORMULA
  // 0x48: STATUSBAR
  // 0x49: SHORTMENUS
  // 0x4A:
  // 0x4B:
  // 0x4C:
  // 0x4E:
  // 0x4F:
  // 0x58: TOOLBAR (BIFF3)
  /* - - - */
  /*::[*/
  52: {
    /* n:"DDEObjName", */
  },
  /*::[*/
  67: {
    /* n:"BIFF2XF", */
  },
  /*::[*/
  68: {
    /* n:"BIFF2XFINDEX", */
    f: ze
  },
  /*::[*/
  69: {
    /* n:"BIFF2FONTCLR", */
  },
  /*::[*/
  86: {
    /* n:"BIFF4FMTCNT", */
  },
  /* 16-bit cnt, similar to BIFF2 */
  /*::[*/
  126: {
    /* n:"RK", */
  },
  /* Not necessarily same as 0x027e */
  /*::[*/
  127: {
    /* n:"ImData", */
    f: Go
  },
  /*::[*/
  135: {
    /* n:"Addin", */
  },
  /*::[*/
  136: {
    /* n:"Edg", */
  },
  /*::[*/
  137: {
    /* n:"Pub", */
  },
  // 0x8A
  // 0x8B LH: alternate menu key flag (BIFF3/4)
  // 0x8E
  // 0x8F
  /*::[*/
  145: {
    /* n:"Sub", */
  },
  // 0x93 STYLE
  /*::[*/
  148: {
    /* n:"LHRecord", */
  },
  /*::[*/
  149: {
    /* n:"LHNGraph", */
  },
  /*::[*/
  150: {
    /* n:"Sound", */
  },
  // 0xA2 FNPROTO: function prototypes (BIFF4)
  // 0xA3
  // 0xA8
  /*::[*/
  169: {
    /* n:"CoordList", */
  },
  /*::[*/
  171: {
    /* n:"GCW", */
  },
  /*::[*/
  188: {
    /* n:"ShrFmla", */
  },
  /* Not necessarily same as 0x04bc */
  /*::[*/
  191: {
    /* n:"ToolbarHdr", */
  },
  /*::[*/
  192: {
    /* n:"ToolbarEnd", */
  },
  /*::[*/
  194: {
    /* n:"AddMenu", */
  },
  /*::[*/
  195: {
    /* n:"DelMenu", */
  },
  /*::[*/
  214: {
    /* n:"RString", */
    f: jo
  },
  /*::[*/
  223: {
    /* n:"UDDesc", */
  },
  /*::[*/
  234: {
    /* n:"TabIdConf", */
  },
  /*::[*/
  354: {
    /* n:"XL5Modify", */
  },
  /*::[*/
  421: {
    /* n:"FileSharing2", */
  },
  /*::[*/
  518: {
    /* n:"Formula", */
    f: Bt
  },
  /*::[*/
  521: {
    /* n:"BOF", */
    f: ut
  },
  /*::[*/
  536: {
    /* n:"Lbl", */
    f: pn
  },
  /*::[*/
  547: {
    /* n:"ExternName", */
    f: dn
  },
  /*::[*/
  561: {
    /* n:"Font", */
  },
  /*::[*/
  579: {
    /* n:"BIFF3XF", */
  },
  /*::[*/
  1030: {
    /* n:"Formula", */
    f: Bt
  },
  /*::[*/
  1033: {
    /* n:"BOF", */
    f: ut
  },
  /*::[*/
  1091: {
    /* n:"BIFF4XF", */
  },
  /*::[*/
  2157: {
    /* n:"FeatInfo", */
  },
  /*::[*/
  2163: {
    /* n:"FeatInfo11", */
  },
  /*::[*/
  2177: {
    /* n:"SXAddl12", */
  },
  /*::[*/
  2240: {
    /* n:"AutoWebPub", */
  },
  /*::[*/
  2241: {
    /* n:"ListObj", */
  },
  /*::[*/
  2242: {
    /* n:"ListField", */
  },
  /*::[*/
  2243: {
    /* n:"ListDV", */
  },
  /*::[*/
  2244: {
    /* n:"ListCondFmt", */
  },
  /*::[*/
  2245: {
    /* n:"ListCF", */
  },
  /*::[*/
  2246: {
    /* n:"FMQry", */
  },
  /*::[*/
  2247: {
    /* n:"FMSQry", */
  },
  /*::[*/
  2248: {
    /* n:"PLV", */
  },
  /*::[*/
  2249: {
    /* n:"LnExt", */
  },
  /*::[*/
  2250: {
    /* n:"MkrExt", */
  },
  /*::[*/
  2251: {
    /* n:"CrtCoopt", */
  },
  /*::[*/
  2262: {
    /* n:"FRTArchId$", */
    r: 12
  },
  /*::[*/
  29282: {}
};
function yr(e, a, r, n) {
  var t = a;
  if (!isNaN(t)) {
    var i = (r || []).length || 0, s = e.next(4);
    s.write_shift(2, t), s.write_shift(2, i), /*:: len != null &&*/
    i > 0 && mi(r) && e.push(r);
  }
}
function Cn(e, a) {
  var r = a || {}, n = r.dense ? [] : {};
  e = e.replace(/<!--.*?-->/g, "");
  var t = e.match(/<table/i);
  if (!t) throw new Error("Invalid HTML: could not find <table>");
  var i = e.match(/<\/table/i), s = t.index, c = i && i.index || e.length, o = vc(e.slice(s, c), /(:?<tr[^>]*>)/i, "<tr>"), f = -1, l = 0, u = 0, h = 0, d = { s: { r: 1e7, c: 1e7 }, e: { r: 0, c: 0 } }, p = [];
  for (s = 0; s < o.length; ++s) {
    var x = o[s].trim(), g = x.slice(0, 3).toLowerCase();
    if (g == "<tr") {
      if (++f, r.sheetRows && r.sheetRows <= f) {
        --f;
        break;
      }
      l = 0;
      continue;
    }
    if (!(g != "<td" && g != "<th")) {
      var O = x.split(/<\/t[dh]>/i);
      for (c = 0; c < O.length; ++c) {
        var I = O[c].trim();
        if (I.match(/<t[dh]/i)) {
          for (var T = I, U = 0; T.charAt(0) == "<" && (U = T.indexOf(">")) > -1; ) T = T.slice(U + 1);
          for (var V = 0; V < p.length; ++V) {
            var B = p[V];
            B.s.c == l && B.s.r < f && f <= B.e.r && (l = B.e.c + 1, V = -1);
          }
          var A = ge(I.slice(0, I.indexOf(">")));
          h = A.colspan ? +A.colspan : 1, ((u = +A.rowspan) > 1 || h > 1) && p.push({ s: { r: f, c: l }, e: { r: f + (u || 1) - 1, c: l + h - 1 } });
          var _ = A.t || A["data-t"] || "";
          if (!T.length) {
            l += h;
            continue;
          }
          if (T = ii(T), d.s.r > f && (d.s.r = f), d.e.r < f && (d.e.r = f), d.s.c > l && (d.s.c = l), d.e.c < l && (d.e.c = l), !T.length) {
            l += h;
            continue;
          }
          var m = { t: "s", v: T };
          r.raw || !T.trim().length || _ == "s" || (T === "TRUE" ? m = { t: "b", v: !0 } : T === "FALSE" ? m = { t: "b", v: !1 } : isNaN(Ir(T)) ? isNaN(ka(T).getDate()) || (m = { t: "d", v: qe(T) }, r.cellDates || (m = { t: "n", v: pr(m.v) }), m.z = r.dateNF || Ee[14]) : m = { t: "n", v: Ir(T) }), r.dense ? (n[f] || (n[f] = []), n[f][l] = m) : n[me({ r: f, c: l })] = m, l += h;
        }
      }
    }
  }
  return n["!ref"] = Se(d), p.length && (n["!merges"] = p), n;
}
function Yx(e, a, r, n) {
  for (var t = e["!merges"] || [], i = [], s = a.s.c; s <= a.e.c; ++s) {
    for (var c = 0, o = 0, f = 0; f < t.length; ++f)
      if (!(t[f].s.r > r || t[f].s.c > s) && !(t[f].e.r < r || t[f].e.c < s)) {
        if (t[f].s.r < r || t[f].s.c < s) {
          c = -1;
          break;
        }
        c = t[f].e.r - t[f].s.r + 1, o = t[f].e.c - t[f].s.c + 1;
        break;
      }
    if (!(c < 0)) {
      var l = me({ r, c: s }), u = n.dense ? (e[r] || [])[s] : e[l], h = u && u.v != null && (u.h || c0(u.w || (Gr(u), u.w) || "")) || "", d = {};
      c > 1 && (d.rowspan = c), o > 1 && (d.colspan = o), n.editable ? h = '<span contenteditable="true">' + h + "</span>" : u && (d["data-t"] = u && u.t || "z", u.v != null && (d["data-v"] = u.v), u.z != null && (d["data-z"] = u.z), u.l && (u.l.Target || "#").charAt(0) != "#" && (h = '<a href="' + u.l.Target + '">' + h + "</a>")), d.id = (n.id || "sjs") + "-" + l, i.push(Ic("td", h, d));
    }
  }
  var p = "<tr>";
  return p + i.join("") + "</tr>";
}
var jx = '<html><head><meta charset="utf-8"/><title>SheetJS Table Export</title></head><body>', Jx = "</body></html>";
function qx(e, a) {
  var r = e.match(/<table[\s\S]*?>[\s\S]*?<\/table>/gi);
  if (!r || r.length == 0) throw new Error("Invalid HTML: could not find <table>");
  if (r.length == 1) return Qr(Cn(r[0], a), a);
  var n = F0();
  return r.forEach(function(t, i) {
    S0(n, Cn(t, a), "Sheet" + (i + 1));
  }), n;
}
function Zx(e, a, r) {
  var n = [];
  return n.join("") + "<table" + (r && r.id ? ' id="' + r.id + '"' : "") + ">";
}
function Qx(e, a) {
  var r = a || {}, n = r.header != null ? r.header : jx, t = r.footer != null ? r.footer : Jx, i = [n], s = Sa(e["!ref"]);
  r.dense = Array.isArray(e), i.push(Zx(e, s, r));
  for (var c = s.s.r; c <= s.e.r; ++c) i.push(Yx(e, s, c, r));
  return i.push("</table>" + t), i.join("");
}
function ls(e, a, r) {
  var n = r || {}, t = 0, i = 0;
  if (n.origin != null)
    if (typeof n.origin == "number") t = n.origin;
    else {
      var s = typeof n.origin == "string" ? xr(n.origin) : n.origin;
      t = s.r, i = s.c;
    }
  var c = a.getElementsByTagName("tr"), o = Math.min(n.sheetRows || 1e7, c.length), f = { s: { r: 0, c: 0 }, e: { r: t, c: i } };
  if (e["!ref"]) {
    var l = Sa(e["!ref"]);
    f.s.r = Math.min(f.s.r, l.s.r), f.s.c = Math.min(f.s.c, l.s.c), f.e.r = Math.max(f.e.r, l.e.r), f.e.c = Math.max(f.e.c, l.e.c), t == -1 && (f.e.r = t = l.e.r + 1);
  }
  var u = [], h = 0, d = e["!rows"] || (e["!rows"] = []), p = 0, x = 0, g = 0, O = 0, I = 0, T = 0;
  for (e["!cols"] || (e["!cols"] = []); p < c.length && x < o; ++p) {
    var U = c[p];
    if (yn(U)) {
      if (n.display) continue;
      d[x] = { hidden: !0 };
    }
    var V = U.children;
    for (g = O = 0; g < V.length; ++g) {
      var B = V[g];
      if (!(n.display && yn(B))) {
        var A = B.hasAttribute("data-v") ? B.getAttribute("data-v") : B.hasAttribute("v") ? B.getAttribute("v") : ii(B.innerHTML), _ = B.getAttribute("data-z") || B.getAttribute("z");
        for (h = 0; h < u.length; ++h) {
          var m = u[h];
          m.s.c == O + i && m.s.r < x + t && x + t <= m.e.r && (O = m.e.c + 1 - i, h = -1);
        }
        T = +B.getAttribute("colspan") || 1, ((I = +B.getAttribute("rowspan") || 1) > 1 || T > 1) && u.push({ s: { r: x + t, c: O + i }, e: { r: x + t + (I || 1) - 1, c: O + i + (T || 1) - 1 } });
        var R = { t: "s", v: A }, L = B.getAttribute("data-t") || B.getAttribute("t") || "";
        A != null && (A.length == 0 ? R.t = L || "z" : n.raw || A.trim().length == 0 || L == "s" || (A === "TRUE" ? R = { t: "b", v: !0 } : A === "FALSE" ? R = { t: "b", v: !1 } : isNaN(Ir(A)) ? isNaN(ka(A).getDate()) || (R = { t: "d", v: qe(A) }, n.cellDates || (R = { t: "n", v: pr(R.v) }), R.z = n.dateNF || Ee[14]) : R = { t: "n", v: Ir(A) })), R.z === void 0 && _ != null && (R.z = _);
        var D = "", z = B.getElementsByTagName("A");
        if (z && z.length) for (var ie = 0; ie < z.length && !(z[ie].hasAttribute("href") && (D = z[ie].getAttribute("href"), D.charAt(0) != "#")); ++ie) ;
        D && D.charAt(0) != "#" && (R.l = { Target: D }), n.dense ? (e[x + t] || (e[x + t] = []), e[x + t][O + i] = R) : e[me({ c: O + i, r: x + t })] = R, f.e.c < O + i && (f.e.c = O + i), O += T;
      }
    }
    ++x;
  }
  return u.length && (e["!merges"] = (e["!merges"] || []).concat(u)), f.e.r = Math.max(f.e.r, x - 1 + t), e["!ref"] = Se(f), x >= o && (e["!fullref"] = Se((f.e.r = c.length - p + x - 1 + t, f))), e;
}
function us(e, a) {
  var r = a || {}, n = r.dense ? [] : {};
  return ls(n, e, a);
}
function ed(e, a) {
  return Qr(us(e, a), a);
}
function yn(e) {
  var a = "", r = rd(e);
  return r && (a = r(e).getPropertyValue("display")), a || (a = e.style && e.style.display), a === "none";
}
function rd(e) {
  return e.ownerDocument.defaultView && typeof e.ownerDocument.defaultView.getComputedStyle == "function" ? e.ownerDocument.defaultView.getComputedStyle : typeof getComputedStyle == "function" ? getComputedStyle : null;
}
function ad(e) {
  var a = e.replace(/[\t\r\n]/g, " ").trim().replace(/ +/g, " ").replace(/<text:s\/>/g, " ").replace(/<text:s text:c="(\d+)"\/>/g, function(n, t) {
    return Array(parseInt(t, 10) + 1).join(" ");
  }).replace(/<text:tab[^>]*\/>/g, "	").replace(/<text:line-break\/>/g, `
`), r = Ce(a.replace(/<[^>]*>/g, ""));
  return [r];
}
var On = {
  /* ods name: [short ssf fmt, long ssf fmt] */
  day: ["d", "dd"],
  month: ["m", "mm"],
  year: ["y", "yy"],
  hours: ["h", "hh"],
  minutes: ["m", "mm"],
  seconds: ["s", "ss"],
  "am-pm": ["A/P", "AM/PM"],
  "day-of-week": ["ddd", "dddd"],
  era: ["e", "ee"],
  /* there is no native representation of LO "Q" format */
  quarter: ["\\Qm", 'm\\"th quarter"']
};
function hs(e, a) {
  var r = a || {}, n = f0(e), t = [], i, s, c = { name: "" }, o = "", f = 0, l, u, h = {}, d = [], p = r.dense ? [] : {}, x, g, O = { value: "" }, I = "", T = 0, U = [], V = -1, B = -1, A = { s: { r: 1e6, c: 1e7 }, e: { r: 0, c: 0 } }, _ = 0, m = {}, R = [], L = {}, D = 0, z = 0, ie = [], re = 1, fe = 1, q = [], ve = { Names: [] }, M = {}, he = ["", ""], te = [], w = {}, P = "", b = 0, N = !1, K = !1, ee = 0;
  for (Ka.lastIndex = 0, n = n.replace(/<!--([\s\S]*?)-->/mg, "").replace(/<!DOCTYPE[^\[]*\[[^\]]*\]>/gm, ""); x = Ka.exec(n); ) switch (x[3] = x[3].replace(/_.*$/, "")) {
    case "table":
    case "工作表":
      x[1] === "/" ? (A.e.c >= A.s.c && A.e.r >= A.s.r ? p["!ref"] = Se(A) : p["!ref"] = "A1:A1", r.sheetRows > 0 && r.sheetRows <= A.e.r && (p["!fullref"] = p["!ref"], A.e.r = r.sheetRows - 1, p["!ref"] = Se(A)), R.length && (p["!merges"] = R), ie.length && (p["!rows"] = ie), l.name = l.名称 || l.name, typeof JSON < "u" && JSON.stringify(l), d.push(l.name), h[l.name] = p, K = !1) : x[0].charAt(x[0].length - 2) !== "/" && (l = ge(x[0], !1), V = B = -1, A.s.r = A.s.c = 1e7, A.e.r = A.e.c = 0, p = r.dense ? [] : {}, R = [], ie = [], K = !0);
      break;
    case "table-row-group":
      x[1] === "/" ? --_ : ++_;
      break;
    case "table-row":
    case "行":
      if (x[1] === "/") {
        V += re, re = 1;
        break;
      }
      if (u = ge(x[0], !1), u.行号 ? V = u.行号 - 1 : V == -1 && (V = 0), re = +u["number-rows-repeated"] || 1, re < 10) for (ee = 0; ee < re; ++ee) _ > 0 && (ie[V + ee] = { level: _ });
      B = -1;
      break;
    case "covered-table-cell":
      x[1] !== "/" && ++B, r.sheetStubs && (r.dense ? (p[V] || (p[V] = []), p[V][B] = { t: "z" }) : p[me({ r: V, c: B })] = { t: "z" }), I = "", U = [];
      break;
    /* stub */
    case "table-cell":
    case "数据":
      if (x[0].charAt(x[0].length - 2) === "/")
        ++B, O = ge(x[0], !1), fe = parseInt(O["number-columns-repeated"] || "1", 10), g = {
          t: "z",
          v: null
          /*:: , z:null, w:"",c:[]*/
        }, O.formula && r.cellFormula != !1 && (g.f = wn(Ce(O.formula))), (O.数据类型 || O["value-type"]) == "string" && (g.t = "s", g.v = Ce(O["string-value"] || ""), r.dense ? (p[V] || (p[V] = []), p[V][B] = g) : p[me({ r: V, c: B })] = g), B += fe - 1;
      else if (x[1] !== "/") {
        ++B, I = "", T = 0, U = [], fe = 1;
        var Z = re ? V + re - 1 : V;
        if (B > A.e.c && (A.e.c = B), B < A.s.c && (A.s.c = B), V < A.s.r && (A.s.r = V), Z > A.e.r && (A.e.r = Z), O = ge(x[0], !1), te = [], w = {}, g = {
          t: O.数据类型 || O["value-type"],
          v: null
          /*:: , z:null, w:"",c:[]*/
        }, r.cellFormula)
          if (O.formula && (O.formula = Ce(O.formula)), O["number-matrix-columns-spanned"] && O["number-matrix-rows-spanned"] && (D = parseInt(O["number-matrix-rows-spanned"], 10) || 0, z = parseInt(O["number-matrix-columns-spanned"], 10) || 0, L = { s: { r: V, c: B }, e: { r: V + D - 1, c: B + z - 1 } }, g.F = Se(L), q.push([L, g.F])), O.formula) g.f = wn(O.formula);
          else for (ee = 0; ee < q.length; ++ee)
            V >= q[ee][0].s.r && V <= q[ee][0].e.r && B >= q[ee][0].s.c && B <= q[ee][0].e.c && (g.F = q[ee][1]);
        switch ((O["number-columns-spanned"] || O["number-rows-spanned"]) && (D = parseInt(O["number-rows-spanned"], 10) || 0, z = parseInt(O["number-columns-spanned"], 10) || 0, L = { s: { r: V, c: B }, e: { r: V + D - 1, c: B + z - 1 } }, R.push(L)), O["number-columns-repeated"] && (fe = parseInt(O["number-columns-repeated"], 10)), g.t) {
          case "boolean":
            g.t = "b", g.v = Pe(O["boolean-value"]);
            break;
          case "float":
            g.t = "n", g.v = parseFloat(O.value);
            break;
          case "percentage":
            g.t = "n", g.v = parseFloat(O.value);
            break;
          case "currency":
            g.t = "n", g.v = parseFloat(O.value);
            break;
          case "date":
            g.t = "d", g.v = qe(O["date-value"]), r.cellDates || (g.t = "n", g.v = pr(g.v)), g.z = "m/d/yy";
            break;
          case "time":
            g.t = "n", g.v = xc(O["time-value"]) / 86400, r.cellDates && (g.t = "d", g.v = Ct(g.v)), g.z = "HH:MM:SS";
            break;
          case "number":
            g.t = "n", g.v = parseFloat(O.数据数值);
            break;
          default:
            if (g.t === "string" || g.t === "text" || !g.t)
              g.t = "s", O["string-value"] != null && (I = Ce(O["string-value"]), U = []);
            else throw new Error("Unsupported value type " + g.t);
        }
      } else {
        if (N = !1, g.t === "s" && (g.v = I || "", U.length && (g.R = U), N = T == 0), M.Target && (g.l = M), te.length > 0 && (g.c = te, te = []), I && r.cellText !== !1 && (g.w = I), N && (g.t = "z", delete g.v), (!N || r.sheetStubs) && !(r.sheetRows && r.sheetRows <= V))
          for (var J = 0; J < re; ++J) {
            if (fe = parseInt(O["number-columns-repeated"] || "1", 10), r.dense)
              for (p[V + J] || (p[V + J] = []), p[V + J][B] = J == 0 ? g : Qe(g); --fe > 0; ) p[V + J][B + fe] = Qe(g);
            else
              for (p[me({ r: V + J, c: B })] = g; --fe > 0; ) p[me({ r: V + J, c: B + fe })] = Qe(g);
            A.e.c <= B && (A.e.c = B);
          }
        fe = parseInt(O["number-columns-repeated"] || "1", 10), B += fe - 1, fe = 0, g = {
          /*:: t:"", v:null, z:null, w:"",c:[]*/
        }, I = "", U = [];
      }
      M = {};
      break;
    // 9.1.4 <table:table-cell>
    /* pure state */
    case "document":
    // TODO: <office:document> is the root for FODS
    case "document-content":
    case "电子表格文档":
    // 3.1.3.2 <office:document-content>
    case "spreadsheet":
    case "主体":
    // 3.7 <office:spreadsheet>
    case "scripts":
    // 3.12 <office:scripts>
    case "styles":
    // TODO <office:styles>
    case "font-face-decls":
    // 3.14 <office:font-face-decls>
    case "master-styles":
      if (x[1] === "/") {
        if ((i = t.pop())[0] !== x[3]) throw "Bad state: " + i;
      } else x[0].charAt(x[0].length - 2) !== "/" && t.push([x[3], !0]);
      break;
    case "annotation":
      if (x[1] === "/") {
        if ((i = t.pop())[0] !== x[3]) throw "Bad state: " + i;
        w.t = I, U.length && (w.R = U), w.a = P, te.push(w);
      } else x[0].charAt(x[0].length - 2) !== "/" && t.push([x[3], !1]);
      P = "", b = 0, I = "", T = 0, U = [];
      break;
    case "creator":
      x[1] === "/" ? P = n.slice(b, x.index) : b = x.index + x[0].length;
      break;
    /* ignore state */
    case "meta":
    case "元数据":
    // TODO: <office:meta> <uof:元数据> FODS/UOF
    case "settings":
    // TODO: <office:settings>
    case "config-item-set":
    // TODO: <office:config-item-set>
    case "config-item-map-indexed":
    // TODO: <office:config-item-map-indexed>
    case "config-item-map-entry":
    // TODO: <office:config-item-map-entry>
    case "config-item-map-named":
    // TODO: <office:config-item-map-entry>
    case "shapes":
    // 9.2.8 <table:shapes>
    case "frame":
    // 10.4.2 <draw:frame>
    case "text-box":
    // 10.4.3 <draw:text-box>
    case "image":
    // 10.4.4 <draw:image>
    case "data-pilot-tables":
    // 9.6.2 <table:data-pilot-tables>
    case "list-style":
    // 16.30 <text:list-style>
    case "form":
    // 13.13 <form:form>
    case "dde-links":
    // 9.8 <table:dde-links>
    case "event-listeners":
    // TODO
    case "chart":
      if (x[1] === "/") {
        if ((i = t.pop())[0] !== x[3]) throw "Bad state: " + i;
      } else x[0].charAt(x[0].length - 2) !== "/" && t.push([x[3], !1]);
      I = "", T = 0, U = [];
      break;
    case "scientific-number":
      break;
    case "currency-symbol":
      break;
    case "currency-style":
      break;
    case "number-style":
    // 16.27.2 <number:number-style>
    case "percentage-style":
    // 16.27.9 <number:percentage-style>
    case "date-style":
    // 16.27.10 <number:date-style>
    case "time-style":
      if (x[1] === "/") {
        if (m[c.name] = o, (i = t.pop())[0] !== x[3]) throw "Bad state: " + i;
      } else x[0].charAt(x[0].length - 2) !== "/" && (o = "", c = ge(x[0], !1), t.push([x[3], !0]));
      break;
    case "script":
      break;
    // 3.13 <office:script>
    case "libraries":
      break;
    // TODO: <ooo:libraries>
    case "automatic-styles":
      break;
    // 3.15.3 <office:automatic-styles>
    case "default-style":
    // TODO: <style:default-style>
    case "page-layout":
      break;
    // TODO: <style:page-layout>
    case "style":
      break;
    case "map":
      break;
    // 16.3 <style:map>
    case "font-face":
      break;
    // 16.21 <style:font-face>
    case "paragraph-properties":
      break;
    // 17.6 <style:paragraph-properties>
    case "table-properties":
      break;
    // 17.15 <style:table-properties>
    case "table-column-properties":
      break;
    // 17.16 <style:table-column-properties>
    case "table-row-properties":
      break;
    // 17.17 <style:table-row-properties>
    case "table-cell-properties":
      break;
    // 17.18 <style:table-cell-properties>
    case "number":
      switch (t[t.length - 1][0]) {
        case "time-style":
        case "date-style":
          s = ge(x[0], !1), o += On[x[3]][s.style === "long" ? 1 : 0];
          break;
      }
      break;
    case "fraction":
      break;
    // TODO 16.27.6 <number:fraction>
    case "day":
    // 16.27.11 <number:day>
    case "month":
    // 16.27.12 <number:month>
    case "year":
    // 16.27.13 <number:year>
    case "era":
    // 16.27.14 <number:era>
    case "day-of-week":
    // 16.27.15 <number:day-of-week>
    case "week-of-year":
    // 16.27.16 <number:week-of-year>
    case "quarter":
    // 16.27.17 <number:quarter>
    case "hours":
    // 16.27.19 <number:hours>
    case "minutes":
    // 16.27.20 <number:minutes>
    case "seconds":
    // 16.27.21 <number:seconds>
    case "am-pm":
      switch (t[t.length - 1][0]) {
        case "time-style":
        case "date-style":
          s = ge(x[0], !1), o += On[x[3]][s.style === "long" ? 1 : 0];
          break;
      }
      break;
    case "boolean-style":
      break;
    // 16.27.23 <number:boolean-style>
    case "boolean":
      break;
    // 16.27.24 <number:boolean>
    case "text-style":
      break;
    // 16.27.25 <number:text-style>
    case "text":
      if (x[0].slice(-2) === "/>") break;
      if (x[1] === "/") switch (t[t.length - 1][0]) {
        case "number-style":
        case "date-style":
        case "time-style":
          o += n.slice(f, x.index);
          break;
      }
      else f = x.index + x[0].length;
      break;
    case "named-range":
      s = ge(x[0], !1), he = Ut(s["cell-range-address"]);
      var j = { Name: s.name, Ref: he[0] + "!" + he[1] };
      K && (j.Sheet = d.length), ve.Names.push(j);
      break;
    case "text-content":
      break;
    // 16.27.27 <number:text-content>
    case "text-properties":
      break;
    // 16.27.27 <style:text-properties>
    case "embedded-text":
      break;
    // 16.27.4 <number:embedded-text>
    case "body":
    case "电子表格":
      break;
    // 3.3 16.9.6 19.726.3
    case "forms":
      break;
    // 12.25.2 13.2
    case "table-column":
      break;
    // 9.1.6 <table:table-column>
    case "table-header-rows":
      break;
    // 9.1.7 <table:table-header-rows>
    case "table-rows":
      break;
    // 9.1.12 <table:table-rows>
    /* TODO: outline levels */
    case "table-column-group":
      break;
    // 9.1.10 <table:table-column-group>
    case "table-header-columns":
      break;
    // 9.1.11 <table:table-header-columns>
    case "table-columns":
      break;
    // 9.1.12 <table:table-columns>
    case "null-date":
      break;
    // 9.4.2 <table:null-date> TODO: date1904
    case "graphic-properties":
      break;
    // 17.21 <style:graphic-properties>
    case "calculation-settings":
      break;
    // 9.4.1 <table:calculation-settings>
    case "named-expressions":
      break;
    // 9.4.11 <table:named-expressions>
    case "label-range":
      break;
    // 9.4.9 <table:label-range>
    case "label-ranges":
      break;
    // 9.4.10 <table:label-ranges>
    case "named-expression":
      break;
    // 9.4.13 <table:named-expression>
    case "sort":
      break;
    // 9.4.19 <table:sort>
    case "sort-by":
      break;
    // 9.4.20 <table:sort-by>
    case "sort-groups":
      break;
    // 9.4.22 <table:sort-groups>
    case "tab":
      break;
    // 6.1.4 <text:tab>
    case "line-break":
      break;
    // 6.1.5 <text:line-break>
    case "span":
      break;
    // 6.1.7 <text:span>
    case "p":
    case "文本串":
      if (["master-styles"].indexOf(t[t.length - 1][0]) > -1) break;
      if (x[1] === "/" && (!O || !O["string-value"])) {
        var se = ad(n.slice(T, x.index));
        I = (I.length > 0 ? I + `
` : "") + se[0];
      } else
        ge(x[0], !1), T = x.index + x[0].length;
      break;
    // <text:p>
    case "s":
      break;
    // <text:s>
    case "database-range":
      if (x[1] === "/") break;
      try {
        he = Ut(ge(x[0])["target-range-address"]), h[he[0]]["!autofilter"] = { ref: he[1] };
      } catch {
      }
      break;
    case "date":
      break;
    // <*:date>
    case "object":
      break;
    // 10.4.6.2 <draw:object>
    case "title":
    case "标题":
      break;
    // <*:title> OR <uof:标题>
    case "desc":
      break;
    // <*:desc>
    case "binary-data":
      break;
    // 10.4.5 TODO: b64 blob
    /* 9.2 Advanced Tables */
    case "table-source":
      break;
    // 9.2.6
    case "scenario":
      break;
    // 9.2.6
    case "iteration":
      break;
    // 9.4.3 <table:iteration>
    case "content-validations":
      break;
    // 9.4.4 <table:
    case "content-validation":
      break;
    // 9.4.5 <table:
    case "help-message":
      break;
    // 9.4.6 <table:
    case "error-message":
      break;
    // 9.4.7 <table:
    case "database-ranges":
      break;
    // 9.4.14 <table:database-ranges>
    case "filter":
      break;
    // 9.5.2 <table:filter>
    case "filter-and":
      break;
    // 9.5.3 <table:filter-and>
    case "filter-or":
      break;
    // 9.5.4 <table:filter-or>
    case "filter-condition":
      break;
    // 9.5.5 <table:filter-condition>
    case "list-level-style-bullet":
      break;
    // 16.31 <text:
    case "list-level-style-number":
      break;
    // 16.32 <text:
    case "list-level-properties":
      break;
    // 17.19 <style:
    /* 7.3 Document Fields */
    case "sender-firstname":
    // 7.3.6.2
    case "sender-lastname":
    // 7.3.6.3
    case "sender-initials":
    // 7.3.6.4
    case "sender-title":
    // 7.3.6.5
    case "sender-position":
    // 7.3.6.6
    case "sender-email":
    // 7.3.6.7
    case "sender-phone-private":
    // 7.3.6.8
    case "sender-fax":
    // 7.3.6.9
    case "sender-company":
    // 7.3.6.10
    case "sender-phone-work":
    // 7.3.6.11
    case "sender-street":
    // 7.3.6.12
    case "sender-city":
    // 7.3.6.13
    case "sender-postal-code":
    // 7.3.6.14
    case "sender-country":
    // 7.3.6.15
    case "sender-state-or-province":
    // 7.3.6.16
    case "author-name":
    // 7.3.7.1
    case "author-initials":
    // 7.3.7.2
    case "chapter":
    // 7.3.8
    case "file-name":
    // 7.3.9
    case "template-name":
    // 7.3.9
    case "sheet-name":
      break;
    case "event-listener":
      break;
    /* TODO: FODS Properties */
    case "initial-creator":
    case "creation-date":
    case "print-date":
    case "generator":
    case "document-statistic":
    case "user-defined":
    case "editing-duration":
    case "editing-cycles":
      break;
    /* TODO: FODS Config */
    case "config-item":
      break;
    /* TODO: style tokens */
    case "page-number":
      break;
    // TODO <text:page-number>
    case "page-count":
      break;
    // TODO <text:page-count>
    case "time":
      break;
    // TODO <text:time>
    /* 9.3 Advanced Table Cells */
    case "cell-range-source":
      break;
    // 9.3.1 <table:
    case "detective":
      break;
    // 9.3.2 <table:
    case "operation":
      break;
    // 9.3.3 <table:
    case "highlighted-range":
      break;
    // 9.3.4 <table:
    /* 9.6 Data Pilot Tables <table: */
    case "data-pilot-table":
    // 9.6.3
    case "source-cell-range":
    // 9.6.5
    case "source-service":
    // 9.6.6
    case "data-pilot-field":
    // 9.6.7
    case "data-pilot-level":
    // 9.6.8
    case "data-pilot-subtotals":
    // 9.6.9
    case "data-pilot-subtotal":
    // 9.6.10
    case "data-pilot-members":
    // 9.6.11
    case "data-pilot-member":
    // 9.6.12
    case "data-pilot-display-info":
    // 9.6.13
    case "data-pilot-sort-info":
    // 9.6.14
    case "data-pilot-layout-info":
    // 9.6.15
    case "data-pilot-field-reference":
    // 9.6.16
    case "data-pilot-groups":
    // 9.6.17
    case "data-pilot-group":
    // 9.6.18
    case "data-pilot-group-member":
      break;
    /* 10.3 Drawing Shapes */
    case "rect":
      break;
    /* 14.6 DDE Connections */
    case "dde-connection-decls":
    // 14.6.2 <text:
    case "dde-connection-decl":
    // 14.6.3 <text:
    case "dde-link":
    // 14.6.4 <table:
    case "dde-source":
      break;
    case "properties":
      break;
    // 13.7 <form:properties>
    case "property":
      break;
    // 13.8 <form:property>
    case "a":
      if (x[1] !== "/") {
        if (M = ge(x[0], !1), !M.href) break;
        M.Target = Ce(M.href), delete M.href, M.Target.charAt(0) == "#" && M.Target.indexOf(".") > -1 ? (he = Ut(M.Target.slice(1)), M.Target = "#" + he[0] + "!" + he[1]) : M.Target.match(/^\.\.[\\\/]/) && (M.Target = M.Target.slice(3));
      }
      break;
    /* non-standard */
    case "table-protection":
      break;
    case "data-pilot-grand-total":
      break;
    // <table:
    case "office-document-common-attrs":
      break;
    // bare
    default:
      switch (x[2]) {
        case "dc:":
        // TODO: properties
        case "calcext:":
        // ignore undocumented extensions
        case "loext:":
        // ignore undocumented extensions
        case "ooo:":
        // ignore undocumented extensions
        case "chartooo:":
        // ignore undocumented extensions
        case "draw:":
        // TODO: drawing
        case "style:":
        // TODO: styles
        case "chart:":
        // TODO: charts
        case "form:":
        // TODO: forms
        case "uof:":
        // TODO: uof
        case "表:":
        // TODO: uof
        case "字:":
          break;
        default:
          if (r.WTF) throw new Error(x);
      }
  }
  var C = {
    Sheets: h,
    SheetNames: d,
    Workbook: ve
  };
  return r.bookSheets && delete /*::(*/
  C.Sheets, C;
}
function Dn(e, a) {
  a = a || {}, Ar(e, "META-INF/manifest.xml") && gf(Xe(e, "META-INF/manifest.xml"), a);
  var r = Er(e, "content.xml");
  if (!r) throw new Error("Missing content.xml in ODS / UOF file");
  var n = hs(Re(r), a);
  return Ar(e, "meta.xml") && (n.Props = Fi(Xe(e, "meta.xml"))), n;
}
function Rn(e, a) {
  return hs(e, a);
}
function T0(e) {
  return new DataView(e.buffer, e.byteOffset, e.byteLength);
}
function Jt(e) {
  return typeof TextDecoder < "u" ? new TextDecoder().decode(e) : Re(oa(e));
}
function qt(e) {
  var a = e.reduce(function(t, i) {
    return t + i.length;
  }, 0), r = new Uint8Array(a), n = 0;
  return e.forEach(function(t) {
    r.set(t, n), n += t.length;
  }), r;
}
function In(e) {
  return e -= e >> 1 & 1431655765, e = (e & 858993459) + (e >> 2 & 858993459), (e + (e >> 4) & 252645135) * 16843009 >>> 24;
}
function td(e, a) {
  for (var r = (e[a + 15] & 127) << 7 | e[a + 14] >> 1, n = e[a + 14] & 1, t = a + 13; t >= a; --t)
    n = n * 256 + e[t];
  return (e[a + 15] & 128 ? -n : n) * Math.pow(10, r - 6176);
}
function qa(e, a) {
  var r = a ? a[0] : 0, n = e[r] & 127;
  e:
    if (e[r++] >= 128 && (n |= (e[r] & 127) << 7, e[r++] < 128 || (n |= (e[r] & 127) << 14, e[r++] < 128) || (n |= (e[r] & 127) << 21, e[r++] < 128) || (n += (e[r] & 127) * Math.pow(2, 28), ++r, e[r++] < 128) || (n += (e[r] & 127) * Math.pow(2, 35), ++r, e[r++] < 128) || (n += (e[r] & 127) * Math.pow(2, 42), ++r, e[r++] < 128)))
      break e;
  return a && (a[0] = r), n;
}
function je(e) {
  var a = 0, r = e[a] & 127;
  e:
    if (e[a++] >= 128) {
      if (r |= (e[a] & 127) << 7, e[a++] < 128 || (r |= (e[a] & 127) << 14, e[a++] < 128) || (r |= (e[a] & 127) << 21, e[a++] < 128))
        break e;
      r |= (e[a] & 127) << 28;
    }
  return r;
}
function cr(e) {
  for (var a = [], r = [0]; r[0] < e.length; ) {
    var n = r[0], t = qa(e, r), i = t & 7;
    t = Math.floor(t / 8);
    var s = 0, c;
    if (t == 0)
      break;
    switch (i) {
      case 0:
        {
          for (var o = r[0]; e[r[0]++] >= 128; )
            ;
          c = e.slice(o, r[0]);
        }
        break;
      case 5:
        s = 4, c = e.slice(r[0], r[0] + s), r[0] += s;
        break;
      case 1:
        s = 8, c = e.slice(r[0], r[0] + s), r[0] += s;
        break;
      case 2:
        s = qa(e, r), c = e.slice(r[0], r[0] + s), r[0] += s;
        break;
      default:
        throw new Error("PB Type ".concat(i, " for Field ").concat(t, " at offset ").concat(n));
    }
    var f = { data: c, type: i };
    a[t] == null ? a[t] = [f] : a[t].push(f);
  }
  return a;
}
function k0(e, a) {
  return e?.map(function(r) {
    return a(r.data);
  }) || [];
}
function nd(e) {
  for (var a, r = [], n = [0]; n[0] < e.length; ) {
    var t = qa(e, n), i = cr(e.slice(n[0], n[0] + t));
    n[0] += t;
    var s = {
      id: je(i[1][0].data),
      messages: []
    };
    i[2].forEach(function(c) {
      var o = cr(c.data), f = je(o[3][0].data);
      s.messages.push({
        meta: o,
        data: e.slice(n[0], n[0] + f)
      }), n[0] += f;
    }), (a = i[3]) != null && a[0] && (s.merge = je(i[3][0].data) >>> 0 > 0), r.push(s);
  }
  return r;
}
function id(e, a) {
  if (e != 0)
    throw new Error("Unexpected Snappy chunk type ".concat(e));
  for (var r = [0], n = qa(a, r), t = []; r[0] < a.length; ) {
    var i = a[r[0]] & 3;
    if (i == 0) {
      var s = a[r[0]++] >> 2;
      if (s < 60)
        ++s;
      else {
        var c = s - 59;
        s = a[r[0]], c > 1 && (s |= a[r[0] + 1] << 8), c > 2 && (s |= a[r[0] + 2] << 16), c > 3 && (s |= a[r[0] + 3] << 24), s >>>= 0, s++, r[0] += c;
      }
      t.push(a.slice(r[0], r[0] + s)), r[0] += s;
      continue;
    } else {
      var o = 0, f = 0;
      if (i == 1 ? (f = (a[r[0]] >> 2 & 7) + 4, o = (a[r[0]++] & 224) << 3, o |= a[r[0]++]) : (f = (a[r[0]++] >> 2) + 1, i == 2 ? (o = a[r[0]] | a[r[0] + 1] << 8, r[0] += 2) : (o = (a[r[0]] | a[r[0] + 1] << 8 | a[r[0] + 2] << 16 | a[r[0] + 3] << 24) >>> 0, r[0] += 4)), t = [qt(t)], o == 0)
        throw new Error("Invalid offset 0");
      if (o > t[0].length)
        throw new Error("Invalid offset beyond length");
      if (f >= o)
        for (t.push(t[0].slice(-o)), f -= o; f >= t[t.length - 1].length; )
          t.push(t[t.length - 1]), f -= t[t.length - 1].length;
      t.push(t[0].slice(-o, -o + f));
    }
  }
  var l = qt(t);
  if (l.length != n)
    throw new Error("Unexpected length: ".concat(l.length, " != ").concat(n));
  return l;
}
function sd(e) {
  for (var a = [], r = 0; r < e.length; ) {
    var n = e[r++], t = e[r] | e[r + 1] << 8 | e[r + 2] << 16;
    r += 3, a.push(id(n, e.slice(r, r + t))), r += t;
  }
  if (r !== e.length)
    throw new Error("data is not a valid framed stream!");
  return qt(a);
}
function cd(e, a, r, n) {
  var t = T0(e), i = t.getUint32(4, !0), s = (n > 1 ? 12 : 8) + In(i & (n > 1 ? 3470 : 398)) * 4, c = -1, o = -1, f = NaN, l = new Date(2001, 0, 1);
  i & 512 && (c = t.getUint32(s, !0), s += 4), s += In(i & (n > 1 ? 12288 : 4096)) * 4, i & 16 && (o = t.getUint32(s, !0), s += 4), i & 32 && (f = t.getFloat64(s, !0), s += 8), i & 64 && (l.setTime(l.getTime() + t.getFloat64(s, !0) * 1e3), s += 8);
  var u;
  switch (e[2]) {
    case 0:
      break;
    case 2:
      u = { t: "n", v: f };
      break;
    case 3:
      u = { t: "s", v: a[o] };
      break;
    case 5:
      u = { t: "d", v: l };
      break;
    case 6:
      u = { t: "b", v: f > 0 };
      break;
    case 7:
      u = { t: "n", v: f / 86400 };
      break;
    case 8:
      u = { t: "e", v: 0 };
      break;
    case 9:
      if (c > -1)
        u = { t: "s", v: r[c] };
      else if (o > -1)
        u = { t: "s", v: a[o] };
      else if (!isNaN(f))
        u = { t: "n", v: f };
      else
        throw new Error("Unsupported cell type ".concat(e.slice(0, 4)));
      break;
    default:
      throw new Error("Unsupported cell type ".concat(e.slice(0, 4)));
  }
  return u;
}
function fd(e, a, r) {
  var n = T0(e), t = n.getUint32(8, !0), i = 12, s = -1, c = -1, o = NaN, f = NaN, l = new Date(2001, 0, 1);
  t & 1 && (o = td(e, i), i += 16), t & 2 && (f = n.getFloat64(i, !0), i += 8), t & 4 && (l.setTime(l.getTime() + n.getFloat64(i, !0) * 1e3), i += 8), t & 8 && (c = n.getUint32(i, !0), i += 4), t & 16 && (s = n.getUint32(i, !0), i += 4);
  var u;
  switch (e[1]) {
    case 0:
      break;
    case 2:
      u = { t: "n", v: o };
      break;
    case 3:
      u = { t: "s", v: a[c] };
      break;
    case 5:
      u = { t: "d", v: l };
      break;
    case 6:
      u = { t: "b", v: f > 0 };
      break;
    case 7:
      u = { t: "n", v: f / 86400 };
      break;
    case 8:
      u = { t: "e", v: 0 };
      break;
    case 9:
      if (s > -1)
        u = { t: "s", v: r[s] };
      else
        throw new Error("Unsupported cell type ".concat(e[1], " : ").concat(t & 31, " : ").concat(e.slice(0, 4)));
      break;
    case 10:
      u = { t: "n", v: o };
      break;
    default:
      throw new Error("Unsupported cell type ".concat(e[1], " : ").concat(t & 31, " : ").concat(e.slice(0, 4)));
  }
  return u;
}
function od(e, a, r) {
  switch (e[0]) {
    case 0:
    case 1:
    case 2:
    case 3:
      return cd(e, a, r, e[0]);
    case 5:
      return fd(e, a, r);
    default:
      throw new Error("Unsupported payload version ".concat(e[0]));
  }
}
function Jr(e) {
  var a = cr(e);
  return qa(a[1][0].data);
}
function Nn(e, a) {
  var r = cr(a.data), n = je(r[1][0].data), t = r[3], i = [];
  return (t || []).forEach(function(s) {
    var c = cr(s.data), o = je(c[1][0].data) >>> 0;
    switch (n) {
      case 1:
        i[o] = Jt(c[3][0].data);
        break;
      case 8:
        {
          var f = e[Jr(c[9][0].data)][0], l = cr(f.data), u = e[Jr(l[1][0].data)][0], h = je(u.meta[1][0].data);
          if (h != 2001)
            throw new Error("2000 unexpected reference to ".concat(h));
          var d = cr(u.data);
          i[o] = d[3].map(function(p) {
            return Jt(p.data);
          }).join("");
        }
        break;
    }
  }), i;
}
function ld(e, a) {
  var r, n, t, i, s, c, o, f, l, u, h, d, p, x, g = cr(e), O = je(g[1][0].data) >>> 0, I = je(g[2][0].data) >>> 0, T = ((n = (r = g[8]) == null ? void 0 : r[0]) == null ? void 0 : n.data) && je(g[8][0].data) > 0 || !1, U, V;
  if ((i = (t = g[7]) == null ? void 0 : t[0]) != null && i.data && a != 0)
    U = (c = (s = g[7]) == null ? void 0 : s[0]) == null ? void 0 : c.data, V = (f = (o = g[6]) == null ? void 0 : o[0]) == null ? void 0 : f.data;
  else if ((u = (l = g[4]) == null ? void 0 : l[0]) != null && u.data && a != 1)
    U = (d = (h = g[4]) == null ? void 0 : h[0]) == null ? void 0 : d.data, V = (x = (p = g[3]) == null ? void 0 : p[0]) == null ? void 0 : x.data;
  else
    throw "NUMBERS Tile missing ".concat(a, " cell storage");
  for (var B = T ? 4 : 1, A = T0(U), _ = [], m = 0; m < U.length / 2; ++m) {
    var R = A.getUint16(m * 2, !0);
    R < 65535 && _.push([m, R]);
  }
  if (_.length != I)
    throw "Expected ".concat(I, " cells, found ").concat(_.length);
  var L = [];
  for (m = 0; m < _.length - 1; ++m)
    L[_[m][0]] = V.subarray(_[m][1] * B, _[m + 1][1] * B);
  return _.length >= 1 && (L[_[_.length - 1][0]] = V.subarray(_[_.length - 1][1] * B)), { R: O, cells: L };
}
function ud(e, a) {
  var r, n = cr(a.data), t = (r = n?.[7]) != null && r[0] ? je(n[7][0].data) >>> 0 > 0 ? 1 : 0 : -1, i = k0(n[5], function(s) {
    return ld(s, t);
  });
  return {
    nrows: je(n[4][0].data) >>> 0,
    data: i.reduce(function(s, c) {
      return s[c.R] || (s[c.R] = []), c.cells.forEach(function(o, f) {
        if (s[c.R][f])
          throw new Error("Duplicate cell r=".concat(c.R, " c=").concat(f));
        s[c.R][f] = o;
      }), s;
    }, [])
  };
}
function hd(e, a, r) {
  var n, t = cr(a.data), i = { s: { r: 0, c: 0 }, e: { r: 0, c: 0 } };
  if (i.e.r = (je(t[6][0].data) >>> 0) - 1, i.e.r < 0)
    throw new Error("Invalid row varint ".concat(t[6][0].data));
  if (i.e.c = (je(t[7][0].data) >>> 0) - 1, i.e.c < 0)
    throw new Error("Invalid col varint ".concat(t[7][0].data));
  r["!ref"] = Se(i);
  var s = cr(t[4][0].data), c = Nn(e, e[Jr(s[4][0].data)][0]), o = (n = s[17]) != null && n[0] ? Nn(e, e[Jr(s[17][0].data)][0]) : [], f = cr(s[3][0].data), l = 0;
  f[1].forEach(function(u) {
    var h = cr(u.data), d = e[Jr(h[2][0].data)][0], p = je(d.meta[1][0].data);
    if (p != 6002)
      throw new Error("6001 unexpected reference to ".concat(p));
    var x = ud(e, d);
    x.data.forEach(function(g, O) {
      g.forEach(function(I, T) {
        var U = me({ r: l + O, c: T }), V = od(I, c, o);
        V && (r[U] = V);
      });
    }), l += x.nrows;
  });
}
function xd(e, a) {
  var r = cr(a.data), n = { "!ref": "A1" }, t = e[Jr(r[2][0].data)], i = je(t[0].meta[1][0].data);
  if (i != 6001)
    throw new Error("6000 unexpected reference to ".concat(i));
  return hd(e, t[0], n), n;
}
function dd(e, a) {
  var r, n = cr(a.data), t = {
    name: (r = n[1]) != null && r[0] ? Jt(n[1][0].data) : "",
    sheets: []
  }, i = k0(n[2], Jr);
  return i.forEach(function(s) {
    e[s].forEach(function(c) {
      var o = je(c.meta[1][0].data);
      o == 6e3 && t.sheets.push(xd(e, c));
    });
  }), t;
}
function pd(e, a) {
  var r = F0(), n = cr(a.data), t = k0(n[1], Jr);
  if (t.forEach(function(i) {
    e[i].forEach(function(s) {
      var c = je(s.meta[1][0].data);
      if (c == 2) {
        var o = dd(e, s);
        o.sheets.forEach(function(f, l) {
          S0(r, f, l == 0 ? o.name : o.name + "_" + l, !0);
        });
      }
    });
  }), r.SheetNames.length == 0)
    throw new Error("Empty NUMBERS file");
  return r;
}
function Wt(e) {
  var a, r, n, t, i = {}, s = [];
  if (e.FullPaths.forEach(function(o) {
    if (o.match(/\.iwpv2/))
      throw new Error("Unsupported password protection");
  }), e.FileIndex.forEach(function(o) {
    if (o.name.match(/\.iwa$/)) {
      var f;
      try {
        f = sd(o.content);
      } catch (u) {
        return console.log("?? " + o.content.length + " " + (u.message || u));
      }
      var l;
      try {
        l = nd(f);
      } catch (u) {
        return console.log("## " + (u.message || u));
      }
      l.forEach(function(u) {
        i[u.id] = u.messages, s.push(u.id);
      });
    }
  }), !s.length)
    throw new Error("File has no messages");
  var c = ((t = (n = (r = (a = i?.[1]) == null ? void 0 : a[0]) == null ? void 0 : r.meta) == null ? void 0 : n[1]) == null ? void 0 : t[0].data) && je(i[1][0].meta[1][0].data) == 1 && i[1][0];
  if (c || s.forEach(function(o) {
    i[o].forEach(function(f) {
      var l = je(f.meta[1][0].data) >>> 0;
      if (l == 1)
        if (!c)
          c = f;
        else
          throw new Error("Document has multiple roots");
    });
  }), !c)
    throw new Error("Cannot find Document root");
  return pd(i, c);
}
function vd(e) {
  return function(r) {
    for (var n = 0; n != e.length; ++n) {
      var t = e[n];
      r[t[0]] === void 0 && (r[t[0]] = t[1]), t[2] === "n" && (r[t[0]] = Number(r[t[0]]));
    }
  };
}
function w0(e) {
  vd([
    ["cellNF", !1],
    /* emit cell number format string as .z */
    ["cellHTML", !0],
    /* emit html string as .h */
    ["cellFormula", !0],
    /* emit formulae as .f */
    ["cellStyles", !1],
    /* emits style/theme as .s */
    ["cellText", !0],
    /* emit formatted text as .w */
    ["cellDates", !1],
    /* emit date cells with type `d` */
    ["sheetStubs", !1],
    /* emit empty cells */
    ["sheetRows", 0, "n"],
    /* read n rows (0 = read all rows) */
    ["bookDeps", !1],
    /* parse calculation chains */
    ["bookSheets", !1],
    /* only try to get sheet names (no Sheets) */
    ["bookProps", !1],
    /* only try to get properties (no Sheets) */
    ["bookFiles", !1],
    /* include raw file structure (keys, files, cfb) */
    ["bookVBA", !1],
    /* include vba raw data (vbaraw) */
    ["password", ""],
    /* password */
    ["WTF", !1]
    /* WTF mode (throws errors) */
  ])(e);
}
function gd(e) {
  return ma.WS.indexOf(e) > -1 ? "sheet" : e == ma.CS ? "chart" : e == ma.DS ? "dialog" : e == ma.MS ? "macro" : e && e.length ? e : "sheet";
}
function md(e, a) {
  if (!e) return 0;
  try {
    e = a.map(function(n) {
      return n.id || (n.id = n.strRelID), [n.name, e["!id"][n.id].Target, gd(e["!id"][n.id].Type)];
    });
  } catch {
    return null;
  }
  return !e || e.length === 0 ? null : e;
}
function _d(e, a, r, n, t, i, s, c, o, f, l, u) {
  try {
    i[n] = Ba(Er(e, r, !0), a);
    var h = Xe(e, a), d;
    switch (c) {
      case "sheet":
        d = Fx(h, a, t, o, i[n], f, l, u);
        break;
      case "chart":
        if (d = Sx(h, a, t, o, i[n], f, l, u), !d || !d["!drawel"]) break;
        var p = Na(d["!drawel"].Target, a), x = zt(p), g = Au(Er(e, p, !0), Ba(Er(e, x, !0), p)), O = Na(g, p), I = zt(O);
        d = fx(Er(e, O, !0), O, o, Ba(Er(e, I, !0), O), f, d);
        break;
      case "macro":
        d = Cx(h, a, t, o, i[n], f, l, u);
        break;
      case "dialog":
        d = yx(h, a, t, o, i[n], f, l, u);
        break;
      default:
        throw new Error("Unrecognized sheet type " + c);
    }
    s[n] = d;
    var T = [];
    i && i[n] && br(i[n]).forEach(function(U) {
      var V = "";
      if (i[n][U].Type == ma.CMNT) {
        V = Na(i[n][U].Target, a);
        var B = Ix(Xe(e, V, !0), V, o);
        if (!B || !B.length) return;
        mn(d, B, !1);
      }
      i[n][U].Type == ma.TCMNT && (V = Na(i[n][U].Target, a), T = T.concat(Su(Xe(e, V, !0), o)));
    }), T && T.length && mn(d, T, !0, o.people || []);
  } catch (U) {
    if (o.WTF) throw U;
  }
}
function kr(e) {
  return e.charAt(0) == "/" ? e.slice(1) : e;
}
function Ed(e, a) {
  if (Jn(), a = a || {}, w0(a), Ar(e, "META-INF/manifest.xml") || Ar(e, "objectdata.xml")) return Dn(e, a);
  if (Ar(e, "Index/Document.iwa")) {
    if (typeof Uint8Array > "u") throw new Error("NUMBERS file parsing requires Uint8Array support");
    if (typeof Wt < "u") {
      if (e.FileIndex) return Wt(e);
      var r = Fe.utils.cfb_new();
      return X0(e).forEach(function(ie) {
        _c(r, ie, mc(e, ie));
      }), Wt(r);
    }
    throw new Error("Unsupported NUMBERS file");
  }
  if (!Ar(e, "[Content_Types].xml"))
    throw Ar(e, "index.xml.gz") ? new Error("Unsupported NUMBERS 08 file") : Ar(e, "index.xml") ? new Error("Unsupported NUMBERS 09 file") : new Error("Unsupported ZIP file");
  var n = X0(e), t = pf(Er(e, "[Content_Types].xml")), i = !1, s, c;
  if (t.workbooks.length === 0 && (c = "xl/workbook.xml", Xe(e, c, !0) && t.workbooks.push(c)), t.workbooks.length === 0) {
    if (c = "xl/workbook.bin", !Xe(e, c, !0)) throw new Error("Could not find workbook");
    t.workbooks.push(c), i = !0;
  }
  t.workbooks[0].slice(-3) == "bin" && (i = !0);
  var o = {}, f = {};
  if (!a.bookSheets && !a.bookProps) {
    if (Wa = [], t.sst) try {
      Wa = Rx(Xe(e, kr(t.sst)), t.sst, a);
    } catch (ie) {
      if (a.WTF) throw ie;
    }
    a.cellStyles && t.themes.length && (o = Dx(Er(e, t.themes[0].replace(/^\//, ""), !0) || "", t.themes[0], a)), t.style && (f = Ox(Xe(e, kr(t.style)), t.style, o, a));
  }
  t.links.map(function(ie) {
    try {
      var re = Ba(Er(e, zt(kr(ie))), ie);
      return Px(Xe(e, kr(ie)), re, ie, a);
    } catch {
    }
  });
  var l = Ax(Xe(e, kr(t.workbooks[0])), t.workbooks[0], a), u = {}, h = "";
  t.coreprops.length && (h = Xe(e, kr(t.coreprops[0]), !0), h && (u = Fi(h)), t.extprops.length !== 0 && (h = Xe(e, kr(t.extprops[0]), !0), h && Ef(h, u, a)));
  var d = {};
  (!a.bookSheets || a.bookProps) && t.custprops.length !== 0 && (h = Er(e, kr(t.custprops[0]), !0), h && (d = kf(h, a)));
  var p = {};
  if ((a.bookSheets || a.bookProps) && (l.Sheets ? s = l.Sheets.map(function(re) {
    return re.name;
  }) : u.Worksheets && u.SheetNames.length > 0 && (s = u.SheetNames), a.bookProps && (p.Props = u, p.Custprops = d), a.bookSheets && typeof s < "u" && (p.SheetNames = s), a.bookSheets ? p.SheetNames : a.bookProps))
    return p;
  s = {};
  var x = {};
  a.bookDeps && t.calcchain && (x = Nx(Xe(e, kr(t.calcchain)), t.calcchain));
  var g = 0, O = {}, I, T;
  {
    var U = l.Sheets;
    u.Worksheets = U.length, u.SheetNames = [];
    for (var V = 0; V != U.length; ++V)
      u.SheetNames[V] = U[V].name;
  }
  var B = i ? "bin" : "xml", A = t.workbooks[0].lastIndexOf("/"), _ = (t.workbooks[0].slice(0, A + 1) + "_rels/" + t.workbooks[0].slice(A + 1) + ".rels").replace(/^\//, "");
  Ar(e, _) || (_ = "xl/_rels/workbook." + B + ".rels");
  var m = Ba(Er(e, _, !0), _.replace(/_rels.*/, "s5s"));
  (t.metadata || []).length >= 1 && (a.xlmeta = Lx(Xe(e, kr(t.metadata[0])), t.metadata[0], a)), (t.people || []).length >= 1 && (a.people = Cu(Xe(e, kr(t.people[0])), a)), m && (m = md(m, l.Sheets));
  var R = Xe(e, "xl/worksheets/sheet.xml", !0) ? 1 : 0;
  e: for (g = 0; g != u.Worksheets; ++g) {
    var L = "sheet";
    if (m && m[g] ? (I = "xl/" + m[g][1].replace(/[\/]?xl\//, ""), Ar(e, I) || (I = m[g][1]), Ar(e, I) || (I = _.replace(/_rels\/.*$/, "") + m[g][1]), L = m[g][2]) : (I = "xl/worksheets/sheet" + (g + 1 - R) + "." + B, I = I.replace(/sheet0\./, "sheet.")), T = I.replace(/^(.*)(\/)([^\/]*)$/, "$1/_rels/$3.rels"), a && a.sheets != null) switch (typeof a.sheets) {
      case "number":
        if (g != a.sheets) continue e;
        break;
      case "string":
        if (u.SheetNames[g].toLowerCase() != a.sheets.toLowerCase()) continue e;
        break;
      default:
        if (Array.isArray && Array.isArray(a.sheets)) {
          for (var D = !1, z = 0; z != a.sheets.length; ++z)
            typeof a.sheets[z] == "number" && a.sheets[z] == g && (D = 1), typeof a.sheets[z] == "string" && a.sheets[z].toLowerCase() == u.SheetNames[g].toLowerCase() && (D = 1);
          if (!D) continue e;
        }
    }
    _d(e, I, T, u.SheetNames[g], g, O, s, L, a, l, o, f);
  }
  return p = {
    Directory: t,
    Workbook: l,
    Props: u,
    Custprops: d,
    Deps: x,
    Sheets: s,
    SheetNames: u.SheetNames,
    Strings: Wa,
    Styles: f,
    Themes: o,
    SSF: Qe(Ee)
  }, a && a.bookFiles && (e.files ? (p.keys = n, p.files = e.files) : (p.keys = [], p.files = {}, e.FullPaths.forEach(function(ie, re) {
    ie = ie.replace(/^Root Entry[\/]/, ""), p.keys.push(ie), p.files[ie] = e.FileIndex[re];
  }))), a && a.bookVBA && (t.vba.length > 0 ? p.vbaraw = Xe(e, kr(t.vba[0]), !0) : t.defaults && t.defaults.bin === Ru && (p.vbaraw = Xe(e, "xl/vbaProject.bin", !0))), p;
}
function Td(e, a) {
  var r = a || {}, n = "Workbook", t = Fe.find(e, n);
  try {
    if (n = "/!DataSpaces/Version", t = Fe.find(e, n), !t || !t.content) throw new Error("ECMA-376 Encrypted file missing " + n);
    if (xl(t.content), n = "/!DataSpaces/DataSpaceMap", t = Fe.find(e, n), !t || !t.content) throw new Error("ECMA-376 Encrypted file missing " + n);
    var i = pl(t.content);
    if (i.length !== 1 || i[0].comps.length !== 1 || i[0].comps[0].t !== 0 || i[0].name !== "StrongEncryptionDataSpace" || i[0].comps[0].v !== "EncryptedPackage")
      throw new Error("ECMA-376 Encrypted file bad " + n);
    if (n = "/!DataSpaces/DataSpaceInfo/StrongEncryptionDataSpace", t = Fe.find(e, n), !t || !t.content) throw new Error("ECMA-376 Encrypted file missing " + n);
    var s = vl(t.content);
    if (s.length != 1 || s[0] != "StrongEncryptionTransform")
      throw new Error("ECMA-376 Encrypted file bad " + n);
    if (n = "/!DataSpaces/TransformInfo/StrongEncryptionTransform/!Primary", t = Fe.find(e, n), !t || !t.content) throw new Error("ECMA-376 Encrypted file missing " + n);
    ml(t.content);
  } catch {
  }
  if (n = "/EncryptionInfo", t = Fe.find(e, n), !t || !t.content) throw new Error("ECMA-376 Encrypted file missing " + n);
  var c = _l(t.content);
  if (n = "/EncryptedPackage", t = Fe.find(e, n), !t || !t.content) throw new Error("ECMA-376 Encrypted file missing " + n);
  if (c[0] == 4 && typeof decrypt_agile < "u") return decrypt_agile(c[1], t.content, r.password || "", r);
  if (c[0] == 2 && typeof decrypt_std76 < "u") return decrypt_std76(c[1], t.content, r.password || "", r);
  throw new Error("File is password-protected");
}
function A0(e, a) {
  var r = "";
  switch ((a || {}).type || "base64") {
    case "buffer":
      return [e[0], e[1], e[2], e[3], e[4], e[5], e[6], e[7]];
    case "base64":
      r = Tr(e.slice(0, 12));
      break;
    case "binary":
      r = e;
      break;
    case "array":
      return [e[0], e[1], e[2], e[3], e[4], e[5], e[6], e[7]];
    default:
      throw new Error("Unrecognized type " + (a && a.type || "undefined"));
  }
  return [r.charCodeAt(0), r.charCodeAt(1), r.charCodeAt(2), r.charCodeAt(3), r.charCodeAt(4), r.charCodeAt(5), r.charCodeAt(6), r.charCodeAt(7)];
}
function kd(e, a) {
  return Fe.find(e, "EncryptedPackage") ? Td(e, a) : os(e, a);
}
function wd(e, a) {
  var r, n = e, t = a || {};
  return t.type || (t.type = Ae && Buffer.isBuffer(e) ? "buffer" : "base64"), r = ai(n, t), Ed(r, t);
}
function xs(e, a) {
  var r = 0;
  e: for (; r < e.length; ) switch (e.charCodeAt(r)) {
    case 10:
    case 13:
    case 32:
      ++r;
      break;
    case 60:
      return Yt(e.slice(r), a);
    default:
      break e;
  }
  return Ya.to_workbook(e, a);
}
function Ad(e, a) {
  var r = "", n = A0(e, a);
  switch (a.type) {
    case "base64":
      r = Tr(e);
      break;
    case "binary":
      r = e;
      break;
    case "buffer":
      r = e.toString("binary");
      break;
    case "array":
      r = sa(e);
      break;
    default:
      throw new Error("Unrecognized type " + a.type);
  }
  return n[0] == 239 && n[1] == 187 && n[2] == 191 && (r = Re(r)), a.type = "binary", xs(r, a);
}
function Fd(e, a) {
  var r = e;
  return a.type == "base64" && (r = Tr(r)), r = Xa.utils.decode(1200, r.slice(2), "str"), a.type = "binary", xs(r, a);
}
function Sd(e) {
  return e.match(/[^\x00-\x7F]/) ? Pa(e) : e;
}
function Vt(e, a, r, n) {
  return n ? (r.type = "string", Ya.to_workbook(e, r)) : Ya.to_workbook(a, r);
}
function Zt(e, a) {
  Bn();
  var r = a || {};
  if (typeof ArrayBuffer < "u" && e instanceof ArrayBuffer) return Zt(new Uint8Array(e), (r = Qe(r), r.type = "array", r));
  typeof Uint8Array < "u" && e instanceof Uint8Array && !r.type && (r.type = typeof Deno < "u" ? "buffer" : "array");
  var n = e, t = [0, 0, 0, 0], i = !1;
  if (r.cellStyles && (r.cellNF = !0, r.sheetStubs = !0), Ta = {}, r.dateNF && (Ta.dateNF = r.dateNF), r.type || (r.type = Ae && Buffer.isBuffer(e) ? "buffer" : "base64"), r.type == "file" && (r.type = Ae ? "buffer" : "binary", n = uc(e), typeof Uint8Array < "u" && !Ae && (r.type = "array")), r.type == "string" && (i = !0, r.type = "binary", r.codepage = 65001, n = Sd(e)), r.type == "array" && typeof Uint8Array < "u" && e instanceof Uint8Array && typeof ArrayBuffer < "u") {
    var s = new ArrayBuffer(3), c = new Uint8Array(s);
    if (c.foo = "bar", !c.foo)
      return r = Qe(r), r.type = "array", Zt(a0(n), r);
  }
  switch ((t = A0(n, r))[0]) {
    case 208:
      if (t[1] === 207 && t[2] === 17 && t[3] === 224 && t[4] === 161 && t[5] === 177 && t[6] === 26 && t[7] === 225) return kd(Fe.read(n, r), r);
      break;
    case 9:
      if (t[1] <= 8) return os(n, r);
      break;
    case 60:
      return Yt(n, r);
    case 73:
      if (t[1] === 73 && t[2] === 42 && t[3] === 0) throw new Error("TIFF Image File is not a spreadsheet");
      if (t[1] === 68) return el(n, r);
      break;
    case 84:
      if (t[1] === 65 && t[2] === 66 && t[3] === 76) return Zo.to_workbook(n, r);
      break;
    case 80:
      return t[1] === 75 && t[2] < 9 && t[3] < 9 ? wd(n, r) : Vt(e, n, r, i);
    case 239:
      return t[3] === 60 ? Yt(n, r) : Vt(e, n, r, i);
    case 255:
      if (t[1] === 254)
        return Fd(n, r);
      if (t[1] === 0 && t[2] === 2 && t[3] === 0) return Ha.to_workbook(n, r);
      break;
    case 0:
      if (t[1] === 0 && (t[2] >= 2 && t[3] === 0 || t[2] === 0 && (t[3] === 8 || t[3] === 9)))
        return Ha.to_workbook(n, r);
      break;
    case 3:
    case 131:
    case 139:
    case 140:
      return gn.to_workbook(n, r);
    case 123:
      if (t[1] === 92 && t[2] === 114 && t[3] === 116) return Rl.to_workbook(n, r);
      break;
    case 10:
    case 13:
    case 32:
      return Ad(n, r);
    case 137:
      if (t[1] === 80 && t[2] === 78 && t[3] === 71) throw new Error("PNG Image File is not a spreadsheet");
      break;
  }
  return Jo.indexOf(t[0]) > -1 && t[2] <= 12 && t[3] <= 31 ? gn.to_workbook(n, r) : Vt(e, n, r, i);
}
function Cd(e, a, r, n, t, i, s, c) {
  var o = er(r), f = c.defval, l = c.raw || !Object.prototype.hasOwnProperty.call(c, "raw"), u = !0, h = t === 1 ? [] : {};
  if (t !== 1)
    if (Object.defineProperty) try {
      Object.defineProperty(h, "__rowNum__", { value: r, enumerable: !1 });
    } catch {
      h.__rowNum__ = r;
    }
    else h.__rowNum__ = r;
  if (!s || e[r]) for (var d = a.s.c; d <= a.e.c; ++d) {
    var p = s ? e[r][d] : e[n[d] + o];
    if (p === void 0 || p.t === void 0) {
      if (f === void 0) continue;
      i[d] != null && (h[i[d]] = f);
      continue;
    }
    var x = p.v;
    switch (p.t) {
      case "z":
        if (x == null) break;
        continue;
      case "e":
        x = x == 0 ? null : void 0;
        break;
      case "s":
      case "d":
      case "b":
      case "n":
        break;
      default:
        throw new Error("unrecognized type " + p.t);
    }
    if (i[d] != null) {
      if (x == null)
        if (p.t == "e" && x === null) h[i[d]] = null;
        else if (f !== void 0) h[i[d]] = f;
        else if (l && x === null) h[i[d]] = null;
        else continue;
      else
        h[i[d]] = l && (p.t !== "n" || p.t === "n" && c.rawNumbers !== !1) ? x : Gr(p, x, c);
      x != null && (u = !1);
    }
  }
  return { row: h, isempty: u };
}
function Qt(e, a) {
  if (e == null || e["!ref"] == null) return [];
  var r = { t: "n", v: 0 }, n = 0, t = 1, i = [], s = 0, c = "", o = { s: { r: 0, c: 0 }, e: { r: 0, c: 0 } }, f = a || {}, l = f.range != null ? f.range : e["!ref"];
  switch (f.header === 1 ? n = 1 : f.header === "A" ? n = 2 : Array.isArray(f.header) ? n = 3 : f.header == null && (n = 0), typeof l) {
    case "string":
      o = Ue(l);
      break;
    case "number":
      o = Ue(e["!ref"]), o.s.r = l;
      break;
    default:
      o = l;
  }
  n > 0 && (t = 0);
  var u = er(o.s.r), h = [], d = [], p = 0, x = 0, g = Array.isArray(e), O = o.s.r, I = 0, T = {};
  g && !e[O] && (e[O] = []);
  var U = f.skipHidden && e["!cols"] || [], V = f.skipHidden && e["!rows"] || [];
  for (I = o.s.c; I <= o.e.c; ++I)
    if (!(U[I] || {}).hidden)
      switch (h[I] = Ye(I), r = g ? e[O][I] : e[h[I] + u], n) {
        case 1:
          i[I] = I - o.s.c;
          break;
        case 2:
          i[I] = h[I];
          break;
        case 3:
          i[I] = f.header[I - o.s.c];
          break;
        default:
          if (r == null && (r = { w: "__EMPTY", t: "s" }), c = s = Gr(r, null, f), x = T[s] || 0, !x) T[s] = 1;
          else {
            do
              c = s + "_" + x++;
            while (T[c]);
            T[s] = x, T[c] = 1;
          }
          i[I] = c;
      }
  for (O = o.s.r + t; O <= o.e.r; ++O)
    if (!(V[O] || {}).hidden) {
      var B = Cd(e, o, O, h, n, i, g, f);
      (B.isempty === !1 || (n === 1 ? f.blankrows !== !1 : f.blankrows)) && (d[p++] = B.row);
    }
  return d.length = p, d;
}
var Pn = /"/g;
function yd(e, a, r, n, t, i, s, c) {
  for (var o = !0, f = [], l = "", u = er(r), h = a.s.c; h <= a.e.c; ++h)
    if (n[h]) {
      var d = c.dense ? (e[r] || [])[h] : e[n[h] + u];
      if (d == null) l = "";
      else if (d.v != null) {
        o = !1, l = "" + (c.rawNumbers && d.t == "n" ? d.v : Gr(d, null, c));
        for (var p = 0, x = 0; p !== l.length; ++p) if ((x = l.charCodeAt(p)) === t || x === i || x === 34 || c.forceQuotes) {
          l = '"' + l.replace(Pn, '""') + '"';
          break;
        }
        l == "ID" && (l = '"ID"');
      } else d.f != null && !d.F ? (o = !1, l = "=" + d.f, l.indexOf(",") >= 0 && (l = '"' + l.replace(Pn, '""') + '"')) : l = "";
      f.push(l);
    }
  return c.blankrows === !1 && o ? null : f.join(s);
}
function ds(e, a) {
  var r = [], n = a ?? {};
  if (e == null || e["!ref"] == null) return "";
  var t = Ue(e["!ref"]), i = n.FS !== void 0 ? n.FS : ",", s = i.charCodeAt(0), c = n.RS !== void 0 ? n.RS : `
`, o = c.charCodeAt(0), f = new RegExp((i == "|" ? "\\|" : i) + "+$"), l = "", u = [];
  n.dense = Array.isArray(e);
  for (var h = n.skipHidden && e["!cols"] || [], d = n.skipHidden && e["!rows"] || [], p = t.s.c; p <= t.e.c; ++p) (h[p] || {}).hidden || (u[p] = Ye(p));
  for (var x = 0, g = t.s.r; g <= t.e.r; ++g)
    (d[g] || {}).hidden || (l = yd(e, t, g, u, s, o, i, n), l != null && (n.strip && (l = l.replace(f, "")), (l || n.blankrows !== !1) && r.push((x++ ? c : "") + l)));
  return delete n.dense, r.join("");
}
function Od(e, a) {
  a || (a = {}), a.FS = "	", a.RS = `
`;
  var r = ds(e, a);
  return r;
}
function Dd(e) {
  var a = "", r, n = "";
  if (e == null || e["!ref"] == null) return [];
  var t = Ue(e["!ref"]), i = "", s = [], c, o = [], f = Array.isArray(e);
  for (c = t.s.c; c <= t.e.c; ++c) s[c] = Ye(c);
  for (var l = t.s.r; l <= t.e.r; ++l)
    for (i = er(l), c = t.s.c; c <= t.e.c; ++c)
      if (a = s[c] + i, r = f ? (e[l] || [])[c] : e[a], n = "", r !== void 0) {
        if (r.F != null) {
          if (a = r.F, !r.f) continue;
          n = r.f, a.indexOf(":") == -1 && (a = a + ":" + a);
        }
        if (r.f != null) n = r.f;
        else {
          if (r.t == "z") continue;
          if (r.t == "n" && r.v != null) n = "" + r.v;
          else if (r.t == "b") n = r.v ? "TRUE" : "FALSE";
          else if (r.w !== void 0) n = "'" + r.w;
          else {
            if (r.v === void 0) continue;
            r.t == "s" ? n = "'" + r.v : n = "" + r.v;
          }
        }
        o[o.length] = a + "=" + n;
      }
  return o;
}
function ps(e, a, r) {
  var n = r || {}, t = +!n.skipHeader, i = e || {}, s = 0, c = 0;
  if (i && n.origin != null)
    if (typeof n.origin == "number") s = n.origin;
    else {
      var o = typeof n.origin == "string" ? xr(n.origin) : n.origin;
      s = o.r, c = o.c;
    }
  var f, l = { s: { c: 0, r: 0 }, e: { c, r: s + a.length - 1 + t } };
  if (i["!ref"]) {
    var u = Ue(i["!ref"]);
    l.e.c = Math.max(l.e.c, u.e.c), l.e.r = Math.max(l.e.r, u.e.r), s == -1 && (s = u.e.r + 1, l.e.r = s + a.length - 1 + t);
  } else
    s == -1 && (s = 0, l.e.r = a.length - 1 + t);
  var h = n.header || [], d = 0;
  a.forEach(function(x, g) {
    br(x).forEach(function(O) {
      (d = h.indexOf(O)) == -1 && (h[d = h.length] = O);
      var I = x[O], T = "z", U = "", V = me({ c: c + d, r: s + g + t });
      f = Za(i, V), I && typeof I == "object" && !(I instanceof Date) ? i[V] = I : (typeof I == "number" ? T = "n" : typeof I == "boolean" ? T = "b" : typeof I == "string" ? T = "s" : I instanceof Date ? (T = "d", n.cellDates || (T = "n", I = pr(I)), U = n.dateNF || Ee[14]) : I === null && n.nullError && (T = "e", I = 0), f ? (f.t = T, f.v = I, delete f.w, delete f.R, U && (f.z = U)) : i[V] = f = { t: T, v: I }, U && (f.z = U));
    });
  }), l.e.c = Math.max(l.e.c, c + h.length - 1);
  var p = er(s);
  if (t) for (d = 0; d < h.length; ++d) i[Ye(d + c) + p] = { t: "s", v: h[d] };
  return i["!ref"] = Se(l), i;
}
function Rd(e, a) {
  return ps(null, e, a);
}
function Za(e, a, r) {
  if (typeof a == "string") {
    if (Array.isArray(e)) {
      var n = xr(a);
      return e[n.r] || (e[n.r] = []), e[n.r][n.c] || (e[n.r][n.c] = { t: "z" });
    }
    return e[a] || (e[a] = { t: "z" });
  }
  return typeof a != "number" ? Za(e, me(a)) : Za(e, me({ r: a, c: r || 0 }));
}
function Id(e, a) {
  if (typeof a == "number") {
    if (a >= 0 && e.SheetNames.length > a) return a;
    throw new Error("Cannot find sheet # " + a);
  } else if (typeof a == "string") {
    var r = e.SheetNames.indexOf(a);
    if (r > -1) return r;
    throw new Error("Cannot find sheet name |" + a + "|");
  } else throw new Error("Cannot find sheet |" + a + "|");
}
function F0() {
  return { SheetNames: [], Sheets: {} };
}
function S0(e, a, r, n) {
  var t = 1;
  if (!r) for (; t <= 65535 && e.SheetNames.indexOf(r = "Sheet" + t) != -1; ++t, r = void 0) ;
  if (!r || e.SheetNames.length >= 65535) throw new Error("Too many worksheets");
  if (n && e.SheetNames.indexOf(r) >= 0) {
    var i = r.match(/(^.*?)(\d+)$/);
    t = i && +i[2] || 0;
    var s = i && i[1] || r;
    for (++t; t <= 65535 && e.SheetNames.indexOf(r = s + t) != -1; ++t) ;
  }
  if (vx(r), e.SheetNames.indexOf(r) >= 0) throw new Error("Worksheet with name |" + r + "| already exists!");
  return e.SheetNames.push(r), e.Sheets[r] = a, r;
}
function Nd(e, a, r) {
  e.Workbook || (e.Workbook = {}), e.Workbook.Sheets || (e.Workbook.Sheets = []);
  var n = Id(e, a);
  switch (e.Workbook.Sheets[n] || (e.Workbook.Sheets[n] = {}), r) {
    case 0:
    case 1:
    case 2:
      break;
    default:
      throw new Error("Bad sheet visibility setting " + r);
  }
  e.Workbook.Sheets[n].Hidden = r;
}
function Pd(e, a) {
  return e.z = a, e;
}
function vs(e, a, r) {
  return a ? (e.l = { Target: a }, r && (e.l.Tooltip = r)) : delete e.l, e;
}
function Ld(e, a, r) {
  return vs(e, "#" + a, r);
}
function bd(e, a, r) {
  e.c || (e.c = []), e.c.push({ t: a, a: r || "SheetJS" });
}
function Md(e, a, r, n) {
  for (var t = typeof a != "string" ? a : Ue(a), i = typeof a == "string" ? a : Se(a), s = t.s.r; s <= t.e.r; ++s) for (var c = t.s.c; c <= t.e.c; ++c) {
    var o = Za(e, s, c);
    o.t = "n", o.F = i, delete o.v, s == t.s.r && c == t.s.c && (o.f = r, n && (o.D = !0));
  }
  return e;
}
var Ln = {
  encode_col: Ye,
  encode_row: er,
  encode_cell: me,
  encode_range: Se,
  decode_col: u0,
  decode_row: l0,
  split_cell: Kc,
  decode_cell: xr,
  decode_range: Sa,
  format_cell: Gr,
  sheet_add_aoa: Ei,
  sheet_add_json: ps,
  sheet_add_dom: ls,
  aoa_to_sheet: Ca,
  json_to_sheet: Rd,
  table_to_sheet: us,
  table_to_book: ed,
  sheet_to_csv: ds,
  sheet_to_txt: Od,
  sheet_to_json: Qt,
  sheet_to_html: Qx,
  sheet_to_formulae: Dd,
  sheet_to_row_object_array: Qt,
  sheet_get_cell: Za,
  book_new: F0,
  book_append_sheet: S0,
  book_set_sheet_visibility: Nd,
  cell_set_number_format: Pd,
  cell_set_hyperlink: vs,
  cell_set_internal_link: Ld,
  cell_add_comment: bd,
  sheet_set_array_formula: Md,
  consts: {
    SHEET_VISIBLE: 0,
    SHEET_HIDDEN: 1,
    SHEET_VERY_HIDDEN: 2
  }
};
function Bd(e) {
  return e && e.__esModule && Object.prototype.hasOwnProperty.call(e, "default") ? e.default : e;
}
var pt = { exports: {} };
var Ud = pt.exports, bn;
function Hd() {
  return bn || (bn = 1, (function(e, a) {
    ((r, n) => {
      e.exports = n();
    })(Ud, function r() {
      var n = typeof self < "u" ? self : typeof window < "u" ? window : n !== void 0 ? n : {}, t, i = !n.document && !!n.postMessage, s = n.IS_PAPA_WORKER || !1, c = {}, o = 0, f = {};
      function l(_) {
        this._handle = null, this._finished = !1, this._completed = !1, this._halted = !1, this._input = null, this._baseIndex = 0, this._partialLine = "", this._rowCount = 0, this._start = 0, this._nextChunk = null, this.isFirstChunk = !0, this._completeResults = { data: [], errors: [], meta: {} }, (function(m) {
          var R = V(m);
          R.chunkSize = parseInt(R.chunkSize), m.step || m.chunk || (R.chunkSize = null), this._handle = new x(R), (this._handle.streamer = this)._config = R;
        }).call(this, _), this.parseChunk = function(m, R) {
          var L = parseInt(this._config.skipFirstNLines) || 0;
          if (this.isFirstChunk && 0 < L) {
            let z = this._config.newline;
            z || (D = this._config.quoteChar || '"', z = this._handle.guessLineEndings(m, D)), m = [...m.split(z).slice(L)].join(z);
          }
          this.isFirstChunk && A(this._config.beforeFirstChunk) && (D = this._config.beforeFirstChunk(m)) !== void 0 && (m = D), this.isFirstChunk = !1, this._halted = !1;
          var L = this._partialLine + m, D = (this._partialLine = "", this._handle.parse(L, this._baseIndex, !this._finished));
          if (!this._handle.paused() && !this._handle.aborted()) {
            if (m = D.meta.cursor, L = (this._finished || (this._partialLine = L.substring(m - this._baseIndex), this._baseIndex = m), D && D.data && (this._rowCount += D.data.length), this._finished || this._config.preview && this._rowCount >= this._config.preview), s) n.postMessage({ results: D, workerId: f.WORKER_ID, finished: L });
            else if (A(this._config.chunk) && !R) {
              if (this._config.chunk(D, this._handle), this._handle.paused() || this._handle.aborted()) return void (this._halted = !0);
              this._completeResults = D = void 0;
            }
            return this._config.step || this._config.chunk || (this._completeResults.data = this._completeResults.data.concat(D.data), this._completeResults.errors = this._completeResults.errors.concat(D.errors), this._completeResults.meta = D.meta), this._completed || !L || !A(this._config.complete) || D && D.meta.aborted || (this._config.complete(this._completeResults, this._input), this._completed = !0), L || D && D.meta.paused || this._nextChunk(), D;
          }
          this._halted = !0;
        }, this._sendError = function(m) {
          A(this._config.error) ? this._config.error(m) : s && this._config.error && n.postMessage({ workerId: f.WORKER_ID, error: m, finished: !1 });
        };
      }
      function u(_) {
        var m;
        (_ = _ || {}).chunkSize || (_.chunkSize = f.RemoteChunkSize), l.call(this, _), this._nextChunk = i ? function() {
          this._readChunk(), this._chunkLoaded();
        } : function() {
          this._readChunk();
        }, this.stream = function(R) {
          this._input = R, this._nextChunk();
        }, this._readChunk = function() {
          if (this._finished) this._chunkLoaded();
          else {
            if (m = new XMLHttpRequest(), this._config.withCredentials && (m.withCredentials = this._config.withCredentials), i || (m.onload = B(this._chunkLoaded, this), m.onerror = B(this._chunkError, this)), m.open(this._config.downloadRequestBody ? "POST" : "GET", this._input, !i), this._config.downloadRequestHeaders) {
              var R, L = this._config.downloadRequestHeaders;
              for (R in L) m.setRequestHeader(R, L[R]);
            }
            var D;
            this._config.chunkSize && (D = this._start + this._config.chunkSize - 1, m.setRequestHeader("Range", "bytes=" + this._start + "-" + D));
            try {
              m.send(this._config.downloadRequestBody);
            } catch (z) {
              this._chunkError(z.message);
            }
            i && m.status === 0 && this._chunkError();
          }
        }, this._chunkLoaded = function() {
          m.readyState === 4 && (m.status < 200 || 400 <= m.status ? this._chunkError() : (this._start += this._config.chunkSize || m.responseText.length, this._finished = !this._config.chunkSize || this._start >= ((R) => (R = R.getResponseHeader("Content-Range")) !== null ? parseInt(R.substring(R.lastIndexOf("/") + 1)) : -1)(m), this.parseChunk(m.responseText)));
        }, this._chunkError = function(R) {
          R = m.statusText || R, this._sendError(new Error(R));
        };
      }
      function h(_) {
        (_ = _ || {}).chunkSize || (_.chunkSize = f.LocalChunkSize), l.call(this, _);
        var m, R, L = typeof FileReader < "u";
        this.stream = function(D) {
          this._input = D, R = D.slice || D.webkitSlice || D.mozSlice, L ? ((m = new FileReader()).onload = B(this._chunkLoaded, this), m.onerror = B(this._chunkError, this)) : m = new FileReaderSync(), this._nextChunk();
        }, this._nextChunk = function() {
          this._finished || this._config.preview && !(this._rowCount < this._config.preview) || this._readChunk();
        }, this._readChunk = function() {
          var D = this._input, z = (this._config.chunkSize && (z = Math.min(this._start + this._config.chunkSize, this._input.size), D = R.call(D, this._start, z)), m.readAsText(D, this._config.encoding));
          L || this._chunkLoaded({ target: { result: z } });
        }, this._chunkLoaded = function(D) {
          this._start += this._config.chunkSize, this._finished = !this._config.chunkSize || this._start >= this._input.size, this.parseChunk(D.target.result);
        }, this._chunkError = function() {
          this._sendError(m.error);
        };
      }
      function d(_) {
        var m;
        l.call(this, _ = _ || {}), this.stream = function(R) {
          return m = R, this._nextChunk();
        }, this._nextChunk = function() {
          var R, L;
          if (!this._finished) return R = this._config.chunkSize, m = R ? (L = m.substring(0, R), m.substring(R)) : (L = m, ""), this._finished = !m, this.parseChunk(L);
        };
      }
      function p(_) {
        l.call(this, _ = _ || {});
        var m = [], R = !0, L = !1;
        this.pause = function() {
          l.prototype.pause.apply(this, arguments), this._input.pause();
        }, this.resume = function() {
          l.prototype.resume.apply(this, arguments), this._input.resume();
        }, this.stream = function(D) {
          this._input = D, this._input.on("data", this._streamData), this._input.on("end", this._streamEnd), this._input.on("error", this._streamError);
        }, this._checkIsFinished = function() {
          L && m.length === 1 && (this._finished = !0);
        }, this._nextChunk = function() {
          this._checkIsFinished(), m.length ? this.parseChunk(m.shift()) : R = !0;
        }, this._streamData = B(function(D) {
          try {
            m.push(typeof D == "string" ? D : D.toString(this._config.encoding)), R && (R = !1, this._checkIsFinished(), this.parseChunk(m.shift()));
          } catch (z) {
            this._streamError(z);
          }
        }, this), this._streamError = B(function(D) {
          this._streamCleanUp(), this._sendError(D);
        }, this), this._streamEnd = B(function() {
          this._streamCleanUp(), L = !0, this._streamData("");
        }, this), this._streamCleanUp = B(function() {
          this._input.removeListener("data", this._streamData), this._input.removeListener("end", this._streamEnd), this._input.removeListener("error", this._streamError);
        }, this);
      }
      function x(_) {
        var m, R, L, D, z = Math.pow(2, 53), ie = -z, re = /^\s*-?(\d+\.?|\.\d+|\d+\.\d+)([eE][-+]?\d+)?\s*$/, fe = /^((\d{4}-[01]\d-[0-3]\dT[0-2]\d:[0-5]\d:[0-5]\d\.\d+([+-][0-2]\d:[0-5]\d|Z))|(\d{4}-[01]\d-[0-3]\dT[0-2]\d:[0-5]\d:[0-5]\d([+-][0-2]\d:[0-5]\d|Z))|(\d{4}-[01]\d-[0-3]\dT[0-2]\d:[0-5]\d([+-][0-2]\d:[0-5]\d|Z)))$/, q = this, ve = 0, M = 0, he = !1, te = !1, w = [], P = { data: [], errors: [], meta: {} };
        function b(Z) {
          return _.skipEmptyLines === "greedy" ? Z.join("").trim() === "" : Z.length === 1 && Z[0].length === 0;
        }
        function N() {
          if (P && L && (ee("Delimiter", "UndetectableDelimiter", "Unable to auto-detect delimiting character; defaulted to '" + f.DefaultDelimiter + "'"), L = !1), _.skipEmptyLines && (P.data = P.data.filter(function(se) {
            return !b(se);
          })), K()) {
            let se = function(C, Te) {
              A(_.transformHeader) && (C = _.transformHeader(C, Te)), w.push(C);
            };
            if (P) if (Array.isArray(P.data[0])) {
              for (var Z = 0; K() && Z < P.data.length; Z++) P.data[Z].forEach(se);
              P.data.splice(0, 1);
            } else P.data.forEach(se);
          }
          function J(se, C) {
            for (var Te = _.header ? {} : [], de = 0; de < se.length; de++) {
              var pe = de, oe = se[de], oe = ((ne, xe) => ((we) => (_.dynamicTypingFunction && _.dynamicTyping[we] === void 0 && (_.dynamicTyping[we] = _.dynamicTypingFunction(we)), (_.dynamicTyping[we] || _.dynamicTyping) === !0))(ne) ? xe === "true" || xe === "TRUE" || xe !== "false" && xe !== "FALSE" && (((we) => {
                if (re.test(we) && (we = parseFloat(we), ie < we && we < z))
                  return 1;
              })(xe) ? parseFloat(xe) : fe.test(xe) ? new Date(xe) : xe === "" ? null : xe) : xe)(pe = _.header ? de >= w.length ? "__parsed_extra" : w[de] : pe, oe = _.transform ? _.transform(oe, pe) : oe);
              pe === "__parsed_extra" ? (Te[pe] = Te[pe] || [], Te[pe].push(oe)) : Te[pe] = oe;
            }
            return _.header && (de > w.length ? ee("FieldMismatch", "TooManyFields", "Too many fields: expected " + w.length + " fields but parsed " + de, M + C) : de < w.length && ee("FieldMismatch", "TooFewFields", "Too few fields: expected " + w.length + " fields but parsed " + de, M + C)), Te;
          }
          var j;
          P && (_.header || _.dynamicTyping || _.transform) && (j = 1, !P.data.length || Array.isArray(P.data[0]) ? (P.data = P.data.map(J), j = P.data.length) : P.data = J(P.data, 0), _.header && P.meta && (P.meta.fields = w), M += j);
        }
        function K() {
          return _.header && w.length === 0;
        }
        function ee(Z, J, j, se) {
          Z = { type: Z, code: J, message: j }, se !== void 0 && (Z.row = se), P.errors.push(Z);
        }
        A(_.step) && (D = _.step, _.step = function(Z) {
          P = Z, K() ? N() : (N(), P.data.length !== 0 && (ve += Z.data.length, _.preview && ve > _.preview ? R.abort() : (P.data = P.data[0], D(P, q))));
        }), this.parse = function(Z, J, j) {
          var se = _.quoteChar || '"', se = (_.newline || (_.newline = this.guessLineEndings(Z, se)), L = !1, _.delimiter ? A(_.delimiter) && (_.delimiter = _.delimiter(Z), P.meta.delimiter = _.delimiter) : ((se = ((C, Te, de, pe, oe) => {
            var ne, xe, we, $e;
            oe = oe || [",", "	", "|", ";", f.RECORD_SEP, f.UNIT_SEP];
            for (var rr = 0; rr < oe.length; rr++) {
              for (var ar, vr = oe[rr], ye = 0, We = 0, De = 0, Ve = (we = void 0, new O({ comments: pe, delimiter: vr, newline: Te, preview: 10 }).parse(C)), Ie = 0; Ie < Ve.data.length; Ie++) de && b(Ve.data[Ie]) ? De++ : (ar = Ve.data[Ie].length, We += ar, we === void 0 ? we = ar : 0 < ar && (ye += Math.abs(ar - we), we = ar));
              0 < Ve.data.length && (We /= Ve.data.length - De), (xe === void 0 || ye <= xe) && ($e === void 0 || $e < We) && 1.99 < We && (xe = ye, ne = vr, $e = We);
            }
            return { successful: !!(_.delimiter = ne), bestDelimiter: ne };
          })(Z, _.newline, _.skipEmptyLines, _.comments, _.delimitersToGuess)).successful ? _.delimiter = se.bestDelimiter : (L = !0, _.delimiter = f.DefaultDelimiter), P.meta.delimiter = _.delimiter), V(_));
          return _.preview && _.header && se.preview++, m = Z, R = new O(se), P = R.parse(m, J, j), N(), he ? { meta: { paused: !0 } } : P || { meta: { paused: !1 } };
        }, this.paused = function() {
          return he;
        }, this.pause = function() {
          he = !0, R.abort(), m = A(_.chunk) ? "" : m.substring(R.getCharIndex());
        }, this.resume = function() {
          q.streamer._halted ? (he = !1, q.streamer.parseChunk(m, !0)) : setTimeout(q.resume, 3);
        }, this.aborted = function() {
          return te;
        }, this.abort = function() {
          te = !0, R.abort(), P.meta.aborted = !0, A(_.complete) && _.complete(P), m = "";
        }, this.guessLineEndings = function(C, se) {
          C = C.substring(0, 1048576);
          var se = new RegExp(g(se) + "([^]*?)" + g(se), "gm"), j = (C = C.replace(se, "")).split("\r"), se = C.split(`
`), C = 1 < se.length && se[0].length < j[0].length;
          if (j.length === 1 || C) return `
`;
          for (var Te = 0, de = 0; de < j.length; de++) j[de][0] === `
` && Te++;
          return Te >= j.length / 2 ? `\r
` : "\r";
        };
      }
      function g(_) {
        return _.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
      }
      function O(_) {
        var m = (_ = _ || {}).delimiter, R = _.newline, L = _.comments, D = _.step, z = _.preview, ie = _.fastMode, re = null, fe = !1, q = _.quoteChar == null ? '"' : _.quoteChar, ve = q;
        if (_.escapeChar !== void 0 && (ve = _.escapeChar), (typeof m != "string" || -1 < f.BAD_DELIMITERS.indexOf(m)) && (m = ","), L === m) throw new Error("Comment character same as delimiter");
        L === !0 ? L = "#" : (typeof L != "string" || -1 < f.BAD_DELIMITERS.indexOf(L)) && (L = !1), R !== `
` && R !== "\r" && R !== `\r
` && (R = `
`);
        var M = 0, he = !1;
        this.parse = function(te, w, P) {
          if (typeof te != "string") throw new Error("Input must be a string");
          var b = te.length, N = m.length, K = R.length, ee = L.length, Z = A(D), J = [], j = [], se = [], C = M = 0;
          if (!te) return ye();
          if (ie || ie !== !1 && te.indexOf(q) === -1) {
            for (var Te = te.split(R), de = 0; de < Te.length; de++) {
              if (se = Te[de], M += se.length, de !== Te.length - 1) M += R.length;
              else if (P) return ye();
              if (!L || se.substring(0, ee) !== L) {
                if (Z) {
                  if (J = [], $e(se.split(m)), We(), he) return ye();
                } else $e(se.split(m));
                if (z && z <= de) return J = J.slice(0, z), ye(!0);
              }
            }
            return ye();
          }
          for (var pe = te.indexOf(m, M), oe = te.indexOf(R, M), ne = new RegExp(g(ve) + g(q), "g"), xe = te.indexOf(q, M); ; ) if (te[M] === q) for (xe = M, M++; ; ) {
            if ((xe = te.indexOf(q, xe + 1)) === -1) return P || j.push({ type: "Quotes", code: "MissingQuotes", message: "Quoted field unterminated", row: J.length, index: M }), ar();
            if (xe === b - 1) return ar(te.substring(M, xe).replace(ne, q));
            if (q === ve && te[xe + 1] === ve) xe++;
            else if (q === ve || xe === 0 || te[xe - 1] !== ve) {
              pe !== -1 && pe < xe + 1 && (pe = te.indexOf(m, xe + 1));
              var we = rr((oe = oe !== -1 && oe < xe + 1 ? te.indexOf(R, xe + 1) : oe) === -1 ? pe : Math.min(pe, oe));
              if (te.substr(xe + 1 + we, N) === m) {
                se.push(te.substring(M, xe).replace(ne, q)), te[M = xe + 1 + we + N] !== q && (xe = te.indexOf(q, M)), pe = te.indexOf(m, M), oe = te.indexOf(R, M);
                break;
              }
              if (we = rr(oe), te.substring(xe + 1 + we, xe + 1 + we + K) === R) {
                if (se.push(te.substring(M, xe).replace(ne, q)), vr(xe + 1 + we + K), pe = te.indexOf(m, M), xe = te.indexOf(q, M), Z && (We(), he)) return ye();
                if (z && J.length >= z) return ye(!0);
                break;
              }
              j.push({ type: "Quotes", code: "InvalidQuotes", message: "Trailing quote on quoted field is malformed", row: J.length, index: M }), xe++;
            }
          }
          else if (L && se.length === 0 && te.substring(M, M + ee) === L) {
            if (oe === -1) return ye();
            M = oe + K, oe = te.indexOf(R, M), pe = te.indexOf(m, M);
          } else if (pe !== -1 && (pe < oe || oe === -1)) se.push(te.substring(M, pe)), M = pe + N, pe = te.indexOf(m, M);
          else {
            if (oe === -1) break;
            if (se.push(te.substring(M, oe)), vr(oe + K), Z && (We(), he)) return ye();
            if (z && J.length >= z) return ye(!0);
          }
          return ar();
          function $e(De) {
            J.push(De), C = M;
          }
          function rr(De) {
            var Ve = 0;
            return Ve = De !== -1 && (De = te.substring(xe + 1, De)) && De.trim() === "" ? De.length : Ve;
          }
          function ar(De) {
            return P || (De === void 0 && (De = te.substring(M)), se.push(De), M = b, $e(se), Z && We()), ye();
          }
          function vr(De) {
            M = De, $e(se), se = [], oe = te.indexOf(R, M);
          }
          function ye(De) {
            if (_.header && !w && J.length && !fe) {
              var Ve = J[0], Ie = /* @__PURE__ */ Object.create(null), gr = new Set(Ve);
              let ke = !1;
              for (let Oe = 0; Oe < Ve.length; Oe++) {
                let Le = Ve[Oe];
                if (Ie[Le = A(_.transformHeader) ? _.transformHeader(Le, Oe) : Le]) {
                  let Ne, Nr = Ie[Le];
                  for (; Ne = Le + "_" + Nr, Nr++, gr.has(Ne); ) ;
                  gr.add(Ne), Ve[Oe] = Ne, Ie[Le]++, ke = !0, (re = re === null ? {} : re)[Ne] = Le;
                } else Ie[Le] = 1, Ve[Oe] = Le;
                gr.add(Le);
              }
              ke && console.warn("Duplicate headers found and renamed."), fe = !0;
            }
            return { data: J, errors: j, meta: { delimiter: m, linebreak: R, aborted: he, truncated: !!De, cursor: C + (w || 0), renamedHeaders: re } };
          }
          function We() {
            D(ye()), J = [], j = [];
          }
        }, this.abort = function() {
          he = !0;
        }, this.getCharIndex = function() {
          return M;
        };
      }
      function I(_) {
        var m = _.data, R = c[m.workerId], L = !1;
        if (m.error) R.userError(m.error, m.file);
        else if (m.results && m.results.data) {
          var D = { abort: function() {
            L = !0, T(m.workerId, { data: [], errors: [], meta: { aborted: !0 } });
          }, pause: U, resume: U };
          if (A(R.userStep)) {
            for (var z = 0; z < m.results.data.length && (R.userStep({ data: m.results.data[z], errors: m.results.errors, meta: m.results.meta }, D), !L); z++) ;
            delete m.results;
          } else A(R.userChunk) && (R.userChunk(m.results, D, m.file), delete m.results);
        }
        m.finished && !L && T(m.workerId, m.results);
      }
      function T(_, m) {
        var R = c[_];
        A(R.userComplete) && R.userComplete(m), R.terminate(), delete c[_];
      }
      function U() {
        throw new Error("Not implemented.");
      }
      function V(_) {
        if (typeof _ != "object" || _ === null) return _;
        var m, R = Array.isArray(_) ? [] : {};
        for (m in _) R[m] = V(_[m]);
        return R;
      }
      function B(_, m) {
        return function() {
          _.apply(m, arguments);
        };
      }
      function A(_) {
        return typeof _ == "function";
      }
      return f.parse = function(_, m) {
        var R = (m = m || {}).dynamicTyping || !1;
        if (A(R) && (m.dynamicTypingFunction = R, R = {}), m.dynamicTyping = R, m.transform = !!A(m.transform) && m.transform, !m.worker || !f.WORKERS_SUPPORTED) return R = null, f.NODE_STREAM_INPUT, typeof _ == "string" ? (_ = ((L) => L.charCodeAt(0) !== 65279 ? L : L.slice(1))(_), R = new (m.download ? u : d)(m)) : _.readable === !0 && A(_.read) && A(_.on) ? R = new p(m) : (n.File && _ instanceof File || _ instanceof Object) && (R = new h(m)), R.stream(_);
        (R = (() => {
          var L;
          return !!f.WORKERS_SUPPORTED && (L = (() => {
            var D = n.URL || n.webkitURL || null, z = r.toString();
            return f.BLOB_URL || (f.BLOB_URL = D.createObjectURL(new Blob(["var global = (function() { if (typeof self !== 'undefined') { return self; } if (typeof window !== 'undefined') { return window; } if (typeof global !== 'undefined') { return global; } return {}; })(); global.IS_PAPA_WORKER=true; ", "(", z, ")();"], { type: "text/javascript" })));
          })(), (L = new n.Worker(L)).onmessage = I, L.id = o++, c[L.id] = L);
        })()).userStep = m.step, R.userChunk = m.chunk, R.userComplete = m.complete, R.userError = m.error, m.step = A(m.step), m.chunk = A(m.chunk), m.complete = A(m.complete), m.error = A(m.error), delete m.worker, R.postMessage({ input: _, config: m, workerId: R.id });
      }, f.unparse = function(_, m) {
        var R = !1, L = !0, D = ",", z = `\r
`, ie = '"', re = ie + ie, fe = !1, q = null, ve = !1, M = ((() => {
          if (typeof m == "object") {
            if (typeof m.delimiter != "string" || f.BAD_DELIMITERS.filter(function(w) {
              return m.delimiter.indexOf(w) !== -1;
            }).length || (D = m.delimiter), typeof m.quotes != "boolean" && typeof m.quotes != "function" && !Array.isArray(m.quotes) || (R = m.quotes), typeof m.skipEmptyLines != "boolean" && typeof m.skipEmptyLines != "string" || (fe = m.skipEmptyLines), typeof m.newline == "string" && (z = m.newline), typeof m.quoteChar == "string" && (ie = m.quoteChar), typeof m.header == "boolean" && (L = m.header), Array.isArray(m.columns)) {
              if (m.columns.length === 0) throw new Error("Option columns is empty");
              q = m.columns;
            }
            m.escapeChar !== void 0 && (re = m.escapeChar + ie), m.escapeFormulae instanceof RegExp ? ve = m.escapeFormulae : typeof m.escapeFormulae == "boolean" && m.escapeFormulae && (ve = /^[=+\-@\t\r].*$/);
          }
        })(), new RegExp(g(ie), "g"));
        if (typeof _ == "string" && (_ = JSON.parse(_)), Array.isArray(_)) {
          if (!_.length || Array.isArray(_[0])) return he(null, _, fe);
          if (typeof _[0] == "object") return he(q || Object.keys(_[0]), _, fe);
        } else if (typeof _ == "object") return typeof _.data == "string" && (_.data = JSON.parse(_.data)), Array.isArray(_.data) && (_.fields || (_.fields = _.meta && _.meta.fields || q), _.fields || (_.fields = Array.isArray(_.data[0]) ? _.fields : typeof _.data[0] == "object" ? Object.keys(_.data[0]) : []), Array.isArray(_.data[0]) || typeof _.data[0] == "object" || (_.data = [_.data])), he(_.fields || [], _.data || [], fe);
        throw new Error("Unable to serialize unrecognized input");
        function he(w, P, b) {
          var N = "", K = (typeof w == "string" && (w = JSON.parse(w)), typeof P == "string" && (P = JSON.parse(P)), Array.isArray(w) && 0 < w.length), ee = !Array.isArray(P[0]);
          if (K && L) {
            for (var Z = 0; Z < w.length; Z++) 0 < Z && (N += D), N += te(w[Z], Z);
            0 < P.length && (N += z);
          }
          for (var J = 0; J < P.length; J++) {
            var j = (K ? w : P[J]).length, se = !1, C = K ? Object.keys(P[J]).length === 0 : P[J].length === 0;
            if (b && !K && (se = b === "greedy" ? P[J].join("").trim() === "" : P[J].length === 1 && P[J][0].length === 0), b === "greedy" && K) {
              for (var Te = [], de = 0; de < j; de++) {
                var pe = ee ? w[de] : de;
                Te.push(P[J][pe]);
              }
              se = Te.join("").trim() === "";
            }
            if (!se) {
              for (var oe = 0; oe < j; oe++) {
                0 < oe && !C && (N += D);
                var ne = K && ee ? w[oe] : oe;
                N += te(P[J][ne], oe);
              }
              J < P.length - 1 && (!b || 0 < j && !C) && (N += z);
            }
          }
          return N;
        }
        function te(w, P) {
          var b, N;
          return w == null ? "" : w.constructor === Date ? JSON.stringify(w).slice(1, 25) : (N = !1, ve && typeof w == "string" && ve.test(w) && (w = "'" + w, N = !0), b = w.toString().replace(M, re), (N = N || R === !0 || typeof R == "function" && R(w, P) || Array.isArray(R) && R[P] || ((K, ee) => {
            for (var Z = 0; Z < ee.length; Z++) if (-1 < K.indexOf(ee[Z])) return !0;
            return !1;
          })(b, f.BAD_DELIMITERS) || -1 < b.indexOf(D) || b.charAt(0) === " " || b.charAt(b.length - 1) === " ") ? ie + b + ie : b);
        }
      }, f.RECORD_SEP = "", f.UNIT_SEP = "", f.BYTE_ORDER_MARK = "\uFEFF", f.BAD_DELIMITERS = ["\r", `
`, '"', f.BYTE_ORDER_MARK], f.WORKERS_SUPPORTED = !i && !!n.Worker, f.NODE_STREAM_INPUT = 1, f.LocalChunkSize = 10485760, f.RemoteChunkSize = 5242880, f.DefaultDelimiter = ",", f.Parser = O, f.ParserHandle = x, f.NetworkStreamer = u, f.FileStreamer = h, f.StringStreamer = d, f.ReadableStreamStreamer = p, n.jQuery && ((t = n.jQuery).fn.parse = function(_) {
        var m = _.config || {}, R = [];
        return this.each(function(z) {
          if (!(t(this).prop("tagName").toUpperCase() === "INPUT" && t(this).attr("type").toLowerCase() === "file" && n.FileReader) || !this.files || this.files.length === 0) return !0;
          for (var ie = 0; ie < this.files.length; ie++) R.push({ file: this.files[ie], inputElem: this, instanceConfig: t.extend({}, m) });
        }), L(), this;
        function L() {
          if (R.length === 0) A(_.complete) && _.complete();
          else {
            var z, ie, re, fe, q = R[0];
            if (A(_.before)) {
              var ve = _.before(q.file, q.inputElem);
              if (typeof ve == "object") {
                if (ve.action === "abort") return z = "AbortError", ie = q.file, re = q.inputElem, fe = ve.reason, void (A(_.error) && _.error({ name: z }, ie, re, fe));
                if (ve.action === "skip") return void D();
                typeof ve.config == "object" && (q.instanceConfig = t.extend(q.instanceConfig, ve.config));
              } else if (ve === "skip") return void D();
            }
            var M = q.instanceConfig.complete;
            q.instanceConfig.complete = function(he) {
              A(M) && M(he, q.file, q.inputElem), D();
            }, f.parse(q.file, q.instanceConfig);
          }
        }
        function D() {
          R.splice(0, 1), L();
        }
      }), s && (n.onmessage = function(_) {
        _ = _.data, f.WORKER_ID === void 0 && _ && (f.WORKER_ID = _.workerId), typeof _.input == "string" ? n.postMessage({ workerId: f.WORKER_ID, results: f.parse(_.input, _.config), finished: !0 }) : (n.File && _.input instanceof File || _.input instanceof Object) && (_ = f.parse(_.input, _.config)) && n.postMessage({ workerId: f.WORKER_ID, results: _, finished: !0 });
      }), (u.prototype = Object.create(l.prototype)).constructor = u, (h.prototype = Object.create(l.prototype)).constructor = h, (d.prototype = Object.create(d.prototype)).constructor = d, (p.prototype = Object.create(l.prototype)).constructor = p, f;
    });
  })(pt)), pt.exports;
}
var Wd = Hd();
const Vd = /* @__PURE__ */ Bd(Wd);
var Gd = Object.defineProperty, Xd = Object.getOwnPropertyDescriptor, da = (e, a, r, n) => {
  for (var t = n > 1 ? void 0 : n ? Xd(a, r) : a, i = e.length - 1, s; i >= 0; i--)
    (s = e[i]) && (t = (n ? s(a, r, t) : s(t)) || t);
  return n && t && Gd(a, r, t), t;
};
let Xr = class extends Ps {
  constructor() {
    super(...arguments), this._source = null, this._rows = 3, this._columns = 3, this._fileName = "", this._parsed = null, this._parseError = "";
  }
  connectedCallback() {
    super.connectedCallback(), typeof this.data?.rows == "number" && this.data.rows > 0 && (this._rows = this.data.rows), typeof this.data?.columns == "number" && this.data.columns > 0 && (this._columns = this.data.columns);
  }
  _selectSource(e) {
    this._source = e, this._parsed = null, this._parseError = "", this._fileName = "";
  }
  _onRowsInput(e) {
    const a = Number(e.target.value);
    this._rows = Number.isFinite(a) ? Math.max(1, Math.min(50, a)) : 1;
  }
  _onColumnsInput(e) {
    const a = Number(e.target.value);
    this._columns = Number.isFinite(a) ? Math.max(1, Math.min(20, a)) : 1;
  }
  _onFileChange(e) {
    const a = e.target.files?.[0];
    if (!a) return;
    this._fileName = a.name, this._parseError = "", this._parsed = null;
    const r = a.name.split(".").pop()?.toLowerCase();
    r === "csv" ? this._parseCsv(a) : r === "xlsx" || r === "xls" ? this._parseXlsx(a) : this._parseError = "Unsupported file type. Please upload an .xlsx, .xls or .csv file.";
  }
  _parseCsv(e) {
    Vd.parse(e, {
      skipEmptyLines: !0,
      complete: (a) => {
        const r = a.data;
        if (!r.length) {
          this._parseError = "The CSV file appears to be empty.";
          return;
        }
        const n = r[0].map((i) => String(i ?? "")), t = r.slice(1).map(
          (i) => n.map((s, c) => String(i[c] ?? ""))
        );
        this._parsed = { columnNames: n, cellData: t };
      },
      error: (a) => {
        this._parseError = `Failed to parse CSV: ${a.message}`;
      }
    });
  }
  _parseXlsx(e) {
    const a = new FileReader();
    a.onload = (r) => {
      try {
        const n = new Uint8Array(r.target.result), t = Zt(n, { type: "array" }), i = t.SheetNames[0], s = t.Sheets[i], c = Ln.sheet_to_json(s, {
          header: 1,
          defval: "",
          raw: !1
        });
        if (!c.length) {
          this._parseError = "The Excel file appears to be empty.";
          return;
        }
        const o = c[0].map((h) => String(h ?? "")), f = o.length, l = c.slice(1).map(
          (h) => o.map((d, p) => String(h[p] ?? ""))
        ), u = s["!merges"] ?? [];
        for (const h of u) {
          const d = Ln.encode_cell({ r: h.s.r, c: h.s.c }), p = String(s[d]?.v ?? "");
          for (let x = h.s.r; x <= h.e.r; x++)
            for (let g = h.s.c; g <= h.e.c; g++)
              if (x === 0)
                g < f && (o[g] = p);
              else {
                const O = x - 1;
                O < l.length && g < f && (l[O][g] = p);
              }
        }
        this._parsed = { columnNames: o, cellData: l };
      } catch {
        this._parseError = "Failed to read the Excel file.";
      }
    }, a.readAsArrayBuffer(e);
  }
  _triggerFilePicker() {
    this.shadowRoot?.querySelector("#fileInput")?.click();
  }
  _close() {
    this.modalContext?.reject();
  }
  _submit() {
    this._source === "file" && this._parsed ? this.value = {
      rows: this._parsed.cellData.length,
      columns: this._parsed.columnNames.length,
      columnNames: this._parsed.columnNames,
      cellData: this._parsed.cellData
    } : this.value = { rows: this._rows, columns: this._columns }, this.modalContext?.submit();
  }
  get _canSubmit() {
    return this._source ? this._source === "file" ? !!this._parsed : !0 : !1;
  }
  render() {
    const e = this.data?.headline ?? "Create table";
    return pa`
            <uui-dialog-layout .headline=${e}>
                <div class="content">
                    ${this._renderSourcePicker()}
                    ${this._source === "scratch" ? this._renderScratchFields() : null}
                    ${this._source === "file" ? this._renderFileFields() : null}
                </div>

                <div slot="actions">
                    <uui-button look="secondary" @click=${this._close} label="Cancel">Cancel</uui-button>
                    <uui-button
                        look="primary"
                        .disabled=${!this._canSubmit}
                        @click=${this._submit}
                        label="Create">
                        Create
                    </uui-button>
                </div>
            </uui-dialog-layout>
        `;
  }
  _renderSourcePicker() {
    return pa`
            <div class="sourcePicker">
                <button
                    class=${["sourceOption", this._source === "scratch" ? "selected" : ""].filter(Boolean).join(" ")}
                    @click=${() => this._selectSource("scratch")}>
                    <uui-icon name="icon-grid-alt"></uui-icon>
                    <span>Create from scratch</span>
                </button>
                <button
                    class=${["sourceOption", this._source === "file" ? "selected" : ""].filter(Boolean).join(" ")}
                    @click=${() => this._selectSource("file")}>
                    <uui-icon name="icon-document"></uui-icon>
                    <span>Import from Excel / CSV</span>
                </button>
            </div>
        `;
  }
  _renderScratchFields() {
    return pa`
            <div class="fields">
                <uui-label for="inputRows">Rows</uui-label>
                <uui-input
                    id="inputRows"
                    type="number"
                    label="Rows"
                    min="1"
                    max="50"
                    .value=${String(this._rows)}
                    @input=${this._onRowsInput}>
                </uui-input>

                <uui-label for="inputColumns">Columns</uui-label>
                <uui-input
                    id="inputColumns"
                    type="number"
                    label="Columns"
                    min="1"
                    max="20"
                    .value=${String(this._columns)}
                    @input=${this._onColumnsInput}>
                </uui-input>
            </div>
        `;
  }
  _renderFileFields() {
    return pa`
            <div class="fileArea">
                <input
                    id="fileInput"
                    type="file"
                    accept=".xlsx,.xls,.csv"
                    class="hiddenInput"
                    @change=${this._onFileChange}>

                <uui-button look="secondary" @click=${this._triggerFilePicker} label="Choose file">
                    <uui-icon name="icon-upload"></uui-icon>
                    ${this._fileName ? this._fileName : "Choose file (.xlsx, .xls, .csv)"}
                </uui-button>

                ${this._parseError ? pa`<p class="error">${this._parseError}</p>` : null}

                ${this._parsed ? pa`
                        <div class="preview">
                            <uui-icon name="icon-check"></uui-icon>
                            <span>
                                Detected <strong>${this._parsed.columnNames.length}</strong> columns
                                and <strong>${this._parsed.cellData.length}</strong> rows
                            </span>
                        </div>
                    ` : null}
            </div>
        `;
  }
};
Xr.styles = Is`
        .content {
            display: flex;
            flex-direction: column;
            gap: var(--uui-size-6);
            min-width: 360px;
        }

        .sourcePicker {
            display: grid;
            grid-template-columns: 1fr 1fr;
            gap: var(--uui-size-4);
        }

        .sourceOption {
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: center;
            gap: var(--uui-size-3);
            padding: var(--uui-size-6);
            border: 1px solid var(--uui-color-border);
            border-radius: var(--uui-border-radius);
            background: var(--uui-color-surface);
            color: var(--uui-color-text);
            cursor: pointer;
            transition: border-color 120ms ease-in-out, background-color 120ms ease-in-out;
            font-size: var(--uui-type-small-size);
        }

        .sourceOption:hover {
            background: var(--uui-color-surface-alt);
            border-color: var(--uui-color-border-emphasis);
        }

        .sourceOption.selected {
            border-color: var(--uui-color-selected);
            background: color-mix(in srgb, var(--uui-color-selected) 8%, transparent);
            color: var(--uui-color-selected);
        }

        .sourceOption uui-icon {
            font-size: 1.5rem;
        }

        .fields {
            display: grid;
            gap: var(--uui-size-4);
        }

        .fileArea {
            display: flex;
            flex-direction: column;
            gap: var(--uui-size-4);
        }

        .hiddenInput {
            display: none;
        }

        .preview {
            display: flex;
            align-items: center;
            gap: var(--uui-size-3);
            color: var(--uui-color-positive-emphasis, green);
            font-size: var(--uui-type-small-size);
        }

        .error {
            color: var(--uui-color-danger-emphasis);
            font-size: var(--uui-type-small-size);
            margin: 0;
        }
    `;
da([
  Aa()
], Xr.prototype, "_source", 2);
da([
  Aa()
], Xr.prototype, "_rows", 2);
da([
  Aa()
], Xr.prototype, "_columns", 2);
da([
  Aa()
], Xr.prototype, "_fileName", 2);
da([
  Aa()
], Xr.prototype, "_parsed", 2);
da([
  Aa()
], Xr.prototype, "_parseError", 2);
Xr = da([
  Ns("webwonders-table-create-modal")
], Xr);
export {
  Xr as WebwondersTableCreateModalElement,
  Xr as element
};
//# sourceMappingURL=table-create-modal.element-D-iNcXo_.js.map
