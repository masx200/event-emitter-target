function t(n) {
    return (t = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(t) {
        return typeof t;
    } : function(t) {
        return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
    })(n);
}

function n(t, n, r) {
    return n in t ? Object.defineProperty(t, n, {
        value: r,
        enumerable: !0,
        configurable: !0,
        writable: !0
    }) : t[n] = r, t;
}

function r(t, n) {
    return function(t) {
        if (Array.isArray(t)) return t;
    }(t) || function(t, n) {
        var r = null == t ? null : "undefined" != typeof Symbol && t[Symbol.iterator] || t["@@iterator"];
        if (null == r) return;
        var e, o, i = [], u = !0, a = !1;
        try {
            for (r = r.call(t); !(u = (e = r.next()).done) && (i.push(e.value), !n || i.length !== n); u = !0) ;
        } catch (t) {
            a = !0, o = t;
        } finally {
            try {
                u || null == r.return || r.return();
            } finally {
                if (a) throw o;
            }
        }
        return i;
    }(t, n) || o(t, n) || function() {
        throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
    }();
}

function e(t) {
    return function(t) {
        if (Array.isArray(t)) return i(t);
    }(t) || function(t) {
        if ("undefined" != typeof Symbol && null != t[Symbol.iterator] || null != t["@@iterator"]) return Array.from(t);
    }(t) || o(t) || function() {
        throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
    }();
}

function o(t, n) {
    if (t) {
        if ("string" == typeof t) return i(t, n);
        var r = Object.prototype.toString.call(t).slice(8, -1);
        return "Object" === r && t.constructor && (r = t.constructor.name), "Map" === r || "Set" === r ? Array.from(t) : "Arguments" === r || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r) ? i(t, n) : void 0;
    }
}

function i(t, n) {
    (null == n || n > t.length) && (n = t.length);
    for (var r = 0, e = new Array(n); r < n; r++) e[r] = t[r];
    return e;
}

function u() {
    return {}.toString.call(n({}, Symbol.toStringTag, "EventEmitterTarget"));
}

function a(n) {
    if ("string" != typeof n && "symbol" !== t(n)) throw new TypeError(" EVENTNAME expected: string | symbol;but invalid :" + n);
}

function c(t) {
    if ("function" != typeof t) throw new TypeError(" EVENTLISTENER expected: (event?: any) => void;but invalid:" + t);
}

function f() {
    var t, o = new Map, i = new WeakMap;
    function f(t) {
        var n = o.get(t);
        return n || (n = new Set, o.set(t, n)), n;
    }
    function l(t) {
        (a(t), o.has(t)) && f(t).clear();
    }
    function y(t, n) {
        (a(t), o.has(t)) && f(t).forEach((function(t) {
            Promise.resolve().then((function() {
                t(n);
            }));
        }));
    }
    function s(t, n) {
        a(t), c(n), f(t).add(n);
    }
    function m(t, n) {
        f(t).delete(n);
    }
    function b(t, n) {
        a(t), c(n), m(t, n), function(t, n) {
            var r = f(t), e = i.get(n);
            e && r.delete(e);
        }(t, n);
    }
    function p() {
        return e(o).map((function(t) {
            var n = r(t, 2);
            return [ n[0], e(n[1]) ];
        }))[Symbol.iterator]();
    }
    return n(t = {}, Symbol.toPrimitive, u), n(t, Symbol.toStringTag, "EventEmitterTarget"), 
    n(t, Symbol.iterator, p), n(t, "entries", p), n(t, "listenerCount", (function(t) {
        return a(t), o.has(t) ? f(t).size : 0;
    })), n(t, "clear", l), n(t, "removeAllListeners", l), n(t, "on", s), n(t, "addListener", s), 
    n(t, "off", b), n(t, "removeListener", b), n(t, "once", (function(t, n) {
        a(t), c(n);
        var r = !1, e = i.get(n);
        if (!e) {
            e = function e(o) {
                m(t, e), m(t, n), r || (r = !0, n(o));
            }, i.set(n, e);
        }
        m(t, n), s(t, e);
    })), n(t, "emit", y), n(t, "dispatch", y), n(t, "eventNames", (function() {
        return e(o.keys());
    })), n(t, "listeners", (function(t) {
        return a(t), o.has(t) ? e(f(t)) : [];
    })), t;
}

