function Dialog(e, t, n, i) {
  (this._shadowBlock = n),
    (this._popupBlock = i),
    (this._shadow = t),
    (this._popup = e),
    (this._changeDialog = function() {
      (this._shadow = 1 != this._shadow),
        (this._popup = 1 != this._popup),
        1 == this._shadow && 1 == this._popup
          ? (this._shadowBlock.show(),
            this._popupBlock.show(),
            $("html, body").css("overflowY", "hidden"))
          : (this._shadowBlock.hide(),
            this._popupBlock.hide(),
            $("html, body").css("overflowY", "auto"));
    }),
    (this.showDialog = function(e) {
      (this._popupBlock = $(e)), this._changeDialog();
    }),
    (this.closeDialog = function() {
      this._changeDialog();
    });
}
!(function(e, t) {
  "use strict";
  "object" == typeof module && "object" == typeof module.exports
    ? (module.exports = e.document
        ? t(e, !0)
        : function(e) {
            if (!e.document)
              throw new Error("jQuery requires a window with a document");
            return t(e);
          })
    : t(e);
})("undefined" != typeof window ? window : this, function(e, t) {
  "use strict";
  function n(e, t, n) {
    var i,
      o = (t = t || se).createElement("script");
    if (((o.text = e), n)) for (i in be) n[i] && (o[i] = n[i]);
    t.head.appendChild(o).parentNode.removeChild(o);
  }
  function i(e) {
    return null == e
      ? e + ""
      : "object" == typeof e || "function" == typeof e
      ? pe[fe.call(e)] || "object"
      : typeof e;
  }
  function o(e) {
    var t = !!e && "length" in e && e.length,
      n = i(e);
    return (
      !me(e) &&
      !we(e) &&
      ("array" === n ||
        0 === t ||
        ("number" == typeof t && t > 0 && t - 1 in e))
    );
  }
  function r(e, t) {
    return e.nodeName && e.nodeName.toLowerCase() === t.toLowerCase();
  }
  function s(e, t, n) {
    return me(t)
      ? xe.grep(e, function(e, i) {
          return !!t.call(e, i, e) !== n;
        })
      : t.nodeType
      ? xe.grep(e, function(e) {
          return (e === t) !== n;
        })
      : "string" != typeof t
      ? xe.grep(e, function(e) {
          return ue.call(t, e) > -1 !== n;
        })
      : xe.filter(t, e, n);
  }
  function a(e, t) {
    for (; (e = e[t]) && 1 !== e.nodeType; );
    return e;
  }
  function l(e) {
    var t = {};
    return (
      xe.each(e.match(Ne) || [], function(e, n) {
        t[n] = !0;
      }),
      t
    );
  }
  function c(e) {
    return e;
  }
  function d(e) {
    throw e;
  }
  function u(e, t, n, i) {
    var o;
    try {
      e && me((o = e.promise))
        ? o
            .call(e)
            .done(t)
            .fail(n)
        : e && me((o = e.then))
        ? o.call(e, t, n)
        : t.apply(void 0, [e].slice(i));
    } catch (e) {
      n.apply(void 0, [e]);
    }
  }
  function p() {
    se.removeEventListener("DOMContentLoaded", p),
      e.removeEventListener("load", p),
      xe.ready();
  }
  function f(e, t) {
    return t.toUpperCase();
  }
  function h(e) {
    return e.replace(qe, "ms-").replace(Me, f);
  }
  function v() {
    this.expando = xe.expando + v.uid++;
  }
  function g(e) {
    return (
      "true" === e ||
      ("false" !== e &&
        ("null" === e
          ? null
          : e === +e + ""
          ? +e
          : Re.test(e)
          ? JSON.parse(e)
          : e))
    );
  }
  function y(e, t, n) {
    var i;
    if (void 0 === n && 1 === e.nodeType)
      if (
        ((i = "data-" + t.replace(Be, "-$&").toLowerCase()),
        "string" == typeof (n = e.getAttribute(i)))
      ) {
        try {
          n = g(n);
        } catch (e) {}
        We.set(e, t, n);
      } else n = void 0;
    return n;
  }
  function m(e, t, n, i) {
    var o,
      r,
      s = 20,
      a = i
        ? function() {
            return i.cur();
          }
        : function() {
            return xe.css(e, t, "");
          },
      l = a(),
      c = (n && n[3]) || (xe.cssNumber[t] ? "" : "px"),
      d = (xe.cssNumber[t] || ("px" !== c && +l)) && _e.exec(xe.css(e, t));
    if (d && d[3] !== c) {
      for (l /= 2, c = c || d[3], d = +l || 1; s--; )
        xe.style(e, t, d + c),
          (1 - r) * (1 - (r = a() / l || 0.5)) <= 0 && (s = 0),
          (d /= r);
      (d *= 2), xe.style(e, t, d + c), (n = n || []);
    }
    return (
      n &&
        ((d = +d || +l || 0),
        (o = n[1] ? d + (n[1] + 1) * n[2] : +n[2]),
        i && ((i.unit = c), (i.start = d), (i.end = o))),
      o
    );
  }
  function w(e) {
    var t,
      n = e.ownerDocument,
      i = e.nodeName,
      o = Ve[i];
    return (
      o ||
      ((t = n.body.appendChild(n.createElement(i))),
      (o = xe.css(t, "display")),
      t.parentNode.removeChild(t),
      "none" === o && (o = "block"),
      (Ve[i] = o),
      o)
    );
  }
  function b(e, t) {
    for (var n, i, o = [], r = 0, s = e.length; r < s; r++)
      (i = e[r]).style &&
        ((n = i.style.display),
        t
          ? ("none" === n &&
              ((o[r] = ze.get(i, "display") || null),
              o[r] || (i.style.display = "")),
            "" === i.style.display && Xe(i) && (o[r] = w(i)))
          : "none" !== n && ((o[r] = "none"), ze.set(i, "display", n)));
    for (r = 0; r < s; r++) null != o[r] && (e[r].style.display = o[r]);
    return e;
  }
  function x(e, t) {
    var n;
    return (
      (n =
        void 0 !== e.getElementsByTagName
          ? e.getElementsByTagName(t || "*")
          : void 0 !== e.querySelectorAll
          ? e.querySelectorAll(t || "*")
          : []),
      void 0 === t || (t && r(e, t)) ? xe.merge([e], n) : n
    );
  }
  function k(e, t) {
    for (var n = 0, i = e.length; n < i; n++)
      ze.set(e[n], "globalEval", !t || ze.get(t[n], "globalEval"));
  }
  function T(e, t, n, o, r) {
    for (
      var s,
        a,
        l,
        c,
        d,
        u,
        p = t.createDocumentFragment(),
        f = [],
        h = 0,
        v = e.length;
      h < v;
      h++
    )
      if ((s = e[h]) || 0 === s)
        if ("object" === i(s)) xe.merge(f, s.nodeType ? [s] : s);
        else if (Ze.test(s)) {
          for (
            a = a || p.appendChild(t.createElement("div")),
              l = (Qe.exec(s) || ["", ""])[1].toLowerCase(),
              c = Ke[l] || Ke._default,
              a.innerHTML = c[1] + xe.htmlPrefilter(s) + c[2],
              u = c[0];
            u--;

          )
            a = a.lastChild;
          xe.merge(f, a.childNodes), ((a = p.firstChild).textContent = "");
        } else f.push(t.createTextNode(s));
    for (p.textContent = "", h = 0; (s = f[h++]); )
      if (o && xe.inArray(s, o) > -1) r && r.push(s);
      else if (
        ((d = xe.contains(s.ownerDocument, s)),
        (a = x(p.appendChild(s), "script")),
        d && k(a),
        n)
      )
        for (u = 0; (s = a[u++]); ) Je.test(s.type || "") && n.push(s);
    return p;
  }
  function S() {
    return !0;
  }
  function C() {
    return !1;
  }
  function $() {
    try {
      return se.activeElement;
    } catch (e) {}
  }
  function A(e, t, n, i, o, r) {
    var s, a;
    if ("object" == typeof t) {
      "string" != typeof n && ((i = i || n), (n = void 0));
      for (a in t) A(e, a, n, i, t[a], r);
      return e;
    }
    if (
      (null == i && null == o
        ? ((o = n), (i = n = void 0))
        : null == o &&
          ("string" == typeof n
            ? ((o = i), (i = void 0))
            : ((o = i), (i = n), (n = void 0))),
      !1 === o)
    )
      o = C;
    else if (!o) return e;
    return (
      1 === r &&
        ((s = o),
        ((o = function(e) {
          return xe().off(e), s.apply(this, arguments);
        }).guid = s.guid || (s.guid = xe.guid++))),
      e.each(function() {
        xe.event.add(this, t, o, i, n);
      })
    );
  }
  function E(e, t) {
    return r(e, "table") && r(11 !== t.nodeType ? t : t.firstChild, "tr")
      ? xe(e).children("tbody")[0] || e
      : e;
  }
  function D(e) {
    return (e.type = (null !== e.getAttribute("type")) + "/" + e.type), e;
  }
  function j(e) {
    return (
      "true/" === (e.type || "").slice(0, 5)
        ? (e.type = e.type.slice(5))
        : e.removeAttribute("type"),
      e
    );
  }
  function H(e, t) {
    var n, i, o, r, s, a, l, c;
    if (1 === t.nodeType) {
      if (
        ze.hasData(e) &&
        ((r = ze.access(e)), (s = ze.set(t, r)), (c = r.events))
      ) {
        delete s.handle, (s.events = {});
        for (o in c)
          for (n = 0, i = c[o].length; n < i; n++) xe.event.add(t, o, c[o][n]);
      }
      We.hasData(e) &&
        ((a = We.access(e)), (l = xe.extend({}, a)), We.set(t, l));
    }
  }
  function N(e, t) {
    var n = t.nodeName.toLowerCase();
    "input" === n && Ge.test(e.type)
      ? (t.checked = e.checked)
      : ("input" !== n && "textarea" !== n) ||
        (t.defaultValue = e.defaultValue);
  }
  function L(e, t, i, o) {
    t = ce.apply([], t);
    var r,
      s,
      a,
      l,
      c,
      d,
      u = 0,
      p = e.length,
      f = p - 1,
      h = t[0],
      v = me(h);
    if (v || (p > 1 && "string" == typeof h && !ye.checkClone && st.test(h)))
      return e.each(function(n) {
        var r = e.eq(n);
        v && (t[0] = h.call(this, n, r.html())), L(r, t, i, o);
      });
    if (
      p &&
      ((r = T(t, e[0].ownerDocument, !1, e, o)),
      (s = r.firstChild),
      1 === r.childNodes.length && (r = s),
      s || o)
    ) {
      for (l = (a = xe.map(x(r, "script"), D)).length; u < p; u++)
        (c = r),
          u !== f &&
            ((c = xe.clone(c, !0, !0)), l && xe.merge(a, x(c, "script"))),
          i.call(e[u], c, u);
      if (l)
        for (d = a[a.length - 1].ownerDocument, xe.map(a, j), u = 0; u < l; u++)
          (c = a[u]),
            Je.test(c.type || "") &&
              !ze.access(c, "globalEval") &&
              xe.contains(d, c) &&
              (c.src && "module" !== (c.type || "").toLowerCase()
                ? xe._evalUrl && xe._evalUrl(c.src)
                : n(c.textContent.replace(at, ""), d, c));
    }
    return e;
  }
  function O(e, t, n) {
    for (var i, o = t ? xe.filter(t, e) : e, r = 0; null != (i = o[r]); r++)
      n || 1 !== i.nodeType || xe.cleanData(x(i)),
        i.parentNode &&
          (n && xe.contains(i.ownerDocument, i) && k(x(i, "script")),
          i.parentNode.removeChild(i));
    return e;
  }
  function P(e, t, n) {
    var i,
      o,
      r,
      s,
      a = e.style;
    return (
      (n = n || ct(e)) &&
        ("" !== (s = n.getPropertyValue(t) || n[t]) ||
          xe.contains(e.ownerDocument, e) ||
          (s = xe.style(e, t)),
        !ye.pixelBoxStyles() &&
          lt.test(s) &&
          dt.test(t) &&
          ((i = a.width),
          (o = a.minWidth),
          (r = a.maxWidth),
          (a.minWidth = a.maxWidth = a.width = s),
          (s = n.width),
          (a.width = i),
          (a.minWidth = o),
          (a.maxWidth = r))),
      void 0 !== s ? s + "" : s
    );
  }
  function q(e, t) {
    return {
      get: function() {
        if (!e()) return (this.get = t).apply(this, arguments);
        delete this.get;
      }
    };
  }
  function M(e) {
    if (e in gt) return e;
    for (var t = e[0].toUpperCase() + e.slice(1), n = vt.length; n--; )
      if ((e = vt[n] + t) in gt) return e;
  }
  function I(e) {
    var t = xe.cssProps[e];
    return t || (t = xe.cssProps[e] = M(e) || e), t;
  }
  function z(e, t, n) {
    var i = _e.exec(t);
    return i ? Math.max(0, i[2] - (n || 0)) + (i[3] || "px") : t;
  }
  function W(e, t, n, i, o, r) {
    var s = "width" === t ? 1 : 0,
      a = 0,
      l = 0;
    if (n === (i ? "border" : "content")) return 0;
    for (; s < 4; s += 2)
      "margin" === n && (l += xe.css(e, n + Ue[s], !0, o)),
        i
          ? ("content" === n && (l -= xe.css(e, "padding" + Ue[s], !0, o)),
            "margin" !== n &&
              (l -= xe.css(e, "border" + Ue[s] + "Width", !0, o)))
          : ((l += xe.css(e, "padding" + Ue[s], !0, o)),
            "padding" !== n
              ? (l += xe.css(e, "border" + Ue[s] + "Width", !0, o))
              : (a += xe.css(e, "border" + Ue[s] + "Width", !0, o)));
    return (
      !i &&
        r >= 0 &&
        (l += Math.max(
          0,
          Math.ceil(
            e["offset" + t[0].toUpperCase() + t.slice(1)] - r - l - a - 0.5
          )
        )),
      l
    );
  }
  function R(e, t, n) {
    var i = ct(e),
      o = P(e, t, i),
      r = "border-box" === xe.css(e, "boxSizing", !1, i),
      s = r;
    if (lt.test(o)) {
      if (!n) return o;
      o = "auto";
    }
    return (
      (s = s && (ye.boxSizingReliable() || o === e.style[t])),
      ("auto" === o ||
        (!parseFloat(o) && "inline" === xe.css(e, "display", !1, i))) &&
        ((o = e["offset" + t[0].toUpperCase() + t.slice(1)]), (s = !0)),
      (o = parseFloat(o) || 0) +
        W(e, t, n || (r ? "border" : "content"), s, i, o) +
        "px"
    );
  }
  function B(e, t, n, i, o) {
    return new B.prototype.init(e, t, n, i, o);
  }
  function F() {
    mt &&
      (!1 === se.hidden && e.requestAnimationFrame
        ? e.requestAnimationFrame(F)
        : e.setTimeout(F, xe.fx.interval),
      xe.fx.tick());
  }
  function _() {
    return (
      e.setTimeout(function() {
        yt = void 0;
      }),
      (yt = Date.now())
    );
  }
  function U(e, t) {
    var n,
      i = 0,
      o = { height: e };
    for (t = t ? 1 : 0; i < 4; i += 2 - t)
      o["margin" + (n = Ue[i])] = o["padding" + n] = e;
    return t && (o.opacity = o.width = e), o;
  }
  function X(e, t, n) {
    for (
      var i,
        o = (G.tweeners[t] || []).concat(G.tweeners["*"]),
        r = 0,
        s = o.length;
      r < s;
      r++
    )
      if ((i = o[r].call(n, t, e))) return i;
  }
  function Y(e, t, n) {
    var i,
      o,
      r,
      s,
      a,
      l,
      c,
      d,
      u = "width" in t || "height" in t,
      p = this,
      f = {},
      h = e.style,
      v = e.nodeType && Xe(e),
      g = ze.get(e, "fxshow");
    n.queue ||
      (null == (s = xe._queueHooks(e, "fx")).unqueued &&
        ((s.unqueued = 0),
        (a = s.empty.fire),
        (s.empty.fire = function() {
          s.unqueued || a();
        })),
      s.unqueued++,
      p.always(function() {
        p.always(function() {
          s.unqueued--, xe.queue(e, "fx").length || s.empty.fire();
        });
      }));
    for (i in t)
      if (((o = t[i]), wt.test(o))) {
        if (
          (delete t[i], (r = r || "toggle" === o), o === (v ? "hide" : "show"))
        ) {
          if ("show" !== o || !g || void 0 === g[i]) continue;
          v = !0;
        }
        f[i] = (g && g[i]) || xe.style(e, i);
      }
    if ((l = !xe.isEmptyObject(t)) || !xe.isEmptyObject(f)) {
      u &&
        1 === e.nodeType &&
        ((n.overflow = [h.overflow, h.overflowX, h.overflowY]),
        null == (c = g && g.display) && (c = ze.get(e, "display")),
        "none" === (d = xe.css(e, "display")) &&
          (c
            ? (d = c)
            : (b([e], !0),
              (c = e.style.display || c),
              (d = xe.css(e, "display")),
              b([e]))),
        ("inline" === d || ("inline-block" === d && null != c)) &&
          "none" === xe.css(e, "float") &&
          (l ||
            (p.done(function() {
              h.display = c;
            }),
            null == c && ((d = h.display), (c = "none" === d ? "" : d))),
          (h.display = "inline-block"))),
        n.overflow &&
          ((h.overflow = "hidden"),
          p.always(function() {
            (h.overflow = n.overflow[0]),
              (h.overflowX = n.overflow[1]),
              (h.overflowY = n.overflow[2]);
          })),
        (l = !1);
      for (i in f)
        l ||
          (g
            ? "hidden" in g && (v = g.hidden)
            : (g = ze.access(e, "fxshow", { display: c })),
          r && (g.hidden = !v),
          v && b([e], !0),
          p.done(function() {
            v || b([e]), ze.remove(e, "fxshow");
            for (i in f) xe.style(e, i, f[i]);
          })),
          (l = X(v ? g[i] : 0, i, p)),
          i in g || ((g[i] = l.start), v && ((l.end = l.start), (l.start = 0)));
    }
  }
  function V(e, t) {
    var n, i, o, r, s;
    for (n in e)
      if (
        ((i = h(n)),
        (o = t[i]),
        (r = e[n]),
        Array.isArray(r) && ((o = r[1]), (r = e[n] = r[0])),
        n !== i && ((e[i] = r), delete e[n]),
        (s = xe.cssHooks[i]) && "expand" in s)
      ) {
        (r = s.expand(r)), delete e[i];
        for (n in r) n in e || ((e[n] = r[n]), (t[n] = o));
      } else t[i] = o;
  }
  function G(e, t, n) {
    var i,
      o,
      r = 0,
      s = G.prefilters.length,
      a = xe.Deferred().always(function() {
        delete l.elem;
      }),
      l = function() {
        if (o) return !1;
        for (
          var t = yt || _(),
            n = Math.max(0, c.startTime + c.duration - t),
            i = 1 - (n / c.duration || 0),
            r = 0,
            s = c.tweens.length;
          r < s;
          r++
        )
          c.tweens[r].run(i);
        return (
          a.notifyWith(e, [c, i, n]),
          i < 1 && s
            ? n
            : (s || a.notifyWith(e, [c, 1, 0]), a.resolveWith(e, [c]), !1)
        );
      },
      c = a.promise({
        elem: e,
        props: xe.extend({}, t),
        opts: xe.extend(
          !0,
          { specialEasing: {}, easing: xe.easing._default },
          n
        ),
        originalProperties: t,
        originalOptions: n,
        startTime: yt || _(),
        duration: n.duration,
        tweens: [],
        createTween: function(t, n) {
          var i = xe.Tween(
            e,
            c.opts,
            t,
            n,
            c.opts.specialEasing[t] || c.opts.easing
          );
          return c.tweens.push(i), i;
        },
        stop: function(t) {
          var n = 0,
            i = t ? c.tweens.length : 0;
          if (o) return this;
          for (o = !0; n < i; n++) c.tweens[n].run(1);
          return (
            t
              ? (a.notifyWith(e, [c, 1, 0]), a.resolveWith(e, [c, t]))
              : a.rejectWith(e, [c, t]),
            this
          );
        }
      }),
      d = c.props;
    for (V(d, c.opts.specialEasing); r < s; r++)
      if ((i = G.prefilters[r].call(c, e, d, c.opts)))
        return (
          me(i.stop) &&
            (xe._queueHooks(c.elem, c.opts.queue).stop = i.stop.bind(i)),
          i
        );
    return (
      xe.map(d, X, c),
      me(c.opts.start) && c.opts.start.call(e, c),
      c
        .progress(c.opts.progress)
        .done(c.opts.done, c.opts.complete)
        .fail(c.opts.fail)
        .always(c.opts.always),
      xe.fx.timer(xe.extend(l, { elem: e, anim: c, queue: c.opts.queue })),
      c
    );
  }
  function Q(e) {
    return (e.match(Ne) || []).join(" ");
  }
  function J(e) {
    return (e.getAttribute && e.getAttribute("class")) || "";
  }
  function K(e) {
    return Array.isArray(e) ? e : "string" == typeof e ? e.match(Ne) || [] : [];
  }
  function Z(e, t, n, o) {
    var r;
    if (Array.isArray(t))
      xe.each(t, function(t, i) {
        n || Ht.test(e)
          ? o(e, i)
          : Z(
              e + "[" + ("object" == typeof i && null != i ? t : "") + "]",
              i,
              n,
              o
            );
      });
    else if (n || "object" !== i(t)) o(e, t);
    else for (r in t) Z(e + "[" + r + "]", t[r], n, o);
  }
  function ee(e) {
    return function(t, n) {
      "string" != typeof t && ((n = t), (t = "*"));
      var i,
        o = 0,
        r = t.toLowerCase().match(Ne) || [];
      if (me(n))
        for (; (i = r[o++]); )
          "+" === i[0]
            ? ((i = i.slice(1) || "*"), (e[i] = e[i] || []).unshift(n))
            : (e[i] = e[i] || []).push(n);
    };
  }
  function te(e, t, n, i) {
    function o(a) {
      var l;
      return (
        (r[a] = !0),
        xe.each(e[a] || [], function(e, a) {
          var c = a(t, n, i);
          return "string" != typeof c || s || r[c]
            ? s
              ? !(l = c)
              : void 0
            : (t.dataTypes.unshift(c), o(c), !1);
        }),
        l
      );
    }
    var r = {},
      s = e === Ft;
    return o(t.dataTypes[0]) || (!r["*"] && o("*"));
  }
  function ne(e, t) {
    var n,
      i,
      o = xe.ajaxSettings.flatOptions || {};
    for (n in t) void 0 !== t[n] && ((o[n] ? e : i || (i = {}))[n] = t[n]);
    return i && xe.extend(!0, e, i), e;
  }
  function ie(e, t, n) {
    for (var i, o, r, s, a = e.contents, l = e.dataTypes; "*" === l[0]; )
      l.shift(),
        void 0 === i && (i = e.mimeType || t.getResponseHeader("Content-Type"));
    if (i)
      for (o in a)
        if (a[o] && a[o].test(i)) {
          l.unshift(o);
          break;
        }
    if (l[0] in n) r = l[0];
    else {
      for (o in n) {
        if (!l[0] || e.converters[o + " " + l[0]]) {
          r = o;
          break;
        }
        s || (s = o);
      }
      r = r || s;
    }
    if (r) return r !== l[0] && l.unshift(r), n[r];
  }
  function oe(e, t, n, i) {
    var o,
      r,
      s,
      a,
      l,
      c = {},
      d = e.dataTypes.slice();
    if (d[1]) for (s in e.converters) c[s.toLowerCase()] = e.converters[s];
    for (r = d.shift(); r; )
      if (
        (e.responseFields[r] && (n[e.responseFields[r]] = t),
        !l && i && e.dataFilter && (t = e.dataFilter(t, e.dataType)),
        (l = r),
        (r = d.shift()))
      )
        if ("*" === r) r = l;
        else if ("*" !== l && l !== r) {
          if (!(s = c[l + " " + r] || c["* " + r]))
            for (o in c)
              if (
                (a = o.split(" "))[1] === r &&
                (s = c[l + " " + a[0]] || c["* " + a[0]])
              ) {
                !0 === s
                  ? (s = c[o])
                  : !0 !== c[o] && ((r = a[0]), d.unshift(a[1]));
                break;
              }
          if (!0 !== s)
            if (s && e.throws) t = s(t);
            else
              try {
                t = s(t);
              } catch (e) {
                return {
                  state: "parsererror",
                  error: s ? e : "No conversion from " + l + " to " + r
                };
              }
        }
    return { state: "success", data: t };
  }
  var re = [],
    se = e.document,
    ae = Object.getPrototypeOf,
    le = re.slice,
    ce = re.concat,
    de = re.push,
    ue = re.indexOf,
    pe = {},
    fe = pe.toString,
    he = pe.hasOwnProperty,
    ve = he.toString,
    ge = ve.call(Object),
    ye = {},
    me = function(e) {
      return "function" == typeof e && "number" != typeof e.nodeType;
    },
    we = function(e) {
      return null != e && e === e.window;
    },
    be = { type: !0, src: !0, noModule: !0 },
    xe = function(e, t) {
      return new xe.fn.init(e, t);
    },
    ke = /^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g;
  (xe.fn = xe.prototype = {
    jquery: "3.3.1",
    constructor: xe,
    length: 0,
    toArray: function() {
      return le.call(this);
    },
    get: function(e) {
      return null == e
        ? le.call(this)
        : e < 0
        ? this[e + this.length]
        : this[e];
    },
    pushStack: function(e) {
      var t = xe.merge(this.constructor(), e);
      return (t.prevObject = this), t;
    },
    each: function(e) {
      return xe.each(this, e);
    },
    map: function(e) {
      return this.pushStack(
        xe.map(this, function(t, n) {
          return e.call(t, n, t);
        })
      );
    },
    slice: function() {
      return this.pushStack(le.apply(this, arguments));
    },
    first: function() {
      return this.eq(0);
    },
    last: function() {
      return this.eq(-1);
    },
    eq: function(e) {
      var t = this.length,
        n = +e + (e < 0 ? t : 0);
      return this.pushStack(n >= 0 && n < t ? [this[n]] : []);
    },
    end: function() {
      return this.prevObject || this.constructor();
    },
    push: de,
    sort: re.sort,
    splice: re.splice
  }),
    (xe.extend = xe.fn.extend = function() {
      var e,
        t,
        n,
        i,
        o,
        r,
        s = arguments[0] || {},
        a = 1,
        l = arguments.length,
        c = !1;
      for (
        "boolean" == typeof s && ((c = s), (s = arguments[a] || {}), a++),
          "object" == typeof s || me(s) || (s = {}),
          a === l && ((s = this), a--);
        a < l;
        a++
      )
        if (null != (e = arguments[a]))
          for (t in e)
            (n = s[t]),
              s !== (i = e[t]) &&
                (c && i && (xe.isPlainObject(i) || (o = Array.isArray(i)))
                  ? (o
                      ? ((o = !1), (r = n && Array.isArray(n) ? n : []))
                      : (r = n && xe.isPlainObject(n) ? n : {}),
                    (s[t] = xe.extend(c, r, i)))
                  : void 0 !== i && (s[t] = i));
      return s;
    }),
    xe.extend({
      expando: "jQuery" + ("3.3.1" + Math.random()).replace(/\D/g, ""),
      isReady: !0,
      error: function(e) {
        throw new Error(e);
      },
      noop: function() {},
      isPlainObject: function(e) {
        var t, n;
        return !(
          !e ||
          "[object Object]" !== fe.call(e) ||
          ((t = ae(e)) &&
            ("function" !=
              typeof (n = he.call(t, "constructor") && t.constructor) ||
              ve.call(n) !== ge))
        );
      },
      isEmptyObject: function(e) {
        var t;
        for (t in e) return !1;
        return !0;
      },
      globalEval: function(e) {
        n(e);
      },
      each: function(e, t) {
        var n,
          i = 0;
        if (o(e))
          for (n = e.length; i < n && !1 !== t.call(e[i], i, e[i]); i++);
        else for (i in e) if (!1 === t.call(e[i], i, e[i])) break;
        return e;
      },
      trim: function(e) {
        return null == e ? "" : (e + "").replace(ke, "");
      },
      makeArray: function(e, t) {
        var n = t || [];
        return (
          null != e &&
            (o(Object(e))
              ? xe.merge(n, "string" == typeof e ? [e] : e)
              : de.call(n, e)),
          n
        );
      },
      inArray: function(e, t, n) {
        return null == t ? -1 : ue.call(t, e, n);
      },
      merge: function(e, t) {
        for (var n = +t.length, i = 0, o = e.length; i < n; i++) e[o++] = t[i];
        return (e.length = o), e;
      },
      grep: function(e, t, n) {
        for (var i = [], o = 0, r = e.length, s = !n; o < r; o++)
          !t(e[o], o) !== s && i.push(e[o]);
        return i;
      },
      map: function(e, t, n) {
        var i,
          r,
          s = 0,
          a = [];
        if (o(e))
          for (i = e.length; s < i; s++)
            null != (r = t(e[s], s, n)) && a.push(r);
        else for (s in e) null != (r = t(e[s], s, n)) && a.push(r);
        return ce.apply([], a);
      },
      guid: 1,
      support: ye
    }),
    "function" == typeof Symbol &&
      (xe.fn[Symbol.iterator] = re[Symbol.iterator]),
    xe.each(
      "Boolean Number String Function Array Date RegExp Object Error Symbol".split(
        " "
      ),
      function(e, t) {
        pe["[object " + t + "]"] = t.toLowerCase();
      }
    );
  var Te = (function(e) {
    function t(e, t, n, i) {
      var o,
        r,
        s,
        a,
        l,
        c,
        d,
        p = t && t.ownerDocument,
        h = t ? t.nodeType : 9;
      if (
        ((n = n || []),
        "string" != typeof e || !e || (1 !== h && 9 !== h && 11 !== h))
      )
        return n;
      if (
        !i &&
        ((t ? t.ownerDocument || t : R) !== L && N(t), (t = t || L), P)
      ) {
        if (11 !== h && (l = ye.exec(e)))
          if ((o = l[1])) {
            if (9 === h) {
              if (!(s = t.getElementById(o))) return n;
              if (s.id === o) return n.push(s), n;
            } else if (p && (s = p.getElementById(o)) && z(t, s) && s.id === o)
              return n.push(s), n;
          } else {
            if (l[2]) return K.apply(n, t.getElementsByTagName(e)), n;
            if (
              (o = l[3]) &&
              k.getElementsByClassName &&
              t.getElementsByClassName
            )
              return K.apply(n, t.getElementsByClassName(o)), n;
          }
        if (k.qsa && !X[e + " "] && (!q || !q.test(e))) {
          if (1 !== h) (p = t), (d = e);
          else if ("object" !== t.nodeName.toLowerCase()) {
            for (
              (a = t.getAttribute("id"))
                ? (a = a.replace(xe, ke))
                : t.setAttribute("id", (a = W)),
                r = (c = $(e)).length;
              r--;

            )
              c[r] = "#" + a + " " + f(c[r]);
            (d = c.join(",")), (p = (me.test(e) && u(t.parentNode)) || t);
          }
          if (d)
            try {
              return K.apply(n, p.querySelectorAll(d)), n;
            } catch (e) {
            } finally {
              a === W && t.removeAttribute("id");
            }
        }
      }
      return E(e.replace(ae, "$1"), t, n, i);
    }
    function n() {
      function e(n, i) {
        return (
          t.push(n + " ") > T.cacheLength && delete e[t.shift()],
          (e[n + " "] = i)
        );
      }
      var t = [];
      return e;
    }
    function i(e) {
      return (e[W] = !0), e;
    }
    function o(e) {
      var t = L.createElement("fieldset");
      try {
        return !!e(t);
      } catch (e) {
        return !1;
      } finally {
        t.parentNode && t.parentNode.removeChild(t), (t = null);
      }
    }
    function r(e, t) {
      for (var n = e.split("|"), i = n.length; i--; ) T.attrHandle[n[i]] = t;
    }
    function s(e, t) {
      var n = t && e,
        i =
          n &&
          1 === e.nodeType &&
          1 === t.nodeType &&
          e.sourceIndex - t.sourceIndex;
      if (i) return i;
      if (n) for (; (n = n.nextSibling); ) if (n === t) return -1;
      return e ? 1 : -1;
    }
    function a(e) {
      return function(t) {
        return "input" === t.nodeName.toLowerCase() && t.type === e;
      };
    }
    function l(e) {
      return function(t) {
        var n = t.nodeName.toLowerCase();
        return ("input" === n || "button" === n) && t.type === e;
      };
    }
    function c(e) {
      return function(t) {
        return "form" in t
          ? t.parentNode && !1 === t.disabled
            ? "label" in t
              ? "label" in t.parentNode
                ? t.parentNode.disabled === e
                : t.disabled === e
              : t.isDisabled === e || (t.isDisabled !== !e && Se(t) === e)
            : t.disabled === e
          : "label" in t && t.disabled === e;
      };
    }
    function d(e) {
      return i(function(t) {
        return (
          (t = +t),
          i(function(n, i) {
            for (var o, r = e([], n.length, t), s = r.length; s--; )
              n[(o = r[s])] && (n[o] = !(i[o] = n[o]));
          })
        );
      });
    }
    function u(e) {
      return e && void 0 !== e.getElementsByTagName && e;
    }
    function p() {}
    function f(e) {
      for (var t = 0, n = e.length, i = ""; t < n; t++) i += e[t].value;
      return i;
    }
    function h(e, t, n) {
      var i = t.dir,
        o = t.next,
        r = o || i,
        s = n && "parentNode" === r,
        a = F++;
      return t.first
        ? function(t, n, o) {
            for (; (t = t[i]); ) if (1 === t.nodeType || s) return e(t, n, o);
            return !1;
          }
        : function(t, n, l) {
            var c,
              d,
              u,
              p = [B, a];
            if (l) {
              for (; (t = t[i]); )
                if ((1 === t.nodeType || s) && e(t, n, l)) return !0;
            } else
              for (; (t = t[i]); )
                if (1 === t.nodeType || s)
                  if (
                    ((u = t[W] || (t[W] = {})),
                    (d = u[t.uniqueID] || (u[t.uniqueID] = {})),
                    o && o === t.nodeName.toLowerCase())
                  )
                    t = t[i] || t;
                  else {
                    if ((c = d[r]) && c[0] === B && c[1] === a)
                      return (p[2] = c[2]);
                    if (((d[r] = p), (p[2] = e(t, n, l)))) return !0;
                  }
            return !1;
          };
    }
    function v(e) {
      return e.length > 1
        ? function(t, n, i) {
            for (var o = e.length; o--; ) if (!e[o](t, n, i)) return !1;
            return !0;
          }
        : e[0];
    }
    function g(e, n, i) {
      for (var o = 0, r = n.length; o < r; o++) t(e, n[o], i);
      return i;
    }
    function y(e, t, n, i, o) {
      for (var r, s = [], a = 0, l = e.length, c = null != t; a < l; a++)
        (r = e[a]) && ((n && !n(r, i, o)) || (s.push(r), c && t.push(a)));
      return s;
    }
    function m(e, t, n, o, r, s) {
      return (
        o && !o[W] && (o = m(o)),
        r && !r[W] && (r = m(r, s)),
        i(function(i, s, a, l) {
          var c,
            d,
            u,
            p = [],
            f = [],
            h = s.length,
            v = i || g(t || "*", a.nodeType ? [a] : a, []),
            m = !e || (!i && t) ? v : y(v, p, e, a, l),
            w = n ? (r || (i ? e : h || o) ? [] : s) : m;
          if ((n && n(m, w, a, l), o))
            for (c = y(w, f), o(c, [], a, l), d = c.length; d--; )
              (u = c[d]) && (w[f[d]] = !(m[f[d]] = u));
          if (i) {
            if (r || e) {
              if (r) {
                for (c = [], d = w.length; d--; )
                  (u = w[d]) && c.push((m[d] = u));
                r(null, (w = []), c, l);
              }
              for (d = w.length; d--; )
                (u = w[d]) &&
                  (c = r ? ee(i, u) : p[d]) > -1 &&
                  (i[c] = !(s[c] = u));
            }
          } else (w = y(w === s ? w.splice(h, w.length) : w)), r ? r(null, s, w, l) : K.apply(s, w);
        })
      );
    }
    function w(e) {
      for (
        var t,
          n,
          i,
          o = e.length,
          r = T.relative[e[0].type],
          s = r || T.relative[" "],
          a = r ? 1 : 0,
          l = h(
            function(e) {
              return e === t;
            },
            s,
            !0
          ),
          c = h(
            function(e) {
              return ee(t, e) > -1;
            },
            s,
            !0
          ),
          d = [
            function(e, n, i) {
              var o =
                (!r && (i || n !== D)) ||
                ((t = n).nodeType ? l(e, n, i) : c(e, n, i));
              return (t = null), o;
            }
          ];
        a < o;
        a++
      )
        if ((n = T.relative[e[a].type])) d = [h(v(d), n)];
        else {
          if ((n = T.filter[e[a].type].apply(null, e[a].matches))[W]) {
            for (i = ++a; i < o && !T.relative[e[i].type]; i++);
            return m(
              a > 1 && v(d),
              a > 1 &&
                f(
                  e
                    .slice(0, a - 1)
                    .concat({ value: " " === e[a - 2].type ? "*" : "" })
                ).replace(ae, "$1"),
              n,
              a < i && w(e.slice(a, i)),
              i < o && w((e = e.slice(i))),
              i < o && f(e)
            );
          }
          d.push(n);
        }
      return v(d);
    }
    function b(e, n) {
      var o = n.length > 0,
        r = e.length > 0,
        s = function(i, s, a, l, c) {
          var d,
            u,
            p,
            f = 0,
            h = "0",
            v = i && [],
            g = [],
            m = D,
            w = i || (r && T.find.TAG("*", c)),
            b = (B += null == m ? 1 : Math.random() || 0.1),
            x = w.length;
          for (
            c && (D = s === L || s || c);
            h !== x && null != (d = w[h]);
            h++
          ) {
            if (r && d) {
              for (
                u = 0, s || d.ownerDocument === L || (N(d), (a = !P));
                (p = e[u++]);

              )
                if (p(d, s || L, a)) {
                  l.push(d);
                  break;
                }
              c && (B = b);
            }
            o && ((d = !p && d) && f--, i && v.push(d));
          }
          if (((f += h), o && h !== f)) {
            for (u = 0; (p = n[u++]); ) p(v, g, s, a);
            if (i) {
              if (f > 0) for (; h--; ) v[h] || g[h] || (g[h] = Q.call(l));
              g = y(g);
            }
            K.apply(l, g),
              c && !i && g.length > 0 && f + n.length > 1 && t.uniqueSort(l);
          }
          return c && ((B = b), (D = m)), v;
        };
      return o ? i(s) : s;
    }
    var x,
      k,
      T,
      S,
      C,
      $,
      A,
      E,
      D,
      j,
      H,
      N,
      L,
      O,
      P,
      q,
      M,
      I,
      z,
      W = "sizzle" + 1 * new Date(),
      R = e.document,
      B = 0,
      F = 0,
      _ = n(),
      U = n(),
      X = n(),
      Y = function(e, t) {
        return e === t && (H = !0), 0;
      },
      V = {}.hasOwnProperty,
      G = [],
      Q = G.pop,
      J = G.push,
      K = G.push,
      Z = G.slice,
      ee = function(e, t) {
        for (var n = 0, i = e.length; n < i; n++) if (e[n] === t) return n;
        return -1;
      },
      te =
        "checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped",
      ne = "[\\x20\\t\\r\\n\\f]",
      ie = "(?:\\\\.|[\\w-]|[^\0-\\xa0])+",
      oe =
        "\\[" +
        ne +
        "*(" +
        ie +
        ")(?:" +
        ne +
        "*([*^$|!~]?=)" +
        ne +
        "*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|(" +
        ie +
        "))|)" +
        ne +
        "*\\]",
      re =
        ":(" +
        ie +
        ")(?:\\((('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|((?:\\\\.|[^\\\\()[\\]]|" +
        oe +
        ")*)|.*)\\)|)",
      se = new RegExp(ne + "+", "g"),
      ae = new RegExp(
        "^" + ne + "+|((?:^|[^\\\\])(?:\\\\.)*)" + ne + "+$",
        "g"
      ),
      le = new RegExp("^" + ne + "*," + ne + "*"),
      ce = new RegExp("^" + ne + "*([>+~]|" + ne + ")" + ne + "*"),
      de = new RegExp("=" + ne + "*([^\\]'\"]*?)" + ne + "*\\]", "g"),
      ue = new RegExp(re),
      pe = new RegExp("^" + ie + "$"),
      fe = {
        ID: new RegExp("^#(" + ie + ")"),
        CLASS: new RegExp("^\\.(" + ie + ")"),
        TAG: new RegExp("^(" + ie + "|[*])"),
        ATTR: new RegExp("^" + oe),
        PSEUDO: new RegExp("^" + re),
        CHILD: new RegExp(
          "^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\(" +
            ne +
            "*(even|odd|(([+-]|)(\\d*)n|)" +
            ne +
            "*(?:([+-]|)" +
            ne +
            "*(\\d+)|))" +
            ne +
            "*\\)|)",
          "i"
        ),
        bool: new RegExp("^(?:" + te + ")$", "i"),
        needsContext: new RegExp(
          "^" +
            ne +
            "*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\(" +
            ne +
            "*((?:-\\d)?\\d*)" +
            ne +
            "*\\)|)(?=[^-]|$)",
          "i"
        )
      },
      he = /^(?:input|select|textarea|button)$/i,
      ve = /^h\d$/i,
      ge = /^[^{]+\{\s*\[native \w/,
      ye = /^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,
      me = /[+~]/,
      we = new RegExp("\\\\([\\da-f]{1,6}" + ne + "?|(" + ne + ")|.)", "ig"),
      be = function(e, t, n) {
        var i = "0x" + t - 65536;
        return i !== i || n
          ? t
          : i < 0
          ? String.fromCharCode(i + 65536)
          : String.fromCharCode((i >> 10) | 55296, (1023 & i) | 56320);
      },
      xe = /([\0-\x1f\x7f]|^-?\d)|^-$|[^\0-\x1f\x7f-\uFFFF\w-]/g,
      ke = function(e, t) {
        return t
          ? "\0" === e
            ? "�"
            : e.slice(0, -1) +
              "\\" +
              e.charCodeAt(e.length - 1).toString(16) +
              " "
          : "\\" + e;
      },
      Te = function() {
        N();
      },
      Se = h(
        function(e) {
          return !0 === e.disabled && ("form" in e || "label" in e);
        },
        { dir: "parentNode", next: "legend" }
      );
    try {
      K.apply((G = Z.call(R.childNodes)), R.childNodes),
        G[R.childNodes.length].nodeType;
    } catch (e) {
      K = {
        apply: G.length
          ? function(e, t) {
              J.apply(e, Z.call(t));
            }
          : function(e, t) {
              for (var n = e.length, i = 0; (e[n++] = t[i++]); );
              e.length = n - 1;
            }
      };
    }
    (k = t.support = {}),
      (C = t.isXML = function(e) {
        var t = e && (e.ownerDocument || e).documentElement;
        return !!t && "HTML" !== t.nodeName;
      }),
      (N = t.setDocument = function(e) {
        var t,
          n,
          i = e ? e.ownerDocument || e : R;
        return i !== L && 9 === i.nodeType && i.documentElement
          ? ((L = i),
            (O = L.documentElement),
            (P = !C(L)),
            R !== L &&
              (n = L.defaultView) &&
              n.top !== n &&
              (n.addEventListener
                ? n.addEventListener("unload", Te, !1)
                : n.attachEvent && n.attachEvent("onunload", Te)),
            (k.attributes = o(function(e) {
              return (e.className = "i"), !e.getAttribute("className");
            })),
            (k.getElementsByTagName = o(function(e) {
              return (
                e.appendChild(L.createComment("")),
                !e.getElementsByTagName("*").length
              );
            })),
            (k.getElementsByClassName = ge.test(L.getElementsByClassName)),
            (k.getById = o(function(e) {
              return (
                (O.appendChild(e).id = W),
                !L.getElementsByName || !L.getElementsByName(W).length
              );
            })),
            k.getById
              ? ((T.filter.ID = function(e) {
                  var t = e.replace(we, be);
                  return function(e) {
                    return e.getAttribute("id") === t;
                  };
                }),
                (T.find.ID = function(e, t) {
                  if (void 0 !== t.getElementById && P) {
                    var n = t.getElementById(e);
                    return n ? [n] : [];
                  }
                }))
              : ((T.filter.ID = function(e) {
                  var t = e.replace(we, be);
                  return function(e) {
                    var n =
                      void 0 !== e.getAttributeNode && e.getAttributeNode("id");
                    return n && n.value === t;
                  };
                }),
                (T.find.ID = function(e, t) {
                  if (void 0 !== t.getElementById && P) {
                    var n,
                      i,
                      o,
                      r = t.getElementById(e);
                    if (r) {
                      if ((n = r.getAttributeNode("id")) && n.value === e)
                        return [r];
                      for (o = t.getElementsByName(e), i = 0; (r = o[i++]); )
                        if ((n = r.getAttributeNode("id")) && n.value === e)
                          return [r];
                    }
                    return [];
                  }
                })),
            (T.find.TAG = k.getElementsByTagName
              ? function(e, t) {
                  return void 0 !== t.getElementsByTagName
                    ? t.getElementsByTagName(e)
                    : k.qsa
                    ? t.querySelectorAll(e)
                    : void 0;
                }
              : function(e, t) {
                  var n,
                    i = [],
                    o = 0,
                    r = t.getElementsByTagName(e);
                  if ("*" === e) {
                    for (; (n = r[o++]); ) 1 === n.nodeType && i.push(n);
                    return i;
                  }
                  return r;
                }),
            (T.find.CLASS =
              k.getElementsByClassName &&
              function(e, t) {
                if (void 0 !== t.getElementsByClassName && P)
                  return t.getElementsByClassName(e);
              }),
            (M = []),
            (q = []),
            (k.qsa = ge.test(L.querySelectorAll)) &&
              (o(function(e) {
                (O.appendChild(e).innerHTML =
                  "<a id='" +
                  W +
                  "'></a><select id='" +
                  W +
                  "-\r\\' msallowcapture=''><option selected=''></option></select>"),
                  e.querySelectorAll("[msallowcapture^='']").length &&
                    q.push("[*^$]=" + ne + "*(?:''|\"\")"),
                  e.querySelectorAll("[selected]").length ||
                    q.push("\\[" + ne + "*(?:value|" + te + ")"),
                  e.querySelectorAll("[id~=" + W + "-]").length || q.push("~="),
                  e.querySelectorAll(":checked").length || q.push(":checked"),
                  e.querySelectorAll("a#" + W + "+*").length ||
                    q.push(".#.+[+~]");
              }),
              o(function(e) {
                e.innerHTML =
                  "<a href='' disabled='disabled'></a><select disabled='disabled'><option/></select>";
                var t = L.createElement("input");
                t.setAttribute("type", "hidden"),
                  e.appendChild(t).setAttribute("name", "D"),
                  e.querySelectorAll("[name=d]").length &&
                    q.push("name" + ne + "*[*^$|!~]?="),
                  2 !== e.querySelectorAll(":enabled").length &&
                    q.push(":enabled", ":disabled"),
                  (O.appendChild(e).disabled = !0),
                  2 !== e.querySelectorAll(":disabled").length &&
                    q.push(":enabled", ":disabled"),
                  e.querySelectorAll("*,:x"),
                  q.push(",.*:");
              })),
            (k.matchesSelector = ge.test(
              (I =
                O.matches ||
                O.webkitMatchesSelector ||
                O.mozMatchesSelector ||
                O.oMatchesSelector ||
                O.msMatchesSelector)
            )) &&
              o(function(e) {
                (k.disconnectedMatch = I.call(e, "*")),
                  I.call(e, "[s!='']:x"),
                  M.push("!=", re);
              }),
            (q = q.length && new RegExp(q.join("|"))),
            (M = M.length && new RegExp(M.join("|"))),
            (t = ge.test(O.compareDocumentPosition)),
            (z =
              t || ge.test(O.contains)
                ? function(e, t) {
                    var n = 9 === e.nodeType ? e.documentElement : e,
                      i = t && t.parentNode;
                    return (
                      e === i ||
                      !(
                        !i ||
                        1 !== i.nodeType ||
                        !(n.contains
                          ? n.contains(i)
                          : e.compareDocumentPosition &&
                            16 & e.compareDocumentPosition(i))
                      )
                    );
                  }
                : function(e, t) {
                    if (t) for (; (t = t.parentNode); ) if (t === e) return !0;
                    return !1;
                  }),
            (Y = t
              ? function(e, t) {
                  if (e === t) return (H = !0), 0;
                  var n =
                    !e.compareDocumentPosition - !t.compareDocumentPosition;
                  return (
                    n ||
                    (1 &
                      (n =
                        (e.ownerDocument || e) === (t.ownerDocument || t)
                          ? e.compareDocumentPosition(t)
                          : 1) ||
                    (!k.sortDetached && t.compareDocumentPosition(e) === n)
                      ? e === L || (e.ownerDocument === R && z(R, e))
                        ? -1
                        : t === L || (t.ownerDocument === R && z(R, t))
                        ? 1
                        : j
                        ? ee(j, e) - ee(j, t)
                        : 0
                      : 4 & n
                      ? -1
                      : 1)
                  );
                }
              : function(e, t) {
                  if (e === t) return (H = !0), 0;
                  var n,
                    i = 0,
                    o = e.parentNode,
                    r = t.parentNode,
                    a = [e],
                    l = [t];
                  if (!o || !r)
                    return e === L
                      ? -1
                      : t === L
                      ? 1
                      : o
                      ? -1
                      : r
                      ? 1
                      : j
                      ? ee(j, e) - ee(j, t)
                      : 0;
                  if (o === r) return s(e, t);
                  for (n = e; (n = n.parentNode); ) a.unshift(n);
                  for (n = t; (n = n.parentNode); ) l.unshift(n);
                  for (; a[i] === l[i]; ) i++;
                  return i
                    ? s(a[i], l[i])
                    : a[i] === R
                    ? -1
                    : l[i] === R
                    ? 1
                    : 0;
                }),
            L)
          : L;
      }),
      (t.matches = function(e, n) {
        return t(e, null, null, n);
      }),
      (t.matchesSelector = function(e, n) {
        if (
          ((e.ownerDocument || e) !== L && N(e),
          (n = n.replace(de, "='$1']")),
          k.matchesSelector &&
            P &&
            !X[n + " "] &&
            (!M || !M.test(n)) &&
            (!q || !q.test(n)))
        )
          try {
            var i = I.call(e, n);
            if (
              i ||
              k.disconnectedMatch ||
              (e.document && 11 !== e.document.nodeType)
            )
              return i;
          } catch (e) {}
        return t(n, L, null, [e]).length > 0;
      }),
      (t.contains = function(e, t) {
        return (e.ownerDocument || e) !== L && N(e), z(e, t);
      }),
      (t.attr = function(e, t) {
        (e.ownerDocument || e) !== L && N(e);
        var n = T.attrHandle[t.toLowerCase()],
          i = n && V.call(T.attrHandle, t.toLowerCase()) ? n(e, t, !P) : void 0;
        return void 0 !== i
          ? i
          : k.attributes || !P
          ? e.getAttribute(t)
          : (i = e.getAttributeNode(t)) && i.specified
          ? i.value
          : null;
      }),
      (t.escape = function(e) {
        return (e + "").replace(xe, ke);
      }),
      (t.error = function(e) {
        throw new Error("Syntax error, unrecognized expression: " + e);
      }),
      (t.uniqueSort = function(e) {
        var t,
          n = [],
          i = 0,
          o = 0;
        if (
          ((H = !k.detectDuplicates),
          (j = !k.sortStable && e.slice(0)),
          e.sort(Y),
          H)
        ) {
          for (; (t = e[o++]); ) t === e[o] && (i = n.push(o));
          for (; i--; ) e.splice(n[i], 1);
        }
        return (j = null), e;
      }),
      (S = t.getText = function(e) {
        var t,
          n = "",
          i = 0,
          o = e.nodeType;
        if (o) {
          if (1 === o || 9 === o || 11 === o) {
            if ("string" == typeof e.textContent) return e.textContent;
            for (e = e.firstChild; e; e = e.nextSibling) n += S(e);
          } else if (3 === o || 4 === o) return e.nodeValue;
        } else for (; (t = e[i++]); ) n += S(t);
        return n;
      }),
      ((T = t.selectors = {
        cacheLength: 50,
        createPseudo: i,
        match: fe,
        attrHandle: {},
        find: {},
        relative: {
          ">": { dir: "parentNode", first: !0 },
          " ": { dir: "parentNode" },
          "+": { dir: "previousSibling", first: !0 },
          "~": { dir: "previousSibling" }
        },
        preFilter: {
          ATTR: function(e) {
            return (
              (e[1] = e[1].replace(we, be)),
              (e[3] = (e[3] || e[4] || e[5] || "").replace(we, be)),
              "~=" === e[2] && (e[3] = " " + e[3] + " "),
              e.slice(0, 4)
            );
          },
          CHILD: function(e) {
            return (
              (e[1] = e[1].toLowerCase()),
              "nth" === e[1].slice(0, 3)
                ? (e[3] || t.error(e[0]),
                  (e[4] = +(e[4]
                    ? e[5] + (e[6] || 1)
                    : 2 * ("even" === e[3] || "odd" === e[3]))),
                  (e[5] = +(e[7] + e[8] || "odd" === e[3])))
                : e[3] && t.error(e[0]),
              e
            );
          },
          PSEUDO: function(e) {
            var t,
              n = !e[6] && e[2];
            return fe.CHILD.test(e[0])
              ? null
              : (e[3]
                  ? (e[2] = e[4] || e[5] || "")
                  : n &&
                    ue.test(n) &&
                    (t = $(n, !0)) &&
                    (t = n.indexOf(")", n.length - t) - n.length) &&
                    ((e[0] = e[0].slice(0, t)), (e[2] = n.slice(0, t))),
                e.slice(0, 3));
          }
        },
        filter: {
          TAG: function(e) {
            var t = e.replace(we, be).toLowerCase();
            return "*" === e
              ? function() {
                  return !0;
                }
              : function(e) {
                  return e.nodeName && e.nodeName.toLowerCase() === t;
                };
          },
          CLASS: function(e) {
            var t = _[e + " "];
            return (
              t ||
              ((t = new RegExp("(^|" + ne + ")" + e + "(" + ne + "|$)")) &&
                _(e, function(e) {
                  return t.test(
                    ("string" == typeof e.className && e.className) ||
                      (void 0 !== e.getAttribute && e.getAttribute("class")) ||
                      ""
                  );
                }))
            );
          },
          ATTR: function(e, n, i) {
            return function(o) {
              var r = t.attr(o, e);
              return null == r
                ? "!=" === n
                : !n ||
                    ((r += ""),
                    "=" === n
                      ? r === i
                      : "!=" === n
                      ? r !== i
                      : "^=" === n
                      ? i && 0 === r.indexOf(i)
                      : "*=" === n
                      ? i && r.indexOf(i) > -1
                      : "$=" === n
                      ? i && r.slice(-i.length) === i
                      : "~=" === n
                      ? (" " + r.replace(se, " ") + " ").indexOf(i) > -1
                      : "|=" === n &&
                        (r === i || r.slice(0, i.length + 1) === i + "-"));
            };
          },
          CHILD: function(e, t, n, i, o) {
            var r = "nth" !== e.slice(0, 3),
              s = "last" !== e.slice(-4),
              a = "of-type" === t;
            return 1 === i && 0 === o
              ? function(e) {
                  return !!e.parentNode;
                }
              : function(t, n, l) {
                  var c,
                    d,
                    u,
                    p,
                    f,
                    h,
                    v = r !== s ? "nextSibling" : "previousSibling",
                    g = t.parentNode,
                    y = a && t.nodeName.toLowerCase(),
                    m = !l && !a,
                    w = !1;
                  if (g) {
                    if (r) {
                      for (; v; ) {
                        for (p = t; (p = p[v]); )
                          if (
                            a
                              ? p.nodeName.toLowerCase() === y
                              : 1 === p.nodeType
                          )
                            return !1;
                        h = v = "only" === e && !h && "nextSibling";
                      }
                      return !0;
                    }
                    if (((h = [s ? g.firstChild : g.lastChild]), s && m)) {
                      for (
                        w =
                          (f =
                            (c =
                              (d =
                                (u = (p = g)[W] || (p[W] = {}))[p.uniqueID] ||
                                (u[p.uniqueID] = {}))[e] || [])[0] === B &&
                            c[1]) && c[2],
                          p = f && g.childNodes[f];
                        (p = (++f && p && p[v]) || (w = f = 0) || h.pop());

                      )
                        if (1 === p.nodeType && ++w && p === t) {
                          d[e] = [B, f, w];
                          break;
                        }
                    } else if (
                      (m &&
                        (w = f =
                          (c =
                            (d =
                              (u = (p = t)[W] || (p[W] = {}))[p.uniqueID] ||
                              (u[p.uniqueID] = {}))[e] || [])[0] === B && c[1]),
                      !1 === w)
                    )
                      for (
                        ;
                        (p = (++f && p && p[v]) || (w = f = 0) || h.pop()) &&
                        ((a
                          ? p.nodeName.toLowerCase() !== y
                          : 1 !== p.nodeType) ||
                          !++w ||
                          (m &&
                            ((d =
                              (u = p[W] || (p[W] = {}))[p.uniqueID] ||
                              (u[p.uniqueID] = {}))[e] = [B, w]),
                          p !== t));

                      );
                    return (w -= o) === i || (w % i == 0 && w / i >= 0);
                  }
                };
          },
          PSEUDO: function(e, n) {
            var o,
              r =
                T.pseudos[e] ||
                T.setFilters[e.toLowerCase()] ||
                t.error("unsupported pseudo: " + e);
            return r[W]
              ? r(n)
              : r.length > 1
              ? ((o = [e, e, "", n]),
                T.setFilters.hasOwnProperty(e.toLowerCase())
                  ? i(function(e, t) {
                      for (var i, o = r(e, n), s = o.length; s--; )
                        e[(i = ee(e, o[s]))] = !(t[i] = o[s]);
                    })
                  : function(e) {
                      return r(e, 0, o);
                    })
              : r;
          }
        },
        pseudos: {
          not: i(function(e) {
            var t = [],
              n = [],
              o = A(e.replace(ae, "$1"));
            return o[W]
              ? i(function(e, t, n, i) {
                  for (var r, s = o(e, null, i, []), a = e.length; a--; )
                    (r = s[a]) && (e[a] = !(t[a] = r));
                })
              : function(e, i, r) {
                  return (t[0] = e), o(t, null, r, n), (t[0] = null), !n.pop();
                };
          }),
          has: i(function(e) {
            return function(n) {
              return t(e, n).length > 0;
            };
          }),
          contains: i(function(e) {
            return (
              (e = e.replace(we, be)),
              function(t) {
                return (t.textContent || t.innerText || S(t)).indexOf(e) > -1;
              }
            );
          }),
          lang: i(function(e) {
            return (
              pe.test(e || "") || t.error("unsupported lang: " + e),
              (e = e.replace(we, be).toLowerCase()),
              function(t) {
                var n;
                do {
                  if (
                    (n = P
                      ? t.lang
                      : t.getAttribute("xml:lang") || t.getAttribute("lang"))
                  )
                    return (
                      (n = n.toLowerCase()) === e || 0 === n.indexOf(e + "-")
                    );
                } while ((t = t.parentNode) && 1 === t.nodeType);
                return !1;
              }
            );
          }),
          target: function(t) {
            var n = e.location && e.location.hash;
            return n && n.slice(1) === t.id;
          },
          root: function(e) {
            return e === O;
          },
          focus: function(e) {
            return (
              e === L.activeElement &&
              (!L.hasFocus || L.hasFocus()) &&
              !!(e.type || e.href || ~e.tabIndex)
            );
          },
          enabled: c(!1),
          disabled: c(!0),
          checked: function(e) {
            var t = e.nodeName.toLowerCase();
            return (
              ("input" === t && !!e.checked) || ("option" === t && !!e.selected)
            );
          },
          selected: function(e) {
            return (
              e.parentNode && e.parentNode.selectedIndex, !0 === e.selected
            );
          },
          empty: function(e) {
            for (e = e.firstChild; e; e = e.nextSibling)
              if (e.nodeType < 6) return !1;
            return !0;
          },
          parent: function(e) {
            return !T.pseudos.empty(e);
          },
          header: function(e) {
            return ve.test(e.nodeName);
          },
          input: function(e) {
            return he.test(e.nodeName);
          },
          button: function(e) {
            var t = e.nodeName.toLowerCase();
            return ("input" === t && "button" === e.type) || "button" === t;
          },
          text: function(e) {
            var t;
            return (
              "input" === e.nodeName.toLowerCase() &&
              "text" === e.type &&
              (null == (t = e.getAttribute("type")) ||
                "text" === t.toLowerCase())
            );
          },
          first: d(function() {
            return [0];
          }),
          last: d(function(e, t) {
            return [t - 1];
          }),
          eq: d(function(e, t, n) {
            return [n < 0 ? n + t : n];
          }),
          even: d(function(e, t) {
            for (var n = 0; n < t; n += 2) e.push(n);
            return e;
          }),
          odd: d(function(e, t) {
            for (var n = 1; n < t; n += 2) e.push(n);
            return e;
          }),
          lt: d(function(e, t, n) {
            for (var i = n < 0 ? n + t : n; --i >= 0; ) e.push(i);
            return e;
          }),
          gt: d(function(e, t, n) {
            for (var i = n < 0 ? n + t : n; ++i < t; ) e.push(i);
            return e;
          })
        }
      }).pseudos.nth = T.pseudos.eq);
    for (x in { radio: !0, checkbox: !0, file: !0, password: !0, image: !0 })
      T.pseudos[x] = a(x);
    for (x in { submit: !0, reset: !0 }) T.pseudos[x] = l(x);
    return (
      (p.prototype = T.filters = T.pseudos),
      (T.setFilters = new p()),
      ($ = t.tokenize = function(e, n) {
        var i,
          o,
          r,
          s,
          a,
          l,
          c,
          d = U[e + " "];
        if (d) return n ? 0 : d.slice(0);
        for (a = e, l = [], c = T.preFilter; a; ) {
          (i && !(o = le.exec(a))) ||
            (o && (a = a.slice(o[0].length) || a), l.push((r = []))),
            (i = !1),
            (o = ce.exec(a)) &&
              ((i = o.shift()),
              r.push({ value: i, type: o[0].replace(ae, " ") }),
              (a = a.slice(i.length)));
          for (s in T.filter)
            !(o = fe[s].exec(a)) ||
              (c[s] && !(o = c[s](o))) ||
              ((i = o.shift()),
              r.push({ value: i, type: s, matches: o }),
              (a = a.slice(i.length)));
          if (!i) break;
        }
        return n ? a.length : a ? t.error(e) : U(e, l).slice(0);
      }),
      (A = t.compile = function(e, t) {
        var n,
          i = [],
          o = [],
          r = X[e + " "];
        if (!r) {
          for (t || (t = $(e)), n = t.length; n--; )
            (r = w(t[n]))[W] ? i.push(r) : o.push(r);
          (r = X(e, b(o, i))).selector = e;
        }
        return r;
      }),
      (E = t.select = function(e, t, n, i) {
        var o,
          r,
          s,
          a,
          l,
          c = "function" == typeof e && e,
          d = !i && $((e = c.selector || e));
        if (((n = n || []), 1 === d.length)) {
          if (
            (r = d[0] = d[0].slice(0)).length > 2 &&
            "ID" === (s = r[0]).type &&
            9 === t.nodeType &&
            P &&
            T.relative[r[1].type]
          ) {
            if (!(t = (T.find.ID(s.matches[0].replace(we, be), t) || [])[0]))
              return n;
            c && (t = t.parentNode), (e = e.slice(r.shift().value.length));
          }
          for (
            o = fe.needsContext.test(e) ? 0 : r.length;
            o-- && ((s = r[o]), !T.relative[(a = s.type)]);

          )
            if (
              (l = T.find[a]) &&
              (i = l(
                s.matches[0].replace(we, be),
                (me.test(r[0].type) && u(t.parentNode)) || t
              ))
            ) {
              if ((r.splice(o, 1), !(e = i.length && f(r))))
                return K.apply(n, i), n;
              break;
            }
        }
        return (
          (c || A(e, d))(
            i,
            t,
            !P,
            n,
            !t || (me.test(e) && u(t.parentNode)) || t
          ),
          n
        );
      }),
      (k.sortStable =
        W.split("")
          .sort(Y)
          .join("") === W),
      (k.detectDuplicates = !!H),
      N(),
      (k.sortDetached = o(function(e) {
        return 1 & e.compareDocumentPosition(L.createElement("fieldset"));
      })),
      o(function(e) {
        return (
          (e.innerHTML = "<a href='#'></a>"),
          "#" === e.firstChild.getAttribute("href")
        );
      }) ||
        r("type|href|height|width", function(e, t, n) {
          if (!n) return e.getAttribute(t, "type" === t.toLowerCase() ? 1 : 2);
        }),
      (k.attributes &&
        o(function(e) {
          return (
            (e.innerHTML = "<input/>"),
            e.firstChild.setAttribute("value", ""),
            "" === e.firstChild.getAttribute("value")
          );
        })) ||
        r("value", function(e, t, n) {
          if (!n && "input" === e.nodeName.toLowerCase()) return e.defaultValue;
        }),
      o(function(e) {
        return null == e.getAttribute("disabled");
      }) ||
        r(te, function(e, t, n) {
          var i;
          if (!n)
            return !0 === e[t]
              ? t.toLowerCase()
              : (i = e.getAttributeNode(t)) && i.specified
              ? i.value
              : null;
        }),
      t
    );
  })(e);
  (xe.find = Te),
    (xe.expr = Te.selectors),
    (xe.expr[":"] = xe.expr.pseudos),
    (xe.uniqueSort = xe.unique = Te.uniqueSort),
    (xe.text = Te.getText),
    (xe.isXMLDoc = Te.isXML),
    (xe.contains = Te.contains),
    (xe.escapeSelector = Te.escape);
  var Se = function(e, t, n) {
      for (var i = [], o = void 0 !== n; (e = e[t]) && 9 !== e.nodeType; )
        if (1 === e.nodeType) {
          if (o && xe(e).is(n)) break;
          i.push(e);
        }
      return i;
    },
    Ce = function(e, t) {
      for (var n = []; e; e = e.nextSibling)
        1 === e.nodeType && e !== t && n.push(e);
      return n;
    },
    $e = xe.expr.match.needsContext,
    Ae = /^<([a-z][^\/\0>:\x20\t\r\n\f]*)[\x20\t\r\n\f]*\/?>(?:<\/\1>|)$/i;
  (xe.filter = function(e, t, n) {
    var i = t[0];
    return (
      n && (e = ":not(" + e + ")"),
      1 === t.length && 1 === i.nodeType
        ? xe.find.matchesSelector(i, e)
          ? [i]
          : []
        : xe.find.matches(
            e,
            xe.grep(t, function(e) {
              return 1 === e.nodeType;
            })
          )
    );
  }),
    xe.fn.extend({
      find: function(e) {
        var t,
          n,
          i = this.length,
          o = this;
        if ("string" != typeof e)
          return this.pushStack(
            xe(e).filter(function() {
              for (t = 0; t < i; t++) if (xe.contains(o[t], this)) return !0;
            })
          );
        for (n = this.pushStack([]), t = 0; t < i; t++) xe.find(e, o[t], n);
        return i > 1 ? xe.uniqueSort(n) : n;
      },
      filter: function(e) {
        return this.pushStack(s(this, e || [], !1));
      },
      not: function(e) {
        return this.pushStack(s(this, e || [], !0));
      },
      is: function(e) {
        return !!s(
          this,
          "string" == typeof e && $e.test(e) ? xe(e) : e || [],
          !1
        ).length;
      }
    });
  var Ee,
    De = /^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]+))$/;
  ((xe.fn.init = function(e, t, n) {
    var i, o;
    if (!e) return this;
    if (((n = n || Ee), "string" == typeof e)) {
      if (
        !(i =
          "<" === e[0] && ">" === e[e.length - 1] && e.length >= 3
            ? [null, e, null]
            : De.exec(e)) ||
        (!i[1] && t)
      )
        return !t || t.jquery ? (t || n).find(e) : this.constructor(t).find(e);
      if (i[1]) {
        if (
          ((t = t instanceof xe ? t[0] : t),
          xe.merge(
            this,
            xe.parseHTML(i[1], t && t.nodeType ? t.ownerDocument || t : se, !0)
          ),
          Ae.test(i[1]) && xe.isPlainObject(t))
        )
          for (i in t) me(this[i]) ? this[i](t[i]) : this.attr(i, t[i]);
        return this;
      }
      return (
        (o = se.getElementById(i[2])) && ((this[0] = o), (this.length = 1)),
        this
      );
    }
    return e.nodeType
      ? ((this[0] = e), (this.length = 1), this)
      : me(e)
      ? void 0 !== n.ready
        ? n.ready(e)
        : e(xe)
      : xe.makeArray(e, this);
  }).prototype = xe.fn),
    (Ee = xe(se));
  var je = /^(?:parents|prev(?:Until|All))/,
    He = { children: !0, contents: !0, next: !0, prev: !0 };
  xe.fn.extend({
    has: function(e) {
      var t = xe(e, this),
        n = t.length;
      return this.filter(function() {
        for (var e = 0; e < n; e++) if (xe.contains(this, t[e])) return !0;
      });
    },
    closest: function(e, t) {
      var n,
        i = 0,
        o = this.length,
        r = [],
        s = "string" != typeof e && xe(e);
      if (!$e.test(e))
        for (; i < o; i++)
          for (n = this[i]; n && n !== t; n = n.parentNode)
            if (
              n.nodeType < 11 &&
              (s
                ? s.index(n) > -1
                : 1 === n.nodeType && xe.find.matchesSelector(n, e))
            ) {
              r.push(n);
              break;
            }
      return this.pushStack(r.length > 1 ? xe.uniqueSort(r) : r);
    },
    index: function(e) {
      return e
        ? "string" == typeof e
          ? ue.call(xe(e), this[0])
          : ue.call(this, e.jquery ? e[0] : e)
        : this[0] && this[0].parentNode
        ? this.first().prevAll().length
        : -1;
    },
    add: function(e, t) {
      return this.pushStack(xe.uniqueSort(xe.merge(this.get(), xe(e, t))));
    },
    addBack: function(e) {
      return this.add(null == e ? this.prevObject : this.prevObject.filter(e));
    }
  }),
    xe.each(
      {
        parent: function(e) {
          var t = e.parentNode;
          return t && 11 !== t.nodeType ? t : null;
        },
        parents: function(e) {
          return Se(e, "parentNode");
        },
        parentsUntil: function(e, t, n) {
          return Se(e, "parentNode", n);
        },
        next: function(e) {
          return a(e, "nextSibling");
        },
        prev: function(e) {
          return a(e, "previousSibling");
        },
        nextAll: function(e) {
          return Se(e, "nextSibling");
        },
        prevAll: function(e) {
          return Se(e, "previousSibling");
        },
        nextUntil: function(e, t, n) {
          return Se(e, "nextSibling", n);
        },
        prevUntil: function(e, t, n) {
          return Se(e, "previousSibling", n);
        },
        siblings: function(e) {
          return Ce((e.parentNode || {}).firstChild, e);
        },
        children: function(e) {
          return Ce(e.firstChild);
        },
        contents: function(e) {
          return r(e, "iframe")
            ? e.contentDocument
            : (r(e, "template") && (e = e.content || e),
              xe.merge([], e.childNodes));
        }
      },
      function(e, t) {
        xe.fn[e] = function(n, i) {
          var o = xe.map(this, t, n);
          return (
            "Until" !== e.slice(-5) && (i = n),
            i && "string" == typeof i && (o = xe.filter(i, o)),
            this.length > 1 &&
              (He[e] || xe.uniqueSort(o), je.test(e) && o.reverse()),
            this.pushStack(o)
          );
        };
      }
    );
  var Ne = /[^\x20\t\r\n\f]+/g;
  (xe.Callbacks = function(e) {
    e = "string" == typeof e ? l(e) : xe.extend({}, e);
    var t,
      n,
      o,
      r,
      s = [],
      a = [],
      c = -1,
      d = function() {
        for (r = r || e.once, o = t = !0; a.length; c = -1)
          for (n = a.shift(); ++c < s.length; )
            !1 === s[c].apply(n[0], n[1]) &&
              e.stopOnFalse &&
              ((c = s.length), (n = !1));
        e.memory || (n = !1), (t = !1), r && (s = n ? [] : "");
      },
      u = {
        add: function() {
          return (
            s &&
              (n && !t && ((c = s.length - 1), a.push(n)),
              (function t(n) {
                xe.each(n, function(n, o) {
                  me(o)
                    ? (e.unique && u.has(o)) || s.push(o)
                    : o && o.length && "string" !== i(o) && t(o);
                });
              })(arguments),
              n && !t && d()),
            this
          );
        },
        remove: function() {
          return (
            xe.each(arguments, function(e, t) {
              for (var n; (n = xe.inArray(t, s, n)) > -1; )
                s.splice(n, 1), n <= c && c--;
            }),
            this
          );
        },
        has: function(e) {
          return e ? xe.inArray(e, s) > -1 : s.length > 0;
        },
        empty: function() {
          return s && (s = []), this;
        },
        disable: function() {
          return (r = a = []), (s = n = ""), this;
        },
        disabled: function() {
          return !s;
        },
        lock: function() {
          return (r = a = []), n || t || (s = n = ""), this;
        },
        locked: function() {
          return !!r;
        },
        fireWith: function(e, n) {
          return (
            r ||
              ((n = [e, (n = n || []).slice ? n.slice() : n]),
              a.push(n),
              t || d()),
            this
          );
        },
        fire: function() {
          return u.fireWith(this, arguments), this;
        },
        fired: function() {
          return !!o;
        }
      };
    return u;
  }),
    xe.extend({
      Deferred: function(t) {
        var n = [
            [
              "notify",
              "progress",
              xe.Callbacks("memory"),
              xe.Callbacks("memory"),
              2
            ],
            [
              "resolve",
              "done",
              xe.Callbacks("once memory"),
              xe.Callbacks("once memory"),
              0,
              "resolved"
            ],
            [
              "reject",
              "fail",
              xe.Callbacks("once memory"),
              xe.Callbacks("once memory"),
              1,
              "rejected"
            ]
          ],
          i = "pending",
          o = {
            state: function() {
              return i;
            },
            always: function() {
              return r.done(arguments).fail(arguments), this;
            },
            catch: function(e) {
              return o.then(null, e);
            },
            pipe: function() {
              var e = arguments;
              return xe
                .Deferred(function(t) {
                  xe.each(n, function(n, i) {
                    var o = me(e[i[4]]) && e[i[4]];
                    r[i[1]](function() {
                      var e = o && o.apply(this, arguments);
                      e && me(e.promise)
                        ? e
                            .promise()
                            .progress(t.notify)
                            .done(t.resolve)
                            .fail(t.reject)
                        : t[i[0] + "With"](this, o ? [e] : arguments);
                    });
                  }),
                    (e = null);
                })
                .promise();
            },
            then: function(t, i, o) {
              function r(t, n, i, o) {
                return function() {
                  var a = this,
                    l = arguments,
                    u = function() {
                      var e, u;
                      if (!(t < s)) {
                        if ((e = i.apply(a, l)) === n.promise())
                          throw new TypeError("Thenable self-resolution");
                        (u =
                          e &&
                          ("object" == typeof e || "function" == typeof e) &&
                          e.then),
                          me(u)
                            ? o
                              ? u.call(e, r(s, n, c, o), r(s, n, d, o))
                              : (s++,
                                u.call(
                                  e,
                                  r(s, n, c, o),
                                  r(s, n, d, o),
                                  r(s, n, c, n.notifyWith)
                                ))
                            : (i !== c && ((a = void 0), (l = [e])),
                              (o || n.resolveWith)(a, l));
                      }
                    },
                    p = o
                      ? u
                      : function() {
                          try {
                            u();
                          } catch (e) {
                            xe.Deferred.exceptionHook &&
                              xe.Deferred.exceptionHook(e, p.stackTrace),
                              t + 1 >= s &&
                                (i !== d && ((a = void 0), (l = [e])),
                                n.rejectWith(a, l));
                          }
                        };
                  t
                    ? p()
                    : (xe.Deferred.getStackHook &&
                        (p.stackTrace = xe.Deferred.getStackHook()),
                      e.setTimeout(p));
                };
              }
              var s = 0;
              return xe
                .Deferred(function(e) {
                  n[0][3].add(r(0, e, me(o) ? o : c, e.notifyWith)),
                    n[1][3].add(r(0, e, me(t) ? t : c)),
                    n[2][3].add(r(0, e, me(i) ? i : d));
                })
                .promise();
            },
            promise: function(e) {
              return null != e ? xe.extend(e, o) : o;
            }
          },
          r = {};
        return (
          xe.each(n, function(e, t) {
            var s = t[2],
              a = t[5];
            (o[t[1]] = s.add),
              a &&
                s.add(
                  function() {
                    i = a;
                  },
                  n[3 - e][2].disable,
                  n[3 - e][3].disable,
                  n[0][2].lock,
                  n[0][3].lock
                ),
              s.add(t[3].fire),
              (r[t[0]] = function() {
                return (
                  r[t[0] + "With"](this === r ? void 0 : this, arguments), this
                );
              }),
              (r[t[0] + "With"] = s.fireWith);
          }),
          o.promise(r),
          t && t.call(r, r),
          r
        );
      },
      when: function(e) {
        var t = arguments.length,
          n = t,
          i = Array(n),
          o = le.call(arguments),
          r = xe.Deferred(),
          s = function(e) {
            return function(n) {
              (i[e] = this),
                (o[e] = arguments.length > 1 ? le.call(arguments) : n),
                --t || r.resolveWith(i, o);
            };
          };
        if (
          t <= 1 &&
          (u(e, r.done(s(n)).resolve, r.reject, !t),
          "pending" === r.state() || me(o[n] && o[n].then))
        )
          return r.then();
        for (; n--; ) u(o[n], s(n), r.reject);
        return r.promise();
      }
    });
  var Le = /^(Eval|Internal|Range|Reference|Syntax|Type|URI)Error$/;
  (xe.Deferred.exceptionHook = function(t, n) {
    e.console &&
      e.console.warn &&
      t &&
      Le.test(t.name) &&
      e.console.warn("jQuery.Deferred exception: " + t.message, t.stack, n);
  }),
    (xe.readyException = function(t) {
      e.setTimeout(function() {
        throw t;
      });
    });
  var Oe = xe.Deferred();
  (xe.fn.ready = function(e) {
    return (
      Oe.then(e).catch(function(e) {
        xe.readyException(e);
      }),
      this
    );
  }),
    xe.extend({
      isReady: !1,
      readyWait: 1,
      ready: function(e) {
        (!0 === e ? --xe.readyWait : xe.isReady) ||
          ((xe.isReady = !0),
          (!0 !== e && --xe.readyWait > 0) || Oe.resolveWith(se, [xe]));
      }
    }),
    (xe.ready.then = Oe.then),
    "complete" === se.readyState ||
    ("loading" !== se.readyState && !se.documentElement.doScroll)
      ? e.setTimeout(xe.ready)
      : (se.addEventListener("DOMContentLoaded", p),
        e.addEventListener("load", p));
  var Pe = function(e, t, n, o, r, s, a) {
      var l = 0,
        c = e.length,
        d = null == n;
      if ("object" === i(n)) {
        r = !0;
        for (l in n) Pe(e, t, l, n[l], !0, s, a);
      } else if (
        void 0 !== o &&
        ((r = !0),
        me(o) || (a = !0),
        d &&
          (a
            ? (t.call(e, o), (t = null))
            : ((d = t),
              (t = function(e, t, n) {
                return d.call(xe(e), n);
              }))),
        t)
      )
        for (; l < c; l++) t(e[l], n, a ? o : o.call(e[l], l, t(e[l], n)));
      return r ? e : d ? t.call(e) : c ? t(e[0], n) : s;
    },
    qe = /^-ms-/,
    Me = /-([a-z])/g,
    Ie = function(e) {
      return 1 === e.nodeType || 9 === e.nodeType || !+e.nodeType;
    };
  (v.uid = 1),
    (v.prototype = {
      cache: function(e) {
        var t = e[this.expando];
        return (
          t ||
            ((t = {}),
            Ie(e) &&
              (e.nodeType
                ? (e[this.expando] = t)
                : Object.defineProperty(e, this.expando, {
                    value: t,
                    configurable: !0
                  }))),
          t
        );
      },
      set: function(e, t, n) {
        var i,
          o = this.cache(e);
        if ("string" == typeof t) o[h(t)] = n;
        else for (i in t) o[h(i)] = t[i];
        return o;
      },
      get: function(e, t) {
        return void 0 === t
          ? this.cache(e)
          : e[this.expando] && e[this.expando][h(t)];
      },
      access: function(e, t, n) {
        return void 0 === t || (t && "string" == typeof t && void 0 === n)
          ? this.get(e, t)
          : (this.set(e, t, n), void 0 !== n ? n : t);
      },
      remove: function(e, t) {
        var n,
          i = e[this.expando];
        if (void 0 !== i) {
          if (void 0 !== t) {
            n = (t = Array.isArray(t)
              ? t.map(h)
              : (t = h(t)) in i
              ? [t]
              : t.match(Ne) || []).length;
            for (; n--; ) delete i[t[n]];
          }
          (void 0 === t || xe.isEmptyObject(i)) &&
            (e.nodeType ? (e[this.expando] = void 0) : delete e[this.expando]);
        }
      },
      hasData: function(e) {
        var t = e[this.expando];
        return void 0 !== t && !xe.isEmptyObject(t);
      }
    });
  var ze = new v(),
    We = new v(),
    Re = /^(?:\{[\w\W]*\}|\[[\w\W]*\])$/,
    Be = /[A-Z]/g;
  xe.extend({
    hasData: function(e) {
      return We.hasData(e) || ze.hasData(e);
    },
    data: function(e, t, n) {
      return We.access(e, t, n);
    },
    removeData: function(e, t) {
      We.remove(e, t);
    },
    _data: function(e, t, n) {
      return ze.access(e, t, n);
    },
    _removeData: function(e, t) {
      ze.remove(e, t);
    }
  }),
    xe.fn.extend({
      data: function(e, t) {
        var n,
          i,
          o,
          r = this[0],
          s = r && r.attributes;
        if (void 0 === e) {
          if (
            this.length &&
            ((o = We.get(r)), 1 === r.nodeType && !ze.get(r, "hasDataAttrs"))
          ) {
            for (n = s.length; n--; )
              s[n] &&
                0 === (i = s[n].name).indexOf("data-") &&
                ((i = h(i.slice(5))), y(r, i, o[i]));
            ze.set(r, "hasDataAttrs", !0);
          }
          return o;
        }
        return "object" == typeof e
          ? this.each(function() {
              We.set(this, e);
            })
          : Pe(
              this,
              function(t) {
                var n;
                if (r && void 0 === t) {
                  if (void 0 !== (n = We.get(r, e))) return n;
                  if (void 0 !== (n = y(r, e))) return n;
                } else
                  this.each(function() {
                    We.set(this, e, t);
                  });
              },
              null,
              t,
              arguments.length > 1,
              null,
              !0
            );
      },
      removeData: function(e) {
        return this.each(function() {
          We.remove(this, e);
        });
      }
    }),
    xe.extend({
      queue: function(e, t, n) {
        var i;
        if (e)
          return (
            (t = (t || "fx") + "queue"),
            (i = ze.get(e, t)),
            n &&
              (!i || Array.isArray(n)
                ? (i = ze.access(e, t, xe.makeArray(n)))
                : i.push(n)),
            i || []
          );
      },
      dequeue: function(e, t) {
        t = t || "fx";
        var n = xe.queue(e, t),
          i = n.length,
          o = n.shift(),
          r = xe._queueHooks(e, t),
          s = function() {
            xe.dequeue(e, t);
          };
        "inprogress" === o && ((o = n.shift()), i--),
          o &&
            ("fx" === t && n.unshift("inprogress"),
            delete r.stop,
            o.call(e, s, r)),
          !i && r && r.empty.fire();
      },
      _queueHooks: function(e, t) {
        var n = t + "queueHooks";
        return (
          ze.get(e, n) ||
          ze.access(e, n, {
            empty: xe.Callbacks("once memory").add(function() {
              ze.remove(e, [t + "queue", n]);
            })
          })
        );
      }
    }),
    xe.fn.extend({
      queue: function(e, t) {
        var n = 2;
        return (
          "string" != typeof e && ((t = e), (e = "fx"), n--),
          arguments.length < n
            ? xe.queue(this[0], e)
            : void 0 === t
            ? this
            : this.each(function() {
                var n = xe.queue(this, e, t);
                xe._queueHooks(this, e),
                  "fx" === e && "inprogress" !== n[0] && xe.dequeue(this, e);
              })
        );
      },
      dequeue: function(e) {
        return this.each(function() {
          xe.dequeue(this, e);
        });
      },
      clearQueue: function(e) {
        return this.queue(e || "fx", []);
      },
      promise: function(e, t) {
        var n,
          i = 1,
          o = xe.Deferred(),
          r = this,
          s = this.length,
          a = function() {
            --i || o.resolveWith(r, [r]);
          };
        for (
          "string" != typeof e && ((t = e), (e = void 0)), e = e || "fx";
          s--;

        )
          (n = ze.get(r[s], e + "queueHooks")) &&
            n.empty &&
            (i++, n.empty.add(a));
        return a(), o.promise(t);
      }
    });
  var Fe = /[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source,
    _e = new RegExp("^(?:([+-])=|)(" + Fe + ")([a-z%]*)$", "i"),
    Ue = ["Top", "Right", "Bottom", "Left"],
    Xe = function(e, t) {
      return (
        "none" === (e = t || e).style.display ||
        ("" === e.style.display &&
          xe.contains(e.ownerDocument, e) &&
          "none" === xe.css(e, "display"))
      );
    },
    Ye = function(e, t, n, i) {
      var o,
        r,
        s = {};
      for (r in t) (s[r] = e.style[r]), (e.style[r] = t[r]);
      o = n.apply(e, i || []);
      for (r in t) e.style[r] = s[r];
      return o;
    },
    Ve = {};
  xe.fn.extend({
    show: function() {
      return b(this, !0);
    },
    hide: function() {
      return b(this);
    },
    toggle: function(e) {
      return "boolean" == typeof e
        ? e
          ? this.show()
          : this.hide()
        : this.each(function() {
            Xe(this) ? xe(this).show() : xe(this).hide();
          });
    }
  });
  var Ge = /^(?:checkbox|radio)$/i,
    Qe = /<([a-z][^\/\0>\x20\t\r\n\f]+)/i,
    Je = /^$|^module$|\/(?:java|ecma)script/i,
    Ke = {
      option: [1, "<select multiple='multiple'>", "</select>"],
      thead: [1, "<table>", "</table>"],
      col: [2, "<table><colgroup>", "</colgroup></table>"],
      tr: [2, "<table><tbody>", "</tbody></table>"],
      td: [3, "<table><tbody><tr>", "</tr></tbody></table>"],
      _default: [0, "", ""]
    };
  (Ke.optgroup = Ke.option),
    (Ke.tbody = Ke.tfoot = Ke.colgroup = Ke.caption = Ke.thead),
    (Ke.th = Ke.td);
  var Ze = /<|&#?\w+;/;
  !(function() {
    var e = se.createDocumentFragment().appendChild(se.createElement("div")),
      t = se.createElement("input");
    t.setAttribute("type", "radio"),
      t.setAttribute("checked", "checked"),
      t.setAttribute("name", "t"),
      e.appendChild(t),
      (ye.checkClone = e.cloneNode(!0).cloneNode(!0).lastChild.checked),
      (e.innerHTML = "<textarea>x</textarea>"),
      (ye.noCloneChecked = !!e.cloneNode(!0).lastChild.defaultValue);
  })();
  var et = se.documentElement,
    tt = /^key/,
    nt = /^(?:mouse|pointer|contextmenu|drag|drop)|click/,
    it = /^([^.]*)(?:\.(.+)|)/;
  (xe.event = {
    global: {},
    add: function(e, t, n, i, o) {
      var r,
        s,
        a,
        l,
        c,
        d,
        u,
        p,
        f,
        h,
        v,
        g = ze.get(e);
      if (g)
        for (
          n.handler && ((n = (r = n).handler), (o = r.selector)),
            o && xe.find.matchesSelector(et, o),
            n.guid || (n.guid = xe.guid++),
            (l = g.events) || (l = g.events = {}),
            (s = g.handle) ||
              (s = g.handle = function(t) {
                return void 0 !== xe && xe.event.triggered !== t.type
                  ? xe.event.dispatch.apply(e, arguments)
                  : void 0;
              }),
            c = (t = (t || "").match(Ne) || [""]).length;
          c--;

        )
          (f = v = (a = it.exec(t[c]) || [])[1]),
            (h = (a[2] || "").split(".").sort()),
            f &&
              ((u = xe.event.special[f] || {}),
              (f = (o ? u.delegateType : u.bindType) || f),
              (u = xe.event.special[f] || {}),
              (d = xe.extend(
                {
                  type: f,
                  origType: v,
                  data: i,
                  handler: n,
                  guid: n.guid,
                  selector: o,
                  needsContext: o && xe.expr.match.needsContext.test(o),
                  namespace: h.join(".")
                },
                r
              )),
              (p = l[f]) ||
                (((p = l[f] = []).delegateCount = 0),
                (u.setup && !1 !== u.setup.call(e, i, h, s)) ||
                  (e.addEventListener && e.addEventListener(f, s))),
              u.add &&
                (u.add.call(e, d), d.handler.guid || (d.handler.guid = n.guid)),
              o ? p.splice(p.delegateCount++, 0, d) : p.push(d),
              (xe.event.global[f] = !0));
    },
    remove: function(e, t, n, i, o) {
      var r,
        s,
        a,
        l,
        c,
        d,
        u,
        p,
        f,
        h,
        v,
        g = ze.hasData(e) && ze.get(e);
      if (g && (l = g.events)) {
        for (c = (t = (t || "").match(Ne) || [""]).length; c--; )
          if (
            ((a = it.exec(t[c]) || []),
            (f = v = a[1]),
            (h = (a[2] || "").split(".").sort()),
            f)
          ) {
            for (
              u = xe.event.special[f] || {},
                p = l[(f = (i ? u.delegateType : u.bindType) || f)] || [],
                a =
                  a[2] &&
                  new RegExp("(^|\\.)" + h.join("\\.(?:.*\\.|)") + "(\\.|$)"),
                s = r = p.length;
              r--;

            )
              (d = p[r]),
                (!o && v !== d.origType) ||
                  (n && n.guid !== d.guid) ||
                  (a && !a.test(d.namespace)) ||
                  (i && i !== d.selector && ("**" !== i || !d.selector)) ||
                  (p.splice(r, 1),
                  d.selector && p.delegateCount--,
                  u.remove && u.remove.call(e, d));
            s &&
              !p.length &&
              ((u.teardown && !1 !== u.teardown.call(e, h, g.handle)) ||
                xe.removeEvent(e, f, g.handle),
              delete l[f]);
          } else for (f in l) xe.event.remove(e, f + t[c], n, i, !0);
        xe.isEmptyObject(l) && ze.remove(e, "handle events");
      }
    },
    dispatch: function(e) {
      var t,
        n,
        i,
        o,
        r,
        s,
        a = xe.event.fix(e),
        l = new Array(arguments.length),
        c = (ze.get(this, "events") || {})[a.type] || [],
        d = xe.event.special[a.type] || {};
      for (l[0] = a, t = 1; t < arguments.length; t++) l[t] = arguments[t];
      if (
        ((a.delegateTarget = this),
        !d.preDispatch || !1 !== d.preDispatch.call(this, a))
      ) {
        for (
          s = xe.event.handlers.call(this, a, c), t = 0;
          (o = s[t++]) && !a.isPropagationStopped();

        )
          for (
            a.currentTarget = o.elem, n = 0;
            (r = o.handlers[n++]) && !a.isImmediatePropagationStopped();

          )
            (a.rnamespace && !a.rnamespace.test(r.namespace)) ||
              ((a.handleObj = r),
              (a.data = r.data),
              void 0 !==
                (i = (
                  (xe.event.special[r.origType] || {}).handle || r.handler
                ).apply(o.elem, l)) &&
                !1 === (a.result = i) &&
                (a.preventDefault(), a.stopPropagation()));
        return d.postDispatch && d.postDispatch.call(this, a), a.result;
      }
    },
    handlers: function(e, t) {
      var n,
        i,
        o,
        r,
        s,
        a = [],
        l = t.delegateCount,
        c = e.target;
      if (l && c.nodeType && !("click" === e.type && e.button >= 1))
        for (; c !== this; c = c.parentNode || this)
          if (1 === c.nodeType && ("click" !== e.type || !0 !== c.disabled)) {
            for (r = [], s = {}, n = 0; n < l; n++)
              void 0 === s[(o = (i = t[n]).selector + " ")] &&
                (s[o] = i.needsContext
                  ? xe(o, this).index(c) > -1
                  : xe.find(o, this, null, [c]).length),
                s[o] && r.push(i);
            r.length && a.push({ elem: c, handlers: r });
          }
      return (
        (c = this), l < t.length && a.push({ elem: c, handlers: t.slice(l) }), a
      );
    },
    addProp: function(e, t) {
      Object.defineProperty(xe.Event.prototype, e, {
        enumerable: !0,
        configurable: !0,
        get: me(t)
          ? function() {
              if (this.originalEvent) return t(this.originalEvent);
            }
          : function() {
              if (this.originalEvent) return this.originalEvent[e];
            },
        set: function(t) {
          Object.defineProperty(this, e, {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: t
          });
        }
      });
    },
    fix: function(e) {
      return e[xe.expando] ? e : new xe.Event(e);
    },
    special: {
      load: { noBubble: !0 },
      focus: {
        trigger: function() {
          if (this !== $() && this.focus) return this.focus(), !1;
        },
        delegateType: "focusin"
      },
      blur: {
        trigger: function() {
          if (this === $() && this.blur) return this.blur(), !1;
        },
        delegateType: "focusout"
      },
      click: {
        trigger: function() {
          if ("checkbox" === this.type && this.click && r(this, "input"))
            return this.click(), !1;
        },
        _default: function(e) {
          return r(e.target, "a");
        }
      },
      beforeunload: {
        postDispatch: function(e) {
          void 0 !== e.result &&
            e.originalEvent &&
            (e.originalEvent.returnValue = e.result);
        }
      }
    }
  }),
    (xe.removeEvent = function(e, t, n) {
      e.removeEventListener && e.removeEventListener(t, n);
    }),
    (xe.Event = function(e, t) {
      if (!(this instanceof xe.Event)) return new xe.Event(e, t);
      e && e.type
        ? ((this.originalEvent = e),
          (this.type = e.type),
          (this.isDefaultPrevented =
            e.defaultPrevented ||
            (void 0 === e.defaultPrevented && !1 === e.returnValue)
              ? S
              : C),
          (this.target =
            e.target && 3 === e.target.nodeType
              ? e.target.parentNode
              : e.target),
          (this.currentTarget = e.currentTarget),
          (this.relatedTarget = e.relatedTarget))
        : (this.type = e),
        t && xe.extend(this, t),
        (this.timeStamp = (e && e.timeStamp) || Date.now()),
        (this[xe.expando] = !0);
    }),
    (xe.Event.prototype = {
      constructor: xe.Event,
      isDefaultPrevented: C,
      isPropagationStopped: C,
      isImmediatePropagationStopped: C,
      isSimulated: !1,
      preventDefault: function() {
        var e = this.originalEvent;
        (this.isDefaultPrevented = S),
          e && !this.isSimulated && e.preventDefault();
      },
      stopPropagation: function() {
        var e = this.originalEvent;
        (this.isPropagationStopped = S),
          e && !this.isSimulated && e.stopPropagation();
      },
      stopImmediatePropagation: function() {
        var e = this.originalEvent;
        (this.isImmediatePropagationStopped = S),
          e && !this.isSimulated && e.stopImmediatePropagation(),
          this.stopPropagation();
      }
    }),
    xe.each(
      {
        altKey: !0,
        bubbles: !0,
        cancelable: !0,
        changedTouches: !0,
        ctrlKey: !0,
        detail: !0,
        eventPhase: !0,
        metaKey: !0,
        pageX: !0,
        pageY: !0,
        shiftKey: !0,
        view: !0,
        char: !0,
        charCode: !0,
        key: !0,
        keyCode: !0,
        button: !0,
        buttons: !0,
        clientX: !0,
        clientY: !0,
        offsetX: !0,
        offsetY: !0,
        pointerId: !0,
        pointerType: !0,
        screenX: !0,
        screenY: !0,
        targetTouches: !0,
        toElement: !0,
        touches: !0,
        which: function(e) {
          var t = e.button;
          return null == e.which && tt.test(e.type)
            ? null != e.charCode
              ? e.charCode
              : e.keyCode
            : !e.which && void 0 !== t && nt.test(e.type)
            ? 1 & t
              ? 1
              : 2 & t
              ? 3
              : 4 & t
              ? 2
              : 0
            : e.which;
        }
      },
      xe.event.addProp
    ),
    xe.each(
      {
        mouseenter: "mouseover",
        mouseleave: "mouseout",
        pointerenter: "pointerover",
        pointerleave: "pointerout"
      },
      function(e, t) {
        xe.event.special[e] = {
          delegateType: t,
          bindType: t,
          handle: function(e) {
            var n,
              i = this,
              o = e.relatedTarget,
              r = e.handleObj;
            return (
              (o && (o === i || xe.contains(i, o))) ||
                ((e.type = r.origType),
                (n = r.handler.apply(this, arguments)),
                (e.type = t)),
              n
            );
          }
        };
      }
    ),
    xe.fn.extend({
      on: function(e, t, n, i) {
        return A(this, e, t, n, i);
      },
      one: function(e, t, n, i) {
        return A(this, e, t, n, i, 1);
      },
      off: function(e, t, n) {
        var i, o;
        if (e && e.preventDefault && e.handleObj)
          return (
            (i = e.handleObj),
            xe(e.delegateTarget).off(
              i.namespace ? i.origType + "." + i.namespace : i.origType,
              i.selector,
              i.handler
            ),
            this
          );
        if ("object" == typeof e) {
          for (o in e) this.off(o, t, e[o]);
          return this;
        }
        return (
          (!1 !== t && "function" != typeof t) || ((n = t), (t = void 0)),
          !1 === n && (n = C),
          this.each(function() {
            xe.event.remove(this, e, n, t);
          })
        );
      }
    });
  var ot = /<(?!area|br|col|embed|hr|img|input|link|meta|param)(([a-z][^\/\0>\x20\t\r\n\f]*)[^>]*)\/>/gi,
    rt = /<script|<style|<link/i,
    st = /checked\s*(?:[^=]|=\s*.checked.)/i,
    at = /^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g;
  xe.extend({
    htmlPrefilter: function(e) {
      return e.replace(ot, "<$1></$2>");
    },
    clone: function(e, t, n) {
      var i,
        o,
        r,
        s,
        a = e.cloneNode(!0),
        l = xe.contains(e.ownerDocument, e);
      if (
        !(
          ye.noCloneChecked ||
          (1 !== e.nodeType && 11 !== e.nodeType) ||
          xe.isXMLDoc(e)
        )
      )
        for (s = x(a), i = 0, o = (r = x(e)).length; i < o; i++) N(r[i], s[i]);
      if (t)
        if (n)
          for (r = r || x(e), s = s || x(a), i = 0, o = r.length; i < o; i++)
            H(r[i], s[i]);
        else H(e, a);
      return (s = x(a, "script")).length > 0 && k(s, !l && x(e, "script")), a;
    },
    cleanData: function(e) {
      for (var t, n, i, o = xe.event.special, r = 0; void 0 !== (n = e[r]); r++)
        if (Ie(n)) {
          if ((t = n[ze.expando])) {
            if (t.events)
              for (i in t.events)
                o[i] ? xe.event.remove(n, i) : xe.removeEvent(n, i, t.handle);
            n[ze.expando] = void 0;
          }
          n[We.expando] && (n[We.expando] = void 0);
        }
    }
  }),
    xe.fn.extend({
      detach: function(e) {
        return O(this, e, !0);
      },
      remove: function(e) {
        return O(this, e);
      },
      text: function(e) {
        return Pe(
          this,
          function(e) {
            return void 0 === e
              ? xe.text(this)
              : this.empty().each(function() {
                  (1 !== this.nodeType &&
                    11 !== this.nodeType &&
                    9 !== this.nodeType) ||
                    (this.textContent = e);
                });
          },
          null,
          e,
          arguments.length
        );
      },
      append: function() {
        return L(this, arguments, function(e) {
          (1 !== this.nodeType &&
            11 !== this.nodeType &&
            9 !== this.nodeType) ||
            E(this, e).appendChild(e);
        });
      },
      prepend: function() {
        return L(this, arguments, function(e) {
          if (
            1 === this.nodeType ||
            11 === this.nodeType ||
            9 === this.nodeType
          ) {
            var t = E(this, e);
            t.insertBefore(e, t.firstChild);
          }
        });
      },
      before: function() {
        return L(this, arguments, function(e) {
          this.parentNode && this.parentNode.insertBefore(e, this);
        });
      },
      after: function() {
        return L(this, arguments, function(e) {
          this.parentNode && this.parentNode.insertBefore(e, this.nextSibling);
        });
      },
      empty: function() {
        for (var e, t = 0; null != (e = this[t]); t++)
          1 === e.nodeType && (xe.cleanData(x(e, !1)), (e.textContent = ""));
        return this;
      },
      clone: function(e, t) {
        return (
          (e = null != e && e),
          (t = null == t ? e : t),
          this.map(function() {
            return xe.clone(this, e, t);
          })
        );
      },
      html: function(e) {
        return Pe(
          this,
          function(e) {
            var t = this[0] || {},
              n = 0,
              i = this.length;
            if (void 0 === e && 1 === t.nodeType) return t.innerHTML;
            if (
              "string" == typeof e &&
              !rt.test(e) &&
              !Ke[(Qe.exec(e) || ["", ""])[1].toLowerCase()]
            ) {
              e = xe.htmlPrefilter(e);
              try {
                for (; n < i; n++)
                  1 === (t = this[n] || {}).nodeType &&
                    (xe.cleanData(x(t, !1)), (t.innerHTML = e));
                t = 0;
              } catch (e) {}
            }
            t && this.empty().append(e);
          },
          null,
          e,
          arguments.length
        );
      },
      replaceWith: function() {
        var e = [];
        return L(
          this,
          arguments,
          function(t) {
            var n = this.parentNode;
            xe.inArray(this, e) < 0 &&
              (xe.cleanData(x(this)), n && n.replaceChild(t, this));
          },
          e
        );
      }
    }),
    xe.each(
      {
        appendTo: "append",
        prependTo: "prepend",
        insertBefore: "before",
        insertAfter: "after",
        replaceAll: "replaceWith"
      },
      function(e, t) {
        xe.fn[e] = function(e) {
          for (var n, i = [], o = xe(e), r = o.length - 1, s = 0; s <= r; s++)
            (n = s === r ? this : this.clone(!0)),
              xe(o[s])[t](n),
              de.apply(i, n.get());
          return this.pushStack(i);
        };
      }
    );
  var lt = new RegExp("^(" + Fe + ")(?!px)[a-z%]+$", "i"),
    ct = function(t) {
      var n = t.ownerDocument.defaultView;
      return (n && n.opener) || (n = e), n.getComputedStyle(t);
    },
    dt = new RegExp(Ue.join("|"), "i");
  !(function() {
    function t() {
      if (c) {
        (l.style.cssText =
          "position:absolute;left:-11111px;width:60px;margin-top:1px;padding:0;border:0"),
          (c.style.cssText =
            "position:relative;display:block;box-sizing:border-box;overflow:scroll;margin:auto;border:1px;padding:1px;width:60%;top:1%"),
          et.appendChild(l).appendChild(c);
        var t = e.getComputedStyle(c);
        (i = "1%" !== t.top),
          (a = 12 === n(t.marginLeft)),
          (c.style.right = "60%"),
          (s = 36 === n(t.right)),
          (o = 36 === n(t.width)),
          (c.style.position = "absolute"),
          (r = 36 === c.offsetWidth || "absolute"),
          et.removeChild(l),
          (c = null);
      }
    }
    function n(e) {
      return Math.round(parseFloat(e));
    }
    var i,
      o,
      r,
      s,
      a,
      l = se.createElement("div"),
      c = se.createElement("div");
    c.style &&
      ((c.style.backgroundClip = "content-box"),
      (c.cloneNode(!0).style.backgroundClip = ""),
      (ye.clearCloneStyle = "content-box" === c.style.backgroundClip),
      xe.extend(ye, {
        boxSizingReliable: function() {
          return t(), o;
        },
        pixelBoxStyles: function() {
          return t(), s;
        },
        pixelPosition: function() {
          return t(), i;
        },
        reliableMarginLeft: function() {
          return t(), a;
        },
        scrollboxSize: function() {
          return t(), r;
        }
      }));
  })();
  var ut = /^(none|table(?!-c[ea]).+)/,
    pt = /^--/,
    ft = { position: "absolute", visibility: "hidden", display: "block" },
    ht = { letterSpacing: "0", fontWeight: "400" },
    vt = ["Webkit", "Moz", "ms"],
    gt = se.createElement("div").style;
  xe.extend({
    cssHooks: {
      opacity: {
        get: function(e, t) {
          if (t) {
            var n = P(e, "opacity");
            return "" === n ? "1" : n;
          }
        }
      }
    },
    cssNumber: {
      animationIterationCount: !0,
      columnCount: !0,
      fillOpacity: !0,
      flexGrow: !0,
      flexShrink: !0,
      fontWeight: !0,
      lineHeight: !0,
      opacity: !0,
      order: !0,
      orphans: !0,
      widows: !0,
      zIndex: !0,
      zoom: !0
    },
    cssProps: {},
    style: function(e, t, n, i) {
      if (e && 3 !== e.nodeType && 8 !== e.nodeType && e.style) {
        var o,
          r,
          s,
          a = h(t),
          l = pt.test(t),
          c = e.style;
        if (
          (l || (t = I(a)),
          (s = xe.cssHooks[t] || xe.cssHooks[a]),
          void 0 === n)
        )
          return s && "get" in s && void 0 !== (o = s.get(e, !1, i)) ? o : c[t];
        "string" == (r = typeof n) &&
          (o = _e.exec(n)) &&
          o[1] &&
          ((n = m(e, t, o)), (r = "number")),
          null != n &&
            n === n &&
            ("number" === r &&
              (n += (o && o[3]) || (xe.cssNumber[a] ? "" : "px")),
            ye.clearCloneStyle ||
              "" !== n ||
              0 !== t.indexOf("background") ||
              (c[t] = "inherit"),
            (s && "set" in s && void 0 === (n = s.set(e, n, i))) ||
              (l ? c.setProperty(t, n) : (c[t] = n)));
      }
    },
    css: function(e, t, n, i) {
      var o,
        r,
        s,
        a = h(t);
      return (
        pt.test(t) || (t = I(a)),
        (s = xe.cssHooks[t] || xe.cssHooks[a]) &&
          "get" in s &&
          (o = s.get(e, !0, n)),
        void 0 === o && (o = P(e, t, i)),
        "normal" === o && t in ht && (o = ht[t]),
        "" === n || n
          ? ((r = parseFloat(o)), !0 === n || isFinite(r) ? r || 0 : o)
          : o
      );
    }
  }),
    xe.each(["height", "width"], function(e, t) {
      xe.cssHooks[t] = {
        get: function(e, n, i) {
          if (n)
            return !ut.test(xe.css(e, "display")) ||
              (e.getClientRects().length && e.getBoundingClientRect().width)
              ? R(e, t, i)
              : Ye(e, ft, function() {
                  return R(e, t, i);
                });
        },
        set: function(e, n, i) {
          var o,
            r = ct(e),
            s = "border-box" === xe.css(e, "boxSizing", !1, r),
            a = i && W(e, t, i, s, r);
          return (
            s &&
              ye.scrollboxSize() === r.position &&
              (a -= Math.ceil(
                e["offset" + t[0].toUpperCase() + t.slice(1)] -
                  parseFloat(r[t]) -
                  W(e, t, "border", !1, r) -
                  0.5
              )),
            a &&
              (o = _e.exec(n)) &&
              "px" !== (o[3] || "px") &&
              ((e.style[t] = n), (n = xe.css(e, t))),
            z(e, n, a)
          );
        }
      };
    }),
    (xe.cssHooks.marginLeft = q(ye.reliableMarginLeft, function(e, t) {
      if (t)
        return (
          (parseFloat(P(e, "marginLeft")) ||
            e.getBoundingClientRect().left -
              Ye(e, { marginLeft: 0 }, function() {
                return e.getBoundingClientRect().left;
              })) + "px"
        );
    })),
    xe.each({ margin: "", padding: "", border: "Width" }, function(e, t) {
      (xe.cssHooks[e + t] = {
        expand: function(n) {
          for (
            var i = 0, o = {}, r = "string" == typeof n ? n.split(" ") : [n];
            i < 4;
            i++
          )
            o[e + Ue[i] + t] = r[i] || r[i - 2] || r[0];
          return o;
        }
      }),
        "margin" !== e && (xe.cssHooks[e + t].set = z);
    }),
    xe.fn.extend({
      css: function(e, t) {
        return Pe(
          this,
          function(e, t, n) {
            var i,
              o,
              r = {},
              s = 0;
            if (Array.isArray(t)) {
              for (i = ct(e), o = t.length; s < o; s++)
                r[t[s]] = xe.css(e, t[s], !1, i);
              return r;
            }
            return void 0 !== n ? xe.style(e, t, n) : xe.css(e, t);
          },
          e,
          t,
          arguments.length > 1
        );
      }
    }),
    (xe.Tween = B),
    (B.prototype = {
      constructor: B,
      init: function(e, t, n, i, o, r) {
        (this.elem = e),
          (this.prop = n),
          (this.easing = o || xe.easing._default),
          (this.options = t),
          (this.start = this.now = this.cur()),
          (this.end = i),
          (this.unit = r || (xe.cssNumber[n] ? "" : "px"));
      },
      cur: function() {
        var e = B.propHooks[this.prop];
        return e && e.get ? e.get(this) : B.propHooks._default.get(this);
      },
      run: function(e) {
        var t,
          n = B.propHooks[this.prop];
        return (
          this.options.duration
            ? (this.pos = t = xe.easing[this.easing](
                e,
                this.options.duration * e,
                0,
                1,
                this.options.duration
              ))
            : (this.pos = t = e),
          (this.now = (this.end - this.start) * t + this.start),
          this.options.step &&
            this.options.step.call(this.elem, this.now, this),
          n && n.set ? n.set(this) : B.propHooks._default.set(this),
          this
        );
      }
    }),
    (B.prototype.init.prototype = B.prototype),
    (B.propHooks = {
      _default: {
        get: function(e) {
          var t;
          return 1 !== e.elem.nodeType ||
            (null != e.elem[e.prop] && null == e.elem.style[e.prop])
            ? e.elem[e.prop]
            : (t = xe.css(e.elem, e.prop, "")) && "auto" !== t
            ? t
            : 0;
        },
        set: function(e) {
          xe.fx.step[e.prop]
            ? xe.fx.step[e.prop](e)
            : 1 !== e.elem.nodeType ||
              (null == e.elem.style[xe.cssProps[e.prop]] &&
                !xe.cssHooks[e.prop])
            ? (e.elem[e.prop] = e.now)
            : xe.style(e.elem, e.prop, e.now + e.unit);
        }
      }
    }),
    (B.propHooks.scrollTop = B.propHooks.scrollLeft = {
      set: function(e) {
        e.elem.nodeType && e.elem.parentNode && (e.elem[e.prop] = e.now);
      }
    }),
    (xe.easing = {
      linear: function(e) {
        return e;
      },
      swing: function(e) {
        return 0.5 - Math.cos(e * Math.PI) / 2;
      },
      _default: "swing"
    }),
    (xe.fx = B.prototype.init),
    (xe.fx.step = {});
  var yt,
    mt,
    wt = /^(?:toggle|show|hide)$/,
    bt = /queueHooks$/;
  (xe.Animation = xe.extend(G, {
    tweeners: {
      "*": [
        function(e, t) {
          var n = this.createTween(e, t);
          return m(n.elem, e, _e.exec(t), n), n;
        }
      ]
    },
    tweener: function(e, t) {
      me(e) ? ((t = e), (e = ["*"])) : (e = e.match(Ne));
      for (var n, i = 0, o = e.length; i < o; i++)
        (n = e[i]),
          (G.tweeners[n] = G.tweeners[n] || []),
          G.tweeners[n].unshift(t);
    },
    prefilters: [Y],
    prefilter: function(e, t) {
      t ? G.prefilters.unshift(e) : G.prefilters.push(e);
    }
  })),
    (xe.speed = function(e, t, n) {
      var i =
        e && "object" == typeof e
          ? xe.extend({}, e)
          : {
              complete: n || (!n && t) || (me(e) && e),
              duration: e,
              easing: (n && t) || (t && !me(t) && t)
            };
      return (
        xe.fx.off
          ? (i.duration = 0)
          : "number" != typeof i.duration &&
            (i.duration in xe.fx.speeds
              ? (i.duration = xe.fx.speeds[i.duration])
              : (i.duration = xe.fx.speeds._default)),
        (null != i.queue && !0 !== i.queue) || (i.queue = "fx"),
        (i.old = i.complete),
        (i.complete = function() {
          me(i.old) && i.old.call(this), i.queue && xe.dequeue(this, i.queue);
        }),
        i
      );
    }),
    xe.fn.extend({
      fadeTo: function(e, t, n, i) {
        return this.filter(Xe)
          .css("opacity", 0)
          .show()
          .end()
          .animate({ opacity: t }, e, n, i);
      },
      animate: function(e, t, n, i) {
        var o = xe.isEmptyObject(e),
          r = xe.speed(t, n, i),
          s = function() {
            var t = G(this, xe.extend({}, e), r);
            (o || ze.get(this, "finish")) && t.stop(!0);
          };
        return (
          (s.finish = s),
          o || !1 === r.queue ? this.each(s) : this.queue(r.queue, s)
        );
      },
      stop: function(e, t, n) {
        var i = function(e) {
          var t = e.stop;
          delete e.stop, t(n);
        };
        return (
          "string" != typeof e && ((n = t), (t = e), (e = void 0)),
          t && !1 !== e && this.queue(e || "fx", []),
          this.each(function() {
            var t = !0,
              o = null != e && e + "queueHooks",
              r = xe.timers,
              s = ze.get(this);
            if (o) s[o] && s[o].stop && i(s[o]);
            else for (o in s) s[o] && s[o].stop && bt.test(o) && i(s[o]);
            for (o = r.length; o--; )
              r[o].elem !== this ||
                (null != e && r[o].queue !== e) ||
                (r[o].anim.stop(n), (t = !1), r.splice(o, 1));
            (!t && n) || xe.dequeue(this, e);
          })
        );
      },
      finish: function(e) {
        return (
          !1 !== e && (e = e || "fx"),
          this.each(function() {
            var t,
              n = ze.get(this),
              i = n[e + "queue"],
              o = n[e + "queueHooks"],
              r = xe.timers,
              s = i ? i.length : 0;
            for (
              n.finish = !0,
                xe.queue(this, e, []),
                o && o.stop && o.stop.call(this, !0),
                t = r.length;
              t--;

            )
              r[t].elem === this &&
                r[t].queue === e &&
                (r[t].anim.stop(!0), r.splice(t, 1));
            for (t = 0; t < s; t++)
              i[t] && i[t].finish && i[t].finish.call(this);
            delete n.finish;
          })
        );
      }
    }),
    xe.each(["toggle", "show", "hide"], function(e, t) {
      var n = xe.fn[t];
      xe.fn[t] = function(e, i, o) {
        return null == e || "boolean" == typeof e
          ? n.apply(this, arguments)
          : this.animate(U(t, !0), e, i, o);
      };
    }),
    xe.each(
      {
        slideDown: U("show"),
        slideUp: U("hide"),
        slideToggle: U("toggle"),
        fadeIn: { opacity: "show" },
        fadeOut: { opacity: "hide" },
        fadeToggle: { opacity: "toggle" }
      },
      function(e, t) {
        xe.fn[e] = function(e, n, i) {
          return this.animate(t, e, n, i);
        };
      }
    ),
    (xe.timers = []),
    (xe.fx.tick = function() {
      var e,
        t = 0,
        n = xe.timers;
      for (yt = Date.now(); t < n.length; t++)
        (e = n[t])() || n[t] !== e || n.splice(t--, 1);
      n.length || xe.fx.stop(), (yt = void 0);
    }),
    (xe.fx.timer = function(e) {
      xe.timers.push(e), xe.fx.start();
    }),
    (xe.fx.interval = 13),
    (xe.fx.start = function() {
      mt || ((mt = !0), F());
    }),
    (xe.fx.stop = function() {
      mt = null;
    }),
    (xe.fx.speeds = { slow: 600, fast: 200, _default: 400 }),
    (xe.fn.delay = function(t, n) {
      return (
        (t = xe.fx ? xe.fx.speeds[t] || t : t),
        (n = n || "fx"),
        this.queue(n, function(n, i) {
          var o = e.setTimeout(n, t);
          i.stop = function() {
            e.clearTimeout(o);
          };
        })
      );
    }),
    (function() {
      var e = se.createElement("input"),
        t = se.createElement("select").appendChild(se.createElement("option"));
      (e.type = "checkbox"),
        (ye.checkOn = "" !== e.value),
        (ye.optSelected = t.selected),
        ((e = se.createElement("input")).value = "t"),
        (e.type = "radio"),
        (ye.radioValue = "t" === e.value);
    })();
  var xt,
    kt = xe.expr.attrHandle;
  xe.fn.extend({
    attr: function(e, t) {
      return Pe(this, xe.attr, e, t, arguments.length > 1);
    },
    removeAttr: function(e) {
      return this.each(function() {
        xe.removeAttr(this, e);
      });
    }
  }),
    xe.extend({
      attr: function(e, t, n) {
        var i,
          o,
          r = e.nodeType;
        if (3 !== r && 8 !== r && 2 !== r)
          return void 0 === e.getAttribute
            ? xe.prop(e, t, n)
            : ((1 === r && xe.isXMLDoc(e)) ||
                (o =
                  xe.attrHooks[t.toLowerCase()] ||
                  (xe.expr.match.bool.test(t) ? xt : void 0)),
              void 0 !== n
                ? null === n
                  ? void xe.removeAttr(e, t)
                  : o && "set" in o && void 0 !== (i = o.set(e, n, t))
                  ? i
                  : (e.setAttribute(t, n + ""), n)
                : o && "get" in o && null !== (i = o.get(e, t))
                ? i
                : null == (i = xe.find.attr(e, t))
                ? void 0
                : i);
      },
      attrHooks: {
        type: {
          set: function(e, t) {
            if (!ye.radioValue && "radio" === t && r(e, "input")) {
              var n = e.value;
              return e.setAttribute("type", t), n && (e.value = n), t;
            }
          }
        }
      },
      removeAttr: function(e, t) {
        var n,
          i = 0,
          o = t && t.match(Ne);
        if (o && 1 === e.nodeType) for (; (n = o[i++]); ) e.removeAttribute(n);
      }
    }),
    (xt = {
      set: function(e, t, n) {
        return !1 === t ? xe.removeAttr(e, n) : e.setAttribute(n, n), n;
      }
    }),
    xe.each(xe.expr.match.bool.source.match(/\w+/g), function(e, t) {
      var n = kt[t] || xe.find.attr;
      kt[t] = function(e, t, i) {
        var o,
          r,
          s = t.toLowerCase();
        return (
          i ||
            ((r = kt[s]),
            (kt[s] = o),
            (o = null != n(e, t, i) ? s : null),
            (kt[s] = r)),
          o
        );
      };
    });
  var Tt = /^(?:input|select|textarea|button)$/i,
    St = /^(?:a|area)$/i;
  xe.fn.extend({
    prop: function(e, t) {
      return Pe(this, xe.prop, e, t, arguments.length > 1);
    },
    removeProp: function(e) {
      return this.each(function() {
        delete this[xe.propFix[e] || e];
      });
    }
  }),
    xe.extend({
      prop: function(e, t, n) {
        var i,
          o,
          r = e.nodeType;
        if (3 !== r && 8 !== r && 2 !== r)
          return (
            (1 === r && xe.isXMLDoc(e)) ||
              ((t = xe.propFix[t] || t), (o = xe.propHooks[t])),
            void 0 !== n
              ? o && "set" in o && void 0 !== (i = o.set(e, n, t))
                ? i
                : (e[t] = n)
              : o && "get" in o && null !== (i = o.get(e, t))
              ? i
              : e[t]
          );
      },
      propHooks: {
        tabIndex: {
          get: function(e) {
            var t = xe.find.attr(e, "tabindex");
            return t
              ? parseInt(t, 10)
              : Tt.test(e.nodeName) || (St.test(e.nodeName) && e.href)
              ? 0
              : -1;
          }
        }
      },
      propFix: { for: "htmlFor", class: "className" }
    }),
    ye.optSelected ||
      (xe.propHooks.selected = {
        get: function(e) {
          var t = e.parentNode;
          return t && t.parentNode && t.parentNode.selectedIndex, null;
        },
        set: function(e) {
          var t = e.parentNode;
          t && (t.selectedIndex, t.parentNode && t.parentNode.selectedIndex);
        }
      }),
    xe.each(
      [
        "tabIndex",
        "readOnly",
        "maxLength",
        "cellSpacing",
        "cellPadding",
        "rowSpan",
        "colSpan",
        "useMap",
        "frameBorder",
        "contentEditable"
      ],
      function() {
        xe.propFix[this.toLowerCase()] = this;
      }
    ),
    xe.fn.extend({
      addClass: function(e) {
        var t,
          n,
          i,
          o,
          r,
          s,
          a,
          l = 0;
        if (me(e))
          return this.each(function(t) {
            xe(this).addClass(e.call(this, t, J(this)));
          });
        if ((t = K(e)).length)
          for (; (n = this[l++]); )
            if (((o = J(n)), (i = 1 === n.nodeType && " " + Q(o) + " "))) {
              for (s = 0; (r = t[s++]); )
                i.indexOf(" " + r + " ") < 0 && (i += r + " ");
              o !== (a = Q(i)) && n.setAttribute("class", a);
            }
        return this;
      },
      removeClass: function(e) {
        var t,
          n,
          i,
          o,
          r,
          s,
          a,
          l = 0;
        if (me(e))
          return this.each(function(t) {
            xe(this).removeClass(e.call(this, t, J(this)));
          });
        if (!arguments.length) return this.attr("class", "");
        if ((t = K(e)).length)
          for (; (n = this[l++]); )
            if (((o = J(n)), (i = 1 === n.nodeType && " " + Q(o) + " "))) {
              for (s = 0; (r = t[s++]); )
                for (; i.indexOf(" " + r + " ") > -1; )
                  i = i.replace(" " + r + " ", " ");
              o !== (a = Q(i)) && n.setAttribute("class", a);
            }
        return this;
      },
      toggleClass: function(e, t) {
        var n = typeof e,
          i = "string" === n || Array.isArray(e);
        return "boolean" == typeof t && i
          ? t
            ? this.addClass(e)
            : this.removeClass(e)
          : me(e)
          ? this.each(function(n) {
              xe(this).toggleClass(e.call(this, n, J(this), t), t);
            })
          : this.each(function() {
              var t, o, r, s;
              if (i)
                for (o = 0, r = xe(this), s = K(e); (t = s[o++]); )
                  r.hasClass(t) ? r.removeClass(t) : r.addClass(t);
              else
                (void 0 !== e && "boolean" !== n) ||
                  ((t = J(this)) && ze.set(this, "__className__", t),
                  this.setAttribute &&
                    this.setAttribute(
                      "class",
                      t || !1 === e ? "" : ze.get(this, "__className__") || ""
                    ));
            });
      },
      hasClass: function(e) {
        var t,
          n,
          i = 0;
        for (t = " " + e + " "; (n = this[i++]); )
          if (1 === n.nodeType && (" " + Q(J(n)) + " ").indexOf(t) > -1)
            return !0;
        return !1;
      }
    });
  var Ct = /\r/g;
  xe.fn.extend({
    val: function(e) {
      var t,
        n,
        i,
        o = this[0];
      return arguments.length
        ? ((i = me(e)),
          this.each(function(n) {
            var o;
            1 === this.nodeType &&
              (null == (o = i ? e.call(this, n, xe(this).val()) : e)
                ? (o = "")
                : "number" == typeof o
                ? (o += "")
                : Array.isArray(o) &&
                  (o = xe.map(o, function(e) {
                    return null == e ? "" : e + "";
                  })),
              ((t =
                xe.valHooks[this.type] ||
                xe.valHooks[this.nodeName.toLowerCase()]) &&
                "set" in t &&
                void 0 !== t.set(this, o, "value")) ||
                (this.value = o));
          }))
        : o
        ? (t = xe.valHooks[o.type] || xe.valHooks[o.nodeName.toLowerCase()]) &&
          "get" in t &&
          void 0 !== (n = t.get(o, "value"))
          ? n
          : "string" == typeof (n = o.value)
          ? n.replace(Ct, "")
          : null == n
          ? ""
          : n
        : void 0;
    }
  }),
    xe.extend({
      valHooks: {
        option: {
          get: function(e) {
            var t = xe.find.attr(e, "value");
            return null != t ? t : Q(xe.text(e));
          }
        },
        select: {
          get: function(e) {
            var t,
              n,
              i,
              o = e.options,
              s = e.selectedIndex,
              a = "select-one" === e.type,
              l = a ? null : [],
              c = a ? s + 1 : o.length;
            for (i = s < 0 ? c : a ? s : 0; i < c; i++)
              if (
                ((n = o[i]).selected || i === s) &&
                !n.disabled &&
                (!n.parentNode.disabled || !r(n.parentNode, "optgroup"))
              ) {
                if (((t = xe(n).val()), a)) return t;
                l.push(t);
              }
            return l;
          },
          set: function(e, t) {
            for (
              var n, i, o = e.options, r = xe.makeArray(t), s = o.length;
              s--;

            )
              ((i = o[s]).selected =
                xe.inArray(xe.valHooks.option.get(i), r) > -1) && (n = !0);
            return n || (e.selectedIndex = -1), r;
          }
        }
      }
    }),
    xe.each(["radio", "checkbox"], function() {
      (xe.valHooks[this] = {
        set: function(e, t) {
          if (Array.isArray(t))
            return (e.checked = xe.inArray(xe(e).val(), t) > -1);
        }
      }),
        ye.checkOn ||
          (xe.valHooks[this].get = function(e) {
            return null === e.getAttribute("value") ? "on" : e.value;
          });
    }),
    (ye.focusin = "onfocusin" in e);
  var $t = /^(?:focusinfocus|focusoutblur)$/,
    At = function(e) {
      e.stopPropagation();
    };
  xe.extend(xe.event, {
    trigger: function(t, n, i, o) {
      var r,
        s,
        a,
        l,
        c,
        d,
        u,
        p,
        f = [i || se],
        h = he.call(t, "type") ? t.type : t,
        v = he.call(t, "namespace") ? t.namespace.split(".") : [];
      if (
        ((s = p = a = i = i || se),
        3 !== i.nodeType &&
          8 !== i.nodeType &&
          !$t.test(h + xe.event.triggered) &&
          (h.indexOf(".") > -1 && ((h = (v = h.split(".")).shift()), v.sort()),
          (c = h.indexOf(":") < 0 && "on" + h),
          (t = t[xe.expando] ? t : new xe.Event(h, "object" == typeof t && t)),
          (t.isTrigger = o ? 2 : 3),
          (t.namespace = v.join(".")),
          (t.rnamespace = t.namespace
            ? new RegExp("(^|\\.)" + v.join("\\.(?:.*\\.|)") + "(\\.|$)")
            : null),
          (t.result = void 0),
          t.target || (t.target = i),
          (n = null == n ? [t] : xe.makeArray(n, [t])),
          (u = xe.event.special[h] || {}),
          o || !u.trigger || !1 !== u.trigger.apply(i, n)))
      ) {
        if (!o && !u.noBubble && !we(i)) {
          for (
            l = u.delegateType || h, $t.test(l + h) || (s = s.parentNode);
            s;
            s = s.parentNode
          )
            f.push(s), (a = s);
          a === (i.ownerDocument || se) &&
            f.push(a.defaultView || a.parentWindow || e);
        }
        for (r = 0; (s = f[r++]) && !t.isPropagationStopped(); )
          (p = s),
            (t.type = r > 1 ? l : u.bindType || h),
            (d = (ze.get(s, "events") || {})[t.type] && ze.get(s, "handle")) &&
              d.apply(s, n),
            (d = c && s[c]) &&
              d.apply &&
              Ie(s) &&
              ((t.result = d.apply(s, n)),
              !1 === t.result && t.preventDefault());
        return (
          (t.type = h),
          o ||
            t.isDefaultPrevented() ||
            (u._default && !1 !== u._default.apply(f.pop(), n)) ||
            !Ie(i) ||
            (c &&
              me(i[h]) &&
              !we(i) &&
              ((a = i[c]) && (i[c] = null),
              (xe.event.triggered = h),
              t.isPropagationStopped() && p.addEventListener(h, At),
              i[h](),
              t.isPropagationStopped() && p.removeEventListener(h, At),
              (xe.event.triggered = void 0),
              a && (i[c] = a))),
          t.result
        );
      }
    },
    simulate: function(e, t, n) {
      var i = xe.extend(new xe.Event(), n, { type: e, isSimulated: !0 });
      xe.event.trigger(i, null, t);
    }
  }),
    xe.fn.extend({
      trigger: function(e, t) {
        return this.each(function() {
          xe.event.trigger(e, t, this);
        });
      },
      triggerHandler: function(e, t) {
        var n = this[0];
        if (n) return xe.event.trigger(e, t, n, !0);
      }
    }),
    ye.focusin ||
      xe.each({ focus: "focusin", blur: "focusout" }, function(e, t) {
        var n = function(e) {
          xe.event.simulate(t, e.target, xe.event.fix(e));
        };
        xe.event.special[t] = {
          setup: function() {
            var i = this.ownerDocument || this,
              o = ze.access(i, t);
            o || i.addEventListener(e, n, !0), ze.access(i, t, (o || 0) + 1);
          },
          teardown: function() {
            var i = this.ownerDocument || this,
              o = ze.access(i, t) - 1;
            o
              ? ze.access(i, t, o)
              : (i.removeEventListener(e, n, !0), ze.remove(i, t));
          }
        };
      });
  var Et = e.location,
    Dt = Date.now(),
    jt = /\?/;
  xe.parseXML = function(t) {
    var n;
    if (!t || "string" != typeof t) return null;
    try {
      n = new e.DOMParser().parseFromString(t, "text/xml");
    } catch (e) {
      n = void 0;
    }
    return (
      (n && !n.getElementsByTagName("parsererror").length) ||
        xe.error("Invalid XML: " + t),
      n
    );
  };
  var Ht = /\[\]$/,
    Nt = /\r?\n/g,
    Lt = /^(?:submit|button|image|reset|file)$/i,
    Ot = /^(?:input|select|textarea|keygen)/i;
  (xe.param = function(e, t) {
    var n,
      i = [],
      o = function(e, t) {
        var n = me(t) ? t() : t;
        i[i.length] =
          encodeURIComponent(e) + "=" + encodeURIComponent(null == n ? "" : n);
      };
    if (Array.isArray(e) || (e.jquery && !xe.isPlainObject(e)))
      xe.each(e, function() {
        o(this.name, this.value);
      });
    else for (n in e) Z(n, e[n], t, o);
    return i.join("&");
  }),
    xe.fn.extend({
      serialize: function() {
        return xe.param(this.serializeArray());
      },
      serializeArray: function() {
        return this.map(function() {
          var e = xe.prop(this, "elements");
          return e ? xe.makeArray(e) : this;
        })
          .filter(function() {
            var e = this.type;
            return (
              this.name &&
              !xe(this).is(":disabled") &&
              Ot.test(this.nodeName) &&
              !Lt.test(e) &&
              (this.checked || !Ge.test(e))
            );
          })
          .map(function(e, t) {
            var n = xe(this).val();
            return null == n
              ? null
              : Array.isArray(n)
              ? xe.map(n, function(e) {
                  return { name: t.name, value: e.replace(Nt, "\r\n") };
                })
              : { name: t.name, value: n.replace(Nt, "\r\n") };
          })
          .get();
      }
    });
  var Pt = /%20/g,
    qt = /#.*$/,
    Mt = /([?&])_=[^&]*/,
    It = /^(.*?):[ \t]*([^\r\n]*)$/gm,
    zt = /^(?:about|app|app-storage|.+-extension|file|res|widget):$/,
    Wt = /^(?:GET|HEAD)$/,
    Rt = /^\/\//,
    Bt = {},
    Ft = {},
    _t = "*/".concat("*"),
    Ut = se.createElement("a");
  (Ut.href = Et.href),
    xe.extend({
      active: 0,
      lastModified: {},
      etag: {},
      ajaxSettings: {
        url: Et.href,
        type: "GET",
        isLocal: zt.test(Et.protocol),
        global: !0,
        processData: !0,
        async: !0,
        contentType: "application/x-www-form-urlencoded; charset=UTF-8",
        accepts: {
          "*": _t,
          text: "text/plain",
          html: "text/html",
          xml: "application/xml, text/xml",
          json: "application/json, text/javascript"
        },
        contents: { xml: /\bxml\b/, html: /\bhtml/, json: /\bjson\b/ },
        responseFields: {
          xml: "responseXML",
          text: "responseText",
          json: "responseJSON"
        },
        converters: {
          "* text": String,
          "text html": !0,
          "text json": JSON.parse,
          "text xml": xe.parseXML
        },
        flatOptions: { url: !0, context: !0 }
      },
      ajaxSetup: function(e, t) {
        return t ? ne(ne(e, xe.ajaxSettings), t) : ne(xe.ajaxSettings, e);
      },
      ajaxPrefilter: ee(Bt),
      ajaxTransport: ee(Ft),
      ajax: function(t, n) {
        function i(t, n, i, a) {
          var c,
            p,
            f,
            b,
            x,
            k = n;
          d ||
            ((d = !0),
            l && e.clearTimeout(l),
            (o = void 0),
            (s = a || ""),
            (T.readyState = t > 0 ? 4 : 0),
            (c = (t >= 200 && t < 300) || 304 === t),
            i && (b = ie(h, T, i)),
            (b = oe(h, b, T, c)),
            c
              ? (h.ifModified &&
                  ((x = T.getResponseHeader("Last-Modified")) &&
                    (xe.lastModified[r] = x),
                  (x = T.getResponseHeader("etag")) && (xe.etag[r] = x)),
                204 === t || "HEAD" === h.type
                  ? (k = "nocontent")
                  : 304 === t
                  ? (k = "notmodified")
                  : ((k = b.state), (p = b.data), (c = !(f = b.error))))
              : ((f = k), (!t && k) || ((k = "error"), t < 0 && (t = 0))),
            (T.status = t),
            (T.statusText = (n || k) + ""),
            c ? y.resolveWith(v, [p, k, T]) : y.rejectWith(v, [T, k, f]),
            T.statusCode(w),
            (w = void 0),
            u && g.trigger(c ? "ajaxSuccess" : "ajaxError", [T, h, c ? p : f]),
            m.fireWith(v, [T, k]),
            u &&
              (g.trigger("ajaxComplete", [T, h]),
              --xe.active || xe.event.trigger("ajaxStop")));
        }
        "object" == typeof t && ((n = t), (t = void 0)), (n = n || {});
        var o,
          r,
          s,
          a,
          l,
          c,
          d,
          u,
          p,
          f,
          h = xe.ajaxSetup({}, n),
          v = h.context || h,
          g = h.context && (v.nodeType || v.jquery) ? xe(v) : xe.event,
          y = xe.Deferred(),
          m = xe.Callbacks("once memory"),
          w = h.statusCode || {},
          b = {},
          x = {},
          k = "canceled",
          T = {
            readyState: 0,
            getResponseHeader: function(e) {
              var t;
              if (d) {
                if (!a)
                  for (a = {}; (t = It.exec(s)); ) a[t[1].toLowerCase()] = t[2];
                t = a[e.toLowerCase()];
              }
              return null == t ? null : t;
            },
            getAllResponseHeaders: function() {
              return d ? s : null;
            },
            setRequestHeader: function(e, t) {
              return (
                null == d &&
                  ((e = x[e.toLowerCase()] = x[e.toLowerCase()] || e),
                  (b[e] = t)),
                this
              );
            },
            overrideMimeType: function(e) {
              return null == d && (h.mimeType = e), this;
            },
            statusCode: function(e) {
              var t;
              if (e)
                if (d) T.always(e[T.status]);
                else for (t in e) w[t] = [w[t], e[t]];
              return this;
            },
            abort: function(e) {
              var t = e || k;
              return o && o.abort(t), i(0, t), this;
            }
          };
        if (
          (y.promise(T),
          (h.url = ((t || h.url || Et.href) + "").replace(
            Rt,
            Et.protocol + "//"
          )),
          (h.type = n.method || n.type || h.method || h.type),
          (h.dataTypes = (h.dataType || "*").toLowerCase().match(Ne) || [""]),
          null == h.crossDomain)
        ) {
          c = se.createElement("a");
          try {
            (c.href = h.url),
              (c.href = c.href),
              (h.crossDomain =
                Ut.protocol + "//" + Ut.host != c.protocol + "//" + c.host);
          } catch (e) {
            h.crossDomain = !0;
          }
        }
        if (
          (h.data &&
            h.processData &&
            "string" != typeof h.data &&
            (h.data = xe.param(h.data, h.traditional)),
          te(Bt, h, n, T),
          d)
        )
          return T;
        (u = xe.event && h.global) &&
          0 == xe.active++ &&
          xe.event.trigger("ajaxStart"),
          (h.type = h.type.toUpperCase()),
          (h.hasContent = !Wt.test(h.type)),
          (r = h.url.replace(qt, "")),
          h.hasContent
            ? h.data &&
              h.processData &&
              0 ===
                (h.contentType || "").indexOf(
                  "application/x-www-form-urlencoded"
                ) &&
              (h.data = h.data.replace(Pt, "+"))
            : ((f = h.url.slice(r.length)),
              h.data &&
                (h.processData || "string" == typeof h.data) &&
                ((r += (jt.test(r) ? "&" : "?") + h.data), delete h.data),
              !1 === h.cache &&
                ((r = r.replace(Mt, "$1")),
                (f = (jt.test(r) ? "&" : "?") + "_=" + Dt++ + f)),
              (h.url = r + f)),
          h.ifModified &&
            (xe.lastModified[r] &&
              T.setRequestHeader("If-Modified-Since", xe.lastModified[r]),
            xe.etag[r] && T.setRequestHeader("If-None-Match", xe.etag[r])),
          ((h.data && h.hasContent && !1 !== h.contentType) || n.contentType) &&
            T.setRequestHeader("Content-Type", h.contentType),
          T.setRequestHeader(
            "Accept",
            h.dataTypes[0] && h.accepts[h.dataTypes[0]]
              ? h.accepts[h.dataTypes[0]] +
                  ("*" !== h.dataTypes[0] ? ", " + _t + "; q=0.01" : "")
              : h.accepts["*"]
          );
        for (p in h.headers) T.setRequestHeader(p, h.headers[p]);
        if (h.beforeSend && (!1 === h.beforeSend.call(v, T, h) || d))
          return T.abort();
        if (
          ((k = "abort"),
          m.add(h.complete),
          T.done(h.success),
          T.fail(h.error),
          (o = te(Ft, h, n, T)))
        ) {
          if (((T.readyState = 1), u && g.trigger("ajaxSend", [T, h]), d))
            return T;
          h.async &&
            h.timeout > 0 &&
            (l = e.setTimeout(function() {
              T.abort("timeout");
            }, h.timeout));
          try {
            (d = !1), o.send(b, i);
          } catch (e) {
            if (d) throw e;
            i(-1, e);
          }
        } else i(-1, "No Transport");
        return T;
      },
      getJSON: function(e, t, n) {
        return xe.get(e, t, n, "json");
      },
      getScript: function(e, t) {
        return xe.get(e, void 0, t, "script");
      }
    }),
    xe.each(["get", "post"], function(e, t) {
      xe[t] = function(e, n, i, o) {
        return (
          me(n) && ((o = o || i), (i = n), (n = void 0)),
          xe.ajax(
            xe.extend(
              { url: e, type: t, dataType: o, data: n, success: i },
              xe.isPlainObject(e) && e
            )
          )
        );
      };
    }),
    (xe._evalUrl = function(e) {
      return xe.ajax({
        url: e,
        type: "GET",
        dataType: "script",
        cache: !0,
        async: !1,
        global: !1,
        throws: !0
      });
    }),
    xe.fn.extend({
      wrapAll: function(e) {
        var t;
        return (
          this[0] &&
            (me(e) && (e = e.call(this[0])),
            (t = xe(e, this[0].ownerDocument)
              .eq(0)
              .clone(!0)),
            this[0].parentNode && t.insertBefore(this[0]),
            t
              .map(function() {
                for (var e = this; e.firstElementChild; )
                  e = e.firstElementChild;
                return e;
              })
              .append(this)),
          this
        );
      },
      wrapInner: function(e) {
        return me(e)
          ? this.each(function(t) {
              xe(this).wrapInner(e.call(this, t));
            })
          : this.each(function() {
              var t = xe(this),
                n = t.contents();
              n.length ? n.wrapAll(e) : t.append(e);
            });
      },
      wrap: function(e) {
        var t = me(e);
        return this.each(function(n) {
          xe(this).wrapAll(t ? e.call(this, n) : e);
        });
      },
      unwrap: function(e) {
        return (
          this.parent(e)
            .not("body")
            .each(function() {
              xe(this).replaceWith(this.childNodes);
            }),
          this
        );
      }
    }),
    (xe.expr.pseudos.hidden = function(e) {
      return !xe.expr.pseudos.visible(e);
    }),
    (xe.expr.pseudos.visible = function(e) {
      return !!(e.offsetWidth || e.offsetHeight || e.getClientRects().length);
    }),
    (xe.ajaxSettings.xhr = function() {
      try {
        return new e.XMLHttpRequest();
      } catch (e) {}
    });
  var Xt = { 0: 200, 1223: 204 },
    Yt = xe.ajaxSettings.xhr();
  (ye.cors = !!Yt && "withCredentials" in Yt),
    (ye.ajax = Yt = !!Yt),
    xe.ajaxTransport(function(t) {
      var n, i;
      if (ye.cors || (Yt && !t.crossDomain))
        return {
          send: function(o, r) {
            var s,
              a = t.xhr();
            if (
              (a.open(t.type, t.url, t.async, t.username, t.password),
              t.xhrFields)
            )
              for (s in t.xhrFields) a[s] = t.xhrFields[s];
            t.mimeType && a.overrideMimeType && a.overrideMimeType(t.mimeType),
              t.crossDomain ||
                o["X-Requested-With"] ||
                (o["X-Requested-With"] = "XMLHttpRequest");
            for (s in o) a.setRequestHeader(s, o[s]);
            (n = function(e) {
              return function() {
                n &&
                  ((n = i = a.onload = a.onerror = a.onabort = a.ontimeout = a.onreadystatechange = null),
                  "abort" === e
                    ? a.abort()
                    : "error" === e
                    ? "number" != typeof a.status
                      ? r(0, "error")
                      : r(a.status, a.statusText)
                    : r(
                        Xt[a.status] || a.status,
                        a.statusText,
                        "text" !== (a.responseType || "text") ||
                          "string" != typeof a.responseText
                          ? { binary: a.response }
                          : { text: a.responseText },
                        a.getAllResponseHeaders()
                      ));
              };
            }),
              (a.onload = n()),
              (i = a.onerror = a.ontimeout = n("error")),
              void 0 !== a.onabort
                ? (a.onabort = i)
                : (a.onreadystatechange = function() {
                    4 === a.readyState &&
                      e.setTimeout(function() {
                        n && i();
                      });
                  }),
              (n = n("abort"));
            try {
              a.send((t.hasContent && t.data) || null);
            } catch (e) {
              if (n) throw e;
            }
          },
          abort: function() {
            n && n();
          }
        };
    }),
    xe.ajaxPrefilter(function(e) {
      e.crossDomain && (e.contents.script = !1);
    }),
    xe.ajaxSetup({
      accepts: {
        script:
          "text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"
      },
      contents: { script: /\b(?:java|ecma)script\b/ },
      converters: {
        "text script": function(e) {
          return xe.globalEval(e), e;
        }
      }
    }),
    xe.ajaxPrefilter("script", function(e) {
      void 0 === e.cache && (e.cache = !1), e.crossDomain && (e.type = "GET");
    }),
    xe.ajaxTransport("script", function(e) {
      if (e.crossDomain) {
        var t, n;
        return {
          send: function(i, o) {
            (t = xe("<script>")
              .prop({ charset: e.scriptCharset, src: e.url })
              .on(
                "load error",
                (n = function(e) {
                  t.remove(),
                    (n = null),
                    e && o("error" === e.type ? 404 : 200, e.type);
                })
              )),
              se.head.appendChild(t[0]);
          },
          abort: function() {
            n && n();
          }
        };
      }
    });
  var Vt = [],
    Gt = /(=)\?(?=&|$)|\?\?/;
  xe.ajaxSetup({
    jsonp: "callback",
    jsonpCallback: function() {
      var e = Vt.pop() || xe.expando + "_" + Dt++;
      return (this[e] = !0), e;
    }
  }),
    xe.ajaxPrefilter("json jsonp", function(t, n, i) {
      var o,
        r,
        s,
        a =
          !1 !== t.jsonp &&
          (Gt.test(t.url)
            ? "url"
            : "string" == typeof t.data &&
              0 ===
                (t.contentType || "").indexOf(
                  "application/x-www-form-urlencoded"
                ) &&
              Gt.test(t.data) &&
              "data");
      if (a || "jsonp" === t.dataTypes[0])
        return (
          (o = t.jsonpCallback = me(t.jsonpCallback)
            ? t.jsonpCallback()
            : t.jsonpCallback),
          a
            ? (t[a] = t[a].replace(Gt, "$1" + o))
            : !1 !== t.jsonp &&
              (t.url += (jt.test(t.url) ? "&" : "?") + t.jsonp + "=" + o),
          (t.converters["script json"] = function() {
            return s || xe.error(o + " was not called"), s[0];
          }),
          (t.dataTypes[0] = "json"),
          (r = e[o]),
          (e[o] = function() {
            s = arguments;
          }),
          i.always(function() {
            void 0 === r ? xe(e).removeProp(o) : (e[o] = r),
              t[o] && ((t.jsonpCallback = n.jsonpCallback), Vt.push(o)),
              s && me(r) && r(s[0]),
              (s = r = void 0);
          }),
          "script"
        );
    }),
    (ye.createHTMLDocument = (function() {
      var e = se.implementation.createHTMLDocument("").body;
      return (
        (e.innerHTML = "<form></form><form></form>"), 2 === e.childNodes.length
      );
    })()),
    (xe.parseHTML = function(e, t, n) {
      if ("string" != typeof e) return [];
      "boolean" == typeof t && ((n = t), (t = !1));
      var i, o, r;
      return (
        t ||
          (ye.createHTMLDocument
            ? (((i = (t = se.implementation.createHTMLDocument(
                ""
              )).createElement("base")).href = se.location.href),
              t.head.appendChild(i))
            : (t = se)),
        (o = Ae.exec(e)),
        (r = !n && []),
        o
          ? [t.createElement(o[1])]
          : ((o = T([e], t, r)),
            r && r.length && xe(r).remove(),
            xe.merge([], o.childNodes))
      );
    }),
    (xe.fn.load = function(e, t, n) {
      var i,
        o,
        r,
        s = this,
        a = e.indexOf(" ");
      return (
        a > -1 && ((i = Q(e.slice(a))), (e = e.slice(0, a))),
        me(t)
          ? ((n = t), (t = void 0))
          : t && "object" == typeof t && (o = "POST"),
        s.length > 0 &&
          xe
            .ajax({ url: e, type: o || "GET", dataType: "html", data: t })
            .done(function(e) {
              (r = arguments),
                s.html(
                  i
                    ? xe("<div>")
                        .append(xe.parseHTML(e))
                        .find(i)
                    : e
                );
            })
            .always(
              n &&
                function(e, t) {
                  s.each(function() {
                    n.apply(this, r || [e.responseText, t, e]);
                  });
                }
            ),
        this
      );
    }),
    xe.each(
      [
        "ajaxStart",
        "ajaxStop",
        "ajaxComplete",
        "ajaxError",
        "ajaxSuccess",
        "ajaxSend"
      ],
      function(e, t) {
        xe.fn[t] = function(e) {
          return this.on(t, e);
        };
      }
    ),
    (xe.expr.pseudos.animated = function(e) {
      return xe.grep(xe.timers, function(t) {
        return e === t.elem;
      }).length;
    }),
    (xe.offset = {
      setOffset: function(e, t, n) {
        var i,
          o,
          r,
          s,
          a,
          l,
          c = xe.css(e, "position"),
          d = xe(e),
          u = {};
        "static" === c && (e.style.position = "relative"),
          (a = d.offset()),
          (r = xe.css(e, "top")),
          (l = xe.css(e, "left")),
          ("absolute" === c || "fixed" === c) && (r + l).indexOf("auto") > -1
            ? ((s = (i = d.position()).top), (o = i.left))
            : ((s = parseFloat(r) || 0), (o = parseFloat(l) || 0)),
          me(t) && (t = t.call(e, n, xe.extend({}, a))),
          null != t.top && (u.top = t.top - a.top + s),
          null != t.left && (u.left = t.left - a.left + o),
          "using" in t ? t.using.call(e, u) : d.css(u);
      }
    }),
    xe.fn.extend({
      offset: function(e) {
        if (arguments.length)
          return void 0 === e
            ? this
            : this.each(function(t) {
                xe.offset.setOffset(this, e, t);
              });
        var t,
          n,
          i = this[0];
        return i
          ? i.getClientRects().length
            ? ((t = i.getBoundingClientRect()),
              (n = i.ownerDocument.defaultView),
              { top: t.top + n.pageYOffset, left: t.left + n.pageXOffset })
            : { top: 0, left: 0 }
          : void 0;
      },
      position: function() {
        if (this[0]) {
          var e,
            t,
            n,
            i = this[0],
            o = { top: 0, left: 0 };
          if ("fixed" === xe.css(i, "position")) t = i.getBoundingClientRect();
          else {
            for (
              t = this.offset(),
                n = i.ownerDocument,
                e = i.offsetParent || n.documentElement;
              e &&
              (e === n.body || e === n.documentElement) &&
              "static" === xe.css(e, "position");

            )
              e = e.parentNode;
            e &&
              e !== i &&
              1 === e.nodeType &&
              (((o = xe(e).offset()).top += xe.css(e, "borderTopWidth", !0)),
              (o.left += xe.css(e, "borderLeftWidth", !0)));
          }
          return {
            top: t.top - o.top - xe.css(i, "marginTop", !0),
            left: t.left - o.left - xe.css(i, "marginLeft", !0)
          };
        }
      },
      offsetParent: function() {
        return this.map(function() {
          for (
            var e = this.offsetParent;
            e && "static" === xe.css(e, "position");

          )
            e = e.offsetParent;
          return e || et;
        });
      }
    }),
    xe.each({ scrollLeft: "pageXOffset", scrollTop: "pageYOffset" }, function(
      e,
      t
    ) {
      var n = "pageYOffset" === t;
      xe.fn[e] = function(i) {
        return Pe(
          this,
          function(e, i, o) {
            var r;
            if (
              (we(e) ? (r = e) : 9 === e.nodeType && (r = e.defaultView),
              void 0 === o)
            )
              return r ? r[t] : e[i];
            r
              ? r.scrollTo(n ? r.pageXOffset : o, n ? o : r.pageYOffset)
              : (e[i] = o);
          },
          e,
          i,
          arguments.length
        );
      };
    }),
    xe.each(["top", "left"], function(e, t) {
      xe.cssHooks[t] = q(ye.pixelPosition, function(e, n) {
        if (n)
          return (n = P(e, t)), lt.test(n) ? xe(e).position()[t] + "px" : n;
      });
    }),
    xe.each({ Height: "height", Width: "width" }, function(e, t) {
      xe.each({ padding: "inner" + e, content: t, "": "outer" + e }, function(
        n,
        i
      ) {
        xe.fn[i] = function(o, r) {
          var s = arguments.length && (n || "boolean" != typeof o),
            a = n || (!0 === o || !0 === r ? "margin" : "border");
          return Pe(
            this,
            function(t, n, o) {
              var r;
              return we(t)
                ? 0 === i.indexOf("outer")
                  ? t["inner" + e]
                  : t.document.documentElement["client" + e]
                : 9 === t.nodeType
                ? ((r = t.documentElement),
                  Math.max(
                    t.body["scroll" + e],
                    r["scroll" + e],
                    t.body["offset" + e],
                    r["offset" + e],
                    r["client" + e]
                  ))
                : void 0 === o
                ? xe.css(t, n, a)
                : xe.style(t, n, o, a);
            },
            t,
            s ? o : void 0,
            s
          );
        };
      });
    }),
    xe.each(
      "blur focus focusin focusout resize scroll click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup contextmenu".split(
        " "
      ),
      function(e, t) {
        xe.fn[t] = function(e, n) {
          return arguments.length > 0
            ? this.on(t, null, e, n)
            : this.trigger(t);
        };
      }
    ),
    xe.fn.extend({
      hover: function(e, t) {
        return this.mouseenter(e).mouseleave(t || e);
      }
    }),
    xe.fn.extend({
      bind: function(e, t, n) {
        return this.on(e, null, t, n);
      },
      unbind: function(e, t) {
        return this.off(e, null, t);
      },
      delegate: function(e, t, n, i) {
        return this.on(t, e, n, i);
      },
      undelegate: function(e, t, n) {
        return 1 === arguments.length
          ? this.off(e, "**")
          : this.off(t, e || "**", n);
      }
    }),
    (xe.proxy = function(e, t) {
      var n, i, o;
      if (("string" == typeof t && ((n = e[t]), (t = e), (e = n)), me(e)))
        return (
          (i = le.call(arguments, 2)),
          (o = function() {
            return e.apply(t || this, i.concat(le.call(arguments)));
          }),
          (o.guid = e.guid = e.guid || xe.guid++),
          o
        );
    }),
    (xe.holdReady = function(e) {
      e ? xe.readyWait++ : xe.ready(!0);
    }),
    (xe.isArray = Array.isArray),
    (xe.parseJSON = JSON.parse),
    (xe.nodeName = r),
    (xe.isFunction = me),
    (xe.isWindow = we),
    (xe.camelCase = h),
    (xe.type = i),
    (xe.now = Date.now),
    (xe.isNumeric = function(e) {
      var t = xe.type(e);
      return ("number" === t || "string" === t) && !isNaN(e - parseFloat(e));
    }),
    "function" == typeof define &&
      define.amd &&
      define("jquery", [], function() {
        return xe;
      });
  var Qt = e.jQuery,
    Jt = e.$;
  return (
    (xe.noConflict = function(t) {
      return (
        e.$ === xe && (e.$ = Jt), t && e.jQuery === xe && (e.jQuery = Qt), xe
      );
    }),
    t || (e.jQuery = e.$ = xe),
    xe
  );
}),
  (function(e) {
    "use strict";
    "function" == typeof define && define.amd
      ? define(["jquery"], e)
      : "undefined" != typeof exports
      ? (module.exports = e(require("jquery")))
      : e(jQuery);
  })(function(e) {
    "use strict";
    var t = window.Slick || {};
    ((t = (function() {
      var t = 0;
      return function(n, i) {
        var o,
          r = this;
        (r.defaults = {
          accessibility: !0,
          adaptiveHeight: !1,
          appendArrows: e(n),
          appendDots: e(n),
          arrows: !0,
          asNavFor: null,
          prevArrow:
            '<button class="slick-prev" aria-label="Previous" type="button"></button>',
          nextArrow:
            '<button class="slick-next" aria-label="Next" type="button"></button>',
          autoplay: !1,
          autoplaySpeed: 3e3,
          centerMode: !1,
          centerPadding: "50px",
          cssEase: "ease",
          customPaging: function(t, n) {
            return e('<button type="button" />').text(n + 1);
          },
          dots: !1,
          dotsClass: "slick-dots",
          draggable: !0,
          easing: "linear",
          edgeFriction: 0.35,
          fade: !1,
          focusOnSelect: !1,
          focusOnChange: !1,
          infinite: !0,
          initialSlide: 0,
          lazyLoad: "ondemand",
          mobileFirst: !1,
          pauseOnHover: !0,
          pauseOnFocus: !0,
          pauseOnDotsHover: !1,
          respondTo: "window",
          responsive: null,
          rows: 1,
          rtl: !1,
          slide: "",
          slidesPerRow: 1,
          slidesToShow: 1,
          slidesToScroll: 1,
          speed: 500,
          swipe: !0,
          swipeToSlide: !1,
          touchMove: !0,
          touchThreshold: 5,
          useCSS: !0,
          useTransform: !0,
          variableWidth: !1,
          vertical: !1,
          verticalSwiping: !1,
          waitForAnimate: !0,
          zIndex: 1e3
        }),
          (r.initials = {
            animating: !1,
            dragging: !1,
            autoPlayTimer: null,
            currentDirection: 0,
            currentLeft: null,
            currentSlide: 0,
            direction: 1,
            $dots: null,
            listWidth: null,
            listHeight: null,
            loadIndex: 0,
            $nextArrow: null,
            $prevArrow: null,
            scrolling: !1,
            slideCount: null,
            slideWidth: null,
            $slideTrack: null,
            $slides: null,
            sliding: !1,
            slideOffset: 0,
            swipeLeft: null,
            swiping: !1,
            $list: null,
            touchObject: {},
            transformsEnabled: !1,
            unslicked: !1
          }),
          e.extend(r, r.initials),
          (r.activeBreakpoint = null),
          (r.animType = null),
          (r.animProp = null),
          (r.breakpoints = []),
          (r.breakpointSettings = []),
          (r.cssTransitions = !1),
          (r.focussed = !1),
          (r.interrupted = !1),
          (r.hidden = "hidden"),
          (r.paused = !0),
          (r.positionProp = null),
          (r.respondTo = null),
          (r.rowCount = 1),
          (r.shouldClick = !0),
          (r.$slider = e(n)),
          (r.$slidesCache = null),
          (r.transformType = null),
          (r.transitionType = null),
          (r.visibilityChange = "visibilitychange"),
          (r.windowWidth = 0),
          (r.windowTimer = null),
          (o = e(n).data("slick") || {}),
          (r.options = e.extend({}, r.defaults, i, o)),
          (r.currentSlide = r.options.initialSlide),
          (r.originalSettings = r.options),
          void 0 !== document.mozHidden
            ? ((r.hidden = "mozHidden"),
              (r.visibilityChange = "mozvisibilitychange"))
            : void 0 !== document.webkitHidden &&
              ((r.hidden = "webkitHidden"),
              (r.visibilityChange = "webkitvisibilitychange")),
          (r.autoPlay = e.proxy(r.autoPlay, r)),
          (r.autoPlayClear = e.proxy(r.autoPlayClear, r)),
          (r.autoPlayIterator = e.proxy(r.autoPlayIterator, r)),
          (r.changeSlide = e.proxy(r.changeSlide, r)),
          (r.clickHandler = e.proxy(r.clickHandler, r)),
          (r.selectHandler = e.proxy(r.selectHandler, r)),
          (r.setPosition = e.proxy(r.setPosition, r)),
          (r.swipeHandler = e.proxy(r.swipeHandler, r)),
          (r.dragHandler = e.proxy(r.dragHandler, r)),
          (r.keyHandler = e.proxy(r.keyHandler, r)),
          (r.instanceUid = t++),
          (r.htmlExpr = /^(?:\s*(<[\w\W]+>)[^>]*)$/),
          r.registerBreakpoints(),
          r.init(!0);
      };
    })()).prototype.activateADA = function() {
      this.$slideTrack
        .find(".slick-active")
        .attr({ "aria-hidden": "false" })
        .find("a, input, button, select")
        .attr({ tabindex: "0" });
    }),
      (t.prototype.addSlide = t.prototype.slickAdd = function(t, n, i) {
        var o = this;
        if ("boolean" == typeof n) (i = n), (n = null);
        else if (n < 0 || n >= o.slideCount) return !1;
        o.unload(),
          "number" == typeof n
            ? 0 === n && 0 === o.$slides.length
              ? e(t).appendTo(o.$slideTrack)
              : i
              ? e(t).insertBefore(o.$slides.eq(n))
              : e(t).insertAfter(o.$slides.eq(n))
            : !0 === i
            ? e(t).prependTo(o.$slideTrack)
            : e(t).appendTo(o.$slideTrack),
          (o.$slides = o.$slideTrack.children(this.options.slide)),
          o.$slideTrack.children(this.options.slide).detach(),
          o.$slideTrack.append(o.$slides),
          o.$slides.each(function(t, n) {
            e(n).attr("data-slick-index", t);
          }),
          (o.$slidesCache = o.$slides),
          o.reinit();
      }),
      (t.prototype.animateHeight = function() {
        var e = this;
        if (
          1 === e.options.slidesToShow &&
          !0 === e.options.adaptiveHeight &&
          !1 === e.options.vertical
        ) {
          var t = e.$slides.eq(e.currentSlide).outerHeight(!0);
          e.$list.animate({ height: t }, e.options.speed);
        }
      }),
      (t.prototype.animateSlide = function(t, n) {
        var i = {},
          o = this;
        o.animateHeight(),
          !0 === o.options.rtl && !1 === o.options.vertical && (t = -t),
          !1 === o.transformsEnabled
            ? !1 === o.options.vertical
              ? o.$slideTrack.animate(
                  { left: t },
                  o.options.speed,
                  o.options.easing,
                  n
                )
              : o.$slideTrack.animate(
                  { top: t },
                  o.options.speed,
                  o.options.easing,
                  n
                )
            : !1 === o.cssTransitions
            ? (!0 === o.options.rtl && (o.currentLeft = -o.currentLeft),
              e({ animStart: o.currentLeft }).animate(
                { animStart: t },
                {
                  duration: o.options.speed,
                  easing: o.options.easing,
                  step: function(e) {
                    (e = Math.ceil(e)),
                      !1 === o.options.vertical
                        ? ((i[o.animType] = "translate(" + e + "px, 0px)"),
                          o.$slideTrack.css(i))
                        : ((i[o.animType] = "translate(0px," + e + "px)"),
                          o.$slideTrack.css(i));
                  },
                  complete: function() {
                    n && n.call();
                  }
                }
              ))
            : (o.applyTransition(),
              (t = Math.ceil(t)),
              !1 === o.options.vertical
                ? (i[o.animType] = "translate3d(" + t + "px, 0px, 0px)")
                : (i[o.animType] = "translate3d(0px," + t + "px, 0px)"),
              o.$slideTrack.css(i),
              n &&
                setTimeout(function() {
                  o.disableTransition(), n.call();
                }, o.options.speed));
      }),
      (t.prototype.getNavTarget = function() {
        var t = this,
          n = t.options.asNavFor;
        return n && null !== n && (n = e(n).not(t.$slider)), n;
      }),
      (t.prototype.asNavFor = function(t) {
        var n = this.getNavTarget();
        null !== n &&
          "object" == typeof n &&
          n.each(function() {
            var n = e(this).slick("getSlick");
            n.unslicked || n.slideHandler(t, !0);
          });
      }),
      (t.prototype.applyTransition = function(e) {
        var t = this,
          n = {};
        !1 === t.options.fade
          ? (n[t.transitionType] =
              t.transformType +
              " " +
              t.options.speed +
              "ms " +
              t.options.cssEase)
          : (n[t.transitionType] =
              "opacity " + t.options.speed + "ms " + t.options.cssEase),
          !1 === t.options.fade ? t.$slideTrack.css(n) : t.$slides.eq(e).css(n);
      }),
      (t.prototype.autoPlay = function() {
        var e = this;
        e.autoPlayClear(),
          e.slideCount > e.options.slidesToShow &&
            (e.autoPlayTimer = setInterval(
              e.autoPlayIterator,
              e.options.autoplaySpeed
            ));
      }),
      (t.prototype.autoPlayClear = function() {
        var e = this;
        e.autoPlayTimer && clearInterval(e.autoPlayTimer);
      }),
      (t.prototype.autoPlayIterator = function() {
        var e = this,
          t = e.currentSlide + e.options.slidesToScroll;
        e.paused ||
          e.interrupted ||
          e.focussed ||
          (!1 === e.options.infinite &&
            (1 === e.direction && e.currentSlide + 1 === e.slideCount - 1
              ? (e.direction = 0)
              : 0 === e.direction &&
                ((t = e.currentSlide - e.options.slidesToScroll),
                e.currentSlide - 1 == 0 && (e.direction = 1))),
          e.slideHandler(t));
      }),
      (t.prototype.buildArrows = function() {
        var t = this;
        !0 === t.options.arrows &&
          ((t.$prevArrow = e(t.options.prevArrow).addClass("slick-arrow")),
          (t.$nextArrow = e(t.options.nextArrow).addClass("slick-arrow")),
          t.slideCount > t.options.slidesToShow
            ? (t.$prevArrow
                .removeClass("slick-hidden")
                .removeAttr("aria-hidden tabindex"),
              t.$nextArrow
                .removeClass("slick-hidden")
                .removeAttr("aria-hidden tabindex"),
              t.htmlExpr.test(t.options.prevArrow) &&
                t.$prevArrow.prependTo(t.options.appendArrows),
              t.htmlExpr.test(t.options.nextArrow) &&
                t.$nextArrow.appendTo(t.options.appendArrows),
              !0 !== t.options.infinite &&
                t.$prevArrow
                  .addClass("slick-disabled")
                  .attr("aria-disabled", "true"))
            : t.$prevArrow
                .add(t.$nextArrow)
                .addClass("slick-hidden")
                .attr({ "aria-disabled": "true", tabindex: "-1" }));
      }),
      (t.prototype.buildDots = function() {
        var t,
          n,
          i = this;
        if (!0 === i.options.dots) {
          for (
            i.$slider.addClass("slick-dotted"),
              n = e("<ul />").addClass(i.options.dotsClass),
              t = 0;
            t <= i.getDotCount();
            t += 1
          )
            n.append(
              e("<li />").append(i.options.customPaging.call(this, i, t))
            );
          (i.$dots = n.appendTo(i.options.appendDots)),
            i.$dots
              .find("li")
              .first()
              .addClass("slick-active");
        }
      }),
      (t.prototype.buildOut = function() {
        var t = this;
        (t.$slides = t.$slider
          .children(t.options.slide + ":not(.slick-cloned)")
          .addClass("slick-slide")),
          (t.slideCount = t.$slides.length),
          t.$slides.each(function(t, n) {
            e(n)
              .attr("data-slick-index", t)
              .data("originalStyling", e(n).attr("style") || "");
          }),
          t.$slider.addClass("slick-slider"),
          (t.$slideTrack =
            0 === t.slideCount
              ? e('<div class="slick-track"/>').appendTo(t.$slider)
              : t.$slides.wrapAll('<div class="slick-track"/>').parent()),
          (t.$list = t.$slideTrack.wrap('<div class="slick-list"/>').parent()),
          t.$slideTrack.css("opacity", 0),
          (!0 !== t.options.centerMode && !0 !== t.options.swipeToSlide) ||
            (t.options.slidesToScroll = 1),
          e("img[data-lazy]", t.$slider)
            .not("[src]")
            .addClass("slick-loading"),
          t.setupInfinite(),
          t.buildArrows(),
          t.buildDots(),
          t.updateDots(),
          t.setSlideClasses(
            "number" == typeof t.currentSlide ? t.currentSlide : 0
          ),
          !0 === t.options.draggable && t.$list.addClass("draggable");
      }),
      (t.prototype.buildRows = function() {
        var e,
          t,
          n,
          i,
          o,
          r,
          s,
          a = this;
        if (
          ((i = document.createDocumentFragment()),
          (r = a.$slider.children()),
          a.options.rows > 1)
        ) {
          for (
            s = a.options.slidesPerRow * a.options.rows,
              o = Math.ceil(r.length / s),
              e = 0;
            e < o;
            e++
          ) {
            var l = document.createElement("div");
            for (t = 0; t < a.options.rows; t++) {
              var c = document.createElement("div");
              for (n = 0; n < a.options.slidesPerRow; n++) {
                var d = e * s + (t * a.options.slidesPerRow + n);
                r.get(d) && c.appendChild(r.get(d));
              }
              l.appendChild(c);
            }
            i.appendChild(l);
          }
          a.$slider.empty().append(i),
            a.$slider
              .children()
              .children()
              .children()
              .css({
                width: 100 / a.options.slidesPerRow + "%",
                display: "inline-block"
              });
        }
      }),
      (t.prototype.checkResponsive = function(t, n) {
        var i,
          o,
          r,
          s = this,
          a = !1,
          l = s.$slider.width(),
          c = window.innerWidth || e(window).width();
        if (
          ("window" === s.respondTo
            ? (r = c)
            : "slider" === s.respondTo
            ? (r = l)
            : "min" === s.respondTo && (r = Math.min(c, l)),
          s.options.responsive &&
            s.options.responsive.length &&
            null !== s.options.responsive)
        ) {
          o = null;
          for (i in s.breakpoints)
            s.breakpoints.hasOwnProperty(i) &&
              (!1 === s.originalSettings.mobileFirst
                ? r < s.breakpoints[i] && (o = s.breakpoints[i])
                : r > s.breakpoints[i] && (o = s.breakpoints[i]));
          null !== o
            ? null !== s.activeBreakpoint
              ? (o !== s.activeBreakpoint || n) &&
                ((s.activeBreakpoint = o),
                "unslick" === s.breakpointSettings[o]
                  ? s.unslick(o)
                  : ((s.options = e.extend(
                      {},
                      s.originalSettings,
                      s.breakpointSettings[o]
                    )),
                    !0 === t && (s.currentSlide = s.options.initialSlide),
                    s.refresh(t)),
                (a = o))
              : ((s.activeBreakpoint = o),
                "unslick" === s.breakpointSettings[o]
                  ? s.unslick(o)
                  : ((s.options = e.extend(
                      {},
                      s.originalSettings,
                      s.breakpointSettings[o]
                    )),
                    !0 === t && (s.currentSlide = s.options.initialSlide),
                    s.refresh(t)),
                (a = o))
            : null !== s.activeBreakpoint &&
              ((s.activeBreakpoint = null),
              (s.options = s.originalSettings),
              !0 === t && (s.currentSlide = s.options.initialSlide),
              s.refresh(t),
              (a = o)),
            t || !1 === a || s.$slider.trigger("breakpoint", [s, a]);
        }
      }),
      (t.prototype.changeSlide = function(t, n) {
        var i,
          o,
          r,
          s = this,
          a = e(t.currentTarget);
        switch (
          (a.is("a") && t.preventDefault(),
          a.is("li") || (a = a.closest("li")),
          (r = s.slideCount % s.options.slidesToScroll != 0),
          (i = r
            ? 0
            : (s.slideCount - s.currentSlide) % s.options.slidesToScroll),
          t.data.message)
        ) {
          case "previous":
            (o =
              0 === i ? s.options.slidesToScroll : s.options.slidesToShow - i),
              s.slideCount > s.options.slidesToShow &&
                s.slideHandler(s.currentSlide - o, !1, n);
            break;
          case "next":
            (o = 0 === i ? s.options.slidesToScroll : i),
              s.slideCount > s.options.slidesToShow &&
                s.slideHandler(s.currentSlide + o, !1, n);
            break;
          case "index":
            var l =
              0 === t.data.index
                ? 0
                : t.data.index || a.index() * s.options.slidesToScroll;
            s.slideHandler(s.checkNavigable(l), !1, n),
              a.children().trigger("focus");
            break;
          default:
            return;
        }
      }),
      (t.prototype.checkNavigable = function(e) {
        var t, n;
        if (((t = this.getNavigableIndexes()), (n = 0), e > t[t.length - 1]))
          e = t[t.length - 1];
        else
          for (var i in t) {
            if (e < t[i]) {
              e = n;
              break;
            }
            n = t[i];
          }
        return e;
      }),
      (t.prototype.cleanUpEvents = function() {
        var t = this;
        t.options.dots &&
          null !== t.$dots &&
          (e("li", t.$dots)
            .off("click.slick", t.changeSlide)
            .off("mouseenter.slick", e.proxy(t.interrupt, t, !0))
            .off("mouseleave.slick", e.proxy(t.interrupt, t, !1)),
          !0 === t.options.accessibility &&
            t.$dots.off("keydown.slick", t.keyHandler)),
          t.$slider.off("focus.slick blur.slick"),
          !0 === t.options.arrows &&
            t.slideCount > t.options.slidesToShow &&
            (t.$prevArrow && t.$prevArrow.off("click.slick", t.changeSlide),
            t.$nextArrow && t.$nextArrow.off("click.slick", t.changeSlide),
            !0 === t.options.accessibility &&
              (t.$prevArrow && t.$prevArrow.off("keydown.slick", t.keyHandler),
              t.$nextArrow && t.$nextArrow.off("keydown.slick", t.keyHandler))),
          t.$list.off("touchstart.slick mousedown.slick", t.swipeHandler),
          t.$list.off("touchmove.slick mousemove.slick", t.swipeHandler),
          t.$list.off("touchend.slick mouseup.slick", t.swipeHandler),
          t.$list.off("touchcancel.slick mouseleave.slick", t.swipeHandler),
          t.$list.off("click.slick", t.clickHandler),
          e(document).off(t.visibilityChange, t.visibility),
          t.cleanUpSlideEvents(),
          !0 === t.options.accessibility &&
            t.$list.off("keydown.slick", t.keyHandler),
          !0 === t.options.focusOnSelect &&
            e(t.$slideTrack)
              .children()
              .off("click.slick", t.selectHandler),
          e(window).off(
            "orientationchange.slick.slick-" + t.instanceUid,
            t.orientationChange
          ),
          e(window).off("resize.slick.slick-" + t.instanceUid, t.resize),
          e("[draggable!=true]", t.$slideTrack).off(
            "dragstart",
            t.preventDefault
          ),
          e(window).off("load.slick.slick-" + t.instanceUid, t.setPosition);
      }),
      (t.prototype.cleanUpSlideEvents = function() {
        var t = this;
        t.$list.off("mouseenter.slick", e.proxy(t.interrupt, t, !0)),
          t.$list.off("mouseleave.slick", e.proxy(t.interrupt, t, !1));
      }),
      (t.prototype.cleanUpRows = function() {
        var e,
          t = this;
        t.options.rows > 1 &&
          ((e = t.$slides.children().children()).removeAttr("style"),
          t.$slider.empty().append(e));
      }),
      (t.prototype.clickHandler = function(e) {
        !1 === this.shouldClick &&
          (e.stopImmediatePropagation(),
          e.stopPropagation(),
          e.preventDefault());
      }),
      (t.prototype.destroy = function(t) {
        var n = this;
        n.autoPlayClear(),
          (n.touchObject = {}),
          n.cleanUpEvents(),
          e(".slick-cloned", n.$slider).detach(),
          n.$dots && n.$dots.remove(),
          n.$prevArrow &&
            n.$prevArrow.length &&
            (n.$prevArrow
              .removeClass("slick-disabled slick-arrow slick-hidden")
              .removeAttr("aria-hidden aria-disabled tabindex")
              .css("display", ""),
            n.htmlExpr.test(n.options.prevArrow) && n.$prevArrow.remove()),
          n.$nextArrow &&
            n.$nextArrow.length &&
            (n.$nextArrow
              .removeClass("slick-disabled slick-arrow slick-hidden")
              .removeAttr("aria-hidden aria-disabled tabindex")
              .css("display", ""),
            n.htmlExpr.test(n.options.nextArrow) && n.$nextArrow.remove()),
          n.$slides &&
            (n.$slides
              .removeClass(
                "slick-slide slick-active slick-center slick-visible slick-current"
              )
              .removeAttr("aria-hidden")
              .removeAttr("data-slick-index")
              .each(function() {
                e(this).attr("style", e(this).data("originalStyling"));
              }),
            n.$slideTrack.children(this.options.slide).detach(),
            n.$slideTrack.detach(),
            n.$list.detach(),
            n.$slider.append(n.$slides)),
          n.cleanUpRows(),
          n.$slider.removeClass("slick-slider"),
          n.$slider.removeClass("slick-initialized"),
          n.$slider.removeClass("slick-dotted"),
          (n.unslicked = !0),
          t || n.$slider.trigger("destroy", [n]);
      }),
      (t.prototype.disableTransition = function(e) {
        var t = this,
          n = {};
        (n[t.transitionType] = ""),
          !1 === t.options.fade ? t.$slideTrack.css(n) : t.$slides.eq(e).css(n);
      }),
      (t.prototype.fadeSlide = function(e, t) {
        var n = this;
        !1 === n.cssTransitions
          ? (n.$slides.eq(e).css({ zIndex: n.options.zIndex }),
            n.$slides
              .eq(e)
              .animate({ opacity: 1 }, n.options.speed, n.options.easing, t))
          : (n.applyTransition(e),
            n.$slides.eq(e).css({ opacity: 1, zIndex: n.options.zIndex }),
            t &&
              setTimeout(function() {
                n.disableTransition(e), t.call();
              }, n.options.speed));
      }),
      (t.prototype.fadeSlideOut = function(e) {
        var t = this;
        !1 === t.cssTransitions
          ? t.$slides
              .eq(e)
              .animate(
                { opacity: 0, zIndex: t.options.zIndex - 2 },
                t.options.speed,
                t.options.easing
              )
          : (t.applyTransition(e),
            t.$slides.eq(e).css({ opacity: 0, zIndex: t.options.zIndex - 2 }));
      }),
      (t.prototype.filterSlides = t.prototype.slickFilter = function(e) {
        var t = this;
        null !== e &&
          ((t.$slidesCache = t.$slides),
          t.unload(),
          t.$slideTrack.children(this.options.slide).detach(),
          t.$slidesCache.filter(e).appendTo(t.$slideTrack),
          t.reinit());
      }),
      (t.prototype.focusHandler = function() {
        var t = this;
        t.$slider
          .off("focus.slick blur.slick")
          .on("focus.slick blur.slick", "*", function(n) {
            n.stopImmediatePropagation();
            var i = e(this);
            setTimeout(function() {
              t.options.pauseOnFocus &&
                ((t.focussed = i.is(":focus")), t.autoPlay());
            }, 0);
          });
      }),
      (t.prototype.getCurrent = t.prototype.slickCurrentSlide = function() {
        return this.currentSlide;
      }),
      (t.prototype.getDotCount = function() {
        var e = this,
          t = 0,
          n = 0,
          i = 0;
        if (!0 === e.options.infinite)
          if (e.slideCount <= e.options.slidesToShow) ++i;
          else
            for (; t < e.slideCount; )
              ++i,
                (t = n + e.options.slidesToScroll),
                (n +=
                  e.options.slidesToScroll <= e.options.slidesToShow
                    ? e.options.slidesToScroll
                    : e.options.slidesToShow);
        else if (!0 === e.options.centerMode) i = e.slideCount;
        else if (e.options.asNavFor)
          for (; t < e.slideCount; )
            ++i,
              (t = n + e.options.slidesToScroll),
              (n +=
                e.options.slidesToScroll <= e.options.slidesToShow
                  ? e.options.slidesToScroll
                  : e.options.slidesToShow);
        else
          i =
            1 +
            Math.ceil(
              (e.slideCount - e.options.slidesToShow) / e.options.slidesToScroll
            );
        return i - 1;
      }),
      (t.prototype.getLeft = function(e) {
        var t,
          n,
          i,
          o,
          r = this,
          s = 0;
        return (
          (r.slideOffset = 0),
          (n = r.$slides.first().outerHeight(!0)),
          !0 === r.options.infinite
            ? (r.slideCount > r.options.slidesToShow &&
                ((r.slideOffset = r.slideWidth * r.options.slidesToShow * -1),
                (o = -1),
                !0 === r.options.vertical &&
                  !0 === r.options.centerMode &&
                  (2 === r.options.slidesToShow
                    ? (o = -1.5)
                    : 1 === r.options.slidesToShow && (o = -2)),
                (s = n * r.options.slidesToShow * o)),
              r.slideCount % r.options.slidesToScroll != 0 &&
                e + r.options.slidesToScroll > r.slideCount &&
                r.slideCount > r.options.slidesToShow &&
                (e > r.slideCount
                  ? ((r.slideOffset =
                      (r.options.slidesToShow - (e - r.slideCount)) *
                      r.slideWidth *
                      -1),
                    (s =
                      (r.options.slidesToShow - (e - r.slideCount)) * n * -1))
                  : ((r.slideOffset =
                      (r.slideCount % r.options.slidesToScroll) *
                      r.slideWidth *
                      -1),
                    (s = (r.slideCount % r.options.slidesToScroll) * n * -1))))
            : e + r.options.slidesToShow > r.slideCount &&
              ((r.slideOffset =
                (e + r.options.slidesToShow - r.slideCount) * r.slideWidth),
              (s = (e + r.options.slidesToShow - r.slideCount) * n)),
          r.slideCount <= r.options.slidesToShow &&
            ((r.slideOffset = 0), (s = 0)),
          !0 === r.options.centerMode && r.slideCount <= r.options.slidesToShow
            ? (r.slideOffset =
                (r.slideWidth * Math.floor(r.options.slidesToShow)) / 2 -
                (r.slideWidth * r.slideCount) / 2)
            : !0 === r.options.centerMode && !0 === r.options.infinite
            ? (r.slideOffset +=
                r.slideWidth * Math.floor(r.options.slidesToShow / 2) -
                r.slideWidth)
            : !0 === r.options.centerMode &&
              ((r.slideOffset = 0),
              (r.slideOffset +=
                r.slideWidth * Math.floor(r.options.slidesToShow / 2))),
          (t =
            !1 === r.options.vertical
              ? e * r.slideWidth * -1 + r.slideOffset
              : e * n * -1 + s),
          !0 === r.options.variableWidth &&
            ((i =
              r.slideCount <= r.options.slidesToShow ||
              !1 === r.options.infinite
                ? r.$slideTrack.children(".slick-slide").eq(e)
                : r.$slideTrack
                    .children(".slick-slide")
                    .eq(e + r.options.slidesToShow)),
            (t =
              !0 === r.options.rtl
                ? i[0]
                  ? -1 * (r.$slideTrack.width() - i[0].offsetLeft - i.width())
                  : 0
                : i[0]
                ? -1 * i[0].offsetLeft
                : 0),
            !0 === r.options.centerMode &&
              ((i =
                r.slideCount <= r.options.slidesToShow ||
                !1 === r.options.infinite
                  ? r.$slideTrack.children(".slick-slide").eq(e)
                  : r.$slideTrack
                      .children(".slick-slide")
                      .eq(e + r.options.slidesToShow + 1)),
              (t =
                !0 === r.options.rtl
                  ? i[0]
                    ? -1 * (r.$slideTrack.width() - i[0].offsetLeft - i.width())
                    : 0
                  : i[0]
                  ? -1 * i[0].offsetLeft
                  : 0),
              (t += (r.$list.width() - i.outerWidth()) / 2))),
          t
        );
      }),
      (t.prototype.getOption = t.prototype.slickGetOption = function(e) {
        return this.options[e];
      }),
      (t.prototype.getNavigableIndexes = function() {
        var e,
          t = this,
          n = 0,
          i = 0,
          o = [];
        for (
          !1 === t.options.infinite
            ? (e = t.slideCount)
            : ((n = -1 * t.options.slidesToScroll),
              (i = -1 * t.options.slidesToScroll),
              (e = 2 * t.slideCount));
          n < e;

        )
          o.push(n),
            (n = i + t.options.slidesToScroll),
            (i +=
              t.options.slidesToScroll <= t.options.slidesToShow
                ? t.options.slidesToScroll
                : t.options.slidesToShow);
        return o;
      }),
      (t.prototype.getSlick = function() {
        return this;
      }),
      (t.prototype.getSlideCount = function() {
        var t,
          n,
          i = this;
        return (
          (n =
            !0 === i.options.centerMode
              ? i.slideWidth * Math.floor(i.options.slidesToShow / 2)
              : 0),
          !0 === i.options.swipeToSlide
            ? (i.$slideTrack.find(".slick-slide").each(function(o, r) {
                if (r.offsetLeft - n + e(r).outerWidth() / 2 > -1 * i.swipeLeft)
                  return (t = r), !1;
              }),
              Math.abs(e(t).attr("data-slick-index") - i.currentSlide) || 1)
            : i.options.slidesToScroll
        );
      }),
      (t.prototype.goTo = t.prototype.slickGoTo = function(e, t) {
        this.changeSlide({ data: { message: "index", index: parseInt(e) } }, t);
      }),
      (t.prototype.init = function(t) {
        var n = this;
        e(n.$slider).hasClass("slick-initialized") ||
          (e(n.$slider).addClass("slick-initialized"),
          n.buildRows(),
          n.buildOut(),
          n.setProps(),
          n.startLoad(),
          n.loadSlider(),
          n.initializeEvents(),
          n.updateArrows(),
          n.updateDots(),
          n.checkResponsive(!0),
          n.focusHandler()),
          t && n.$slider.trigger("init", [n]),
          !0 === n.options.accessibility && n.initADA(),
          n.options.autoplay && ((n.paused = !1), n.autoPlay());
      }),
      (t.prototype.initADA = function() {
        var t = this,
          n = Math.ceil(t.slideCount / t.options.slidesToShow),
          i = t.getNavigableIndexes().filter(function(e) {
            return e >= 0 && e < t.slideCount;
          });
        t.$slides
          .add(t.$slideTrack.find(".slick-cloned"))
          .attr({ "aria-hidden": "true", tabindex: "-1" })
          .find("a, input, button, select")
          .attr({ tabindex: "-1" }),
          null !== t.$dots &&
            (t.$slides
              .not(t.$slideTrack.find(".slick-cloned"))
              .each(function(n) {
                var o = i.indexOf(n);
                e(this).attr({
                  role: "tabpanel",
                  id: "slick-slide" + t.instanceUid + n,
                  tabindex: -1
                }),
                  -1 !== o &&
                    e(this).attr({
                      "aria-describedby":
                        "slick-slide-control" + t.instanceUid + o
                    });
              }),
            t.$dots
              .attr("role", "tablist")
              .find("li")
              .each(function(o) {
                var r = i[o];
                e(this).attr({ role: "presentation" }),
                  e(this)
                    .find("button")
                    .first()
                    .attr({
                      role: "tab",
                      id: "slick-slide-control" + t.instanceUid + o,
                      "aria-controls": "slick-slide" + t.instanceUid + r,
                      "aria-label": o + 1 + " of " + n,
                      "aria-selected": null,
                      tabindex: "-1"
                    });
              })
              .eq(t.currentSlide)
              .find("button")
              .attr({ "aria-selected": "true", tabindex: "0" })
              .end());
        for (var o = t.currentSlide, r = o + t.options.slidesToShow; o < r; o++)
          t.$slides.eq(o).attr("tabindex", 0);
        t.activateADA();
      }),
      (t.prototype.initArrowEvents = function() {
        var e = this;
        !0 === e.options.arrows &&
          e.slideCount > e.options.slidesToShow &&
          (e.$prevArrow
            .off("click.slick")
            .on("click.slick", { message: "previous" }, e.changeSlide),
          e.$nextArrow
            .off("click.slick")
            .on("click.slick", { message: "next" }, e.changeSlide),
          !0 === e.options.accessibility &&
            (e.$prevArrow.on("keydown.slick", e.keyHandler),
            e.$nextArrow.on("keydown.slick", e.keyHandler)));
      }),
      (t.prototype.initDotEvents = function() {
        var t = this;
        !0 === t.options.dots &&
          (e("li", t.$dots).on(
            "click.slick",
            { message: "index" },
            t.changeSlide
          ),
          !0 === t.options.accessibility &&
            t.$dots.on("keydown.slick", t.keyHandler)),
          !0 === t.options.dots &&
            !0 === t.options.pauseOnDotsHover &&
            e("li", t.$dots)
              .on("mouseenter.slick", e.proxy(t.interrupt, t, !0))
              .on("mouseleave.slick", e.proxy(t.interrupt, t, !1));
      }),
      (t.prototype.initSlideEvents = function() {
        var t = this;
        t.options.pauseOnHover &&
          (t.$list.on("mouseenter.slick", e.proxy(t.interrupt, t, !0)),
          t.$list.on("mouseleave.slick", e.proxy(t.interrupt, t, !1)));
      }),
      (t.prototype.initializeEvents = function() {
        var t = this;
        t.initArrowEvents(),
          t.initDotEvents(),
          t.initSlideEvents(),
          t.$list.on(
            "touchstart.slick mousedown.slick",
            { action: "start" },
            t.swipeHandler
          ),
          t.$list.on(
            "touchmove.slick mousemove.slick",
            { action: "move" },
            t.swipeHandler
          ),
          t.$list.on(
            "touchend.slick mouseup.slick",
            { action: "end" },
            t.swipeHandler
          ),
          t.$list.on(
            "touchcancel.slick mouseleave.slick",
            { action: "end" },
            t.swipeHandler
          ),
          t.$list.on("click.slick", t.clickHandler),
          e(document).on(t.visibilityChange, e.proxy(t.visibility, t)),
          !0 === t.options.accessibility &&
            t.$list.on("keydown.slick", t.keyHandler),
          !0 === t.options.focusOnSelect &&
            e(t.$slideTrack)
              .children()
              .on("click.slick", t.selectHandler),
          e(window).on(
            "orientationchange.slick.slick-" + t.instanceUid,
            e.proxy(t.orientationChange, t)
          ),
          e(window).on(
            "resize.slick.slick-" + t.instanceUid,
            e.proxy(t.resize, t)
          ),
          e("[draggable!=true]", t.$slideTrack).on(
            "dragstart",
            t.preventDefault
          ),
          e(window).on("load.slick.slick-" + t.instanceUid, t.setPosition),
          e(t.setPosition);
      }),
      (t.prototype.initUI = function() {
        var e = this;
        !0 === e.options.arrows &&
          e.slideCount > e.options.slidesToShow &&
          (e.$prevArrow.show(), e.$nextArrow.show()),
          !0 === e.options.dots &&
            e.slideCount > e.options.slidesToShow &&
            e.$dots.show();
      }),
      (t.prototype.keyHandler = function(e) {
        var t = this;
        e.target.tagName.match("TEXTAREA|INPUT|SELECT") ||
          (37 === e.keyCode && !0 === t.options.accessibility
            ? t.changeSlide({
                data: { message: !0 === t.options.rtl ? "next" : "previous" }
              })
            : 39 === e.keyCode &&
              !0 === t.options.accessibility &&
              t.changeSlide({
                data: { message: !0 === t.options.rtl ? "previous" : "next" }
              }));
      }),
      (t.prototype.lazyLoad = function() {
        function t(t) {
          e("img[data-lazy]", t).each(function() {
            var t = e(this),
              n = e(this).attr("data-lazy"),
              i = e(this).attr("data-srcset"),
              o = e(this).attr("data-sizes") || r.$slider.attr("data-sizes"),
              s = document.createElement("img");
            (s.onload = function() {
              t.animate({ opacity: 0 }, 100, function() {
                i && (t.attr("srcset", i), o && t.attr("sizes", o)),
                  t.attr("src", n).animate({ opacity: 1 }, 200, function() {
                    t.removeAttr(
                      "data-lazy data-srcset data-sizes"
                    ).removeClass("slick-loading");
                  }),
                  r.$slider.trigger("lazyLoaded", [r, t, n]);
              });
            }),
              (s.onerror = function() {
                t
                  .removeAttr("data-lazy")
                  .removeClass("slick-loading")
                  .addClass("slick-lazyload-error"),
                  r.$slider.trigger("lazyLoadError", [r, t, n]);
              }),
              (s.src = n);
          });
        }
        var n,
          i,
          o,
          r = this;
        if (
          (!0 === r.options.centerMode
            ? !0 === r.options.infinite
              ? (o =
                  (i = r.currentSlide + (r.options.slidesToShow / 2 + 1)) +
                  r.options.slidesToShow +
                  2)
              : ((i = Math.max(
                  0,
                  r.currentSlide - (r.options.slidesToShow / 2 + 1)
                )),
                (o = r.options.slidesToShow / 2 + 1 + 2 + r.currentSlide))
            : ((i = r.options.infinite
                ? r.options.slidesToShow + r.currentSlide
                : r.currentSlide),
              (o = Math.ceil(i + r.options.slidesToShow)),
              !0 === r.options.fade &&
                (i > 0 && i--, o <= r.slideCount && o++)),
          (n = r.$slider.find(".slick-slide").slice(i, o)),
          "anticipated" === r.options.lazyLoad)
        )
          for (
            var s = i - 1, a = o, l = r.$slider.find(".slick-slide"), c = 0;
            c < r.options.slidesToScroll;
            c++
          )
            s < 0 && (s = r.slideCount - 1),
              (n = (n = n.add(l.eq(s))).add(l.eq(a))),
              s--,
              a++;
        t(n),
          r.slideCount <= r.options.slidesToShow
            ? t(r.$slider.find(".slick-slide"))
            : r.currentSlide >= r.slideCount - r.options.slidesToShow
            ? t(
                r.$slider.find(".slick-cloned").slice(0, r.options.slidesToShow)
              )
            : 0 === r.currentSlide &&
              t(
                r.$slider
                  .find(".slick-cloned")
                  .slice(-1 * r.options.slidesToShow)
              );
      }),
      (t.prototype.loadSlider = function() {
        var e = this;
        e.setPosition(),
          e.$slideTrack.css({ opacity: 1 }),
          e.$slider.removeClass("slick-loading"),
          e.initUI(),
          "progressive" === e.options.lazyLoad && e.progressiveLazyLoad();
      }),
      (t.prototype.next = t.prototype.slickNext = function() {
        this.changeSlide({ data: { message: "next" } });
      }),
      (t.prototype.orientationChange = function() {
        var e = this;
        e.checkResponsive(), e.setPosition();
      }),
      (t.prototype.pause = t.prototype.slickPause = function() {
        var e = this;
        e.autoPlayClear(), (e.paused = !0);
      }),
      (t.prototype.play = t.prototype.slickPlay = function() {
        var e = this;
        e.autoPlay(),
          (e.options.autoplay = !0),
          (e.paused = !1),
          (e.focussed = !1),
          (e.interrupted = !1);
      }),
      (t.prototype.postSlide = function(t) {
        var n = this;
        n.unslicked ||
          (n.$slider.trigger("afterChange", [n, t]),
          (n.animating = !1),
          n.slideCount > n.options.slidesToShow && n.setPosition(),
          (n.swipeLeft = null),
          n.options.autoplay && n.autoPlay(),
          !0 === n.options.accessibility &&
            (n.initADA(),
            n.options.focusOnChange &&
              e(n.$slides.get(n.currentSlide))
                .attr("tabindex", 0)
                .focus()));
      }),
      (t.prototype.prev = t.prototype.slickPrev = function() {
        this.changeSlide({ data: { message: "previous" } });
      }),
      (t.prototype.preventDefault = function(e) {
        e.preventDefault();
      }),
      (t.prototype.progressiveLazyLoad = function(t) {
        t = t || 1;
        var n,
          i,
          o,
          r,
          s,
          a = this,
          l = e("img[data-lazy]", a.$slider);
        l.length
          ? ((n = l.first()),
            (i = n.attr("data-lazy")),
            (o = n.attr("data-srcset")),
            (r = n.attr("data-sizes") || a.$slider.attr("data-sizes")),
            ((s = document.createElement("img")).onload = function() {
              o && (n.attr("srcset", o), r && n.attr("sizes", r)),
                n
                  .attr("src", i)
                  .removeAttr("data-lazy data-srcset data-sizes")
                  .removeClass("slick-loading"),
                !0 === a.options.adaptiveHeight && a.setPosition(),
                a.$slider.trigger("lazyLoaded", [a, n, i]),
                a.progressiveLazyLoad();
            }),
            (s.onerror = function() {
              t < 3
                ? setTimeout(function() {
                    a.progressiveLazyLoad(t + 1);
                  }, 500)
                : (n
                    .removeAttr("data-lazy")
                    .removeClass("slick-loading")
                    .addClass("slick-lazyload-error"),
                  a.$slider.trigger("lazyLoadError", [a, n, i]),
                  a.progressiveLazyLoad());
            }),
            (s.src = i))
          : a.$slider.trigger("allImagesLoaded", [a]);
      }),
      (t.prototype.refresh = function(t) {
        var n,
          i,
          o = this;
        (i = o.slideCount - o.options.slidesToShow),
          !o.options.infinite && o.currentSlide > i && (o.currentSlide = i),
          o.slideCount <= o.options.slidesToShow && (o.currentSlide = 0),
          (n = o.currentSlide),
          o.destroy(!0),
          e.extend(o, o.initials, { currentSlide: n }),
          o.init(),
          t || o.changeSlide({ data: { message: "index", index: n } }, !1);
      }),
      (t.prototype.registerBreakpoints = function() {
        var t,
          n,
          i,
          o = this,
          r = o.options.responsive || null;
        if ("array" === e.type(r) && r.length) {
          o.respondTo = o.options.respondTo || "window";
          for (t in r)
            if (((i = o.breakpoints.length - 1), r.hasOwnProperty(t))) {
              for (n = r[t].breakpoint; i >= 0; )
                o.breakpoints[i] &&
                  o.breakpoints[i] === n &&
                  o.breakpoints.splice(i, 1),
                  i--;
              o.breakpoints.push(n), (o.breakpointSettings[n] = r[t].settings);
            }
          o.breakpoints.sort(function(e, t) {
            return o.options.mobileFirst ? e - t : t - e;
          });
        }
      }),
      (t.prototype.reinit = function() {
        var t = this;
        (t.$slides = t.$slideTrack
          .children(t.options.slide)
          .addClass("slick-slide")),
          (t.slideCount = t.$slides.length),
          t.currentSlide >= t.slideCount &&
            0 !== t.currentSlide &&
            (t.currentSlide = t.currentSlide - t.options.slidesToScroll),
          t.slideCount <= t.options.slidesToShow && (t.currentSlide = 0),
          t.registerBreakpoints(),
          t.setProps(),
          t.setupInfinite(),
          t.buildArrows(),
          t.updateArrows(),
          t.initArrowEvents(),
          t.buildDots(),
          t.updateDots(),
          t.initDotEvents(),
          t.cleanUpSlideEvents(),
          t.initSlideEvents(),
          t.checkResponsive(!1, !0),
          !0 === t.options.focusOnSelect &&
            e(t.$slideTrack)
              .children()
              .on("click.slick", t.selectHandler),
          t.setSlideClasses(
            "number" == typeof t.currentSlide ? t.currentSlide : 0
          ),
          t.setPosition(),
          t.focusHandler(),
          (t.paused = !t.options.autoplay),
          t.autoPlay(),
          t.$slider.trigger("reInit", [t]);
      }),
      (t.prototype.resize = function() {
        var t = this;
        e(window).width() !== t.windowWidth &&
          (clearTimeout(t.windowDelay),
          (t.windowDelay = window.setTimeout(function() {
            (t.windowWidth = e(window).width()),
              t.checkResponsive(),
              t.unslicked || t.setPosition();
          }, 50)));
      }),
      (t.prototype.removeSlide = t.prototype.slickRemove = function(e, t, n) {
        var i = this;
        if (
          ((e =
            "boolean" == typeof e
              ? !0 === (t = e)
                ? 0
                : i.slideCount - 1
              : !0 === t
              ? --e
              : e),
          i.slideCount < 1 || e < 0 || e > i.slideCount - 1)
        )
          return !1;
        i.unload(),
          !0 === n
            ? i.$slideTrack.children().remove()
            : i.$slideTrack
                .children(this.options.slide)
                .eq(e)
                .remove(),
          (i.$slides = i.$slideTrack.children(this.options.slide)),
          i.$slideTrack.children(this.options.slide).detach(),
          i.$slideTrack.append(i.$slides),
          (i.$slidesCache = i.$slides),
          i.reinit();
      }),
      (t.prototype.setCSS = function(e) {
        var t,
          n,
          i = this,
          o = {};
        !0 === i.options.rtl && (e = -e),
          (t = "left" == i.positionProp ? Math.ceil(e) + "px" : "0px"),
          (n = "top" == i.positionProp ? Math.ceil(e) + "px" : "0px"),
          (o[i.positionProp] = e),
          !1 === i.transformsEnabled
            ? i.$slideTrack.css(o)
            : ((o = {}),
              !1 === i.cssTransitions
                ? ((o[i.animType] = "translate(" + t + ", " + n + ")"),
                  i.$slideTrack.css(o))
                : ((o[i.animType] = "translate3d(" + t + ", " + n + ", 0px)"),
                  i.$slideTrack.css(o)));
      }),
      (t.prototype.setDimensions = function() {
        var e = this;
        !1 === e.options.vertical
          ? !0 === e.options.centerMode &&
            e.$list.css({ padding: "0px " + e.options.centerPadding })
          : (e.$list.height(
              e.$slides.first().outerHeight(!0) * e.options.slidesToShow
            ),
            !0 === e.options.centerMode &&
              e.$list.css({ padding: e.options.centerPadding + " 0px" })),
          (e.listWidth = e.$list.width()),
          (e.listHeight = e.$list.height()),
          !1 === e.options.vertical && !1 === e.options.variableWidth
            ? ((e.slideWidth = Math.ceil(e.listWidth / e.options.slidesToShow)),
              e.$slideTrack.width(
                Math.ceil(
                  e.slideWidth * e.$slideTrack.children(".slick-slide").length
                )
              ))
            : !0 === e.options.variableWidth
            ? e.$slideTrack.width(5e3 * e.slideCount)
            : ((e.slideWidth = Math.ceil(e.listWidth)),
              e.$slideTrack.height(
                Math.ceil(
                  e.$slides.first().outerHeight(!0) *
                    e.$slideTrack.children(".slick-slide").length
                )
              ));
        var t = e.$slides.first().outerWidth(!0) - e.$slides.first().width();
        !1 === e.options.variableWidth &&
          e.$slideTrack.children(".slick-slide").width(e.slideWidth - t);
      }),
      (t.prototype.setFade = function() {
        var t,
          n = this;
        n.$slides.each(function(i, o) {
          (t = n.slideWidth * i * -1),
            !0 === n.options.rtl
              ? e(o).css({
                  position: "relative",
                  right: t,
                  top: 0,
                  zIndex: n.options.zIndex - 2,
                  opacity: 0
                })
              : e(o).css({
                  position: "relative",
                  left: t,
                  top: 0,
                  zIndex: n.options.zIndex - 2,
                  opacity: 0
                });
        }),
          n.$slides
            .eq(n.currentSlide)
            .css({ zIndex: n.options.zIndex - 1, opacity: 1 });
      }),
      (t.prototype.setHeight = function() {
        var e = this;
        if (
          1 === e.options.slidesToShow &&
          !0 === e.options.adaptiveHeight &&
          !1 === e.options.vertical
        ) {
          var t = e.$slides.eq(e.currentSlide).outerHeight(!0);
          e.$list.css("height", t);
        }
      }),
      (t.prototype.setOption = t.prototype.slickSetOption = function() {
        var t,
          n,
          i,
          o,
          r,
          s = this,
          a = !1;
        if (
          ("object" === e.type(arguments[0])
            ? ((i = arguments[0]), (a = arguments[1]), (r = "multiple"))
            : "string" === e.type(arguments[0]) &&
              ((i = arguments[0]),
              (o = arguments[1]),
              (a = arguments[2]),
              "responsive" === arguments[0] && "array" === e.type(arguments[1])
                ? (r = "responsive")
                : void 0 !== arguments[1] && (r = "single")),
          "single" === r)
        )
          s.options[i] = o;
        else if ("multiple" === r)
          e.each(i, function(e, t) {
            s.options[e] = t;
          });
        else if ("responsive" === r)
          for (n in o)
            if ("array" !== e.type(s.options.responsive))
              s.options.responsive = [o[n]];
            else {
              for (t = s.options.responsive.length - 1; t >= 0; )
                s.options.responsive[t].breakpoint === o[n].breakpoint &&
                  s.options.responsive.splice(t, 1),
                  t--;
              s.options.responsive.push(o[n]);
            }
        a && (s.unload(), s.reinit());
      }),
      (t.prototype.setPosition = function() {
        var e = this;
        e.setDimensions(),
          e.setHeight(),
          !1 === e.options.fade
            ? e.setCSS(e.getLeft(e.currentSlide))
            : e.setFade(),
          e.$slider.trigger("setPosition", [e]);
      }),
      (t.prototype.setProps = function() {
        var e = this,
          t = document.body.style;
        (e.positionProp = !0 === e.options.vertical ? "top" : "left"),
          "top" === e.positionProp
            ? e.$slider.addClass("slick-vertical")
            : e.$slider.removeClass("slick-vertical"),
          (void 0 === t.WebkitTransition &&
            void 0 === t.MozTransition &&
            void 0 === t.msTransition) ||
            (!0 === e.options.useCSS && (e.cssTransitions = !0)),
          e.options.fade &&
            ("number" == typeof e.options.zIndex
              ? e.options.zIndex < 3 && (e.options.zIndex = 3)
              : (e.options.zIndex = e.defaults.zIndex)),
          void 0 !== t.OTransform &&
            ((e.animType = "OTransform"),
            (e.transformType = "-o-transform"),
            (e.transitionType = "OTransition"),
            void 0 === t.perspectiveProperty &&
              void 0 === t.webkitPerspective &&
              (e.animType = !1)),
          void 0 !== t.MozTransform &&
            ((e.animType = "MozTransform"),
            (e.transformType = "-moz-transform"),
            (e.transitionType = "MozTransition"),
            void 0 === t.perspectiveProperty &&
              void 0 === t.MozPerspective &&
              (e.animType = !1)),
          void 0 !== t.webkitTransform &&
            ((e.animType = "webkitTransform"),
            (e.transformType = "-webkit-transform"),
            (e.transitionType = "webkitTransition"),
            void 0 === t.perspectiveProperty &&
              void 0 === t.webkitPerspective &&
              (e.animType = !1)),
          void 0 !== t.msTransform &&
            ((e.animType = "msTransform"),
            (e.transformType = "-ms-transform"),
            (e.transitionType = "msTransition"),
            void 0 === t.msTransform && (e.animType = !1)),
          void 0 !== t.transform &&
            !1 !== e.animType &&
            ((e.animType = "transform"),
            (e.transformType = "transform"),
            (e.transitionType = "transition")),
          (e.transformsEnabled =
            e.options.useTransform && null !== e.animType && !1 !== e.animType);
      }),
      (t.prototype.setSlideClasses = function(e) {
        var t,
          n,
          i,
          o,
          r = this;
        if (
          ((n = r.$slider
            .find(".slick-slide")
            .removeClass("slick-active slick-center slick-current")
            .attr("aria-hidden", "true")),
          r.$slides.eq(e).addClass("slick-current"),
          !0 === r.options.centerMode)
        ) {
          var s = r.options.slidesToShow % 2 == 0 ? 1 : 0;
          (t = Math.floor(r.options.slidesToShow / 2)),
            !0 === r.options.infinite &&
              (e >= t && e <= r.slideCount - 1 - t
                ? r.$slides
                    .slice(e - t + s, e + t + 1)
                    .addClass("slick-active")
                    .attr("aria-hidden", "false")
                : ((i = r.options.slidesToShow + e),
                  n
                    .slice(i - t + 1 + s, i + t + 2)
                    .addClass("slick-active")
                    .attr("aria-hidden", "false")),
              0 === e
                ? n
                    .eq(n.length - 1 - r.options.slidesToShow)
                    .addClass("slick-center")
                : e === r.slideCount - 1 &&
                  n.eq(r.options.slidesToShow).addClass("slick-center")),
            r.$slides.eq(e).addClass("slick-center");
        } else
          e >= 0 && e <= r.slideCount - r.options.slidesToShow
            ? r.$slides
                .slice(e, e + r.options.slidesToShow)
                .addClass("slick-active")
                .attr("aria-hidden", "false")
            : n.length <= r.options.slidesToShow
            ? n.addClass("slick-active").attr("aria-hidden", "false")
            : ((o = r.slideCount % r.options.slidesToShow),
              (i = !0 === r.options.infinite ? r.options.slidesToShow + e : e),
              r.options.slidesToShow == r.options.slidesToScroll &&
              r.slideCount - e < r.options.slidesToShow
                ? n
                    .slice(i - (r.options.slidesToShow - o), i + o)
                    .addClass("slick-active")
                    .attr("aria-hidden", "false")
                : n
                    .slice(i, i + r.options.slidesToShow)
                    .addClass("slick-active")
                    .attr("aria-hidden", "false"));
        ("ondemand" !== r.options.lazyLoad &&
          "anticipated" !== r.options.lazyLoad) ||
          r.lazyLoad();
      }),
      (t.prototype.setupInfinite = function() {
        var t,
          n,
          i,
          o = this;
        if (
          (!0 === o.options.fade && (o.options.centerMode = !1),
          !0 === o.options.infinite &&
            !1 === o.options.fade &&
            ((n = null), o.slideCount > o.options.slidesToShow))
        ) {
          for (
            i =
              !0 === o.options.centerMode
                ? o.options.slidesToShow + 1
                : o.options.slidesToShow,
              t = o.slideCount;
            t > o.slideCount - i;
            t -= 1
          )
            (n = t - 1),
              e(o.$slides[n])
                .clone(!0)
                .attr("id", "")
                .attr("data-slick-index", n - o.slideCount)
                .prependTo(o.$slideTrack)
                .addClass("slick-cloned");
          for (t = 0; t < i + o.slideCount; t += 1)
            (n = t),
              e(o.$slides[n])
                .clone(!0)
                .attr("id", "")
                .attr("data-slick-index", n + o.slideCount)
                .appendTo(o.$slideTrack)
                .addClass("slick-cloned");
          o.$slideTrack
            .find(".slick-cloned")
            .find("[id]")
            .each(function() {
              e(this).attr("id", "");
            });
        }
      }),
      (t.prototype.interrupt = function(e) {
        var t = this;
        e || t.autoPlay(), (t.interrupted = e);
      }),
      (t.prototype.selectHandler = function(t) {
        var n = this,
          i = e(t.target).is(".slick-slide")
            ? e(t.target)
            : e(t.target).parents(".slick-slide"),
          o = parseInt(i.attr("data-slick-index"));
        o || (o = 0),
          n.slideCount <= n.options.slidesToShow
            ? n.slideHandler(o, !1, !0)
            : n.slideHandler(o);
      }),
      (t.prototype.slideHandler = function(e, t, n) {
        var i,
          o,
          r,
          s,
          a,
          l = null,
          c = this;
        if (
          ((t = t || !1),
          !(
            (!0 === c.animating && !0 === c.options.waitForAnimate) ||
            (!0 === c.options.fade && c.currentSlide === e)
          ))
        )
          if (
            (!1 === t && c.asNavFor(e),
            (i = e),
            (l = c.getLeft(i)),
            (s = c.getLeft(c.currentSlide)),
            (c.currentLeft = null === c.swipeLeft ? s : c.swipeLeft),
            !1 === c.options.infinite &&
              !1 === c.options.centerMode &&
              (e < 0 || e > c.getDotCount() * c.options.slidesToScroll))
          )
            !1 === c.options.fade &&
              ((i = c.currentSlide),
              !0 !== n
                ? c.animateSlide(s, function() {
                    c.postSlide(i);
                  })
                : c.postSlide(i));
          else if (
            !1 === c.options.infinite &&
            !0 === c.options.centerMode &&
            (e < 0 || e > c.slideCount - c.options.slidesToScroll)
          )
            !1 === c.options.fade &&
              ((i = c.currentSlide),
              !0 !== n
                ? c.animateSlide(s, function() {
                    c.postSlide(i);
                  })
                : c.postSlide(i));
          else {
            if (
              (c.options.autoplay && clearInterval(c.autoPlayTimer),
              (o =
                i < 0
                  ? c.slideCount % c.options.slidesToScroll != 0
                    ? c.slideCount - (c.slideCount % c.options.slidesToScroll)
                    : c.slideCount + i
                  : i >= c.slideCount
                  ? c.slideCount % c.options.slidesToScroll != 0
                    ? 0
                    : i - c.slideCount
                  : i),
              (c.animating = !0),
              c.$slider.trigger("beforeChange", [c, c.currentSlide, o]),
              (r = c.currentSlide),
              (c.currentSlide = o),
              c.setSlideClasses(c.currentSlide),
              c.options.asNavFor &&
                (a = (a = c.getNavTarget()).slick("getSlick")).slideCount <=
                  a.options.slidesToShow &&
                a.setSlideClasses(c.currentSlide),
              c.updateDots(),
              c.updateArrows(),
              !0 === c.options.fade)
            )
              return (
                !0 !== n
                  ? (c.fadeSlideOut(r),
                    c.fadeSlide(o, function() {
                      c.postSlide(o);
                    }))
                  : c.postSlide(o),
                void c.animateHeight()
              );
            !0 !== n
              ? c.animateSlide(l, function() {
                  c.postSlide(o);
                })
              : c.postSlide(o);
          }
      }),
      (t.prototype.startLoad = function() {
        var e = this;
        !0 === e.options.arrows &&
          e.slideCount > e.options.slidesToShow &&
          (e.$prevArrow.hide(), e.$nextArrow.hide()),
          !0 === e.options.dots &&
            e.slideCount > e.options.slidesToShow &&
            e.$dots.hide(),
          e.$slider.addClass("slick-loading");
      }),
      (t.prototype.swipeDirection = function() {
        var e,
          t,
          n,
          i,
          o = this;
        return (
          (e = o.touchObject.startX - o.touchObject.curX),
          (t = o.touchObject.startY - o.touchObject.curY),
          (n = Math.atan2(t, e)),
          (i = Math.round((180 * n) / Math.PI)) < 0 && (i = 360 - Math.abs(i)),
          i <= 45 && i >= 0
            ? !1 === o.options.rtl
              ? "left"
              : "right"
            : i <= 360 && i >= 315
            ? !1 === o.options.rtl
              ? "left"
              : "right"
            : i >= 135 && i <= 225
            ? !1 === o.options.rtl
              ? "right"
              : "left"
            : !0 === o.options.verticalSwiping
            ? i >= 35 && i <= 135
              ? "down"
              : "up"
            : "vertical"
        );
      }),
      (t.prototype.swipeEnd = function(e) {
        var t,
          n,
          i = this;
        if (((i.dragging = !1), (i.swiping = !1), i.scrolling))
          return (i.scrolling = !1), !1;
        if (
          ((i.interrupted = !1),
          (i.shouldClick = !(i.touchObject.swipeLength > 10)),
          void 0 === i.touchObject.curX)
        )
          return !1;
        if (
          (!0 === i.touchObject.edgeHit &&
            i.$slider.trigger("edge", [i, i.swipeDirection()]),
          i.touchObject.swipeLength >= i.touchObject.minSwipe)
        ) {
          switch ((n = i.swipeDirection())) {
            case "left":
            case "down":
              (t = i.options.swipeToSlide
                ? i.checkNavigable(i.currentSlide + i.getSlideCount())
                : i.currentSlide + i.getSlideCount()),
                (i.currentDirection = 0);
              break;
            case "right":
            case "up":
              (t = i.options.swipeToSlide
                ? i.checkNavigable(i.currentSlide - i.getSlideCount())
                : i.currentSlide - i.getSlideCount()),
                (i.currentDirection = 1);
          }
          "vertical" != n &&
            (i.slideHandler(t),
            (i.touchObject = {}),
            i.$slider.trigger("swipe", [i, n]));
        } else
          i.touchObject.startX !== i.touchObject.curX &&
            (i.slideHandler(i.currentSlide), (i.touchObject = {}));
      }),
      (t.prototype.swipeHandler = function(e) {
        var t = this;
        if (
          !(
            !1 === t.options.swipe ||
            ("ontouchend" in document && !1 === t.options.swipe) ||
            (!1 === t.options.draggable && -1 !== e.type.indexOf("mouse"))
          )
        )
          switch (
            ((t.touchObject.fingerCount =
              e.originalEvent && void 0 !== e.originalEvent.touches
                ? e.originalEvent.touches.length
                : 1),
            (t.touchObject.minSwipe = t.listWidth / t.options.touchThreshold),
            !0 === t.options.verticalSwiping &&
              (t.touchObject.minSwipe =
                t.listHeight / t.options.touchThreshold),
            e.data.action)
          ) {
            case "start":
              t.swipeStart(e);
              break;
            case "move":
              t.swipeMove(e);
              break;
            case "end":
              t.swipeEnd(e);
          }
      }),
      (t.prototype.swipeMove = function(e) {
        var t,
          n,
          i,
          o,
          r,
          s,
          a = this;
        return (
          (r = void 0 !== e.originalEvent ? e.originalEvent.touches : null),
          !(!a.dragging || a.scrolling || (r && 1 !== r.length)) &&
            ((t = a.getLeft(a.currentSlide)),
            (a.touchObject.curX = void 0 !== r ? r[0].pageX : e.clientX),
            (a.touchObject.curY = void 0 !== r ? r[0].pageY : e.clientY),
            (a.touchObject.swipeLength = Math.round(
              Math.sqrt(Math.pow(a.touchObject.curX - a.touchObject.startX, 2))
            )),
            (s = Math.round(
              Math.sqrt(Math.pow(a.touchObject.curY - a.touchObject.startY, 2))
            )),
            !a.options.verticalSwiping && !a.swiping && s > 4
              ? ((a.scrolling = !0), !1)
              : (!0 === a.options.verticalSwiping &&
                  (a.touchObject.swipeLength = s),
                (n = a.swipeDirection()),
                void 0 !== e.originalEvent &&
                  a.touchObject.swipeLength > 4 &&
                  ((a.swiping = !0), e.preventDefault()),
                (o =
                  (!1 === a.options.rtl ? 1 : -1) *
                  (a.touchObject.curX > a.touchObject.startX ? 1 : -1)),
                !0 === a.options.verticalSwiping &&
                  (o = a.touchObject.curY > a.touchObject.startY ? 1 : -1),
                (i = a.touchObject.swipeLength),
                (a.touchObject.edgeHit = !1),
                !1 === a.options.infinite &&
                  ((0 === a.currentSlide && "right" === n) ||
                    (a.currentSlide >= a.getDotCount() && "left" === n)) &&
                  ((i = a.touchObject.swipeLength * a.options.edgeFriction),
                  (a.touchObject.edgeHit = !0)),
                !1 === a.options.vertical
                  ? (a.swipeLeft = t + i * o)
                  : (a.swipeLeft =
                      t + i * (a.$list.height() / a.listWidth) * o),
                !0 === a.options.verticalSwiping && (a.swipeLeft = t + i * o),
                !0 !== a.options.fade &&
                  !1 !== a.options.touchMove &&
                  (!0 === a.animating
                    ? ((a.swipeLeft = null), !1)
                    : void a.setCSS(a.swipeLeft))))
        );
      }),
      (t.prototype.swipeStart = function(e) {
        var t,
          n = this;
        if (
          ((n.interrupted = !0),
          1 !== n.touchObject.fingerCount ||
            n.slideCount <= n.options.slidesToShow)
        )
          return (n.touchObject = {}), !1;
        void 0 !== e.originalEvent &&
          void 0 !== e.originalEvent.touches &&
          (t = e.originalEvent.touches[0]),
          (n.touchObject.startX = n.touchObject.curX =
            void 0 !== t ? t.pageX : e.clientX),
          (n.touchObject.startY = n.touchObject.curY =
            void 0 !== t ? t.pageY : e.clientY),
          (n.dragging = !0);
      }),
      (t.prototype.unfilterSlides = t.prototype.slickUnfilter = function() {
        var e = this;
        null !== e.$slidesCache &&
          (e.unload(),
          e.$slideTrack.children(this.options.slide).detach(),
          e.$slidesCache.appendTo(e.$slideTrack),
          e.reinit());
      }),
      (t.prototype.unload = function() {
        var t = this;
        e(".slick-cloned", t.$slider).remove(),
          t.$dots && t.$dots.remove(),
          t.$prevArrow &&
            t.htmlExpr.test(t.options.prevArrow) &&
            t.$prevArrow.remove(),
          t.$nextArrow &&
            t.htmlExpr.test(t.options.nextArrow) &&
            t.$nextArrow.remove(),
          t.$slides
            .removeClass("slick-slide slick-active slick-visible slick-current")
            .attr("aria-hidden", "true")
            .css("width", "");
      }),
      (t.prototype.unslick = function(e) {
        var t = this;
        t.$slider.trigger("unslick", [t, e]), t.destroy();
      }),
      (t.prototype.updateArrows = function() {
        var e = this;
        Math.floor(e.options.slidesToShow / 2),
          !0 === e.options.arrows &&
            e.slideCount > e.options.slidesToShow &&
            !e.options.infinite &&
            (e.$prevArrow
              .removeClass("slick-disabled")
              .attr("aria-disabled", "false"),
            e.$nextArrow
              .removeClass("slick-disabled")
              .attr("aria-disabled", "false"),
            0 === e.currentSlide
              ? (e.$prevArrow
                  .addClass("slick-disabled")
                  .attr("aria-disabled", "true"),
                e.$nextArrow
                  .removeClass("slick-disabled")
                  .attr("aria-disabled", "false"))
              : e.currentSlide >= e.slideCount - e.options.slidesToShow &&
                !1 === e.options.centerMode
              ? (e.$nextArrow
                  .addClass("slick-disabled")
                  .attr("aria-disabled", "true"),
                e.$prevArrow
                  .removeClass("slick-disabled")
                  .attr("aria-disabled", "false"))
              : e.currentSlide >= e.slideCount - 1 &&
                !0 === e.options.centerMode &&
                (e.$nextArrow
                  .addClass("slick-disabled")
                  .attr("aria-disabled", "true"),
                e.$prevArrow
                  .removeClass("slick-disabled")
                  .attr("aria-disabled", "false")));
      }),
      (t.prototype.updateDots = function() {
        var e = this;
        null !== e.$dots &&
          (e.$dots
            .find("li")
            .removeClass("slick-active")
            .end(),
          e.$dots
            .find("li")
            .eq(Math.floor(e.currentSlide / e.options.slidesToScroll))
            .addClass("slick-active"));
      }),
      (t.prototype.visibility = function() {
        var e = this;
        e.options.autoplay &&
          (document[e.hidden] ? (e.interrupted = !0) : (e.interrupted = !1));
      }),
      (e.fn.slick = function() {
        var e,
          n,
          i = this,
          o = arguments[0],
          r = Array.prototype.slice.call(arguments, 1),
          s = i.length;
        for (e = 0; e < s; e++)
          if (
            ("object" == typeof o || void 0 === o
              ? (i[e].slick = new t(i[e], o))
              : (n = i[e].slick[o].apply(i[e].slick, r)),
            void 0 !== n)
          )
            return n;
        return i;
      });
  }),
  $(document).ready(function() {});
var shadowBlock = $(".shadow"),
  popupBlock = $(".popup"),
  dialog = new Dialog(!1, !1, shadowBlock, popupBlock);
$(".popup__show").click(function() {
  var e = $(this).attr("data");
  $(e).hasClass("popup") && dialog.showDialog(e);
}),
  $(".popup__close").click(function() {
    dialog.closeDialog();
  }),
  $(".show-menu").click(function() {
    $(this).hasClass("show-menu--active")
      ? ($(this).removeClass("show-menu--active"),
        $(".nav").removeClass("nav--active"))
      : ($(this).addClass("show-menu--active"),
        $(".nav").addClass("nav--active"));
  }),
  $(document).ready(function() {
    // switched off slider at the top
    //(".slider--header").slick({ autoplay: !0, autoplaySpeed: 2e3 }),
      $(".slider--min").slick({
        infinite: !0,
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay: !0,
        autoplaySpeed: 2e3
      });
  });
