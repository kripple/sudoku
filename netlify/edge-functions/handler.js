var Ps = Object.create, Je = Object.defineProperty, Ts = Object.getOwnPropertyDescriptor, Es = Object.getOwnPropertyNames, Cs = Object.getPrototypeOf, As = Object.prototype.hasOwnProperty, Ls = (i, e, t) => e in i ? Je(i, e, { enumerable: !0, configurable: !0, writable: !0, value: t }) : i[e] = t, g = (i, e) => Je(i, "name", { value: e, configurable: !0 }), be = (i, e) => () => (i && (e = i(i = 0)), e), ee = (i, e) => () => (e || i((e = { exports: {} }).exports, e), e.exports), Ce = (i, e) => {
  for (var t in e) Je(i, t, {
    get: e[t],
    enumerable: !0
  });
}, Ki = (i, e, t, r) => {
  if (e && typeof e == "object" || typeof e == "function") for (let n of Es(e)) !As.call(i, n) && n !== t && Je(i, n, { get: () => e[n], enumerable: !(r = Ts(e, n)) || r.enumerable });
  return i;
}, ke = (i, e, t) => (t = i != null ? Ps(Cs(i)) : {}, Ki(e || !i || !i.__esModule ? Je(t, "default", { value: i, enumerable: !0 }) : t, i)), fe = (i) => Ki(Je({}, "__esModule", { value: !0 }), i), H = (i, e, t) => Ls(i, typeof e != "symbol" ? e + "" : e, t), xs = ee((i) => {
  V(), i.byteLength = d, i.toByteArray = f, i.fromByteArray = v;
  var e = [], t = [], r = typeof Uint8Array < "u" ? Uint8Array : Array, n = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/";
  for (s = 0, u = n.length; s < u; ++s) e[s] = n[s], t[n.charCodeAt(s)] = s;
  var s, u;
  t[45] = 62, t[95] = 63;
  function a(l) {
    var h = l.length;
    if (h % 4 > 0) throw new Error("Invalid string. Length must be a multiple of 4");
    var b = l.indexOf("=");
    b === -1 && (b = h);
    var S = b === h ? 0 : 4 - b % 4;
    return [b, S];
  }
  g(a, "getLens");
  function d(l) {
    var h = a(l), b = h[0], S = h[1];
    return (b + S) * 3 / 4 - S;
  }
  g(d, "byteLength");
  function m(l, h, b) {
    return (h + b) * 3 / 4 - b;
  }
  g(m, "_byteLength");
  function f(l) {
    var h, b = a(l), S = b[0], E = b[1], T = new r(m(l, S, E)), N = 0, O = E > 0 ? S - 4 : S, _;
    for (_ = 0; _ < O; _ += 4) h = t[l.charCodeAt(_)] << 18 | t[l.charCodeAt(_ + 1)] << 12 | t[l.charCodeAt(_ + 2)] << 6 | t[l.charCodeAt(_ + 3)], T[N++] = h >> 16 & 255, T[N++] = h >> 8 & 255, T[N++] = h & 255;
    return E === 2 && (h = t[l.charCodeAt(
      _
    )] << 2 | t[l.charCodeAt(_ + 1)] >> 4, T[N++] = h & 255), E === 1 && (h = t[l.charCodeAt(_)] << 10 | t[l.charCodeAt(_ + 1)] << 4 | t[l.charCodeAt(_ + 2)] >> 2, T[N++] = h >> 8 & 255, T[N++] = h & 255), T;
  }
  g(f, "toByteArray");
  function w(l) {
    return e[l >> 18 & 63] + e[l >> 12 & 63] + e[l >> 6 & 63] + e[l & 63];
  }
  g(w, "tripletToBase64");
  function y(l, h, b) {
    for (var S, E = [], T = h; T < b; T += 3) S = (l[T] << 16 & 16711680) + (l[T + 1] << 8 & 65280) + (l[T + 2] & 255), E.push(w(S));
    return E.join("");
  }
  g(y, "encodeChunk");
  function v(l) {
    for (var h, b = l.length, S = b % 3, E = [], T = 16383, N = 0, O = b - S; N < O; N += T) E.push(y(
      l,
      N,
      N + T > O ? O : N + T
    ));
    return S === 1 ? (h = l[b - 1], E.push(e[h >> 2] + e[h << 4 & 63] + "==")) : S === 2 && (h = (l[b - 2] << 8) + l[b - 1], E.push(e[h >> 10] + e[h >> 4 & 63] + e[h << 2 & 63] + "=")), E.join("");
  }
  g(v, "fromByteArray");
}), Bs = ee((i) => {
  V(), i.read = function(e, t, r, n, s) {
    var u, a, d = s * 8 - n - 1, m = (1 << d) - 1, f = m >> 1, w = -7, y = r ? s - 1 : 0, v = r ? -1 : 1, l = e[t + y];
    for (y += v, u = l & (1 << -w) - 1, l >>= -w, w += d; w > 0; u = u * 256 + e[t + y], y += v, w -= 8) ;
    for (a = u & (1 << -w) - 1, u >>= -w, w += n; w > 0; a = a * 256 + e[t + y], y += v, w -= 8) ;
    if (u === 0) u = 1 - f;
    else {
      if (u === m) return a ? NaN : (l ? -1 : 1) * (1 / 0);
      a = a + Math.pow(2, n), u = u - f;
    }
    return (l ? -1 : 1) * a * Math.pow(2, u - n);
  }, i.write = function(e, t, r, n, s, u) {
    var a, d, m, f = u * 8 - s - 1, w = (1 << f) - 1, y = w >> 1, v = s === 23 ? Math.pow(2, -24) - Math.pow(2, -77) : 0, l = n ? 0 : u - 1, h = n ? 1 : -1, b = t < 0 || t === 0 && 1 / t < 0 ? 1 : 0;
    for (t = Math.abs(t), isNaN(t) || t === 1 / 0 ? (d = isNaN(t) ? 1 : 0, a = w) : (a = Math.floor(Math.log(t) / Math.LN2), t * (m = Math.pow(2, -a)) < 1 && (a--, m *= 2), a + y >= 1 ? t += v / m : t += v * Math.pow(2, 1 - y), t * m >= 2 && (a++, m /= 2), a + y >= w ? (d = 0, a = w) : a + y >= 1 ? (d = (t * m - 1) * Math.pow(2, s), a = a + y) : (d = t * Math.pow(2, y - 1) * Math.pow(2, s), a = 0)); s >= 8; e[r + l] = d & 255, l += h, d /= 256, s -= 8) ;
    for (a = a << s | d, f += s; f > 0; e[r + l] = a & 255, l += h, a /= 256, f -= 8) ;
    e[r + l - h] |= b * 128;
  };
}), Is = ee((i) => {
  V();
  var e = xs(), t = Bs(), r = typeof Symbol == "function" && typeof Symbol.for == "function" ? Symbol.for("nodejs.util.inspect.custom") : null;
  i.Buffer = a, i.SlowBuffer = E, i.INSPECT_MAX_BYTES = 50;
  var n = 2147483647;
  i.kMaxLength = n, a.TYPED_ARRAY_SUPPORT = s(), !a.TYPED_ARRAY_SUPPORT && typeof console < "u" && typeof console.error == "function" && console.error("This browser lacks typed array (Uint8Array) support which is required by `buffer` v5.x. Use `buffer` v4.x if you require old browser support.");
  function s() {
    try {
      let o = new Uint8Array(1), c = { foo: g(function() {
        return 42;
      }, "foo") };
      return Object.setPrototypeOf(c, Uint8Array.prototype), Object.setPrototypeOf(o, c), o.foo() === 42;
    } catch {
      return !1;
    }
  }
  g(s, "typedArraySupport"), Object.defineProperty(a.prototype, "parent", { enumerable: !0, get: g(function() {
    if (a.isBuffer(this)) return this.buffer;
  }, "get") }), Object.defineProperty(a.prototype, "offset", { enumerable: !0, get: g(function() {
    if (a.isBuffer(
      this
    )) return this.byteOffset;
  }, "get") });
  function u(o) {
    if (o > n) throw new RangeError('The value "' + o + '" is invalid for option "size"');
    let c = new Uint8Array(o);
    return Object.setPrototypeOf(c, a.prototype), c;
  }
  g(u, "createBuffer");
  function a(o, c, p) {
    if (typeof o == "number") {
      if (typeof c == "string") throw new TypeError(
        'The "string" argument must be of type string. Received type number'
      );
      return w(o);
    }
    return d(o, c, p);
  }
  g(a, "Buffer"), a.poolSize = 8192;
  function d(o, c, p) {
    if (typeof o == "string") return y(o, c);
    if (ArrayBuffer.isView(o)) return l(o);
    if (o == null) throw new TypeError("The first argument must be one of type string, Buffer, ArrayBuffer, Array, or Array-like Object. Received type " + typeof o);
    if (Ee(o, ArrayBuffer) || o && Ee(o.buffer, ArrayBuffer) || typeof SharedArrayBuffer < "u" && (Ee(o, SharedArrayBuffer) || o && Ee(
      o.buffer,
      SharedArrayBuffer
    ))) return h(o, c, p);
    if (typeof o == "number") throw new TypeError('The "value" argument must not be of type number. Received type number');
    let C = o.valueOf && o.valueOf();
    if (C != null && C !== o) return a.from(C, c, p);
    let B = b(o);
    if (B) return B;
    if (typeof Symbol < "u" && Symbol.toPrimitive != null && typeof o[Symbol.toPrimitive] == "function") return a.from(o[Symbol.toPrimitive]("string"), c, p);
    throw new TypeError("The first argument must be one of type string, Buffer, ArrayBuffer, Array, or Array-like Object. Received type " + typeof o);
  }
  g(d, "from"), a.from = function(o, c, p) {
    return d(o, c, p);
  }, Object.setPrototypeOf(
    a.prototype,
    Uint8Array.prototype
  ), Object.setPrototypeOf(a, Uint8Array);
  function m(o) {
    if (typeof o != "number") throw new TypeError(
      '"size" argument must be of type number'
    );
    if (o < 0) throw new RangeError('The value "' + o + '" is invalid for option "size"');
  }
  g(m, "assertSize");
  function f(o, c, p) {
    return m(o), o <= 0 ? u(o) : c !== void 0 ? typeof p == "string" ? u(o).fill(c, p) : u(o).fill(c) : u(o);
  }
  g(f, "alloc"), a.alloc = function(o, c, p) {
    return f(o, c, p);
  };
  function w(o) {
    return m(o), u(o < 0 ? 0 : S(o) | 0);
  }
  g(w, "allocUnsafe"), a.allocUnsafe = function(o) {
    return w(
      o
    );
  }, a.allocUnsafeSlow = function(o) {
    return w(o);
  };
  function y(o, c) {
    if ((typeof c != "string" || c === "") && (c = "utf8"), !a.isEncoding(c)) throw new TypeError("Unknown encoding: " + c);
    let p = T(o, c) | 0, C = u(p), B = C.write(
      o,
      c
    );
    return B !== p && (C = C.slice(0, B)), C;
  }
  g(y, "fromString");
  function v(o) {
    let c = o.length < 0 ? 0 : S(o.length) | 0, p = u(c);
    for (let C = 0; C < c; C += 1) p[C] = o[C] & 255;
    return p;
  }
  g(v, "fromArrayLike");
  function l(o) {
    if (Ee(o, Uint8Array)) {
      let c = new Uint8Array(o);
      return h(c.buffer, c.byteOffset, c.byteLength);
    }
    return v(o);
  }
  g(l, "fromArrayView");
  function h(o, c, p) {
    if (c < 0 || o.byteLength < c) throw new RangeError('"offset" is outside of buffer bounds');
    if (o.byteLength < c + (p || 0)) throw new RangeError('"length" is outside of buffer bounds');
    let C;
    return c === void 0 && p === void 0 ? C = new Uint8Array(o) : p === void 0 ? C = new Uint8Array(o, c) : C = new Uint8Array(
      o,
      c,
      p
    ), Object.setPrototypeOf(C, a.prototype), C;
  }
  g(h, "fromArrayBuffer");
  function b(o) {
    if (a.isBuffer(o)) {
      let c = S(o.length) | 0, p = u(c);
      return p.length === 0 || o.copy(p, 0, 0, c), p;
    }
    if (o.length !== void 0) return typeof o.length != "number" || $t(o.length) ? u(0) : v(o);
    if (o.type === "Buffer" && Array.isArray(o.data)) return v(o.data);
  }
  g(b, "fromObject");
  function S(o) {
    if (o >= n) throw new RangeError("Attempt to allocate Buffer larger than maximum size: 0x" + n.toString(16) + " bytes");
    return o | 0;
  }
  g(S, "checked");
  function E(o) {
    return +o != o && (o = 0), a.alloc(+o);
  }
  g(E, "SlowBuffer"), a.isBuffer = g(function(o) {
    return o != null && o._isBuffer === !0 && o !== a.prototype;
  }, "isBuffer"), a.compare = g(function(o, c) {
    if (Ee(o, Uint8Array) && (o = a.from(o, o.offset, o.byteLength)), Ee(c, Uint8Array) && (c = a.from(c, c.offset, c.byteLength)), !a.isBuffer(o) || !a.isBuffer(c)) throw new TypeError(
      'The "buf1", "buf2" arguments must be one of type Buffer or Uint8Array'
    );
    if (o === c) return 0;
    let p = o.length, C = c.length;
    for (let B = 0, D = Math.min(p, C); B < D; ++B) if (o[B] !== c[B]) {
      p = o[B], C = c[B];
      break;
    }
    return p < C ? -1 : C < p ? 1 : 0;
  }, "compare"), a.isEncoding = g(function(o) {
    switch (String(o).toLowerCase()) {
      case "hex":
      case "utf8":
      case "utf-8":
      case "ascii":
      case "latin1":
      case "binary":
      case "base64":
      case "ucs2":
      case "ucs-2":
      case "utf16le":
      case "utf-16le":
        return !0;
      default:
        return !1;
    }
  }, "isEncoding"), a.concat = g(function(o, c) {
    if (!Array.isArray(o)) throw new TypeError(
      '"list" argument must be an Array of Buffers'
    );
    if (o.length === 0) return a.alloc(0);
    let p;
    if (c === void 0)
      for (c = 0, p = 0; p < o.length; ++p) c += o[p].length;
    let C = a.allocUnsafe(c), B = 0;
    for (p = 0; p < o.length; ++p) {
      let D = o[p];
      if (Ee(D, Uint8Array)) B + D.length > C.length ? (a.isBuffer(D) || (D = a.from(D)), D.copy(C, B)) : Uint8Array.prototype.set.call(C, D, B);
      else if (a.isBuffer(D)) D.copy(C, B);
      else throw new TypeError('"list" argument must be an Array of Buffers');
      B += D.length;
    }
    return C;
  }, "concat");
  function T(o, c) {
    if (a.isBuffer(o)) return o.length;
    if (ArrayBuffer.isView(o) || Ee(o, ArrayBuffer)) return o.byteLength;
    if (typeof o != "string") throw new TypeError(
      'The "string" argument must be one of type string, Buffer, or ArrayBuffer. Received type ' + typeof o
    );
    let p = o.length, C = arguments.length > 2 && arguments[2] === !0;
    if (!C && p === 0) return 0;
    let B = !1;
    for (; ; ) switch (c) {
      case "ascii":
      case "latin1":
      case "binary":
        return p;
      case "utf8":
      case "utf-8":
        return Dt(o).length;
      case "ucs2":
      case "ucs-2":
      case "utf16le":
      case "utf-16le":
        return p * 2;
      case "hex":
        return p >>> 1;
      case "base64":
        return fr(o).length;
      default:
        if (B) return C ? -1 : Dt(o).length;
        c = ("" + c).toLowerCase(), B = !0;
    }
  }
  g(T, "byteLength"), a.byteLength = T;
  function N(o, c, p) {
    let C = !1;
    if ((c === void 0 || c < 0) && (c = 0), c > this.length || ((p === void 0 || p > this.length) && (p = this.length), p <= 0) || (p >>>= 0, c >>>= 0, p <= c)) return "";
    for (o || (o = "utf8"); ; ) switch (o) {
      case "hex":
        return Z(this, c, p);
      case "utf8":
      case "utf-8":
        return M(this, c, p);
      case "ascii":
        return Y(this, c, p);
      case "latin1":
      case "binary":
        return te(
          this,
          c,
          p
        );
      case "base64":
        return j(this, c, p);
      case "ucs2":
      case "ucs-2":
      case "utf16le":
      case "utf-16le":
        return we(
          this,
          c,
          p
        );
      default:
        if (C) throw new TypeError("Unknown encoding: " + o);
        o = (o + "").toLowerCase(), C = !0;
    }
  }
  g(
    N,
    "slowToString"
  ), a.prototype._isBuffer = !0;
  function O(o, c, p) {
    let C = o[c];
    o[c] = o[p], o[p] = C;
  }
  g(O, "swap"), a.prototype.swap16 = g(function() {
    let o = this.length;
    if (o % 2 !== 0) throw new RangeError("Buffer size must be a multiple of 16-bits");
    for (let c = 0; c < o; c += 2) O(this, c, c + 1);
    return this;
  }, "swap16"), a.prototype.swap32 = g(function() {
    let o = this.length;
    if (o % 4 !== 0) throw new RangeError("Buffer size must be a multiple of 32-bits");
    for (let c = 0; c < o; c += 4) O(this, c, c + 3), O(this, c + 1, c + 2);
    return this;
  }, "swap32"), a.prototype.swap64 = g(
    function() {
      let o = this.length;
      if (o % 8 !== 0) throw new RangeError("Buffer size must be a multiple of 64-bits");
      for (let c = 0; c < o; c += 8) O(this, c, c + 7), O(this, c + 1, c + 6), O(this, c + 2, c + 5), O(this, c + 3, c + 4);
      return this;
    },
    "swap64"
  ), a.prototype.toString = g(function() {
    let o = this.length;
    return o === 0 ? "" : arguments.length === 0 ? M(
      this,
      0,
      o
    ) : N.apply(this, arguments);
  }, "toString"), a.prototype.toLocaleString = a.prototype.toString, a.prototype.equals = g(function(o) {
    if (!a.isBuffer(o)) throw new TypeError("Argument must be a Buffer");
    return this === o ? !0 : a.compare(this, o) === 0;
  }, "equals"), a.prototype.inspect = g(function() {
    let o = "", c = i.INSPECT_MAX_BYTES;
    return o = this.toString("hex", 0, c).replace(/(.{2})/g, "$1 ").trim(), this.length > c && (o += " ... "), "<Buffer " + o + ">";
  }, "inspect"), r && (a.prototype[r] = a.prototype.inspect), a.prototype.compare = g(function(o, c, p, C, B) {
    if (Ee(o, Uint8Array) && (o = a.from(o, o.offset, o.byteLength)), !a.isBuffer(o)) throw new TypeError('The "target" argument must be one of type Buffer or Uint8Array. Received type ' + typeof o);
    if (c === void 0 && (c = 0), p === void 0 && (p = o ? o.length : 0), C === void 0 && (C = 0), B === void 0 && (B = this.length), c < 0 || p > o.length || C < 0 || B > this.length) throw new RangeError("out of range index");
    if (C >= B && c >= p) return 0;
    if (C >= B) return -1;
    if (c >= p) return 1;
    if (c >>>= 0, p >>>= 0, C >>>= 0, B >>>= 0, this === o) return 0;
    let D = B - C, k = p - c, ne = Math.min(D, k), le = this.slice(
      C,
      B
    ), oe = o.slice(c, p);
    for (let se = 0; se < ne; ++se) if (le[se] !== oe[se]) {
      D = le[se], k = oe[se];
      break;
    }
    return D < k ? -1 : k < D ? 1 : 0;
  }, "compare");
  function _(o, c, p, C, B) {
    if (o.length === 0) return -1;
    if (typeof p == "string" ? (C = p, p = 0) : p > 2147483647 ? p = 2147483647 : p < -2147483648 && (p = -2147483648), p = +p, $t(p) && (p = B ? 0 : o.length - 1), p < 0 && (p = o.length + p), p >= o.length) {
      if (B) return -1;
      p = o.length - 1;
    } else if (p < 0) if (B) p = 0;
    else return -1;
    if (typeof c == "string" && (c = a.from(
      c,
      C
    )), a.isBuffer(c)) return c.length === 0 ? -1 : x(o, c, p, C, B);
    if (typeof c == "number") return c = c & 255, typeof Uint8Array.prototype.indexOf == "function" ? B ? Uint8Array.prototype.indexOf.call(o, c, p) : Uint8Array.prototype.lastIndexOf.call(o, c, p) : x(o, [c], p, C, B);
    throw new TypeError("val must be string, number or Buffer");
  }
  g(_, "bidirectionalIndexOf");
  function x(o, c, p, C, B) {
    let D = 1, k = o.length, ne = c.length;
    if (C !== void 0 && (C = String(C).toLowerCase(), C === "ucs2" || C === "ucs-2" || C === "utf16le" || C === "utf-16le")) {
      if (o.length < 2 || c.length < 2) return -1;
      D = 2, k /= 2, ne /= 2, p /= 2;
    }
    function le(se, ae) {
      return D === 1 ? se[ae] : se.readUInt16BE(ae * D);
    }
    g(le, "read");
    let oe;
    if (B) {
      let se = -1;
      for (oe = p; oe < k; oe++) if (le(o, oe) === le(c, se === -1 ? 0 : oe - se)) {
        if (se === -1 && (se = oe), oe - se + 1 === ne) return se * D;
      } else se !== -1 && (oe -= oe - se), se = -1;
    } else for (p + ne > k && (p = k - ne), oe = p; oe >= 0; oe--) {
      let se = !0;
      for (let ae = 0; ae < ne; ae++) if (le(o, oe + ae) !== le(c, ae)) {
        se = !1;
        break;
      }
      if (se) return oe;
    }
    return -1;
  }
  g(x, "arrayIndexOf"), a.prototype.includes = g(function(o, c, p) {
    return this.indexOf(
      o,
      c,
      p
    ) !== -1;
  }, "includes"), a.prototype.indexOf = g(function(o, c, p) {
    return _(this, o, c, p, !0);
  }, "indexOf"), a.prototype.lastIndexOf = g(function(o, c, p) {
    return _(this, o, c, p, !1);
  }, "lastIndexOf");
  function L(o, c, p, C) {
    p = Number(p) || 0;
    let B = o.length - p;
    C ? (C = Number(C), C > B && (C = B)) : C = B;
    let D = c.length;
    C > D / 2 && (C = D / 2);
    let k;
    for (k = 0; k < C; ++k) {
      let ne = parseInt(c.substr(k * 2, 2), 16);
      if ($t(ne)) return k;
      o[p + k] = ne;
    }
    return k;
  }
  g(L, "hexWrite");
  function P(o, c, p, C) {
    return et(Dt(c, o.length - p), o, p, C);
  }
  g(P, "utf8Write");
  function q(o, c, p, C) {
    return et(Xr(c), o, p, C);
  }
  g(
    q,
    "asciiWrite"
  );
  function R(o, c, p, C) {
    return et(fr(c), o, p, C);
  }
  g(R, "base64Write");
  function F(o, c, p, C) {
    return et(
      ei(c, o.length - p),
      o,
      p,
      C
    );
  }
  g(F, "ucs2Write"), a.prototype.write = g(function(o, c, p, C) {
    if (c === void 0) C = "utf8", p = this.length, c = 0;
    else if (p === void 0 && typeof c == "string") C = c, p = this.length, c = 0;
    else if (isFinite(c))
      c = c >>> 0, isFinite(p) ? (p = p >>> 0, C === void 0 && (C = "utf8")) : (C = p, p = void 0);
    else throw new Error("Buffer.write(string, encoding, offset[, length]) is no longer supported");
    let B = this.length - c;
    if ((p === void 0 || p > B) && (p = B), o.length > 0 && (p < 0 || c < 0) || c > this.length) throw new RangeError("Attempt to write outside buffer bounds");
    C || (C = "utf8");
    let D = !1;
    for (; ; ) switch (C) {
      case "hex":
        return L(this, o, c, p);
      case "utf8":
      case "utf-8":
        return P(this, o, c, p);
      case "ascii":
      case "latin1":
      case "binary":
        return q(this, o, c, p);
      case "base64":
        return R(this, o, c, p);
      case "ucs2":
      case "ucs-2":
      case "utf16le":
      case "utf-16le":
        return F(this, o, c, p);
      default:
        if (D) throw new TypeError("Unknown encoding: " + C);
        C = ("" + C).toLowerCase(), D = !0;
    }
  }, "write"), a.prototype.toJSON = g(function() {
    return { type: "Buffer", data: Array.prototype.slice.call(this._arr || this, 0) };
  }, "toJSON");
  function j(o, c, p) {
    return c === 0 && p === o.length ? e.fromByteArray(o) : e.fromByteArray(o.slice(c, p));
  }
  g(j, "base64Slice");
  function M(o, c, p) {
    p = Math.min(o.length, p);
    let C = [], B = c;
    for (; B < p; ) {
      let D = o[B], k = null, ne = D > 239 ? 4 : D > 223 ? 3 : D > 191 ? 2 : 1;
      if (B + ne <= p) {
        let le, oe, se, ae;
        switch (ne) {
          case 1:
            D < 128 && (k = D);
            break;
          case 2:
            le = o[B + 1], (le & 192) === 128 && (ae = (D & 31) << 6 | le & 63, ae > 127 && (k = ae));
            break;
          case 3:
            le = o[B + 1], oe = o[B + 2], (le & 192) === 128 && (oe & 192) === 128 && (ae = (D & 15) << 12 | (le & 63) << 6 | oe & 63, ae > 2047 && (ae < 55296 || ae > 57343) && (k = ae));
            break;
          case 4:
            le = o[B + 1], oe = o[B + 2], se = o[B + 3], (le & 192) === 128 && (oe & 192) === 128 && (se & 192) === 128 && (ae = (D & 15) << 18 | (le & 63) << 12 | (oe & 63) << 6 | se & 63, ae > 65535 && ae < 1114112 && (k = ae));
        }
      }
      k === null ? (k = 65533, ne = 1) : k > 65535 && (k -= 65536, C.push(k >>> 10 & 1023 | 55296), k = 56320 | k & 1023), C.push(k), B += ne;
    }
    return G(C);
  }
  g(M, "utf8Slice");
  var Q = 4096;
  function G(o) {
    let c = o.length;
    if (c <= Q) return String.fromCharCode.apply(String, o);
    let p = "", C = 0;
    for (; C < c; ) p += String.fromCharCode.apply(String, o.slice(C, C += Q));
    return p;
  }
  g(G, "decodeCodePointsArray");
  function Y(o, c, p) {
    let C = "";
    p = Math.min(o.length, p);
    for (let B = c; B < p; ++B) C += String.fromCharCode(o[B] & 127);
    return C;
  }
  g(Y, "asciiSlice");
  function te(o, c, p) {
    let C = "";
    p = Math.min(o.length, p);
    for (let B = c; B < p; ++B) C += String.fromCharCode(o[B]);
    return C;
  }
  g(te, "latin1Slice");
  function Z(o, c, p) {
    let C = o.length;
    (!c || c < 0) && (c = 0), (!p || p < 0 || p > C) && (p = C);
    let B = "";
    for (let D = c; D < p; ++D) B += _s[o[D]];
    return B;
  }
  g(Z, "hexSlice");
  function we(o, c, p) {
    let C = o.slice(c, p), B = "";
    for (let D = 0; D < C.length - 1; D += 2) B += String.fromCharCode(C[D] + C[D + 1] * 256);
    return B;
  }
  g(we, "utf16leSlice"), a.prototype.slice = g(function(o, c) {
    let p = this.length;
    o = ~~o, c = c === void 0 ? p : ~~c, o < 0 ? (o += p, o < 0 && (o = 0)) : o > p && (o = p), c < 0 ? (c += p, c < 0 && (c = 0)) : c > p && (c = p), c < o && (c = o);
    let C = this.subarray(o, c);
    return Object.setPrototypeOf(C, a.prototype), C;
  }, "slice");
  function ie(o, c, p) {
    if (o % 1 !== 0 || o < 0) throw new RangeError("offset is not uint");
    if (o + c > p) throw new RangeError("Trying to access beyond buffer length");
  }
  g(ie, "checkOffset"), a.prototype.readUintLE = a.prototype.readUIntLE = g(
    function(o, c, p) {
      o = o >>> 0, c = c >>> 0, p || ie(o, c, this.length);
      let C = this[o], B = 1, D = 0;
      for (; ++D < c && (B *= 256); ) C += this[o + D] * B;
      return C;
    },
    "readUIntLE"
  ), a.prototype.readUintBE = a.prototype.readUIntBE = g(function(o, c, p) {
    o = o >>> 0, c = c >>> 0, p || ie(
      o,
      c,
      this.length
    );
    let C = this[o + --c], B = 1;
    for (; c > 0 && (B *= 256); ) C += this[o + --c] * B;
    return C;
  }, "readUIntBE"), a.prototype.readUint8 = a.prototype.readUInt8 = g(
    function(o, c) {
      return o = o >>> 0, c || ie(o, 1, this.length), this[o];
    },
    "readUInt8"
  ), a.prototype.readUint16LE = a.prototype.readUInt16LE = g(function(o, c) {
    return o = o >>> 0, c || ie(
      o,
      2,
      this.length
    ), this[o] | this[o + 1] << 8;
  }, "readUInt16LE"), a.prototype.readUint16BE = a.prototype.readUInt16BE = g(function(o, c) {
    return o = o >>> 0, c || ie(o, 2, this.length), this[o] << 8 | this[o + 1];
  }, "readUInt16BE"), a.prototype.readUint32LE = a.prototype.readUInt32LE = g(function(o, c) {
    return o = o >>> 0, c || ie(o, 4, this.length), (this[o] | this[o + 1] << 8 | this[o + 2] << 16) + this[o + 3] * 16777216;
  }, "readUInt32LE"), a.prototype.readUint32BE = a.prototype.readUInt32BE = g(function(o, c) {
    return o = o >>> 0, c || ie(o, 4, this.length), this[o] * 16777216 + (this[o + 1] << 16 | this[o + 2] << 8 | this[o + 3]);
  }, "readUInt32BE"), a.prototype.readBigUInt64LE = Ae(g(function(o) {
    o = o >>> 0, Oe(o, "offset");
    let c = this[o], p = this[o + 7];
    (c === void 0 || p === void 0) && ze(o, this.length - 8);
    let C = c + this[++o] * 2 ** 8 + this[++o] * 2 ** 16 + this[++o] * 2 ** 24, B = this[++o] + this[++o] * 2 ** 8 + this[++o] * 2 ** 16 + p * 2 ** 24;
    return BigInt(C) + (BigInt(B) << BigInt(32));
  }, "readBigUInt64LE")), a.prototype.readBigUInt64BE = Ae(g(function(o) {
    o = o >>> 0, Oe(o, "offset");
    let c = this[o], p = this[o + 7];
    (c === void 0 || p === void 0) && ze(o, this.length - 8);
    let C = c * 2 ** 24 + this[++o] * 2 ** 16 + this[++o] * 2 ** 8 + this[++o], B = this[++o] * 2 ** 24 + this[++o] * 2 ** 16 + this[++o] * 2 ** 8 + p;
    return (BigInt(C) << BigInt(
      32
    )) + BigInt(B);
  }, "readBigUInt64BE")), a.prototype.readIntLE = g(function(o, c, p) {
    o = o >>> 0, c = c >>> 0, p || ie(
      o,
      c,
      this.length
    );
    let C = this[o], B = 1, D = 0;
    for (; ++D < c && (B *= 256); ) C += this[o + D] * B;
    return B *= 128, C >= B && (C -= Math.pow(2, 8 * c)), C;
  }, "readIntLE"), a.prototype.readIntBE = g(function(o, c, p) {
    o = o >>> 0, c = c >>> 0, p || ie(o, c, this.length);
    let C = c, B = 1, D = this[o + --C];
    for (; C > 0 && (B *= 256); ) D += this[o + --C] * B;
    return B *= 128, D >= B && (D -= Math.pow(2, 8 * c)), D;
  }, "readIntBE"), a.prototype.readInt8 = g(function(o, c) {
    return o = o >>> 0, c || ie(o, 1, this.length), this[o] & 128 ? (255 - this[o] + 1) * -1 : this[o];
  }, "readInt8"), a.prototype.readInt16LE = g(function(o, c) {
    o = o >>> 0, c || ie(
      o,
      2,
      this.length
    );
    let p = this[o] | this[o + 1] << 8;
    return p & 32768 ? p | 4294901760 : p;
  }, "readInt16LE"), a.prototype.readInt16BE = g(function(o, c) {
    o = o >>> 0, c || ie(o, 2, this.length);
    let p = this[o + 1] | this[o] << 8;
    return p & 32768 ? p | 4294901760 : p;
  }, "readInt16BE"), a.prototype.readInt32LE = g(function(o, c) {
    return o = o >>> 0, c || ie(o, 4, this.length), this[o] | this[o + 1] << 8 | this[o + 2] << 16 | this[o + 3] << 24;
  }, "readInt32LE"), a.prototype.readInt32BE = g(function(o, c) {
    return o = o >>> 0, c || ie(o, 4, this.length), this[o] << 24 | this[o + 1] << 16 | this[o + 2] << 8 | this[o + 3];
  }, "readInt32BE"), a.prototype.readBigInt64LE = Ae(g(function(o) {
    o = o >>> 0, Oe(o, "offset");
    let c = this[o], p = this[o + 7];
    (c === void 0 || p === void 0) && ze(o, this.length - 8);
    let C = this[o + 4] + this[o + 5] * 2 ** 8 + this[o + 6] * 2 ** 16 + (p << 24);
    return (BigInt(C) << BigInt(
      32
    )) + BigInt(c + this[++o] * 2 ** 8 + this[++o] * 2 ** 16 + this[++o] * 2 ** 24);
  }, "readBigInt64LE")), a.prototype.readBigInt64BE = Ae(g(function(o) {
    o = o >>> 0, Oe(o, "offset");
    let c = this[o], p = this[o + 7];
    (c === void 0 || p === void 0) && ze(o, this.length - 8);
    let C = (c << 24) + this[++o] * 2 ** 16 + this[++o] * 2 ** 8 + this[++o];
    return (BigInt(C) << BigInt(32)) + BigInt(
      this[++o] * 2 ** 24 + this[++o] * 2 ** 16 + this[++o] * 2 ** 8 + p
    );
  }, "readBigInt64BE")), a.prototype.readFloatLE = g(function(o, c) {
    return o = o >>> 0, c || ie(o, 4, this.length), t.read(this, o, !0, 23, 4);
  }, "readFloatLE"), a.prototype.readFloatBE = g(function(o, c) {
    return o = o >>> 0, c || ie(o, 4, this.length), t.read(this, o, !1, 23, 4);
  }, "readFloatBE"), a.prototype.readDoubleLE = g(function(o, c) {
    return o = o >>> 0, c || ie(o, 8, this.length), t.read(this, o, !0, 52, 8);
  }, "readDoubleLE"), a.prototype.readDoubleBE = g(function(o, c) {
    return o = o >>> 0, c || ie(o, 8, this.length), t.read(
      this,
      o,
      !1,
      52,
      8
    );
  }, "readDoubleBE");
  function ue(o, c, p, C, B, D) {
    if (!a.isBuffer(o)) throw new TypeError('"buffer" argument must be a Buffer instance');
    if (c > B || c < D) throw new RangeError('"value" argument is out of bounds');
    if (p + C > o.length) throw new RangeError("Index out of range");
  }
  g(ue, "checkInt"), a.prototype.writeUintLE = a.prototype.writeUIntLE = g(function(o, c, p, C) {
    if (o = +o, c = c >>> 0, p = p >>> 0, !C) {
      let k = Math.pow(2, 8 * p) - 1;
      ue(
        this,
        o,
        c,
        p,
        k,
        0
      );
    }
    let B = 1, D = 0;
    for (this[c] = o & 255; ++D < p && (B *= 256); ) this[c + D] = o / B & 255;
    return c + p;
  }, "writeUIntLE"), a.prototype.writeUintBE = a.prototype.writeUIntBE = g(function(o, c, p, C) {
    if (o = +o, c = c >>> 0, p = p >>> 0, !C) {
      let k = Math.pow(2, 8 * p) - 1;
      ue(this, o, c, p, k, 0);
    }
    let B = p - 1, D = 1;
    for (this[c + B] = o & 255; --B >= 0 && (D *= 256); ) this[c + B] = o / D & 255;
    return c + p;
  }, "writeUIntBE"), a.prototype.writeUint8 = a.prototype.writeUInt8 = g(function(o, c, p) {
    return o = +o, c = c >>> 0, p || ue(this, o, c, 1, 255, 0), this[c] = o & 255, c + 1;
  }, "writeUInt8"), a.prototype.writeUint16LE = a.prototype.writeUInt16LE = g(function(o, c, p) {
    return o = +o, c = c >>> 0, p || ue(this, o, c, 2, 65535, 0), this[c] = o & 255, this[c + 1] = o >>> 8, c + 2;
  }, "writeUInt16LE"), a.prototype.writeUint16BE = a.prototype.writeUInt16BE = g(function(o, c, p) {
    return o = +o, c = c >>> 0, p || ue(this, o, c, 2, 65535, 0), this[c] = o >>> 8, this[c + 1] = o & 255, c + 2;
  }, "writeUInt16BE"), a.prototype.writeUint32LE = a.prototype.writeUInt32LE = g(function(o, c, p) {
    return o = +o, c = c >>> 0, p || ue(
      this,
      o,
      c,
      4,
      4294967295,
      0
    ), this[c + 3] = o >>> 24, this[c + 2] = o >>> 16, this[c + 1] = o >>> 8, this[c] = o & 255, c + 4;
  }, "writeUInt32LE"), a.prototype.writeUint32BE = a.prototype.writeUInt32BE = g(function(o, c, p) {
    return o = +o, c = c >>> 0, p || ue(
      this,
      o,
      c,
      4,
      4294967295,
      0
    ), this[c] = o >>> 24, this[c + 1] = o >>> 16, this[c + 2] = o >>> 8, this[c + 3] = o & 255, c + 4;
  }, "writeUInt32BE");
  function Ze(o, c, p, C, B) {
    hr(c, C, B, o, p, 7);
    let D = Number(c & BigInt(4294967295));
    o[p++] = D, D = D >> 8, o[p++] = D, D = D >> 8, o[p++] = D, D = D >> 8, o[p++] = D;
    let k = Number(c >> BigInt(32) & BigInt(4294967295));
    return o[p++] = k, k = k >> 8, o[p++] = k, k = k >> 8, o[p++] = k, k = k >> 8, o[p++] = k, p;
  }
  g(Ze, "wrtBigUInt64LE");
  function Xe(o, c, p, C, B) {
    hr(c, C, B, o, p, 7);
    let D = Number(c & BigInt(4294967295));
    o[p + 7] = D, D = D >> 8, o[p + 6] = D, D = D >> 8, o[p + 5] = D, D = D >> 8, o[p + 4] = D;
    let k = Number(c >> BigInt(32) & BigInt(4294967295));
    return o[p + 3] = k, k = k >> 8, o[p + 2] = k, k = k >> 8, o[p + 1] = k, k = k >> 8, o[p] = k, p + 8;
  }
  g(Xe, "wrtBigUInt64BE"), a.prototype.writeBigUInt64LE = Ae(g(function(o, c = 0) {
    return Ze(this, o, c, BigInt(0), BigInt("0xffffffffffffffff"));
  }, "writeBigUInt64LE")), a.prototype.writeBigUInt64BE = Ae(g(function(o, c = 0) {
    return Xe(this, o, c, BigInt(0), BigInt(
      "0xffffffffffffffff"
    ));
  }, "writeBigUInt64BE")), a.prototype.writeIntLE = g(function(o, c, p, C) {
    if (o = +o, c = c >>> 0, !C) {
      let ne = Math.pow(2, 8 * p - 1);
      ue(this, o, c, p, ne - 1, -ne);
    }
    let B = 0, D = 1, k = 0;
    for (this[c] = o & 255; ++B < p && (D *= 256); )
      o < 0 && k === 0 && this[c + B - 1] !== 0 && (k = 1), this[c + B] = (o / D >> 0) - k & 255;
    return c + p;
  }, "writeIntLE"), a.prototype.writeIntBE = g(function(o, c, p, C) {
    if (o = +o, c = c >>> 0, !C) {
      let ne = Math.pow(2, 8 * p - 1);
      ue(this, o, c, p, ne - 1, -ne);
    }
    let B = p - 1, D = 1, k = 0;
    for (this[c + B] = o & 255; --B >= 0 && (D *= 256); ) o < 0 && k === 0 && this[c + B + 1] !== 0 && (k = 1), this[c + B] = (o / D >> 0) - k & 255;
    return c + p;
  }, "writeIntBE"), a.prototype.writeInt8 = g(function(o, c, p) {
    return o = +o, c = c >>> 0, p || ue(this, o, c, 1, 127, -128), o < 0 && (o = 255 + o + 1), this[c] = o & 255, c + 1;
  }, "writeInt8"), a.prototype.writeInt16LE = g(function(o, c, p) {
    return o = +o, c = c >>> 0, p || ue(this, o, c, 2, 32767, -32768), this[c] = o & 255, this[c + 1] = o >>> 8, c + 2;
  }, "writeInt16LE"), a.prototype.writeInt16BE = g(function(o, c, p) {
    return o = +o, c = c >>> 0, p || ue(this, o, c, 2, 32767, -32768), this[c] = o >>> 8, this[c + 1] = o & 255, c + 2;
  }, "writeInt16BE"), a.prototype.writeInt32LE = g(function(o, c, p) {
    return o = +o, c = c >>> 0, p || ue(
      this,
      o,
      c,
      4,
      2147483647,
      -2147483648
    ), this[c] = o & 255, this[c + 1] = o >>> 8, this[c + 2] = o >>> 16, this[c + 3] = o >>> 24, c + 4;
  }, "writeInt32LE"), a.prototype.writeInt32BE = g(function(o, c, p) {
    return o = +o, c = c >>> 0, p || ue(
      this,
      o,
      c,
      4,
      2147483647,
      -2147483648
    ), o < 0 && (o = 4294967295 + o + 1), this[c] = o >>> 24, this[c + 1] = o >>> 16, this[c + 2] = o >>> 8, this[c + 3] = o & 255, c + 4;
  }, "writeInt32BE"), a.prototype.writeBigInt64LE = Ae(g(function(o, c = 0) {
    return Ze(this, o, c, -BigInt("0x8000000000000000"), BigInt("0x7fffffffffffffff"));
  }, "writeBigInt64LE")), a.prototype.writeBigInt64BE = Ae(
    g(function(o, c = 0) {
      return Xe(this, o, c, -BigInt("0x8000000000000000"), BigInt("0x7fffffffffffffff"));
    }, "writeBigInt64BE")
  );
  function ar(o, c, p, C, B, D) {
    if (p + C > o.length) throw new RangeError("Index out of range");
    if (p < 0) throw new RangeError("Index out of range");
  }
  g(ar, "checkIEEE754");
  function ur(o, c, p, C, B) {
    return c = +c, p = p >>> 0, B || ar(o, c, p, 4), t.write(o, c, p, C, 23, 4), p + 4;
  }
  g(
    ur,
    "writeFloat"
  ), a.prototype.writeFloatLE = g(function(o, c, p) {
    return ur(this, o, c, !0, p);
  }, "writeFloatLE"), a.prototype.writeFloatBE = g(function(o, c, p) {
    return ur(this, o, c, !1, p);
  }, "writeFloatBE");
  function cr(o, c, p, C, B) {
    return c = +c, p = p >>> 0, B || ar(o, c, p, 8), t.write(
      o,
      c,
      p,
      C,
      52,
      8
    ), p + 8;
  }
  g(cr, "writeDouble"), a.prototype.writeDoubleLE = g(function(o, c, p) {
    return cr(this, o, c, !0, p);
  }, "writeDoubleLE"), a.prototype.writeDoubleBE = g(function(o, c, p) {
    return cr(this, o, c, !1, p);
  }, "writeDoubleBE"), a.prototype.copy = g(function(o, c, p, C) {
    if (!a.isBuffer(o)) throw new TypeError("argument should be a Buffer");
    if (p || (p = 0), !C && C !== 0 && (C = this.length), c >= o.length && (c = o.length), c || (c = 0), C > 0 && C < p && (C = p), C === p || o.length === 0 || this.length === 0) return 0;
    if (c < 0) throw new RangeError("targetStart out of bounds");
    if (p < 0 || p >= this.length) throw new RangeError("Index out of range");
    if (C < 0) throw new RangeError("sourceEnd out of bounds");
    C > this.length && (C = this.length), o.length - c < C - p && (C = o.length - c + p);
    let B = C - p;
    return this === o && typeof Uint8Array.prototype.copyWithin == "function" ? this.copyWithin(c, p, C) : Uint8Array.prototype.set.call(o, this.subarray(p, C), c), B;
  }, "copy"), a.prototype.fill = g(function(o, c, p, C) {
    if (typeof o == "string") {
      if (typeof c == "string" ? (C = c, c = 0, p = this.length) : typeof p == "string" && (C = p, p = this.length), C !== void 0 && typeof C != "string") throw new TypeError("encoding must be a string");
      if (typeof C == "string" && !a.isEncoding(C)) throw new TypeError(
        "Unknown encoding: " + C
      );
      if (o.length === 1) {
        let D = o.charCodeAt(0);
        (C === "utf8" && D < 128 || C === "latin1") && (o = D);
      }
    } else typeof o == "number" ? o = o & 255 : typeof o == "boolean" && (o = Number(o));
    if (c < 0 || this.length < c || this.length < p) throw new RangeError("Out of range index");
    if (p <= c) return this;
    c = c >>> 0, p = p === void 0 ? this.length : p >>> 0, o || (o = 0);
    let B;
    if (typeof o == "number") for (B = c; B < p; ++B) this[B] = o;
    else {
      let D = a.isBuffer(o) ? o : a.from(
        o,
        C
      ), k = D.length;
      if (k === 0) throw new TypeError('The value "' + o + '" is invalid for argument "value"');
      for (B = 0; B < p - c; ++B) this[B + c] = D[B % k];
    }
    return this;
  }, "fill");
  var Ue = {};
  function qt(o, c, p) {
    var C;
    Ue[o] = (C = class extends p {
      constructor() {
        super(), Object.defineProperty(this, "message", { value: c.apply(this, arguments), writable: !0, configurable: !0 }), this.name = `${this.name} [${o}]`, this.stack, delete this.name;
      }
      get code() {
        return o;
      }
      set code(B) {
        Object.defineProperty(
          this,
          "code",
          { configurable: !0, enumerable: !0, value: B, writable: !0 }
        );
      }
      toString() {
        return `${this.name} [${o}]: ${this.message}`;
      }
    }, g(C, "NodeError"), C);
  }
  g(qt, "E"), qt("ERR_BUFFER_OUT_OF_BOUNDS", function(o) {
    return o ? `${o} is outside of buffer bounds` : "Attempt to access memory outside buffer bounds";
  }, RangeError), qt(
    "ERR_INVALID_ARG_TYPE",
    function(o, c) {
      return `The "${o}" argument must be of type number. Received type ${typeof c}`;
    },
    TypeError
  ), qt("ERR_OUT_OF_RANGE", function(o, c, p) {
    let C = `The value of "${o}" is out of range.`, B = p;
    return Number.isInteger(p) && Math.abs(p) > 2 ** 32 ? B = lr(String(p)) : typeof p == "bigint" && (B = String(
      p
    ), (p > BigInt(2) ** BigInt(32) || p < -(BigInt(2) ** BigInt(32))) && (B = lr(B)), B += "n"), C += ` It must be ${c}. Received ${B}`, C;
  }, RangeError);
  function lr(o) {
    let c = "", p = o.length, C = o[0] === "-" ? 1 : 0;
    for (; p >= C + 4; p -= 3) c = `_${o.slice(p - 3, p)}${c}`;
    return `${o.slice(0, p)}${c}`;
  }
  g(lr, "addNumericalSeparator");
  function Yr(o, c, p) {
    Oe(c, "offset"), (o[c] === void 0 || o[c + p] === void 0) && ze(c, o.length - (p + 1));
  }
  g(Yr, "checkBounds");
  function hr(o, c, p, C, B, D) {
    if (o > p || o < c) {
      let k = typeof c == "bigint" ? "n" : "", ne;
      throw D > 3 ? c === 0 || c === BigInt(0) ? ne = `>= 0${k} and < 2${k} ** ${(D + 1) * 8}${k}` : ne = `>= -(2${k} ** ${(D + 1) * 8 - 1}${k}) and < 2 ** ${(D + 1) * 8 - 1}${k}` : ne = `>= ${c}${k} and <= ${p}${k}`, new Ue.ERR_OUT_OF_RANGE("value", ne, o);
    }
    Yr(C, B, D);
  }
  g(hr, "checkIntBI");
  function Oe(o, c) {
    if (typeof o != "number") throw new Ue.ERR_INVALID_ARG_TYPE(c, "number", o);
  }
  g(Oe, "validateNumber");
  function ze(o, c, p) {
    throw Math.floor(o) !== o ? (Oe(o, p), new Ue.ERR_OUT_OF_RANGE(p || "offset", "an integer", o)) : c < 0 ? new Ue.ERR_BUFFER_OUT_OF_BOUNDS() : new Ue.ERR_OUT_OF_RANGE(p || "offset", `>= ${p ? 1 : 0} and <= ${c}`, o);
  }
  g(ze, "boundsError");
  var Ss = /[^+/0-9A-Za-z-_]/g;
  function Zr(o) {
    if (o = o.split("=")[0], o = o.trim().replace(Ss, ""), o.length < 2) return "";
    for (; o.length % 4 !== 0; ) o = o + "=";
    return o;
  }
  g(Zr, "base64clean");
  function Dt(o, c) {
    c = c || 1 / 0;
    let p, C = o.length, B = null, D = [];
    for (let k = 0; k < C; ++k) {
      if (p = o.charCodeAt(k), p > 55295 && p < 57344) {
        if (!B) {
          if (p > 56319) {
            (c -= 3) > -1 && D.push(239, 191, 189);
            continue;
          } else if (k + 1 === C) {
            (c -= 3) > -1 && D.push(239, 191, 189);
            continue;
          }
          B = p;
          continue;
        }
        if (p < 56320) {
          (c -= 3) > -1 && D.push(239, 191, 189), B = p;
          continue;
        }
        p = (B - 55296 << 10 | p - 56320) + 65536;
      } else B && (c -= 3) > -1 && D.push(239, 191, 189);
      if (B = null, p < 128) {
        if ((c -= 1) < 0) break;
        D.push(p);
      } else if (p < 2048) {
        if ((c -= 2) < 0) break;
        D.push(p >> 6 | 192, p & 63 | 128);
      } else if (p < 65536) {
        if ((c -= 3) < 0) break;
        D.push(p >> 12 | 224, p >> 6 & 63 | 128, p & 63 | 128);
      } else if (p < 1114112) {
        if ((c -= 4) < 0) break;
        D.push(p >> 18 | 240, p >> 12 & 63 | 128, p >> 6 & 63 | 128, p & 63 | 128);
      } else throw new Error("Invalid code point");
    }
    return D;
  }
  g(Dt, "utf8ToBytes");
  function Xr(o) {
    let c = [];
    for (let p = 0; p < o.length; ++p) c.push(o.charCodeAt(p) & 255);
    return c;
  }
  g(
    Xr,
    "asciiToBytes"
  );
  function ei(o, c) {
    let p, C, B, D = [];
    for (let k = 0; k < o.length && !((c -= 2) < 0); ++k) p = o.charCodeAt(
      k
    ), C = p >> 8, B = p % 256, D.push(B), D.push(C);
    return D;
  }
  g(ei, "utf16leToBytes");
  function fr(o) {
    return e.toByteArray(
      Zr(o)
    );
  }
  g(fr, "base64ToBytes");
  function et(o, c, p, C) {
    let B;
    for (B = 0; B < C && !(B + p >= c.length || B >= o.length); ++B)
      c[B + p] = o[B];
    return B;
  }
  g(et, "blitBuffer");
  function Ee(o, c) {
    return o instanceof c || o != null && o.constructor != null && o.constructor.name != null && o.constructor.name === c.name;
  }
  g(Ee, "isInstance");
  function $t(o) {
    return o !== o;
  }
  g($t, "numberIsNaN");
  var _s = function() {
    let o = "0123456789abcdef", c = new Array(256);
    for (let p = 0; p < 16; ++p) {
      let C = p * 16;
      for (let B = 0; B < 16; ++B) c[C + B] = o[p] + o[B];
    }
    return c;
  }();
  function Ae(o) {
    return typeof BigInt > "u" ? ti : o;
  }
  g(Ae, "defineBigIntMethod");
  function ti() {
    throw new Error("BigInt not supported");
  }
  g(ti, "BufferBigIntNotDefined");
}), Xt, Rr, K, X, V = be(() => {
  Xt = globalThis, Rr = globalThis.setImmediate ?? ((i) => setTimeout(i, 0)), K = typeof globalThis.Buffer == "function" && typeof globalThis.Buffer.allocUnsafe == "function" ? globalThis.Buffer : Is().Buffer, X = globalThis.process ?? {}, X.env ?? (X.env = {});
  try {
    X.nextTick(() => {
    });
  } catch {
    let i = Promise.resolve();
    X.nextTick = i.then.bind(i);
  }
}), Qe = ee((i, e) => {
  V();
  var t = typeof Reflect == "object" ? Reflect : null, r = t && typeof t.apply == "function" ? t.apply : g(function(_, x, L) {
    return Function.prototype.apply.call(_, x, L);
  }, "ReflectApply"), n;
  t && typeof t.ownKeys == "function" ? n = t.ownKeys : Object.getOwnPropertySymbols ? n = g(function(_) {
    return Object.getOwnPropertyNames(_).concat(Object.getOwnPropertySymbols(_));
  }, "ReflectOwnKeys") : n = g(function(_) {
    return Object.getOwnPropertyNames(_);
  }, "ReflectOwnKeys");
  function s(_) {
    console && console.warn && console.warn(_);
  }
  g(
    s,
    "ProcessEmitWarning"
  );
  var u = Number.isNaN || g(function(_) {
    return _ !== _;
  }, "NumberIsNaN");
  function a() {
    a.init.call(this);
  }
  g(a, "EventEmitter"), e.exports = a, e.exports.once = T, a.EventEmitter = a, a.prototype._events = void 0, a.prototype._eventsCount = 0, a.prototype._maxListeners = void 0;
  var d = 10;
  function m(_) {
    if (typeof _ != "function") throw new TypeError('The "listener" argument must be of type Function. Received type ' + typeof _);
  }
  g(m, "checkListener"), Object.defineProperty(a, "defaultMaxListeners", { enumerable: !0, get: g(function() {
    return d;
  }, "get"), set: g(
    function(_) {
      if (typeof _ != "number" || _ < 0 || u(_)) throw new RangeError('The value of "defaultMaxListeners" is out of range. It must be a non-negative number. Received ' + _ + ".");
      d = _;
    },
    "set"
  ) }), a.init = function() {
    (this._events === void 0 || this._events === Object.getPrototypeOf(this)._events) && (this._events = /* @__PURE__ */ Object.create(null), this._eventsCount = 0), this._maxListeners = this._maxListeners || void 0;
  }, a.prototype.setMaxListeners = g(function(_) {
    if (typeof _ != "number" || _ < 0 || u(_)) throw new RangeError('The value of "n" is out of range. It must be a non-negative number. Received ' + _ + ".");
    return this._maxListeners = _, this;
  }, "setMaxListeners");
  function f(_) {
    return _._maxListeners === void 0 ? a.defaultMaxListeners : _._maxListeners;
  }
  g(f, "_getMaxListeners"), a.prototype.getMaxListeners = g(function() {
    return f(this);
  }, "getMaxListeners"), a.prototype.emit = g(function(_) {
    for (var x = [], L = 1; L < arguments.length; L++) x.push(arguments[L]);
    var P = _ === "error", q = this._events;
    if (q !== void 0) P = P && q.error === void 0;
    else if (!P) return !1;
    if (P) {
      var R;
      if (x.length > 0 && (R = x[0]), R instanceof Error) throw R;
      var F = new Error("Unhandled error." + (R ? " (" + R.message + ")" : ""));
      throw F.context = R, F;
    }
    var j = q[_];
    if (j === void 0) return !1;
    if (typeof j == "function") r(j, this, x);
    else for (var M = j.length, Q = b(j, M), L = 0; L < M; ++L) r(Q[L], this, x);
    return !0;
  }, "emit");
  function w(_, x, L, P) {
    var q, R, F;
    if (m(
      L
    ), R = _._events, R === void 0 ? (R = _._events = /* @__PURE__ */ Object.create(null), _._eventsCount = 0) : (R.newListener !== void 0 && (_.emit("newListener", x, L.listener ? L.listener : L), R = _._events), F = R[x]), F === void 0) F = R[x] = L, ++_._eventsCount;
    else if (typeof F == "function" ? F = R[x] = P ? [L, F] : [F, L] : P ? F.unshift(L) : F.push(L), q = f(_), q > 0 && F.length > q && !F.warned) {
      F.warned = !0;
      var j = new Error("Possible EventEmitter memory leak detected. " + F.length + " " + String(x) + " listeners added. Use emitter.setMaxListeners() to increase limit");
      j.name = "MaxListenersExceededWarning", j.emitter = _, j.type = x, j.count = F.length, s(j);
    }
    return _;
  }
  g(w, "_addListener"), a.prototype.addListener = g(function(_, x) {
    return w(this, _, x, !1);
  }, "addListener"), a.prototype.on = a.prototype.addListener, a.prototype.prependListener = g(function(_, x) {
    return w(this, _, x, !0);
  }, "prependListener");
  function y() {
    if (!this.fired) return this.target.removeListener(this.type, this.wrapFn), this.fired = !0, arguments.length === 0 ? this.listener.call(this.target) : this.listener.apply(this.target, arguments);
  }
  g(y, "onceWrapper");
  function v(_, x, L) {
    var P = {
      fired: !1,
      wrapFn: void 0,
      target: _,
      type: x,
      listener: L
    }, q = y.bind(P);
    return q.listener = L, P.wrapFn = q, q;
  }
  g(v, "_onceWrap"), a.prototype.once = g(function(_, x) {
    return m(x), this.on(_, v(this, _, x)), this;
  }, "once"), a.prototype.prependOnceListener = g(function(_, x) {
    return m(x), this.prependListener(_, v(this, _, x)), this;
  }, "prependOnceListener"), a.prototype.removeListener = g(function(_, x) {
    var L, P, q, R, F;
    if (m(x), P = this._events, P === void 0) return this;
    if (L = P[_], L === void 0) return this;
    if (L === x || L.listener === x) --this._eventsCount === 0 ? this._events = /* @__PURE__ */ Object.create(null) : (delete P[_], P.removeListener && this.emit("removeListener", _, L.listener || x));
    else if (typeof L != "function") {
      for (q = -1, R = L.length - 1; R >= 0; R--) if (L[R] === x || L[R].listener === x) {
        F = L[R].listener, q = R;
        break;
      }
      if (q < 0) return this;
      q === 0 ? L.shift() : S(L, q), L.length === 1 && (P[_] = L[0]), P.removeListener !== void 0 && this.emit("removeListener", _, F || x);
    }
    return this;
  }, "removeListener"), a.prototype.off = a.prototype.removeListener, a.prototype.removeAllListeners = g(function(_) {
    var x, L, P;
    if (L = this._events, L === void 0) return this;
    if (L.removeListener === void 0) return arguments.length === 0 ? (this._events = /* @__PURE__ */ Object.create(null), this._eventsCount = 0) : L[_] !== void 0 && (--this._eventsCount === 0 ? this._events = /* @__PURE__ */ Object.create(null) : delete L[_]), this;
    if (arguments.length === 0) {
      var q = Object.keys(L), R;
      for (P = 0; P < q.length; ++P) R = q[P], R !== "removeListener" && this.removeAllListeners(
        R
      );
      return this.removeAllListeners("removeListener"), this._events = /* @__PURE__ */ Object.create(null), this._eventsCount = 0, this;
    }
    if (x = L[_], typeof x == "function") this.removeListener(_, x);
    else if (x !== void 0) for (P = x.length - 1; P >= 0; P--) this.removeListener(_, x[P]);
    return this;
  }, "removeAllListeners");
  function l(_, x, L) {
    var P = _._events;
    if (P === void 0) return [];
    var q = P[x];
    return q === void 0 ? [] : typeof q == "function" ? L ? [q.listener || q] : [q] : L ? E(q) : b(q, q.length);
  }
  g(l, "_listeners"), a.prototype.listeners = g(function(_) {
    return l(this, _, !0);
  }, "listeners"), a.prototype.rawListeners = g(function(_) {
    return l(this, _, !1);
  }, "rawListeners"), a.listenerCount = function(_, x) {
    return typeof _.listenerCount == "function" ? _.listenerCount(x) : h.call(_, x);
  }, a.prototype.listenerCount = h;
  function h(_) {
    var x = this._events;
    if (x !== void 0) {
      var L = x[_];
      if (typeof L == "function")
        return 1;
      if (L !== void 0) return L.length;
    }
    return 0;
  }
  g(h, "listenerCount"), a.prototype.eventNames = g(function() {
    return this._eventsCount > 0 ? n(this._events) : [];
  }, "eventNames");
  function b(_, x) {
    for (var L = new Array(x), P = 0; P < x; ++P) L[P] = _[P];
    return L;
  }
  g(b, "arrayClone");
  function S(_, x) {
    for (; x + 1 < _.length; x++) _[x] = _[x + 1];
    _.pop();
  }
  g(S, "spliceOne");
  function E(_) {
    for (var x = new Array(_.length), L = 0; L < x.length; ++L) x[L] = _[L].listener || _[L];
    return x;
  }
  g(E, "unwrapListeners");
  function T(_, x) {
    return new Promise(function(L, P) {
      function q(F) {
        _.removeListener(x, R), P(F);
      }
      g(q, "errorListener");
      function R() {
        typeof _.removeListener == "function" && _.removeListener("error", q), L([].slice.call(arguments));
      }
      g(R, "resolver"), O(_, x, R, { once: !0 }), x !== "error" && N(_, q, { once: !0 });
    });
  }
  g(T, "once");
  function N(_, x, L) {
    typeof _.on == "function" && O(_, "error", x, L);
  }
  g(
    N,
    "addErrorHandlerIfEventEmitter"
  );
  function O(_, x, L, P) {
    if (typeof _.on == "function") P.once ? _.once(x, L) : _.on(x, L);
    else if (typeof _.addEventListener == "function") _.addEventListener(x, g(function q(R) {
      P.once && _.removeEventListener(x, q), L(R);
    }, "wrapListener"));
    else throw new TypeError('The "emitter" argument must be of type EventEmitter. Received type ' + typeof _);
  }
  g(O, "eventTargetAgnosticAddListener");
}), Hi = {};
Ce(Hi, { Socket: () => Bt, isIP: () => Ji });
function Ji(i) {
  return 0;
}
var ri, dr, tt, Bt, Nt = be(() => {
  V(), ri = ke(Qe(), 1), g(Ji, "isIP"), dr = /^[^.]+\./, tt = class W extends ri.EventEmitter {
    constructor() {
      super(...arguments), H(this, "opts", {}), H(this, "connecting", !1), H(this, "pending", !0), H(
        this,
        "writable",
        !0
      ), H(this, "encrypted", !1), H(this, "authorized", !1), H(this, "destroyed", !1), H(this, "ws", null), H(this, "writeBuffer"), H(this, "tlsState", 0), H(this, "tlsRead"), H(this, "tlsWrite");
    }
    static get poolQueryViaFetch() {
      return W.opts.poolQueryViaFetch ?? W.defaults.poolQueryViaFetch;
    }
    static set poolQueryViaFetch(e) {
      W.opts.poolQueryViaFetch = e;
    }
    static get fetchEndpoint() {
      return W.opts.fetchEndpoint ?? W.defaults.fetchEndpoint;
    }
    static set fetchEndpoint(e) {
      W.opts.fetchEndpoint = e;
    }
    static get fetchConnectionCache() {
      return !0;
    }
    static set fetchConnectionCache(e) {
      console.warn("The `fetchConnectionCache` option is deprecated (now always `true`)");
    }
    static get fetchFunction() {
      return W.opts.fetchFunction ?? W.defaults.fetchFunction;
    }
    static set fetchFunction(e) {
      W.opts.fetchFunction = e;
    }
    static get webSocketConstructor() {
      return W.opts.webSocketConstructor ?? W.defaults.webSocketConstructor;
    }
    static set webSocketConstructor(e) {
      W.opts.webSocketConstructor = e;
    }
    get webSocketConstructor() {
      return this.opts.webSocketConstructor ?? W.webSocketConstructor;
    }
    set webSocketConstructor(e) {
      this.opts.webSocketConstructor = e;
    }
    static get wsProxy() {
      return W.opts.wsProxy ?? W.defaults.wsProxy;
    }
    static set wsProxy(e) {
      W.opts.wsProxy = e;
    }
    get wsProxy() {
      return this.opts.wsProxy ?? W.wsProxy;
    }
    set wsProxy(e) {
      this.opts.wsProxy = e;
    }
    static get coalesceWrites() {
      return W.opts.coalesceWrites ?? W.defaults.coalesceWrites;
    }
    static set coalesceWrites(e) {
      W.opts.coalesceWrites = e;
    }
    get coalesceWrites() {
      return this.opts.coalesceWrites ?? W.coalesceWrites;
    }
    set coalesceWrites(e) {
      this.opts.coalesceWrites = e;
    }
    static get useSecureWebSocket() {
      return W.opts.useSecureWebSocket ?? W.defaults.useSecureWebSocket;
    }
    static set useSecureWebSocket(e) {
      W.opts.useSecureWebSocket = e;
    }
    get useSecureWebSocket() {
      return this.opts.useSecureWebSocket ?? W.useSecureWebSocket;
    }
    set useSecureWebSocket(e) {
      this.opts.useSecureWebSocket = e;
    }
    static get forceDisablePgSSL() {
      return W.opts.forceDisablePgSSL ?? W.defaults.forceDisablePgSSL;
    }
    static set forceDisablePgSSL(e) {
      W.opts.forceDisablePgSSL = e;
    }
    get forceDisablePgSSL() {
      return this.opts.forceDisablePgSSL ?? W.forceDisablePgSSL;
    }
    set forceDisablePgSSL(e) {
      this.opts.forceDisablePgSSL = e;
    }
    static get disableSNI() {
      return W.opts.disableSNI ?? W.defaults.disableSNI;
    }
    static set disableSNI(e) {
      W.opts.disableSNI = e;
    }
    get disableSNI() {
      return this.opts.disableSNI ?? W.disableSNI;
    }
    set disableSNI(e) {
      this.opts.disableSNI = e;
    }
    static get disableWarningInBrowsers() {
      return W.opts.disableWarningInBrowsers ?? W.defaults.disableWarningInBrowsers;
    }
    static set disableWarningInBrowsers(e) {
      W.opts.disableWarningInBrowsers = e;
    }
    get disableWarningInBrowsers() {
      return this.opts.disableWarningInBrowsers ?? W.disableWarningInBrowsers;
    }
    set disableWarningInBrowsers(e) {
      this.opts.disableWarningInBrowsers = e;
    }
    static get pipelineConnect() {
      return W.opts.pipelineConnect ?? W.defaults.pipelineConnect;
    }
    static set pipelineConnect(e) {
      W.opts.pipelineConnect = e;
    }
    get pipelineConnect() {
      return this.opts.pipelineConnect ?? W.pipelineConnect;
    }
    set pipelineConnect(e) {
      this.opts.pipelineConnect = e;
    }
    static get subtls() {
      return W.opts.subtls ?? W.defaults.subtls;
    }
    static set subtls(e) {
      W.opts.subtls = e;
    }
    get subtls() {
      return this.opts.subtls ?? W.subtls;
    }
    set subtls(e) {
      this.opts.subtls = e;
    }
    static get pipelineTLS() {
      return W.opts.pipelineTLS ?? W.defaults.pipelineTLS;
    }
    static set pipelineTLS(e) {
      W.opts.pipelineTLS = e;
    }
    get pipelineTLS() {
      return this.opts.pipelineTLS ?? W.pipelineTLS;
    }
    set pipelineTLS(e) {
      this.opts.pipelineTLS = e;
    }
    static get rootCerts() {
      return W.opts.rootCerts ?? W.defaults.rootCerts;
    }
    static set rootCerts(e) {
      W.opts.rootCerts = e;
    }
    get rootCerts() {
      return this.opts.rootCerts ?? W.rootCerts;
    }
    set rootCerts(e) {
      this.opts.rootCerts = e;
    }
    wsProxyAddrForHost(e, t) {
      let r = this.wsProxy;
      if (r === void 0) throw new Error("No WebSocket proxy is configured. Please see https://github.com/neondatabase/serverless/blob/main/CONFIG.md#wsproxy-string--host-string-port-number--string--string");
      return typeof r == "function" ? r(e, t) : `${r}?address=${e}:${t}`;
    }
    setNoDelay() {
      return this;
    }
    setKeepAlive() {
      return this;
    }
    ref() {
      return this;
    }
    unref() {
      return this;
    }
    connect(e, t, r) {
      this.connecting = !0, r && this.once("connect", r);
      let n = g(() => {
        this.connecting = !1, this.pending = !1, this.emit("connect"), this.emit("ready");
      }, "handleWebSocketOpen"), s = g((a, d = !1) => {
        a.binaryType = "arraybuffer", a.addEventListener("error", (m) => {
          this.emit("error", m), this.emit("close");
        }), a.addEventListener("message", (m) => {
          if (this.tlsState === 0) {
            let f = K.from(m.data);
            this.emit("data", f);
          }
        }), a.addEventListener("close", () => {
          this.emit("close");
        }), d ? n() : a.addEventListener(
          "open",
          n
        );
      }, "configureWebSocket"), u;
      try {
        u = this.wsProxyAddrForHost(t, typeof e == "string" ? parseInt(e, 10) : e);
      } catch (a) {
        this.emit("error", a), this.emit("close");
        return;
      }
      try {
        let a = (this.useSecureWebSocket ? "wss:" : "ws:") + "//" + u;
        if (this.webSocketConstructor !== void 0) this.ws = new this.webSocketConstructor(a), s(this.ws);
        else try {
          this.ws = new WebSocket(a), s(this.ws);
        } catch {
          this.ws = new __unstable_WebSocket(a), s(this.ws);
        }
      } catch (a) {
        let d = (this.useSecureWebSocket ? "https:" : "http:") + "//" + u;
        fetch(d, { headers: { Upgrade: "websocket" } }).then(
          (m) => {
            if (this.ws = m.webSocket, this.ws == null) throw a;
            this.ws.accept(), s(this.ws, !0);
          }
        ).catch((m) => {
          this.emit(
            "error",
            new Error(`All attempts to open a WebSocket to connect to the database failed. Please refer to https://github.com/neondatabase/serverless/blob/main/CONFIG.md#websocketconstructor-typeof-websocket--undefined. Details: ${m}`)
          ), this.emit("close");
        });
      }
    }
    async startTls(e) {
      if (this.subtls === void 0) throw new Error(
        "For Postgres SSL connections, you must set `neonConfig.subtls` to the subtls library. See https://github.com/neondatabase/serverless/blob/main/CONFIG.md for more information."
      );
      this.tlsState = 1;
      let t = await this.subtls.TrustedCert.databaseFromPEM(this.rootCerts), r = new this.subtls.WebSocketReadQueue(this.ws), n = r.read.bind(r), s = this.rawWrite.bind(this), { read: u, write: a } = await this.subtls.startTls(e, t, n, s, { useSNI: !this.disableSNI, expectPreData: this.pipelineTLS ? new Uint8Array([83]) : void 0 });
      this.tlsRead = u, this.tlsWrite = a, this.tlsState = 2, this.encrypted = !0, this.authorized = !0, this.emit("secureConnection", this), this.tlsReadLoop();
    }
    async tlsReadLoop() {
      for (; ; ) {
        let e = await this.tlsRead();
        if (e === void 0) break;
        {
          let t = K.from(e);
          this.emit("data", t);
        }
      }
    }
    rawWrite(e) {
      if (!this.coalesceWrites) {
        this.ws && this.ws.send(e);
        return;
      }
      if (this.writeBuffer === void 0) this.writeBuffer = e, setTimeout(() => {
        this.ws && this.ws.send(this.writeBuffer), this.writeBuffer = void 0;
      }, 0);
      else {
        let t = new Uint8Array(
          this.writeBuffer.length + e.length
        );
        t.set(this.writeBuffer), t.set(e, this.writeBuffer.length), this.writeBuffer = t;
      }
    }
    write(e, t = "utf8", r = (n) => {
    }) {
      return e.length === 0 ? (r(), !0) : (typeof e == "string" && (e = K.from(e, t)), this.tlsState === 0 ? (this.rawWrite(e), r()) : this.tlsState === 1 ? this.once("secureConnection", () => {
        this.write(
          e,
          t,
          r
        );
      }) : (this.tlsWrite(e), r()), !0);
    }
    end(e = K.alloc(0), t = "utf8", r = () => {
    }) {
      return this.write(e, t, () => {
        this.ws.close(), r();
      }), this;
    }
    destroy() {
      return this.destroyed = !0, this.end();
    }
  }, g(tt, "Socket"), H(tt, "defaults", {
    poolQueryViaFetch: !1,
    fetchEndpoint: g((i, e, t) => {
      let r;
      return t?.jwtAuth ? r = i.replace(dr, "apiauth.") : r = i.replace(dr, "api."), "https://" + r + "/sql";
    }, "fetchEndpoint"),
    fetchConnectionCache: !0,
    fetchFunction: void 0,
    webSocketConstructor: void 0,
    wsProxy: g((i) => i + "/v2", "wsProxy"),
    useSecureWebSocket: !0,
    forceDisablePgSSL: !0,
    coalesceWrites: !0,
    pipelineConnect: "password",
    subtls: void 0,
    rootCerts: "",
    pipelineTLS: !1,
    disableSNI: !1,
    disableWarningInBrowsers: !1
  }), H(tt, "opts", {}), Bt = tt;
}), Yi = {};
Ce(Yi, { parse: () => Or });
function Or(i, e = !1) {
  let { protocol: t } = new URL(i), r = "http:" + i.substring(
    t.length
  ), { username: n, password: s, host: u, hostname: a, port: d, pathname: m, search: f, searchParams: w, hash: y } = new URL(
    r
  );
  s = decodeURIComponent(s), n = decodeURIComponent(n), m = decodeURIComponent(m);
  let v = n + ":" + s, l = e ? Object.fromEntries(w.entries()) : f;
  return {
    href: i,
    protocol: t,
    auth: v,
    username: n,
    password: s,
    host: u,
    hostname: a,
    port: d,
    pathname: m,
    search: f,
    query: l,
    hash: y
  };
}
var Zi = be(() => {
  V(), g(Or, "parse");
}), Xi = ee((i) => {
  V(), i.parse = function(n, s) {
    return new t(n, s).parse();
  };
  var e = class en {
    constructor(s, u) {
      this.source = s, this.transform = u || r, this.position = 0, this.entries = [], this.recorded = [], this.dimension = 0;
    }
    isEof() {
      return this.position >= this.source.length;
    }
    nextCharacter() {
      var s = this.source[this.position++];
      return s === "\\" ? { value: this.source[this.position++], escaped: !0 } : { value: s, escaped: !1 };
    }
    record(s) {
      this.recorded.push(
        s
      );
    }
    newEntry(s) {
      var u;
      (this.recorded.length > 0 || s) && (u = this.recorded.join(""), u === "NULL" && !s && (u = null), u !== null && (u = this.transform(u)), this.entries.push(u), this.recorded = []);
    }
    consumeDimensions() {
      if (this.source[0] === "[") for (; !this.isEof(); ) {
        var s = this.nextCharacter();
        if (s.value === "=") break;
      }
    }
    parse(s) {
      var u, a, d;
      for (this.consumeDimensions(); !this.isEof(); ) if (u = this.nextCharacter(), u.value === "{" && !d) this.dimension++, this.dimension > 1 && (a = new en(this.source.substr(this.position - 1), this.transform), this.entries.push(a.parse(
        !0
      )), this.position += a.position - 2);
      else if (u.value === "}" && !d) {
        if (this.dimension--, !this.dimension && (this.newEntry(), s)) return this.entries;
      } else u.value === '"' && !u.escaped ? (d && this.newEntry(!0), d = !d) : u.value === "," && !d ? this.newEntry() : this.record(u.value);
      if (this.dimension !== 0) throw new Error("array dimension not balanced");
      return this.entries;
    }
  };
  g(e, "ArrayParser");
  var t = e;
  function r(n) {
    return n;
  }
  g(r, "identity");
}), tn = ee((i, e) => {
  V();
  var t = Xi();
  e.exports = { create: g(function(r, n) {
    return { parse: g(function() {
      return t.parse(r, n);
    }, "parse") };
  }, "create") };
}), Ns = ee((i, e) => {
  V();
  var t = /(\d{1,})-(\d{2})-(\d{2}) (\d{2}):(\d{2}):(\d{2})(\.\d{1,})?.*?( BC)?$/, r = /^(\d{1,})-(\d{2})-(\d{2})( BC)?$/, n = /([Z+-])(\d{2})?:?(\d{2})?:?(\d{2})?/, s = /^-?infinity$/;
  e.exports = g(function(f) {
    if (s.test(f)) return Number(f.replace("i", "I"));
    var w = t.exec(f);
    if (!w) return u(
      f
    ) || null;
    var y = !!w[8], v = parseInt(w[1], 10);
    y && (v = d(v));
    var l = parseInt(w[2], 10) - 1, h = w[3], b = parseInt(
      w[4],
      10
    ), S = parseInt(w[5], 10), E = parseInt(w[6], 10), T = w[7];
    T = T ? 1e3 * parseFloat(T) : 0;
    var N, O = a(f);
    return O != null ? (N = new Date(Date.UTC(v, l, h, b, S, E, T)), m(v) && N.setUTCFullYear(v), O !== 0 && N.setTime(N.getTime() - O)) : (N = new Date(v, l, h, b, S, E, T), m(v) && N.setFullYear(v)), N;
  }, "parseDate");
  function u(f) {
    var w = r.exec(f);
    if (w) {
      var y = parseInt(w[1], 10), v = !!w[4];
      v && (y = d(y));
      var l = parseInt(w[2], 10) - 1, h = w[3], b = new Date(y, l, h);
      return m(
        y
      ) && b.setFullYear(y), b;
    }
  }
  g(u, "getDate");
  function a(f) {
    if (f.endsWith("+00")) return 0;
    var w = n.exec(f.split(" ")[1]);
    if (w) {
      var y = w[1];
      if (y === "Z") return 0;
      var v = y === "-" ? -1 : 1, l = parseInt(w[2], 10) * 3600 + parseInt(
        w[3] || 0,
        10
      ) * 60 + parseInt(w[4] || 0, 10);
      return l * v * 1e3;
    }
  }
  g(a, "timeZoneOffset");
  function d(f) {
    return -(f - 1);
  }
  g(d, "bcYearToNegativeYear");
  function m(f) {
    return f >= 0 && f < 100;
  }
  g(m, "is0To99");
}), Rs = ee((i, e) => {
  V(), e.exports = r;
  var t = Object.prototype.hasOwnProperty;
  function r(n) {
    for (var s = 1; s < arguments.length; s++) {
      var u = arguments[s];
      for (var a in u) t.call(u, a) && (n[a] = u[a]);
    }
    return n;
  }
  g(r, "extend");
}), Os = ee((i, e) => {
  V();
  var t = Rs();
  e.exports = r;
  function r(E) {
    if (!(this instanceof r))
      return new r(E);
    t(this, S(E));
  }
  g(r, "PostgresInterval");
  var n = [
    "seconds",
    "minutes",
    "hours",
    "days",
    "months",
    "years"
  ];
  r.prototype.toPostgres = function() {
    var E = n.filter(this.hasOwnProperty, this);
    return this.milliseconds && E.indexOf("seconds") < 0 && E.push("seconds"), E.length === 0 ? "0" : E.map(function(T) {
      var N = this[T] || 0;
      return T === "seconds" && this.milliseconds && (N = (N + this.milliseconds / 1e3).toFixed(6).replace(
        /\.?0+$/,
        ""
      )), N + " " + T;
    }, this).join(" ");
  };
  var s = { years: "Y", months: "M", days: "D", hours: "H", minutes: "M", seconds: "S" }, u = ["years", "months", "days"], a = ["hours", "minutes", "seconds"];
  r.prototype.toISOString = r.prototype.toISO = function() {
    var E = u.map(N, this).join(""), T = a.map(N, this).join("");
    return "P" + E + "T" + T;
    function N(O) {
      var _ = this[O] || 0;
      return O === "seconds" && this.milliseconds && (_ = (_ + this.milliseconds / 1e3).toFixed(6).replace(
        /0+$/,
        ""
      )), _ + s[O];
    }
  };
  var d = "([+-]?\\d+)", m = d + "\\s+years?", f = d + "\\s+mons?", w = d + "\\s+days?", y = "([+-])?([\\d]*):(\\d\\d):(\\d\\d)\\.?(\\d{1,6})?", v = new RegExp([m, f, w, y].map(function(E) {
    return "(" + E + ")?";
  }).join("\\s*")), l = { years: 2, months: 4, days: 6, hours: 9, minutes: 10, seconds: 11, milliseconds: 12 }, h = ["hours", "minutes", "seconds", "milliseconds"];
  function b(E) {
    var T = E + "000000".slice(E.length);
    return parseInt(
      T,
      10
    ) / 1e3;
  }
  g(b, "parseMilliseconds");
  function S(E) {
    if (!E) return {};
    var T = v.exec(E), N = T[8] === "-";
    return Object.keys(l).reduce(function(O, _) {
      var x = l[_], L = T[x];
      return !L || (L = _ === "milliseconds" ? b(L) : parseInt(L, 10), !L) || (N && ~h.indexOf(_) && (L *= -1), O[_] = L), O;
    }, {});
  }
  g(S, "parse");
}), Ms = ee((i, e) => {
  V(), e.exports = g(function(t) {
    if (/^\\x/.test(t)) return new K(t.substr(
      2
    ), "hex");
    for (var r = "", n = 0; n < t.length; ) if (t[n] !== "\\") r += t[n], ++n;
    else if (/[0-7]{3}/.test(t.substr(n + 1, 3))) r += String.fromCharCode(parseInt(t.substr(n + 1, 3), 8)), n += 4;
    else {
      for (var s = 1; n + s < t.length && t[n + s] === "\\"; ) s++;
      for (var u = 0; u < Math.floor(s / 2); ++u) r += "\\";
      n += Math.floor(s / 2) * 2;
    }
    return new K(r, "binary");
  }, "parseBytea");
}), qs = ee((i, e) => {
  V();
  var t = Xi(), r = tn(), n = Ns(), s = Os(), u = Ms();
  function a(P) {
    return g(function(q) {
      return q === null ? q : P(q);
    }, "nullAllowed");
  }
  g(a, "allowNull");
  function d(P) {
    return P === null ? P : P === "TRUE" || P === "t" || P === "true" || P === "y" || P === "yes" || P === "on" || P === "1";
  }
  g(d, "parseBool");
  function m(P) {
    return P ? t.parse(P, d) : null;
  }
  g(m, "parseBoolArray");
  function f(P) {
    return parseInt(P, 10);
  }
  g(f, "parseBaseTenInt");
  function w(P) {
    return P ? t.parse(P, a(f)) : null;
  }
  g(w, "parseIntegerArray");
  function y(P) {
    return P ? t.parse(P, a(function(q) {
      return N(q).trim();
    })) : null;
  }
  g(y, "parseBigIntegerArray");
  var v = g(function(P) {
    if (!P) return null;
    var q = r.create(P, function(R) {
      return R !== null && (R = _(R)), R;
    });
    return q.parse();
  }, "parsePointArray"), l = g(function(P) {
    if (!P) return null;
    var q = r.create(P, function(R) {
      return R !== null && (R = parseFloat(R)), R;
    });
    return q.parse();
  }, "parseFloatArray"), h = g(function(P) {
    if (!P) return null;
    var q = r.create(P);
    return q.parse();
  }, "parseStringArray"), b = g(function(P) {
    if (!P) return null;
    var q = r.create(
      P,
      function(R) {
        return R !== null && (R = n(R)), R;
      }
    );
    return q.parse();
  }, "parseDateArray"), S = g(function(P) {
    if (!P)
      return null;
    var q = r.create(P, function(R) {
      return R !== null && (R = s(R)), R;
    });
    return q.parse();
  }, "parseIntervalArray"), E = g(function(P) {
    return P ? t.parse(P, a(u)) : null;
  }, "parseByteAArray"), T = g(function(P) {
    return parseInt(P, 10);
  }, "parseInteger"), N = g(function(P) {
    var q = String(P);
    return /^\d+$/.test(q) ? q : P;
  }, "parseBigInteger"), O = g(function(P) {
    return P ? t.parse(P, a(JSON.parse)) : null;
  }, "parseJsonArray"), _ = g(
    function(P) {
      return P[0] !== "(" ? null : (P = P.substring(1, P.length - 1).split(","), { x: parseFloat(P[0]), y: parseFloat(
        P[1]
      ) });
    },
    "parsePoint"
  ), x = g(function(P) {
    if (P[0] !== "<" && P[1] !== "(") return null;
    for (var q = "(", R = "", F = !1, j = 2; j < P.length - 1; j++) {
      if (F || (q += P[j]), P[j] === ")") {
        F = !0;
        continue;
      } else if (!F) continue;
      P[j] !== "," && (R += P[j]);
    }
    var M = _(q);
    return M.radius = parseFloat(R), M;
  }, "parseCircle"), L = g(function(P) {
    P(20, N), P(21, T), P(23, T), P(26, T), P(700, parseFloat), P(701, parseFloat), P(16, d), P(1082, n), P(1114, n), P(1184, n), P(
      600,
      _
    ), P(651, h), P(718, x), P(1e3, m), P(1001, E), P(1005, w), P(1007, w), P(1028, w), P(1016, y), P(1017, v), P(1021, l), P(1022, l), P(1231, l), P(1014, h), P(1015, h), P(1008, h), P(1009, h), P(1040, h), P(1041, h), P(
      1115,
      b
    ), P(1182, b), P(1185, b), P(1186, s), P(1187, S), P(17, u), P(114, JSON.parse.bind(JSON)), P(3802, JSON.parse.bind(JSON)), P(199, O), P(3807, O), P(3907, h), P(2951, h), P(791, h), P(1183, h), P(1270, h);
  }, "init");
  e.exports = { init: L };
}), Ds = ee((i, e) => {
  V();
  var t = 1e6;
  function r(n) {
    var s = n.readInt32BE(0), u = n.readUInt32BE(
      4
    ), a = "";
    s < 0 && (s = ~s + (u === 0), u = ~u + 1 >>> 0, a = "-");
    var d = "", m, f, w, y, v, l;
    {
      if (m = s % t, s = s / t >>> 0, f = 4294967296 * m + u, u = f / t >>> 0, w = "" + (f - t * u), u === 0 && s === 0) return a + w + d;
      for (y = "", v = 6 - w.length, l = 0; l < v; l++) y += "0";
      d = y + w + d;
    }
    {
      if (m = s % t, s = s / t >>> 0, f = 4294967296 * m + u, u = f / t >>> 0, w = "" + (f - t * u), u === 0 && s === 0) return a + w + d;
      for (y = "", v = 6 - w.length, l = 0; l < v; l++) y += "0";
      d = y + w + d;
    }
    {
      if (m = s % t, s = s / t >>> 0, f = 4294967296 * m + u, u = f / t >>> 0, w = "" + (f - t * u), u === 0 && s === 0) return a + w + d;
      for (y = "", v = 6 - w.length, l = 0; l < v; l++) y += "0";
      d = y + w + d;
    }
    return m = s % t, f = 4294967296 * m + u, w = "" + f % t, a + w + d;
  }
  g(r, "readInt8"), e.exports = r;
}), $s = ee((i, e) => {
  V();
  var t = Ds(), r = g(function(h, b, S, E, T) {
    S = S || 0, E = E || !1, T = T || function(F, j, M) {
      return F * Math.pow(2, M) + j;
    };
    var N = S >> 3, O = g(function(F) {
      return E ? ~F & 255 : F;
    }, "inv"), _ = 255, x = 8 - S % 8;
    b < x && (_ = 255 << 8 - b & 255, x = b), S && (_ = _ >> S % 8);
    var L = 0;
    S % 8 + b >= 8 && (L = T(0, O(h[N]) & _, x));
    for (var P = b + S >> 3, q = N + 1; q < P; q++) L = T(L, O(
      h[q]
    ), 8);
    var R = (b + S) % 8;
    return R > 0 && (L = T(L, O(h[P]) >> 8 - R, R)), L;
  }, "parseBits"), n = g(function(h, b, S) {
    var E = Math.pow(2, S - 1) - 1, T = r(h, 1), N = r(h, S, 1);
    if (N === 0) return 0;
    var O = 1, _ = g(function(L, P, q) {
      L === 0 && (L = 1);
      for (var R = 1; R <= q; R++) O /= 2, (P & 1 << q - R) > 0 && (L += O);
      return L;
    }, "parsePrecisionBits"), x = r(h, b, S + 1, !1, _);
    return N == Math.pow(
      2,
      S + 1
    ) - 1 ? x === 0 ? T === 0 ? 1 / 0 : -1 / 0 : NaN : (T === 0 ? 1 : -1) * Math.pow(2, N - E) * x;
  }, "parseFloatFromBits"), s = g(function(h) {
    return r(h, 1) == 1 ? -1 * (r(h, 15, 1, !0) + 1) : r(h, 15, 1);
  }, "parseInt16"), u = g(function(h) {
    return r(h, 1) == 1 ? -1 * (r(
      h,
      31,
      1,
      !0
    ) + 1) : r(h, 31, 1);
  }, "parseInt32"), a = g(function(h) {
    return n(h, 23, 8);
  }, "parseFloat32"), d = g(function(h) {
    return n(h, 52, 11);
  }, "parseFloat64"), m = g(function(h) {
    var b = r(h, 16, 32);
    if (b == 49152) return NaN;
    for (var S = Math.pow(1e4, r(h, 16, 16)), E = 0, T = [], N = r(h, 16), O = 0; O < N; O++) E += r(h, 16, 64 + 16 * O) * S, S /= 1e4;
    var _ = Math.pow(10, r(
      h,
      16,
      48
    ));
    return (b === 0 ? 1 : -1) * Math.round(E * _) / _;
  }, "parseNumeric"), f = g(function(h, b) {
    var S = r(b, 1), E = r(
      b,
      63,
      1
    ), T = new Date((S === 0 ? 1 : -1) * E / 1e3 + 9466848e5);
    return h || T.setTime(T.getTime() + T.getTimezoneOffset() * 6e4), T.usec = E % 1e3, T.getMicroSeconds = function() {
      return this.usec;
    }, T.setMicroSeconds = function(N) {
      this.usec = N;
    }, T.getUTCMicroSeconds = function() {
      return this.usec;
    }, T;
  }, "parseDate"), w = g(
    function(h) {
      for (var b = r(
        h,
        32
      ), S = r(h, 32, 32), E = r(h, 32, 64), T = 96, N = [], O = 0; O < b; O++) N[O] = r(h, 32, T), T += 32, T += 32;
      var _ = g(function(L) {
        var P = r(h, 32, T);
        if (T += 32, P == 4294967295) return null;
        var q;
        if (L == 23 || L == 20) return q = r(h, P * 8, T), T += P * 8, q;
        if (L == 25) return q = h.toString(this.encoding, T >> 3, (T += P << 3) >> 3), q;
        console.log("ERROR: ElementType not implemented: " + L);
      }, "parseElement"), x = g(function(L, P) {
        var q = [], R;
        if (L.length > 1) {
          var F = L.shift();
          for (R = 0; R < F; R++) q[R] = x(L, P);
          L.unshift(F);
        } else for (R = 0; R < L[0]; R++) q[R] = _(P);
        return q;
      }, "parse");
      return x(N, E);
    },
    "parseArray"
  ), y = g(function(h) {
    return h.toString("utf8");
  }, "parseText"), v = g(function(h) {
    return h === null ? null : r(h, 8) > 0;
  }, "parseBool"), l = g(function(h) {
    h(20, t), h(21, s), h(23, u), h(26, u), h(1700, m), h(700, a), h(701, d), h(16, v), h(1114, f.bind(null, !1)), h(1184, f.bind(null, !0)), h(1e3, w), h(1007, w), h(1016, w), h(1008, w), h(1009, w), h(25, y);
  }, "init");
  e.exports = { init: l };
}), ks = ee((i, e) => {
  V(), e.exports = {
    BOOL: 16,
    BYTEA: 17,
    CHAR: 18,
    INT8: 20,
    INT2: 21,
    INT4: 23,
    REGPROC: 24,
    TEXT: 25,
    OID: 26,
    TID: 27,
    XID: 28,
    CID: 29,
    JSON: 114,
    XML: 142,
    PG_NODE_TREE: 194,
    SMGR: 210,
    PATH: 602,
    POLYGON: 604,
    CIDR: 650,
    FLOAT4: 700,
    FLOAT8: 701,
    ABSTIME: 702,
    RELTIME: 703,
    TINTERVAL: 704,
    CIRCLE: 718,
    MACADDR8: 774,
    MONEY: 790,
    MACADDR: 829,
    INET: 869,
    ACLITEM: 1033,
    BPCHAR: 1042,
    VARCHAR: 1043,
    DATE: 1082,
    TIME: 1083,
    TIMESTAMP: 1114,
    TIMESTAMPTZ: 1184,
    INTERVAL: 1186,
    TIMETZ: 1266,
    BIT: 1560,
    VARBIT: 1562,
    NUMERIC: 1700,
    REFCURSOR: 1790,
    REGPROCEDURE: 2202,
    REGOPER: 2203,
    REGOPERATOR: 2204,
    REGCLASS: 2205,
    REGTYPE: 2206,
    UUID: 2950,
    TXID_SNAPSHOT: 2970,
    PG_LSN: 3220,
    PG_NDISTINCT: 3361,
    PG_DEPENDENCIES: 3402,
    TSVECTOR: 3614,
    TSQUERY: 3615,
    GTSVECTOR: 3642,
    REGCONFIG: 3734,
    REGDICTIONARY: 3769,
    JSONB: 3802,
    REGNAMESPACE: 4089,
    REGROLE: 4096
  };
}), er = ee((i) => {
  V();
  var e = qs(), t = $s(), r = tn(), n = ks();
  i.getTypeParser = a, i.setTypeParser = d, i.arrayParser = r, i.builtins = n;
  var s = { text: {}, binary: {} };
  function u(m) {
    return String(m);
  }
  g(u, "noParse");
  function a(m, f) {
    return f = f || "text", s[f] && s[f][m] || u;
  }
  g(a, "getTypeParser");
  function d(m, f, w) {
    typeof f == "function" && (w = f, f = "text"), s[f][m] = w;
  }
  g(d, "setTypeParser"), e.init(function(m, f) {
    s.text[m] = f;
  }), t.init(function(m, f) {
    s.binary[m] = f;
  });
}), Mr = ee((i, e) => {
  V();
  var t = er();
  function r(n) {
    this._types = n || t, this.text = {}, this.binary = {};
  }
  g(r, "TypeOverrides"), r.prototype.getOverrides = function(n) {
    switch (n) {
      case "text":
        return this.text;
      case "binary":
        return this.binary;
      default:
        return {};
    }
  }, r.prototype.setTypeParser = function(n, s, u) {
    typeof s == "function" && (u = s, s = "text"), this.getOverrides(s)[n] = u;
  }, r.prototype.getTypeParser = function(n, s) {
    return s = s || "text", this.getOverrides(s)[n] || this._types.getTypeParser(n, s);
  }, e.exports = r;
});
function xt(i) {
  let e = 1779033703, t = 3144134277, r = 1013904242, n = 2773480762, s = 1359893119, u = 2600822924, a = 528734635, d = 1541459225, m = 0, f = 0, w = [
    1116352408,
    1899447441,
    3049323471,
    3921009573,
    961987163,
    1508970993,
    2453635748,
    2870763221,
    3624381080,
    310598401,
    607225278,
    1426881987,
    1925078388,
    2162078206,
    2614888103,
    3248222580,
    3835390401,
    4022224774,
    264347078,
    604807628,
    770255983,
    1249150122,
    1555081692,
    1996064986,
    2554220882,
    2821834349,
    2952996808,
    3210313671,
    3336571891,
    3584528711,
    113926993,
    338241895,
    666307205,
    773529912,
    1294757372,
    1396182291,
    1695183700,
    1986661051,
    2177026350,
    2456956037,
    2730485921,
    2820302411,
    3259730800,
    3345764771,
    3516065817,
    3600352804,
    4094571909,
    275423344,
    430227734,
    506948616,
    659060556,
    883997877,
    958139571,
    1322822218,
    1537002063,
    1747873779,
    1955562222,
    2024104815,
    2227730452,
    2361852424,
    2428436474,
    2756734187,
    3204031479,
    3329325298
  ], y = g((E, T) => E >>> T | E << 32 - T, "rrot"), v = new Uint32Array(64), l = new Uint8Array(64), h = g(() => {
    for (let q = 0, R = 0; q < 16; q++, R += 4) v[q] = l[R] << 24 | l[R + 1] << 16 | l[R + 2] << 8 | l[R + 3];
    for (let q = 16; q < 64; q++) {
      let R = y(v[q - 15], 7) ^ y(v[q - 15], 18) ^ v[q - 15] >>> 3, F = y(
        v[q - 2],
        17
      ) ^ y(v[q - 2], 19) ^ v[q - 2] >>> 10;
      v[q] = v[q - 16] + R + v[q - 7] + F | 0;
    }
    let E = e, T = t, N = r, O = n, _ = s, x = u, L = a, P = d;
    for (let q = 0; q < 64; q++) {
      let R = y(_, 6) ^ y(_, 11) ^ y(_, 25), F = _ & x ^ ~_ & L, j = P + R + F + w[q] + v[q] | 0, M = y(E, 2) ^ y(
        E,
        13
      ) ^ y(E, 22), Q = E & T ^ E & N ^ T & N, G = M + Q | 0;
      P = L, L = x, x = _, _ = O + j | 0, O = N, N = T, T = E, E = j + G | 0;
    }
    e = e + E | 0, t = t + T | 0, r = r + N | 0, n = n + O | 0, s = s + _ | 0, u = u + x | 0, a = a + L | 0, d = d + P | 0, f = 0;
  }, "process"), b = g((E) => {
    typeof E == "string" && (E = new TextEncoder().encode(E));
    for (let T = 0; T < E.length; T++) l[f++] = E[T], f === 64 && h();
    m += E.length;
  }, "add"), S = g(() => {
    if (l[f++] = 128, f == 64 && h(), f + 8 > 64) {
      for (; f < 64; ) l[f++] = 0;
      h();
    }
    for (; f < 58; ) l[f++] = 0;
    let E = m * 8;
    l[f++] = E / 1099511627776 & 255, l[f++] = E / 4294967296 & 255, l[f++] = E >>> 24, l[f++] = E >>> 16 & 255, l[f++] = E >>> 8 & 255, l[f++] = E & 255, h();
    let T = new Uint8Array(
      32
    );
    return T[0] = e >>> 24, T[1] = e >>> 16 & 255, T[2] = e >>> 8 & 255, T[3] = e & 255, T[4] = t >>> 24, T[5] = t >>> 16 & 255, T[6] = t >>> 8 & 255, T[7] = t & 255, T[8] = r >>> 24, T[9] = r >>> 16 & 255, T[10] = r >>> 8 & 255, T[11] = r & 255, T[12] = n >>> 24, T[13] = n >>> 16 & 255, T[14] = n >>> 8 & 255, T[15] = n & 255, T[16] = s >>> 24, T[17] = s >>> 16 & 255, T[18] = s >>> 8 & 255, T[19] = s & 255, T[20] = u >>> 24, T[21] = u >>> 16 & 255, T[22] = u >>> 8 & 255, T[23] = u & 255, T[24] = a >>> 24, T[25] = a >>> 16 & 255, T[26] = a >>> 8 & 255, T[27] = a & 255, T[28] = d >>> 24, T[29] = d >>> 16 & 255, T[30] = d >>> 8 & 255, T[31] = d & 255, T;
  }, "digest");
  return i === void 0 ? { add: b, digest: S } : (b(i), S());
}
var Qs = be(() => {
  V(), g(xt, "sha256");
}), Le, _r, Fs = be(() => {
  V(), Le = class Pe {
    constructor() {
      H(this, "_dataLength", 0), H(this, "_bufferLength", 0), H(this, "_state", new Int32Array(4)), H(this, "_buffer", new ArrayBuffer(68)), H(this, "_buffer8"), H(this, "_buffer32"), this._buffer8 = new Uint8Array(this._buffer, 0, 68), this._buffer32 = new Uint32Array(this._buffer, 0, 17), this.start();
    }
    static hashByteArray(e, t = !1) {
      return this.onePassHasher.start().appendByteArray(
        e
      ).end(t);
    }
    static hashStr(e, t = !1) {
      return this.onePassHasher.start().appendStr(e).end(t);
    }
    static hashAsciiStr(e, t = !1) {
      return this.onePassHasher.start().appendAsciiStr(e).end(t);
    }
    static _hex(e) {
      let t = Pe.hexChars, r = Pe.hexOut, n, s, u, a;
      for (a = 0; a < 4; a += 1) for (s = a * 8, n = e[a], u = 0; u < 8; u += 2) r[s + 1 + u] = t.charAt(n & 15), n >>>= 4, r[s + 0 + u] = t.charAt(
        n & 15
      ), n >>>= 4;
      return r.join("");
    }
    static _md5cycle(e, t) {
      let r = e[0], n = e[1], s = e[2], u = e[3];
      r += (n & s | ~n & u) + t[0] - 680876936 | 0, r = (r << 7 | r >>> 25) + n | 0, u += (r & n | ~r & s) + t[1] - 389564586 | 0, u = (u << 12 | u >>> 20) + r | 0, s += (u & r | ~u & n) + t[2] + 606105819 | 0, s = (s << 17 | s >>> 15) + u | 0, n += (s & u | ~s & r) + t[3] - 1044525330 | 0, n = (n << 22 | n >>> 10) + s | 0, r += (n & s | ~n & u) + t[4] - 176418897 | 0, r = (r << 7 | r >>> 25) + n | 0, u += (r & n | ~r & s) + t[5] + 1200080426 | 0, u = (u << 12 | u >>> 20) + r | 0, s += (u & r | ~u & n) + t[6] - 1473231341 | 0, s = (s << 17 | s >>> 15) + u | 0, n += (s & u | ~s & r) + t[7] - 45705983 | 0, n = (n << 22 | n >>> 10) + s | 0, r += (n & s | ~n & u) + t[8] + 1770035416 | 0, r = (r << 7 | r >>> 25) + n | 0, u += (r & n | ~r & s) + t[9] - 1958414417 | 0, u = (u << 12 | u >>> 20) + r | 0, s += (u & r | ~u & n) + t[10] - 42063 | 0, s = (s << 17 | s >>> 15) + u | 0, n += (s & u | ~s & r) + t[11] - 1990404162 | 0, n = (n << 22 | n >>> 10) + s | 0, r += (n & s | ~n & u) + t[12] + 1804603682 | 0, r = (r << 7 | r >>> 25) + n | 0, u += (r & n | ~r & s) + t[13] - 40341101 | 0, u = (u << 12 | u >>> 20) + r | 0, s += (u & r | ~u & n) + t[14] - 1502002290 | 0, s = (s << 17 | s >>> 15) + u | 0, n += (s & u | ~s & r) + t[15] + 1236535329 | 0, n = (n << 22 | n >>> 10) + s | 0, r += (n & u | s & ~u) + t[1] - 165796510 | 0, r = (r << 5 | r >>> 27) + n | 0, u += (r & s | n & ~s) + t[6] - 1069501632 | 0, u = (u << 9 | u >>> 23) + r | 0, s += (u & n | r & ~n) + t[11] + 643717713 | 0, s = (s << 14 | s >>> 18) + u | 0, n += (s & r | u & ~r) + t[0] - 373897302 | 0, n = (n << 20 | n >>> 12) + s | 0, r += (n & u | s & ~u) + t[5] - 701558691 | 0, r = (r << 5 | r >>> 27) + n | 0, u += (r & s | n & ~s) + t[10] + 38016083 | 0, u = (u << 9 | u >>> 23) + r | 0, s += (u & n | r & ~n) + t[15] - 660478335 | 0, s = (s << 14 | s >>> 18) + u | 0, n += (s & r | u & ~r) + t[4] - 405537848 | 0, n = (n << 20 | n >>> 12) + s | 0, r += (n & u | s & ~u) + t[9] + 568446438 | 0, r = (r << 5 | r >>> 27) + n | 0, u += (r & s | n & ~s) + t[14] - 1019803690 | 0, u = (u << 9 | u >>> 23) + r | 0, s += (u & n | r & ~n) + t[3] - 187363961 | 0, s = (s << 14 | s >>> 18) + u | 0, n += (s & r | u & ~r) + t[8] + 1163531501 | 0, n = (n << 20 | n >>> 12) + s | 0, r += (n & u | s & ~u) + t[13] - 1444681467 | 0, r = (r << 5 | r >>> 27) + n | 0, u += (r & s | n & ~s) + t[2] - 51403784 | 0, u = (u << 9 | u >>> 23) + r | 0, s += (u & n | r & ~n) + t[7] + 1735328473 | 0, s = (s << 14 | s >>> 18) + u | 0, n += (s & r | u & ~r) + t[12] - 1926607734 | 0, n = (n << 20 | n >>> 12) + s | 0, r += (n ^ s ^ u) + t[5] - 378558 | 0, r = (r << 4 | r >>> 28) + n | 0, u += (r ^ n ^ s) + t[8] - 2022574463 | 0, u = (u << 11 | u >>> 21) + r | 0, s += (u ^ r ^ n) + t[11] + 1839030562 | 0, s = (s << 16 | s >>> 16) + u | 0, n += (s ^ u ^ r) + t[14] - 35309556 | 0, n = (n << 23 | n >>> 9) + s | 0, r += (n ^ s ^ u) + t[1] - 1530992060 | 0, r = (r << 4 | r >>> 28) + n | 0, u += (r ^ n ^ s) + t[4] + 1272893353 | 0, u = (u << 11 | u >>> 21) + r | 0, s += (u ^ r ^ n) + t[7] - 155497632 | 0, s = (s << 16 | s >>> 16) + u | 0, n += (s ^ u ^ r) + t[10] - 1094730640 | 0, n = (n << 23 | n >>> 9) + s | 0, r += (n ^ s ^ u) + t[13] + 681279174 | 0, r = (r << 4 | r >>> 28) + n | 0, u += (r ^ n ^ s) + t[0] - 358537222 | 0, u = (u << 11 | u >>> 21) + r | 0, s += (u ^ r ^ n) + t[3] - 722521979 | 0, s = (s << 16 | s >>> 16) + u | 0, n += (s ^ u ^ r) + t[6] + 76029189 | 0, n = (n << 23 | n >>> 9) + s | 0, r += (n ^ s ^ u) + t[9] - 640364487 | 0, r = (r << 4 | r >>> 28) + n | 0, u += (r ^ n ^ s) + t[12] - 421815835 | 0, u = (u << 11 | u >>> 21) + r | 0, s += (u ^ r ^ n) + t[15] + 530742520 | 0, s = (s << 16 | s >>> 16) + u | 0, n += (s ^ u ^ r) + t[2] - 995338651 | 0, n = (n << 23 | n >>> 9) + s | 0, r += (s ^ (n | ~u)) + t[0] - 198630844 | 0, r = (r << 6 | r >>> 26) + n | 0, u += (n ^ (r | ~s)) + t[7] + 1126891415 | 0, u = (u << 10 | u >>> 22) + r | 0, s += (r ^ (u | ~n)) + t[14] - 1416354905 | 0, s = (s << 15 | s >>> 17) + u | 0, n += (u ^ (s | ~r)) + t[5] - 57434055 | 0, n = (n << 21 | n >>> 11) + s | 0, r += (s ^ (n | ~u)) + t[12] + 1700485571 | 0, r = (r << 6 | r >>> 26) + n | 0, u += (n ^ (r | ~s)) + t[3] - 1894986606 | 0, u = (u << 10 | u >>> 22) + r | 0, s += (r ^ (u | ~n)) + t[10] - 1051523 | 0, s = (s << 15 | s >>> 17) + u | 0, n += (u ^ (s | ~r)) + t[1] - 2054922799 | 0, n = (n << 21 | n >>> 11) + s | 0, r += (s ^ (n | ~u)) + t[8] + 1873313359 | 0, r = (r << 6 | r >>> 26) + n | 0, u += (n ^ (r | ~s)) + t[15] - 30611744 | 0, u = (u << 10 | u >>> 22) + r | 0, s += (r ^ (u | ~n)) + t[6] - 1560198380 | 0, s = (s << 15 | s >>> 17) + u | 0, n += (u ^ (s | ~r)) + t[13] + 1309151649 | 0, n = (n << 21 | n >>> 11) + s | 0, r += (s ^ (n | ~u)) + t[4] - 145523070 | 0, r = (r << 6 | r >>> 26) + n | 0, u += (n ^ (r | ~s)) + t[11] - 1120210379 | 0, u = (u << 10 | u >>> 22) + r | 0, s += (r ^ (u | ~n)) + t[2] + 718787259 | 0, s = (s << 15 | s >>> 17) + u | 0, n += (u ^ (s | ~r)) + t[9] - 343485551 | 0, n = (n << 21 | n >>> 11) + s | 0, e[0] = r + e[0] | 0, e[1] = n + e[1] | 0, e[2] = s + e[2] | 0, e[3] = u + e[3] | 0;
    }
    start() {
      return this._dataLength = 0, this._bufferLength = 0, this._state.set(Pe.stateIdentity), this;
    }
    appendStr(e) {
      let t = this._buffer8, r = this._buffer32, n = this._bufferLength, s, u;
      for (u = 0; u < e.length; u += 1) {
        if (s = e.charCodeAt(u), s < 128) t[n++] = s;
        else if (s < 2048) t[n++] = (s >>> 6) + 192, t[n++] = s & 63 | 128;
        else if (s < 55296 || s > 56319) t[n++] = (s >>> 12) + 224, t[n++] = s >>> 6 & 63 | 128, t[n++] = s & 63 | 128;
        else {
          if (s = (s - 55296) * 1024 + (e.charCodeAt(++u) - 56320) + 65536, s > 1114111) throw new Error(
            "Unicode standard supports code points up to U+10FFFF"
          );
          t[n++] = (s >>> 18) + 240, t[n++] = s >>> 12 & 63 | 128, t[n++] = s >>> 6 & 63 | 128, t[n++] = s & 63 | 128;
        }
        n >= 64 && (this._dataLength += 64, Pe._md5cycle(this._state, r), n -= 64, r[0] = r[16]);
      }
      return this._bufferLength = n, this;
    }
    appendAsciiStr(e) {
      let t = this._buffer8, r = this._buffer32, n = this._bufferLength, s, u = 0;
      for (; ; ) {
        for (s = Math.min(e.length - u, 64 - n); s--; ) t[n++] = e.charCodeAt(u++);
        if (n < 64) break;
        this._dataLength += 64, Pe._md5cycle(this._state, r), n = 0;
      }
      return this._bufferLength = n, this;
    }
    appendByteArray(e) {
      let t = this._buffer8, r = this._buffer32, n = this._bufferLength, s, u = 0;
      for (; ; ) {
        for (s = Math.min(e.length - u, 64 - n); s--; ) t[n++] = e[u++];
        if (n < 64) break;
        this._dataLength += 64, Pe._md5cycle(this._state, r), n = 0;
      }
      return this._bufferLength = n, this;
    }
    getState() {
      let e = this._state;
      return { buffer: String.fromCharCode.apply(null, Array.from(this._buffer8)), buflen: this._bufferLength, length: this._dataLength, state: [e[0], e[1], e[2], e[3]] };
    }
    setState(e) {
      let t = e.buffer, r = e.state, n = this._state, s;
      for (this._dataLength = e.length, this._bufferLength = e.buflen, n[0] = r[0], n[1] = r[1], n[2] = r[2], n[3] = r[3], s = 0; s < t.length; s += 1) this._buffer8[s] = t.charCodeAt(s);
    }
    end(e = !1) {
      let t = this._bufferLength, r = this._buffer8, n = this._buffer32, s = (t >> 2) + 1;
      this._dataLength += t;
      let u = this._dataLength * 8;
      if (r[t] = 128, r[t + 1] = r[t + 2] = r[t + 3] = 0, n.set(Pe.buffer32Identity.subarray(s), s), t > 55 && (Pe._md5cycle(this._state, n), n.set(Pe.buffer32Identity)), u <= 4294967295) n[14] = u;
      else {
        let a = u.toString(16).match(/(.*?)(.{0,8})$/);
        if (a === null) return;
        let d = parseInt(
          a[2],
          16
        ), m = parseInt(a[1], 16) || 0;
        n[14] = d, n[15] = m;
      }
      return Pe._md5cycle(this._state, n), e ? this._state : Pe._hex(
        this._state
      );
    }
  }, g(Le, "Md5"), H(Le, "stateIdentity", new Int32Array([1732584193, -271733879, -1732584194, 271733878])), H(Le, "buffer32Identity", new Int32Array([0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0])), H(Le, "hexChars", "0123456789abcdef"), H(Le, "hexOut", []), H(Le, "onePassHasher", new Le()), _r = Le;
}), qr = {};
Ce(qr, { createHash: () => nn, createHmac: () => sn, randomBytes: () => rn });
function rn(i) {
  return crypto.getRandomValues(K.alloc(i));
}
function nn(i) {
  if (i === "sha256") return { update: g(function(e) {
    return { digest: g(
      function() {
        return K.from(xt(e));
      },
      "digest"
    ) };
  }, "update") };
  if (i === "md5") return { update: g(function(e) {
    return {
      digest: g(function() {
        return typeof e == "string" ? _r.hashStr(e) : _r.hashByteArray(e);
      }, "digest")
    };
  }, "update") };
  throw new Error(`Hash type '${i}' not supported`);
}
function sn(i, e) {
  if (i !== "sha256") throw new Error(`Only sha256 is supported (requested: '${i}')`);
  return { update: g(function(t) {
    return { digest: g(
      function() {
        typeof e == "string" && (e = new TextEncoder().encode(e)), typeof t == "string" && (t = new TextEncoder().encode(
          t
        ));
        let r = e.length;
        if (r > 64) e = xt(e);
        else if (r < 64) {
          let d = new Uint8Array(64);
          d.set(e), e = d;
        }
        let n = new Uint8Array(
          64
        ), s = new Uint8Array(64);
        for (let d = 0; d < 64; d++) n[d] = 54 ^ e[d], s[d] = 92 ^ e[d];
        let u = new Uint8Array(t.length + 64);
        u.set(n, 0), u.set(t, 64);
        let a = new Uint8Array(96);
        return a.set(s, 0), a.set(xt(u), 64), K.from(xt(a));
      },
      "digest"
    ) };
  }, "update") };
}
var on = be(() => {
  V(), Qs(), Fs(), g(rn, "randomBytes"), g(nn, "createHash"), g(sn, "createHmac");
}), tr = ee((i, e) => {
  V(), e.exports = {
    host: "localhost",
    user: X.platform === "win32" ? X.env.USERNAME : X.env.USER,
    database: void 0,
    password: null,
    connectionString: void 0,
    port: 5432,
    rows: 0,
    binary: !1,
    max: 10,
    idleTimeoutMillis: 3e4,
    client_encoding: "",
    ssl: !1,
    application_name: void 0,
    fallback_application_name: void 0,
    options: void 0,
    parseInputDatesAsUTC: !1,
    statement_timeout: !1,
    lock_timeout: !1,
    idle_in_transaction_session_timeout: !1,
    query_timeout: !1,
    connect_timeout: 0,
    keepalives: 1,
    keepalives_idle: 0
  };
  var t = er(), r = t.getTypeParser(20, "text"), n = t.getTypeParser(
    1016,
    "text"
  );
  e.exports.__defineSetter__("parseInt8", function(s) {
    t.setTypeParser(20, "text", s ? t.getTypeParser(
      23,
      "text"
    ) : r), t.setTypeParser(1016, "text", s ? t.getTypeParser(1007, "text") : n);
  });
}), rr = ee((i, e) => {
  V();
  var t = (on(), fe(qr)), r = tr();
  function n(l) {
    var h = l.replace(
      /\\/g,
      "\\\\"
    ).replace(/"/g, '\\"');
    return '"' + h + '"';
  }
  g(n, "escapeElement");
  function s(l) {
    for (var h = "{", b = 0; b < l.length; b++) b > 0 && (h = h + ","), l[b] === null || typeof l[b] > "u" ? h = h + "NULL" : Array.isArray(l[b]) ? h = h + s(l[b]) : l[b] instanceof K ? h += "\\\\x" + l[b].toString("hex") : h += n(u(l[b]));
    return h = h + "}", h;
  }
  g(s, "arrayString");
  var u = g(function(l, h) {
    if (l == null) return null;
    if (l instanceof K) return l;
    if (ArrayBuffer.isView(l)) {
      var b = K.from(l.buffer, l.byteOffset, l.byteLength);
      return b.length === l.byteLength ? b : b.slice(l.byteOffset, l.byteOffset + l.byteLength);
    }
    return l instanceof Date ? r.parseInputDatesAsUTC ? f(l) : m(l) : Array.isArray(l) ? s(l) : typeof l == "object" ? a(l, h) : l.toString();
  }, "prepareValue");
  function a(l, h) {
    if (l && typeof l.toPostgres == "function") {
      if (h = h || [], h.indexOf(l) !== -1) throw new Error('circular reference detected while preparing "' + l + '" for query');
      return h.push(l), u(l.toPostgres(u), h);
    }
    return JSON.stringify(l);
  }
  g(a, "prepareObject");
  function d(l, h) {
    for (l = "" + l; l.length < h; ) l = "0" + l;
    return l;
  }
  g(d, "pad");
  function m(l) {
    var h = -l.getTimezoneOffset(), b = l.getFullYear(), S = b < 1;
    S && (b = Math.abs(b) + 1);
    var E = d(b, 4) + "-" + d(l.getMonth() + 1, 2) + "-" + d(l.getDate(), 2) + "T" + d(
      l.getHours(),
      2
    ) + ":" + d(l.getMinutes(), 2) + ":" + d(l.getSeconds(), 2) + "." + d(l.getMilliseconds(), 3);
    return h < 0 ? (E += "-", h *= -1) : E += "+", E += d(Math.floor(h / 60), 2) + ":" + d(h % 60, 2), S && (E += " BC"), E;
  }
  g(m, "dateToString");
  function f(l) {
    var h = l.getUTCFullYear(), b = h < 1;
    b && (h = Math.abs(h) + 1);
    var S = d(h, 4) + "-" + d(l.getUTCMonth() + 1, 2) + "-" + d(l.getUTCDate(), 2) + "T" + d(l.getUTCHours(), 2) + ":" + d(l.getUTCMinutes(), 2) + ":" + d(l.getUTCSeconds(), 2) + "." + d(
      l.getUTCMilliseconds(),
      3
    );
    return S += "+00:00", b && (S += " BC"), S;
  }
  g(f, "dateToStringUTC");
  function w(l, h, b) {
    return l = typeof l == "string" ? { text: l } : l, h && (typeof h == "function" ? l.callback = h : l.values = h), b && (l.callback = b), l;
  }
  g(w, "normalizeQueryConfig");
  var y = g(function(l) {
    return t.createHash("md5").update(l, "utf-8").digest("hex");
  }, "md5"), v = g(
    function(l, h, b) {
      var S = y(h + l), E = y(K.concat([K.from(S), b]));
      return "md5" + E;
    },
    "postgresMd5PasswordHash"
  );
  e.exports = {
    prepareValue: g(function(l) {
      return u(l);
    }, "prepareValueWrapper"),
    normalizeQueryConfig: w,
    postgresMd5PasswordHash: v,
    md5: y
  };
}), Rt = {};
Ce(Rt, { default: () => an });
var an, ir = be(() => {
  V(), an = {};
}), js = ee((i, e) => {
  V();
  var t = (on(), fe(qr));
  function r(h) {
    if (h.indexOf("SCRAM-SHA-256") === -1) throw new Error("SASL: Only mechanism SCRAM-SHA-256 is currently supported");
    let b = t.randomBytes(
      18
    ).toString("base64");
    return { mechanism: "SCRAM-SHA-256", clientNonce: b, response: "n,,n=*,r=" + b, message: "SASLInitialResponse" };
  }
  g(r, "startSession");
  function n(h, b, S) {
    if (h.message !== "SASLInitialResponse") throw new Error(
      "SASL: Last message was not SASLInitialResponse"
    );
    if (typeof b != "string") throw new Error("SASL: SCRAM-SERVER-FIRST-MESSAGE: client password must be a string");
    if (typeof S != "string") throw new Error("SASL: SCRAM-SERVER-FIRST-MESSAGE: serverData must be a string");
    let E = m(S);
    if (E.nonce.startsWith(h.clientNonce)) {
      if (E.nonce.length === h.clientNonce.length) throw new Error("SASL: SCRAM-SERVER-FIRST-MESSAGE: server nonce is too short");
    } else throw new Error("SASL: SCRAM-SERVER-FIRST-MESSAGE: server nonce does not start with client nonce");
    var T = K.from(E.salt, "base64"), N = l(b, T, E.iteration), O = v(N, "Client Key"), _ = y(
      O
    ), x = "n=*,r=" + h.clientNonce, L = "r=" + E.nonce + ",s=" + E.salt + ",i=" + E.iteration, P = "c=biws,r=" + E.nonce, q = x + "," + L + "," + P, R = v(_, q), F = w(O, R), j = F.toString("base64"), M = v(N, "Server Key"), Q = v(M, q);
    h.message = "SASLResponse", h.serverSignature = Q.toString("base64"), h.response = P + ",p=" + j;
  }
  g(n, "continueSession");
  function s(h, b) {
    if (h.message !== "SASLResponse") throw new Error("SASL: Last message was not SASLResponse");
    if (typeof b != "string") throw new Error("SASL: SCRAM-SERVER-FINAL-MESSAGE: serverData must be a string");
    let { serverSignature: S } = f(
      b
    );
    if (S !== h.serverSignature) throw new Error("SASL: SCRAM-SERVER-FINAL-MESSAGE: server signature does not match");
  }
  g(s, "finalizeSession");
  function u(h) {
    if (typeof h != "string") throw new TypeError("SASL: text must be a string");
    return h.split("").map((b, S) => h.charCodeAt(S)).every((b) => b >= 33 && b <= 43 || b >= 45 && b <= 126);
  }
  g(u, "isPrintableChars");
  function a(h) {
    return /^(?:[a-zA-Z0-9+/]{4})*(?:[a-zA-Z0-9+/]{2}==|[a-zA-Z0-9+/]{3}=)?$/.test(h);
  }
  g(a, "isBase64");
  function d(h) {
    if (typeof h != "string") throw new TypeError("SASL: attribute pairs text must be a string");
    return new Map(h.split(",").map((b) => {
      if (!/^.=/.test(b)) throw new Error("SASL: Invalid attribute pair entry");
      let S = b[0], E = b.substring(2);
      return [S, E];
    }));
  }
  g(d, "parseAttributePairs");
  function m(h) {
    let b = d(h), S = b.get("r");
    if (S) {
      if (!u(S)) throw new Error("SASL: SCRAM-SERVER-FIRST-MESSAGE: nonce must only contain printable characters");
    } else throw new Error("SASL: SCRAM-SERVER-FIRST-MESSAGE: nonce missing");
    let E = b.get("s");
    if (E) {
      if (!a(E)) throw new Error("SASL: SCRAM-SERVER-FIRST-MESSAGE: salt must be base64");
    } else throw new Error("SASL: SCRAM-SERVER-FIRST-MESSAGE: salt missing");
    let T = b.get("i");
    if (T) {
      if (!/^[1-9][0-9]*$/.test(T)) throw new Error("SASL: SCRAM-SERVER-FIRST-MESSAGE: invalid iteration count");
    } else throw new Error("SASL: SCRAM-SERVER-FIRST-MESSAGE: iteration missing");
    let N = parseInt(T, 10);
    return { nonce: S, salt: E, iteration: N };
  }
  g(m, "parseServerFirstMessage");
  function f(h) {
    let b = d(h).get("v");
    if (b) {
      if (!a(b)) throw new Error("SASL: SCRAM-SERVER-FINAL-MESSAGE: server signature must be base64");
    } else throw new Error("SASL: SCRAM-SERVER-FINAL-MESSAGE: server signature is missing");
    return { serverSignature: b };
  }
  g(f, "parseServerFinalMessage");
  function w(h, b) {
    if (!K.isBuffer(h)) throw new TypeError("first argument must be a Buffer");
    if (!K.isBuffer(b)) throw new TypeError(
      "second argument must be a Buffer"
    );
    if (h.length !== b.length) throw new Error("Buffer lengths must match");
    if (h.length === 0) throw new Error("Buffers cannot be empty");
    return K.from(h.map((S, E) => h[E] ^ b[E]));
  }
  g(w, "xorBuffers");
  function y(h) {
    return t.createHash("sha256").update(h).digest();
  }
  g(y, "sha256");
  function v(h, b) {
    return t.createHmac("sha256", h).update(b).digest();
  }
  g(v, "hmacSha256");
  function l(h, b, S) {
    for (var E = v(
      h,
      K.concat([b, K.from([0, 0, 0, 1])])
    ), T = E, N = 0; N < S - 1; N++) E = v(h, E), T = w(T, E);
    return T;
  }
  g(l, "Hi"), e.exports = { startSession: r, continueSession: n, finalizeSession: s };
}), Dr = {};
Ce(Dr, { join: () => un });
function un(...i) {
  return i.join("/");
}
var cn = be(() => {
  V(), g(
    un,
    "join"
  );
}), $r = {};
Ce($r, { stat: () => ln });
function ln(i, e) {
  e(new Error("No filesystem"));
}
var hn = be(() => {
  V(), g(ln, "stat");
}), kr = {};
Ce(kr, { default: () => fn });
var fn, dn = be(() => {
  V(), fn = {};
}), pn = {};
Ce(pn, { StringDecoder: () => gn });
var pr, gn, Us = be(() => {
  V(), pr = class {
    constructor(e) {
      H(this, "td"), this.td = new TextDecoder(e);
    }
    write(e) {
      return this.td.decode(e, { stream: !0 });
    }
    end(e) {
      return this.td.decode(e);
    }
  }, g(pr, "StringDecoder"), gn = pr;
}), zs = ee((i, e) => {
  V();
  var { Transform: t } = (dn(), fe(kr)), { StringDecoder: r } = (Us(), fe(pn)), n = Symbol(
    "last"
  ), s = Symbol("decoder");
  function u(w, y, v) {
    let l;
    if (this.overflow) {
      if (l = this[s].write(w).split(
        this.matcher
      ), l.length === 1) return v();
      l.shift(), this.overflow = !1;
    } else this[n] += this[s].write(w), l = this[n].split(this.matcher);
    this[n] = l.pop();
    for (let h = 0; h < l.length; h++) try {
      d(this, this.mapper(l[h]));
    } catch (b) {
      return v(b);
    }
    if (this.overflow = this[n].length > this.maxLength, this.overflow && !this.skipOverflow) {
      v(new Error(
        "maximum buffer reached"
      ));
      return;
    }
    v();
  }
  g(u, "transform");
  function a(w) {
    if (this[n] += this[s].end(), this[n])
      try {
        d(this, this.mapper(this[n]));
      } catch (y) {
        return w(y);
      }
    w();
  }
  g(a, "flush");
  function d(w, y) {
    y !== void 0 && w.push(y);
  }
  g(d, "push");
  function m(w) {
    return w;
  }
  g(m, "noop");
  function f(w, y, v) {
    switch (w = w || /\r?\n/, y = y || m, v = v || {}, arguments.length) {
      case 1:
        typeof w == "function" ? (y = w, w = /\r?\n/) : typeof w == "object" && !(w instanceof RegExp) && !w[Symbol.split] && (v = w, w = /\r?\n/);
        break;
      case 2:
        typeof w == "function" ? (v = y, y = w, w = /\r?\n/) : typeof y == "object" && (v = y, y = m);
    }
    v = Object.assign({}, v), v.autoDestroy = !0, v.transform = u, v.flush = a, v.readableObjectMode = !0;
    let l = new t(v);
    return l[n] = "", l[s] = new r("utf8"), l.matcher = w, l.mapper = y, l.maxLength = v.maxLength, l.skipOverflow = v.skipOverflow || !1, l.overflow = !1, l._destroy = function(h, b) {
      this._writableState.errorEmitted = !1, b(h);
    }, l;
  }
  g(f, "split"), e.exports = f;
}), Vs = ee((i, e) => {
  V();
  var t = (cn(), fe(Dr)), r = (dn(), fe(kr)).Stream, n = zs(), s = (ir(), fe(Rt)), u = 5432, a = X.platform === "win32", d = X.stderr, m = 56, f = 7, w = 61440, y = 32768;
  function v(O) {
    return (O & w) == y;
  }
  g(v, "isRegFile");
  var l = ["host", "port", "database", "user", "password"], h = l.length, b = l[h - 1];
  function S() {
    var O = d instanceof r && d.writable === !0;
    if (O) {
      var _ = Array.prototype.slice.call(arguments).concat(`
`);
      d.write(s.format.apply(s, _));
    }
  }
  g(S, "warn"), Object.defineProperty(e.exports, "isWin", { get: g(function() {
    return a;
  }, "get"), set: g(function(O) {
    a = O;
  }, "set") }), e.exports.warnTo = function(O) {
    var _ = d;
    return d = O, _;
  }, e.exports.getFileName = function(O) {
    var _ = O || X.env, x = _.PGPASSFILE || (a ? t.join(_.APPDATA || "./", "postgresql", "pgpass.conf") : t.join(_.HOME || "./", ".pgpass"));
    return x;
  }, e.exports.usePgPass = function(O, _) {
    return Object.prototype.hasOwnProperty.call(X.env, "PGPASSWORD") ? !1 : a ? !0 : (_ = _ || "<unkn>", v(O.mode) ? O.mode & (m | f) ? (S('WARNING: password file "%s" has group or world access; permissions should be u=rw (0600) or less', _), !1) : !0 : (S('WARNING: password file "%s" is not a plain file', _), !1));
  };
  var E = e.exports.match = function(O, _) {
    return l.slice(0, -1).reduce(function(x, L, P) {
      return P == 1 && Number(O[L] || u) === Number(
        _[L]
      ) ? x && !0 : x && (_[L] === "*" || _[L] === O[L]);
    }, !0);
  };
  e.exports.getPassword = function(O, _, x) {
    var L, P = _.pipe(
      n()
    );
    function q(j) {
      var M = T(j);
      M && N(M) && E(O, M) && (L = M[b], P.end());
    }
    g(q, "onLine");
    var R = g(function() {
      _.destroy(), x(L);
    }, "onEnd"), F = g(function(j) {
      _.destroy(), S("WARNING: error on reading file: %s", j), x(
        void 0
      );
    }, "onErr");
    _.on("error", F), P.on("data", q).on("end", R).on("error", F);
  };
  var T = e.exports.parseLine = function(O) {
    if (O.length < 11 || O.match(/^\s+#/)) return null;
    for (var _ = "", x = "", L = 0, P = 0, q = 0, R = {}, F = !1, j = g(
      function(Q, G, Y) {
        var te = O.substring(G, Y);
        Object.hasOwnProperty.call(X.env, "PGPASS_NO_DEESCAPE") || (te = te.replace(/\\([:\\])/g, "$1")), R[l[Q]] = te;
      },
      "addToObj"
    ), M = 0; M < O.length - 1; M += 1) {
      if (_ = O.charAt(M + 1), x = O.charAt(
        M
      ), F = L == h - 1, F) {
        j(L, P);
        break;
      }
      M >= 0 && _ == ":" && x !== "\\" && (j(L, P, M + 1), P = M + 2, L += 1);
    }
    return R = Object.keys(R).length === h ? R : null, R;
  }, N = e.exports.isValidEntry = function(O) {
    for (var _ = { 0: function(R) {
      return R.length > 0;
    }, 1: function(R) {
      return R === "*" ? !0 : (R = Number(R), isFinite(R) && R > 0 && R < 9007199254740992 && Math.floor(R) === R);
    }, 2: function(R) {
      return R.length > 0;
    }, 3: function(R) {
      return R.length > 0;
    }, 4: function(R) {
      return R.length > 0;
    } }, x = 0; x < l.length; x += 1) {
      var L = _[x], P = O[l[x]] || "", q = L(P);
      if (!q) return !1;
    }
    return !0;
  };
}), Ws = ee((i, e) => {
  V(), cn(), fe(Dr);
  var t = (hn(), fe($r)), r = Vs();
  e.exports = function(n, s) {
    var u = r.getFileName();
    t.stat(u, function(a, d) {
      if (a || !r.usePgPass(d, u)) return s(void 0);
      var m = t.createReadStream(
        u
      );
      r.getPassword(n, m, s);
    });
  }, e.exports.warnTo = r.warnTo;
}), yn = {};
Ce(yn, { default: () => mn });
var mn, Gs = be(() => {
  V(), mn = {};
}), Ks = ee((i, e) => {
  V();
  var t = (Zi(), fe(Yi)), r = (hn(), fe($r));
  function n(s) {
    if (s.charAt(0) === "/") {
      var a = s.split(" ");
      return { host: a[0], database: a[1] };
    }
    var u = t.parse(/ |%[^a-f0-9]|%[a-f0-9][^a-f0-9]/i.test(s) ? encodeURI(s).replace(/\%25(\d\d)/g, "%$1") : s, !0), a = u.query;
    for (var d in a) Array.isArray(a[d]) && (a[d] = a[d][a[d].length - 1]);
    var m = (u.auth || ":").split(":");
    if (a.user = m[0], a.password = m.splice(1).join(
      ":"
    ), a.port = u.port, u.protocol == "socket:") return a.host = decodeURI(u.pathname), a.database = u.query.db, a.client_encoding = u.query.encoding, a;
    a.host || (a.host = u.hostname);
    var f = u.pathname;
    if (!a.host && f && /^%2f/i.test(f)) {
      var w = f.split("/");
      a.host = decodeURIComponent(w[0]), f = w.splice(1).join("/");
    }
    switch (f && f.charAt(
      0
    ) === "/" && (f = f.slice(1) || null), a.database = f && decodeURI(f), (a.ssl === "true" || a.ssl === "1") && (a.ssl = !0), a.ssl === "0" && (a.ssl = !1), (a.sslcert || a.sslkey || a.sslrootcert || a.sslmode) && (a.ssl = {}), a.sslcert && (a.ssl.cert = r.readFileSync(a.sslcert).toString()), a.sslkey && (a.ssl.key = r.readFileSync(a.sslkey).toString()), a.sslrootcert && (a.ssl.ca = r.readFileSync(a.sslrootcert).toString()), a.sslmode) {
      case "disable": {
        a.ssl = !1;
        break;
      }
      case "prefer":
      case "require":
      case "verify-ca":
      case "verify-full":
        break;
      case "no-verify": {
        a.ssl.rejectUnauthorized = !1;
        break;
      }
    }
    return a;
  }
  g(n, "parse"), e.exports = n, n.parse = n;
}), Qr = ee((i, e) => {
  V();
  var t = (Gs(), fe(yn)), r = tr(), n = Ks().parse, s = g(function(w, y, v) {
    return v === void 0 ? v = X.env["PG" + w.toUpperCase()] : v === !1 || (v = X.env[v]), y[w] || v || r[w];
  }, "val"), u = g(function() {
    switch (X.env.PGSSLMODE) {
      case "disable":
        return !1;
      case "prefer":
      case "require":
      case "verify-ca":
      case "verify-full":
        return !0;
      case "no-verify":
        return { rejectUnauthorized: !1 };
    }
    return r.ssl;
  }, "readSSLConfigFromEnvironment"), a = g(function(w) {
    return "'" + ("" + w).replace(/\\/g, "\\\\").replace(/'/g, "\\'") + "'";
  }, "quoteParamValue"), d = g(function(w, y, v) {
    var l = y[v];
    l != null && w.push(v + "=" + a(l));
  }, "add"), m = class {
    constructor(y) {
      y = typeof y == "string" ? n(y) : y || {}, y.connectionString && (y = Object.assign({}, y, n(y.connectionString))), this.user = s("user", y), this.database = s("database", y), this.database === void 0 && (this.database = this.user), this.port = parseInt(s("port", y), 10), this.host = s("host", y), Object.defineProperty(this, "password", {
        configurable: !0,
        enumerable: !1,
        writable: !0,
        value: s("password", y)
      }), this.binary = s("binary", y), this.options = s("options", y), this.ssl = typeof y.ssl > "u" ? u() : y.ssl, typeof this.ssl == "string" && this.ssl === "true" && (this.ssl = !0), this.ssl === "no-verify" && (this.ssl = { rejectUnauthorized: !1 }), this.ssl && this.ssl.key && Object.defineProperty(this.ssl, "key", { enumerable: !1 }), this.client_encoding = s("client_encoding", y), this.replication = s("replication", y), this.isDomainSocket = !(this.host || "").indexOf("/"), this.application_name = s("application_name", y, "PGAPPNAME"), this.fallback_application_name = s("fallback_application_name", y, !1), this.statement_timeout = s("statement_timeout", y, !1), this.lock_timeout = s("lock_timeout", y, !1), this.idle_in_transaction_session_timeout = s("idle_in_transaction_session_timeout", y, !1), this.query_timeout = s("query_timeout", y, !1), y.connectionTimeoutMillis === void 0 ? this.connect_timeout = X.env.PGCONNECT_TIMEOUT || 0 : this.connect_timeout = Math.floor(y.connectionTimeoutMillis / 1e3), y.keepAlive === !1 ? this.keepalives = 0 : y.keepAlive === !0 && (this.keepalives = 1), typeof y.keepAliveInitialDelayMillis == "number" && (this.keepalives_idle = Math.floor(y.keepAliveInitialDelayMillis / 1e3));
    }
    getLibpqConnectionString(y) {
      var v = [];
      d(v, this, "user"), d(v, this, "password"), d(v, this, "port"), d(v, this, "application_name"), d(
        v,
        this,
        "fallback_application_name"
      ), d(v, this, "connect_timeout"), d(v, this, "options");
      var l = typeof this.ssl == "object" ? this.ssl : this.ssl ? { sslmode: this.ssl } : {};
      if (d(v, l, "sslmode"), d(v, l, "sslca"), d(v, l, "sslkey"), d(v, l, "sslcert"), d(v, l, "sslrootcert"), this.database && v.push("dbname=" + a(this.database)), this.replication && v.push("replication=" + a(this.replication)), this.host && v.push("host=" + a(this.host)), this.isDomainSocket) return y(null, v.join(" "));
      this.client_encoding && v.push("client_encoding=" + a(this.client_encoding)), t.lookup(this.host, function(h, b) {
        return h ? y(h, null) : (v.push("hostaddr=" + a(b)), y(null, v.join(" ")));
      });
    }
  };
  g(m, "ConnectionParameters");
  var f = m;
  e.exports = f;
}), Hs = ee((i, e) => {
  V();
  var t = er(), r = /^([A-Za-z]+)(?: (\d+))?(?: (\d+))?/, n = class {
    constructor(a, d) {
      this.command = null, this.rowCount = null, this.oid = null, this.rows = [], this.fields = [], this._parsers = void 0, this._types = d, this.RowCtor = null, this.rowAsArray = a === "array", this.rowAsArray && (this.parseRow = this._parseRowAsArray);
    }
    addCommandComplete(a) {
      var d;
      a.text ? d = r.exec(a.text) : d = r.exec(a.command), d && (this.command = d[1], d[3] ? (this.oid = parseInt(
        d[2],
        10
      ), this.rowCount = parseInt(d[3], 10)) : d[2] && (this.rowCount = parseInt(d[2], 10)));
    }
    _parseRowAsArray(a) {
      for (var d = new Array(
        a.length
      ), m = 0, f = a.length; m < f; m++) {
        var w = a[m];
        w !== null ? d[m] = this._parsers[m](w) : d[m] = null;
      }
      return d;
    }
    parseRow(a) {
      for (var d = {}, m = 0, f = a.length; m < f; m++) {
        var w = a[m], y = this.fields[m].name;
        w !== null ? d[y] = this._parsers[m](
          w
        ) : d[y] = null;
      }
      return d;
    }
    addRow(a) {
      this.rows.push(a);
    }
    addFields(a) {
      this.fields = a, this.fields.length && (this._parsers = new Array(a.length));
      for (var d = 0; d < a.length; d++) {
        var m = a[d];
        this._types ? this._parsers[d] = this._types.getTypeParser(m.dataTypeID, m.format || "text") : this._parsers[d] = t.getTypeParser(m.dataTypeID, m.format || "text");
      }
    }
  };
  g(n, "Result");
  var s = n;
  e.exports = s;
}), Js = ee((i, e) => {
  V();
  var { EventEmitter: t } = Qe(), r = Hs(), n = rr(), s = class extends t {
    constructor(d, m, f) {
      super(), d = n.normalizeQueryConfig(d, m, f), this.text = d.text, this.values = d.values, this.rows = d.rows, this.types = d.types, this.name = d.name, this.binary = d.binary, this.portal = d.portal || "", this.callback = d.callback, this._rowMode = d.rowMode, X.domain && d.callback && (this.callback = X.domain.bind(d.callback)), this._result = new r(this._rowMode, this.types), this._results = this._result, this.isPreparedStatement = !1, this._canceledDueToError = !1, this._promise = null;
    }
    requiresPreparation() {
      return this.name || this.rows ? !0 : !this.text || !this.values ? !1 : this.values.length > 0;
    }
    _checkForMultirow() {
      this._result.command && (Array.isArray(this._results) || (this._results = [this._result]), this._result = new r(this._rowMode, this.types), this._results.push(this._result));
    }
    handleRowDescription(d) {
      this._checkForMultirow(), this._result.addFields(d.fields), this._accumulateRows = this.callback || !this.listeners("row").length;
    }
    handleDataRow(d) {
      let m;
      if (!this._canceledDueToError) {
        try {
          m = this._result.parseRow(
            d.fields
          );
        } catch (f) {
          this._canceledDueToError = f;
          return;
        }
        this.emit("row", m, this._result), this._accumulateRows && this._result.addRow(m);
      }
    }
    handleCommandComplete(d, m) {
      this._checkForMultirow(), this._result.addCommandComplete(
        d
      ), this.rows && m.sync();
    }
    handleEmptyQuery(d) {
      this.rows && d.sync();
    }
    handleError(d, m) {
      if (this._canceledDueToError && (d = this._canceledDueToError, this._canceledDueToError = !1), this.callback) return this.callback(d);
      this.emit("error", d);
    }
    handleReadyForQuery(d) {
      if (this._canceledDueToError) return this.handleError(
        this._canceledDueToError,
        d
      );
      if (this.callback) try {
        this.callback(null, this._results);
      } catch (m) {
        X.nextTick(() => {
          throw m;
        });
      }
      this.emit(
        "end",
        this._results
      );
    }
    submit(d) {
      if (typeof this.text != "string" && typeof this.name != "string") return new Error(
        "A query must have either text or a name. Supplying neither is unsupported."
      );
      let m = d.parsedStatements[this.name];
      return this.text && m && this.text !== m ? new Error(`Prepared statements must be unique - '${this.name}' was used for a different statement`) : this.values && !Array.isArray(this.values) ? new Error("Query values must be an array") : (this.requiresPreparation() ? this.prepare(d) : d.query(this.text), null);
    }
    hasBeenParsed(d) {
      return this.name && d.parsedStatements[this.name];
    }
    handlePortalSuspended(d) {
      this._getRows(d, this.rows);
    }
    _getRows(d, m) {
      d.execute({ portal: this.portal, rows: m }), m ? d.flush() : d.sync();
    }
    prepare(d) {
      this.isPreparedStatement = !0, this.hasBeenParsed(d) || d.parse({ text: this.text, name: this.name, types: this.types });
      try {
        d.bind({ portal: this.portal, statement: this.name, values: this.values, binary: this.binary, valueMapper: n.prepareValue });
      } catch (m) {
        this.handleError(m, d);
        return;
      }
      d.describe({ type: "P", name: this.portal || "" }), this._getRows(d, this.rows);
    }
    handleCopyInResponse(d) {
      d.sendCopyFail("No source stream defined");
    }
    handleCopyData(d, m) {
    }
  };
  g(s, "Query");
  var u = s;
  e.exports = u;
}), bn = ee((i) => {
  V(), Object.defineProperty(i, "__esModule", { value: !0 }), i.NoticeMessage = i.DataRowMessage = i.CommandCompleteMessage = i.ReadyForQueryMessage = i.NotificationResponseMessage = i.BackendKeyDataMessage = i.AuthenticationMD5Password = i.ParameterStatusMessage = i.ParameterDescriptionMessage = i.RowDescriptionMessage = i.Field = i.CopyResponse = i.CopyDataMessage = i.DatabaseError = i.copyDone = i.emptyQuery = i.replicationStart = i.portalSuspended = i.noData = i.closeComplete = i.bindComplete = i.parseComplete = void 0, i.parseComplete = { name: "parseComplete", length: 5 }, i.bindComplete = { name: "bindComplete", length: 5 }, i.closeComplete = { name: "closeComplete", length: 5 }, i.noData = { name: "noData", length: 5 }, i.portalSuspended = { name: "portalSuspended", length: 5 }, i.replicationStart = { name: "replicationStart", length: 4 }, i.emptyQuery = { name: "emptyQuery", length: 4 }, i.copyDone = { name: "copyDone", length: 4 };
  var e = class extends Error {
    constructor(M, Q, G) {
      super(M), this.length = Q, this.name = G;
    }
  };
  g(e, "DatabaseError");
  var t = e;
  i.DatabaseError = t;
  var r = class {
    constructor(M, Q) {
      this.length = M, this.chunk = Q, this.name = "copyData";
    }
  };
  g(r, "CopyDataMessage");
  var n = r;
  i.CopyDataMessage = n;
  var s = class {
    constructor(M, Q, G, Y) {
      this.length = M, this.name = Q, this.binary = G, this.columnTypes = new Array(Y);
    }
  };
  g(s, "CopyResponse");
  var u = s;
  i.CopyResponse = u;
  var a = class {
    constructor(M, Q, G, Y, te, Z, we) {
      this.name = M, this.tableID = Q, this.columnID = G, this.dataTypeID = Y, this.dataTypeSize = te, this.dataTypeModifier = Z, this.format = we;
    }
  };
  g(a, "Field");
  var d = a;
  i.Field = d;
  var m = class {
    constructor(M, Q) {
      this.length = M, this.fieldCount = Q, this.name = "rowDescription", this.fields = new Array(this.fieldCount);
    }
  };
  g(m, "RowDescriptionMessage");
  var f = m;
  i.RowDescriptionMessage = f;
  var w = class {
    constructor(M, Q) {
      this.length = M, this.parameterCount = Q, this.name = "parameterDescription", this.dataTypeIDs = new Array(this.parameterCount);
    }
  };
  g(w, "ParameterDescriptionMessage");
  var y = w;
  i.ParameterDescriptionMessage = y;
  var v = class {
    constructor(M, Q, G) {
      this.length = M, this.parameterName = Q, this.parameterValue = G, this.name = "parameterStatus";
    }
  };
  g(v, "ParameterStatusMessage");
  var l = v;
  i.ParameterStatusMessage = l;
  var h = class {
    constructor(M, Q) {
      this.length = M, this.salt = Q, this.name = "authenticationMD5Password";
    }
  };
  g(h, "AuthenticationMD5Password");
  var b = h;
  i.AuthenticationMD5Password = b;
  var S = class {
    constructor(M, Q, G) {
      this.length = M, this.processID = Q, this.secretKey = G, this.name = "backendKeyData";
    }
  };
  g(S, "BackendKeyDataMessage");
  var E = S;
  i.BackendKeyDataMessage = E;
  var T = class {
    constructor(M, Q, G, Y) {
      this.length = M, this.processId = Q, this.channel = G, this.payload = Y, this.name = "notification";
    }
  };
  g(T, "NotificationResponseMessage");
  var N = T;
  i.NotificationResponseMessage = N;
  var O = class {
    constructor(M, Q) {
      this.length = M, this.status = Q, this.name = "readyForQuery";
    }
  };
  g(O, "ReadyForQueryMessage");
  var _ = O;
  i.ReadyForQueryMessage = _;
  var x = class {
    constructor(M, Q) {
      this.length = M, this.text = Q, this.name = "commandComplete";
    }
  };
  g(x, "CommandCompleteMessage");
  var L = x;
  i.CommandCompleteMessage = L;
  var P = class {
    constructor(M, Q) {
      this.length = M, this.fields = Q, this.name = "dataRow", this.fieldCount = Q.length;
    }
  };
  g(P, "DataRowMessage");
  var q = P;
  i.DataRowMessage = q;
  var R = class {
    constructor(M, Q) {
      this.length = M, this.message = Q, this.name = "notice";
    }
  };
  g(R, "NoticeMessage");
  var F = R;
  i.NoticeMessage = F;
}), Ys = ee((i) => {
  V(), Object.defineProperty(i, "__esModule", { value: !0 }), i.Writer = void 0;
  var e = class {
    constructor(n = 256) {
      this.size = n, this.offset = 5, this.headerPosition = 0, this.buffer = K.allocUnsafe(n);
    }
    ensure(n) {
      if (this.buffer.length - this.offset < n) {
        let s = this.buffer, u = s.length + (s.length >> 1) + n;
        this.buffer = K.allocUnsafe(u), s.copy(
          this.buffer
        );
      }
    }
    addInt32(n) {
      return this.ensure(4), this.buffer[this.offset++] = n >>> 24 & 255, this.buffer[this.offset++] = n >>> 16 & 255, this.buffer[this.offset++] = n >>> 8 & 255, this.buffer[this.offset++] = n >>> 0 & 255, this;
    }
    addInt16(n) {
      return this.ensure(2), this.buffer[this.offset++] = n >>> 8 & 255, this.buffer[this.offset++] = n >>> 0 & 255, this;
    }
    addCString(n) {
      if (!n) this.ensure(1);
      else {
        let s = K.byteLength(n);
        this.ensure(s + 1), this.buffer.write(n, this.offset, "utf-8"), this.offset += s;
      }
      return this.buffer[this.offset++] = 0, this;
    }
    addString(n = "") {
      let s = K.byteLength(n);
      return this.ensure(s), this.buffer.write(n, this.offset), this.offset += s, this;
    }
    add(n) {
      return this.ensure(
        n.length
      ), n.copy(this.buffer, this.offset), this.offset += n.length, this;
    }
    join(n) {
      if (n) {
        this.buffer[this.headerPosition] = n;
        let s = this.offset - (this.headerPosition + 1);
        this.buffer.writeInt32BE(s, this.headerPosition + 1);
      }
      return this.buffer.slice(n ? 0 : 5, this.offset);
    }
    flush(n) {
      let s = this.join(n);
      return this.offset = 5, this.headerPosition = 0, this.buffer = K.allocUnsafe(this.size), s;
    }
  };
  g(e, "Writer");
  var t = e;
  i.Writer = t;
}), Zs = ee((i) => {
  V(), Object.defineProperty(i, "__esModule", { value: !0 }), i.serialize = void 0;
  var e = Ys(), t = new e.Writer(), r = g((M) => {
    t.addInt16(3).addInt16(0);
    for (let Y of Object.keys(M)) t.addCString(
      Y
    ).addCString(M[Y]);
    t.addCString("client_encoding").addCString("UTF8");
    let Q = t.addCString("").flush(), G = Q.length + 4;
    return new e.Writer().addInt32(G).add(Q).flush();
  }, "startup"), n = g(() => {
    let M = K.allocUnsafe(
      8
    );
    return M.writeInt32BE(8, 0), M.writeInt32BE(80877103, 4), M;
  }, "requestSsl"), s = g((M) => t.addCString(M).flush(
    112
  ), "password"), u = g(function(M, Q) {
    return t.addCString(M).addInt32(K.byteLength(Q)).addString(Q), t.flush(112);
  }, "sendSASLInitialResponseMessage"), a = g(function(M) {
    return t.addString(M).flush(112);
  }, "sendSCRAMClientFinalMessage"), d = g((M) => t.addCString(M).flush(81), "query"), m = [], f = g((M) => {
    let Q = M.name || "";
    Q.length > 63 && (console.error("Warning! Postgres only supports 63 characters for query names."), console.error("You supplied %s (%s)", Q, Q.length), console.error("This can cause conflicts and silent errors executing queries"));
    let G = M.types || m, Y = G.length, te = t.addCString(Q).addCString(M.text).addInt16(Y);
    for (let Z = 0; Z < Y; Z++) te.addInt32(G[Z]);
    return t.flush(80);
  }, "parse"), w = new e.Writer(), y = g(function(M, Q) {
    for (let G = 0; G < M.length; G++) {
      let Y = Q ? Q(M[G], G) : M[G];
      Y == null ? (t.addInt16(0), w.addInt32(-1)) : Y instanceof K ? (t.addInt16(
        1
      ), w.addInt32(Y.length), w.add(Y)) : (t.addInt16(0), w.addInt32(K.byteLength(Y)), w.addString(Y));
    }
  }, "writeValues"), v = g((M = {}) => {
    let Q = M.portal || "", G = M.statement || "", Y = M.binary || !1, te = M.values || m, Z = te.length;
    return t.addCString(Q).addCString(G), t.addInt16(Z), y(te, M.valueMapper), t.addInt16(Z), t.add(w.flush()), t.addInt16(Y ? 1 : 0), t.flush(66);
  }, "bind"), l = K.from([69, 0, 0, 0, 9, 0, 0, 0, 0, 0]), h = g((M) => {
    if (!M || !M.portal && !M.rows) return l;
    let Q = M.portal || "", G = M.rows || 0, Y = K.byteLength(Q), te = 4 + Y + 1 + 4, Z = K.allocUnsafe(1 + te);
    return Z[0] = 69, Z.writeInt32BE(te, 1), Z.write(Q, 5, "utf-8"), Z[Y + 5] = 0, Z.writeUInt32BE(G, Z.length - 4), Z;
  }, "execute"), b = g(
    (M, Q) => {
      let G = K.allocUnsafe(16);
      return G.writeInt32BE(16, 0), G.writeInt16BE(1234, 4), G.writeInt16BE(
        5678,
        6
      ), G.writeInt32BE(M, 8), G.writeInt32BE(Q, 12), G;
    },
    "cancel"
  ), S = g((M, Q) => {
    let G = 4 + K.byteLength(Q) + 1, Y = K.allocUnsafe(1 + G);
    return Y[0] = M, Y.writeInt32BE(G, 1), Y.write(Q, 5, "utf-8"), Y[G] = 0, Y;
  }, "cstringMessage"), E = t.addCString("P").flush(68), T = t.addCString("S").flush(68), N = g((M) => M.name ? S(68, `${M.type}${M.name || ""}`) : M.type === "P" ? E : T, "describe"), O = g((M) => {
    let Q = `${M.type}${M.name || ""}`;
    return S(67, Q);
  }, "close"), _ = g((M) => t.add(M).flush(100), "copyData"), x = g((M) => S(102, M), "copyFail"), L = g((M) => K.from([M, 0, 0, 0, 4]), "codeOnlyBuffer"), P = L(72), q = L(83), R = L(88), F = L(99), j = {
    startup: r,
    password: s,
    requestSsl: n,
    sendSASLInitialResponseMessage: u,
    sendSCRAMClientFinalMessage: a,
    query: d,
    parse: f,
    bind: v,
    execute: h,
    describe: N,
    close: O,
    flush: g(
      () => P,
      "flush"
    ),
    sync: g(() => q, "sync"),
    end: g(() => R, "end"),
    copyData: _,
    copyDone: g(() => F, "copyDone"),
    copyFail: x,
    cancel: b
  };
  i.serialize = j;
}), Xs = ee((i) => {
  V(), Object.defineProperty(i, "__esModule", { value: !0 }), i.BufferReader = void 0;
  var e = K.allocUnsafe(0), t = class {
    constructor(s = 0) {
      this.offset = s, this.buffer = e, this.encoding = "utf-8";
    }
    setBuffer(s, u) {
      this.offset = s, this.buffer = u;
    }
    int16() {
      let s = this.buffer.readInt16BE(this.offset);
      return this.offset += 2, s;
    }
    byte() {
      let s = this.buffer[this.offset];
      return this.offset++, s;
    }
    int32() {
      let s = this.buffer.readInt32BE(
        this.offset
      );
      return this.offset += 4, s;
    }
    uint32() {
      let s = this.buffer.readUInt32BE(this.offset);
      return this.offset += 4, s;
    }
    string(s) {
      let u = this.buffer.toString(this.encoding, this.offset, this.offset + s);
      return this.offset += s, u;
    }
    cstring() {
      let s = this.offset, u = s;
      for (; this.buffer[u++] !== 0; ) ;
      return this.offset = u, this.buffer.toString(this.encoding, s, u - 1);
    }
    bytes(s) {
      let u = this.buffer.slice(this.offset, this.offset + s);
      return this.offset += s, u;
    }
  };
  g(t, "BufferReader");
  var r = t;
  i.BufferReader = r;
}), eo = ee((i) => {
  V(), Object.defineProperty(i, "__esModule", { value: !0 }), i.Parser = void 0;
  var e = bn(), t = Xs(), r = 1, n = 4, s = r + n, u = K.allocUnsafe(0), a = class {
    constructor(f) {
      if (this.buffer = u, this.bufferLength = 0, this.bufferOffset = 0, this.reader = new t.BufferReader(), f?.mode === "binary") throw new Error("Binary mode not supported yet");
      this.mode = f?.mode || "text";
    }
    parse(f, w) {
      this.mergeBuffer(f);
      let y = this.bufferOffset + this.bufferLength, v = this.bufferOffset;
      for (; v + s <= y; ) {
        let l = this.buffer[v], h = this.buffer.readUInt32BE(
          v + r
        ), b = r + h;
        if (b + v <= y) {
          let S = this.handlePacket(v + s, l, h, this.buffer);
          w(S), v += b;
        } else break;
      }
      v === y ? (this.buffer = u, this.bufferLength = 0, this.bufferOffset = 0) : (this.bufferLength = y - v, this.bufferOffset = v);
    }
    mergeBuffer(f) {
      if (this.bufferLength > 0) {
        let w = this.bufferLength + f.byteLength;
        if (w + this.bufferOffset > this.buffer.byteLength) {
          let y;
          if (w <= this.buffer.byteLength && this.bufferOffset >= this.bufferLength) y = this.buffer;
          else {
            let v = this.buffer.byteLength * 2;
            for (; w >= v; ) v *= 2;
            y = K.allocUnsafe(v);
          }
          this.buffer.copy(y, 0, this.bufferOffset, this.bufferOffset + this.bufferLength), this.buffer = y, this.bufferOffset = 0;
        }
        f.copy(this.buffer, this.bufferOffset + this.bufferLength), this.bufferLength = w;
      } else this.buffer = f, this.bufferOffset = 0, this.bufferLength = f.byteLength;
    }
    handlePacket(f, w, y, v) {
      switch (w) {
        case 50:
          return e.bindComplete;
        case 49:
          return e.parseComplete;
        case 51:
          return e.closeComplete;
        case 110:
          return e.noData;
        case 115:
          return e.portalSuspended;
        case 99:
          return e.copyDone;
        case 87:
          return e.replicationStart;
        case 73:
          return e.emptyQuery;
        case 68:
          return this.parseDataRowMessage(f, y, v);
        case 67:
          return this.parseCommandCompleteMessage(
            f,
            y,
            v
          );
        case 90:
          return this.parseReadyForQueryMessage(f, y, v);
        case 65:
          return this.parseNotificationMessage(
            f,
            y,
            v
          );
        case 82:
          return this.parseAuthenticationResponse(f, y, v);
        case 83:
          return this.parseParameterStatusMessage(
            f,
            y,
            v
          );
        case 75:
          return this.parseBackendKeyData(f, y, v);
        case 69:
          return this.parseErrorMessage(f, y, v, "error");
        case 78:
          return this.parseErrorMessage(f, y, v, "notice");
        case 84:
          return this.parseRowDescriptionMessage(
            f,
            y,
            v
          );
        case 116:
          return this.parseParameterDescriptionMessage(f, y, v);
        case 71:
          return this.parseCopyInMessage(
            f,
            y,
            v
          );
        case 72:
          return this.parseCopyOutMessage(f, y, v);
        case 100:
          return this.parseCopyData(f, y, v);
        default:
          return new e.DatabaseError("received invalid response: " + w.toString(16), y, "error");
      }
    }
    parseReadyForQueryMessage(f, w, y) {
      this.reader.setBuffer(f, y);
      let v = this.reader.string(1);
      return new e.ReadyForQueryMessage(w, v);
    }
    parseCommandCompleteMessage(f, w, y) {
      this.reader.setBuffer(f, y);
      let v = this.reader.cstring();
      return new e.CommandCompleteMessage(w, v);
    }
    parseCopyData(f, w, y) {
      let v = y.slice(f, f + (w - 4));
      return new e.CopyDataMessage(w, v);
    }
    parseCopyInMessage(f, w, y) {
      return this.parseCopyMessage(
        f,
        w,
        y,
        "copyInResponse"
      );
    }
    parseCopyOutMessage(f, w, y) {
      return this.parseCopyMessage(f, w, y, "copyOutResponse");
    }
    parseCopyMessage(f, w, y, v) {
      this.reader.setBuffer(f, y);
      let l = this.reader.byte() !== 0, h = this.reader.int16(), b = new e.CopyResponse(w, v, l, h);
      for (let S = 0; S < h; S++) b.columnTypes[S] = this.reader.int16();
      return b;
    }
    parseNotificationMessage(f, w, y) {
      this.reader.setBuffer(f, y);
      let v = this.reader.int32(), l = this.reader.cstring(), h = this.reader.cstring();
      return new e.NotificationResponseMessage(w, v, l, h);
    }
    parseRowDescriptionMessage(f, w, y) {
      this.reader.setBuffer(
        f,
        y
      );
      let v = this.reader.int16(), l = new e.RowDescriptionMessage(w, v);
      for (let h = 0; h < v; h++) l.fields[h] = this.parseField();
      return l;
    }
    parseField() {
      let f = this.reader.cstring(), w = this.reader.uint32(), y = this.reader.int16(), v = this.reader.uint32(), l = this.reader.int16(), h = this.reader.int32(), b = this.reader.int16() === 0 ? "text" : "binary";
      return new e.Field(f, w, y, v, l, h, b);
    }
    parseParameterDescriptionMessage(f, w, y) {
      this.reader.setBuffer(f, y);
      let v = this.reader.int16(), l = new e.ParameterDescriptionMessage(w, v);
      for (let h = 0; h < v; h++)
        l.dataTypeIDs[h] = this.reader.int32();
      return l;
    }
    parseDataRowMessage(f, w, y) {
      this.reader.setBuffer(f, y);
      let v = this.reader.int16(), l = new Array(v);
      for (let h = 0; h < v; h++) {
        let b = this.reader.int32();
        l[h] = b === -1 ? null : this.reader.string(b);
      }
      return new e.DataRowMessage(w, l);
    }
    parseParameterStatusMessage(f, w, y) {
      this.reader.setBuffer(f, y);
      let v = this.reader.cstring(), l = this.reader.cstring();
      return new e.ParameterStatusMessage(
        w,
        v,
        l
      );
    }
    parseBackendKeyData(f, w, y) {
      this.reader.setBuffer(f, y);
      let v = this.reader.int32(), l = this.reader.int32();
      return new e.BackendKeyDataMessage(w, v, l);
    }
    parseAuthenticationResponse(f, w, y) {
      this.reader.setBuffer(
        f,
        y
      );
      let v = this.reader.int32(), l = { name: "authenticationOk", length: w };
      switch (v) {
        case 0:
          break;
        case 3:
          l.length === 8 && (l.name = "authenticationCleartextPassword");
          break;
        case 5:
          if (l.length === 12) {
            l.name = "authenticationMD5Password";
            let h = this.reader.bytes(4);
            return new e.AuthenticationMD5Password(w, h);
          }
          break;
        case 10:
          {
            l.name = "authenticationSASL", l.mechanisms = [];
            let h;
            do
              h = this.reader.cstring(), h && l.mechanisms.push(h);
            while (h);
          }
          break;
        case 11:
          l.name = "authenticationSASLContinue", l.data = this.reader.string(w - 8);
          break;
        case 12:
          l.name = "authenticationSASLFinal", l.data = this.reader.string(w - 8);
          break;
        default:
          throw new Error("Unknown authenticationOk message type " + v);
      }
      return l;
    }
    parseErrorMessage(f, w, y, v) {
      this.reader.setBuffer(f, y);
      let l = {}, h = this.reader.string(1);
      for (; h !== "\0"; ) l[h] = this.reader.cstring(), h = this.reader.string(1);
      let b = l.M, S = v === "notice" ? new e.NoticeMessage(w, b) : new e.DatabaseError(b, w, v);
      return S.severity = l.S, S.code = l.C, S.detail = l.D, S.hint = l.H, S.position = l.P, S.internalPosition = l.p, S.internalQuery = l.q, S.where = l.W, S.schema = l.s, S.table = l.t, S.column = l.c, S.dataType = l.d, S.constraint = l.n, S.file = l.F, S.line = l.L, S.routine = l.R, S;
    }
  };
  g(a, "Parser");
  var d = a;
  i.Parser = d;
}), wn = ee((i) => {
  V(), Object.defineProperty(i, "__esModule", { value: !0 }), i.DatabaseError = i.serialize = i.parse = void 0;
  var e = bn();
  Object.defineProperty(i, "DatabaseError", { enumerable: !0, get: g(
    function() {
      return e.DatabaseError;
    },
    "get"
  ) });
  var t = Zs();
  Object.defineProperty(i, "serialize", {
    enumerable: !0,
    get: g(function() {
      return t.serialize;
    }, "get")
  });
  var r = eo();
  function n(s, u) {
    let a = new r.Parser();
    return s.on("data", (d) => a.parse(d, u)), new Promise((d) => s.on("end", () => d()));
  }
  g(n, "parse"), i.parse = n;
}), vn = {};
Ce(vn, { connect: () => Sn });
function Sn({ socket: i, servername: e }) {
  return i.startTls(e), i;
}
var to = be(
  () => {
    V(), g(Sn, "connect");
  }
), _n = ee((i, e) => {
  V();
  var t = (Nt(), fe(Hi)), r = Qe().EventEmitter, { parse: n, serialize: s } = wn(), u = s.flush(), a = s.sync(), d = s.end(), m = class extends r {
    constructor(y) {
      super(), y = y || {}, this.stream = y.stream || new t.Socket(), this._keepAlive = y.keepAlive, this._keepAliveInitialDelayMillis = y.keepAliveInitialDelayMillis, this.lastBuffer = !1, this.parsedStatements = {}, this.ssl = y.ssl || !1, this._ending = !1, this._emitMessage = !1;
      var v = this;
      this.on("newListener", function(l) {
        l === "message" && (v._emitMessage = !0);
      });
    }
    connect(y, v) {
      var l = this;
      this._connecting = !0, this.stream.setNoDelay(!0), this.stream.connect(y, v), this.stream.once("connect", function() {
        l._keepAlive && l.stream.setKeepAlive(!0, l._keepAliveInitialDelayMillis), l.emit("connect");
      });
      let h = g(function(b) {
        l._ending && (b.code === "ECONNRESET" || b.code === "EPIPE") || l.emit("error", b);
      }, "reportStreamError");
      if (this.stream.on("error", h), this.stream.on("close", function() {
        l.emit("end");
      }), !this.ssl) return this.attachListeners(
        this.stream
      );
      this.stream.once("data", function(b) {
        var S = b.toString("utf8");
        switch (S) {
          case "S":
            break;
          case "N":
            return l.stream.end(), l.emit("error", new Error("The server does not support SSL connections"));
          default:
            return l.stream.end(), l.emit("error", new Error("There was an error establishing an SSL connection"));
        }
        var E = (to(), fe(vn));
        let T = { socket: l.stream };
        l.ssl !== !0 && (Object.assign(T, l.ssl), "key" in l.ssl && (T.key = l.ssl.key)), t.isIP(v) === 0 && (T.servername = v);
        try {
          l.stream = E.connect(T);
        } catch (N) {
          return l.emit(
            "error",
            N
          );
        }
        l.attachListeners(l.stream), l.stream.on("error", h), l.emit("sslconnect");
      });
    }
    attachListeners(y) {
      y.on(
        "end",
        () => {
          this.emit("end");
        }
      ), n(y, (v) => {
        var l = v.name === "error" ? "errorMessage" : v.name;
        this._emitMessage && this.emit("message", v), this.emit(l, v);
      });
    }
    requestSsl() {
      this.stream.write(s.requestSsl());
    }
    startup(y) {
      this.stream.write(s.startup(y));
    }
    cancel(y, v) {
      this._send(s.cancel(y, v));
    }
    password(y) {
      this._send(s.password(y));
    }
    sendSASLInitialResponseMessage(y, v) {
      this._send(s.sendSASLInitialResponseMessage(y, v));
    }
    sendSCRAMClientFinalMessage(y) {
      this._send(s.sendSCRAMClientFinalMessage(
        y
      ));
    }
    _send(y) {
      return this.stream.writable ? this.stream.write(y) : !1;
    }
    query(y) {
      this._send(s.query(y));
    }
    parse(y) {
      this._send(s.parse(y));
    }
    bind(y) {
      this._send(s.bind(y));
    }
    execute(y) {
      this._send(s.execute(y));
    }
    flush() {
      this.stream.writable && this.stream.write(u);
    }
    sync() {
      this._ending = !0, this._send(u), this._send(a);
    }
    ref() {
      this.stream.ref();
    }
    unref() {
      this.stream.unref();
    }
    end() {
      if (this._ending = !0, !this._connecting || !this.stream.writable) {
        this.stream.end();
        return;
      }
      return this.stream.write(d, () => {
        this.stream.end();
      });
    }
    close(y) {
      this._send(s.close(y));
    }
    describe(y) {
      this._send(s.describe(y));
    }
    sendCopyFromChunk(y) {
      this._send(s.copyData(y));
    }
    endCopyFrom() {
      this._send(s.copyDone());
    }
    sendCopyFail(y) {
      this._send(s.copyFail(y));
    }
  };
  g(m, "Connection");
  var f = m;
  e.exports = f;
}), ro = ee((i, e) => {
  V();
  var t = Qe().EventEmitter;
  ir(), fe(Rt);
  var r = rr(), n = js(), s = Ws(), u = Mr(), a = Qr(), d = Js(), m = tr(), f = _n(), w = class extends t {
    constructor(l) {
      super(), this.connectionParameters = new a(l), this.user = this.connectionParameters.user, this.database = this.connectionParameters.database, this.port = this.connectionParameters.port, this.host = this.connectionParameters.host, Object.defineProperty(
        this,
        "password",
        { configurable: !0, enumerable: !1, writable: !0, value: this.connectionParameters.password }
      ), this.replication = this.connectionParameters.replication;
      var h = l || {};
      this._Promise = h.Promise || Xt.Promise, this._types = new u(h.types), this._ending = !1, this._connecting = !1, this._connected = !1, this._connectionError = !1, this._queryable = !0, this.connection = h.connection || new f({ stream: h.stream, ssl: this.connectionParameters.ssl, keepAlive: h.keepAlive || !1, keepAliveInitialDelayMillis: h.keepAliveInitialDelayMillis || 0, encoding: this.connectionParameters.client_encoding || "utf8" }), this.queryQueue = [], this.binary = h.binary || m.binary, this.processID = null, this.secretKey = null, this.ssl = this.connectionParameters.ssl || !1, this.ssl && this.ssl.key && Object.defineProperty(this.ssl, "key", { enumerable: !1 }), this._connectionTimeoutMillis = h.connectionTimeoutMillis || 0;
    }
    _errorAllQueries(l) {
      let h = g((b) => {
        X.nextTick(() => {
          b.handleError(l, this.connection);
        });
      }, "enqueueError");
      this.activeQuery && (h(this.activeQuery), this.activeQuery = null), this.queryQueue.forEach(h), this.queryQueue.length = 0;
    }
    _connect(l) {
      var h = this, b = this.connection;
      if (this._connectionCallback = l, this._connecting || this._connected) {
        let S = new Error("Client has already been connected. You cannot reuse a client.");
        X.nextTick(
          () => {
            l(S);
          }
        );
        return;
      }
      this._connecting = !0, this.connectionTimeoutHandle, this._connectionTimeoutMillis > 0 && (this.connectionTimeoutHandle = setTimeout(() => {
        b._ending = !0, b.stream.destroy(new Error("timeout expired"));
      }, this._connectionTimeoutMillis)), this.host && this.host.indexOf("/") === 0 ? b.connect(this.host + "/.s.PGSQL." + this.port) : b.connect(this.port, this.host), b.on("connect", function() {
        h.ssl ? b.requestSsl() : b.startup(h.getStartupConf());
      }), b.on("sslconnect", function() {
        b.startup(h.getStartupConf());
      }), this._attachListeners(
        b
      ), b.once("end", () => {
        let S = this._ending ? new Error("Connection terminated") : new Error("Connection terminated unexpectedly");
        clearTimeout(this.connectionTimeoutHandle), this._errorAllQueries(S), this._ending || (this._connecting && !this._connectionError ? this._connectionCallback ? this._connectionCallback(S) : this._handleErrorEvent(S) : this._connectionError || this._handleErrorEvent(S)), X.nextTick(() => {
          this.emit("end");
        });
      });
    }
    connect(l) {
      if (l) {
        this._connect(l);
        return;
      }
      return new this._Promise((h, b) => {
        this._connect((S) => {
          S ? b(S) : h();
        });
      });
    }
    _attachListeners(l) {
      l.on("authenticationCleartextPassword", this._handleAuthCleartextPassword.bind(this)), l.on("authenticationMD5Password", this._handleAuthMD5Password.bind(this)), l.on("authenticationSASL", this._handleAuthSASL.bind(this)), l.on("authenticationSASLContinue", this._handleAuthSASLContinue.bind(this)), l.on("authenticationSASLFinal", this._handleAuthSASLFinal.bind(this)), l.on("backendKeyData", this._handleBackendKeyData.bind(this)), l.on("error", this._handleErrorEvent.bind(this)), l.on("errorMessage", this._handleErrorMessage.bind(this)), l.on("readyForQuery", this._handleReadyForQuery.bind(this)), l.on("notice", this._handleNotice.bind(this)), l.on("rowDescription", this._handleRowDescription.bind(this)), l.on("dataRow", this._handleDataRow.bind(this)), l.on("portalSuspended", this._handlePortalSuspended.bind(
        this
      )), l.on("emptyQuery", this._handleEmptyQuery.bind(this)), l.on("commandComplete", this._handleCommandComplete.bind(this)), l.on("parseComplete", this._handleParseComplete.bind(this)), l.on("copyInResponse", this._handleCopyInResponse.bind(this)), l.on("copyData", this._handleCopyData.bind(this)), l.on("notification", this._handleNotification.bind(this));
    }
    _checkPgPass(l) {
      let h = this.connection;
      typeof this.password == "function" ? this._Promise.resolve().then(() => this.password()).then((b) => {
        if (b !== void 0) {
          if (typeof b != "string") {
            h.emit("error", new TypeError(
              "Password must be a string"
            ));
            return;
          }
          this.connectionParameters.password = this.password = b;
        } else this.connectionParameters.password = this.password = null;
        l();
      }).catch((b) => {
        h.emit("error", b);
      }) : this.password !== null ? l() : s(
        this.connectionParameters,
        (b) => {
          b !== void 0 && (this.connectionParameters.password = this.password = b), l();
        }
      );
    }
    _handleAuthCleartextPassword(l) {
      this._checkPgPass(() => {
        this.connection.password(this.password);
      });
    }
    _handleAuthMD5Password(l) {
      this._checkPgPass(
        () => {
          let h = r.postgresMd5PasswordHash(this.user, this.password, l.salt);
          this.connection.password(h);
        }
      );
    }
    _handleAuthSASL(l) {
      this._checkPgPass(() => {
        this.saslSession = n.startSession(l.mechanisms), this.connection.sendSASLInitialResponseMessage(
          this.saslSession.mechanism,
          this.saslSession.response
        );
      });
    }
    _handleAuthSASLContinue(l) {
      n.continueSession(
        this.saslSession,
        this.password,
        l.data
      ), this.connection.sendSCRAMClientFinalMessage(this.saslSession.response);
    }
    _handleAuthSASLFinal(l) {
      n.finalizeSession(this.saslSession, l.data), this.saslSession = null;
    }
    _handleBackendKeyData(l) {
      this.processID = l.processID, this.secretKey = l.secretKey;
    }
    _handleReadyForQuery(l) {
      this._connecting && (this._connecting = !1, this._connected = !0, clearTimeout(this.connectionTimeoutHandle), this._connectionCallback && (this._connectionCallback(null, this), this._connectionCallback = null), this.emit("connect"));
      let { activeQuery: h } = this;
      this.activeQuery = null, this.readyForQuery = !0, h && h.handleReadyForQuery(this.connection), this._pulseQueryQueue();
    }
    _handleErrorWhileConnecting(l) {
      if (!this._connectionError) {
        if (this._connectionError = !0, clearTimeout(this.connectionTimeoutHandle), this._connectionCallback) return this._connectionCallback(l);
        this.emit("error", l);
      }
    }
    _handleErrorEvent(l) {
      if (this._connecting) return this._handleErrorWhileConnecting(l);
      this._queryable = !1, this._errorAllQueries(l), this.emit("error", l);
    }
    _handleErrorMessage(l) {
      if (this._connecting) return this._handleErrorWhileConnecting(l);
      let h = this.activeQuery;
      if (!h) {
        this._handleErrorEvent(l);
        return;
      }
      this.activeQuery = null, h.handleError(
        l,
        this.connection
      );
    }
    _handleRowDescription(l) {
      this.activeQuery.handleRowDescription(l);
    }
    _handleDataRow(l) {
      this.activeQuery.handleDataRow(l);
    }
    _handlePortalSuspended(l) {
      this.activeQuery.handlePortalSuspended(this.connection);
    }
    _handleEmptyQuery(l) {
      this.activeQuery.handleEmptyQuery(this.connection);
    }
    _handleCommandComplete(l) {
      this.activeQuery.handleCommandComplete(l, this.connection);
    }
    _handleParseComplete(l) {
      this.activeQuery.name && (this.connection.parsedStatements[this.activeQuery.name] = this.activeQuery.text);
    }
    _handleCopyInResponse(l) {
      this.activeQuery.handleCopyInResponse(this.connection);
    }
    _handleCopyData(l) {
      this.activeQuery.handleCopyData(
        l,
        this.connection
      );
    }
    _handleNotification(l) {
      this.emit("notification", l);
    }
    _handleNotice(l) {
      this.emit("notice", l);
    }
    getStartupConf() {
      var l = this.connectionParameters, h = { user: l.user, database: l.database }, b = l.application_name || l.fallback_application_name;
      return b && (h.application_name = b), l.replication && (h.replication = "" + l.replication), l.statement_timeout && (h.statement_timeout = String(parseInt(l.statement_timeout, 10))), l.lock_timeout && (h.lock_timeout = String(parseInt(l.lock_timeout, 10))), l.idle_in_transaction_session_timeout && (h.idle_in_transaction_session_timeout = String(parseInt(l.idle_in_transaction_session_timeout, 10))), l.options && (h.options = l.options), h;
    }
    cancel(l, h) {
      if (l.activeQuery === h) {
        var b = this.connection;
        this.host && this.host.indexOf("/") === 0 ? b.connect(this.host + "/.s.PGSQL." + this.port) : b.connect(this.port, this.host), b.on("connect", function() {
          b.cancel(
            l.processID,
            l.secretKey
          );
        });
      } else l.queryQueue.indexOf(h) !== -1 && l.queryQueue.splice(l.queryQueue.indexOf(h), 1);
    }
    setTypeParser(l, h, b) {
      return this._types.setTypeParser(l, h, b);
    }
    getTypeParser(l, h) {
      return this._types.getTypeParser(l, h);
    }
    escapeIdentifier(l) {
      return '"' + l.replace(/"/g, '""') + '"';
    }
    escapeLiteral(l) {
      for (var h = !1, b = "'", S = 0; S < l.length; S++) {
        var E = l[S];
        E === "'" ? b += E + E : E === "\\" ? (b += E + E, h = !0) : b += E;
      }
      return b += "'", h === !0 && (b = " E" + b), b;
    }
    _pulseQueryQueue() {
      if (this.readyForQuery === !0) if (this.activeQuery = this.queryQueue.shift(), this.activeQuery) {
        this.readyForQuery = !1, this.hasExecuted = !0;
        let l = this.activeQuery.submit(this.connection);
        l && X.nextTick(() => {
          this.activeQuery.handleError(l, this.connection), this.readyForQuery = !0, this._pulseQueryQueue();
        });
      } else this.hasExecuted && (this.activeQuery = null, this.emit("drain"));
    }
    query(l, h, b) {
      var S, E, T, N, O;
      if (l == null) throw new TypeError(
        "Client was passed a null or undefined query"
      );
      return typeof l.submit == "function" ? (T = l.query_timeout || this.connectionParameters.query_timeout, E = S = l, typeof h == "function" && (S.callback = S.callback || h)) : (T = this.connectionParameters.query_timeout, S = new d(l, h, b), S.callback || (E = new this._Promise((_, x) => {
        S.callback = (L, P) => L ? x(L) : _(P);
      }))), T && (O = S.callback, N = setTimeout(() => {
        var _ = new Error("Query read timeout");
        X.nextTick(
          () => {
            S.handleError(_, this.connection);
          }
        ), O(_), S.callback = () => {
        };
        var x = this.queryQueue.indexOf(S);
        x > -1 && this.queryQueue.splice(x, 1), this._pulseQueryQueue();
      }, T), S.callback = (_, x) => {
        clearTimeout(N), O(_, x);
      }), this.binary && !S.binary && (S.binary = !0), S._result && !S._result._types && (S._result._types = this._types), this._queryable ? this._ending ? (X.nextTick(() => {
        S.handleError(new Error("Client was closed and is not queryable"), this.connection);
      }), E) : (this.queryQueue.push(S), this._pulseQueryQueue(), E) : (X.nextTick(() => {
        S.handleError(new Error("Client has encountered a connection error and is not queryable"), this.connection);
      }), E);
    }
    ref() {
      this.connection.ref();
    }
    unref() {
      this.connection.unref();
    }
    end(l) {
      if (this._ending = !0, !this.connection._connecting) if (l) l();
      else return this._Promise.resolve();
      if (this.activeQuery || !this._queryable ? this.connection.stream.destroy() : this.connection.end(), l) this.connection.once("end", l);
      else return new this._Promise((h) => {
        this.connection.once("end", h);
      });
    }
  };
  g(w, "Client");
  var y = w;
  y.Query = d, e.exports = y;
}), io = ee((i, e) => {
  V();
  var t = Qe().EventEmitter, r = g(function() {
  }, "NOOP"), n = g((l, h) => {
    let b = l.findIndex(h);
    return b === -1 ? void 0 : l.splice(b, 1)[0];
  }, "removeWhere"), s = class {
    constructor(h, b, S) {
      this.client = h, this.idleListener = b, this.timeoutId = S;
    }
  };
  g(s, "IdleItem");
  var u = s, a = class {
    constructor(h) {
      this.callback = h;
    }
  };
  g(a, "PendingItem");
  var d = a;
  function m() {
    throw new Error("Release called on client which has already been released to the pool.");
  }
  g(m, "throwOnDoubleRelease");
  function f(l, h) {
    if (h)
      return { callback: h, result: void 0 };
    let b, S, E = g(function(N, O) {
      N ? b(N) : S(O);
    }, "cb"), T = new l(function(N, O) {
      S = N, b = O;
    }).catch((N) => {
      throw Error.captureStackTrace(N), N;
    });
    return { callback: E, result: T };
  }
  g(f, "promisify");
  function w(l, h) {
    return g(function b(S) {
      S.client = h, h.removeListener("error", b), h.on("error", () => {
        l.log(
          "additional client error after disconnection due to error",
          S
        );
      }), l._remove(h), l.emit("error", S, h);
    }, "idleListener");
  }
  g(w, "makeIdleListener");
  var y = class extends t {
    constructor(h, b) {
      super(), this.options = Object.assign({}, h), h != null && "password" in h && Object.defineProperty(this.options, "password", {
        configurable: !0,
        enumerable: !1,
        writable: !0,
        value: h.password
      }), h != null && h.ssl && h.ssl.key && Object.defineProperty(this.options.ssl, "key", { enumerable: !1 }), this.options.max = this.options.max || this.options.poolSize || 10, this.options.min = this.options.min || 0, this.options.maxUses = this.options.maxUses || 1 / 0, this.options.allowExitOnIdle = this.options.allowExitOnIdle || !1, this.options.maxLifetimeSeconds = this.options.maxLifetimeSeconds || 0, this.log = this.options.log || function() {
      }, this.Client = this.options.Client || b || nr().Client, this.Promise = this.options.Promise || Xt.Promise, typeof this.options.idleTimeoutMillis > "u" && (this.options.idleTimeoutMillis = 1e4), this._clients = [], this._idle = [], this._expired = /* @__PURE__ */ new WeakSet(), this._pendingQueue = [], this._endCallback = void 0, this.ending = !1, this.ended = !1;
    }
    _isFull() {
      return this._clients.length >= this.options.max;
    }
    _isAboveMin() {
      return this._clients.length > this.options.min;
    }
    _pulseQueue() {
      if (this.log("pulse queue"), this.ended) {
        this.log("pulse queue ended");
        return;
      }
      if (this.ending) {
        this.log("pulse queue on ending"), this._idle.length && this._idle.slice().map((b) => {
          this._remove(b.client);
        }), this._clients.length || (this.ended = !0, this._endCallback());
        return;
      }
      if (!this._pendingQueue.length) {
        this.log("no queued requests");
        return;
      }
      if (!this._idle.length && this._isFull()) return;
      let h = this._pendingQueue.shift();
      if (this._idle.length) {
        let b = this._idle.pop();
        clearTimeout(
          b.timeoutId
        );
        let S = b.client;
        S.ref && S.ref();
        let E = b.idleListener;
        return this._acquireClient(S, h, E, !1);
      }
      if (!this._isFull()) return this.newClient(h);
      throw new Error("unexpected condition");
    }
    _remove(h) {
      let b = n(
        this._idle,
        (S) => S.client === h
      );
      b !== void 0 && clearTimeout(b.timeoutId), this._clients = this._clients.filter(
        (S) => S !== h
      ), h.end(), this.emit("remove", h);
    }
    connect(h) {
      if (this.ending) {
        let E = new Error("Cannot use a pool after calling end on the pool");
        return h ? h(E) : this.Promise.reject(E);
      }
      let b = f(this.Promise, h), S = b.result;
      if (this._isFull() || this._idle.length) {
        if (this._idle.length && X.nextTick(() => this._pulseQueue()), !this.options.connectionTimeoutMillis) return this._pendingQueue.push(new d(b.callback)), S;
        let E = g((O, _, x) => {
          clearTimeout(N), b.callback(O, _, x);
        }, "queueCallback"), T = new d(E), N = setTimeout(() => {
          n(
            this._pendingQueue,
            (O) => O.callback === E
          ), T.timedOut = !0, b.callback(new Error("timeout exceeded when trying to connect"));
        }, this.options.connectionTimeoutMillis);
        return N.unref && N.unref(), this._pendingQueue.push(T), S;
      }
      return this.newClient(new d(b.callback)), S;
    }
    newClient(h) {
      let b = new this.Client(this.options);
      this._clients.push(
        b
      );
      let S = w(this, b);
      this.log("checking client timeout");
      let E, T = !1;
      this.options.connectionTimeoutMillis && (E = setTimeout(() => {
        this.log("ending client due to timeout"), T = !0, b.connection ? b.connection.stream.destroy() : b.end();
      }, this.options.connectionTimeoutMillis)), this.log("connecting new client"), b.connect((N) => {
        if (E && clearTimeout(E), b.on("error", S), N) this.log("client failed to connect", N), this._clients = this._clients.filter((O) => O !== b), T && (N = new Error("Connection terminated due to connection timeout", { cause: N })), this._pulseQueue(), h.timedOut || h.callback(N, void 0, r);
        else {
          if (this.log("new client connected"), this.options.maxLifetimeSeconds !== 0) {
            let O = setTimeout(() => {
              this.log("ending client due to expired lifetime"), this._expired.add(b), this._idle.findIndex((_) => _.client === b) !== -1 && this._acquireClient(
                b,
                new d((_, x, L) => L()),
                S,
                !1
              );
            }, this.options.maxLifetimeSeconds * 1e3);
            O.unref(), b.once("end", () => clearTimeout(O));
          }
          return this._acquireClient(b, h, S, !0);
        }
      });
    }
    _acquireClient(h, b, S, E) {
      E && this.emit("connect", h), this.emit("acquire", h), h.release = this._releaseOnce(h, S), h.removeListener("error", S), b.timedOut ? E && this.options.verify ? this.options.verify(h, h.release) : h.release() : E && this.options.verify ? this.options.verify(h, (T) => {
        if (T) return h.release(T), b.callback(T, void 0, r);
        b.callback(void 0, h, h.release);
      }) : b.callback(void 0, h, h.release);
    }
    _releaseOnce(h, b) {
      let S = !1;
      return (E) => {
        S && m(), S = !0, this._release(h, b, E);
      };
    }
    _release(h, b, S) {
      if (h.on("error", b), h._poolUseCount = (h._poolUseCount || 0) + 1, this.emit("release", S, h), S || this.ending || !h._queryable || h._ending || h._poolUseCount >= this.options.maxUses) {
        h._poolUseCount >= this.options.maxUses && this.log("remove expended client"), this._remove(h), this._pulseQueue();
        return;
      }
      if (this._expired.has(h)) {
        this.log("remove expired client"), this._expired.delete(h), this._remove(h), this._pulseQueue();
        return;
      }
      let E;
      this.options.idleTimeoutMillis && this._isAboveMin() && (E = setTimeout(() => {
        this.log("remove idle client"), this._remove(h);
      }, this.options.idleTimeoutMillis), this.options.allowExitOnIdle && E.unref()), this.options.allowExitOnIdle && h.unref(), this._idle.push(new u(
        h,
        b,
        E
      )), this._pulseQueue();
    }
    query(h, b, S) {
      if (typeof h == "function") {
        let T = f(this.Promise, h);
        return Rr(function() {
          return T.callback(new Error("Passing a function as the first parameter to pool.query is not supported"));
        }), T.result;
      }
      typeof b == "function" && (S = b, b = void 0);
      let E = f(this.Promise, S);
      return S = E.callback, this.connect((T, N) => {
        if (T) return S(T);
        let O = !1, _ = g((x) => {
          O || (O = !0, N.release(x), S(x));
        }, "onError");
        N.once("error", _), this.log("dispatching query");
        try {
          N.query(h, b, (x, L) => {
            if (this.log("query dispatched"), N.removeListener(
              "error",
              _
            ), !O) return O = !0, N.release(x), x ? S(x) : S(void 0, L);
          });
        } catch (x) {
          return N.release(x), S(x);
        }
      }), E.result;
    }
    end(h) {
      if (this.log("ending"), this.ending) {
        let S = new Error("Called end on pool more than once");
        return h ? h(S) : this.Promise.reject(S);
      }
      this.ending = !0;
      let b = f(this.Promise, h);
      return this._endCallback = b.callback, this._pulseQueue(), b.result;
    }
    get waitingCount() {
      return this._pendingQueue.length;
    }
    get idleCount() {
      return this._idle.length;
    }
    get expiredCount() {
      return this._clients.reduce((h, b) => h + (this._expired.has(b) ? 1 : 0), 0);
    }
    get totalCount() {
      return this._clients.length;
    }
  };
  g(y, "Pool");
  var v = y;
  e.exports = v;
}), Pn = {};
Ce(Pn, { default: () => Tn });
var Tn, no = be(() => {
  V(), Tn = {};
}), so = ee((i, e) => {
  e.exports = { name: "pg", version: "8.8.0", description: "PostgreSQL client - pure javascript & libpq with the same API", keywords: [
    "database",
    "libpq",
    "pg",
    "postgre",
    "postgres",
    "postgresql",
    "rdbms"
  ], homepage: "https://github.com/brianc/node-postgres", repository: { type: "git", url: "git://github.com/brianc/node-postgres.git", directory: "packages/pg" }, author: "Brian Carlson <brian.m.carlson@gmail.com>", main: "./lib", dependencies: { "buffer-writer": "2.0.0", "packet-reader": "1.0.0", "pg-connection-string": "^2.5.0", "pg-pool": "^3.5.2", "pg-protocol": "^1.5.0", "pg-types": "^2.1.0", pgpass: "1.x" }, devDependencies: {
    async: "2.6.4",
    bluebird: "3.5.2",
    co: "4.6.0",
    "pg-copy-streams": "0.3.0"
  }, peerDependencies: { "pg-native": ">=3.0.1" }, peerDependenciesMeta: { "pg-native": { optional: !0 } }, scripts: { test: "make test-all" }, files: ["lib", "SPONSORS.md"], license: "MIT", engines: { node: ">= 8.0.0" }, gitHead: "c99fb2c127ddf8d712500db2c7b9a5491a178655" };
}), oo = ee((i, e) => {
  V();
  var t = Qe().EventEmitter, r = (ir(), fe(Rt)), n = rr(), s = e.exports = function(a, d, m) {
    t.call(this), a = n.normalizeQueryConfig(a, d, m), this.text = a.text, this.values = a.values, this.name = a.name, this.callback = a.callback, this.state = "new", this._arrayMode = a.rowMode === "array", this._emitRowEvents = !1, this.on("newListener", function(f) {
      f === "row" && (this._emitRowEvents = !0);
    }.bind(this));
  };
  r.inherits(s, t);
  var u = { sqlState: "code", statementPosition: "position", messagePrimary: "message", context: "where", schemaName: "schema", tableName: "table", columnName: "column", dataTypeName: "dataType", constraintName: "constraint", sourceFile: "file", sourceLine: "line", sourceFunction: "routine" };
  s.prototype.handleError = function(a) {
    var d = this.native.pq.resultErrorFields();
    if (d) for (var m in d) {
      var f = u[m] || m;
      a[f] = d[m];
    }
    this.callback ? this.callback(a) : this.emit("error", a), this.state = "error";
  }, s.prototype.then = function(a, d) {
    return this._getPromise().then(
      a,
      d
    );
  }, s.prototype.catch = function(a) {
    return this._getPromise().catch(a);
  }, s.prototype._getPromise = function() {
    return this._promise ? this._promise : (this._promise = new Promise(function(a, d) {
      this._once("end", a), this._once("error", d);
    }.bind(this)), this._promise);
  }, s.prototype.submit = function(a) {
    this.state = "running";
    var d = this;
    this.native = a.native, a.native.arrayMode = this._arrayMode;
    var m = g(function(y, v, l) {
      if (a.native.arrayMode = !1, Rr(function() {
        d.emit("_done");
      }), y) return d.handleError(y);
      d._emitRowEvents && (l.length > 1 ? v.forEach(
        (h, b) => {
          h.forEach((S) => {
            d.emit("row", S, l[b]);
          });
        }
      ) : v.forEach(function(h) {
        d.emit("row", h, l);
      })), d.state = "end", d.emit("end", l), d.callback && d.callback(null, l);
    }, "after");
    if (X.domain && (m = X.domain.bind(m)), this.name) {
      this.name.length > 63 && (console.error("Warning! Postgres only supports 63 characters for query names."), console.error("You supplied %s (%s)", this.name, this.name.length), console.error("This can cause conflicts and silent errors executing queries"));
      var f = (this.values || []).map(n.prepareValue);
      if (a.namedQueries[this.name]) {
        if (this.text && a.namedQueries[this.name] !== this.text) {
          let y = new Error(`Prepared statements must be unique - '${this.name}' was used for a different statement`);
          return m(y);
        }
        return a.native.execute(this.name, f, m);
      }
      return a.native.prepare(this.name, this.text, f.length, function(y) {
        return y ? m(y) : (a.namedQueries[d.name] = d.text, d.native.execute(d.name, f, m));
      });
    } else if (this.values) {
      if (!Array.isArray(
        this.values
      )) {
        let y = new Error("Query values must be an array");
        return m(y);
      }
      var w = this.values.map(n.prepareValue);
      a.native.query(this.text, w, m);
    } else a.native.query(this.text, m);
  };
}), ao = ee((i, e) => {
  V();
  var t = (no(), fe(Pn)), r = Mr();
  so();
  var n = Qe().EventEmitter, s = (ir(), fe(Rt)), u = Qr(), a = oo(), d = e.exports = function(m) {
    n.call(this), m = m || {}, this._Promise = m.Promise || Xt.Promise, this._types = new r(m.types), this.native = new t({ types: this._types }), this._queryQueue = [], this._ending = !1, this._connecting = !1, this._connected = !1, this._queryable = !0;
    var f = this.connectionParameters = new u(m);
    this.user = f.user, Object.defineProperty(this, "password", { configurable: !0, enumerable: !1, writable: !0, value: f.password }), this.database = f.database, this.host = f.host, this.port = f.port, this.namedQueries = {};
  };
  d.Query = a, s.inherits(d, n), d.prototype._errorAllQueries = function(m) {
    let f = g((w) => {
      X.nextTick(() => {
        w.native = this.native, w.handleError(m);
      });
    }, "enqueueError");
    this._hasActiveQuery() && (f(this._activeQuery), this._activeQuery = null), this._queryQueue.forEach(f), this._queryQueue.length = 0;
  }, d.prototype._connect = function(m) {
    var f = this;
    if (this._connecting) {
      X.nextTick(() => m(new Error("Client has already been connected. You cannot reuse a client.")));
      return;
    }
    this._connecting = !0, this.connectionParameters.getLibpqConnectionString(function(w, y) {
      if (w) return m(w);
      f.native.connect(y, function(v) {
        if (v) return f.native.end(), m(v);
        f._connected = !0, f.native.on("error", function(l) {
          f._queryable = !1, f._errorAllQueries(l), f.emit("error", l);
        }), f.native.on("notification", function(l) {
          f.emit("notification", { channel: l.relname, payload: l.extra });
        }), f.emit("connect"), f._pulseQueryQueue(!0), m();
      });
    });
  }, d.prototype.connect = function(m) {
    if (m) {
      this._connect(m);
      return;
    }
    return new this._Promise((f, w) => {
      this._connect((y) => {
        y ? w(y) : f();
      });
    });
  }, d.prototype.query = function(m, f, w) {
    var y, v, l, h, b;
    if (m == null) throw new TypeError("Client was passed a null or undefined query");
    if (typeof m.submit == "function") l = m.query_timeout || this.connectionParameters.query_timeout, v = y = m, typeof f == "function" && (m.callback = f);
    else if (l = this.connectionParameters.query_timeout, y = new a(m, f, w), !y.callback) {
      let S, E;
      v = new this._Promise((T, N) => {
        S = T, E = N;
      }), y.callback = (T, N) => T ? E(T) : S(N);
    }
    return l && (b = y.callback, h = setTimeout(() => {
      var S = new Error(
        "Query read timeout"
      );
      X.nextTick(() => {
        y.handleError(S, this.connection);
      }), b(S), y.callback = () => {
      };
      var E = this._queryQueue.indexOf(y);
      E > -1 && this._queryQueue.splice(E, 1), this._pulseQueryQueue();
    }, l), y.callback = (S, E) => {
      clearTimeout(h), b(S, E);
    }), this._queryable ? this._ending ? (y.native = this.native, X.nextTick(() => {
      y.handleError(
        new Error("Client was closed and is not queryable")
      );
    }), v) : (this._queryQueue.push(y), this._pulseQueryQueue(), v) : (y.native = this.native, X.nextTick(() => {
      y.handleError(new Error("Client has encountered a connection error and is not queryable"));
    }), v);
  }, d.prototype.end = function(m) {
    var f = this;
    this._ending = !0, this._connected || this.once("connect", this.end.bind(this, m));
    var w;
    return m || (w = new this._Promise(function(y, v) {
      m = g((l) => l ? v(l) : y(), "cb");
    })), this.native.end(function() {
      f._errorAllQueries(new Error("Connection terminated")), X.nextTick(() => {
        f.emit("end"), m && m();
      });
    }), w;
  }, d.prototype._hasActiveQuery = function() {
    return this._activeQuery && this._activeQuery.state !== "error" && this._activeQuery.state !== "end";
  }, d.prototype._pulseQueryQueue = function(m) {
    if (this._connected && !this._hasActiveQuery()) {
      var f = this._queryQueue.shift();
      if (!f) {
        m || this.emit("drain");
        return;
      }
      this._activeQuery = f, f.submit(this);
      var w = this;
      f.once("_done", function() {
        w._pulseQueryQueue();
      });
    }
  }, d.prototype.cancel = function(m) {
    this._activeQuery === m ? this.native.cancel(function() {
    }) : this._queryQueue.indexOf(m) !== -1 && this._queryQueue.splice(this._queryQueue.indexOf(m), 1);
  }, d.prototype.ref = function() {
  }, d.prototype.unref = function() {
  }, d.prototype.setTypeParser = function(m, f, w) {
    return this._types.setTypeParser(
      m,
      f,
      w
    );
  }, d.prototype.getTypeParser = function(m, f) {
    return this._types.getTypeParser(m, f);
  };
}), ii = ee((i, e) => {
  V(), e.exports = ao();
}), nr = ee((i, e) => {
  V();
  var t = ro(), r = tr(), n = _n(), s = io(), { DatabaseError: u } = wn(), a = g(
    (m) => {
      var f;
      return f = class extends s {
        constructor(w) {
          super(w, m);
        }
      }, g(f, "BoundPool"), f;
    },
    "poolFactory"
  ), d = g(
    function(m) {
      this.defaults = r, this.Client = m, this.Query = this.Client.Query, this.Pool = a(this.Client), this._pools = [], this.Connection = n, this.types = er(), this.DatabaseError = u;
    },
    "PG"
  );
  typeof X.env.NODE_PG_FORCE_NATIVE < "u" ? e.exports = new d(ii()) : (e.exports = new d(t), Object.defineProperty(e.exports, "native", {
    configurable: !0,
    enumerable: !1,
    get() {
      var m = null;
      try {
        m = new d(ii());
      } catch (f) {
        if (f.code !== "MODULE_NOT_FOUND") throw f;
      }
      return Object.defineProperty(e.exports, "native", { value: m }), m;
    }
  }));
});
V();
V();
Nt();
Zi();
V();
var uo = Object.defineProperty, co = Object.defineProperties, lo = Object.getOwnPropertyDescriptors, ni = Object.getOwnPropertySymbols, ho = Object.prototype.hasOwnProperty, fo = Object.prototype.propertyIsEnumerable, si = g(
  (i, e, t) => e in i ? uo(i, e, { enumerable: !0, configurable: !0, writable: !0, value: t }) : i[e] = t,
  "__defNormalProp"
), po = g((i, e) => {
  for (var t in e || (e = {})) ho.call(e, t) && si(i, t, e[t]);
  if (ni) for (var t of ni(e)) fo.call(e, t) && si(i, t, e[t]);
  return i;
}, "__spreadValues"), go = g((i, e) => co(i, lo(e)), "__spreadProps"), yo = 1008e3, oi = new Uint8Array(
  new Uint16Array([258]).buffer
)[0] === 2, mo = new TextDecoder(), Fr = new TextEncoder(), kt = Fr.encode("0123456789abcdef"), Qt = Fr.encode("0123456789ABCDEF"), bo = Fr.encode("ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/"), En = bo.slice();
En[62] = 45;
En[63] = 95;
var rt, Ft;
function Cn(i, { alphabet: e, scratchArr: t } = {}) {
  if (!rt) if (rt = new Uint16Array(256), Ft = new Uint16Array(256), oi) for (let v = 0; v < 256; v++) rt[v] = kt[v & 15] << 8 | kt[v >>> 4], Ft[v] = Qt[v & 15] << 8 | Qt[v >>> 4];
  else for (let v = 0; v < 256; v++) rt[v] = kt[v & 15] | kt[v >>> 4] << 8, Ft[v] = Qt[v & 15] | Qt[v >>> 4] << 8;
  i.byteOffset % 4 !== 0 && (i = new Uint8Array(i));
  let r = i.length, n = r >>> 1, s = r >>> 2, u = t || new Uint16Array(r), a = new Uint32Array(
    i.buffer,
    i.byteOffset,
    s
  ), d = new Uint32Array(u.buffer, u.byteOffset, n), m = e === "upper" ? Ft : rt, f = 0, w = 0, y;
  if (oi)
    for (; f < s; ) y = a[f++], d[w++] = m[y >>> 8 & 255] << 16 | m[y & 255], d[w++] = m[y >>> 24] << 16 | m[y >>> 16 & 255];
  else for (; f < s; )
    y = a[f++], d[w++] = m[y >>> 24] << 16 | m[y >>> 16 & 255], d[w++] = m[y >>> 8 & 255] << 16 | m[y & 255];
  for (f <<= 2; f < r; ) u[f] = m[i[f++]];
  return mo.decode(u.subarray(0, r));
}
g(Cn, "_toHex");
function An(i, e = {}) {
  let t = "", r = i.length, n = yo >>> 1, s = Math.ceil(r / n), u = new Uint16Array(s > 1 ? n : r);
  for (let a = 0; a < s; a++) {
    let d = a * n, m = d + n;
    t += Cn(i.subarray(d, m), go(po(
      {},
      e
    ), { scratchArr: u }));
  }
  return t;
}
g(An, "_toHexChunked");
function Ln(i, e = {}) {
  return e.alphabet !== "upper" && typeof i.toHex == "function" ? i.toHex() : An(i, e);
}
g(Ln, "toHex");
V();
var xn = class Bn {
  constructor(e, t) {
    this.strings = e, this.values = t;
  }
  toParameterizedQuery(e = { query: "", params: [] }) {
    let { strings: t, values: r } = this;
    for (let n = 0, s = t.length; n < s; n++) if (e.query += t[n], n < r.length) {
      let u = r[n];
      if (u instanceof Rn) e.query += u.sql;
      else if (u instanceof zt) if (u.queryData instanceof Bn) u.queryData.toParameterizedQuery(
        e
      );
      else {
        if (u.queryData.params?.length) throw new Error("This query is not composable");
        e.query += u.queryData.query;
      }
      else {
        let { params: a } = e;
        a.push(u), e.query += "$" + a.length, (u instanceof K || ArrayBuffer.isView(u)) && (e.query += "::bytea");
      }
    }
    return e;
  }
};
g(xn, "SqlTemplate");
var In = xn, Nn = class {
  constructor(e) {
    this.sql = e;
  }
};
g(Nn, "UnsafeRawSql");
var Rn = Nn;
V();
function jr() {
  typeof window < "u" && typeof document < "u" && typeof console < "u" && typeof console.warn == "function" && console.warn(`          
        ************************************************************
        *                                                          *
        *  WARNING: Running SQL directly from the browser can have *
        *  security implications. Even if your database is         *
        *  protected by Row-Level Security (RLS), use it at your   *
        *  own risk. This approach is great for fast prototyping,  *
        *  but ensure proper safeguards are in place to prevent    *
        *  misuse or execution of expensive SQL queries by your    *
        *  end users.                                              *
        *                                                          *
        *  If you've assessed the risks, suppress this message     *
        *  using the disableWarningInBrowsers configuration        *
        *  parameter.                                              *
        *                                                          *
        ************************************************************`);
}
g(jr, "warnIfBrowser");
Nt();
var wo = ke(Mr()), vo = ke(rr()), On = class Mn extends Error {
  constructor(e) {
    super(e), H(this, "name", "NeonDbError"), H(this, "severity"), H(this, "code"), H(this, "detail"), H(this, "hint"), H(this, "position"), H(this, "internalPosition"), H(
      this,
      "internalQuery"
    ), H(this, "where"), H(this, "schema"), H(this, "table"), H(this, "column"), H(this, "dataType"), H(this, "constraint"), H(this, "file"), H(this, "line"), H(this, "routine"), H(this, "sourceError"), "captureStackTrace" in Error && typeof Error.captureStackTrace == "function" && Error.captureStackTrace(this, Mn);
  }
};
g(
  On,
  "NeonDbError"
);
var We = On, ai = "transaction() expects an array of queries, or a function returning an array of queries", So = ["severity", "code", "detail", "hint", "position", "internalPosition", "internalQuery", "where", "schema", "table", "column", "dataType", "constraint", "file", "line", "routine"];
function qn(i) {
  return i instanceof K ? "\\x" + Ln(i) : i;
}
g(qn, "encodeBuffersAsBytea");
function Pr(i) {
  let { query: e, params: t } = i instanceof In ? i.toParameterizedQuery() : i;
  return { query: e, params: t.map((r) => qn((0, vo.prepareValue)(r))) };
}
g(Pr, "prepareQuery");
function Ge(i, {
  arrayMode: e,
  fullResults: t,
  fetchOptions: r,
  isolationLevel: n,
  readOnly: s,
  deferrable: u,
  authToken: a,
  disableWarningInBrowsers: d
} = {}) {
  if (!i) throw new Error("No database connection string was provided to `neon()`. Perhaps an environment variable has not been set?");
  let m;
  try {
    m = Or(i);
  } catch {
    throw new Error(
      "Database connection string provided to `neon()` is not a valid URL. Connection string: " + String(i)
    );
  }
  let { protocol: f, username: w, hostname: y, port: v, pathname: l } = m;
  if (f !== "postgres:" && f !== "postgresql:" || !w || !y || !l) throw new Error("Database connection string format for `neon()` should be: postgresql://user:password@host.tld/dbname?option=value");
  function h(S, ...E) {
    if (!(Array.isArray(S) && Array.isArray(S.raw) && Array.isArray(E))) throw new Error('This function can now be called only as a tagged-template function: sql`SELECT ${value}`, not sql("SELECT $1", [value], options). For a conventional function call with value placeholders ($1, $2, etc.), use sql.query("SELECT $1", [value], options).');
    return new zt(
      b,
      new In(S, E)
    );
  }
  g(h, "templateFn"), h.query = (S, E, T) => new zt(b, { query: S, params: E ?? [] }, T), h.unsafe = (S) => new Rn(
    S
  ), h.transaction = async (S, E) => {
    if (typeof S == "function" && (S = S(h)), !Array.isArray(S)) throw new Error(ai);
    S.forEach((O) => {
      if (!(O instanceof zt)) throw new Error(ai);
    });
    let T = S.map((O) => O.queryData), N = S.map((O) => O.opts ?? {});
    return b(T, N, E);
  };
  async function b(S, E, T) {
    let { fetchEndpoint: N, fetchFunction: O } = Bt, _ = Array.isArray(
      S
    ) ? { queries: S.map((te) => Pr(te)) } : Pr(S), x = r ?? {}, L = e ?? !1, P = t ?? !1, q = n, R = s, F = u;
    T !== void 0 && (T.fetchOptions !== void 0 && (x = { ...x, ...T.fetchOptions }), T.arrayMode !== void 0 && (L = T.arrayMode), T.fullResults !== void 0 && (P = T.fullResults), T.isolationLevel !== void 0 && (q = T.isolationLevel), T.readOnly !== void 0 && (R = T.readOnly), T.deferrable !== void 0 && (F = T.deferrable)), E !== void 0 && !Array.isArray(E) && E.fetchOptions !== void 0 && (x = { ...x, ...E.fetchOptions });
    let j = a;
    !Array.isArray(E) && E?.authToken !== void 0 && (j = E.authToken);
    let M = typeof N == "function" ? N(y, v, { jwtAuth: j !== void 0 }) : N, Q = { "Neon-Connection-String": i, "Neon-Raw-Text-Output": "true", "Neon-Array-Mode": "true" }, G = await $n(j);
    G && (Q.Authorization = `Bearer ${G}`), Array.isArray(S) && (q !== void 0 && (Q["Neon-Batch-Isolation-Level"] = q), R !== void 0 && (Q["Neon-Batch-Read-Only"] = String(R)), F !== void 0 && (Q["Neon-Batch-Deferrable"] = String(F))), d || Bt.disableWarningInBrowsers || jr();
    let Y;
    try {
      Y = await (O ?? fetch)(M, { method: "POST", body: JSON.stringify(_), headers: Q, ...x });
    } catch (te) {
      let Z = new We(
        `Error connecting to database: ${te}`
      );
      throw Z.sourceError = te, Z;
    }
    if (Y.ok) {
      let te = await Y.json();
      if (Array.isArray(S)) {
        let Z = te.results;
        if (!Array.isArray(Z)) throw new We("Neon internal error: unexpected result format");
        return Z.map((we, ie) => {
          let ue = E[ie] ?? {}, Ze = ue.arrayMode ?? L, Xe = ue.fullResults ?? P;
          return Tr(
            we,
            { arrayMode: Ze, fullResults: Xe, types: ue.types }
          );
        });
      } else {
        let Z = E ?? {}, we = Z.arrayMode ?? L, ie = Z.fullResults ?? P;
        return Tr(te, { arrayMode: we, fullResults: ie, types: Z.types });
      }
    } else {
      let { status: te } = Y;
      if (te === 400) {
        let Z = await Y.json(), we = new We(Z.message);
        for (let ie of So) we[ie] = Z[ie] ?? void 0;
        throw we;
      } else {
        let Z = await Y.text();
        throw new We(
          `Server error (HTTP status ${te}): ${Z}`
        );
      }
    }
  }
  return g(b, "execute"), h;
}
g(Ge, "neon");
var Dn = class {
  constructor(e, t, r) {
    this.execute = e, this.queryData = t, this.opts = r;
  }
  then(e, t) {
    return this.execute(this.queryData, this.opts).then(e, t);
  }
  catch(e) {
    return this.execute(this.queryData, this.opts).catch(e);
  }
  finally(e) {
    return this.execute(
      this.queryData,
      this.opts
    ).finally(e);
  }
};
g(Dn, "NeonQueryPromise");
var zt = Dn;
function Tr(i, {
  arrayMode: e,
  fullResults: t,
  types: r
}) {
  let n = new wo.default(r), s = i.fields.map((d) => d.name), u = i.fields.map((d) => n.getTypeParser(
    d.dataTypeID
  )), a = e === !0 ? i.rows.map((d) => d.map((m, f) => m === null ? null : u[f](m))) : i.rows.map((d) => Object.fromEntries(
    d.map((m, f) => [s[f], m === null ? null : u[f](m)])
  ));
  return t ? (i.viaNeonFetch = !0, i.rowAsArray = e, i.rows = a, i._parsers = u, i._types = n, i) : a;
}
g(Tr, "processQueryResult");
async function $n(i) {
  if (typeof i == "string") return i;
  if (typeof i == "function") try {
    return await Promise.resolve(i());
  } catch (e) {
    let t = new We("Error getting auth token.");
    throw e instanceof Error && (t = new We(`Error getting auth token: ${e.message}`)), t;
  }
}
g($n, "getAuthToken");
V();
var _o = ke(nr());
V();
var Po = ke(nr()), kn = class extends Po.Client {
  constructor(e) {
    super(e), this.config = e;
  }
  get neonConfig() {
    return this.connection.stream;
  }
  connect(e) {
    let { neonConfig: t } = this;
    t.forceDisablePgSSL && (this.ssl = this.connection.ssl = !1), this.ssl && t.useSecureWebSocket && console.warn("SSL is enabled for both Postgres (e.g. ?sslmode=require in the connection string + forceDisablePgSSL = false) and the WebSocket tunnel (useSecureWebSocket = true). Double encryption will increase latency and CPU usage. It may be appropriate to disable SSL in the Postgres connection parameters or set forceDisablePgSSL = true.");
    let r = typeof this.config != "string" && this.config?.host !== void 0 || typeof this.config != "string" && this.config?.connectionString !== void 0 || X.env.PGHOST !== void 0, n = X.env.USER ?? X.env.USERNAME;
    if (!r && this.host === "localhost" && this.user === n && this.database === n && this.password === null) throw new Error(`No database host or connection string was set, and key parameters have default values (host: localhost, user: ${n}, db: ${n}, password: null). Is an environment variable missing? Alternatively, if you intended to connect with these parameters, please set the host to 'localhost' explicitly.`);
    let s = super.connect(e), u = t.pipelineTLS && this.ssl, a = t.pipelineConnect === "password";
    if (!u && !t.pipelineConnect) return s;
    let d = this.connection;
    if (u && d.on(
      "connect",
      () => d.stream.emit("data", "S")
    ), a) {
      d.removeAllListeners("authenticationCleartextPassword"), d.removeAllListeners("readyForQuery"), d.once("readyForQuery", () => d.on("readyForQuery", this._handleReadyForQuery.bind(this)));
      let m = this.ssl ? "sslconnect" : "connect";
      d.on(m, () => {
        this.neonConfig.disableWarningInBrowsers || jr(), this._handleAuthCleartextPassword(), this._handleReadyForQuery();
      });
    }
    return s;
  }
  async _handleAuthSASLContinue(e) {
    if (typeof crypto > "u" || crypto.subtle === void 0 || crypto.subtle.importKey === void 0) throw new Error("Cannot use SASL auth when `crypto.subtle` is not defined");
    let t = crypto.subtle, r = this.saslSession, n = this.password, s = e.data;
    if (r.message !== "SASLInitialResponse" || typeof n != "string" || typeof s != "string") throw new Error(
      "SASL: protocol error"
    );
    let u = Object.fromEntries(s.split(",").map((te) => {
      if (!/^.=/.test(te)) throw new Error(
        "SASL: Invalid attribute pair entry"
      );
      let Z = te[0], we = te.substring(2);
      return [Z, we];
    })), a = u.r, d = u.s, m = u.i;
    if (!a || !/^[!-+--~]+$/.test(a)) throw new Error("SASL: SCRAM-SERVER-FIRST-MESSAGE: nonce missing/unprintable");
    if (!d || !/^(?:[a-zA-Z0-9+/]{4})*(?:[a-zA-Z0-9+/]{2}==|[a-zA-Z0-9+/]{3}=)?$/.test(d)) throw new Error(
      "SASL: SCRAM-SERVER-FIRST-MESSAGE: salt missing/not base64"
    );
    if (!m || !/^[1-9][0-9]*$/.test(m)) throw new Error(
      "SASL: SCRAM-SERVER-FIRST-MESSAGE: missing/invalid iteration count"
    );
    if (!a.startsWith(r.clientNonce))
      throw new Error("SASL: SCRAM-SERVER-FIRST-MESSAGE: server nonce does not start with client nonce");
    if (a.length === r.clientNonce.length) throw new Error("SASL: SCRAM-SERVER-FIRST-MESSAGE: server nonce is too short");
    let f = parseInt(m, 10), w = K.from(d, "base64"), y = new TextEncoder(), v = y.encode(n), l = await t.importKey(
      "raw",
      v,
      { name: "HMAC", hash: { name: "SHA-256" } },
      !1,
      ["sign"]
    ), h = new Uint8Array(await t.sign("HMAC", l, K.concat(
      [w, K.from([0, 0, 0, 1])]
    ))), b = h;
    for (var S = 0; S < f - 1; S++) h = new Uint8Array(await t.sign("HMAC", l, h)), b = K.from(
      b.map((te, Z) => b[Z] ^ h[Z])
    );
    let E = b, T = await t.importKey(
      "raw",
      E,
      { name: "HMAC", hash: { name: "SHA-256" } },
      !1,
      ["sign"]
    ), N = new Uint8Array(await t.sign("HMAC", T, y.encode("Client Key"))), O = await t.digest(
      "SHA-256",
      N
    ), _ = "n=*,r=" + r.clientNonce, x = "r=" + a + ",s=" + d + ",i=" + f, L = "c=biws,r=" + a, P = _ + "," + x + "," + L, q = await t.importKey(
      "raw",
      O,
      { name: "HMAC", hash: { name: "SHA-256" } },
      !1,
      ["sign"]
    );
    var R = new Uint8Array(await t.sign(
      "HMAC",
      q,
      y.encode(P)
    )), F = K.from(N.map((te, Z) => N[Z] ^ R[Z])), j = F.toString("base64");
    let M = await t.importKey(
      "raw",
      E,
      { name: "HMAC", hash: { name: "SHA-256" } },
      !1,
      ["sign"]
    ), Q = await t.sign("HMAC", M, y.encode("Server Key")), G = await t.importKey("raw", Q, { name: "HMAC", hash: { name: "SHA-256" } }, !1, ["sign"]);
    var Y = K.from(
      await t.sign("HMAC", G, y.encode(P))
    );
    r.message = "SASLResponse", r.serverSignature = Y.toString("base64"), r.response = L + ",p=" + j, this.connection.sendSCRAMClientFinalMessage(this.saslSession.response);
  }
};
g(
  kn,
  "NeonClient"
);
var To = kn;
Nt();
var Eo = ke(Qr());
function Qn(i, e) {
  if (e) return { callback: e, result: void 0 };
  let t, r, n = g(function(u, a) {
    u ? t(u) : r(a);
  }, "cb"), s = new i(function(u, a) {
    r = u, t = a;
  });
  return { callback: n, result: s };
}
g(Qn, "promisify");
var Co = class extends _o.Pool {
  constructor() {
    super(...arguments), H(this, "Client", To), H(this, "hasFetchUnsupportedListeners", !1), H(this, "addListener", this.on);
  }
  on(e, t) {
    return e !== "error" && (this.hasFetchUnsupportedListeners = !0), super.on(e, t);
  }
  query(e, t, r) {
    if (!Bt.poolQueryViaFetch || this.hasFetchUnsupportedListeners || typeof e == "function") return super.query(
      e,
      t,
      r
    );
    typeof t == "function" && (r = t, t = void 0);
    let n = Qn(this.Promise, r);
    r = n.callback;
    try {
      let s = new Eo.default(
        this.options
      ), u = encodeURIComponent, a = encodeURI, d = `postgresql://${u(s.user)}:${u(s.password)}@${u(s.host)}/${a(s.database)}`, m = typeof e == "string" ? e : e.text, f = t ?? e.values ?? [];
      Ge(d, { fullResults: !0, arrayMode: e.rowMode === "array" }).query(m, f, { types: e.types ?? this.options?.types }).then((w) => r(void 0, w)).catch((w) => r(
        w
      ));
    } catch (s) {
      r(s);
    }
    return n.result;
  }
};
g(Co, "NeonPool");
Nt();
var Ot = ke(nr());
Ot.DatabaseError;
Ot.defaults;
Ot.escapeIdentifier;
Ot.escapeLiteral;
var ve = Ot.types;
/*! Bundled license information:

ieee754/index.js:
  (*! ieee754. BSD-3-Clause License. Feross Aboukhadijeh <https://feross.org/opensource> *)

buffer/index.js:
  (*!
   * The buffer module from node.js, for the browser.
   *
   * @author   Feross Aboukhadijeh <https://feross.org>
   * @license  MIT
   *)
*/
const I = Symbol.for("drizzle:entityKind");
function $(i, e) {
  if (!i || typeof i != "object")
    return !1;
  if (i instanceof e)
    return !0;
  if (!Object.prototype.hasOwnProperty.call(e, I))
    throw new Error(
      `Class "${e.name ?? "<unknown>"}" doesn't look like a Drizzle entity. If this is incorrect and the class is provided by Drizzle, please report this as a bug.`
    );
  let t = Object.getPrototypeOf(i).constructor;
  if (t)
    for (; t; ) {
      if (I in t && t[I] === e[I])
        return !0;
      t = Object.getPrototypeOf(t);
    }
  return !1;
}
class Ao {
  static [I] = "ConsoleLogWriter";
  write(e) {
    console.log(e);
  }
}
class Lo {
  static [I] = "DefaultLogger";
  writer;
  constructor(e) {
    this.writer = e?.writer ?? new Ao();
  }
  logQuery(e, t) {
    const r = t.map((s) => {
      try {
        return JSON.stringify(s);
      } catch {
        return String(s);
      }
    }), n = r.length ? ` -- params: [${r.join(", ")}]` : "";
    this.writer.write(`Query: ${e}${n}`);
  }
}
class xo {
  static [I] = "NoopLogger";
  logQuery() {
  }
}
class Fe {
  static [I] = "QueryPromise";
  [Symbol.toStringTag] = "QueryPromise";
  catch(e) {
    return this.then(void 0, e);
  }
  finally(e) {
    return this.then(
      (t) => (e?.(), t),
      (t) => {
        throw e?.(), t;
      }
    );
  }
  then(e, t) {
    return this.execute().then(e, t);
  }
}
class he {
  constructor(e, t) {
    this.table = e, this.config = t, this.name = t.name, this.keyAsName = t.keyAsName, this.notNull = t.notNull, this.default = t.default, this.defaultFn = t.defaultFn, this.onUpdateFn = t.onUpdateFn, this.hasDefault = t.hasDefault, this.primary = t.primaryKey, this.isUnique = t.isUnique, this.uniqueName = t.uniqueName, this.uniqueType = t.uniqueType, this.dataType = t.dataType, this.columnType = t.columnType, this.generated = t.generated, this.generatedIdentity = t.generatedIdentity;
  }
  static [I] = "Column";
  name;
  keyAsName;
  primary;
  notNull;
  default;
  defaultFn;
  onUpdateFn;
  hasDefault;
  isUnique;
  uniqueName;
  uniqueType;
  dataType;
  columnType;
  enumValues = void 0;
  generated = void 0;
  generatedIdentity = void 0;
  config;
  mapFromDriverValue(e) {
    return e;
  }
  mapToDriverValue(e) {
    return e;
  }
  // ** @internal */
  shouldDisableInsert() {
    return this.config.generated !== void 0 && this.config.generated.type !== "byDefault";
  }
}
class Bo {
  static [I] = "ColumnBuilder";
  config;
  constructor(e, t, r) {
    this.config = {
      name: e,
      keyAsName: e === "",
      notNull: !1,
      default: void 0,
      hasDefault: !1,
      primaryKey: !1,
      isUnique: !1,
      uniqueName: void 0,
      uniqueType: void 0,
      dataType: t,
      columnType: r,
      generated: void 0
    };
  }
  /**
   * Changes the data type of the column. Commonly used with `json` columns. Also, useful for branded types.
   *
   * @example
   * ```ts
   * const users = pgTable('users', {
   * 	id: integer('id').$type<UserId>().primaryKey(),
   * 	details: json('details').$type<UserDetails>().notNull(),
   * });
   * ```
   */
  $type() {
    return this;
  }
  /**
   * Adds a `not null` clause to the column definition.
   *
   * Affects the `select` model of the table - columns *without* `not null` will be nullable on select.
   */
  notNull() {
    return this.config.notNull = !0, this;
  }
  /**
   * Adds a `default <value>` clause to the column definition.
   *
   * Affects the `insert` model of the table - columns *with* `default` are optional on insert.
   *
   * If you need to set a dynamic default value, use {@link $defaultFn} instead.
   */
  default(e) {
    return this.config.default = e, this.config.hasDefault = !0, this;
  }
  /**
   * Adds a dynamic default value to the column.
   * The function will be called when the row is inserted, and the returned value will be used as the column value.
   *
   * **Note:** This value does not affect the `drizzle-kit` behavior, it is only used at runtime in `drizzle-orm`.
   */
  $defaultFn(e) {
    return this.config.defaultFn = e, this.config.hasDefault = !0, this;
  }
  /**
   * Alias for {@link $defaultFn}.
   */
  $default = this.$defaultFn;
  /**
   * Adds a dynamic update value to the column.
   * The function will be called when the row is updated, and the returned value will be used as the column value if none is provided.
   * If no `default` (or `$defaultFn`) value is provided, the function will be called when the row is inserted as well, and the returned value will be used as the column value.
   *
   * **Note:** This value does not affect the `drizzle-kit` behavior, it is only used at runtime in `drizzle-orm`.
   */
  $onUpdateFn(e) {
    return this.config.onUpdateFn = e, this.config.hasDefault = !0, this;
  }
  /**
   * Alias for {@link $onUpdateFn}.
   */
  $onUpdate = this.$onUpdateFn;
  /**
   * Adds a `primary key` clause to the column definition. This implicitly makes the column `not null`.
   *
   * In SQLite, `integer primary key` implicitly makes the column auto-incrementing.
   */
  primaryKey() {
    return this.config.primaryKey = !0, this.config.notNull = !0, this;
  }
  /** @internal Sets the name of the column to the key within the table definition if a name was not given. */
  setName(e) {
    this.config.name === "" && (this.config.name = e);
  }
}
const Ne = Symbol.for("drizzle:Name");
class Io {
  static [I] = "PgForeignKeyBuilder";
  /** @internal */
  reference;
  /** @internal */
  _onUpdate = "no action";
  /** @internal */
  _onDelete = "no action";
  constructor(e, t) {
    this.reference = () => {
      const { name: r, columns: n, foreignColumns: s } = e();
      return { name: r, columns: n, foreignTable: s[0].table, foreignColumns: s };
    }, t && (this._onUpdate = t.onUpdate, this._onDelete = t.onDelete);
  }
  onUpdate(e) {
    return this._onUpdate = e === void 0 ? "no action" : e, this;
  }
  onDelete(e) {
    return this._onDelete = e === void 0 ? "no action" : e, this;
  }
  /** @internal */
  build(e) {
    return new No(e, this);
  }
}
class No {
  constructor(e, t) {
    this.table = e, this.reference = t.reference, this.onUpdate = t._onUpdate, this.onDelete = t._onDelete;
  }
  static [I] = "PgForeignKey";
  reference;
  onUpdate;
  onDelete;
  getName() {
    const { name: e, columns: t, foreignColumns: r } = this.reference(), n = t.map((a) => a.name), s = r.map((a) => a.name), u = [
      this.table[Ne],
      ...n,
      r[0].table[Ne],
      ...s
    ];
    return e ?? `${u.join("_")}_fk`;
  }
}
function Ro(i, ...e) {
  return i(...e);
}
function Oo(i, e) {
  return `${i[Ne]}_${e.join("_")}_unique`;
}
function ui(i, e, t) {
  for (let r = e; r < i.length; r++) {
    const n = i[r];
    if (n === "\\") {
      r++;
      continue;
    }
    if (n === '"')
      return [i.slice(e, r).replace(/\\/g, ""), r + 1];
    if (!t && (n === "," || n === "}"))
      return [i.slice(e, r).replace(/\\/g, ""), r];
  }
  return [i.slice(e).replace(/\\/g, ""), i.length];
}
function Fn(i, e = 0) {
  const t = [];
  let r = e, n = !1;
  for (; r < i.length; ) {
    const s = i[r];
    if (s === ",") {
      (n || r === e) && t.push(""), n = !0, r++;
      continue;
    }
    if (n = !1, s === "\\") {
      r += 2;
      continue;
    }
    if (s === '"') {
      const [d, m] = ui(i, r + 1, !0);
      t.push(d), r = m;
      continue;
    }
    if (s === "}")
      return [t, r + 1];
    if (s === "{") {
      const [d, m] = Fn(i, r + 1);
      t.push(d), r = m;
      continue;
    }
    const [u, a] = ui(i, r, !1);
    t.push(u), r = a;
  }
  return [t, r];
}
function Mo(i) {
  const [e] = Fn(i, 1);
  return e;
}
function jn(i) {
  return `{${i.map((e) => Array.isArray(e) ? jn(e) : typeof e == "string" ? `"${e.replace(/\\/g, "\\\\").replace(/"/g, '\\"')}"` : `${e}`).join(",")}}`;
}
class re extends Bo {
  foreignKeyConfigs = [];
  static [I] = "PgColumnBuilder";
  array(e) {
    return new Do(this.config.name, this, e);
  }
  references(e, t = {}) {
    return this.foreignKeyConfigs.push({ ref: e, actions: t }), this;
  }
  unique(e, t) {
    return this.config.isUnique = !0, this.config.uniqueName = e, this.config.uniqueType = t?.nulls, this;
  }
  generatedAlwaysAs(e) {
    return this.config.generated = {
      as: e,
      type: "always",
      mode: "stored"
    }, this;
  }
  /** @internal */
  buildForeignKeys(e, t) {
    return this.foreignKeyConfigs.map(({ ref: r, actions: n }) => Ro(
      (s, u) => {
        const a = new Io(() => {
          const d = s();
          return { columns: [e], foreignColumns: [d] };
        });
        return u.onUpdate && a.onUpdate(u.onUpdate), u.onDelete && a.onDelete(u.onDelete), a.build(t);
      },
      r,
      n
    ));
  }
  /** @internal */
  buildExtraConfigColumn(e) {
    return new qo(e, this.config);
  }
}
class J extends he {
  constructor(e, t) {
    t.uniqueName || (t.uniqueName = Oo(e, [t.name])), super(e, t), this.table = e;
  }
  static [I] = "PgColumn";
}
class qo extends J {
  static [I] = "ExtraConfigColumn";
  getSQLType() {
    return this.getSQLType();
  }
  indexConfig = {
    order: this.config.order ?? "asc",
    nulls: this.config.nulls ?? "last",
    opClass: this.config.opClass
  };
  defaultConfig = {
    order: "asc",
    nulls: "last",
    opClass: void 0
  };
  asc() {
    return this.indexConfig.order = "asc", this;
  }
  desc() {
    return this.indexConfig.order = "desc", this;
  }
  nullsFirst() {
    return this.indexConfig.nulls = "first", this;
  }
  nullsLast() {
    return this.indexConfig.nulls = "last", this;
  }
  /**
   * ### PostgreSQL documentation quote
   *
   * > An operator class with optional parameters can be specified for each column of an index.
   * The operator class identifies the operators to be used by the index for that column.
   * For example, a B-tree index on four-byte integers would use the int4_ops class;
   * this operator class includes comparison functions for four-byte integers.
   * In practice the default operator class for the column's data type is usually sufficient.
   * The main point of having operator classes is that for some data types, there could be more than one meaningful ordering.
   * For example, we might want to sort a complex-number data type either by absolute value or by real part.
   * We could do this by defining two operator classes for the data type and then selecting the proper class when creating an index.
   * More information about operator classes check:
   *
   * ### Useful links
   * https://www.postgresql.org/docs/current/sql-createindex.html
   *
   * https://www.postgresql.org/docs/current/indexes-opclass.html
   *
   * https://www.postgresql.org/docs/current/xindex.html
   *
   * ### Additional types
   * If you have the `pg_vector` extension installed in your database, you can use the
   * `vector_l2_ops`, `vector_ip_ops`, `vector_cosine_ops`, `vector_l1_ops`, `bit_hamming_ops`, `bit_jaccard_ops`, `halfvec_l2_ops`, `sparsevec_l2_ops` options, which are predefined types.
   *
   * **You can always specify any string you want in the operator class, in case Drizzle doesn't have it natively in its types**
   *
   * @param opClass
   * @returns
   */
  op(e) {
    return this.indexConfig.opClass = e, this;
  }
}
class gr {
  static [I] = "IndexedColumn";
  constructor(e, t, r, n) {
    this.name = e, this.keyAsName = t, this.type = r, this.indexConfig = n;
  }
  name;
  keyAsName;
  type;
  indexConfig;
}
class Do extends re {
  static [I] = "PgArrayBuilder";
  constructor(e, t, r) {
    super(e, "array", "PgArray"), this.config.baseBuilder = t, this.config.size = r;
  }
  /** @internal */
  build(e) {
    const t = this.config.baseBuilder.build(e);
    return new Ur(
      e,
      this.config,
      t
    );
  }
}
class Ur extends J {
  constructor(e, t, r, n) {
    super(e, t), this.baseColumn = r, this.range = n, this.size = t.size;
  }
  size;
  static [I] = "PgArray";
  getSQLType() {
    return `${this.baseColumn.getSQLType()}[${typeof this.size == "number" ? this.size : ""}]`;
  }
  mapFromDriverValue(e) {
    return typeof e == "string" && (e = Mo(e)), e.map((t) => this.baseColumn.mapFromDriverValue(t));
  }
  mapToDriverValue(e, t = !1) {
    const r = e.map(
      (n) => n === null ? null : $(this.baseColumn, Ur) ? this.baseColumn.mapToDriverValue(n, !0) : this.baseColumn.mapToDriverValue(n)
    );
    return t ? r : jn(r);
  }
}
const ci = Symbol.for("drizzle:isPgEnum");
function $o(i) {
  return !!i && typeof i == "function" && ci in i && i[ci] === !0;
}
class Se {
  static [I] = "Subquery";
  constructor(e, t, r, n = !1, s = []) {
    this._ = {
      brand: "Subquery",
      sql: e,
      selectedFields: t,
      alias: r,
      isWith: n,
      usedTables: s
    };
  }
  // getSQL(): SQL<unknown> {
  // 	return new SQL([this]);
  // }
}
class Un extends Se {
  static [I] = "WithSubquery";
}
const _e = {
  startActiveSpan(i, e) {
    return e();
  }
}, ce = Symbol.for("drizzle:ViewBaseConfig"), Ke = Symbol.for("drizzle:Schema"), Er = Symbol.for("drizzle:Columns"), li = Symbol.for("drizzle:ExtraConfigColumns"), yr = Symbol.for("drizzle:OriginalName"), mr = Symbol.for("drizzle:BaseName"), Wt = Symbol.for("drizzle:IsAlias"), hi = Symbol.for("drizzle:ExtraConfigBuilder"), ko = Symbol.for("drizzle:IsDrizzleTable");
class U {
  static [I] = "Table";
  /** @internal */
  static Symbol = {
    Name: Ne,
    Schema: Ke,
    OriginalName: yr,
    Columns: Er,
    ExtraConfigColumns: li,
    BaseName: mr,
    IsAlias: Wt,
    ExtraConfigBuilder: hi
  };
  /**
   * @internal
   * Can be changed if the table is aliased.
   */
  [Ne];
  /**
   * @internal
   * Used to store the original name of the table, before any aliasing.
   */
  [yr];
  /** @internal */
  [Ke];
  /** @internal */
  [Er];
  /** @internal */
  [li];
  /**
   *  @internal
   * Used to store the table name before the transformation via the `tableCreator` functions.
   */
  [mr];
  /** @internal */
  [Wt] = !1;
  /** @internal */
  [ko] = !0;
  /** @internal */
  [hi] = void 0;
  constructor(e, t, r) {
    this[Ne] = this[yr] = e, this[Ke] = t, this[mr] = r;
  }
}
function Be(i) {
  return i[Ne];
}
function It(i) {
  return `${i[Ke] ?? "public"}.${i[Ne]}`;
}
function zn(i) {
  return i != null && typeof i.getSQL == "function";
}
function Qo(i) {
  const e = { sql: "", params: [] };
  for (const t of i)
    e.sql += t.sql, e.params.push(...t.params), t.typings?.length && (e.typings || (e.typings = []), e.typings.push(...t.typings));
  return e;
}
class pe {
  static [I] = "StringChunk";
  value;
  constructor(e) {
    this.value = Array.isArray(e) ? e : [e];
  }
  getSQL() {
    return new z([this]);
  }
}
class z {
  constructor(e) {
    this.queryChunks = e;
    for (const t of e)
      if ($(t, U)) {
        const r = t[U.Symbol.Schema];
        this.usedTables.push(
          r === void 0 ? t[U.Symbol.Name] : r + "." + t[U.Symbol.Name]
        );
      }
  }
  static [I] = "SQL";
  /** @internal */
  decoder = Vn;
  shouldInlineParams = !1;
  /** @internal */
  usedTables = [];
  append(e) {
    return this.queryChunks.push(...e.queryChunks), this;
  }
  toQuery(e) {
    return _e.startActiveSpan("drizzle.buildSQL", (t) => {
      const r = this.buildQueryFromSourceParams(this.queryChunks, e);
      return t?.setAttributes({
        "drizzle.query.text": r.sql,
        "drizzle.query.params": JSON.stringify(r.params)
      }), r;
    });
  }
  buildQueryFromSourceParams(e, t) {
    const r = Object.assign({}, t, {
      inlineParams: t.inlineParams || this.shouldInlineParams,
      paramStartIndex: t.paramStartIndex || { value: 0 }
    }), {
      casing: n,
      escapeName: s,
      escapeParam: u,
      prepareTyping: a,
      inlineParams: d,
      paramStartIndex: m
    } = r;
    return Qo(e.map((f) => {
      if ($(f, pe))
        return { sql: f.value.join(""), params: [] };
      if ($(f, Cr))
        return { sql: s(f.value), params: [] };
      if (f === void 0)
        return { sql: "", params: [] };
      if (Array.isArray(f)) {
        const w = [new pe("(")];
        for (const [y, v] of f.entries())
          w.push(v), y < f.length - 1 && w.push(new pe(", "));
        return w.push(new pe(")")), this.buildQueryFromSourceParams(w, r);
      }
      if ($(f, z))
        return this.buildQueryFromSourceParams(f.queryChunks, {
          ...r,
          inlineParams: d || f.shouldInlineParams
        });
      if ($(f, U)) {
        const w = f[U.Symbol.Schema], y = f[U.Symbol.Name];
        return {
          sql: w === void 0 || f[Wt] ? s(y) : s(w) + "." + s(y),
          params: []
        };
      }
      if ($(f, he)) {
        const w = n.getColumnCasing(f);
        if (t.invokeSource === "indexes")
          return { sql: s(w), params: [] };
        const y = f.table[U.Symbol.Schema];
        return {
          sql: f.table[Wt] || y === void 0 ? s(f.table[U.Symbol.Name]) + "." + s(w) : s(y) + "." + s(f.table[U.Symbol.Name]) + "." + s(w),
          params: []
        };
      }
      if ($(f, je)) {
        const w = f[ce].schema, y = f[ce].name;
        return {
          sql: w === void 0 || f[ce].isAlias ? s(y) : s(w) + "." + s(y),
          params: []
        };
      }
      if ($(f, Re)) {
        if ($(f.value, He))
          return { sql: u(m.value++, f), params: [f], typings: ["none"] };
        const w = f.value === null ? null : f.encoder.mapToDriverValue(f.value);
        if ($(w, z))
          return this.buildQueryFromSourceParams([w], r);
        if (d)
          return { sql: this.mapInlineParam(w, r), params: [] };
        let y = ["none"];
        return a && (y = [a(f.encoder)]), { sql: u(m.value++, w), params: [w], typings: y };
      }
      return $(f, He) ? { sql: u(m.value++, f), params: [f], typings: ["none"] } : $(f, z.Aliased) && f.fieldAlias !== void 0 ? { sql: s(f.fieldAlias), params: [] } : $(f, Se) ? f._.isWith ? { sql: s(f._.alias), params: [] } : this.buildQueryFromSourceParams([
        new pe("("),
        f._.sql,
        new pe(") "),
        new Cr(f._.alias)
      ], r) : $o(f) ? f.schema ? { sql: s(f.schema) + "." + s(f.enumName), params: [] } : { sql: s(f.enumName), params: [] } : zn(f) ? f.shouldOmitSQLParens?.() ? this.buildQueryFromSourceParams([f.getSQL()], r) : this.buildQueryFromSourceParams([
        new pe("("),
        f.getSQL(),
        new pe(")")
      ], r) : d ? { sql: this.mapInlineParam(f, r), params: [] } : { sql: u(m.value++, f), params: [f], typings: ["none"] };
    }));
  }
  mapInlineParam(e, { escapeString: t }) {
    if (e === null)
      return "null";
    if (typeof e == "number" || typeof e == "boolean")
      return e.toString();
    if (typeof e == "string")
      return t(e);
    if (typeof e == "object") {
      const r = e.toString();
      return t(r === "[object Object]" ? JSON.stringify(e) : r);
    }
    throw new Error("Unexpected param value: " + e);
  }
  getSQL() {
    return this;
  }
  as(e) {
    return e === void 0 ? this : new z.Aliased(this, e);
  }
  mapWith(e) {
    return this.decoder = typeof e == "function" ? { mapFromDriverValue: e } : e, this;
  }
  inlineParams() {
    return this.shouldInlineParams = !0, this;
  }
  /**
   * This method is used to conditionally include a part of the query.
   *
   * @param condition - Condition to check
   * @returns itself if the condition is `true`, otherwise `undefined`
   */
  if(e) {
    return e ? this : void 0;
  }
}
class Cr {
  constructor(e) {
    this.value = e;
  }
  static [I] = "Name";
  brand;
  getSQL() {
    return new z([this]);
  }
}
function Fo(i) {
  return typeof i == "object" && i !== null && "mapToDriverValue" in i && typeof i.mapToDriverValue == "function";
}
const Vn = {
  mapFromDriverValue: (i) => i
}, Wn = {
  mapToDriverValue: (i) => i
};
({
  ...Vn,
  ...Wn
});
class Re {
  /**
   * @param value - Parameter value
   * @param encoder - Encoder to convert the value to a driver parameter
   */
  constructor(e, t = Wn) {
    this.value = e, this.encoder = t;
  }
  static [I] = "Param";
  brand;
  getSQL() {
    return new z([this]);
  }
}
function A(i, ...e) {
  const t = [];
  (e.length > 0 || i.length > 0 && i[0] !== "") && t.push(new pe(i[0]));
  for (const [r, n] of e.entries())
    t.push(n, new pe(i[r + 1]));
  return new z(t);
}
((i) => {
  function e() {
    return new z([]);
  }
  i.empty = e;
  function t(d) {
    return new z(d);
  }
  i.fromList = t;
  function r(d) {
    return new z([new pe(d)]);
  }
  i.raw = r;
  function n(d, m) {
    const f = [];
    for (const [w, y] of d.entries())
      w > 0 && m !== void 0 && f.push(m), f.push(y);
    return new z(f);
  }
  i.join = n;
  function s(d) {
    return new Cr(d);
  }
  i.identifier = s;
  function u(d) {
    return new He(d);
  }
  i.placeholder = u;
  function a(d, m) {
    return new Re(d, m);
  }
  i.param = a;
})(A || (A = {}));
((i) => {
  class e {
    constructor(r, n) {
      this.sql = r, this.fieldAlias = n;
    }
    static [I] = "SQL.Aliased";
    /** @internal */
    isSelectionField = !1;
    getSQL() {
      return this.sql;
    }
    /** @internal */
    clone() {
      return new e(this.sql, this.fieldAlias);
    }
  }
  i.Aliased = e;
})(z || (z = {}));
class He {
  constructor(e) {
    this.name = e;
  }
  static [I] = "Placeholder";
  getSQL() {
    return new z([this]);
  }
}
function br(i, e) {
  return i.map((t) => {
    if ($(t, He)) {
      if (!(t.name in e))
        throw new Error(`No value for placeholder "${t.name}" was provided`);
      return e[t.name];
    }
    if ($(t, Re) && $(t.value, He)) {
      if (!(t.value.name in e))
        throw new Error(`No value for placeholder "${t.value.name}" was provided`);
      return t.encoder.mapToDriverValue(e[t.value.name]);
    }
    return t;
  });
}
const jo = Symbol.for("drizzle:IsDrizzleView");
class je {
  static [I] = "View";
  /** @internal */
  [ce];
  /** @internal */
  [jo] = !0;
  constructor({ name: e, schema: t, selectedFields: r, query: n }) {
    this[ce] = {
      name: e,
      originalName: e,
      schema: t,
      selectedFields: r,
      query: n,
      isExisting: !n,
      isAlias: !1
    };
  }
  getSQL() {
    return new z([this]);
  }
}
he.prototype.getSQL = function() {
  return new z([this]);
};
U.prototype.getSQL = function() {
  return new z([this]);
};
Se.prototype.getSQL = function() {
  return new z([this]);
};
class Gt {
  constructor(e) {
    this.table = e;
  }
  static [I] = "ColumnAliasProxyHandler";
  get(e, t) {
    return t === "table" ? this.table : e[t];
  }
}
class zr {
  constructor(e, t) {
    this.alias = e, this.replaceOriginalName = t;
  }
  static [I] = "TableAliasProxyHandler";
  get(e, t) {
    if (t === U.Symbol.IsAlias)
      return !0;
    if (t === U.Symbol.Name)
      return this.alias;
    if (this.replaceOriginalName && t === U.Symbol.OriginalName)
      return this.alias;
    if (t === ce)
      return {
        ...e[ce],
        name: this.alias,
        isAlias: !0
      };
    if (t === U.Symbol.Columns) {
      const n = e[U.Symbol.Columns];
      if (!n)
        return n;
      const s = {};
      return Object.keys(n).map((u) => {
        s[u] = new Proxy(
          n[u],
          new Gt(new Proxy(e, this))
        );
      }), s;
    }
    const r = e[t];
    return $(r, he) ? new Proxy(r, new Gt(new Proxy(e, this))) : r;
  }
}
function wr(i, e) {
  return new Proxy(i, new zr(e, !1));
}
function xe(i, e) {
  return new Proxy(
    i,
    new Gt(new Proxy(i.table, new zr(e, !1)))
  );
}
function Gn(i, e) {
  return new z.Aliased(Kt(i.sql, e), i.fieldAlias);
}
function Kt(i, e) {
  return A.join(i.queryChunks.map((t) => $(t, he) ? xe(t, e) : $(t, z) ? Kt(t, e) : $(t, z.Aliased) ? Gn(t, e) : t));
}
class ge {
  static [I] = "SelectionProxyHandler";
  config;
  constructor(e) {
    this.config = { ...e };
  }
  get(e, t) {
    if (t === "_")
      return {
        ...e._,
        selectedFields: new Proxy(
          e._.selectedFields,
          this
        )
      };
    if (t === ce)
      return {
        ...e[ce],
        selectedFields: new Proxy(
          e[ce].selectedFields,
          this
        )
      };
    if (typeof t == "symbol")
      return e[t];
    const n = ($(e, Se) ? e._.selectedFields : $(e, je) ? e[ce].selectedFields : e)[t];
    if ($(n, z.Aliased)) {
      if (this.config.sqlAliasedBehavior === "sql" && !n.isSelectionField)
        return n.sql;
      const s = n.clone();
      return s.isSelectionField = !0, s;
    }
    if ($(n, z)) {
      if (this.config.sqlBehavior === "sql")
        return n;
      throw new Error(
        `You tried to reference "${t}" field from a subquery, which is a raw SQL field, but it doesn't have an alias declared. Please add an alias to the field using ".as('alias')" method.`
      );
    }
    return $(n, he) ? this.config.alias ? new Proxy(
      n,
      new Gt(
        new Proxy(
          n.table,
          new zr(this.config.alias, this.config.replaceOriginalName ?? !1)
        )
      )
    ) : n : typeof n != "object" || n === null ? n : new Proxy(n, new ge(this.config));
  }
}
function Uo(i, e, t) {
  const r = {}, n = i.reduce(
    (s, { path: u, field: a }, d) => {
      let m;
      $(a, he) ? m = a : $(a, z) ? m = a.decoder : m = a.sql.decoder;
      let f = s;
      for (const [w, y] of u.entries())
        if (w < u.length - 1)
          y in f || (f[y] = {}), f = f[y];
        else {
          const v = e[d], l = f[y] = v === null ? null : m.mapFromDriverValue(v);
          if (t && $(a, he) && u.length === 2) {
            const h = u[0];
            h in r ? typeof r[h] == "string" && r[h] !== Be(a.table) && (r[h] = !1) : r[h] = l === null ? Be(a.table) : !1;
          }
        }
      return s;
    },
    {}
  );
  if (t && Object.keys(r).length > 0)
    for (const [s, u] of Object.entries(r))
      typeof u == "string" && !t[u] && (n[s] = null);
  return n;
}
function De(i, e) {
  return Object.entries(i).reduce((t, [r, n]) => {
    if (typeof r != "string")
      return t;
    const s = e ? [...e, r] : [r];
    return $(n, he) || $(n, z) || $(n, z.Aliased) ? t.push({ path: s, field: n }) : $(n, U) ? t.push(...De(n[U.Symbol.Columns], s)) : t.push(...De(n, s)), t;
  }, []);
}
function Vr(i, e) {
  const t = Object.keys(i), r = Object.keys(e);
  if (t.length !== r.length)
    return !1;
  for (const [n, s] of t.entries())
    if (s !== r[n])
      return !1;
  return !0;
}
function Kn(i, e) {
  const t = Object.entries(e).filter(([, r]) => r !== void 0).map(([r, n]) => $(n, z) || $(n, he) ? [r, n] : [r, new Re(n, i[U.Symbol.Columns][r])]);
  if (t.length === 0)
    throw new Error("No values to set");
  return Object.fromEntries(t);
}
function zo(i, e) {
  for (const t of e)
    for (const r of Object.getOwnPropertyNames(t.prototype))
      r !== "constructor" && Object.defineProperty(
        i.prototype,
        r,
        Object.getOwnPropertyDescriptor(t.prototype, r) || /* @__PURE__ */ Object.create(null)
      );
}
function Vo(i) {
  return i[U.Symbol.Columns];
}
function Me(i) {
  return $(i, Se) ? i._.alias : $(i, je) ? i[ce].name : $(i, z) ? void 0 : i[U.Symbol.IsAlias] ? i[U.Symbol.Name] : i[U.Symbol.BaseName];
}
function de(i, e) {
  return {
    name: typeof i == "string" && i.length > 0 ? i : "",
    config: typeof i == "object" ? i : e
  };
}
function Wo(i) {
  if (typeof i != "object" || i === null || i.constructor.name !== "Object") return !1;
  if ("logger" in i) {
    const e = typeof i.logger;
    return !(e !== "boolean" && (e !== "object" || typeof i.logger.logQuery != "function") && e !== "undefined");
  }
  if ("schema" in i) {
    const e = typeof i.schema;
    return !(e !== "object" && e !== "undefined");
  }
  if ("casing" in i) {
    const e = typeof i.casing;
    return !(e !== "string" && e !== "undefined");
  }
  if ("mode" in i)
    return !(i.mode !== "default" || i.mode !== "planetscale" || i.mode !== void 0);
  if ("connection" in i) {
    const e = typeof i.connection;
    return !(e !== "string" && e !== "object" && e !== "undefined");
  }
  if ("client" in i) {
    const e = typeof i.client;
    return !(e !== "object" && e !== "function" && e !== "undefined");
  }
  return Object.keys(i).length === 0;
}
class sr extends re {
  static [I] = "PgIntColumnBaseBuilder";
  generatedAlwaysAsIdentity(e) {
    if (e) {
      const { name: t, ...r } = e;
      this.config.generatedIdentity = {
        type: "always",
        sequenceName: t,
        sequenceOptions: r
      };
    } else
      this.config.generatedIdentity = {
        type: "always"
      };
    return this.config.hasDefault = !0, this.config.notNull = !0, this;
  }
  generatedByDefaultAsIdentity(e) {
    if (e) {
      const { name: t, ...r } = e;
      this.config.generatedIdentity = {
        type: "byDefault",
        sequenceName: t,
        sequenceOptions: r
      };
    } else
      this.config.generatedIdentity = {
        type: "byDefault"
      };
    return this.config.hasDefault = !0, this.config.notNull = !0, this;
  }
}
class Go extends sr {
  static [I] = "PgBigInt53Builder";
  constructor(e) {
    super(e, "number", "PgBigInt53");
  }
  /** @internal */
  build(e) {
    return new Ko(e, this.config);
  }
}
class Ko extends J {
  static [I] = "PgBigInt53";
  getSQLType() {
    return "bigint";
  }
  mapFromDriverValue(e) {
    return typeof e == "number" ? e : Number(e);
  }
}
class Ho extends sr {
  static [I] = "PgBigInt64Builder";
  constructor(e) {
    super(e, "bigint", "PgBigInt64");
  }
  /** @internal */
  build(e) {
    return new Jo(
      e,
      this.config
    );
  }
}
class Jo extends J {
  static [I] = "PgBigInt64";
  getSQLType() {
    return "bigint";
  }
  // eslint-disable-next-line unicorn/prefer-native-coercion-functions
  mapFromDriverValue(e) {
    return BigInt(e);
  }
}
function Yo(i, e) {
  const { name: t, config: r } = de(i, e);
  return r.mode === "number" ? new Go(t) : new Ho(t);
}
class Zo extends re {
  static [I] = "PgBigSerial53Builder";
  constructor(e) {
    super(e, "number", "PgBigSerial53"), this.config.hasDefault = !0, this.config.notNull = !0;
  }
  /** @internal */
  build(e) {
    return new Xo(
      e,
      this.config
    );
  }
}
class Xo extends J {
  static [I] = "PgBigSerial53";
  getSQLType() {
    return "bigserial";
  }
  mapFromDriverValue(e) {
    return typeof e == "number" ? e : Number(e);
  }
}
class ea extends re {
  static [I] = "PgBigSerial64Builder";
  constructor(e) {
    super(e, "bigint", "PgBigSerial64"), this.config.hasDefault = !0;
  }
  /** @internal */
  build(e) {
    return new ta(
      e,
      this.config
    );
  }
}
class ta extends J {
  static [I] = "PgBigSerial64";
  getSQLType() {
    return "bigserial";
  }
  // eslint-disable-next-line unicorn/prefer-native-coercion-functions
  mapFromDriverValue(e) {
    return BigInt(e);
  }
}
function ra(i, e) {
  const { name: t, config: r } = de(i, e);
  return r.mode === "number" ? new Zo(t) : new ea(t);
}
class ia extends re {
  static [I] = "PgBooleanBuilder";
  constructor(e) {
    super(e, "boolean", "PgBoolean");
  }
  /** @internal */
  build(e) {
    return new na(e, this.config);
  }
}
class na extends J {
  static [I] = "PgBoolean";
  getSQLType() {
    return "boolean";
  }
}
function sa(i) {
  return new ia(i ?? "");
}
class oa extends re {
  static [I] = "PgCharBuilder";
  constructor(e, t) {
    super(e, "string", "PgChar"), this.config.length = t.length, this.config.enumValues = t.enum;
  }
  /** @internal */
  build(e) {
    return new aa(
      e,
      this.config
    );
  }
}
class aa extends J {
  static [I] = "PgChar";
  length = this.config.length;
  enumValues = this.config.enumValues;
  getSQLType() {
    return this.length === void 0 ? "char" : `char(${this.length})`;
  }
}
function ua(i, e = {}) {
  const { name: t, config: r } = de(i, e);
  return new oa(t, r);
}
class ca extends re {
  static [I] = "PgCidrBuilder";
  constructor(e) {
    super(e, "string", "PgCidr");
  }
  /** @internal */
  build(e) {
    return new la(e, this.config);
  }
}
class la extends J {
  static [I] = "PgCidr";
  getSQLType() {
    return "cidr";
  }
}
function ha(i) {
  return new ca(i ?? "");
}
class fa extends re {
  static [I] = "PgCustomColumnBuilder";
  constructor(e, t, r) {
    super(e, "custom", "PgCustomColumn"), this.config.fieldConfig = t, this.config.customTypeParams = r;
  }
  /** @internal */
  build(e) {
    return new da(
      e,
      this.config
    );
  }
}
class da extends J {
  static [I] = "PgCustomColumn";
  sqlName;
  mapTo;
  mapFrom;
  constructor(e, t) {
    super(e, t), this.sqlName = t.customTypeParams.dataType(t.fieldConfig), this.mapTo = t.customTypeParams.toDriver, this.mapFrom = t.customTypeParams.fromDriver;
  }
  getSQLType() {
    return this.sqlName;
  }
  mapFromDriverValue(e) {
    return typeof this.mapFrom == "function" ? this.mapFrom(e) : e;
  }
  mapToDriverValue(e) {
    return typeof this.mapTo == "function" ? this.mapTo(e) : e;
  }
}
function pa(i) {
  return (e, t) => {
    const { name: r, config: n } = de(e, t);
    return new fa(r, n, i);
  };
}
class Mt extends re {
  static [I] = "PgDateColumnBaseBuilder";
  defaultNow() {
    return this.default(A`now()`);
  }
}
class ga extends Mt {
  static [I] = "PgDateBuilder";
  constructor(e) {
    super(e, "date", "PgDate");
  }
  /** @internal */
  build(e) {
    return new Hn(e, this.config);
  }
}
class Hn extends J {
  static [I] = "PgDate";
  getSQLType() {
    return "date";
  }
  mapFromDriverValue(e) {
    return new Date(e);
  }
  mapToDriverValue(e) {
    return e.toISOString();
  }
}
class ya extends Mt {
  static [I] = "PgDateStringBuilder";
  constructor(e) {
    super(e, "string", "PgDateString");
  }
  /** @internal */
  build(e) {
    return new Jn(
      e,
      this.config
    );
  }
}
class Jn extends J {
  static [I] = "PgDateString";
  getSQLType() {
    return "date";
  }
}
function Yn(i, e) {
  const { name: t, config: r } = de(i, e);
  return r?.mode === "date" ? new ga(t) : new ya(t);
}
class ma extends re {
  static [I] = "PgDoublePrecisionBuilder";
  constructor(e) {
    super(e, "number", "PgDoublePrecision");
  }
  /** @internal */
  build(e) {
    return new ba(
      e,
      this.config
    );
  }
}
class ba extends J {
  static [I] = "PgDoublePrecision";
  getSQLType() {
    return "double precision";
  }
  mapFromDriverValue(e) {
    return typeof e == "string" ? Number.parseFloat(e) : e;
  }
}
function wa(i) {
  return new ma(i ?? "");
}
class va extends re {
  static [I] = "PgInetBuilder";
  constructor(e) {
    super(e, "string", "PgInet");
  }
  /** @internal */
  build(e) {
    return new Sa(e, this.config);
  }
}
class Sa extends J {
  static [I] = "PgInet";
  getSQLType() {
    return "inet";
  }
}
function _a(i) {
  return new va(i ?? "");
}
class Pa extends sr {
  static [I] = "PgIntegerBuilder";
  constructor(e) {
    super(e, "number", "PgInteger");
  }
  /** @internal */
  build(e) {
    return new Ta(e, this.config);
  }
}
class Ta extends J {
  static [I] = "PgInteger";
  getSQLType() {
    return "integer";
  }
  mapFromDriverValue(e) {
    return typeof e == "string" ? Number.parseInt(e) : e;
  }
}
function Ht(i) {
  return new Pa(i ?? "");
}
class Ea extends re {
  static [I] = "PgIntervalBuilder";
  constructor(e, t) {
    super(e, "string", "PgInterval"), this.config.intervalConfig = t;
  }
  /** @internal */
  build(e) {
    return new Ca(e, this.config);
  }
}
class Ca extends J {
  static [I] = "PgInterval";
  fields = this.config.intervalConfig.fields;
  precision = this.config.intervalConfig.precision;
  getSQLType() {
    const e = this.fields ? ` ${this.fields}` : "", t = this.precision ? `(${this.precision})` : "";
    return `interval${e}${t}`;
  }
}
function Aa(i, e = {}) {
  const { name: t, config: r } = de(i, e);
  return new Ea(t, r);
}
class La extends re {
  static [I] = "PgJsonBuilder";
  constructor(e) {
    super(e, "json", "PgJson");
  }
  /** @internal */
  build(e) {
    return new Zn(e, this.config);
  }
}
class Zn extends J {
  static [I] = "PgJson";
  constructor(e, t) {
    super(e, t);
  }
  getSQLType() {
    return "json";
  }
  mapToDriverValue(e) {
    return JSON.stringify(e);
  }
  mapFromDriverValue(e) {
    if (typeof e == "string")
      try {
        return JSON.parse(e);
      } catch {
        return e;
      }
    return e;
  }
}
function xa(i) {
  return new La(i ?? "");
}
class Ba extends re {
  static [I] = "PgJsonbBuilder";
  constructor(e) {
    super(e, "json", "PgJsonb");
  }
  /** @internal */
  build(e) {
    return new Xn(e, this.config);
  }
}
class Xn extends J {
  static [I] = "PgJsonb";
  constructor(e, t) {
    super(e, t);
  }
  getSQLType() {
    return "jsonb";
  }
  mapToDriverValue(e) {
    return JSON.stringify(e);
  }
  mapFromDriverValue(e) {
    if (typeof e == "string")
      try {
        return JSON.parse(e);
      } catch {
        return e;
      }
    return e;
  }
}
function Ia(i) {
  return new Ba(i ?? "");
}
class Na extends re {
  static [I] = "PgLineBuilder";
  constructor(e) {
    super(e, "array", "PgLine");
  }
  /** @internal */
  build(e) {
    return new Ra(
      e,
      this.config
    );
  }
}
class Ra extends J {
  static [I] = "PgLine";
  getSQLType() {
    return "line";
  }
  mapFromDriverValue(e) {
    const [t, r, n] = e.slice(1, -1).split(",");
    return [Number.parseFloat(t), Number.parseFloat(r), Number.parseFloat(n)];
  }
  mapToDriverValue(e) {
    return `{${e[0]},${e[1]},${e[2]}}`;
  }
}
class Oa extends re {
  static [I] = "PgLineABCBuilder";
  constructor(e) {
    super(e, "json", "PgLineABC");
  }
  /** @internal */
  build(e) {
    return new Ma(
      e,
      this.config
    );
  }
}
class Ma extends J {
  static [I] = "PgLineABC";
  getSQLType() {
    return "line";
  }
  mapFromDriverValue(e) {
    const [t, r, n] = e.slice(1, -1).split(",");
    return { a: Number.parseFloat(t), b: Number.parseFloat(r), c: Number.parseFloat(n) };
  }
  mapToDriverValue(e) {
    return `{${e.a},${e.b},${e.c}}`;
  }
}
function qa(i, e) {
  const { name: t, config: r } = de(i, e);
  return !r?.mode || r.mode === "tuple" ? new Na(t) : new Oa(t);
}
class Da extends re {
  static [I] = "PgMacaddrBuilder";
  constructor(e) {
    super(e, "string", "PgMacaddr");
  }
  /** @internal */
  build(e) {
    return new $a(e, this.config);
  }
}
class $a extends J {
  static [I] = "PgMacaddr";
  getSQLType() {
    return "macaddr";
  }
}
function ka(i) {
  return new Da(i ?? "");
}
class Qa extends re {
  static [I] = "PgMacaddr8Builder";
  constructor(e) {
    super(e, "string", "PgMacaddr8");
  }
  /** @internal */
  build(e) {
    return new Fa(e, this.config);
  }
}
class Fa extends J {
  static [I] = "PgMacaddr8";
  getSQLType() {
    return "macaddr8";
  }
}
function ja(i) {
  return new Qa(i ?? "");
}
class Ua extends re {
  static [I] = "PgNumericBuilder";
  constructor(e, t, r) {
    super(e, "string", "PgNumeric"), this.config.precision = t, this.config.scale = r;
  }
  /** @internal */
  build(e) {
    return new es(e, this.config);
  }
}
class es extends J {
  static [I] = "PgNumeric";
  precision;
  scale;
  constructor(e, t) {
    super(e, t), this.precision = t.precision, this.scale = t.scale;
  }
  mapFromDriverValue(e) {
    return typeof e == "string" ? e : String(e);
  }
  getSQLType() {
    return this.precision !== void 0 && this.scale !== void 0 ? `numeric(${this.precision}, ${this.scale})` : this.precision === void 0 ? "numeric" : `numeric(${this.precision})`;
  }
}
class za extends re {
  static [I] = "PgNumericNumberBuilder";
  constructor(e, t, r) {
    super(e, "number", "PgNumericNumber"), this.config.precision = t, this.config.scale = r;
  }
  /** @internal */
  build(e) {
    return new Va(
      e,
      this.config
    );
  }
}
class Va extends J {
  static [I] = "PgNumericNumber";
  precision;
  scale;
  constructor(e, t) {
    super(e, t), this.precision = t.precision, this.scale = t.scale;
  }
  mapFromDriverValue(e) {
    return typeof e == "number" ? e : Number(e);
  }
  mapToDriverValue = String;
  getSQLType() {
    return this.precision !== void 0 && this.scale !== void 0 ? `numeric(${this.precision}, ${this.scale})` : this.precision === void 0 ? "numeric" : `numeric(${this.precision})`;
  }
}
class Wa extends re {
  static [I] = "PgNumericBigIntBuilder";
  constructor(e, t, r) {
    super(e, "bigint", "PgNumericBigInt"), this.config.precision = t, this.config.scale = r;
  }
  /** @internal */
  build(e) {
    return new Ga(
      e,
      this.config
    );
  }
}
class Ga extends J {
  static [I] = "PgNumericBigInt";
  precision;
  scale;
  constructor(e, t) {
    super(e, t), this.precision = t.precision, this.scale = t.scale;
  }
  mapFromDriverValue = BigInt;
  mapToDriverValue = String;
  getSQLType() {
    return this.precision !== void 0 && this.scale !== void 0 ? `numeric(${this.precision}, ${this.scale})` : this.precision === void 0 ? "numeric" : `numeric(${this.precision})`;
  }
}
function Ka(i, e) {
  const { name: t, config: r } = de(i, e), n = r?.mode;
  return n === "number" ? new za(t, r?.precision, r?.scale) : n === "bigint" ? new Wa(t, r?.precision, r?.scale) : new Ua(t, r?.precision, r?.scale);
}
class Ha extends re {
  static [I] = "PgPointTupleBuilder";
  constructor(e) {
    super(e, "array", "PgPointTuple");
  }
  /** @internal */
  build(e) {
    return new Ja(
      e,
      this.config
    );
  }
}
class Ja extends J {
  static [I] = "PgPointTuple";
  getSQLType() {
    return "point";
  }
  mapFromDriverValue(e) {
    if (typeof e == "string") {
      const [t, r] = e.slice(1, -1).split(",");
      return [Number.parseFloat(t), Number.parseFloat(r)];
    }
    return [e.x, e.y];
  }
  mapToDriverValue(e) {
    return `(${e[0]},${e[1]})`;
  }
}
class Ya extends re {
  static [I] = "PgPointObjectBuilder";
  constructor(e) {
    super(e, "json", "PgPointObject");
  }
  /** @internal */
  build(e) {
    return new Za(
      e,
      this.config
    );
  }
}
class Za extends J {
  static [I] = "PgPointObject";
  getSQLType() {
    return "point";
  }
  mapFromDriverValue(e) {
    if (typeof e == "string") {
      const [t, r] = e.slice(1, -1).split(",");
      return { x: Number.parseFloat(t), y: Number.parseFloat(r) };
    }
    return e;
  }
  mapToDriverValue(e) {
    return `(${e.x},${e.y})`;
  }
}
function Xa(i, e) {
  const { name: t, config: r } = de(i, e);
  return !r?.mode || r.mode === "tuple" ? new Ha(t) : new Ya(t);
}
function eu(i) {
  const e = [];
  for (let t = 0; t < i.length; t += 2)
    e.push(Number.parseInt(i.slice(t, t + 2), 16));
  return new Uint8Array(e);
}
function fi(i, e) {
  const t = new ArrayBuffer(8), r = new DataView(t);
  for (let n = 0; n < 8; n++)
    r.setUint8(n, i[e + n]);
  return r.getFloat64(0, !0);
}
function ts(i) {
  const e = eu(i);
  let t = 0;
  const r = e[t];
  t += 1;
  const n = new DataView(e.buffer), s = n.getUint32(t, r === 1);
  if (t += 4, s & 536870912 && (n.getUint32(t, r === 1), t += 4), (s & 65535) === 1) {
    const u = fi(e, t);
    t += 8;
    const a = fi(e, t);
    return t += 8, [u, a];
  }
  throw new Error("Unsupported geometry type");
}
class tu extends re {
  static [I] = "PgGeometryBuilder";
  constructor(e) {
    super(e, "array", "PgGeometry");
  }
  /** @internal */
  build(e) {
    return new ru(
      e,
      this.config
    );
  }
}
class ru extends J {
  static [I] = "PgGeometry";
  getSQLType() {
    return "geometry(point)";
  }
  mapFromDriverValue(e) {
    return ts(e);
  }
  mapToDriverValue(e) {
    return `point(${e[0]} ${e[1]})`;
  }
}
class iu extends re {
  static [I] = "PgGeometryObjectBuilder";
  constructor(e) {
    super(e, "json", "PgGeometryObject");
  }
  /** @internal */
  build(e) {
    return new nu(
      e,
      this.config
    );
  }
}
class nu extends J {
  static [I] = "PgGeometryObject";
  getSQLType() {
    return "geometry(point)";
  }
  mapFromDriverValue(e) {
    const t = ts(e);
    return { x: t[0], y: t[1] };
  }
  mapToDriverValue(e) {
    return `point(${e.x} ${e.y})`;
  }
}
function su(i, e) {
  const { name: t, config: r } = de(i, e);
  return !r?.mode || r.mode === "tuple" ? new tu(t) : new iu(t);
}
class ou extends re {
  static [I] = "PgRealBuilder";
  constructor(e, t) {
    super(e, "number", "PgReal"), this.config.length = t;
  }
  /** @internal */
  build(e) {
    return new au(e, this.config);
  }
}
class au extends J {
  static [I] = "PgReal";
  constructor(e, t) {
    super(e, t);
  }
  getSQLType() {
    return "real";
  }
  mapFromDriverValue = (e) => typeof e == "string" ? Number.parseFloat(e) : e;
}
function uu(i) {
  return new ou(i ?? "");
}
class cu extends re {
  static [I] = "PgSerialBuilder";
  constructor(e) {
    super(e, "number", "PgSerial"), this.config.hasDefault = !0, this.config.notNull = !0;
  }
  /** @internal */
  build(e) {
    return new lu(e, this.config);
  }
}
class lu extends J {
  static [I] = "PgSerial";
  getSQLType() {
    return "serial";
  }
}
function hu(i) {
  return new cu(i ?? "");
}
class fu extends sr {
  static [I] = "PgSmallIntBuilder";
  constructor(e) {
    super(e, "number", "PgSmallInt");
  }
  /** @internal */
  build(e) {
    return new du(e, this.config);
  }
}
class du extends J {
  static [I] = "PgSmallInt";
  getSQLType() {
    return "smallint";
  }
  mapFromDriverValue = (e) => typeof e == "string" ? Number(e) : e;
}
function pu(i) {
  return new fu(i ?? "");
}
class gu extends re {
  static [I] = "PgSmallSerialBuilder";
  constructor(e) {
    super(e, "number", "PgSmallSerial"), this.config.hasDefault = !0, this.config.notNull = !0;
  }
  /** @internal */
  build(e) {
    return new yu(
      e,
      this.config
    );
  }
}
class yu extends J {
  static [I] = "PgSmallSerial";
  getSQLType() {
    return "smallserial";
  }
}
function mu(i) {
  return new gu(i ?? "");
}
class bu extends re {
  static [I] = "PgTextBuilder";
  constructor(e, t) {
    super(e, "string", "PgText"), this.config.enumValues = t.enum;
  }
  /** @internal */
  build(e) {
    return new wu(e, this.config);
  }
}
class wu extends J {
  static [I] = "PgText";
  enumValues = this.config.enumValues;
  getSQLType() {
    return "text";
  }
}
function vu(i, e = {}) {
  const { name: t, config: r } = de(i, e);
  return new bu(t, r);
}
class Su extends Mt {
  constructor(e, t, r) {
    super(e, "string", "PgTime"), this.withTimezone = t, this.precision = r, this.config.withTimezone = t, this.config.precision = r;
  }
  static [I] = "PgTimeBuilder";
  /** @internal */
  build(e) {
    return new rs(e, this.config);
  }
}
class rs extends J {
  static [I] = "PgTime";
  withTimezone;
  precision;
  constructor(e, t) {
    super(e, t), this.withTimezone = t.withTimezone, this.precision = t.precision;
  }
  getSQLType() {
    return `time${this.precision === void 0 ? "" : `(${this.precision})`}${this.withTimezone ? " with time zone" : ""}`;
  }
}
function _u(i, e = {}) {
  const { name: t, config: r } = de(i, e);
  return new Su(t, r.withTimezone ?? !1, r.precision);
}
class Pu extends Mt {
  static [I] = "PgTimestampBuilder";
  constructor(e, t, r) {
    super(e, "date", "PgTimestamp"), this.config.withTimezone = t, this.config.precision = r;
  }
  /** @internal */
  build(e) {
    return new is(e, this.config);
  }
}
class is extends J {
  static [I] = "PgTimestamp";
  withTimezone;
  precision;
  constructor(e, t) {
    super(e, t), this.withTimezone = t.withTimezone, this.precision = t.precision;
  }
  getSQLType() {
    return `timestamp${this.precision === void 0 ? "" : ` (${this.precision})`}${this.withTimezone ? " with time zone" : ""}`;
  }
  mapFromDriverValue = (e) => new Date(this.withTimezone ? e : e + "+0000");
  mapToDriverValue = (e) => e.toISOString();
}
class Tu extends Mt {
  static [I] = "PgTimestampStringBuilder";
  constructor(e, t, r) {
    super(e, "string", "PgTimestampString"), this.config.withTimezone = t, this.config.precision = r;
  }
  /** @internal */
  build(e) {
    return new ns(
      e,
      this.config
    );
  }
}
class ns extends J {
  static [I] = "PgTimestampString";
  withTimezone;
  precision;
  constructor(e, t) {
    super(e, t), this.withTimezone = t.withTimezone, this.precision = t.precision;
  }
  getSQLType() {
    return `timestamp${this.precision === void 0 ? "" : `(${this.precision})`}${this.withTimezone ? " with time zone" : ""}`;
  }
}
function Wr(i, e = {}) {
  const { name: t, config: r } = de(i, e);
  return r?.mode === "string" ? new Tu(t, r.withTimezone ?? !1, r.precision) : new Pu(t, r?.withTimezone ?? !1, r?.precision);
}
class Eu extends re {
  static [I] = "PgUUIDBuilder";
  constructor(e) {
    super(e, "string", "PgUUID");
  }
  /**
   * Adds `default gen_random_uuid()` to the column definition.
   */
  defaultRandom() {
    return this.default(A`gen_random_uuid()`);
  }
  /** @internal */
  build(e) {
    return new ss(e, this.config);
  }
}
class ss extends J {
  static [I] = "PgUUID";
  getSQLType() {
    return "uuid";
  }
}
function Cu(i) {
  return new Eu(i ?? "");
}
class Au extends re {
  static [I] = "PgVarcharBuilder";
  constructor(e, t) {
    super(e, "string", "PgVarchar"), this.config.length = t.length, this.config.enumValues = t.enum;
  }
  /** @internal */
  build(e) {
    return new Lu(
      e,
      this.config
    );
  }
}
class Lu extends J {
  static [I] = "PgVarchar";
  length = this.config.length;
  enumValues = this.config.enumValues;
  getSQLType() {
    return this.length === void 0 ? "varchar" : `varchar(${this.length})`;
  }
}
function os(i, e = {}) {
  const { name: t, config: r } = de(i, e);
  return new Au(t, r);
}
class xu extends re {
  static [I] = "PgBinaryVectorBuilder";
  constructor(e, t) {
    super(e, "string", "PgBinaryVector"), this.config.dimensions = t.dimensions;
  }
  /** @internal */
  build(e) {
    return new Bu(
      e,
      this.config
    );
  }
}
class Bu extends J {
  static [I] = "PgBinaryVector";
  dimensions = this.config.dimensions;
  getSQLType() {
    return `bit(${this.dimensions})`;
  }
}
function Iu(i, e) {
  const { name: t, config: r } = de(i, e);
  return new xu(t, r);
}
class Nu extends re {
  static [I] = "PgHalfVectorBuilder";
  constructor(e, t) {
    super(e, "array", "PgHalfVector"), this.config.dimensions = t.dimensions;
  }
  /** @internal */
  build(e) {
    return new Ru(
      e,
      this.config
    );
  }
}
class Ru extends J {
  static [I] = "PgHalfVector";
  dimensions = this.config.dimensions;
  getSQLType() {
    return `halfvec(${this.dimensions})`;
  }
  mapToDriverValue(e) {
    return JSON.stringify(e);
  }
  mapFromDriverValue(e) {
    return e.slice(1, -1).split(",").map((t) => Number.parseFloat(t));
  }
}
function Ou(i, e) {
  const { name: t, config: r } = de(i, e);
  return new Nu(t, r);
}
class Mu extends re {
  static [I] = "PgSparseVectorBuilder";
  constructor(e, t) {
    super(e, "string", "PgSparseVector"), this.config.dimensions = t.dimensions;
  }
  /** @internal */
  build(e) {
    return new qu(
      e,
      this.config
    );
  }
}
class qu extends J {
  static [I] = "PgSparseVector";
  dimensions = this.config.dimensions;
  getSQLType() {
    return `sparsevec(${this.dimensions})`;
  }
}
function Du(i, e) {
  const { name: t, config: r } = de(i, e);
  return new Mu(t, r);
}
class $u extends re {
  static [I] = "PgVectorBuilder";
  constructor(e, t) {
    super(e, "array", "PgVector"), this.config.dimensions = t.dimensions;
  }
  /** @internal */
  build(e) {
    return new ku(
      e,
      this.config
    );
  }
}
class ku extends J {
  static [I] = "PgVector";
  dimensions = this.config.dimensions;
  getSQLType() {
    return `vector(${this.dimensions})`;
  }
  mapToDriverValue(e) {
    return JSON.stringify(e);
  }
  mapFromDriverValue(e) {
    return e.slice(1, -1).split(",").map((t) => Number.parseFloat(t));
  }
}
function Qu(i, e) {
  const { name: t, config: r } = de(i, e);
  return new $u(t, r);
}
function Fu() {
  return {
    bigint: Yo,
    bigserial: ra,
    boolean: sa,
    char: ua,
    cidr: ha,
    customType: pa,
    date: Yn,
    doublePrecision: wa,
    inet: _a,
    integer: Ht,
    interval: Aa,
    json: xa,
    jsonb: Ia,
    line: qa,
    macaddr: ka,
    macaddr8: ja,
    numeric: Ka,
    point: Xa,
    geometry: su,
    real: uu,
    serial: hu,
    smallint: pu,
    smallserial: mu,
    text: vu,
    time: _u,
    timestamp: Wr,
    uuid: Cu,
    varchar: os,
    bit: Iu,
    halfvec: Ou,
    sparsevec: Du,
    vector: Qu
  };
}
const Ar = Symbol.for("drizzle:PgInlineForeignKeys"), di = Symbol.for("drizzle:EnableRLS");
class ye extends U {
  static [I] = "PgTable";
  /** @internal */
  static Symbol = Object.assign({}, U.Symbol, {
    InlineForeignKeys: Ar,
    EnableRLS: di
  });
  /**@internal */
  [Ar] = [];
  /** @internal */
  [di] = !1;
  /** @internal */
  [U.Symbol.ExtraConfigBuilder] = void 0;
  /** @internal */
  [U.Symbol.ExtraConfigColumns] = {};
}
function ju(i, e, t, r, n = i) {
  const s = new ye(i, r, n), u = typeof e == "function" ? e(Fu()) : e, a = Object.fromEntries(
    Object.entries(u).map(([f, w]) => {
      const y = w;
      y.setName(f);
      const v = y.build(s);
      return s[Ar].push(...y.buildForeignKeys(v, s)), [f, v];
    })
  ), d = Object.fromEntries(
    Object.entries(u).map(([f, w]) => {
      const y = w;
      y.setName(f);
      const v = y.buildExtraConfigColumn(s);
      return [f, v];
    })
  ), m = Object.assign(s, a);
  return m[U.Symbol.Columns] = a, m[U.Symbol.ExtraConfigColumns] = d, t && (m[ye.Symbol.ExtraConfigBuilder] = t), Object.assign(m, {
    enableRLS: () => (m[ye.Symbol.EnableRLS] = !0, m)
  });
}
const as = (i, e, t) => ju(i, e, t, void 0);
class us {
  constructor(e, t) {
    this.unique = e, this.name = t;
  }
  static [I] = "PgIndexBuilderOn";
  on(...e) {
    return new vr(
      e.map((t) => {
        if ($(t, z))
          return t;
        t = t;
        const r = new gr(t.name, !!t.keyAsName, t.columnType, t.indexConfig);
        return t.indexConfig = JSON.parse(JSON.stringify(t.defaultConfig)), r;
      }),
      this.unique,
      !1,
      this.name
    );
  }
  onOnly(...e) {
    return new vr(
      e.map((t) => {
        if ($(t, z))
          return t;
        t = t;
        const r = new gr(t.name, !!t.keyAsName, t.columnType, t.indexConfig);
        return t.indexConfig = t.defaultConfig, r;
      }),
      this.unique,
      !0,
      this.name
    );
  }
  /**
   * Specify what index method to use. Choices are `btree`, `hash`, `gist`, `spgist`, `gin`, `brin`, or user-installed access methods like `bloom`. The default method is `btree.
   *
   * If you have the `pg_vector` extension installed in your database, you can use the `hnsw` and `ivfflat` options, which are predefined types.
   *
   * **You can always specify any string you want in the method, in case Drizzle doesn't have it natively in its types**
   *
   * @param method The name of the index method to be used
   * @param columns
   * @returns
   */
  using(e, ...t) {
    return new vr(
      t.map((r) => {
        if ($(r, z))
          return r;
        r = r;
        const n = new gr(r.name, !!r.keyAsName, r.columnType, r.indexConfig);
        return r.indexConfig = JSON.parse(JSON.stringify(r.defaultConfig)), n;
      }),
      this.unique,
      !0,
      this.name,
      e
    );
  }
}
class vr {
  static [I] = "PgIndexBuilder";
  /** @internal */
  config;
  constructor(e, t, r, n, s = "btree") {
    this.config = {
      name: n,
      columns: e,
      unique: t,
      only: r,
      method: s
    };
  }
  concurrently() {
    return this.config.concurrently = !0, this;
  }
  with(e) {
    return this.config.with = e, this;
  }
  where(e) {
    return this.config.where = e, this;
  }
  /** @internal */
  build(e) {
    return new Uu(this.config, e);
  }
}
class Uu {
  static [I] = "PgIndex";
  config;
  constructor(e, t) {
    this.config = { ...e, table: t };
  }
}
function zu(i) {
  return new us(!1, i);
}
function Vu(i) {
  return new us(!0, i);
}
class Wu {
  static [I] = "PgPrimaryKeyBuilder";
  /** @internal */
  columns;
  /** @internal */
  name;
  constructor(e, t) {
    this.columns = e, this.name = t;
  }
  /** @internal */
  build(e) {
    return new Gu(e, this.columns, this.name);
  }
}
class Gu {
  constructor(e, t, r) {
    this.table = e, this.columns = t, this.name = r;
  }
  static [I] = "PgPrimaryKey";
  columns;
  name;
  getName() {
    return this.name ?? `${this.table[ye.Symbol.Name]}_${this.columns.map((e) => e.name).join("_")}_pk`;
  }
}
function Ku(i) {
  return (i.replace(/['\u2019]/g, "").match(/[\da-z]+|[A-Z]+(?![a-z])|[A-Z][\da-z]+/g) ?? []).map((t) => t.toLowerCase()).join("_");
}
function Hu(i) {
  return (i.replace(/['\u2019]/g, "").match(/[\da-z]+|[A-Z]+(?![a-z])|[A-Z][\da-z]+/g) ?? []).reduce((t, r, n) => {
    const s = n === 0 ? r.toLowerCase() : `${r[0].toUpperCase()}${r.slice(1)}`;
    return t + s;
  }, "");
}
function Ju(i) {
  return i;
}
class Yu {
  static [I] = "CasingCache";
  /** @internal */
  cache = {};
  cachedTables = {};
  convert;
  constructor(e) {
    this.convert = e === "snake_case" ? Ku : e === "camelCase" ? Hu : Ju;
  }
  getColumnCasing(e) {
    if (!e.keyAsName) return e.name;
    const t = e.table[U.Symbol.Schema] ?? "public", r = e.table[U.Symbol.OriginalName], n = `${t}.${r}.${e.name}`;
    return this.cache[n] || this.cacheTable(e.table), this.cache[n];
  }
  cacheTable(e) {
    const t = e[U.Symbol.Schema] ?? "public", r = e[U.Symbol.OriginalName], n = `${t}.${r}`;
    if (!this.cachedTables[n]) {
      for (const s of Object.values(e[U.Symbol.Columns])) {
        const u = `${n}.${s.name}`;
        this.cache[u] = this.convert(s.name);
      }
      this.cachedTables[n] = !0;
    }
  }
  clearCache() {
    this.cache = {}, this.cachedTables = {};
  }
}
class Zu extends Error {
  static [I] = "DrizzleError";
  constructor({ message: e, cause: t }) {
    super(e), this.name = "DrizzleError", this.cause = t;
  }
}
function me(i, e) {
  return Fo(e) && !zn(i) && !$(i, Re) && !$(i, He) && !$(i, he) && !$(i, U) && !$(i, je) ? new Re(i, e) : i;
}
const Gr = (i, e) => A`${i} = ${me(e, i)}`, Xu = (i, e) => A`${i} <> ${me(e, i)}`;
function Lr(...i) {
  const e = i.filter(
    (t) => t !== void 0
  );
  if (e.length !== 0)
    return e.length === 1 ? new z(e) : new z([
      new pe("("),
      A.join(e, new pe(" and ")),
      new pe(")")
    ]);
}
function ec(...i) {
  const e = i.filter(
    (t) => t !== void 0
  );
  if (e.length !== 0)
    return e.length === 1 ? new z(e) : new z([
      new pe("("),
      A.join(e, new pe(" or ")),
      new pe(")")
    ]);
}
function tc(i) {
  return A`not ${i}`;
}
const rc = (i, e) => A`${i} > ${me(e, i)}`, ic = (i, e) => A`${i} >= ${me(e, i)}`, nc = (i, e) => A`${i} < ${me(e, i)}`, sc = (i, e) => A`${i} <= ${me(e, i)}`;
function oc(i, e) {
  return Array.isArray(e) ? e.length === 0 ? A`false` : A`${i} in ${e.map((t) => me(t, i))}` : A`${i} in ${me(e, i)}`;
}
function ac(i, e) {
  return Array.isArray(e) ? e.length === 0 ? A`true` : A`${i} not in ${e.map((t) => me(t, i))}` : A`${i} not in ${me(e, i)}`;
}
function uc(i) {
  return A`${i} is null`;
}
function cc(i) {
  return A`${i} is not null`;
}
function lc(i) {
  return A`exists ${i}`;
}
function hc(i) {
  return A`not exists ${i}`;
}
function fc(i, e, t) {
  return A`${i} between ${me(e, i)} and ${me(
    t,
    i
  )}`;
}
function dc(i, e, t) {
  return A`${i} not between ${me(
    e,
    i
  )} and ${me(t, i)}`;
}
function pc(i, e) {
  return A`${i} like ${e}`;
}
function gc(i, e) {
  return A`${i} not like ${e}`;
}
function yc(i, e) {
  return A`${i} ilike ${e}`;
}
function mc(i, e) {
  return A`${i} not ilike ${e}`;
}
function bc(i) {
  return A`${i} asc`;
}
function wc(i) {
  return A`${i} desc`;
}
class cs {
  constructor(e, t, r) {
    this.sourceTable = e, this.referencedTable = t, this.relationName = r, this.referencedTableName = t[U.Symbol.Name];
  }
  static [I] = "Relation";
  referencedTableName;
  fieldName;
}
class vc {
  constructor(e, t) {
    this.table = e, this.config = t;
  }
  static [I] = "Relations";
}
class $e extends cs {
  constructor(e, t, r, n) {
    super(e, t, r?.relationName), this.config = r, this.isNullable = n;
  }
  static [I] = "One";
  withFieldName(e) {
    const t = new $e(
      this.sourceTable,
      this.referencedTable,
      this.config,
      this.isNullable
    );
    return t.fieldName = e, t;
  }
}
class or extends cs {
  constructor(e, t, r) {
    super(e, t, r?.relationName), this.config = r;
  }
  static [I] = "Many";
  withFieldName(e) {
    const t = new or(
      this.sourceTable,
      this.referencedTable,
      this.config
    );
    return t.fieldName = e, t;
  }
}
function Sc() {
  return {
    and: Lr,
    between: fc,
    eq: Gr,
    exists: lc,
    gt: rc,
    gte: ic,
    ilike: yc,
    inArray: oc,
    isNull: uc,
    isNotNull: cc,
    like: pc,
    lt: nc,
    lte: sc,
    ne: Xu,
    not: tc,
    notBetween: dc,
    notExists: hc,
    notLike: gc,
    notIlike: mc,
    notInArray: ac,
    or: ec,
    sql: A
  };
}
function _c() {
  return {
    sql: A,
    asc: bc,
    desc: wc
  };
}
function Pc(i, e) {
  Object.keys(i).length === 1 && "default" in i && !$(i.default, U) && (i = i.default);
  const t = {}, r = {}, n = {};
  for (const [s, u] of Object.entries(i))
    if ($(u, U)) {
      const a = It(u), d = r[a];
      t[a] = s, n[s] = {
        tsName: s,
        dbName: u[U.Symbol.Name],
        schema: u[U.Symbol.Schema],
        columns: u[U.Symbol.Columns],
        relations: d?.relations ?? {},
        primaryKey: d?.primaryKey ?? []
      };
      for (const f of Object.values(
        u[U.Symbol.Columns]
      ))
        f.primary && n[s].primaryKey.push(f);
      const m = u[U.Symbol.ExtraConfigBuilder]?.(u[U.Symbol.ExtraConfigColumns]);
      if (m)
        for (const f of Object.values(m))
          $(f, Wu) && n[s].primaryKey.push(...f.columns);
    } else if ($(u, vc)) {
      const a = It(u.table), d = t[a], m = u.config(
        e(u.table)
      );
      let f;
      for (const [w, y] of Object.entries(m))
        if (d) {
          const v = n[d];
          v.relations[w] = y;
        } else
          a in r || (r[a] = {
            relations: {},
            primaryKey: f
          }), r[a].relations[w] = y;
    }
  return { tables: n, tableNamesMap: t };
}
function Tc(i) {
  return function(t, r) {
    return new $e(
      i,
      t,
      r,
      r?.fields.reduce((n, s) => n && s.notNull, !0) ?? !1
    );
  };
}
function Ec(i) {
  return function(t, r) {
    return new or(i, t, r);
  };
}
function Cc(i, e, t) {
  if ($(t, $e) && t.config)
    return {
      fields: t.config.fields,
      references: t.config.references
    };
  const r = e[It(t.referencedTable)];
  if (!r)
    throw new Error(
      `Table "${t.referencedTable[U.Symbol.Name]}" not found in schema`
    );
  const n = i[r];
  if (!n)
    throw new Error(`Table "${r}" not found in schema`);
  const s = t.sourceTable, u = e[It(s)];
  if (!u)
    throw new Error(
      `Table "${s[U.Symbol.Name]}" not found in schema`
    );
  const a = [];
  for (const d of Object.values(
    n.relations
  ))
    (t.relationName && t !== d && d.relationName === t.relationName || !t.relationName && d.referencedTable === t.sourceTable) && a.push(d);
  if (a.length > 1)
    throw t.relationName ? new Error(
      `There are multiple relations with name "${t.relationName}" in table "${r}"`
    ) : new Error(
      `There are multiple relations between "${r}" and "${t.sourceTable[U.Symbol.Name]}". Please specify relation name`
    );
  if (a[0] && $(a[0], $e) && a[0].config)
    return {
      fields: a[0].config.references,
      references: a[0].config.fields
    };
  throw new Error(
    `There is not enough information to infer relation "${u}.${t.fieldName}"`
  );
}
function Ac(i) {
  return {
    one: Tc(i),
    many: Ec(i)
  };
}
function xr(i, e, t, r, n = (s) => s) {
  const s = {};
  for (const [
    u,
    a
  ] of r.entries())
    if (a.isJson) {
      const d = e.relations[a.tsKey], m = t[u], f = typeof m == "string" ? JSON.parse(m) : m;
      s[a.tsKey] = $(d, $e) ? f && xr(
        i,
        i[a.relationTableTsKey],
        f,
        a.selection,
        n
      ) : f.map(
        (w) => xr(
          i,
          i[a.relationTableTsKey],
          w,
          a.selection,
          n
        )
      );
    } else {
      const d = n(t[u]), m = a.field;
      let f;
      $(m, he) ? f = m : $(m, z) ? f = m.decoder : f = m.sql.decoder, s[a.tsKey] = d === null ? null : f.mapFromDriverValue(d);
    }
  return s;
}
class ls extends je {
  static [I] = "PgViewBase";
}
class Vt {
  static [I] = "PgDialect";
  /** @internal */
  casing;
  constructor(e) {
    this.casing = new Yu(e?.casing);
  }
  async migrate(e, t, r) {
    const n = typeof r == "string" ? "__drizzle_migrations" : r.migrationsTable ?? "__drizzle_migrations", s = typeof r == "string" ? "drizzle" : r.migrationsSchema ?? "drizzle", u = A`
			CREATE TABLE IF NOT EXISTS ${A.identifier(s)}.${A.identifier(n)} (
				id SERIAL PRIMARY KEY,
				hash text NOT NULL,
				created_at bigint
			)
		`;
    await t.execute(A`CREATE SCHEMA IF NOT EXISTS ${A.identifier(s)}`), await t.execute(u);
    const d = (await t.all(
      A`select id, hash, created_at from ${A.identifier(s)}.${A.identifier(n)} order by created_at desc limit 1`
    ))[0];
    await t.transaction(async (m) => {
      for await (const f of e)
        if (!d || Number(d.created_at) < f.folderMillis) {
          for (const w of f.sql)
            await m.execute(A.raw(w));
          await m.execute(
            A`insert into ${A.identifier(s)}.${A.identifier(n)} ("hash", "created_at") values(${f.hash}, ${f.folderMillis})`
          );
        }
    });
  }
  escapeName(e) {
    return `"${e}"`;
  }
  escapeParam(e) {
    return `$${e + 1}`;
  }
  escapeString(e) {
    return `'${e.replace(/'/g, "''")}'`;
  }
  buildWithCTE(e) {
    if (!e?.length) return;
    const t = [A`with `];
    for (const [r, n] of e.entries())
      t.push(A`${A.identifier(n._.alias)} as (${n._.sql})`), r < e.length - 1 && t.push(A`, `);
    return t.push(A` `), A.join(t);
  }
  buildDeleteQuery({ table: e, where: t, returning: r, withList: n }) {
    const s = this.buildWithCTE(n), u = r ? A` returning ${this.buildSelection(r, { isSingleTable: !0 })}` : void 0, a = t ? A` where ${t}` : void 0;
    return A`${s}delete from ${e}${a}${u}`;
  }
  buildUpdateSet(e, t) {
    const r = e[U.Symbol.Columns], n = Object.keys(r).filter(
      (u) => t[u] !== void 0 || r[u]?.onUpdateFn !== void 0
    ), s = n.length;
    return A.join(n.flatMap((u, a) => {
      const d = r[u], m = t[u] ?? A.param(d.onUpdateFn(), d), f = A`${A.identifier(this.casing.getColumnCasing(d))} = ${m}`;
      return a < s - 1 ? [f, A.raw(", ")] : [f];
    }));
  }
  buildUpdateQuery({ table: e, set: t, where: r, returning: n, withList: s, from: u, joins: a }) {
    const d = this.buildWithCTE(s), m = e[ye.Symbol.Name], f = e[ye.Symbol.Schema], w = e[ye.Symbol.OriginalName], y = m === w ? void 0 : m, v = A`${f ? A`${A.identifier(f)}.` : void 0}${A.identifier(w)}${y && A` ${A.identifier(y)}`}`, l = this.buildUpdateSet(e, t), h = u && A.join([A.raw(" from "), this.buildFromTable(u)]), b = this.buildJoins(a), S = n ? A` returning ${this.buildSelection(n, { isSingleTable: !u })}` : void 0, E = r ? A` where ${r}` : void 0;
    return A`${d}update ${v} set ${l}${h}${b}${E}${S}`;
  }
  /**
   * Builds selection SQL with provided fields/expressions
   *
   * Examples:
   *
   * `select <selection> from`
   *
   * `insert ... returning <selection>`
   *
   * If `isSingleTable` is true, then columns won't be prefixed with table name
   */
  buildSelection(e, { isSingleTable: t = !1 } = {}) {
    const r = e.length, n = e.flatMap(({ field: s }, u) => {
      const a = [];
      if ($(s, z.Aliased) && s.isSelectionField)
        a.push(A.identifier(s.fieldAlias));
      else if ($(s, z.Aliased) || $(s, z)) {
        const d = $(s, z.Aliased) ? s.sql : s;
        t ? a.push(
          new z(
            d.queryChunks.map((m) => $(m, J) ? A.identifier(this.casing.getColumnCasing(m)) : m)
          )
        ) : a.push(d), $(s, z.Aliased) && a.push(A` as ${A.identifier(s.fieldAlias)}`);
      } else $(s, he) && (t ? a.push(A.identifier(this.casing.getColumnCasing(s))) : a.push(s));
      return u < r - 1 && a.push(A`, `), a;
    });
    return A.join(n);
  }
  buildJoins(e) {
    if (!e || e.length === 0)
      return;
    const t = [];
    for (const [r, n] of e.entries()) {
      r === 0 && t.push(A` `);
      const s = n.table, u = n.lateral ? A` lateral` : void 0, a = n.on ? A` on ${n.on}` : void 0;
      if ($(s, ye)) {
        const d = s[ye.Symbol.Name], m = s[ye.Symbol.Schema], f = s[ye.Symbol.OriginalName], w = d === f ? void 0 : n.alias;
        t.push(
          A`${A.raw(n.joinType)} join${u} ${m ? A`${A.identifier(m)}.` : void 0}${A.identifier(f)}${w && A` ${A.identifier(w)}`}${a}`
        );
      } else if ($(s, je)) {
        const d = s[ce].name, m = s[ce].schema, f = s[ce].originalName, w = d === f ? void 0 : n.alias;
        t.push(
          A`${A.raw(n.joinType)} join${u} ${m ? A`${A.identifier(m)}.` : void 0}${A.identifier(f)}${w && A` ${A.identifier(w)}`}${a}`
        );
      } else
        t.push(
          A`${A.raw(n.joinType)} join${u} ${s}${a}`
        );
      r < e.length - 1 && t.push(A` `);
    }
    return A.join(t);
  }
  buildFromTable(e) {
    if ($(e, U) && e[U.Symbol.IsAlias]) {
      let t = A`${A.identifier(e[U.Symbol.OriginalName])}`;
      return e[U.Symbol.Schema] && (t = A`${A.identifier(e[U.Symbol.Schema])}.${t}`), A`${t} ${A.identifier(e[U.Symbol.Name])}`;
    }
    return e;
  }
  buildSelectQuery({
    withList: e,
    fields: t,
    fieldsFlat: r,
    where: n,
    having: s,
    table: u,
    joins: a,
    orderBy: d,
    groupBy: m,
    limit: f,
    offset: w,
    lockingClause: y,
    distinct: v,
    setOperators: l
  }) {
    const h = r ?? De(t);
    for (const M of h)
      if ($(M.field, he) && Be(M.field.table) !== ($(u, Se) ? u._.alias : $(u, ls) ? u[ce].name : $(u, z) ? void 0 : Be(u)) && !((Q) => a?.some(
        ({ alias: G }) => G === (Q[U.Symbol.IsAlias] ? Be(Q) : Q[U.Symbol.BaseName])
      ))(M.field.table)) {
        const Q = Be(M.field.table);
        throw new Error(
          `Your "${M.path.join("->")}" field references a column "${Q}"."${M.field.name}", but the table "${Q}" is not part of the query! Did you forget to join it?`
        );
      }
    const b = !a || a.length === 0, S = this.buildWithCTE(e);
    let E;
    v && (E = v === !0 ? A` distinct` : A` distinct on (${A.join(v.on, A`, `)})`);
    const T = this.buildSelection(h, { isSingleTable: b }), N = this.buildFromTable(u), O = this.buildJoins(a), _ = n ? A` where ${n}` : void 0, x = s ? A` having ${s}` : void 0;
    let L;
    d && d.length > 0 && (L = A` order by ${A.join(d, A`, `)}`);
    let P;
    m && m.length > 0 && (P = A` group by ${A.join(m, A`, `)}`);
    const q = typeof f == "object" || typeof f == "number" && f >= 0 ? A` limit ${f}` : void 0, R = w ? A` offset ${w}` : void 0, F = A.empty();
    if (y) {
      const M = A` for ${A.raw(y.strength)}`;
      y.config.of && M.append(
        A` of ${A.join(
          Array.isArray(y.config.of) ? y.config.of : [y.config.of],
          A`, `
        )}`
      ), y.config.noWait ? M.append(A` nowait`) : y.config.skipLocked && M.append(A` skip locked`), F.append(M);
    }
    const j = A`${S}select${E} ${T} from ${N}${O}${_}${P}${x}${L}${q}${R}${F}`;
    return l.length > 0 ? this.buildSetOperations(j, l) : j;
  }
  buildSetOperations(e, t) {
    const [r, ...n] = t;
    if (!r)
      throw new Error("Cannot pass undefined values to any set operator");
    return n.length === 0 ? this.buildSetOperationQuery({ leftSelect: e, setOperator: r }) : this.buildSetOperations(
      this.buildSetOperationQuery({ leftSelect: e, setOperator: r }),
      n
    );
  }
  buildSetOperationQuery({
    leftSelect: e,
    setOperator: { type: t, isAll: r, rightSelect: n, limit: s, orderBy: u, offset: a }
  }) {
    const d = A`(${e.getSQL()}) `, m = A`(${n.getSQL()})`;
    let f;
    if (u && u.length > 0) {
      const l = [];
      for (const h of u)
        if ($(h, J))
          l.push(A.identifier(h.name));
        else if ($(h, z)) {
          for (let b = 0; b < h.queryChunks.length; b++) {
            const S = h.queryChunks[b];
            $(S, J) && (h.queryChunks[b] = A.identifier(S.name));
          }
          l.push(A`${h}`);
        } else
          l.push(A`${h}`);
      f = A` order by ${A.join(l, A`, `)} `;
    }
    const w = typeof s == "object" || typeof s == "number" && s >= 0 ? A` limit ${s}` : void 0, y = A.raw(`${t} ${r ? "all " : ""}`), v = a ? A` offset ${a}` : void 0;
    return A`${d}${y}${m}${f}${w}${v}`;
  }
  buildInsertQuery({ table: e, values: t, onConflict: r, returning: n, withList: s, select: u, overridingSystemValue_: a }) {
    const d = [], m = e[U.Symbol.Columns], f = Object.entries(m).filter(([S, E]) => !E.shouldDisableInsert()), w = f.map(
      ([, S]) => A.identifier(this.casing.getColumnCasing(S))
    );
    if (u) {
      const S = t;
      $(S, z) ? d.push(S) : d.push(S.getSQL());
    } else {
      const S = t;
      d.push(A.raw("values "));
      for (const [E, T] of S.entries()) {
        const N = [];
        for (const [O, _] of f) {
          const x = T[O];
          if (x === void 0 || $(x, Re) && x.value === void 0)
            if (_.defaultFn !== void 0) {
              const L = _.defaultFn(), P = $(L, z) ? L : A.param(L, _);
              N.push(P);
            } else if (!_.default && _.onUpdateFn !== void 0) {
              const L = _.onUpdateFn(), P = $(L, z) ? L : A.param(L, _);
              N.push(P);
            } else
              N.push(A`default`);
          else
            N.push(x);
        }
        d.push(N), E < S.length - 1 && d.push(A`, `);
      }
    }
    const y = this.buildWithCTE(s), v = A.join(d), l = n ? A` returning ${this.buildSelection(n, { isSingleTable: !0 })}` : void 0, h = r ? A` on conflict ${r}` : void 0, b = a === !0 ? A`overriding system value ` : void 0;
    return A`${y}insert into ${e} ${w} ${b}${v}${h}${l}`;
  }
  buildRefreshMaterializedViewQuery({ view: e, concurrently: t, withNoData: r }) {
    const n = t ? A` concurrently` : void 0, s = r ? A` with no data` : void 0;
    return A`refresh materialized view${n} ${e}${s}`;
  }
  prepareTyping(e) {
    return $(e, Xn) || $(e, Zn) ? "json" : $(e, es) ? "decimal" : $(e, rs) ? "time" : $(e, is) || $(e, ns) ? "timestamp" : $(e, Hn) || $(e, Jn) ? "date" : $(e, ss) ? "uuid" : "none";
  }
  sqlToQuery(e, t) {
    return e.toQuery({
      casing: this.casing,
      escapeName: this.escapeName,
      escapeParam: this.escapeParam,
      escapeString: this.escapeString,
      prepareTyping: this.prepareTyping,
      invokeSource: t
    });
  }
  // buildRelationalQueryWithPK({
  // 	fullSchema,
  // 	schema,
  // 	tableNamesMap,
  // 	table,
  // 	tableConfig,
  // 	queryConfig: config,
  // 	tableAlias,
  // 	isRoot = false,
  // 	joinOn,
  // }: {
  // 	fullSchema: Record<string, unknown>;
  // 	schema: TablesRelationalConfig;
  // 	tableNamesMap: Record<string, string>;
  // 	table: PgTable;
  // 	tableConfig: TableRelationalConfig;
  // 	queryConfig: true | DBQueryConfig<'many', true>;
  // 	tableAlias: string;
  // 	isRoot?: boolean;
  // 	joinOn?: SQL;
  // }): BuildRelationalQueryResult<PgTable, PgColumn> {
  // 	// For { "<relation>": true }, return a table with selection of all columns
  // 	if (config === true) {
  // 		const selectionEntries = Object.entries(tableConfig.columns);
  // 		const selection: BuildRelationalQueryResult<PgTable, PgColumn>['selection'] = selectionEntries.map((
  // 			[key, value],
  // 		) => ({
  // 			dbKey: value.name,
  // 			tsKey: key,
  // 			field: value as PgColumn,
  // 			relationTableTsKey: undefined,
  // 			isJson: false,
  // 			selection: [],
  // 		}));
  // 		return {
  // 			tableTsKey: tableConfig.tsName,
  // 			sql: table,
  // 			selection,
  // 		};
  // 	}
  // 	// let selection: BuildRelationalQueryResult<PgTable, PgColumn>['selection'] = [];
  // 	// let selectionForBuild = selection;
  // 	const aliasedColumns = Object.fromEntries(
  // 		Object.entries(tableConfig.columns).map(([key, value]) => [key, aliasedTableColumn(value, tableAlias)]),
  // 	);
  // 	const aliasedRelations = Object.fromEntries(
  // 		Object.entries(tableConfig.relations).map(([key, value]) => [key, aliasedRelation(value, tableAlias)]),
  // 	);
  // 	const aliasedFields = Object.assign({}, aliasedColumns, aliasedRelations);
  // 	let where, hasUserDefinedWhere;
  // 	if (config.where) {
  // 		const whereSql = typeof config.where === 'function' ? config.where(aliasedFields, operators) : config.where;
  // 		where = whereSql && mapColumnsInSQLToAlias(whereSql, tableAlias);
  // 		hasUserDefinedWhere = !!where;
  // 	}
  // 	where = and(joinOn, where);
  // 	// const fieldsSelection: { tsKey: string; value: PgColumn | SQL.Aliased; isExtra?: boolean }[] = [];
  // 	let joins: Join[] = [];
  // 	let selectedColumns: string[] = [];
  // 	// Figure out which columns to select
  // 	if (config.columns) {
  // 		let isIncludeMode = false;
  // 		for (const [field, value] of Object.entries(config.columns)) {
  // 			if (value === undefined) {
  // 				continue;
  // 			}
  // 			if (field in tableConfig.columns) {
  // 				if (!isIncludeMode && value === true) {
  // 					isIncludeMode = true;
  // 				}
  // 				selectedColumns.push(field);
  // 			}
  // 		}
  // 		if (selectedColumns.length > 0) {
  // 			selectedColumns = isIncludeMode
  // 				? selectedColumns.filter((c) => config.columns?.[c] === true)
  // 				: Object.keys(tableConfig.columns).filter((key) => !selectedColumns.includes(key));
  // 		}
  // 	} else {
  // 		// Select all columns if selection is not specified
  // 		selectedColumns = Object.keys(tableConfig.columns);
  // 	}
  // 	// for (const field of selectedColumns) {
  // 	// 	const column = tableConfig.columns[field]! as PgColumn;
  // 	// 	fieldsSelection.push({ tsKey: field, value: column });
  // 	// }
  // 	let initiallySelectedRelations: {
  // 		tsKey: string;
  // 		queryConfig: true | DBQueryConfig<'many', false>;
  // 		relation: Relation;
  // 	}[] = [];
  // 	// let selectedRelations: BuildRelationalQueryResult<PgTable, PgColumn>['selection'] = [];
  // 	// Figure out which relations to select
  // 	if (config.with) {
  // 		initiallySelectedRelations = Object.entries(config.with)
  // 			.filter((entry): entry is [typeof entry[0], NonNullable<typeof entry[1]>] => !!entry[1])
  // 			.map(([tsKey, queryConfig]) => ({ tsKey, queryConfig, relation: tableConfig.relations[tsKey]! }));
  // 	}
  // 	const manyRelations = initiallySelectedRelations.filter((r) =>
  // 		is(r.relation, Many)
  // 		&& (schema[tableNamesMap[r.relation.referencedTable[Table.Symbol.Name]]!]?.primaryKey.length ?? 0) > 0
  // 	);
  // 	// If this is the last Many relation (or there are no Many relations), we are on the innermost subquery level
  // 	const isInnermostQuery = manyRelations.length < 2;
  // 	const selectedExtras: {
  // 		tsKey: string;
  // 		value: SQL.Aliased;
  // 	}[] = [];
  // 	// Figure out which extras to select
  // 	if (isInnermostQuery && config.extras) {
  // 		const extras = typeof config.extras === 'function'
  // 			? config.extras(aliasedFields, { sql })
  // 			: config.extras;
  // 		for (const [tsKey, value] of Object.entries(extras)) {
  // 			selectedExtras.push({
  // 				tsKey,
  // 				value: mapColumnsInAliasedSQLToAlias(value, tableAlias),
  // 			});
  // 		}
  // 	}
  // 	// Transform `fieldsSelection` into `selection`
  // 	// `fieldsSelection` shouldn't be used after this point
  // 	// for (const { tsKey, value, isExtra } of fieldsSelection) {
  // 	// 	selection.push({
  // 	// 		dbKey: is(value, SQL.Aliased) ? value.fieldAlias : tableConfig.columns[tsKey]!.name,
  // 	// 		tsKey,
  // 	// 		field: is(value, Column) ? aliasedTableColumn(value, tableAlias) : value,
  // 	// 		relationTableTsKey: undefined,
  // 	// 		isJson: false,
  // 	// 		isExtra,
  // 	// 		selection: [],
  // 	// 	});
  // 	// }
  // 	let orderByOrig = typeof config.orderBy === 'function'
  // 		? config.orderBy(aliasedFields, orderByOperators)
  // 		: config.orderBy ?? [];
  // 	if (!Array.isArray(orderByOrig)) {
  // 		orderByOrig = [orderByOrig];
  // 	}
  // 	const orderBy = orderByOrig.map((orderByValue) => {
  // 		if (is(orderByValue, Column)) {
  // 			return aliasedTableColumn(orderByValue, tableAlias) as PgColumn;
  // 		}
  // 		return mapColumnsInSQLToAlias(orderByValue, tableAlias);
  // 	});
  // 	const limit = isInnermostQuery ? config.limit : undefined;
  // 	const offset = isInnermostQuery ? config.offset : undefined;
  // 	// For non-root queries without additional config except columns, return a table with selection
  // 	if (
  // 		!isRoot
  // 		&& initiallySelectedRelations.length === 0
  // 		&& selectedExtras.length === 0
  // 		&& !where
  // 		&& orderBy.length === 0
  // 		&& limit === undefined
  // 		&& offset === undefined
  // 	) {
  // 		return {
  // 			tableTsKey: tableConfig.tsName,
  // 			sql: table,
  // 			selection: selectedColumns.map((key) => ({
  // 				dbKey: tableConfig.columns[key]!.name,
  // 				tsKey: key,
  // 				field: tableConfig.columns[key] as PgColumn,
  // 				relationTableTsKey: undefined,
  // 				isJson: false,
  // 				selection: [],
  // 			})),
  // 		};
  // 	}
  // 	const selectedRelationsWithoutPK:
  // 	// Process all relations without primary keys, because they need to be joined differently and will all be on the same query level
  // 	for (
  // 		const {
  // 			tsKey: selectedRelationTsKey,
  // 			queryConfig: selectedRelationConfigValue,
  // 			relation,
  // 		} of initiallySelectedRelations
  // 	) {
  // 		const normalizedRelation = normalizeRelation(schema, tableNamesMap, relation);
  // 		const relationTableName = relation.referencedTable[Table.Symbol.Name];
  // 		const relationTableTsName = tableNamesMap[relationTableName]!;
  // 		const relationTable = schema[relationTableTsName]!;
  // 		if (relationTable.primaryKey.length > 0) {
  // 			continue;
  // 		}
  // 		const relationTableAlias = `${tableAlias}_${selectedRelationTsKey}`;
  // 		const joinOn = and(
  // 			...normalizedRelation.fields.map((field, i) =>
  // 				eq(
  // 					aliasedTableColumn(normalizedRelation.references[i]!, relationTableAlias),
  // 					aliasedTableColumn(field, tableAlias),
  // 				)
  // 			),
  // 		);
  // 		const builtRelation = this.buildRelationalQueryWithoutPK({
  // 			fullSchema,
  // 			schema,
  // 			tableNamesMap,
  // 			table: fullSchema[relationTableTsName] as PgTable,
  // 			tableConfig: schema[relationTableTsName]!,
  // 			queryConfig: selectedRelationConfigValue,
  // 			tableAlias: relationTableAlias,
  // 			joinOn,
  // 			nestedQueryRelation: relation,
  // 		});
  // 		const field = sql`${sql.identifier(relationTableAlias)}.${sql.identifier('data')}`.as(selectedRelationTsKey);
  // 		joins.push({
  // 			on: sql`true`,
  // 			table: new Subquery(builtRelation.sql as SQL, {}, relationTableAlias),
  // 			alias: relationTableAlias,
  // 			joinType: 'left',
  // 			lateral: true,
  // 		});
  // 		selectedRelations.push({
  // 			dbKey: selectedRelationTsKey,
  // 			tsKey: selectedRelationTsKey,
  // 			field,
  // 			relationTableTsKey: relationTableTsName,
  // 			isJson: true,
  // 			selection: builtRelation.selection,
  // 		});
  // 	}
  // 	const oneRelations = initiallySelectedRelations.filter((r): r is typeof r & { relation: One } =>
  // 		is(r.relation, One)
  // 	);
  // 	// Process all One relations with PKs, because they can all be joined on the same level
  // 	for (
  // 		const {
  // 			tsKey: selectedRelationTsKey,
  // 			queryConfig: selectedRelationConfigValue,
  // 			relation,
  // 		} of oneRelations
  // 	) {
  // 		const normalizedRelation = normalizeRelation(schema, tableNamesMap, relation);
  // 		const relationTableName = relation.referencedTable[Table.Symbol.Name];
  // 		const relationTableTsName = tableNamesMap[relationTableName]!;
  // 		const relationTableAlias = `${tableAlias}_${selectedRelationTsKey}`;
  // 		const relationTable = schema[relationTableTsName]!;
  // 		if (relationTable.primaryKey.length === 0) {
  // 			continue;
  // 		}
  // 		const joinOn = and(
  // 			...normalizedRelation.fields.map((field, i) =>
  // 				eq(
  // 					aliasedTableColumn(normalizedRelation.references[i]!, relationTableAlias),
  // 					aliasedTableColumn(field, tableAlias),
  // 				)
  // 			),
  // 		);
  // 		const builtRelation = this.buildRelationalQueryWithPK({
  // 			fullSchema,
  // 			schema,
  // 			tableNamesMap,
  // 			table: fullSchema[relationTableTsName] as PgTable,
  // 			tableConfig: schema[relationTableTsName]!,
  // 			queryConfig: selectedRelationConfigValue,
  // 			tableAlias: relationTableAlias,
  // 			joinOn,
  // 		});
  // 		const field = sql`case when ${sql.identifier(relationTableAlias)} is null then null else json_build_array(${
  // 			sql.join(
  // 				builtRelation.selection.map(({ field }) =>
  // 					is(field, SQL.Aliased)
  // 						? sql`${sql.identifier(relationTableAlias)}.${sql.identifier(field.fieldAlias)}`
  // 						: is(field, Column)
  // 						? aliasedTableColumn(field, relationTableAlias)
  // 						: field
  // 				),
  // 				sql`, `,
  // 			)
  // 		}) end`.as(selectedRelationTsKey);
  // 		const isLateralJoin = is(builtRelation.sql, SQL);
  // 		joins.push({
  // 			on: isLateralJoin ? sql`true` : joinOn,
  // 			table: is(builtRelation.sql, SQL)
  // 				? new Subquery(builtRelation.sql, {}, relationTableAlias)
  // 				: aliasedTable(builtRelation.sql, relationTableAlias),
  // 			alias: relationTableAlias,
  // 			joinType: 'left',
  // 			lateral: is(builtRelation.sql, SQL),
  // 		});
  // 		selectedRelations.push({
  // 			dbKey: selectedRelationTsKey,
  // 			tsKey: selectedRelationTsKey,
  // 			field,
  // 			relationTableTsKey: relationTableTsName,
  // 			isJson: true,
  // 			selection: builtRelation.selection,
  // 		});
  // 	}
  // 	let distinct: PgSelectConfig['distinct'];
  // 	let tableFrom: PgTable | Subquery = table;
  // 	// Process first Many relation - each one requires a nested subquery
  // 	const manyRelation = manyRelations[0];
  // 	if (manyRelation) {
  // 		const {
  // 			tsKey: selectedRelationTsKey,
  // 			queryConfig: selectedRelationQueryConfig,
  // 			relation,
  // 		} = manyRelation;
  // 		distinct = {
  // 			on: tableConfig.primaryKey.map((c) => aliasedTableColumn(c as PgColumn, tableAlias)),
  // 		};
  // 		const normalizedRelation = normalizeRelation(schema, tableNamesMap, relation);
  // 		const relationTableName = relation.referencedTable[Table.Symbol.Name];
  // 		const relationTableTsName = tableNamesMap[relationTableName]!;
  // 		const relationTableAlias = `${tableAlias}_${selectedRelationTsKey}`;
  // 		const joinOn = and(
  // 			...normalizedRelation.fields.map((field, i) =>
  // 				eq(
  // 					aliasedTableColumn(normalizedRelation.references[i]!, relationTableAlias),
  // 					aliasedTableColumn(field, tableAlias),
  // 				)
  // 			),
  // 		);
  // 		const builtRelationJoin = this.buildRelationalQueryWithPK({
  // 			fullSchema,
  // 			schema,
  // 			tableNamesMap,
  // 			table: fullSchema[relationTableTsName] as PgTable,
  // 			tableConfig: schema[relationTableTsName]!,
  // 			queryConfig: selectedRelationQueryConfig,
  // 			tableAlias: relationTableAlias,
  // 			joinOn,
  // 		});
  // 		const builtRelationSelectionField = sql`case when ${
  // 			sql.identifier(relationTableAlias)
  // 		} is null then '[]' else json_agg(json_build_array(${
  // 			sql.join(
  // 				builtRelationJoin.selection.map(({ field }) =>
  // 					is(field, SQL.Aliased)
  // 						? sql`${sql.identifier(relationTableAlias)}.${sql.identifier(field.fieldAlias)}`
  // 						: is(field, Column)
  // 						? aliasedTableColumn(field, relationTableAlias)
  // 						: field
  // 				),
  // 				sql`, `,
  // 			)
  // 		})) over (partition by ${sql.join(distinct.on, sql`, `)}) end`.as(selectedRelationTsKey);
  // 		const isLateralJoin = is(builtRelationJoin.sql, SQL);
  // 		joins.push({
  // 			on: isLateralJoin ? sql`true` : joinOn,
  // 			table: isLateralJoin
  // 				? new Subquery(builtRelationJoin.sql as SQL, {}, relationTableAlias)
  // 				: aliasedTable(builtRelationJoin.sql as PgTable, relationTableAlias),
  // 			alias: relationTableAlias,
  // 			joinType: 'left',
  // 			lateral: isLateralJoin,
  // 		});
  // 		// Build the "from" subquery with the remaining Many relations
  // 		const builtTableFrom = this.buildRelationalQueryWithPK({
  // 			fullSchema,
  // 			schema,
  // 			tableNamesMap,
  // 			table,
  // 			tableConfig,
  // 			queryConfig: {
  // 				...config,
  // 				where: undefined,
  // 				orderBy: undefined,
  // 				limit: undefined,
  // 				offset: undefined,
  // 				with: manyRelations.slice(1).reduce<NonNullable<typeof config['with']>>(
  // 					(result, { tsKey, queryConfig: configValue }) => {
  // 						result[tsKey] = configValue;
  // 						return result;
  // 					},
  // 					{},
  // 				),
  // 			},
  // 			tableAlias,
  // 		});
  // 		selectedRelations.push({
  // 			dbKey: selectedRelationTsKey,
  // 			tsKey: selectedRelationTsKey,
  // 			field: builtRelationSelectionField,
  // 			relationTableTsKey: relationTableTsName,
  // 			isJson: true,
  // 			selection: builtRelationJoin.selection,
  // 		});
  // 		// selection = builtTableFrom.selection.map((item) =>
  // 		// 	is(item.field, SQL.Aliased)
  // 		// 		? { ...item, field: sql`${sql.identifier(tableAlias)}.${sql.identifier(item.field.fieldAlias)}` }
  // 		// 		: item
  // 		// );
  // 		// selectionForBuild = [{
  // 		// 	dbKey: '*',
  // 		// 	tsKey: '*',
  // 		// 	field: sql`${sql.identifier(tableAlias)}.*`,
  // 		// 	selection: [],
  // 		// 	isJson: false,
  // 		// 	relationTableTsKey: undefined,
  // 		// }];
  // 		// const newSelectionItem: (typeof selection)[number] = {
  // 		// 	dbKey: selectedRelationTsKey,
  // 		// 	tsKey: selectedRelationTsKey,
  // 		// 	field,
  // 		// 	relationTableTsKey: relationTableTsName,
  // 		// 	isJson: true,
  // 		// 	selection: builtRelationJoin.selection,
  // 		// };
  // 		// selection.push(newSelectionItem);
  // 		// selectionForBuild.push(newSelectionItem);
  // 		tableFrom = is(builtTableFrom.sql, PgTable)
  // 			? builtTableFrom.sql
  // 			: new Subquery(builtTableFrom.sql, {}, tableAlias);
  // 	}
  // 	if (selectedColumns.length === 0 && selectedRelations.length === 0 && selectedExtras.length === 0) {
  // 		throw new DrizzleError(`No fields selected for table "${tableConfig.tsName}" ("${tableAlias}")`);
  // 	}
  // 	let selection: BuildRelationalQueryResult<PgTable, PgColumn>['selection'];
  // 	function prepareSelectedColumns() {
  // 		return selectedColumns.map((key) => ({
  // 			dbKey: tableConfig.columns[key]!.name,
  // 			tsKey: key,
  // 			field: tableConfig.columns[key] as PgColumn,
  // 			relationTableTsKey: undefined,
  // 			isJson: false,
  // 			selection: [],
  // 		}));
  // 	}
  // 	function prepareSelectedExtras() {
  // 		return selectedExtras.map((item) => ({
  // 			dbKey: item.value.fieldAlias,
  // 			tsKey: item.tsKey,
  // 			field: item.value,
  // 			relationTableTsKey: undefined,
  // 			isJson: false,
  // 			selection: [],
  // 		}));
  // 	}
  // 	if (isRoot) {
  // 		selection = [
  // 			...prepareSelectedColumns(),
  // 			...prepareSelectedExtras(),
  // 		];
  // 	}
  // 	if (hasUserDefinedWhere || orderBy.length > 0) {
  // 		tableFrom = new Subquery(
  // 			this.buildSelectQuery({
  // 				table: is(tableFrom, PgTable) ? aliasedTable(tableFrom, tableAlias) : tableFrom,
  // 				fields: {},
  // 				fieldsFlat: selectionForBuild.map(({ field }) => ({
  // 					path: [],
  // 					field: is(field, Column) ? aliasedTableColumn(field, tableAlias) : field,
  // 				})),
  // 				joins,
  // 				distinct,
  // 			}),
  // 			{},
  // 			tableAlias,
  // 		);
  // 		selectionForBuild = selection.map((item) =>
  // 			is(item.field, SQL.Aliased)
  // 				? { ...item, field: sql`${sql.identifier(tableAlias)}.${sql.identifier(item.field.fieldAlias)}` }
  // 				: item
  // 		);
  // 		joins = [];
  // 		distinct = undefined;
  // 	}
  // 	const result = this.buildSelectQuery({
  // 		table: is(tableFrom, PgTable) ? aliasedTable(tableFrom, tableAlias) : tableFrom,
  // 		fields: {},
  // 		fieldsFlat: selectionForBuild.map(({ field }) => ({
  // 			path: [],
  // 			field: is(field, Column) ? aliasedTableColumn(field, tableAlias) : field,
  // 		})),
  // 		where,
  // 		limit,
  // 		offset,
  // 		joins,
  // 		orderBy,
  // 		distinct,
  // 	});
  // 	return {
  // 		tableTsKey: tableConfig.tsName,
  // 		sql: result,
  // 		selection,
  // 	};
  // }
  buildRelationalQueryWithoutPK({
    fullSchema: e,
    schema: t,
    tableNamesMap: r,
    table: n,
    tableConfig: s,
    queryConfig: u,
    tableAlias: a,
    nestedQueryRelation: d,
    joinOn: m
  }) {
    let f = [], w, y, v = [], l;
    const h = [];
    if (u === !0)
      f = Object.entries(s.columns).map(([E, T]) => ({
        dbKey: T.name,
        tsKey: E,
        field: xe(T, a),
        relationTableTsKey: void 0,
        isJson: !1,
        selection: []
      }));
    else {
      const S = Object.fromEntries(
        Object.entries(s.columns).map(([x, L]) => [x, xe(L, a)])
      );
      if (u.where) {
        const x = typeof u.where == "function" ? u.where(S, Sc()) : u.where;
        l = x && Kt(x, a);
      }
      const E = [];
      let T = [];
      if (u.columns) {
        let x = !1;
        for (const [L, P] of Object.entries(u.columns))
          P !== void 0 && L in s.columns && (!x && P === !0 && (x = !0), T.push(L));
        T.length > 0 && (T = x ? T.filter((L) => u.columns?.[L] === !0) : Object.keys(s.columns).filter((L) => !T.includes(L)));
      } else
        T = Object.keys(s.columns);
      for (const x of T) {
        const L = s.columns[x];
        E.push({ tsKey: x, value: L });
      }
      let N = [];
      u.with && (N = Object.entries(u.with).filter((x) => !!x[1]).map(([x, L]) => ({ tsKey: x, queryConfig: L, relation: s.relations[x] })));
      let O;
      if (u.extras) {
        O = typeof u.extras == "function" ? u.extras(S, { sql: A }) : u.extras;
        for (const [x, L] of Object.entries(O))
          E.push({
            tsKey: x,
            value: Gn(L, a)
          });
      }
      for (const { tsKey: x, value: L } of E)
        f.push({
          dbKey: $(L, z.Aliased) ? L.fieldAlias : s.columns[x].name,
          tsKey: x,
          field: $(L, he) ? xe(L, a) : L,
          relationTableTsKey: void 0,
          isJson: !1,
          selection: []
        });
      let _ = typeof u.orderBy == "function" ? u.orderBy(S, _c()) : u.orderBy ?? [];
      Array.isArray(_) || (_ = [_]), v = _.map((x) => $(x, he) ? xe(x, a) : Kt(x, a)), w = u.limit, y = u.offset;
      for (const {
        tsKey: x,
        queryConfig: L,
        relation: P
      } of N) {
        const q = Cc(t, r, P), R = It(P.referencedTable), F = r[R], j = `${a}_${x}`, M = Lr(
          ...q.fields.map(
            (Y, te) => Gr(
              xe(q.references[te], j),
              xe(Y, a)
            )
          )
        ), Q = this.buildRelationalQueryWithoutPK({
          fullSchema: e,
          schema: t,
          tableNamesMap: r,
          table: e[F],
          tableConfig: t[F],
          queryConfig: $(P, $e) ? L === !0 ? { limit: 1 } : { ...L, limit: 1 } : L,
          tableAlias: j,
          joinOn: M,
          nestedQueryRelation: P
        }), G = A`${A.identifier(j)}.${A.identifier("data")}`.as(x);
        h.push({
          on: A`true`,
          table: new Se(Q.sql, {}, j),
          alias: j,
          joinType: "left",
          lateral: !0
        }), f.push({
          dbKey: x,
          tsKey: x,
          field: G,
          relationTableTsKey: F,
          isJson: !0,
          selection: Q.selection
        });
      }
    }
    if (f.length === 0)
      throw new Zu({ message: `No fields selected for table "${s.tsName}" ("${a}")` });
    let b;
    if (l = Lr(m, l), d) {
      let S = A`json_build_array(${A.join(
        f.map(
          ({ field: N, tsKey: O, isJson: _ }) => _ ? A`${A.identifier(`${a}_${O}`)}.${A.identifier("data")}` : $(N, z.Aliased) ? N.sql : N
        ),
        A`, `
      )})`;
      $(d, or) && (S = A`coalesce(json_agg(${S}${v.length > 0 ? A` order by ${A.join(v, A`, `)}` : void 0}), '[]'::json)`);
      const E = [{
        dbKey: "data",
        tsKey: "data",
        field: S.as("data"),
        isJson: !0,
        relationTableTsKey: s.tsName,
        selection: f
      }];
      w !== void 0 || y !== void 0 || v.length > 0 ? (b = this.buildSelectQuery({
        table: wr(n, a),
        fields: {},
        fieldsFlat: [{
          path: [],
          field: A.raw("*")
        }],
        where: l,
        limit: w,
        offset: y,
        orderBy: v,
        setOperators: []
      }), l = void 0, w = void 0, y = void 0, v = []) : b = wr(n, a), b = this.buildSelectQuery({
        table: $(b, ye) ? b : new Se(b, {}, a),
        fields: {},
        fieldsFlat: E.map(({ field: N }) => ({
          path: [],
          field: $(N, he) ? xe(N, a) : N
        })),
        joins: h,
        where: l,
        limit: w,
        offset: y,
        orderBy: v,
        setOperators: []
      });
    } else
      b = this.buildSelectQuery({
        table: wr(n, a),
        fields: {},
        fieldsFlat: f.map(({ field: S }) => ({
          path: [],
          field: $(S, he) ? xe(S, a) : S
        })),
        joins: h,
        where: l,
        limit: w,
        offset: y,
        orderBy: v,
        setOperators: []
      });
    return {
      tableTsKey: s.tsName,
      sql: b,
      selection: f
    };
  }
}
class Lc {
  static [I] = "TypedQueryBuilder";
  /** @internal */
  getSelectedFields() {
    return this._.selectedFields;
  }
}
class Te {
  static [I] = "PgSelectBuilder";
  fields;
  session;
  dialect;
  withList = [];
  distinct;
  constructor(e) {
    this.fields = e.fields, this.session = e.session, this.dialect = e.dialect, e.withList && (this.withList = e.withList), this.distinct = e.distinct;
  }
  authToken;
  /** @internal */
  setToken(e) {
    return this.authToken = e, this;
  }
  /**
   * Specify the table, subquery, or other target that you're
   * building a select query against.
   *
   * {@link https://www.postgresql.org/docs/current/sql-select.html#SQL-FROM | Postgres from documentation}
   */
  from(e) {
    const t = !!this.fields, r = e;
    let n;
    return this.fields ? n = this.fields : $(r, Se) ? n = Object.fromEntries(
      Object.keys(r._.selectedFields).map((s) => [s, r[s]])
    ) : $(r, ls) ? n = r[ce].selectedFields : $(r, z) ? n = {} : n = Vo(r), new hs({
      table: r,
      fields: n,
      isPartialSelect: t,
      session: this.session,
      dialect: this.dialect,
      withList: this.withList,
      distinct: this.distinct
    }).setToken(this.authToken);
  }
}
class xc extends Lc {
  static [I] = "PgSelectQueryBuilder";
  _;
  config;
  joinsNotNullableMap;
  tableName;
  isPartialSelect;
  session;
  dialect;
  cacheConfig = void 0;
  usedTables = /* @__PURE__ */ new Set();
  constructor({ table: e, fields: t, isPartialSelect: r, session: n, dialect: s, withList: u, distinct: a }) {
    super(), this.config = {
      withList: u,
      table: e,
      fields: { ...t },
      distinct: a,
      setOperators: []
    }, this.isPartialSelect = r, this.session = n, this.dialect = s, this._ = {
      selectedFields: t,
      config: this.config
    }, this.tableName = Me(e), this.joinsNotNullableMap = typeof this.tableName == "string" ? { [this.tableName]: !0 } : {};
    for (const d of qe(e)) this.usedTables.add(d);
  }
  /** @internal */
  getUsedTables() {
    return [...this.usedTables];
  }
  createJoin(e, t) {
    return (r, n) => {
      const s = this.tableName, u = Me(r);
      for (const a of qe(r)) this.usedTables.add(a);
      if (typeof u == "string" && this.config.joins?.some((a) => a.alias === u))
        throw new Error(`Alias "${u}" is already used in this query`);
      if (!this.isPartialSelect && (Object.keys(this.joinsNotNullableMap).length === 1 && typeof s == "string" && (this.config.fields = {
        [s]: this.config.fields
      }), typeof u == "string" && !$(r, z))) {
        const a = $(r, Se) ? r._.selectedFields : $(r, je) ? r[ce].selectedFields : r[U.Symbol.Columns];
        this.config.fields[u] = a;
      }
      if (typeof n == "function" && (n = n(
        new Proxy(
          this.config.fields,
          new ge({ sqlAliasedBehavior: "sql", sqlBehavior: "sql" })
        )
      )), this.config.joins || (this.config.joins = []), this.config.joins.push({ on: n, table: r, joinType: e, alias: u, lateral: t }), typeof u == "string")
        switch (e) {
          case "left": {
            this.joinsNotNullableMap[u] = !1;
            break;
          }
          case "right": {
            this.joinsNotNullableMap = Object.fromEntries(
              Object.entries(this.joinsNotNullableMap).map(([a]) => [a, !1])
            ), this.joinsNotNullableMap[u] = !0;
            break;
          }
          case "cross":
          case "inner": {
            this.joinsNotNullableMap[u] = !0;
            break;
          }
          case "full": {
            this.joinsNotNullableMap = Object.fromEntries(
              Object.entries(this.joinsNotNullableMap).map(([a]) => [a, !1])
            ), this.joinsNotNullableMap[u] = !1;
            break;
          }
        }
      return this;
    };
  }
  /**
   * Executes a `left join` operation by adding another table to the current query.
   *
   * Calling this method associates each row of the table with the corresponding row from the joined table, if a match is found. If no matching row exists, it sets all columns of the joined table to null.
   *
   * See docs: {@link https://orm.drizzle.team/docs/joins#left-join}
   *
   * @param table the table to join.
   * @param on the `on` clause.
   *
   * @example
   *
   * ```ts
   * // Select all users and their pets
   * const usersWithPets: { user: User; pets: Pet | null; }[] = await db.select()
   *   .from(users)
   *   .leftJoin(pets, eq(users.id, pets.ownerId))
   *
   * // Select userId and petId
   * const usersIdsAndPetIds: { userId: number; petId: number | null; }[] = await db.select({
   *   userId: users.id,
   *   petId: pets.id,
   * })
   *   .from(users)
   *   .leftJoin(pets, eq(users.id, pets.ownerId))
   * ```
   */
  leftJoin = this.createJoin("left", !1);
  /**
   * Executes a `left join lateral` operation by adding subquery to the current query.
   *
   * A `lateral` join allows the right-hand expression to refer to columns from the left-hand side.
   *
   * Calling this method associates each row of the table with the corresponding row from the joined table, if a match is found. If no matching row exists, it sets all columns of the joined table to null.
   *
   * See docs: {@link https://orm.drizzle.team/docs/joins#left-join-lateral}
   *
   * @param table the subquery to join.
   * @param on the `on` clause.
   */
  leftJoinLateral = this.createJoin("left", !0);
  /**
   * Executes a `right join` operation by adding another table to the current query.
   *
   * Calling this method associates each row of the joined table with the corresponding row from the main table, if a match is found. If no matching row exists, it sets all columns of the main table to null.
   *
   * See docs: {@link https://orm.drizzle.team/docs/joins#right-join}
   *
   * @param table the table to join.
   * @param on the `on` clause.
   *
   * @example
   *
   * ```ts
   * // Select all users and their pets
   * const usersWithPets: { user: User | null; pets: Pet; }[] = await db.select()
   *   .from(users)
   *   .rightJoin(pets, eq(users.id, pets.ownerId))
   *
   * // Select userId and petId
   * const usersIdsAndPetIds: { userId: number | null; petId: number; }[] = await db.select({
   *   userId: users.id,
   *   petId: pets.id,
   * })
   *   .from(users)
   *   .rightJoin(pets, eq(users.id, pets.ownerId))
   * ```
   */
  rightJoin = this.createJoin("right", !1);
  /**
   * Executes an `inner join` operation, creating a new table by combining rows from two tables that have matching values.
   *
   * Calling this method retrieves rows that have corresponding entries in both joined tables. Rows without matching entries in either table are excluded, resulting in a table that includes only matching pairs.
   *
   * See docs: {@link https://orm.drizzle.team/docs/joins#inner-join}
   *
   * @param table the table to join.
   * @param on the `on` clause.
   *
   * @example
   *
   * ```ts
   * // Select all users and their pets
   * const usersWithPets: { user: User; pets: Pet; }[] = await db.select()
   *   .from(users)
   *   .innerJoin(pets, eq(users.id, pets.ownerId))
   *
   * // Select userId and petId
   * const usersIdsAndPetIds: { userId: number; petId: number; }[] = await db.select({
   *   userId: users.id,
   *   petId: pets.id,
   * })
   *   .from(users)
   *   .innerJoin(pets, eq(users.id, pets.ownerId))
   * ```
   */
  innerJoin = this.createJoin("inner", !1);
  /**
   * Executes an `inner join lateral` operation, creating a new table by combining rows from two queries that have matching values.
   *
   * A `lateral` join allows the right-hand expression to refer to columns from the left-hand side.
   *
   * Calling this method retrieves rows that have corresponding entries in both joined tables. Rows without matching entries in either table are excluded, resulting in a table that includes only matching pairs.
   *
   * See docs: {@link https://orm.drizzle.team/docs/joins#inner-join-lateral}
   *
   * @param table the subquery to join.
   * @param on the `on` clause.
   */
  innerJoinLateral = this.createJoin("inner", !0);
  /**
   * Executes a `full join` operation by combining rows from two tables into a new table.
   *
   * Calling this method retrieves all rows from both main and joined tables, merging rows with matching values and filling in `null` for non-matching columns.
   *
   * See docs: {@link https://orm.drizzle.team/docs/joins#full-join}
   *
   * @param table the table to join.
   * @param on the `on` clause.
   *
   * @example
   *
   * ```ts
   * // Select all users and their pets
   * const usersWithPets: { user: User | null; pets: Pet | null; }[] = await db.select()
   *   .from(users)
   *   .fullJoin(pets, eq(users.id, pets.ownerId))
   *
   * // Select userId and petId
   * const usersIdsAndPetIds: { userId: number | null; petId: number | null; }[] = await db.select({
   *   userId: users.id,
   *   petId: pets.id,
   * })
   *   .from(users)
   *   .fullJoin(pets, eq(users.id, pets.ownerId))
   * ```
   */
  fullJoin = this.createJoin("full", !1);
  /**
   * Executes a `cross join` operation by combining rows from two tables into a new table.
   *
   * Calling this method retrieves all rows from both main and joined tables, merging all rows from each table.
   *
   * See docs: {@link https://orm.drizzle.team/docs/joins#cross-join}
   *
   * @param table the table to join.
   *
   * @example
   *
   * ```ts
   * // Select all users, each user with every pet
   * const usersWithPets: { user: User; pets: Pet; }[] = await db.select()
   *   .from(users)
   *   .crossJoin(pets)
   *
   * // Select userId and petId
   * const usersIdsAndPetIds: { userId: number; petId: number; }[] = await db.select({
   *   userId: users.id,
   *   petId: pets.id,
   * })
   *   .from(users)
   *   .crossJoin(pets)
   * ```
   */
  crossJoin = this.createJoin("cross", !1);
  /**
   * Executes a `cross join lateral` operation by combining rows from two queries into a new table.
   *
   * A `lateral` join allows the right-hand expression to refer to columns from the left-hand side.
   *
   * Calling this method retrieves all rows from both main and joined queries, merging all rows from each query.
   *
   * See docs: {@link https://orm.drizzle.team/docs/joins#cross-join-lateral}
   *
   * @param table the query to join.
   */
  crossJoinLateral = this.createJoin("cross", !0);
  createSetOperator(e, t) {
    return (r) => {
      const n = typeof r == "function" ? r(Bc()) : r;
      if (!Vr(this.getSelectedFields(), n.getSelectedFields()))
        throw new Error(
          "Set operator error (union / intersect / except): selected fields are not the same or are in a different order"
        );
      return this.config.setOperators.push({ type: e, isAll: t, rightSelect: n }), this;
    };
  }
  /**
   * Adds `union` set operator to the query.
   *
   * Calling this method will combine the result sets of the `select` statements and remove any duplicate rows that appear across them.
   *
   * See docs: {@link https://orm.drizzle.team/docs/set-operations#union}
   *
   * @example
   *
   * ```ts
   * // Select all unique names from customers and users tables
   * await db.select({ name: users.name })
   *   .from(users)
   *   .union(
   *     db.select({ name: customers.name }).from(customers)
   *   );
   * // or
   * import { union } from 'drizzle-orm/pg-core'
   *
   * await union(
   *   db.select({ name: users.name }).from(users),
   *   db.select({ name: customers.name }).from(customers)
   * );
   * ```
   */
  union = this.createSetOperator("union", !1);
  /**
   * Adds `union all` set operator to the query.
   *
   * Calling this method will combine the result-set of the `select` statements and keep all duplicate rows that appear across them.
   *
   * See docs: {@link https://orm.drizzle.team/docs/set-operations#union-all}
   *
   * @example
   *
   * ```ts
   * // Select all transaction ids from both online and in-store sales
   * await db.select({ transaction: onlineSales.transactionId })
   *   .from(onlineSales)
   *   .unionAll(
   *     db.select({ transaction: inStoreSales.transactionId }).from(inStoreSales)
   *   );
   * // or
   * import { unionAll } from 'drizzle-orm/pg-core'
   *
   * await unionAll(
   *   db.select({ transaction: onlineSales.transactionId }).from(onlineSales),
   *   db.select({ transaction: inStoreSales.transactionId }).from(inStoreSales)
   * );
   * ```
   */
  unionAll = this.createSetOperator("union", !0);
  /**
   * Adds `intersect` set operator to the query.
   *
   * Calling this method will retain only the rows that are present in both result sets and eliminate duplicates.
   *
   * See docs: {@link https://orm.drizzle.team/docs/set-operations#intersect}
   *
   * @example
   *
   * ```ts
   * // Select course names that are offered in both departments A and B
   * await db.select({ courseName: depA.courseName })
   *   .from(depA)
   *   .intersect(
   *     db.select({ courseName: depB.courseName }).from(depB)
   *   );
   * // or
   * import { intersect } from 'drizzle-orm/pg-core'
   *
   * await intersect(
   *   db.select({ courseName: depA.courseName }).from(depA),
   *   db.select({ courseName: depB.courseName }).from(depB)
   * );
   * ```
   */
  intersect = this.createSetOperator("intersect", !1);
  /**
   * Adds `intersect all` set operator to the query.
   *
   * Calling this method will retain only the rows that are present in both result sets including all duplicates.
   *
   * See docs: {@link https://orm.drizzle.team/docs/set-operations#intersect-all}
   *
   * @example
   *
   * ```ts
   * // Select all products and quantities that are ordered by both regular and VIP customers
   * await db.select({
   *   productId: regularCustomerOrders.productId,
   *   quantityOrdered: regularCustomerOrders.quantityOrdered
   * })
   * .from(regularCustomerOrders)
   * .intersectAll(
   *   db.select({
   *     productId: vipCustomerOrders.productId,
   *     quantityOrdered: vipCustomerOrders.quantityOrdered
   *   })
   *   .from(vipCustomerOrders)
   * );
   * // or
   * import { intersectAll } from 'drizzle-orm/pg-core'
   *
   * await intersectAll(
   *   db.select({
   *     productId: regularCustomerOrders.productId,
   *     quantityOrdered: regularCustomerOrders.quantityOrdered
   *   })
   *   .from(regularCustomerOrders),
   *   db.select({
   *     productId: vipCustomerOrders.productId,
   *     quantityOrdered: vipCustomerOrders.quantityOrdered
   *   })
   *   .from(vipCustomerOrders)
   * );
   * ```
   */
  intersectAll = this.createSetOperator("intersect", !0);
  /**
   * Adds `except` set operator to the query.
   *
   * Calling this method will retrieve all unique rows from the left query, except for the rows that are present in the result set of the right query.
   *
   * See docs: {@link https://orm.drizzle.team/docs/set-operations#except}
   *
   * @example
   *
   * ```ts
   * // Select all courses offered in department A but not in department B
   * await db.select({ courseName: depA.courseName })
   *   .from(depA)
   *   .except(
   *     db.select({ courseName: depB.courseName }).from(depB)
   *   );
   * // or
   * import { except } from 'drizzle-orm/pg-core'
   *
   * await except(
   *   db.select({ courseName: depA.courseName }).from(depA),
   *   db.select({ courseName: depB.courseName }).from(depB)
   * );
   * ```
   */
  except = this.createSetOperator("except", !1);
  /**
   * Adds `except all` set operator to the query.
   *
   * Calling this method will retrieve all rows from the left query, except for the rows that are present in the result set of the right query.
   *
   * See docs: {@link https://orm.drizzle.team/docs/set-operations#except-all}
   *
   * @example
   *
   * ```ts
   * // Select all products that are ordered by regular customers but not by VIP customers
   * await db.select({
   *   productId: regularCustomerOrders.productId,
   *   quantityOrdered: regularCustomerOrders.quantityOrdered,
   * })
   * .from(regularCustomerOrders)
   * .exceptAll(
   *   db.select({
   *     productId: vipCustomerOrders.productId,
   *     quantityOrdered: vipCustomerOrders.quantityOrdered,
   *   })
   *   .from(vipCustomerOrders)
   * );
   * // or
   * import { exceptAll } from 'drizzle-orm/pg-core'
   *
   * await exceptAll(
   *   db.select({
   *     productId: regularCustomerOrders.productId,
   *     quantityOrdered: regularCustomerOrders.quantityOrdered
   *   })
   *   .from(regularCustomerOrders),
   *   db.select({
   *     productId: vipCustomerOrders.productId,
   *     quantityOrdered: vipCustomerOrders.quantityOrdered
   *   })
   *   .from(vipCustomerOrders)
   * );
   * ```
   */
  exceptAll = this.createSetOperator("except", !0);
  /** @internal */
  addSetOperators(e) {
    return this.config.setOperators.push(...e), this;
  }
  /**
   * Adds a `where` clause to the query.
   *
   * Calling this method will select only those rows that fulfill a specified condition.
   *
   * See docs: {@link https://orm.drizzle.team/docs/select#filtering}
   *
   * @param where the `where` clause.
   *
   * @example
   * You can use conditional operators and `sql function` to filter the rows to be selected.
   *
   * ```ts
   * // Select all cars with green color
   * await db.select().from(cars).where(eq(cars.color, 'green'));
   * // or
   * await db.select().from(cars).where(sql`${cars.color} = 'green'`)
   * ```
   *
   * You can logically combine conditional operators with `and()` and `or()` operators:
   *
   * ```ts
   * // Select all BMW cars with a green color
   * await db.select().from(cars).where(and(eq(cars.color, 'green'), eq(cars.brand, 'BMW')));
   *
   * // Select all cars with the green or blue color
   * await db.select().from(cars).where(or(eq(cars.color, 'green'), eq(cars.color, 'blue')));
   * ```
   */
  where(e) {
    return typeof e == "function" && (e = e(
      new Proxy(
        this.config.fields,
        new ge({ sqlAliasedBehavior: "sql", sqlBehavior: "sql" })
      )
    )), this.config.where = e, this;
  }
  /**
   * Adds a `having` clause to the query.
   *
   * Calling this method will select only those rows that fulfill a specified condition. It is typically used with aggregate functions to filter the aggregated data based on a specified condition.
   *
   * See docs: {@link https://orm.drizzle.team/docs/select#aggregations}
   *
   * @param having the `having` clause.
   *
   * @example
   *
   * ```ts
   * // Select all brands with more than one car
   * await db.select({
   * 	brand: cars.brand,
   * 	count: sql<number>`cast(count(${cars.id}) as int)`,
   * })
   *   .from(cars)
   *   .groupBy(cars.brand)
   *   .having(({ count }) => gt(count, 1));
   * ```
   */
  having(e) {
    return typeof e == "function" && (e = e(
      new Proxy(
        this.config.fields,
        new ge({ sqlAliasedBehavior: "sql", sqlBehavior: "sql" })
      )
    )), this.config.having = e, this;
  }
  groupBy(...e) {
    if (typeof e[0] == "function") {
      const t = e[0](
        new Proxy(
          this.config.fields,
          new ge({ sqlAliasedBehavior: "alias", sqlBehavior: "sql" })
        )
      );
      this.config.groupBy = Array.isArray(t) ? t : [t];
    } else
      this.config.groupBy = e;
    return this;
  }
  orderBy(...e) {
    if (typeof e[0] == "function") {
      const t = e[0](
        new Proxy(
          this.config.fields,
          new ge({ sqlAliasedBehavior: "alias", sqlBehavior: "sql" })
        )
      ), r = Array.isArray(t) ? t : [t];
      this.config.setOperators.length > 0 ? this.config.setOperators.at(-1).orderBy = r : this.config.orderBy = r;
    } else {
      const t = e;
      this.config.setOperators.length > 0 ? this.config.setOperators.at(-1).orderBy = t : this.config.orderBy = t;
    }
    return this;
  }
  /**
   * Adds a `limit` clause to the query.
   *
   * Calling this method will set the maximum number of rows that will be returned by this query.
   *
   * See docs: {@link https://orm.drizzle.team/docs/select#limit--offset}
   *
   * @param limit the `limit` clause.
   *
   * @example
   *
   * ```ts
   * // Get the first 10 people from this query.
   * await db.select().from(people).limit(10);
   * ```
   */
  limit(e) {
    return this.config.setOperators.length > 0 ? this.config.setOperators.at(-1).limit = e : this.config.limit = e, this;
  }
  /**
   * Adds an `offset` clause to the query.
   *
   * Calling this method will skip a number of rows when returning results from this query.
   *
   * See docs: {@link https://orm.drizzle.team/docs/select#limit--offset}
   *
   * @param offset the `offset` clause.
   *
   * @example
   *
   * ```ts
   * // Get the 10th-20th people from this query.
   * await db.select().from(people).offset(10).limit(10);
   * ```
   */
  offset(e) {
    return this.config.setOperators.length > 0 ? this.config.setOperators.at(-1).offset = e : this.config.offset = e, this;
  }
  /**
   * Adds a `for` clause to the query.
   *
   * Calling this method will specify a lock strength for this query that controls how strictly it acquires exclusive access to the rows being queried.
   *
   * See docs: {@link https://www.postgresql.org/docs/current/sql-select.html#SQL-FOR-UPDATE-SHARE}
   *
   * @param strength the lock strength.
   * @param config the lock configuration.
   */
  for(e, t = {}) {
    return this.config.lockingClause = { strength: e, config: t }, this;
  }
  /** @internal */
  getSQL() {
    return this.dialect.buildSelectQuery(this.config);
  }
  toSQL() {
    const { typings: e, ...t } = this.dialect.sqlToQuery(this.getSQL());
    return t;
  }
  as(e) {
    const t = [];
    if (t.push(...qe(this.config.table)), this.config.joins)
      for (const r of this.config.joins) t.push(...qe(r.table));
    return new Proxy(
      new Se(this.getSQL(), this.config.fields, e, !1, [...new Set(t)]),
      new ge({ alias: e, sqlAliasedBehavior: "alias", sqlBehavior: "error" })
    );
  }
  /** @internal */
  getSelectedFields() {
    return new Proxy(
      this.config.fields,
      new ge({ alias: this.tableName, sqlAliasedBehavior: "alias", sqlBehavior: "error" })
    );
  }
  $dynamic() {
    return this;
  }
  $withCache(e) {
    return this.cacheConfig = e === void 0 ? { config: {}, enable: !0, autoInvalidate: !0 } : e === !1 ? { enable: !1 } : { enable: !0, autoInvalidate: !0, ...e }, this;
  }
}
class hs extends xc {
  static [I] = "PgSelect";
  /** @internal */
  _prepare(e) {
    const { session: t, config: r, dialect: n, joinsNotNullableMap: s, authToken: u, cacheConfig: a, usedTables: d } = this;
    if (!t)
      throw new Error("Cannot execute a query on a query builder. Please use a database instance instead.");
    const { fields: m } = r;
    return _e.startActiveSpan("drizzle.prepareQuery", () => {
      const f = De(m), w = t.prepareQuery(n.sqlToQuery(this.getSQL()), f, e, !0, void 0, {
        type: "select",
        tables: [...d]
      }, a);
      return w.joinsNotNullableMap = s, w.setToken(u);
    });
  }
  /**
   * Create a prepared statement for this query. This allows
   * the database to remember this query for the given session
   * and call it by name, rather than specifying the full query.
   *
   * {@link https://www.postgresql.org/docs/current/sql-prepare.html | Postgres prepare documentation}
   */
  prepare(e) {
    return this._prepare(e);
  }
  authToken;
  /** @internal */
  setToken(e) {
    return this.authToken = e, this;
  }
  execute = (e) => _e.startActiveSpan("drizzle.operation", () => this._prepare().execute(e, this.authToken));
}
zo(hs, [Fe]);
function Ye(i, e) {
  return (t, r, ...n) => {
    const s = [r, ...n].map((u) => ({
      type: i,
      isAll: e,
      rightSelect: u
    }));
    for (const u of s)
      if (!Vr(t.getSelectedFields(), u.rightSelect.getSelectedFields()))
        throw new Error(
          "Set operator error (union / intersect / except): selected fields are not the same or are in a different order"
        );
    return t.addSetOperators(s);
  };
}
const Bc = () => ({
  union: Ic,
  unionAll: Nc,
  intersect: Rc,
  intersectAll: Oc,
  except: Mc,
  exceptAll: qc
}), Ic = Ye("union", !1), Nc = Ye("union", !0), Rc = Ye("intersect", !1), Oc = Ye("intersect", !0), Mc = Ye("except", !1), qc = Ye("except", !0);
class fs {
  static [I] = "PgQueryBuilder";
  dialect;
  dialectConfig;
  constructor(e) {
    this.dialect = $(e, Vt) ? e : void 0, this.dialectConfig = $(e, Vt) ? void 0 : e;
  }
  $with = (e, t) => {
    const r = this;
    return { as: (s) => (typeof s == "function" && (s = s(r)), new Proxy(
      new Un(
        s.getSQL(),
        t ?? ("getSelectedFields" in s ? s.getSelectedFields() ?? {} : {}),
        e,
        !0
      ),
      new ge({ alias: e, sqlAliasedBehavior: "alias", sqlBehavior: "error" })
    )) };
  };
  with(...e) {
    const t = this;
    function r(u) {
      return new Te({
        fields: u ?? void 0,
        session: void 0,
        dialect: t.getDialect(),
        withList: e
      });
    }
    function n(u) {
      return new Te({
        fields: u ?? void 0,
        session: void 0,
        dialect: t.getDialect(),
        distinct: !0
      });
    }
    function s(u, a) {
      return new Te({
        fields: a ?? void 0,
        session: void 0,
        dialect: t.getDialect(),
        distinct: { on: u }
      });
    }
    return { select: r, selectDistinct: n, selectDistinctOn: s };
  }
  select(e) {
    return new Te({
      fields: e ?? void 0,
      session: void 0,
      dialect: this.getDialect()
    });
  }
  selectDistinct(e) {
    return new Te({
      fields: e ?? void 0,
      session: void 0,
      dialect: this.getDialect(),
      distinct: !0
    });
  }
  selectDistinctOn(e, t) {
    return new Te({
      fields: t ?? void 0,
      session: void 0,
      dialect: this.getDialect(),
      distinct: { on: e }
    });
  }
  // Lazy load dialect to avoid circular dependency
  getDialect() {
    return this.dialect || (this.dialect = new Vt(this.dialectConfig)), this.dialect;
  }
}
function qe(i) {
  return $(i, ye) ? [i[Ke] ? `${i[Ke]}.${i[U.Symbol.BaseName]}` : i[U.Symbol.BaseName]] : $(i, Se) ? i._.usedTables ?? [] : $(i, z) ? i.usedTables ?? [] : [];
}
class pi extends Fe {
  constructor(e, t, r, n) {
    super(), this.session = t, this.dialect = r, this.config = { table: e, withList: n };
  }
  static [I] = "PgDelete";
  config;
  cacheConfig;
  /**
   * Adds a `where` clause to the query.
   *
   * Calling this method will delete only those rows that fulfill a specified condition.
   *
   * See docs: {@link https://orm.drizzle.team/docs/delete}
   *
   * @param where the `where` clause.
   *
   * @example
   * You can use conditional operators and `sql function` to filter the rows to be deleted.
   *
   * ```ts
   * // Delete all cars with green color
   * await db.delete(cars).where(eq(cars.color, 'green'));
   * // or
   * await db.delete(cars).where(sql`${cars.color} = 'green'`)
   * ```
   *
   * You can logically combine conditional operators with `and()` and `or()` operators:
   *
   * ```ts
   * // Delete all BMW cars with a green color
   * await db.delete(cars).where(and(eq(cars.color, 'green'), eq(cars.brand, 'BMW')));
   *
   * // Delete all cars with the green or blue color
   * await db.delete(cars).where(or(eq(cars.color, 'green'), eq(cars.color, 'blue')));
   * ```
   */
  where(e) {
    return this.config.where = e, this;
  }
  returning(e = this.config.table[U.Symbol.Columns]) {
    return this.config.returningFields = e, this.config.returning = De(e), this;
  }
  /** @internal */
  getSQL() {
    return this.dialect.buildDeleteQuery(this.config);
  }
  toSQL() {
    const { typings: e, ...t } = this.dialect.sqlToQuery(this.getSQL());
    return t;
  }
  /** @internal */
  _prepare(e) {
    return _e.startActiveSpan("drizzle.prepareQuery", () => this.session.prepareQuery(this.dialect.sqlToQuery(this.getSQL()), this.config.returning, e, !0, void 0, {
      type: "delete",
      tables: qe(this.config.table)
    }, this.cacheConfig));
  }
  prepare(e) {
    return this._prepare(e);
  }
  authToken;
  /** @internal */
  setToken(e) {
    return this.authToken = e, this;
  }
  execute = (e) => _e.startActiveSpan("drizzle.operation", () => this._prepare().execute(e, this.authToken));
  /** @internal */
  getSelectedFields() {
    return this.config.returningFields ? new Proxy(
      this.config.returningFields,
      new ge({
        alias: Be(this.config.table),
        sqlAliasedBehavior: "alias",
        sqlBehavior: "error"
      })
    ) : void 0;
  }
  $dynamic() {
    return this;
  }
}
class gi {
  constructor(e, t, r, n, s) {
    this.table = e, this.session = t, this.dialect = r, this.withList = n, this.overridingSystemValue_ = s;
  }
  static [I] = "PgInsertBuilder";
  authToken;
  /** @internal */
  setToken(e) {
    return this.authToken = e, this;
  }
  overridingSystemValue() {
    return this.overridingSystemValue_ = !0, this;
  }
  values(e) {
    if (e = Array.isArray(e) ? e : [e], e.length === 0)
      throw new Error("values() must be called with at least one value");
    const t = e.map((r) => {
      const n = {}, s = this.table[U.Symbol.Columns];
      for (const u of Object.keys(r)) {
        const a = r[u];
        n[u] = $(a, z) ? a : new Re(a, s[u]);
      }
      return n;
    });
    return new yi(
      this.table,
      t,
      this.session,
      this.dialect,
      this.withList,
      !1,
      this.overridingSystemValue_
    ).setToken(this.authToken);
  }
  select(e) {
    const t = typeof e == "function" ? e(new fs()) : e;
    if (!$(t, z) && !Vr(this.table[Er], t._.selectedFields))
      throw new Error(
        "Insert select error: selected fields are not the same or are in a different order compared to the table definition"
      );
    return new yi(this.table, t, this.session, this.dialect, this.withList, !0);
  }
}
class yi extends Fe {
  constructor(e, t, r, n, s, u, a) {
    super(), this.session = r, this.dialect = n, this.config = { table: e, values: t, withList: s, select: u, overridingSystemValue_: a };
  }
  static [I] = "PgInsert";
  config;
  cacheConfig;
  returning(e = this.config.table[U.Symbol.Columns]) {
    return this.config.returningFields = e, this.config.returning = De(e), this;
  }
  /**
   * Adds an `on conflict do nothing` clause to the query.
   *
   * Calling this method simply avoids inserting a row as its alternative action.
   *
   * See docs: {@link https://orm.drizzle.team/docs/insert#on-conflict-do-nothing}
   *
   * @param config The `target` and `where` clauses.
   *
   * @example
   * ```ts
   * // Insert one row and cancel the insert if there's a conflict
   * await db.insert(cars)
   *   .values({ id: 1, brand: 'BMW' })
   *   .onConflictDoNothing();
   *
   * // Explicitly specify conflict target
   * await db.insert(cars)
   *   .values({ id: 1, brand: 'BMW' })
   *   .onConflictDoNothing({ target: cars.id });
   * ```
   */
  onConflictDoNothing(e = {}) {
    if (e.target === void 0)
      this.config.onConflict = A`do nothing`;
    else {
      let t = "";
      t = Array.isArray(e.target) ? e.target.map((n) => this.dialect.escapeName(this.dialect.casing.getColumnCasing(n))).join(",") : this.dialect.escapeName(this.dialect.casing.getColumnCasing(e.target));
      const r = e.where ? A` where ${e.where}` : void 0;
      this.config.onConflict = A`(${A.raw(t)})${r} do nothing`;
    }
    return this;
  }
  /**
   * Adds an `on conflict do update` clause to the query.
   *
   * Calling this method will update the existing row that conflicts with the row proposed for insertion as its alternative action.
   *
   * See docs: {@link https://orm.drizzle.team/docs/insert#upserts-and-conflicts}
   *
   * @param config The `target`, `set` and `where` clauses.
   *
   * @example
   * ```ts
   * // Update the row if there's a conflict
   * await db.insert(cars)
   *   .values({ id: 1, brand: 'BMW' })
   *   .onConflictDoUpdate({
   *     target: cars.id,
   *     set: { brand: 'Porsche' }
   *   });
   *
   * // Upsert with 'where' clause
   * await db.insert(cars)
   *   .values({ id: 1, brand: 'BMW' })
   *   .onConflictDoUpdate({
   *     target: cars.id,
   *     set: { brand: 'newBMW' },
   *     targetWhere: sql`${cars.createdAt} > '2023-01-01'::date`,
   *   });
   * ```
   */
  onConflictDoUpdate(e) {
    if (e.where && (e.targetWhere || e.setWhere))
      throw new Error(
        'You cannot use both "where" and "targetWhere"/"setWhere" at the same time - "where" is deprecated, use "targetWhere" or "setWhere" instead.'
      );
    const t = e.where ? A` where ${e.where}` : void 0, r = e.targetWhere ? A` where ${e.targetWhere}` : void 0, n = e.setWhere ? A` where ${e.setWhere}` : void 0, s = this.dialect.buildUpdateSet(this.config.table, Kn(this.config.table, e.set));
    let u = "";
    return u = Array.isArray(e.target) ? e.target.map((a) => this.dialect.escapeName(this.dialect.casing.getColumnCasing(a))).join(",") : this.dialect.escapeName(this.dialect.casing.getColumnCasing(e.target)), this.config.onConflict = A`(${A.raw(u)})${r} do update set ${s}${t}${n}`, this;
  }
  /** @internal */
  getSQL() {
    return this.dialect.buildInsertQuery(this.config);
  }
  toSQL() {
    const { typings: e, ...t } = this.dialect.sqlToQuery(this.getSQL());
    return t;
  }
  /** @internal */
  _prepare(e) {
    return _e.startActiveSpan("drizzle.prepareQuery", () => this.session.prepareQuery(this.dialect.sqlToQuery(this.getSQL()), this.config.returning, e, !0, void 0, {
      type: "insert",
      tables: qe(this.config.table)
    }, this.cacheConfig));
  }
  prepare(e) {
    return this._prepare(e);
  }
  authToken;
  /** @internal */
  setToken(e) {
    return this.authToken = e, this;
  }
  execute = (e) => _e.startActiveSpan("drizzle.operation", () => this._prepare().execute(e, this.authToken));
  /** @internal */
  getSelectedFields() {
    return this.config.returningFields ? new Proxy(
      this.config.returningFields,
      new ge({
        alias: Be(this.config.table),
        sqlAliasedBehavior: "alias",
        sqlBehavior: "error"
      })
    ) : void 0;
  }
  $dynamic() {
    return this;
  }
}
class Dc extends Fe {
  constructor(e, t, r) {
    super(), this.session = t, this.dialect = r, this.config = { view: e };
  }
  static [I] = "PgRefreshMaterializedView";
  config;
  concurrently() {
    if (this.config.withNoData !== void 0)
      throw new Error("Cannot use concurrently and withNoData together");
    return this.config.concurrently = !0, this;
  }
  withNoData() {
    if (this.config.concurrently !== void 0)
      throw new Error("Cannot use concurrently and withNoData together");
    return this.config.withNoData = !0, this;
  }
  /** @internal */
  getSQL() {
    return this.dialect.buildRefreshMaterializedViewQuery(this.config);
  }
  toSQL() {
    const { typings: e, ...t } = this.dialect.sqlToQuery(this.getSQL());
    return t;
  }
  /** @internal */
  _prepare(e) {
    return _e.startActiveSpan("drizzle.prepareQuery", () => this.session.prepareQuery(this.dialect.sqlToQuery(this.getSQL()), void 0, e, !0));
  }
  prepare(e) {
    return this._prepare(e);
  }
  authToken;
  /** @internal */
  setToken(e) {
    return this.authToken = e, this;
  }
  execute = (e) => _e.startActiveSpan("drizzle.operation", () => this._prepare().execute(e, this.authToken));
}
class mi {
  constructor(e, t, r, n) {
    this.table = e, this.session = t, this.dialect = r, this.withList = n;
  }
  static [I] = "PgUpdateBuilder";
  authToken;
  setToken(e) {
    return this.authToken = e, this;
  }
  set(e) {
    return new $c(
      this.table,
      Kn(this.table, e),
      this.session,
      this.dialect,
      this.withList
    ).setToken(this.authToken);
  }
}
class $c extends Fe {
  constructor(e, t, r, n, s) {
    super(), this.session = r, this.dialect = n, this.config = { set: t, table: e, withList: s, joins: [] }, this.tableName = Me(e), this.joinsNotNullableMap = typeof this.tableName == "string" ? { [this.tableName]: !0 } : {};
  }
  static [I] = "PgUpdate";
  config;
  tableName;
  joinsNotNullableMap;
  cacheConfig;
  from(e) {
    const t = e, r = Me(t);
    return typeof r == "string" && (this.joinsNotNullableMap[r] = !0), this.config.from = t, this;
  }
  getTableLikeFields(e) {
    return $(e, ye) ? e[U.Symbol.Columns] : $(e, Se) ? e._.selectedFields : e[ce].selectedFields;
  }
  createJoin(e) {
    return (t, r) => {
      const n = Me(t);
      if (typeof n == "string" && this.config.joins.some((s) => s.alias === n))
        throw new Error(`Alias "${n}" is already used in this query`);
      if (typeof r == "function") {
        const s = this.config.from && !$(this.config.from, z) ? this.getTableLikeFields(this.config.from) : void 0;
        r = r(
          new Proxy(
            this.config.table[U.Symbol.Columns],
            new ge({ sqlAliasedBehavior: "sql", sqlBehavior: "sql" })
          ),
          s && new Proxy(
            s,
            new ge({ sqlAliasedBehavior: "sql", sqlBehavior: "sql" })
          )
        );
      }
      if (this.config.joins.push({ on: r, table: t, joinType: e, alias: n }), typeof n == "string")
        switch (e) {
          case "left": {
            this.joinsNotNullableMap[n] = !1;
            break;
          }
          case "right": {
            this.joinsNotNullableMap = Object.fromEntries(
              Object.entries(this.joinsNotNullableMap).map(([s]) => [s, !1])
            ), this.joinsNotNullableMap[n] = !0;
            break;
          }
          case "inner": {
            this.joinsNotNullableMap[n] = !0;
            break;
          }
          case "full": {
            this.joinsNotNullableMap = Object.fromEntries(
              Object.entries(this.joinsNotNullableMap).map(([s]) => [s, !1])
            ), this.joinsNotNullableMap[n] = !1;
            break;
          }
        }
      return this;
    };
  }
  leftJoin = this.createJoin("left");
  rightJoin = this.createJoin("right");
  innerJoin = this.createJoin("inner");
  fullJoin = this.createJoin("full");
  /**
   * Adds a 'where' clause to the query.
   *
   * Calling this method will update only those rows that fulfill a specified condition.
   *
   * See docs: {@link https://orm.drizzle.team/docs/update}
   *
   * @param where the 'where' clause.
   *
   * @example
   * You can use conditional operators and `sql function` to filter the rows to be updated.
   *
   * ```ts
   * // Update all cars with green color
   * await db.update(cars).set({ color: 'red' })
   *   .where(eq(cars.color, 'green'));
   * // or
   * await db.update(cars).set({ color: 'red' })
   *   .where(sql`${cars.color} = 'green'`)
   * ```
   *
   * You can logically combine conditional operators with `and()` and `or()` operators:
   *
   * ```ts
   * // Update all BMW cars with a green color
   * await db.update(cars).set({ color: 'red' })
   *   .where(and(eq(cars.color, 'green'), eq(cars.brand, 'BMW')));
   *
   * // Update all cars with the green or blue color
   * await db.update(cars).set({ color: 'red' })
   *   .where(or(eq(cars.color, 'green'), eq(cars.color, 'blue')));
   * ```
   */
  where(e) {
    return this.config.where = e, this;
  }
  returning(e) {
    if (!e && (e = Object.assign({}, this.config.table[U.Symbol.Columns]), this.config.from)) {
      const t = Me(this.config.from);
      if (typeof t == "string" && this.config.from && !$(this.config.from, z)) {
        const r = this.getTableLikeFields(this.config.from);
        e[t] = r;
      }
      for (const r of this.config.joins) {
        const n = Me(r.table);
        if (typeof n == "string" && !$(r.table, z)) {
          const s = this.getTableLikeFields(r.table);
          e[n] = s;
        }
      }
    }
    return this.config.returningFields = e, this.config.returning = De(e), this;
  }
  /** @internal */
  getSQL() {
    return this.dialect.buildUpdateQuery(this.config);
  }
  toSQL() {
    const { typings: e, ...t } = this.dialect.sqlToQuery(this.getSQL());
    return t;
  }
  /** @internal */
  _prepare(e) {
    const t = this.session.prepareQuery(this.dialect.sqlToQuery(this.getSQL()), this.config.returning, e, !0, void 0, {
      type: "insert",
      tables: qe(this.config.table)
    }, this.cacheConfig);
    return t.joinsNotNullableMap = this.joinsNotNullableMap, t;
  }
  prepare(e) {
    return this._prepare(e);
  }
  authToken;
  /** @internal */
  setToken(e) {
    return this.authToken = e, this;
  }
  execute = (e) => this._prepare().execute(e, this.authToken);
  /** @internal */
  getSelectedFields() {
    return this.config.returningFields ? new Proxy(
      this.config.returningFields,
      new ge({
        alias: Be(this.config.table),
        sqlAliasedBehavior: "alias",
        sqlBehavior: "error"
      })
    ) : void 0;
  }
  $dynamic() {
    return this;
  }
}
class Jt extends z {
  constructor(e) {
    super(Jt.buildEmbeddedCount(e.source, e.filters).queryChunks), this.params = e, this.mapWith(Number), this.session = e.session, this.sql = Jt.buildCount(
      e.source,
      e.filters
    );
  }
  sql;
  token;
  static [I] = "PgCountBuilder";
  [Symbol.toStringTag] = "PgCountBuilder";
  session;
  static buildEmbeddedCount(e, t) {
    return A`(select count(*) from ${e}${A.raw(" where ").if(t)}${t})`;
  }
  static buildCount(e, t) {
    return A`select count(*) as count from ${e}${A.raw(" where ").if(t)}${t};`;
  }
  /** @intrnal */
  setToken(e) {
    return this.token = e, this;
  }
  then(e, t) {
    return Promise.resolve(this.session.count(this.sql, this.token)).then(
      e,
      t
    );
  }
  catch(e) {
    return this.then(void 0, e);
  }
  finally(e) {
    return this.then(
      (t) => (e?.(), t),
      (t) => {
        throw e?.(), t;
      }
    );
  }
}
class kc {
  constructor(e, t, r, n, s, u, a) {
    this.fullSchema = e, this.schema = t, this.tableNamesMap = r, this.table = n, this.tableConfig = s, this.dialect = u, this.session = a;
  }
  static [I] = "PgRelationalQueryBuilder";
  findMany(e) {
    return new bi(
      this.fullSchema,
      this.schema,
      this.tableNamesMap,
      this.table,
      this.tableConfig,
      this.dialect,
      this.session,
      e || {},
      "many"
    );
  }
  findFirst(e) {
    return new bi(
      this.fullSchema,
      this.schema,
      this.tableNamesMap,
      this.table,
      this.tableConfig,
      this.dialect,
      this.session,
      e ? { ...e, limit: 1 } : { limit: 1 },
      "first"
    );
  }
}
class bi extends Fe {
  constructor(e, t, r, n, s, u, a, d, m) {
    super(), this.fullSchema = e, this.schema = t, this.tableNamesMap = r, this.table = n, this.tableConfig = s, this.dialect = u, this.session = a, this.config = d, this.mode = m;
  }
  static [I] = "PgRelationalQuery";
  /** @internal */
  _prepare(e) {
    return _e.startActiveSpan("drizzle.prepareQuery", () => {
      const { query: t, builtQuery: r } = this._toSQL();
      return this.session.prepareQuery(
        r,
        void 0,
        e,
        !0,
        (n, s) => {
          const u = n.map(
            (a) => xr(this.schema, this.tableConfig, a, t.selection, s)
          );
          return this.mode === "first" ? u[0] : u;
        }
      );
    });
  }
  prepare(e) {
    return this._prepare(e);
  }
  _getQuery() {
    return this.dialect.buildRelationalQueryWithoutPK({
      fullSchema: this.fullSchema,
      schema: this.schema,
      tableNamesMap: this.tableNamesMap,
      table: this.table,
      tableConfig: this.tableConfig,
      queryConfig: this.config,
      tableAlias: this.tableConfig.tsName
    });
  }
  /** @internal */
  getSQL() {
    return this._getQuery().sql;
  }
  _toSQL() {
    const e = this._getQuery(), t = this.dialect.sqlToQuery(e.sql);
    return { query: e, builtQuery: t };
  }
  toSQL() {
    return this._toSQL().builtQuery;
  }
  authToken;
  /** @internal */
  setToken(e) {
    return this.authToken = e, this;
  }
  execute() {
    return _e.startActiveSpan("drizzle.operation", () => this._prepare().execute(void 0, this.authToken));
  }
}
class Qc extends Fe {
  constructor(e, t, r, n) {
    super(), this.execute = e, this.sql = t, this.query = r, this.mapBatchResult = n;
  }
  static [I] = "PgRaw";
  /** @internal */
  getSQL() {
    return this.sql;
  }
  getQuery() {
    return this.query;
  }
  mapResult(e, t) {
    return t ? this.mapBatchResult(e) : e;
  }
  _prepare() {
    return this;
  }
  /** @internal */
  isResponseInArrayMode() {
    return !1;
  }
}
class Fc {
  constructor(e, t, r) {
    if (this.dialect = e, this.session = t, this._ = r ? {
      schema: r.schema,
      fullSchema: r.fullSchema,
      tableNamesMap: r.tableNamesMap,
      session: t
    } : {
      schema: void 0,
      fullSchema: {},
      tableNamesMap: {},
      session: t
    }, this.query = {}, this._.schema)
      for (const [n, s] of Object.entries(this._.schema))
        this.query[n] = new kc(
          r.fullSchema,
          this._.schema,
          this._.tableNamesMap,
          r.fullSchema[n],
          s,
          e,
          t
        );
    this.$cache = { invalidate: async (n) => {
    } };
  }
  static [I] = "PgDatabase";
  query;
  /**
   * Creates a subquery that defines a temporary named result set as a CTE.
   *
   * It is useful for breaking down complex queries into simpler parts and for reusing the result set in subsequent parts of the query.
   *
   * See docs: {@link https://orm.drizzle.team/docs/select#with-clause}
   *
   * @param alias The alias for the subquery.
   *
   * Failure to provide an alias will result in a DrizzleTypeError, preventing the subquery from being referenced in other queries.
   *
   * @example
   *
   * ```ts
   * // Create a subquery with alias 'sq' and use it in the select query
   * const sq = db.$with('sq').as(db.select().from(users).where(eq(users.id, 42)));
   *
   * const result = await db.with(sq).select().from(sq);
   * ```
   *
   * To select arbitrary SQL values as fields in a CTE and reference them in other CTEs or in the main query, you need to add aliases to them:
   *
   * ```ts
   * // Select an arbitrary SQL value as a field in a CTE and reference it in the main query
   * const sq = db.$with('sq').as(db.select({
   *   name: sql<string>`upper(${users.name})`.as('name'),
   * })
   * .from(users));
   *
   * const result = await db.with(sq).select({ name: sq.name }).from(sq);
   * ```
   */
  $with = (e, t) => {
    const r = this;
    return { as: (s) => (typeof s == "function" && (s = s(new fs(r.dialect))), new Proxy(
      new Un(
        s.getSQL(),
        t ?? ("getSelectedFields" in s ? s.getSelectedFields() ?? {} : {}),
        e,
        !0
      ),
      new ge({ alias: e, sqlAliasedBehavior: "alias", sqlBehavior: "error" })
    )) };
  };
  $count(e, t) {
    return new Jt({ source: e, filters: t, session: this.session });
  }
  $cache;
  /**
   * Incorporates a previously defined CTE (using `$with`) into the main query.
   *
   * This method allows the main query to reference a temporary named result set.
   *
   * See docs: {@link https://orm.drizzle.team/docs/select#with-clause}
   *
   * @param queries The CTEs to incorporate into the main query.
   *
   * @example
   *
   * ```ts
   * // Define a subquery 'sq' as a CTE using $with
   * const sq = db.$with('sq').as(db.select().from(users).where(eq(users.id, 42)));
   *
   * // Incorporate the CTE 'sq' into the main query and select from it
   * const result = await db.with(sq).select().from(sq);
   * ```
   */
  with(...e) {
    const t = this;
    function r(m) {
      return new Te({
        fields: m ?? void 0,
        session: t.session,
        dialect: t.dialect,
        withList: e
      });
    }
    function n(m) {
      return new Te({
        fields: m ?? void 0,
        session: t.session,
        dialect: t.dialect,
        withList: e,
        distinct: !0
      });
    }
    function s(m, f) {
      return new Te({
        fields: f ?? void 0,
        session: t.session,
        dialect: t.dialect,
        withList: e,
        distinct: { on: m }
      });
    }
    function u(m) {
      return new mi(m, t.session, t.dialect, e);
    }
    function a(m) {
      return new gi(m, t.session, t.dialect, e);
    }
    function d(m) {
      return new pi(m, t.session, t.dialect, e);
    }
    return { select: r, selectDistinct: n, selectDistinctOn: s, update: u, insert: a, delete: d };
  }
  select(e) {
    return new Te({
      fields: e ?? void 0,
      session: this.session,
      dialect: this.dialect
    });
  }
  selectDistinct(e) {
    return new Te({
      fields: e ?? void 0,
      session: this.session,
      dialect: this.dialect,
      distinct: !0
    });
  }
  selectDistinctOn(e, t) {
    return new Te({
      fields: t ?? void 0,
      session: this.session,
      dialect: this.dialect,
      distinct: { on: e }
    });
  }
  /**
   * Creates an update query.
   *
   * Calling this method without `.where()` clause will update all rows in a table. The `.where()` clause specifies which rows should be updated.
   *
   * Use `.set()` method to specify which values to update.
   *
   * See docs: {@link https://orm.drizzle.team/docs/update}
   *
   * @param table The table to update.
   *
   * @example
   *
   * ```ts
   * // Update all rows in the 'cars' table
   * await db.update(cars).set({ color: 'red' });
   *
   * // Update rows with filters and conditions
   * await db.update(cars).set({ color: 'red' }).where(eq(cars.brand, 'BMW'));
   *
   * // Update with returning clause
   * const updatedCar: Car[] = await db.update(cars)
   *   .set({ color: 'red' })
   *   .where(eq(cars.id, 1))
   *   .returning();
   * ```
   */
  update(e) {
    return new mi(e, this.session, this.dialect);
  }
  /**
   * Creates an insert query.
   *
   * Calling this method will create new rows in a table. Use `.values()` method to specify which values to insert.
   *
   * See docs: {@link https://orm.drizzle.team/docs/insert}
   *
   * @param table The table to insert into.
   *
   * @example
   *
   * ```ts
   * // Insert one row
   * await db.insert(cars).values({ brand: 'BMW' });
   *
   * // Insert multiple rows
   * await db.insert(cars).values([{ brand: 'BMW' }, { brand: 'Porsche' }]);
   *
   * // Insert with returning clause
   * const insertedCar: Car[] = await db.insert(cars)
   *   .values({ brand: 'BMW' })
   *   .returning();
   * ```
   */
  insert(e) {
    return new gi(e, this.session, this.dialect);
  }
  /**
   * Creates a delete query.
   *
   * Calling this method without `.where()` clause will delete all rows in a table. The `.where()` clause specifies which rows should be deleted.
   *
   * See docs: {@link https://orm.drizzle.team/docs/delete}
   *
   * @param table The table to delete from.
   *
   * @example
   *
   * ```ts
   * // Delete all rows in the 'cars' table
   * await db.delete(cars);
   *
   * // Delete rows with filters and conditions
   * await db.delete(cars).where(eq(cars.color, 'green'));
   *
   * // Delete with returning clause
   * const deletedCar: Car[] = await db.delete(cars)
   *   .where(eq(cars.id, 1))
   *   .returning();
   * ```
   */
  delete(e) {
    return new pi(e, this.session, this.dialect);
  }
  refreshMaterializedView(e) {
    return new Dc(e, this.session, this.dialect);
  }
  authToken;
  execute(e) {
    const t = typeof e == "string" ? A.raw(e) : e.getSQL(), r = this.dialect.sqlToQuery(t), n = this.session.prepareQuery(
      r,
      void 0,
      void 0,
      !1
    );
    return new Qc(
      () => n.execute(void 0, this.authToken),
      t,
      r,
      (s) => n.mapResult(s, !0)
    );
  }
  transaction(e, t) {
    return this.session.transaction(e, t);
  }
}
class jc {
  static [I] = "Cache";
}
class ds extends jc {
  strategy() {
    return "all";
  }
  static [I] = "NoopCache";
  async get(e) {
  }
  async put(e, t, r, n) {
  }
  async onMutate(e) {
  }
}
async function wi(i, e) {
  const t = `${i}-${JSON.stringify(e)}`, n = new TextEncoder().encode(t), s = await crypto.subtle.digest("SHA-256", n);
  return [...new Uint8Array(s)].map((d) => d.toString(16).padStart(2, "0")).join("");
}
class Ie extends Error {
  constructor(e, t, r) {
    super(`Failed query: ${e}
params: ${t}`), this.query = e, this.params = t, this.cause = r, Error.captureStackTrace(this, Ie), r && (this.cause = r);
  }
}
class Uc {
  constructor(e, t, r, n) {
    this.query = e, this.cache = t, this.queryMetadata = r, this.cacheConfig = n, t && t.strategy() === "all" && n === void 0 && (this.cacheConfig = { enable: !0, autoInvalidate: !0 }), this.cacheConfig?.enable || (this.cacheConfig = void 0);
  }
  authToken;
  getQuery() {
    return this.query;
  }
  mapResult(e, t) {
    return e;
  }
  /** @internal */
  setToken(e) {
    return this.authToken = e, this;
  }
  static [I] = "PgPreparedQuery";
  /** @internal */
  joinsNotNullableMap;
  /** @internal */
  async queryWithCache(e, t, r) {
    if (this.cache === void 0 || $(this.cache, ds) || this.queryMetadata === void 0)
      try {
        return await r();
      } catch (n) {
        throw new Ie(e, t, n);
      }
    if (this.cacheConfig && !this.cacheConfig.enable)
      try {
        return await r();
      } catch (n) {
        throw new Ie(e, t, n);
      }
    if ((this.queryMetadata.type === "insert" || this.queryMetadata.type === "update" || this.queryMetadata.type === "delete") && this.queryMetadata.tables.length > 0)
      try {
        const [n] = await Promise.all([
          r(),
          this.cache.onMutate({ tables: this.queryMetadata.tables })
        ]);
        return n;
      } catch (n) {
        throw new Ie(e, t, n);
      }
    if (!this.cacheConfig)
      try {
        return await r();
      } catch (n) {
        throw new Ie(e, t, n);
      }
    if (this.queryMetadata.type === "select") {
      const n = await this.cache.get(
        this.cacheConfig.tag ?? await wi(e, t),
        this.queryMetadata.tables,
        this.cacheConfig.tag !== void 0,
        this.cacheConfig.autoInvalidate
      );
      if (n === void 0) {
        let s;
        try {
          s = await r();
        } catch (u) {
          throw new Ie(e, t, u);
        }
        return await this.cache.put(
          this.cacheConfig.tag ?? await wi(e, t),
          s,
          // make sure we send tables that were used in a query only if user wants to invalidate it on each write
          this.cacheConfig.autoInvalidate ? this.queryMetadata.tables : [],
          this.cacheConfig.tag !== void 0,
          this.cacheConfig.config
        ), s;
      }
      return n;
    }
    try {
      return await r();
    } catch (n) {
      throw new Ie(e, t, n);
    }
  }
}
class zc {
  constructor(e) {
    this.dialect = e;
  }
  static [I] = "PgSession";
  /** @internal */
  execute(e, t) {
    return _e.startActiveSpan("drizzle.operation", () => _e.startActiveSpan("drizzle.prepareQuery", () => this.prepareQuery(
      this.dialect.sqlToQuery(e),
      void 0,
      void 0,
      !1
    )).setToken(t).execute(void 0, t));
  }
  all(e) {
    return this.prepareQuery(
      this.dialect.sqlToQuery(e),
      void 0,
      void 0,
      !1
    ).all();
  }
  /** @internal */
  async count(e, t) {
    const r = await this.execute(e, t);
    return Number(
      r[0].count
    );
  }
}
const jt = {
  arrayMode: !1,
  fullResults: !0
}, Br = {
  arrayMode: !0,
  fullResults: !0
};
class Vc extends Uc {
  constructor(e, t, r, n, s, u, a, d, m) {
    super(t, n, s, u), this.client = e, this.logger = r, this.fields = a, this._isResponseInArrayMode = d, this.customResultMapper = m, this.clientQuery = e.query ?? e;
  }
  static [I] = "NeonHttpPreparedQuery";
  clientQuery;
  /** @internal */
  async execute(e = {}, t = this.authToken) {
    const r = br(this.query.params, e);
    this.logger.logQuery(this.query.sql, r);
    const { fields: n, clientQuery: s, query: u, customResultMapper: a } = this;
    if (!n && !a)
      return this.queryWithCache(u.sql, r, async () => s(
        u.sql,
        r,
        t === void 0 ? jt : {
          ...jt,
          authToken: t
        }
      ));
    const d = await this.queryWithCache(u.sql, r, async () => await s(
      u.sql,
      r,
      t === void 0 ? Br : {
        ...Br,
        authToken: t
      }
    ));
    return this.mapResult(d);
  }
  mapResult(e) {
    if (!this.fields && !this.customResultMapper)
      return e;
    const t = e.rows;
    return this.customResultMapper ? this.customResultMapper(t) : t.map((r) => Uo(this.fields, r, this.joinsNotNullableMap));
  }
  all(e = {}) {
    const t = br(this.query.params, e);
    return this.logger.logQuery(this.query.sql, t), this.clientQuery(
      this.query.sql,
      t,
      this.authToken === void 0 ? jt : {
        ...jt,
        authToken: this.authToken
      }
    ).then((r) => r.rows);
  }
  /** @internal */
  values(e = {}, t) {
    const r = br(this.query.params, e);
    return this.logger.logQuery(this.query.sql, r), this.clientQuery(this.query.sql, r, { arrayMode: !0, fullResults: !0, authToken: t }).then((n) => n.rows);
  }
  /** @internal */
  isResponseInArrayMode() {
    return this._isResponseInArrayMode;
  }
}
class Wc extends zc {
  constructor(e, t, r, n = {}) {
    super(t), this.client = e, this.schema = r, this.options = n, this.clientQuery = e.query ?? e, this.logger = n.logger ?? new xo(), this.cache = n.cache ?? new ds();
  }
  static [I] = "NeonHttpSession";
  clientQuery;
  logger;
  cache;
  prepareQuery(e, t, r, n, s, u, a) {
    return new Vc(
      this.client,
      e,
      this.logger,
      this.cache,
      u,
      a,
      t,
      n,
      s
    );
  }
  async batch(e) {
    const t = [], r = [];
    for (const s of e) {
      const u = s._prepare(), a = u.getQuery();
      t.push(u), r.push(
        this.clientQuery(a.sql, a.params, {
          fullResults: !0,
          arrayMode: u.isResponseInArrayMode()
        })
      );
    }
    return (await this.client.transaction(r, Br)).map((s, u) => t[u].mapResult(s, !0));
  }
  // change return type to QueryRows<true>
  async query(e, t) {
    return this.logger.logQuery(e, t), await this.clientQuery(e, t, { arrayMode: !0, fullResults: !0 });
  }
  // change return type to QueryRows<false>
  async queryObjects(e, t) {
    return this.clientQuery(e, t, { arrayMode: !1, fullResults: !0 });
  }
  /** @internal */
  async count(e, t) {
    const r = await this.execute(e, t);
    return Number(
      r.rows[0].count
    );
  }
  async transaction(e, t = {}) {
    throw new Error("No transactions support in neon-http driver");
  }
}
class Gc {
  constructor(e, t, r = {}) {
    this.client = e, this.dialect = t, this.options = r, this.initMappers();
  }
  static [I] = "NeonHttpDriver";
  createSession(e) {
    return new Wc(this.client, this.dialect, e, {
      logger: this.options.logger,
      cache: this.options.cache
    });
  }
  initMappers() {
    ve.setTypeParser(ve.builtins.TIMESTAMPTZ, (e) => e), ve.setTypeParser(ve.builtins.TIMESTAMP, (e) => e), ve.setTypeParser(ve.builtins.DATE, (e) => e), ve.setTypeParser(ve.builtins.INTERVAL, (e) => e), ve.setTypeParser(1231, (e) => e), ve.setTypeParser(1115, (e) => e), ve.setTypeParser(1185, (e) => e), ve.setTypeParser(1187, (e) => e), ve.setTypeParser(1182, (e) => e);
  }
}
function Yt(i, e, t, r) {
  return new Proxy(i, {
    get(n, s) {
      const u = n[s];
      return typeof u != "function" && (typeof u != "object" || u === null) ? u : r ? Yt(u, e, t) : s === "query" ? Yt(u, e, t, !0) : new Proxy(u, {
        apply(a, d, m) {
          const f = a.call(d, ...m);
          return typeof f == "object" && f !== null && "setToken" in f && typeof f.setToken == "function" && f.setToken(e), t(a, s, f);
        }
      });
    }
  });
}
class Kc extends Fc {
  static [I] = "NeonHttpDatabase";
  $withAuth(e) {
    return this.authToken = e, Yt(this, e, (t, r, n) => r === "with" ? Yt(n, e, (s, u, a) => a) : n);
  }
  async batch(e) {
    return this.session.batch(e);
  }
}
function Ve(i, e = {}) {
  const t = new Vt({ casing: e.casing });
  let r;
  e.logger === !0 ? r = new Lo() : e.logger !== !1 && (r = e.logger);
  let n;
  if (e.schema) {
    const d = Pc(
      e.schema,
      Ac
    );
    n = {
      fullSchema: e.schema,
      schema: d.tables,
      tableNamesMap: d.tableNamesMap
    };
  }
  const u = new Gc(i, t, { logger: r, cache: e.cache }).createSession(n), a = new Kc(
    t,
    u,
    n
  );
  return a.$client = i, a.$cache = e.cache, a.$cache && (a.$cache.invalidate = e.cache?.onMutate), a;
}
function Ir(...i) {
  if (typeof i[0] == "string") {
    const e = Ge(i[0]);
    return Ve(e, i[1]);
  }
  if (Wo(i[0])) {
    const { connection: e, client: t, ...r } = i[0];
    if (t) return Ve(t, r);
    if (typeof e == "object") {
      const { connectionString: s, ...u } = e, a = Ge(s, u);
      return Ve(a, r);
    }
    const n = Ge(e);
    return Ve(n, r);
  }
  return Ve(i[0], i[1]);
}
((i) => {
  function e(t) {
    return Ve({}, t);
  }
  i.mock = e;
})(Ir || (Ir = {}));
var Sr = {}, it = {}, nt = {}, vi;
function Hc() {
  return vi || (vi = 1, Object.defineProperty(nt, "__esModule", { value: !0 }), nt.BASE_LAYOUT = void 0, nt.BASE_LAYOUT = [
    [0, 1, 2, 3, 4, 5, 6, 7, 8],
    [9, 10, 11, 12, 13, 14, 15, 16, 17],
    [18, 19, 20, 21, 22, 23, 24, 25, 26],
    [27, 28, 29, 30, 31, 32, 33, 34, 35],
    [36, 37, 38, 39, 40, 41, 42, 43, 44],
    [45, 46, 47, 48, 49, 50, 51, 52, 53],
    [54, 55, 56, 57, 58, 59, 60, 61, 62],
    [63, 64, 65, 66, 67, 68, 69, 70, 71],
    [72, 73, 74, 75, 76, 77, 78, 79, 80]
  ]), nt;
}
var st = {}, Si;
function ps() {
  if (Si) return st;
  Si = 1, Object.defineProperty(st, "__esModule", { value: !0 }), st.DIFFICULTY_LEVELS = void 0;
  const i = {
    easy: void 0,
    medium: void 0,
    hard: void 0,
    expert: void 0
  };
  return st.DIFFICULTY_LEVELS = Object.keys(i), st;
}
var ot = {}, at = {}, ut = {}, _i;
function gs() {
  if (_i) return ut;
  _i = 1, Object.defineProperty(ut, "__esModule", { value: !0 }), ut.getRandomItem = void 0;
  const i = (e) => e[Math.floor(Math.random() * e.length)];
  return ut.getRandomItem = i, ut;
}
var ct = {}, Pi;
function Jc() {
  if (Pi) return ct;
  Pi = 1, Object.defineProperty(ct, "__esModule", { value: !0 }), ct.rotateLayout0 = void 0;
  const i = (e) => e;
  return ct.rotateLayout0 = i, ct;
}
var lt = {}, Ti;
function Yc() {
  if (Ti) return lt;
  Ti = 1, Object.defineProperty(lt, "__esModule", { value: !0 }), lt.rotateLayout180 = void 0;
  const i = (e) => e.map((t) => [...t].reverse()).reverse();
  return lt.rotateLayout180 = i, lt;
}
var ht = {}, Ei;
function Kr() {
  if (Ei) return ht;
  Ei = 1, Object.defineProperty(ht, "__esModule", { value: !0 }), ht.rotateLayout270 = void 0;
  const i = (e) => e[0].map((t, r) => e.map((n) => [...n].reverse()[r]));
  return ht.rotateLayout270 = i, ht;
}
var ft = {}, Ci;
function Hr() {
  if (Ci) return ft;
  Ci = 1, Object.defineProperty(ft, "__esModule", { value: !0 }), ft.rotateLayout90 = void 0;
  const i = (e) => e[0].map((t, r) => e.map((n) => n[r]).reverse());
  return ft.rotateLayout90 = i, ft;
}
var Ai;
function Zc() {
  if (Ai) return at;
  Ai = 1, Object.defineProperty(at, "__esModule", { value: !0 }), at.rotateLayout = void 0;
  const i = gs(), e = Jc(), t = Yc(), r = Kr(), n = Hr(), s = (u) => (0, i.getRandomItem)([e.rotateLayout0, n.rotateLayout90, t.rotateLayout180, r.rotateLayout270])(u);
  return at.rotateLayout = s, at;
}
var dt = {}, pt = {}, gt = {}, Li;
function ys() {
  if (Li) return gt;
  Li = 1, Object.defineProperty(gt, "__esModule", { value: !0 }), gt.getLayoutBands = void 0;
  const i = (e) => [
    [e[0], e[1], e[2]],
    [e[3], e[4], e[5]],
    [e[6], e[7], e[8]]
  ];
  return gt.getLayoutBands = i, gt;
}
var yt = {}, xi;
function Jr() {
  if (xi) return yt;
  xi = 1, Object.defineProperty(yt, "__esModule", { value: !0 }), yt.sortRandom = void 0;
  const i = () => Math.random() < 0.5 ? 1 : -1;
  return yt.sortRandom = i, yt;
}
var Bi;
function ms() {
  if (Bi) return pt;
  Bi = 1, Object.defineProperty(pt, "__esModule", { value: !0 }), pt.shuffleLayoutBands = void 0;
  const i = ys(), e = Jr(), t = (r) => (0, i.getLayoutBands)(r).sort(e.sortRandom).flat();
  return pt.shuffleLayoutBands = t, pt;
}
var mt = {}, bt = {}, Ii;
function bs() {
  if (Ii) return bt;
  Ii = 1, Object.defineProperty(bt, "__esModule", { value: !0 }), bt.shuffleLayoutRows = void 0;
  const i = ys(), e = Jr(), t = (r) => (0, i.getLayoutBands)(r).map((n) => n.sort(e.sortRandom)).flat();
  return bt.shuffleLayoutRows = t, bt;
}
var Ni;
function Xc() {
  if (Ni) return mt;
  Ni = 1, Object.defineProperty(mt, "__esModule", { value: !0 }), mt.shuffleLayoutColumns = void 0;
  const i = Kr(), e = Hr(), t = bs(), r = (n) => (0, i.rotateLayout270)((0, t.shuffleLayoutRows)((0, e.rotateLayout90)(n)));
  return mt.shuffleLayoutColumns = r, mt;
}
var wt = {}, Ri;
function el() {
  if (Ri) return wt;
  Ri = 1, Object.defineProperty(wt, "__esModule", { value: !0 }), wt.shuffleLayoutStacks = void 0;
  const i = Kr(), e = Hr(), t = ms(), r = (n) => (0, i.rotateLayout270)((0, t.shuffleLayoutBands)((0, e.rotateLayout90)(n)));
  return wt.shuffleLayoutStacks = r, wt;
}
var Oi;
function tl() {
  if (Oi) return dt;
  Oi = 1, Object.defineProperty(dt, "__esModule", { value: !0 }), dt.shuffleLayout = void 0;
  const i = ms(), e = Xc(), t = bs(), r = el(), n = (s) => (0, e.shuffleLayoutColumns)((0, t.shuffleLayoutRows)((0, r.shuffleLayoutStacks)((0, i.shuffleLayoutBands)(s))));
  return dt.shuffleLayout = n, dt;
}
var Mi;
function rl() {
  if (Mi) return ot;
  Mi = 1, Object.defineProperty(ot, "__esModule", { value: !0 }), ot.getLayout = void 0;
  const i = Zc(), e = tl(), t = (r) => (0, e.shuffleLayout)((0, i.rotateLayout)(r));
  return ot.getLayout = t, ot;
}
var vt = {}, St = {}, qi;
function il() {
  if (qi) return St;
  qi = 1, Object.defineProperty(St, "__esModule", { value: !0 }), St.getSeedsByDifficulty = void 0;
  const i = (e, t) => e.filter((r) => !t || r.difficulty === t);
  return St.getSeedsByDifficulty = i, St;
}
var Di;
function nl() {
  if (Di) return vt;
  Di = 1, Object.defineProperty(vt, "__esModule", { value: !0 }), vt.getSeed = void 0;
  const i = gs(), e = il(), t = (r, n) => (0, i.getRandomItem)((0, e.getSeedsByDifficulty)(r, n));
  return vt.getSeed = t, vt;
}
var _t = {}, Pt = {}, $i;
function sl() {
  if ($i) return Pt;
  $i = 1, Object.defineProperty(Pt, "__esModule", { value: !0 }), Pt.boardToSequence = void 0;
  const i = (e) => e.map((t) => t.join("")).join("");
  return Pt.boardToSequence = i, Pt;
}
var Tt = {}, ki;
function ol() {
  if (ki) return Tt;
  ki = 1, Object.defineProperty(Tt, "__esModule", { value: !0 }), Tt.populateLayout = void 0;
  const i = (e, t) => e.map((r) => r.map((n) => t[n]));
  return Tt.populateLayout = i, Tt;
}
var Et = {}, Qi;
function al() {
  if (Qi) return Et;
  Qi = 1, Object.defineProperty(Et, "__esModule", { value: !0 }), Et.replaceTokens = void 0;
  const i = (e, t) => e.split("").map((r) => t[r] || r).join("");
  return Et.replaceTokens = i, Et;
}
var Fi;
function ul() {
  if (Fi) return _t;
  Fi = 1, Object.defineProperty(_t, "__esModule", { value: !0 }), _t.getSequence = void 0;
  const i = sl(), e = ol(), t = al(), r = (n, s, u) => (0, i.boardToSequence)((0, e.populateLayout)(n, (0, t.replaceTokens)(s, u)));
  return _t.getSequence = r, _t;
}
var Ct = {}, ji;
function cl() {
  if (ji) return Ct;
  ji = 1, Object.defineProperty(Ct, "__esModule", { value: !0 }), Ct.getTokenMap = void 0;
  const i = Jr(), e = () => "abcdefghi".split("").sort(i.sortRandom).reduce((t, r, n) => ({
    ...t,
    [r]: String(n + 1)
  }), {});
  return Ct.getTokenMap = e, Ct;
}
var At = {}, Ui;
function ll() {
  return Ui || (Ui = 1, Object.defineProperty(At, "__esModule", { value: !0 }), At.SEEDS = void 0, At.SEEDS = [
    {
      puzzle: "g--d--caf---g----ii-f--hg-bb-iaedhgc--afcg--d-g-b-----f-d--abc---b------c--h-bfia",
      solution: "gbhdiecafacegbfdhiidfcahgebbfiaedhgcehafcgibddgcbhiafefidegabchhabifcedgceghdbfia",
      difficulty: "easy"
    },
    {
      puzzle: "bf-hiac-g-gi------a-hf-g---g-a-fi--ddef---i-b--b-a-g-ff---gbh--hac---------e-cfd-",
      solution: "bfdhiacegegicbdafhachfegdbighabfiecddefgchiabcibdaeghffdeagbhichacidfbgeibgehcfda",
      difficulty: "easy"
    },
    {
      puzzle: "hgad-e--b-cbf-ge---df-aih-----i-------d-ecai-g---fa----igadf----fe-i-----h-eg-fd-",
      solution: "hgadceifbicbfhgeadedfbaihcgcahibdgeffbdgecaihgeihfadbcbigadfchedfecihbgaahcegbfdi",
      difficulty: "easy"
    },
    {
      puzzle: "-fbe-c----e-----a---g-ihb--gb-fhdc-eid-g-eahbch-----f-----ef-ga-g----e-i--hi-----",
      solution: "afbegcidhheidfbgacdcgaihbefgbafhdcieidfgceahbchebaidfgbidcefhgafgchdaebieahibgfcd",
      difficulty: "easy"
    },
    {
      puzzle: "c--d-fgeb---g--i-hg-ih--da-a-g-b-cde-edc--a--b--------i-e-cd-ha-fb-h-e-ch--e-----",
      solution: "cahdifgebedfgabichgbihecdafahgfbicdefedcghabibicadehfgigebcdfhadfbihaegchcaefgbid",
      difficulty: "easy"
    },
    {
      puzzle: "bi---ec--eg--h-fbdf--------i-hba-dfe----ehbig--bf-d-h--f-e-a-c-----g-e--cde--f--a",
      solution: "bidgfecahegcahifbdfhadcbgeiichbagdfedafcehbiggebfidahchfgedaicbabihgcedfcdeibfhga",
      difficulty: "easy"
    },
    {
      puzzle: "-----ef-ha--bf--ecfe-gc---a----gbch--a--df-b--bi----f-h-af-gidbdf----g--i--c--ha-",
      solution: "bicdaefghahgbfidecfedgchbiaedfagbchicahidfebggbiehcafdhcafegidbdfbhiagceigecbdhaf",
      difficulty: "easy"
    },
    {
      puzzle: "--fg--hec-ebc-------h-dfgabb--h-a-fg-g-df-i--f-a---b--hf----ad---if----hc-ea---bi",
      solution: "dafgbihecgebcahdifichedfgabbidhcaefgegcdfbihafhaigebcdhfgbicadeabifedcghcdeahgfbi",
      difficulty: "easy"
    },
    {
      puzzle: "-----b-f-e-aih----bi----a----e---i---g-bf--a-----cihg-ic-fdhg-a--h---f-cgef-iad-b",
      solution: "dhcgabefiefaihcbdgbigdefachcaehgdibfhgibfecadfbdacihgeicbfdhgeaadhebgficgefciadhb",
      difficulty: "easy"
    },
    {
      puzzle: "e--f-b-------eid-f--h----b-ge-c-fadhab-ihgfe-hc--d----d-g---cf---eg--h-bf---i----",
      solution: "edcfgbihabgaheidcfifhdcaebggeicbfadhabdihgfechcfadebgidigbahcfecaegfdhibfhbeicgad",
      difficulty: "easy"
    },
    {
      puzzle: "g-hedcf---i-f--a--e--a-----c--i-deh-i-------g--g--e---a----f--c-cf-e-gi-b-------e",
      solution: "gahedcfbidicfbgaehefbaihcgdcbaigdehfihebfadcgfdghceiabaeighfbdchcfdebgiabgdcaihfe",
      difficulty: "medium"
    },
    {
      puzzle: "-di--ac---b-cid-h---h--b-d-----f----h-d----fca---c-i--d----i-e-bh---cd-g-g---fac-",
      solution: "fdighacbeebgcidfhacahfebgdigecifhbadhidabgefcafbdceighdcabgihefbhfeacdigigehdfacb",
      difficulty: "medium"
    },
    {
      puzzle: "--ac-i------ah-d---e----i---a-e-bc----g--f--ad---gae--ig-fa------hd-e-g-c-d-b----",
      solution: "hdaceigfbbifahgdcegecbfdiahfaiedbchgehgicfbdadcbhgaeifigefachbdabhdiefgccfdgbhaei",
      difficulty: "medium"
    },
    {
      puzzle: "fg----i---h--f-e--e-bd--afh-f--hg--ic------b----f-c-----c-------eiac-gdf-b-----e-",
      solution: "fgaebhicdihdcfaegbecbdgiafhdfebhgcaicahidefbgbigfacdhegdchefbiaheiacbgdfabfgidhec",
      difficulty: "medium"
    },
    {
      puzzle: "--d-g-fi---e-ci-d-a----eg-----i---f---bg--ec-e--d--haig----f----ha--------ch-g-e-",
      solution: "cbdaghfiehgefciadbaifbdeghcdahiecbfgifbghaecdecgdfbhaigeicafdbhbhaeidcgffdchbgiea",
      difficulty: "medium"
    },
    {
      puzzle: "----d-a---a-ie---di------h-d-e--cg-b-b-e--i----c-i--dh--h-gf--c------b-g--i-ce-a-",
      solution: "ehfcdgabicabiehfgdigdfbachediehacgfbhbgefdicaafcgibedhbehagfdicfcadhibeggdibcehaf",
      difficulty: "medium"
    },
    {
      puzzle: "---cfa-ibf---i-------g---f--i--h-cd-gdf--------cd--fb-------bc--gb---dhi---he--g-",
      solution: "dhecfagibfbgeidhaccaigbhefdbiafhecdggdfbaciehhecdgifbaafhidgbceegbacfdhiicdhebagf",
      difficulty: "medium"
    },
    {
      puzzle: "a------g-b--di-a-f--e--ahi----a------bae--------ichbaei---de------c-igd-d-h----ci",
      solution: "aidhefcgbbhgdicaeffcebgahidheiabgdfccbaefdihggdfichbaeiacgdefbhefbchigdadghfabeci",
      difficulty: "medium"
    },
    {
      puzzle: "----g-------ci--bg-i-de-af-------beh-----fgdi---eb-f----ah--ig---hg-d---cd--a----",
      solution: "hacfgbdieefdciahbggibdehafcagfidcbehbceahfgdidhiebgfcafbahceigdiehgfdcabcdgbaiehf",
      difficulty: "medium"
    },
    {
      puzzle: "gfbc---dh-a-------d--a--fi--daifc--ech------f-------c-f---e--b---d-----i--igh-d--",
      solution: "gfbcieadhiahbdfcegdceaghfibbdaifcghechgebdiafeifhagbcdfgcdeihbahbdfcaegiaeighbdfc",
      difficulty: "medium"
    },
    {
      puzzle: "-e-fh--a-g----ed---a--b-f---ih----dc--------a----g----b---i---dhc-gf-----g------e",
      solution: "debfhciagghfiaedcbcaidbgfehaihbefgdcfbgcdiehaedchgabifbfaeihcgdhcegfdabiigdacbhfe",
      difficulty: "hard"
    },
    {
      puzzle: "----i-b---fc--a-h-eb----i-fcieg--ad---hd-e----d--a----f---b-e-i-------b--h--e----",
      solution: "hageifbcdifcbdagheebdchgiafciegfbadhaghdcefibbdfiahcegfcahbdegideifgchbaghbaeidfc",
      difficulty: "hard"
    },
    {
      puzzle: "-------hg-----h-d-a-g---ei--ce--dg--dbf---------bfid--hg---f----d--h---c--a-eg---",
      solution: "bedfiachgficeghbdaahgdbceificehadgfbdbfgceiahgahbfidcehgbcdfaeiediahbfgccfaieghbd",
      difficulty: "hard"
    },
    {
      puzzle: "h---f------------i--e---a-h-dhe---a---fh-b----i--c---gf-ga-di--a-i---d-bce------a",
      solution: "hgcifabdedabgehfciifebdcaghbdheigcafgcfhabeideiadcfhbgfbgahdiecahicgedfbcedfbigha",
      difficulty: "hard"
    },
    {
      puzzle: "f----dha----b------a------dic---h------c--egb-----------a-----ed--f-ec-g-fg------",
      solution: "febigdhachdcbfageigaiehcbfdicegbhadfahfcdiegbbgdaefichcbadigfhedihfaecbgefghcbdia",
      difficulty: "hard"
    },
    {
      puzzle: "c-a---i---b--c--ede----g--c-e---dga--c---b--i--gf-----b-----ei------a-cg--ie----a",
      solution: "cfahdeigbgbhacifedeidbfgahchebcidgafacfgebhdiidgfahcbebacdgfeihfheibadcgdgiehcbfa",
      difficulty: "hard"
    },
    {
      puzzle: "--a-i---cc-g-------h--e--a--a---ib---d--f--h-----------i---d-f------g-c-dg---b--h",
      solution: "beagifhdccfghdaibeihdbecfaghafcgibedgdbafechiecidbhagfaihecdgfbfbeihgdcadgcfabeih",
      difficulty: "hard"
    },
    {
      puzzle: "i--f--ec------a-fbg-b-i---h-d---ihg-----b---fe---a------d-----i---ie-b-------g---",
      solution: "iahfdbecgdcehgaifbgfbeicdahbdacfihgechgdbeaifeifgahcbdhbdacfgeifgciedbhaaeibhgfdc",
      difficulty: "hard"
    },
    {
      puzzle: "--e---c------i--g-------d-hbaf--------cfhe--ie------f-h-d-c-----f-h----c---i-ga--",
      solution: "fdegbhciaacheidfgbibgcfadehbafdgihcedgcfhebaiehibacgfdhidacfebggfahebidccebidgahf",
      difficulty: "hard"
    },
    {
      puzzle: "--f-d-i---g--b-a-d--c-a-----c-i---e---eh--g---------ac---------b---i-e----gf--d--",
      solution: "abfcdhigehgiebfacddecgaibhfgcdifahebfaehcbgdiihbdegfacefabgdcihbdhaicefgcigfhedba",
      difficulty: "hard"
    },
    {
      puzzle: "-ica------------bh----g--f--g---a---i-e----c-a---f------d--bg------c---e-fg----id",
      solution: "ficabhdeggeaidfcbhdhbegcifabgfceahdiidebhgacfachdfiegbeadfibghchbigcdfaecfghaebid",
      difficulty: "expert"
    },
    {
      puzzle: "-h-i------i---------f--bh--b---a--ed-ca------i--f---h--------c----he--f-ab--df---",
      solution: "ehbicdgafdigafhcbecafegbhdibghcaifedfcadheigbiedfbgahchfebiadcggdihecbfaabcgdfeih",
      difficulty: "expert"
    },
    {
      puzzle: "-h--c-f-ice-------b--ia--------g-h------e---ff--h---i----b---eh----------ga--f--c",
      solution: "ahgdcefbiceigfbahdbfdiahcgediefgchabgbhaeidcffachbdeigicfbdagehedbchgifahgaeifbdc",
      difficulty: "expert"
    },
    {
      puzzle: "a----db---g-c----f--e-f--i---------i----h-f-d--g---ch---b--e-c-ca------h-d-------",
      solution: "afchidbegigdcebhafhbegfadicfehdgcabibcaehifgddigbafcheghbfdeicacafibgedhediachgfb",
      difficulty: "expert"
    },
    {
      puzzle: "------c--g-b--a---------g-h---e----gb--id-----i-f---eb----i---c-he-f-d--a------h-",
      solution: "edhbgicfagfbchaeidicadefgbhhafebcidgbegidhacfdicfaghebfgdhiebaccheafbdgiabigcdfhe",
      difficulty: "expert"
    },
    {
      puzzle: "---bf-i-------hc-aa----------g------h--c-e----i----bh----f---g--f-----e---hig-a--",
      solution: "chebfaidgfgdeihcbaabidcgefhbeghdifachafcbegiddicgafbheicafedhgbgfbahcdeiedhigbacf",
      difficulty: "expert"
    },
    {
      puzzle: "--c-----d---g-i--h-i----b--ace------d--bh----b--f---------e---------bea--d--a--c-",
      solution: "gecabhifdfbagdicehhidefcbgaaceigdhbfdgfbheaicbhifcagdeiagcefdhbcfhdibeagedbhagfci",
      difficulty: "expert"
    },
    {
      puzzle: "-----d-h--h-----a-gb------i-----a--g----eh-c--i--d-----ge---a--d----f-----ab--i--",
      solution: "iacefdghbehdgibcafgbfhacedicehfbadigfdgiehbcaaibcdgfehbgedhiafcdciagfhbehfabceigd",
      difficulty: "expert"
    },
    {
      puzzle: "-bi-------c----e---------af---eba-----a-i-g------c--i----h-e--d-e------gc-b--f---",
      solution: "fbiaegdhcachdfbegiedgchibafgicebafdhbhafidgcedfegchaibiafhgecbdhedbacifgcgbidfhea",
      difficulty: "expert"
    },
    {
      puzzle: "---i--h-bc----b----g----a----gd-----e--h-f------b---ac-c------ha-----id--i--gd---",
      solution: "deficahgbchagfbdeibgiedhacffagdicbheebchafgididhbegfacgcdabiefhafbcheidghiefgdcba",
      difficulty: "expert"
    }
  ]), At;
}
var Lt = {}, zi;
function hl() {
  if (zi) return Lt;
  zi = 1, Object.defineProperty(Lt, "__esModule", { value: !0 }), Lt.validateDifficulty = void 0;
  const i = ps(), e = (t) => i.DIFFICULTY_LEVELS.includes(t);
  return Lt.validateDifficulty = e, Lt;
}
var Vi;
function fl() {
  if (Vi) return it;
  Vi = 1, Object.defineProperty(it, "__esModule", { value: !0 }), it.getSudoku = void 0;
  const i = Hc(), e = ps(), t = rl(), r = nl(), n = ul(), s = cl(), u = ll(), a = hl(), d = (m) => {
    if (m && !(0, a.validateDifficulty)(m))
      throw new Error(`Invalid difficulty, expected one of: ${e.DIFFICULTY_LEVELS.join(", ")}`);
    const f = (0, r.getSeed)(u.SEEDS, m), w = (0, t.getLayout)(i.BASE_LAYOUT), y = (0, s.getTokenMap)(), v = (0, n.getSequence)(w, f.puzzle, y), l = (0, n.getSequence)(w, f.solution, y);
    return {
      puzzle: v,
      solution: l,
      difficulty: f.difficulty
    };
  };
  return it.getSudoku = d, it;
}
var Wi;
function dl() {
  return Wi || (Wi = 1, function(i) {
    Object.defineProperty(i, "__esModule", { value: !0 }), i.getSudoku = void 0;
    var e = fl();
    Object.defineProperty(i, "getSudoku", { enumerable: !0, get: function() {
      return e.getSudoku;
    } });
  }(Sr)), Sr;
}
var Ut = dl();
const Zt = as(
  "solutions",
  {
    id: Ht().primaryKey().generatedAlwaysAsIdentity(),
    value: os().notNull().unique(),
    date: Yn().defaultNow().notNull().unique(),
    created_at: Wr({ withTimezone: !0 }).defaultNow().notNull()
  },
  (i) => [Vu("game_solution_date_idx").on(i.date)]
), Nr = as(
  "games",
  {
    id: Ht().primaryKey().generatedAlwaysAsIdentity(),
    solution_id: Ht().notNull().references(() => Zt.id),
    created_at: Wr({ withTimezone: !0 }).defaultNow().notNull()
  },
  (i) => [zu("game_solution_idx").on(i.solution_id)]
);
async function pl({
  db: i
}) {
  console.info("create new solution");
  const e = Ut.getSudoku("easy"), t = Ut.getSudoku("medium"), r = Ut.getSudoku("hard"), n = Ut.getSudoku("expert"), s = JSON.stringify({ easy: e, medium: t, hard: r, expert: n }), a = (await i.insert(Zt).values({
    value: s
  }).returning()).pop();
  if (!a)
    throw Error("failed to create new solution");
  return a;
}
async function gl({
  db: i
}) {
  return console.info("get solution"), (await i.select().from(Zt).where(A`${Zt.date} = CURRENT_DATE`)).pop();
}
async function ws({
  db: i
}) {
  const e = await gl({ db: i });
  e && console.info(`get solution '${e.id}'`);
  const t = e || await pl({ db: i });
  return e || console.info(`create new solution '${t.id}'`), t;
}
async function yl({ db: i }) {
  console.info("create new game");
  const e = await ws({ db: i }), r = (await i.insert(Nr).values({
    solution_id: e.id
  }).returning()).pop();
  if (!r)
    throw Error("failed to create new game");
  return { game: r, date: e.date };
}
async function ml({ db: i }) {
  console.info("get game");
  const e = await ws({ db: i });
  return { game: (await i.select().from(Nr).where(Gr(Nr.solution_id, e.id))).pop(), date: e.date };
}
async function bl({ db: i }) {
  console.info("get or create game");
  const { game: e, date: t } = await ml({ db: i });
  e && console.info(`get game '${e.id}'`);
  const r = e || (await yl({ db: i })).game;
  return e || console.info(`create new game '${r.id}'`), { game: r, date: t };
}
const wl = (i) => `${i}T00:00:00.000Z`;
function vl(i) {
  const e = Ge(i);
  return Ir({ client: e });
}
const vs = (i) => ({
  "Access-Control-Allow-Origin": i,
  "Access-Control-Allow-Methods": "GET, OPTIONS",
  "Access-Control-Allow-Headers": "Content-Type, Authorization"
}), Gi = (i) => ({
  ...vs(i),
  "Content-Type": "application/json"
});
async function Yl(i) {
  try {
    const e = Netlify.env.get("VITE_APP_URL");
    if (!e) throw Error("missing VITE_APP_URL");
    if (i.method === "OPTIONS")
      return new Response(null, {
        status: 204,
        headers: vs(e)
      });
    const t = Netlify.env.get("DATABASE_URL");
    if (!t) throw Error("missing DATABASE_URL");
    const r = vl(t), { date: n, game: s } = await bl({ db: r }), u = { game: s, date: wl(n) };
    return new Response(JSON.stringify(u), {
      status: 200,
      headers: Gi(e)
    });
  } catch (e) {
    console.error("Unexpected handler error", e);
    const t = Netlify.env.get("VITE_APP_URL");
    return t || console.warn("missing VITE_APP_URL"), new Response("Internal Server Error", {
      status: 500,
      headers: Gi(t || "")
    });
  }
}
export {
  Yl as default
};
