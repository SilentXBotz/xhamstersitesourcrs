/* Built on 2026-04-20 08:12:17 */
function createRequestObject() {
    var e;
    try {
        e = new XMLHttpRequest
    } catch (t) {
        e = new ActiveXObject("Microsoft.XMLHTTP")
    }
    return e
}
function formatDuration(e) {
    return e > 3600 ? Math.floor(e / 3600) + "H " + Math.floor(e % 3600 / 60) + "min" : e > 300 ? Math.floor(e / 60) + "min" : e > 60 ? Math.floor(e / 60) + "min " + Math.floor(e % 60) + "sec" : Math.floor(e) + "sec"
}
"undefined" != typeof window && function(e, t) {
    "object" == typeof exports && "object" == typeof module ? module.exports = t() : "function" == typeof define && define.amd ? define([], t) : "object" == typeof exports ? exports.Hls = t() : e.Hls = t()
}(this, function() {
    return function(e) {
        function t(s) {
            if (i[s])
                return i[s].exports;
            var r = i[s] = {
                i: s,
                l: !1,
                exports: {}
            };
            return e[s].call(r.exports, r, r.exports, t),
            r.l = !0,
            r.exports
        }
        var i = {};
        return t.m = e,
        t.c = i,
        t.d = function(e, i, s) {
            t.o(e, i) || Object.defineProperty(e, i, {
                enumerable: !0,
                get: s
            })
        }
        ,
        t.r = function(e) {
            "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(e, Symbol.toStringTag, {
                value: "Module"
            }),
            Object.defineProperty(e, "__esModule", {
                value: !0
            })
        }
        ,
        t.t = function(e, i) {
            if (1 & i && (e = t(e)),
            8 & i)
                return e;
            if (4 & i && "object" == typeof e && e && e.__esModule)
                return e;
            var s = Object.create(null);
            if (t.r(s),
            Object.defineProperty(s, "default", {
                enumerable: !0,
                value: e
            }),
            2 & i && "string" != typeof e)
                for (var r in e)
                    t.d(s, r, function(t) {
                        return e[t]
                    }
                    .bind(null, r));
            return s
        }
        ,
        t.n = function(e) {
            var i = e && e.__esModule ? function() {
                return e["default"]
            }
            : function() {
                return e
            }
            ;
            return t.d(i, "a", i),
            i
        }
        ,
        t.o = function(e, t) {
            return Object.prototype.hasOwnProperty.call(e, t)
        }
        ,
        t.p = "/dist/",
        t(t.s = "./src/hls.js")
    }({
        "./node_modules/eventemitter3/index.js": function(e, t, i) {
            "use strict";
            function s() {}
            function r(e, t, i) {
                this.fn = e,
                this.context = t,
                this.once = i || !1
            }
            function o(e, t, i, s, o) {
                if ("function" != typeof i)
                    throw new TypeError("The listener must be a function");
                var n = new r(i,s || e,o)
                  , a = d ? d + t : t;
                return e._events[a] ? e._events[a].fn ? e._events[a] = [e._events[a], n] : e._events[a].push(n) : (e._events[a] = n,
                e._eventsCount++),
                e
            }
            function n(e, t) {
                0 == --e._eventsCount ? e._events = new s : delete e._events[t]
            }
            function a() {
                this._events = new s,
                this._eventsCount = 0
            }
            var l = Object.prototype.hasOwnProperty
              , d = "~";
            Object.create && (s.prototype = Object.create(null),
            (new s).__proto__ || (d = !1)),
            a.prototype.eventNames = function() {
                var e, t, i = [];
                if (0 === this._eventsCount)
                    return i;
                for (t in e = this._events)
                    l.call(e, t) && i.push(d ? t.slice(1) : t);
                return Object.getOwnPropertySymbols ? i.concat(Object.getOwnPropertySymbols(e)) : i
            }
            ,
            a.prototype.listeners = function(e) {
                var t = d ? d + e : e
                  , i = this._events[t];
                if (!i)
                    return [];
                if (i.fn)
                    return [i.fn];
                for (var s = 0, r = i.length, o = new Array(r); s < r; s++)
                    o[s] = i[s].fn;
                return o
            }
            ,
            a.prototype.listenerCount = function(e) {
                var t = d ? d + e : e
                  , i = this._events[t];
                return i ? i.fn ? 1 : i.length : 0
            }
            ,
            a.prototype.emit = function(e, t, i, s, r, o) {
                var n = d ? d + e : e;
                if (!this._events[n])
                    return !1;
                var a, l, u = this._events[n], h = arguments.length;
                if (u.fn) {
                    switch (u.once && this.removeListener(e, u.fn, undefined, !0),
                    h) {
                    case 1:
                        return u.fn.call(u.context),
                        !0;
                    case 2:
                        return u.fn.call(u.context, t),
                        !0;
                    case 3:
                        return u.fn.call(u.context, t, i),
                        !0;
                    case 4:
                        return u.fn.call(u.context, t, i, s),
                        !0;
                    case 5:
                        return u.fn.call(u.context, t, i, s, r),
                        !0;
                    case 6:
                        return u.fn.call(u.context, t, i, s, r, o),
                        !0
                    }
                    for (l = 1,
                    a = new Array(h - 1); l < h; l++)
                        a[l - 1] = arguments[l];
                    u.fn.apply(u.context, a)
                } else {
                    var c, f = u.length;
                    for (l = 0; l < f; l++)
                        switch (u[l].once && this.removeListener(e, u[l].fn, undefined, !0),
                        h) {
                        case 1:
                            u[l].fn.call(u[l].context);
                            break;
                        case 2:
                            u[l].fn.call(u[l].context, t);
                            break;
                        case 3:
                            u[l].fn.call(u[l].context, t, i);
                            break;
                        case 4:
                            u[l].fn.call(u[l].context, t, i, s);
                            break;
                        default:
                            if (!a)
                                for (c = 1,
                                a = new Array(h - 1); c < h; c++)
                                    a[c - 1] = arguments[c];
                            u[l].fn.apply(u[l].context, a)
                        }
                }
                return !0
            }
            ,
            a.prototype.on = function(e, t, i) {
                return o(this, e, t, i, !1)
            }
            ,
            a.prototype.once = function(e, t, i) {
                return o(this, e, t, i, !0)
            }
            ,
            a.prototype.removeListener = function(e, t, i, s) {
                var r = d ? d + e : e;
                if (!this._events[r])
                    return this;
                if (!t)
                    return n(this, r),
                    this;
                var o = this._events[r];
                if (o.fn)
                    o.fn !== t || s && !o.once || i && o.context !== i || n(this, r);
                else {
                    for (var a = 0, l = [], u = o.length; a < u; a++)
                        (o[a].fn !== t || s && !o[a].once || i && o[a].context !== i) && l.push(o[a]);
                    l.length ? this._events[r] = 1 === l.length ? l[0] : l : n(this, r)
                }
                return this
            }
            ,
            a.prototype.removeAllListeners = function(e) {
                var t;
                return e ? (t = d ? d + e : e,
                this._events[t] && n(this, t)) : (this._events = new s,
                this._eventsCount = 0),
                this
            }
            ,
            a.prototype.off = a.prototype.removeListener,
            a.prototype.addListener = a.prototype.on,
            a.prefixed = d,
            a.EventEmitter = a,
            e.exports = a
        },
        "./node_modules/node-libs-browser/node_modules/events/events.js": function(e, t) {
            function i() {
                this._events = this._events || {},
                this._maxListeners = this._maxListeners || undefined
            }
            function s(e) {
                return "function" == typeof e
            }
            function r(e) {
                return "number" == typeof e
            }
            function o(e) {
                return "object" == typeof e && null !== e
            }
            function n(e) {
                return void 0 === e
            }
            e.exports = i,
            i.EventEmitter = i,
            i.prototype._events = undefined,
            i.prototype._maxListeners = undefined,
            i.defaultMaxListeners = 10,
            i.prototype.setMaxListeners = function(e) {
                if (!r(e) || e < 0 || isNaN(e))
                    throw TypeError("n must be a positive number");
                return this._maxListeners = e,
                this
            }
            ,
            i.prototype.emit = function(e) {
                var t, i, r, a, l, d;
                if (this._events || (this._events = {}),
                "error" === e && (!this._events.error || o(this._events.error) && !this._events.error.length)) {
                    if ((t = arguments[1])instanceof Error)
                        throw t;
                    var u = new Error('Uncaught, unspecified "error" event. (' + t + ")");
                    throw u.context = t,
                    u
                }
                if (i = this._events[e],
                n(i))
                    return !1;
                if (s(i))
                    switch (arguments.length) {
                    case 1:
                        i.call(this);
                        break;
                    case 2:
                        i.call(this, arguments[1]);
                        break;
                    case 3:
                        i.call(this, arguments[1], arguments[2]);
                        break;
                    default:
                        a = Array.prototype.slice.call(arguments, 1),
                        i.apply(this, a)
                    }
                else if (o(i))
                    for (a = Array.prototype.slice.call(arguments, 1),
                    d = i.slice(),
                    r = d.length,
                    l = 0; l < r; l++)
                        d[l].apply(this, a);
                return !0
            }
            ,
            i.prototype.addListener = function(e, t) {
                var r;
                if (!s(t))
                    throw TypeError("listener must be a function");
                return this._events || (this._events = {}),
                this._events.newListener && this.emit("newListener", e, s(t.listener) ? t.listener : t),
                this._events[e] ? o(this._events[e]) ? this._events[e].push(t) : this._events[e] = [this._events[e], t] : this._events[e] = t,
                o(this._events[e]) && !this._events[e].warned && (r = n(this._maxListeners) ? i.defaultMaxListeners : this._maxListeners) && r > 0 && this._events[e].length > r && (this._events[e].warned = !0,
                console.error("(node) warning: possible EventEmitter memory leak detected. %d listeners added. Use emitter.setMaxListeners() to increase limit.", this._events[e].length),
                "function" == typeof console.trace && console.trace()),
                this
            }
            ,
            i.prototype.on = i.prototype.addListener,
            i.prototype.once = function(e, t) {
                function i() {
                    this.removeListener(e, i),
                    r || (r = !0,
                    t.apply(this, arguments))
                }
                if (!s(t))
                    throw TypeError("listener must be a function");
                var r = !1;
                return i.listener = t,
                this.on(e, i),
                this
            }
            ,
            i.prototype.removeListener = function(e, t) {
                var i, r, n, a;
                if (!s(t))
                    throw TypeError("listener must be a function");
                if (!this._events || !this._events[e])
                    return this;
                if (i = this._events[e],
                n = i.length,
                r = -1,
                i === t || s(i.listener) && i.listener === t)
                    delete this._events[e],
                    this._events.removeListener && this.emit("removeListener", e, t);
                else if (o(i)) {
                    for (a = n; a-- > 0; )
                        if (i[a] === t || i[a].listener && i[a].listener === t) {
                            r = a;
                            break
                        }
                    if (r < 0)
                        return this;
                    1 === i.length ? (i.length = 0,
                    delete this._events[e]) : i.splice(r, 1),
                    this._events.removeListener && this.emit("removeListener", e, t)
                }
                return this
            }
            ,
            i.prototype.removeAllListeners = function(e) {
                var t, i;
                if (!this._events)
                    return this;
                if (!this._events.removeListener)
                    return 0 === arguments.length ? this._events = {} : this._events[e] && delete this._events[e],
                    this;
                if (0 === arguments.length) {
                    for (t in this._events)
                        "removeListener" !== t && this.removeAllListeners(t);
                    return this.removeAllListeners("removeListener"),
                    this._events = {},
                    this
                }
                if (i = this._events[e],
                s(i))
                    this.removeListener(e, i);
                else if (i)
                    for (; i.length; )
                        this.removeListener(e, i[i.length - 1]);
                return delete this._events[e],
                this
            }
            ,
            i.prototype.listeners = function(e) {
                return this._events && this._events[e] ? s(this._events[e]) ? [this._events[e]] : this._events[e].slice() : []
            }
            ,
            i.prototype.listenerCount = function(e) {
                if (this._events) {
                    var t = this._events[e];
                    if (s(t))
                        return 1;
                    if (t)
                        return t.length
                }
                return 0
            }
            ,
            i.listenerCount = function(e, t) {
                return e.listenerCount(t)
            }
        },
        "./node_modules/url-toolkit/src/url-toolkit.js": function(e, t, i) {
            !function(t) {
                var i = /^((?:[a-zA-Z0-9+\-.]+:)?)(\/\/[^\/\;?#]*)?(.*?)??(;.*?)?(\?.*?)?(#.*?)?$/
                  , s = /^([^\/;?#]*)(.*)$/
                  , r = /(?:\/|^)\.(?=\/)/g
                  , o = /(?:\/|^)\.\.\/(?!\.\.\/).*?(?=\/)/g
                  , n = {
                    buildAbsoluteURL: function(e, t, i) {
                        if (i = i || {},
                        e = e.trim(),
                        !(t = t.trim())) {
                            if (!i.alwaysNormalize)
                                return e;
                            var r = this.parseURL(e);
                            if (!a)
                                throw new Error("Error trying to parse base URL.");
                            return r.path = n.normalizePath(r.path),
                            n.buildURLFromParts(r)
                        }
                        var o = this.parseURL(t);
                        if (!o)
                            throw new Error("Error trying to parse relative URL.");
                        if (o.scheme)
                            return i.alwaysNormalize ? (o.path = n.normalizePath(o.path),
                            n.buildURLFromParts(o)) : t;
                        var a = this.parseURL(e);
                        if (!a)
                            throw new Error("Error trying to parse base URL.");
                        if (!a.netLoc && a.path && "/" !== a.path[0]) {
                            var l = s.exec(a.path);
                            a.netLoc = l[1],
                            a.path = l[2]
                        }
                        a.netLoc && !a.path && (a.path = "/");
                        var d = {
                            scheme: a.scheme,
                            netLoc: o.netLoc,
                            path: null,
                            params: o.params,
                            query: o.query,
                            fragment: o.fragment
                        };
                        if (!o.netLoc && (d.netLoc = a.netLoc,
                        "/" !== o.path[0]))
                            if (o.path) {
                                var u = a.path
                                  , h = u.substring(0, u.lastIndexOf("/") + 1) + o.path;
                                d.path = n.normalizePath(h)
                            } else
                                d.path = a.path,
                                o.params || (d.params = a.params,
                                o.query || (d.query = a.query));
                        return null === d.path && (d.path = i.alwaysNormalize ? n.normalizePath(o.path) : o.path),
                        n.buildURLFromParts(d)
                    },
                    parseURL: function(e) {
                        var t = i.exec(e);
                        return t ? {
                            scheme: t[1] || "",
                            netLoc: t[2] || "",
                            path: t[3] || "",
                            params: t[4] || "",
                            query: t[5] || "",
                            fragment: t[6] || ""
                        } : null
                    },
                    normalizePath: function(e) {
                        for (e = e.split("").reverse().join("").replace(r, ""); e.length !== (e = e.replace(o, "")).length; )
                            ;
                        return e.split("").reverse().join("")
                    },
                    buildURLFromParts: function(e) {
                        return e.scheme + e.netLoc + e.path + e.params + e.query + e.fragment
                    }
                };
                e.exports = n
            }()
        },
        "./node_modules/webworkify-webpack/index.js": function(e, t, i) {
            function s(e) {
                function t(s) {
                    if (i[s])
                        return i[s].exports;
                    var r = i[s] = {
                        i: s,
                        l: !1,
                        exports: {}
                    };
                    return e[s].call(r.exports, r, r.exports, t),
                    r.l = !0,
                    r.exports
                }
                var i = {};
                t.m = e,
                t.c = i,
                t.i = function(e) {
                    return e
                }
                ,
                t.d = function(e, i, s) {
                    t.o(e, i) || Object.defineProperty(e, i, {
                        configurable: !1,
                        enumerable: !0,
                        get: s
                    })
                }
                ,
                t.r = function(e) {
                    Object.defineProperty(e, "__esModule", {
                        value: !0
                    })
                }
                ,
                t.n = function(e) {
                    var i = e && e.__esModule ? function() {
                        return e["default"]
                    }
                    : function() {
                        return e
                    }
                    ;
                    return t.d(i, "a", i),
                    i
                }
                ,
                t.o = function(e, t) {
                    return Object.prototype.hasOwnProperty.call(e, t)
                }
                ,
                t.p = "/",
                t.oe = function(e) {
                    throw console.error(e),
                    e
                }
                ;
                var s = t(t.s = ENTRY_MODULE);
                return s["default"] || s
            }
            function r(e) {
                return (e + "").replace(/[.?*+^$[\]\\(){}|-]/g, "\\$&")
            }
            function o(e) {
                return !isNaN(1 * e)
            }
            function n(e, t, s) {
                var n = {};
                n[s] = [];
                var a = t.toString()
                  , l = a.match(/^function\s?\(\w+,\s*\w+,\s*(\w+)\)/);
                if (!l)
                    return n;
                for (var h, c = l[1], f = new RegExp("(\\\\n|\\W)" + r(c) + u,"g"); h = f.exec(a); )
                    "dll-reference" !== h[3] && n[s].push(h[3]);
                for (f = new RegExp("\\(" + r(c) + '\\("(dll-reference\\s(' + d + '))"\\)\\)' + u,"g"); h = f.exec(a); )
                    e[h[2]] || (n[s].push(h[1]),
                    e[h[2]] = i(h[1]).m),
                    n[h[2]] = n[h[2]] || [],
                    n[h[2]].push(h[4]);
                for (var p = Object.keys(n), v = 0; v < p.length; v++)
                    for (var g = 0; g < n[p[v]].length; g++)
                        o(n[p[v]][g]) && (n[p[v]][g] = 1 * n[p[v]][g]);
                return n
            }
            function a(e) {
                return Object.keys(e).reduce(function(t, i) {
                    return t || e[i].length > 0
                }, !1)
            }
            function l(e, t) {
                for (var i = {
                    main: [t]
                }, s = {
                    main: []
                }, r = {
                    main: {}
                }; a(i); )
                    for (var o = Object.keys(i), l = 0; l < o.length; l++) {
                        var d = o[l]
                          , u = i[d]
                          , h = u.pop();
                        if (r[d] = r[d] || {},
                        !r[d][h] && e[d][h]) {
                            r[d][h] = !0,
                            s[d] = s[d] || [],
                            s[d].push(h);
                            for (var c = n(e, e[d][h], d), f = Object.keys(c), p = 0; p < f.length; p++)
                                i[f[p]] = i[f[p]] || [],
                                i[f[p]] = i[f[p]].concat(c[f[p]])
                        }
                    }
                return s
            }
            var d = "[\\.|\\-|\\+|\\w|/|@]+"
              , u = "\\((/\\*.*?\\*/)?s?.*?(" + d + ").*?\\)";
            e.exports = function(e, t) {
                t = t || {};
                var r = {
                    main: i.m
                }
                  , o = t.all ? {
                    main: Object.keys(r.main)
                } : l(r, e)
                  , n = "";
                Object.keys(o).filter(function(e) {
                    return "main" !== e
                }).forEach(function(e) {
                    for (var t = 0; o[e][t]; )
                        t++;
                    o[e].push(t),
                    r[e][t] = "(function(module, exports, __webpack_require__) { module.exports = __webpack_require__; })",
                    n = n + "var " + e + " = (" + s.toString().replace("ENTRY_MODULE", JSON.stringify(t)) + ")({" + o[e].map(function(t) {
                        return JSON.stringify(t) + ": " + r[e][t].toString()
                    }).join(",") + "});\n"
                }),
                n = n + "new ((" + s.toString().replace("ENTRY_MODULE", JSON.stringify(e)) + ")({" + o.main.map(function(e) {
                    return JSON.stringify(e) + ": " + r.main[e].toString()
                }).join(",") + "}))(self);";
                var a = new window.Blob([n],{
                    type: "text/javascript"
                });
                if (t.bare)
                    return a;
                var d = window.URL || window.webkitURL || window.mozURL || window.msURL
                  , u = d.createObjectURL(a)
                  , h = new window.Worker(u);
                return h.objectURL = u,
                h
            }
        },
        "./src/config.js": function(e, t, i) {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            });
            var s = i("./src/controller/abr-controller.js")
              , r = i("./src/controller/buffer-controller.js")
              , o = i("./src/controller/cap-level-controller.js")
              , n = i("./src/controller/fps-controller.js")
              , a = i("./src/utils/xhr-loader.js")
              , l = i("./src/controller/audio-track-controller.js")
              , d = i("./src/controller/audio-stream-controller.js")
              , u = i("./src/utils/cues.js")
              , h = i("./src/controller/timeline-controller.js")
              , c = i("./src/controller/subtitle-track-controller.js")
              , f = i("./src/controller/subtitle-stream-controller.js")
              , p = i("./src/controller/eme-controller.js")
              , v = i("./src/utils/mediakeys-helper.js");
            t.hlsDefaultConfig = {
                autoStartLoad: !0,
                startPosition: -1,
                defaultAudioCodec: undefined,
                debug: !1,
                capLevelOnFPSDrop: !1,
                capLevelToPlayerSize: !1,
                initialLiveManifestSize: 1,
                maxBufferLength: 30,
                maxBufferSize: 6e7,
                maxBufferHole: .5,
                lowBufferWatchdogPeriod: .5,
                highBufferWatchdogPeriod: 3,
                nudgeOffset: .1,
                nudgeMaxRetry: 3,
                maxFragLookUpTolerance: .25,
                liveSyncDurationCount: 3,
                liveMaxLatencyDurationCount: Infinity,
                liveSyncDuration: undefined,
                liveMaxLatencyDuration: undefined,
                liveDurationInfinity: !1,
                maxMaxBufferLength: 600,
                enableWorker: !0,
                enableSoftwareAES: !0,
                manifestLoadingTimeOut: 1e4,
                manifestLoadingMaxRetry: 1,
                manifestLoadingRetryDelay: 1e3,
                manifestLoadingMaxRetryTimeout: 64e3,
                startLevel: undefined,
                levelLoadingTimeOut: 1e4,
                levelLoadingMaxRetry: 4,
                levelLoadingRetryDelay: 1e3,
                levelLoadingMaxRetryTimeout: 64e3,
                fragLoadingTimeOut: 2e4,
                fragLoadingMaxRetry: 6,
                fragLoadingRetryDelay: 1e3,
                fragLoadingMaxRetryTimeout: 64e3,
                startFragPrefetch: !1,
                fpsDroppedMonitoringPeriod: 5e3,
                fpsDroppedMonitoringThreshold: .2,
                appendErrorMaxRetry: 3,
                loader: a["default"],
                fLoader: undefined,
                pLoader: undefined,
                xhrSetup: undefined,
                licenseXhrSetup: undefined,
                abrController: s["default"],
                bufferController: r["default"],
                capLevelController: o["default"],
                fpsController: n["default"],
                stretchShortVideoTrack: !1,
                maxAudioFramesDrift: 1,
                forceKeyFrameOnDiscontinuity: !0,
                abrEwmaFastLive: 3,
                abrEwmaSlowLive: 9,
                abrEwmaFastVoD: 3,
                abrEwmaSlowVoD: 9,
                abrEwmaDefaultEstimate: 5e5,
                abrBandWidthFactor: .95,
                abrBandWidthUpFactor: .7,
                abrMaxWithRealBitrate: !1,
                maxStarvationDelay: 4,
                maxLoadingDelay: 4,
                minAutoBitrate: 0,
                emeEnabled: !1,
                widevineLicenseUrl: undefined,
                requestMediaKeySystemAccessFunc: v.requestMediaKeySystemAccess
            },
            t.hlsDefaultConfig.subtitleStreamController = f["default"],
            t.hlsDefaultConfig.subtitleTrackController = c["default"],
            t.hlsDefaultConfig.timelineController = h["default"],
            t.hlsDefaultConfig.cueHandler = u,
            t.hlsDefaultConfig.enableCEA708Captions = !0,
            t.hlsDefaultConfig.enableWebVTT = !0,
            t.hlsDefaultConfig.captionsTextTrack1Label = "English",
            t.hlsDefaultConfig.captionsTextTrack1LanguageCode = "en",
            t.hlsDefaultConfig.captionsTextTrack2Label = "Spanish",
            t.hlsDefaultConfig.captionsTextTrack2LanguageCode = "es",
            t.hlsDefaultConfig.audioStreamController = d["default"],
            t.hlsDefaultConfig.audioTrackController = l["default"],
            t.hlsDefaultConfig.emeController = p["default"]
        },
        "./src/controller/abr-controller.js": function(e, t, i) {
            "use strict";
            (function(e) {
                var s = this && this.__extends || function() {
                    var e = Object.setPrototypeOf || {
                        __proto__: []
                    }instanceof Array && function(e, t) {
                        e.__proto__ = t
                    }
                    || function(e, t) {
                        for (var i in t)
                            t.hasOwnProperty(i) && (e[i] = t[i])
                    }
                    ;
                    return function(t, i) {
                        function s() {
                            this.constructor = t
                        }
                        e(t, i),
                        t.prototype = null === i ? Object.create(i) : (s.prototype = i.prototype,
                        new s)
                    }
                }();
                Object.defineProperty(t, "__esModule", {
                    value: !0
                });
                var r = i("./src/events.js")
                  , o = i("./src/event-handler.js")
                  , n = i("./src/utils/buffer-helper.js")
                  , a = i("./src/errors.js")
                  , l = i("./src/utils/logger.js")
                  , d = i("./src/utils/ewma-bandwidth-estimator.js")
                  , u = window.performance
                  , h = function(t) {
                    function i(e) {
                        var i = t.call(this, e, r["default"].FRAG_LOADING, r["default"].FRAG_LOADED, r["default"].FRAG_BUFFERED, r["default"].ERROR) || this;
                        return i.lastLoadedFragLevel = 0,
                        i._nextAutoLevel = -1,
                        i.hls = e,
                        i.timer = null,
                        i._bwEstimator = null,
                        i.onCheck = i._abandonRulesCheck.bind(i),
                        i
                    }
                    return s(i, t),
                    i.prototype.destroy = function() {
                        this.clearTimer(),
                        o["default"].prototype.destroy.call(this)
                    }
                    ,
                    i.prototype.onFragLoading = function(e) {
                        var t = e.frag;
                        if ("main" === t.type && (this.timer || (this.fragCurrent = t,
                        this.timer = setInterval(this.onCheck, 100)),
                        !this._bwEstimator)) {
                            var i = this.hls
                              , s = i.config
                              , r = t.level
                              , o = i.levels[r].details.live
                              , n = void 0
                              , a = void 0;
                            o ? (n = s.abrEwmaFastLive,
                            a = s.abrEwmaSlowLive) : (n = s.abrEwmaFastVoD,
                            a = s.abrEwmaSlowVoD),
                            this._bwEstimator = new d["default"](i,a,n,s.abrEwmaDefaultEstimate)
                        }
                    }
                    ,
                    i.prototype._abandonRulesCheck = function() {
                        var e = this.hls
                          , t = e.media
                          , i = this.fragCurrent;
                        if (i) {
                            var s = i.loader
                              , o = e.minAutoLevel;
                            if (!s || s.stats && s.stats.aborted)
                                return l.logger.warn("frag loader destroy or aborted, disarm abandonRules"),
                                this.clearTimer(),
                                void (this._nextAutoLevel = -1);
                            var a = s.stats;
                            if (t && a && (!t.paused && 0 !== t.playbackRate || !t.readyState) && i.autoLevel && i.level) {
                                var d = u.now() - a.trequest
                                  , h = Math.abs(t.playbackRate);
                                if (d > 500 * i.duration / h) {
                                    var c = e.levels
                                      , f = Math.max(1, a.bw ? a.bw / 8 : 1e3 * a.loaded / d)
                                      , p = c[i.level]
                                      , v = p.realBitrate ? Math.max(p.realBitrate, p.bitrate) : p.bitrate
                                      , g = a.total ? a.total : Math.max(a.loaded, Math.round(i.duration * v / 8))
                                      , y = t.currentTime
                                      , m = (g - a.loaded) / f
                                      , _ = (n.BufferHelper.bufferInfo(t, y, e.config.maxBufferHole).end - y) / h;
                                    if (_ < 2 * i.duration / h && m > _) {
                                        var b = void 0
                                          , E = void 0;
                                        for (E = i.level - 1; E > o; E--) {
                                            var S = c[E].realBitrate ? Math.max(c[E].realBitrate, c[E].bitrate) : c[E].bitrate;
                                            if ((b = i.duration * S / (6.4 * f)) < _)
                                                break
                                        }
                                        b < m && (l.logger.warn("loading too slow, abort fragment loading and switch to level " + E + ":fragLoadedDelay[" + E + "]<fragLoadedDelay[" + (i.level - 1) + "];bufferStarvationDelay:" + b.toFixed(1) + "<" + m.toFixed(1) + ":" + _.toFixed(1)),
                                        e.nextLoadLevel = E,
                                        this._bwEstimator.sample(d, a.loaded),
                                        s.abort(),
                                        this.clearTimer(),
                                        e.trigger(r["default"].FRAG_LOAD_EMERGENCY_ABORTED, {
                                            frag: i,
                                            stats: a
                                        }))
                                    }
                                }
                            }
                        }
                    }
                    ,
                    i.prototype.onFragLoaded = function(t) {
                        var i = t.frag;
                        if ("main" === i.type && e.isFinite(i.sn)) {
                            if (this.clearTimer(),
                            this.lastLoadedFragLevel = i.level,
                            this._nextAutoLevel = -1,
                            this.hls.config.abrMaxWithRealBitrate) {
                                var s = this.hls.levels[i.level]
                                  , r = (s.loaded ? s.loaded.bytes : 0) + t.stats.loaded
                                  , o = (s.loaded ? s.loaded.duration : 0) + t.frag.duration;
                                s.loaded = {
                                    bytes: r,
                                    duration: o
                                },
                                s.realBitrate = Math.round(8 * r / o)
                            }
                            if (t.frag.bitrateTest) {
                                var n = t.stats;
                                n.tparsed = n.tbuffered = n.tload,
                                this.onFragBuffered(t)
                            }
                        }
                    }
                    ,
                    i.prototype.onFragBuffered = function(t) {
                        var i = t.stats
                          , s = t.frag;
                        if (!0 !== i.aborted && "main" === s.type && e.isFinite(s.sn) && (!s.bitrateTest || i.tload === i.tbuffered)) {
                            var r = i.tparsed - i.trequest;
                            l.logger.log("latency/loading/parsing/append/kbps:" + Math.round(i.tfirst - i.trequest) + "/" + Math.round(i.tload - i.tfirst) + "/" + Math.round(i.tparsed - i.tload) + "/" + Math.round(i.tbuffered - i.tparsed) + "/" + Math.round(8 * i.loaded / (i.tbuffered - i.trequest))),
                            this._bwEstimator.sample(r, i.loaded),
                            i.bwEstimate = this._bwEstimator.getEstimate(),
                            s.bitrateTest ? this.bitrateTestDelay = r / 1e3 : this.bitrateTestDelay = 0
                        }
                    }
                    ,
                    i.prototype.onError = function(e) {
                        switch (e.details) {
                        case a.ErrorDetails.FRAG_LOAD_ERROR:
                        case a.ErrorDetails.FRAG_LOAD_TIMEOUT:
                            this.clearTimer()
                        }
                    }
                    ,
                    i.prototype.clearTimer = function() {
                        clearInterval(this.timer),
                        this.timer = null
                    }
                    ,
                    Object.defineProperty(i.prototype, "nextAutoLevel", {
                        get: function() {
                            var e = this._nextAutoLevel
                              , t = this._bwEstimator;
                            if (!(-1 === e || t && t.canEstimate()))
                                return e;
                            var i = this._nextABRAutoLevel;
                            return -1 !== e && (i = Math.min(e, i)),
                            i
                        },
                        set: function(e) {
                            this._nextAutoLevel = e
                        },
                        enumerable: !0,
                        configurable: !0
                    }),
                    Object.defineProperty(i.prototype, "_nextABRAutoLevel", {
                        get: function() {
                            var e = this.hls
                              , t = e.maxAutoLevel
                              , i = e.levels
                              , s = e.config
                              , r = e.minAutoLevel
                              , o = e.media
                              , a = this.lastLoadedFragLevel
                              , d = this.fragCurrent ? this.fragCurrent.duration : 0
                              , u = o ? o.currentTime : 0
                              , h = o && 0 !== o.playbackRate ? Math.abs(o.playbackRate) : 1
                              , c = this._bwEstimator ? this._bwEstimator.getEstimate() : s.abrEwmaDefaultEstimate
                              , f = (n.BufferHelper.bufferInfo(o, u, s.maxBufferHole).end - u) / h
                              , p = this._findBestLevel(a, d, c, r, t, f, s.abrBandWidthFactor, s.abrBandWidthUpFactor, i);
                            if (p >= 0)
                                return p;
                            l.logger.trace("rebuffering expected to happen, lets try to find a quality level minimizing the rebuffering");
                            var v = d ? Math.min(d, s.maxStarvationDelay) : s.maxStarvationDelay
                              , g = s.abrBandWidthFactor
                              , y = s.abrBandWidthUpFactor;
                            if (0 === f) {
                                var m = this.bitrateTestDelay;
                                if (m) {
                                    v = (d ? Math.min(d, s.maxLoadingDelay) : s.maxLoadingDelay) - m,
                                    l.logger.trace("bitrate test took " + Math.round(1e3 * m) + "ms, set first fragment max fetchDuration to " + Math.round(1e3 * v) + " ms"),
                                    g = y = 1
                                }
                            }
                            return p = this._findBestLevel(a, d, c, r, t, f + v, g, y, i),
                            Math.max(p, 0)
                        },
                        enumerable: !0,
                        configurable: !0
                    }),
                    i.prototype._findBestLevel = function(e, t, i, s, r, o, n, a, d) {
                        for (var u = r; u >= s; u--) {
                            var h = d[u];
                            if (h) {
                                var c = h.details
                                  , f = c ? c.totalduration / c.fragments.length : t
                                  , p = !!c && c.live
                                  , v = void 0;
                                v = u <= e ? n * i : a * i;
                                var g = d[u].realBitrate ? Math.max(d[u].realBitrate, d[u].bitrate) : d[u].bitrate
                                  , y = g * f / v;
                                if (l.logger.trace("level/adjustedbw/bitrate/avgDuration/maxFetchDuration/fetchDuration: " + u + "/" + Math.round(v) + "/" + g + "/" + f + "/" + o + "/" + y),
                                v > g && (!y || p && !this.bitrateTestDelay || y < o))
                                    return u
                            }
                        }
                        return -1
                    }
                    ,
                    i
                }(o["default"]);
                t["default"] = h
            }
            ).call(this, i("./src/polyfills/number.js").Number)
        },
        "./src/controller/audio-stream-controller.js": function(e, t, i) {
            "use strict";
            (function(e) {
                var s = this && this.__extends || function() {
                    var e = Object.setPrototypeOf || {
                        __proto__: []
                    }instanceof Array && function(e, t) {
                        e.__proto__ = t
                    }
                    || function(e, t) {
                        for (var i in t)
                            t.hasOwnProperty(i) && (e[i] = t[i])
                    }
                    ;
                    return function(t, i) {
                        function s() {
                            this.constructor = t
                        }
                        e(t, i),
                        t.prototype = null === i ? Object.create(i) : (s.prototype = i.prototype,
                        new s)
                    }
                }();
                Object.defineProperty(t, "__esModule", {
                    value: !0
                });
                var r = i("./src/utils/binary-search.js")
                  , o = i("./src/utils/buffer-helper.js")
                  , n = i("./src/demux/demuxer.js")
                  , a = i("./src/events.js")
                  , l = i("./src/controller/level-helper.js")
                  , d = i("./src/utils/time-ranges.js")
                  , u = i("./src/errors.js")
                  , h = i("./src/utils/logger.js")
                  , c = i("./src/utils/discontinuities.js")
                  , f = i("./src/task-loop.js")
                  , p = i("./src/controller/fragment-tracker.js")
                  , v = i("./src/loader/fragment.js")
                  , g = window.performance
                  , y = {
                    STOPPED: "STOPPED",
                    STARTING: "STARTING",
                    IDLE: "IDLE",
                    PAUSED: "PAUSED",
                    KEY_LOADING: "KEY_LOADING",
                    FRAG_LOADING: "FRAG_LOADING",
                    FRAG_LOADING_WAITING_RETRY: "FRAG_LOADING_WAITING_RETRY",
                    WAITING_TRACK: "WAITING_TRACK",
                    PARSING: "PARSING",
                    PARSED: "PARSED",
                    BUFFER_FLUSHING: "BUFFER_FLUSHING",
                    ENDED: "ENDED",
                    ERROR: "ERROR",
                    WAITING_INIT_PTS: "WAITING_INIT_PTS"
                }
                  , m = function(t) {
                    function i(e, i) {
                        var s = t.call(this, e, a["default"].MEDIA_ATTACHED, a["default"].MEDIA_DETACHING, a["default"].AUDIO_TRACKS_UPDATED, a["default"].AUDIO_TRACK_SWITCHING, a["default"].AUDIO_TRACK_LOADED, a["default"].KEY_LOADED, a["default"].FRAG_LOADED, a["default"].FRAG_PARSING_INIT_SEGMENT, a["default"].FRAG_PARSING_DATA, a["default"].FRAG_PARSED, a["default"].ERROR, a["default"].BUFFER_RESET, a["default"].BUFFER_CREATED, a["default"].BUFFER_APPENDED, a["default"].BUFFER_FLUSHED, a["default"].INIT_PTS_FOUND) || this;
                        return s.fragmentTracker = i,
                        s.config = e.config,
                        s.audioCodecSwap = !1,
                        s._state = y.STOPPED,
                        s.initPTS = [],
                        s.waitingFragment = null,
                        s.videoTrackCC = null,
                        s
                    }
                    return s(i, t),
                    i.prototype.onHandlerDestroying = function() {
                        this.stopLoad(),
                        t.prototype.onHandlerDestroying.call(this)
                    }
                    ,
                    i.prototype.onHandlerDestroyed = function() {
                        this.state = y.STOPPED,
                        this.fragmentTracker = null,
                        t.prototype.onHandlerDestroyed.call(this)
                    }
                    ,
                    i.prototype.onInitPtsFound = function(e) {
                        var t = e.id
                          , i = e.frag.cc
                          , s = e.initPTS;
                        "main" === t && (this.initPTS[i] = s,
                        this.videoTrackCC = i,
                        h.logger.log("InitPTS for cc: " + i + " found from video track: " + s),
                        this.state === y.WAITING_INIT_PTS && this.tick())
                    }
                    ,
                    i.prototype.startLoad = function(e) {
                        if (this.tracks) {
                            var t = this.lastCurrentTime;
                            this.stopLoad(),
                            this.setInterval(100),
                            this.fragLoadError = 0,
                            t > 0 && -1 === e ? (h.logger.log("audio:override startPosition with lastCurrentTime @" + t.toFixed(3)),
                            this.state = y.IDLE) : (this.lastCurrentTime = this.startPosition ? this.startPosition : e,
                            this.state = y.STARTING),
                            this.nextLoadPosition = this.startPosition = this.lastCurrentTime,
                            this.tick()
                        } else
                            this.startPosition = e,
                            this.state = y.STOPPED
                    }
                    ,
                    i.prototype.stopLoad = function() {
                        var e = this.fragCurrent;
                        e && (e.loader && e.loader.abort(),
                        this.fragmentTracker.removeFragment(e),
                        this.fragCurrent = null),
                        this.fragPrevious = null,
                        this.demuxer && (this.demuxer.destroy(),
                        this.demuxer = null),
                        this.state = y.STOPPED
                    }
                    ,
                    Object.defineProperty(i.prototype, "state", {
                        get: function() {
                            return this._state
                        },
                        set: function(e) {
                            if (this.state !== e) {
                                var t = this.state;
                                this._state = e,
                                h.logger.log("audio stream:" + t + "->" + e)
                            }
                        },
                        enumerable: !0,
                        configurable: !0
                    }),
                    i.prototype.doTick = function() {
                        var t, i, s, n = this.hls, l = n.config;
                        switch (this.state) {
                        case y.ERROR:
                        case y.PAUSED:
                        case y.BUFFER_FLUSHING:
                            break;
                        case y.STARTING:
                            this.state = y.WAITING_TRACK,
                            this.loadedmetadata = !1;
                            break;
                        case y.IDLE:
                            var d = this.tracks;
                            if (!d)
                                break;
                            if (!this.media && (this.startFragRequested || !l.startFragPrefetch))
                                break;
                            if (this.loadedmetadata)
                                t = this.media.currentTime;
                            else if ((t = this.nextLoadPosition) === undefined)
                                break;
                            var u = this.mediaBuffer ? this.mediaBuffer : this.media
                              , f = this.videoBuffer ? this.videoBuffer : this.media
                              , v = o.BufferHelper.bufferInfo(u, t, l.maxBufferHole)
                              , m = o.BufferHelper.bufferInfo(f, t, l.maxBufferHole)
                              , _ = v.len
                              , b = v.end
                              , E = this.fragPrevious
                              , S = Math.min(l.maxBufferLength, l.maxMaxBufferLength)
                              , T = Math.max(S, m.len)
                              , w = this.audioSwitch
                              , P = this.trackId;
                            if ((_ < T || w) && P < d.length) {
                                if (void 0 === (s = d[P].details)) {
                                    this.state = y.WAITING_TRACK;
                                    break
                                }
                                if (!w && !s.live && E && E.sn === s.endSN && !v.nextStart && (!this.media.seeking || this.media.duration - b < E.duration / 2)) {
                                    this.hls.trigger(a["default"].BUFFER_EOS, {
                                        type: "audio"
                                    }),
                                    this.state = y.ENDED;
                                    break
                                }
                                var C = s.fragments
                                  , A = C.length
                                  , k = C[0].start
                                  , L = C[A - 1].start + C[A - 1].duration
                                  , D = void 0;
                                if (w)
                                    if (s.live && !s.PTSKnown)
                                        h.logger.log("switching audiotrack, live stream, unknown PTS,load first fragment"),
                                        b = 0;
                                    else if (b = t,
                                    s.PTSKnown && t < k) {
                                        if (!(v.end > k || v.nextStart))
                                            return;
                                        h.logger.log("alt audio track ahead of main track, seek to start of alt audio track"),
                                        this.media.currentTime = k + .05
                                    }
                                if (s.initSegment && !s.initSegment.data)
                                    D = s.initSegment;
                                else if (b <= k) {
                                    if (D = C[0],
                                    null !== this.videoTrackCC && D.cc !== this.videoTrackCC && (D = c.findFragWithCC(C, this.videoTrackCC)),
                                    s.live && D.loadIdx && D.loadIdx === this.fragLoadIdx) {
                                        var R = v.nextStart ? v.nextStart : k;
                                        return h.logger.log("no alt audio available @currentTime:" + this.media.currentTime + ", seeking @" + (R + .05)),
                                        void (this.media.currentTime = R + .05)
                                    }
                                } else {
                                    var B = void 0
                                      , x = l.maxFragLookUpTolerance
                                      , I = E ? C[E.sn - C[0].sn + 1] : undefined
                                      , O = function(e) {
                                        var t = Math.min(x, e.duration);
                                        return e.start + e.duration - t <= b ? 1 : e.start - t > b && e.start ? -1 : 0
                                    };
                                    b < L ? (b > L - x && (x = 0),
                                    B = I && !O(I) ? I : r["default"].search(C, O)) : B = C[A - 1],
                                    B && (D = B,
                                    k = B.start,
                                    E && D.level === E.level && D.sn === E.sn && (D.sn < s.endSN ? (D = C[D.sn + 1 - s.startSN],
                                    h.logger.log("SN just loaded, load next one: " + D.sn)) : D = null))
                                }
                                D && (D.encrypted ? (h.logger.log("Loading key for " + D.sn + " of [" + s.startSN + " ," + s.endSN + "],track " + P),
                                this.state = y.KEY_LOADING,
                                n.trigger(a["default"].KEY_LOADING, {
                                    frag: D
                                })) : (h.logger.log("Loading " + D.sn + ", cc: " + D.cc + " of [" + s.startSN + " ," + s.endSN + "],track " + P + ", currentTime:" + t + ",bufferEnd:" + b.toFixed(3)),
                                (w || this.fragmentTracker.getState(D) === p.FragmentState.NOT_LOADED) && (this.fragCurrent = D,
                                this.startFragRequested = !0,
                                e.isFinite(D.sn) && (this.nextLoadPosition = D.start + D.duration),
                                n.trigger(a["default"].FRAG_LOADING, {
                                    frag: D
                                }),
                                this.state = y.FRAG_LOADING)))
                            }
                            break;
                        case y.WAITING_TRACK:
                            i = this.tracks[this.trackId],
                            i && i.details && (this.state = y.IDLE);
                            break;
                        case y.FRAG_LOADING_WAITING_RETRY:
                            var M = g.now()
                              , $ = this.retryDate;
                            u = this.media;
                            var N = u && u.seeking;
                            (!$ || M >= $ || N) && (h.logger.log("audioStreamController: retryDate reached, switch back to IDLE state"),
                            this.state = y.IDLE);
                            break;
                        case y.WAITING_INIT_PTS:
                            var F = this.videoTrackCC;
                            if (this.initPTS[F] === undefined)
                                break;
                            var V = this.waitingFragment;
                            if (V) {
                                var U = V.frag.cc;
                                F !== U ? (i = this.tracks[this.trackId],
                                i.details && i.details.live && (h.logger.warn("Waiting fragment CC (" + U + ") does not match video track CC (" + F + ")"),
                                this.waitingFragment = null,
                                this.state = y.IDLE)) : (this.state = y.FRAG_LOADING,
                                this.onFragLoaded(this.waitingFragment),
                                this.waitingFragment = null)
                            } else
                                this.state = y.IDLE;
                            break;
                        case y.STOPPED:
                        case y.FRAG_LOADING:
                        case y.PARSING:
                        case y.PARSED:
                        case y.ENDED:
                        }
                    }
                    ,
                    i.prototype.onMediaAttached = function(e) {
                        var t = this.media = this.mediaBuffer = e.media;
                        this.onvseeking = this.onMediaSeeking.bind(this),
                        this.onvended = this.onMediaEnded.bind(this),
                        t.addEventListener("seeking", this.onvseeking),
                        t.addEventListener("ended", this.onvended);
                        var i = this.config;
                        this.tracks && i.autoStartLoad && this.startLoad(i.startPosition)
                    }
                    ,
                    i.prototype.onMediaDetaching = function() {
                        var e = this.media;
                        e && e.ended && (h.logger.log("MSE detaching and video ended, reset startPosition"),
                        this.startPosition = this.lastCurrentTime = 0),
                        e && (e.removeEventListener("seeking", this.onvseeking),
                        e.removeEventListener("ended", this.onvended),
                        this.onvseeking = this.onvseeked = this.onvended = null),
                        this.media = this.mediaBuffer = this.videoBuffer = null,
                        this.loadedmetadata = !1,
                        this.stopLoad()
                    }
                    ,
                    i.prototype.onMediaSeeking = function() {
                        this.state === y.ENDED && (this.state = y.IDLE),
                        this.media && (this.lastCurrentTime = this.media.currentTime),
                        this.tick()
                    }
                    ,
                    i.prototype.onMediaEnded = function() {
                        this.startPosition = this.lastCurrentTime = 0
                    }
                    ,
                    i.prototype.onAudioTracksUpdated = function(e) {
                        h.logger.log("audio tracks updated"),
                        this.tracks = e.audioTracks
                    }
                    ,
                    i.prototype.onAudioTrackSwitching = function(e) {
                        var t = !!e.url;
                        this.trackId = e.id,
                        this.fragCurrent = null,
                        this.state = y.PAUSED,
                        this.waitingFragment = null,
                        t ? this.setInterval(100) : this.demuxer && (this.demuxer.destroy(),
                        this.demuxer = null),
                        t && (this.audioSwitch = !0,
                        this.state = y.IDLE),
                        this.tick()
                    }
                    ,
                    i.prototype.onAudioTrackLoaded = function(t) {
                        var i = t.details
                          , s = t.id
                          , r = this.tracks[s]
                          , o = i.totalduration
                          , n = 0;
                        if (h.logger.log("track " + s + " loaded [" + i.startSN + "," + i.endSN + "],duration:" + o),
                        i.live) {
                            var a = r.details;
                            a && i.fragments.length > 0 ? (l.mergeDetails(a, i),
                            n = i.fragments[0].start,
                            i.PTSKnown ? h.logger.log("live audio playlist sliding:" + n.toFixed(3)) : h.logger.log("live audio playlist - outdated PTS, unknown sliding")) : (i.PTSKnown = !1,
                            h.logger.log("live audio playlist - first load, unknown sliding"))
                        } else
                            i.PTSKnown = !1;
                        if (r.details = i,
                        !this.startFragRequested) {
                            if (-1 === this.startPosition) {
                                var d = i.startTimeOffset;
                                e.isFinite(d) ? (h.logger.log("start time offset found in playlist, adjust startPosition to " + d),
                                this.startPosition = d) : this.startPosition = 0
                            }
                            this.nextLoadPosition = this.startPosition
                        }
                        this.state === y.WAITING_TRACK && (this.state = y.IDLE),
                        this.tick()
                    }
                    ,
                    i.prototype.onKeyLoaded = function() {
                        this.state === y.KEY_LOADING && (this.state = y.IDLE,
                        this.tick())
                    }
                    ,
                    i.prototype.onFragLoaded = function(e) {
                        var t = this.fragCurrent
                          , i = e.frag;
                        if (this.state === y.FRAG_LOADING && t && "audio" === i.type && i.level === t.level && i.sn === t.sn) {
                            var s = this.tracks[this.trackId]
                              , r = s.details
                              , o = r.totalduration
                              , l = t.level
                              , d = t.sn
                              , u = t.cc
                              , c = this.config.defaultAudioCodec || s.audioCodec || "mp4a.40.2"
                              , f = this.stats = e.stats;
                            if ("initSegment" === d)
                                this.state = y.IDLE,
                                f.tparsed = f.tbuffered = g.now(),
                                r.initSegment.data = e.payload,
                                this.hls.trigger(a["default"].FRAG_BUFFERED, {
                                    stats: f,
                                    frag: t,
                                    id: "audio"
                                }),
                                this.tick();
                            else {
                                this.state = y.PARSING,
                                this.appended = !1,
                                this.demuxer || (this.demuxer = new n["default"](this.hls,"audio"));
                                var p = this.initPTS[u]
                                  , v = r.initSegment ? r.initSegment.data : [];
                                if (r.initSegment || p !== undefined) {
                                    this.pendingBuffering = !0,
                                    h.logger.log("Demuxing " + d + " of [" + r.startSN + " ," + r.endSN + "],track " + l);
                                    this.demuxer.push(e.payload, v, c, null, t, o, !1, p)
                                } else
                                    h.logger.log("unknown video PTS for continuity counter " + u + ", waiting for video PTS before demuxing audio frag " + d + " of [" + r.startSN + " ," + r.endSN + "],track " + l),
                                    this.waitingFragment = e,
                                    this.state = y.WAITING_INIT_PTS
                            }
                        }
                        this.fragLoadError = 0
                    }
                    ,
                    i.prototype.onFragParsingInitSegment = function(e) {
                        var t = this.fragCurrent
                          , i = e.frag;
                        if (t && "audio" === e.id && i.sn === t.sn && i.level === t.level && this.state === y.PARSING) {
                            var s = e.tracks
                              , r = void 0;
                            if (s.video && delete s.video,
                            r = s.audio) {
                                r.levelCodec = r.codec,
                                r.id = e.id,
                                this.hls.trigger(a["default"].BUFFER_CODECS, s),
                                h.logger.log("audio track:audio,container:" + r.container + ",codecs[level/parsed]=[" + r.levelCodec + "/" + r.codec + "]");
                                var o = r.initSegment;
                                if (o) {
                                    var n = {
                                        type: "audio",
                                        data: o,
                                        parent: "audio",
                                        content: "initSegment"
                                    };
                                    this.audioSwitch ? this.pendingData = [n] : (this.appended = !0,
                                    this.pendingBuffering = !0,
                                    this.hls.trigger(a["default"].BUFFER_APPENDING, n))
                                }
                                this.tick()
                            }
                        }
                    }
                    ,
                    i.prototype.onFragParsingData = function(t) {
                        var i = this
                          , s = this.fragCurrent
                          , r = t.frag;
                        if (s && "audio" === t.id && "audio" === t.type && r.sn === s.sn && r.level === s.level && this.state === y.PARSING) {
                            var o = this.trackId
                              , n = this.tracks[o]
                              , d = this.hls;
                            e.isFinite(t.endPTS) || (t.endPTS = t.startPTS + s.duration,
                            t.endDTS = t.startDTS + s.duration),
                            s.addElementaryStream(v["default"].ElementaryStreamTypes.AUDIO),
                            h.logger.log("parsed " + t.type + ",PTS:[" + t.startPTS.toFixed(3) + "," + t.endPTS.toFixed(3) + "],DTS:[" + t.startDTS.toFixed(3) + "/" + t.endDTS.toFixed(3) + "],nb:" + t.nb),
                            l.updateFragPTSDTS(n.details, s, t.startPTS, t.endPTS);
                            var c = this.audioSwitch
                              , f = this.media
                              , p = !1;
                            if (c && f)
                                if (f.readyState) {
                                    var g = f.currentTime;
                                    h.logger.log("switching audio track : currentTime:" + g),
                                    g >= t.startPTS && (h.logger.log("switching audio track : flushing all audio"),
                                    this.state = y.BUFFER_FLUSHING,
                                    d.trigger(a["default"].BUFFER_FLUSHING, {
                                        startOffset: 0,
                                        endOffset: e.POSITIVE_INFINITY,
                                        type: "audio"
                                    }),
                                    p = !0,
                                    this.audioSwitch = !1,
                                    d.trigger(a["default"].AUDIO_TRACK_SWITCHED, {
                                        id: o
                                    }))
                                } else
                                    this.audioSwitch = !1,
                                    d.trigger(a["default"].AUDIO_TRACK_SWITCHED, {
                                        id: o
                                    });
                            var m = this.pendingData;
                            if (!m)
                                return h.logger.warn("Apparently attempt to enqueue media payload without codec initialization data upfront"),
                                void d.trigger(a["default"].ERROR, {
                                    type: u.ErrorTypes.MEDIA_ERROR,
                                    details: null,
                                    fatal: !0
                                });
                            this.audioSwitch || ([t.data1, t.data2].forEach(function(e) {
                                e && e.length && m.push({
                                    type: t.type,
                                    data: e,
                                    parent: "audio",
                                    content: "data"
                                })
                            }),
                            !p && m.length && (m.forEach(function(e) {
                                i.state === y.PARSING && (i.pendingBuffering = !0,
                                i.hls.trigger(a["default"].BUFFER_APPENDING, e))
                            }),
                            this.pendingData = [],
                            this.appended = !0)),
                            this.tick()
                        }
                    }
                    ,
                    i.prototype.onFragParsed = function(e) {
                        var t = this.fragCurrent
                          , i = e.frag;
                        t && "audio" === e.id && i.sn === t.sn && i.level === t.level && this.state === y.PARSING && (this.stats.tparsed = g.now(),
                        this.state = y.PARSED,
                        this._checkAppendedParsed())
                    }
                    ,
                    i.prototype.onBufferReset = function() {
                        this.mediaBuffer = this.videoBuffer = null,
                        this.loadedmetadata = !1
                    }
                    ,
                    i.prototype.onBufferCreated = function(e) {
                        var t = e.tracks.audio;
                        t && (this.mediaBuffer = t.buffer,
                        this.loadedmetadata = !0),
                        e.tracks.video && (this.videoBuffer = e.tracks.video.buffer)
                    }
                    ,
                    i.prototype.onBufferAppended = function(e) {
                        if ("audio" === e.parent) {
                            var t = this.state;
                            t !== y.PARSING && t !== y.PARSED || (this.pendingBuffering = e.pending > 0,
                            this._checkAppendedParsed())
                        }
                    }
                    ,
                    i.prototype._checkAppendedParsed = function() {
                        if (!(this.state !== y.PARSED || this.appended && this.pendingBuffering)) {
                            var e = this.fragCurrent
                              , t = this.stats
                              , i = this.hls;
                            if (e) {
                                this.fragPrevious = e,
                                t.tbuffered = g.now(),
                                i.trigger(a["default"].FRAG_BUFFERED, {
                                    stats: t,
                                    frag: e,
                                    id: "audio"
                                });
                                var s = this.mediaBuffer ? this.mediaBuffer : this.media;
                                h.logger.log("audio buffered : " + d["default"].toString(s.buffered)),
                                this.audioSwitch && this.appended && (this.audioSwitch = !1,
                                i.trigger(a["default"].AUDIO_TRACK_SWITCHED, {
                                    id: this.trackId
                                })),
                                this.state = y.IDLE
                            }
                            this.tick()
                        }
                    }
                    ,
                    i.prototype.onError = function(t) {
                        var i = t.frag;
                        if (!i || "audio" === i.type)
                            switch (t.details) {
                            case u.ErrorDetails.FRAG_LOAD_ERROR:
                            case u.ErrorDetails.FRAG_LOAD_TIMEOUT:
                                var s = t.frag;
                                if (s && "audio" !== s.type)
                                    break;
                                if (!t.fatal) {
                                    var r = this.fragLoadError;
                                    r ? r++ : r = 1;
                                    var n = this.config;
                                    if (r <= n.fragLoadingMaxRetry) {
                                        this.fragLoadError = r;
                                        var l = Math.min(Math.pow(2, r - 1) * n.fragLoadingRetryDelay, n.fragLoadingMaxRetryTimeout);
                                        h.logger.warn("AudioStreamController: frag loading failed, retry in " + l + " ms"),
                                        this.retryDate = g.now() + l,
                                        this.state = y.FRAG_LOADING_WAITING_RETRY
                                    } else
                                        h.logger.error("AudioStreamController: " + t.details + " reaches max retry, redispatch as fatal ..."),
                                        t.fatal = !0,
                                        this.state = y.ERROR
                                }
                                break;
                            case u.ErrorDetails.AUDIO_TRACK_LOAD_ERROR:
                            case u.ErrorDetails.AUDIO_TRACK_LOAD_TIMEOUT:
                            case u.ErrorDetails.KEY_LOAD_ERROR:
                            case u.ErrorDetails.KEY_LOAD_TIMEOUT:
                                this.state !== y.ERROR && (this.state = t.fatal ? y.ERROR : y.IDLE,
                                h.logger.warn("AudioStreamController: " + t.details + " while loading frag, now switching to " + this.state + " state ..."));
                                break;
                            case u.ErrorDetails.BUFFER_FULL_ERROR:
                                if ("audio" === t.parent && (this.state === y.PARSING || this.state === y.PARSED)) {
                                    var d = this.mediaBuffer
                                      , c = this.media.currentTime;
                                    if (d && o.BufferHelper.isBuffered(d, c) && o.BufferHelper.isBuffered(d, c + .5)) {
                                        var n = this.config;
                                        n.maxMaxBufferLength >= n.maxBufferLength && (n.maxMaxBufferLength /= 2,
                                        h.logger.warn("AudioStreamController: reduce max buffer length to " + n.maxMaxBufferLength + "s")),
                                        this.state = y.IDLE
                                    } else
                                        h.logger.warn("AudioStreamController: buffer full error also media.currentTime is not buffered, flush audio buffer"),
                                        this.fragCurrent = null,
                                        this.state = y.BUFFER_FLUSHING,
                                        this.hls.trigger(a["default"].BUFFER_FLUSHING, {
                                            startOffset: 0,
                                            endOffset: e.POSITIVE_INFINITY,
                                            type: "audio"
                                        })
                                }
                            }
                    }
                    ,
                    i.prototype.onBufferFlushed = function() {
                        var e = this
                          , t = this.pendingData;
                        t && t.length ? (h.logger.log("AudioStreamController: appending pending audio data after buffer flushed"),
                        t.forEach(function(t) {
                            e.hls.trigger(a["default"].BUFFER_APPENDING, t)
                        }),
                        this.appended = !0,
                        this.pendingData = [],
                        this.state = y.PARSED) : (this.state = y.IDLE,
                        this.fragPrevious = null,
                        this.tick())
                    }
                    ,
                    i
                }(f["default"]);
                t["default"] = m
            }
            ).call(this, i("./src/polyfills/number.js").Number)
        },
        "./src/controller/audio-track-controller.js": function(e, t, i) {
            "use strict";
            var s = this && this.__extends || function() {
                var e = Object.setPrototypeOf || {
                    __proto__: []
                }instanceof Array && function(e, t) {
                    e.__proto__ = t
                }
                || function(e, t) {
                    for (var i in t)
                        t.hasOwnProperty(i) && (e[i] = t[i])
                }
                ;
                return function(t, i) {
                    function s() {
                        this.constructor = t
                    }
                    e(t, i),
                    t.prototype = null === i ? Object.create(i) : (s.prototype = i.prototype,
                    new s)
                }
            }();
            Object.defineProperty(t, "__esModule", {
                value: !0
            });
            var r = i("./src/events.js")
              , o = i("./src/task-loop.js")
              , n = i("./src/utils/logger.js")
              , a = i("./src/errors.js")
              , l = function(e) {
                function t(t) {
                    var i = e.call(this, t, r["default"].MANIFEST_LOADING, r["default"].MANIFEST_PARSED, r["default"].AUDIO_TRACK_LOADED, r["default"].AUDIO_TRACK_SWITCHED, r["default"].LEVEL_LOADED, r["default"].ERROR) || this;
                    return i._trackId = -1,
                    i._selectDefaultTrack = !0,
                    i.tracks = [],
                    i.trackIdBlacklist = Object.create(null),
                    i.audioGroupId = null,
                    i
                }
                return s(t, e),
                t.prototype.onManifestLoading = function() {
                    this.tracks = [],
                    this._trackId = -1,
                    this._selectDefaultTrack = !0
                }
                ,
                t.prototype.onManifestParsed = function(e) {
                    var t = this.tracks = e.audioTracks || [];
                    this.hls.trigger(r["default"].AUDIO_TRACKS_UPDATED, {
                        audioTracks: t
                    })
                }
                ,
                t.prototype.onAudioTrackLoaded = function(e) {
                    if (e.id >= this.tracks.length)
                        return void n.logger.warn("Invalid audio track id:", e.id);
                    if (n.logger.log("audioTrack " + e.id + " loaded"),
                    this.tracks[e.id].details = e.details,
                    e.details.live && !this.hasInterval()) {
                        var t = 1e3 * e.details.targetduration;
                        this.setInterval(t)
                    }
                    !e.details.live && this.hasInterval() && this.clearInterval()
                }
                ,
                t.prototype.onAudioTrackSwitched = function(e) {
                    var t = this.tracks[e.id].groupId;
                    t && this.audioGroupId !== t && (this.audioGroupId = t)
                }
                ,
                t.prototype.onLevelLoaded = function(e) {
                    var t = this.hls.levels[e.level];
                    if (t.audioGroupIds) {
                        var i = t.audioGroupIds[t.urlId];
                        this.audioGroupId !== i && (this.audioGroupId = i,
                        this._selectInitialAudioTrack())
                    }
                }
                ,
                t.prototype.onError = function(e) {
                    e.type === a.ErrorTypes.NETWORK_ERROR && (e.fatal && this.clearInterval(),
                    e.details === a.ErrorDetails.AUDIO_TRACK_LOAD_ERROR && (n.logger.warn("Network failure on audio-track id:", e.context.id),
                    this._handleLoadError()))
                }
                ,
                Object.defineProperty(t.prototype, "audioTracks", {
                    get: function() {
                        return this.tracks
                    },
                    enumerable: !0,
                    configurable: !0
                }),
                Object.defineProperty(t.prototype, "audioTrack", {
                    get: function() {
                        return this._trackId
                    },
                    set: function(e) {
                        this._setAudioTrack(e),
                        this._selectDefaultTrack = !1
                    },
                    enumerable: !0,
                    configurable: !0
                }),
                t.prototype._setAudioTrack = function(e) {
                    if (this._trackId === e && this.tracks[this._trackId].details)
                        return void n.logger.debug("Same id as current audio-track passed, and track details available -> no-op");
                    if (e < 0 || e >= this.tracks.length)
                        return void n.logger.warn("Invalid id passed to audio-track controller");
                    var t = this.tracks[e];
                    n.logger.log("Now switching to audio-track index " + e),
                    this.clearInterval(),
                    this._trackId = e;
                    var i = t.url
                      , s = t.type
                      , o = t.id;
                    this.hls.trigger(r["default"].AUDIO_TRACK_SWITCHING, {
                        id: o,
                        type: s,
                        url: i
                    }),
                    this._loadTrackDetailsIfNeeded(t)
                }
                ,
                t.prototype.doTick = function() {
                    this._updateTrack(this._trackId)
                }
                ,
                t.prototype._selectInitialAudioTrack = function() {
                    var e = this
                      , t = this.tracks;
                    if (t.length) {
                        var i = this.tracks[this._trackId]
                          , s = null;
                        if (i && (s = i.name),
                        this._selectDefaultTrack) {
                            var o = t.filter(function(e) {
                                return e["default"]
                            });
                            o.length ? t = o : n.logger.warn("No default audio tracks defined")
                        }
                        var l = !1
                          , d = function() {
                            t.forEach(function(t) {
                                l || e.audioGroupId && t.groupId !== e.audioGroupId || s && s !== t.name || (e._setAudioTrack(t.id),
                                l = !0)
                            })
                        };
                        d(),
                        l || (s = null,
                        d()),
                        l || (n.logger.error("No track found for running audio group-ID: " + this.audioGroupId),
                        this.hls.trigger(r["default"].ERROR, {
                            type: a.ErrorTypes.MEDIA_ERROR,
                            details: a.ErrorDetails.AUDIO_TRACK_LOAD_ERROR,
                            fatal: !0
                        }))
                    }
                }
                ,
                t.prototype._needsTrackLoading = function(e) {
                    var t = e.details;
                    return !t || (!!t.live || void 0)
                }
                ,
                t.prototype._loadTrackDetailsIfNeeded = function(e) {
                    if (this._needsTrackLoading(e)) {
                        var t = e.url
                          , i = e.id;
                        n.logger.log("loading audio-track playlist for id: " + i),
                        this.hls.trigger(r["default"].AUDIO_TRACK_LOADING, {
                            url: t,
                            id: i
                        })
                    }
                }
                ,
                t.prototype._updateTrack = function(e) {
                    if (!(e < 0 || e >= this.tracks.length)) {
                        this.clearInterval(),
                        this._trackId = e,
                        n.logger.log("trying to update audio-track " + e);
                        var t = this.tracks[e];
                        this._loadTrackDetailsIfNeeded(t)
                    }
                }
                ,
                t.prototype._handleLoadError = function() {
                    this.trackIdBlacklist[this._trackId] = !0;
                    var e = this._trackId
                      , t = this.tracks[e]
                      , i = t.name
                      , s = t.language
                      , r = t.groupId;
                    n.logger.warn("Loading failed on audio track id: " + e + ", group-id: " + r + ', name/language: "' + i + '" / "' + s + '"');
                    for (var o = e, a = 0; a < this.tracks.length; a++)
                        if (!this.trackIdBlacklist[a]) {
                            var l = this.tracks[a];
                            if (l.name === i) {
                                o = a;
                                break
                            }
                        }
                    if (o === e)
                        return void n.logger.warn('No fallback audio-track found for name/language: "' + i + '" / "' + s + '"');
                    n.logger.log("Attempting audio-track fallback id:", o, "group-id:", this.tracks[o].groupId),
                    this._setAudioTrack(o)
                }
                ,
                t
            }(o["default"]);
            t["default"] = l
        },
        "./src/controller/buffer-controller.js": function(e, t, i) {
            "use strict";
            (function(e) {
                var s = this && this.__extends || function() {
                    var e = Object.setPrototypeOf || {
                        __proto__: []
                    }instanceof Array && function(e, t) {
                        e.__proto__ = t
                    }
                    || function(e, t) {
                        for (var i in t)
                            t.hasOwnProperty(i) && (e[i] = t[i])
                    }
                    ;
                    return function(t, i) {
                        function s() {
                            this.constructor = t
                        }
                        e(t, i),
                        t.prototype = null === i ? Object.create(i) : (s.prototype = i.prototype,
                        new s)
                    }
                }();
                Object.defineProperty(t, "__esModule", {
                    value: !0
                });
                var r = i("./src/events.js")
                  , o = i("./src/event-handler.js")
                  , n = i("./src/utils/logger.js")
                  , a = i("./src/errors.js")
                  , l = i("./src/utils/mediasource-helper.js")
                  , d = l.getMediaSource()
                  , u = function(t) {
                    function i(e) {
                        var i = t.call(this, e, r["default"].MEDIA_ATTACHING, r["default"].MEDIA_DETACHING, r["default"].MANIFEST_PARSED, r["default"].BUFFER_RESET, r["default"].BUFFER_APPENDING, r["default"].BUFFER_CODECS, r["default"].BUFFER_EOS, r["default"].BUFFER_FLUSHING, r["default"].LEVEL_PTS_UPDATED, r["default"].LEVEL_UPDATED) || this;
                        return i._msDuration = null,
                        i._levelDuration = null,
                        i._live = null,
                        i._objectUrl = null,
                        i.onsbue = i.onSBUpdateEnd.bind(i),
                        i.onsbe = i.onSBUpdateError.bind(i),
                        i.pendingTracks = {},
                        i.tracks = {},
                        i
                    }
                    return s(i, t),
                    i.prototype.destroy = function() {
                        o["default"].prototype.destroy.call(this)
                    }
                    ,
                    i.prototype.onLevelPtsUpdated = function(e) {
                        var t = e.type
                          , i = this.tracks.audio;
                        if ("audio" === t && i && "audio/mpeg" === i.container) {
                            var s = this.sourceBuffer.audio;
                            if (Math.abs(s.timestampOffset - e.start) > .1) {
                                var r = s.updating;
                                try {
                                    s.abort()
                                } catch (o) {
                                    r = !0,
                                    n.logger.warn("can not abort audio buffer: " + o)
                                }
                                r ? this.audioTimestampOffset = e.start : (n.logger.warn("change mpeg audio timestamp offset from " + s.timestampOffset + " to " + e.start),
                                s.timestampOffset = e.start)
                            }
                        }
                    }
                    ,
                    i.prototype.onManifestParsed = function(e) {
                        var t = e.audio
                          , i = e.video || e.levels.length && e.altAudio
                          , s = 0;
                        e.altAudio && (t || i) && (s = (t ? 1 : 0) + (i ? 1 : 0),
                        n.logger.log(s + " sourceBuffer(s) expected")),
                        this.sourceBufferNb = s
                    }
                    ,
                    i.prototype.onMediaAttaching = function(e) {
                        var t = this.media = e.media;
                        if (t) {
                            var i = this.mediaSource = new d;
                            this.onmso = this.onMediaSourceOpen.bind(this),
                            this.onmse = this.onMediaSourceEnded.bind(this),
                            this.onmsc = this.onMediaSourceClose.bind(this),
                            i.addEventListener("sourceopen", this.onmso),
                            i.addEventListener("sourceended", this.onmse),
                            i.addEventListener("sourceclose", this.onmsc),
                            t.src = window.URL.createObjectURL(i),
                            this._objectUrl = t.src
                        }
                    }
                    ,
                    i.prototype.onMediaDetaching = function() {
                        n.logger.log("media source detaching");
                        var e = this.mediaSource;
                        if (e) {
                            if ("open" === e.readyState)
                                try {
                                    e.endOfStream()
                                } catch (t) {
                                    n.logger.warn("onMediaDetaching:" + t.message + " while calling endOfStream")
                                }
                            e.removeEventListener("sourceopen", this.onmso),
                            e.removeEventListener("sourceended", this.onmse),
                            e.removeEventListener("sourceclose", this.onmsc),
                            this.media && (window.URL.revokeObjectURL(this._objectUrl),
                            this.media.src === this._objectUrl ? (this.media.removeAttribute("src"),
                            this.media.load()) : n.logger.warn("media.src was changed by a third party - skip cleanup")),
                            this.mediaSource = null,
                            this.media = null,
                            this._objectUrl = null,
                            this.pendingTracks = {},
                            this.tracks = {},
                            this.sourceBuffer = {},
                            this.flushRange = [],
                            this.segments = [],
                            this.appended = 0
                        }
                        this.onmso = this.onmse = this.onmsc = null,
                        this.hls.trigger(r["default"].MEDIA_DETACHED)
                    }
                    ,
                    i.prototype.onMediaSourceOpen = function() {
                        n.logger.log("media source opened"),
                        this.hls.trigger(r["default"].MEDIA_ATTACHED, {
                            media: this.media
                        });
                        var e = this.mediaSource;
                        e && e.removeEventListener("sourceopen", this.onmso),
                        this.checkPendingTracks()
                    }
                    ,
                    i.prototype.checkPendingTracks = function() {
                        var e = this.pendingTracks
                          , t = Object.keys(e).length;
                        t && (this.sourceBufferNb <= t || 0 === this.sourceBufferNb) && (this.createSourceBuffers(e),
                        this.pendingTracks = {},
                        this.doAppending())
                    }
                    ,
                    i.prototype.onMediaSourceClose = function() {
                        n.logger.log("media source closed")
                    }
                    ,
                    i.prototype.onMediaSourceEnded = function() {
                        n.logger.log("media source ended")
                    }
                    ,
                    i.prototype.onSBUpdateEnd = function() {
                        if (this.audioTimestampOffset) {
                            var e = this.sourceBuffer.audio;
                            n.logger.warn("change mpeg audio timestamp offset from " + e.timestampOffset + " to " + this.audioTimestampOffset),
                            e.timestampOffset = this.audioTimestampOffset,
                            delete this.audioTimestampOffset
                        }
                        this._needsFlush && this.doFlush(),
                        this._needsEos && this.checkEos(),
                        this.appending = !1;
                        var t = this.parent
                          , i = this.segments.reduce(function(e, i) {
                            return i.parent === t ? e + 1 : e
                        }, 0)
                          , s = {}
                          , o = this.sourceBuffer;
                        for (var a in o)
                            s[a] = o[a].buffered;
                        this.hls.trigger(r["default"].BUFFER_APPENDED, {
                            parent: t,
                            pending: i,
                            timeRanges: s
                        }),
                        this._needsFlush || this.doAppending(),
                        this.updateMediaElementDuration()
                    }
                    ,
                    i.prototype.onSBUpdateError = function(e) {
                        n.logger.error("sourceBuffer error:", e),
                        this.hls.trigger(r["default"].ERROR, {
                            type: a.ErrorTypes.MEDIA_ERROR,
                            details: a.ErrorDetails.BUFFER_APPENDING_ERROR,
                            fatal: !1
                        })
                    }
                    ,
                    i.prototype.onBufferReset = function() {
                        var e = this.sourceBuffer;
                        for (var t in e) {
                            var i = e[t];
                            try {
                                this.mediaSource.removeSourceBuffer(i),
                                i.removeEventListener("updateend", this.onsbue),
                                i.removeEventListener("error", this.onsbe)
                            } catch (s) {}
                        }
                        this.sourceBuffer = {},
                        this.flushRange = [],
                        this.segments = [],
                        this.appended = 0
                    }
                    ,
                    i.prototype.onBufferCodecs = function(e) {
                        if (0 === Object.keys(this.sourceBuffer).length) {
                            for (var t in e)
                                this.pendingTracks[t] = e[t];
                            var i = this.mediaSource;
                            i && "open" === i.readyState && this.checkPendingTracks()
                        }
                    }
                    ,
                    i.prototype.createSourceBuffers = function(e) {
                        var t = this.sourceBuffer
                          , i = this.mediaSource;
                        for (var s in e)
                            if (!t[s]) {
                                var o = e[s]
                                  , l = o.levelCodec || o.codec
                                  , d = o.container + ";codecs=" + l;
                                n.logger.log("creating sourceBuffer(" + d + ")");
                                try {
                                    var u = t[s] = i.addSourceBuffer(d);
                                    u.addEventListener("updateend", this.onsbue),
                                    u.addEventListener("error", this.onsbe),
                                    this.tracks[s] = {
                                        codec: l,
                                        container: o.container
                                    },
                                    o.buffer = u
                                } catch (h) {
                                    n.logger.error("error while trying to add sourceBuffer:" + h.message),
                                    this.hls.trigger(r["default"].ERROR, {
                                        type: a.ErrorTypes.MEDIA_ERROR,
                                        details: a.ErrorDetails.BUFFER_ADD_CODEC_ERROR,
                                        fatal: !1,
                                        err: h,
                                        mimeType: d
                                    })
                                }
                            }
                        this.hls.trigger(r["default"].BUFFER_CREATED, {
                            tracks: e
                        })
                    }
                    ,
                    i.prototype.onBufferAppending = function(e) {
                        this._needsFlush || (this.segments ? this.segments.push(e) : this.segments = [e],
                        this.doAppending())
                    }
                    ,
                    i.prototype.onBufferAppendFail = function(e) {
                        n.logger.error("sourceBuffer error:", e.event),
                        this.hls.trigger(r["default"].ERROR, {
                            type: a.ErrorTypes.MEDIA_ERROR,
                            details: a.ErrorDetails.BUFFER_APPENDING_ERROR,
                            fatal: !1
                        })
                    }
                    ,
                    i.prototype.onBufferEos = function(e) {
                        var t = this.sourceBuffer
                          , i = e.type;
                        for (var s in t)
                            i && s !== i || t[s].ended || (t[s].ended = !0,
                            n.logger.log(s + " sourceBuffer now EOS"));
                        this.checkEos()
                    }
                    ,
                    i.prototype.checkEos = function() {
                        var e = this.sourceBuffer
                          , t = this.mediaSource;
                        if (!t || "open" !== t.readyState)
                            return void (this._needsEos = !1);
                        for (var i in e) {
                            var s = e[i];
                            if (!s.ended)
                                return;
                            if (s.updating)
                                return void (this._needsEos = !0)
                        }
                        n.logger.log("all media data available, signal endOfStream() to MediaSource and stop loading fragment");
                        try {
                            t.endOfStream()
                        } catch (r) {
                            n.logger.warn("exception while calling mediaSource.endOfStream()")
                        }
                        this._needsEos = !1
                    }
                    ,
                    i.prototype.onBufferFlushing = function(e) {
                        this.flushRange.push({
                            start: e.startOffset,
                            end: e.endOffset,
                            type: e.type
                        }),
                        this.flushBufferCounter = 0,
                        this.doFlush()
                    }
                    ,
                    i.prototype.onLevelUpdated = function(e) {
                        var t = e.details;
                        t.fragments.length > 0 && (this._levelDuration = t.totalduration + t.fragments[0].start,
                        this._live = t.live,
                        this.updateMediaElementDuration())
                    }
                    ,
                    i.prototype.updateMediaElementDuration = function() {
                        var t, i = this.hls.config;
                        if (null !== this._levelDuration && this.media && this.mediaSource && this.sourceBuffer && 0 !== this.media.readyState && "open" === this.mediaSource.readyState) {
                            for (var s in this.sourceBuffer)
                                if (!0 === this.sourceBuffer[s].updating)
                                    return;
                            t = this.media.duration,
                            null === this._msDuration && (this._msDuration = this.mediaSource.duration),
                            !0 === this._live && !0 === i.liveDurationInfinity ? (n.logger.log("Media Source duration is set to Infinity"),
                            this._msDuration = this.mediaSource.duration = Infinity) : (this._levelDuration > this._msDuration && this._levelDuration > t || !e.isFinite(t)) && (n.logger.log("Updating Media Source duration to " + this._levelDuration.toFixed(3)),
                            this._msDuration = this.mediaSource.duration = this._levelDuration)
                        }
                    }
                    ,
                    i.prototype.doFlush = function() {
                        for (; this.flushRange.length; ) {
                            var e = this.flushRange[0];
                            if (!this.flushBuffer(e.start, e.end, e.type))
                                return void (this._needsFlush = !0);
                            this.flushRange.shift(),
                            this.flushBufferCounter = 0
                        }
                        if (0 === this.flushRange.length) {
                            this._needsFlush = !1;
                            var t = 0
                              , i = this.sourceBuffer;
                            try {
                                for (var s in i)
                                    t += i[s].buffered.length
                            } catch (o) {
                                n.logger.error("error while accessing sourceBuffer.buffered")
                            }
                            this.appended = t,
                            this.hls.trigger(r["default"].BUFFER_FLUSHED)
                        }
                    }
                    ,
                    i.prototype.doAppending = function() {
                        var e = this.hls
                          , t = this.sourceBuffer
                          , i = this.segments;
                        if (Object.keys(t).length) {
                            if (this.media.error)
                                return this.segments = [],
                                void n.logger.error("trying to append although a media error occured, flush segment and abort");
                            if (this.appending)
                                return;
                            if (i && i.length) {
                                var s = i.shift();
                                try {
                                    var o = s.type
                                      , l = t[o];
                                    l ? l.updating ? i.unshift(s) : (l.ended = !1,
                                    this.parent = s.parent,
                                    l.appendBuffer(s.data),
                                    this.appendError = 0,
                                    this.appended++,
                                    this.appending = !0) : this.onSBUpdateEnd()
                                } catch (u) {
                                    n.logger.error("error while trying to append buffer:" + u.message),
                                    i.unshift(s);
                                    var d = {
                                        type: a.ErrorTypes.MEDIA_ERROR,
                                        parent: s.parent
                                    };
                                    22 !== u.code ? (this.appendError ? this.appendError++ : this.appendError = 1,
                                    d.details = a.ErrorDetails.BUFFER_APPEND_ERROR,
                                    this.appendError > e.config.appendErrorMaxRetry ? (n.logger.log("fail " + e.config.appendErrorMaxRetry + " times to append segment in sourceBuffer"),
                                    i = [],
                                    d.fatal = !0,
                                    e.trigger(r["default"].ERROR, d)) : (d.fatal = !1,
                                    e.trigger(r["default"].ERROR, d))) : (this.segments = [],
                                    d.details = a.ErrorDetails.BUFFER_FULL_ERROR,
                                    d.fatal = !1,
                                    e.trigger(r["default"].ERROR, d))
                                }
                            }
                        }
                    }
                    ,
                    i.prototype.flushBuffer = function(t, i, s) {
                        var r, o, a, l, d, u, h = this.sourceBuffer;
                        if (Object.keys(h).length) {
                            if (n.logger.log("flushBuffer,pos/start/end: " + this.media.currentTime.toFixed(3) + "/" + t + "/" + i),
                            this.flushBufferCounter < this.appended) {
                                for (var c in h)
                                    if (!s || c === s) {
                                        if (r = h[c],
                                        r.ended = !1,
                                        r.updating)
                                            return n.logger.warn("cannot flush, sb updating in progress"),
                                            !1;
                                        try {
                                            for (o = 0; o < r.buffered.length; o++)
                                                if (a = r.buffered.start(o),
                                                l = r.buffered.end(o),
                                                -1 !== navigator.userAgent.toLowerCase().indexOf("firefox") && i === e.POSITIVE_INFINITY ? (d = t,
                                                u = i) : (d = Math.max(a, t),
                                                u = Math.min(l, i)),
                                                Math.min(u, l) - d > .5)
                                                    return this.flushBufferCounter++,
                                                    n.logger.log("flush " + c + " [" + d + "," + u + "], of [" + a + "," + l + "], pos:" + this.media.currentTime),
                                                    r.remove(d, u),
                                                    !1
                                        } catch (f) {
                                            n.logger.warn("exception while accessing sourcebuffer, it might have been removed from MediaSource")
                                        }
                                    }
                            } else
                                n.logger.warn("abort flushing too many retries");
                            n.logger.log("buffer flushed")
                        }
                        return !0
                    }
                    ,
                    i
                }(o["default"]);
                t["default"] = u
            }
            ).call(this, i("./src/polyfills/number.js").Number)
        },
        "./src/controller/cap-level-controller.js": function(e, t, i) {
            "use strict";
            (function(e) {
                var s = this && this.__extends || function() {
                    var e = Object.setPrototypeOf || {
                        __proto__: []
                    }instanceof Array && function(e, t) {
                        e.__proto__ = t
                    }
                    || function(e, t) {
                        for (var i in t)
                            t.hasOwnProperty(i) && (e[i] = t[i])
                    }
                    ;
                    return function(t, i) {
                        function s() {
                            this.constructor = t
                        }
                        e(t, i),
                        t.prototype = null === i ? Object.create(i) : (s.prototype = i.prototype,
                        new s)
                    }
                }();
                Object.defineProperty(t, "__esModule", {
                    value: !0
                });
                var r = i("./src/events.js")
                  , o = i("./src/event-handler.js")
                  , n = function(t) {
                    function i(i) {
                        var s = t.call(this, i, r["default"].FPS_DROP_LEVEL_CAPPING, r["default"].MEDIA_ATTACHING, r["default"].MANIFEST_PARSED, r["default"].BUFFER_CODECS, r["default"].MEDIA_DETACHING) || this;
                        return s.autoLevelCapping = e.POSITIVE_INFINITY,
                        s.firstLevel = null,
                        s.levels = [],
                        s.media = null,
                        s.restrictedLevels = [],
                        s.timer = null,
                        s
                    }
                    return s(i, t),
                    i.prototype.destroy = function() {
                        this.hls.config.capLevelToPlayerSize && (this.media = null,
                        this._stopCapping())
                    }
                    ,
                    i.prototype.onFpsDropLevelCapping = function(e) {
                        i.isLevelAllowed(e.droppedLevel, this.restrictedLevels) && this.restrictedLevels.push(e.droppedLevel)
                    }
                    ,
                    i.prototype.onMediaAttaching = function(e) {
                        this.media = e.media instanceof window.HTMLVideoElement ? e.media : null
                    }
                    ,
                    i.prototype.onManifestParsed = function(e) {
                        var t = this.hls;
                        this.restrictedLevels = [],
                        this.levels = e.levels,
                        this.firstLevel = e.firstLevel,
                        t.config.capLevelToPlayerSize && (e.video || e.levels.length && e.altAudio) && this._startCapping()
                    }
                    ,
                    i.prototype.onBufferCodecs = function(e) {
                        this.hls.config.capLevelToPlayerSize && e.video && this._startCapping()
                    }
                    ,
                    i.prototype.onLevelsUpdated = function(e) {
                        this.levels = e.levels
                    }
                    ,
                    i.prototype.onMediaDetaching = function() {
                        this._stopCapping()
                    }
                    ,
                    i.prototype.detectPlayerSize = function() {
                        if (this.media) {
                            var e = this.levels ? this.levels.length : 0;
                            if (e) {
                                var t = this.hls;
                                t.autoLevelCapping = this.getMaxLevel(e - 1),
                                t.autoLevelCapping > this.autoLevelCapping && t.streamController.nextLevelSwitch(),
                                this.autoLevelCapping = t.autoLevelCapping
                            }
                        }
                    }
                    ,
                    i.prototype.getMaxLevel = function(e) {
                        var t = this;
                        if (!this.levels)
                            return -1;
                        var s = this.levels.filter(function(s, r) {
                            return i.isLevelAllowed(r, t.restrictedLevels) && r <= e
                        });
                        return i.getMaxLevelByMediaSize(s, this.mediaWidth, this.mediaHeight)
                    }
                    ,
                    i.prototype._startCapping = function() {
                        this.timer || (this.autoLevelCapping = e.POSITIVE_INFINITY,
                        this.hls.firstLevel = this.getMaxLevel(this.firstLevel),
                        clearInterval(this.timer),
                        this.timer = setInterval(this.detectPlayerSize.bind(this), 1e3),
                        this.detectPlayerSize())
                    }
                    ,
                    i.prototype._stopCapping = function() {
                        this.restrictedLevels = [],
                        this.firstLevel = null,
                        this.autoLevelCapping = e.POSITIVE_INFINITY,
                        this.timer && (this.timer = clearInterval(this.timer),
                        this.timer = null)
                    }
                    ,
                    Object.defineProperty(i.prototype, "mediaWidth", {
                        get: function() {
                            var e, t = this.media;
                            return t && (e = t.width || t.clientWidth || t.offsetWidth,
                            e *= i.contentScaleFactor),
                            e
                        },
                        enumerable: !0,
                        configurable: !0
                    }),
                    Object.defineProperty(i.prototype, "mediaHeight", {
                        get: function() {
                            var e, t = this.media;
                            return t && (e = t.height || t.clientHeight || t.offsetHeight,
                            e *= i.contentScaleFactor),
                            e
                        },
                        enumerable: !0,
                        configurable: !0
                    }),
                    Object.defineProperty(i, "contentScaleFactor", {
                        get: function() {
                            var e = 1;
                            try {
                                e = window.devicePixelRatio
                            } catch (t) {}
                            return e
                        },
                        enumerable: !0,
                        configurable: !0
                    }),
                    i.isLevelAllowed = function(e, t) {
                        return void 0 === t && (t = []),
                        -1 === t.indexOf(e)
                    }
                    ,
                    i.getMaxLevelByMediaSize = function(e, t, i) {
                        if (!e || e && !e.length)
                            return -1;
                        for (var s = e.length - 1, r = 0; r < e.length; r += 1) {
                            var o = e[r];
                            if ((o.width >= t || o.height >= i) && function(e, t) {
                                return !t || (e.width !== t.width || e.height !== t.height)
                            }(o, e[r + 1])) {
                                s = r;
                                break
                            }
                        }
                        return s
                    }
                    ,
                    i
                }(o["default"]);
                t["default"] = n
            }
            ).call(this, i("./src/polyfills/number.js").Number)
        },
        "./src/controller/eme-controller.js": function(e, t, i) {
            "use strict";
            var s = this && this.__extends || function() {
                var e = Object.setPrototypeOf || {
                    __proto__: []
                }instanceof Array && function(e, t) {
                    e.__proto__ = t
                }
                || function(e, t) {
                    for (var i in t)
                        t.hasOwnProperty(i) && (e[i] = t[i])
                }
                ;
                return function(t, i) {
                    function s() {
                        this.constructor = t
                    }
                    e(t, i),
                    t.prototype = null === i ? Object.create(i) : (s.prototype = i.prototype,
                    new s)
                }
            }();
            Object.defineProperty(t, "__esModule", {
                value: !0
            });
            var r = i("./src/event-handler.js")
              , o = i("./src/events.js")
              , n = i("./src/errors.js")
              , a = i("./src/utils/logger.js")
              , l = window.XMLHttpRequest
              , d = {
                WIDEVINE: "com.widevine.alpha",
                PLAYREADY: "com.microsoft.playready"
            }
              , u = function(e, t, i) {
                var s = {
                    videoCapabilities: []
                };
                return t.forEach(function(e) {
                    s.videoCapabilities.push({
                        contentType: 'video/mp4; codecs="' + e + '"'
                    })
                }),
                [s]
            }
              , h = function(e, t, i) {
                switch (e) {
                case d.WIDEVINE:
                    return u(0, i);
                default:
                    throw Error("Unknown key-system: " + e)
                }
            }
              , c = function(e) {
                function t(t) {
                    var i = e.call(this, t, o["default"].MEDIA_ATTACHED, o["default"].MANIFEST_PARSED) || this;
                    return i._widevineLicenseUrl = t.config.widevineLicenseUrl,
                    i._licenseXhrSetup = t.config.licenseXhrSetup,
                    i._emeEnabled = t.config.emeEnabled,
                    i._requestMediaKeySystemAccess = t.config.requestMediaKeySystemAccessFunc,
                    i._mediaKeysList = [],
                    i._media = null,
                    i._hasSetMediaKeys = !1,
                    i._isMediaEncrypted = !1,
                    i._requestLicenseFailureCount = 0,
                    i
                }
                return s(t, e),
                t.prototype.getLicenseServerUrl = function(e) {
                    var t;
                    switch (e) {
                    case d.WIDEVINE:
                        t = this._widevineLicenseUrl;
                        break;
                    default:
                        t = null
                    }
                    return t || (a.logger.error('No license server URL configured for key-system "' + e + '"'),
                    this.hls.trigger(o["default"].ERROR, {
                        type: n.ErrorTypes.KEY_SYSTEM_ERROR,
                        details: n.ErrorDetails.KEY_SYSTEM_LICENSE_REQUEST_FAILED,
                        fatal: !0
                    })),
                    t
                }
                ,
                t.prototype._attemptKeySystemAccess = function(e, t, i) {
                    var s = this
                      , r = h(e, 0, i);
                    if (!r)
                        return void a.logger.warn("Can not create config for key-system (maybe because platform is not supported):", e);
                    a.logger.log("Requesting encrypted media key-system access"),
                    this.requestMediaKeySystemAccess(e, r).then(function(t) {
                        s._onMediaKeySystemAccessObtained(e, t)
                    })["catch"](function(t) {
                        a.logger.error('Failed to obtain key-system "' + e + '" access:', t)
                    })
                }
                ,
                Object.defineProperty(t.prototype, "requestMediaKeySystemAccess", {
                    get: function() {
                        if (!this._requestMediaKeySystemAccess)
                            throw new Error("No requestMediaKeySystemAccess function configured");
                        return this._requestMediaKeySystemAccess
                    },
                    enumerable: !0,
                    configurable: !0
                }),
                t.prototype._onMediaKeySystemAccessObtained = function(e, t) {
                    var i = this;
                    a.logger.log('Access for key-system "' + e + '" obtained');
                    var s = {
                        mediaKeys: null,
                        mediaKeysSession: null,
                        mediaKeysSessionInitialized: !1,
                        mediaKeySystemAccess: t,
                        mediaKeySystemDomain: e
                    };
                    this._mediaKeysList.push(s),
                    t.createMediaKeys().then(function(t) {
                        s.mediaKeys = t,
                        a.logger.log('Media-keys created for key-system "' + e + '"'),
                        i._onMediaKeysCreated()
                    })["catch"](function(e) {
                        a.logger.error("Failed to create media-keys:", e)
                    })
                }
                ,
                t.prototype._onMediaKeysCreated = function() {
                    var e = this;
                    this._mediaKeysList.forEach(function(t) {
                        t.mediaKeysSession || (t.mediaKeysSession = t.mediaKeys.createSession(),
                        e._onNewMediaKeySession(t.mediaKeysSession))
                    })
                }
                ,
                t.prototype._onNewMediaKeySession = function(e) {
                    var t = this;
                    a.logger.log("New key-system session " + e.sessionId),
                    e.addEventListener("message", function(i) {
                        t._onKeySessionMessage(e, i.message)
                    }, !1)
                }
                ,
                t.prototype._onKeySessionMessage = function(e, t) {
                    a.logger.log("Got EME message event, creating license request"),
                    this._requestLicense(t, function(t) {
                        a.logger.log("Received license data, updating key-session"),
                        e.update(t)
                    })
                }
                ,
                t.prototype._onMediaEncrypted = function(e, t) {
                    a.logger.log('Media is encrypted using "' + e + '" init data type'),
                    this._isMediaEncrypted = !0,
                    this._mediaEncryptionInitDataType = e,
                    this._mediaEncryptionInitData = t,
                    this._attemptSetMediaKeys(),
                    this._generateRequestWithPreferredKeySession()
                }
                ,
                t.prototype._attemptSetMediaKeys = function() {
                    if (!this._hasSetMediaKeys) {
                        var e = this._mediaKeysList[0];
                        if (!e || !e.mediaKeys)
                            return a.logger.error("Fatal: Media is encrypted but no CDM access or no keys have been obtained yet"),
                            void this.hls.trigger(o["default"].ERROR, {
                                type: n.ErrorTypes.KEY_SYSTEM_ERROR,
                                details: n.ErrorDetails.KEY_SYSTEM_NO_KEYS,
                                fatal: !0
                            });
                        a.logger.log("Setting keys for encrypted media"),
                        this._media.setMediaKeys(e.mediaKeys),
                        this._hasSetMediaKeys = !0
                    }
                }
                ,
                t.prototype._generateRequestWithPreferredKeySession = function() {
                    var e = this
                      , t = this._mediaKeysList[0];
                    if (!t)
                        return a.logger.error("Fatal: Media is encrypted but not any key-system access has been obtained yet"),
                        void this.hls.trigger(o["default"].ERROR, {
                            type: n.ErrorTypes.KEY_SYSTEM_ERROR,
                            details: n.ErrorDetails.KEY_SYSTEM_NO_ACCESS,
                            fatal: !0
                        });
                    if (t.mediaKeysSessionInitialized)
                        return void a.logger.warn("Key-Session already initialized but requested again");
                    var i = t.mediaKeysSession;
                    i || (a.logger.error("Fatal: Media is encrypted but no key-session existing"),
                    this.hls.trigger(o["default"].ERROR, {
                        type: n.ErrorTypes.KEY_SYSTEM_ERROR,
                        details: n.ErrorDetails.KEY_SYSTEM_NO_SESSION,
                        fatal: !0
                    }));
                    var s = this._mediaEncryptionInitDataType
                      , r = this._mediaEncryptionInitData;
                    a.logger.log('Generating key-session request for "' + s + '" init data type'),
                    t.mediaKeysSessionInitialized = !0,
                    i.generateRequest(s, r).then(function() {
                        a.logger.debug("Key-session generation succeeded")
                    })["catch"](function(t) {
                        a.logger.error("Error generating key-session request:", t),
                        e.hls.trigger(o["default"].ERROR, {
                            type: n.ErrorTypes.KEY_SYSTEM_ERROR,
                            details: n.ErrorDetails.KEY_SYSTEM_NO_SESSION,
                            fatal: !1
                        })
                    })
                }
                ,
                t.prototype._createLicenseXhr = function(e, t, i) {
                    var s = new l
                      , r = this._licenseXhrSetup;
                    try {
                        if (r)
                            try {
                                r(s, e)
                            } catch (d) {
                                s.open("POST", e, !0),
                                r(s, e)
                            }
                        s.readyState || s.open("POST", e, !0)
                    } catch (d) {
                        return a.logger.error("Error setting up key-system license XHR", d),
                        void this.hls.trigger(o["default"].ERROR, {
                            type: n.ErrorTypes.KEY_SYSTEM_ERROR,
                            details: n.ErrorDetails.KEY_SYSTEM_LICENSE_REQUEST_FAILED,
                            fatal: !0
                        })
                    }
                    return s.responseType = "arraybuffer",
                    s.onreadystatechange = this._onLicenseRequestReadyStageChange.bind(this, s, e, t, i),
                    s
                }
                ,
                t.prototype._onLicenseRequestReadyStageChange = function(e, t, i, s) {
                    switch (e.readyState) {
                    case 4:
                        if (200 === e.status)
                            this._requestLicenseFailureCount = 0,
                            a.logger.log("License request succeeded"),
                            s(e.response);
                        else {
                            if (a.logger.error("License Request XHR failed (" + t + "). Status: " + e.status + " (" + e.statusText + ")"),
                            ++this._requestLicenseFailureCount <= 3) {
                                var r = 3 - this._requestLicenseFailureCount + 1;
                                return a.logger.warn("Retrying license request, " + r + " attempts left"),
                                void this._requestLicense(i, s)
                            }
                            this.hls.trigger(o["default"].ERROR, {
                                type: n.ErrorTypes.KEY_SYSTEM_ERROR,
                                details: n.ErrorDetails.KEY_SYSTEM_LICENSE_REQUEST_FAILED,
                                fatal: !0
                            })
                        }
                    }
                }
                ,
                t.prototype._generateLicenseRequestChallenge = function(e, t) {
                    var i;
                    return e.mediaKeySystemDomain === d.PLAYREADY ? a.logger.error("PlayReady is not supported (yet)") : e.mediaKeySystemDomain === d.WIDEVINE ? i = t : a.logger.error("Unsupported key-system:", e.mediaKeySystemDomain),
                    i
                }
                ,
                t.prototype._requestLicense = function(e, t) {
                    a.logger.log("Requesting content license for key-system");
                    var i = this._mediaKeysList[0];
                    if (!i)
                        return a.logger.error("Fatal error: Media is encrypted but no key-system access has been obtained yet"),
                        void this.hls.trigger(o["default"].ERROR, {
                            type: n.ErrorTypes.KEY_SYSTEM_ERROR,
                            details: n.ErrorDetails.KEY_SYSTEM_NO_ACCESS,
                            fatal: !0
                        });
                    var s = this.getLicenseServerUrl(i.mediaKeySystemDomain)
                      , r = this._createLicenseXhr(s, e, t);
                    a.logger.log("Sending license request to URL: " + s),
                    r.send(this._generateLicenseRequestChallenge(i, e))
                }
                ,
                t.prototype.onMediaAttached = function(e) {
                    var t = this;
                    if (this._emeEnabled) {
                        var i = e.media;
                        this._media = i,
                        i.addEventListener("encrypted", function(e) {
                            t._onMediaEncrypted(e.initDataType, e.initData)
                        })
                    }
                }
                ,
                t.prototype.onManifestParsed = function(e) {
                    if (this._emeEnabled) {
                        var t = e.levels.map(function(e) {
                            return e.audioCodec
                        })
                          , i = e.levels.map(function(e) {
                            return e.videoCodec
                        });
                        this._attemptKeySystemAccess(d.WIDEVINE, t, i)
                    }
                }
                ,
                t
            }(r["default"]);
            t["default"] = c
        },
        "./src/controller/fps-controller.js": function(e, t, i) {
            "use strict";
            var s = this && this.__extends || function() {
                var e = Object.setPrototypeOf || {
                    __proto__: []
                }instanceof Array && function(e, t) {
                    e.__proto__ = t
                }
                || function(e, t) {
                    for (var i in t)
                        t.hasOwnProperty(i) && (e[i] = t[i])
                }
                ;
                return function(t, i) {
                    function s() {
                        this.constructor = t
                    }
                    e(t, i),
                    t.prototype = null === i ? Object.create(i) : (s.prototype = i.prototype,
                    new s)
                }
            }();
            Object.defineProperty(t, "__esModule", {
                value: !0
            });
            var r = i("./src/events.js")
              , o = i("./src/event-handler.js")
              , n = i("./src/utils/logger.js")
              , a = window.performance
              , l = function(e) {
                function t(t) {
                    return e.call(this, t, r["default"].MEDIA_ATTACHING) || this
                }
                return s(t, e),
                t.prototype.destroy = function() {
                    this.timer && clearInterval(this.timer),
                    this.isVideoPlaybackQualityAvailable = !1
                }
                ,
                t.prototype.onMediaAttaching = function(e) {
                    var t = this.hls.config;
                    if (t.capLevelOnFPSDrop) {
                        "function" == typeof (this.video = e.media instanceof window.HTMLVideoElement ? e.media : null).getVideoPlaybackQuality && (this.isVideoPlaybackQualityAvailable = !0),
                        clearInterval(this.timer),
                        this.timer = setInterval(this.checkFPSInterval.bind(this), t.fpsDroppedMonitoringPeriod)
                    }
                }
                ,
                t.prototype.checkFPS = function(e, t, i) {
                    var s = a.now();
                    if (t) {
                        if (this.lastTime) {
                            var o = s - this.lastTime
                              , l = i - this.lastDroppedFrames
                              , d = t - this.lastDecodedFrames
                              , u = 1e3 * l / o
                              , h = this.hls;
                            if (h.trigger(r["default"].FPS_DROP, {
                                currentDropped: l,
                                currentDecoded: d,
                                totalDroppedFrames: i
                            }),
                            u > 0 && l > h.config.fpsDroppedMonitoringThreshold * d) {
                                var c = h.currentLevel;
                                n.logger.warn("drop FPS ratio greater than max allowed value for currentLevel: " + c),
                                c > 0 && (-1 === h.autoLevelCapping || h.autoLevelCapping >= c) && (c -= 1,
                                h.trigger(r["default"].FPS_DROP_LEVEL_CAPPING, {
                                    level: c,
                                    droppedLevel: h.currentLevel
                                }),
                                h.autoLevelCapping = c,
                                h.streamController.nextLevelSwitch())
                            }
                        }
                        this.lastTime = s,
                        this.lastDroppedFrames = i,
                        this.lastDecodedFrames = t
                    }
                }
                ,
                t.prototype.checkFPSInterval = function() {
                    var e = this.video;
                    if (e)
                        if (this.isVideoPlaybackQualityAvailable) {
                            var t = e.getVideoPlaybackQuality();
                            this.checkFPS(e, t.totalVideoFrames, t.droppedVideoFrames)
                        } else
                            this.checkFPS(e, e.webkitDecodedFrameCount, e.webkitDroppedFrameCount)
                }
                ,
                t
            }(o["default"]);
            t["default"] = l
        },
        "./src/controller/fragment-finders.js": function(e, t, i) {
            "use strict";
            (function(e) {
                function s(t, i, s) {
                    if (!Array.isArray(t) || !t.length || !e.isFinite(i))
                        return null;
                    if (i < t[0].programDateTime)
                        return null;
                    if (i >= t[t.length - 1].endProgramDateTime)
                        return null;
                    s = s || 0;
                    for (var r = 0; r < t.length; ++r) {
                        var o = t[r];
                        if (n(i, s, o))
                            return o
                    }
                    return null
                }
                function r(e, t, i, s) {
                    void 0 === i && (i = 0),
                    void 0 === s && (s = 0);
                    var r = e ? t[e.sn - t[0].sn + 1] : null;
                    return r && !o(i, s, r) ? r : a["default"].search(t, o.bind(null, i, s))
                }
                function o(e, t, i) {
                    void 0 === e && (e = 0),
                    void 0 === t && (t = 0);
                    var s = Math.min(t, i.duration + (i.deltaPTS ? i.deltaPTS : 0));
                    return i.start + i.duration - s <= e ? 1 : i.start - s > e && i.start ? -1 : 0
                }
                function n(e, t, i) {
                    var s = 1e3 * Math.min(t, i.duration + (i.deltaPTS ? i.deltaPTS : 0));
                    return i.endProgramDateTime - s > e
                }
                Object.defineProperty(t, "__esModule", {
                    value: !0
                });
                var a = i("./src/utils/binary-search.js");
                t.findFragmentByPDT = s,
                t.findFragmentByPTS = r,
                t.fragmentWithinToleranceTest = o,
                t.pdtWithinToleranceTest = n
            }
            ).call(this, i("./src/polyfills/number.js").Number)
        },
        "./src/controller/fragment-tracker.js": function(e, t, i) {
            "use strict";
            (function(e) {
                var s = this && this.__extends || function() {
                    var e = Object.setPrototypeOf || {
                        __proto__: []
                    }instanceof Array && function(e, t) {
                        e.__proto__ = t
                    }
                    || function(e, t) {
                        for (var i in t)
                            t.hasOwnProperty(i) && (e[i] = t[i])
                    }
                    ;
                    return function(t, i) {
                        function s() {
                            this.constructor = t
                        }
                        e(t, i),
                        t.prototype = null === i ? Object.create(i) : (s.prototype = i.prototype,
                        new s)
                    }
                }();
                Object.defineProperty(t, "__esModule", {
                    value: !0
                });
                var r = i("./src/event-handler.js")
                  , o = i("./src/events.js");
                t.FragmentState = {
                    NOT_LOADED: "NOT_LOADED",
                    APPENDING: "APPENDING",
                    PARTIAL: "PARTIAL",
                    OK: "OK"
                };
                var n = function(i) {
                    function n(e) {
                        var t = i.call(this, e, o["default"].BUFFER_APPENDED, o["default"].FRAG_BUFFERED, o["default"].FRAG_LOADED) || this;
                        return t.bufferPadding = .2,
                        t.fragments = Object.create(null),
                        t.timeRanges = Object.create(null),
                        t.config = e.config,
                        t
                    }
                    return s(n, i),
                    n.prototype.destroy = function() {
                        this.fragments = null,
                        this.timeRanges = null,
                        this.config = null,
                        r["default"].prototype.destroy.call(this),
                        i.prototype.destroy.call(this)
                    }
                    ,
                    n.prototype.getBufferedFrag = function(e, t) {
                        var i = this.fragments
                          , s = Object.keys(i).filter(function(s) {
                            var r = i[s];
                            if (r.body.type !== t)
                                return !1;
                            if (!r.buffered)
                                return !1;
                            var o = r.body;
                            return o.startPTS <= e && e <= o.endPTS
                        });
                        if (0 === s.length)
                            return null;
                        var r = s.pop();
                        return i[r].body
                    }
                    ,
                    n.prototype.detectEvictedFragments = function(e, t) {
                        var i, s, r = this;
                        Object.keys(this.fragments).forEach(function(o) {
                            var n = r.fragments[o];
                            if (!0 === n.buffered) {
                                var a = n.range[e];
                                if (a) {
                                    i = a.time;
                                    for (var l = 0; l < i.length; l++)
                                        if (s = i[l],
                                        !1 === r.isTimeBuffered(s.startPTS, s.endPTS, t)) {
                                            r.removeFragment(n.body);
                                            break
                                        }
                                }
                            }
                        })
                    }
                    ,
                    n.prototype.detectPartialFragments = function(e) {
                        var t = this
                          , i = this.getFragmentKey(e)
                          , s = this.fragments[i];
                        s && (s.buffered = !0,
                        Object.keys(this.timeRanges).forEach(function(i) {
                            if (e.hasElementaryStream(i)) {
                                var r = t.timeRanges[i];
                                s.range[i] = t.getBufferedTimes(e.startPTS, e.endPTS, r)
                            }
                        }))
                    }
                    ,
                    n.prototype.getBufferedTimes = function(e, t, i) {
                        for (var s, r, o = [], n = !1, a = 0; a < i.length; a++) {
                            if (s = i.start(a) - this.bufferPadding,
                            r = i.end(a) + this.bufferPadding,
                            e >= s && t <= r) {
                                o.push({
                                    startPTS: Math.max(e, i.start(a)),
                                    endPTS: Math.min(t, i.end(a))
                                });
                                break
                            }
                            if (e < r && t > s)
                                o.push({
                                    startPTS: Math.max(e, i.start(a)),
                                    endPTS: Math.min(t, i.end(a))
                                }),
                                n = !0;
                            else if (t <= s)
                                break
                        }
                        return {
                            time: o,
                            partial: n
                        }
                    }
                    ,
                    n.prototype.getFragmentKey = function(e) {
                        return e.type + "_" + e.level + "_" + e.urlId + "_" + e.sn
                    }
                    ,
                    n.prototype.getPartialFragment = function(e) {
                        var t, i, s, r = this, o = null, n = 0;
                        return Object.keys(this.fragments).forEach(function(a) {
                            var l = r.fragments[a];
                            r.isPartial(l) && (i = l.body.startPTS - r.bufferPadding,
                            s = l.body.endPTS + r.bufferPadding,
                            e >= i && e <= s && (t = Math.min(e - i, s - e),
                            n <= t && (o = l.body,
                            n = t)))
                        }),
                        o
                    }
                    ,
                    n.prototype.getState = function(e) {
                        var i = this.getFragmentKey(e)
                          , s = this.fragments[i]
                          , r = t.FragmentState.NOT_LOADED;
                        return s !== undefined && (r = s.buffered ? !0 === this.isPartial(s) ? t.FragmentState.PARTIAL : t.FragmentState.OK : t.FragmentState.APPENDING),
                        r
                    }
                    ,
                    n.prototype.isPartial = function(e) {
                        return !0 === e.buffered && (e.range.video !== undefined && !0 === e.range.video.partial || e.range.audio !== undefined && !0 === e.range.audio.partial)
                    }
                    ,
                    n.prototype.isTimeBuffered = function(e, t, i) {
                        for (var s, r, o = 0; o < i.length; o++) {
                            if (s = i.start(o) - this.bufferPadding,
                            r = i.end(o) + this.bufferPadding,
                            e >= s && t <= r)
                                return !0;
                            if (t <= s)
                                return !1
                        }
                        return !1
                    }
                    ,
                    n.prototype.onFragLoaded = function(t) {
                        var i = t.frag;
                        e.isFinite(i.sn) && !i.bitrateTest && (this.fragments[this.getFragmentKey(i)] = {
                            body: i,
                            range: Object.create(null),
                            buffered: !1
                        })
                    }
                    ,
                    n.prototype.onBufferAppended = function(e) {
                        var t = this;
                        this.timeRanges = e.timeRanges,
                        Object.keys(this.timeRanges).forEach(function(e) {
                            var i = t.timeRanges[e];
                            t.detectEvictedFragments(e, i)
                        })
                    }
                    ,
                    n.prototype.onFragBuffered = function(e) {
                        this.detectPartialFragments(e.frag)
                    }
                    ,
                    n.prototype.hasFragment = function(e) {
                        var t = this.getFragmentKey(e);
                        return this.fragments[t] !== undefined
                    }
                    ,
                    n.prototype.removeFragment = function(e) {
                        var t = this.getFragmentKey(e);
                        delete this.fragments[t]
                    }
                    ,
                    n.prototype.removeAllFragments = function() {
                        this.fragments = Object.create(null)
                    }
                    ,
                    n
                }(r["default"]);
                t.FragmentTracker = n
            }
            ).call(this, i("./src/polyfills/number.js").Number)
        },
        "./src/controller/gap-controller.js": function(e, t, i) {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            });
            var s = i("./src/utils/buffer-helper.js")
              , r = i("./src/errors.js")
              , o = i("./src/events.js")
              , n = i("./src/utils/logger.js")
              , a = function() {
                function e(e, t, i, s) {
                    this.config = e,
                    this.media = t,
                    this.fragmentTracker = i,
                    this.hls = s,
                    this.stallReported = !1
                }
                return e.prototype.poll = function(e, t) {
                    var i = this
                      , r = i.config
                      , o = i.media
                      , a = o.currentTime
                      , l = window.performance.now();
                    if (a !== e)
                        return this.stallReported && (n.logger.warn("playback not stuck anymore @" + a + ", after " + Math.round(l - this._stalledTime) + "ms"),
                        this.stallReported = !1),
                        this._stalledTime = null,
                        void (this.nudgeRetry = 0);
                    if (!(o.ended || !o.buffered.length || o.readyState > 2 || o.seeking && s.BufferHelper.isBuffered(o, a))) {
                        var d = l - this._stalledTime
                          , u = s.BufferHelper.bufferInfo(o, a, r.maxBufferHole);
                        if (!this._stalledTime)
                            return void (this._stalledTime = l);
                        d >= 1e3 && this._reportStall(u.len),
                        this._tryFixBufferStall(u, d)
                    }
                }
                ,
                e.prototype._tryFixBufferStall = function(e, t) {
                    var i = this
                      , s = i.config
                      , r = i.fragmentTracker
                      , o = i.media
                      , n = o.currentTime
                      , a = r.getPartialFragment(n);
                    a && this._trySkipBufferHole(a),
                    e.len > .5 && t > 1e3 * s.highBufferWatchdogPeriod && (this._stalledTime = null,
                    this._tryNudgeBuffer())
                }
                ,
                e.prototype._reportStall = function(e) {
                    var t = this
                      , i = t.hls
                      , s = t.media;
                    t.stallReported || (this.stallReported = !0,
                    n.logger.warn("Playback stalling at @" + s.currentTime + " due to low buffer"),
                    i.trigger(o["default"].ERROR, {
                        type: r.ErrorTypes.MEDIA_ERROR,
                        details: r.ErrorDetails.BUFFER_STALLED_ERROR,
                        fatal: !1,
                        buffer: e
                    }))
                }
                ,
                e.prototype._trySkipBufferHole = function(e) {
                    for (var t = this, i = t.hls, s = t.media, a = s.currentTime, l = 0, d = 0; d < s.buffered.length; d++) {
                        var u = s.buffered.start(d);
                        if (a >= l && a < u)
                            return s.currentTime = Math.max(u, s.currentTime + .1),
                            n.logger.warn("skipping hole, adjusting currentTime from " + a + " to " + s.currentTime),
                            this._stalledTime = null,
                            void i.trigger(o["default"].ERROR, {
                                type: r.ErrorTypes.MEDIA_ERROR,
                                details: r.ErrorDetails.BUFFER_SEEK_OVER_HOLE,
                                fatal: !1,
                                reason: "fragment loaded with buffer holes, seeking from " + a + " to " + s.currentTime,
                                frag: e
                            });
                        l = s.buffered.end(d)
                    }
                }
                ,
                e.prototype._tryNudgeBuffer = function() {
                    var e = this
                      , t = e.config
                      , i = e.hls
                      , s = e.media
                      , a = s.currentTime
                      , l = (this.nudgeRetry || 0) + 1;
                    if (this.nudgeRetry = l,
                    l < t.nudgeMaxRetry) {
                        var d = a + l * t.nudgeOffset;
                        n.logger.log("adjust currentTime from " + a + " to " + d),
                        s.currentTime = d,
                        i.trigger(o["default"].ERROR, {
                            type: r.ErrorTypes.MEDIA_ERROR,
                            details: r.ErrorDetails.BUFFER_NUDGE_ON_STALL,
                            fatal: !1
                        })
                    } else
                        n.logger.error("still stuck in high buffer @" + a + " after " + t.nudgeMaxRetry + ", raise fatal error"),
                        i.trigger(o["default"].ERROR, {
                            type: r.ErrorTypes.MEDIA_ERROR,
                            details: r.ErrorDetails.BUFFER_STALLED_ERROR,
                            fatal: !0
                        })
                }
                ,
                e
            }();
            t["default"] = a
        },
        "./src/controller/id3-track-controller.js": function(e, t, i) {
            "use strict";
            var s = this && this.__extends || function() {
                var e = Object.setPrototypeOf || {
                    __proto__: []
                }instanceof Array && function(e, t) {
                    e.__proto__ = t
                }
                || function(e, t) {
                    for (var i in t)
                        t.hasOwnProperty(i) && (e[i] = t[i])
                }
                ;
                return function(t, i) {
                    function s() {
                        this.constructor = t
                    }
                    e(t, i),
                    t.prototype = null === i ? Object.create(i) : (s.prototype = i.prototype,
                    new s)
                }
            }();
            Object.defineProperty(t, "__esModule", {
                value: !0
            });
            var r = i("./src/events.js")
              , o = i("./src/event-handler.js")
              , n = i("./src/demux/id3.js")
              , a = i("./src/utils/texttrack-utils.js")
              , l = function(e) {
                function t(t) {
                    var i = e.call(this, t, r["default"].MEDIA_ATTACHED, r["default"].MEDIA_DETACHING, r["default"].FRAG_PARSING_METADATA) || this;
                    return i.id3Track = undefined,
                    i.media = undefined,
                    i
                }
                return s(t, e),
                t.prototype.destroy = function() {
                    o["default"].prototype.destroy.call(this)
                }
                ,
                t.prototype.onMediaAttached = function(e) {
                    this.media = e.media,
                    this.media
                }
                ,
                t.prototype.onMediaDetaching = function() {
                    a.clearCurrentCues(this.id3Track),
                    this.id3Track = undefined,
                    this.media = undefined
                }
                ,
                t.prototype.getID3Track = function(e) {
                    for (var t = 0; t < e.length; t++) {
                        var i = e[t];
                        if ("metadata" === i.kind && "id3" === i.label)
                            return a.sendAddTrackEvent(i, this.media),
                            i
                    }
                    return this.media.addTextTrack("metadata", "id3")
                }
                ,
                t.prototype.onFragParsingMetadata = function(e) {
                    var t = e.frag
                      , i = e.samples;
                    this.id3Track || (this.id3Track = this.getID3Track(this.media.textTracks),
                    this.id3Track.mode = "hidden");
                    for (var s = window.WebKitDataCue || window.VTTCue || window.TextTrackCue, r = 0; r < i.length; r++) {
                        var o = n["default"].getID3Frames(i[r].data);
                        if (o) {
                            var a = i[r].pts
                              , l = r < i.length - 1 ? i[r + 1].pts : t.endPTS;
                            a === l && (l += 1e-4);
                            for (var d = 0; d < o.length; d++) {
                                var u = o[d];
                                if (!n["default"].isTimeStampFrame(u)) {
                                    var h = new s(a,l,"");
                                    h.value = u,
                                    this.id3Track.addCue(h)
                                }
                            }
                        }
                    }
                }
                ,
                t
            }(o["default"]);
            t["default"] = l
        },
        "./src/controller/level-controller.js": function(e, t, i) {
            "use strict";
            var s = this && this.__extends || function() {
                var e = Object.setPrototypeOf || {
                    __proto__: []
                }instanceof Array && function(e, t) {
                    e.__proto__ = t
                }
                || function(e, t) {
                    for (var i in t)
                        t.hasOwnProperty(i) && (e[i] = t[i])
                }
                ;
                return function(t, i) {
                    function s() {
                        this.constructor = t
                    }
                    e(t, i),
                    t.prototype = null === i ? Object.create(i) : (s.prototype = i.prototype,
                    new s)
                }
            }();
            Object.defineProperty(t, "__esModule", {
                value: !0
            });
            var r = i("./src/events.js")
              , o = i("./src/event-handler.js")
              , n = i("./src/utils/logger.js")
              , a = i("./src/errors.js")
              , l = i("./src/utils/codecs.js")
              , d = i("./src/controller/level-helper.js")
              , u = window.performance
              , h = function(e) {
                function t(t) {
                    var i = e.call(this, t, r["default"].MANIFEST_LOADED, r["default"].LEVEL_LOADED, r["default"].AUDIO_TRACK_SWITCHED, r["default"].FRAG_LOADED, r["default"].ERROR) || this;
                    return i.canload = !1,
                    i.currentLevelIndex = null,
                    i.manualLevelIndex = -1,
                    i.timer = null,
                    i
                }
                return s(t, e),
                t.prototype.onHandlerDestroying = function() {
                    this.clearTimer(),
                    this.manualLevelIndex = -1
                }
                ,
                t.prototype.clearTimer = function() {
                    null !== this.timer && (clearTimeout(this.timer),
                    this.timer = null)
                }
                ,
                t.prototype.startLoad = function() {
                    var e = this._levels;
                    this.canload = !0,
                    this.levelRetryCount = 0,
                    e && e.forEach(function(e) {
                        e.loadError = 0;
                        var t = e.details;
                        t && t.live && (e.details = undefined)
                    }),
                    null !== this.timer && this.loadLevel()
                }
                ,
                t.prototype.stopLoad = function() {
                    this.canload = !1
                }
                ,
                t.prototype.onManifestLoaded = function(e) {
                    var t, i = [], s = {}, o = null, u = !1, h = !1, c = /chrome|firefox/.test(navigator.userAgent.toLowerCase()), f = [];
                    if (e.levels.forEach(function(e) {
                        e.loadError = 0,
                        e.fragmentError = !1,
                        u = u || !!e.videoCodec,
                        h = h || !!e.audioCodec || !(!e.attrs || !e.attrs.AUDIO),
                        c && e.audioCodec && -1 !== e.audioCodec.indexOf("mp4a.40.34") && (e.audioCodec = undefined),
                        o = s[e.bitrate],
                        o ? o.url.push(e.url) : (e.url = [e.url],
                        e.urlId = 0,
                        s[e.bitrate] = e,
                        i.push(e)),
                        e.attrs && e.attrs.AUDIO && d.addGroupId(o || e, "audio", e.attrs.AUDIO),
                        e.attrs && e.attrs.SUBTITLES && d.addGroupId(o || e, "text", e.attrs.SUBTITLES)
                    }),
                    u && h && (i = i.filter(function(e) {
                        return !!e.videoCodec
                    })),
                    i = i.filter(function(e) {
                        var t = e.audioCodec
                          , i = e.videoCodec;
                        return (!t || l.isCodecSupportedInMp4(t)) && (!i || l.isCodecSupportedInMp4(i))
                    }),
                    e.audioTracks && (f = e.audioTracks.filter(function(e) {
                        return !e.audioCodec || l.isCodecSupportedInMp4(e.audioCodec, "audio")
                    }),
                    f.forEach(function(e, t) {
                        e.id = t
                    })),
                    i.length > 0) {
                        t = i[0].bitrate,
                        i.sort(function(e, t) {
                            return e.bitrate - t.bitrate
                        }),
                        this._levels = i;
                        for (var p = 0; p < i.length; p++)
                            if (i[p].bitrate === t) {
                                this._firstLevel = p,
                                n.logger.log("manifest loaded," + i.length + " level(s) found, first bitrate:" + t);
                                break
                            }
                        this.hls.trigger(r["default"].MANIFEST_PARSED, {
                            levels: i,
                            audioTracks: f,
                            firstLevel: this._firstLevel,
                            stats: e.stats,
                            audio: h,
                            video: u,
                            altAudio: f.length > 0 && u
                        })
                    } else
                        this.hls.trigger(r["default"].ERROR, {
                            type: a.ErrorTypes.MEDIA_ERROR,
                            details: a.ErrorDetails.MANIFEST_INCOMPATIBLE_CODECS_ERROR,
                            fatal: !0,
                            url: this.hls.url,
                            reason: "no level with compatible codecs found in manifest"
                        })
                }
                ,
                Object.defineProperty(t.prototype, "levels", {
                    get: function() {
                        return this._levels
                    },
                    enumerable: !0,
                    configurable: !0
                }),
                Object.defineProperty(t.prototype, "level", {
                    get: function() {
                        return this.currentLevelIndex
                    },
                    set: function(e) {
                        var t = this._levels;
                        t && (e = Math.min(e, t.length - 1),
                        this.currentLevelIndex === e && t[e].details || this.setLevelInternal(e))
                    },
                    enumerable: !0,
                    configurable: !0
                }),
                t.prototype.setLevelInternal = function(e) {
                    var t = this._levels
                      , i = this.hls;
                    if (e >= 0 && e < t.length) {
                        if (this.clearTimer(),
                        this.currentLevelIndex !== e) {
                            n.logger.log("switching to level " + e),
                            this.currentLevelIndex = e;
                            var s = t[e];
                            s.level = e,
                            i.trigger(r["default"].LEVEL_SWITCHING, s)
                        }
                        var o = t[e]
                          , l = o.details;
                        if (!l || l.live) {
                            var d = o.urlId;
                            i.trigger(r["default"].LEVEL_LOADING, {
                                url: o.url[d],
                                level: e,
                                id: d
                            })
                        }
                    } else
                        i.trigger(r["default"].ERROR, {
                            type: a.ErrorTypes.OTHER_ERROR,
                            details: a.ErrorDetails.LEVEL_SWITCH_ERROR,
                            level: e,
                            fatal: !1,
                            reason: "invalid level idx"
                        })
                }
                ,
                Object.defineProperty(t.prototype, "manualLevel", {
                    get: function() {
                        return this.manualLevelIndex
                    },
                    set: function(e) {
                        this.manualLevelIndex = e,
                        this._startLevel === undefined && (this._startLevel = e),
                        -1 !== e && (this.level = e)
                    },
                    enumerable: !0,
                    configurable: !0
                }),
                Object.defineProperty(t.prototype, "firstLevel", {
                    get: function() {
                        return this._firstLevel
                    },
                    set: function(e) {
                        this._firstLevel = e
                    },
                    enumerable: !0,
                    configurable: !0
                }),
                Object.defineProperty(t.prototype, "startLevel", {
                    get: function() {
                        if (this._startLevel === undefined) {
                            var e = this.hls.config.startLevel;
                            return e !== undefined ? e : this._firstLevel
                        }
                        return this._startLevel
                    },
                    set: function(e) {
                        this._startLevel = e
                    },
                    enumerable: !0,
                    configurable: !0
                }),
                t.prototype.onError = function(e) {
                    if (e.fatal)
                        return void (e.type === a.ErrorTypes.NETWORK_ERROR && this.clearTimer());
                    var t, i = !1, s = !1;
                    switch (e.details) {
                    case a.ErrorDetails.FRAG_LOAD_ERROR:
                    case a.ErrorDetails.FRAG_LOAD_TIMEOUT:
                    case a.ErrorDetails.KEY_LOAD_ERROR:
                    case a.ErrorDetails.KEY_LOAD_TIMEOUT:
                        t = e.frag.level,
                        s = !0;
                        break;
                    case a.ErrorDetails.LEVEL_LOAD_ERROR:
                    case a.ErrorDetails.LEVEL_LOAD_TIMEOUT:
                        t = e.context.level,
                        i = !0;
                        break;
                    case a.ErrorDetails.REMUX_ALLOC_ERROR:
                        t = e.level,
                        i = !0
                    }
                    t !== undefined && this.recoverLevel(e, t, i, s)
                }
                ,
                t.prototype.recoverLevel = function(e, t, i, s) {
                    var r, o, a, l = this, d = this.hls.config, u = e.details, h = this._levels[t];
                    if (h.loadError++,
                    h.fragmentError = s,
                    i) {
                        if (!(this.levelRetryCount + 1 <= d.levelLoadingMaxRetry))
                            return n.logger.error("level controller, cannot recover from " + u + " error"),
                            this.currentLevelIndex = null,
                            this.clearTimer(),
                            void (e.fatal = !0);
                        o = Math.min(Math.pow(2, this.levelRetryCount) * d.levelLoadingRetryDelay, d.levelLoadingMaxRetryTimeout),
                        this.timer = setTimeout(function() {
                            return l.loadLevel()
                        }, o),
                        e.levelRetry = !0,
                        this.levelRetryCount++,
                        n.logger.warn("level controller, " + u + ", retry in " + o + " ms, current retry count is " + this.levelRetryCount)
                    }
                    (i || s) && (r = h.url.length,
                    r > 1 && h.loadError < r ? (h.urlId = (h.urlId + 1) % r,
                    h.details = undefined,
                    n.logger.warn("level controller, " + u + " for level " + t + ": switching to redundant URL-id " + h.urlId)) : -1 === this.manualLevelIndex ? (a = 0 === t ? this._levels.length - 1 : t - 1,
                    n.logger.warn("level controller, " + u + ": switch to " + a),
                    this.hls.nextAutoLevel = this.currentLevelIndex = a) : s && (n.logger.warn("level controller, " + u + ": reload a fragment"),
                    this.currentLevelIndex = null))
                }
                ,
                t.prototype.onFragLoaded = function(e) {
                    var t = e.frag;
                    if (t !== undefined && "main" === t.type) {
                        var i = this._levels[t.level];
                        i !== undefined && (i.fragmentError = !1,
                        i.loadError = 0,
                        this.levelRetryCount = 0)
                    }
                }
                ,
                t.prototype.onLevelLoaded = function(e) {
                    var t = this
                      , i = e.level;
                    if (i === this.currentLevelIndex) {
                        var s = this._levels[i];
                        s.fragmentError || (s.loadError = 0,
                        this.levelRetryCount = 0);
                        var r = e.details;
                        if (r.live) {
                            var o = 1e3 * (r.averagetargetduration ? r.averagetargetduration : r.targetduration)
                              , a = o
                              , l = s.details;
                            l && r.endSN === l.endSN && (a /= 2,
                            n.logger.log("same live playlist, reload twice faster")),
                            a -= u.now() - e.stats.trequest,
                            a = Math.max(o / 2, Math.round(a)),
                            n.logger.log("live playlist, reload in " + Math.round(a) + " ms"),
                            this.timer = setTimeout(function() {
                                return t.loadLevel()
                            }, a)
                        } else
                            this.clearTimer()
                    }
                }
                ,
                t.prototype.onAudioTrackSwitched = function(e) {
                    var t = this.hls.audioTracks[e.id].groupId
                      , i = this.hls.levels[this.currentLevelIndex];
                    if (i && i.audioGroupIds) {
                        var s = i.audioGroupIds.findIndex(function(e) {
                            return e === t
                        });
                        s !== i.urlId && (i.urlId = s,
                        this.startLoad())
                    }
                }
                ,
                t.prototype.loadLevel = function() {
                    if (n.logger.debug("call to loadLevel"),
                    null !== this.currentLevelIndex && this.canload) {
                        var e = this._levels[this.currentLevelIndex];
                        if ("object" == typeof e && e.url.length > 0) {
                            var t = this.currentLevelIndex
                              , i = e.urlId
                              , s = e.url[i];
                            n.logger.log("Attempt loading level index " + t + " with URL-id " + i),
                            this.hls.trigger(r["default"].LEVEL_LOADING, {
                                url: s,
                                level: t,
                                id: i
                            })
                        }
                    }
                }
                ,
                Object.defineProperty(t.prototype, "nextLoadLevel", {
                    get: function() {
                        return -1 !== this.manualLevelIndex ? this.manualLevelIndex : this.hls.nextAutoLevel
                    },
                    set: function(e) {
                        this.level = e,
                        -1 === this.manualLevelIndex && (this.hls.nextAutoLevel = e)
                    },
                    enumerable: !0,
                    configurable: !0
                }),
                t
            }(o["default"]);
            t["default"] = h
        },
        "./src/controller/level-helper.js": function(e, t, i) {
            "use strict";
            (function(e) {
                function s(e, t, i) {
                    switch (t) {
                    case "audio":
                        e.audioGroupIds || (e.audioGroupIds = []),
                        e.audioGroupIds.push(i);
                        break;
                    case "text":
                        e.textGroupIds || (e.textGroupIds = []),
                        e.textGroupIds.push(i)
                    }
                }
                function r(t, i, s) {
                    var r = t[i]
                      , o = t[s]
                      , n = o.startPTS;
                    e.isFinite(n) ? s > i ? (r.duration = n - r.start,
                    r.duration < 0 && a.logger.warn("negative duration computed for frag " + r.sn + ",level " + r.level + ", there should be some duration drift between playlist and fragment!")) : (o.duration = r.start - n,
                    o.duration < 0 && a.logger.warn("negative duration computed for frag " + o.sn + ",level " + o.level + ", there should be some duration drift between playlist and fragment!")) : o.start = s > i ? r.start + r.duration : Math.max(r.start - o.duration, 0)
                }
                function o(t, i, s, o, n, a) {
                    var l = s;
                    if (e.isFinite(i.startPTS)) {
                        var d = Math.abs(i.startPTS - s);
                        e.isFinite(i.deltaPTS) ? i.deltaPTS = Math.max(d, i.deltaPTS) : i.deltaPTS = d,
                        l = Math.max(s, i.startPTS),
                        s = Math.min(s, i.startPTS),
                        o = Math.max(o, i.endPTS),
                        n = Math.min(n, i.startDTS),
                        a = Math.max(a, i.endDTS)
                    }
                    var u = s - i.start;
                    i.start = i.startPTS = s,
                    i.maxStartPTS = l,
                    i.endPTS = o,
                    i.startDTS = n,
                    i.endDTS = a,
                    i.duration = o - s;
                    var h = i.sn;
                    if (!t || h < t.startSN || h > t.endSN)
                        return 0;
                    var c, f, p;
                    for (c = h - t.startSN,
                    f = t.fragments,
                    f[c] = i,
                    p = c; p > 0; p--)
                        r(f, p, p - 1);
                    for (p = c; p < f.length - 1; p++)
                        r(f, p, p + 1);
                    return t.PTSKnown = !0,
                    u
                }
                function n(t, i) {
                    var s, r = Math.max(t.startSN, i.startSN) - i.startSN, n = Math.min(t.endSN, i.endSN) - i.startSN, l = i.startSN - t.startSN, d = t.fragments, u = i.fragments, h = 0;
                    if (i.initSegment && t.initSegment && (i.initSegment = t.initSegment),
                    n < r)
                        return void (i.PTSKnown = !1);
                    for (var c = r; c <= n; c++) {
                        var f = d[l + c]
                          , p = u[c];
                        p && f && (h = f.cc - p.cc,
                        e.isFinite(f.startPTS) && (p.start = p.startPTS = f.startPTS,
                        p.endPTS = f.endPTS,
                        p.duration = f.duration,
                        p.backtracked = f.backtracked,
                        p.dropped = f.dropped,
                        s = p))
                    }
                    if (h)
                        for (a.logger.log("discontinuity sliding from playlist, take drift into account"),
                        c = 0; c < u.length; c++)
                            u[c].cc += h;
                    if (s)
                        o(i, s, s.startPTS, s.endPTS, s.startDTS, s.endDTS);
                    else if (l >= 0 && l < d.length) {
                        var v = d[l].start;
                        for (c = 0; c < u.length; c++)
                            u[c].start += v
                    }
                    i.PTSKnown = t.PTSKnown
                }
                Object.defineProperty(t, "__esModule", {
                    value: !0
                });
                var a = i("./src/utils/logger.js");
                t.addGroupId = s,
                t.updatePTS = r,
                t.updateFragPTSDTS = o,
                t.mergeDetails = n
            }
            ).call(this, i("./src/polyfills/number.js").Number)
        },
        "./src/controller/stream-controller.js": function(e, t, i) {
            "use strict";
            (function(e) {
                var s = this && this.__extends || function() {
                    var e = Object.setPrototypeOf || {
                        __proto__: []
                    }instanceof Array && function(e, t) {
                        e.__proto__ = t
                    }
                    || function(e, t) {
                        for (var i in t)
                            t.hasOwnProperty(i) && (e[i] = t[i])
                    }
                    ;
                    return function(t, i) {
                        function s() {
                            this.constructor = t
                        }
                        e(t, i),
                        t.prototype = null === i ? Object.create(i) : (s.prototype = i.prototype,
                        new s)
                    }
                }();
                Object.defineProperty(t, "__esModule", {
                    value: !0
                });
                var r = i("./src/utils/binary-search.js")
                  , o = i("./src/utils/buffer-helper.js")
                  , n = i("./src/demux/demuxer.js")
                  , a = i("./src/events.js")
                  , l = i("./src/controller/fragment-tracker.js")
                  , d = i("./src/loader/fragment.js")
                  , u = i("./src/loader/playlist-loader.js")
                  , h = i("./src/controller/level-helper.js")
                  , c = i("./src/utils/time-ranges.js")
                  , f = i("./src/errors.js")
                  , p = i("./src/utils/logger.js")
                  , v = i("./src/utils/discontinuities.js")
                  , g = i("./src/task-loop.js")
                  , y = i("./src/controller/fragment-finders.js")
                  , m = i("./src/controller/gap-controller.js");
                t.State = {
                    STOPPED: "STOPPED",
                    IDLE: "IDLE",
                    KEY_LOADING: "KEY_LOADING",
                    FRAG_LOADING: "FRAG_LOADING",
                    FRAG_LOADING_WAITING_RETRY: "FRAG_LOADING_WAITING_RETRY",
                    WAITING_LEVEL: "WAITING_LEVEL",
                    PARSING: "PARSING",
                    PARSED: "PARSED",
                    BUFFER_FLUSHING: "BUFFER_FLUSHING",
                    ENDED: "ENDED",
                    ERROR: "ERROR"
                };
                var _ = function(i) {
                    function g(e, s) {
                        var r = i.call(this, e, a["default"].MEDIA_ATTACHED, a["default"].MEDIA_DETACHING, a["default"].MANIFEST_LOADING, a["default"].MANIFEST_PARSED, a["default"].LEVEL_LOADED, a["default"].KEY_LOADED, a["default"].FRAG_LOADED, a["default"].FRAG_LOAD_EMERGENCY_ABORTED, a["default"].FRAG_PARSING_INIT_SEGMENT, a["default"].FRAG_PARSING_DATA, a["default"].FRAG_PARSED, a["default"].ERROR, a["default"].AUDIO_TRACK_SWITCHING, a["default"].AUDIO_TRACK_SWITCHED, a["default"].BUFFER_CREATED, a["default"].BUFFER_APPENDED, a["default"].BUFFER_FLUSHED) || this;
                        return r.fragmentTracker = s,
                        r.config = e.config,
                        r.audioCodecSwap = !1,
                        r._state = t.State.STOPPED,
                        r.stallReported = !1,
                        r.gapController = null,
                        r
                    }
                    return s(g, i),
                    g.prototype.onHandlerDestroying = function() {
                        this.stopLoad(),
                        i.prototype.onHandlerDestroying.call(this)
                    }
                    ,
                    g.prototype.onHandlerDestroyed = function() {
                        this.state = t.State.STOPPED,
                        this.fragmentTracker = null,
                        i.prototype.onHandlerDestroyed.call(this)
                    }
                    ,
                    g.prototype.startLoad = function(e) {
                        if (this.levels) {
                            var i = this.lastCurrentTime
                              , s = this.hls;
                            if (this.stopLoad(),
                            this.setInterval(100),
                            this.level = -1,
                            this.fragLoadError = 0,
                            !this.startFragRequested) {
                                var r = s.startLevel;
                                -1 === r && (r = 0,
                                this.bitrateTest = !0),
                                this.level = s.nextLoadLevel = r,
                                this.loadedmetadata = !1
                            }
                            i > 0 && -1 === e && (p.logger.log("override startPosition with lastCurrentTime @" + i.toFixed(3)),
                            e = i),
                            this.state = t.State.IDLE,
                            this.nextLoadPosition = this.startPosition = this.lastCurrentTime = e,
                            this.tick()
                        } else
                            this.forceStartLoad = !0,
                            this.state = t.State.STOPPED
                    }
                    ,
                    g.prototype.stopLoad = function() {
                        var e = this.fragCurrent;
                        e && (e.loader && e.loader.abort(),
                        this.fragmentTracker.removeFragment(e),
                        this.fragCurrent = null),
                        this.fragPrevious = null,
                        this.demuxer && (this.demuxer.destroy(),
                        this.demuxer = null),
                        this.clearInterval(),
                        this.state = t.State.STOPPED,
                        this.forceStartLoad = !1
                    }
                    ,
                    g.prototype.doTick = function() {
                        switch (this.state) {
                        case t.State.BUFFER_FLUSHING:
                            this.fragLoadError = 0;
                            break;
                        case t.State.IDLE:
                            this._doTickIdle();
                            break;
                        case t.State.WAITING_LEVEL:
                            var e = this.levels[this.level];
                            e && e.details && (this.state = t.State.IDLE);
                            break;
                        case t.State.FRAG_LOADING_WAITING_RETRY:
                            var i = window.performance.now()
                              , s = this.retryDate;
                            (!s || i >= s || this.media && this.media.seeking) && (p.logger.log("mediaController: retryDate reached, switch back to IDLE state"),
                            this.state = t.State.IDLE);
                            break;
                        case t.State.ERROR:
                        case t.State.STOPPED:
                        case t.State.FRAG_LOADING:
                        case t.State.PARSING:
                        case t.State.PARSED:
                        case t.State.ENDED:
                        }
                        this._checkBuffer(),
                        this._checkFragmentChanged()
                    }
                    ,
                    g.prototype._doTickIdle = function() {
                        var e = this.hls
                          , i = e.config
                          , s = this.media;
                        if (this.levelLastLoaded !== undefined && (s || !this.startFragRequested && i.startFragPrefetch)) {
                            var r;
                            r = this.loadedmetadata ? s.currentTime : this.nextLoadPosition;
                            var n = e.nextLoadLevel
                              , l = this.levels[n];
                            if (l) {
                                var d, u = l.bitrate;
                                d = u ? Math.max(8 * i.maxBufferSize / u, i.maxBufferLength) : i.maxBufferLength,
                                d = Math.min(d, i.maxMaxBufferLength);
                                var h = o.BufferHelper.bufferInfo(this.mediaBuffer ? this.mediaBuffer : s, r, i.maxBufferHole)
                                  , c = h.len;
                                if (!(c >= d)) {
                                    p.logger.trace("buffer length of " + c.toFixed(3) + " is below max of " + d.toFixed(3) + ". checking for more payload ..."),
                                    this.level = e.nextLoadLevel = n;
                                    var f = l.details;
                                    if (!f || f.live && this.levelLastLoaded !== n)
                                        return void (this.state = t.State.WAITING_LEVEL);
                                    var v = this.fragPrevious;
                                    if (!f.live && v && !v.backtracked && v.sn === f.endSN && !h.nextStart) {
                                        if (Math.min(s.duration, v.start + v.duration) - Math.max(h.end, v.start) <= Math.max(.2, v.duration)) {
                                            var g = {};
                                            return this.altAudio && (g.type = "video"),
                                            this.hls.trigger(a["default"].BUFFER_EOS, g),
                                            void (this.state = t.State.ENDED)
                                        }
                                    }
                                    this._fetchPayloadOrEos(r, h, f)
                                }
                            }
                        }
                    }
                    ,
                    g.prototype._fetchPayloadOrEos = function(e, t, i) {
                        var s = this.fragPrevious
                          , r = this.level
                          , o = i.fragments
                          , n = o.length;
                        if (0 !== n) {
                            var a, l = o[0].start, d = o[n - 1].start + o[n - 1].duration, u = t.end;
                            if (i.initSegment && !i.initSegment.data)
                                a = i.initSegment;
                            else if (i.live) {
                                var h = this.config.initialLiveManifestSize;
                                if (n < h)
                                    return void p.logger.warn("Can not start playback of a level, reason: not enough fragments " + n + " < " + h);
                                if (null === (a = this._ensureFragmentAtLivePoint(i, u, l, d, s, o, n)))
                                    return
                            } else
                                u < l && (a = o[0]);
                            if (!a) {
                                var c = void 0;
                                c = u,
                                p.logger.debug("stream-controller: _findFragment at " + c + ",\n          buffer-end " + u + ", position " + e, s),
                                a = this._findFragment(s, o, c, d, i)
                            }
                            a && (p.logger.log("Found fragment:", a),
                            a.encrypted ? (p.logger.log("Loading key for " + a.sn + " of [" + i.startSN + " ," + i.endSN + "],level " + r),
                            this._loadKey(a)) : (p.logger.log("Loading " + a.sn + " of [" + i.startSN + " ," + i.endSN + "],level " + r + ", currentTime:" + e.toFixed(3) + ", bufferEnd:" + u.toFixed(3)),
                            this._loadFragment(a)))
                        }
                    }
                    ,
                    g.prototype._ensureFragmentAtLivePoint = function(e, t, i, s, o, n, a) {
                        var l, d = this.hls.config, u = this.media, h = d.liveMaxLatencyDuration !== undefined ? d.liveMaxLatencyDuration : d.liveMaxLatencyDurationCount * e.targetduration;
                        if (t < Math.max(i - d.maxFragLookUpTolerance, s - h)) {
                            var c = this.liveSyncPosition = this.computeLivePosition(i, e);
                            p.logger.log("buffer end: " + t.toFixed(3) + " is located too far from the end of live sliding playlist, reset currentTime to : " + c.toFixed(3)),
                            t = c,
                            u && u.readyState && u.duration > c && (u.currentTime = c),
                            this.nextLoadPosition = c
                        }
                        if (e.PTSKnown && t > s && u && u.readyState)
                            return null;
                        if (this.startFragRequested && !e.PTSKnown) {
                            if (o)
                                if (e.hasProgramDateTime)
                                    p.logger.log("live playlist, switching playlist, load frag with same PDT: " + o.programDateTime),
                                    l = y.findFragmentByPDT(n, o.endProgramDateTime, d.maxFragLookUpTolerance);
                                else {
                                    var f = o.sn + 1;
                                    if (f >= e.startSN && f <= e.endSN) {
                                        var v = n[f - e.startSN];
                                        o.cc === v.cc && (l = v,
                                        p.logger.log("live playlist, switching playlist, load frag with next SN: " + l.sn))
                                    }
                                    l || (l = r["default"].search(n, function(e) {
                                        return o.cc - e.cc
                                    })) && p.logger.log("live playlist, switching playlist, load frag with same CC: " + l.sn)
                                }
                            l || (l = n[Math.min(a - 1, Math.round(a / 2))],
                            p.logger.log("live playlist, switching playlist, unknown, load middle frag : " + l.sn))
                        }
                        return l
                    }
                    ,
                    g.prototype._findFragment = function(e, t, i, s, r) {
                        var o, n = this.hls.config;
                        if (i < s) {
                            var a = i > s - n.maxFragLookUpTolerance ? 0 : n.maxFragLookUpTolerance;
                            p.logger.log("Looking for fragment, target is at " + i),
                            o = y.findFragmentByPTS(e, t, i, a);
                            var l = o.compareTimeInterval(i);
                            if (0 !== l) {
                                p.logger.warn("Fragment-lookup has PTS-shift:", l);
                                var d = 2 * l;
                                p.logger.log("Applying PTS shift-correction to lookup target:", d),
                                o = y.findFragmentByPTS(e, t, i + d, a)
                            }
                            p.logger.log("Fragment found is at [" + o.start + ", " + o.end + "], lookup target was at " + i)
                        } else
                            o = t[t.length - 1];
                        if (o) {
                            var u = o.sn - r.startSN
                              , h = e && o.level === e.level
                              , c = t[u - 1]
                              , f = t[u + 1];
                            if (e && o.sn === e.sn)
                                if (h && !o.backtracked)
                                    if (o.sn < r.endSN) {
                                        var v = e.deltaPTS;
                                        v && v > n.maxBufferHole && e.dropped && u ? (o = c,
                                        p.logger.warn("SN just loaded, with large PTS gap between audio and video, maybe frag is not starting with a keyframe ? load previous one to try to overcome this")) : (o = f,
                                        p.logger.log("SN just loaded, load next one: " + o.sn, o))
                                    } else
                                        o = null;
                                else
                                    o.backtracked && (f && f.backtracked ? (p.logger.warn("Already backtracked from fragment " + f.sn + ", will not backtrack to fragment " + o.sn + ". Loading fragment " + f.sn),
                                    o = f) : (p.logger.warn("Loaded fragment with dropped frames, backtracking 1 segment to find a keyframe"),
                                    o.dropped = 0,
                                    c ? (o = c,
                                    o.backtracked = !0) : u && (o = null)))
                        }
                        return o
                    }
                    ,
                    g.prototype._loadKey = function(e) {
                        this.state = t.State.KEY_LOADING,
                        this.hls.trigger(a["default"].KEY_LOADING, {
                            frag: e
                        })
                    }
                    ,
                    g.prototype._loadFragment = function(i) {
                        var s = this.fragmentTracker.getState(i);
                        this.fragCurrent = i,
                        this.startFragRequested = !0,
                        e.isFinite(i.sn) && !i.bitrateTest && (this.nextLoadPosition = i.start + i.duration),
                        i.backtracked || s === l.FragmentState.NOT_LOADED || s === l.FragmentState.PARTIAL ? (i.autoLevel = this.hls.autoLevelEnabled,
                        i.bitrateTest = this.bitrateTest,
                        this.hls.trigger(a["default"].FRAG_LOADING, {
                            frag: i
                        }),
                        this.demuxer || (this.demuxer = new n["default"](this.hls,"main")),
                        this.state = t.State.FRAG_LOADING) : s === l.FragmentState.APPENDING && this._reduceMaxBufferLength(i.duration) && this.fragmentTracker.removeFragment(i)
                    }
                    ,
                    Object.defineProperty(g.prototype, "state", {
                        get: function() {
                            return this._state
                        },
                        set: function(e) {
                            if (this.state !== e) {
                                var t = this.state;
                                this._state = e,
                                p.logger.log("main stream:" + t + "->" + e),
                                this.hls.trigger(a["default"].STREAM_STATE_TRANSITION, {
                                    previousState: t,
                                    nextState: e
                                })
                            }
                        },
                        enumerable: !0,
                        configurable: !0
                    }),
                    g.prototype.getBufferedFrag = function(e) {
                        return this.fragmentTracker.getBufferedFrag(e, u["default"].LevelType.MAIN)
                    }
                    ,
                    Object.defineProperty(g.prototype, "currentLevel", {
                        get: function() {
                            var e = this.media;
                            if (e) {
                                var t = this.getBufferedFrag(e.currentTime);
                                if (t)
                                    return t.level
                            }
                            return -1
                        },
                        enumerable: !0,
                        configurable: !0
                    }),
                    Object.defineProperty(g.prototype, "nextBufferedFrag", {
                        get: function() {
                            var e = this.media;
                            return e ? this.followingBufferedFrag(this.getBufferedFrag(e.currentTime)) : null
                        },
                        enumerable: !0,
                        configurable: !0
                    }),
                    g.prototype.followingBufferedFrag = function(e) {
                        return e ? this.getBufferedFrag(e.endPTS + .5) : null
                    }
                    ,
                    Object.defineProperty(g.prototype, "nextLevel", {
                        get: function() {
                            var e = this.nextBufferedFrag;
                            return e ? e.level : -1
                        },
                        enumerable: !0,
                        configurable: !0
                    }),
                    g.prototype._checkFragmentChanged = function() {
                        var e, t, i = this.media;
                        if (i && i.readyState && !1 === i.seeking && (t = i.currentTime,
                        t > this.lastCurrentTime && (this.lastCurrentTime = t),
                        o.BufferHelper.isBuffered(i, t) ? e = this.getBufferedFrag(t) : o.BufferHelper.isBuffered(i, t + .1) && (e = this.getBufferedFrag(t + .1)),
                        e)) {
                            var s = e;
                            if (s !== this.fragPlaying) {
                                this.hls.trigger(a["default"].FRAG_CHANGED, {
                                    frag: s
                                });
                                var r = s.level;
                                this.fragPlaying && this.fragPlaying.level === r || this.hls.trigger(a["default"].LEVEL_SWITCHED, {
                                    level: r
                                }),
                                this.fragPlaying = s
                            }
                        }
                    }
                    ,
                    g.prototype.immediateLevelSwitch = function() {
                        if (p.logger.log("immediateLevelSwitch"),
                        !this.immediateSwitch) {
                            this.immediateSwitch = !0;
                            var t = this.media
                              , i = void 0;
                            t ? (i = t.paused,
                            t.pause()) : i = !0,
                            this.previouslyPaused = i
                        }
                        var s = this.fragCurrent;
                        s && s.loader && s.loader.abort(),
                        this.fragCurrent = null,
                        this.flushMainBuffer(0, e.POSITIVE_INFINITY)
                    }
                    ,
                    g.prototype.immediateLevelSwitchEnd = function() {
                        var e = this.media;
                        e && e.buffered.length && (this.immediateSwitch = !1,
                        o.BufferHelper.isBuffered(e, e.currentTime) && (e.currentTime -= 1e-4),
                        this.previouslyPaused || e.play())
                    }
                    ,
                    g.prototype.nextLevelSwitch = function() {
                        var t = this.media;
                        if (t && t.readyState) {
                            var i = void 0
                              , s = void 0
                              , r = void 0;
                            if (s = this.getBufferedFrag(t.currentTime),
                            s && s.startPTS > 1 && this.flushMainBuffer(0, s.startPTS - 1),
                            t.paused)
                                i = 0;
                            else {
                                var o = this.hls.nextLoadLevel
                                  , n = this.levels[o]
                                  , a = this.fragLastKbps;
                                i = a && this.fragCurrent ? this.fragCurrent.duration * n.bitrate / (1e3 * a) + 1 : 0
                            }
                            if ((r = this.getBufferedFrag(t.currentTime + i)) && (r = this.followingBufferedFrag(r))) {
                                var l = this.fragCurrent;
                                l && l.loader && l.loader.abort(),
                                this.fragCurrent = null,
                                this.flushMainBuffer(r.maxStartPTS, e.POSITIVE_INFINITY)
                            }
                        }
                    }
                    ,
                    g.prototype.flushMainBuffer = function(e, i) {
                        this.state = t.State.BUFFER_FLUSHING;
                        var s = {
                            startOffset: e,
                            endOffset: i
                        };
                        this.altAudio && (s.type = "video"),
                        this.hls.trigger(a["default"].BUFFER_FLUSHING, s)
                    }
                    ,
                    g.prototype.onMediaAttached = function(e) {
                        var t = this.media = this.mediaBuffer = e.media;
                        this.onvseeking = this.onMediaSeeking.bind(this),
                        this.onvseeked = this.onMediaSeeked.bind(this),
                        this.onvended = this.onMediaEnded.bind(this),
                        t.addEventListener("seeking", this.onvseeking),
                        t.addEventListener("seeked", this.onvseeked),
                        t.addEventListener("ended", this.onvended);
                        var i = this.config;
                        this.levels && i.autoStartLoad && this.hls.startLoad(i.startPosition),
                        this.gapController = new m["default"](i,t,this.fragmentTracker,this.hls)
                    }
                    ,
                    g.prototype.onMediaDetaching = function() {
                        var e = this.media;
                        e && e.ended && (p.logger.log("MSE detaching and video ended, reset startPosition"),
                        this.startPosition = this.lastCurrentTime = 0);
                        var t = this.levels;
                        t && t.forEach(function(e) {
                            e.details && e.details.fragments.forEach(function(e) {
                                e.backtracked = undefined
                            })
                        }),
                        e && (e.removeEventListener("seeking", this.onvseeking),
                        e.removeEventListener("seeked", this.onvseeked),
                        e.removeEventListener("ended", this.onvended),
                        this.onvseeking = this.onvseeked = this.onvended = null),
                        this.media = this.mediaBuffer = null,
                        this.loadedmetadata = !1,
                        this.stopLoad()
                    }
                    ,
                    g.prototype.onMediaSeeking = function() {
                        var i = this.media
                          , s = i ? i.currentTime : undefined
                          , r = this.config;
                        e.isFinite(s) && p.logger.log("media seeking to " + s.toFixed(3));
                        var n = this.mediaBuffer ? this.mediaBuffer : i
                          , a = o.BufferHelper.bufferInfo(n, s, this.config.maxBufferHole);
                        if (this.state === t.State.FRAG_LOADING) {
                            var l = this.fragCurrent;
                            if (0 === a.len && l) {
                                var d = r.maxFragLookUpTolerance
                                  , u = l.start - d
                                  , h = l.start + l.duration + d;
                                s < u || s > h ? (l.loader && (p.logger.log("seeking outside of buffer while fragment load in progress, cancel fragment load"),
                                l.loader.abort()),
                                this.fragCurrent = null,
                                this.fragPrevious = null,
                                this.state = t.State.IDLE) : p.logger.log("seeking outside of buffer but within currently loaded fragment range")
                            }
                        } else
                            this.state === t.State.ENDED && (0 === a.len && (this.fragPrevious = 0),
                            this.state = t.State.IDLE);
                        i && (this.lastCurrentTime = s),
                        this.loadedmetadata || (this.nextLoadPosition = this.startPosition = s),
                        this.tick()
                    }
                    ,
                    g.prototype.onMediaSeeked = function() {
                        var t = this.media
                          , i = t ? t.currentTime : undefined;
                        e.isFinite(i) && p.logger.log("media seeked to " + i.toFixed(3)),
                        this.tick()
                    }
                    ,
                    g.prototype.onMediaEnded = function() {
                        p.logger.log("media ended"),
                        this.startPosition = this.lastCurrentTime = 0
                    }
                    ,
                    g.prototype.onManifestLoading = function() {
                        p.logger.log("trigger BUFFER_RESET"),
                        this.hls.trigger(a["default"].BUFFER_RESET),
                        this.fragmentTracker.removeAllFragments(),
                        this.stalled = !1,
                        this.startPosition = this.lastCurrentTime = 0
                    }
                    ,
                    g.prototype.onManifestParsed = function(e) {
                        var t, i = !1, s = !1;
                        e.levels.forEach(function(e) {
                            (t = e.audioCodec) && (-1 !== t.indexOf("mp4a.40.2") && (i = !0),
                            -1 !== t.indexOf("mp4a.40.5") && (s = !0))
                        }),
                        this.audioCodecSwitch = i && s,
                        this.audioCodecSwitch && p.logger.log("both AAC/HE-AAC audio found in levels; declaring level codec as HE-AAC"),
                        this.levels = e.levels,
                        this.startFragRequested = !1;
                        var r = this.config;
                        (r.autoStartLoad || this.forceStartLoad) && this.hls.startLoad(r.startPosition)
                    }
                    ,
                    g.prototype.onLevelLoaded = function(i) {
                        var s = i.details
                          , r = i.level
                          , o = this.levels[this.levelLastLoaded]
                          , n = this.levels[r]
                          , l = s.totalduration
                          , d = 0;
                        if (p.logger.log("level " + r + " loaded [" + s.startSN + "," + s.endSN + "],duration:" + l),
                        s.live) {
                            var u = n.details;
                            u && s.fragments.length > 0 ? (h.mergeDetails(u, s),
                            d = s.fragments[0].start,
                            this.liveSyncPosition = this.computeLivePosition(d, u),
                            s.PTSKnown && e.isFinite(d) ? p.logger.log("live playlist sliding:" + d.toFixed(3)) : (p.logger.log("live playlist - outdated PTS, unknown sliding"),
                            v.alignStream(this.fragPrevious, o, s))) : (p.logger.log("live playlist - first load, unknown sliding"),
                            s.PTSKnown = !1,
                            v.alignStream(this.fragPrevious, o, s))
                        } else
                            s.PTSKnown = !1;
                        if (n.details = s,
                        this.levelLastLoaded = r,
                        this.hls.trigger(a["default"].LEVEL_UPDATED, {
                            details: s,
                            level: r
                        }),
                        !1 === this.startFragRequested) {
                            if (-1 === this.startPosition || -1 === this.lastCurrentTime) {
                                var c = s.startTimeOffset;
                                e.isFinite(c) ? (c < 0 && (p.logger.log("negative start time offset " + c + ", count from end of last fragment"),
                                c = d + l + c),
                                p.logger.log("start time offset found in playlist, adjust startPosition to " + c),
                                this.startPosition = c) : s.live ? (this.startPosition = this.computeLivePosition(d, s),
                                p.logger.log("configure startPosition to " + this.startPosition)) : this.startPosition = 0,
                                this.lastCurrentTime = this.startPosition
                            }
                            this.nextLoadPosition = this.startPosition
                        }
                        this.state === t.State.WAITING_LEVEL && (this.state = t.State.IDLE),
                        this.tick()
                    }
                    ,
                    g.prototype.onKeyLoaded = function() {
                        this.state === t.State.KEY_LOADING && (this.state = t.State.IDLE,
                        this.tick())
                    }
                    ,
                    g.prototype.onFragLoaded = function(e) {
                        var i = this
                          , s = i.fragCurrent
                          , r = i.hls
                          , o = i.levels
                          , l = i.media
                          , d = e.frag;
                        if (this.state === t.State.FRAG_LOADING && s && "main" === d.type && d.level === s.level && d.sn === s.sn) {
                            var u = e.stats
                              , h = o[s.level]
                              , c = h.details;
                            if (this.bitrateTest = !1,
                            this.stats = u,
                            p.logger.log("Loaded " + s.sn + " of [" + c.startSN + " ," + c.endSN + "],level " + s.level),
                            d.bitrateTest && r.nextLoadLevel)
                                this.state = t.State.IDLE,
                                this.startFragRequested = !1,
                                u.tparsed = u.tbuffered = window.performance.now(),
                                r.trigger(a["default"].FRAG_BUFFERED, {
                                    stats: u,
                                    frag: s,
                                    id: "main"
                                }),
                                this.tick();
                            else if ("initSegment" === d.sn)
                                this.state = t.State.IDLE,
                                u.tparsed = u.tbuffered = window.performance.now(),
                                c.initSegment.data = e.payload,
                                r.trigger(a["default"].FRAG_BUFFERED, {
                                    stats: u,
                                    frag: s,
                                    id: "main"
                                }),
                                this.tick();
                            else {
                                p.logger.log("Parsing " + s.sn + " of [" + c.startSN + " ," + c.endSN + "],level " + s.level + ", cc " + s.cc),
                                this.state = t.State.PARSING,
                                this.pendingBuffering = !0,
                                this.appended = !1,
                                d.bitrateTest && (d.bitrateTest = !1,
                                this.fragmentTracker.onFragLoaded({
                                    frag: d
                                }));
                                var f = !(l && l.seeking) && (c.PTSKnown || !c.live)
                                  , v = c.initSegment ? c.initSegment.data : []
                                  , g = this._getAudioCodec(h)
                                  , y = this.demuxer = this.demuxer || new n["default"](this.hls,"main");
                                y.push(e.payload, v, g, h.videoCodec, s, c.totalduration, f)
                            }
                        }
                        this.fragLoadError = 0
                    }
                    ,
                    g.prototype.onFragParsingInitSegment = function(e) {
                        var i = this.fragCurrent
                          , s = e.frag;
                        if (i && "main" === e.id && s.sn === i.sn && s.level === i.level && this.state === t.State.PARSING) {
                            var r = e.tracks
                              , o = void 0
                              , n = void 0;
                            if (r.audio && this.altAudio && delete r.audio,
                            n = r.audio) {
                                var l = this.levels[this.level].audioCodec
                                  , d = navigator.userAgent.toLowerCase();
                                l && this.audioCodecSwap && (p.logger.log("swapping playlist audio codec"),
                                l = -1 !== l.indexOf("mp4a.40.5") ? "mp4a.40.2" : "mp4a.40.5"),
                                this.audioCodecSwitch && 1 !== n.metadata.channelCount && -1 === d.indexOf("firefox") && (l = "mp4a.40.5"),
                                -1 !== d.indexOf("android") && "audio/mpeg" !== n.container && (l = "mp4a.40.2",
                                p.logger.log("Android: force audio codec to " + l)),
                                n.levelCodec = l,
                                n.id = e.id
                            }
                            n = r.video,
                            n && (n.levelCodec = this.levels[this.level].videoCodec,
                            n.id = e.id),
                            this.hls.trigger(a["default"].BUFFER_CODECS, r);
                            for (o in r) {
                                n = r[o],
                                p.logger.log("main track:" + o + ",container:" + n.container + ",codecs[level/parsed]=[" + n.levelCodec + "/" + n.codec + "]");
                                var u = n.initSegment;
                                u && (this.appended = !0,
                                this.pendingBuffering = !0,
                                this.hls.trigger(a["default"].BUFFER_APPENDING, {
                                    type: o,
                                    data: u,
                                    parent: "main",
                                    content: "initSegment"
                                }))
                            }
                            this.tick()
                        }
                    }
                    ,
                    g.prototype.onFragParsingData = function(i) {
                        var s = this
                          , r = this.fragCurrent
                          , o = i.frag;
                        if (r && "main" === i.id && o.sn === r.sn && o.level === r.level && ("audio" !== i.type || !this.altAudio) && this.state === t.State.PARSING) {
                            var n = this.levels[this.level]
                              , l = r;
                            if (e.isFinite(i.endPTS) || (i.endPTS = i.startPTS + r.duration,
                            i.endDTS = i.startDTS + r.duration),
                            !0 === i.hasAudio && l.addElementaryStream(d["default"].ElementaryStreamTypes.AUDIO),
                            !0 === i.hasVideo && l.addElementaryStream(d["default"].ElementaryStreamTypes.VIDEO),
                            p.logger.log("Parsed " + i.type + ",PTS:[" + i.startPTS.toFixed(3) + "," + i.endPTS.toFixed(3) + "],DTS:[" + i.startDTS.toFixed(3) + "/" + i.endDTS.toFixed(3) + "],nb:" + i.nb + ",dropped:" + (i.dropped || 0)),
                            "video" === i.type)
                                if (l.dropped = i.dropped,
                                l.dropped)
                                    if (l.backtracked)
                                        p.logger.warn("Already backtracked on this fragment, appending with the gap", l.sn);
                                    else {
                                        var u = n.details;
                                        if (!u || l.sn !== u.startSN)
                                            return p.logger.warn("missing video frame(s), backtracking fragment", l.sn),
                                            this.fragmentTracker.removeFragment(l),
                                            l.backtracked = !0,
                                            this.nextLoadPosition = i.startPTS,
                                            this.state = t.State.IDLE,
                                            this.fragPrevious = l,
                                            void this.tick();
                                        p.logger.warn("missing video frame(s) on first frag, appending with gap", l.sn)
                                    }
                                else
                                    l.backtracked = !1;
                            var c = h.updateFragPTSDTS(n.details, l, i.startPTS, i.endPTS, i.startDTS, i.endDTS)
                              , f = this.hls;
                            f.trigger(a["default"].LEVEL_PTS_UPDATED, {
                                details: n.details,
                                level: this.level,
                                drift: c,
                                type: i.type,
                                start: i.startPTS,
                                end: i.endPTS
                            }),
                            [i.data1, i.data2].forEach(function(e) {
                                e && e.length && s.state === t.State.PARSING && (s.appended = !0,
                                s.pendingBuffering = !0,
                                f.trigger(a["default"].BUFFER_APPENDING, {
                                    type: i.type,
                                    data: e,
                                    parent: "main",
                                    content: "data"
                                }))
                            }),
                            this.tick()
                        }
                    }
                    ,
                    g.prototype.onFragParsed = function(e) {
                        var i = this.fragCurrent
                          , s = e.frag;
                        i && "main" === e.id && s.sn === i.sn && s.level === i.level && this.state === t.State.PARSING && (this.stats.tparsed = window.performance.now(),
                        this.state = t.State.PARSED,
                        this._checkAppendedParsed())
                    }
                    ,
                    g.prototype.onAudioTrackSwitching = function(i) {
                        var s = !!i.url
                          , r = i.id;
                        if (!s) {
                            if (this.mediaBuffer !== this.media) {
                                p.logger.log("switching on main audio, use media.buffered to schedule main fragment loading"),
                                this.mediaBuffer = this.media;
                                var o = this.fragCurrent;
                                o.loader && (p.logger.log("switching to main audio track, cancel main fragment load"),
                                o.loader.abort()),
                                this.fragCurrent = null,
                                this.fragPrevious = null,
                                this.demuxer && (this.demuxer.destroy(),
                                this.demuxer = null),
                                this.state = t.State.IDLE
                            }
                            var n = this.hls;
                            n.trigger(a["default"].BUFFER_FLUSHING, {
                                startOffset: 0,
                                endOffset: e.POSITIVE_INFINITY,
                                type: "audio"
                            }),
                            n.trigger(a["default"].AUDIO_TRACK_SWITCHED, {
                                id: r
                            }),
                            this.altAudio = !1
                        }
                    }
                    ,
                    g.prototype.onAudioTrackSwitched = function(e) {
                        var t = e.id
                          , i = !!this.hls.audioTracks[t].url;
                        if (i) {
                            var s = this.videoBuffer;
                            s && this.mediaBuffer !== s && (p.logger.log("switching on alternate audio, use video.buffered to schedule main fragment loading"),
                            this.mediaBuffer = s)
                        }
                        this.altAudio = i,
                        this.tick()
                    }
                    ,
                    g.prototype.onBufferCreated = function(e) {
                        var t, i, s = e.tracks, r = !1;
                        for (var o in s) {
                            var n = s[o];
                            "main" === n.id ? (i = o,
                            t = n,
                            "video" === o && (this.videoBuffer = s[o].buffer)) : r = !0
                        }
                        r && t ? (p.logger.log("alternate track found, use " + i + ".buffered to schedule main fragment loading"),
                        this.mediaBuffer = t.buffer) : this.mediaBuffer = this.media
                    }
                    ,
                    g.prototype.onBufferAppended = function(e) {
                        if ("main" === e.parent) {
                            var i = this.state;
                            i !== t.State.PARSING && i !== t.State.PARSED || (this.pendingBuffering = e.pending > 0,
                            this._checkAppendedParsed())
                        }
                    }
                    ,
                    g.prototype._checkAppendedParsed = function() {
                        if (!(this.state !== t.State.PARSED || this.appended && this.pendingBuffering)) {
                            var e = this.fragCurrent;
                            if (e) {
                                var i = this.mediaBuffer ? this.mediaBuffer : this.media;
                                p.logger.log("main buffered : " + c["default"].toString(i.buffered)),
                                this.fragPrevious = e;
                                var s = this.stats;
                                s.tbuffered = window.performance.now(),
                                this.fragLastKbps = Math.round(8 * s.total / (s.tbuffered - s.tfirst)),
                                this.hls.trigger(a["default"].FRAG_BUFFERED, {
                                    stats: s,
                                    frag: e,
                                    id: "main"
                                }),
                                this.state = t.State.IDLE
                            }
                            this.tick()
                        }
                    }
                    ,
                    g.prototype.onError = function(i) {
                        var s = i.frag || this.fragCurrent;
                        if (!s || "main" === s.type) {
                            var r = !!this.media && o.BufferHelper.isBuffered(this.media, this.media.currentTime) && o.BufferHelper.isBuffered(this.media, this.media.currentTime + .5);
                            switch (i.details) {
                            case f.ErrorDetails.FRAG_LOAD_ERROR:
                            case f.ErrorDetails.FRAG_LOAD_TIMEOUT:
                            case f.ErrorDetails.KEY_LOAD_ERROR:
                            case f.ErrorDetails.KEY_LOAD_TIMEOUT:
                                if (!i.fatal)
                                    if (this.fragLoadError + 1 <= this.config.fragLoadingMaxRetry) {
                                        var n = Math.min(Math.pow(2, this.fragLoadError) * this.config.fragLoadingRetryDelay, this.config.fragLoadingMaxRetryTimeout);
                                        p.logger.warn("mediaController: frag loading failed, retry in " + n + " ms"),
                                        this.retryDate = window.performance.now() + n,
                                        this.loadedmetadata || (this.startFragRequested = !1,
                                        this.nextLoadPosition = this.startPosition),
                                        this.fragLoadError++,
                                        this.state = t.State.FRAG_LOADING_WAITING_RETRY
                                    } else
                                        p.logger.error("mediaController: " + i.details + " reaches max retry, redispatch as fatal ..."),
                                        i.fatal = !0,
                                        this.state = t.State.ERROR;
                                break;
                            case f.ErrorDetails.LEVEL_LOAD_ERROR:
                            case f.ErrorDetails.LEVEL_LOAD_TIMEOUT:
                                this.state !== t.State.ERROR && (i.fatal ? (this.state = t.State.ERROR,
                                p.logger.warn("streamController: " + i.details + ",switch to " + this.state + " state ...")) : i.levelRetry || this.state !== t.State.WAITING_LEVEL || (this.state = t.State.IDLE));
                                break;
                            case f.ErrorDetails.BUFFER_FULL_ERROR:
                                "main" !== i.parent || this.state !== t.State.PARSING && this.state !== t.State.PARSED || (r ? (this._reduceMaxBufferLength(this.config.maxBufferLength),
                                this.state = t.State.IDLE) : (p.logger.warn("buffer full error also media.currentTime is not buffered, flush everything"),
                                this.fragCurrent = null,
                                this.flushMainBuffer(0, e.POSITIVE_INFINITY)));
                                break;
                            case f.ErrorDetails.BUFFER_STALLED_ERROR:
                            }
                        }
                    }
                    ,
                    g.prototype._reduceMaxBufferLength = function(e) {
                        var t = this.config;
                        return t.maxMaxBufferLength >= e && (t.maxMaxBufferLength /= 2,
                        p.logger.warn("main:reduce max buffer length to " + t.maxMaxBufferLength + "s"),
                        !0)
                    }
                    ,
                    g.prototype._checkBuffer = function() {
                        var e = this.media;
                        if (e && 0 !== e.readyState) {
                            var t = this.mediaBuffer ? this.mediaBuffer : e
                              , i = t.buffered;
                            !this.loadedmetadata && i.length ? (this.loadedmetadata = !0,
                            this._seekToStartPos()) : this.immediateSwitch ? this.immediateLevelSwitchEnd() : this.gapController.poll(this.lastCurrentTime, i)
                        }
                    }
                    ,
                    g.prototype.onFragLoadEmergencyAborted = function() {
                        this.state = t.State.IDLE,
                        this.loadedmetadata || (this.startFragRequested = !1,
                        this.nextLoadPosition = this.startPosition),
                        this.tick()
                    }
                    ,
                    g.prototype.onBufferFlushed = function() {
                        var e = this.mediaBuffer ? this.mediaBuffer : this.media;
                        e && this.fragmentTracker.detectEvictedFragments(d["default"].ElementaryStreamTypes.VIDEO, e.buffered),
                        this.state = t.State.IDLE,
                        this.fragPrevious = null
                    }
                    ,
                    g.prototype.swapAudioCodec = function() {
                        this.audioCodecSwap = !this.audioCodecSwap
                    }
                    ,
                    g.prototype.computeLivePosition = function(e, t) {
                        var i = this.config.liveSyncDuration !== undefined ? this.config.liveSyncDuration : this.config.liveSyncDurationCount * t.targetduration;
                        return e + Math.max(0, t.totalduration - i)
                    }
                    ,
                    g.prototype._seekToStartPos = function() {
                        var e = this.media
                          , t = e.currentTime
                          , i = e.seeking ? t : this.startPosition;
                        t !== i && (p.logger.log("target start position not buffered, seek to buffered.start(0) " + i + " from current time " + t + " "),
                        e.currentTime = i)
                    }
                    ,
                    g.prototype._getAudioCodec = function(e) {
                        var t = this.config.defaultAudioCodec || e.audioCodec;
                        return this.audioCodecSwap && (p.logger.log("swapping playlist audio codec"),
                        t && (t = -1 !== t.indexOf("mp4a.40.5") ? "mp4a.40.2" : "mp4a.40.5")),
                        t
                    }
                    ,
                    Object.defineProperty(g.prototype, "liveSyncPosition", {
                        get: function() {
                            return this._liveSyncPosition
                        },
                        set: function(e) {
                            this._liveSyncPosition = e
                        },
                        enumerable: !0,
                        configurable: !0
                    }),
                    g
                }(g["default"]);
                t["default"] = _
            }
            ).call(this, i("./src/polyfills/number.js").Number)
        },
        "./src/controller/subtitle-stream-controller.js": function(e, t, i) {
            "use strict";
            var s = this && this.__extends || function() {
                var e = Object.setPrototypeOf || {
                    __proto__: []
                }instanceof Array && function(e, t) {
                    e.__proto__ = t
                }
                || function(e, t) {
                    for (var i in t)
                        t.hasOwnProperty(i) && (e[i] = t[i])
                }
                ;
                return function(t, i) {
                    function s() {
                        this.constructor = t
                    }
                    e(t, i),
                    t.prototype = null === i ? Object.create(i) : (s.prototype = i.prototype,
                    new s)
                }
            }();
            Object.defineProperty(t, "__esModule", {
                value: !0
            });
            var r = i("./src/events.js")
              , o = i("./src/utils/logger.js")
              , n = i("./src/crypt/decrypter.js")
              , a = i("./src/task-loop.js")
              , l = window.performance
              , d = {
                STOPPED: "STOPPED",
                IDLE: "IDLE",
                KEY_LOADING: "KEY_LOADING",
                FRAG_LOADING: "FRAG_LOADING"
            }
              , u = function(e) {
                function t(t) {
                    var i = e.call(this, t, r["default"].MEDIA_ATTACHED, r["default"].ERROR, r["default"].KEY_LOADED, r["default"].FRAG_LOADED, r["default"].SUBTITLE_TRACKS_UPDATED, r["default"].SUBTITLE_TRACK_SWITCH, r["default"].SUBTITLE_TRACK_LOADED, r["default"].SUBTITLE_FRAG_PROCESSED) || this;
                    return i.config = t.config,
                    i.vttFragSNsProcessed = {},
                    i.vttFragQueues = undefined,
                    i.currentlyProcessing = null,
                    i.state = d.STOPPED,
                    i.currentTrackId = -1,
                    i.decrypter = new n["default"](t,t.config),
                    i
                }
                return s(t, e),
                t.prototype.onHandlerDestroyed = function() {
                    this.state = d.STOPPED
                }
                ,
                t.prototype.clearVttFragQueues = function() {
                    var e = this;
                    this.vttFragQueues = {},
                    this.tracks.forEach(function(t) {
                        e.vttFragQueues[t.id] = []
                    })
                }
                ,
                t.prototype.nextFrag = function() {
                    if (null === this.currentlyProcessing && this.currentTrackId > -1 && this.vttFragQueues[this.currentTrackId].length) {
                        var e = this.currentlyProcessing = this.vttFragQueues[this.currentTrackId].shift();
                        this.fragCurrent = e,
                        this.hls.trigger(r["default"].FRAG_LOADING, {
                            frag: e
                        }),
                        this.state = d.FRAG_LOADING
                    }
                }
                ,
                t.prototype.onSubtitleFragProcessed = function(e) {
                    e.success && this.vttFragSNsProcessed[e.frag.trackId].push(e.frag.sn),
                    this.currentlyProcessing = null,
                    this.state = d.IDLE,
                    this.nextFrag()
                }
                ,
                t.prototype.onMediaAttached = function() {
                    this.state = d.IDLE
                }
                ,
                t.prototype.onError = function(e) {
                    var t = e.frag;
                    t && "subtitle" !== t.type || this.currentlyProcessing && (this.currentlyProcessing = null,
                    this.nextFrag())
                }
                ,
                t.prototype.doTick = function() {
                    var e = this;
                    switch (this.state) {
                    case d.IDLE:
                        var t = this.tracks
                          , i = this.currentTrackId
                          , s = this.vttFragSNsProcessed[i]
                          , n = this.vttFragQueues[i]
                          , a = this.currentlyProcessing ? this.currentlyProcessing.sn : -1
                          , l = function(e) {
                            return s.indexOf(e.sn) > -1
                        }
                          , u = function(e) {
                            return n.some(function(t) {
                                return t.sn === e.sn
                            })
                        };
                        if (!t)
                            break;
                        var h;
                        if (i < t.length && (h = t[i].details),
                        void 0 === h)
                            break;
                        h.fragments.forEach(function(t) {
                            l(t) || t.sn === a || u(t) || (t.encrypted ? (o.logger.log("Loading key for " + t.sn),
                            e.state = d.KEY_LOADING,
                            e.hls.trigger(r["default"].KEY_LOADING, {
                                frag: t
                            })) : (t.trackId = i,
                            n.push(t),
                            e.nextFrag()))
                        })
                    }
                }
                ,
                t.prototype.onSubtitleTracksUpdated = function(e) {
                    var t = this;
                    o.logger.log("subtitle tracks updated"),
                    this.tracks = e.subtitleTracks,
                    this.clearVttFragQueues(),
                    this.vttFragSNsProcessed = {},
                    this.tracks.forEach(function(e) {
                        t.vttFragSNsProcessed[e.id] = []
                    })
                }
                ,
                t.prototype.onSubtitleTrackSwitch = function(e) {
                    if (this.currentTrackId = e.id,
                    this.tracks && -1 !== this.currentTrackId) {
                        var t = this.tracks[this.currentTrackId];
                        t && t.details && this.tick()
                    }
                }
                ,
                t.prototype.onSubtitleTrackLoaded = function() {
                    this.tick()
                }
                ,
                t.prototype.onKeyLoaded = function() {
                    this.state === d.KEY_LOADING && (this.state = d.IDLE,
                    this.tick())
                }
                ,
                t.prototype.onFragLoaded = function(e) {
                    var t = this.fragCurrent
                      , i = e.frag.decryptdata
                      , s = e.frag
                      , o = this.hls;
                    if (this.state === d.FRAG_LOADING && t && "subtitle" === e.frag.type && t.sn === e.frag.sn && e.payload.byteLength > 0 && null != i && null != i.key && "AES-128" === i.method) {
                        var n;
                        try {
                            n = l.now()
                        } catch (a) {
                            n = Date.now()
                        }
                        this.decrypter.decrypt(e.payload, i.key.buffer, i.iv.buffer, function(e) {
                            var t;
                            try {
                                t = l.now()
                            } catch (a) {
                                t = Date.now()
                            }
                            o.trigger(r["default"].FRAG_DECRYPTED, {
                                frag: s,
                                payload: e,
                                stats: {
                                    tstart: n,
                                    tdecrypt: t
                                }
                            })
                        })
                    }
                }
                ,
                t
            }(a["default"]);
            t["default"] = u
        },
        "./src/controller/subtitle-track-controller.js": function(e, t, i) {
            "use strict";
            function s(e) {
                for (var t = [], i = 0; i < e.length; i++)
                    "subtitles" === e[i].kind && t.push(e[i]);
                return t
            }
            var r = this && this.__extends || function() {
                var e = Object.setPrototypeOf || {
                    __proto__: []
                }instanceof Array && function(e, t) {
                    e.__proto__ = t
                }
                || function(e, t) {
                    for (var i in t)
                        t.hasOwnProperty(i) && (e[i] = t[i])
                }
                ;
                return function(t, i) {
                    function s() {
                        this.constructor = t
                    }
                    e(t, i),
                    t.prototype = null === i ? Object.create(i) : (s.prototype = i.prototype,
                    new s)
                }
            }();
            Object.defineProperty(t, "__esModule", {
                value: !0
            });
            var o = i("./src/events.js")
              , n = i("./src/event-handler.js")
              , a = i("./src/utils/logger.js")
              , l = function(e) {
                function t(t) {
                    var i = e.call(this, t, o["default"].MEDIA_ATTACHED, o["default"].MEDIA_DETACHING, o["default"].MANIFEST_LOADING, o["default"].MANIFEST_LOADED, o["default"].SUBTITLE_TRACK_LOADED) || this;
                    return i.tracks = [],
                    i.trackId = -1,
                    i.media = null,
                    i.subtitleDisplay = !0,
                    i
                }
                return r(t, e),
                t.prototype._onTextTracksChanged = function() {
                    if (this.media) {
                        for (var e = -1, t = s(this.media.textTracks), i = 0; i < t.length; i++)
                            if ("hidden" === t[i].mode)
                                e = i;
                            else if ("showing" === t[i].mode) {
                                e = i;
                                break
                            }
                        this.subtitleTrack = e
                    }
                }
                ,
                t.prototype.destroy = function() {
                    n["default"].prototype.destroy.call(this)
                }
                ,
                t.prototype.onMediaAttached = function(e) {
                    var t = this;
                    this.media = e.media,
                    this.media && (this.queuedDefaultTrack && (this.subtitleTrack = this.queuedDefaultTrack,
                    delete this.queuedDefaultTrack),
                    this.trackChangeListener = this._onTextTracksChanged.bind(this),
                    this.useTextTrackPolling = !(this.media.textTracks && "onchange"in this.media.textTracks),
                    this.useTextTrackPolling ? this.subtitlePollingInterval = setInterval(function() {
                        t.trackChangeListener()
                    }, 500) : this.media.textTracks.addEventListener("change", this.trackChangeListener))
                }
                ,
                t.prototype.onMediaDetaching = function() {
                    this.media && (this.useTextTrackPolling ? clearInterval(this.subtitlePollingInterval) : this.media.textTracks.removeEventListener("change", this.trackChangeListener),
                    this.media = null)
                }
                ,
                t.prototype.onManifestLoading = function() {
                    this.tracks = [],
                    this.trackId = -1
                }
                ,
                t.prototype.onManifestLoaded = function(e) {
                    var t = this
                      , i = e.subtitles || [];
                    this.tracks = i,
                    this.trackId = -1,
                    this.hls.trigger(o["default"].SUBTITLE_TRACKS_UPDATED, {
                        subtitleTracks: i
                    }),
                    i.forEach(function(e) {
                        e["default"] && (t.media ? t.subtitleTrack = e.id : t.queuedDefaultTrack = e.id)
                    })
                }
                ,
                t.prototype.onTick = function() {
                    var e = this.trackId
                      , t = this.tracks[e];
                    if (t) {
                        var i = t.details;
                        i && !i.live || (a.logger.log("(re)loading playlist for subtitle track " + e),
                        this.hls.trigger(o["default"].SUBTITLE_TRACK_LOADING, {
                            url: t.url,
                            id: e
                        }))
                    }
                }
                ,
                t.prototype.onSubtitleTrackLoaded = function(e) {
                    var t = this;
                    e.id < this.tracks.length && (a.logger.log("subtitle track " + e.id + " loaded"),
                    this.tracks[e.id].details = e.details,
                    e.details.live && !this.timer && (this.timer = setInterval(function() {
                        t.onTick()
                    }, 1e3 * e.details.targetduration, this)),
                    !e.details.live && this.timer && this._stopTimer())
                }
                ,
                Object.defineProperty(t.prototype, "subtitleTracks", {
                    get: function() {
                        return this.tracks
                    },
                    enumerable: !0,
                    configurable: !0
                }),
                Object.defineProperty(t.prototype, "subtitleTrack", {
                    get: function() {
                        return this.trackId
                    },
                    set: function(e) {
                        this.trackId !== e && (this._toggleTrackModes(e),
                        this.setSubtitleTrackInternal(e))
                    },
                    enumerable: !0,
                    configurable: !0
                }),
                t.prototype.setSubtitleTrackInternal = function(e) {
                    var t = this
                      , i = t.hls
                      , s = t.tracks;
                    if (!("number" != typeof e || e < -1 || e >= s.length) && (this._stopTimer(),
                    this.trackId = e,
                    a.logger.log("switching to subtitle track " + e),
                    i.trigger(o["default"].SUBTITLE_TRACK_SWITCH, {
                        id: e
                    }),
                    -1 !== e)) {
                        var r = s[e]
                          , n = r.details;
                        n && !n.live || (a.logger.log("(re)loading playlist for subtitle track " + e),
                        i.trigger(o["default"].SUBTITLE_TRACK_LOADING, {
                            url: r.url,
                            id: e
                        }))
                    }
                }
                ,
                t.prototype._stopTimer = function() {
                    this.timer && (clearInterval(this.timer),
                    this.timer = null)
                }
                ,
                t.prototype._toggleTrackModes = function(e) {
                    var t = this
                      , i = t.media
                      , r = t.subtitleDisplay
                      , o = t.trackId;
                    if (i) {
                        var n = s(i.textTracks);
                        if (-1 === e)
                            [].slice.call(n).forEach(function(e) {
                                e.mode = "disabled"
                            });
                        else {
                            var a = n[o];
                            a && (a.mode = "disabled")
                        }
                        var l = n[e];
                        l && (l.mode = r ? "showing" : "hidden")
                    }
                }
                ,
                t
            }(n["default"]);
            t["default"] = l
        },
        "./src/controller/timeline-controller.js": function(e, t, i) {
            "use strict";
            function s(e, t) {
                return e && e.label === t.name && !(e.textTrack1 || e.textTrack2)
            }
            function r(e, t, i, s) {
                return Math.min(t, s) - Math.max(e, i)
            }
            var o = this && this.__extends || function() {
                var e = Object.setPrototypeOf || {
                    __proto__: []
                }instanceof Array && function(e, t) {
                    e.__proto__ = t
                }
                || function(e, t) {
                    for (var i in t)
                        t.hasOwnProperty(i) && (e[i] = t[i])
                }
                ;
                return function(t, i) {
                    function s() {
                        this.constructor = t
                    }
                    e(t, i),
                    t.prototype = null === i ? Object.create(i) : (s.prototype = i.prototype,
                    new s)
                }
            }();
            Object.defineProperty(t, "__esModule", {
                value: !0
            });
            var n = i("./src/events.js")
              , a = i("./src/event-handler.js")
              , l = i("./src/utils/cea-608-parser.js")
              , d = i("./src/utils/output-filter.js")
              , u = i("./src/utils/webvtt-parser.js")
              , h = i("./src/utils/logger.js")
              , c = i("./src/utils/texttrack-utils.js")
              , f = function(e) {
                function t(t) {
                    var i = e.call(this, t, n["default"].MEDIA_ATTACHING, n["default"].MEDIA_DETACHING, n["default"].FRAG_PARSING_USERDATA, n["default"].FRAG_DECRYPTED, n["default"].MANIFEST_LOADING, n["default"].MANIFEST_LOADED, n["default"].FRAG_LOADED, n["default"].LEVEL_SWITCHING, n["default"].INIT_PTS_FOUND) || this;
                    if (i.hls = t,
                    i.config = t.config,
                    i.enabled = !0,
                    i.Cues = t.config.cueHandler,
                    i.textTracks = [],
                    i.tracks = [],
                    i.unparsedVttFrags = [],
                    i.initPTS = undefined,
                    i.cueRanges = [],
                    i.captionsTracks = {},
                    i.captionsProperties = {
                        textTrack1: {
                            label: i.config.captionsTextTrack1Label,
                            languageCode: i.config.captionsTextTrack1LanguageCode
                        },
                        textTrack2: {
                            label: i.config.captionsTextTrack2Label,
                            languageCode: i.config.captionsTextTrack2LanguageCode
                        }
                    },
                    i.config.enableCEA708Captions) {
                        var s = new d["default"](i,"textTrack1")
                          , r = new d["default"](i,"textTrack2");
                        i.cea608Parser = new l["default"](0,s,r)
                    }
                    return i
                }
                return o(t, e),
                t.prototype.addCues = function(e, t, i, s) {
                    for (var o = this.cueRanges, n = !1, a = o.length; a--; ) {
                        var l = o[a]
                          , d = r(l[0], l[1], t, i);
                        if (d >= 0 && (l[0] = Math.min(l[0], t),
                        l[1] = Math.max(l[1], i),
                        n = !0,
                        d / (i - t) > .5))
                            return
                    }
                    n || o.push([t, i]),
                    this.Cues.newCue(this.captionsTracks[e], t, i, s)
                }
                ,
                t.prototype.onInitPtsFound = function(e) {
                    var t = this;
                    "undefined" == typeof this.initPTS && (this.initPTS = e.initPTS),
                    this.unparsedVttFrags.length && (this.unparsedVttFrags.forEach(function(e) {
                        t.onFragLoaded(e)
                    }),
                    this.unparsedVttFrags = [])
                }
                ,
                t.prototype.getExistingTrack = function(e) {
                    var t = this.media;
                    if (t)
                        for (var i = 0; i < t.textTracks.length; i++) {
                            var s = t.textTracks[i];
                            if (s[e])
                                return s
                        }
                    return null
                }
                ,
                t.prototype.createCaptionsTrack = function(e) {
                    var t = this.captionsProperties[e]
                      , i = t.label
                      , s = t.languageCode
                      , r = this.captionsTracks;
                    if (!r[e]) {
                        var o = this.getExistingTrack(e);
                        if (o)
                            r[e] = o,
                            c.clearCurrentCues(r[e]),
                            c.sendAddTrackEvent(r[e], this.media);
                        else {
                            var n = this.createTextTrack("captions", i, s);
                            n && (n[e] = !0,
                            r[e] = n)
                        }
                    }
                }
                ,
                t.prototype.createTextTrack = function(e, t, i) {
                    var s = this.media;
                    if (s)
                        return s.addTextTrack(e, t, i)
                }
                ,
                t.prototype.destroy = function() {
                    a["default"].prototype.destroy.call(this)
                }
                ,
                t.prototype.onMediaAttaching = function(e) {
                    this.media = e.media,
                    this._cleanTracks()
                }
                ,
                t.prototype.onMediaDetaching = function() {
                    var e = this.captionsTracks;
                    Object.keys(e).forEach(function(t) {
                        c.clearCurrentCues(e[t]),
                        delete e[t]
                    })
                }
                ,
                t.prototype.onManifestLoading = function() {
                    this.lastSn = -1,
                    this.prevCC = -1,
                    this.vttCCs = {
                        ccOffset: 0,
                        presentationOffset: 0
                    },
                    this._cleanTracks()
                }
                ,
                t.prototype._cleanTracks = function() {
                    var e = this.media;
                    if (e) {
                        var t = e.textTracks;
                        if (t)
                            for (var i = 0; i < t.length; i++)
                                c.clearCurrentCues(t[i])
                    }
                }
                ,
                t.prototype.onManifestLoaded = function(e) {
                    var t = this;
                    if (this.textTracks = [],
                    this.unparsedVttFrags = this.unparsedVttFrags || [],
                    this.initPTS = undefined,
                    this.cueRanges = [],
                    this.config.enableWebVTT) {
                        this.tracks = e.subtitles || [];
                        var i = this.media ? this.media.textTracks : [];
                        this.tracks.forEach(function(e, r) {
                            var o;
                            if (r < i.length) {
                                var n = Object.values(i).find(function(t) {
                                    return s(t, e)
                                });
                                n && (o = n)
                            }
                            o || (o = t.createTextTrack("subtitles", e.name, e.lang)),
                            e["default"] ? o.mode = t.hls.subtitleDisplay ? "showing" : "hidden" : o.mode = "disabled",
                            t.textTracks.push(o)
                        })
                    }
                }
                ,
                t.prototype.onLevelSwitching = function() {
                    this.enabled = "NONE" !== this.hls.currentLevel.closedCaptions
                }
                ,
                t.prototype.onFragLoaded = function(e) {
                    var t = e.frag
                      , i = e.payload;
                    if ("main" === t.type) {
                        var s = t.sn;
                        if (s !== this.lastSn + 1) {
                            var r = this.cea608Parser;
                            r && r.reset()
                        }
                        this.lastSn = s
                    } else if ("subtitle" === t.type)
                        if (i.byteLength) {
                            if ("undefined" == typeof this.initPTS)
                                return void this.unparsedVttFrags.push(e);
                            var o = t.decryptdata;
                            null != o && null != o.key && "AES-128" === o.method || this._parseVTTs(t, i)
                        } else
                            this.hls.trigger(n["default"].SUBTITLE_FRAG_PROCESSED, {
                                success: !1,
                                frag: t
                            })
                }
                ,
                t.prototype._parseVTTs = function(e, t) {
                    var i = this.vttCCs;
                    i[e.cc] || (i[e.cc] = {
                        start: e.start,
                        prevCC: this.prevCC,
                        "new": !0
                    },
                    this.prevCC = e.cc);
                    var s = this.textTracks
                      , r = this.hls;
                    u["default"].parse(t, this.initPTS, i, e.cc, function(t) {
                        var i = s[e.trackId];
                        if ("disabled" === i.mode)
                            return void r.trigger(n["default"].SUBTITLE_FRAG_PROCESSED, {
                                success: !1,
                                frag: e
                            });
                        t.forEach(function(e) {
                            if (!i.cues.getCueById(e.id))
                                try {
                                    i.addCue(e)
                                } catch (s) {
                                    var t = new window.TextTrackCue(e.startTime,e.endTime,e.text);
                                    t.id = e.id,
                                    i.addCue(t)
                                }
                        }),
                        r.trigger(n["default"].SUBTITLE_FRAG_PROCESSED, {
                            success: !0,
                            frag: e
                        })
                    }, function(t) {
                        h.logger.log("Failed to parse VTT cue: " + t),
                        r.trigger(n["default"].SUBTITLE_FRAG_PROCESSED, {
                            success: !1,
                            frag: e
                        })
                    })
                }
                ,
                t.prototype.onFragDecrypted = function(e) {
                    var t = e.payload
                      , i = e.frag;
                    if ("subtitle" === i.type) {
                        if ("undefined" == typeof this.initPTS)
                            return void this.unparsedVttFrags.push(e);
                        this._parseVTTs(i, t)
                    }
                }
                ,
                t.prototype.onFragParsingUserdata = function(e) {
                    if (this.enabled && this.config.enableCEA708Captions)
                        for (var t = 0; t < e.samples.length; t++) {
                            var i = this.extractCea608Data(e.samples[t].bytes);
                            this.cea608Parser.addData(e.samples[t].pts, i)
                        }
                }
                ,
                t.prototype.extractCea608Data = function(e) {
                    for (var t, i, s, r, o, n = 31 & e[0], a = 2, l = [], d = 0; d < n; d++)
                        t = e[a++],
                        i = 127 & e[a++],
                        s = 127 & e[a++],
                        r = 0 != (4 & t),
                        o = 3 & t,
                        0 === i && 0 === s || r && 0 === o && (l.push(i),
                        l.push(s));
                    return l
                }
                ,
                t
            }(a["default"]);
            t["default"] = f
        },
        "./src/crypt/aes-crypto.js": function(e, t, i) {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            });
            var s = function() {
                function e(e, t) {
                    this.subtle = e,
                    this.aesIV = t
                }
                return e.prototype.decrypt = function(e, t) {
                    return this.subtle.decrypt({
                        name: "AES-CBC",
                        iv: this.aesIV
                    }, t, e)
                }
                ,
                e
            }();
            t["default"] = s
        },
        "./src/crypt/aes-decryptor.js": function(e, t, i) {
            "use strict";
            function s(e) {
                var t = e.byteLength
                  , i = t && new DataView(e).getUint8(t - 1);
                return i ? e.slice(0, t - i) : e
            }
            Object.defineProperty(t, "__esModule", {
                value: !0
            }),
            t.removePadding = s;
            var r = function() {
                function e() {
                    this.rcon = [0, 1, 2, 4, 8, 16, 32, 64, 128, 27, 54],
                    this.subMix = [new Uint32Array(256), new Uint32Array(256), new Uint32Array(256), new Uint32Array(256)],
                    this.invSubMix = [new Uint32Array(256), new Uint32Array(256), new Uint32Array(256), new Uint32Array(256)],
                    this.sBox = new Uint32Array(256),
                    this.invSBox = new Uint32Array(256),
                    this.key = new Uint32Array(0),
                    this.initTable()
                }
                return e.prototype.uint8ArrayToUint32Array_ = function(e) {
                    for (var t = new DataView(e), i = new Uint32Array(4), s = 0; s < 4; s++)
                        i[s] = t.getUint32(4 * s);
                    return i
                }
                ,
                e.prototype.initTable = function() {
                    var e = this.sBox
                      , t = this.invSBox
                      , i = this.subMix
                      , s = i[0]
                      , r = i[1]
                      , o = i[2]
                      , n = i[3]
                      , a = this.invSubMix
                      , l = a[0]
                      , d = a[1]
                      , u = a[2]
                      , h = a[3]
                      , c = new Uint32Array(256)
                      , f = 0
                      , p = 0
                      , v = 0;
                    for (v = 0; v < 256; v++)
                        c[v] = v < 128 ? v << 1 : v << 1 ^ 283;
                    for (v = 0; v < 256; v++) {
                        var g = p ^ p << 1 ^ p << 2 ^ p << 3 ^ p << 4;
                        g = g >>> 8 ^ 255 & g ^ 99,
                        e[f] = g,
                        t[g] = f;
                        var y = c[f]
                          , m = c[y]
                          , _ = c[m]
                          , b = 257 * c[g] ^ 16843008 * g;
                        s[f] = b << 24 | b >>> 8,
                        r[f] = b << 16 | b >>> 16,
                        o[f] = b << 8 | b >>> 24,
                        n[f] = b,
                        b = 16843009 * _ ^ 65537 * m ^ 257 * y ^ 16843008 * f,
                        l[g] = b << 24 | b >>> 8,
                        d[g] = b << 16 | b >>> 16,
                        u[g] = b << 8 | b >>> 24,
                        h[g] = b,
                        f ? (f = y ^ c[c[c[_ ^ y]]],
                        p ^= c[c[p]]) : f = p = 1
                    }
                }
                ,
                e.prototype.expandKey = function(e) {
                    for (var t = this.uint8ArrayToUint32Array_(e), i = !0, s = 0; s < t.length && i; )
                        i = t[s] === this.key[s],
                        s++;
                    if (!i) {
                        this.key = t;
                        var r = this.keySize = t.length;
                        if (4 !== r && 6 !== r && 8 !== r)
                            throw new Error("Invalid aes key size=" + r);
                        var o, n, a, l, d = this.ksRows = 4 * (r + 6 + 1), u = this.keySchedule = new Uint32Array(d), h = this.invKeySchedule = new Uint32Array(d), c = this.sBox, f = this.rcon, p = this.invSubMix, v = p[0], g = p[1], y = p[2], m = p[3];
                        for (o = 0; o < d; o++)
                            o < r ? a = u[o] = t[o] : (l = a,
                            o % r == 0 ? (l = l << 8 | l >>> 24,
                            l = c[l >>> 24] << 24 | c[l >>> 16 & 255] << 16 | c[l >>> 8 & 255] << 8 | c[255 & l],
                            l ^= f[o / r | 0] << 24) : r > 6 && o % r == 4 && (l = c[l >>> 24] << 24 | c[l >>> 16 & 255] << 16 | c[l >>> 8 & 255] << 8 | c[255 & l]),
                            u[o] = a = (u[o - r] ^ l) >>> 0);
                        for (n = 0; n < d; n++)
                            o = d - n,
                            l = 3 & n ? u[o] : u[o - 4],
                            h[n] = n < 4 || o <= 4 ? l : v[c[l >>> 24]] ^ g[c[l >>> 16 & 255]] ^ y[c[l >>> 8 & 255]] ^ m[c[255 & l]],
                            h[n] = h[n] >>> 0
                    }
                }
                ,
                e.prototype.networkToHostOrderSwap = function(e) {
                    return e << 24 | (65280 & e) << 8 | (16711680 & e) >> 8 | e >>> 24
                }
                ,
                e.prototype.decrypt = function(e, t, i, r) {
                    for (var o, n, a, l, d, u, h, c, f, p, v, g, y, m, _ = this.keySize + 6, b = this.invKeySchedule, E = this.invSBox, S = this.invSubMix, T = S[0], w = S[1], P = S[2], C = S[3], A = this.uint8ArrayToUint32Array_(i), k = A[0], L = A[1], D = A[2], R = A[3], B = new Int32Array(e), x = new Int32Array(B.length), I = this.networkToHostOrderSwap; t < B.length; ) {
                        for (f = I(B[t]),
                        p = I(B[t + 1]),
                        v = I(B[t + 2]),
                        g = I(B[t + 3]),
                        d = f ^ b[0],
                        u = g ^ b[1],
                        h = v ^ b[2],
                        c = p ^ b[3],
                        y = 4,
                        m = 1; m < _; m++)
                            o = T[d >>> 24] ^ w[u >> 16 & 255] ^ P[h >> 8 & 255] ^ C[255 & c] ^ b[y],
                            n = T[u >>> 24] ^ w[h >> 16 & 255] ^ P[c >> 8 & 255] ^ C[255 & d] ^ b[y + 1],
                            a = T[h >>> 24] ^ w[c >> 16 & 255] ^ P[d >> 8 & 255] ^ C[255 & u] ^ b[y + 2],
                            l = T[c >>> 24] ^ w[d >> 16 & 255] ^ P[u >> 8 & 255] ^ C[255 & h] ^ b[y + 3],
                            d = o,
                            u = n,
                            h = a,
                            c = l,
                            y += 4;
                        o = E[d >>> 24] << 24 ^ E[u >> 16 & 255] << 16 ^ E[h >> 8 & 255] << 8 ^ E[255 & c] ^ b[y],
                        n = E[u >>> 24] << 24 ^ E[h >> 16 & 255] << 16 ^ E[c >> 8 & 255] << 8 ^ E[255 & d] ^ b[y + 1],
                        a = E[h >>> 24] << 24 ^ E[c >> 16 & 255] << 16 ^ E[d >> 8 & 255] << 8 ^ E[255 & u] ^ b[y + 2],
                        l = E[c >>> 24] << 24 ^ E[d >> 16 & 255] << 16 ^ E[u >> 8 & 255] << 8 ^ E[255 & h] ^ b[y + 3],
                        y += 3,
                        x[t] = I(o ^ k),
                        x[t + 1] = I(l ^ L),
                        x[t + 2] = I(a ^ D),
                        x[t + 3] = I(n ^ R),
                        k = f,
                        L = p,
                        D = v,
                        R = g,
                        t += 4
                    }
                    return r ? s(x.buffer) : x.buffer
                }
                ,
                e.prototype.destroy = function() {
                    this.key = undefined,
                    this.keySize = undefined,
                    this.ksRows = undefined,
                    this.sBox = undefined,
                    this.invSBox = undefined,
                    this.subMix = undefined,
                    this.invSubMix = undefined,
                    this.keySchedule = undefined,
                    this.invKeySchedule = undefined,
                    this.rcon = undefined
                }
                ,
                e
            }();
            t["default"] = r
        },
        "./src/crypt/decrypter.js": function(e, t, i) {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            });
            var s = i("./src/crypt/aes-crypto.js")
              , r = i("./src/crypt/fast-aes-key.js")
              , o = i("./src/crypt/aes-decryptor.js")
              , n = i("./src/errors.js")
              , a = i("./src/utils/logger.js")
              , l = i("./src/events.js")
              , d = i("./src/utils/get-self-scope.js")
              , u = d.getSelfScope()
              , h = function() {
                function e(e, t, i) {
                    var s = (void 0 === i ? {} : i).removePKCS7Padding
                      , r = void 0 === s || s;
                    if (this.logEnabled = !0,
                    this.observer = e,
                    this.config = t,
                    this.removePKCS7Padding = r,
                    r)
                        try {
                            var o = u.crypto;
                            o && (this.subtle = o.subtle || o.webkitSubtle)
                        } catch (n) {}
                    this.disableWebCrypto = !this.subtle
                }
                return e.prototype.isSync = function() {
                    return this.disableWebCrypto && this.config.enableSoftwareAES
                }
                ,
                e.prototype.decrypt = function(e, t, i, n) {
                    var l = this;
                    if (this.disableWebCrypto && this.config.enableSoftwareAES) {
                        this.logEnabled && (a.logger.log("JS AES decrypt"),
                        this.logEnabled = !1);
                        var d = this.decryptor;
                        d || (this.decryptor = d = new o["default"]),
                        d.expandKey(t),
                        n(d.decrypt(e, 0, i, this.removePKCS7Padding))
                    } else {
                        this.logEnabled && (a.logger.log("WebCrypto AES decrypt"),
                        this.logEnabled = !1);
                        var u = this.subtle;
                        this.key !== t && (this.key = t,
                        this.fastAesKey = new r["default"](u,t)),
                        this.fastAesKey.expandKey().then(function(r) {
                            new s["default"](u,i).decrypt(e, r)["catch"](function(s) {
                                l.onWebCryptoError(s, e, t, i, n)
                            }).then(function(e) {
                                n(e)
                            })
                        })["catch"](function(s) {
                            l.onWebCryptoError(s, e, t, i, n)
                        })
                    }
                }
                ,
                e.prototype.onWebCryptoError = function(e, t, i, s, r) {
                    this.config.enableSoftwareAES ? (a.logger.log("WebCrypto Error, disable WebCrypto API"),
                    this.disableWebCrypto = !0,
                    this.logEnabled = !0,
                    this.decrypt(t, i, s, r)) : (a.logger.error("decrypting error : " + e.message),
                    this.observer.trigger(l["default"].ERROR, {
                        type: n.ErrorTypes.MEDIA_ERROR,
                        details: n.ErrorDetails.FRAG_DECRYPT_ERROR,
                        fatal: !0,
                        reason: e.message
                    }))
                }
                ,
                e.prototype.destroy = function() {
                    var e = this.decryptor;
                    e && (e.destroy(),
                    this.decryptor = undefined)
                }
                ,
                e
            }();
            t["default"] = h
        },
        "./src/crypt/fast-aes-key.js": function(e, t, i) {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            });
            var s = function() {
                function e(e, t) {
                    this.subtle = e,
                    this.key = t
                }
                return e.prototype.expandKey = function() {
                    return this.subtle.importKey("raw", this.key, {
                        name: "AES-CBC"
                    }, !1, ["encrypt", "decrypt"])
                }
                ,
                e
            }();
            t["default"] = s
        },
        "./src/demux/aacdemuxer.js": function(e, t, i) {
            "use strict";
            (function(e) {
                Object.defineProperty(t, "__esModule", {
                    value: !0
                });
                var s = i("./src/demux/adts.js")
                  , r = i("./src/utils/logger.js")
                  , o = i("./src/demux/id3.js")
                  , n = function() {
                    function t(e, t, i) {
                        this.observer = e,
                        this.config = i,
                        this.remuxer = t
                    }
                    return t.prototype.resetInitSegment = function(e, t, i, s) {
                        this._audioTrack = {
                            container: "audio/adts",
                            type: "audio",
                            id: 0,
                            sequenceNumber: 0,
                            isAAC: !0,
                            samples: [],
                            len: 0,
                            manifestCodec: t,
                            duration: s,
                            inputTimeScale: 9e4
                        }
                    }
                    ,
                    t.prototype.resetTimeStamp = function() {}
                    ,
                    t.probe = function(e) {
                        if (!e)
                            return !1;
                        for (var t = o["default"].getID3Data(e, 0) || [], i = t.length, n = e.length; i < n; i++)
                            if (s.probe(e, i))
                                return r.logger.log("ADTS sync word found !"),
                                !0;
                        return !1
                    }
                    ,
                    t.prototype.append = function(t, i, n, a) {
                        for (var l = this._audioTrack, d = o["default"].getID3Data(t, 0) || [], u = o["default"].getTimeStamp(d), h = e.isFinite(u) ? 90 * u : 9e4 * i, c = 0, f = h, p = t.length, v = d.length, g = [{
                            pts: f,
                            dts: f,
                            data: d
                        }]; v < p - 1; )
                            if (s.isHeader(t, v) && v + 5 < p) {
                                s.initTrackConfig(l, this.observer, t, v, l.manifestCodec);
                                var y = s.appendFrame(l, t, v, h, c);
                                if (!y) {
                                    r.logger.log("Unable to parse AAC frame");
                                    break
                                }
                                v += y.length,
                                f = y.sample.pts,
                                c++
                            } else
                                o["default"].isHeader(t, v) ? (d = o["default"].getID3Data(t, v),
                                g.push({
                                    pts: f,
                                    dts: f,
                                    data: d
                                }),
                                v += d.length) : v++;
                        this.remuxer.remux(l, {
                            samples: []
                        }, {
                            samples: g,
                            inputTimeScale: 9e4
                        }, {
                            samples: []
                        }, i, n, a)
                    }
                    ,
                    t.prototype.destroy = function() {}
                    ,
                    t
                }();
                t["default"] = n
            }
            ).call(this, i("./src/polyfills/number.js").Number)
        },
        "./src/demux/adts.js": function(e, t, i) {
            "use strict";
            function s(e, t, i, s) {
                var r, o, n, a, l, d = navigator.userAgent.toLowerCase(), u = s, h = [96e3, 88200, 64e3, 48e3, 44100, 32e3, 24e3, 22050, 16e3, 12e3, 11025, 8e3, 7350];
                return r = 1 + ((192 & t[i + 2]) >>> 6),
                (o = (60 & t[i + 2]) >>> 2) > h.length - 1 ? void e.trigger(v["default"].ERROR, {
                    type: p.ErrorTypes.MEDIA_ERROR,
                    details: p.ErrorDetails.FRAG_PARSING_ERROR,
                    fatal: !0,
                    reason: "invalid ADTS sampling index:" + o
                }) : (a = (1 & t[i + 2]) << 2,
                a |= (192 & t[i + 3]) >>> 6,
                f.logger.log("manifest codec:" + s + ",ADTS data:type:" + r + ",sampleingIndex:" + o + "[" + h[o] + "Hz],channelConfig:" + a),
                /firefox/i.test(d) ? o >= 6 ? (r = 5,
                l = new Array(4),
                n = o - 3) : (r = 2,
                l = new Array(2),
                n = o) : -1 !== d.indexOf("android") ? (r = 2,
                l = new Array(2),
                n = o) : (r = 5,
                l = new Array(4),
                s && (-1 !== s.indexOf("mp4a.40.29") || -1 !== s.indexOf("mp4a.40.5")) || !s && o >= 6 ? n = o - 3 : ((s && -1 !== s.indexOf("mp4a.40.2") && (o >= 6 && 1 === a || /vivaldi/i.test(d)) || !s && 1 === a) && (r = 2,
                l = new Array(2)),
                n = o)),
                l[0] = r << 3,
                l[0] |= (14 & o) >> 1,
                l[1] |= (1 & o) << 7,
                l[1] |= a << 3,
                5 === r && (l[1] |= (14 & n) >> 1,
                l[2] = (1 & n) << 7,
                l[2] |= 8,
                l[3] = 0),
                {
                    config: l,
                    samplerate: h[o],
                    channelCount: a,
                    codec: "mp4a.40." + r,
                    manifestCodec: u
                })
            }
            function r(e, t) {
                return 255 === e[t] && 240 == (246 & e[t + 1])
            }
            function o(e, t) {
                return 1 & e[t + 1] ? 7 : 9
            }
            function n(e, t) {
                return (3 & e[t + 3]) << 11 | e[t + 4] << 3 | (224 & e[t + 5]) >>> 5
            }
            function a(e, t) {
                return !!(t + 1 < e.length && r(e, t))
            }
            function l(e, t) {
                if (t + 1 < e.length && r(e, t)) {
                    var i = o(e, t)
                      , s = i;
                    t + 5 < e.length && (s = n(e, t));
                    var a = t + s;
                    if (a === e.length || a + 1 < e.length && r(e, a))
                        return !0
                }
                return !1
            }
            function d(e, t, i, r, o) {
                if (!e.samplerate) {
                    var n = s(t, i, r, o);
                    e.config = n.config,
                    e.samplerate = n.samplerate,
                    e.channelCount = n.channelCount,
                    e.codec = n.codec,
                    e.manifestCodec = n.manifestCodec,
                    f.logger.log("parsed codec:" + e.codec + ",rate:" + n.samplerate + ",nb channel:" + n.channelCount)
                }
            }
            function u(e) {
                return 9216e4 / e
            }
            function h(e, t, i, s, r) {
                var a, l, d, u = e.length;
                return a = o(e, t),
                l = n(e, t),
                l -= a,
                l > 0 && t + a + l <= u ? (d = i + s * r,
                {
                    headerLength: a,
                    frameLength: l,
                    stamp: d
                }) : undefined
            }
            function c(e, t, i, s, r) {
                var o = u(e.samplerate)
                  , n = h(t, i, s, r, o);
                if (n) {
                    var a = n.stamp
                      , l = n.headerLength
                      , d = n.frameLength
                      , c = {
                        unit: t.subarray(i + l, i + l + d),
                        pts: a,
                        dts: a
                    };
                    return e.samples.push(c),
                    e.len += d,
                    {
                        sample: c,
                        length: d + l
                    }
                }
                return undefined
            }
            Object.defineProperty(t, "__esModule", {
                value: !0
            });
            var f = i("./src/utils/logger.js")
              , p = i("./src/errors.js")
              , v = i("./src/events.js");
            t.getAudioConfig = s,
            t.isHeaderPattern = r,
            t.getHeaderLength = o,
            t.getFullFrameLength = n,
            t.isHeader = a,
            t.probe = l,
            t.initTrackConfig = d,
            t.getFrameDuration = u,
            t.parseFrameHeader = h,
            t.appendFrame = c
        },
        "./src/demux/demuxer-inline.js": function(e, t, i) {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            });
            var s, r = i("./src/events.js"), o = i("./src/errors.js"), n = i("./src/crypt/decrypter.js"), a = i("./src/demux/aacdemuxer.js"), l = i("./src/demux/mp4demuxer.js"), d = i("./src/demux/tsdemuxer.js"), u = i("./src/demux/mp3demuxer.js"), h = i("./src/remux/mp4-remuxer.js"), c = i("./src/remux/passthrough-remuxer.js"), f = i("./src/utils/get-self-scope.js"), p = i("./src/utils/logger.js"), v = f.getSelfScope();
            try {
                s = v.performance.now.bind(v.performance)
            } catch (y) {
                p.logger.debug("Unable to use Performance API on this environment"),
                s = v.Date.now
            }
            var g = function() {
                function e(e, t, i, s) {
                    this.observer = e,
                    this.typeSupported = t,
                    this.config = i,
                    this.vendor = s
                }
                return e.prototype.destroy = function() {
                    var e = this.demuxer;
                    e && e.destroy()
                }
                ,
                e.prototype.push = function(e, t, i, o, a, l, d, u, h, c, f, p) {
                    var v = this;
                    if (e.byteLength > 0 && null != t && null != t.key && "AES-128" === t.method) {
                        var g = this.decrypter;
                        null == g && (g = this.decrypter = new n["default"](this.observer,this.config));
                        var y = s();
                        g.decrypt(e, t.key.buffer, t.iv.buffer, function(e) {
                            var n = s();
                            v.observer.trigger(r["default"].FRAG_DECRYPTED, {
                                stats: {
                                    tstart: y,
                                    tdecrypt: n
                                }
                            }),
                            v.pushDecrypted(new Uint8Array(e), t, new Uint8Array(i), o, a, l, d, u, h, c, f, p)
                        })
                    } else
                        this.pushDecrypted(new Uint8Array(e), t, new Uint8Array(i), o, a, l, d, u, h, c, f, p)
                }
                ,
                e.prototype.pushDecrypted = function(e, t, i, s, n, f, p, v, g, y, m, _) {
                    var b = this.demuxer;
                    if (!b || (p || v) && !this.probe(e)) {
                        for (var E = this.observer, S = this.typeSupported, T = this.config, w = [{
                            demux: d["default"],
                            remux: h["default"]
                        }, {
                            demux: l["default"],
                            remux: c["default"]
                        }, {
                            demux: a["default"],
                            remux: h["default"]
                        }, {
                            demux: u["default"],
                            remux: h["default"]
                        }], P = 0, C = w.length; P < C; P++) {
                            var A = w[P]
                              , k = A.demux.probe;
                            if (k(e)) {
                                var L = this.remuxer = new A.remux(E,T,S,this.vendor);
                                b = new A.demux(E,L,T,S),
                                this.probe = k;
                                break
                            }
                        }
                        if (!b)
                            return void E.trigger(r["default"].ERROR, {
                                type: o.ErrorTypes.MEDIA_ERROR,
                                details: o.ErrorDetails.FRAG_PARSING_ERROR,
                                fatal: !0,
                                reason: "no demux matching with content found"
                            });
                        this.demuxer = b
                    }
                    var D = this.remuxer;
                    (p || v) && (b.resetInitSegment(i, s, n, y),
                    D.resetInitSegment()),
                    p && (b.resetTimeStamp(_),
                    D.resetTimeStamp(_)),
                    "function" == typeof b.setDecryptData && b.setDecryptData(t),
                    b.append(e, f, g, m)
                }
                ,
                e
            }();
            t["default"] = g
        },
        "./src/demux/demuxer-worker.js": function(e, t, i) {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            });
            var s = i("./src/demux/demuxer-inline.js")
              , r = i("./src/events.js")
              , o = i("./src/utils/logger.js")
              , n = i("./node_modules/node-libs-browser/node_modules/events/events.js")
              , a = function(e) {
                var t = new n.EventEmitter;
                t.trigger = function(e) {
                    for (var i = [], s = 1; s < arguments.length; s++)
                        i[s - 1] = arguments[s];
                    t.emit.apply(t, [e, e].concat(i))
                }
                ,
                t.off = function(e) {
                    for (var i = [], s = 1; s < arguments.length; s++)
                        i[s - 1] = arguments[s];
                    t.removeListener.apply(t, [e].concat(i))
                }
                ;
                var i = function(t, i) {
                    e.postMessage({
                        event: t,
                        data: i
                    })
                };
                e.addEventListener("message", function(r) {
                    var n = r.data;
                    switch (n.cmd) {
                    case "init":
                        var a = JSON.parse(n.config);
                        e.demuxer = new s["default"](t,n.typeSupported,a,n.vendor),
                        o.enableLogs(a.debug),
                        i("init", null);
                        break;
                    case "demux":
                        e.demuxer.push(n.data, n.decryptdata, n.initSegment, n.audioCodec, n.videoCodec, n.timeOffset, n.discontinuity, n.trackSwitch, n.contiguous, n.duration, n.accurateTimeOffset, n.defaultInitPTS)
                    }
                }),
                t.on(r["default"].FRAG_DECRYPTED, i),
                t.on(r["default"].FRAG_PARSING_INIT_SEGMENT, i),
                t.on(r["default"].FRAG_PARSED, i),
                t.on(r["default"].ERROR, i),
                t.on(r["default"].FRAG_PARSING_METADATA, i),
                t.on(r["default"].FRAG_PARSING_USERDATA, i),
                t.on(r["default"].INIT_PTS_FOUND, i),
                t.on(r["default"].FRAG_PARSING_DATA, function(t, i) {
                    var s = []
                      , r = {
                        event: t,
                        data: i
                    };
                    i.data1 && (r.data1 = i.data1.buffer,
                    s.push(i.data1.buffer),
                    delete i.data1),
                    i.data2 && (r.data2 = i.data2.buffer,
                    s.push(i.data2.buffer),
                    delete i.data2),
                    e.postMessage(r, s)
                })
            };
            t["default"] = a
        },
        "./src/demux/demuxer.js": function(e, t, i) {
            "use strict";
            (function(e) {
                Object.defineProperty(t, "__esModule", {
                    value: !0
                });
                var s = i("./node_modules/webworkify-webpack/index.js")
                  , r = i("./src/events.js")
                  , o = i("./src/demux/demuxer-inline.js")
                  , n = i("./src/utils/logger.js")
                  , a = i("./src/errors.js")
                  , l = i("./src/utils/mediasource-helper.js")
                  , d = i("./src/utils/get-self-scope.js")
                  , u = i("./src/observer.js")
                  , h = d.getSelfScope()
                  , c = l.getMediaSource()
                  , f = function() {
                    function t(e, t) {
                        var i = this;
                        this.hls = e,
                        this.id = t;
                        var l = this.observer = new u.Observer
                          , d = e.config
                          , f = function(t, s) {
                            s = s || {},
                            s.frag = i.frag,
                            s.id = i.id,
                            e.trigger(t, s)
                        };
                        l.on(r["default"].FRAG_DECRYPTED, f),
                        l.on(r["default"].FRAG_PARSING_INIT_SEGMENT, f),
                        l.on(r["default"].FRAG_PARSING_DATA, f),
                        l.on(r["default"].FRAG_PARSED, f),
                        l.on(r["default"].ERROR, f),
                        l.on(r["default"].FRAG_PARSING_METADATA, f),
                        l.on(r["default"].FRAG_PARSING_USERDATA, f),
                        l.on(r["default"].INIT_PTS_FOUND, f);
                        var p = {
                            mp4: c.isTypeSupported("video/mp4"),
                            mpeg: c.isTypeSupported("audio/mpeg"),
                            mp3: c.isTypeSupported('audio/mp4; codecs="mp3"')
                        }
                          , v = navigator.vendor;
                        if (d.enableWorker && "undefined" != typeof Worker) {
                            n.logger.log("demuxing in webworker");
                            var g = void 0;
                            try {
                                g = this.w = s("./src/demux/demuxer-worker.js"),
                                this.onwmsg = this.onWorkerMessage.bind(this),
                                g.addEventListener("message", this.onwmsg),
                                g.onerror = function(t) {
                                    e.trigger(r["default"].ERROR, {
                                        type: a.ErrorTypes.OTHER_ERROR,
                                        details: a.ErrorDetails.INTERNAL_EXCEPTION,
                                        fatal: !0,
                                        event: "demuxerWorker",
                                        err: {
                                            message: t.message + " (" + t.filename + ":" + t.lineno + ")"
                                        }
                                    })
                                }
                                ,
                                g.postMessage({
                                    cmd: "init",
                                    typeSupported: p,
                                    vendor: v,
                                    id: t,
                                    config: JSON.stringify(d)
                                })
                            } catch (y) {
                                n.logger.warn("Error in worker:", y),
                                n.logger.error("Error while initializing DemuxerWorker, fallback on DemuxerInline"),
                                g && h.URL.revokeObjectURL(g.objectURL),
                                this.demuxer = new o["default"](l,p,d,v),
                                this.w = undefined
                            }
                        } else
                            this.demuxer = new o["default"](l,p,d,v)
                    }
                    return t.prototype.destroy = function() {
                        var e = this.w;
                        if (e)
                            e.removeEventListener("message", this.onwmsg),
                            e.terminate(),
                            this.w = null;
                        else {
                            var t = this.demuxer;
                            t && (t.destroy(),
                            this.demuxer = null)
                        }
                        var i = this.observer;
                        i && (i.removeAllListeners(),
                        this.observer = null)
                    }
                    ,
                    t.prototype.push = function(t, i, s, r, o, a, l, d) {
                        var u = this.w
                          , h = e.isFinite(o.startDTS) ? o.startDTS : o.start
                          , c = o.decryptdata
                          , f = this.frag
                          , p = !(f && o.cc === f.cc)
                          , v = !(f && o.level === f.level)
                          , g = f && o.sn === f.sn + 1
                          , y = !v && g;
                        if (p && n.logger.log(this.id + ":discontinuity detected"),
                        v && n.logger.log(this.id + ":switch detected"),
                        this.frag = o,
                        u)
                            u.postMessage({
                                cmd: "demux",
                                data: t,
                                decryptdata: c,
                                initSegment: i,
                                audioCodec: s,
                                videoCodec: r,
                                timeOffset: h,
                                discontinuity: p,
                                trackSwitch: v,
                                contiguous: y,
                                duration: a,
                                accurateTimeOffset: l,
                                defaultInitPTS: d
                            }, t instanceof ArrayBuffer ? [t] : []);
                        else {
                            var m = this.demuxer;
                            m && m.push(t, c, i, s, r, h, p, v, y, a, l, d)
                        }
                    }
                    ,
                    t.prototype.onWorkerMessage = function(e) {
                        var t = e.data
                          , i = this.hls;
                        switch (t.event) {
                        case "init":
                            h.URL.revokeObjectURL(this.w.objectURL);
                            break;
                        case r["default"].FRAG_PARSING_DATA:
                            t.data.data1 = new Uint8Array(t.data1),
                            t.data2 && (t.data.data2 = new Uint8Array(t.data2));
                        default:
                            t.data = t.data || {},
                            t.data.frag = this.frag,
                            t.data.id = this.id,
                            i.trigger(t.event, t.data)
                        }
                    }
                    ,
                    t
                }();
                t["default"] = f
            }
            ).call(this, i("./src/polyfills/number.js").Number)
        },
        "./src/demux/exp-golomb.js": function(e, t, i) {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            });
            var s = i("./src/utils/logger.js")
              , r = function() {
                function e(e) {
                    this.data = e,
                    this.bytesAvailable = e.byteLength,
                    this.word = 0,
                    this.bitsAvailable = 0
                }
                return e.prototype.loadWord = function() {
                    var e = this.data
                      , t = this.bytesAvailable
                      , i = e.byteLength - t
                      , s = new Uint8Array(4)
                      , r = Math.min(4, t);
                    if (0 === r)
                        throw new Error("no bytes available");
                    s.set(e.subarray(i, i + r)),
                    this.word = new DataView(s.buffer).getUint32(0),
                    this.bitsAvailable = 8 * r,
                    this.bytesAvailable -= r
                }
                ,
                e.prototype.skipBits = function(e) {
                    var t;
                    this.bitsAvailable > e ? (this.word <<= e,
                    this.bitsAvailable -= e) : (e -= this.bitsAvailable,
                    t = e >> 3,
                    e -= t >> 3,
                    this.bytesAvailable -= t,
                    this.loadWord(),
                    this.word <<= e,
                    this.bitsAvailable -= e)
                }
                ,
                e.prototype.readBits = function(e) {
                    var t = Math.min(this.bitsAvailable, e)
                      , i = this.word >>> 32 - t;
                    return e > 32 && s.logger.error("Cannot read more than 32 bits at a time"),
                    this.bitsAvailable -= t,
                    this.bitsAvailable > 0 ? this.word <<= t : this.bytesAvailable > 0 && this.loadWord(),
                    t = e - t,
                    t > 0 && this.bitsAvailable ? i << t | this.readBits(t) : i
                }
                ,
                e.prototype.skipLZ = function() {
                    var e;
                    for (e = 0; e < this.bitsAvailable; ++e)
                        if (0 != (this.word & 2147483648 >>> e))
                            return this.word <<= e,
                            this.bitsAvailable -= e,
                            e;
                    return this.loadWord(),
                    e + this.skipLZ()
                }
                ,
                e.prototype.skipUEG = function() {
                    this.skipBits(1 + this.skipLZ())
                }
                ,
                e.prototype.skipEG = function() {
                    this.skipBits(1 + this.skipLZ())
                }
                ,
                e.prototype.readUEG = function() {
                    var e = this.skipLZ();
                    return this.readBits(e + 1) - 1
                }
                ,
                e.prototype.readEG = function() {
                    var e = this.readUEG();
                    return 1 & e ? 1 + e >>> 1 : -1 * (e >>> 1)
                }
                ,
                e.prototype.readBoolean = function() {
                    return 1 === this.readBits(1)
                }
                ,
                e.prototype.readUByte = function() {
                    return this.readBits(8)
                }
                ,
                e.prototype.readUShort = function() {
                    return this.readBits(16)
                }
                ,
                e.prototype.readUInt = function() {
                    return this.readBits(32)
                }
                ,
                e.prototype.skipScalingList = function(e) {
                    var t, i, s = 8, r = 8;
                    for (t = 0; t < e; t++)
                        0 !== r && (i = this.readEG(),
                        r = (s + i + 256) % 256),
                        s = 0 === r ? s : r
                }
                ,
                e.prototype.readSPS = function() {
                    var e, t, i, s, r, o, n, a = 0, l = 0, d = 0, u = 0, h = this.readUByte.bind(this), c = this.readBits.bind(this), f = this.readUEG.bind(this), p = this.readBoolean.bind(this), v = this.skipBits.bind(this), g = this.skipEG.bind(this), y = this.skipUEG.bind(this), m = this.skipScalingList.bind(this);
                    if (h(),
                    e = h(),
                    c(5),
                    v(3),
                    h(),
                    y(),
                    100 === e || 110 === e || 122 === e || 244 === e || 44 === e || 83 === e || 86 === e || 118 === e || 128 === e) {
                        var _ = f();
                        if (3 === _ && v(1),
                        y(),
                        y(),
                        v(1),
                        p())
                            for (o = 3 !== _ ? 8 : 12,
                            n = 0; n < o; n++)
                                p() && m(n < 6 ? 16 : 64)
                    }
                    y();
                    var b = f();
                    if (0 === b)
                        f();
                    else if (1 === b)
                        for (v(1),
                        g(),
                        g(),
                        t = f(),
                        n = 0; n < t; n++)
                            g();
                    y(),
                    v(1),
                    i = f(),
                    s = f(),
                    r = c(1),
                    0 === r && v(1),
                    v(1),
                    p() && (a = f(),
                    l = f(),
                    d = f(),
                    u = f());
                    var E = [1, 1];
                    if (p() && p()) {
                        switch (h()) {
                        case 1:
                            E = [1, 1];
                            break;
                        case 2:
                            E = [12, 11];
                            break;
                        case 3:
                            E = [10, 11];
                            break;
                        case 4:
                            E = [16, 11];
                            break;
                        case 5:
                            E = [40, 33];
                            break;
                        case 6:
                            E = [24, 11];
                            break;
                        case 7:
                            E = [20, 11];
                            break;
                        case 8:
                            E = [32, 11];
                            break;
                        case 9:
                            E = [80, 33];
                            break;
                        case 10:
                            E = [18, 11];
                            break;
                        case 11:
                            E = [15, 11];
                            break;
                        case 12:
                            E = [64, 33];
                            break;
                        case 13:
                            E = [160, 99];
                            break;
                        case 14:
                            E = [4, 3];
                            break;
                        case 15:
                            E = [3, 2];
                            break;
                        case 16:
                            E = [2, 1];
                            break;
                        case 255:
                            E = [h() << 8 | h(), h() << 8 | h()]
                        }
                    }
                    return {
                        width: Math.ceil(16 * (i + 1) - 2 * a - 2 * l),
                        height: (2 - r) * (s + 1) * 16 - (r ? 2 : 4) * (d + u),
                        pixelRatio: E
                    }
                }
                ,
                e.prototype.readSliceType = function() {
                    return this.readUByte(),
                    this.readUEG(),
                    this.readUEG()
                }
                ,
                e
            }();
            t["default"] = r
        },
        "./src/demux/id3.js": function(e, t, i) {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            });
            var s = function() {
                function e() {}
                return e.isHeader = function(e, t) {
                    return t + 10 <= e.length && 73 === e[t] && 68 === e[t + 1] && 51 === e[t + 2] && e[t + 3] < 255 && e[t + 4] < 255 && e[t + 6] < 128 && e[t + 7] < 128 && e[t + 8] < 128 && e[t + 9] < 128
                }
                ,
                e.isFooter = function(e, t) {
                    return t + 10 <= e.length && 51 === e[t] && 68 === e[t + 1] && 73 === e[t + 2] && e[t + 3] < 255 && e[t + 4] < 255 && e[t + 6] < 128 && e[t + 7] < 128 && e[t + 8] < 128 && e[t + 9] < 128
                }
                ,
                e.getID3Data = function(t, i) {
                    for (var s = i, r = 0; e.isHeader(t, i); ) {
                        r += 10;
                        r += e._readSize(t, i + 6),
                        e.isFooter(t, i + 10) && (r += 10),
                        i += r
                    }
                    return r > 0 ? t.subarray(s, s + r) : undefined
                }
                ,
                e._readSize = function(e, t) {
                    var i = 0;
                    return i = (127 & e[t]) << 21,
                    i |= (127 & e[t + 1]) << 14,
                    i |= (127 & e[t + 2]) << 7,
                    i |= 127 & e[t + 3]
                }
                ,
                e.getTimeStamp = function(t) {
                    for (var i = e.getID3Frames(t), s = 0; s < i.length; s++) {
                        var r = i[s];
                        if (e.isTimeStampFrame(r))
                            return e._readTimeStamp(r)
                    }
                    return undefined
                }
                ,
                e.isTimeStampFrame = function(e) {
                    return e && "PRIV" === e.key && "com.apple.streaming.transportStreamTimestamp" === e.info
                }
                ,
                e._getFrameData = function(t) {
                    var i = String.fromCharCode(t[0], t[1], t[2], t[3])
                      , s = e._readSize(t, 4);
                    return {
                        type: i,
                        size: s,
                        data: t.subarray(10, 10 + s)
                    }
                }
                ,
                e.getID3Frames = function(t) {
                    for (var i = 0, s = []; e.isHeader(t, i); ) {
                        var r = e._readSize(t, i + 6);
                        i += 10;
                        for (var o = i + r; i + 8 < o; ) {
                            var n = e._getFrameData(t.subarray(i))
                              , a = e._decodeFrame(n);
                            a && s.push(a),
                            i += n.size + 10
                        }
                        e.isFooter(t, i) && (i += 10)
                    }
                    return s
                }
                ,
                e._decodeFrame = function(t) {
                    return "PRIV" === t.type ? e._decodePrivFrame(t) : "T" === t.type[0] ? e._decodeTextFrame(t) : "W" === t.type[0] ? e._decodeURLFrame(t) : undefined
                }
                ,
                e._readTimeStamp = function(e) {
                    if (8 === e.data.byteLength) {
                        var t = new Uint8Array(e.data)
                          , i = 1 & t[3]
                          , s = (t[4] << 23) + (t[5] << 15) + (t[6] << 7) + t[7];
                        return s /= 45,
                        i && (s += 47721858.84),
                        Math.round(s)
                    }
                    return undefined
                }
                ,
                e._decodePrivFrame = function(t) {
                    if (t.size < 2)
                        return undefined;
                    var i = e._utf8ArrayToStr(t.data, !0)
                      , s = new Uint8Array(t.data.subarray(i.length + 1));
                    return {
                        key: t.type,
                        info: i,
                        data: s.buffer
                    }
                }
                ,
                e._decodeTextFrame = function(t) {
                    if (t.size < 2)
                        return undefined;
                    if ("TXXX" === t.type) {
                        var i = 1
                          , s = e._utf8ArrayToStr(t.data.subarray(i));
                        i += s.length + 1;
                        var r = e._utf8ArrayToStr(t.data.subarray(i));
                        return {
                            key: t.type,
                            info: s,
                            data: r
                        }
                    }
                    var o = e._utf8ArrayToStr(t.data.subarray(1));
                    return {
                        key: t.type,
                        data: o
                    }
                }
                ,
                e._decodeURLFrame = function(t) {
                    if ("WXXX" === t.type) {
                        if (t.size < 2)
                            return undefined;
                        var i = 1
                          , s = e._utf8ArrayToStr(t.data.subarray(i));
                        i += s.length + 1;
                        var r = e._utf8ArrayToStr(t.data.subarray(i));
                        return {
                            key: t.type,
                            info: s,
                            data: r
                        }
                    }
                    var o = e._utf8ArrayToStr(t.data);
                    return {
                        key: t.type,
                        data: o
                    }
                }
                ,
                e._utf8ArrayToStr = function(e, t) {
                    void 0 === t && (t = !1);
                    for (var i, s, r, o = e.length, n = "", a = 0; a < o; ) {
                        if (0 === (i = e[a++]) && t)
                            return n;
                        if (0 !== i && 3 !== i)
                            switch (i >> 4) {
                            case 0:
                            case 1:
                            case 2:
                            case 3:
                            case 4:
                            case 5:
                            case 6:
                            case 7:
                                n += String.fromCharCode(i);
                                break;
                            case 12:
                            case 13:
                                s = e[a++],
                                n += String.fromCharCode((31 & i) << 6 | 63 & s);
                                break;
                            case 14:
                                s = e[a++],
                                r = e[a++],
                                n += String.fromCharCode((15 & i) << 12 | (63 & s) << 6 | (63 & r) << 0)
                            }
                    }
                    return n
                }
                ,
                e
            }()
              , r = s._utf8ArrayToStr;
            t.utf8ArrayToStr = r,
            t["default"] = s
        },
        "./src/demux/mp3demuxer.js": function(e, t, i) {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            });
            var s = i("./src/demux/id3.js")
              , r = i("./src/utils/logger.js")
              , o = i("./src/demux/mpegaudio.js")
              , n = function() {
                function e(e, t, i) {
                    this.observer = e,
                    this.config = i,
                    this.remuxer = t
                }
                return e.prototype.resetInitSegment = function(e, t, i, s) {
                    this._audioTrack = {
                        container: "audio/mpeg",
                        type: "audio",
                        id: -1,
                        sequenceNumber: 0,
                        isAAC: !1,
                        samples: [],
                        len: 0,
                        manifestCodec: t,
                        duration: s,
                        inputTimeScale: 9e4
                    }
                }
                ,
                e.prototype.resetTimeStamp = function() {}
                ,
                e.probe = function(e) {
                    var t, i, n = s["default"].getID3Data(e, 0);
                    if (n && s["default"].getTimeStamp(n) !== undefined)
                        for (t = n.length,
                        i = Math.min(e.length - 1, t + 100); t < i; t++)
                            if (o["default"].probe(e, t))
                                return r.logger.log("MPEG Audio sync word found !"),
                                !0;
                    return !1
                }
                ,
                e.prototype.append = function(e, t, i, r) {
                    for (var n = s["default"].getID3Data(e, 0), a = s["default"].getTimeStamp(n), l = a ? 90 * a : 9e4 * t, d = n.length, u = e.length, h = 0, c = 0, f = this._audioTrack, p = [{
                        pts: l,
                        dts: l,
                        data: n
                    }]; d < u; )
                        if (o["default"].isHeader(e, d)) {
                            var v = o["default"].appendFrame(f, e, d, l, h);
                            if (!v)
                                break;
                            d += v.length,
                            c = v.sample.pts,
                            h++
                        } else
                            s["default"].isHeader(e, d) ? (n = s["default"].getID3Data(e, d),
                            p.push({
                                pts: c,
                                dts: c,
                                data: n
                            }),
                            d += n.length) : d++;
                    this.remuxer.remux(f, {
                        samples: []
                    }, {
                        samples: p,
                        inputTimeScale: 9e4
                    }, {
                        samples: []
                    }, t, i, r)
                }
                ,
                e.prototype.destroy = function() {}
                ,
                e
            }();
            t["default"] = n
        },
        "./src/demux/mp4demuxer.js": function(e, t, i) {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            });
            var s = i("./src/utils/logger.js")
              , r = i("./src/events.js")
              , o = Math.pow(2, 32) - 1
              , n = function() {
                function e(e, t) {
                    this.observer = e,
                    this.remuxer = t
                }
                return e.prototype.resetTimeStamp = function(e) {
                    this.initPTS = e
                }
                ,
                e.prototype.resetInitSegment = function(t, i, s, o) {
                    if (t && t.byteLength) {
                        var n = this.initData = e.parseInitSegment(t);
                        null == i && (i = "mp4a.40.5"),
                        null == s && (s = "avc1.42e01e");
                        var a = {};
                        n.audio && n.video ? a.audiovideo = {
                            container: "video/mp4",
                            codec: i + "," + s,
                            initSegment: o ? t : null
                        } : (n.audio && (a.audio = {
                            container: "audio/mp4",
                            codec: i,
                            initSegment: o ? t : null
                        }),
                        n.video && (a.video = {
                            container: "video/mp4",
                            codec: s,
                            initSegment: o ? t : null
                        })),
                        this.observer.trigger(r["default"].FRAG_PARSING_INIT_SEGMENT, {
                            tracks: a
                        })
                    } else
                        i && (this.audioCodec = i),
                        s && (this.videoCodec = s)
                }
                ,
                e.probe = function(t) {
                    return e.findBox({
                        data: t,
                        start: 0,
                        end: Math.min(t.length, 16384)
                    }, ["moof"]).length > 0
                }
                ,
                e.bin2str = function(e) {
                    return String.fromCharCode.apply(null, e)
                }
                ,
                e.readUint16 = function(e, t) {
                    e.data && (t += e.start,
                    e = e.data);
                    var i = e[t] << 8 | e[t + 1];
                    return i < 0 ? 65536 + i : i
                }
                ,
                e.readUint32 = function(e, t) {
                    e.data && (t += e.start,
                    e = e.data);
                    var i = e[t] << 24 | e[t + 1] << 16 | e[t + 2] << 8 | e[t + 3];
                    return i < 0 ? 4294967296 + i : i
                }
                ,
                e.writeUint32 = function(e, t, i) {
                    e.data && (t += e.start,
                    e = e.data),
                    e[t] = i >> 24,
                    e[t + 1] = i >> 16 & 255,
                    e[t + 2] = i >> 8 & 255,
                    e[t + 3] = 255 & i
                }
                ,
                e.findBox = function(t, i) {
                    var s, r, o, n, a, l, d, u = [];
                    if (t.data ? (l = t.start,
                    n = t.end,
                    t = t.data) : (l = 0,
                    n = t.byteLength),
                    !i.length)
                        return null;
                    for (s = l; s < n; )
                        r = e.readUint32(t, s),
                        o = e.bin2str(t.subarray(s + 4, s + 8)),
                        d = r > 1 ? s + r : n,
                        o === i[0] && (1 === i.length ? u.push({
                            data: t,
                            start: s + 8,
                            end: d
                        }) : (a = e.findBox({
                            data: t,
                            start: s + 8,
                            end: d
                        }, i.slice(1)),
                        a.length && (u = u.concat(a)))),
                        s = d;
                    return u
                }
                ,
                e.parseSegmentIndex = function(t) {
                    var i, s = e.findBox(t, ["moov"])[0], r = s ? s.end : null, o = 0, n = e.findBox(t, ["sidx"]);
                    if (!n || !n[0])
                        return null;
                    i = [],
                    n = n[0];
                    var a = n.data[0];
                    o = 0 === a ? 8 : 16;
                    var l = e.readUint32(n, o);
                    o += 4;
                    o += 0 === a ? 8 : 16,
                    o += 2;
                    var d = n.end + 0
                      , u = e.readUint16(n, o);
                    o += 2;
                    for (var h = 0; h < u; h++) {
                        var c = o
                          , f = e.readUint32(n, c);
                        c += 4;
                        var p = 2147483647 & f;
                        if (1 === (2147483648 & f) >>> 31)
                            return void console.warn("SIDX has hierarchical references (not supported)");
                        var v = e.readUint32(n, c);
                        c += 4,
                        i.push({
                            referenceSize: p,
                            subsegmentDuration: v,
                            info: {
                                duration: v / l,
                                start: d,
                                end: d + p - 1
                            }
                        }),
                        d += p,
                        c += 4,
                        o = c
                    }
                    return {
                        earliestPresentationTime: 0,
                        timescale: l,
                        version: a,
                        referencesCount: u,
                        references: i,
                        moovEndOffset: r
                    }
                }
                ,
                e.parseInitSegment = function(t) {
                    var i = [];
                    return e.findBox(t, ["moov", "trak"]).forEach(function(t) {
                        var r = e.findBox(t, ["tkhd"])[0];
                        if (r) {
                            var o = r.data[r.start]
                              , n = 0 === o ? 12 : 20
                              , a = e.readUint32(r, n)
                              , l = e.findBox(t, ["mdia", "mdhd"])[0];
                            if (l) {
                                o = l.data[l.start],
                                n = 0 === o ? 12 : 20;
                                var d = e.readUint32(l, n)
                                  , u = e.findBox(t, ["mdia", "hdlr"])[0];
                                if (u) {
                                    var h = e.bin2str(u.data.subarray(u.start + 8, u.start + 12))
                                      , c = {
                                        soun: "audio",
                                        vide: "video"
                                    }[h];
                                    if (c) {
                                        var f = e.findBox(t, ["mdia", "minf", "stbl", "stsd"]);
                                        if (f.length) {
                                            f = f[0];
                                            var p = e.bin2str(f.data.subarray(f.start + 12, f.start + 16));
                                            s.logger.log("MP4Demuxer:" + c + ":" + p + " found")
                                        }
                                        i[a] = {
                                            timescale: d,
                                            type: c
                                        },
                                        i[c] = {
                                            timescale: d,
                                            id: a
                                        }
                                    }
                                }
                            }
                        }
                    }),
                    i
                }
                ,
                e.getStartDTS = function(t, i) {
                    var s, r, o;
                    return s = e.findBox(i, ["moof", "traf"]),
                    r = [].concat.apply([], s.map(function(i) {
                        return e.findBox(i, ["tfhd"]).map(function(s) {
                            var r, o;
                            return r = e.readUint32(s, 4),
                            o = t[r].timescale || 9e4,
                            e.findBox(i, ["tfdt"]).map(function(t) {
                                var i, s;
                                return i = t.data[t.start],
                                s = e.readUint32(t, 4),
                                1 === i && (s *= Math.pow(2, 32),
                                s += e.readUint32(t, 8)),
                                s
                            })[0] / o
                        })
                    })),
                    o = Math.min.apply(null, r),
                    isFinite(o) ? o : 0
                }
                ,
                e.offsetStartDTS = function(t, i, s) {
                    e.findBox(i, ["moof", "traf"]).map(function(i) {
                        return e.findBox(i, ["tfhd"]).map(function(r) {
                            var n = e.readUint32(r, 4)
                              , a = t[n].timescale || 9e4;
                            e.findBox(i, ["tfdt"]).map(function(t) {
                                var i = t.data[t.start]
                                  , r = e.readUint32(t, 4);
                                if (0 === i)
                                    e.writeUint32(t, 4, r - s * a);
                                else {
                                    r *= Math.pow(2, 32),
                                    r += e.readUint32(t, 8),
                                    r -= s * a,
                                    r = Math.max(r, 0);
                                    var n = Math.floor(r / (o + 1))
                                      , l = Math.floor(r % (o + 1));
                                    e.writeUint32(t, 4, n),
                                    e.writeUint32(t, 8, l)
                                }
                            })
                        })
                    })
                }
                ,
                e.prototype.append = function(t, i, s, o) {
                    var n = this.initData;
                    n || (this.resetInitSegment(t, this.audioCodec, this.videoCodec, !1),
                    n = this.initData);
                    var a, l = this.initPTS;
                    if (l === undefined) {
                        var d = e.getStartDTS(n, t);
                        this.initPTS = l = d - i,
                        this.observer.trigger(r["default"].INIT_PTS_FOUND, {
                            initPTS: l
                        })
                    }
                    e.offsetStartDTS(n, t, l),
                    a = e.getStartDTS(n, t),
                    this.remuxer.remux(n.audio, n.video, null, null, a, s, o, t)
                }
                ,
                e.prototype.destroy = function() {}
                ,
                e
            }();
            t["default"] = n
        },
        "./src/demux/mpegaudio.js": function(e, t, i) {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            });
            var s = {
                BitratesMap: [32, 64, 96, 128, 160, 192, 224, 256, 288, 320, 352, 384, 416, 448, 32, 48, 56, 64, 80, 96, 112, 128, 160, 192, 224, 256, 320, 384, 32, 40, 48, 56, 64, 80, 96, 112, 128, 160, 192, 224, 256, 320, 32, 48, 56, 64, 80, 96, 112, 128, 144, 160, 176, 192, 224, 256, 8, 16, 24, 32, 40, 48, 56, 64, 80, 96, 112, 128, 144, 160],
                SamplingRateMap: [44100, 48e3, 32e3, 22050, 24e3, 16e3, 11025, 12e3, 8e3],
                SamplesCoefficients: [[0, 72, 144, 12], [0, 0, 0, 0], [0, 72, 144, 12], [0, 144, 144, 12]],
                BytesInSlot: [0, 1, 1, 4],
                appendFrame: function(e, t, i, s, r) {
                    if (i + 24 > t.length)
                        return undefined;
                    var o = this.parseHeader(t, i);
                    if (o && i + o.frameLength <= t.length) {
                        var n = 9e4 * o.samplesPerFrame / o.sampleRate
                          , a = s + r * n
                          , l = {
                            unit: t.subarray(i, i + o.frameLength),
                            pts: a,
                            dts: a
                        };
                        return e.config = [],
                        e.channelCount = o.channelCount,
                        e.samplerate = o.sampleRate,
                        e.samples.push(l),
                        e.len += o.frameLength,
                        {
                            sample: l,
                            length: o.frameLength
                        }
                    }
                    return undefined
                },
                parseHeader: function(e, t) {
                    var i = e[t + 1] >> 3 & 3
                      , r = e[t + 1] >> 1 & 3
                      , o = e[t + 2] >> 4 & 15
                      , n = e[t + 2] >> 2 & 3
                      , a = e[t + 2] >> 1 & 1;
                    if (1 !== i && 0 !== o && 15 !== o && 3 !== n) {
                        var l = 3 === i ? 3 - r : 3 === r ? 3 : 4
                          , d = 1e3 * s.BitratesMap[14 * l + o - 1]
                          , u = 3 === i ? 0 : 2 === i ? 1 : 2
                          , h = s.SamplingRateMap[3 * u + n]
                          , c = e[t + 3] >> 6 == 3 ? 1 : 2
                          , f = s.SamplesCoefficients[i][r]
                          , p = s.BytesInSlot[r]
                          , v = 8 * f * p;
                        return {
                            sampleRate: h,
                            channelCount: c,
                            frameLength: parseInt(f * d / h + a, 10) * p,
                            samplesPerFrame: v
                        }
                    }
                    return undefined
                },
                isHeaderPattern: function(e, t) {
                    return 255 === e[t] && 224 == (224 & e[t + 1]) && 0 != (6 & e[t + 1])
                },
                isHeader: function(e, t) {
                    return !!(t + 1 < e.length && this.isHeaderPattern(e, t))
                },
                probe: function(e, t) {
                    if (t + 1 < e.length && this.isHeaderPattern(e, t)) {
                        var i = this.parseHeader(e, t)
                          , s = 4;
                        i && i.frameLength && (s = i.frameLength);
                        var r = t + s;
                        if (r === e.length || r + 1 < e.length && this.isHeaderPattern(e, r))
                            return !0
                    }
                    return !1
                }
            };
            t["default"] = s
        },
        "./src/demux/sample-aes.js": function(e, t, i) {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            });
            var s = i("./src/crypt/decrypter.js")
              , r = function() {
                function e(e, t, i, r) {
                    this.decryptdata = i,
                    this.discardEPB = r,
                    this.decrypter = new s["default"](e,t,{
                        removePKCS7Padding: !1
                    })
                }
                return e.prototype.decryptBuffer = function(e, t) {
                    this.decrypter.decrypt(e, this.decryptdata.key.buffer, this.decryptdata.iv.buffer, t)
                }
                ,
                e.prototype.decryptAacSample = function(e, t, i, s) {
                    var r = e[t].unit
                      , o = r.subarray(16, r.length - r.length % 16)
                      , n = o.buffer.slice(o.byteOffset, o.byteOffset + o.length)
                      , a = this;
                    this.decryptBuffer(n, function(o) {
                        o = new Uint8Array(o),
                        r.set(o, 16),
                        s || a.decryptAacSamples(e, t + 1, i)
                    })
                }
                ,
                e.prototype.decryptAacSamples = function(e, t, i) {
                    for (; ; t++) {
                        if (t >= e.length)
                            return void i();
                        if (!(e[t].unit.length < 32)) {
                            var s = this.decrypter.isSync();
                            if (this.decryptAacSample(e, t, i, s),
                            !s)
                                return
                        }
                    }
                }
                ,
                e.prototype.getAvcEncryptedData = function(e) {
                    for (var t = 16 * Math.floor((e.length - 48) / 160) + 16, i = new Int8Array(t), s = 0, r = 32; r <= e.length - 16; r += 160,
                    s += 16)
                        i.set(e.subarray(r, r + 16), s);
                    return i
                }
                ,
                e.prototype.getAvcDecryptedUnit = function(e, t) {
                    t = new Uint8Array(t);
                    for (var i = 0, s = 32; s <= e.length - 16; s += 160,
                    i += 16)
                        e.set(t.subarray(i, i + 16), s);
                    return e
                }
                ,
                e.prototype.decryptAvcSample = function(e, t, i, s, r, o) {
                    var n = this.discardEPB(r.data)
                      , a = this.getAvcEncryptedData(n)
                      , l = this;
                    this.decryptBuffer(a.buffer, function(a) {
                        r.data = l.getAvcDecryptedUnit(n, a),
                        o || l.decryptAvcSamples(e, t, i + 1, s)
                    })
                }
                ,
                e.prototype.decryptAvcSamples = function(e, t, i, s) {
                    for (; ; t++,
                    i = 0) {
                        if (t >= e.length)
                            return void s();
                        for (var r = e[t].units; !(i >= r.length); i++) {
                            var o = r[i];
                            if (!(o.length <= 48 || 1 !== o.type && 5 !== o.type)) {
                                var n = this.decrypter.isSync();
                                if (this.decryptAvcSample(e, t, i, s, o, n),
                                !n)
                                    return
                            }
                        }
                    }
                }
                ,
                e
            }();
            t["default"] = r
        },
        "./src/demux/tsdemuxer.js": function(e, t, i) {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            });
            var s = i("./src/demux/adts.js")
              , r = i("./src/demux/mpegaudio.js")
              , o = i("./src/events.js")
              , n = i("./src/demux/exp-golomb.js")
              , a = i("./src/demux/sample-aes.js")
              , l = i("./src/utils/logger.js")
              , d = i("./src/errors.js")
              , u = {
                video: 1,
                audio: 2,
                id3: 3,
                text: 4
            }
              , h = function() {
                function e(e, t, i, s) {
                    this.observer = e,
                    this.config = i,
                    this.typeSupported = s,
                    this.remuxer = t,
                    this.sampleAes = null
                }
                return e.prototype.setDecryptData = function(e) {
                    null != e && null != e.key && "SAMPLE-AES" === e.method ? this.sampleAes = new a["default"](this.observer,this.config,e,this.discardEPB) : this.sampleAes = null
                }
                ,
                e.probe = function(t) {
                    var i = e._syncOffset(t);
                    return !(i < 0) && (i && l.logger.warn("MPEG2-TS detected but first sync word found @ offset " + i + ", junk ahead ?"),
                    !0)
                }
                ,
                e._syncOffset = function(e) {
                    for (var t = Math.min(1e3, e.length - 564), i = 0; i < t; ) {
                        if (71 === e[i] && 71 === e[i + 188] && 71 === e[i + 376])
                            return i;
                        i++
                    }
                    return -1
                }
                ,
                e.createTrack = function(e, t) {
                    return {
                        container: "video" === e || "audio" === e ? "video/mp2t" : undefined,
                        type: e,
                        id: u[e],
                        pid: -1,
                        inputTimeScale: 9e4,
                        sequenceNumber: 0,
                        samples: [],
                        len: 0,
                        dropped: "video" === e ? 0 : undefined,
                        isAAC: "audio" === e || undefined,
                        duration: "audio" === e ? t : undefined
                    }
                }
                ,
                e.prototype.resetInitSegment = function(t, i, s, r) {
                    this.pmtParsed = !1,
                    this._pmtId = -1,
                    this._avcTrack = e.createTrack("video", r),
                    this._audioTrack = e.createTrack("audio", r),
                    this._id3Track = e.createTrack("id3", r),
                    this._txtTrack = e.createTrack("text", r),
                    this.aacOverFlow = null,
                    this.aacLastPTS = null,
                    this.avcSample = null,
                    this.audioCodec = i,
                    this.videoCodec = s,
                    this._duration = r
                }
                ,
                e.prototype.resetTimeStamp = function() {}
                ,
                e.prototype.append = function(t, i, s, r) {
                    var n, a, u, h, c, f = t.length, p = !1;
                    this.contiguous = s;
                    var v = this.pmtParsed
                      , g = this._avcTrack
                      , y = this._audioTrack
                      , m = this._id3Track
                      , _ = g.pid
                      , b = y.pid
                      , E = m.pid
                      , S = this._pmtId
                      , T = g.pesData
                      , w = y.pesData
                      , P = m.pesData
                      , C = this._parsePAT
                      , A = this._parsePMT
                      , k = this._parsePES
                      , L = this._parseAVCPES.bind(this)
                      , D = this._parseAACPES.bind(this)
                      , R = this._parseMPEGPES.bind(this)
                      , B = this._parseID3PES.bind(this)
                      , x = e._syncOffset(t);
                    for (f -= (f + x) % 188,
                    n = x; n < f; n += 188)
                        if (71 === t[n]) {
                            if (a = !!(64 & t[n + 1]),
                            u = ((31 & t[n + 1]) << 8) + t[n + 2],
                            (48 & t[n + 3]) >> 4 > 1) {
                                if ((h = n + 5 + t[n + 4]) === n + 188)
                                    continue
                            } else
                                h = n + 4;
                            switch (u) {
                            case _:
                                a && (T && (c = k(T)) && c.pts !== undefined && L(c, !1),
                                T = {
                                    data: [],
                                    size: 0
                                }),
                                T && (T.data.push(t.subarray(h, n + 188)),
                                T.size += n + 188 - h);
                                break;
                            case b:
                                a && (w && (c = k(w)) && c.pts !== undefined && (y.isAAC ? D(c) : R(c)),
                                w = {
                                    data: [],
                                    size: 0
                                }),
                                w && (w.data.push(t.subarray(h, n + 188)),
                                w.size += n + 188 - h);
                                break;
                            case E:
                                a && (P && (c = k(P)) && c.pts !== undefined && B(c),
                                P = {
                                    data: [],
                                    size: 0
                                }),
                                P && (P.data.push(t.subarray(h, n + 188)),
                                P.size += n + 188 - h);
                                break;
                            case 0:
                                a && (h += t[h] + 1),
                                S = this._pmtId = C(t, h);
                                break;
                            case S:
                                a && (h += t[h] + 1);
                                var I = A(t, h, !0 === this.typeSupported.mpeg || !0 === this.typeSupported.mp3, null != this.sampleAes);
                                _ = I.avc,
                                _ > 0 && (g.pid = _),
                                b = I.audio,
                                b > 0 && (y.pid = b,
                                y.isAAC = I.isAAC),
                                E = I.id3,
                                E > 0 && (m.pid = E),
                                p && !v && (l.logger.log("reparse from beginning"),
                                p = !1,
                                n = x - 188),
                                v = this.pmtParsed = !0;
                                break;
                            case 17:
                            case 8191:
                                break;
                            default:
                                p = !0
                            }
                        } else
                            this.observer.trigger(o["default"].ERROR, {
                                type: d.ErrorTypes.MEDIA_ERROR,
                                details: d.ErrorDetails.FRAG_PARSING_ERROR,
                                fatal: !1,
                                reason: "TS packet did not start with 0x47"
                            });
                    T && (c = k(T)) && c.pts !== undefined ? (L(c, !0),
                    g.pesData = null) : g.pesData = T,
                    w && (c = k(w)) && c.pts !== undefined ? (y.isAAC ? D(c) : R(c),
                    y.pesData = null) : (w && w.size && l.logger.log("last AAC PES packet truncated,might overlap between fragments"),
                    y.pesData = w),
                    P && (c = k(P)) && c.pts !== undefined ? (B(c),
                    m.pesData = null) : m.pesData = P,
                    null == this.sampleAes ? this.remuxer.remux(y, g, m, this._txtTrack, i, s, r) : this.decryptAndRemux(y, g, m, this._txtTrack, i, s, r)
                }
                ,
                e.prototype.decryptAndRemux = function(e, t, i, s, r, o, n) {
                    if (e.samples && e.isAAC) {
                        var a = this;
                        this.sampleAes.decryptAacSamples(e.samples, 0, function() {
                            a.decryptAndRemuxAvc(e, t, i, s, r, o, n)
                        })
                    } else
                        this.decryptAndRemuxAvc(e, t, i, s, r, o, n)
                }
                ,
                e.prototype.decryptAndRemuxAvc = function(e, t, i, s, r, o, n) {
                    if (t.samples) {
                        var a = this;
                        this.sampleAes.decryptAvcSamples(t.samples, 0, 0, function() {
                            a.remuxer.remux(e, t, i, s, r, o, n)
                        })
                    } else
                        this.remuxer.remux(e, t, i, s, r, o, n)
                }
                ,
                e.prototype.destroy = function() {
                    this._initPTS = this._initDTS = undefined,
                    this._duration = 0
                }
                ,
                e.prototype._parsePAT = function(e, t) {
                    return (31 & e[t + 10]) << 8 | e[t + 11]
                }
                ,
                e.prototype._parsePMT = function(e, t, i, s) {
                    var r, o, n, a, d = {
                        audio: -1,
                        avc: -1,
                        id3: -1,
                        isAAC: !0
                    };
                    for (r = (15 & e[t + 1]) << 8 | e[t + 2],
                    o = t + 3 + r - 4,
                    n = (15 & e[t + 10]) << 8 | e[t + 11],
                    t += 12 + n; t < o; ) {
                        switch (a = (31 & e[t + 1]) << 8 | e[t + 2],
                        e[t]) {
                        case 207:
                            if (!s) {
                                l.logger.log("unkown stream type:" + e[t]);
                                break
                            }
                        case 15:
                            -1 === d.audio && (d.audio = a);
                            break;
                        case 21:
                            -1 === d.id3 && (d.id3 = a);
                            break;
                        case 219:
                            if (!s) {
                                l.logger.log("unkown stream type:" + e[t]);
                                break
                            }
                        case 27:
                            -1 === d.avc && (d.avc = a);
                            break;
                        case 3:
                        case 4:
                            i ? -1 === d.audio && (d.audio = a,
                            d.isAAC = !1) : l.logger.log("MPEG audio found, not supported in this browser for now");
                            break;
                        case 36:
                            l.logger.warn("HEVC stream type found, not supported for now");
                            break;
                        default:
                            l.logger.log("unkown stream type:" + e[t])
                        }
                        t += 5 + ((15 & e[t + 3]) << 8 | e[t + 4])
                    }
                    return d
                }
                ,
                e.prototype._parsePES = function(e) {
                    var t, i, s, r, o, n, a, d, u = 0, h = e.data;
                    if (!e || 0 === e.size)
                        return null;
                    for (; h[0].length < 19 && h.length > 1; ) {
                        var c = new Uint8Array(h[0].length + h[1].length);
                        c.set(h[0]),
                        c.set(h[1], h[0].length),
                        h[0] = c,
                        h.splice(1, 1)
                    }
                    if (t = h[0],
                    1 === (t[0] << 16) + (t[1] << 8) + t[2]) {
                        if ((s = (t[4] << 8) + t[5]) && s > e.size - 6)
                            return null;
                        i = t[7],
                        192 & i && (n = 536870912 * (14 & t[9]) + 4194304 * (255 & t[10]) + 16384 * (254 & t[11]) + 128 * (255 & t[12]) + (254 & t[13]) / 2,
                        n > 4294967295 && (n -= 8589934592),
                        64 & i ? (a = 536870912 * (14 & t[14]) + 4194304 * (255 & t[15]) + 16384 * (254 & t[16]) + 128 * (255 & t[17]) + (254 & t[18]) / 2,
                        a > 4294967295 && (a -= 8589934592),
                        n - a > 54e5 && (l.logger.warn(Math.round((n - a) / 9e4) + "s delta between PTS and DTS, align them"),
                        n = a)) : a = n),
                        r = t[8],
                        d = r + 9,
                        e.size -= d,
                        o = new Uint8Array(e.size);
                        for (var f = 0, p = h.length; f < p; f++) {
                            t = h[f];
                            var v = t.byteLength;
                            if (d) {
                                if (d > v) {
                                    d -= v;
                                    continue
                                }
                                t = t.subarray(d),
                                v -= d,
                                d = 0
                            }
                            o.set(t, u),
                            u += v
                        }
                        return s && (s -= r + 3),
                        {
                            data: o,
                            pts: n,
                            dts: a,
                            len: s
                        }
                    }
                    return null
                }
                ,
                e.prototype.pushAccesUnit = function(e, t) {
                    if (e.units.length && e.frame) {
                        var i = t.samples
                          , s = i.length;
                        !this.config.forceKeyFrameOnDiscontinuity || !0 === e.key || t.sps && (s || this.contiguous) ? (e.id = s,
                        i.push(e)) : t.dropped++
                    }
                    e.debug.length && l.logger.log(e.pts + "/" + e.dts + ":" + e.debug)
                }
                ,
                e.prototype._parseAVCPES = function(e, t) {
                    var i, s, r, o = this, a = this._avcTrack, l = this._parseAVCNALu(e.data), d = this.avcSample, u = !1, h = this.pushAccesUnit.bind(this), c = function(e, t, i, s) {
                        return {
                            key: e,
                            pts: t,
                            dts: i,
                            units: [],
                            debug: s
                        }
                    };
                    e.data = null,
                    d && l.length && !a.audFound && (h(d, a),
                    d = this.avcSample = c(!1, e.pts, e.dts, "")),
                    l.forEach(function(t) {
                        switch (t.type) {
                        case 1:
                            s = !0,
                            d || (d = o.avcSample = c(!0, e.pts, e.dts, "")),
                            d.frame = !0;
                            var l = t.data;
                            if (u && l.length > 4) {
                                var f = new n["default"](l).readSliceType();
                                2 !== f && 4 !== f && 7 !== f && 9 !== f || (d.key = !0)
                            }
                            break;
                        case 5:
                            s = !0,
                            d || (d = o.avcSample = c(!0, e.pts, e.dts, "")),
                            d.key = !0,
                            d.frame = !0;
                            break;
                        case 6:
                            s = !0,
                            i = new n["default"](o.discardEPB(t.data)),
                            i.readUByte();
                            for (var p = 0, v = 0, g = !1, y = 0; !g && i.bytesAvailable > 1; ) {
                                p = 0;
                                do {
                                    y = i.readUByte(),
                                    p += y
                                } while (255 === y);
                                v = 0;
                                do {
                                    y = i.readUByte(),
                                    v += y
                                } while (255 === y);
                                if (4 === p && 0 !== i.bytesAvailable) {
                                    g = !0;
                                    if (181 === i.readUByte()) {
                                        if (49 === i.readUShort()) {
                                            if (1195456820 === i.readUInt()) {
                                                if (3 === i.readUByte()) {
                                                    var m = i.readUByte()
                                                      , _ = i.readUByte()
                                                      , b = 31 & m
                                                      , E = [m, _];
                                                    for (r = 0; r < b; r++)
                                                        E.push(i.readUByte()),
                                                        E.push(i.readUByte()),
                                                        E.push(i.readUByte());
                                                    o._insertSampleInOrder(o._txtTrack.samples, {
                                                        type: 3,
                                                        pts: e.pts,
                                                        bytes: E
                                                    })
                                                }
                                            }
                                        }
                                    }
                                } else if (v < i.bytesAvailable)
                                    for (r = 0; r < v; r++)
                                        i.readUByte()
                            }
                            break;
                        case 7:
                            if (s = !0,
                            u = !0,
                            !a.sps) {
                                i = new n["default"](t.data);
                                var S = i.readSPS();
                                a.width = S.width,
                                a.height = S.height,
                                a.pixelRatio = S.pixelRatio,
                                a.sps = [t.data],
                                a.duration = o._duration;
                                var T = t.data.subarray(1, 4)
                                  , w = "avc1.";
                                for (r = 0; r < 3; r++) {
                                    var P = T[r].toString(16);
                                    P.length < 2 && (P = "0" + P),
                                    w += P
                                }
                                a.codec = w
                            }
                            break;
                        case 8:
                            s = !0,
                            a.pps || (a.pps = [t.data]);
                            break;
                        case 9:
                            s = !1,
                            a.audFound = !0,
                            d && h(d, a),
                            d = o.avcSample = c(!1, e.pts, e.dts, "");
                            break;
                        case 12:
                            s = !1;
                            break;
                        default:
                            s = !1,
                            d && (d.debug += "unknown NAL " + t.type + " ")
                        }
                        if (d && s) {
                            d.units.push(t)
                        }
                    }),
                    t && d && (h(d, a),
                    this.avcSample = null)
                }
                ,
                e.prototype._insertSampleInOrder = function(e, t) {
                    var i = e.length;
                    if (i > 0) {
                        if (t.pts >= e[i - 1].pts)
                            e.push(t);
                        else
                            for (var s = i - 1; s >= 0; s--)
                                if (t.pts < e[s].pts) {
                                    e.splice(s, 0, t);
                                    break
                                }
                    } else
                        e.push(t)
                }
                ,
                e.prototype._getLastNalUnit = function() {
                    var e, t = this.avcSample;
                    if (!t || 0 === t.units.length) {
                        var i = this._avcTrack
                          , s = i.samples;
                        t = s[s.length - 1]
                    }
                    if (t) {
                        var r = t.units;
                        e = r[r.length - 1]
                    }
                    return e
                }
                ,
                e.prototype._parseAVCNALu = function(e) {
                    var t, i, s, r, o, n = 0, a = e.byteLength, l = this._avcTrack, d = l.naluState || 0, u = d, h = [], c = -1;
                    for (-1 === d && (c = 0,
                    o = 31 & e[0],
                    d = 0,
                    n = 1); n < a; )
                        if (t = e[n++],
                        d)
                            if (1 !== d)
                                if (t)
                                    if (1 === t) {
                                        if (c >= 0)
                                            s = {
                                                data: e.subarray(c, n - d - 1),
                                                type: o
                                            },
                                            h.push(s);
                                        else {
                                            var f = this._getLastNalUnit();
                                            if (f && (u && n <= 4 - u && f.state && (f.data = f.data.subarray(0, f.data.byteLength - u)),
                                            (i = n - d - 1) > 0)) {
                                                var p = new Uint8Array(f.data.byteLength + i);
                                                p.set(f.data, 0),
                                                p.set(e.subarray(0, i), f.data.byteLength),
                                                f.data = p
                                            }
                                        }
                                        n < a ? (r = 31 & e[n],
                                        c = n,
                                        o = r,
                                        d = 0) : d = -1
                                    } else
                                        d = 0;
                                else
                                    d = 3;
                            else
                                d = t ? 0 : 2;
                        else
                            d = t ? 0 : 1;
                    if (c >= 0 && d >= 0 && (s = {
                        data: e.subarray(c, a),
                        type: o,
                        state: d
                    },
                    h.push(s)),
                    0 === h.length) {
                        var f = this._getLastNalUnit();
                        if (f) {
                            var p = new Uint8Array(f.data.byteLength + e.byteLength);
                            p.set(f.data, 0),
                            p.set(e, f.data.byteLength),
                            f.data = p
                        }
                    }
                    return l.naluState = d,
                    h
                }
                ,
                e.prototype.discardEPB = function(e) {
                    for (var t, i, s = e.byteLength, r = [], o = 1; o < s - 2; )
                        0 === e[o] && 0 === e[o + 1] && 3 === e[o + 2] ? (r.push(o + 2),
                        o += 2) : o++;
                    if (0 === r.length)
                        return e;
                    t = s - r.length,
                    i = new Uint8Array(t);
                    var n = 0;
                    for (o = 0; o < t; n++,
                    o++)
                        n === r[0] && (n++,
                        r.shift()),
                        i[o] = e[n];
                    return i
                }
                ,
                e.prototype._parseAACPES = function(e) {
                    var t, i, r, n, a, u = this._audioTrack, h = e.data, c = e.pts, f = this.aacOverFlow, p = this.aacLastPTS;
                    if (f) {
                        var v = new Uint8Array(f.byteLength + h.byteLength);
                        v.set(f, 0),
                        v.set(h, f.byteLength),
                        h = v
                    }
                    for (r = 0,
                    a = h.length; r < a - 1 && !s.isHeader(h, r); r++)
                        ;
                    if (r) {
                        var g = void 0
                          , y = void 0;
                        if (r < a - 1 ? (g = "AAC PES did not start with ADTS header,offset:" + r,
                        y = !1) : (g = "no ADTS header found in AAC PES",
                        y = !0),
                        l.logger.warn("parsing error:" + g),
                        this.observer.trigger(o["default"].ERROR, {
                            type: d.ErrorTypes.MEDIA_ERROR,
                            details: d.ErrorDetails.FRAG_PARSING_ERROR,
                            fatal: y,
                            reason: g
                        }),
                        y)
                            return
                    }
                    if (s.initTrackConfig(u, this.observer, h, r, this.audioCodec),
                    i = 0,
                    t = s.getFrameDuration(u.samplerate),
                    f && p) {
                        var m = p + t;
                        Math.abs(m - c) > 1 && (l.logger.log("AAC: align PTS for overlapping frames by " + Math.round((m - c) / 90)),
                        c = m)
                    }
                    for (; r < a; )
                        if (s.isHeader(h, r) && r + 5 < a) {
                            var _ = s.appendFrame(u, h, r, c, i);
                            if (!_)
                                break;
                            r += _.length,
                            n = _.sample.pts,
                            i++
                        } else
                            r++;
                    f = r < a ? h.subarray(r, a) : null,
                    this.aacOverFlow = f,
                    this.aacLastPTS = n
                }
                ,
                e.prototype._parseMPEGPES = function(e) {
                    for (var t = e.data, i = t.length, s = 0, o = 0, n = e.pts; o < i; )
                        if (r["default"].isHeader(t, o)) {
                            var a = r["default"].appendFrame(this._audioTrack, t, o, n, s);
                            if (!a)
                                break;
                            o += a.length,
                            s++
                        } else
                            o++
                }
                ,
                e.prototype._parseID3PES = function(e) {
                    this._id3Track.samples.push(e)
                }
                ,
                e
            }();
            t["default"] = h
        },
        "./src/errors.js": function(e, t, i) {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            }),
            t.ErrorTypes = {
                NETWORK_ERROR: "networkError",
                MEDIA_ERROR: "mediaError",
                KEY_SYSTEM_ERROR: "keySystemError",
                MUX_ERROR: "muxError",
                OTHER_ERROR: "otherError"
            },
            t.ErrorDetails = {
                KEY_SYSTEM_NO_KEYS: "keySystemNoKeys",
                KEY_SYSTEM_NO_ACCESS: "keySystemNoAccess",
                KEY_SYSTEM_NO_SESSION: "keySystemNoSession",
                KEY_SYSTEM_LICENSE_REQUEST_FAILED: "keySystemLicenseRequestFailed",
                MANIFEST_LOAD_ERROR: "manifestLoadError",
                MANIFEST_LOAD_TIMEOUT: "manifestLoadTimeOut",
                MANIFEST_PARSING_ERROR: "manifestParsingError",
                MANIFEST_INCOMPATIBLE_CODECS_ERROR: "manifestIncompatibleCodecsError",
                LEVEL_LOAD_ERROR: "levelLoadError",
                LEVEL_LOAD_TIMEOUT: "levelLoadTimeOut",
                LEVEL_SWITCH_ERROR: "levelSwitchError",
                AUDIO_TRACK_LOAD_ERROR: "audioTrackLoadError",
                AUDIO_TRACK_LOAD_TIMEOUT: "audioTrackLoadTimeOut",
                FRAG_LOAD_ERROR: "fragLoadError",
                FRAG_LOAD_TIMEOUT: "fragLoadTimeOut",
                FRAG_DECRYPT_ERROR: "fragDecryptError",
                FRAG_PARSING_ERROR: "fragParsingError",
                REMUX_ALLOC_ERROR: "remuxAllocError",
                KEY_LOAD_ERROR: "keyLoadError",
                KEY_LOAD_TIMEOUT: "keyLoadTimeOut",
                BUFFER_ADD_CODEC_ERROR: "bufferAddCodecError",
                BUFFER_APPEND_ERROR: "bufferAppendError",
                BUFFER_APPENDING_ERROR: "bufferAppendingError",
                BUFFER_STALLED_ERROR: "bufferStalledError",
                BUFFER_FULL_ERROR: "bufferFullError",
                BUFFER_SEEK_OVER_HOLE: "bufferSeekOverHole",
                BUFFER_NUDGE_ON_STALL: "bufferNudgeOnStall",
                INTERNAL_EXCEPTION: "internalException"
            }
        },
        "./src/event-handler.js": function(e, t, i) {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            });
            var s = i("./src/utils/logger.js")
              , r = i("./src/errors.js")
              , o = i("./src/events.js")
              , n = new Set(["hlsEventGeneric", "hlsHandlerDestroying", "hlsHandlerDestroyed"])
              , a = function() {
                function e(e) {
                    for (var t = [], i = 1; i < arguments.length; i++)
                        t[i - 1] = arguments[i];
                    this.hls = e,
                    this.onEvent = this.onEvent.bind(this),
                    this.handledEvents = t,
                    this.useGenericHandler = !0,
                    this.registerListeners()
                }
                return e.prototype.destroy = function() {
                    this.onHandlerDestroying(),
                    this.unregisterListeners(),
                    this.onHandlerDestroyed()
                }
                ,
                e.prototype.onHandlerDestroying = function() {}
                ,
                e.prototype.onHandlerDestroyed = function() {}
                ,
                e.prototype.isEventHandler = function() {
                    return "object" == typeof this.handledEvents && this.handledEvents.length && "function" == typeof this.onEvent
                }
                ,
                e.prototype.registerListeners = function() {
                    this.isEventHandler() && this.handledEvents.forEach(function(e) {
                        if (n.has(e))
                            throw new Error("Forbidden event-name: " + e);
                        this.hls.on(e, this.onEvent)
                    }, this)
                }
                ,
                e.prototype.unregisterListeners = function() {
                    this.isEventHandler() && this.handledEvents.forEach(function(e) {
                        this.hls.off(e, this.onEvent)
                    }, this)
                }
                ,
                e.prototype.onEvent = function(e, t) {
                    this.onEventGeneric(e, t)
                }
                ,
                e.prototype.onEventGeneric = function(e, t) {
                    var i = function(e, t) {
                        var i = "on" + e.replace("hls", "");
                        if ("function" != typeof this[i])
                            throw new Error("Event " + e + " has no generic handler in this " + this.constructor.name + " class (tried " + i + ")");
                        return this[i].bind(this, t)
                    };
                    try {
                        i.call(this, e, t).call()
                    } catch (n) {
                        s.logger.error("An internal error happened while handling event " + e + '. Error message: "' + n.message + '". Here is a stacktrace:', n),
                        this.hls.trigger(o["default"].ERROR, {
                            type: r.ErrorTypes.OTHER_ERROR,
                            details: r.ErrorDetails.INTERNAL_EXCEPTION,
                            fatal: !1,
                            event: e,
                            err: n
                        })
                    }
                }
                ,
                e
            }();
            t["default"] = a
        },
        "./src/events.js": function(e, t, i) {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            });
            var s = {
                MEDIA_ATTACHING: "hlsMediaAttaching",
                MEDIA_ATTACHED: "hlsMediaAttached",
                MEDIA_DETACHING: "hlsMediaDetaching",
                MEDIA_DETACHED: "hlsMediaDetached",
                BUFFER_RESET: "hlsBufferReset",
                BUFFER_CODECS: "hlsBufferCodecs",
                BUFFER_CREATED: "hlsBufferCreated",
                BUFFER_APPENDING: "hlsBufferAppending",
                BUFFER_APPENDED: "hlsBufferAppended",
                BUFFER_EOS: "hlsBufferEos",
                BUFFER_FLUSHING: "hlsBufferFlushing",
                BUFFER_FLUSHED: "hlsBufferFlushed",
                MANIFEST_LOADING: "hlsManifestLoading",
                MANIFEST_LOADED: "hlsManifestLoaded",
                MANIFEST_PARSED: "hlsManifestParsed",
                LEVEL_SWITCHING: "hlsLevelSwitching",
                LEVEL_SWITCHED: "hlsLevelSwitched",
                LEVEL_LOADING: "hlsLevelLoading",
                LEVEL_LOADED: "hlsLevelLoaded",
                LEVEL_UPDATED: "hlsLevelUpdated",
                LEVEL_PTS_UPDATED: "hlsLevelPtsUpdated",
                AUDIO_TRACKS_UPDATED: "hlsAudioTracksUpdated",
                AUDIO_TRACK_SWITCHING: "hlsAudioTrackSwitching",
                AUDIO_TRACK_SWITCHED: "hlsAudioTrackSwitched",
                AUDIO_TRACK_LOADING: "hlsAudioTrackLoading",
                AUDIO_TRACK_LOADED: "hlsAudioTrackLoaded",
                SUBTITLE_TRACKS_UPDATED: "hlsSubtitleTracksUpdated",
                SUBTITLE_TRACK_SWITCH: "hlsSubtitleTrackSwitch",
                SUBTITLE_TRACK_LOADING: "hlsSubtitleTrackLoading",
                SUBTITLE_TRACK_LOADED: "hlsSubtitleTrackLoaded",
                SUBTITLE_FRAG_PROCESSED: "hlsSubtitleFragProcessed",
                INIT_PTS_FOUND: "hlsInitPtsFound",
                FRAG_LOADING: "hlsFragLoading",
                FRAG_LOAD_PROGRESS: "hlsFragLoadProgress",
                FRAG_LOAD_EMERGENCY_ABORTED: "hlsFragLoadEmergencyAborted",
                FRAG_LOADED: "hlsFragLoaded",
                FRAG_DECRYPTED: "hlsFragDecrypted",
                FRAG_PARSING_INIT_SEGMENT: "hlsFragParsingInitSegment",
                FRAG_PARSING_USERDATA: "hlsFragParsingUserdata",
                FRAG_PARSING_METADATA: "hlsFragParsingMetadata",
                FRAG_PARSING_DATA: "hlsFragParsingData",
                FRAG_PARSED: "hlsFragParsed",
                FRAG_BUFFERED: "hlsFragBuffered",
                FRAG_CHANGED: "hlsFragChanged",
                FPS_DROP: "hlsFpsDrop",
                FPS_DROP_LEVEL_CAPPING: "hlsFpsDropLevelCapping",
                ERROR: "hlsError",
                DESTROYING: "hlsDestroying",
                KEY_LOADING: "hlsKeyLoading",
                KEY_LOADED: "hlsKeyLoaded",
                STREAM_STATE_TRANSITION: "hlsStreamStateTransition"
            };
            t["default"] = s
        },
        "./src/hls.js": function(e, t, i) {
            "use strict";
            var s = this && this.__extends || function() {
                var e = Object.setPrototypeOf || {
                    __proto__: []
                }instanceof Array && function(e, t) {
                    e.__proto__ = t
                }
                || function(e, t) {
                    for (var i in t)
                        t.hasOwnProperty(i) && (e[i] = t[i])
                }
                ;
                return function(t, i) {
                    function s() {
                        this.constructor = t
                    }
                    e(t, i),
                    t.prototype = null === i ? Object.create(i) : (s.prototype = i.prototype,
                    new s)
                }
            }();
            Object.defineProperty(t, "__esModule", {
                value: !0
            });
            var r = i("./node_modules/url-toolkit/src/url-toolkit.js")
              , o = i("./src/errors.js")
              , n = i("./src/loader/playlist-loader.js")
              , a = i("./src/loader/fragment-loader.js")
              , l = i("./src/loader/key-loader.js")
              , d = i("./src/controller/fragment-tracker.js")
              , u = i("./src/controller/stream-controller.js")
              , h = i("./src/controller/level-controller.js")
              , c = i("./src/controller/id3-track-controller.js")
              , f = i("./src/is-supported.js")
              , p = i("./src/utils/logger.js")
              , v = i("./src/config.js")
              , g = i("./src/events.js")
              , y = i("./src/observer.js")
              , m = function(e) {
                function t(i) {
                    void 0 === i && (i = {});
                    var s = e.call(this) || this
                      , r = t.DefaultConfig;
                    if ((i.liveSyncDurationCount || i.liveMaxLatencyDurationCount) && (i.liveSyncDuration || i.liveMaxLatencyDuration))
                        throw new Error("Illegal hls.js config: don't mix up liveSyncDurationCount/liveMaxLatencyDurationCount and liveSyncDuration/liveMaxLatencyDuration");
                    for (var o in r)
                        o in i || (i[o] = r[o]);
                    if (i.liveMaxLatencyDurationCount !== undefined && i.liveMaxLatencyDurationCount <= i.liveSyncDurationCount)
                        throw new Error('Illegal hls.js config: "liveMaxLatencyDurationCount" must be gt "liveSyncDurationCount"');
                    if (i.liveMaxLatencyDuration !== undefined && (i.liveMaxLatencyDuration <= i.liveSyncDuration || i.liveSyncDuration === undefined))
                        throw new Error('Illegal hls.js config: "liveMaxLatencyDuration" must be gt "liveSyncDuration"');
                    p.enableLogs(i.debug),
                    s.config = i,
                    s._autoLevelCapping = -1;
                    var f = s.abrController = new i.abrController(s)
                      , v = new i.bufferController(s)
                      , g = new i.capLevelController(s)
                      , y = new i.fpsController(s)
                      , m = new n["default"](s)
                      , _ = new a["default"](s)
                      , b = new l["default"](s)
                      , E = new c["default"](s)
                      , S = s.levelController = new h["default"](s)
                      , T = new d.FragmentTracker(s)
                      , w = s.streamController = new u["default"](s,T)
                      , P = [S, w]
                      , C = i.audioStreamController;
                    C && P.push(new C(s,T)),
                    s.networkControllers = P;
                    var A = [m, _, b, f, v, g, y, E, T];
                    if (C = i.audioTrackController) {
                        var k = new C(s);
                        s.audioTrackController = k,
                        A.push(k)
                    }
                    if (C = i.subtitleTrackController) {
                        var L = new C(s);
                        s.subtitleTrackController = L,
                        A.push(L)
                    }
                    if (C = i.emeController) {
                        var D = new C(s);
                        s.emeController = D,
                        A.push(D)
                    }
                    return [i.subtitleStreamController, i.timelineController].forEach(function(e) {
                        e && A.push(new e(s))
                    }),
                    s.coreComponents = A,
                    s
                }
                return s(t, e),
                Object.defineProperty(t, "version", {
                    get: function() {
                        return "0.11.1-feature-accurate-seek-stall-handling-SNAPSHOT-189552e"
                    },
                    enumerable: !0,
                    configurable: !0
                }),
                t.isSupported = function() {
                    return f.isSupported()
                }
                ,
                Object.defineProperty(t, "Events", {
                    get: function() {
                        return g["default"]
                    },
                    enumerable: !0,
                    configurable: !0
                }),
                Object.defineProperty(t, "ErrorTypes", {
                    get: function() {
                        return o.ErrorTypes
                    },
                    enumerable: !0,
                    configurable: !0
                }),
                Object.defineProperty(t, "ErrorDetails", {
                    get: function() {
                        return o.ErrorDetails
                    },
                    enumerable: !0,
                    configurable: !0
                }),
                Object.defineProperty(t, "DefaultConfig", {
                    get: function() {
                        return t.defaultConfig ? t.defaultConfig : v.hlsDefaultConfig
                    },
                    set: function(e) {
                        t.defaultConfig = e
                    },
                    enumerable: !0,
                    configurable: !0
                }),
                t.prototype.destroy = function() {
                    p.logger.log("destroy"),
                    this.trigger(g["default"].DESTROYING),
                    this.detachMedia(),
                    this.coreComponents.concat(this.networkControllers).forEach(function(e) {
                        e.destroy()
                    }),
                    this.url = null,
                    this.removeAllListeners(),
                    this._autoLevelCapping = -1
                }
                ,
                t.prototype.attachMedia = function(e) {
                    p.logger.log("attachMedia"),
                    this.media = e,
                    this.trigger(g["default"].MEDIA_ATTACHING, {
                        media: e
                    })
                }
                ,
                t.prototype.detachMedia = function() {
                    p.logger.log("detachMedia"),
                    this.trigger(g["default"].MEDIA_DETACHING),
                    this.media = null
                }
                ,
                t.prototype.loadSource = function(e) {
                    e = r.buildAbsoluteURL(window.location.href, e, {
                        alwaysNormalize: !0
                    }),
                    p.logger.log("loadSource:" + e),
                    this.url = e,
                    this.trigger(g["default"].MANIFEST_LOADING, {
                        url: e
                    })
                }
                ,
                t.prototype.startLoad = function(e) {
                    void 0 === e && (e = -1),
                    p.logger.log("startLoad(" + e + ")"),
                    this.networkControllers.forEach(function(t) {
                        t.startLoad(e)
                    })
                }
                ,
                t.prototype.stopLoad = function() {
                    p.logger.log("stopLoad"),
                    this.networkControllers.forEach(function(e) {
                        e.stopLoad()
                    })
                }
                ,
                t.prototype.swapAudioCodec = function() {
                    p.logger.log("swapAudioCodec"),
                    this.streamController.swapAudioCodec()
                }
                ,
                t.prototype.recoverMediaError = function() {
                    p.logger.log("recoverMediaError");
                    var e = this.media;
                    this.detachMedia(),
                    this.attachMedia(e)
                }
                ,
                Object.defineProperty(t.prototype, "levels", {
                    get: function() {
                        return this.levelController.levels
                    },
                    enumerable: !0,
                    configurable: !0
                }),
                Object.defineProperty(t.prototype, "currentLevel", {
                    get: function() {
                        return this.streamController.currentLevel
                    },
                    set: function(e) {
                        p.logger.log("set currentLevel:" + e),
                        this.loadLevel = e,
                        this.streamController.immediateLevelSwitch()
                    },
                    enumerable: !0,
                    configurable: !0
                }),
                Object.defineProperty(t.prototype, "nextLevel", {
                    get: function() {
                        return this.streamController.nextLevel
                    },
                    set: function(e) {
                        p.logger.log("set nextLevel:" + e),
                        this.levelController.manualLevel = e,
                        this.streamController.nextLevelSwitch()
                    },
                    enumerable: !0,
                    configurable: !0
                }),
                Object.defineProperty(t.prototype, "loadLevel", {
                    get: function() {
                        return this.levelController.level
                    },
                    set: function(e) {
                        p.logger.log("set loadLevel:" + e),
                        this.levelController.manualLevel = e
                    },
                    enumerable: !0,
                    configurable: !0
                }),
                Object.defineProperty(t.prototype, "nextLoadLevel", {
                    get: function() {
                        return this.levelController.nextLoadLevel
                    },
                    set: function(e) {
                        this.levelController.nextLoadLevel = e
                    },
                    enumerable: !0,
                    configurable: !0
                }),
                Object.defineProperty(t.prototype, "firstLevel", {
                    get: function() {
                        return Math.max(this.levelController.firstLevel, this.minAutoLevel)
                    },
                    set: function(e) {
                        p.logger.log("set firstLevel:" + e),
                        this.levelController.firstLevel = e
                    },
                    enumerable: !0,
                    configurable: !0
                }),
                Object.defineProperty(t.prototype, "startLevel", {
                    get: function() {
                        return this.levelController.startLevel
                    },
                    set: function(e) {
                        p.logger.log("set startLevel:" + e);
                        var t = this;
                        -1 !== e && (e = Math.max(e, t.minAutoLevel)),
                        t.levelController.startLevel = e
                    },
                    enumerable: !0,
                    configurable: !0
                }),
                Object.defineProperty(t.prototype, "autoLevelCapping", {
                    get: function() {
                        return this._autoLevelCapping
                    },
                    set: function(e) {
                        p.logger.log("set autoLevelCapping:" + e),
                        this._autoLevelCapping = e
                    },
                    enumerable: !0,
                    configurable: !0
                }),
                Object.defineProperty(t.prototype, "autoLevelEnabled", {
                    get: function() {
                        return -1 === this.levelController.manualLevel
                    },
                    enumerable: !0,
                    configurable: !0
                }),
                Object.defineProperty(t.prototype, "manualLevel", {
                    get: function() {
                        return this.levelController.manualLevel
                    },
                    enumerable: !0,
                    configurable: !0
                }),
                Object.defineProperty(t.prototype, "minAutoLevel", {
                    get: function() {
                        for (var e = this, t = e.levels, i = e.config.minAutoBitrate, s = t ? t.length : 0, r = 0; r < s; r++) {
                            if ((t[r].realBitrate ? Math.max(t[r].realBitrate, t[r].bitrate) : t[r].bitrate) > i)
                                return r
                        }
                        return 0
                    },
                    enumerable: !0,
                    configurable: !0
                }),
                Object.defineProperty(t.prototype, "maxAutoLevel", {
                    get: function() {
                        var e = this
                          , t = e.levels
                          , i = e.autoLevelCapping;
                        return -1 === i && t && t.length ? t.length - 1 : i
                    },
                    enumerable: !0,
                    configurable: !0
                }),
                Object.defineProperty(t.prototype, "nextAutoLevel", {
                    get: function() {
                        var e = this;
                        return Math.min(Math.max(e.abrController.nextAutoLevel, e.minAutoLevel), e.maxAutoLevel)
                    },
                    set: function(e) {
                        var t = this;
                        t.abrController.nextAutoLevel = Math.max(t.minAutoLevel, e)
                    },
                    enumerable: !0,
                    configurable: !0
                }),
                Object.defineProperty(t.prototype, "audioTracks", {
                    get: function() {
                        var e = this.audioTrackController;
                        return e ? e.audioTracks : []
                    },
                    enumerable: !0,
                    configurable: !0
                }),
                Object.defineProperty(t.prototype, "audioTrack", {
                    get: function() {
                        var e = this.audioTrackController;
                        return e ? e.audioTrack : -1
                    },
                    set: function(e) {
                        var t = this.audioTrackController;
                        t && (t.audioTrack = e)
                    },
                    enumerable: !0,
                    configurable: !0
                }),
                Object.defineProperty(t.prototype, "liveSyncPosition", {
                    get: function() {
                        return this.streamController.liveSyncPosition
                    },
                    enumerable: !0,
                    configurable: !0
                }),
                Object.defineProperty(t.prototype, "subtitleTracks", {
                    get: function() {
                        var e = this.subtitleTrackController;
                        return e ? e.subtitleTracks : []
                    },
                    enumerable: !0,
                    configurable: !0
                }),
                Object.defineProperty(t.prototype, "subtitleTrack", {
                    get: function() {
                        var e = this.subtitleTrackController;
                        return e ? e.subtitleTrack : -1
                    },
                    set: function(e) {
                        var t = this.subtitleTrackController;
                        t && (t.subtitleTrack = e)
                    },
                    enumerable: !0,
                    configurable: !0
                }),
                Object.defineProperty(t.prototype, "subtitleDisplay", {
                    get: function() {
                        var e = this.subtitleTrackController;
                        return !!e && e.subtitleDisplay
                    },
                    set: function(e) {
                        var t = this.subtitleTrackController;
                        t && (t.subtitleDisplay = e)
                    },
                    enumerable: !0,
                    configurable: !0
                }),
                t
            }(y.Observer);
            t["default"] = m
        },
        "./src/is-supported.js": function(e, t, i) {
            "use strict";
            function s() {
                var e = r.getMediaSource()
                  , t = window.SourceBuffer || window.WebKitSourceBuffer
                  , i = e && "function" == typeof e.isTypeSupported && e.isTypeSupported('video/mp4; codecs="avc1.42E01E,mp4a.40.2"')
                  , s = !t || t.prototype && "function" == typeof t.prototype.appendBuffer && "function" == typeof t.prototype.remove;
                return !!i && !!s
            }
            Object.defineProperty(t, "__esModule", {
                value: !0
            });
            var r = i("./src/utils/mediasource-helper.js");
            t.isSupported = s
        },
        "./src/loader/fragment-loader.js": function(e, t, i) {
            "use strict";
            (function(e) {
                var s = this && this.__extends || function() {
                    var e = Object.setPrototypeOf || {
                        __proto__: []
                    }instanceof Array && function(e, t) {
                        e.__proto__ = t
                    }
                    || function(e, t) {
                        for (var i in t)
                            t.hasOwnProperty(i) && (e[i] = t[i])
                    }
                    ;
                    return function(t, i) {
                        function s() {
                            this.constructor = t
                        }
                        e(t, i),
                        t.prototype = null === i ? Object.create(i) : (s.prototype = i.prototype,
                        new s)
                    }
                }();
                Object.defineProperty(t, "__esModule", {
                    value: !0
                });
                var r = i("./src/events.js")
                  , o = i("./src/event-handler.js")
                  , n = i("./src/errors.js")
                  , a = i("./src/utils/logger.js")
                  , l = function(t) {
                    function i(e) {
                        var i = t.call(this, e, r["default"].FRAG_LOADING) || this;
                        return i.loaders = {},
                        i
                    }
                    return s(i, t),
                    i.prototype.destroy = function() {
                        var e = this.loaders;
                        for (var i in e) {
                            var s = e[i];
                            s && s.destroy()
                        }
                        this.loaders = {},
                        t.prototype.destroy.call(this)
                    }
                    ,
                    i.prototype.onFragLoading = function(t) {
                        var i = t.frag
                          , s = i.type
                          , r = this.loaders
                          , o = this.hls.config
                          , n = o.fLoader
                          , l = o.loader;
                        i.loaded = 0;
                        var d = r[s];
                        d && (a.logger.warn("abort previous fragment loader for type: " + s),
                        d.abort()),
                        d = r[s] = i.loader = o.fLoader ? new n(o) : new l(o);
                        var u, h, c;
                        u = {
                            url: i.url,
                            frag: i,
                            responseType: "arraybuffer",
                            progressData: !1
                        };
                        var f = i.byteRangeStartOffset
                          , p = i.byteRangeEndOffset;
                        e.isFinite(f) && e.isFinite(p) && (u.rangeStart = f,
                        u.rangeEnd = p),
                        h = {
                            timeout: o.fragLoadingTimeOut,
                            maxRetry: 0,
                            retryDelay: 0,
                            maxRetryDelay: o.fragLoadingMaxRetryTimeout
                        },
                        c = {
                            onSuccess: this.loadsuccess.bind(this),
                            onError: this.loaderror.bind(this),
                            onTimeout: this.loadtimeout.bind(this),
                            onProgress: this.loadprogress.bind(this)
                        },
                        d.load(u, h, c)
                    }
                    ,
                    i.prototype.loadsuccess = function(e, t, i, s) {
                        void 0 === s && (s = null);
                        var o = e.data
                          , n = i.frag;
                        n.loader = undefined,
                        this.loaders[n.type] = undefined,
                        this.hls.trigger(r["default"].FRAG_LOADED, {
                            payload: o,
                            frag: n,
                            stats: t,
                            networkDetails: s
                        })
                    }
                    ,
                    i.prototype.loaderror = function(e, t, i) {
                        void 0 === i && (i = null);
                        var s = t.frag
                          , o = s.loader;
                        o && o.abort(),
                        this.loaders[s.type] = undefined,
                        this.hls.trigger(r["default"].ERROR, {
                            type: n.ErrorTypes.NETWORK_ERROR,
                            details: n.ErrorDetails.FRAG_LOAD_ERROR,
                            fatal: !1,
                            frag: t.frag,
                            response: e,
                            networkDetails: i
                        })
                    }
                    ,
                    i.prototype.loadtimeout = function(e, t, i) {
                        void 0 === i && (i = null);
                        var s = t.frag
                          , o = s.loader;
                        o && o.abort(),
                        this.loaders[s.type] = undefined,
                        this.hls.trigger(r["default"].ERROR, {
                            type: n.ErrorTypes.NETWORK_ERROR,
                            details: n.ErrorDetails.FRAG_LOAD_TIMEOUT,
                            fatal: !1,
                            frag: t.frag,
                            networkDetails: i
                        })
                    }
                    ,
                    i.prototype.loadprogress = function(e, t, i, s) {
                        void 0 === s && (s = null);
                        var o = t.frag;
                        o.loaded = e.loaded,
                        this.hls.trigger(r["default"].FRAG_LOAD_PROGRESS, {
                            frag: o,
                            stats: e,
                            networkDetails: s
                        })
                    }
                    ,
                    i
                }(o["default"]);
                t["default"] = l
            }
            ).call(this, i("./src/polyfills/number.js").Number)
        },
        "./src/loader/fragment.js": function(e, t, i) {
            "use strict";
            (function(e) {
                Object.defineProperty(t, "__esModule", {
                    value: !0
                });
                var s = i("./node_modules/url-toolkit/src/url-toolkit.js")
                  , r = i("./src/loader/level-key.js")
                  , o = function() {
                    function t() {
                        var e;
                        this._url = null,
                        this._byteRange = null,
                        this._decryptdata = null,
                        this.tagList = [],
                        this.programDateTime = null,
                        this.rawProgramDateTime = null,
                        this._elementaryStreams = (e = {},
                        e[t.ElementaryStreamTypes.AUDIO] = !1,
                        e[t.ElementaryStreamTypes.VIDEO] = !1,
                        e)
                    }
                    return Object.defineProperty(t, "ElementaryStreamTypes", {
                        get: function() {
                            return {
                                AUDIO: "audio",
                                VIDEO: "video"
                            }
                        },
                        enumerable: !0,
                        configurable: !0
                    }),
                    Object.defineProperty(t.prototype, "url", {
                        get: function() {
                            return !this._url && this.relurl && (this._url = s.buildAbsoluteURL(this.baseurl, this.relurl, {
                                alwaysNormalize: !0
                            })),
                            this._url
                        },
                        set: function(e) {
                            this._url = e
                        },
                        enumerable: !0,
                        configurable: !0
                    }),
                    Object.defineProperty(t.prototype, "byteRange", {
                        get: function() {
                            if (!this._byteRange && !this.rawByteRange)
                                return [];
                            if (this._byteRange)
                                return this._byteRange;
                            var e = [];
                            if (this.rawByteRange) {
                                var t = this.rawByteRange.split("@", 2);
                                if (1 === t.length) {
                                    var i = this.lastByteRangeEndOffset;
                                    e[0] = i || 0
                                } else
                                    e[0] = parseInt(t[1]);
                                e[1] = parseInt(t[0]) + e[0],
                                this._byteRange = e
                            }
                            return e
                        },
                        enumerable: !0,
                        configurable: !0
                    }),
                    Object.defineProperty(t.prototype, "byteRangeStartOffset", {
                        get: function() {
                            return this.byteRange[0]
                        },
                        enumerable: !0,
                        configurable: !0
                    }),
                    Object.defineProperty(t.prototype, "byteRangeEndOffset", {
                        get: function() {
                            return this.byteRange[1]
                        },
                        enumerable: !0,
                        configurable: !0
                    }),
                    Object.defineProperty(t.prototype, "decryptdata", {
                        get: function() {
                            return this._decryptdata || (this._decryptdata = this.fragmentDecryptdataFromLevelkey(this.levelkey, this.sn)),
                            this._decryptdata
                        },
                        enumerable: !0,
                        configurable: !0
                    }),
                    Object.defineProperty(t.prototype, "endProgramDateTime", {
                        get: function() {
                            if (!e.isFinite(this.programDateTime))
                                return null;
                            var t = e.isFinite(this.duration) ? this.duration : 0;
                            return this.programDateTime + 1e3 * t
                        },
                        enumerable: !0,
                        configurable: !0
                    }),
                    Object.defineProperty(t.prototype, "encrypted", {
                        get: function() {
                            return !(!this.decryptdata || null === this.decryptdata.uri || null !== this.decryptdata.key)
                        },
                        enumerable: !0,
                        configurable: !0
                    }),
                    Object.defineProperty(t.prototype, "end", {
                        get: function() {
                            return this.start + this.duration
                        },
                        enumerable: !0,
                        configurable: !0
                    }),
                    t.prototype.compareTimeInterval = function(e) {
                        return e < this.start ? e - this.start : e > this.end ? this.end + e : 0
                    }
                    ,
                    t.prototype.addElementaryStream = function(e) {
                        this._elementaryStreams[e] = !0
                    }
                    ,
                    t.prototype.hasElementaryStream = function(e) {
                        return !0 === this._elementaryStreams[e]
                    }
                    ,
                    t.prototype.createInitializationVector = function(e) {
                        for (var t = new Uint8Array(16), i = 12; i < 16; i++)
                            t[i] = e >> 8 * (15 - i) & 255;
                        return t
                    }
                    ,
                    t.prototype.fragmentDecryptdataFromLevelkey = function(e, t) {
                        var i = e;
                        return e && e.method && e.uri && !e.iv && (i = new r["default"],
                        i.method = e.method,
                        i.baseuri = e.baseuri,
                        i.reluri = e.reluri,
                        i.iv = this.createInitializationVector(t)),
                        i
                    }
                    ,
                    t
                }();
                t["default"] = o
            }
            ).call(this, i("./src/polyfills/number.js").Number)
        },
        "./src/loader/key-loader.js": function(e, t, i) {
            "use strict";
            var s = this && this.__extends || function() {
                var e = Object.setPrototypeOf || {
                    __proto__: []
                }instanceof Array && function(e, t) {
                    e.__proto__ = t
                }
                || function(e, t) {
                    for (var i in t)
                        t.hasOwnProperty(i) && (e[i] = t[i])
                }
                ;
                return function(t, i) {
                    function s() {
                        this.constructor = t
                    }
                    e(t, i),
                    t.prototype = null === i ? Object.create(i) : (s.prototype = i.prototype,
                    new s)
                }
            }();
            Object.defineProperty(t, "__esModule", {
                value: !0
            });
            var r = i("./src/events.js")
              , o = i("./src/event-handler.js")
              , n = i("./src/errors.js")
              , a = i("./src/utils/logger.js")
              , l = function(e) {
                function t(t) {
                    var i = e.call(this, t, r["default"].KEY_LOADING) || this;
                    return i.loaders = {},
                    i.decryptkey = null,
                    i.decrypturl = null,
                    i
                }
                return s(t, e),
                t.prototype.destroy = function() {
                    for (var e in this.loaders) {
                        var t = this.loaders[e];
                        t && t.destroy()
                    }
                    this.loaders = {},
                    o["default"].prototype.destroy.call(this)
                }
                ,
                t.prototype.onKeyLoading = function(e) {
                    var t = e.frag
                      , i = t.type
                      , s = this.loaders[i]
                      , o = t.decryptdata
                      , n = o.uri;
                    if (n !== this.decrypturl || null === this.decryptkey) {
                        var l = this.hls.config;
                        s && (a.logger.warn("abort previous key loader for type:" + i),
                        s.abort()),
                        t.loader = this.loaders[i] = new l.loader(l),
                        this.decrypturl = n,
                        this.decryptkey = null;
                        var d = void 0
                          , u = void 0
                          , h = void 0;
                        d = {
                            url: n,
                            frag: t,
                            responseType: "arraybuffer"
                        },
                        u = {
                            timeout: l.fragLoadingTimeOut,
                            maxRetry: 0,
                            retryDelay: l.fragLoadingRetryDelay,
                            maxRetryDelay: l.fragLoadingMaxRetryTimeout
                        },
                        h = {
                            onSuccess: this.loadsuccess.bind(this),
                            onError: this.loaderror.bind(this),
                            onTimeout: this.loadtimeout.bind(this)
                        },
                        t.loader.load(d, u, h)
                    } else
                        this.decryptkey && (o.key = this.decryptkey,
                        this.hls.trigger(r["default"].KEY_LOADED, {
                            frag: t
                        }))
                }
                ,
                t.prototype.loadsuccess = function(e, t, i) {
                    var s = i.frag;
                    this.decryptkey = s.decryptdata.key = new Uint8Array(e.data),
                    s.loader = undefined,
                    this.loaders[s.type] = undefined,
                    this.hls.trigger(r["default"].KEY_LOADED, {
                        frag: s
                    })
                }
                ,
                t.prototype.loaderror = function(e, t) {
                    var i = t.frag
                      , s = i.loader;
                    s && s.abort(),
                    this.loaders[t.type] = undefined,
                    this.hls.trigger(r["default"].ERROR, {
                        type: n.ErrorTypes.NETWORK_ERROR,
                        details: n.ErrorDetails.KEY_LOAD_ERROR,
                        fatal: !1,
                        frag: i,
                        response: e
                    })
                }
                ,
                t.prototype.loadtimeout = function(e, t) {
                    var i = t.frag
                      , s = i.loader;
                    s && s.abort(),
                    this.loaders[t.type] = undefined,
                    this.hls.trigger(r["default"].ERROR, {
                        type: n.ErrorTypes.NETWORK_ERROR,
                        details: n.ErrorDetails.KEY_LOAD_TIMEOUT,
                        fatal: !1,
                        frag: i
                    })
                }
                ,
                t
            }(o["default"]);
            t["default"] = l
        },
        "./src/loader/level-key.js": function(e, t, i) {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            });
            var s = i("./node_modules/url-toolkit/src/url-toolkit.js")
              , r = function() {
                function e() {
                    this.method = null,
                    this.key = null,
                    this.iv = null,
                    this._uri = null
                }
                return Object.defineProperty(e.prototype, "uri", {
                    get: function() {
                        return !this._uri && this.reluri && (this._uri = s.buildAbsoluteURL(this.baseuri, this.reluri, {
                            alwaysNormalize: !0
                        })),
                        this._uri
                    },
                    enumerable: !0,
                    configurable: !0
                }),
                e
            }();
            t["default"] = r
        },
        "./src/loader/level.js": function(e, t, i) {
            "use strict";
            (function(e) {
                Object.defineProperty(t, "__esModule", {
                    value: !0
                });
                var i = function() {
                    function t(e) {
                        this.endCC = 0,
                        this.endSN = 0,
                        this.fragments = [],
                        this.initSegment = null,
                        this.live = !0,
                        this.needSidxRanges = !1,
                        this.startCC = 0,
                        this.startSN = 0,
                        this.startTimeOffset = null,
                        this.targetduration = 0,
                        this.totalduration = 0,
                        this.type = null,
                        this.url = e,
                        this.version = null
                    }
                    return Object.defineProperty(t.prototype, "hasProgramDateTime", {
                        get: function() {
                            return !(!this.fragments[0] || !e.isFinite(this.fragments[0].programDateTime))
                        },
                        enumerable: !0,
                        configurable: !0
                    }),
                    t
                }();
                t["default"] = i
            }
            ).call(this, i("./src/polyfills/number.js").Number)
        },
        "./src/loader/m3u8-parser.js": function(e, t, i) {
            "use strict";
            (function(e) {
                function s(e, t) {
                    for (var i = e[t], s = t - 1; s >= 0; s--) {
                        var r = e[s];
                        r.programDateTime = i.programDateTime - 1e3 * r.duration,
                        i = r
                    }
                }
                function r(t, i) {
                    t.rawProgramDateTime ? t.programDateTime = Date.parse(t.rawProgramDateTime) : i && i.programDateTime && (t.programDateTime = i.endProgramDateTime),
                    e.isFinite(t.programDateTime) || (t.programDateTime = null,
                    t.rawProgramDateTime = null)
                }
                Object.defineProperty(t, "__esModule", {
                    value: !0
                });
                var o = i("./node_modules/url-toolkit/src/url-toolkit.js")
                  , n = i("./src/loader/fragment.js")
                  , a = i("./src/loader/level.js")
                  , l = i("./src/loader/level-key.js")
                  , d = i("./src/utils/attr-list.js")
                  , u = i("./src/utils/logger.js")
                  , h = i("./src/utils/codecs.js")
                  , c = /#EXT-X-STREAM-INF:([^\n\r]*)[\r\n]+([^\r\n]+)/g
                  , f = /#EXT-X-MEDIA:(.*)/g
                  , p = new RegExp([/#EXTINF:\s*(\d*(?:\.\d+)?)(?:,(.*)\s+)?/.source, /|(?!#)(\S+)/.source, /|#EXT-X-BYTERANGE:*(.+)/.source, /|#EXT-X-PROGRAM-DATE-TIME:(.+)/.source, /|#.*/.source].join(""),"g")
                  , v = /(?:(?:#(EXTM3U))|(?:#EXT-X-(PLAYLIST-TYPE):(.+))|(?:#EXT-X-(MEDIA-SEQUENCE): *(\d+))|(?:#EXT-X-(TARGETDURATION): *(\d+))|(?:#EXT-X-(KEY):(.+))|(?:#EXT-X-(START):(.+))|(?:#EXT-X-(ENDLIST))|(?:#EXT-X-(DISCONTINUITY-SEQ)UENCE:(\d+))|(?:#EXT-X-(DIS)CONTINUITY))|(?:#EXT-X-(VERSION):(\d+))|(?:#EXT-X-(MAP):(.+))|(?:(#)([^:]*):(.*))|(?:(#)(.*))(?:.*)\r?\n?/
                  , g = /\.(mp4|m4s|m4v|m4a)$/i
                  , y = function() {
                    function t() {}
                    return t.findGroup = function(e, t) {
                        if (!e)
                            return null;
                        for (var i = null, s = 0; s < e.length; s++) {
                            var r = e[s];
                            r.id === t && (i = r)
                        }
                        return i
                    }
                    ,
                    t.convertAVC1ToAVCOTI = function(e) {
                        var t, i = e.split(".");
                        return i.length > 2 ? (t = i.shift() + ".",
                        t += parseInt(i.shift()).toString(16),
                        t += ("000" + parseInt(i.shift()).toString(16)).substr(-4)) : t = e,
                        t
                    }
                    ,
                    t.resolve = function(e, t) {
                        return o.buildAbsoluteURL(t, e, {
                            alwaysNormalize: !0
                        })
                    }
                    ,
                    t.parseMasterPlaylist = function(e, i) {
                        var s, r = [];
                        for (c.lastIndex = 0; null != (s = c.exec(e)); ) {
                            var o = {}
                              , n = o.attrs = new d["default"](s[1]);
                            o.url = t.resolve(s[2], i);
                            var a = n.decimalResolution("RESOLUTION");
                            a && (o.width = a.width,
                            o.height = a.height),
                            o.bitrate = n.decimalInteger("AVERAGE-BANDWIDTH") || n.decimalInteger("BANDWIDTH"),
                            o.name = n.NAME,
                            function(e, t) {
                                ["video", "audio"].forEach(function(i) {
                                    var s = e.filter(function(e) {
                                        return h.isCodecType(e, i)
                                    });
                                    if (s.length) {
                                        var r = s.filter(function(e) {
                                            return 0 === e.lastIndexOf("avc1", 0) || 0 === e.lastIndexOf("mp4a", 0)
                                        });
                                        t[i + "Codec"] = r.length > 0 ? r[0] : s[0],
                                        e = e.filter(function(e) {
                                            return -1 === s.indexOf(e)
                                        })
                                    }
                                }),
                                t.unknownCodecs = e
                            }([].concat((n.CODECS || "").split(/[ ,]+/)), o),
                            o.videoCodec && -1 !== o.videoCodec.indexOf("avc1") && (o.videoCodec = t.convertAVC1ToAVCOTI(o.videoCodec)),
                            r.push(o)
                        }
                        return r
                    }
                    ,
                    t.parseMasterPlaylistMedia = function(e, i, s, r) {
                        void 0 === r && (r = []);
                        var o, n = [], a = 0;
                        for (f.lastIndex = 0; null !== (o = f.exec(e)); ) {
                            var l = {}
                              , u = new d["default"](o[1]);
                            if (u.TYPE === s) {
                                if (l.groupId = u["GROUP-ID"],
                                l.name = u.NAME,
                                l.type = s,
                                l["default"] = "YES" === u.DEFAULT,
                                l.autoselect = "YES" === u.AUTOSELECT,
                                l.forced = "YES" === u.FORCED,
                                u.URI && (l.url = t.resolve(u.URI, i)),
                                l.lang = u.LANGUAGE,
                                l.name || (l.name = l.lang),
                                r.length) {
                                    var h = t.findGroup(r, l.groupId);
                                    l.audioCodec = h ? h.codec : r[0].codec
                                }
                                l.id = a++,
                                n.push(l)
                            }
                        }
                        return n
                    }
                    ,
                    t.parseLevelPlaylist = function(t, i, o, h, c) {
                        var f, y, m = 0, _ = 0, b = new a["default"](i), E = new l["default"], S = 0, T = null, w = new n["default"], P = null;
                        for (p.lastIndex = 0; null !== (f = p.exec(t)); ) {
                            var C = f[1];
                            if (C) {
                                w.duration = parseFloat(C);
                                var A = (" " + f[2]).slice(1);
                                w.title = A || null,
                                w.tagList.push(A ? ["INF", C, A] : ["INF", C])
                            } else if (f[3]) {
                                if (e.isFinite(w.duration)) {
                                    var k = m++;
                                    w.type = h,
                                    w.start = _,
                                    w.levelkey = E,
                                    w.sn = k,
                                    w.level = o,
                                    w.cc = S,
                                    w.urlId = c,
                                    w.baseurl = i,
                                    w.relurl = (" " + f[3]).slice(1),
                                    r(w, T),
                                    b.fragments.push(w),
                                    T = w,
                                    _ += w.duration,
                                    w = new n["default"]
                                }
                            } else if (f[4]) {
                                if (w.rawByteRange = (" " + f[4]).slice(1),
                                T) {
                                    var L = T.byteRangeEndOffset;
                                    L && (w.lastByteRangeEndOffset = L)
                                }
                            } else if (f[5])
                                w.rawProgramDateTime = (" " + f[5]).slice(1),
                                w.tagList.push(["PROGRAM-DATE-TIME", w.rawProgramDateTime]),
                                null === P && (P = b.fragments.length);
                            else {
                                for (f = f[0].match(v),
                                y = 1; y < f.length && f[y] === undefined; y++)
                                    ;
                                var D = (" " + f[y + 1]).slice(1)
                                  , R = (" " + f[y + 2]).slice(1);
                                switch (f[y]) {
                                case "#":
                                    w.tagList.push(R ? [D, R] : [D]);
                                    break;
                                case "PLAYLIST-TYPE":
                                    b.type = D.toUpperCase();
                                    break;
                                case "MEDIA-SEQUENCE":
                                    m = b.startSN = parseInt(D);
                                    break;
                                case "TARGETDURATION":
                                    b.targetduration = parseFloat(D);
                                    break;
                                case "VERSION":
                                    b.version = parseInt(D);
                                    break;
                                case "EXTM3U":
                                    break;
                                case "ENDLIST":
                                    b.live = !1;
                                    break;
                                case "DIS":
                                    S++,
                                    w.tagList.push(["DIS"]);
                                    break;
                                case "DISCONTINUITY-SEQ":
                                    S = parseInt(D);
                                    break;
                                case "KEY":
                                    var B = D
                                      , x = new d["default"](B)
                                      , I = x.enumeratedString("METHOD")
                                      , O = x.URI
                                      , M = x.hexadecimalInteger("IV");
                                    I && (E = new l["default"],
                                    O && ["AES-128", "SAMPLE-AES", "SAMPLE-AES-CENC"].indexOf(I) >= 0 && (E.method = I,
                                    E.baseuri = i,
                                    E.reluri = O,
                                    E.key = null,
                                    E.iv = M));
                                    break;
                                case "START":
                                    var $ = D
                                      , N = new d["default"]($)
                                      , F = N.decimalFloatingPoint("TIME-OFFSET");
                                    e.isFinite(F) && (b.startTimeOffset = F);
                                    break;
                                case "MAP":
                                    var V = new d["default"](D);
                                    w.relurl = V.URI,
                                    w.rawByteRange = V.BYTERANGE,
                                    w.baseurl = i,
                                    w.level = o,
                                    w.type = h,
                                    w.sn = "initSegment",
                                    b.initSegment = w,
                                    w = new n["default"],
                                    w.rawProgramDateTime = b.initSegment.rawProgramDateTime;
                                    break;
                                default:
                                    u.logger.warn("line parsed but not handled: " + f)
                                }
                            }
                        }
                        return w = T,
                        w && !w.relurl && (b.fragments.pop(),
                        _ -= w.duration),
                        b.totalduration = _,
                        b.averagetargetduration = _ / b.fragments.length,
                        b.endSN = m - 1,
                        b.startCC = b.fragments[0] ? b.fragments[0].cc : 0,
                        b.endCC = S,
                        !b.initSegment && b.fragments.length && b.fragments.every(function(e) {
                            return g.test(e.relurl)
                        }) && (u.logger.warn("MP4 fragments found but no init segment (probably no MAP, incomplete M3U8), trying to fetch SIDX"),
                        w = new n["default"],
                        w.relurl = b.fragments[0].relurl,
                        w.baseurl = i,
                        w.level = o,
                        w.type = h,
                        w.sn = "initSegment",
                        b.initSegment = w,
                        b.needSidxRanges = !0),
                        P && s(b.fragments, P),
                        b
                    }
                    ,
                    t
                }();
                t["default"] = y
            }
            ).call(this, i("./src/polyfills/number.js").Number)
        },
        "./src/loader/playlist-loader.js": function(e, t, i) {
            "use strict";
            (function(e) {
                var s = this && this.__extends || function() {
                    var e = Object.setPrototypeOf || {
                        __proto__: []
                    }instanceof Array && function(e, t) {
                        e.__proto__ = t
                    }
                    || function(e, t) {
                        for (var i in t)
                            t.hasOwnProperty(i) && (e[i] = t[i])
                    }
                    ;
                    return function(t, i) {
                        function s() {
                            this.constructor = t
                        }
                        e(t, i),
                        t.prototype = null === i ? Object.create(i) : (s.prototype = i.prototype,
                        new s)
                    }
                }();
                Object.defineProperty(t, "__esModule", {
                    value: !0
                });
                var r = i("./src/events.js")
                  , o = i("./src/event-handler.js")
                  , n = i("./src/errors.js")
                  , a = i("./src/utils/logger.js")
                  , l = i("./src/demux/mp4demuxer.js")
                  , d = i("./src/loader/m3u8-parser.js")
                  , u = window.performance
                  , h = {
                    MANIFEST: "manifest",
                    LEVEL: "level",
                    AUDIO_TRACK: "audioTrack",
                    SUBTITLE_TRACK: "subtitleTrack"
                }
                  , c = {
                    MAIN: "main",
                    AUDIO: "audio",
                    SUBTITLE: "subtitle"
                }
                  , f = function(t) {
                    function i(e) {
                        var i = t.call(this, e, r["default"].MANIFEST_LOADING, r["default"].LEVEL_LOADING, r["default"].AUDIO_TRACK_LOADING, r["default"].SUBTITLE_TRACK_LOADING) || this;
                        return i.loaders = {},
                        i
                    }
                    return s(i, t),
                    Object.defineProperty(i, "ContextType", {
                        get: function() {
                            return h
                        },
                        enumerable: !0,
                        configurable: !0
                    }),
                    Object.defineProperty(i, "LevelType", {
                        get: function() {
                            return c
                        },
                        enumerable: !0,
                        configurable: !0
                    }),
                    i.canHaveQualityLevels = function(e) {
                        return e !== h.AUDIO_TRACK && e !== h.SUBTITLE_TRACK
                    }
                    ,
                    i.mapContextToLevelType = function(e) {
                        switch (e.type) {
                        case h.AUDIO_TRACK:
                            return c.AUDIO;
                        case h.SUBTITLE_TRACK:
                            return c.SUBTITLE;
                        default:
                            return c.MAIN
                        }
                    }
                    ,
                    i.getResponseUrl = function(e, t) {
                        var i = e.url;
                        return i !== undefined && 0 !== i.indexOf("data:") || (i = t.url),
                        i
                    }
                    ,
                    i.prototype.createInternalLoader = function(e) {
                        var t = this.hls.config
                          , i = t.pLoader
                          , s = t.loader
                          , r = i || s
                          , o = new r(t);
                        return e.loader = o,
                        this.loaders[e.type] = o,
                        o
                    }
                    ,
                    i.prototype.getInternalLoader = function(e) {
                        return this.loaders[e.type]
                    }
                    ,
                    i.prototype.resetInternalLoader = function(e) {
                        this.loaders[e] && delete this.loaders[e]
                    }
                    ,
                    i.prototype.destroyInternalLoaders = function() {
                        for (var e in this.loaders) {
                            var t = this.loaders[e];
                            t && t.destroy(),
                            this.resetInternalLoader(e)
                        }
                    }
                    ,
                    i.prototype.destroy = function() {
                        this.destroyInternalLoaders(),
                        t.prototype.destroy.call(this)
                    }
                    ,
                    i.prototype.onManifestLoading = function(e) {
                        this.load(e.url, {
                            type: h.MANIFEST,
                            level: 0,
                            id: null
                        })
                    }
                    ,
                    i.prototype.onLevelLoading = function(e) {
                        this.load(e.url, {
                            type: h.LEVEL,
                            level: e.level,
                            id: e.id
                        })
                    }
                    ,
                    i.prototype.onAudioTrackLoading = function(e) {
                        this.load(e.url, {
                            type: h.AUDIO_TRACK,
                            level: null,
                            id: e.id
                        })
                    }
                    ,
                    i.prototype.onSubtitleTrackLoading = function(e) {
                        this.load(e.url, {
                            type: h.SUBTITLE_TRACK,
                            level: null,
                            id: e.id
                        })
                    }
                    ,
                    i.prototype.load = function(e, t) {
                        var i = this.hls.config;
                        a.logger.debug("Loading playlist of type " + t.type + ", level: " + t.level + ", id: " + t.id);
                        var s = this.getInternalLoader(t);
                        if (s) {
                            var r = s.context;
                            if (r && r.url === e)
                                return a.logger.trace("playlist request ongoing"),
                                !1;
                            a.logger.warn("aborting previous loader for type: " + t.type),
                            s.abort()
                        }
                        var o, n, l, d;
                        switch (t.type) {
                        case h.MANIFEST:
                            o = i.manifestLoadingMaxRetry,
                            n = i.manifestLoadingTimeOut,
                            l = i.manifestLoadingRetryDelay,
                            d = i.manifestLoadingMaxRetryTimeout;
                            break;
                        case h.LEVEL:
                            o = 0,
                            n = i.levelLoadingTimeOut;
                            break;
                        default:
                            o = i.levelLoadingMaxRetry,
                            n = i.levelLoadingTimeOut,
                            l = i.levelLoadingRetryDelay,
                            d = i.levelLoadingMaxRetryTimeout
                        }
                        s = this.createInternalLoader(t),
                        t.url = e,
                        t.responseType = t.responseType || "";
                        var u = {
                            timeout: n,
                            maxRetry: o,
                            retryDelay: l,
                            maxRetryDelay: d
                        }
                          , c = {
                            onSuccess: this.loadsuccess.bind(this),
                            onError: this.loaderror.bind(this),
                            onTimeout: this.loadtimeout.bind(this)
                        };
                        return a.logger.debug("Calling internal loader delegate for URL: " + e),
                        s.load(t, u, c),
                        !0
                    }
                    ,
                    i.prototype.loadsuccess = function(e, t, i, s) {
                        if (void 0 === s && (s = null),
                        i.isSidxRequest)
                            return this._handleSidxRequest(e, i),
                            void this._handlePlaylistLoaded(e, t, i, s);
                        this.resetInternalLoader(i.type);
                        var r = e.data;
                        if (t.tload = u.now(),
                        0 !== r.indexOf("#EXTM3U"))
                            return void this._handleManifestParsingError(e, i, "no EXTM3U delimiter", s);
                        r.indexOf("#EXTINF:") > 0 || r.indexOf("#EXT-X-TARGETDURATION:") > 0 ? this._handleTrackOrLevelPlaylist(e, t, i, s) : this._handleMasterPlaylist(e, t, i, s)
                    }
                    ,
                    i.prototype.loaderror = function(e, t, i) {
                        void 0 === i && (i = null),
                        this._handleNetworkError(t, i)
                    }
                    ,
                    i.prototype.loadtimeout = function(e, t, i) {
                        void 0 === i && (i = null),
                        this._handleNetworkError(t, i, !0)
                    }
                    ,
                    i.prototype._handleMasterPlaylist = function(e, t, s, o) {
                        var n = this.hls
                          , l = e.data
                          , u = i.getResponseUrl(e, s)
                          , h = d["default"].parseMasterPlaylist(l, u);
                        if (!h.length)
                            return void this._handleManifestParsingError(e, s, "no level found in manifest", o);
                        var c = h.map(function(e) {
                            return {
                                id: e.attrs.AUDIO,
                                codec: e.audioCodec
                            }
                        })
                          , f = d["default"].parseMasterPlaylistMedia(l, u, "AUDIO", c)
                          , p = d["default"].parseMasterPlaylistMedia(l, u, "SUBTITLES");
                        if (f.length) {
                            var v = !1;
                            f.forEach(function(e) {
                                e.url || (v = !0)
                            }),
                            !1 === v && h[0].audioCodec && !h[0].attrs.AUDIO && (a.logger.log("audio codec signaled in quality level, but no embedded audio track signaled, create one"),
                            f.unshift({
                                type: "main",
                                name: "main"
                            }))
                        }
                        n.trigger(r["default"].MANIFEST_LOADED, {
                            levels: h,
                            audioTracks: f,
                            subtitles: p,
                            url: u,
                            stats: t,
                            networkDetails: o
                        })
                    }
                    ,
                    i.prototype._handleTrackOrLevelPlaylist = function(t, s, o, n) {
                        var a = this.hls
                          , l = o.id
                          , c = o.level
                          , f = o.type
                          , p = i.getResponseUrl(t, o)
                          , v = e.isFinite(l) ? l : 0
                          , g = e.isFinite(c) ? c : v
                          , y = i.mapContextToLevelType(o)
                          , m = d["default"].parseLevelPlaylist(t.data, p, g, y, v);
                        if (m.tload = s.tload,
                        f === h.MANIFEST) {
                            var _ = {
                                url: p,
                                details: m
                            };
                            a.trigger(r["default"].MANIFEST_LOADED, {
                                levels: [_],
                                audioTracks: [],
                                url: p,
                                stats: s,
                                networkDetails: n
                            })
                        }
                        if (s.tparsed = u.now(),
                        m.needSidxRanges) {
                            var b = m.initSegment.url;
                            return void this.load(b, {
                                isSidxRequest: !0,
                                type: f,
                                level: c,
                                levelDetails: m,
                                id: l,
                                rangeStart: 0,
                                rangeEnd: 2048,
                                responseType: "arraybuffer"
                            })
                        }
                        o.levelDetails = m,
                        this._handlePlaylistLoaded(t, s, o, n)
                    }
                    ,
                    i.prototype._handleSidxRequest = function(e, t) {
                        var i = l["default"].parseSegmentIndex(new Uint8Array(e.data));
                        i.references.forEach(function(e, i) {
                            var s = e.info
                              , r = t.levelDetails.fragments[i];
                            0 === r.byteRange.length && (r.rawByteRange = String(1 + s.end - s.start) + "@" + String(s.start))
                        }),
                        t.levelDetails.initSegment.rawByteRange = String(i.moovEndOffset) + "@0"
                    }
                    ,
                    i.prototype._handleManifestParsingError = function(e, t, i, s) {
                        this.hls.trigger(r["default"].ERROR, {
                            type: n.ErrorTypes.NETWORK_ERROR,
                            details: n.ErrorDetails.MANIFEST_PARSING_ERROR,
                            fatal: !0,
                            url: e.url,
                            reason: i,
                            networkDetails: s
                        })
                    }
                    ,
                    i.prototype._handleNetworkError = function(e, t, i) {
                        void 0 === i && (i = !1),
                        a.logger.info("A network error occured while loading a " + e.type + "-type playlist");
                        var s, o, l = this.getInternalLoader(e);
                        switch (e.type) {
                        case h.MANIFEST:
                            s = i ? n.ErrorDetails.MANIFEST_LOAD_TIMEOUT : n.ErrorDetails.MANIFEST_LOAD_ERROR,
                            o = !0;
                            break;
                        case h.LEVEL:
                            s = i ? n.ErrorDetails.LEVEL_LOAD_TIMEOUT : n.ErrorDetails.LEVEL_LOAD_ERROR,
                            o = !1;
                            break;
                        case h.AUDIO_TRACK:
                            s = i ? n.ErrorDetails.AUDIO_TRACK_LOAD_TIMEOUT : n.ErrorDetails.AUDIO_TRACK_LOAD_ERROR,
                            o = !1;
                            break;
                        default:
                            o = !1
                        }
                        l && (l.abort(),
                        this.resetInternalLoader(e.type)),
                        this.hls.trigger(r["default"].ERROR, {
                            type: n.ErrorTypes.NETWORK_ERROR,
                            details: s,
                            fatal: o,
                            url: l.url,
                            loader: l,
                            context: e,
                            networkDetails: t
                        })
                    }
                    ,
                    i.prototype._handlePlaylistLoaded = function(e, t, s, o) {
                        var n = s.type
                          , a = s.level
                          , l = s.id
                          , d = s.levelDetails;
                        if (!d.targetduration)
                            return void this._handleManifestParsingError(e, s, "invalid target duration", o);
                        if (i.canHaveQualityLevels(s.type))
                            this.hls.trigger(r["default"].LEVEL_LOADED, {
                                details: d,
                                level: a || 0,
                                id: l || 0,
                                stats: t,
                                networkDetails: o
                            });
                        else
                            switch (n) {
                            case h.AUDIO_TRACK:
                                this.hls.trigger(r["default"].AUDIO_TRACK_LOADED, {
                                    details: d,
                                    id: l,
                                    stats: t,
                                    networkDetails: o
                                });
                                break;
                            case h.SUBTITLE_TRACK:
                                this.hls.trigger(r["default"].SUBTITLE_TRACK_LOADED, {
                                    details: d,
                                    id: l,
                                    stats: t,
                                    networkDetails: o
                                })
                            }
                    }
                    ,
                    i
                }(o["default"]);
                t["default"] = f
            }
            ).call(this, i("./src/polyfills/number.js").Number)
        },
        "./src/observer.js": function(e, t, i) {
            "use strict";
            var s = this && this.__extends || function() {
                var e = Object.setPrototypeOf || {
                    __proto__: []
                }instanceof Array && function(e, t) {
                    e.__proto__ = t
                }
                || function(e, t) {
                    for (var i in t)
                        t.hasOwnProperty(i) && (e[i] = t[i])
                }
                ;
                return function(t, i) {
                    function s() {
                        this.constructor = t
                    }
                    e(t, i),
                    t.prototype = null === i ? Object.create(i) : (s.prototype = i.prototype,
                    new s)
                }
            }();
            Object.defineProperty(t, "__esModule", {
                value: !0
            });
            var r = i("./node_modules/eventemitter3/index.js")
              , o = function(e) {
                function t() {
                    return null !== e && e.apply(this, arguments) || this
                }
                return s(t, e),
                t.prototype.trigger = function(e) {
                    for (var t = [], i = 1; i < arguments.length; i++)
                        t[i - 1] = arguments[i];
                    this.emit.apply(this, [e, e].concat(t))
                }
                ,
                t
            }(r.EventEmitter);
            t.Observer = o
        },
        "./src/polyfills/number.js": function(e, t, i) {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            });
            var s = i("./src/utils/get-self-scope.js")
              , r = s.getSelfScope()
              , o = r.Number;
            t.Number = o,
            o.isFinite = o.isFinite || function(e) {
                return "number" == typeof e && isFinite(e)
            }
        },
        "./src/remux/aac-helper.js": function(e, t, i) {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            });
            var s = function() {
                function e() {}
                return e.getSilentFrame = function(e, t) {
                    switch (e) {
                    case "mp4a.40.2":
                        if (1 === t)
                            return new Uint8Array([0, 200, 0, 128, 35, 128]);
                        if (2 === t)
                            return new Uint8Array([33, 0, 73, 144, 2, 25, 0, 35, 128]);
                        if (3 === t)
                            return new Uint8Array([0, 200, 0, 128, 32, 132, 1, 38, 64, 8, 100, 0, 142]);
                        if (4 === t)
                            return new Uint8Array([0, 200, 0, 128, 32, 132, 1, 38, 64, 8, 100, 0, 128, 44, 128, 8, 2, 56]);
                        if (5 === t)
                            return new Uint8Array([0, 200, 0, 128, 32, 132, 1, 38, 64, 8, 100, 0, 130, 48, 4, 153, 0, 33, 144, 2, 56]);
                        if (6 === t)
                            return new Uint8Array([0, 200, 0, 128, 32, 132, 1, 38, 64, 8, 100, 0, 130, 48, 4, 153, 0, 33, 144, 2, 0, 178, 0, 32, 8, 224]);
                        break;
                    default:
                        if (1 === t)
                            return new Uint8Array([1, 64, 34, 128, 163, 78, 230, 128, 186, 8, 0, 0, 0, 28, 6, 241, 193, 10, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 94]);
                        if (2 === t)
                            return new Uint8Array([1, 64, 34, 128, 163, 94, 230, 128, 186, 8, 0, 0, 0, 0, 149, 0, 6, 241, 161, 10, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 94]);
                        if (3 === t)
                            return new Uint8Array([1, 64, 34, 128, 163, 94, 230, 128, 186, 8, 0, 0, 0, 0, 149, 0, 6, 241, 161, 10, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 94])
                    }
                    return null
                }
                ,
                e
            }();
            t["default"] = s
        },
        "./src/remux/mp4-generator.js": function(e, t, i) {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            });
            var s = Math.pow(2, 32) - 1
              , r = function() {
                function e() {}
                return e.init = function() {
                    e.types = {
                        avc1: [],
                        avcC: [],
                        btrt: [],
                        dinf: [],
                        dref: [],
                        esds: [],
                        ftyp: [],
                        hdlr: [],
                        mdat: [],
                        mdhd: [],
                        mdia: [],
                        mfhd: [],
                        minf: [],
                        moof: [],
                        moov: [],
                        mp4a: [],
                        ".mp3": [],
                        mvex: [],
                        mvhd: [],
                        pasp: [],
                        sdtp: [],
                        stbl: [],
                        stco: [],
                        stsc: [],
                        stsd: [],
                        stsz: [],
                        stts: [],
                        tfdt: [],
                        tfhd: [],
                        traf: [],
                        trak: [],
                        trun: [],
                        trex: [],
                        tkhd: [],
                        vmhd: [],
                        smhd: []
                    };
                    var t;
                    for (t in e.types)
                        e.types.hasOwnProperty(t) && (e.types[t] = [t.charCodeAt(0), t.charCodeAt(1), t.charCodeAt(2), t.charCodeAt(3)]);
                    var i = new Uint8Array([0, 0, 0, 0, 0, 0, 0, 0, 118, 105, 100, 101, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 86, 105, 100, 101, 111, 72, 97, 110, 100, 108, 101, 114, 0])
                      , s = new Uint8Array([0, 0, 0, 0, 0, 0, 0, 0, 115, 111, 117, 110, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 83, 111, 117, 110, 100, 72, 97, 110, 100, 108, 101, 114, 0]);
                    e.HDLR_TYPES = {
                        video: i,
                        audio: s
                    };
                    var r = new Uint8Array([0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 12, 117, 114, 108, 32, 0, 0, 0, 1])
                      , o = new Uint8Array([0, 0, 0, 0, 0, 0, 0, 0]);
                    e.STTS = e.STSC = e.STCO = o,
                    e.STSZ = new Uint8Array([0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]),
                    e.VMHD = new Uint8Array([0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0]),
                    e.SMHD = new Uint8Array([0, 0, 0, 0, 0, 0, 0, 0]),
                    e.STSD = new Uint8Array([0, 0, 0, 0, 0, 0, 0, 1]);
                    var n = new Uint8Array([105, 115, 111, 109])
                      , a = new Uint8Array([97, 118, 99, 49])
                      , l = new Uint8Array([0, 0, 0, 1]);
                    e.FTYP = e.box(e.types.ftyp, n, l, n, a),
                    e.DINF = e.box(e.types.dinf, e.box(e.types.dref, r))
                }
                ,
                e.box = function(e) {
                    for (var t, i = Array.prototype.slice.call(arguments, 1), s = 8, r = i.length, o = r; r--; )
                        s += i[r].byteLength;
                    for (t = new Uint8Array(s),
                    t[0] = s >> 24 & 255,
                    t[1] = s >> 16 & 255,
                    t[2] = s >> 8 & 255,
                    t[3] = 255 & s,
                    t.set(e, 4),
                    r = 0,
                    s = 8; r < o; r++)
                        t.set(i[r], s),
                        s += i[r].byteLength;
                    return t
                }
                ,
                e.hdlr = function(t) {
                    return e.box(e.types.hdlr, e.HDLR_TYPES[t])
                }
                ,
                e.mdat = function(t) {
                    return e.box(e.types.mdat, t)
                }
                ,
                e.mdhd = function(t, i) {
                    i *= t;
                    var r = Math.floor(i / (s + 1))
                      , o = Math.floor(i % (s + 1));
                    return e.box(e.types.mdhd, new Uint8Array([1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 2, 0, 0, 0, 0, 0, 0, 0, 3, t >> 24 & 255, t >> 16 & 255, t >> 8 & 255, 255 & t, r >> 24, r >> 16 & 255, r >> 8 & 255, 255 & r, o >> 24, o >> 16 & 255, o >> 8 & 255, 255 & o, 85, 196, 0, 0]))
                }
                ,
                e.mdia = function(t) {
                    return e.box(e.types.mdia, e.mdhd(t.timescale, t.duration), e.hdlr(t.type), e.minf(t))
                }
                ,
                e.mfhd = function(t) {
                    return e.box(e.types.mfhd, new Uint8Array([0, 0, 0, 0, t >> 24, t >> 16 & 255, t >> 8 & 255, 255 & t]))
                }
                ,
                e.minf = function(t) {
                    return "audio" === t.type ? e.box(e.types.minf, e.box(e.types.smhd, e.SMHD), e.DINF, e.stbl(t)) : e.box(e.types.minf, e.box(e.types.vmhd, e.VMHD), e.DINF, e.stbl(t))
                }
                ,
                e.moof = function(t, i, s) {
                    return e.box(e.types.moof, e.mfhd(t), e.traf(s, i))
                }
                ,
                e.moov = function(t) {
                    for (var i = t.length, s = []; i--; )
                        s[i] = e.trak(t[i]);
                    return e.box.apply(null, [e.types.moov, e.mvhd(t[0].timescale, t[0].duration)].concat(s).concat(e.mvex(t)))
                }
                ,
                e.mvex = function(t) {
                    for (var i = t.length, s = []; i--; )
                        s[i] = e.trex(t[i]);
                    return e.box.apply(null, [e.types.mvex].concat(s))
                }
                ,
                e.mvhd = function(t, i) {
                    i *= t;
                    var r = Math.floor(i / (s + 1))
                      , o = Math.floor(i % (s + 1))
                      , n = new Uint8Array([1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 2, 0, 0, 0, 0, 0, 0, 0, 3, t >> 24 & 255, t >> 16 & 255, t >> 8 & 255, 255 & t, r >> 24, r >> 16 & 255, r >> 8 & 255, 255 & r, o >> 24, o >> 16 & 255, o >> 8 & 255, 255 & o, 0, 1, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 64, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 255, 255, 255, 255]);
                    return e.box(e.types.mvhd, n)
                }
                ,
                e.sdtp = function(t) {
                    var i, s, r = t.samples || [], o = new Uint8Array(4 + r.length);
                    for (s = 0; s < r.length; s++)
                        i = r[s].flags,
                        o[s + 4] = i.dependsOn << 4 | i.isDependedOn << 2 | i.hasRedundancy;
                    return e.box(e.types.sdtp, o)
                }
                ,
                e.stbl = function(t) {
                    return e.box(e.types.stbl, e.stsd(t), e.box(e.types.stts, e.STTS), e.box(e.types.stsc, e.STSC), e.box(e.types.stsz, e.STSZ), e.box(e.types.stco, e.STCO))
                }
                ,
                e.avc1 = function(t) {
                    var i, s, r, o = [], n = [];
                    for (i = 0; i < t.sps.length; i++)
                        s = t.sps[i],
                        r = s.byteLength,
                        o.push(r >>> 8 & 255),
                        o.push(255 & r),
                        o = o.concat(Array.prototype.slice.call(s));
                    for (i = 0; i < t.pps.length; i++)
                        s = t.pps[i],
                        r = s.byteLength,
                        n.push(r >>> 8 & 255),
                        n.push(255 & r),
                        n = n.concat(Array.prototype.slice.call(s));
                    var a = e.box(e.types.avcC, new Uint8Array([1, o[3], o[4], o[5], 255, 224 | t.sps.length].concat(o).concat([t.pps.length]).concat(n)))
                      , l = t.width
                      , d = t.height
                      , u = t.pixelRatio[0]
                      , h = t.pixelRatio[1];
                    return e.box(e.types.avc1, new Uint8Array([0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, l >> 8 & 255, 255 & l, d >> 8 & 255, 255 & d, 0, 72, 0, 0, 0, 72, 0, 0, 0, 0, 0, 0, 0, 1, 18, 100, 97, 105, 108, 121, 109, 111, 116, 105, 111, 110, 47, 104, 108, 115, 46, 106, 115, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 24, 17, 17]), a, e.box(e.types.btrt, new Uint8Array([0, 28, 156, 128, 0, 45, 198, 192, 0, 45, 198, 192])), e.box(e.types.pasp, new Uint8Array([u >> 24, u >> 16 & 255, u >> 8 & 255, 255 & u, h >> 24, h >> 16 & 255, h >> 8 & 255, 255 & h])))
                }
                ,
                e.esds = function(e) {
                    var t = e.config.length;
                    return new Uint8Array([0, 0, 0, 0, 3, 23 + t, 0, 1, 0, 4, 15 + t, 64, 21, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 5].concat([t]).concat(e.config).concat([6, 1, 2]))
                }
                ,
                e.mp4a = function(t) {
                    var i = t.samplerate;
                    return e.box(e.types.mp4a, new Uint8Array([0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, t.channelCount, 0, 16, 0, 0, 0, 0, i >> 8 & 255, 255 & i, 0, 0]), e.box(e.types.esds, e.esds(t)))
                }
                ,
                e.mp3 = function(t) {
                    var i = t.samplerate;
                    return e.box(e.types[".mp3"], new Uint8Array([0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, t.channelCount, 0, 16, 0, 0, 0, 0, i >> 8 & 255, 255 & i, 0, 0]))
                }
                ,
                e.stsd = function(t) {
                    return "audio" === t.type ? t.isAAC || "mp3" !== t.codec ? e.box(e.types.stsd, e.STSD, e.mp4a(t)) : e.box(e.types.stsd, e.STSD, e.mp3(t)) : e.box(e.types.stsd, e.STSD, e.avc1(t))
                }
                ,
                e.tkhd = function(t) {
                    var i = t.id
                      , r = t.duration * t.timescale
                      , o = t.width
                      , n = t.height
                      , a = Math.floor(r / (s + 1))
                      , l = Math.floor(r % (s + 1));
                    return e.box(e.types.tkhd, new Uint8Array([1, 0, 0, 7, 0, 0, 0, 0, 0, 0, 0, 2, 0, 0, 0, 0, 0, 0, 0, 3, i >> 24 & 255, i >> 16 & 255, i >> 8 & 255, 255 & i, 0, 0, 0, 0, a >> 24, a >> 16 & 255, a >> 8 & 255, 255 & a, l >> 24, l >> 16 & 255, l >> 8 & 255, 255 & l, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 64, 0, 0, 0, o >> 8 & 255, 255 & o, 0, 0, n >> 8 & 255, 255 & n, 0, 0]))
                }
                ,
                e.traf = function(t, i) {
                    var r = e.sdtp(t)
                      , o = t.id
                      , n = Math.floor(i / (s + 1))
                      , a = Math.floor(i % (s + 1));
                    return e.box(e.types.traf, e.box(e.types.tfhd, new Uint8Array([0, 0, 0, 0, o >> 24, o >> 16 & 255, o >> 8 & 255, 255 & o])), e.box(e.types.tfdt, new Uint8Array([1, 0, 0, 0, n >> 24, n >> 16 & 255, n >> 8 & 255, 255 & n, a >> 24, a >> 16 & 255, a >> 8 & 255, 255 & a])), e.trun(t, r.length + 16 + 20 + 8 + 16 + 8 + 8), r)
                }
                ,
                e.trak = function(t) {
                    return t.duration = t.duration || 4294967295,
                    e.box(e.types.trak, e.tkhd(t), e.mdia(t))
                }
                ,
                e.trex = function(t) {
                    var i = t.id;
                    return e.box(e.types.trex, new Uint8Array([0, 0, 0, 0, i >> 24, i >> 16 & 255, i >> 8 & 255, 255 & i, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 1]))
                }
                ,
                e.trun = function(t, i) {
                    var s, r, o, n, a, l, d = t.samples || [], u = d.length, h = 12 + 16 * u, c = new Uint8Array(h);
                    for (i += 8 + h,
                    c.set([0, 0, 15, 1, u >>> 24 & 255, u >>> 16 & 255, u >>> 8 & 255, 255 & u, i >>> 24 & 255, i >>> 16 & 255, i >>> 8 & 255, 255 & i], 0),
                    s = 0; s < u; s++)
                        r = d[s],
                        o = r.duration,
                        n = r.size,
                        a = r.flags,
                        l = r.cts,
                        c.set([o >>> 24 & 255, o >>> 16 & 255, o >>> 8 & 255, 255 & o, n >>> 24 & 255, n >>> 16 & 255, n >>> 8 & 255, 255 & n, a.isLeading << 2 | a.dependsOn, a.isDependedOn << 6 | a.hasRedundancy << 4 | a.paddingValue << 1 | a.isNonSync, 61440 & a.degradPrio, 15 & a.degradPrio, l >>> 24 & 255, l >>> 16 & 255, l >>> 8 & 255, 255 & l], 12 + 16 * s);
                    return e.box(e.types.trun, c)
                }
                ,
                e.initSegment = function(t) {
                    e.types || e.init();
                    var i, s = e.moov(t);
                    return i = new Uint8Array(e.FTYP.byteLength + s.byteLength),
                    i.set(e.FTYP),
                    i.set(s, e.FTYP.byteLength),
                    i
                }
                ,
                e
            }();
            t["default"] = r
        },
        "./src/remux/mp4-remuxer.js": function(e, t, i) {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            });
            var s = i("./src/remux/aac-helper.js")
              , r = i("./src/remux/mp4-generator.js")
              , o = i("./src/events.js")
              , n = i("./src/errors.js")
              , a = i("./src/utils/logger.js")
              , l = function() {
                function e(e, t, i, s) {
                    this.observer = e,
                    this.config = t,
                    this.typeSupported = i;
                    var r = navigator.userAgent;
                    this.isSafari = s && s.indexOf("Apple") > -1 && r && !r.match("CriOS"),
                    this.ISGenerated = !1
                }
                return e.prototype.destroy = function() {}
                ,
                e.prototype.resetTimeStamp = function(e) {
                    this._initPTS = this._initDTS = e
                }
                ,
                e.prototype.resetInitSegment = function() {
                    this.ISGenerated = !1
                }
                ,
                e.prototype.remux = function(e, t, i, s, r, n, l) {
                    if (this.ISGenerated || this.generateIS(e, t, r),
                    this.ISGenerated) {
                        var d = e.samples.length
                          , u = t.samples.length
                          , h = r
                          , c = r;
                        if (d && u) {
                            var f = (e.samples[0].dts - t.samples[0].dts) / t.inputTimeScale;
                            h += Math.max(0, f),
                            c += Math.max(0, -f)
                        }
                        if (d) {
                            e.timescale || (a.logger.warn("regenerate InitSegment as audio detected"),
                            this.generateIS(e, t, r));
                            var p = this.remuxAudio(e, h, n, l);
                            if (u) {
                                var v = void 0;
                                p && (v = p.endPTS - p.startPTS),
                                t.timescale || (a.logger.warn("regenerate InitSegment as video detected"),
                                this.generateIS(e, t, r)),
                                this.remuxVideo(t, c, n, v, l)
                            }
                        } else if (u) {
                            var g = this.remuxVideo(t, c, n, 0, l);
                            g && e.codec && this.remuxEmptyAudio(e, h, n, g)
                        }
                    }
                    i.samples.length && this.remuxID3(i, r),
                    s.samples.length && this.remuxText(s, r),
                    this.observer.trigger(o["default"].FRAG_PARSED)
                }
                ,
                e.prototype.generateIS = function(e, t, i) {
                    var s, l, d = this.observer, u = e.samples, h = t.samples, c = this.typeSupported, f = "audio/mp4", p = {}, v = {
                        tracks: p
                    }, g = this._initPTS === undefined;
                    if (g && (s = l = Infinity),
                    e.config && u.length && (e.timescale = e.samplerate,
                    a.logger.log("audio sampling rate : " + e.samplerate),
                    e.isAAC || (c.mpeg ? (f = "audio/mpeg",
                    e.codec = "") : c.mp3 && (e.codec = "mp3")),
                    p.audio = {
                        container: f,
                        codec: e.codec,
                        initSegment: !e.isAAC && c.mpeg ? new Uint8Array : r["default"].initSegment([e]),
                        metadata: {
                            channelCount: e.channelCount
                        }
                    },
                    g && (s = l = u[0].pts - e.inputTimeScale * i)),
                    t.sps && t.pps && h.length) {
                        var y = t.inputTimeScale;
                        t.timescale = y,
                        p.video = {
                            container: "video/mp4",
                            codec: t.codec,
                            initSegment: r["default"].initSegment([t]),
                            metadata: {
                                width: t.width,
                                height: t.height
                            }
                        },
                        g && (s = Math.min(s, h[0].pts - y * i),
                        l = Math.min(l, h[0].dts - y * i),
                        this.observer.trigger(o["default"].INIT_PTS_FOUND, {
                            initPTS: s
                        }))
                    }
                    Object.keys(p).length ? (d.trigger(o["default"].FRAG_PARSING_INIT_SEGMENT, v),
                    this.ISGenerated = !0,
                    g && (this._initPTS = s,
                    this._initDTS = l)) : d.trigger(o["default"].ERROR, {
                        type: n.ErrorTypes.MEDIA_ERROR,
                        details: n.ErrorDetails.FRAG_PARSING_ERROR,
                        fatal: !1,
                        reason: "no audio/video samples found"
                    })
                }
                ,
                e.prototype.remuxVideo = function(e, t, i, s, l) {
                    var d, u, h, c, f, p, v, g = 8, y = e.timescale, m = e.samples, _ = [], b = m.length, E = this._PTSNormalize, S = this._initDTS, T = this.nextAvcDts, w = this.isSafari;
                    if (0 !== b) {
                        w && (i |= m.length && T && (l && Math.abs(t - T / y) < .1 || Math.abs(m[0].pts - T - S) < y / 5)),
                        i || (T = t * y),
                        m.forEach(function(e) {
                            e.pts = E(e.pts - S, T),
                            e.dts = E(e.dts - S, T)
                        }),
                        m.sort(function(e, t) {
                            var i = e.dts - t.dts
                              , s = e.pts - t.pts;
                            return i || s || e.id - t.id
                        });
                        var P = m.reduce(function(e, t) {
                            return Math.max(Math.min(e, t.pts - t.dts), -18e3)
                        }, 0);
                        if (P < 0) {
                            a.logger.warn("PTS < DTS detected in video samples, shifting DTS by " + Math.round(P / 90) + " ms to overcome this issue");
                            for (var C = 0; C < m.length; C++)
                                m[C].dts += P
                        }
                        var A = m[0];
                        f = Math.max(A.dts, 0),
                        c = Math.max(A.pts, 0);
                        var k = Math.round((f - T) / 90);
                        i && k && (k > 1 ? a.logger.log("AVC:" + k + " ms hole between fragments detected,filling it") : k < -1 && a.logger.log("AVC:" + -k + " ms overlapping between fragments detected"),
                        f = T,
                        m[0].dts = f,
                        c = Math.max(c - k, T),
                        m[0].pts = c,
                        a.logger.log("Video/PTS/DTS adjusted: " + Math.round(c / 90) + "/" + Math.round(f / 90) + ",delta:" + k + " ms")),
                        f,
                        A = m[m.length - 1],
                        v = Math.max(A.dts, 0),
                        p = Math.max(A.pts, 0, v),
                        w && (d = Math.round((v - f) / (m.length - 1)));
                        for (var L = 0, D = 0, C = 0; C < b; C++) {
                            for (var R = m[C], B = R.units, x = B.length, I = 0, O = 0; O < x; O++)
                                I += B[O].data.length;
                            D += I,
                            L += x,
                            R.length = I,
                            R.dts = w ? f + C * d : Math.max(R.dts, f),
                            R.pts = Math.max(R.pts, R.dts)
                        }
                        var M = D + 4 * L + 8;
                        try {
                            u = new Uint8Array(M)
                        } catch (Z) {
                            return void this.observer.trigger(o["default"].ERROR, {
                                type: n.ErrorTypes.MUX_ERROR,
                                details: n.ErrorDetails.REMUX_ALLOC_ERROR,
                                fatal: !1,
                                bytes: M,
                                reason: "fail allocating video mdat " + M
                            })
                        }
                        var $ = new DataView(u.buffer);
                        $.setUint32(0, M),
                        u.set(r["default"].types.mdat, 4);
                        for (var C = 0; C < b; C++) {
                            for (var N = m[C], F = N.units, V = 0, U = void 0, O = 0, x = F.length; O < x; O++) {
                                var H = F[O]
                                  , j = H.data
                                  , G = H.data.byteLength;
                                $.setUint32(g, G),
                                g += 4,
                                u.set(j, g),
                                g += G,
                                V += 4 + G
                            }
                            if (w)
                                U = Math.max(0, d * Math.round((N.pts - N.dts) / d));
                            else {
                                if (C < b - 1)
                                    d = m[C + 1].dts - N.dts;
                                else {
                                    var Y = this.config
                                      , W = N.dts - m[C > 0 ? C - 1 : C].dts;
                                    if (Y.stretchShortVideoTrack) {
                                        var q = Y.maxBufferHole
                                          , K = Math.floor(q * y)
                                          , Q = (s ? c + s * y : this.nextAudioPts) - N.pts;
                                        Q > K ? (d = Q - W,
                                        d < 0 && (d = W),
                                        a.logger.log("It is approximately " + Q / 90 + " ms to the next segment; using duration " + d / 90 + " ms for the last video frame.")) : d = W
                                    } else
                                        d = W
                                }
                                U = Math.round(N.pts - N.dts)
                            }
                            _.push({
                                size: V,
                                duration: d,
                                cts: U,
                                flags: {
                                    isLeading: 0,
                                    isDependedOn: 0,
                                    hasRedundancy: 0,
                                    degradPrio: 0,
                                    dependsOn: N.key ? 2 : 1,
                                    isNonSync: N.key ? 0 : 1
                                }
                            })
                        }
                        this.nextAvcDts = v + d;
                        var z = e.dropped;
                        if (e.len = 0,
                        e.nbNalu = 0,
                        e.dropped = 0,
                        _.length && navigator.userAgent.toLowerCase().indexOf("chrome") > -1) {
                            var X = _[0].flags;
                            X.dependsOn = 2,
                            X.isNonSync = 0
                        }
                        e.samples = _,
                        h = r["default"].moof(e.sequenceNumber++, f, e),
                        e.samples = [];
                        var J = {
                            data1: h,
                            data2: u,
                            startPTS: c / y,
                            endPTS: (p + d) / y,
                            startDTS: f / y,
                            endDTS: this.nextAvcDts / y,
                            type: "video",
                            hasAudio: !1,
                            hasVideo: !0,
                            nb: _.length,
                            dropped: z
                        };
                        return this.observer.trigger(o["default"].FRAG_PARSING_DATA, J),
                        J
                    }
                }
                ,
                e.prototype.remuxAudio = function(e, t, i, l) {
                    var d, u, h, c, f, p, v, g = e.inputTimeScale, y = e.timescale, m = g / y, _ = e.isAAC ? 1024 : 1152, b = _ * m, E = this._PTSNormalize, S = this._initDTS, T = !e.isAAC && this.typeSupported.mpeg, w = e.samples, P = [], C = this.nextAudioPts;
                    if (i |= w.length && C && (l && Math.abs(t - C / g) < .1 || Math.abs(w[0].pts - C - S) < 20 * b),
                    w.forEach(function(e) {
                        e.pts = e.dts = E(e.pts - S, t * g)
                    }),
                    w = w.filter(function(e) {
                        return e.pts >= 0
                    }),
                    0 !== w.length) {
                        if (i || (C = l ? t * g : w[0].pts),
                        e.isAAC)
                            for (var A = this.config.maxAudioFramesDrift, k = 0, L = C; k < w.length; ) {
                                var D, R = w[k], B = R.pts;
                                D = B - L;
                                var x = Math.abs(1e3 * D / g);
                                if (D <= -A * b)
                                    a.logger.warn("Dropping 1 audio frame @ " + (L / g).toFixed(3) + "s due to " + Math.round(x) + " ms overlap."),
                                    w.splice(k, 1),
                                    e.len -= R.unit.length;
                                else if (D >= A * b && x < 1e4 && L) {
                                    var I = Math.round(D / b);
                                    a.logger.warn("Injecting " + I + " audio frame @ " + (L / g).toFixed(3) + "s due to " + Math.round(1e3 * D / g) + " ms gap.");
                                    for (var O = 0; O < I; O++) {
                                        var M = Math.max(L, 0);
                                        h = s["default"].getSilentFrame(e.manifestCodec || e.codec, e.channelCount),
                                        h || (a.logger.log("Unable to get silent frame for given audio codec; duplicating last frame instead."),
                                        h = R.unit.subarray()),
                                        w.splice(k, 0, {
                                            unit: h,
                                            pts: M,
                                            dts: M
                                        }),
                                        e.len += h.length,
                                        L += b,
                                        k++
                                    }
                                    R.pts = R.dts = L,
                                    L += b,
                                    k++
                                } else
                                    Math.abs(D),
                                    R.pts = R.dts = L,
                                    L += b,
                                    k++
                            }
                        for (var O = 0, $ = w.length; O < $; O++) {
                            var N = w[O]
                              , F = N.unit
                              , B = N.pts;
                            if (v !== undefined)
                                u.duration = Math.round((B - v) / m);
                            else {
                                var V = Math.round(1e3 * (B - C) / g)
                                  , U = 0;
                                if (i && e.isAAC && V) {
                                    if (V > 0 && V < 1e4)
                                        U = Math.round((B - C) / b),
                                        a.logger.log(V + " ms hole between AAC samples detected,filling it"),
                                        U > 0 && (h = s["default"].getSilentFrame(e.manifestCodec || e.codec, e.channelCount),
                                        h || (h = F.subarray()),
                                        e.len += U * h.length);
                                    else if (V < -12) {
                                        a.logger.log("drop overlapping AAC sample, expected/parsed/delta:" + (C / g).toFixed(3) + "s/" + (B / g).toFixed(3) + "s/" + -V + "ms"),
                                        e.len -= F.byteLength;
                                        continue
                                    }
                                    B = C
                                }
                                if (p = B,
                                !(e.len > 0))
                                    return;
                                var H = T ? e.len : e.len + 8;
                                d = T ? 0 : 8;
                                try {
                                    c = new Uint8Array(H)
                                } catch (Q) {
                                    return void this.observer.trigger(o["default"].ERROR, {
                                        type: n.ErrorTypes.MUX_ERROR,
                                        details: n.ErrorDetails.REMUX_ALLOC_ERROR,
                                        fatal: !1,
                                        bytes: H,
                                        reason: "fail allocating audio mdat " + H
                                    })
                                }
                                if (!T) {
                                    new DataView(c.buffer).setUint32(0, H),
                                    c.set(r["default"].types.mdat, 4)
                                }
                                for (var k = 0; k < U; k++)
                                    h = s["default"].getSilentFrame(e.manifestCodec || e.codec, e.channelCount),
                                    h || (a.logger.log("Unable to get silent frame for given audio codec; duplicating this frame instead."),
                                    h = F.subarray()),
                                    c.set(h, d),
                                    d += h.byteLength,
                                    u = {
                                        size: h.byteLength,
                                        cts: 0,
                                        duration: 1024,
                                        flags: {
                                            isLeading: 0,
                                            isDependedOn: 0,
                                            hasRedundancy: 0,
                                            degradPrio: 0,
                                            dependsOn: 1
                                        }
                                    },
                                    P.push(u)
                            }
                            c.set(F, d);
                            var j = F.byteLength;
                            d += j,
                            u = {
                                size: j,
                                cts: 0,
                                duration: 0,
                                flags: {
                                    isLeading: 0,
                                    isDependedOn: 0,
                                    hasRedundancy: 0,
                                    degradPrio: 0,
                                    dependsOn: 1
                                }
                            },
                            P.push(u),
                            v = B
                        }
                        var G = 0
                          , Y = P.length;
                        if (Y >= 2 && (G = P[Y - 2].duration,
                        u.duration = G),
                        Y) {
                            this.nextAudioPts = C = v + m * G,
                            e.len = 0,
                            e.samples = P,
                            f = T ? new Uint8Array : r["default"].moof(e.sequenceNumber++, p / m, e),
                            e.samples = [];
                            var W = p / g
                              , q = C / g
                              , K = {
                                data1: f,
                                data2: c,
                                startPTS: W,
                                endPTS: q,
                                startDTS: W,
                                endDTS: q,
                                type: "audio",
                                hasAudio: !0,
                                hasVideo: !1,
                                nb: Y
                            };
                            return this.observer.trigger(o["default"].FRAG_PARSING_DATA, K),
                            K
                        }
                        return null
                    }
                }
                ,
                e.prototype.remuxEmptyAudio = function(e, t, i, r) {
                    var o = e.inputTimeScale
                      , n = e.samplerate ? e.samplerate : o
                      , l = o / n
                      , d = this.nextAudioPts
                      , u = (d !== undefined ? d : r.startDTS * o) + this._initDTS
                      , h = r.endDTS * o + this._initDTS
                      , c = 1024 * l
                      , f = Math.ceil((h - u) / c)
                      , p = s["default"].getSilentFrame(e.manifestCodec || e.codec, e.channelCount);
                    if (a.logger.warn("remux empty Audio"),
                    !p)
                        return void a.logger.trace("Unable to remuxEmptyAudio since we were unable to get a silent frame for given audio codec!");
                    for (var v = [], g = 0; g < f; g++) {
                        var y = u + g * c;
                        v.push({
                            unit: p,
                            pts: y,
                            dts: y
                        }),
                        e.len += p.length
                    }
                    e.samples = v,
                    this.remuxAudio(e, t, i)
                }
                ,
                e.prototype.remuxID3 = function(e, t) {
                    var i, s = e.samples.length, r = e.inputTimeScale, n = this._initPTS, a = this._initDTS;
                    if (s) {
                        for (var l = 0; l < s; l++)
                            i = e.samples[l],
                            i.pts = (i.pts - n) / r,
                            i.dts = (i.dts - a) / r;
                        this.observer.trigger(o["default"].FRAG_PARSING_METADATA, {
                            samples: e.samples
                        })
                    }
                    e.samples = [],
                    t = t
                }
                ,
                e.prototype.remuxText = function(e, t) {
                    e.samples.sort(function(e, t) {
                        return e.pts - t.pts
                    });
                    var i, s = e.samples.length, r = e.inputTimeScale, n = this._initPTS;
                    if (s) {
                        for (var a = 0; a < s; a++)
                            i = e.samples[a],
                            i.pts = (i.pts - n) / r;
                        this.observer.trigger(o["default"].FRAG_PARSING_USERDATA, {
                            samples: e.samples
                        })
                    }
                    e.samples = [],
                    t = t
                }
                ,
                e.prototype._PTSNormalize = function(e, t) {
                    var i;
                    if (t === undefined)
                        return e;
                    for (i = t < e ? -8589934592 : 8589934592; Math.abs(e - t) > 4294967296; )
                        e += i;
                    return e
                }
                ,
                e
            }();
            t["default"] = l
        },
        "./src/remux/passthrough-remuxer.js": function(e, t, i) {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            });
            var s = i("./src/events.js")
              , r = function() {
                function e(e) {
                    this.observer = e
                }
                return e.prototype.destroy = function() {}
                ,
                e.prototype.resetTimeStamp = function() {}
                ,
                e.prototype.resetInitSegment = function() {}
                ,
                e.prototype.remux = function(e, t, i, r, o, n, a, l) {
                    var d = this.observer
                      , u = "";
                    e && (u += "audio"),
                    t && (u += "video"),
                    d.trigger(s["default"].FRAG_PARSING_DATA, {
                        data1: l,
                        startPTS: o,
                        startDTS: o,
                        type: u,
                        hasAudio: !!e,
                        hasVideo: !!t,
                        nb: 1,
                        dropped: 0
                    }),
                    d.trigger(s["default"].FRAG_PARSED)
                }
                ,
                e
            }();
            t["default"] = r
        },
        "./src/task-loop.js": function(e, t, i) {
            "use strict";
            var s = this && this.__extends || function() {
                var e = Object.setPrototypeOf || {
                    __proto__: []
                }instanceof Array && function(e, t) {
                    e.__proto__ = t
                }
                || function(e, t) {
                    for (var i in t)
                        t.hasOwnProperty(i) && (e[i] = t[i])
                }
                ;
                return function(t, i) {
                    function s() {
                        this.constructor = t
                    }
                    e(t, i),
                    t.prototype = null === i ? Object.create(i) : (s.prototype = i.prototype,
                    new s)
                }
            }();
            Object.defineProperty(t, "__esModule", {
                value: !0
            });
            var r = i("./src/event-handler.js")
              , o = function(e) {
                function t(t) {
                    for (var i = [], s = 1; s < arguments.length; s++)
                        i[s - 1] = arguments[s];
                    var r = e.apply(this, [t].concat(i)) || this;
                    return r._tickInterval = null,
                    r._tickTimer = null,
                    r._tickCallCount = 0,
                    r._boundTick = r.tick.bind(r),
                    r
                }
                return s(t, e),
                t.prototype.onHandlerDestroying = function() {
                    this.clearNextTick(),
                    this.clearInterval()
                }
                ,
                t.prototype.hasInterval = function() {
                    return !!this._tickInterval
                }
                ,
                t.prototype.hasNextTick = function() {
                    return !!this._tickTimer
                }
                ,
                t.prototype.setInterval = function(e) {
                    return !this._tickInterval && (this._tickInterval = setInterval(this._boundTick, e),
                    !0)
                }
                ,
                t.prototype.clearInterval = function() {
                    return !!this._tickInterval && (clearInterval(this._tickInterval),
                    this._tickInterval = null,
                    !0)
                }
                ,
                t.prototype.clearNextTick = function() {
                    return !!this._tickTimer && (clearTimeout(this._tickTimer),
                    this._tickTimer = null,
                    !0)
                }
                ,
                t.prototype.tick = function() {
                    1 === ++this._tickCallCount && (this.doTick(),
                    this._tickCallCount > 1 && (this.clearNextTick(),
                    this._tickTimer = setTimeout(this._boundTick, 0)),
                    this._tickCallCount = 0)
                }
                ,
                t.prototype.doTick = function() {}
                ,
                t
            }(r["default"]);
            t["default"] = o
        },
        "./src/utils/attr-list.js": function(e, t, i) {
            "use strict";
            (function(e) {
                Object.defineProperty(t, "__esModule", {
                    value: !0
                });
                var i = /^(\d+)x(\d+)$/
                  , s = /\s*(.+?)\s*=((?:\".*?\")|.*?)(?:,|$)/g
                  , r = function() {
                    function t(e) {
                        "string" == typeof e && (e = t.parseAttrList(e));
                        for (var i in e)
                            e.hasOwnProperty(i) && (this[i] = e[i])
                    }
                    return t.prototype.decimalInteger = function(t) {
                        var i = parseInt(this[t], 10);
                        return i > e.MAX_SAFE_INTEGER ? Infinity : i
                    }
                    ,
                    t.prototype.hexadecimalInteger = function(e) {
                        if (this[e]) {
                            var t = (this[e] || "0x").slice(2);
                            t = (1 & t.length ? "0" : "") + t;
                            for (var i = new Uint8Array(t.length / 2), s = 0; s < t.length / 2; s++)
                                i[s] = parseInt(t.slice(2 * s, 2 * s + 2), 16);
                            return i
                        }
                        return null
                    }
                    ,
                    t.prototype.hexadecimalIntegerAsNumber = function(t) {
                        var i = parseInt(this[t], 16);
                        return i > e.MAX_SAFE_INTEGER ? Infinity : i
                    }
                    ,
                    t.prototype.decimalFloatingPoint = function(e) {
                        return parseFloat(this[e])
                    }
                    ,
                    t.prototype.enumeratedString = function(e) {
                        return this[e]
                    }
                    ,
                    t.prototype.decimalResolution = function(e) {
                        var t = i.exec(this[e]);
                        return null === t ? undefined : {
                            width: parseInt(t[1], 10),
                            height: parseInt(t[2], 10)
                        }
                    }
                    ,
                    t.parseAttrList = function(e) {
                        var t, i = {};
                        for (s.lastIndex = 0; null !== (t = s.exec(e)); ) {
                            var r = t[2];
                            0 === r.indexOf('"') && r.lastIndexOf('"') === r.length - 1 && (r = r.slice(1, -1)),
                            i[t[1]] = r
                        }
                        return i
                    }
                    ,
                    t
                }();
                t["default"] = r
            }
            ).call(this, i("./src/polyfills/number.js").Number)
        },
        "./src/utils/binary-search.js": function(e, t, i) {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            });
            var s = {
                search: function(e, t) {
                    for (var i = 0, s = e.length - 1, r = null, o = null; i <= s; ) {
                        r = (i + s) / 2 | 0,
                        o = e[r];
                        var n = t(o);
                        if (n > 0)
                            i = r + 1;
                        else {
                            if (!(n < 0))
                                return o;
                            s = r - 1
                        }
                    }
                    return null
                }
            };
            t["default"] = s
        },
        "./src/utils/buffer-helper.js": function(e, t, i) {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            });
            var s = function() {
                function e() {}
                return e.isBuffered = function(e, t) {
                    try {
                        if (e)
                            for (var i = e.buffered, s = 0; s < i.length; s++)
                                if (t >= i.start(s) && t <= i.end(s))
                                    return !0
                    } catch (r) {}
                    return !1
                }
                ,
                e.bufferInfo = function(t, i, s) {
                    try {
                        if (t) {
                            var r = t.buffered
                              , o = []
                              , n = void 0;
                            for (n = 0; n < r.length; n++)
                                o.push({
                                    start: r.start(n),
                                    end: r.end(n)
                                });
                            return e.bufferedInfo(o, i, s)
                        }
                    } catch (a) {}
                    return {
                        len: 0,
                        start: i,
                        end: i,
                        nextStart: undefined
                    }
                }
                ,
                e.bufferedInfo = function(e, t, i) {
                    var s, r, o, n, a, l = [];
                    for (e.sort(function(e, t) {
                        var i = e.start - t.start;
                        return i || t.end - e.end
                    }),
                    a = 0; a < e.length; a++) {
                        var d = l.length;
                        if (d) {
                            var u = l[d - 1].end;
                            e[a].start - u < i ? e[a].end > u && (l[d - 1].end = e[a].end) : l.push(e[a])
                        } else
                            l.push(e[a])
                    }
                    for (a = 0,
                    s = 0,
                    r = o = t; a < l.length; a++) {
                        var h = l[a].start
                          , c = l[a].end;
                        if (t + i >= h && t < c)
                            r = h,
                            o = c,
                            s = o - t;
                        else if (t + i < h) {
                            n = h;
                            break
                        }
                    }
                    return {
                        len: s,
                        start: r,
                        end: o,
                        nextStart: n
                    }
                }
                ,
                e
            }();
            t.BufferHelper = s
        },
        "./src/utils/cea-608-parser.js": function(e, t, i) {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            });
            var s = {
                42: 225,
                92: 233,
                94: 237,
                95: 243,
                96: 250,
                123: 231,
                124: 247,
                125: 209,
                126: 241,
                127: 9608,
                128: 174,
                129: 176,
                130: 189,
                131: 191,
                132: 8482,
                133: 162,
                134: 163,
                135: 9834,
                136: 224,
                137: 32,
                138: 232,
                139: 226,
                140: 234,
                141: 238,
                142: 244,
                143: 251,
                144: 193,
                145: 201,
                146: 211,
                147: 218,
                148: 220,
                149: 252,
                150: 8216,
                151: 161,
                152: 42,
                153: 8217,
                154: 9473,
                155: 169,
                156: 8480,
                157: 8226,
                158: 8220,
                159: 8221,
                160: 192,
                161: 194,
                162: 199,
                163: 200,
                164: 202,
                165: 203,
                166: 235,
                167: 206,
                168: 207,
                169: 239,
                170: 212,
                171: 217,
                172: 249,
                173: 219,
                174: 171,
                175: 187,
                176: 195,
                177: 227,
                178: 205,
                179: 204,
                180: 236,
                181: 210,
                182: 242,
                183: 213,
                184: 245,
                185: 123,
                186: 125,
                187: 92,
                188: 94,
                189: 95,
                190: 124,
                191: 8764,
                192: 196,
                193: 228,
                194: 214,
                195: 246,
                196: 223,
                197: 165,
                198: 164,
                199: 9475,
                200: 197,
                201: 229,
                202: 216,
                203: 248,
                204: 9487,
                205: 9491,
                206: 9495,
                207: 9499
            }
              , r = function(e) {
                var t = e;
                return s.hasOwnProperty(e) && (t = s[e]),
                String.fromCharCode(t)
            }
              , o = 15
              , n = 100
              , a = {
                17: 1,
                18: 3,
                21: 5,
                22: 7,
                23: 9,
                16: 11,
                19: 12,
                20: 14
            }
              , l = {
                17: 2,
                18: 4,
                21: 6,
                22: 8,
                23: 10,
                19: 13,
                20: 15
            }
              , d = {
                25: 1,
                26: 3,
                29: 5,
                30: 7,
                31: 9,
                24: 11,
                27: 12,
                28: 14
            }
              , u = {
                25: 2,
                26: 4,
                29: 6,
                30: 8,
                31: 10,
                27: 13,
                28: 15
            }
              , h = ["white", "green", "blue", "cyan", "red", "yellow", "magenta", "black", "transparent"]
              , c = {
                verboseFilter: {
                    DATA: 3,
                    DEBUG: 3,
                    INFO: 2,
                    WARNING: 2,
                    TEXT: 1,
                    ERROR: 0
                },
                time: null,
                verboseLevel: 0,
                setTime: function(e) {
                    this.time = e
                },
                log: function(e, t) {
                    this.verboseFilter[e];
                    this.verboseLevel
                }
            }
              , f = function(e) {
                for (var t = [], i = 0; i < e.length; i++)
                    t.push(e[i].toString(16));
                return t
            }
              , p = function() {
                function e(e, t, i, s, r) {
                    this.foreground = e || "white",
                    this.underline = t || !1,
                    this.italics = i || !1,
                    this.background = s || "black",
                    this.flash = r || !1
                }
                return e.prototype.reset = function() {
                    this.foreground = "white",
                    this.underline = !1,
                    this.italics = !1,
                    this.background = "black",
                    this.flash = !1
                }
                ,
                e.prototype.setStyles = function(e) {
                    for (var t = ["foreground", "underline", "italics", "background", "flash"], i = 0; i < t.length; i++) {
                        var s = t[i];
                        e.hasOwnProperty(s) && (this[s] = e[s])
                    }
                }
                ,
                e.prototype.isDefault = function() {
                    return "white" === this.foreground && !this.underline && !this.italics && "black" === this.background && !this.flash
                }
                ,
                e.prototype.equals = function(e) {
                    return this.foreground === e.foreground && this.underline === e.underline && this.italics === e.italics && this.background === e.background && this.flash === e.flash
                }
                ,
                e.prototype.copy = function(e) {
                    this.foreground = e.foreground,
                    this.underline = e.underline,
                    this.italics = e.italics,
                    this.background = e.background,
                    this.flash = e.flash
                }
                ,
                e.prototype.toString = function() {
                    return "color=" + this.foreground + ", underline=" + this.underline + ", italics=" + this.italics + ", background=" + this.background + ", flash=" + this.flash
                }
                ,
                e
            }()
              , v = function() {
                function e(e, t, i, s, r, o) {
                    this.uchar = e || " ",
                    this.penState = new p(t,i,s,r,o)
                }
                return e.prototype.reset = function() {
                    this.uchar = " ",
                    this.penState.reset()
                }
                ,
                e.prototype.setChar = function(e, t) {
                    this.uchar = e,
                    this.penState.copy(t)
                }
                ,
                e.prototype.setPenState = function(e) {
                    this.penState.copy(e)
                }
                ,
                e.prototype.equals = function(e) {
                    return this.uchar === e.uchar && this.penState.equals(e.penState)
                }
                ,
                e.prototype.copy = function(e) {
                    this.uchar = e.uchar,
                    this.penState.copy(e.penState)
                }
                ,
                e.prototype.isEmpty = function() {
                    return " " === this.uchar && this.penState.isDefault()
                }
                ,
                e
            }()
              , g = function() {
                function e() {
                    this.chars = [];
                    for (var e = 0; e < n; e++)
                        this.chars.push(new v);
                    this.pos = 0,
                    this.currPenState = new p
                }
                return e.prototype.equals = function(e) {
                    for (var t = !0, i = 0; i < n; i++)
                        if (!this.chars[i].equals(e.chars[i])) {
                            t = !1;
                            break
                        }
                    return t
                }
                ,
                e.prototype.copy = function(e) {
                    for (var t = 0; t < n; t++)
                        this.chars[t].copy(e.chars[t])
                }
                ,
                e.prototype.isEmpty = function() {
                    for (var e = !0, t = 0; t < n; t++)
                        if (!this.chars[t].isEmpty()) {
                            e = !1;
                            break
                        }
                    return e
                }
                ,
                e.prototype.setCursor = function(e) {
                    this.pos !== e && (this.pos = e),
                    this.pos < 0 ? (c.log("ERROR", "Negative cursor position " + this.pos),
                    this.pos = 0) : this.pos > n && (c.log("ERROR", "Too large cursor position " + this.pos),
                    this.pos = n)
                }
                ,
                e.prototype.moveCursor = function(e) {
                    var t = this.pos + e;
                    if (e > 1)
                        for (var i = this.pos + 1; i < t + 1; i++)
                            this.chars[i].setPenState(this.currPenState);
                    this.setCursor(t)
                }
                ,
                e.prototype.backSpace = function() {
                    this.moveCursor(-1),
                    this.chars[this.pos].setChar(" ", this.currPenState)
                }
                ,
                e.prototype.insertChar = function(e) {
                    e >= 144 && this.backSpace();
                    var t = r(e);
                    if (this.pos >= n)
                        return void c.log("ERROR", "Cannot insert " + e.toString(16) + " (" + t + ") at position " + this.pos + ". Skipping it!");
                    this.chars[this.pos].setChar(t, this.currPenState),
                    this.moveCursor(1)
                }
                ,
                e.prototype.clearFromPos = function(e) {
                    var t;
                    for (t = e; t < n; t++)
                        this.chars[t].reset()
                }
                ,
                e.prototype.clear = function() {
                    this.clearFromPos(0),
                    this.pos = 0,
                    this.currPenState.reset()
                }
                ,
                e.prototype.clearToEndOfRow = function() {
                    this.clearFromPos(this.pos)
                }
                ,
                e.prototype.getTextString = function() {
                    for (var e = [], t = !0, i = 0; i < n; i++) {
                        var s = this.chars[i].uchar;
                        " " !== s && (t = !1),
                        e.push(s)
                    }
                    return t ? "" : e.join("")
                }
                ,
                e.prototype.setPenStyles = function(e) {
                    this.currPenState.setStyles(e),
                    this.chars[this.pos].setPenState(this.currPenState)
                }
                ,
                e
            }()
              , y = function() {
                function e() {
                    this.rows = [];
                    for (var e = 0; e < o; e++)
                        this.rows.push(new g);
                    this.currRow = o - 1,
                    this.nrRollUpRows = null,
                    this.reset()
                }
                return e.prototype.reset = function() {
                    for (var e = 0; e < o; e++)
                        this.rows[e].clear();
                    this.currRow = o - 1
                }
                ,
                e.prototype.equals = function(e) {
                    for (var t = !0, i = 0; i < o; i++)
                        if (!this.rows[i].equals(e.rows[i])) {
                            t = !1;
                            break
                        }
                    return t
                }
                ,
                e.prototype.copy = function(e) {
                    for (var t = 0; t < o; t++)
                        this.rows[t].copy(e.rows[t])
                }
                ,
                e.prototype.isEmpty = function() {
                    for (var e = !0, t = 0; t < o; t++)
                        if (!this.rows[t].isEmpty()) {
                            e = !1;
                            break
                        }
                    return e
                }
                ,
                e.prototype.backSpace = function() {
                    this.rows[this.currRow].backSpace()
                }
                ,
                e.prototype.clearToEndOfRow = function() {
                    this.rows[this.currRow].clearToEndOfRow()
                }
                ,
                e.prototype.insertChar = function(e) {
                    this.rows[this.currRow].insertChar(e)
                }
                ,
                e.prototype.setPen = function(e) {
                    this.rows[this.currRow].setPenStyles(e)
                }
                ,
                e.prototype.moveCursor = function(e) {
                    this.rows[this.currRow].moveCursor(e)
                }
                ,
                e.prototype.setCursor = function(e) {
                    c.log("INFO", "setCursor: " + e),
                    this.rows[this.currRow].setCursor(e)
                }
                ,
                e.prototype.setPAC = function(e) {
                    c.log("INFO", "pacData = " + JSON.stringify(e));
                    var t = e.row - 1;
                    if (this.nrRollUpRows && t < this.nrRollUpRows - 1 && (t = this.nrRollUpRows - 1),
                    this.nrRollUpRows && this.currRow !== t) {
                        for (var i = 0; i < o; i++)
                            this.rows[i].clear();
                        var s = this.currRow + 1 - this.nrRollUpRows
                          , r = this.lastOutputScreen;
                        if (r) {
                            var n = r.rows[s].cueStartTime;
                            if (n && n < c.time)
                                for (var i = 0; i < this.nrRollUpRows; i++)
                                    this.rows[t - this.nrRollUpRows + i + 1].copy(r.rows[s + i])
                        }
                    }
                    this.currRow = t;
                    var a = this.rows[this.currRow];
                    if (null !== e.indent) {
                        var l = e.indent
                          , d = Math.max(l - 1, 0);
                        a.setCursor(e.indent),
                        e.color = a.chars[d].penState.foreground
                    }
                    var u = {
                        foreground: e.color,
                        underline: e.underline,
                        italics: e.italics,
                        background: "black",
                        flash: !1
                    };
                    this.setPen(u)
                }
                ,
                e.prototype.setBkgData = function(e) {
                    c.log("INFO", "bkgData = " + JSON.stringify(e)),
                    this.backSpace(),
                    this.setPen(e),
                    this.insertChar(32)
                }
                ,
                e.prototype.setRollUpRows = function(e) {
                    this.nrRollUpRows = e
                }
                ,
                e.prototype.rollUp = function() {
                    if (null === this.nrRollUpRows)
                        return void c.log("DEBUG", "roll_up but nrRollUpRows not set yet");
                    c.log("TEXT", this.getDisplayText());
                    var e = this.currRow + 1 - this.nrRollUpRows
                      , t = this.rows.splice(e, 1)[0];
                    t.clear(),
                    this.rows.splice(this.currRow, 0, t),
                    c.log("INFO", "Rolling up")
                }
                ,
                e.prototype.getDisplayText = function(e) {
                    e = e || !1;
                    for (var t = [], i = "", s = -1, r = 0; r < o; r++) {
                        var n = this.rows[r].getTextString();
                        n && (s = r + 1,
                        e ? t.push("Row " + s + ": '" + n + "'") : t.push(n.trim()))
                    }
                    return t.length > 0 && (i = e ? "[" + t.join(" | ") + "]" : t.join("\n")),
                    i
                }
                ,
                e.prototype.getTextAndFormat = function() {
                    return this.rows
                }
                ,
                e
            }()
              , m = function() {
                function e(e, t) {
                    this.chNr = e,
                    this.outputFilter = t,
                    this.mode = null,
                    this.verbose = 0,
                    this.displayedMemory = new y,
                    this.nonDisplayedMemory = new y,
                    this.lastOutputScreen = new y,
                    this.currRollUpRow = this.displayedMemory.rows[o - 1],
                    this.writeScreen = this.displayedMemory,
                    this.mode = null,
                    this.cueStartTime = null
                }
                return e.prototype.reset = function() {
                    this.mode = null,
                    this.displayedMemory.reset(),
                    this.nonDisplayedMemory.reset(),
                    this.lastOutputScreen.reset(),
                    this.currRollUpRow = this.displayedMemory.rows[o - 1],
                    this.writeScreen = this.displayedMemory,
                    this.mode = null,
                    this.cueStartTime = null,
                    this.lastCueEndTime = null
                }
                ,
                e.prototype.getHandler = function() {
                    return this.outputFilter
                }
                ,
                e.prototype.setHandler = function(e) {
                    this.outputFilter = e
                }
                ,
                e.prototype.setPAC = function(e) {
                    this.writeScreen.setPAC(e)
                }
                ,
                e.prototype.setBkgData = function(e) {
                    this.writeScreen.setBkgData(e)
                }
                ,
                e.prototype.setMode = function(e) {
                    e !== this.mode && (this.mode = e,
                    c.log("INFO", "MODE=" + e),
                    "MODE_POP-ON" === this.mode ? this.writeScreen = this.nonDisplayedMemory : (this.writeScreen = this.displayedMemory,
                    this.writeScreen.reset()),
                    "MODE_ROLL-UP" !== this.mode && (this.displayedMemory.nrRollUpRows = null,
                    this.nonDisplayedMemory.nrRollUpRows = null),
                    this.mode = e)
                }
                ,
                e.prototype.insertChars = function(e) {
                    for (var t = 0; t < e.length; t++)
                        this.writeScreen.insertChar(e[t]);
                    var i = this.writeScreen === this.displayedMemory ? "DISP" : "NON_DISP";
                    c.log("INFO", i + ": " + this.writeScreen.getDisplayText(!0)),
                    "MODE_PAINT-ON" !== this.mode && "MODE_ROLL-UP" !== this.mode || (c.log("TEXT", "DISPLAYED: " + this.displayedMemory.getDisplayText(!0)),
                    this.outputDataUpdate())
                }
                ,
                e.prototype.ccRCL = function() {
                    c.log("INFO", "RCL - Resume Caption Loading"),
                    this.setMode("MODE_POP-ON")
                }
                ,
                e.prototype.ccBS = function() {
                    c.log("INFO", "BS - BackSpace"),
                    "MODE_TEXT" !== this.mode && (this.writeScreen.backSpace(),
                    this.writeScreen === this.displayedMemory && this.outputDataUpdate())
                }
                ,
                e.prototype.ccAOF = function() {}
                ,
                e.prototype.ccAON = function() {}
                ,
                e.prototype.ccDER = function() {
                    c.log("INFO", "DER- Delete to End of Row"),
                    this.writeScreen.clearToEndOfRow(),
                    this.outputDataUpdate()
                }
                ,
                e.prototype.ccRU = function(e) {
                    c.log("INFO", "RU(" + e + ") - Roll Up"),
                    this.writeScreen = this.displayedMemory,
                    this.setMode("MODE_ROLL-UP"),
                    this.writeScreen.setRollUpRows(e)
                }
                ,
                e.prototype.ccFON = function() {
                    c.log("INFO", "FON - Flash On"),
                    this.writeScreen.setPen({
                        flash: !0
                    })
                }
                ,
                e.prototype.ccRDC = function() {
                    c.log("INFO", "RDC - Resume Direct Captioning"),
                    this.setMode("MODE_PAINT-ON")
                }
                ,
                e.prototype.ccTR = function() {
                    c.log("INFO", "TR"),
                    this.setMode("MODE_TEXT")
                }
                ,
                e.prototype.ccRTD = function() {
                    c.log("INFO", "RTD"),
                    this.setMode("MODE_TEXT")
                }
                ,
                e.prototype.ccEDM = function() {
                    c.log("INFO", "EDM - Erase Displayed Memory"),
                    this.displayedMemory.reset(),
                    this.outputDataUpdate(!0)
                }
                ,
                e.prototype.ccCR = function() {
                    c.log("CR - Carriage Return"),
                    this.writeScreen.rollUp(),
                    this.outputDataUpdate(!0)
                }
                ,
                e.prototype.ccENM = function() {
                    c.log("INFO", "ENM - Erase Non-displayed Memory"),
                    this.nonDisplayedMemory.reset()
                }
                ,
                e.prototype.ccEOC = function() {
                    if (c.log("INFO", "EOC - End Of Caption"),
                    "MODE_POP-ON" === this.mode) {
                        var e = this.displayedMemory;
                        this.displayedMemory = this.nonDisplayedMemory,
                        this.nonDisplayedMemory = e,
                        this.writeScreen = this.nonDisplayedMemory,
                        c.log("TEXT", "DISP: " + this.displayedMemory.getDisplayText())
                    }
                    this.outputDataUpdate(!0)
                }
                ,
                e.prototype.ccTO = function(e) {
                    c.log("INFO", "TO(" + e + ") - Tab Offset"),
                    this.writeScreen.moveCursor(e)
                }
                ,
                e.prototype.ccMIDROW = function(e) {
                    var t = {
                        flash: !1
                    };
                    if (t.underline = e % 2 == 1,
                    t.italics = e >= 46,
                    t.italics)
                        t.foreground = "white";
                    else {
                        var i = Math.floor(e / 2) - 16
                          , s = ["white", "green", "blue", "cyan", "red", "yellow", "magenta"];
                        t.foreground = s[i]
                    }
                    c.log("INFO", "MIDROW: " + JSON.stringify(t)),
                    this.writeScreen.setPen(t)
                }
                ,
                e.prototype.outputDataUpdate = function(e) {
                    void 0 === e && (e = !1);
                    var t = c.time;
                    null !== t && this.outputFilter && (null !== this.cueStartTime || this.displayedMemory.isEmpty() ? this.displayedMemory.equals(this.lastOutputScreen) || (this.outputFilter.newCue && (this.outputFilter.newCue(this.cueStartTime, t, this.lastOutputScreen),
                    !0 === e && this.outputFilter.dispatchCue && this.outputFilter.dispatchCue()),
                    this.cueStartTime = this.displayedMemory.isEmpty() ? null : t) : this.cueStartTime = t,
                    this.lastOutputScreen.copy(this.displayedMemory))
                }
                ,
                e.prototype.cueSplitAtTime = function(e) {
                    this.outputFilter && (this.displayedMemory.isEmpty() || (this.outputFilter.newCue && this.outputFilter.newCue(this.cueStartTime, e, this.displayedMemory),
                    this.cueStartTime = e))
                }
                ,
                e
            }()
              , _ = function() {
                function e(e, t, i) {
                    this.field = e || 1,
                    this.outputs = [t, i],
                    this.channels = [new m(1,t), new m(2,i)],
                    this.currChNr = -1,
                    this.lastCmdA = null,
                    this.lastCmdB = null,
                    this.bufferedData = [],
                    this.startTime = null,
                    this.lastTime = null,
                    this.dataCounters = {
                        padding: 0,
                        "char": 0,
                        cmd: 0,
                        other: 0
                    }
                }
                return e.prototype.getHandler = function(e) {
                    return this.channels[e].getHandler()
                }
                ,
                e.prototype.setHandler = function(e, t) {
                    this.channels[e].setHandler(t)
                }
                ,
                e.prototype.addData = function(e, t) {
                    var i, s, r, o = !1;
                    this.lastTime = e,
                    c.setTime(e);
                    for (var n = 0; n < t.length; n += 2)
                        if (s = 127 & t[n],
                        r = 127 & t[n + 1],
                        0 !== s || 0 !== r) {
                            if (c.log("DATA", "[" + f([t[n], t[n + 1]]) + "] -> (" + f([s, r]) + ")"),
                            i = this.parseCmd(s, r),
                            i || (i = this.parseMidrow(s, r)),
                            i || (i = this.parsePAC(s, r)),
                            i || (i = this.parseBackgroundAttributes(s, r)),
                            !i && (o = this.parseChars(s, r)))
                                if (this.currChNr && this.currChNr >= 0) {
                                    var a = this.channels[this.currChNr - 1];
                                    a.insertChars(o)
                                } else
                                    c.log("WARNING", "No channel found yet. TEXT-MODE?");
                            i ? this.dataCounters.cmd += 2 : o ? this.dataCounters["char"] += 2 : (this.dataCounters.other += 2,
                            c.log("WARNING", "Couldn't parse cleaned data " + f([s, r]) + " orig: " + f([t[n], t[n + 1]])))
                        } else
                            this.dataCounters.padding += 2
                }
                ,
                e.prototype.parseCmd = function(e, t) {
                    var i = null
                      , s = (20 === e || 28 === e) && t >= 32 && t <= 47
                      , r = (23 === e || 31 === e) && t >= 33 && t <= 35;
                    if (!s && !r)
                        return !1;
                    if (e === this.lastCmdA && t === this.lastCmdB)
                        return this.lastCmdA = null,
                        this.lastCmdB = null,
                        c.log("DEBUG", "Repeated command (" + f([e, t]) + ") is dropped"),
                        !0;
                    i = 20 === e || 23 === e ? 1 : 2;
                    var o = this.channels[i - 1];
                    return 20 === e || 28 === e ? 32 === t ? o.ccRCL() : 33 === t ? o.ccBS() : 34 === t ? o.ccAOF() : 35 === t ? o.ccAON() : 36 === t ? o.ccDER() : 37 === t ? o.ccRU(2) : 38 === t ? o.ccRU(3) : 39 === t ? o.ccRU(4) : 40 === t ? o.ccFON() : 41 === t ? o.ccRDC() : 42 === t ? o.ccTR() : 43 === t ? o.ccRTD() : 44 === t ? o.ccEDM() : 45 === t ? o.ccCR() : 46 === t ? o.ccENM() : 47 === t && o.ccEOC() : o.ccTO(t - 32),
                    this.lastCmdA = e,
                    this.lastCmdB = t,
                    this.currChNr = i,
                    !0
                }
                ,
                e.prototype.parseMidrow = function(e, t) {
                    var i = null;
                    if ((17 === e || 25 === e) && t >= 32 && t <= 47) {
                        if ((i = 17 === e ? 1 : 2) !== this.currChNr)
                            return c.log("ERROR", "Mismatch channel in midrow parsing"),
                            !1;
                        return this.channels[i - 1].ccMIDROW(t),
                        c.log("DEBUG", "MIDROW (" + f([e, t]) + ")"),
                        !0
                    }
                    return !1
                }
                ,
                e.prototype.parsePAC = function(e, t) {
                    var i = null
                      , s = null
                      , r = (e >= 17 && e <= 23 || e >= 25 && e <= 31) && t >= 64 && t <= 127
                      , o = (16 === e || 24 === e) && t >= 64 && t <= 95;
                    if (!r && !o)
                        return !1;
                    if (e === this.lastCmdA && t === this.lastCmdB)
                        return this.lastCmdA = null,
                        this.lastCmdB = null,
                        !0;
                    i = e <= 23 ? 1 : 2,
                    s = t >= 64 && t <= 95 ? 1 === i ? a[e] : d[e] : 1 === i ? l[e] : u[e];
                    var n = this.interpretPAC(s, t);
                    return this.channels[i - 1].setPAC(n),
                    this.lastCmdA = e,
                    this.lastCmdB = t,
                    this.currChNr = i,
                    !0
                }
                ,
                e.prototype.interpretPAC = function(e, t) {
                    var i = t
                      , s = {
                        color: null,
                        italics: !1,
                        indent: null,
                        underline: !1,
                        row: e
                    };
                    return i = t > 95 ? t - 96 : t - 64,
                    s.underline = 1 == (1 & i),
                    i <= 13 ? s.color = ["white", "green", "blue", "cyan", "red", "yellow", "magenta", "white"][Math.floor(i / 2)] : i <= 15 ? (s.italics = !0,
                    s.color = "white") : s.indent = 4 * Math.floor((i - 16) / 2),
                    s
                }
                ,
                e.prototype.parseChars = function(e, t) {
                    var i = null
                      , s = null
                      , o = null;
                    if (e >= 25 ? (i = 2,
                    o = e - 8) : (i = 1,
                    o = e),
                    o >= 17 && o <= 19) {
                        var n = t;
                        n = 17 === o ? t + 80 : 18 === o ? t + 112 : t + 144,
                        c.log("INFO", "Special char '" + r(n) + "' in channel " + i),
                        s = [n]
                    } else
                        e >= 32 && e <= 127 && (s = 0 === t ? [e] : [e, t]);
                    if (s) {
                        var a = f(s);
                        c.log("DEBUG", "Char codes =  " + a.join(",")),
                        this.lastCmdA = null,
                        this.lastCmdB = null
                    }
                    return s
                }
                ,
                e.prototype.parseBackgroundAttributes = function(e, t) {
                    var i, s, r, o, n = (16 === e || 24 === e) && t >= 32 && t <= 47, a = (23 === e || 31 === e) && t >= 45 && t <= 47;
                    return !(!n && !a) && (i = {},
                    16 === e || 24 === e ? (s = Math.floor((t - 32) / 2),
                    i.background = h[s],
                    t % 2 == 1 && (i.background = i.background + "_semi")) : 45 === t ? i.background = "transparent" : (i.foreground = "black",
                    47 === t && (i.underline = !0)),
                    r = e < 24 ? 1 : 2,
                    o = this.channels[r - 1],
                    o.setBkgData(i),
                    this.lastCmdA = null,
                    this.lastCmdB = null,
                    !0)
                }
                ,
                e.prototype.reset = function() {
                    for (var e = 0; e < this.channels.length; e++)
                        this.channels[e] && this.channels[e].reset();
                    this.lastCmdA = null,
                    this.lastCmdB = null
                }
                ,
                e.prototype.cueSplitAtTime = function(e) {
                    for (var t = 0; t < this.channels.length; t++)
                        this.channels[t] && this.channels[t].cueSplitAtTime(e)
                }
                ,
                e
            }();
            t["default"] = _
        },
        "./src/utils/codecs.js": function(e, t, i) {
            "use strict";
            function s(e, t) {
                var i = o[t];
                return !!i && !0 === i[e.slice(0, 4)]
            }
            function r(e, t) {
                return window.MediaSource.isTypeSupported((t || "video") + '/mp4;codecs="' + e + '"')
            }
            Object.defineProperty(t, "__esModule", {
                value: !0
            });
            var o = {
                audio: {
                    a3ds: !0,
                    "ac-3": !0,
                    "ac-4": !0,
                    alac: !0,
                    alaw: !0,
                    dra1: !0,
                    "dts+": !0,
                    "dts-": !0,
                    dtsc: !0,
                    dtse: !0,
                    dtsh: !0,
                    "ec-3": !0,
                    enca: !0,
                    g719: !0,
                    g726: !0,
                    m4ae: !0,
                    mha1: !0,
                    mha2: !0,
                    mhm1: !0,
                    mhm2: !0,
                    mlpa: !0,
                    mp4a: !0,
                    "raw ": !0,
                    Opus: !0,
                    samr: !0,
                    sawb: !0,
                    sawp: !0,
                    sevc: !0,
                    sqcp: !0,
                    ssmv: !0,
                    twos: !0,
                    ulaw: !0
                },
                video: {
                    avc1: !0,
                    avc2: !0,
                    avc3: !0,
                    avc4: !0,
                    avcp: !0,
                    drac: !0,
                    dvav: !0,
                    dvhe: !0,
                    encv: !0,
                    hev1: !0,
                    hvc1: !0,
                    mjp2: !0,
                    mp4v: !0,
                    mvc1: !0,
                    mvc2: !0,
                    mvc3: !0,
                    mvc4: !0,
                    resv: !0,
                    rv60: !0,
                    s263: !0,
                    svc1: !0,
                    svc2: !0,
                    "vc-1": !0,
                    vp08: !0,
                    vp09: !0
                }
            };
            t.isCodecType = s,
            t.isCodecSupportedInMp4 = r
        },
        "./src/utils/cues.js": function(e, t, i) {
            "use strict";
            function s(e, t, i, s) {
                for (var o, n, a, l, d, u = window.VTTCue || window.TextTrackCue, h = 0; h < s.rows.length; h++)
                    if (o = s.rows[h],
                    a = !0,
                    l = 0,
                    d = "",
                    !o.isEmpty()) {
                        for (var c = 0; c < o.chars.length; c++)
                            o.chars[c].uchar.match(/\s/) && a ? l++ : (d += o.chars[c].uchar,
                            a = !1);
                        o.cueStartTime = t,
                        t === i && (i += 1e-4),
                        n = new u(t,i,r.fixLineBreaks(d.trim())),
                        l >= 16 ? l-- : l++,
                        navigator.userAgent.match(/Firefox\//) ? n.line = h + 1 : n.line = h > 7 ? h - 2 : h + 1,
                        n.align = "left",
                        n.position = Math.max(0, Math.min(100, l / 32 * 100 + (navigator.userAgent.match(/Firefox\//) ? 50 : 0))),
                        e.addCue(n)
                    }
            }
            Object.defineProperty(t, "__esModule", {
                value: !0
            });
            var r = i("./src/utils/vttparser.js");
            t.newCue = s
        },
        "./src/utils/discontinuities.js": function(e, t, i) {
            "use strict";
            (function(e) {
                function s(e, t) {
                    for (var i = null, s = 0; s < e.length; s += 1) {
                        var r = e[s];
                        if (r && r.cc === t) {
                            i = r;
                            break
                        }
                    }
                    return i
                }
                function r(e, t) {
                    return h["default"].search(e, function(e) {
                        return e.cc < t ? 1 : e.cc > t ? -1 : 0
                    })
                }
                function o(e, t, i) {
                    var s = !1;
                    return t && t.details && i && (i.endCC > i.startCC || e && e.cc < i.startCC) && (s = !0),
                    s
                }
                function n(e, t) {
                    var i = e.fragments
                      , r = t.fragments;
                    if (!r.length || !i.length)
                        return void c.logger.log("No fragments to align");
                    var o = s(i, r[0].cc);
                    return !o || o && !o.startPTS ? void c.logger.log("No frag in previous level to align on") : o
                }
                function a(e, t) {
                    t.fragments.forEach(function(t) {
                        if (t) {
                            var i = t.start + e;
                            t.start = t.startPTS = i,
                            t.endPTS = i + t.duration
                        }
                    }),
                    t.PTSKnown = !0
                }
                function l(e, t, i) {
                    d(e, i, t),
                    !i.PTSKnown && t && u(i, t.details)
                }
                function d(e, t, i) {
                    if (o(e, i, t)) {
                        var s = n(i.details, t);
                        s && (c.logger.log("Adjusting PTS using last level due to CC increase within current level"),
                        a(s.start, t))
                    }
                }
                function u(t, i) {
                    if (i && i.fragments.length) {
                        if (!t.hasProgramDateTime || !i.hasProgramDateTime)
                            return;
                        var s = i.fragments[0].programDateTime
                          , r = t.fragments[0].programDateTime
                          , o = (r - s) / 1e3 + i.fragments[0].start;
                        e.isFinite(o) && (c.logger.log("adjusting PTS using programDateTime delta, sliding:" + o.toFixed(3)),
                        a(o, t))
                    }
                }
                Object.defineProperty(t, "__esModule", {
                    value: !0
                });
                var h = i("./src/utils/binary-search.js")
                  , c = i("./src/utils/logger.js");
                t.findFirstFragWithCC = s,
                t.findFragWithCC = r,
                t.shouldAlignOnDiscontinuities = o,
                t.findDiscontinuousReferenceFrag = n,
                t.adjustPts = a,
                t.alignStream = l,
                t.alignDiscontinuities = d,
                t.alignPDT = u
            }
            ).call(this, i("./src/polyfills/number.js").Number)
        },
        "./src/utils/ewma-bandwidth-estimator.js": function(e, t, i) {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            });
            var s = i("./src/utils/ewma.js")
              , r = function() {
                function e(e, t, i, r) {
                    this.hls = e,
                    this.defaultEstimate_ = r,
                    this.minWeight_ = .001,
                    this.minDelayMs_ = 50,
                    this.slow_ = new s["default"](t),
                    this.fast_ = new s["default"](i)
                }
                return e.prototype.sample = function(e, t) {
                    e = Math.max(e, this.minDelayMs_);
                    var i = 8e3 * t / e
                      , s = e / 1e3;
                    this.fast_.sample(s, i),
                    this.slow_.sample(s, i)
                }
                ,
                e.prototype.canEstimate = function() {
                    var e = this.fast_;
                    return e && e.getTotalWeight() >= this.minWeight_
                }
                ,
                e.prototype.getEstimate = function() {
                    return this.canEstimate() ? Math.min(this.fast_.getEstimate(), this.slow_.getEstimate()) : this.defaultEstimate_
                }
                ,
                e.prototype.destroy = function() {}
                ,
                e
            }();
            t["default"] = r
        },
        "./src/utils/ewma.js": function(e, t, i) {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            });
            var s = function() {
                function e(e) {
                    this.alpha_ = e ? Math.exp(Math.log(.5) / e) : 0,
                    this.estimate_ = 0,
                    this.totalWeight_ = 0
                }
                return e.prototype.sample = function(e, t) {
                    var i = Math.pow(this.alpha_, e);
                    this.estimate_ = t * (1 - i) + i * this.estimate_,
                    this.totalWeight_ += e
                }
                ,
                e.prototype.getTotalWeight = function() {
                    return this.totalWeight_
                }
                ,
                e.prototype.getEstimate = function() {
                    if (this.alpha_) {
                        var e = 1 - Math.pow(this.alpha_, this.totalWeight_);
                        return this.estimate_ / e
                    }
                    return this.estimate_
                }
                ,
                e
            }();
            t["default"] = s
        },
        "./src/utils/get-self-scope.js": function(e, t, i) {
            "use strict";
            function s() {
                return "undefined" == typeof window ? self : window
            }
            Object.defineProperty(t, "__esModule", {
                value: !0
            }),
            t.getSelfScope = s
        },
        "./src/utils/logger.js": function(e, t, i) {
            "use strict";
            function s() {}
            function r(e, t) {
                return t = "[" + e + "] > " + t
            }
            function o(e) {
                var t = u.console[e];
                return t ? function() {
                    for (var i = [], s = 0; s < arguments.length; s++)
                        i[s] = arguments[s];
                    i[0] && (i[0] = r(e, i[0])),
                    t.apply(u.console, i)
                }
                : s
            }
            function n(e) {
                for (var t = [], i = 1; i < arguments.length; i++)
                    t[i - 1] = arguments[i];
                t.forEach(function(t) {
                    d[t] = e[t] ? e[t].bind(e) : o(t)
                })
            }
            Object.defineProperty(t, "__esModule", {
                value: !0
            });
            var a = i("./src/utils/get-self-scope.js")
              , l = {
                trace: s,
                debug: s,
                log: s,
                warn: s,
                info: s,
                error: s
            }
              , d = l
              , u = a.getSelfScope();
            t.enableLogs = function(e) {
                if (!0 === e || "object" == typeof e) {
                    n(e, "debug", "log", "info", "warn", "error");
                    try {
                        d.log()
                    } catch (t) {
                        d = l
                    }
                } else
                    d = l
            }
            ,
            t.logger = d
        },
        "./src/utils/mediakeys-helper.js": function(e, t, i) {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            });
            var s = function() {
                return "undefined" != typeof window && window.navigator && window.navigator.requestMediaKeySystemAccess ? window.navigator.requestMediaKeySystemAccess.bind(window.navigator) : null
            }();
            t.requestMediaKeySystemAccess = s
        },
        "./src/utils/mediasource-helper.js": function(e, t, i) {
            "use strict";
            function s() {
                if ("undefined" != typeof window)
                    return window.MediaSource || window.WebKitMediaSource
            }
            Object.defineProperty(t, "__esModule", {
                value: !0
            }),
            t.getMediaSource = s
        },
        "./src/utils/output-filter.js": function(e, t, i) {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            });
            var s = function() {
                function e(e, t) {
                    this.timelineController = e,
                    this.trackName = t,
                    this.startTime = null,
                    this.endTime = null,
                    this.screen = null
                }
                return e.prototype.dispatchCue = function() {
                    null !== this.startTime && (this.timelineController.addCues(this.trackName, this.startTime, this.endTime, this.screen),
                    this.startTime = null)
                }
                ,
                e.prototype.newCue = function(e, t, i) {
                    (null === this.startTime || this.startTime > e) && (this.startTime = e),
                    this.endTime = t,
                    this.screen = i,
                    this.timelineController.createCaptionsTrack(this.trackName)
                }
                ,
                e
            }();
            t["default"] = s
        },
        "./src/utils/texttrack-utils.js": function(e, t, i) {
            "use strict";
            function s(e, t) {
                var i = null;
                try {
                    i = new window.Event("addtrack")
                } catch (s) {
                    i = document.createEvent("Event"),
                    i.initEvent("addtrack", !1, !1)
                }
                i.track = e,
                t.dispatchEvent(i)
            }
            function r(e) {
                if (e && e.cues)
                    for (; e.cues.length > 0; )
                        e.removeCue(e.cues[0])
            }
            Object.defineProperty(t, "__esModule", {
                value: !0
            }),
            t.sendAddTrackEvent = s,
            t.clearCurrentCues = r
        },
        "./src/utils/time-ranges.js": function(e, t, i) {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            });
            var s = {
                toString: function(e) {
                    for (var t = "", i = e.length, s = 0; s < i; s++)
                        t += "[" + e.start(s).toFixed(3) + "," + e.end(s).toFixed(3) + "]";
                    return t
                }
            };
            t["default"] = s
        },
        "./src/utils/vttcue.js": function(e, t, i) {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            }),
            t["default"] = function() {
                function e(e) {
                    return "string" == typeof e && (!!o[e.toLowerCase()] && e.toLowerCase())
                }
                function t(e) {
                    return "string" == typeof e && (!!n[e.toLowerCase()] && e.toLowerCase())
                }
                function i(e) {
                    for (var t = 1; t < arguments.length; t++) {
                        var i = arguments[t];
                        for (var s in i)
                            e[s] = i[s]
                    }
                    return e
                }
                function s(s, o, n) {
                    var a = this
                      , l = function() {
                        if ("undefined" != typeof navigator)
                            return /MSIE\s8\.0/.test(navigator.userAgent)
                    }()
                      , d = {};
                    l ? a = document.createElement("custom") : d.enumerable = !0,
                    a.hasBeenReset = !1;
                    var u = ""
                      , h = !1
                      , c = s
                      , f = o
                      , p = n
                      , v = null
                      , g = ""
                      , y = !0
                      , m = "auto"
                      , _ = "start"
                      , b = 50
                      , E = "middle"
                      , S = 50
                      , T = "middle";
                    if (Object.defineProperty(a, "id", i({}, d, {
                        get: function() {
                            return u
                        },
                        set: function(e) {
                            u = "" + e
                        }
                    })),
                    Object.defineProperty(a, "pauseOnExit", i({}, d, {
                        get: function() {
                            return h
                        },
                        set: function(e) {
                            h = !!e
                        }
                    })),
                    Object.defineProperty(a, "startTime", i({}, d, {
                        get: function() {
                            return c
                        },
                        set: function(e) {
                            if ("number" != typeof e)
                                throw new TypeError("Start time must be set to a number.");
                            c = e,
                            this.hasBeenReset = !0
                        }
                    })),
                    Object.defineProperty(a, "endTime", i({}, d, {
                        get: function() {
                            return f
                        },
                        set: function(e) {
                            if ("number" != typeof e)
                                throw new TypeError("End time must be set to a number.");
                            f = e,
                            this.hasBeenReset = !0
                        }
                    })),
                    Object.defineProperty(a, "text", i({}, d, {
                        get: function() {
                            return p
                        },
                        set: function(e) {
                            p = "" + e,
                            this.hasBeenReset = !0
                        }
                    })),
                    Object.defineProperty(a, "region", i({}, d, {
                        get: function() {
                            return v
                        },
                        set: function(e) {
                            v = e,
                            this.hasBeenReset = !0
                        }
                    })),
                    Object.defineProperty(a, "vertical", i({}, d, {
                        get: function() {
                            return g
                        },
                        set: function(t) {
                            var i = e(t);
                            if (!1 === i)
                                throw new SyntaxError("An invalid or illegal string was specified.");
                            g = i,
                            this.hasBeenReset = !0
                        }
                    })),
                    Object.defineProperty(a, "snapToLines", i({}, d, {
                        get: function() {
                            return y
                        },
                        set: function(e) {
                            y = !!e,
                            this.hasBeenReset = !0
                        }
                    })),
                    Object.defineProperty(a, "line", i({}, d, {
                        get: function() {
                            return m
                        },
                        set: function(e) {
                            if ("number" != typeof e && e !== r)
                                throw new SyntaxError("An invalid number or illegal string was specified.");
                            m = e,
                            this.hasBeenReset = !0
                        }
                    })),
                    Object.defineProperty(a, "lineAlign", i({}, d, {
                        get: function() {
                            return _
                        },
                        set: function(e) {
                            var i = t(e);
                            if (!i)
                                throw new SyntaxError("An invalid or illegal string was specified.");
                            _ = i,
                            this.hasBeenReset = !0
                        }
                    })),
                    Object.defineProperty(a, "position", i({}, d, {
                        get: function() {
                            return b
                        },
                        set: function(e) {
                            if (e < 0 || e > 100)
                                throw new Error("Position must be between 0 and 100.");
                            b = e,
                            this.hasBeenReset = !0
                        }
                    })),
                    Object.defineProperty(a, "positionAlign", i({}, d, {
                        get: function() {
                            return E
                        },
                        set: function(e) {
                            var i = t(e);
                            if (!i)
                                throw new SyntaxError("An invalid or illegal string was specified.");
                            E = i,
                            this.hasBeenReset = !0
                        }
                    })),
                    Object.defineProperty(a, "size", i({}, d, {
                        get: function() {
                            return S
                        },
                        set: function(e) {
                            if (e < 0 || e > 100)
                                throw new Error("Size must be between 0 and 100.");
                            S = e,
                            this.hasBeenReset = !0
                        }
                    })),
                    Object.defineProperty(a, "align", i({}, d, {
                        get: function() {
                            return T
                        },
                        set: function(e) {
                            var i = t(e);
                            if (!i)
                                throw new SyntaxError("An invalid or illegal string was specified.");
                            T = i,
                            this.hasBeenReset = !0
                        }
                    })),
                    a.displayState = undefined,
                    l)
                        return a
                }
                if ("undefined" != typeof window && window.VTTCue)
                    return window.VTTCue;
                var r = "auto"
                  , o = {
                    "": !0,
                    lr: !0,
                    rl: !0
                }
                  , n = {
                    start: !0,
                    middle: !0,
                    end: !0,
                    left: !0,
                    right: !0
                };
                return s.prototype.getCueAsHTML = function() {
                    return window.WebVTT.convertCueToDOMTree(window, this.text)
                }
                ,
                s
            }()
        },
        "./src/utils/vttparser.js": function(e, t, i) {
            "use strict";
            function s() {
                this.window = window,
                this.state = "INITIAL",
                this.buffer = "",
                this.decoder = new u,
                this.regionList = []
            }
            function r(e) {
                function t(e, t, i, s) {
                    return 3600 * (0 | e) + 60 * (0 | t) + (0 | i) + (0 | s) / 1e3
                }
                var i = e.match(/^(\d+):(\d{2})(:\d{2})?\.(\d{3})/);
                return i ? i[3] ? t(i[1], i[2], i[3].replace(":", ""), i[4]) : i[1] > 59 ? t(i[1], i[2], 0, i[4]) : t(0, i[1], i[2], i[4]) : null
            }
            function o() {
                this.values = Object.create(null)
            }
            function n(e, t, i, s) {
                var r = s ? e.split(s) : [e];
                for (var o in r)
                    if ("string" == typeof r[o]) {
                        var n = r[o].split(i);
                        if (2 === n.length) {
                            var a = n[0]
                              , l = n[1];
                            t(a, l)
                        }
                    }
            }
            function a(e, t, i) {
                function s() {
                    var t = r(e);
                    if (null === t)
                        throw new Error("Malformed timestamp: " + l);
                    return e = e.replace(/^[^\sa-zA-Z-]+/, ""),
                    t
                }
                function a() {
                    e = e.replace(/^\s+/, "")
                }
                var l = e;
                if (a(),
                t.startTime = s(),
                a(),
                "--\x3e" !== e.substr(0, 3))
                    throw new Error("Malformed time stamp (time stamps must be separated by '--\x3e'): " + l);
                e = e.substr(3),
                a(),
                t.endTime = s(),
                a(),
                function(e, t) {
                    var s = new o;
                    n(e, function(e, t) {
                        switch (e) {
                        case "region":
                            for (var r = i.length - 1; r >= 0; r--)
                                if (i[r].id === t) {
                                    s.set(e, i[r].region);
                                    break
                                }
                            break;
                        case "vertical":
                            s.alt(e, t, ["rl", "lr"]);
                            break;
                        case "line":
                            var o = t.split(",")
                              , n = o[0];
                            s.integer(e, n),
                            s.percent(e, n) && s.set("snapToLines", !1),
                            s.alt(e, n, ["auto"]),
                            2 === o.length && s.alt("lineAlign", o[1], ["start", c, "end"]);
                            break;
                        case "position":
                            o = t.split(","),
                            s.percent(e, o[0]),
                            2 === o.length && s.alt("positionAlign", o[1], ["start", c, "end", "line-left", "line-right", "auto"]);
                            break;
                        case "size":
                            s.percent(e, t);
                            break;
                        case "align":
                            s.alt(e, t, ["start", c, "end", "left", "right"])
                        }
                    }, /:/, /\s/),
                    t.region = s.get("region", null),
                    t.vertical = s.get("vertical", "");
                    var r = s.get("line", "auto");
                    "auto" === r && -1 === h.line && (r = -1),
                    t.line = r,
                    t.lineAlign = s.get("lineAlign", "start"),
                    t.snapToLines = s.get("snapToLines", !0),
                    t.size = s.get("size", 100),
                    t.align = s.get("align", c);
                    var a = s.get("position", "auto");
                    "auto" === a && 50 === h.position && (a = "start" === t.align || "left" === t.align ? 0 : "end" === t.align || "right" === t.align ? 100 : 50),
                    t.position = a
                }(e, t)
            }
            function l(e) {
                return e.replace(/<br(?: \/)?>/gi, "\n")
            }
            Object.defineProperty(t, "__esModule", {
                value: !0
            });
            var d = i("./src/utils/vttcue.js")
              , u = function() {
                return {
                    decode: function(e) {
                        if (!e)
                            return "";
                        if ("string" != typeof e)
                            throw new Error("Error - expected string data.");
                        return decodeURIComponent(encodeURIComponent(e))
                    }
                }
            };
            o.prototype = {
                set: function(e, t) {
                    this.get(e) || "" === t || (this.values[e] = t)
                },
                get: function(e, t, i) {
                    return i ? this.has(e) ? this.values[e] : t[i] : this.has(e) ? this.values[e] : t
                },
                has: function(e) {
                    return e in this.values
                },
                alt: function(e, t, i) {
                    for (var s = 0; s < i.length; ++s)
                        if (t === i[s]) {
                            this.set(e, t);
                            break
                        }
                },
                integer: function(e, t) {
                    /^-?\d+$/.test(t) && this.set(e, parseInt(t, 10))
                },
                percent: function(e, t) {
                    return !!(t.match(/^([\d]{1,3})(\.[\d]*)?%$/) && (t = parseFloat(t)) >= 0 && t <= 100) && (this.set(e, t),
                    !0)
                }
            };
            var h = new d["default"](0,0,0)
              , c = "middle" === h.align ? "middle" : "center";
            t.fixLineBreaks = l,
            s.prototype = {
                parse: function(e) {
                    function t() {
                        var e = i.buffer
                          , t = 0;
                        for (e = l(e); t < e.length && "\r" !== e[t] && "\n" !== e[t]; )
                            ++t;
                        var s = e.substr(0, t);
                        return "\r" === e[t] && ++t,
                        "\n" === e[t] && ++t,
                        i.buffer = e.substr(t),
                        s
                    }
                    var i = this;
                    e && (i.buffer += i.decoder.decode(e, {
                        stream: !0
                    }));
                    try {
                        var s = void 0;
                        if ("INITIAL" === i.state) {
                            if (!/\r\n|\n/.test(i.buffer))
                                return this;
                            s = t();
                            var r = s.match(/^(ï»¿)?WEBVTT([ \t].*)?$/);
                            if (!r || !r[0])
                                throw new Error("Malformed WebVTT signature.");
                            i.state = "HEADER"
                        }
                        for (var o = !1; i.buffer; ) {
                            if (!/\r\n|\n/.test(i.buffer))
                                return this;
                            switch (o ? o = !1 : s = t(),
                            i.state) {
                            case "HEADER":
                                /:/.test(s) ? function(e) {
                                    n(e, function(e, t) {}, /:/)
                                }(s) : s || (i.state = "ID");
                                continue;
                            case "NOTE":
                                s || (i.state = "ID");
                                continue;
                            case "ID":
                                if (/^NOTE($|[ \t])/.test(s)) {
                                    i.state = "NOTE";
                                    break
                                }
                                if (!s)
                                    continue;
                                if (i.cue = new d["default"](0,0,""),
                                i.state = "CUE",
                                -1 === s.indexOf("--\x3e")) {
                                    i.cue.id = s;
                                    continue
                                }
                            case "CUE":
                                try {
                                    a(s, i.cue, i.regionList)
                                } catch (h) {
                                    i.cue = null,
                                    i.state = "BADCUE";
                                    continue
                                }
                                i.state = "CUETEXT";
                                continue;
                            case "CUETEXT":
                                var u = -1 !== s.indexOf("--\x3e");
                                if (!s || u && (o = !0)) {
                                    i.oncue && i.oncue(i.cue),
                                    i.cue = null,
                                    i.state = "ID";
                                    continue
                                }
                                i.cue.text && (i.cue.text += "\n"),
                                i.cue.text += s;
                                continue;
                            case "BADCUE":
                                s || (i.state = "ID");
                                continue
                            }
                        }
                    } catch (h) {
                        "CUETEXT" === i.state && i.cue && i.oncue && i.oncue(i.cue),
                        i.cue = null,
                        i.state = "INITIAL" === i.state ? "BADWEBVTT" : "BADCUE"
                    }
                    return this
                },
                flush: function() {
                    var e = this;
                    try {
                        if (e.buffer += e.decoder.decode(),
                        (e.cue || "HEADER" === e.state) && (e.buffer += "\n\n",
                        e.parse()),
                        "INITIAL" === e.state)
                            throw new Error("Malformed WebVTT signature.")
                    } catch (t) {
                        throw t
                    }
                    return e.onflush && e.onflush(),
                    this
                }
            },
            t["default"] = s
        },
        "./src/utils/webvtt-parser.js": function(e, t, i) {
            "use strict";
            (function(e) {
                Object.defineProperty(t, "__esModule", {
                    value: !0
                });
                var s = i("./src/utils/vttparser.js")
                  , r = i("./src/demux/id3.js")
                  , o = function(e, t, i) {
                    return e.substr(i || 0, t.length) === t
                }
                  , n = function(t) {
                    var i = parseInt(t.substr(-3))
                      , s = parseInt(t.substr(-6, 2))
                      , r = parseInt(t.substr(-9, 2))
                      , o = t.length > 9 ? parseInt(t.substr(0, t.indexOf(":"))) : 0;
                    return e.isFinite(i) && e.isFinite(s) && e.isFinite(r) && e.isFinite(o) ? (i += 1e3 * s,
                    i += 6e4 * r,
                    i += 36e5 * o) : -1
                }
                  , a = function(e) {
                    for (var t = 5381, i = e.length; i; )
                        t = 33 * t ^ e.charCodeAt(--i);
                    return (t >>> 0).toString()
                }
                  , l = function(e, t, i) {
                    var s = e[t]
                      , r = e[s.prevCC];
                    if (!r || !r["new"] && s["new"])
                        return e.ccOffset = e.presentationOffset = s.start,
                        void (s["new"] = !1);
                    for (; r && r["new"]; )
                        e.ccOffset += s.start - r.start,
                        s["new"] = !1,
                        s = r,
                        r = e[s.prevCC];
                    e.presentationOffset = i
                }
                  , d = {
                    parse: function(e, t, i, d, u, h) {
                        var c, f = /\r\n|\n\r|\n|\r/g, p = r.utf8ArrayToStr(new Uint8Array(e)).trim().replace(f, "\n").split("\n"), v = "00:00.000", g = 0, y = 0, m = 0, _ = [], b = !0, E = new s["default"];
                        E.oncue = function(e) {
                            var t = i[d]
                              , s = i.ccOffset;
                            t && t["new"] && (y !== undefined ? s = i.ccOffset = t.start : l(i, d, m)),
                            m && (s = m + i.ccOffset - i.presentationOffset),
                            e.startTime += s - y,
                            e.endTime += s - y,
                            e.id = a(e.startTime.toString()) + a(e.endTime.toString()) + a(e.text),
                            e.text = decodeURIComponent(encodeURIComponent(e.text)),
                            e.endTime > 0 && _.push(e)
                        }
                        ,
                        E.onparsingerror = function(e) {
                            c = e
                        }
                        ,
                        E.onflush = function() {
                            if (c && h)
                                return void h(c);
                            u(_)
                        }
                        ,
                        p.forEach(function(e) {
                            if (b) {
                                if (o(e, "X-TIMESTAMP-MAP=")) {
                                    b = !1,
                                    e.substr(16).split(",").forEach(function(e) {
                                        o(e, "LOCAL:") ? v = e.substr(6) : o(e, "MPEGTS:") && (g = parseInt(e.substr(7)))
                                    });
                                    try {
                                        t = t < 0 ? t + 8589934592 : t,
                                        g -= t,
                                        y = n(v) / 1e3,
                                        m = g / 9e4,
                                        -1 === y && (c = new Error("Malformed X-TIMESTAMP-MAP: " + e))
                                    } catch (i) {
                                        c = new Error("Malformed X-TIMESTAMP-MAP: " + e)
                                    }
                                    return
                                }
                                "" === e && (b = !1)
                            }
                            E.parse(e + "\n")
                        }),
                        E.flush()
                    }
                };
                t["default"] = d
            }
            ).call(this, i("./src/polyfills/number.js").Number)
        },
        "./src/utils/xhr-loader.js": function(e, t, i) {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            });
            var s = i("./src/utils/logger.js")
              , r = window.performance
              , o = window.XMLHttpRequest
              , n = function() {
                function e(e) {
                    e && e.xhrSetup && (this.xhrSetup = e.xhrSetup)
                }
                return e.prototype.destroy = function() {
                    this.abort(),
                    this.loader = null
                }
                ,
                e.prototype.abort = function() {
                    var e = this.loader;
                    e && 4 !== e.readyState && (this.stats.aborted = !0,
                    e.abort()),
                    window.clearTimeout(this.requestTimeout),
                    this.requestTimeout = null,
                    window.clearTimeout(this.retryTimeout),
                    this.retryTimeout = null
                }
                ,
                e.prototype.load = function(e, t, i) {
                    this.context = e,
                    this.config = t,
                    this.callbacks = i,
                    this.stats = {
                        trequest: r.now(),
                        retry: 0
                    },
                    this.retryDelay = t.retryDelay,
                    this.loadInternal()
                }
                ,
                e.prototype.loadInternal = function() {
                    var e, t = this.context;
                    e = this.loader = new o;
                    var i = this.stats;
                    i.tfirst = 0,
                    i.loaded = 0;
                    var s = this.xhrSetup;
                    try {
                        if (s)
                            try {
                                s(e, t.url)
                            } catch (r) {
                                e.open("GET", t.url, !0),
                                s(e, t.url)
                            }
                        e.readyState || e.open("GET", t.url, !0)
                    } catch (r) {
                        return void this.callbacks.onError({
                            code: e.status,
                            text: r.message
                        }, t, e)
                    }
                    t.rangeEnd && e.setRequestHeader("Range", "bytes=" + t.rangeStart + "-" + (t.rangeEnd - 1)),
                    e.onreadystatechange = this.readystatechange.bind(this),
                    e.onprogress = this.loadprogress.bind(this),
                    e.responseType = t.responseType,
                    this.requestTimeout = window.setTimeout(this.loadtimeout.bind(this), this.config.timeout),
                    e.send()
                }
                ,
                e.prototype.readystatechange = function(e) {
                    var t = e.currentTarget
                      , i = t.readyState
                      , o = this.stats
                      , n = this.context
                      , a = this.config;
                    if (!o.aborted && i >= 2)
                        if (window.clearTimeout(this.requestTimeout),
                        0 === o.tfirst && (o.tfirst = Math.max(r.now(), o.trequest)),
                        4 === i) {
                            var l = t.status;
                            if (l >= 200 && l < 300) {
                                o.tload = Math.max(o.tfirst, r.now());
                                var d = void 0
                                  , u = void 0;
                                "arraybuffer" === n.responseType ? (d = t.response,
                                u = d.byteLength) : (d = t.responseText,
                                u = d.length),
                                o.loaded = o.total = u;
                                var h = {
                                    url: t.responseURL,
                                    data: d
                                };
                                this.callbacks.onSuccess(h, o, n, t)
                            } else
                                o.retry >= a.maxRetry || l >= 400 && l < 499 ? (s.logger.error(l + " while loading " + n.url),
                                this.callbacks.onError({
                                    code: l,
                                    text: t.statusText
                                }, n, t)) : (s.logger.warn(l + " while loading " + n.url + ", retrying in " + this.retryDelay + "..."),
                                this.destroy(),
                                this.retryTimeout = window.setTimeout(this.loadInternal.bind(this), this.retryDelay),
                                this.retryDelay = Math.min(2 * this.retryDelay, a.maxRetryDelay),
                                o.retry++)
                        } else
                            this.requestTimeout = window.setTimeout(this.loadtimeout.bind(this), a.timeout)
                }
                ,
                e.prototype.loadtimeout = function() {
                    s.logger.warn("timeout while loading " + this.context.url),
                    this.callbacks.onTimeout(this.stats, this.context, null)
                }
                ,
                e.prototype.loadprogress = function(e) {
                    var t = e.currentTarget
                      , i = this.stats;
                    i.loaded = e.loaded,
                    e.lengthComputable && (i.total = e.total);
                    var s = this.callbacks.onProgress;
                    s && s(i, this.context, null, t)
                }
                ,
                e
            }();
            t["default"] = n
        }
    })["default"]
}),
function() {
    var e = function() {
        this.http_protocol = !1,
        this.static_path = !1,
        this.i18n = !1,
        this.presetvisibility = {},
        this.curvisibility = {}
    };
    e.prototype = {
        setHttpProtocol: function(e) {
            this.http_protocol = e
        },
        setStaticPath: function(e) {
            this.static_path = e
        },
        setI18n: function(e) {
            this.i18n = e
        },
        createElt: function(e, t, i, s) {
            var r = document.createElement(e);
            return t && (r.className = t),
            i && (r.id = i),
            s && (r.innerHTML = s),
            r
        },
        createInput: function(e, t, i, s, r) {
            var o = this.createElt("input", s, r);
            return o.name = t,
            o.type = e,
            i && (o.placeholder = i),
            o
        },
        hideElt: function(e) {
            e.style.display = "none"
        },
        showElt: function(e, t) {
            e.style.display = t || ""
        },
        presetHide: function(e) {
            if ("object" != typeof e)
                this.presetvisibility[e] = !1;
            else
                for (var t in e)
                    this.presetvisibility[e[t]] = !1
        },
        presetShow: function(e) {
            if ("object" != typeof e)
                this.presetvisibility[e] = !0;
            else
                for (var t in e)
                    this.presetvisibility[e[t]] = !0
        },
        applyVisibility: function() {
            for (var e in this.presetvisibility)
                this.presetvisibility.hasOwnProperty(e) && "undefined" == typeof this[e] || "undefined" != typeof this.curvisibility[e] && this.curvisibility[e] === this.presetvisibility[e] || (this.curvisibility[e] = this.presetvisibility[e],
                this.curvisibility[e] ? (this.showElt(this[e]),
                "$pauseBt" === e && this.addClass(this.$videoDiv, "paused")) : (this.hideElt(this[e]),
                "$pauseBt" === e && this.removeClass(this.$videoDiv, "paused")));
            this.presetvisibility = {}
        },
        createImgBtn: function(e, t, i) {
            var s = document.createElement("img");
            return s.src = this.static_path + "img/player/" + e,
            t && (s.title = this.unescape(this.i18n.__(t, i))),
            s
        },
        createIconSpan: function(e, t, i) {
            var s = document.createElement("span");
            return s.className = "player-icon-f pif-" + e,
            t && (s.title = this.unescape(this.i18n.__(t, i))),
            s
        },
        getHTML: function(e) {
            if (!e || !e.tagName)
                return "";
            var t = document.createElement("div");
            return t.appendChild(e.cloneNode(!1)),
            t.innerHTML
        },
        unescape: function(e) {
            var t = document.createElement("div");
            return t.innerHTML = e,
            0 === t.childNodes.length ? "" : t.childNodes[0].nodeValue
        },
        addClass: function(e, t) {
            return e && e.classList && "function" == typeof e.classList.add ? (e.classList.add(t),
            e) : (console.error("can't add '" + t + "' to the given element ", e),
            e)
        },
        hasClass: function(e, t) {
            return e && e.classList && "function" == typeof e.classList.contains ? void 0 !== t && 0 !== t.length && e.classList.contains(t) : (console.error("can't check '" + t + "' presence in the given element ", e),
            !1)
        },
        removeClass: function(e, t) {
            if (!e || !e.classList || "function" != typeof e.classList.remove)
                return console.error("can't remove '" + t + "' in the given element ", e),
                e;
            if (void 0 === t || 0 === t.length)
                return console.log("no class to remove from the given element ", e),
                e;
            for (var i = t.split(" "), s = 0; s < i.length; s++)
                t = i[s],
                0 !== t.length && e.classList.remove(t);
            return e
        }
    },
    window.player = {},
    window.player.uibase = e
}(),
function() {
    var e = function(e, t, i, s, r, o) {
        player.uibase.apply(this),
        this.skip_time = 5,
        console.log("new VideoAds", e, t, i, s, r, o),
        this.stats_callback = e,
        this.mute_callback = null,
        this.video_url = t,
        this.click_url = i,
        this.clicked_ad = !1,
        this.title = s,
        this.domain = r,
        this.instant_skip = o,
        this.dsa_behalf = null,
        this.dsa_paid = null,
        this.dsa_click_through = null,
        this.full_video_click = !1,
        this.is_ios = !1,
        this.is_ios_desktop_mode = !1,
        this.use_ios_fake_play = !1,
        this.playing = !1,
        this.interval_update = !1,
        this.start_muted = !0,
        this.start_volume = 1,
        this.can_skip = !1,
        this.desktop_view = !1,
        this.use_autoplay = !1,
        this.vast_view_callback = [],
        this.vast_error_callback = [],
        this.vast_click_url = !1,
        this.vast_start_stats_callback = [],
        this.vast_firstQuartile_stats_callback = [],
        this.vast_midpoint_stats_callback = [],
        this.vast_thirdQuartile_stats_callback = [],
        this.vast_complete_stats_callback = [],
        this.vast_pause_stats_callback = [],
        this.vast_mute_stats_callback = [],
        this.vast_fullscreen_stats_callback = [],
        this.vast_skip_stats_callback = [],
        this.vast_progress_stats_callback = [],
        this.vast_click_tracking = [],
        /iPad|iPhone|iPod/.test(navigator.userAgent) && !window.MSStream ? (this.is_ios = !0,
        /OS [1-9]_/.test(navigator.userAgent) && (this.use_ios_fake_play = !0)) : /Mac OS X/.test(navigator.userAgent) && navigator.maxTouchPoints > 2 && !window.MSStream && (this.is_ios = !0,
        this.is_ios_desktop_mode = !0)
    };
    e.prototype = new player.uibase,
    e.prototype.onClose = null,
    e.prototype.showPreferencesWarningTooltip = null,
    e.prototype.areCookiesFeatureDisabled = null,
    e.prototype.checkShowPreferencesWarningTooltip = function(e, t) {
        "function" == typeof this.areCookiesFeatureDisabled && this.areCookiesFeatureDisabled() && "function" == typeof this.showPreferencesWarningTooltip && this.showPreferencesWarningTooltip(e, t)
    }
    ,
    e.prototype.onFullscreen = null,
    e.prototype.setMuteCallback = function(e) {
        this.mute_callback = e
    }
    ,
    e.prototype.startWithSound = function() {
        this.start_muted = !1
    }
    ,
    e.prototype.setStartVolume = function(e) {
        this.start_volume = e
    }
    ,
    e.prototype.setDesktopView = function(e) {
        this.desktop_view = e
    }
    ,
    e.prototype.setAutoplay = function(e) {
        e = "boolean" != typeof e || e,
        this.use_autoplay = e
    }
    ,
    e.prototype.setFullVideoClick = function(e) {
        this.full_video_click = e
    }
    ,
    e.prototype.getVideo = function() {
        return this.video ? this.video : null
    }
    ,
    e.prototype.getTitle = function() {
        return this.title ? this.title : this.domain
    }
    ,
    e.prototype.getClickUrl = function() {
        var e = this.click_url;
        return e ? this.vast_click_url && this.vast_click_url.length > 10 && (e = e + "/" + btoa(this.vast_click_url).replace(/\//g, "_").replace(/\+/g, "-")) : e = this.vast_click_url,
        e
    }
    ,
    e.prototype.setVideoUrl = function(e) {
        console.log("VideoAds --- Set video url", e),
        this.video_url = e
    }
    ,
    e.prototype.getVideoUrl = function() {
        return this.video_url
    }
    ,
    e.prototype.setDSABehaulf = function(e) {
        this.dsa_behalf = e
    }
    ,
    e.prototype.setDSAPaid = function(e) {
        this.dsa_paid = e
    }
    ,
    e.prototype.setDSAClickThrough = function(e) {
        this.dsa_click_through = e
    }
    ,
    e.prototype.addVastViewCallback = function(e) {
        this.vast_view_callback.push(e)
    }
    ,
    e.prototype.addVastErrorCallback = function(e) {
        this.vast_error_callback.push(e)
    }
    ,
    e.prototype.setVastClickUrl = function(e) {
        this.vast_click_url = e
    }
    ,
    e.prototype.setTitle = function(e) {
        this.title = e
    }
    ,
    e.prototype.addVastClickTrackingCallback = function(e) {
        this.vast_click_tracking.push(e)
    }
    ,
    e.prototype.addVastStartStatsCallback = function(e) {
        this.vast_start_stats_callback.push(e)
    }
    ,
    e.prototype.addVastFirstQuartileStatsCallback = function(e) {
        this.vast_firstQuartile_stats_callback.push(e)
    }
    ,
    e.prototype.addVastMidpointStatsCallback = function(e) {
        this.vast_midpoint_stats_callback.push(e)
    }
    ,
    e.prototype.addVastThirdQuartileStatsCallback = function(e) {
        this.vast_thirdQuartile_stats_callback.push(e)
    }
    ,
    e.prototype.addVastCompleteStatsCallback = function(e) {
        this.vast_complete_stats_callback.push(e)
    }
    ,
    e.prototype.addVastPauseStatsCallback = function(e) {
        this.vast_pause_stats_callback.push(e)
    }
    ,
    e.prototype.addVastMuteStatsCallback = function(e) {
        this.vast_mute_stats_callback.push(e)
    }
    ,
    e.prototype.addVastFullScreenStatsCallback = function(e) {
        this.vast_fullscreen_stats_callback.push(e)
    }
    ,
    e.prototype.addVastSkipStatsCallback = function(e) {
        this.vast_skip_stats_callback.push(e)
    }
    ,
    e.prototype.addVastProgressCallback = function(e, t) {
        var i = t.match(/^([0-9]+):([0-9]+):([0-9]+).([0-9]+)$/);
        if (5 == i.length) {
            var s = 3600 * parseInt(i[1]) + 60 * parseInt(i[2]) + parseInt(i[3]) + parseFloat("0." + i[4]);
            console.log("VideoAds - OffsetSec", s);
            var r = {};
            r.url = e,
            r.offset = s,
            this.vast_progress_stats_callback.push(r)
        }
    }
    ,
    e.prototype.isPlaying = function() {
        return this.playing
    }
    ,
    e.prototype.getVideo = function() {
        return this.video
    }
    ,
    e.prototype.getAdDiv = function() {
        if (console.log("VideoAds - getAdDiv, Video url : ", this.video_url),
        !this.video_url)
            return console.log("VideoAds - getAdDiv : No video url to display. Skipping video ads"),
            !1;
        var e = this;
        return this.$videoAdDiv = this.createElt("div", "video-overlay"),
        this.$videoAdDiv.addEventListener("dblclick", function(e) {
            e.stopPropagation(),
            console.log("VideoAds - AdDiv : DblClick catched")
        }),
        this.$videoAdDiv.addEventListener("click", function(e) {
            e.stopPropagation(),
            console.log("VideoAds - AdDiv : Click catched")
        }),
        this.video = this.createElt("video", "video-overlay"),
        this.is_ios ? (this.airplay_enabled || (xv.log.debug("AirPlay --- disabled for video ads"),
        this.video.setAttribute("x-webkit-airplay", "deny")),
        this.use_ios_fake_play ? this.addClass(this.video, "video-overlay-nocontrol-ios") : this.video.setAttribute("playsinline", "")) : this.video.controls = !1,
        this.use_autoplay && this.video.setAttribute("autoplay", ""),
        this.start_muted ? (console.log("VideoAds - getAdDiv : Start the video muted"),
        this.video.muted = "muted") : (console.log("VideoAds - getAdDiv : Start the video with sound (" + Math.round(100 * this.start_volume) + "%)"),
        this.video.volume = this.start_volume),
        this.video.autoplay = "autoplay",
        this.video.src = this.video_url,
        this.$videoAdDiv.appendChild(this.video),
        this.video.addEventListener("click", function() {
            console.log("VideoAds - Video : Click catched")
        }),
        this.video.addEventListener("playing", function() {
            xv.console.log("VideoAdEvent: Playing at " + e.video.currentTime + " / " + e.video.duration, "Player"),
            e.playing || (e.playing = !0,
            e.sendViewCallbacksIfNotHidden()),
            e.redraw()
        }),
        this.video.addEventListener("error", function() {
            var t = "No details";
            this.error && (t = "error.code = '" + this.error.code + "', error.message = '" + this.error.message + "'"),
            xv.console.log("VideoAdEvent: error at " + e.video.currentTime + " / " + e.video.duration + " , " + t, "Player"),
            e.makeErrorCallBack(401, e.video.src, "HTML5Video error, Event at " + e.video.currentTime + " secs of " + e.video.duration + " sec total duration (" + t + ")"),
            e.closeAd()
        }),
        this.video.addEventListener("ended", function() {
            xv.console.log("VideoAdEvent: Ended at " + e.video.currentTime + " / " + e.video.duration, "Player"),
            e.makeStatsCallback("full"),
            e.makeVastCallback("vast_complete_stats_callback", 0),
            e.closeAd()
        }),
        this.video.addEventListener("timeupdate", function() {
            if (e.video) {
                var t = Math.round(e.video.duration - e.video.currentTime);
                if (t < 0 && (t = 0),
                isNaN(t) && (t = 0),
                e.$videoStatus.innerHTML = t + " sec",
                e.redraw(),
                e.video.duration && !(e.video.duration < 1)) {
                    for (var i = 0; i < e.vast_progress_stats_callback.length; i++) {
                        var s = e.vast_progress_stats_callback[i];
                        if (!(e.video.currentTime < s.offset)) {
                            var r = createRequestObject();
                            r.open("GET", s.url, !0);
                            try {
                                r.send()
                            } catch (n) {}
                            e.vast_progress_stats_callback.splice(i, 1)
                        }
                    }
                    var o = e.video.currentTime / e.video.duration * 100;
                    o > 25 && e.vast_firstQuartile_stats_callback && e.makeVastCallback("vast_firstQuartile_stats_callback", 0),
                    o > 50 && e.vast_midpoint_stats_callback && e.makeVastCallback("vast_midpoint_stats_callback", 0),
                    o > 50 && e.vast_thirdQuartile_stats_callback && e.makeVastCallback("vast_thirdQuartile_stats_callback", 0)
                }
            }
        }),
        this.use_ios_fake_play || (this.$progressBarBg = this.createElt("div", "progress-bar-bg"),
        this.$videoAdDiv.appendChild(this.$progressBarBg),
        this.$progressBar = this.createElt("div", "progress-bar"),
        this.$progressBar.style.width = "100%",
        this.$videoAdDiv.appendChild(this.$progressBar),
        this.$progressBarCursor = this.createElt("div", "progress-bar-cursor"),
        this.$progressBar.appendChild(this.$progressBarCursor)),
        this.$videoClickDiv = this.createElt("div", "video-overlay-click"),
        this.$videoClickDiv.addEventListener("click", function(t) {
            t.stopPropagation(),
            e.video.paused ? e.video.play() : (e.video.pause(),
            e.makeVastCallback("vast_pause_stats_callback", 0),
            e.full_video_click && e.openAdClick())
        }),
        this.$videoAdDiv.appendChild(this.$videoClickDiv),
        this.use_ios_fake_play || (this.$leftButtonsBar = this.createElt("div", "buttons-bar left"),
        this.$leftButtonsBar.addEventListener("touchstart", function(e) {
            e.stopPropagation()
        }),
        this.$videoAdDiv.appendChild(this.$leftButtonsBar),
        this.$topLeftButtonsBar = this.createElt("div", "buttons-bar topleft"),
        this.$topLeftButtonsBar.addEventListener("touchstart", function(e) {
            e.stopPropagation()
        }),
        this.$videoAdDiv.appendChild(this.$topLeftButtonsBar),
        this.dsa_click_through && (this.$adInformationBt = this.createElt("div", "info-button"),
        this.$adInformationBt.innerHTML = "i",
        this.$adInformationBt.addEventListener("click", function(t) {
            t.stopPropagation(),
            window.open(e.dsa_click_through, "_blank")
        }),
        this.$topLeftButtonsBar.appendChild(this.$adInformationBt)),
        document.querySelector("html").classList.contains("is-desktop") && (this.$fakePlayBtn = this.createElt("span"),
        this.$fakePlayBtn.appendChild(this.createIconSpan("play", "player.play")),
        this.$fakePlayBtn.style.visibility = "hidden",
        this.$leftButtonsBar.appendChild(this.$fakePlayBtn)),
        this.$soundOnBarBt = this.createElt("span"),
        this.$soundOnBarBt.appendChild(this.createIconSpan("sound-2", "player.mute")),
        this.$soundOnBarBt.addEventListener("click", function(t) {
            t.stopPropagation(),
            e.video.muted = "muted",
            e.makeVastCallback("vast_mute_stats_callback", 0),
            e.redraw(),
            e.checkShowPreferencesWarningTooltip(e.$leftButtonsBar, {
                iPosition: 1,
                iSideMarginMobile: 10,
                iSideMargin: 33,
                sSideMarginUnit: "%",
                iMaxScreenWidth: 25
            }),
            "function" == typeof e.mute_callback && e.mute_callback(!0)
        }),
        this.$leftButtonsBar.appendChild(this.$soundOnBarBt),
        this.$soundOffBarBt = this.createElt("span"),
        this.$soundOffBarBt.appendChild(this.createIconSpan("sound-mute-red", "player.unmute")),
        this.$soundOffBarBt.addEventListener("click", function(t) {
            t.stopPropagation(),
            e.video.muted = !1,
            e.redraw(),
            e.checkShowPreferencesWarningTooltip(e.$leftButtonsBar, {
                iPosition: 1,
                iSideMarginMobile: 10,
                iSideMargin: 33,
                sSideMarginUnit: "%",
                iMaxScreenWidth: 25
            }),
            "function" == typeof e.mute_callback && e.mute_callback(!1)
        }),
        this.$leftButtonsBar.appendChild(this.$soundOffBarBt),
        this.$videoStatus = this.createElt("div", "video-overlay-status"),
        this.$leftButtonsBar.appendChild(this.$videoStatus),
        this.$rightButtonsBar = this.createElt("div", "buttons-bar right"),
        this.$videoAdDiv.appendChild(this.$rightButtonsBar)),
        this.$titleDiv = this.createElt("div", "video-overlay-title video-overlay-title-beforevideo noselect"),
        this.$titleDiv.addEventListener("click", function(t) {
            t.stopPropagation(),
            e.openAdClick()
        }),
        this.$titleTxt = this.createElt("div", "video-overlay-title-txt"),
        this.title ? this.$titleTxt.innerHTML = this.title : this.$titleTxt.innerHTML = this.domain,
        this.$titleDiv.appendChild(this.$titleTxt),
        this.$titleIcon = this.createElt("span"),
        this.$titleIcon.appendChild(this.createIconSpan("link", this.label)),
        this.$titleIcon.className = "video-overlay-title-icon",
        this.$titleDiv.appendChild(this.$titleIcon),
        this.$videoAdDiv.appendChild(this.$titleDiv),
        this.$centerLinkSuperDiv = this.createElt("div", "video-overlay-centerlink-superdiv noselect"),
        "xnxx" === xv.conf.sitename ? this.$centerLinkDiv = this.createElt("div", "video-overlay-centerlink-xnxx noselect") : this.$centerLinkDiv = this.createElt("div", "video-overlay-centerlink noselect"),
        this.$centerLinkDiv.addEventListener("click", function(t) {
            t.stopPropagation(),
            e.openAdClick()
        }),
        this.$centerLinkTxt = this.createElt("div", "video-overlay-centerlink-txt"),
        this.$centerLinkTxt.innerHTML = this.i18n.__("player.visit_site", null, "Visit site"),
        this.$centerLinkDiv.appendChild(this.$centerLinkTxt),
        this.$centerLinkIcon = this.createElt("span"),
        this.$centerLinkIcon.appendChild(this.createIconSpan("link", this.label)),
        this.$centerLinkIcon.className = "video-overlay-centerlink-icon",
        this.$centerLinkDiv.appendChild(this.$centerLinkIcon),
        this.$centerLinkSuperDiv.appendChild(this.$centerLinkDiv),
        this.$videoAdDiv.appendChild(this.$centerLinkSuperDiv),
        this.$skipButton = this.createElt("div", "video-overlay-skip"),
        this.$videoAdDiv.appendChild(this.$skipButton),
        this.$skipButton.setAttribute("id", "anc-tst-skip_ad-btn"),
        this.$skipButtonTxt = this.createElt("div", "video-overlay-skip-txt noselect"),
        this.$skipButton.appendChild(this.$skipButtonTxt),
        this.interval_update = setInterval(function() {
            return e.playing ? !e.instant_skip && e.video.currentTime < e.skip_time ? void (e.$skipButtonTxt.innerHTML = e.i18n.__("player.can_skip_in_sec", {
                "%nb_secs%": Math.floor(e.skip_time - e.video.currentTime + 1).toString()
            }, "Can skip in %nb_secs% sec")) : (clearInterval(e.interval_update),
            e.$skipButtonTxt.innerHTML = e.i18n.__("player.skip_ad", null, "Skip ad") + " " + e.getHTML(e.createIconSpan("step-forward")),
            e.$skipButton.addEventListener("click", function(t) {
                t.stopPropagation(),
                e.makeStatsCallback("skip"),
                e.makeVastCallback("vast_skip_stats_callback", 0),
                e.closeAd()
            }),
            e.addClass(e.$skipButton, "skippable"),
            void (e.can_skip = !0)) : void (e.$skipButtonTxt.innerHTML = e.i18n.__("player.loading", null, "Loading..."))
        }, 200),
        this.use_ios_fake_play ? this.ios_interval = setInterval(function() {
            if (e.video.duration) {
                if (e.video.currentTime - .1 >= e.video.duration)
                    return e.makeStatsCallback("full"),
                    void e.closeAd();
                e.playing = !0,
                e.video.currentTime = e.video.currentTime + .033
            }
        }, 33) : this.video.play()["catch"](function(e) {}),
        this.skip_timeout = setTimeout(function() {
            if (console.log("VideoAds - getAdDiv : Skip timeout"),
            e.clicked_ad)
                return void console.log("VideoAds - User clicked the ad, not skipping");
            e.playing || (e.makeStatsCallback("error"),
            e.closeAd()),
            e.can_skip || (console.log("Wahou .. skip can't skip after 15 sec"),
            e.makeStatsCallback("error"),
            e.closeAd())
        }, 15e3),
        this.redraw(),
        this.redraw_internal = setInterval(function() {
            e.redraw()
        }, 300),
        xv.console.log("VideoAds - getAdDiv : div loaded", "Player"),
        this.$videoAdDiv
    }
    ,
    e.prototype.addPlayingEventListener = function(e) {
        this.video && this.video.addEventListener("playing", function() {
            e()
        })
    }
    ,
    e.prototype.sendViewCallbacks = function() {
        for (var e = 0; e < this.vast_view_callback.length; e++) {
            var t = createRequestObject()
              , i = this.vast_view_callback[e];
            t.open("GET", i, !0);
            try {
                t.send()
            } catch (s) {}
        }
    }
    ,
    e.prototype.sendViewCallbacksIfNotHidden = function() {
        var e = this
          , t = function() {
            if (e.visibility_detected)
                return void (e.visibility_interval && (clearInterval(e.visibility_interval),
                e.visibility_interval = null));
            try {
                var t = document.querySelector(".video-overlay");
                if (!t)
                    return;
                if (e.checkElementHidden(t))
                    return
            } catch (i) {}
            e.visibility_interval && (clearInterval(e.visibility_interval),
            e.visibility_interval = null),
            e.visibility_detected = !0,
            e.sendViewCallbacks()
        };
        this.visibility_detected = !1,
        t(),
        this.visibility_interval || (this.visibility_interval = setInterval(t, 100)),
        setTimeout(function() {
            e.visibility_interval && (clearInterval(e.visibility_interval),
            e.visibility_interval = null),
            e.visibility_detected || (console.error("VideoAds : Video ad is still hidden"),
            e.closeAd())
        }, 2e3)
    }
    ,
    e.prototype.checkElementHidden = function(e) {
        try {
            if (!e || "none" === e.style.display || "hidden" === e.style.visibility || 0 === e.style.opacity || "0" === e.style.opacity)
                return !0;
            if (!window.getComputedStyle)
                return !1;
            for (var t = e; t; ) {
                var i = window.getComputedStyle(t);
                if (!i || "none" === i.display || "hidden" === i.visibility || 0 === i.opacity || "0" === i.opacity)
                    return !0;
                t = t.parentElement
            }
            return !1
        } catch (s) {
            return console.error("VideoAds : Error checking element visibility", s),
            !1
        }
    }
    ,
    e.prototype.openAdClick = function() {
        this.makeVastCallback("vast_click_tracking", 0),
        this.video.pause();
        var e = this.getClickUrl();
        this.clicked_ad = !0,
        window.open(e, "_blank")
    }
    ,
    e.prototype.redraw = function() {
        var e = (this.$videoAdDiv.offsetWidth,
        this.$videoAdDiv.offsetHeight,
        this.getDrawResizeCoef())
          , t = 1.4;
        this.desktop_view && (t = 1),
        this.is_new_iphone && (t = 1.5);
        var i = function(t, i, s) {
            if (!t)
                return void console.error("Invalid call to resizeElt: Missing element.");
            t.style.width = Math.floor(i * e) + "px",
            s && (t.style.height = Math.floor(s * e) + "px")
        }
          , s = function(t) {
            if (!t)
                return void console.error("Invalid call to padElt: Missing element.");
            for (var i = [], s = 1; s < arguments.length; s++)
                i.push(Math.floor(arguments[s] * e) + "px");
            t.style.padding = i.join(" ")
        }
          , r = function(e, t, r) {
            if (!e)
                return void console.error("Invalid call to resizeAndPadElt: Missing element.");
            i(e, t, r);
            for (var o = [e], n = 3; n < arguments.length; n++)
                o.push(arguments[n]);
            s.apply(this, o)
        };
        resizeAndPadIconBtn = function(t, i) {
            for (var s = [t, i, i], o = 2; o < arguments.length; o++)
                s.push(arguments[o]);
            r.apply(this, s),
            t.style.fontSize = Math.floor(i * e) + "px",
            t.style.lineHeight = Math.floor(i * e) + "px"
        }
        ;
        var o = this.desktop_view ? 10 : 5
          , n = this.desktop_view ? 14 : 7
          , a = function(e) {
            resizeAndPadIconBtn(e, 30 * t, o * t, n * t)
        }
          , l = 2.5;
        this.desktop_view && (l = 3.5),
        this.$progressBarBg.style.height = Math.max(this.$leftButtonsBar.offsetHeight, this.$rightButtonsBar.offsetHeight) * l + "px",
        this.$playBarBt && (a(this.$playBarBt),
        this.video.paused ? this.$playBarBt.style.display = "inline-block" : this.$playBarBt.style.display = "none"),
        this.$pauseBarBt && (a(this.$pauseBarBt),
        this.video.paused ? this.$pauseBarBt.style.display = "none" : this.$pauseBarBt.style.display = "inline-block"),
        this.$fakePlayBtn && r(this.$fakePlayBtn, 26 * t, 26 * t, 5 * t, 7 * t),
        this.$soundOnBarBt && (a(this.$soundOnBarBt),
        this.video.muted ? this.$soundOnBarBt.style.display = "none" : this.$soundOnBarBt.style.display = "inline-block"),
        this.$soundOffBarBt && (a(this.$soundOffBarBt),
        this.video.muted ? this.$soundOffBarBt.style.display = "inline-block" : this.$soundOffBarBt.style.display = "none"),
        this.$progressBar && (this.$progressBar.style.bottom = this.$leftButtonsBar.offsetHeight + "px",
        this.$progressBar.style.height = "0px"),
        this.$leftButtonsBar && (this.$skipButton.style.bottom = .1 * (this.$leftButtonsBar.offsetHeight + this.$progressBar.offsetHeight) + "px",
        this.$videoStatus.style.fontSize = Math.max(12, Math.floor(30 / 2.8 * t * e)) + "px",
        this.$videoStatus.style.height = (30 + 2 * o) * t * e + "px",
        this.$videoStatus.style.lineHeight = (30 + 2 * o) * t * e + "px",
        this.$centerLinkSuperDiv.style.bottom = this.$progressBar.offsetHeight + this.$skipButton.offsetHeight + "px")
    }
    ,
    e.prototype.closeAd = function() {
        clearInterval(this.interval_update),
        this.visibility_interval && clearInterval(this.visibility_interval),
        this.ios_interval && clearInterval(this.ios_interval),
        this.redraw_internal && clearInterval(this.redraw_internal),
        this.video && this.video.pause(),
        delete this.video,
        this.onClose()
    }
    ,
    e.prototype.makeErrorCallBack = function(e, t, i) {
        i || (i = "");
        var s = !1;
        if (e) {
            var r = {};
            r.code = e,
            r.url = t,
            r.error_txt = i,
            s = JSON.stringify(r)
        }
        this.makeStatsCallback("error", s),
        this.makeVastCallback("vast_error_callback", e, "Url " + t + " , " + i)
    }
    ,
    e.prototype.makeVastCallback = function(e, t, i) {
        if ("undefined" == typeof this[e])
            return void console.log("VideoAds : Vast " + e + " doesn't exist");
        if (this[e]) {
            for (var s = 0; s < this[e].length; s++) {
                var r = this[e][s];
                t && (r = r.replace(/\[ERRORCODE\]/, t + "&errortxt=" + encodeURI(i)));
                var o = createRequestObject();
                o.open("GET", r, !0),
                o.withCredentials = !0;
                try {
                    o.send()
                } catch (n) {
                    return
                }
            }
            this[e] = !1
        }
    }
    ,
    e.prototype.makeStatsCallback = function(e, t) {
        if (this.stats_callback) {
            var i = 0
              , s = 0;
            this.video && (i = this.video.currentTime,
            s = this.video.duration);
            var r = this.stats_callback + e + "-" + i + "-" + s;
            t && (r = r + "/" + encodeURIComponent(t));
            var o = createRequestObject();
            o.open("GET", r, !0),
            o.onreadystatechange = function() {
                4 === o.readyState && 200 === o.status && console.log("VideoAds : Stats callback done")
            }
            ;
            try {
                o.send()
            } catch (n) {
                return
            }
        }
    }
    ,
    e.prototype.formatDuration = function(e) {
        var t = Math.floor(e / 60)
          , i = Math.floor(e - 60 * t);
        return i < 10 && (i = "0" + i),
        t < 10 && (t = "0" + t),
        t + ":" + i
    }
    ,
    e.prototype.getDrawMinSize = function() {
        var e;
        return this.desktop_view ? (e = this.$videoAdDiv.offsetHeight,
        this.$videoAdDiv.offsetWidth < e && (e = this.$videoAdDiv.offsetWidth)) : (e = window.innerHeight,
        window.innerWidth < e && (e = window.innerWidth)),
        e
    }
    ,
    e.prototype.getDrawButtonMargin = function() {
        var e = this.getDrawMinSize();
        return this.isFullScreen ? Math.floor(.04 * e) : Math.floor(.06 * e)
    }
    ,
    e.prototype.getDrawResizeCoef = function() {
        if (this.desktop_view)
            return .8;
        var e;
        return e = this.is_new_iphone && this.is_ipad ? this.getDrawMinSize() / 900 : this.getDrawMinSize() / 550,
        e > 1.2 && (e = 1.2),
        e
    }
    ,
    window.player.videoads = e
}();
var oEvents = {}
  , PinchManager = function(e) {
    var t = "object" == typeof e;
    this.aEvents = [],
    this.iPrevDiff = -1,
    this.iStartDiff = -1,
    this.bIsUse = !1,
    this.$target = t && "undefined" != typeof e.$target ? e.$target : document.body,
    this.fnBeforePinch = t && "function" == typeof e.fnBeforePinch ? e.fnBeforePinch : null,
    this.fnPinchUp = t && "function" == typeof e.fnPinchUp ? e.fnPinchUp : null,
    this.fnPinchDown = t && "function" == typeof e.fnPinchDown ? e.fnPinchDown : null,
    this.fnAfterPinch = t && "function" == typeof e.fnAfterPinch ? e.fnAfterPinch : null
};
PinchManager.prototype = {
    setIsUse: function(e) {
        this.bIsUse = e
    },
    getIsUse: function() {
        return this.bIsUse
    },
    addPinchEvents: function() {
        var e = this;
        "undefined" == typeof oEvents.pinchManager && (oEvents.pinchManager = {
            pointerdown: function(t) {
                "touch" === t.pointerType && (e.$target.style.touchAction = "none",
                e.aEvents.push(t),
                2 === e.aEvents.length && (e.setIsUse(!0),
                null !== e.fnBeforePinch && e.fnBeforePinch()))
            },
            pointermove: function(t) {
                for (var i = 0; i < e.aEvents.length; i++)
                    if (t.pointerId === e.aEvents[i].pointerId) {
                        e.aEvents[i] = t;
                        break
                    }
                if (2 === e.aEvents.length) {
                    var s = Math.floor(Math.abs(e.aEvents[0].clientX - e.aEvents[1].clientX));
                    -1 === e.iStartDiff && (e.iStartDiff = s),
                    e.iPrevDiff > 0 && (s > e.iPrevDiff && e.pinchUp(e.iStartDiff, s),
                    s < e.iPrevDiff && e.pinchDown(e.iStartDiff, s)),
                    e.iPrevDiff = s
                }
            },
            pointerup: function(t) {
                e.removeEvent(t),
                e.aEvents.length < 2 && (e.iPrevDiff = -1,
                e.iStartDiff = -1),
                e.aEvents = [],
                e.$target.style.touchAction = "auto",
                e.getIsUse() && "function" == typeof e.fnAfterPinch && (null !== e.fnAfterPinch && e.fnAfterPinch(),
                e.setIsUse(!1))
            }
        }),
        this.$target.addEventListener("pointerdown", oEvents.pinchManager.pointerdown),
        this.$target.addEventListener("pointermove", oEvents.pinchManager.pointermove),
        this.$target.addEventListener("pointerup", oEvents.pinchManager.pointerup),
        this.$target.addEventListener("pointercancel", oEvents.pinchManager.pointerup),
        this.$target.addEventListener("pointerout", oEvents.pinchManager.pointerup),
        this.$target.addEventListener("pointerleave", oEvents.pinchManager.pointerup)
    },
    removePinchEvents: function() {
        this.$target.removeEventListener("pointerdown", oEvents.pinchManager.pointerdown),
        this.$target.removeEventListener("pointermove", oEvents.pinchManager.pointermove),
        this.$target.removeEventListener("pointerup", oEvents.pinchManager.pointerup),
        this.$target.removeEventListener("pointercancel", oEvents.pinchManager.pointerup),
        this.$target.removeEventListener("pointerout", oEvents.pinchManager.pointerup),
        this.$target.removeEventListener("pointerleave", oEvents.pinchManager.pointerup)
    },
    removeEvent: function(e) {
        for (var t = 0; t < this.aEvents.length; t++)
            if (this.aEvents[t].pointerId === e.pointerId) {
                this.aEvents.splice(t, 1);
                break
            }
    },
    pinchUp: function(e, t) {
        null !== this.fnPinchUp ? this.fnPinchUp(e, t) : console.log("default pinchup")
    },
    pinchDown: function(e, t) {
        null !== this.fnPinchDown ? this.fnPinchDown(e, t) : console.log("default pinchdown")
    }
};
var S_F_COOKIES_PLAYER_PREFERENCES = "pp"
  , PREROLL_EVERY_NTH_VIDEO = 2
  , PREROLL_MAX_VIEWS = 90
  , PLAYER_OPTION = {
    FORCEQUALITY: "FORCEQUALITY",
    SQ: "SQ",
    MUTE: "MUTE",
    VOLUME: "VOLUME",
    FORCENOPICTURE: "FORCENOPICTURE",
    FORCENATIVEHLS: "FORCENATIVEHLS",
    AUTOPLAY: "AUTOPLAY",
    PLAUTOPLAY: "PLAUTOPLAY",
    CHROMECAST: "CHROMECAST",
    EXPANDED: "EXPANDED",
    FORCENOLOOP: "FORCENOLOOP",
    FORCENATIVEPLAYER: "FORCENATIVEPLAYER"
}
  , aPlayerOptions = Object.keys(PLAYER_OPTION)
  , PLAYER_MEDIA = {
    HTML5_PLAYER: "p",
    CHROMECAST: "c"
}
  , CHROMECAST_ACTIONS = {
    START: {
        LOAD: "l",
        RESUME: "r"
    },
    STOP: {
        UI_ONLY: "u",
        STOP_CURRENT_PLAYING: "c"
    }
}
  , CHROMECAST_STATUS = {
    CONNECTING_SESSION: "s",
    CONNECTED_SESSION: "c",
    CONNECTING_MEDIA: "m",
    IDLE: "i",
    PLAYING: "p",
    PAUSED: "f",
    BUFFERING: "b",
    LOADING_ERROR: "e",
    STOPPED: "k"
}
  , CAST_MODE = {
    CHROMECAST: "CHROMECAST",
    AIRPLAY: "AIRPLAY"
}
  , CAST_ICON = {
    CHROMECAST: {
        ON: "chromecast-on",
        OFF: "chromecast-off-red"
    },
    AIRPLAY: {
        ON: "airplay",
        OFF: "airplay-off-red"
    }
}
  , VIDEO_AD_TYPE = {
    PREROLL: "preroll",
    POSTROLL: "postroll"
}
  , VIDEO_AD_SFW_ENABLED = {
    preroll: "prerollEnabled",
    postroll: "postrollEnabled"
}
  , VIDEO_AD_ZONE_ID = {
    preroll: "3761585",
    postroll: "5835380"
}
  , HLS_FORCED_RESOLUTION_PARAM = {
    auto: {
        key: "auto",
        label_key: "player.auto"
    },
    max: {
        key: "max",
        label_key: "player.max"
    },
    sd: {
        key: "sd",
        label_key: "player.sd"
    }
}
  , HLS_TARGET_RESOLUTIONS = [{
    label: "360p",
    height: 360
}, {
    label: "480p",
    height: 480
}, {
    label: "720p",
    height: 720
}, {
    label: "1080p",
    height: 1080
}, {
    label: "1440p",
    height: 1440
}, {
    label: "4K",
    height: 2160
}]
  , MOBILE_COEF_MULTIPLIER = .8
  , HTML5Player = function(e, t) {
    if (this.$globalDiv = document.getElementById(e),
    !this.$globalDiv)
        return void alert("Internal Error: Unable to find Video HTML Tag");
    this.$globalDiv.style.direction = "ltr",
    this.debug = !1,
    this.consolelog = "",
    this.player_init_time = this.getTime(),
    "undefined" == typeof window.console && (window.console = {},
    window.console.log = function() {}
    ),
    this.i18n = xv.i18n.getCatalog("xvplayer"),
    this.id_video = t,
    this.polyfillPrepend(),
    this.initProps()
};
HTML5Player.prototype = {
    initProps: function() {
        this.encoded_id_video = !1,
        this.video_title = !1,
        this.videoEndedDesktopMoreContent = !1,
        this.sUrlLow = "",
        this.sUrlHigh = "",
        this.sUrlHls = "",
        this.sUrlThumb = !1,
        this.sUrlThumb169 = !1,
        this.thumb_slide = !1,
        this.thumb_slide_big = !1,
        this.thumb_slide_min = !1,
        this.view_data = !1,
        this.id_cdn = !1,
        this.id_cdn_hls = !1,
        this.fake_player = !1,
        this.desktop_view = !1,
        this.related_array = [],
        this.sponsors = !1,
        this.uploader_name = !1,
        this.is_smarttv = !1,
        this.forceExpanded = !1,
        this.is_embed = !1,
        this.bIsXnxxLogo = !1,
        this.bCommercialComOver = !1,
        this.iCommercialComDuration = 10,
        this.sVideoUrl = "",
        this.forcenativehls = !1,
        this.ads_active_fithteenpercentborder = !1,
        this.http_protocol = "http",
        this.https_protocol = "http",
        this.static_path = "https://assets-o7.xvideos-cdn.com/v3",
        "object" == typeof window.xv && "object" == typeof window.xv.conf && "object" == typeof window.xv.conf.domains && "string" == typeof window.xv.conf.domains["static"] && (this.static_path = window.xv.conf.domains["static"] + "/v3"),
        this.page_referer = !1,
        this.is_premium_site = !1,
        this.is_premium_video = !1,
        this.flashcode_available = !1,
        this.force_no_loop = !1,
        this.use_autoplay = !1,
        this.use_autoplay_setting = undefined,
        this.bEnableShortAutoLoop = !1,
        this.hide_play_timeout = 1e3,
        this.bIsAirPlayLimitationInit = !1,
        this.isFullScreen = !1,
        this.oBufferingTimeoutTimer,
        this.canPlay = !1,
        this.$globalDivOriginalParentNode = this.$globalDiv.parentNode,
        this.loopbtn,
        this.seek_bar_color = "#F00",
        this.need_doubleclick_ad = !1,
        this.extra_debug = !1,
        this.playlist = !1,
        this.is_touch_screen = "ontouchstart"in window || navigator.msMaxTouchPoints,
        this.iClickTimeLimit = 200,
        this.disableVideoAds = !1,
        this.oVideoAds = {};
        for (var e in VIDEO_AD_TYPE)
            this.oVideoAds[VIDEO_AD_TYPE[e]] = {
                oAd: null,
                bEnabled: !1,
                bLoading: !1,
                bLoaded: !1,
                bWontBeLoaded: !1,
                bDisplayed: !1
            };
        this.reinitProps()
    },
    reinitProps: function() {
        this.$videoEndedDesktopMoreDiv = !1,
        this.bVideoEndedDesktopMoreDrawn = !1,
        this.thumb_slide_type = HTML5Player.TYPE_SMALL,
        this.$rightButtonsBar = null,
        this.aTouchSeekLastPositions = [],
        this.bTouchSeekBlockClick = !1,
        this.bIsSheerSponsor = !1,
        this.$fullVidEndLink = null,
        this.smartv_tizen_version = !1,
        this.bForceLQ = !1,
        this.iPendingSeek = 0,
        this.bSeekWasPlaying = !1,
        this.bRelatedLoaded = !1,
        this.bPlNextLoaded = !1,
        this.oPlNextTimer = !1,
        this.bIsPlNextClosed = !1,
        this.bLocalStorageAutoNext = null,
        this.bIsPlNextAllowed = !0,
        this.bPlPrevNextInTopLeftDiv = !1,
        this.bEnablePlAutoPlay = !0,
        this.bEnablePlAutoLoop = !1,
        this.bEnableShortAutoLoop = !0,
        this.bCommercialComOver = !1,
        this.forcenopreviewimg = !1,
        this.has_paused = !1,
        this.has_canplaythrough = !1,
        this.wakelock_available = navigator && "object" == typeof navigator.wakeLock && "function" == typeof navigator.wakeLock.request,
        this.wakelock_active = !1,
        this.wakelock = null,
        this.bForceNativePlayer = !1,
        this.bCanForceNativePlayer = !1,
        this.bHadChromecastDetected = !1,
        this.bChromecastDetected = !1,
        this.sChromecastSessionId = null,
        this.sChromecastCurrentStatus = null,
        this.bIsAirPlayInit = !1,
        this.bIsAirPlayAvailable = !1,
        this.isFakeFullScreen = !1,
        this.isPlaying = !1,
        this.bIsBuffering = !1,
        this.isExpanded = !1,
        this.firstTimeBuffered = !1,
        this.lastBufferTimestamp = 0,
        this.isPlayError = !1,
        this.canPlay = !1,
        this.videoRatio = -1,
        this.bufferBlocked_timestamp = 0,
        this.bufferBlocked_lastvalue = !1,
        this.bufferBlocked_nbtime = 0,
        this.lastErrorRecovery = 0,
        this.pendingUrlRPCUpdate = !1,
        this.hlsjsLevelParsed = !1,
        this.lastKnownCurrentTime = 0,
        this.lastCurrentTimeCheck = 0,
        this.lastTouchSeekPosition = -1,
        this.bPlayClicked = !1,
        this.showsponsor = !0,
        this.showmessage = !1,
        this.allow_showInfos = !1,
        this.allow_showInfosTimer = !1,
        this.showpausebt = !1,
        this.showsoundcontrol = !1,
        this.showbigthumb = !0,
        this.bShowParametersMenu = !1,
        this.bShowQualitiesMenu = !1,
        this.bShowQualitiesAdvancedMenu = !1,
        this.sQualitiesMenuButtonLabel = "",
        this.bShowAdvancedMenu = !1,
        this.bShowSpeedMenu = !1,
        this.speed = 1,
        this.cursoroverprogressbar = !1,
        this.cursoroverplayer = !1,
        this.aBufferedDivList = [],
        this.$bufferedDivChromecast = !1,
        this.$bufferedDivAirplay = !1,
        this.show_preroll_ads_airplay = !1,
        this.show_endroll_ads_airplay = !1,
        this.fragStats = [],
        this.fragStatsSended = !1,
        this.hlsNbError = 0,
        this.hlsLevelAutoForced = !1,
        this.PS4FirstSeekDone = !1,
        this.bShowSubscribeBt = !1,
        this.bAdLoadingError = !1,
        this.total_video_played = 0,
        this.total_video_transfer = 0,
        this.bReportVideoPlayedSent = !1,
        this.debug_events = {},
        this.oThumbSlideMinPreload = {},
        this.use_browser_controls = !1,
        this.is_ios = !1,
        this.is_ipad = !1,
        this.is_ios_desktop_mode = !1,
        this.is_new_ios_desktop_mode = !1,
        this.is_mac_os = !1,
        this.is_old_ios = !1,
        this.is_new_iphone = !1,
        this.is_safari = !1,
        this.is_ps4 = !1,
        this.is_android_app = !1,
        this.force_play_fullscreen = !1,
        this.support_mp4 = !1,
        this.support_native_hls = !1,
        this.support_hlsjs = !1,
        this.allow_touchseek = !1,
        this.use_hlsjs = !1,
        this.use_native_hls = !1,
        this.bUseParameterMenu = !0,
        this.bIsFakePlayerDisplayed = !1,
        this.is_flashplayer_displayed = !1,
        this.adblock_checked = !1,
        this.has_adblocker = !1;
        for (var e in this.oVideoAds)
            this.oVideoAds[e].bLoading = !1;
        this.bEnableVolumeControl = !1,
        this.player_init = !1,
        this.oPresetVisibility = {},
        this.oCurrentVisibility = {},
        this.iBigUiCoef = 1,
        this.bEventsIsRemoved = !1,
        this.oPlayerRatio = {
            $btn: null,
            aRatios: [.5625, -1, 1.3333, 1.7777],
            iCurrent: null
        },
        this.bSlowSeekIsInit = !1,
        this.bSlowSeekCanInstantInit = !1,
        this.bSlowSeekIsWaiting = !1,
        this.bSlowSeekWasPlaying = !1,
        this.sSlowSeekMode = "mouse",
        this.$screenshotBt = null,
        this.bScreenshotEnabled = !1,
        this.bCanScreenshot = null,
        this.sScreenshotData = null,
        this.sScreenshotTimecode = null,
        this.$overlayScreenshot = null,
        this.$lastCopyBtn = null,
        this.bBtnScreenshotIsInit = !1
    },
    createElt: function(e, t, i, s) {
        var r = document.createElement(e);
        return t && (r.className = t),
        i && (r.id = i),
        s && (r.innerHTML = s),
        r
    },
    hideElt: function(e) {
        e && ("function" == typeof e.hide ? e.hide() : e.style.display = "none")
    },
    showElt: function(e, t) {
        e && ("function" == typeof e.show ? e.show() : e.style.display = t || "")
    },
    presetHide: function(e) {
        if ("object" != typeof e)
            this.oPresetVisibility[e] = !1;
        else
            for (var t in e)
                this.oPresetVisibility[e[t]] = !1
    },
    presetShow: function(e) {
        if ("object" != typeof e)
            this.oPresetVisibility[e] = !0;
        else
            for (var t in e)
                this.oPresetVisibility[e[t]] = !0
    },
    applyVisibility: function() {
        for (var e in this.oPresetVisibility)
            this.oPresetVisibility.hasOwnProperty(e) && "undefined" != typeof this[e] && ("undefined" != typeof this.oCurrentVisibility[e] && this.oCurrentVisibility[e] === this.oPresetVisibility[e] || (this.oCurrentVisibility[e] = this.oPresetVisibility[e],
            this.oCurrentVisibility[e] ? (console.log("applyVisibility, show", e),
            this.showElt(this[e]),
            "$pauseBt" === e && this.addClass(this.$videoDiv, "paused")) : (console.log("applyVisibility, hide", e),
            this.hideElt(this[e]),
            "$pauseBt" === e && this.removeClass(this.$videoDiv, "paused"))));
        this.oPresetVisibility = {}
    },
    createImgBtn: function(e, t, i) {
        var s = document.createElement("img");
        return s.src = this.static_path + "img/player/" + e,
        t && (s.title = this.unescape(this.i18n.__(t, i))),
        s
    },
    createIconSpan: function(e, t, i) {
        var s = document.createElement("span");
        return s.className = "player-icon-f pif-" + e,
        t && (s.title = this.unescape(this.i18n.__(t, i))),
        s
    },
    getHTML: function(e) {
        if (!e || !e.tagName)
            return "";
        var t = document.createElement("div");
        return t.appendChild(e.cloneNode(!1)),
        t.innerHTML
    },
    unescape: function(e) {
        var t = document.createElement("div");
        return t.innerHTML = e,
        0 === t.childNodes.length ? "" : t.childNodes[0].nodeValue
    },
    addClass: function(e, t) {
        return e && e.classList && "function" == typeof e.classList.add ? (e.classList.add(t),
        e) : (console.error("can't add '" + t + "' to the given element ", e),
        e)
    },
    hasClass: function(e, t) {
        return e && e.classList && "function" == typeof e.classList.contains ? void 0 !== t && 0 !== t.length && e.classList.contains(t) : (console.error("can't check '" + t + "' presence in the given element ", e),
        !1)
    },
    removeClass: function(e, t) {
        if (!e || !e.classList || "function" != typeof e.classList.remove)
            return console.error("can't remove '" + t + "' in the given element ", e),
            e;
        if (void 0 === t || 0 === t.length)
            return console.log("no class to remove from the given element ", e),
            e;
        for (var i = t.split(" "), s = 0; s < i.length; s++)
            t = i[s],
            0 !== t.length && e.classList.remove(t);
        return e
    },
    appendToVideoDiv: function(e, t) {
        this.$videoDiv.appendChild(e);
        var i = this;
        e.addEventListener("touchstart", function(e) {
            !0 === t && i.initSlowSeekStartWait(e, "touch"),
            e.stopPropagation()
        })
    },
    setVideoTitle: function(e) {
        this.video_title = e
    },
    setEncodedIdVideo: function(e) {
        this.encoded_id_video = e
    },
    setVideoEndedDesktopMore: function(e, t) {
        this.videoEndedDesktopMoreContent = e,
        this.videoEndedDesktopMoreInitFunc = t
    },
    setSponsors: function(e) {
        this.sponsors = e
    },
    setVideoUrlLow: function(e) {
        this.sUrlLow = e
    },
    setVideoUrlHigh: function(e) {
        this.sUrlHigh = e
    },
    setVideoHLS: function(e) {
        this.sUrlHls = e
    },
    setThumbUrl: function(e) {
        this.sUrlThumb = e
    },
    setRelated: function(e) {
        this.related_array = e
    },
    setThumbSlide: function(e) {
        this.thumb_slide = e
    },
    setThumbSlideBig: function(e) {
        this.thumb_slide_big = e
    },
    setThumbSlideMinute: function(e) {
        this.thumb_slide_min = e
    },
    setThumbUrl169: function(e) {
        this.sUrlThumb169 = e
    },
    setIdCDN: function(e) {
        this.id_cdn = e
    },
    setIdCdnHLS: function(e) {
        this.id_cdn_hls = e
    },
    setFakePlayer: function(e) {
        this.fake_player = e
    },
    setDesktopiew: function(e) {
        this.desktop_view = e
    },
    setIsSmartTv: function(e) {
        this.is_smarttv = e
    },
    forceNativeHls: function(e) {
        this.forcenativehls = e
    },
    setUploaderName: function(e) {
        this.uploader_name = e
    },
    forceDoubleClickAd: function(e) {
        this.need_doubleclick_ad = e
    },
    setIsEmbed: function() {
        this.is_embed = !0
    },
    setIsXnxxLogo: function() {
        this.bIsXnxxLogo = !0
    },
    setHasCommercialCom: function() {
        this.bHasCommercialCom = !0
    },
    setVideoURL: function(e) {
        this.sVideoUrl = e
    },
    setActivateFithteenPercentBorder: function() {
        this.ads_active_fithteenpercentborder = !0
    },
    setHttps: function() {
        this.http_protocol = "https"
    },
    setCanUseHttps: function() {
        this.https_protocol = "https"
    },
    setStaticPath: function(e) {
        e && (this.static_path = e)
    },
    setSeekBarColor: function(e) {
        console.log("setSeekBarColor : " + e),
        this.seek_bar_color = e
    },
    setPageReferer: function(e) {
        this.page_referer = e
    },
    setIsPremiumSite: function() {
        this.is_premium_site = !0
    },
    setIsPremiumVideo: function() {
        this.is_premium_video = !0
    },
    setViewData: function(e) {
        this.view_data = e
    },
    setFlashCodeAvailable: function() {
        this.flashcode_available = !0
    },
    activateExtraDebug: function() {
        this.extra_debug = !0
    },
    setUseAutoplay: function(e) {
        console.log("setUseAutoplay", e),
        e = "boolean" != typeof e || e,
        this.use_autoplay = e
    },
    setPlaylist: function(e, t, i, s, r) {
        if (this.$plPrevBt && !(i.length <= 1)) {
            this.playlist = {
                current: !1,
                prev: !1,
                next: !1,
                idx: 0,
                length: s || i.length
            };
            var o;
            for (o in i)
                if (i[o].encoded_id === this.encoded_id_video) {
                    "string" == typeof o && (o = parseInt(o)),
                    this.playlist.current = i[o],
                    o > 0 && (this.playlist.prev = i[o - 1]),
                    o < i.length - 1 && (this.playlist.next = i[o + 1]);
                    break
                }
            if (!this.playlist.current)
                return void (this.playlist = !1);
            this.$plPrevBt && this.playlist.prev && (this.$plPrevBt.style.visibility = "visible",
            this.$plPrevBtIcon.title = this.unescape(this.i18n.__("player.previous_pl_video", {
                "%name%": '"' + this.playlist.prev.title_full + '"'
            }))),
            this.$plNextBt && this.playlist.next && (this.$plNextBt.style.visibility = "visible",
            this.$plNextBtIcon.title = this.unescape(this.i18n.__("player.next_pl_video", {
                "%name%": '"' + this.playlist.next.title_full + '"'
            }))),
            this.bPlPrevNextInTopLeftDiv && (this.playlist.prev || this.$plPrevBt.parentNode.removeChild(this.$plPrevBt),
            this.playlist.next || this.$plNextBt.parentNode.removeChild(this.$plNextBt)),
            this.$videoTitleP.innerHTML += '<br><span class="playlist"><span class="label">' + this.i18n.__("player.playlist") + ":</span> " + e + " (" + this.i18n.__("player.video_pos_in_nb", {
                "%current_video_index%": ((r || o) + 1).toString(),
                "%nb_videos%": this.playlist.length.toString()
            }) + ")</span>",
            this.isShortVideo() && (this.bEnablePlAutoLoop || (this.video.loop = !1,
            this.loopbtn && this.loopbtn.setChecked(!1))),
            this.updateBtVisibity(),
            this.redraw()
        }
    },
    getFullVideoUrl: function() {
        return "object" == typeof xv.conf.dyn && "object" == typeof xv.conf.dyn.full_video && "string" == typeof xv.conf.dyn.full_video.player_url ? xv.conf.dyn.full_video.player_url : null
    },
    getFullVideoEndCtaUrl: function() {
        return "object" == typeof xv.conf.dyn && "object" == typeof xv.conf.dyn.full_video && "string" == typeof xv.conf.dyn.full_video.player_end_cta_url ? xv.conf.dyn.full_video.player_end_cta_url : null
    },
    getFullVideoDuration: function() {
        return "object" == typeof xv.conf.dyn && "object" == typeof xv.conf.dyn.full_video && "string" == typeof xv.conf.dyn.full_video.duration ? xv.conf.dyn.full_video.duration : ""
    },
    getFullVideoThumb: function() {
        return "object" == typeof xv.conf.dyn && "object" == typeof xv.conf.dyn.full_video && "string" == typeof xv.conf.dyn.full_video.thumb ? xv.conf.dyn.full_video.thumb : null
    },
    getFullVideoBigThumb: function() {
        return "object" == typeof xv.conf.dyn && "object" == typeof xv.conf.dyn.full_video && "string" == typeof xv.conf.dyn.full_video.thumb_big ? xv.conf.dyn.full_video.thumb_big : null
    },
    getSponsorSheerUrl: function(e) {
        for (var t in this.sponsors) {
            var i = this.sponsors[t];
            if (this.bIsSheerSponsor = !1,
            i.isSheer)
                return this.bIsSheerSponsor = !0,
                this.sVidEndedFullVidText = this.getSheerSponsorLinkText(i, e),
                i.link
        }
        return null
    },
    getVideoCurrentTime: function(e) {
        if (!e || e === PLAYER_MEDIA.CHROMECAST) {
            var t = this.getChromecastMedia();
            if (t) {
                if ("function" == typeof t.getEstimatedTime)
                    return t.getEstimatedTime();
                if ("number" == typeof t.currentTime)
                    return t.currentTime
            }
        }
        return e && e !== PLAYER_MEDIA.HTML5_PLAYER || !this.video || "number" != typeof this.video.duration ? null : this.video.currentTime
    },
    setVideoCurrentTime: function(e, t) {
        var i = this.getVideoDuration(t);
        if (!i)
            return void console.log("html5player.setVideoCurrentTime : !duration", i);
        if ("number" != typeof e && (console.log("html5player.setVideoCurrentTime : value not integer", e),
        e = parseFloat(e)),
        isNaN(e) || e === Infinity)
            return void console.log("html5player.setVideoCurrentTime : Invalid value", e);
        if (e < 0 || e > 1e5)
            return void console.log("html5player.setVideoCurrentTime : Invalid value", e);
        if (!t || t === PLAYER_MEDIA.CHROMECAST) {
            var s = this.getChromecastMedia();
            if (s && s.seek) {
                console.log("html5player.setVideoCurrentTime(" + e + ")", "Chromecast");
                var r = new chrome.cast.media.SeekRequest;
                return r.currentTime = e,
                void s.seek(r, function() {
                    console.log("Chromecast Seek ok")
                })
            }
        }
        if (xv.console.log("html5player.setVideoCurrentTime(" + e.toFixed(2) + ")", "Player"),
        (!t || t === PLAYER_MEDIA.HTML5_PLAYER) && this.video)
            return void (this.video.currentTime = e.toFixed(2));
        xv.console.log("html5player.setVideoCurrentTime(" + e.toFixed(2) + ")", "Player")
    },
    getVideoDuration: function(e) {
        if (!e || e === PLAYER_MEDIA.CHROMECAST) {
            var t = this.getChromecastMedia();
            if (t && t.media && "number" == typeof t.media.duration)
                return t.media.duration
        }
        return e && e !== PLAYER_MEDIA.HTML5_PLAYER || !this.video || "number" != typeof this.video.duration ? null : this.video.duration
    },
    initPlayer: function() {
        if (!this.player_init) {
            if (this.player_init = !0,
            xv.console.log("New Player initPlayer() with UserAgent '" + navigator.userAgent.toLowerCase() + "'", "Player"),
            window.xv && window.xv.sfw && window.xv.sfw.setupBlockedPlayer(this))
                return void (this.disableVideoAds = !0);
            var e = this;
            /iPad|iPhone|iPod/.test(navigator.userAgent) && !window.MSStream ? (/iPad/.test(navigator.userAgent) && !window.MSStream ? (this.is_ipad = !0,
            xv.console.log("is iPad", "Player")) : (this.is_ios = !0,
            xv.console.log("is iOS", "Player")),
            /OS [1-9]_/.test(navigator.userAgent) ? (this.is_old_ios = !0,
            this.use_browser_controls = !0,
            xv.console.log("Old iOS detected", "Player")) : (this.allow_touchseek = !0,
            this.is_new_iphone = !0)) : /Mac OS X/.test(navigator.userAgent) && navigator.maxTouchPoints > 2 && !window.MSStream ? (this.is_ios_desktop_mode = !0,
            this.is_ipad = !0,
            xv.console.log("iPad in Desktop mode detected", "Player"),
            (/Version\/1[8-9]/.test(navigator.userAgent) || /Version\/2[0-9]/.test(navigator.userAgent)) && (this.is_new_ios_desktop_mode = !0)) : /Mac OS X/.test(navigator.userAgent) ? (this.is_mac_os = !0,
            xv.console.log("Mac OS detected", "Player")) : !/android 4.[2-9]/.test(navigator.userAgent.toLowerCase()) || /chrome\/[4-9]/.test(navigator.userAgent.toLowerCase()) || /firefox/.test(navigator.userAgent.toLowerCase()) || /ubuntu /.test(navigator.userAgent.toLowerCase()) ? this.fullscreenSupported() || (xv.console.log("Fullscreen not supported, use browser controls", "Player"),
            this.use_browser_controls = !0) : (xv.console.log("Old browser detected", "Player"),
            this.use_browser_controls = !0),
            (/android 4.4/.test(navigator.userAgent.toLowerCase()) || /android [5-9]/.test(navigator.userAgent.toLowerCase()) || /android [1-2][0-9]/.test(navigator.userAgent.toLowerCase())) && (/chrome\/[4-9][0-9]/.test(navigator.userAgent.toLowerCase()) || /chrome\/[1-2][0-9][0-9]/.test(navigator.userAgent.toLowerCase()) || /firefox/.test(navigator.userAgent.toLowerCase())) ? (this.allow_touchseek = !0,
            console.log("allow TouchSeek")) : this.desktop_view && (console.log("Is a desktop"),
            this.allow_touchseek = !0),
            this.use_browser_controls && (this.allow_touchseek = !1),
            this.support_hlsjs = this.supportHLSjs(),
            (this.is_ios || this.is_ipad) && (this.support_hlsjs = !1,
            this.is_old_ios && (this.bUseParameterMenu = !1));
            var t = document.createElement("video");
            if ("undefined" != typeof t.canPlayType && "" !== t.canPlayType('video/mp4; codecs="avc1.42E01E,mp4a.40.2"') && (xv.console.log("Support MP4/H264", "Player"),
            this.support_mp4 = !0),
            "undefined" != typeof t.canPlayType && "" !== t.canPlayType("application/vnd.apple.mpegURL") && (xv.console.log("Support Native HLS", "Player"),
            this.support_native_hls = !0),
            this.desktop_view && -1 !== navigator.userAgent.indexOf("Safari") && -1 === navigator.userAgent.indexOf("Chrome") && (this.support_native_hls && (this.is_safari = !0,
            this.support_hlsjs = !1,
            xv.console.log("Safari do not support HLS.js", "Player")),
            !this.is_new_ios_desktop_mode && !this.fullscreenSupported()))
                return xv.console.log("Old safari browser, switch to Fake Player", "Player"),
                void this.drawFakePlayer();
            if (this.fake_player || "undefined" == typeof window.addEventListener)
                return xv.console.log("Fake player is forced, or old IE", "Player"),
                void this.drawFakePlayer();
            if (!this.support_mp4)
                return this.hasFlash() ? (this.is_flashplayer_displayed = !0,
                void xv.console.log("Browser without MP4 support but Flash support. Displaying Flash", "Player")) : (xv.console.log("This browser do not support MP4, fake player fallback", "Player"),
                void this.drawFakePlayer());
            if (this.loadPreference(),
            /XXXAndroidApp/.test(navigator.userAgent) && (console.log("Android App"),
            this.is_android_app = !0),
            (/playstation 4 /.test(navigator.userAgent.toLowerCase()) || /playstation 4\//.test(navigator.userAgent.toLowerCase())) && (xv.console.log("Playstation 4 detected", "Player"),
            this.is_ps4 = !0),
            "" !== this.sUrlHls && (this.support_native_hls && (this.is_ios || this.is_ipad || this.is_safari || this.is_ps4 || this.forcenativehls) ? this.use_native_hls = !0 : this.support_hlsjs && (this.support_native_hls && this.forcenativehls ? this.use_native_hls = !0 : this.support_hlsjs && (this.use_hlsjs = !0))),
            this.desktop_view && this.is_smarttv)
                if (/tizen /.test(navigator.userAgent.toLowerCase())) {
                    xv.console.log("Tizen SmartTV detected", "Player");
                    var i = navigator.userAgent.toLowerCase().match(/tizen ([0-9.]+)/i);
                    i && i[1] && (this.smartv_tizen_version = parseFloat(i[1]),
                    xv.console.log("Tizen SmartTV detected version " + this.smartv_tizen_version, "Player"))
                } else
                    this.supportDefaultHlsjs() ? xv.console.log("SmartTv (not Tizen) with Hls.js support", "Player") : (xv.console.log("SmartTv (not Tizen) do not support Hls.js", "Player"),
                    this.support_native_hls && "" !== this.sUrlHls ? (xv.console.log("SmartTv with no HLS.js support, but support Native HLS, force Native HLS player", "Player"),
                    this.use_native_hls = !0) : xv.console.log("SmartTv with MP4/H264 support only", "Player"));
            this.bCanForceNativePlayer = e.is_ios || e.is_new_ios_desktop_mode || e.is_ios_desktop_mode,
            this.bCanForceNativePlayer && this.bForceNativePlayer && (this.use_browser_controls = !0);
            var s = "PlayerInit Done";
            this.desktop_view ? s += ", Player in Desktop view" : s += ", Player in Mobile view",
            this.is_smarttv && (s += ", Device is a Smart TV"),
            this.support_native_hls && (s += ", Device support native HLS"),
            this.support_hlsjs && (s += ", Device support HLS.js"),
            this.use_native_hls && (s += ", Player will use native HLS"),
            this.use_hlsjs && (s += ", Player will use HLS.js"),
            this.use_browser_controls && (s += ", Player will use Browser controls (native HTML5)"),
            xv.console.log(s, "Player"),
            this.hasFullVideoUrlOrSheerSponsor() && (console.log("Short video auto replay disabled"),
            this.bEnableShortAutoLoop = !1),
            this.bEnableVolumeControl = this.desktop_view && !this.is_ios_desktop_mode,
            this.draw(),
            this.loadPreference(),
            this.loadVideoSrc(),
            this.setBuffering(!0),
            this.video.addEventListener("loadstart", function() {
                console.log("VideoEvent: loadstart"),
                e.canPlay = !1,
                e.detectPlaying(),
                e.updateBtVisibity()
            }),
            this.video.addEventListener("timeupdate", function() {
                1 !== e.video.networkState && 2 !== e.video.networkState || (e.detectPlaying(),
                e.updateDuration())
            }),
            this.video.addEventListener("progress", function() {
                1 !== e.video.networkState && 2 !== e.video.networkState || (e.detectPlaying(),
                e.updateDuration())
            }),
            this.video.addEventListener("play", function() {
                var t = "VideoEvent: play at " + e.getVideoCurrentTime(PLAYER_MEDIA.HTML5_PLAYER) + " / " + e.getVideoDuration(PLAYER_MEDIA.HTML5_PLAYER);
                console.log(t),
                e.detectPlaying(),
                e.updateBtVisibity(),
                e.is_ps4 && !e.PS4FirstSeekDone && (e.PS4FirstSeekDone = !0,
                e.seek(.5))
            }),
            this.video.addEventListener("seeking", function() {
                var t = "VideoEvent: seeking at " + e.getVideoCurrentTime(PLAYER_MEDIA.HTML5_PLAYER) + " / " + e.getVideoDuration(PLAYER_MEDIA.HTML5_PLAYER);
                console.log(t),
                e.canPlay = !1,
                e.detectPlaying(),
                e.updateBtVisibity()
            }),
            this.video.addEventListener("waiting", function() {
                xv.console.log("VideoEvent: Waiting", "Player"),
                e.detectPlaying(),
                e.updateBtVisibity()
            }),
            this.video.addEventListener("suspend", function() {
                var t = "VideoEvent: Suspend at " + e.getVideoCurrentTime(PLAYER_MEDIA.HTML5_PLAYER) + " / " + e.getVideoDuration(PLAYER_MEDIA.HTML5_PLAYER);
                console.log(t),
                e.canPlay = !0,
                e.detectPlaying(),
                e.updateBtVisibity()
            }),
            this.video.addEventListener("canplaythrough", function() {
                var t = "VideoEvent: Can Play Throught at " + e.getVideoCurrentTime(PLAYER_MEDIA.HTML5_PLAYER) + " / " + e.getVideoDuration(PLAYER_MEDIA.HTML5_PLAYER);
                console.log(t),
                e.canPlay = !0,
                e.checkNeedSeek(),
                e.detectPlaying(),
                e.updateBtVisibity(),
                e.has_canplaythrough = !0,
                e.useAutoplay() && e.startPlayInAutoPlay()
            }),
            this.video.addEventListener("canplay", function() {
                var t = "VideoEvent: Can Play at " + e.getVideoCurrentTime(PLAYER_MEDIA.HTML5_PLAYER) + " / " + e.getVideoDuration(PLAYER_MEDIA.HTML5_PLAYER);
                console.log(t),
                e.canPlay = !0,
                e.checkNeedSeek(),
                e.detectPlaying(),
                e.updateBtVisibity()
            }),
            this.video.addEventListener("playing", function() {
                var t = "VideoEvent: Playing at " + e.getVideoCurrentTime(PLAYER_MEDIA.HTML5_PLAYER) + " / " + e.getVideoDuration(PLAYER_MEDIA.HTML5_PLAYER);
                xv.console.log(t, "Player"),
                console.log(t),
                e.enableWakeLock(),
                e.showbigthumb = !1,
                e.errortimer && (clearTimeout(e.errortimer),
                delete e.errortimer),
                e.detectPlaying(),
                e.updateBtVisibity(),
                e.send_debug_event("playing")
            }),
            this.video.addEventListener("pause", function() {
                var t = "VideoEvent: Pause at " + e.getVideoCurrentTime(PLAYER_MEDIA.HTML5_PLAYER) + " / " + e.getVideoDuration(PLAYER_MEDIA.HTML5_PLAYER);
                xv.console.log(t, "Player"),
                console.log(t),
                e.disableWakeLock(),
                e.has_paused = !0,
                e.detectPlaying(),
                e.updateBtVisibity(),
                e.redraw()
            }),
            this.video.addEventListener("error", function() {
                var t = "VideoEvent: error at " + e.getVideoCurrentTime(PLAYER_MEDIA.HTML5_PLAYER) + " / " + e.getVideoDuration(PLAYER_MEDIA.HTML5_PLAYER);
                xv.console.log(t, "Player"),
                console.log(t),
                e.disableWakeLock(),
                3 === e.video.networkState && e.recoverError(),
                e.detectPlaying(),
                e.updateBtVisibity()
            }),
            this.video.addEventListener("ended", function() {
                console.log("VideoEvent: Ended at " + e.getVideoCurrentTime(PLAYER_MEDIA.HTML5_PLAYER) + " / " + e.getVideoDuration(PLAYER_MEDIA.HTML5_PLAYER)),
                e.disableWakeLock(),
                e.detectPlaying(),
                e.updateBtVisibity()
            }),
            this.video.addEventListener("abort", function() {
                var t = "VideoEvent: abort at " + e.getVideoCurrentTime(PLAYER_MEDIA.HTML5_PLAYER) + " / " + e.getVideoDuration(PLAYER_MEDIA.HTML5_PLAYER);
                xv.console.log(t, "Player"),
                console.log(t),
                e.disableWakeLock(),
                e.detectPlaying(),
                e.updateBtVisibity()
            }),
            this.video.addEventListener("durationchange", function() {
                var t = "VideoEvent: Duration Change at " + e.getVideoCurrentTime(PLAYER_MEDIA.HTML5_PLAYER) + " / " + e.getVideoDuration(PLAYER_MEDIA.HTML5_PLAYER);
                xv.console.log(t, "Player"),
                console.log(t),
                e.detectPlaying(),
                e.updateBtVisibity()
            }),
            this.video.addEventListener("loadeddata", function() {
                xv.console.log("VideoEvent: Loaded Data", "Player"),
                console.log("VideoEvent: Loaded Data"),
                e.canPlay = !0,
                e.checkNeedSeek(),
                e.detectPlaying(),
                e.updateBtVisibity()
            }),
            this.video.addEventListener("loadedmetadata", function() {
                var t = "VideoEvent: Loadedmetadata";
                xv.console.log(t, "Player"),
                console.log(t),
                e.canPlay = !0,
                e.detectPlaying(),
                e.updateBtVisibity(),
                e.videoRatio = e.video.videoWidth / e.video.videoHeight,
                console.log("Video ratio", e.videoRatio),
                e.isShortVideo() && (console.log("Playlist and short video"),
                e.bEnableShortAutoLoop && !e.force_no_loop && (e.video.loop = !0,
                e.loopbtn && e.loopbtn.setChecked(!0))),
                console.log("self.thumb_slide_type ", e.thumb_slide_type),
                e.thumb_slide_type === HTML5Player.TYPE_MINUTE && e.preloadMozaiqueMinThumbOnStart()
            }),
            this.video.addEventListener("seeked", function() {
                var t = "VideoEvent: Seeked at " + e.getVideoCurrentTime(PLAYER_MEDIA.HTML5_PLAYER) + " / " + e.getVideoDuration(PLAYER_MEDIA.HTML5_PLAYER);
                xv.console.log(t, "Player");
                var i = !e.canPlay;
                e.canPlay = !0,
                e.detectPlaying(),
                e.updateBtVisibity(),
                i && e.redraw()
            }),
            document.addEventListener("webkitfullscreenchange", function() {
                console.log("webkitfullscreenchange"),
                e.toggleFullscreen()
            }),
            document.addEventListener("mozfullscreenchange", function() {
                console.log("mozfullscreenchange"),
                e.toggleFullscreen()
            }),
            document.addEventListener("fullscreenchange", function() {
                console.log("fullscreenchange"),
                e.toggleFullscreen()
            }),
            document.addEventListener("MSFullscreenChange", function() {
                console.log("MSFullscreenChange"),
                e.toggleFullscreen()
            }),
            this.initPinchEvent()
        }
    },
    reinitPlayer: function() {
        xv.console.log("Player reinitPlayer()"),
        this.removeEvents(),
        this.unsetDrawn(),
        this.reinitProps(),
        this.initPlayer(),
        this.updateBtVisibity()
    },
    showPlayer: function() {
        this.$globalDiv && (console.log("HTML5: Show player"),
        this.showElt(this.$globalDiv))
    },
    drawFakePlayer: function() {
        if (this.desktop_view && this.hasFlash())
            return this.is_flashplayer_displayed = !0,
            console.log("Desktop with flash. Displaying Flash"),
            void xv.console.log("Use flash player for desktop", "Player");
        this.bIsFakePlayerDisplayed = !0,
        this.$globalDiv.innerHTML = "",
        this.$videoDiv = this.createElt("div", "", "fakeplayer"),
        this.$videoDiv.style.position = "relative",
        this.$videoDiv.style.width = "100%",
        this.$videoDiv.style.height = "100%",
        this.$videoDiv.style.textAlign = "center",
        this.$videoDiv.style.backgroundColor = "#000",
        this.$globalDiv.appendChild(this.$videoDiv);
        var e = this;
        if ("undefined" != typeof setInterval) {
            var t = 0
              , i = 0;
            this.interval_updated = setInterval(function() {
                e.$videoDiv.offsetWidth === t && e.$videoDiv.offsetHeight === i || (t = e.$videoDiv.offsetWidth,
                i = e.$videoDiv.offsetHeight,
                e.redrawFakePlayer())
            }, 100)
        }
        this.$globalLink = this.createElt("a", "global-link"),
        this.$globalLink.style.display = "block",
        this.$globalLink.style.width = "100%",
        this.$videoDiv.appendChild(this.$globalLink),
        this.$videoPicture = this.createElt("img", "video-bg-pic"),
        this.$videoPicture.style.width = "320px",
        this.$videoPicture.style.height = "450px",
        this.$videoPicture.src = this.sUrlThumb169,
        this.$videoPicture.border = "0",
        this.$globalLink.appendChild(this.$videoPicture),
        this.$playBt = this.createElt("img", "play-btn"),
        this.$playBt.src = this.static_path + "img/player/fakeplayer-icon-play.png",
        this.$playBt.style.position = "absolute",
        this.$playBt.style.width = "128px",
        this.$playBt.style.height = "128px",
        this.$playBt.border = "0",
        this.canShowPlay() || (this.$playBt.style.display = "none"),
        this.$globalLink.appendChild(this.$playBt),
        this.$playLinks = this.createElt("div", "play-links"),
        this.$playLinks.style.width = "100%",
        this.$playLinks.style.visibility = "hidden",
        this.$videoDiv.appendChild(this.$playLinks),
        this.$lowQualLink = this.createElt("div", "play-link"),
        this.$playLinks.appendChild(this.$lowQualLink);
        var s = document.createElement("a");
        if (s.style.display = "block",
        s.style.textAlign = "center",
        s.style.border = "2px solid #333",
        s.style.margin = "2px",
        s.style.background = "#aaa",
        s.style.fontWeight = "bold",
        s.style.lineHeight = "1.5",
        this.$lowQualLink.appendChild(s),
        this.is_embed ? (s.href = this.http_protocol + "://www.xvideos.com" + this.sVideoUrl,
        s.target = "_blank",
        s.innerHTML = this.i18n.__("player.more_on_site", {
            "%site%": "XVideos.com"
        })) : (s.href = this.sUrlLow,
        s.innerHTML = this.i18n.__("player.view_low_qual")),
        this.sUrlHigh.length > 0) {
            this.$lowQualLink.style.width = "50%",
            this.$lowQualLink.style["float"] = "left",
            this.$highQualLink = this.createElt("div", "play-link"),
            this.$playLinks.appendChild(this.$highQualLink),
            this.$highQualLink.style.width = "50%",
            this.$highQualLink.style["float"] = "right";
            var r = document.createElement("a");
            r.style.display = "block",
            r.style.textAlign = "center",
            r.style.border = "2px solid #333",
            r.style.margin = "2px",
            r.style.background = "#aaa",
            r.style.fontWeight = "bold",
            r.style.lineHeight = "1.5",
            this.$highQualLink.appendChild(r),
            r.href = this.sUrlHigh,
            r.innerHTML = this.i18n.__("player.view_high_qual");
            var o = document.createElement("div");
            o.style.clear = "both",
            this.$playLinks.appendChild(o)
        }
        var n = this.sUrlLow;
        this.sUrlHigh.length > 0 && (n = this.sUrlHigh),
        this.$globalLink.href = n,
        this.$playLinks.style.visibility = "visible",
        this.support_mp4 && (this.$videoPlayer = document.createElement("video"),
        this.$videoPlayer.controls = "controls",
        this.$videoPlayer.style.width = "100%",
        this.$videoPlayer.style.backgroundColor = "#000",
        this.$videoPlayer.src = this.$globalLink.href,
        this.$videoPlayer.poster = this.sUrlThumb,
        this.is_smarttv && (this.$videoPlayer.autoplay = !0),
        this.$videoDiv.replaceChild(this.$videoPlayer, this.$globalLink),
        this.hideElt(this.$globalLink)),
        this.redrawFakePlayer(),
        this.send_debug_event("fakeplayerloaded"),
        xv.console.log("Fake player drawed", "Player")
    },
    redrawFakePlayer: function() {
        this.$globalDiv.style.height = Math.round(this.$videoDiv.offsetWidth / 1.7777 + 40) + "px";
        var e = this.getDrawResizeCoef();
        this.$lowQualLink.style.fontSize = Math.floor(30 * e) + "px",
        "undefined" != typeof this.$highQualLink && (this.$highQualLink.style.fontSize = Math.floor(30 * e) + "px"),
        this.$videoPicture.style.width = Math.floor(this.$videoDiv.offsetWidth) + "px",
        this.$videoPicture.style.height = Math.floor(this.$videoDiv.offsetWidth / 1.7777) + "px",
        "undefined" != typeof this.$videoPlayer && (this.$videoPlayer.style.width = Math.floor(this.$videoDiv.offsetWidth) + "px",
        this.$videoPlayer.style.height = Math.round(this.$videoDiv.offsetWidth / 1.7777) + "px",
        this.$videoPlayer.style.marginBottom = "10px"),
        this.$playBt.style.width = Math.floor(150 * e) + "px",
        this.$playBt.style.height = Math.floor(150 * e) + "px",
        this.$playBt.style.top = Math.floor(this.$videoPicture.offsetHeight / 2 - 75 * e) + "px",
        this.$playBt.style.left = Math.floor(this.$videoDiv.offsetWidth / 2 - 75 * e) + "px"
    },
    draw: function() {
        var e = this;
        this.send_debug_event("loaded"),
        this.load_start = (new Date).getTime(),
        this.$globalDiv.innerHTML = "",
        this.$globalDiv.className = "embed-responsive ",
        this.$globalDiv.className += (this.desktop_view ? "desktop" : "mobile") + "-view",
        this.$videoDiv = this.createElt("div", "embed-responsive-item", "hlsplayer"),
        this.$globalDiv.appendChild(this.$videoDiv);
        try {
            this.$videoDiv.style.setProperty("--plyr-seekbar-color", this.seek_bar_color)
        } catch (s) {}
        if (this.bEventsIsRemoved || this.setupEvents(),
        this.drawVideoDiv(),
        this.drawBigButtons(),
        this.use_browser_controls ? (this.drawBrowserControlsButtons(),
        this.drawSubscribeButton(),
        this.drawSettingsInRight(),
        this.uploader_name && (this.appendToVideoDiv(this.$subscribeBarBt),
        this.$subscribeBarBt.style.position = "absolute",
        this.$subscribeBarBt.style.left = "0",
        this.$subscribeBarBt.style.bottom = "0")) : (this.drawFastForward(),
        this.drawSlowSeek(),
        this.drawProgressBarBg(),
        this.drawButtonsBars(),
        this.drawProgressBar()),
        this.bUseParameterMenu || this.drawQualityButtons(),
        this.is_embed && this.drawEmbedElements(),
        this.displaySponsorlink(),
        this.use_browser_controls && !this.is_new_iphone && this.showVideoControls(),
        this.showInfos(!0),
        this.updateBtVisibity(),
        this.redraw(),
        console.log("Video initial draw done"),
        this.use_hlsjs ? xv.console.log("HTML5 Player drawed with Hls.js : " + this.sUrlHls, "Player") : this.use_native_hls ? xv.console.log("HTML5 Player drawed with native Hls : " + this.sUrlHls, "Player") : xv.console.log("HTML5 Player drawed with MP4 support : " + this.sUrlHigh, "Player"),
        this.useAutoplay() && xv.console.log("Using Autoplay", "Player"),
        !this.desktop_view) {
            var t = document.getElementById("video-sponsor-links");
            t && this.hideElt(t),
            "object" == typeof xv && "object" == typeof xv.conf && (xv.conf.data.hide_sponsors = !0)
        }
        if (this.storageAvailable()) {
            console.log("Storage available"),
            xv.console.log("Storage available", "Player"),
            window.addEventListener("beforeunload", function(t) {
                e.saveForDurationReport()
            }),
            setInterval(function() {
                e.saveForDurationReport()
            }, 2e3);
            var i = this;
            setInterval(function() {
                i.sendPendingDuration()
            }, 1e4),
            setTimeout(function() {
                i.sendPendingDuration()
            }, 1e3 * (Math.floor(2 * Math.random()) + 2))
        } else
            console.log("Storage not available"),
            xv.console.log("Storage not available", "Player");
        return this.video
    },
    unsetDrawn: function() {
        var e = ["$logoXvideos", "$videoTitleP", "$commercialComDiv", "$loaderPic", "$pictureDiv", "$playBt", "$pauseBt", "$plPrevBt", "$plNextBt", "$replayBt", "$castControls", "$chromecastBt", "$airPlayBt", "$castPlay", "$castPause", "$castBuffering", "$castSoundOn", "$castSoundOff", "$castProgress", "$browserCtrlsDlBt", "$highQualityBt", "$lowQualityBt", "$playBarBt", "$pauseBarBt", "$replayBarBt", "$soundOnBarBt", "$soundOffBarBt", "$soundVolume", "$downloadBarBt", "$expandBarBt", "$fullscreenBarBt", "$autoplayBarBt", "$paramsBarBt", "$subscribeBarBt", "$plNextBarBt", "$plPrevBarBt", "$parametersMenu", "$qualityMenu", "$qualityAdvancedMenu", "$advancedMenu", "$speedMenu", "$parameterBtHd", "$progressBarContainer", "$progressBarBg", "$progressBarText", "$sponsorLink", "$messageDiv", "$errorDlg", "$relatedDivContainer", "$plNextContainer", "$videoAdsTitleDiv", "$videoEndedDesktopMoreDiv", "$slowSeekInfo", "$rightButtonsBar", "$bufferedDivChromecast", "$bufferedDivAirplay", "$screenshotBt", "$overlayScreenshot", "$lastCopyBtn", "$videoDiv", "$topLeftDiv", "$topRightDiv", "$topTopDiv", "$bigButtonsSub", "$playBtIcon", "$playBtTxt", "$plPrevBtIcon", "$plNextBtIcon", "$pauseBtIcon", "$replayBtIcon", "$loaderPicBuffer", "$loaderPicTxt", "$sponsorLinkIcon", "$videoClickHandler", "$bigButtons", "$fastForwardLeft", "$fastForwardLeftTxt", "$fastForwardRight", "$fastForwardRightTxt", "$leftButtonsBar", "$soundOnBarBtIcon", "$autoplayBarBtPic", "$autoplayToggleIcon", "$progressBarBufferDiv", "$progressBarCursor", "$progressBarSeekCursor", "$progressBarSeekThumb", "$progressBarSeekCursorText"];
        for (var t in e) {
            var i = e[t];
            this[i] && delete this[i]
        }
    },
    saveForDurationReport: function() {
        var e = this.getVideoDuration();
        if (e) {
            var t = "videoreport_" + this.id_video
              , s = this.getLocalStorage(t);
            try {
                var r = s;
                if ("object" != typeof s && (r = JSON.parse(s)),
                r.sended)
                    return
            } catch (d) {}
            var o = new Object;
            if (o.video_id = this.id_video,
            o.cdn_id = this.id_cdn,
            (this.use_hlsjs || this.use_native_hls) && (o.cdn_id = this.id_cdn_hls),
            o.duration = this.total_video_played,
            o.referer = this.page_referer,
            o.transfer = this.total_video_transfer,
            this.use_native_hls ? o.type = "nativehls" : this.use_hlsjs ? o.type = "hls" : o.type = "html5",
            this.use_hlsjs && (o.quality = this.hlsobj.currentLevel + 1),
            o.buffer_sec = 0,
            this.video) {
                for (i = 0; i < this.video.buffered.length; i++) {
                    var n = this.video.buffered.start(i)
                      , a = this.video.buffered.end(i);
                    o.buffer_sec += a - n
                }
                o.buffer_sec > e && (o.buffer_sec = e),
                o.duration > e && (o.duration = e)
            }
            o.lasthit = (new Date).getTime();
            var l = this.getPlayCase();
            l > 0 && (o.ap_sound = l),
            this.setLocalStorage(t, o)
        }
    },
    setupEvents: function() {
        var e = this;
        this.iLastTouchStart = 0,
        this.iLastMousedownStart = 0,
        this.iLastMouseup = 0,
        "undefined" == typeof oEvents.player && (oEvents.player = {}),
        "undefined" == typeof oEvents.player.oVideoDiv && (oEvents.player.oVideoDiv = {
            resize: function(t) {
                e.removeClass(e.$videoDiv, "is-mouse-down"),
                e.redraw(),
                e.resizeVideo()
            },
            touchstart: function(t) {
                if (t.target === e.$videoClickHandler)
                    e.initSlowSeekStartWait(t, "touch");
                else {
                    e.oTouchStart && (clearTimeout(e.oTouchStart),
                    e.oTouchStart = null);
                    for (var i in e.oVideoAds)
                        if (e.oVideoAds[i].oAd && e.oVideoAds[i].oAd.isPlaying())
                            return;
                    e.iLastTouchStart = (new Date).getTime(),
                    e.oTouchStart = setTimeout(function() {
                        e.iLastTouchStart && e.video_event(t, !0)
                    }, e.iClickTimeLimit)
                }
            },
            touchend: function(t) {
                e.oTouchStart && (clearTimeout(e.oTouchStart),
                e.oTouchStart = null)
            },
            click: function(t) {
                var i = (new Date).getTime()
                  , s = i - e.iLastMousedownStart
                  , r = i - e.iLastMouseup;
                if (r < 50 && s > r + e.iClickTimeLimit)
                    return void console.log("%c oEvents.player.oVideoDiv --- CLICK", "color:deeppink", "PREVENT CLICK", {
                        eventTarget: t.target,
                        iLastMouseup: r,
                        iLastMousedown: s,
                        timeLimitBetweenDownAndUp: e.iClickTimeLimit
                    });
                e.video_event_click(t),
                e.allClickEvents(t)
            },
            mouseover: function(t) {
                e.cursoroverplayer = !0
            },
            mousedown: function(t) {
                if (t.target === e.$videoClickHandler)
                    e.initSlowSeekStartWait(t, "mouse");
                else {
                    if (e.oMouseDownStart && (clearTimeout(e.oMouseDownStart),
                    e.oMouseDownStart = null),
                    !e.desktop_view)
                        return;
                    if (e.is_ios || e.is_ios_desktop_mode)
                        return;
                    for (var i in e.oVideoAds)
                        if (e.oVideoAds[i].oAd && e.oVideoAds[i].oAd.isPlaying())
                            return;
                    e.iLastMousedownStart = (new Date).getTime(),
                    e.oMouseDownStart = setTimeout(function() {
                        e.iLastMousedownStart && e.video_event(t, !0)
                    }, e.iClickTimeLimit)
                }
            },
            mouseleave: function(t) {
                e.removeClass(e.$videoDiv, "is-mouse-down"),
                e.cursoroverplayer = !1
            },
            mouseup: function(t) {
                e.iLastMouseup = (new Date).getTime(),
                e.removeClass(e.$videoDiv, "is-mouse-down"),
                e.cursoroverplayer = !1
            },
            dragend: function(t) {
                e.removeClass(e.$videoDiv, "is-mouse-down"),
                e.cursoroverplayer = !1
            },
            mousemove: function(t) {
                e.$videoDiv.style.cursor = "auto",
                e.showInfos()
            },
            dblclick: function(t) {
                e.removeClass(e.$videoDiv, "is-mouse-down");
                var i = t.offsetY;
                e.$videoDiv.offsetHeight > 0 && i / e.$videoDiv.offsetHeight > .85 || e.fullscreen()
            }
        }),
        window.addEventListener("resize", oEvents.player.oVideoDiv.resize);
        var t = 0
          , i = 0;
        this.interval_updated = setInterval(function() {
            if (e.detectPlaying(),
            e.use_hlsjs && e.hlsobj)
                if (e.bIsBuffering && "100%" === e.$loaderPicTxt.innerHTML)
                    if (e.bufferBlocked_lastvalue) {
                        if ((new Date).getTime() - e.bufferBlocked_timestamp > 2500) {
                            var s = "Video obj: ";
                            e.canPlay ? s += "canPlay " : s += "not canPlay ",
                            s += ", currentTime " + e.getVideoCurrentTime(),
                            e.video.seeking ? s += ", seeking " : s += ", not seeking ",
                            e.video.paused ? s += ", paused " : s += ", not paused ",
                            s += ", networkState = " + e.video.networkState,
                            s += ", readyState = " + e.video.readyState,
                            e.bufferBlocked_nbtime++,
                            e.bufferBlocked_lastvalue = !1,
                            console.log(s),
                            console.log("Buffer blocked detected " + ((new Date).getTime() - e.bufferBlocked_timestamp) + " old (" + e.bufferBlocked_nbtime + " times)"),
                            xv.console.log("Buffer blocked detected", "Player"),
                            2 === e.bufferBlocked_nbtime && e.send_debug_event("buffer_blocked")
                        }
                    } else
                        e.bufferBlocked_lastvalue = e.$loaderPicTxt.innerHTML,
                        e.bufferBlocked_timestamp = (new Date).getTime(),
                        console.log("Buffering " + e.$loaderPicTxt.innerHTML + " detected");
                else
                    e.bufferBlocked_lastvalue = !1;
            e.$videoDiv.offsetWidth === t && e.$videoDiv.offsetHeight === i || (t = e.$videoDiv.offsetWidth,
            i = e.$videoDiv.offsetHeight,
            e.redraw())
        }, 100),
        this.video_event = function(t, i) {
            if (e.desktop_view) {
                if (e.bPlayClicked && !e.video.ended)
                    if (e.video.paused)
                        e.play();
                    else if (e.pause(),
                    e.is_embed && e.bPlayClicked)
                        return void window.open(e.https_protocol + "://www.xvideos.com" + e.sVideoUrl, "_blank");
                e.showInfos()
            } else if (e.allow_showInfos) {
                if (t.target === e.$progressBarBg)
                    return;
                if (e.hideInfos(),
                e.is_embed && e.bPlayClicked)
                    return e.pause(),
                    void window.open(e.https_protocol + "://www.xvideos.com" + e.sVideoUrl, "_blank")
            } else
                i && e.showPause(),
                e.showInfos(!1)
        }
        ,
        this.video_event_click = function(t) {
            var i = -1;
            if ("boolean" == typeof t.target.paused) {
                i = 0;
                var s = t.offsetY;
                e.$videoDiv.offsetHeight > 0 && (i = s / e.$videoDiv.offsetHeight)
            }
            var r = !1;
            if (e.desktop_view) {
                if (i > .85)
                    return
            } else
                i < .75 && (r = !0),
                e.bShowParametersMenu && (e.bShowParametersMenu = !1,
                e.bShowAdvancedMenu = !1,
                e.bShowSpeedMenu = !1,
                e.bShowQualitiesMenu = !1,
                e.bShowQualitiesAdvancedMenu = !1);
            e.video_event(t, r)
        }
        ,
        this.$videoDiv.addEventListener("touchstart", oEvents.player.oVideoDiv.touchstart),
        this.$videoDiv.addEventListener("touchend", oEvents.player.oVideoDiv.touchend),
        this.$videoDiv.addEventListener("click", oEvents.player.oVideoDiv.click),
        this.desktop_view && !this.is_ios_desktop_mode && (this.$videoDiv.addEventListener("mousedown", oEvents.player.oVideoDiv.mousedown),
        this.$videoDiv.addEventListener("mouseover", oEvents.player.oVideoDiv.mouseover),
        this.$videoDiv.addEventListener("mouseleave", oEvents.player.oVideoDiv.mouseleave),
        this.$videoDiv.addEventListener("mouseup", oEvents.player.oVideoDiv.mouseup),
        this.$videoDiv.addEventListener("dragend", oEvents.player.oVideoDiv.dragend),
        this.$videoDiv.addEventListener("mousemove", oEvents.player.oVideoDiv.mousemove),
        this.$videoDiv.addEventListener("dblclick", oEvents.player.oVideoDiv.dblclick),
        window.addEventListener("keydown", function(t) {
            if (!e.is_smarttv && e.cursoroverplayer && t.target == document.body) {
                if (t.altKey || t.ctrlKey || t.shiftKey)
                    return;
                if (32 !== t.keyCode && 75 !== t.keyCode || (t.preventDefault(),
                e.bPlayClicked && (e.video.paused ? e.play() : e.pause())),
                38 === t.keyCode) {
                    if (t.preventDefault(),
                    1 === e.video.volume)
                        return !1;
                    var i = e.video.volume + .1;
                    i > 1 && (i = 1),
                    e.setVolume(i),
                    e.showsoundcontrol = !0,
                    e.cursorOverProgressBar(),
                    e.cursorLeaveProgressBar(),
                    e.showInfos()
                }
                if (40 === t.keyCode) {
                    if (t.preventDefault(),
                    0 === e.video.volume)
                        return !1;
                    var i = e.video.volume - .1;
                    i < 0 && (i = 0),
                    e.setVolume(i),
                    e.showsoundcontrol = !0,
                    e.cursorOverProgressBar(),
                    e.cursorLeaveProgressBar(),
                    e.showInfos()
                }
                if (37 === t.keyCode || 81 === t.keyCode || 65 === t.keyCode) {
                    if (t.preventDefault(),
                    !e.canPlay)
                        return !1;
                    e.seek(e.getVideoCurrentTime() - 10),
                    e.showInfos()
                }
                if (39 === t.keyCode || 68 === t.keyCode) {
                    if (t.preventDefault(),
                    !e.canPlay)
                        return !1;
                    e.seek(e.getVideoCurrentTime() + 10),
                    e.showInfos()
                }
                return 70 === t.keyCode && (t.preventDefault(),
                e.fullscreen()),
                !1
            }
        })),
        this.bEventsIsRemoved = !1
    },
    removeEvents: function() {
        this.bEventsIsRemoved || (clearInterval(this.interval_updated),
        this.interval_updated = null,
        this.$videoDiv.removeEventListener("touchstart", oEvents.player.oVideoDiv.touchstart),
        this.$videoDiv.removeEventListener("click", oEvents.player.oVideoDiv.click),
        this.$videoDiv.removeEventListener("mouseover", oEvents.player.oVideoDiv.mouseover),
        this.$videoDiv.removeEventListener("mousedown", oEvents.player.oVideoDiv.mousedown),
        this.$videoDiv.removeEventListener("mouseleave", oEvents.player.oVideoDiv.mouseleave),
        this.$videoDiv.removeEventListener("mousemove", oEvents.player.oVideoDiv.mousemove),
        this.$videoDiv.removeEventListener("dblclick", oEvents.player.oVideoDiv.dblclick),
        "function" == typeof this.slowSeekEnd && this.slowSeekEnd(),
        this.bEventsIsRemoved = !0)
    },
    allClickEvents: function(e) {
        this.iLastTouchStart = 0,
        this.iLastMousedownStart = 0,
        this.removeClass(this.$videoDiv, "is-mouse-down"),
        this.oMouseDownStart && (clearTimeout(this.oMouseDownStart),
        this.oMouseDownStart = null),
        this.oTouchStart && (clearTimeout(this.oTouchStart),
        this.oTouchStart = null)
    },
    drawVideoDiv: function() {
        this.video = document.createElement("video"),
        this.video.crossOrigin = "anonymous",
        this.video.preload = "auto",
        /firefox/.test(navigator.userAgent.toLowerCase()) && (this.video.preload = "metadata"),
        this.use_browser_controls ? this.is_ios ? (this.hideVideoControls(),
        this.video.setAttribute("playsinline", "")) : this.video.controls = "controls" : this.is_ios && !this.is_old_ios && (this.hideVideoControls(),
        this.video.setAttribute("playsinline", ""));
        var e = this.createElt("div", "video-bg-pic");
        e.appendChild(this.video),
        this.use_browser_controls || (this.$videoClickHandler = this.createElt("div", "video-click-handler"),
        e.appendChild(this.$videoClickHandler),
        this.initChromecast()),
        this.$pictureDiv = this.createElt("div", "video-pic");
        var t = document.createElement("img");
        this.sUrlThumb169 ? t.src = this.sUrlThumb169 : t.src = this.sUrlThumb,
        this.$pictureDiv.appendChild(t),
        e.appendChild(this.$pictureDiv),
        this.$videoDiv.appendChild(e),
        this.$topTopDiv = this.createElt("div", "top-top"),
        this.$videoDiv.appendChild(this.$topTopDiv),
        this.$topLeftDiv = this.createElt("div", "top-left"),
        this.$topTopDiv.appendChild(this.$topLeftDiv);
        var i = ""
          , s = null;
        if ("undefined" != typeof xv && "undefined" != typeof xv.conf) {
            var r = this.getFullVideoUrl();
            null !== r && (s = this.createElt("a", "full-video-link", null, this.i18n.__("player.full_here")),
            s.setAttribute("href", r)),
            this.is_premium_video && ("default" === xv.conf.sitename ? i += '<span class="icon-f icf-ticket-red icf-white-fill prefix"></span> ' : "xnxx" === xv.conf.sitename && (i += '<span class="gold-plate prefix">GOLD</span> '))
        }
        if (this.$videoTitleP = this.createElt("p", "video-title", null, i + this.video_title),
        this.$topLeftDiv.appendChild(this.$videoTitleP),
        null !== s && (this.$fullVidTopLink = s,
        this.desktop_view ? this.$videoTitleP.prepend(s) : this.$topLeftDiv.prepend(s)),
        this.bHasCommercialCom) {
            var o = this.createIconSpan("info-circle")
              , n = this.createElt("div", "commercial-com-text", null, this.i18n.__("player.includes_paid_promotion"));
            this.$commercialComDiv = this.createElt("div", "commercial-com", null, ""),
            this.$commercialComDiv.appendChild(o),
            this.$commercialComDiv.appendChild(n),
            this.$topLeftDiv.appendChild(this.$commercialComDiv)
        }
        this.$videoEndedDesktopMoreDiv = this.createElt("div", "video-ended-desktop", null, this.videoEndedDesktopMoreContent),
        "function" == typeof this.videoEndedDesktopMoreInitFunc && this.videoEndedDesktopMoreInitFunc(this.$videoEndedDesktopMoreDiv),
        this.$topLeftDiv.appendChild(this.$videoEndedDesktopMoreDiv),
        this.$topRightDiv = this.createElt("div", "top-right"),
        this.$topTopDiv.appendChild(this.$topRightDiv),
        this.$topRightButtonsDiv = this.createElt("div", "top-right-buttons"),
        this.$topRightDiv.appendChild(this.$topRightButtonsDiv),
        this.initAirPlay()
    },
    drawProgressBarBg: function() {
        var e = this;
        this.$progressBarBg = this.createElt("div", "progress-bar-bg"),
        this.$videoDiv.appendChild(this.$progressBarBg),
        this.$progressBarBg.addEventListener("click", function(t) {
            console.log("Progress Bar Click"),
            t.stopPropagation(),
            e.allClickEvents(t)
        }),
        this.desktop_view && (this.$progressBarBg.addEventListener("mouseenter", function() {
            e.cursorOverProgressBar()
        }),
        this.$progressBarBg.addEventListener("mouseleave", function() {
            e.cursorLeaveProgressBar()
        })),
        this.$progressBarBg.addEventListener("dblclick", function(t) {
            console.log("Progress bar dblclick"),
            t.stopPropagation(),
            e.allClickEvents(t)
        })
    },
    drawProgressBar: function() {
        var e = this;
        if (this.$progressBarContainer = this.createElt("div", "progress-bar-container noselect"),
        this.appendToVideoDiv(this.$progressBarContainer),
        this.progressbar = this.createElt("div", "progress-bar"),
        this.progressbar.addEventListener("dblclick", function(t) {
            t.stopPropagation(),
            e.allClickEvents(t)
        }),
        this.$progressBarContainer.appendChild(this.progressbar),
        this.$progressBarContainer.addEventListener("click", function(t) {
            if (console.log("progressbar seeking click"),
            t.stopPropagation(),
            e.allClickEvents(t),
            e.bTouchSeekBlockClick)
                return void console.log("Seek click blocked");
            e.slowSeekRemoveInstantStart();
            var i = e.compute_seekpercent(t)
              , s = e.getVideoDuration() * i;
            i < .01 && s < 4 && (s = 0),
            e.seek(s)
        }, !1),
        this.desktop_view && (this.$progressBarContainer.addEventListener("mouseenter", function() {
            e.cursorOverProgressBar()
        }),
        this.$progressBarContainer.addEventListener("mouseleave", function() {
            e.cursorLeaveProgressBar()
        })),
        this.$progressBarContainer.addEventListener("dblclick", function(t) {
            console.log("Progress bar dblclick"),
            t.stopPropagation(),
            e.allClickEvents(t)
        }),
        this.$progressBarBufferDiv = this.createElt("div", "bufferdiv"),
        this.desktop_view && this.$progressBarBufferDiv.addEventListener("dblclick", function(t) {
            console.log("$progressBarBufferDiv dblclick"),
            t.stopPropagation(),
            e.allClickEvents(t)
        }),
        this.progressbar.appendChild(this.$progressBarBufferDiv),
        this.desktop_view ? this.$progressBarCursor = this.createElt("div", "cursor") : (this.$progressBarCursor = this.createElt("div", "roundcursor"),
        this.$progressBarCursor.style.backgroundColor = this.seek_bar_color,
        this.$progressBarCursor.style.borderColor = this.seek_bar_color),
        this.progressbar.appendChild(this.$progressBarCursor),
        this.desktop_view || (this.$progressBarText = this.createElt("div", "progress-text-mobile noselect no-duration"),
        this.$progressBarContainer.appendChild(this.$progressBarText)),
        this.allow_touchseek) {
            if (this.computeThumbSlideType(),
            console.log("Thumb Slide : " + this.thumb_slide_type),
            this.$progressBarSeekCursor = this.createElt("div", "seek-cursor"),
            this.hideProgressBarSeekCursor(),
            this.progressbar.appendChild(this.$progressBarSeekCursor),
            this.$progressBarSeekThumb = this.createElt("div", "seek-thumb"),
            this.$progressBarSeekCursor.appendChild(this.$progressBarSeekThumb),
            this.thumb_slide_type === HTML5Player.TYPE_FULL) {
                this.$progressBarSeekThumb.style.backgroundImage = "url('" + this.thumb_slide_big + "')";
                var t = new Image;
                t.onerror = function() {
                    console.log("Thumb slide full don't seems to be available"),
                    e.thumb_slide_type = HTML5Player.TYPE_SMALL,
                    e.$progressBarSeekThumb.style.background = "url('" + e.thumb_slide + "')"
                }
                ,
                t.src = this.thumb_slide_big
            } else
                this.thumb_slide_type === HTML5Player.TYPE_MINUTE ? this.$progressBarSeekThumb.style.backgroundImage = "url('" + this.thumb_slide_min.replace("NUM", "0") + "')" : this.$progressBarSeekThumb.style.backgroundImage = "url('" + this.thumb_slide + "')";
            if (this.desktop_view && this.$progressBarSeekThumb.addEventListener("mousemove", function(t) {
                if (t && t.target && "function" == typeof t.target.getBoundingClientRect && "seek-thumb" === t.target.className) {
                    var i = t.target.getBoundingClientRect();
                    if (!i)
                        return void console.log("Unable to get rect");
                    if (!i.left || !i.top)
                        return void console.log("Unable to get rect (2)");
                    return Math.round(100 / t.target.offsetHeight * (e.touch_getPositionY(t) - i.top)) < 20 ? (e.touchSeekHide(),
                    void t.stopPropagation()) : void 0
                }
            }),
            this.$progressBarSeekCursorText = this.createElt("div", "seek-text", null, "00:00"),
            this.$progressBarSeekThumb.appendChild(this.$progressBarSeekCursorText),
            this.desktop_view) {
                this.$progressBarSeekFakeCursorDesktop = this.createElt("div", "fake-cursor-desktop-container");
                var i = this.createElt("div", "fake-cursor-desktop");
                this.$progressBarSeekFakeCursorDesktop.appendChild(i),
                this.hideElt(this.$progressBarSeekFakeCursorDesktop),
                this.progressbar.appendChild(this.$progressBarSeekFakeCursorDesktop)
            } else {
                var s = this.createElt("div", "hide-cursor");
                this.$progressBarSeekCursor.appendChild(s)
            }
            ("ontouchstart"in window || navigator.msMaxTouchPoints) && (console.log("is a touch screen"),
            this.$progressBarContainer.addEventListener("touchstart", function(t) {
                e.aTouchSeekLastPositions = [],
                e.forcenopreviewimg || (e.showProgressBarSeekCursor(),
                e.slowSeekRemoveInstantStart(),
                e.desktop_view && e.showElt(e.$progressBarSeekFakeCursorDesktop),
                e.touchSeekShow(t))
            }, !1),
            this.$progressBarContainer.addEventListener("touchend", function(t) {
                console.log("touchend");
                var i = -1;
                if (-1 !== e.lastTouchSeekPosition && (i = e.lastTouchSeekPosition,
                console.log("self.lastTouchSeekPosition", e.lastTouchSeekPosition)),
                e.aTouchSeekLastPositions.length > 1 && (i = e.aTouchSeekLastPositions[e.aTouchSeekLastPositions.length - 2],
                console.log("self.aTouchSeekLastPositions", i)),
                -1 !== i) {
                    var s = e.getVideoDuration() * i;
                    i < .01 && s < 4 && (s = 0),
                    console.log("Seek End " + s),
                    e.bTouchSeekBlockClick = !0,
                    setTimeout(function() {
                        e.bTouchSeekBlockClick = !1
                    }, 500),
                    e.seek(s)
                }
                e.touchSeekHide()
            }, !1),
            this.$progressBarContainer.addEventListener("touchcancel", function(t) {
                console.log("touchcancel"),
                e.touchSeekHide()
            }, !1),
            this.$progressBarContainer.addEventListener("touchmove", function(t) {
                e.touchSeekShow(t)
            }, !0)),
            this.desktop_view && (this.$progressBarContainer.addEventListener("mouseenter", function() {
                e.cursorOverProgressBar()
            }),
            this.$progressBarContainer.addEventListener("mouseleave", function() {
                e.cursorLeaveProgressBar()
            }),
            this.$progressBarContainer.addEventListener("mouseover", function(t) {
                e.forcenopreviewimg || (e.showProgressBarSeekCursor(),
                e.desktop_view && e.showElt(e.$progressBarSeekFakeCursorDesktop),
                e.touchSeekShow(t))
            }, !0),
            this.$progressBarContainer.addEventListener("mousemove", function(t) {
                e.forcenopreviewimg || (e.showProgressBarSeekCursor(),
                e.desktop_view && e.showElt(e.$progressBarSeekFakeCursorDesktop),
                e.touchSeekShow(t))
            }, !1),
            this.$progressBarContainer.addEventListener("mouseleave", function(t) {
                e.touchSeekHide()
            }, !0),
            this.$progressBarDetectCursor = this.createElt("div", "pgbar-cursor-detect"),
            this.progressbar.appendChild(this.$progressBarDetectCursor))
        }
    },
    drawFastForward: function() {
        if (this.desktop_view)
            return void console.log("FastForward : Do not display because is desktop view");
        console.log("FastForward : DRAWING");
        var e = this;
        this.$fastForwardLeft = this.createElt("div", "fastforward-left noselect"),
        this.$fastForwardLeft.appendChild(this.createIconSpan("angle-double-left")),
        this.$fastForwardLeftTxt = this.createElt("div", "fastforward-txt"),
        this.$fastForwardLeft.appendChild(this.$fastForwardLeftTxt),
        this.appendToVideoDiv(this.$fastForwardLeft, !0);
        var t = function(t) {
            e.removeClass(e.$fastForwardLeft, "fastforward-visible"),
            e.slowSeekRemoveInstantStart(),
            window.clearTimeout(t.timer),
            window.clearTimeout(t.timer2),
            t.timer = window.setTimeout(function() {
                console.log("Fastbackward timeout done"),
                t.activate_fastforward = !1,
                t.current_fastforward = 0,
                e.removeClass(e.$fastForwardLeft, "fastforward-visible")
            }, 1e3);
            var i = e.getVideoCurrentTime();
            i < 10 || (t.current_fastforward += 10,
            e.$fastForwardLeftTxt.innerHTML = t.current_fastforward + " sec",
            e.seek(i - 10),
            t.timer2 = window.setTimeout(function() {
                e.addClass(e.$fastForwardLeft, "fastforward-visible")
            }, 50))
        };
        this.$fastForwardLeft.addEventListener("dblclick", function(i) {
            if (!e.getVideoDuration())
                return void console.log("Fastforward : no video duration");
            e.activate_fastforward || (e.activate_fastforward = !0,
            e.current_fastforward = 0),
            i.stopPropagation(),
            e.allClickEvents(i),
            t(e)
        }),
        this.$fastForwardLeft.addEventListener("click", function(i) {
            e.activate_fastforward && (i.stopPropagation(),
            e.allClickEvents(i),
            t(e))
        }),
        this.$fastForwardRight = this.createElt("div", "fastforward-right noselect"),
        this.$fastForwardRight.appendChild(this.createIconSpan("angle-double-right")),
        this.$fastForwardRightTxt = this.createElt("div", "fastforward-txt"),
        this.$fastForwardRight.appendChild(this.$fastForwardRightTxt),
        this.appendToVideoDiv(this.$fastForwardRight, !0);
        var i = function(t) {
            e.removeClass(e.$fastForwardRight, "fastforward-visible"),
            e.slowSeekRemoveInstantStart(),
            window.clearTimeout(t.timer),
            window.clearTimeout(t.timer2),
            t.timer = window.setTimeout(function() {
                console.log("Fastfoward timeout done"),
                t.activate_fastforward = !1,
                t.current_fastforward = 0,
                e.removeClass(e.$fastForwardRight, "fastforward-visible")
            }, 1e3);
            var i = e.getVideoCurrentTime();
            i + 10 > e.getVideoDuration() || (t.current_fastforward += 10,
            e.$fastForwardRightTxt.innerHTML = t.current_fastforward + " sec",
            e.seek(i + 10),
            t.timer2 = window.setTimeout(function() {
                e.addClass(e.$fastForwardRight, "fastforward-visible")
            }, 50))
        };
        this.$fastForwardRight.addEventListener("dblclick", function(t) {
            if (console.log("this.$fastForwardRight dblclick"),
            !e.getVideoDuration())
                return void console.log("Fastforward : no video duration");
            this.activate_fastforward || (this.activate_fastforward = !0,
            this.current_fastforward = 0),
            t.stopPropagation(),
            e.allClickEvents(t),
            i(this)
        }),
        this.$fastForwardRight.addEventListener("click", function(t) {
            console.log("this.$fastForwardRight click"),
            this.activate_fastforward && (t.stopPropagation(),
            e.allClickEvents(t),
            i(this))
        })
    },
    drawSlowSeek: function() {
        console.log("drawSlowSeek : DRAWING"),
        this.$slowSeekInfo = this.createElt("div", "slowseek-info noselect"),
        this.$slowSeekInfo.appendChild(this.createElt("div", "label", null, this.i18n.__("player.slide_left_right_seek"))),
        this.appendToVideoDiv(this.$slowSeekInfo, !0)
    },
    drawBigButtons: function() {
        var e = this;
        this.$bigButtons = this.createElt("div", "big-buttons"),
        this.appendToVideoDiv(this.$bigButtons),
        this.$bigButtonsSub = this.createElt("div", "big-buttons-sub"),
        this.bPlPrevNextInTopLeftDiv = this.use_browser_controls && this.$topLeftDiv,
        this.$plPrevBt = this.createElt("div", "big-button pl-btn"),
        this.$plPrevBt.style.visibility = "hidden",
        this.bPlPrevNextInTopLeftDiv ? this.$topLeftDiv.appendChild(this.$plPrevBt) : this.$bigButtons.appendChild(this.$plPrevBt),
        this.$plPrevBt.addEventListener("click", function(t) {
            console.log("Playlist Backward Butt click"),
            t.stopPropagation(),
            e.allClickEvents(t),
            e.playlist && e.playlist.prev && (e.write_plfullscreen_cookie(e.isFullScreen ? "1" : "0"),
            window.location.href = e.playlist.prev.uri)
        }, !1),
        this.$plPrevBtIcon = this.createIconSpan("step-backward", "player.previous_pl_video", {
            "%name%": ""
        }),
        this.$plPrevBt.appendChild(this.$plPrevBtIcon),
        this.$playBt = this.createElt("div", "big-button play has-clickable-effect"),
        this.$bigButtons.appendChild(this.$playBt),
        this.$playBt.setAttribute("id", "anc-tst-play-btn"),
        this.$playBt.addEventListener("click", function(t) {
            xv.console.log("Big play button clicked", "Player"),
            t.stopPropagation(),
            e.allClickEvents(t),
            e.playbtClick()
        }),
        this.canShowPlay() || (this.$playBt.style.display = "none"),
        this.$playBtIcon = this.createIconSpan("play", "player.play"),
        this.$playBt.appendChild(this.$playBtIcon),
        this.$playBtTxt = this.createElt("span"),
        this.$playBtTxt.innerHTML = this.i18n.__("player.play"),
        this.hideElt(this.$playBtTxt),
        this.$pauseBt = this.createElt("div", "big-button pause has-clickable-effect"),
        this.$bigButtons.appendChild(this.$pauseBt),
        this.$pauseBt.addEventListener("click", function(t) {
            console.log("Pause click addEventListener"),
            t.stopPropagation(),
            e.allClickEvents(t),
            e.pause()
        }),
        this.$pauseBtIcon = this.createIconSpan("pause", "player.pause"),
        this.$pauseBt.appendChild(this.$pauseBtIcon),
        this.desktop_view || this.use_browser_controls && (this.$replayBt = this.createElt("div", "big-button replay"),
        this.$bigButtons.appendChild(this.$replayBt),
        this.$replayBt.addEventListener("click", function(t) {
            console.log("Replay click addEventListener"),
            t.stopPropagation(),
            e.allClickEvents(t),
            e.replay()
        }),
        this.$replayBtIcon = this.createIconSpan("repeat", "player.replay"),
        this.$replayBt.appendChild(this.$replayBtIcon)),
        this.$plNextBt = this.createElt("div", "big-button pl-btn"),
        this.$plNextBt.style.visibility = "hidden",
        this.bPlPrevNextInTopLeftDiv ? this.$topLeftDiv.appendChild(this.$plNextBt) : this.$bigButtons.appendChild(this.$plNextBt),
        this.$plNextBt.addEventListener("click", function(t) {
            console.log("Playlist Forward Butt click"),
            t.stopPropagation(),
            e.allClickEvents(t),
            e.playlist && e.playlist.next && (e.write_plfullscreen_cookie(e.isFullScreen ? "1" : "0"),
            window.location.href = e.playlist.next.uri)
        }, !1),
        this.$plNextBt.addEventListener("touchstart", function(e) {
            e.stopPropagation()
        }),
        this.$plNextBtIcon = this.createIconSpan("step-forward", "player.next_pl_video", {
            "%name%": ""
        }),
        this.$plNextBt.appendChild(this.$plNextBtIcon),
        this.$bigButtons.appendChild(this.$bigButtonsSub),
        this.$loaderPic = this.createElt("div", "video-loader"),
        this.$videoDiv.appendChild(this.$loaderPic),
        this.$loaderPicBuffer = this.createElt("div", "buffer"),
        this.$loaderPic.appendChild(this.$loaderPicBuffer),
        this.$loaderPicTxt = this.createElt("div", "label", null, this.i18n.__("player.buffering")),
        this.$loaderPic.appendChild(this.$loaderPicTxt),
        this.drawChromecastControls()
    },
    drawVideoEndedDesktopMore: function() {
        this.$videoEndedDesktopMoreDiv && !this.bVideoEndedDesktopMoreDrawn && (this.bVideoEndedDesktopMoreDrawn = !0,
        this.videoEndedDesktopMoreContent && (this.$videoEndedDesktopMoreDiv.innerHTML = this.videoEndedDesktopMoreContent),
        "function" == typeof this.videoEndedDesktopMoreInitFunc && this.videoEndedDesktopMoreInitFunc(this.$videoEndedDesktopMoreDiv))
    },
    setupButtonBarEvents: function(e, t, i) {
        if (this.desktop_view) {
            var s = this;
            t && (e.addEventListener("mouseenter", function() {
                s.cursorOverProgressBar()
            }),
            e.addEventListener("mouseleave", function() {
                s.cursorLeaveProgressBar()
            })),
            i && e.addEventListener("dblclick", function(e) {
                e.stopPropagation(),
                s.allClickEvents(e)
            })
        }
    },
    drawButtonsBars: function() {
        var e = this;
        this.$leftButtonsBar = this.createElt("div", "buttons-bar left noselect"),
        this.$leftButtonsBar.addEventListener("touchstart", function(e) {
            e.stopPropagation()
        }),
        this.$leftButtonsBar.addEventListener("click", function(t) {
            t.stopPropagation(),
            e.allClickEvents(t)
        }),
        this.appendToVideoDiv(this.$leftButtonsBar),
        this.$replayBarBt = this.createElt("span"),
        this.$replayBarBt.appendChild(this.createIconSpan("repeat", "player.replay")),
        this.$replayBarBt.addEventListener("click", function(t) {
            console.log("Replay click addEventListener"),
            t.stopPropagation(),
            e.allClickEvents(t),
            e.replay(),
            e.bIsPlNextAllowed = !0
        }),
        this.$leftButtonsBar.appendChild(this.$replayBarBt),
        this.$playBarBt = this.createElt("span", "has-clickable-effect"),
        this.$playBarBt.appendChild(this.createIconSpan("play", "player.play")),
        this.$playBarBt.addEventListener("click", function(t) {
            xv.console.log("Small Play Butt click", "Player"),
            t.stopPropagation(),
            e.allClickEvents(t),
            e.playbtClick()
        }, !1),
        this.setupButtonBarEvents(this.$playBarBt, !0),
        this.$leftButtonsBar.appendChild(this.$playBarBt),
        this.$pauseBarBt = this.createElt("span", "has-clickable-effect"),
        this.$pauseBarBt.appendChild(this.createIconSpan("pause", "player.pause")),
        this.$pauseBarBt.addEventListener("click", function(t) {
            console.log("Small Pause Btt click"),
            t.stopPropagation(),
            e.allClickEvents(t),
            e.pause()
        }, !1),
        this.setupButtonBarEvents(this.$pauseBarBt, !0),
        this.$leftButtonsBar.appendChild(this.$pauseBarBt),
        this.$soundOnBarBt = this.createElt("span", "has-clickable-effect"),
        this.$soundOnBarBtIcon = this.createIconSpan("sound-2", "player.mute"),
        this.$soundOnBarBt.appendChild(this.$soundOnBarBtIcon),
        this.$soundOnBarBt.addEventListener("click", function(t) {
            console.log("Sound on click addEventListener"),
            t.stopPropagation(),
            e.allClickEvents(t),
            e.mute(),
            e.showInfos(!1),
            e.updateBtVisibity()
        }),
        this.setupButtonBarEvents(this.$soundOnBarBt, !1, !0),
        this.$leftButtonsBar.appendChild(this.$soundOnBarBt),
        this.$soundOffBarBt = this.createElt("span", "has-clickable-effect"),
        this.$soundOffBarBt.appendChild(this.createIconSpan("sound-mute-red", "player.unmute")),
        this.$soundOffBarBt.addEventListener("click", function(t) {
            console.log("Sound off click addEventListener"),
            t.stopPropagation(),
            e.allClickEvents(t),
            e.unmute(),
            e.showInfos(!1),
            e.updateBtVisibity()
        }),
        this.setupButtonBarEvents(this.$soundOffBarBt, !1, !0),
        this.$leftButtonsBar.appendChild(this.$soundOffBarBt),
        this.bEnableVolumeControl && (this.$soundVolume = this.createElt("div", "volume-bar"),
        this.$soundVolumeLvl = this.createElt("div", "volume-bar-fill"),
        this.initVolumeEvents(),
        this.setupButtonBarEvents(this.$soundVolume, !1, !0),
        this.$soundVolume.appendChild(this.$soundVolumeLvl),
        this.$leftButtonsBar.appendChild(this.$soundVolume)),
        this.desktop_view && (this.$progressBarText = this.createElt("div", "progress-text noselect"),
        this.$progressBarText.addEventListener("click", function(t) {
            console.log("Progress bar text click"),
            t.stopPropagation(),
            e.allClickEvents(t)
        }),
        this.setupButtonBarEvents(this.$progressBarText, !1, !0),
        this.$leftButtonsBar.appendChild(this.$progressBarText)),
        this.desktop_view && (this.$plPrevBarBt = this.createElt("span"),
        this.$plPrevBarBt.appendChild(this.createIconSpan("step-backward", "player.previous_pl_video", {
            "%name%": ""
        })),
        this.$plPrevBarBt.addEventListener("click", function(t) {
            console.log("Small Playlist Backward Butt click"),
            t.stopPropagation(),
            e.allClickEvents(t),
            e.playlist && e.playlist.prev && (e.write_plfullscreen_cookie(e.isFullScreen ? "1" : "0"),
            window.location.href = e.playlist.prev.uri)
        }, !1),
        this.setupButtonBarEvents(this.$plPrevBarBt, !0),
        this.$leftButtonsBar.appendChild(this.$plPrevBarBt),
        this.$plNextBarBt = this.createElt("span"),
        this.$plNextBarBt.appendChild(this.createIconSpan("step-forward", "player.next_pl_video", {
            "%name%": ""
        })),
        this.$plNextBarBt.addEventListener("click", function(t) {
            console.log("Small Playlist Forward Butt click"),
            t.stopPropagation(),
            e.allClickEvents(t),
            e.playlist && e.playlist.next && (e.write_plfullscreen_cookie(e.isFullScreen ? "1" : "0"),
            window.location.href = e.playlist.next.uri)
        }, !1),
        this.setupButtonBarEvents(this.$plNextBarBt, !0),
        this.$leftButtonsBar.appendChild(this.$plNextBarBt)),
        this.drawSubscribeButton(),
        this.uploader_name && this.$leftButtonsBar.appendChild(this.$subscribeBarBt),
        this.$rightButtonsBar || (this.$rightButtonsBar = this.createElt("div", "buttons-bar right noselect"),
        this.appendToVideoDiv(this.$rightButtonsBar)),
        this.createAutoplayToggleBtn(),
        this.initScreenshotButton();
        var t = this.desktop_view ? this.$rightButtonsBar : this.$topRightButtonsDiv;
        t ? (this.$downloadBarBt = this.createElt("span", "has-clickable-effect"),
        this.$downloadBarBt.appendChild(this.createIconSpan("download", "download.title")),
        this.$downloadBarBt.addEventListener("click", function(t) {
            console.log("Download bar btt click"),
            t.stopPropagation(),
            e.allClickEvents(t),
            e.pause(),
            e.is_embed ? window.open(e.http_protocol + "://www.xvideos.com" + e.sVideoUrl, "_blank") : window.xvideos && window.xvideos.player && window.xvideos.player.openDownload && window.xvideos.player.openDownload()
        }, !1),
        this.setupButtonBarEvents(this.$downloadBarBt, !0),
        t.appendChild(this.$downloadBarBt)) : this.$downloadBarBt = null,
        this.drawSettingsInRight(),
        this.desktop_view && (this.is_premium_site && (this.loadPreference(),
        this.forceExpanded && this.toggleExpand()),
        this.$expandBarBt = this.createElt("span", "has-clickable-effect"),
        this.$expandBarBt.appendChild(this.createIconSpan("full-width", "player.double_player_size")),
        this.$expandBarBt.addEventListener("click", function(t) {
            t.stopPropagation(),
            e.allClickEvents(t),
            console.log("Expand click addEventListener"),
            e.toggleExpand()
        }, !1),
        this.setupButtonBarEvents(this.$expandBarBt, !0),
        this.$rightButtonsBar.appendChild(this.$expandBarBt)),
        this.$fullscreenBarBt = this.createElt("span");
        var i = this.createIconSpan("full-screen-animated", "player.fullscreen");
        i.appendChild(this.createElt("span")),
        i.appendChild(this.createElt("span")),
        i.appendChild(this.createElt("span")),
        i.appendChild(this.createElt("span")),
        this.$fullscreenBarBt.appendChild(i),
        this.$fullscreenBarBt.addEventListener("click", function(t) {
            console.log("Fullscreen click addEventListener"),
            t.stopPropagation(),
            e.allClickEvents(t),
            e.fullscreen()
        }),
        this.setupButtonBarEvents(this.$fullscreenBarBt, !0),
        this.$rightButtonsBar.appendChild(this.$fullscreenBarBt)
    },
    drawSettingsInRight: function() {
        if (this.bUseParameterMenu) {
            var e = this;
            this.$paramsBarBt = this.createElt("div", "settings-btn"),
            this.desktop_view ? (this.$rightButtonsBar || (this.$rightButtonsBar = this.createElt("div", "buttons-bar right noselect"),
            this.appendToVideoDiv(this.$rightButtonsBar)),
            this.$rightButtonsBar.appendChild(this.$paramsBarBt)) : this.$topRightButtonsDiv.appendChild(this.$paramsBarBt),
            this.$paramsBarBt.setAttribute("id", "anc-tst-params-btn"),
            this.$paramsBarBtIcon = this.createIconSpan("settings", "player.settings"),
            this.$paramsBarBt.appendChild(this.$paramsBarBtIcon),
            this.$parameterBtHd = this.createElt("span", "video-hd-mark", null, "HD"),
            this.$paramsBarBt.appendChild(this.$parameterBtHd),
            this.$paramsBarBt.addEventListener("click", function(t) {
                console.log("$paramsBarBt click"),
                t.stopPropagation(),
                e.allClickEvents(t),
                e.bShowParametersMenu = !e.bShowParametersMenu,
                e.bShowParametersMenu || (e.bShowQualitiesMenu = !1,
                e.bShowQualitiesAdvancedMenu = !1,
                e.bShowAdvancedMenu = !1,
                e.bShowSpeedMenu = !1),
                e.showInfos(!0)
            }, !1),
            this.setupButtonBarEvents(this.$paramsBarBt, !0, !0),
            this.drawParameters()
        }
    },
    initScreenshotButton: function() {
        try {
            if (navigator.userAgentData && Array.isArray(navigator.userAgentData.brands) && "function" == typeof navigator.userAgentData.getHighEntropyValues) {
                for (var e = navigator.userAgentData.brands, t = "", i = 0; i < e.length; i++)
                    t += e[i].brand.toLowerCase() + " ";
                var s = this;
                navigator.userAgentData.getHighEntropyValues(["model"]).then(function(e) {
                    var i = (e.model || "").toLowerCase();
                    -1 === t.indexOf("xbox") && -1 === t.indexOf("playstation") && -1 === i.indexOf("xbox") && -1 === i.indexOf("playstation") && s.doInitScreenshotButton()
                })["catch"](function() {
                    -1 === t.indexOf("xbox") && -1 === t.indexOf("playstation") && s.doInitScreenshotButton()
                })
            } else {
                var r = navigator.userAgent.toLowerCase();
                if (-1 !== r.indexOf("xbox") || -1 !== r.indexOf("playstation"))
                    return;
                this.doInitScreenshotButton()
            }
        } catch (o) {
            var r = navigator.userAgent.toLowerCase();
            if (-1 !== r.indexOf("xbox") || -1 !== r.indexOf("playstation"))
                return;
            this.doInitScreenshotButton()
        }
    },
    doInitScreenshotButton: function() {
        var e = this;
        this.$screenshotBt = this.createElt("span", "screenshot-btn" + (this.desktop_view ? "" : " big-button")),
        this.$screenshotBt.appendChild(this.createIconSpan("camera", "player.screenshot")),
        this.$screenshotBt.addEventListener("click", function(t) {
            t.stopPropagation(),
            e.allClickEvents(t),
            e.takeScreenshot()
        });
        var t = this.desktop_view ? this.$rightButtonsBar : this.$topRightButtonsDiv;
        t && (this.$downloadBarBt ? t.insertBefore(this.$screenshotBt, this.$downloadBarBt) : this.$paramsBarBt ? t.insertBefore(this.$screenshotBt, this.$paramsBarBt.nextSibling) : t.appendChild(this.$screenshotBt),
        this.setupButtonBarEvents(this.$screenshotBt, !0),
        this.bBtnScreenshotIsInit = !0,
        this.toggleScreenshotButton(!1, !0))
    },
    toggleScreenshotButton: function(e, t) {
        "boolean" != typeof e && (e = !this.bScreenshotEnabled),
        this.bScreenshotEnabled === e && !0 !== t || this.bBtnScreenshotIsInit && (this.bScreenshotEnabled = e,
        this.bScreenshotEnabled ? (this.removeClass(this.$screenshotBt, "is-disabled"),
        this.addClass(this.$screenshotBt, "has-clickable-effect")) : (this.addClass(this.$screenshotBt, "is-disabled"),
        this.removeClass(this.$screenshotBt, "has-clickable-effect")))
    },
    sanitizeFileName: function(e) {
        var t = {
            agrave: "à",
            Agrave: "À",
            eacute: "é",
            Eacute: "É",
            egrave: "è",
            Egrave: "È",
            acirc: "â",
            auml: "ä",
            iuml: "ï",
            ocirc: "ô",
            ouml: "ö",
            uuml: "ü",
            ccedil: "ç",
            Ccedil: "Ç",
            ntilde: "ñ",
            Ntilde: "Ñ",
            rsquo: "’",
            lsquo: "‘",
            ldquo: "“",
            rdquo: "”",
            mdash: "—",
            ndash: "–"
        };
        return e.replace(/&#(\d+);/g, function(e, t) {
            return String.fromCharCode(parseInt(t, 10))
        }).replace(/&([a-zA-Z]+);/g, function(e, i) {
            return t[i] || ""
        }).trim().replace(/[^0-9A-Za-zÀ-ÿ]+/g, "_").replace(/^_+|_+$/g, "").substring(0, 100)
    },
    formatScreenshotTimecode: function(e) {
        function t(e) {
            return (Math.floor(e) < 10 ? "0" : "") + Math.floor(e)
        }
        var i = Math.floor(e / 3600)
          , s = Math.floor(e % 3600 / 60)
          , r = Math.floor(e % 60);
        return i > 0 ? t(i) + "-" + t(s) + "-" + t(r) : t(s) + "-" + t(r)
    },
    saveScreenshotImage: function() {
        if (this.sScreenshotData) {
            var e = this.sanitizeFileName(this.video_title)
              , t = e + "_" + this.sScreenshotTimecode + ".png"
              , i = document.createElement("a");
            i.href = this.sScreenshotData,
            i.download = t,
            document.body.appendChild(i),
            i.click(),
            document.body.removeChild(i),
            this.removeScreenshotOverlay()
        }
    },
    canScreenshot: function() {
        if ("boolean" == typeof this.bCanScreenshot)
            return this.bCanScreenshot;
        try {
            var e = document.createElement("canvas");
            e.width = 1,
            e.height = 1;
            e.getContext("2d").drawImage(this.video, 0, 0, 1, 1),
            this.bCanScreenshot = !0
        } catch (t) {
            this.bCanScreenshot = !1
        }
        return this.bCanScreenshot
    },
    takeScreenshot: function() {
        if (!this.canScreenshot())
            return void console.log("Screenshot not supported");
        if (!this.bScreenshotEnabled)
            return void console.log("Screenshot disabled");
        if (!this.video || !this.video.videoWidth)
            return void console.log("No video element found for screenshot");
        var e = document.createElement("canvas");
        try {
            e.width = this.video.videoWidth,
            e.height = this.video.videoHeight;
            e.getContext("2d").drawImage(this.video, 0, 0, e.width, e.height)
        } catch (t) {
            return this.bCanScreenshot = !1,
            void console.log("Failed to draw video frame", t)
        }
        this.sScreenshotTimecode = this.formatScreenshotTimecode(this.video.currentTime),
        this.sScreenshotData = e.toDataURL("image/png"),
        this.showScreenshotOverlay()
    },
    copyScreenshot: function() {
        var e = this
          , t = e.sScreenshotData;
        if (!t)
            return void console.log("No screenshot data available");
        navigator.clipboard && "function" == typeof navigator.clipboard.write && "undefined" != typeof ClipboardItem && (console.log("Copying image via Clipboard API"),
        e.getBlobFromDataUrl(t, function(t) {
            var i = new ClipboardItem({
                "image/png": t
            });
            navigator.clipboard.write([i]).then(function() {
                e.onScreenshotCopied()
            })["catch"](function(e) {
                console.log("Clipboard API write failed", e)
            })
        }))
    },
    getBlobFromDataUrl: function(e, t) {
        var i, s = e.indexOf(","), r = e.substring(0, s), o = e.substring(s + 1), n = r.split(":")[1].split(";")[0], a = atob(o), l = a.length, d = new Uint8Array(l);
        for (i = 0; i < l; i += 1)
            d[i] = a.charCodeAt(i);
        t(new Blob([d],{
            type: n
        }))
    },
    onScreenshotCopied: function() {
        var e = this
          , t = e.$lastCopyBtn
          , i = e.i18n.__("misc.copied_image");
        if (!t)
            return void console.error("Cannot show tooltip: missing references");
        this.showScreenshotTooltip(t, i, 2500)
    },
    showScreenshotTooltip: function(e, t, i, s) {
        var r, o, n = "string" == typeof e ? document.querySelector(e) : e, a = this.$overlayScreenshot || document.body, l = "number" == typeof s ? s : 8;
        return n && a ? "function" != typeof window.requestAnimationFrame ? void console.error("showScreenshotTooltip: requestAnimationFrame not supported, tooltip disabled") : (r = this.createScreenshotTooltipElt(t),
        a.appendChild(r),
        o = this.computeTooltipPos(r, n, a, l),
        r.style.top = o.top + "px",
        r.style.left = o.left + "px",
        void r.addEventListener("animationend", function d() {
            r.removeEventListener("animationend", d),
            r.parentNode && r.parentNode.removeChild(r)
        })) : void console.error("showScreenshotTooltip: missing target or overlay")
    },
    createScreenshotTooltipElt: function(e) {
        var t = this.createElt("div", "screenshot-tooltip");
        return t.innerHTML = e,
        t
    },
    computeTooltipPos: function(e, t, i, s) {
        var r = i.getBoundingClientRect()
          , o = t.getBoundingClientRect()
          , n = i.clientWidth
          , a = e.offsetWidth
          , l = e.offsetHeight
          , d = o.left - r.left
          , u = o.top - r.top
          , h = d + t.offsetWidth / 2 - a / 2
          , c = u - l - s;
        return h < 0 ? h = 0 : h + a > n && (h = n - a),
        {
            top: c,
            left: h
        }
    },
    showScreenshotOverlay: function() {
        this.removeScreenshotOverlay(),
        this.$overlayScreenshot = this.createElt("div", "", "screenshot-player-overlay");
        var e = ["click", "touchstart", "mousedown", "mouseup", "dblclick"];
        for (var t in e)
            this.$overlayScreenshot.addEventListener(e[t], function(e) {
                e.stopPropagation()
            });
        this.desktop_view || this.toggleExpandScreenshot(!0);
        var i = this.createElt("img", "screenshot-image");
        i.src = this.sScreenshotData,
        this.$overlayScreenshot.appendChild(i),
        this.$overlayScreenshot.appendChild(this.createExpandScreenshotButton()),
        this.$overlayScreenshot.appendChild(this.createCloseFullscreenScreenshotButton());
        var s = this.desktop_view ? "screenshot-button-row" : "screenshot-button-row screenshot-button-row-mobile"
          , r = this.createElt("div", s);
        if (this.desktop_view) {
            var o = this.createCancelScreenshotButton();
            o && r.appendChild(o)
        }
        var n = this.createCopyScreenshotButton();
        n && r.appendChild(n);
        var a = this.createShareScreenshotButton();
        a && r.appendChild(a);
        var l = this.createSaveScreenshotButton();
        if (l && r.appendChild(l),
        this.$overlayScreenshot.appendChild(r),
        !this.$videoDiv)
            return void console.error("Container element not found: $videoDiv");
        this.$videoDiv.appendChild(this.$overlayScreenshot)
    },
    removeScreenshotOverlay: function() {
        this.$overlayScreenshot && this.$overlayScreenshot.parentNode && this.$overlayScreenshot.parentNode.removeChild(this.$overlayScreenshot),
        this.$overlayScreenshot = null
    },
    createExpandScreenshotButton: function() {
        var e = this
          , t = this.createElt("button", "expand-screenshot-button");
        return t.innerHTML = this.getHTML(this.createIconSpan("stretch", "misc.expand_img")),
        t.addEventListener("click", function(t) {
            t.preventDefault(),
            t.stopPropagation(),
            e.toggleExpandScreenshot(!0)
        }),
        t
    },
    toggleExpandScreenshot: function(e) {
        "boolean" == typeof e && this.$overlayScreenshot && (e ? (this.video.pause(),
        this.addClass(this.$overlayScreenshot, "expanded")) : this.removeClass(this.$overlayScreenshot, "expanded"))
    },
    createCloseFullscreenScreenshotButton: function() {
        var e = this
          , t = this.createElt("span", "close-fullscreen-button");
        return t.appendChild(this.createIconSpan("close-thin", "player.close")),
        t.addEventListener("click", function(t) {
            t.preventDefault(),
            t.stopPropagation(),
            e.desktop_view ? e.toggleExpandScreenshot(!1) : e.removeScreenshotOverlay()
        }),
        t
    },
    createShareScreenshotButton: function() {
        if (!navigator.share || !navigator.canShare)
            return null;
        var e = this
          , t = this.createElt("button", "share-button");
        return t.innerHTML = this.i18n.__("misc.share"),
        t.addEventListener("click", function(t) {
            t.preventDefault(),
            t.stopPropagation(),
            e.getBlobFromDataUrl(e.sScreenshotData, function(t) {
                var i = e.sanitizeFileName(e.video_title) + "_" + e.sScreenshotTimecode + ".png"
                  , s = new File([t],i,{
                    type: "image/png"
                })
                  , r = {
                    title: e.video_title,
                    files: [s]
                };
                navigator.canShare({
                    files: [s]
                }) ? navigator.share(r).then(function() {
                    console.log("Screenshot share successful")
                })["catch"](function(e) {
                    console.error("Screenshot share failed", e)
                }) : console.warn("The browser does not support file sharing")
            })
        }),
        t
    },
    createCopyScreenshotButton: function() {
        if (!navigator.clipboard || "function" != typeof navigator.clipboard.write || "undefined" == typeof ClipboardItem)
            return null;
        var e = this
          , t = this.createElt("button", "copy-button");
        return t.innerHTML = this.i18n.__("misc.copy"),
        t.addEventListener("click", function(i) {
            i.preventDefault(),
            i.stopPropagation(),
            e.$lastCopyBtn = t,
            e.copyScreenshot()
        }),
        t
    },
    createCancelScreenshotButton: function() {
        var e = this
          , t = this.createElt("button", "cancel-button");
        return t.innerHTML = this.i18n.__("misc.cancel"),
        t.addEventListener("click", function(t) {
            t.preventDefault(),
            t.stopPropagation(),
            e.removeScreenshotOverlay()
        }),
        t
    },
    createSaveScreenshotButton: function() {
        var e = this
          , t = this.createElt("button", "save-button");
        return t.innerHTML = this.i18n.__("misc.save"),
        t.addEventListener("click", function(t) {
            t.preventDefault(),
            t.stopPropagation(),
            e.saveScreenshotImage()
        }),
        t
    },
    drawSubscribeButton: function() {
        if (this.uploader_name) {
            var e = this;
            this.$subscribeBarBt = this.createElt("div", "subscribe");
            var t = document.createElement("a");
            t.className = "video-subscribe",
            t.style.paddingRight = "2px";
            var i = document.createElement("span");
            i.className = "sub-btn",
            i.style.padding = "0px";
            var s = document.createElement("img");
            s.src = this.static_path + "img/skins/default/feed.png",
            s.style.height = "9px",
            s.style.margin = "2px",
            i.appendChild(s);
            var r = document.createElement("span");
            r.className = "label",
            r.innerHTML = this.i18n.__("player.subscribe"),
            r.style.verticalAlign = "middle",
            t.appendChild(i),
            t.appendChild(r),
            this.$subscribeBarBt.appendChild(t),
            this.$subscribeBarBt.updateLabel = function() {
                if (!e.is_embed && e.uploader_name) {
                    var t = createRequestObject();
                    t.open("POST", "/profiles/" + e.uploader_name + "/followers/check", !0),
                    t.setRequestHeader("Content-type", "application/x-www-form-urlencoded"),
                    t.onreadystatechange = function() {
                        if (4 === t.readyState && 200 === t.status) {
                            try {
                                var i = JSON.parse(t.responseText)
                            } catch (n) {
                                return void console.error(n)
                            }
                            if (i.result && i.is_logged && !i.is_owner && !i.is_follower) {
                                var s = i.csrf || ""
                                  , o = !1;
                                e.$subscribeBarBt.addEventListener("click", function(t) {
                                    if (t.stopPropagation(),
                                    e.allClickEvents(t),
                                    !o) {
                                        o = !0,
                                        console.log("$subscribeBarBt click"),
                                        r.innerHTML = e.unescape(e.i18n.__("player.in_progress"));
                                        var i = createRequestObject();
                                        i.open("POST", "/profiles/" + e.uploader_name + "/followers/subscribe", !0),
                                        i.setRequestHeader("Content-type", "application/x-www-form-urlencoded"),
                                        i.onreadystatechange = function() {
                                            if (4 === i.readyState && 200 === i.status) {
                                                try {
                                                    var t = JSON.parse(i.responseText)
                                                } catch (n) {
                                                    return console.error(n),
                                                    r.innerHTML = e.unescape(e.i18n.__("player.error_please_retry")),
                                                    void (o = !1)
                                                }
                                                if (t.result)
                                                    return void (r.innerHTML = e.unescape(e.i18n.__("player.subscribed")) + ' <a href="/my-feed">' + e.unescape(e.i18n.__("player.view_activities")) + "</a>");
                                                r.innerHTML = e.unescape(e.i18n.__("player.error_please_retry")),
                                                o = !1,
                                                t.message && window.alert(t.message)
                                            }
                                        }
                                        ,
                                        i.send("csrf=" + s)
                                    }
                                }),
                                e.bShowSubscribeBt = !0,
                                e.updateBtVisibity()
                            }
                        }
                    }
                    ,
                    t.send()
                }
            }
            ,
            this.$subscribeBarBt.addEventListener("dblclick", function(t) {
                t.stopPropagation(),
                e.allClickEvents(t)
            })
        }
    },
    toggleParametersSecondaryMenu: function(e, t) {
        this.bShowAdvancedMenu = "advanced" === e && ("boolean" == typeof t ? t : !this.bShowAdvancedMenu),
        this.bShowSpeedMenu = "speed" === e && ("boolean" == typeof t ? t : !this.bShowSpeedMenu),
        this.bShowQualitiesMenu = "quality" === e && ("boolean" == typeof t ? t : !this.bShowQualitiesMenu),
        this.bShowQualitiesAdvancedMenu = "quality-advanced" === e && ("boolean" == typeof t ? t : !this.bShowQualitiesAdvancedMenu),
        this.updateBtVisibity(),
        this.redraw()
    },
    hideParam: function(e) {
        this.addClass(e, "is-hidden-param"),
        this.removeClass(e, "is-visible-param")
    },
    showParam: function(e) {
        this.addClass(e, "is-visible-param"),
        this.removeClass(e, "is-hidden-param")
    },
    drawParameters: function() {
        var e = this;
        if ("undefined" == typeof oEvents.player && (oEvents.player = {}),
        "undefined" == typeof oEvents.player.settings && (oEvents.player.settings = {
            over: function() {
                null !== e.oTimerSettings && (clearTimeout(e.oTimerSettings),
                e.oTimerSettings = null)
            },
            leave: function(t) {
                function i(t) {
                    return t && (t === e.$qualityMenu || t === e.$qualityAdvancedMenu || t === e.$speedMenu || t === e.$advancedMenu)
                }
                var s = t.currentTarget
                  , r = t.clientX
                  , o = t.clientY
                  , n = t.relatedTarget;
                (function(t) {
                    return !(!t || !(e.$parametersMenu && e.$parametersMenu.contains(t) || e.$advancedMenu && e.$advancedMenu.contains(t) || e.$qualityMenu && e.$qualityMenu.contains(t) || e.$qualityAdvancedMenu && e.$qualityAdvancedMenu.contains(t) || e.$speedMenu && e.$speedMenu.contains(t)))
                }
                )(n) || (null !== e.oTimerSettings && clearTimeout(e.oTimerSettings),
                e.oTimerSettings = setTimeout(function() {
                    if (null !== e.oTimerSettings) {
                        if (s === e.$parametersMenu) {
                            if (e.bShowQualitiesMenu || e.bShowQualitiesAdvancedMenu || e.bShowSpeedMenu || e.bShowAdvancedMenu)
                                return;
                            e.bShowParametersMenu = !1
                        }
                        var t = s.getBoundingClientRect()
                          , n = Math.round(t.left)
                          , a = Math.round(t.top);
                        null !== n && "number" == typeof n && n > 0 && null !== a && "number" == typeof a && a > 0 && i(s) && (r < n || o < a) && (e.bShowParametersMenu = !1,
                        e.bShowAdvancedMenu = !1,
                        e.bShowSpeedMenu = !1,
                        e.bShowQualitiesMenu = !1,
                        e.bShowQualitiesAdvancedMenu = !1),
                        e.updateBtVisibity(),
                        e.redraw()
                    }
                }, 500))
            }
        }),
        this.$parametersMenu = this.createElt("ul", "settings-menu noselect"),
        this.$parametersMenu.addEventListener("mouseover", oEvents.player.settings.over),
        this.$parametersMenu.addEventListener("mouseleave", oEvents.player.settings.leave),
        this.$parametersMenu.hide = function() {
            e.hideParam(this)
        }
        ,
        this.$parametersMenu.show = function() {
            e.showParam(this)
        }
        ,
        this.hideElt(this.$parametersMenu),
        this.appendToVideoDiv(this.$parametersMenu),
        this.$parametersMenu.addEventListener("click", function(t) {
            console.log("$parametersMenu click"),
            t.stopPropagation(),
            e.allClickEvents(t),
            e.showInfos(!0)
        }),
        this.$parametersMenu.addEventListener("dblclick", function(t) {
            t.stopPropagation(),
            e.allClickEvents(t)
        }),
        this.setupButtonBarEvents(this.$parametersMenu, !0),
        this.paramscheckboxes = [],
        !e.bCanForceNativePlayer || (this.addParameterElement(this.$parametersMenu, -1, "native_player_f", "settings", this.i18n.__("player.force_native_player"), !0, function(e) {}, function(t) {
            console.log("Native Player click"),
            e.toggleForceNativePlayer(t)
        }, function(t) {
            e.bForceNativePlayer && t.setChecked(!0),
            console.log("Native Player init", t)
        }),
        !this.bForceNativePlayer)) {
            this.addParameterElement(this.$parametersMenu, -1, "loop", "loop", this.i18n.__("player.loop"), !0, function(e) {}, function(t) {
                console.log("Loop click click"),
                t.isChecked ? (t.setChecked(!1),
                e.video.loop = !1,
                e.isShortVideo() && e.setForceNoLoop(!0)) : (t.setChecked(!0),
                e.video.loop = !0,
                e.setForceNoLoop(!1)),
                e.savePreference()
            }, function(t) {
                e.loopbtn = t,
                e.bEnableShortAutoLoop && e.isShortVideo() && (t.setChecked(!0),
                e.video.loop = !0)
            }),
            e.desktop_view && this.addParameterElement(this.$parametersMenu, -1, "chromecast", "chromecast", this.i18n.__("player.chromecast"), !1, function(t) {
                (e.bChromecastDetected || e.bHadChromecastDetected) && chrome.cast ? (t.show(),
                e.bChromecastDetected ? e.removeClass(t, "is-not-init") : e.addClass(t, "is-not-init")) : t.hide()
            }, function(t) {
                e.chromecastVideo()
            }, function(e) {}),
            this.$advancedMenu = this.createElt("ul", "settings-menu secondary-menu noselect"),
            this.$advancedMenu.addEventListener("mouseover", oEvents.player.settings.over),
            this.$advancedMenu.addEventListener("mouseleave", oEvents.player.settings.leave),
            this.$advancedMenu.hide = function() {
                e.hideParam(this)
            }
            ,
            this.$advancedMenu.show = function() {
                e.showParam(this)
            }
            ,
            this.hideElt(this.$advancedMenu),
            this.appendToVideoDiv(this.$advancedMenu),
            this.$advancedMenu.addEventListener("click", function(t) {
                t.stopPropagation(),
                e.allClickEvents(t),
                e.showInfos(!0)
            }),
            this.$advancedMenu.addEventListener("dblclick", function(t) {
                t.stopPropagation(),
                e.allClickEvents(t)
            }),
            this.setupButtonBarEvents(this.$advancedMenu, !0),
            this.addParameterElement(this.$parametersMenu, -1, "advanced", "settings-advanced", this.i18n.__("player.advanced"), !1, function(t) {
                e.bShowAdvancedMenu ? t.styleSetUserPref(!0) : t.styleSetNeutral()
            }, function(t) {
                console.log("Click on speed button"),
                e.toggleParametersSecondaryMenu("advanced")
            }, function(e) {
                e.styleSetNeutral()
            }, "has-sub-menu"),
            this.addParameterElement(this.$advancedMenu, -1, "advanced-back", !1, this.i18n.__("player.advanced"), !1, null, function(t) {
                console.log("Click on 'back' in speed menu"),
                e.toggleParametersSecondaryMenu("advanced", !1)
            }, null, "title back-link"),
            this.$speedMenu = this.createElt("ul", "settings-menu secondary-menu noselect"),
            this.$speedMenu.hide = function() {
                e.hideParam(this)
            }
            ,
            this.$speedMenu.show = function() {
                e.showParam(this)
            }
            ,
            this.$speedMenu.addEventListener("mouseover", oEvents.player.settings.over),
            this.$speedMenu.addEventListener("mouseleave", oEvents.player.settings.leave),
            this.hideElt(this.$speedMenu),
            this.appendToVideoDiv(this.$speedMenu),
            this.$speedMenu.addEventListener("click", function(t) {
                t.stopPropagation(),
                e.allClickEvents(t),
                e.showInfos(!0)
            }),
            this.$speedMenu.addEventListener("dblclick", function(t) {
                t.stopPropagation(),
                e.allClickEvents(t)
            }),
            this.setupButtonBarEvents(this.$speedMenu, !0),
            this.addParameterElement(this.$parametersMenu, 0, "speed", "speed", this.i18n.__("player.speed") + ' : <span class="val">' + this.speed.toString() + " X</span>", !1, function(t) {
                t.setTitle(e.i18n.__("player.speed") + ' : <span class="val">' + e.speed.toString() + " X</span>"),
                e.bShowSpeedMenu ? t.styleSetUserPref(!0) : t.styleSetNeutral()
            }, function(t) {
                console.log("Click on speed button"),
                e.toggleParametersSecondaryMenu("speed")
            }, function(e) {
                e.styleSetNeutral()
            }, "has-sub-menu"),
            this.addParameterElement(this.$speedMenu, -1, "speed-back", !1, this.i18n.__("player.speed"), !1, null, function(t) {
                console.log("Click on 'back' in speed menu"),
                e.toggleParametersSecondaryMenu("speed", !1)
            }, null, "title back-link");
            for (var t = [.5, .8, 1, 1.5, 2], i = 0; i < t.length; i++) {
                var s = t[i];
                this.addParameterElement(this.$speedMenu, -1, "speed" + i, !1, 1 === s ? this.i18n.__("player.speed_normal_short") : s.toString(), !1, function(t) {
                    e.speed === t.speed ? t.styleSetUserPref(!0) : t.styleSetNeutral()
                }, function(t) {
                    console.log("Click on speed " + t.speed),
                    e.speed = t.speed,
                    e.video.playbackRate = t.speed,
                    e.toggleParametersSecondaryMenu("speed", !1),
                    e.redrawParamers()
                }, function(t) {
                    t.speed = s,
                    e.speed === t.speed ? t.styleSetUserPref(!0) : t.styleSetNeutral()
                })
            }
            !this.use_hlsjs && !this.use_native_hls && this.sUrlHigh && this.sUrlLow && (this.addParameterElement(this.$parametersMenu, -1, "quality_hq", !1, "360p", !1, function(t) {
                e.bForceLQ ? t.styleSetNeutral() : t.styleSetUserPref(!0)
            }, function(t) {
                console.log("360p quality click"),
                e.setHQ(),
                e.redraw()
            }, function(t) {
                e.bForceLQ ? t.styleSetNeutral() : t.styleSetUserPref(!0)
            }),
            this.addParameterElement(this.$parametersMenu, -1, "quality_lq", !1, "250p", !1, function(t) {
                e.bForceLQ ? t.styleSetUserPref(!0) : t.styleSetNeutral()
            }, function(t) {
                console.log("250p quality redraw click"),
                e.setLQ(),
                e.redraw()
            }, function(t) {
                e.bForceLQ ? t.styleSetUserPref(!0) : t.styleSetNeutral()
            })),
            this.desktop_view || this.addParameterElement(this.$parametersMenu, -1, "externalplayer", "external", this.i18n.__("player.external_player"), !1, function(e) {}, function(t) {
                console.log("External player click"),
                e.is_embed ? window.open(e.http_protocol + "://www.xvideos.com" + e.sVideoUrl, "_blank") : e.streamVideo()
            }, function(e) {}),
            this.support_native_hls && this.support_hlsjs && (this.use_hlsjs || this.use_native_hls) && this.addParameterElement(this.$advancedMenu, -1, "buildinplayer", !1, this.i18n.__("player.builtin_player"), !0, function(e) {}, function(t) {
                console.log("Buildin player click"),
                e.loadPreference(),
                t.isChecked ? (t.setChecked(!1),
                e.forcenativehls = !1) : (t.setChecked(!0),
                e.forcenativehls = !0),
                e.savePreference(),
                alert("You need to reload the page to see the change")
            }, function(t) {
                e.forcenativehls && (console.log("Init force native HLS"),
                t.setChecked(!0))
            }),
            this.addParameterElement(this.$advancedMenu, -1, "ratio", !1, this.i18n.__("player.ratio_auto"), !1, function() {
                e.resizeVideo()
            }, function() {
                e.setParamRatioBtn(!0)
            }, function(t) {
                null === e.oPlayerRatio.$btn && "object" == typeof t && (e.oPlayerRatio.$btn = t),
                null === e.oPlayerRatio.iCurrent && (e.oPlayerRatio.iCurrent = e.oPlayerRatio.aRatios[1])
            }),
            this.allow_touchseek && this.addParameterElement(this.$advancedMenu, -1, "previewimg", !1, this.i18n.__("player.preview_img"), !0, function(e) {}, function(t) {
                console.log("Buildin preview img"),
                e.loadPreference(),
                t.isChecked ? (t.setChecked(!1),
                e.forcenopreviewimg = !0) : (t.setChecked(!0),
                e.forcenopreviewimg = !1),
                e.savePreference()
            }, function(t) {
                e.forcenopreviewimg ? console.log("Init no preview img") : t.setChecked(!0)
            })
        }
    },
    drawQualityParameters: function(e) {
        var t = this;
        this.$qualityMenu = this.createElt("ul", "settings-menu secondary-menu noselect"),
        this.$qualityMenu.addEventListener("mouseenter", oEvents.player.settings.over),
        this.$qualityMenu.addEventListener("mouseleave", oEvents.player.settings.leave),
        this.$qualityMenu.hide = function() {
            t.hideParam(this)
        }
        ,
        this.$qualityMenu.show = function() {
            t.showParam(this)
        }
        ,
        this.setupButtonBarEvents(this.$qualityMenu, !0),
        this.hideElt(this.$qualityMenu),
        this.appendToVideoDiv(this.$qualityMenu),
        this.$qualityMenu.addEventListener("click", function(e) {
            e.stopPropagation(),
            t.allClickEvents(e),
            t.showInfos(!0)
        }),
        this.$qualityAdvancedMenu = this.createElt("ul", "settings-menu secondary-menu noselect"),
        this.$qualityAdvancedMenu.addEventListener("mouseenter", oEvents.player.settings.over),
        this.$qualityAdvancedMenu.addEventListener("mouseleave", oEvents.player.settings.leave),
        this.$qualityAdvancedMenu.hide = function() {
            t.hideParam(this)
        }
        ,
        this.$qualityAdvancedMenu.show = function() {
            t.showParam(this)
        }
        ,
        this.setupButtonBarEvents(this.$qualityAdvancedMenu, !0),
        this.hideElt(this.$qualityAdvancedMenu),
        this.appendToVideoDiv(this.$qualityAdvancedMenu),
        this.$qualityAdvancedMenu.addEventListener("click", function(e) {
            e.stopPropagation(),
            t.allClickEvents(e),
            t.showInfos(!0)
        }),
        this.addParameterElement(this.$parametersMenu, 0, "quality", "quality", this.i18n.__("player.quality") + " : ", !1, function(e) {
            if (!t.hlsobj)
                return void e.hide();
            e.show(),
            e.setTitle(t.i18n.__("player.quality") + ' : <span class="val">' + t.sQualitiesMenuButtonLabel + "</span>")
        }, function() {
            console.log("Click on quality button"),
            t.toggleParametersSecondaryMenu("quality")
        }, function(e) {
            e.styleSetNeutral()
        }, "has-sub-menu"),
        this.addParameterElement(this.$qualityMenu, 0, "quality-back", null, this.i18n.__("player.quality"), !1, null, function() {
            console.log("Click on 'back' in speed menu"),
            t.toggleParametersSecondaryMenu("quality", !1)
        }, null, "title back-link"),
        this.addParameterElement(this.$qualityMenu, 1, "levelauto", !1, this.i18n.__(HLS_FORCED_RESOLUTION_PARAM.auto.label_key), !1, function(e) {
            e.styleSetUserPref(t.forcequality === HLS_FORCED_RESOLUTION_PARAM.auto.key || "undefined" == typeof t.forcequality || null === t.forcequality)
        }, function() {
            t.hlsQualityHelpers.markQualitySwitchBuffering(t),
            t.forcequality = HLS_FORCED_RESOLUTION_PARAM.auto.key,
            t.hlsQualityHelpers.setAutoMode(t),
            t.savePreference(),
            t.hlsQualityHelpers.syncQualityUiNow(t, -1, e),
            t.toggleParametersSecondaryMenu("quality", !1)
        }),
        this.addParameterElement(this.$qualityMenu, 2, "levelmax", !1, this.i18n.__(HLS_FORCED_RESOLUTION_PARAM.max.label_key), !1, function(e) {
            e.styleSetUserPref(t.forcequality === HLS_FORCED_RESOLUTION_PARAM.max.key)
        }, function() {
            t.hlsQualityHelpers.markQualitySwitchBuffering(t);
            var i = e.length - 1;
            t.forcequality = HLS_FORCED_RESOLUTION_PARAM.max.key,
            t.hlsQualityHelpers.setFixedLevel(t, i),
            t.savePreference(),
            t.hlsQualityHelpers.syncQualityUiNow(t, i, e),
            t.toggleParametersSecondaryMenu("quality", !1)
        });
        var i = this.hlsQualityHelpers.findStrict360Index(e);
        -1 !== i ? this.addParameterElement(this.$qualityMenu, 3, "levelsd", !1, this.i18n.__(HLS_FORCED_RESOLUTION_PARAM.sd.label_key), !1, function(e) {
            e.styleSetUserPref(t.forcequality === HLS_FORCED_RESOLUTION_PARAM.sd.key)
        }, function() {
            t.hlsQualityHelpers.markQualitySwitchBuffering(t),
            t.forcequality = HLS_FORCED_RESOLUTION_PARAM.sd.key,
            t.hlsQualityHelpers.setFixedLevel(t, i),
            t.savePreference(),
            t.hlsQualityHelpers.syncQualityUiNow(t, i, e),
            t.toggleParametersSecondaryMenu("quality", !1)
        }) : this.forcequality === HLS_FORCED_RESOLUTION_PARAM.sd.key && this.addParameterElement(this.$qualityMenu, 3, "levelsd", !1, this.i18n.__("player.sd"), !1, function(e) {
            e.styleSetDisabled(),
            e.styleSetUserPref(t.forcequality === HLS_FORCED_RESOLUTION_PARAM.sd.key)
        }),
        this.addParameterElement(this.$qualityMenu, 4, "leveladvanced", !1, this.i18n.__("player.advanced"), !1, function(e) {
            e.styleSetPlaying(),
            e.styleSetUserPref(!1)
        }, function() {
            console.log("Open Advanced quality menu"),
            t.toggleParametersSecondaryMenu("quality-advanced", !0)
        }, function(e) {
            e.styleSetNeutral && e.styleSetNeutral()
        }, "has-sub-menu"),
        this.addParameterElement(this.$qualityAdvancedMenu, 0, "quality-advanced-back", null, this.i18n.__("player.advanced"), !1, null, function() {
            console.log("Click on 'back' in advanced quality menu"),
            t.toggleParametersSecondaryMenu("quality", !0)
        }, null, "title back-link");
        for (var s = this.hlsQualityHelpers.getOrBuildAdvancedQualityItems(this), r = 0; r < s.length; r++)
            !function(i) {
                t.addParameterElement(t.$qualityAdvancedMenu, 1, "leveladv-" + i.height, "play", i.label, !1, function(s) {
                    s.styleSetUserPref(!1);
                    var r = t.hlsQualityHelpers.getUiSelectedLevelIndex(t, e);
                    s.styleSetPlaying(r === i.index)
                }, function() {
                    t.hlsQualityHelpers.markQualitySwitchBuffering(t),
                    t.forcequality = i.index,
                    t.hlsQualityHelpers.setFixedLevel(t, i.index),
                    t.hlsQualityHelpers.syncQualityUiNow(t, i.index, e),
                    t.savePreference(),
                    t.redraw(),
                    t.toggleParametersSecondaryMenu("quality-advanced", !1)
                }, function(t) {
                    t.hlslevel = i.index,
                    t.hlslevelname = e[i.index].name
                })
            }(s[r]);
        this.loadPreference(),
        this.forcequality = this.hlsQualityHelpers.normalizePersistedPreference(this, this.forcequality),
        this.hlsQualityHelpers.syncQualityUiNow(this, this.hlsQualityHelpers.getUiSelectedLevelIndex(this, e), e),
        this.redraw()
    },
    addParameterElement: function(e, t, i, s, r, o, n, a, l, d) {
        var u = this
          , h = "setting" + ("string" == typeof d ? " " + d : "")
          , c = this.createElt("li", h, i)
          , f = this.createElt("span", "label");
        c.appendChild(f),
        "string" == typeof s && s.length && f.append(this.createIconSpan(s));
        var p = this.createElt("span", "label-text", null, r);
        if (f.append(p),
        c.styleRefreshClass = function() {
            var e = h;
            this.isDisabled && (e += " disabled"),
            this.isPlaying && (e += " playing"),
            this.isUserPref && (e += " user-pref"),
            this.className = e
        }
        ,
        c.styleSetDisabled = function(e) {
            this.isDisabled = "boolean" != typeof e || e,
            this.styleRefreshClass()
        }
        ,
        c.styleSetPlaying = function(e) {
            this.isPlaying = "boolean" != typeof e || e,
            this.styleRefreshClass()
        }
        ,
        c.styleSetUserPref = function(e) {
            this.isUserPref = "boolean" != typeof e || e,
            this.styleRefreshClass()
        }
        ,
        c.styleSetNeutral = function() {
            this.isDisabled = !1,
            this.isPlaying = !1,
            this.isUserPref = !1,
            this.styleRefreshClass()
        }
        ,
        c.setTitle = function(e) {
            if (p.innerHTML !== e) {
                var t = u.createElt("div", null, null, e);
                p.innerHTML !== t.innerHTML && (p.innerHTML = e)
            }
        }
        ,
        "function" == typeof a && c.addEventListener("click", function() {
            a(this)
        }),
        c.onRedraw = function() {
            "function" == typeof n && n(this)
        }
        ,
        c.hide = function() {
            this.style.display = "none"
        }
        ,
        c.show = function() {
            this.style.display = ""
        }
        ,
        o && (c.checkbox = this.createElt("span", "setting-checkbox"),
        c.appendChild(c.checkbox),
        c.isChecked = !1,
        c.setChecked = function(e) {
            this.isChecked = e,
            e ? u.addClass(this.checkbox, "is-checked") : u.removeClass(this.checkbox, "is-checked")
        }
        ,
        this.paramscheckboxes.push(c.checkbox)),
        "function" == typeof l && l(c),
        -1 === t)
            return void e.appendChild(c);
        var v = e.children;
        if (0 === v.length || t >= v.length)
            return void e.appendChild(c);
        e.insertBefore(c, v[t])
    },
    redrawParamers: function() {
        var e;
        if (this.$qualityMenu) {
            e = this.$qualityMenu.children;
            for (var t = 0; t < e.length; t++)
                e[t].onRedraw()
        }
        if (this.$qualityAdvancedMenu && this.bShowQualitiesAdvancedMenu) {
            e = this.$qualityAdvancedMenu.children;
            for (var t = 0; t < e.length; t++)
                e[t].onRedraw()
        }
        if (this.$advancedMenu && this.bShowAdvancedMenu) {
            e = this.$advancedMenu.children;
            for (var t = 0; t < e.length; t++)
                e[t].onRedraw()
        }
        if (this.$speedMenu && this.bShowSpeedMenu) {
            e = this.$speedMenu.children;
            for (var t = 0; t < e.length; t++)
                e[t].onRedraw()
        }
        if (this.bUseParameterMenu && !this.use_browser_controls) {
            e = this.$parametersMenu.children;
            for (var t = 0; t < e.length; t++)
                e[t].onRedraw()
        }
    },
    drawBrowserControlsButtons: function() {
        var e = this;
        this.$browserCtrlsDlBt = this.createIconSpan("download", "player.download_video"),
        this.addClass(this.$browserCtrlsDlBt, "browser-controls-dl-btn"),
        this.$videoDiv.appendChild(this.$browserCtrlsDlBt),
        this.$browserCtrlsDlBt.addEventListener("click", function(t) {
            console.log("Download click addEventListener"),
            t.stopPropagation(),
            e.allClickEvents(t),
            window.xvideos && window.xvideos.player && window.xvideos.player.openDownload && (e.pause(),
            window.xvideos.player.openDownload())
        })
    },
    drawEmbedElements: function() {
        this.$logoXvideos = this.createElt("div", "xv-logo"),
        this.desktop_view ? this.$logoXvideos.style.width = "120px" : this.$logoXvideos.style.width = "25%",
        this.appendToVideoDiv(this.$logoXvideos);
        var e = document.createElement("a");
        e.href = this.http_protocol + "://" + window.location.host + this.sVideoUrl,
        e.target = "_blank",
        this.$logoXvideos.appendChild(e);
        var t = document.createElement("img");
        this.bIsXnxxLogo ? t.src = this.static_path + "img/player/logo_xnxx.png" : t.src = this.static_path + "img/player/logo_xvideos.png",
        t.style.width = "100%",
        e.appendChild(t)
    },
    drawQualityButtons: function() {
        var e = this;
        this.$lowQualityBt = this.createElt("div", "quality-btn quality-default", null, "250p"),
        this.$videoDiv.appendChild(this.$lowQualityBt),
        this.$lowQualityBt.addEventListener("click", function(t) {
            console.log("LQ click addEventListener"),
            t.stopPropagation(),
            e.allClickEvents(t),
            e.setLQ()
        }),
        this.$highQualityBt = this.createElt("div", "quality-btn quality-default", null, "360p"),
        this.appendToVideoDiv(this.$highQualityBt),
        this.$highQualityBt.addEventListener("click", function(t) {
            console.log("HQ click addEventListener"),
            t.stopPropagation(),
            e.allClickEvents(t),
            e.setHQ()
        })
    },
    displaySponsorlink: function() {
        if (this.sponsors && 0 !== this.sponsors.length && !this.$sponsorLink) {
            var e = this
              , t = this.sponsors.length
              , i = this.sponsors[0];
            if (!i.isSheer && t > 1) {
                if (!xv.utils || !xv.utils.randomFromArray)
                    return;
                i = xv.utils.randomFromArray(this.sponsors)
            } else
                i.isSheer && xv.conf && xv.conf.dyn && xv.conf.dyn.isPixAllowed && !this.is_premium_site && (i = {
                    link: xv.conf.dyn.pixPremiumUrl,
                    name: xv.conf.dyn.premiumSiteName
                });
            this.$sponsorLink = this.createElt("a", "video-overlay-title video-overlay-title-invideo noselect"),
            this.$sponsorLink.href = i.link,
            this.$sponsorLink.setAttribute("target", "_blank"),
            this.$sponsorLink.setAttribute("rel", "noopener noreferrer"),
            this.setupButtonBarEvents(this.$sponsorLink, !0),
            this.$topRightDiv.prepend(this.$sponsorLink);
            var s = "<strong>" + i.name + "</strong>";
            i.isSheer && (xv.utils && xv.utils.unescape && "function" == typeof xv.utils.unescape && (s = this.getSheerSponsorLinkText(i)),
            this.$sponsorLink.className += " sheer-sponsor",
            s = s.toUpperCase());
            var r = this.createElt("p", "", null, s);
            r.className = "video-overlay-title-txt",
            this.$sponsorLink.appendChild(r),
            this.$sponsorLinkIcon = this.createElt("span", "Link"),
            this.$sponsorLinkIcon.className = " video-overlay-title-icon",
            this.$sponsorLinkIcon.appendChild(this.createIconSpan("link")),
            this.$sponsorLink.appendChild(this.$sponsorLinkIcon),
            this.$sponsorLink.addEventListener("click", function(t) {
                console.log("Sponsor popup click : '" + i.link + "'"),
                e.pause(),
                t.stopPropagation(),
                e.allClickEvents(t)
            }, !1)
        }
    },
    polyfillPrepend: function() {
        Element.prototype.prepend || (Element.prototype.prepend = function() {
            var e, t = arguments, i = document.createDocumentFragment();
            for (e = 0; e < t.length; e++)
                i.appendChild(t[e]instanceof Node ? t[e] : document.createTextNode(t[e]));
            this.insertBefore(i, this.firstChild)
        }
        )
    },
    isTrailer: function(e) {
        return e.isTrailer === undefined ? e.pid !== undefined : e.isTrailer && e.pid
    },
    getSheerSponsorLinkText: function(e, t) {
        if (!xv.conf)
            return "";
        if (!xv.utils)
            return "";
        if (!e.pseudo)
            return this.getLegacySponsorLink(e);
        "default" === xv.conf.sitename || xv.conf.sitename;
        var i = {
            fullV: "video.get_full_on"
        }
          , s = {
            joinV: "video.get_exclusive_content_on"
        }
          , r = xv.utils.randomFromArray(Object.entries(this.isTrailer(e) ? i : s))
          , o = r[1];
        e.link = "https://www.sheer.com/" + e.pseudo + (e.pid ? "/post/" + e.pid : "") + "#join-us-fan";
        var n = this.i18n.__(o, {
            "%strong%": "<strong>",
            "%strong_end%": "</strong>",
            "%site%": "string" == typeof t && t.length ? t : ""
        });
        if ("string" == typeof t && t.length)
            return n;
        var a = n.match(/.*<strong>(.*)<\/strong>.*/);
        return a ? "<strong>" + xv.utils.unescape(a[1]) + "</strong>" : ""
    },
    getLegacySponsorLink: function(e) {
        return "<strong>" + xv.utils.unescape(e.name) + "</strong>"
    },
    displayLoadError: function() {
        if (this.$errorDlg)
            return this.presetShow("$errorDlg"),
            void this.$videoDiv.appendChild(this.$errorDlg);
        var e = this;
        this.$errorDlg = this.createElt("div", "error-dialog"),
        this.appendToVideoDiv(this.$errorDlg);
        var t = this.createElt("div", "error-content");
        this.$errorDlg.appendChild(t);
        var i = this.createElt("p", "", null, "<b>" + this.i18n.__("player.loading_error") + "</b>");
        t.appendChild(i);
        var s = this.createElt("button", "", null, this.i18n.__("player.retry"));
        s.type = "button",
        t.appendChild(s),
        s.addEventListener("click", function(t) {
            console.log("Error button retry click addEventListener"),
            t.stopPropagation(),
            e.allClickEvents(t),
            e.recoverError(!0)
        })
    },
    openMessageBox: function() {
        var e = this;
        if (this.$messageDiv)
            return void this.presetShow("$messageDiv");
        this.$messageDiv = this.createElt("div", "message-dialog"),
        this.appendToVideoDiv(this.$messageDiv),
        this.$messageDiv.addEventListener("click", function(t) {
            console.log("Message Div Click"),
            t.stopPropagation(),
            e.allClickEvents(t)
        }),
        this.$messageTxtDiv = this.createElt("div", "message-content"),
        this.$messageDiv.appendChild(this.$messageTxtDiv),
        this.$messageDivClose = this.createIconSpan("close", "player.close"),
        this.$messageDivClose.className = "dlg-close-btn",
        this.$messageDivClose.addEventListener("click", function(t) {
            console.log("Close message"),
            e.showInfos(!1),
            e.showmessage = !1,
            e.updateBtVisibity(),
            e.redraw()
        }, !1),
        this.$messageDiv.appendChild(this.$messageDivClose)
    },
    touchSeekShow: function(e) {
        if ("object" == typeof e && "function" == typeof e.stopPropagation)
            e.stopPropagation(),
            this.lastTouchSeekPosition = this.compute_seekpercent(e);
        else {
            if ("number" != typeof e)
                return;
            this.lastTouchSeekPosition = e
        }
        this.aTouchSeekLastPositions.length > 3 && (this.aTouchSeekLastPositions = this.aTouchSeekLastPositions.slice(1)),
        this.aTouchSeekLastPositions.push(this.lastTouchSeekPosition);
        var t, i = this.lastTouchSeekPosition;
        if (i < 0 && (i = 0),
        i > 1 && (i = 1),
        this.desktop_view)
            t = this.$progressBarDetectCursor.offsetWidth * i - this.$progressBarSeekThumb.offsetWidth / 2,
            t < 0 && (t = 0),
            t > this.$progressBarDetectCursor.offsetWidth - this.$progressBarSeekThumb.offsetWidth && (t = this.$progressBarDetectCursor.offsetWidth - this.$progressBarSeekThumb.offsetWidth),
            this.$progressBarSeekCursor.style.left = t + "px",
            this.$progressBarSeekFakeCursorDesktop.style.left = this.$progressBarDetectCursor.offsetWidth * i - this.$progressBarSeekFakeCursorDesktop.offsetWidth / 2 + "px";
        else {
            var s = this.$progressBarContainer && this.$progressBarContainer.style && parseInt(this.$progressBarContainer.style.left) > 0 ? parseInt(this.$progressBarContainer.style.left) : 999;
            t = this.progressbar.offsetWidth * i - this.$progressBarSeekThumb.offsetWidth / 2,
            !isNaN(s) && t < -s && (t = -s),
            this.$progressBarSeekCursor.style.left = t + "px",
            this.$progressBarCursor.style.left = this.progressbar.offsetWidth * i - this.$progressBarCursor.offsetWidth / 2 + "px",
            this.$progressBarCursor.touchseek = !0,
            "object" == typeof e && "function" == typeof e.preventDefault && e.preventDefault()
        }
        var r = this.getVideoDuration();
        this.$progressBarSeekCursorText.innerHTML = this.formatSeconds(r * i);
        var o = Math.floor(30 * this.lastTouchSeekPosition + 1);
        o < 1 ? o = 1 : o > 30 && (o = 30);
        var n = Math.floor((o - 1) / 6)
          , a = o - 1 - 6 * n
          , l = Math.floor(r * this.lastTouchSeekPosition);
        if (this.is_premium_video && (l -= 4),
        l < 0 && (l = 0),
        this.thumb_slide_type === HTML5Player.TYPE_FULL) {
            var i = l / r * 100;
            o = Math.floor(i + 1),
            o < 1 && (o = 1),
            o > 100 && (o = 100),
            n = Math.floor((o - 1) / 10),
            a = o - 1 - 10 * n
        } else if (this.thumb_slide_type === HTML5Player.TYPE_MINUTE) {
            var d = Math.floor(l / 60);
            this.$progressBarSeekThumb.style.backgroundImage = "url('" + this.thumb_slide_min.replace("NUM", d) + "')",
            d > 1 && this.preloadMozaiqueMinThumb(d - 1),
            l < r - 60 && this.preloadMozaiqueMinThumb(d + 1),
            o = Math.floor(l - 60 * d),
            n = Math.floor(o / 10),
            a = o - 10 * n
        }
        this.$progressBarSeekThumb.style.backgroundPosition = "-" + a * this.$progressBarSeekThumb.clientWidth + "px -" + n * this.$progressBarSeekThumb.clientHeight + "px",
        this.showInfos(!0)
    },
    touchSeekHide: function() {
        this.allow_touchseek && this.$progressBarCursor && (this.hideProgressBarSeekCursor(),
        this.desktop_view && this.hideElt(this.$progressBarSeekFakeCursorDesktop),
        this.$progressBarCursor.touchseek = !1,
        this.lastTouchSeekPosition = -1)
    },
    showProgressBarSeekCursor: function() {
        this.showElt(this.$progressBarSeekCursor),
        this.desktop_view || this.addClass(this.$videoDiv, "has-mobile-seek-cursor")
    },
    hideProgressBarSeekCursor: function() {
        this.hideElt(this.$progressBarSeekCursor),
        this.desktop_view || this.removeClass(this.$videoDiv, "has-mobile-seek-cursor")
    },
    loadingAdError: function() {
        this.bAdLoadingError = !0
    },
    setNoSquareAd: function() {
        window.xvideos && window.xvideos.player && window.xvideos.player.toggleSize && window.xvideos.player.toggleSize(!0)
    },
    isPromiseSupported: function() {
        return !(!window.Promise || !Promise || "function" != typeof Promise)
    },
    isAutoplayAvailable: function() {
        var e = this;
        return this.isPromiseSupported() ? new Promise(function(t, i) {
            var s = e.video.currentTime
              , r = function() {
                e.video.currentTime = s
            };
            e.video.play().then(function() {
                console.log("isAutoplayAvailable --- AutoPlay available"),
                e.video.pause(),
                r(),
                t(!0)
            })["catch"](function(e) {
                console.log("isAutoplayAvailable --- AutoPlay not available", e),
                r(),
                t(!1)
            })
        }
        ) : (console.log("isAutoplayAvailable --- Promise not available"),
        undefined)
    },
    playbtClick: function() {
        if (!this.bPlayClicked && this.use_hlsjs && this.hlsobj.startLoad(),
        !this.bPlayClicked && this.desktop_view && (this.cursorOverProgressBar(),
        this.cursorLeaveProgressBar(),
        this.redraw()),
        this.bPlayClicked && this.showPause(),
        this.bPlayClicked = !0,
        this.addClass(this.$videoDiv, "play-clicked"),
        this.displayPreRollVideoAd())
            return void xv.console.log("playbtClick - Starting to display Video Ads");
        this.use_browser_controls && this.showVideoControls(),
        this.play(),
        this.force_play_fullscreen && this.fullscreen(),
        this.updateBtVisibity(),
        this.redraw(),
        this.desktop_view && "function" == typeof window.openpop && window.openpop()
    },
    startPlayInAutoPlay: function() {
        if (this.bAutoPlayStarted)
            return void console.log("startPlayInAutoPlay Autoplay already tried, aborting");
        console.log("startPlayInAutoPlay Trying to Autoplay video"),
        xv.console.log("startPlayInAutoPlay --- Trying to Autoplay video", "Player"),
        this.bAutoPlayStarted = !0;
        var e = this
          , t = 0
          , i = function() {
            if (t++,
            console.log("startPlayInAutoPlay --- Starting to play video", t),
            t > 10)
                return void console.log("startPlayInAutoPlay --- Max tries reached. Unable to start video in AutoPlay, aborting");
            if (xv.disclaimer && xv.disclaimer.bDisclaimerTriggered)
                return void console.log("startPlayInAutoPlay --- Disclaimer has been displayed, no autoplay");
            if (xv.disclaimer && xv.disclaimer.bCookieBannerTriggered)
                return void console.log("startPlayInAutoPlay --- Cookie banner has been displayed, no autoplay");
            if (e.bPlayClicked)
                return void console.log("startPlayInAutoPlay --- Play already clicked, aborting");
            if (!e.video.paused)
                return void console.log("startPlayInAutoPlay --- Video already started, aborting");
            for (var s in e.oVideoAds)
                if (e.oVideoAds[s].bLoading)
                    return console.log('startPlayInAutoPlay --- Video ads "' + s + '" is loading, waiting'),
                    void setTimeout(i, 200);
            var r = e.isAutoplayAvailable();
            if (void 0 === r)
                return console.log("startPlayInAutoPlay --- Promise not available, aborting"),
                void xv.console.log("startPlayInAutoPlay --- Promise not available, aborting", "Player");
            r.then(function(t) {
                if (!t)
                    return console.log("startPlayInAutoPlay --- AutoPlay not available, aborting"),
                    void xv.console.log("startPlayInAutoPlay --- AutoPlay not available, aborting", "Player");
                xv.console.log("startPlayInAutoPlay - Starting playing video auto play", "Player"),
                e.playbtClick(),
                e.showPause()
            })["catch"](function(e) {
                console.log("startPlayInAutoPlay --- Error", e),
                xv.console.log("startPlayInAutoPlay --- Error", "Player")
            })
        };
        i()
    },
    checkVideoAds: function() {
        this.enableVideoPreRollAds(),
        this.loadVideoPreRollAds()
    },
    checkAdBlock: function() {
        if (this.adblock_checked)
            return this.has_adblocker;
        this.adblock_checked = !0;
        var e = document.createElement("div");
        if (e.className = "remove-ads",
        e.innerHTML = "_",
        document.body.appendChild(e),
        0 === e.clientHeight && (this.has_adblocker = !0),
        document.body.removeChild(e),
        this.has_adblocker)
            return this.has_adblocker;
        if (this.is_embed)
            return this.has_adblocker;
        var t = document.getElementById("video-right");
        if (t) {
            t.style.visibility = "hidden",
            t.style.position = "fixed",
            t.style.display = "block";
            "none" === window.getComputedStyle(t).display && (this.has_adblocker = !0),
            t.style.display = "",
            t.style.position = "",
            t.style.visibility = ""
        } else
            this.has_adblocker = !0;
        return this.has_adblocker
    },
    enableVideoPreRollAds: function() {
        this.oVideoAds[VIDEO_AD_TYPE.PREROLL].bEnabled = !0
    },
    enableVideoPostRollAds: function() {
        this.oVideoAds[VIDEO_AD_TYPE.POSTROLL].bEnabled = !0
    },
    _checkVideoAdsCommon: function(e) {
        return "undefined" == typeof this.oVideoAds[e] ? (console.error("_checkVideoAdsCommon --- wrong type :", e),
        !1) : this.oVideoAds[e].bEnabled ? "object" != typeof window.xv || "object" != typeof window.xv.conf || "object" != typeof window.xv.conf.dyn || "object" != typeof window.xv.conf.dyn.ads ? (console.log("_checkVideoAdsCommon --- no ads conf"),
        !1) : this.disableVideoAds ? (console.log("_checkVideoAdsCommon --- VideoAds are disabled"),
        !1) : window.xv && window.xv.sfw && VIDEO_AD_SFW_ENABLED[e] && !0 !== window.xv.sfw[VIDEO_AD_SFW_ENABLED[e]] ? (console.log('_checkVideoAdsCommon --- SFW mode, no video "' + e + '" ads'),
        !1) : this.use_browser_controls && !this.is_new_iphone ? (console.log("_checkVideoAdsCommon --- VideoAds not compatible with browser control"),
        !1) : this.bIsFakePlayerDisplayed || this.is_flashplayer_displayed ? (console.log("_checkVideoAdsCommon --- VideoAds not compatible with fake player"),
        !1) : (console.log("_checkVideoAdsCommon --- VideoAds can be displayed"),
        !0) : (console.log("_checkVideoAdsCommon --- VideoAds disabled for", e),
        !1)
    },
    loadVideoPreRollAds: function() {
        if (console.log("loadVideoPreRollAds"),
        this._checkVideoAdsCommon(VIDEO_AD_TYPE.PREROLL)) {
            if (-1 === this.nbView_getNbView())
                return void console.log("loadVideoPreRollAds --- Video ads PreRoll already viewed");
            var e = this;
            if (xv.disclaimer && (xv.disclaimer.bIsOpen || xv.disclaimer.bCookieBannerTriggered))
                return console.log("loadVideoPreRollAds --- Waiting until disclaimer is closed"),
                void setTimeout(function() {
                    e.loadVideoPreRollAds()
                }, 100);
            this.oVideoAds[VIDEO_AD_TYPE.PREROLL].bLoading = !0,
            this.oVideoAds[VIDEO_AD_TYPE.PREROLL].bInitialized = !1;
            var t = function() {
                e.oVideoAds[VIDEO_AD_TYPE.PREROLL].bInitialized || (e.oVideoAds[VIDEO_AD_TYPE.PREROLL].bInitialized = !0,
                e.oVideoAds[VIDEO_AD_TYPE.PREROLL].bLoaded = !1,
                e.oVideoAds[VIDEO_AD_TYPE.PREROLL].bWontBeLoaded = !1,
                e.callForVideoAds(VIDEO_AD_TYPE.PREROLL, function() {
                    e.oVideoAds[VIDEO_AD_TYPE.PREROLL].bLoading ? console.log("loadVideoPreRollAds RESOLVE called but still loading") : (console.log("loadVideoPreRollAds RESOLVE => bLoaded"),
                    e.oVideoAds[VIDEO_AD_TYPE.PREROLL].bLoaded = !0,
                    e.oVideoAds[VIDEO_AD_TYPE.PREROLL].bWontBeLoaded = !1)
                }, function() {
                    if (e.oVideoAds[VIDEO_AD_TYPE.PREROLL].bLoading)
                        console.log("loadVideoPreRollAds CATCH called but still loading");
                    else {
                        if (e.oVideoAds[VIDEO_AD_TYPE.PREROLL].bLoaded)
                            return void console.log("loadVideoPreRollAds CATCH => already bLoaded");
                        console.log("loadVideoPreRollAds CATCH => bWontBeLoaded"),
                        e.oVideoAds[VIDEO_AD_TYPE.PREROLL].bWontBeLoaded = !0
                    }
                }))
            };
            addEventListener("DOMContentLoaded", t),
            this.interval = setInterval(function() {
                try {
                    if (e.oVideoAds[VIDEO_AD_TYPE.PREROLL].bInitialized)
                        return console.log("readyState --- init already done"),
                        void (e.interval && clearInterval(e.interval));
                    "complete" !== document.readyState && "interactive" !== document.readyState || (clearInterval(e.interval),
                    console.log("readyState --- init"),
                    t())
                } catch (i) {
                    console.error("readyState --- Error", i)
                }
            }, 50)
        }
    },
    loadVideoPostRollAds: function(e, t) {
        if (console.log("loadVideoPostRollAds"),
        !this._checkVideoAdsCommon(VIDEO_AD_TYPE.POSTROLL))
            return void ("function" == typeof t && t());
        this.oVideoAds[VIDEO_AD_TYPE.POSTROLL].bLoading = !0,
        this.oVideoAds[VIDEO_AD_TYPE.POSTROLL].bLoaded = !1,
        this.oVideoAds[VIDEO_AD_TYPE.POSTROLL].bWontBeLoaded = !1;
        var i = this;
        this.callForVideoAds(VIDEO_AD_TYPE.POSTROLL, function() {
            console.log("loadVideoPostRollAds RESOLVE => bLoaded"),
            i.oVideoAds[VIDEO_AD_TYPE.POSTROLL].bLoading ? console.log("loadVideoPostRollAds RESOLVE called but still loading") : (i.oVideoAds[VIDEO_AD_TYPE.POSTROLL].bLoaded = !0,
            i.oVideoAds[VIDEO_AD_TYPE.POSTROLL].bWontBeLoaded = !1,
            "function" == typeof e && e())
        }, function() {
            if (i.oVideoAds[VIDEO_AD_TYPE.POSTROLL].bLoading)
                console.log("loadVideoPostRollAds CATCH called but still loading");
            else {
                if (i.oVideoAds[VIDEO_AD_TYPE.POSTROLL].bLoaded)
                    return void console.log("loadVideoPostRollAds CATCH => already bLoaded");
                console.log("loadVideoPostRollAds CATCH => bWontBeLoaded"),
                i.oVideoAds[VIDEO_AD_TYPE.POSTROLL].bWontBeLoaded = !0,
                "function" == typeof t && t()
            }
        })
    },
    callForVideoAds: function(e, t, i) {
        var s = this;
        this.adblocker_detected = !1,
        this.checkAdBlock() && (this.adblocker_detected = !0,
        console.log("callForVideoAds --- Adblock detected")),
        console.log("callForVideoAds --- Trying to load exoclick videos ads");
        var r = "";
        "default" === xv.conf.sitename ? r = "exoxvideostargetting," : "xnxx" === xv.conf.sitename && (r = "exoxnxxtargetting,");
        var o = new player.videoads("","","","Learn more","Learn more",!1);
        o.setHttpProtocol(this.http_protocol),
        o.setStaticPath(this.static_path),
        o.setI18n(this.i18n),
        o.setDesktopView(this.desktop_view),
        o.setAutoplay(this.useAutoplay()),
        o.showPreferencesWarningTooltip = function(e, t) {
            return s.showPreferencesWarningTooltip(e, t)
        }
        ,
        o.areCookiesFeatureDisabled = function() {
            return s.areCookiesFeatureDisabled()
        }
        ,
        o.addPlayingEventListener(function() {
            if (s.isAirPlayActive()) {
                var e = o.getVideo();
                e && e.muted && (console.log("AirPlay --- VIDEO ADS --- clicked => unmute and mute HTML5 ad video to force sound on AirPlay"),
                s.unmute(!1),
                s.mute(!1))
            }
        }),
        this.oVideoAds[e].oAd = o;
        var n = "s.orbsrv.com";
        this.adblocker_detected && "string" == typeof xv.conf.dyn.exoclick_domain && (n = xv.conf.dyn.exoclick_domain);
        var a = "undefined" != typeof xv.conf.dyn.ads.exo_tracker ? xv.conf.dyn.ads.exo_tracker : 0
          , l = "undefined" != typeof xv.conf.dyn.ads.exo_tracker_sub2 ? xv.conf.dyn.ads.exo_tracker_sub2 : 0
          , d = "undefined" != typeof xv.conf.dyn.ads.exo_tracker_sub3 ? xv.conf.dyn.ads.exo_tracker_sub3 : 0
          , u = e === VIDEO_AD_TYPE.POSTROLL ? s.getPostRollExoSub4Tracker() : s.getPreRollExoSub4Tracker()
          , h = {
            idzone: VIDEO_AD_ZONE_ID[e] ? VIDEO_AD_ZONE_ID[e] : VIDEO_AD_ZONE_ID[VIDEO_AD_TYPE.PREROLL],
            sub: a,
            sub2: l,
            sub3: d,
            user_agent: navigator.userAgent,
            tags: this.getPageTags(),
            lan: navigator.language
        }
          , c = xv.sda.getBlockedAdTypes();
        c && (h.block_ad_types = c);
        var f = xv.sda.getExoTrackerExAv();
        if (f && (h.ex_av = f),
        u && (h.ex_xvsub4 = u),
        this.adblocker_detected && (h.block = "1"),
        h.gdpr = this.gdprApplies() ? "1" : "0",
        this.gdprApplies()) {
            var p = this.getGdprConsent();
            p && (h.gdpr_consent = p)
        }
        for (var v = "https://" + n + "/v1/vast.php?", g = Object.keys(h), y = 0; y < g.length; y++) {
            var m = g[y]
              , _ = encodeURIComponent(h[m]);
            "tags" === m && r && (_ = r + _),
            v += m + "=" + _,
            y < g.length - 1 && (v += "&")
        }
        this.makeVastCall(v, e, t, i)
    },
    makeVastCall: function(e, t, i, s) {
        var r = this
          , o = createRequestObject();
        o.open("GET", e, !0),
        o.withCredentials = !0,
        o.onreadystatechange = function() {
            if (4 === o.readyState) {
                var n = r.oVideoAds[t].oAd;
                if (200 !== o.status)
                    return console.log("makeVastCall --- VAST Call failed (" + o.statusText + ") for url " + e),
                    n.makeErrorCallBack(100, e, "Bad response status '" + o.statusText + "', response '" + o.response.substring(0, 40) + "'"),
                    r.oVideoAds[t].oAd = null,
                    r.oVideoAds[t].bLoading = !1,
                    void ("function" == typeof s && s());
                console.log("makeVastCall - Call done");
                try {
                    var a = !0
                      , l = o.responseXML
                      , d = l.getElementsByTagName("InLine");
                    if (void 0 === d || 1 !== d.length) {
                        if (void 0 === (d = l.getElementsByTagName("Wrapper")) || 1 !== d.length)
                            return console.log("makeVastCall: Node InLine or Wrapper not found - No ads to display"),
                            n.makeErrorCallBack(101, e, "Vast XML Node InLine or Wrapper not found"),
                            r.oVideoAds[t].oAd = null,
                            r.oVideoAds[t].bLoading = !1,
                            void ("function" == typeof s && s());
                        a = !1
                    }
                    for (var u = d[0].children, h = 0; h < u.length; h++) {
                        var c = u[h];
                        if ("VASTAdTagURI" === c.nodeName && (console.log("makeVastCall - VASTAdTagURI", c.textContent),
                        r.makeVastCall(c.textContent, t, i, s)),
                        "Impression" === c.nodeName && (console.log("makeVastCall - add Impression callback", c.textContent),
                        n.addVastViewCallback(c.textContent)),
                        "Error" === c.nodeName && (console.log("makeVastCall - add Error callback", c.textContent),
                        n.addVastErrorCallback(c.textContent)),
                        "Creatives" === c.nodeName) {
                            if (a) {
                                var f = c.getElementsByTagName("MediaFile");
                                if (0 === f.length)
                                    return console.log("makeVastCall - No media file to display"),
                                    n.makeErrorCallBack(101, e, "VAST No media file to display"),
                                    r.oVideoAds[t].oAd = null,
                                    r.oVideoAds[t].bLoading = !1,
                                    void ("function" == typeof s && s());
                                var p = Math.floor(Math.random() * f.length)
                                  , v = f[p].textContent;
                                console.log("makeVastCall - Vast Video", p, "url", v),
                                n.setVideoUrl(v),
                                r.oVideoAds[t].bLoading = !1
                            }
                            for (var g = c.getElementsByTagName("Tracking"), y = 0; y < g.length; y++) {
                                var m = g[y]
                                  , _ = m.getAttribute("event");
                                if ("start" === _ && (console.log("Vast event start", m.textContent),
                                n.addVastStartStatsCallback(m.textContent)),
                                "firstQuartile" === _ && (console.log("Vast event firstQuartile", m.textContent),
                                n.addVastFirstQuartileStatsCallback(m.textContent)),
                                "midpoint" === _ && (console.log("Vast event midpoint", m.textContent),
                                n.addVastMidpointStatsCallback(m.textContent)),
                                "thirdQuartile" === _ && (console.log("Vast event thirdQuartile", m.textContent),
                                n.addVastThirdQuartileStatsCallback(m.textContent)),
                                "complete" === _ && (console.log("Vast event complete", m.textContent),
                                n.addVastCompleteStatsCallback(m.textContent)),
                                "pause" === _ && (console.log("Vast event pause", m.textContent),
                                n.addVastPauseStatsCallback(m.textContent)),
                                "fullscreen" === _ && (console.log("Vast event fullscreen", m.textContent),
                                n.addVastFullScreenStatsCallback(m.textContent)),
                                "mute" === _ && (console.log("Vast event mute", m.textContent),
                                n.addVastMuteStatsCallback(m.textContent)),
                                "skip" === _ && (console.log("Vast event skip", m.textContent),
                                n.addVastSkipStatsCallback(m.textContent)),
                                "progress" === _) {
                                    var b = m.getAttribute("offset");
                                    console.log("Vast event progress", b, "-", m.textContent),
                                    n.addVastProgressCallback(m.textContent, b)
                                }
                            }
                            if (a) {
                                var E = c.getElementsByTagName("ClickThrough");
                                if (0 === E.length)
                                    return console.log("makeVastCall - No click url"),
                                    n.makeErrorCallBack(101, url, "VAST No click url"),
                                    r.oVideoAds[t].oAd = null,
                                    r.oVideoAds[t].bLoading = !1,
                                    void ("function" == typeof s && s());
                                var p = Math.floor(Math.random() * E.length);
                                console.log("Vast click", p, "url", E[p].textContent),
                                n.setVastClickUrl(E[p].textContent)
                            }
                            for (var S = c.getElementsByTagName("ClickTracking"), y = 0; y < S.length; y++) {
                                var T = S[y];
                                console.log("Vast event click", T.textContent),
                                n.addVastClickTrackingCallback(T.textContent)
                            }
                        }
                        if ("Extensions" === c.nodeName) {
                            var w = c.getElementsByTagName("TitleCTA");
                            if (w.length) {
                                var P = w[0].getElementsByTagName("Link");
                                P.length && n.setTitle(P[0].textContent);
                                var C = w[0].getElementsByTagName("MobileText");
                                !r.desktop_view && C.length && n.setTitle(C[0].textContent);
                                var A = w[0].getElementsByTagName("PCText");
                                r.desktop_view && A.length && n.setTitle(A[0].textContent)
                            }
                            var k = c.getElementsByTagName("DSA");
                            if (k.length) {
                                var L = k[0].getElementsByTagName("Behalf");
                                L.length && n.setDSABehaulf(L[0].textContent);
                                var D = k[0].getElementsByTagName("Paid");
                                D.length && n.setDSAPaid(D[0].textContent);
                                var R = k[0].getElementsByTagName("ClickThrough");
                                R.length && n.setDSAClickThrough(R[0].textContent)
                            }
                            var B = c.getElementsByTagName("DisplayUrl");
                            B.length && ("fulllivejasmin.com" !== B[0].textContent && "fullflirt4free.com" !== B[0].textContent && "fullclickenabled.com" !== B[0].textContent || n.setFullVideoClick(!0))
                        }
                    }
                    "function" == typeof i && i()
                } catch (x) {
                    console.log("makeVastCall - Parsing failed : " + x.message),
                    n.makeErrorCallBack(100, url, "VAST Parsing failed : " + x.message),
                    r.oVideoAds[t].oAd = null,
                    r.oVideoAds[t].bLoading = !1,
                    console.log("makeVastCall - ERROR", x),
                    "function" == typeof s && s()
                }
            }
        }
        ;
        try {
            o.send()
        } catch (n) {
            console.log("makeVastCall --- Call failed (2)"),
            r.oVideoAds[t].oAd.makeErrorCallBack(100, url, "VAST Call failed exception : " + n.message),
            "function" == typeof s && s()
        }
    },
    displayPreRollVideoAd: function(e) {
        var t = this;
        if (!this.oVideoAds[VIDEO_AD_TYPE.PREROLL].bLoaded)
            return xv.console.log("displayPreRollVideoAd: not loaded --- RETURN", "Player"),
            !1;
        if (this.oVideoAds[VIDEO_AD_TYPE.PREROLL].bDisplayed)
            return xv.console.log("displayPreRollVideoAd: already displayed --- RETURN", "Player"),
            !1;
        this.oVideoAds[VIDEO_AD_TYPE.PREROLL].bDisplayed = !0,
        xv.console.log("displayPreRollVideoAd: Checking video ads", "Player"),
        this.nbView_increment();
        var i = this.nbView_getNbView()
          , s = (PREROLL_EVERY_NTH_VIDEO - 1 + i) % PREROLL_EVERY_NTH_VIDEO;
        if (0 !== s)
            return xv.console.log("displayPreRollVideoAd: No ad yet, in " + (PREROLL_EVERY_NTH_VIDEO - s) + " video(s)", "Player"),
            this.oVideoAds[VIDEO_AD_TYPE.PREROLL].oAd = null,
            !1;
        var r = this.oVideoAds[VIDEO_AD_TYPE.PREROLL].oAd;
        return r ? (r.onFullscreen = function() {
            t.fullscreen()
        }
        ,
        r.onClose = function() {
            try {
                t.$videoDiv.removeChild(t.$videoAdsDiv)
            } catch (i) {
                console.error("displayPreRollVideoAd: Error removing video ads div", i)
            }
            xv.console.log("displayPreRollVideoAd: onClose", "Player"),
            t.oVideoAds[VIDEO_AD_TYPE.PREROLL].oAd = null,
            t.use_browser_controls && t.showVideoControls(),
            t.play(),
            "function" == typeof e && e()
        }
        ,
        this.video.muted || (console.log("displayPreRollVideoAd: Video not muted. Starting with sound"),
        r.startWithSound(),
        r.setStartVolume(this.video.volume)),
        r.setMuteCallback(function(e) {
            t.loadPreference(),
            e ? t.mute(!1) : t.unmute(!1),
            t.savePreference(!0)
        }),
        (!window.xv || !window.xv.sfw || !0 === window.xv.sfw.prerollEnabled) && (this.$videoAdsDiv = r.getAdDiv(),
        !!this.$videoAdsDiv && (this.$videoDiv.appendChild(this.$videoAdsDiv),
        r.redraw(),
        xv.console.log("displayPreRollVideoAd: Starting the video ad", "Player"),
        i >= PREROLL_MAX_VIEWS - 1 && this.nbView_setviewed(),
        !0))) : (xv.console.log("displayPreRollVideoAd: No oVideoAd to display", "Player"),
        !1)
    },
    displayPostRollVideoAds: function(e, t) {
        var i = this;
        if (!this.oVideoAds[VIDEO_AD_TYPE.POSTROLL].bLoaded)
            return !1 !== t ? (console.log("displayPostRollVideoAds --- VideoAd not loaded : try load, then display again"),
            void this.loadVideoPostRollAds(function() {
                console.log("displayPostRollVideoAds --- try load RESOLVE : then display again => RESOLVE"),
                i.displayPostRollVideoAds(e, !1)
            }, function() {
                "function" == typeof e && e()
            })) : (xv.console.log("displayPostRollVideoAds: VideoAd not loaded", "Player"),
            void ("function" == typeof e && e()));
        if (this.oVideoAds[VIDEO_AD_TYPE.POSTROLL].bDisplayed)
            return xv.console.log("displayPostRollVideoAds: VideoAd already displayed", "Player"),
            void ("function" == typeof e && e());
        this.oVideoAds[VIDEO_AD_TYPE.POSTROLL].bDisplayed = !0;
        var s = this.oVideoAds[VIDEO_AD_TYPE.POSTROLL].oAd;
        return s ? (s.onFullscreen = function() {
            i.fullscreen()
        }
        ,
        s.onClose = function() {
            try {
                i.$videoDiv.removeChild(i.$videoAdsDiv)
            } catch (t) {
                console.error("displayPostRollVideoAds: Error removing video ads div", t)
            }
            i.oVideoAds[VIDEO_AD_TYPE.POSTROLL].oAd = null,
            "function" == typeof e && e()
        }
        ,
        this.video.muted || (console.log("displayPostRollVideoAds: VideoAd not muted. Starting with sound"),
        s.startWithSound(),
        s.setStartVolume(this.video.volume)),
        s.setMuteCallback(function(e) {
            i.loadPreference(),
            e ? i.mute(!1) : i.unmute(!1),
            i.savePreference(!0)
        }),
        window.xv && window.xv.sfw && !0 !== window.xv.sfw.postrollEnabled ? (console.log("displayPostRollVideoAds: SFW not Enabled"),
        void ("function" == typeof e && e())) : (this.$videoAdsDiv = s.getAdDiv(),
        this.$videoAdsDiv ? (this.$videoDiv.appendChild(this.$videoAdsDiv),
        xv.console.log("displayPostRollVideoAds: Starting the VideoAd", "Player"),
        void s.redraw()) : (console.log("displayPostRollVideoAds: no Video ad DIV"),
        void ("function" == typeof e && e())))) : (xv.console.log("displayPostRollVideoAds: No VideoAd to display", "Player"),
        void ("function" == typeof e && e()))
    },
    getVideoPostRollAdSub4: function() {
        return {
            s4: "999",
            sE4: "998"
        }
    },
    getPreRollExoSub4Tracker: function() {
        var e = this.nbView_getNbView();
        this.oVideoAds[VIDEO_AD_TYPE.PREROLL].bDisplayed || e++;
        var t = this.is_embed ? 100 : 10
          , i = Math.ceil(e / PREROLL_EVERY_NTH_VIDEO)
          , s = t + i;
        return xv.console.log("displayPreRollVideoAd: Current ad is the " + i + "th, sub id " + s, "Player"),
        s
    },
    getPostRollExoSub4Tracker: function() {
        var e = this.getVideoPostRollAdSub4();
        return console.log("get postroll sub4:", this.is_embed ? e.sE4 : e.s4),
        this.is_embed ? e.sE4 : e.s4
    },
    nbView_getNbView: function() {
        var e = "player_nb_views";
        if (!this.storageAvailable()) {
            var t = xv.cookies.getSafe(e);
            return t ? parseInt(t) : 0
        }
        var i = this.getLocalStorage(e);
        try {
            var s = i;
            if ("object" != typeof i && (s = JSON.parse(i)),
            !s)
                return 0;
            if (!s.nb)
                return 0;
            if (s.expire < (new Date).getTime() / 1e3)
                return console.log("Nb Player view expired"),
                localStorage.removeItem(e),
                0
        } catch (r) {
            return console.log("Duration send: Unable to unjson " + e, i),
            0
        }
        return parseInt(s.nb)
    },
    nbView_increment: function() {
        var e = this.nbView_getNbView();
        if (-1 === e)
            return void console.log("nbView_increment: Already displayed", e);
        if (e++,
        !this.storageAvailable())
            return void xv.cookies.setLocalSafe("player_nb_views", e, 576e5, "/");
        var t = {
            nb: e,
            expire: (new Date).getTime() / 1e3 + 57600
        };
        this.setLocalStorage("player_nb_views", t)
    },
    nbView_setviewed: function() {
        if (!this.storageAvailable())
            return void xv.cookies.setLocalSafe("player_nb_views", "-1", 576e5, "/");
        var e = {
            nb: -1,
            expire: (new Date).getTime() / 1e3 + 57600
        };
        this.setLocalStorage("player_nb_views", e)
    },
    xmlGetNodes: function(e, t) {
        var s = []
          , r = e.childNodes;
        for (i = 0; i < r.length; i++)
            r[i].nodeName === t && s.push(r[i]);
        return 0 !== s.length && s
    },
    initHls: function() {
        if ("" === this.sUrlHls)
            return this.use_hlsjs = !1,
            !1;
        var e = this;
        console.log("Init HLS"),
        this.use_hlsjs = !0;
        var t = 25e6;
        this.desktop_view && (t = 5e7);
        var i = {
            debug: !1,
            autoStartLoad: !0,
            capLevelToPlayerSize: !1,
            maxBufferLength: 30,
            maxMaxBufferLength: 30,
            maxBufferSize: t,
            maxBufferHole: .3,
            maxSeekHole: 3,
            liveSyncDurationCount: 3,
            liveMaxLatencyDurationCount: 10,
            enableWorker: !0,
            enableSoftwareAES: !0,
            manifestLoadingTimeOut: 1e4,
            manifestLoadingMaxRetry: 3,
            manifestLoadingRetryDelay: 500,
            levelLoadingTimeOut: 1e4,
            levelLoadingMaxRetry: 3,
            levelLoadingRetryDelay: 500,
            fragLoadingTimeOut: 3e4,
            fragLoadingMaxRetry: 3,
            fragLoadingRetryDelay: 500,
            fpsDroppedMonitoringPeriod: 5e3,
            fpsDroppedMonitoringThreshold: .2,
            appendErrorMaxRetry: 3,
            abrBandWidthFactor: .6,
            abrBandWidthUpFactor: .5
        };
        return this.hlsobj && this.hlsobj.destroy(),
        this.hlsobj = new Hls(i),
        this.hlsobj.attachMedia(this.video),
        this.hlsjsLevelParsed = !1,
        this.hlsLevelAutoForced = !1,
        this.hlsobj.on(Hls.Events.MEDIA_ATTACHED, function() {
            console.log("Hls.Events.MEDIA_ATTACHED")
        }),
        this.hlsobj.on(Hls.Events.MEDIA_DETACHED, function() {
            console.log("Hls.Events.MEDIA_DETACHED")
        }),
        this.hlsobj.on(Hls.Events.FRAG_PARSING_INIT_SEGMENT, function(t, i) {
            console.log("Hls.Events.FRAG_PARSING_INIT_SEGMENT " + t + " id = " + i.id + " level = " + i.level),
            e.redrawParamers()
        }),
        this.hlsobj.on(Hls.Events.FRAG_PARSING_METADATA, function(e, t) {
            console.log("Hls.Events.FRAG_PARSING_METADATA", e, t)
        }),
        this.hlsobj.on(Hls.Events.LEVEL_SWITCH, function(t, i) {
            console.log("Hls.Events.LEVEL_SWITCH", t, i.level),
            e.hlsobj && e.hlsobj.levels && "number" == typeof i.level && i.level >= 0 && (e.hlsQualityHelpers.updateQualityLabel(e, i.level, e.hlsobj.levels),
            e.hlsQualityHelpers.updateHdBadge(e, e.hlsQualityHelpers.parseLevelHeight(e.hlsobj.levels[i.level])))
        }),
        this.hlsobj.on(Hls.Events.MANIFEST_LOADING, function(e, t) {
            console.log("Hls.Events.MANIFEST_LOADING", e, t.url)
        }),
        this.hlsobj.on(Hls.Events.MANIFEST_LOADED, function(t, i) {
            if (console.log("Hls.Events.MANIFEST_LOADED " + t + " nb levels " + e.hlsobj.levels.length),
            e.hlsLevelAutoForced)
                return void e.redrawParamers();
            e.hlsLevelAutoForced = !0;
            var s = e.hlsQualityHelpers.applyPreferenceIfAny(e)
              , r = s;
            -1 === s && (r = e.hlsQualityHelpers.applyAutoDefaultStartLevel(e)),
            e.hlsQualityHelpers.syncQualityUiNow(e, r, e.hlsobj.levels)
        }),
        this.hlsobj.on(Hls.Events.FRAG_LOAD_PROGRESS, function(t, i) {
            if ("object" != typeof i.stats || "undefined" == typeof i.stats.loaded)
                return void console.log("Not an XMLProgress event");
            if (!e.fragStatsSended) {
                var s = i.frag.level + "-" + i.frag.sn;
                if ("undefined" == typeof e.fragStats[s]) {
                    var r = [];
                    r[0] = (new Date).getTime(),
                    r[1] = i.stats.loaded,
                    r[2] = -1,
                    e.fragStats[s] = r
                } else if (i.stats.total === i.stats.loaded && -1 === e.fragStats[s][2]) {
                    var o = ((new Date).getTime() - e.fragStats[s][0]) / 1e3;
                    if (o > 0) {
                        var n = (i.stats.total - e.fragStats[s][1]) / o / 1024 * 8;
                        e.fragStats[s][2] = n,
                        e.check_speed_stats()
                    }
                }
            }
            var a = 0;
            i.stats.total > 0 && (a = 100 / i.stats.total * i.stats.loaded),
            (a < 5 || a > 95) && console.log("Progress " + i.frag.url + " " + i.stats.loaded + " / " + i.stats.total + " : " + a.toFixed(2) + " %"),
            i.stats.total === i.stats.loaded && (e.total_video_transfer += i.stats.total),
            e.updateBuffering(a)
        }),
        this.hlsobj.on(Hls.Events.ERROR, function(t, i) {
            switch (console.log("Hls.Events.ERROR", t, i.type, i.details, i.fatal),
            xv.console.log("Hls.Events.ERROR " + i.type + " " + i.url, "Player"),
            e.hlsNbError++,
            e.hlsNbError > 20 && e.send_debug_event("many_errors"),
            i.type) {
            case Hls.ErrorTypes.NETWORK_ERROR:
                i.fatal && e.recoverError();
                break;
            case Hls.ErrorTypes.MEDIA_ERROR:
                i.details === Hls.ErrorDetails.BUFFER_NUDGE_ON_STALL ? (xv.console.log("Error BUFFER_NUDGE_ON_STALL (" + (i.fatal ? "fatal" : "not fatal") + ")", "Player"),
                e.hlsobj.recoverMediaError()) : i.fatal && e.recoverError();
                break;
            default:
                i.fatal && e.recoverError()
            }
            e.redrawParamers()
        }),
        this.hlsobj.on(Hls.Events.MANIFEST_PARSED, function(t, i) {
            if (console.log("Hls.Events.MANIFEST_PARSED", t, i),
            "undefined" == typeof i.levels)
                return console.log("Hls levels do not exist"),
                void xv.console.log("Hls levels do not exist", "Player");
            e.hlsjsLevelParsed || (e.hlsjsLevelParsed = !0,
            xv.console.log("Hls.Events.MANIFEST_PARSED with " + i.levels.length + " qualities", "Player"),
            e.drawQualityParameters(i.levels))
        }),
        this.hlsobj.on(Hls.Events.LEVEL_LOADED, function(e, t) {
            console.log("Hls.Events.LEVEL_LOADED", e, t.level)
        }),
        this.hlsobj.on(Hls.Events.FRAG_BUFFERED, function(t, i) {
            console.log("Hls.Events.FRAG_BUFFERED " + t + " url = " + i.frag.url),
            e.redrawParamers()
        }),
        this.hlsobj.on(Hls.Events.FRAG_CHANGED, function(t, i) {
            console.log("Hls.Events.FRAG_CHANGED", t, "Level", i.frag.level, "Url", i.frag.url),
            e.hlsobj && e.hlsobj.levels && i.frag.level >= 0 && (e.hlsQualityHelpers.updateQualityLabel(e, i.frag.level, e.hlsobj.levels),
            e.hlsQualityHelpers.updateHdBadge(e, e.hlsQualityHelpers.parseLevelHeight(e.hlsobj.levels[i.frag.level]))),
            e.redrawParamers(),
            e.updateBtVisibity()
        }),
        this.hlsobj.on(Hls.Events.FRAG_LOADING, function(t, i) {
            console.log("Hls.Events.FRAG_LOADING", t),
            e.updateBuffering(0)
        }),
        this.hlsobj.loadSource(this.sUrlHls),
        this.hlsobj.startLevel = 0,
        !0
    },
    hlsQualityHelpers: {
        getUiSelectedLevelIndex: function(e, t) {
            return e ? "number" == typeof e.forcequality && e.forcequality >= 0 ? e.forcequality : e.forcequality === HLS_FORCED_RESOLUTION_PARAM.max.key ? t && t.length ? t.length - 1 : -1 : e.forcequality === HLS_FORCED_RESOLUTION_PARAM.sd.key ? this.find360IndexOrAbove(t || []) : this.getBestKnownLevelIndex(e) : -1
        },
        parseLevelHeight: function(e) {
            if (e && "number" == typeof e.height && e.height)
                return e.height;
            if (e && "string" == typeof e.name) {
                var t = e.name.match(/(\d{3,4})\s*p/i);
                if (t && t[1])
                    return parseInt(t[1], 10)
            }
            return 0
        },
        markQualitySwitchBuffering: function(e) {
            e.bPlayClicked && !e.video.ended && (e.setBuffering(!0),
            e.updateBtVisibity(),
            e.redraw())
        },
        findStrict360Index: function(e) {
            for (var t = 0; t < e.length; t++)
                if (360 === this.parseLevelHeight(e[t]))
                    return t;
            return -1
        },
        find360IndexOrAbove: function(e) {
            for (var t = -1, i = Infinity, s = 0; s < e.length; s++) {
                var r = this.parseLevelHeight(e[s]);
                if (360 === r)
                    return s;
                r > 360 && r < i && (t = s,
                i = r)
            }
            return t
        },
        setAutoMode: function(e) {
            e.hlsobj.autoLevelCapping = -1,
            e.hlsobj.nextLevel = -1
        },
        setFixedLevel: function(e, t) {
            e.hlsobj.autoLevelCapping = -1,
            e.hlsobj.nextLevel = t
        },
        normalizePersistedPreference: function(e, t) {
            return "undefined" == typeof HLS_FORCED_RESOLUTION_PARAM[t] ? (e.forcequality = HLS_FORCED_RESOLUTION_PARAM.auto.key,
            e.savePreference(),
            HLS_FORCED_RESOLUTION_PARAM.auto.key) : t
        },
        applyPreferenceIfAny: function(e) {
            e.loadPreference();
            var t = this.normalizePersistedPreference(e, e.forcequality);
            if (t === HLS_FORCED_RESOLUTION_PARAM.max.key) {
                var i = e.hlsobj.levels.length - 1;
                return this.setFixedLevel(e, i),
                e.hlsobj.startLevel = i,
                e.hlsobj.currentLevel = i,
                i
            }
            if (t === HLS_FORCED_RESOLUTION_PARAM.sd.key) {
                var s = this.find360IndexOrAbove(e.hlsobj.levels);
                return -1 === s ? -1 : (this.setFixedLevel(e, s),
                e.hlsobj.startLevel = s,
                e.hlsobj.currentLevel = s,
                s)
            }
            return -1
        },
        applyAutoDefaultStartLevel: function(e) {
            if (!e.desktop_view) {
                var t = 2;
                e.hlsobj.levels.length < 3 && (t = e.hlsobj.levels.length - 1),
                e.hlsobj.autoLevelCapping = t
            }
            var i = 0
              , s = e.get_networkspeed();
            if (s) {
                for (var r = 0; r < e.hlsobj.levels.length; r++)
                    1.8 * e.hlsobj.levels[r].bitrate / 1e3 < s && (i = r);
                console.log("Best level", i, "for speed", s, "Kb/s"),
                xv.console.log("Hls.Events.LEVEL_LOADED Best level " + i + " for speed " + s + " Kb/s", "Player")
            } else
                i = 1,
                console.log("No network speed history, using", i);
            return e.hlsobj.startLevel = i,
            e.hlsobj.nextLoadLevel = i,
            e.hlsobj.currentLevel = -1,
            i
        },
        updateHdBadge: function(e, t) {
            e.$parameterBtHd && (t >= 2160 ? (e.$parameterBtHd.innerHTML = "4K",
            e.$parameterBtHd.style.display = "inline-block") : t >= 720 ? (e.$parameterBtHd.innerHTML = "HD",
            e.$parameterBtHd.style.display = "inline-block") : (e.$parameterBtHd.innerHTML = "",
            e.$parameterBtHd.style.display = "none"))
        },
        updateQualityLabel: function(e, t, i) {
            var s = i[t]
              , r = s && "string" == typeof s.name && s.name ? s.name : function() {
                var e = s ? this.parseLevelHeight(s) : 0;
                return e ? String(e) : ""
            }
            .call(this);
            if ("number" == typeof e.forcequality)
                return void (e.sQualitiesMenuButtonLabel = r);
            var o = e.i18n.__(HLS_FORCED_RESOLUTION_PARAM.auto.label_key);
            e.forcequality === HLS_FORCED_RESOLUTION_PARAM.max.key ? o = e.i18n.__(HLS_FORCED_RESOLUTION_PARAM.max.label_key) : e.forcequality === HLS_FORCED_RESOLUTION_PARAM.sd.key && (o = e.i18n.__(HLS_FORCED_RESOLUTION_PARAM.sd.label_key),
            -1 === this.findStrict360Index(e.hlsobj.levels) && (o = null)),
            e.sQualitiesMenuButtonLabel = r ? o ? o + " (" + r + ")" : r : o
        },
        getOrBuildAdvancedQualityItems: function(e) {
            return this.aAdvancedQualityItems || (this.aAdvancedQualityItems = this.buildAdvancedQualityItems(e.hlsobj.levels)),
            this.aAdvancedQualityItems
        },
        buildAdvancedQualityItems: function(e) {
            for (var t = {}, i = 0; i < e.length; i++) {
                var s = e[i]
                  , r = this.parseLevelHeight(s);
                if (!(r <= 0)) {
                    for (var o = null, n = 0; n < HLS_TARGET_RESOLUTIONS.length; n++)
                        if (r <= HLS_TARGET_RESOLUTIONS[n].height) {
                            o = HLS_TARGET_RESOLUTIONS[n];
                            break
                        }
                    if (o) {
                        var a = o.label
                          , l = {
                            label: a,
                            index: i,
                            height: o.height,
                            sourceHeight: r
                        };
                        if (t[a]) {
                            var d = t[a]
                              , u = e[d.index];
                            (l.sourceHeight > d.sourceHeight || l.sourceHeight === d.sourceHeight && s.bitrate > u.bitrate) && (t[a] = l)
                        } else
                            t[a] = l
                    }
                }
            }
            for (var h = [], c = 0; c < HLS_TARGET_RESOLUTIONS.length; c++)
                t[HLS_TARGET_RESOLUTIONS[c].label] && h.push(t[HLS_TARGET_RESOLUTIONS[c].label]);
            return h
        },
        getBestKnownLevelIndex: function(e) {
            if (!e.hlsobj)
                return -1;
            for (var t = ["currentLevel", "loadLevel", "nextLevel", "nextLoadLevel", "startLevel"], i = 0; i < t.length; i++) {
                var s = e.hlsobj[t[i]];
                if ("number" == typeof s && s >= 0)
                    return s
            }
            return -1
        },
        syncQualityUiNow: function(e, t, i) {
            var s = "number" == typeof t && t >= 0 ? t : this.getBestKnownLevelIndex(e);
            "number" == typeof s && s >= 0 && i && i[s] ? (this.updateQualityLabel(e, s, i),
            this.updateHdBadge(e, this.parseLevelHeight(i[s]))) : (this.updateQualityLabel(e, 0, []),
            this.updateHdBadge(e, 0)),
            e.redrawParamers()
        }
    },
    streamVideo: function() {
        this.pause(),
        this.drawnDownloadLinks(this.i18n.__("download.use_external_app"), this.sUrlHigh, this.sUrlLow)
    },
    drawnDownloadLinks: function(e, t, i) {
        var s = this.createElt("div", "pl-dl-box pl-msg-box");
        s.appendChild(this.createElt("h2", "", null, e));
        var r = !0;
        i || (i = t,
        t = "",
        r = !1);
        var o = this.createElt("div", "pl-dl-btns " + (r ? "two-btns" : "single-btn"));
        s.appendChild(o);
        var n = this.createElt("a", "low-qual", null, this.i18n.__("download.low_qual"));
        n.href = i,
        o.appendChild(n),
        r && (n = this.createElt("a", "high-qual", null, this.i18n.__("download.high_qual")),
        n.href = t,
        o.appendChild(n)),
        this.openMessageBox(),
        this.$messageTxtDiv.innerHTML = "",
        this.$messageTxtDiv.appendChild(s),
        this.showmessage = !0,
        this.updateBtVisibity(),
        this.redraw()
    },
    drawVideoEnded: function() {
        var e = this;
        this.displayPostRollVideoAds(function() {
            e._drawVideoEnded()
        })
    },
    _drawVideoEnded: function() {
        this.hasFullVideoUrlOrSheerSponsor() ? this.drawVideoEndedFullVideoUrl() : this.drawRelated()
    },
    hasFullVideoUrlOrSheerSponsor: function() {
        if ("boolean" === this.bHasVidEndedFullVidUrl)
            return this.bHasVidEndedFullVidUrl;
        this.bHasVidEndedFullVidUrl = !1,
        this.sVidEndedFullVidUrl = this.getFullVideoEndCtaUrl(),
        this.sVidEndedFullVidText = "";
        var e = '<span class="logo"><img src="' + this.static_path + 'img/skins/common/premium/purchase-form/premium-logo.png" alt="Premium" /></span>'
          , t = e;
        if ("default" === xv.conf.sitename ? (e = '<span class="logo"><img src="' + this.static_path + 'img/skins/default/ticket-red.svg" alt="RED" class="logo" /></span>',
        t = '<img src="' + this.static_path + 'img/skins/default/logo/xvideosred.white.svg" alt="XVideos RED" class="logo more-at" />') : "xnxx" === xv.conf.sitename && (e = '<span class="logo"><img src="' + this.static_path + 'img/skins/xnxx/gold/xnxx.gold.footer-logo.png" alt="XNXX" /> <span class="gold-plate">GOLD</span></span>',
        t = e),
        null !== this.sVidEndedFullVidUrl) {
            this.bHasVidEndedFullVidUrl = !0;
            var i = {
                "%strong%": "<strong>",
                "%strong_end%": "</strong>",
                "%site%": e,
                "%duration%": this.getFullVideoDuration()
            };
            if ("default" === xv.conf.sitename)
                this.sVidEndedFullVidText = '<span class="ticket"><span class="content">' + this.i18n.__("video.get_full_length_on", i) + "</span></span>";
            else {
                var s = this.getFullVideoThumb();
                s && s.length && (this.sVidEndedFullVidText = '<img class="thumb" src="' + s + '" alt="" />'),
                this.sVidEndedFullVidText += this.i18n.__("video.get_full_length_on", i)
            }
        } else
            xv.conf && xv.conf.dyn && xv.conf.dyn.isPixAllowed && !this.is_premium_site ? (this.sVidEndedFullVidUrl = xv.conf.dyn.pixPremiumUrl,
            this.sVidEndedFullVidText = this.i18n.__("video.sponsors.more_at") + t,
            this.bHasVidEndedFullVidUrl = !0,
            this.bEndedVidUrlMoreAt = !0) : (this.sVidEndedFullVidUrl = this.getSponsorSheerUrl('<img src="' + this.static_path + 'img/skins/common/sheer/logo.svg" alt="Sheer" class="sheer"/>'),
            null !== this.sVidEndedFullVidUrl && (this.bHasVidEndedFullVidUrl = !0));
        return this.bHasVidEndedFullVidUrl
    },
    getVideoEndedFullVideoUrl: function() {
        return this.hasFullVideoUrlOrSheerSponsor() ? this.sVidEndedFullVidUrl : ""
    },
    getVideoEndedFullVideoText: function() {
        return this.hasFullVideoUrlOrSheerSponsor() ? this.sVidEndedFullVidText : ""
    },
    drawVideoEndedFullVideoUrl: function() {
        if (null !== this.$fullVidEndLink)
            return void this.redraw();
        if (this.hasFullVideoUrlOrSheerSponsor()) {
            if (this.$fullVidEndLink = this.createElt("div", null, "centered-full-video-link"),
            "default" === xv.conf.sitename || "xnxx" === xv.conf.sitename) {
                var e = this.getFullVideoBigThumb();
                e && e.length && (this.$fullVidEndLink.style.backgroundImage = "url(" + e + ")")
            }
            this.appendToVideoDiv(this.$fullVidEndLink);
            var t = [];
            this.bEndedVidUrlMoreAt && t.push("more-at"),
            this.bIsSheerSponsor ? t.push("is-sh") : "default" === xv.conf.sitename ? t.push("is-xv") : "xnxx" === xv.conf.sitename && t.push("is-xn");
            var i = this.getVideoEndedFullVideoText()
              , s = this.createElt("a", t.join(" "), null, i);
            s.href = this.getVideoEndedFullVideoUrl(),
            s.target = "_blank",
            this.$fullVidEndLink.appendChild(s)
        }
    },
    drawRelated: function() {
        if (this.bRelatedLoaded)
            return void this.redraw();
        var e = this;
        this.$relatedDivContainer = this.createElt("div", "related-vids"),
        this.appendToVideoDiv(this.$relatedDivContainer),
        this.$relatedDiv = this.createElt("div", "related", "embed-related-vids"),
        this.$relatedDivContainer.appendChild(this.$relatedDiv),
        this.bRelatedLoaded = !0,
        this.uploader_name && this.$subscribeBarBt.updateLabel();
        var t = -1
          , i = function(i) {
            var s = e.touch_getPosition(i);
            console.log("start moving at " + s),
            t = s
        }
          , s = function(i) {
            var s = e.touch_getPosition(i);
            if (-1 === t)
                return void (t = s);
            var r = t - s;
            t = s,
            console.log("self.$relatedDiv.offsetLeft " + e.$relatedDiv.offsetLeft + " self.$relatedDiv.offsetWidth " + e.$relatedDiv.offsetWidth);
            var o = e.$relatedDiv.offsetLeft - r;
            console.log("newposition " + o),
            o > 0 && (o = 0),
            o < e.$videoDiv.offsetWidth - e.$relatedDiv.offsetWidth && (o = e.$videoDiv.offsetWidth - e.$relatedDiv.offsetWidth),
            e.$relatedDiv.style.left = o + "px",
            console.log("moving at " + s + " diff = " + r + " new position " + o)
        }
          , r = function(e) {
            t = -1
        };
        this.$relatedDivContainer.addEventListener("touchstart", i),
        this.$relatedDivContainer.addEventListener("touchmove", s),
        this.$relatedDivContainer.addEventListener("touchend", r),
        this.$relatedDivContainer.addEventListener("touchcancel", r);
        var o = 0
          , n = createRequestObject();
        n.open("GET", "/video-suggest/" + this.id_video, !0),
        n.withCredentials = !0,
        n.onreadystatechange = function() {
            if (4 === n.readyState) {
                if (200 !== n.status)
                    return void console.log("SUGGEST LOADING ERROR ready stats " + n.status);
                try {
                    var t = JSON.parse(n.responseText)
                } catch (f) {
                    return void console.log("SUGGEST LOADING ERROR JSON", f)
                }
                for (var i in t.v) {
                    o++;
                    var s = t.v[i]
                      , r = e.createElt("div", "related-video thumb-block", "video_" + (s.encoded_id ? s.encoded_id : "xxx") + "_playerrelated");
                    r.style["float"] = "left";
                    var a = e.createElt("span", "thumb");
                    r.appendChild(a);
                    var l = document.createElement("a");
                    e.is_embed ? l.href = "/embedframe/" + s.id : l.href = s.uri,
                    l.className = "thumb-player-related-exo",
                    a.appendChild(l);
                    var d = e.createElt("span", "duration", null, s.duration)
                      , u = document.createElement("img");
                    u.src = s.thumburl,
                    l.appendChild(u),
                    l.appendChild(d);
                    var h = e.createElt("span", "title", null, s.title_full);
                    if (l.appendChild(h),
                    e.$relatedDiv.appendChild(r),
                    e.desktop_view && o >= 27)
                        break
                }
                var c = document.createElement("div");
                c.style.clear = "both",
                e.$relatedDiv.appendChild(c),
                xv && "object" == typeof xv.sda && "object" == typeof xv.sda.pp && "function" == typeof xv.sda.pp.add && xv.sda.pp.add("thumb-player-related-exo"),
                e.is_embed && "function" == typeof window.display_embed_related_native && window.display_embed_related_native("embed-related-vids"),
                xv.thumb_block_initiator ? xv.thumb_block_initiator.init_listing(e.$relatedDiv, {
                    bAddOnImgError: !0
                }) : "undefined" != typeof require && require(["lib/helpers/thumbs_rotator"], function(t) {
                    t(e.$relatedDiv)
                }),
                e.redraw()
            }
        }
        ;
        try {
            n.send()
        } catch (a) {
            console.log("urlRPC Call error")
        }
    },
    drawNextPlaylist: function() {
        if (this.bPlNextLoaded)
            return this.oPlNextTimer || this.bIsPlNextClosed || this.hasPlaylistAutoNext() && this.startPlaylistCountdown(),
            void this.redraw();
        var e = this;
        this.$plNextContainer = this.createElt("div", "pl-next"),
        this.$plNextContainer.addEventListener("click", function(t) {
            t.stopPropagation(),
            e.allClickEvents(t),
            e.stopPlaylistCountdown(),
            e.loadNextVideoPlaylist()
        }),
        this.$videoDiv.appendChild(this.$plNextContainer),
        this.$plNextThumb = this.createElt("img"),
        this.$plNextThumb.className = "thumb";
        var t, i = this.playlist.next.thumburl.replace("THUMBNUM", 15), s = this.$videoDiv.offsetWidth;
        if (t = s > 480 ? .5 * s : .8 * s,
        "number" == typeof window.devicePixelRatio && (t = window.devicePixelRatio * t),
        t > 352 ? i = i.replace("thumbs/", "thumbslll/").replace("thumbs169/", "thumbs169lll/").replace("thumbs169xnxx/", "thumbs169xnxxlll/") : t > 272 ? i = i.replace("thumbs/", "thumbsll/").replace("thumbs169/", "thumbs169ll/").replace("thumbs169xnxx/", "thumbs169xnxxll/") : t > 208 && (i = i.replace("thumbs/", "thumbsl/").replace("thumbs169/", "thumbs169l/").replace("thumbs169xnxx/", "thumbs169xnxxl/")),
        this.$plNextThumb.src = i,
        this.$plNextContainer.appendChild(this.$plNextThumb),
        this.$plNextTitle = this.createElt("p"),
        this.$plNextContainer.appendChild(this.$plNextTitle),
        this.$plNextCloseBut = this.createIconSpan("close", "player.close_ad"),
        this.$plNextCloseBut.className = "dlg-close-btn",
        this.$plNextCloseBut.addEventListener("click", function(t) {
            e.bIsPlNextAllowed = !1,
            t.stopPropagation(),
            e.allClickEvents(t),
            e.bIsPlNextClosed = !0,
            e.stopPlaylistCountdown(),
            e.drawVideoEnded(),
            e.updateBtVisibity(),
            e.redraw()
        }, !1),
        this.$plNextContainer.appendChild(this.$plNextCloseBut),
        !this.hasPlaylistAutoNext())
            return this.bPlNextLoaded = !0,
            this.$plNextTitle.innerHTML = this.unescape(this.i18n.__("player.next_pl_video", {
                "%name%": '"' + this.playlist.next.title_full + '"'
            })),
            void this.redraw();
        this.$plNextLoader = this.createIconSpan("loader"),
        this.$plNextLoader.className = "loader",
        this.$plNextContainer.appendChild(this.$plNextLoader),
        this.$plNextLoaderTime = this.createElt("div", "pl-timer", null, "5"),
        this.$plNextContainer.appendChild(this.$plNextLoaderTime),
        this.startPlaylistCountdown(),
        this.bPlNextLoaded = !0,
        this.redraw()
    },
    startPlaylistCountdown: function() {
        this.stopPlaylistCountdown(),
        this.iPlNextTime = 6,
        this.updatePlaylistCountdown();
        var e = this;
        this.oPlNextTimer = setInterval(function() {
            e.updatePlaylistCountdown()
        }, 1e3)
    },
    updatePlaylistCountdown: function() {
        if (this.$plNextLoaderTime) {
            this.iPlNextTime = Math.max(0, this.iPlNextTime - 1),
            this.$plNextLoaderTime.innerHTML = this.iPlNextTime;
            var e = "player.loading_next_secs"
              , t = {
                "%nbsecs%": this.iPlNextTime.toString(),
                "%name%": '"' + this.playlist.next.title_full + '"'
            };
            if (0 === this.iPlNextTime)
                return void this.loadNextVideoPlaylist();
            1 === this.iPlNextTime && (e = "player.loading_next_sec"),
            this.$plNextTitle.innerHTML = this.unescape(this.i18n.__(e, t))
        }
    },
    loadNextVideoPlaylist: function() {
        var e = {
            "%name%": '"' + this.playlist.next.title_full + '"'
        };
        this.$plNextTitle.innerHTML = this.unescape(this.i18n.__("player.loading_next", e)),
        this.write_plfullscreen_cookie(this.isFullScreen ? "1" : "0"),
        window.location.href = this.playlist.next.uri
    },
    stopPlaylistCountdown: function() {
        this.oPlNextTimer && (clearInterval(this.oPlNextTimer),
        this.oPlNextTimer = !1,
        this.bPlNextLoaded = !1,
        this.bIsPlNextAllowed = !1,
        this.redraw())
    },
    updateDuration: function() {
        var e = this.getVideoDuration()
          , t = this.getVideoCurrentTime()
          , s = 100 / e * t;
        if (void 0 === e)
            return void (this.$progressBarText && (this.$progressBarText.innerHTML = "",
            this.desktop_view || this.addClass(this.$progressBarText, "no-duration")));
        if (this.$progressBarCursor && "number" == typeof s && !isNaN(s) && (this.$progressBarCursor.style.left = s + "%"),
        this.getChromecastMedia()) {
            for (i = 0; i < this.aBufferedDivList.length; i++)
                this.hideElt(this.aBufferedDivList[i]);
            return this.$bufferedDivChromecast || (this.$bufferedDivChromecast = this.createElt("div", "buffer-elt"),
            this.$bufferedDivChromecast.style.backgroundColor = this.seek_bar_color,
            this.$progressBarBufferDiv && this.$progressBarBufferDiv.appendChild(this.$bufferedDivChromecast),
            this.$bufferedDivChromecast.style.left = "0%"),
            this.showElt(this.$bufferedDivChromecast),
            this.$bufferedDivChromecast.style.width = Math.min(100, s) + "%",
            void (this.$castProgress && "number" == typeof t && e && (this.$castProgress.innerHTML = this.formatSeconds(t) + " / " + this.formatSeconds(e)))
        }
        this.isAirPlayActive() ? (this.$bufferedDivAirplay || (this.$bufferedDivAirplay = this.createElt("div", "buffer-elt"),
        this.$bufferedDivAirplay.style.backgroundColor = this.seek_bar_color,
        this.$progressBarBufferDiv && this.$progressBarBufferDiv.appendChild(this.$bufferedDivAirplay),
        this.$bufferedDivAirplay.style.left = "0%"),
        this.showElt(this.$bufferedDivAirplay),
        this.$bufferedDivAirplay.style.width = Math.min(100, s) + "%",
        this.$castProgress && "number" == typeof t && e && (this.$castProgress.innerHTML = this.formatSeconds(t) + " / " + this.formatSeconds(e))) : this.$progressBarText && "number" == typeof t && e && (this.$progressBarText.innerHTML = this.formatSeconds(t) + " / " + this.formatSeconds(e),
        this.desktop_view || this.removeClass(this.$progressBarText, "no-duration"));
        var r = 0;
        for (this.$progressBarCursor && (this.desktop_view ? this.$progressBarCursor.style.left = s + "%" : this.$progressBarCursor.touchseek || this.progressbar && (this.$progressBarCursor.style.left = Math.floor(this.progressbar.offsetWidth * s / 100 - this.$progressBarCursor.offsetWidth / 2) + "px")),
        i = this.video.buffered.length; i < this.aBufferedDivList.length; i++)
            this.hideElt(this.aBufferedDivList[i]);
        for (this.$bufferedDivChromecast && this.hideElt(this.$bufferedDivChromecast),
        this.$bufferedDivAirplay && this.hideElt(this.$bufferedDivAirplay),
        i = 0; i < this.video.buffered.length; i++) {
            var o = 100 / e * this.video.buffered.start(i)
              , n = this.video.buffered.end(i);
            n <= t && n > r ? r = n : this.video.buffered.start(i) <= t && n >= t && (r = n);
            var a = 100 / e * n - o;
            if ("undefined" == typeof this.aBufferedDivList[i]) {
                var l = this.createElt("div", "buffer-elt");
                l.style.backgroundColor = this.seek_bar_color,
                this.aBufferedDivList[i] = l,
                this.$progressBarBufferDiv && this.$progressBarBufferDiv.appendChild(l)
            } else
                l = this.aBufferedDivList[i];
            this.showElt(l),
            l.style.left = o + "%",
            l.style.width = a + "%"
        }
        this.use_hlsjs || (s = 0,
        r > t + 3 ? s = 100 : t + 3 - r < 6 && (s = 100 / 6 * (6 - (t + 3 - r))),
        this.updateBuffering(s))
    },
    updateBuffering: function(e) {
        e || (e = 0),
        this.$loaderPicBuffer.style.height = Math.floor(e) + "%",
        this.$loaderPicTxt.innerHTML = Math.floor(e) + "%"
    },
    formatSeconds: function(e) {
        if (e === Infinity)
            return "00:00";
        if (!e)
            return "00:00";
        if (e < 0)
            return "00:00";
        var t = Math.floor(e / 60);
        t < 10 && (t = "0" + t);
        var i = Math.floor(e % 60);
        return i < 10 && (i = "0" + i),
        t + ":" + i
    },
    setBuffering: function(e) {
        if (this.bIsBuffering !== e) {
            if (this.bIsBuffering = e,
            e) {
                console.log("setBuffering: is Buffering");
                var t = this;
                this.lastBufferTimestamp = (new Date).getTime(),
                setTimeout(function() {
                    t.updateBtVisibity(),
                    t.redraw()
                }, 600),
                this.oBufferingTimeoutTimer && clearTimeout(this.oBufferingTimeoutTimer),
                this.oBufferingTimeoutTimer = setTimeout(function() {
                    t.bIsBuffering && (console.log("Buffer timeout"),
                    t.send_debug_event("buffer_timeout"))
                }, 1e4)
            } else {
                clearTimeout(this.oBufferingTimeoutTimer),
                this.oBufferingTimeoutTimer = !1;
                var i = (new Date).getTime() - this.lastBufferTimestamp;
                this.getVideoDuration(PLAYER_MEDIA.HTML5_PLAYER) && (this.firstTimeBuffered = !0,
                console.log("setBuffering: is not Buffering in " + i + " ms"),
                this.send_debug_event("buffer_duration", i))
            }
            this.updateBtVisibity(),
            this.positionBigButtons()
        }
    },
    detectPlaying: function() {
        if (this.video.seeking)
            return this.isPlaying = !1,
            void this.setBuffering(!0);
        if (3 === this.video.networkState)
            return this.isPlaying = !1,
            void this.setBuffering(!1);
        if (this.video.ended) {
            if (this.endReached)
                return;
            return this.video.loop || (this.isFullScreen ? this.fullscreen() : this.toggleFullscreeniOS(!1)),
            this.playlist && this.playlist.next && this.bIsPlNextAllowed ? this.drawNextPlaylist() : this.drawVideoEnded(),
            this.drawVideoEndedDesktopMore(),
            this.endReached = !0,
            this.isPlaying = !1,
            void this.setBuffering(!1)
        }
        var e = this.getVideoCurrentTime();
        if (this.lastKnownCurrentTime !== e)
            this.isPlaying = !0,
            this.setBuffering(!1);
        else if (this.canPlay)
            if (this.video.paused)
                this.isPlaying = !1,
                this.setBuffering(!1);
            else {
                if ((new Date).getTime() - this.lastCurrentTimeCheck < 500)
                    return;
                this.isPlaying = !1,
                this.setBuffering(!0)
            }
        else
            this.isPlaying = !1,
            this.setBuffering(!0);
        var t = this.lastKnownCurrentTime;
        this.lastCurrentTimeCheck = (new Date).getTime(),
        this.lastKnownCurrentTime = e;
        var i = this.lastKnownCurrentTime - t;
        i > 0 && i < 1 && (this.total_video_played += i,
        (this.total_video_played > 10 && this.total_video_played < 10.5 || this.total_video_played > 70 && this.total_video_played < 70.5) && this.updateBtVisibity(),
        this.bReportVideoPlayedSent || this.total_video_played > 10 && "function" == typeof require && (this.bReportVideoPlayedSent = !0,
        require(["skins/common/video/tracking"], function(e) {
            e.declareLink()
        })))
    },
    getDrawMinSize: function() {
        var e;
        return this.desktop_view ? (e = this.$videoDiv.offsetHeight,
        this.$videoDiv.offsetWidth < e && (e = this.$videoDiv.offsetWidth)) : (e = window.innerHeight,
        window.innerWidth < e && (e = window.innerWidth)),
        e
    },
    getDrawButtonMargin: function() {
        var e = this.getDrawMinSize();
        return this.isFullScreen ? Math.floor(.04 * e) : Math.floor(.06 * e)
    },
    getDrawResizeCoef: function() {
        if ("object" == typeof xv && "object" == typeof xv.conf && "object" == typeof xv.conf.dyn && "object" == typeof xv.conf.dyn.disfeats && "function" == typeof xv.conf.dyn.disfeats.indexOf) {
            var e = -1 !== xv.conf.dyn.disfeats.indexOf("ui");
            this.iBigUiCoef = e ? 1.2 : 1
        }
        if (this.desktop_view)
            return .8 * this.iBigUiCoef;
        var t = MOBILE_COEF_MULTIPLIER
          , i = this.getDrawMinSize()
          , s = 550 + 500 * (i - 400) / 500;
        return s < 550 && (s = 550),
        s > 1050 && (s = 1050),
        t *= this.getDrawMinSize() / s * this.iBigUiCoef,
        t > 1.2 * this.iBigUiCoef && (t = 1.2 * this.iBigUiCoef),
        t
    },
    redraw: function() {
        var e = this.$videoDiv.offsetWidth
          , t = this.$videoDiv.offsetHeight
          , i = this.getDrawResizeCoef()
          , s = 1.4;
        this.desktop_view && (s = 1);
        var r = this.getDrawButtonMargin()
          , o = function(e, t, s) {
            if (!e)
                return void console.error("Invalid call to resizeElt: Missing element.");
            e.style.width = Math.floor(t * i) + "px",
            s && (e.style.height = Math.floor(s * i) + "px")
        }
          , n = function(e) {
            if (!e)
                return void console.error("Invalid call to padElt: Missing element.");
            for (var t = [], s = 1; s < arguments.length; s++)
                t.push(Math.floor(arguments[s] * i) + "px");
            e.style.padding = t.join(" ")
        }
          , a = function(e, t, i) {
            if (!e)
                return void console.error("Invalid call to resizeAndPadElt: Missing element.");
            o(e, t, i);
            for (var s = [e], r = 3; r < arguments.length; r++)
                s.push(arguments[r]);
            n.apply(this, s)
        }
          , l = function(e) {
            if (!e)
                return void console.error("Invalid call to margElt: Missing element.");
            for (var t = [], s = 1; s < arguments.length; s++)
                t.push(Math.floor(arguments[s] * i) + "px");
            e.style.margin = t.join(" ")
        }
          , d = 20
          , u = 1
          , h = function(e, t) {
            for (var s = [e, t, t], r = 2; r < arguments.length; r++)
                s.push(arguments[r]);
            a.apply(this, s),
            e.style.fontSize = Math.floor(t * i) + "px"
        }
          , c = this.desktop_view ? 10 : 5
          , f = this.desktop_view ? 14 : 7
          , p = function(e) {
            h(e, 30 * s, c * s, f * s)
        }
          , v = function(e) {
            e.style.borderRadius = Math.floor((30 + 2 * c) * s * i / 2) + "px"
        };
        this.desktop_view ? (u = .75,
        d = 17) : this.use_browser_controls && !this.is_new_iphone ? u = .5 : this.bPlayClicked ? d = 15 : this.playlist && (u = .75,
        d = 17);
        var g = this.$topTopDiv && this.$topTopDiv.style && this.$topTopDiv.style.minHeight ? parseInt(this.$topTopDiv.style.minHeight) : 0;
        isNaN(g) && (g = 0);
        var y = g;
        if (this.use_browser_controls || !this.bChromecastDetected && !this.bHadChromecastDetected || this.is_ios || this.is_ipad || this.desktop_view || (p(this.$chromecastBtIcon),
        y = Math.max(y, (45 * u + 7.5 * u * 2) * i)),
        this.isAirPlayAvailable() && (p(this.$airPlayBtIcon),
        this.desktop_view || (y = Math.max(y, (45 * u + 7.5 * u * 2) * i))),
        this.playlist)
            if (this.bPlPrevNextInTopLeftDiv)
                n(this.$plPrevBt, 10),
                n(this.$plNextBt, 10);
            else {
                var m = 5 + 10 * u;
                n(this.$plPrevBt, m),
                h(this.$plPrevBtIcon, 60 * u, 20 * u),
                n(this.$plNextBt, m),
                h(this.$plNextBtIcon, 60 * u, 20 * u)
            }
        n(this.$playBt, 5),
        h(this.$playBtIcon, 90 * u, 15 * u),
        this.$playBtTxt.style.fontSize = Math.floor(d * i) + "px",
        n(this.$pauseBt, 5),
        h(this.$pauseBtIcon, 90 * u, 15 * u),
        this.desktop_view || this.use_browser_controls && (n(this.$replayBt, 5),
        h(this.$replayBtIcon, 40, 5)),
        this.positionBigButtons(),
        this.use_browser_controls && (o(this.$browserCtrlsDlBt, 25, 25),
        n(this.$browserCtrlsDlBt, 5),
        this.$browserCtrlsDlBt.style.right = r + "px",
        this.$browserCtrlsDlBt.style.top = Math.floor(r / 2) + "px",
        this.uploader_name && l(this.$subscribeBarBt, 5, 7));
        var _ = 2.5;
        if (this.desktop_view && (_ = 3.5),
        !this.use_browser_controls) {
            p(this.$playBarBt),
            p(this.$pauseBarBt),
            p(this.$soundOnBarBt),
            p(this.$soundOffBarBt),
            this.bEnableVolumeControl && (o(this.$soundVolume, 75 * s, 30 * s),
            l(this.$soundVolume, c * s, f * s / 2),
            this.$soundVolume.style.fontSize = Math.floor(30 * s * i) + "px"),
            this.desktop_view && (p(this.$plNextBarBt),
            p(this.$plPrevBarBt)),
            p(this.$replayBarBt),
            this.uploader_name && l(this.$subscribeBarBt, c * s, f * s),
            this.desktop_view && (n(this.$progressBarText, c * s, f * s),
            this.$progressBarText.style.lineHeight = Math.floor(30 * s * i) + "px"),
            this.showAutoplay() && (o(this.$autoplayBarBt, 45 * s, 30 * s),
            this.desktop_view && l(this.$autoplayBarBt, 0, 16, 0, 4),
            this.$autoplayBarBt.style.fontSize = Math.floor(30 * s * i) + "px"),
            this.bBtnScreenshotIsInit && p(this.$screenshotBt),
            p(this.$downloadBarBt),
            this.desktop_view && p(this.$expandBarBt),
            p(this.$fullscreenBarBt),
            this.$progressBarBg.style.height = Math.max(this.$leftButtonsBar.offsetHeight, this.$rightButtonsBar.offsetHeight) * _ + "px",
            this.desktop_view ? (this.showBigProgressBar() ? this.$progressBarBg.style.height = Math.ceil((30 + 2 * c) * s * i * _) + "px" : this.$progressBarBg.style.height = Math.floor(2 * i) + "px",
            this.cursoroverprogressbar ? this.$progressBarContainer.style.height = Math.floor(10 * i) + "px" : this.$progressBarContainer.style.height = Math.floor(5 * i) + "px",
            this.progressbar.style.height = "100%",
            this.$progressBarDetectCursor && (this.$progressBarDetectCursor.style.height = Math.floor((30 + 2 * c) * s * 2 * i) + "px")) : (this.$progressBarContainer.style.height = Math.floor((30 + 2 * c) * s * i) + "px",
            this.progressbar.style.height = "2px");
            var b = 0;
            if (this.desktop_view ? this.$progressBarCursor.style.height = "100%" : (b = 22,
            o(this.$progressBarCursor, b, b),
            this.$progressBarCursor.style.top = "-" + b / 2 * i + "px"),
            this.allow_touchseek) {
                this.$progressBarSeekCursorText.style.fontHeight = Math.floor(20 * i) + "px";
                var E = 208 * i
                  , S = 117 * i;
                this.desktop_view && (E /= 1.2,
                S /= 1.2),
                this.$progressBarSeekThumb.style.width = Math.floor(E) + "px",
                this.$progressBarSeekThumb.style.height = Math.floor(S) + "px",
                this.thumb_slide_type === HTML5Player.TYPE_FULL ? this.$progressBarSeekThumb.style.backgroundSize = 10 * Math.floor(E) + "px " + 10 * Math.floor(S) + "px" : this.thumb_slide_type === HTML5Player.TYPE_MINUTE ? this.$progressBarSeekThumb.style.backgroundSize = 10 * Math.floor(E) + "px " + 6 * Math.floor(S) + "px" : this.$progressBarSeekThumb.style.backgroundSize = 6 * Math.floor(E) + "px " + 5 * Math.floor(S) + "px"
            }
            if (this.desktop_view)
                this.$progressBarContainer.style.left = "2px",
                this.$progressBarContainer.style.right = "2px",
                this.showBigProgressBar() ? this.$progressBarContainer.style.bottom = this.$progressBarBg.offsetHeight / _ + "px" : this.$progressBarContainer.style.bottom = "0px";
            else {
                this.progressbar.style.bottom = b / 2 * i + "px";
                this.$progressBarContainer.style.left = "35px",
                this.$progressBarContainer.style.right = "35px",
                this.$progressBarContainer.style.bottom = "10px",
                this.$leftButtonsBar.style.bottom = 1.5 * b * i + 15 + "px",
                this.$rightButtonsBar.style.bottom = 1.5 * b * i + 15 + "px";
                this.$progressBarText.style.lineHeight = Math.floor(30 * s * i) + "px",
                this.$progressBarText.style.padding = Math.floor(c * s * i) + "px " + Math.floor(f * s) + "px",
                this.$progressBarText.style.fontSize = e < 300 ? "12px" : Math.floor(15) + "px",
                this.$progressBarText.style.bottom = 1.5 * b * i + 5 + "px",
                this.$progressBarText.style.left = this.$leftButtonsBar.offsetWidth + 25 + 5 - 35 + "px",
                v(this.$progressBarText),
                v(this.$leftButtonsBar),
                v(this.$rightButtonsBar),
                v(this.$topRightButtonsDiv)
            }
        }
        if (this.bUseParameterMenu && (this.desktop_view ? p(this.$paramsBarBt) : h(this.$paramsBarBtIcon, 45 * u, 7.5 * u),
        this.$parameterBtHd.style.fontSize = Math.floor(12 * i * s) + "px"),
        this.$messageDiv && (o(this.$messageDivClose, 55),
        n(this.$messageDivClose, 5),
        this.$messageDivClose.style.top = "-" + Math.floor(this.$messageDivClose.offsetHeight / 2) + "px",
        this.$messageDivClose.style.right = "-" + this.$messageDivClose.offsetWidth / 2 + "px",
        this.$messageDiv.style.top = r + "px",
        this.$messageDiv.style.fontSize = Math.floor(20 * i) + "px",
        this.$messageTxtDiv.style.maxHeight = Math.floor(t - 2 * r) + "px"),
        o(this.$loaderPic, 90, 90),
        this.$loaderPic.offsetWidth > 0 && (this.$loaderPic.style.left = Math.floor(e / 2 - this.$loaderPic.offsetWidth / 2) + "px",
        this.$loaderPic.style.bottom = Math.floor(t / 2 - this.$loaderPic.offsetHeight / 1.8) + "px"),
        this.$loaderPicTxt.style.lineHeight = Math.floor(90 * i) + "px",
        this.$loaderPicTxt.style.fontSize = Math.floor(15 * i) + "px",
        this.$videoTitleP.style.maxWidth = Math.round(e - 3 * r) + "px",
        this.$videoTitleP.style.fontSize = Math.round(15 * i) + "px",
        this.$videoTitleP.style.lineHeight = Math.round(20 * i) + "px",
        this.$videoTitleP.style.padding = Math.round(6 * i) + "px",
        this.$videoTitleP.offsetHeight && (y = Math.max(y, this.$videoTitleP.offsetHeight)),
        this.bHasCommercialCom && this.$commercialComDiv && this.$commercialComDiv.offsetHeight && (y = Math.max(y, this.$commercialComDiv.offsetHeight)),
        this.$sponsorLink) {
            var T = i * (this.desktop_view ? 1 : 1 / MOBILE_COEF_MULTIPLIER);
            this.$sponsorLink.style.fontSize = Math.floor(15 * T) + "px",
            this.$sponsorLink.offsetHeight && (y = Math.max(y, this.$sponsorLink.offsetHeight))
        }
        if (this.video.ended) {
            if (this.$relatedDiv) {
                var w = Math.floor(t - this.$topLeftDiv.offsetHeight - r / 2 - (this.$progressBarBg ? this.$progressBarBg.offsetHeight / _ : this.$bigButtons.offsetHeight) - 10)
                  , P = Math.min(Math.floor(e / 250), 4)
                  , C = Math.floor(e / P)
                  , A = Math.floor(9 * C / 16)
                  , k = this.$relatedDiv.getElementsByClassName("related-video")
                  , L = Math.min(Math.floor(w / A), Math.ceil(k.length / P));
                if (1 === L && (A = Math.floor(11 * C / 16)),
                !this.desktop_view) {
                    C = 1,
                    L = Math.min(Math.max(Math.floor(w / 130), 1), w < e ? 3 : 5) + 1;
                    do {
                        L--,
                        A = Math.min(Math.floor(w / L), .8 * w),
                        C = Math.floor(16 * A / (1 === L ? 11 : 9)),
                        P = Math.floor(k.length / L)
                    } while (L > 1 && P * C < e)
                }
                this.$relatedDivContainer.style.top = Math.floor(r / 2 + this.$topLeftDiv.offsetHeight) + "px",
                this.$relatedDivContainer.style.height = w + "px",
                this.$relatedDiv.style.height = w + "px";
                for (var D = (L - 1) * P, R = 0; R < k.length; R++)
                    this.desktop_view ? (k[R].style.width = Math.floor(1e4 / P) / 100 + "%",
                    k[R].style.height = Math.floor(1e4 / L) / 100 + "%") : (k[R].style.width = C + "px",
                    k[R].style.height = A + "px"),
                    L < 2 ? (this.addClass(k[R], "one-line"),
                    this.removeClass(k[R], "bottom-line"),
                    this.removeClass(k[R], "top-line")) : (this.removeClass(k[R], "one-line"),
                    R < D ? this.removeClass(k[R], "bottom-line") : this.addClass(k[R], "bottom-line"),
                    R < P ? this.addClass(k[R], "top-line") : this.removeClass(k[R], "top-line"));
                var B = Math.ceil(A * L);
                this.$relatedDiv.style.height = B + "px",
                this.$relatedDiv.style.marginTop = Math.floor((w - B) / 2) + "px",
                this.desktop_view ? (this.$relatedDiv.style.width = e + "px",
                this.$relatedDivContainer.style.top = Math.floor(r / 2 + this.$topLeftDiv.offsetHeight) + "px") : this.$relatedDiv.style.width = Math.ceil(P * C) + "px"
            }
            if (this.$plNextContainer) {
                var x = this.$plNextContainer.offsetWidth
                  , I = this.$plNextContainer.offsetHeight;
                o(this.$plNextCloseBut, 60),
                n(this.$plNextCloseBut, 7.5),
                this.$plNextCloseBut.style.top = "-" + Math.floor(37.5 * i) + "px",
                this.$plNextCloseBut.style.right = "-" + Math.floor(37.5 * i) + "px",
                this.hasPlaylistAutoNext() && (o(this.$plNextLoader, 200),
                this.$plNextLoader.style.top = Math.floor(I / 2 - 100 * i) + "px",
                this.$plNextLoader.style.left = Math.floor(x / 2 - 100 * i) + "px",
                this.$plNextLoaderTime.style.fontSize = Math.round(60 * i) + "px",
                this.$plNextLoaderTime.style.top = Math.floor(I / 2 - this.$plNextLoaderTime.offsetHeight / 2) + "px",
                this.$plNextLoaderTime.style.left = Math.floor(x / 2 - this.$plNextLoaderTime.offsetWidth / 2) + "px"),
                this.$plNextTitle.style.left = Math.floor(r / 3) + "px",
                this.$plNextTitle.style.top = Math.floor(r / 3) + "px",
                this.$plNextTitle.style.maxWidth = Math.round(x - r) + "px",
                this.$plNextTitle.style.fontSize = Math.round(15 * i) + "px",
                this.$plNextTitle.style.lineHeight = Math.round(20 * i) + "px",
                this.$plNextTitle.style.padding = Math.round(6 * i) + "px"
            }
            this.$fullVidEndLink && (this.$fullVidEndLink.style.width = e + "px",
            this.$fullVidEndLink.style.height = t + "px",
            this.$fullVidEndLink.style.top = 0,
            this.$fullVidEndLink.style.left = 0)
        }
        if (this.bUseParameterMenu) {
            var O = [];
            if (this.$qualityMenu && this.bShowQualitiesMenu && O.push(this.$qualityMenu),
            this.$qualityAdvancedMenu && this.bShowQualitiesAdvancedMenu && O.push(this.$qualityAdvancedMenu),
            this.$advancedMenu && this.bShowAdvancedMenu && O.push(this.$advancedMenu),
            this.$speedMenu && this.bShowSpeedMenu && O.push(this.$speedMenu),
            this.$parametersMenu)
                if (this.desktop_view) {
                    var M = this.$progressBarBg ? this.$progressBarBg.offsetHeight / _ : this.$paramsBarBt ? this.$paramsBarBt.offsetHeight : 0
                      , $ = this.$fullscreenBarBt ? this.$fullscreenBarBt.offsetWidth : 0
                      , N = Math.floor(200 * i)
                      , F = Math.floor(15 * i);
                    this.$parametersMenu.style.top = "auto",
                    this.$parametersMenu.style.bottom = M + "px",
                    this.$parametersMenu.style.right = $ + "px",
                    this.$parametersMenu.style.minWidth = N + "px",
                    this.$parametersMenu.style.fontSize = F + "px";
                    for (var V in O)
                        O[V].style.right = $ + Math.floor(5 * i) + "px",
                        O[V].style.minWidth = N + "px",
                        O[V].style.fontSize = F + "px",
                        O[V].style.bottom = M + "px",
                        O[V].style.top = "auto"
                } else {
                    var U = this.$parametersMenu.children.length
                      , H = (this.$topTopDiv ? this.$topTopDiv.offsetTop : 0) + (this.$topRightDiv ? this.$topRightDiv.offsetTop : 0) + (this.$topRightButtonsDiv ? this.$topRightButtonsDiv.offsetHeight + this.$topRightButtonsDiv.offsetTop : 0)
                      , j = 5 * s
                      , G = Math.floor(24 * i)
                      , Y = Math.max(Math.min(100, H), this.iSavedMobMenuTop && this.iSavedMobMenuTopTS > Date.now() - 9e3 ? this.iSavedMobMenuTop : 0);
                    this.iSavedMobMenuTop = Y,
                    this.iSavedMobMenuTopTS = Date.now(),
                    H < Y && (H = Y),
                    this.$parametersMenu.style.bottom = "auto",
                    this.$parametersMenu.style.top = H + "px",
                    this.$parametersMenu.style.right = j + "px";
                    try {
                        this.$videoDiv.style.setProperty("--plyr-stng-maxh", this.$videoDiv.offsetHeight - 10 - H + "px"),
                        this.$videoDiv.style.setProperty("--plyr-stng-anim", "0.2s")
                    } catch (K) {}
                    this.$parametersMenu.style.fontSize = G + "px",
                    this.$parametersMenu.style.lineHeight = G + "px";
                    for (var V in O)
                        U = Math.max(U, O[V].children.length),
                        O[V].style.bottom = "auto",
                        O[V].style.top = H + "px",
                        O[V].style.right = j + "px",
                        O[V].style.fontSize = G + "px",
                        O[V].style.lineHeight = G + "px"
                }
            this.redrawParamers()
        } else {
            var W = [this.$lowQualityBt, this.$highQualityBt];
            for (var R in W)
                a(W[R], 100, null, 7),
                W[R].style.fontSize = Math.floor(17 * i) + "px",
                W[R].style.right = r + "px";
            this.$lowQualityBt.style.bottom = Math.max(25 * i, this.$highQualityBt.offsetHeight) + 5.3 * r + 7 + "px",
            this.$highQualityBt.style.bottom = 5 * r + 7 + "px"
        }
        this.is_embed && (this.desktop_view ? (this.$logoXvideos.style.top = Math.floor(r / 3) + "px",
        this.$logoXvideos.style.left = Math.floor(r / 3) + "px") : (this.$logoXvideos.style.bottom = "22%",
        this.$logoXvideos.style.left = "5%"));
        var q = r / 3;
        this.use_browser_controls && this.bPlayClicked && (q = r / 2 + 20),
        this.$topTopDiv.style.marginLeft = r / 2 + "px",
        this.$topTopDiv.style.width = "calc(100% - " + r / 2 + "px)",
        this.$topTopDiv.style.marginTop = q + "px",
        this.$topLeftDiv.offsetHeight && (y = Math.max(y, this.$topLeftDiv.offsetHeight)),
        this.$topRightDiv.offsetHeight && (y = Math.max(y, this.$topRightDiv.offsetHeight)),
        y !== g && (this.$topTopDiv.style.minHeight = Math.ceil(y) + "px"),
        this.updateDuration(),
        e <= 340 || t <= 260 ? (this.addClass(this.$videoDiv, "pl-size-mobile"),
        this.addClass(this.$videoDiv, "pl-size-mobile-small")) : e <= 480 ? (this.addClass(this.$videoDiv, "pl-size-mobile"),
        this.removeClass(this.$videoDiv, "pl-size-mobile-small")) : (this.removeClass(this.$videoDiv, "pl-size-mobile"),
        this.removeClass(this.$videoDiv, "pl-size-mobile-small"))
    },
    positionBigButtons: function() {
        (this.$bigButtons.offsetWidth || this.$bigButtons.offsetHeight) && (this.use_browser_controls && !this.is_new_iphone ? (this.$bigButtons.style.left = Math.floor(this.$videoDiv.offsetWidth / 2 - this.$bigButtons.offsetWidth / 2) + "px",
        this.$bigButtons.style.bottom = Math.floor(this.$videoDiv.offsetHeight / 2 - 1.5 * this.$bigButtons.offsetHeight) + "px") : this.addClass(this.$bigButtons, "big-buttons-center"))
    },
    updateBtVisibity: function() {
        if (this.updateDuration(),
        this.presetHide(["$logoXvideos", "$videoTitleP", "$commercialComDiv", "$loaderPic", "$pictureDiv", "$playBt", "$pauseBt", "$plPrevBt", "$plNextBt", "$replayBt", "$castControls", "$chromecastBt", "$airPlayBt", "$castPlay", "$castPause", "$castBuffering", "$castSoundOn", "$castSoundOff", "$castProgress", "$browserCtrlsDlBt", "$highQualityBt", "$lowQualityBt", "$playBarBt", "$pauseBarBt", "$replayBarBt", "$soundOnBarBt", "$soundOffBarBt", "$soundVolume", "$downloadBarBt", "$expandBarBt", "$fullscreenBarBt", "$autoplayBarBt", "$paramsBarBt", "$subscribeBarBt", "$plNextBarBt", "$plPrevBarBt", "$parametersMenu", "$qualityMenu", "$qualityAdvancedMenu", "$advancedMenu", "$speedMenu", "$parameterBtHd", "$progressBarContainer", "$progressBarBg", "$progressBarText", "$sponsorLink", "$messageDiv", "$errorDlg", "$relatedDivContainer", "$plNextContainer", "$videoAdsTitleDiv", "$videoEndedDesktopMoreDiv", "$slowSeekInfo"]),
        this.bBtnScreenshotIsInit && this.presetHide(["$screenshotBt"]),
        null !== this.$fullVidTopLink && this.presetHide(["$fullVidTopLink"]),
        null !== this.$fullVidEndLink && this.presetHide(["$fullVidEndLink"]),
        this.isPlayError)
            return this.displayLoadError(),
            void this.applyVisibility();
        (this.bSlowSeekIsInit || this.bSlowSeekCanInstantInit) && this.presetShow(["$slowSeekInfo"]);
        var e = this.getChromecastMedia();
        if (this.bChromecastDetected && (e || this.isCurCCastStatConnecting()))
            return this.presetShow(["$castControls", "$pictureDiv", "$progressBarBg", "$progressBarContainer"]),
            this.isCurCCastStatConnecting() || this.presetShow("$castProgress"),
            this.presetHide("$bigButtons"),
            this.bIsCustomMuted || this.presetShow("$soundVolume"),
            this.isCurCCastStatAnyLoading() ? this.presetShow("$castBuffering") : "PLAYING" !== e.playerState ? this.presetShow("$castPlay") : this.presetShow("$castPause"),
            e && (e.volume.muted || 0 === e.volume.level) ? (this.desktop_view && this.presetShow("$soundOffBarBt"),
            this.presetShow("$castSoundOff")) : (this.desktop_view && this.presetShow("$soundOnBarBt"),
            this.presetShow("$castSoundOn")),
            void this.applyVisibility();
        if (this.isAirPlayActive() ? (this.presetShow(["$castControls", "$castProgress", "$pictureDiv", "$progressBarBg", "$progressBarContainer"]),
        this.presetHide("$bigButtons"),
        this.bIsBuffering ? this.presetShow("$castBuffering") : this.video.paused ? this.presetShow("$castPlay") : this.presetShow("$castPause"),
        this.video.muted ? this.presetShow("$castSoundOff") : this.presetShow("$castSoundOn")) : this.presetShow("$bigButtons"),
        (this.showbigthumb || this.video.ended) && (this.presetShow("$pictureDiv"),
        this.video.ended && (this.$pictureDiv.className = "video-pic picture-related")),
        this.showmessage)
            return this.presetShow("$messageDiv"),
            void this.applyVisibility();
        if (this.is_embed && (this.presetShow("$logoXvideos"),
        this.presetHide("$videoTitleP"),
        null !== this.$fullVidTopLink && this.presetHide(["$fullVidTopLink"])),
        this.use_browser_controls && this.is_new_iphone && !this.bPlayClicked && this.canShowPlay())
            return this.presetShow("$playBt"),
            this.bUseParameterMenu && (this.presetShow("$paramsBarBt"),
            this.bShowParametersMenu ? (this.presetShow("$parametersMenu"),
            this.addClass(this.$paramsBarBt, "is-open")) : this.removeClass(this.$paramsBarBt, "is-open")),
            void this.applyVisibility();
        if (this.showBigProgressBar() ? (this.presetShow("$progressBarBg"),
        this.canScreenshot() && this.bBtnScreenshotIsInit && (this.presetShow("$screenshotBt"),
        this.toggleScreenshotButton(this.bPlayClicked && this.canPlay && !this.bIsBuffering)),
        this.video.muted || 0 === this.video.volume ? this.presetShow("$soundOffBarBt") : this.presetShow("$soundOnBarBt"),
        this.bEnableVolumeControl && (this.bIsCustomMuted || this.presetShow("$soundVolume")),
        this.is_embed && !this.fullscreenAllowed() || (this.is_new_iphone ? this.is_new_iphone && this.bPlayClicked && this.presetShow("$fullscreenBarBt") : this.presetShow("$fullscreenBarBt")),
        this.is_embed || this.isFullScreen || this.presetShow("$expandBarBt"),
        this.desktop_view && (this.video.paused ? this.presetShow("$playBarBt") : this.presetShow("$pauseBarBt")),
        this.desktop_view && this.presetShow("$downloadBarBt"),
        this.showAutoplay() && this.presetShow("$autoplayBarBt"),
        this.bUseParameterMenu && (this.presetShow("$paramsBarBt"),
        this.use_hlsjs && this.hlsobj && this.hlsobj.currentLevel > 2 && this.presetShow("$parameterBtHd"),
        this.bShowParametersMenu ? (this.bShowQualitiesMenu ? this.presetShow("$qualityMenu") : this.bShowQualitiesAdvancedMenu ? this.presetShow("$qualityAdvancedMenu") : this.bShowSpeedMenu ? this.presetShow("$speedMenu") : this.bShowAdvancedMenu ? this.presetShow("$advancedMenu") : this.presetShow("$parametersMenu"),
        this.addClass(this.$paramsBarBt, "is-open")) : this.removeClass(this.$paramsBarBt, "is-open")),
        this.getVideoDuration() && (this.is_new_iphone ? this.bPlayClicked && this.presetShow(["$progressBarContainer", "$progressBarText"]) : this.presetShow(["$progressBarContainer", "$progressBarText"])),
        this.showpausebt && (this.presetShow("$pauseBt"),
        (this.playlist.prev || this.playlist.next) && this.presetShow(["$plPrevBt", "$plNextBt"])),
        this.playlist && (this.playlist.prev && this.presetShow("$plPrevBarBt"),
        this.playlist.next && this.presetShow("$plNextBarBt"))) : this.desktop_view && !this.completHideSeekBar && this.presetShow(["$progressBarBg", "$progressBarContainer"]),
        (this.allow_showInfos || this.video.paused || !this.canPlay || this.bIsBuffering) && (!this.desktop_view || this.is_embed || this.bSlowSeekIsInit || this.bSlowSeekCanInstantInit || this.presetShow(["$videoTitleP"]),
        null !== this.$fullVidTopLink && this.presetShow(["$fullVidTopLink"]),
        this.bPlayClicked && (this.$videoAdsTitleDiv ? this.presetShow(["$videoAdsTitleDiv"]) : this.bSlowSeekIsInit || this.bSlowSeekCanInstantInit || this.presetShow(["$sponsorLink"])),
        this.use_browser_controls && (this.is_ios || this.is_ipad || (this.presetShow("$browserCtrlsDlBt"),
        (this.playlist.prev || this.playlist.next) && this.presetShow(["$plPrevBt", "$plNextBt"])),
        (this.is_ios || this.is_old_ios) && !this.use_native_hls && this.sUrlHigh && this.$lowQualityBt && this.$highQualityBt && (this.presetShow(["$highQualityBt", "$lowQualityBt"]),
        this.bForceLQ ? (this.$lowQualityBt.className = "quality-btn quality-forced",
        this.$highQualityBt.className = "quality-btn quality-default") : (this.$lowQualityBt.className = "quality-btn quality-default",
        this.$highQualityBt.className = "quality-btn quality-forced")))),
        "object" == typeof this.video && "undefined" != typeof this.video.currentTime) {
            var t = !this.video.paused && this.video.currentTime < this.iCommercialComDuration
              , i = this.video.paused && this.video.currentTime > 0 && this.video.currentTime < this.iCommercialComDuration;
            !this.bCommercialComOver && this.video.currentTime >= this.iCommercialComDuration && (this.bCommercialComOver = !0);
            !this.bCommercialComOver && (t || i) ? this.presetShow(["$commercialComDiv"]) : this.presetHide(["$commercialComDiv"])
        }
        return !this.canPlay || this.bIsBuffering ? (this.presetHide(["$highQualityBt", "$lowQualityBt", "$pauseBt"]),
        this.use_browser_controls || (this.bIsBuffering ? this.presetHide(["$plPrevBt", "$plNextBt"]) : (this.playlist.prev || this.playlist.next) && this.presetShow(["$plPrevBt", "$plNextBt"])),
        this.is_ios || this.is_ipad || (this.use_hlsjs || this.bPlayClicked || "none" !== this.video.preload || !this.canShowPlay() ? (new Date).getTime() - this.lastBufferTimestamp > 500 ? this.presetShow("$loaderPic") : this.firstTimeBuffered && !this.bPlayClicked && this.canShowPlay() && this.presetShow(["$playBt"]) : this.presetShow(["$playBt"])),
        void this.applyVisibility()) : this.video.ended ? (this.bPlNextLoaded ? this.presetShow("$plNextContainer") : null !== this.$fullVidEndLink ? this.presetShow("$fullVidEndLink") : this.presetShow("$relatedDivContainer"),
        this.presetShow(["$replayBt", "$replayBarBt", "$progressBarBg"]),
        this.desktop_view && !this.is_embed && this.presetShow(["$videoTitleP", "$videoEndedDesktopMoreDiv"]),
        null !== this.$fullVidTopLink && this.presetShow(["$fullVidTopLink"]),
        this.use_browser_controls || this.presetShow("$progressBarContainer", "$progressBarText"),
        this.bBtnScreenshotIsInit && this.presetHide(["$screenshotBt"]),
        this.presetHide(["$logoXvideos", "$playBarBt", "$pauseBarBt", "$downloadBarBt", "$soundOnBarBt", "$soundOffBarBt", "$soundVolume", "$autoplayBarBt", "$paramsBarBt", "$highQualityBt", "$lowQualityBt", "$playBt", "$pauseBt", "$plPrevBt", "$plNextBt", "$browserCtrlsDlBt"]),
        this.is_embed && !this.fullscreenAllowed() || this.presetShow("$fullscreenBarBt"),
        this.is_embed || this.isFullScreen || this.presetShow("$expandBarBt"),
        this.playlist && (this.playlist.prev && this.presetShow("$plPrevBarBt"),
        this.playlist.next && this.presetShow("$plNextBarBt")),
        void this.applyVisibility()) : this.video.paused ? (this.presetHide(["$pauseBt"]),
        (this.playlist.prev || this.playlist.next) && this.presetShow(["$plPrevBt", "$plNextBt"]),
        this.use_browser_controls ? (this.is_ios || this.is_ipad || this.presetShow("$browserCtrlsDlBt"),
        !this.desktop_view || this.is_embed || this.bSlowSeekIsInit || this.bSlowSeekCanInstantInit || this.presetShow(["$videoTitleP"]),
        null !== this.$fullVidTopLink && this.presetShow(["$fullVidTopLink"]),
        this.hideElt(this.$playBtTxt)) : (this.$chromecastBt && !this.desktop_view && (!this.bChromecastDetected && !this.bHadChromecastDetected || e || (this.presetShow(["$chromecastBt"]),
        this.bChromecastDetected ? this.removeClass(this.$chromecastBt, "is-not-init") : this.addClass(this.$chromecastBt, "is-not-init"))),
        this.$airPlayBt && this.isAirPlayAvailable() && !this.isAirPlayActive() && this.presetShow(["$airPlayBt"])),
        this.use_browser_controls || (this.bPlayClicked && !this.allow_showInfos ? (this.bBtnScreenshotIsInit && this.presetHide("$screenshotBt"),
        this.presetHide(["$logoXvideos", "$progressBarBg", "$fullscreenBarBt", "$expandBarBt", "$videoTitleP", "$progressBarContainer", "$playBarBt", "$pauseBarBt", "$downloadBarBt", "$soundOnBarBt", "$soundOffBarBt", "$soundVolume", "$autoplayBarBt", "$paramsBarBt", "$highQualityBt", "$lowQualityBt", "$progressBarText", "$playBt", "$pauseBt", "$plPrevBt", "$plNextBt", "$browserCtrlsDlBt", "$videoAdsTitleDiv", "$sponsorLink"]),
        null !== this.$fullVidTopLink && this.presetHide(["$fullVidTopLink"])) : !this.bSlowSeekIsInit && this.canShowPlay() && this.presetShow(["$playBt"])),
        void this.applyVisibility()) : void this.applyVisibility()
    },
    showPause: function() {
        if (!this.desktop_view) {
            console.info("show pause"),
            this.showpausebt = !0,
            this.showpausebt_timer && clearTimeout(this.showpausebt_timer);
            var e = this;
            this.showpausebt_timer = setTimeout(function() {
                console.log("Show pausebt end"),
                e.hidePause()
            }, 3e3),
            this.updateBtVisibity(),
            this.positionBigButtons()
        }
    },
    hidePause: function() {
        this.showpausebt = !1,
        this.updateBtVisibity()
    },
    showInfos: function(e) {
        this.allow_showInfos = !0,
        this.allow_showInfosTimer && clearTimeout(this.allow_showInfosTimer);
        var t = this;
        this.allow_completHideSeekBar && (clearTimeout(this.allow_completHideSeekBar),
        delete this.allow_completHideSeekBar),
        this.completHideSeekBar = !1,
        this.allow_showInfosTimer = setTimeout(function() {
            console.log("Show Info end"),
            t.allow_showInfos = !1,
            t.allow_showInfosTimer = !1,
            t.showpausebt = !1,
            t.showsoundcontrol = !1,
            t.video.paused || t.desktop_view || (t.bShowParametersMenu = !1,
            t.bShowQualitiesMenu = !1,
            t.bShowQualitiesAdvancedMenu = !1,
            t.bShowSpeedMenu = !1,
            t.bShowAdvancedMenu = !1),
            t.touchSeekHide(),
            t.updateBtVisibity(),
            t.redraw(),
            t.desktop_view && (t.$videoDiv.style.cursor = "none",
            t.allow_completHideSeekBar = setTimeout(function() {
                t.completHideSeekBar = !0,
                t.updateBtVisibity()
            }, 5e3))
        }, 3e3),
        this.updateBtVisibity(),
        e ? this.positionBigButtons() : this.redraw()
    },
    hideInfos: function() {
        this.allow_showInfos = !1,
        this.allow_showInfosTimer && clearTimeout(this.allow_showInfosTimer),
        this.allow_showInfosTimer = !1,
        this.showpausebt = !1,
        this.showsoundcontrol = !1,
        this.touchSeekHide(),
        this.updateBtVisibity()
    },
    seek: function(e) {
        this.setVideoCurrentTime(e),
        this.showbigthumb = !1
    },
    play: function(e) {
        if (console.log("html5player.play()", e),
        xv.console.log("html5player.play()", "Player"),
        this.video.poster = "",
        !e || e === PLAYER_MEDIA.CHROMECAST) {
            var t = this.getChromecastMedia();
            if (t)
                return void t.play()
        }
        if (!e || e === PLAYER_MEDIA.HTML5_PLAYER)
            return void this.video.play()["catch"](function(e) {
                console.error("html5player.play() error", e)
            });
        console.log("html5player.play()", "didn't work")
    },
    replay: function(e) {
        this.bIsPlNextClosed = !1,
        this.stopPlaylistCountdown(),
        this.endReached = !1,
        this.setVideoCurrentTime(0, e),
        this.play(e)
    },
    pause: function(e) {
        console.log("html5player.pause()", e),
        xv.console.log("html5player.pause()", "Player");
        for (var t in this.oVideoAds)
            if (this.oVideoAds[t].oAd) {
                var i = this.oVideoAds[t].oAd.getVideo();
                i && !1 === i.paused && i.pause()
            }
        if (!e || e === PLAYER_MEDIA.CHROMECAST) {
            var s = this.getChromecastMedia();
            if (s)
                return void s.pause()
        }
        if (!e || e === PLAYER_MEDIA.HTML5_PLAYER)
            return void this.video.pause();
        console.log("html5player.pause()", "didn't work")
    },
    mute: function(e) {
        xv.console.log("html5player.mute()", "Player"),
        e = void 0 === e || e,
        e && this.loadPreference(),
        this.video.muted = !0,
        this.bIsCustomMuted = !0,
        this.iCustomVideoVolume = this.video.volume;
        var t = this.getChromecastMedia();
        t && t.setVolume && t.setVolume(new chrome.cast.media.VolumeRequest(new chrome.cast.Volume(null,!0)), function() {
            console.log("Chromecast setVolume mute")
        }, function(e) {
            console.error("Chromecast setVolume error", e)
        }),
        e && this.savePreference()
    },
    unmute: function(e) {
        xv.console.log("html5player.unmute()", "Player"),
        e = void 0 === e || e,
        e && this.loadPreference(),
        this.video.muted = !1,
        this.bIsCustomMuted = !1,
        this.bEnableVolumeControl && (this.$soundVolumeLvl.style.width = Math.round(100 * this.video.volume) + "%");
        var t = this.getChromecastMedia();
        t && t.setVolume && t.setVolume(new chrome.cast.media.VolumeRequest(new chrome.cast.Volume(null,!1)), function() {
            console.log("Chromecast setVolume unmut")
        }, function(e) {
            console.error("Chromecast setVolume error", e)
        }),
        e && this.savePreference()
    },
    setVolume: function(e, t) {
        if (xv.console.log("html5player.setVolume(" + e + ", bSave:" + t + ")", "Player"),
        t = void 0 === t || t,
        t && (this.loadPreference(),
        this.iCustomVideoVolume = e),
        !this.bIsCustomMuted) {
            this.video.muted = !1,
            this.video.volume = e,
            this.removeClass(this.$soundOnBarBtIcon, "pif-sound-0 pif-sound-1 pif-sound-2"),
            this.addClass(this.$soundOnBarBtIcon, "pif-sound-" + (e > .59 ? "2" : e > .2 ? "1" : "0")),
            this.bEnableVolumeControl && (this.$soundVolumeLvl.style.width = Math.round(100 * e) + "%");
            var i = this.getChromecastMedia();
            i && i.setVolume && i.setVolume(new chrome.cast.media.VolumeRequest(new chrome.cast.Volume(e,!1)), function() {
                console.log("Chromecast setVolume ok to", e)
            }, function(e) {
                console.error("Chromecast setVolume error", e)
            }),
            t && this.savePreference()
        }
    },
    initVolumeEvents: function() {
        var e = this;
        this.$soundVolume.hide = function() {
            e.bIsCustomMuted ? (e.addClass(e.$soundVolume, "is-muted"),
            e.removeClass(e.$soundVolume, "is-hidden-param")) : (e.removeClass(e.$soundVolume, "is-muted"),
            e.addClass(e.$soundVolume, "is-hidden-param"))
        }
        ,
        this.$soundVolume.show = function() {
            e.removeClass(e.$soundVolume, "is-hidden-param"),
            e.removeClass(e.$soundVolume, "is-muted")
        }
        ,
        this.setVolumeEvents = this.setVolumeEvents.bind(this),
        this.unsetVolumeEvents = this.unsetVolumeEvents.bind(this),
        this.updateVolumeOnEvent = this.updateVolumeOnEvent.bind(this),
        this.$soundVolume.addEventListener("click", function(t) {
            console.log("Sound vol global click"),
            t.stopPropagation(),
            e.allClickEvents(t),
            e.unsetVolumeEvents(t),
            e.updateVolumeOnEvent(t)
        }, !1),
        this.$soundVolume.addEventListener("mousedown", this.setVolumeEvents, !1)
    },
    setVolumeEvents: function(e) {
        e.preventDefault(),
        e.stopPropagation(),
        console.log("setVolumeEvents", this, e.type),
        this.updateVolumeOnEvent(e),
        this.$soundVolume.addEventListener("mousemove", this.updateVolumeOnEvent, !1),
        this.$soundVolume.addEventListener("mouseenter", this.unsetVolumeEvents, !1),
        this.$soundVolume.addEventListener("mouseleave", this.unsetVolumeEvents, !1),
        this.$soundVolume.addEventListener("mouseup", this.unsetVolumeEvents, !1),
        this.$soundVolume.addEventListener("dragend", this.unsetVolumeEvents, !1)
    },
    unsetVolumeEvents: function(e) {
        console.log("fnRemoveMouseMoveVolumeEvents", e.type),
        this.$soundVolume.removeEventListener("mousemove", this.updateVolumeOnEvent),
        this.$soundVolume.removeEventListener("mouseenter", this.unsetVolumeEvents),
        this.$soundVolume.removeEventListener("mouseleave", this.unsetVolumeEvents),
        this.$soundVolume.removeEventListener("mouseup", this.unsetVolumeEvents),
        this.$soundVolume.removeEventListener("dragend", this.unsetVolumeEvents)
    },
    updateVolumeOnEvent: function(e) {
        e.preventDefault(),
        e.stopPropagation();
        var t = this.touch_getPosition(e)
          , i = this.$soundVolume.getBoundingClientRect();
        t -= i ? i.left : this.$soundVolume.offsetLeft;
        var s = t / this.$soundVolume.offsetWidth * 100;
        s > 90 ? s = 100 : s < 10 && (s = 0),
        this.setVolume(s / 100, "mousemove" !== e.type && "mousedown" !== e.type)
    },
    drawCastControls: function(e) {
        var t = this
          , i = {};
        i.sCastMode = e || CAST_MODE.CHROMECAST,
        i.sPictoCastOn = CAST_ICON[i.sCastMode].ON,
        i.sPictoCastOff = CAST_ICON[i.sCastMode].OFF,
        this.$castControls = this.createElt("div", "cast-ctrls centered-box"),
        this.appendToVideoDiv(this.$castControls);
        var s = this.createIconSpan(i.sPictoCastOn);
        this.$castControls.appendChild(s);
        var r = this.createElt("div", "centered-box-cont");
        this.$castControls.appendChild(r),
        this.$castDeviceName = this.createElt("span", "cast-device-name"),
        r.appendChild(this.$castDeviceName),
        this.updateCurrentChromecastName(),
        this.$castSoundOn = this.createElt("span", "cc-button has-clickable-effect"),
        this.$castSoundOn.appendChild(this.createIconSpan("sound-2", "player.mute")),
        this.$castSoundOn.addEventListener("click", function(e) {
            console.log("Sound on click addEventListener"),
            e.stopPropagation(),
            t.allClickEvents(e),
            t.mute(),
            t.showInfos(!1),
            t.updateBtVisibity()
        }),
        r.appendChild(this.$castSoundOn),
        this.$castSoundOff = this.createElt("span", "cc-button has-clickable-effect"),
        this.$castSoundOff.appendChild(this.createIconSpan("sound-mute-red", "player.unmute")),
        this.$castSoundOff.addEventListener("click", function(e) {
            console.log("Sound off click addEventListener"),
            e.stopPropagation(),
            t.allClickEvents(e),
            t.unmute(),
            t.showInfos(!1),
            t.updateBtVisibity()
        }),
        r.appendChild(this.$castSoundOff),
        this.$castBuffering = this.createElt("div", "cc-button buffering"),
        this.$castBuffering.appendChild(this.createIconSpan("spinner icf-anim-pulse", "player.play")),
        r.appendChild(this.$castBuffering),
        this.$castPlay = this.createElt("div", "cc-button play has-clickable-effect"),
        this.$castPlay.addEventListener("click", function(e) {
            xv.console.log("Cast play button clicked", "Player"),
            e.stopPropagation(),
            t.allClickEvents(e);
            var s = i.sCastMode === CAST_MODE.AIRPLAY && t.isAirPlayActive()
              , r = function() {
                s && t.video.muted && (console.log("AirPlay --- PLAY BUTTON --- clicked => unmute and mute HTML5 video to force sound on AirPlay"),
                t.unmute(!1),
                t.mute(!1))
            };
            if (s && !this.show_preroll_ads_airplay && t.displayPreRollVideoAd(r))
                return void xv.console.log("cast btn click - Starting to display Video Ads");
            t.play(),
            r()
        }),
        this.$castPlay.appendChild(this.createIconSpan("play", "player.play")),
        r.appendChild(this.$castPlay),
        this.$castPause = this.createElt("div", "cc-button pause has-clickable-effect"),
        this.$castPause.addEventListener("click", function(e) {
            e.stopPropagation(),
            t.allClickEvents(e),
            t.pause()
        }),
        this.$castPause.appendChild(this.createIconSpan("pause", "player.pause")),
        r.appendChild(this.$castPause),
        this.$castOff = this.createElt("div", "cc-button off has-clickable-effect"),
        this.$castOff.addEventListener("click", function(e) {
            switch (e.stopPropagation(),
            t.allClickEvents(e),
            i.sCastMode) {
            case CAST_MODE.AIRPLAY:
                t.promptAirPlayTarget();
                break;
            case CAST_MODE.CHROMECAST:
                t.isCurCCastStatConnecting() ? t.stopChromecast(CHROMECAST_ACTIONS.STOP.STOP_CURRENT_PLAYING) : t.drawChromecastConfirm(t.i18n.__("misc.are_you_sure"), function() {
                    t.stopChromecast(CHROMECAST_ACTIONS.STOP.STOP_CURRENT_PLAYING)
                })
            }
        }),
        this.$castOff.appendChild(this.createIconSpan(i.sPictoCastOff, "player.stop_cast")),
        r.appendChild(this.$castOff),
        this.$castProgress = this.createElt("div", "chromecast-progress noselect"),
        this.$castProgress.addEventListener("click", function(e) {
            console.log("Chrome Cast Progress text click"),
            e.stopPropagation(),
            t.allClickEvents(e)
        }),
        r.appendChild(this.$castProgress)
    },
    initChromecast: function() {
        var e = this;
        if (!this.is_mac_os) {
            window.__onGCastApiAvailable = function(t) {
                if (t) {
                    if (!cast.framework || !chrome.cast)
                        return e.bChromecastDetected = !1,
                        void (e.bHadChromecastDetected = !1);
                    var i = cast.framework.CastContext.getInstance();
                    i.setOptions({
                        receiverApplicationId: chrome.cast.media.DEFAULT_MEDIA_RECEIVER_APP_ID,
                        autoJoinPolicy: chrome.cast.AutoJoinPolicy.ORIGIN_SCOPED
                    }),
                    i.addEventListener(cast.framework.CastContextEventType.CAST_STATE_CHANGED, function(t) {
                        if (console.log("Chrome Cast State Changed : ", t.castState),
                        e.loadPreference(),
                        t.castState !== cast.framework.CastState.NO_DEVICES_AVAILABLE) {
                            e.bChromecastDetected = !0,
                            e.use_hlsjs || e.hideElt(e.$videoClickHandler),
                            e.oChromecastSession || t.castState !== cast.framework.CastState.SESSION_RESUMED && t.castState !== cast.framework.CastState.SESSION_STARTED || e.waitForChromecastMedia();
                            i.getCurrentSession() && e.waitForChromecastMedia()
                        } else
                            e.bChromecastDetected = !1,
                            e.bHadChromecastDetected = !1,
                            e.showElt(e.$videoClickHandler);
                        e.savePreference(!0),
                        e.updateBtVisibity(),
                        e.redraw()
                    }),
                    i.addEventListener(cast.framework.CastContextEventType.SESSION_STATE_CHANGED, function(t) {
                        t.sessionState !== cast.framework.SessionState.SESSION_STARTED && t.sessionState !== cast.framework.SessionState.SESSION_STARTING && t.sessionState !== cast.framework.SessionState.SESSION_RESUMED && e.stopChromecast(CHROMECAST_ACTIONS.STOP.UI_ONLY),
                        e.updateCurrentChromecastName(),
                        console.log("SESSION_STATE_CHANGED", t.sessionState)
                    })
                } else
                    console.log("Google Chrome Cast loading error")
            }
            ;
            var t = document.createElement("script");
            t.src = "https://www.gstatic.com/cv/js/sender/v1/cast_sender.js?loadCastFramework=1",
            t.async = !0,
            this.$globalDiv.appendChild(t)
        }
    },
    waitForChromecastMedia: function() {
        var e = cast.framework.CastContext.getInstance().getCurrentSession()
          , t = 0
          , i = this
          , s = function() {
            if (i.isCurCCastStatStopped())
                return void console.log("❌ Chromecast --- no media to wait for => stop called");
            var r = e.getMediaSession();
            if (t += 500,
            r) {
                if (i.isCurCCastStatMediaWorking())
                    return console.log("Chromecast --- media already playing => initChromeCastMedia()"),
                    void i.initChromeCastMedia(r);
                if (console.log("Chromecast --- Media récupéré !", r),
                r.media && i.getVideoIdForChromeCast() === r.media.contentId) {
                    if (this.isCurCCastStatMediaConnecting())
                        return void i.setMediaToChromecastSession(CHROMECAST_ACTIONS.START.RESUME);
                    i.drawChromecastConfirm(i.i18n.__("player.resume_cast_q"), function() {
                        i.setMediaToChromecastSession(CHROMECAST_ACTIONS.START.RESUME)
                    }, function() {
                        i.stopChromecast(CHROMECAST_ACTIONS.STOP.UI_ONLY)
                    })
                }
            } else {
                if (t >= 1e4)
                    return void console.log("Chromecast --- no media => wait too long : ", 10, "seconds");
                if (i.isCurCCastStatSessionConnecting())
                    return void console.log("Chromecast --- no media to wait for => session connecting");
                if (i.isCurCCastStatMediaWorking())
                    return void console.log("Chromecast --- media already playing => stop called");
                console.log("Chromecast --- waiting for média…"),
                setTimeout(s, 500)
            }
        };
        s()
    },
    chromecastVideo: function() {
        if (!cast.framework)
            return alert("Error: Chrome cast don't seems to be supported"),
            this.bChromecastDetected = !1,
            this.bHadChromecastDetected = !1,
            this.updateBtVisibity(),
            void this.redraw();
        if (!this.sUrlHls)
            return void alert("Sorry. Chromecast is not available for this video");
        var e = this;
        this.pause(),
        this.toggleChromecastCurrentStatus(CHROMECAST_STATUS.CONNECTING_SESSION);
        try {
            cast.framework.CastContext.getInstance().requestSession().then(function() {
                e.toggleChromecastCurrentStatus(CHROMECAST_STATUS.CONNECTED_SESSION),
                e.setMediaToChromecastSession(CHROMECAST_ACTIONS.START.LOAD)
            })["catch"](function(t) {
                e.stopChromecast(CHROMECAST_ACTIONS.STOP.UI_ONLY),
                console.log("%❌ Chrome Cast requestSession error catch", t)
            })
        } catch (t) {
            console.error("Chrome Cast requestSession error catch", t),
            e.stopChromecast(CHROMECAST_ACTIONS.STOP.UI_ONLY)
        }
    },
    setMediaToChromecastSession: function(e) {
        var t = cast.framework.CastContext.getInstance().getCurrentSession();
        if (!t)
            return void console.log("❌ Chrome Cast setMediaToChromecastSession error", "No Session", t);
        this.bPlayClicked = !0,
        this.bChromecastProbablyEnded = !1,
        this.toggleChromecastCurrentStatus(CHROMECAST_STATUS.CONNECTED_SESSION);
        var i = t.getSessionId();
        if (this.sChromecastSessionId === i && this.oChromecastSession)
            return void console.log("Chrome Cast setMediaToChromecastSession", "Session already initiated");
        this.oChromecastSession = t,
        this.sChromecastSessionId = i,
        this.pause(PLAYER_MEDIA.HTML5_PLAYER);
        var s = this;
        if (this.oChromecastSession.addEventListener(cast.framework.SessionEventType.APPLICATION_STATUS_CHANGED, function(e) {}),
        this.oChromecastSession.addEventListener(cast.framework.SessionEventType.APPLICATION_METADATA_CHANGED, function(e) {}),
        this.oChromecastSession.addEventListener(cast.framework.SessionEventType.ACTIVE_INPUT_STATE_CHANGED, function(e) {}),
        this.oChromecastSession.addEventListener(cast.framework.SessionEventType.VOLUME_CHANGED, function(e) {}),
        this.oChromecastSession.addEventListener(cast.framework.SessionEventType.MEDIA_SESSION, function(e) {
            e.mediaSession && s.initChromeCastMedia(e.mediaSession)
        }),
        e === CHROMECAST_ACTIONS.START.LOAD) {
            if (!this.sUrlHls)
                return void alert("Sorry. Chromecast is not available for this video");
            this.savePreference();
            var r = new chrome.cast.media.MediaInfo;
            if (r.contentId = this.getVideoIdForChromeCast(),
            r.contentUrl = this.sUrlHls,
            this.video_title || this.uploader_name || this.sUrlThumb169 || this.sUrlThumb) {
                var o = new chrome.cast.media.MovieMediaMetadata;
                this.video_title && (o.title = this.unescape(this.video_title)),
                this.uploader_name && (o.studio = this.unescape(this.uploader_name)),
                (this.sUrlThumb169 || this.sUrlThumb) && (o.images = [new chrome.cast.Image(this.sUrlThumb169 || this.sUrlThumb)]),
                r.metadata = o
            }
            var n = new chrome.cast.media.LoadRequest(r);
            n.currentTime = this.getVideoCurrentTime(PLAYER_MEDIA.HTML5_PLAYER),
            this.oChromecastSession.loadMedia(n).then(function(e) {
                s.getChromecastMedia() || (s.toggleChromecastCurrentStatus(CHROMECAST_STATUS.CONNECTING_MEDIA),
                s.waitForChromecastMedia())
            })["catch"](function(e) {
                s.toggleChromecastCurrentStatus(CHROMECAST_STATUS.LOADING_ERROR),
                console.error("Erreur lors du cast :", e)
            })
        } else
            e === CHROMECAST_ACTIONS.START.RESUME && s.initChromeCastMedia(this.getChromecastMedia())
    },
    initChromeCastMedia: function(e) {
        if (!e)
            return this.toggleChromecastCurrentStatus(CHROMECAST_STATUS.IDLE),
            !1;
        if (this.toggleChromecastCurrentStatus(CHROMECAST_STATUS.PLAYING),
        e.bIsInit)
            return !0;
        e.bIsInit = !0;
        var t = this;
        e.addUpdateListener(function(i) {
            if (!i)
                return console.log("Session terminée (bChromecastProbablyEnded : " + t.bChromecastProbablyEnded + ") ou média arrêté. => !bIsAlive"),
                void (t.bChromecastProbablyEnded && (t.setVideoCurrentTime(t.getVideoDuration(PLAYER_MEDIA.HTML5_PLAYER), PLAYER_MEDIA.HTML5_PLAYER),
                t.stopChromecast(CHROMECAST_ACTIONS.STOP.STOP_CURRENT_PLAYING),
                t.play()));
            e.playerState === chrome.cast.media.PlayerState.IDLE && e.idleReason === chrome.cast.media.IdleReason.FINISHED ? (t.setVideoCurrentTime(t.getVideoDuration(PLAYER_MEDIA.HTML5_PLAYER), PLAYER_MEDIA.HTML5_PLAYER),
            t.stopChromecast(CHROMECAST_ACTIONS.STOP.STOP_CURRENT_PLAYING)) : e.playerState === chrome.cast.media.PlayerState.IDLE ? t.toggleChromecastCurrentStatus(CHROMECAST_STATUS.IDLE) : e.playerState === chrome.cast.media.PlayerState.PLAYING ? t.toggleChromecastCurrentStatus(CHROMECAST_STATUS.PLAYING) : e.playerState === chrome.cast.media.PlayerState.PAUSED ? t.toggleChromecastCurrentStatus(CHROMECAST_STATUS.PAUSED) : e.playerState === chrome.cast.media.PlayerState.BUFFERING && t.toggleChromecastCurrentStatus(CHROMECAST_STATUS.BUFFERING),
            t.updateBtVisibity(),
            t.redraw()
        });
        var i = 0;
        this.chromecasttimer = setInterval(function() {
            var e = t.getChromecastMedia();
            e && e.getStatus(null, function() {
                i = 0,
                t.updateBtVisibity(),
                t.redraw();
                var s = t.getVideoCurrentTime(PLAYER_MEDIA.CHROMECAST)
                  , r = t.getVideoDuration(PLAYER_MEDIA.CHROMECAST);
                t.bChromecastProbablyEnded = r && s >= r - 1.5,
                e.playerState === chrome.cast.media.PlayerState.PLAYING ? t.toggleChromecastCurrentStatus(CHROMECAST_STATUS.PLAYING) : e.playerState === chrome.cast.media.PlayerState.PAUSED ? t.toggleChromecastCurrentStatus(CHROMECAST_STATUS.PAUSED) : e.playerState === chrome.cast.media.PlayerState.BUFFERING && t.toggleChromecastCurrentStatus(CHROMECAST_STATUS.BUFFERING)
            }, function(e) {
                if (++i > 20)
                    return void t.stopChromecast(CHROMECAST_ACTIONS.STOP.STOP_CURRENT_PLAYING);
                console.log("oChromecastMedia.getStatus - error #" + i, e)
            })
        }, 100)
    },
    getVideoIdForChromeCast: function() {
        return this.encoded_id_video || this.id_video
    },
    drawChromecastControls: function() {
        if (!(this.is_ios || this.is_ipad || this.use_browser_controls || this.is_ios_desktop_mode || this.is_mac_os)) {
            var e = this;
            this.desktop_view ? this.$chromecastBt = null : (this.$chromecastBt = this.createElt("div", "big-button chromecast-button cast-button"),
            this.$topRightButtonsDiv.prepend(this.$chromecastBt),
            this.$chromecastBt.addEventListener("click", function(t) {
                console.log("Chromecast click addEventListener"),
                t.stopPropagation(),
                e.allClickEvents(t),
                e.chromecastVideo()
            }),
            this.$chromecastBtIcon = this.createIconSpan("chromecast", "player.chromecast"),
            this.$chromecastBt.appendChild(this.$chromecastBtIcon)),
            this.drawCastControls(CAST_MODE.CHROMECAST)
        }
    },
    getChromecastMedia: function() {
        if (this.oChromecastSession) {
            var e = this.oChromecastSession.getMediaSession();
            if (e)
                return e
        }
    },
    getChromecastName: function() {
        if (this.oChromecastSession) {
            var e = this.oChromecastSession.getCastDevice();
            if (e)
                return e.friendlyName
        }
    },
    updateCurrentChromecastName: function() {
        var e;
        this.isCurCCastStatConnecting() ? e = this.i18n.__("player.connecting_cast") : (e = this.getChromecastName(),
        e = e ? this.i18n.__("player.casting_on", {
            "%device%": "<span class='name'>" + e + "</span>"
        }) : this.i18n.__("currently_casting")),
        this.$castDeviceName.innerHTML = e
    },
    stopChromecast: function(e) {
        console.log("Chrome Cast stopChromecast - sMethod :", e === CHROMECAST_ACTIONS.STOP.UI_ONLY ? "UI_ONLY" : e === CHROMECAST_ACTIONS.STOP.STOP_CURRENT_PLAYING ? "STOP_CURRENT_PLAYING" : e);
        var t = this.getChromecastMedia();
        if (t) {
            var i = this.getVideoCurrentTime(PLAYER_MEDIA.CHROMECAST);
            null !== i && this.setVideoCurrentTime(i, PLAYER_MEDIA.HTML5_PLAYER),
            e === CHROMECAST_ACTIONS.STOP.STOP_CURRENT_PLAYING && t.stop()
        }
        this.oChromecastSession && (e === CHROMECAST_ACTIONS.STOP.STOP_CURRENT_PLAYING && this.oChromecastSession.endSession(!0),
        this.oChromecastSession = !1),
        this.chromecasttimer && clearInterval(this.chromecasttimer),
        this.sChromecastSessionId && (this.sChromecastSessionId = null),
        this.toggleChromecastCurrentStatus(CHROMECAST_STATUS.STOPPED),
        this.closeChromecastConfirm(),
        this.savePreference(),
        this.updateBtVisibity(),
        this.redraw()
    },
    drawChromecastConfirm: function(e, t, i) {
        console.log("Chrome Cast drawChromecastConfirm :", e),
        this.closeChromecastConfirm();
        var s = this;
        this.$confirm = this.createElt("div", "confirm-box centered-box"),
        this.appendToVideoDiv(this.$confirm);
        var r = this.createElt("div", "centered-box-cont");
        this.$confirm.appendChild(r);
        var o = this.createElt("p", "confirm-box-text");
        o.innerHTML = s.getHTML(s.createIconSpan("chromecast")) + " <span>" + e + "</span>",
        r.appendChild(o);
        var n = this.createElt("div", "confirm-box-choice");
        r.appendChild(n);
        var a = this.createElt("span", "confirm-box-btn");
        a.innerHTML = this.getHTML(this.createIconSpan("close")) + " " + this.i18n.__("misc.no"),
        a.addEventListener("click", function(e) {
            console.log("Confirm NO Click"),
            e.stopPropagation(),
            e.preventDefault(),
            "function" == typeof i && i(),
            s.closeChromecastConfirm()
        }),
        n.appendChild(a);
        var l = this.createElt("span", "confirm-box-btn");
        l.innerHTML = this.getHTML(this.createIconSpan("check")) + " " + this.i18n.__("misc.yes"),
        l.addEventListener("click", function(e) {
            console.log("Confirm YES Click"),
            e.stopPropagation(),
            e.preventDefault(),
            "function" == typeof t && t(),
            s.closeChromecastConfirm()
        }),
        n.appendChild(l)
    },
    closeChromecastConfirm: function() {
        this.$confirm && (console.log("Chrome Cast closeChromecastConfirm"),
        this.$confirm.parentNode.removeChild(this.$confirm),
        this.$confirm = null)
    },
    toggleChromecastCurrentStatus: function(e) {
        if (!this.getChromecastStatusName(e))
            return void console.error("Chromecast : toggleChromecastCurrentStatus", "trying to set a unknown status", e);
        this.sChromecastCurrentStatus = e,
        this.updateCurrentChromecastName()
    },
    getChromecastStatusName: function(e) {
        for (var t in CHROMECAST_STATUS)
            if (CHROMECAST_STATUS[t] === e)
                return t;
        return null
    },
    isCurCCastStatSessionConnecting: function() {
        return this.sChromecastCurrentStatus === CHROMECAST_STATUS.CONNECTING_SESSION
    },
    isCurCCastStatMediaConnecting: function() {
        return this.sChromecastCurrentStatus === CHROMECAST_STATUS.CONNECTING_MEDIA
    },
    isCurCCastStatConnecting: function() {
        return this.isCurCCastStatSessionConnecting() || this.isCurCCastStatMediaConnecting()
    },
    isCurCCastStatAnyLoading: function() {
        return this.isCurCCastStatConnecting() || this.sChromecastCurrentStatus === CHROMECAST_STATUS.BUFFERING
    },
    isCurCCastStatMediaWorking: function() {
        return this.sChromecastCurrentStatus === CHROMECAST_STATUS.PLAYING || this.sChromecastCurrentStatus === CHROMECAST_STATUS.BUFFERING || this.sChromecastCurrentStatus === CHROMECAST_STATUS.PAUSED
    },
    isCurCCastStatStopped: function() {
        return this.sChromecastCurrentStatus === CHROMECAST_STATUS.STOPPED
    },
    initAirPlay: function() {
        if (console.log("AirPlay --- initAirPlay --- START --- start init"),
        this.bIsAirPlayInit)
            return void console.log("AirPlay --- initAirPlay --- RETURN --- already initiated");
        if ((this.is_ios || this.is_ipad || this.is_ios_desktop_mode || this.is_new_ios_desktop_mode || this.is_new_iphone || this.is_safari) && !this.use_browser_controls) {
            if (!window.WebKitPlaybackTargetAvailabilityEvent)
                return void console.log("AirPlay --- initAirPlay --- RETURN --- WebKitPlaybackTargetAvailabilityEvent NOT available");
            if ("function" != typeof this.video.webkitShowPlaybackTargetPicker)
                return void console.log("AirPlay --- initAirPlay --- RETURN --- webkitShowPlaybackTargetPicker NOT available");
            console.log("AirPlay --- initAirPlay"),
            this.bIsAirPlayInit = !0,
            this.initAirPlayLimitation(),
            this.drawAirPlayControls(),
            this.initAirPlayEvents()
        }
    },
    initAirPlayLimitation: function() {
        if (!this.bIsAirPlayLimitationInit) {
            this.bIsAirPlayLimitationInit = !0,
            this.airPlayLimitationScan(document.documentElement || document.body);
            var e = this;
            console.log("AirPlay --- initAirPlayLimitation");
            new MutationObserver(function(t) {
                t.forEach(function(t) {
                    if ("childList" === t.type)
                        for (var i = 0; i < t.addedNodes.length; i++) {
                            var s = t.addedNodes[i];
                            1 === s.nodeType && e.airPlayLimitationScan(s)
                        }
                    else
                        "attributes" === t.type && 1 === t.target.nodeType && e.airPlayLimitationScan(t.target)
                })
            }
            ).observe(document.documentElement || document.body, {
                childList: !0,
                subtree: !0
            })
        }
    },
    airPlayLimitationScan: function(e, t) {
        if (!this.bIsAirPlayInit)
            return void console.log("AirPlay --- airPlayLimitationScan --- RETURN --- not initiated");
        if (!e || "function" != typeof e.querySelectorAll)
            return void console.log("AirPlay --- airPlayLimitationScan --- RETURN --- $node not a NODE", e);
        var i = this;
        if (e.querySelectorAll("video").forEach(function(e) {
            1 === e.nodeType && i.airPlayLimitationScan(e)
        }),
        "VIDEO" === e.tagName && (t || !e.getAttribute("data-airplay-limit-init"))) {
            if (e.setAttribute("data-airplay-limit-init", "ok"),
            e === this.video)
                return void e.setAttribute("x-webkit-airplay", "allow");
            if (this.show_endroll_ads_airplay && !this.muted)
                for (var s = e.parentNode; s; ) {
                    if (s === this.$videoDiv)
                        return void e.setAttribute("x-webkit-airplay", "allow");
                    s = s.parentNode
                }
            e.setAttribute("x-webkit-airplay", "deny")
        }
    },
    drawAirPlayControls: function() {
        console.log("AirPlay --- drawAirPlayControls"),
        this.$airPlayBt = this.createElt("div", "big-button airplay-button cast-button"),
        this.$topRightButtonsDiv.prepend(this.$airPlayBt),
        this.$airPlayBtIcon = this.createIconSpan("airplay", "player.airplay"),
        this.$airPlayBt.appendChild(this.$airPlayBtIcon),
        this.drawCastControls(CAST_MODE.AIRPLAY)
    },
    initAirPlayEvents: function() {
        var e = this;
        console.log("AirPlay --- initAirPlayEvents"),
        this.video.addEventListener("webkitplaybacktargetavailabilitychanged", function(t) {
            console.log("AirPlay --- ON EVENT --- Playback Target Availability Changed", t),
            "available" === t.availability && (e.bIsAirPlayAvailable = !0),
            "not-available" === t.availability && (e.bIsAirPlayAvailable = !1)
        }),
        this.video.addEventListener("webkitcurrentplaybacktargetiswirelesschanged", function(t) {
            e.bIsAirPlayActive = e.video.webkitCurrentPlaybackTargetIsWireless,
            e.bIsAirPlayActive ? (console.log("AirPlay --- ON EVENT --- Current Playback Target is Wireless Changed --- ACTIVATED", t),
            e.isPlaying && e.video.muted && (console.log("AirPlay --- ON EVENT --- video is muted, force mute on AirPlay too"),
            e.unmute(!1),
            e.mute(!1))) : console.log("AirPlay --- ON EVENT --- Current Playback Target is Wireless Changed --- DISABLED", t)
        }),
        this.$airPlayBt.addEventListener("click", function() {
            e.promptAirPlayTarget()
        })
    },
    promptAirPlayTarget: function() {
        this.isAirPlayAvailable() && (console.log("AirPlay --- promptAirPlayTarget --- TRY webkitShowPlaybackTargetPicker"),
        this.video.webkitShowPlaybackTargetPicker())
    },
    isAirPlayAvailable: function() {
        return this.bIsAirPlayAvailable
    },
    isAirPlayActive: function() {
        return this.bIsAirPlayActive
    },
    setLQ: function() {
        this.bForceLq || (this.loadPreference(),
        this.bForceLQ = !0,
        this.savePreference(),
        this.loadVideoSrc())
    },
    setHQ: function() {
        this.bForceLQ && (this.loadPreference(),
        this.bForceLQ = !1,
        this.savePreference(),
        this.loadVideoSrc())
    },
    setForceNoLoop: function(e) {
        this.loadPreference(),
        this.force_no_loop = e,
        this.savePreference()
    },
    toggleForceNativePlayer: function(e) {
        if (this.areCookiesFeatureDisabled())
            return void this.closeMenuAndShowTooltip();
        this.bForceNativePlayer ? (e && e.setChecked(!1),
        this.setForceNativePlayer(!1)) : (e && e.setChecked(!0),
        this.setForceNativePlayer(!0))
    },
    setForceNativePlayer: function(e) {
        this.loadPreference(),
        this.bForceNativePlayer = e,
        this.savePreference(),
        this.reinitPlayer()
    },
    isShortVideo: function() {
        var e = this.getVideoDuration();
        return e && e <= 90
    },
    enableWakeLock: function() {
        if (this.wakelock_available) {
            var e = this;
            this.wakelock_active = !0,
            navigator.wakeLock.request("screen").then(function(t) {
                e.wakelock = t
            }),
            this.added_listener || (this.added_listener = !0,
            document.addEventListener("visibilitychange", function() {
                "visible" === document.visibilityState && e.wakelock_active && e.enableWakeLock()
            }))
        }
    },
    disableWakeLock: function() {
        if (this.wakelock_available && this.wakelock) {
            var e = this;
            this.wakelock.release().then(function() {
                e.wakelock_active = !1,
                e.wakelock = null
            })
        }
    },
    fullscreen: function() {
        if (console.log("this.isFullScreen: " + this.isFullScreen),
        !this.fullscreenSupported())
            return this.is_android_app ? (this.isFakeFullScreen ? (this.removeClass(this.$globalDiv, "fakefullscreen"),
            this.isFakeFullScreen = !1,
            this.$globalDivOriginalParentNode.appendChild(this.$globalDiv)) : (this.addClass(this.$globalDiv, "fakefullscreen"),
            this.isFakeFullScreen = !0,
            document.body.appendChild(this.$globalDiv)),
            this.isPlaying && this.play(),
            void this.toggleFullscreen()) : void this.toggleFullscreeniOS();
        document.fullscreenElement || document.msFullscreenElement || document.mozFullScreenElement || document.webkitFullscreenElement ? document.cancelFullScreen ? document.cancelFullScreen() : document.mozCancelFullScreen ? document.mozCancelFullScreen() : document.webkitCancelFullScreen ? document.webkitCancelFullScreen() : document.msExitFullscreen && document.msExitFullscreen() : this.$videoDiv.requestFullscreen ? this.$videoDiv.requestFullscreen() : this.$videoDiv.mozRequestFullScreen ? this.$videoDiv.mozRequestFullScreen() : this.$videoDiv.webkitRequestFullscreen ? this.$videoDiv.webkitRequestFullscreen(Element.ALLOW_KEYBOARD_INPUT) : this.$videoDiv.msRequestFullscreen ? this.$videoDiv.msRequestFullscreen() : alert("Not supported"),
        this.toggleFullscreen()
    },
    hasFullscreenElement: function() {
        return !!this.isFakeFullScreen || !!(document.fullscreenElement || document.webkitFullscreenElement || document.mozFullScreenElement || document.msFullscreenElement)
    },
    toggleFullscreen: function() {
        var e = this.hasFullscreenElement();
        if (e !== this.isFullScreen) {
            if (e && !this.isFullScreen)
                if (this.fullscreen_asked = (new Date).getTime(),
                this.$videoDiv.style.height = "100%",
                this.use_hlsjs && !this.desktop_view && this.video.videoHeight && window.screen.orientation) {
                    var t = this.video.videoWidth / this.video.videoHeight;
                    console.log("Video ratio", t),
                    t > 1.3 && (window.screen.orientation.lock("landscape"),
                    this.is_android_app && (console.log("AndroidInterface.message('HORIZ')"),
                    "undefined" != typeof AndroidInterface && AndroidInterface.message("HORIZ"))),
                    t < .9 && (window.screen.orientation.lock("portrait"),
                    this.is_android_app && (console.log("AndroidInterface.message('VERT')"),
                    "undefined" != typeof AndroidInterface && AndroidInterface.message("VERT")))
                } else
                    this.is_android_app && (console.log("AndroidInterface.message('UNKOWN')"),
                    "undefined" != typeof AndroidInterface && AndroidInterface.message("UNKOWN"));
            else
                this.$videoDiv.style.height = "",
                this.is_android_app && (console.log("AndroidInterface.message('OFF')"),
                "undefined" != typeof AndroidInterface && AndroidInterface.message("OFF"));
            this.isFullScreen = e,
            this.updateBtVisibity(),
            this.redraw(),
            this.send_debug_event("fullscreen"),
            this.redrawtimer && clearTimeout(this.redrawtimer);
            var i = this;
            this.redrawtimer = setTimeout(function() {
                i.redrawtimer = !1,
                i.redraw()
            }, 100)
        }
    },
    toggleFullscreeniOS: function(e) {
        this.isFullscreeniOSSupported() && (this.isiOSFullScreen = "boolean" == typeof e ? e : !this.isiOSFullScreen,
        this.isiOSFullScreen ? this.video.webkitEnterFullscreen() : this.video.webkitExitFullscreen())
    },
    isFullscreeniOSSupported: function() {
        if ("boolean" == typeof this.bFullscreeniOSSupported)
            return this.bFullscreeniOSSupported;
        var e = document.createElement("video");
        return this.bFullscreeniOSSupported = !1,
        e.webkitEnterFullscreen && (this.bFullscreeniOSSupported = !0,
        this.initFullscreeniOSEvents()),
        this.bFullscreeniOSSupported
    },
    initFullscreeniOSEvents: function() {
        if (!this.bFullscreeniOSEventsSet) {
            this.bFullscreeniOSEventsSet = !0;
            var e = this;
            this.video.addEventListener("webkitbeginfullscreen", function() {
                e.isiOSFullScreen = !0,
                xv.console.log("iOS Video Fullscreen Enter")
            }),
            this.video.addEventListener("webkitendfullscreen", function() {
                e.isiOSFullScreen = !1,
                xv.console.log("iOS Video Fullscreen Exit")
            })
        }
    },
    fullscreenSupported: function() {
        if (this.is_android_app)
            return !1;
        var e = document.createElement("div");
        return !!e.requestFullscreen || (!!e.mozRequestFullScreen || (!!e.webkitRequestFullscreen || !!e.msRequestFullscreen))
    },
    fullscreenAllowed: function() {
        return !!(document.fullscreenEnabled || document.webkitFullscreenEnabled || document.mozFullScreenEnabled || document.msFullscreenEnabled)
    },
    toggleAutoplaySetting: function() {
        if (this.areCookiesFeatureDisabled())
            return void console.log("toggleAutoplaySetting => RETURN !areCookiesFeatureDisabled");
        this.loadPreference(),
        "undefined" == typeof this.use_autoplay_setting ? this.use_autoplay_setting = this.use_autoplay : this.use_autoplay_setting = !this.use_autoplay_setting,
        this.setAutoplayToggleBtn(this.useAutoplay()),
        this.savePreference()
    },
    enablePlayerPreferencesFeature: function() {
        console.log("enable player preferences feature"),
        xv.disclaimer.setPendingFeatureToggle(S_F_COOKIES_PLAYER_PREFERENCES, !0),
        xv.disclaimer.callNextPendingFeatureToggle()
    },
    createAutoplayToggleBtn: function() {
        var e = this;
        this.$autoplayBarBt = this.createElt("div", "autoplay-btn"),
        this.$autoplayBarBt.setAttribute("id", "anc-tst-autoplay-btn"),
        this.$autoplayBarBtPic = document.createElement("div"),
        this.$autoplayBarBtPic.className = "autoplay-bar-bt";
        var t = document.createElement("div");
        t.className = "toggle-background-bar";
        var i = document.createElement("div");
        i.className = "toggle-circle",
        this.$autoplayToggleIcon = document.createElement("span"),
        this.$autoplayToggleIcon.className = "player-icon-f pif-play",
        this.setAutoplayToggleBtn(this.useAutoplay()),
        this.setAutoplayToggleBtnDisabled(this.areCookiesFeatureDisabled()),
        i.appendChild(this.$autoplayToggleIcon),
        this.$autoplayBarBtPic.appendChild(t),
        this.$autoplayBarBtPic.appendChild(i),
        this.$autoplayBarBt.appendChild(this.$autoplayBarBtPic);
        var s = {
            iPosition: this.desktop_view ? 1 : 4
        }
          , r = this.desktop_view ? this.$rightButtonsBar : this.$topRightButtonsDiv;
        r && r.appendChild(this.$autoplayBarBt),
        this.$autoplayBarBt.addEventListener("click", function(t) {
            if (console.log("$autoplayBarBt click"),
            t.stopPropagation(),
            e.allClickEvents(t),
            e.setAutoplayToggleBtnDisabled(e.areCookiesFeatureDisabled()),
            e.bAutoPlayBtnDisabled) {
                var i = e.$autoplayBarBt.offsetWidth;
                return i && (s.iSideMargin = i / 2),
                console.log("bAutoPlayBtnDisabled => showPreferencesWarningTooltip"),
                void e.showPreferencesWarningTooltip(e.$autoplayBarBt, s)
            }
            e.toggleAutoplaySetting(),
            e.showInfos(!0)
        }, !1),
        this.setupButtonBarEvents(this.$autoplayBarBt, !0, !0),
        "object" == typeof xv.disclaimer && document.addEventListener(xv.disclaimer.EVENT.CLOSE_ALL_POP, function() {
            e.setAutoplayToggleBtnDisabled(e.areCookiesFeatureDisabled())
        })
    },
    closeMenuAndShowTooltip: function() {
        var e = this.$paramsBarBt
          , t = {
            iPosition: 2
        };
        if (!this.desktop_view && (t.iPosition = 4,
        e)) {
            var i = e.offsetWidth;
            i && (t.iSideMargin = i / 2)
        }
        e || (e = this.$leftButtonsBar,
        t.iPosition = 1,
        t.iSideMargin = 20),
        this.showPreferencesWarningTooltip(e, t),
        this.bShowParametersMenu = !1,
        this.bShowQualitiesMenu = !1,
        this.bShowAdvancedMenu = !1,
        this.bShowSpeedMenu = !1,
        this.showInfos(!0)
    },
    showPreferencesWarningTooltip: function(e, t) {
        t = "object" == typeof t ? t : {},
        t.$relativeTo = e,
        t.sText = '<span class="pl-tooltip-link">' + this.i18n.__("player.click_here_to_update_cookies", {
            "%icon%": this.getHTML(this.createIconSpan("save"))
        }) + "</span>",
        t.iPosition = "number" == typeof t.iPosition ? t.iPosition : 2;
        var i = this;
        t.onClick = function() {
            i.enablePlayerPreferencesFeature(),
            i.setAutoplayToggleBtnDisabled(!1),
            setTimeout(function() {
                i.savePreference()
            }, 1e3)
        }
        ,
        this.showTooltip(t)
    },
    gdprApplies: function() {
        if (xv && xv.conf && xv.conf.dyn)
            return !0 === xv.conf.dyn.gdpra
    },
    getGdprConsent: function() {
        try {
            var e = -1 === xv.conf.dyn.disfeats.indexOf("ca")
              , t = xv.disclaimer.getConsentString(e);
            return console.log("consent", e, "string", t),
            t
        } catch (i) {
            return void console.log("consent failed to load", i)
        }
    },
    showTooltip: function(e) {
        var t = this;
        if (!e.$relativeTo)
            return void console.error("showTooltip : $relativeTo is missing");
        if (!e.sText)
            return void console.error("showTooltip : sText is missing");
        if (e.iPosition || (e.iPosition = 1),
        e.iPosition < 1 || e.iPosition > 4)
            return void console.error("showTooltip : iPosition is invalid");
        e.iDuration || (e.iDuration = 2900),
        e.iSideMargin || (e.iSideMargin = 0),
        e.iSideMarginMobile || (e.iSideMarginMobile = 0),
        e.sSideMarginUnit || (e.sSideMarginUnit = "px"),
        e.iFadeDuration || (e.iFadeDuration = 150),
        e.onClick || (e.onClick = function() {}
        ),
        e.bCloseOnClick || (e.bCloseOnClick = !0),
        e.iMaxScreenWidth || (e.iMaxScreenWidth = 100);
        var i = {
            1: "top-left",
            2: "top-right",
            3: "bottom-left",
            4: "bottom-right"
        }[e.iPosition]
          , s = document.createElement("div");
        s.className = "pl-tooltip",
        s.classList.add("pl-tooltip-" + i),
        s.style.transition = "opacity " + e.iFadeDuration + "ms",
        e.iSideMargin && (1 !== e.iPosition && 3 !== e.iPosition || (s.style.marginLeft = e.iSideMargin + e.sSideMarginUnit),
        2 !== e.iPosition && 4 !== e.iPosition || (s.style.marginRight = e.iSideMargin + e.sSideMarginUnit)),
        e.iSideMarginMobile && window.innerWidth < 600 && (1 !== e.iPosition && 3 !== e.iPosition || (s.style.marginLeft = e.iSideMarginMobile + e.sSideMarginUnit),
        2 !== e.iPosition && 4 !== e.iPosition || (s.style.marginRight = e.iSideMarginMobile + e.sSideMarginUnit));
        var r = document.createElement("div");
        r.className = "pl-tooltip-text",
        r.innerHTML = e.sText;
        var o = document.createElement("div");
        if (o.className = "pl-tooltip-arrow",
        e.iMaxScreenWidth) {
            var n = window.innerWidth * e.iMaxScreenWidth / 100;
            s.style.width = window.innerWidth + "px",
            r.style.maxWidth = n + "px"
        }
        s.appendChild(r),
        s.appendChild(o);
        var a = window.getComputedStyle(e.$relativeTo);
        "absolute" !== a.position && "relative" !== a.position && (e.$relativeTo.style.position = "relative");
        var l = !1
          , d = function() {
            l || (l = !0,
            s.classList.add("pl-tooltip-fadeout"),
            setTimeout(function() {
                s.remove()
            }, e.iFadeDuration))
        };
        s.addEventListener("click", function(i) {
            i.stopPropagation(),
            t.allClickEvents(i),
            e.bCloseOnClick && d(),
            e.onClick()
        }),
        s.classList.add("pl-tooltip-fadeout"),
        setTimeout(function() {
            s.classList.remove("pl-tooltip-fadeout"),
            setTimeout(function() {
                d()
            }, e.iDuration),
            document.addEventListener("click", function(e) {
                d()
            })
        }, 10),
        e.$relativeTo.appendChild(s)
    },
    setAutoplayToggleBtn: function(e) {
        e ? (this.addClass(this.$autoplayBarBtPic, "autoplay-on"),
        this.addClass(this.$autoplayToggleIcon, "pif-play"),
        this.removeClass(this.$autoplayToggleIcon, "pif-pause")) : (this.removeClass(this.$autoplayBarBtPic, "autoplay-on"),
        this.addClass(this.$autoplayToggleIcon, "pif-pause"),
        this.removeClass(this.$autoplayToggleIcon, "pif-play"))
    },
    setAutoplayToggleBtnDisabled: function(e) {
        if (this.$autoplayBarBt) {
            if (e ? (this.$autoplayBarBt.setAttribute("disabled", ""),
            this.bAutoPlayBtnDisabled = !0) : (this.$autoplayBarBt.removeAttribute("disabled"),
            this.bAutoPlayBtnDisabled = !1),
            e)
                var t = this.i18n.__("player.cookie_feature_disabled");
            else
                var t = this.i18n.__("player.autoplay_setting");
            this.$autoplayBarBt.title = this.getDecodedTitle(t)
        }
    },
    getDecodedTitle: function(e) {
        var t = document.createElement("textarea");
        return t.innerHTML = e,
        t.value
    },
    hideSponsor: function(e) {
        if (this.showsponsor) {
            if (e)
                return this.showsponsor = !1,
                void this.updateBtVisibity();
            var t = this.getVideoDuration();
            t && (this.getVideoCurrentTime() < .1 * t || (this.showsponsor = !1,
            this.updateBtVisibity()))
        }
    },
    showVideoControls: function() {
        console.log("showVideoContols() : Showing controls"),
        this.video.className = "",
        this.video.controls = "controls",
        this.showbigthumb = !1
    },
    hideVideoControls: function() {
        console.log("hideVideoControls() : Hide controls"),
        this.video.className = "ios_player",
        this.video.controls = !1
    },
    loadVideoSrc: function() {
        if (this.saveNeedSeek(),
        xv.console.log("loadVideoSrc() Setting video player", "Player"),
        this.use_hlsjs)
            return void this.initHls();
        if (this.use_native_hls)
            return console.log("Use native HLS", this.sUrlHls),
            this.video.src = this.sUrlHls,
            console.log("loadVideoSrc() : is_ios", this.is_ios),
            void (this.is_ios && this.video.load());
        var e = this.sUrlHigh;
        e || (e = this.sUrlLow),
        this.bForceLQ && (e = this.sUrlLow),
        console.log("Use HTML5 MP4", e),
        this.video.src = e,
        console.log("loadVideoSrc() : is_ios", this.is_ios),
        this.is_ios && this.video.load()
    },
    saveNeedSeek: function() {
        var e = this.getVideoCurrentTime();
        e && (this.iPendingSeek = e,
        this.isPlaying || this.bIsBuffering && !this.video.paused ? this.bSeekWasPlaying = !0 : this.bSeekWasPlaying = !1,
        console.log("saveNeedSeek at " + this.iPendingSeek + " (was playing " + this.bSeekWasPlaying + ")"))
    },
    checkNeedSeek: function() {
        this.iPendingSeek && (this.bSeekWasPlaying ? (console.log("seekNeed detected to ", this.iPendingSeek, " and play needed"),
        this.video.play()) : (console.log("seekNeed detected to ", this.iPendingSeek),
        this.video.pause()),
        this.setVideoCurrentTime(this.iPendingSeek),
        this.iPendingSeek = 0)
    },
    cursorOverProgressBar: function() {
        this.cursoroverprogressbartimer && (clearTimeout(this.cursoroverprogressbartimer),
        this.cursoroverprogressbartimer = !1),
        this.cursoroverprogressbar = !0,
        this.redraw()
    },
    cursorLeaveProgressBar: function() {
        var e = this;
        this.cursoroverprogressbartimer || (this.cursoroverprogressbartimer = setTimeout(function() {
            e.bShowParametersMenu = !1,
            e.bShowQualitiesMenu = !1,
            e.bShowQualitiesAdvancedMenu = !1,
            e.bShowSpeedMenu = !1,
            e.bShowAdvancedMenu = !1,
            e.cursoroverprogressbar = !1,
            e.updateBtVisibity(),
            e.redraw()
        }, 2e3))
    },
    showBigProgressBar: function() {
        if (this.use_browser_controls)
            return !1;
        if (this.isAirPlayActive())
            return !1;
        if (this.cursoroverprogressbar)
            return !0;
        if (this.video.ended)
            return !0;
        if (this.desktop_view) {
            if (this.allow_showInfos || this.video.paused || !this.canPlay || this.bIsBuffering)
                return !0;
            if (!this.bPlayClicked)
                return !0
        } else if (this.allow_showInfos || this.video.paused || !this.canPlay || this.bIsBuffering)
            return !0;
        return !1
    },
    computeThumbSlideType: function() {
        if (!this.thumb_slide_big)
            return void (this.thumb_slide_type = HTML5Player.TYPE_SMALL);
        if (this.use_native_hls)
            return this.thumb_slide_min && this.desktop_view ? void (this.thumb_slide_type = HTML5Player.TYPE_MINUTE) : void (this.thumb_slide_type = HTML5Player.TYPE_FULL);
        if (!this.use_hlsjs)
            return void (this.thumb_slide ? this.thumb_slide_type = HTML5Player.TYPE_SMALL : this.thumb_slide_type = HTML5Player.TYPE_FULL);
        if (!this.desktop_view)
            return void (this.thumb_slide_type = HTML5Player.TYPE_FULL);
        if (!this.thumb_slide_min)
            return void (this.thumb_slide_type = HTML5Player.TYPE_FULL);
        var e = this.get_networkspeed();
        return e ? e < 6e3 ? void (this.thumb_slide_type = HTML5Player.TYPE_FULL) : void (this.thumb_slide_type = HTML5Player.TYPE_MINUTE) : void (this.thumb_slide ? this.thumb_slide_type = HTML5Player.TYPE_SMALL : this.thumb_slide_type = HTML5Player.TYPE_FULL)
    },
    recoverError: function(e) {
        if (console.log("Error recovery", (new Date).getTime(), this.lastErrorRecovery),
        !this.pendingUrlRPCUpdate) {
            if (this.send_debug_event("playerror"),
            this.use_hlsjs && 7 === this.id_cdn_hls && this.sendDebugLogs(),
            !e && (new Date).getTime() - this.lastErrorRecovery < 18e5)
                return console.log("Error recovery. Too fast."),
                this.isPlayError = !0,
                void this.updateBtVisibity();
            this.lastErrorRecovery = (new Date).getTime(),
            this.updateUrlRPC()
        }
    },
    updateUrlRPC: function() {
        var e = this;
        this.pendingUrlRPCUpdate = !0;
        var t = this.id_cdn;
        (this.use_hlsjs || this.use_native_hls) && (t = this.id_cdn_hls),
        xv.console.log("updateUrlRPC try to update URL after a fatal error", "Player");
        var i = createRequestObject();
        i.open("GET", "/html5player/getvideo/" + this.encoded_id_video + "/" + t, !0),
        i.onreadystatechange = function() {
            if (4 === i.readyState) {
                if (e.pendingUrlRPCUpdate = !1,
                e.isPlayError = !1,
                e.updateBtVisibity(),
                200 !== i.status)
                    return e.isPlayError = !0,
                    e.updateBtVisibity(),
                    void console.log("updateUrlRPC error status", i.status);
                try {
                    var t = JSON.parse(i.responseText)
                } catch (s) {
                    return e.isPlayError = !0,
                    e.updateBtVisibity(),
                    void console.log("Url RPC Call bad json")
                }
                e.smartv_tizen_version ? (xv.console.log("updateUrlRPC Tizen detected, remove Hls support", "Player"),
                e.use_hlsjs = !1,
                e.use_native_hls = !1,
                e.sUrlHls = !1,
                e.id_cdn_hls = !1,
                e.hlsobj && (xv.console.log("updateUrlRPC Hls.js object removed", "Player"),
                e.hlsobj.destroy(),
                e.hlsobj = !1)) : e.sUrlHls && t.hls && (e.sUrlHls = t.hls,
                e.id_cdn_hls = t.hls_idcdn,
                xv.console.log("updateUrlRPC update hls " + t.hls, "Player")),
                e.sUrlLow && t.mp4_low && (e.sUrlLow = t.mp4_low,
                e.id_cdn = t.mp4_idcdn,
                xv.console.log("updateUrlRPC mp4 low " + t.mp4_low, "Player")),
                e.sUrlHigh && t.mp4_high && (e.sUrlHigh = t.mp4_high,
                e.id_cdn = t.mp4_idcdn,
                xv.console.log("updateUrlRPC mp4 high " + t.mp4_high, "Player")),
                e.loadVideoSrc()
            }
        }
        ;
        try {
            i.send()
        } catch (s) {
            xv.console.log("updateUrlRPC Call failed", "Player")
        }
    },
    toggleExpand: function() {
        this.isExpanded ? this.isExpanded = !1 : this.isExpanded = !0,
        this.is_premium_site && (this.loadPreference(),
        this.forceExpanded = this.isExpanded,
        this.savePreference()),
        window.xvideos && window.xvideos.player && window.xvideos.player.toggleSize && window.xvideos.player.toggleSize()
    },
    loadPreference: function() {
        if (!this.areCookiesFeatureDisabled()) {
            for (var e = {}, t = 0; t < aPlayerOptions.length; t++)
                e[aPlayerOptions[t]] = this.getPlayerOption(aPlayerOptions[t]);
            console.log("loadPreference", e),
            e[PLAYER_OPTION.FORCEQUALITY] && (this.forcequality = e[PLAYER_OPTION.FORCEQUALITY]),
            !0 === e[PLAYER_OPTION.SQ] && (this.bForceLQ = !0),
            !0 === e[PLAYER_OPTION.MUTE] && (this.bIsCustomMuted = !0,
            this.video && this.mute(!1)),
            this.desktop_view && !this.is_ios_desktop_mode && "undefined" != typeof e[PLAYER_OPTION.VOLUME] && this.video && (this.setVolume(e[PLAYER_OPTION.VOLUME], !1),
            this.iCustomVideoVolume = e[PLAYER_OPTION.VOLUME],
            this.$soundVolumeLvl && (this.$soundVolumeLvl.style.width = Math.round(100 * e[PLAYER_OPTION.VOLUME]) + "%")),
            !0 === e[PLAYER_OPTION.FORCENOPICTURE] && (this.forcenopreviewimg = !0),
            !0 === e[PLAYER_OPTION.FORCENATIVEHLS] && (this.forcenativehls = !0),
            !0 === e[PLAYER_OPTION.CHROMECAST] && (this.bHadChromecastDetected = !0),
            !0 === e[PLAYER_OPTION.AUTOPLAY] && (this.use_autoplay_setting = !0),
            !1 === e[PLAYER_OPTION.AUTOPLAY] && (this.use_autoplay_setting = !1),
            "boolean" != typeof e[PLAYER_OPTION.PLAUTOPLAY] || e[PLAYER_OPTION.PLAUTOPLAY] || (this.bEnablePlAutoPlay = !1),
            !0 === e[PLAYER_OPTION.EXPANDED] && (this.forceExpanded = !0),
            !0 === e[PLAYER_OPTION.FORCENOLOOP] && (this.force_no_loop = !0),
            !0 === e[PLAYER_OPTION.FORCENATIVEPLAYER] && (this.bForceNativePlayer = !0)
        }
    },
    areCookiesFeatureDisabled: function() {
        return !(xv && xv.conf && xv.conf.dyn && xv.conf.dyn.disfeats && "function" == typeof xv.conf.dyn.disfeats.indexOf) || -1 !== xv.conf.dyn.disfeats.indexOf(S_F_COOKIES_PLAYER_PREFERENCES)
    },
    savePreference: function(e) {
        console.log("savePreference", e),
        e || this.areCookiesFeatureDisabled() && this.closeMenuAndShowTooltip();
        var t = this
          , i = function() {
            console.log("savePreference - fnInit"),
            t.is_embed || xv.disclaimer.bIsOpen || t.areCookiesFeatureDisabled() || (t.video && (t.bIsCustomMuted = t.video.muted),
            t.setPlayerOption(PLAYER_OPTION.FORCEQUALITY, t.forcequality),
            t.setPlayerOption(PLAYER_OPTION.SQ, t.bForceLQ),
            t.setPlayerOption(PLAYER_OPTION.MUTE, t.bIsCustomMuted),
            ("undefined" != typeof t.iCustomVideoVolume || t.bIsCustomMuted) && t.setPlayerOption(PLAYER_OPTION.VOLUME, t.iCustomVideoVolume),
            t.setPlayerOption(PLAYER_OPTION.FORCENOPICTURE, t.forcenopreviewimg),
            t.setPlayerOption(PLAYER_OPTION.FORCENATIVEHLS, t.forcenativehls),
            t.setPlayerOption(PLAYER_OPTION.AUTOPLAY, t.use_autoplay_setting),
            t.setPlayerOption(PLAYER_OPTION.PLAUTOPLAY, t.bEnablePlAutoPlay),
            t.setPlayerOption(PLAYER_OPTION.CHROMECAST, t.bChromecastDetected),
            t.setPlayerOption(PLAYER_OPTION.EXPANDED, t.forceExpanded),
            t.setPlayerOption(PLAYER_OPTION.FORCENOLOOP, t.force_no_loop),
            t.setPlayerOption(PLAYER_OPTION.FORCENATIVEPLAYER, t.bForceNativePlayer))
        };
        i(),
        "object" == typeof xv.disclaimer && document.addEventListener(xv.disclaimer.EVENT.CLOSE_ALL_POP, i)
    },
    hasCustomVolume: function() {
        return "undefined" != typeof this.iCustomVideoVolume || this.bIsCustomMuted
    },
    save_networkspeed: function(e) {
        this.setLocalStorage("html5_networkspeed", e)
    },
    get_networkspeed: function() {
        var e = this.getLocalStorage("html5_networkspeed");
        return e || !1
    },
    write_plfullscreen_cookie: function(e) {},
    write_cookie: function(e, t, i) {
        if (!i) {
            var s = new Date;
            s.setTime(s.getTime()),
            i = new Date(s.getTime() + 6048e5)
        }
        xv && xv.cookies && xv.cookies.setSafe ? xv.cookies.setSafe(e, t, i) : document.cookie = e + "=" + escape(t) + ";expires=" + i.toGMTString() + ";path=/"
    },
    erase_cookie: function(e) {
        xv && xv.cookies && xv.cookies.remove ? xv.cookies.remove(e) : this.write_cookie(e, "", new Date(0))
    },
    get_cookie: function(e) {
        if (xv && xv.cookies && xv.cookies.getSafe)
            return xv.cookies.getSafe(e);
        var t, i, s, r = document.cookie.split(";");
        for (t = 0; t < r.length; t++)
            if (i = r[t].substring(0, r[t].indexOf("=")),
            s = r[t].substring(r[t].indexOf("=") + 1),
            (i = i.replace(/^\s+|\s+$/g, "")) === e)
                return unescape(s);
        return null
    },
    isCookieSet: function(e) {
        for (var t = document.cookie.split(";"), i = 0; i < t.length; i++) {
            if (t[i].split("=")[0].trim() === e)
                return !0
        }
        return !1
    },
    check_speed_stats: function() {
        if (!this.fragStatsSended) {
            var e = 0
              , t = 0;
            for (var i in this.fragStats)
                -1 !== this.fragStats[i][2] && (e++,
                t += this.fragStats[i][2]);
            if (e < 5)
                return void console.log("Not enought stats");
            var s = Math.floor(t / e);
            xv.console.log("check_speed_stats Network speed " + s + " Kb/s", "Player"),
            this.save_networkspeed(s),
            this.send_debug_event("network_speed", s),
            this.fragStatsSended = !0
        }
    },
    preloadMozaiqueMinThumbOnStart: function() {
        console.log("preloadMozaiqueMinThumbOnStart");
        var e = this.getVideoDuration();
        if (!e)
            return void console.log("preloadMozaiqueMinThumbOnStart No duration");
        console.log("preloadMozaiqueMinThumbOnStart start preloading");
        var t = Math.floor(e / 60) - 1;
        t < 1 && (t = 1),
        t > 10 && (t = 10);
        for (var i = 0; i < t; i++)
            this.preloadMozaiqueMinThumb(i)
    },
    preloadMozaiqueMinThumb: function(e) {
        if ("undefined" == typeof this.oThumbSlideMinPreload[e]) {
            this.oThumbSlideMinPreload[e] = 1,
            console.log("start preloading thumb min " + e);
            var t = createRequestObject();
            t.open("GET", this.thumb_slide_min.replace("NUM", e), !0),
            t.onreadystatechange = function() {
                4 === t.readyState && t.status
            }
            ,
            t.send()
        }
    },
    send_debug_event: function(e, t) {
        if (!this.is_embed) {
            if ("loaded" === e) {
                if (this.debug_events.loaded)
                    return;
                this.debug_events.loaded = !0
            } else if ("playing" === e) {
                if (this.debug_events.playing)
                    return;
                this.debug_events.playing = !0
            } else if ("fullscreen" === e) {
                if (this.debug_events.fullscreen)
                    return;
                this.debug_events.fullscreen = !0
            } else if ("playerror" === e) {
                if (this.debug_events.playerror)
                    return;
                this.debug_events.playerror = !0
            } else if ("devicespeed" === e) {
                if (this.debug_events.devicespeed)
                    return;
                if (this.debug_events.devicespeed = !0,
                Math.random() < .8)
                    return
            } else if ("network_speed" === e) {
                if (this.debug_events.network_speed)
                    return;
                this.debug_events.network_speed = !0
            } else if ("many_errors" === e) {
                if (this.debug_events.many_errors)
                    return;
                this.debug_events.many_errors = !0
            } else if ("fakeplayerloaded" === e) {
                if (this.debug_events.fakeplayerloaded)
                    return;
                this.debug_events.fakeplayerloaded = !0
            } else if ("buffer_blocked" === e) {
                if (this.debug_events.buffer_blocked)
                    return;
                this.debug_events.buffer_blocked = !0,
                this.sendJsDebug()
            } else if ("buffer_timeout" === e) {
                if (this.debug_events.buffer_timeout)
                    return;
                this.debug_events.buffer_timeout = !0
            } else if ("buffer_duration" === e) {
                if (this.debug_events.buffer_duration)
                    return;
                this.debug_events.buffer_duration = !0
            }
            "loaded" !== e && "fakeplayerloaded" !== e || !this.is_premium_video || (t = "p");
            var i = this.id_cdn;
            if (this.use_hlsjs && (e = "hls_" + e,
            i = this.id_cdn_hls),
            this.use_native_hls && (e = "hlsnative_" + e,
            i = this.id_cdn_hls),
            "hls_devicespeed" === e && (e = "devicespeed"),
            "hls_fullscreen" !== e) {
                console.log("Send debug event '" + e + "'");
                var s = createRequestObject();
                s.open("GET", "/html5player/" + e + "/" + this.encoded_id_video + "/" + i + "/" + (t || ""), !0),
                "object" == typeof xv.gnct && s.setRequestHeader("Private-Mode", xv.gnct.getStatusString()),
                this.view_data && s.setRequestHeader("X-View-Data", this.view_data),
                s.onreadystatechange = function() {
                    4 === s.readyState && s.status
                }
                ,
                s.send()
            }
        }
    },
    sendJsDebug: function() {
        var e = createRequestObject();
        e.open("POST", "/html5player/jsdebug/" + this.encoded_id_video + "/0", !0),
        e.setRequestHeader("Content-type", "application/x-www-form-urlencoded"),
        e.onreadystatechange = function() {
            4 === e.readyState && e.status
        }
        ,
        e.send("logs=" + encodeURIComponent(this.consolelog))
    },
    storageAvailable: function() {
        try {
            var e = window.localStorage
              , t = "__storage_test__";
            return e.setItem(t, t),
            e.removeItem(t),
            !0
        } catch (i) {
            return !1
        }
    },
    removeLocalStorage: function(e) {
        return !!this.storageAvailable() && (e && PLAYER_OPTION[e] ? (e = this.getPlayerOptionStorageKey(e),
        console.log("removeLocalStorage", e),
        localStorage.removeItem(e),
        !0) : (console.error("removeLocalStorage: Unknown player option key", e),
        !1))
    },
    setPlayerOption: function(e, t, i) {
        if (!this.storageAvailable())
            return !1;
        if (!e || !PLAYER_OPTION[e])
            return console.error("setPlayerOption: Unknown player option key", e),
            !1;
        i || (i = -1),
        e = this.getPlayerOptionStorageKey(e);
        var s = {
            value: t,
            expire: -1 === i ? -1 : (new Date).getTime() / 1e3 + i
        };
        console.log("setPlayerOption", e, s),
        this.setLocalStorage(e, s)
    },
    getPlayerOptionStorageKey: function(e) {
        return "player_" + e.toLowerCase()
    },
    doSafeForOptionOrPrompt: function(e, t, i) {
        if (e = this.getPlayerOptionStorageKey(e),
        "object" != typeof xv || "object" != typeof xv.features || "function" != typeof xv.features.doSafeOrPrompt)
            return void ("function" == typeof i && i());
        xv.features.doSafeOrPrompt(e, t, i)
    },
    setLocalStorage: function(e, t, i) {
        return !!this.storageAvailable() && (i = void 0 !== i && i,
        xv.storage && xv.storage.setSafe ? i ? xv.storage.setSafeOrPrompt(e, t) : xv.storage.setSafe(e, t) : (localStorage.setItem(e, t),
        new Promise(function(e, t) {
            e()
        }
        )))
    },
    getPlayerOption: function(e) {
        if (!this.storageAvailable())
            return undefined;
        if (!e || !PLAYER_OPTION[e])
            return console.error("getPlayerOption: Unknown player option key", e),
            undefined;
        e = this.getPlayerOptionStorageKey(e);
        var t = this.getLocalStorage(e);
        if (!t)
            return undefined;
        var i = t;
        return "object" == typeof t || (i = JSON.parse(t)) ? -1 !== i.expire && i.expire < (new Date).getTime() / 1e3 ? (console.log("Key", e, "expire"),
        localStorage.removeItem(e),
        undefined) : i.value : undefined
    },
    getLocalStorage: function(e, t) {
        return this.storageAvailable() ? (t = void 0 !== t && t,
        xv.storage && xv.storage.getSafe ? t ? xv.storage.getSafeOrPrompt(e) : xv.storage.getSafe(e) : localStorage.getItem(e)) : undefined
    },
    sendPendingDuration: function() {
        var e = (new Date).getTime()
          , t = this.getLocalStorage("durationsend_lock");
        if (t && e - t < 1e4)
            return void console.log("Duration send locked", t, e);
        this.setLocalStorage("durationsend_lock", e);
        for (var i = 0; i < localStorage.length; i++) {
            var s = localStorage.key(i);
            if ("videoreport_" === s.substring(0, 12)) {
                var r = {};
                r.video_id = s.substring(12);
                var o = this.getLocalStorage(s);
                r.cdn_id = 0,
                r.duration = 0,
                r.referer = "",
                r.type = "unknown",
                r.quality = -1,
                r.transfer = -1,
                r.buffer_sec = 0;
                try {
                    var n = o;
                    if ("object" != typeof o && (n = JSON.parse(o)),
                    n.sended) {
                        (new Date).getTime() - n.timestamp > 36e5 && (localStorage.removeItem(s),
                        i--);
                        continue
                    }
                    if (!n.cdn_id || "undefined" == typeof n.duration) {
                        console.log("Duration send: Bad JSON for " + s + " '" + o + "'"),
                        this.setLocalStorage(s, {
                            sended: !0,
                            timestamp: (new Date).getTime()
                        });
                        continue
                    }
                    if ((new Date).getTime() - n.lasthit < 5e3)
                        continue;
                    if (!n.video_id) {
                        console.log("Duration send: Bad JSON for " + s + " '" + o + "'"),
                        this.setLocalStorage(s, {
                            sended: !0,
                            timestamp: (new Date).getTime()
                        });
                        continue
                    }
                    r.video_id = n.video_id,
                    r.cdn_id = n.cdn_id,
                    r.duration = Math.round(n.duration),
                    n.referer && (r.referer = n.referer),
                    n.type && (r.type = n.type),
                    n.quality && (r.quality = Math.round(n.quality)),
                    n.transfer && (r.transfer = Math.round(n.transfer)),
                    n.buffer_sec && (r.buffer_sec = Math.round(n.buffer_sec)),
                    n.ap_sound && (r.ap_sound = n.ap_sound)
                } catch (d) {
                    console.log("Duration send: Unable to unjson " + s + " '" + o + "'"),
                    this.setLocalStorage(s, {
                        sended: !0,
                        timestamp: (new Date).getTime()
                    });
                    continue
                }
                this.setLocalStorage(s, {
                    sended: !0,
                    timestamp: (new Date).getTime()
                }),
                console.log("Sending duration " + r.duration + " for video " + r.video_id);
                var a = btoa(JSON.stringify(r))
                  , l = createRequestObject();
                l.open("GET", "/html5player/play_duration/" + a, !0),
                l.onreadystatechange = function() {
                    4 === l.readyState && l.status
                }
                ,
                l.send()
            }
        }
        localStorage.removeItem("durationsend_lock")
    },
    compute_seekpercent: function(e) {
        var t = this.touch_getPosition(e)
          , i = this.progressbar.getBoundingClientRect();
        return t -= i ? i.left : this.progressbar.offsetLeft,
        1 / this.progressbar.offsetWidth * t
    },
    touch_getPosition: function(e) {
        return "undefined" != typeof e.touches && "undefined" != typeof e.touches[0] && e.touches[0].clientX ? e.touches[0].clientX : "undefined" != typeof e.targetTouches && "undefined" != typeof e.targetTouches[0] && e.targetTouches[0].clientX ? e.targetTouches[0].clientX : e.clientX ? e.clientX : e.pageX ? e.pageX : e.x
    },
    touch_getPositionY: function(e) {
        return "undefined" != typeof e.touches && "undefined" != typeof e.touches[0] && e.touches[0].clientY ? e.touches[0].clientY : "undefined" != typeof e.targetTouches && "undefined" != typeof e.targetTouches[0] && e.targetTouches[0].clientY ? e.targetTouches[0].clientY : e.clientY ? e.clientY : e.pageY ? e.pageY : e.y
    },
    getViewportHeight: function() {
        return "undefined" != typeof window.innerWidth ? window.innerHeight : "undefined" != typeof document.documentElement && "undefined" != typeof document.documentElement.clientWidth && 0 != document.documentElement.clientWidth ? document.documentElement.clientHeight : document.getElementsByTagName("body")[0].clientHeight
    },
    hasFlash: function() {
        if (!this.flashcode_available)
            return !1;
        try {
            if (new ActiveXObject("ShockwaveFlash.ShockwaveFlash"))
                return !0
        } catch (e) {
            if (navigator.mimeTypes && navigator.mimeTypes["application/x-shockwave-flash"] != undefined && navigator.mimeTypes["application/x-shockwave-flash"].enabledPlugin)
                return !0
        }
        return !1
    },
    supportHLSjs: function() {
        if (!this.supportDefaultHlsjs())
            return console.log("supportDefaultHlsjs : false"),
            !1;
        if (/android 4.4./.test(navigator.userAgent.toLowerCase()))
            return console.log("supportHLSjs : false : Android 4.4 detected"),
            !1;
        var e = /chrome\/([0-9]+)\./.exec(navigator.userAgent.toLowerCase());
        return e && parseInt(e[1]) < 46 ? (console.log("supportHLSjs : false : Chrome < 46"),
        !1) : /windows phone 8.0/.test(navigator.userAgent.toLowerCase()) ? (console.log("supportHLSjs : false : Windows Phone 8.0"),
        !1) : (console.log("supportHLSjs : true"),
        !0)
    },
    supportDefaultHlsjs: function() {
        return "undefined" == typeof window.MediaSource || "undefined" == typeof window.MediaSource.isTypeSupported ? (console.log("supportDefaultHlsjs : false | window.MediaSource : ", window.MediaSource, "undefined" != typeof window.MediaSource ? window.MediaSource.isTypeSupported : "no func isTypeSupported"),
        !1) : "undefined" == typeof Hls ? (console.log("supportDefaultHlsjs : false | Hls === 'undefined'"),
        !1) : !!Hls.isSupported() || (console.log("supportDefaultHlsjs : false | !Hls.isSupported()"),
        !1)
    },
    sendDebugLogs: function() {
        this.consolelog
    },
    getPageCategories: function() {
        return "string" == typeof window.wpn_categories ? window.wpn_categories : "object" == typeof xv && "object" == typeof xv.conf && "object" == typeof xv.conf.ads && "string" == typeof xv.conf.ads.categories ? xv.conf.ads.categories : ""
    },
    getPageTags: function() {
        return "string" == typeof window.wpn_keywords ? window.wpn_keywords : "object" == typeof xv && "object" == typeof xv.conf && "object" == typeof xv.conf.ads && "string" == typeof xv.conf.ads.keywords ? xv.conf.ads.keywords : ""
    },
    migrateAutoPlayStorage: function() {
        var e = this;
        return new Promise(function(t) {
            try {
                var i = localStorage.getItem("bLocalStorageAutoNext");
                if (localStorage.removeItem("bLocalStorageAutoNext"),
                null !== i)
                    return e.bEnablePlAutoPlay = "boolean" == typeof i ? i : "false" !== i && ("true" === i || e.bEnablePlAutoPlay),
                    void e.doSafeForOptionOrPrompt(PLAYER_OPTION.PLAUTOPLAY, function() {
                        e.savePreference(),
                        t()
                    }, function() {
                        t()
                    });
                t()
            } catch (s) {
                console.error("Migration error bLocalStorageAutoNext -> player_plautoplay", s),
                t()
            }
        }
        )
    },
    initAutoPlaylistNextState: function() {
        var e = this;
        return new Promise(function(t) {
            var i = Date.parse("2025-12-01T00:00:00Z");
            Date.now() < i ? e.migrateAutoPlayStorage().then(function() {
                t()
            }) : t()
        }
        )
    },
    enablePlaylistAutoNext: function() {
        this.bEnablePlAutoPlay = !0,
        this.savePreference()
    },
    disablePlaylistAutoNext: function() {
        this.bEnablePlAutoPlay = !1,
        this.savePreference()
    },
    hasPlaylistAutoNext: function() {
        return this.bEnablePlAutoPlay
    },
    togglePlaylistAutoNext: function() {
        this.hasPlaylistAutoNext() ? this.disablePlaylistAutoNext() : this.enablePlaylistAutoNext()
    },
    resizeVideo: function() {
        if (!(this.is_ios || this.is_old_ios || this.is_ios_desktop_mode || this.is_ipad))
            if (this.videoRatio = this.video.videoWidth / this.video.videoHeight,
            -1 === this.videoRatio || -1 === this.oPlayerRatio.iCurrent)
                this.video.style.transform = "scaleX(1)";
            else {
                var e = this.oPlayerRatio.iCurrent / this.videoRatio
                  , t = 1;
                this.$videoDiv.offsetWidth / this.$videoDiv.offsetHeight < 1 && (t = 1 / e),
                this.video.style.transform = "scale(" + e * t + "," + 1 * t + ")"
            }
    },
    setParamRatioBtn: function(e) {
        this.videoRatio !== this.oPlayerRatio.aRatios[1] && this.videoRatio !== NaN && (e ? (this.oPlayerRatio.iCurrent === this.oPlayerRatio.aRatios[1] ? (this.oPlayerRatio.iCurrent = this.oPlayerRatio.aRatios[2],
        this.oPlayerRatio.$btn.setTitle("4/3")) : this.oPlayerRatio.iCurrent === this.oPlayerRatio.aRatios[2] ? (this.oPlayerRatio.iCurrent = this.oPlayerRatio.aRatios[3],
        this.oPlayerRatio.$btn.setTitle("16/9")) : this.oPlayerRatio.iCurrent === this.oPlayerRatio.aRatios[3] ? (this.oPlayerRatio.iCurrent = this.oPlayerRatio.aRatios[0],
        this.oPlayerRatio.$btn.setTitle(this.i18n.__("player.vertical"))) : (this.oPlayerRatio.$btn.setTitle(this.i18n.__("player.ratio_auto")),
        this.oPlayerRatio.iCurrent = this.oPlayerRatio.aRatios[1]),
        this.redrawParamers()) : this.oPlayerRatio.iCurrent === this.oPlayerRatio.aRatios[0] ? this.oPlayerRatio.$btn.setTitle(this.i18n.__("player.vertical")) : this.oPlayerRatio.iCurrent === this.oPlayerRatio.aRatios[2] ? this.oPlayerRatio.$btn.setTitle("4/3") : this.oPlayerRatio.iCurrent === this.oPlayerRatio.aRatios[3] && this.oPlayerRatio.$btn.setTitle("16/9"))
    },
    initPinchEvent: function() {
        if (!(this.is_ios || this.is_old_ios || this.is_ios_desktop_mode)) {
            var e = this
              , t = !1;
            getIndexRatio = function(t) {
                var i = e.oPlayerRatio.aRatios.map(function(e) {
                    return Number(e.toFixed(1))
                });
                return -1 !== i.indexOf(-1) && i.splice(i.indexOf(-1), 1),
                i.indexOf(Number(t.toFixed(1)))
            }
            ,
            fnPinch = function(i, s, r) {
                if (!("up" === i && r < 2 * s || "down" === i && r > s / 2 || t)) {
                    var o = -1 !== e.oPlayerRatio.iCurrent ? e.oPlayerRatio.iCurrent : e.videoRatio
                      , n = getIndexRatio(o)
                      , a = e.oPlayerRatio.aRatios.map(function(e) {
                        return e
                    });
                    a.splice(a.indexOf(-1), 1),
                    "up" === i && n === a.length - 1 || "down" === i && 0 === n || ("up" === i && n + 1 < a.length ? (e.oPlayerRatio.iCurrent = a[n + 1],
                    e.resizeVideo(),
                    e.setParamRatioBtn(!1),
                    t = !0) : "down" === i && n > 0 && (e.oPlayerRatio.iCurrent = a[n - 1],
                    e.resizeVideo(),
                    e.setParamRatioBtn(!1),
                    t = !0))
                }
            }
            ,
            this.oPinchRatioVideo = new PinchManager({
                $target: e.$videoDiv,
                fnBeforePinch: function() {
                    e.removeEvents(),
                    e.$videoDiv.querySelector("video").style.transition = "transform 0.1s"
                },
                fnPinchUp: function(e, t) {
                    fnPinch("up", e, t)
                },
                fnPinchDown: function(e, t) {
                    fnPinch("down", e, t)
                },
                fnAfterPinch: function() {
                    e.$videoDiv.querySelector("video").style.transition = "none",
                    t = !1,
                    e.setupEvents()
                }
            }),
            this.oPinchRatioVideo.addPinchEvents()
        }
    },
    initSlowSeekStartWait: function(e, t) {
        if (!this.is_ios && !this.is_ios_desktop_mode) {
            for (var i in this.oVideoAds)
                if (this.oVideoAds[i].oAd && this.oVideoAds[i].oAd.isPlaying())
                    return;
            this.oMouseDownStart && (clearTimeout(this.oMouseDownStart),
            this.oMouseDownStart = null);
            var s = this;
            if ("touch" === t)
                this.oTouchStart && (clearTimeout(this.oTouchStart),
                this.oTouchStart = null),
                this.iLastTouchStart = (new Date).getTime(),
                this.oTouchStart = setTimeout(function() {
                    s.iLastTouchStart && (s.sSlowSeekMode = "touch",
                    s.slowSeekStartWait(e),
                    s.oTouchStart = null)
                }, this.iClickTimeLimit);
            else if ("mouse" === t) {
                if (!this.desktop_view)
                    return;
                if (this.oTouchStart)
                    return;
                this.iLastMousedownStart = (new Date).getTime(),
                this.oMouseDownStart = setTimeout(function() {
                    s.iLastMousedownStart && (s.addClass(s.$videoDiv, "is-mouse-down"),
                    s.sSlowSeekMode = "mouse",
                    s.slowSeekStartWait(e),
                    s.oMouseDownStart = null)
                }, this.iClickTimeLimit)
            }
        }
    },
    slowSeekStartWait: function(e) {
        if (!this.bSlowSeekIsWaiting && this.canPlay && !this.video.ended && this.getVideoDuration()) {
            this.bSlowSeekIsWaiting = !0,
            this.iSlowSeekClientX = this.touch_getPosition(e),
            this.iSlowSeekWaitClientX = this.iSlowSeekClientX,
            this.iSlowSeekClientY = this.touch_getPositionY(e),
            this.iSlowSeekWaitClientY = this.iSlowSeekClientY;
            var t, i = this, s = function(e) {
                i.iSlowSeekWaitClientX = i.touch_getPosition(e),
                i.iSlowSeekWaitClientY = i.touch_getPositionY(e),
                i.bSlowSeekIsWaiting && "mouse" === i.sSlowSeekMode && Math.abs(i.iSlowSeekClientX - i.iSlowSeekWaitClientX) > 300 && (r(),
                i.slowSeekStart())
            }, r = function(e) {
                i.bSlowSeekIsWaiting && (t && clearTimeout(t),
                i.bSlowSeekIsWaiting = !1,
                window.removeEventListener("touchend", r),
                window.removeEventListener("touchcancel", r),
                window.removeEventListener("touchmove", s),
                i.$videoDiv.removeEventListener("mouseleave", r),
                i.$videoDiv.removeEventListener("mouseenter", r),
                window.removeEventListener("mouseup", r),
                window.removeEventListener("dragend", r),
                window.removeEventListener("mousemove", s))
            };
            if (this.bSlowSeekCanInstantInit)
                return r(),
                void this.slowSeekStart();
            t = setTimeout(function() {
                r(),
                Math.abs(i.iSlowSeekClientX - i.iSlowSeekWaitClientX) < 10 && Math.abs(i.iSlowSeekClientY - i.iSlowSeekWaitClientY) < 10 && i.slowSeekStart()
            }, 500),
            "touch" === this.sSlowSeekMode ? (window.addEventListener("touchend", r),
            window.addEventListener("touchcancel", r),
            window.addEventListener("touchmove", s)) : (this.$videoDiv.addEventListener("mouseleave", r),
            this.$videoDiv.addEventListener("mouseenter", r),
            window.addEventListener("mouseup", r),
            window.addEventListener("dragend", r),
            window.addEventListener("mousemove", s))
        }
    },
    slowSeekStart: function() {
        var e = this.getVideoDuration();
        if (!this.bSlowSeekIsInit && this.canPlay && (!this.oVideoAds[VIDEO_AD_TYPE.PREROLL] || this.oVideoAds[VIDEO_AD_TYPE.PREROLL].bDisplayed || this.oVideoAds[VIDEO_AD_TYPE.PREROLL].bWontBeLoaded) && !this.getChromecastMedia() && e) {
            this.bSlowSeekCanInstantInit = !0,
            this.bSlowSeekIsInit = !0,
            this.iSlowSeekClientX = null,
            this.iSlowSeekClientY = null,
            this.sSlowSeekDirection = null,
            this.addClass(this.$videoDiv, "is-slow-seeking"),
            this.oSlowSeekTimeOut && clearTimeout(this.oSlowSeekTimeOut),
            this.detectPlaying(),
            this.bSlowSeekWasPlaying = this.isPlaying,
            console.log("slowSeekStart --- (is playing : ", this.isPlaying, ")"),
            this.bSlowSeekWasPlaying && this.pause();
            var t = this
              , i = function(i) {
                var s = t.touch_getPosition(i)
                  , r = t.touch_getPositionY(i);
                if (null === t.iSlowSeekClientX)
                    return t.iSlowSeekClientX = s,
                    void (t.iSlowSeekClientY = r);
                var o = t.iSlowSeekClientX - s
                  , n = Math.abs(o)
                  , a = t.iSlowSeekClientY - r
                  , l = Math.abs(a);
                if (!(n < 5 && l < 5)) {
                    t.iSlowSeekClientX = s,
                    t.iSlowSeekClientY = r,
                    t.sSlowSeekDirection = n > l ? o < 0 ? "R" : "L" : a < 0 ? "D" : "U";
                    var d = t.getVideoCurrentTime();
                    if ("L" === t.sSlowSeekDirection) {
                        if (console.log("SlowSeek -1 sec"),
                        d < 1)
                            return;
                        t.seek(d - 1)
                    } else if ("R" === t.sSlowSeekDirection) {
                        if (console.log("SlowSeek +1 sec"),
                        d + 1 > e)
                            return;
                        t.seek(d + 1)
                    }
                    t.forcenopreviewimg || (t.showProgressBarSeekCursor(),
                    t.touchSeekShow(d / e))
                }
            }
              , s = function(e) {
                e.preventDefault()
            }
              , r = function(e) {
                e.preventDefault()
            };
            this.slowSeekEnd = function(e) {
                t.bSlowSeekIsInit && (window.removeEventListener("touchmove", i),
                window.removeEventListener("touchcancel", t.slowSeekEnd),
                window.removeEventListener("touchend", t.slowSeekEnd),
                window.removeEventListener("mousemove", i),
                t.$videoDiv.removeEventListener("mouseleave", t.slowSeekEnd),
                t.$videoDiv.removeEventListener("mouseenter", t.slowSeekEnd),
                window.removeEventListener("mouseup", t.slowSeekEnd),
                window.removeEventListener("contextmenu", r),
                window.removeEventListener("dragend", t.slowSeekEnd),
                t.bSlowSeekIsInit = !1,
                t.removeClass(t.$videoDiv, "is-slow-seeking"),
                t.oSlowSeekTimeOut = setTimeout(function() {
                    window.removeEventListener("dragstart", s),
                    t.slowSeekRemoveInstantStart(),
                    t.updateBtVisibity()
                }, 1500),
                t.bSlowSeekWasPlaying ? t.play() : t.showPause(),
                t.updateBtVisibity(),
                console.log("%c self.slowSeekEnd", "color:limegreen", e.type, e.target),
                t.oTouchStart && (clearTimeout(t.oTouchStart),
                t.oTouchStart = null))
            }
            ,
            "touch" === this.sSlowSeekMode ? (window.addEventListener("touchmove", i),
            window.addEventListener("touchcancel", this.slowSeekEnd),
            window.addEventListener("touchend", this.slowSeekEnd)) : (window.addEventListener("mousemove", i),
            this.$videoDiv.addEventListener("mouseleave", this.slowSeekEnd),
            this.$videoDiv.addEventListener("mouseenter", this.slowSeekEnd),
            window.addEventListener("mouseup", this.slowSeekEnd)),
            window.addEventListener("contextmenu", r),
            window.addEventListener("dragend", this.slowSeekEnd),
            window.removeEventListener("dragstart", s),
            window.addEventListener("dragstart", s),
            this.updateBtVisibity()
        }
    },
    slowSeekRemoveInstantStart: function() {
        this.bSlowSeekCanInstantInit && this.$slowSeekInfo && (console.log("slowSeekRemoveInstantStart"),
        this.bSlowSeekCanInstantInit = !1,
        this.updateBtVisibity())
    },
    showAutoplay: function() {
        return !(this.is_ios && !this.video.muted) && (!0 === this.use_autoplay || (!1 === this.use_autoplay_setting || !0 === this.use_autoplay_setting))
    },
    useAutoplay: function() {
        return !0 === this.use_autoplay_setting
    },
    canShowPlay: function() {
        var e = this.getTime();
        return !e || !this.player_init_time || e - this.player_init_time > this.hide_play_timeout || (!this.useAutoplay() || !!this.has_canplaythrough && (!!this.video.paused || this.has_paused))
    },
    getPlayCase: function() {
        var e = {
            REGULAR_WITHSOUND: 1,
            REGULAR_WITHOUTSOUND: 2,
            AUTOPLAY_DEFAULTSOUND: 3,
            AUTOPLAY_CUSTOMSOUND: 4,
            AUTOPLAY_MUTED: 5
        }
          , t = this.video.muted || this.video.volume <= .01;
        return this.useAutoplay() ? t ? e.AUTOPLAY_MUTED : this.hasCustomVolume() ? e.AUTOPLAY_CUSTOMSOUND : e.AUTOPLAY_DEFAULTSOUND : t ? e.REGULAR_WITHOUTSOUND : e.REGULAR_WITHSOUND
    },
    getTime: function() {
        return "function" == typeof Date.now ? Date.now() : "function" == typeof Date.getTime ? Date.getTime() : "object" == typeof performance && "function" == typeof performance.now ? performance.now() : 0
    }
},
HTML5Player.TYPE_SMALL = "SMALL",
HTML5Player.TYPE_FULL = "FULL",
HTML5Player.TYPE_MINUTE = "MIN";
