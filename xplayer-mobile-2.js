!function() {
    try {
        var e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : {}
          , t = (new e.Error).stack;
        t && (e._sentryDebugIds = e._sentryDebugIds || {},
        e._sentryDebugIds[t] = "7a55a583-df18-4f14-87ad-70fb5f963ea6",
        e._sentryDebugIdIdentifier = "sentry-dbid-7a55a583-df18-4f14-87ad-70fb5f963ea6")
    } catch (e) {}
}();
var _sentryModuleMetadataGlobal = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : {};
_sentryModuleMetadataGlobal._sentryModuleMetadata = _sentryModuleMetadataGlobal._sentryModuleMetadata || {},
_sentryModuleMetadataGlobal._sentryModuleMetadata[new _sentryModuleMetadataGlobal.Error().stack] = Object.assign({}, _sentryModuleMetadataGlobal._sentryModuleMetadata[new _sentryModuleMetadataGlobal.Error().stack], {
    "_sentryBundlerPluginAppKey:xh-app": !0
});
var _global = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : {};
_global.SENTRY_RELEASE = {
    id: "edc4ab81e92be8255410ca02c5e84547249df2b8"
},
(self["xh-async"] = self["xh-async"] || []).push([["7377"], {
    4572: function(e, t) {
        "use strict";
        t.A = {
            pauseSpotContainer: "_34abc-pauseSpotContainer",
            overlay: "_34abc-overlay",
            centered: "_34abc-centered",
            close: "_34abc-close",
            xplayer: "xplayer",
            "x-plain": "x-plain",
            "xplayer-settings-menu-opened": "xplayer-settings-menu-opened",
            "xplayer-share-menu-opened": "xplayer-share-menu-opened",
            "overlay-menu-opened": "overlay-menu-opened",
            "xplayer-ads": "xplayer-ads",
            "xplayer-ads-preload": "xplayer-ads-preload"
        }
    },
    9776: function(e, t, i) {
        "use strict";
        i.d(t, {
            A: function() {
                return c
            }
        });
        var n = i(84422)
          , s = i(15904)
          , r = i(86096)
          , o = i(54588)
          , a = i.n(o)
          , l = i(94786)
          , c = new ((0,
        s.A)(function e() {
            var t = this;
            (0,
            n.A)(this, e),
            (0,
            r.A)(this, "enabled", void 0),
            (0,
            r.A)(this, "yieldedCallback", function(e) {
                return function(i) {
                    var n;
                    return a().async(function(s) {
                        for (; ; )
                            switch (s.prev = s.next) {
                            case 0:
                                return n = i.currentTarget,
                                s.next = 3,
                                a().awrap(t.yieldToMain());
                            case 3:
                                e(i, n);
                            case 4:
                            case "end":
                                return s.stop()
                            }
                    }, null, null, null, Promise)
                }
            }),
            this.enabled = !1
        }, [{
            key: "yieldToMain",
            value: function() {
                return a().async(function(e) {
                    for (; ; )
                        switch (e.prev = e.next) {
                        case 0:
                            if (!this.enabled) {
                                e.next = 2;
                                break
                            }
                            return e.abrupt("return", new Promise(function(e) {
                                setTimeout(e, 0)
                            }
                            ));
                        case 2:
                            return e.abrupt("return", null);
                        case 3:
                        case "end":
                            return e.stop()
                        }
                }, null, this, null, Promise)
            }
        }, {
            key: "addEventListenerWithYield",
            value: function() {
                var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : l.c.CLICK
                  , t = arguments.length > 1 ? arguments[1] : void 0
                  , i = arguments.length > 2 ? arguments[2] : void 0
                  , n = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : {};
                t.addEventListener(e, this.yieldedCallback(i), n)
            }
        }, {
            key: "addClickWithYield",
            value: function(e, t) {
                e && t && this.addEventListenerWithYield(l.c.CLICK, e, t)
            }
        }, {
            key: "enableInpOptimizer",
            value: function() {
                this.enabled = !0
            }
        }, {
            key: "isEnabled",
            value: function() {
                return this.enabled
            }
        }]))
    },
    94786: function(e, t, i) {
        "use strict";
        var n, s, r, o;
        i.d(t, {
            E: function() {
                return s
            },
            c: function() {
                return n
            }
        }),
        (r = n || (n = {})).CLICK = "click",
        r.MOUSE_ENTER = "mouseenter",
        r.MOUSE_OVER = "mouseover",
        r.MOUSE_LEAVE = "mouseleave",
        r.MOUSE_MOVE = "mousemove",
        r.MOUSE_DOWN = "mousedown",
        r.MOUSE_UP = "mouseup",
        r.WHEEL = "wheel",
        (o = s || (s = {})).TOUCH_START = "touchstart",
        o.TOUCH_END = "touchend",
        o.TOUCH_MOVE = "touchmove",
        o.TOUCH_CANCEL = "touchcancel"
    },
    38432: function(e, t) {
        "use strict";
        var i = function(e) {
            var t = parseInt("".concat(e), 10)
              , i = Math.floor(t / 3600) || 0
              , n = Math.floor((t - 3600 * i) / 60) || 0
              , s = t - 3600 * i - 60 * n || 0
              , r = i > 0;
            return i < 10 && (i = "0".concat(i)),
            n < 10 && (n = "0".concat(n)),
            s < 10 && (s = "0".concat(s)),
            {
                hours: i,
                minutes: n,
                seconds: s,
                hasHours: r
            }
        };
        t.A = {
            OFFSET_REGEX: /(:?(\?|&)t=)([0-9]+\.[0-9]{1,2})/,
            parseTime: function(e, t) {
                var n = i(e)
                  , s = n.hours
                  , r = n.minutes
                  , o = n.seconds;
                return "".concat((t ? "".concat(s, ":") : "") + r, ":").concat(o)
            },
            parseTimeFlexHours: function(e) {
                var t = i(e)
                  , n = t.hours
                  , s = t.minutes
                  , r = t.seconds
                  , o = t.hasHours;
                return "".concat((o ? "".concat(n, ":") : "") + s, ":").concat(r)
            },
            parseTimeOffset: function() {
                var e = Number(new URLSearchParams(window.location.search).get("t"));
                return !Number.isNaN(e) && e
            },
            stringToSeconds: function(e) {
                return e.split(":").reduce(function(e, t) {
                    return 60 * e + parseInt(t, 10)
                }, 0)
            }
        }
    },
    11570: function(e, t, i) {
        "use strict";
        i.d(t, {
            eX: function() {
                return n
            },
            xz: function() {
                return s
            }
        }),
        i(55925),
        i(52402);
        var n = function(e) {
            return null == e ? void 0 : e.filter(function(e) {
                return e.url
            })
        }
          , s = function(e) {
            return !e || Array.isArray(e) && (null == e ? void 0 : e.every(function(e) {
                return !e.url
            }))
        }
    },
    50611: function(e, t, i) {
        "use strict";
        i.d(t, {
            q: function() {
                return T
            }
        });
        var n = i(84422)
          , s = i(15904)
          , r = i(86096)
          , o = i(54588)
          , a = i.n(o)
          , l = i(37651)
          , c = i(10809)
          , h = i(4251)
          , u = i(23317)
          , d = i(40311)
          , A = i(9776)
          , p = i(83899)
          , m = i(38432)
          , v = i(54098)
          , E = i(78772);
        function f() {
            try {
                var e = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {}))
            } catch (e) {}
            return (f = function() {
                return !!e
            }
            )()
        }
        var _ = function(e) {
            function t() {
                var e, i;
                return (0,
                n.A)(this, t),
                e = t,
                i = arguments,
                e = (0,
                u.A)(e),
                (0,
                h.A)(this, f() ? Reflect.construct(e, i || [], (0,
                u.A)(this).constructor) : e.apply(this, i))
            }
            return (0,
            d.A)(t, e),
            (0,
            s.A)(t, [{
                key: "attachEvents",
                value: function() {
                    A.A.addClickWithYield(this.element, this.onClick.bind(this))
                }
            }, {
                key: "onClick",
                value: function() {
                    this.saveCurrentTime(),
                    l.A.emit(c.A.PLAYER_SET_CURRENT_TIME, this.time),
                    l.A.emit(c.A.PLAYER_PLAY),
                    l.A.emit(c.A.ACTIONS_ACTION_SELECT, this.label),
                    l.A.emit(c.A.STATISTICS_UI, p.A.actions_click_video_action, {
                        "str.message": this.label
                    })
                }
            }])
        }((0,
        s.A)(function e(t) {
            (0,
            n.A)(this, e),
            (0,
            r.A)(this, "element", void 0),
            (0,
            r.A)(this, "sprite", void 0),
            (0,
            r.A)(this, "time", void 0),
            (0,
            r.A)(this, "timeString", void 0),
            (0,
            r.A)(this, "label", void 0),
            (0,
            r.A)(this, "hasPreview", void 0),
            this.timeString = m.A.parseTimeFlexHours(t.time),
            this.time = t.time,
            this.label = t.label,
            this.hasPreview = !1,
            this.init()
        }, [{
            key: "init",
            value: function() {
                this.render(),
                this.attachEvents()
            }
        }, {
            key: "render",
            value: function() {
                this.element = (0,
                E.SL)('\n            <div class="xp-action-thumb">\n                <div class="xp-action-thumb__sprite"></div>\n                <div class="xp-action-thumb__label">\n                    <div class="xp-action-thumb__text">'.concat(this.label, '</div>\n                    <div class="xp-action-thumb__time">').concat(this.timeString, "</div>\n                </div>\n            </div>\n        ")),
                this.sprite = this.element.querySelector(".xp-action-thumb__sprite")
            }
        }, {
            key: "attachEvents",
            value: function() {
                var e = this;
                this.element.addEventListener("click", function() {
                    e.saveCurrentTime(),
                    l.A.emit(c.A.ACTIONS_HIDE_GALLERY),
                    l.A.emit(c.A.PLAYER_SET_CURRENT_TIME, e.time),
                    l.A.emit(c.A.PROGRESS_BAR_VISUAL_UPDATE, e.time),
                    l.A.emit(c.A.PLAYER_PLAY),
                    l.A.emit(c.A.ACTIONS_ACTION_SELECT, e.label),
                    l.A.emit(c.A.STATISTICS_UI, p.A.actions_click_video_action, {
                        "str.message": e.label
                    })
                })
            }
        }, {
            key: "saveCurrentTime",
            value: function() {
                (v.A.get("ads_preload") || v.A.get("ads")) && v.A.set("savedCurrentTime", this.time)
            }
        }, {
            key: "getElement",
            value: function() {
                return this.element
            }
        }, {
            key: "setPreview",
            value: function(e) {
                var t = e.spriteUrl
                  , i = e.spriteInfo
                  , n = void 0 === i ? null : i;
                t && n && (this.sprite.style.backgroundImage = "url(".concat(t, ")"),
                n.fhThumb ? this.setFhPreview(n) : (this.setBackgroundSize(n.thumbsAmount),
                this.sprite.style.backgroundPositionX = "".concat(-132 * n.spritePosition, "px")),
                this.hasPreview = !0)
            }
        }, {
            key: "setFhPreview",
            value: function(e) {
                var t = e.thumbsAmount
                  , i = e.fhThumb
                  , n = i.position.left / i.width * 132
                  , s = i.position.top / i.height * 78
                  , r = e.originSpriteHeight ? 78 / i.height * e.originSpriteHeight : 78;
                this.sprite.style.backgroundSize = "".concat(132 * t, "px ").concat(r, "px"),
                this.sprite.style.backgroundPositionY = "-".concat(s, "px"),
                this.sprite.style.backgroundPositionX = "-".concat(n, "px")
            }
        }, {
            key: "setBackgroundSize",
            value: function(e) {
                this.sprite.style.backgroundSize = "".concat(132 * e, "px ").concat(78, "px")
            }
        }]))
          , y = "xh-helper-hidden"
          , g = "xp-actions-gallery"
          , S = "".concat(g, "--rtl")
          , b = "".concat(g, "--animated")
          , T = (0,
        s.A)(function e(t, i, s) {
            (0,
            n.A)(this, e),
            (0,
            r.A)(this, "actionsData", void 0),
            (0,
            r.A)(this, "core", void 0),
            (0,
            r.A)(this, "coreElement", void 0),
            (0,
            r.A)(this, "element", void 0),
            (0,
            r.A)(this, "galleryInner", void 0),
            (0,
            r.A)(this, "spriteLoader", void 0),
            (0,
            r.A)(this, "actions", void 0),
            this.core = t,
            this.actionsData = i,
            this.spriteLoader = s,
            this.coreElement = t.element,
            this.actions = [],
            this.init()
        }, [{
            key: "init",
            value: function() {
                this.render(),
                this.attachEvents()
            }
        }, {
            key: "render",
            value: function() {
                this.element = (0,
                E.SL)('\n            <div class="'.concat(g, " ").concat(y, '">\n                <div class="').concat(g, '__inner"></div>\n            </div>\n        ')),
                this.core.isRtl && this.element.classList.add(S),
                this.coreElement.parentElement.insertBefore(this.element, this.coreElement.nextSibling)
            }
        }, {
            key: "renderPreviews",
            value: function() {
                var e = this;
                this.galleryInner = document.querySelector(".xp-actions-gallery__inner"),
                this.actionsData.forEach(function(t) {
                    var i;
                    return a().async(function(n) {
                        for (; ; )
                            switch (n.prev = n.next) {
                            case 0:
                                i = new _(t),
                                e.galleryInner.appendChild(i.getElement()),
                                e.actions.push(i);
                            case 3:
                            case "end":
                                return n.stop()
                            }
                    }, null, null, null, Promise)
                }),
                this.setActionsPreviews()
            }
        }, {
            key: "showGallery",
            value: function() {
                var e = this;
                this.element.classList.remove(y),
                setTimeout(function() {
                    e.element.classList.add(b)
                }, 0)
            }
        }, {
            key: "hideGallery",
            value: function() {
                this.element.classList.remove(b)
            }
        }, {
            key: "setActionsPreviews",
            value: function() {
                var e = this;
                this.actions.forEach(function(t) {
                    var i;
                    return a().async(function(n) {
                        for (; ; )
                            switch (n.prev = n.next) {
                            case 0:
                                return n.prev = 0,
                                n.next = 3,
                                a().awrap(e.spriteLoader.getCurrentFrame(t.time));
                            case 3:
                                (i = n.sent) ? t.setPreview(i) : setTimeout(function() {
                                    e.setActionPreview(t)
                                }, 50),
                                n.next = 10;
                                break;
                            case 7:
                                n.prev = 7,
                                n.t0 = n.catch(0),
                                t.setPreview({
                                    spriteUrl: ""
                                });
                            case 10:
                            case "end":
                                return n.stop()
                            }
                    }, null, null, [[0, 7]], Promise)
                })
            }
        }, {
            key: "setActionPreview",
            value: function(e) {
                var t, i = this;
                return a().async(function(n) {
                    for (; ; )
                        switch (n.prev = n.next) {
                        case 0:
                            return n.next = 2,
                            a().awrap(this.spriteLoader.getCurrentFrame(e.time));
                        case 2:
                            (t = n.sent) ? e.setPreview(t) : setTimeout(function() {
                                i.setActionPreview(e)
                            }, 50);
                        case 4:
                        case "end":
                            return n.stop()
                        }
                }, null, this, null, Promise)
            }
        }, {
            key: "attachEvents",
            value: function() {
                var e = this;
                this.element.addEventListener("transitionend", function() {
                    e.element.classList.contains(b) || e.element.classList.add(y)
                }),
                l.A.on(c.A.ACTIONS_SHOW_GALLERY, this.showGallery.bind(this)),
                l.A.on(c.A.ACTIONS_HIDE_GALLERY, this.hideGallery.bind(this)),
                l.A.once(c.A.SPRITE_USER_REQUEST, this.renderPreviews.bind(this))
            }
        }])
    },
    45546: function(e, t, i) {
        "use strict";
        i.d(t, {
            C: function() {
                return v
            }
        });
        var n = i(84422)
          , s = i(15904)
          , r = i(86096)
          , o = i(9776)
          , a = i(37651)
          , l = i(10809)
          , c = i(83899)
          , h = i(78772)
          , u = i(97590)
          , d = "xp-open-actions-gallery"
          , A = "".concat(d, "__label")
          , p = "".concat(d, "__icon")
          , m = "".concat(d, "--pressed")
          , v = (0,
        s.A)(function e() {
            (0,
            n.A)(this, e),
            (0,
            r.A)(this, "element", void 0),
            (0,
            r.A)(this, "isGalleryVisible", void 0),
            (0,
            r.A)(this, "isUserRequestedThumbs", void 0),
            this.init()
        }, [{
            key: "init",
            value: function() {
                this.render(),
                this.attachEvents()
            }
        }, {
            key: "render",
            value: function() {
                var e = (0,
                u.T)("xplayerActionJumpTo");
                this.element = (0,
                h.SL)('\n            <div class="'.concat(d, '">\n                <div class="').concat(A, '">').concat(e, '<div class="').concat(p, '"></div></div>\n            </div>\n        '))
            }
        }, {
            key: "attachEvents",
            value: function() {
                var e = this;
                o.A.addClickWithYield(this.element, this.showActionsGallery.bind(this)),
                a.A.on(l.A.ACTIONS_OPEN_BUTTON_RESET, function() {
                    e.isGalleryVisible = !1,
                    e.setNormal()
                })
            }
        }, {
            key: "setPressed",
            value: function() {
                this.element.classList.add(m)
            }
        }, {
            key: "setNormal",
            value: function() {
                this.element.classList.remove(m)
            }
        }, {
            key: "showActionsGallery",
            value: function() {
                this.isUserRequestedThumbs || (this.isUserRequestedThumbs = !0,
                a.A.emit(l.A.SPRITE_USER_REQUEST)),
                this.isGalleryVisible ? (a.A.emit(l.A.ACTIONS_HIDE_GALLERY),
                a.A.emit(l.A.STATISTICS_UI, c.A.actions_close_list),
                this.setNormal()) : (a.A.emit(l.A.ACTIONS_SHOW_GALLERY),
                a.A.emit(l.A.STATISTICS_UI, c.A.actions_open_list),
                this.setPressed()),
                this.isGalleryVisible = !this.isGalleryVisible
            }
        }, {
            key: "getElement",
            value: function() {
                return this.element
            }
        }])
    },
    57509: function(e, t, i) {
        "use strict";
        i.d(t, {
            p: function() {
                return n
            }
        });
        var n = function(e) {
            var t = null == e ? void 0 : e.introDuration;
            return t ? null == e ? void 0 : e.actions.map(function(e) {
                return {
                    label: e.label,
                    time: e.time + t
                }
            }) : e.actions
        }
    },
    13024: function(e, t, i) {
        "use strict";
        var n = i(84422)
          , s = i(15904)
          , r = i(86096)
          , o = i(83899)
          , a = i(37651)
          , l = i(10809)
          , c = i(7163)
          , h = "xh-helper-hidden";
        t.A = (0,
        s.A)(function e() {
            (0,
            n.A)(this, e),
            (0,
            r.A)(this, "element", void 0),
            (0,
            r.A)(this, "castImage", void 0),
            this.init()
        }, [{
            key: "init",
            value: function() {
                this.element = document.createElement("div"),
                this.castImage = document.createElement("div"),
                this.element.className = "xplayer-chromecast-button ".concat(h),
                this.castImage.className = "xplayer-chromecast-button__cast-image",
                this.element.appendChild(this.castImage),
                this.attachEvents()
            }
        }, {
            key: "chromecastUserRequest",
            value: function() {
                a.A.emit(l.A.REMOTE_PLAYER_USER_REQUEST),
                a.A.emit(l.A.STATISTICS_UI, o.A.chromecast_button_click)
            }
        }, {
            key: "switchButtonToReal",
            value: function() {
                this.element.removeEventListener("click", this.chromecastUserRequest),
                this.element.className += " google-chromecast-image",
                this.element.innerHTML = '<google-cast-launcher id="xplayer-cast-launcher"></google-cast-launcher>'
            }
        }, {
            key: "showCastButton",
            value: function() {
                c.A.removeClass(this.element, h),
                a.A.emit(l.A.STATISTICS_UI, o.A.chromecast_button_shown)
            }
        }, {
            key: "attachEvents",
            value: function() {
                this.element.addEventListener("click", this.chromecastUserRequest),
                a.A.once(l.A.REMOTE_PLAYER_CHROMECAST_LOADED, this.switchButtonToReal.bind(this)),
                a.A.once(l.A.REMOTE_PLAYER_DEVICE_AVAILABLE, this.showCastButton, this)
            }
        }, {
            key: "getElement",
            value: function() {
                return this.element
            }
        }])
    },
    56578: function(e, t, i) {
        "use strict";
        i.d(t, {
            A: function() {
                return v
            }
        });
        var n = i(84422)
          , s = i(15904)
          , r = i(86096)
          , o = i(83899)
          , a = i(37651)
          , l = i(10809)
          , c = i(54098)
          , h = i(7163)
          , u = i(97590)
          , d = (0,
        s.A)(function e() {
            var t;
            (0,
            n.A)(this, e),
            (0,
            r.A)(this, "castSession", void 0),
            (0,
            r.A)(this, "playerTarget", void 0),
            (0,
            r.A)(this, "target", void 0),
            null != (t = window.cast) && t.framework && (this.target = {},
            this.castSession = {})
        }, [{
            key: "setTarget",
            value: function(e) {
                this.target = e
            }
        }, {
            key: "play",
            value: function() {
                var e;
                if (!c.A.get("playing")) {
                    if (!(null != (e = this.target) && e.isMediaLoaded()) && !c.A.get("remoteSourceLoading"))
                        return void this.load();
                    this.target.play(),
                    a.A.emit(l.A.PLAYER_PLAY)
                }
            }
        }, {
            key: "pause",
            value: function() {
                c.A.get("playing") && this.target.pause()
            }
        }, {
            key: "stop",
            value: function() {
                this.target.stop()
            }
        }, {
            key: "load",
            value: function() {
                c.A.set("remoteSourceLoading", !0),
                this.target.load()
            }
        }, {
            key: "loaded",
            value: function() {
                this.target.setTimeUpdatesEvent(),
                c.A.set("remoteSourceLoading", !1),
                a.A.emit(l.A.REMOTE_PLAYER_LOADING_END),
                this.play()
            }
        }, {
            key: "setVolume",
            value: function(e) {
                this.target.setVolume(e)
            }
        }, {
            key: "setMute",
            value: function(e) {
                if ("on" === e)
                    return void this.target.mute();
                this.target.unMute()
            }
        }, {
            key: "seekTo",
            value: function(e) {
                this.target.seekTo(e)
            }
        }])
          , A = (0,
        s.A)(function e(t) {
            (0,
            n.A)(this, e),
            (0,
            r.A)(this, "playerHandler", void 0),
            (0,
            r.A)(this, "remotePlayer", void 0),
            (0,
            r.A)(this, "remotePlayerController", void 0),
            (0,
            r.A)(this, "castSession", void 0),
            (0,
            r.A)(this, "castContext", void 0),
            (0,
            r.A)(this, "playerTarget", void 0),
            (0,
            r.A)(this, "core", void 0),
            (0,
            r.A)(this, "currentTime", void 0),
            (0,
            r.A)(this, "deviceName", void 0),
            (0,
            r.A)(this, "volumeControls", void 0);
            var i, s = t.playerHandler, o = t.remotePlayer, a = t.remotePlayerController, l = t.core, c = t.volumeControls;
            o && a && null != (i = window.cast) && i.framework && (this.core = l,
            this.playerHandler = s,
            this.remotePlayer = o,
            this.remotePlayerController = a,
            this.playerTarget = {},
            this.castSession = {},
            this.currentTime = 0,
            this.volumeControls = c)
        }, [{
            key: "init",
            value: function() {
                this.castContext = window.cast.framework.CastContext.getInstance(),
                this.castSession = this.castContext.getCurrentSession(),
                this.setListeners(),
                this.initPlayerTarget()
            }
        }, {
            key: "setListeners",
            value: function() {
                var e = window.cast.framework.RemotePlayerEventType
                  , t = e.IS_PAUSED_CHANGED
                  , i = e.IS_MUTED_CHANGED
                  , n = e.VOLUME_LEVEL_CHANGED
                  , s = e.PLAYER_STATE_CHANGED
                  , r = window.cast.framework.CastContextEventType.SESSION_STATE_CHANGED;
                this.castContext.addEventListener(r, this.handleSessionStatus.bind(this)),
                this.remotePlayerController.addEventListener(t, this.handlePlayPause.bind(this)),
                this.remotePlayerController.addEventListener(i, this.handleMuted.bind(this)),
                this.remotePlayerController.addEventListener(n, this.handleVolumeChange.bind(this)),
                this.remotePlayerController.addEventListener(s, this.handleStateChange.bind(this))
            }
        }, {
            key: "handleSessionStatus",
            value: function(e) {
                null != e && e.errorCode && a.A.emit(l.A.STATISTICS_UI, o.A.chromecast_play_error, {
                    error: e.errorCode,
                    state: e.sessionState
                })
            }
        }, {
            key: "handleStateChange",
            value: function(e) {
                var t = e.value
                  , i = this.deviceName;
                switch (!0) {
                case "LOADING" === t:
                    a.A.emit(l.A.REMOTE_PLAYER_PLAYING, {
                        value: t,
                        deviceName: i
                    });
                    break;
                case "PLAYING" === t:
                    h.A.removeClass(this.core.element, "chromecast-paused"),
                    a.A.emit(l.A.REMOTE_PLAYER_PLAYING, {
                        value: t,
                        deviceName: i
                    }),
                    a.A.emit(l.A.STATISTICS_UI, o.A.chromecast_play_success),
                    a.A.emit(l.A.REMOTE_PLAYER_LOADING_END);
                    break;
                case "PAUSED" === t:
                    a.A.emit(l.A.REMOTE_PLAYER_PAUSED, {
                        value: t,
                        deviceName: i
                    });
                    break;
                case "BUFFERING" === t:
                    a.A.emit(l.A.REMOTE_PLAYER_LOADING_START),
                    a.A.emit(l.A.REMOTE_PLAYER_BUFFERING, {
                        value: t,
                        deviceName: i
                    });
                    break;
                case "IDLE" === t && c.A.get("currentTime") >= c.A.get("duration"):
                    this.remotePlayerController.stop(),
                    this.castSession.getSessionObj().stop()
                }
            }
        }, {
            key: "targetLoad",
            value: function() {
                a.A.emit(l.A.REMOTE_PLAYER_LOADING_START),
                this.deviceName = this.castSession.getCastDevice().friendlyName,
                this.handleStateChange({
                    value: "LOADING"
                });
                var e = this.core.sourceController.getChromecastUrl()
                  , t = window.chrome.cast.media
                  , i = new t.MediaInfo(e);
                i.metadata = new t.GenericMediaMetadata,
                i.metadata.metadataType = t.MetadataType.GENERIC,
                i.metadata.title = i.title;
                var n = new t.LoadRequest(i);
                n.credentials = "user-credentials",
                n.atvCredentials = "atv-user-credentials",
                n.currentTime = c.A.get("currentTime"),
                this.castSession.loadMedia(n).then(this.playerHandler.loaded.bind(this.playerHandler), this.remoteLoadErrorHandler.bind(this))
            }
        }, {
            key: "setTimeUpdatesEvent",
            value: function() {
                var e = window.cast.framework.RemotePlayerEventType.CURRENT_TIME_CHANGED;
                this.remotePlayerController.addEventListener(e, this.updateTimings.bind(this))
            }
        }, {
            key: "updateTimings",
            value: function(e) {
                if (this.remotePlayer.isMediaLoaded) {
                    var t = e.value
                      , i = c.A.get("duration");
                    a.A.emit(l.A.PLAYER_ON_TIMEUPDATE, {
                        target: {
                            currentTime: t,
                            duration: i
                        }
                    }),
                    a.A.emit(l.A.PROGRESS_BAR_UPDATE, t),
                    c.A.set("currentTime", t),
                    this.currentTime = t
                }
            }
        }, {
            key: "handlePlayPause",
            value: function() {
                this.remotePlayer.isPaused ? (this.playerHandler.pause(),
                h.A.addClass(this.core.element, "chromecast-paused")) : this.playerHandler.play()
            }
        }, {
            key: "targetPlay",
            value: function() {
                this.remotePlayer.isPaused && this.remotePlayerController.playOrPause(),
                c.A.set("playing", !0),
                a.A.emit(l.A.REMOTE_PLAYER_STATE_CHANGED)
            }
        }, {
            key: "targetPause",
            value: function() {
                this.remotePlayer.isPaused || this.remotePlayerController.playOrPause(),
                c.A.set("playing", !1),
                a.A.emit(l.A.REMOTE_PLAYER_STATE_CHANGED)
            }
        }, {
            key: "targetSetVolume",
            value: function(e) {
                this.remotePlayer.volumeLevel = Number(e),
                this.remotePlayerController.setVolumeLevel()
            }
        }, {
            key: "mute",
            value: function() {
                this.remotePlayer.isMuted || this.remotePlayerController.muteOrUnmute()
            }
        }, {
            key: "unMute",
            value: function() {
                this.remotePlayer.isMuted && this.remotePlayerController.muteOrUnmute()
            }
        }, {
            key: "handleMuted",
            value: function() {
                this.remotePlayer.isMuted ? a.A.emit(l.A.PLAYER_SET_VOLUME, 0) : a.A.emit(l.A.PLAYER_SET_VOLUME, 1)
            }
        }, {
            key: "handleVolumeChange",
            value: function(e) {
                var t = Number(e.value.toFixed(2));
                if (this.core.videoElement.volume = t,
                t !== this.core.videoElement.volume) {
                    var i = this.volumeControls
                      , n = i.filler
                      , s = i.handler
                      , r = i.volumeElement;
                    n && s && r && (n.style = "width: ".concat(100 * t, "%"),
                    s.style = "left: ".concat(100 * t, "%"),
                    t < .02 ? r.className = "volume mute" : t < .25 ? r.className = "volume quarter" : t < .5 ? r.className = "volume half" : t < .75 ? r.className = "volume third" : r.className = "volume")
                }
            }
        }, {
            key: "remoteLoadErrorHandler",
            value: function(e) {
                console.warn("Chromecast load error", e)
            }
        }, {
            key: "targetSeekTo",
            value: function(e) {
                this.remotePlayer.currentTime = e,
                this.remotePlayerController.seek()
            }
        }, {
            key: "targetIsMediaLoaded",
            value: function() {
                return this.remotePlayer.isMediaLoaded
            }
        }, {
            key: "initPlayerTarget",
            value: function() {
                this.playerTarget.play = this.targetPlay.bind(this),
                this.playerTarget.pause = this.targetPause.bind(this),
                this.playerTarget.load = this.targetLoad.bind(this),
                this.playerTarget.setVolume = this.targetSetVolume.bind(this),
                this.playerTarget.mute = this.mute.bind(this),
                this.playerTarget.unMute = this.unMute.bind(this),
                this.playerTarget.seekTo = this.targetSeekTo.bind(this),
                this.playerTarget.setTimeUpdatesEvent = this.setTimeUpdatesEvent.bind(this),
                this.playerTarget.isMediaLoaded = this.targetIsMediaLoaded.bind(this),
                this.playerHandler.setTarget(this.playerTarget),
                this.playerHandler.play(),
                this.handleVolumeChange({
                    value: this.core.videoElement.volume
                }),
                this.core.videoElement.muted && this.mute()
            }
        }])
          , p = "chromecast-bg__visible"
          , m = (0,
        s.A)(function e(t) {
            (0,
            n.A)(this, e),
            (0,
            r.A)(this, "element", void 0),
            (0,
            r.A)(this, "text", void 0),
            (0,
            r.A)(this, "imageBg", void 0),
            (0,
            r.A)(this, "playerElement", void 0),
            this.playerElement = t,
            this.render(),
            this.attachEvents()
        }, [{
            key: "render",
            value: function() {
                this.element = document.createElement("div"),
                this.text = document.createElement("div"),
                this.imageBg = document.createElement("div"),
                this.element.className = "chromecast-bg",
                this.text.className = "chromecast-bg__text",
                this.imageBg.className = "chromecast-bg__image",
                this.element.appendChild(this.text),
                this.element.appendChild(this.imageBg),
                this.playerElement.appendChild(this.element)
            }
        }, {
            key: "attachEvents",
            value: function() {
                this.element.addEventListener("click", this.togglePlayPause.bind(this)),
                a.A.on(l.A.REMOTE_PLAYER_BUFFERING, this.updateText, this),
                a.A.on(l.A.REMOTE_PLAYER_PLAYING, this.updateText, this),
                a.A.on(l.A.REMOTE_PLAYER_PAUSED, this.updateText, this)
            }
        }, {
            key: "show",
            value: function() {
                this.element.classList.add(p)
            }
        }, {
            key: "hide",
            value: function() {
                this.element.classList.remove(p)
            }
        }, {
            key: "updateText",
            value: function(e) {
                var t = e.value
                  , i = e.deviceName;
                this.text.innerHTML = "".concat(t, " on ").concat(i)
            }
        }, {
            key: "togglePlayPause",
            value: function() {
                if (-1 !== this.playerElement.className.indexOf("no-user-action"))
                    return void a.A.emit(l.A.USER_ACTION);
                if (c.A.get("playing")) {
                    a.A.emit(l.A.PLAYER_PAUSE),
                    c.A.set("playing", !1);
                    return
                }
                a.A.emit(l.A.PLAYER_PLAY),
                c.A.set("playing", !0)
            }
        }])
          , v = (0,
        s.A)(function e(t, i) {
            (0,
            n.A)(this, e),
            (0,
            r.A)(this, "player", void 0),
            (0,
            r.A)(this, "remoteModule", void 0),
            (0,
            r.A)(this, "remotePlayer", void 0),
            (0,
            r.A)(this, "remotePlayerController", void 0),
            (0,
            r.A)(this, "playerHandler", void 0),
            (0,
            r.A)(this, "core", void 0),
            (0,
            r.A)(this, "remoteEventsIds", void 0),
            (0,
            r.A)(this, "chromecastBg", void 0),
            (0,
            r.A)(this, "sourceUrl", void 0),
            (0,
            r.A)(this, "isLoaded", void 0),
            (0,
            r.A)(this, "isMobile", void 0),
            null != t && t.player && null != t && t.core && null != i && i.sourceUrl && (this.player = t.player,
            this.core = t.core,
            this.isMobile = t.isMobile || !1,
            this.sourceUrl = i.sourceUrl,
            this.playerHandler = new d,
            this.remoteModule = null,
            this.remoteEventsIds = {},
            this.init())
        }, [{
            key: "attachRemoteEvents",
            value: function() {
                c.A.set("chromecast", !0),
                h.A.addClass(this.core.element, "chromecast");
                var e = this.playerHandler
                  , t = l.A.PLAYER_PLAY
                  , i = l.A.PLAYER_PAUSE
                  , n = l.A.PLAYER_SET_VOLUME
                  , s = l.A.PLAYER_SET_CURRENT_TIME
                  , r = l.A.PLAYER_SET_QUALITY;
                this.remoteEventsIds.setVolume = a.A.on(n, e.setVolume.bind(e)),
                this.remoteEventsIds.setCurrentTime = a.A.on(s, e.seekTo.bind(e)),
                this.remoteEventsIds.play = a.A.on(t, e.play.bind(e)),
                this.remoteEventsIds.pause = a.A.on(i, e.pause.bind(e)),
                this.remoteEventsIds.quality = a.A.on(r, e.load.bind(e)),
                this.remoteEventsIds.mute = a.A.on(l.A.MUTE_CLICK, e.setMute.bind(e)),
                a.A.emit(l.A.USER_ACTION),
                a.A.emit(l.A.USER_ACTION_BLOCK)
            }
        }, {
            key: "detachRemoteEvents",
            value: function() {
                c.A.set("chromecast", !1),
                h.A.removeClass(this.core.element, "chromecast");
                var e = l.A.PLAYER_PLAY
                  , t = l.A.PLAYER_PAUSE
                  , i = l.A.PLAYER_SET_VOLUME
                  , n = l.A.PLAYER_SET_CURRENT_TIME
                  , s = l.A.PLAYER_SET_QUALITY;
                a.A.off(e, this.remoteEventsIds.play),
                a.A.off(t, this.remoteEventsIds.pause),
                a.A.off(i, this.remoteEventsIds.setVolume),
                a.A.off(n, this.remoteEventsIds.setCurrentTime),
                a.A.off(s, this.remoteEventsIds.quality),
                a.A.off(l.A.MUTE_CLICK, this.remoteEventsIds.mute),
                a.A.emit(l.A.USER_ACTION),
                a.A.emit(l.A.USER_ACTION_UNBLOCK)
            }
        }, {
            key: "init",
            value: function() {
                this.checkIsDeviceAvailable(),
                a.A.on(l.A.REMOTE_PLAYER_USER_REQUEST, this.loadChromecastFramework.bind(this))
            }
        }, {
            key: "loadChromecastFramework",
            value: function() {
                var e = this;
                this.isLoaded && this.removeOldSource(),
                window.__onGCastApiAvailable = function(t) {
                    t && (e.isLoaded = !0,
                    e.initRealChromecast())
                }
                ,
                h.A.getScript(this.sourceUrl).catch(function(e) {
                    a.A.emit(l.A.STATISTICS_UI, o.A.chromecast_libs_load_error),
                    console.warn("Chromecast script loading error:", e),
                    alert((0,
                    u.T)("xplayerChromecastError"))
                })
            }
        }, {
            key: "removeOldSource",
            value: function() {
                document.querySelector('script[src="'.concat(this.sourceUrl, '"]')).remove()
            }
        }, {
            key: "checkIsDeviceAvailable",
            value: function() {
                var e = null;
                try {
                    e = new window.PresentationRequest("cast:CC1AD845")
                } catch (e) {
                    return !1
                }
                return !!e && (navigator.presentation.defaultRequest = e,
                e.getAvailability().then(function(e) {
                    e.addEventListener("change", function() {
                        e.value && a.A.emit(l.A.REMOTE_PLAYER_DEVICE_AVAILABLE)
                    })
                }).catch(function(e) {
                    console.warn("Presentation availability not supported, " + e.name + ": " + e.message)
                }),
                !0)
            }
        }, {
            key: "initRealChromecast",
            value: function() {
                if (!(null != (e = window.cast) && e.framework) || !window.chrome) {
                    a.A.emit(l.A.STATISTICS_UI, o.A.chromecast_framework_lib_load_error),
                    alert((0,
                    u.T)("xplayerChromecastError"));
                    return
                }
                a.A.emit(l.A.REMOTE_PLAYER_CHROMECAST_LOADED),
                a.A.emit(l.A.STATISTICS_UI, o.A.chromecast_libs_load_success);
                var e, t = {}, i = document.querySelector(".volume-bar .bar .filler"), n = document.querySelector(".volume-bar .bar .handle"), s = document.querySelector(".volume-controls .volume");
                t.receiverApplicationId = window.chrome.cast.media.DEFAULT_MEDIA_RECEIVER_APP_ID,
                t.autoJoinPolicy = window.chrome.cast.AutoJoinPolicy.PAGE_SCOPED,
                t.androidReceiverCompatible = !1,
                window.cast.framework.CastContext.getInstance().setOptions(t);
                var r = new window.chrome.cast.CredentialsData('{"userId": "abc"}');
                window.cast.framework.CastContext.getInstance().setLaunchCredentialsData(r),
                this.remotePlayer = new window.cast.framework.RemotePlayer,
                this.remotePlayerController = new window.cast.framework.RemotePlayerController(this.remotePlayer),
                this.remoteModule = new A({
                    playerHandler: this.playerHandler,
                    remotePlayer: this.remotePlayer,
                    remotePlayerController: this.remotePlayerController,
                    core: this.core,
                    volumeControls: {
                        filler: i,
                        handler: n,
                        volumeElement: s
                    }
                });
                var c = window.cast.framework.RemotePlayerEventType.IS_CONNECTED_CHANGED;
                this.remotePlayerController.addEventListener(c, this.switchPlayer.bind(this)),
                this.chromecastBg = new m(this.core.element),
                document.querySelector("google-cast-launcher").click()
            }
        }, {
            key: "switchPlayer",
            value: function() {
                var e;
                if (c.A.get("ads") || c.A.get("ads_preload")) {
                    a.A.once(l.A.ADS_ENDED, this.switchPlayer.bind(this)),
                    c.A.get("playing") || a.A.emit(l.A.PLAYER_PLAY);
                    return
                }
                if (a.A.emit(l.A.PLAYER_PAUSE),
                c.A.set("playing", !1),
                null != (e = window.cast) && e.framework) {
                    if (this.remotePlayer.isConnected && this.remoteModule) {
                        this.chromecastBg.show(),
                        this.attachRemoteEvents(),
                        this.remoteModule.init(),
                        a.A.emit(l.A.REMOTE_PLAYER_SESSION_START);
                        return
                    }
                    this.remotePlayer.isConnected || this.remotePlayerController.stop()
                }
                this.chromecastBg.hide(),
                this.detachRemoteEvents(),
                a.A.emit(l.A.REMOTE_PLAYER_SESSION_END),
                a.A.emit(l.A.PLAYER_SET_VOLUME, this.core.capabilities.mobile ? 1 : this.core.videoElement.volume),
                a.A.emit(l.A.PLAYER_SET_CURRENT_TIME, c.A.get("currentTime")),
                c.A.get("ended") || a.A.emit(l.A.PLAYER_PLAY)
            }
        }])
    },
    74681: function(e, t, i) {
        "use strict";
        var n = i(84422)
          , s = i(15904)
          , r = i(86096)
          , o = i(37651)
          , a = i(10809)
          , l = i(7163)
          , c = i(54098)
          , h = "xp-fullscreen-control--out"
          , u = "xh-helper-hidden";
        t.A = (0,
        s.A)(function e(t, i) {
            (0,
            n.A)(this, e),
            (0,
            r.A)(this, "core", void 0),
            (0,
            r.A)(this, "options", void 0),
            (0,
            r.A)(this, "element", void 0),
            this.core = t,
            this.options = null == i ? void 0 : i.fullscreenControl,
            this.init(),
            this.attachEvents()
        }, [{
            key: "init",
            value: function() {
                this.element = document.createElement("div");
                var e, t = this.core.capabilities.mobilePlayer2 ? u : "", i = (null == (e = this.options) ? void 0 : e.customClass) || "";
                this.element.className = "xp-fullscreen-control ".concat(i, " ").concat(t).trim()
            }
        }, {
            key: "attachEvents",
            value: function() {
                var e = this;
                this.element.addEventListener("click", this.onClick.bind(this)),
                o.A.on(a.A.AFTERSHOT_CLOSE, this.fullscreenOut.bind(this)),
                this.core.capabilities.mobilePlayer2 && (o.A.on(a.A.AFTERSHOT_SHOW, this.fullscreenOut.bind(this)),
                o.A.once(a.A.PLAYER_ON_PLAY, function() {
                    return l.A.removeClass(e.element, u)
                })),
                o.A.on(a.A.PLAYER_ON_FULLSCREEN_CHANGE, function() {
                    if (c.A.get("fullscreen"))
                        return void l.A.addClass(e.element, h);
                    l.A.removeClass(e.element, h)
                })
            }
        }, {
            key: "fullscreenOut",
            value: function() {
                c.A.get("fullscreen") && (c.A.get("playing") && o.A.emit(a.A.PLAYER_PAUSE),
                o.A.emit(a.A.PLAYER_TOGGLE_FULLSCREEN))
            }
        }, {
            key: "onClick",
            value: function() {
                c.A.get("ads") ? (o.A.emit(a.A.PLAYER_PLAY),
                o.A.once(a.A.ADS_ENDED, function() {
                    o.A.once(a.A.PLAYER_ON_PLAYING, function() {
                        c.A.get("fullscreen") || o.A.emit(a.A.PLAYER_TOGGLE_FULLSCREEN)
                    })
                })) : o.A.emit(a.A.PLAYER_TOGGLE_FULLSCREEN)
            }
        }])
    },
    89225: function(e, t, i) {
        "use strict";
        var n = i(84422)
          , s = i(15904)
          , r = i(86096)
          , o = i(10809)
          , a = i(37651)
          , l = i(83899)
          , c = i(7163)
          , h = i(9776)
          , u = "subtitles-control"
          , d = "".concat(u, "--enabled")
          , A = "".concat(u, "--disabled")
          , p = "xh-helper-hidden";
        t.A = (0,
        s.A)(function e(t, i) {
            (0,
            n.A)(this, e),
            (0,
            r.A)(this, "core", void 0),
            (0,
            r.A)(this, "options", void 0),
            (0,
            r.A)(this, "element", void 0),
            this.core = t,
            this.options = (null == i ? void 0 : i.subtitles) || {},
            this.init()
        }, [{
            key: "init",
            value: function() {
                var e, t = this;
                null != (e = this.options.tracks) && e.length && (this.render(),
                a.A.once(o.A.SUBTITLES_READY, function(e) {
                    if (e) {
                        t.element.classList.remove(p);
                        var i = t.core.settings.subtitlesStateByButton
                          , n = "off" !== e.lang;
                        ("on" === i || !i) && n && t.enable(),
                        t.unblock(),
                        t.attachEvents()
                    }
                }),
                a.A.on(o.A.SUBTITLES_NO_AVAILABLE_TRACKS, this.hideButton.bind(this)))
            }
        }, {
            key: "unblock",
            value: function() {
                this.element.classList.remove(A)
            }
        }, {
            key: "hideButton",
            value: function() {
                this.element.classList.add(p)
            }
        }, {
            key: "render",
            value: function() {
                this.element = document.createElement("div"),
                this.element.className = u,
                this.element.classList.add(p),
                this.element.classList.add(A)
            }
        }, {
            key: "enable",
            value: function() {
                this.element.classList.add(d)
            }
        }, {
            key: "disable",
            value: function() {
                this.element.classList.remove(d)
            }
        }, {
            key: "attachEvents",
            value: function() {
                h.A.addClickWithYield(this.element, this.onElementClick.bind(this)),
                a.A.on(o.A.SUBTITLES_SET_LANG, this.onSetTrack.bind(this)),
                a.A.on(o.A.SUBTITLES_SAVE_LANG, this.onSetTrack.bind(this))
            }
        }, {
            key: "onSetTrack",
            value: function(e) {
                "off" === e.lang ? this.disable() : this.enable()
            }
        }, {
            key: "onElementClick",
            value: function() {
                c.A.hasClass(this.element, A) || (c.A.hasClass(this.element, d) ? (a.A.emit(o.A.SUBTITLES_HIDE_BUTTON_CLICK),
                a.A.emit(o.A.SUBTITLES_STATE_BY_BUTTON, "off"),
                a.A.emit(o.A.STATISTICS_UI, l.A.subtitles_by_button_off),
                this.disable()) : (a.A.emit(o.A.SUBTITLES_SHOW_BUTTON_CLICK),
                a.A.emit(o.A.SUBTITLES_STATE_BY_BUTTON, "on"),
                a.A.emit(o.A.STATISTICS_UI, l.A.subtitles_by_button_on),
                this.enable()))
            }
        }])
    },
    53900: function(e, t, i) {
        "use strict";
        i.d(t, {
            H: function() {
                return p
            }
        });
        var n = i(84422)
          , s = i(15904)
          , r = i(86096)
          , o = i(78772)
          , a = i(7163)
          , l = i(54098)
          , c = i(37651)
          , h = i(10809)
          , u = "xh-helper-hidden"
          , d = "xplayer-dsa-label"
          , A = "".concat(d, "__text")
          , p = (0,
        s.A)(function e(t) {
            (0,
            n.A)(this, e),
            (0,
            r.A)(this, "core", void 0),
            (0,
            r.A)(this, "element", void 0),
            this.core = t,
            this.init()
        }, [{
            key: "init",
            value: function() {
                this.render(),
                this.attachEvents()
            }
        }, {
            key: "render",
            value: function() {
                this.element = (0,
                o.SL)('\n            <div class="'.concat(d, " ").concat(u, '">\n                <div class="').concat(A, '">\n                    Includes commercial communications\n                </div>\n            </div>\n        ')),
                this.core.element.appendChild(this.element)
            }
        }, {
            key: "attachEvents",
            value: function() {
                l.A.get("ads_preload") || l.A.get("ads") ? c.A.once(h.A.ADS_ENDED, this.showDSA.bind(this)) : c.A.once(h.A.PLAYER_ON_PLAYING, this.showDSA.bind(this))
            }
        }, {
            key: "showDSA",
            value: function() {
                var e = this;
                a.A.removeClass(this.element, u),
                setTimeout(function() {
                    a.A.addClass(e.element, u)
                }, 5e3)
            }
        }])
    },
    45055: function(e, t, i) {
        "use strict";
        i.d(t, {
            t: function() {
                return a
            }
        });
        var n = i(84422)
          , s = i(15904)
          , r = i(86096)
          , o = i(78772)
          , a = (0,
        s.A)(function e(t, i) {
            (0,
            n.A)(this, e),
            (0,
            r.A)(this, "element", void 0),
            (0,
            r.A)(this, "template", void 0),
            (0,
            r.A)(this, "core", void 0),
            this.core = t,
            this.template = i,
            this.element = null,
            this.template && this.render()
        }, [{
            key: "render",
            value: function() {
                var e = '<div class="xp-handy" data-role="handy-integration-panel">'.concat(this.template, "</div>");
                this.element = (0,
                o.SL)(e),
                this.core.element.appendChild(this.element)
            }
        }, {
            key: "getElement",
            value: function() {
                return this.element
            }
        }])
    },
    59301: function(e, t, i) {
        "use strict";
        i.d(t, {
            y: function() {
                return h
            }
        });
        var n = i(84422)
          , s = i(15904)
          , r = i(86096)
          , o = i(37651)
          , a = i(10809)
          , l = i(90942)
          , c = i(47647)
          , h = (0,
        s.A)(function e(t, i) {
            var s, o = this;
            (0,
            n.A)(this, e),
            (0,
            r.A)(this, "core", void 0),
            (0,
            r.A)(this, "currentVideo", void 0),
            (0,
            r.A)(this, "nextVideo", void 0),
            (0,
            r.A)(this, "previousVideo", void 0),
            (0,
            r.A)(this, "relatedVideos", void 0),
            (0,
            r.A)(this, "storedItems", void 0),
            (0,
            r.A)(this, "storedIDs", void 0),
            (0,
            r.A)(this, "storage", void 0),
            (0,
            r.A)(this, "related", void 0),
            (0,
            r.A)(this, "nextButtonElement", void 0),
            (0,
            r.A)(this, "previousButtonElement", void 0),
            (0,
            r.A)(this, "showedElement", void 0),
            (0,
            r.A)(this, "onNextClick", function() {
                o.nextVideo.url && (o.saveCurrentVideoAsPreviousToStorage(),
                o.setAutoplayFlag(),
                window.location.href = o.nextVideo.url)
            }),
            (0,
            r.A)(this, "onPreviousClick", function() {
                var e;
                null != (e = o.previousVideo) && e.url && (o.setAutoplayFlag(),
                window.location.href = o.previousVideo.url)
            }),
            this.core = t,
            this.relatedVideos = i.relatedVideos,
            this.relatedVideos && this.core.options.videoInfo && (this.storage = new l.A("session"),
            this.currentVideo = this.core.options.videoInfo,
            this.storedItems = JSON.parse(this.storage.getItem("xplayer-next-video")),
            this.storedIDs = null == (s = this.storedItems) ? void 0 : s.map(function(e) {
                return e.idHash
            }),
            this.init())
        }, [{
            key: "init",
            value: function() {
                this.saveCurrentVideoToStorage(),
                this.setControlButtonsVideoData(),
                this.renderThumbs(),
                this.getControlsElements(),
                this.attachEvents()
            }
        }, {
            key: "saveCurrentVideoToStorage",
            value: function() {
                var e = this.currentVideo.idHash;
                this.storedItems || (this.storedItems = [],
                this.storedIDs = [],
                this.storedItems.push(this.currentVideo),
                this.storedIDs.push(e)),
                this.storedIDs.some(function(t) {
                    return t === e
                }) || (this.storedItems.push(this.currentVideo),
                this.storedIDs.push(e)),
                this.storage.setItem("xplayer-next-video", JSON.stringify(this.storedItems))
            }
        }, {
            key: "saveCurrentVideoAsPreviousToStorage",
            value: function() {
                this.storage.setItem("xplayer-previous-video", JSON.stringify(this.currentVideo))
            }
        }, {
            key: "findFirstUnseenRelated",
            value: function() {
                var e = this;
                return this.relatedVideos.find(function(t) {
                    return -1 === e.storedIDs.indexOf(t.idHash)
                })
            }
        }, {
            key: "setControlButtonsVideoData",
            value: function() {
                var e, t = this, i = this.currentVideo.idHash, n = this.findFirstUnseenRelated();
                this.previousVideo = null;
                var s = i === this.relatedVideos[0].idHash
                  , r = this.storedIDs.findIndex(function(e) {
                    return e === i
                });
                s ? n || (this.previousVideo = JSON.parse(this.storage.getItem("xplayer-previous-video"))) : this.previousVideo = this.storedItems[r - 1],
                this.nextVideo = this.storedItems[r + 1] || n,
                this.nextVideo || (this.nextVideo = this.relatedVideos.find(function(e) {
                    return e.idHash !== i
                })),
                this.nextVideo.idHash === (null == (e = this.previousVideo) ? void 0 : e.idHash) && (this.nextVideo = this.relatedVideos.find(function(e) {
                    var n = e.idHash;
                    return n !== i && n !== t.previousVideo.idHash
                }))
            }
        }, {
            key: "renderThumbs",
            value: function() {}
        }, {
            key: "getControlsElements",
            value: function() {
                var e = ".xplayer-next-video-control--";
                this.nextButtonElement = this.core.element.querySelector("".concat(e).concat(c.r.Next)),
                this.previousButtonElement = this.core.element.querySelector("".concat(e).concat(c.r.Previous)),
                this.previousVideo || this.previousButtonElement.classList.add("disabled")
            }
        }, {
            key: "show",
            value: function(e) {
                e.classList.remove("xh-helper-hidden"),
                this.showedElement = e
            }
        }, {
            key: "attachEvents",
            value: function() {
                o.A.on(a.A.NEXT_VIDEO_BUTTON_NEXT_CLICK, this.onNextClick),
                o.A.on(a.A.NEXT_VIDEO_BUTTON_PREVIOUS_CLICK, this.onPreviousClick)
            }
        }, {
            key: "setAutoplayFlag",
            value: function() {
                this.storage.setItem("xplayer-autoplay", "true")
            }
        }])
    },
    49587: function(e, t, i) {
        "use strict";
        i.d(t, {
            _: function() {
                return _
            }
        });
        var n = i(84422)
          , s = i(15904)
          , r = i(4251)
          , o = i(23317)
          , a = i(42024)
          , l = i(40311)
          , c = i(37651)
          , h = i(10809)
          , u = i(86096)
          , d = i(47647)
          , A = i(78772)
          , p = (0,
        u.A)((0,
        u.A)({}, d.r.Next, h.A.NEXT_VIDEO_PREVIEW_SHOW_NEXT), d.r.Previous, h.A.NEXT_VIDEO_PREVIEW_SHOW_PREVIOUS)
          , m = (0,
        u.A)((0,
        u.A)({}, d.r.Next, h.A.NEXT_VIDEO_BUTTON_NEXT_CLICK), d.r.Previous, h.A.NEXT_VIDEO_BUTTON_PREVIOUS_CLICK)
          , v = (0,
        s.A)(function e(t) {
            var i = this;
            (0,
            n.A)(this, e),
            (0,
            u.A)(this, "type", void 0),
            (0,
            u.A)(this, "element", void 0),
            (0,
            u.A)(this, "showPreview", function() {
                c.A.emit(p[i.type])
            }),
            (0,
            u.A)(this, "hidePreview", function() {
                c.A.emit(h.A.NEXT_VIDEO_PREVIEW_HIDE)
            }),
            (0,
            u.A)(this, "onClick", function() {
                [].includes.call(i.element.classList, "disabled") || c.A.emit(m[i.type])
            }),
            this.type = t,
            this.init()
        }, [{
            key: "init",
            value: function() {
                this.render(),
                this.attachEvents()
            }
        }, {
            key: "render",
            value: function() {
                var e;
                this.element = (0,
                A.SL)((e = this.type,
                '\n        <div class="xplayer-next-video-control xplayer-next-video-control--'.concat(e, '">\n            <div class="xplayer-next-video-control__img xplayer-next-video-control__img--').concat(e, '">\n        </div>\n    ')))
            }
        }, {
            key: "attachEvents",
            value: function() {
                this.element.addEventListener("mouseenter", this.showPreview),
                this.element.addEventListener("mouseleave", this.hidePreview),
                this.element.addEventListener("click", this.onClick)
            }
        }, {
            key: "getElement",
            value: function() {
                return this.element
            }
        }]);
        function E() {
            try {
                var e = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {}))
            } catch (e) {}
            return (E = function() {
                return !!e
            }
            )()
        }
        var f = "xh-helper-hidden"
          , _ = function(e) {
            function t() {
                var e, i;
                return (0,
                n.A)(this, t),
                e = t,
                i = arguments,
                e = (0,
                o.A)(e),
                (0,
                r.A)(this, E() ? Reflect.construct(e, i || [], (0,
                o.A)(this).constructor) : e.apply(this, i))
            }
            return (0,
            l.A)(t, e),
            (0,
            s.A)(t, [{
                key: "attachEvents",
                value: function() {
                    var e, i;
                    (e = this,
                    i = (0,
                    a.A)((0,
                    o.A)(t.prototype), "attachEvents", e),
                    "function" == typeof i ? function(t) {
                        return i.apply(e, t)
                    }
                    : i)([]),
                    c.A.on(h.A.AFTERSHOT_SHOW, this.hide.bind(this)),
                    c.A.on(h.A.AFTERSHOT_SEND_UI_CLOSE, this.show.bind(this))
                }
            }, {
                key: "hide",
                value: function() {
                    this.element.classList.add(f)
                }
            }, {
                key: "show",
                value: function() {
                    this.element.classList.remove(f)
                }
            }])
        }(v)
    },
    47647: function(e, t, i) {
        "use strict";
        var n, s;
        i.d(t, {
            r: function() {
                return n
            }
        }),
        (s = n || (n = {})).Next = "next",
        s.Previous = "previous"
    },
    57109: function(e, t, i) {
        "use strict";
        var n = i(84422)
          , s = i(15904)
          , r = i(86096)
          , o = i(54588)
          , a = i.n(o)
          , l = i(37651)
          , c = i(10809)
          , h = i(54098);
        t.A = (0,
        s.A)(function e(t, i) {
            (0,
            n.A)(this, e),
            (0,
            r.A)(this, "core", void 0),
            (0,
            r.A)(this, "options", void 0),
            (0,
            r.A)(this, "videoElement", void 0),
            (0,
            r.A)(this, "orientation", void 0),
            (0,
            r.A)(this, "isInViewport", void 0),
            (0,
            r.A)(this, "intersectionTimeout", void 0),
            (0,
            r.A)(this, "observer", void 0),
            this.core = t,
            this.options = i,
            this.videoElement = null,
            this.orientation = null,
            this.isInViewport = !1,
            this.intersectionTimeout = 0,
            this.init()
        }, [{
            key: "init",
            value: function() {
                this.orientation = this.isPortrait(window.orientation) ? "portrait" : "landscape",
                h.A.set("orientation", this.orientation),
                this.videoElement = document.querySelector("#xplayer__video"),
                this.observer = new IntersectionObserver(this.setIsInViewport.bind(this),{
                    rootMargin: "0px",
                    threshold: .6
                }),
                this.observer.observe(this.videoElement),
                this.attachEvents()
            }
        }, {
            key: "attachEvents",
            value: function() {
                window.addEventListener("orientationchange", this.checkOrientation.bind(this))
            }
        }, {
            key: "setIsInViewport",
            value: function(e) {
                var t = this;
                clearTimeout(this.intersectionTimeout),
                this.intersectionTimeout = setTimeout(function() {
                    "portrait" === t.orientation && e.forEach(function(e) {
                        t.isInViewport = e.isIntersecting
                    })
                }, 400)
            }
        }, {
            key: "isPortrait",
            value: function(e) {
                return 0 === e || 180 === e
            }
        }, {
            key: "checkOrientation",
            value: function(e) {
                var t, i;
                return a().async(function(n) {
                    for (; ; )
                        switch (n.prev = n.next) {
                        case 0:
                            i = (null == e || null == (t = e.target) || null == (t = t.screen) || null == (t = t.orientation) ? void 0 : t.angle) || window.orientation,
                            this.isPortrait(i) ? (this.orientation = "portrait",
                            this.options.enabled && (this.core.isVideoVertical() ? this.tryToSetFullscreen() : this.tryExitFullscreen())) : (this.orientation = "landscape",
                            this.options.enabled && (this.core.isVideoVertical() ? this.tryExitFullscreen() : this.tryToSetFullscreen())),
                            h.A.set("orientation", this.orientation),
                            l.A.emit(c.A.PLAYER_ON_CHANGE_ORIENTATION, this.orientation);
                        case 4:
                        case "end":
                            return n.stop()
                        }
                }, null, this, null, Promise)
            }
        }, {
            key: "hasFullscreenBlockers",
            value: function() {
                return h.A.get("error") || !this.core.isVideoVertical() && "landscape" !== this.orientation || this.core.isVideoVertical() && "landscape" === this.orientation || !h.A.get("sourceLoaded") || !this.options.hasAdsFullscreen && h.A.get("ads_playing") || h.A.get("fullscreen") || !this.isInViewport || !h.A.get("playing")
            }
        }, {
            key: "tryToSetFullscreen",
            value: function() {
                var e, t, i, n, s, r = this;
                if (this.hasFullscreenBlockers())
                    h.A.get("ads_playing") && l.A.once(c.A.ADS_ENDED, function() {
                        l.A.once(c.A.PLAYER_ON_PLAYING, r.tryToSetFullscreen.bind(r))
                    });
                else {
                    if (l.A.emit(c.A.PLAYER_TOGGLE_FULLSCREEN),
                    l.A.emit(c.A.PLAYER_ORIENTATION_SET_FULLSCREEN, "in"),
                    null != (e = this.options) && e.exitFullscreenOnPortraitMode)
                        return;
                    this.core.isVideoVertical() ? null == (t = window) || null == (t = t.screen) || null == (t = t.orientation) || null == (i = t.lock) || i.call(t, "portrait") : null == (n = window) || null == (n = n.screen) || null == (n = n.orientation) || null == (s = n.lock) || s.call(n, "landscape")
                }
            }
        }, {
            key: "tryExitFullscreen",
            value: function() {
                h.A.get("fullscreen") && (l.A.emit(c.A.PLAYER_TOGGLE_FULLSCREEN),
                l.A.emit(c.A.PLAYER_ORIENTATION_SET_FULLSCREEN, "out"))
            }
        }])
    },
    23281: function(e, t, i) {
        "use strict";
        i.d(t, {
            A: function() {
                return A
            }
        });
        var n = i(84422)
          , s = i(15904)
          , r = i(4251)
          , o = i(23317)
          , a = i(40311)
          , l = i(10809)
          , c = i(83985)
          , h = i(97590)
          , u = function(e) {
            var t = e.id
              , i = e.label
              , n = e.checked;
            return '\n        <span class="xplayer-settings-av1__label-container">\n            <div class="xplayer-settings-av1__label">'.concat(i, '</div>\n            <label for="').concat(t, '" class="toggle-control switcher">\n                <input id="').concat(t, '" class="').concat(t, '" ').concat(n ? "checked" : "", ' type="checkbox">\n                <div class="toggler-container">\n                    <div class="toggler"></div>\n                </div>\n            </label>\n        </span>\n        <div class="xplayer-settings-av1__tip">').concat((0,
            h.T)("xplayerSettingsAv1Tip"), "</div>\n    ")
        };
        function d() {
            try {
                var e = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {}))
            } catch (e) {}
            return (d = function() {
                return !!e
            }
            )()
        }
        var A = function(e) {
            function t() {
                var e, i;
                return (0,
                n.A)(this, t),
                e = t,
                i = arguments,
                e = (0,
                o.A)(e),
                (0,
                r.A)(this, d() ? Reflect.construct(e, i || [], (0,
                o.A)(this).constructor) : e.apply(this, i))
            }
            return (0,
            a.A)(t, e),
            (0,
            s.A)(t, [{
                key: "getTemplate",
                value: function() {
                    return u
                }
            }, {
                key: "getTemplateOptions",
                value: function() {
                    return {
                        id: "av1_toggler",
                        label: (0,
                        h.T)("xplayerSettingsAv1Recommended"),
                        checked: this.core.settings.useAv1
                    }
                }
            }, {
                key: "init",
                value: function() {
                    this.element = document.createElement("span"),
                    this.element.className = "setting with-av1",
                    this.render(),
                    this.attachEvents()
                }
            }, {
                key: "attachEvents",
                value: function() {
                    var e = this;
                    this.element.addEventListener("change", function(t) {
                        return e.core.emit(l.A.PLAYER_SET_AV1_OPTION, t.target.checked)
                    })
                }
            }])
        }(c.A)
    },
    48029: function(e, t, i) {
        "use strict";
        i.d(t, {
            A: function() {
                return G
            }
        });
        var n = i(52402)
          , s = i(84422)
          , r = i(15904)
          , o = i(86096)
          , a = i(54588)
          , l = i.n(a)
          , c = i(7163)
          , h = i(10809)
          , u = i(37651)
          , d = i(54098)
          , A = i(9776)
          , p = i(83899)
          , m = function(e) {
            var t = e.label
              , i = e.selectName
              , n = e.className
              , s = e.selected
              , r = e.hasArrow;
            return '\n        <div class="'.concat(n, '" name="').concat(i, '">\n            <div class="').concat(n, '-label">\n            <div class="').concat(n, "-icon ").concat(n, "-icon--").concat(i, '"></div>\n                ').concat(t, '\n            </div>\n            <div class="').concat(n, ' xp-selected-setting">').concat(void 0 === s ? "" : s, '\n                <div class="xp-selected-setting__container">\n                    <div class="xp-selected-setting__text"></div>\n                    <div class="xp-selected-setting__icon"></div>\n                </div>\n                ').concat(void 0 === r || r ? '<div class="xp-selected-setting__arrow"></div>' : "", "\n            </div>\n        </div>\n    ")
        }
          , v = function(e) {
            var t = e.label
              , i = e.value
              , n = e.statisticsClass
              , s = e.className
              , r = e.isSelected;
            return '\n        <div value="'.concat(i, '" class="').concat(s, " ").concat(n, " ").concat(void 0 !== r && r ? "selected" : "", '">\n            <div class="').concat(s, '-name">\n                <div class="').concat(s, '-label">').concat(t, '</div>\n                <div class="').concat(s, '-icon"></div>\n            </div>\n            <div class="').concat(s, '-icon--selected"></div>\n        </div>\n    ')
        }
          , E = function(e) {
            var t = e.className;
            return '\n    <div class="'.concat(t, ' xh-helper-hidden">\n      <div class="').concat(t, '__background"></div>\n    </div>\n')
        }
          , f = function(e) {
            var t = e.parentClassName
              , i = e.className
              , n = e.title
              , s = e.reportText;
            return '\n<div class="'.concat(i, '">\n    <div class="').concat(t, '__title">').concat(n, '</div>\n    <div class="').concat(t, '__close"></div>\n    <div class="').concat(t, '__selects">\n    </div>\n    <div class="').concat(t, '__splitter"></div>\n    <div class="').concat(t, '__report">\n        <div class="').concat(t, '__report-icon"></div>\n        <div class="').concat(t, '__report-inner">').concat(s, "</div>\n    </div>\n</div>\n")
        }
          , _ = function(e) {
            var t = e.label
              , i = e.className
              , n = e.backText
              , s = e.idName;
            return '\n        <div id="'.concat(void 0 === s ? "" : s, '" class="').concat(i, '__modal">\n            <div class="').concat(i, '__title">').concat(t, '</div>\n            <div class="').concat(i, '__close"></div>\n            <div class="').concat(i, '__splitter"></div>\n            <div class="').concat(i, '__back">\n                <div class="').concat(i, '__back-icon"></div>\n                ').concat(n, "\n            </div>\n        </div>\n")
        }
          , y = function(e) {
            var t = e.label
              , i = e.selectName
              , n = e.className
              , s = e.selected
              , r = e.unavailableText;
            return '\n        <div id="defaultSubtitles" class="'.concat(n, " ").concat(n, '--disabled" name="').concat(i, '">\n            <div class="').concat(n, '-label">\n            <div class="').concat(n, "-icon ").concat(n, "-icon--").concat(i, '"></div>\n                ').concat(t, '\n            </div>\n            <div class="').concat(n, ' xp-selected-setting">').concat(void 0 === s ? "" : s, '\n                <div class="xp-selected-setting__container">\n                    <div class="xp-selected-setting__text">').concat(void 0 === r ? "" : r, '</div>\n                    <div class="xp-selected-setting__icon"></div>\n                </div>\n            </div>\n        </div>\n    ')
        }
          , g = i(23281);
        function S(e) {
            return !!e && "string" == typeof e && e[0].toUpperCase() + e.slice(1)
        }
        var b = i(78772)
          , T = i(97590)
          , k = "xplayer-settings-menu-new"
          , L = "".concat(k, "__close")
          , O = "".concat(k, "__back")
          , P = "".concat(k, "__selects")
          , C = "".concat(k, "__select")
          , R = "xp-selected-setting__icon"
          , w = "xp-selected-setting__text"
          , N = "".concat(k, "__option")
          , D = "".concat(k, "__settings-inner")
          , I = "".concat(k, "--rtl")
          , U = "".concat(k, "__background")
          , x = "".concat(k, "__selects-container")
          , Y = "settings-select"
          , M = "".concat(k, "__report")
          , B = "selected"
          , F = "xh-helper-hidden"
          , V = "show"
          , H = [.25, .5, .75, 1, 1.25, 1.5, 1.75, 2]
          , W = function() {
            return {
                lang: "off",
                label: (0,
                T.T)("xplayerSettingsOff")
            }
        }
          , G = (0,
        r.A)(function e(t, i) {
            var n;
            (0,
            s.A)(this, e),
            (0,
            o.A)(this, "element", void 0),
            (0,
            o.A)(this, "closeElement", void 0),
            (0,
            o.A)(this, "backgroundElement", void 0),
            (0,
            o.A)(this, "settingsElement", void 0),
            (0,
            o.A)(this, "selectsElement", void 0),
            (0,
            o.A)(this, "reportElement", void 0),
            (0,
            o.A)(this, "qualitySettingsModal", void 0),
            (0,
            o.A)(this, "qualitySelect", void 0),
            (0,
            o.A)(this, "qualitySelected", void 0),
            (0,
            o.A)(this, "qualitySelectedText", void 0),
            (0,
            o.A)(this, "qualitySelectedIcon", void 0),
            (0,
            o.A)(this, "playbackRatesModal", void 0),
            (0,
            o.A)(this, "playbackRatesSelect", void 0),
            (0,
            o.A)(this, "playbackRateSelected", void 0),
            (0,
            o.A)(this, "playbackRateSelectedText", void 0),
            (0,
            o.A)(this, "doubleTapModeSelect", void 0),
            (0,
            o.A)(this, "doubleTapModeModal", void 0),
            (0,
            o.A)(this, "doubleTapModeSelectedText", void 0),
            (0,
            o.A)(this, "selectRatesElement", void 0),
            (0,
            o.A)(this, "subtitlesSettingsModal", void 0),
            (0,
            o.A)(this, "subtitlesSelectsContainer", void 0),
            (0,
            o.A)(this, "subtitlesSelect", void 0),
            (0,
            o.A)(this, "subtitlesTrackElement", void 0),
            (0,
            o.A)(this, "subtitlesSelectedTextElement", void 0),
            (0,
            o.A)(this, "subtitlesTracksList", void 0),
            (0,
            o.A)(this, "subtitlesOptionsClickListeners", void 0),
            (0,
            o.A)(this, "av1Element", void 0),
            (0,
            o.A)(this, "wasOnPause", void 0),
            (0,
            o.A)(this, "oldBodyStyle", ""),
            (0,
            o.A)(this, "core", void 0),
            (0,
            o.A)(this, "options", void 0),
            (0,
            o.A)(this, "sfw", void 0),
            this.core = t,
            this.options = i,
            this.sfw = null == (n = t.options) ? void 0 : n.sfw,
            this.init()
        }, [{
            key: "init",
            value: function() {
                this.render(),
                this.attachEvents(),
                this.setRtl()
            }
        }, {
            key: "render",
            value: function() {
                var e;
                this.element = (0,
                b.SL)(E({
                    className: k
                })),
                this.backgroundElement = this.element.querySelector(".".concat(U)),
                this.settingsElement = (0,
                b.SL)(f({
                    parentClassName: k,
                    className: D,
                    title: (0,
                    T.T)("xplayerSettingsTitle"),
                    reportText: (0,
                    T.T)("xplayerSettingsReportStreaming")
                })),
                this.closeElement = this.settingsElement.querySelector(".".concat(L)),
                this.selectsElement = this.settingsElement.querySelector(".".concat(P)),
                this.reportElement = this.settingsElement.querySelector(".".concat(M)),
                this.renderQualitySettings(),
                this.renderPlaybackRates(),
                !this.core.capabilities.idevice && this.core.sourceController.getHasAv1Source() && this.renderAv1(),
                null != (e = this.options.subtitles) && null != (e = e.tracks) && e.length ? this.renderSubtitles() : this.renderSubtitlesDefaultTpl(),
                this.element.appendChild(this.settingsElement),
                document.body.appendChild(this.element)
            }
        }, {
            key: "attachEvents",
            value: function() {
                var e = this;
                u.A.on(h.A.SETTINGS_MENU_OPEN, this.setBodyStyleAndShowSettings, this),
                u.A.on(h.A.SOURCE_TYPE_CHANGE, this.onSourceTypeChange, this),
                u.A.on(h.A.PLAYER_ON_FULLSCREEN_CHANGE, this.moveSettingsNode, this),
                u.A.on(h.A.PLAYER_PLAY, function() {
                    e.wasOnPause = !1
                }),
                u.A.on(h.A.PLAYER_PAUSE, this.setWasOnPause.bind(this)),
                u.A.on(h.A.PLAYER_FALLBACK_SOURCE, this.rerenderQualityOptions, this),
                u.A.on(h.A.SETTINGS_RENDER_QUALITY, this.rerenderQualityOptions, this),
                u.A.on(h.A.SUBTITLES_SET_DEFAULT_LANG, this.setActiveSubtitlesElement.bind(this)),
                u.A.on(h.A.SUBTITLES_HIDE, this.setActiveSubtitlesElement.bind(this, W())),
                u.A.on(h.A.SUBTITLES_SHOW, this.setActiveSubtitlesElement.bind(this)),
                u.A.on(h.A.SUBTITLES_LOADED, this.resetTracksList.bind(this)),
                u.A.on(h.A.SUBTITLES_TRACK_LOAD_FAILED, this.resetTracksList.bind(this)),
                "off" !== this.core.settings.subtitlesStateByButton && u.A.once(h.A.SUBTITLES_READY, function(t) {
                    e.setDefaultLabel(t),
                    e.setActiveSubtitlesElement(t)
                }),
                u.A.on(h.A.SUBTITLES_NO_AVAILABLE_TRACKS, this.disableSubtitles.bind(this)),
                A.A.addClickWithYield(this.closeElement, this.hideSettingsMenu.bind(this)),
                A.A.addClickWithYield(this.reportElement, this.onReportClick.bind(this)),
                A.A.addClickWithYield(this.backgroundElement, this.hideSettingsAndModals.bind(this))
            }
        }, {
            key: "setRtl",
            value: function() {
                this.core.isRtl && this.element.classList.add(I)
            }
        }, {
            key: "renderAv1",
            value: function() {
                this.av1Element = document.createElement("div"),
                this.av1Element.className = "xplayer-settings-av1",
                this.av1Element.insertAdjacentHTML("afterbegin", '<div class="xplayer-settings-av1__icon"></div>'),
                this.av1Element.appendChild(new g.A(this.core).element);
                var e = this.settingsElement.querySelector(".".concat(k, "__splitter"));
                this.settingsElement.insertBefore(this.av1Element, e)
            }
        }, {
            key: "renderQualitySettings",
            value: function() {
                var e, t = (0,
                T.T)("xplayerSettingsQuality"), i = (0,
                T.T)("xplayerNavigationBack");
                this.qualitySelect = (0,
                b.SL)(m({
                    label: t,
                    selectName: "quality",
                    parentClassName: k,
                    className: C
                })),
                this.qualitySelectedText = this.qualitySelect.querySelector(".".concat(w)),
                this.qualitySelectedIcon = this.qualitySelect.querySelector(".".concat(R)),
                this.qualitySettingsModal = (0,
                b.SL)(_({
                    label: t,
                    className: k,
                    backText: i,
                    idName: "quality-modal"
                }));
                var n = this.core.sourceController;
                if (!n.ready)
                    return void u.A.once(h.A.SOURCE_CONTROLLER_READY, this.renderQualitySettings, this);
                var s = n.getQualities()
                  , r = this.qualitySettingsModal.querySelector(".".concat(k, "__splitter"))
                  , o = document.createDocumentFragment();
                this.createQualityOptionsInner(s, o, n),
                null != (e = this.sfw) && e.moderationTimestamp ? this.qualitySelect.addEventListener("click", function() {
                    u.A.emit(h.A.SFW_VERIFY)
                }) : (this.attachOpenModalClick(this.qualitySelect, this.qualitySettingsModal),
                this.attachCloseModalClick(this.qualitySettingsModal)),
                this.qualitySettingsModal.insertBefore(o, r),
                this.selectsElement.insertBefore(this.qualitySelect, this.playbackRatesSelect),
                this.element.insertAdjacentElement("afterbegin", this.qualitySettingsModal)
            }
        }, {
            key: "removeQualityOptionsInner",
            value: function() {
                document.querySelectorAll("#quality-modal .".concat(N)).forEach(function(e) {
                    return e.remove()
                })
            }
        }, {
            key: "createQualityOptionsInner",
            value: function(e, t, i) {
                var n = this;
                null == e || e.forEach(function(e) {
                    if ("auto" === e && i.getQuality) {
                        if (!(n.core.capabilities.hls || n.core.capabilities.hlsJs && "hls" === i.type))
                            return;
                        var s = i.getQuality(-1);
                        s && "0p" !== s || n.scheduleQualityLabelRefresh()
                    }
                    var r = e === i.getCurrentQuality();
                    r && (n.qualitySelected = e,
                    n.qualitySelectedText.textContent = n.getQualityLabel(e, i));
                    var o = (0,
                    b.SL)(v({
                        label: n.getQualityLabel(e, i),
                        value: e,
                        statisticsClass: "quality",
                        className: N,
                        isSelected: r
                    }))
                      , a = o.querySelector(".".concat(N, "-icon"));
                    c.A.addClass(a, n.getSourceType(e)),
                    o.addEventListener("click", function(e) {
                        var t = n.getOptionParent(e.target);
                        n.qualitySelected = t.getAttribute("value"),
                        n.selectOption(t, n.qualitySettingsModal),
                        n.toggleOptionsModal(n.qualitySettingsModal),
                        n.setQualitySettings()
                    }),
                    t.append(o)
                })
            }
        }, {
            key: "scheduleQualityLabelRefresh",
            value: function() {
                var e = this;
                if (d.A.get("ads"))
                    return void u.A.once(h.A.ADS_ENDED, function() {
                        u.A.once(h.A.PLAYER_ON_PLAYING, function() {
                            e.onSourceTypeChange()
                        })
                    });
                u.A.once(h.A.PLAYER_PLAY, function() {
                    e.onSourceTypeChange()
                })
            }
        }, {
            key: "getQualityLabel",
            value: function(e, t) {
                if ("auto" === e && t.getQuality) {
                    var i = t.getQuality(-1);
                    return i && "0p" !== i && "auto" !== i ? (0,
                    T.T)("xplayerSettingsAutoWithResolution", {
                        resolution: i
                    }) : (0,
                    T.T)("xplayerSettingsAuto")
                }
                var n = t.getLabelFromQuality(e);
                return (n ? S(n) : S(e)) || ""
            }
        }, {
            key: "rerenderQualityOptions",
            value: function() {
                var e = this.core.sourceController
                  , t = e.getQualities();
                if ((null == t ? void 0 : t.length) > 0) {
                    var i = document.createDocumentFragment()
                      , n = this.qualitySettingsModal.querySelector(".".concat(k, "__splitter"));
                    this.removeQualityOptionsInner(),
                    this.createQualityOptionsInner(t, i, e),
                    this.qualitySettingsModal.insertBefore(i, n)
                }
            }
        }, {
            key: "onSourceTypeChange",
            value: function() {
                var e = this.core.sourceController
                  , t = e.getCurrentQuality();
                "auto" === t && this.rerenderQualityOptions(),
                this.qualitySelectedText.textContent = this.getQualityLabel(t, e),
                this.qualitySelectedIcon.className = R,
                c.A.addClass(this.qualitySelectedIcon, this.getSourceType()),
                this.selectOption(t, this.qualitySettingsModal)
            }
        }, {
            key: "getOptionParent",
            value: function(e) {
                return e.getAttribute("value") ? e : this.getOptionParent(e.parentElement)
            }
        }, {
            key: "selectOption",
            value: function(e, t) {
                var i = "string" == typeof e;
                [].forEach.call(t.children, function(t) {
                    e === t || i && e === t.getAttribute("value") ? c.A.addClass(t, B) : c.A.removeClass(t, B)
                })
            }
        }, {
            key: "attachOpenModalClick",
            value: function(e, t) {
                A.A.addClickWithYield(e, this.toggleOptionsModal.bind(this, t))
            }
        }, {
            key: "attachCloseModalClick",
            value: function(e) {
                var t = e.querySelector(".".concat(L))
                  , i = e.querySelector(".".concat(O));
                A.A.addClickWithYield(t, this.toggleOptionsModal.bind(this, e)),
                A.A.addClickWithYield(i, this.toggleOptionsModal.bind(this, e))
            }
        }, {
            key: "toggleOptionsModal",
            value: function(e) {
                return l().async(function(t) {
                    for (; ; )
                        switch (t.prev = t.next) {
                        case 0:
                            e.classList.toggle(V),
                            c.A.hasClass(this.settingsElement, V) ? c.A.removeClass(this.settingsElement, V) : this.showSettingsMenu();
                        case 2:
                        case "end":
                            return t.stop()
                        }
                }, null, this, null, Promise)
            }
        }, {
            key: "renderPlaybackRates",
            value: function() {
                var e = this
                  , t = (0,
                T.T)("xplayerSettingsSpeed")
                  , i = (0,
                T.T)("xplayerNavigationBack")
                  , n = (0,
                T.T)("xplayerSettingsPlaybackRateDefaultSkipMe");
                this.playbackRatesSelect = (0,
                b.SL)(m({
                    label: t,
                    selectName: "playback-rates",
                    className: C
                })),
                this.playbackRatesModal = (0,
                b.SL)(_({
                    label: t,
                    className: k,
                    backText: i
                }));
                var s = this.playbackRatesModal.querySelector(".".concat(k, "__splitter"));
                this.selectRatesElement = this.playbackRatesSelect.querySelector(".".concat(Y)),
                this.playbackRateSelectedText = this.playbackRatesSelect.querySelector(".".concat(w));
                var r = document.createDocumentFragment();
                H.forEach(function(t) {
                    var i = (0,
                    b.SL)(v({
                        label: "".concat(t, "x"),
                        value: t,
                        statisticsClass: "playback-speed-setting",
                        className: N,
                        isSelected: 1 === t
                    }));
                    1 === t && (e.playbackRateSelectedText.textContent = n),
                    i.addEventListener("click", function(t) {
                        var i, n;
                        return l().async(function(s) {
                            for (; ; )
                                switch (s.prev = s.next) {
                                case 0:
                                    return s.next = 2,
                                    l().awrap(A.A.yieldToMain());
                                case 2:
                                    n = (i = e.getOptionParent(t.target)).getAttribute("value"),
                                    e.playbackRateSelected = n,
                                    e.selectOption(i, e.playbackRatesModal),
                                    e.toggleOptionsModal(e.playbackRatesModal),
                                    e.setRate(Number(n));
                                case 8:
                                case "end":
                                    return s.stop()
                                }
                        }, null, null, null, Promise)
                    }),
                    r.append(i)
                }),
                this.attachOpenModalClick(this.playbackRatesSelect, this.playbackRatesModal),
                this.attachCloseModalClick(this.playbackRatesModal),
                this.playbackRatesModal.insertBefore(r, s),
                this.selectsElement.appendChild(this.playbackRatesSelect),
                this.element.insertAdjacentElement("afterbegin", this.playbackRatesModal)
            }
        }, {
            key: "renderDoubleTapMode",
            value: function() {
                var e = this
                  , t = (0,
                T.T)("xplayerSettingsDoubleTapMode")
                  , i = (0,
                T.T)("xplayerNavigationBack");
                this.doubleTapModeSelect = (0,
                b.SL)(m({
                    label: t,
                    selectName: "double-tap-mode",
                    className: C
                })),
                this.doubleTapModeModal = (0,
                b.SL)(_({
                    label: t,
                    className: k,
                    backText: i
                })),
                this.doubleTapModeSelectedText = this.doubleTapModeSelect.querySelector(".".concat(w));
                var n = this.doubleTapModeModal.querySelector(".".concat(k, "__splitter"))
                  , s = document.createDocumentFragment();
                [{
                    value: "top-down",
                    label: (0,
                    T.T)("xplayerSettingsDoubleTapOptionTopDown")
                }, {
                    value: "left-right",
                    label: (0,
                    T.T)("xplayerSettingsDoubleTapOptionLeftRight")
                }].forEach(function(t) {
                    var i = t.value
                      , n = t.label
                      , r = (0,
                    b.SL)(v({
                        label: n,
                        value: i,
                        statisticsClass: "double-tap-mode-setting",
                        className: N,
                        isSelected: i === e.core.settings.doubleTapMode
                    }));
                    i === e.core.settings.doubleTapMode && (e.doubleTapModeSelectedText.textContent = n),
                    r.addEventListener("click", function(t) {
                        var i, n;
                        return l().async(function(s) {
                            for (; ; )
                                switch (s.prev = s.next) {
                                case 0:
                                    n = (i = e.getOptionParent(t.target)).getAttribute("value"),
                                    e.doubleTapModeSelectedText.textContent = i.textContent,
                                    e.selectOption(i, e.doubleTapModeModal),
                                    e.toggleOptionsModal(e.doubleTapModeModal),
                                    e.onDoubleTapRewindChange(n);
                                case 6:
                                case "end":
                                    return s.stop()
                                }
                        }, null, null, null, Promise)
                    }),
                    s.append(r)
                }),
                this.attachOpenModalClick(this.doubleTapModeSelect, this.doubleTapModeModal),
                this.attachCloseModalClick(this.doubleTapModeModal),
                this.doubleTapModeModal.insertBefore(s, n),
                this.selectsElement.appendChild(this.doubleTapModeSelect),
                this.element.insertAdjacentElement("afterbegin", this.doubleTapModeModal)
            }
        }, {
            key: "setRate",
            value: function(e) {
                var t;
                Number(null == (t = this.playbackRateSelectedText) || null == (t = t.textContent) ? void 0 : t.replace("x", "")) !== e && (this.playbackRateSelectedText.textContent = "".concat(e, "x"),
                u.A.emit(h.A.PLAYER_SET_PLAYBACK_RATE, e, !0),
                this.hideSettingsMenu(!0))
            }
        }, {
            key: "renderSubtitlesDefaultTpl",
            value: function() {
                this.subtitlesSelect = (0,
                b.SL)(y({
                    label: (0,
                    T.T)("xplayerSettingsSubtitles"),
                    selectName: "subtitles",
                    className: C,
                    unavailableText: (0,
                    T.T)("xplayerSettingsUnavailable")
                })),
                this.selectsElement.appendChild(this.subtitlesSelect)
            }
        }, {
            key: "renderSubtitles",
            value: function() {
                null == (e = document.querySelector("#defaultSubtitles")) || e.remove(),
                this.subtitlesSelect = (0,
                b.SL)(m({
                    label: (0,
                    T.T)("xplayerSettingsSubtitles"),
                    selectName: "subtitles",
                    className: C
                })),
                this.subtitlesSettingsModal = (0,
                b.SL)(_({
                    label: (0,
                    T.T)("xplayerSettingsSubtitles"),
                    className: k,
                    backText: (0,
                    T.T)("xplayerNavigationBack")
                })),
                this.subtitlesSelectsContainer = document.createElement("div"),
                this.subtitlesSelectsContainer.className = x,
                this.subtitlesOptionsClickListeners = {};
                var e, t, i = this.subtitlesSettingsModal.querySelector(".".concat(k, "__splitter")), n = "off" !== this.core.settings.subtitlesStateByButton, s = (0,
                T.T)("xplayerSettingsOff"), r = n ? null == (t = this.core.settings.subtitlesPrefLang) ? void 0 : t.label : s;
                this.subtitlesTrackElement = this.subtitlesSelect.querySelector(".".concat(Y)),
                this.subtitlesSelectedTextElement = this.subtitlesSelect.querySelector(".".concat(w)),
                this.subtitlesSelectedTextElement.textContent = r || s,
                this.attachOpenModalClick(this.subtitlesSelect, this.subtitlesSettingsModal),
                this.attachCloseModalClick(this.subtitlesSettingsModal),
                this.subtitlesSettingsModal.insertBefore(this.subtitlesSelectsContainer, i);
                var o = this.renderSubtitlesListModal();
                this.subtitlesSelectsContainer.appendChild(o),
                this.selectsElement.appendChild(this.subtitlesSelect),
                this.element.insertAdjacentElement("afterbegin", this.subtitlesSettingsModal)
            }
        }, {
            key: "renderSubtitlesListModal",
            value: function() {
                var e = this
                  , t = document.createDocumentFragment()
                  , i = this.core.settings.subtitlesPrefLang
                  , s = "off" !== this.core.settings.subtitlesStateByButton;
                this.subtitlesTracksList = [W()].concat((0,
                n.A)(this.options.subtitles.tracks)),
                this.subtitlesTracksList.forEach(function(n) {
                    var r = n.lang
                      , o = n.label
                      , a = "off" === r
                      , l = !s && a || !i && a
                      , c = (0,
                    b.SL)(v({
                        label: o,
                        value: r,
                        statisticsClass: "subtitles-setting",
                        className: N,
                        isSelected: l || (null == i ? void 0 : i.lang) === r
                    }))
                      , h = e.onSubtitlesOptionClick.bind(e);
                    e.subtitlesOptionsClickListeners[r] = h,
                    A.A.addClickWithYield(c, h),
                    t.append(c)
                });
                var r = 100 + 36 * this.subtitlesTracksList.length;
                return this.subtitlesSettingsModal.style.bottom = "-".concat(r, "px"),
                t
            }
        }, {
            key: "resetTracksList",
            value: function() {
                this.removeOldSubtitlesTrackList(),
                this.subtitlesSelectsContainer.appendChild(this.renderSubtitlesListModal())
            }
        }, {
            key: "removeOldSubtitlesTrackList",
            value: function() {
                var e = this;
                this.subtitlesTracksList.forEach(function(t) {
                    var i, n = null == (i = e.subtitlesSettingsModal) ? void 0 : i.querySelector("div[value='".concat(t.lang, "']"));
                    n.removeEventListener("click", e.subtitlesOptionsClickListeners[t.lang]),
                    n.remove()
                })
            }
        }, {
            key: "setSubtitlesLabel",
            value: function(e) {
                var t = e.label;
                this.subtitlesSelectedTextElement.textContent = t
            }
        }, {
            key: "setDefaultLabel",
            value: function(e) {
                var t = (0,
                T.T)("xplayerSettingsOff");
                e.label && "off" !== this.core.settings.subtitlesStateByButton && (t = e.label),
                this.subtitlesSelectedTextElement.textContent = t
            }
        }, {
            key: "disableSubtitles",
            value: function() {
                this.subtitlesSelect.remove(),
                this.renderSubtitlesDefaultTpl()
            }
        }, {
            key: "onSubtitlesOptionClick",
            value: function(e) {
                var t, i = this.getOptionParent(e.target), n = i.getAttribute("value"), s = null == (t = i.querySelector("div div")) ? void 0 : t.textContent.trim(), r = {
                    lang: n,
                    label: s
                }, o = "off" === r.lang;
                this.subtitlesSelectedTextElement.textContent = s,
                this.selectOption(i, this.subtitlesSettingsModal),
                this.toggleOptionsModal(this.subtitlesSettingsModal),
                u.A.emit(h.A.SUBTITLES_SET_LANG, r),
                u.A.emit(h.A.SUBTITLES_SAVE_LANG, r),
                u.A.emit(h.A.SUBTITLES_STATE_BY_BUTTON, o ? "off" : "on"),
                o ? u.A.emit(h.A.STATISTICS_UI, p.A.settings_subtitles_off) : u.A.emit(h.A.STATISTICS_UI, p.A.settings_subtitles_on),
                this.hideSettingsMenu(!0)
            }
        }, {
            key: "setActiveSubtitlesElement",
            value: function(e) {
                var t, i = e.lang, n = e.label, s = null == (t = this.subtitlesSettingsModal) ? void 0 : t.querySelector("div[value='".concat(i, "']"));
                this.selectOption(s, this.subtitlesSettingsModal),
                this.setSubtitlesLabel({
                    lang: i,
                    label: n
                })
            }
        }, {
            key: "setWasOnPause",
            value: function() {
                var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}
                  , t = e.fromSettings;
                void 0 !== t && t || (this.wasOnPause = !0)
            }
        }, {
            key: "setQualitySettings",
            value: function() {
                this.core.sourceController.getCurrentQuality() !== this.qualitySelected && (u.A.emit(h.A.PLAYER_SET_SOURCE, this.qualitySelected, !0),
                u.A.emit(h.A.PLAYER_SET_QUALITY, this.qualitySelected, !0),
                this.hideSettingsMenu(!0))
            }
        }, {
            key: "onElementClick",
            value: function(e) {
                var t = e.target;
                t.hasAttribute("value") || t.hasAttribute("name") || this.hideSettingsMenu()
            }
        }, {
            key: "getSourceType",
            value: function() {
                var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : ""
                  , t = e || this.core.sourceController.getCurrentQuality()
                  , i = this.core.sourceController.getType(t)
                  , n = 2e3 > parseInt(t, 10);
                return parseInt(t, 10) > 999 && n ? "".concat(i, " extend-space") : i
            }
        }, {
            key: "onDoubleTapRewindChange",
            value: function(e) {
                u.A.emit(h.A.PLAYER_SET_DOUBLE_TAP_MODE, e),
                this.hideSettingsMenu(!0),
                this.startPlayIfWasNotOnPause()
            }
        }, {
            key: "setBodyStyleAndShowSettings",
            value: function() {
                this.oldBodyStyle = document.body.style.overflow,
                this.showSettingsMenu()
            }
        }, {
            key: "showSettingsMenu",
            value: function() {
                var e = this;
                c.A.removeClass(this.element, F),
                setTimeout(function() {
                    c.A.addClass(e.settingsElement, "show")
                }, 10),
                document.body.style.overflow = "hidden",
                u.A.emit(h.A.PAUSE_ACTION_BLOCK)
            }
        }, {
            key: "moveSettingsNode",
            value: function() {
                d.A.get("fullscreen") ? this.core.element.appendChild(this.element) : document.body.appendChild(this.core.element.querySelector(".".concat(k)))
            }
        }, {
            key: "hideSettingsAndModals",
            value: function() {
                return l().async(function(e) {
                    for (; ; )
                        switch (e.prev = e.next) {
                        case 0:
                            this.hideSettingsMenu(!0),
                            c.A.removeClass(this.qualitySettingsModal, V),
                            c.A.removeClass(this.playbackRatesModal, V),
                            this.subtitlesSettingsModal && c.A.removeClass(this.subtitlesSettingsModal, V);
                        case 4:
                        case "end":
                            return e.stop()
                        }
                }, null, this, null, Promise)
            }
        }, {
            key: "startPlayIfWasNotOnPause",
            value: function() {
                this.wasOnPause || d.A.get("ads") || u.A.emit(h.A.PLAYER_PLAY)
            }
        }, {
            key: "onReportClick",
            value: function() {
                u.A.emit(h.A.REPORT_ISSUE_CLICK, this),
                d.A.get("fullscreen") ? (u.A.emit(h.A.PLAYER_TOGGLE_FULLSCREEN),
                this.hideSettingsMenu(!0)) : this.hideSettingsMenu()
            }
        }, {
            key: "hideSettingsMenu",
            value: function() {
                var e = this
                  , t = arguments.length > 0 && void 0 !== arguments[0] && arguments[0]
                  , i = 150;
                "boolean" == typeof t && t && (i = 0),
                c.A.removeClass(this.settingsElement, "show"),
                setTimeout(function() {
                    c.A.addClass(e.element, F),
                    document.body.style.overflow = e.oldBodyStyle,
                    u.A.emit(h.A.PAUSE_ACTION_UNBLOCK),
                    t || e.startPlayIfWasNotOnPause()
                }, i)
            }
        }])
    },
    77760: function(e, t, i) {
        "use strict";
        i.d(t, {
            r: function() {
                return y
            }
        });
        var n, s, r = i(52402), o = i(55925), a = i(84422), l = i(15904), c = i(86096), h = i(54588), u = i.n(h), d = i(54098), A = i(10809), p = i(37651);
        function m(e, t) {
            var i = Object.keys(e);
            if (Object.getOwnPropertySymbols) {
                var n = Object.getOwnPropertySymbols(e);
                t && (n = n.filter(function(t) {
                    return Object.getOwnPropertyDescriptor(e, t).enumerable
                })),
                i.push.apply(i, n)
            }
            return i
        }
        function v(e) {
            for (var t = 1; t < arguments.length; t++) {
                var i = null != arguments[t] ? arguments[t] : {};
                t % 2 ? m(Object(i), !0).forEach(function(t) {
                    (0,
                    c.A)(e, t, i[t])
                }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(i)) : m(Object(i)).forEach(function(t) {
                    Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(i, t))
                })
            }
            return e
        }
        (n = s || (s = {})).OLD = "old",
        n.NEW = "new";
        var E = {
            size: {
                width: 0,
                height: 0
            }
        }
          , f = {
            size: "",
            format: "",
            lengthInSec: 0,
            thumbsAmount: 0,
            spriteNumber: 0,
            type: s.OLD
        }
          , _ = {
            template: "",
            duration: 0,
            nextSpritePreloadOffsetFrames: 50
        }
          , y = (0,
        l.A)(function e(t) {
            var i, n, s;
            if ((0,
            a.A)(this, e),
            (0,
            c.A)(this, "options", void 0),
            (0,
            c.A)(this, "template", void 0),
            (0,
            c.A)(this, "currentSprite", void 0),
            (0,
            c.A)(this, "preloadedSprite", void 0),
            (0,
            c.A)(this, "framesOffset", void 0),
            (0,
            c.A)(this, "secondsInSprite", void 0),
            (0,
            c.A)(this, "introDuration", void 0),
            (0,
            c.A)(this, "realSteps", void 0),
            (0,
            c.A)(this, "spritesAPI", void 0),
            (0,
            c.A)(this, "isBlockedByAd", void 0),
            (0,
            c.A)(this, "loadedSprites", void 0),
            this.options = t || _,
            this.introDuration = (null == (i = this.options) ? void 0 : i.introDuration) || 0,
            null != (n = this.options) && n.template && (this.template = this.parseTemplate(this.options.template),
            this.framesOffset = (null == (s = this.options) ? void 0 : s.nextSpritePreloadOffsetFrames) || _.nextSpritePreloadOffsetFrames,
            this.currentSprite = E,
            this.loadedSprites = {},
            this.realSteps = [],
            this.options.steps = this.options.steps || [],
            this.isBlockedByAd = d.A.get("ads") || d.A.get("ads_playing"),
            !this.isOldTemplate())) {
                var r = this.template
                  , o = r.thumbsAmount
                  , l = r.lengthInSec;
                this.secondsInSprite = o * l
            }
        }, [{
            key: "setIsBlockedByAd",
            value: function(e) {
                this.isBlockedByAd = e
            }
        }, {
            key: "parseTemplate",
            value: function(e) {
                var t = e.substring(e.lastIndexOf("/") + 1);
                this.spritesAPI = e.replace(t, "");
                var i = t.split(".");
                if (i.length < 4)
                    return f;
                if (i.length > 4) {
                    var n = (0,
                    o.A)(i, 5)
                      , r = n[0]
                      , a = n[1]
                      , l = n[2]
                      , c = n[3]
                      , h = n[4];
                    return {
                        size: r,
                        lengthInSec: Number(a),
                        thumbsAmount: Number(l),
                        spriteNumber: Number(c),
                        format: h,
                        type: s.NEW
                    }
                }
                var u = (0,
                o.A)(i, 4)
                  , d = u[0]
                  , A = u[1]
                  , p = u[2]
                  , m = u[3];
                return {
                    size: d,
                    thumbsAmount: Number(A),
                    spriteNumber: p,
                    format: m,
                    type: s.OLD
                }
            }
        }, {
            key: "getCurrentSpriteNumber",
            value: function(e) {
                return Math.floor(e / this.secondsInSprite)
            }
        }, {
            key: "getSpriteUrl",
            value: function(e) {
                var t = this.template
                  , i = t.size
                  , n = t.spriteNumber
                  , s = t.lengthInSec
                  , r = t.format
                  , o = t.thumbsAmount;
                if (this.isOldTemplate())
                    return i && o && n && r ? "".concat(this.spritesAPI).concat(i, ".").concat(o, ".").concat(n, ".").concat(r) : null;
                if (!i || !o || !r || !s)
                    return null;
                var a = this.getCurrentSpriteNumber(e);
                return "".concat(this.spritesAPI).concat(i, ".").concat(s, ".").concat(o, ".").concat(a, ".").concat(r)
            }
        }, {
            key: "loadSprite",
            value: function(e, t) {
                return new Promise(function(i) {
                    var n = new Image
                      , s = Date.now();
                    p.A.emit(A.A.SPRITE_LOAD, t, e),
                    n.onload = function(n) {
                        var r = n.currentTarget
                          , o = r.width
                          , a = r.height;
                        p.A.emit(A.A.SPRITE_LOAD_SUCCESS, Date.now() - s, t, e),
                        i({
                            width: o,
                            height: a
                        })
                    }
                    ,
                    n.onerror = function() {
                        p.A.emit(A.A.SPRITE_LOAD_ERROR, Date.now() - s, t, e),
                        i(null)
                    }
                    ,
                    n.src = e
                }
                )
            }
        }, {
            key: "checkTimeEdges",
            value: function(e, t) {
                return e < 0 ? 0 : e > t ? t : e
            }
        }, {
            key: "isOldTemplate",
            value: function() {
                var e;
                return (null == (e = this.options) ? void 0 : e.template) && this.template.type === s.OLD
            }
        }, {
            key: "calcNewTemplateThumbsAmount",
            value: function(e, t) {
                var i, n = Math.floor(t / this.secondsInSprite);
                e -= this.introDuration;
                var s = this.template
                  , r = s.lengthInSec
                  , o = s.thumbsAmount
                  , a = s.size
                  , l = this.currentSprite.size.width
                  , c = Math.ceil(e / r)
                  , h = Math.floor(c / o) <= n || e <= 200
                  , u = h && c !== o ? c % o : o
                  , d = 0;
                (!this.introDuration || t % this.secondsInSprite > 4) && (d = Math.floor((t - this.introDuration) % this.secondsInSprite / r),
                this.introDuration && t > this.secondsInSprite && t % this.secondsInSprite > 4 && (d += 1));
                var A = l / u
                  , p = this.currentSprite.size.height > A
                  , m = A === Number(a);
                i = h && !m ? p && u <= 2 ? l / 2 : p ? l / u : l / (u - 1) : A;
                var v = l / i;
                return v <= u && h && d >= (u = v) && (d = v - 1),
                t < this.introDuration && (d = 0),
                {
                    spritePosition: d,
                    thumbsAmount: u,
                    originThumbWidth: i
                }
            }
        }, {
            key: "preloadNextSprite",
            value: function(e) {
                var t, i, n, s, r, o, a, l, c, h;
                return u().async(function(d) {
                    for (; ; )
                        switch (d.prev = d.next) {
                        case 0:
                            if (!this.isOldTemplate()) {
                                d.next = 2;
                                break
                            }
                            return d.abrupt("return");
                        case 2:
                            if (t = (null == e ? void 0 : e.thumbsAmount) || 50,
                            i = (null == e ? void 0 : e.spritePosition) || 0,
                            t === this.template.thumbsAmount) {
                                d.next = 6;
                                break
                            }
                            return d.abrupt("return");
                        case 6:
                            if (n = this.getCurrentSpriteNumber(e.currentTime) + 1,
                            r = (s = this.template).size,
                            o = s.lengthInSec,
                            a = s.format,
                            l = "".concat(this.spritesAPI).concat(r, ".").concat(o, ".").concat(t, ".").concat(n, ".").concat(a),
                            c = this.loadedSprites[l],
                            !(i > t - this.framesOffset && !c)) {
                                d.next = 20;
                                break
                            }
                            return this.loadedSprites[l] = "loading",
                            d.next = 14,
                            u().awrap(this.loadSprite(l, n));
                        case 14:
                            if (h = d.sent) {
                                d.next = 18;
                                break
                            }
                            return this.loadedSprites[l] = "loading error",
                            d.abrupt("return");
                        case 18:
                            this.loadedSprites[l] = {
                                size: h
                            },
                            this.preloadedSprite = {
                                size: h,
                                url: l
                            };
                        case 20:
                        case "end":
                            return d.stop()
                        }
                }, null, this, null, Promise)
            }
        }, {
            key: "getCurrentThumbOffset",
            value: function(e) {
                var t, i, n, s, r, o = null == (t = this.options) ? void 0 : t.duration, a = d.A.get("duration");
                i = d.A.get("ads") ? o || a : o - a >= Math.floor(this.introDuration) && o || a,
                this.isBlockedByAd && (i = null == (n = this.options) ? void 0 : n.duration);
                var l = this.options.steps
                  , c = e;
                if (l.length || (c = this.checkTimeEdges(e, i)),
                l.length && (i = this.options.originalDuration || l[l.length - 1][1]),
                !this.isOldTemplate())
                    return this.calcNewTemplateThumbsAmount(i, c);
                var h = this.template
                  , u = h.thumbsAmount
                  , A = h.size
                  , p = this.currentSprite.size.width
                  , m = Number(A.split("x")[0]);
                (i -= this.introDuration) > u - 1 ? s = p / u : (!d.A.get("ads") && Math.floor(null == (r = this.options) ? void 0 : r.duration) - d.A.get("duration") > 0 && (i = d.A.get("duration") + 1 - this.introDuration),
                s = p / Math.floor(i)),
                s > m && (s = m);
                var v = p / s
                  , E = Math.floor((c - this.introDuration) / (i / v));
                return E >= v && (E = v - 1),
                c < this.introDuration && (E = 0),
                {
                    spritePosition: E,
                    thumbsAmount: v,
                    originThumbWidth: s
                }
            }
        }, {
            key: "getCurrentStep",
            value: function(e) {
                var t = this.realSteps || [];
                return t.length ? e > t[t.length - 1][1] ? t.length - 1 : t.findIndex(function(t) {
                    return t[0] <= e && t[1] >= e
                }) : 0
            }
        }, {
            key: "calcRealSteps",
            value: function() {
                this.realSteps = this.options.steps.reduce(function(e, t) {
                    if (e.length) {
                        var i = e[e.length - 1][1];
                        e.push([i, t[1] - t[0] + i])
                    } else
                        e.push([0, t[1] - t[0]]);
                    return e
                }, [])
            }
        }, {
            key: "getCurrentTimeFromSteps",
            value: function(e, t) {
                var i = this.options.steps
                  , n = i[t]
                  , s = i[i.length - 1]
                  , o = (0,
                r.A)(i).splice(0, t).reduce(function(e, t) {
                    return e + (t[1] - t[0])
                }, 0);
                return this.checkTimeEdges(e - o + n[0], s[1])
            }
        }, {
            key: "getCurrentFrame",
            value: function(e) {
                var t, i, n, s, r;
                return u().async(function(o) {
                    for (; ; )
                        switch (o.prev = o.next) {
                        case 0:
                            if (null != (t = this.options) && t.template) {
                                o.next = 2;
                                break
                            }
                            return o.abrupt("return", null);
                        case 2:
                            if (this.options.steps.length && (this.realSteps.length || this.calcRealSteps(),
                            i = this.getCurrentStep(e),
                            e = this.getCurrentTimeFromSteps(e, i)),
                            !(!(n = this.getSpriteUrl(e)) || "loading error" === this.loadedSprites[n] || "loading" === this.loadedSprites[n])) {
                                o.next = 6;
                                break
                            }
                            return o.abrupt("return", null);
                        case 6:
                            if (this.loadedSprites[n]) {
                                o.next = 19;
                                break
                            }
                            return this.loadedSprites[n] = "loading",
                            o.next = 10,
                            u().awrap(this.loadSprite(n, this.getCurrentSpriteNumber(e)));
                        case 10:
                            if (s = o.sent) {
                                o.next = 14;
                                break
                            }
                            return this.loadedSprites[n] = "loading error",
                            o.abrupt("return", null);
                        case 14:
                            this.loadedSprites[n] = {
                                size: s
                            },
                            this.currentSprite.size = s,
                            this.currentSprite.url = n,
                            o.next = 20;
                            break;
                        case 19:
                            this.currentSprite = JSON.parse(JSON.stringify(this.loadedSprites[n]));
                        case 20:
                            if (r = this.getCurrentThumbOffset(e),
                            this.preloadNextSprite(v({
                                currentTime: e
                            }, r)),
                            r) {
                                o.next = 24;
                                break
                            }
                            return o.abrupt("return", null);
                        case 24:
                            return o.abrupt("return", {
                                spriteUrl: n,
                                spriteInfo: v(v({}, r), {}, {
                                    size: this.currentSprite.size
                                })
                            });
                        case 25:
                        case "end":
                            return o.stop()
                        }
                }, null, this, null, Promise)
            }
        }])
    },
    62420: function(e, t, i) {
        "use strict";
        i.d(t, {
            O: function() {
                return u
            }
        });
        var n = i(84422)
          , s = i(15904)
          , r = i(86096)
          , o = i(54588)
          , a = i.n(o)
          , l = i(37651)
          , c = i(10809)
          , h = i(54098)
          , u = (0,
        s.A)(function e(t) {
            (0,
            n.A)(this, e),
            (0,
            r.A)(this, "core", void 0),
            (0,
            r.A)(this, "options", void 0),
            (0,
            r.A)(this, "element", void 0),
            (0,
            r.A)(this, "thumbWidth", void 0),
            (0,
            r.A)(this, "thumbHeight", void 0),
            (0,
            r.A)(this, "thumbsShown", void 0),
            (0,
            r.A)(this, "thumbsHideTimeout", void 0),
            (0,
            r.A)(this, "thumbsElement", void 0),
            (0,
            r.A)(this, "spriteElement", void 0),
            (0,
            r.A)(this, "videoElement", void 0),
            (0,
            r.A)(this, "backgroundImageUrl", void 0),
            (0,
            r.A)(this, "hideAnimated", void 0),
            (0,
            r.A)(this, "isPlayerResized", void 0),
            (0,
            r.A)(this, "isSpriteBlocked", void 0),
            (0,
            r.A)(this, "playerOnCanPlayEventId", void 0),
            (0,
            r.A)(this, "playerOnSeekedEventId", void 0),
            (0,
            r.A)(this, "seeked", void 0),
            (0,
            r.A)(this, "currentPosition", void 0),
            (0,
            r.A)(this, "lastPosition", void 0),
            (0,
            r.A)(this, "watchedTime", void 0),
            (0,
            r.A)(this, "isFh", void 0),
            this.core = t,
            this.isFh = this.core.options.isFh,
            this.thumbWidth = 0,
            this.thumbHeight = 0,
            this.thumbsShown = !1,
            this.thumbsHideTimeout = 0,
            this.backgroundImageUrl = "",
            this.isPlayerResized = !1,
            this.isSpriteBlocked = !0,
            this.playerOnCanPlayEventId = null,
            this.currentPosition = 0,
            this.lastPosition = 0,
            this.watchedTime = 0,
            this.init()
        }, [{
            key: "init",
            value: function() {
                return a().async(function(e) {
                    for (; ; )
                        switch (e.prev = e.next) {
                        case 0:
                            this.render(),
                            this.attachEvents(),
                            this.videoElement = document.querySelector("#xplayer__video");
                        case 3:
                        case "end":
                            return e.stop()
                        }
                }, null, this, null, Promise)
            }
        }, {
            key: "attachEvents",
            value: function() {
                var e = this;
                window.addEventListener("resize", this.onResizeActions.bind(this)),
                l.A.on(c.A.PLAYER_ON_RESIZE, this.onResizeActions.bind(this)),
                l.A.on(c.A.PLAYER_ON_SWIPE_START, this.calcThumbSizes.bind(this)),
                l.A.once(c.A.PLAYER_ON_PLAY, this.unblockSpriteThumbs.bind(this)),
                l.A.once(c.A.PLAYER_ON_LOADED_DATA, this.calcThumbSizes.bind(this)),
                l.A.once(c.A.REMOTE_PLAYER_PLAYING, this.unblockSpriteThumbs.bind(this)),
                l.A.on(c.A.PLAYER_ON_SEEKING, function() {
                    e.seeked = !1
                }),
                l.A.on(c.A.PLAYER_ON_SEEKED, function() {
                    e.seeked = !0
                }),
                l.A.on(c.A.PLAYER_ON_TIMEUPDATE, function() {
                    if (!e.seeked) {
                        e.currentPosition = e.videoElement.currentTime;
                        var t = e.currentPosition - e.lastPosition;
                        if (e.lastPosition = e.currentPosition,
                        t < 0 || t > .5) {
                            e.watchedTime = 0;
                            return
                        }
                        e.watchedTime += t,
                        e.watchedTime < .5 || (e.watchedTime = 0,
                        e.seeked = !0,
                        e.hideThumbs())
                    }
                })
            }
        }, {
            key: "unblockSpriteThumbs",
            value: function() {
                this.isSpriteBlocked = !1
            }
        }, {
            key: "render",
            value: function() {
                this.element = document.createElement("div"),
                this.element.className = "background-thumbs-container",
                this.element.innerHTML = '\n    <span class="thumbs thumbs-hidden">\n      <div class="thumbs-background"></div> \n      <span class="sprite"></span>\n    </span>\n    ',
                this.thumbsElement = this.element.querySelector(".thumbs"),
                this.spriteElement = this.element.querySelector(".sprite"),
                this.core.element.appendChild(this.element),
                this.calcThumbSizes()
            }
        }, {
            key: "setCurrentFrame",
            value: function(e, t) {
                var i = t.spritePosition
                  , n = t.thumbsAmount;
                (this.backgroundImageUrl !== e || this.isPlayerResized) && (this.isPlayerResized = !1,
                this.backgroundImageUrl = e,
                this.spriteElement.style.background = "url(".concat(e, ") no-repeat"),
                this.isFh || (this.spriteElement.style.backgroundSize = "".concat(this.thumbWidth * n, "px ").concat(this.thumbHeight, "px"))),
                this.isFh ? this.setFhThumbPosition(t) : this.spriteElement.style.backgroundPositionX = "".concat(-1 * this.thumbWidth * i, "px")
            }
        }, {
            key: "setFhThumbPosition",
            value: function(e) {
                var t = this.thumbWidth * e.thumbsAmount
                  , i = this.thumbHeight * Math.floor(e.originSpriteHeight / e.fhThumb.height)
                  , n = this.thumbWidth / e.originThumbWidth * e.fhThumb.position.left
                  , s = this.thumbHeight / e.fhThumb.height * e.fhThumb.position.top;
                this.spriteElement.style.backgroundPositionY = "-".concat(s, "px"),
                this.spriteElement.style.width = "".concat(this.thumbWidth, "px"),
                this.spriteElement.style.height = "".concat(this.thumbHeight, "px"),
                this.spriteElement.style.backgroundPositionX = "-".concat(n, "px"),
                this.spriteElement.style.backgroundSize = "".concat(t, "px ").concat(i, "px"),
                this.spriteElement.style.backgroundRepeat = "repeat"
            }
        }, {
            key: "calcThumbSizes",
            value: function() {
                var e, t, i = this;
                if (h.A.get("ads_playing") || h.A.get("ads_preload"))
                    return void l.A.once(c.A.ADS_ENDED, function() {
                        l.A.once(c.A.PLAYER_ON_LOADED_DATA, i.calcThumbSizes.bind(i))
                    });
                var n = null == (e = this.core.sourceController) || null == (e = e.options) || null == (e = e.videoElement) ? void 0 : e.videoWidth
                  , s = null == (t = this.core.sourceController) || null == (t = t.options) || null == (t = t.videoElement) ? void 0 : t.videoHeight;
                if (n && s) {
                    var r = this.core.element.clientHeight
                      , o = this.core.element.clientWidth;
                    this.thumbWidth = Math.min(n / s * r, o),
                    this.thumbHeight = Math.min(s / n * o, r),
                    this.spriteElement.style.width = "".concat(this.thumbWidth, "px"),
                    this.spriteElement.style.height = "".concat(this.thumbHeight, "px"),
                    this.thumbsElement.style.width = "".concat(o, "px"),
                    this.thumbsElement.style.height = "".concat(r, "px")
                }
            }
        }, {
            key: "onResizeActions",
            value: function() {
                this.isPlayerResized = !0,
                this.calcThumbSizes()
            }
        }, {
            key: "show",
            value: function() {
                this.isSpriteBlocked || (this.seeked = !1,
                this.clearEvents(),
                this.thumbsElement.className = "thumbs",
                this.thumbsShown = !0)
            }
        }, {
            key: "hide",
            value: function() {
                !1 !== this.thumbsShown && (this.playerOnCanPlayEventId = l.A.once(c.A.PLAYER_ON_CAN_PLAY, this.hideThumbs.bind(this)),
                this.seeked ? this.hideThumbs() : h.A.get("playing") || (this.playerOnSeekedEventId = l.A.once(c.A.PLAYER_ON_SEEKED, this.hideThumbs.bind(this))))
            }
        }, {
            key: "hideThumbs",
            value: function() {
                this.thumbsElement.className = "thumbs thumbs-hidden",
                this.thumbsShown = !1,
                this.clearEvents()
            }
        }, {
            key: "clearEvents",
            value: function() {
                this.playerOnCanPlayEventId && l.A.off(c.A.PLAYER_ON_CAN_PLAY, this.playerOnCanPlayEventId),
                this.playerOnSeekedEventId && l.A.off(c.A.PLAYER_ON_SEEKED, this.playerOnSeekedEventId)
            }
        }])
    },
    52668: function(e, t, i) {
        "use strict";
        function n() {
            var e, t, i, n, s, r, o = navigator.connection;
            return {
                "int.hardwareConcurrency": null != (e = navigator.hardwareConcurrency) ? e : null,
                "float.deviceMemoryGb": null != (t = navigator.deviceMemory) ? t : null,
                "int.maxTouchPoints": null != (i = navigator.maxTouchPoints) ? i : null,
                "str.effectiveType": null != (n = null == o ? void 0 : o.effectiveType) ? n : null,
                "float.downlinkMbps": null != (s = null == o ? void 0 : o.downlink) ? s : null,
                "float.rttMs": null != (r = null == o ? void 0 : o.rtt) ? r : null,
                "str.saveData": (null == o ? void 0 : o.saveData) != null ? String(o.saveData) : null
            }
        }
        i.d(t, {
            q: function() {
                return n
            }
        })
    },
    83899: function(e, t) {
        "use strict";
        t.A = {
            player_init: "player_init",
            video_end: "video_end",
            share_click: "share_click",
            aftershot_click_share: "aftershot_click_share",
            related_open: "related_open",
            related_click: "related_click",
            related_refresh: "related_refresh",
            top_rated_open: "top_rated_open",
            top_rated_click: "top_rated_click",
            from_user_open: "from_user_open",
            from_user_click: "from_user_click",
            live_sex_click: "live_sex_click",
            fullscreen_in: "fullscreen_in",
            fullscreen_out: "fullscreen_out",
            fullscreen_failed: "fulscreen_failed",
            large_mode_in: "large_mode_in",
            large_mode_out: "large_mode_out",
            settings_open: "settings_open",
            settings_quality: "settings_quality",
            settings_speed: "settings_speed",
            settings_preview: "settings_preview",
            settings_autoplay: "settings_autoplay",
            subscribe_init: "subscribe_init",
            subscribe_show: "subscribe_show",
            subscribe_click_logo: "subscribe_click_logo",
            subscribe_click_subscribe: "subscribe_click_subscribe",
            subscribe_click_unsubscribe: "subscribe_click_unsubscribe",
            preview: "preview",
            downloads: "downloads",
            favorite: "favorite",
            report_click: "report_click",
            download_click: "download_click",
            more_videos_click: "more_videos_click",
            join_now_click: "join_now_click",
            title_click: "title_click",
            producer_click: "producer_click",
            join_click: "join_click",
            logo_click: "logo_click",
            related_more_click: "related_more_click",
            fullscreen_click: "fullscreen_click",
            link_click: "watch_hd_click",
            cta_start_screen_click: "cta_start_screen_click",
            related_click_small: "related_click_small",
            download_click_small: "download_click_small",
            more_videos_click_small: "more_videos_click_small",
            live_sex_click_small: "live_sex_click_small",
            share_click_small: "share_click_small",
            full_video_get_link_click: "full_video_get_link_click",
            fullscreen_in_by_orientation: "fullscreen_in_by_orientation",
            fullscreen_out_by_orientation: "fullscreen_out_by_orientation",
            fullscreen_in_by_button: "fullscreen_in_by_button",
            fullscreen_out_by_button: "fullscreen_out_by_button",
            fullscreen_out_by_swipe: "fullscreen_out_by_swipe",
            seeking_by_tap: "seeking_by_tap",
            seeking_by_dragging: "seeking_by_dragging",
            seeking_by_swipe: "seeking_by_swipe",
            seeking_by_keyboard_press: "seeking_by_keyboard_press",
            seeking_by_keyboard_hold: "seeking_by_keyboard_hold",
            seeking_by_keyboard_number_keys: "seeking_by_keyboard_number_keys",
            seeking_by_progress_bar_dragging: "seeking_by_progress_bar_dragging",
            seeking_by_progress_bar_clicking: "seeking_by_progress_bar_clicking",
            seeking_by_double_tap_forward: "seeking_by_double_tap_forward",
            seeking_by_double_tap_backward: "seeking_by_double_tap_backward",
            seeking_double_tap_change_right_left: "seeking_double_tap_change_right_left",
            seeking_double_tap_change_top_down: "seeking_double_tap_change_top_down",
            mute_on: "mute_on",
            mute_off: "mute_off",
            mute_by_button_on: "mute_by_button_on",
            mute_by_button_off: "mute_by_button_off",
            player_play: "player_play",
            player_play_autoplay: "player_play_autoplay",
            player_play_failed: "player_play_failed",
            player_play_video_promise_not_supported: "player_play_video_promise_not_supported",
            player_play_by_poster: "player_play_by_poster",
            player_play_by_small_button: "player_play_by_small_button",
            player_play_by_center_button: "player_play_by_center_button",
            player_play_by_center_hidden_button: "player_play_by_center_hidden_button",
            play_success: "play_success",
            play_fail: "play_fail",
            player_pause: "player_pause",
            player_pause_by_small_button: "player_pause_by_small_button",
            player_pause_by_center_hidden_button: "player_pause_by_center_hidden_button",
            hot_loop_activate: "hot_loop_activate",
            hot_loop_deactivate: "hot_loop_deactivate",
            swap_hands_by_button_right: "swap_hands_by_button_right",
            swap_hands_by_button_left: "swap_hands_by_button_left",
            change_orientation_landscape: "change_orientation_landscape",
            change_orientation_portrait: "change_orientation_portrait",
            vr_mode_on: "vr_mode_on",
            chromecast_button_shown: "chromecast_button_shown",
            chromecast_button_click: "chromecast_button_click",
            chromecast_libs_load_success: "chromecast_libs_load_success",
            chromecast_libs_load_error: "chromecast_libs_load_error",
            chromecast_framework_lib_load_error: "chromecast_framework_lib_load_error",
            chromecast_play_success: "chromecast_play_success",
            chromecast_play_error: "chromecast_play_error",
            airplay_off: "airplay_off",
            airplay_on: "airplay_on",
            settings_av1_on: "settings_av1_on",
            settings_av1_off: "settings_av1_off",
            link_sponsored_shown: "link_sponsored_shown",
            link_sponsored_click: "link_sponsored_click",
            subtitles_load_success: "subtitles_load_success",
            subtitles_load_failed: "subtitles_load_failed",
            subtitles_shown: "subtitles_shown",
            subtitles_by_button_on: "subtitles_by_button_on",
            subtitles_by_button_off: "subtitles_by_button_off",
            settings_subtitles_off: "settings_subtitles_off",
            settings_subtitles_on: "settings_subtitles_on",
            actions_open_list: "actions_open_list",
            actions_close_list: "actions_close_list",
            actions_click_video_action: "actions_click_video_action",
            preroll_xhl_widget_request: "preroll_xhl_widget_request",
            preroll_xhl_widget_shown: "preroll_xhl_widget_shown",
            preroll_xhl_widget_fallback: "preroll_xhl_widget_fallback",
            next_video_button_next_click: "next_video_button_next_click",
            next_video_button_previous_click: "next_video_button_previous_click",
            speed_boost_activated: "speed_boost_activated",
            speed_boost_deactivated: "speed_boost_deactivated"
        }
    },
    91038: function(e, t, i) {
        "use strict";
        var n = i(84422)
          , s = i(15904)
          , r = i(86096)
          , o = i(10809)
          , a = i(37651)
          , l = i(54098)
          , c = i(83899)
          , h = i(65681)
          , u = i(78772)
          , d = {
            label: "Off",
            lang: "off"
        };
        t.A = (0,
        s.A)(function e(t, i) {
            var s, o, a, l = this, c = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
            (0,
            n.A)(this, e),
            (0,
            r.A)(this, "core", void 0),
            (0,
            r.A)(this, "options", void 0),
            (0,
            r.A)(this, "tracks", void 0),
            (0,
            r.A)(this, "currentLang", void 0),
            (0,
            r.A)(this, "currentTrack", void 0),
            (0,
            r.A)(this, "videoElement", void 0),
            (0,
            r.A)(this, "customTrackElement", void 0),
            (0,
            r.A)(this, "customTrackText", void 0),
            (0,
            r.A)(this, "isHidden", void 0),
            (0,
            r.A)(this, "isMobile", void 0),
            (0,
            r.A)(this, "isMobileEventsAttached", void 0),
            (0,
            r.A)(this, "isMobileNativeClickHandled", void 0),
            (0,
            r.A)(this, "shouldSetInitialLanguage", void 0),
            (0,
            r.A)(this, "isNativeFullscreenControlsEnabled", void 0),
            (0,
            r.A)(this, "introDuration", void 0),
            (0,
            r.A)(this, "cueChangeCallback", void 0),
            (0,
            r.A)(this, "hideDefaultSubtitles", function() {
                for (var e = l.videoElement.textTracks, t = 0; t < e.length; t++)
                    e[t].mode = "hidden"
            }),
            this.options = (null == i ? void 0 : i.subtitles) || {},
            this.introDuration = (null == (s = this.options) ? void 0 : s.introDuration) || 0,
            this.shouldSetInitialLanguage = !0,
            this.isNativeFullscreenControlsEnabled = !!(null == i ? void 0 : i.useNativeFullscreenControls),
            null != (o = this.options.tracks) && o.length && (this.core = t,
            this.core.videoElement.setAttribute("crossorigin", "anonymous"),
            this.isMobile = c,
            this.isMobileEventsAttached = !1,
            this.isMobileNativeClickHandled = !1,
            this.tracks = this.options.tracks,
            this.videoElement = this.core.videoElement,
            this.currentLang = (null == (a = this.core.settings.subtitlesPrefLang) ? void 0 : a.lang) || "",
            this.isHidden = !this.isSubtitlesEnabled(),
            this.currentTrack = null,
            this.init())
        }, [{
            key: "init",
            value: function() {
                this.appendCustomTrackElement(),
                this.attachEvents(),
                a.A.emit(o.A.SUBTITLES_READY, this.getInitialLangState()),
                l.A.get("playing") ? this.loadSubtitles() : a.A.once(o.A.PLAYER_PLAY, this.loadSubtitles.bind(this))
            }
        }, {
            key: "loadSubtitles",
            value: function() {
                var e = this;
                Promise.allSettled(this.appendSubtitlesTracks()).then(function(t) {
                    if (t.some(function(e) {
                        return "fulfilled" === e.status
                    })) {
                        a.A.emit(o.A.STATISTICS_UI, c.A.subtitles_load_success);
                        var i = t.filter(function(e) {
                            return "rejected" === e.status
                        });
                        e.clearFailedSubtitles(i),
                        e.addSubtitlesIntroOffset(),
                        a.A.emit(o.A.SUBTITLES_LOADED)
                    } else
                        a.A.emit(o.A.STATISTICS_UI, c.A.subtitles_load_failed),
                        a.A.emit(o.A.SUBTITLES_NO_AVAILABLE_TRACKS),
                        e.tracks = null,
                        e.currentTrack = null,
                        e.currentLang = null
                }),
                this.hideDefaultSubtitles()
            }
        }, {
            key: "attachEvents",
            value: function() {
                var e = this;
                a.A.on(o.A.SUBTITLES_SHOW_BUTTON_CLICK, this.showSubtitles.bind(this)),
                a.A.on(o.A.SUBTITLES_HIDE_BUTTON_CLICK, this.hideSubtitles.bind(this)),
                a.A.on(o.A.SUBTITLES_SET_LANG, this.onSelectLang.bind(this)),
                a.A.on(o.A.SUBTITLES_TRACK_LOADED, this.showSubsIfNotBlocked.bind(this)),
                a.A.once(o.A.SUBTITLES_SHOWN, function() {
                    a.A.emit(o.A.STATISTICS_UI, c.A.subtitles_shown)
                }),
                a.A.once(o.A.SUBTITLES_LOADED, function() {
                    e.showSubsIfNotBlocked(),
                    e.attachMobileNativeEvents()
                }),
                this.isSubtitlesBlockedByAd() && a.A.once(o.A.ADS_ENDED, function() {
                    e.isHidden || e.showSubtitles(),
                    e.attachMobileNativeEvents()
                })
            }
        }, {
            key: "showSubsIfNotBlocked",
            value: function() {
                this.isHidden || this.isSubtitlesBlockedByAd() || this.showSubtitles()
            }
        }, {
            key: "attachMobileNativeEvents",
            value: function() {
                var e, t = this;
                this.isMobile && (null == (e = this.videoElement.textTracks) ? void 0 : e.length) > 0 && !this.isMobileEventsAttached && (this.videoElement.addEventListener("timeupdate", function() {
                    t.currentTrack && "off" !== t.currentLang && ([].some.call(t.videoElement.textTracks, function(e) {
                        return "showing" === e.mode
                    }) || (t.currentLang = "off",
                    a.A.emit(o.A.SUBTITLES_SAVE_LANG, d),
                    a.A.emit(o.A.SUBTITLES_STATE_BY_BUTTON, "off")))
                }),
                this.isMobileEventsAttached = !0,
                this.videoElement.textTracks.addEventListener("change", function(e) {
                    var i = null == e ? void 0 : e.currentTarget
                      , n = [].find.call(i, function(e) {
                        return "showing" === e.mode
                    });
                    if (n && n.language !== t.currentLang && (t.isMobileNativeClickHandled = !1,
                    t.currentLang = n.language),
                    !t.isMobileNativeClickHandled)
                        if (t.isMobileNativeClickHandled = !0,
                        n) {
                            var s = {
                                label: n.label,
                                lang: n.language
                            };
                            t.currentTrack = n,
                            a.A.emit(o.A.SUBTITLES_SAVE_LANG, s),
                            a.A.emit(o.A.SUBTITLES_STATE_BY_BUTTON, "on"),
                            a.A.emit(o.A.SUBTITLES_SHOW, s)
                        } else
                            a.A.emit(o.A.SUBTITLES_SAVE_LANG, d),
                            a.A.emit(o.A.SUBTITLES_STATE_BY_BUTTON, "off"),
                            a.A.emit(o.A.SUBTITLES_HIDE)
                }))
            }
        }, {
            key: "isSubtitlesEnabled",
            value: function() {
                return "off" !== this.core.settings.subtitlesStateByButton
            }
        }, {
            key: "isSubtitlesBlockedByAd",
            value: function() {
                return l.A.get("ads") || l.A.get("ads_playing") || l.A.get("ads_preload")
            }
        }, {
            key: "addSubtitlesIntroOffset",
            value: function() {
                var e = this;
                Array.from(this.videoElement.textTracks).filter(function(e) {
                    return e.language && e.label && e.cues
                }).forEach(function(t) {
                    var i = Array.from(t.cues);
                    null == i || i.forEach(function(t) {
                        t.startTime += e.introDuration,
                        t.endTime += e.introDuration
                    })
                })
            }
        }, {
            key: "clearFailedSubtitles",
            value: function(e) {
                var t = e.map(function(e) {
                    return e.reason.getAttribute("srclang")
                });
                this.options.tracks = this.tracks.filter(function(e) {
                    return -1 === t.indexOf(e.lang)
                }),
                this.tracks = this.options.tracks,
                t.forEach(function(e) {
                    var t;
                    null == (t = document.querySelector("video track[srclang='".concat(e, "']"))) || t.remove()
                })
            }
        }, {
            key: "appendSubtitlesTracks",
            value: function() {
                var e = this
                  , t = this.core.capabilities.mobile ? "subtitles" : "metadata";
                return this.tracks.map(function(i, n) {
                    var s = (0,
                    u.SL)((0,
                    h.I)(i, 0 === n, t));
                    return e.videoElement.appendChild(s),
                    e.loadTrackPromise(s)
                })
            }
        }, {
            key: "loadTrackPromise",
            value: function(e) {
                return new Promise(function(t, i) {
                    e.addEventListener("load", function(e) {
                        return t(e.target)
                    }),
                    e.addEventListener("error", function(e) {
                        return i(e.target)
                    })
                }
                )
            }
        }, {
            key: "appendCustomTrackElement",
            value: function() {
                this.customTrackElement = (0,
                u.SL)('<div id="custom-subtitles"><span></span></div>'),
                this.customTrackText = this.customTrackElement.querySelector("span"),
                this.core.element.appendChild(this.customTrackElement)
            }
        }, {
            key: "attachCueChangeListener",
            value: function() {
                this.cueChangeCallback = this.onCueChange.bind(this, this.currentTrack),
                this.currentTrack.addEventListener("cuechange", this.cueChangeCallback)
            }
        }, {
            key: "detachCueChangeListener",
            value: function() {
                var e;
                null == (e = this.currentTrack) || e.removeEventListener("cuechange", this.cueChangeCallback)
            }
        }, {
            key: "onCueChange",
            value: function(e) {
                if (!this.isHidden) {
                    var t, i = (null == (t = e.activeCues) ? void 0 : t[0]) || null;
                    if (i) {
                        this.showSubtitles(),
                        this.customTrackText.textContent = i.text,
                        a.A.emit(o.A.SUBTITLES_SHOWN);
                        return
                    }
                    this.hide()
                }
            }
        }, {
            key: "onSelectLang",
            value: function(e) {
                this.isMobileNativeClickHandled = !1,
                "off" === e.lang ? (this.detachCueChangeListener(),
                this.currentLang = "off",
                this.currentTrack = null,
                this.isHidden = !0,
                this.hideSubtitles()) : this.isHidden = !1,
                this.setSubtitlesTrack(e),
                l.A.get("playing") || a.A.emit(o.A.PLAYER_PLAY)
            }
        }, {
            key: "setSubtitlesTrack",
            value: function(e) {
                if (this.currentLang)
                    this.showSubtitlesTrack(e),
                    a.A.emit(o.A.SUBTITLES_SHOW, e);
                else {
                    var t = this.getDefaultSubtitlesTrack();
                    if (!t)
                        return;
                    this.showSubtitlesTrack(t),
                    a.A.emit(o.A.SUBTITLES_SET_DEFAULT_LANG, t)
                }
            }
        }, {
            key: "showSubtitles",
            value: function() {
                if (this.customTrackElement.style.display = "block",
                this.isHidden = !1,
                this.currentTrack)
                    this.isMobile ? this.showDefaultSubtitles() : a.A.emit(o.A.SUBTITLES_SHOW, this.getTrackByLang(this.currentTrack.language));
                else {
                    var e = this.getDefaultSubtitlesTrack();
                    if (!e)
                        return;
                    this.showSubtitlesTrack(e),
                    a.A.emit(o.A.SUBTITLES_SET_DEFAULT_LANG, e)
                }
            }
        }, {
            key: "getTrackByLang",
            value: function(e) {
                var t;
                return null == (t = this.tracks) ? void 0 : t.find(function(t) {
                    return t.lang === e
                })
            }
        }, {
            key: "getLangFromSettings",
            value: function() {
                var e, t, i = null == (e = this.core.settings.subtitlesPrefLang) ? void 0 : e.lang, n = this.getTrackByLang(i);
                if (n)
                    return n;
                var s = this.getTrackByLang(null == (t = this.options.siteCountryInfo) ? void 0 : t.lang);
                return s || null
            }
        }, {
            key: "getInitialLangState",
            value: function() {
                return this.getLangFromSettings() || d
            }
        }, {
            key: "getDefaultSubtitlesTrack",
            value: function() {
                if (this.shouldSetInitialLanguage)
                    return this.shouldSetInitialLanguage = !1,
                    this.getInitialLangState();
                var e, t = this.getLangFromSettings();
                if (t)
                    return t;
                var i = this.getTrackByLang("en") || this.getTrackByLang("eu");
                return i || (null == (e = this.tracks) ? void 0 : e[0])
            }
        }, {
            key: "showSubtitlesTrack",
            value: function(e) {
                var t = e.lang
                  , i = "off" === t && "off" === this.currentLang;
                if (!this.isSubtitlesBlockedByAd() && !i) {
                    this.currentTrack && this.detachCueChangeListener(),
                    this.isMobile || this.hide();
                    for (var n = this.videoElement.textTracks, s = 0; s < n.length; s++)
                        n[s].language === t && (this.currentLang = t,
                        this.currentTrack = n[s],
                        this.isMobile ? (this.hideDefaultSubtitles(),
                        n[s].mode = "showing",
                        a.A.emit(o.A.SUBTITLES_SHOWN)) : this.attachCueChangeListener())
                }
            }
        }, {
            key: "hideSubtitles",
            value: function() {
                this.isHidden = !0,
                this.isMobile && this.hideDefaultSubtitles(),
                this.hide(),
                a.A.emit(o.A.SUBTITLES_HIDE)
            }
        }, {
            key: "hide",
            value: function() {
                this.customTrackElement.style.display = "none",
                this.customTrackText.textContent = ""
            }
        }, {
            key: "showDefaultSubtitles",
            value: function() {
                for (var e = this.videoElement.textTracks, t = 0; t < e.length; t++)
                    e[t].language === this.currentLang && (this.hideDefaultSubtitles(),
                    e[t].mode = "showing",
                    a.A.emit(o.A.SUBTITLES_SHOWN))
            }
        }])
    },
    65681: function(e, t, i) {
        "use strict";
        function n(e, t, i) {
            var n = e.label
              , s = e.urls
              , r = e.lang;
            return '\n        <track kind="'.concat(i, '" label="').concat(n, '" src="').concat(s.vtt, '" srclang="').concat(r, '" ').concat(t ? "default" : "", "/>\n    ")
        }
        i.d(t, {
            I: function() {
                return n
            }
        })
    },
    97590: function(e, t, i) {
        "use strict";
        i.d(t, {
            L: function() {
                return h
            },
            T: function() {
                return u
            }
        });
        var n = i(84422)
          , s = i(15904)
          , r = i(86096)
          , o = {
            xplayerHelpVolumeUp: "Volume up",
            xplayerHelpVolumeDown: "Volume down",
            xplayerHelpSeekShort: "Leap 10 sec. Shift pressed - 20 sec",
            xplayerHelpPlayPause: "Play / Pause",
            xplayerHelpSlowmoToggle: "On / Off slowmo",
            xplayerHelpJumpPercentage: "Go from 0% to 90% length of video",
            xplayerHelpOverlayToggle: "Show / Hide overlay menu",
            xplayerHelpMuteToggle: "Mute / Unmute",
            xplayerHelpJumpStart: "To the start of video",
            xplayerHelpJumpEnd: "To the end of video",
            xplayerHelpBossMode: "Open google in new tab (Boss mode)",
            xplayerHelpFullscreen: "Fullscreen",
            xplayerHelpKeySpaceSkipMe: "space",
            xplayerHelpKeyShiftSSkipMe: "Shift + S",
            xplayerHelpKeyOSkipMe: "O",
            xplayerHelpKeyMSkipMe: "M",
            xplayerHelpKeyHomeSkipMe: "Home",
            xplayerHelpKeyEndSkipMe: "End",
            xplayerHelpKeyBSkipMe: "B",
            xplayerHelpKeyFSkipMe: "F",
            xplayerHelpKeyZeroSkipMe: "0",
            xplayerHelpKeyNineSkipMe: "9",
            xplayerContextMenuCopyUrl: "Copy video URL",
            xplayerContextMenuCopyUrlWithTime: "Copy video URL at current time",
            xplayerContextMenuHelp: "Help",
            xplayerContextMenuReportStreaming: "Report streaming issue",
            xplayerContextMenuCopyPrompt: "Copy to clipboard: Ctrl+C, Enter",
            xplayerChromecastError: "Chromecast error occurred. Please try again.",
            xplayerControlsFullscreenEnter: "Fullscreen",
            xplayerControlsFullscreenExit: "Exit Fullscreen",
            xplayerControlsLargeModeDefault: "Large mode",
            xplayerControlsLargeModeEnter: "Enter large mode",
            xplayerControlsLargeModeExitLower: "Exit large mode",
            xplayerControlsLargeModeExitUpper: "Exit Large mode",
            xplayerControlsSettings: "Settings",
            xplayerControlsSubtitlesShow: "Show subtitles",
            xplayerControlsSubtitlesHide: "Hide subtitles",
            xplayerControlsVolumeDisable: "Disable sound",
            xplayerControlsVolumeEnable: "Enable sound",
            xplayerControlsDownload: "Download",
            xplayerControlsDownloadPlatform: "for %{platform}%{sizeSuffix}",
            xplayerControlsPlatformAndroidSkipMe: "Android",
            xplayerControlsPlatformIosSkipMe: "iOS",
            xplayerControlsPlatformIpadSkipMe: "iPad",
            xplayerControlsPreview: "Preview",
            xplayerControlsFavorite: "Favorite",
            xplayerStatusFavoriteAdded: "Added to favorite",
            xplayerStatusFavoriteRemoved: "Removed from favorite",
            xplayerActionSubscribe: "Subscribe",
            xplayerStatusSubscribed: "Subscribed",
            xplayerMediaChannelLogo: "Channel Logo",
            xplayerMenuMobileTopInfo: "Double tap on screen or swipe to rewind the video",
            xplayerAdsLabelAdUpper: "AD",
            xplayerAdsLabelAd: "Ad",
            xplayerAdsLiveNow: "Live Now!",
            xplayerAdsVideoStartsIn: "Video starts in",
            xplayerAdsSkipAdIn: "Skip Ad in",
            xplayerAdsSkipAd: "Skip Ad",
            xplayerAdsVisitSite: "Visit site",
            xplayerHoverPublishedBy: "Published by",
            xplayerCtaJoin: "Join",
            xplayerCtaJoinSuffix: "now",
            xplayerOverlayMoreFromUser: "More from this user",
            xplayerOverlayRelatedVideos: "Related videos",
            xplayerOverlayMoreVideos: "More videos",
            xplayerOverlayLiveSex: "Live sex",
            xplayerOverlayTopRated: "Top rated",
            xplayerActionDownload: "Download",
            xplayerActionShare: "Share",
            xplayerActionJumpTo: "Jump to",
            xplayerEmbedWatchOn: "Watch on",
            xplayerSettingsTitle: "Settings",
            xplayerSettingsReportStreaming: "Report streaming issue",
            xplayerNavigationBack: "Back",
            xplayerSettingsSpeed: "Speed",
            xplayerSettingsDoubleTapMode: "Double-Tap Seek Mode",
            xplayerSettingsDoubleTapOptionTopDown: "Top-Down",
            xplayerSettingsDoubleTapOptionLeftRight: "Left-Right",
            xplayerSettingsSubtitles: "Subtitles",
            xplayerSettingsOff: "Off",
            xplayerSettingsAuto: "Auto",
            xplayerSettingsAutoWithResolution: "Auto (%{resolution})",
            xplayerSettingsPlaybackRateDefaultSkipMe: "1x",
            xplayerSettingsQuality: "Quality",
            xplayerSettingsNormalRate: "Normal",
            xplayerSettingsImagePreview: "Image preview",
            xplayerSettingsReportIssue: "Report issue",
            xplayerSettingsAutostart: "Autostart",
            xplayerSettingsAv1Recommended: "Faster streaming (Recommended)",
            xplayerSettingsAv1Tip: "Turn off if you experience some problems with the video",
            xplayerSettingsUnavailable: "Unavailable",
            xplayerErrorsAborted: "Aborted error",
            xplayerErrorsNetwork: "Network error",
            xplayerErrorsDecoder: "Decoder error",
            xplayerErrorsSource: "Source error",
            xplayerSfwTitle: "Verify your age to continue watching this video",
            xplayerSfwSubtitle: "It’s fast and we don’t store personal data",
            xplayerSfwVerifyCta: "Start age verification",
            xplayerSfwRestart: "Restart video"
        };
        function a(e, t) {
            var i = Object.keys(e);
            if (Object.getOwnPropertySymbols) {
                var n = Object.getOwnPropertySymbols(e);
                t && (n = n.filter(function(t) {
                    return Object.getOwnPropertyDescriptor(e, t).enumerable
                })),
                i.push.apply(i, n)
            }
            return i
        }
        function l(e) {
            for (var t = 1; t < arguments.length; t++) {
                var i = null != arguments[t] ? arguments[t] : {};
                t % 2 ? a(Object(i), !0).forEach(function(t) {
                    (0,
                    r.A)(e, t, i[t])
                }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(i)) : a(Object(i)).forEach(function(t) {
                    Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(i, t))
                })
            }
            return e
        }
        var c = new ((0,
        s.A)(function e() {
            (0,
            n.A)(this, e),
            (0,
            r.A)(this, "fallbackTranslations", void 0),
            (0,
            r.A)(this, "activeTranslations", void 0),
            this.fallbackTranslations = l({}, o),
            this.activeTranslations = l({}, this.fallbackTranslations)
        }, [{
            key: "setTranslations",
            value: function(e) {
                this.activeTranslations = l(l({}, this.fallbackTranslations), e)
            }
        }, {
            key: "translate",
            value: function(e, t) {
                var i, n, s = null != (i = null != (n = this.activeTranslations[e]) ? n : this.fallbackTranslations[e]) ? i : e;
                return t ? this.interpolate(s, t) : s
            }
        }, {
            key: "interpolate",
            value: function(e, t) {
                return e.replace(/%\{([^}]+)\}/g, function(e, i) {
                    var n;
                    return i in t ? String(null != (n = t[i]) ? n : "") : "%{".concat(i, "}")
                })
            }
        }]))
          , h = function(e) {
            c.setTranslations(e)
        }
          , u = function(e, t) {
            return c.translate(e, t)
        }
    },
    50228: function(e, t, i) {
        "use strict";
        i.d(t, {
            i: function() {
                return u
            }
        });
        var n = i(84422)
          , s = i(15904)
          , r = i(86096)
          , o = i(54588)
          , a = i.n(o)
          , l = i(54098)
          , c = i(37651)
          , h = i(10809)
          , u = (0,
        s.A)(function e(t) {
            (0,
            n.A)(this, e),
            (0,
            r.A)(this, "loader", void 0),
            (0,
            r.A)(this, "spritePreviewViewers", void 0),
            (0,
            r.A)(this, "swipeSeekController", void 0),
            (0,
            r.A)(this, "currentTime", void 0),
            (0,
            r.A)(this, "showPreview", void 0),
            (0,
            r.A)(this, "isUserRequestedThumbs", void 0),
            t ? (this.currentTime = 0,
            this.loader = t.loader || null,
            this.spritePreviewViewers = t.spritePreviewViewers || {},
            this.isUserRequestedThumbs = !1,
            t.useSwipe && (this.swipeSeekController = t.swipeSeekController || null),
            this.attachEvents(),
            this.setPreview(t.showPreview)) : this.useSimpleSeek()
        }, [{
            key: "useSimpleSeek",
            value: function() {
                c.A.on(h.A.USER_SEEK_SET_CURRENT_TIME, this.setCurrentTime.bind(this)),
                c.A.on(h.A.ADS_STARTED, this.setIsBlockedByAd, this),
                c.A.on(h.A.USER_SEEK_SET_CURRENT_TIME_PROGRESS_BAR, this.setCurrentTime.bind(this)),
                c.A.on(h.A.USER_SEEK_SET_CURRENT_TIME_DOUBLETAP, this.setCurrentTime.bind(this))
            }
        }, {
            key: "attachEvents",
            value: function() {
                c.A.on(h.A.USER_SEEK_SET_CURRENT_TIME, this.setCurrentTime.bind(this)),
                c.A.on(h.A.USER_SEEK_SET_CURRENT_TIME_DOUBLETAP, this.setCurrentTime.bind(this)),
                c.A.on(h.A.USER_SEEK_SET_CURRENT_TIME_PROGRESS_BAR, this.setCurrentTime.bind(this)),
                c.A.on(h.A.USER_SEEK_SET_CURRENT_TIME_SWIPE, this.setCurrentTime.bind(this)),
                c.A.on(h.A.USER_SEEK_SHOW_PREVIEW, this.showCurrentThumb.bind(this)),
                c.A.on(h.A.USER_SEEK_HIDE_PREVIEW, this.hideCurrentThumb.bind(this)),
                c.A.on(h.A.PLAYER_SET_PREVIEW, this.setPreview.bind(this)),
                c.A.on(h.A.PLAYER_ON_DURATION_CHANGE, this.onDurationChange, this),
                c.A.on(h.A.ADS_STARTED, this.setIsBlockedByAd, this),
                c.A.on(h.A.PLAYER_ON_TIMEUPDATE, this.checkForThumbHide.bind(this)),
                c.A.on(h.A.PLAYER_PLAY, this.forceLoadThumb.bind(this))
            }
        }, {
            key: "onDurationChange",
            value: function() {
                var e;
                l.A.get("ads") || l.A.get("ads_playing") || null == (e = this.loader) || e.setIsBlockedByAd(!1)
            }
        }, {
            key: "setIsBlockedByAd",
            value: function() {
                var e;
                null == (e = this.loader) || e.setIsBlockedByAd(!0)
            }
        }, {
            key: "setPreview",
            value: function(e) {
                if (!e && !1 !== e) {
                    this.showPreview = !0;
                    return
                }
                this.showPreview = e
            }
        }, {
            key: "setCurrentTime",
            value: function(e, t) {
                c.A.emit(h.A.PLAYER_SET_CURRENT_TIME, e),
                t || c.A.emit(h.A.PROGRESS_BAR_UPDATE_END)
            }
        }, {
            key: "forceLoadThumb",
            value: function() {
                var e, t;
                return a().async(function(i) {
                    for (; ; )
                        switch (i.prev = i.next) {
                        case 0:
                            if (this.isUserRequestedThumbs) {
                                i.next = 6;
                                break
                            }
                            return i.next = 3,
                            a().awrap(null == (e = this.loader) ? void 0 : e.getCurrentFrame(0));
                        case 3:
                            t = i.sent,
                            this.swipeSeekController && this.swipeSeekController.setSeekOptions(t),
                            this.isUserRequestedThumbs = !0;
                        case 6:
                        case "end":
                            return i.stop()
                        }
                }, null, this, null, Promise)
            }
        }, {
            key: "showCurrentThumb",
            value: function(e, t) {
                var i, n, s, r, o, c, h, u, d, A;
                return a().async(function(p) {
                    for (; ; )
                        switch (p.prev = p.next) {
                        case 0:
                            if (this.showPreview) {
                                p.next = 2;
                                break
                            }
                            return p.abrupt("return");
                        case 2:
                            return this.currentTime = e,
                            p.next = 5,
                            a().awrap(null == (i = this.loader) ? void 0 : i.getCurrentFrame(e));
                        case 5:
                            if (r = p.sent,
                            this.isUserRequestedThumbs || (this.swipeSeekController && this.swipeSeekController.setSeekOptions(r),
                            this.isUserRequestedThumbs = !0),
                            !(!r || (null == (n = r.spriteInfo) || null == (n = n.size) ? void 0 : n.width) === 0 || (null == (s = r.spriteInfo) || null == (s = s.size) ? void 0 : s.height) === 0)) {
                                p.next = 10;
                                break
                            }
                            return this.hideCurrentThumb({
                                withAnimation: !1
                            }),
                            p.abrupt("return");
                        case 10:
                            o = r.spriteUrl,
                            c = r.spriteInfo,
                            u = (h = this.spritePreviewViewers).backgroundSpriteViewer,
                            d = h.progressBarSpriteViewer,
                            A = !l.A.get("ads_preload") && !l.A.get("ads_playing"),
                            u && t.showBackgroundPreview && A && (u.setCurrentFrame(o, c),
                            u.show()),
                            d && (d.setCurrentFrame(o, c),
                            d.show(e));
                        case 15:
                        case "end":
                            return p.stop()
                        }
                }, null, this, null, Promise)
            }
        }, {
            key: "hideCurrentThumb",
            value: function(e) {
                Object.values(this.spritePreviewViewers).filter(function(e) {
                    return e
                }).forEach(function(t) {
                    null != e && e.withAnimation && t.hideAnimated ? t.hideAnimated() : t.hide()
                })
            }
        }, {
            key: "checkForThumbHide",
            value: function() {
                if (!l.A.get("swiping") && !l.A.get("seeking")) {
                    var e;
                    null == (e = this.spritePreviewViewers.backgroundSpriteViewer) || e.hide()
                }
            }
        }])
    },
    25891: function(e, t, i) {
        "use strict";
        i.d(t, {
            q: function() {
                return E
            }
        });
        var n = i(84422)
          , s = i(15904)
          , r = i(86096)
          , o = i(7163)
          , a = i(37651)
          , l = i(10809)
          , c = i(9776)
          , h = i(54098)
          , u = i(83899)
          , d = i(78772)
          , A = i(94786)
          , p = "xp-progress__handler--active"
          , m = "xp-progress-bar--drag"
          , v = "xh-helper-hidden"
          , E = (0,
        s.A)(function e(t, i, s) {
            (0,
            n.A)(this, e),
            (0,
            r.A)(this, "core", void 0),
            (0,
            r.A)(this, "options", void 0),
            (0,
            r.A)(this, "sfw", void 0),
            (0,
            r.A)(this, "element", void 0),
            (0,
            r.A)(this, "spriteViewer", void 0),
            (0,
            r.A)(this, "actionsPlugin", void 0),
            (0,
            r.A)(this, "heatmapPlugin", void 0),
            (0,
            r.A)(this, "seeking", void 0),
            (0,
            r.A)(this, "progressBarUpdated", void 0),
            (0,
            r.A)(this, "disableTouchEvents", void 0),
            (0,
            r.A)(this, "thumbs", void 0),
            (0,
            r.A)(this, "settingsMenuOpened", void 0),
            (0,
            r.A)(this, "seekingTime", void 0),
            (0,
            r.A)(this, "elementWidth", void 0),
            (0,
            r.A)(this, "mouseLeavedSeeker", void 0),
            (0,
            r.A)(this, "isProgressBarBlocked", void 0),
            (0,
            r.A)(this, "animation", void 0),
            (0,
            r.A)(this, "animationInterval", void 0),
            (0,
            r.A)(this, "transformX", void 0),
            (0,
            r.A)(this, "seekerMovedTimes", void 0),
            (0,
            r.A)(this, "draggingTimeout", void 0),
            (0,
            r.A)(this, "isDragging", void 0),
            (0,
            r.A)(this, "draggingTreshold", void 0),
            (0,
            r.A)(this, "wasOnPause", void 0),
            (0,
            r.A)(this, "isFirstPlay", void 0),
            (0,
            r.A)(this, "isDragPaused", void 0),
            (0,
            r.A)(this, "dragPauseTreshold", void 0),
            (0,
            r.A)(this, "dragPauseTimeout", void 0),
            (0,
            r.A)(this, "fillerElement", void 0),
            (0,
            r.A)(this, "handleElement", void 0),
            (0,
            r.A)(this, "bufferElement", void 0),
            (0,
            r.A)(this, "seekerElement", void 0),
            (0,
            r.A)(this, "nsfwFillerElement", void 0),
            (0,
            r.A)(this, "transformStyleProperty", void 0),
            (0,
            r.A)(this, "clientX", void 0),
            (0,
            r.A)(this, "clientY", void 0),
            (0,
            r.A)(this, "swipeLock", void 0),
            (0,
            r.A)(this, "touchedSeeker", void 0),
            (0,
            r.A)(this, "isMobileV2", void 0),
            (0,
            r.A)(this, "isPrerollSkipAfterProgressEnabled", void 0),
            (0,
            r.A)(this, "isProgressBarFilled", void 0),
            (0,
            r.A)(this, "isSkipShowed", void 0),
            (0,
            r.A)(this, "isMouseDown", void 0),
            (0,
            r.A)(this, "backgroundThumbsEnabled", void 0),
            (0,
            r.A)(this, "showThumbsThrottled", void 0),
            (0,
            r.A)(this, "setCurrentTimeThrottled", void 0),
            (0,
            r.A)(this, "animationStepBind", void 0),
            (0,
            r.A)(this, "checkDragPauseBind", void 0),
            this.core = t,
            this.options = (null == i ? void 0 : i.progressBar) || {},
            this.spriteViewer = s,
            this.sfw = null == (o = this.core.options) ? void 0 : o.sfw,
            this.isMobileV2 = null == i ? void 0 : i.mobileV2,
            this.seeking = !1,
            this.progressBarUpdated = !1,
            this.wasOnPause = !0,
            this.isFirstPlay = !0,
            this.backgroundThumbsEnabled = !!this.options.backgroundThumbsEnabled,
            this.disableTouchEvents = this.options.disableTouchEvents || !1,
            this.settingsMenuOpened = !1;
            var o, a, l = this.core.capabilities.idevice;
            this.isDragPaused = !1,
            this.dragPauseTreshold = this.options.dragPauseTreshold || (l ? 100 : 200),
            this.seekingTime = 0,
            this.elementWidth = 0,
            this.seekerMovedTimes = 0,
            this.mouseLeavedSeeker = !1,
            this.isProgressBarBlocked = !0,
            this.isDragging = !1,
            this.draggingTimeout = null,
            this.draggingTreshold = 25,
            this.clientX = null,
            this.clientY = null,
            this.swipeLock = null,
            this.touchedSeeker = !1,
            this.isPrerollSkipAfterProgressEnabled = !!(null == (a = i.ads) ? void 0 : a.isPrerollSkipAfterProgressEnabled),
            this.isProgressBarFilled = !1,
            this.isSkipShowed = !1,
            this.init()
        }, [{
            key: "init",
            value: function() {
                var e, t, i, n = this;
                this.render(),
                o.A.addClass(this.core.element, "xp-progress-bar-full"),
                this.transformStyleProperty = o.A.checkTransformVendor(),
                this.checkDragPauseBind = this.checkDragPause.bind(this),
                this.animationStepBind = this.animationStep.bind(this),
                this.showThumbsThrottled = (0,
                d.nF)(this.showThumbs.bind(this), 20),
                this.setCurrentTimeThrottled = (0,
                d.nF)(function(e) {
                    return n.setCurrentTime(e)
                }, 100),
                this.attachEvents(),
                this.elementWidth || (this.elementWidth = this.element.offsetWidth);
                var s = null == (t = this.spriteViewer) ? void 0 : t.render();
                s && (this.element.appendChild(s),
                this.spriteViewer.setParentElementWidth(this.elementWidth)),
                this.nsfwFillerElement = this.element.querySelector(".nsfw-filler"),
                null != (i = this.sfw) && i.moderationTimestamp && this.nsfwFillerElement && (this.nsfwFillerElement.style.width = this.calculateNsfwWidth(null == (e = this.sfw) ? void 0 : e.moderationTimestamp))
            }
        }, {
            key: "render",
            value: function() {
                this.element = document.createElement("div"),
                this.element.className = "xp-progress-bar ".concat(this.isMobileV2 ? v : ""),
                this.element.innerHTML = this.isMobileV2 ? '\n        <span class="seeker">\n            <span class="buffer"></span>\n            <span class="filler"></span>\n            <span class="handle"></span>\n        </span>\n    ' : '\n        <span class="seeker togglable">\n            <span class="buffer"></span>\n            <span class="filler"></span>\n            <span class="nsfw-filler"></span>\n            <span class="handle"></span>\n        </span>\n    ',
                this.seekerElement = this.element.querySelector(".seeker"),
                this.fillerElement = this.element.querySelector(".filler"),
                this.handleElement = this.element.querySelector(".handle"),
                this.bufferElement = this.element.querySelector(".buffer"),
                this.core.element.appendChild(this.element)
            }
        }, {
            key: "calculateNsfwWidth",
            value: function(e) {
                var t = this.isProgressBarBlocked ? this.core.options.duration : h.A.get("duration")
                  , i = Math.floor(t - e);
                return "".concat(this.elementWidth * (i / t), "px")
            }
        }, {
            key: "attachEvents",
            value: function() {
                !this.options.disableProgressBarControl && (this.attachMouseEvents(),
                this.disableTouchEvents || this.attachTouchEvents()),
                a.A.on(l.A.PLAYER_ON_PROGRESS, this.onPlayerProgress, this),
                a.A.on(l.A.PLAYER_ON_LOADED_DATA, this.onPlayerProgress, this),
                a.A.on(l.A.PLAYER_ON_CAN_PLAY, this.onPlayerProgress, this),
                a.A.on(l.A.PLAYER_ON_PLAYING, this.onPlayerPlay, this),
                a.A.on(l.A.PLAYER_ON_PAUSE, this.onPlayerPause, this),
                a.A.on(l.A.PLAYER_ON_ENDED, this.onPlayerEnd, this),
                a.A.on(l.A.PLAYER_PAUSE, this.setWasOnPause, this),
                a.A.on(l.A.PLAYER_SET_SOURCE, this.onPlayerSetSource, this),
                a.A.on(l.A.NO_USER_ACTION, this.onNoUserAction, this),
                a.A.on(l.A.USER_ACTION, this.onUserAction, this),
                a.A.on(l.A.PROGRESS_BAR_UPDATE, this.onProgressBarUpdate, this),
                a.A.on(l.A.PROGRESS_BAR_VISUAL_UPDATE, this.progressBarVisualUpdate, this),
                a.A.on(l.A.PROGRESS_BAR_UPDATE_END, this.onProgressBarUpdateEnd, this),
                a.A.on(l.A.CONTROLS_RESET, this.onControlsReset, this),
                a.A.once(l.A.PLAYER_PLAY, this.unblockProgressBar, this),
                window.addEventListener("resize", this.onResize.bind(this)),
                a.A.on(l.A.PLAYER_ON_FULLSCREEN_CHANGE, this.onResize.bind(this)),
                a.A.on(l.A.PROGRESS_BAR_RESIZE, this.onResize.bind(this))
            }
        }, {
            key: "useActionsPlugin",
            value: function(e) {
                this.actionsPlugin = e,
                this.initActions()
            }
        }, {
            key: "useHeatmapPlugin",
            value: function() {
                var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
                this.heatmapPlugin = e,
                this.initHeatmap()
            }
        }, {
            key: "initActions",
            value: function() {
                this.setMarksPositions(),
                this.seekerElement.appendChild(this.actionsPlugin.element)
            }
        }, {
            key: "initHeatmap",
            value: function() {
                var e;
                null != (e = this.heatmapPlugin) && e.element && this.element.appendChild(this.heatmapPlugin.element)
            }
        }, {
            key: "setMarksPositions",
            value: function() {
                var e, t = this;
                if ((null == (e = this.actionsPlugin) || null == (e = e.marks) ? void 0 : e.length) > 0) {
                    var i = Math.max(24, .01 * this.elementWidth);
                    this.actionsPlugin.marks.forEach(function(e) {
                        var n = t.calculateOffsetFromTime(e.timePosition);
                        e.setPosition({
                            offset: n
                        }),
                        e.setHitArea(i)
                    })
                }
            }
        }, {
            key: "setCheckDragPauseTimeout",
            value: function() {
                clearTimeout(this.dragPauseTimeout),
                this.dragPauseTimeout = setTimeout(this.checkDragPauseBind, this.dragPauseTreshold)
            }
        }, {
            key: "hideProgressBar",
            value: function() {
                o.A.addClass(this.element, v)
            }
        }, {
            key: "showProgressBar",
            value: function() {
                o.A.removeClass(this.element, v)
            }
        }, {
            key: "unblockProgressBar",
            value: function() {
                this.isProgressBarBlocked = !1,
                this.showProgressBar()
            }
        }, {
            key: "attachMouseEvents",
            value: function() {
                c.A.addEventListenerWithYield(A.c.MOUSE_DOWN, this.element, this.onSeekerElementMouseDown.bind(this)),
                c.A.addEventListenerWithYield(A.c.MOUSE_MOVE, this.element, this.onSeekerElementMouseMove.bind(this)),
                c.A.addEventListenerWithYield(A.c.MOUSE_LEAVE, this.element, this.onSeekerElementMouseLeave.bind(this)),
                c.A.addEventListenerWithYield(A.c.MOUSE_ENTER, this.element, this.onSeekerElementMouseEnter.bind(this));
                var e = this.core.element;
                e.addEventListener(A.c.MOUSE_MOVE, this.onCoreElementMouseMove.bind(this)),
                e.addEventListener(A.c.MOUSE_UP, this.onCoreElementMouseUp.bind(this)),
                e.addEventListener(A.c.MOUSE_LEAVE, this.onCoreElementMouseLeave.bind(this))
            }
        }, {
            key: "attachTouchEvents",
            value: function() {
                c.A.addEventListenerWithYield(A.E.TOUCH_START, this.element, this.onSeekerElementTouchStart.bind(this)),
                c.A.addEventListenerWithYield(A.E.TOUCH_END, this.core.element, this.onCoreElementTouchEnd.bind(this)),
                this.isMobileV2 && !this.backgroundThumbsEnabled ? c.A.addEventListenerWithYield(A.E.TOUCH_MOVE, this.core.element, this.onTouchMoveSimple.bind(this)) : c.A.addEventListenerWithYield(A.E.TOUCH_MOVE, this.core.element, this.onTouchMoveEvent.bind(this))
            }
        }, {
            key: "setPauseOnHandlerMove",
            value: function() {
                if (!h.A.get("chromecast") && (h.A.get("playing") && (a.A.emit(l.A.PAUSE_ACTION_BLOCK),
                a.A.emit(l.A.PLAYER_PAUSE, {
                    wasOnPause: !1
                })),
                this.isMobileV2 && !this.core.sourceController.isLoadStopped)) {
                    var e, t;
                    null == (e = (t = this.core.sourceController).stopLoad) || e.call(t)
                }
            }
        }, {
            key: "saveCurrentTime",
            value: function(e) {
                if (this.isProgressBarBlocked) {
                    var t = 100 * this.getOffsetLeftFromMouseEvent(e) / this.elementWidth
                      , i = this.core.options.duration;
                    h.A.set("savedCurrentTime", i * t / 100)
                }
            }
        }, {
            key: "onSeekerElementMouseDown",
            value: function(e) {
                var t, i = this;
                this.isMouseDown = !0,
                this.isDragPaused = !1,
                0 === e.button && (!this.core.capabilities.mobile || null != (t = e.touches) && t.length) && (this.progressBarUpdated || this.isAdsPlaying() || (!h.A.get("ads") && this.isFirstPlay && (this.isFirstPlay = !1,
                a.A.once(l.A.PROGRESS_BAR_UPDATE_END, function() {
                    a.A.emit(l.A.PLAYER_PLAY)
                })),
                this.saveCurrentTime(e),
                this.setPauseOnHandlerMove(),
                h.A.set("seeking", !0),
                this.seeking = !0,
                this.animation = !1,
                this.handleElement.classList.add(p),
                this.onCoreElementMouseMove(e),
                this.draggingTimeout = setTimeout(function() {
                    i.isDragging = !0
                }, this.draggingTreshold)))
            }
        }, {
            key: "onSeekerElementTouchStart",
            value: function(e) {
                var t = this;
                this.progressBarUpdated || this.isAdsPlaying() || (this.touchedSeeker = !0,
                this.clientX = e.touches[0].clientX,
                this.clientY = e.touches[0].clientY,
                this.progressBarUpdated = !1,
                this.isDragPaused = !1,
                this.seeking = !0,
                h.A.set("seeking", !0),
                this.saveCurrentTime(e),
                this.onSeekerElementMouseEnter(e, !1),
                this.draggingTimeout = setTimeout(function() {
                    t.isDragging = !0
                }, this.draggingTreshold))
            }
        }, {
            key: "onSeekerElementMouseEnter",
            value: function(e, t) {
                var i;
                !this.isAdsPlaying() && (this.mouseLeavedSeeker = !1,
                this.showThumbsThrottled(this.calculateTimeFromMouseOffset(e)),
                null == (i = this.heatmapPlugin) || i.showHeatmap(),
                t || a.A.emit(l.A.USER_ACTION_PAUSE))
            }
        }, {
            key: "onSeekerElementMouseMove",
            value: function(e) {
                this.progressBarUpdated || this.isAdsPlaying() || this.showThumbsThrottled(this.calculateTimeFromMouseOffset(e))
            }
        }, {
            key: "calculateTimeFromMouseOffset",
            value: function(e) {
                this.elementWidth || (this.elementWidth = this.element.offsetWidth);
                var t = this.getOffsetLeftFromMouseEvent(e);
                return (this.isProgressBarBlocked ? this.core.options.duration : h.A.get("duration")) * (100 * t / this.elementWidth) / 100
            }
        }, {
            key: "calculateOffsetFromTime",
            value: function(e) {
                var t = this.isProgressBarBlocked ? this.core.options.duration : h.A.get("duration");
                return this.elementWidth * (e / t)
            }
        }, {
            key: "onSeekerElementMouseLeave",
            value: function() {
                if (a.A.emit(l.A.USER_ACTION_UNPAUSE),
                this.mouseLeavedSeeker = !0,
                !this.isMouseDown) {
                    var e;
                    null == (e = this.heatmapPlugin) || e.hideHeatmap()
                }
                this.seeking || a.A.emit(l.A.USER_SEEK_HIDE_PREVIEW)
            }
        }, {
            key: "isAdsPlaying",
            value: function() {
                return h.A.get("ads_playing")
            }
        }, {
            key: "onTouchMoveSimple",
            value: function(e) {
                var t = this.isMobileV2 && (this.isAdsPlaying() || this.progressBarUpdated);
                this.touchedSeeker && !t && this.seeking && (h.A.set("seeking", !0),
                this.seeking = !0,
                this.progressBarUpdated || this.isAdsPlaying() || (this.setPauseOnHandlerMove(),
                a.A.emit(l.A.PLAYER_ON_PROGRESS_BAR_MOVE),
                e.cancelable && e.preventDefault(),
                this.seekerMovedTimes++,
                this.seekingTime = this.calculateTimeFromMouseOffset(e),
                this.isDragPaused = !0,
                this.progressBarVisualUpdate(this.seekingTime),
                this.setCurrentTimeThrottled(this.seekingTime),
                this.core.element.classList.add(m)))
            }
        }, {
            key: "onTouchMoveEvent",
            value: function(e) {
                var t = this.isMobileV2 && (this.isAdsPlaying() || this.progressBarUpdated);
                if (this.touchedSeeker && !t && (this.setSwipeLock(e),
                "vertical" !== this.swipeLock))
                    this.onSeekerElementMouseDown(e),
                    this.seeking && (this.progressBarUpdated || this.isAdsPlaying() || (this.setPauseOnHandlerMove(),
                    a.A.emit(l.A.PLAYER_ON_PROGRESS_BAR_MOVE),
                    e.cancelable && e.preventDefault(),
                    this.seekerMovedTimes++,
                    this.seekingTime = this.calculateTimeFromMouseOffset(e),
                    this.progressBarVisualUpdate(this.seekingTime),
                    this.showThumbsThrottled(this.seekingTime),
                    this.setCheckDragPauseTimeout(),
                    this.core.element.classList.add(m)))
            }
        }, {
            key: "onCoreElementMouseMove",
            value: function(e) {
                this.seeking && (this.progressBarUpdated || this.isAdsPlaying() || (a.A.emit(l.A.PLAYER_ON_PROGRESS_BAR_MOVE),
                e.preventDefault(),
                this.seekerMovedTimes++,
                this.seekingTime = this.calculateTimeFromMouseOffset(e),
                this.progressBarVisualUpdate(this.seekingTime),
                this.showThumbsThrottled(this.seekingTime),
                this.setCheckDragPauseTimeout()))
            }
        }, {
            key: "onCoreElementMouseUp",
            value: function(e) {
                this.isDragging = !1,
                this.isMouseDown = !1;
                var t, i = e.target;
                if (this.element.contains(i) || null == (t = this.heatmapPlugin) || t.hideHeatmap(),
                this.seeking) {
                    if (this.progressBarUpdated || this.isAdsPlaying()) {
                        h.A.set("seeking", !1),
                        this.seeking = !1,
                        this.isDragPaused = !1,
                        this.handleElement.classList.remove(p),
                        a.A.emit(l.A.PAUSE_ACTION_UNBLOCK);
                        return
                    }
                    this.isProgressBarBlocked && this.saveCurrentTime(e),
                    h.A.set("seeking", !1),
                    this.seeking = !1,
                    this.handleElement.classList.remove(p),
                    a.A.emit(l.A.PAUSE_ACTION_UNBLOCK),
                    this.seekingTime = this.calculateTimeFromMouseEvent(e),
                    this.setCurrentTime(this.seekingTime, !0),
                    h.A.get("playing") && !1 === this.animation && (this.animation = !0,
                    this.animationStep()),
                    clearTimeout(this.draggingTimeout),
                    a.A.emit(l.A.USER_SEEK_HIDE_PREVIEW),
                    this.sendSeekerUIStats()
                }
            }
        }, {
            key: "onCoreElementMouseLeave",
            value: function(e) {
                this.onCoreElementMouseUp(e)
            }
        }, {
            key: "setSwipeLock",
            value: function(e) {
                if (!this.swipeLock) {
                    var t = e.changedTouches[0]
                      , i = t.clientX
                      , n = t.clientY
                      , s = Math.abs(this.clientX - i) - Math.abs(this.clientY - n) > -.1;
                    this.swipeLock = s ? "horizontal" : "vertical"
                }
            }
        }, {
            key: "checkDragPause",
            value: function() {
                h.A.get("ads") || h.A.get("ads_preload") || !this.isMouseDown || this.core.capabilities.mobile || (this.isDragPaused = !0,
                this.setCurrentTime(this.seekingTime))
            }
        }, {
            key: "onCoreElementTouchEnd",
            value: function(e) {
                if (this.touchedSeeker) {
                    if (this.isDragging = !1,
                    this.touchedSeeker = !1,
                    this.clientX = null,
                    this.clientY = null,
                    this.swipeLock = null,
                    !this.seeking)
                        return void a.A.emit(l.A.USER_SEEK_HIDE_PREVIEW);
                    this.mouseLeavedSeeker = !0,
                    a.A.emit(l.A.USER_ACTION_UNPAUSE),
                    this.core.userActionController.getHasNoUserAction() || a.A.emit(l.A.USER_ACTION, !0),
                    this.onCoreElementMouseUp(e),
                    this.core.element.classList.remove(m)
                }
            }
        }, {
            key: "setCurrentTime",
            value: function(e) {
                var t, i, n = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
                if (!this.isAdsPlaying()) {
                    var s = Math.floor(e) >= Math.floor(h.A.get("duration"))
                      , r = s ? h.A.get("duration") - .01 : e
                      , o = (!this.wasOnPause || s) && r < h.A.get("duration") && n;
                    this.isMobileV2 && this.core.sourceController.isLoadStopped && (null == (t = (i = this.core.sourceController).startLoad) || t.call(i, r)),
                    (o || h.A.get("ads") || this.isFirstPlay) && (this.isFirstPlay = !1,
                    a.A.emit(l.A.PLAYER_PLAY)),
                    a.A.emit(l.A.USER_SEEK_SET_CURRENT_TIME_PROGRESS_BAR, r, this.isDragPaused)
                }
            }
        }, {
            key: "onPlayerProgress",
            value: function(e) {
                if (null != e && null != (t = e.target) && t.buffered) {
                    var t, i = e.target.buffered, n = e.target.currentTime, s = e.target.duration;
                    this.updateBuffer(i, n, s)
                }
            }
        }, {
            key: "calculateTimeFromMouseEvent",
            value: function(e) {
                this.elementWidth || (this.elementWidth = this.element.offsetWidth),
                null == (t = this.spriteViewer) || t.setParentElementWidth(this.elementWidth);
                var t, i = h.A.get("duration"), n = i * (100 * this.getOffsetLeftFromMouseEvent(e) / this.elementWidth) / 100;
                return n <= 0 ? 0 : n >= i ? i : n
            }
        }, {
            key: "getOffsetLeftFromMouseEvent",
            value: function(e) {
                var t = this.getEventClientX(e) + (window.scrollX || window.pageXOffset) - o.A.findElPosition(this.element).left;
                return t < 0 ? 0 : t > this.elementWidth ? this.elementWidth : t
            }
        }, {
            key: "getEventClientX",
            value: function(e) {
                if (window.TouchEvent && e instanceof window.TouchEvent) {
                    var t, i, n, s;
                    return (null == (t = e.changedTouches) ? void 0 : t.length) && (null == (i = e.changedTouches) || null == (i = i[0]) ? void 0 : i.clientX) || (null == (n = e.touches) ? void 0 : n.length) && (null == (s = e.touches) ? void 0 : s[0].clientX)
                }
                return e.clientX
            }
        }, {
            key: "animationStep",
            value: function() {
                !h.A.get("chromecast") && !1 !== this.animation && !0 !== this.seeking && (this.core.videoElement.buffered.length || this.isAdsPlaying()) && (this.updateFillerAndHandler(this.core.videoElement.currentTime),
                this.animationInterval = requestAnimationFrame(this.animationStepBind))
            }
        }, {
            key: "setAnimation",
            value: function() {
                this.wasOnPause = !1,
                this.animation = !0,
                this.animationStep()
            }
        }, {
            key: "onPlayerPlay",
            value: function() {
                this.isFirstPlay = !1,
                this.seeking && (h.A.set("seeking", !1),
                this.seeking = !1,
                this.setCurrentTime(this.seekingTime),
                a.A.emit(l.A.USER_SEEK_HIDE_PREVIEW)),
                this.core.capabilities.idevice && !this.isAdsPlaying() ? a.A.once(l.A.PLAYER_ON_CAN_PLAY_THROUGH, this.setAnimation, this) : this.setAnimation(),
                this.wasOnPause = !1
            }
        }, {
            key: "setWasOnPause",
            value: function() {
                var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}
                  , t = e.wasOnPause;
                this.wasOnPause || (this.wasOnPause = void 0 === t || t)
            }
        }, {
            key: "onPlayerPause",
            value: function() {
                this.animation = !1
            }
        }, {
            key: "onPlayerEnd",
            value: function() {
                this.updateFillerAndHandler(h.A.get("duration"))
            }
        }, {
            key: "onPlayerSetSource",
            value: function() {
                cancelAnimationFrame(this.animationInterval)
            }
        }, {
            key: "onResize",
            value: function() {
                var e = this;
                setTimeout(function() {
                    var t, i, n;
                    e.elementWidth = e.element.offsetWidth,
                    null == (t = e.spriteViewer) || t.setParentElementWidth(e.elementWidth),
                    null != (i = e.nsfwFillerElement) && i.style && (e.nsfwFillerElement.style.width = e.calculateNsfwWidth(null == (n = e.sfw) ? void 0 : n.moderationTimestamp)),
                    e.updateFillerAndHandler(e.core.videoElement.currentTime),
                    e.setMarksPositions()
                }, 1)
            }
        }, {
            key: "updatePlayedTime",
            value: function(e) {
                a.A.emit(l.A.PROGRESS_BAR_HANDLER_MOVE, e)
            }
        }, {
            key: "updateFillerAndHandler",
            value: function(e) {
                (!this.elementWidth || this.element.offsetWidth && this.elementWidth !== this.element.offsetWidth) && (this.elementWidth = this.element.offsetWidth);
                var t = 0
                  , i = h.A.get("ads_skip_offset");
                t = h.A.get("ads") && i ? this.isPrerollSkipAfterProgressEnabled ? i : this.core.options.duration : h.A.get("duration"),
                this.isAdsPlaying() && i && (t = this.isPrerollSkipAfterProgressEnabled ? i : h.A.get("duration")),
                this.isFirstPlay && (t = this.core.options.duration);
                var n = e / t
                  , s = n > .9999 ? 1 : n
                  , r = (s * this.elementWidth).toFixed(1);
                this.transformX !== r && (this.handleElement.style.setProperty(this.transformStyleProperty, "translateX(".concat(r, "px)")),
                this.fillerElement.style.setProperty(this.transformStyleProperty, "scaleX(".concat(s, ")")),
                this.transformX = r);
                var o = 1 === s && !this.isProgressBarFilled
                  , c = this.isPrerollSkipAfterProgressEnabled && o && h.A.get("currentTime") >= i;
                this.isSkipShowed || i && !c || (this.isProgressBarFilled = !0,
                this.isSkipShowed = !0,
                a.A.emit(l.A.ADS_SHOW_SKIP_AFTER_PROGRESS))
            }
        }, {
            key: "updateBuffer",
            value: function(e, t, i) {
                for (var n = 0; n < e.length; n++)
                    if (Math.floor(e.start(n)) <= t && t < e.end(n)) {
                        var s = e.end(n) / i;
                        s = s > .98 ? 1 : s,
                        this.bufferElement.style.setProperty(this.transformStyleProperty, "scaleX(".concat(s, ")"))
                    }
            }
        }, {
            key: "onNoUserAction",
            value: function() {
                !h.A.get("playing") || this.isAdsPlaying() || (this.animation = !1)
            }
        }, {
            key: "onUserAction",
            value: function() {
                !1 !== h.A.get("playing") && !0 !== this.animation && !0 !== this.seeking && (this.animation = !0,
                this.animationStep())
            }
        }, {
            key: "progressBarVisualUpdate",
            value: function(e) {
                this.updateFillerAndHandler(e),
                this.updatePlayedTime(e)
            }
        }, {
            key: "onProgressBarUpdate",
            value: function(e) {
                if (h.A.get("chromecast"))
                    return void this.updateFillerAndHandler(e);
                this.seekingTime = e,
                h.A.set("seeking", !0),
                this.seeking = !0,
                this.progressBarUpdated = !0,
                this.progressBarVisualUpdate(e)
            }
        }, {
            key: "onControlsReset",
            value: function(e) {
                this.updateFillerAndHandler(e),
                this.bufferElement.style.setProperty(this.transformStyleProperty, "scaleX(0)")
            }
        }, {
            key: "onProgressBarUpdateEnd",
            value: function() {
                h.A.set("seeking", !1),
                this.seeking = !1,
                this.progressBarUpdated = !1,
                this.isDragPaused = !1,
                h.A.get("playing") && this.animationStep()
            }
        }, {
            key: "sendSeekerUIStats",
            value: function() {
                this.seekerMovedTimes > 3 ? a.A.emit(l.A.STATISTICS_UI, u.A.seeking_by_progress_bar_dragging) : a.A.emit(l.A.STATISTICS_UI, u.A.seeking_by_progress_bar_clicking),
                this.seekerMovedTimes = 0
            }
        }, {
            key: "onSettingsMenuToggled",
            value: function(e) {
                this.settingsMenuOpened = e,
                a.A.emit(l.A.USER_SEEK_HIDE_PREVIEW)
            }
        }, {
            key: "showThumbs",
            value: function(e) {
                if (!this.settingsMenuOpened) {
                    if (this.mouseLeavedSeeker) {
                        this.mouseLeavedSeeker = !1;
                        return
                    }
                    if (!this.elementWidth) {
                        var t;
                        this.elementWidth = this.element.offsetWidth,
                        null == (t = this.spriteViewer) || t.setParentElementWidth(this.elementWidth)
                    }
                    a.A.emit(l.A.USER_SEEK_SHOW_PREVIEW, e, {
                        showBackgroundPreview: this.isDragging
                    })
                }
            }
        }, {
            key: "checkIfThumbsNeedHide",
            value: function(e) {
                return e.target !== this.element && e.target !== this.seekerElement && e.target !== this.handleElement && e.target !== this.bufferElement && e.target !== this.fillerElement || window.TouchEvent && e instanceof window.TouchEvent
            }
        }])
    },
    36348: function(e, t, i) {
        "use strict";
        i.d(t, {
            y: function() {
                return f
            }
        });
        var n = i(84422)
          , s = i(15904)
          , r = i(86096)
          , o = i(94786)
          , a = i(37651)
          , l = i(10809)
          , c = "xh-helper-hidden"
          , h = (0,
        s.A)(function e() {
            (0,
            n.A)(this, e),
            (0,
            r.A)(this, "element", void 0),
            this.element = document.createElement("div"),
            this.element.className = "".concat("xplayer-speed-boost-indicator", " ").concat(c),
            this.element.textContent = "".concat(2, "x")
        }, [{
            key: "getElement",
            value: function() {
                return this.element
            }
        }, {
            key: "show",
            value: function() {
                this.element.classList.remove(c),
                a.A.emit(l.A.NO_USER_ACTION)
            }
        }, {
            key: "hide",
            value: function() {
                this.element.classList.add(c)
            }
        }])
          , u = i(7163)
          , d = i(9776)
          , A = i(54098)
          , p = "xp-sides-doubletap"
          , m = "xplayer-hide-mobile-controls"
          , v = "xplayer-menu-mobile-middle"
          , E = [v, "xplayer-background-top", "xplayer-background-bottom", "xplayer-menu-mobile-top", "xplayer-menu-mobile-bottom-upper", "thumbs-background", "player-add-ov", "tab-content", "xplayer-related", "top-rated", "more-from-user", "xplayer-share-control__icon", "xplayer-chrome-ios"]
          , f = (0,
        s.A)(function e(t, i) {
            var s;
            (0,
            n.A)(this, e),
            (0,
            r.A)(this, "core", void 0),
            (0,
            r.A)(this, "options", void 0),
            (0,
            r.A)(this, "xDown", void 0),
            (0,
            r.A)(this, "yDown", void 0),
            (0,
            r.A)(this, "rootElement", void 0),
            (0,
            r.A)(this, "isHorizontalLock", void 0),
            (0,
            r.A)(this, "isVerticalLock", void 0),
            (0,
            r.A)(this, "lastTap", void 0),
            (0,
            r.A)(this, "doubleTapTimer", void 0),
            (0,
            r.A)(this, "hideMobileControlsTimer", void 0),
            (0,
            r.A)(this, "currentTime", void 0),
            (0,
            r.A)(this, "wasSwiping", void 0),
            (0,
            r.A)(this, "doubleTapAnimationClassTimeout", void 0),
            (0,
            r.A)(this, "bottomUntouchableAreaPercent", void 0),
            (0,
            r.A)(this, "doubleTapLength", void 0),
            (0,
            r.A)(this, "isMobileV2", void 0),
            (0,
            r.A)(this, "speedBoostTimer", void 0),
            (0,
            r.A)(this, "savedPlaybackRate", void 0),
            (0,
            r.A)(this, "isSpeedBoosted", void 0),
            (0,
            r.A)(this, "speedBoostIndicator", void 0),
            this.core = t,
            this.options = (null == i ? void 0 : i.touchControl) || {},
            this.isMobileV2 = null == i ? void 0 : i.mobileV2,
            this.xDown = 0,
            this.yDown = 0,
            this.rootElement = null,
            this.isHorizontalLock = !1,
            this.isVerticalLock = !1,
            this.doubleTapTimer = null,
            this.hideMobileControlsTimer = null,
            this.lastTap = 0,
            this.currentTime = 0,
            this.wasSwiping = !1,
            this.bottomUntouchableAreaPercent = this.options.bottomUntouchableAreaPercent || 0,
            this.doubleTapLength = null != (s = this.core.capabilities) && s.chromeIos ? 500 : 300,
            this.speedBoostTimer = null,
            this.savedPlaybackRate = 1,
            this.isSpeedBoosted = !1,
            this.init()
        }, [{
            key: "init",
            value: function() {
                this.rootElement = this.core.element,
                this.setDoubleSidesMode(this.core.settings.doubleTapMode),
                this.createSpeedBoostIndicator(),
                this.attachEvents()
            }
        }, {
            key: "createSpeedBoostIndicator",
            value: function() {
                this.speedBoostIndicator = new h,
                this.rootElement.appendChild(this.speedBoostIndicator.getElement())
            }
        }, {
            key: "attachEvents",
            value: function() {
                var e = this.core.element;
                d.A.addEventListenerWithYield(o.E.TOUCH_START, e, this.onElementTouchStart.bind(this)),
                d.A.addEventListenerWithYield(o.E.TOUCH_END, e, this.onElementTouchEnd.bind(this)),
                d.A.addEventListenerWithYield(o.E.TOUCH_MOVE, e, this.onElementTouchMove.bind(this)),
                d.A.addEventListenerWithYield(o.E.TOUCH_CANCEL, e, this.onElementTouchCancel.bind(this)),
                this.core.capabilities.idevice && e.addEventListener(o.E.TOUCH_START, this.onIdeviceTouchStart.bind(this)),
                a.A.on(l.A.PLAYER_SET_DOUBLE_TAP_MODE, this.setDoubleSidesMode.bind(this)),
                a.A.once(l.A.PLAYER_PLAY, function() {
                    E.push("xplayer-start-button")
                }),
                e.addEventListener("contextmenu", function(e) {
                    e.preventDefault()
                })
            }
        }, {
            key: "setDoubleSidesMode",
            value: function(e) {
                "top-down" === e ? u.A.removeClass(this.core.element, p) : u.A.addClass(this.core.element, p)
            }
        }, {
            key: "onIdeviceTouchStart",
            value: function(e) {
                var t = e.target;
                this.checkIfTouchTargetIgnored(t) || u.A.hasClass(t, "xplayer-start-button") || e.preventDefault()
            }
        }, {
            key: "onElementTouchStart",
            value: function(e) {
                if (!("touchend" === e.type || this.checkIfTouchTargetIgnored(e.target))) {
                    var t = e.touches[0];
                    this.isUntouchableArea(e) || (this.xDown = t.clientX,
                    this.yDown = t.clientY,
                    this.handleDoubleTap(e),
                    this.startSpeedBoostTimer())
                }
            }
        }, {
            key: "isUntouchableArea",
            value: function(e) {
                var t = e.touches[0]
                  , i = t.clientY
                  , n = t.clientX
                  , s = this.rootElement.getBoundingClientRect()
                  , r = s.left
                  , o = s.right
                  , a = s.top
                  , l = s.bottom
                  , c = s.height
                  , h = c * this.bottomUntouchableAreaPercent;
                return "landscape" === A.A.get("orientation") && A.A.get("fullscreen") && i <= a + 25 ? n <= r + 70 || n >= o - 70 : n >= r && n <= o && i >= a + c - h && i <= l
            }
        }, {
            key: "isRightSideTouch",
            value: function(e) {
                var t = Math.floor(this.rootElement.clientWidth / 2);
                return e.touches[0].clientX > t
            }
        }, {
            key: "isTopSideTouch",
            value: function(e) {
                var t = this.rootElement.getBoundingClientRect()
                  , i = t.height
                  , n = t.y
                  , s = Math.floor((i - 40) / 1.43);
                return e.touches[0].clientY < s + n
            }
        }, {
            key: "onElementTouchEnd",
            value: function() {
                if (this.xDown = null,
                this.yDown = null,
                this.isHorizontalLock = !1,
                this.isVerticalLock = !1,
                this.isSpeedBoosted)
                    return void this.cancelSpeedBoost();
                this.clearSpeedBoostTimer(),
                a.A.emit(l.A.PLAYER_ON_SWIPE_END),
                this.core.element.classList.remove("xp-swiping"),
                a.A.emit(l.A.PAUSE_ACTION_UNBLOCK)
            }
        }, {
            key: "onElementTouchCancel",
            value: function() {
                if (this.xDown = null,
                this.yDown = null,
                this.isHorizontalLock = !1,
                this.isVerticalLock = !1,
                this.isSpeedBoosted)
                    return void this.cancelSpeedBoost();
                this.clearSpeedBoostTimer(),
                A.A.get("swiping") && (a.A.emit(l.A.PLAYER_ON_SWIPE_END),
                this.core.element.classList.remove("xp-swiping"),
                a.A.emit(l.A.PAUSE_ACTION_UNBLOCK))
            }
        }, {
            key: "handleDoubleTap",
            value: function(e) {
                var t = this
                  , i = new Date().getTime()
                  , n = i - this.lastTap;
                if (clearTimeout(this.doubleTapTimer),
                n < this.doubleTapLength && n > 0)
                    if ("top-down" === this.core.settings.doubleTapMode && this.core.capabilities.mobilePlayer2)
                        e.preventDefault(),
                        this.isTopSideTouch(e) ? this.mobileDoubleTap("forward") : this.mobileDoubleTap("backward");
                    else {
                        var s = 0;
                        if (this.isRightSideTouch(e) ? (a.A.emit(l.A.DOUBLE_TAP, "forward"),
                        s = 10,
                        "left-right" === this.core.settings.doubleTapMode && this.mobileDoubleTap("forward")) : (a.A.emit(l.A.DOUBLE_TAP, "backward"),
                        s = -10,
                        "left-right" === this.core.settings.doubleTapMode && this.mobileDoubleTap("backward")),
                        this.core.capabilities.idevice) {
                            e.preventDefault();
                            var r = A.A.get("currentTime")
                              , o = l.A.USER_SEEK_SET_CURRENT_TIME_DOUBLETAP;
                            a.A.emit(o, r + s),
                            this.setMobileHiddenClassTimeout()
                        }
                    }
                else
                    this.doubleTapTimer = setTimeout(function() {
                        t.doubleTapUserActionCheck(e)
                    }, this.doubleTapLength);
                this.lastTap = i
            }
        }, {
            key: "setMobileHiddenClassTimeout",
            value: function() {
                var e = this;
                clearTimeout(this.hideMobileControlsTimer),
                u.A.hasClass(m) && u.A.addClass(this.core.element, m),
                this.hideMobileControlsTimer = setTimeout(function() {
                    u.A.removeClass(e.core.element, m)
                }, 600)
            }
        }, {
            key: "mobileDoubleTap",
            value: function(e) {
                var t, i = this, n = A.A.get("currentTime"), s = l.A.USER_SEEK_SET_CURRENT_TIME_DOUBLETAP, r = "forward" === e ? n + 10 : n - 10;
                r <= 0 && (r = 0),
                a.A.emit(l.A.DOUBLE_TAP, e),
                a.A.emit(l.A.NO_USER_ACTION),
                a.A.emit(s, r),
                a.A.emit(l.A.PROGRESS_BAR_VISUAL_UPDATE, r),
                null == (t = document.querySelector(".".concat(v))) || t.classList.add(e),
                this.core.element.classList.add("xp-double-tap"),
                clearTimeout(this.doubleTapAnimationClassTimeout),
                this.doubleTapAnimationClassTimeout = setTimeout(function() {
                    var e, t = null == (e = document.querySelector(".".concat(v))) ? void 0 : e.classList;
                    t && (t.remove("forward"),
                    t.remove("backward")),
                    i.core.element.classList.remove("xp-double-tap")
                }, 300),
                this.setMobileHiddenClassTimeout()
            }
        }, {
            key: "doubleTapUserActionCheck",
            value: function(e) {
                if (!this.speedBoostTimer && !this.isSpeedBoosted) {
                    if (!this.wasSwiping) {
                        var t = this.checkIfTouchTargetNoUserAction(e.target)
                          , i = this.checkIfTouchTargetUserAction(e.target);
                        t && !this.core.userActionController.getHasNoUserAction() ? a.A.emit(l.A.NO_USER_ACTION) : i && (this.core.options.isNonNativeAndroidFullscreen ? a.A.emit(l.A.USER_ACTION, 2500) : a.A.emit(l.A.USER_ACTION, 3e3))
                    }
                    this.wasSwiping = !1
                }
            }
        }, {
            key: "checkDistanceThreshold",
            value: function(e) {
                return Math.abs(e) >= 30
            }
        }, {
            key: "checkVerticalDistanceThreshold",
            value: function(e) {
                return e < -50
            }
        }, {
            key: "onElementTouchMove",
            value: function(e) {
                if (!this.checkIfTouchTargetIgnored(e.target) && this.xDown && this.yDown && !this.isSpeedBoosted) {
                    this.clearSpeedBoostTimer();
                    var t = e.changedTouches[0]
                      , i = t.clientX
                      , n = t.clientY
                      , s = this.xDown - i
                      , r = this.yDown - n;
                    if (this.setSwipeLockMode(s, r),
                    this.isVerticalLock) {
                        A.A.get("fullscreen") && this.checkVerticalDistanceThreshold(r) && (a.A.emit(l.A.FULLSCREEN_SWIPE),
                        a.A.emit(l.A.PLAYER_TOGGLE_FULLSCREEN),
                        a.A.emit(l.A.PLAYER_PAUSE));
                        return
                    }
                    this.isHorizontalLock && e.cancelable && e.preventDefault(),
                    (A.A.get("swiping") || this.checkDistanceThreshold(s)) && (A.A.get("swiping") || this.isMobileV2 || (a.A.emit(l.A.PLAYER_ON_SWIPE_START),
                    a.A.emit(l.A.PAUSE_ACTION_BLOCK),
                    this.isMobileV2 && a.A.emit(l.A.NO_USER_ACTION),
                    this.core.element.classList.add("xp-swiping"),
                    this.wasSwiping = !0),
                    this.isMobileV2 || a.A.emit(l.A.PLAYER_ON_SWIPE_SEEK, s),
                    this.xDown = t.clientX,
                    this.yDown = t.clientY,
                    this.setMobileHiddenClassTimeout())
                }
            }
        }, {
            key: "setSwipeLockMode",
            value: function(e, t) {
                this.isHorizontalLock || this.isVerticalLock || (Math.abs(e) - Math.abs(t) > -1 ? this.isHorizontalLock = !0 : this.isVerticalLock = !0)
            }
        }, {
            key: "checkIfTouchTargetIgnored",
            value: function(e) {
                return "xplayer__video" !== e.id && !E.some(function(t) {
                    return u.A.hasClass(e, t)
                })
            }
        }, {
            key: "checkIfTouchTargetNoUserAction",
            value: function(e) {
                return "xplayer__video" === e.id || [v, "xplayer-menu-mobile-bottom", "xplayer-menu-mobile-top", "thumbs-background"].some(function(t) {
                    return u.A.hasClass(e, t)
                })
            }
        }, {
            key: "checkIfTouchTargetUserAction",
            value: function(e) {
                return !["xplayer-start-button"].some(function(t) {
                    return u.A.hasClass(e, t)
                })
            }
        }, {
            key: "startSpeedBoostTimer",
            value: function() {
                var e = this;
                !A.A.get("ads_playing") && A.A.get("playing") && (this.clearSpeedBoostTimer(),
                this.speedBoostTimer = setTimeout(function() {
                    e.activateSpeedBoost()
                }, 400))
            }
        }, {
            key: "clearSpeedBoostTimer",
            value: function() {
                this.speedBoostTimer && (clearTimeout(this.speedBoostTimer),
                this.speedBoostTimer = null)
            }
        }, {
            key: "cancelSpeedBoost",
            value: function() {
                this.clearSpeedBoostTimer(),
                this.isSpeedBoosted && this.deactivateSpeedBoost()
            }
        }, {
            key: "activateSpeedBoost",
            value: function() {
                var e = this.core.videoElement;
                clearTimeout(this.doubleTapTimer),
                this.doubleTapTimer = null,
                a.A.emit(l.A.PAUSE_ACTION_BLOCK),
                this.savedPlaybackRate = e.playbackRate,
                e.playbackRate = 2,
                this.isSpeedBoosted = !0,
                this.speedBoostIndicator.show(),
                a.A.emit(l.A.PLAYER_ON_SPEED_BOOST_START)
            }
        }, {
            key: "deactivateSpeedBoost",
            value: function() {
                this.core.videoElement.playbackRate = this.savedPlaybackRate,
                this.isSpeedBoosted = !1,
                this.speedBoostIndicator.hide(),
                a.A.emit(l.A.PLAYER_ON_SPEED_BOOST_END),
                a.A.emit(l.A.PAUSE_ACTION_UNBLOCK)
            }
        }])
    },
    95871: function(e, t, i) {
        "use strict";
        i.d(t, {
            A: function() {
                return eg
            }
        });
        var n = i(84422)
          , s = i(15904)
          , r = i(86096);
        i(60383);
        var o = i(11570)
          , a = i(1781)
          , l = i(10809)
          , c = i(25689)
          , h = i(7163)
          , u = i(37651)
          , d = i(54098)
          , A = "xh-helper-hidden"
          , p = (0,
        s.A)(function e(t) {
            var i = arguments.length > 1 && void 0 !== arguments[1] && arguments[1]
              , s = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
            (0,
            n.A)(this, e),
            (0,
            r.A)(this, "core", void 0),
            (0,
            r.A)(this, "timeupdateCount", void 0),
            (0,
            r.A)(this, "timeupdateRequested", void 0),
            (0,
            r.A)(this, "shown", void 0),
            (0,
            r.A)(this, "isLoaderBlocked", void 0),
            (0,
            r.A)(this, "loaderElement", void 0),
            (0,
            r.A)(this, "isMoments", void 0),
            (0,
            r.A)(this, "isMobileV2", void 0),
            this.core = t,
            this.shown = !1,
            this.isMobileV2 = i,
            this.timeupdateRequested = null,
            this.timeupdateCount = 0,
            this.isLoaderBlocked = !0,
            this.isMoments = s,
            this.init()
        }, [{
            key: "init",
            value: function() {
                this.render(),
                this.attachEvents()
            }
        }, {
            key: "render",
            value: function() {
                this.loaderElement = document.createElement("span"),
                this.loaderElement.className = this.isMoments ? "xplayer-loader-moments" : "xplayer-loader",
                this.loaderElement.innerHTML = '<div class="xplayer-circle-loader"></div>',
                h.A.addClass(this.loaderElement, A),
                this.core.element.appendChild(this.loaderElement)
            }
        }, {
            key: "attachEvents",
            value: function() {
                var e = this;
                u.A.on(l.A.PLAYER_ON_SEEKING, this.showLoader, this),
                u.A.on(l.A.PLAYER_ON_WAITING, this.showLoader, this),
                u.A.on(l.A.PLAYER_ON_LOAD_START, this.showLoader, this),
                u.A.on(l.A.SHOW_LOADER, this.showLoader, this),
                u.A.on(l.A.PLAYER_PLAY, this.unblockLoader, this),
                u.A.on(l.A.PLAYER_ON_PLAYING, this.hideLoader, this),
                u.A.on(l.A.PLAYER_ON_SEEKED, this.hideLoader, this),
                u.A.on(l.A.PLAYER_ON_CAN_PLAY, this.hideLoader, this),
                u.A.on(l.A.PLAYER_ON_ERROR, this.hideLoader, this),
                u.A.on(l.A.PLAYER_ON_PROGRESS_BAR_MOVE, this.blockLoader, this),
                u.A.on(l.A.REMOTE_PLAYER_LOADING_START, function() {
                    e.toggleShown(!0)
                }, this),
                u.A.on(l.A.REMOTE_PLAYER_LOADING_END, function() {
                    e.toggleShown(!1)
                }, this)
            }
        }, {
            key: "blockLoader",
            value: function() {
                this.isMobileV2 || (this.isLoaderBlocked = !0)
            }
        }, {
            key: "unblockLoader",
            value: function() {
                d.A.get("chromecast") || (this.isLoaderBlocked = !1)
            }
        }, {
            key: "showLoader",
            value: function() {
                this.shown || this.core.preload || this.isLoaderBlocked || d.A.get("chromecast") || (this.shown = !0,
                this.toggleShown(!0))
            }
        }, {
            key: "hideLoader",
            value: function() {
                var e = this;
                if (this.core.capabilities.safari && !this.timeupdateRequested) {
                    this.timeupdateRequested = u.A.on(l.A.PLAYER_ON_TIMEUPDATE, function() {
                        if (e.timeupdateCount < 2)
                            return void e.timeupdateCount++;
                        u.A.off(l.A.PLAYER_ON_TIMEUPDATE, e.timeupdateRequested),
                        e.toggleShown(!1),
                        e.timeupdateRequested = null
                    });
                    return
                }
                this.timeupdateRequested || this.toggleShown(!1)
            }
        }, {
            key: "toggleShown",
            value: function(e) {
                this.shown = e;
                var t = this.isMoments ? "xplayer-loading-moments" : "xplayer-loading";
                this.shown ? (h.A.addClass(this.core.element, t),
                h.A.removeClass(this.loaderElement, A)) : (h.A.removeClass(this.core.element, t),
                h.A.addClass(this.loaderElement, A))
            }
        }])
          , m = i(91414)
          , v = "xplayer-start-button"
          , E = "xplayer-start-button-moments"
          , f = (0,
        s.A)(function e(t, i) {
            var s = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
            (0,
            n.A)(this, e),
            (0,
            r.A)(this, "core", void 0),
            (0,
            r.A)(this, "options", void 0),
            (0,
            r.A)(this, "hidden", void 0),
            (0,
            r.A)(this, "element", void 0),
            (0,
            r.A)(this, "elementImage", void 0),
            (0,
            r.A)(this, "isDownOnElement", void 0),
            (0,
            r.A)(this, "isMoments", void 0),
            this.core = t,
            this.options = i.startButton || {},
            this.hidden = !1,
            this.isDownOnElement = !1,
            this.isMoments = s,
            this.init()
        }, [{
            key: "init",
            value: function() {
                this.render(),
                this.attachEvents()
            }
        }, {
            key: "render",
            value: function() {
                this.element = document.createElement("div"),
                this.element.className = this.isMoments ? E : v,
                this.elementImage = document.createElement("div"),
                this.elementImage.className = "".concat(this.isMoments ? E : v, "__image"),
                this.element.appendChild(this.elementImage),
                this.core.element.appendChild(this.element)
            }
        }, {
            key: "attachEvents",
            value: function() {
                this.core.capabilities.mobile ? (this.element.addEventListener("touchstart", this.onDownEvent.bind(this)),
                this.element.addEventListener("touchend", this.onUpEvent.bind(this))) : (this.element.addEventListener("mousedown", this.onDownEvent.bind(this)),
                this.element.addEventListener("mouseup", this.onUpEvent.bind(this))),
                u.A.on(l.A.PLAYER_ON_PLAYING, this.togglePlayButton, this),
                u.A.on(l.A.PLAYER_ON_PAUSE, this.togglePlayButton, this),
                u.A.on(l.A.REMOTE_PLAYER_STATE_CHANGED, this.togglePlayButton, this),
                u.A.once(l.A.PLAYER_ON_PLAY, this.hideElement, this)
            }
        }, {
            key: "isButtonVisible",
            value: function() {
                return !h.A.hasClass(this.core.element, "no-user-action")
            }
        }, {
            key: "onDownEvent",
            value: function(e) {
                if (this.isButtonVisible()) {
                    if (e.preventDefault(),
                    e.target === this.element || e.target === this.elementImage) {
                        this.isDownOnElement = !0;
                        return
                    }
                    this.isDownOnElement = !1
                }
            }
        }, {
            key: "onUpEvent",
            value: function(e) {
                if (this.isButtonVisible()) {
                    if (e.preventDefault(),
                    "touchend" === e.type) {
                        var t, i = null, n = null, s = null == e || null == (t = e.changedTouches) ? void 0 : t[0];
                        s && (i = s.clientX,
                        n = s.clientY);
                        var r = document.elementFromPoint(i, n) === this.element || document.elementFromPoint(i, n) === this.elementImage;
                        s && r && this.isDownOnElement && this.onElementTouch()
                    } else
                        (e.target === this.element || e.target === this.elementImage) && this.isDownOnElement && this.onElementTouch();
                    this.isDownOnElement = !1
                }
            }
        }, {
            key: "onElementTouch",
            value: function() {
                d.A.get("pause_action_blocked") || (d.A.get("playing") ? u.A.emit(l.A.PLAYER_PAUSE) : (u.A.emit(l.A.PLAYER_PLAY),
                u.A.emit(l.A.PLAY_CENTER_BUTTON_CLICK, "play")),
                u.A.emit(l.A.USER_ACTION, 3e3))
            }
        }, {
            key: "togglePlayButton",
            value: function() {
                d.A.get("playing") ? h.A.removeClass(this.element, "pause") : h.A.addClass(this.element, "pause")
            }
        }, {
            key: "hideElement",
            value: function() {
                h.A.addClass(this.element, "video-started")
            }
        }])
          , _ = i(41363)
          , y = i(48029)
          , g = i(83312)
          , S = i(57109)
          , b = i(99785)
          , T = i(9265)
          , k = i(98538)
          , L = i(87513)
          , O = i(74681)
          , P = i(13036)
          , C = i(77920)
          , R = i(21416)
          , w = i(36348)
          , N = i(25891)
          , D = i(50228)
          , I = i(77760)
          , U = i(62420)
          , x = i(56578)
          , Y = i(13024);
        let M = "xh-helper-hidden";
        var B = class {
            init() {
                window.WebKitPlaybackTargetAvailabilityEvent && !this.options.disable && (this.render(),
                this.attachEvents())
            }
            onAirplayAvailabilityChanged(e) {
                this.available = "available" === e.availability,
                this.available ? this.showElement() : this.hideElement()
            }
            render() {
                this.element = document.createElement("div"),
                this.element.className = `airplay-button ${M}`
            }
            attachEvents() {
                this.element.addEventListener("click", this.onElementClick.bind(this)),
                this.core.videoElement.addEventListener("webkitplaybacktargetavailabilitychanged", this.onAirplayAvailabilityChanged.bind(this))
            }
            onElementClick() {
                if (!d.A.get("sourceLoaded")) {
                    u.A.once(l.A.PLAYER_ON_LOADED_DATA, this.onElementClick, this),
                    u.A.emit(l.A.PLAYER_PLAY);
                    return
                }
                this.core.videoElement.webkitShowPlaybackTargetPicker()
            }
            hideElement() {
                h.A.addClass(this.element, M)
            }
            showElement() {
                h.A.removeClass(this.element, M)
            }
            constructor(e, t) {
                return this.core = e,
                this.options = t.airplay || {},
                this.available = null,
                this.init(),
                this.element
            }
        }
          , F = i(78772)
          , V = (0,
        s.A)(function e(t, i) {
            var s;
            (0,
            n.A)(this, e),
            (0,
            r.A)(this, "options", void 0),
            (0,
            r.A)(this, "core", void 0),
            (0,
            r.A)(this, "element", void 0),
            this.core = t,
            this.options = (null == i ? void 0 : i.sponsor) || {},
            null != (s = this.options) && s.message && (this.render(),
            this.attachEvents())
        }, [{
            key: "render",
            value: function() {
                var e;
                this.element = (0,
                F.SL)((e = this.options,
                '\n    <div class="'.concat(e.linkClass, '-xp">\n        <a \n            class="').concat(e.linkClass, '-xp__info" \n            href="').concat(e.linkUrl, '"\n            target="_blank" \n            rel="nofollow noopener"\n            data-role="player-sponsor-link"\n        >\n            <div class="').concat(e.linkClass, '-xp__label">').concat(e.label, '</div>\n            <div class="').concat(e.linkClass, '-xp__message">').concat(e.message, "</div>\n        </a>\n    </div>        \n"))),
                u.A.emit(l.A.PLAYER_LINK_SPONSORED_SHOWN)
            }
        }, {
            key: "attachEvents",
            value: function() {
                this.element.addEventListener("click", function() {
                    u.A.emit(l.A.PLAYER_LINK_SPONSORED_CLICK)
                })
            }
        }])
          , H = i(4572)
          , W = i(97590)
          , G = (0,
        s.A)(function e(t) {
            var i;
            (0,
            n.A)(this, e),
            (0,
            r.A)(this, "text", void 0),
            (0,
            r.A)(this, "element", void 0),
            this.text = (null == t || null == (i = t.menuTopInfo) ? void 0 : i.infoText) || (0,
            W.T)("xplayerMenuMobileTopInfo"),
            this.init()
        }, [{
            key: "init",
            value: function() {
                var e;
                this.element = document.createElement("div"),
                this.element.className = "xp-menu-top-info",
                this.element.innerHTML = (e = this.text,
                '\n        <div class="xp-menu-top-info__icon"></div>\n        <div class="xp-menu-top-info__text">'.concat(e, "</div>\n"))
            }
        }])
          , q = "xh-helper-hidden"
          , $ = (0,
        s.A)(function e(t) {
            (0,
            n.A)(this, e),
            (0,
            r.A)(this, "element", void 0),
            (0,
            r.A)(this, "core", void 0),
            this.core = t,
            this.init(),
            this.attachEvents()
        }, [{
            key: "init",
            value: function() {
                this.element = document.createElement("div"),
                this.element.className = "xp-close-fullscreen-button ".concat(q),
                this.core.element.appendChild(this.element)
            }
        }, {
            key: "attachEvents",
            value: function() {
                var e = this;
                u.A.on(l.A.PLAYER_ON_FULLSCREEN_CHANGE, function() {
                    if (d.A.get("fullscreen"))
                        return void h.A.removeClass(e.element, q);
                    h.A.addClass(e.element, q)
                }),
                this.element.addEventListener("click", function() {
                    u.A.emit(l.A.PLAYER_TOGGLE_FULLSCREEN)
                })
            }
        }])
          , K = i(72902)
          , j = i(99300)
          , Q = i(53900)
          , z = i(57509)
          , X = i(50611)
          , J = i(45546)
          , Z = i(4251)
          , ee = i(23317)
          , et = i(42024)
          , ei = i(40311)
          , en = i(91038)
          , es = i(83899)
          , er = i(65681);
        function eo() {
            try {
                var e = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {}))
            } catch (e) {}
            return (eo = function() {
                return !!e
            }
            )()
        }
        function ea() {
            try {
                var e = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {}))
            } catch (e) {}
            return (ea = function() {
                return !!e
            }
            )()
        }
        function el(e, t, i, n) {
            var s = (0,
            et.A)((0,
            ee.A)(1 & n ? e.prototype : e), t, i);
            return 2 & n && "function" == typeof s ? function(e) {
                return s.apply(i, e)
            }
            : s
        }
        var ec = function(e) {
            function t(e, i) {
                var s, r, o = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
                return (0,
                n.A)(this, t),
                s = t,
                r = [e, i, o],
                s = (0,
                ee.A)(s),
                (0,
                Z.A)(this, ea() ? Reflect.construct(s, r || [], (0,
                ee.A)(this).constructor) : s.apply(this, r))
            }
            return (0,
            ei.A)(t, e),
            (0,
            s.A)(t, [{
                key: "showSubtitles",
                value: function() {
                    el(t, "showSubtitles", this, 3)([]),
                    this.hideDefaultSubtitles()
                }
            }, {
                key: "attachEvents",
                value: function() {
                    var e = this;
                    el(t, "attachEvents", this, 3)([]),
                    u.A.on(l.A.SUBTITLES_TRACK_LOADED, this.hideDefaultSubtitles),
                    this.isNativeFullscreenControlsEnabled && (d.A.get("ads") ? u.A.once(l.A.ADS_ENDED, function() {
                        u.A.once(l.A.PLAYER_PLAY, e.loadSubtitles.bind(e))
                    }) : u.A.once(l.A.PLAYER_PLAY, this.loadSubtitles.bind(this)),
                    u.A.on(l.A.PLAYER_ON_FULLSCREEN_CHANGE, this.changeSubtitlesType.bind(this)))
                }
            }, {
                key: "hideSubtitles",
                value: function() {
                    this.isHidden = !0,
                    this.hide(),
                    u.A.emit(l.A.SUBTITLES_HIDE)
                }
            }, {
                key: "changeSubtitlesType",
                value: function() {
                    if (d.A.get("fullscreen")) {
                        this.hideSubtitles(),
                        this.showDefaultSubtitles();
                        return
                    }
                    this.showSubtitles()
                }
            }])
        }(function(e) {
            function t(e, i) {
                var s, r, o = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
                return (0,
                n.A)(this, t),
                s = t,
                r = [e, i, o],
                s = (0,
                ee.A)(s),
                (0,
                Z.A)(this, eo() ? Reflect.construct(s, r || [], (0,
                ee.A)(this).constructor) : s.apply(this, r))
            }
            return (0,
            ei.A)(t, e),
            (0,
            s.A)(t, [{
                key: "init",
                value: function() {
                    this.appendCustomTrackElement(),
                    this.attachEvents(),
                    u.A.emit(l.A.SUBTITLES_READY, this.getInitialLangState()),
                    d.A.get("playing") ? this.initSubtitlesLoading() : u.A.once(l.A.PLAYER_PLAY, this.initSubtitlesLoading.bind(this))
                }
            }, {
                key: "initSubtitlesLoading",
                value: function() {
                    var e = this.getInitialLangState();
                    "off" !== e.lang && this.loadSubtitlesTrack(e)
                }
            }, {
                key: "getOptionsTrackByLang",
                value: function(e) {
                    return this.options.tracks.find(function(t) {
                        return t.lang === e
                    })
                }
            }, {
                key: "loadSubtitlesTrack",
                value: function(e) {
                    var t = this
                      , i = this.appendSubtitlesTrack(e)
                      , n = null;
                    i.then(function(e) {
                        t.markTrackAsLoaded(t.getOptionsTrackByLang(e.srclang)),
                        n = e,
                        t.addSubtitlesIntroOffset(),
                        u.A.emit(l.A.STATISTICS_UI, es.A.subtitles_load_success),
                        u.A.emit(l.A.SUBTITLES_TRACK_LOADED)
                    }).catch(function() {
                        n && (t.clearFailedTrack(t.getOptionsTrackByLang(n.srclang)),
                        t.currentTrack || t.setSubtitlesTrack(t.getDefaultSubtitlesTrack()),
                        u.A.emit(l.A.SUBTITLES_TRACK_LOAD_FAILED, e),
                        u.A.emit(l.A.STATISTICS_UI, es.A.subtitles_load_failed))
                    })
                }
            }, {
                key: "markTrackAsLoaded",
                value: function(e) {
                    this.tracks.find(function(t) {
                        return e.lang === t.lang
                    }).isLoaded = !0
                }
            }, {
                key: "clearFailedTrack",
                value: function(e) {
                    var t;
                    this.options.tracks = this.tracks.filter(function(t) {
                        return t.lang !== e.lang
                    }),
                    this.tracks = this.options.tracks,
                    null == (t = document.querySelector("video track[srclang='".concat(e.lang, "']"))) || t.remove()
                }
            }, {
                key: "appendSubtitlesTrack",
                value: function(e) {
                    var t = this.core.capabilities.mobile ? "subtitles" : "metadata"
                      , i = (0,
                    F.SL)((0,
                    er.I)(e, !0, t))
                      , n = this.loadTrackPromise(i);
                    return this.videoElement.appendChild(i),
                    n
                }
            }, {
                key: "loadTrackPromise",
                value: function(e) {
                    return new Promise(function(t, i) {
                        e.addEventListener("load", function(e) {
                            return t(e.target)
                        }),
                        e.addEventListener("error", function(e) {
                            return i(e.target)
                        })
                    }
                    )
                }
            }, {
                key: "setSubtitlesTrack",
                value: function(e) {
                    var t = this
                      , i = null == e ? void 0 : e.lang;
                    if (i && "off" !== i) {
                        var n = this.getOptionsTrackByLang(i)
                          , s = null
                          , r = null;
                        if (!(null != n && n.isLoaded) && !(null != n && n.isLoading)) {
                            s = u.A.on(l.A.SUBTITLES_TRACK_LOADED, function() {
                                i === n.lang && (t.setSubtitlesTrack(e),
                                n.isLoading = !1,
                                u.A.off(l.A.SUBTITLES_TRACK_LOADED, s),
                                u.A.off(l.A.SUBTITLES_TRACK_LOAD_FAILED, r))
                            }),
                            r = u.A.on(l.A.SUBTITLES_TRACK_LOAD_FAILED, function() {
                                i === n.lang && (n.isLoading = !1,
                                u.A.off(l.A.SUBTITLES_TRACK_LOADED, s),
                                u.A.off(l.A.SUBTITLES_TRACK_LOAD_FAILED, r))
                            }),
                            n.isLoading = !0,
                            this.loadSubtitlesTrack(n);
                            return
                        }
                    }
                    this.currentLang ? (this.showSubtitlesTrack(e),
                    u.A.emit(l.A.SUBTITLES_SHOW, e)) : this.showDefaultTrack()
                }
            }, {
                key: "showDefaultTrack",
                value: function() {
                    var e = this.getDefaultSubtitlesTrack();
                    e && ("off" === e.lang || e.isLoaded ? this.showSubtitlesTrack(e) : this.setSubtitlesTrack(e),
                    u.A.emit(l.A.SUBTITLES_SET_DEFAULT_LANG, e))
                }
            }, {
                key: "showSubtitles",
                value: function() {
                    this.customTrackElement.style.display = "flex",
                    this.isHidden = !1,
                    this.currentTrack ? u.A.emit(l.A.SUBTITLES_SHOW, this.getTrackByLang(this.currentTrack.language)) : this.showDefaultTrack()
                }
            }])
        }(en.A))
          , eh = i(89225)
          , eu = i(59301)
          , ed = i(49587)
          , eA = i(47647)
          , ep = i(45055)
          , em = "xplayer-native-fullscreen-controls"
          , ev = (0,
        s.A)(function e(t) {
            var i = this;
            (0,
            n.A)(this, e),
            (0,
            r.A)(this, "core", void 0),
            (0,
            r.A)(this, "originalRequestMethods", void 0),
            (0,
            r.A)(this, "update", function() {
                if (i.shouldUseNativeControls())
                    return void i.enableNativeControls();
                i.disableNativeControls()
            }),
            this.core = t,
            this.originalRequestMethods = {},
            this.proxyFullscreenRequestsToVideo(),
            this.attachEvents(),
            this.update()
        }, [{
            key: "attachEvents",
            value: function() {
                u.A.on(l.A.PLAYER_ON_FULLSCREEN_CHANGE, this.update),
                u.A.on(l.A.ADS_STARTED, this.update),
                u.A.on(l.A.ADS_ENDED, this.update)
            }
        }, {
            key: "shouldUseNativeControls",
            value: function() {
                return !!this.core.states.get("fullscreen") && !this.core.states.get("ads_playing")
            }
        }, {
            key: "disableNativeControls",
            value: function() {
                this.core.videoElement.removeAttribute("controls"),
                this.core.element.classList.remove(em)
            }
        }, {
            key: "enableNativeControls",
            value: function() {
                this.core.videoElement.setAttribute("controls", "true"),
                this.core.element.classList.add(em)
            }
        }, {
            key: "proxyFullscreenRequestsToVideo",
            value: function() {
                var e = this;
                ["requestFullscreen", "msRequestFullscreen", "mozRequestFullScreen", "webkitRequestFullscreen", "webkitRequestFullScreen"].forEach(function(t) {
                    var i, n = null == (i = e.core.element) ? void 0 : i[t];
                    "function" == typeof n && (e.originalRequestMethods[t] = n.bind(e.core.element),
                    e.core.element[t] = e.requestFullscreenOnVideo.bind(e, t))
                })
            }
        }, {
            key: "requestFullscreenOnVideo",
            value: function(e) {
                var t, i, n, s = null == (t = this.core.videoElement) ? void 0 : t[e];
                return "function" == typeof s ? (this.core.states.get("ads_playing") || this.enableNativeControls(),
                s.call(this.core.videoElement)) : null == (i = (n = this.originalRequestMethods)[e]) ? void 0 : i.call(n)
            }
        }]);
        function eE(e, t) {
            var i = Object.keys(e);
            if (Object.getOwnPropertySymbols) {
                var n = Object.getOwnPropertySymbols(e);
                t && (n = n.filter(function(t) {
                    return Object.getOwnPropertyDescriptor(e, t).enumerable
                })),
                i.push.apply(i, n)
            }
            return i
        }
        function ef(e) {
            for (var t = 1; t < arguments.length; t++) {
                var i = null != arguments[t] ? arguments[t] : {};
                t % 2 ? eE(Object(i), !0).forEach(function(t) {
                    (0,
                    r.A)(e, t, i[t])
                }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(i)) : eE(Object(i)).forEach(function(t) {
                    Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(i, t))
                })
            }
            return e
        }
        var e_ = "xplayer-old-start-screen"
          , ey = (0,
        s.A)(function e(t, i, s) {
            (0,
            n.A)(this, e),
            (0,
            r.A)(this, "core", void 0),
            (0,
            r.A)(this, "events", void 0),
            (0,
            r.A)(this, "pluginsOptions", void 0),
            (0,
            r.A)(this, "loader", void 0),
            (0,
            r.A)(this, "background", void 0),
            (0,
            r.A)(this, "banner", void 0),
            (0,
            r.A)(this, "aftershot", void 0),
            (0,
            r.A)(this, "statusMobile", void 0),
            (0,
            r.A)(this, "bannerBottom", void 0),
            (0,
            r.A)(this, "settingsMenu", void 0),
            (0,
            r.A)(this, "poster", void 0),
            (0,
            r.A)(this, "startButton", void 0),
            (0,
            r.A)(this, "menuMobileTop", void 0),
            (0,
            r.A)(this, "touchControl", void 0),
            (0,
            r.A)(this, "orientation", void 0),
            (0,
            r.A)(this, "userSeekController", void 0),
            (0,
            r.A)(this, "airplayElement", void 0),
            (0,
            r.A)(this, "chromecast", void 0),
            (0,
            r.A)(this, "spriteLoader", void 0),
            (0,
            r.A)(this, "progressBar", void 0),
            (0,
            r.A)(this, "backgroundSpriteViewer", void 0),
            (0,
            r.A)(this, "progressBarSpriteViewer", void 0),
            (0,
            r.A)(this, "viewers", void 0),
            (0,
            r.A)(this, "downloadButton", void 0),
            (0,
            r.A)(this, "muteControl", void 0),
            (0,
            r.A)(this, "muteControlAds", void 0),
            (0,
            r.A)(this, "qualityControl", void 0),
            (0,
            r.A)(this, "playbackRateControl", void 0),
            (0,
            r.A)(this, "playControl", void 0),
            (0,
            r.A)(this, "hoverLink", void 0),
            (0,
            r.A)(this, "fullscreenControl", void 0),
            (0,
            r.A)(this, "timingControl", void 0),
            (0,
            r.A)(this, "timingControlAds", void 0),
            (0,
            r.A)(this, "swapHandsControl", void 0),
            (0,
            r.A)(this, "menuMobileBottomUpper", void 0),
            (0,
            r.A)(this, "menuMobileBottom", void 0),
            (0,
            r.A)(this, "menuMobileMiddle", void 0),
            (0,
            r.A)(this, "menuMobileTopInfo", void 0),
            (0,
            r.A)(this, "durationInfo", void 0),
            (0,
            r.A)(this, "viewsInfo", void 0),
            (0,
            r.A)(this, "controlBar", void 0),
            (0,
            r.A)(this, "closeFullscreenButton", void 0),
            (0,
            r.A)(this, "chromecastButton", void 0),
            (0,
            r.A)(this, "sponsorInfo", void 0),
            (0,
            r.A)(this, "actionsGallery", void 0),
            (0,
            r.A)(this, "actionsGalleryControl", void 0),
            (0,
            r.A)(this, "dsaLabel", void 0),
            (0,
            r.A)(this, "subtitles", void 0),
            (0,
            r.A)(this, "subtitlesControl", void 0),
            (0,
            r.A)(this, "nextVideo", void 0),
            (0,
            r.A)(this, "handyLink", void 0),
            (0,
            r.A)(this, "oldStartScreenInfo", void 0),
            (0,
            r.A)(this, "nativeFullscreenControls", void 0),
            this.events = l.A,
            this.pluginsOptions = s;
            var o = this.prepareCoreOptions(i);
            this.core = new a.A(t,o,this.pluginsOptions),
            this.playerAvailable() && this.init()
        }, [{
            key: "prepareCoreOptions",
            value: function(e) {
                var t;
                return ef(ef({}, e), {}, {
                    mobileInline: !0,
                    mobileStubControls: !1,
                    unlimitedMaxHeight: !1,
                    preventFirstPlay: !(0,
                    o.xz)(null == (t = this.pluginsOptions.ads) ? void 0 : t.vastUrls)
                })
            }
        }, {
            key: "init",
            value: function() {
                var e, t, i, n = this;
                this.loader = new p(this.core,!0),
                (0,
                W.L)(null != (e = null == (t = this.pluginsOptions) ? void 0 : t.translations) ? e : {}),
                this.core.capabilities.mobilePlayer2 = !0,
                this.core.element.classList.add("xplayer-mobile-v2"),
                null != (i = this.pluginsOptions) && i.isOldStartScreen && (this.core.element.classList.add(e_),
                this.core.once(l.A.PLAYER_ON_PLAY, function() {
                    if (n.core.states.get("ads"))
                        return void n.core.once(l.A.ADS_ENDED, n.disableOldStartScreen.bind(n));
                    n.disableOldStartScreen()
                })),
                this.core.emit(l.A.USER_ACTION_BLOCK),
                this.core.emit(l.A.PLAYER_ON_INIT),
                this.core.once(l.A.PLAYER_PLAY, function() {
                    n.core.emit(l.A.USER_ACTION_UNBLOCK)
                }),
                this.initPlugins()
            }
        }, {
            key: "playerAvailable",
            value: function() {
                return "none" !== this.core.type && ("plain" !== this.core.options.version || (this.pluginsOptions.poster.shouldRemovePoster = !0,
                this.loadPlainPlugins(),
                !1))
            }
        }, {
            key: "initPlugins",
            value: function() {
                this.loadPlainPlugins(),
                this.loadAds(),
                this.loadPlugins()
            }
        }, {
            key: "loadAds",
            value: function() {
                return this
            }
        }, {
            key: "loadSubtitles",
            value: function() {
                this.subtitlesControl = new eh.A(this.core,this.pluginsOptions),
                this.subtitles = new ec(this.core,this.pluginsOptions)
            }
        }, {
            key: "loadChromecast",
            value: function() {
                var e;
                this.core.capabilities.chrome && null != (e = this.pluginsOptions) && null != (e = e.chromecast) && e.sourceUrl && (this.chromecastButton = new Y.A,
                this.chromecast = new x.A({
                    player: this,
                    core: this.core
                },this.pluginsOptions.chromecast))
            }
        }, {
            key: "loadPlainPlugins",
            value: function() {
                this.poster = new P.A(this.core,this.pluginsOptions)
            }
        }, {
            key: "loadPlugins",
            value: function() {
                var e, t, i, n, s, r, o;
                this.poster || (this.poster = new P.A(this.core,this.pluginsOptions)),
                this.aftershot = new c.A(this.core,this.pluginsOptions),
                this.background = new m.A(this.core),
                this.startButton = new f(this.core,this.pluginsOptions),
                this.settingsMenu = new y.A(this.core,this.pluginsOptions),
                this.sponsorInfo = new V(this.core,this.pluginsOptions),
                this.statusMobile = new g.A(this.core,this.pluginsOptions),
                this.orientation = new S.A(this.core,{
                    enabled: !0,
                    hasAdsFullscreen: !1
                }),
                this.banner = new C.A(this.core,ef(ef({}, this.pluginsOptions), {
                    bannerPauseSpotClassNames: H.A
                })),
                this.muteControl = new b.A(this.core),
                this.timingControl = new L.A(this.core),
                this.fullscreenControl = new O.A(this.core,this.pluginsOptions),
                this.loadSeekPlugins(),
                this.loadDsa(),
                this.loadHover(),
                this.loadSubtitles(),
                this.loadChromecast(),
                this.qualityControl = new T.A(this.core),
                this.playbackRateControl = new k.A(this.core),
                this.airplayElement = new B(this.core,this.pluginsOptions),
                this.menuMobileTopInfo = new G(this.pluginsOptions),
                this.closeFullscreenButton = new $(this.core),
                this.menuMobileBottom = new _.A(this.core,"xplayer-menu-mobile-bottom",[this.timingControl.element, this.muteControl.element, this.fullscreenControl.element, this.qualityControl.element, null == (e = this.subtitlesControl) ? void 0 : e.element, null == (t = this.chromecastButton) ? void 0 : t.element, null == (i = this.actionsGalleryControl) ? void 0 : i.getElement(), null == (n = this.hoverLink) ? void 0 : n.element]),
                this.airplayElement instanceof Node && (null == (o = this.menuMobileBottom.element) || o.appendChild(this.airplayElement)),
                this.menuMobileMiddle = new _.A(this.core,"".concat("xplayer-menu-mobile-middle"),[]),
                this.loadTopMenu(),
                this.loadOldStartScreenInfo(),
                null != (s = this.pluginsOptions) && s.useNativeFullscreenControls && (this.nativeFullscreenControls = new ev(this.core)),
                (null == (r = this.pluginsOptions.relatedVideos) ? void 0 : r.length) > 0 && this.core.options.videoInfo && (this.createNextVideoControlButtons(),
                this.nextVideo = new eu.y(this.core,this.pluginsOptions))
            }
        }, {
            key: "createNextVideoControlButtons",
            value: function() {
                this.core.element.appendChild(new ed._(eA.r.Next).getElement()),
                this.core.element.appendChild(new ed._(eA.r.Previous).getElement())
            }
        }, {
            key: "loadTopMenu",
            value: function() {
                this.muteControl = new b.A(this.core),
                this.menuMobileTop = new _.A(this.core,"xplayer-menu-mobile-top",[this.sponsorInfo.element, this.menuMobileTopInfo.element, this.closeFullscreenButton.element, this.muteControl.element])
            }
        }, {
            key: "loadOldStartScreenInfo",
            value: function() {
                var e, t, i;
                null != (e = this.pluginsOptions) && e.isOldStartScreen && (this.durationInfo = new K.A,
                this.viewsInfo = new j.A(this.core,this.pluginsOptions),
                this.oldStartScreenInfo = document.createElement("div"),
                this.oldStartScreenInfo.className = "xplayer-old-start-screen-info",
                null != (t = this.viewsInfo) && t.element && this.oldStartScreenInfo.appendChild(this.viewsInfo.element),
                null != (i = this.durationInfo) && i.element && this.oldStartScreenInfo.appendChild(this.durationInfo.element),
                this.menuMobileBottom.element.insertBefore(this.oldStartScreenInfo, this.menuMobileBottom.element.firstChild))
            }
        }, {
            key: "disableOldStartScreen",
            value: function() {
                var e;
                null == (e = this.oldStartScreenInfo) || e.remove(),
                this.core.element.classList.remove(e_)
            }
        }, {
            key: "loadHover",
            value: function() {
                !this.pluginsOptions.sponsor && (this.pluginsOptions.handyHtml ? this.handyLink = new ep.t(this.core,this.pluginsOptions.handyHtml) : this.pluginsOptions.hover && (this.hoverLink = new R.A(this.core,this.pluginsOptions.hover)))
            }
        }, {
            key: "loadDsa",
            value: function() {
                this.core.options.hasDSA && (this.dsaLabel = new Q.H(this.core))
            }
        }, {
            key: "loadActions",
            value: function() {
                var e, t;
                if ((null == (e = this.pluginsOptions) || null == (e = e.actionsData) || null == (e = e.actions) ? void 0 : e.length) > 0 && !(null != (t = this.core.options.sfw) && t.moderationTimestamp)) {
                    var i = (0,
                    z.p)(this.pluginsOptions.actionsData);
                    this.actionsGallery = new X.q(this.core,i,this.spriteLoader),
                    this.actionsGalleryControl = new J.C
                }
            }
        }, {
            key: "loadSeekPlugins",
            value: function() {
                var e, t, i, n = ef({
                    duration: this.core.options.duration
                }, null == (e = this.pluginsOptions) ? void 0 : e.spriteLoader);
                this.spriteLoader = new I.r(n),
                null != (t = this.pluginsOptions) && null != (t = t.touchControl) && t.isBackgroundThumbsEnabled && (this.pluginsOptions.touchControl.isBackgroundThumbsEnabled = !this.spriteLoader.isOldTemplate()),
                this.touchControl = new w.y(this.core,this.pluginsOptions),
                this.progressBar = new N.q(this.core,this.pluginsOptions,null),
                null != (i = this.pluginsOptions.progressBar) && i.backgroundThumbsEnabled ? (this.backgroundSpriteViewer = new U.O(this.core),
                this.userSeekController = new D.i({
                    loader: this.spriteLoader,
                    spritePreviewViewers: {
                        backgroundSpriteViewer: this.backgroundSpriteViewer
                    },
                    showPreview: !0
                })) : this.userSeekController = new D.i,
                this.loadActions()
            }
        }]);
        window.XPlayer2 = ey;
        var eg = ey
    },
    78772: function(e, t, i) {
        "use strict";
        i.d(t, {
            SL: function() {
                return n
            },
            nF: function() {
                return s
            }
        });
        var n = function(e) {
            var t = document.createElement("div");
            return t.innerHTML = e.trim(),
            t.firstChild
        }
          , s = function(e, t) {
            var i = null;
            return function() {
                i || (e.apply(void 0, arguments),
                i = setTimeout(function() {
                    i = null
                }, t))
            }
        }
    },
    74353: function(e) {
        e.exports = function() {
            "use strict";
            var e = "millisecond"
              , t = "second"
              , i = "minute"
              , n = "hour"
              , s = "week"
              , r = "month"
              , o = "quarter"
              , a = "year"
              , l = "date"
              , c = "Invalid Date"
              , h = /^(\d{4})[-/]?(\d{1,2})?[-/]?(\d{0,2})[Tt\s]*(\d{1,2})?:?(\d{1,2})?:?(\d{1,2})?[.:]?(\d+)?$/
              , u = /\[([^\]]+)]|Y{1,4}|M{1,4}|D{1,2}|d{1,4}|H{1,2}|h{1,2}|a|A|m{1,2}|s{1,2}|Z{1,2}|SSS/g
              , d = function(e, t, i) {
                var n = String(e);
                return !n || n.length >= t ? e : "" + Array(t + 1 - n.length).join(i) + e
            }
              , A = "en"
              , p = {};
            p[A] = {
                name: "en",
                weekdays: "Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"),
                months: "January_February_March_April_May_June_July_August_September_October_November_December".split("_"),
                ordinal: function(e) {
                    var t = ["th", "st", "nd", "rd"]
                      , i = e % 100;
                    return "[" + e + (t[(i - 20) % 10] || t[i] || t[0]) + "]"
                }
            };
            var m = function(e) {
                return e instanceof _
            }
              , v = function e(t, i, n) {
                var s;
                if (!t)
                    return A;
                if ("string" == typeof t) {
                    var r = t.toLowerCase();
                    p[r] && (s = r),
                    i && (p[r] = i,
                    s = r);
                    var o = t.split("-");
                    if (!s && o.length > 1)
                        return e(o[0])
                } else {
                    var a = t.name;
                    p[a] = t,
                    s = a
                }
                return !n && s && (A = s),
                s || !n && A
            }
              , E = function(e, t) {
                if (m(e))
                    return e.clone();
                var i = "object" == typeof t ? t : {};
                return i.date = e,
                i.args = arguments,
                new _(i)
            }
              , f = {
                s: d,
                z: function(e) {
                    var t = -e.utcOffset()
                      , i = Math.abs(t);
                    return (t <= 0 ? "+" : "-") + d(Math.floor(i / 60), 2, "0") + ":" + d(i % 60, 2, "0")
                },
                m: function e(t, i) {
                    if (t.date() < i.date())
                        return -e(i, t);
                    var n = 12 * (i.year() - t.year()) + (i.month() - t.month())
                      , s = t.clone().add(n, r)
                      , o = i - s < 0
                      , a = t.clone().add(n + (o ? -1 : 1), r);
                    return +(-(n + (i - s) / (o ? s - a : a - s)) || 0)
                },
                a: function(e) {
                    return e < 0 ? Math.ceil(e) || 0 : Math.floor(e)
                },
                p: function(c) {
                    return ({
                        M: r,
                        y: a,
                        w: s,
                        d: "day",
                        D: l,
                        h: n,
                        m: i,
                        s: t,
                        ms: e,
                        Q: o
                    })[c] || String(c || "").toLowerCase().replace(/s$/, "")
                },
                u: function(e) {
                    return void 0 === e
                }
            };
            f.l = v,
            f.i = m,
            f.w = function(e, t) {
                return E(e, {
                    locale: t.$L,
                    utc: t.$u,
                    x: t.$x,
                    $offset: t.$offset
                })
            }
            ;
            var _ = function() {
                function d(e) {
                    this.$L = v(e.locale, null, !0),
                    this.parse(e)
                }
                var A = d.prototype;
                return A.parse = function(e) {
                    this.$d = function(e) {
                        var t = e.date
                          , i = e.utc;
                        if (null === t)
                            return new Date(NaN);
                        if (f.u(t))
                            return new Date;
                        if (t instanceof Date)
                            return new Date(t);
                        if ("string" == typeof t && !/Z$/i.test(t)) {
                            var n = t.match(h);
                            if (n) {
                                var s = n[2] - 1 || 0
                                  , r = (n[7] || "0").substring(0, 3);
                                return i ? new Date(Date.UTC(n[1], s, n[3] || 1, n[4] || 0, n[5] || 0, n[6] || 0, r)) : new Date(n[1],s,n[3] || 1,n[4] || 0,n[5] || 0,n[6] || 0,r)
                            }
                        }
                        return new Date(t)
                    }(e),
                    this.$x = e.x || {},
                    this.init()
                }
                ,
                A.init = function() {
                    var e = this.$d;
                    this.$y = e.getFullYear(),
                    this.$M = e.getMonth(),
                    this.$D = e.getDate(),
                    this.$W = e.getDay(),
                    this.$H = e.getHours(),
                    this.$m = e.getMinutes(),
                    this.$s = e.getSeconds(),
                    this.$ms = e.getMilliseconds()
                }
                ,
                A.$utils = function() {
                    return f
                }
                ,
                A.isValid = function() {
                    return this.$d.toString() !== c
                }
                ,
                A.isSame = function(e, t) {
                    var i = E(e);
                    return this.startOf(t) <= i && i <= this.endOf(t)
                }
                ,
                A.isAfter = function(e, t) {
                    return E(e) < this.startOf(t)
                }
                ,
                A.isBefore = function(e, t) {
                    return this.endOf(t) < E(e)
                }
                ,
                A.$g = function(e, t, i) {
                    return f.u(e) ? this[t] : this.set(i, e)
                }
                ,
                A.unix = function() {
                    return Math.floor(this.valueOf() / 1e3)
                }
                ,
                A.valueOf = function() {
                    return this.$d.getTime()
                }
                ,
                A.startOf = function(e, o) {
                    var c = this
                      , h = !!f.u(o) || o
                      , u = f.p(e)
                      , d = function(e, t) {
                        var i = f.w(c.$u ? Date.UTC(c.$y, t, e) : new Date(c.$y,t,e), c);
                        return h ? i : i.endOf("day")
                    }
                      , A = function(e, t) {
                        return f.w(c.toDate()[e].apply(c.toDate("s"), (h ? [0, 0, 0, 0] : [23, 59, 59, 999]).slice(t)), c)
                    }
                      , p = this.$W
                      , m = this.$M
                      , v = this.$D
                      , E = "set" + (this.$u ? "UTC" : "");
                    switch (u) {
                    case a:
                        return h ? d(1, 0) : d(31, 11);
                    case r:
                        return h ? d(1, m) : d(0, m + 1);
                    case s:
                        var _ = this.$locale().weekStart || 0
                          , y = (p < _ ? p + 7 : p) - _;
                        return d(h ? v - y : v + (6 - y), m);
                    case "day":
                    case l:
                        return A(E + "Hours", 0);
                    case n:
                        return A(E + "Minutes", 1);
                    case i:
                        return A(E + "Seconds", 2);
                    case t:
                        return A(E + "Milliseconds", 3);
                    default:
                        return this.clone()
                    }
                }
                ,
                A.endOf = function(e) {
                    return this.startOf(e, !1)
                }
                ,
                A.$set = function(s, o) {
                    var c, h = f.p(s), u = "set" + (this.$u ? "UTC" : ""), d = ((c = {}).day = u + "Date",
                    c[l] = u + "Date",
                    c[r] = u + "Month",
                    c[a] = u + "FullYear",
                    c[n] = u + "Hours",
                    c[i] = u + "Minutes",
                    c[t] = u + "Seconds",
                    c[e] = u + "Milliseconds",
                    c)[h], A = "day" === h ? this.$D + (o - this.$W) : o;
                    if (h === r || h === a) {
                        var p = this.clone().set(l, 1);
                        p.$d[d](A),
                        p.init(),
                        this.$d = p.set(l, Math.min(this.$D, p.daysInMonth())).$d
                    } else
                        d && this.$d[d](A);
                    return this.init(),
                    this
                }
                ,
                A.set = function(e, t) {
                    return this.clone().$set(e, t)
                }
                ,
                A.get = function(e) {
                    return this[f.p(e)]()
                }
                ,
                A.add = function(e, o) {
                    var l, c = this;
                    e = Number(e);
                    var h = f.p(o)
                      , u = function(t) {
                        var i = E(c);
                        return f.w(i.date(i.date() + Math.round(t * e)), c)
                    };
                    if (h === r)
                        return this.set(r, this.$M + e);
                    if (h === a)
                        return this.set(a, this.$y + e);
                    if ("day" === h)
                        return u(1);
                    if (h === s)
                        return u(7);
                    var d = ((l = {})[i] = 6e4,
                    l[n] = 36e5,
                    l[t] = 1e3,
                    l)[h] || 1
                      , A = this.$d.getTime() + e * d;
                    return f.w(A, this)
                }
                ,
                A.subtract = function(e, t) {
                    return this.add(-1 * e, t)
                }
                ,
                A.format = function(e) {
                    var t = this
                      , i = this.$locale();
                    if (!this.isValid())
                        return i.invalidDate || c;
                    var n = e || "YYYY-MM-DDTHH:mm:ssZ"
                      , s = f.z(this)
                      , r = this.$H
                      , o = this.$m
                      , a = this.$M
                      , l = i.weekdays
                      , h = i.months
                      , d = i.meridiem
                      , A = function(e, i, s, r) {
                        return e && (e[i] || e(t, n)) || s[i].slice(0, r)
                    }
                      , p = function(e) {
                        return f.s(r % 12 || 12, e, "0")
                    }
                      , m = d || function(e, t, i) {
                        var n = e < 12 ? "AM" : "PM";
                        return i ? n.toLowerCase() : n
                    }
                    ;
                    return n.replace(u, function(e, n) {
                        return n || function(e) {
                            switch (e) {
                            case "YY":
                                return String(t.$y).slice(-2);
                            case "YYYY":
                                return f.s(t.$y, 4, "0");
                            case "M":
                                return a + 1;
                            case "MM":
                                return f.s(a + 1, 2, "0");
                            case "MMM":
                                return A(i.monthsShort, a, h, 3);
                            case "MMMM":
                                return A(h, a);
                            case "D":
                                return t.$D;
                            case "DD":
                                return f.s(t.$D, 2, "0");
                            case "d":
                                return String(t.$W);
                            case "dd":
                                return A(i.weekdaysMin, t.$W, l, 2);
                            case "ddd":
                                return A(i.weekdaysShort, t.$W, l, 3);
                            case "dddd":
                                return l[t.$W];
                            case "H":
                                return String(r);
                            case "HH":
                                return f.s(r, 2, "0");
                            case "h":
                                return p(1);
                            case "hh":
                                return p(2);
                            case "a":
                                return m(r, o, !0);
                            case "A":
                                return m(r, o, !1);
                            case "m":
                                return String(o);
                            case "mm":
                                return f.s(o, 2, "0");
                            case "s":
                                return String(t.$s);
                            case "ss":
                                return f.s(t.$s, 2, "0");
                            case "SSS":
                                return f.s(t.$ms, 3, "0");
                            case "Z":
                                return s
                            }
                            return null
                        }(e) || s.replace(":", "")
                    })
                }
                ,
                A.utcOffset = function() {
                    return -(15 * Math.round(this.$d.getTimezoneOffset() / 15))
                }
                ,
                A.diff = function(e, l, c) {
                    var h, u = this, d = f.p(l), A = E(e), p = (A.utcOffset() - this.utcOffset()) * 6e4, m = this - A, v = function() {
                        return f.m(u, A)
                    };
                    switch (d) {
                    case a:
                        h = v() / 12;
                        break;
                    case r:
                        h = v();
                        break;
                    case o:
                        h = v() / 3;
                        break;
                    case s:
                        h = (m - p) / 6048e5;
                        break;
                    case "day":
                        h = (m - p) / 864e5;
                        break;
                    case n:
                        h = m / 36e5;
                        break;
                    case i:
                        h = m / 6e4;
                        break;
                    case t:
                        h = m / 1e3;
                        break;
                    default:
                        h = m
                    }
                    return c ? h : f.a(h)
                }
                ,
                A.daysInMonth = function() {
                    return this.endOf(r).$D
                }
                ,
                A.$locale = function() {
                    return p[this.$L]
                }
                ,
                A.locale = function(e, t) {
                    if (!e)
                        return this.$L;
                    var i = this.clone()
                      , n = v(e, t, !0);
                    return n && (i.$L = n),
                    i
                }
                ,
                A.clone = function() {
                    return f.w(this.$d, this)
                }
                ,
                A.toDate = function() {
                    return new Date(this.valueOf())
                }
                ,
                A.toJSON = function() {
                    return this.isValid() ? this.toISOString() : null
                }
                ,
                A.toISOString = function() {
                    return this.$d.toISOString()
                }
                ,
                A.toString = function() {
                    return this.$d.toUTCString()
                }
                ,
                d
            }()
              , y = _.prototype;
            return E.prototype = y,
            [["$ms", e], ["$s", t], ["$m", i], ["$H", n], ["$W", "day"], ["$M", r], ["$y", a], ["$D", l]].forEach(function(e) {
                y[e[1]] = function(t) {
                    return this.$g(t, e[0], e[1])
                }
            }),
            E.extend = function(e, t) {
                return e.$i || (e(t, _, E),
                e.$i = !0),
                E
            }
            ,
            E.locale = v,
            E.isDayjs = m,
            E.unix = function(e) {
                return E(1e3 * e)
            }
            ,
            E.en = p[A],
            E.Ls = p,
            E.p = {},
            E
        }()
    },
    90445: function(e) {
        e.exports = function() {
            "use strict";
            var e = {
                LTS: "h:mm:ss A",
                LT: "h:mm A",
                L: "MM/DD/YYYY",
                LL: "MMMM D, YYYY",
                LLL: "MMMM D, YYYY h:mm A",
                LLLL: "dddd, MMMM D, YYYY h:mm A"
            }
              , t = /(\[[^[]*\])|([-_:/.,()\s]+)|(A|a|YYYY|YY?|MM?M?M?|Do|DD?|hh?|HH?|mm?|ss?|S{1,3}|z|ZZ?)/g
              , i = /\d\d/
              , n = /\d\d?/
              , s = /\d*[^-_:/,()\s\d]+/
              , r = {}
              , o = function(e) {
                return (e *= 1) + (e > 68 ? 1900 : 2e3)
            }
              , a = function(e) {
                return function(t) {
                    this[e] = +t
                }
            }
              , l = [/[+-]\d\d:?(\d\d)?|Z/, function(e) {
                (this.zone || (this.zone = {})).offset = function(e) {
                    if (!e || "Z" === e)
                        return 0;
                    var t = e.match(/([+-]|\d\d)/g)
                      , i = 60 * t[1] + (+t[2] || 0);
                    return 0 === i ? 0 : "+" === t[0] ? -i : i
                }(e)
            }
            ]
              , c = function(e) {
                var t = r[e];
                return t && (t.indexOf ? t : t.s.concat(t.f))
            }
              , h = function(e, t) {
                var i, n = r.meridiem;
                if (n) {
                    for (var s = 1; s <= 24; s += 1)
                        if (e.indexOf(n(s, 0, t)) > -1) {
                            i = s > 12;
                            break
                        }
                } else
                    i = e === (t ? "pm" : "PM");
                return i
            }
              , u = {
                A: [s, function(e) {
                    this.afternoon = h(e, !1)
                }
                ],
                a: [s, function(e) {
                    this.afternoon = h(e, !0)
                }
                ],
                S: [/\d/, function(e) {
                    this.milliseconds = 100 * e
                }
                ],
                SS: [i, function(e) {
                    this.milliseconds = 10 * e
                }
                ],
                SSS: [/\d{3}/, function(e) {
                    this.milliseconds = +e
                }
                ],
                s: [n, a("seconds")],
                ss: [n, a("seconds")],
                m: [n, a("minutes")],
                mm: [n, a("minutes")],
                H: [n, a("hours")],
                h: [n, a("hours")],
                HH: [n, a("hours")],
                hh: [n, a("hours")],
                D: [n, a("day")],
                DD: [i, a("day")],
                Do: [s, function(e) {
                    var t = r.ordinal
                      , i = e.match(/\d+/);
                    if (this.day = i[0],
                    t)
                        for (var n = 1; n <= 31; n += 1)
                            t(n).replace(/\[|\]/g, "") === e && (this.day = n)
                }
                ],
                M: [n, a("month")],
                MM: [i, a("month")],
                MMM: [s, function(e) {
                    var t = c("months")
                      , i = (c("monthsShort") || t.map(function(e) {
                        return e.slice(0, 3)
                    })).indexOf(e) + 1;
                    if (i < 1)
                        throw Error();
                    this.month = i % 12 || i
                }
                ],
                MMMM: [s, function(e) {
                    var t = c("months").indexOf(e) + 1;
                    if (t < 1)
                        throw Error();
                    this.month = t % 12 || t
                }
                ],
                Y: [/[+-]?\d+/, a("year")],
                YY: [i, function(e) {
                    this.year = o(e)
                }
                ],
                YYYY: [/\d{4}/, a("year")],
                Z: l,
                ZZ: l
            };
            return function(i, n, s) {
                s.p.customParseFormat = !0,
                i && i.parseTwoDigitYear && (o = i.parseTwoDigitYear);
                var a = n.prototype
                  , l = a.parse;
                a.parse = function(i) {
                    var n = i.date
                      , o = i.utc
                      , a = i.args;
                    this.$u = o;
                    var c = a[1];
                    if ("string" == typeof c) {
                        var h = !0 === a[2]
                          , d = !0 === a[3]
                          , A = a[2];
                        d && (A = a[2]),
                        r = this.$locale(),
                        !h && A && (r = s.Ls[A]),
                        this.$d = function(i, n, s) {
                            try {
                                if (["x", "X"].indexOf(n) > -1)
                                    return new Date(("X" === n ? 1e3 : 1) * i);
                                var o = (function(i) {
                                    var n, s;
                                    n = i,
                                    s = r && r.formats;
                                    for (var o = (i = n.replace(/(\[[^\]]+])|(LTS?|l{1,4}|L{1,4})/g, function(t, i, n) {
                                        var r = n && n.toUpperCase();
                                        return i || s[n] || e[n] || s[r].replace(/(\[[^\]]+])|(MMMM|MM|DD|dddd)/g, function(e, t, i) {
                                            return t || i.slice(1)
                                        })
                                    })).match(t), a = o.length, l = 0; l < a; l += 1) {
                                        var c = o[l]
                                          , h = u[c]
                                          , d = h && h[0]
                                          , A = h && h[1];
                                        o[l] = A ? {
                                            regex: d,
                                            parser: A
                                        } : c.replace(/^\[|\]$/g, "")
                                    }
                                    return function(e) {
                                        for (var t = {}, i = 0, n = 0; i < a; i += 1) {
                                            var s = o[i];
                                            if ("string" == typeof s)
                                                n += s.length;
                                            else {
                                                var r = s.regex
                                                  , l = s.parser
                                                  , c = e.slice(n)
                                                  , h = r.exec(c)[0];
                                                l.call(t, h),
                                                e = e.replace(h, "")
                                            }
                                        }
                                        return function(e) {
                                            var t = e.afternoon;
                                            if (void 0 !== t) {
                                                var i = e.hours;
                                                t ? i < 12 && (e.hours += 12) : 12 === i && (e.hours = 0),
                                                delete e.afternoon
                                            }
                                        }(t),
                                        t
                                    }
                                }
                                )(n)(i)
                                  , a = o.year
                                  , l = o.month
                                  , c = o.day
                                  , h = o.hours
                                  , d = o.minutes
                                  , A = o.seconds
                                  , p = o.milliseconds
                                  , m = o.zone
                                  , v = new Date
                                  , E = c || (a || l ? 1 : v.getDate())
                                  , f = a || v.getFullYear()
                                  , _ = 0;
                                a && !l || (_ = l > 0 ? l - 1 : v.getMonth());
                                var y = h || 0
                                  , g = d || 0
                                  , S = A || 0
                                  , b = p || 0;
                                return m ? new Date(Date.UTC(f, _, E, y, g, S, b + 60 * m.offset * 1e3)) : s ? new Date(Date.UTC(f, _, E, y, g, S, b)) : new Date(f,_,E,y,g,S,b)
                            } catch (e) {
                                return new Date("")
                            }
                        }(n, c, o),
                        this.init(),
                        A && !0 !== A && (this.$L = this.locale(A).$L),
                        (h || d) && n != this.format(c) && (this.$d = new Date("")),
                        r = {}
                    } else if (c instanceof Array)
                        for (var p = c.length, m = 1; m <= p; m += 1) {
                            a[1] = c[m - 1];
                            var v = s.apply(this, a);
                            if (v.isValid()) {
                                this.$d = v.$d,
                                this.$L = v.$L,
                                this.init();
                                break
                            }
                            m === p && (this.$d = new Date(""))
                        }
                    else
                        l.call(this, i)
                }
            }
        }()
    },
    21840: function(e) {
        e.exports = function(e, t, i) {
            var n = t.prototype
              , s = function(e) {
                return e && (e.indexOf ? e : e.s)
            }
              , r = function(e, t, i, n, r) {
                var o = e.name ? e : e.$locale()
                  , a = s(o[t])
                  , l = s(o[i])
                  , c = a || l.map(function(e) {
                    return e.slice(0, n)
                });
                if (!r)
                    return c;
                var h = o.weekStart;
                return c.map(function(e, t) {
                    return c[(t + (h || 0)) % 7]
                })
            }
              , o = function() {
                return i.Ls[i.locale()]
            }
              , a = function(e, t) {
                return e.formats[t] || e.formats[t.toUpperCase()].replace(/(\[[^\]]+])|(MMMM|MM|DD|dddd)/g, function(e, t, i) {
                    return t || i.slice(1)
                })
            }
              , l = function() {
                var e = this;
                return {
                    months: function(t) {
                        return t ? t.format("MMMM") : r(e, "months")
                    },
                    monthsShort: function(t) {
                        return t ? t.format("MMM") : r(e, "monthsShort", "months", 3)
                    },
                    firstDayOfWeek: function() {
                        return e.$locale().weekStart || 0
                    },
                    weekdays: function(t) {
                        return t ? t.format("dddd") : r(e, "weekdays")
                    },
                    weekdaysMin: function(t) {
                        return t ? t.format("dd") : r(e, "weekdaysMin", "weekdays", 2)
                    },
                    weekdaysShort: function(t) {
                        return t ? t.format("ddd") : r(e, "weekdaysShort", "weekdays", 3)
                    },
                    longDateFormat: function(t) {
                        return a(e.$locale(), t)
                    },
                    meridiem: this.$locale().meridiem,
                    ordinal: this.$locale().ordinal
                }
            };
            n.localeData = function() {
                return l.bind(this)()
            }
            ,
            i.localeData = function() {
                var e = o();
                return {
                    firstDayOfWeek: function() {
                        return e.weekStart || 0
                    },
                    weekdays: function() {
                        return i.weekdays()
                    },
                    weekdaysShort: function() {
                        return i.weekdaysShort()
                    },
                    weekdaysMin: function() {
                        return i.weekdaysMin()
                    },
                    months: function() {
                        return i.months()
                    },
                    monthsShort: function() {
                        return i.monthsShort()
                    },
                    longDateFormat: function(t) {
                        return a(e, t)
                    },
                    meridiem: e.meridiem,
                    ordinal: e.ordinal
                }
            }
            ,
            i.months = function() {
                return r(o(), "months")
            }
            ,
            i.monthsShort = function() {
                return r(o(), "monthsShort", "months", 3)
            }
            ,
            i.weekdays = function(e) {
                return r(o(), "weekdays", null, null, e)
            }
            ,
            i.weekdaysShort = function(e) {
                return r(o(), "weekdaysShort", "weekdays", 3, e)
            }
            ,
            i.weekdaysMin = function(e) {
                return r(o(), "weekdaysMin", "weekdays", 2, e)
            }
        }
    },
    88569: function(e) {
        e.exports = function() {
            "use strict";
            var e = {
                year: 0,
                month: 1,
                day: 2,
                hour: 3,
                minute: 4,
                second: 5
            }
              , t = {};
            return function(i, n, s) {
                var r, o = function(e, i, n) {
                    void 0 === n && (n = {});
                    var s, r, o, a, l = new Date(e);
                    return (void 0 === (s = n) && (s = {}),
                    (a = t[o = i + "|" + (r = s.timeZoneName || "short")]) || (a = new Intl.DateTimeFormat("en-US",{
                        hour12: !1,
                        timeZone: i,
                        year: "numeric",
                        month: "2-digit",
                        day: "2-digit",
                        hour: "2-digit",
                        minute: "2-digit",
                        second: "2-digit",
                        timeZoneName: r
                    }),
                    t[o] = a),
                    a).formatToParts(l)
                }, a = function(t, i) {
                    for (var n = o(t, i), r = [], a = 0; a < n.length; a += 1) {
                        var l = n[a]
                          , c = l.type
                          , h = l.value
                          , u = e[c];
                        u >= 0 && (r[u] = parseInt(h, 10))
                    }
                    var d = r[3]
                      , A = r[0] + "-" + r[1] + "-" + r[2] + " " + (24 === d ? 0 : d) + ":" + r[4] + ":" + r[5] + ":000"
                      , p = +t;
                    return (s.utc(A).valueOf() - (p -= p % 1e3)) / 6e4
                }, l = n.prototype;
                l.tz = function(e, t) {
                    void 0 === e && (e = r);
                    var i = this.utcOffset()
                      , n = this.toDate()
                      , o = n.toLocaleString("en-US", {
                        timeZone: e
                    })
                      , a = Math.round((n - new Date(o)) / 1e3 / 60)
                      , l = s(o).$set("millisecond", this.$ms).utcOffset(-(15 * Math.round(n.getTimezoneOffset() / 15)) - a, !0);
                    if (t) {
                        var c = l.utcOffset();
                        l = l.add(i - c, "minute")
                    }
                    return l.$x.$timezone = e,
                    l
                }
                ,
                l.offsetName = function(e) {
                    var t = this.$x.$timezone || s.tz.guess()
                      , i = o(this.valueOf(), t, {
                        timeZoneName: e
                    }).find(function(e) {
                        return "timezonename" === e.type.toLowerCase()
                    });
                    return i && i.value
                }
                ;
                var c = l.startOf;
                l.startOf = function(e, t) {
                    if (!this.$x || !this.$x.$timezone)
                        return c.call(this, e, t);
                    var i = s(this.format("YYYY-MM-DD HH:mm:ss:SSS"));
                    return c.call(i, e, t).tz(this.$x.$timezone, !0)
                }
                ,
                s.tz = function(e, t, i) {
                    var n = i && t
                      , o = i || t || r
                      , l = a(+s(), o);
                    if ("string" != typeof e)
                        return s(e).tz(o);
                    var c = function(e, t, i) {
                        var n = e - 60 * t * 1e3
                          , s = a(n, i);
                        if (t === s)
                            return [n, t];
                        var r = a(n -= 60 * (s - t) * 1e3, i);
                        return s === r ? [n, s] : [e - 60 * Math.min(s, r) * 1e3, Math.max(s, r)]
                    }(s.utc(e, n).valueOf(), l, o)
                      , h = c[0]
                      , u = c[1]
                      , d = s(h).utcOffset(u);
                    return d.$x.$timezone = o,
                    d
                }
                ,
                s.tz.guess = function() {
                    return Intl.DateTimeFormat().resolvedOptions().timeZone
                }
                ,
                s.tz.setDefault = function(e) {
                    r = e
                }
            }
        }()
    },
    83826: function(e) {
        e.exports = function() {
            "use strict";
            var e = "minute"
              , t = /[+-]\d\d(?::?\d\d)?/g
              , i = /([+-]|\d\d)/g;
            return function(n, s, r) {
                var o = s.prototype;
                r.utc = function(e) {
                    var t = {
                        date: e,
                        utc: !0,
                        args: arguments
                    };
                    return new s(t)
                }
                ,
                o.utc = function(t) {
                    var i = r(this.toDate(), {
                        locale: this.$L,
                        utc: !0
                    });
                    return t ? i.add(this.utcOffset(), e) : i
                }
                ,
                o.local = function() {
                    return r(this.toDate(), {
                        locale: this.$L,
                        utc: !1
                    })
                }
                ;
                var a = o.parse;
                o.parse = function(e) {
                    e.utc && (this.$u = !0),
                    this.$utils().u(e.$offset) || (this.$offset = e.$offset),
                    a.call(this, e)
                }
                ;
                var l = o.init;
                o.init = function() {
                    if (this.$u) {
                        var e = this.$d;
                        this.$y = e.getUTCFullYear(),
                        this.$M = e.getUTCMonth(),
                        this.$D = e.getUTCDate(),
                        this.$W = e.getUTCDay(),
                        this.$H = e.getUTCHours(),
                        this.$m = e.getUTCMinutes(),
                        this.$s = e.getUTCSeconds(),
                        this.$ms = e.getUTCMilliseconds()
                    } else
                        l.call(this)
                }
                ;
                var c = o.utcOffset;
                o.utcOffset = function(n, s) {
                    var r = this.$utils().u;
                    if (r(n))
                        return this.$u ? 0 : r(this.$offset) ? c.call(this) : this.$offset;
                    if ("string" == typeof n && null === (n = function(e) {
                        void 0 === e && (e = "");
                        var n = e.match(t);
                        if (!n)
                            return null;
                        var s = ("" + n[0]).match(i) || ["-", 0, 0]
                          , r = s[0]
                          , o = 60 * s[1] + +s[2];
                        return 0 === o ? 0 : "+" === r ? o : -o
                    }(n)))
                        return this;
                    var o = 16 >= Math.abs(n) ? 60 * n : n
                      , a = this;
                    if (s)
                        return a.$offset = o,
                        a.$u = 0 === n,
                        a;
                    if (0 !== n) {
                        var l = this.$u ? this.toDate().getTimezoneOffset() : -1 * this.utcOffset();
                        (a = this.local().add(o + l, e)).$offset = o,
                        a.$x.$localOffset = l
                    } else
                        a = this.utc();
                    return a
                }
                ;
                var h = o.format;
                o.format = function(e) {
                    var t = e || (this.$u ? "YYYY-MM-DDTHH:mm:ss[Z]" : "");
                    return h.call(this, t)
                }
                ,
                o.valueOf = function() {
                    var e = this.$utils().u(this.$offset) ? 0 : this.$offset + (this.$x.$localOffset || this.$d.getTimezoneOffset());
                    return this.$d.valueOf() - 6e4 * e
                }
                ,
                o.isUTC = function() {
                    return !!this.$u
                }
                ,
                o.toISOString = function() {
                    return this.toDate().toISOString()
                }
                ,
                o.toString = function() {
                    return this.toDate().toUTCString()
                }
                ;
                var u = o.toDate;
                o.toDate = function(e) {
                    return "s" === e && this.$offset ? r(this.format("YYYY-MM-DD HH:mm:ss:SSS")).toDate() : u.call(this)
                }
                ;
                var d = o.diff;
                o.diff = function(e, t, i) {
                    if (e && this.$u === e.$u)
                        return d.call(this, e, t, i);
                    var n = this.local()
                      , s = r(e).local();
                    return d.call(n, s, t, i)
                }
            }
        }()
    },
    7452: function(e) {
        var t = function(e) {
            "use strict";
            var t, i = Object.prototype, n = i.hasOwnProperty, s = Object.defineProperty || function(e, t, i) {
                e[t] = i.value
            }
            , r = "function" == typeof Symbol ? Symbol : {}, o = r.iterator || "@@iterator", a = r.asyncIterator || "@@asyncIterator", l = r.toStringTag || "@@toStringTag";
            function c(e, t, i) {
                return Object.defineProperty(e, t, {
                    value: i,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }),
                e[t]
            }
            try {
                c({}, "")
            } catch (e) {
                c = function(e, t, i) {
                    return e[t] = i
                }
            }
            function h(e, i, n, r) {
                var o, a, l, c, h = Object.create((i && i.prototype instanceof v ? i : v).prototype);
                return s(h, "_invoke", {
                    value: (o = e,
                    a = n,
                    l = new O(r || []),
                    c = d,
                    function(e, i) {
                        if (c === A)
                            throw Error("Generator is already running");
                        if (c === p) {
                            if ("throw" === e)
                                throw i;
                            return C()
                        }
                        for (l.method = e,
                        l.arg = i; ; ) {
                            var n = l.delegate;
                            if (n) {
                                var s = function e(i, n) {
                                    var s = n.method
                                      , r = i.iterator[s];
                                    if (t === r)
                                        return (n.delegate = null,
                                        "throw" === s && i.iterator.return && (n.method = "return",
                                        n.arg = t,
                                        e(i, n),
                                        "throw" === n.method)) ? m : ("return" !== s && (n.method = "throw",
                                        n.arg = TypeError("The iterator does not provide a '" + s + "' method")),
                                        m);
                                    var o = u(r, i.iterator, n.arg);
                                    if ("throw" === o.type)
                                        return n.method = "throw",
                                        n.arg = o.arg,
                                        n.delegate = null,
                                        m;
                                    var a = o.arg;
                                    return a ? a.done ? (n[i.resultName] = a.value,
                                    n.next = i.nextLoc,
                                    "return" !== n.method && (n.method = "next",
                                    n.arg = t),
                                    n.delegate = null,
                                    m) : a : (n.method = "throw",
                                    n.arg = TypeError("iterator result is not an object"),
                                    n.delegate = null,
                                    m)
                                }(n, l);
                                if (s) {
                                    if (s === m)
                                        continue;
                                    return s
                                }
                            }
                            if ("next" === l.method)
                                l.sent = l._sent = l.arg;
                            else if ("throw" === l.method) {
                                if (c === d)
                                    throw c = p,
                                    l.arg;
                                l.dispatchException(l.arg)
                            } else
                                "return" === l.method && l.abrupt("return", l.arg);
                            c = A;
                            var r = u(o, a, l);
                            if ("normal" === r.type) {
                                if (c = l.done ? p : "suspendedYield",
                                r.arg === m)
                                    continue;
                                return {
                                    value: r.arg,
                                    done: l.done
                                }
                            }
                            "throw" === r.type && (c = p,
                            l.method = "throw",
                            l.arg = r.arg)
                        }
                    }
                    )
                }),
                h
            }
            function u(e, t, i) {
                try {
                    return {
                        type: "normal",
                        arg: e.call(t, i)
                    }
                } catch (e) {
                    return {
                        type: "throw",
                        arg: e
                    }
                }
            }
            e.wrap = h;
            var d = "suspendedStart"
              , A = "executing"
              , p = "completed"
              , m = {};
            function v() {}
            function E() {}
            function f() {}
            var _ = {};
            c(_, o, function() {
                return this
            });
            var y = Object.getPrototypeOf
              , g = y && y(y(P([])));
            g && g !== i && n.call(g, o) && (_ = g);
            var S = f.prototype = v.prototype = Object.create(_);
            function b(e) {
                ["next", "throw", "return"].forEach(function(t) {
                    c(e, t, function(e) {
                        return this._invoke(t, e)
                    })
                })
            }
            function T(e, t) {
                var i;
                s(this, "_invoke", {
                    value: function(s, r) {
                        function o() {
                            return new t(function(i, o) {
                                !function i(s, r, o, a) {
                                    var l = u(e[s], e, r);
                                    if ("throw" === l.type)
                                        a(l.arg);
                                    else {
                                        var c = l.arg
                                          , h = c.value;
                                        return h && "object" == typeof h && n.call(h, "__await") ? t.resolve(h.__await).then(function(e) {
                                            i("next", e, o, a)
                                        }, function(e) {
                                            i("throw", e, o, a)
                                        }) : t.resolve(h).then(function(e) {
                                            c.value = e,
                                            o(c)
                                        }, function(e) {
                                            return i("throw", e, o, a)
                                        })
                                    }
                                }(s, r, i, o)
                            }
                            )
                        }
                        return i = i ? i.then(o, o) : o()
                    }
                })
            }
            function k(e) {
                var t = {
                    tryLoc: e[0]
                };
                1 in e && (t.catchLoc = e[1]),
                2 in e && (t.finallyLoc = e[2],
                t.afterLoc = e[3]),
                this.tryEntries.push(t)
            }
            function L(e) {
                var t = e.completion || {};
                t.type = "normal",
                delete t.arg,
                e.completion = t
            }
            function O(e) {
                this.tryEntries = [{
                    tryLoc: "root"
                }],
                e.forEach(k, this),
                this.reset(!0)
            }
            function P(e) {
                if (e) {
                    var i = e[o];
                    if (i)
                        return i.call(e);
                    if ("function" == typeof e.next)
                        return e;
                    if (!isNaN(e.length)) {
                        var s = -1
                          , r = function i() {
                            for (; ++s < e.length; )
                                if (n.call(e, s))
                                    return i.value = e[s],
                                    i.done = !1,
                                    i;
                            return i.value = t,
                            i.done = !0,
                            i
                        };
                        return r.next = r
                    }
                }
                return {
                    next: C
                }
            }
            function C() {
                return {
                    value: t,
                    done: !0
                }
            }
            return E.prototype = f,
            s(S, "constructor", {
                value: f,
                configurable: !0
            }),
            s(f, "constructor", {
                value: E,
                configurable: !0
            }),
            E.displayName = c(f, l, "GeneratorFunction"),
            e.isGeneratorFunction = function(e) {
                var t = "function" == typeof e && e.constructor;
                return !!t && (t === E || "GeneratorFunction" === (t.displayName || t.name))
            }
            ,
            e.mark = function(e) {
                return Object.setPrototypeOf ? Object.setPrototypeOf(e, f) : (e.__proto__ = f,
                c(e, l, "GeneratorFunction")),
                e.prototype = Object.create(S),
                e
            }
            ,
            e.awrap = function(e) {
                return {
                    __await: e
                }
            }
            ,
            b(T.prototype),
            c(T.prototype, a, function() {
                return this
            }),
            e.AsyncIterator = T,
            e.async = function(t, i, n, s, r) {
                void 0 === r && (r = Promise);
                var o = new T(h(t, i, n, s),r);
                return e.isGeneratorFunction(i) ? o : o.next().then(function(e) {
                    return e.done ? e.value : o.next()
                })
            }
            ,
            b(S),
            c(S, l, "Generator"),
            c(S, o, function() {
                return this
            }),
            c(S, "toString", function() {
                return "[object Generator]"
            }),
            e.keys = function(e) {
                var t = Object(e)
                  , i = [];
                for (var n in t)
                    i.push(n);
                return i.reverse(),
                function e() {
                    for (; i.length; ) {
                        var n = i.pop();
                        if (n in t)
                            return e.value = n,
                            e.done = !1,
                            e
                    }
                    return e.done = !0,
                    e
                }
            }
            ,
            e.values = P,
            O.prototype = {
                constructor: O,
                reset: function(e) {
                    if (this.prev = 0,
                    this.next = 0,
                    this.sent = this._sent = t,
                    this.done = !1,
                    this.delegate = null,
                    this.method = "next",
                    this.arg = t,
                    this.tryEntries.forEach(L),
                    !e)
                        for (var i in this)
                            "t" === i.charAt(0) && n.call(this, i) && !isNaN(+i.slice(1)) && (this[i] = t)
                },
                stop: function() {
                    this.done = !0;
                    var e = this.tryEntries[0].completion;
                    if ("throw" === e.type)
                        throw e.arg;
                    return this.rval
                },
                dispatchException: function(e) {
                    if (this.done)
                        throw e;
                    var i = this;
                    function s(n, s) {
                        return a.type = "throw",
                        a.arg = e,
                        i.next = n,
                        s && (i.method = "next",
                        i.arg = t),
                        !!s
                    }
                    for (var r = this.tryEntries.length - 1; r >= 0; --r) {
                        var o = this.tryEntries[r]
                          , a = o.completion;
                        if ("root" === o.tryLoc)
                            return s("end");
                        if (o.tryLoc <= this.prev) {
                            var l = n.call(o, "catchLoc")
                              , c = n.call(o, "finallyLoc");
                            if (l && c) {
                                if (this.prev < o.catchLoc)
                                    return s(o.catchLoc, !0);
                                else if (this.prev < o.finallyLoc)
                                    return s(o.finallyLoc)
                            } else if (l) {
                                if (this.prev < o.catchLoc)
                                    return s(o.catchLoc, !0)
                            } else if (c) {
                                if (this.prev < o.finallyLoc)
                                    return s(o.finallyLoc)
                            } else
                                throw Error("try statement without catch or finally")
                        }
                    }
                },
                abrupt: function(e, t) {
                    for (var i = this.tryEntries.length - 1; i >= 0; --i) {
                        var s = this.tryEntries[i];
                        if (s.tryLoc <= this.prev && n.call(s, "finallyLoc") && this.prev < s.finallyLoc) {
                            var r = s;
                            break
                        }
                    }
                    r && ("break" === e || "continue" === e) && r.tryLoc <= t && t <= r.finallyLoc && (r = null);
                    var o = r ? r.completion : {};
                    return (o.type = e,
                    o.arg = t,
                    r) ? (this.method = "next",
                    this.next = r.finallyLoc,
                    m) : this.complete(o)
                },
                complete: function(e, t) {
                    if ("throw" === e.type)
                        throw e.arg;
                    return "break" === e.type || "continue" === e.type ? this.next = e.arg : "return" === e.type ? (this.rval = this.arg = e.arg,
                    this.method = "return",
                    this.next = "end") : "normal" === e.type && t && (this.next = t),
                    m
                },
                finish: function(e) {
                    for (var t = this.tryEntries.length - 1; t >= 0; --t) {
                        var i = this.tryEntries[t];
                        if (i.finallyLoc === e)
                            return this.complete(i.completion, i.afterLoc),
                            L(i),
                            m
                    }
                },
                catch: function(e) {
                    for (var t = this.tryEntries.length - 1; t >= 0; --t) {
                        var i = this.tryEntries[t];
                        if (i.tryLoc === e) {
                            var n = i.completion;
                            if ("throw" === n.type) {
                                var s = n.arg;
                                L(i)
                            }
                            return s
                        }
                    }
                    throw Error("illegal catch attempt")
                },
                delegateYield: function(e, i, n) {
                    return this.delegate = {
                        iterator: P(e),
                        resultName: i,
                        nextLoc: n
                    },
                    "next" === this.method && (this.arg = t),
                    m
                }
            },
            e
        }(e.exports);
        try {
            regeneratorRuntime = t
        } catch (e) {
            "object" == typeof globalThis ? globalThis.regeneratorRuntime = t : Function("r", "regeneratorRuntime = r")(t)
        }
    },
    54588: function(e, t, i) {
        e.exports = i(7452)
    },
    90344: function(e, t, i) {
        "use strict";
        i.d(t, {
            A: function() {
                return z
            }
        });
        var n, s, r = i(7163), o = i(38432), a = i(90942), l = i(9776), c = i(37651), h = i(10809), u = class {
            init() {
                window.WebKitPlaybackTargetAvailabilityEvent && this.attachEvents()
            }
            onAirplayWirelessChanged() {
                var e;
                if (c.A.emit(h.A.PLAYER_WIRELESS_CHANGED),
                "auto" === this.core.sourceController.getCurrentQuality()) {
                    this.core.sourceController.getSourceUrl().includes(".av1.") && c.A.emit(h.A.PLAYER_FALLBACK_SOURCE);
                    return
                }
                -1 !== this.core.sourceController.getQualities().indexOf("auto") && (null == (e = this.core.videoElement) ? void 0 : e.webkitCurrentPlaybackTargetIsWireless) && (c.A.emit(h.A.PLAYER_SET_SOURCE, "auto"),
                c.A.emit(h.A.SETTINGS_RENDER_QUALITY))
            }
            attachEvents() {
                this.core.videoElement.addEventListener("webkitcurrentplaybacktargetiswirelesschanged", this.onAirplayWirelessChanged.bind(this))
            }
            constructor(e) {
                this.core = e,
                this.init()
            }
        }
        ;
        let d = {
            hls: "application/vnd.apple.mpegurl",
            h264: 'video/mp4; codecs="avc1.640029"',
            vp9: 'video/webm; codecs="vp9, opus"',
            h265: ['video/mp4; codecs="hev1.1.6.L93.B0', 'video/mp4; codecs="hvc1.1.6.L93.B0"'],
            av1: 'video/mp4; codecs="av01.0.00M.08"'
        };
        var A = class {
            defaultCapabilities() {
                return {
                    videoElementSupported: !1,
                    hlsJs: !1,
                    hls: !1,
                    h264: !0,
                    h265: !1,
                    vp9: !1,
                    av1: !1,
                    android: !1,
                    idevice: !1,
                    mobile: !1,
                    ipad: !1,
                    iphone: !1,
                    touch: !1,
                    gyroscope: !1,
                    console: !1,
                    ie: !1,
                    safari: !1,
                    chrome: !1,
                    chromeIos: !1,
                    firefox: !1,
                    samsung: !1,
                    fullscreen: !1,
                    volumeControl: !1,
                    mobilePlayer2: !1
                }
            }
            init() {
                this.detectCapabilities()
            }
            detectCapabilities() {
                this.checkIsMobile(),
                this.checkIsConsole(),
                this.checkIsIE(),
                this.checkBrowser(),
                this.checkHlsJs(),
                this.checkSupportedFormatsAndVolumeControl(),
                this.checkTouchScreen(),
                this.checkFullscreen()
            }
            getMediaSource() {
                return "undefined" != typeof window ? window.MediaSource || window.WebKitMediaSource : null
            }
            checkMediaSource(e) {
                let t = this.getMediaSource()
                  , i = window.SourceBuffer || window.WebKitSourceBuffer
                  , n = t && "function" == typeof t.isTypeSupported && t.isTypeSupported(e)
                  , s = !i || i.prototype && "function" == typeof i.prototype.appendBuffer && "function" == typeof i.prototype.remove;
                return !!n && !!s
            }
            checkHlsJs() {
                this.capabilities.hlsJs = this.checkMediaSource(d.h264)
            }
            checkSupportedFormatsAndVolumeControl() {
                try {
                    let t = document.createElement("video")
                      , i = t.muted;
                    if (t.muted = !t.muted,
                    this.capabilities.volumeControl = i !== t.muted,
                    !t.canPlayType)
                        return;
                    let n = ["hls", "h265", "h264"];
                    for (let i in d) {
                        let s;
                        if ("h264" === i)
                            continue;
                        let r = ["probably"];
                        n.includes(i) && r.push("maybe");
                        let o = !!this.capabilities.idevice && this.capabilities.idevice < 11;
                        if ("h265" === i && (o || this.capabilities.console)) {
                            this.capabilities[i] = !1;
                            continue
                        }
                        let a = d[i];
                        s = "h265" === i ? t.canPlayType(a[0]) || t.canPlayType(a[1]) : t.canPlayType(a);
                        let l = r.includes(s);
                        if (l)
                            this.capabilities[i] = l;
                        else {
                            var e;
                            this.capabilities[i] = !!(null == (e = this.getMediaSource()) ? void 0 : e.isTypeSupported(a))
                        }
                    }
                } catch (e) {}
            }
            checkIsMobile() {
                try {
                    if (/iP(hone|od|ad)/.test(navigator.appVersion) || "MacIntel" === navigator.platform && navigator.maxTouchPoints > 1) {
                        (/iPhone/.test(navigator.appVersion) || "MacIntel" === navigator.platform && navigator.maxTouchPoints > 1) && (this.capabilities.iphone = !0),
                        (/iPad/.test(navigator.appVersion) || "MacIntel" === navigator.platform && navigator.maxTouchPoints > 1) && (this.capabilities.ipad = !0),
                        this.capabilities.mobile = !0,
                        this.capabilities.idevice = parseInt(navigator.appVersion.match(/OS (\d+)_(\d+)_?(\d+)?/)[1], 10);
                        return
                    }
                    let e = `${navigator.userAgent.toLowerCase()}`.match(/android\s([0-9.]*)/);
                    e && 2 === e.length && (this.capabilities.android = parseFloat(e[1]),
                    this.capabilities.mobile = !0)
                } catch (e) {}
            }
            checkTouchScreen() {
                this.capabilities.touch = "ontouchstart"in window || navigator.msMaxTouchPoints || navigator.maxTouchPoints > 1
            }
            checkIsConsole() {
                try {
                    (navigator.userAgent.match(/playstation/i) || navigator.userAgent.match(/xbox/i) || navigator.userAgent.match(/wii/i) || navigator.userAgent.match(/psvita/i)) && (this.capabilities.console = !0)
                } catch (e) {}
            }
            checkIsIE() {
                try {
                    let e;
                    this.capabilities.ie = (e = navigator.userAgent.match(/(?:MSIE |Edge\/*|Trident\/.*; rv:)(\d+)/)) ? parseInt(e[1], 10) : null
                } catch (e) {}
            }
            checkFullscreen() {
                this.capabilities.fullscreen = !0 === document.fullscreenEnabled || !0 === document.webkitFullscreenEnabled || !0 === document.mozFullScreenEnabled || !0 === document.msFullscreenEnabled || this.capabilities.idevice && !this.core.isVr || "number" == typeof this.capabilities.ie && this.capabilities.ie < 11
            }
            checkBrowser() {
                try {
                    let e = /Chrome/.test(navigator.userAgent) && /Google Inc/.test(navigator.vendor)
                      , t = /Safari/.test(navigator.userAgent) && /Apple Computer/.test(navigator.vendor) && "Win32" !== navigator.platform
                      , i = /Firefox\//.test(navigator.userAgent)
                      , n = /SamsungBrowser\//.test(navigator.userAgent)
                      , s = /Safari/.test(navigator.userAgent) && "Win32" !== navigator.platform && /CriOS/.test(navigator.userAgent);
                    this.capabilities.firefox = i,
                    this.capabilities.chrome = e,
                    this.capabilities.chromeIos = s,
                    this.capabilities.safari = t,
                    this.capabilities.samsung = n
                } catch (e) {}
            }
            checkGyroscope(e) {
                "ondevicemotion"in window || (this.capabilities.gyroscope = !1);
                let t = i=>{
                    (i.rotationRate.alpha || i.rotationRate.beta || i.rotationRate.gamma) && (this.capabilities.gyroscope = !0,
                    null == e || e()),
                    window.removeEventListener("devicemotion", t)
                }
                ;
                if ("function" == typeof DeviceOrientationEvent) {
                    if ("function" != typeof DeviceOrientationEvent.requestPermission)
                        return void window.addEventListener("devicemotion", t);
                    DeviceOrientationEvent.requestPermission().then(t=>("granted" === t && (this.capabilities.gyroscope = !0,
                    null == e || e()),
                    t)).catch(()=>{
                        let t = ()=>{
                            this.checkGyroscope(e),
                            this.core.element.removeEventListener("click", t.bind(this))
                        }
                        ;
                        this.core.element.addEventListener("click", t.bind(this))
                    }
                    )
                }
            }
            constructor(e) {
                this.core = e,
                this.capabilities = this.defaultCapabilities(),
                this.init()
            }
        }
          , p = i(27344)
          , m = i(54098)
          , v = i(42691)
          , E = i(97590)
          , f = i(5688);
        let _ = {
            [f.A.ABORTED]: "xplayerErrorsAborted",
            [f.A.NETWORK]: "xplayerErrorsNetwork",
            [f.A.DECODER]: "xplayerErrorsDecoder",
            [f.A.SOURCE]: "xplayerErrorsSource"
        }
          , y = "xplayer-error"
          , g = "xh-helper-hidden";
        var S = class {
            init() {
                this.render(),
                this.attachEvents()
            }
            render() {
                this.errorElement = document.createElement("div"),
                this.errorElement.className = "xplayer-error",
                r.A.addClass(this.errorElement, g),
                this.core.element.appendChild(this.errorElement)
            }
            attachEvents() {
                this.core.on(h.A.PLAYER_ON_ERROR, this.processPlayerErrorEvent, this),
                this.core.on(h.A.PLAYER_FALLBACK_SOURCE_FAIL, this.processErrorType.bind(this, f.A.SOURCE, !0)),
                this.core.on(h.A.PLAYER_ERROR_CONTROLLER_BLOCK, this.onErrorServiceBlock, this),
                this.core.on(h.A.PLAYER_ERROR_CONTROLLER_UNBLOCK, this.onErrorServiceUnblock, this),
                this.core.on(h.A.PLAYER_ON_PLAYING, this.hideError, this),
                this.errorElement.addEventListener("click", this.onErrorElementClick.bind(this))
            }
            onErrorElementClick(e) {
                "reload-page" === e.target.className && this.reloadPage()
            }
            onErrorServiceBlock() {
                this.blocked = !0
            }
            onErrorServiceUnblock() {
                this.blocked = !1
            }
            processPlayerErrorEvent(e) {
                if (this.blocked)
                    return;
                let t = v.A[e && e.target && e.target.error && e.target.error.code];
                if (!t)
                    return void this.checkPosterError();
                this.processErrorType(t)
            }
            processErrorType(e, t) {
                let i, n = ((i = _[e]) ? (0,
                E.T)(i) : "") || e;
                if (m.A.set("error", !0),
                p.A.log(`${p.A.TYPES.PLAYER_ERROR}-${e}`, "PlayerErrorService", n, {
                    sourceCore: this.core.sourceController.getSourceUrl(),
                    sourceVideo: this.core.videoElement.src,
                    quality: this.core.sourceController.getCurrentQuality(),
                    settings: this.core.settings,
                    currentTimeCore: m.A.get("currentTime"),
                    currentTimeVideo: this.core.videoElement.currentTime,
                    readyStateVideo: this.core.videoElement.readyState
                }),
                e !== f.A.ABORTED) {
                    if (e === f.A.DECODER)
                        return void this.processDecoderError();
                    if (e === f.A.SOURCE && !t)
                        return void this.processSourceError();
                    this.showError(n)
                }
            }
            processDecoderError() {
                if ("hls" === this.core.sourceController.type && "auto" === this.core.sourceController.getCurrentQuality())
                    return void this.core.emit(h.A.PLAYER_FALLBACK_SOURCE);
                let e = m.A.get("currentTime");
                p.A.send("decoder", {
                    quality: this.core.sourceController.getCurrentQuality(),
                    currentTime: e,
                    videoId: this.core.options.videoId
                }),
                this.core.emit(h.A.PAUSE_ACTION_BLOCK),
                this.core.emit(h.A.PLAYER_ON_DECODER_ERROR),
                this.core.setVideoSource(),
                this.core.once(h.A.PLAYER_ON_CAN_PLAY, ()=>{
                    this.core.emit(h.A.PAUSE_ACTION_UNBLOCK),
                    this.core.emit(h.A.PLAYER_SET_CURRENT_TIME, e + 5),
                    this.core.once(h.A.PLAYER_ON_SEEKED, ()=>{
                        this.core.emit(h.A.PLAYER_PLAY)
                    }
                    )
                }
                )
            }
            processSourceError() {
                p.A.send("source", {
                    sourceUrl: this.core.sourceController.getSourceUrl()
                }),
                this.core.emit(h.A.PLAYER_FALLBACK_SOURCE)
            }
            checkPosterError() {
                let e = this.core.options.poster;
                if (!e)
                    return void p.A.log(`${p.A.TYPES.PLAYER_ERROR}-POSTER`, "PlayerErrorService", "no poster passed", {
                        posterURL: e,
                        videoId: this.core.options.videoId
                    });
                this.checkImageAvailable(e)
            }
            checkImageAvailable(e) {
                let t = new Image;
                t.onload = this.processUndefinedError.bind(this),
                t.onerror = this.processPosterNotAvailable.bind(this, e),
                t.src = e
            }
            processUndefinedError() {
                p.A.log(`${p.A.TYPES.PLAYER_ERROR}-UNDEFINED`, "PlayerErrorService", "error code undefined", {
                    source: this.core && this.core.videoElement && this.core.videoElement.src || null,
                    currentTime: this.core && m.A.get("currentTime") || null,
                    settings: this.core && this.core.settings || null,
                    readyStateVideo: this.core && this.core.videoElement && this.core.videoElement.readyState || null
                })
            }
            processPosterNotAvailable(e) {
                p.A.log(`${p.A.TYPES.PLAYER_ERROR}-POSTER`, "PlayerErrorService", "poster not available", {
                    posterURL: e,
                    videoId: this.core.options.videoId
                })
            }
            reloadPage() {
                let e = -1 === window.location.href.indexOf("?") ? "?" : "&"
                  , t = o.A.OFFSET_REGEX.test(window.location.href) ? window.location.href.replace(o.A.OFFSET_REGEX, "$10.1") : `${window.location.href + e}t=0.1`;
                window.location.href = t
            }
            showError(e) {
                let t = `<div class="error-wrapper">
                    <span class="error-message">${e}</span><br><span class="reload-page">Reload</span>
                </div>`;
                this.errorElement.innerHTML = t,
                r.A.removeClass(this.errorElement, g),
                r.A.addClass(this.core.element, y),
                this.core.emit(h.A.USER_ACTION)
            }
            hideError() {
                m.A.set("error", !1),
                r.A.addClass(this.errorElement, g),
                r.A.removeClass(this.core.element, y)
            }
            hasError() {
                return m.A.get("error")
            }
            constructor(e) {
                this.core = e,
                m.A.set("error", !1),
                this.blocked = !1,
                this.init()
            }
        }
          , b = i(69277)
          , T = class {
            defaultOptions() {
                return {
                    fallbackImageClass: "xplayer-fallback-image"
                }
            }
            init() {
                this.core && this.core.on(h.A.FALLBACK_TO_IMAGE, this.showFallbackImage, this)
            }
            showFallbackImage() {
                let e = document.getElementsByClassName(this.options.fallbackImageClass)[0];
                if (this.removePlayerElement(),
                this.destroyPlayerCore(),
                !e)
                    return void p.A.log(p.A.TYPES.FALLBACK_ERROR, "FallbackService", "FALLBACK_TO_IMAGE_ERROR", {
                        fallbackImageClass: this.options.fallbackImageClass
                    });
                r.A.removeClass(e, "xh-helper-hidden")
            }
            removePlayerElement() {
                this.core && this.core.element && this.core.element.parentNode && this.core.element.parentNode.removeChild(this.core.element)
            }
            destroyPlayerCore() {
                this.core && this.core.offAllEvents(),
                this.core = null
            }
            fallbackImage() {
                this.showFallbackImage()
            }
            constructor(e, t, i) {
                this.core = t,
                this.options = (0,
                b._)({}, this.defaultOptions(), i || {}),
                this.init()
            }
        }
        ;
        let k = {
            hls: function(e, t) {
                var i;
                return !t.safari && !!t.hlsJs && ((null == e ? void 0 : e.av1) && !t.av1 && delete e.av1,
                (null == e ? void 0 : e.h265) && !t.h265 && delete e.h265,
                (null == e ? void 0 : e.h264) && !t.h264 && delete e.h264,
                !!(null == (i = Object.keys(e)) ? void 0 : i.length))
            },
            standard: function(e, t) {
                for (let i in e) {
                    if (!e.hasOwnProperty(i))
                        continue;
                    if (!t[i] || "[object Array]" !== Object.prototype.toString.call(e[i])) {
                        delete e[i];
                        continue
                    }
                    let n = [];
                    e[i] = e[i].filter(e=>"[object Object]" === Object.prototype.toString.call(e) && !!e.url && !!e.quality && -1 === n.indexOf(e.quality) && ("auto" !== e.quality || !!t.hls) && (n.push(e.quality),
                    e.label || (e.label = `${e.quality}`),
                    !0)),
                    e[i].length || delete e[i]
                }
                return !!Object.keys(e).length
            }
        };
        var L = function(e, t) {
            if (!e || "object" != typeof e)
                return null;
            let i = (0,
            b._)({}, e);
            for (let e in i)
                if (i.hasOwnProperty(e)) {
                    if (!k.hasOwnProperty(e)) {
                        delete i[e];
                        continue
                    }
                    k[e](i[e], t) || delete i[e]
                }
            return Object.keys(i).length ? i : null
        }
          , O = i(84422)
          , P = i(15904)
          , C = i(86096)
          , R = i(26838)
          , w = i(18196)
          , N = i(26614);
        function D(e, t) {
            var i = Object.keys(e);
            if (Object.getOwnPropertySymbols) {
                var n = Object.getOwnPropertySymbols(e);
                t && (n = n.filter(function(t) {
                    return Object.getOwnPropertyDescriptor(e, t).enumerable
                })),
                i.push.apply(i, n)
            }
            return i
        }
        function I(e) {
            for (var t = 1; t < arguments.length; t++) {
                var i = null != arguments[t] ? arguments[t] : {};
                t % 2 ? D(Object(i), !0).forEach(function(t) {
                    (0,
                    C.A)(e, t, i[t])
                }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(i)) : D(Object(i)).forEach(function(t) {
                    Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(i, t))
                })
            }
            return e
        }
        (n = s || (s = {})).INIT = "init",
        n.QUALITY = "getQuality",
        n.QUALITIES = "getQualities",
        n.QUALITY_CURRENT = "getCurrentQuality",
        n.QUALITY_CHANGE = "changeQuality",
        n.LABEL = "getLabelFromQuality",
        n.SOURCE_URL = "getSourceUrl",
        n.SOURCE_ATTACH = "attachSource",
        n.SOURCE_FALLBACK = "fallbackSource",
        n.CDN = "getCDN",
        n.TYPE = "getType",
        n.TIMEUPDATE = "prepareTimeupdate",
        n.LOAD_STOP = "stopLoad",
        n.LOAD_START = "startLoad",
        n.DESTROY = "destroy";
        var U = (0,
        P.A)(function e(t, i) {
            (0,
            O.A)(this, e),
            (0,
            C.A)(this, "options", void 0),
            (0,
            C.A)(this, "debug", void 0),
            (0,
            C.A)(this, "destroyed", void 0),
            this.options = I(I({}, this.getDefaultOptions()), i),
            this.debug = this.options.debug
        }, [{
            key: "getDefaultOptions",
            value: function() {
                return {
                    initialVideoQuality: !1,
                    getSourceAfterRedirect: !1,
                    disableSourceFallback: !1
                }
            }
        }, {
            key: "log",
            value: function(e) {
                this.debug && console.error("SourceController abstract method: ".concat(e))
            }
        }, {
            key: "init",
            value: function() {
                this.log(s.INIT)
            }
        }, {
            key: "getQuality",
            value: function() {
                this.log(s.QUALITY)
            }
        }, {
            key: "getQualities",
            value: function() {
                this.log(s.QUALITIES)
            }
        }, {
            key: "getCurrentQuality",
            value: function() {
                this.log(s.QUALITY_CURRENT)
            }
        }, {
            key: "changeQuality",
            value: function() {
                this.log(s.QUALITY_CHANGE)
            }
        }, {
            key: "getLabelFromQuality",
            value: function() {
                this.log(s.LABEL)
            }
        }, {
            key: "getSourceUrl",
            value: function() {
                this.log(s.SOURCE_URL)
            }
        }, {
            key: "attachSource",
            value: function() {
                this.log(s.SOURCE_ATTACH)
            }
        }, {
            key: "fallbackSource",
            value: function() {
                this.log(s.SOURCE_FALLBACK)
            }
        }, {
            key: "getCDN",
            value: function() {
                this.log(s.CDN)
            }
        }, {
            key: "getType",
            value: function() {
                this.log(s.TYPE)
            }
        }, {
            key: "prepareTimeupdate",
            value: function() {
                this.log(s.TIMEUPDATE)
            }
        }, {
            key: "stopLoad",
            value: function() {
                this.log(s.LOAD_STOP)
            }
        }, {
            key: "startLoad",
            value: function() {
                this.log(s.LOAD_START)
            }
        }, {
            key: "destroy",
            value: function() {
                this.log(s.DESTROY)
            }
        }]);
        class x extends U {
            getCurrentQuality() {
                return this.currentQuality
            }
            getQuality() {
                let e = this.options.videoElement;
                if (!e)
                    return 0;
                let t = e.videoWidth > e.videoHeight ? e.videoHeight : e.videoWidth;
                return `${t}p`
            }
            getQualities() {
                return this.qualities
            }
            getChromecastUrl() {
                return this.getSourceUrl()
            }
            getLabelFromQuality(e=this.currentQuality) {
                return this.getSourceFromQuality(e).label
            }
            getHasAv1Source() {
                return this.hasAv1Source
            }
            getSource() {
                return this.getSourceFromQuality(this.currentQuality)
            }
            getSourceUrl(e=this.currentQuality) {
                return this.getSourceFromQuality(e).url && this.getSourceFromQuality(e).url[0] || (p.A.log(p.A.TYPES.SOURCE_ERROR, "SourceService", `No url ${this.currentQuality} quality found`, {
                    options: this.options,
                    sources: this.sources,
                    quality: this.currentQuality,
                    qualities: this.qualities
                }),
                null)
            }
            getCDN() {
                return (0,
                N.D)(this.getSourceUrl())
            }
            getType(e=this.currentQuality) {
                return this.getSourceFromQuality(e).type || ""
            }
            init() {
                var e = this;
                return (0,
                R._)(function*() {
                    e.sources = yield e.getSources(e.sources),
                    e.qualities = e.getLevelsQualities(),
                    e.setQuality(e.options.initialVideoQuality),
                    e.ready = !0,
                    c.A.emit(h.A.SOURCE_CONTROLLER_READY)
                })()
            }
            getSources(e) {
                return new Promise(t=>{
                    let i = {}
                      , n = [];
                    for (let t in e)
                        e[t].forEach(e=>{
                            i[e.quality] || (i[e.quality] = e),
                            this.options.getSourceAfterRedirect ? n.push(this.fillSourceUrlsAfterRedirect(i, e)) : this.fillSourceUrls(i, e)
                        }
                        );
                    0 !== n.length ? Promise.all(n).then(()=>t(i)) : t(i)
                }
                )
            }
            fillSourceUrls(e, t) {
                Array.isArray(e[t.quality].url) ? e[t.quality].url.push(t.url) : e[t.quality].url = [t.url],
                t.fallback && e[t.quality].url.push(t.fallback)
            }
            fillSourceUrlsAfterRedirect(e, t) {
                return new Promise(i=>{
                    x.getSourceAfterRedirect(t.url).then(i=>{
                        Array.isArray(e[t.quality].url) ? e[t.quality].url.push(i) : e[t.quality].url = [i]
                    }
                    ).catch(()=>{
                        e[t.quality].url = []
                    }
                    ).then(()=>t.fallback ? x.getSourceAfterRedirect(t.fallback) : null).then(i=>{
                        i && e[t.quality].url.push(i)
                    }
                    ).then(i).catch(i)
                }
                )
            }
            getLevelsQualities() {
                let e = Object.keys(this.sources).sort((e,t)=>"auto" === e ? -1 : parseInt(t, 10) - parseInt(e, 10));
                return e.length || p.A.log(p.A.TYPES.SOURCE_ERROR, "SourceService", "No quality provided", {
                    options: this.options,
                    sources: this.sources,
                    quality: this.currentQuality,
                    qualities: this.qualities
                }),
                e
            }
            setQuality(e) {
                return e || (e = this.currentQuality),
                0 > this.qualities.indexOf(e) && (e = this.qualities[0]),
                this.currentQuality = e,
                this.currentQuality
            }
            getSourceFromQuality(e) {
                return this.sources[e] || {}
            }
            attachSource(e) {
                e.src = this.getSourceUrl(),
                "function" == typeof e.load && e.load(),
                m.A.set("sourceLoaded", !0)
            }
            changeQuality(e, t, i) {
                return this.ready ? (c.A.emit(h.A.PLAYER_BEFORE_SET_SOURCE),
                t = this.setQuality(t),
                i || this.attachSource(e),
                t) : (c.A.once(h.A.SOURCE_CONTROLLER_READY, this.changeQuality, this, e, t, i),
                null)
            }
            prepareTimeupdate(e, t=!1, i=!1) {
                let n = t || m.A.get("currentTime");
                c.A.once(h.A.PLAYER_ON_LOADED_DATA, ()=>{
                    c.A.emit(h.A.PLAYER_SET_CURRENT_TIME, n),
                    c.A.once(h.A.PLAYER_ON_CAN_PLAY, ()=>{
                        (!1 !== e || m.A.get("play_requested")) && (!0 === e || m.A.get("playing") || m.A.get("error")) ? (c.A.emit(h.A.PLAYER_PLAY, i),
                        i && (c.A.emit(h.A.PLAYER_ON_SEEKED),
                        c.A.emit(h.A.PLAYER_SET_CURRENT_TIME, n))) : (c.A.emit(h.A.PLAYER_PAUSE),
                        c.A.emit(h.A.PLAYER_ON_PAUSE))
                    }
                    )
                }
                )
            }
            fallbackSource() {
                if (this.options.disableSourceFallback)
                    return this.destroy(),
                    !1;
                let e = this.getSourceFromQuality(this.currentQuality);
                return e.url.splice(0, 1),
                !!e.url.length || ((this.qualities.splice(this.qualities.indexOf(this.currentQuality), 1),
                this.qualities.length) ? (this.setQuality(),
                !0) : (this.destroy(),
                !1))
            }
            destroy() {
                this.destroyed = !0,
                this.ready = !1,
                m.A.set("sourceLoaded", !1)
            }
            static getSourceAfterRedirect(e) {
                return new Promise((t,i)=>{
                    w.A.getHeadRedirect(e).then(e=>{
                        if (!e.responseURL)
                            return void i();
                        t(e.responseURL)
                    }
                    ).catch(()=>i())
                }
                )
            }
            constructor(e, t={}) {
                var i, n;
                if (super(e, t),
                !e || !e.standard)
                    return void this.destroy();
                let s = null == (n = this.options) || null == (i = n.userSettings) ? void 0 : i.useAv1;
                this.sources = e.standard,
                this.hasAv1Source = !!this.sources.av1,
                !(s || void 0 === s) && this.hasAv1Source && delete this.sources.av1,
                this.qualities = null,
                this.currentQuality = null,
                this.type = "standard",
                this.ready = !1
            }
        }
        let Y = "auto";
        var M = class extends U {
            getChromecastUrl() {
                return this.chromecastSource
            }
            getHasAv1Source() {
                return this.hasAv1Source
            }
            getCurrentQuality() {
                return !!this.ready && (this.hls.autoLevelEnabled ? "auto" : this.getQuality(this.hls.currentLevel))
            }
            getQualities() {
                return this.qualities
            }
            getLabelFromQuality(e=this.getCurrentQuality()) {
                return e
            }
            getSourceUrl() {
                let e;
                if (!this.attached)
                    return this.hlsSource;
                try {
                    e = this.hls.streamController.levels[this.hls.streamController.level].url[0]
                } catch (t) {
                    e = this.hls.url
                }
                return e
            }
            getCDN() {
                return (0,
                N.D)(this.getSourceUrl())
            }
            getType(e=this.getCurrentQuality()) {
                let t;
                return "auto" === e && (e = this.getQuality(-1)),
                parseInt(e, 10) > 2e3 ? t = "FK" : parseInt(e, 10) > 719 && (t = "HD"),
                t
            }
            init() {
                this.destroyed || (this.storage = new a.A("session"),
                r.A.getScript(this.config.libSrc).then(()=>{
                    if (!window.Hls) {
                        c.A.emit(h.A.PLAYER_FALLBACK_SOURCE, !0),
                        this.destroy();
                        return
                    }
                    c.A.emit(h.A.HLS_LOADED),
                    this.loaded = !0,
                    this.initHLS(),
                    this.attachEvents(),
                    this.getHlsQualities()
                }
                ).catch(()=>{
                    c.A.emit(h.A.PLAYER_FALLBACK_SOURCE, !0),
                    this.destroy()
                }
                ))
            }
            initHLS() {
                this.config = (0,
                b._)({}, window.Hls.DefaultConfig, this.getStartLevelConfig(), this.config || {}),
                this.hls = new window.Hls(this.config)
            }
            getStartLevelConfig() {
                var e;
                let t = null != (e = this.storage.getItem("x-player-previous-auto-level")) ? e : 0;
                return {
                    startLevel: t,
                    testBandwidth: !t
                }
            }
            attachEvents() {
                this.hls.on(window.Hls.Events.ERROR, (e,t)=>{
                    c.A.emit(h.A.SOURCE_CONTROLLER_ON_ERROR, this.type, t),
                    t.fatal && c.A.emit(h.A.PLAYER_FALLBACK_SOURCE, !1)
                }
                ),
                this.hls.on(window.Hls.Events.MEDIA_ATTACHED, ()=>{
                    this.attached = !0
                }
                ),
                this.hls.on(window.Hls.Events.LEVEL_SWITCHED, (e,t)=>{
                    c.A.emit(h.A.SOURCE_TYPE_CHANGE),
                    c.A.emit(h.A.SETTINGS_RENDER_QUALITY),
                    this.getHlsPreviousAutoLevel(t)
                }
                ),
                this.hls.on(window.Hls.Events.FRAG_LOADING, ()=>{
                    c.A.emit(h.A.HLS_FRAG_LOADING)
                }
                ),
                this.hls.on(window.Hls.Events.FRAG_LOADED, (e,t)=>{
                    c.A.emit(h.A.HLS_FRAG_LOADED, t)
                }
                )
            }
            getHlsPreviousAutoLevel(e) {
                if (!this.hls.autoLevelEnabled)
                    return;
                let {level: t} = e;
                try {
                    t = JSON.stringify(t),
                    this.storage.setItem("x-player-previous-auto-level", t)
                } catch (e) {
                    console.error(e)
                }
            }
            getHlsQualities() {
                this.hls.loadSource(this.hlsSource),
                this.hls.on(window.Hls.Events.MANIFEST_PARSED, (e,t)=>{
                    if (this.qualities = this.getLevelsQualities(t.levels),
                    !this.qualities || this.qualities.length < 2)
                        return void c.A.emit(h.A.PLAYER_FALLBACK_SOURCE, !0);
                    this.ready = !0;
                    let i = this.options.initialVideoQuality || "auto";
                    if (!Object.values(this.qualities).includes(i)) {
                        var n;
                        i = this.qualities[null == (n = Object.keys(this.qualities)) ? void 0 : n[0]] || "auto"
                    }
                    this.setQuality(i),
                    c.A.emit(h.A.SOURCE_CONTROLLER_READY),
                    c.A.emit(h.A.SOURCE_TYPE_CHANGE)
                }
                )
            }
            getQualityName(e) {
                return e && e.height ? e.height > e.width ? `${e.width}p` : `${e.height}p` : Y
            }
            getLevelsQualities(e) {
                let t = null;
                try {
                    t = (t = ["auto"]).concat(e.map(e=>this.getQualityName(e)).sort((e,t)=>parseInt(t, 10) - parseInt(e, 10)))
                } catch (e) {}
                return t
            }
            setQuality(e) {
                if (!this.loaded)
                    return void c.A.once(h.A.HLS_LOADED, this.setQuality.bind(this, e));
                if (!this.ready)
                    return void this.hls.on(window.Hls.Events.MANIFEST_PARSED, ()=>{
                        this.setQuality(e),
                        this.ready = !0,
                        c.A.emit(h.A.SOURCE_CONTROLLER_READY)
                    }
                    );
                if (e || (e = this.getCurrentQuality()),
                e === Y) {
                    this.hls.loadLevel = -1;
                    return
                }
                this.hls.levels.forEach((t,i)=>{
                    this.getQualityName(t) === e && (this.hls.currentLevel = i,
                    this.attached && c.A.emit(h.A.SHOW_LOADER))
                }
                )
            }
            attachSource(e) {
                if (!this.ready)
                    return void c.A.once(h.A.SOURCE_CONTROLLER_READY, this.attachSource.bind(this, e));
                this.hls.attachMedia(e),
                m.A.set("sourceLoaded", !0)
            }
            detachAdsEvents() {
                c.A.off(h.A.ADS_ENDED, this.adsEndedEventId)
            }
            changeQuality(e, t, i) {
                if (m.A.get("ads")) {
                    this.adsEndedEventId && c.A.off(h.A.ADS_ENDED, this.adsEndedEventId),
                    this.adsEndedEventId = c.A.once(h.A.ADS_ENDED, this.changeQuality.bind(this, e, t, i));
                    return
                }
                !m.A.get("ads_playing") && m.A.get("sourceLoaded") || i || this.attachSource(e),
                c.A.emit(h.A.PAUSE_ACTION_BLOCK),
                this.setQuality(t),
                this.playAfterSet && (c.A.emit(h.A.PLAYER_PLAY),
                this.playAfterSet = !1),
                c.A.once(h.A.PLAYER_ON_PLAYING, ()=>c.A.emit(h.A.PAUSE_ACTION_UNBLOCK))
            }
            getQuality(e) {
                return -1 === e && (e = this.hls.loadLevel),
                this.getQualityName(this.hls.levels[e])
            }
            prepareTimeupdate(e, t=!1) {
                this.playAfterSet = e && !m.A.get("playing");
                let i = !1 === t ? m.A.get("currentTime") : t;
                c.A.once(h.A.PLAYER_ON_LOADED_DATA, ()=>{
                    c.A.emit(h.A.PLAYER_SET_CURRENT_TIME, i),
                    c.A.once(h.A.PLAYER_ON_CAN_PLAY, ()=>{
                        !1 === e ? (c.A.emit(h.A.PLAYER_PAUSE),
                        c.A.emit(h.A.PLAYER_ON_PAUSE)) : !0 === e || m.A.get("playing") || m.A.get("error") ? c.A.emit(h.A.PLAYER_PLAY) : (c.A.emit(h.A.PLAYER_PAUSE),
                        c.A.emit(h.A.PLAYER_ON_PAUSE))
                    }
                    )
                }
                )
            }
            stopLoad() {
                this.hls && this.attached && !this.isLoadStopped && (this.hls.stopLoad(),
                this.isLoadStopped = !0)
            }
            startLoad(e=-1) {
                this.hls && this.attached && this.isLoadStopped && (this.hls.startLoad(e),
                this.isLoadStopped = !1)
            }
            fallbackSource() {
                return this.destroy(),
                !1
            }
            destroy() {
                this.hls && this.hls.destroy(),
                this.ready = !1,
                this.destroyed = !0,
                this.adsEndedEventId && this.detachAdsEvents(),
                m.A.set("sourceLoaded", !1)
            }
            constructor(e, t={}) {
                var i, n, s, r, o, a, l, c, h, u, d, A, p, m, v, E, f, _;
                super(e, t),
                this.options = t,
                this.isLoadStopped = !1,
                this.config = (0,
                b._)({}, t.hlsConfig || {}),
                this.chromecastSource = (null == e || null == (n = e.hls) || null == (i = n.h264) ? void 0 : i.url) || (null == e || null == (r = e.hls) || null == (s = r.h264) ? void 0 : s.fallback);
                let y = (null == (a = this.options) || null == (o = a.userSettings) ? void 0 : o.useAv1) !== !1;
                if (this.hasAv1Source = !!(null == e || null == (c = e.hls) || null == (l = c.av1) ? void 0 : l.url),
                y && (null == e || null == (u = e.hls) || null == (h = u.av1) ? void 0 : h.url) ? (this.hlsSource = e.hls.av1.url,
                delete e.hls.av1) : (null == e || null == (A = e.hls) || null == (d = A.h265) ? void 0 : d.url) ? (this.hlsSource = e.hls.h265.url,
                delete e.hls.h265) : (null == e || null == (m = e.hls) || null == (p = m.h264) ? void 0 : p.url) ? (this.hlsSource = e.hls.h264.url,
                (null == e || null == (_ = e.hls) || null == (f = _.h264) ? void 0 : f.fallback) ? delete e.hls.h264.url : delete e.hls.h264) : (null == e || null == (E = e.hls) || null == (v = E.h264) ? void 0 : v.fallback) && (this.hlsSource = e.hls.h264.fallback,
                delete e.hls.h264),
                this.type = "hls",
                this.ready = !1,
                this.loaded = !1,
                this.destroyed = !1,
                this.attached = !1,
                this.playAfterSet = !1,
                this.qualities = null,
                this.storage = null,
                this.options.hlsSupport && this.hlsSource && this.options.hlsConfig && this.options.hlsConfig.libSrc)
                    return;
                this.adsEndedEventId = null,
                this.destroy()
            }
        }
        ;
        function B(e, t) {
            var i = Object.keys(e);
            if (Object.getOwnPropertySymbols) {
                var n = Object.getOwnPropertySymbols(e);
                t && (n = n.filter(function(t) {
                    return Object.getOwnPropertyDescriptor(e, t).enumerable
                })),
                i.push.apply(i, n)
            }
            return i
        }
        function F(e) {
            for (var t = 1; t < arguments.length; t++) {
                var i = null != arguments[t] ? arguments[t] : {};
                t % 2 ? B(Object(i), !0).forEach(function(t) {
                    (0,
                    C.A)(e, t, i[t])
                }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(i)) : B(Object(i)).forEach(function(t) {
                    Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(i, t))
                })
            }
            return e
        }
        var V = (0,
        P.A)(function e(t) {
            var i = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
            (0,
            O.A)(this, e),
            (0,
            C.A)(this, "sources", void 0),
            (0,
            C.A)(this, "options", void 0),
            (0,
            C.A)(this, "sourcesControllerQueue", void 0),
            (0,
            C.A)(this, "sourceControllerIndex", void 0),
            (0,
            C.A)(this, "ControllerAbstractClass", void 0),
            this.sources = t,
            this.options = i,
            this.ControllerAbstractClass = U,
            this.sourcesControllerQueue = [],
            this.fillControllerQueue(),
            this.sourceControllerIndex = 0
        }, [{
            key: "fillControllerQueue",
            value: function() {
                var e, t, i = this;
                null != (e = this.sources) && e.hls && Object.keys(this.sources.hls).length && Object.keys(this.sources.hls).forEach(function(e) {
                    i.addControllerToQueue(M),
                    i.sources.hls[e].fallback && i.addControllerToQueue(M)
                }),
                null != (t = this.sources) && t.standard && Object.keys(this.sources.standard).length && this.addControllerToQueue(x)
            }
        }, {
            key: "createNext",
            value: function() {
                var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
                if (this.sourceControllerIndex > this.sourcesControllerQueue.length - 1)
                    return new this.ControllerAbstractClass({},{});
                this.options = F(F({}, this.options), e);
                var t = new this.sourcesControllerQueue[this.sourceControllerIndex](this.sources,this.options);
                return (this.sourceControllerIndex++,
                t.destroyed) ? this.createNext(e) : t
            }
        }, {
            key: "addControllerToQueue",
            value: function(e) {
                return !!e && e.prototype instanceof this.ControllerAbstractClass && (this.sourcesControllerQueue.push(e),
                !0)
            }
        }, {
            key: "isAbstract",
            value: function(e) {
                return !!e && e.constructor === this.ControllerAbstractClass
            }
        }]);
        let H = {
            autoplay: !1,
            volume: 1,
            muted: !1,
            quality: "auto",
            preview: !0,
            lefty: !1,
            doubleTapMode: "top-down",
            useAv1: !0,
            subtitlesPrefLang: null,
            subtitlesStateByButton: null
        };
        var W = class {
            getSettings() {
                return this.settings
            }
            getDefaultSettings() {
                return this.options.default ? (0,
                b._)({}, H, this.options.default) : H
            }
            init(e) {
                this.storage = new a.A,
                this.settings = this.loadSettings(),
                e && (this.settings = (0,
                b._)({}, this.settings, e)),
                this.attachEvents()
            }
            attachEvents() {
                c.A.on(h.A.PLAYER_ON_VOLUME_CHANGE, this.changeSetting.bind(this, "volume")),
                c.A.on(h.A.PLAYER_SET_QUALITY, this.changeSetting.bind(this, "quality")),
                c.A.on(h.A.PLAYER_SET_AUTOPLAY, this.changeSetting.bind(this, "autoplay")),
                c.A.on(h.A.PLAYER_SET_PREVIEW, this.changeSetting.bind(this, "preview")),
                c.A.on(h.A.PLAYER_SET_LEFTY, this.changeSetting.bind(this, "lefty")),
                c.A.on(h.A.PLAYER_SET_DOUBLE_TAP_MODE, this.changeSetting.bind(this, "doubleTapMode")),
                c.A.on(h.A.PLAYER_SET_AV1_OPTION, this.changeSetting.bind(this, "useAv1")),
                c.A.on(h.A.PLAYER_SET_AV1_OPTION, this.reloadAfterAv1Set),
                c.A.on(h.A.SUBTITLES_SAVE_LANG, this.changeSetting.bind(this, "subtitlesPrefLang")),
                c.A.on(h.A.SUBTITLES_STATE_BY_BUTTON, this.changeSetting.bind(this, "subtitlesStateByButton"))
            }
            reloadAfterAv1Set() {
                setTimeout(()=>{
                    window.location.reload()
                }
                , 200)
            }
            changeSetting(e, t) {
                "volume" === e && (this.changeSetting("muted", t.target.muted),
                t = t.target.volume),
                null !== t && (this.settings[e] = t,
                this.saveSettings())
            }
            saveSettings() {
                try {
                    let e = JSON.stringify(this.settings);
                    this.storage.setItem(this.settingsStoreName, e)
                } catch (e) {
                    p.A.log(p.A.TYPES.IO_ERROR, "UserSettingsController", "Сan't save settings", {
                        settings: this.settings
                    })
                }
            }
            loadSettings() {
                let e = this.loadSavedSettings();
                return (0,
                b._)({}, this.getDefaultSettings(), e)
            }
            loadSavedSettings() {
                let e = this.storage.getItem(this.settingsStoreName);
                try {
                    e = JSON.parse(e)
                } catch (t) {
                    e = {},
                    p.A.log(p.A.TYPES.IO_ERROR, "UserSettingsController", "Can't parse settings", {
                        settings: this.settings
                    })
                }
                return e
            }
            constructor(e, t) {
                this.core = e,
                this.options = t || {},
                this.settingsStoreName = (null == t ? void 0 : t.settingsStoreName) || "x-player-settings",
                this.settings = {},
                this.storage = null,
                this.init(t)
            }
        }
          , G = {
            canplay: h.A.PLAYER_ON_CAN_PLAY,
            canplaythrough: h.A.PLAYER_ON_CAN_PLAY_THROUGH,
            durationchange: h.A.PLAYER_ON_DURATION_CHANGE,
            ended: h.A.PLAYER_ON_ENDED,
            error: h.A.PLAYER_ON_ERROR,
            loadeddata: h.A.PLAYER_ON_LOADED_DATA,
            loadedmetadata: h.A.PLAYER_ON_LOAD_META_DATA,
            loadstart: h.A.PLAYER_ON_LOAD_START,
            pause: h.A.PLAYER_ON_PAUSE,
            play: h.A.PLAYER_ON_PLAY,
            playing: h.A.PLAYER_ON_PLAYING,
            progress: h.A.PLAYER_ON_PROGRESS,
            ratechange: h.A.PLAYER_ON_RATECHANGE,
            seeked: h.A.PLAYER_ON_SEEKED,
            seeking: h.A.PLAYER_ON_SEEKING,
            stalled: h.A.PLAYER_ON_STALLED,
            timeupdate: h.A.PLAYER_ON_TIMEUPDATE,
            volumechange: h.A.PLAYER_ON_VOLUME_CHANGE,
            waiting: h.A.PLAYER_ON_WAITING
        };
        let q = "xplayer-paused"
          , $ = "xplayer-no-scroll"
          , K = "fullscreen-ie"
          , j = "xp-fullscreen"
          , Q = "xplayer-autoplay";
        var z = class {
            init() {
                if (this.addFhClass(),
                this.initDispatcher(),
                this.initInp(),
                this.capabilitiesService = new A(this),
                this.capabilities = this.capabilitiesService.capabilities,
                this.fallbackService = new T(this.elementId,this,this.options),
                this.options.sources = L(this.options.sources, this.capabilities),
                !this.options.sources)
                    return void this.fallbackPlayer();
                this.addXplayerDataRole(),
                this.initXPlayer(),
                this.setRtl()
            }
            addFhClass() {
                this.options.isFh && this.element.classList.add("xplayer-fh")
            }
            addXplayerDataRole() {
                this.element.setAttribute("data-role", "xplayer")
            }
            fallbackPlayer() {
                this.type = "none",
                this.fallbackService.fallbackImage()
            }
            initInp() {
                l.A.enableInpOptimizer()
            }
            initDispatcher() {
                c.A.debug = this.options.debug,
                this.dispatcher = c.A,
                this.on = (e,t,i=this,n=null,s=!1)=>this.dispatcher.on(e, t, i, n, s),
                this.once = (e,t,i=this,n=null)=>this.dispatcher.once(e, t, i, n),
                this.off = (e,t)=>this.dispatcher.off(e, t),
                this.offAllEvents = ()=>this.dispatcher.offAllEvents(),
                this.emit = (e,...t)=>this.dispatcher.emit(e, ...t)
            }
            initXPlayer() {
                if (this.videoElement = this.createVideoElement(),
                this.videoElement.id = this.videoElementExternalId || "xplayer__video",
                this.poster && this.videoElement.setAttribute("poster", this.poster),
                this.initVideoElementMutationObserver(),
                this.options.duration ? m.A.set("duration", this.options.duration) : p.A.log(p.A.TYPES.INIT_ERROR, "Core", "No duration passed", {
                    options: this.options
                }),
                this.initPlayerEvents(),
                this.initPlayingEvents(),
                this.initGlobalEvents(),
                this.states = m.A,
                this.playerErrorController = new S(this),
                this.createSettings(),
                this.createSourceControllerFactory(),
                !this.sourceController || this.sourceController.destroyed)
                    return void this.fallbackPlayer();
                this.sourceController.init(),
                this.airplayController = new u(this),
                this.preloadActivate()
            }
            createSettings() {
                this.userSettingsController = new W(this,this.options.userSettings),
                this.settings = this.userSettingsController.getSettings()
            }
            isAutoplayAfterNavigation() {
                return "true" === this.storage.getItem(Q) && (this.storage.setItem(Q, "false"),
                !0)
            }
            createSourceControllerFactory() {
                this.sourceControllerFactory = new V(this.options.sources,{
                    initialVideoQuality: this.settings.quality,
                    disableSourceFallback: this.options.disableSourceFallback,
                    getSourceAfterRedirect: this.options.getSourceAfterRedirect,
                    hlsSupport: this.capabilities.hlsJs,
                    hlsConfig: this.options.hlsConfig,
                    videoElement: this.videoElement,
                    userSettings: this.settings,
                    debug: this.options.debug
                }),
                this.sourceController = this.sourceControllerFactory.createNext()
            }
            initVideoElementMutationObserver() {
                if (!window.MutationObserver)
                    return;
                let e = 0
                  , t = new MutationObserver((function(i) {
                    i.forEach(i=>{
                        if ("attributes" === i.type && "none" === this.videoElement.style.display) {
                            if (e > 3)
                                return void t.disconnect();
                            e++,
                            this.videoElement.style.display = "block"
                        }
                    }
                    )
                }
                ).bind(this));
                t.observe(this.videoElement, {
                    attributes: !0
                })
            }
            render() {
                throw Error("Xplayer - no render method")
            }
            createVideoElement() {
                return document.createElement("video")
            }
            preloadActivate() {
                ("plain" === this.options.version || !this.options.preventFirstPlay && Array.isArray(this.options.preload) && -1 !== this.options.preload.indexOf(this.sourceController.type)) && (this.preload = !0,
                setTimeout(()=>this.sourceController.attachSource(this.videoElement), 0))
            }
            initPlayerEvents() {
                for (let e in G)
                    Object.prototype.hasOwnProperty.call(G, e) && this.videoElement.addEventListener(e, t=>this.emit(G[e], t));
                this.on(h.A.PLAYER_PLAY, this.playerPlay, this),
                this.on(h.A.PLAYER_PAUSE, this.playerPause, this)
            }
            playerPlay(e=!1) {
                if (!m.A.get("chromecast") && (this.preload = !1,
                !this.options.preventFirstPlay || this.capabilities.safari || this.capabilities.mobile || "hls" !== this.sourceController.type)) {
                    if (!this.sourceController.ready) {
                        this.capabilities.safari && this.videoElement.load(),
                        c.A.once(h.A.SOURCE_CONTROLLER_READY, this.playerPlay.bind(this, e));
                        return
                    }
                    if (m.A.get("sourceLoaded") && !e || ((this.capabilities.safari || this.capabilities.mobile && !this.options.preventFirstPlay) && this.videoElement.load(),
                    this.options.preventFirstPlay || this.sourceController.attachSource(this.videoElement)),
                    !(this.capabilities.safari && !this.capabilities.mobile && "hls" === this.sourceController.type) && this.videoElement.readyState < 2) {
                        this.playWithPromiseHandling(),
                        this.requestedPlayLoaded || this.requestedPlayCanPlay || (this.requestedPlayLoaded = this.on(h.A.PLAYER_ON_LOADED_DATA, ()=>{
                            this.emit(h.A.PLAYER_PLAY)
                        }
                        ),
                        this.requestedPlayCanPlay = this.on(h.A.PLAYER_ON_CAN_PLAY, ()=>{
                            this.emit(h.A.PLAYER_PLAY)
                        }
                        ));
                        return
                    }
                    this.options.preventFirstPlay && "plain" !== this.options.version && !0 !== e || (this.clearPlayRequests(),
                    this.playWithPromiseHandling(this.playPromiseOnSuccess, this.playPromiseOnError.bind(this)))
                }
            }
            playPromiseOnError(e) {
                c.A.emit(h.A.PLAYER_PLAY_FAILED, e),
                c.A.emit(h.A.PLAYER_PLAY_FAIL, e)
            }
            playPromiseOnSuccess() {
                c.A.emit(h.A.PLAYER_PLAY_SUCCESS)
            }
            playWithPromiseHandling(e=()=>{}
            , t=()=>{}
            ) {
                var i, n;
                (null == (n = this.videoElement.play()) || null == (i = n.then(()=>e())) ? void 0 : i.catch(e=>t(e)))instanceof window.Promise || c.A.emit(h.A.PLAYER_PLAY_VIDEO_PROMISE_NOT_SUPPORTED)
            }
            onPlayerPlay() {
                r.A.removeClass(this.element, q)
            }
            playerPause() {
                m.A.get("chromecast") || (m.A.get("swiping") || r.A.addClass(this.element, q),
                this.clearPlayRequests(),
                this.videoElement.pause(),
                this.emit(h.A.PLAYER_PAUSED))
            }
            isVideoVertical() {
                let {videoWidth: e, videoHeight: t} = this.videoElement || {};
                return t > e
            }
            setRtl() {
                this.pluginOptions.isRtl && (this.element.classList.add("xplayer-rtl"),
                this.isRtl = !0)
            }
            clearPlayRequests() {
                this.requestedPlayLoaded && this.off(h.A.PLAYER_ON_LOADED_DATA, this.requestedPlayLoaded),
                this.requestedPlayCanPlay && this.off(h.A.PLAYER_ON_CAN_PLAY, this.requestedPlayCanPlay),
                this.requestedPlayLoaded = null,
                this.requestedPlayCanPlay = null
            }
            initPlayingEvents() {
                var e;
                this.on(h.A.PLAYER_ON_PREVENT_PLAY_UNBLOCK, this.onPlayerPreventPlayUnblock, this),
                this.on(h.A.PLAYER_SET_SOURCE, this.changeQuality, this),
                this.on(h.A.PLAYER_SET_VIDEO_SOURCE, this.setVideoSource, this),
                this.on(h.A.PLAYER_FALLBACK_SOURCE, this.fallbackSource, this),
                this.on(h.A.PLAYER_SET_CURRENT_TIME, this.setCurrentTime, this),
                this.on(h.A.PLAYER_SET_VOLUME, this.setVolume, this),
                this.on(h.A.PLAYER_SET_PLAYBACK_RATE, this.setPlayBackRate, this),
                this.on(h.A.PLAYER_ON_PLAY, this.onPlayerPlay, this),
                this.on(h.A.PLAYER_TOGGLE_FULLSCREEN, this.toggleFullscreen.bind(this)),
                this.on(h.A.PLAYER_ON_FULLSCREEN_CHANGE, this.sendAccumulatedResize.bind(this)),
                this.on(h.A.PROGRESS_BAR_RESIZE, this.sendAccumulatedResize.bind(this)),
                this.on(h.A.PLAYER_TOGGLE_LARGEMODE, this.sendAccumulatedResize.bind(this)),
                this.on(h.A.PLAYER_ON_CHANGE_ORIENTATION, this.sendAccumulatedResize.bind(this)),
                this.on(h.A.PLAYER_FULLSCREEN_FAILED, this.removeFullscreenClass.bind(this)),
                this.deviceUsesFullscreenClass() && this.on(h.A.PLAYER_ON_FULLSCREEN_CHANGE, this.onFullscreenChange.bind(this)),
                (null == (e = this.pluginOptions.fallbackOnStalled) ? void 0 : e.group) && (this.on(h.A.PLAYER_ON_TIMEUPDATE, this.setStalledTimer.bind(this)),
                this.on(h.A.PLAYER_ON_PAUSE, this.clearStalledTimer.bind(this)))
            }
            clearStalledTimer() {
                clearTimeout(this.stalledTimer),
                this.stalledTimer = null
            }
            setStalledTimer() {
                this.clearStalledTimer(),
                m.A.get("playing") && (this.stalledTimer = setTimeout(this.playerOnStalled.bind(this), 15e3))
            }
            playerOnStalled() {
                var e;
                switch (null == (e = this.pluginOptions.fallbackOnStalled) ? void 0 : e.group) {
                case "b":
                    this.setCurrentTime(m.A.get("currentTime") + 1);
                    break;
                case "c":
                    this.playerPause();
                    break;
                case "d":
                    this.fallbackSource()
                }
                this.playerPlay(),
                this.setCurrentTime(m.A.get("currentTime"))
            }
            initGlobalEvents() {
                let e = e=>this.emit(h.A.PLAYER_ON_FULLSCREEN_CHANGE, e);
                this.capabilities.fullscreen ? (document.addEventListener("webkitfullscreenchange", e),
                document.addEventListener("mozfullscreenchange", e),
                document.addEventListener("fullscreenchange", e),
                document.addEventListener("MSFullscreenChange", e),
                this.capabilities.idevice && (this.videoElement.addEventListener("webkitbeginfullscreen", e, !1),
                this.videoElement.addEventListener("webkitendfullscreen", e, !1))) : this.capabilities.idevice ? (this.videoElement.addEventListener("webkitbeginfullscreen", e, !1),
                this.videoElement.addEventListener("webkitendfullscreen", e, !1)) : this.on(h.A.PLAYER_TOGGLE_FULLSCREEN, e)
            }
            setVolume(e) {
                let t = e;
                t < 0 && (t = 0),
                t > 1 && (t = 1),
                this.videoElement.volume = t,
                this.videoElement.muted = !t
            }
            onPlayerPreventPlayUnblock() {
                this.options.preventFirstPlay = !1,
                this.clearPlayRequests()
            }
            sendAccumulatedResize() {
                c.A.emit(h.A.PLAYER_ON_RESIZE)
            }
            setPlayBackRate(e, t) {
                if (!(e > 2) && !(e < .25)) {
                    if (!t) {
                        if (m.A.get("ads_playing"))
                            return void c.A.once(h.A.ADS_ENDED, this.setPlayBackRate.bind(this, e));
                        if (this.videoElement.readyState < 2) {
                            c.A.once(h.A.PLAYER_ON_PLAY, this.setPlayBackRate.bind(this, e)),
                            this.capabilities.safari || this.emit(h.A.PLAYER_PLAY);
                            return
                        }
                    }
                    this.videoElement.playbackRate = e,
                    t || this.emit(h.A.PLAYER_PLAY)
                }
            }
            changeQuality(e, t, i=!1, n=!1) {
                this.capabilities.samsung && m.A.get("ads_playing") && (i = null),
                this.capabilities.safari && !m.A.get("sourceLoaded") && this.videoElement.load(),
                e || (e = this.settings.quality),
                this.sourceController.prepareTimeupdate(t, i, n),
                this.sourceController.changeQuality(this.videoElement, e, this.options.preventFirstPlay),
                this.options.preventFirstPlay && this.emit(h.A.PLAYER_PLAY),
                this.emit(h.A.SOURCE_TYPE_CHANGE),
                this.setPlayBackRate(m.A.get("playbackRate"), !t)
            }
            setVideoSource(e) {
                this.videoElement.src = e,
                this.videoElement.load(),
                m.A.set("sourceLoaded", !0)
            }
            fallbackSource(e=!1) {
                if (!this.sourceController.fallbackSource()) {
                    if (this.sourceController = this.sourceControllerFactory.createNext(),
                    this.sourceControllerFactory.isAbstract(this.sourceController))
                        return void this.emit(h.A.PLAYER_FALLBACK_SOURCE_FAIL);
                    this.sourceController.init()
                }
                this.emit(h.A.SOURCE_TYPE_CHANGE),
                !e && (this.sourceController.changeQuality(this.videoElement),
                m.A.get("currentTime") && (this.setCurrentTime(m.A.get("currentTime")),
                this.emit(h.A.PLAYER_PLAY)))
            }
            setCurrentTime(e) {
                if (!m.A.get("sourceLoaded"))
                    return (m.A.set("currentTime", e),
                    this.options.preventFirstPlay) ? void 0 : this.sourceController.ready ? (this.sourceController.attachSource(this.videoElement),
                    void this.once(h.A.PLAYER_ON_LOAD_META_DATA, ()=>{
                        this.setCurrentTime(e)
                    }
                    )) : void c.A.once(h.A.SOURCE_CONTROLLER_READY, this.setCurrentTime, this, e);
                if (this.capabilities.safari && this.videoElement.readyState < 2) {
                    m.A.set("currentTime", e),
                    this.once(h.A.PLAYER_ON_LOADED_DATA, ()=>{
                        this.setCurrentTime(e)
                    }
                    );
                    return
                }
                if (!(m.A.get("ads_playing") || !e && 0 !== e || m.A.get("ended") && e >= this.videoElement.currentTime) && (m.A.get("ended") && e < this.videoElement.duration && m.A.set("ended", !1),
                e >= this.videoElement.duration ? e = this.videoElement.duration : e < 0 && (e = 0),
                m.A.set("currentTime", e),
                !(this.capabilities.ie && Number.isNaN(this.videoElement.duration))))
                    try {
                        this.videoElement.currentTime = m.A.get("currentTime"),
                        m.A.get("ended") && this.emit(h.A.PLAYER_PLAY)
                    } catch (e) {}
            }
            addFullscreenClass() {
                r.A.addClass(this.element, j)
            }
            removeFullscreenClass() {
                r.A.removeClass(this.element, j)
            }
            isFullscreen() {
                return !!(document.fullscreenElement || document.mozFullScreenElement || document.webkitFullscreenElement || document.msFullscreenElement || m.A.get("fullscreen"))
            }
            deviceUsesFullscreenClass() {
                let {safari: e, console: t} = this.capabilities;
                return e || t
            }
            onFullscreenChange() {
                this.deviceUsesFullscreenClass() && (this.isFullscreen() ? this.addFullscreenClass() : r.A.hasClass(this.element, j) && this.removeFullscreenClass())
            }
            toggleFullscreen() {
                if (!this.capabilities.fullscreen)
                    return void this.toggleFullscreenIE();
                if (this.isFullscreen())
                    document.exitFullscreen ? document.exitFullscreen() : document.msExitFullscreen ? document.msExitFullscreen() : document.mozCancelFullScreen ? document.mozCancelFullScreen() : document.webkitExitFullscreen ? document.webkitExitFullscreen() : document.webkitCancelFullScreen ? document.webkitCancelFullScreen() : this.videoElement.webkitExitFullscreen && this.videoElement.webkitExitFullscreen();
                else {
                    var e, t, i, n, s, r, o;
                    if (this.capabilities.iphone && this.videoElement.webkitEnterFullScreen) {
                        null == (e = this.videoElement.webkitEnterFullScreen()) || e.catch(()=>{
                            c.A.emit(h.A.PLAYER_FULLSCREEN_FAILED)
                        }
                        );
                        return
                    }
                    this.element.requestFullscreen ? null == (t = this.element.requestFullscreen()) || t.catch(()=>{
                        c.A.emit(h.A.PLAYER_FULLSCREEN_FAILED)
                    }
                    ) : this.element.msRequestFullscreen ? null == (i = this.element.msRequestFullscreen()) || i.catch(()=>{
                        c.A.emit(h.A.PLAYER_FULLSCREEN_FAILED)
                    }
                    ) : this.element.mozRequestFullScreen ? null == (n = this.element.mozRequestFullScreen()) || n.catch(()=>{
                        c.A.emit(h.A.PLAYER_FULLSCREEN_FAILED)
                    }
                    ) : this.element.webkitRequestFullscreen ? null == (s = this.element.webkitRequestFullscreen()) || s.catch(()=>{
                        c.A.emit(h.A.PLAYER_FULLSCREEN_FAILED)
                    }
                    ) : this.element.webkitRequestFullScreen ? null == (r = this.element.webkitRequestFullScreen()) || r.catch(()=>{
                        c.A.emit(h.A.PLAYER_FULLSCREEN_FAILED)
                    }
                    ) : this.videoElement.webkitEnterFullScreen && (null == (o = this.videoElement.webkitEnterFullScreen()) || o.catch(()=>{
                        c.A.emit(h.A.PLAYER_FULLSCREEN_FAILED)
                    }
                    ))
                }
            }
            toggleFullscreenIE() {
                let e = {
                    type: null
                };
                r.A.hasClass(this.element, K) ? (r.A.removeClass(document.getElementsByTagName("html")[0], $),
                r.A.removeClass(this.element, K)) : (r.A.addClass(this.element, K),
                r.A.addClass(document.getElementsByTagName("html")[0], $),
                e.type = "webkitbeginfullscreen"),
                c.A.emit(h.A.PLAYER_ON_FULLSCREEN_CHANGE, e)
            }
            setTimeOffset() {
                let e = o.A.parseTimeOffset();
                return !!e && (this.options.preventFirstPlay ? (this.autoplay = !0,
                !1) : (this.emit(h.A.PLAYER_SET_CURRENT_TIME, e),
                this.once(h.A.PLAYER_ON_SEEKED, ()=>{
                    this.emit(h.A.PLAYER_PLAY)
                }
                ),
                !0))
            }
            constructor(e, t, i, n=null) {
                this.elementId = e,
                this.element = document.getElementById(e),
                this.options = t,
                this.pluginOptions = i || {},
                this.settings = null,
                this.storage = new a.A("session"),
                this.autoplay = !1,
                this.poster = t.poster,
                this.type = "xplayer",
                this.requestedPlayLoaded = null,
                this.requestedPlayCanPlay = null,
                this.stalledTimer = null,
                this.videoElementExternalId = n,
                this.preload = !1,
                this.init()
            }
        }
    },
    1781: function(e, t, i) {
        "use strict";
        i.d(t, {
            A: function() {
                return d
            }
        });
        var n = i(90344)
          , s = i(7163)
          , r = i(10809)
          , o = i(37651)
          , a = i(54098)
          , l = i(37232);
        let c = "xplayer-paused";
        var h = class extends n.A {
            initXPlayer() {
                super.initXPlayer(),
                this.userActionController = new l.A(this,{
                    noPlayPauseUserAction: !0
                }),
                this.autoplay = !this.capabilities.idevice && this.isAutoplayAfterNavigation(),
                this.stubControls = this.options.mobileStubControls,
                this.render(),
                o.A.on(r.A.PLAYER_ON_FULLSCREEN_CHANGE, this.onFullscreenChange.bind(this)),
                this.on(r.A.ADS_ENDED, this.onAdsEnded, this),
                !this.setTimeOffset() && this.autoplay && (this.emit(r.A.PLAYER_PLAY),
                this.emit(r.A.PLAYER_PLAY_AUTOPLAY))
            }
            playPromiseOnError(e) {
                super.playPromiseOnError(e),
                this.videoElement.muted = !0
            }
            render() {
                this.videoElement.removeAttribute("controls"),
                this.videoElement.setAttribute("preload", "auto"),
                "plain" === this.options.version && (this.videoElement.setAttribute("controls", "true"),
                this.stubControls = !1),
                this.stubControls && 9 === this.capabilities.idevice && this.videoElement.setAttribute("controls", "true"),
                this.options.mobileInline && (this.videoElement.setAttribute("webkit-playsinline", !0),
                this.videoElement.setAttribute("playsinline", !0),
                this.videoElement.setAttribute("disablePictureInPicture", !0)),
                "plain" === this.options.version && s.A.addClass(this.element, "x-plain"),
                this.videoElement.muted = this.settings.muted,
                s.A.addClass(this.element, "xplayer"),
                s.A.addClass(this.element, c),
                this.options.unlimitedMaxHeight || (this.element.style.maxHeight = `${this.getElementMaxHeight()}px`),
                this.element.appendChild(this.videoElement)
            }
            getElementMaxHeight() {
                let e = window.innerHeight || window.screen.availHeight
                  , t = window.innerHeight || window.screen.availWidth;
                return e > t ? t : e
            }
            initPlayingEvents() {
                super.initPlayingEvents(),
                o.A.on(r.A.PLAYER_ON_PLAY, this.onPlayerPlay, this),
                o.A.on(r.A.PLAYER_ON_PAUSE, this.onPlayerPause, this)
            }
            onPlayerPlay() {
                var e, t, i;
                super.onPlayerPlay(),
                (null == (e = this.capabilities) || !e.safari || (null == (t = this.capabilities) ? void 0 : t.idevice) || (null == (i = this.capabilities) ? void 0 : i.ipad)) && this.stubControls && this.videoElement.setAttribute("controls", "true")
            }
            playerPause() {
                super.playerPause(),
                !this.isFullscreen() && this.stubControls && this.videoElement.removeAttribute("controls")
            }
            onPlayerPause() {
                let e = !1
                  , t = this.once(r.A.PLAYER_ON_SEEKING, ()=>{
                    e = !0
                }
                )
                  , i = this.once(r.A.PLAYER_ON_PLAYING, ()=>{
                    e = !0
                }
                )
                  , n = this.once(r.A.PLAYER_ON_TIMEUPDATE, ()=>{
                    e = !0
                }
                );
                setTimeout(()=>{
                    this.off(r.A.PLAYER_ON_SEEKING, t),
                    this.off(r.A.PLAYER_ON_PLAYING, i),
                    this.off(r.A.PLAYER_ON_TIMEUPDATE, n),
                    e || this.playerPause()
                }
                , 300)
            }
            onAdsEnded(e, t) {
                e && t && s.A.addClass(this.element, c)
            }
            onFullscreenChange() {
                !(this.isFullscreen() || a.A.get("playing")) && this.stubControls && this.videoElement.removeAttribute("controls")
            }
            changeQuality(e, t, i=!1, n=!1) {
                (!this.capabilities.safari || a.A.get("sourceLoaded") || a.A.get("ads_playing") || t) && super.changeQuality(e, t, i, n)
            }
        }
          , u = i(39689)
          , d = class extends h {
            createVideoElement() {
                let e = super.createVideoElement();
                return new u.A(this,e,this.pluginOptions,this.options.debug),
                e
            }
        }
    },
    27344: function(e, t, i) {
        "use strict";
        i.d(t, {
            A: function() {
                return a
            }
        });
        var n = i(69277)
          , s = i(18196)
          , r = {
            IO_ERROR: "IO_ERROR",
            PLAYER_ERROR: "PLAYER_ERROR",
            SOURCE_ERROR: "SOURCE_ERROR",
            SCRIPT_ERROR: "SCRIPT_ERROR",
            FALLBACK_ERROR: "FALLBACK_ERROR",
            FALLBACK_INIT: "FALLBACK_INIT",
            INIT_ERROR: "INIT_ERROR",
            NETWORK_ERROR: "NETWORK_ERROR"
        };
        let o = {};
        var a = new class {
            log(e, t, i, s) {
                let r = {
                    component: t,
                    message: i,
                    stack: Error().stack
                };
                r = (0,
                n._)({}, s, r),
                this.errorLog.push(r),
                window.Raven && window.Raven.captureMessage(`XPlayer-${e}`, {
                    extra: r
                }),
                this.debug && console.error(r)
            }
            send(e, t) {
                if (e = o[e]) {
                    try {
                        t = JSON.stringify(t)
                    } catch (e) {
                        t = "{'error': 'stringify error'}"
                    }
                    s.A.ajax("GET", `/statistics?key=${e}&data=${t}`)
                }
            }
            constructor() {
                this.debug = !1,
                this.errorLog = [],
                this.TYPES = r
            }
        }
    },
    37651: function(e, t, i) {
        "use strict";
        i.d(t, {
            A: function() {
                return c
            }
        });
        var n = i(55925)
          , s = i(84422)
          , r = i(15904)
          , o = i(86096)
          , a = i(10809)
          , l = ["USER_ACTION_BLOCK", "USER_ACTION_UNBLOCK", "USER_ACTION", "NO_USER_ACTION", "USER_ACTION_PAUSE", "USER_ACTION_UNPAUSE", "PLAYER_ON_TIMEUPDATE"]
          , c = new ((0,
        r.A)(function e(t) {
            (0,
            s.A)(this, e),
            (0,
            o.A)(this, "events", void 0),
            (0,
            o.A)(this, "eventId", void 0),
            (0,
            o.A)(this, "debug", void 0),
            this.events = {},
            this.eventId = 0,
            this.debug = t || !1
        }, [{
            key: "on",
            value: function(e, t) {
                var i = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : window
                  , n = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : void 0
                  , s = arguments.length > 4 && void 0 !== arguments[4] && arguments[4];
                if (!e)
                    throw Error("Dispatcher: no event name passed");
                if ("number" != typeof e)
                    throw TypeError("Dispatcher: event name should be a number");
                if (!t)
                    throw Error("Dispatcher: no callback passed");
                if ("function" != typeof t)
                    throw Error("Dispatcher: callback not a function");
                return -1 === Object.keys(this.events).indexOf("".concat(e)) && (this.events[e] = {}),
                this.eventId++,
                this.events[e][this.eventId] = {
                    callback: t,
                    context: i,
                    once: s,
                    extraData: n
                },
                this.eventId
            }
        }, {
            key: "once",
            value: function(e, t) {
                var i = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {}
                  , n = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : void 0;
                return this.on(e, t, i, n, !0)
            }
        }, {
            key: "offAllEvents",
            value: function() {
                this.events = {}
            }
        }, {
            key: "offMany",
            value: function() {
                var e = this
                  , t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : [];
                t.forEach(function(t) {
                    var i, s = (0,
                    n.A)(t, 2), r = s[0], o = s[1], a = null == (i = e.events) || null == (i = i[r]) ? void 0 : i[o];
                    a && (e.debug && console.info("Event listener unbound: ", r, o, a),
                    delete e.events[r][o])
                })
            }
        }, {
            key: "off",
            value: function(e, t) {
                if (!e || !t)
                    return void console.warn("Dispatcher: incorrect event name or eventId passed");
                var i = this.events[e];
                i && i[t] && delete i[t]
            }
        }, {
            key: "logEmittedEvent",
            value: function(e, t) {
                if (this.debug) {
                    var i = Object.keys(a.A)[Object.values(a.A).indexOf(e)];
                    if (-1 === l.indexOf(i))
                        try {
                            throw Error()
                        } catch (e) {
                            var n = null == e ? void 0 : e.stack;
                            console.info("Event emitted: ".concat(i), t, n)
                        }
                }
            }
        }, {
            key: "deleteEvent",
            value: function(e, t) {
                try {
                    delete this.events[e][t]
                } catch (e) {}
            }
        }, {
            key: "emit",
            value: function(e) {
                for (var t = this, i = arguments.length, n = Array(i > 1 ? i - 1 : 0), s = 1; s < i; s++)
                    n[s - 1] = arguments[s];
                this.logEmittedEvent(e, n);
                var r = this.events[e];
                r && Object.keys(r).length && Object.keys(r).forEach(function(i) {
                    var s = Number(i);
                    if (!Number.isNaN(s)) {
                        var o = r[s];
                        if (o) {
                            if (!o.context)
                                return void t.deleteEvent(e, s);
                            var a = o.extraData ? [].concat(n, [o.extraData]) : [].concat(n);
                            o.once && t.deleteEvent(e, s),
                            o.callback.apply(o.context, a)
                        }
                    }
                })
            }
        }]))
    },
    10809: function(e, t) {
        "use strict";
        t.A = {
            PLAYER_ON_CAN_PLAY: 1,
            PLAYER_ON_CAN_PLAY_THROUGH: 2,
            PLAYER_ON_DURATION_CHANGE: 3,
            PLAYER_ON_ENDED: 4,
            PLAYER_ON_ERROR: 5,
            PLAYER_ON_LOADED_DATA: 6,
            PLAYER_ON_LOAD_META_DATA: 7,
            PLAYER_ON_LOAD_START: 8,
            PLAYER_ON_PAUSE: 9,
            PLAYER_ON_PLAY: 10,
            PLAYER_ON_PLAYING: 11,
            PLAYER_ON_PROGRESS: 12,
            PLAYER_ON_RATECHANGE: 13,
            PLAYER_ON_SEEKED: 14,
            PLAYER_ON_SEEKING: 15,
            PLAYER_ON_STALLED: 16,
            PLAYER_ON_TIMEUPDATE: 17,
            PLAYER_ON_VOLUME_CHANGE: 18,
            PLAYER_ON_WAITING: 19,
            PLAYER_ERROR_CONTROLLER_BLOCK: 20,
            PLAYER_ERROR_CONTROLLER_UNBLOCK: 21,
            PLAYER_ON_PREVENT_PLAY_UNBLOCK: 22,
            PLAYER_ON_INIT: 23,
            PLAYER_ON_FULLSCREEN_CHANGE: 24,
            PLAYER_ON_SWIPE_START: 25,
            PLAYER_ON_SWIPE_END: 26,
            PLAYER_ON_SWIPE_PAUSE: 27,
            PLAYER_ON_SWIPE_PAUSE_END: 28,
            PLAYER_ON_SWIPING: 29,
            PLAYER_ON_TOUCH_MOVE_END: 30,
            PLAYER_ON_SWIPE_SEEK: 31,
            PLAYER_ON_SWIPE_SEEK_END: 32,
            PLAYER_ON_CHANGE_ORIENTATION: 33,
            PLAYER_ORIENTATION_SET_FULLSCREEN: 34,
            PLAYER_ON_RESIZE: 35,
            PLAYER_ON_PROGRESS_BAR_MOVE: 36,
            PLAYER_FULLSCREEN_FAILED: 37,
            PLAYER_ON_SPEED_BOOST_START: 38,
            PLAYER_ON_SPEED_BOOST_END: 39,
            PLAYER_PLAY: 101,
            PLAYER_PAUSE: 102,
            PLAYER_SET_VOLUME: 103,
            PLAYER_SET_AUTOPLAY: 104,
            PLAYER_SET_SOURCE: 105,
            PLAYER_FALLBACK_SOURCE: 106,
            PLAYER_FALLBACK_SOURCE_FAIL: 107,
            PLAYER_SET_PLAYBACK_RATE: 108,
            PLAYER_BEFORE_SET_SOURCE: 109,
            PLAYER_TOGGLE_FULLSCREEN: 110,
            PLAYER_TOGGLE_LARGEMODE: 111,
            PLAYER_SET_CURRENT_TIME: 112,
            PLAYER_CHANGE_TIMING: 113,
            PLAYER_ON_DECODER_ERROR: 114,
            PLAYER_SET_PREVIEW: 115,
            PLAYER_SET_SLOWMO: 116,
            PLAYER_SET_QUALITY: 117,
            PLAYER_SET_VIDEO_SOURCE: 118,
            PLAYER_PLAY_FAILED: 119,
            PLAYER_PAUSED: 120,
            PLAYER_SET_LEFTY: 121,
            PLAYER_PLAY_AUTOPLAY: 122,
            PLAYER_PLAY_VIDEO_PROMISE_NOT_SUPPORTED: 123,
            PLAYER_PLAY_SUCCESS: 124,
            PLAYER_WIRELESS_CHANGED: 125,
            PLAYER_SET_DOUBLE_TAP_MODE: 126,
            PLAYER_PLAY_FAIL: 127,
            PLAYER_SET_AV1_OPTION: 128,
            PLAYER_MOMENTS_CHANGE_SOURCE: 129,
            PLAYER_MOMENTS_VIDEO_READY_TO_PLAY: 130,
            PLAYER_MOMENTS_PRELOAD_READY: 131,
            PLAYER_MOMENTS_PRELOAD_ERROR: 132,
            PLAYER_MOMENTS_VIDEO_ERROR: 133,
            PLAYER_MOMENTS_VIDEO_FULLY_LOADED: 134,
            PLAYER_MOMENTS_ON_PRELOAD_BUFFER_FILLED: 135,
            PLAYER_MOMENTS_STOP_PRELOAD: 136,
            PLAYER_MOMENTS_PRELOAD_SET_SOURCE: 137,
            PLAYER_BOTTOM_BACKGROUND_EXTEND: 138,
            PLAYER_BOTTOM_BACKGROUND_NARROW: 139,
            MOUSE_CLICK_GLOBAL: 201,
            HELP_MENU_TOGGLE: 301,
            SETTINGS_MENU_TOGGLE: 402,
            SETTINGS_MENU_TOGGLED: 403,
            SETTINGS_RENDER_QUALITY: 404,
            USER_ACTION: 501,
            NO_USER_ACTION: 502,
            USER_ACTION_PAUSE: 503,
            USER_ACTION_UNPAUSE: 504,
            USER_ACTION_BLOCK: 505,
            USER_ACTION_UNBLOCK: 506,
            OVERLAY_MENU_TOGGLE: 601,
            TABS_NUMBER_CHANGED: 602,
            OVERLAY_MENU_TAB_OPEN: 603,
            RELATED_REFRESH_CLICK: 604,
            OVERLAY_ELEMENT_CLICK: 605,
            OVERLAY_MENU_SHARE_OPEN: 606,
            SOURCE_TYPE_CHANGE: 701,
            SOURCE_AUTO_UPDATE: 702,
            SOURCE_CONTROLLER_ON_READY: 703,
            SOURCE_CONTROLLER_ON_ERROR: 704,
            PAUSE_ACTION_BLOCK: 801,
            PAUSE_ACTION_UNBLOCK: 802,
            SHOW_LOADER: 803,
            FALLBACK_TO_IMAGE: 901,
            PROGRESS_BAR_UPDATE: 1001,
            PROGRESS_BAR_UPDATE_END: 1002,
            PROGRESS_BAR_RESIZE: 1003,
            PROGRESS_BAR_HANDLER_MOVE: 1004,
            PROGRESS_BAR_VISUAL_UPDATE: 1005,
            PLAYER_ERROR_CODE: 1101,
            SHOW_STATUS: 1201,
            CONTROLS_RESET: 1301,
            CONTROLS_PREVIEW_CLICK: 1302,
            CONTROLS_DOWNLOAD_CLICK: 1303,
            CONTROLS_FAVORITE_CLICK: 1304,
            SETTINGS_MENU_OPEN: 1305,
            CONTROLS_FULLSCREEN_CLICK: 1306,
            SHARE_MENU_OPEN: 1401,
            ADS_INIT: 1600,
            ADS_STARTED: 1601,
            ADS_ENDED: 1602,
            ADS_PLAY: 1603,
            ADS_BLOCK: 1604,
            ADS_RESUME_PLAY: 1605,
            ADS_SKIP: 1606,
            ADS_ALLOW_SKIP: 1607,
            ADS_UNBLOCK_BOTTOM_BANNER: 1608,
            ADS_ON_LINK_CLICK: 1609,
            ADS_COMPANION_READY: 1610,
            ADS_COMPANION_WIDGET_REQUEST: 1611,
            ADS_COMPANION_WIDGET_SHOWN: 1612,
            ADS_COMPANION_WIDGET_FALLBACK: 1613,
            ADS_COMPANION_WIDGET_RECEIVED: 1614,
            ADS_COMPANION_WIDGET_EXTEND: 1615,
            ADS_COMPANION_WIDGET_NARROW: 1616,
            ADS_SHOW_SKIP_AFTER_PROGRESS: 1617,
            ADS_SOURCE_FALLBACK_REQUEST: 1618,
            ADS_TRACK_METRICS: 1619,
            TOOLTIP_UPDATE: 1701,
            SOURCE_CONTROLLER_READY: 1801,
            HLS_LOADED: 1802,
            HLS_FRAG_LOADING: 1803,
            HLS_FRAG_LOADED: 1804,
            QUALITY_LIST_OPEN: 1901,
            VR_CONTROLS_LIST_OPEN: 1902,
            PLAYBACK_RATE_LIST_TOGGLE: 1903,
            SUBTITLES_LIST_TOGGLE: 1904,
            VR_CONTROLS_SET: 2001,
            VR_CONTROLS_ADDED: 2002,
            VR_CONTROLS_CHANGED: 2003,
            VR_CONTROLS_MOVED: 2004,
            VR_TRY_TOGGLE: 2005,
            VR_ANIMATE_STOP: 2006,
            VR_ANIMATE_START: 2007,
            VR_TEXTURE_CLEAR: 2008,
            VR_ADD_CROSSORIGIN: 2009,
            VR_REMOVE_CROSSORIGIN: 2010,
            VR_MODE_ENABLE: 2011,
            VR_WEBGL_RENDERER_READY: 2012,
            SUBSCRIBE_INIT: 2101,
            SUBSCRIBE_SHOW: 2102,
            SUBSCRIBE_CLICK_LOGO: 2103,
            SUBSCRIBE_CLICK_SUBSCRIBE: 2104,
            SUBSCRIBE_CLICK_UNSUBSCRIBE: 2105,
            HOVER_ELEMENT_CLICK: 2201,
            HOVER_LINK_CLICK: 2202,
            HOVER_LINK_RENDERED: 2203,
            DOWNLOAD_BUTTON_CLICK: 2301,
            LINK_CLICK: 2401,
            BANNER_BOTTOM_SHOW: 2501,
            BANNER_RENDERED: 2502,
            BANNER_BOTTOM_CLICK: 2503,
            BANNER_BOTTOM_HIDE: 2504,
            AFTERSHOT_SHOW: 2600,
            AFTERSHOT_CLOSE: 2601,
            AFTERSHOT_DESTROY: 2602,
            AFTERSHOT_RENDERED: 2603,
            AFTERSHOT_SEND_UI_CLOSE: 2604,
            REPORT_ISSUE_CLICK: 2701,
            USER_SEEK_SET_CURRENT_TIME: 2801,
            USER_SEEK_SHOW_PREVIEW: 2802,
            USER_SEEK_HIDE_PREVIEW: 2803,
            USER_SEEK_SET_CURRENT_TIME_DOUBLETAP: 2804,
            USER_SEEK_SET_CURRENT_TIME_PROGRESS_BAR: 2805,
            USER_SEEK_SET_CURRENT_TIME_SWIPE: 2806,
            STATISTICS_UI: 2900,
            VIEW_SUCCESS: 2901,
            FULLSCREEN_BUTTON_CLICK: 2902,
            FULLSCREEN_SWIPE: 2903,
            MUTE_CLICK: 2904,
            DOUBLE_TAP: 2905,
            POSTER_CLICK: 2906,
            PLAY_SMALL_BUTTON_CLICK: 2907,
            PLAY_CENTER_BUTTON_CLICK: 2908,
            SWAP_HANDS_BUTTON_CLICK: 2909,
            SPRITE_LOAD: 2910,
            SPRITE_LOAD_SUCCESS: 2911,
            SPRITE_LOAD_ERROR: 2912,
            SPRITE_INFO_LOADED: 2913,
            SPRITE_INFO_SET: 2914,
            SPRITE_USER_REQUEST: 2915,
            REMOTE_PLAYER_STATE_CHANGED: 3e3,
            REMOTE_PLAYER_LOADING_START: 3001,
            REMOTE_PLAYER_LOADING_END: 3002,
            REMOTE_PLAYER_BUFFERING: 3003,
            REMOTE_PLAYER_PLAYING: 3004,
            REMOTE_PLAYER_PAUSED: 3005,
            REMOTE_PLAYER_SESSION_START: 3006,
            REMOTE_PLAYER_SESSION_END: 3007,
            REMOTE_PLAYER_USER_REQUEST: 3008,
            REMOTE_PLAYER_CHROMECAST_LOADED: 3009,
            REMOTE_PLAYER_DEVICE_AVAILABLE: 3010,
            PLAYER_LINK_SPONSORED_SHOWN: 3100,
            PLAYER_LINK_SPONSORED_CLICK: 3101,
            SUBTITLES_SHOW: 3200,
            SUBTITLES_HIDE: 3201,
            SUBTITLES_HIDE_BUTTON_CLICK: 3202,
            SUBTITLES_SHOW_BUTTON_CLICK: 3203,
            SUBTITLES_SET_LANG: 3204,
            SUBTITLES_SAVE_LANG: 3205,
            SUBTITLES_SET_DEFAULT_LANG: 3206,
            SUBTITLES_STATE_BY_BUTTON: 3207,
            SUBTITLES_READY: 3208,
            SUBTITLES_LOADED: 3209,
            SUBTITLES_NO_AVAILABLE_TRACKS: 3210,
            SUBTITLES_SHOWN: 3211,
            SUBTITLES_TRACK_LOADED: 3212,
            SUBTITLES_TRACK_LOAD_FAILED: 3213,
            ACTIONS_ADD_THUMB_DESCRIPTION: 3300,
            ACTIONS_REMOVE_THUMB_DESCRIPTION: 3301,
            ACTIONS_SHOW_GALLERY: 3302,
            ACTIONS_HIDE_GALLERY: 3303,
            ACTIONS_ACTION_SELECT: 3304,
            ACTIONS_OPEN_BUTTON_RESET: 3305,
            SFW_VERIFY: 3400,
            NEXT_VIDEO_BUTTON_NEXT_CLICK: 3500,
            NEXT_VIDEO_BUTTON_PREVIOUS_CLICK: 3501,
            NEXT_VIDEO_PREVIEW_HIDE: 3502,
            NEXT_VIDEO_PREVIEW_SHOW_NEXT: 3503,
            NEXT_VIDEO_PREVIEW_SHOW_PREVIOUS: 3504,
            ADBLOCK_STATUS_UPDATE: 3600,
            HOT_LOOP_BUTTON_CLICK: 3700,
            HOT_LOOP_ACTIVATE: 3701,
            HOT_LOOP_DEACTIVATE: 3702,
            HOT_LOOP_LOOP_COUNT: 3703,
            HOT_LOOP_DISABLED_CHANGE: 3704
        }
    },
    42691: function(e, t, i) {
        "use strict";
        var n = i(5688);
        t.A = {
            1: n.A.ABORTED,
            2: n.A.NETWORK,
            3: n.A.DECODER,
            4: n.A.SOURCE
        }
    },
    5688: function(e, t) {
        "use strict";
        t.A = {
            ABORTED: 1,
            NETWORK: 2,
            DECODER: 3,
            SOURCE: 4
        }
    },
    54098: function(e, t, i) {
        "use strict";
        i.d(t, {
            A: function() {
                return r
            }
        });
        var n = i(10809)
          , s = i(37651)
          , r = new class {
            getDefaultStates() {
                return {
                    ads: !1,
                    ads_playing: !1,
                    ads_preload: !1,
                    ads_skip_offset: 5,
                    error: !1,
                    playing: !1,
                    ended: !1,
                    duration: 0,
                    sourceLoaded: !1,
                    remoteSourceLoading: !1,
                    chromecast: !1,
                    currentTime: 0,
                    savedCurrentTime: 0,
                    playbackRate: 1,
                    swiping: !1,
                    fullscreen: !1,
                    seeking: !1,
                    orientation: null,
                    play_requested: !1,
                    preroll_video_type: null,
                    preroll_type: null,
                    pause_action_blocked: !1
                }
            }
            init() {
                s.A.on(n.A.ADS_STARTED, this.setAds.bind(this)),
                s.A.on(n.A.ADS_ENDED, this.clearAds.bind(this)),
                s.A.on(n.A.PLAYER_ON_PLAY, this.set.bind(this, "playing", !0)),
                s.A.on(n.A.PLAYER_ON_PLAYING, this.set.bind(this, "playing", !0)),
                s.A.on(n.A.PLAYER_ON_PAUSE, this.set.bind(this, "playing", !1)),
                s.A.on(n.A.PLAYER_ON_ENDED, this.set.bind(this, "playing", !1)),
                s.A.on(n.A.PLAYER_ON_PLAY, this.set.bind(this, "play_requested", !0)),
                s.A.on(n.A.PLAYER_ON_SWIPE_START, this.set.bind(this, "swiping", !0)),
                s.A.on(n.A.PLAYER_ON_SWIPE_SEEK_END, this.set.bind(this, "swiping", !1)),
                s.A.on(n.A.PLAYER_ON_ENDED, this.set.bind(this, "ended", !0)),
                s.A.on(n.A.PLAYER_ON_PLAY, this.set.bind(this, "ended", !1)),
                s.A.on(n.A.PLAYER_ON_PLAYING, this.set.bind(this, "ended", !1)),
                s.A.on(n.A.PLAYER_ON_TIMEUPDATE, this.onTimeupdate, this),
                s.A.on(n.A.PLAYER_ON_DURATION_CHANGE, this.onDurationChange, this),
                s.A.on(n.A.PLAYER_ON_RATECHANGE, this.onRateChange, this),
                s.A.on(n.A.PLAYER_SET_PLAYBACK_RATE, this.onSetPlaybackRate, this),
                s.A.on(n.A.PLAYER_ON_FULLSCREEN_CHANGE, this.toggleFullscreen, this)
            }
            toggleFullscreen() {
                this.set("fullscreen", !this.get("fullscreen"))
            }
            onDurationChange(e) {
                this.set("duration", e.target.duration)
            }
            onSetPlaybackRate(e) {
                this.set("playbackRate", parseFloat(e))
            }
            onRateChange(e) {
                this.set("playbackRate", parseFloat(e.target.playbackRate))
            }
            onTimeupdate(e) {
                this.states.chromecast || this.set("currentTime", e.target.currentTime)
            }
            set(e, t) {
                this.states[e] = t
            }
            setAds() {
                this.set("ads_playing", !0),
                this.set("ads_preload", !1)
            }
            clearAds() {
                this.set("ads", !1),
                this.set("ads_playing", !1),
                this.set("ads_preload", !1),
                this.set("preroll_video_type", null),
                this.set("preroll_type", null)
            }
            get(e) {
                return this.states.hasOwnProperty(e) ? this.states[e] : null
            }
            constructor() {
                this.states = this.getDefaultStates(),
                this.init()
            }
        }
    },
    37232: function(e, t, i) {
        "use strict";
        i.d(t, {
            u: function() {
                return a
            }
        });
        var n = i(7163)
          , s = i(10809)
          , r = i(37651);
        let o = "no-user-action"
          , a = (e,t,i)=>{
            e.capabilities.mobilePlayer2 && n.A.hasClass(t, i) && t.addEventListener("touchstart", i=>{
                n.A.hasClass(e.element, "no-user-action") ? (i.preventDefault(),
                r.A.emit(s.A.USER_ACTION, 3e3)) : i.target === t ? r.A.emit(s.A.NO_USER_ACTION) : r.A.emit(s.A.USER_ACTION, 3e3)
            }
            )
        }
        ;
        t.A = class {
            init() {
                this.core.on(s.A.USER_ACTION, this.onUserAction, this),
                this.core.on(s.A.NO_USER_ACTION, this.onNoUserAction, this),
                this.core.on(s.A.USER_ACTION_PAUSE, this.onUserActionPause, this),
                this.core.on(s.A.USER_ACTION_UNPAUSE, this.onUserActionUnpause, this),
                this.core.on(s.A.USER_ACTION_BLOCK, this.onUserActionBlock, this),
                this.core.on(s.A.USER_ACTION_UNBLOCK, this.onUserActionUnblock, this),
                this.options.noPlayPauseUserAction || (this.core.on(s.A.PLAYER_ON_PLAY, this.onPlayerPlay, this),
                this.core.on(s.A.PLAYER_ON_PAUSE, this.onPlayerPause, this),
                this.core.on(s.A.PLAYER_ON_ENDED, this.onPlayerEnded, this)),
                this.emitNoUserAction = this.core.emit.bind(this, s.A.NO_USER_ACTION)
            }
            onUserAction(e) {
                n.A.hasClass(this.core.element, o) && (n.A.removeClass(this.core.element, o),
                this.hasNoUserAction = !1),
                this.clearUserActionTimeout(),
                this.userActionBlocked || this.userActionPaused || (this.core.options.isNonNativeAndroidFullscreen && (this.core.videoElement.setAttribute("controls", !0),
                this.core.videoElement.focus()),
                e && (e = Number.isInteger(e) ? e : 3e3,
                this.userActionTimeout = setTimeout(this.emitNoUserAction, e)))
            }
            onUserActionBlock(e=!1) {
                this.userActionBlocked = !0,
                e && (this.userActionForceBlock = !0),
                this.clearUserActionTimeout()
            }
            onUserActionUnblock(e=!1) {
                (!this.userActionForceBlock || e) && (this.userActionForceBlock = !1,
                this.userActionBlocked = !1,
                this.core.capabilities.mobile && this.core.options.hasDSA ? this.core.emit(s.A.USER_ACTION, 500) : this.core.emit(s.A.USER_ACTION, !0))
            }
            onUserActionPause() {
                this.userActionPaused = !0,
                this.clearUserActionTimeout()
            }
            onUserActionUnpause() {
                this.userActionPaused = !1
            }
            onNoUserAction() {
                n.A.addClass(this.core.element, o),
                this.hasNoUserAction = !0,
                this.core.options.isNonNativeAndroidFullscreen && this.core.videoElement.removeAttribute("controls")
            }
            clearUserActionTimeout() {
                null !== this.userActionTimeout && (clearTimeout(this.userActionTimeout),
                this.userActionTimeout = null)
            }
            onPlayerPlay() {
                this.core.emit(s.A.USER_ACTION, !0)
            }
            onPlayerPause() {
                this.core.emit(s.A.USER_ACTION, !0)
            }
            onPlayerEnded() {
                this.core.emit(s.A.USER_ACTION_BLOCK),
                this.core.once(s.A.PLAYER_ON_PLAYING, ()=>{
                    this.core.emit(s.A.USER_ACTION_UNBLOCK)
                }
                )
            }
            getHasNoUserAction() {
                return this.hasNoUserAction
            }
            constructor(e, t) {
                this.core = e,
                this.options = t || {},
                this.userActionTimeout = null,
                this.userActionPaused = !1,
                this.userActionBlocked = !1,
                this.hasNoUserAction = !1,
                this.userActionForceBlock = !1,
                this.init()
            }
        }
    },
    7163: function(e, t) {
        "use strict";
        function i(e, t, n=5) {
            if (!e)
                throw TypeError("Element must be set");
            if (e.get && (e = e.get(0)),
            "function" != typeof t)
                throw TypeError("Check must be a function");
            "number" != typeof n && (n = 5);
            let s = 0
              , r = e;
            for (; r && s++ < n && r !== document.body; ) {
                if (t(r))
                    return r;
                r = r.parentElement
            }
            return !1
        }
        t.A = {
            css(e, t, i) {
                if (!e)
                    throw TypeError("Element not specified");
                if (!t || "string" != typeof t && "object" != typeof t)
                    throw TypeError("Style must be a string or an object");
                if (void 0 === i && "string" == typeof t)
                    return (e.style[t] || window.getComputedStyle(e)).getPropertyValue(t);
                let n = (e,t,i)=>{
                    if (!1 === i)
                        return e.style.removeProperty(t);
                    "number" == typeof i && -1 === "zoom,opacity,z-index".indexOf(t) && (i += "px"),
                    e.style.setProperty(t, i)
                }
                ;
                if ("string" == typeof t)
                    n(e, t, i);
                else
                    for (let i in t)
                        t.hasOwnProperty(i) && n(e, i, t[i])
            },
            findElPosition(e) {
                let t;
                if (e.getBoundingClientRect && e.parentNode && (t = e.getBoundingClientRect()),
                !t)
                    return {
                        left: 0,
                        top: 0,
                        bottom: e.offsetHeight,
                        right: e.offsetWidth
                    };
                let i = document.documentElement
                  , n = document.body
                  , s = i.clientLeft || n.clientLeft || 0
                  , r = window.pageXOffset || n.scrollLeft
                  , o = t.left + r - s
                  , a = i.clientTop || n.clientTop || 0
                  , l = window.pageYOffset || n.scrollTop;
                return {
                    left: Math.round(o),
                    top: Math.round(t.top + l - a),
                    width: Math.round(e.offsetWidth),
                    height: Math.round(e.offsetHeight)
                }
            },
            addClass(e, t) {
                let i = e.className ? e.className.split(" ") : [];
                for (let e = 0; e < i.length; e++)
                    if (i[e] == t)
                        return;
                i.push(t),
                e.className = i.join(" ")
            },
            hasClass: (e,t)=>` ${e.className} `.indexOf(` ${t} `) > -1,
            removeClass(e, t) {
                let i = e.className.split(" ");
                for (let e = 0; e < i.length; e++)
                    i[e] == t && (i.splice(e, 1),
                    e--);
                e.className = i.join(" ")
            },
            getScript: e=>new Promise((t,i)=>{
                let n = document.createElement("script");
                n.type = "text/javascript",
                n.src = e,
                n.defer = !0,
                n.onload = t,
                n.onerror = i,
                document.body.appendChild(n)
            }
            ),
            isElement(e) {
                try {
                    return e instanceof HTMLElement
                } catch (t) {
                    return "object" == typeof e && 1 === e.nodeType && "object" == typeof e.style && "object" == typeof e.ownerDocument
                }
            },
            checkTransformVendor() {
                let e = document.createElement("div");
                if (null == e.style.transform) {
                    let t = ["Webkit", "Moz", "ms"];
                    for (let i in t)
                        if (void 0 !== e.style[`${t[i]}Transform`])
                            return `${t[i]}Transform`
                }
                return "transform"
            },
            hasParentByData: (e,t,n=5)=>i(e, e=>!!(null == e ? void 0 : e.hasAttribute(`data-${t}`)), n),
            hasParentByTag: (e,t,n=5)=>i(e, e=>(null == e ? void 0 : e.tagName.toLowerCase()) === t.toLowerCase(), n),
            hasParent: (e,t,n=5)=>i(e, e=>e === t, n),
            removeElement(e) {
                var t, i;
                null == e || null == (i = e.parentNode) || null == (t = i.removeChild) || t.call(i, e)
            }
        }
    },
    18196: function(e, t) {
        "use strict";
        class i {
            static ajax(e, t, n=!1, s={}) {
                let r = new ("onload"in new XMLHttpRequest ? XMLHttpRequest : window.XDomainRequest), o, a = "{}";
                if (!s.clean && n)
                    if ("GET" === e)
                        o = i.serializeQuery(n),
                        t += `${(t.includes("?") ? "&" : "?") + o}&_=${Math.random()}`;
                    else
                        try {
                            a = JSON.stringify(n)
                        } catch (e) {
                            a = "{error: stringify error}"
                        }
                s.no_cache && (t += `${(t.includes("?") ? "&" : "?") + o}&_=${Math.random()}`),
                r.open(e, t, !s.sync),
                s.fetch || s.clean || r.setRequestHeader("X-Requested-With", "XMLHttpRequest"),
                s.clean || (r.withCredentials = !1 !== s.credentials,
                r.aborting = !1),
                s.contentType && r.setRequestHeader("Content-Type", s.contentType);
                let l = new Promise((e,t)=>{
                    r.onreadystatechange = function() {
                        if (2 === this.readyState && s.headersReceivedCallback && "function" == typeof s.headersReceivedCallback && s.headersReceivedCallback(),
                        4 === this.readyState) {
                            if (200 !== this.status)
                                return void t({
                                    statusText: r.aborting ? "abort" : r.statusText,
                                    status: r.status,
                                    responseJSON: r.responseText,
                                    responseURL: r.responseURL,
                                    headers: r.getAllResponseHeaders()
                                });
                            e(s.clean ? r : r.responseText)
                        }
                    }
                }
                );
                return l.abort = function() {
                    r.aborting = !0,
                    r.abort()
                }
                ,
                r.send(a),
                l
            }
            static getHeadRedirect(e, t=!1) {
                return i.ajax("HEAD", e, !1, {
                    sync: t,
                    clean: !0
                })
            }
            static serializeQuery(e) {
                let t = [];
                for (let i in e)
                    e.hasOwnProperty(i) && t.push(`${encodeURIComponent(i)}=${encodeURIComponent(e[i])}`);
                return t.join("&")
            }
            static sendBeacon(e, t=null) {
                let n = "";
                if (t)
                    try {
                        n = JSON.stringify(t)
                    } catch (e) {
                        return Promise.reject()
                    }
                if (navigator.sendBeacon)
                    return navigator.sendBeacon(e, n),
                    Promise.resolve();
                let s = "GET"
                  , r = {
                    async: !1
                };
                return n.length > 0 && (s = "POST",
                r.raw = !0),
                i.ajax(s, e, n, r)
            }
        }
        t.A = i
    },
    20346: function(e, t, i) {
        "use strict";
        function n(e, t=0) {
            return Number(e).toLocaleString("jp" === window.xhLocaleName ? "ja" : window.xhLocaleName || "en", {
                minimumFractionDigits: t,
                maximumFractionDigits: t
            })
        }
        function s(e, t=0) {
            return Math.round(e * Math.pow(10, t)) / Math.pow(10, t)
        }
        i.d(t, {
            G: function() {
                return n
            },
            M: function() {
                return s
            }
        })
    },
    60383: function() {
        window.console || (window.console = {
            log() {},
            error() {},
            info() {}
        }),
        Array.isArray || (Array.isArray = function(e) {
            return "[object Array]" === Object.prototype.toString.call(e)
        }
        ),
        Array.prototype.map || (Array.prototype.map = function(e, t) {
            let i, n, s;
            if (this == null)
                throw TypeError(" this is null or not defined");
            let r = Object(this)
              , o = r.length >>> 0;
            if ("function" != typeof e)
                throw TypeError(`${e} is not a function`);
            for (arguments.length > 1 && (i = t),
            n = Array(o),
            s = 0; s < o; ) {
                var a, l;
                s in r && (a = r[s],
                l = e.call(i, a, s, r),
                n[s] = l),
                s++
            }
            return n
        }
        ),
        window.requestAnimationFrame || (window.requestAnimationFrame = window.mozRequestAnimationFrame || window.webkitRequestAnimationFrame || window.msRequestAnimationFrame || function(e) {
            return setTimeout(e, 1e3 / 60)
        }
        ),
        window.cancelAnimationFrame || (window.cancelAnimationFrame = window.mozCancelAnimationFrame || function(e) {
            clearTimeout(e)
        }
        )
    },
    90942: function(e, t) {
        "use strict";
        t.A = class {
            init(e) {
                "session" === e && this.checkSessionStorage(),
                "cookie" !== e && this.checkLocalStorage(),
                this.checkCookie()
            }
            checkLocalStorage() {
                try {
                    window.localStorage.setItem("check", 1),
                    window.localStorage.getItem("check"),
                    window.localStorage.removeItem("check"),
                    this.localStorageAvailable = !0
                } catch (e) {}
            }
            checkSessionStorage() {
                try {
                    window.sessionStorage.setItem("check", 1),
                    window.sessionStorage.getItem("check"),
                    window.sessionStorage.removeItem("check"),
                    this.sessionStorageAvailable = !0
                } catch (e) {}
            }
            checkCookie() {
                try {
                    let e = ` ${document.cookie}`;
                    this.cookieAvailable = !!e
                } catch (e) {}
            }
            getCookie(e) {
                let t = ` ${document.cookie}`
                  , i = ` ${e}=`
                  , n = null
                  , s = 0
                  , r = 0;
                return t.length > 0 && -1 !== (s = t.indexOf(i)) && (s += i.length,
                -1 === (r = t.indexOf(";", s)) && (r = t.length),
                n = unescape(t.substring(s, r))),
                n
            }
            setCookie(e, t, i) {
                let n, s = new Date;
                if (s.setTime(s.getTime() + 6e4 * i),
                n = `${e}=${t}; expires=${s.toGMTString()}; path=/;`,
                document.domain.length) {
                    let e = document.domain.replace(/^(www\.)/, "").split(".");
                    for (; e.length > 2; )
                        e.shift();
                    n += `domain=${e.join(".").replace(/(^\.*)|(\.*$)/g, "")};`
                }
                document.cookie = n
            }
            setItem(e, t, i=8760) {
                return this.sessionStorageAvailable ? window.sessionStorage.setItem(e, t) : this.localStorageAvailable ? window.localStorage.setItem(e, t) : (this.cookieAvailable && this.setCookie(e, t, i),
                null)
            }
            getItem(e) {
                return this.sessionStorageAvailable ? window.sessionStorage.getItem(e) : this.localStorageAvailable ? window.localStorage.getItem(e) : this.cookieAvailable ? this.getCookie(e) : null
            }
            constructor(e) {
                this.localStorageAvailable = !1,
                this.cookieAvailable = !1,
                this.sessionStorageAvailable = !1,
                this.init(e)
            }
        }
    },
    26614: function(e, t, i) {
        "use strict";
        function n(e) {
            return -1 === e.indexOf("?") ? "?" : "&"
        }
        function s(e) {
            return (null == e ? void 0 : e.indexOf) ? -1 !== e.indexOf("cdn13") ? "zil" : -1 !== e.indexOf("lvlt") || -1 !== e.indexOf("lmn") || -1 !== e.indexOf("lmo") ? "l3" : -1 !== e.indexOf("xhcdn") || -1 !== e.indexOf("ahcdn") ? "adv" : "undefined" : "undefined"
        }
        i.d(t, {
            D: function() {
                return s
            },
            i: function() {
                return n
            }
        })
    },
    73424: function(e, t, i) {
        "use strict";
        i.d(t, {
            A: function() {
                return ed
            }
        });
        var n, s, r = i(99851), o = i(69277), a = i(7163), l = i(38432), c = i(11570), h = i(52402), u = i(91643), d = i(84422), A = i(15904), p = i(86096), m = i(18196);
        function v(e, t) {
            var i = Object.keys(e);
            if (Object.getOwnPropertySymbols) {
                var n = Object.getOwnPropertySymbols(e);
                t && (n = n.filter(function(t) {
                    return Object.getOwnPropertyDescriptor(e, t).enumerable
                })),
                i.push.apply(i, n)
            }
            return i
        }
        var E = {
            companion_click: "companion_click",
            companion_after_end_click: "companion_after_end_click",
            cta_click: "cta_click",
            link_click: "link_click",
            link_after_end_click: "link_after_end_click",
            completed_click: "completed_click",
            video_click: "video_click"
        }
          , f = function(e) {
            for (var t = 1; t < arguments.length; t++) {
                var i = null != arguments[t] ? arguments[t] : {};
                t % 2 ? v(Object(i), !0).forEach(function(t) {
                    (0,
                    p.A)(e, t, i[t])
                }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(i)) : v(Object(i)).forEach(function(t) {
                    Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(i, t))
                })
            }
            return e
        }({
            play: "play",
            request: "request",
            response: "response",
            parsed: "parsed",
            shown: "shown",
            viewToSkip: "viewToSkip",
            viewToEnd: "viewToEnd",
            skip: "skip",
            click: "click"
        }, E)
          , _ = "clickTracking"
          , y = "preroll_impression"
          , g = "preroll_shown_5s"
          , S = "preroll_error"
          , b = "preroll_fallback_request"
          , T = {
            start: !1,
            firstQuartile: !1,
            midpoint: !1,
            thirdQuartile: !1
        }
          , k = {
            xml_parsing: 100,
            wrapper_general: 300,
            wrapper_connection: 301,
            linear_general: 400,
            video_not_found: 401,
            video_file_timeout: 402,
            video_format_not_supported: 403,
            video_play_error: 405,
            unknown: 900
        }
          , L = "xplayer-ads-preload"
          , O = "xplayer-ads-loading"
          , P = {
            skip: ".xplayer-ads-block__skip",
            link: ".xplayer-ads-block__link",
            callToAction: ".xplayer-ads-block__cta",
            video: ".xplayer-ads-block__video",
            durationTiming: ".xplayer-ads-block__info-new--timing",
            skipTiming: ".xplayer-ads-block__skip--timing",
            companion: ".xplayer-ads-block-companion",
            completed: ".xplayer-ads-block-companion-completed",
            footer: ".xplayer-ads-block__footer",
            footerCompleted: ".xplayer-ads-block__footer-completed",
            pauseButton: ".xplayer-ads-block__pause-button"
        };
        function C(e, t) {
            var i = Object.keys(e);
            if (Object.getOwnPropertySymbols) {
                var n = Object.getOwnPropertySymbols(e);
                t && (n = n.filter(function(t) {
                    return Object.getOwnPropertyDescriptor(e, t).enumerable
                })),
                i.push.apply(i, n)
            }
            return i
        }
        function R(e) {
            for (var t = 1; t < arguments.length; t++) {
                var i = null != arguments[t] ? arguments[t] : {};
                t % 2 ? C(Object(i), !0).forEach(function(t) {
                    (0,
                    p.A)(e, t, i[t])
                }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(i)) : C(Object(i)).forEach(function(t) {
                    Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(i, t))
                })
            }
            return e
        }
        (n = s || (s = {})).XHL = "xhl",
        n.LIVE = "xhl-live",
        n.TS = "ts",
        n.FF_MOMENT = "ff-moment";
        var w = (0,
        A.A)(function e(t) {
            var i = t.parser
              , n = t.options;
            (0,
            d.A)(this, e),
            (0,
            p.A)(this, "url", void 0),
            (0,
            p.A)(this, "adType", void 0),
            (0,
            p.A)(this, "parser", void 0),
            (0,
            p.A)(this, "options", void 0),
            (0,
            p.A)(this, "request", void 0),
            (0,
            p.A)(this, "data", void 0),
            (0,
            p.A)(this, "serverTimeout", void 0),
            (0,
            p.A)(this, "abortServerTimeout", void 0),
            (0,
            p.A)(this, "requestRejected", void 0),
            (0,
            p.A)(this, "wrapperDepth", void 0),
            (0,
            p.A)(this, "trackingFunction", void 0),
            (0,
            p.A)(this, "trackGaFunction", void 0),
            this.parser = i,
            this.options = void 0 === n ? {} : n,
            this.trackingFunction = null,
            this.trackGaFunction = null,
            this.abortServerTimeout = null,
            this.wrapperDepth = 0
        }, [{
            key: "setNewAdUrl",
            value: function(e) {
                this.url = e
            }
        }, {
            key: "setNewAdType",
            value: function(e) {
                this.adType = e
            }
        }, {
            key: "loadData",
            value: function(e, t) {
                var i = this;
                return this.trackingFunction = e,
                new Promise(function(n, s) {
                    i.getData(i.url, e, t).then(function(n) {
                        return i.getWrappersData(n, e, t)
                    }).then(function(e) {
                        n(i.shareComplaintLink(e).map(function(e) {
                            return i.mapAd(e)
                        }))
                    }).catch(function(e) {
                        s({
                            error: e
                        })
                    })
                }
                )
            }
        }, {
            key: "shareComplaintLink",
            value: function(e) {
                var t, i = null == (t = (0,
                h.A)(e).reverse().find(function(e) {
                    return e.complaintLink
                })) ? void 0 : t.complaintLink;
                return i ? e.map(function(e) {
                    return R(R({}, e), {}, {
                        complaintLink: i
                    })
                }) : e
            }
        }, {
            key: "mapAd",
            value: function(e) {
                return e ? e.error ? {
                    error: e.error
                } : {
                    ctaText: e.ctaText,
                    duration: e.duration,
                    companion: e.companion,
                    isWrapper: e.isWrapper,
                    link: e.link,
                    linearAdvertiser: e.linearAdvertiser,
                    wrapperAdvertiser: e.wrapperAdvertiser,
                    skipOffset: e.skipOffset,
                    title: e.title,
                    mediaFiles: e.mediaFiles,
                    errorUrls: [].concat(e.errorTrackingLinearUrls, e.errorUrls).filter(function(e) {
                        return e
                    }),
                    trackingUrls: e.trackingEvents,
                    error: e.error,
                    complaintLink: e.complaintLink,
                    poster: e.poster
                } : null
            }
        }, {
            key: "headersReceivedCallback",
            value: function() {
                this.serverTimeout && (clearTimeout(this.serverTimeout),
                this.serverTimeout = null)
            }
        }, {
            key: "getData",
            value: function(e, t, i) {
                var n = this
                  , r = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : {};
                return new Promise(function(o) {
                    var a = r.vastAdTagUri ? "wrapper" : "preroll";
                    i && i("request"),
                    t && t("".concat(a, "_sent")),
                    n.request = m.A.ajax("GET", e, null, {
                        headersReceivedCallback: n.headersReceivedCallback.bind(n),
                        fetch: !0,
                        credentials: n.adType === s.TS,
                        no_cache: !0
                    }),
                    n.request.then(function(e) {
                        return i && i("response"),
                        t && t("".concat(a, "_response")),
                        n.parser.parseData(e, n.options, r)
                    }).then(function(e) {
                        t && t("".concat(a, "_parsed")),
                        o(e)
                    }).catch(function(e) {
                        n.requestRejected = !0;
                        var t = r.vastAdTagUri ? k.wrapper_connection : null == e ? void 0 : e.errorVast;
                        o([{
                            error: R(R({}, e), {}, {
                                errorVast: t || k.unknown
                            })
                        }])
                    }),
                    n.setServerTimeout()
                }
                )
            }
        }, {
            key: "getWrappersData",
            value: function(e, t, i) {
                var n = this;
                return new Promise(function(s, r) {
                    if (n.wrapperDepth++,
                    !n.hasWrappers(e) || n.wrapperDepth > Number(n.options.wrappersDepthLimit))
                        return void s(e);
                    Promise.all(e.map(function(e) {
                        return null != e && e.vastAdTagUri ? n.getData(e.vastAdTagUri, t, i, e) : [e]
                    })).then(function(e) {
                        return e.reduce(function(e, t) {
                            return e.concat(t)
                        }, [])
                    }).then(function(e) {
                        return n.getWrappersData(e, t, i)
                    }).then(s).catch(r)
                }
                )
            }
        }, {
            key: "setServerTimeout",
            value: function() {
                var e = this
                  , t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null;
                t && (this.abortServerTimeout = t),
                this.abortServerTimeout && this.request && (this.serverTimeout = setTimeout(function() {
                    e.requestRejected || (e.trackingFunction && e.trackingFunction("preroll_timeout"),
                    e.request.abort())
                }, 1e3 * this.abortServerTimeout))
            }
        }, {
            key: "hasWrappers",
            value: function(e) {
                return Array.isArray(e) && e.some(function(e) {
                    return e.vastAdTagUri
                })
            }
        }, {
            key: "abort",
            value: function() {
                return !!this.request && (this.request.abort(),
                !0)
            }
        }])
          , N = i(97590);
        function D(e, t) {
            var i = Object.keys(e);
            if (Object.getOwnPropertySymbols) {
                var n = Object.getOwnPropertySymbols(e);
                t && (n = n.filter(function(t) {
                    return Object.getOwnPropertyDescriptor(e, t).enumerable
                })),
                i.push.apply(i, n)
            }
            return i
        }
        function I(e) {
            for (var t = 1; t < arguments.length; t++) {
                var i = null != arguments[t] ? arguments[t] : {};
                t % 2 ? D(Object(i), !0).forEach(function(t) {
                    (0,
                    p.A)(e, t, i[t])
                }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(i)) : D(Object(i)).forEach(function(t) {
                    Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(i, t))
                })
            }
            return e
        }
        var U = (0,
        A.A)(function e() {
            (0,
            d.A)(this, e),
            (0,
            p.A)(this, "parsedData", void 0),
            (0,
            p.A)(this, "xmlDoc", void 0),
            (0,
            p.A)(this, "linear", void 0),
            (0,
            p.A)(this, "wrapper", void 0),
            (0,
            p.A)(this, "options", void 0)
        }, [{
            key: "parseLinearAd",
            value: function(e, t) {
                if (this.options = t,
                this.xmlDoc = new DOMParser().parseFromString(e, "text/xml"),
                this.linear = null == (i = this.xmlDoc) ? void 0 : i.querySelector("Creatives Creative Linear"),
                this.parsedData = {
                    trackingEvents: {},
                    mediaFiles: []
                },
                !this.linear)
                    throw Error("no linear ad data");
                this.parsedData.linearAdvertiser = null == (n = this.xmlDoc.querySelector("Advertiser")) ? void 0 : n.textContent;
                var i, n, s = [].slice.call(this.linear.querySelectorAll("Tracking")), r = [].slice.call(this.xmlDoc.querySelectorAll("Impression"));
                return this.getOffsetAndDuration().getCtaAndTitle().getMediaFiles().getClickEvents(this.linear).getTrackingEvents(s).getImpressions(r).getCompanion().getExtension(),
                this.parsedData
            }
        }, {
            key: "parseWrapper",
            value: function(e) {
                if (this.xmlDoc = new DOMParser().parseFromString(e, "text/xml"),
                this.wrapper = null == (t = this.xmlDoc) ? void 0 : t.querySelector("Wrapper"),
                !this.wrapper)
                    throw Error("no wrapper ad data");
                this.parsedData = {
                    trackingEvents: {},
                    isWrapper: !0
                },
                this.parsedData.vastAdTagUri = null == (i = this.wrapper.querySelector("VASTAdTagURI")) ? void 0 : i.textContent.trim(),
                this.parsedData.wrapperAdvertiser = (null == (n = this.wrapper.querySelector("Advertiser")) ? void 0 : n.textContent.trim()) || "";
                var t, i, n, s = [].slice.call(this.wrapper.querySelectorAll("Tracking")), r = [].slice.call(this.wrapper.querySelectorAll("Impression"));
                return this.getClickEvents(this.wrapper).getTrackingEvents(s).getImpressions(r).getExtension(),
                this.parsedData
            }
        }, {
            key: "getTrackingEvents",
            value: function(e) {
                var t = this;
                return e.forEach(function(e) {
                    var i = e.getAttribute("event");
                    t.parsedData.trackingEvents[i] || (t.parsedData.trackingEvents[i] = []),
                    t.parsedData.trackingEvents[i].push(e.textContent.trim())
                }),
                this
            }
        }, {
            key: "getImpressions",
            value: function(e) {
                var t = this;
                return e.forEach(function(e) {
                    t.parsedData.trackingEvents.start || (t.parsedData.trackingEvents.start = []),
                    t.parsedData.trackingEvents.start.push(e.textContent.trim())
                }),
                this
            }
        }, {
            key: "getOffsetAndDuration",
            value: function() {
                var e, t = l.A.stringToSeconds((null == (e = this.linear.querySelector("Duration")) ? void 0 : e.textContent) || "0"), i = "number" != typeof this.options.skipOffset || Number.isNaN(this.options.skipOffset) ? l.A.stringToSeconds(this.linear.getAttribute("skipoffset") || "0") : this.options.skipOffset;
                return this.parsedData.duration = Math.min(t, this.options.maxDuration),
                this.parsedData.skipOffset = Math.min(i, this.options.maxSkipOffset),
                this
            }
        }, {
            key: "getCtaAndTitle",
            value: function() {
                var e;
                return this.parsedData.title = (null == (e = this.xmlDoc.querySelector("AdTitle")) ? void 0 : e.textContent) || (0,
                N.T)("xplayerAdsVisitSite"),
                this.parsedData.ctaText = this.parsedData.title,
                this
            }
        }, {
            key: "getExtension",
            value: function() {
                var e, t = null == (e = this.xmlDoc.getElementsByTagName("ComplaintLink")) ? void 0 : e[0], i = this.xmlDoc.querySelector("Extensions Extension AdPoster"), n = null == t ? void 0 : t.textContent, s = null == i ? void 0 : i.textContent;
                return this.parsedData.complaintLink = n || null,
                this.parsedData.poster = s || null,
                this
            }
        }, {
            key: "getCompanion",
            value: function() {
                var e, t = this.xmlDoc.querySelector("Creatives Creative CompanionAds Companion");
                if (!t)
                    return this;
                var i = t.querySelector("StaticResource")
                  , n = t.querySelector("CompanionClickThrough");
                this.parsedData.companion = {
                    icon: null == i ? void 0 : i.textContent,
                    link: null == n ? void 0 : n.textContent.trim()
                };
                var s = t.querySelector("AdParameters");
                if (null != (e = s) && e.textContent) {
                    var r = s.textContent.trim()
                      , o = (s = new DOMParser().parseFromString(r, "text/xml")).querySelector("CompanionBannerData Headline")
                      , a = s.querySelector("CompanionBannerData CTABrandname")
                      , l = s.querySelector("CompanionBannerData CTAButtonname")
                      , c = s.querySelector("CompanionBannerData AdPoster");
                    this.parsedData.companion.headline = null == o ? void 0 : o.textContent,
                    this.parsedData.companion.ctabrandname = null == a ? void 0 : a.textContent,
                    this.parsedData.companion.ctabuttonname = null == l ? void 0 : l.textContent,
                    this.parsedData.companion.adposter = null == c ? void 0 : c.textContent.trim(),
                    this.parsedData.companion.adlinktext = this.parsedData.title
                }
                return this
            }
        }, {
            key: "getClickEvents",
            value: function(e) {
                var t = e.querySelector("ClickThrough")
                  , i = e.querySelectorAll("ClickTracking");
                return t && (this.parsedData.link = t.textContent.trim()),
                (null == i ? void 0 : i.length) > 0 && (this.parsedData.trackingEvents.clickTracking = [].map.call(i, function(e) {
                    return e.textContent.trim()
                })),
                this
            }
        }, {
            key: "getMediaFiles",
            value: function() {
                var e = this;
                return [].slice.call(this.linear.querySelectorAll("MediaFile")).forEach(function(t) {
                    e.parsedData.mediaFiles.push({
                        height: t.getAttribute("height"),
                        width: t.getAttribute("width"),
                        type: t.getAttribute("type"),
                        id: t.getAttribute("id"),
                        url: t.textContent.trim()
                    })
                }),
                this
            }
        }, {
            key: "concatTrackingEvents",
            value: function() {
                var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}
                  , t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {}
                  , i = {};
                return ["clickTracking", "complete", "firstQuartile", "midpoint", "thirdQuartile", "start"].forEach(function(n) {
                    i[n] = [].concat(e[n] || "", t[n] || "").filter(function(e) {
                        return e
                    }).map(function(e) {
                        return e.replace(/^\s*\n/gm, "").trim()
                    })
                }),
                i
            }
        }, {
            key: "concatErrorUrls",
            value: function(e) {
                var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : [];
                return [].concat([e || ""], t).filter(function(e) {
                    return e
                })
            }
        }, {
            key: "parseData",
            value: function(e) {
                var t = this
                  , i = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {}
                  , n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {};
                return new Promise(function(s, r) {
                    var o, a = [], l = e.match(/<Ad[\s\S]*?<\/Ad>/g);
                    if (!l)
                        return void r({
                            errorVast: k.xml_parsing,
                            errorText: "No Ad tag",
                            errorImpressions: (null == (o = n.trackingEvents) ? void 0 : o.start) || [],
                            errorUrls: n.errorUrls || []
                        });
                    l.forEach(function(e, s) {
                        a[s] = {};
                        var r, o, l = null == (r = e.match(/<Error><!\[CDATA\[(.*\[ERRORCODE\].*)\]\]><\/Error>/)) || null == (r = r[1]) ? void 0 : r.trim();
                        try {
                            if (e.match(/<Wrapper>/)) {
                                var c = t.parseWrapper(e)
                                  , h = n.trackingEvents
                                  , u = n.errorUrls
                                  , d = t.concatTrackingEvents(c.trackingEvents, h);
                                a[s] = I(I(I({}, c), a[s]), {}, {
                                    trackingEvents: d
                                }),
                                a[s].errorUrls = t.concatErrorUrls(l, u),
                                a[s].error = !1,
                                a[s].complaintLink || (a[s].complaintLink = n.complaintLink || null),
                                a[s].poster || (a[s].poster = n.poster || null)
                            } else {
                                var A = n.errorUrls
                                  , p = n.trackingEvents;
                                a[s].errorTrackingLinearUrls = t.concatErrorUrls(l);
                                var m = t.parseLinearAd(e, i)
                                  , v = t.concatTrackingEvents(m.trackingEvents, p);
                                a[s] = I(I(I({
                                    errorUrls: A
                                }, m), a[s]), {}, {
                                    trackingEvents: v,
                                    isWrapper: !!n.isWrapper,
                                    wrapperAdvertiser: n.wrapperAdvertiser || null,
                                    error: !1
                                }),
                                a[s].complaintLink || (a[s].complaintLink = n.complaintLink || null)
                            }
                        } catch (e) {
                            a[s].error = {
                                errorVast: k.xml_parsing,
                                errorImpressions: (null == (o = a[s].trackingEvents) ? void 0 : o.start) || [],
                                errorUrls: a[s].errorUrls || [],
                                errorText: e
                            }
                        }
                    }),
                    s(a)
                }
                )
            }
        }])
          , x = function(e) {
            return e.reduce(function(e, t) {
                return e.concat(t)
            }, [])
        };
        function Y(e, t) {
            var i = Object.keys(e);
            if (Object.getOwnPropertySymbols) {
                var n = Object.getOwnPropertySymbols(e);
                t && (n = n.filter(function(t) {
                    return Object.getOwnPropertyDescriptor(e, t).enumerable
                })),
                i.push.apply(i, n)
            }
            return i
        }
        function M(e) {
            for (var t = 1; t < arguments.length; t++) {
                var i = null != arguments[t] ? arguments[t] : {};
                t % 2 ? Y(Object(i), !0).forEach(function(t) {
                    (0,
                    p.A)(e, t, i[t])
                }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(i)) : Y(Object(i)).forEach(function(t) {
                    Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(i, t))
                })
            }
            return e
        }
        var B = (0,
        A.A)(function e(t) {
            var i = t.vastUrls
              , n = t.options
              , s = void 0 === n ? {} : n;
            (0,
            d.A)(this, e),
            (0,
            p.A)(this, "data", void 0),
            (0,
            p.A)(this, "ad", void 0),
            (0,
            p.A)(this, "options", void 0),
            (0,
            p.A)(this, "parser", void 0),
            (0,
            p.A)(this, "loader", void 0),
            (0,
            p.A)(this, "adsWithError", void 0),
            (0,
            p.A)(this, "vastUrls", void 0),
            (0,
            p.A)(this, "currentVastData", void 0),
            (0,
            p.A)(this, "savedData", void 0),
            (0,
            p.A)(this, "trackingEvents", void 0),
            this.ad = null,
            this.parser = new U,
            this.options = s,
            this.savedData = [],
            this.vastUrls = i,
            this.loader = new w({
                parser: this.parser,
                options: this.options
            }),
            this.adsWithError = {},
            this.trackingEvents = null,
            this.options = s
        }, [{
            key: "loadNextAd",
            value: function(e, t) {
                var i = this;
                return new Promise(function(n, s) {
                    i.loader.loadData(e, t).then(function(e) {
                        i.getNextAd(e).then(n)
                    }).catch(function(e) {
                        s({
                            error: e
                        })
                    })
                }
                )
            }
        }, {
            key: "getAdData",
            value: function(e, t, i, n) {
                var s = this;
                return (this.vastUrls && this.parser.parsedData && this.savedData.push({
                    url: this.currentVastData.url,
                    type: this.currentVastData.type,
                    trackMetrics: this.currentVastData.trackMetrics,
                    trackingEvents: this.trackingEvents,
                    isWrapper: this.parser.parsedData.isWrapper
                }),
                Array.isArray(this.vastUrls)) ? (this.currentVastData = this.vastUrls.shift(),
                i(this.currentVastData),
                n(this.currentVastData.type),
                this.loader.setNewAdUrl(this.currentVastData.url),
                this.loader.setNewAdType(this.currentVastData.type),
                new Promise(function(r, o) {
                    s.loadNextAd(e, t).then(function() {
                        !s.ad && s.vastUrls.length ? s.getAdData(e, t, i, n).then(r) : r(s.ad)
                    }).catch(function(e) {
                        o({
                            error: e
                        })
                    })
                }
                )) : Promise.reject(Error("No valid vast urls array passed"))
            }
        }, {
            key: "getNextAd",
            value: function(e) {
                var t = this;
                return new Promise(function(i) {
                    var n;
                    if (!(null != e && e.length)) {
                        t.ad = null,
                        t.filterUniqueTrackingUrls(),
                        i(t.ad);
                        return
                    }
                    if (t.ad = e.shift(),
                    t.ad.error) {
                        t.addError(),
                        i(t.getNextAd(e));
                        return
                    }
                    "function" == typeof (null == (n = t.options) ? void 0 : n.processAdsData) && (t.ad = t.options.processAdsData(t.ad)),
                    t.filterUniqueTrackingUrls(),
                    i(t.ad)
                }
                )
            }
        }, {
            key: "addError",
            value: function() {
                var e, t = this.currentVastData || {}, i = t.url, n = t.type;
                if (!i) {
                    null != (e = this.adsWithError) && e.noUrl || (this.adsWithError.noUrl = []),
                    this.adsWithError.noUrl.push(this.ad.error);
                    return
                }
                this.adsWithError[i] || (this.adsWithError[i] = []),
                "object" === (0,
                u.A)(this.ad.error) && (this.ad.error.type = n),
                this.adsWithError[i].push(this.ad.error)
            }
        }, {
            key: "filterUniqueTrackingUrls",
            value: function() {
                var e, t, i, n = this, s = (null == (t = this.ad) || null == (t = t.trackingUrls) ? void 0 : t.start) || [], r = this.adsWithError ? Object.keys(this.adsWithError) : [], o = {};
                r.forEach(function(e) {
                    o[e] = x(n.adsWithError[e].map(function(e) {
                        return e.errorImpressions
                    }))
                });
                var a = Object.values(o) || [];
                if (s.length > 0 || a.length > 0) {
                    this.trackingEvents = M(M({}, (null == (e = this.ad) ? void 0 : e.trackingUrls) || {}), {}, {
                        start: (0,
                        h.A)(new Set([].concat((0,
                        h.A)(s), (0,
                        h.A)(x(a)))))
                    });
                    return
                }
                if (!(null != (i = this.ad) && i.trackingUrls)) {
                    this.trackingEvents = null;
                    return
                }
                this.trackingEvents = M({}, this.ad.trackingUrls)
            }
        }])
          , F = i(37651)
          , V = i(10809)
          , H = i(54098);
        let W = "application/vnd.apple.mpegurl";
        var G = class {
            setSource(e) {
                return new Promise((t,i)=>{
                    if (!e || !e.length)
                        return void i({
                            source: "controller",
                            message: "setSource",
                            details: "no media files"
                        });
                    let n = this.chooseSource(e);
                    e.splice(e.indexOf(n), 1),
                    this.checkSource().then(()=>n.type === W ? this.setHlsSource(n.url) : this.setMp4Source(n.url)).then(t).catch(()=>{
                        this.fallbackRequested = !0,
                        F.A.emit(V.A.ADS_SOURCE_FALLBACK_REQUEST),
                        this.setSource(e).then(t, i)
                    }
                    )
                }
                )
            }
            chooseSource(e) {
                return e.find(e=>e.type === W) || e[0]
            }
            setLoadingStop() {
                this.options.preloadLive || (this.preventLoadingStop = !0)
            }
            stopStreamPreload() {
                this.hls && this.hls.on(window.Hls.Events.LEVEL_LOADED, (e,t)=>{
                    var i;
                    this.preventLoadingStop || this.options.preloadLive || null == t || null == (i = t.details) || !i.live || this.loadLiveEventAttached || (this.hls.stopLoad(),
                    F.A.once(V.A.PLAYER_PLAY, ()=>{
                        this.hls.startLoad()
                    }
                    ),
                    this.loadLiveEventAttached = !0)
                }
                )
            }
            getVideoType() {
                return this.videoType
            }
            setMp4Source(e) {
                F.A.emit(V.A.PLAYER_SET_VIDEO_SOURCE, e),
                this.videoType = "mp4"
            }
            setHLSNativeSource(e) {
                F.A.emit(V.A.PLAYER_SET_VIDEO_SOURCE, e),
                this.videoType = "hls-native"
            }
            setHlsSource(e) {
                return new Promise((t,i)=>{
                    if (!this.core.capabilities.hlsJs) {
                        if (this.core.capabilities.hls) {
                            this.setHLSNativeSource(e),
                            t();
                            return
                        }
                        i();
                        return
                    }
                    if (this.videoType = "hls-general",
                    !window.Hls) {
                        var n, s;
                        if (this.hlsJsRequested)
                            return void i();
                        this.hlsJsRequested = !0;
                        let r = null == (s = this.core.options) || null == (n = s.hlsConfig) ? void 0 : n.libSrc;
                        return r ? void a.A.getScript(r).then(()=>this.setHlsSource(e)).then(t).catch(i) : void i()
                    }
                    this.videoType = "hls-general-after-hls-load",
                    this.hls = new window.Hls((0,
                    o._)({}, this.core.options.hlsConfig, this.hlsConfig)),
                    this.hls.loadSource(e),
                    this.videoType = "hls-general-after-load-source",
                    this.hls.attachMedia(this.core.videoElement),
                    this.videoType = "hls-general-after-attach",
                    this.hls.on(window.Hls.Events.LEVEL_LOADED, (e,i)=>{
                        var n;
                        (null == i || null == (n = i.details) ? void 0 : n.live) ? this.videoType = "hls-live" : this.videoType = "hls-vod",
                        H.A.set("sourceLoaded", !0),
                        this.isResolved = !0,
                        t()
                    }
                    ),
                    this.hls.on(window.Hls.Events.ERROR, (e,t)=>{
                        t.fatal && (this.hls && (this.hls.destroy(),
                        this.hls = null),
                        this.isResolved || this.setSourceErrors.push({
                            type: "error",
                            source: "hls",
                            data: t,
                            videoType: this.videoType
                        }),
                        F.A.emit(V.A.PLAYER_ON_ERROR, {
                            type: "error",
                            source: "hls",
                            data: t
                        }),
                        i())
                    }
                    )
                }
                )
            }
            getSetSourceErrors() {
                if (!this.setSourceErrors.length)
                    return [];
                let e = [].concat(this.setSourceErrors);
                return this.setSourceErrors = [],
                e
            }
            checkSource() {
                return Promise.resolve()
            }
            clearSource(e, t, i, n) {
                this.hls && (this.hls.destroy(),
                this.hls = null),
                H.A.set("sourceLoaded", !1),
                i && n ? (this.core.videoElement.style.opacity = "0",
                F.A.emit(V.A.PLAYER_PAUSE),
                F.A.emit(V.A.PLAYER_ON_SEEKED),
                F.A.once(V.A.PLAYER_PLAY, ()=>{
                    F.A.emit(V.A.PLAYER_SET_SOURCE, null, !0, e, t),
                    this.core.videoElement.style.opacity = "1"
                }
                )) : F.A.emit(V.A.PLAYER_SET_SOURCE, null, i, e, t)
            }
            constructor(e, t) {
                this.core = e,
                this.options = t,
                this.hlsConfig = null == t ? void 0 : t.hlsConfig,
                this.isResolved = !1,
                this.hls = null,
                this.hlsJsRequested = !1,
                this.videoType = "undefined",
                this.setSourceErrors = [],
                this.fallbackRequested = !1,
                this.preventLoadingStop = !1,
                this.loadLiveEventAttached = !1
            }
        }
          , q = (0,
        A.A)(function e(t) {
            (0,
            d.A)(this, e),
            (0,
            p.A)(this, "GAEnabled", void 0),
            (0,
            p.A)(this, "GACollect", void 0),
            (0,
            p.A)(this, "debug", void 0),
            (0,
            p.A)(this, "prerollType", void 0),
            this.GAEnabled = t.GAEnabled,
            this.GACollect = t.GACollect,
            this.debug = t.debug,
            this.prerollType = s.TS
        }, [{
            key: "setPrerollType",
            value: function(e) {
                this.prerollType = e
            }
        }, {
            key: "track",
            value: function(e) {
                if (this.GAEnabled && this.debug)
                    return void console.warn("Ads GA tracking:", e);
                if (this.GAEnabled && window.dataLayer) {
                    var t = f[e];
                    if (t) {
                        var i = "preroll_".concat(t);
                        E[e] && (i = t),
                        window.dataLayer.push({
                            event: "ga4_event",
                            event_name: i,
                            eventAction: this.prerollType,
                            eventLabel: "",
                            eventCategory: "Preroll"
                        })
                    }
                }
            }
        }])
          , $ = i(71360)
          , K = i(86373)
          , j = i(81718)
          , Q = i(52668)
          , z = ["errorUrls", "errorImpressions"];
        function X(e, t) {
            var i = Object.keys(e);
            if (Object.getOwnPropertySymbols) {
                var n = Object.getOwnPropertySymbols(e);
                t && (n = n.filter(function(t) {
                    return Object.getOwnPropertyDescriptor(e, t).enumerable
                })),
                i.push.apply(i, n)
            }
            return i
        }
        function J(e) {
            for (var t = 1; t < arguments.length; t++) {
                var i = null != arguments[t] ? arguments[t] : {};
                t % 2 ? X(Object(i), !0).forEach(function(t) {
                    (0,
                    p.A)(e, t, i[t])
                }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(i)) : X(Object(i)).forEach(function(t) {
                    Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(i, t))
                })
            }
            return e
        }
        var Z = (0,
        A.A)(function e(t) {
            (0,
            d.A)(this, e),
            (0,
            p.A)(this, "core", void 0),
            (0,
            p.A)(this, "type", void 0),
            (0,
            p.A)(this, "debug", void 0),
            (0,
            p.A)(this, "enabled", void 0),
            (0,
            p.A)(this, "startedTime", void 0),
            (0,
            p.A)(this, "sentEvents", void 0),
            (0,
            p.A)(this, "tracked", void 0),
            (0,
            p.A)(this, "data", void 0),
            (0,
            p.A)(this, "send", void 0),
            this.core = t.core,
            this.debug = this.core.options.debug,
            this.enabled = t.collectorEnabled,
            this.send = t.sendToCollector,
            this.startedTime = null,
            this.tracked = {},
            this.sentEvents = {},
            this.data = t.extraData || {}
        }, [{
            key: "setVideoType",
            value: function() {
                var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "";
                e && (this.data.video_type = e)
            }
        }, {
            key: "setVideoOrientation",
            value: function(e) {
                this.data["str.video_orientation"] = "".concat(e)
            }
        }, {
            key: "updateAdblockStatus",
            value: function(e) {
                this.data.ab = e
            }
        }, {
            key: "setTrackingUrlAndType",
            value: function(e) {
                var t = e.url
                  , i = e.type;
                this.data.url = t,
                this.type = i
            }
        }, {
            key: "getTrackingUrlAndType",
            value: function() {
                return {
                    url: this.data.url,
                    type: this.type
                }
            }
        }, {
            key: "setIsWrapper",
            value: function(e) {
                this.data.is_wrapper = !!e
            }
        }, {
            key: "getIsWrapper",
            value: function() {
                return this.data.is_wrapper
            }
        }, {
            key: "startTracking",
            value: function() {
                this.startedTime || (this.startedTime = new Date().getTime())
            }
        }, {
            key: "trackClick",
            value: function() {
                this.tracked.preroll_click || (this.tracked.preroll_click = "true",
                this.track("preroll_click"))
            }
        }, {
            key: "trackShown5s",
            value: function() {
                this.tracked.preroll_shown_5s || (this.tracked.preroll_shown_5s = "true",
                this.track(g))
            }
        }, {
            key: "getOrientation",
            value: function() {
                return void 0 === window.orientation ? "null" : 180 === window.orientation || 0 === window.orientation ? "portrait" : "landscape"
            }
        }, {
            key: "track",
            value: function(e) {
                var t, i = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
                if (this.enabled) {
                    Array.isArray(this.data.url) && (this.data.url = null == (t = this.data.url) ? void 0 : t[0]);
                    var n = J(J(J({}, i), this.data), {}, {
                        log: "preroll"
                    })
                      , s = new Date().getTime() - this.startedTime;
                    if (n.time = (null == i ? void 0 : i.time) || s,
                    n.event = e,
                    this.core.capabilities.mobile && (n["str.orientation"] = this.getOrientation(),
                    n["str.fullscreen"] = "".concat(H.A.get("fullscreen")),
                    n["str.deviceResolution"] = "".concat(window.innerWidth, "_x_").concat(window.innerHeight)),
                    this.type && (n["str.type"] = this.type),
                    n["str.firstEvent"] = "".concat(!this.sentEvents[e]),
                    this.sentEvents[e] = !0,
                    (0,
                    K.A)(n, (0,
                    Q.q)()),
                    this.debug)
                        return void console.warn(e, n);
                    n.event || console.error("Xplayer Preroll: Request has no event field"),
                    j.A.sendToCollector(n, this.send)
                }
            }
        }, {
            key: "trackError",
            value: function(e) {
                var t, i, n, s = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "", r = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : "", o = null != e && e.error ? e.error : e;
                if (o) {
                    if (o instanceof Error) {
                        var a = {
                            error: i = o.toString(),
                            errorText: n = "".concat(o.stack)
                        };
                        r && (a["str.message"] = r),
                        this.track(s || S, a);
                        return
                    }
                    o.errorUrls,
                    o.errorImpressions;
                    var l = (0,
                    $.A)(o, z);
                    if (Object.keys(l).length && (null == l ? void 0 : l.statusText) !== "abort") {
                        if ((null == l ? void 0 : l.status) === 204)
                            return void this.track("preroll_empty");
                        var c = "".concat(null == l ? void 0 : l.status)
                          , h = "".concat(null == e ? void 0 : e.errorVast);
                        n = "".concat(l.errorText),
                        l.responseURL = null == l || null == (t = l.responseURL) || null == (t = t.split("?")) ? void 0 : t[0];
                        try {
                            i = JSON.stringify(l)
                        } catch (e) {}
                        var u = {
                            error: i,
                            errorText: n,
                            errorStatus: c,
                            errorVast: h
                        };
                        r && (u["str.message"] = r),
                        this.track(s || S, u)
                    }
                }
            }
        }, {
            key: "trackShownError",
            value: function(e, t) {
                var i, n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : "", s = arguments.length > 3 && void 0 !== arguments[3] && arguments[3];
                switch (this.setVideoType(t),
                null == e ? void 0 : e.source) {
                case "controller":
                    i = e;
                    break;
                case "hls":
                    i = this.processHLSErrorMessage(null == e ? void 0 : e.data);
                    break;
                default:
                    i = this.processVideoElementErrorMessage(e)
                }
                this.track("".concat("preroll_shown_error").concat(n), {
                    error: i.message,
                    errorText: i.details,
                    "str.errorSetSource": "".concat(s)
                })
            }
        }, {
            key: "processHLSErrorMessage",
            value: function(e) {
                var t, i = null == e ? void 0 : e.details, n = null == e ? void 0 : e.type;
                if (n)
                    t = "HLS-TYPE ".concat(n);
                else if (e)
                    try {
                        t = "HLS-DATA ".concat(JSON.stringify(e))
                    } catch (i) {
                        t = "HLS-DATA-ERROR ".concat(e)
                    }
                else
                    t = "HLS_UNKNOWN_ERROR";
                if ("mediaError" === n && ("manifestIncompatibleCodecsError" === i && (n = "sourceError"),
                "bufferNudgeOnStall" === i || "bufferStalledError" === i))
                    return {
                        message: "MEDIA_ERR_MEDIA",
                        details: i
                    };
                switch (n) {
                case "networkError":
                    t = "MEDIA_ERR_NETWORK";
                    break;
                case "mediaError":
                    t = "MEDIA_ERR_DECODE";
                    break;
                case "sourceError":
                    t = "MEDIA_ERR_SRC_NOT_SUPPORTED"
                }
                return {
                    message: t,
                    details: i
                }
            }
        }, {
            key: "processVideoElementErrorMessage",
            value: function(e) {
                var t, i;
                return {
                    message: ({
                        1: "MEDIA_ERR_ABORTED",
                        2: "MEDIA_ERR_NETWORK",
                        3: "MEDIA_ERR_DECODE",
                        4: "MEDIA_ERR_SRC_NOT_SUPPORTED"
                    })[null == e || null == (t = e.target) || null == (t = t.error) ? void 0 : t.code] || "UNKNOWN_ERROR",
                    details: null == e || null == (i = e.target) || null == (i = i.error) ? void 0 : i.message
                }
            }
        }])
          , ee = i(42691)
          , et = i(5688)
          , ei = (0,
        A.A)(function e(t) {
            (0,
            d.A)(this, e),
            (0,
            p.A)(this, "core", void 0),
            (0,
            p.A)(this, "debug", void 0),
            (0,
            p.A)(this, "playerOnErrorEventId", void 0),
            (0,
            p.A)(this, "notSendedErrors", void 0),
            (0,
            p.A)(this, "errorUrls", void 0),
            this.core = t.core,
            this.debug = this.core.options.debug,
            this.errorUrls = [],
            this.notSendedErrors = [],
            this.playerOnErrorEventId = null,
            this.init()
        }, [{
            key: "init",
            value: function() {
                this.core.emit(V.A.PLAYER_ERROR_CONTROLLER_BLOCK),
                this.playerOnErrorEventId = this.core.on(V.A.PLAYER_ON_ERROR, this.onPlayerError, this)
            }
        }, {
            key: "setErrorUrls",
            value: function(e) {
                this.errorUrls = e
            }
        }, {
            key: "trackErrorsOnPlay",
            value: function() {
                var e = this;
                this.notSendedErrors.forEach(function(t) {
                    e.track(t)
                }),
                this.notSendedErrors = []
            }
        }, {
            key: "onPlayerError",
            value: function(e) {
                var t, i = null == e || null == (t = e.target) || null == (t = t.error) ? void 0 : t.code, n = ee.A[i], s = k.linear_general, r = k.video_play_error, o = k.video_not_found, a = k.video_file_timeout, l = k.unknown, c = (0,
                p.A)((0,
                p.A)((0,
                p.A)((0,
                p.A)({}, et.A.ABORTED, s), et.A.NETWORK, r), et.A.DECODER, o), et.A.SOURCE, a)[n] || l;
                c === l && (null == e ? void 0 : e.type) === "error" && (c = s),
                this.track(c)
            }
        }, {
            key: "track",
            value: function() {
                var e, t = this, i = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : k.unknown;
                if (!(null != (e = this.errorUrls) && e.length))
                    return void this.notSendedErrors.push(i);
                -1 === Object.values(k).indexOf(i) && (i = k.unknown),
                this.errorUrls.forEach(function(e) {
                    var n = e.replace("[ERRORCODE]", "".concat(i));
                    if (t.debug) {
                        var s = Object.keys(k);
                        console.error("Ads VAST Error tracking:", i, s.find(function(e) {
                            return k[e] === i
                        }), n);
                        return
                    }
                    m.A.ajax("GET", n)
                })
            }
        }, {
            key: "detachEvents",
            value: function() {
                this.core.off(V.A.PLAYER_ON_ERROR, this.playerOnErrorEventId),
                this.core.emit(V.A.PLAYER_ERROR_CONTROLLER_UNBLOCK)
            }
        }])
          , en = (0,
        A.A)(function e(t) {
            (0,
            d.A)(this, e),
            (0,
            p.A)(this, "core", void 0),
            (0,
            p.A)(this, "debug", void 0),
            (0,
            p.A)(this, "played", void 0),
            (0,
            p.A)(this, "muted", void 0),
            (0,
            p.A)(this, "eventsIds", void 0),
            (0,
            p.A)(this, "trackedTiming", void 0),
            (0,
            p.A)(this, "trackingData", void 0),
            this.core = t.core,
            this.debug = this.core.options.debug,
            this.trackingData = {},
            this.eventsIds = {},
            this.played = !1,
            this.muted = this.core.videoElement.volume < .4,
            this.trackedTiming = T,
            this.init()
        }, [{
            key: "init",
            value: function() {
                this.eventsIds[V.A.PLAYER_ON_PLAY] = this.core.on(V.A.PLAYER_ON_PLAY, this.playerOnPlay, this),
                this.eventsIds[V.A.PLAYER_ON_PAUSE] = this.core.on(V.A.PLAYER_ON_PAUSE, this.playerOnPause, this),
                this.eventsIds[V.A.PLAYER_SET_VOLUME] = this.core.on(V.A.PLAYER_SET_VOLUME, this.playerOnSetVolume, this)
            }
        }, {
            key: "setTrackingData",
            value: function(e) {
                this.trackingData = e
            }
        }, {
            key: "playerOnPlay",
            value: function() {
                if (!this.played) {
                    this.played = !0;
                    return
                }
                this.track("resume")
            }
        }, {
            key: "playerOnPause",
            value: function() {
                this.core.videoElement.ended || this.track("pause")
            }
        }, {
            key: "playerOnSetVolume",
            value: function() {
                this.core.videoElement.volume < .4 ? this.muted || (this.track("mute"),
                this.muted = !0) : this.muted && (this.track("unmute"),
                this.muted = !1)
            }
        }, {
            key: "detachEvents",
            value: function() {
                for (var e in this.eventsIds)
                    this.core.off(e, this.eventsIds[e])
            }
        }, {
            key: "sendEvent",
            value: function(e) {
                if (this.debug)
                    return void console.warn("Ads VAST tracking: ".concat(e));
                e && (new Image().src = e)
            }
        }, {
            key: "track",
            value: function(e) {
                var t, i = this;
                if (null != (t = this.trackingData) && t[e]) {
                    if (Array.isArray(this.trackingData[e]))
                        return void this.trackingData[e].map(function(e) {
                            return i.sendEvent(e)
                        });
                    this.sendEvent(this.trackingData[e])
                }
            }
        }, {
            key: "trackTiming",
            value: function(e, t) {
                if (!this.trackedTiming.start && e > 0) {
                    this.trackedTiming.start = !0,
                    this.track("start");
                    return
                }
                var i = e / t;
                if (i > .25 && !this.trackedTiming.firstQuartile) {
                    this.track("firstQuartile"),
                    this.trackedTiming.firstQuartile = !0;
                    return
                }
                if (i > .5 && !this.trackedTiming.midpoint) {
                    this.track("midpoint"),
                    this.trackedTiming.midpoint = !0;
                    return
                }
                i > .75 && !this.trackedTiming.thirdQuartile && (this.track("thirdQuartile"),
                this.trackedTiming.thirdQuartile = !0)
            }
        }])
          , es = (0,
        A.A)(function e(t) {
            (0,
            d.A)(this, e),
            (0,
            p.A)(this, "core", void 0),
            (0,
            p.A)(this, "options", void 0),
            (0,
            p.A)(this, "GATracker", void 0),
            (0,
            p.A)(this, "collectorTracker", void 0),
            (0,
            p.A)(this, "vastErrorsTracker", void 0),
            (0,
            p.A)(this, "vastEventsTracker", void 0),
            this.core = t.core,
            this.options = t,
            this.initTrackers()
        }, [{
            key: "initTrackers",
            value: function() {
                var e = this.options
                  , t = e.GAEnabled
                  , i = e.GACollect
                  , n = e.collectorEnabled
                  , s = e.extraData
                  , r = e.sendToCollector;
                this.GATracker = new q({
                    debug: this.core.options.debug,
                    GAEnabled: t,
                    GACollect: i
                }),
                this.collectorTracker = new Z({
                    core: this.core,
                    collectorEnabled: n,
                    extraData: s,
                    sendToCollector: r
                }),
                this.vastErrorsTracker = new ei({
                    core: this.core
                }),
                this.vastEventsTracker = new en({
                    core: this.core
                })
            }
        }, {
            key: "sendErrorsSourceNotSet",
            value: function(e) {
                var t = this
                  , i = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "";
                null == e || e.forEach(function(e) {
                    t.collectorTracker.trackShownError(e, e.videoType, i, !0)
                })
            }
        }, {
            key: "startTracking",
            value: function() {
                this.collectorTracker.startTracking()
            }
        }, {
            key: "setVideoType",
            value: function(e) {
                this.collectorTracker.setVideoType(e)
            }
        }, {
            key: "isWrongParent",
            value: function(e, t) {
                return !a.A.hasParentByTag(e.currentTarget || t, "a", 2)
            }
        }, {
            key: "trackShownError",
            value: function(e, t) {
                var i = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : "";
                this.collectorTracker.trackShownError(e, t, i)
            }
        }, {
            key: "setErrorUrls",
            value: function(e) {
                this.vastErrorsTracker.setErrorUrls(e)
            }
        }, {
            key: "setIsWrapper",
            value: function(e) {
                this.collectorTracker.setIsWrapper(e)
            }
        }, {
            key: "setTrackingUrlAndType",
            value: function(e) {
                this.collectorTracker.setTrackingUrlAndType(e)
            }
        }, {
            key: "setTrackingData",
            value: function(e) {
                this.vastEventsTracker.setTrackingData(e)
            }
        }, {
            key: "trackMetrics",
            value: function(e) {
                null != e && e.trackMetrics && F.A.emit(V.A.ADS_TRACK_METRICS, !!e.trackMetrics)
            }
        }, {
            key: "detachPlayerEvents",
            value: function() {
                this.vastEventsTracker.detachEvents()
            }
        }, {
            key: "unblockPlayerErrorController",
            value: function() {
                this.vastErrorsTracker.detachEvents()
            }
        }, {
            key: "trackOnDataLoaded",
            value: function(e, t) {
                var i = this;
                if (e) {
                    var n = Object.keys(e)
                      , s = this.collectorTracker.getTrackingUrlAndType();
                    null != n && n.length && (this.collectorTracker.setVideoType(t),
                    n.forEach(function(t) {
                        var n = e[t];
                        (null == n ? void 0 : n.length) > 0 && n.forEach(function(e) {
                            i.setTrackingUrlAndType({
                                url: t,
                                type: e.type
                            }),
                            i.collectorTracker.trackError(e)
                        })
                    }),
                    this.setTrackingUrlAndType(s),
                    this.unblockPlayerErrorController())
                }
            }
        }, {
            key: "trackTiming",
            value: function(e, t) {
                this.vastEventsTracker.trackTiming(e, t)
            }
        }, {
            key: "trackShown5s",
            value: function() {
                this.collectorTracker.trackShown5s()
            }
        }, {
            key: "trackClick",
            value: function() {
                this.collectorTracker.trackClick()
            }
        }, {
            key: "trackDataOnPlay",
            value: function(e) {
                var t, i, n = this, s = e.adsWithError, r = e.trackingEvents, o = e.ad, a = e.savedData, l = e.currentVastData;
                this.collectorTracker.setIsWrapper(null == o ? void 0 : o.isWrapper);
                var c = null;
                s && (c = x(Object.values(s))),
                (null == (i = c) ? void 0 : i.length) > 0 && (null == (t = c) || t.forEach(function(e) {
                    n.vastErrorsTracker.setErrorUrls(e.errorUrls),
                    n.vastErrorsTracker.track(e.errorVast)
                })),
                r && (this.setTrackingData(r),
                this.trackMetrics(l),
                this.vastEventsTracker.trackTiming(1),
                this.collectorTracker.track(y)),
                null != o && o.errorUrls && (this.vastErrorsTracker.setErrorUrls(o.errorUrls),
                this.vastErrorsTracker.trackErrorsOnPlay()),
                this.trackSavedAdsData(a)
            }
        }, {
            key: "trackSavedAdsData",
            value: function() {
                var e = this
                  , t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : []
                  , i = this.collectorTracker.getTrackingUrlAndType()
                  , n = this.collectorTracker.getIsWrapper();
                t.forEach(function(t) {
                    e.collectorTracker.setIsWrapper(t.isWrapper),
                    e.collectorTracker.setTrackingUrlAndType({
                        url: t.url,
                        type: t.type
                    }),
                    e.collectorTracker.track(y),
                    e.trackMetrics(t)
                }),
                this.collectorTracker.setIsWrapper(n),
                this.collectorTracker.setTrackingUrlAndType(i)
            }
        }, {
            key: "trackCompletedClick",
            value: function(e, t) {
                this.isWrongParent(e, t) || (this.vastEventsTracker.track(_),
                this.GATracker.track(f.completed_click),
                this.collectorTracker.track("preroll_link_completed"),
                this.collectorTracker.trackClick())
            }
        }, {
            key: "trackVideoLinkClick",
            value: function() {
                this.vastEventsTracker.track(_),
                this.GATracker.track(f.video_click),
                this.collectorTracker.track("preroll_link_video"),
                this.collectorTracker.trackClick()
            }
        }, {
            key: "trackCallToActionClick",
            value: function() {
                this.vastEventsTracker.track(_),
                this.GATracker.track(f.cta_click),
                this.collectorTracker.track("preroll_link_cta"),
                this.collectorTracker.trackClick()
            }
        }, {
            key: "trackCompanionClick",
            value: function(e, t) {
                var i = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null;
                this.isWrongParent(e, i) || (this.vastEventsTracker.track(_),
                this.GATracker.track(t ? f.companion_after_end_click : f.companion_click),
                a.A.hasClass(e.currentTarget || i, "xplayer-ads-block-companion--empty") ? this.collectorTracker.track(t ? "preroll_link_companion_empty_ended" : "preroll_link_companion_empty") : this.collectorTracker.track(t ? "preroll_link_companion_ended" : "preroll_link_companion"),
                this.collectorTracker.trackClick())
            }
        }, {
            key: "trackPrerollTimeout",
            value: function() {
                this.collectorTracker.track("preroll_timeout_shown"),
                this.vastErrorsTracker.track(k.video_file_timeout)
            }
        }, {
            key: "trackPrerollOk",
            value: function() {
                this.collectorTracker.track("preroll_ok"),
                this.GATracker.track(f.parsed)
            }
        }, {
            key: "trackSkip",
            value: function() {
                this.vastEventsTracker.track("skip"),
                this.GATracker.track(f.skip),
                this.collectorTracker.track("preroll_skip")
            }
        }, {
            key: "trackPlay",
            value: function() {
                this.collectorTracker.track("preroll_play")
            }
        }, {
            key: "trackPrerollShown",
            value: function() {
                this.GATracker.track(f.shown),
                this.collectorTracker.track("preroll_shown")
            }
        }, {
            key: "trackPrerollEnded",
            value: function() {
                this.collectorTracker.track("preroll_ended"),
                this.GATracker.track(f.viewToEnd)
            }
        }, {
            key: "trackViewToSkip",
            value: function() {
                this.vastEventsTracker.track("progress"),
                this.GATracker.track(f.viewToSkip)
            }
        }, {
            key: "trackFallback",
            value: function(e) {
                this.collectorTracker.track(e)
            }
        }])
          , er = i(9776)
          , eo = "xh-helper-hidden"
          , ea = "xplayer-ads"
          , el = "xplayer-ads-mobile"
          , ec = "xplayer-ads-completed"
          , eh = (0,
        A.A)(function e(t) {
            var i = this;
            (0,
            d.A)(this, e),
            (0,
            p.A)(this, "core", void 0),
            (0,
            p.A)(this, "options", void 0),
            (0,
            p.A)(this, "template", void 0),
            (0,
            p.A)(this, "ad", void 0),
            (0,
            p.A)(this, "element", void 0),
            (0,
            p.A)(this, "closeElement", void 0),
            (0,
            p.A)(this, "visitSiteElement", void 0),
            (0,
            p.A)(this, "companionElement", void 0),
            (0,
            p.A)(this, "companionBigElement", void 0),
            (0,
            p.A)(this, "trackingController", void 0),
            (0,
            p.A)(this, "domCache", void 0),
            (0,
            p.A)(this, "countedWhileBuffering", void 0),
            (0,
            p.A)(this, "tresholdTimeout", void 0),
            (0,
            p.A)(this, "whileBufferingTimer", void 0),
            (0,
            p.A)(this, "countWhileBufferingBinded", void 0),
            (0,
            p.A)(this, "countWhileBufferingCallbackBinded", void 0),
            (0,
            p.A)(this, "pauseCounting", void 0),
            (0,
            p.A)(this, "isExp7021", void 0),
            (0,
            p.A)(this, "isPrerollSkipAfterProgressEnabled", void 0),
            (0,
            p.A)(this, "prerollSkipAfterProgressClasses", void 0),
            (0,
            p.A)(this, "ended", void 0),
            (0,
            p.A)(this, "pauseEventId", void 0),
            (0,
            p.A)(this, "playEventId", void 0),
            (0,
            p.A)(this, "skipCallback", function() {
                F.A.emit(V.A.ADS_SKIP)
            }),
            (0,
            p.A)(this, "trackCompanionClick", function(e, t) {
                i.trackingController.trackCompanionClick(e, i.ended, t)
            }),
            (0,
            p.A)(this, "onLinkClick", function(e) {
                if (i.options.linkClickSkip) {
                    var t = !!i.core.capabilities.mobile && !!i.core.capabilities.idevice;
                    F.A.emit(V.A.ADS_RESUME_PLAY, null, !1, t)
                } else
                    F.A.emit(V.A.PLAYER_PAUSE),
                    F.A.emit(V.A.ADS_ON_LINK_CLICK, e)
            }),
            (0,
            p.A)(this, "clickWithParentCheck", function(e, t) {
                a.A.hasParentByTag(e.currentTarget || t, "a", 2) && i.onLinkClick(t)
            }),
            (0,
            p.A)(this, "togglePlayPause", function() {
                H.A.get("playing") ? F.A.emit(V.A.PLAYER_PAUSE) : F.A.emit(V.A.PLAYER_PLAY)
            }),
            (0,
            p.A)(this, "detachEvents", function() {
                i.pauseEventId && F.A.off(V.A.PLAYER_PAUSE, i.pauseEventId),
                i.playEventId && F.A.off(V.A.PLAYER_PLAY, i.playEventId)
            }),
            this.core = t.core,
            this.options = t.adsOptions,
            this.ad = t.ad,
            this.template = t.template,
            this.element = this.core.element,
            this.trackingController = t.trackingController,
            this.countedWhileBuffering = 0,
            this.tresholdTimeout = null,
            this.pauseCounting = !1,
            this.whileBufferingTimer = null,
            this.countWhileBufferingBinded = this.countWhileBuffering.bind(this),
            this.countWhileBufferingCallbackBinded = this.countWhileBufferingTimerCallback.bind(this),
            this.ended = !1,
            this.pauseEventId = null,
            this.playEventId = null,
            this.isPrerollSkipAfterProgressEnabled = !!t.adsOptions.isPrerollSkipAfterProgressEnabled,
            this.init()
        }, [{
            key: "init",
            value: function() {
                this.render(),
                this.domCache = this.getDomCache() || {},
                this.attachEvents()
            }
        }, {
            key: "render",
            value: function() {
                if (this.element = document.createElement("div"),
                this.element.className = "xplayer-ads-block",
                this.options.blockCssClass && (this.element.className += " ".concat(this.options.blockCssClass)),
                this.element.innerHTML = this.template(this.ad, this.options),
                this.companionElement = this.element.querySelector(".xplayer-ads-block-companion"),
                this.core.isRtl && this.companionElement.classList.add("xplayer-companion-rtl"),
                this.options.isBigCompanionEnabled && this.ad.isXhlPreroll) {
                    var e;
                    this.closeElement = this.element.querySelector(".xplayer-ads-block-companion-close"),
                    this.companionBigElement = this.element.querySelector(".xplayer-ads-block-companion--big"),
                    null == (e = this.closeElement) || e.addEventListener("click", this.toggleCompanionSize.bind(this))
                }
                this.isPrerollSkipAfterProgressEnabled && this.showProgressWithoutSkip(),
                this.isExp7021 && (this.visitSiteElement = this.element.querySelector(".xplayer-ads-block-visit-site"))
            }
        }, {
            key: "getDomCache",
            value: function() {
                var e = this;
                return Object.keys(P).reduce(function(t, i) {
                    return t[i] = e.element.querySelector(P[i]),
                    t
                }, {})
            }
        }, {
            key: "toggleCompanionSize",
            value: function() {
                var e = "xplayer-ads-block-companion-close--arrow-bottom";
                this.companionElement && this.companionBigElement && (this.companionElement.classList.contains(eo) ? (this.companionElement.classList.remove(eo),
                this.companionBigElement.classList.add(eo),
                this.closeElement.classList.add(e),
                F.A.emit(V.A.ADS_COMPANION_WIDGET_NARROW)) : (this.companionElement.classList.add(eo),
                this.companionBigElement.classList.remove(eo),
                this.closeElement.classList.remove(e),
                F.A.emit(V.A.ADS_COMPANION_WIDGET_EXTEND)))
            }
        }, {
            key: "startCounting",
            value: function() {
                this.pauseCounting = !1
            }
        }, {
            key: "attachEvents",
            value: function() {
                var e, t, i = this;
                this.pauseEventId = F.A.on(V.A.PLAYER_PAUSE, function() {
                    i.pauseCounting = !0
                }),
                this.playEventId = F.A.on(V.A.PLAYER_PLAY, function() {
                    i.pauseCounting = !1
                }),
                F.A.once(V.A.ADS_ENDED, this.detachEvents);
                var n = this.trackingController.trackVideoLinkClick.bind(this.trackingController)
                  , s = this.domCache
                  , r = s.skip
                  , o = s.link
                  , a = s.companion
                  , l = s.completed
                  , c = s.callToAction
                  , h = s.video
                  , u = s.pauseButton
                  , d = "click";
                er.A.addClickWithYield(r, this.skipCallback),
                er.A.addClickWithYield(a, this.trackCompanionClick);
                var A = this.trackingController.trackCompletedClick.bind(this.trackingController)
                  , p = this.trackingController.trackCallToActionClick.bind(this.trackingController);
                er.A.addClickWithYield(l, A),
                er.A.addClickWithYield(c, p),
                er.A.addClickWithYield(o, n),
                er.A.addClickWithYield(h, this.togglePlayPause),
                er.A.addClickWithYield(u, this.togglePlayPause),
                er.A.addClickWithYield(c, this.onLinkClick.bind(this, c)),
                er.A.addClickWithYield(o, this.onLinkClick.bind(this, o)),
                er.A.addClickWithYield(a, this.clickWithParentCheck),
                er.A.addClickWithYield(l, this.clickWithParentCheck),
                this.options.isBigCompanionEnabled && this.ad.isXhlPreroll && (er.A.addClickWithYield(this.companionBigElement, this.trackCompanionClick),
                er.A.addClickWithYield(this.companionBigElement, this.clickWithParentCheck),
                F.A.once(V.A.ADS_ENDED, function() {
                    i.companionElement.classList.remove("xplayer-ads-block-companion--icon-fixed"),
                    i.companionElement.classList.remove(eo)
                })),
                this.isExp7021 && (null == (e = this.visitSiteElement) || e.addEventListener(d, this.onLinkClick.bind(this, this.visitSiteElement)),
                null == (t = this.visitSiteElement) || t.addEventListener(d, n)),
                F.A.emit(V.A.ADS_COMPANION_READY),
                this.isPrerollSkipAfterProgressEnabled && (null == r || r.classList.add(eo),
                F.A.once(V.A.ADS_SHOW_SKIP_AFTER_PROGRESS, function() {
                    null == r || r.classList.remove(eo)
                }),
                F.A.once(V.A.ADS_ENDED, function() {
                    i.clearExpClasses()
                }))
            }
        }, {
            key: "showProgressWithoutSkip",
            value: function() {
                if (this.isPrerollSkipAfterProgressEnabled) {
                    var e;
                    this.prerollSkipAfterProgressClasses = ["xplayer-preroll-skip-after-progress"],
                    (e = this.core.element.classList).add.apply(e, (0,
                    h.A)(this.prerollSkipAfterProgressClasses))
                }
            }
        }, {
            key: "clearExpClasses",
            value: function() {
                var e, t;
                (null == (e = this.prerollSkipAfterProgressClasses) ? void 0 : e.length) > 0 && (t = this.core.element.classList).remove.apply(t, (0,
                h.A)(this.prerollSkipAfterProgressClasses))
            }
        }, {
            key: "showCallToAction",
            value: function(e) {
                this.domCache.callToAction && (!a.A.hasClass(this.domCache.callToAction, eo) || e < 3 || a.A.removeClass(this.domCache.callToAction, eo))
            }
        }, {
            key: "moveCompanionToFooter",
            value: function() {
                var e = this.options.isBigCompanionEnabled && this.ad.isXhlPreroll;
                if (this.options.isInExp99GroupC && !e && this.domCache.footer && this.options.footerContainerSelector) {
                    var t = document.querySelector(this.options.footerContainerSelector);
                    t && (t.innerHTML = "",
                    t.appendChild(this.domCache.footer))
                }
            }
        }, {
            key: "appendElement",
            value: function() {
                a.A.addClass(this.core.element, ea),
                this.options.mobileStyles && a.A.addClass(this.core.element, el),
                this.core.element.appendChild(this.element),
                this.moveCompanionToFooter()
            }
        }, {
            key: "hideOnSkip",
            value: function() {
                a.A.removeClass(this.domCache.skip, "xplayer-ads-block__skip--blocked"),
                a.A.removeClass(this.domCache.skip.querySelector(".xplayer-ads-block__skip--allowed-skip"), eo),
                a.A.addClass(this.domCache.skip.querySelector(".xplayer-ads-block__skip--with-timing"), eo)
            }
        }, {
            key: "hideAds",
            value: function(e) {
                var t, i = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
                this.moveFooter(e),
                i || a.A.removeClass(this.core.element, "xplayer-paused"),
                a.A.removeClass(this.core.element, ea),
                a.A.removeClass(this.core.element, el),
                a.A.removeClass(this.core.element, ec),
                a.A.removeClass(this.core.element, L),
                null == (t = this.element) || null == (t = t.parentNode) || t.removeChild(this.element),
                this.element = null
            }
        }, {
            key: "moveFooter",
            value: function(e) {
                if (e && this.domCache.footer && this.options.footerContainerSelector) {
                    var t = document.querySelector(this.options.footerContainerSelector);
                    if (t)
                        return t.innerHTML = "",
                        t.appendChild(this.domCache.footer),
                        F.A.emit(V.A.ADS_UNBLOCK_BOTTOM_BANNER),
                        !0
                }
                return !1
            }
        }, {
            key: "setDurationTiming",
            value: function(e, t) {
                !this.options.noSkipOffset && "b" !== this.options.prerollDurationExpGroup && (this.domCache.durationTiming || (this.domCache.durationTiming = document.querySelector(P.durationTiming)),
                this.domCache.durationTiming && (this.domCache.durationTiming.innerText = l.A.parseTime(e, t >= 3600)))
            }
        }, {
            key: "complete",
            value: function() {
                a.A.addClass(this.core.element, ec);
                var e, t = null == (e = this.domCache.footerCompleted) ? void 0 : e.querySelector(".xplayer-rotate");
                t && a.A.addClass(t, "xplayer-rotate--animate")
            }
        }, {
            key: "setEnded",
            value: function(e) {
                this.ended = e
            }
        }, {
            key: "calculateSkipTime",
            value: function() {
                var e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0]
                  , t = this.options.noSkipOffset || this.ad.skipOffset
                  , i = this.options.skipAdjustment
                  , n = i ? t / i : 1
                  , s = H.A.get("duration")
                  , r = e ? s : H.A.get("currentTime")
                  , o = Math.ceil(((t = t > s ? s : t) - r - this.countedWhileBuffering) / n);
                o > 0 ? this.domCache.skipTiming.innerText = o : (F.A.emit(V.A.ADS_ALLOW_SKIP),
                this.resetTimeouts(),
                this.options.noSkipOffset ? F.A.emit(V.A.ADS_RESUME_PLAY) : this.hideOnSkip(),
                this.trackingController.trackViewToSkip())
            }
        }, {
            key: "countOnPause",
            value: function(e) {
                if (this.options.tresholdTimer && !e) {
                    if (this.resetTimeouts(),
                    this.pauseCounting)
                        return !0;
                    this.tresholdTimeout = setTimeout(this.countWhileBufferingBinded, this.options.tresholdTimer)
                }
                return !1
            }
        }, {
            key: "countWhileBuffering",
            value: function() {
                this.whileBufferingTimer = setTimeout(this.countWhileBufferingCallbackBinded, 1e3)
            }
        }, {
            key: "countWhileBufferingTimerCallback",
            value: function() {
                this.countedWhileBuffering += 1,
                this.countWhileBuffering(),
                this.calculateSkipTime()
            }
        }, {
            key: "resetTimeouts",
            value: function() {
                clearTimeout(this.tresholdTimeout),
                clearTimeout(this.whileBufferingTimer)
            }
        }]);
        let eu = "xplayer-preroll-orientation";
        var ed = class {
            init() {
                var e, t;
                !(0,
                c.xz)(this.vastUrls) && this.template && "function" == typeof this.template && (this.attachPrerollExitEvents(),
                this.options.isNewPrerollDesign && this.core.element.classList.add("xplayer-ads-new-design"),
                H.A.set("ads", !0),
                this.adsData = new B({
                    vastUrls: this.vastUrls,
                    options: this.options
                }),
                this.trackingController = new es({
                    core: this.core,
                    collectorEnabled: this.options.trackCollector,
                    GAEnabled: null == (e = this.options) ? void 0 : e.trackGA,
                    GACollect: null == (t = this.options) ? void 0 : t.trackGACollect,
                    extraData: (0,
                    o._)({
                        url: this.vastUrls
                    }, this.options.trackCollectorExtra || {}),
                    sendToCollector: this.sendToCollector
                }),
                this.savePlaybackRateEventId = F.A.once(V.A.PLAYER_ON_RATECHANGE, this.savePlaybackRate, this),
                this.onPlayerErrorEventId = F.A.on(V.A.PLAYER_ON_ERROR, this.onPlayerError),
                this.prerollFallbackRequestId = F.A.on(V.A.ADS_SOURCE_FALLBACK_REQUEST, ()=>{
                    this.trackingController.trackFallback(b)
                }
                ),
                this.adblockStatusUpdateId = F.A.on(V.A.ADBLOCK_STATUS_UPDATE, e=>{
                    this.trackingController.collectorTracker.updateAdblockStatus(e)
                }
                ),
                F.A.once(V.A.ADS_ON_LINK_CLICK, e=>{
                    this.bindedCalcUserReturnTime = this.calcUserReturnsTime.bind(this, e),
                    document.addEventListener("visibilitychange", this.bindedCalcUserReturnTime)
                }
                ),
                F.A.once(V.A.PLAYER_PLAY, ()=>{
                    this.trackingController.startTracking(),
                    this.trackingController.trackPlay()
                }
                , this),
                this.playerPlayEventId = F.A.once(V.A.PLAYER_PLAY, this.playRequest, this),
                this.core.autoplay ? F.A.emit(V.A.PLAYER_PLAY) : this.options.preflight && (this.loadData(),
                this.preloadingData = !0,
                H.A.set("ads_preload", !0)),
                F.A.emit(V.A.ADS_INIT),
                this.attachPrerollExitEvents())
            }
            loadData() {
                if (!this.core.sourceController.ready)
                    return void F.A.once(V.A.SOURCE_CONTROLLER_READY, this.loadData, this);
                this.trackingController.startTracking();
                let e = this.trackingController.collectorTracker
                  , t = this.trackingController.GATracker
                  , i = e.track.bind(e)
                  , n = t.track.bind(t)
                  , s = t.setPrerollType.bind(t)
                  , r = e.setTrackingUrlAndType.bind(e);
                this.adsData.getAdData(i, n, r, s).then(()=>this.dataLoaded()).catch(e=>{
                    this.handleAdDataError(e)
                }
                )
            }
            dataLoaded() {
                var e, t, i, n;
                if (this.trackingController.trackOnDataLoaded(null == (e = this.adsData) ? void 0 : e.adsWithError, this.sourceController.getVideoType()),
                (null == (t = Object.keys(this.adsData.adsWithError)) ? void 0 : t.length) > 0 && (this.fallbackRequested = !0,
                this.trackingController.trackFallback(b)),
                !this.adsData.ad && (a.A.removeClass(this.core.element, O),
                F.A.emit(V.A.ADS_ENDED, null, this.options.preflight),
                F.A.emit(V.A.PLAYER_ON_PREVENT_PLAY_UNBLOCK),
                F.A.off(V.A.PLAYER_PLAY, this.playerPlayEventId),
                this.trackingController.unblockPlayerErrorController(),
                this.trackFallbackVideo(),
                (!this.preloadingData || H.A.get("play_requested")) && (null == (n = this.core.sourceController) || null == (i = n.detachAdsEvents) || i.call(n),
                this.sourceController.clearSource(this.getAdsStartedTime(), this.forceLoadSource, !this.preloadingData || H.A.get("play_requested"), !1))),
                H.A.get("play_requested") ? this.trackingController.trackDataOnPlay(this.adsData) : F.A.once(V.A.PLAYER_ON_PLAY, ()=>{
                    this.trackingController.trackDataOnPlay(this.adsData)
                }
                ),
                !this.adsData.ad) {
                    this.isAdSrcLoaded && (this.isAdSrcLoaded = !1,
                    this.resumePlayWithPreload());
                    return
                }
                if (this.options.preflight && !H.A.get("play_requested") && this.options.preloadVideo) {
                    this.sourcePromise = this.sourceController.setSource(this.adsData.ad.mediaFiles),
                    a.A.addClass(this.core.element, L),
                    this.sourcePromise.then(()=>{
                        this.isAdSrcLoaded = !0;
                        let e = null
                          , t = null
                          , i = null;
                        this.trackingController.setVideoType(this.sourceController.getVideoType()),
                        i = F.A.once(V.A.PLAYER_ON_ERROR, i=>{
                            var n, s;
                            if (this.trackingController.trackShownError(i, this.sourceController.getVideoType(), "_preload"),
                            null == (s = this.adsData) || null == (n = s.vastUrls) ? void 0 : n.length) {
                                this.fallbackRequested = !0,
                                F.A.emit(V.A.ADS_SOURCE_FALLBACK_REQUEST),
                                this.loadData();
                                return
                            }
                            this.resumePlayWithPreload(),
                            F.A.off(V.A.PLAYER_ON_CAN_PLAY, e),
                            F.A.off(V.A.PLAYER_ON_LOADED_DATA, t),
                            clearTimeout(this.abortShownTimeout)
                        }
                        ),
                        e = F.A.once(V.A.PLAYER_ON_CAN_PLAY, ()=>{
                            this.options.preloadLive || this.sourceController.stopStreamPreload(),
                            F.A.off(V.A.PLAYER_ON_LOADED_DATA, t),
                            F.A.off(V.A.PLAYER_ON_ERROR, i),
                            clearTimeout(this.abortShownTimeout)
                        }
                        ),
                        t = F.A.once(V.A.PLAYER_ON_LOADED_DATA, ()=>{
                            this.options.preloadLive || this.sourceController.stopStreamPreload(),
                            F.A.off(V.A.PLAYER_ON_CAN_PLAY, e),
                            F.A.off(V.A.PLAYER_ON_ERROR, i),
                            clearTimeout(this.abortShownTimeout)
                        }
                        )
                    }
                    ).catch(e=>{
                        var t, i;
                        if (this.trackingController.trackShownError(e, this.sourceController.getVideoType(), "_preload"),
                        null == (i = this.adsData) || null == (t = i.vastUrls) ? void 0 : t.length)
                            return void this.loadData();
                        this.resumePlayWithPreload()
                    }
                    ).finally(()=>{
                        this.trackingController.sendErrorsSourceNotSet(this.sourceController.getSetSourceErrors(), "_preload")
                    }
                    );
                    return
                }
                H.A.get("play_requested") && this.playRequest()
            }
            handleAdDataError() {
                var e, t, i, n;
                a.A.removeClass(this.core.element, O),
                clearTimeout(this.abortShownTimeout),
                null == (e = this.trackingController) || e.trackFallback(S),
                null == (t = this.trackingController) || t.unblockPlayerErrorController();
                let s = !this.preloadingData || H.A.get("play_requested");
                this.fallbackRequested = !0,
                this.preloadingData = !1,
                F.A.emit(V.A.PLAYER_ON_PREVENT_PLAY_UNBLOCK),
                F.A.off(V.A.PLAYER_PLAY, this.playerPlayEventId),
                this.trackFallbackVideo(),
                null == (n = this.core.sourceController) || null == (i = n.detachAdsEvents) || i.call(n),
                s && this.sourceController.clearSource(this.getAdsStartedTime(), this.forceLoadSource, s, !1),
                F.A.emit(V.A.ADS_ENDED, null, this.options.preflight)
            }
            resumePlayWithPreload() {
                F.A.emit(V.A.ADS_ENDED, null, this.options.preflight),
                F.A.emit(V.A.PLAYER_ON_PREVENT_PLAY_UNBLOCK),
                this.resumePlay({
                    type: "error"
                }, !this.preloadingData || H.A.get("play_requested")),
                F.A.off(V.A.PLAYER_PLAY, this.playerPlayEventId)
            }
            playRequest() {
                var e;
                if (a.A.addClass(this.core.element, O),
                !this.adsData.ad) {
                    H.A.set("play_requested", !0),
                    F.A.emit(V.A.SHOW_LOADER),
                    this.preloadingData || this.loadData(),
                    this.adsData.loader.setServerTimeout(this.options.abortServerTimeout);
                    return
                }
                this.preloadingData = !1,
                this.sourceController.setLoadingStop(),
                F.A.off(V.A.PLAYER_PLAY, this.playerPlayEventId),
                this.trackingController.setIsWrapper(null == (e = this.adsData.ad) ? void 0 : e.isWrapper),
                this.playAds()
            }
            savePlaybackRate() {
                let e = this.core.videoElement;
                1 !== e.playbackRate && (this.oldPlaybackRate = e.playbackRate,
                e.playbackRate = 1)
            }
            playAds() {
                var e;
                let t = null == (e = this.adsData) ? void 0 : e.ad;
                if (!t || this.blocked) {
                    F.A.emit(V.A.ADS_ENDED, null, this.options.preflight),
                    this.resumePlay(null, !this.preloadingData);
                    return
                }
                this.trackingController.trackPrerollOk(),
                this.renderController = new eh({
                    core: this.core,
                    adsOptions: this.options,
                    template: this.template,
                    countdownThumbUrl: this.countdownThumbUrl,
                    ad: this.getExtendedAd(),
                    trackingController: this.trackingController
                }),
                this.clearPrerollOrientationClasses(),
                this.allowSkip = !this.options.noSkipOffset && !t.skipOffset,
                this.attachEvents(),
                this.prepareCoreMobile(),
                this.prepareCoreVr(),
                this.showAds()
            }
            setStreamAdjustment() {
                this.core.videoElement.currentTime = 0
            }
            attachEvents() {
                this.detachEvents(),
                this.resumePlayId = F.A.on(V.A.ADS_RESUME_PLAY, this.resumePlay.bind(this)),
                this.adsSkipId = F.A.on(V.A.ADS_SKIP, this.skipAds, this),
                this.adsAllowSkipId = F.A.on(V.A.ADS_ALLOW_SKIP, ()=>{
                    this.allowSkip = !0
                }
                ),
                this.seekingEventId = F.A.once(V.A.PLAYER_ON_SEEKING, this.setStreamAdjustment.bind(this)),
                document.addEventListener("visibilitychange", this.setLeftTime.bind(this), {
                    once: !0
                })
            }
            detachEvents() {
                this.resumePlayId && F.A.off(V.A.ADS_RESUME_PLAY, this.resumePlayId),
                this.adsSkipId && F.A.off(V.A.ADS_SKIP, this.adsSkipId),
                this.adsAllowSkipId && F.A.off(V.A.ADS_ALLOW_SKIP, this.adsAllowSkipId),
                this.seekingEventId && F.A.off(V.A.PLAYER_ON_SEEKING, this.seekingEventId)
            }
            attachPrerollExitEvents() {
                let e = this.core.capabilities.ios ? "pagehide" : "beforeunload";
                window.addEventListener(e, this.onPageExit),
                F.A.once(V.A.ADS_ENDED, ()=>{
                    window.removeEventListener(e, this.onPageExit)
                }
                )
            }
            setLeftTime() {
                document.hidden && (this.userLeftTime = new Date().getTime())
            }
            calcUserReturnsTime(e) {
                if (document.hidden ? this.userLeftTime = new Date().getTime() : this.userBackTime = new Date().getTime(),
                !this.userLeftTime || !this.userBackTime)
                    return;
                let t = {
                    time: this.userBackTime - this.userLeftTime,
                    target: e.classList[0]
                };
                this.trackingController.collectorTracker.track("preroll_link_returned_to_xh_ms", t),
                document.removeEventListener("visibilitychange", this.bindedCalcUserReturnTime)
            }
            isTrafficStars() {
                return "ts" === this.adsData.currentVastData.type
            }
            getExtendedAd() {
                let e = this.adsData.currentVastData.type
                  , t = "xhl-live" === e
                  , i = {
                    isXhlPreroll: t || "xhl" === e,
                    isXhlLivePreroll: t,
                    companionIconDefault: this.options.companionIconDefault,
                    companionAdLinkText: this.options.companionAdLinkText
                };
                return (0,
                o._)({}, this.adsData.ad, i)
            }
            getPrerollOrientation() {
                var e, t;
                let i = this.options.prerollLayoutExpGroup || "a";
                return this.core.capabilities.mobile && this.options.mobileStyles && (null == (t = this.renderController) || null == (e = t.ad) ? void 0 : e.isXhlPreroll) && "a" !== i ? "b" === i ? this.core.isVideoVertical() ? "vertical" : null : this.core.isVideoVertical() ? "vertical" : "horizontal" : null
            }
            syncPrerollOrientationClasses() {
                let e = this.getPrerollOrientation()
                  , t = this.core.isVideoVertical() ? "vertical" : "horizontal";
                if (this.trackingController.collectorTracker.setVideoOrientation(t),
                !e)
                    return void this.clearPrerollOrientationClasses();
                this.core.element.classList.add(eu)
            }
            clearPrerollOrientationClasses() {
                this.trackingController.collectorTracker.setVideoOrientation(""),
                this.core.element.classList.remove(eu)
            }
            prepareCoreMobile() {
                this.core.capabilities.mobile && (this.core.options.mobileInline || (this.core.videoElement.setAttribute("webkit-playsinline", !0),
                this.core.videoElement.setAttribute("playsinline", !0)),
                this.core.options.mobileStubControls && (this.core.stubControls = !1,
                this.core.videoElement.removeAttribute("controls")))
            }
            resumeCoreMobile() {
                this.core.capabilities.mobile && (this.core.options.mobileInline || (this.core.videoElement.removeAttribute("webkit-playsinline"),
                this.core.videoElement.removeAttribute("playsinline")),
                this.core.options.mobileStubControls && (this.core.stubControls = !0))
            }
            prepareCoreVr() {
                F.A.emit(V.A.VR_ANIMATE_STOP),
                F.A.emit(V.A.VR_REMOVE_CROSSORIGIN)
            }
            resumeCoreVr() {
                F.A.once(V.A.PLAYER_ON_PLAYING, ()=>F.A.emit(V.A.VR_ANIMATE_START)),
                F.A.emit(V.A.VR_ADD_CROSSORIGIN)
            }
            getAdsStartedTime() {
                let e = H.A.get("savedCurrentTime")
                  , t = e || H.A.get("currentTime") || l.A.parseTimeOffset() || 0;
                return e && H.A.set("savedCurrentTime", 0),
                t
            }
            setAdDuration() {
                var e;
                let t = [Number(this.options.noSkipOffset), Number(null == (e = this.adsData.ad) ? void 0 : e.duration), Number(H.A.get("duration"))].filter(e=>!Number.isNaN(e));
                H.A.set("duration", Math.min(...t))
            }
            showAds() {
                var e;
                this.resetShowAdsEvents(),
                this.trackingController.setIsWrapper(null == (e = this.adsData.ad) ? void 0 : e.isWrapper),
                this.setAdDuration(),
                H.A.set("ads_skip_offset", this.adsData.ad.skipOffset),
                this.playerOnErrorEventId = F.A.once(V.A.PLAYER_ON_ERROR, this.onPlayerError),
                this.playerOnEndedEventId = F.A.once(V.A.PLAYER_ON_ENDED, this.onPlayerEnded, this),
                this.playerOnPlayingEventId = F.A.once(V.A.PLAYER_ON_PLAYING, this.onPlaying, this),
                this.playerOnDurationChange = F.A.on(V.A.PLAYER_ON_DURATION_CHANGE, this.setAdDuration.bind(this)),
                this.timeUpdateEventId = F.A.on(V.A.PLAYER_ON_TIMEUPDATE, this.onTimeUpdate, this),
                this.adsStartedPlayingTime = this.getAdsStartedTime(),
                this.playerPlayFailedEventId = F.A.on(V.A.PLAYER_PLAY_FAILED, ()=>{
                    F.A.emit(V.A.CONTROLS_RESET, this.adsStartedPlayingTime),
                    this.resumePlay({
                        type: "error"
                    })
                }
                ),
                this.sourcePromise || (this.sourcePromise = this.sourceController.setSource(this.adsData.ad.mediaFiles)),
                this.sourcePromise.then(()=>{
                    (this.sourceController.fallbackRequested || this.fallbackRequested) && (this.trackingController.trackFallback("preroll_fallback_shown"),
                    this.fallbackRequested = !1),
                    this.isAdSrcLoaded = !0,
                    this.sourcePromise.isResolved = !0,
                    F.A.emit(V.A.ADS_STARTED),
                    F.A.emit(V.A.PLAYER_ON_PREVENT_PLAY_UNBLOCK),
                    this.core.videoElement.currentTime = .1,
                    F.A.emit(V.A.PLAYER_PLAY);
                    let e = this.sourceController.getVideoType()
                      , t = this.trackingController.collectorTracker.getTrackingUrlAndType().type;
                    this.trackingController.setVideoType(e),
                    this.trackingController.sendErrorsSourceNotSet(this.sourceController.getSetSourceErrors()),
                    H.A.set("preroll_video_type", e),
                    H.A.set("preroll_type", t),
                    this.abortShownTimeout = setTimeout(()=>{
                        this.trackingController.trackPrerollTimeout(),
                        this.resumePlay({
                            type: "error"
                        })
                    }
                    , 1e3 * this.options.abortShownTimeout)
                }
                ).catch(e=>{
                    var t, i;
                    if (null == (i = this.adsData) || null == (t = i.vastUrls) ? void 0 : t.length) {
                        this.sourcePromise = null,
                        this.loadData();
                        return
                    }
                    F.A.emit(V.A.PLAYER_ON_PREVENT_PLAY_UNBLOCK),
                    this.trackingController.trackShownError(e, this.sourceController.getVideoType()),
                    this.resumePlay({
                        type: "error"
                    })
                }
                ).finally(()=>{
                    this.trackingController.sendErrorsSourceNotSet(this.sourceController.getSetSourceErrors())
                }
                )
            }
            onTimeUpdate() {
                if (this.accumulateShownTime(),
                this.renderController.countOnPause(this.allowSkip))
                    return;
                let e = this.options.noSkipOffset || this.adsData.ad.duration || H.A.get("duration")
                  , t = H.A.get("currentTime")
                  , i = Math.ceil(e - t);
                if (this.renderController.setDurationTiming(i, e),
                this.trackingController.trackTiming(t, e),
                !this.played && t > 0 && (this.played = !0,
                this.trackingController.trackPrerollShown(),
                clearTimeout(this.abortShownTimeout)),
                this.renderController.showCallToAction(t),
                i < 1) {
                    F.A.emit(V.A.PLAYER_PAUSE),
                    this.onPlayerEnded();
                    return
                }
                this.allowSkip || this.renderController.calculateSkipTime()
            }
            accumulateShownTime() {
                this.oldDate || (this.oldDate = Date.now());
                let e = Date.now() - this.oldDate;
                e > 500 ? this.oldDate = null : (this.oldDate = Date.now(),
                this.accumulatedShownTimeMs += e),
                this.accumulatedShownTimeMs > 5e3 && this.trackingController.trackShown5s(g)
            }
            onPlaying() {
                this.syncPrerollOrientationClasses(),
                this.renderController.appendElement()
            }
            onPlayerEnded() {
                var e;
                if ((null == (e = this.adsData.trackingEvents) ? void 0 : e.complete) && this.trackingController.vastEventsTracker.track("complete"),
                this.renderController.domCache.footerCompleted) {
                    this.showCompleted(),
                    this.allowSkip || this.renderController.calculateSkipTime(!0);
                    return
                }
                this.onEnded()
            }
            showCompleted() {
                this.renderController.complete();
                let e = this.options.completedStateDuration - 1
                  , t = setInterval(()=>{
                    this.renderController.setDurationTiming(e),
                    (e -= 1) < 0 && (clearInterval(t),
                    this.onEnded())
                }
                , 1e3)
            }
            onEnded() {
                this.ended || (H.A.set("ended", !1),
                this.trackingController.trackPrerollEnded(),
                this.resumePlay())
            }
            resetShowAdsEvents() {
                this.playerOnErrorEventId && F.A.off(V.A.PLAYER_ON_ERROR, this.playerOnErrorEventId),
                this.playerOnEndedEventId && F.A.off(V.A.PLAYER_ON_ENDED, this.playerOnEndedEventId),
                this.playerOnPlayingEventId && F.A.off(V.A.PLAYER_ON_PLAYING, this.playerOnPlayingEventId),
                this.playerOnDurationChange && F.A.off(V.A.PLAYER_ON_DURATION_CHANGE, this.playerOnDurationChange),
                this.timeUpdateEventId && F.A.off(V.A.PLAYER_ON_TIMEUPDATE, this.timeUpdateEventId),
                this.playerPlayFailedEventId && F.A.off(V.A.PLAYER_PLAY_FAILED, this.playerPlayFailedEventId)
            }
            resumePlay(e=null, t=!0, i=!1) {
                var n, s, r, o;
                let l = e && "error" === e.type;
                null == (n = this.trackingController) || n.detachPlayerEvents(),
                null == (s = this.trackingController) || s.unblockPlayerErrorController(),
                F.A.off(V.A.PLAYER_ON_RATECHANGE, this.savePlaybackRateEventId),
                F.A.off(V.A.ADS_SOURCE_FALLBACK_REQUEST, this.prerollFallbackRequestId),
                F.A.off(V.A.PLAYER_ON_ERROR, this.onPlayerErrorEventId),
                F.A.off(V.A.ADBLOCK_STATUS_UPDATE, this.adblockStatusUpdateId),
                this.detachEvents(),
                this.resetShowAdsEvents(),
                this.resumeCoreMobile(),
                this.trackFallbackVideo(),
                this.clearPrerollOrientationClasses(),
                F.A.emit(V.A.CONTROLS_RESET, this.adsStartedPlayingTime),
                this.sourceController.clearSource(this.adsStartedPlayingTime, this.forceLoadSource, t, i),
                null == (r = this.renderController) || r.hideAds(!l, !t),
                this.resumeCoreVr(),
                !this.renderController && a.A.hasClass(this.core.element, L) && a.A.removeClass(this.core.element, L),
                a.A.removeClass(this.core.element, O),
                this.oldPlaybackRate && (this.core.videoElement.playbackRate = this.oldPlaybackRate),
                this.ended = !0,
                null == (o = this.renderController) || o.setEnded(!0),
                F.A.emit(V.A.VR_TEXTURE_CLEAR),
                F.A.emit(V.A.ADS_ENDED, !l, !t)
            }
            trackFallbackVideo() {
                if (this.fallbackRequested) {
                    var e;
                    null == (e = this.trackingController) || e.trackFallback("preroll_fallback_video")
                }
            }
            skipAds() {
                this.allowSkip && (this.renderController.resetTimeouts(),
                this.trackingController.trackSkip(),
                this.resumePlay())
            }
            constructor(e, t, i={}) {
                var n;
                (0,
                r._)(this, "onPageExit", ()=>{
                    var e, t;
                    H.A.get("currentTime") > 0 || H.A.get("playing") ? null == (e = this.trackingController) || e.collectorTracker.track("preroll_page_exit_after_play") : null == (t = this.trackingController) || t.collectorTracker.track("preroll_page_exit_before_play")
                }
                ),
                (0,
                r._)(this, "onPlayerError", e=>{
                    var t, i, n;
                    if (null == (t = this.sourcePromise) ? void 0 : t.isResolved) {
                        if (clearTimeout(this.abortShownTimeout),
                        this.trackingController.trackShownError(e, this.sourceController.getVideoType()),
                        null == (n = this.adsData) || null == (i = n.vastUrls) ? void 0 : i.length) {
                            this.sourcePromise = null,
                            this.fallbackRequested = !0,
                            F.A.emit(V.A.ADS_SOURCE_FALLBACK_REQUEST),
                            this.loadData();
                            return
                        }
                        this.resumePlay(e)
                    }
                }
                ),
                this.core = e,
                this.options = (0,
                o._)({}, {
                    vastUrls: null,
                    preflight: !1,
                    trackCollector: 100 * Math.random() <= 10,
                    trackCollectorExtra: {},
                    trackGA: !1,
                    trackGACollect: ["play", "request", "response", "parsed", "shown", "viewToSkip", "viewToEnd", "skip", "click"],
                    abortServerTimeout: 3,
                    abortShownTimeout: 15,
                    maxDuration: 100,
                    maxSkipOffset: 100,
                    completedStateDuration: 5,
                    footerContainerSelector: null,
                    skipAdjustment: null,
                    videoLinkDisable: !0,
                    blockCssClass: null,
                    wrappersDepthLimit: 5,
                    processAdsData: null,
                    mobileStyles: !1,
                    linkClickSkip: !1,
                    preloadVideo: !1,
                    preloadLive: !1,
                    tresholdTimer: 0,
                    additionalButton: null,
                    isNewPrerollDesign: !1,
                    prerollLayoutExpGroup: null,
                    userLeftTime: null,
                    userBackTime: null
                }, i.ads || {}),
                this.template = t,
                this.vastUrls = (0,
                c.eX)(JSON.parse(JSON.stringify(this.options.vastUrls))),
                this.sendToCollector = (null == (n = i.statistics) ? void 0 : n.send) || null,
                this.sourceController = new G(this.core,this.options),
                this.playerOnEndedEventId = null,
                this.timeUpdateEventId = null,
                this.playerOnErrorEventId = null,
                this.playerPlayEventId = null,
                this.playerOnPlayingEventId = null,
                this.playerOnDurationChange = null,
                this.prerollFallbackRequestId = null,
                this.onPlayerErrorEventId = null,
                this.resumePlayId = null,
                this.adsSkipId = null,
                this.adsAllowSkipId = null,
                this.seekingEventId = null,
                this.trackingController = null,
                this.adsStartedPlayingTime = 0,
                this.allowSkip = !1,
                this.played = !1,
                this.ended = !1,
                this.blocked = !1,
                this.abortShownTimeout = null,
                this.forceLoadSource = !!this.core.capabilities.chrome,
                this.preloadingData = !1,
                this.isAdSrcLoaded = !1,
                this.sourcePromise = null,
                this.oldPlaybackRate = null,
                this.oldDate = null,
                this.accumulatedShownTimeMs = 0,
                this.fallbackRequested = !1,
                this.init()
            }
        }
    },
    65195: function(e, t, i) {
        "use strict";
        i.d(t, {
            Q: function() {
                return v
            }
        });
        var n = i(69277)
          , s = i(38432)
          , r = i(97590);
        let o = "Preroll"
          , a = "Companion"
          , l = (e={},t="",i)=>e.isXhlPreroll ? ((e="",t)=>{
            let i = new URL(e);
            return i.searchParams.set("widgetElement", t),
            i.toString()
        }
        )(t, i) : t
          , c = (e={})=>{
            let {link: t, headline: i, ctabrandname: n} = e.companion || {};
            return !!(t && i && n)
        }
        ;
        function h(e) {
            if (!c(e)) {
                let t = (0,
                r.T)("xplayerAdsVisitSite");
                return {
                    link: e.link,
                    headline: e.title,
                    ctabrandname: t,
                    adlinktext: e.title
                }
            }
            let {link: t} = e.companion
              , {headline: i, ctabrandname: n, adlinktext: s} = e.companion;
            try {
                t = new URL(t)
            } catch (i) {
                t = e.companion.link
            }
            return {
                link: t,
                headline: i,
                ctabrandname: n,
                adlinktext: s
            }
        }
        let u = (e={})=>{
            var t;
            return (null == (t = e.country) ? void 0 : t.code) ? `<div class="xh-flag xplayer-preroll-flag ${e.country.code.toLowerCase()}"></div>` : ""
        }
          , d = (e,t=!0)=>`
        <span class="xplayer-ads-block__footer-action-button">
            <span>${e}</span>
            ${t ? '<div className="xplayer-ads-block__footer-action-button-link-icon"></div>' : ""}
        </span>
    `
          , A = (e={},t={})=>t.isEuCountry ? e.isXhlPreroll ? ((e={})=>{
            let t = "xplayer-ads-block__xhl-info-label"
              , i = e.isCompanion ? `${t}--companion` : "";
            return `<div class="${t} ${i}" data-role="xhl-info-label"></div>`
        }
        )(e) : ((e={})=>{
            let {linearAdvertiser: t, wrapperAdvertiser: i, isCompanion: n, complaintLink: s} = e
              , o = t || i;
            if (!o)
                return "";
            let a = "xplayer-ads-block__advertiser-label"
              , l = n ? `${a}--companion` : ""
              , c = s ? `data-complaint-link="${s}"` : "";
            return `
        <div
            class="${a} ${l}"
            data-advertiser="${o}"
            data-role="ad-label"
            ${c}
        >
            ${(0,
            r.T)("xplayerAdsLabelAdUpper")}
        </div>
    `
        }
        )(e) : ""
          , p = (e={})=>{
            var t;
            if (!c(e))
                return "";
            let {companionIconDefault: i, isXhlPreroll: n} = e
              , s = null == (t = e.companion) ? void 0 : t.icon;
            return n ? s || i : s
        }
          , m = (e={},t={})=>{
            let i = A((0,
            n._)({}, e, {
                isCompanion: !0
            }), t)
              , s = "xplayer-ads-block__footer"
              , o = `${s}-brandname-text`
              , a = ((e={})=>{
                var t, i;
                if (!c(e))
                    return e.title;
                let {isXhlPreroll: n, companionAdLinkText: s} = e;
                return n ? s || (null == (i = e.companion) ? void 0 : i.ctabrandname) : null == (t = e.companion) ? void 0 : t.ctabrandname
            }
            )(e);
            return i ? `
            <span class="${s}-brandname--flex">
                <span class="${o} ${o}--white">
                    ${a}
                </span>
                ${i}
            </span>
        ` : `
            <span class="${s}-brandname-ad">${(0,
            r.T)("xplayerAdsLabelAd")}</span>
            <span class="${o}">${a}</span>
        `
        }
          , v = {
            getAdLabel: A,
            getVideoLink(e, t) {
                let i = l(e, e.link, o);
                return t.videoLinkDisable ? '<div class="xplayer-ads-block__video"></div>' : `<a class="xplayer-ads-block__link" target="_blank" href="${i}"></a>`
            },
            getAdsLinks(e, t) {
                var i;
                let n = null == (i = t.country) ? void 0 : i.name
                  , s = n && e.isXhlPreroll || e.isXhlLivePreroll;
                return `<div class="xplayer-ads-block-links">
                  ${s ? `
                        <div class="xplayer-ads-block-live-label">
                            <div class="xplayer-ads-block-live-label__record"></div>
                            <div class="xplayer-ads-block-live-label__text">
                                ${n || (0,
                r.T)("xplayerAdsLiveNow")}
                            </div>
                            ${u(t)}
                        </div>` : ""}
                </div>`
            },
            getAdsInfo(e, t, i=!1) {
                let n = i ? A(e, t) : ""
                  , r = !i && "b" === t.prerollDurationExpGroup
                  , o = i && t.noDesktopDuration
                  , a = t.noSkipOffset
                  , l = `
            <span class="xplayer-ads-block__info-new--timing">
                ${s.A.parseTime(e.duration)}
            </span>`;
                return `<div class="xplayer-ads-block__info-new">
                    ${a || r || o ? "" : l}
                    ${n}
                </div>`
            },
            getAdsSkip(e, t={}) {
                let i = t.noSkipOffset
                  , n = i ? (0,
                r.T)("xplayerAdsVideoStartsIn") : null
                  , s = i || t.skipAdjustment || e.skipOffset;
                return `<button class="xplayer-ads-block__skip ${s ? " xplayer-ads-block__skip--blocked" : ""}">
                <span class="xplayer-ads-block__skip--with-timing ${s ? "" : " xh-helper-hidden"}">
                    ${n || (0,
                r.T)("xplayerAdsSkipAdIn")}
                    <span class="xplayer-ads-block__skip--timing">
                        ${s}
                    </span>
                </span>
                ${i ? "" : `
                    <span class="xplayer-ads-block__skip--allowed-skip${s ? " xh-helper-hidden" : ""}">
                        ${(0,
                r.T)("xplayerAdsSkipAd")}
                        <div class="xplayer-ads-block__skip--with-arrow"></div>
                    </span>`}
            </button>`
            },
            getAdditionalButton: e=>e.additionalButton || "",
            getAdsCallToActionDesktop(e={}) {
                let t = l(e, e.link, o);
                return `
            <a href="${t}" target="_blank" class="xplayer-ads-block__cta xplayer-ads-block__callToAction xh-helper-hidden">
                <span class="xplayer-ads-block__callToAction--no-title">${(0,
                r.T)("xplayerAdsVisitSite")}</span>
                <span class="xplayer-ads-block__callToAction--with-title">${e.ctaText}</span>
            </a>
        `
            },
            getCompanionMobileBig(e={}, t={}) {
                let {link: i, ctabrandname: n, headline: s, adlinktext: r} = h(e, t)
                  , o = l(e, i, a)
                  , A = p(e)
                  , v = "xplayer-ads-block-companion xplayer-ads-block-companion--big"
                  , E = c(e) ? "" : `${v}--empty`
                  , f = `${v} ${E}`;
                return `
        <a id="xh-companion-big" href="${o}" target="_blank" class="${f} xplayer-ads-block__footer">
          <div class="xplayer-ads-block__footer-content">
            ${A ? `
              <div class="xplayer-ads-block__footer-icon-wrapper">
                <span class="xplayer-ads-block__footer-icon">
                    <img src="${A}" alt="${n}">
                </span>
              </div>` : ""}
            <div class="xplayer-ads-block__footer-texts ${A ? "" : "xplayer-ads-block__footer-texts--no-icon"}">
              <div class="xplayer-ads-block__footer-headline-container">
                <div class="xplayer-ads-block__footer-headline">
                    <span>${s.trim()}  ${u(t)}</span>
                </div>
              </div>
              <div class="xplayer-ads-block__footer-brandname">
                ${m(e, t)}
              </div>
            </div>
          </div>

          ${d(r)}

          <div class="xplayer-ads-block__footer-action">
            ${d(r)}
          </div>
        </a>`
            },
            getMobileCloseElement: ()=>'<div class="xplayer-ads-block-companion-close"></div>',
            getVisitSiteButton(e) {
                let t = l(e, e.link, o);
                return `
            <a href="${t}" target="_blank"  class="xplayer-ads-block-visit-site">
                <div class="xplayer-ads-block-visit-site__text">${(0,
                r.T)("xplayerAdsVisitSite")}</div>
                <div class="xplayer-ads-block-visit-site__icon"></div>
            </a>
        `
            },
            getCompanion(e={}, t={}) {
                let {link: i, ctabrandname: n, headline: s, adlinktext: r} = h(e, t)
                  , o = l(e, i, a)
                  , A = p(e)
                  , v = "xplayer-ads-block-companion"
                  , E = t.isBigCompanionEnabled && e.isXhlPreroll
                  , f = E ? `${v}--icon-fixed` : ""
                  , _ = `${v} ${f}  ${E ? "xh-helper-hidden" : ""}`.trim()
                  , y = c(e) ? "" : `${_}--empty`
                  , g = `${_} ${y} xplayer-ads-block__footer`;
                return `
        <a href="${o}" target="_blank"  class="${g}">
          <div class="xplayer-ads-block__footer-content">
            ${A ? `
              <div class="xplayer-ads-block__footer-icon-wrapper">
                <span class="xplayer-ads-block__footer-icon">
                    <img src="${A}" alt="${n}">
                </span>
              </div>` : ""}

            <div class="xplayer-ads-block__footer-texts ${A ? "" : "xplayer-ads-block__footer-texts--no-icon"}">
              <div class="xplayer-ads-block__footer-headline-container">
                <div class="xplayer-ads-block__footer-headline">
                    <span>${s.trim()}  ${u(t)}</span>
                </div>
              </div>
              <div class="xplayer-ads-block__footer-brandname">
                ${m(e, t)}
              </div>
            </div>
          </div>

          ${d(r)}
          
          <div class="xplayer-ads-block__footer-action">
             ${d(r)}
          </div>
        </a>`
            },
            getCompanionCompleted(e={}, t={}, i=!1) {
                let {linearAdvertiser: n, wrapperAdvertiser: s} = e || {}
                  , {link: r, headline: o, ctabrandname: d, adlinktext: A} = h(e, t)
                  , m = l(e, r, a)
                  , v = p(e)
                  , E = n || s || e.isXhlPreroll
                  , f = t.isEuCountry && E;
                return t.noSkipOffset ? "" : `<a
          href="${m}"
          target="_blank"
          class="xplayer-ads-block-companion-completed xplayer-ads-block__footer-completed"
        >
            <div class="xplayer-rotate ${f && i ? "xplayer-rotate--with-advertiser" : ""}">
                <div class="spinner pie"></div>
                <div class="filler pie"></div>
                <div class="mask"></div>
            </div>
            <div class="xplayer-ads-block__footer-completed-center">
                ${v ? `
                  <span class="xplayer-ads-block__footer-completed-icon">
                    <img src="${v}" alt="${d}">
                  </span>` : ""}

                <div class="xplayer-ads-block__footer-headline-container">
                  <div class="xplayer-ads-block__footer-completed-headline">
                      ${o.trim()}
                  </div>
                  ${u(t)}
                </div>

                ${c(e) ? `<div class="xplayer-ads-block__footer-completed-brandname">
                      ${d}
                      <span class="xplayer-ads-block__footer-completed-link-icon"></span>
                    </div>` : `<span class="xplayer-ads-block__footer-action-button
                      xplayer-ads-block__footer-completed-action-button
                    ">
                      <span>${A}</span>
                    </span>`}
            </div>
        </a>`
            },
            getCompanionAdsDesktop(e, t) {
                if (!c(e))
                    return "";
                let {link: i, ctabrandname: n, headline: s, adlinktext: r} = h(e, t)
                  , o = l(e, i, a);
                return `
        <a
          href="${o}" target="_blank"
          class="xplayer-ads-block-companion xplayer-ads-block__footer xplayer-ads-block-companion--desktop"
        >
            <div class="xplayer-ads-block__footer-info-content">
              <span class="xplayer-ads-block__footer-icon">
                  <img src="${p(e)}" alt="${n}">
              </span>
              <div class="xplayer-ads-block__footer-texts">
                <div class="xplayer-ads-block__footer-headline-container">
                  <div class="xplayer-ads-block__footer-headline">
                      <span>${s.trim()} ${u(t)}</span>
                  </div>
                </div>

                <div class="xplayer-ads-block__footer-brandname">
                  ${m(e, t)}
                </div>
              </div>
            </div>

            <div class="xplayer-ads-block__footer-action">
                ${d(r, !1)}
            </div>
        </a>`
            },
            getPauseButton: ()=>`<div class="xplayer-ads-block__pause-button">
                    <div class="xplayer-ads-block__pause-button-inner"></div>
                </div>`
        }
    },
    9479: function(e, t, i) {
        "use strict";
        i.d(t, {
            A: function() {
                return s
            }
        });
        var n = i(65195);
        function s(e, t) {
            let {getVideoLink: i, getPauseButton: s, getAdsInfo: r, getAdsLinks: o, getAdsSkip: a, getAdditionalButton: l, getCompanion: c, getCompanionMobileBig: h, getMobileCloseElement: u, getCompanionAdsDesktop: d, getCompanionCompleted: A} = n.Q
              , p = null == t ? void 0 : t.companionLayout
              , m = "desktop" === p ? d(e, t) : c(e, t)
              , v = (null == t ? void 0 : t.isBigCompanionEnabled) && (null == e ? void 0 : e.isXhlPreroll) && "desktop" !== p
              , E = v ? h(e, t) : ""
              , f = v ? u() : ""
              , _ = document.querySelector(".xplayer-menu-mobile-top");
            return null == _ || _.insertAdjacentHTML("afterbegin", r(e, t)),
            `
      ${i(e, t)}
      ${s(e, t)}
      ${A(e, t)}
      ${o(e, t)}
      ${a(e, t)}
      ${l(t)}
      ${m}
      ${E}
      ${f}
    `
        }
    },
    25689: function(e, t, i) {
        "use strict";
        var n = i(7163)
          , s = i(10809)
          , r = i(54098)
          , o = i(37651);
        let a = "overlay-menu-opened"
          , l = "xplayer-aftershot-fullscreen";
        t.A = class {
            init() {
                var e;
                this.render(),
                this.overlayMenuToggleEventId = o.A.on(s.A.OVERLAY_MENU_TOGGLE, this.toggle, this),
                this.playerOnPlayEventId = o.A.on(s.A.PLAYER_ON_PLAY, this.onPlayerPlay, this),
                this.playerOnEndedEventId = o.A.on(s.A.PLAYER_ON_ENDED, this.toggle, this),
                o.A.once(s.A.AFTERSHOT_DESTROY, this.destroy, this),
                o.A.on(s.A.AFTERSHOT_RENDERED, this.toggleCompanion.bind(this)),
                o.A.on(s.A.AFTERSHOT_CLOSE, this.toggleCompanion.bind(this)),
                this.isMobileV2 && o.A.on(s.A.PLAYER_ON_FULLSCREEN_CHANGE, this.addAftershotFullscreenClass.bind(this)),
                (null == (e = this.options) ? void 0 : e.exitFullscreenOnAftershot) && o.A.on(s.A.PLAYER_ON_ENDED, ()=>{
                    r.A.get("fullscreen") && o.A.emit(s.A.PLAYER_TOGGLE_FULLSCREEN)
                }
                )
            }
            removeAllChildNodes(e) {
                for (; e.firstChild; )
                    e.removeChild(e.firstChild)
            }
            toggleCompanion() {
                var e, t, i;
                if (!(null == (t = this.core) || null == (e = t.capabilites) ? void 0 : e.idevice)) {
                    if (this.aftershotContainer || (this.aftershotContainer = document.querySelector("#xplayer-aftershot-companion")),
                    this.companion || (this.companion = document.querySelector(".xplayer-ads-block-companion")),
                    this.companionContainer || (this.companionContainer = null == (i = this.companion) ? void 0 : i.parentNode),
                    !this.aftershotContainer || !this.companion)
                        return;
                    this.core.isFullscreen() && !this.companionMovedToAftershot ? (this.companionMovedToAftershot = !0,
                    this.aftershotContainer.appendChild(this.companion),
                    n.A.addClass(this.companion, "aftershot-inner-companion"),
                    this.fullscreenChangeEventId = o.A.on(s.A.PLAYER_ON_FULLSCREEN_CHANGE, this.toggleCompanion.bind(this))) : this.companionMovedToAftershot && (this.companionContainer.appendChild(this.companion),
                    n.A.removeClass(this.companion, "aftershot-inner-companion"),
                    o.A.off(s.A.PLAYER_ON_FULLSCREEN_CHANGE, this.fullscreenChangeEventId),
                    this.companionMovedToAftershot = !1)
                }
            }
            addAftershotFullscreenClass() {
                this.core.isFullscreen() ? n.A.addClass(this.core.element, l) : n.A.removeClass(this.core.element, l)
            }
            onPlayerPlay() {
                this.shown && this.core.emit(s.A.OVERLAY_MENU_TOGGLE)
            }
            toggle() {
                if (r.A.get("ads") && o.A.once(s.A.ADS_STARTED, this.hide, this),
                !(r.A.get("ads_playing") || r.A.get("swiping"))) {
                    if (this.element || this.render(),
                    this.shown) {
                        this.core.emit(s.A.USER_ACTION_UNBLOCK),
                        this.hide();
                        return
                    }
                    this.core.emit(s.A.USER_ACTION_BLOCK),
                    this.show()
                }
            }
            render() {
                this.element = document.createElement("div"),
                this.element.className = "xp-aftershot",
                this.core.element.appendChild(this.element)
            }
            show() {
                this.shown = !0,
                this.core.emit(s.A.PLAYER_PAUSE),
                this.core.emit(s.A.AFTERSHOT_SHOW),
                n.A.addClass(this.core.element, a)
            }
            hide() {
                this.shown && (this.shown = !1,
                n.A.removeClass(this.core.element, a),
                o.A.emit(s.A.AFTERSHOT_SEND_UI_CLOSE))
            }
            destroy() {
                o.A.off(s.A.OVERLAY_MENU_TOGGLE, this.overlayMenuToggleEventId),
                o.A.off(s.A.PLAYER_ON_PLAY, this.playerOnPlayEventId),
                o.A.off(s.A.PLAYER_ON_ENDED, this.playerOnEndedEventId),
                n.A.removeElement(this.element),
                n.A.removeClass(this.core.element, a)
            }
            constructor(e, t) {
                this.core = e,
                this.options = (null == t ? void 0 : t.aftershot) || {},
                this.isMobileV2 = null == t ? void 0 : t.mobileV2,
                this.shown = !1,
                this.overlayMenuToggleEventId = null,
                this.playerOnPlayEventId = null,
                this.playerOnEndedEventId = null,
                this.companionMovedToAftershot = !1,
                this.companionContainer = null,
                this.companion = null,
                this.aftershotContainer = null,
                this.fullscreenChangeEventId = null,
                this.init()
            }
        }
    },
    91414: function(e, t) {
        "use strict";
        t.A = class {
            init() {
                this.render()
            }
            render() {
                this.element = document.createElement("div"),
                this.element.className = "xplayer-background",
                this.core.element.appendChild(this.element)
            }
            constructor(e) {
                this.core = e,
                this.init()
            }
        }
    },
    77920: function(e, t, i) {
        "use strict";
        i.d(t, {
            A: function() {
                return a
            }
        });
        var n = i(7163)
          , s = i(10809)
          , r = i(54098)
          , o = i(9776)
          , a = class {
            init() {
                this.show && (this.render(),
                this.attachEvents())
            }
            render() {
                this.element = document.createElement("div"),
                this.element.className = `${this.BANNER_DEFAULT_CLASS} xh-helper-hidden`,
                this.core.element.appendChild(this.element)
            }
            renderBanner() {
                var e, t;
                this.element.innerHTML = (e = this.bannerHtml,
                t = this.classNames,
                `<div class="${t.overlay} ${t.close}">
        <div class="${t.centered}">
            <button class="${t.close}"><i class="xp-icon pause-spot-close-icon"></i></button>
            ${e}
        </div>
    </div>`),
                this.isHidden = !1,
                this.core.emit(s.A.BANNER_RENDERED)
            }
            attachEvents() {
                o.A.addClickWithYield(this.element, this.onElementClick.bind(this)),
                this.core.on(s.A.PLAYER_ON_PLAY, this.hideBannerAndUnblockUserAction, this),
                this.core.on(s.A.PLAYER_PAUSED, this.showBanner, this),
                this.core.on(s.A.OVERLAY_MENU_TOGGLE, this.onOverlayMenuToggle, this),
                this.core.on(s.A.PLAYER_ON_ENDED, this.onOverlayMenuToggle, this),
                this.core.on(s.A.PLAYER_ON_PROGRESS_BAR_MOVE, this.hideBanner, this),
                this.core.on(s.A.SHARE_MENU_OPEN, this.hideBanner, this),
                this.core.on(s.A.PAUSE_ACTION_BLOCK, this.onBannerBlock, this),
                this.core.on(s.A.PAUSE_ACTION_UNBLOCK, this.onBannerUnblock, this),
                this.core.on(s.A.PLAYER_ON_SWIPE_START, this.hideBanner, this)
            }
            onElementClick(e) {
                this.core.element.focus(),
                (n.A.hasClass(e.target, this.BANNER_CLOSE_CLASS) || n.A.hasClass(e.target, this.BANNER_CLOSE_ICON_CLASS)) && this.hideBannerAndUnblockUserAction()
            }
            onOverlayMenuToggle() {
                !r.A.get("ads_playing") && (this.overlayMenuOpened = !this.overlayMenuOpened,
                this.overlayMenuOpened && this.hideBanner())
            }
            onBannerBlock() {
                this.bannerBlocked = !0
            }
            onBannerUnblock() {
                this.bannerBlocked = !1
            }
            hideBannerAndUnblockUserAction() {
                this.core.emit(s.A.USER_ACTION_UNBLOCK),
                this.hideBanner()
            }
            hideBanner() {
                this.isHidden = !0,
                n.A.addClass(this.element, "xh-helper-hidden")
            }
            showBanner() {
                !r.A.get("swiping") && r.A.get("play_requested") && this.isHidden && !(this.overlayMenuOpened || this.bannerBlocked || r.A.get("ads_playing")) && (this.core.emit(s.A.USER_ACTION_BLOCK),
                this.renderBanner(),
                n.A.removeClass(this.element, "xh-helper-hidden"))
            }
            constructor(e, t) {
                var i, n;
                this.core = e,
                this.options = t,
                this.classNames = t.bannerPauseSpotClassNames,
                this.BANNER_DEFAULT_CLASS = null == (i = this.classNames) ? void 0 : i.pauseSpotContainer,
                this.BANNER_CLOSE_CLASS = null == (n = this.classNames) ? void 0 : n.close,
                this.BANNER_CLOSE_ICON_CLASS = "pause-spot-close-icon",
                this.bannerHtml = this.options.banner && this.options.banner.bannerHtml || !1,
                this.isHidden = !0,
                this.show = this.options.banner && this.bannerHtml && this.options.banner.show || !1,
                this.overlayMenuOpened = !1,
                this.bannerBlocked = !1,
                this.core.cssModules || (this.core.cssModules = {}),
                this.core.cssModules.pauseBanner = this.classNames,
                this.init()
            }
        }
    },
    99785: function(e, t, i) {
        "use strict";
        var n = i(10809)
          , s = i(37651);
        let r = "xplayer-mute-control"
          , o = "muted"
          , a = `${r}__icon`
          , l = `${r}__backdrop`;
        t.A = class {
            init() {
                this.core.capabilities.volumeControl && (this.render(),
                this.attachEvents())
            }
            render() {
                this.element = document.createElement("div"),
                this.element.className = r,
                this.sfw.moderationTimestamp && (this.core.videoElement.muted = !0),
                (this.sfw.moderationTimestamp || this.core.settings.muted) && this.element.classList.add(o);
                let e = document.createElement("div")
                  , t = document.createElement("div");
                e.className = l,
                t.className = a,
                this.element.appendChild(e),
                this.element.appendChild(t)
            }
            attachEvents() {
                this.element.addEventListener("click", this.onElementClick.bind(this)),
                s.A.on(n.A.PLAYER_ON_VOLUME_CHANGE, this.onVolumeChange.bind(this))
            }
            onElementClick() {
                if (this.sfw.moderationTimestamp)
                    return void s.A.emit(n.A.SFW_VERIFY);
                this.core.videoElement.muted = !this.core.videoElement.muted,
                s.A.emit(n.A.MUTE_CLICK, this.core.videoElement.muted ? "on" : "off")
            }
            onVolumeChange(e) {
                this.sfw.moderationTimestamp || (e.target.muted || e.target.volume < .02 ? this.element.classList.add(o) : this.element.classList.remove(o))
            }
            constructor(e) {
                var t;
                this.core = e,
                this.sfw = (null == (t = e.options) ? void 0 : t.sfw) || {},
                this.init()
            }
        }
    },
    98538: function(e, t, i) {
        "use strict";
        var n = i(10809)
          , s = i(37651)
          , r = i(54098);
        let o = "xplayer-rate-control"
          , a = `${o}--show`;
        t.A = class {
            init() {
                this.render(),
                this.attachEvents()
            }
            render() {
                this.element = document.createElement("div"),
                this.element.className = o,
                this.setRate()
            }
            setRate() {
                1 !== r.A.get("playbackRate") ? (this.element.textContent = `${r.A.get("playbackRate")}x`,
                this.element.classList.add(a)) : (this.element.textContent = "",
                this.element.classList.remove(a))
            }
            attachEvents() {
                s.A.on(n.A.PLAYER_SET_PLAYBACK_RATE, this.setRate, this),
                s.A.on(n.A.PLAYER_ON_RATECHANGE, this.setRate, this),
                s.A.on(n.A.PLAYER_ON_RATECHANGE, ()=>{
                    s.A.emit(n.A.PLAYER_PLAY)
                }
                ),
                this.element.addEventListener("click", this.onElementClick.bind(this))
            }
            onElementClick() {
                this.core.emit(n.A.SETTINGS_MENU_OPEN)
            }
            constructor(e) {
                this.core = e,
                this.init()
            }
        }
    },
    9265: function(e, t, i) {
        "use strict";
        var n = i(26838)
          , s = i(7163)
          , r = i(10809)
          , o = i(37651)
          , a = i(9776);
        let l = "xp-quality-control";
        t.A = class {
            init() {
                this.render(),
                this.attachEvents()
            }
            render() {
                this.element = document.createElement("div"),
                this.element.className = l,
                this.renderQuality()
            }
            renderQuality(e) {
                if (!this.core.sourceController.ready)
                    return;
                e && "string" == typeof e || (e = this.core.sourceController.getCurrentQuality());
                let t = this.core.sourceController.getType(e);
                this.element.textContent = e,
                this.element.className = l,
                t && s.A.addClass(this.element, t)
            }
            attachEvents() {
                o.A.on(r.A.SOURCE_TYPE_CHANGE, this.renderQuality, this),
                o.A.on(r.A.SOURCE_CONTROLLER_READY, this.renderQuality, this),
                o.A.on(r.A.PLAYER_SET_SOURCE, this.renderQuality, this),
                a.A.addClickWithYield(this.element, this.onElementClick.bind(this))
            }
            onElementClick() {
                var e = this;
                return (0,
                n._)(function*() {
                    e.core.emit(r.A.SETTINGS_MENU_OPEN),
                    e.core.emit(r.A.PLAYER_PAUSE, {
                        fromSettings: !0
                    })
                })()
            }
            constructor(e) {
                this.core = e,
                this.init()
            }
        }
    },
    87513: function(e, t, i) {
        "use strict";
        i.d(t, {
            A: function() {
                return a
            }
        });
        var n = i(38432)
          , s = i(37651)
          , r = i(10809)
          , o = i(54098)
          , a = class {
            init() {
                this.render(),
                this.attachEvents()
            }
            render() {
                this.element = document.createElement("div"),
                this.element.className = "timing",
                this.element.innerHTML = '<span class="played">00:00</span><span class="separator">/</span><span class="eta">00:00</span>',
                this.playedElement = this.element.getElementsByClassName("played")[0],
                this.etaElement = this.element.getElementsByClassName("eta")[0],
                this.etaElement.childNodes[0].nodeValue = n.A.parseTime(o.A.get("duration"), o.A.get("duration") >= 3600)
            }
            attachEvents() {
                s.A.on(r.A.PLAYER_ON_TIMEUPDATE, this.onPlayerTimeUpdate, this),
                s.A.on(r.A.PLAYER_SET_CURRENT_TIME, this.onPlayerSetCurrentTime, this),
                s.A.on(r.A.PLAYER_ON_DURATION_CHANGE, this.onPlayerDurationChange, this),
                s.A.on(r.A.PROGRESS_BAR_HANDLER_MOVE, this.setCurrentTime, this),
                s.A.on(r.A.PLAYER_SET_SOURCE, this.onPlayerSetSource, this),
                s.A.on(r.A.PLAYER_ON_LOAD_META_DATA, this.onPlayerLoadMetaData, this),
                s.A.once(r.A.NO_USER_ACTION, this.onNoUserAction, this),
                s.A.on(r.A.CONTROLS_RESET, this.onControlsReset, this),
                s.A.once(r.A.PLAYER_PLAY, this.unblockTiming, this),
                s.A.on(r.A.REMOTE_PLAYER_PLAYING, this.unblockTiming, this)
            }
            onPlayerTimeUpdate(e) {
                if (!0 === this.blockTimeUpdate || !0 === this.timingHidden)
                    return;
                let t = n.A.parseTime(e.target.currentTime, e.target.duration >= 3600);
                t !== this.lastValue && (this.lastValue = t,
                this.playedElement.textContent = t)
            }
            onPlayerSetCurrentTime(e) {
                let t;
                t = e < 0 ? 0 : e > this.core.videoElement.duration ? this.core.videoElement.duration : e,
                this.setCurrentTime(t)
            }
            onPlayerDurationChange(e) {
                this.isTimingBlocked || this.setDuration(e.target.duration)
            }
            setDuration(e) {
                this.etaElement.childNodes[0].nodeValue = n.A.parseTime(e, o.A.get("duration") >= 3600)
            }
            unblockTiming() {
                this.isTimingBlocked = !1
            }
            setCurrentTime(e) {
                this.playedElement.childNodes[0].nodeValue = n.A.parseTime(e, o.A.get("duration") >= 3600)
            }
            onPlayerSetSource() {
                "standard" === this.core.sourceController.type && (this.blockTimeUpdate = !0)
            }
            onPlayerLoadMetaData() {
                this.blockTimeUpdate = !1
            }
            onUserAction() {
                this.timingHidden = !1,
                this.core.once(r.A.NO_USER_ACTION, this.onNoUserAction.bind(this))
            }
            onNoUserAction() {
                o.A.get("chromecast") || (this.timingHidden = !0,
                this.core.once(r.A.USER_ACTION, this.onUserAction.bind(this)))
            }
            onControlsReset(e) {
                this.setDuration(this.core.options.duration),
                this.setCurrentTime(e)
            }
            constructor(e) {
                this.core = e,
                this.lastValue = 0,
                this.isTimingBlocked = !0,
                this.init()
            }
        }
    },
    21416: function(e, t, i) {
        "use strict";
        i.d(t, {
            A: function() {
                return r
            }
        });
        var n = i(37651)
          , s = i(10809)
          , r = class {
            init() {
                this.options.linkUrl && (this.render(),
                this.attachEvents())
            }
            render() {
                let e;
                this.element = document.createElement("a"),
                this.element.className = this.options.className,
                this.element.setAttribute("href", this.options.linkUrl),
                this.element.setAttribute("target", "_blank"),
                this.element.setAttribute("rel", "nofollow noopener"),
                this.element.innerHTML = (e = this.options,
                `
    <span class="${e.className}__label">${e.label}</span>
    <span class="${e.className}__message">${e.message}</span>
    ${e.tooltip}
`),
                n.A.emit(s.A.HOVER_LINK_RENDERED)
            }
            attachEvents() {
                this.element.addEventListener("click", this.onClick.bind(this))
            }
            onClick() {
                n.A.emit(s.A.PLAYER_PAUSE),
                n.A.emit(s.A.HOVER_LINK_CLICK),
                this.options.onClick && "function" == typeof this.options.onClick && this.options.onClick()
            }
            constructor(e, t) {
                this.core = e,
                this.options = (null == t ? void 0 : t.link) || {},
                this.element = null,
                this.init()
            }
        }
    },
    72902: function(e, t, i) {
        "use strict";
        var n = i(38432)
          , s = i(54098);
        t.A = class {
            init() {
                this.render()
            }
            render() {
                let e = Math.ceil(s.A.get("duration"));
                this.element = document.createElement("div"),
                this.element.className = "xplayer-duration-info",
                this.element.textContent = n.A.parseTime(e, e >= 3600)
            }
            constructor() {
                this.init()
            }
        }
    },
    99300: function(e, t, i) {
        "use strict";
        var n = i(20346);
        t.A = class {
            init() {
                void 0 !== this.options.info && void 0 !== this.options.info.views && this.render()
            }
            render() {
                this.element = document.createElement("div"),
                this.element.className = "xplayer-views-info",
                this.element.textContent = (0,
                n.G)(this.options.info.views)
            }
            constructor(e, t) {
                this.core = e,
                this.options = t,
                this.init()
            }
        }
    },
    41363: function(e, t, i) {
        "use strict";
        var n = i(37232);
        let s = "xplayer-menu-mobile-top"
          , r = ["xplayer-menu-mobile-bottom", s];
        t.A = class {
            init() {
                this.render()
            }
            render() {
                this.element = document.createElement("div"),
                this.element.className = this.elementClass,
                this.addControls(this.controls),
                this.core.element.appendChild(this.element),
                r.length > 0 && r.forEach(e=>{
                    (0,
                    n.u)(this.core, this.element, e)
                }
                ),
                this.elementClass === s && (this.backgroundElement = document.createElement("div"),
                this.backgroundElement.className = "xplayer-menu-mobile-top__background",
                this.element.appendChild(this.backgroundElement))
            }
            addControls(e) {
                e.filter(e=>e).forEach(e=>(null == e ? void 0 : e.nodeType) && this.element.appendChild(e))
            }
            constructor(e, t, i) {
                this.core = e,
                this.elementClass = t,
                this.controls = i,
                this.init()
            }
        }
    },
    13036: function(e, t, i) {
        "use strict";
        var n = i(99851)
          , s = i(37651)
          , r = i(10809)
          , o = i(9776);
        t.A = class {
            init() {
                if (this.element = this.core.element.querySelector(".xp-preload-image"),
                this.element && this.shouldRemovePoster)
                    return void this.destroy();
                !this.element && this.options.url && this.render(),
                this.element && (this.setScreenReaderAttributes(),
                this.attachEvents())
            }
            render() {
                this.element = document.createElement("div"),
                this.element.className = "xp-poster",
                this.element.style.backgroundImage = `url('${this.options.url}')`,
                this.core.element.appendChild(this.element)
            }
            setScreenReaderAttributes() {
                this.element.tabIndex = 0,
                this.element.ariaLabel = this.videoDescription,
                this.element.addEventListener("keydown", this.onKeydown),
                this.core.videoElement.tabIndex = -1,
                this.core.videoElement.ariaHidden = !0
            }
            attachEvents() {
                s.A.once(r.A.PLAYER_ON_PLAYING, this.destroy),
                s.A.once(r.A.REMOTE_PLAYER_PLAYING, this.destroy),
                o.A.addClickWithYield(this.element, this.onClick)
            }
            constructor(e, t={}) {
                (0,
                n._)(this, "moveScreenReaderFocusToVideo", ()=>{
                    this.element && (this.element.tabIndex = -1,
                    this.element.ariaHidden = !0,
                    this.core.videoElement.focus(),
                    this.core.videoElement.tabIndex = 0,
                    this.core.videoElement.ariaLabel = this.videoDescription,
                    this.core.videoElement.removeAttribute("aria-hidden"))
                }
                ),
                (0,
                n._)(this, "onKeydown", e=>{
                    "Space" === e.code && (e.preventDefault(),
                    s.A.emit(r.A.PLAYER_PLAY),
                    this.moveScreenReaderFocusToVideo())
                }
                ),
                (0,
                n._)(this, "onClick", ()=>{
                    s.A.emit(r.A.PLAYER_PLAY),
                    s.A.emit(r.A.POSTER_CLICK)
                }
                ),
                (0,
                n._)(this, "destroy", ()=>{
                    this.element && (this.core.element.removeChild(this.element),
                    this.element.removeEventListener("keydown", this.onKeydown),
                    this.element = null)
                }
                ),
                this.core = e,
                this.options = t.poster || {},
                this.videoDescription = t.videoDescription || "Video description",
                this.shouldRemovePoster = this.options.shouldRemovePoster || !1,
                this.init()
            }
        }
    },
    83985: function(e, t) {
        "use strict";
        t.A = class {
            getTemplate() {
                throw Error("BasicSettingController - template not defined")
            }
            getTemplateOptions() {
                throw Error("BasicSettingController - template options not defined")
            }
            init() {
                this.element = document.createElement("span"),
                this.element.className = "setting",
                this.render(),
                this.attachEvents()
            }
            render() {
                this.element.innerHTML = this.getTemplate()(this.getTemplateOptions())
            }
            attachEvents() {
                throw Error("BasicSettingController - events not defined")
            }
            constructor(e, t) {
                this.core = e,
                this.options = t,
                this.element = null,
                this.init()
            }
        }
    },
    21766: function(e, t, i) {
        "use strict";
        var n = i(99851)
          , s = i(7163)
          , r = i(10809)
          , o = i(37651)
          , a = i(9776)
          , l = i(54098);
        let c = "xplayer-start-button"
          , h = "xh-helper-hidden";
        t.A = class {
            init() {
                this.render(),
                this.attachEvents()
            }
            render() {
                var e;
                if (this.element = document.createElement("div"),
                this.element.className = c,
                (null == (e = this.relatedVideos) ? void 0 : e.length) > 0 && this.element.classList.add(`${c}--no-border`),
                "all" === this.options.buttonType)
                    s.A.addClass(this.element, `${c}--all`);
                else {
                    let e = "";
                    e = this.core.options.platform ? this.core.options.platform : this.core.capabilities.idevice ? "ios" : "android",
                    s.A.addClass(this.element, `${c}--${e}`)
                }
                this.core.options.inpEnabled && s.A.addClass(this.element, h),
                this.core.element.appendChild(this.element)
            }
            attachEvents() {
                a.A.addClickWithYield(this.element, this.onElementTouch.bind(this)),
                o.A.on(r.A.PLAYER_ON_SEEKING, this.hideElement, this),
                o.A.on(r.A.PLAYER_ON_WAITING, this.hideElement, this),
                o.A.on(r.A.PLAYER_ON_LOAD_START, ()=>!this.core.preload && this.isHidable && this.hideElement()),
                o.A.on(r.A.PLAYER_ON_SWIPE_START, this.hideElement, this),
                o.A.on(r.A.PLAYER_ON_SWIPE_SEEK_END, this.showElement, this),
                o.A.on(r.A.REMOTE_PLAYER_PLAYING, this.hideElement, this),
                o.A.on(r.A.PLAYER_ON_PLAYING, this.showElement, this),
                o.A.on(r.A.PLAYER_PAUSED, this.showElement, this),
                o.A.on(r.A.PLAYER_ON_CAN_PLAY, this.showElement, this),
                o.A.on(r.A.REMOTE_PLAYER_PAUSED, this.showElement, this),
                o.A.once(r.A.PLAYER_PLAY, this.unblockHide, this),
                this.core.options.inpEnabled && (o.A.once(r.A.PLAYER_ON_CAN_PLAY, this.showButton),
                o.A.once(r.A.ADS_ENDED, this.showButton),
                o.A.once(r.A.PLAYER_ON_ERROR, this.showButton))
            }
            unblockHide() {
                this.isHidable = !0
            }
            onElementTouch() {
                this.playBlocked || (o.A.emit(r.A.PLAYER_PLAY),
                o.A.emit(r.A.PLAY_CENTER_BUTTON_CLICK, "play"),
                o.A.emit(r.A.SHOW_LOADER),
                this.hideElement())
            }
            showElement() {
                l.A.get("swiping") || (s.A.removeClass(this.element, h),
                this.playBlocked = setTimeout(()=>{
                    clearTimeout(this.playBlocked),
                    this.playBlocked = !1
                }
                , 100))
            }
            hideElement() {
                s.A.addClass(this.element, h)
            }
            constructor(e, t) {
                (0,
                n._)(this, "showButton", ()=>{
                    s.A.removeClass(this.element, h)
                }
                ),
                this.core = e,
                this.options = t.startButton || {},
                this.relatedVideos = t.relatedVideos,
                this.isHidable = !1,
                this.playBlocked = !1,
                this.init()
            }
        }
    },
    39689: function(e, t, i) {
        "use strict";
        i.d(t, {
            A: function() {
                return ec
            }
        });
        var n, s, r, o, a, l, c, h, u, d, A, p, m, v, E, f = i(11570), _ = i(84422), y = i(15904), g = i(4251), S = i(23317), b = i(42024), T = i(40311), k = i(86096), L = i(10809), O = i(37651), P = i(54098);
        (n = h || (h = {})).PLAY = "play",
        n.REWIND = "rewind",
        n.ADAPTIVE = "adaptive",
        n.DOWNLOAD_SPEED = "download_speed",
        n.SPRITE = "sprite";
        var C = "xplayer"
          , R = "html5";
        (u || (u = {})).CDN = "cdn",
        (s = d || (d = {})).START = "start",
        s.CHANGE = "change",
        s.END = "end",
        s.LOAD = "load",
        s.SUCCESS = "success",
        s.ERROR = "error",
        s.NULL = "null";
        var w = i(54588)
          , N = i.n(w)
          , D = i(52668)
          , I = i(81718);
        function U(e, t) {
            var i = Object.keys(e);
            if (Object.getOwnPropertySymbols) {
                var n = Object.getOwnPropertySymbols(e);
                t && (n = n.filter(function(t) {
                    return Object.getOwnPropertyDescriptor(e, t).enumerable
                })),
                i.push.apply(i, n)
            }
            return i
        }
        function x(e) {
            for (var t = 1; t < arguments.length; t++) {
                var i = null != arguments[t] ? arguments[t] : {};
                t % 2 ? U(Object(i), !0).forEach(function(t) {
                    (0,
                    k.A)(e, t, i[t])
                }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(i)) : U(Object(i)).forEach(function(t) {
                    Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(i, t))
                })
            }
            return e
        }
        var Y = (0,
        y.A)(function e(t, i, n) {
            var s = this
              , r = arguments.length > 3 && void 0 !== arguments[3] && arguments[3];
            (0,
            _.A)(this, e),
            (0,
            k.A)(this, "core", void 0),
            (0,
            k.A)(this, "event", void 0),
            (0,
            k.A)(this, "options", void 0),
            (0,
            k.A)(this, "videoElement", void 0),
            (0,
            k.A)(this, "debug", void 0),
            (0,
            k.A)(this, "isFallback", void 0),
            (0,
            k.A)(this, "fallbackEventId", void 0),
            (0,
            k.A)(this, "switchedTimes", void 0),
            (0,
            k.A)(this, "lastQuality", void 0),
            (0,
            k.A)(this, "gpuInfo", void 0),
            (0,
            k.A)(this, "onPlayerFallbackSource", function() {
                s.isFallback = !0
            }),
            this.core = t,
            this.options = n,
            this.debug = r,
            this.videoElement = i,
            this.isFallback = !1,
            this.fallbackEventId = null,
            this.switchedTimes = 0,
            this.lastQuality = null,
            this.gpuInfo = null
        }, [{
            key: "init",
            value: function() {
                this.attachEvents(),
                this.setGpuInfo()
            }
        }, {
            key: "setGpuInfo",
            value: function() {
                var e, t, i;
                return N().async(function(n) {
                    for (; ; )
                        switch (n.prev = n.next) {
                        case 0:
                            return n.next = 2,
                            N().awrap(null == (t = navigator) || null == (t = t.gpu) || null == (i = t.requestAdapter) ? void 0 : i.call(t));
                        case 2:
                            if (n.t1 = e = n.sent,
                            n.t0 = null === n.t1,
                            n.t0) {
                                n.next = 6;
                                break
                            }
                            n.t0 = void 0 === e;
                        case 6:
                            if (!n.t0) {
                                n.next = 10;
                                break
                            }
                            n.t2 = void 0,
                            n.next = 11;
                            break;
                        case 10:
                            n.t2 = e.info;
                        case 11:
                            this.gpuInfo = n.t2;
                        case 12:
                        case "end":
                            return n.stop()
                        }
                }, null, this, null, Promise)
            }
        }, {
            key: "attachEvents",
            value: function() {}
        }, {
            key: "sendStats",
            value: function(e, t, i, n) {
                var s = arguments.length > 4 && void 0 !== arguments[4] && arguments[4]
                  , r = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : null
                  , o = this.core.userSettingsController.getDefaultSettings().quality
                  , a = {
                    isBounce: s,
                    log: u.CDN,
                    version: 7,
                    player: C,
                    source: R,
                    bufferingDuration: Math.round(i) || 0,
                    videoPosition: Math.round(n),
                    bufferingEvent: t,
                    userEvent: e,
                    sourceType: this.core.sourceController.type,
                    videoFile: this.core.sourceController.getSourceUrl() || "undefined",
                    sourceQuality: this.core.sourceController.getCurrentQuality() || "undefined",
                    sourceURL: this.core.sourceController.getSourceUrl() || "undefined",
                    settingsSaved: this.core.settings.quality !== o,
                    fallback: this.isFallback,
                    hasAds: this.options.hasAds,
                    "str.av1Supported": "".concat(this.core.capabilities.av1),
                    "str.h265Supported": "".concat(this.core.capabilities.h265)
                };
                r && (a = x(x({}, a), r)),
                "function" == typeof this.options.addFields ? a = x(x({}, a), this.options.addFields()) : this.options.addFields && (a = x(x({}, a), this.options.addFields)),
                (e === h.ADAPTIVE || e === h.DOWNLOAD_SPEED) && (a.adaptiveQuality = this.core.sourceController.getQuality(-1),
                this.lastQuality || (this.lastQuality = a.adaptiveQuality),
                this.lastQuality !== a.adaptiveQuality && (this.switchedTimes++,
                a["str.switchedTimes"] = "".concat(this.switchedTimes),
                a["str.switchedFrom"] = this.lastQuality,
                this.lastQuality = a.adaptiveQuality)),
                this.gpuInfo && (a["str.gpuArchitecture"] = "".concat(this.gpuInfo.architecture),
                a["str.gpuVendor"] = "".concat(this.gpuInfo.vendor)),
                a = x(x({}, a), (0,
                D.q)());
                var l = P.A.get("preroll_video_type")
                  , c = P.A.get("preroll_type");
                if (l && (a = x(x({}, a), {}, {
                    "str.preroll_video_type": l
                })),
                c && (a = x(x({}, a), {}, {
                    "str.preroll_type": c
                })),
                this.debug)
                    return void console.warn("buffStats: ".concat(this.constructor.name), a, e, t, s);
                I.A.sendToCollector(a, this.options.send)
            }
        }, {
            key: "reset",
            value: function() {
                this.switchedTimes = 0,
                this.lastQuality = null
            }
        }]);
        function M() {
            try {
                var e = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {}))
            } catch (e) {}
            return (M = function() {
                return !!e
            }
            )()
        }
        function B(e, t, i, n) {
            var s = (0,
            b.A)((0,
            S.A)(1 & n ? e.prototype : e), t, i);
            return 2 & n && "function" == typeof s ? function(e) {
                return s.apply(i, e)
            }
            : s
        }
        var F = function(e) {
            function t(e, i, n) {
                var s, r, o, a, l = arguments.length > 3 && void 0 !== arguments[3] && arguments[3];
                return (0,
                _.A)(this, t),
                s = t,
                r = [e, i, n, l],
                s = (0,
                S.A)(s),
                a = (0,
                g.A)(this, M() ? Reflect.construct(s, r || [], (0,
                S.A)(this).constructor) : s.apply(this, r)),
                (0,
                k.A)(a, "lastTime", void 0),
                (0,
                k.A)(a, "watched", void 0),
                (0,
                k.A)(a, "threshold", void 0),
                (0,
                k.A)(a, "onTimeUpdate", function(e) {
                    if (!P.A.get("ads_playing")) {
                        if ("auto" !== a.core.sourceController.getCurrentQuality() || e.target.seeking) {
                            a.lastTime = a.videoElement.currentTime;
                            return
                        }
                        a.watched += a.videoElement.currentTime - a.lastTime,
                        a.lastTime = a.videoElement.currentTime,
                        a.watched > a.threshold && (a.watched = 0,
                        a.sendStats())
                    }
                }),
                (0,
                k.A)(a, "onSeekEvent", function() {
                    P.A.get("ads_playing") || (a.lastTime = a.videoElement.currentTime)
                }),
                a.lastTime = 0,
                a.watched = 0,
                a.threshold = (null == (o = a.options) || null == (o = o.adaptiveStats) ? void 0 : o.threshold) || 10,
                a.init(),
                a
            }
            return (0,
            T.A)(t, e),
            (0,
            y.A)(t, [{
                key: "attachEvents",
                value: function() {
                    this.videoElement.addEventListener("timeupdate", this.onTimeUpdate),
                    this.videoElement.addEventListener("seeking", this.onSeekEvent),
                    this.videoElement.addEventListener("seeked", this.onSeekEvent),
                    O.A.on(L.A.PLAYER_FALLBACK_SOURCE, this.onPlayerFallbackSource)
                }
            }, {
                key: "sendStats",
                value: function() {
                    B(t, "sendStats", this, 3)([h.ADAPTIVE, d.NULL, 0, 0])
                }
            }, {
                key: "reset",
                value: function() {
                    B(t, "reset", this, 3)([]),
                    this.lastTime = 0,
                    this.watched = 0,
                    this.isFallback = !1
                }
            }])
        }(Y);
        function V(e, t) {
            var i = Object.keys(e);
            if (Object.getOwnPropertySymbols) {
                var n = Object.getOwnPropertySymbols(e);
                t && (n = n.filter(function(t) {
                    return Object.getOwnPropertyDescriptor(e, t).enumerable
                })),
                i.push.apply(i, n)
            }
            return i
        }
        function H(e) {
            for (var t = 1; t < arguments.length; t++) {
                var i = null != arguments[t] ? arguments[t] : {};
                t % 2 ? V(Object(i), !0).forEach(function(t) {
                    (0,
                    k.A)(e, t, i[t])
                }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(i)) : V(Object(i)).forEach(function(t) {
                    Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(i, t))
                })
            }
            return e
        }
        function W() {
            try {
                var e = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {}))
            } catch (e) {}
            return (W = function() {
                return !!e
            }
            )()
        }
        var G = function(e) {
            function t(e, i, n) {
                var s, r, o, a = arguments.length > 3 && void 0 !== arguments[3] && arguments[3];
                return (0,
                _.A)(this, t),
                s = t,
                r = [e, i, n, a],
                s = (0,
                S.A)(s),
                o = (0,
                g.A)(this, W() ? Reflect.construct(s, r || [], (0,
                S.A)(this).constructor) : s.apply(this, r)),
                (0,
                k.A)(o, "hasSwiping", void 0),
                (0,
                k.A)(o, "hasAds", void 0),
                (0,
                k.A)(o, "hasAdblock", void 0),
                (0,
                k.A)(o, "hasAdblockAtPlayCount", void 0),
                (0,
                k.A)(o, "ignoreFirstSeeking", void 0),
                (0,
                k.A)(o, "currentSrc", void 0),
                (0,
                k.A)(o, "bufferingVars", void 0),
                (0,
                k.A)(o, "onSwipeStart", function() {
                    o.hasSwiping = !0
                }),
                (0,
                k.A)(o, "onAdblockStatusUpdate", function(e) {
                    o.hasAdblock = e
                }),
                (0,
                k.A)(o, "onViewSuccess", function() {
                    var e = o.videoElement.currentTime;
                    o.sendStats(h.PLAY, d.SUCCESS, 1e3 * e, e)
                }),
                (0,
                k.A)(o, "bufferingOnUnload", function() {
                    if (o.bufferingVars.hasPlay) {
                        var e = o.videoElement.currentTime;
                        if (o.bufferingVars.loadstartTime > 0) {
                            var t = Date.now() - o.bufferingVars.loadstartTime;
                            o.bufferingVars.sourceLoaded ? o.sendStats(h.PLAY, d.CHANGE, t, e, !0) : o.sendStats(h.PLAY, d.END, t, 0, !0),
                            o.bufferingVars.loadstartTime = 0
                        }
                        if (o.bufferingVars.seekingTime > 0) {
                            var i = Date.now() - o.bufferingVars.seekingTime;
                            o.sendStats(h.REWIND, d.END, i, e, !0),
                            o.bufferingVars.seekingTime = 0
                        }
                        if (o.bufferingVars.waitingTime > 0) {
                            var n = Date.now() - o.bufferingVars.waitingTime;
                            o.sendStats(h.PLAY, d.END, n, e + 1, !0),
                            o.bufferingVars.waitingTime = 0
                        }
                    }
                }),
                (0,
                k.A)(o, "onSpriteLoad", function(e) {
                    var t = o.videoElement.currentTime;
                    o.sendStats(h.SPRITE, d.LOAD, 0, t, !1, {
                        "int.spriteNumber": [e]
                    })
                }),
                (0,
                k.A)(o, "onSpriteLoadSuccess", function(e, t) {
                    var i = o.videoElement.currentTime;
                    o.sendStats(h.SPRITE, d.SUCCESS, e, i, !1, {
                        "int.spriteNumber": [t]
                    })
                }),
                (0,
                k.A)(o, "onSpriteLoadError", function(e, t) {
                    var i = o.videoElement.currentTime;
                    o.sendStats(h.SPRITE, d.ERROR, e, i, !1, {
                        "int.spriteNumber": [t]
                    })
                }),
                (0,
                k.A)(o, "playerOnPlay", function() {
                    o.bufferingVars.hasPlay || (o.hasAdblockAtPlayCount = o.hasAdblock,
                    o.sendStats(h.PLAY, d.START, 0, 0),
                    o.bufferingVars.hasPlay = !0),
                    o.bufferingVars.loaded || o.bufferingVars.hasCorePlay || (o.bufferingVars.loadstartTime = Date.now(),
                    o.bufferingVars.hasCorePlay = !0)
                }),
                (0,
                k.A)(o, "playerOnCanPlay", function() {
                    o.bufferingVars.waitingTime > 0 && o.bufferingVars.hasPlay && o.sendWatchBufferingEvent()
                }),
                (0,
                k.A)(o, "playerOnWaiting", function() {
                    0 === o.bufferingVars.seekingTime && 0 === o.bufferingVars.loadstartTime && o.bufferingVars.hasPlay && !o.bufferingVars.seekingEvent && (o.bufferingVars.waitingTime = Date.now())
                }),
                (0,
                k.A)(o, "playerOnLoadStart", function() {
                    o.bufferingVars.loadstartTime > 0 || (o.bufferingVars.loadstartTime = Date.now())
                }),
                (0,
                k.A)(o, "playerOnLoadedData", function() {
                    if (o.bufferingVars.loadstartTime > 0) {
                        var e = Date.now() - o.bufferingVars.loadstartTime;
                        o.bufferingVars.sourceLoaded ? o.sendStats(h.PLAY, d.CHANGE, e, o.videoElement.currentTime) : o.bufferingVars.hasCorePlay && o.sendPlayDuration(e),
                        o.currentSrc = o.videoElement.src,
                        o.bufferingVars.loaded = !0,
                        o.bufferingVars.loadstartTime = 0,
                        o.bufferingVars.waitingTime = 0
                    }
                }),
                (0,
                k.A)(o, "playerOnBuffTimeupdate", function() {}),
                (0,
                k.A)(o, "playerOnSeeking", function() {
                    if (o.bufferingVars.seeking || o.ignoreFirstSeeking) {
                        o.ignoreFirstSeeking = !1;
                        return
                    }
                    o.bufferingVars.seekingEvent = !0,
                    o.bufferingVars.hasPlay && (o.bufferingVars.isInBufferedZone = o.isInBufferedZone(o.videoElement.currentTime),
                    o.bufferingVars.isInBufferedZone || (o.bufferingVars.seeking = !0,
                    o.bufferingVars.seekingTime = Date.now()))
                }),
                (0,
                k.A)(o, "playerOnSeeked", function() {
                    if (o.bufferingVars.seekingEvent = !1,
                    o.bufferingVars.seekingTime > 0) {
                        if (o.bufferingVars.seeking = !1,
                        o.bufferingVars.hasPlay && o.currentSrc === o.videoElement.src && !o.bufferingVars.isInBufferedZone) {
                            var e = Date.now() - o.bufferingVars.seekingTime;
                            o.sendStats(h.REWIND, d.END, e, o.videoElement.currentTime)
                        }
                        o.bufferingVars.seekingTime = 0
                    }
                }),
                o.hasSwiping = !1,
                o.hasAds = P.A.get("ads"),
                o.hasAdblock = !1,
                o.hasAdblockAtPlayCount = !1,
                o.bufferingVars = o.getBufferingVars(),
                o.ignoreFirstSeeking = !!(o.core.capabilities.ios || o.core.capabilities.idevice || o.core.capabilities.safari),
                o.init(),
                o
            }
            return (0,
            T.A)(t, e),
            (0,
            y.A)(t, [{
                key: "attachEvents",
                value: function() {
                    var e = this;
                    this.attachOnceEvents(),
                    this.core.on(L.A.PLAYER_PLAY, this.playerOnPlay),
                    O.A.on(L.A.SPRITE_LOAD, this.onSpriteLoad),
                    O.A.on(L.A.SPRITE_LOAD_SUCCESS, this.onSpriteLoadSuccess),
                    O.A.on(L.A.SPRITE_LOAD_ERROR, this.onSpriteLoadError),
                    O.A.on(L.A.ADS_INIT, function() {
                        e.hasAds = !0
                    }),
                    O.A.on(L.A.ADBLOCK_STATUS_UPDATE, this.onAdblockStatusUpdate),
                    this.videoElement.addEventListener("loadstart", this.playerOnLoadStart),
                    this.videoElement.addEventListener("loadeddata", this.playerOnLoadedData),
                    this.videoElement.addEventListener("waiting", this.playerOnWaiting),
                    this.videoElement.addEventListener("canplay", this.playerOnCanPlay),
                    this.videoElement.addEventListener("playing", this.playerOnCanPlay),
                    this.videoElement.addEventListener("timeupdate", this.playerOnBuffTimeupdate),
                    this.videoElement.addEventListener("seeking", this.playerOnSeeking),
                    this.videoElement.addEventListener("seeked", this.playerOnSeeked);
                    var t = this.core.capabilities.ios ? "pagehide" : "beforeunload";
                    window.addEventListener(t, this.bufferingOnUnload, !1)
                }
            }, {
                key: "attachOnceEvents",
                value: function() {
                    this.bufferingVars.playerOnSwipeStartEventId = O.A.once(L.A.PLAYER_ON_SWIPE_START, this.onSwipeStart),
                    this.bufferingVars.viewSuccessEventId = O.A.once(L.A.VIEW_SUCCESS, this.onViewSuccess),
                    this.bufferingVars.fallbackSourceEventId = O.A.once(L.A.PLAYER_FALLBACK_SOURCE, this.onPlayerFallbackSource, this)
                }
            }, {
                key: "offOnceEvents",
                value: function() {
                    O.A.off(L.A.PLAYER_ON_SWIPE_START, this.bufferingVars.playerOnSwipeStartEventId),
                    O.A.off(L.A.VIEW_SUCCESS, this.bufferingVars.viewSuccessEventId),
                    O.A.off(L.A.PLAYER_FALLBACK_SOURCE, this.bufferingVars.fallbackSourceEventId)
                }
            }, {
                key: "sendPlayDuration",
                value: function(e) {
                    var t = +!!this.bufferingVars.playDurationSent;
                    this.sendStats(h.PLAY, d.END, e, t),
                    this.bufferingVars.sourceLoaded = !0,
                    this.bufferingVars.playDurationSent = !0
                }
            }, {
                key: "isInBufferedZone",
                value: function(e) {
                    for (var t = this.videoElement.buffered, i = t.length; i--; )
                        if (e >= t.start(i) && e < t.end(i))
                            return !0;
                    return !1
                }
            }, {
                key: "sendWatchBufferingEvent",
                value: function() {
                    var e = this.videoElement.currentTime + 1
                      , t = Date.now() - this.bufferingVars.waitingTime;
                    this.sendStats(h.PLAY, d.END, t, e),
                    this.bufferingVars.waitingTime = 0,
                    this.bufferingVars.lastWaitingTs = []
                }
            }, {
                key: "getBufferingVars",
                value: function() {
                    return {
                        isInBufferedZone: !1,
                        countBuffering: 0,
                        sourceLoaded: !1,
                        loadstartTime: 0,
                        waitingTime: 0,
                        seekingTime: 0,
                        seeking: !1,
                        seekingEvent: !1,
                        hasPlay: !1,
                        hasCorePlay: !1,
                        loaded: !1,
                        playDurationSent: !1,
                        playerOnSwipeStartEventId: null,
                        viewSuccessEventId: null,
                        fallbackSourceEventId: null,
                        lastWaitingTs: []
                    }
                }
            }, {
                key: "sendStats",
                value: function(e, i, n, s) {
                    var r, o, a = arguments.length > 4 && void 0 !== arguments[4] && arguments[4], l = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : null, c = i !== d.START && i !== d.SUCCESS, u = {
                        "str.hasSwiping": "".concat(this.hasSwiping)
                    }, A = {};
                    this.hasAds && (A = {
                        "str.duringAds": "".concat(P.A.get("ads") || P.A.get("ads_playing"))
                    });
                    var p = {
                        "str.hasAdblock": "".concat(this.hasAdblock)
                    }
                      , m = {
                        "str.hasAdblockPlayCount": "".concat(this.hasAdblockAtPlayCount)
                    }
                      , v = H(H(H(H(H({}, l), A), p), m), u);
                    c && e !== h.SPRITE && n < 50 || (r = this,
                    o = (0,
                    b.A)((0,
                    S.A)(t.prototype), "sendStats", r),
                    "function" == typeof o ? function(e) {
                        return o.apply(r, e)
                    }
                    : o)([e, i, n, s, a, v])
                }
            }, {
                key: "reset",
                value: function() {
                    this.offOnceEvents(),
                    this.bufferingVars = this.getBufferingVars(),
                    this.attachOnceEvents()
                }
            }])
        }(Y)
          , q = i(20346);
        function $() {
            try {
                var e = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {}))
            } catch (e) {}
            return ($ = function() {
                return !!e
            }
            )()
        }
        function K(e, t, i, n) {
            var s = (0,
            b.A)((0,
            S.A)(1 & n ? e.prototype : e), t, i);
            return 2 & n && "function" == typeof s ? function(e) {
                return s.apply(i, e)
            }
            : s
        }
        (r = A || (A = {})).SPEED_MBPS = "speedMbps",
        r.TTFB_DURATION = "ttfbDurationMs",
        r.TTFB_PERCENT = "ttfbPercent";
        var j = function(e) {
            function t(e, i, n) {
                var s, r, o, a = arguments.length > 3 && void 0 !== arguments[3] && arguments[3];
                return (0,
                _.A)(this, t),
                s = t,
                r = [e, i, n, a],
                s = (0,
                S.A)(s),
                o = (0,
                g.A)(this, $() ? Reflect.construct(s, r || [], (0,
                S.A)(this).constructor) : s.apply(this, r)),
                (0,
                k.A)(o, "collectedData", void 0),
                (0,
                k.A)(o, "averageData", void 0),
                (0,
                k.A)(o, "onHlsFragLoaded", function(e) {
                    if (!P.A.get("ads_playing")) {
                        var t, i = null == e || null == (t = e.frag) ? void 0 : t.stats;
                        if (i) {
                            var n = Math.floor(i.loading.first - i.loading.start)
                              , s = Math.floor(i.loading.end - i.loading.start)
                              , r = (0,
                            q.M)(n / s, 4)
                              , a = (0,
                            q.M)(8 * i.loaded / (s / 1e3 * 1048576), 4);
                            if (o.collectedData.speedMbps.push(a),
                            o.collectedData.ttfbDurationMs.push(n),
                            o.collectedData.ttfbPercent.push(r),
                            o.collectedData.speedMbps.length >= 5) {
                                o.averageData = o.calcAverageData(),
                                o.collectedData = o.getDefaultData();
                                var l = o.averageData.downloadSpeed;
                                "number" != typeof l || Number.isNaN(l) || o.sendStats()
                            }
                        }
                    }
                }),
                o.collectedData = o.getDefaultData(),
                o.init(),
                o
            }
            return (0,
            T.A)(t, e),
            (0,
            y.A)(t, [{
                key: "getDefaultData",
                value: function() {
                    return {
                        speedMbps: [],
                        ttfbDurationMs: [],
                        ttfbPercent: []
                    }
                }
            }, {
                key: "attachEvents",
                value: function() {
                    this.core.on(L.A.HLS_FRAG_LOADED, this.onHlsFragLoaded),
                    this.core.on(L.A.PLAYER_FALLBACK_SOURCE, this.onPlayerFallbackSource)
                }
            }, {
                key: "getExtraData",
                value: function() {
                    var e = this.averageData;
                    return {
                        downloadSpeed: e.downloadSpeed,
                        "float.ttfbDurationMs": e.ttfbDurationMs,
                        "float.ttfbPercent": e.ttfbPercent
                    }
                }
            }, {
                key: "calcAverageData",
                value: function() {
                    return {
                        downloadSpeed: this.calcFieldAverage(A.SPEED_MBPS),
                        ttfbDurationMs: this.calcFieldAverage(A.TTFB_DURATION),
                        ttfbPercent: this.calcFieldAverage(A.TTFB_PERCENT)
                    }
                }
            }, {
                key: "calcFieldAverage",
                value: function(e) {
                    return this.collectedData[e].reduce(function(e, t) {
                        return e + t
                    }, 0) / this.collectedData[e].length
                }
            }, {
                key: "sendStats",
                value: function() {
                    K(t, "sendStats", this, 3)([h.DOWNLOAD_SPEED, d.NULL, 0, 0, !1, this.getExtraData()])
                }
            }, {
                key: "reset",
                value: function() {
                    K(t, "reset", this, 3)([]),
                    this.collectedData = this.getDefaultData()
                }
            }])
        }(Y);
        function Q(e, t) {
            var i = Object.keys(e);
            if (Object.getOwnPropertySymbols) {
                var n = Object.getOwnPropertySymbols(e);
                t && (n = n.filter(function(t) {
                    return Object.getOwnPropertyDescriptor(e, t).enumerable
                })),
                i.push.apply(i, n)
            }
            return i
        }
        function z(e) {
            for (var t = 1; t < arguments.length; t++) {
                var i = null != arguments[t] ? arguments[t] : {};
                t % 2 ? Q(Object(i), !0).forEach(function(t) {
                    (0,
                    k.A)(e, t, i[t])
                }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(i)) : Q(Object(i)).forEach(function(t) {
                    Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(i, t))
                })
            }
            return e
        }
        (o = p || (p = {})).HLS = "hls",
        o.STANDARD = "standard",
        (a = m || (m = {})).NETWORK = "MEDIA_ERR_NETWORK",
        a.DECODE = "MEDIA_ERR_DECODE",
        a.SOURCE = "MEDIA_ERR_SRC_NOT_SUPPORTED",
        a.ABORTED = "MEDIA_ERR_ABORTED",
        a.UNKNOWN = "UNKNOWN_ERROR",
        (l = v || (v = {})).NETWORK = "networkError",
        l.MEDIA = "mediaError",
        l.SOURCE = "sourceError",
        (c = E || (E = {})).INCOMPATIBLE_CODECS = "manifestIncompatibleCodecsError",
        c.BUFFER_NUDGE = "bufferNudgeOnStall",
        c.BUFFER_STALLED = "bufferStalledError";
        var X = (0,
        y.A)(function e(t, i, n, s) {
            var r = this;
            (0,
            _.A)(this, e),
            (0,
            k.A)(this, "core", void 0),
            (0,
            k.A)(this, "options", void 0),
            (0,
            k.A)(this, "videoElement", void 0),
            (0,
            k.A)(this, "event", void 0),
            (0,
            k.A)(this, "debug", void 0),
            (0,
            k.A)(this, "wasDecoderError", void 0),
            (0,
            k.A)(this, "hasFatalError", void 0),
            (0,
            k.A)(this, "setHasFatalError", function() {
                var e = !(arguments.length > 0) || void 0 === arguments[0] || arguments[0];
                r.hasFatalError = e
            }),
            (0,
            k.A)(this, "sourceControllerOnError", function(e, t) {
                if (!P.A.get("ads_playing")) {
                    var i = r.parseSourceControllerErrorMessage(e, t)
                      , n = i.message
                      , s = i.errorMessage;
                    if (n) {
                        var o = r.core.sourceController.getSourceUrl();
                        o ? r.errorCheckCdn(n, o, s) : r.sendStats(n, {
                            videoFile: o,
                            cdnStatus: 0,
                            cdnUrl: "empty",
                            errorMessage: "empty",
                            cdnStatusText: "empty"
                        })
                    }
                }
            }),
            (0,
            k.A)(this, "playerOnError", function(e) {
                if (!P.A.get("ads_playing")) {
                    var t, i, n = null == e || null == (t = e.target) || null == (t = t.error) ? void 0 : t.code, s = null == e || null == (i = e.target) || null == (i = i.error) ? void 0 : i.message, o = {
                        1: m.ABORTED,
                        2: m.NETWORK,
                        3: m.DECODE,
                        4: m.SOURCE
                    }[n] || m.UNKNOWN;
                    if (o === m.DECODE) {
                        if (r.wasDecoderError)
                            return;
                        r.wasDecoderError = !0
                    }
                    r.errorCheckCdn(o, r.videoElement.src, s)
                }
            }),
            this.core = t,
            this.videoElement = i,
            this.options = n || {},
            this.debug = s,
            this.wasDecoderError = !1,
            this.hasFatalError = !1,
            this.init()
        }, [{
            key: "init",
            value: function() {
                this.videoElement.addEventListener("error", this.playerOnError),
                O.A.on(L.A.SOURCE_CONTROLLER_ON_ERROR, this.sourceControllerOnError),
                O.A.on(L.A.PLAYER_FALLBACK_SOURCE_FAIL, this.setHasFatalError)
            }
        }, {
            key: "parseSourceControllerErrorMessage",
            value: function(e, t) {
                var i = {
                    message: null,
                    errorMessage: null
                };
                return e === p.HLS && (i = this.parseHLSErrorMessage(t)),
                i
            }
        }, {
            key: "parseHLSErrorMessage",
            value: function(e) {
                var t = null == e ? void 0 : e.details
                  , i = null == e ? void 0 : e.fatal
                  , n = null == e ? void 0 : e.type
                  , s = null
                  , r = -1 !== [E.BUFFER_NUDGE, E.BUFFER_STALLED].indexOf(t);
                return n === v.MEDIA && r || (n === v.MEDIA && t === E.INCOMPATIBLE_CODECS && (n = v.SOURCE),
                s = (0,
                k.A)((0,
                k.A)((0,
                k.A)({}, v.NETWORK, m.NETWORK), v.MEDIA, m.DECODE), v.SOURCE, m.SOURCE)[n] || m.UNKNOWN,
                i && this.setHasFatalError()),
                {
                    message: s,
                    errorMessage: t
                }
            }
        }, {
            key: "errorCheckCdn",
            value: function(e, t, i) {
                var n = this
                  , s = new XMLHttpRequest
                  , r = this.core.sourceController.type
                  , o = this.core.sourceController.getCurrentQuality()
                  , a = this.core.sourceController.getSourceUrl();
                s.onreadystatechange = function() {
                    if (4 === s.readyState) {
                        var l = {
                            videoFile: t,
                            sourceType: r,
                            sourceQuality: o,
                            sourceURL: a,
                            cdnStatus: s.status || 0,
                            errorMessage: i || "empty",
                            cdnUrl: s.responseURL || "empty",
                            cdnStatusText: s.statusText || "empty"
                        };
                        n.sendStats(e, l)
                    }
                }
                ,
                s.open("HEAD", t, !0),
                s.send()
            }
        }, {
            key: "sendStats",
            value: function(e, t) {
                var i = t || {}
                  , n = i.videoFile
                  , s = i.cdnUrl
                  , r = i.cdnStatus
                  , o = i.cdnStatusText
                  , a = i.errorMessage
                  , l = i.sourceType
                  , c = i.sourceQuality
                  , h = i.sourceURL
                  , A = {
                    cdnUrl: s,
                    userEvent: e,
                    videoFile: n,
                    cdnStatus: r,
                    cdnStatusText: o,
                    errorMessage: a,
                    log: u.CDN,
                    source: R,
                    player: C,
                    bufferingEvent: d.ERROR,
                    videoPosition: Math.round(this.videoElement.currentTime),
                    sourceType: l || this.core.sourceController.type || "undefined",
                    sourceQuality: c || this.core.sourceController.getCurrentQuality() || "undefined",
                    sourceURL: h || this.core.sourceController.getSourceUrl() || "undefined",
                    isFatal: this.hasFatalError,
                    "str.has_ads": "".concat(!!this.options.hasAds)
                };
                if (this.setHasFatalError(!1),
                "function" == typeof this.options.addFields ? A = z(z({}, A), this.options.addFields()) : this.options.addFields && (A = z(z({}, A), this.options.addFields)),
                A = z(z({}, A), (0,
                D.q)()),
                this.debug)
                    return void console.warn("ErrorStats:", A);
                I.A.sendToCollector(A, this.options.send)
            }
        }, {
            key: "reset",
            value: function() {
                this.wasDecoderError = !1,
                this.hasFatalError = !1
            }
        }]);
        function J(e, t) {
            var i = Object.keys(e);
            if (Object.getOwnPropertySymbols) {
                var n = Object.getOwnPropertySymbols(e);
                t && (n = n.filter(function(t) {
                    return Object.getOwnPropertyDescriptor(e, t).enumerable
                })),
                i.push.apply(i, n)
            }
            return i
        }
        function Z(e) {
            for (var t = 1; t < arguments.length; t++) {
                var i = null != arguments[t] ? arguments[t] : {};
                t % 2 ? J(Object(i), !0).forEach(function(t) {
                    (0,
                    k.A)(e, t, i[t])
                }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(i)) : J(Object(i)).forEach(function(t) {
                    Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(i, t))
                })
            }
            return e
        }
        var ee = (0,
        y.A)(function e(t, i, n, s) {
            (0,
            _.A)(this, e),
            (0,
            k.A)(this, "core", void 0),
            (0,
            k.A)(this, "videoElement", void 0),
            (0,
            k.A)(this, "options", void 0),
            (0,
            k.A)(this, "debug", void 0),
            (0,
            k.A)(this, "delayedEvents", void 0),
            this.core = t,
            this.videoElement = i,
            this.options = n || {},
            this.debug = s,
            this.delayedEvents = {},
            this.init()
        }, [{
            key: "init",
            value: function() {
                this.attachGeneralEvents(),
                this.attachPlayerEvents(),
                this.attachAdsEvents(),
                this.attachAdaptiveEvents(),
                this.attachErrorEvents(),
                this.attachFallbackEvents()
            }
        }, {
            key: "attachGeneralEvents",
            value: function() {
                var e;
                this.core.on(L.A.PLAYER_ON_INIT, this.sendPlayerInit, this),
                e = this.sendPlainEvent.bind(this, "page_exit"),
                window.addEventListener("pagehide", function(t) {
                    e(t)
                }, !0)
            }
        }, {
            key: "sendPlayerInit",
            value: function() {
                var e;
                this.send("page_init", null == (e = window) || null == (e = e.performance) || null == (e = e.timing) ? void 0 : e.fetchStart),
                this.send("player_init")
            }
        }, {
            key: "attachPlayerEvents",
            value: function() {
                this.core.on(L.A.PLAYER_PLAY, this.sendPlainEvent.bind(this, "play")),
                this.core.once(L.A.VIEW_SUCCESS, this.sendPlainEvent.bind(this, "view_success")),
                this.videoElement.addEventListener("abort", this.sendPlainEvent.bind(this, "abort")),
                this.videoElement.addEventListener("canplay", this.sendPlainEvent.bind(this, "canplay")),
                this.videoElement.addEventListener("canplaythrough", this.sendPlainEvent.bind(this, "canplaythrough")),
                this.videoElement.addEventListener("complete", this.sendPlainEvent.bind(this, "complete")),
                this.videoElement.addEventListener("durationchange", this.sendPlainEvent.bind(this, "durationchange")),
                this.videoElement.addEventListener("emptied", this.sendPlainEvent.bind(this, "emptied")),
                this.videoElement.addEventListener("ended", this.sendPlainEvent.bind(this, "ended")),
                this.videoElement.addEventListener("loadeddata", this.sendPlainEvent.bind(this, "loadeddata")),
                this.videoElement.addEventListener("loadedmetadata", this.sendPlainEvent.bind(this, "loadedmetadata")),
                this.videoElement.addEventListener("loadstart", this.sendPlainEvent.bind(this, "loadstart")),
                this.videoElement.addEventListener("pause", this.sendPlainEvent.bind(this, "pause")),
                this.videoElement.addEventListener("play", this.sendPlainEvent.bind(this, "play")),
                this.videoElement.addEventListener("playing", this.sendPlainEvent.bind(this, "playing")),
                this.videoElement.addEventListener("progress", this.sendDelayedEvent.bind(this, "progress", 5)),
                this.videoElement.addEventListener("ratechange", this.sendPlainEvent.bind(this, "ratechange")),
                this.videoElement.addEventListener("seeked", this.sendPlainEvent.bind(this, "seeked")),
                this.videoElement.addEventListener("seeking", this.sendDelayedEvent.bind(this, "seeking", .3)),
                this.videoElement.addEventListener("stalled", this.sendPlainEvent.bind(this, "stalled")),
                this.videoElement.addEventListener("suspend", this.sendPlainEvent.bind(this, "suspend")),
                this.videoElement.addEventListener("volumechange", this.sendPlainEvent.bind(this, "volumechange")),
                this.videoElement.addEventListener("waiting", this.sendPlainEvent.bind(this, "waiting")),
                this.videoElement.addEventListener("timeupdate", this.sendDelayedEvent.bind(this, "timeupdate", 10))
            }
        }, {
            key: "sendPlainEvent",
            value: function(e) {
                this.send(e)
            }
        }, {
            key: "sendDelayedEvent",
            value: function(e, t) {
                var i = this
                  , n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null;
                this.delayedEvents[e] || (this.send(e, null, n),
                this.delayedEvents[e] = !0,
                setTimeout(function() {
                    i.delayedEvents[e] = !1
                }, 1e3 * t))
            }
        }, {
            key: "attachAdsEvents",
            value: function() {
                this.core.on(L.A.ADS_STARTED, this.sendPlainEvent.bind(this, "ads_start")),
                this.core.on(L.A.ADS_ENDED, this.sendPlainEvent.bind(this, "ads_end"))
            }
        }, {
            key: "attachAdaptiveEvents",
            value: function() {}
        }, {
            key: "attachErrorEvents",
            value: function() {
                var e = this;
                this.videoElement.addEventListener("error", function(t) {
                    var i, n = (null == t || null == (i = t.target) || null == (i = i.error) ? void 0 : i.message) || "";
                    e.sendError(n, !1)
                }),
                this.core.on(L.A.SOURCE_CONTROLLER_ON_ERROR, function(t, i) {
                    var n = (null == i ? void 0 : i.details) || (null == i ? void 0 : i.type) || "";
                    e.sendError(n, !1)
                }),
                this.core.on(L.A.PLAYER_FALLBACK_SOURCE_FAIL, this.sendError.bind(this, "player_fallback_source_fail", !0))
            }
        }, {
            key: "sendError",
            value: function() {
                var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : ""
                  , t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
                this.send("error", null, {
                    message: e,
                    is_fatal: t
                })
            }
        }, {
            key: "attachFallbackEvents",
            value: function() {
                this.core.on(L.A.PLAYER_FALLBACK_SOURCE, this.sendPlainEvent.bind(this, "fallback"))
            }
        }, {
            key: "send",
            value: function(e) {
                var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null
                  , i = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null
                  , n = {
                    log: "xplayer-analytics",
                    event: e,
                    ts: t || Date.now(),
                    watch_id: "UNKNOWN",
                    video_position: Math.round(this.videoElement.currentTime),
                    source_url: this.core.sourceController.getSourceUrl() || "UNKNOWN",
                    source_type: this.core.sourceController.type || "UNKNOWN",
                    source_quality: this.core.sourceController.getCurrentQuality() || "UNKNOWN",
                    session_started_at: "UNKNOWN",
                    session_token: "UNKNOWN",
                    player: "UNKNOWN",
                    videoId: "UNKNOWN",
                    maxQuality: "UNKNOWN",
                    message: ""
                };
                if (P.A.get("swiping") && (n.message = "swiping"),
                "function" == typeof this.options.addFields ? n = Z(Z({}, n), this.options.addFields()) : this.options.addFields && (n = Z(Z({}, n), this.options.addFields)),
                i && (n = Z(Z({}, n), i)),
                this.debug)
                    return void console.warn("buffStats2:", n);
                I.A.sendToCollector(n, this.options.send)
            }
        }])
          , et = i(71360)
          , ei = i(83899)
          , en = ["fromMain"];
        function es(e, t) {
            var i = Object.keys(e);
            if (Object.getOwnPropertySymbols) {
                var n = Object.getOwnPropertySymbols(e);
                t && (n = n.filter(function(t) {
                    return Object.getOwnPropertyDescriptor(e, t).enumerable
                })),
                i.push.apply(i, n)
            }
            return i
        }
        function er(e) {
            for (var t = 1; t < arguments.length; t++) {
                var i = null != arguments[t] ? arguments[t] : {};
                t % 2 ? es(Object(i), !0).forEach(function(t) {
                    (0,
                    k.A)(e, t, i[t])
                }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(i)) : es(Object(i)).forEach(function(t) {
                    Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(i, t))
                })
            }
            return e
        }
        function eo(e, t) {
            return t in e ? e[t] : null
        }
        var ea = (0,
        y.A)(function e(t, i, n, s) {
            var r = this;
            (0,
            _.A)(this, e),
            (0,
            k.A)(this, "core", void 0),
            (0,
            k.A)(this, "videoElement", void 0),
            (0,
            k.A)(this, "options", void 0),
            (0,
            k.A)(this, "debug", void 0),
            (0,
            k.A)(this, "sentEvents", void 0),
            (0,
            k.A)(this, "seekingTimes", void 0),
            (0,
            k.A)(this, "seekedByDoubleTap", void 0),
            (0,
            k.A)(this, "hotLoopCount", void 0),
            (0,
            k.A)(this, "isHotLoopActive", void 0),
            (0,
            k.A)(this, "onPlayerPlay", function() {
                !r.core.capabilities.idevice && r.seekingTimes > 0 && (r.seekingTimes > 1 ? r.uiStats(ei.A.seeking_by_dragging) : r.seekedByDoubleTap || r.uiStats(ei.A.seeking_by_tap),
                r.seekingTimes = 0,
                r.seekedByDoubleTap = !1)
            }),
            (0,
            k.A)(this, "onPageUnload", function() {
                r.isHotLoopActive && O.A.emit(L.A.HOT_LOOP_DEACTIVATE)
            }),
            (0,
            k.A)(this, "mergeRules", [function(e) {
                return !!e["str.message"]
            }
            , function(e) {
                return Number.isInteger(e["int.loop_count"])
            }
            ]),
            this.core = t,
            this.videoElement = i,
            this.options = n || {},
            this.debug = s,
            this.sentEvents = {},
            this.seekingTimes = 0,
            this.seekedByDoubleTap = !1,
            this.hotLoopCount = 0,
            this.isHotLoopActive = !1,
            this.init()
        }, [{
            key: "init",
            value: function() {
                var e = this;
                this.core.on(L.A.PLAYER_ON_INIT, this.uiStats.bind(this, ei.A.player_init)),
                this.core.on(L.A.PLAYER_ON_ENDED, this.onPlayerEnded, this),
                this.core.on(L.A.OVERLAY_MENU_TAB_OPEN, this.onOverlayMenuTabOpen, this),
                this.core.on(L.A.SHARE_MENU_OPEN, this.uiStats.bind(this, ei.A.aftershot_click_share)),
                this.core.on(L.A.OVERLAY_ELEMENT_CLICK, this.onOverlayElementClick, this),
                this.core.on(L.A.HOVER_ELEMENT_CLICK, this.onHoverElementClick, this),
                this.core.on(L.A.RELATED_REFRESH_CLICK, this.uiStats.bind(this, ei.A.related_refresh)),
                this.core.on(L.A.PLAYER_ON_FULLSCREEN_CHANGE, this.onFullscreenChange.bind(this)),
                this.core.on(L.A.PLAYER_TOGGLE_LARGEMODE, this.onLargeModeToggle, this),
                this.core.on(L.A.CONTROLS_PREVIEW_CLICK, this.uiStats.bind(this, ei.A.preview)),
                this.core.on(L.A.CONTROLS_DOWNLOAD_CLICK, this.uiStats.bind(this, ei.A.downloads)),
                this.core.on(L.A.CONTROLS_FAVORITE_CLICK, this.uiStats.bind(this, ei.A.favorite)),
                this.core.on(L.A.REPORT_ISSUE_CLICK, this.uiStats.bind(this, ei.A.report_click)),
                this.core.on(L.A.SETTINGS_MENU_OPEN, this.uiStats.bind(this, ei.A.settings_open)),
                this.core.on(L.A.SETTINGS_MENU_TOGGLED, this.onSettingsMenuToggled, this),
                this.core.on(L.A.PLAYER_SET_AUTOPLAY, this.uiStats.bind(this, ei.A.settings_autoplay)),
                this.core.on(L.A.PLAYER_SET_PLAYBACK_RATE, this.uiStats.bind(this, ei.A.settings_speed)),
                this.core.on(L.A.PLAYER_SET_PREVIEW, this.uiStats.bind(this, ei.A.settings_preview)),
                this.core.on(L.A.PLAYER_SET_QUALITY, this.uiStats.bind(this, ei.A.settings_quality)),
                this.core.on(L.A.SUBSCRIBE_INIT, this.uiStats.bind(this, ei.A.subscribe_init)),
                this.core.on(L.A.SUBSCRIBE_SHOW, this.uiStats.bind(this, ei.A.subscribe_show)),
                this.core.on(L.A.SUBSCRIBE_CLICK_LOGO, this.uiStats.bind(this, ei.A.subscribe_click_logo)),
                this.core.on(L.A.SUBSCRIBE_CLICK_SUBSCRIBE, this.uiStats.bind(this, ei.A.subscribe_click_subscribe)),
                this.core.on(L.A.SUBSCRIBE_CLICK_UNSUBSCRIBE, this.uiStats.bind(this, ei.A.subscribe_click_unsubscribe)),
                this.core.on(L.A.DOWNLOAD_BUTTON_CLICK, this.uiStats.bind(this, ei.A.download_click)),
                this.core.on(L.A.LINK_CLICK, this.uiStats.bind(this, ei.A.link_click)),
                this.core.on(L.A.CONTROLS_FULLSCREEN_CLICK, this.uiStats.bind(this, ei.A.fullscreen_click)),
                this.core.on(L.A.PLAYER_ON_SWIPE_START, this.uiStats.bind(this, ei.A.seeking_by_swipe)),
                this.core.on(L.A.VR_MODE_ENABLE, this.uiStats.bind(this, ei.A.vr_mode_on)),
                this.core.on(L.A.PLAYER_ORIENTATION_SET_FULLSCREEN, function(t) {
                    "in" === t ? e.uiStats(ei.A.fullscreen_in_by_orientation) : "out" === t && e.uiStats(ei.A.fullscreen_out_by_orientation)
                }),
                this.core.on(L.A.PLAYER_FULLSCREEN_FAILED, this.uiStats.bind(this, ei.A.fullscreen_failed)),
                this.core.on(L.A.FULLSCREEN_BUTTON_CLICK, function(t) {
                    "in" === t ? e.uiStats(ei.A.fullscreen_in_by_button) : "out" === t && e.uiStats(ei.A.fullscreen_out_by_button)
                }),
                this.core.on(L.A.MUTE_CLICK, function(t) {
                    "on" === t ? e.uiStats(ei.A.mute_by_button_on) : "off" === t && e.uiStats(ei.A.mute_by_button_off)
                }),
                this.core.on(L.A.DOUBLE_TAP, function(t) {
                    "forward" === t ? e.uiStats(ei.A.seeking_by_double_tap_forward) : "backward" === t && e.uiStats(ei.A.seeking_by_double_tap_backward),
                    e.seekedByDoubleTap = !0
                }),
                this.core.on(L.A.FULLSCREEN_SWIPE, this.uiStats.bind(this, ei.A.fullscreen_out_by_swipe)),
                this.core.on(L.A.PLAYER_ON_PAUSE, this.uiStats.bind(this, ei.A.player_pause)),
                this.core.on(L.A.POSTER_CLICK, this.uiStats.bind(this, ei.A.player_play_by_poster)),
                this.core.on(L.A.PLAY_SMALL_BUTTON_CLICK, function(t) {
                    "play" === t ? e.uiStats(ei.A.player_play_by_small_button) : "pause" === t && e.uiStats(ei.A.player_pause_by_small_button)
                }),
                this.core.on(L.A.PLAY_CENTER_BUTTON_CLICK, function(t) {
                    "play" === t ? e.uiStats(ei.A.player_play_by_center_button) : "play-hidden" === t ? e.uiStats(ei.A.player_play_by_center_hidden_button) : "pause-hidden" === t && e.uiStats(ei.A.player_pause_by_center_hidden_button)
                }),
                this.core.on(L.A.SWAP_HANDS_BUTTON_CLICK, function(t) {
                    "right" === t ? e.uiStats(ei.A.swap_hands_by_button_right) : "left" === t && e.uiStats(ei.A.swap_hands_by_button_left)
                }),
                this.core.on(L.A.PLAYER_ON_CHANGE_ORIENTATION, function(t) {
                    "landscape" === t ? e.uiStats(ei.A.change_orientation_landscape) : "portrait" === t && e.uiStats(ei.A.change_orientation_portrait)
                }),
                O.A.on(L.A.PLAYER_ON_VOLUME_CHANGE, function(t) {
                    t.target.muted || t.target.volume < .02 ? e.uiStats(ei.A.mute_on) : e.uiStats(ei.A.mute_off)
                }),
                O.A.on(L.A.PLAYER_ON_SEEKING, function() {
                    !P.A.get("ads") && e.seekingTimes++
                }),
                O.A.on(L.A.PLAYER_ON_SEEKED, function() {
                    e.core.capabilities.idevice && (e.seekingTimes > 1 ? e.uiStats(ei.A.seeking_by_dragging) : e.seekedByDoubleTap || e.uiStats(ei.A.seeking_by_tap),
                    e.seekedByDoubleTap = !1,
                    e.seekingTimes = 0)
                }),
                O.A.on(L.A.HOT_LOOP_ACTIVATE, function() {
                    e.hotLoopCount = 0,
                    e.isHotLoopActive = !0,
                    e.uiStats(ei.A.hot_loop_activate)
                }),
                O.A.on(L.A.HOT_LOOP_LOOP_COUNT, function() {
                    e.hotLoopCount++
                }),
                O.A.on(L.A.HOT_LOOP_DEACTIVATE, function() {
                    e.uiStats(ei.A.hot_loop_deactivate, {
                        "int.loop_count": e.hotLoopCount
                    }),
                    e.hotLoopCount = 0,
                    e.isHotLoopActive = !1
                });
                var t = this.core.capabilities.ios ? "pagehide" : "beforeunload";
                window.addEventListener(t, this.onPageUnload),
                this.core.once(L.A.PLAYER_PLAY, function() {
                    e.uiStats(ei.A.player_play),
                    e.core.on(L.A.PLAYER_ON_PLAY, function() {
                        e.uiStats(ei.A.player_play),
                        e.onPlayerPlay()
                    })
                }),
                this.core.on(L.A.PLAYER_ON_PLAYING, this.onPlayerPlay),
                this.core.on(L.A.STATISTICS_UI, this.uiStats.bind(this));
                var i = O.A.on(L.A.PLAYER_PLAY_FAIL, function(t) {
                    var i = {
                        "str.message": (null == t ? void 0 : t.message) || (null == t ? void 0 : t.toString()) || "undefined"
                    };
                    e.uiStats(ei.A.player_play_failed, i)
                });
                O.A.once(L.A.PLAYER_PLAY_AUTOPLAY, function() {
                    e.uiStats(ei.A.player_play_autoplay),
                    O.A.off(L.A.PLAYER_PLAY_FAIL, i);
                    var t = O.A.once(L.A.PLAYER_PLAY_FAILED, function(t) {
                        var i = (null == t ? void 0 : t.message) || (null == t ? void 0 : t.toString()) || "undefined";
                        -1 !== i.indexOf("play() failed") ? e.uiStats(ei.A.player_play_failed, {
                            "str.message": "noUserInteraction"
                        }) : e.uiStats(ei.A.player_play_failed, {
                            "str.message": i
                        })
                    });
                    O.A.once(L.A.PLAYER_PLAY_SUCCESS, function() {
                        O.A.off(L.A.PLAYER_PLAY_FAILED, t)
                    })
                }),
                O.A.once(L.A.PLAYER_PLAY_VIDEO_PROMISE_NOT_SUPPORTED, function() {
                    e.uiStats(ei.A.player_play_video_promise_not_supported)
                }),
                O.A.on(L.A.PLAYER_WIRELESS_CHANGED, function() {
                    var t, i = null != (t = e.core.videoElement) && t.webkitCurrentPlaybackTargetIsWireless ? ei.A.airplay_on : ei.A.airplay_off;
                    e.uiStats(i)
                }),
                O.A.on(L.A.PLAYER_SET_DOUBLE_TAP_MODE, function(t) {
                    var i = ei.A.seeking_double_tap_change_top_down
                      , n = ei.A.seeking_double_tap_change_right_left;
                    e.uiStats("top-down" === t ? i : n)
                }),
                O.A.on(L.A.PLAYER_PLAY_SUCCESS, function() {
                    e.uiStats(ei.A.play_success)
                }),
                O.A.on(L.A.PLAYER_SET_AV1_OPTION, function(t) {
                    t ? e.uiStats(ei.A.settings_av1_on) : e.uiStats(ei.A.settings_av1_off)
                }),
                O.A.on(L.A.PLAYER_LINK_SPONSORED_SHOWN, function() {
                    e.uiStats(ei.A.link_sponsored_shown)
                }),
                O.A.on(L.A.PLAYER_LINK_SPONSORED_CLICK, function() {
                    e.uiStats(ei.A.link_sponsored_click)
                }),
                O.A.on(L.A.NEXT_VIDEO_BUTTON_NEXT_CLICK, function() {
                    e.uiStats(ei.A.next_video_button_next_click)
                }),
                O.A.on(L.A.NEXT_VIDEO_BUTTON_PREVIOUS_CLICK, function() {
                    e.uiStats(ei.A.next_video_button_previous_click)
                }),
                O.A.on(L.A.PLAYER_ON_SPEED_BOOST_START, function() {
                    e.uiStats(ei.A.speed_boost_activated)
                }),
                O.A.on(L.A.PLAYER_ON_SPEED_BOOST_END, function() {
                    e.uiStats(ei.A.speed_boost_deactivated)
                })
            }
        }, {
            key: "onPlayerEnded",
            value: function() {
                P.A.get("ads_playing") || this.uiStats(ei.A.video_end)
            }
        }, {
            key: "onOverlayMenuTabOpen",
            value: function(e) {
                var t = eo({
                    "xplayer-related": ei.A.related_open,
                    "top-rated": ei.A.top_rated_open,
                    "more-from-user": ei.A.from_user_open,
                    share: ei.A.aftershot_click_share
                }, e);
                t && this.uiStats(t)
            }
        }, {
            key: "onOverlayElementClick",
            value: function(e) {
                var t = eo({
                    share: ei.A.share_click,
                    join: ei.A.join_now_click,
                    download: ei.A.download_click,
                    "xplayer-related": ei.A.related_click,
                    "top-rated": ei.A.top_rated_click,
                    "live-sex": ei.A.live_sex_click,
                    "more-from-user": ei.A.from_user_click,
                    "more-videos": ei.A.more_videos_click,
                    "related-more": ei.A.related_more_click,
                    "related-small": ei.A.related_click_small,
                    "download-small": ei.A.download_click_small,
                    "share-small": ei.A.share_click_small,
                    "live-sex-small": ei.A.live_sex_click_small,
                    "more-videos-small": ei.A.more_videos_click_small
                }, e);
                t && this.uiStats(t)
            }
        }, {
            key: "onHoverElementClick",
            value: function(e) {
                var t = eo({
                    logo: ei.A.logo_click,
                    title: ei.A.title_click,
                    join: ei.A.join_click,
                    producer: ei.A.producer_click
                }, e);
                t && this.uiStats(t)
            }
        }, {
            key: "onFullscreenChange",
            value: function(e) {
                var t = this.core.capabilities.idevice
                  , i = document
                  , n = (t ? "webkitbeginfullscreen" === e.type : i.fullscreenElement || i.mozFullScreenElement || i.webkitFullscreenElement || i.msFullscreenElement) ? ei.A.fullscreen_in : ei.A.fullscreen_out;
                this.uiStats(n)
            }
        }, {
            key: "onLargeModeToggle",
            value: function(e) {
                this.uiStats(e ? ei.A.large_mode_in : ei.A.large_mode_out)
            }
        }, {
            key: "onSettingsMenuToggled",
            value: function(e) {
                e && this.uiStats(ei.A.settings_open)
            }
        }, {
            key: "getOrientation",
            value: function() {
                return void 0 === window.orientation ? "null" : 180 === window.orientation || 0 === window.orientation ? "portrait" : "landscape"
            }
        }, {
            key: "getScreenSize",
            value: function() {
                return "landscape" === this.getOrientation() ? "".concat(window.screen.height, "x").concat(window.screen.width) : "".concat(window.screen.width, "x").concat(window.screen.height)
            }
        }, {
            key: "shouldMergeExtraData",
            value: function(e) {
                return !!e && this.mergeRules.some(function(t) {
                    return t(e)
                })
            }
        }, {
            key: "uiStats",
            value: function(e) {
                var t, i = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null, n = {
                    log: "xplayer_ui",
                    event: e,
                    "str.orientation": this.getOrientation(),
                    "str.screen_size": this.getScreenSize(),
                    "str.firstEvent": this.sentEvents[e] ? "false" : "true",
                    "str.fullscreen": "".concat(P.A.get("fullscreen")),
                    "str.doubleTapSeekMode": "".concat(this.core.settings.doubleTapMode),
                    "str.muted": this.core.videoElement.muted || this.core.videoElement.volume < .02 ? "true" : "false",
                    "str.has_ads": "".concat(this.options.hasAds),
                    "str.lefty_controls": "".concat(this.core.settings.lefty),
                    "str.hasSubtitles": (null == (t = this.core) || null == (t = t.pluginOptions) || null == (t = t.subtitles) || null == (t = t.tracks) ? void 0 : t.length) > 0 ? "true" : "false"
                };
                if (this.sentEvents[e] = e,
                "function" == typeof this.options.addFields ? n = er(er({}, n), this.options.addFields()) : this.options.addFields && (n = er(er({}, n), this.options.addFields)),
                null != i && i.fromMain) {
                    i.fromMain;
                    var s = (0,
                    et.A)(i, en);
                    n = er(er({}, n), s)
                } else
                    this.shouldMergeExtraData(i) && (n = er(er({}, n), i));
                if (n = er(er({}, n), (0,
                D.q)()),
                this.debug)
                    return void console.warn(n);
                I.A.sendToCollector(n, this.options.send)
            }
        }, {
            key: "reset",
            value: function() {
                this.sentEvents = {},
                this.seekingTimes = 0,
                this.seekedByDoubleTap = !1,
                this.isHotLoopActive = !1
            }
        }])
          , el = class {
            init() {
                this.videoElement.addEventListener("timeupdate", this.onTimeUpdateBind)
            }
            onTimeUpdate() {
                if (P.A.get("ads") || this.eventSent || (this.threshold || (this.threshold = this.videoElement.duration <= 69 ? Math.floor(this.videoElement.duration) : (.35 * Math.log(this.videoElement.duration / 60 - .15) + 1.15) * 60),
                this.currentPosition = parseInt(this.videoElement.currentTime, 10),
                this.lastPosition === this.currentPosition))
                    return;
                let e = this.currentPosition - this.lastPosition;
                this.watchTime += e <= 0 || e > 1 ? 0 : e,
                this.lastPosition = this.currentPosition,
                this.watchTime >= this.threshold && (this.videoElement.removeEventListener("timeupdate", this.onTimeUpdateBind),
                this.eventSent = !0,
                O.A.emit(L.A.VIEW_SUCCESS))
            }
            reset() {
                this.currentPosition = 0,
                this.lastPosition = 0,
                this.watchTime = 0,
                this.eventSent = !1,
                this.threshold = null
            }
            constructor(e, t, i, n) {
                this.core = e,
                this.videoElement = t,
                this.options = i || {},
                this.debug = n,
                this.currentPosition = 0,
                this.lastPosition = 0,
                this.watchTime = 0,
                this.eventSent = !1,
                this.threshold = null,
                this.onTimeUpdateBind = this.onTimeUpdate.bind(this),
                this.init()
            }
        }
          , ec = class {
            init() {
                this.options.adaptiveStats && (this.adaptiveStats = new F(this.core,this.videoElement,this.options,this.debug)),
                this.options.downloadSpeedStats && (this.downloadSpeedStats = new j(this.core,this.videoElement,this.options,this.debug)),
                (this.options.buffStats || this.options.buffStats2) && (this.viewSuccessStats = new el(this.core,this.videoElement,this.options,this.debug)),
                this.options.buffStats && (this.bufferingStats = new G(this.core,this.videoElement,this.options,this.debug)),
                this.options.buffStats2 && new ee(this.core,this.videoElement,this.options,this.debug),
                this.options.errorStats && (this.errorStats = new X(this.core,this.videoElement,this.options,this.debug)),
                this.options.uiStats && (this.uiStats = new ea(this.core,this.videoElement,this.options,this.debug))
            }
            reset() {
                this.adaptiveStats && this.adaptiveStats.reset(),
                this.downloadSpeedStats && this.downloadSpeedStats.reset(),
                this.viewSuccessStats && this.viewSuccessStats.reset(),
                this.bufferingStats && this.bufferingStats.reset(),
                this.errorStats && this.errorStats.reset(),
                this.uiStats && this.uiStats.reset()
            }
            constructor(e, t, i, n) {
                var s;
                this.core = e,
                this.videoElement = t,
                this.options = (null == i ? void 0 : i.statistics) || {},
                this.debug = n,
                this.options = Object.assign(this.options, {
                    hasAds: !(0,
                    f.xz)(null == (s = i.ads) ? void 0 : s.vastUrls)
                }),
                this.init()
            }
        }
    },
    81718: function(e, t, i) {
        "use strict";
        var n = i(32641);
        t.A = {
            SERVERS: {
                X_API: `https://${document.location.hostname}/x-api`
            },
            sendToCollector: function(e, t) {
                var {log: i} = e;
                t(i, (0,
                n._)(e, ["log"]))
            }
        }
    },
    83312: function(e, t, i) {
        "use strict";
        var n = i(7163)
          , s = i(10809);
        let r = "xplayer-status"
          , o = "xh-helper-hidden";
        t.A = class {
            init() {
                this.render(),
                this.attachEvents()
            }
            render() {
                this.element = document.createElement("div"),
                this.element.className = `${r} ${o}`,
                this.core.element.appendChild(this.element)
            }
            attachEvents() {
                this.core.on(s.A.SHOW_STATUS, this.showStatus, this)
            }
            showStatus(e, t) {
                this.element.className = r,
                this.element.textContent = e,
                "string" == typeof t && n.A.addClass(this.element, t),
                clearTimeout(this.statusTimeout),
                this.statusTimeout = setTimeout(()=>n.A.addClass(this.element, o), 1e3)
            }
            constructor(e, t) {
                this.core = e,
                this.options = t.status || {},
                this.statusTimeout = null,
                this.init()
            }
        }
    },
    59821: function(e, t, i) {
        "use strict";
        i.d(t, {
            J: function() {
                return n
            }
        });
        let n = "player-pause"
    },
    50623: function(e, t, i) {
        "use strict";
        let n;
        i.d(t, {
            E: function() {
                return R
            },
            S: function() {
                return n
            }
        });
        var s, r, o, a, l, c = i(20078), h = i(66075), u = i(63048), d = i(12243), A = i(48335), p = i(69277), m = i(70408);
        (s = r || (r = {})).Generic = "generic",
        s.Geo = "geo",
        s.Thumb = "thumb",
        s.GeoThumb = "geoThumb",
        s.Ml = "ml",
        s.Postitial = "postitial";
        var v = i(26838)
          , E = i(43530);
        let f = e=>{
            E.Global.emit("sentryCaptureWarning", e)
        }
        ;
        var _ = i(99851)
          , y = i(54558)
          , g = i(34920)
          , S = i(13201)
          , b = i(76758)
          , T = i(71094);
        (o = a || (a = {})).Init = "ml_service_for_page_init",
        o.Sent = "ml_service_for_page_sent",
        o.Received = "ml_service_for_page_received",
        o.RequestError = "ml_service_for_page_request_error",
        o.ResponseError = "ml_service_for_page_response_error",
        o.FormatError = "ml_service_for_page_format_error";
        class k {
            setBaseData(e) {
                var t, i, n;
                if (!this.isEnabled)
                    return;
                if (this.storage = null != (n = (0,
                u.WW)("mlForPageStorage")) ? n : null,
                !this.storage)
                    return void console.error("mlForPageStorage is not defined");
                let {videoEntityId: s, videoEntityType: r, site: o, userID: a, watchId: l, hasVastUrls: c, player: h, addFields: d, hasAdblock: A} = this.storage;
                this.data = (0,
                m._)((0,
                p._)({
                    content: "",
                    key: "ml_service_for_page",
                    id: s,
                    video_type: (0,
                    T.au)(r),
                    site: o,
                    uid: a,
                    "str.watchId": l,
                    "str.cdn": null == (i = window) || null == (t = i.xplayer) ? void 0 : t.core.sourceController.getCDN(),
                    "str.has_ads": c,
                    "str.has_adblock": A,
                    "str.request_domain": e,
                    "str.player": h,
                    "int.x_preroll": (0,
                    g.wn)(),
                    "int.x_preroll_shown": (0,
                    g.Jh)()
                }, d), {
                    experiments: null
                })
            }
            checkAdBlock() {
                let {adblockEmulated: e, ablParams: t} = window.appContext || {}
                  , i = (0,
                m._)((0,
                p._)({}, t), {
                    id: "adDiv"
                });
                t && (0,
                y.L)({
                    isAdblockEmulated: e,
                    attrs: i,
                    onDetect: ()=>{
                        this.data && (this.data["str.has_adblock"] = "true")
                    }
                })
            }
            send(e, t) {
                this.isEnabled && this.data && (this.data.content = e,
                (e === a.FormatError || e === a.ResponseError) && (this.data["str.errorCode"] = `${null == t ? void 0 : t.errorCode}`),
                e === a.RequestError && (this.data["str.errorMessage"] = `${null == t ? void 0 : t.errorMessage}`),
                (0,
                b.tN)(S.tG.Custom, this.data, !1))
            }
            constructor(e) {
                (0,
                _._)(this, "isEnabled", void 0),
                (0,
                _._)(this, "storage", void 0),
                (0,
                _._)(this, "data", void 0),
                this.data = null,
                this.storage = null,
                this.isEnabled = 1 > Math.floor(100 * Math.random()),
                this.setBaseData(e),
                this.checkAdBlock(),
                this.send(a.Init)
            }
        }
        var L = i(24022)
          , O = i(53536);
        let P = (l = (0,
        v._)(function*(e, t, i, n) {
            let s, r = new k(new URL(t).hostname), o = encodeURIComponent(JSON.stringify(function(e) {
                let t = (0,
                L.J)();
                if (0 === t.length)
                    return e;
                let i = {};
                return (0,
                O.iV)(null == e ? void 0 : e.userExtra) && (i = (0,
                p._)({}, null == e ? void 0 : e.userExtra)),
                i.clickedModels = t.map(e=>({
                    id: e.id,
                    ts: e.ts
                })),
                (0,
                m._)((0,
                p._)({}, e), {
                    userExtra: i
                })
            }((0,
            m._)((0,
            p._)({}, e.payload), {
                suggestedModels: i
            })))), l = performance.now();
            try {
                r.send(a.Sent),
                s = yield fetch(`${t}?${encodeURIComponent(n)}&body=${o}`, {
                    headers: {
                        "x-request-id": e.reqId
                    }
                })
            } catch (e) {
                return r.send(a.RequestError, {
                    errorMessage: e.message
                }),
                f({
                    message: "unexpected xhl ml error",
                    originalError: String(e)
                }),
                null
            }
            if (!s.ok)
                return r.send(a.ResponseError, {
                    errorCode: `${s.status}`
                }),
                f({
                    message: "xhl ml invalid status",
                    tags: {
                        status: s.status
                    }
                }),
                null;
            let c = yield s.json();
            return "object" == typeof c.widgetPositions && null !== c.widgetPositions && Array.isArray(c.models) && "object" == typeof c.meta && null !== c.meta ? (r.send(a.Received),
            {
                response: c,
                timing: Math.round(performance.now() - l)
            }) : (r.send(a.FormatError, {
                errorCode: `${s.status}`
            }),
            f({
                message: "xhl ml response format error"
            }),
            null)
        }),
        function(e, t, i, n) {
            return l.apply(this, arguments)
        }
        )
          , C = ({xhlMlSource: e, camsWidgetMlUrl: t, bannerPrefix: i})=>{
            var n;
            let s = null != (n = null == e ? void 0 : e.intervalOverride) ? n : 3e5;
            return (0,
            c.HD)(null, n=>{
                var r;
                let o = null
                  , a = []
                  , l = (r = (0,
                v._)(function*() {
                    var s, r, o;
                    let l = yield P(e, t, a, i);
                    a = null != (o = null == l || null == (r = l.response) || null == (s = r.models) ? void 0 : s.map(e=>e.id)) ? o : [],
                    n(l)
                }),
                function() {
                    return r.apply(this, arguments)
                }
                );
                return o = window.setInterval(l, s),
                l(),
                ()=>{
                    null !== o && (window.clearInterval(o),
                    o = null)
                }
            }
            )
        }
          , R = (0,
        h.Y)(!1);
        if ((0,
        d.G)())
            n = {
                getStore: ()=>(0,
                c.HD)([]),
                getRecContextStore: ()=>(0,
                c.HD)(void 0)
            };
        else {
            let e = (0,
            u.WW)(A.t);
            e || (console.error("data for xhlStore was not found"),
            e = {});
            let {xhlMlSource: t, camsWidgetMl: i, bannerPrefix: s} = e;
            window.xhlStore ? (n = window.xhlStore.storeFactory,
            R = window.xhlStore.trackingEnabledStore) : (n = t && i && void 0 !== s ? (({xhlMlSource: e, camsWidgetMlUrl: t, bannerPrefix: i})=>{
                let n = null
                  , s = []
                  , o = null;
                return {
                    getStore: (a,l)=>{
                        if (l <= 0)
                            throw Error("at least one model needs to be requested");
                        return null === n && (n = C({
                            xhlMlSource: e,
                            camsWidgetMlUrl: t,
                            bannerPrefix: i
                        })),
                        (0,
                        c.un)(n, (e,t)=>{
                            if (!e)
                                return t([]),
                                ()=>{}
                                ;
                            let i = {
                                callback: t,
                                widgetName: a,
                                count: l
                            };
                            return s.push(i),
                            o || (o = window.setTimeout(()=>{
                                ((e,t)=>{
                                    if (!e)
                                        return;
                                    let i = new Map;
                                    t.forEach(e=>{
                                        i.has(e.widgetName) || i.set(e.widgetName, []),
                                        i.get(e.widgetName).push(e)
                                    }
                                    );
                                    let n = new Map
                                      , s = new Map
                                      , o = 0
                                      , a = e.models.length
                                      , l = new Map(e.models.map(e=>[e.id, e]));
                                    e.widgetPositions.forEach(t=>{
                                        var c;
                                        let h;
                                        if (!i.has(t.name))
                                            return;
                                        let u = null != (c = s.get(t.name)) ? c : 0
                                          , d = i.get(t.name)[0].count;
                                        if (u >= d)
                                            return;
                                        if (t.modelId && l.has(t.modelId))
                                            h = l.get(t.modelId);
                                        else {
                                            if (o >= a)
                                                return void console.warn(`not enough models in resp: requested ${o}th in ${e.models.length} elements`);
                                            h = e.models[o % a],
                                            o++
                                        }
                                        if (!h)
                                            return void console.warn("unexpected model not found");
                                        let A = n.has(t.name) ? n.get(t.name) : Array(d).fill(null);
                                        A[t.position] = (0,
                                        m._)((0,
                                        p._)({}, h), {
                                            source: r.Ml
                                        }),
                                        n.set(t.name, A),
                                        s.set(t.name, u + 1)
                                    }
                                    ),
                                    Array.from(i).forEach(([t,i])=>{
                                        var s;
                                        let r = i[0].count
                                          , l = (null != (s = n.get(t)) ? s : Array(r).fill(null)).map(t=>{
                                            if (null === t) {
                                                let t = e.models[o % a];
                                                return o++,
                                                t
                                            }
                                            return t
                                        }
                                        );
                                        l.length !== r && console.warn(`expected ${r}, but got ${l.length} models`),
                                        i.forEach(e=>{
                                            e.callback(l.length > r ? l.slice(0, r) : l)
                                        }
                                        )
                                    }
                                    )
                                }
                                )(e.response, s),
                                o = null
                            }
                            , 5)),
                            ()=>{
                                0 === (s = s.filter(e=>e !== i)).length && (null !== o && (window.clearTimeout(o),
                                o = null),
                                n = null)
                            }
                        }
                        , [])
                    }
                    ,
                    getRecContextStore: ()=>(null === n && (n = C({
                        xhlMlSource: e,
                        camsWidgetMlUrl: t,
                        bannerPrefix: i
                    })),
                    (0,
                    c.un)(n, (e,t)=>{
                        var i, n, s;
                        if (!e)
                            return void t(void 0);
                        t(null != (s = null == e || null == (n = e.response) || null == (i = n.meta) ? void 0 : i.recContext) ? s : void 0)
                    }
                    ))
                }
            }
            )({
                xhlMlSource: t,
                camsWidgetMlUrl: i,
                bannerPrefix: s
            }) : {
                getStore: ()=>(0,
                c.HD)([]),
                getRecContextStore: ()=>(0,
                c.HD)(void 0)
            },
            R = (0,
            h.Y)(!0),
            window.xhlStore = {
                storeFactory: n,
                trackingEnabledStore: R
            })
        }
    },
    54558: function(e, t, i) {
        "use strict";
        function n(e) {
            let t, i, n, s, r;
            return document.body.contains(e) && (t = getComputedStyle(e),
            i = e.getBoundingClientRect(),
            n = "none" === t.display || "hidden" === t.visibility || "0" === t.opacity,
            s = 0 === i.width && 0 === i.height,
            r = e.hasAttribute("hidden") || "true" === e.getAttribute("aria-hidden"),
            !n && !s && !r)
        }
        function s(e, t) {
            return t ? Promise.resolve(!0) : e ? new Promise(i=>{
                r({
                    isAdblockEmulated: t,
                    attrs: e,
                    onDetect: ()=>i(!0),
                    onAllow: ()=>i(!1)
                })
            }
            ) : (console.error("checkBaitAsync: attrs is required"),
            Promise.resolve(!1))
        }
        function r(e) {
            let t, i, s, {isAdblockEmulated: r, attrs: o={}, onDetect: a, onAllow: l} = e;
            if (r) {
                null == a || a();
                return
            }
            let c = (t = document.createElement((null == o ? void 0 : o.href) ? "a" : "div"),
            Object.entries(o).forEach(([e,i])=>{
                t.setAttribute(e, String(i))
            }
            ),
            t.style.width = "1px",
            t.style.height = "1px",
            t.style.display = "block",
            t.style.position = "absolute",
            t)
              , {body: h} = document;
            (s = (i = Array.from(document.body.children).filter(e=>e.isConnected)).length ? function(e) {
                if (!e.length)
                    throw Error("pick: empty array");
                let t = Math.floor(Math.random() * e.length);
                return e[t]
            }(i) : document.body).parentElement === h ? h.insertBefore(c, s.nextSibling) : h.appendChild(c);
            let u = !1
              , d = new MutationObserver(()=>{
                n(c) || p()
            }
            );
            d.observe(c, {
                attributes: !0,
                attributeFilter: ["style", "class", "hidden", "aria-hidden"]
            }),
            d.observe(h, {
                childList: !0
            });
            let A = window.setTimeout(p, 250);
            function p() {
                if (u)
                    return;
                u = !0,
                window.clearTimeout(A),
                d.disconnect();
                let e = !n(c);
                c.remove(),
                e ? null == a || a() : null == l || l()
            }
        }
        i.d(t, {
            L: function() {
                return r
            },
            x: function() {
                return s
            }
        })
    },
    44288: function(e, t, i) {
        "use strict";
        i.d(t, {
            J: function() {
                return a
            },
            h: function() {
                return l
            }
        });
        var n = i(37187)
          , s = i(65483)
          , r = i(53536)
          , o = i(58737);
        function a() {
            let e = n.VI("blockReferrer");
            return null === e || !Object.values(s.g6).includes(e.page) || !Object.values(o.Vc).includes(e.block) || (0,
            r.b0)(e.value) || null !== e.value && "string" != typeof e.value ? null : e
        }
        function l(e, t) {
            n.UN(e, {
                blockReferrer: t
            })
        }
    },
    42994: function(e, t, i) {
        "use strict";
        i.d(t, {
            b: function() {
                return s
            }
        });
        var n = i(44288);
        function s() {
            let e = (0,
            n.J)();
            if (null === e)
                return {};
            let t = {
                referrer_page: e.page,
                referrer_block: e.block
            };
            return null !== e.value && (t.referrer_value = e.value),
            null !== e.algo && (t.referrer_block_algo = e.algo),
            t
        }
    },
    37187: function(e, t, i) {
        "use strict";
        let n;
        i.d(t, {
            UN: function() {
                return _
            },
            VI: function() {
                return S
            },
            XE: function() {
                return g
            },
            q7: function() {
                return y
            }
        });
        var s, r, o, a = i(69277), l = i(84981), c = i(12243), h = i(57462), u = i(10009);
        let d = "stats_cd"
          , A = "stats_cp"
          , p = "uiEvent"
          , m = {}
          , v = {}
          , E = (null == (s = globalThis.window) ? void 0 : s.document) && b(null == (o = globalThis.window) || null == (r = o.document) ? void 0 : r.location.href)
          , f = !1;
        function _(e, t) {
            k();
            let i = new Date;
            i.setTime(i.getTime() + 2e4),
            v[e] = e in v ? (0,
            a._)({}, v[e], t) : t,
            (0,
            h.hZ)(u.Uz.ClickData, JSON.stringify(v[e]), {
                path: b(e),
                expires: i
            }, {
                acceptedCookies: n
            })
        }
        function y(e, t) {
            let i = {};
            i[p] = t,
            _(e, i)
        }
        function g() {
            var e;
            let t = S(p);
            return t && (e = p,
            k(),
            m && void 0 !== m[e] && (delete m[e],
            T())),
            t
        }
        function S(e) {
            return (k(),
            m && void 0 !== m[e]) ? m[e] : null
        }
        function b(e) {
            let t = e;
            return (t = (t = t.replace(/^https?:\/\/[^/]+/, "")).replace(/#.*$/, "")).replace(/\?.*$/, "")
        }
        function T() {
            try {
                if (!m || void 0 === window.sessionStorage)
                    return;
                sessionStorage.setItem(A, E),
                sessionStorage.setItem(d, JSON.stringify(m))
            } catch (e) {}
        }
        function k() {
            if (f)
                return;
            let e = l.a.get();
            e || (0,
            c.G)() || console.error("expected appContext to be set"),
            (n = null == e ? void 0 : e.acceptedCookies) && function(e) {
                try {
                    let t = (0,
                    h.Jt)(u.Uz.ClickData);
                    if (void 0 === t)
                        return !1;
                    (0,
                    h.yH)(u.Uz.ClickData, {
                        path: E
                    }, e);
                    let i = JSON.parse(t);
                    if (!i || "object" != typeof i)
                        return !1;
                    return m = i,
                    !0
                } catch (e) {
                    return !1
                }
            }(n) ? T() : function() {
                try {
                    if (void 0 === window.sessionStorage)
                        return;
                    if (window.sessionStorage.getItem(A) !== E) {
                        sessionStorage.removeItem(A),
                        sessionStorage.removeItem(d);
                        return
                    }
                    let e = window.sessionStorage.getItem(d);
                    if (null == e)
                        return;
                    let t = JSON.parse(e);
                    if (!t || "object" != typeof t)
                        return;
                    m = t
                } catch (e) {}
            }(),
            f = !0
        }
    },
    58737: function(e, t, i) {
        "use strict";
        var n, s, r, o, a, l, c, h, u, d, A, p;
        i.d(t, {
            Mr: function() {
                return A
            },
            Vc: function() {
                return h
            },
            ek: function() {
                return p
            },
            iN: function() {
                return d
            }
        }),
        (n = c || (c = {})).Index = "index",
        n.Recent = "recent",
        n.PornRadar = "porn-radar",
        n.AllTime = "all-time",
        n.Geo = "geo",
        n.Newest = "newest",
        n.Pornstar = "pornstar",
        n.Celebrity = "celebrity",
        n.Creator = "creator",
        n.Category = "category",
        n.Channel = "channel",
        n.Tag = "tag",
        n.Person = "person",
        n.Best = "best",
        n.Search = "search",
        n.Video = "video",
        n.User = "user",
        n.Related = "related",
        n.PersonTop = "person-top",
        n.ChannelTop = "channel-top",
        n.Unknown = "unknown",
        (s = h || (h = {})).Recent = "recent",
        s.PornRadar = "porn-radar",
        s.AllTime = "all-time",
        s.Mono = "mono",
        s.Geo = "geo",
        s.Newest = "newest",
        s.Moments = "moments",
        s.Trending = "trending",
        s.Recommended = "recommended",
        s.Best = "best",
        s.Related = "related",
        s.Relevant = "relevant",
        s.Extension = "extension",
        s.LinkingVertical = "linking-vertical",
        s.LinkingCategories = "linking-categories",
        s.LinkingChannels = "linking-channels",
        s.LinkingNetworkChannels = "linking-network-channels",
        s.LinkingPersons = "linking-persons",
        s.LinkingCreators = "linking-creators",
        s.LinkingSearch = "linking-search",
        s.LinkingHowTo = "linking-howto",
        s.RelatedVideo = "related-video",
        s.RelatedRecommended = "related-recommended",
        s.RelatedChannel = "related-channel",
        s.RelatedPerson = "related-person",
        s.RelatedCreator = "related-creator",
        s.RelatedProducer = "related-producer",
        s.RelatedVrPartners = "related-vr-partners",
        s.Publisher = "publisher",
        s.Promo = "promo",
        s.Unknown = "unknown",
        (r = u || (u = {})).Category = "category",
        r.Person = "person",
        r.Tag = "tag",
        r.Channel = "channel",
        r.Unknown = "unknown",
        (o = d || (d = {})).Video = "video",
        o.ShowMore = "show_more",
        o.LinkingLink = "linking_link",
        o.LinkingSubscribeBtn = "linking_subscribe_btn",
        o.CategoryMenuLink = "category_menu_link",
        o.ChannelLink = "channel_link",
        o.PornstarLink = "pornstar_link",
        o.VideoLandingLink = "video_landing",
        o.Gallery = "gallery",
        o.Photo = "photo",
        o.Unknown = "unknown",
        (a = A || (A = {}))[a.Unknown = 0] = "Unknown",
        a[a.Video = 1] = "Video",
        a[a.Moment = 2] = "Moment",
        (l = p || (p = {})).Video = "video",
        l.Thumb = "thumb"
    },
    71094: function(e, t, i) {
        "use strict";
        i.d(t, {
            au: function() {
                return o
            },
            bL: function() {
                return r
            }
        });
        var n = i(58737)
          , s = i(65483);
        function r(e) {
            if (null == e)
                return e;
            let t = {};
            return Object.entries(e).forEach(([e,i])=>{
                null != i && (t[e] = i)
            }
            ),
            t
        }
        function o(e) {
            switch (e) {
            case s.Mr.Video:
                return n.Mr.Video;
            case s.Mr.Moment:
                return n.Mr.Moment;
            default:
                return n.Mr.Unknown
            }
        }
    },
    71363: function(e, t, i) {
        "use strict";
        var n, s;
        i.d(t, {
            V: function() {
                return s
            }
        }),
        (n = s || (s = {})).ReportIssueClick = "report_issue_click",
        n.ContactUs = "contact_us_click",
        n.StartSlow = "start_slow",
        n.RewindSlow = "rewind_slow",
        n.BufferingSlow = "buffering_slow",
        n.VideoAudioAsync = "video_audio_async",
        n.AudioOff = "audio_off",
        n.VideoNotLoading = "video_not_loading",
        n.VideoStoppedPlaying = "video_stopped_playing",
        n.QualityDistortion = "quality_distortion",
        n.QualityBad = "quality_bad",
        n.PlayerNotResponding = "player_not_responding",
        n.PlayerNoControls = "player_no_controls",
        n.ReportIssueClose = "report_issue_close",
        n.PlayerInit = "player_init",
        n.ReportIssueClickFromContent = "report_issue_click_from_content"
    },
    73805: function(e, t, i) {
        "use strict";
        i.d(t, {
            Q: function() {
                return h
            },
            q: function() {
                return u
            }
        });
        var n = i(69277)
          , s = i(70408)
          , r = i(63048)
          , o = i(13201)
          , a = i(76758)
          , l = i(71094)
          , c = i(71363);
        function h(e) {
            var t, i;
            let c = (0,
            r.WW)("streamingReportStorage");
            if (!c)
                return void console.error("streamingReportStorage is not defined");
            let {videoEntityId: h, videoEntityType: u, site: d, userID: A, watchId: p, hasVastUrls: m, player: v, addFields: E} = c
              , f = (0,
            s._)((0,
            n._)({
                key: "streaming_report",
                content: e,
                id: h,
                video_type: (0,
                l.au)(u),
                site: d,
                uid: A,
                "str.watchId": p,
                "str.cdn": null == (i = window) || null == (t = i.xplayer) ? void 0 : t.core.sourceController.getCDN(),
                "str.has_ads": m,
                "str.player": v
            }, E), {
                experiments: null
            });
            (0,
            a.tN)(o.tG.Custom, f, !1)
        }
        function u() {
            0 === Math.floor(1e3 * Math.random()) && h(c.V.PlayerInit)
        }
    },
    24022: function(e, t, i) {
        "use strict";
        i.d(t, {
            J: function() {
                return c
            },
            V: function() {
                return l
            }
        });
        var n = i(89858)
          , s = i(5996)
          , r = i(63744)
          , o = i(53536);
        let a = e=>(0,
        o.iV)(e) && "id"in e && (0,
        o.TI)(e.id) && "ts"in e && (0,
        o.TI)(e.ts);
        function l(e) {
            if (!e || !(0,
            o.TI)(e))
                return;
            let t = Number(e)
              , i = c();
            i.length >= 10 && i.shift(),
            i.push({
                id: t,
                ts: r.c.UTCNow()
            }),
            n.Ec.setItem(s.c.xhlMdlClHist, i)
        }
        function c() {
            let e = n.Ec.getItem(s.c.xhlMdlClHist);
            return ((0,
            o.cy)(e) ? e : []).filter(a)
        }
    },
    34920: function(e, t, i) {
        "use strict";
        i.d(t, {
            D8: function() {
                return u
            },
            Jh: function() {
                return a
            },
            Xw: function() {
                return c
            },
            wn: function() {
                return o
            }
        });
        var n = i(57462)
          , s = i(10009);
        let r = ()=>({
            expires: .02,
            domain: function() {
                if (!document.domain.length)
                    return ".xhamster.com";
                let e = document.domain.replace(/^(www\.)/, "").split(".");
                for (; e.length > 2; )
                    e.shift();
                return e.join(".").replace(/(^\.*)|(\.*$)/g, "")
            }(),
            secure: !0,
            sameSite: "None"
        });
        function o() {
            return Number.parseInt((0,
            n.Jt)(s.pY), 10) || 0
        }
        function a() {
            return Number.parseInt((0,
            n.Jt)(s.p2), 10) || 0
        }
        function l(e) {
            (0,
            n.hZ)(s.pY, o() + 1, r(), {
                acceptedCookies: e
            })
        }
        function c(e) {
            let t = document.querySelector('meta[name="keywords"]')
              , i = null == t ? void 0 : t.content;
            return t ? null == e ? void 0 : e.map(e=>{
                if (!(null == e ? void 0 : e.url))
                    return e;
                let {url: t, type: n} = e
                  , s = new URL(t)
                  , r = s.searchParams.get("keywords")
                  , o = r ? `${i},${r}` : i;
                return s.searchParams.set("keywords", o),
                {
                    url: s.toString(),
                    type: n
                }
            }
            ) : e
        }
        let h = (e=[])=>null == e ? void 0 : e.some(e=>"xhl-live" !== e.type);
        function u(e, t) {
            if (!t.prerollAllowed || t.isAmp)
                return;
            let {acceptedCookies: i, experiment44: c, prerollConfig: {maxCount: u=1 / 0, stateConfig: d}={}} = t;
            e.core.once(e.events.PLAYER_PLAY, ()=>{
                var t, n;
                if (h(null == (n = e.ads) || null == (t = n.options) ? void 0 : t.vastUrls))
                    return void !function(e, {maxCount: t, stateConfig: i}) {
                        (!i || i.includes(o())) && a() < t || e.core.emit(e.events.ADS_BLOCK)
                    }(e, {
                        maxCount: u,
                        stateConfig: d
                    });
                l(i)
            }
            , this),
            e.core.once(e.events.ADS_ENDED, t=>{
                var o, u;
                (t || "b" === c) && h(null == (u = e.ads) || null == (o = u.options) ? void 0 : o.vastUrls) && (l(i),
                (0,
                n.hZ)(s.p2, a() + 1, r(), {
                    acceptedCookies: i
                }))
            }
            , this)
        }
    },
    44129: function(e, t, i) {
        "use strict";
        i.d(t, {
            g: function() {
                return s
            }
        });
        var n = i(13451);
        function s(e, t=!1) {
            let i = Math.max(Math.ceil((new Date().getTime() - new Date(1e3 * e).getTime()) / 1e3), 1)
              , r = {
                y: 0,
                m: 0,
                d: 0,
                h: 0,
                i: 0
            };
            if (i < 86400)
                r.h = Math.floor(i / 3600),
                r.h || (r.i = Math.ceil(i % 3600 / 60));
            else if (i < 2592e3)
                r.d = Math.floor(i / 86400);
            else {
                let e = Math.floor(i / 86400);
                r.y = Math.floor(e / 365),
                r.y || (r.m = Math.floor(e / 30)),
                r.y || r.m || (r.d = e)
            }
            let o = "";
            for (let e in r)
                if (r[e]) {
                    o = (0,
                    n.Tl)({
                        y: "commonDateYear",
                        m: "commonDateMonth",
                        d: "commonDateDay",
                        h: "commonDateHour",
                        i: "commonDateMinute"
                    }[e], r[e]);
                    break
                }
            return t ? o : (0,
            n.Tl)("commonDateAgo", o)
        }
    },
    63744: function(e, t, i) {
        "use strict";
        i.d(t, {
            c: function() {
                return h
            }
        });
        var n = i(74353)
          , s = i(90445)
          , r = i(21840)
          , o = i(88569)
          , a = i(83826)
          , l = i(13451)
          , c = i(44129);
        class h {
            static rand(e, t) {
                return new Date(e.getTime() + Math.random() * (t.getTime() - e.getTime()))
            }
            static dateAgo(e) {
                return (0,
                c.g)(e)
            }
            static yearsFromTimestamp(e) {
                return n().diff(n(e), "year")
            }
            static twoStringFormat(e) {
                let t = n()
                  , i = n(1e3 * e);
                return i.year() < t.year() ? i.format("MMM D, YYYY") : i.month() <= t.month() && i.date() !== t.date() ? i.format("MMM D") : i.format("HH:mm")
            }
            static twoStringDateFormat(e) {
                let t = n()
                  , i = n(1e3 * e);
                return i.year() < t.year() ? i.format("MMM D, YYYY") : i.month() !== t.month() || i.month() === t.month() && i.date() < t.date() ? i.format("MMM D") : (0,
                l.Tl)("purchasesFilterPeriodToday")
            }
            static isValid(e, t) {
                if ("number" == typeof e) {
                    let i = new Date().getTime();
                    return new Date(1e3 * e).getTime() - i > 31536e5 ? n(e).utc(!t) : n(1e3 * e).utc(!t)
                }
                return n(e, ["DD.MM.YYYY", "MM.DD.YYYY", "YYYY-MM-DD"], !0).isValid()
            }
            static timeFormat(e) {
                return n(1e3 * e).format("HH:mm")
            }
            static format(e, t) {
                return n(1e3 * e).format(t)
            }
            static dateFormat(e, t) {
                return n(1e3 * e).utc(!t).format("DD.MM.YYYY")
            }
            static dateTimeFormat(e) {
                return n(1e3 * e).utc().format("DD.MM.YYYY HH:mm:ss UTC")
            }
            static fullDateFormat(e, t) {
                return n(1e3 * e).utc(!t).format("D MMMM YYYY")
            }
            static fullDateMothFirstFormat(e) {
                return n(1e3 * e).format("MMMM D YYYY")
            }
            static isSameDay(e, t, i) {
                return n(1e3 * e).utc(!i).isSame(n(1e3 * t).utc(!i), "day")
            }
            static diffSeconds(e, t) {
                return n(e).diff(n(t), "seconds")
            }
            static diffDays(e, t) {
                return n(e).diff(n(t), "days")
            }
            static UTCNow() {
                return n.utc().unix()
            }
            static unix(e, t) {
                return n(e.split(".").reverse().join("-") || Date.now()).utc(t).unix()
            }
            static UTCDate(e, t) {
                return n(e instanceof Date ? e : new Date(1e3 * e)).utc().format("string" != typeof t ? "YYYY-MM-DD HH:mm:ss UTC" : t)
            }
            static DayJS() {
                return n
            }
        }
        n.extend(a),
        n.extend(o),
        n.extend(r),
        n.extend(s)
    },
    76804: function(e, t, i) {
        "use strict";
        var n = i(84422)
          , s = i(15904)
          , r = i(4251)
          , o = i(23317)
          , a = i(42024)
          , l = i(40311)
          , c = i(86096)
          , h = i(95871)
          , u = i(73424)
          , d = i(9479)
          , A = i(21766)
          , p = i(87513)
          , m = i(37651)
          , v = i(10809)
          , E = i(54098)
          , f = i(7163)
          , _ = i(9776)
          , y = "xp-play"
          , g = "xh-helper-hidden"
          , S = (0,
        s.A)(function e(t) {
            (0,
            n.A)(this, e),
            (0,
            c.A)(this, "core", void 0),
            (0,
            c.A)(this, "element", void 0),
            (0,
            c.A)(this, "innerButton", void 0),
            (0,
            c.A)(this, "showPlayEventId", void 0),
            this.core = t,
            this.showPlayEventId = null,
            this.init()
        }, [{
            key: "init",
            value: function() {
                this.render(),
                this.attachEvents()
            }
        }, {
            key: "render",
            value: function() {
                this.element = document.createElement("div"),
                this.element.className = y;
                var e = "portrait" === E.A.get("orientation") ? g : "";
                this.element.innerHTML = "<div class='".concat("xp-play-inner", " ").concat(e, "'></div>"),
                this.innerButton = this.element.querySelector(".xp-play-inner")
            }
        }, {
            key: "attachEvents",
            value: function() {
                _.A.addClickWithYield(this.element, this.onPlayClick.bind(this)),
                m.A.on(v.A.PLAYER_ON_ENDED, this.onPlayerEnded, this),
                m.A.on(v.A.PLAYER_ON_PLAYING, this.togglePlayButton, this),
                m.A.on(v.A.PLAYER_ON_PAUSE, this.togglePlayButton, this),
                m.A.on(v.A.CONTROLS_RESET, this.setButtonToPlay, this),
                m.A.once(v.A.PLAYER_PLAY, this.setStarted, this),
                this.showPlayEventId = m.A.on(v.A.PLAYER_ON_CHANGE_ORIENTATION, this.toggleShowPlayControl.bind(this)),
                m.A.on(v.A.REMOTE_PLAYER_STATE_CHANGED, this.togglePlayButton, this)
            }
        }, {
            key: "setStarted",
            value: function() {
                m.A.off(v.A.PLAYER_ON_CHANGE_ORIENTATION, this.showPlayEventId),
                f.A.removeClass(this.innerButton, g)
            }
        }, {
            key: "toggleShowPlayControl",
            value: function() {
                if ("portrait" === E.A.get("orientation"))
                    return void f.A.addClass(this.innerButton, g);
                f.A.removeClass(this.innerButton, g)
            }
        }, {
            key: "onPlayClick",
            value: function() {
                E.A.get("playing") ? (m.A.emit(v.A.PLAYER_PAUSE),
                m.A.emit(v.A.PLAY_SMALL_BUTTON_CLICK, "pause")) : (m.A.emit(v.A.PLAYER_PLAY),
                m.A.emit(v.A.PLAY_SMALL_BUTTON_CLICK, "play")),
                m.A.emit(v.A.USER_ACTION, 5e3)
            }
        }, {
            key: "onPlayerEnded",
            value: function() {
                E.A.get("ads_playing") || this.setButtonToReplay()
            }
        }, {
            key: "togglePlayButton",
            value: function() {
                !this.core.capabilities.idevice && E.A.get("seeking") || (E.A.get("playing") ? this.setButtonToPause() : this.setButtonToPlay())
            }
        }, {
            key: "setButtonToPause",
            value: function() {
                this.element.className = "xp-play pause"
            }
        }, {
            key: "setButtonToPlay",
            value: function() {
                this.element.className = y
            }
        }, {
            key: "setButtonToReplay",
            value: function() {
                this.element.className = "xp-play replay"
            }
        }])
          , b = i(99785)
          , T = i(41363);
        function k() {
            try {
                var e = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {}))
            } catch (e) {}
            return (k = function() {
                return !!e
            }
            )()
        }
        function L(e, t, i, n) {
            var s = (0,
            a.A)((0,
            o.A)(1 & n ? e.prototype : e), t, i);
            return 2 & n && "function" == typeof s ? function(e) {
                return s.apply(i, e)
            }
            : s
        }
        var O = "xplayer-old-ads-design"
          , P = function(e) {
            function t() {
                (0,
                n.A)(this, t);
                for (var e, i, s, a = arguments.length, l = Array(a), h = 0; h < a; h++)
                    l[h] = arguments[h];
                return i = t,
                s = [].concat(l),
                i = (0,
                o.A)(i),
                e = (0,
                r.A)(this, k() ? Reflect.construct(i, s || [], (0,
                o.A)(this).constructor) : i.apply(this, s)),
                (0,
                c.A)(e, "playControlAds", void 0),
                (0,
                c.A)(e, "menuMobileAds", void 0),
                (0,
                c.A)(e, "isNewPrerollDesign", void 0),
                e
            }
            return (0,
            l.A)(t, e),
            (0,
            s.A)(t, [{
                key: "init",
                value: function() {
                    var e;
                    this.isNewPrerollDesign = !!(null == (e = this.pluginsOptions) || null == (e = e.ads) ? void 0 : e.isNewPrerollDesign),
                    L(t, "init", this, 3)([]),
                    this.isNewPrerollDesign || this.core.element.classList.add(O)
                }
            }, {
                key: "loadAds",
                value: function() {
                    return this.ads = new u.A(this.core,d.A,this.pluginsOptions),
                    this.isNewPrerollDesign || (this.startButtonAds = new A.A(this.core,this.pluginsOptions),
                    this.startButtonAds.element.classList.add(O)),
                    this
                }
            }, {
                key: "loadTopMenu",
                value: function() {
                    this.timingControlAds = new p.A(this.core),
                    this.playControlAds = new S(this.core),
                    this.isNewPrerollDesign ? (this.muteControlAds = new b.A(this.core),
                    this.menuMobileAds = new T.A(this.core,"xplayer-menu-mobile-ads",[this.playControlAds.element, this.muteControlAds.element]),
                    this.menuMobileTop = new T.A(this.core,"xplayer-menu-mobile-top",[this.sponsorInfo.element, this.menuMobileTopInfo.element, this.closeFullscreenButton.element])) : L(t, "loadTopMenu", this, 3)([])
                }
            }])
        }(h.A);
        window.XPlayer2 = P,
        (0,
        i(40034).qC)({
            xplayerOptions: {
                XPlayerClass: P,
                HTMLElementId: "video_box"
            },
            withSponsorInfo: !0
        })
    },
    40034: function(e, t, i) {
        "use strict";
        i.d(t, {
            KZ: function() {
                return B
            },
            kI: function() {
                return M
            },
            qC: function() {
                return F
            }
        });
        var n, s, r, o, a, l, c = i(26838), h = i(69277), u = i(70408), d = i(10809), A = i(59821), p = i(50623), m = i(54558), v = i(34920), E = i(42994), f = i(76758), _ = i(91980), y = i(14953), g = i(99851), S = i(63048), b = i(13201), T = i(71094);
        (n = s || (s = {})).Init = "ml_tweak_init",
        n.Sent = "ml_tweak_sent",
        n.NoVastUrl = "ml_tweak_no_vast",
        n.Received = "ml_tweak_received",
        n.Timeout = "ml_tweak_timeout",
        n.AfterTimeout = "ml_tweak_received_after_timeout";
        class k {
            setTweakStatsBaseData() {
                var e, t, i;
                if (!this.isEnabled)
                    return;
                if (this.storage = null != (i = (0,
                S.WW)("mlTweakStatsStorage")) ? i : null,
                !this.storage)
                    return void console.error("mlTweakStorage is not defined");
                let {videoEntityId: n, videoEntityType: s, site: r, userID: o, watchId: a, hasVastUrls: l, player: c, addFields: d} = this.storage;
                this.data = (0,
                u._)((0,
                h._)({
                    content: "",
                    key: "ml_tweak",
                    id: n,
                    video_type: (0,
                    T.au)(s),
                    site: r,
                    uid: o,
                    "str.watchId": a,
                    "str.cdn": null == (t = window) || null == (e = t.xplayer) ? void 0 : e.core.sourceController.getCDN(),
                    "str.has_ads": l,
                    "str.player": c,
                    "int.x_preroll": (0,
                    v.wn)(),
                    "int.x_preroll_shown": (0,
                    v.Jh)()
                }, d), {
                    experiments: null
                })
            }
            send(e) {
                this.isEnabled && this.storage && this.data && (this.data.content = e,
                (0,
                f.tN)(b.tG.Custom, this.data, !1))
            }
            constructor(e) {
                (0,
                g._)(this, "isEnabled", void 0),
                (0,
                g._)(this, "storage", void 0),
                (0,
                g._)(this, "data", void 0),
                this.isEnabled = e,
                this.storage = null,
                this.data = null,
                this.setTweakStatsBaseData(),
                this.send(s.Init)
            }
        }
        var L = i(73805)
          , O = i(20922)
          , P = i(10799)
          , C = i(34707)
          , R = i(53536)
          , w = Math.imul || function(e, t) {
            var i = 65535 & e
              , n = 65535 & t;
            return i * n + (((e >>> 16 & 65535) * n + i * (t >>> 16 & 65535) & 65535) << 16) | 0
        }
        ;
        function N(e) {
            if (!((t = 0 | e.length) >= 12 && (1 & t) == 0 && /^[0-9a-fA-F]+$/.test(e)))
                return null;
            var t, i = function(e) {
                if ("string" != typeof e)
                    return e;
                var t = 0 | e.length;
                if (!(t > 0 && (1 & t) == 0 && /^[0-9a-fA-F]+$/.test(e)))
                    return e;
                var i = function(e) {
                    if ("string" != typeof e)
                        throw Error("hex must be string");
                    var t = e.length;
                    if ((1 & t) != 0)
                        throw Error("bad hex length");
                    for (var i = Array(t >> 1), n = 0, s = 0; n < t; n += 2) {
                        var r = parseInt(e.substr(n, 2), 16);
                        if (r != r)
                            throw Error("bad hex");
                        i[s++] = r
                    }
                    return i
                }(e);
                if (i.length < 5)
                    return e;
                var n = 0 | i[0];
                if (1 !== n && 2 !== n && 3 !== n && 4 !== n && 5 !== n && 6 !== n && 7 !== n)
                    return e;
                for (var s = function(e, t) {
                    var i = 0 | t;
                    if (1 === e)
                        return function() {
                            return 255 & (i = w(i, 1664525) + 0x3c6ef35f | 0)
                        }
                        ;
                    if (2 === e)
                        return function() {
                            return i |= 0,
                            i ^= i << 13,
                            i ^= i >>> 17,
                            i ^= i << 5,
                            255 & (i |= 0)
                        }
                        ;
                    if (3 === e)
                        return function() {
                            var e = i = i + 0x9e3779b9 | 0;
                            return e ^= e >>> 16,
                            e = 0 | w(e, 0x85ebca77),
                            e ^= e >>> 13,
                            e = 0 | w(e, 0xc2b2ae3d),
                            255 & (e ^= e >>> 16)
                        }
                        ;
                    if (4 === e)
                        return function() {
                            var e = (i = i + 0x6d2b79f5 | 0) << 7 | i >>> 25;
                            return e = e + 0x9e3779b9 | 0,
                            e ^= e >>> 11,
                            255 & (e = 0 | w(e, 0x27d4eb2d))
                        }
                        ;
                    if (5 === e)
                        return function() {
                            return i |= 0,
                            i ^= i << 7,
                            i ^= i >>> 9,
                            i ^= i << 8,
                            255 & (i = i + 0xa5a5a5a5 | 0)
                        }
                        ;
                    if (6 === e)
                        return function() {
                            return 255 & ((i = w(i, 0x2c9277b5) + 0xac564b05 | 0) ^ i >>> 18) >>> (i >>> 27 & 31)
                        }
                        ;
                    if (7 === e)
                        return function() {
                            var e = (i = i + 0x9e3779b9 | 0) ^ i << 5;
                            return e = 0 | w(e, 0x7feb352d),
                            e ^= e >>> 15,
                            255 & (e = 0 | w(e, 0x846ca68b))
                        }
                        ;
                    throw Error("Unknown algoId: " + e)
                }(n, i[1] | i[2] << 8 | i[3] << 16 | i[4] << 24), r = Array(i.length - 5), o = 5, a = 0; o < i.length; o++,
                a++)
                    r[a] = (i[o] ^ s()) & 255;
                return function(e) {
                    for (var t = "", i = 0; i < e.length; i++) {
                        var n = e[i].toString(16);
                        n.length < 2 && (n = "0" + n),
                        t += "%" + n
                    }
                    try {
                        return decodeURIComponent(t)
                    } catch (t) {
                        for (var s = "", r = 0; r < e.length; r++)
                            s += String.fromCharCode(e[r]);
                        return s
                    }
                }(r)
            }(e);
            return "string" == typeof i && i.length > 0 && /^[\x20-\x7E]+$/.test(i) ? i : null
        }
        let D = e=>{
            if (!e || "object" != typeof e)
                return e;
            let t = Array.isArray(e) ? [] : {};
            return Object.keys(e).forEach(i=>{
                e[i] && "object" == typeof e[i] ? t[i] = D(e[i]) : "url" === i || "fallback" === i ? t[i] = function(e) {
                    if ("string" != typeof e || 0 === e.length)
                        return e;
                    var t = N(e);
                    if (null !== t)
                        return t;
                    var i = function(e) {
                        var t = 0 | e.length
                          , i = e.indexOf("://")
                          , n = -1 !== i ? e.indexOf("/", i + 3) : e.indexOf("/");
                        if (-1 === n)
                            return null;
                        var s = n + 1;
                        if (s >= t)
                            return null;
                        var r = e.indexOf("/", s)
                          , o = e.indexOf(",", s)
                          , a = -1;
                        return (-1 !== r && -1 !== o ? a = Math.min(r, o) : -1 !== r ? a = r : -1 !== o && (a = o),
                        -1 === a || a <= s) ? null : [s, a]
                    }(e);
                    if (i) {
                        var n = i[0]
                          , s = i[1]
                          , r = N(e.substring(n, s));
                        if (null !== r)
                            return e.substring(0, n) + r + e.substring(s)
                    }
                    return e
                }(e[i]) : t[i] = e[i]
            }
            ),
            t
        }
          , I = (e,t=null,i=[])=>{
            if (!e || "object" != typeof e || !t || "object" != typeof t)
                return e;
            let n = Array.isArray(e) ? [] : {};
            return Object.keys(e).forEach(s=>{
                let r = e[s]
                  , o = [...i, s];
                if (r && "object" == typeof r) {
                    n[s] = I(r, t, o);
                    return
                }
                if (("url" === s || "fallback" === s) && "string" == typeof r) {
                    let o = ((e,t,i)=>{
                        var n;
                        if ("url" !== t && "fallback" !== t)
                            return null;
                        let s = e[0]
                          , r = e[1];
                        if ("string" != typeof s || "string" != typeof r)
                            return null;
                        if ("hls" === s)
                            return "url" === t ? `hls.${r}` : `hls.${r}.fallback`;
                        if ("standard" !== s)
                            return null;
                        let o = "string" == typeof (null == i ? void 0 : i.quality) && i.quality ? i.quality : String(null != (n = e[2]) ? n : "");
                        return o ? `standard.${r}.${o}.${"url" === t ? "prime" : "fallback"}` : null
                    }
                    )(i, s, e)
                      , a = o ? t[o] : null;
                    n[s] = ((e,t)=>{
                        if (!e || "string" != typeof e || !t || "string" != typeof t)
                            return e;
                        let i = e.startsWith("//")
                          , n = i ? `https:${e}` : e;
                        try {
                            let s = new URL(n)
                              , r = s.hostname.split(".");
                            if (r.length < 2)
                                return e;
                            r[0] = t,
                            s.hostname = r.join(".");
                            let o = s.toString();
                            return i ? o.replace(/^https:/, "") : o
                        } catch (t) {
                            return e
                        }
                    }
                    )(r, a);
                    return
                }
                n[s] = r
            }
            ),
            n
        }
          , U = (r = (0,
        c._)(function*() {
            let {userAgentData: e} = window.navigator || {};
            if (!(null == e ? void 0 : e.getHighEntropyValues))
                return null;
            try {
                let {platform: t, platformVersion: i, model: n} = yield e.getHighEntropyValues(["platform", "platformVersion", "model"]);
                if ("Android" !== t || "string" != typeof i)
                    return null;
                let s = Number.parseInt(i.split(".")[0], 10);
                if (Number.isNaN(s))
                    return null;
                return {
                    majorVersion: s,
                    model: "string" == typeof n ? n : ""
                }
            } catch (e) {
                return null
            }
        }),
        function() {
            return r.apply(this, arguments)
        }
        )
          , x = (o = (0,
        c._)(function*(e, t) {
            var i, n, s, r, o, a;
            if (!e)
                return e;
            let l = null == t || null == (r = t.statistics) || null == (s = r.addFields) || null == (n = s.experiments) || null == (i = n["7013"]) ? void 0 : i.group;
            if (l && "b" === String(l).toLowerCase())
                return e;
            let c = yield U();
            return (null == c ? void 0 : c.majorVersion) === 16 && (e=>{
                if ("string" != typeof e)
                    return !1;
                let t = e.trim().replace(/^["']+|["']+$/g, "");
                return /(?:^|\b)(?:google\s+)?pixel[\s-]*10(?:\D|$)/i.test(t)
            }
            )(c.model) && e && "object" == typeof e && ((null == e || null == (o = e.hls) ? void 0 : o.av1) && delete e.hls.av1,
            (null == e || null == (a = e.standard) ? void 0 : a.av1) && delete e.standard.av1),
            e
        }),
        function(e, t) {
            return o.apply(this, arguments)
        }
        )
          , Y = e=>{
            var t, i, n, s, r;
            let o = (0,
            C.mg)(e);
            return (0,
            R.iV)(null == o || null == (t = o.statistics) ? void 0 : t.addFields) && (o.statistics.addFields = (0,
            h._)({}, o.statistics.addFields, (0,
            E.b)())),
            (null == (i = o.controlBar) ? void 0 : i.largeMode) && (o.controlBar.largeMode.enabled = `${document.querySelector("html").className}`.indexOf("video-page--large-mode") > -1),
            "object" == typeof (null == o || null == (n = o.banner) ? void 0 : n.bannerHtml) && (o.banner.bannerHtml = `<div data-role=${A.J}></div>`),
            (null == o || null == (s = o.hover) ? void 0 : s.link) && (o.hover.link.onClick = ()=>{
                (0,
                _.Bq)({
                    event: y.x5.Ga4Event,
                    name: y.eT.PaysiteClick,
                    category: y.Hl.Paysite,
                    action: y.Xs.Click,
                    label: y.xG.RedLink
                })
            }
            ),
            o.statistics && (o.statistics.send = (e,t)=>(0,
            f.tN)(e, t, !1)),
            o.translations = null == (r = window.appContext) ? void 0 : r.xhLocale,
            o
        }
          , M = (a = (0,
        c._)(function*(e, t=null, i={}) {
            var n, s, r, o, a, l;
            let {XPlayerClass: c, HTMLElementId: A} = e
              , {xplayerSettings: p} = e
              , E = null != (s = window.initials) ? s : window.embedInitials;
            if (!P.Ay.find(`#${A}`) || !E)
                return;
            if (p || (p = E.xplayerSettings2 || E.xplayerSettings),
            !t) {
                let {xplayerPluginSettings: e} = E;
                t = Y(e)
            }
            let {isAmp: f, acceptedCookies: _} = window.appContext
              , {prerollAllowed: y, experiment44: g, prerollConfig: S, frontStats: b} = E
              , {streamingStats: T=!0} = (0,
            h._)({}, {
                prerollAllowed: y,
                isAmp: f,
                acceptedCookies: _,
                experiment44: g,
                prerollConfig: S,
                frontStats: b
            }, null != i ? i : {})
              , k = (0,
            h._)({}, p);
            (null == k ? void 0 : k.sources) && (k.sources = yield x(k.sources, t),
            k.sources = D(k.sources),
            k.sources = I(k.sources, null != (r = E.hostMap) ? r : null)),
            (null == t || null == (n = t.ads) ? void 0 : n.trackCollectorExtra) && (t.ads.trackCollectorExtra["int.x_preroll"] = (0,
            v.wn)(),
            t.ads.trackCollectorExtra["int.x_preroll_shown"] = (0,
            v.Jh)()),
            window.xplayer = new c(A,k,t),
            document.dispatchEvent(new CustomEvent(O.Xm)),
            o = window.xplayer,
            a = d.A,
            l = !!b,
            o && l && o.core.once(a.SOURCE_CONTROLLER_READY, ()=>{
                var e, t, i;
                window.frontSpeed.TTP = new Date().getTime() - ((null == (i = window) || null == (t = i.performance) || null == (e = t.timing) ? void 0 : e.fetchStart) || 0)
            }
            ),
            (0,
            v.D8)(window.xplayer, {
                acceptedCookies: _,
                experiment44: g,
                prerollConfig: S,
                prerollAllowed: y,
                isAmp: f
            }),
            window.PlayStatistics && new window.PlayStatistics(window.xplayer.core.videoElement,{
                enabled: !0
            }),
            (()=>{
                let {adblockEmulated: e, ablParams: t} = window.appContext || {}
                  , i = (0,
                u._)((0,
                h._)({}, t), {
                    id: "adDiv"
                });
                t && (0,
                m.L)({
                    isAdblockEmulated: e,
                    attrs: i,
                    onDetect: ()=>{
                        var e;
                        null == (e = window.xplayer) || e.core.emit(d.A.ADBLOCK_STATUS_UPDATE, !0)
                    }
                })
            }
            )(),
            window.xplayer.core.on(window.xplayer.events.ADS_TRACK_METRICS, ()=>{
                fetch("/api/v1/player/metrics", {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json"
                    },
                    body: JSON.stringify({
                        eventType: "adPrerollShowed"
                    })
                })
            }
            ),
            T && (0,
            L.q)()
        }),
        function(e) {
            return a.apply(this, arguments)
        }
        )
          , B = ()=>{
            let e = document.querySelector("#player-sponsor-link");
            if (e) {
                let {events: t} = window.xplayer
                  , {core: i} = window.xplayer;
                i.emit(t.PLAYER_LINK_SPONSORED_SHOWN),
                e.addEventListener("click", ()=>{
                    i.emit(t.PLAYER_LINK_SPONSORED_CLICK)
                }
                )
            }
        }
          , F = (l = (0,
        c._)(function*({inSettings: e, xplayerOptions: t, pluginsSettings: i=null, addMetaToUrl: n=!0, withSponsorInfo: r=!1}) {
            var o;
            let {xplayerPluginSettings: a} = null != (o = window.initials) ? o : window.embedInitials;
            i || (i = Y(a));
            let l = i;
            if (null == i ? void 0 : i.ads) {
                let t = new k(i.ads.trackCollector)
                  , r = (e=>{
                    var t;
                    if (!Array.isArray(e.ads.vastUrls) || e.ads.vastUrls.some(e=>"xhl-live" === e.type) || e.ads.skipMlTweak)
                        return null;
                    let i = null == (t = e.ads.vastUrls[0]) ? void 0 : t.url;
                    return e.ads.isXhlPreroll && i ? i : null
                }
                )(i)
                  , o = null;
                if (r)
                    try {
                        o = yield new Promise((e,i)=>{
                            let n = !1;
                            t.send(s.Sent);
                            let o = setTimeout(()=>{
                                console.warn("ml tweak rejected"),
                                n = !0,
                                t.send(s.Timeout),
                                i()
                            }
                            , 1e3);
                            new Promise(e=>{
                                var t;
                                let {userID: i} = window.appContext
                                  , n = p.S.getStore(i ? "authpreroll" : "unauthpreroll", 1)
                                  , s = !1
                                  , o = n.subscribe((t = (0,
                                c._)(function*(t) {
                                    if (0 === t.length)
                                        return;
                                    if (s)
                                        return void o();
                                    let i = t[0]
                                      , n = r;
                                    (null == i ? void 0 : i.username) && (n = `${r}&modelsList=${encodeURIComponent(i.username)}&usePreroll=2`),
                                    e(n),
                                    s = !0
                                }),
                                function(e) {
                                    return t.apply(this, arguments)
                                }
                                ))
                            }
                            ).then(i=>{
                                clearTimeout(o),
                                n ? t.send(s.AfterTimeout) : t.send(s.Received),
                                e(i)
                            }
                            )
                        }
                        )
                    } catch (e) {
                        o = null
                    }
                else
                    t.send(s.NoVastUrl);
                l = ((e,t=null,i=!1,n=!1)=>(t && (n && (e.ads.trackCollectorExtra.isVr = !0),
                e.ads.vastUrls[0].url = t,
                e.ads.trackCollectorExtra["str.xhlOptimizedModel"] = "true",
                window.prerollXhlOptimizedModel = !0),
                i && (e.ads.vastUrls = (0,
                v.Xw)(e.ads.vastUrls)),
                e.ads.trackCollectorExtra.ab = !window._tsNoAdBlock,
                e))(i, o, n, null == e ? void 0 : e.isVr)
            }
            yield M(t, l, e),
            r && B()
        }),
        function(e) {
            return l.apply(this, arguments)
        }
        )
    },
    33846: function(e, t, i) {
        "use strict";
        function n(e, t) {
            (null == t || t > e.length) && (t = e.length);
            for (var i = 0, n = Array(t); i < t; i++)
                n[i] = e[i];
            return n
        }
        i.d(t, {
            A: function() {
                return n
            }
        })
    },
    84422: function(e, t, i) {
        "use strict";
        function n(e, t) {
            if (!(e instanceof t))
                throw TypeError("Cannot call a class as a function")
        }
        i.d(t, {
            A: function() {
                return n
            }
        })
    },
    15904: function(e, t, i) {
        "use strict";
        function n(e, t) {
            for (var i = 0; i < t.length; i++) {
                var n = t[i];
                n.enumerable = n.enumerable || !1,
                n.configurable = !0,
                "value"in n && (n.writable = !0),
                Object.defineProperty(e, n.key, n)
            }
        }
        function s(e, t, i) {
            return t && n(e.prototype, t),
            i && n(e, i),
            e
        }
        i.d(t, {
            A: function() {
                return s
            }
        })
    },
    86096: function(e, t, i) {
        "use strict";
        function n(e, t, i) {
            return t in e ? Object.defineProperty(e, t, {
                value: i,
                enumerable: !0,
                configurable: !0,
                writable: !0
            }) : e[t] = i,
            e
        }
        i.d(t, {
            A: function() {
                return n
            }
        })
    },
    86373: function(e, t, i) {
        "use strict";
        function n() {
            return (n = Object.assign || function(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var i = arguments[t];
                    for (var n in i)
                        Object.prototype.hasOwnProperty.call(i, n) && (e[n] = i[n])
                }
                return e
            }
            ).apply(this, arguments)
        }
        i.d(t, {
            A: function() {
                return n
            }
        })
    },
    42024: function(e, t, i) {
        "use strict";
        i.d(t, {
            A: function() {
                return s
            }
        });
        var n = i(23317);
        function s(e, t, i) {
            return (s = "undefined" != typeof Reflect && Reflect.get ? Reflect.get : function(e, t, i) {
                var s = function(e, t) {
                    for (; !Object.prototype.hasOwnProperty.call(e, t) && null !== (e = (0,
                    n.A)(e)); )
                        ;
                    return e
                }(e, t);
                if (s) {
                    var r = Object.getOwnPropertyDescriptor(s, t);
                    return r.get ? r.get.call(i) : r.value
                }
            }
            )(e, t, i || e)
        }
    },
    23317: function(e, t, i) {
        "use strict";
        function n(e) {
            return (n = Object.setPrototypeOf ? Object.getPrototypeOf : function(e) {
                return e.__proto__ || Object.getPrototypeOf(e)
            }
            )(e)
        }
        i.d(t, {
            A: function() {
                return n
            }
        })
    },
    40311: function(e, t, i) {
        "use strict";
        function n(e, t) {
            return (n = Object.setPrototypeOf || function(e, t) {
                return e.__proto__ = t,
                e
            }
            )(e, t)
        }
        function s(e, t) {
            if ("function" != typeof t && null !== t)
                throw TypeError("Super expression must either be null or a function");
            e.prototype = Object.create(t && t.prototype, {
                constructor: {
                    value: e,
                    writable: !0,
                    configurable: !0
                }
            }),
            t && n(e, t)
        }
        i.d(t, {
            A: function() {
                return s
            }
        })
    },
    71360: function(e, t, i) {
        "use strict";
        function n(e, t) {
            if (null == e)
                return {};
            var i, n, s = function(e, t) {
                if (null == e)
                    return {};
                var i, n, s = {}, r = Object.keys(e);
                for (n = 0; n < r.length; n++)
                    i = r[n],
                    t.indexOf(i) >= 0 || (s[i] = e[i]);
                return s
            }(e, t);
            if (Object.getOwnPropertySymbols) {
                var r = Object.getOwnPropertySymbols(e);
                for (n = 0; n < r.length; n++)
                    i = r[n],
                    !(t.indexOf(i) >= 0) && Object.prototype.propertyIsEnumerable.call(e, i) && (s[i] = e[i])
            }
            return s
        }
        i.d(t, {
            A: function() {
                return n
            }
        })
    },
    4251: function(e, t, i) {
        "use strict";
        i.d(t, {
            A: function() {
                return s
            }
        });
        var n = i(91643);
        function s(e, t) {
            return t && ("object" === (0,
            n.A)(t) || "function" == typeof t) ? t : function(e) {
                if (void 0 === e)
                    throw ReferenceError("this hasn't been initialised - super() hasn't been called");
                return e
            }(e)
        }
    },
    55925: function(e, t, i) {
        "use strict";
        i.d(t, {
            A: function() {
                return s
            }
        });
        var n = i(45575);
        function s(e, t) {
            return function(e) {
                if (Array.isArray(e))
                    return e
            }(e) || function(e, t) {
                var i, n, s = e && ("undefined" != typeof Symbol && e[Symbol.iterator] || e["@@iterator"]);
                if (null != s) {
                    var r = []
                      , o = !0
                      , a = !1;
                    try {
                        for (s = s.call(e); !(o = (i = s.next()).done) && (r.push(i.value),
                        !t || r.length !== t); o = !0)
                            ;
                    } catch (e) {
                        a = !0,
                        n = e
                    } finally {
                        try {
                            o || null == s.return || s.return()
                        } finally {
                            if (a)
                                throw n
                        }
                    }
                    return r
                }
            }(e, t) || (0,
            n.A)(e, t) || function() {
                throw TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
            }()
        }
    },
    52402: function(e, t, i) {
        "use strict";
        i.d(t, {
            A: function() {
                return r
            }
        });
        var n = i(33846)
          , s = i(45575);
        function r(e) {
            return function(e) {
                if (Array.isArray(e))
                    return (0,
                    n.A)(e)
            }(e) || function(e) {
                if ("undefined" != typeof Symbol && null != e[Symbol.iterator] || null != e["@@iterator"])
                    return Array.from(e)
            }(e) || (0,
            s.A)(e) || function() {
                throw TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
            }()
        }
    },
    91643: function(e, t, i) {
        "use strict";
        function n(e) {
            return (n = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
                return typeof e
            }
            : function(e) {
                return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
            }
            )(e)
        }
        i.d(t, {
            A: function() {
                return n
            }
        })
    },
    45575: function(e, t, i) {
        "use strict";
        i.d(t, {
            A: function() {
                return s
            }
        });
        var n = i(33846);
        function s(e, t) {
            if (e) {
                if ("string" == typeof e)
                    return (0,
                    n.A)(e, t);
                var i = Object.prototype.toString.call(e).slice(8, -1);
                if ("Object" === i && e.constructor && (i = e.constructor.name),
                "Map" === i || "Set" === i)
                    return Array.from(e);
                if ("Arguments" === i || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(i))
                    return (0,
                    n.A)(e, t)
            }
        }
    }
}, function(e) {
    e.O(0, ["5298", "5974", "7902"], function() {
        return e(e.s = 76804)
    }),
    e.O()
}
]);
