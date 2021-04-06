/* prebid.js v4.21.0
Updated : 2021-04-06 */
!function(u) {
    var s = window.atdpbjsChunk;
    window.atdpbjsChunk = function(e, t, n) {
        for (var r, i, o, a = 0, c = []; a < e.length; a++)
            i = e[a],
            d[i] && c.push(d[i][0]),
            d[i] = 0;
        for (r in t)
            Object.prototype.hasOwnProperty.call(t, r) && (u[r] = t[r]);
        for (s && s(e, t, n); c.length; )
            c.shift()();
        if (n)
            for (a = 0; a < n.length; a++)
                o = f(f.s = n[a]);
        return o
    }
    ;
    var n = {}
      , d = {
        371: 0
    };
    function f(e) {
        if (n[e])
            return n[e].exports;
        var t = n[e] = {
            i: e,
            l: !1,
            exports: {}
        };
        return u[e].call(t.exports, t, t.exports, f),
        t.l = !0,
        t.exports
    }
    f.m = u,
    f.c = n,
    f.d = function(e, t, n) {
        f.o(e, t) || Object.defineProperty(e, t, {
            configurable: !1,
            enumerable: !0,
            get: n
        })
    }
    ,
    f.n = function(e) {
        var t = e && e.__esModule ? function() {
            return e.default
        }
        : function() {
            return e
        }
        ;
        return f.d(t, "a", t),
        t
    }
    ,
    f.o = function(e, t) {
        return Object.prototype.hasOwnProperty.call(e, t)
    }
    ,
    f.p = "",
    f.oe = function(e) {
        throw console.error(e),
        e
    }
    ,
    f(f.s = 926)
}({
    0: function(e, t, n) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        }),
        n.d(t, "internal", function() {
            return k
        }),
        n.d(t, "bind", function() {
            return N
        }),
        t.getUniqueIdentifierStr = q,
        t.generateUUID = function e(t) {
            return t ? (t ^ M() >> t / 4).toString(16) : ([1e7] + -1e3 + -4e3 + -8e3 + -1e11).replace(/[018]/g, e)
        }
        ,
        t.getBidIdParameter = function(e, t) {
            if (t && t[e])
                return t[e];
            return ""
        }
        ,
        t.tryAppendQueryString = function(e, t, n) {
            if (n)
                return e + t + "=" + encodeURIComponent(n) + "&";
            return e
        }
        ,
        t.parseQueryStringParameters = function(e) {
            var t = "";
            for (var n in e)
                e.hasOwnProperty(n) && (t += n + "=" + encodeURIComponent(e[n]) + "&");
            return t = t.replace(/&$/, "")
        }
        ,
        t.transformAdServerTargetingObj = function(t) {
            return t && 0 < Object.getOwnPropertyNames(t).length ? pe(t).map(function(e) {
                return "".concat(e, "=").concat(encodeURIComponent(t[e]))
            }).join("&") : ""
        }
        ,
        t.getAdUnitSizes = function(e) {
            if (!e)
                return;
            var t = [];
            {
                var n;
                e.mediaTypes && e.mediaTypes.banner && Array.isArray(e.mediaTypes.banner.sizes) ? (n = e.mediaTypes.banner.sizes,
                Array.isArray(n[0]) ? t = n : t.push(n)) : Array.isArray(e.sizes) && (Array.isArray(e.sizes[0]) ? t = e.sizes : t.push(e.sizes))
            }
            return t
        }
        ,
        t.parseSizesInput = function(e) {
            var t = [];
            if ("string" == typeof e) {
                var n = e.split(",")
                  , r = /^(\d)+x(\d)+$/i;
                if (n)
                    for (var i in n)
                        oe(n, i) && n[i].match(r) && t.push(n[i])
            } else if ("object" === h(e)) {
                var o = e.length;
                if (0 < o)
                    if (2 === o && "number" == typeof e[0] && "number" == typeof e[1])
                        t.push(G(e));
                    else
                        for (var a = 0; a < o; a++)
                            t.push(G(e[a]))
            }
            return t
        }
        ,
        t.parseGPTSingleSizeArray = G,
        t.parseGPTSingleSizeArrayToRtbSize = function(e) {
            if (W(e))
                return {
                    w: e[0],
                    h: e[1]
                }
        }
        ,
        t.getWindowTop = L,
        t.getWindowSelf = F,
        t.getWindowLocation = z,
        t.logMessage = V,
        t.logInfo = H,
        t.logWarn = K,
        t.logError = J,
        t.hasConsoleLogger = function() {
            return _
        }
        ,
        t.debugTurnedOn = Q,
        t.createInvisibleIframe = function() {
            var e = document.createElement("iframe");
            return e.id = q(),
            e.height = 0,
            e.width = 0,
            e.border = "0px",
            e.hspace = "0",
            e.vspace = "0",
            e.marginWidth = "0",
            e.marginHeight = "0",
            e.style.border = "0",
            e.scrolling = "no",
            e.frameBorder = "0",
            e.src = "about:blank",
            e.style.display = "none",
            e
        }
        ,
        t.getParameterByName = function(e) {
            return Ie(z().search)[e] || ""
        }
        ,
        t.isA = $,
        t.isFn = X,
        t.isStr = Z,
        t.isArray = ee,
        t.isNumber = te,
        t.isPlainObject = ne,
        t.isBoolean = function(e) {
            return $(e, C)
        }
        ,
        t.isEmpty = re,
        t.isEmptyStr = function(e) {
            return Z(e) && (!e || 0 === e.length)
        }
        ,
        t._each = ie,
        t.contains = function(e, t) {
            if (re(e))
                return !1;
            if (X(e.indexOf))
                return -1 !== e.indexOf(t);
            var n = e.length;
            for (; n--; )
                if (e[n] === t)
                    return !0;
            return !1
        }
        ,
        t._map = function(n, r) {
            if (re(n))
                return [];
            if (X(n.map))
                return n.map(r);
            var i = [];
            return ie(n, function(e, t) {
                i.push(r(e, t, n))
            }),
            i
        }
        ,
        t.hasOwn = oe,
        t.insertElement = ae,
        t.triggerPixel = ce,
        t.callBurl = function(e) {
            var t = e.source
              , n = e.burl;
            t === S.S2S.SRC && n && k.triggerPixel(n)
        }
        ,
        t.insertHtmlIntoIframe = function(e) {
            if (!e)
                return;
            var t = document.createElement("iframe");
            t.id = q(),
            t.width = 0,
            t.height = 0,
            t.hspace = "0",
            t.vspace = "0",
            t.marginWidth = "0",
            t.marginHeight = "0",
            t.style.display = "none",
            t.style.height = "0px",
            t.style.width = "0px",
            t.scrolling = "no",
            t.frameBorder = "0",
            t.allowtransparency = "true",
            k.insertElement(t, document, "body"),
            t.contentWindow.document.open(),
            t.contentWindow.document.write(e),
            t.contentWindow.document.close()
        }
        ,
        t.insertUserSyncIframe = ue,
        t.createTrackPixelHtml = function(e) {
            if (!e)
                return "";
            var t = encodeURI(e)
              , n = '<div style="position:absolute;left:0px;top:0px;visibility:hidden;">';
            return n += '<img src="' + t + '"></div>'
        }
        ,
        t.createTrackPixelIframeHtml = se,
        t.getValueString = de,
        t.uniques = fe,
        t.flatten = le,
        t.getBidRequest = function(n, e) {
            return n ? (e.some(function(e) {
                var t = c()(e.bids, function(t) {
                    return ["bidId", "adId", "bid_id"].some(function(e) {
                        return t[e] === n
                    })
                });
                return t && (r = t),
                t
            }),
            r) : void 0;
            var r
        }
        ,
        t.getKeys = pe,
        t.getValue = ge,
        t.getKeyByValue = function(e, t) {
            for (var n in e)
                if (e.hasOwnProperty(n) && e[n] === t)
                    return n
        }
        ,
        t.getBidderCodes = function() {
            return (0 < arguments.length && void 0 !== arguments[0] ? arguments[0] : atdpbjs.adUnits).map(function(e) {
                return e.bids.map(function(e) {
                    return e.bidder
                }).reduce(le, [])
            }).reduce(le).filter(fe)
        }
        ,
        t.isGptPubadsDefined = be,
        n.d(t, "getHighestCpm", function() {
            return ve
        }),
        n.d(t, "getOldestHighestCpmBid", function() {
            return ye
        }),
        n.d(t, "getLatestHighestCpmBid", function() {
            return he
        }),
        t.shuffle = function(e) {
            var t = e.length;
            for (; 0 < t; ) {
                var n = Math.floor(Math.random() * t)
                  , r = e[--t];
                e[t] = e[n],
                e[n] = r
            }
            return e
        }
        ,
        t.adUnitsFilter = function(e, t) {
            return s()(e, t && t.adUnitCode)
        }
        ,
        t.deepClone = Se,
        t.inIframe = function() {
            try {
                return k.getWindowSelf() !== k.getWindowTop()
            } catch (e) {
                return !0
            }
        }
        ,
        t.isSafariBrowser = function() {
            return /^((?!chrome|android|crios|fxios).)*safari/i.test(navigator.userAgent)
        }
        ,
        t.replaceAuctionPrice = function(e, t) {
            if (!e)
                return;
            return e.replace(/\$\{AUCTION_PRICE\}/g, t)
        }
        ,
        t.replaceClickThrough = function(e, t) {
            if (!e || !t || "string" != typeof t)
                return;
            return e.replace(/\${CLICKTHROUGH}/g, t)
        }
        ,
        t.timestamp = function() {
            return (new Date).getTime()
        }
        ,
        t.getPerformanceNow = function() {
            return window.performance && window.performance.now && window.performance.now() || 0
        }
        ,
        t.hasDeviceAccess = function() {
            return !1 !== r.b.getConfig("deviceAccess")
        }
        ,
        t.checkCookieSupport = Ae,
        t.delayExecution = function(e, t) {
            if (t < 1)
                throw new Error("numRequiredCalls must be a positive number. Got ".concat(t));
            var n = 0;
            return function() {
                ++n === t && e.apply(this, arguments)
            }
        }
        ,
        t.groupBy = function(e, n) {
            return e.reduce(function(e, t) {
                return (e[t[n]] = e[t[n]] || []).push(t),
                e
            }, {})
        }
        ,
        t.getDefinedParams = function(n, e) {
            return e.filter(function(e) {
                return n[e]
            }).reduce(function(e, t) {
                return y(e, v({}, t, n[t]))
            }, {})
        }
        ,
        t.isValidMediaTypes = function(e) {
            var t = ["banner", "native", "video"];
            if (!Object.keys(e).every(function(e) {
                return s()(t, e)
            }))
                return !1;
            if (e.video && e.video.context)
                return s()(["instream", "outstream", "adpod"], e.video.context);
            return !0
        }
        ,
        t.getBidderRequest = function(e, t, n) {
            return c()(e, function(e) {
                return 0 < e.bids.filter(function(e) {
                    return e.bidder === t && e.adUnitCode === n
                }).length
            }) || {
                start: null,
                auctionId: null
            }
        }
        ,
        t.getUserConfiguredParams = function(e, t, n) {
            return e.filter(function(e) {
                return e.code === t
            }).map(function(e) {
                return e.bids
            }).reduce(le, []).filter(function(e) {
                return e.bidder === n
            }).map(function(e) {
                return e.params || {}
            })
        }
        ,
        t.getOrigin = function() {
            return window.location.origin ? window.location.origin : window.location.protocol + "//" + window.location.hostname + (window.location.port ? ":" + window.location.port : "")
        }
        ,
        t.getDNT = function() {
            return "1" === navigator.doNotTrack || "1" === window.doNotTrack || "1" === navigator.msDoNotTrack || "yes" === navigator.doNotTrack
        }
        ,
        t.isAdUnitCodeMatchingSlot = function(t) {
            return function(e) {
                return Ee(t, e)
            }
        }
        ,
        t.isSlotMatchingAdUnitCode = Oe,
        t.getGptSlotInfoForAdUnitCode = function(e) {
            var t;
            be() && (t = c()(window.googletag.pubads().getSlots(), Oe(e)));
            if (t)
                return {
                    gptSlot: t.getAdUnitPath(),
                    divId: t.getSlotElementId()
                };
            return {}
        }
        ,
        t.unsupportedBidderMessage = function(e, t) {
            var n = Object.keys(e.mediaTypes || {
                banner: "banner"
            }).join(", ");
            return "\n    ".concat(e.code, " is a ").concat(n, " ad unit\n    containing bidders that don't support ").concat(n, ": ").concat(t, ".\n    This bidder won't fetch demand.\n  ")
        }
        ,
        t.isInteger = Te,
        t.convertCamelToUnderscore = function(e) {
            return e.replace(/(?:^|\.?)([A-Z])/g, function(e, t) {
                return "_" + t.toLowerCase()
            }).replace(/^_/, "")
        }
        ,
        t.cleanObj = function(n) {
            return Object.keys(n).reduce(function(e, t) {
                return void 0 !== n[t] && (e[t] = n[t]),
                e
            }, {})
        }
        ,
        t.pick = function(a, c) {
            return "object" === h(a) ? c.reduce(function(e, t, n) {
                if ("function" == typeof t)
                    return e;
                var r = t
                  , i = t.match(/^(.+?)\sas\s(.+?)$/i);
                i && (t = i[1],
                r = i[2]);
                var o = a[t];
                return "function" == typeof c[n + 1] && (o = c[n + 1](o, e)),
                void 0 !== o && (e[r] = o),
                e
            }, {}) : {}
        }
        ,
        t.transformBidderParamKeywords = function(e) {
            var r = 1 < arguments.length && void 0 !== arguments[1] ? arguments[1] : "keywords"
              , i = [];
            return ie(e, function(e, t) {
                if (ee(e)) {
                    var n = [];
                    ie(e, function(e) {
                        !(e = de(r + "." + t, e)) && "" !== e || n.push(e)
                    }),
                    e = n
                } else {
                    if (!Z(e = de(r + "." + t, e)))
                        return;
                    e = [e]
                }
                i.push({
                    key: t,
                    value: e
                })
            }),
            i
        }
        ,
        t.convertTypes = function(r, i) {
            return Object.keys(r).forEach(function(e) {
                var t, n;
                i[e] && (X(r[e]) ? i[e] = r[e](i[e]) : i[e] = (t = r[e],
                n = i[e],
                "string" === t ? n && n.toString() : "number" === t ? Number(n) : n),
                isNaN(i[e]) && delete i.key)
            }),
            i
        }
        ,
        t.isArrayOfNums = function(e, t) {
            return ee(e) && (!t || e.length === t) && e.every(Te)
        }
        ,
        t.fill = function(e, t) {
            for (var n = [], r = 0; r < t; r++) {
                var i = ne(e) ? Se(e) : e;
                n.push(i)
            }
            return n
        }
        ,
        t.chunk = function(e, t) {
            for (var n = [], r = 0; r < Math.ceil(e.length / t); r++) {
                var i = r * t
                  , o = i + t;
                n.push(e.slice(i, o))
            }
            return n
        }
        ,
        t.getMinValueFromArray = function(e) {
            return Math.min.apply(Math, p(e))
        }
        ,
        t.getMaxValueFromArray = function(e) {
            return Math.max.apply(Math, p(e))
        }
        ,
        t.compareOn = function(n) {
            return function(e, t) {
                return e[n] < t[n] ? 1 : e[n] > t[n] ? -1 : 0
            }
        }
        ,
        t.parseQS = Ie,
        t.formatQS = Ce,
        t.parseUrl = function(e, t) {
            var n = document.createElement("a");
            t && "noDecodeWholeURL"in t && t.noDecodeWholeURL ? n.href = e : n.href = decodeURIComponent(e);
            var r = t && "decodeSearchAsString"in t && t.decodeSearchAsString;
            return {
                href: n.href,
                protocol: (n.protocol || "").replace(/:$/, ""),
                hostname: n.hostname,
                port: +n.port,
                pathname: n.pathname.replace(/^(?!\/)/, "/"),
                search: r ? n.search : k.parseQS(n.search || ""),
                hash: (n.hash || "").replace(/^#/, ""),
                host: n.host || window.location.host
            }
        }
        ,
        t.buildUrl = function(e) {
            return (e.protocol || "http") + "://" + (e.host || e.hostname + (e.port ? ":".concat(e.port) : "")) + (e.pathname || "") + (e.search ? "?".concat(k.formatQS(e.search || "")) : "") + (e.hash ? "#".concat(e.hash) : "")
        }
        ,
        t.deepEqual = je,
        t.mergeDeep = we,
        t.cyrb53Hash = function(e) {
            for (var t, n = 1 < arguments.length && void 0 !== arguments[1] ? arguments[1] : 0, r = function(e, t) {
                if (X(Math.imul))
                    return Math.imul(e, t);
                var n = (4194303 & e) * (t |= 0);
                return 4290772992 & e && (n += (4290772992 & e) * t | 0),
                0 | n
            }, i = 3735928559 ^ n, o = 1103547991 ^ n, a = 0; a < e.length; a++)
                t = e.charCodeAt(a),
                i = r(i ^ t, 2654435761),
                o = r(o ^ t, 1597334677);
            return i = r(i ^ i >>> 16, 2246822507) ^ r(o ^ o >>> 13, 3266489909),
            (4294967296 * (2097151 & (o = r(o ^ o >>> 16, 2246822507) ^ r(i ^ i >>> 13, 3266489909))) + (i >>> 0)).toString()
        }
        ;
        var r = n(3)
          , i = n(159)
          , o = n.n(i)
          , a = n(10)
          , c = n.n(a)
          , u = n(12)
          , s = n.n(u)
          , d = n(160);
        n.d(t, "deepAccess", function() {
            return d.a
        });
        var f = n(161);
        function l(e, t) {
            return function(e) {
                if (Array.isArray(e))
                    return e
            }(e) || function(e, t) {
                if ("undefined" == typeof Symbol || !(Symbol.iterator in Object(e)))
                    return;
                var n = []
                  , r = !0
                  , i = !1
                  , o = void 0;
                try {
                    for (var a, c = e[Symbol.iterator](); !(r = (a = c.next()).done) && (n.push(a.value),
                    !t || n.length !== t); r = !0)
                        ;
                } catch (e) {
                    i = !0,
                    o = e
                } finally {
                    try {
                        r || null == c.return || c.return()
                    } finally {
                        if (i)
                            throw o
                    }
                }
                return n
            }(e, t) || g(e, t) || function() {
                throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
            }()
        }
        function p(e) {
            return function(e) {
                if (Array.isArray(e))
                    return b(e)
            }(e) || function(e) {
                if ("undefined" != typeof Symbol && Symbol.iterator in Object(e))
                    return Array.from(e)
            }(e) || g(e) || function() {
                throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
            }()
        }
        function g(e, t) {
            if (e) {
                if ("string" == typeof e)
                    return b(e, t);
                var n = Object.prototype.toString.call(e).slice(8, -1);
                return "Object" === n && e.constructor && (n = e.constructor.name),
                "Map" === n || "Set" === n ? Array.from(e) : "Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n) ? b(e, t) : void 0
            }
        }
        function b(e, t) {
            (null == t || t > e.length) && (t = e.length);
            for (var n = 0, r = new Array(t); n < t; n++)
                r[n] = e[n];
            return r
        }
        function v(e, t, n) {
            return t in e ? Object.defineProperty(e, t, {
                value: n,
                enumerable: !0,
                configurable: !0,
                writable: !0
            }) : e[t] = n,
            e
        }
        function y() {
            return (y = Object.assign || function(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var n = arguments[t];
                    for (var r in n)
                        Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r])
                }
                return e
            }
            ).apply(this, arguments)
        }
        function h(e) {
            return (h = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
                return typeof e
            }
            : function(e) {
                return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
            }
            )(e)
        }
        n.d(t, "deepSetValue", function() {
            return f.a
        });
        var m, S = n(5), A = "Array", E = "String", O = "Function", T = "Number", I = "Object", C = "Boolean", j = Object.prototype.toString, w = Boolean(window.console), _ = Boolean(w && window.console.log), B = Boolean(w && window.console.info), U = Boolean(w && window.console.warn), x = Boolean(w && window.console.error), R = n(9), k = {
            checkCookieSupport: Ae,
            createTrackPixelIframeHtml: se,
            getWindowSelf: F,
            getWindowTop: L,
            getWindowLocation: z,
            insertUserSyncIframe: ue,
            insertElement: ae,
            isFn: X,
            triggerPixel: ce,
            logError: J,
            logWarn: K,
            logMessage: V,
            logInfo: H,
            parseQS: Ie,
            formatQS: Ce,
            deepEqual: je
        }, D = {}, N = function(e, t) {
            return t
        }
        .bind(null, 1, D)() === D ? Function.prototype.bind : function(e) {
            var t = this
              , n = Array.prototype.slice.call(arguments, 1);
            return function() {
                return t.apply(e, n.concat(Array.prototype.slice.call(arguments)))
            }
        }
        , P = (m = 0,
        function() {
            return ++m
        }
        );
        function q() {
            return P() + Math.random().toString(16).substr(2)
        }
        function M() {
            return window && window.crypto && window.crypto.getRandomValues ? crypto.getRandomValues(new Uint8Array(1))[0] % 16 : 16 * Math.random()
        }
        function G(e) {
            if (W(e))
                return e[0] + "x" + e[1]
        }
        function W(e) {
            return ee(e) && 2 === e.length && !isNaN(e[0]) && !isNaN(e[1])
        }
        function L() {
            return window.top
        }
        function F() {
            return window.self
        }
        function z() {
            return window.location
        }
        function V() {
            Q() && _ && console.log.apply(console, Y(arguments, "MESSAGE:"))
        }
        function H() {
            Q() && B && console.info.apply(console, Y(arguments, "INFO:"))
        }
        function K() {
            Q() && U && console.warn.apply(console, Y(arguments, "WARNING:"))
        }
        function J() {
            Q() && x && console.error.apply(console, Y(arguments, "ERROR:")),
            R.emit(S.EVENTS.AUCTION_DEBUG, {
                type: "ERROR",
                arguments: arguments
            })
        }
        function Y(e, t) {
            return e = [].slice.call(e),
            t && e.unshift(t),
            e.unshift("display: inline-block; color: #fff; background: #3b88c3; padding: 1px 4px; border-radius: 3px;"),
            e.unshift("%cPrebid"),
            e
        }
        function Q() {
            return !!r.b.getConfig("debug")
        }
        function $(e, t) {
            return j.call(e) === "[object " + t + "]"
        }
        function X(e) {
            return $(e, O)
        }
        function Z(e) {
            return $(e, E)
        }
        function ee(e) {
            return $(e, A)
        }
        function te(e) {
            return $(e, T)
        }
        function ne(e) {
            return $(e, I)
        }
        function re(e) {
            if (!e)
                return !0;
            if (ee(e) || Z(e))
                return !(0 < e.length);
            for (var t in e)
                if (hasOwnProperty.call(e, t))
                    return !1;
            return !0
        }
        function ie(e, t) {
            if (!re(e)) {
                if (X(e.forEach))
                    return e.forEach(t, this);
                var n = 0
                  , r = e.length;
                if (0 < r)
                    for (; n < r; n++)
                        t(e[n], n, e);
                else
                    for (n in e)
                        hasOwnProperty.call(e, n) && t.call(this, e[n], n)
            }
        }
        function oe(e, t) {
            return e.hasOwnProperty ? e.hasOwnProperty(t) : void 0 !== e[t] && e.constructor.prototype[t] !== e[t]
        }
        function ae(e, t, n, r) {
            var i;
            t = t || document,
            i = n ? t.getElementsByTagName(n) : t.getElementsByTagName("head");
            try {
                if ((i = i.length ? i : t.getElementsByTagName("body")).length) {
                    i = i[0];
                    var o = r ? null : i.firstChild;
                    return i.insertBefore(e, o)
                }
            } catch (e) {}
        }
        function ce(e, t) {
            var n = new Image;
            t && k.isFn(t) && (n.addEventListener("load", t),
            n.addEventListener("error", t)),
            n.src = e
        }
        function ue(e, t) {
            var n = k.createTrackPixelIframeHtml(e, !1, "allow-scripts allow-same-origin")
              , r = document.createElement("div");
            r.innerHTML = n;
            var i = r.firstChild;
            t && k.isFn(t) && (i.addEventListener("load", t),
            i.addEventListener("error", t)),
            k.insertElement(i, document, "html", !0)
        }
        function se(e) {
            var t = 2 < arguments.length && void 0 !== arguments[2] ? arguments[2] : "";
            return e ? ((!(1 < arguments.length && void 0 !== arguments[1]) || arguments[1]) && (e = encodeURI(e)),
            t = t && 'sandbox="'.concat(t, '"'),
            "<iframe ".concat(t, ' id="').concat(q(), '"\n      frameborder="0"\n      allowtransparency="true"\n      marginheight="0" marginwidth="0"\n      width="0" hspace="0" vspace="0" height="0"\n      style="height:0px;width:0px;display:none;"\n      scrolling="no"\n      src="').concat(e, '">\n    </iframe>')) : ""
        }
        function de(e, t, n) {
            return null == t ? n : Z(t) ? t : te(t) ? t.toString() : void k.logWarn("Unsuported type for param: " + e + " required type: String")
        }
        function fe(e, t, n) {
            return n.indexOf(e) === t
        }
        function le(e, t) {
            return e.concat(t)
        }
        function pe(e) {
            return Object.keys(e)
        }
        function ge(e, t) {
            return e[t]
        }
        function be() {
            if (window.googletag && X(window.googletag.pubads) && X(window.googletag.pubads().getSlots))
                return !0
        }
        var ve = me("timeToRespond", function(e, t) {
            return t < e
        })
          , ye = me("responseTimestamp", function(e, t) {
            return t < e
        })
          , he = me("responseTimestamp", function(e, t) {
            return e < t
        });
        function me(n, r) {
            return function(e, t) {
                return e.cpm === t.cpm ? r(e[n], t[n]) ? t : e : e.cpm < t.cpm ? t : e
            }
        }
        function Se(e) {
            return o()(e)
        }
        function Ae() {
            if (window.navigator.cookieEnabled || document.cookie.length)
                return !0
        }
        var Ee = function(e, t) {
            return e.getAdUnitPath() === t || e.getSlotElementId() === t
        };
        function Oe(t) {
            return function(e) {
                return Ee(e, t)
            }
        }
        function Te(e) {
            return Number.isInteger ? Number.isInteger(e) : "number" == typeof e && isFinite(e) && Math.floor(e) === e
        }
        function Ie(e) {
            return e ? e.replace(/^\?/, "").split("&").reduce(function(e, t) {
                var n = l(t.split("="), 2)
                  , r = n[0]
                  , i = n[1];
                return /\[\]$/.test(r) ? (e[r = r.replace("[]", "")] = e[r] || [],
                e[r].push(i)) : e[r] = i || "",
                e
            }, {}) : {}
        }
        function Ce(e) {
            return Object.keys(e).map(function(t) {
                return Array.isArray(e[t]) ? e[t].map(function(e) {
                    return "".concat(t, "[]=").concat(e)
                }).join("&") : "".concat(t, "=").concat(e[t])
            }).join("&")
        }
        function je(e, t) {
            if (e === t)
                return !0;
            if ("object" !== h(e) || null === e || "object" !== h(t) || null === t)
                return !1;
            if (Object.keys(e).length !== Object.keys(t).length)
                return !1;
            for (var n in e) {
                if (!t.hasOwnProperty(n))
                    return !1;
                if (!je(e[n], t[n]))
                    return !1
            }
            return !0
        }
        function we(e) {
            for (var t = arguments.length, n = new Array(1 < t ? t - 1 : 0), r = 1; r < t; r++)
                n[r - 1] = arguments[r];
            if (!n.length)
                return e;
            var i = n.shift();
            if (ne(e) && ne(i))
                for (var o in i)
                    ne(i[o]) ? (e[o] || y(e, v({}, o, {})),
                    we(e[o], i[o])) : ee(i[o]) && e[o] ? ee(e[o]) && (e[o] = e[o].concat(i[o])) : y(e, v({}, o, i[o]));
            return we.apply(void 0, [e].concat(n))
        }
    },
    1: function(e, t, n) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        }),
        n.d(t, "storage", function() {
            return I
        }),
        t.registerBidder = function(r) {
            var n = Array.isArray(r.supportedMediaTypes) ? {
                supportedMediaTypes: r.supportedMediaTypes
            } : void 0;
            function i(e) {
                var t = w(e);
                c.default.registerBidAdapter(t, e.code, n)
            }
            i(r),
            Array.isArray(r.aliases) && r.aliases.forEach(function(e) {
                var t, n = e;
                Object(m.isPlainObject)(e) && (n = e.code,
                t = e.gvlid),
                c.default.aliasRegistry[n] = r.code,
                i(T({}, r, {
                    code: n,
                    gvlid: t
                }))
            })
        }
        ,
        t.newBidder = w,
        n.d(t, "registerSyncInner", function() {
            return _
        }),
        t.preloadBidderMappingFile = B,
        t.getIabSubCategory = function(t, e) {
            var n = c.default.getBidAdapter(t);
            if (n.getSpec().getMappingFileInfo) {
                var r = n.getSpec().getMappingFileInfo()
                  , i = r.localStorageKey ? r.localStorageKey : n.getBidderCode()
                  , o = I.getDataFromLocalStorage(i);
                if (o) {
                    try {
                        o = JSON.parse(o)
                    } catch (e) {
                        Object(m.logError)("Failed to parse ".concat(t, " mapping data stored in local storage"))
                    }
                    return o.mapping[e] ? o.mapping[e] : null
                }
            }
        }
        ,
        t.isValid = U;
        var r = n(91)
          , c = n(8)
          , u = n(3)
          , v = n(34)
          , s = n(43)
          , o = n(37)
          , a = n(25)
          , i = n(5)
          , y = n.n(i)
          , d = n(9)
          , h = n.n(d)
          , f = n(12)
          , l = n.n(f)
          , p = n(4)
          , m = n(0)
          , g = n(2)
          , b = n(13)
          , S = n(7);
        function A(e, t) {
            return function(e) {
                if (Array.isArray(e))
                    return e
            }(e) || function(e, t) {
                if ("undefined" == typeof Symbol || !(Symbol.iterator in Object(e)))
                    return;
                var n = []
                  , r = !0
                  , i = !1
                  , o = void 0;
                try {
                    for (var a, c = e[Symbol.iterator](); !(r = (a = c.next()).done) && (n.push(a.value),
                    !t || n.length !== t); r = !0)
                        ;
                } catch (e) {
                    i = !0,
                    o = e
                } finally {
                    try {
                        r || null == c.return || c.return()
                    } finally {
                        if (i)
                            throw o
                    }
                }
                return n
            }(e, t) || function(e, t) {
                if (!e)
                    return;
                if ("string" == typeof e)
                    return E(e, t);
                var n = Object.prototype.toString.call(e).slice(8, -1);
                "Object" === n && e.constructor && (n = e.constructor.name);
                if ("Map" === n || "Set" === n)
                    return Array.from(e);
                if ("Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))
                    return E(e, t)
            }(e, t) || function() {
                throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
            }()
        }
        function E(e, t) {
            (null == t || t > e.length) && (t = e.length);
            for (var n = 0, r = new Array(t); n < t; n++)
                r[n] = e[n];
            return r
        }
        function O(e) {
            return (O = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
                return typeof e
            }
            : function(e) {
                return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
            }
            )(e)
        }
        function T() {
            return (T = Object.assign || function(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var n = arguments[t];
                    for (var r in n)
                        Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r])
                }
                return e
            }
            ).apply(this, arguments)
        }
        var I = Object(S.a)("bidderFactory")
          , C = ["requestId", "cpm", "ttl", "creativeId", "netRevenue", "currency"]
          , j = 1;
        function w(p) {
            return T(new r.a(p.code), {
                getSpec: function() {
                    return Object.freeze(p)
                },
                registerSyncs: g,
                callBids: function(o, a, e, n, c, r) {
                    var u, s, t, d, i, f;
                    function l() {
                        e(),
                        h.a.emit(y.a.EVENTS.BIDDER_DONE, o),
                        g(s, o.gdprConsent, o.uspConsent)
                    }
                    Array.isArray(o.bids) && (u = {},
                    s = [],
                    0 !== (t = o.bids.filter(b)).length ? (d = {},
                    t.forEach(function(e) {
                        (d[e.bidId] = e).adUnitCode || (e.adUnitCode = e.placementCode)
                    }),
                    (i = p.buildRequests(t, o)) && 0 !== i.length ? (Array.isArray(i) || (i = [i]),
                    f = Object(m.delayExecution)(r(l), i.length),
                    i.forEach(function(i) {
                        switch (i.method) {
                        case "GET":
                            n("".concat(i.url).concat(function(e) {
                                if (e)
                                    return "?".concat("object" === O(e) ? Object(m.parseQueryStringParameters)(e) : e);
                                return ""
                            }(i.data)), {
                                success: r(e),
                                error: t
                            }, void 0, T({
                                method: "GET",
                                withCredentials: !0
                            }, i.options));
                            break;
                        case "POST":
                            n(i.url, {
                                success: r(e),
                                error: t
                            }, "string" == typeof i.data ? i.data : JSON.stringify(i.data), T({
                                method: "POST",
                                contentType: "text/plain",
                                withCredentials: !0
                            }, i.options));
                            break;
                        default:
                            Object(m.logWarn)("Skipping invalid request from ".concat(p.code, ". Request type ").concat(i.type, " must be GET or POST")),
                            f()
                        }
                        function e(e, t) {
                            c(p.code);
                            try {
                                e = JSON.parse(e)
                            } catch (e) {}
                            var n;
                            e = {
                                body: e,
                                headers: {
                                    get: t.getResponseHeader.bind(t)
                                }
                            },
                            s.push(e);
                            try {
                                n = p.interpretResponse(e, i)
                            } catch (e) {
                                return Object(m.logError)("Bidder ".concat(p.code, " failed to interpret the server's response. Continuing without bids"), null, e),
                                void f()
                            }
                            function r(e) {
                                var t, n, r, i = d[e.requestId];
                                i ? (e.originalCpm = e.cpm,
                                e.originalCurrency = e.currency,
                                e.meta = e.meta || T({}, e[i.bidder]),
                                t = T(Object(v.a)(y.a.STATUS.GOOD, i), e),
                                n = i.adUnitCode,
                                r = t,
                                u[n] = !0,
                                U(n, r, [o]) && a(n, r)) : Object(m.logWarn)("Bidder ".concat(p.code, " made bid for unknown request ID: ").concat(e.requestId, ". Ignoring."))
                            }
                            n && (Object(m.isArray)(n) ? n.forEach(r) : r(n)),
                            f(n)
                        }
                        function t(e) {
                            c(p.code),
                            Object(m.logError)("Server call for ".concat(p.code, " failed: ").concat(e, ". Continuing without bids.")),
                            f()
                        }
                    })) : l()) : l())
                }
            });
            function g(e, t, n) {
                _(p, e, t, n)
            }
            function b(e) {
                return !!p.isBidRequestValid(e) || (Object(m.logWarn)("Invalid bid sent to bidder ".concat(p.code, ": ").concat(JSON.stringify(e))),
                !1)
            }
        }
        var _ = Object(b.b)("async", function(t, e, n, r) {
            var i, o, a = u.b.getConfig("userSync.aliasSyncEnabled");
            !t.getUserSyncs || !a && c.default.aliasRegistry[t.code] || (i = u.b.getConfig("userSync.filterSettings"),
            (o = t.getUserSyncs({
                iframeEnabled: !(!i || !i.iframe && !i.all),
                pixelEnabled: !(!i || !i.image && !i.all)
            }, e, n, r)) && (Array.isArray(o) || (o = [o]),
            o.forEach(function(e) {
                s.a.registerSync(e.type, t.code, e.url)
            })))
        }, "registerSyncs");
        function B(e, t) {
            if (!u.b.getConfig("adpod.brandCategoryExclusion"))
                return e.call(this, t);
            t.filter(function(e) {
                return Object(m.deepAccess)(e, "mediaTypes.video.context") === g.a
            }).map(function(e) {
                return e.bids.map(function(e) {
                    return e.bidder
                })
            }).reduce(m.flatten, []).filter(m.uniques).forEach(function(n) {
                var e = c.default.getBidAdapter(n);
                if (e.getSpec().getMappingFileInfo) {
                    var t = e.getSpec().getMappingFileInfo()
                      , r = t.refreshInDays ? t.refreshInDays : j
                      , i = t.localStorageKey ? t.localStorageKey : e.getSpec().code
                      , o = I.getDataFromLocalStorage(i);
                    try {
                        (!(o = o ? JSON.parse(o) : void 0) || Object(m.timestamp)() > o.lastUpdated + 24 * r * 60 * 60 * 1e3) && Object(p.a)(t.url, {
                            success: function(e) {
                                try {
                                    e = JSON.parse(e);
                                    var t = {
                                        lastUpdated: Object(m.timestamp)(),
                                        mapping: e.mapping
                                    };
                                    I.setDataInLocalStorage(i, JSON.stringify(t))
                                } catch (e) {
                                    Object(m.logError)("Failed to parse ".concat(n, " bidder translation mapping file"))
                                }
                            },
                            error: function() {
                                Object(m.logError)("Failed to load ".concat(n, " bidder translation file"))
                            }
                        })
                    } catch (e) {
                        Object(m.logError)("Failed to parse ".concat(n, " bidder translation mapping file"))
                    }
                }
            }),
            e.call(this, t)
        }
        function U(e, t, n) {
            function r(e) {
                return "Invalid bid from ".concat(t.bidderCode, ". Ignoring bid: ").concat(e)
            }
            return e ? t ? (i = Object.keys(t),
            C.every(function(e) {
                return l()(i, e) && !l()([void 0, null], t[e])
            }) ? "native" !== t.mediaType || Object(o.f)(t, n) ? "video" !== t.mediaType || Object(a.d)(t, n) ? !("banner" === t.mediaType && !function(e, t, n) {
                if ((t.width || 0 === parseInt(t.width, 10)) && (t.height || 0 === parseInt(t.height, 10)))
                    return t.width = parseInt(t.width, 10),
                    t.height = parseInt(t.height, 10),
                    1;
                var r = Object(m.getBidderRequest)(n, t.bidderCode, e)
                  , i = r && r.bids && r.bids[0] && r.bids[0].sizes
                  , o = Object(m.parseSizesInput)(i);
                if (1 === o.length) {
                    var a = A(o[0].split("x"), 2)
                      , c = a[0]
                      , u = a[1];
                    return t.width = parseInt(c, 10),
                    t.height = parseInt(u, 10),
                    1
                }
            }(e, t, n)) || (Object(m.logError)(r("Banner bids require a width and height")),
            !1) : (Object(m.logError)(r("Video bid does not have required vastUrl or renderer property")),
            !1) : (Object(m.logError)(r("Native bid missing some required properties.")),
            !1) : (Object(m.logError)(r("Bidder ".concat(t.bidderCode, " is missing required params. Check http://prebid.org/dev-docs/bidder-adapter-1.html for list of params."))),
            !1)) : (Object(m.logWarn)("Some adapter tried to add an undefined bid for ".concat(e, ".")),
            !1) : (Object(m.logWarn)("No adUnitCode was supplied to addBidResponse."),
            !1);
            var i
        }
        Object(b.a)("checkAdUnitSetup").before(B)
    },
    10: function(e, t, n) {
        var r = n(97);
        e.exports = r
    },
    100: function(e, t, n) {
        "use strict";
        var r = {}.propertyIsEnumerable
          , i = Object.getOwnPropertyDescriptor
          , o = i && !r.call({
            1: 2
        }, 1);
        t.f = o ? function(e) {
            var t = i(this, e);
            return !!t && t.enumerable
        }
        : r
    },
    101: function(e, t, n) {
        function r(e, t) {
            var n = c[a(e)];
            return n == s || n != u && ("function" == typeof t ? i(t) : !!t)
        }
        var i = n(31)
          , o = /#|\.prototype\./
          , a = r.normalize = function(e) {
            return String(e).replace(o, ".").toLowerCase()
        }
          , c = r.data = {}
          , u = r.NATIVE = "N"
          , s = r.POLYFILL = "P";
        e.exports = r
    },
    102: function(e, t, n) {
        var r = n(27)
          , i = n(103)
          , o = n(21)("species");
        e.exports = function(e, t) {
            var n;
            return i(e) && ("function" == typeof (n = e.constructor) && (n === Array || i(n.prototype)) || r(n) && null === (n = n[o])) && (n = void 0),
            new (void 0 === n ? Array : n)(0 === t ? 0 : t)
        }
    },
    103: function(e, t, n) {
        var r = n(48);
        e.exports = Array.isArray || function(e) {
            return "Array" == r(e)
        }
    },
    104: function(e, t, n) {
        var r = n(26)
          , i = n(32);
        e.exports = function(t, n) {
            try {
                i(r, t, n)
            } catch (e) {
                r[t] = n
            }
            return n
        }
    },
    105: function(e, t, n) {
        var r = n(76);
        e.exports = r && !Symbol.sham && "symbol" == typeof Symbol.iterator
    },
    106: function(e, t, n) {
        n(107);
        var r = n(52);
        e.exports = r("Array", "includes")
    },
    107: function(e, t, n) {
        "use strict";
        var r = n(14)
          , i = n(77).includes
          , o = n(51);
        r({
            target: "Array",
            proto: !0,
            forced: !n(60)("indexOf", {
                ACCESSORS: !0,
                1: 0
            })
        }, {
            includes: function(e, t) {
                return i(this, e, 1 < arguments.length ? t : void 0)
            }
        }),
        o("includes")
    },
    108: function(e, t, n) {
        var r = n(58)
          , i = Math.max
          , o = Math.min;
        e.exports = function(e, t) {
            var n = r(e);
            return n < 0 ? i(n + t, 0) : o(n, t)
        }
    },
    109: function(e, t, n) {
        n(110),
        n(127),
        n(88),
        n(129);
        var r = n(42);
        e.exports = r.Set
    },
    11: function(e, t, n) {
        "use strict";
        t.a = i,
        t.c = function(e) {
            return !(!e || !e.url)
        }
        ,
        t.b = function(e, t) {
            e.render(t)
        }
        ;
        var u = n(40)
          , s = n(0)
          , r = n(10)
          , d = n.n(r)
          , f = "outstream";
        function i(e) {
            var t = this
              , n = e.url
              , r = e.config
              , i = e.id
              , o = e.callback
              , a = e.loaded
              , c = e.adUnitCode;
            this.url = n,
            this.config = r,
            this.handlers = {},
            this.id = i,
            this.loaded = a,
            this.cmd = [],
            this.push = function(e) {
                "function" == typeof e ? t.loaded ? e.call() : t.cmd.push(e) : s.logError("Commands given to Renderer.push must be wrapped in a function")
            }
            ,
            this.callback = o || function() {
                t.loaded = !0,
                t.process()
            }
            ,
            this.render = function() {
                !function(t) {
                    var e = atdpbjs.adUnits
                      , n = d()(e, function(e) {
                        return e.code === t
                    });
                    if (!n)
                        return !1;
                    var r = s.deepAccess(n, "renderer")
                      , i = !!(r && r.url && r.render)
                      , o = s.deepAccess(n, "mediaTypes.video.renderer")
                      , a = !!(o && o.url && o.render);
                    return !!(i && !0 !== r.backupOnly || a && !0 !== o.backupOnly)
                }(c) ? Object(u.a)(n, f, this.callback) : s.logWarn("External Js not loaded by Renderer since renderer url and callback is already defined on adUnit ".concat(c)),
                this._render ? this._render.apply(this, arguments) : s.logWarn("No render function was provided, please use .setRender on the renderer")
            }
            .bind(this)
        }
        i.install = function(e) {
            return new i({
                url: e.url,
                config: e.config,
                id: e.id,
                callback: e.callback,
                loaded: e.loaded,
                adUnitCode: e.adUnitCode
            })
        }
        ,
        i.prototype.getConfig = function() {
            return this.config
        }
        ,
        i.prototype.setRender = function(e) {
            this._render = e
        }
        ,
        i.prototype.setEventHandlers = function(e) {
            this.handlers = e
        }
        ,
        i.prototype.handleVideoEvent = function(e) {
            var t = e.id
              , n = e.eventName;
            "function" == typeof this.handlers[n] && this.handlers[n](),
            s.logMessage("Prebid Renderer event for id ".concat(t, " type ").concat(n))
        }
        ,
        i.prototype.process = function() {
            for (; 0 < this.cmd.length; )
                try {
                    this.cmd.shift().call()
                } catch (e) {
                    s.logError("Error processing Renderer command: ", e)
                }
        }
    },
    110: function(e, t, n) {
        "use strict";
        var r = n(111)
          , i = n(116);
        e.exports = r("Set", function(t) {
            return function(e) {
                return t(this, arguments.length ? e : void 0)
            }
        }, i)
    },
    111: function(e, t, n) {
        "use strict";
        var f = n(14)
          , l = n(26)
          , p = n(79)
          , g = n(31)
          , b = n(32)
          , v = n(17)
          , y = n(82)
          , h = n(27)
          , m = n(64)
          , S = n(33).f
          , A = n(56).forEach
          , E = n(30)
          , r = n(54)
          , O = r.set
          , T = r.getterFor;
        e.exports = function(n, e, t) {
            var r, a, i = -1 !== n.indexOf("Map"), c = -1 !== n.indexOf("Weak"), o = i ? "set" : "add", u = l[n], s = u && u.prototype, d = {};
            return E && "function" == typeof u && (c || s.forEach && !g(function() {
                (new u).entries().next()
            })) ? (r = e(function(e, t) {
                O(y(e, r, n), {
                    type: n,
                    collection: new u
                }),
                null != t && v(t, e[o], e, i)
            }),
            a = T(n),
            A(["add", "clear", "delete", "forEach", "get", "has", "set", "keys", "values", "entries"], function(i) {
                var o = "add" == i || "set" == i;
                i in s && (!c || "clear" != i) && b(r.prototype, i, function(e, t) {
                    var n = a(this).collection;
                    if (!o && c && !h(e))
                        return "get" == i && void 0;
                    var r = n[i](0 === e ? 0 : e, t);
                    return o ? this : r
                })
            }),
            c || S(r.prototype, "size", {
                configurable: !0,
                get: function() {
                    return a(this).collection.size
                }
            })) : (r = t.getConstructor(e, n, i, o),
            p.REQUIRED = !0),
            m(r, n, !1, !0),
            d[n] = r,
            f({
                global: !0,
                forced: !0
            }, d),
            c || t.setStrong(r, n, i),
            r
        }
    },
    112: function(e, t, n) {
        var r = n(31);
        e.exports = !r(function() {
            return Object.isExtensible(Object.preventExtensions({}))
        })
    },
    113: function(e, t, n) {
        "use strict";
        var r = n(63)
          , i = n(62);
        e.exports = r ? {}.toString : function() {
            return "[object " + i(this) + "]"
        }
    },
    114: function(e, t, n) {
        var r = n(26)
          , i = n(115)
          , o = r.WeakMap;
        e.exports = "function" == typeof o && /native code/.test(i(o))
    },
    115: function(e, t, n) {
        var r = n(75)
          , i = Function.toString;
        "function" != typeof r.inspectSource && (r.inspectSource = function(e) {
            return i.call(e)
        }
        ),
        e.exports = r.inspectSource
    },
    116: function(e, t, n) {
        "use strict";
        var s = n(33).f
          , d = n(83)
          , f = n(121)
          , l = n(24)
          , p = n(82)
          , g = n(17)
          , a = n(66)
          , c = n(126)
          , b = n(30)
          , v = n(79).fastKey
          , r = n(54)
          , y = r.set
          , h = r.getterFor;
        e.exports = {
            getConstructor: function(e, n, r, i) {
                function o(e, t, n) {
                    var r, i, o = c(e), a = u(e, t);
                    return a ? a.value = n : (o.last = a = {
                        index: i = v(t, !0),
                        key: t,
                        value: n,
                        previous: r = o.last,
                        next: void 0,
                        removed: !1
                    },
                    o.first || (o.first = a),
                    r && (r.next = a),
                    b ? o.size++ : e.size++,
                    "F" !== i && (o.index[i] = a)),
                    e
                }
                var a = e(function(e, t) {
                    p(e, a, n),
                    y(e, {
                        type: n,
                        index: d(null),
                        first: void 0,
                        last: void 0,
                        size: 0
                    }),
                    b || (e.size = 0),
                    null != t && g(t, e[i], e, r)
                })
                  , c = h(n)
                  , u = function(e, t) {
                    var n, r = c(e), i = v(t);
                    if ("F" !== i)
                        return r.index[i];
                    for (n = r.first; n; n = n.next)
                        if (n.key == t)
                            return n
                };
                return f(a.prototype, {
                    clear: function() {
                        for (var e = c(this), t = e.index, n = e.first; n; )
                            n.removed = !0,
                            n.previous && (n.previous = n.previous.next = void 0),
                            delete t[n.index],
                            n = n.next;
                        e.first = e.last = void 0,
                        b ? e.size = 0 : this.size = 0
                    },
                    delete: function(e) {
                        var t, n, r = c(this), i = u(this, e);
                        return i && (t = i.next,
                        n = i.previous,
                        delete r.index[i.index],
                        i.removed = !0,
                        n && (n.next = t),
                        t && (t.previous = n),
                        r.first == i && (r.first = t),
                        r.last == i && (r.last = n),
                        b ? r.size-- : this.size--),
                        !!i
                    },
                    forEach: function(e, t) {
                        for (var n, r = c(this), i = l(e, 1 < arguments.length ? t : void 0, 3); n = n ? n.next : r.first; )
                            for (i(n.value, n.key, this); n && n.removed; )
                                n = n.previous
                    },
                    has: function(e) {
                        return !!u(this, e)
                    }
                }),
                f(a.prototype, r ? {
                    get: function(e) {
                        var t = u(this, e);
                        return t && t.value
                    },
                    set: function(e, t) {
                        return o(this, 0 === e ? 0 : e, t)
                    }
                } : {
                    add: function(e) {
                        return o(this, e = 0 === e ? 0 : e, e)
                    }
                }),
                b && s(a.prototype, "size", {
                    get: function() {
                        return c(this).size
                    }
                }),
                a
            },
            setStrong: function(e, t, n) {
                var r = t + " Iterator"
                  , i = h(t)
                  , o = h(r);
                a(e, t, function(e, t) {
                    y(this, {
                        type: r,
                        target: e,
                        state: i(e),
                        kind: t,
                        last: void 0
                    })
                }, function() {
                    for (var e = o(this), t = e.kind, n = e.last; n && n.removed; )
                        n = n.previous;
                    return e.target && (e.last = n = n ? n.next : e.state.first) ? "keys" == t ? {
                        value: n.key,
                        done: !1
                    } : "values" == t ? {
                        value: n.value,
                        done: !1
                    } : {
                        value: [n.key, n.value],
                        done: !1
                    } : {
                        value: e.target = void 0,
                        done: !0
                    }
                }, n ? "entries" : "values", !n, !0),
                c(t)
            }
        }
    },
    117: function(e, t, n) {
        var r = n(30)
          , a = n(33)
          , c = n(15)
          , u = n(118);
        e.exports = r ? Object.defineProperties : function(e, t) {
            c(e);
            for (var n, r = u(t), i = r.length, o = 0; o < i; )
                a.f(e, n = r[o++], t[n]);
            return e
        }
    },
    118: function(e, t, n) {
        var r = n(119)
          , i = n(84);
        e.exports = Object.keys || function(e) {
            return r(e, i)
        }
    },
    119: function(e, t, n) {
        var a = n(28)
          , c = n(47)
          , u = n(77).indexOf
          , s = n(53);
        e.exports = function(e, t) {
            var n, r = c(e), i = 0, o = [];
            for (n in r)
                !a(s, n) && a(r, n) && o.push(n);
            for (; t.length > i; )
                a(r, n = t[i++]) && (~u(o, n) || o.push(n));
            return o
        }
    },
    12: function(e, t, n) {
        var r = n(106);
        e.exports = r
    },
    120: function(e, t, n) {
        var r = n(29);
        e.exports = r("document", "documentElement")
    },
    121: function(e, t, n) {
        var i = n(85);
        e.exports = function(e, t, n) {
            for (var r in t)
                n && n.unsafe && e[r] ? e[r] = t[r] : i(e, r, t[r], n);
            return e
        }
    },
    122: function(e, t, n) {
        "use strict";
        function i() {
            return this
        }
        var o = n(86).IteratorPrototype
          , a = n(83)
          , c = n(46)
          , u = n(64)
          , s = n(38);
        e.exports = function(e, t, n) {
            var r = t + " Iterator";
            return e.prototype = a(o, {
                next: c(1, n)
            }),
            u(e, r, !1, !0),
            s[r] = i,
            e
        }
    },
    123: function(e, t, n) {
        var r = n(31);
        e.exports = !r(function() {
            function e() {}
            return e.prototype.constructor = null,
            Object.getPrototypeOf(new e) !== e.prototype
        })
    },
    124: function(e, t, n) {
        var i = n(15)
          , o = n(125);
        e.exports = Object.setPrototypeOf || ("__proto__"in {} ? function() {
            var n, r = !1, e = {};
            try {
                (n = Object.getOwnPropertyDescriptor(Object.prototype, "__proto__").set).call(e, []),
                r = e instanceof Array
            } catch (e) {}
            return function(e, t) {
                return i(e),
                o(t),
                r ? n.call(e, t) : e.__proto__ = t,
                e
            }
        }() : void 0)
    },
    125: function(e, t, n) {
        var r = n(27);
        e.exports = function(e) {
            if (!r(e) && null !== e)
                throw TypeError("Can't set " + String(e) + " as a prototype");
            return e
        }
    },
    126: function(e, t, n) {
        "use strict";
        var r = n(29)
          , i = n(33)
          , o = n(21)
          , a = n(30)
          , c = o("species");
        e.exports = function(e) {
            var t = r(e)
              , n = i.f;
            a && t && !t[c] && n(t, c, {
                configurable: !0,
                get: function() {
                    return this
                }
            })
        }
    },
    127: function(e, t) {},
    128: function(e, t, n) {
        function r(c) {
            return function(e, t) {
                var n, r, i = String(s(e)), o = u(t), a = i.length;
                return o < 0 || a <= o ? c ? "" : void 0 : (n = i.charCodeAt(o)) < 55296 || 56319 < n || o + 1 === a || (r = i.charCodeAt(o + 1)) < 56320 || 57343 < r ? c ? i.charAt(o) : n : c ? i.slice(o, o + 2) : r - 56320 + (n - 55296 << 10) + 65536
            }
        }
        var u = n(58)
          , s = n(49);
        e.exports = {
            codeAt: r(!1),
            charAt: r(!0)
        }
    },
    129: function(e, t, n) {
        n(130);
        var r = n(131)
          , i = n(26)
          , o = n(62)
          , a = n(32)
          , c = n(38)
          , u = n(21)("toStringTag");
        for (var s in r) {
            var d = i[s]
              , f = d && d.prototype;
            f && o(f) !== u && a(f, u, s),
            c[s] = c.Array
        }
    },
    13: function(e, t, n) {
        "use strict";
        n.d(t, "b", function() {
            return a
        }),
        n.d(t, "a", function() {
            return c
        }),
        t.d = function(e, t) {
            var n = 2 < arguments.length && void 0 !== arguments[2] ? arguments[2] : 15;
            0 === e.getHooks({
                hook: t
            }).length && e.before(t, n)
        }
        ,
        t.c = function(e, n) {
            a("async", function(e) {
                e.forEach(function(e) {
                    return n.apply(void 0, function(e) {
                        if (Array.isArray(e))
                            return o(e)
                    }(t = e) || function(e) {
                        if ("undefined" != typeof Symbol && Symbol.iterator in Object(e))
                            return Array.from(e)
                    }(t) || function(e, t) {
                        if (e) {
                            if ("string" == typeof e)
                                return o(e, t);
                            var n = Object.prototype.toString.call(e).slice(8, -1);
                            return "Object" === n && e.constructor && (n = e.constructor.name),
                            "Map" === n || "Set" === n ? Array.from(e) : "Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n) ? o(e, t) : void 0
                        }
                    }(t) || function() {
                        throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
                    }());
                    var t
                })
            }, e)([])
        }
        ,
        t.e = function(e) {
            for (var t = arguments.length, n = new Array(1 < t ? t - 1 : 0), r = 1; r < t; r++)
                n[r - 1] = arguments[r];
            c(e).before(function(e, t) {
                t.push(n),
                e(t)
            })
        }
        ;
        var r = n(162)
          , i = n.n(r);
        function o(e, t) {
            (null == t || t > e.length) && (t = e.length);
            for (var n = 0, r = new Array(t); n < t; n++)
                r[n] = e[n];
            return r
        }
        var a = i()({
            ready: i.a.SYNC | i.a.ASYNC | i.a.QUEUE
        })
          , c = a.get
    },
    130: function(e, t, n) {
        "use strict";
        var r = n(47)
          , i = n(51)
          , o = n(38)
          , a = n(54)
          , c = n(66)
          , u = "Array Iterator"
          , s = a.set
          , d = a.getterFor(u);
        e.exports = c(Array, "Array", function(e, t) {
            s(this, {
                type: u,
                target: r(e),
                index: 0,
                kind: t
            })
        }, function() {
            var e = d(this)
              , t = e.target
              , n = e.kind
              , r = e.index++;
            return !t || r >= t.length ? {
                value: e.target = void 0,
                done: !0
            } : "keys" == n ? {
                value: r,
                done: !1
            } : "values" == n ? {
                value: t[r],
                done: !1
            } : {
                value: [r, t[r]],
                done: !1
            }
        }, "values"),
        o.Arguments = o.Array,
        i("keys"),
        i("values"),
        i("entries")
    },
    131: function(e, t) {
        e.exports = {
            CSSRuleList: 0,
            CSSStyleDeclaration: 0,
            CSSValueList: 0,
            ClientRectList: 0,
            DOMRectList: 0,
            DOMStringList: 0,
            DOMTokenList: 1,
            DataTransferItemList: 0,
            FileList: 0,
            HTMLAllCollection: 0,
            HTMLCollection: 0,
            HTMLFormElement: 0,
            HTMLSelectElement: 0,
            MediaList: 0,
            MimeTypeArray: 0,
            NamedNodeMap: 0,
            NodeList: 1,
            PaintRequestList: 0,
            Plugin: 0,
            PluginArray: 0,
            SVGLengthList: 0,
            SVGNumberList: 0,
            SVGPathSegList: 0,
            SVGPointList: 0,
            SVGStringList: 0,
            SVGTransformList: 0,
            SourceBufferList: 0,
            StyleSheetList: 0,
            TextTrackCueList: 0,
            TextTrackList: 0,
            TouchList: 0
        }
    },
    132: function(e, t, n) {
        n(14)({
            target: "Set",
            stat: !0
        }, {
            from: n(133)
        })
    },
    133: function(e, t, n) {
        "use strict";
        var s = n(18)
          , d = n(24)
          , f = n(17);
        e.exports = function(e, t, n) {
            var r, i, o, a, c = arguments.length, u = 1 < c ? t : void 0;
            return s(this),
            (r = void 0 !== u) && s(u),
            null == e ? new this : (i = [],
            r ? (o = 0,
            a = d(u, 2 < c ? n : void 0, 2),
            f(e, function(e) {
                i.push(a(e, o++))
            })) : f(e, i.push, i),
            new this(i))
        }
    },
    134: function(e, t, n) {
        n(14)({
            target: "Set",
            stat: !0
        }, {
            of: n(135)
        })
    },
    135: function(e, t, n) {
        "use strict";
        e.exports = function() {
            for (var e = arguments.length, t = new Array(e); e--; )
                t[e] = arguments[e];
            return new this(t)
        }
    },
    136: function(e, t, n) {
        "use strict";
        var r = n(14)
          , i = n(16)
          , o = n(137);
        r({
            target: "Set",
            proto: !0,
            real: !0,
            forced: i
        }, {
            addAll: function() {
                return o.apply(this, arguments)
            }
        })
    },
    137: function(e, t, n) {
        "use strict";
        var i = n(15)
          , o = n(18);
        e.exports = function() {
            for (var e = i(this), t = o(e.add), n = 0, r = arguments.length; n < r; n++)
                t.call(e, arguments[n]);
            return e
        }
    },
    138: function(e, t, n) {
        "use strict";
        var r = n(14)
          , i = n(16)
          , o = n(139);
        r({
            target: "Set",
            proto: !0,
            real: !0,
            forced: i
        }, {
            deleteAll: function() {
                return o.apply(this, arguments)
            }
        })
    },
    139: function(e, t, n) {
        "use strict";
        var a = n(15)
          , c = n(18);
        e.exports = function() {
            for (var e, t = a(this), n = c(t.delete), r = !0, i = 0, o = arguments.length; i < o; i++)
                e = n.call(t, arguments[i]),
                r = r && e;
            return !!r
        }
    },
    14: function(e, t, n) {
        "use strict";
        function y(r) {
            function e(e, t, n) {
                if (this instanceof r) {
                    switch (arguments.length) {
                    case 0:
                        return new r;
                    case 1:
                        return new r(e);
                    case 2:
                        return new r(e,t)
                    }
                    return new r(e,t,n)
                }
                return r.apply(this, arguments)
            }
            return e.prototype = r.prototype,
            e
        }
        var h = n(26)
          , m = n(99).f
          , S = n(101)
          , A = n(42)
          , E = n(24)
          , O = n(32)
          , T = n(28);
        e.exports = function(e, t) {
            var n, r, i, o, a, c, u, s, d = e.target, f = e.global, l = e.stat, p = e.proto, g = f ? h : l ? h[d] : (h[d] || {}).prototype, b = f ? A : A[d] || (A[d] = {}), v = b.prototype;
            for (i in t)
                n = !S(f ? i : d + (l ? "." : "#") + i, e.forced) && g && T(g, i),
                a = b[i],
                n && (c = e.noTargetGet ? (s = m(g, i)) && s.value : g[i]),
                o = n && c ? c : t[i],
                n && typeof a == typeof o || (u = e.bind && n ? E(o, h) : e.wrap && n ? y(o) : p && "function" == typeof o ? E(Function.call, o) : o,
                (e.sham || o && o.sham || a && a.sham) && O(u, "sham", !0),
                b[i] = u,
                p && (T(A, r = d + "Prototype") || O(A, r, {}),
                A[r][i] = o,
                e.real && v && !v[i] && O(v, i, o)))
        }
    },
    140: function(e, t, n) {
        "use strict";
        var r = n(14)
          , i = n(16)
          , o = n(15)
          , a = n(24)
          , c = n(36)
          , u = n(17);
        r({
            target: "Set",
            proto: !0,
            real: !0,
            forced: i
        }, {
            every: function(e, t) {
                var n = o(this)
                  , r = c(n)
                  , i = a(e, 1 < arguments.length ? t : void 0, 3);
                return !u(r, function(e) {
                    if (!i(e, e, n))
                        return u.stop()
                }, void 0, !1, !0).stopped
            }
        })
    },
    141: function(e, t, n) {
        "use strict";
        var r = n(14)
          , i = n(16)
          , o = n(29)
          , a = n(15)
          , c = n(18)
          , u = n(39)
          , s = n(17);
        r({
            target: "Set",
            proto: !0,
            real: !0,
            forced: i
        }, {
            difference: function(e) {
                var t = a(this)
                  , n = new (u(t, o("Set")))(t)
                  , r = c(n.delete);
                return s(e, function(e) {
                    r.call(n, e)
                }),
                n
            }
        })
    },
    142: function(e, t, n) {
        "use strict";
        var r = n(14)
          , i = n(16)
          , c = n(29)
          , u = n(15)
          , s = n(18)
          , d = n(24)
          , f = n(39)
          , l = n(36)
          , p = n(17);
        r({
            target: "Set",
            proto: !0,
            real: !0,
            forced: i
        }, {
            filter: function(e, t) {
                var n = u(this)
                  , r = l(n)
                  , i = d(e, 1 < arguments.length ? t : void 0, 3)
                  , o = new (f(n, c("Set")))
                  , a = s(o.add);
                return p(r, function(e) {
                    i(e, e, n) && a.call(o, e)
                }, void 0, !1, !0),
                o
            }
        })
    },
    143: function(e, t, n) {
        "use strict";
        var r = n(14)
          , i = n(16)
          , o = n(15)
          , a = n(24)
          , c = n(36)
          , u = n(17);
        r({
            target: "Set",
            proto: !0,
            real: !0,
            forced: i
        }, {
            find: function(e, t) {
                var n = o(this)
                  , r = c(n)
                  , i = a(e, 1 < arguments.length ? t : void 0, 3);
                return u(r, function(e) {
                    if (i(e, e, n))
                        return u.stop(e)
                }, void 0, !1, !0).result
            }
        })
    },
    144: function(e, t, n) {
        "use strict";
        var r = n(14)
          , i = n(16)
          , o = n(29)
          , a = n(15)
          , c = n(18)
          , u = n(39)
          , s = n(17);
        r({
            target: "Set",
            proto: !0,
            real: !0,
            forced: i
        }, {
            intersection: function(e) {
                var t = a(this)
                  , n = new (u(t, o("Set")))
                  , r = c(t.has)
                  , i = c(n.add);
                return s(e, function(e) {
                    r.call(t, e) && i.call(n, e)
                }),
                n
            }
        })
    },
    145: function(e, t, n) {
        "use strict";
        var r = n(14)
          , i = n(16)
          , o = n(15)
          , a = n(18)
          , c = n(17);
        r({
            target: "Set",
            proto: !0,
            real: !0,
            forced: i
        }, {
            isDisjointFrom: function(e) {
                var t = o(this)
                  , n = a(t.has);
                return !c(e, function(e) {
                    if (!0 === n.call(t, e))
                        return c.stop()
                }).stopped
            }
        })
    },
    146: function(e, t, n) {
        "use strict";
        var r = n(14)
          , i = n(16)
          , o = n(29)
          , a = n(15)
          , c = n(18)
          , u = n(89)
          , s = n(17);
        r({
            target: "Set",
            proto: !0,
            real: !0,
            forced: i
        }, {
            isSubsetOf: function(e) {
                var t = u(this)
                  , n = a(e)
                  , r = n.has;
                return "function" != typeof r && (n = new (o("Set"))(e),
                r = c(n.has)),
                !s(t, function(e) {
                    if (!1 === r.call(n, e))
                        return s.stop()
                }, void 0, !1, !0).stopped
            }
        })
    },
    147: function(e, t, n) {
        "use strict";
        var r = n(14)
          , i = n(16)
          , o = n(15)
          , a = n(18)
          , c = n(17);
        r({
            target: "Set",
            proto: !0,
            real: !0,
            forced: i
        }, {
            isSupersetOf: function(e) {
                var t = o(this)
                  , n = a(t.has);
                return !c(e, function(e) {
                    if (!1 === n.call(t, e))
                        return c.stop()
                }).stopped
            }
        })
    },
    148: function(e, t, n) {
        "use strict";
        var r = n(14)
          , i = n(16)
          , o = n(15)
          , a = n(36)
          , c = n(17);
        r({
            target: "Set",
            proto: !0,
            real: !0,
            forced: i
        }, {
            join: function(e) {
                var t = o(this)
                  , n = a(t)
                  , r = void 0 === e ? "," : String(e)
                  , i = [];
                return c(n, i.push, i, !1, !0),
                i.join(r)
            }
        })
    },
    149: function(e, t, n) {
        "use strict";
        var r = n(14)
          , i = n(16)
          , c = n(29)
          , u = n(15)
          , s = n(18)
          , d = n(24)
          , f = n(39)
          , l = n(36)
          , p = n(17);
        r({
            target: "Set",
            proto: !0,
            real: !0,
            forced: i
        }, {
            map: function(e, t) {
                var n = u(this)
                  , r = l(n)
                  , i = d(e, 1 < arguments.length ? t : void 0, 3)
                  , o = new (f(n, c("Set")))
                  , a = s(o.add);
                return p(r, function(e) {
                    a.call(o, i(e, e, n))
                }, void 0, !1, !0),
                o
            }
        })
    },
    15: function(e, t, n) {
        var r = n(27);
        e.exports = function(e) {
            if (!r(e))
                throw TypeError(String(e) + " is not an object");
            return e
        }
    },
    150: function(e, t, n) {
        "use strict";
        var r = n(14)
          , i = n(16)
          , a = n(15)
          , c = n(18)
          , u = n(36)
          , s = n(17);
        r({
            target: "Set",
            proto: !0,
            real: !0,
            forced: i
        }, {
            reduce: function(t, e) {
                var n = a(this)
                  , r = u(n)
                  , i = arguments.length < 2
                  , o = i ? void 0 : e;
                if (c(t),
                s(r, function(e) {
                    o = i ? (i = !1,
                    e) : t(o, e, e, n)
                }, void 0, !1, !0),
                i)
                    throw TypeError("Reduce of empty set with no initial value");
                return o
            }
        })
    },
    151: function(e, t, n) {
        "use strict";
        var r = n(14)
          , i = n(16)
          , o = n(15)
          , a = n(24)
          , c = n(36)
          , u = n(17);
        r({
            target: "Set",
            proto: !0,
            real: !0,
            forced: i
        }, {
            some: function(e, t) {
                var n = o(this)
                  , r = c(n)
                  , i = a(e, 1 < arguments.length ? t : void 0, 3);
                return u(r, function(e) {
                    if (i(e, e, n))
                        return u.stop()
                }, void 0, !1, !0).stopped
            }
        })
    },
    152: function(e, t, n) {
        "use strict";
        var r = n(14)
          , i = n(16)
          , o = n(29)
          , a = n(15)
          , c = n(18)
          , u = n(39)
          , s = n(17);
        r({
            target: "Set",
            proto: !0,
            real: !0,
            forced: i
        }, {
            symmetricDifference: function(e) {
                var t = a(this)
                  , n = new (u(t, o("Set")))(t)
                  , r = c(n.delete)
                  , i = c(n.add);
                return s(e, function(e) {
                    r.call(n, e) || i.call(n, e)
                }),
                n
            }
        })
    },
    153: function(e, t, n) {
        "use strict";
        var r = n(14)
          , i = n(16)
          , o = n(29)
          , a = n(15)
          , c = n(18)
          , u = n(39)
          , s = n(17);
        r({
            target: "Set",
            proto: !0,
            real: !0,
            forced: i
        }, {
            union: function(e) {
                var t = a(this)
                  , n = new (u(t, o("Set")))(t);
                return s(e, c(n.add), n),
                n
            }
        })
    },
    154: function(e, t, n) {
        n(88),
        n(155);
        var r = n(42);
        e.exports = r.Array.from
    },
    155: function(e, t, n) {
        var r = n(14)
          , i = n(156);
        r({
            target: "Array",
            stat: !0,
            forced: !n(158)(function(e) {
                Array.from(e)
            })
        }, {
            from: i
        })
    },
    156: function(e, t, n) {
        "use strict";
        var v = n(24)
          , y = n(57)
          , h = n(81)
          , m = n(80)
          , S = n(50)
          , A = n(157)
          , E = n(61);
        e.exports = function(e, t, n) {
            var r, i, o, a, c, u, s = y(e), d = "function" == typeof this ? this : Array, f = arguments.length, l = 1 < f ? t : void 0, p = void 0 !== l, g = E(s), b = 0;
            if (p && (l = v(l, 2 < f ? n : void 0, 2)),
            null == g || d == Array && m(g))
                for (i = new d(r = S(s.length)); b < r; b++)
                    u = p ? l(s[b], b) : s[b],
                    A(i, b, u);
            else
                for (c = (a = g.call(s)).next,
                i = new d; !(o = c.call(a)).done; b++)
                    u = p ? h(a, l, [o.value, b], !0) : o.value,
                    A(i, b, u);
            return i.length = b,
            i
        }
    },
    157: function(e, t, n) {
        "use strict";
        var i = n(55)
          , o = n(33)
          , a = n(46);
        e.exports = function(e, t, n) {
            var r = i(t);
            r in e ? o.f(e, r, a(0, n)) : e[r] = n
        }
    },
    158: function(e, t, n) {
        var i = n(21)("iterator")
          , o = !1;
        try {
            var r = 0
              , a = {
                next: function() {
                    return {
                        done: !!r++
                    }
                },
                return: function() {
                    o = !0
                }
            };
            a[i] = function() {
                return this
            }
            ,
            Array.from(a, function() {
                throw 2
            })
        } catch (e) {}
        e.exports = function(e, t) {
            if (!t && !o)
                return !1;
            var n = !1;
            try {
                var r = {};
                r[i] = function() {
                    return {
                        next: function() {
                            return {
                                done: n = !0
                            }
                        }
                    }
                }
                ,
                e(r)
            } catch (e) {}
            return n
        }
    },
    159: function(e, t) {
        e.exports = function e(t) {
            var n = Array.isArray(t) ? [] : {};
            for (var r in t) {
                var i = t[r];
                n[r] = i && "object" == typeof i ? e(i) : i
            }
            return n
        }
    },
    16: function(e, t) {
        e.exports = !0
    },
    160: function(e, t, n) {
        "use strict";
        t.a = function(e, t, n, r, i) {
            for (t = t.split ? t.split(".") : t,
            r = 0; r < t.length; r++)
                e = e ? e[t[r]] : i;
            return e === i ? n : e
        }
    },
    161: function(e, t, n) {
        "use strict";
        t.a = function(e, t, n) {
            t.split && (t = t.split("."));
            for (var r, i = 0, o = t.length, a = e; i < o; ++i)
                r = a[t[i]],
                a = a[t[i]] = i === o - 1 ? n : null != r ? r : !~t[i + 1].indexOf(".") && -1 < +t[i + 1] ? [] : {}
        }
    },
    162: function(e, t) {
        h.SYNC = 1,
        h.ASYNC = 2,
        h.QUEUE = 4;
        var g = "fun-hooks";
        var n = Object.freeze({
            useProxy: !0,
            ready: 0
        })
          , b = new WeakMap
          , r = "2,1,0" === [1].reduce(function(e, t, n) {
            return [e, t, n]
        }, 2).toString() ? Array.prototype.reduce : function(e, t) {
            var n, r = Object(this), i = r.length >>> 0, o = 0;
            if (t)
                n = t;
            else {
                for (; o < i && !(o in r); )
                    o++;
                n = r[o++]
            }
            for (; o < i; )
                o in r && (n = e(n, r[o], o, r)),
                o++;
            return n
        }
        ;
        function v(e, t) {
            return Array.prototype.slice.call(e, t)
        }
        var y = Object.assign || function(e) {
            return r.call(v(arguments, 1), function(t, n) {
                return n && Object.keys(n).forEach(function(e) {
                    t[e] = n[e]
                }),
                t
            }, e)
        }
        ;
        function h(u) {
            var s, e = {}, d = [];
            function t(e, t) {
                return "function" == typeof e ? f.call(null, "sync", e, t) : "string" == typeof e && "function" == typeof t ? f.apply(null, arguments) : "object" == typeof e ? function(o, e, a) {
                    var t = !0;
                    void 0 === e && (e = Object.getOwnPropertyNames(o),
                    t = !1);
                    var c = {}
                      , n = ["constructor"];
                    for (; (e = e.filter(function(e) {
                        return !("function" != typeof o[e] || -1 !== n.indexOf(e) || e.match(/^_/))
                    })).forEach(function(e) {
                        var t, n = e.split(":"), r = n[0], i = n[1] || "sync";
                        c[r] || (t = o[r],
                        c[r] = o[r] = f(i, t, a ? [a, r] : void 0))
                    }),
                    o = Object.getPrototypeOf(o),
                    t && o; )
                        ;
                    return c
                }
                .apply(null, arguments) : void 0
            }
            function l(o) {
                var a = Array.isArray(o) ? o : o.split(".");
                return r.call(a, function(t, n, e) {
                    var r = t[n]
                      , i = !1;
                    return r || (e === a.length - 1 ? (s || d.push(function() {
                        i || console.warn(g + ": referenced '" + o + "' but it was never created")
                    }),
                    t[n] = p(function(e) {
                        t[n] = e,
                        i = !0
                    })) : t[n] = {})
                }, e)
            }
            function p(r) {
                var o = []
                  , a = []
                  , c = function() {}
                  , e = {
                    before: function(e, t) {
                        return n.call(this, o, "before", e, t)
                    },
                    after: function(e, t) {
                        return n.call(this, a, "after", e, t)
                    },
                    getHooks: function(n) {
                        var e = o.concat(a);
                        "object" == typeof n && (e = e.filter(function(t) {
                            return Object.keys(n).every(function(e) {
                                return t[e] === n[e]
                            })
                        }));
                        try {
                            y(e, {
                                remove: function() {
                                    return e.forEach(function(e) {
                                        e.remove()
                                    }),
                                    this
                                }
                            })
                        } catch (e) {
                            console.error("error adding `remove` to array, did you modify Array.prototype?")
                        }
                        return e
                    },
                    removeAll: function() {
                        return this.getHooks().remove()
                    }
                }
                  , t = {
                    install: function(e, t, n) {
                        this.type = e,
                        (c = n)(o, a),
                        r && r(t)
                    }
                };
                return b.set(e.after, t),
                e;
                function n(t, e, n, r) {
                    var i = {
                        hook: n,
                        type: e,
                        priority: r || 10,
                        remove: function() {
                            var e = t.indexOf(i);
                            -1 !== e && (t.splice(e, 1),
                            c(o, a))
                        }
                    };
                    return t.push(i),
                    t.sort(function(e, t) {
                        return t.priority - e.priority
                    }),
                    c(o, a),
                    this
                }
            }
            function f(f, e, t) {
                var n = e.after && b.get(e.after);
                if (n) {
                    if (n.type !== f)
                        throw g + ": recreated hookable with different type";
                    return e
                }
                var r, i, o = t ? l(t) : p(), a = {
                    get: function(e, t) {
                        return o[t] || Reflect.get.apply(Reflect, arguments)
                    }
                };
                return s || d.push(c),
                u.useProxy && "function" == typeof Proxy && Proxy.revocable ? i = new Proxy(e,a) : y(i = function() {
                    return a.apply ? a.apply(e, this, v(arguments)) : e.apply(this, arguments)
                }
                , o),
                b.get(i.after).install(f, i, function(e, t) {
                    var s, d = [];
                    r = e.length || t.length ? (e.forEach(n),
                    s = d.push(void 0) - 1,
                    t.forEach(n),
                    function(n, r, e) {
                        var i, o = 0, a = "async" === f && "function" == typeof e[e.length - 1] && e.pop();
                        function c(e) {
                            "sync" === f ? i = e : a && a.apply(null, arguments)
                        }
                        function u(e) {
                            if (d[o]) {
                                var t = v(arguments);
                                return u.bail = c,
                                t.unshift(u),
                                d[o++].apply(r, t)
                            }
                            "sync" === f ? i = e : a && a.apply(null, arguments)
                        }
                        return d[s] = function() {
                            var e = v(arguments, 1);
                            "async" === f && a && (delete u.bail,
                            e.push(u));
                            var t = n.apply(r, e);
                            "sync" === f && u(t)
                        }
                        ,
                        u.apply(null, e),
                        i
                    }
                    ) : void 0;
                    function n(e) {
                        d.push(e.hook)
                    }
                    c()
                }),
                i;
                function c() {
                    !s && ("sync" !== f || u.ready & h.SYNC) && ("async" !== f || u.ready & h.ASYNC) ? "sync" !== f && u.ready & h.QUEUE ? a.apply = function() {
                        var e = arguments;
                        d.push(function() {
                            i.apply(e[1], e[2])
                        })
                    }
                    : a.apply = function() {
                        throw g + ": hooked function not ready"
                    }
                    : a.apply = r
                }
            }
            return (u = y({}, n, u)).ready ? t.ready = function() {
                s = !0,
                function(e) {
                    for (var t; t = e.shift(); )
                        t()
                }(d)
            }
            : s = !0,
            t.get = l,
            t
        }
        e.exports = h
    },
    17: function(e, t, n) {
        function p(e, t) {
            this.stopped = e,
            this.result = t
        }
        var g = n(15)
          , b = n(80)
          , v = n(50)
          , y = n(24)
          , h = n(61)
          , m = n(81);
        (e.exports = function(e, t, n, r, i) {
            var o, a, c, u, s, d, f, l = y(t, n, r ? 2 : 1);
            if (i)
                o = e;
            else {
                if ("function" != typeof (a = h(e)))
                    throw TypeError("Target is not iterable");
                if (b(a)) {
                    for (c = 0,
                    u = v(e.length); c < u; c++)
                        if ((s = r ? l(g(f = e[c])[0], f[1]) : l(e[c])) && s instanceof p)
                            return s;
                    return new p(!1)
                }
                o = a.call(e)
            }
            for (d = o.next; !(f = d.call(o)).done; )
                if ("object" == typeof (s = m(o, l, f.value, r)) && s && s instanceof p)
                    return s;
            return new p(!1)
        }
        ).stop = function(e) {
            return new p(!0,e)
        }
    },
    18: function(e, t) {
        e.exports = function(e) {
            if ("function" != typeof e)
                throw TypeError(String(e) + " is not a function");
            return e
        }
    },
    2: function(e, t, n) {
        "use strict";
        n.d(t, "c", function() {
            return r
        }),
        n.d(t, "d", function() {
            return i
        }),
        n.d(t, "b", function() {
            return o
        }),
        n.d(t, "a", function() {
            return a
        });
        var r = "native"
          , i = "video"
          , o = "banner"
          , a = "adpod"
    },
    20: function(e, t, n) {
        "use strict";
        t.a = function() {
            return window.atdpbjs
        }
        ,
        window.atdpbjs = window.atdpbjs || {},
        window.atdpbjs.cmd = window.atdpbjs.cmd || [],
        window.atdpbjs.que = window.atdpbjs.que || [],
        window._pbjsGlobals = window._pbjsGlobals || [],
        window._pbjsGlobals.push("atdpbjs")
    },
    21: function(e, t, n) {
        var r = n(26)
          , i = n(74)
          , o = n(28)
          , a = n(59)
          , c = n(76)
          , u = n(105)
          , s = i("wks")
          , d = r.Symbol
          , f = u ? d : d && d.withoutSetter || a;
        e.exports = function(e) {
            return o(s, e) || (c && o(d, e) ? s[e] = d[e] : s[e] = f("Symbol." + e)),
            s[e]
        }
    },
    22: function(e, t, n) {
        "use strict";
        n.d(t, "a", function() {
            return r
        });
        var y = n(0);
        var h, r = (h = window,
        function() {
            var e, t = [], n = function(e) {
                try {
                    if (!e.location.ancestorOrigins)
                        return;
                    return e.location.ancestorOrigins
                } catch (e) {}
            }(h), r = !1, i = 0, o = !1, a = !1;
            do {
                var c, u, s = g, d = a, f = void 0, l = !1, p = null, a = !1, g = g ? g.parent : h;
                try {
                    f = g.location.href || null
                } catch (e) {
                    l = !0
                }
                if (l)
                    if (d) {
                        var b = s.context;
                        try {
                            u = p = b.sourceUrl,
                            o = !0,
                            g === h.top && (r = !0),
                            b.canonicalUrl && (e = b.canonicalUrl)
                        } catch (e) {}
                    } else {
                        Object(y.logWarn)("Trying to access cross domain iframe. Continuing without referrer and location");
                        try {
                            var v = s.document.referrer;
                            v && (p = v,
                            g === h.top && (r = !0))
                        } catch (e) {}
                        !p && n && n[i - 1] && (p = n[i - 1]),
                        p && !o && (u = p)
                    }
                else
                    f && (u = p = f,
                    o = !1,
                    g === h.top && (r = !0,
                    (c = function(e) {
                        try {
                            var t = e.querySelector("link[rel='canonical']");
                            if (null !== t)
                                return t.href
                        } catch (e) {}
                        return null
                    }(g.document)) && (e = c))),
                    g.context && g.context.sourceUrl && (a = !0);
                t.push(p),
                i++
            } while (g !== h.top);
            return t.reverse(),
            {
                referer: u || null,
                reachedTop: r,
                isAmp: o,
                numIframes: i - 1,
                stack: t,
                canonicalUrl: e || null
            }
        }
        )
    },
    221: function(e, t, n) {
        n(222);
        var r = n(52);
        e.exports = r("Array", "findIndex")
    },
    222: function(e, t, n) {
        "use strict";
        var r = n(14)
          , i = n(56).findIndex
          , o = n(51)
          , a = n(60)
          , c = "findIndex"
          , u = !0
          , s = a(c);
        c in [] && Array(1)[c](function() {
            u = !1
        }),
        r({
            target: "Array",
            proto: !0,
            forced: u || !s
        }, {
            findIndex: function(e, t) {
                return i(this, e, 1 < arguments.length ? t : void 0)
            }
        }),
        o(c)
    },
    229: function(e, t, n) {
        "use strict";
        t.a = function() {
            window.addEventListener("message", u, !1)
        }
        ;
        var r = n(9)
          , g = n.n(r)
          , b = n(37)
          , i = n(5)
          , o = n.n(i)
          , v = n(0)
          , y = n(23)
          , a = n(10)
          , h = n.n(a)
          , m = n(11)
          , c = n(12)
          , S = n.n(c)
          , A = o.a.EVENTS.BID_WON;
        function u(e) {
            var t, n, r, i, o, a, c, u, s, d = e.message ? "message" : "data", f = {};
            try {
                f = JSON.parse(e[d])
            } catch (e) {
                return
            }
            if (f && f.adId) {
                var l = h()(y.a.getBidsReceived(), function(e) {
                    return e.adId === f.adId
                });
                if (l && "Prebid Request" === f.message && (n = e,
                r = (t = l).adId,
                i = t.ad,
                o = t.adUrl,
                a = t.width,
                c = t.height,
                u = t.renderer,
                s = t.cpm,
                Object(m.c)(u) ? Object(m.b)(u, t) : r && (function(e) {
                    var o = e.adId
                      , a = e.adUnitCode
                      , r = e.width
                      , i = e.height;
                    function c(e) {
                        var t, n, r = (t = o,
                        n = a,
                        window.googletag ? function(n) {
                            return h()(window.googletag.pubads().getSlots(), function(t) {
                                return h()(t.getTargetingKeys(), function(e) {
                                    return S()(t.getTargeting(e), n)
                                })
                            }).getSlotElementId()
                        }(t) : window.apntag ? function(e) {
                            var t = window.apntag.getTag(e);
                            return t && t.targetId
                        }(n) : n), i = document.getElementById(r);
                        return i && i.querySelector(e)
                    }
                    ["div", "iframe"].forEach(function(e) {
                        var t, n = c(e + ':not([style*="display: none"])');
                        n ? ((t = n.style).width = r + "px",
                        t.height = i + "px") : Object(v.logWarn)("Unable to locate matching page element for adUnitCode ".concat(a, ".  Can't resize it to ad's dimensions.  Please review setup."))
                    })
                }(t),
                n.source.postMessage(JSON.stringify({
                    message: "Prebid Response",
                    ad: Object(v.replaceAuctionPrice)(i, s),
                    adUrl: Object(v.replaceAuctionPrice)(o, s),
                    adId: r,
                    width: a,
                    height: c
                }), n.origin)),
                y.a.addWinningBid(l),
                g.a.emit(A, l)),
                l && "Prebid Native" === f.message) {
                    if ("assetRequest" === f.action) {
                        var p = Object(b.c)(f, l);
                        return void e.source.postMessage(JSON.stringify(p), e.origin)
                    }
                    if ("click" === Object(b.b)(f, l))
                        return;
                    y.a.addWinningBid(l),
                    g.a.emit(A, l)
                }
            }
        }
    },
    23: function(e, t, n) {
        "use strict";
        n.d(t, "a", function() {
            return u
        });
        var r = n(0)
          , s = n(41)
          , i = n(10)
          , o = n.n(i)
          , a = n(5);
        var d, c, u = (d = [],
        (c = {}).addWinningBid = function(t) {
            var e = o()(d, function(e) {
                return e.getAuctionId() === t.auctionId
            });
            e ? (t.status = a.BID_STATUS.RENDERED,
            e.addWinningBid(t)) : Object(r.logWarn)("Auction not found when adding winning bid")
        }
        ,
        c.getAllWinningBids = function() {
            return d.map(function(e) {
                return e.getWinningBids()
            }).reduce(r.flatten, [])
        }
        ,
        c.getBidsRequested = function() {
            return d.map(function(e) {
                return e.getBidRequests()
            }).reduce(r.flatten, [])
        }
        ,
        c.getNoBids = function() {
            return d.map(function(e) {
                return e.getNoBids()
            }).reduce(r.flatten, [])
        }
        ,
        c.getBidsReceived = function() {
            return d.map(function(e) {
                if (e.getAuctionStatus() === s.a)
                    return e.getBidsReceived()
            }).reduce(r.flatten, []).filter(function(e) {
                return e
            })
        }
        ,
        c.getAdUnits = function() {
            return d.map(function(e) {
                return e.getAdUnits()
            }).reduce(r.flatten, [])
        }
        ,
        c.getAdUnitCodes = function() {
            return d.map(function(e) {
                return e.getAdUnitCodes()
            }).reduce(r.flatten, []).filter(r.uniques)
        }
        ,
        c.createAuction = function(e) {
            var t, n = e.adUnits, r = e.adUnitCodes, i = e.callback, o = e.cbTimeout, a = e.labels, c = e.auctionId, u = Object(s.k)({
                adUnits: n,
                adUnitCodes: r,
                callback: i,
                cbTimeout: o,
                labels: a,
                auctionId: c
            });
            return t = u,
            d.push(t),
            u
        }
        ,
        c.findBidByAdId = function(t) {
            return o()(d.map(function(e) {
                return e.getBidsReceived()
            }).reduce(r.flatten, []), function(e) {
                return e.adId === t
            })
        }
        ,
        c.getStandardBidderAdServerTargeting = function() {
            return Object(s.j)()[a.JSON_MAPPING.ADSERVER_TARGETING]
        }
        ,
        c.setStatusForBids = function(e, t) {
            var n, r = c.findBidByAdId(e);
            r && (r.status = t),
            !r || t !== a.BID_STATUS.BID_TARGETING_SET || (n = o()(d, function(e) {
                return e.getAuctionId() === r.auctionId
            })) && n.setBidTargeting(r)
        }
        ,
        c.getLastAuctionId = function() {
            return d.length && d[d.length - 1].getAuctionId()
        }
        ,
        c)
    },
    230: function(e, t, n) {
        "use strict";
        t.a = function(e) {
            var t;
            try {
                e = e || window.sessionStorage,
                t = JSON.parse(e.getItem(u))
            } catch (e) {}
            t && p(t, !0)
        }
        ;
        var r, i, o = n(3), a = n(0), c = n(41), u = "atdpbjs:debugging";
        function s(e) {
            Object(a.logMessage)("DEBUG: " + e)
        }
        function d(e) {
            Object(a.logWarn)("DEBUG: " + e)
        }
        function f(e) {
            r = function(e, t, n) {
                if (b(this.bidders, n.bidderCode))
                    return void d("bidder '".concat(n.bidderCode, "' excluded from auction by bidder overrides"));
                Array.isArray(this.bids) && this.bids.forEach(function(e) {
                    g(e, n.bidderCode, t) || v(e, n, "bidder")
                });
                e(t, n)
            }
            .bind(e),
            c.c.before(r, 5),
            i = function(e, t) {
                var r = this
                  , n = t.filter(function(e) {
                    return !b(r.bidders, e.bidderCode) || (d("bidRequest '".concat(e.bidderCode, "' excluded from auction by bidder overrides")),
                    !1)
                });
                Array.isArray(r.bidRequests) && n.forEach(function(n) {
                    r.bidRequests.forEach(function(t) {
                        n.bids.forEach(function(e) {
                            g(t, n.bidderCode, e.adUnitCode) || v(t, e, "bidRequest")
                        })
                    })
                });
                e(n)
            }
            .bind(e),
            c.e.before(i, 5)
        }
        function l() {
            c.c.getHooks({
                hook: r
            }).remove(),
            c.e.getHooks({
                hook: i
            }).remove()
        }
        function p(e, t) {
            var n = 1 < arguments.length && void 0 !== t && t;
            o.b.setConfig({
                debug: !0
            }),
            l(),
            f(e),
            s("bidder overrides enabled".concat(n ? " from session" : ""))
        }
        function g(e, t, n) {
            return e.bidder && e.bidder !== t || !(!e.adUnitCode || e.adUnitCode === n)
        }
        function b(e, t) {
            return Array.isArray(e) && -1 === e.indexOf(t)
        }
        function v(n, e, r) {
            return Object.keys(n).filter(function(e) {
                return -1 === ["adUnitCode", "bidder"].indexOf(e)
            }).reduce(function(e, t) {
                return s("bidder overrides changed '".concat(e.adUnitCode, "/").concat(e.bidderCode, "' ").concat(r, ".").concat(t, " from '").concat(e[t], ".js' to '").concat(n[t], "'")),
                e[t] = n[t],
                e
            }, e)
        }
        function y(e) {
            if (e.enabled) {
                try {
                    window.sessionStorage.setItem(u, JSON.stringify(e))
                } catch (e) {}
                p(e)
            } else {
                l(),
                s("bidder overrides disabled");
                try {
                    window.sessionStorage.removeItem(u)
                } catch (e) {}
            }
        }
        o.b.getConfig("debugging", function(e) {
            return y(e.debugging)
        })
    },
    24: function(e, t, n) {
        var o = n(18);
        e.exports = function(r, i, e) {
            if (o(r),
            void 0 === i)
                return r;
            switch (e) {
            case 0:
                return function() {
                    return r.call(i)
                }
                ;
            case 1:
                return function(e) {
                    return r.call(i, e)
                }
                ;
            case 2:
                return function(e, t) {
                    return r.call(i, e, t)
                }
                ;
            case 3:
                return function(e, t, n) {
                    return r.call(i, e, t, n)
                }
            }
            return function() {
                return r.apply(i, arguments)
            }
        }
    },
    25: function(e, t, n) {
        "use strict";
        n.d(t, "b", function() {
            return c
        }),
        n.d(t, "a", function() {
            return u
        }),
        t.d = function(e, t) {
            var n = Object(o.getBidRequest)(e.requestId, t)
              , r = n && Object(o.deepAccess)(n, "mediaTypes.video")
              , i = r && Object(o.deepAccess)(r, "context");
            return s(e, n, r, i)
        }
        ,
        n.d(t, "c", function() {
            return s
        });
        n(8);
        var o = n(0)
          , i = n(3)
          , r = n(12)
          , a = (n.n(r),
        n(13))
          , c = "outstream"
          , u = "instream";
        var s = Object(a.b)("sync", function(e, t, n, r) {
            return !t || n && r !== c ? i.b.getConfig("cache.url") || !e.vastXml || e.vastUrl ? !(!e.vastUrl && !e.vastXml) : (Object(o.logError)('\n        This bid contains only vastXml and will not work when a prebid cache url is not specified.\n        Try enabling prebid cache with atdpbjs.setConfig({ cache: {url: "..."} });\n      '),
            !1) : r !== c || !!(e.renderer || t.renderer || n.renderer)
        }, "checkVideoBidSetup")
    },
    26: function(n, e, t) {
        (function(e) {
            function t(e) {
                return e && e.Math == Math && e
            }
            n.exports = t("object" == typeof globalThis && globalThis) || t("object" == typeof window && window) || t("object" == typeof self && self) || t("object" == typeof e && e) || Function("return this")()
        }
        ).call(e, t(35))
    },
    27: function(e, t) {
        e.exports = function(e) {
            return "object" == typeof e ? null !== e : "function" == typeof e
        }
    },
    28: function(e, t) {
        var n = {}.hasOwnProperty;
        e.exports = function(e, t) {
            return n.call(e, t)
        }
    },
    29: function(e, t, n) {
        function r(e) {
            return "function" == typeof e ? e : void 0
        }
        var i = n(42)
          , o = n(26);
        e.exports = function(e, t) {
            return arguments.length < 2 ? r(i[e]) || r(o[e]) : i[e] && i[e][t] || o[e] && o[e][t]
        }
    },
    3: function(e, t, n) {
        "use strict";
        n.d(t, "a", function() {
            return y
        }),
        n.d(t, "b", function() {
            return C
        });
        var r = n(45)
          , i = n(10)
          , a = n.n(i)
          , o = n(12)
          , c = n.n(o)
          , u = n(78)
          , s = n.n(u)
          , d = n(0);
        function f() {
            return (f = Object.assign || function(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var n = arguments[t];
                    for (var r in n)
                        Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r])
                }
                return e
            }
            ).apply(this, arguments)
        }
        var l = n(90)
          , p = n(0)
          , g = n(5)
          , b = "TRUE" === p.getParameterByName(g.DEBUG_MODE).toUpperCase()
          , v = window.location.origin
          , y = "random"
          , h = {};
        h[y] = !0,
        h.fixed = !0;
        var m = y
          , S = {
            LOW: "low",
            MEDIUM: "medium",
            HIGH: "high",
            AUTO: "auto",
            DENSE: "dense",
            CUSTOM: "custom"
        };
        var A, E, O, T, I, C = (T = [],
        I = null,
        j(),
        {
            getCurrentBidder: function() {
                return I
            },
            getConfig: function() {
                if (arguments.length <= 1 && "function" != typeof (arguments.length <= 0 ? void 0 : arguments[0])) {
                    var e = arguments.length <= 0 ? void 0 : arguments[0];
                    return e ? p.deepAccess(w(), e) : w()
                }
                return function(e, t) {
                    var n = t;
                    if ("string" != typeof e && (n = e,
                    e = "*"),
                    "function" == typeof n) {
                        var r = {
                            topic: e,
                            callback: n
                        };
                        return T.push(r),
                        function() {
                            T.splice(T.indexOf(r), 1)
                        }
                    }
                    p.logError("listener must be a function")
                }
                .apply(void 0, arguments)
            },
            setConfig: function(n) {
                var e, r;
                p.isPlainObject(n) ? (e = Object.keys(n),
                r = {},
                e.forEach(function(e) {
                    var t = n[e];
                    p.isPlainObject(A[e]) && p.isPlainObject(t) && (t = f({}, A[e], t)),
                    r[e] = E[e] = t
                }),
                _(r)) : p.logError("setConfig options must be an object")
            },
            setDefaults: function(e) {
                p.isPlainObject(A) ? (f(A, e),
                f(E, e)) : p.logError("defaults must be an object")
            },
            resetConfig: j,
            runWithBidder: B,
            callbackWithBidder: function(o) {
                return function(i) {
                    return function() {
                        if ("function" == typeof i) {
                            for (var e, t = arguments.length, n = new Array(t), r = 0; r < t; r++)
                                n[r] = arguments[r];
                            return B(o, (e = p.bind).call.apply(e, [i, this].concat(n)))
                        }
                        p.logWarn("config.callbackWithBidder callback is not a function")
                    }
                }
            },
            setBidderConfig: function(r) {
                try {
                    !function(e) {
                        if (!p.isPlainObject(e))
                            throw "setBidderConfig bidder options must be an object";
                        if (!Array.isArray(e.bidders) || !e.bidders.length)
                            throw "setBidderConfig bidder options must contain a bidders list with at least 1 bidder";
                        if (!p.isPlainObject(e.config))
                            throw "setBidderConfig bidder options must contain a config object"
                    }(r),
                    r.bidders.forEach(function(n) {
                        O[n] || (O[n] = {}),
                        Object.keys(r.config).forEach(function(e) {
                            var t = r.config[e];
                            p.isPlainObject(t) ? O[n][e] = f({}, O[n][e] || {}, t) : O[n][e] = t
                        })
                    })
                } catch (e) {
                    p.logError(e)
                }
            },
            getBidderConfig: function() {
                return O
            }
        });
        function j() {
            A = {};
            var n = {
                _debug: b,
                get debug() {
                    return this._debug
                },
                set debug(e) {
                    this._debug = e
                },
                _bidderTimeout: 3e3,
                get bidderTimeout() {
                    return this._bidderTimeout
                },
                set bidderTimeout(e) {
                    this._bidderTimeout = e
                },
                _publisherDomain: v,
                get publisherDomain() {
                    return this._publisherDomain
                },
                set publisherDomain(e) {
                    this._publisherDomain = e
                },
                _priceGranularity: S.MEDIUM,
                set priceGranularity(e) {
                    o(e) && ("string" == typeof e ? this._priceGranularity = i(e) ? e : S.MEDIUM : p.isPlainObject(e) && (this._customPriceBucket = e,
                    this._priceGranularity = S.CUSTOM,
                    p.logMessage("Using custom price granularity")))
                },
                get priceGranularity() {
                    return this._priceGranularity
                },
                _customPriceBucket: {},
                get customPriceBucket() {
                    return this._customPriceBucket
                },
                _mediaTypePriceGranularity: {},
                get mediaTypePriceGranularity() {
                    return this._mediaTypePriceGranularity
                },
                set mediaTypePriceGranularity(n) {
                    var r = this;
                    this._mediaTypePriceGranularity = Object.keys(n).reduce(function(e, t) {
                        return o(n[t]) ? "string" == typeof n ? e[t] = i(n[t]) ? n[t] : r._priceGranularity : p.isPlainObject(n) && (e[t] = n[t],
                        p.logMessage("Using custom price granularity for ".concat(t))) : p.logWarn("Invalid price granularity for media type: ".concat(t)),
                        e
                    }, {})
                },
                _sendAllBids: !0,
                get enableSendAllBids() {
                    return this._sendAllBids
                },
                set enableSendAllBids(e) {
                    this._sendAllBids = e
                },
                _useBidCache: !1,
                get useBidCache() {
                    return this._useBidCache
                },
                set useBidCache(e) {
                    this._useBidCache = e
                },
                _deviceAccess: !0,
                get deviceAccess() {
                    return this._deviceAccess
                },
                set deviceAccess(e) {
                    this._deviceAccess = e
                },
                _bidderSequence: m,
                get bidderSequence() {
                    return this._bidderSequence
                },
                set bidderSequence(e) {
                    h[e] ? this._bidderSequence = e : p.logWarn("Invalid order: ".concat(e, ". Bidder Sequence was not set."))
                },
                _timeoutBuffer: 400,
                get timeoutBuffer() {
                    return this._timeoutBuffer
                },
                set timeoutBuffer(e) {
                    this._timeoutBuffer = e
                },
                _disableAjaxTimeout: !1,
                get disableAjaxTimeout() {
                    return this._disableAjaxTimeout
                },
                set disableAjaxTimeout(e) {
                    this._disableAjaxTimeout = e
                },
                _auctionOptions: {},
                get auctionOptions() {
                    return this._auctionOptions
                },
                set auctionOptions(e) {
                    !function(e) {
                        if (!p.isPlainObject(e))
                            return p.logWarn("Auction Options must be an object"),
                            !1;
                        for (var t = 0, n = Object.keys(e); t < n.length; t++) {
                            var r = n[t];
                            if ("secondaryBidders" !== r)
                                return p.logWarn("Auction Options given an incorrect param: ".concat(r)),
                                !1;
                            if ("secondaryBidders" === r) {
                                if (!p.isArray(e[r]))
                                    return p.logWarn("Auction Options ".concat(r, " must be of type Array")),
                                    !1;
                                if (!e[r].every(p.isStr))
                                    return p.logWarn("Auction Options ".concat(r, " must be only string")),
                                    !1
                            }
                        }
                        return !0
                    }(e) || (this._auctionOptions = e)
                }
            };
            function i(t) {
                return a()(Object.keys(S), function(e) {
                    return t === S[e]
                })
            }
            function o(e) {
                if (e) {
                    if ("string" == typeof e)
                        i(e) || p.logWarn("Prebid Warning: setPriceGranularity was called with invalid setting, using `medium` as default.");
                    else if (p.isPlainObject(e) && !Object(r.b)(e))
                        return void p.logError("Invalid custom price value passed to `setPriceGranularity()`");
                    return 1
                }
                p.logError("Prebid Error: no value passed to `setPriceGranularity()`")
            }
            E && _(Object.keys(E).reduce(function(e, t) {
                return E[t] !== n[t] && (e[t] = n[t] || {}),
                e
            }, {})),
            E = n,
            O = {}
        }
        function w() {
            if (I && O && p.isPlainObject(O[I])) {
                var n = O[I]
                  , e = new s.a(Object.keys(E).concat(Object.keys(n)));
                return l(e).reduce(function(e, t) {
                    return void 0 === n[t] ? e[t] = E[t] : void 0 !== E[t] && p.isPlainObject(n[t]) ? e[t] = Object(d.mergeDeep)({}, E[t], n[t]) : e[t] = n[t],
                    e
                }, {})
            }
            return f({}, E)
        }
        function _(i) {
            var t = Object.keys(i);
            T.filter(function(e) {
                return c()(t, e.topic)
            }).forEach(function(e) {
                var t, n, r;
                e.callback((t = {},
                n = e.topic,
                r = i[e.topic],
                n in t ? Object.defineProperty(t, n, {
                    value: r,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : t[n] = r,
                t))
            }),
            T.filter(function(e) {
                return "*" === e.topic
            }).forEach(function(e) {
                return e.callback(i)
            })
        }
        function B(e, t) {
            I = e;
            try {
                return t()
            } finally {
                I = null
            }
        }
    },
    30: function(e, t, n) {
        var r = n(31);
        e.exports = !r(function() {
            return 7 != Object.defineProperty({}, 1, {
                get: function() {
                    return 7
                }
            })[1]
        })
    },
    31: function(e, t) {
        e.exports = function(e) {
            try {
                return !!e()
            } catch (e) {
                return !0
            }
        }
    },
    32: function(e, t, n) {
        var r = n(30)
          , i = n(33)
          , o = n(46);
        e.exports = r ? function(e, t, n) {
            return i.f(e, t, o(1, n))
        }
        : function(e, t, n) {
            return e[t] = n,
            e
        }
    },
    33: function(e, t, n) {
        var r = n(30)
          , i = n(72)
          , o = n(15)
          , a = n(55)
          , c = Object.defineProperty;
        t.f = r ? c : function(e, t, n) {
            if (o(e),
            t = a(t, !0),
            o(n),
            i)
                try {
                    return c(e, t, n)
                } catch (e) {}
            if ("get"in n || "set"in n)
                throw TypeError("Accessors not supported");
            return "value"in n && (e[t] = n.value),
            e
        }
    },
    34: function(e, t, n) {
        "use strict";
        t.a = function(e, t) {
            return new r(e,t)
        }
        ;
        var i = n(0);
        function r(e, t) {
            var n = t && t.src || "client"
              , r = e || 0;
            this.bidderCode = t && t.bidder || "",
            this.width = 0,
            this.height = 0,
            this.statusMessage = function() {
                switch (r) {
                case 0:
                    return "Pending";
                case 1:
                    return "Bid available";
                case 2:
                    return "Bid returned empty or error response";
                case 3:
                    return "Bid timed out"
                }
            }(),
            this.adId = i.getUniqueIdentifierStr(),
            this.requestId = t && t.bidId,
            this.mediaType = "banner",
            this.source = n,
            this.getStatusCode = function() {
                return r
            }
            ,
            this.getSize = function() {
                return this.width + "x" + this.height
            }
        }
    },
    35: function(e, t) {
        var n = function() {
            return this
        }();
        try {
            n = n || Function("return this")() || (0,
            eval)("this")
        } catch (e) {
            "object" == typeof window && (n = window)
        }
        e.exports = n
    },
    357: function(e, t, n) {
        var r = n(358);
        e.exports = r
    },
    358: function(e, t, n) {
        n(359);
        var r = n(52);
        e.exports = r("String", "includes")
    },
    359: function(e, t, n) {
        "use strict";
        var r = n(14)
          , i = n(360)
          , o = n(49);
        r({
            target: "String",
            proto: !0,
            forced: !n(362)("includes")
        }, {
            includes: function(e, t) {
                return !!~String(o(this)).indexOf(i(e), 1 < arguments.length ? t : void 0)
            }
        })
    },
    36: function(e, t, n) {
        var r = n(16)
          , i = n(89);
        e.exports = r ? i : function(e) {
            return Set.prototype.values.call(e)
        }
    },
    360: function(e, t, n) {
        var r = n(361);
        e.exports = function(e) {
            if (r(e))
                throw TypeError("The method doesn't accept regular expressions");
            return e
        }
    },
    361: function(e, t, n) {
        var r = n(27)
          , i = n(48)
          , o = n(21)("match");
        e.exports = function(e) {
            var t;
            return r(e) && (void 0 !== (t = e[o]) ? !!t : "RegExp" == i(e))
        }
    },
    362: function(e, t, n) {
        var r = n(21)("match");
        e.exports = function(t) {
            var n = /./;
            try {
                "/./"[t](n)
            } catch (e) {
                try {
                    return n[r] = !1,
                    "/./"[t](n)
                } catch (e) {}
            }
            return !1
        }
    },
    37: function(e, t, n) {
        "use strict";
        n.d(t, "e", function() {
            return o
        }),
        n.d(t, "a", function() {
            return s
        }),
        t.g = function(e) {
            if (e && e.type && function(e) {
                return !(!e || !c()(Object.keys(d), e)) || (Object(a.logError)("".concat(e, " nativeParam is not supported")),
                !1)
            }(e.type))
                return d[e.type];
            return e
        }
        ,
        t.f = function(t, e) {
            var n = Object(a.getBidRequest)(t.requestId, e);
            if (!n)
                return !1;
            if (!Object(a.deepAccess)(t, "native.clickUrl"))
                return !1;
            if (Object(a.deepAccess)(t, "native.image") && (!Object(a.deepAccess)(t, "native.image.height") || !Object(a.deepAccess)(t, "native.image.width")))
                return !1;
            if (Object(a.deepAccess)(t, "native.icon") && (!Object(a.deepAccess)(t, "native.icon.height") || !Object(a.deepAccess)(t, "native.icon.width")))
                return !1;
            var r = n.nativeParams;
            if (!r)
                return !0;
            var i = Object.keys(r).filter(function(e) {
                return r[e].required
            })
              , o = Object.keys(t.native).filter(function(e) {
                return t.native[e]
            });
            return i.every(function(e) {
                return c()(o, e)
            })
        }
        ,
        t.b = function(e, t) {
            var n;
            "click" === e.action ? n = t.native && t.native.clickTrackers : (n = t.native && t.native.impressionTrackers,
            t.native && t.native.javascriptTrackers && Object(a.insertHtmlIntoIframe)(t.native.javascriptTrackers));
            return (n || []).forEach(a.triggerPixel),
            e.action
        }
        ,
        t.d = function(r, i) {
            var o = {};
            return Object.keys(r.native).forEach(function(e) {
                var t = u.NATIVE_KEYS[e]
                  , n = f(r.native[e]);
                Object(a.deepAccess)(i, "mediaTypes.native.".concat(e, ".sendId")) && (n = "".concat(t, ":").concat(r.adId)),
                t && n && (o[t] = n)
            }),
            o
        }
        ,
        t.c = function(e, r) {
            var i = {
                message: "assetResponse",
                adId: e.adId,
                assets: []
            };
            return e.assets.forEach(function(e) {
                var t = Object(a.getKeyByValue)(u.NATIVE_KEYS, e)
                  , n = f(r.native[t]);
                i.assets.push({
                    key: t,
                    value: n
                })
            }),
            i
        }
        ;
        var a = n(0)
          , r = n(12)
          , c = n.n(r);
        function i(e) {
            return (i = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
                return typeof e
            }
            : function(e) {
                return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
            }
            )(e)
        }
        var u = n(5)
          , o = []
          , s = Object.keys(u.NATIVE_KEYS).map(function(e) {
            return u.NATIVE_KEYS[e]
        })
          , d = {
            image: {
                image: {
                    required: !0
                },
                title: {
                    required: !0
                },
                sponsoredBy: {
                    required: !0
                },
                clickUrl: {
                    required: !0
                },
                body: {
                    required: !1
                },
                icon: {
                    required: !1
                }
            }
        };
        function f(e) {
            return "object" === i(e) && e.url ? e.url : e
        }
    },
    38: function(e, t) {
        e.exports = {}
    },
    39: function(e, t, n) {
        var i = n(15)
          , o = n(18)
          , a = n(21)("species");
        e.exports = function(e, t) {
            var n, r = i(e).constructor;
            return void 0 === r || null == (n = i(r)[a]) ? t : o(n)
        }
    },
    4: function(e, t, n) {
        "use strict";
        n.d(t, "a", function() {
            return r
        }),
        t.b = i;
        var l = n(3);
        function p() {
            return (p = Object.assign || function(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var n = arguments[t];
                    for (var r in n)
                        Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r])
                }
                return e
            }
            ).apply(this, arguments)
        }
        function g(e) {
            return (g = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
                return typeof e
            }
            : function(e) {
                return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
            }
            )(e)
        }
        var b = n(0)
          , v = 4
          , r = i();
        function i() {
            var s = 0 < arguments.length && void 0 !== arguments[0] ? arguments[0] : 3e3
              , e = 1 < arguments.length && void 0 !== arguments[1] ? arguments[1] : {}
              , d = e.request
              , f = e.done;
            return function(e, t, n) {
                var r = 3 < arguments.length && void 0 !== arguments[3] ? arguments[3] : {};
                try {
                    var i, o = r.method || (n ? "POST" : "GET"), a = document.createElement("a");
                    a.href = e;
                    var c, u = "object" === g(t) && null !== t ? t : {
                        success: function() {
                            b.logMessage("xhr success")
                        },
                        error: function(e) {
                            b.logError("xhr error", null, e)
                        }
                    };
                    "function" == typeof t && (u.success = t),
                    (i = new window.XMLHttpRequest).onreadystatechange = function() {
                        var e;
                        i.readyState === v && ("function" == typeof f && f(a.origin),
                        200 <= (e = i.status) && e < 300 || 304 === e ? u.success(i.responseText, i) : u.error(i.statusText, i))
                    }
                    ,
                    l.b.getConfig("disableAjaxTimeout") || (i.ontimeout = function() {
                        b.logError("  xhr timeout after ", i.timeout, "ms")
                    }
                    ),
                    "GET" === o && n && (p((c = b.parseUrl(e, r)).search, n),
                    e = b.buildUrl(c)),
                    i.open(o, e, !0),
                    l.b.getConfig("disableAjaxTimeout") || (i.timeout = s),
                    r.withCredentials && (i.withCredentials = !0),
                    b._each(r.customHeaders, function(e, t) {
                        i.setRequestHeader(t, e)
                    }),
                    r.preflight && i.setRequestHeader("X-Requested-With", "XMLHttpRequest"),
                    i.setRequestHeader("Content-Type", r.contentType || "text/plain"),
                    "function" == typeof d && d(a.origin),
                    "POST" === o && n ? i.send(n) : i.send()
                } catch (e) {
                    b.logError("xhr construction", e)
                }
            }
        }
    },
    40: function(e, t, n) {
        "use strict";
        t.a = function(r, e, t) {
            if (!e || !r)
                return void o.logError("cannot load external script without url and moduleCode");
            if (!i()(c, e))
                return void o.logError("".concat(e, " not whitelisted for loading external JavaScript"));
            if (a[r])
                return t && "function" == typeof t && (a[r].loaded ? t() : a[r].callbacks.push(t)),
                a[r].tag;
            a[r] = {
                loaded: !1,
                tag: null,
                callbacks: []
            },
            t && "function" == typeof t && a[r].callbacks.push(t);
            return o.logWarn("module ".concat(e, " is loading external JavaScript")),
            function(e, t) {
                var n = document.createElement("script");
                n.type = "text/javascript",
                n.async = !0,
                (a[r].tag = n).readyState ? n.onreadystatechange = function() {
                    "loaded" !== n.readyState && "complete" !== n.readyState || (n.onreadystatechange = null,
                    t())
                }
                : n.onload = function() {
                    t()
                }
                ;
                return n.src = e,
                o.insertElement(n),
                n
            }(r, function() {
                a[r].loaded = !0;
                try {
                    for (var e = 0; e < a[r].callbacks.length; e++)
                        a[r].callbacks[e]()
                } catch (e) {
                    o.logError("Error executing callback", "adloader.js:loadExternalScript", e)
                }
            })
        }
        ;
        var r = n(12)
          , i = n.n(r)
          , o = n(0)
          , a = {}
          , c = ["criteo", "outstream", "adagio", "browsi"]
    },
    41: function(e, t, n) {
        "use strict";
        n.d(t, "b", function() {
            return L
        }),
        n.d(t, "a", function() {
            return F
        }),
        t.k = function(e) {
            var t, i, b, v, o = e.adUnits, n = e.adUnitCodes, r = e.callback, a = e.cbTimeout, c = e.labels, u = e.auctionId, y = o, s = c, d = n, h = [], f = [], l = [], p = u || P.generateUUID(), g = r, m = a, S = [], A = new Set;
            function E() {
                return {
                    auctionId: p,
                    timestamp: t,
                    auctionEnd: i,
                    auctionStatus: b,
                    adUnits: y,
                    adUnitCodes: d,
                    labels: s,
                    bidderRequests: h,
                    noBids: l,
                    bidsReceived: f,
                    winningBids: S,
                    timeout: m
                }
            }
            function O(n, e) {
                var r, t;
                e && clearTimeout(v),
                void 0 === i && (r = [],
                n && (P.logMessage("Auction ".concat(p, " timedOut")),
                t = A,
                (r = h.map(function(e) {
                    return (e.bids || []).filter(function(e) {
                        return !t.has(e.bidder)
                    })
                }).reduce(j.flatten, []).map(function(e) {
                    return {
                        bidId: e.bidId,
                        bidder: e.bidder,
                        adUnitCode: e.adUnitCode,
                        auctionId: e.auctionId
                    }
                })).length && M.emit(G.EVENTS.BID_TIMEOUT, r)),
                b = F,
                i = Date.now(),
                M.emit(G.EVENTS.AUCTION_END, E()),
                Q(y, function() {
                    try {
                        var e;
                        null != g && (e = f.filter(P.bind.call(j.adUnitsFilter, this, d)).reduce(ee, {}),
                        g.apply(atdpbjs, [e, n, p]),
                        g = null)
                    } catch (e) {
                        P.logError("Error executing bidsBackHandler", null, e)
                    } finally {
                        r.length && q.callTimedOutBidders(o, r, m);
                        var t = B.b.getConfig("userSync") || {};
                        t.enableOverride || N(t.syncDelay)
                    }
                }))
            }
            function T() {
                P.logInfo("Bids Received for Auction with id: ".concat(p), f),
                b = F,
                O(!1, !0)
            }
            function I(e) {
                A.add(e)
            }
            function C(n) {
                var f = this;
                n.forEach(function(e) {
                    var t;
                    t = e,
                    h = h.concat(t)
                });
                var l = {}
                  , e = {
                    bidRequests: n,
                    run: function() {
                        var e, t;
                        e = O.bind(null, !0),
                        t = setTimeout(e, m),
                        v = t,
                        b = L,
                        M.emit(G.EVENTS.AUCTION_INIT, E());
                        var r, i, o, a, c, u, s = (r = T,
                        i = f,
                        o = 0,
                        a = !1,
                        c = new Set,
                        u = {},
                        {
                            addBidResponse: function(e, t) {
                                u[t.requestId] = !0,
                                o++;
                                var n = function(e) {
                                    var t = e.adUnitCode
                                      , n = e.bid
                                      , r = e.bidderRequest
                                      , i = e.auctionId
                                      , o = r.start
                                      , a = D({}, n, {
                                        auctionId: i,
                                        responseTimestamp: Object(j.timestamp)(),
                                        requestTimestamp: o,
                                        cpm: parseFloat(n.cpm) || 0,
                                        bidder: n.bidderCode,
                                        adUnitCode: t
                                    });
                                    a.timeToRespond = a.responseTimestamp - a.requestTimestamp,
                                    M.emit(G.EVENTS.BID_ADJUSTMENT, a);
                                    var c = r.bids && U()(r.bids, function(e) {
                                        return e.adUnitCode == t
                                    })
                                      , u = c && c.renderer
                                      , s = a.mediaType
                                      , d = c && c.mediaTypes && c.mediaTypes[s]
                                      , f = d && d.renderer
                                      , l = null;
                                    !f || !f.url || !0 === f.backupOnly && f.render ? !u || !u.url || !0 === u.backupOnly && n.renderer || (l = u) : l = f,
                                    l && (a.renderer = _.a.install({
                                        url: l.url
                                    }),
                                    a.renderer.setRender(l.render));
                                    var p = Z(n.mediaType, c, B.b.getConfig("mediaTypePriceGranularity"))
                                      , g = Object(w.a)(a.cpm, "object" === k(p) ? p : B.b.getConfig("customPriceBucket"), B.b.getConfig("currency.granularityMultiplier"));
                                    return a.pbLg = g.low,
                                    a.pbMg = g.med,
                                    a.pbHg = g.high,
                                    a.pbAg = g.auto,
                                    a.pbDg = g.dense,
                                    a.pbCg = g.custom,
                                    a
                                }({
                                    adUnitCode: e,
                                    bid: t,
                                    bidderRequest: this,
                                    auctionId: i.getAuctionId()
                                });
                                "video" === n.mediaType ? function(e, t, n, r) {
                                    var i = !0
                                      , o = Object(j.getBidRequest)(t.requestId, [n])
                                      , a = o && Object(j.deepAccess)(o, "mediaTypes.video")
                                      , c = a && Object(j.deepAccess)(a, "context");
                                    B.b.getConfig("cache.url") && c !== R.b && (t.videoCacheKey ? t.vastUrl || (P.logError("videoCacheKey specified but not required vastUrl for video bid"),
                                    i = !1) : (i = !1,
                                    X(e, t, r, o))),
                                    i && ($(e, t),
                                    r())
                                }(i, n, this, d) : ($(i, n),
                                d())
                            },
                            adapterDone: function() {
                                var t, e = i.getBidRequests(), n = B.b.getConfig("auctionOptions");
                                c.add(this),
                                !n || P.isEmpty(n) || (t = n.secondaryBidders) && !e.every(function(e) {
                                    return x()(t, e.bidderCode)
                                }) && (e = e.filter(function(e) {
                                    return !x()(t, e.bidderCode)
                                })),
                                a = e.every(function(e) {
                                    return c.has(e)
                                }),
                                this.bids.forEach(function(e) {
                                    u[e.bidId] || (i.addNoBid(e),
                                    M.emit(G.EVENTS.NO_BID, e))
                                }),
                                a && 0 === o && r()
                            }
                        });
                        function d() {
                            o--,
                            a && 0 === o && r()
                        }
                        q.callBids(y, n, function() {
                            for (var e = arguments.length, t = new Array(e), n = 0; n < e; n++)
                                t[n] = arguments[n];
                            J.apply({
                                dispatch: s.addBidResponse,
                                bidderRequest: this
                            }, t)
                        }, s.adapterDone, {
                            request: function(e, t) {
                                g(V, t),
                                g(l, e),
                                H[e] || (H[e] = {
                                    SRA: !0,
                                    origin: t
                                }),
                                1 < l[e] && (H[e].SRA = !1)
                            },
                            done: function(e) {
                                V[e]--,
                                K[0] && p(K[0]) && K.shift()
                            }
                        }, m, I)
                    }
                };
                function p(e) {
                    var r = !0
                      , i = B.b.getConfig("maxRequestsPerOrigin") || z;
                    return e.bidRequests.some(function(e) {
                        var t = 1
                          , n = void 0 !== e.src && e.src === G.S2S.SRC ? "s2s" : e.bidderCode;
                        return H[n] && (!1 === H[n].SRA && (t = Math.min(e.bids.length, i)),
                        V[H[n].origin] + t > i && (r = !1)),
                        !r
                    }),
                    r && e.run(),
                    r
                }
                function g(e, t) {
                    void 0 === e[t] ? e[t] = 1 : e[t]++
                }
                p(e) || (P.logWarn("queueing auction due to limited endpoint capacity"),
                K.push(e))
            }
            return {
                addBidReceived: function(e) {
                    f = f.concat(e)
                },
                addNoBid: function(e) {
                    l = l.concat(e)
                },
                executeCallback: O,
                callBids: function() {
                    b = W,
                    t = Date.now();
                    var e = q.makeBidRequests(y, t, p, m, s);
                    P.logInfo("Bids Requested for Auction with id: ".concat(p), e),
                    e.length < 1 ? (P.logWarn("No valid bid requests returned for auction"),
                    T()) : Y.call({
                        dispatch: C,
                        context: this
                    }, e)
                },
                addWinningBid: function(e) {
                    S = S.concat(e),
                    q.callBidWonBidder(e.bidder, e, o)
                },
                setBidTargeting: function(e) {
                    q.callSetTargetingBidder(e.bidder, e)
                },
                getWinningBids: function() {
                    return S
                },
                getTimeout: function() {
                    return m
                },
                getAuctionId: function() {
                    return p
                },
                getAuctionStatus: function() {
                    return b
                },
                getAdUnits: function() {
                    return y
                },
                getAdUnitCodes: function() {
                    return d
                },
                getBidRequests: function() {
                    return h
                },
                getBidsReceived: function() {
                    return f
                },
                getNoBids: function() {
                    return l
                }
            }
        }
        ,
        n.d(t, "c", function() {
            return J
        }),
        n.d(t, "e", function() {
            return Y
        }),
        t.g = d,
        t.d = $,
        n.d(t, "f", function() {
            return X
        }),
        n.d(t, "i", function() {
            return f
        }),
        n.d(t, "h", function() {
            return l
        }),
        t.j = p;
        var j = n(0)
          , w = n(45)
          , a = n(37)
          , o = n(94)
          , _ = n(11)
          , B = n(3)
          , r = n(43)
          , i = n(13)
          , c = n(10)
          , U = n.n(c)
          , u = n(12)
          , x = n.n(u)
          , R = n(25)
          , s = n(2);
        function k(e) {
            return (k = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
                return typeof e
            }
            : function(e) {
                return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
            }
            )(e)
        }
        function D() {
            return (D = Object.assign || function(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var n = arguments[t];
                    for (var r in n)
                        Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r])
                }
                return e
            }
            ).apply(this, arguments)
        }
        var N = r.a.syncUsers
          , P = n(0)
          , q = n(8).default
          , M = n(9)
          , G = n(5)
          , W = "started"
          , L = "inProgress"
          , F = "completed";
        M.on(G.EVENTS.BID_ADJUSTMENT, function(e) {
            !function(e) {
                var t, n = e.bidderCode, r = e.cpm;
                if (atdpbjs.bidderSettings && (n && atdpbjs.bidderSettings[n] && "function" == typeof atdpbjs.bidderSettings[n].bidCpmAdjustment ? t = atdpbjs.bidderSettings[n].bidCpmAdjustment : atdpbjs.bidderSettings[G.JSON_MAPPING.BD_SETTING_STANDARD] && "function" == typeof atdpbjs.bidderSettings[G.JSON_MAPPING.BD_SETTING_STANDARD].bidCpmAdjustment && (t = atdpbjs.bidderSettings[G.JSON_MAPPING.BD_SETTING_STANDARD].bidCpmAdjustment),
                t))
                    try {
                        r = t(e.cpm, D({}, e))
                    } catch (e) {
                        P.logError("Error during bid adjustment", "bidmanager.js", e)
                    }
                0 <= r && (e.cpm = r)
            }(e)
        });
        var z = 4
          , V = {}
          , H = {}
          , K = [];
        var J = Object(i.b)("async", function(e, t) {
            this.dispatch.call(this.bidderRequest, e, t)
        }, "addBidResponse")
          , Y = Object(i.b)("sync", function(e) {
            this.dispatch.call(this.context, e)
        }, "addBidderRequests")
          , Q = Object(i.b)("async", function(e, t) {
            t && t()
        }, "bidsBackCallback");
        function d(e, t) {
            t.timeToRespond > e.getTimeout() + B.b.getConfig("timeoutBuffer") && e.executeCallback(!0)
        }
        function $(e, t) {
            var n = e.getBidRequests()
              , r = U()(n, function(e) {
                return e.bidderCode === t.bidderCode
            });
            !function(t, e) {
                var n;
                {
                    var r;
                    t.bidderCode && (0 < t.cpm || t.dealId) && (r = U()(e.bids, function(e) {
                        return e.adUnitCode === t.adUnitCode
                    }),
                    n = function(e, t, n) {
                        if (!t)
                            return {};
                        var r = {}
                          , i = atdpbjs.bidderSettings;
                        {
                            var o;
                            i && (o = p(t.mediaType, e, n),
                            g(r, o, t),
                            e && i[e] && i[e][G.JSON_MAPPING.ADSERVER_TARGETING] && (g(r, i[e], t),
                            t.sendStandardTargeting = i[e].sendStandardTargeting))
                        }
                        t.native && (r = D({}, r, Object(a.d)(t, n)));
                        return r
                    }(t.bidderCode, t, r))
                }
                t.adserverTargeting = D(t.adserverTargeting || {}, n)
            }(t, r),
            M.emit(G.EVENTS.BID_RESPONSE, t),
            e.addBidReceived(t),
            d(e, t)
        }
        var X = Object(i.b)("async", function(n, r, i, e) {
            Object(o.b)([r], function(e, t) {
                e ? (P.logWarn("Failed to save to the video cache: ".concat(e, ". Video bid must be discarded.")),
                d(n, r)) : "" === t[0].uuid ? (P.logWarn("Supplied video cache key was already in use by Prebid Cache; caching attempt was rejected. Video bid must be discarded."),
                d(n, r)) : (r.videoCacheKey = t[0].uuid,
                r.vastUrl || (r.vastUrl = Object(o.a)(r.videoCacheKey)),
                $(n, r),
                i())
            }, e)
        }, "callPrebidCache");
        function Z(e, t, n) {
            if (e && n) {
                if (e === s.d) {
                    var r = Object(j.deepAccess)(t, "mediaTypes.".concat(s.d, ".context"), "instream");
                    if (n["".concat(s.d, "-").concat(r)])
                        return n["".concat(s.d, "-").concat(r)]
                }
                return n[e]
            }
        }
        var f = function(e, t) {
            var n = Z(e, t, B.b.getConfig("mediaTypePriceGranularity"));
            return "string" == typeof e && n ? "string" == typeof n ? n : "custom" : B.b.getConfig("priceGranularity")
        }
          , l = function(t) {
            return function(e) {
                return t === G.GRANULARITY_OPTIONS.AUTO ? e.pbAg : t === G.GRANULARITY_OPTIONS.DENSE ? e.pbDg : t === G.GRANULARITY_OPTIONS.LOW ? e.pbLg : t === G.GRANULARITY_OPTIONS.MEDIUM ? e.pbMg : t === G.GRANULARITY_OPTIONS.HIGH ? e.pbHg : t === G.GRANULARITY_OPTIONS.CUSTOM ? e.pbCg : void 0
            }
        };
        function p(e, t, n) {
            function r(e, t) {
                return {
                    key: e,
                    val: "function" == typeof t ? function(e) {
                        return t(e)
                    }
                    : function(e) {
                        return Object(j.getValue)(e, t)
                    }
                }
            }
            var i, o, a = G.TARGETING_KEYS, c = f(e, n), u = atdpbjs.bidderSettings;
            return u[G.JSON_MAPPING.BD_SETTING_STANDARD] || (u[G.JSON_MAPPING.BD_SETTING_STANDARD] = {}),
            u[G.JSON_MAPPING.BD_SETTING_STANDARD][G.JSON_MAPPING.ADSERVER_TARGETING] || (u[G.JSON_MAPPING.BD_SETTING_STANDARD][G.JSON_MAPPING.ADSERVER_TARGETING] = [r(a.BIDDER, "bidderCode"), r(a.AD_ID, "adId"), r(a.PRICE_BUCKET, l(c)), r(a.SIZE, "size"), r(a.DEAL, "dealId"), r(a.SOURCE, "source"), r(a.FORMAT, "mediaType")]),
            "video" === e && (i = u[G.JSON_MAPPING.BD_SETTING_STANDARD][G.JSON_MAPPING.ADSERVER_TARGETING],
            [a.UUID, a.CACHE_ID].forEach(function(t) {
                void 0 === U()(i, function(e) {
                    return e.key === t
                }) && i.push(r(t, "videoCacheKey"))
            }),
            !B.b.getConfig("cache.url") || t && !1 === P.deepAccess(u, "".concat(t, ".sendStandardTargeting")) || (o = Object(j.parseUrl)(B.b.getConfig("cache.url")),
            void 0 === U()(i, function(e) {
                return e.key === a.CACHE_HOST
            }) && i.push(r(a.CACHE_HOST, function(e) {
                return P.deepAccess(e, "adserverTargeting.".concat(a.CACHE_HOST)) ? e.adserverTargeting[a.CACHE_HOST] : o.hostname
            })))),
            u[G.JSON_MAPPING.BD_SETTING_STANDARD]
        }
        function g(r, i, o) {
            var e = i[G.JSON_MAPPING.ADSERVER_TARGETING];
            return o.size = o.getSize(),
            P._each(e, function(e) {
                var t = e.key
                  , n = e.val;
                if (r[t] && P.logWarn("The key: " + t + " is getting ovewritten"),
                P.isFn(n))
                    try {
                        n = n(o)
                    } catch (e) {
                        P.logError("bidmanager", "ERROR", e)
                    }
                (void 0 === i.suppressEmptyKeys || !0 !== i.suppressEmptyKeys) && t !== G.TARGETING_KEYS.DEAL || !P.isEmptyStr(n) && null != n ? r[t] = n : P.logInfo("suppressing empty key '" + t + "' from adserver targeting")
            }),
            r
        }
        function ee(e, t) {
            return e[t.adUnitCode] || (e[t.adUnitCode] = {
                bids: []
            }),
            e[t.adUnitCode].bids.push(t),
            e
        }
    },
    42: function(e, t) {
        e.exports = {}
    },
    43: function(e, t, n) {
        "use strict";
        n.d(t, "a", function() {
            return S
        });
        var a = n(0)
          , r = n(3)
          , i = n(12)
          , o = n.n(i)
          , c = n(7);
        function u(e, t) {
            return function(e) {
                if (Array.isArray(e))
                    return e
            }(e) || function(e, t) {
                if ("undefined" == typeof Symbol || !(Symbol.iterator in Object(e)))
                    return;
                var n = []
                  , r = !0
                  , i = !1
                  , o = void 0;
                try {
                    for (var a, c = e[Symbol.iterator](); !(r = (a = c.next()).done) && (n.push(a.value),
                    !t || n.length !== t); r = !0)
                        ;
                } catch (e) {
                    i = !0,
                    o = e
                } finally {
                    try {
                        r || null == c.return || c.return()
                    } finally {
                        if (i)
                            throw o
                    }
                }
                return n
            }(e, t) || function(e, t) {
                if (!e)
                    return;
                if ("string" == typeof e)
                    return s(e, t);
                var n = Object.prototype.toString.call(e).slice(8, -1);
                "Object" === n && e.constructor && (n = e.constructor.name);
                if ("Map" === n || "Set" === n)
                    return Array.from(e);
                if ("Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))
                    return s(e, t)
            }(e, t) || function() {
                throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
            }()
        }
        function s(e, t) {
            (null == t || t > e.length) && (t = e.length);
            for (var n = 0, r = new Array(t); n < t; n++)
                r[n] = e[n];
            return r
        }
        function d() {
            return (d = Object.assign || function(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var n = arguments[t];
                    for (var r in n)
                        Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r])
                }
                return e
            }
            ).apply(this, arguments)
        }
        r.b.setDefaults({
            userSync: a.deepClone({
                syncEnabled: !0,
                filterSettings: {
                    image: {
                        bidders: "*",
                        filter: "include"
                    }
                },
                syncsPerBidder: 5,
                syncDelay: 3e3,
                auctionDelay: 0
            })
        });
        var f = Object(c.a)("usersync");
        var l, p, g, b, v, y, h, m = !a.isSafariBrowser() && f.cookiesAreEnabled(), S = (l = {
            config: r.b.getConfig("userSync"),
            browserSupportsCookies: m
        },
        p = {},
        g = A(),
        b = new Set,
        y = {
            image: !0,
            iframe: !(v = {})
        },
        h = l.config,
        r.b.getConfig("userSync", function(e) {
            var t;
            e.userSync && (t = e.userSync.filterSettings,
            a.isPlainObject(t) && (t.image || t.all || (e.userSync.filterSettings.image = {
                bidders: "*",
                filter: "include"
            }))),
            h = d(h, e.userSync)
        }),
        p.registerSync = function(e, t, n) {
            return b.has(t) ? a.logMessage('already fired syncs for "'.concat(t, '", ignoring registerSync call')) : h.syncEnabled && a.isArray(g[e]) ? t ? 0 !== h.syncsPerBidder && Number(v[t]) >= h.syncsPerBidder ? a.logWarn('Number of user syncs exceeded for "'.concat(t, '"')) : p.canBidderRegisterSync(e, t) ? (g[e].push([t, n]),
            (r = v)[i = t] ? r[i] += 1 : r[i] = 1,
            void (v = r)) : a.logWarn('Bidder "'.concat(t, '" not permitted to register their "').concat(e, '" userSync pixels.')) : a.logWarn("Bidder is required for registering sync") : a.logWarn('User sync type "'.concat(e, '" not supported'));
            var r, i
        }
        ,
        p.syncUsers = function() {
            var e = 0 < arguments.length && void 0 !== arguments[0] ? arguments[0] : 0;
            if (e)
                return setTimeout(E, Number(e));
            E()
        }
        ,
        p.triggerUserSyncs = function() {
            h.enableOverride && p.syncUsers()
        }
        ,
        p.canBidderRegisterSync = function(e, t) {
            return !h.filterSettings || !T(e, t)
        }
        ,
        p);
        function A() {
            return {
                image: [],
                iframe: []
            }
        }
        function E() {
            if (h.syncEnabled && l.browserSupportsCookies) {
                try {
                    !function() {
                        if (!y.image)
                            return;
                        O(g.image, function(e) {
                            var t = u(e, 2)
                              , n = t[0]
                              , r = t[1];
                            a.logMessage("Invoking image pixel user sync for bidder: ".concat(n)),
                            a.triggerPixel(r)
                        })
                    }(),
                    function() {
                        if (!y.iframe)
                            return;
                        O(g.iframe, function(e) {
                            var t = u(e, 2)
                              , n = t[0]
                              , r = t[1];
                            a.logMessage("Invoking iframe user sync for bidder: ".concat(n)),
                            a.insertUserSyncIframe(r)
                        })
                    }()
                } catch (e) {
                    return a.logError("Error firing user syncs", e)
                }
                g = A()
            }
        }
        function O(e, t) {
            a.shuffle(e).forEach(function(e) {
                t(e),
                b.add(e[0])
            })
        }
        function T(e, t) {
            var n = h.filterSettings;
            if (function(e, t) {
                if (e.all && e[t])
                    return a.logWarn('Detected presence of the "filterSettings.all" and "filterSettings.'.concat(t, '" in userSync config.  You cannot mix "all" with "iframe/image" configs; they are mutually exclusive.')),
                    !1;
                var n = e.all ? e.all : e[t]
                  , r = e.all ? "all" : t;
                if (!n)
                    return !1;
                var i = n.filter
                  , o = n.bidders;
                if (i && "include" !== i && "exclude" !== i)
                    return a.logWarn('UserSync "filterSettings.'.concat(r, ".filter\" setting '").concat(i, "' is not a valid option; use either 'include' or 'exclude'.")),
                    !1;
                return !!("*" === o || Array.isArray(o) && 0 < o.length && o.every(function(e) {
                    return a.isStr(e) && "*" !== e
                })) || (a.logWarn('Detected an invalid setup in userSync "filterSettings.'.concat(r, ".bidders\"; use either '*' (to represent all bidders) or an array of bidders.")),
                !1)
            }(n, e)) {
                y[e] = !0;
                var r = n.all ? n.all : n[e]
                  , i = "*" === r.bidders ? [t] : r.bidders;
                return {
                    include: function(e, t) {
                        return !o()(e, t)
                    },
                    exclude: function(e, t) {
                        return o()(e, t)
                    }
                }[r.filter || "include"](i, t)
            }
        }
    },
    44: function(e, t, n) {
        "use strict";
        n.d(t, "a", function() {
            return f
        });
        var S = n(0)
          , A = n(3)
          , E = n(37)
          , r = n(23)
          , i = n(92)
          , o = n(2)
          , a = n(12)
          , O = n.n(a);
        function T() {
            return (T = Object.assign || function(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var n = arguments[t];
                    for (var r in n)
                        Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r])
                }
                return e
            }
            ).apply(this, arguments)
        }
        function I(e, t, n) {
            return t in e ? Object.defineProperty(e, t, {
                value: n,
                enumerable: !0,
                configurable: !0,
                writable: !0
            }) : e[t] = n,
            e
        }
        function C(e) {
            return function(e) {
                if (Array.isArray(e))
                    return c(e)
            }(e) || function(e) {
                if ("undefined" != typeof Symbol && Symbol.iterator in Object(e))
                    return Array.from(e)
            }(e) || function(e, t) {
                if (!e)
                    return;
                if ("string" == typeof e)
                    return c(e, t);
                var n = Object.prototype.toString.call(e).slice(8, -1);
                "Object" === n && e.constructor && (n = e.constructor.name);
                if ("Map" === n || "Set" === n)
                    return Array.from(e);
                if ("Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))
                    return c(e, t)
            }(e) || function() {
                throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
            }()
        }
        function c(e, t) {
            (null == t || t > e.length) && (t = e.length);
            for (var n = 0, r = new Array(t); n < t; n++)
                r[n] = e[n];
            return r
        }
        var j = n(0)
          , w = n(5)
          , _ = []
          , B = Object.keys(w.TARGETING_KEYS).map(function(e) {
            return w.TARGETING_KEYS[e]
        })
          , u = function(e) {
            return e.responseTimestamp + 1e3 * e.ttl + 1e3 > Object(S.timestamp)()
        }
          , s = function(e) {
            return e && (e.status && !O()([w.BID_STATUS.RENDERED], e.status) || !e.status)
        };
        function U(e, r, t) {
            var i = 2 < arguments.length && void 0 !== t ? t : 0
              , o = []
              , a = A.b.getConfig("sendBidsControl.dealPrioritization")
              , c = Object(S.groupBy)(e, "adUnitCode");
            return Object.keys(c).forEach(function(e) {
                var t = []
                  , n = Object(S.groupBy)(c[e], "bidderCode");
                Object.keys(n).forEach(function(e) {
                    return t.push(n[e].reduce(r))
                }),
                0 < i ? (t = a ? t.sort(x(!0)) : t.sort(function(e, t) {
                    return t.cpm - e.cpm
                }),
                o.push.apply(o, C(t.slice(0, i)))) : o.push.apply(o, C(t))
            }),
            o
        }
        function x(e) {
            var n = 0 < arguments.length && void 0 !== e && e;
            return function(e, t) {
                return void 0 !== e.adserverTargeting.hb_deal && void 0 === t.adserverTargeting.hb_deal ? -1 : void 0 === e.adserverTargeting.hb_deal && void 0 !== t.adserverTargeting.hb_deal ? 1 : n ? t.cpm - e.cpm : t.adserverTargeting.hb_pb - e.adserverTargeting.hb_pb
            }
        }
        var R, k, d, f = (R = r.a,
        d = {},
        (k = {}).setLatestAuctionForAdUnit = function(e, t) {
            d[e] = t
        }
        ,
        k.resetPresetTargeting = function(e, t) {
            var n, i;
            Object(S.isGptPubadsDefined)() && (n = N(e),
            i = R.getAdUnits().filter(function(e) {
                return O()(n, e.code)
            }),
            window.googletag.pubads().getSlots().forEach(function(n) {
                var r = j.isFn(t) && t(n);
                _.forEach(function(t) {
                    i.forEach(function(e) {
                        (e.code === n.getAdUnitPath() || e.code === n.getSlotElementId() || j.isFn(r) && r(e.code)) && n.setTargeting(t, null)
                    })
                })
            }))
        }
        ,
        k.resetPresetTargetingAST = function(e) {
            N(e).forEach(function(e) {
                var t, n, r = window.apntag.getTag(e);
                r && r.keywords && (t = Object.keys(r.keywords),
                n = {},
                t.forEach(function(e) {
                    O()(_, e.toLowerCase()) || (n[e] = r.keywords[e])
                }),
                window.apntag.modifyTag(e, {
                    keywords: n
                }))
            })
        }
        ,
        k.getAllTargeting = function(e) {
            var t, n, r, i, o, a, c, u, s, d, f = 1 < arguments.length && void 0 !== arguments[1] ? arguments[1] : P(), l = N(e), p = (c = l,
            u = f,
            s = k.getWinningBids(c, u),
            d = q(),
            (s = s.map(function(o) {
                return I({}, o.adUnitCode, Object.keys(o.adserverTargeting).filter(function(e) {
                    return void 0 === o.sendStandardTargeting || o.sendStandardTargeting || -1 === d.indexOf(e)
                }).reduce(function(e, t) {
                    var n = [o.adserverTargeting[t]]
                      , r = I({}, t.substring(0, 20), n);
                    if (t !== w.TARGETING_KEYS.DEAL)
                        return [].concat(C(e), [r]);
                    var i = I({}, "".concat(t, "_").concat(o.bidderCode).substring(0, 20), n);
                    return [].concat(C(e), [r, i])
                }, []))
            })).concat((a = l,
            f.filter(function(e) {
                return O()(a, e.adUnitCode)
            }).map(function(e) {
                return T({}, e)
            }).reduce(M, []).map(G).filter(function(e) {
                return e
            }))).concat(A.b.getConfig("enableSendAllBids") ? (n = l,
            r = f,
            i = B.concat(E.a),
            o = A.b.getConfig("sendBidsControl.bidLimit"),
            U(r, S.getHighestCpm, o).map(function(t) {
                if (D(t, n))
                    return I({}, t.adUnitCode, W(t, i.filter(function(e) {
                        return void 0 !== t.adserverTargeting[e]
                    })))
            }).filter(function(e) {
                return e
            })) : function(e, t) {
                if (!0 !== A.b.getConfig("targetingControls.alwaysIncludeDeals"))
                    return [];
                var n = B.concat(E.a);
                return U(t, S.getHighestCpm).map(function(t) {
                    if (t.dealId && D(t, e))
                        return I({}, t.adUnitCode, W(t, n.filter(function(e) {
                            return void 0 !== t.adserverTargeting[e]
                        })))
                }).filter(function(e) {
                    return e
                })
            }(l, f)).concat((t = l,
            R.getAdUnits().filter(function(e) {
                return O()(t, e.code) && g(e)
            }).map(function(e) {
                return I({}, e.code, (t = g(e),
                Object.keys(t).map(function(e) {
                    return I({}, e, j.isArray(t[e]) ? t[e] : t[e].split(","))
                })));
                var t
            }))));
            function g(e) {
                return Object(S.deepAccess)(e, w.JSON_MAPPING.ADSERVER_TARGETING)
            }
            p.map(function(t) {
                Object.keys(t).map(function(e) {
                    t[e].map(function(e) {
                        -1 === _.indexOf(Object.keys(e)[0]) && (_ = Object.keys(e).concat(_))
                    })
                })
            });
            var b = A.b.getConfig("targetingControls.allowTargetingKeys");
            Array.isArray(b) && 0 < b.length && (p = function(e, r) {
                var i = T({}, w.TARGETING_KEYS, w.NATIVE_KEYS)
                  , o = Object.keys(i)
                  , a = {};
                Object(S.logInfo)("allowTargetingKeys - allowed keys [ ".concat(r.map(function(e) {
                    return i[e]
                }).join(", "), " ]")),
                e.map(function(e) {
                    var t = Object.keys(e)[0]
                      , n = e[t].filter(function(e) {
                        var n = Object.keys(e)[0]
                          , t = 0 === o.filter(function(e) {
                            return 0 === n.indexOf(i[e])
                        }).length || r.find(function(e) {
                            var t = i[e];
                            return 0 === n.indexOf(t)
                        });
                        return a[n] = !t,
                        t
                    });
                    e[t] = n
                });
                var t = Object.keys(a).filter(function(e) {
                    return a[e]
                });
                return Object(S.logInfo)("allowTargetingKeys - removed keys [ ".concat(t.join(", "), " ]")),
                e.filter(function(e) {
                    return 0 < e[Object.keys(e)[0]].length
                })
            }(p, b)),
            p = p.map(function(e) {
                return I({}, Object.keys(e)[0], e[Object.keys(e)[0]].map(function(e) {
                    return I({}, Object.keys(e)[0], e[Object.keys(e)[0]].join(", "))
                }).reduce(function(e, t) {
                    return T(t, e)
                }, {}))
            }).reduce(function(e, t) {
                var n = Object.keys(t)[0];
                return e[n] = T({}, e[n], t[n]),
                e
            }, {});
            var v, y, h, m = A.b.getConfig("targetingControls.auctionKeyMaxChars");
            return m && (Object(S.logInfo)("Detected 'targetingControls.auctionKeyMaxChars' was active for this auction; set with a limit of ".concat(m, " characters.  Running checks on auction keys...")),
            v = p,
            y = m,
            h = Object(S.deepClone)(v),
            p = Object.keys(h).map(function(e) {
                return {
                    adUnitCode: e,
                    adserverTargeting: h[e]
                }
            }).sort(x()).reduce(function(e, t, n, r) {
                var i, o = (i = t.adserverTargeting,
                Object.keys(i).reduce(function(e, t) {
                    return e + "".concat(t, "%3d").concat(encodeURIComponent(i[t]), "%26")
                }, ""));
                n + 1 === r.length && (o = o.slice(0, -3));
                var a = t.adUnitCode
                  , c = o.length;
                return c <= y ? (y -= c,
                Object(S.logInfo)("AdUnit '".concat(a, "' auction keys comprised of ").concat(c, " characters.  Deducted from running threshold; new limit is ").concat(y), h[a]),
                e[a] = h[a]) : Object(S.logWarn)("The following keys for adUnitCode '".concat(a, "' exceeded the current limit of the 'auctionKeyMaxChars' setting.\nThe key-set size was ").concat(c, ", the current allotted amount was ").concat(y, ".\n"), h[a]),
                n + 1 === r.length && 0 === Object.keys(e).length && Object(S.logError)("No auction targeting keys were permitted due to the setting in setConfig(targetingControls.auctionKeyMaxChars).  Please review setup and consider adjusting."),
                e
            }, {})),
            l.forEach(function(e) {
                p[e] || (p[e] = {})
            }),
            p
        }
        ,
        k.setTargetingForGPT = function(i, e) {
            window.googletag.pubads().getSlots().forEach(function(r) {
                Object.keys(i).filter((e || Object(S.isAdUnitCodeMatchingSlot))(r)).forEach(function(n) {
                    return Object.keys(i[n]).forEach(function(t) {
                        var e = i[n][t];
                        "string" == typeof e && (e = e.split(",")),
                        (e = 1 < e.length ? [e] : e).map(function(e) {
                            return j.logMessage("Attempting to set key value for slot: ".concat(r.getSlotElementId(), " key: ").concat(t, " value: ").concat(e)),
                            e
                        }).forEach(function(e) {
                            r.setTargeting(t, e)
                        })
                    })
                })
            })
        }
        ,
        k.getWinningBids = function(e) {
            var n = 1 < arguments.length && void 0 !== arguments[1] ? arguments[1] : P()
              , t = N(e);
            return n.filter(function(e) {
                return O()(t, e.adUnitCode)
            }).filter(function(e) {
                return 0 < e.cpm
            }).map(function(e) {
                return e.adUnitCode
            }).filter(S.uniques).map(function(t) {
                return n.filter(function(e) {
                    return e.adUnitCode === t ? e : null
                }).reduce(S.getHighestCpm)
            })
        }
        ,
        k.setTargetingForAst = function(e) {
            var r = k.getAllTargeting(e);
            try {
                k.resetPresetTargetingAST(e)
            } catch (e) {
                j.logError("unable to reset targeting for AST" + e)
            }
            Object.keys(r).forEach(function(n) {
                return Object.keys(r[n]).forEach(function(e) {
                    var t;
                    j.logMessage("Attempting to set targeting for targetId: ".concat(n, " key: ").concat(e, " value: ").concat(r[n][e])),
                    (j.isStr(r[n][e]) || j.isArray(r[n][e])) && (t = {},
                    e.search(/pt[0-9]/) < 0 ? t[e.toUpperCase()] = r[n][e] : t[e] = r[n][e],
                    window.apntag.setKeywords(n, t, {
                        overrideKeyValue: !0
                    }))
                })
            })
        }
        ,
        k.isApntagDefined = function() {
            if (window.apntag && j.isFn(window.apntag.setKeywords))
                return !0
        }
        ,
        k);
        function D(e, t) {
            return e.adserverTargeting && t && (j.isArray(t) && O()(t, e.adUnitCode) || "string" == typeof t && e.adUnitCode === t)
        }
        function N(e) {
            return "string" == typeof e ? [e] : j.isArray(e) ? e : R.getAdUnitCodes() || []
        }
        function P() {
            var e = R.getBidsReceived();
            return A.b.getConfig("useBidCache") || (e = e.filter(function(e) {
                return d[e.adUnitCode] === e.auctionId
            })),
            U(e = e.filter(function(e) {
                return Object(S.deepAccess)(e, "video.context") !== o.a
            }).filter(function(e) {
                return "banner" !== e.mediaType || Object(i.c)([e.width, e.height])
            }).filter(s).filter(u), S.getOldestHighestCpmBid)
        }
        function q() {
            return R.getStandardBidderAdServerTargeting().map(function(e) {
                return e.key
            }).concat(B).filter(S.uniques)
        }
        function M(r, i, e, t) {
            return Object.keys(i.adserverTargeting).filter(l()).forEach(function(e) {
                var t, n;
                r.length && r.filter((n = e,
                function(e) {
                    return e.adUnitCode === i.adUnitCode && e.adserverTargeting[n]
                }
                )).forEach((t = e,
                function(e) {
                    j.isArray(e.adserverTargeting[t]) || (e.adserverTargeting[t] = [e.adserverTargeting[t]]),
                    e.adserverTargeting[t] = e.adserverTargeting[t].concat(i.adserverTargeting[t]).filter(S.uniques),
                    delete i.adserverTargeting[t]
                }
                ))
            }),
            r.push(i),
            r
        }
        function l() {
            var t = q().concat(E.a);
            return function(e) {
                return -1 === t.indexOf(e)
            }
        }
        function G(t) {
            return I({}, t.adUnitCode, Object.keys(t.adserverTargeting).filter(l()).map(function(e) {
                return I({}, e.substring(0, 20), [t.adserverTargeting[e]])
            }))
        }
        function W(t, e) {
            return e.map(function(e) {
                return I({}, "".concat(e, "_").concat(t.bidderCode).substring(0, 20), [t.adserverTargeting[e]])
            })
        }
    },
    45: function(e, t, n) {
        "use strict";
        n.d(t, "a", function() {
            return d
        }),
        n.d(t, "b", function() {
            return h
        });
        var r = n(10)
          , v = n.n(r)
          , i = n(0)
          , y = 2
          , o = {
            buckets: [{
                max: 5,
                increment: .5
            }]
        }
          , a = {
            buckets: [{
                max: 20,
                increment: .1
            }]
        }
          , c = {
            buckets: [{
                max: 20,
                increment: .01
            }]
        }
          , u = {
            buckets: [{
                max: 3,
                increment: .01
            }, {
                max: 8,
                increment: .05
            }, {
                max: 20,
                increment: .5
            }]
        }
          , s = {
            buckets: [{
                max: 5,
                increment: .05
            }, {
                max: 10,
                increment: .1
            }, {
                max: 20,
                increment: .5
            }]
        };
        function d(e, t) {
            var n = 2 < arguments.length && void 0 !== arguments[2] ? arguments[2] : 1
              , r = parseFloat(e);
            return isNaN(r) && (r = ""),
            {
                low: "" === r ? "" : f(e, o, n),
                med: "" === r ? "" : f(e, a, n),
                high: "" === r ? "" : f(e, c, n),
                auto: "" === r ? "" : f(e, s, n),
                dense: "" === r ? "" : f(e, u, n),
                custom: "" === r ? "" : f(e, t, n)
            }
        }
        function f(n, e, r) {
            var i = "";
            if (!h(e))
                return i;
            var t, o, a, c, u, s, d, f, l, p = e.buckets.reduce(function(e, t) {
                return e.max > t.max ? e : t
            }, {
                max: 0
            }), g = 0, b = v()(e.buckets, function(e) {
                if (n > p.max * r) {
                    var t = e.precision;
                    void 0 === t && (t = y),
                    i = (e.max * r).toFixed(t)
                } else {
                    if (n <= e.max * r && g * r <= n)
                        return e.min = g,
                        e;
                    g = e.max
                }
            });
            return b && (t = n,
            a = r,
            c = void 0 !== (o = b).precision ? o.precision : y,
            u = o.increment * a,
            s = o.min * a,
            d = Math.pow(10, c + 2),
            f = (t * d - s * d) / (u * d),
            l = Math.floor(f) * u + s,
            i = (l = Number(l.toFixed(10))).toFixed(c)),
            i
        }
        function h(e) {
            if (i.isEmpty(e) || !e.buckets || !Array.isArray(e.buckets))
                return !1;
            var t = !0;
            return e.buckets.forEach(function(e) {
                e.max && e.increment || (t = !1)
            }),
            t
        }
    },
    46: function(e, t) {
        e.exports = function(e, t) {
            return {
                enumerable: !(1 & e),
                configurable: !(2 & e),
                writable: !(4 & e),
                value: t
            }
        }
    },
    47: function(e, t, n) {
        var r = n(71)
          , i = n(49);
        e.exports = function(e) {
            return r(i(e))
        }
    },
    48: function(e, t) {
        var n = {}.toString;
        e.exports = function(e) {
            return n.call(e).slice(8, -1)
        }
    },
    49: function(e, t) {
        e.exports = function(e) {
            if (null == e)
                throw TypeError("Can't call method on " + e);
            return e
        }
    },
    5: function(e, t) {
        e.exports = {
            JSON_MAPPING: {
                PL_CODE: "code",
                PL_SIZE: "sizes",
                PL_BIDS: "bids",
                BD_BIDDER: "bidder",
                BD_ID: "paramsd",
                BD_PL_ID: "placementId",
                ADSERVER_TARGETING: "adserverTargeting",
                BD_SETTING_STANDARD: "standard"
            },
            DEBUG_MODE: "pbjs_debug",
            STATUS: {
                GOOD: 1,
                NO_BID: 2
            },
            CB: {
                TYPE: {
                    ALL_BIDS_BACK: "allRequestedBidsBack",
                    AD_UNIT_BIDS_BACK: "adUnitBidsBack",
                    BID_WON: "bidWon",
                    REQUEST_BIDS: "requestBids"
                }
            },
            EVENTS: {
                AUCTION_INIT: "auctionInit",
                AUCTION_END: "auctionEnd",
                BID_ADJUSTMENT: "bidAdjustment",
                BID_TIMEOUT: "bidTimeout",
                BID_REQUESTED: "bidRequested",
                BID_RESPONSE: "bidResponse",
                NO_BID: "noBid",
                BID_WON: "bidWon",
                BIDDER_DONE: "bidderDone",
                SET_TARGETING: "setTargeting",
                BEFORE_REQUEST_BIDS: "beforeRequestBids",
                REQUEST_BIDS: "requestBids",
                ADD_AD_UNITS: "addAdUnits",
                AD_RENDER_FAILED: "adRenderFailed",
                TCF2_ENFORCEMENT: "tcf2Enforcement",
                AUCTION_DEBUG: "auctionDebug"
            },
            AD_RENDER_FAILED_REASON: {
                PREVENT_WRITING_ON_MAIN_DOCUMENT: "preventWritingOnMainDocument",
                NO_AD: "noAd",
                EXCEPTION: "exception",
                CANNOT_FIND_AD: "cannotFindAd",
                MISSING_DOC_OR_ADID: "missingDocOrAdid"
            },
            EVENT_ID_PATHS: {
                bidWon: "adUnitCode"
            },
            GRANULARITY_OPTIONS: {
                LOW: "low",
                MEDIUM: "medium",
                HIGH: "high",
                AUTO: "auto",
                DENSE: "dense",
                CUSTOM: "custom"
            },
            TARGETING_KEYS: {
                BIDDER: "hb_bidder",
                AD_ID: "hb_adid",
                PRICE_BUCKET: "hb_pb",
                SIZE: "hb_size",
                DEAL: "hb_deal",
                SOURCE: "hb_source",
                FORMAT: "hb_format",
                UUID: "hb_uuid",
                CACHE_ID: "hb_cache_id",
                CACHE_HOST: "hb_cache_host"
            },
            NATIVE_KEYS: {
                title: "hb_native_title",
                body: "hb_native_body",
                body2: "hb_native_body2",
                privacyLink: "hb_native_privacy",
                privacyIcon: "hb_native_privicon",
                sponsoredBy: "hb_native_brand",
                image: "hb_native_image",
                icon: "hb_native_icon",
                clickUrl: "hb_native_linkurl",
                displayUrl: "hb_native_displayurl",
                cta: "hb_native_cta",
                rating: "hb_native_rating",
                address: "hb_native_address",
                downloads: "hb_native_downloads",
                likes: "hb_native_likes",
                phone: "hb_native_phone",
                price: "hb_native_price",
                salePrice: "hb_native_saleprice"
            },
            S2S: {
                SRC: "s2s",
                DEFAULT_ENDPOINT: "https://prebid.adnxs.com/pbs/v1/openrtb2/auction",
                SYNCED_BIDDERS_KEY: "pbjsSyncs"
            },
            BID_STATUS: {
                BID_TARGETING_SET: "targetingSet",
                RENDERED: "rendered",
                BID_REJECTED: "bidRejected"
            }
        }
    },
    50: function(e, t, n) {
        var r = n(58)
          , i = Math.min;
        e.exports = function(e) {
            return 0 < e ? i(r(e), 9007199254740991) : 0
        }
    },
    51: function(e, t) {
        e.exports = function() {}
    },
    511: function(e, t, n) {
        var r = n(512);
        e.exports = r
    },
    512: function(e, t, n) {
        n(513);
        var r = n(42);
        e.exports = r.Number.isInteger
    },
    513: function(e, t, n) {
        n(14)({
            target: "Number",
            stat: !0
        }, {
            isInteger: n(514)
        })
    },
    514: function(e, t, n) {
        var r = n(27)
          , i = Math.floor;
        e.exports = function(e) {
            return !r(e) && isFinite(e) && i(e) === e
        }
    },
    52: function(e, t, n) {
        var r = n(29);
        e.exports = r
    },
    53: function(e, t) {
        e.exports = {}
    },
    54: function(e, t, n) {
        var r, i, o, a, c, u, s, d, f = n(114), l = n(26), p = n(27), g = n(32), b = n(28), v = n(65), y = n(53), h = l.WeakMap;
        s = f ? (r = new h,
        i = r.get,
        o = r.has,
        a = r.set,
        c = function(e, t) {
            return a.call(r, e, t),
            t
        }
        ,
        u = function(e) {
            return i.call(r, e) || {}
        }
        ,
        function(e) {
            return o.call(r, e)
        }
        ) : (y[d = v("state")] = !0,
        c = function(e, t) {
            return g(e, d, t),
            t
        }
        ,
        u = function(e) {
            return b(e, d) ? e[d] : {}
        }
        ,
        function(e) {
            return b(e, d)
        }
        ),
        e.exports = {
            set: c,
            get: u,
            has: s,
            enforce: function(e) {
                return s(e) ? u(e) : c(e, {})
            },
            getterFor: function(n) {
                return function(e) {
                    var t;
                    if (!p(e) || (t = u(e)).type !== n)
                        throw TypeError("Incompatible receiver, " + n + " required");
                    return t
                }
            }
        }
    },
    55: function(e, t, n) {
        var i = n(27);
        e.exports = function(e, t) {
            if (!i(e))
                return e;
            var n, r;
            if (t && "function" == typeof (n = e.toString) && !i(r = n.call(e)))
                return r;
            if ("function" == typeof (n = e.valueOf) && !i(r = n.call(e)))
                return r;
            if (!t && "function" == typeof (n = e.toString) && !i(r = n.call(e)))
                return r;
            throw TypeError("Can't convert object to primitive value")
        }
    },
    56: function(e, t, n) {
        function r(p) {
            var g = 1 == p
              , b = 2 == p
              , v = 3 == p
              , y = 4 == p
              , h = 6 == p
              , m = 5 == p || h;
            return function(e, t, n, r) {
                for (var i, o, a = E(e), c = A(a), u = S(t, n, 3), s = O(c.length), d = 0, f = r || T, l = g ? f(e, s) : b ? f(e, 0) : void 0; d < s; d++)
                    if ((m || d in c) && (o = u(i = c[d], d, a),
                    p))
                        if (g)
                            l[d] = o;
                        else if (o)
                            switch (p) {
                            case 3:
                                return !0;
                            case 5:
                                return i;
                            case 6:
                                return d;
                            case 2:
                                I.call(l, i)
                            }
                        else if (y)
                            return !1;
                return h ? -1 : v || y ? y : l
            }
        }
        var S = n(24)
          , A = n(71)
          , E = n(57)
          , O = n(50)
          , T = n(102)
          , I = [].push;
        e.exports = {
            forEach: r(0),
            map: r(1),
            filter: r(2),
            some: r(3),
            every: r(4),
            find: r(5),
            findIndex: r(6)
        }
    },
    57: function(e, t, n) {
        var r = n(49);
        e.exports = function(e) {
            return Object(r(e))
        }
    },
    58: function(e, t) {
        var n = Math.ceil
          , r = Math.floor;
        e.exports = function(e) {
            return isNaN(e = +e) ? 0 : (0 < e ? r : n)(e)
        }
    },
    59: function(e, t) {
        var n = 0
          , r = Math.random();
        e.exports = function(e) {
            return "Symbol(" + String(void 0 === e ? "" : e) + ")_" + (++n + r).toString(36)
        }
    },
    60: function(e, t, n) {
        function a(e) {
            throw e
        }
        var c = n(30)
          , u = n(31)
          , s = n(28)
          , d = Object.defineProperty
          , f = {};
        e.exports = function(e, t) {
            if (s(f, e))
                return f[e];
            var n = [][e]
              , r = !!s(t = t || {}, "ACCESSORS") && t.ACCESSORS
              , i = s(t, 0) ? t[0] : a
              , o = s(t, 1) ? t[1] : void 0;
            return f[e] = !!n && !u(function() {
                if (r && !c)
                    return !0;
                var e = {
                    length: -1
                };
                r ? d(e, 1, {
                    enumerable: !0,
                    get: a
                }) : e[1] = 1,
                n.call(e, i, o)
            })
        }
    },
    61: function(e, t, n) {
        var r = n(62)
          , i = n(38)
          , o = n(21)("iterator");
        e.exports = function(e) {
            if (null != e)
                return e[o] || e["@@iterator"] || i[r(e)]
        }
    },
    62: function(e, t, n) {
        var r = n(63)
          , i = n(48)
          , o = n(21)("toStringTag")
          , a = "Arguments" == i(function() {
            return arguments
        }());
        e.exports = r ? i : function(e) {
            var t, n, r;
            return void 0 === e ? "Undefined" : null === e ? "Null" : "string" == typeof (n = function(e, t) {
                try {
                    return e[t]
                } catch (e) {}
            }(t = Object(e), o)) ? n : a ? i(t) : "Object" == (r = i(t)) && "function" == typeof t.callee ? "Arguments" : r
        }
    },
    63: function(e, t, n) {
        var r = {};
        r[n(21)("toStringTag")] = "z",
        e.exports = "[object z]" === String(r)
    },
    64: function(e, t, n) {
        var o = n(63)
          , a = n(33).f
          , c = n(32)
          , u = n(28)
          , s = n(113)
          , d = n(21)("toStringTag");
        e.exports = function(e, t, n, r) {
            var i;
            e && (i = n ? e : e.prototype,
            u(i, d) || a(i, d, {
                configurable: !0,
                value: t
            }),
            r && !o && c(i, "toString", s))
        }
    },
    65: function(e, t, n) {
        var r = n(74)
          , i = n(59)
          , o = r("keys");
        e.exports = function(e) {
            return o[e] || (o[e] = i(e))
        }
    },
    66: function(e, t, n) {
        "use strict";
        function y() {
            return this
        }
        var h = n(14)
          , m = n(122)
          , S = n(87)
          , A = n(124)
          , E = n(64)
          , O = n(32)
          , T = n(85)
          , r = n(21)
          , I = n(16)
          , C = n(38)
          , i = n(86)
          , j = i.IteratorPrototype
          , w = i.BUGGY_SAFARI_ITERATORS
          , _ = r("iterator")
          , B = "values"
          , U = "entries";
        e.exports = function(e, t, n, r, i, o, a) {
            m(n, t, r);
            function c(e) {
                if (e === i && b)
                    return b;
                if (!w && e in p)
                    return p[e];
                switch (e) {
                case "keys":
                case B:
                case U:
                    return function() {
                        return new n(this,e)
                    }
                }
                return function() {
                    return new n(this)
                }
            }
            var u, s, d, f = t + " Iterator", l = !1, p = e.prototype, g = p[_] || p["@@iterator"] || i && p[i], b = !w && g || c(i), v = "Array" == t && p.entries || g;
            if (v && (u = S(v.call(new e)),
            j !== Object.prototype && u.next && (I || S(u) === j || (A ? A(u, j) : "function" != typeof u[_] && O(u, _, y)),
            E(u, f, !0, !0),
            I && (C[f] = y))),
            i == B && g && g.name !== B && (l = !0,
            b = function() {
                return g.call(this)
            }
            ),
            I && !a || p[_] === b || O(p, _, b),
            C[t] = b,
            i)
                if (s = {
                    values: c(B),
                    keys: o ? b : c("keys"),
                    entries: c(U)
                },
                a)
                    for (d in s)
                        !w && !l && d in p || T(p, d, s[d]);
                else
                    h({
                        target: t,
                        proto: !0,
                        forced: w || l
                    }, s);
            return s
        }
    },
    67: function(e, t, n) {
        "use strict";
        n.d(t, "a", function() {
            return o
        });
        var r = n(0)
          , c = {};
        function i(e, t, n) {
            var r, i, o, a = (i = n,
            o = c[r = e] = c[r] || {
                bidders: {}
            },
            i ? o.bidders[i] = o.bidders[i] || {} : o);
            return a[t] = (a[t] || 0) + 1,
            a[t]
        }
        var o = {
            incrementRequestsCounter: function(e) {
                return i(e, "requestsCounter")
            },
            incrementBidderRequestsCounter: function(e, t) {
                return i(e, "requestsCounter", t)
            },
            incrementBidderWinsCounter: function(e, t) {
                return i(e, "winsCounter", t)
            },
            getRequestsCounter: function(e) {
                return Object(r.deepAccess)(c, "".concat(e, ".requestsCounter")) || 0
            },
            getBidderRequestsCounter: function(e, t) {
                return Object(r.deepAccess)(c, "".concat(e, ".bidders.").concat(t, ".requestsCounter")) || 0
            },
            getBidderWinsCounter: function(e, t) {
                return Object(r.deepAccess)(c, "".concat(e, ".bidders.").concat(t, ".winsCounter")) || 0
            }
        }
    },
    69: function(e, t, n) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        }),
        n.d(t, "adUnitSetupChecks", function() {
            return z
        }),
        n.d(t, "checkAdUnitSetup", function() {
            return V
        }),
        t.executeCallbacks = J;
        var r = n(20)
          , i = n(0)
          , o = n(229)
          , a = n(43)
          , d = n(3)
          , m = n(23)
          , f = n(44)
          , c = n(13)
          , u = n(230)
          , s = n(12)
          , l = n.n(s)
          , p = n(67)
          , S = n(11)
          , g = n(34)
          , b = n(7);
        function v(e) {
            return (v = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
                return typeof e
            }
            : function(e) {
                return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
            }
            )(e)
        }
        function y() {
            return (y = Object.assign || function(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var n = arguments[t];
                    for (var r in n)
                        Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r])
                }
                return e
            }
            ).apply(this, arguments)
        }
        var h = Object(r.a)()
          , A = n(5)
          , E = n(0)
          , O = n(8).default
          , T = n(9)
          , I = a.a.triggerUserSyncs
          , C = A.EVENTS
          , j = C.ADD_AD_UNITS
          , w = C.BID_WON
          , _ = C.REQUEST_BIDS
          , B = C.SET_TARGETING
          , U = C.AD_RENDER_FAILED
          , x = A.AD_RENDER_FAILED_REASON
          , R = x.PREVENT_WRITING_ON_MAIN_DOCUMENT
          , k = x.NO_AD
          , D = x.EXCEPTION
          , N = x.CANNOT_FIND_AD
          , P = x.MISSING_DOC_OR_ADID
          , q = {
            bidWon: function(e) {
                var t = m.a.getBidsRequested().map(function(e) {
                    return e.bids.map(function(e) {
                        return e.adUnitCode
                    })
                }).reduce(i.flatten).filter(i.uniques);
                return !!E.contains(t, e) || void E.logError('The "' + e + '" placement is not defined.')
            }
        };
        function M(e, t, n) {
            e.defaultView && e.defaultView.frameElement && (e.defaultView.frameElement.width = t,
            e.defaultView.frameElement.height = n)
        }
        function G(e, t) {
            var n = [];
            return E.isArray(e) && (t ? e.length === t : 0 < e.length) && (e.every(function(e) {
                return Object(i.isArrayOfNums)(e, 2)
            }) ? n = e : Object(i.isArrayOfNums)(e, 2) && n.push(e)),
            n
        }
        function W(e) {
            var t = E.deepClone(e)
              , n = t.mediaTypes.banner
              , r = G(n.sizes);
            return 0 < r.length ? (n.sizes = r,
            t.sizes = r) : (E.logError("Detected a mediaTypes.banner object without a proper sizes field.  Please ensure the sizes are listed like: [[300, 250], ...].  Removing invalid mediaTypes.banner object from request."),
            delete t.mediaTypes.banner),
            t
        }
        function L(e) {
            var t, n, r = E.deepClone(e), i = r.mediaTypes.video;
            return i.playerSize && (t = "number" == typeof i.playerSize[0] ? 2 : 1,
            0 < (n = G(i.playerSize, t)).length ? (2 == t && E.logInfo("Transforming video.playerSize from [640,480] to [[640,480]] so it's in the proper format."),
            i.playerSize = n,
            r.sizes = n) : (E.logError("Detected incorrect configuration of mediaTypes.video.playerSize.  Please specify only one set of dimensions in a format like: [[640, 480]]. Removing invalid mediaTypes.video.playerSize property from request."),
            delete r.mediaTypes.video.playerSize)),
            r
        }
        function F(e) {
            var t = E.deepClone(e)
              , n = t.mediaTypes.native;
            return n.image && n.image.sizes && !Array.isArray(n.image.sizes) && (E.logError("Please use an array of sizes for native.image.sizes field.  Removing invalid mediaTypes.native.image.sizes property from request."),
            delete t.mediaTypes.native.image.sizes),
            n.image && n.image.aspect_ratios && !Array.isArray(n.image.aspect_ratios) && (E.logError("Please use an array of sizes for native.image.aspect_ratios field.  Removing invalid mediaTypes.native.image.aspect_ratios property from request."),
            delete t.mediaTypes.native.image.aspect_ratios),
            n.icon && n.icon.sizes && !Array.isArray(n.icon.sizes) && (E.logError("Please use an array of sizes for native.icon.sizes field.  Removing invalid mediaTypes.native.icon.sizes property from request."),
            delete t.mediaTypes.native.icon.sizes),
            t
        }
        Object(u.a)(),
        h.bidderSettings = h.bidderSettings || {},
        h.libLoaded = !0,
        h.version = "v4.21.0",
        E.logInfo("Prebid.js v4.21.0 loaded"),
        h.adUnits = h.adUnits || [],
        h.triggerUserSyncs = I;
        var z = {
            validateBannerMediaType: W,
            validateVideoMediaType: L,
            validateNativeMediaType: F,
            validateSizes: G
        }
          , V = Object(c.b)("sync", function(e) {
            var c = [];
            return e.forEach(function(e) {
                var t, n, r, i, o = e.mediaTypes, a = e.bids;
                a && E.isArray(a) ? o && 0 !== Object.keys(o).length ? (o.banner && (t = W(e)),
                o.video && (n = L(t || e)),
                o.native && (r = F(n || (t || e))),
                i = y({}, t, n, r),
                c.push(i)) : E.logError("Detected adUnit.code '".concat(e.code, "' did not have a 'mediaTypes' object defined.  This is a required field for the auction, so this adUnit has been removed.")) : E.logError("Detected adUnit.code '".concat(e.code, "' did not have 'adUnit.bids' defined or 'adUnit.bids' is not an array. Removing adUnit from auction."))
            }),
            c
        }, "checkAdUnitSetup");
        function H(e) {
            var n = m.a[e]().filter(E.bind.call(i.adUnitsFilter, this, m.a.getAdUnitCodes()))
              , r = m.a.getLastAuctionId();
            return n.map(function(e) {
                return e.adUnitCode
            }).filter(i.uniques).map(function(t) {
                return n.filter(function(e) {
                    return e.auctionId === r && e.adUnitCode === t
                })
            }).filter(function(e) {
                return e && e[0] && e[0].adUnitCode
            }).map(function(e) {
                return t = {},
                n = e[0].adUnitCode,
                r = {
                    bids: e
                },
                n in t ? Object.defineProperty(t, n, {
                    value: r,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : t[n] = r,
                t;
                var t, n, r
            }).reduce(function(e, t) {
                return y(e, t)
            }, {})
        }
        function K(e) {
            var t = e.reason
              , n = e.message
              , r = e.bid
              , i = e.id
              , o = {
                reason: t,
                message: n
            };
            r && (o.bid = r),
            i && (o.adId = i),
            E.logError(n),
            T.emit(U, o)
        }
        function J(e, t) {
            function n(e) {
                for (var t; t = e.shift(); )
                    t()
            }
            n(b.c),
            n(Y),
            e.call(this, t)
        }
        h.getAdserverTargetingForAdUnitCodeStr = function(e) {
            if (E.logInfo("Invoking atdpbjs.getAdserverTargetingForAdUnitCodeStr", arguments),
            e) {
                var t = h.getAdserverTargetingForAdUnitCode(e);
                return E.transformAdServerTargetingObj(t)
            }
            E.logMessage("Need to call getAdserverTargetingForAdUnitCodeStr with adunitCode")
        }
        ,
        h.getAdserverTargetingForAdUnitCode = function(e) {
            return h.getAdserverTargeting(e)[e]
        }
        ,
        h.getAdserverTargeting = function(e) {
            return E.logInfo("Invoking atdpbjs.getAdserverTargeting", arguments),
            f.a.getAllTargeting(e)
        }
        ,
        h.getNoBids = function() {
            return E.logInfo("Invoking atdpbjs.getNoBids", arguments),
            H("getNoBids")
        }
        ,
        h.getNoBidsForAdUnitCode = function(t) {
            return {
                bids: m.a.getNoBids().filter(function(e) {
                    return e.adUnitCode === t
                })
            }
        }
        ,
        h.getBidResponses = function() {
            return E.logInfo("Invoking atdpbjs.getBidResponses", arguments),
            H("getBidsReceived")
        }
        ,
        h.getBidResponsesForAdUnitCode = function(t) {
            return {
                bids: m.a.getBidsReceived().filter(function(e) {
                    return e.adUnitCode === t
                })
            }
        }
        ,
        h.setTargetingForGPTAsync = function(e, t) {
            var n;
            E.logInfo("Invoking atdpbjs.setTargetingForGPTAsync", arguments),
            Object(i.isGptPubadsDefined)() ? (n = f.a.getAllTargeting(e),
            f.a.resetPresetTargeting(e, t),
            f.a.setTargetingForGPT(n, t),
            Object.keys(n).forEach(function(t) {
                Object.keys(n[t]).forEach(function(e) {
                    "hb_adid" === e && m.a.setStatusForBids(n[t][e], A.BID_STATUS.BID_TARGETING_SET)
                })
            }),
            T.emit(B, n)) : E.logError("window.googletag is not defined on the page")
        }
        ,
        h.setTargetingForAst = function(e) {
            E.logInfo("Invoking atdpbjs.setTargetingForAn", arguments),
            f.a.isApntagDefined() ? (f.a.setTargetingForAst(e),
            T.emit(B, f.a.getAllTargeting())) : E.logError("window.apntag is not defined on the page")
        }
        ,
        h.renderAd = function(e, t, n) {
            if (E.logInfo("Invoking atdpbjs.renderAd", arguments),
            E.logMessage("Calling renderAd with adId :" + t),
            e && t)
                try {
                    var r, i, o, a, c, u, s, d, f, l, p, g, b, v = m.a.findBidByAdId(t);
                    v ? (v.ad = E.replaceAuctionPrice(v.ad, v.cpm),
                    v.adUrl = E.replaceAuctionPrice(v.adUrl, v.cpm),
                    n && n.clickThrough && (r = n.clickThrough,
                    v.ad = E.replaceClickThrough(v.ad, r),
                    v.adUrl = E.replaceClickThrough(v.adUrl, r)),
                    m.a.addWinningBid(v),
                    T.emit(w, v),
                    i = v.height,
                    o = v.width,
                    a = v.ad,
                    c = v.mediaType,
                    u = v.adUrl,
                    s = v.renderer,
                    d = document.createComment("Creative ".concat(v.creativeId, " served by ").concat(v.bidder, " Prebid.js Header Bidding")),
                    E.insertElement(d, e, "body"),
                    Object(S.c)(s) ? Object(S.b)(s, v) : e === document && !E.inIframe() || "video" === c ? (f = "Error trying to write ad. Ad render call ad id ".concat(t, " was prevented from writing to the main document."),
                    K({
                        reason: R,
                        message: f,
                        bid: v,
                        id: t
                    })) : a ? (navigator.userAgent && -1 < navigator.userAgent.toLowerCase().indexOf("firefox/") && ((l = navigator.userAgent.toLowerCase().match(/firefox\/([\d\.]+)/)[1]) && parseInt(l, 10) < 67 && e.open("text/html", "replace")),
                    e.write(a),
                    e.close(),
                    M(e, o, i),
                    E.callBurl(v)) : u ? ((p = E.createInvisibleIframe()).height = i,
                    p.width = o,
                    p.style.display = "inline",
                    p.style.overflow = "hidden",
                    p.src = u,
                    E.insertElement(p, e, "body"),
                    M(e, o, i),
                    E.callBurl(v)) : (g = "Error trying to write ad. No ad for bid response id: ".concat(t),
                    K({
                        reason: k,
                        message: g,
                        bid: v,
                        id: t
                    }))) : (b = "Error trying to write ad. Cannot find ad by given id : ".concat(t),
                    K({
                        reason: N,
                        message: b,
                        id: t
                    }))
                } catch (e) {
                    var y = "Error trying to write ad Id :".concat(t, " to the page:").concat(e.message);
                    K({
                        reason: D,
                        message: y,
                        id: t
                    })
                }
            else {
                var h = "Error trying to write ad Id :".concat(t, " to the page. Missing document or adId");
                K({
                    reason: P,
                    message: h,
                    id: t
                })
            }
        }
        ,
        h.removeAdUnit = function(e) {
            E.logInfo("Invoking atdpbjs.removeAdUnit", arguments),
            e ? (E.isArray(e) ? e : [e]).forEach(function(e) {
                for (var t = h.adUnits.length - 1; 0 <= t; t--)
                    h.adUnits[t].code === e && h.adUnits.splice(t, 1)
            }) : h.adUnits = []
        }
        ,
        h.requestBids = Object(c.b)("async", function() {
            var e = 0 < arguments.length && void 0 !== arguments[0] ? arguments[0] : {}
              , t = e.bidsBackHandler
              , n = e.timeout
              , r = e.adUnits
              , i = e.adUnitCodes
              , o = e.labels
              , a = e.auctionId;
            T.emit(_);
            var c = n || d.b.getConfig("bidderTimeout")
              , r = r || h.adUnits;
            if (E.logInfo("Invoking atdpbjs.requestBids", arguments),
            r = V(r),
            i && i.length ? r = r.filter(function(e) {
                return l()(i, e.code)
            }) : i = r && r.map(function(e) {
                return e.code
            }),
            r.forEach(function(i) {
                var o = Object.keys(i.mediaTypes || {
                    banner: "banner"
                })
                  , e = i.bids.map(function(e) {
                    return e.bidder
                })
                  , a = O.bidderRegistry
                  , t = d.b.getConfig("s2sConfig")
                  , n = t && t.bidders
                  , r = n ? e.filter(function(e) {
                    return !l()(n, e)
                }) : e;
                i.transactionId = E.generateUUID(),
                r.forEach(function(t) {
                    var e = a[t]
                      , n = e && e.getSpec && e.getSpec()
                      , r = n && n.supportedMediaTypes || ["banner"];
                    o.some(function(e) {
                        return l()(r, e)
                    }) ? p.a.incrementBidderRequestsCounter(i.code, t) : (E.logWarn(E.unsupportedBidderMessage(i, t)),
                    i.bids = i.bids.filter(function(e) {
                        return e.bidder !== t
                    }))
                }),
                p.a.incrementRequestsCounter(i.code)
            }),
            r && 0 !== r.length) {
                var u = m.a.createAuction({
                    adUnits: r,
                    adUnitCodes: i,
                    callback: t,
                    cbTimeout: c,
                    labels: o,
                    auctionId: a
                })
                  , s = r.length;
                15 < s && E.logInfo("Current auction ".concat(u.getAuctionId(), " contains ").concat(s, " adUnits."), r),
                i.forEach(function(e) {
                    return f.a.setLatestAuctionForAdUnit(e, u.getAuctionId())
                }),
                u.callBids()
            } else if (E.logMessage("No adUnits configured. No bids requested."),
            "function" == typeof t)
                try {
                    t()
                } catch (e) {
                    E.logError("Error executing bidsBackHandler", null, e)
                }
        }),
        h.requestBids.before(J, 49),
        h.addAdUnits = function(e) {
            E.logInfo("Invoking atdpbjs.addAdUnits", arguments),
            E.isArray(e) ? h.adUnits.push.apply(h.adUnits, e) : "object" === v(e) && h.adUnits.push(e),
            T.emit(j)
        }
        ,
        h.onEvent = function(e, t, n) {
            E.logInfo("Invoking atdpbjs.onEvent", arguments),
            E.isFn(t) ? !n || q[e].call(null, n) ? T.on(e, t, n) : E.logError('The id provided is not valid for event "' + e + '" and no handler was set.') : E.logError('The event handler provided is not a function and was not set on event "' + e + '".')
        }
        ,
        h.offEvent = function(e, t, n) {
            E.logInfo("Invoking atdpbjs.offEvent", arguments),
            n && !q[e].call(null, n) || T.off(e, t, n)
        }
        ,
        h.getEvents = function() {
            return E.logInfo("Invoking atdpbjs.getEvents"),
            T.getEvents()
        }
        ,
        h.registerBidAdapter = function(e, t) {
            E.logInfo("Invoking atdpbjs.registerBidAdapter", arguments);
            try {
                O.registerBidAdapter(e(), t)
            } catch (e) {
                E.logError("Error registering bidder adapter : " + e.message)
            }
        }
        ,
        h.registerAnalyticsAdapter = function(e) {
            E.logInfo("Invoking atdpbjs.registerAnalyticsAdapter", arguments);
            try {
                O.registerAnalyticsAdapter(e)
            } catch (e) {
                E.logError("Error registering analytics adapter : " + e.message)
            }
        }
        ,
        h.createBid = function(e) {
            return E.logInfo("Invoking atdpbjs.createBid", arguments),
            Object(g.a)(e)
        }
        ;
        var Y = []
          , Q = Object(c.b)("async", function(e) {
            e && !E.isEmpty(e) ? (E.logInfo("Invoking atdpbjs.enableAnalytics for: ", e),
            O.enableAnalytics(e)) : E.logError("atdpbjs.enableAnalytics should be called with option {}")
        }, "enableAnalyticsCb");
        function $(e) {
            e.forEach(function(e) {
                if (void 0 === e.called)
                    try {
                        e.call(),
                        e.called = !0
                    } catch (e) {
                        E.logError("Error processing command :", "prebid.js", e)
                    }
            })
        }
        h.enableAnalytics = function(e) {
            Y.push(Q.bind(this, e))
        }
        ,
        h.aliasBidder = function(e, t, n) {
            E.logInfo("Invoking atdpbjs.aliasBidder", arguments),
            e && t ? O.aliasBidAdapter(e, t, n) : E.logError("bidderCode and alias must be passed as arguments", "atdpbjs.aliasBidder")
        }
        ,
        h.getAllWinningBids = function() {
            return m.a.getAllWinningBids()
        }
        ,
        h.getAllPrebidWinningBids = function() {
            return m.a.getBidsReceived().filter(function(e) {
                return e.status === A.BID_STATUS.BID_TARGETING_SET
            })
        }
        ,
        h.getHighestCpmBids = function(e) {
            return f.a.getWinningBids(e)
        }
        ,
        h.markWinningBidAsUsed = function(t) {
            var e = [];
            t.adUnitCode && t.adId ? e = m.a.getBidsReceived().filter(function(e) {
                return e.adId === t.adId && e.adUnitCode === t.adUnitCode
            }) : t.adUnitCode ? e = f.a.getWinningBids(t.adUnitCode) : t.adId ? e = m.a.getBidsReceived().filter(function(e) {
                return e.adId === t.adId
            }) : E.logWarn("Improper use of markWinningBidAsUsed. It needs an adUnitCode or an adId to function."),
            0 < e.length && (e[0].status = A.BID_STATUS.RENDERED)
        }
        ,
        h.getConfig = d.b.getConfig,
        h.setConfig = d.b.setConfig,
        h.setBidderConfig = d.b.setBidderConfig,
        h.que.push(function() {
            return Object(o.a)()
        }),
        h.cmd.push = function(e) {
            if ("function" == typeof e)
                try {
                    e.call()
                } catch (e) {
                    E.logError("Error processing command :", e.message, e.stack)
                }
            else
                E.logError("Commands written into atdpbjs.cmd.push must be wrapped in a function")
        }
        ,
        h.que.push = h.cmd.push,
        h.processQueue = function() {
            c.b.ready(),
            $(h.que),
            $(h.cmd)
        }
        ,
        t.default = h
    },
    7: function(e, t, n) {
        "use strict";
        n.d(t, "c", function() {
            return l
        }),
        n.d(t, "d", function() {
            return p
        }),
        t.a = function(e) {
            return o({
                moduleName: e,
                moduleType: "core"
            })
        }
        ,
        t.b = function(e, t) {
            return o({
                gvlid: e,
                moduleName: t
            })
        }
        ;
        var r = n(13)
          , u = n(0)
          , i = n(12)
          , d = n.n(i)
          , f = ["core", "prebid-module"]
          , l = [];
        function o(e) {
            var t = 0 < arguments.length && void 0 !== e ? e : {}
              , i = t.gvlid
              , o = t.moduleName
              , a = t.moduleType;
            function s(n) {
                if (d()(f, a)) {
                    return n({
                        valid: !0
                    })
                }
                var r;
                return p(i, o, {
                    hasEnforcementHook: !1
                }, function(e) {
                    var t;
                    r = e && e.hasEnforcementHook ? n(e) : (t = {
                        hasEnforcementHook: !1,
                        valid: u.hasDeviceAccess()
                    },
                    n(t))
                }),
                r
            }
            var c = function(t) {
                function n(e) {
                    if (e && e.valid)
                        try {
                            return !!window.localStorage
                        } catch (e) {
                            u.logError("Local storage api disabled")
                        }
                    return !1
                }
                if (!t || "function" != typeof t)
                    return s(n);
                l.push(function() {
                    var e = s(n);
                    t(e)
                })
            };
            return {
                setCookie: function(i, o, a, c, u, t) {
                    function n(e) {
                        var t, n, r;
                        e && e.valid && (t = u && "" !== u ? " ;domain=".concat(encodeURIComponent(u)) : "",
                        n = a && "" !== a ? " ;expires=".concat(a) : "",
                        r = null != c && "none" == c.toLowerCase() ? "; Secure" : "",
                        document.cookie = "".concat(i, "=").concat(encodeURIComponent(o)).concat(n, "; path=/").concat(t).concat(c ? "; SameSite=".concat(c) : "").concat(r))
                    }
                    if (!t || "function" != typeof t)
                        return s(n);
                    l.push(function() {
                        var e = s(n);
                        t(e)
                    })
                },
                getCookie: function(n, t) {
                    function r(e) {
                        if (e && e.valid) {
                            var t = window.document.cookie.match("(^|;)\\s*" + n + "\\s*=\\s*([^;]*)\\s*(;|$)");
                            return t ? decodeURIComponent(t[2]) : null
                        }
                        return null
                    }
                    if (!t || "function" != typeof t)
                        return s(r);
                    l.push(function() {
                        var e = s(r);
                        t(e)
                    })
                },
                localStorageIsEnabled: function(t) {
                    function n(e) {
                        if (e && e.valid)
                            try {
                                return localStorage.setItem("prebid.cookieTest", "1"),
                                "1" === localStorage.getItem("prebid.cookieTest")
                            } catch (e) {}
                        return !1
                    }
                    if (!t || "function" != typeof t)
                        return s(n);
                    l.push(function() {
                        var e = s(n);
                        t(e)
                    })
                },
                cookiesAreEnabled: function(t) {
                    function n(e) {
                        return !(!e || !e.valid) && (!!u.checkCookieSupport() || (window.document.cookie = "prebid.cookieTest",
                        -1 !== window.document.cookie.indexOf("prebid.cookieTest")))
                    }
                    if (!t || "function" != typeof t)
                        return s(n);
                    l.push(function() {
                        var e = s(n);
                        t(e)
                    })
                },
                setDataInLocalStorage: function(t, n, r) {
                    function i(e) {
                        e && e.valid && c() && window.localStorage.setItem(t, n)
                    }
                    if (!r || "function" != typeof r)
                        return s(i);
                    l.push(function() {
                        var e = s(i);
                        r(e)
                    })
                },
                getDataFromLocalStorage: function(t, n) {
                    function r(e) {
                        return e && e.valid && c() ? window.localStorage.getItem(t) : null
                    }
                    if (!n || "function" != typeof n)
                        return s(r);
                    l.push(function() {
                        var e = s(r);
                        n(e)
                    })
                },
                removeDataFromLocalStorage: function(t, n) {
                    function r(e) {
                        e && e.valid && c() && window.localStorage.removeItem(t)
                    }
                    if (!n || "function" != typeof n)
                        return s(r);
                    l.push(function() {
                        var e = s(r);
                        n(e)
                    })
                },
                hasLocalStorage: c,
                findSimilarCookies: function(o, t) {
                    function n(e) {
                        if (e && e.valid) {
                            var t = [];
                            if (u.hasDeviceAccess())
                                for (var n = document.cookie.split(";"); n.length; ) {
                                    var r = n.pop()
                                      , i = (i = r.indexOf("=")) < 0 ? r.length : i;
                                    0 <= decodeURIComponent(r.slice(0, i).replace(/^\s+/, "")).indexOf(o) && t.push(decodeURIComponent(r.slice(i + 1)))
                                }
                            return t
                        }
                    }
                    if (!t || "function" != typeof t)
                        return s(n);
                    l.push(function() {
                        var e = s(n);
                        t(e)
                    })
                }
            }
        }
        var p = Object(r.b)("async", function(e, t, n, r) {
            r(n)
        }, "validateStorageEnforcement")
    },
    70: function(e, t, n) {
        "use strict";
        t.a = function(t, n) {
            o.adServers = o.adServers || {},
            o.adServers[t] = o.adServers[t] || {},
            Object.keys(n).forEach(function(e) {
                o.adServers[t][e] ? Object(i.logWarn)("Attempting to add an already registered function property ".concat(e, " for AdServer ").concat(t, ".")) : o.adServers[t][e] = n[e]
            })
        }
        ;
        var r = n(20)
          , i = n(0)
          , o = Object(r.a)()
    },
    71: function(e, t, n) {
        var r = n(31)
          , i = n(48)
          , o = "".split;
        e.exports = r(function() {
            return !Object("z").propertyIsEnumerable(0)
        }) ? function(e) {
            return "String" == i(e) ? o.call(e, "") : Object(e)
        }
        : Object
    },
    72: function(e, t, n) {
        var r = n(30)
          , i = n(31)
          , o = n(73);
        e.exports = !r && !i(function() {
            return 7 != Object.defineProperty(o("div"), "a", {
                get: function() {
                    return 7
                }
            }).a
        })
    },
    73: function(e, t, n) {
        var r = n(26)
          , i = n(27)
          , o = r.document
          , a = i(o) && i(o.createElement);
        e.exports = function(e) {
            return a ? o.createElement(e) : {}
        }
    },
    74: function(e, t, n) {
        var r = n(16)
          , i = n(75);
        (e.exports = function(e, t) {
            return i[e] || (i[e] = void 0 !== t ? t : {})
        }
        )("versions", []).push({
            version: "3.6.4",
            mode: r ? "pure" : "global",
            copyright: "© 2020 Denis Pushkarev (zloirock.ru)"
        })
    },
    75: function(e, t, n) {
        var r = n(26)
          , i = n(104)
          , o = "__core-js_shared__"
          , a = r[o] || i(o, {});
        e.exports = a
    },
    76: function(e, t, n) {
        var r = n(31);
        e.exports = !!Object.getOwnPropertySymbols && !r(function() {
            return !String(Symbol())
        })
    },
    77: function(e, t, n) {
        function r(c) {
            return function(e, t, n) {
                var r, i = u(e), o = s(i.length), a = d(n, o);
                if (c && t != t) {
                    for (; a < o; )
                        if ((r = i[a++]) != r)
                            return !0
                } else
                    for (; a < o; a++)
                        if ((c || a in i) && i[a] === t)
                            return c || a || 0;
                return !c && -1
            }
        }
        var u = n(47)
          , s = n(50)
          , d = n(108);
        e.exports = {
            includes: r(!0),
            indexOf: r(!1)
        }
    },
    78: function(e, t, n) {
        var r = n(109);
        n(132),
        n(134),
        n(136),
        n(138),
        n(140),
        n(141),
        n(142),
        n(143),
        n(144),
        n(145),
        n(146),
        n(147),
        n(148),
        n(149),
        n(150),
        n(151),
        n(152),
        n(153),
        e.exports = r
    },
    79: function(e, t, n) {
        function r(e) {
            c(e, d, {
                value: {
                    objectID: "O" + ++f,
                    weakData: {}
                }
            })
        }
        var i = n(53)
          , o = n(27)
          , a = n(28)
          , c = n(33).f
          , u = n(59)
          , s = n(112)
          , d = u("meta")
          , f = 0
          , l = Object.isExtensible || function() {
            return !0
        }
          , p = e.exports = {
            REQUIRED: !1,
            fastKey: function(e, t) {
                if (!o(e))
                    return "symbol" == typeof e ? e : ("string" == typeof e ? "S" : "P") + e;
                if (!a(e, d)) {
                    if (!l(e))
                        return "F";
                    if (!t)
                        return "E";
                    r(e)
                }
                return e[d].objectID
            },
            getWeakData: function(e, t) {
                if (!a(e, d)) {
                    if (!l(e))
                        return !0;
                    if (!t)
                        return !1;
                    r(e)
                }
                return e[d].weakData
            },
            onFreeze: function(e) {
                return s && p.REQUIRED && l(e) && !a(e, d) && r(e),
                e
            }
        };
        i[d] = !0
    },
    8: function(e, t, n) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        }),
        n.d(t, "gdprDataHandler", function() {
            return R
        }),
        n.d(t, "uspDataHandler", function() {
            return k
        }),
        t.setS2STestingModule = function(e) {
            I = e
        }
        ;
        var S = n(0)
          , p = n(92)
          , g = n(37)
          , l = n(1)
          , h = n(4)
          , A = n(3)
          , r = n(13)
          , i = n(12)
          , E = n.n(i)
          , o = n(10)
          , O = n.n(o)
          , b = n(67)
          , T = n(22);
        function m(e, t) {
            return function(e) {
                if (Array.isArray(e))
                    return e
            }(e) || function(e, t) {
                if ("undefined" == typeof Symbol || !(Symbol.iterator in Object(e)))
                    return;
                var n = []
                  , r = !0
                  , i = !1
                  , o = void 0;
                try {
                    for (var a, c = e[Symbol.iterator](); !(r = (a = c.next()).done) && (n.push(a.value),
                    !t || n.length !== t); r = !0)
                        ;
                } catch (e) {
                    i = !0,
                    o = e
                } finally {
                    try {
                        r || null == c.return || c.return()
                    } finally {
                        if (i)
                            throw o
                    }
                }
                return n
            }(e, t) || function(e, t) {
                if (!e)
                    return;
                if ("string" == typeof e)
                    return a(e, t);
                var n = Object.prototype.toString.call(e).slice(8, -1);
                "Object" === n && e.constructor && (n = e.constructor.name);
                if ("Map" === n || "Set" === n)
                    return Array.from(e);
                if ("Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))
                    return a(e, t)
            }(e, t) || function() {
                throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
            }()
        }
        function a(e, t) {
            (null == t || t > e.length) && (t = e.length);
            for (var n = 0, r = new Array(t); n < t; n++)
                r[n] = e[n];
            return r
        }
        function v() {
            return (v = Object.assign || function(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var n = arguments[t];
                    for (var r in n)
                        Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r])
                }
                return e
            }
            ).apply(this, arguments)
        }
        var I, C = n(0), j = n(5), w = n(9), y = {}, _ = y.bidderRegistry = {}, B = y.aliasRegistry = {}, U = {};
        A.b.getConfig("s2sConfig", function(e) {
            U = e.s2sConfig
        });
        var c = {};
        var x = Object(r.b)("sync", function(e) {
            var i = e.bidderCode
              , s = e.auctionId
              , d = e.bidderRequestId
              , t = e.adUnits
              , f = e.labels
              , l = e.src;
            return t.reduce(function(e, c) {
                var t = Object(p.b)(Object(p.a)(c, f), c.mediaTypes, c.sizes)
                  , n = t.active
                  , u = t.mediaTypes
                  , r = t.filterResults;
                return n ? r && C.logInfo('Size mapping filtered adUnit "'.concat(c.code, '" banner sizes from '), r.before, "to ", r.after) : C.logInfo('Size mapping disabled adUnit "'.concat(c.code, '"')),
                n && e.push(c.bids.filter(function(e) {
                    return e.bidder === i
                }).reduce(function(e, t) {
                    var n = c.nativeParams || C.deepAccess(c, "mediaTypes.native");
                    n && (t = v({}, t, {
                        nativeParams: Object(g.g)(n)
                    })),
                    t = v({}, t, Object(S.getDefinedParams)(c, ["fpd", "mediaType", "renderer", "storedAuctionResponse"]));
                    var r = Object(p.b)(Object(p.a)(t, f), u)
                      , i = r.active
                      , o = r.mediaTypes
                      , a = r.filterResults;
                    return i ? a && C.logInfo('Size mapping filtered adUnit "'.concat(c.code, '" bidder "').concat(t.bidder, '" banner sizes from '), a.before, "to ", a.after) : C.logInfo('Size mapping deactivated adUnit "'.concat(c.code, '" bidder "').concat(t.bidder, '"')),
                    C.isValidMediaTypes(o) ? t = v({}, t, {
                        mediaTypes: o
                    }) : C.logError("mediaTypes is not correctly configured for adunit ".concat(c.code)),
                    i && e.push(v({}, t, {
                        adUnitCode: c.code,
                        transactionId: c.transactionId,
                        sizes: C.deepAccess(o, "banner.sizes") || C.deepAccess(o, "video.playerSize") || [],
                        bidId: t.bid_id || C.getUniqueIdentifierStr(),
                        bidderRequestId: d,
                        auctionId: s,
                        src: l,
                        bidRequestsCount: b.a.getRequestsCounter(c.code),
                        bidderRequestsCount: b.a.getBidderRequestsCounter(c.code, t.bidder),
                        bidderWinsCount: b.a.getBidderWinsCounter(c.code, t.bidder)
                    })),
                    e
                }, [])),
                e
            }, []).reduce(S.flatten, []).filter(function(e) {
                return "" !== e
            })
        }, "getBids");
        var R = {
            consentData: null,
            setConsentData: function(e) {
                R.consentData = e
            },
            getConsentData: function() {
                return R.consentData
            }
        }
          , k = {
            consentData: null,
            setConsentData: function(e) {
                k.consentData = e
            },
            getConsentData: function() {
                return k.consentData
            }
        };
        function D() {
            return U && U.enabled && U.testing && I
        }
        function u(t, n, e) {
            try {
                var r = _[t].getSpec();
                r && r[n] && "function" == typeof r[n] && (C.logInfo("Invoking ".concat(t, ".").concat(n)),
                A.b.runWithBidder(t, S.bind.call(r[n], r, e)))
            } catch (e) {
                C.logWarn("Error calling ".concat(n, " of ").concat(t))
            }
        }
        y.makeBidRequests = Object(r.b)("sync", function(e, i, o, a, c) {
            w.emit(j.EVENTS.BEFORE_REQUEST_BIDS, e);
            var u = []
              , t = Object(S.getBidderCodes)(e);
            A.b.getConfig("bidderSequence") === A.a && (t = Object(S.shuffle)(t));
            var n, r, s, d, f, l, p, g = Object(T.a)(), b = t, v = [];
            U.enabled && (D() && (v = I.getSourceBidderMap(e)[I.CLIENT]),
            n = U.bidders,
            b = t.filter(function(e) {
                return !E()(n, e) || E()(v, e)
            }),
            Boolean(D() && U.testServerOnly) && (p = e,
            Boolean(O()(p, function(e) {
                return O()(e.bids, function(e) {
                    return (e.bidSource || U.bidderControl && U.bidderControl[e.bidder]) && e.finalSource === I.SERVER
                })
            }))) && (b.length = 0),
            d = e,
            f = U.bidders,
            (l = C.deepClone(d)).forEach(function(e) {
                e.bids = e.bids.filter(function(e) {
                    return E()(f, e.bidder) && (!D() || e.finalSource !== I.CLIENT)
                }).map(function(e) {
                    return e.bid_id = C.getUniqueIdentifierStr(),
                    e
                })
            }),
            r = l = l.filter(function(e) {
                return 0 !== e.bids.length
            }),
            s = C.generateUUID(),
            n.forEach(function(e) {
                var t = C.getUniqueIdentifierStr()
                  , n = {
                    bidderCode: e,
                    auctionId: o,
                    bidderRequestId: t,
                    tid: s,
                    bids: x({
                        bidderCode: e,
                        auctionId: o,
                        bidderRequestId: t,
                        adUnits: C.deepClone(r),
                        labels: c,
                        src: j.S2S.SRC
                    }),
                    auctionStart: i,
                    timeout: U.timeout,
                    src: j.S2S.SRC,
                    refererInfo: g
                };
                0 !== n.bids.length && u.push(n)
            }),
            r.forEach(function(e) {
                var t = e.bids.filter(function(t) {
                    return O()(u, function(e) {
                        return O()(e.bids, function(e) {
                            return e.bidId === t.bid_id
                        })
                    })
                });
                e.bids = t
            }),
            u.forEach(function(e) {
                e.adUnitsS2SCopy = r.filter(function(e) {
                    return 0 < e.bids.length
                })
            }));
            var y, h, m = (y = e,
            (h = C.deepClone(y)).forEach(function(e) {
                e.bids = e.bids.filter(function(e) {
                    return !D() || e.finalSource !== I.SERVER
                })
            }),
            h = h.filter(function(e) {
                return 0 !== e.bids.length
            }));
            return b.forEach(function(e) {
                var t = C.getUniqueIdentifierStr()
                  , n = {
                    bidderCode: e,
                    auctionId: o,
                    bidderRequestId: t,
                    bids: x({
                        bidderCode: e,
                        auctionId: o,
                        bidderRequestId: t,
                        adUnits: C.deepClone(m),
                        labels: c,
                        src: "client"
                    }),
                    auctionStart: i,
                    timeout: a,
                    refererInfo: g
                }
                  , r = _[e];
                r || C.logError("Trying to make a request for bidder that does not exist: ".concat(e)),
                r && n.bids && 0 !== n.bids.length && u.push(n)
            }),
            R.getConsentData() && u.forEach(function(e) {
                e.gdprConsent = R.getConsentData()
            }),
            k.getConsentData() && u.forEach(function(e) {
                e.uspConsent = k.getConsentData()
            }),
            u
        }, "makeBidRequests"),
        y.callBids = function(e, t, i, o, a, c, u) {
            var n, r, s, d, f, l, p, g, b, v, y;
            t.length ? (r = (n = m(t.reduce(function(e, t) {
                return e[Number(void 0 !== t.src && t.src === j.S2S.SRC)].push(t),
                e
            }, [[], []]), 2))[0],
            (s = n[1]).length && (d = Object(h.b)(c, a ? {
                request: a.request.bind(null, "s2s"),
                done: a.done
            } : void 0),
            f = U.bidders,
            l = _[U.adapter],
            p = s[0].tid,
            g = s[0].adUnitsS2SCopy,
            l ? (b = {
                tid: p,
                ad_units: g
            }).ad_units.length && (v = s.map(function(e) {
                return e.start = Object(S.timestamp)(),
                o.bind(e)
            }),
            y = b.ad_units.reduce(function(e, t) {
                return e.concat((t.bids || []).reduce(function(e, t) {
                    return e.concat(t.bidder)
                }, []))
            }, []),
            C.logMessage("CALLING S2S HEADER BIDDERS ==== ".concat(f.filter(function(e) {
                return E()(y, e)
            }).join(","))),
            s.forEach(function(e) {
                w.emit(j.EVENTS.BID_REQUESTED, e)
            }),
            l.callBids(b, s, function(e, t) {
                var n = Object(S.getBidderRequest)(s, t.bidderCode, e);
                n && i.call(n, e, t)
            }, function() {
                return v.forEach(function(e) {
                    return e()
                })
            }, d)) : C.logError("missing " + U.adapter)),
            r.forEach(function(t) {
                t.start = Object(S.timestamp)();
                var e = _[t.bidderCode];
                C.logMessage("CALLING BIDDER ======= ".concat(t.bidderCode)),
                w.emit(j.EVENTS.BID_REQUESTED, t);
                var n = Object(h.b)(c, a ? {
                    request: a.request.bind(null, t.bidderCode),
                    done: a.done
                } : void 0)
                  , r = o.bind(t);
                try {
                    A.b.runWithBidder(t.bidderCode, S.bind.call(e.callBids, e, t, i.bind(t), r, n, u, A.b.callbackWithBidder(t.bidderCode)))
                } catch (e) {
                    C.logError("".concat(t.bidderCode, " Bid Adapter emitted an uncaught error when parsing their bidRequest"), {
                        e: e,
                        bidRequest: t
                    }),
                    r()
                }
            })) : C.logWarn("callBids executed with no bidRequests.  Were they filtered by labels or sizing?")
        }
        ,
        y.videoAdapters = [],
        y.registerBidAdapter = function(e, t) {
            var n = (2 < arguments.length && void 0 !== arguments[2] ? arguments[2] : {}).supportedMediaTypes
              , r = void 0 === n ? [] : n;
            e && t ? "function" == typeof e.callBids ? (_[t] = e,
            E()(r, "video") && y.videoAdapters.push(t),
            E()(r, "native") && g.e.push(t)) : C.logError("Bidder adaptor error for bidder code: " + t + "bidder must implement a callBids() function") : C.logError("bidAdaptor or bidderCode not specified")
        }
        ,
        y.aliasBidAdapter = function(t, e, n) {
            var r, i;
            if (void 0 === _[e]) {
                var o = _[t];
                if (void 0 === o) {
                    var a = A.b.getConfig("s2sConfig")
                      , c = a && a.bidders;
                    c && E()(c, e) ? B[e] = t : C.logError('bidderCode "' + t + '" is not an existing bidder.', "adapterManager.aliasBidAdapter")
                } else
                    try {
                        var u, s, d, f = (r = t,
                        i = [],
                        E()(y.videoAdapters, r) && i.push("video"),
                        E()(g.e, r) && i.push("native"),
                        i);
                        o.constructor.prototype != Object.prototype ? (d = new o.constructor).setBidderCode(e) : (u = o.getSpec(),
                        s = n && n.gvlid,
                        d = Object(l.newBidder)(v({}, u, {
                            code: e,
                            gvlid: s
                        })),
                        B[e] = t),
                        y.registerBidAdapter(d, e, {
                            supportedMediaTypes: f
                        })
                    } catch (e) {
                        C.logError(t + " bidder does not currently support aliasing.", "adapterManager.aliasBidAdapter")
                    }
            } else
                C.logMessage('alias name "' + e + '" has been already specified.')
        }
        ,
        y.registerAnalyticsAdapter = function(e) {
            var t = e.adapter
              , n = e.code
              , r = e.gvlid;
            t && n ? "function" == typeof t.enableAnalytics ? (t.code = n,
            c[n] = {
                adapter: t,
                gvlid: r
            }) : C.logError('Prebid Error: Analytics adaptor error for analytics "'.concat(n, '"\n        analytics adapter must implement an enableAnalytics() function')) : C.logError("Prebid Error: analyticsAdapter or analyticsCode not specified")
        }
        ,
        y.enableAnalytics = function(e) {
            C.isArray(e) || (e = [e]),
            C._each(e, function(e) {
                var t = c[e.provider].adapter;
                t ? t.enableAnalytics(e) : C.logError("Prebid Error: no analytics adapter found in registry for\n        ".concat(e.provider, "."))
            })
        }
        ,
        y.getBidAdapter = function(e) {
            return _[e]
        }
        ,
        y.getAnalyticsAdapter = function(e) {
            return c[e]
        }
        ,
        y.callTimedOutBidders = function(t, n, r) {
            n = n.map(function(e) {
                return e.params = C.getUserConfiguredParams(t, e.adUnitCode, e.bidder),
                e.timeout = r,
                e
            }),
            n = C.groupBy(n, "bidder"),
            Object.keys(n).forEach(function(e) {
                u(e, "onTimeout", n[e])
            })
        }
        ,
        y.callBidWonBidder = function(e, t, n) {
            t.params = C.getUserConfiguredParams(n, t.adUnitCode, t.bidder),
            b.a.incrementBidderWinsCounter(t.adUnitCode, t.bidder),
            u(e, "onBidWon", t)
        }
        ,
        y.callSetTargetingBidder = function(e, t) {
            u(e, "onSetTargeting", t)
        }
        ,
        t.default = y
    },
    80: function(e, t, n) {
        var r = n(21)
          , i = n(38)
          , o = r("iterator")
          , a = Array.prototype;
        e.exports = function(e) {
            return void 0 !== e && (i.Array === e || a[o] === e)
        }
    },
    81: function(e, t, n) {
        var o = n(15);
        e.exports = function(t, e, n, r) {
            try {
                return r ? e(o(n)[0], n[1]) : e(n)
            } catch (e) {
                var i = t.return;
                throw void 0 !== i && o(i.call(t)),
                e
            }
        }
    },
    82: function(e, t) {
        e.exports = function(e, t, n) {
            if (!(e instanceof t))
                throw TypeError("Incorrect " + (n ? n + " " : "") + "invocation");
            return e
        }
    },
    83: function(e, t, n) {
        function r() {}
        function i(e) {
            return "<script>" + e + "</" + g + ">"
        }
        var o, a = n(15), c = n(117), u = n(84), s = n(53), d = n(120), f = n(73), l = n(65), p = "prototype", g = "script", b = l("IE_PROTO"), v = function() {
            try {
                o = document.domain && new ActiveXObject("htmlfile")
            } catch (e) {}
            var e, t;
            v = o ? function(e) {
                e.write(i("")),
                e.close();
                var t = e.parentWindow.Object;
                return e = null,
                t
            }(o) : ((t = f("iframe")).style.display = "none",
            d.appendChild(t),
            t.src = String("javascript:"),
            (e = t.contentWindow.document).open(),
            e.write(i("document.F=Object")),
            e.close(),
            e.F);
            for (var n = u.length; n--; )
                delete v[p][u[n]];
            return v()
        };
        s[b] = !0,
        e.exports = Object.create || function(e, t) {
            var n;
            return null !== e ? (r[p] = a(e),
            n = new r,
            r[p] = null,
            n[b] = e) : n = v(),
            void 0 === t ? n : c(n, t)
        }
    },
    84: function(e, t) {
        e.exports = ["constructor", "hasOwnProperty", "isPrototypeOf", "propertyIsEnumerable", "toLocaleString", "toString", "valueOf"]
    },
    85: function(e, t, n) {
        var i = n(32);
        e.exports = function(e, t, n, r) {
            r && r.enumerable ? e[t] = n : i(e, t, n)
        }
    },
    86: function(e, t, n) {
        "use strict";
        var r, i, o, a = n(87), c = n(32), u = n(28), s = n(21), d = n(16), f = s("iterator"), l = !1;
        [].keys && ("next"in (o = [].keys()) ? (i = a(a(o))) !== Object.prototype && (r = i) : l = !0),
        null == r && (r = {}),
        d || u(r, f) || c(r, f, function() {
            return this
        }),
        e.exports = {
            IteratorPrototype: r,
            BUGGY_SAFARI_ITERATORS: l
        }
    },
    87: function(e, t, n) {
        var r = n(28)
          , i = n(57)
          , o = n(65)
          , a = n(123)
          , c = o("IE_PROTO")
          , u = Object.prototype;
        e.exports = a ? Object.getPrototypeOf : function(e) {
            return e = i(e),
            r(e, c) ? e[c] : "function" == typeof e.constructor && e instanceof e.constructor ? e.constructor.prototype : e instanceof Object ? u : null
        }
    },
    88: function(e, t, n) {
        "use strict";
        var i = n(128).charAt
          , r = n(54)
          , o = n(66)
          , a = "String Iterator"
          , c = r.set
          , u = r.getterFor(a);
        o(String, "String", function(e) {
            c(this, {
                type: a,
                string: String(e),
                index: 0
            })
        }, function() {
            var e, t = u(this), n = t.string, r = t.index;
            return r >= n.length ? {
                value: void 0,
                done: !0
            } : (e = i(n, r),
            t.index += e.length,
            {
                value: e,
                done: !1
            })
        })
    },
    89: function(e, t, n) {
        var r = n(15)
          , i = n(61);
        e.exports = function(e) {
            var t = i(e);
            if ("function" != typeof t)
                throw TypeError(String(e) + " is not iterable");
            return r(t.call(e))
        }
    },
    9: function(e, t, n) {
        function r() {
            return (r = Object.assign || function(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var n = arguments[t];
                    for (var r in n)
                        Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r])
                }
                return e
            }
            ).apply(this, arguments)
        }
        var c, i, u = n(0), o = n(5), a = Array.prototype.slice, s = Array.prototype.push, d = u._map(o.EVENTS, function(e) {
            return e
        }), f = o.EVENT_ID_PATHS, l = [];
        e.exports = (c = {},
        (i = {}).on = function(e, t, n) {
            var r, i;
            i = e,
            u.contains(d, i) ? (r = c[e] || {
                que: []
            },
            n ? (r[n] = r[n] || {
                que: []
            },
            r[n].que.push(t)) : r.que.push(t),
            c[e] = r) : u.logError("Wrong event name : " + e + " Valid event names :" + d)
        }
        ,
        i.emit = function(e) {
            !function(e, t) {
                u.logMessage("Emitting event for: " + e);
                var n = t[0] || {}
                  , r = n[f[e]]
                  , i = c[e] || {
                    que: []
                }
                  , o = u._map(i, function(e, t) {
                    return t
                })
                  , a = [];
                l.push({
                    eventType: e,
                    args: n,
                    id: r,
                    elapsedTime: u.getPerformanceNow()
                }),
                r && u.contains(o, r) && s.apply(a, i[r].que),
                s.apply(a, i.que),
                u._each(a, function(e) {
                    if (e)
                        try {
                            e.apply(null, t)
                        } catch (e) {
                            u.logError("Error executing handler:", "events.js", e)
                        }
                })
            }(e, a.call(arguments, 1))
        }
        ,
        i.off = function(e, n, r) {
            var i = c[e];
            u.isEmpty(i) || u.isEmpty(i.que) && u.isEmpty(i[r]) || r && (u.isEmpty(i[r]) || u.isEmpty(i[r].que)) || (r ? u._each(i[r].que, function(e) {
                var t = i[r].que;
                e === n && t.splice(t.indexOf(e), 1)
            }) : u._each(i.que, function(e) {
                var t = i.que;
                e === n && t.splice(t.indexOf(e), 1)
            }),
            c[e] = i)
        }
        ,
        i.get = function() {
            return c
        }
        ,
        i.getEvents = function() {
            var n = [];
            return u._each(l, function(e) {
                var t = r({}, e);
                n.push(t)
            }),
            n
        }
        ,
        i)
    },
    90: function(e, t, n) {
        var r = n(154);
        e.exports = r
    },
    91: function(e, t, n) {
        "use strict";
        t.a = function(e) {
            var t = e;
            return {
                callBids: function() {},
                setBidderCode: function(e) {
                    t = e
                },
                getBidderCode: function() {
                    return t
                }
            }
        }
    },
    92: function(e, t, n) {
        "use strict";
        t.a = function(e, t) {
            if (e.labelAll)
                return {
                    labelAll: !0,
                    labels: e.labelAll,
                    activeLabels: t
                };
            return {
                labelAll: !1,
                labels: e.labelAny,
                activeLabels: t
            }
        }
        ,
        t.c = function(e) {
            var t = v(1 < arguments.length && void 0 !== arguments[1] ? arguments[1] : b);
            return !t.shouldFilter || !!t.sizesSupported[e]
        }
        ,
        t.b = function() {
            var e = 0 < arguments.length && void 0 !== arguments[0] ? arguments[0] : {}
              , t = e.labels
              , n = void 0 === t ? [] : t
              , r = e.labelAll
              , i = void 0 !== r && r
              , o = e.activeLabels
              , a = void 0 === o ? [] : o
              , c = 1 < arguments.length ? arguments[1] : void 0
              , u = 2 < arguments.length ? arguments[2] : void 0
              , s = v(3 < arguments.length && void 0 !== arguments[3] ? arguments[3] : b);
            c = Object(p.isPlainObject)(c) ? Object(p.deepClone)(c) : u ? {
                banner: {
                    sizes: u
                }
            } : {};
            var d = Object(p.deepAccess)(c, "banner.sizes");
            s.shouldFilter && d && (c.banner.sizes = d.filter(function(e) {
                return s.sizesSupported[e]
            }));
            var f = Object.keys(c)
              , l = {
                active: f.every(function(e) {
                    return "banner" !== e
                }) || f.some(function(e) {
                    return "banner" === e
                }) && 0 < Object(p.deepAccess)(c, "banner.sizes.length") && (0 === n.length || !i && (n.some(function(e) {
                    return s.labels[e]
                }) || n.some(function(e) {
                    return g()(a, e)
                })) || i && n.reduce(function(e, t) {
                    return e ? s.labels[t] || g()(a, t) : e
                }, !0)),
                mediaTypes: c
            };
            d && d.length !== c.banner.sizes.length && (l.filterResults = {
                before: d,
                after: c.banner.sizes
            });
            return l
        }
        ;
        var r = n(3)
          , p = n(0)
          , i = n(12)
          , g = n.n(i);
        function o(e) {
            return (o = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
                return typeof e
            }
            : function(e) {
                return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
            }
            )(e)
        }
        var b = [];
        function v(e) {
            return e.reduce(function(n, r) {
                if ("object" === o(r) && "string" == typeof r.mediaQuery) {
                    var t = !1;
                    if ("" === r.mediaQuery)
                        t = !0;
                    else
                        try {
                            t = Object(p.getWindowTop)().matchMedia(r.mediaQuery).matches
                        } catch (e) {
                            Object(p.logWarn)("Unfriendly iFrame blocks sizeConfig from being correctly evaluated"),
                            t = matchMedia(r.mediaQuery).matches
                        }
                    t && (Array.isArray(r.sizesSupported) && (n.shouldFilter = !0),
                    ["labels", "sizesSupported"].forEach(function(t) {
                        return (r[t] || []).forEach(function(e) {
                            return n[t][e] = !0
                        })
                    }))
                } else
                    Object(p.logWarn)('sizeConfig rule missing required property "mediaQuery"');
                return n
            }, {
                labels: {},
                sizesSupported: {},
                shouldFilter: !1
            })
        }
        r.b.getConfig("sizeConfig", function(e) {
            return t = e.sizeConfig,
            void (b = t);
            var t
        })
    },
    926: function(e, t, n) {
        e.exports = n(69)
    },
    93: function(e, t, n) {
        var r = n(221);
        e.exports = r
    },
    94: function(e, t, n) {
        "use strict";
        t.b = function(e, t, n) {
            var r = {
                puts: e.map(c, n)
            };
            Object(i.a)(o.b.getConfig("cache.url"), function(n) {
                return {
                    success: function(e) {
                        var t;
                        try {
                            t = JSON.parse(e).responses
                        } catch (e) {
                            return void n(e, [])
                        }
                        t ? n(null, t) : n(new Error("The cache server didn't respond with a responses property."), [])
                    },
                    error: function(e, t) {
                        n(new Error("Error storing video ad in the cache: ".concat(e, ": ").concat(JSON.stringify(t))), [])
                    }
                }
            }(t), JSON.stringify(r), {
                contentType: "text/plain",
                withCredentials: !0
            })
        }
        ,
        t.a = function(e) {
            return "".concat(o.b.getConfig("cache.url"), "?uuid=").concat(e)
        }
        ;
        var i = n(4)
          , o = n(3)
          , a = n(0);
        function c(e) {
            var t, n, r, i = {
                type: "xml",
                value: e.vastXml ? e.vastXml : (t = e.vastUrl,
                n = e.vastImpUrl,
                r = n ? "<![CDATA[".concat(n, "]]>") : "",
                '<VAST version="3.0">\n    <Ad>\n      <Wrapper>\n        <AdSystem>prebid.org wrapper</AdSystem>\n        <VASTAdTagURI><![CDATA['.concat(t, "]]></VASTAdTagURI>\n        <Impression>").concat(r, "</Impression>\n        <Creatives></Creatives>\n      </Wrapper>\n    </Ad>\n  </VAST>")),
                ttlseconds: Number(e.ttl)
            };
            return o.b.getConfig("cache.vasttrack") && (i.bidder = e.bidder,
            i.bidid = e.requestId,
            a.isPlainObject(this) && this.hasOwnProperty("auctionStart") && (i.timestamp = this.auctionStart)),
            "string" == typeof e.customCacheKey && "" !== e.customCacheKey && (i.key = e.customCacheKey),
            i
        }
    },
    97: function(e, t, n) {
        n(98);
        var r = n(52);
        e.exports = r("Array", "find")
    },
    98: function(e, t, n) {
        "use strict";
        var r = n(14)
          , i = n(56).find
          , o = n(51)
          , a = n(60)
          , c = "find"
          , u = !0
          , s = a(c);
        c in [] && Array(1).find(function() {
            u = !1
        }),
        r({
            target: "Array",
            proto: !0,
            forced: u || !s
        }, {
            find: function(e, t) {
                return i(this, e, 1 < arguments.length ? t : void 0)
            }
        }),
        o(c)
    },
    99: function(e, t, n) {
        var r = n(30)
          , i = n(100)
          , o = n(46)
          , a = n(47)
          , c = n(55)
          , u = n(28)
          , s = n(72)
          , d = Object.getOwnPropertyDescriptor;
        t.f = r ? d : function(e, t) {
            if (e = a(e),
            t = c(t, !0),
            s)
                try {
                    return d(e, t)
                } catch (e) {}
            if (u(e, t))
                return o(!i.f.call(e, t), e[t])
        }
    }
});
atdpbjsChunk([369], {
    163: function(e, t, r) {
        e.exports = r(164)
    },
    164: function(e, t, r) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        }),
        r.d(t, "spec", function() {
            return I
        });
        var n = r(1)
          , p = r(3)
          , u = r(0)
          , l = r(2);
        function f() {
            return (f = Object.assign || function(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var r = arguments[t];
                    for (var n in r)
                        Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n])
                }
                return e
            }
            ).apply(this, arguments)
        }
        function a(t, e) {
            var r, n = Object.keys(t);
            return Object.getOwnPropertySymbols && (r = Object.getOwnPropertySymbols(t),
            e && (r = r.filter(function(e) {
                return Object.getOwnPropertyDescriptor(t, e).enumerable
            })),
            n.push.apply(n, r)),
            n
        }
        function m(i) {
            for (var e = 1; e < arguments.length; e++) {
                var o = null != arguments[e] ? arguments[e] : {};
                e % 2 ? a(Object(o), !0).forEach(function(e) {
                    var t, r, n;
                    t = i,
                    n = o[r = e],
                    r in t ? Object.defineProperty(t, r, {
                        value: n,
                        enumerable: !0,
                        configurable: !0,
                        writable: !0
                    }) : t[r] = n
                }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(i, Object.getOwnPropertyDescriptors(o)) : a(Object(o)).forEach(function(e) {
                    Object.defineProperty(i, e, Object.getOwnPropertyDescriptor(o, e))
                })
            }
            return i
        }
        var i = "33across"
          , c = "https://ssc.33across.com/api/v1/hb"
          , b = "https://ssc-cms.33across.com/ps/?m=xch&rt=html&ru=deb"
          , o = "USD"
          , s = /^[a-zA-Z0-9_-]{22}$/
          , h = {
            SIAB: "siab",
            INVIEW: "inview",
            INSTREAM: "instream"
        }
          , g = ["mimes", "minduration", "maxduration", "placement", "protocols", "startdelay", "skip", "skipafter", "minbitrate", "maxbitrate", "delivery", "playbackmethod", "api", "linearity"]
          , d = {
            uniqueSiteIds: []
        }
          , y = "nm";
        function v(e) {
            return {
                w: parseInt(e[0], 10),
                h: parseInt(e[1], 10)
            }
        }
        function A(e) {
            var t = e.params
              , r = e.mediaTypes
              , n = r.banner
              , i = r.video;
            return i && !n && "instream" === i.context ? h.INSTREAM : t.productId === h.INVIEW ? t.productId : h.SIAB
        }
        function w(e, t, r) {
            var n = e.getFloor({
                currency: o,
                mediaType: r,
                size: [t.w, t.h]
            });
            if (!isNaN(n.floor) && n.currency === o)
                return n.floor
        }
        var I = {
            NON_MEASURABLE: y,
            code: i,
            supportedMediaTypes: [l.b, l.d],
            isBidRequestValid: function(e) {
                return (n = e).bidder === i && void 0 !== n.params && !!function(e) {
                    return null !== (u.deepAccess(e, "params.siteId", "") || "").trim().match(s)
                }(n) && (t = e,
                void 0 === (r = u.deepAccess(t, "mediaTypes.banner")) || !!Array.isArray(r.sizes)) && function(e) {
                    var t = u.deepAccess(e, "mediaTypes.video")
                      , r = u.deepAccess(e, "params.video", {});
                    if (void 0 === t)
                        return !0;
                    if (!Array.isArray(t.playerSize))
                        return !1;
                    if (!t.context)
                        return !1;
                    var n = m(m({}, t), r);
                    return !(!Array.isArray(n.mimes) || 0 === n.mimes.length) && (!(!Array.isArray(n.protocols) || 0 === n.protocols.length) && ((void 0 === n.placement || "number" == typeof n.placement) && ("instream" !== t.context || void 0 === n.startdelay || "number" == typeof n.startdelay)))
                }(e);
                var t, r, n
            },
            buildRequests: function(e, t) {
                var r = f({
                    consentString: void 0,
                    gdprApplies: !1
                }, t && t.gdprConsent)
                  , n = t && t.uspConsent
                  , i = t && t.refererInfo ? t.refererInfo.referer : void 0;
                return d.uniqueSiteIds = e.map(function(e) {
                    return e.params.siteId
                }).filter(u.uniques),
                e.map(function(e) {
                    return function(e) {
                        var t = e.bidRequest
                          , r = e.gdprConsent
                          , n = void 0 === r ? {} : r
                          , i = e.uspConsent
                          , o = e.pageUrl
                          , a = {}
                          , s = t.params;
                        a.imp = [{}],
                        u.deepAccess(t, "mediaTypes.banner") && (a.imp[0].banner = m({}, function(n) {
                            var e, t = u.deepAccess(n, "mediaTypes.banner", {}), r = function(e) {
                                return document.getElementById(e) || document.getElementById(function(e) {
                                    if (u.isGptPubadsDefined())
                                        for (var t = googletag.pubads().getSlots(), r = u.isSlotMatchingAdUnitCode(e), n = 0; n < t.length; n++)
                                            if (r(t[n])) {
                                                var i = t[n].getSlotElementId();
                                                return u.logInfo("[33Across Adapter] Map ad unit path to HTML element id: '".concat(e, "' -> ").concat(i)),
                                                i
                                            }
                                    return u.logWarn("[33Across Adapter] Unable to locate element for ad unit code: '".concat(e, "'")),
                                    null
                                }(e))
                            }(n.adUnitCode), i = function(e) {
                                return !u.isArray(e) || 2 !== e.length || u.isArray(e[0]) ? e.map(v) : [v(e)]
                            }(t.sizes);
                            e = "function" == typeof n.getFloor ? i.map(function(e) {
                                var t, r = w(n, e, l.b);
                                return r && (t = {
                                    ext: {
                                        ttx: {
                                            bidfloors: [r]
                                        }
                                    }
                                }),
                                f({}, e, t)
                            }) : i;
                            var o = function(e) {
                                return e.reduce(function(e, t) {
                                    return t.h * t.w < e.h * e.w ? t : e
                                })
                            }(i)
                              , a = function(e) {
                                return {
                                    ttx: {
                                        viewability: {
                                            amount: isNaN(e) ? e : Math.round(e)
                                        }
                                    }
                                }
                            }(function(e) {
                                return !function() {
                                    try {
                                        return u.getWindowSelf() !== u.getWindowTop()
                                    } catch (e) {
                                        return !0
                                    }
                                }() && null !== e
                            }(r) ? function(e, t) {
                                var r = 2 < arguments.length && void 0 !== arguments[2] ? arguments[2] : {}
                                  , n = r.w
                                  , i = r.h;
                                return "visible" === t.document.visibilityState ? function(e, t) {
                                    var r, n, i = 2 < arguments.length && void 0 !== arguments[2] ? arguments[2] : {}, o = i.w, a = i.h, s = function(e) {
                                        var t = 1 < arguments.length && void 0 !== arguments[1] ? arguments[1] : {}
                                          , r = t.w
                                          , n = t.h
                                          , i = e.getBoundingClientRect()
                                          , o = i.width
                                          , a = i.height
                                          , s = i.left
                                          , d = i.top
                                          , c = i.right
                                          , u = i.bottom;
                                        (0 === o || 0 === a) && r && n && (c = s + (o = r),
                                        u = d + (a = n));
                                        return {
                                            width: o,
                                            height: a,
                                            left: s,
                                            top: d,
                                            right: c,
                                            bottom: u
                                        }
                                    }(e, {
                                        w: o,
                                        h: a
                                    }), d = function(e) {
                                        for (var t = {
                                            left: e[0].left,
                                            right: e[0].right,
                                            top: e[0].top,
                                            bottom: e[0].bottom
                                        }, r = 1; r < e.length; ++r) {
                                            if (t.left = Math.max(t.left, e[r].left),
                                            t.right = Math.min(t.right, e[r].right),
                                            t.left >= t.right)
                                                return null;
                                            if (t.top = Math.max(t.top, e[r].top),
                                            t.bottom = Math.min(t.bottom, e[r].bottom),
                                            t.top >= t.bottom)
                                                return null
                                        }
                                        return t.width = t.right - t.left,
                                        t.height = t.bottom - t.top,
                                        t
                                    }([{
                                        left: 0,
                                        top: 0,
                                        right: t.innerWidth,
                                        bottom: t.innerHeight
                                    }, s]);
                                    return null === d ? 0 : (r = d.width * d.height,
                                    n = s.width * s.height,
                                    r / n * 100)
                                }(e, t, {
                                    w: n,
                                    h: i
                                }) : 0
                            }(r, u.getWindowTop(), o) : y);
                            return {
                                format: e,
                                ext: a
                            }
                        }(t)));
                        u.deepAccess(t, "mediaTypes.video") && (a.imp[0].video = function(e) {
                            var t = u.deepAccess(e, "mediaTypes.video", {})
                              , r = u.deepAccess(e, "params.video", {})
                              , n = m(m({}, t), r)
                              , i = {}
                              , o = v(n.playerSize[0])
                              , a = o.w
                              , s = o.h;
                            i.w = a,
                            i.h = s,
                            g.forEach(function(e) {
                                n.hasOwnProperty(e) && (i[e] = n[e])
                            });
                            var d = A(e);
                            i.placement = i.placement || 2,
                            d === h.INSTREAM && (i.startdelay = i.startdelay || 0,
                            i.placement = 1);
                            {
                                var c;
                                "function" != typeof e.getFloor || (c = w(e, {
                                    w: i.w,
                                    h: i.h
                                }, l.d)) && f(i, {
                                    ext: {
                                        ttx: {
                                            bidfloors: [c]
                                        }
                                    }
                                })
                            }
                            return i
                        }(t));
                        a.imp[0].ext = {
                            ttx: {
                                prod: A(t)
                            }
                        },
                        a.site = {
                            id: s.siteId
                        },
                        o && (a.site.page = o);
                        a.id = t.bidId,
                        a.user = {
                            ext: {
                                consent: n.consentString
                            }
                        },
                        a.regs = {
                            ext: {
                                gdpr: !0 === n.gdprApplies ? 1 : 0,
                                us_privacy: i || null
                            }
                        },
                        a.ext = {
                            ttx: {
                                prebidStartedAt: Date.now(),
                                caller: [{
                                    name: "prebidjs",
                                    version: "4.21.0"
                                }]
                            }
                        },
                        t.schain && (a.source = {
                            ext: {
                                schain: t.schain
                            }
                        });
                        1 === s.test && (a.test = 1);
                        var d = p.b.getConfig("ttxSettings");
                        return {
                            method: "POST",
                            url: d && d.url || "".concat(c, "?guid=").concat(s.siteId),
                            data: JSON.stringify(a),
                            options: {
                                contentType: "text/plain",
                                withCredentials: !0
                            }
                        }
                    }({
                        bidRequest: e,
                        gdprConsent: r,
                        uspConsent: n,
                        pageUrl: i
                    })
                })
            },
            interpretResponse: function(e, t) {
                var r = [];
                return 0 < e.body.seatbid.length && 0 < e.body.seatbid[0].bid.length && r.push(function(e) {
                    var t = {
                        requestId: e.id,
                        bidderCode: i,
                        cpm: e.seatbid[0].bid[0].price,
                        width: e.seatbid[0].bid[0].w,
                        height: e.seatbid[0].bid[0].h,
                        ad: e.seatbid[0].bid[0].adm,
                        ttl: e.seatbid[0].bid[0].ttl || 60,
                        creativeId: e.seatbid[0].bid[0].crid,
                        mediaType: u.deepAccess(e.seatbid[0].bid[0], "ext.ttx.mediaType", l.b),
                        currency: e.cur,
                        netRevenue: !0
                    };
                    {
                        t.mediaType === l.d && ("xml" === u.deepAccess(e.seatbid[0].bid[0], "ext.ttx.vastType", "xml") ? t.vastXml = t.ad : t.vastUrl = t.ad)
                    }
                    return t
                }(e.body)),
                r
            },
            getUserSyncs: function(e, t, r, n) {
                var i = e.iframeEnabled ? d.uniqueSiteIds.map(function(e) {
                    return function(e) {
                        var t = e.siteId
                          , r = void 0 === t ? "zzz000000000003zzz" : t
                          , n = e.gdprConsent
                          , i = void 0 === n ? {} : n
                          , o = e.uspConsent
                          , a = p.b.getConfig("ttxSettings")
                          , s = a && a.syncUrl || b
                          , d = i.consentString
                          , c = i.gdprApplies
                          , u = {
                            type: "iframe",
                            url: "".concat(s, "&id=").concat(r, "&gdpr_consent=").concat(encodeURIComponent(d), "&us_privacy=").concat(encodeURIComponent(o))
                        };
                        "boolean" == typeof c && (u.url += "&gdpr=".concat(Number(c)));
                        return u
                    }({
                        gdprConsent: r,
                        uspConsent: n,
                        siteId: e
                    })
                }) : [];
                return d.uniqueSiteIds = [],
                i
            }
        };
        Object(n.registerBidder)(I)
    }
}, [163]);
atdpbjsChunk([366], {
    169: function(e, r, a) {
        e.exports = a(170)
    },
    170: function(e, r, a) {
        "use strict";
        Object.defineProperty(r, "__esModule", {
            value: !0
        }),
        r.resetUserSync = function() {
            d = !1
        }
        ,
        a.d(r, "spec", function() {
            return h
        }),
        r.hasValidSupplyChainParams = t;
        var l = a(0)
          , n = a(1)
          , d = !1;
        var h = {
            code: "aardvark",
            gvlid: 52,
            aliases: ["adsparc", "safereach"],
            isBidRequestValid: function(e) {
                return "string" == typeof e.params.ai && !!e.params.ai.length && "string" == typeof e.params.sc && !!e.params.sc.length
            },
            buildRequests: function(e, a) {
                var n, t = [], s = [], i = {}, o = a.refererInfo.referer, d = [], p = "", c = window.innerWidth, u = window.innerHeight;
                try {
                    var r = l.getWindowTop();
                    r.rtkcategories && Array.isArray(r.rtkcategories) && (d = r.rtkcategories),
                    c = r.innerWidth,
                    u = r.innerHeight
                } catch (e) {}
                return l.isStr(l.deepAccess(e, "0.userId.tdid")) && (p = e[0].userId.tdid),
                n = h.serializeSupplyChain(l.deepAccess(e, "0.schain")),
                l._each(e, function(e) {
                    var r = i[e.params.ai];
                    r || (r = {
                        shortCodes: [],
                        payload: {
                            version: 1,
                            jsonp: !1,
                            rtkreferer: o,
                            w: c,
                            h: u
                        },
                        endpoint: "bidder.rtk.io"
                    },
                    p && (r.payload.tdid = p),
                    n && (r.payload.schain = n),
                    d && d.length && (r.payload.categories = d.slice(0)),
                    e.params.categories && e.params.categories.length && (r.payload.categories = r.payload.categories || [],
                    l._each(e.params.categories, function(e) {
                        r.payload.categories.push(e)
                    })),
                    a.gdprConsent && (r.payload.gdpr = !1,
                    "boolean" == typeof a.gdprConsent.gdprApplies && (r.payload.gdpr = a.gdprConsent.gdprApplies),
                    r.payload.gdpr && (r.payload.consent = a.gdprConsent.consentString)),
                    i[e.params.ai] = r,
                    t.push(e.params.ai)),
                    a.uspConsent && (r.payload.us_privacy = a.uspConsent),
                    r.shortCodes.push(e.params.sc),
                    r.payload[e.params.sc] = e.bidId,
                    "string" == typeof e.params.host && e.params.host.length && e.params.host !== r.endpoint && (r.endpoint = e.params.host)
                }),
                l._each(t, function(e) {
                    var r = i[e];
                    s.push({
                        method: "GET",
                        url: "https://".concat(r.endpoint, "/").concat(e, "/").concat(r.shortCodes.join("_"), "/aardvark"),
                        data: r.payload,
                        bidderRequest: a
                    })
                }),
                s
            },
            interpretResponse: function(e) {
                var n = [];
                return Array.isArray(e.body) || (e.body = [e.body]),
                l._each(e.body, function(e) {
                    var r = +(e.cpm || 0);
                    if (r) {
                        var a = {
                            requestId: e.cid,
                            cpm: r,
                            width: e.width || 0,
                            height: e.height || 0,
                            currency: e.currency ? e.currency : "USD",
                            netRevenue: !e.netRevenue || e.netRevenue,
                            ttl: e.ttl ? e.ttl : 300,
                            creativeId: e.creativeId || 0
                        };
                        switch (e.hasOwnProperty("dealId") && (a.dealId = e.dealId),
                        e.hasOwnProperty("ex") && (a.ex = e.ex),
                        e.media) {
                        case "banner":
                            a.ad = e.adm + l.createTrackPixelHtml(decodeURIComponent(e.nurl));
                            break;
                        default:
                            return l.logError("bad Aardvark response (media)", e)
                        }
                        n.push(a)
                    }
                }),
                n
            },
            getUserSyncs: function(e, r, a, n) {
                var t = []
                  , s = []
                  , i = !1;
                if (a && "boolean" == typeof a.gdprApplies && (i = a.gdprApplies),
                !e.iframeEnabled)
                    return l.logWarn("Aardvark: Please enable iframe based user sync."),
                    t;
                if (d)
                    return t;
                d = !0,
                i && (s.push(["g", "1"]),
                s.push(["c", a.consentString])),
                n && s.push(["us_privacy", n]);
                var o = "";
                return s.length && (o = "?" + s.map(function(e) {
                    return e[0] + "=" + encodeURIComponent(e[1])
                }).join("&")),
                t.push({
                    type: "iframe",
                    url: "https://".concat("sync.rtk.io", "/cs").concat(o)
                }),
                t
            },
            serializeSupplyChain: function(e) {
                return t(e) ? "".concat(e.ver, ",").concat(e.complete, "!").concat(h.serializeSupplyChainNodes(e.nodes)) : ""
            },
            serializeSupplyChainNodes: function(e) {
                var a = ["asi", "sid", "hp", "rid", "name", "domain"];
                return e.map(function(r) {
                    return a.map(function(e) {
                        return encodeURIComponent(r[e] || "")
                    }).join(",")
                }).join("!")
            }
        };
        function t(e) {
            if (!e || !e.nodes)
                return !1;
            var a = ["asi", "sid", "hp"]
              , r = e.nodes.reduce(function(e, r) {
                return e ? a.every(function(e) {
                    return r[e]
                }) : e
            }, !0);
            return r || l.logError("Aardvark: required schain params missing"),
            r
        }
        Object(n.registerBidder)(h)
    }
}, [169]);
atdpbjsChunk([336], {
    245: function(e, t, r) {
        e.exports = r(246)
    },
    246: function(e, j, P) {
        "use strict";
        Object.defineProperty(j, "__esModule", {
            value: !0
        }),
        function(b) {
            P.d(j, "VIDEO_ENDPOINT", function() {
                return s
            }),
            P.d(j, "BANNER_ENDPOINT", function() {
                return d
            }),
            P.d(j, "OUTSTREAM_SRC", function() {
                return u
            }),
            P.d(j, "VIDEO_TARGETING", function() {
                return w
            }),
            P.d(j, "DEFAULT_MIMES", function() {
                return T
            }),
            P.d(j, "spec", function() {
                return p
            });
            var v = P(0)
              , r = P(3)
              , e = P(1)
              , a = P(2)
              , t = P(10)
              , m = P.n(t)
              , n = P(12)
              , h = P.n(n);
            function g() {
                return (g = Object.assign || function(e) {
                    for (var t = 1; t < arguments.length; t++) {
                        var r = arguments[t];
                        for (var n in r)
                            Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n])
                    }
                    return e
                }
                ).apply(this, arguments)
            }
            function i(e, t) {
                return function(e) {
                    if (Array.isArray(e))
                        return e
                }(e) || function(e, t) {
                    if ("undefined" == typeof Symbol || !(Symbol.iterator in Object(e)))
                        return;
                    var r = []
                      , n = !0
                      , i = !1
                      , a = void 0;
                    try {
                        for (var o, s = e[Symbol.iterator](); !(n = (o = s.next()).done) && (r.push(o.value),
                        !t || r.length !== t); n = !0)
                            ;
                    } catch (e) {
                        i = !0,
                        a = e
                    } finally {
                        try {
                            n || null == s.return || s.return()
                        } finally {
                            if (i)
                                throw a
                        }
                    }
                    return r
                }(e, t) || function(e, t) {
                    if (!e)
                        return;
                    if ("string" == typeof e)
                        return o(e, t);
                    var r = Object.prototype.toString.call(e).slice(8, -1);
                    "Object" === r && e.constructor && (r = e.constructor.name);
                    if ("Map" === r || "Set" === r)
                        return Array.from(e);
                    if ("Arguments" === r || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))
                        return o(e, t)
                }(e, t) || function() {
                    throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
                }()
            }
            function o(e, t) {
                (null == t || t > e.length) && (t = e.length);
                for (var r = 0, n = new Array(t); r < t; r++)
                    n[r] = e[r];
                return n
            }
            var y = "advangelists"
              , s = "https://nep.advangelists.com/xp/get?pubid="
              , d = "https://nep.advangelists.com/xp/get?pubid="
              , u = "https://player-cdn.beachfrontmedia.com/playerapi/loader/outstream.js"
              , w = ["mimes", "playbackmethod", "maxduration", "skip"]
              , T = ["video/mp4", "application/javascript"]
              , c = ""
              , p = {
                code: y,
                supportedMediaTypes: [a.b, a.d],
                isBidRequestValid: function(e) {
                    return void 0 !== e && ((e.bidder === y || void 0 !== e.params) && ("" !== e && "" !== e.params.placement && "" !== e.params.pubid))
                },
                buildRequests: function(e, t) {
                    var r = []
                      , n = e.filter(function(e) {
                        return f(t = e) && S(t, "pubid") && S(t, "placement");
                        var t
                    })
                      , i = e.filter(function(e) {
                        return function(e) {
                            return v.deepAccess(e, "mediaTypes.banner") || !f(e)
                        }(t = e) && l(t, "pubid") && l(t, "placement");
                        var t
                    });
                    return n.forEach(function(e) {
                        c = S(e, "pubid"),
                        r.push({
                            method: "POST",
                            url: s + c,
                            data: function(e, t) {
                                var r = U(t)
                                  , n = W()
                                  , i = function(e) {
                                    return x(v.deepAccess(e, "mediaTypes.video.playerSize") || e.sizes)
                                }(e)
                                  , a = function(e) {
                                    return e && e.length ? e[0] : {
                                        w: void 0,
                                        h: void 0
                                    }
                                }(i)
                                  , o = function(r) {
                                    return Object.keys(Object(r.params.video)).filter(function(e) {
                                        return h()(w, e)
                                    }).reduce(function(e, t) {
                                        return e[t] = r.params.video[t],
                                        e
                                    }, {})
                                }(e)
                                  , s = {
                                    device: {
                                        langauge: b.navigator.language.split("-")[0],
                                        dnt: 1 === b.navigator.doNotTrack ? 1 : 0,
                                        devicetype: A() ? 4 : I() ? 3 : 2,
                                        js: 1,
                                        os: function() {
                                            var e = m()([{
                                                s: "Android",
                                                r: /Android/
                                            }, {
                                                s: "iOS",
                                                r: /(iPhone|iPad|iPod)/
                                            }, {
                                                s: "Mac OS X",
                                                r: /Mac OS X/
                                            }, {
                                                s: "Mac OS",
                                                r: /(MacPPC|MacIntel|Mac_PowerPC|Macintosh)/
                                            }, {
                                                s: "Linux",
                                                r: /(Linux|X11)/
                                            }, {
                                                s: "Windows 10",
                                                r: /(Windows 10.0|Windows NT 10.0)/
                                            }, {
                                                s: "Windows 8.1",
                                                r: /(Windows 8.1|Windows NT 6.3)/
                                            }, {
                                                s: "Windows 8",
                                                r: /(Windows 8|Windows NT 6.2)/
                                            }, {
                                                s: "Windows 7",
                                                r: /(Windows 7|Windows NT 6.1)/
                                            }, {
                                                s: "Windows Vista",
                                                r: /Windows NT 6.0/
                                            }, {
                                                s: "Windows Server 2003",
                                                r: /Windows NT 5.2/
                                            }, {
                                                s: "Windows XP",
                                                r: /(Windows NT 5.1|Windows XP)/
                                            }, {
                                                s: "UNIX",
                                                r: /UNIX/
                                            }, {
                                                s: "Search Bot",
                                                r: /(nuhk|Googlebot|Yammybot|Openbot|Slurp|MSNBot|Ask Jeeves\/Teoma|ia_archiver)/
                                            }], function(e) {
                                                return e.r.test(navigator.userAgent)
                                            });
                                            return e ? e.s : "unknown"
                                        }()
                                    },
                                    at: 2,
                                    site: {},
                                    tmax: 3e3,
                                    cur: ["USD"],
                                    id: e.bidId,
                                    imp: [],
                                    regs: {
                                        ext: {}
                                    },
                                    user: {
                                        ext: {}
                                    }
                                };
                                s.site.page = r.href,
                                s.site.domain = r.hostname,
                                s.site.search = r.search,
                                s.site.domain = r.hostname,
                                s.site.ref = n,
                                s.site.mobile = A() ? 1 : 0;
                                var d = 0 === r.protocol.indexOf("https") ? 1 : 0;
                                s.device.dnt = O() ? 1 : 0,
                                N(s.site, "name", function() {
                                    return b.top.document.title
                                }),
                                N(s.device, "h", function() {
                                    return b.screen.height
                                }),
                                N(s.device, "w", function() {
                                    return b.screen.width
                                });
                                for (var u = S(e, "placement"), c = 0; c < i.length; c++)
                                    s.imp.push({
                                        id: "" + c,
                                        displaymanager: y,
                                        displaymanagerver: "1.0",
                                        tagId: u,
                                        bidfloor: 2,
                                        bidfloorcur: "USD",
                                        secure: d,
                                        video: g({
                                            id: v.generateUUID(),
                                            pos: 0,
                                            w: a.w,
                                            h: a.h,
                                            mimes: T
                                        }, o)
                                    });
                                {
                                    var p, f, l;
                                    t && t.gdprConsent && (p = t.gdprConsent,
                                    f = p.gdprApplies,
                                    l = p.consentString,
                                    s.regs.ext = {
                                        gdpr: f ? 1 : 0
                                    },
                                    s.user.ext = {
                                        consent: l
                                    })
                                }
                                return s
                            }(e, t),
                            bidRequest: e
                        })
                    }),
                    i.forEach(function(e) {
                        c = l(e, "pubid"),
                        r.push({
                            method: "POST",
                            url: d + c,
                            data: function(e, t) {
                                var r = U(t)
                                  , n = W()
                                  , i = function(e) {
                                    return x(v.deepAccess(e, "mediaTypes.banner.sizes") || e.sizes)
                                }(e)
                                  , a = {
                                    device: {
                                        langauge: b.navigator.language.split("-")[0],
                                        dnt: 1 === b.navigator.doNotTrack ? 1 : 0,
                                        devicetype: A() ? 4 : I() ? 3 : 2,
                                        js: 1
                                    },
                                    at: 2,
                                    site: {},
                                    tmax: 3e3,
                                    cur: ["USD"],
                                    id: e.bidId,
                                    imp: [],
                                    regs: {
                                        ext: {}
                                    },
                                    user: {
                                        ext: {}
                                    }
                                };
                                a.site.page = r.href,
                                a.site.domain = r.hostname,
                                a.site.search = r.search,
                                a.site.domain = r.hostname,
                                a.site.ref = n,
                                a.site.mobile = A() ? 1 : 0;
                                var o = 0 === r.protocol.indexOf("https") ? 1 : 0;
                                a.device.dnt = O() ? 1 : 0,
                                N(a.site, "name", function() {
                                    return b.top.document.title
                                }),
                                N(a.device, "h", function() {
                                    return b.screen.height
                                }),
                                N(a.device, "w", function() {
                                    return b.screen.width
                                });
                                for (var s = l(e, "placement"), d = 0; d < i.length; d++) {
                                    var u = i[d];
                                    a.imp.push({
                                        id: "" + d,
                                        displaymanager: y,
                                        displaymanagerver: "1.0",
                                        tagId: s,
                                        bidfloor: 2,
                                        bidfloorcur: "USD",
                                        secure: o,
                                        banner: {
                                            id: v.generateUUID(),
                                            pos: 0,
                                            w: u.w,
                                            h: u.h
                                        }
                                    })
                                }
                                {
                                    var c, p, f;
                                    t && t.gdprConsent && (c = t.gdprConsent,
                                    p = c.gdprApplies,
                                    f = c.consentString,
                                    a.regs.ext = {
                                        gdpr: p ? 1 : 0
                                    },
                                    a.user.ext = {
                                        consent: f
                                    })
                                }
                                return a
                            }(e, t),
                            bidRequest: e
                        })
                    }),
                    r
                },
                interpretResponse: function(e, t) {
                    var r = t.bidRequest
                      , n = e.body;
                    if (null !== n && 0 == v.isEmpty(n)) {
                        if (f(r)) {
                            var i = {
                                requestId: n.id,
                                bidderCode: y,
                                cpm: n.seatbid[0].bid[0].price,
                                width: n.seatbid[0].bid[0].w,
                                height: n.seatbid[0].bid[0].h,
                                ttl: n.seatbid[0].bid[0].ttl || 60,
                                creativeId: n.seatbid[0].bid[0].crid,
                                currency: n.cur,
                                mediaType: a.d,
                                netRevenue: !0
                            };
                            return n.seatbid[0].bid[0].adm ? (i.vastXml = n.seatbid[0].bid[0].adm,
                            i.adResponse = {
                                content: n.seatbid[0].bid[0].adm
                            }) : i.vastUrl = n.seatbid[0].bid[0].nurl,
                            i
                        }
                        return {
                            requestId: n.id,
                            bidderCode: y,
                            cpm: n.seatbid[0].bid[0].price,
                            width: n.seatbid[0].bid[0].w,
                            height: n.seatbid[0].bid[0].h,
                            ad: n.seatbid[0].bid[0].adm,
                            ttl: n.seatbid[0].bid[0].ttl || 60,
                            creativeId: n.seatbid[0].bid[0].crid,
                            currency: n.cur,
                            mediaType: a.b,
                            netRevenue: !0
                        }
                    }
                }
            };
            function f(e) {
                return v.deepAccess(e, "mediaTypes.video")
            }
            function S(e, t) {
                return v.deepAccess(e, "params.video." + t) || v.deepAccess(e, "params." + t)
            }
            function l(e, t) {
                return v.deepAccess(e, "params.banner." + t) || v.deepAccess(e, "params." + t)
            }
            function A() {
                return /(ios|ipod|ipad|iphone|android)/i.test(navigator.userAgent)
            }
            function I() {
                return /(smart[-]?tv|hbbtv|appletv|googletv|hdmi|netcast\.tv|viera|nettv|roku|\bdtv\b|sonydtv|inettvbrowser|\btv\b)/i.test(navigator.userAgent)
            }
            function O() {
                return "1" === navigator.doNotTrack || "1" === window.doNotTrack || "1" === navigator.msDoNoTrack || "yes" === navigator.doNotTrack
            }
            function N(e, t, r) {
                try {
                    e[t] = "function" == typeof r ? r() : r
                } catch (e) {}
            }
            function x(e) {
                return v.parseSizesInput(e).map(function(e) {
                    var t = i(e.split("x"), 2)
                      , r = t[0]
                      , n = t[1];
                    return {
                        w: parseInt(r, 10) || void 0,
                        h: parseInt(n, 10) || void 0
                    }
                })
            }
            function W() {
                try {
                    return window.top.document.referrer
                } catch (e) {
                    return ""
                }
            }
            function U(e) {
                var t = e && e.refererInfo && e.refererInfo.referer;
                return v.parseUrl(r.b.getConfig("pageUrl") || t, {
                    decodeSearchAsString: !0
                })
            }
            Object(e.registerBidder)(p)
        }
        .call(j, P(35))
    }
}, [245]);
atdpbjsChunk([332], {
    257: function(e, n, r) {
        e.exports = r(258)
    },
    258: function(e, n, r) {
        "use strict";
        Object.defineProperty(n, "__esModule", {
            value: !0
        }),
        r.d(n, "spec", function() {
            return a
        });
        var o = r(0)
          , t = r(1)
          , d = r(3)
          , i = r(10)
          , s = r.n(i)
          , a = {
            code: "adyoulike",
            aliases: ["ayl"],
            isBidRequestValid: function(e) {
                var n = u(c(e));
                return !!(e.params && e.params.placement && n.width && n.height)
            },
            buildRequests: function(e, n) {
                var r = {
                    Version: "1.0",
                    Bids: e.reduce(function(e, n) {
                        var r = c(n)
                          , t = u(r);
                        return e[n.bidId] = {},
                        e[n.bidId].PlacementID = n.params.placement,
                        e[n.bidId].TransactionID = n.transactionId,
                        e[n.bidId].Width = t.width,
                        e[n.bidId].Height = t.height,
                        e[n.bidId].AvailableSizes = r.join(","),
                        e
                    }, {}),
                    PageRefreshed: function() {
                        try {
                            if (performance && performance.navigation)
                                return performance.navigation.type === performance.navigation.TYPE_RELOAD
                        } catch (e) {}
                        return !1
                    }()
                };
                n && n.gdprConsent && (r.gdprConsent = {
                    consentString: n.gdprConsent.consentString,
                    consentRequired: "boolean" == typeof n.gdprConsent.gdprApplies ? n.gdprConsent.gdprApplies : null
                }),
                n && n.uspConsent && (r.uspConsent = n.uspConsent);
                var t, i, a = JSON.stringify(r);
                return {
                    method: "POST",
                    url: (t = n,
                    i = function(e) {
                        var n = s()(e, function(e) {
                            return e.params.DC
                        });
                        if (n)
                            return "-" + n.params.DC;
                        return ""
                    }(e),
                    o.buildUrl({
                        protocol: "https",
                        host: "".concat("hb-api").concat(i, ".omnitagjs.com"),
                        pathname: "/hb-api/prebid/v1",
                        search: function(e) {
                            var n, r = {};
                            !e || (n = e.refererInfo) && (r.RefererUrl = encodeURIComponent(n.referer),
                            0 < n.numIframes && (r.SafeFrame = !0));
                            var t = function() {
                                var e;
                                if (window.self !== window.top)
                                    try {
                                        e = window.top.document.head.querySelector('link[rel="canonical"][href]')
                                    } catch (e) {}
                                else
                                    e = document.head.querySelector('link[rel="canonical"][href]');
                                return e ? e.href : ""
                            }();
                            t && (r.CanonicalUrl = encodeURIComponent(t));
                            var i = d.b.getConfig("publisherDomain");
                            return i && (r.PublisherDomain = encodeURIComponent(i)),
                            r
                        }(t)
                    })),
                    data: a,
                    options: {
                        withCredentials: !0
                    }
                }
            },
            interpretResponse: function(e, n) {
                var r = []
                  , t = {};
                try {
                    t = JSON.parse(n.data).Bids
                } catch (e) {}
                return e.body.forEach(function(e) {
                    var n = function(e, n) {
                        if (!e || !e.Ad)
                            return;
                        n && n[e.BidID] && (e.Width && "0" !== e.Width || (e.Width = n[e.BidID].Width),
                        e.Height && "0" !== e.Height || (e.Height = n[e.BidID].Height));
                        return {
                            requestId: e.BidID,
                            width: e.Width,
                            height: e.Height,
                            ad: e.Ad,
                            ttl: 3600,
                            creativeId: e.CreativeID,
                            cpm: e.Price,
                            netRevenue: !0,
                            currency: "USD"
                        }
                    }(e, t);
                    n && r.push(n)
                }),
                r
            }
        };
        function c(e) {
            var n = e.sizes;
            return e.mediaTypes && e.mediaTypes.banner && (n = e.mediaTypes.banner.sizes),
            o.parseSizesInput(n)
        }
        function u(e) {
            var n = {}
              , r = e[0];
            if ("string" != typeof r)
                return n;
            var t = r.toUpperCase().split("X")
              , i = parseInt(t[0], 10);
            i && (n.width = i);
            var a = parseInt(t[1], 10);
            return a && (n.height = a),
            n
        }
        Object(t.registerBidder)(a)
    }
}, [257]);
atdpbjsChunk([328], {
    265: function(e, t, r) {
        e.exports = r(266)
    },
    266: function(e, t, r) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        }),
        r.d(t, "spec", function() {
            return M
        });
        var s = r(0)
          , n = r(1)
          , i = r(2);
        function a() {
            return (a = Object.assign || function(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var r = arguments[t];
                    for (var n in r)
                        Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n])
                }
                return e
            }
            ).apply(this, arguments)
        }
        function c(e) {
            return (c = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
                return typeof e
            }
            : function(e) {
                return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
            }
            )(e)
        }
        function o() {
            var e = p(["dcn=", "&pos=", "&cmd=bid", ""]);
            return o = function() {
                return e
            }
            ,
            e
        }
        function u() {
            var e = p(["", "/bidRequest?"]);
            return u = function() {
                return e
            }
            ,
            e
        }
        function d() {
            var e = p(["", "/pubapi/3.0/", "/", "/", "/", "/ADTECH;v=2;cmd=bid;cors=yes;alias=", ";misc=", ";", ""]);
            return d = function() {
                return e
            }
            ,
            e
        }
        function p(e, t) {
            return t = t || e.slice(0),
            Object.freeze(Object.defineProperties(e, {
                raw: {
                    value: Object.freeze(t)
                }
            }))
        }
        var l = {
            AOL: "aol",
            VERIZON: "verizon",
            ONEMOBILE: "onemobile",
            ONEDISPLAY: "onedisplay"
        }
          , m = {
            GET: "display-get"
        }
          , f = {
            GET: "mobile-get",
            POST: "mobile-post"
        }
          , b = {
            TAG: "iframe",
            TYPE: "iframe"
        }
          , v = {
            TAG: "img",
            TYPE: "image"
        }
          , h = ["adserver.org", "criteo.com", "id5-sync.com", "intentiq.com", "liveintent.com", "quantcast.com", "verizonmedia.com", "liveramp.com"]
          , g = S(d(), "host", "network", "placement", "pageid", "sizeid", "alias", "misc", "dynamicParams")
          , y = S(u(), "host")
          , O = S(o(), "dcn", "pos", "dynamicParams")
          , E = {
            us: "adserver-us.adtech.advertising.com",
            eu: "adserver-eu.adtech.advertising.com",
            as: "adserver-as.adtech.advertising.com"
        }
          , I = "https"
          , P = 1;
        function S(a) {
            for (var e = arguments.length, r = new Array(1 < e ? e - 1 : 0), t = 1; t < e; t++)
                r[t - 1] = arguments[t];
            return function() {
                for (var e = arguments.length, n = new Array(e), t = 0; t < e; t++)
                    n[t] = arguments[t];
                var i = n[n.length - 1] || {}
                  , o = [a[0]];
                return r.forEach(function(e, t) {
                    var r = s.isInteger(e) ? n[e] : i[e];
                    o.push(r, a[t + 1])
                }),
                o.join("")
            }
        }
        function T(e) {
            return e === l.AOL || e === l.VERIZON || e === l.ONEMOBILE
        }
        function x(e) {
            if (T(e.bidder) && e.params.id && e.params.imp && e.params.imp[0]) {
                var t = e.params.imp[0];
                return t.id && t.tagid && (t.banner && t.banner.w && t.banner.h || t.video && t.video.mimes && t.video.minduration && t.video.maxduration)
            }
        }
        function R(e) {
            return T(e.bidder) && e.params.dcn && e.params.pos
        }
        function C(e) {
            return ((t = e.bidder) === l.AOL || t === l.VERIZON || t === l.ONEDISPLAY) && e.params.placement && e.params.network;
            var t
        }
        function A(e) {
            return e.userIdAsEids.filter(function(e) {
                return -1 !== h.indexOf(e.source)
            })
        }
        var M = {
            code: l.AOL,
            gvlid: 25,
            aliases: [l.ONEMOBILE, l.ONEDISPLAY, l.VERIZON],
            supportedMediaTypes: [i.b],
            isBidRequestValid: function(e) {
                return C(e) || (R(t = e) || x(t));
                var t
            },
            buildRequests: function(e, t) {
                var n = this
                  , i = {};
                return t && (i.gdpr = t.gdprConsent,
                i.uspConsent = t.uspConsent),
                e.map(function(e) {
                    var t, r = R(t = e) ? f.GET : x(t) ? f.POST : C(t) ? m.GET : void 0;
                    if (r)
                        return n.formatBidRequest(r, e, i)
                })
            },
            interpretResponse: function(e, t) {
                var r = e.body;
                if (r) {
                    var n = this._parseBidResponse(r, t);
                    if (n)
                        return n
                } else
                    s.logError("Empty bid response", t.bidderCode, r)
            },
            getUserSyncs: function(e, t) {
                var r = !s.isEmpty(t) && t[0].body;
                return r && r.ext && r.ext.pixels ? this.parsePixelItems(r.ext.pixels) : []
            },
            formatBidRequest: function(e, t, r) {
                var n;
                switch (e) {
                case m.GET:
                    n = {
                        url: this.buildMarketplaceUrl(t, r),
                        method: "GET",
                        ttl: 60
                    };
                    break;
                case f.GET:
                    n = {
                        url: this.buildOneMobileGetUrl(t, r),
                        method: "GET",
                        ttl: 3600
                    };
                    break;
                case f.POST:
                    n = {
                        url: this.buildOneMobileBaseUrl(t),
                        method: "POST",
                        ttl: 3600,
                        data: this.buildOpenRtbRequestData(t, r),
                        options: {
                            contentType: "application/json",
                            customHeaders: {
                                "x-openrtb-version": "2.2"
                            }
                        }
                    }
                }
                return n.bidderCode = t.bidder,
                n.bidId = t.bidId,
                n.userSyncOn = t.params.userSyncOn,
                n
            },
            buildMarketplaceUrl: function(e, t) {
                var r, n = e.params, i = n.server, o = n.region || "us";
                return E.hasOwnProperty(o) || (s.logWarn("Unknown region '".concat(o, "' for AOL bidder.")),
                o = "us"),
                r = i || E[o],
                n.region = o,
                this.applyProtocol(g({
                    host: r,
                    network: n.network,
                    placement: parseInt(n.placement),
                    pageid: n.pageId || 0,
                    sizeid: n.sizeId || 0,
                    alias: n.alias || s.getUniqueIdentifierStr(),
                    misc: (new Date).getTime(),
                    dynamicParams: this.formatMarketplaceDynamicParams(n, t)
                }))
            },
            buildOneMobileGetUrl: function(e, t) {
                var r = e.params
                  , n = r.dcn
                  , i = r.pos
                  , o = r.ext;
                "object" === c(e.userId) && (o = o || {},
                A(e).forEach(function(e) {
                    o["eid" + e.source] = e.uids[0].id
                }));
                var a, s = this.buildOneMobileBaseUrl(e);
                return n && i && (a = this.formatOneMobileDynamicParams(o, t),
                s += O({
                    dcn: n,
                    pos: i,
                    dynamicParams: a
                })),
                s
            },
            buildOneMobileBaseUrl: function(e) {
                return this.applyProtocol(y({
                    host: e.params.host || "c2shb.ssp.yahoo.com"
                }))
            },
            applyProtocol: function(e) {
                return /^https?:\/\//i.test(e) ? e : 0 === e.indexOf("//") ? "".concat(I, ":").concat(e) : "".concat(I, "://").concat(e)
            },
            formatMarketplaceDynamicParams: function(e, t) {
                var r = 0 < arguments.length && void 0 !== e ? e : {}
                  , n = 1 < arguments.length && void 0 !== t ? t : {}
                  , i = {};
                r.bidFloor && (i.bidfloor = r.bidFloor),
                a(i, this.formatKeyValues(r.keyValues)),
                a(i, this.formatConsentData(n));
                var o = "";
                return s._each(i, function(e, t) {
                    o += "".concat(t, "=").concat(encodeURIComponent(e), ";")
                }),
                o
            },
            formatOneMobileDynamicParams: function(e, t) {
                var r = 0 < arguments.length && void 0 !== e ? e : {}
                  , n = 1 < arguments.length && void 0 !== t ? t : {};
                this.isSecureProtocol() && (r.secure = P),
                a(r, this.formatConsentData(n));
                var i = "";
                return s._each(r, function(e, t) {
                    i += "&".concat(t, "=").concat(encodeURIComponent(e))
                }),
                i
            },
            buildOpenRtbRequestData: function(e, t) {
                var r, n = 1 < arguments.length && void 0 !== t ? t : {}, i = {
                    id: e.params.id,
                    imp: e.params.imp
                };
                return this.isEUConsentRequired(n) && (s.deepSetValue(i, "regs.ext.gdpr", P),
                n.gdpr.consentString && s.deepSetValue(i, "user.ext.consent", n.gdpr.consentString)),
                n.uspConsent && s.deepSetValue(i, "regs.ext.us_privacy", n.uspConsent),
                "object" === c(e.userId) && (i.user = i.user || {},
                i.user.ext = i.user.ext || {},
                0 < (r = A(e)).length && (i.user.ext.eids = r)),
                i
            },
            isEUConsentRequired: function(e) {
                return !!(e && e.gdpr && e.gdpr.gdprApplies)
            },
            formatKeyValues: function(e) {
                var r = {};
                return s._each(e, function(e, t) {
                    r["kv".concat(t)] = e
                }),
                r
            },
            formatConsentData: function(e) {
                var t = {};
                return this.isEUConsentRequired(e) && (t.gdpr = P,
                e.gdpr.consentString && (t.euconsent = e.gdpr.consentString)),
                e.uspConsent && (t.us_privacy = e.uspConsent),
                t
            },
            parsePixelItems: function(e) {
                var t, n = /\w*(?=\s)/, i = /src=("|')(.*?)\1/, o = [];
                return !e || (t = e.match(/(img|iframe)[\s\S]*?src\s*=\s*("|')(.*?)\2/gi)) && t.forEach(function(e) {
                    var t = e.match(n)[0]
                      , r = e.match(i)[2];
                    t && t && o.push({
                        type: t === v.TAG ? v.TYPE : b.TYPE,
                        url: r
                    })
                }),
                o
            },
            _parseBidResponse: function(e, t) {
                var r, n;
                try {
                    r = e.seatbid[0].bid[0]
                } catch (e) {
                    return
                }
                if (r.ext && r.ext.encp)
                    n = r.ext.encp;
                else if (null === (n = r.price) || isNaN(n))
                    return void s.logError("Invalid price in bid response", l.AOL, r);
                return {
                    bidderCode: t.bidderCode,
                    requestId: t.bidId,
                    ad: r.adm,
                    cpm: n,
                    width: r.w,
                    height: r.h,
                    creativeId: r.crid || 0,
                    pubapiId: e.id,
                    currency: e.cur || "USD",
                    dealId: r.dealid,
                    netRevenue: !0,
                    ttl: t.ttl
                }
            },
            isOneMobileBidder: T,
            isSecureProtocol: function() {
                return "https:" === document.location.protocol
            }
        };
        Object(n.registerBidder)(M)
    }
}, [265]);
atdpbjsChunk([325], {
    275: function(e, r, a) {
        e.exports = a(276)
    },
    276: function(e, r, a) {
        "use strict";
        Object.defineProperty(r, "__esModule", {
            value: !0
        }),
        a.d(r, "spec", function() {
            return k
        });
        var f = a(11)
          , I = a(0)
          , w = a(3)
          , v = a(1)
          , g = a(2)
          , p = a(23)
          , t = a(10)
          , A = a.n(t)
          , n = a(12)
          , x = a.n(n)
          , y = a(25)
          , i = a(7);
        function s(e) {
            return (s = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
                return typeof e
            }
            : function(e) {
                return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
            }
            )(e)
        }
        function b() {
            return (b = Object.assign || function(e) {
                for (var r = 1; r < arguments.length; r++) {
                    var a = arguments[r];
                    for (var t in a)
                        Object.prototype.hasOwnProperty.call(a, t) && (e[t] = a[t])
                }
                return e
            }
            ).apply(this, arguments)
        }
        function C(e) {
            return function(e) {
                if (Array.isArray(e))
                    return o(e)
            }(e) || function(e) {
                if ("undefined" != typeof Symbol && Symbol.iterator in Object(e))
                    return Array.from(e)
            }(e) || function(e, r) {
                if (!e)
                    return;
                if ("string" == typeof e)
                    return o(e, r);
                var a = Object.prototype.toString.call(e).slice(8, -1);
                "Object" === a && e.constructor && (a = e.constructor.name);
                if ("Map" === a || "Set" === a)
                    return Array.from(e);
                if ("Arguments" === a || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(a))
                    return o(e, r)
            }(e) || function() {
                throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
            }()
        }
        function o(e, r) {
            (null == r || r > e.length) && (r = e.length);
            for (var a = 0, t = new Array(r); a < r; a++)
                t[a] = e[a];
            return t
        }
        var d = "appnexus"
          , S = "https://ib.adnxs.com/ut/v3/prebid"
          , c = ["id", "minduration", "maxduration", "skippable", "playback_method", "frameworks", "context", "skipoffset"]
          , T = ["age", "externalUid", "segments", "gender", "dnt", "language"]
          , E = ["geo", "device_id"]
          , O = ["enabled", "dongle", "member_id", "debug_timeout"]
          , u = {
            playback_method: {
                unknown: 0,
                auto_play_sound_on: 1,
                auto_play_sound_off: 2,
                click_to_play: 3,
                mouse_over: 4,
                auto_play_sound_unknown: 5
            },
            context: {
                unknown: 0,
                pre_roll: 1,
                mid_roll: 2,
                post_roll: 3,
                outstream: 4,
                "in-banner": 5
            }
        }
          , m = {
            body: "description",
            body2: "desc2",
            cta: "ctatext",
            image: {
                serverName: "main_image",
                requiredParams: {
                    required: !0
                }
            },
            icon: {
                serverName: "icon",
                requiredParams: {
                    required: !0
                }
            },
            sponsoredBy: "sponsored_by",
            privacyLink: "privacy_link",
            salePrice: "saleprice",
            displayUrl: "displayurl"
        }
          , l = "<script"
          , h = /\/\/cdn\.adnxs\.com\/v/
          , _ = "trk.js"
          , R = Object(i.b)(32, d)
          , k = {
            code: d,
            gvlid: 32,
            aliases: [{
                code: "appnexusAst",
                gvlid: 32
            }, {
                code: "brealtime"
            }, {
                code: "emxdigital",
                gvlid: 183
            }, {
                code: "pagescience"
            }, {
                code: "defymedia"
            }, {
                code: "gourmetads"
            }, {
                code: "matomy"
            }, {
                code: "featureforward"
            }, {
                code: "oftmedia"
            }, {
                code: "districtm",
                gvlid: 144
            }, {
                code: "adasta"
            }, {
                code: "beintoo",
                gvlid: 618
            }],
            supportedMediaTypes: [g.b, g.d, g.c],
            isBidRequestValid: function(e) {
                return !!(e.params.placementId || e.params.member && e.params.invCode)
            },
            buildRequests: function(e, r) {
                var t = e.map(N)
                  , n = A()(e, M)
                  , i = {};
                !0 === w.b.getConfig("coppa") && (i = {
                    coppa: !0
                }),
                n && Object.keys(n.params.user).filter(function(e) {
                    return x()(T, e)
                }).forEach(function(e) {
                    var r, a = I.convertCamelToUnderscore(e);
                    "segments" === e && I.isArray(n.params.user[e]) ? (r = [],
                    n.params.user[e].forEach(function(e) {
                        I.isNumber(e) ? r.push({
                            id: e
                        }) : I.isPlainObject(e) && r.push(e)
                    }),
                    i[a] = r) : "segments" !== e && (i[a] = n.params.user[e])
                });
                var a, s = A()(e, B);
                s && s.params && s.params.app && (a = {},
                Object.keys(s.params.app).filter(function(e) {
                    return x()(E, e)
                }).forEach(function(e) {
                    return a[e] = s.params.app[e]
                }));
                var o, d = A()(e, D);
                d && d.params && s.params.app && s.params.app.id && (o = {
                    appid: d.params.app.id
                });
                var p = {}
                  , c = {}
                  , u = R.getCookie("apn_prebid_debug") || null;
                if (u)
                    try {
                        p = JSON.parse(u)
                    } catch (e) {
                        I.logError("AppNexus Debug Auction Cookie Error:\n\n" + e)
                    }
                else {
                    var m = A()(e, V);
                    m && m.debug && (p = m.debug)
                }
                p && p.enabled && Object.keys(p).filter(function(e) {
                    return x()(O, e)
                }).forEach(function(e) {
                    c[e] = p[e]
                });
                var l, f = A()(e, z), v = f ? parseInt(f.params.member, 10) : 0, g = e[0].schain, y = A()(e, W), b = {
                    tags: C(t),
                    user: i,
                    sdk: {
                        source: "pbjs",
                        version: "4.21.0"
                    },
                    schain: g
                };
                y && (b.iab_support = {
                    omidpn: "Appnexus",
                    omidpv: "4.21.0"
                }),
                0 < v && (b.member_id = v),
                s && (b.device = a),
                d && (b.app = o),
                w.b.getConfig("adpod.brandCategoryExclusion") && (b.brand_category_uniqueness = !0),
                c.enabled && (b.debug = c,
                I.logInfo("AppNexus Debug Auction Settings:\n\n" + JSON.stringify(c, null, 4))),
                r && r.gdprConsent && (b.gdpr_consent = {
                    consent_string: r.gdprConsent.consentString,
                    consent_required: r.gdprConsent.gdprApplies
                }),
                r && r.uspConsent && (b.us_privacy = r.uspConsent),
                r && r.refererInfo && (l = {
                    rd_ref: encodeURIComponent(r.refererInfo.referer),
                    rd_top: r.refererInfo.reachedTop,
                    rd_ifs: r.refererInfo.numIframes,
                    rd_stk: r.refererInfo.stack.map(function(e) {
                        return encodeURIComponent(e)
                    }).join(",")
                },
                b.referrer_detection = l),
                A()(e, J) && e.filter(J).forEach(function(r) {
                    var e = function(e, r) {
                        var a = r.mediaTypes.video
                          , t = a.durationRangeSec
                          , n = a.requireExactDuration
                          , i = function(e) {
                            var r = e.adPodDurationSec
                              , a = e.durationRangeSec
                              , t = e.requireExactDuration
                              , n = I.getMinValueFromArray(a)
                              , i = Math.floor(r / n);
                            return t ? Math.max(i, a.length) : i
                        }(r.mediaTypes.video)
                          , s = I.getMaxValueFromArray(t)
                          , o = e.filter(function(e) {
                            return e.uuid === r.bidId
                        })
                          , d = I.fill.apply(I, C(o).concat([i]));
                        {
                            var p, c;
                            n ? (p = Math.ceil(i / t.length),
                            c = I.chunk(d, p),
                            t.forEach(function(r, e) {
                                c[e].map(function(e) {
                                    F(e, "minduration", r),
                                    F(e, "maxduration", r)
                                })
                            })) : d.map(function(e) {
                                return F(e, "maxduration", s)
                            })
                        }
                        return d
                    }(t, r)
                      , a = b.tags.filter(function(e) {
                        return e.uuid !== r.bidId
                    });
                    b.tags = [].concat(C(a), C(e))
                });
                var h = I.deepAccess(e[0], "userId.criteoId")
                  , _ = [];
                h && _.push({
                    source: "criteo.com",
                    id: h
                });
                var k = I.deepAccess(e[0], "userId.tdid");
                return k && _.push({
                    source: "adserver.org",
                    id: k,
                    rti_partner: "TDID"
                }),
                _.length && (b.eids = _),
                t[0].publisher_id && (b.publisher_id = t[0].publisher_id),
                function(e, a) {
                    var t = []
                      , n = {};
                    !function(e) {
                        var r = !0;
                        e && e.gdprConsent && e.gdprConsent.gdprApplies && 2 === e.gdprConsent.apiVersion && (r = !(!0 !== I.deepAccess(e.gdprConsent, "vendorData.purpose.consents.1")));
                        return r
                    }(a) && (n = {
                        withCredentials: !1
                    });
                    "TRUE" !== I.getParameterByName("apn_test").toUpperCase() && !0 !== w.b.getConfig("apn_test") || (n.customHeaders = {
                        "X-Is-Test": 1
                    });
                    {
                        var i, r;
                        15 < e.tags.length ? (i = I.deepClone(e),
                        I.chunk(e.tags, 15).forEach(function(e) {
                            i.tags = e;
                            var r = JSON.stringify(i);
                            t.push({
                                method: "POST",
                                url: S,
                                data: r,
                                bidderRequest: a,
                                options: n
                            })
                        })) : (r = JSON.stringify(e),
                        t = {
                            method: "POST",
                            url: S,
                            data: r,
                            bidderRequest: a,
                            options: n
                        })
                    }
                    return t
                }(b, r)
            },
            interpretResponse: function(e, r) {
                var i = this
                  , s = r.bidderRequest;
                e = e.body;
                var a, o = [];
                if (e && !e.error)
                    return e.tags && e.tags.forEach(function(e) {
                        var r, a, t, n = (r = e) && r.ads && r.ads.length && A()(r.ads, function(e) {
                            return e.rtb
                        });
                        n && 0 !== n.cpm && x()(i.supportedMediaTypes, n.ad_type) && ((a = function(r, e, a) {
                            var t = I.getBidRequest(r.uuid, [a])
                              , n = {
                                requestId: r.uuid,
                                cpm: e.cpm,
                                creativeId: e.creative_id,
                                dealId: e.deal_id,
                                currency: "USD",
                                netRevenue: !0,
                                ttl: 300,
                                adUnitCode: t.adUnitCode,
                                appnexus: {
                                    buyerMemberId: e.buyer_member_id,
                                    dealPriority: e.deal_priority,
                                    dealCode: e.deal_code
                                }
                            };
                            e.advertiser_id && (n.meta = b({}, n.meta, {
                                advertiserId: e.advertiser_id
                            }));
                            if (e.rtb.video) {
                                var i, s;
                                switch (b(n, {
                                    width: e.rtb.video.player_width,
                                    height: e.rtb.video.player_height,
                                    vastImpUrl: e.notify_url,
                                    ttl: 3600
                                }),
                                I.deepAccess(t, "mediaTypes.video.context")) {
                                case g.a:
                                    var o = Object(v.getIabSubCategory)(t.bidder, e.brand_category_id);
                                    n.meta = b({}, n.meta, {
                                        primaryCatId: o
                                    });
                                    var d = e.deal_priority;
                                    n.video = {
                                        context: g.a,
                                        durationSeconds: Math.floor(e.rtb.video.duration_ms / 1e3),
                                        dealTier: d
                                    },
                                    n.vastUrl = e.rtb.video.asset_url;
                                    break;
                                case y.b:
                                    n.adResponse = r,
                                    n.adResponse.ad = n.adResponse.ads[0],
                                    n.adResponse.ad.video = n.adResponse.ad.rtb.video,
                                    n.vastXml = e.rtb.video.content,
                                    e.renderer_url && (i = A()(a.bids, function(e) {
                                        return e.bidId === r.uuid
                                    }),
                                    s = I.deepAccess(i, "renderer.options"),
                                    n.renderer = function(e, r) {
                                        var a = 2 < arguments.length && void 0 !== arguments[2] ? arguments[2] : {}
                                          , t = f.a.install({
                                            id: r.renderer_id,
                                            url: r.renderer_url,
                                            config: a,
                                            loaded: !1,
                                            adUnitCode: e
                                        });
                                        try {
                                            t.setRender(H)
                                        } catch (e) {
                                            I.logWarn("Prebid Error calling setRender on renderer", e)
                                        }
                                        return t.setEventHandlers({
                                            impression: function() {
                                                return I.logMessage("AppNexus outstream video impression event")
                                            },
                                            loaded: function() {
                                                return I.logMessage("AppNexus outstream video loaded event")
                                            },
                                            ended: function() {
                                                I.logMessage("AppNexus outstream renderer video event"),
                                                document.querySelector("#".concat(e)).style.display = "none"
                                            }
                                        }),
                                        t
                                    }(n.adUnitCode, e, s));
                                    break;
                                case y.a:
                                    n.vastUrl = e.notify_url + "&redir=" + encodeURIComponent(e.rtb.video.asset_url)
                                }
                            } else if (e.rtb[g.c]) {
                                var p = e.rtb[g.c]
                                  , c = e.viewability.config.replace("src=", "data-src=")
                                  , u = p.javascript_trackers;
                                null == u ? u = c : I.isStr(u) ? u = [u, c] : u.push(c),
                                n[g.c] = {
                                    title: p.title,
                                    body: p.desc,
                                    body2: p.desc2,
                                    cta: p.ctatext,
                                    rating: p.rating,
                                    sponsoredBy: p.sponsored,
                                    privacyLink: p.privacy_link,
                                    address: p.address,
                                    downloads: p.downloads,
                                    likes: p.likes,
                                    phone: p.phone,
                                    price: p.price,
                                    salePrice: p.saleprice,
                                    clickUrl: p.link.url,
                                    displayUrl: p.displayurl,
                                    clickTrackers: p.link.click_trackers,
                                    impressionTrackers: p.impression_trackers,
                                    javascriptTrackers: u
                                },
                                p.main_img && (n.native.image = {
                                    url: p.main_img.url,
                                    height: p.main_img.height,
                                    width: p.main_img.width
                                }),
                                p.icon && (n.native.icon = {
                                    url: p.icon.url,
                                    height: p.icon.height,
                                    width: p.icon.width
                                })
                            } else {
                                b(n, {
                                    width: e.rtb.banner.width,
                                    height: e.rtb.banner.height,
                                    ad: e.rtb.banner.content
                                });
                                try {
                                    var m, l;
                                    e.rtb.trackers && (m = e.rtb.trackers[0].impression_urls[0],
                                    l = I.createTrackPixelHtml(m),
                                    n.ad += l)
                                } catch (e) {
                                    I.logError("Error appending tracking pixel", e)
                                }
                            }
                            return n
                        }(e, n, s)).mediaType = (t = n.ad_type) === g.d ? g.d : t === g.c ? g.c : g.b,
                        o.push(a))
                    }),
                    e.debug && e.debug.debug_info && (a = (a = "AppNexus Debug Auction for Prebid\n\n" + e.debug.debug_info).replace(/(<td>|<th>)/gm, "\t").replace(/(<\/td>|<\/th>)/gm, "\n").replace(/^<br>/gm, "").replace(/(<br>\n|<br>)/gm, "\n").replace(/<h1>(.*)<\/h1>/gm, "\n\n===== $1 =====\n\n").replace(/<h[2-6]>(.*)<\/h[2-6]>/gm, "\n\n*** $1 ***\n\n").replace(/(<([^>]+)>)/gim, ""),
                    I.logMessage("https://console.appnexus.com/docs/understanding-the-debug-auction"),
                    I.logMessage(a)),
                    o;
                var t = "in response for ".concat(s.bidderCode, " adapter");
                return e && e.error && (t += ": ".concat(e.error)),
                I.logError(t),
                o
            },
            getMappingFileInfo: function() {
                return {
                    url: "https://acdn.adnxs.com/prebid/appnexus-mapping/mappings.json",
                    refreshInDays: 2
                }
            },
            getUserSyncs: function(e) {
                if (e.iframeEnabled)
                    return [{
                        type: "iframe",
                        url: "https://acdn.adnxs.com/dmp/async_usersync.html"
                    }]
            },
            transformBidParams: function(a, e) {
                return a = I.convertTypes({
                    member: "string",
                    invCode: "string",
                    placementId: "number",
                    keywords: I.transformBidderParamKeywords,
                    publisherId: "number"
                }, a),
                e && (a.use_pmt_rule = "boolean" == typeof a.usePaymentRule && a.usePaymentRule,
                a.usePaymentRule && delete a.usePaymentRule,
                j(a.keywords) && a.keywords.forEach(P),
                Object.keys(a).forEach(function(e) {
                    var r = I.convertCamelToUnderscore(e);
                    r !== e && (a[r] = a[e],
                    delete a[e])
                })),
                a
            },
            onBidWon: function(e) {
                e.native && function(e) {
                    var r = function(e) {
                        var r;
                        if (I.isStr(e) && U(e))
                            r = e;
                        else if (I.isArray(e))
                            for (var a = 0; a < e.length; a++) {
                                var t = e[a];
                                U(t) && (r = t)
                            }
                        return r
                    }(e.native.javascriptTrackers);
                    if (r)
                        for (var a = "pbjs_adid=" + e.adId + ";pbjs_auc=" + e.adUnitCode, t = function(e) {
                            var r = e.indexOf('src="') + 5
                              , a = e.indexOf('"', r);
                            return e.substring(r, a)
                        }(r), n = t.replace("dom_id=%native_dom_id%", a), i = document.getElementsByTagName("iframe"), s = !1, o = 0; o < i.length && !s; o++) {
                            var d = i[o];
                            try {
                                var p = d.contentDocument || d.contentWindow.document;
                                if (p)
                                    for (var c = p.getElementsByTagName("script"), u = 0; u < c.length && !s; u++) {
                                        var m = c[u];
                                        m.getAttribute("data-src") == t && (m.setAttribute("src", n),
                                        m.setAttribute("data-src", ""),
                                        m.removeAttribute && m.removeAttribute("data-src"),
                                        s = !0)
                                    }
                            } catch (e) {
                                if (!(e instanceof DOMException && "SecurityError" === e.name))
                                    throw e
                            }
                        }
                }(e)
            }
        };
        function j(e) {
            return I.isArray(e) && 0 < e.length
        }
        function P(e) {
            j(e.value) && "" === e.value[0] && delete e.value
        }
        function U(e) {
            var r = e.match(h)
              , a = null != r && 1 <= r.length
              , t = e.match(_)
              , n = null != t && 1 <= t.length;
            return e.startsWith(l) && n && a
        }
        function N(a) {
            var e, r, n, i, t = {};
            t.sizes = q(a.sizes),
            t.primary_size = t.sizes[0],
            t.ad_types = [],
            t.uuid = a.bidId,
            a.params.placementId ? t.id = parseInt(a.params.placementId, 10) : t.code = a.params.invCode,
            t.allow_smaller_sizes = a.params.allowSmallerSizes || !1,
            t.use_pmt_rule = a.params.usePaymentRule || !1,
            t.prebid = !0,
            t.disable_psa = !0,
            a.params.reserve && (t.reserve = a.params.reserve),
            a.params.position && (t.position = {
                above: 1,
                below: 2
            }[a.params.position] || 0),
            a.params.trafficSourceCode && (t.traffic_source_code = a.params.trafficSourceCode),
            a.params.privateSizes && (t.private_sizes = q(a.params.privateSizes)),
            a.params.supplyType && (t.supply_type = a.params.supplyType),
            a.params.pubClick && (t.pubclick = a.params.pubClick),
            a.params.extInvCode && (t.ext_inv_code = a.params.extInvCode),
            a.params.publisherId && (t.publisher_id = parseInt(a.params.publisherId, 10)),
            a.params.externalImpId && (t.external_imp_id = a.params.externalImpId),
            I.isEmpty(a.params.keywords) || (0 < (e = I.transformBidderParamKeywords(a.params.keywords)).length && e.forEach(P),
            t.keywords = e),
            a.mediaType !== g.c && !I.deepAccess(a, "mediaTypes.".concat(g.c)) || (t.ad_types.push(g.c),
            0 === t.sizes.length && (t.sizes = q([1, 1])),
            a.nativeParams && (n = a.nativeParams,
            i = {},
            Object.keys(n).forEach(function(e) {
                var r, a = m[e] && m[e].serverName || m[e] || e, t = m[e] && m[e].requiredParams;
                i[a] = b({}, t, n[e]),
                a !== m.image.serverName && a !== m.icon.serverName || !i[a].sizes || (r = i[a].sizes,
                (I.isArrayOfNums(r) || I.isArray(r) && 0 < r.length && r.every(function(e) {
                    return I.isArrayOfNums(e)
                })) && (i[a].sizes = q(i[a].sizes))),
                a === m.privacyLink && (i.privacy_supported = !0)
            }),
            r = i,
            t[g.c] = {
                layouts: [r]
            }));
            var s = I.deepAccess(a, "mediaTypes.".concat(g.d))
              , o = I.deepAccess(a, "mediaTypes.video.context");
            t.hb_source = s && "adpod" === o ? 7 : 1,
            a.mediaType !== g.d && !s || t.ad_types.push(g.d),
            (a.mediaType === g.d || s && "outstream" !== o) && (t.require_asset_url = !0),
            a.params.video && (t.video = {},
            Object.keys(a.params.video).filter(function(e) {
                return x()(c, e)
            }).forEach(function(e) {
                switch (e) {
                case "context":
                case "playback_method":
                    var r = a.params.video[e]
                      , r = I.isArray(r) ? r[0] : r;
                    t.video[e] = u[e][r];
                    break;
                case "frameworks":
                    break;
                default:
                    t.video[e] = a.params.video[e]
                }
            }),
            a.params.video.frameworks && I.isArray(a.params.video.frameworks) && (t.video_frameworks = a.params.video.frameworks)),
            a.renderer && (t.video = b({}, t.video, {
                custom_renderer_present: !0
            })),
            a.params.frameworks && I.isArray(a.params.frameworks) && (t.banner_frameworks = a.params.frameworks);
            var d = A()(p.a.getAdUnits(), function(e) {
                return a.transactionId === e.transactionId
            });
            return d && d.mediaTypes && d.mediaTypes.banner && t.ad_types.push(g.b),
            0 === t.ad_types.length && delete t.ad_types,
            t
        }
        function q(e) {
            var r = []
              , a = {};
            if (I.isArray(e) && 2 === e.length && !I.isArray(e[0]))
                a.width = parseInt(e[0], 10),
                a.height = parseInt(e[1], 10),
                r.push(a);
            else if ("object" === s(e))
                for (var t = 0; t < e.length; t++) {
                    var n = e[t];
                    (a = {}).width = parseInt(n[0], 10),
                    a.height = parseInt(n[1], 10),
                    r.push(a)
                }
            return r
        }
        function M(e) {
            return !!e.params.user
        }
        function z(e) {
            return !!parseInt(e.params.member, 10)
        }
        function B(e) {
            if (e.params)
                return !!e.params.app
        }
        function D(e) {
            return e.params && e.params.app ? !!e.params.app.id : !!e.params.app
        }
        function V(e) {
            return !!e.debug
        }
        function J(e) {
            return e.mediaTypes && e.mediaTypes.video && e.mediaTypes.video.context === g.a
        }
        function W(e) {
            var r = !1
              , a = e.params
              , t = e.params.video;
            return a.frameworks && I.isArray(a.frameworks) && (r = x()(e.params.frameworks, 6)),
            !r && t && t.frameworks && I.isArray(t.frameworks) && (r = x()(e.params.video.frameworks, 6)),
            r
        }
        function F(e, r, a) {
            I.isEmpty(e.video) && (e.video = {}),
            e.video[r] = a
        }
        function H(e) {
            var r, a;
            r = e.adUnitCode,
            (a = document.getElementById(r).querySelectorAll("div[id^='google_ads']"))[0] && a[0].style.setProperty("display", "none"),
            e.renderer.push(function() {
                window.ANOutstreamVideo.renderAd({
                    tagId: e.adResponse.tag_id,
                    sizes: [e.getSize().split("x")],
                    targetId: e.adUnitCode,
                    uuid: e.adResponse.uuid,
                    adResponse: e.adResponse,
                    rendererOptions: e.renderer.getConfig()
                }, function(e, r, a) {
                    e.renderer.handleVideoEvent({
                        id: r,
                        eventName: a
                    })
                }
                .bind(null, e))
            })
        }
        Object(v.registerBidder)(k)
    }
}, [275]);
atdpbjsChunk([320], {
    287: function(e, r, n) {
        e.exports = n(288)
    },
    288: function(e, r, n) {
        "use strict";
        Object.defineProperty(r, "__esModule", {
            value: !0
        }),
        n.d(r, "spec", function() {
            return s
        });
        var t = n(1)
          , a = n(0)
          , i = n(2)
          , o = n(4)
          , s = {
            code: "automatad",
            aliases: ["atd"],
            supportedMediaTypes: [i.b],
            isBidRequestValid: function(e) {
                return e && e.hasOwnProperty("params") && e.params.hasOwnProperty("siteId") && e.params.hasOwnProperty("placementId") && e.hasOwnProperty("mediaTypes") && e.mediaTypes.hasOwnProperty("banner")
            },
            buildRequests: function(e, r) {
                if (e && r) {
                    var n = e[0].params.siteId
                      , t = e.map(function(e) {
                        return {
                            id: e.bidId,
                            adUnitCode: e.adUnitCode,
                            placement: e.params.placementId,
                            banner: {
                                format: e.sizes.map(function(e) {
                                    return {
                                        w: e[0],
                                        h: e[1]
                                    }
                                })
                            }
                        }
                    })
                      , a = {
                        id: e[0].auctionId,
                        imp: t,
                        site: {
                            id: n,
                            domain: window.location.hostname,
                            page: window.location.href,
                            ref: r.refererInfo && r.refererInfo.referer || null
                        }
                    };
                    return {
                        method: "POST",
                        url: "https://rtb2.automatad.com/ortb2/resp",
                        data: JSON.stringify(a),
                        options: {
                            contentType: "application/json",
                            withCredentials: !1,
                            crossOrigin: !0
                        }
                    }
                }
            },
            interpretResponse: function(e) {
                var r = []
                  , n = (e || {}).body;
                return n && n.seatbid && n.seatbid[0].bid && n.seatbid[0].bid.length ? n.seatbid.forEach(function(e) {
                    e.bid.forEach(function(e) {
                        r.push({
                            requestId: e.impid,
                            cpm: e.price,
                            ad: e.adm,
                            adDomain: e.adomain[0],
                            currency: "USD",
                            ttl: 30,
                            creativeId: e.crid,
                            width: e.w,
                            height: e.h,
                            netRevenue: !0,
                            nurl: e.nurl
                        })
                    })
                }) : a.logInfo("automatad :: no valid responses to interpret"),
                r
            },
            getUserSyncs: function() {
                return [{
                    type: "iframe",
                    url: "https://rtb2.automatad.com/ortb2/async_usersync"
                }]
            },
            onBidWon: function(e) {
                if (e.nurl) {
                    var r = e.hasOwnProperty("originalCpm") ? e.originalCpm : e.cpm
                      , n = e.hasOwnProperty("originalCurrency") && e.hasOwnProperty("originalCpm") ? e.originalCurrency : e.currency
                      , t = e.nurl.replace(/\$\{AUCTION_PRICE\}/, r).replace(/\$\{AUCTION_IMP_ID\}/, e.requestId).replace(/\$\{AUCTION_CURRENCY\}/, n).replace(/\$\{AUCTION_ID\}/, e.auctionId);
                    return s.ajaxCall(t, null),
                    !0
                }
            },
            ajaxCall: function(e, r) {
                Object(o.a)(e, r)
            }
        };
        Object(t.registerBidder)(s)
    }
}, [287]);
atdpbjsChunk([285], {
    369: function(e, r, a) {
        e.exports = a(370)
    },
    370: function(e, r, a) {
        "use strict";
        Object.defineProperty(r, "__esModule", {
            value: !0
        }),
        a.d(r, "storage", function() {
            return l
        }),
        a.d(r, "spec", function() {
            return o
        });
        var g = a(0)
          , i = a(1)
          , t = a(2)
          , s = a(7)
          , l = Object(s.b)(24)
          , n = "conversant"
          , o = {
            code: n,
            gvlid: 24,
            aliases: ["cnvr"],
            supportedMediaTypes: [t.b, t.d],
            isBidRequestValid: function(e) {
                if (!e || !e.params)
                    return g.logWarn(n + ": Missing bid parameters"),
                    !1;
                if (!g.isStr(e.params.site_id))
                    return g.logWarn(n + ": site_id must be specified as a string"),
                    !1;
                if (b(e))
                    if (e.params.mimes) {
                        if (!g.isArray(e.params.mimes) || !e.params.mimes.every(function(e) {
                            return g.isStr(e)
                        }))
                            return g.logWarn(n + ": mimes must be an array of strings"),
                            !1
                    } else
                        g.logWarn(n + ": mimes should be specified for videos");
                return !0
            },
            buildRequests: function(e, r) {
                var a, i = r && r.refererInfo ? r.refererInfo.referer : "", o = "", d = "", p = null, u = "_pubcid", c = "https://web.hb.ad.cpe.dotomi.com/cvx/client/hb/ortb/25", t = e.map(function(e) {
                    var r = g.getBidIdParameter("bidfloor", e.params);
                    o = g.getBidIdParameter("site_id", e.params) || o,
                    u = g.getBidIdParameter("pubcid_name", e.params) || u,
                    d = e.auctionId;
                    var a, i, t, s, n = {
                        id: e.bidId,
                        secure: 1,
                        bidfloor: r || 0,
                        displaymanager: "Prebid.js",
                        displaymanagerver: "4.21.0"
                    };
                    return f(e.params.tag_id, n, "tagid"),
                    b(e) ? (t = {},
                    (i = v((a = g.deepAccess(e, "mediaTypes.video") || {}).playerSize || e.sizes)) && i[0] && (f(i[0].w, t, "w"),
                    f(i[0].h, t, "h")),
                    f(e.params.position, t, "pos"),
                    f(e.params.mimes || a.mimes, t, "mimes"),
                    f(e.params.maxduration, t, "maxduration"),
                    f(e.params.protocols || a.protocols, t, "protocols"),
                    f(e.params.api || a.api, t, "api"),
                    n.video = t) : (s = {
                        format: v((g.deepAccess(e, "mediaTypes.banner") || {}).sizes || e.sizes)
                    },
                    f(e.params.position, s, "pos"),
                    n.banner = s),
                    e.userId && e.userId.pubcid ? p = e.userId.pubcid : e.crumbs && e.crumbs.pubcid && (p = e.crumbs.pubcid),
                    e.params.white_label_url && (c = e.params.white_label_url),
                    n
                }), s = {
                    id: d,
                    imp: t,
                    site: {
                        id: o,
                        mobile: null !== document.querySelector('meta[name="viewport"][content*="width=device-width"]') ? 1 : 0,
                        page: i
                    },
                    device: (a = navigator.language ? "language" : "userLanguage",
                    {
                        h: screen.height,
                        w: screen.width,
                        dnt: "1" === navigator.doNotTrack || "1" === window.doNotTrack || "1" === navigator.msDoNoTrack || "yes" === navigator.doNotTrack ? 1 : 0,
                        language: navigator[a].split("-")[0],
                        make: navigator.vendor ? navigator.vendor : "",
                        ua: navigator.userAgent
                    }),
                    at: 1
                }, n = {};
                r && (r.gdprConsent && (n.consent = r.gdprConsent.consentString,
                "boolean" == typeof r.gdprConsent.gdprApplies && g.deepSetValue(s, "regs.ext.gdpr", r.gdprConsent.gdprApplies ? 1 : 0)),
                r.uspConsent && g.deepSetValue(s, "regs.ext.us_privacy", r.uspConsent)),
                (p = p || function(e) {
                    var r;
                    try {
                        var a;
                        (r = l.getCookie(e)) || ("" === (a = l.getDataFromLocalStorage("".concat(e, "_exp"))) || a && 0 < new Date(a).getTime() - Date.now()) && (r = (r = l.getDataFromLocalStorage(e)) ? decodeURIComponent(r) : r),
                        g.isStr(r) && "{" === r.charAt(0) && (r = JSON.parse(r))
                    } catch (e) {
                        g.logError(e)
                    }
                    return r
                }(u)) && (n.fpc = p);
                var m = function(e) {
                    var r = e[0]
                      , a = [];
                    {
                        var i;
                        g.isArray(r.userIdAsEids) && 0 < r.userIdAsEids.length && (i = {
                            "adserver.org": 1,
                            "liveramp.com": 1,
                            "criteo.com": 1,
                            "id5-sync.com": 1,
                            "parrable.com": 1,
                            "digitru.st": 1,
                            "liveintent.com": 1
                        },
                        r.userIdAsEids.forEach(function(e) {
                            i.hasOwnProperty(e.source) && a.push(e)
                        }))
                    }
                    return a
                }(e);
                return 0 < m.length && (n.eids = m),
                g.isEmpty(n) || (s.user = {
                    ext: n
                }),
                {
                    method: "POST",
                    url: c,
                    data: s
                }
            },
            interpretResponse: function(n, e) {
                var o = []
                  , d = {};
                return n = n.body,
                e && e.data && e.data.imp && g._each(e.data.imp, function(e) {
                    return d[e.id] = e
                }),
                n && g.isArray(n.seatbid) && g._each(n.seatbid, function(e) {
                    g._each(e.bid, function(e) {
                        var r, a, i, t, s = parseFloat(e.price);
                        0 < s && e.impid && (r = e.adm || "",
                        a = e.nurl || "",
                        i = d[e.impid],
                        t = {
                            requestId: e.impid,
                            currency: n.cur || "USD",
                            cpm: s,
                            creativeId: e.crid || "",
                            ttl: 300,
                            netRevenue: !0
                        },
                        i.video ? ("<" === r.charAt(0) ? t.vastXml = r : t.vastUrl = r,
                        t.mediaType = "video",
                        t.width = i.video.w,
                        t.height = i.video.h) : (t.ad = r + '<img src="' + a + '" />',
                        t.width = e.w,
                        t.height = e.h),
                        o.push(t))
                    })
                }),
                o
            },
            transformBidParams: function(e) {
                return g.convertTypes({
                    site_id: "string",
                    secure: "number",
                    mobile: "number"
                }, e)
            }
        };
        function v(e) {
            var r;
            return Array.isArray(e) && (r = 2 === e.length && "number" == typeof e[0] && "number" == typeof e[1] ? [{
                w: e[0],
                h: e[1]
            }] : g._map(e, function(e) {
                return {
                    w: e[0],
                    h: e[1]
                }
            })),
            r
        }
        function b(e) {
            return "video" === e.mediaType || g.deepAccess(e, "mediaTypes.video")
        }
        function f(e, r, a) {
            e && (r[a] = e)
        }
        Object(i.registerBidder)(o)
    }
}, [369]);
atdpbjsChunk([280], {
    384: function(e, n, r) {
        e.exports = r(385)
    },
    385: function(e, n, r) {
        "use strict";
        Object.defineProperty(n, "__esModule", {
            value: !0
        }),
        r.d(n, "currencySupportEnabled", function() {
            return R
        }),
        r.d(n, "currencyRates", function() {
            return D
        }),
        n.setConfig = c,
        n.addBidResponseHook = j;
        var s = r(20)
          , u = r(34)
          , a = r(5)
          , f = (r.n(a),
        r(4))
          , d = r(0)
          , o = r(3)
          , l = r(13);
        function y(e) {
            return (y = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
                return typeof e
            }
            : function(e) {
                return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
            }
            )(e)
        }
        var g, v = "https://cdn.jsdelivr.net/gh/prebid/currency-file@1/latest.json?date=$$TODAY$$", p = 4, b = [], h = {}, C = !1, S = !0, m = "USD", R = !1, D = {}, I = {};
        function c(e) {
            var n, r, o, c, t, i = v;
            "object" === y(e.rates) && (D.conversions = e.rates,
            S = !(C = !0)),
            "object" === y(e.defaultRates) && (g = e.defaultRates,
            D.conversions = g,
            C = !0),
            "string" == typeof e.adServerCurrency ? (d.logInfo("enabling currency support", arguments),
            m = e.adServerCurrency,
            e.conversionRateFile && (d.logInfo("currency using override conversionRateFile:", e.conversionRateFile),
            i = e.conversionRateFile),
            -1 !== (n = i.indexOf("$$TODAY$$")) && (r = new Date,
            o = "".concat(r.getMonth() + 1),
            c = "".concat(r.getDate()),
            o.length < 2 && (o = "0".concat(o)),
            c.length < 2 && (c = "0".concat(c)),
            t = "".concat(r.getFullYear()).concat(o).concat(c),
            i = "".concat(i.substring(0, n)).concat(t).concat(i.substring(n + 9, i.length))),
            function(e) {
                h = {},
                R = !0,
                d.logInfo("Installing addBidResponse decorator for currency module", arguments),
                Object(s.a)().convertCurrency = function(e, n, r) {
                    return parseFloat(e) * F(n, r)
                }
                ,
                Object(l.a)("addBidResponse").before(j, 100),
                S && (S = !1,
                Object(f.a)(e, {
                    success: function(n) {
                        try {
                            D = JSON.parse(n),
                            d.logInfo("currencyRates set to " + JSON.stringify(D)),
                            C = !0,
                            w()
                        } catch (e) {
                            O("Failed to parse currencyRates response: " + n)
                        }
                    },
                    error: O
                }))
            }(i)) : (d.logInfo("disabling currency support"),
            function() {
                d.logInfo("Uninstalling addBidResponse decorator for currency module", arguments),
                Object(l.a)("addBidResponse").getHooks({
                    hook: j
                }).remove(),
                delete Object(s.a)().convertCurrency,
                m = "USD",
                h = {},
                C = R = !1,
                S = !0,
                D = {},
                I = {}
            }()),
            "object" === y(e.bidderCurrencyDefault) && (I = e.bidderCurrencyDefault)
        }
        function O(e) {
            g ? (d.logWarn(e),
            d.logWarn("Currency failed loading rates, falling back to currency.defaultRates")) : d.logError(e)
        }
        function j(e, n, r) {
            if (!r)
                return e.call(this, n);
            var o, c, t, i, s = r.bidderCode || r.bidder;
            if (I[s] && (o = I[s],
            r.currency && o !== r.currency ? d.logWarn("Currency default '".concat(s, ": ").concat(o, "' ignored. adapter specified '").concat(r.currency, "'")) : r.currency = o),
            r.currency || (d.logWarn('Currency not specified on bid.  Defaulted to "USD"'),
            r.currency = "USD"),
            r.getCpmInNewCurrency = function(e) {
                return (parseFloat(this.cpm) * F(this.currency, e)).toFixed(3)
            }
            ,
            r.currency === m)
                return e.call(this, n, r);
            b.push((c = e,
            t = this,
            i = [n, r],
            function() {
                var n = i[1];
                if (void 0 !== n && "currency"in n && "cpm"in n) {
                    var e = n.currency;
                    try {
                        var r = F(e);
                        1 !== r && (n.cpm = (parseFloat(n.cpm) * r).toFixed(4),
                        n.currency = m)
                    } catch (e) {
                        d.logWarn("Returning NO_BID, getCurrencyConversion threw error: ", e),
                        i[1] = Object(u.a)(a.STATUS.NO_BID, {
                            bidder: n.bidderCode || n.bidder,
                            bidId: n.requestId
                        })
                    }
                }
                return c.apply(t, i)
            }
            )),
            R && !C || w()
        }
        function w() {
            for (; 0 < b.length; )
                b.shift()()
        }
        function F(e, n) {
            var r, o = 1 < arguments.length && void 0 !== n ? n : m, c = null, t = "".concat(e, "->").concat(o);
            if (t in h)
                c = h[t],
                d.logMessage("Using conversionCache value " + c + " for " + t);
            else if (!1 === R) {
                if ("USD" !== e)
                    throw new Error("Prebid currency support has not been enabled and fromCurrency is not USD");
                c = 1
            } else if (e === o)
                c = 1;
            else if (e in D.conversions) {
                if (!(o in (r = D.conversions[e])))
                    throw new Error("Specified adServerCurrency in config '" + o + "' not found in the currency rates file");
                c = r[o],
                d.logInfo("getCurrencyConversion using direct " + e + " to " + o + " conversionRate " + c)
            } else if (o in D.conversions) {
                if (!(e in (r = D.conversions[o])))
                    throw new Error("Specified fromCurrency '" + e + "' not found in the currency rates file");
                c = U(1 / r[e], p),
                d.logInfo("getCurrencyConversion using reciprocal " + e + " to " + o + " conversionRate " + c)
            } else {
                var i = Object.keys(D.conversions)[0];
                if (!(e in D.conversions[i]))
                    throw new Error("Specified fromCurrency '" + e + "' not found in the currency rates file");
                var s = 1 / D.conversions[i][e];
                if (!(o in D.conversions[i]))
                    throw new Error("Specified adServerCurrency in config '" + o + "' not found in the currency rates file");
                c = U(s * D.conversions[i][o], p);
                d.logInfo("getCurrencyConversion using intermediate " + e + " thru " + i + " to " + o + " conversionRate " + c)
            }
            return t in h || (d.logMessage("Adding conversionCache value " + c + " for " + t),
            h[t] = c),
            c
        }
        function U(e, n) {
            for (var r = 1, o = 0; o < n; o++)
                r += "0";
            return Math.round(e * r) / r
        }
        o.b.getConfig("currency", function(e) {
            return c(e.currency)
        })
    }
}, [384]);
atdpbjsChunk([274], {
    398: function(e, r, t) {
        e.exports = t(399)
    },
    399: function(e, r, t) {
        "use strict";
        Object.defineProperty(r, "__esModule", {
            value: !0
        }),
        t.d(r, "spec", function() {
            return b
        }),
        r.getFloor = h,
        r.cleanSizes = g,
        r.shuffle = v,
        r.removeDuplicate = A,
        r.upto5 = I,
        r.matchRequest = S,
        r.checkDeepArray = x,
        r.defaultSize = O,
        r.bindUserId = w,
        r.getApi = T,
        r.getPlaybackmethod = function(e) {
            if (Array.isArray(e) && 0 < e.length)
                return e.map(function(e) {
                    return y.playback_method[e]
                });
            return [2]
        }
        ,
        r.getProtocols = j,
        r.cleanVast = z;
        var u = t(0)
          , n = t(1)
          , d = t(3)
          , i = t(2);
        function c(e, r) {
            return function(e) {
                if (Array.isArray(e))
                    return e
            }(e) || function(e, r) {
                if ("undefined" == typeof Symbol || !(Symbol.iterator in Object(e)))
                    return;
                var t = []
                  , n = !0
                  , i = !1
                  , o = void 0;
                try {
                    for (var s, a = e[Symbol.iterator](); !(n = (s = a.next()).done) && (t.push(s.value),
                    !r || t.length !== r); n = !0)
                        ;
                } catch (e) {
                    i = !0,
                    o = e
                } finally {
                    try {
                        n || null == a.return || a.return()
                    } finally {
                        if (i)
                            throw o
                    }
                }
                return t
            }(e, r) || s(e, r) || function() {
                throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
            }()
        }
        function o(e) {
            return function(e) {
                if (Array.isArray(e))
                    return a(e)
            }(e) || function(e) {
                if ("undefined" != typeof Symbol && Symbol.iterator in Object(e))
                    return Array.from(e)
            }(e) || s(e) || function() {
                throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
            }()
        }
        function s(e, r) {
            if (e) {
                if ("string" == typeof e)
                    return a(e, r);
                var t = Object.prototype.toString.call(e).slice(8, -1);
                return "Object" === t && e.constructor && (t = e.constructor.name),
                "Map" === t || "Set" === t ? Array.from(e) : "Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? a(e, r) : void 0
            }
        }
        function a(e, r) {
            (null == r || r > e.length) && (r = e.length);
            for (var t = 0, n = new Array(r); t < r; t++)
                n[t] = e[t];
            return n
        }
        function p(e) {
            return (p = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
                return typeof e
            }
            : function(e) {
                return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
            }
            )(e)
        }
        function m(r, e) {
            var t, n = Object.keys(r);
            return Object.getOwnPropertySymbols && (t = Object.getOwnPropertySymbols(r),
            e && (t = t.filter(function(e) {
                return Object.getOwnPropertyDescriptor(r, e).enumerable
            })),
            n.push.apply(n, t)),
            n
        }
        function l(i) {
            for (var e = 1; e < arguments.length; e++) {
                var o = null != arguments[e] ? arguments[e] : {};
                e % 2 ? m(Object(o), !0).forEach(function(e) {
                    var r, t, n;
                    r = i,
                    n = o[t = e],
                    t in r ? Object.defineProperty(r, t, {
                        value: n,
                        enumerable: !0,
                        configurable: !0,
                        writable: !0
                    }) : r[t] = n
                }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(i, Object.getOwnPropertyDescriptors(o)) : m(Object(o)).forEach(function(e) {
                    Object.defineProperty(i, e, Object.getOwnPropertyDescriptor(o, e))
                })
            }
            return i
        }
        var f = "https://dmx.districtm.io/b/v1"
          , y = {
            playback_method: {
                auto_play_sound_on: 1,
                auto_play_sound_off: 2,
                click_to_play: 3,
                mouse_over: 4,
                viewport_sound_on: 5,
                viewport_sound_off: 6
            }
        }
          , b = {
            code: "districtmDMX",
            supportedFormat: [i.b, i.d],
            supportedMediaTypes: [i.d, i.b],
            isBidRequestValid: function(e) {
                return !(!e.params.dmxid || !e.params.memberid)
            },
            interpretResponse: function(e, s) {
                return (e = e.body || {}).seatbid && u.isArray(e.seatbid) ? e.seatbid.reduce(function(e, r) {
                    var t = r.bid.reduce(function(e, r) {
                        if (e.price < r.price) {
                            var t = S(r.impid, s)
                              , n = O(t)
                              , i = n.width
                              , o = n.height;
                            return r.cpm = parseFloat(r.price).toFixed(2),
                            r.bidId = r.impid,
                            r.requestId = r.impid,
                            r.width = r.w || i,
                            r.height = r.h || o,
                            r.ttl = 360,
                            r.mediaType = t.mediaTypes && t.mediaTypes.video ? "video" : "banner",
                            r.mediaType && (r.vastXml = z(r.adm, r.nurl),
                            r.ttl = 3600),
                            r.dealid && (r.dealId = r.dealid),
                            r.uuid = r.bidId,
                            r.ad = r.adm,
                            r.netRevenue = !0,
                            r.creativeId = r.crid,
                            r.currency = "USD",
                            r.meta = r.meta || {},
                            r.adomain && 0 < r.adomain.length && (r.meta.advertiserDomains = r.adomain),
                            r
                        }
                        return e.cpm = e.price,
                        e
                    }, {
                        price: 0
                    });
                    return t.adm && e.push(t),
                    e
                }, []).filter(function(e) {
                    return !!e.bidId
                }) : []
            },
            buildRequests: function(e, r) {
                var t, n = d.b.getConfig("bidderTimeout"), i = {
                    id: u.generateUUID(),
                    cur: ["USD"],
                    tmax: n - 300,
                    test: this.test() || 0,
                    site: {
                        publisher: {
                            id: String(e[0].params.memberid) || null
                        }
                    }
                };
                try {
                    var o = d.b.getConfig("dmx");
                    i.user = o.user || {};
                    var s = o.site || {};
                    i.site = l(l({}, i.site), s)
                } catch (e) {}
                var a = [];
                e[0] && e[0].userId && (w(a, u.deepAccess(e[0], "userId.idl_env"), "liveramp.com", 1),
                w(a, u.deepAccess(e[0], "userId.id5id.uid"), "id5-sync.com", 1),
                w(a, u.deepAccess(e[0], "userId.pubcid"), "pubcid.org", 1),
                w(a, u.deepAccess(e[0], "userId.tdid"), "adserver.org", 1),
                w(a, u.deepAccess(e[0], "userId.criteoId"), "criteo.com", 1),
                w(a, u.deepAccess(e[0], "userId.britepoolid"), "britepool.com", 1),
                w(a, u.deepAccess(e[0], "userId.lipb.lipbid"), "liveintent.com", 1),
                w(a, u.deepAccess(e[0], "userId.intentiqid"), "intentiq.com", 1),
                w(a, u.deepAccess(e[0], "userId.lotamePanoramaId"), "lotame.com", 1),
                w(a, u.deepAccess(e[0], "userId.parrableId"), "parrable.com", 1),
                w(a, u.deepAccess(e[0], "userId.netId"), "netid.de", 1),
                w(a, u.deepAccess(e[0], "userId.sharedid"), "sharedid.org", 1),
                i.user = i.user || {},
                i.user.ext = i.user.ext || {},
                i.user.ext.eids = a),
                i.test || delete i.test,
                r.gdprConsent && (i.regs = {},
                i.regs.ext = {},
                i.regs.ext.gdpr = !0 === r.gdprConsent.gdprApplies ? 1 : 0,
                !0 === r.gdprConsent.gdprApplies && (i.user = {},
                i.user.ext = {},
                i.user.ext.consent = r.gdprConsent.consentString)),
                i.regs = i.regs || {},
                i.regs.coppa = !0 === d.b.getConfig("coppa") ? 1 : 0,
                r && r.uspConsent && (i.regs = i.regs || {},
                i.regs.ext = i.regs.ext || {},
                i.regs.ext.us_privacy = r.uspConsent);
                try {
                    t = e[0].schain,
                    i.source = {},
                    i.source.ext = {},
                    i.source.ext.schain = t || {}
                } catch (e) {}
                var c = e.map(function(e) {
                    var r = {};
                    return r.id = e.bidId,
                    r.tagid = String(e.params.dmxid),
                    r.secure = 1,
                    r.bidfloor = h(e),
                    e.mediaTypes && e.mediaTypes.video ? r.video = {
                        topframe: 1,
                        skip: e.mediaTypes.video.skip || 0,
                        linearity: e.mediaTypes.video.linearity || 1,
                        minduration: e.mediaTypes.video.minduration || 5,
                        maxduration: e.mediaTypes.video.maxduration || 60,
                        playbackmethod: e.mediaTypes.video.playbackmethod || [2],
                        api: T(e.mediaTypes.video),
                        mimes: e.mediaTypes.video.mimes || ["video/mp4"],
                        protocols: j(e.mediaTypes.video),
                        h: e.mediaTypes.video.playerSize[0][1],
                        w: e.mediaTypes.video.playerSize[0][0]
                    } : r.banner = {
                        topframe: 1,
                        w: g(e.sizes, "w"),
                        h: g(e.sizes, "h"),
                        format: g(e.sizes).map(function(e) {
                            return {
                                w: e[0],
                                h: e[1]
                            }
                        }).filter(function(e) {
                            return "number" == typeof e.w && "number" == typeof e.h
                        })
                    },
                    r
                });
                return c.length <= 5 ? (i.imp = c,
                {
                    method: "POST",
                    url: f,
                    data: JSON.stringify(i),
                    bidderRequest: r
                }) : I(c, i, r, f)
            },
            test: function() {
                return -1 !== window.location.href.indexOf("dmTest=true") ? 1 : 0
            },
            getUserSyncs: function(e, r, t, n) {
                var i = []
                  , o = "https://cdn.districtm.io/ids/index.html";
                if (t && t.gdprApplies && "string" == typeof t.consentString && i.push(["gdpr", t.consentString]),
                n && i.push(["ccpa", n]),
                0 < i.length && (o += "?" + i.map(function(e) {
                    return e.join("=")
                }).join("&")),
                e.iframeEnabled)
                    return [{
                        type: "iframe",
                        url: o
                    }]
            }
        };
        function h(e) {
            var r, t = null;
            return "function" == typeof e.getFloor && ("object" !== p(r = e.getFloor({
                currency: "USD",
                mediaType: e.mediaTypes.video ? "video" : "banner",
                size: e.sizes.map(function(e) {
                    return {
                        w: e[0],
                        h: e[1]
                    }
                })
            })) || "USD" !== r.currency || isNaN(parseFloat(r.floor)) || (t = parseFloat(r.floor))),
            null !== t ? t : e.params.floor
        }
        function g(e, r) {
            var t = v(e, [{
                size: [300, 250],
                s: 100
            }, {
                size: [728, 90],
                s: 95
            }, {
                size: [320, 50],
                s: 90
            }, {
                size: [160, 600],
                s: 88
            }, {
                size: [300, 600],
                s: 85
            }, {
                size: [300, 50],
                s: 80
            }, {
                size: [970, 250],
                s: 75
            }, {
                size: [970, 90],
                s: 60
            }]);
            switch (r) {
            case "w":
                return t[0][0] || 0;
            case "h":
                return t[0][1] || 0;
            case "size":
            default:
                return t
            }
        }
        function v(e, t) {
            var r = e.filter(function(e) {
                return -1 === t.map(function(e) {
                    return "".concat(e.size[0], "x").concat(e.size[1])
                }).indexOf("".concat(e[0], "x").concat(e[1]))
            })
              , n = e.reduce(function(r, e) {
                return 0 === r.length ? (r.push(e),
                r) : (r.push(e),
                (r = (r = t.filter(function(e) {
                    return -1 !== r.map(function(e) {
                        return "".concat(e[0], "x").concat(e[1])
                    }).indexOf("".concat(e.size[0], "x").concat(e.size[1]))
                })).sort(function(e, r) {
                    return r.s - e.s
                })).map(function(e) {
                    return e.size
                }))
            }, []);
            return A([].concat(o(n), o(r)))
        }
        function A(t) {
            return t.filter(function(e, r) {
                return t.map(function(e) {
                    return "".concat(e[0], "x").concat(e[1])
                }).indexOf("".concat(e[0], "x").concat(e[1])) === r
            })
        }
        function I(e, r, t, n) {
            for (var i = []; 0 !== e.length; )
                5 <= e.length ? i.push(e.splice(0, 5)) : i.push(e.splice(0, e.length));
            return i.map(function(e) {
                return r.imp = e,
                {
                    method: "POST",
                    url: n,
                    data: JSON.stringify(r),
                    bidderRequest: t
                }
            })
        }
        function S(r, e) {
            return c(e.bidderRequest.bids.filter(function(e) {
                return e.bidId === r
            }), 1)[0]
        }
        function x(e) {
            return Array.isArray(e) && Array.isArray(e[0]) ? e[0] : e
        }
        function O(e) {
            var r = e.sizes
              , t = {};
            return t.width = x(r)[0],
            t.height = x(r)[1],
            t
        }
        function w(e, r, t, n) {
            u.isStr(r) && Array.isArray(e) && e.push({
                source: t,
                uids: [{
                    id: r,
                    atype: n
                }]
            })
        }
        function T(e) {
            var r = e.api;
            return r && Array.isArray(r) && 0 < r.length ? r : [2]
        }
        function j(e) {
            var r = e.protocols;
            return r && Array.isArray(r) && 0 < r.length ? r : [2, 3, 5, 6, 7, 8]
        }
        function z(r, t) {
            try {
                var e, n = /<img\s[^>]*?src\s*=\s*['\"]([^'\"]*?)['\"][^>]*?>/, i = c(r.match(n), 2), o = i[0], s = i[1];
                return r = r.replace(n, ""),
                o && s && (e = "<Impression><![CDATA[".concat(s, "]]></Impression>"),
                r = r.replace("</Impression>", "</Impression>".concat(e))),
                r
            } catch (e) {
                if (!t)
                    return r;
                var a = "<Impression><![CDATA[".concat(t, "]]></Impression>");
                return r = r.replace("</Impression>", "</Impression>".concat(a))
            }
        }
        Object(n.registerBidder)(b)
    }
}, [398]);
atdpbjsChunk([206], {
    561: function(e, t, r) {
        e.exports = r(562)
    },
    562: function(e, l, v) {
        "use strict";
        Object.defineProperty(l, "__esModule", {
            value: !0
        }),
        function(m) {
            v.d(l, "VIDEO_ENDPOINT", function() {
                return s
            }),
            v.d(l, "BANNER_ENDPOINT", function() {
                return d
            }),
            v.d(l, "OUTSTREAM_SRC", function() {
                return u
            }),
            v.d(l, "VIDEO_TARGETING", function() {
                return S
            }),
            v.d(l, "DEFAULT_MIMES", function() {
                return A
            }),
            v.d(l, "spec", function() {
                return p
            });
            var h = v(0)
              , r = v(3)
              , e = v(1)
              , a = v(2)
              , t = v(10)
              , g = v.n(t)
              , n = v(12)
              , y = v.n(n);
            function w() {
                return (w = Object.assign || function(e) {
                    for (var t = 1; t < arguments.length; t++) {
                        var r = arguments[t];
                        for (var n in r)
                            Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n])
                    }
                    return e
                }
                ).apply(this, arguments)
            }
            function i(e, t) {
                return function(e) {
                    if (Array.isArray(e))
                        return e
                }(e) || function(e, t) {
                    if ("undefined" == typeof Symbol || !(Symbol.iterator in Object(e)))
                        return;
                    var r = []
                      , n = !0
                      , i = !1
                      , a = void 0;
                    try {
                        for (var o, s = e[Symbol.iterator](); !(n = (o = s.next()).done) && (r.push(o.value),
                        !t || r.length !== t); n = !0)
                            ;
                    } catch (e) {
                        i = !0,
                        a = e
                    } finally {
                        try {
                            n || null == s.return || s.return()
                        } finally {
                            if (i)
                                throw a
                        }
                    }
                    return r
                }(e, t) || function(e, t) {
                    if (!e)
                        return;
                    if ("string" == typeof e)
                        return o(e, t);
                    var r = Object.prototype.toString.call(e).slice(8, -1);
                    "Object" === r && e.constructor && (r = e.constructor.name);
                    if ("Map" === r || "Set" === r)
                        return Array.from(e);
                    if ("Arguments" === r || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))
                        return o(e, t)
                }(e, t) || function() {
                    throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
                }()
            }
            function o(e, t) {
                (null == t || t > e.length) && (t = e.length);
                for (var r = 0, n = new Array(t); r < t; r++)
                    n[r] = e[r];
                return n
            }
            var T = "lunamedia"
              , s = "https://nep.advangelists.com/xp/get?pubid="
              , d = "https://nep.advangelists.com/xp/get?pubid="
              , u = "https://player-cdn.beachfrontmedia.com/playerapi/loader/outstream.js"
              , S = ["mimes", "playbackmethod", "maxduration", "skip"]
              , A = ["video/mp4", "application/javascript"]
              , c = ""
              , p = {
                code: T,
                supportedMediaTypes: [a.b, a.d],
                isBidRequestValid: function(e) {
                    return void 0 !== e && ((e.bidder === T || void 0 !== e.params) && ("" !== e && "" !== e.params.placement && "" !== e.params.pubid))
                },
                buildRequests: function(e, t) {
                    var r = []
                      , n = e.filter(function(e) {
                        return f(t = e) && I(t, "pubid") && I(t, "placement");
                        var t
                    })
                      , i = e.filter(function(e) {
                        return function(e) {
                            return h.deepAccess(e, "mediaTypes.banner") || !f(e)
                        }(t = e) && b(t, "pubid") && b(t, "placement");
                        var t
                    });
                    return n.forEach(function(e) {
                        c = I(e, "pubid"),
                        r.push({
                            method: "POST",
                            url: s + c,
                            data: function(e, t) {
                                var r = P(t)
                                  , n = j()
                                  , i = I(e, "size")
                                  , a = [];
                                a = void 0 !== i && "" != i ? U(i) : function(e) {
                                    return U(h.deepAccess(e, "mediaTypes.video.playerSize") || e.sizes)
                                }(e);
                                var o = function(e) {
                                    return e && e.length ? e[0] : {
                                        w: void 0,
                                        h: void 0
                                    }
                                }(a)
                                  , s = function(r) {
                                    return Object.keys(Object(r.params.video)).filter(function(e) {
                                        return y()(S, e)
                                    }).reduce(function(e, t) {
                                        return e[t] = r.params.video[t],
                                        e
                                    }, {})
                                }(e)
                                  , d = {
                                    device: {
                                        langauge: m.navigator.language.split("-")[0],
                                        dnt: 1 === m.navigator.doNotTrack ? 1 : 0,
                                        devicetype: O() ? 4 : N() ? 3 : 2,
                                        js: 1,
                                        os: function() {
                                            var e = g()([{
                                                s: "Android",
                                                r: /Android/
                                            }, {
                                                s: "iOS",
                                                r: /(iPhone|iPad|iPod)/
                                            }, {
                                                s: "Mac OS X",
                                                r: /Mac OS X/
                                            }, {
                                                s: "Mac OS",
                                                r: /(MacPPC|MacIntel|Mac_PowerPC|Macintosh)/
                                            }, {
                                                s: "Linux",
                                                r: /(Linux|X11)/
                                            }, {
                                                s: "Windows 10",
                                                r: /(Windows 10.0|Windows NT 10.0)/
                                            }, {
                                                s: "Windows 8.1",
                                                r: /(Windows 8.1|Windows NT 6.3)/
                                            }, {
                                                s: "Windows 8",
                                                r: /(Windows 8|Windows NT 6.2)/
                                            }, {
                                                s: "Windows 7",
                                                r: /(Windows 7|Windows NT 6.1)/
                                            }, {
                                                s: "Windows Vista",
                                                r: /Windows NT 6.0/
                                            }, {
                                                s: "Windows Server 2003",
                                                r: /Windows NT 5.2/
                                            }, {
                                                s: "Windows XP",
                                                r: /(Windows NT 5.1|Windows XP)/
                                            }, {
                                                s: "UNIX",
                                                r: /UNIX/
                                            }, {
                                                s: "Search Bot",
                                                r: /(nuhk|Googlebot|Yammybot|Openbot|Slurp|MSNBot|Ask Jeeves\/Teoma|ia_archiver)/
                                            }], function(e) {
                                                return e.r.test(navigator.userAgent)
                                            });
                                            return e ? e.s : "unknown"
                                        }()
                                    },
                                    at: 2,
                                    site: {},
                                    tmax: 3e3,
                                    cur: ["USD"],
                                    id: e.bidId,
                                    imp: [],
                                    regs: {
                                        ext: {}
                                    },
                                    user: {
                                        ext: {}
                                    }
                                };
                                d.site.page = r.href,
                                d.site.domain = r.hostname,
                                d.site.search = r.search,
                                d.site.domain = r.hostname,
                                d.site.ref = n,
                                d.site.mobile = O() ? 1 : 0;
                                var u = 0 === r.protocol.indexOf("https") ? 1 : 0;
                                d.device.dnt = x() ? 1 : 0,
                                W(d.site, "name", function() {
                                    return m.top.document.title
                                }),
                                W(d.device, "h", function() {
                                    return m.screen.height
                                }),
                                W(d.device, "w", function() {
                                    return m.screen.width
                                });
                                var c = I(e, "placement")
                                  , p = I(e, "floor");
                                null == p && (p = .5);
                                for (var f = 0; f < a.length; f++)
                                    d.imp.push({
                                        id: "" + f,
                                        displaymanager: T,
                                        displaymanagerver: "1.0",
                                        tagId: c,
                                        bidfloor: p,
                                        bidfloorcur: "USD",
                                        secure: u,
                                        video: w({
                                            id: h.generateUUID(),
                                            pos: 0,
                                            w: o.w,
                                            h: o.h,
                                            mimes: A
                                        }, s)
                                    });
                                {
                                    var l, v, b;
                                    t && t.gdprConsent && (l = t.gdprConsent,
                                    v = l.gdprApplies,
                                    b = l.consentString,
                                    d.regs.ext = {
                                        gdpr: v ? 1 : 0
                                    },
                                    d.user.ext = {
                                        consent: b
                                    })
                                }
                                return d
                            }(e, t),
                            bidRequest: e
                        })
                    }),
                    i.forEach(function(e) {
                        c = b(e, "pubid"),
                        r.push({
                            method: "POST",
                            url: d + c,
                            data: function(e, t) {
                                var r = P(t)
                                  , n = j()
                                  , i = b(e, "size")
                                  , a = [];
                                a = void 0 !== i && "" != i ? U(i) : function(e) {
                                    return U(h.deepAccess(e, "mediaTypes.banner.sizes") || e.sizes)
                                }(e);
                                var o = {
                                    device: {
                                        langauge: m.navigator.language.split("-")[0],
                                        dnt: 1 === m.navigator.doNotTrack ? 1 : 0,
                                        devicetype: O() ? 4 : N() ? 3 : 2,
                                        js: 1
                                    },
                                    at: 2,
                                    site: {},
                                    tmax: 3e3,
                                    cur: ["USD"],
                                    id: e.bidId,
                                    imp: [],
                                    regs: {
                                        ext: {}
                                    },
                                    user: {
                                        ext: {}
                                    }
                                };
                                o.site.page = r.href,
                                o.site.domain = r.hostname,
                                o.site.search = r.search,
                                o.site.domain = r.hostname,
                                o.site.ref = n,
                                o.site.mobile = O() ? 1 : 0;
                                var s = 0 === r.protocol.indexOf("https") ? 1 : 0;
                                o.device.dnt = x() ? 1 : 0,
                                W(o.site, "name", function() {
                                    return m.top.document.title
                                }),
                                W(o.device, "h", function() {
                                    return m.screen.height
                                }),
                                W(o.device, "w", function() {
                                    return m.screen.width
                                });
                                for (var d = b(e, "placement"), u = 0; u < a.length; u++) {
                                    var c = a[u]
                                      , p = b(e, "floor");
                                    null == p && (p = .1),
                                    o.imp.push({
                                        id: "" + u,
                                        displaymanager: T,
                                        displaymanagerver: "1.0",
                                        tagId: d,
                                        bidfloor: p,
                                        bidfloorcur: "USD",
                                        secure: s,
                                        banner: {
                                            id: h.generateUUID(),
                                            pos: 0,
                                            w: c.w,
                                            h: c.h
                                        }
                                    })
                                }
                                {
                                    var f, l, v;
                                    t && t.gdprConsent && (f = t.gdprConsent,
                                    l = f.gdprApplies,
                                    v = f.consentString,
                                    o.regs.ext = {
                                        gdpr: l ? 1 : 0
                                    },
                                    o.user.ext = {
                                        consent: v
                                    })
                                }
                                return o
                            }(e, t),
                            bidRequest: e
                        })
                    }),
                    r
                },
                interpretResponse: function(e, t) {
                    var r = t.bidRequest
                      , n = e.body;
                    if (null !== n && 0 == h.isEmpty(n)) {
                        if (f(r)) {
                            var i = {
                                requestId: n.id,
                                bidderCode: T,
                                cpm: n.seatbid[0].bid[0].price,
                                width: n.seatbid[0].bid[0].w,
                                height: n.seatbid[0].bid[0].h,
                                ttl: n.seatbid[0].bid[0].ttl || 60,
                                creativeId: n.seatbid[0].bid[0].crid,
                                currency: n.cur,
                                mediaType: a.d,
                                netRevenue: !0
                            };
                            return n.seatbid[0].bid[0].adm ? (i.vastXml = n.seatbid[0].bid[0].adm,
                            i.adResponse = {
                                content: n.seatbid[0].bid[0].adm
                            }) : i.vastUrl = n.seatbid[0].bid[0].nurl,
                            i
                        }
                        return {
                            requestId: n.id,
                            bidderCode: T,
                            cpm: n.seatbid[0].bid[0].price,
                            width: n.seatbid[0].bid[0].w,
                            height: n.seatbid[0].bid[0].h,
                            ad: n.seatbid[0].bid[0].adm,
                            ttl: n.seatbid[0].bid[0].ttl || 60,
                            creativeId: n.seatbid[0].bid[0].crid,
                            currency: n.cur,
                            mediaType: a.b,
                            netRevenue: !0
                        }
                    }
                }
            };
            function f(e) {
                return h.deepAccess(e, "mediaTypes.video")
            }
            function I(e, t) {
                return h.deepAccess(e, "params.video." + t) || h.deepAccess(e, "params." + t)
            }
            function b(e, t) {
                return h.deepAccess(e, "params.banner." + t) || h.deepAccess(e, "params." + t)
            }
            function O() {
                return /(ios|ipod|ipad|iphone|android)/i.test(navigator.userAgent)
            }
            function N() {
                return /(smart[-]?tv|hbbtv|appletv|googletv|hdmi|netcast\.tv|viera|nettv|roku|\bdtv\b|sonydtv|inettvbrowser|\btv\b)/i.test(navigator.userAgent)
            }
            function x() {
                return "1" === navigator.doNotTrack || "1" === window.doNotTrack || "1" === navigator.msDoNoTrack || "yes" === navigator.doNotTrack
            }
            function W(e, t, r) {
                try {
                    e[t] = "function" == typeof r ? r() : r
                } catch (e) {}
            }
            function U(e) {
                return h.parseSizesInput(e).map(function(e) {
                    var t = i(e.split("x"), 2)
                      , r = t[0]
                      , n = t[1];
                    return {
                        w: parseInt(r, 10) || void 0,
                        h: parseInt(n, 10) || void 0
                    }
                })
            }
            function j() {
                try {
                    return window.top.document.referrer
                } catch (e) {
                    return ""
                }
            }
            function P(e) {
                var t = e && e.refererInfo && e.refererInfo.referer;
                return h.parseUrl(r.b.getConfig("pageUrl") || t, {
                    decodeSearchAsString: !0
                })
            }
            Object(e.registerBidder)(p)
        }
        .call(l, v(35))
    }
}, [561]);
atdpbjsChunk([29], {
    657: function(e, t, r) {
        e.exports = r(658)
    },
    658: function(e, t, r) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        }),
        t.resetSyncedStatus = function() {
            V = !1
        }
        ,
        t.resetWurlMap = function() {
            W = {}
        }
        ,
        t.PrebidServer = l;
        var i = r(91)
          , O = r(34)
          , A = r(0)
          , j = r(5)
          , y = (r.n(j),
        r(8))
          , m = r(3)
          , w = r(2)
          , h = r(37)
          , S = r(1)
          , n = r(9)
          , x = r.n(n)
          , a = r(12)
          , C = r.n(a)
          , s = r(659)
          , E = r(4)
          , c = r(10)
          , _ = r.n(c);
        function I(e, t, r) {
            return t in e ? Object.defineProperty(e, t, {
                value: r,
                enumerable: !0,
                configurable: !0,
                writable: !0
            }) : e[t] = r,
            e
        }
        function k(e, t) {
            return function(e) {
                if (Array.isArray(e))
                    return e
            }(e) || function(e, t) {
                if ("undefined" == typeof Symbol || !(Symbol.iterator in Object(e)))
                    return;
                var r = []
                  , i = !0
                  , n = !1
                  , a = void 0;
                try {
                    for (var s, c = e[Symbol.iterator](); !(i = (s = c.next()).done) && (r.push(s.value),
                    !t || r.length !== t); i = !0)
                        ;
                } catch (e) {
                    n = !0,
                    a = e
                } finally {
                    try {
                        i || null == c.return || c.return()
                    } finally {
                        if (n)
                            throw a
                    }
                }
                return r
            }(e, t) || function(e, t) {
                if (!e)
                    return;
                if ("string" == typeof e)
                    return d(e, t);
                var r = Object.prototype.toString.call(e).slice(8, -1);
                "Object" === r && e.constructor && (r = e.constructor.name);
                if ("Map" === r || "Set" === r)
                    return Array.from(e);
                if ("Arguments" === r || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))
                    return d(e, t)
            }(e, t) || function() {
                throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
            }()
        }
        function d(e, t) {
            (null == t || t > e.length) && (t = e.length);
            for (var r = 0, i = new Array(t); r < t; r++)
                i[r] = e[r];
            return i
        }
        function T() {
            return (T = Object.assign || function(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var r = arguments[t];
                    for (var i in r)
                        Object.prototype.hasOwnProperty.call(r, i) && (e[i] = r[i])
                }
                return e
            }
            ).apply(this, arguments)
        }
        function P(e) {
            return (P = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
                return typeof e
            }
            : function(e) {
                return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
            }
            )(e)
        }
        var U, R = m.b.getConfig, B = j.S2S.SRC, V = !1, o = {
            enabled: !1,
            timeout: 1e3,
            maxBids: 1,
            adapter: "prebidServer",
            adapterOptions: {},
            syncUrlModifier: {}
        };
        function N(e) {
            var t;
            0 !== e.length && ((t = e.pop()).no_cookie ? function(e, t, r, i) {
                {
                    var n;
                    U.syncUrlModifier && "function" == typeof U.syncUrlModifier[r] ? (n = U.syncUrlModifier[r](e, t, r),
                    p(e, n, r, i)) : p(e, t, r, i)
                }
            }(t.usersync.type, t.usersync.url, t.bidder, A.bind.call(N, null, e)) : N(e))
        }
        function p(e, t, r, i) {
            t ? "image" === e || "redirect" === e ? (A.logMessage('Invoking image pixel user sync for bidder: "'.concat(r, '"')),
            A.triggerPixel(t, i)) : "iframe" == e ? (A.logMessage('Invoking iframe user sync for bidder: "'.concat(r, '"')),
            A.insertUserSyncIframe(t, i)) : (A.logError('User sync type "'.concat(e, '" not supported for bidder: "').concat(r, '"')),
            i()) : (A.logError('No sync url for bidder "'.concat(r, '": ').concat(t)),
            i())
        }
        m.b.setDefaults({
            s2sConfig: o
        }),
        R("s2sConfig", function(e) {
            return function(t) {
                if (t.defaultVendor) {
                    var r = t.defaultVendor
                      , i = Object.keys(t);
                    if (!s.a[r])
                        return A.logError("Incorrect or unavailable prebid server default vendor option: " + r),
                        !1;
                    Object.keys(s.a[r]).forEach(function(e) {
                        o[e] !== t[e] && C()(i, e) || (t[e] = s.a[r][e])
                    })
                }
                var n = Object.keys(t);
                0 < ["accountId", "bidders", "endpoint"].filter(function(e) {
                    return !C()(n, e) && (A.logError(e + " missing in server to server config"),
                    !0)
                }).length || (U = t)
            }(e.s2sConfig)
        });
        var q = {
            sponsoredBy: 1,
            body: 2,
            rating: 3,
            likes: 4,
            downloads: 5,
            price: 6,
            salePrice: 7,
            phone: 8,
            address: 9,
            body2: 10,
            cta: 12
        }
          , D = Object.keys(q)
          , M = {
            icon: 1,
            image: 3
        }
          , z = {
            img: 1,
            js: 2
        };
        [q, M, {
            impression: 1,
            "viewable-mrc50": 2,
            "viewable-mrc100": 3,
            "viewable-video50": 4
        }, z].forEach(function(t) {
            Object.keys(t).forEach(function(e) {
                t[t[e]] = e
            })
        });
        var J = {}
          , X = {}
          , W = {};
        var H = {
            buildRequest: function(e, t, r) {
                var u = []
                  , l = {}
                  , f = t[0];
                if (r.forEach(function(r) {
                    var e, c = Object(h.g)(A.deepAccess(r, "mediaTypes.native"));
                    if (c)
                        try {
                            e = X[r.code] = Object.keys(c).reduce(function(e, t) {
                                var r = c[t];
                                function i(e) {
                                    return T({
                                        required: r.required ? 1 : 0
                                    }, e ? A.cleanObj(e) : {})
                                }
                                switch (t) {
                                case "image":
                                case "icon":
                                    var n = M[t]
                                      , a = A.cleanObj({
                                        type: n,
                                        w: A.deepAccess(r, "sizes.0"),
                                        h: A.deepAccess(r, "sizes.1"),
                                        wmin: A.deepAccess(r, "aspect_ratios.0.min_width"),
                                        hmin: A.deepAccess(r, "aspect_ratios.0.min_height")
                                    });
                                    if (!(a.w && a.h || a.hmin && a.wmin))
                                        throw "invalid img sizes (must provide sizes or min_height & min_width if using aspect_ratios)";
                                    Array.isArray(r.aspect_ratios) && (a.ext = {
                                        aspectratios: r.aspect_ratios.map(function(e) {
                                            return "".concat(e.ratio_width, ":").concat(e.ratio_height)
                                        })
                                    }),
                                    e.push(i({
                                        img: a
                                    }));
                                    break;
                                case "title":
                                    if (!r.len)
                                        throw "invalid title.len";
                                    e.push(i({
                                        title: {
                                            len: r.len
                                        }
                                    }));
                                    break;
                                default:
                                    var s = q[t];
                                    s && e.push(i({
                                        data: {
                                            type: s,
                                            len: r.len
                                        }
                                    }))
                                }
                                return e
                            }, [])
                        } catch (e) {
                            A.logError("error creating native request: " + String(e))
                        }
                    var t = A.deepAccess(r, "mediaTypes.video")
                      , i = A.deepAccess(r, "mediaTypes.banner");
                    r.bids.forEach(function(e) {
                        J["".concat(r.code).concat(e.bidder)] = e.bid_id,
                        y.default.aliasRegistry[e.bidder] && (l[e.bidder] = y.default.aliasRegistry[e.bidder])
                    });
                    var n, a = {};
                    if (i && i.sizes && (n = A.parseSizesInput(i.sizes).map(function(e) {
                        var t = k(e.split("x"), 2)
                          , r = t[0]
                          , i = t[1];
                        return {
                            w: parseInt(r, 10),
                            h: parseInt(i, 10)
                        }
                    }),
                    a.banner = {
                        format: n
                    }),
                    A.isEmpty(t) || ("outstream" !== t.context || r.renderer ? ("instream" !== t.context || t.hasOwnProperty("placement") || (t.placement = 1),
                    a.video = t) : A.logError("Outstream bid without renderer cannot be sent to Prebid Server.")),
                    e)
                        try {
                            a.native = {
                                request: JSON.stringify({
                                    context: 1,
                                    plcmttype: 1,
                                    eventtrackers: [{
                                        event: 1,
                                        methods: [1]
                                    }],
                                    assets: e
                                }),
                                ver: "1.2"
                            }
                        } catch (e) {
                            A.logError("error creating native request: " + String(e))
                        }
                    var s = r.bids.reduce(function(e, t) {
                        console.log(U,"oeeooe")
                        var r = y.default.bidderRegistry[t.bidder];
                        return r && r.getSpec().transformBidParams && (t.params = r.getSpec().transformBidParams(t.params, !0)),
                        e[t.bidder] = U.adapterOptions && U.adapterOptions[t.bidder] ? T({}, t.params, U.adapterOptions[t.bidder]) : t.params,
                        e
                    }, {})
                      , d = {
                        id: r.code,
                        ext: s,
                        secure: U.secure
                    }
                      , o = A.deepAccess(r, "fpd.context.pbAdSlot");
                    "string" == typeof o && o && A.deepSetValue(d, "ext.context.data.pbadslot", o),
                    ["name", "adSlot"].forEach(function(e) {
                        var t = A.deepAccess(r, "fpd.context.adserver.".concat(e));
                        "string" == typeof t && t && A.deepSetValue(d, "ext.context.data.adserver.".concat(e.toLowerCase()), t)
                    }),
                    T(d, a);
                    var p = _()(f.bids, function(e) {
                        return e.adUnitCode === r.code && e.storedAuctionResponse
                    });
                    p && A.deepSetValue(d, "ext.prebid.storedauctionresponse.id", p.storedAuctionResponse.toString()),
                    (d.banner || d.video || d.native) && u.push(d)
                }),
                u.length) {
                    var i = {
                        id: e.tid,
                        source: {
                            tid: e.tid
                        },
                        tmax: U.timeout,
                        imp: u,
                        test: R("debug") ? 1 : 0,
                        ext: {
                            prebid: {
                                auctiontimestamp: f.auctionStart,
                                targeting: {
                                    includewinners: !0,
                                    includebidderkeys: !1
                                }
                            }
                        }
                    };
                    U.extPrebid && "object" === P(U.extPrebid) && (i.ext.prebid = T(i.ext.prebid, U.extPrebid));
                    var n, a, s = m.b.getConfig("currency.adServerCurrency");
                    s && "string" == typeof s ? i.cur = [s] : Array.isArray(s) && s.length && (i.cur = [s[0]]),
                    n = i,
                    a = f.refererInfo.referer,
                    n && ("object" === P(m.b.getConfig("app")) ? (n.app = m.b.getConfig("app"),
                    n.app.publisher = {
                        id: U.accountId
                    }) : (n.site = {},
                    A.isPlainObject(m.b.getConfig("site")) && (n.site = m.b.getConfig("site")),
                    A.deepAccess(n.site, "publisher.id") || A.deepSetValue(n.site, "publisher.id", U.accountId),
                    n.site.page || (n.site.page = a)),
                    "object" === P(m.b.getConfig("device")) && (n.device = m.b.getConfig("device")),
                    n.device || (n.device = {}),
                    n.device.w || (n.device.w = window.innerWidth),
                    n.device.h || (n.device.h = window.innerHeight));
                    var c = A.deepAccess(t, "0.bids.0.schain");
                    c && (i.source.ext = {
                        schain: c
                    }),
                    A.isEmpty(l) || (i.ext.prebid.aliases = l);
                    var d, o = A.deepAccess(t, "0.bids.0.userIdAsEids");
                    A.isArray(o) && 0 < o.length && A.deepSetValue(i, "user.ext.eids", o),
                    t && (f.gdprConsent && ("boolean" == typeof f.gdprConsent.gdprApplies && (d = f.gdprConsent.gdprApplies ? 1 : 0),
                    A.deepSetValue(i, "regs.ext.gdpr", d),
                    A.deepSetValue(i, "user.ext.consent", f.gdprConsent.consentString),
                    f.gdprConsent.addtlConsent && "string" == typeof f.gdprConsent.addtlConsent && A.deepSetValue(i, "user.ext.ConsentedProvidersSettings.consented_providers", f.gdprConsent.addtlConsent)),
                    f.uspConsent && A.deepSetValue(i, "regs.ext.us_privacy", f.uspConsent)),
                    !0 === R("coppa") && A.deepSetValue(i, "regs.coppa", 1);
                    var p, b, v, g = R("fpd") || {};
                    return g.context && A.deepSetValue(i, "site.ext.data", g.context),
                    g.user && A.deepSetValue(i, "user.ext.data", g.user),
                    p = i,
                    b = m.b.getBidderConfig(),
                    (v = Object.keys(b).reduce(function(e, t) {
                        var r, i = b[t];
                        return i.fpd && (r = {},
                        i.fpd.context && (r.site = i.fpd.context),
                        i.fpd.user && (r.user = i.fpd.user),
                        e.push({
                            bidders: [t],
                            config: {
                                fpd: r
                            }
                        })),
                        e
                    }, [])).length && A.deepSetValue(p, "ext.prebid.bidderconfig", v),
                    i
                }
                A.logError("Request to Prebid Server rejected due to invalid media type(s) in adUnit.")
            },
            interpretResponse: function(h, S) {
                var x = [];
                return [["errors", "serverErrors"], ["responsetimemillis", "serverResponseTimeMs"]].forEach(function(e) {
                    return r = S,
                    t = h,
                    i = e[0],
                    n = e[1],
                    void ((a = A.deepAccess(t, "ext.".concat(i))) && Object.keys(a).forEach(function(t) {
                        var e = _()(r, function(e) {
                            return e.bidderCode === t
                        });
                        e && (e[n] = a[t])
                    }));
                    var r, t, i, n, a
                }),
                h.seatbid && h.seatbid.forEach(function(y) {
                    (y.bid || []).forEach(function(e) {
                        var t, r = "".concat(e.impid).concat(y.seat);
                        J[r] && (t = A.getBidRequest(J[r], S));
                        var i = e.price
                          , n = 0 !== i ? j.STATUS.GOOD : j.STATUS.NO_BID
                          , a = Object(O.a)(n, t || {
                            bidder: y.seat,
                            src: B
                        });
                        a.cpm = i;
                        var s = A.deepAccess(h, ["ext", "responsetimemillis", y.seat].join("."));
                        t && s && (t.serverResponseTimeMs = s);
                        var c, d, o, p = A.deepAccess(e, "ext.prebid.bidid");
                        A.isStr(p) && (a.pbsBidId = p),
                        A.isStr(A.deepAccess(e, "ext.prebid.events.win")) && (c = t.auctionId,
                        d = a.adId,
                        o = A.deepAccess(e, "ext.prebid.events.win"),
                        [c, d].every(A.isStr) && (W["".concat(c).concat(d)] = o));
                        var u, l, f, b, v, g = A.deepAccess(e, "ext.prebid.targeting");
                        A.isPlainObject(g) && (A.isStr(A.deepAccess(e, "ext.prebid.events.win")) && (g = A.getDefinedParams(g, Object.keys(g).filter(function(e) {
                            return -1 === e.indexOf("hb_winurl") && -1 === e.indexOf("hb_bidid")
                        }))),
                        a.adserverTargeting = g),
                        a.seatBidId = e.id,
                        A.deepAccess(e, "ext.prebid.type") === w.d ? (a.mediaType = w.d,
                        u = t.sizes && t.sizes[0],
                        a.playerWidth = u[0],
                        a.playerHeight = u[1],
                        e.ext.prebid.cache && "object" === P(e.ext.prebid.cache.vastXml) && e.ext.prebid.cache.vastXml.cacheId && e.ext.prebid.cache.vastXml.url ? (a.videoCacheKey = e.ext.prebid.cache.vastXml.cacheId,
                        a.vastUrl = e.ext.prebid.cache.vastXml.url) : g && g.hb_uuid && g.hb_cache_host && g.hb_cache_path && (a.videoCacheKey = g.hb_uuid,
                        a.vastUrl = "https://".concat(g.hb_cache_host).concat(g.hb_cache_path, "?uuid=").concat(g.hb_uuid)),
                        e.adm && (a.vastXml = e.adm),
                        !a.vastUrl && e.nurl && (a.vastUrl = e.nurl)) : A.deepAccess(e, "ext.prebid.type") === w.c ? (a.mediaType = w.c,
                        f = "string" == typeof e.adm ? a.adm = JSON.parse(e.adm) : a.adm = e.adm,
                        I(l = {}, z.img, f.imptrackers || []),
                        I(l, z.js, f.jstracker ? [f.jstracker] : []),
                        b = l,
                        f.eventtrackers && f.eventtrackers.forEach(function(e) {
                            switch (e.method) {
                            case z.img:
                                b[z.img].push(e.url);
                                break;
                            case z.js:
                                b[z.js].push(e.url)
                            }
                        }),
                        A.isPlainObject(f) && Array.isArray(f.assets) ? (v = X[t.adUnitCode],
                        a.native = A.cleanObj(f.assets.reduce(function(t, r) {
                            var i = v[r.id];
                            return A.isPlainObject(r.img) ? t[i.img.type ? M[i.img.type] : "image"] = A.pick(r.img, ["url", "w as width", "h as height"]) : A.isPlainObject(r.title) ? t.title = r.title.text : A.isPlainObject(r.data) && D.forEach(function(e) {
                                q[e] === i.data.type && (t[e] = r.data.value)
                            }),
                            t
                        }, A.cleanObj({
                            clickUrl: f.link,
                            clickTrackers: A.deepAccess(f, "link.clicktrackers"),
                            impressionTrackers: b[z.img],
                            javascriptTrackers: b[z.js]
                        })))) : A.logError("prebid server native response contained no assets")) : e.adm && e.nurl ? (a.ad = e.adm,
                        a.ad += A.createTrackPixelHtml(decodeURIComponent(e.nurl))) : e.adm ? a.ad = e.adm : e.nurl && (a.adUrl = e.nurl),
                        a.width = e.w,
                        a.height = e.h,
                        e.dealid && (a.dealId = e.dealid),
                        a.requestId = t.bidId || t.bid_Id,
                        a.creative_id = e.crid,
                        a.creativeId = e.crid,
                        e.burl && (a.burl = e.burl),
                        a.currency = h.cur ? h.cur : "USD",
                        a.meta = a.meta || {},
                        e.adomain && (a.meta.advertiserDomains = e.adomain);
                        var m = U.defaultTtl || 60;
                        a.ttl = e.exp ? e.exp : m,
                        a.netRevenue = !e.netRevenue || e.netRevenue,
                        x.push({
                            adUnit: e.impid,
                            bid: a
                        })
                    })
                }),
                x
            }
        };
        function u(e) {
            var t, r, i = function(e, t) {
                if ([e, t].every(A.isStr))
                    return W["".concat(e).concat(t)]
            }(e.auctionId, e.adId);
            A.isStr(i) && (A.logMessage('Invoking image pixel for wurl on BID_WIN: "'.concat(i, '"')),
            A.triggerPixel(i),
            t = e.auctionId,
            r = e.adId,
            [t, r].every(A.isStr) && (W["".concat(t).concat(r)] = void 0))
        }
        function l() {
            var e = new i.a("prebidServer");
            return e.callBids = function(e, t, r, i, n) {
                var a, s, c, d, o, p, u, l, f, b = A.deepClone(e.ad_units).filter(function(e) {
                    return e.mediaTypes && (e.mediaTypes.native || e.mediaTypes.banner && e.mediaTypes.banner.sizes || e.mediaTypes.video && e.mediaTypes.video.playerSize)
                }), v = b.map(function(e) {
                    return e.bids.map(function(e) {
                        return e.bidder
                    }).filter(A.uniques)
                }).reduce(A.flatten).filter(A.uniques);
                U && U.syncEndpoint && (Array.isArray(t) && 0 < t.length && (a = t[0].gdprConsent,
                s = t[0].uspConsent),
                c = U.bidders.map(function(e) {
                    return y.default.aliasRegistry[e] || e
                }).filter(function(e, t, r) {
                    return r.indexOf(e) === t
                }),
                d = c,
                o = a,
                p = s,
                V || (V = !0,
                u = {
                    uuid: A.generateUUID(),
                    bidders: d,
                    account: U.accountId
                },
                l = U.userSyncLimit,
                A.isNumber(l) && 0 < l && (u.limit = l),
                o && (void 0 !== o.consentString && (u.gdpr = o.gdprApplies ? 1 : 0),
                !1 !== o.gdprApplies && (u.gdpr_consent = o.consentString)),
                p && (u.us_privacy = p),
                f = JSON.stringify(u),
                Object(E.a)(U.syncEndpoint, function(e) {
                    try {
                        N((e = JSON.parse(e)).bidder_status)
                    } catch (e) {
                        A.logError(e)
                    }
                }, f, {
                    contentType: "text/plain",
                    withCredentials: !0
                })));
                var g = H.buildRequest(e, t, b)
                  , m = g && JSON.stringify(g);
                g && m && n(U.endpoint, {
                    success: function(e) {
                        return function(e, t, i, n, r) {
                            var a;
                            try {
                                a = JSON.parse(e),
                                H.interpretResponse(a, i, t).forEach(function(e) {
                                    var t = e.adUnit
                                      , r = e.bid;
                                    Object(S.isValid)(t, r, i) && n(t, r)
                                }),
                                i.forEach(function(e) {
                                    return x.a.emit(j.EVENTS.BIDDER_DONE, e)
                                })
                            } catch (e) {
                                A.logError(e)
                            }
                            (!a || a.status && C()(a.status, "Error")) && A.logError("error parsing response: ", a.status);
                            r(),
                            function(e) {
                                e.forEach(function(e) {
                                    var t = y.default.getBidAdapter(e);
                                    t && t.registerSyncs && t.registerSyncs([])
                                })
                            }(t)
                        }(e, v, t, r, i)
                    },
                    error: i
                }, m, {
                    contentType: "text/plain",
                    withCredentials: !0
                })
            }
            ,
            x.a.on(j.EVENTS.BID_WON, u),
            T(this, {
                callBids: e.callBids,
                setBidderCode: e.setBidderCode,
                type: B
            })
        }
        y.default.registerBidAdapter(new l, "prebidServer")
    },
    659: function(e, t, r) {
        "use strict";
        r.d(t, "a", function() {
            return i
        });
        var i = {
            appnexus: {
                adapter: "prebidServer",
                enabled: !0,
                endpoint: "https://prebid.adnxs.com/pbs/v1/openrtb2/auction",
                syncEndpoint: "https://prebid.adnxs.com/pbs/v1/cookie_sync",
                timeout: 1e3
            },
            rubicon: {
                adapter: "prebidServer",
                enabled: !0,
                endpoint: "https://prebid-server.rubiconproject.com/openrtb2/auction",
                syncEndpoint: "https://prebid-server.rubiconproject.com/cookie_sync",
                timeout: 500
            }
        }
    }
}, [657]);
atdpbjsChunk([156], {
    678: function(e, r, a) {
        e.exports = a(679)
    },
    679: function(e, r, a) {
        "use strict";
        Object.defineProperty(r, "__esModule", {
            value: !0
        }),
        a.d(r, "spec", function() {
            return b
        });
        var O = a(0)
          , t = a(1)
          , S = a(2)
          , R = a(3)
          , i = a(11);
        function P() {
            return (P = Object.assign || function(e) {
                for (var r = 1; r < arguments.length; r++) {
                    var a = arguments[r];
                    for (var t in a)
                        Object.prototype.hasOwnProperty.call(a, t) && (e[t] = a[t])
                }
                return e
            }
            ).apply(this, arguments)
        }
        function D(e) {
            return (D = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
                return typeof e
            }
            : function(e) {
                return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
            }
            )(e)
        }
        var Y = "PubMatic: "
          , A = "USD"
          , x = void 0
          , s = "https://pubmatic.bbvms.com/r/".concat("$RENDERER", ".js")
          , N = {
            kadpageurl: "",
            gender: "",
            yob: "",
            lat: "",
            lon: "",
            wiid: "",
            profId: "",
            verId: ""
        }
          , n = {
            NUMBER: "number",
            STRING: "string",
            BOOLEAN: "boolean",
            ARRAY: "array",
            OBJECT: "object"
        }
          , o = {
            mimes: n.ARRAY,
            minduration: n.NUMBER,
            maxduration: n.NUMBER,
            startdelay: n.NUMBER,
            playbackmethod: n.ARRAY,
            api: n.ARRAY,
            protocols: n.ARRAY,
            w: n.NUMBER,
            h: n.NUMBER,
            battr: n.ARRAY,
            linearity: n.NUMBER,
            placement: n.NUMBER,
            minbitrate: n.NUMBER,
            maxbitrate: n.NUMBER
        }
          , c = {
            TITLE: {
                ID: 1,
                KEY: "title",
                TYPE: 0
            },
            IMAGE: {
                ID: 2,
                KEY: "image",
                TYPE: 0
            },
            ICON: {
                ID: 3,
                KEY: "icon",
                TYPE: 0
            },
            SPONSOREDBY: {
                ID: 4,
                KEY: "sponsoredBy",
                TYPE: 1
            },
            BODY: {
                ID: 5,
                KEY: "body",
                TYPE: 2
            },
            CLICKURL: {
                ID: 6,
                KEY: "clickUrl",
                TYPE: 0
            },
            VIDEO: {
                ID: 7,
                KEY: "video",
                TYPE: 0
            },
            EXT: {
                ID: 8,
                KEY: "ext",
                TYPE: 0
            },
            DATA: {
                ID: 9,
                KEY: "data",
                TYPE: 0
            },
            LOGO: {
                ID: 10,
                KEY: "logo",
                TYPE: 0
            },
            SPONSORED: {
                ID: 11,
                KEY: "sponsored",
                TYPE: 1
            },
            DESC: {
                ID: 12,
                KEY: "data",
                TYPE: 2
            },
            RATING: {
                ID: 13,
                KEY: "rating",
                TYPE: 3
            },
            LIKES: {
                ID: 14,
                KEY: "likes",
                TYPE: 4
            },
            DOWNLOADS: {
                ID: 15,
                KEY: "downloads",
                TYPE: 5
            },
            PRICE: {
                ID: 16,
                KEY: "price",
                TYPE: 6
            },
            SALEPRICE: {
                ID: 17,
                KEY: "saleprice",
                TYPE: 7
            },
            PHONE: {
                ID: 18,
                KEY: "phone",
                TYPE: 8
            },
            ADDRESS: {
                ID: 19,
                KEY: "address",
                TYPE: 9
            },
            DESC2: {
                ID: 20,
                KEY: "desc2",
                TYPE: 10
            },
            DISPLAYURL: {
                ID: 21,
                KEY: "displayurl",
                TYPE: 11
            },
            CTA: {
                ID: 22,
                KEY: "cta",
                TYPE: 12
            }
        }
          , l = {
            ICON: 1,
            LOGO: 2,
            IMAGE: 3
        }
          , u = [{
            id: c.SPONSOREDBY.ID,
            required: !0,
            data: {
                type: 1
            }
        }, {
            id: c.TITLE.ID,
            required: !0
        }, {
            id: c.IMAGE.ID,
            required: !0
        }]
          , d = {
            1: "PMP",
            5: "PREF",
            6: "PMPG"
        }
          , p = {
            bootstrapPlayer: function(e) {
                var r = {
                    code: e.adUnitCode
                };
                if (e.vastXml ? r.vastXml = e.vastXml : e.vastUrl && (r.vastUrl = e.vastUrl),
                e.vastXml || e.vastUrl) {
                    for (var a, t = p.getRendererId("pubmatic", e.rendererCode), i = document.getElementById(e.adUnitCode), s = 0; s < window.bluebillywig.renderers.length; s++)
                        if (window.bluebillywig.renderers[s]._id === t) {
                            a = window.bluebillywig.renderers[s];
                            break
                        }
                    a ? a.bootstrap(r, i) : O.logWarn("".concat(Y, ": Couldn't find a renderer with ").concat(t))
                } else
                    O.logWarn("".concat(Y, ": No vastXml or vastUrl on bid, bailing..."))
            },
            newRenderer: function(e, r) {
                var a = s.replace("$RENDERER", e)
                  , t = i.a.install({
                    url: a,
                    loaded: !1,
                    adUnitCode: r
                });
                try {
                    t.setRender(p.outstreamRender)
                } catch (e) {
                    O.logWarn("".concat(Y, ": Error tying to setRender on renderer"), e)
                }
                return t
            },
            outstreamRender: function(e) {
                e.renderer.push(function() {
                    p.bootstrapPlayer(e)
                })
            },
            getRendererId: function(e, r) {
                return "".concat(e, "-").concat(r)
            }
        }
          , k = 0
          , m = !1
          , g = {}
          , h = {};
        function C(e, r) {
            if (!O.isStr(r))
                return r && O.logWarn(Y + "Ignoring param key: " + e + ", expects string-value, found " + D(r)),
                x;
            switch (e) {
            case "pmzoneid":
                return r.split(",").slice(0, 50).map(function(e) {
                    return e.trim()
                }).join();
            case "kadfloor":
            case "lat":
            case "lon":
                return parseFloat(r) || x;
            case "yob":
                return parseInt(r) || x;
            default:
                return r
            }
        }
        function U(e) {
            var r;
            e.params.adUnit = "",
            e.params.adUnitIndex = "0",
            e.params.width = 0,
            e.params.height = 0,
            e.params.adSlot = (r = e.params.adSlot,
            O.isStr(r) ? r.replace(/^\s+/g, "").replace(/\s+$/g, "") : "");
            var a = (t = e.params.adSlot).split(":")
              , t = a[0];
            if (2 == a.length && (e.params.adUnitIndex = a[1]),
            a = t.split("@"),
            e.params.adUnit = a[0],
            1 < a.length) {
                if (2 != (a = a[1].split("x")).length)
                    return void O.logWarn(Y + "AdSlot Error: adSlot not in required format");
                e.params.width = parseInt(a[0], 10),
                e.params.height = parseInt(a[1], 10)
            } else if (e.hasOwnProperty("mediaTypes") && e.mediaTypes.hasOwnProperty(S.b) && e.mediaTypes.banner.hasOwnProperty("sizes")) {
                for (var i = 0, s = []; i < e.mediaTypes.banner.sizes.length; i++)
                    2 === e.mediaTypes.banner.sizes[i].length && s.push(e.mediaTypes.banner.sizes[i]);
                e.mediaTypes.banner.sizes = s,
                1 <= e.mediaTypes.banner.sizes.length && (e.params.width = e.mediaTypes.banner.sizes[0][0],
                e.params.height = e.mediaTypes.banner.sizes[0][1],
                e.mediaTypes.banner.sizes = e.mediaTypes.banner.sizes.splice(1, e.mediaTypes.banner.sizes.length - 1))
            }
        }
        function f(e) {
            var r, a = e.params.video;
            if (a !== x) {
                for (var t in r = {},
                o)
                    a.hasOwnProperty(t) && (r[t] = function(e, r, a) {
                        var t, i = "Ignoring param key: " + e + ", expects " + a + ", found " + D(r);
                        switch (a) {
                        case n.BOOLEAN:
                            t = O.isBoolean;
                            break;
                        case n.NUMBER:
                            t = O.isNumber;
                            break;
                        case n.STRING:
                            t = O.isStr;
                            break;
                        case n.ARRAY:
                            t = O.isArray
                        }
                        return t(r) ? r : (O.logWarn(Y + i),
                        x)
                    }(t, a[t], o[t]));
                O.isArray(e.mediaTypes.video.playerSize[0]) ? (r.w = parseInt(e.mediaTypes.video.playerSize[0][0], 10),
                r.h = parseInt(e.mediaTypes.video.playerSize[0][1], 10)) : O.isNumber(e.mediaTypes.video.playerSize[0]) && (r.w = parseInt(e.mediaTypes.video.playerSize[0], 10),
                r.h = parseInt(e.mediaTypes.video.playerSize[1], 10)),
                e.params.video.hasOwnProperty("skippable") && (r.ext = {
                    video_skippable: e.params.video.skippable ? 1 : 0
                })
            } else
                r = x,
                O.logWarn(Y + "Error: Video config params missing for adunit: " + e.params.adUnit + " with mediaType set as video. Ignoring video impression in the adunit.");
            return r
        }
        function z(e) {
            var r, a, t, i, s = {}, n = {}, o = e.hasOwnProperty("sizes") ? e.sizes : [], d = "", p = [], s = {
                id: e.bidId,
                tagid: e.params.adUnit || void 0,
                bidfloor: C("kadfloor", e.params.kadfloor),
                secure: 1,
                ext: {
                    pmZoneId: C("pmzoneid", e.params.pmzoneid)
                },
                bidfloorcur: e.params.currency ? C("currency", e.params.currency) : A
            };
            if (t = s,
            (i = e).params.deals && (O.isArray(i.params.deals) ? i.params.deals.forEach(function(e) {
                O.isStr(e) && 3 < e.length ? (t.pmp || (t.pmp = {
                    private_auction: 0,
                    deals: []
                }),
                t.pmp.deals.push({
                    id: e
                })) : O.logWarn(Y + "Error: deal-id present in array bid.params.deals should be a strings with more than 3 charaters length, deal-id ignored: " + e)
            }) : O.logWarn(Y + "Error: bid.params.deals should be an array of strings.")),
            e.hasOwnProperty("mediaTypes"))
                for (d in e.mediaTypes)
                    switch (d) {
                    case S.b:
                        (r = function(e) {
                            var r, a = e.mediaTypes.banner.sizes, t = [];
                            if (a !== x && O.isArray(a)) {
                                if (r = {},
                                e.params.width || e.params.height)
                                    r.w = e.params.width,
                                    r.h = e.params.height;
                                else {
                                    if (0 === a.length)
                                        return r = x,
                                        O.logWarn(Y + "Error: mediaTypes.banner.size missing for adunit: " + e.params.adUnit + ". Ignoring the banner impression in the adunit."),
                                        r;
                                    r.w = parseInt(a[0][0], 10),
                                    r.h = parseInt(a[0][1], 10),
                                    a = a.splice(1, a.length - 1)
                                }
                                0 < a.length && (t = [],
                                a.forEach(function(e) {
                                    1 < e.length && t.push({
                                        w: e[0],
                                        h: e[1]
                                    })
                                }),
                                0 < t.length && (r.format = t)),
                                r.pos = 0,
                                r.topframe = O.inIframe() ? 0 : 1
                            } else
                                O.logWarn(Y + "Error: mediaTypes.banner.size missing for adunit: " + e.params.adUnit + ". Ignoring the banner impression in the adunit."),
                                r = x;
                            return r
                        }(e)) !== x && (s.banner = r);
                        break;
                    case S.c:
                        n.request = JSON.stringify(function(e) {
                            var r, a, t, i = {
                                assets: []
                            };
                            for (var s in e) {
                                if (e.hasOwnProperty(s)) {
                                    var n = {};
                                    if (!(i.assets && 0 < i.assets.length && i.assets.hasOwnProperty(s)))
                                        switch (s) {
                                        case c.TITLE.KEY:
                                            e[s].len || e[s].length ? n = {
                                                id: c.TITLE.ID,
                                                required: e[s].required ? 1 : 0,
                                                title: {
                                                    len: e[s].len || e[s].length,
                                                    ext: e[s].ext
                                                }
                                            } : O.logWarn(Y + "Error: Title Length is required for native ad: " + JSON.stringify(e));
                                            break;
                                        case c.IMAGE.KEY:
                                            e[s].sizes && 0 < e[s].sizes.length ? n = {
                                                id: c.IMAGE.ID,
                                                required: e[s].required ? 1 : 0,
                                                img: {
                                                    type: l.IMAGE,
                                                    w: e[s].w || e[s].width || (e[s].sizes ? e[s].sizes[0] : x),
                                                    h: e[s].h || e[s].height || (e[s].sizes ? e[s].sizes[1] : x),
                                                    wmin: e[s].wmin || e[s].minimumWidth || (e[s].minsizes ? e[s].minsizes[0] : x),
                                                    hmin: e[s].hmin || e[s].minimumHeight || (e[s].minsizes ? e[s].minsizes[1] : x),
                                                    mimes: e[s].mimes,
                                                    ext: e[s].ext
                                                }
                                            } : O.logWarn(Y + "Error: Image sizes is required for native ad: " + JSON.stringify(e));
                                            break;
                                        case c.ICON.KEY:
                                            e[s].sizes && 0 < e[s].sizes.length ? n = {
                                                id: c.ICON.ID,
                                                required: e[s].required ? 1 : 0,
                                                img: {
                                                    type: l.ICON,
                                                    w: e[s].w || e[s].width || (e[s].sizes ? e[s].sizes[0] : x),
                                                    h: e[s].h || e[s].height || (e[s].sizes ? e[s].sizes[1] : x)
                                                }
                                            } : O.logWarn(Y + "Error: Icon sizes is required for native ad: " + JSON.stringify(e));
                                            break;
                                        case c.VIDEO.KEY:
                                            n = {
                                                id: c.VIDEO.ID,
                                                required: e[s].required ? 1 : 0,
                                                video: {
                                                    minduration: e[s].minduration,
                                                    maxduration: e[s].maxduration,
                                                    protocols: e[s].protocols,
                                                    mimes: e[s].mimes,
                                                    ext: e[s].ext
                                                }
                                            };
                                            break;
                                        case c.EXT.KEY:
                                            n = {
                                                id: c.EXT.ID,
                                                required: e[s].required ? 1 : 0
                                            };
                                            break;
                                        case c.LOGO.KEY:
                                            n = {
                                                id: c.LOGO.ID,
                                                required: e[s].required ? 1 : 0,
                                                img: {
                                                    type: l.LOGO,
                                                    w: e[s].w || e[s].width || (e[s].sizes ? e[s].sizes[0] : x),
                                                    h: e[s].h || e[s].height || (e[s].sizes ? e[s].sizes[1] : x)
                                                }
                                            };
                                            break;
                                        case c.SPONSOREDBY.KEY:
                                        case c.BODY.KEY:
                                        case c.RATING.KEY:
                                        case c.LIKES.KEY:
                                        case c.DOWNLOADS.KEY:
                                        case c.PRICE.KEY:
                                        case c.SALEPRICE.KEY:
                                        case c.PHONE.KEY:
                                        case c.ADDRESS.KEY:
                                        case c.DESC2.KEY:
                                        case c.DISPLAYURL.KEY:
                                        case c.CTA.KEY:
                                            r = h[s],
                                            a = e,
                                            t = void 0,
                                            t = r.KEY,
                                            n = {
                                                id: r.ID,
                                                required: a[t].required ? 1 : 0,
                                                data: {
                                                    type: r.TYPE,
                                                    len: a[t].len,
                                                    ext: a[t].ext
                                                }
                                            }
                                        }
                                }
                                n && n.id && (i.assets[i.assets.length] = n)
                            }
                            var o = u.length
                              , d = 0;
                            return u.forEach(function(e) {
                                for (var r = i.assets.length, a = 0; a < r; a++)
                                    if (e.id == i.assets[a].id) {
                                        d++;
                                        break
                                    }
                            }),
                            m = o != d,
                            i
                        }(e.nativeParams)),
                        m ? O.logWarn(Y + "Error: Error in Native adunit " + e.params.adUnit + ". Ignoring the adunit. Refer to http://prebid.org/dev-docs/show-native-ads.html for more details.") : s.native = n;
                        break;
                    case S.d:
                        (a = f(e)) !== x && (s.video = a)
                    }
            else
                r = {
                    pos: 0,
                    w: e.params.width,
                    h: e.params.height,
                    topframe: O.inIframe() ? 0 : 1
                },
                O.isArray(o) && 1 < o.length && ((o = o.splice(1, o.length - 1)).forEach(function(e) {
                    p.push({
                        w: e[0],
                        h: e[1]
                    })
                }),
                r.format = p),
                s.banner = r;
            return function(t, i) {
                var s = -1;
                "function" != typeof i.getFloor || R.b.getConfig("pubmatic.disableFloors") || [S.b, S.d, S.c].forEach(function(e) {
                    var r, a;
                    t.hasOwnProperty(e) && ("object" !== D(r = i.getFloor({
                        currency: t.bidfloorcur,
                        mediaType: e,
                        size: "*"
                    })) || r.currency !== t.bidfloorcur || isNaN(parseInt(r.floor)) || (a = parseFloat(r.floor),
                    s = -1 == s ? a : Math.min(a, s)))
                });
                t.bidfloor && (s = Math.max(s, t.bidfloor));
                t.bidfloor = !isNaN(s) && 0 < s ? s : x
            }(s, e),
            s.hasOwnProperty(S.b) || s.hasOwnProperty(S.c) || s.hasOwnProperty(S.d) ? s : x
        }
        O._each(c, function(e) {
            g[e.ID] = e.KEY
        }),
        O._each(c, function(e) {
            h[e.KEY] = e
        });
        var b = {
            code: "pubmatic",
            gvlid: 76,
            supportedMediaTypes: [S.b, S.d, S.c],
            isBidRequestValid: function(e) {
                if (e && e.params) {
                    if (!O.isStr(e.params.publisherId))
                        return O.logWarn(Y + "Error: publisherId is mandatory and cannot be numeric (wrap it in quotes in your config). Call to OpenBid will not be sent for ad unit: " + JSON.stringify(e)),
                        !1;
                    if (e.params.hasOwnProperty("video")) {
                        if (!e.params.video.hasOwnProperty("mimes") || !O.isArray(e.params.video.mimes) || 0 === e.params.video.mimes.length)
                            return O.logWarn(Y + "Error: For video ads, mimes is mandatory and must specify atlease 1 mime value. Call to OpenBid will not be sent for ad unit:" + JSON.stringify(e)),
                            !1;
                        if (!e.hasOwnProperty("mediaTypes") || !e.mediaTypes.hasOwnProperty(S.d))
                            return O.logError("".concat(Y, ": mediaTypes or mediaTypes.video is not specified. Rejecting bid: "), e),
                            !1;
                        if (!e.mediaTypes[S.d].hasOwnProperty("context"))
                            return O.logError("".concat(Y, ": no context specified in bid. Rejecting bid: "), e),
                            !1;
                        if ("outstream" === e.mediaTypes[S.d].context && !O.isStr(e.params.outstreamAU))
                            return O.logError("".concat(Y, ': for "outstream" bids outstreamAU is required. Rejecting bid: '), e),
                            !1
                    }
                    return !0
                }
                return !1
            },
            buildRequests: function(e, r) {
                var a;
                r && r.refererInfo && (a = r.refererInfo);
                var t, i, s, n, o, d, p, c, l, u, m, g, h, f, b, y, v = {
                    pageURL: (t = a) && t.referer ? t.referer : window.location.href,
                    refURL: window.document.referrer
                }, E = (i = v,
                {
                    id: "" + (new Date).getTime(),
                    at: 1,
                    cur: [A],
                    imp: [],
                    site: {
                        page: i.pageURL,
                        ref: i.refURL,
                        publisher: {}
                    },
                    device: {
                        ua: navigator.userAgent,
                        js: 1,
                        dnt: "yes" == navigator.doNotTrack || "1" == navigator.doNotTrack || "1" == navigator.msDoNotTrack ? 1 : 0,
                        h: screen.height,
                        w: screen.width,
                        language: navigator.language
                    },
                    user: {},
                    ext: {}
                }), I = "", w = [], T = [];
                if (e.forEach(function(e) {
                    var r;
                    (s = O.deepClone(e)).params.adSlot = s.params.adSlot || "",
                    U(s),
                    s.params.hasOwnProperty("video") || s.hasOwnProperty("mediaTypes") && s.mediaTypes.hasOwnProperty(S.c) || 0 !== s.params.width || 0 !== s.params.height ? (v.pubId = v.pubId || s.params.publisherId,
                    (v = function(e, r) {
                        var a, t, i;
                        for (a in r.kadpageurl || (r.kadpageurl = r.pageURL),
                        N)
                            N.hasOwnProperty(a) && (t = e[a]) && ("object" === D(i = N[a]) && (t = i.f(t, r)),
                            O.isStr(t) ? r[a] = t : O.logWarn(Y + "Ignoring param : " + a + " with value : " + N[a] + ", expects string-value, found " + D(t)));
                        return r
                    }(s.params, v)).transactionId = s.transactionId,
                    "" === I ? I = s.params.currency || x : s.params.hasOwnProperty("currency") && I !== s.params.currency && O.logWarn(Y + "Currency specifier ignored. Only one currency permitted."),
                    s.params.currency = I,
                    s.params.hasOwnProperty("dctr") && O.isStr(s.params.dctr) && w.push(s.params.dctr),
                    s.params.hasOwnProperty("bcat") && O.isArray(s.params.bcat) && (T = T.concat(s.params.bcat)),
                    (r = z(s)) && E.imp.push(r)) : O.logWarn(Y + "Skipping the non-standard adslot: ", s.params.adSlot, JSON.stringify(s))
                }),
                0 != E.imp.length)
                    return E.site.publisher.id = v.pubId.trim(),
                    k = v.pubId.trim(),
                    E.ext.wrapper = {},
                    E.ext.wrapper.profile = parseInt(v.profId) || x,
                    E.ext.wrapper.version = parseInt(v.verId) || x,
                    E.ext.wrapper.wiid = v.wiid || r.auctionId,
                    E.ext.wrapper.wv = "prebid_prebid_4.21.0",
                    E.ext.wrapper.transactionId = v.transactionId,
                    E.ext.wrapper.wp = "pbjs",
                    E.user.gender = v.gender ? v.gender.trim() : x,
                    E.user.geo = {},
                    E.user.geo.lat = C("lat", v.lat),
                    E.user.geo.lon = C("lon", v.lon),
                    E.user.yob = C("yob", v.yob),
                    E.device.geo = E.user.geo,
                    E.site.page = v.kadpageurl.trim() || E.site.page.trim(),
                    E.site.domain = (n = E.site.page,
                    (o = document.createElement("a")).href = n,
                    o.hostname),
                    "object" === D(R.b.getConfig("content")) && (E.site.content = R.b.getConfig("content")),
                    "object" === D(R.b.getConfig("device")) && (E.device = P(E.device, R.b.getConfig("device"))),
                    O.deepSetValue(E, "source.tid", v.transactionId),
                    -1 !== window.location.href.indexOf("pubmaticTest=true") && (E.test = 1),
                    e[0].schain && O.deepSetValue(E, "source.ext.schain", e[0].schain),
                    r && r.gdprConsent && (O.deepSetValue(E, "user.ext.consent", r.gdprConsent.consentString),
                    O.deepSetValue(E, "regs.ext.gdpr", r.gdprConsent.gdprApplies ? 1 : 0)),
                    r && r.uspConsent && O.deepSetValue(E, "regs.ext.us_privacy", r.uspConsent),
                    !0 === R.b.getConfig("coppa") && O.deepSetValue(E, "regs.coppa", 1),
                    d = E,
                    c = e,
                    m = "",
                    0 < (p = w).length && (c[0].params.hasOwnProperty("dctr") ? (m = c[0].params.dctr,
                    O.isStr(m) && 0 < m.length ? (u = m.split("|"),
                    m = "",
                    u.forEach(function(e) {
                        m += 0 < e.length ? e.trim() + "|" : ""
                    }),
                    l = m.length,
                    "|" === m.substring(l, l - 1) && (m = m.substring(0, l - 1)),
                    d.site.ext = {
                        key_val: m.trim()
                    }) : O.logWarn(Y + "Ignoring param : dctr with value : " + m + ", expects string-value, found empty or non-string value"),
                    1 < p.length && O.logWarn(Y + "dctr value found in more than 1 adunits. Value from 1st adunit will be picked. Ignoring values from subsequent adunits")) : O.logWarn(Y + "dctr value not found in 1st adunit, ignoring values from subsequent adunits")),
                    g = E,
                    h = e,
                    f = O.deepAccess(h, "0.userIdAsEids"),
                    O.isArray(f) && 0 < f.length && O.deepSetValue(g, "user.eids", f),
                    b = E,
                    0 < (y = (y = T).filter(function(e) {
                        return "string" == typeof e || (O.logWarn(Y + "bcat: Each category should be a string, ignoring category: " + e),
                        !1)
                    }).map(function(e) {
                        return e.trim()
                    }).filter(function(e, r, a) {
                        return 3 < e.length ? a.indexOf(e) === r : void O.logWarn(Y + "bcat: Each category should have a value of a length of more than 3 characters, ignoring category: " + e)
                    })).length && (O.logWarn(Y + "bcat: Selected: ", y),
                    b.bcat = y),
                    "object" === D(R.b.getConfig("app")) && (E.app = R.b.getConfig("app"),
                    E.app.publisher = E.site.publisher,
                    E.app.ext = E.site.ext || x,
                    "object" !== D(E.app.content) && (E.app.content = E.site.content || x),
                    delete E.site),
                    {
                        method: "POST",
                        url: "https://hbopenbid.pubmatic.com/translator?source=prebid-client",
                        data: JSON.stringify(E),
                        bidderRequest: r
                    }
            },
            interpretResponse: function(e, t) {
                var i = []
                  , s = A
                  , n = JSON.parse(t.data)
                  , o = n.site && n.site.ref ? n.site.ref : "";
                try {
                    e.body && e.body.seatbid && O.isArray(e.body.seatbid) && (s = e.body.cur || s,
                    e.body.seatbid.forEach(function(e) {
                        e.bid && O.isArray(e.bid) && e.bid.forEach(function(r) {
                            var a = {
                                requestId: r.impid,
                                cpm: (parseFloat(r.price) || 0).toFixed(2),
                                width: r.w,
                                height: r.h,
                                creativeId: r.crid || r.id,
                                dealId: r.dealid,
                                currency: s,
                                netRevenue: !1,
                                ttl: 300,
                                referrer: o,
                                ad: r.adm,
                                pm_seat: e.seat || null,
                                pm_dspid: r.ext && r.ext.dspid ? r.ext.dspid : null,
                                partnerImpId: r.id || ""
                            };
                            n.imp && 0 < n.imp.length && n.imp.forEach(function(e) {
                                if (r.impid === e.id)
                                    switch (!function(r, e) {
                                        var a, t = new RegExp(/VAST\s+version/);
                                        if (0 <= r.indexOf('span class="PubAPIAd"'))
                                            e.mediaType = S.b;
                                        else if (t.test(r))
                                            e.mediaType = S.d;
                                        else
                                            try {
                                                (a = JSON.parse(r.replace(/\\/g, ""))) && a.native && (e.mediaType = S.c)
                                            } catch (e) {
                                                O.logWarn(Y + "Error: Cannot parse native reponse for ad response: " + r)
                                            }
                                    }(r.adm, a),
                                    a.mediaType) {
                                    case S.b:
                                        break;
                                    case S.d:
                                        a.width = r.hasOwnProperty("w") ? r.w : e.video.w,
                                        a.height = r.hasOwnProperty("h") ? r.h : e.video.h,
                                        a.vastXml = r.adm,
                                        function(e, r) {
                                            var a, t, i;
                                            if (r.bidderRequest && r.bidderRequest.bids) {
                                                for (var s = 0; s < r.bidderRequest.bids.length; s++)
                                                    r.bidderRequest.bids[s].bidId === e.requestId && (a = r.bidderRequest.bids[s].params,
                                                    t = r.bidderRequest.bids[s].mediaTypes[S.d].context,
                                                    i = r.bidderRequest.bids[s].adUnitCode);
                                                t && "outstream" === t && a && a.outstreamAU && i && (e.rendererCode = a.outstreamAU,
                                                e.renderer = p.newRenderer(e.rendererCode, i))
                                            }
                                        }(a, t);
                                        break;
                                    case S.c:
                                        !function(e, r) {
                                            if (r.native = {},
                                            e.hasOwnProperty("adm")) {
                                                var a = "";
                                                try {
                                                    a = JSON.parse(e.adm.replace(/\\/g, ""))
                                                } catch (e) {
                                                    return O.logWarn(Y + "Error: Cannot parse native reponse for ad response: " + r.adm)
                                                }
                                                if (a && a.native && a.native.assets && 0 < a.native.assets.length) {
                                                    r.mediaType = S.c;
                                                    for (var t = 0, i = a.native.assets.length; t < i; t++)
                                                        switch (a.native.assets[t].id) {
                                                        case c.TITLE.ID:
                                                            r.native.title = a.native.assets[t].title && a.native.assets[t].title.text;
                                                            break;
                                                        case c.IMAGE.ID:
                                                            r.native.image = {
                                                                url: a.native.assets[t].img && a.native.assets[t].img.url,
                                                                height: a.native.assets[t].img && a.native.assets[t].img.h,
                                                                width: a.native.assets[t].img && a.native.assets[t].img.w
                                                            };
                                                            break;
                                                        case c.ICON.ID:
                                                            r.native.icon = {
                                                                url: a.native.assets[t].img && a.native.assets[t].img.url,
                                                                height: a.native.assets[t].img && a.native.assets[t].img.h,
                                                                width: a.native.assets[t].img && a.native.assets[t].img.w
                                                            };
                                                            break;
                                                        case c.SPONSOREDBY.ID:
                                                        case c.BODY.ID:
                                                        case c.LIKES.ID:
                                                        case c.DOWNLOADS.ID:
                                                        case c.PRICE:
                                                        case c.SALEPRICE.ID:
                                                        case c.PHONE.ID:
                                                        case c.ADDRESS.ID:
                                                        case c.DESC2.ID:
                                                        case c.CTA.ID:
                                                        case c.RATING.ID:
                                                        case c.DISPLAYURL.ID:
                                                            r.native[g[a.native.assets[t].id]] = a.native.assets[t].data && a.native.assets[t].data.value
                                                        }
                                                    r.native.clickUrl = a.native.link && a.native.link.url,
                                                    r.native.clickTrackers = a.native.link && a.native.link.clicktrackers || [],
                                                    r.native.impressionTrackers = a.native.imptrackers || [],
                                                    r.native.jstracker = a.native.jstracker || [],
                                                    r.width || (r.width = 0),
                                                    r.height || (r.height = 0)
                                                }
                                            }
                                        }(r, a)
                                    }
                            }),
                            r.ext && r.ext.deal_channel && (a.dealChannel = d[r.ext.deal_channel] || null),
                            a.meta = {},
                            r.ext && r.ext.dspid && (a.meta.networkId = r.ext.dspid),
                            r.ext && r.ext.advid && (a.meta.buyerId = r.ext.advid),
                            r.adomain && 0 < r.adomain.length && (a.meta.advertiserDomains = r.adomain,
                            a.meta.clickUrl = r.adomain[0]),
                            e.ext && e.ext.buyid && (a.adserverTargeting = {
                                hb_buyid_pubmatic: e.ext.buyid
                            }),
                            i.push(a)
                        })
                    }))
                } catch (e) {
                    O.logError(e)
                }
                return i
            },
            getUserSyncs: function(e, r, a, t) {
                var i = "" + k;
                return a && (i += "&gdpr=" + (a.gdprApplies ? 1 : 0),
                i += "&gdpr_consent=" + encodeURIComponent(a.consentString || "")),
                t && (i += "&us_privacy=" + encodeURIComponent(t)),
                !0 === R.b.getConfig("coppa") && (i += "&coppa=1"),
                e.iframeEnabled ? [{
                    type: "iframe",
                    url: "https://ads.pubmatic.com/AdServer/js/showad.js#PIX&kdntuid=1&p=" + i
                }] : [{
                    type: "image",
                    url: "https://image8.pubmatic.com/AdServer/ImgSync?p=" + i
                }]
            },
            transformBidParams: function(e) {
                return O.convertTypes({
                    publisherId: "string",
                    adSlot: "string"
                }, e)
            }
        };
        Object(t.registerBidder)(b)
    }
}, [678]);
atdpbjsChunk([153], {
    694: function(e, r, t) {
        e.exports = t(695)
    },
    695: function(e, r, t) {
        "use strict";
        Object.defineProperty(r, "__esModule", {
            value: !0
        }),
        t.d(r, "spec", function() {
            return i
        });
        var c = t(0)
          , n = t(1)
          , p = t(11);
        function a() {
            return (a = Object.assign || function(e) {
                for (var r = 1; r < arguments.length; r++) {
                    var t = arguments[r];
                    for (var n in t)
                        Object.prototype.hasOwnProperty.call(t, n) && (e[n] = t[n])
                }
                return e
            }
            ).apply(this, arguments)
        }
        var s = {
            TITLE_LEN: 100,
            DESCR_LEN: 200,
            SPONSORED_BY_LEN: 50,
            IMG_MIN: 150,
            ICON_MIN: 50
        }
          , d = ["cp", "ct", "cf", "video", "battr", "bcat", "badv", "bidfloor"]
          , i = {
            code: "pulsepoint",
            gvlid: 81,
            aliases: ["pulseLite", "pulsepointLite"],
            supportedMediaTypes: ["banner", "native", "video"],
            isBidRequestValid: function(e) {
                return !!(e && e.params && e.params.cp && e.params.ct)
            },
            buildRequests: function(e, r) {
                var t, n, i;
                return {
                    method: "POST",
                    url: "https://bid.contextweb.com/header/ortb?src=prebid",
                    data: {
                        id: e[0].bidderRequestId,
                        imp: e.map(function(e) {
                            return {
                                id: (r = e).bidId,
                                banner: function(e) {
                                    var r = function(e) {
                                        var r = c.deepAccess(e, "mediaTypes.banner.sizes");
                                        return r && c.isArray(r) ? r.filter(function(e) {
                                            return c.isArray(e) && 2 === e.length
                                        }).map(function(e) {
                                            return {
                                                w: e[0],
                                                h: e[1]
                                            }
                                        }) : null
                                    }(e)
                                      , t = function(e, r) {
                                        if (e.params.cf) {
                                            var t = e.params.cf.toUpperCase().split("X")
                                              , n = parseInt(e.params.cw || t[0], 10)
                                              , i = parseInt(e.params.ch || t[1], 10);
                                            return [n, i]
                                        }
                                        return r && 0 < r.length ? [r[0].w, r[0].h] : [1, 1]
                                    }(e, r);
                                    return e.mediaTypes && e.mediaTypes.banner ? {
                                        w: t[0],
                                        h: t[1],
                                        battr: e.params.battr,
                                        format: r
                                    } : null
                                }(r),
                                native: function(e) {
                                    if (e.nativeParams) {
                                        var r = [];
                                        return u(r, function(e, r, t) {
                                            return r ? {
                                                id: e,
                                                required: r.required ? 1 : 0,
                                                title: {
                                                    len: r.len || t
                                                }
                                            } : null
                                        }(r.length + 1, e.nativeParams.title, s.TITLE_LEN)),
                                        u(r, l(r.length + 1, e.nativeParams.body, 2, s.DESCR_LEN)),
                                        u(r, l(r.length + 1, e.nativeParams.sponsoredBy, 1, s.SPONSORED_BY_LEN)),
                                        u(r, o(r.length + 1, e.nativeParams.icon, 1, s.ICON_MIN, s.ICON_MIN)),
                                        u(r, o(r.length + 1, e.nativeParams.image, 3, s.IMG_MIN, s.IMG_MIN)),
                                        {
                                            request: JSON.stringify({
                                                assets: r
                                            }),
                                            ver: "1.1",
                                            battr: e.params.battr
                                        }
                                    }
                                    return null
                                }(r),
                                tagid: r.params.ct.toString(),
                                video: function(e) {
                                    return e.params.video ? a({}, e.params.video, {
                                        battr: e.params.battr
                                    }) : null
                                }(r),
                                bidfloor: r.params.bidfloor,
                                ext: function(r) {
                                    var t = {}
                                      , n = {};
                                    return d.forEach(function(e) {
                                        return n[e] = 1
                                    }),
                                    Object.keys(r.params).forEach(function(e) {
                                        n[e] || (t[e] = r.params[e])
                                    }),
                                    0 < Object.keys(t).length ? {
                                        prebid: t
                                    } : null
                                }(r)
                            };
                            var r
                        }),
                        site: (n = r,
                        i = (t = e) && 0 < t.length ? t[0].params.cp : "0",
                        t[0].params.app ? null : {
                            publisher: {
                                id: i.toString()
                            },
                            ref: function() {
                                try {
                                    return window.top.document.referrer
                                } catch (e) {
                                    return document.referrer
                                }
                            }(),
                            page: n && n.refererInfo ? n.refererInfo.referer : ""
                        }),
                        app: function(e) {
                            var r = e && 0 < e.length ? e[0].params.cp : "0"
                              , t = e[0].params.app;
                            if (t)
                                return {
                                    publisher: {
                                        id: r.toString()
                                    },
                                    bundle: t.bundle,
                                    storeurl: t.storeUrl,
                                    domain: t.domain
                                };
                            return null
                        }(e),
                        device: {
                            ua: navigator.userAgent,
                            language: navigator.language || navigator.browserLanguage || navigator.userLanguage || navigator.systemLanguage
                        },
                        bcat: e[0].params.bcat,
                        badv: e[0].params.badv,
                        user: function(e, r) {
                            var t = {};
                            r && r.gdprConsent && (t.consent = r.gdprConsent.consentString);
                            {
                                var n, i;
                                e && e.userId && (t.eids = [],
                                m(t.eids, e.userId.pubcid, "pubcommon"),
                                m(t.eids, e.userId.britepoolid, "britepool.com"),
                                m(t.eids, e.userId.criteoId, "criteo"),
                                m(t.eids, e.userId.idl_env, "identityLink"),
                                m(t.eids, c.deepAccess(e, "userId.id5id.uid"), "id5-sync.com", c.deepAccess(e, "userId.id5id.ext")),
                                m(t.eids, c.deepAccess(e, "userId.parrableId.eid"), "parrable.com"),
                                e.userId.lipb && e.userId.lipb.lipbid && m(t.eids, e.userId.lipb.lipbid, "liveintent.com"),
                                m(t.eids, e.userId.tdid, "adserver.org", {
                                    rtiPartner: "TDID"
                                }),
                                (n = e.userId.digitrustid) && n.data && (i = {},
                                n.data.id && (i.id = n.data.id),
                                n.data.keyv && (i.keyv = n.data.keyv),
                                t.digitrust = i))
                            }
                            return {
                                ext: t
                            }
                        }(e[0], r),
                        regs: function(e) {
                            if (e.gdprConsent || e.uspConsent) {
                                var r = {};
                                return e.gdprConsent && (r.gdpr = e.gdprConsent.gdprApplies ? 1 : 0),
                                e.uspConsent && (r.us_privacy = e.uspConsent),
                                {
                                    ext: r
                                }
                            }
                            return null
                        }(r),
                        source: function(e) {
                            if (e)
                                return {
                                    ext: {
                                        schain: e
                                    }
                                };
                            return null
                        }(e[0].schain)
                    },
                    bidderRequest: r
                }
            },
            interpretResponse: function(e, r) {
                return function(e, r) {
                    var a = {}
                      , s = {}
                      , d = {}
                      , u = r.body;
                    e.data.imp.forEach(function(e) {
                        a[e.id] = e
                    }),
                    u && u.seatbid.forEach(function(e) {
                        return e.bid.forEach(function(e) {
                            s[e.impid] = e
                        })
                    });
                    e.bidderRequest && e.bidderRequest.bids && e.bidderRequest.bids.forEach(function(e) {
                        d[e.bidId] = e
                    });
                    var o = [];
                    return Object.keys(a).forEach(function(e) {
                        var r, t, n, i;
                        s[e] && (r = {
                            requestId: e,
                            cpm: s[e].price,
                            creative_id: s[e].crid,
                            creativeId: s[e].crid,
                            adId: e,
                            ttl: s[e].exp || 20,
                            netRevenue: !0,
                            currency: u.cur || "USD"
                        },
                        a[e].video ? (d[e] && "outstream" === c.deepAccess(d[e], "mediaTypes.video.context") && (r.renderer = (t = c.deepAccess(d[e], "renderer.options"),
                        n = c.deepAccess(s[e], "ext.outstream"),
                        (i = p.a.install({
                            url: n.rendererUrl,
                            config: {
                                defaultOptions: n.config,
                                rendererOptions: t,
                                type: n.type
                            },
                            loaded: !1
                        })).setRender(function(r) {
                            r.renderer.push(function() {
                                var e = r.renderer.getConfig();
                                (new window.PulsePointOutstreamRenderer).render({
                                    adUnitCode: r.adUnitCode,
                                    vastXml: r.vastXml,
                                    type: e.type,
                                    defaultOptions: e.defaultOptions,
                                    rendererOptions: t
                                })
                            })
                        }),
                        i)),
                        r.vastXml = s[e].adm,
                        r.mediaType = "video",
                        r.width = s[e].w,
                        r.height = s[e].h) : a[e].banner ? (r.ad = s[e].adm,
                        r.width = s[e].w || a[e].banner.w,
                        r.height = s[e].h || a[e].banner.h) : a[e].native && (r.native = function(e, r) {
                            if (e.native) {
                                var t = function(e) {
                                    try {
                                        if (e)
                                            return JSON.parse(e)
                                    } catch (e) {
                                        c.logError("pulsepointLite.safeParse", "ERROR", e)
                                    }
                                    return null
                                }(r.adm)
                                  , n = {};
                                if (t && t.native && t.native.assets)
                                    return t.native.assets.forEach(function(e) {
                                        n.title = e.title ? e.title.text : n.title,
                                        n.body = e.data && 2 === e.data.type ? e.data.value : n.body,
                                        n.sponsoredBy = e.data && 1 === e.data.type ? e.data.value : n.sponsoredBy,
                                        n.image = e.img && 3 === e.img.type ? e.img.url : n.image,
                                        n.icon = e.img && 1 === e.img.type ? e.img.url : n.icon
                                    }),
                                    t.native.link && (n.clickUrl = encodeURIComponent(t.native.link.url)),
                                    n.impressionTrackers = t.native.imptrackers,
                                    n
                            }
                            return null
                        }(a[e], s[e]),
                        r.mediaType = "native"),
                        o.push(r))
                    }),
                    o
                }(r, e)
            },
            getUserSyncs: function(e) {
                return e.iframeEnabled ? [{
                    type: "iframe",
                    url: "https://bh.contextweb.com/visitormatch"
                }] : e.pixelEnabled ? [{
                    type: "image",
                    url: "https://bh.contextweb.com/visitormatch/prebid"
                }] : void 0
            },
            transformBidParams: function(e) {
                return c.convertTypes({
                    cf: "string",
                    cp: "number",
                    ct: "number"
                }, e)
            }
        };
        function u(e, r) {
            r && e.push(r)
        }
        function o(e, r, t, n, i) {
            return r ? {
                id: e,
                required: r.required ? 1 : 0,
                img: {
                    type: t,
                    wmin: r.wmin || n,
                    hmin: r.hmin || i
                }
            } : null
        }
        function l(e, r, t, n) {
            return r ? {
                id: e,
                required: r.required ? 1 : 0,
                data: {
                    type: t,
                    len: r.len || n
                }
            } : null
        }
        function m(e, r, t, n) {
            var i;
            r && (i = {
                id: r
            },
            n && (i.ext = n),
            e.push({
                source: t,
                uids: [i]
            }))
        }
        Object(n.registerBidder)(i)
    }
}, [694]);
atdpbjsChunk([136], {
    734: function(e, r, i) {
        e.exports = i(735)
    },
    735: function(e, r, i) {
        "use strict";
        Object.defineProperty(r, "__esModule", {
            value: !0
        }),
        i.d(r, "OPENRTB", function() {
            return p
        }),
        i.d(r, "spec", function() {
            return c
        });
        var d = i(0)
          , n = i(2)
          , t = i(1)
          , a = i(12)
          , s = i.n(a)
          , u = ["prebid-eu", "prebid-us", "prebid-asia"]
          , o = ["USD"]
          , p = {
            NATIVE: {
                IMAGE_TYPE: {
                    ICON: 1,
                    MAIN: 3
                },
                ASSET_ID: {
                    TITLE: 1,
                    IMAGE: 2,
                    ICON: 3,
                    BODY: 4,
                    SPONSORED: 5,
                    CTA: 6
                },
                DATA_ASSET_TYPE: {
                    SPONSORED: 1,
                    DESC: 2,
                    CTA_TEXT: 12
                }
            }
        }
          , c = {
            code: "rtbhouse",
            supportedMediaTypes: [n.b, n.c],
            isBidRequestValid: function(e) {
                return !(!s()(u, e.params.region) || !e.params.publisherId)
            },
            buildRequests: function(e, r) {
                var i, t, n, a, s = {
                    id: e[0].auctionId,
                    imp: e.map(function(e) {
                        var r = {
                            id: e.bidId,
                            banner: function(e) {
                                if ("banner" === e.mediaType || d.deepAccess(e, "mediaTypes.banner") || !e.mediaType && !e.mediaTypes) {
                                    var r = e.sizes || e.mediaTypes.banner.sizes;
                                    return {
                                        w: r[0][0],
                                        h: r[0][1],
                                        format: r.map(function(e) {
                                            return {
                                                w: e[0],
                                                h: e[1]
                                            }
                                        })
                                    }
                                }
                            }(e),
                            native: function(e) {
                                if ("native" === e.mediaType || d.deepAccess(e, "mediaTypes.native"))
                                    return {
                                        request: {
                                            assets: function(e) {
                                                var r = e.nativeParams || d.deepAccess(e, "mediaTypes.native")
                                                  , i = [];
                                                r.title && i.push({
                                                    id: p.NATIVE.ASSET_ID.TITLE,
                                                    required: r.title.required ? 1 : 0,
                                                    title: {
                                                        len: r.title.len || 25
                                                    }
                                                });
                                                r.image && i.push({
                                                    id: p.NATIVE.ASSET_ID.IMAGE,
                                                    required: r.image.required ? 1 : 0,
                                                    img: T(r.image, p.NATIVE.IMAGE_TYPE.MAIN)
                                                });
                                                r.icon && i.push({
                                                    id: p.NATIVE.ASSET_ID.ICON,
                                                    required: r.icon.required ? 1 : 0,
                                                    img: T(r.icon, p.NATIVE.IMAGE_TYPE.ICON)
                                                });
                                                r.sponsoredBy && i.push({
                                                    id: p.NATIVE.ASSET_ID.SPONSORED,
                                                    required: r.sponsoredBy.required ? 1 : 0,
                                                    data: {
                                                        type: p.NATIVE.DATA_ASSET_TYPE.SPONSORED,
                                                        len: r.sponsoredBy.len
                                                    }
                                                });
                                                r.body && i.push({
                                                    id: p.NATIVE.ASSET_ID.BODY,
                                                    required: r.body.request ? 1 : 0,
                                                    data: {
                                                        type: p.NATIVE.DATA_ASSET_TYPE.DESC,
                                                        len: r.body.len
                                                    }
                                                });
                                                r.cta && i.push({
                                                    id: p.NATIVE.ASSET_ID.CTA,
                                                    required: r.cta.required ? 1 : 0,
                                                    data: {
                                                        type: p.NATIVE.DATA_ASSET_TYPE.CTA_TEXT,
                                                        len: r.cta.len
                                                    }
                                                });
                                                return i
                                            }(e)
                                        },
                                        ver: "1.1"
                                    }
                            }(e),
                            tagid: e.adUnitCode.toString()
                        }
                          , i = parseFloat(e.params.bidfloor);
                        i && (r.bidfloor = i);
                        return r
                    }),
                    site: (t = r,
                    {
                        publisher: {
                            id: ((i = e) && 0 < i.length ? i[0].params.publisherId : "unknown").toString()
                        },
                        page: t.refererInfo.referer,
                        name: d.getOrigin()
                    }),
                    cur: o,
                    test: e[0].params.test || 0,
                    source: function(e) {
                        var r = {
                            tid: e.transactionId
                        }
                          , i = function(e) {
                            return e ? function(e) {
                                if (!e.nodes)
                                    return !1;
                                var i = ["asi", "sid", "hp"];
                                return e.nodes.every(function(r) {
                                    return i.every(function(e) {
                                        return r[e]
                                    })
                                })
                            }(e) ? e : (d.logError("RTB House: required schain params missing"),
                            null) : null
                        }(e.schain);
                        i && (r.ext = {
                            schain: i
                        });
                        return r
                    }(e[0])
                };
                return r && r.gdprConsent && r.gdprConsent.gdprApplies && (n = r.gdprConsent.consentString ? r.gdprConsent.consentString.replace(/\+/g, "-").replace(/\//g, "_").replace(/=+$/, "") : "",
                a = r.gdprConsent.gdprApplies ? 1 : 0,
                s.regs = {
                    ext: {
                        gdpr: a
                    }
                },
                s.user = {
                    ext: {
                        consent: n
                    }
                }),
                {
                    method: "POST",
                    url: "https://" + e[0].params.region + ".creativecdn.com/bidder/prebid/bids",
                    data: JSON.stringify(s)
                }
            },
            interpretResponse: function(e) {
                var r = e.body;
                if (!d.isArray(r))
                    return [];
                var t = [];
                return r.forEach(function(e) {
                    var r, i;
                    0 !== e.price && (0 === e.adm.indexOf("{") ? t.push({
                        requestId: (i = e).impid,
                        mediaType: n.c,
                        cpm: i.price,
                        creativeId: i.adid,
                        width: 1,
                        height: 1,
                        ttl: 55,
                        netRevenue: !0,
                        currency: "USD",
                        native: function(e) {
                            var r = JSON.parse(e).native
                              , i = {
                                clickUrl: encodeURIComponent(r.link.url),
                                impressionTrackers: r.imptrackers
                            };
                            return r.assets.forEach(function(e) {
                                switch (e.id) {
                                case p.NATIVE.ASSET_ID.TITLE:
                                    i.title = e.title.text;
                                    break;
                                case p.NATIVE.ASSET_ID.IMAGE:
                                    i.image = {
                                        url: encodeURIComponent(e.img.url),
                                        width: e.img.w,
                                        height: e.img.h
                                    };
                                    break;
                                case p.NATIVE.ASSET_ID.ICON:
                                    i.icon = {
                                        url: encodeURIComponent(e.img.url),
                                        width: e.img.w,
                                        height: e.img.h
                                    };
                                    break;
                                case p.NATIVE.ASSET_ID.BODY:
                                    i.body = e.data.value;
                                    break;
                                case p.NATIVE.ASSET_ID.SPONSORED:
                                    i.sponsoredBy = e.data.value;
                                    break;
                                case p.NATIVE.ASSET_ID.CTA:
                                    i.cta = e.data.value
                                }
                            }),
                            i
                        }(i.adm)
                    }) : t.push({
                        requestId: (r = e).impid,
                        mediaType: n.b,
                        cpm: r.price,
                        creativeId: r.adid,
                        ad: r.adm,
                        width: r.w,
                        height: r.h,
                        ttl: 55,
                        netRevenue: !0,
                        currency: "USD"
                    }))
                }),
                t
            }
        };
        function T(e, r) {
            var i, t, n, a = {
                type: r
            };
            return e.aspect_ratios && (t = (i = e.aspect_ratios[0]).min_width || 100,
            a.wmin = t,
            a.hmin = t / i.ratio_width * i.ratio_height),
            e.sizes && (n = Array.isArray(e.sizes[0]) ? e.sizes[0] : e.sizes,
            a.w = n[0],
            a.h = n[1]),
            a
        }
        Object(t.registerBidder)(c)
    }
}, [734]);
atdpbjsChunk([129], {
    752: function(n, i, e) {
        n.exports = e(753)
    },
    753: function(n, i, e) {
        "use strict";
        Object.defineProperty(i, "__esModule", {
            value: !0
        }),
        i.isSchainObjectValid = u,
        i.isValidSchainConfig = l,
        i.makeBidRequestsHook = o,
        i.init = g;
        var t = e(3)
          , c = e(8)
          , a = e(0)
          , s = "Invalid schain object found: "
          , r = " should be a string"
          , d = " should be an Integer"
          , f = " should be an object"
          , b = " should be an Array"
          , h = {
            STRICT: "strict",
            RELAXED: "relaxed",
            OFF: "off"
        }
          , O = [];
        function u(n, i) {
            var e = "Detected something wrong within an schain config:"
              , t = "";
            function c(n) {
                t += "\n" + n
            }
            function o() {
                (!0 === i ? Object(a.logError) : Object(a.logWarn))(e, n, t)
            }
            if (!Object(a.isPlainObject)(n) && (c("schain.config" + f),
            o(),
            i))
                return !1;
            if (Object(a.isNumber)(n.complete) && Object(a.isInteger)(n.complete) || c("schain.config.complete" + d),
            Object(a.isStr)(n.ver) || c("schain.config.ver" + r),
            Object(a.hasOwn)(n, "ext") && (Object(a.isPlainObject)(n.ext) || c("schain.config.ext" + f)),
            Object(a.isArray)(n.nodes))
                n.nodes.forEach(function(n, i) {
                    Object(a.isStr)(n.asi) || c("schain.config.nodes[".concat(i, "].asi") + r),
                    Object(a.isStr)(n.sid) || c("schain.config.nodes[".concat(i, "].sid") + r),
                    Object(a.isNumber)(n.hp) && Object(a.isInteger)(n.hp) || c("schain.config.nodes[".concat(i, "].hp") + d),
                    Object(a.hasOwn)(n, "rid") && (Object(a.isStr)(n.rid) || c("schain.config.nodes[".concat(i, "].rid") + r)),
                    Object(a.hasOwn)(n, "name") && (Object(a.isStr)(n.name) || c("schain.config.nodes[".concat(i, "].name") + r)),
                    Object(a.hasOwn)(n, "domain") && (Object(a.isStr)(n.domain) || c("schain.config.nodes[".concat(i, "].domain") + r)),
                    Object(a.hasOwn)(n, "ext") && (Object(a.isPlainObject)(n.ext) || c("schain.config.nodes[".concat(i, "].ext") + f))
                });
            else if (c("schain.config.nodes" + b),
            o(),
            i)
                return !1;
            return !(0 < t.length && (o(),
            i))
        }
        function l(n) {
            return void 0 !== n && (!!Object(a.isPlainObject)(n) || (Object(a.logError)(s + "the following schain config will not be used as schain is not an object.", n),
            !1))
        }
        function o(n, i) {
            var c = t.b.getConfig("schain")
              , o = t.b.getBidderConfig();
            i.forEach(function(n) {
                var i, e = n.bidderCode, t = o[i = e] && o[i].schain || c;
                n.bids.forEach(function(n) {
                    var i = function(n, i) {
                        var e = h.STRICT;
                        if (l(n)) {
                            if (Object(a.isStr)(n.validation) && -1 != O.indexOf(n.validation) && (e = n.validation),
                            e === h.OFF)
                                return n.config;
                            if (u(n.config, !(e !== h.STRICT)))
                                return n.config;
                            Object(a.logError)(s + "due to the 'strict' validation setting, this schain config will not be passed to bidder '".concat(i, "'.  See above error for details."))
                        }
                        return null
                    }(t, e);
                    i && (n.schain = i)
                })
            }),
            n(i)
        }
        function g() {
            c.default.makeBidRequests.after(o)
        }
        Object(a._each)(h, function(n) {
            return O.push(n)
        }),
        g()
    }
}, [752]);
atdpbjsChunk([14], {
    19: function(e, r, t) {
        "use strict";
        r.a = function(e) {
            var r = [];
            for (var t in e) {
                var a;
                e.hasOwnProperty(t) && ("pubProvidedId" === t ? r = r.concat(e.pubProvidedId) : (a = function(e, r) {
                    var t = p[r];
                    if (t && e) {
                        var a = {};
                        a.source = t.source;
                        var i = s.isFn(t.getValue) ? t.getValue(e) : e;
                        if (s.isStr(i)) {
                            var n, d, o = {
                                id: i,
                                atype: t.atype
                            };
                            return !s.isFn(t.getUidExt) || (n = t.getUidExt(e)) && (o.ext = n),
                            a.uids = [o],
                            !s.isFn(t.getEidExt) || (d = t.getEidExt(e)) && (a.ext = d),
                            a
                        }
                    }
                    return null
                }(e[t], t)) && r.push(a))
            }
            return r
        }
        ;
        var s = t(0)
          , p = {
            intentIqId: {
                source: "intentiq.com",
                atype: 1
            },
            pubcid: {
                source: "pubcid.org",
                atype: 1
            },
            tdid: {
                source: "adserver.org",
                atype: 1,
                getUidExt: function() {
                    return {
                        rtiPartner: "TDID"
                    }
                }
            },
            id5id: {
                getValue: function(e) {
                    return e.uid
                },
                source: "id5-sync.com",
                atype: 1,
                getEidExt: function(e) {
                    if (e.ext)
                        return e.ext
                }
            },
            parrableId: {
                source: "parrable.com",
                atype: 1,
                getValue: function(e) {
                    return e.eid ? e.eid : e.ccpaOptout ? "" : null
                },
                getUidExt: function(e) {
                    var r = s.pick(e, ["ibaOptout", "ccpaOptout"]);
                    if (Object.keys(r).length)
                        return r
                }
            },
            idl_env: {
                source: "liveramp.com",
                atype: 1
            },
            lipb: {
                getValue: function(e) {
                    return e.lipbid
                },
                source: "liveintent.com",
                atype: 1,
                getEidExt: function(e) {
                    if (Array.isArray(e.segments) && e.segments.length)
                        return {
                            segments: e.segments
                        }
                }
            },
            britepoolid: {
                source: "britepool.com",
                atype: 1
            },
            lotamePanoramaId: {
                source: "crwdcntrl.net",
                atype: 1
            },
            criteoId: {
                source: "criteo.com",
                atype: 1
            },
            merkleId: {
                source: "merkleinc.com",
                atype: 1
            },
            netId: {
                source: "netid.de",
                atype: 1
            },
            sharedid: {
                source: "sharedid.org",
                atype: 1,
                getValue: function(e) {
                    return e.id
                },
                getUidExt: function(e) {
                    return e && e.third ? {
                        third: e.third
                    } : void 0
                }
            },
            IDP: {
                source: "zeotap.com",
                atype: 1
            },
            haloId: {
                source: "audigent.com",
                atype: 1
            },
            quantcastId: {
                source: "quantcast.com",
                atype: 1
            },
            idx: {
                source: "idx.lat",
                atype: 1
            },
            connectid: {
                source: "verizonmedia.com",
                atype: 1
            },
            fabrickId: {
                source: "neustar.biz",
                atype: 1
            }
        }
    },
    778: function(e, r, t) {
        e.exports = t(779)
    },
    779: function(e, r, t) {
        "use strict";
        Object.defineProperty(r, "__esModule", {
            value: !0
        }),
        t.d(r, "spec", function() {
            return u
        });
        var o = t(0)
          , s = t(2)
          , p = t(3)
          , a = t(1)
          , c = t(19)
          , u = {
            code: "smartadserver",
            gvlid: 45,
            aliases: ["smart"],
            supportedMediaTypes: [s.b, s.d],
            isBidRequestValid: function(e) {
                return !!(e.params && e.params.siteId && e.params.pageId && e.params.formatId)
            },
            serializeSupplyChain: function(e) {
                if (!e || !e.nodes)
                    return null;
                var t = ["asi", "sid", "hp", "rid", "name", "domain"];
                return "".concat(e.ver, ",").concat(e.complete, "!") + e.nodes.map(function(r) {
                    return t.map(function(e) {
                        return r[e] ? encodeURIComponent(r[e]) : ""
                    }).join(",")
                }).join("!")
            },
            buildRequests: function(e, d) {
                return e.map(function(e) {
                    var r = {
                        siteid: e.params.siteId,
                        pageid: e.params.pageId,
                        formatid: e.params.formatId,
                        currencyCode: p.b.getConfig("currency.adServerCurrency"),
                        bidfloor: e.params.bidfloor || 0,
                        targeting: e.params.target && "" !== e.params.target ? e.params.target : void 0,
                        buid: e.params.buId && "" !== e.params.buId ? e.params.buId : void 0,
                        appname: e.params.appName && "" !== e.params.appName ? e.params.appName : void 0,
                        ckid: e.params.ckId || 0,
                        tagId: e.adUnitCode,
                        pageDomain: d && d.refererInfo && d.refererInfo.referer ? d.refererInfo.referer : void 0,
                        transactionId: e.transactionId,
                        timeout: p.b.getConfig("bidderTimeout"),
                        bidId: e.bidId,
                        prebidVersion: "4.21.0",
                        schain: u.serializeSupplyChain(e.schain)
                    }
                      , t = o.deepAccess(e, "mediaTypes.video");
                    if (t) {
                        if (!t || "instream" !== t.context && "outstream" !== t.context)
                            return {};
                        var a = t.playerSize[0];
                        r.isVideo = "instream" === t.context,
                        r.mediaType = s.d,
                        r.videoData = {
                            videoProtocol: e.params.video.protocol,
                            playerWidth: a[0],
                            playerHeight: a[1],
                            adBreak: e.params.video.startDelay || 1
                        }
                    } else {
                        var i = o.deepAccess(e, "mediaTypes.banner");
                        r.sizes = i.sizes.map(function(e) {
                            return {
                                w: e[0],
                                h: e[1]
                            }
                        })
                    }
                    d && d.gdprConsent && (r.addtl_consent = d.gdprConsent.addtlConsent,
                    r.gdpr_consent = d.gdprConsent.consentString,
                    r.gdpr = d.gdprConsent.gdprApplies),
                    e && e.userId && (r.eids = Object(c.a)(e.userId)),
                    d && d.uspConsent && (r.us_privacy = d.uspConsent);
                    var n = JSON.stringify(r);
                    return {
                        method: "POST",
                        url: (void 0 !== e.params.domain ? e.params.domain : "https://prg.smartadserver.com") + "/prebid/v1",
                        data: n
                    }
                })
            },
            interpretResponse: function(e, r) {
                var t, a, i = [], n = e.body;
                try {
                    n && (a = {
                        requestId: (t = JSON.parse(r.data)).bidId,
                        cpm: n.cpm,
                        width: n.width,
                        height: n.height,
                        creativeId: n.creativeId,
                        dealId: n.dealId,
                        currency: n.currency,
                        netRevenue: n.isNetCpm,
                        ttl: n.ttl
                    },
                    t.mediaType === s.d ? (a.mediaType = s.d,
                    a.vastUrl = n.adUrl,
                    a.vastXml = n.ad,
                    a.content = n.ad) : (a.adUrl = n.adUrl,
                    a.ad = n.ad),
                    i.push(a))
                } catch (e) {
                    o.logError("Error while parsing smart server response", e)
                }
                return i
            },
            getUserSyncs: function(e, r) {
                var t = [];
                return e.iframeEnabled && 0 < r.length && t.push({
                    type: "iframe",
                    url: r[0].body.cSyncUrl
                }),
                t
            }
        };
        Object(a.registerBidder)(u)
    }
}, [778]);
atdpbjsChunk([10], {
    19: function(e, t, r) {
        "use strict";
        t.a = function(e) {
            var t = [];
            for (var r in e) {
                var i;
                e.hasOwnProperty(r) && ("pubProvidedId" === r ? t = t.concat(e.pubProvidedId) : (i = function(e, t) {
                    var r = u[t];
                    if (r && e) {
                        var i = {};
                        i.source = r.source;
                        var n = o.isFn(r.getValue) ? r.getValue(e) : e;
                        if (o.isStr(n)) {
                            var a, d, s = {
                                id: n,
                                atype: r.atype
                            };
                            return !o.isFn(r.getUidExt) || (a = r.getUidExt(e)) && (s.ext = a),
                            i.uids = [s],
                            !o.isFn(r.getEidExt) || (d = r.getEidExt(e)) && (i.ext = d),
                            i
                        }
                    }
                    return null
                }(e[r], r)) && t.push(i))
            }
            return t
        }
        ;
        var o = r(0)
          , u = {
            intentIqId: {
                source: "intentiq.com",
                atype: 1
            },
            pubcid: {
                source: "pubcid.org",
                atype: 1
            },
            tdid: {
                source: "adserver.org",
                atype: 1,
                getUidExt: function() {
                    return {
                        rtiPartner: "TDID"
                    }
                }
            },
            id5id: {
                getValue: function(e) {
                    return e.uid
                },
                source: "id5-sync.com",
                atype: 1,
                getEidExt: function(e) {
                    if (e.ext)
                        return e.ext
                }
            },
            parrableId: {
                source: "parrable.com",
                atype: 1,
                getValue: function(e) {
                    return e.eid ? e.eid : e.ccpaOptout ? "" : null
                },
                getUidExt: function(e) {
                    var t = o.pick(e, ["ibaOptout", "ccpaOptout"]);
                    if (Object.keys(t).length)
                        return t
                }
            },
            idl_env: {
                source: "liveramp.com",
                atype: 1
            },
            lipb: {
                getValue: function(e) {
                    return e.lipbid
                },
                source: "liveintent.com",
                atype: 1,
                getEidExt: function(e) {
                    if (Array.isArray(e.segments) && e.segments.length)
                        return {
                            segments: e.segments
                        }
                }
            },
            britepoolid: {
                source: "britepool.com",
                atype: 1
            },
            lotamePanoramaId: {
                source: "crwdcntrl.net",
                atype: 1
            },
            criteoId: {
                source: "criteo.com",
                atype: 1
            },
            merkleId: {
                source: "merkleinc.com",
                atype: 1
            },
            netId: {
                source: "netid.de",
                atype: 1
            },
            sharedid: {
                source: "sharedid.org",
                atype: 1,
                getValue: function(e) {
                    return e.id
                },
                getUidExt: function(e) {
                    return e && e.third ? {
                        third: e.third
                    } : void 0
                }
            },
            IDP: {
                source: "zeotap.com",
                atype: 1
            },
            haloId: {
                source: "audigent.com",
                atype: 1
            },
            quantcastId: {
                source: "quantcast.com",
                atype: 1
            },
            idx: {
                source: "idx.lat",
                atype: 1
            },
            connectid: {
                source: "verizonmedia.com",
                atype: 1
            },
            fabrickId: {
                source: "neustar.biz",
                atype: 1
            }
        }
    },
    802: function(e, t, r) {
        e.exports = r(803)
    },
    803: function(e, t, r) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        }),
        r.d(t, "spec", function() {
            return n
        });
        var l = r(0)
          , i = r(1)
          , a = r(2)
          , g = r(19)
          , n = {
            code: "sovrn",
            supportedMediaTypes: [a.b],
            gvlid: 13,
            isBidRequestValid: function(e) {
                return !(!e.params.tagid || isNaN(parseFloat(e.params.tagid)) || !isFinite(e.params.tagid))
            },
            buildRequests: function(e, t) {
                try {
                    var a, d, s, o, u = [], c = [];
                    l._each(e, function(e) {
                        !s && e.userId && (s = Object(g.a)(e.userId)).forEach(function(e) {
                            e.uids && e.uids[0] && ("criteo.com" === e.source && (o = e.uids[0].id),
                            c.push({
                                source: e.source,
                                uid: e.uids[0].id
                            }))
                        }),
                        e.schain && (d = d || e.schain),
                        a = a || l.getBidIdParameter("iv", e.params);
                        var t = e.mediaTypes && e.mediaTypes.banner && e.mediaTypes.banner.sizes || e.sizes
                          , r = (t = (t = l.isArray(t) && l.isArray(t[0]) ? t : [t]).filter(function(e) {
                            return l.isArray(e)
                        })).map(function(e) {
                            return {
                                w: parseInt(e[0], 10),
                                h: parseInt(e[1], 10)
                            }
                        })
                          , i = {
                            adunitcode: e.adUnitCode,
                            id: e.bidId,
                            banner: {
                                format: r,
                                w: 1,
                                h: 1
                            },
                            tagid: String(l.getBidIdParameter("tagid", e.params)),
                            bidfloor: l.getBidIdParameter("bidfloor", e.params)
                        }
                          , n = l.getBidIdParameter("segments", e.params);
                        n && (i.ext = {
                            deals: n.split(",").map(function(e) {
                                return e.trim()
                            })
                        }),
                        u.push(i)
                    });
                    var r = t.refererInfo.referer
                      , i = l.parseUrl(r).hostname
                      , n = {
                        id: l.getUniqueIdentifierStr(),
                        imp: u,
                        site: {
                            page: r,
                            domain: i
                        }
                    };
                    d && (n.source = {
                        ext: {
                            schain: d
                        }
                    }),
                    t.gdprConsent && (l.deepSetValue(n, "regs.ext.gdpr", +t.gdprConsent.gdprApplies),
                    l.deepSetValue(n, "user.ext.consent", t.gdprConsent.consentString)),
                    t.uspConsent && l.deepSetValue(n, "regs.ext.us_privacy", t.uspConsent),
                    s && (l.deepSetValue(n, "user.ext.eids", s),
                    l.deepSetValue(n, "user.ext.tpid", c),
                    o && l.deepSetValue(n, "user.ext.prebid_criteoid", o));
                    var p = "https://ap.lijit.com/rtb/bid?src=prebid_prebid_4.21.0";
                    return a && (p += "&iv=".concat(a)),
                    {
                        method: "POST",
                        url: p,
                        data: JSON.stringify(n),
                        options: {
                            contentType: "text/plain"
                        }
                    }
                } catch (e) {
                    l.logError("Could not build bidrequest, error deatils:", e)
                }
            },
            interpretResponse: function(e) {
                var t = e.body
                  , r = t.id
                  , i = t.seatbid;
                try {
                    var n = [];
                    return r && i && 0 < i.length && i[0].bid && 0 < i[0].bid.length && i[0].bid.map(function(e) {
                        n.push({
                            requestId: e.impid,
                            cpm: parseFloat(e.price),
                            width: parseInt(e.w),
                            height: parseInt(e.h),
                            creativeId: e.crid || e.id,
                            dealId: e.dealid || null,
                            currency: "USD",
                            netRevenue: !0,
                            mediaType: a.b,
                            ad: decodeURIComponent("".concat(e.adm, '<img src="').concat(e.nurl, '">')),
                            ttl: e.ext && e.ext.ttl || 90
                        })
                    }),
                    n
                } catch (e) {
                    l.logError("Could not intrepret bidresponse, error deatils:", e)
                }
            },
            getUserSyncs: function(e, t, r, i) {
                try {
                    var n, a, d = [];
                    return t && 0 !== t.length && (e.iframeEnabled && (n = t.filter(function(e) {
                        return l.deepAccess(e, "body.ext.iid")
                    }).map(function(e) {
                        return e.body.ext.iid
                    }),
                    a = [],
                    r && r.gdprApplies && "string" == typeof r.consentString && a.push(["gdpr_consent", r.consentString]),
                    i && a.push(["us_privacy", i]),
                    n[0] && (a.push(["informer", n[0]]),
                    d.push({
                        type: "iframe",
                        url: "https://ap.lijit.com/beacon?" + a.map(function(e) {
                            return e.join("=")
                        }).join("&")
                    }))),
                    e.pixelEnabled && t.filter(function(e) {
                        return l.deepAccess(e, "body.ext.sync.pixels")
                    }).reduce(function(e, t) {
                        return e.concat(t.body.ext.sync.pixels)
                    }, []).map(function(e) {
                        return e.url
                    }).forEach(function(e) {
                        return d.push({
                            type: "image",
                            url: e
                        })
                    })),
                    d
                } catch (e) {
                    return []
                }
            }
        };
        Object(i.registerBidder)(n)
    }
}, [802]);
atdpbjs.processQueue();