var l = function(t) {
    var n = Symbol();
    try {
        var r = new Function("return async()=>{}")()();
    } catch (t) {}
    function e() {
        var t = f();
        return this && this instanceof e ? (Object.assign(this, t), this) : Reflect.construct(e, []);
    }
    return Reflect.set(e, n, r), e;
}();

export default l;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VzIjpbIi4uL3NyYy90b3ByaW1pdGl2ZS50cyIsIi4uL3NyYy90b1N0cmluZ1RhZy50cyIsIi4uL3NyYy9hc3NlcnRFVkVOVE5BTUUudHMiLCIuLi9zcmMvYXNzZXJ0RVZFTlRMSVNURU5FUi50cyIsIi4uL3NyYy9jcmVhdGVFdmVudEVtaXR0ZXJUYXJnZXQudHMiLCIuLi9zcmMvaW5kZXgudHMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgdG9TdHJpbmdUYWcgfSBmcm9tIFwiLi90b1N0cmluZ1RhZ1wiO1xuXG5leHBvcnQgZnVuY3Rpb24gdG9wcmltaXRpdmUoKTogc3RyaW5nIHtcbiAgICByZXR1cm4ge30udG9TdHJpbmcuY2FsbCh7IFtTeW1ib2wudG9TdHJpbmdUYWddOiB0b1N0cmluZ1RhZyB9KTtcbn1cbiIsImV4cG9ydCBjb25zdCB0b1N0cmluZ1RhZyA9IFwiRXZlbnRFbWl0dGVyVGFyZ2V0XCI7XG4iLCJpbXBvcnQgeyBFVkVOVE5BTUUgfSBmcm9tIFwiLi9pbmRleFwiO1xuXG5leHBvcnQgZnVuY3Rpb24gYXNzZXJ0RVZFTlROQU1FKG5hbWU6IGFueSk6IGFzc2VydHMgbmFtZSBpcyBFVkVOVE5BTUUge1xuICAgIGlmIChcInN0cmluZ1wiICE9PSB0eXBlb2YgbmFtZSAmJiBcInN5bWJvbFwiICE9PSB0eXBlb2YgbmFtZSkge1xuICAgICAgICB0aHJvdyBuZXcgVHlwZUVycm9yKFxuICAgICAgICAgICAgXCIgRVZFTlROQU1FIGV4cGVjdGVkOiBzdHJpbmcgfCBzeW1ib2w7YnV0IGludmFsaWQgOlwiICsgbmFtZVxuICAgICAgICApO1xuICAgIH1cbn1cbiIsImltcG9ydCB7IEVWRU5UTElTVEVORVIgfSBmcm9tIFwiLi9pbmRleFwiO1xuXG5leHBvcnQgZnVuY3Rpb24gYXNzZXJ0RVZFTlRMSVNURU5FUihcbiAgICBjYWxsYmFjazogYW55XG4pOiBhc3NlcnRzIGNhbGxiYWNrIGlzIEVWRU5UTElTVEVORVIge1xuICAgIGlmIChcImZ1bmN0aW9uXCIgIT09IHR5cGVvZiBjYWxsYmFjaykge1xuICAgICAgICB0aHJvdyBuZXcgVHlwZUVycm9yKFxuICAgICAgICAgICAgXCIgRVZFTlRMSVNURU5FUiBleHBlY3RlZDogKGV2ZW50PzogYW55KSA9PiB2b2lkO2J1dCBpbnZhbGlkOlwiICtcbiAgICAgICAgICAgICAgICBjYWxsYmFja1xuICAgICAgICApO1xuICAgIH1cbn1cbiIsImltcG9ydCB7IEVWRU5UTkFNRSwgRVZFTlRMSVNURU5FUiB9IGZyb20gXCIuL2luZGV4XCI7XG5pbXBvcnQgeyB0b3ByaW1pdGl2ZSB9IGZyb20gXCIuL3RvcHJpbWl0aXZlXCI7XG5pbXBvcnQgeyB0b1N0cmluZ1RhZyB9IGZyb20gXCIuL3RvU3RyaW5nVGFnXCI7XG5pbXBvcnQgeyBhc3NlcnRFVkVOVE5BTUUgfSBmcm9tIFwiLi9hc3NlcnRFVkVOVE5BTUVcIjtcbmltcG9ydCB7IGFzc2VydEVWRU5UTElTVEVORVIgfSBmcm9tIFwiLi9hc3NlcnRFVkVOVExJU1RFTkVSXCI7XG5leHBvcnQgZnVuY3Rpb24gY3JlYXRlRXZlbnRFbWl0dGVyVGFyZ2V0KCkge1xuICAgIGNvbnN0IOebkeWQrOWZqOWbnuiwg+aYoOWwhCA9IG5ldyBNYXA8RVZFTlROQU1FLCBTZXQ8RVZFTlRMSVNURU5FUj4+KCk7XG4gICAgY29uc3Qg5rqQ5Zue6LCD5Yiw5LiA5qyh5YyF6KOFID0gbmV3IFdlYWtNYXA8RVZFTlRMSVNURU5FUiwgRVZFTlRMSVNURU5FUj4oKTtcbiAgICBmdW5jdGlvbiDojrflj5bnm5HlkKzlmajpm4blkIgobmFtZTogRVZFTlROQU1FKTogU2V0PEVWRU5UTElTVEVORVI+IHtcbiAgICAgICAgbGV0IOebkeWQrOWZqOmbhuWQiDogU2V0PEVWRU5UTElTVEVORVI+IHwgdW5kZWZpbmVkID1cbiAgICAgICAgICAgIOebkeWQrOWZqOWbnuiwg+aYoOWwhC5nZXQobmFtZSk7XG4gICAgICAgIGlmICgh55uR5ZCs5Zmo6ZuG5ZCIKSB7XG4gICAgICAgICAgICDnm5HlkKzlmajpm4blkIggPSBuZXcgU2V0KCk7XG4gICAgICAgICAgICDnm5HlkKzlmajlm57osIPmmKDlsIQuc2V0KG5hbWUsIOebkeWQrOWZqOmbhuWQiCk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIOebkeWQrOWZqOmbhuWQiDtcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBjbGVhcihuYW1lOiBFVkVOVE5BTUUpIHtcbiAgICAgICAgYXNzZXJ0RVZFTlROQU1FKG5hbWUpO1xuICAgICAgICBpZiAo55uR5ZCs5Zmo5Zue6LCD5pig5bCELmhhcyhuYW1lKSkge1xuICAgICAgICAgICAgY29uc3Qg55uR5ZCs5Zmo6ZuG5ZCIID0g6I635Y+W55uR5ZCs5Zmo6ZuG5ZCIKG5hbWUpO1xuICAgICAgICAgICAg55uR5ZCs5Zmo6ZuG5ZCILmNsZWFyKCk7XG4gICAgICAgIH1cbiAgICB9XG4gICAgZnVuY3Rpb24gZW1pdChuYW1lOiBFVkVOVE5BTUUsIGV2ZW50PzogYW55KSB7XG4gICAgICAgIGFzc2VydEVWRU5UTkFNRShuYW1lKTtcbiAgICAgICAgaWYgKOebkeWQrOWZqOWbnuiwg+aYoOWwhC5oYXMobmFtZSkpIHtcbiAgICAgICAgICAgIGNvbnN0IOebkeWQrOWZqOmbhuWQiCA9IOiOt+WPluebkeWQrOWZqOmbhuWQiChuYW1lKTtcbiAgICAgICAgICAgIOebkeWQrOWZqOmbhuWQiC5mb3JFYWNoKChsaXN0ZW5lcikgPT4ge1xuICAgICAgICAgICAgICAgIFByb21pc2UucmVzb2x2ZSgpLnRoZW4oKCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICBsaXN0ZW5lcihldmVudCk7XG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgIH1cbiAgICBmdW5jdGlvbiBvbmNlKG5hbWU6IEVWRU5UTkFNRSwgY2FsbGJhY2s6IEVWRU5UTElTVEVORVIpIHtcbiAgICAgICAgYXNzZXJ0RVZFTlROQU1FKG5hbWUpO1xuICAgICAgICBhc3NlcnRFVkVOVExJU1RFTkVSKGNhbGxiYWNrKTtcbiAgICAgICAgbGV0IGZpcmVkID0gZmFsc2U7XG4gICAgICAgIGxldCB3cmFwcGVkID0g5rqQ5Zue6LCD5Yiw5LiA5qyh5YyF6KOFLmdldChjYWxsYmFjayk7XG4gICAgICAgIGlmICghd3JhcHBlZCkge1xuICAgICAgICAgICAgY29uc3Qg5LiA5qyh5YyF6KOFID0gKGV2ZW50PzogYW55KSA9PiB7XG4gICAgICAgICAgICAgICAgb2ZmcmF3KG5hbWUsIOS4gOasoeWMheijhSk7XG4gICAgICAgICAgICAgICAgb2ZmcmF3KG5hbWUsIGNhbGxiYWNrKTtcbiAgICAgICAgICAgICAgICBpZiAoIWZpcmVkKSB7XG4gICAgICAgICAgICAgICAgICAgIGZpcmVkID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICAgICAgY2FsbGJhY2soZXZlbnQpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH07XG4gICAgICAgICAgICB3cmFwcGVkID0g5LiA5qyh5YyF6KOFO1xuICAgICAgICAgICAg5rqQ5Zue6LCD5Yiw5LiA5qyh5YyF6KOFLnNldChjYWxsYmFjaywgd3JhcHBlZCk7XG4gICAgICAgIH1cbiAgICAgICAgb2ZmcmF3KG5hbWUsIGNhbGxiYWNrKTtcbiAgICAgICAgb24obmFtZSwgd3JhcHBlZCk7XG4gICAgfVxuICAgIGZ1bmN0aW9uIG9uKG5hbWU6IEVWRU5UTkFNRSwgY2FsbGJhY2s6IEVWRU5UTElTVEVORVIpIHtcbiAgICAgICAgYXNzZXJ0RVZFTlROQU1FKG5hbWUpO1xuICAgICAgICBhc3NlcnRFVkVOVExJU1RFTkVSKGNhbGxiYWNrKTtcbiAgICAgICAgY29uc3Qg55uR5ZCs5Zmo6ZuG5ZCIID0g6I635Y+W55uR5ZCs5Zmo6ZuG5ZCIKG5hbWUpO1xuICAgICAgICDnm5HlkKzlmajpm4blkIguYWRkKGNhbGxiYWNrKTtcbiAgICB9XG4gICAgZnVuY3Rpb24gb2ZmcmF3KG5hbWU6IEVWRU5UTkFNRSwgY2FsbGJhY2s6IEVWRU5UTElTVEVORVIpIHtcbiAgICAgICAgY29uc3Qg55uR5ZCs5Zmo6ZuG5ZCIID0g6I635Y+W55uR5ZCs5Zmo6ZuG5ZCIKG5hbWUpO1xuICAgICAgICDnm5HlkKzlmajpm4blkIguZGVsZXRlKGNhbGxiYWNrKTtcbiAgICB9XG4gICAgZnVuY3Rpb24gb2Zmd3JhcChuYW1lOiBFVkVOVE5BTUUsIGNhbGxiYWNrOiBFVkVOVExJU1RFTkVSKSB7XG4gICAgICAgIGNvbnN0IOebkeWQrOWZqOmbhuWQiCA9IOiOt+WPluebkeWQrOWZqOmbhuWQiChuYW1lKTtcbiAgICAgICAgbGV0IOS4gOasoeWMheijhSA9IOa6kOWbnuiwg+WIsOS4gOasoeWMheijhS5nZXQoY2FsbGJhY2spO1xuICAgICAgICBpZiAo5LiA5qyh5YyF6KOFKSB7XG4gICAgICAgICAgICDnm5HlkKzlmajpm4blkIguZGVsZXRlKOS4gOasoeWMheijhSk7XG4gICAgICAgIH1cbiAgICB9XG4gICAgZnVuY3Rpb24gb2ZmKG5hbWU6IEVWRU5UTkFNRSwgY2FsbGJhY2s6IEVWRU5UTElTVEVORVIpIHtcbiAgICAgICAgYXNzZXJ0RVZFTlROQU1FKG5hbWUpO1xuICAgICAgICBhc3NlcnRFVkVOVExJU1RFTkVSKGNhbGxiYWNrKTtcblxuICAgICAgICBvZmZyYXcobmFtZSwgY2FsbGJhY2spO1xuICAgICAgICBvZmZ3cmFwKG5hbWUsIGNhbGxiYWNrKTtcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBldmVudE5hbWVzKCk6IEVWRU5UTkFNRVtdIHtcbiAgICAgICAgcmV0dXJuIFsuLi7nm5HlkKzlmajlm57osIPmmKDlsIQua2V5cygpXTtcbiAgICB9XG4gICAgZnVuY3Rpb24gbGlzdGVuZXJzKG5hbWU6IEVWRU5UTkFNRSk6IEVWRU5UTElTVEVORVJbXSB7XG4gICAgICAgIGFzc2VydEVWRU5UTkFNRShuYW1lKTtcbiAgICAgICAgaWYgKOebkeWQrOWZqOWbnuiwg+aYoOWwhC5oYXMobmFtZSkpIHtcbiAgICAgICAgICAgIGNvbnN0IOebkeWQrOWZqOmbhuWQiCA9IOiOt+WPluebkeWQrOWZqOmbhuWQiChuYW1lKTtcbiAgICAgICAgICAgIHJldHVybiBbLi4u55uR5ZCs5Zmo6ZuG5ZCIXTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHJldHVybiBbXTtcbiAgICAgICAgfVxuICAgIH1cbiAgICBmdW5jdGlvbiBsaXN0ZW5lckNvdW50KG5hbWU6IEVWRU5UTkFNRSk6IG51bWJlciB7XG4gICAgICAgIGFzc2VydEVWRU5UTkFNRShuYW1lKTtcbiAgICAgICAgaWYgKOebkeWQrOWZqOWbnuiwg+aYoOWwhC5oYXMobmFtZSkpIHtcbiAgICAgICAgICAgIGNvbnN0IOebkeWQrOWZqOmbhuWQiCA9IOiOt+WPluebkeWQrOWZqOmbhuWQiChuYW1lKTtcbiAgICAgICAgICAgIHJldHVybiDnm5HlkKzlmajpm4blkIguc2l6ZTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHJldHVybiAwO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gaXRlcmF0b3IoKTogSXRlcmFibGVJdGVyYXRvcjxbRVZFTlROQU1FLCBFVkVOVExJU1RFTkVSW11dPiB7XG4gICAgICAgIGxldCByZXN1bHRhcnI6IEFycmF5PFtFVkVOVE5BTUUsIEVWRU5UTElTVEVORVJbXV0+ID0gW1xuICAgICAgICAgICAgLi4u55uR5ZCs5Zmo5Zue6LCD5pig5bCELFxuICAgICAgICBdLm1hcCgoW2tleSwgdmFsdWVdKSA9PiB7XG4gICAgICAgICAgICByZXR1cm4gW2tleSwgWy4uLnZhbHVlXV0gYXMgW0VWRU5UTkFNRSwgRVZFTlRMSVNURU5FUltdXTtcbiAgICAgICAgfSk7XG5cbiAgICAgICAgcmV0dXJuIHJlc3VsdGFycltTeW1ib2wuaXRlcmF0b3JdKCk7XG4gICAgfVxuICAgIGNvbnN0IGV2ZW50dGFyZ2V0ID0ge1xuICAgICAgICBbU3ltYm9sLnRvUHJpbWl0aXZlXTogdG9wcmltaXRpdmUsXG5cbiAgICAgICAgW1N5bWJvbC50b1N0cmluZ1RhZ106IHRvU3RyaW5nVGFnLFxuICAgICAgICBbU3ltYm9sLml0ZXJhdG9yXTogaXRlcmF0b3IsXG4gICAgICAgIGVudHJpZXM6IGl0ZXJhdG9yLFxuICAgICAgICBsaXN0ZW5lckNvdW50LFxuICAgICAgICBjbGVhcixcbiAgICAgICAgcmVtb3ZlQWxsTGlzdGVuZXJzOiBjbGVhcixcbiAgICAgICAgb24sXG4gICAgICAgIGFkZExpc3RlbmVyOiBvbixcbiAgICAgICAgb2ZmLFxuICAgICAgICByZW1vdmVMaXN0ZW5lcjogb2ZmLFxuICAgICAgICBvbmNlLFxuICAgICAgICBlbWl0LFxuICAgICAgICBkaXNwYXRjaDogZW1pdCxcbiAgICAgICAgZXZlbnROYW1lcyxcbiAgICAgICAgbGlzdGVuZXJzLFxuICAgIH07XG4gICAgcmV0dXJuIGV2ZW50dGFyZ2V0O1xufVxuIiwiaW1wb3J0IHsgY3JlYXRlRXZlbnRFbWl0dGVyVGFyZ2V0IH0gZnJvbSBcIi4vY3JlYXRlRXZlbnRFbWl0dGVyVGFyZ2V0XCI7XG5cbmV4cG9ydCB0eXBlIEV2ZW50RW1pdHRlclRhcmdldCA9IFJldHVyblR5cGU8dHlwZW9mIGNyZWF0ZUV2ZW50RW1pdHRlclRhcmdldD47XG5leHBvcnQgaW50ZXJmYWNlIEV2ZW50RW1pdHRlclRhcmdldENvbnN0cnVjdG9yIHtcbiAgICBuZXcgKCk6IEV2ZW50RW1pdHRlclRhcmdldDtcbiAgICAoKTogRXZlbnRFbWl0dGVyVGFyZ2V0O1xufVxuY29uc3QgRXZlbnRFbWl0dGVyVGFyZ2V0Q2xhc3M6IEV2ZW50RW1pdHRlclRhcmdldENvbnN0cnVjdG9yID0gKChub29wKSA9PiB7XG4gICAgdmFyIGEgPSBub29wKCk7XG4gICAgdHJ5IHtcbiAgICAgICAgdmFyIGIgPSBuZXcgRnVuY3Rpb24oXCJyZXR1cm4gYXN5bmMoKT0+e31cIikoKSgpO1xuICAgIH0gY2F0Y2ggKGVycm9yKSB7fVxuXG4gICAgZnVuY3Rpb24gRXZlbnRFbWl0dGVyVGFyZ2V0Q2xhc3ModGhpczogYW55KTogRXZlbnRFbWl0dGVyVGFyZ2V0IHtcbiAgICAgICAgY29uc3QgZXZlbnRlbWl0dGVydGFyZ2V0ID0gY3JlYXRlRXZlbnRFbWl0dGVyVGFyZ2V0KCk7XG4gICAgICAgIGlmICh0aGlzICYmIHRoaXMgaW5zdGFuY2VvZiBFdmVudEVtaXR0ZXJUYXJnZXRDbGFzcykge1xuICAgICAgICAgICAgT2JqZWN0LmFzc2lnbih0aGlzLCBldmVudGVtaXR0ZXJ0YXJnZXQpO1xuICAgICAgICAgICAgcmV0dXJuIHRoaXMgYXMgRXZlbnRFbWl0dGVyVGFyZ2V0O1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgcmV0dXJuIFJlZmxlY3QuY29uc3RydWN0KEV2ZW50RW1pdHRlclRhcmdldENsYXNzLCBbXSk7XG4gICAgICAgIH1cbiAgICB9XG4gICAgUmVmbGVjdC5zZXQoRXZlbnRFbWl0dGVyVGFyZ2V0Q2xhc3MsIGEsIGIpO1xuXG4gICAgcmV0dXJuIEV2ZW50RW1pdHRlclRhcmdldENsYXNzIGFzIEV2ZW50RW1pdHRlclRhcmdldENvbnN0cnVjdG9yO1xufSkoU3ltYm9sKTtcbmV4cG9ydCB0eXBlIEVWRU5UTkFNRSA9IHN0cmluZyB8IHN5bWJvbDtcbmV4cG9ydCB0eXBlIEVWRU5UTElTVEVORVIgPSAoZXZlbnQ/OiBhbnkpID0+IHZvaWQ7XG5leHBvcnQgZGVmYXVsdCBFdmVudEVtaXR0ZXJUYXJnZXRDbGFzcztcbiJdLCJuYW1lcyI6WyJ0b3ByaW1pdGl2ZSIsInRvU3RyaW5nIiwiY2FsbCIsIlN5bWJvbCIsInRvU3RyaW5nVGFnIiwiYXNzZXJ0RVZFTlROQU1FIiwibmFtZSIsIlR5cGVFcnJvciIsImFzc2VydEVWRU5UTElTVEVORVIiLCJjYWxsYmFjayIsImNyZWF0ZUV2ZW50RW1pdHRlclRhcmdldCIsIuebkeWQrOWZqOWbnuiwg+aYoOWwhCIsIk1hcCIsIua6kOWbnuiwg+WIsOS4gOasoeWMheijhSIsIldlYWtNYXAiLCLojrflj5bnm5HlkKzlmajpm4blkIgiLCLnm5HlkKzlmajpm4blkIgiLCJnZXQiLCJTZXQiLCJzZXQiLCJjbGVhciIsImhhcyIsImVtaXQiLCJldmVudCIsImZvckVhY2giLCJsaXN0ZW5lciIsIlByb21pc2UiLCJyZXNvbHZlIiwidGhlbiIsIm9uIiwiYWRkIiwib2ZmcmF3Iiwib2ZmIiwi5LiA5qyh5YyF6KOFIiwib2Zmd3JhcCIsIml0ZXJhdG9yIiwiX3RvQ29uc3VtYWJsZUFycmF5IiwibWFwIiwidG9QcmltaXRpdmUiLCJzaXplIiwiZmlyZWQiLCJ3cmFwcGVkIiwia2V5cyIsIkV2ZW50RW1pdHRlclRhcmdldENsYXNzIiwibm9vcCIsImEiLCJiIiwiRnVuY3Rpb24iLCJlcnJvciIsImV2ZW50ZW1pdHRlcnRhcmdldCIsInRoaXMiLCJPYmplY3QiLCJhc3NpZ24iLCJSZWZsZWN0IiwiY29uc3RydWN0Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztTQUVnQkE7V0FDTCxHQUFHQyxTQUFTQyxXQUFRQyxPQUFPQyxhQ0hYOzs7U0NFWEMsRUFBZ0JDO1FBQ3hCLG1CQUFvQkEsS0FBUSxlQUFvQkEsVUFDMUMsSUFBSUMsVUFDTix1REFBdUREOzs7U0NIbkRFLEVBQ1pDO1FBRUkscUJBQXNCQSxTQUNoQixJQUFJRixVQUNOLGdFQUNJRTs7O1NDSEFDO1dBQ05DLElBQVUsSUFBSUMsS0FDZEMsSUFBVyxJQUFJQzthQUNaQyxFQUFRVDtZQUNUVSxJQUNBTCxFQUFRTSxJQUFJWDtlQUNYVSxNQUNEQSxJQUFRLElBQUlFLEtBQ1pQLEVBQVFRLElBQUliLEdBQU1VLEtBRWZBOzthQUdGSSxFQUFNZDtTQUNYRCxFQUFnQkMsSUFDWkssRUFBUVUsSUFBSWYsT0FDRVMsRUFBUVQsR0FDaEJjOzthQUdMRSxFQUFLaEIsR0FBaUJpQjtTQUMzQmxCLEVBQWdCQyxJQUNaSyxFQUFRVSxJQUFJZixPQUNFUyxFQUFRVCxHQUNoQmtCLFNBQVEsU0FBQ0M7WUFDWEMsUUFBUUMsVUFBVUMsTUFBSztnQkFDbkJILEVBQVNGOzs7O2FBeUJoQk0sRUFBR3ZCLEdBQWlCRztRQUN6QkosRUFBZ0JDLElBQ2hCRSxFQUFvQkMsSUFDTk0sRUFBUVQsR0FDaEJ3QixJQUFJckI7O2FBRUxzQixFQUFPekIsR0FBaUJHO1FBQ2ZNLEVBQVFULFVBQ1RHOzthQVNSdUIsRUFBSTFCLEdBQWlCRztRQUMxQkosRUFBZ0JDLElBQ2hCRSxFQUFvQkMsSUFFcEJzQixFQUFPekIsR0FBTUcsYUFYQUgsR0FBaUJHO2dCQUN4Qk8sSUFBUUQsRUFBUVQsSUFDbEIyQixJQUFPcEIsRUFBU0ksSUFBSVI7WUFDcEJ3QixLQUNBakIsU0FBYWlCO1NBUWpCQyxDQUFRNUIsR0FBTUc7O2FBeUJUMEI7ZUFDZ0RDLEVBQzlDekIsR0FDTDBCLEtBQUk7O21CQUNLO1lBR01sQyxPQUFPZ0M7O3FCQUd2QmhDLE9BQU9tQyxhQUFjdEMsU0FFckJHLE9BQU9DLGFIbkhXO1NHb0hsQkQsT0FBT2dDLFVBQVdBLG9CQUNWQSxvQ0F4QlU3QjtlQUNuQkQsRUFBZ0JDLElBQ1pLLEVBQVFVLElBQUlmLEtBQ0VTLEVBQVFULEdBQ1RpQyxPQUVOO3VCQW9CWG5CLCtCQUNvQkEsZUFDcEJTLHdCQUNhQTtnQkFDYkcsMkJBQ2dCQSwyQkF4Rk4xQixHQUFpQkc7UUFDM0JKLEVBQWdCQyxJQUNoQkUsRUFBb0JDO1lBQ2hCK0IsS0FBUSxHQUNSQyxJQUFVNUIsRUFBU0ksSUFBSVI7YUFDdEJnQyxHQUFTO1lBU1ZBLElBUmEsU0FBUFIsRUFBUVY7Z0JBQ1ZRLEVBQU96QixHQUFNMkIsSUFDYkYsRUFBT3pCLEdBQU1HLElBQ1IrQixNQUNEQSxLQUFRLEdBQ1IvQixFQUFTYztlQUlqQlYsRUFBU00sSUFBSVYsR0FBVWdDOztRQUUzQlYsRUFBT3pCLEdBQU1HLElBQ2JvQixFQUFHdkIsR0FBTW1DO3NCQXdFVG5CLHFCQUNVQTtpQkE3Q0NYLEVBQVErQjtxQ0FFSnBDO2VBQ2ZELEVBQWdCQyxJQUNaSyxFQUFRVSxJQUFJZixPQUNFUyxFQUFRVCxNQUdmOzs7O0lDbkZicUMsSUFBMEQsU0FBQ0M7UUFDekRDLElBaUJMMUM7O1lBZlMyQyxJQUFJLElBQUlDLFNBQVMscUJBQWIsRUFBQTtNQUNWLE9BQU9DO2FBRUFMO1lBQ0NNLElBQXFCdkM7ZUFDdkJ3QyxRQUFRQSxnQkFBZ0JQLEtBQ3hCUSxPQUFPQyxPQUFPRixNQUFNRCxJQUNiQyxRQUVBRyxRQUFRQyxVQUFVWCxHQUF5Qjs7V0FHMURVLFFBQVFsQyxJQUFJd0IsR0FBeUJFLEdBQUdDLElBRWpDSDtDQWpCcUQ7OyJ9
