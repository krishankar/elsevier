/*! elsevier-matrix - v1.20.3 - 2018-12-12 */
function getCookie(e) {
    var t = new RegExp(e + "=([^;]+)").exec(document.cookie);
    return null != t ? decodeURIComponent(t[1]) : null
}

function setCookie(e, t, n) {
    if ("number" == typeof(n = n || {}).expires) {
        var o = n.expires,
            r = n.expires = new Date;
        r.setDate(r.getDate() + o)
    }
    var a = [e, "=", encodeURIComponent(t)];
    for (var i in n.path = n.path || "/", n)
        if (n.hasOwnProperty(i)) {
            var c = n[i];
            ["expires", "domain", "path"].indexOf(i) > -1 && (a = a.concat(["; ", i, "=", c]))
        } document.cookie = a.join("")
}
var elcm;
(elcm = elcm || {}).ffConfig = {
    hosts: {
        local: "localhost",
        dev: "elsevier-internet-dev.squiz.co.uk",
        staging: "elsevier.staging.squiz.co.uk",
        prod: "elsevier.com",
        fauxio: "fauxio.dev.elsevier.io"
    },
    features: [{
        id: "global-integrated-header",
        name: "Global Integrated Header",
        description: "The existing global header is hidden and the brand new global header is mounted in its place",
        activeHosts: []
    }]
}, (elcm = elcm || {}).featureFlag = function() {
    let e;

    function t(e) {
        const t = {
                query: function(e) {
                    const t = e.substr(1).split("&"),
                        n = {};
                    for (let e = 0; e < t.length; e++) {
                        const o = t[e];
                        if ("ff-" === o.substring(0, 3)) {
                            const e = o.substr(3).split("=");
                            n[e[0]] = e[1]
                        }
                    }
                    return n
                }(window.location.search),
                environment: window.ffOverrides || {}
            },
            n = [t.query[e], function(e) {
                if (r()) {
                    const t = window.sessionStorage.getItem("ff-" + e);
                    return t || void 0
                }
                return
            }(e), t.environment[e]];
        let o;
        for (let t = 0; t < n.length; t++) {
            switch (n[t]) {
                case "on":
                case "true":
                    a(e, "on"), o = !0;
                    break;
                case "off":
                case "false":
                    a(e, "off"), o = !1;
                    break;
                case "remove":
                case "default":
                    i(e), n[1] = void 0;
                    continue;
                default:
                    continue
            }
            break
        }
        return o
    }

    function n(e) {
        let t = !1;
        const n = window.location.hostname;
        for (let o = 0; o < e.length; o++)
            if (n.indexOf(e[o]) > -1) {
                t = !0;
                break
            } return t
    }

    function o() {
        const t = [];
        for (let n = 0; n < e.features.length; n++) {
            const o = e.features[n];
            o.active && t.push(o.id)
        }
        return t
    }

    function r() {
        try {
            const e = window.sessionStorage,
                t = "__storage_test__";
            return e.setItem(t, t), e.removeItem(t), !0
        } catch (e) {
            return !1
        }
    }

    function a(e, t) {
        r() && window.sessionStorage.setItem("ff-" + e, t)
    }

    function i(e) {
        r() && window.sessionStorage.removeItem("ff-" + e)
    }
    return {
        init: function(r) {
            const a = (e = r || elcm.ffConfig || {
                features: []
            }).features;
            for (let e = 0; e < a.length; e++) {
                const o = a[e];
                switch (t(o.id)) {
                    case !0:
                        o.active = !0;
                        break;
                    case !1:
                        o.active = !1;
                        break;
                    default:
                        o.active = n(o.activeHosts)
                }
            }
            document.addEventListener("DOMContentLoaded", function() {
                const e = o(),
                    t = document.getElementsByTagName("html")[0];
                for (let n = 0; n < e.length; n++) t.className += " ff-" + e[n]
            })
        },
        activeFeatures: o,
        isActive: function(e) {
            return o().indexOf(e) > -1
        },
        list: function() {
            const t = e.features,
                n = {};
            for (let e = 0; e < t.length; e++) {
                const o = t[e];
                n[o.id] = o
            }
            return n
        }
    }
}(), elcm.ffConfig && elcm.featureFlag.init(), "undefined" != typeof exports && (exports.featureFlag = elcm.featureFlag);
const iframeSelector = 'iframe[src*="www.youtube.com"]';

function onYouTubeIframeAPIReady() {
    const e = document.querySelectorAll(iframeSelector);
    for (let t = 0; t < e.length; t++) {
        const n = e[t],
            o = "player" + (t + 1);
        n.id = o;
        const r = "enablejsapi=1",
            a = n.src.indexOf(r) > 0,
            i = n.src.split("?").length > 1;
        a || (n.src = n.src + (i ? "&" : "?") + r), new YT.Player(o, {
            events: {
                onStateChange: function(e) {
                    const t = e.target,
                        n = {
                            video: {
                                id: t.getVideoData().title,
                                length: Math.round(t.getDuration()),
                                position: Math.round(t.getCurrentTime())
                            }
                        };
                    switch (e.data) {
                        case 0:
                            t.open = !1, pageDataTracker.trackEvent("videoComplete", n);
                            break;
                        case 1:
                            t.open ? pageDataTracker.trackEvent("videoPlay", n) : (t.open = !0, pageDataTracker.trackEvent("videoStart", n));
                            break;
                        case 2:
                            pageDataTracker.trackEvent("videoStop", n)
                    }
                }
            }
        })
    }
}
document.addEventListener("DOMContentLoaded", function() {
    if (document.querySelectorAll(iframeSelector).length) {
        const e = document.createElement("script");
        e.src = "https://www.youtube.com/iframe_api";
        const t = document.getElementsByTagName("script")[0];
        t.parentNode.insertBefore(e, t)
    }
});