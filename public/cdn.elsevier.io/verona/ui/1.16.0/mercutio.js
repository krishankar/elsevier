/*! elsevier-io-mercutio - v1.16.0 - 2018-12-06 */
"use strict";
var $showAfterHeight, $win, $footerTop, $fixedLinks, $topPosition, $bottomPosition, MERCUTIO_MODULE_COUNTER = 0,
    MERCUTIO_MODULE_INTERRUPTCOMBUSTION = !1,
    TICK_COUNT = 200,
    $lastScrollPosition = 0,
    DELTA = 2;

function mercutionRem() {
    var e = document.getElementsByTagName("html")[0];
    return parseInt(window.getComputedStyle(e).fontSize)
}

function mercutioPxToRem(e) {
    return parseInt(e) / mercutionRem()
}
var MERCUTIO_COMBUSTION_X = 0,
    MERCUTIO_LOOPARRAY = function(o, e) {
        mercutioCustomExec(o[MERCUTIO_COMBUSTION_X], e, function(e) {
            ++MERCUTIO_COMBUSTION_X < o.length && MERCUTIO_LOOPARRAY(o, e)
        })
    };

function mercutioCustomExec(e, o, t) {
    mercutioLoad(e, o, function() {
        t(o)
    })
}

function mercutioLoad(e, o, t) {
    MERCUTIO_MODULE_INTERRUPTCOMBUSTION = !0;
    var i = $('script[src$="mercutio.js"]').attr("src").replace("mercutio.js", "") + e + ".js";
    $.ajax({
        url: i,
        dataType: "script",
        cache: !0,
        complete: function() {
            t(), MERCUTIO_MODULE_COUNTER === MERCUTIO_COMBUSTION_X && (o(), "undefined" != typeof NProgress && NProgress.done(), MERCUTIO_MODULE_INTERRUPTCOMBUSTION = !1)
        }
    })
}

function mercutioSanitiseSearch(e) {
    var o = decodeURIComponent(e) || "";
    return o = o.replace(/\+/g, " ")
}

function mercutioGetParams(e) {
    for (var o = window.location.search.substring(1).split("&"), t = 0; t < o.length; t++) {
        var i = o[t].split("=");
        if (i[0] === e) return mercutioSanitiseSearch(i[1])
    }
}

function mercutioDetectJquery() {
    return "undefined" != typeof jQuery
}

function mercutioCountElements(e) {
    var o = 0;
    return e.forEach(function() {
        o++
    }), o
}

function showBackToTop() {
    if ("object" == typeof jQuery(".fixed-side-links")) {
        if (void 0 === $fixedLinks && ($showAfterHeight = .8 * jQuery(window).height(), $win = jQuery(window), ($fixedLinks = jQuery(".fixed-side-links")).addClass("scroll-down")), $topPosition = $win.scrollTop(), $bottomPosition = $topPosition + $win.height(), Math.abs($topPosition - $lastScrollPosition) <= DELTA) return;
        $topPosition < $showAfterHeight ? ($fixedLinks.removeClass("scroll-up"), $fixedLinks.addClass("scroll-down")) : ($fixedLinks.addClass("scroll-up"), $fixedLinks.removeClass("scroll-down")), $fixedLinks.addClass("side-fixed"), $lastScrollPosition = $topPosition
    }
}

function mercutioAccordinTransform() {
    jQuery("#maincontent .accordion").on("toggled", function(e, o) {
        o.closest("ul").children("li").each(function(e) {
            var o = jQuery(this);
            o.hasClass("active") ? o.find(".open-icon").addClass("open") : o.find(".open-icon").removeClass("open")
        })
    }), jQuery('#maincontent .accordion .accordion-navigation a[role="tab"] ').hover(function() {
        var e = jQuery(this).parent();
        !0 !== e.hasClass("active") && e.next().addClass("hover-before")
    }, function() {
        jQuery(this).parent().next().removeClass("hover-before")
    }), jQuery(".accordion-navigation").each(function() {
        var e = jQuery(this),
            o = e.find(".content ul");
        0 < o.length && "" === o.text().trim() && e.addClass("empty")
    })
}

function animateInPageNavigations() {
    $('a[href*="#"]:not([href="#"]:not([role="tab"]))').click(function() {
        if ("tab" !== $(this).attr("role") && location.pathname.replace(/^\//, "") === this.pathname.replace(/^\//, "") && location.hostname === this.hostname) {
            var e = $(this.hash),
                o = "top" === (e = e.length ? e : $("[name=" + this.hash.slice(1) + "]")).attr("id") ? 0 : $("header").outerHeight();
            if (e.length) return $("html, body").animate({
                scrollTop: e.offset().top - o
            }, 1e3), !1
        }
    })
}

function openPDFinNewTab() {
    $('a[target!="_blank"][href$=".pdf"]').attr("target", "_blank")
}
window.onload = function() {
    if ("object" == typeof jQuery(".accordion-navigation .open-icon") && mercutioAccordinTransform(), "object" == typeof jQuery("fixed-side-links")) {
        var e = jQuery("#maincontent");
        parseFloat(e.css("min-height").slice(0, -2)) + 50 <= e.innerHeight() ? (showBackToTop(), jQuery(window).scroll(function(e) {
            setTimeout(function() {
                showBackToTop()
            }, TICK_COUNT)
        })) : jQuery(".fixed-side-links").addClass("hide")
    }
    if (!1 === mercutioDetectJquery()) throw new Error("Mercutio message: ERROR -> no jQuery, check mercutio Grunt, all other scripts will be killed");
    animateInPageNavigations(), openPDFinNewTab()
}, jQuery.fn.mercutio = function(e, o) {
    MERCUTIO_MODULE_COUNTER = mercutioCountElements(e), MERCUTIO_LOOPARRAY(e, o)
};