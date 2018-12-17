/*! elsevier-matrix - v1.20.3 - 2018-12-12 */
function truncMobText() {
    $(window).width() <= "480" ? ($(".truncated-title").removeClass("hide"), $(".normal-title").addClass("hide")) : ($(".truncated-title").addClass("hide"), $(".normal-title").removeClass("hide"))
}

function substringMatcher(e) {
    return function(t, o) {
        var n, i;
        n = [], i = new RegExp("^" + t, "i"), $.each(e, function(e, t) {
            i.test(t) && n.push({
                value: t
            })
        }), o(n)
    }
}

function innovation_popups() {
    var e = $(".ci-tooltip"),
        t = $(".ci-tooltip-background"),
        o = $(".ci-tooltip-header"),
        n = $(".ci-tooltip-trigger"),
        i = $(".div-citooltip-close"),
        a = $(".ci-tooltip-up-arrow");
    n.each(function() {
        var n = $(this);
        n.find(".ci-tooltip.arrow_r").on("click", function(e) {
            e.stopPropagation()
        }), n.find(".div-tooltip-clickable").on("click", function(e) {
            e.stopImmediatePropagation()
        }), i.add(t).unbind().on("click", function(o) {
            o.preventDefault(), e.hide(), t.hide()
        }), n.click(function(i) {
            i.stopPropagation(), i.preventDefault(), a.remove(), t.show(), n.find(e).show();
            var r = "" !== n.attr("data-tooltip-id") ? n.attr("data-tooltip-id") : void 0,
                s = n.find(".ci-tooltip-inner");
            if (s.length ? s.html("") : o.after("<span class='ci-tooltip-inner'></span>"), n.find(".div-tooltip-clickable").click(function() {
                    window.location.href = $(this).data("url")
                }), n.find(".ci-tooltip-inner").html("<span class='loader-image'><img src='/s/resources/elsevier-content-innovation/ajax-loader.gif'/></span>"), void 0 !== r) {
                $.ajax({
                    type: "POST",
                    url: "/_resources/content-innovation/ci-lightbox-content?id=" + r,
                    jsonpCallback: "retdata",
                    crossDomain: !0,
                    dataType: "jsonp",
                    success: function(e) {
                        e = e.arr[0].content, n.find(".ci-tooltip-inner").html(e), n.find(".loader-image").remove(), n.find(".div-tooltip-clickable").each(function() {
                            var e = $(this);
                            "" === e.data("url") || "#" === e.data("url") ? e.hide() : e.show()
                        })
                    }
                })
            }
        })
    })
}

function surveyInit(e) {
    var t = function() {
            setCookie("survey", "No", {
                expires: 180,
                domain: "elsevier.com"
            })
        },
        o = !!location.search.match(/survey\=on/),
        n = (100 * Math.random()).toFixed(2);
    ("Yes" !== e.inactive && n < e.target && "No" !== getCookie(e.cookieName) || o) && $("#surveyPopup").fadeIn(), $(".survey-accept").attr("href", e.url), $(".survey-decline").on("click", function() {
        t(), $("#surveyPopup").fadeOut()
    }), $(".survey-accept").on("click", function() {
        $("#surveyPopup").fadeOut(), t()
    }), $(".lb-close").on("click", function() {
        t(), $("#surveyPopup").fadeOut()
    })
}
"function" != typeof NodeList.prototype.forEach && "function" == typeof Array.prototype.forEach && (NodeList.prototype.forEach = Array.prototype.forEach), String.prototype.includes || Object.defineProperty(String.prototype, "includes", {
        value: function(e, t) {
            "use strict";
            return "number" != typeof t && (t = 0), !(t + e.length > this.length) && -1 !== this.indexOf(e, t)
        }
    }), Array.prototype.includes || Object.defineProperty(Array.prototype, "includes", {
        enumerable: !1,
        value: function(e) {
            return this.filter(function(t) {
                return t === e
            }).length > 0
        }
    }), Array.prototype.findIndex || Object.defineProperty(Array.prototype, "findIndex", {
        value: function(e) {
            if (null == this) throw new TypeError('"this" is null or not defined');
            var t = Object(this),
                o = t.length >>> 0;
            if ("function" != typeof e) throw new TypeError("predicate must be a function");
            for (var n = arguments[1], i = 0; i < o;) {
                var a = t[i];
                if (e.call(n, a, i, t)) return i;
                i++
            }
            return -1
        }
    }), Array.from || (Array.from = function() {
        var e = Object.prototype.toString,
            t = function(t) {
                return "function" == typeof t || "[object Function]" === e.call(t)
            },
            o = Math.pow(2, 53) - 1,
            n = function(e) {
                var t = function(e) {
                    var t = Number(e);
                    return isNaN(t) ? 0 : 0 !== t && isFinite(t) ? (t > 0 ? 1 : -1) * Math.floor(Math.abs(t)) : t
                }(e);
                return Math.min(Math.max(t, 0), o)
            };
        return function(e) {
            var o = Object(e);
            if (null == e) throw new TypeError("Array.from requires an array-like object - not null or undefined");
            var i, a = arguments.length > 1 ? arguments[1] : void 0;
            if (void 0 !== a) {
                if (!t(a)) throw new TypeError("Array.from: when provided, the second argument must be a function");
                arguments.length > 2 && (i = arguments[2])
            }
            for (var r, s = n(o.length), l = t(this) ? Object(new this(s)) : new Array(s), c = 0; c < s;) r = o[c], l[c] = a ? void 0 === i ? a(r, c) : a.call(i, r, c) : r, c += 1;
            return l.length = s, l
        }
    }()), $(document).ready(function() {
        var e = $(".pagination .previous-link a"),
            t = $(".pagination .next-link a"),
            o = $(".elsevier-matrix-form");
        e.length && "" !== e.attr("href") && $("head").append('<link rel="prev" href=' + e.attr("href") + ">"), t.length && "" !== t.attr("href") && $("head").append('<link rel="next" href=' + t.attr("href") + ">"), $("#search_page_142830").addClass("form-full-width").css("width", "100%"), o.length && o.wrap('<div class="row"><div class="large-12 columns"></div></div>'), 0 === $(".news-knovel-template .footer-news-wide").text().length && $(".news-knovel-template .footer-news-wide img").hide(), window.location.href.match(/queries_query_query/) && $(".news-knovel-template .lcont").removeClass("hide"), window.location.href.match(/\/industry-insights(\/|$|\?)/) ? ($(".news-knovel-template input[name='rootid']").remove(), $(".news-knovel-template select[name='rootid']").removeClass("hide")) : $(".news-knovel-template select[name='rootid']").remove();
        var n = window.location.href.match(/rootid=([0-9]+)/);
        n && $(".news-knovel-template select[name='rootid']").val(n[1]), $(".news-knovel-template select[name*='pubdate']").change(function() {
            $(".news-knovel-template input#filled").val(""), $(".news-knovel-template select[name*='pubdate']").each(function() {
                "--" !== $(this).val() && $(".news-knovel-template input#filled").val("true")
            })
        });
        for (var i = "<option value='--'></option>", a = (new Date).getFullYear(), r = a; r >= a - 10; r--) i += "<option value='" + r + "'>" + r + "</option>";
        $(".news-knovel-template .news-wide-search-year").html(i), $.extend({
            getUrlVars: function() {
                for (var e, t = [], o = window.location.href.slice(window.location.href.indexOf("?") + 1).split("&"), n = 0; n < o.length; n++) e = o[n].split("="), t.push(e[0]), t[e[0]] = e[1];
                return t
            },
            getUrlVar: function(e) {
                return $.getUrlVars()[e]
            }
        });
        var s = {
            vars: {
                optionalValue: "1645",
                fbResourceUrl: "/administration/oa-dynamic-data/open-access-journals",
                highlightClass: "highlight",
                t: null,
                arrowOffsetLeft: 88,
                arrowOffsetRight: 240,
                popupOffset: 145
            },
            sel: {
                oaNormal: ".open-access-normal",
                oaSupport: ".open-access-optional",
                highlightEl: ".highlight",
                oaPopup: ".oa-popup",
                oaPopupContent: ".oa-popup-content",
                openAccessWrapper: ".open-access",
                arrowBox: ".arrow-box"
            },
            init: function() {
                (jQuery(s.sel.oaNormal).length > 0 || jQuery(s.sel.oaSupport).length > 0) && s.setJournals(), jQuery(s.sel.oaPopup) && s.makePopups()
            },
            setJournals: function() {
                var e = this,
                    t = 0;
                jQuery.ajax({
                    dataType: "json",
                    url: e.vars.fbResourceUrl,
                    success: function(o) {
                        t = o.contents.length, jQuery(e.sel.oaNormal).prepend(t)
                    }
                })
            },
            makePopups: function() {
                var e = this,
                    t = 0,
                    o = null,
                    n = null;
                jQuery(e.sel.oaPopup).each(function() {
                    if (o = jQuery(this).next(e.sel.oaPopupContent), void 0 !== (n = o.html())) {
                        jQuery(this).data("popupid", "oa_c_" + t);
                        var i = "arrow-box",
                            a = jQuery(this).position(),
                            r = parseInt(jQuery(this).width(), 10) / 2;
                        a.top = parseInt(a.top, 10) + 30, a.left = parseInt(a.left, 10) + r, a.left = a.left - s.vars.arrowOffsetLeft, jQuery(this).hasClass("oa-popup-right") && (i += " arrow-box-right", a.left = a.left + s.vars.arrowOffsetLeft - s.vars.arrowOffsetRight);
                        var l = "<div class='" + i + "' style='display:none; left: " + a.left + "px ; top: " + a.top + "px ;' id='oa_c_" + t + "'>";
                        l += n, l += "</div>", o.remove(), jQuery(this).after(l), s.attachPopupHandlers(jQuery(this)), s.popupHover(jQuery("#oa_c_" + t)), t++
                    } else jQuery(this).removeClass("oa-popup")
                })
            },
            attachPopupHandlers: function(e) {
                e.hover(function() {
                    jQuery(this).data("open", !0);
                    var e = jQuery(this).data("popupid");
                    jQuery("#" + e).fadeIn()
                }, function() {
                    var e = jQuery(this).data("popupid");
                    jQuery("#" + e).data("visible", !0), s.vars.t = setTimeout(function() {
                        jQuery("#" + e).fadeOut(), jQuery("#" + e).data("visbile", !1)
                    }, 700)
                })
            },
            popupHover: function(e) {
                e.hover(function() {
                    clearTimeout(s.vars.t)
                }, function() {
                    jQuery(this).fadeOut()
                })
            }
        };
        s.init();
        var l = l || {};

        function c() {
            if ($("#all-types:not(:checked)").length) {
                for (var e = $(".gscopes:not(:checked)"), t = "", o = 0; o < e.length; o++) t += (0 !== o ? "," : "") + $(e[o]).val() + "!";
                for (o = 0; o < e.length - 1; o++) t += "+";
                $("#gscope").val(t)
            } else $("#gscope").val("");
            $("#gscope").val() ? $("#gscope").attr("name", "gscopes1") : $("#gscope").attr("name", ""), 0 === $(".gscopes:checked").length && $("#gscope").val("")
        }

        function u() {
            if ($("#all-types:not(:checked)").length) {
                for (var e = $(".meta_T:not(:checked)"), t = "", o = 0; o < e.length; o++) t += (0 !== o ? " " : "") + $(e[o]).val();
                $("#meta_T_not").val(t)
            } else $("#meta_T_not").val("");
            $("#meta_T_not").val() ? $("#meta_T_not").attr("name", "meta_T_not") : $("#meta_T_not").attr("name", ""), 0 === $(".meta_T:checked").length && $("#meta_T_not").val("")
        }
        $("#books_authors2").length && $("#books_authors2").typeahead({
            hint: !0,
            highlight: !0,
            minLength: 1
        }, {
            name: "authors",
            displayKey: "value",
            source: substringMatcher(l.suggestions)
        }), $("#books_authors").length && $("#books_authors").typeahead({
            hint: !0,
            highlight: !0,
            minLength: 1
        }, {
            name: "authors",
            displayKey: "value",
            source: substringMatcher(l.suggestions)
        }), $(".book-filters select").change(function() {
            window.location.href = $(this).val()
        }), $(".exhibition-filters select").change(function() {
            var e = window.location.href.split("?")[0] + "?";
            $(".exhibition-filters select").each(function() {
                0 !== $(this).find("option:selected").index() && (e += "&" + $(this).attr("name") + "=" + $(this).val())
            }), window.location.href = e
        }), $("#books_authors").keyup(function(e) {
            13 === e.keyCode && (window.location.href = window.location.href.split("?")[0] + "?query=" + $(this).val())
        }), $('.agreements-page [desc="table"]').hide().eq(0).show(), $("#toolkit-dropdown-one").on("change", function() {
            $('.agreements-page [desc="table"]').hide();
            var e = $("option:selected", this).val();
            $(".agreements-page #" + e).show()
        }), $("#all-types").change(function() {
            $(this).prop("checked") && ($(".gscopes, .meta_T").prop("checked", !1), $("#gscope").val(""), $("#meta_T_not").val(""))
        }), $(".gscopes, .meta_T").change(function() {
            $(".gscopes:checked, .meta_T:checked").length && $("#all-types").prop("checked", !1)
        }), c(), $(".gscopes").change(function() {
            c()
        }), u(), $(".meta_T").change(function() {
            u()
        }), $(".searchform").submit(function() {
            "JN" === $("#filter").val() || "BK" === $("#filter").val() ? $("#filter").after("<input type='hidden' name='meta_T' value='" + $("#filter").val() + "' />") : "" !== $("#filter").val() && $("#filter").after("<input type='hidden' name='gscope1' value='" + $("#filter").val() + "' />")
        })
    }),
    function(e) {
        e.fn.ellipsis = function() {
            return this.each(function() {
                var t = e(this);
                if ("hidden" === t.css("overflow")) {
                    var o = t.html(),
                        n = t.hasClass("multiline"),
                        i = e(this.cloneNode(!0)).hide().css("position", "absolute").css("overflow", "visible").width(n ? t.width() : "auto").height(n ? "auto" : t.height());
                    t.after(i);
                    for (var a = n ? function() {
                            return i.height() > t.height()
                        } : function() {
                            return i.width() > t.width()
                        }; o.length > 0 && a();) o = o.substr(0, o.length - 1), i.html(o + "...");
                    t.html(i.html()), i.remove()
                }
            })
        }, e(".add-expander").each(function() {
            e(this).addClass("long hide").after(e(".add-expander").clone().removeClass("long hide").addClass("short multiline ellipsis expander-contracted "))
        }), e(".journal-title").length > 0 && e(window).width() <= "480" && truncMobText(), e(window).on("resize", function() {
            truncMobText()
        });
        var t = e("#secondary-nav");
        t.length && t.find("li").each(function() {
            var t = e(this),
                o = t.find("a").first();
            o.attr("data-id") === o.attr("data-globals-id") && t.addClass("menu-item-active")
        }), e(".show-more-btn").on("click", function(t) {
            t.preventDefault(), e(this).siblings(".full-description-text").toggleClass("hide"), e(this).parent().find(".show-more-btn").toggleClass("hide")
        }), innovation_popups(), "undefined" != typeof surveyOptions && surveyInit(surveyOptions)
    }(jQuery), $(window).load(function() {
        $(".ellipsis").ellipsis(), $(".view_full_description").click(function(e) {
            e.preventDefault(), $(".book-description.long:visible").length > 0 ? ($(".book-description.long").hide(), $(".book-description.short").show(), $(this).text("View full description")) : ($(".book-description.long").show(), $(".book-description.short").hide(), $(this).text("Hide full description"))
        }), $(".add-expander-book").each(function() {
            $(this).addClass("long hide").after($(".add-expander-book").clone().removeClass("long hide").addClass("short multiline ellipsis expander-contracted big"))
        }), $(".view_full_content").click(function(e) {
            e.preventDefault(), $(".book-content.long:visible").length > 0 ? ($(".book-content.long").hide(), $(".book-content.short").show(), $(this).text("View full contents")) : ($(".book-content.long").show(), $(".book-content.short").hide(), $(this).text("Hide full contents"))
        })
    });
var article, articleTop, articleBottom, articleInnerWidth, articleInnerHeight, articleSocialBar, articleSocialBarHeight, articleSocialBarTop, differencePixel, articleImageHeight, imageDiffPixel, articleImage, articleImageTop, sNav, sNavTop, sNavPrev, sNavPrevBottom, TICK_COUNT = 200,
    lastScrollPosition = 0,
    win = jQuery(window);

function initStickyNav() {
    (sNav = jQuery(".secondary-nav.sticky")).length && (sNavPrev = sNav.prev(), sNavPrevBottom = sNavPrev.offset().top + sNavPrev.outerHeight(), sNav.css("z-index", "1000"), sNav.css("background", "#FFFFFF"), jQuery(".secondary-nav.sticky li").each(function() {
        jQuery(this).on("click", function() {
            $(this).siblings().removeClass("active"), $(this).addClass("active")
        })
    }))
}

function scrollStickyNav() {
    if (sNav.length) {
        var e = win.scrollTop();
        parseInt(e) >= parseInt(sNavPrevBottom) ? (sNav.css("position", "fixed"), sNav.css("top", 0)) : (sNav.css("position", "relative"), sNav.css("top", "auto"))
    }
}

function positionArticleLinks() {
    article = jQuery(".article-content"), articleSocialBar = jQuery(".article-info.sticky"), article.length && articleSocialBar.length && (articleTop = article.offset().top, articleBottom = articleTop + article.outerHeight(), articleInnerWidth = article.innerWidth(), articleInnerHeight = article.innerHeight(), articleSocialBarHeight = articleSocialBar.outerHeight(), articleSocialBarTop = articleSocialBar.offset().top, articleImage = jQuery(".article-image-main"), articleImageHeight = jQuery(".article-image-main").outerHeight(), articleImageTop = articleImage.offset().top, imageDiffPixel = articleImageHeight + articleImageTop + articleSocialBarHeight, differencePixel = -1 * (articleSocialBarTop - articleBottom + articleSocialBarHeight), articleSocialBar.css("width", articleInnerWidth + "px"), articleSocialBar.css("z-index", "9999"))
}

function scrollArticleLinks() {
    if (article.length && articleSocialBar.length) {
        var e = win.scrollTop() + win.height(),
            t = articleBottom - e;
        parseInt(e) < parseInt(imageDiffPixel) ? (articleSocialBar.css("position", "absolute"), articleSocialBar.css("top", articleImageHeight)) : parseInt(t) <= differencePixel ? (articleSocialBar.css("position", "relative"), articleSocialBar.css("bottom", 0), articleSocialBar.css("top", "auto")) : (articleSocialBar.css("position", "fixed"), articleSocialBar.css("bottom", 0), articleSocialBar.css("top", "auto"))
    }
}

function globalHashFix() {
    try {
        var e = window.location.hash;
        if (e.length > 1) {
            var t = $(e);
            if (t.length > 0) {
                var o = $("header").outerHeight() || 0,
                    n = $(".sn-nav__contain").outerHeight() || 0;
                $("html, body").scrollTop(t.offset().top - (o + n))
            }
        }
    } catch (e) {}
}

function getPath(e) {
    e = e || location.pathname;
    let t = new RegExp("[#|?].*"),
        o = new RegExp("^/|/$", "g"),
        n = new RegExp("/", "g");
    return (e = (e = (e = e.replace(t, "")).replace(o, "")).replace(n, ":")) || "Home"
}

function updateOLCounter() {
    $("ol[start]").each(function() {
        var e = parseInt($(this).attr("start")) - 1;
        $(this).css("counter-increment", "section " + e)
    })
}
$(window).load(function() {
    globalHashFix()
}), jQuery(document).ready(function() {
    ! function(e) {
        "use strict";
        e('.main-navigation ul li a[target="_blank"]').click(function(e) {
            return e.preventDefault(), e.stopImmediatePropagation(), window.open(this.href, "_blank"), !1
        }), e.fn.showHideContent = function(t) {
            e(".matrix-show-hide-content").hide();
            var o = jQuery(this);
            o.click(function(n) {
                n.preventDefault();
                var i = e(this);
                i.toggleClass("open").closest(".matrix-show-hide-trigger").next(".matrix-show-hide-content").slideToggle(), i.hasClass("open") && i.children(".default-text").length ? i.children(".default-text").text("Read less") : !i.hasClass("open") && i.children(".default-text").length && i.children(".default-text").text("Read more"), t && (o.hasClass("arrow-up") ? (o.removeClass("arrow-up"), o.addClass("arrow-down"), o.text("Read more")) : jQuery(this).hasClass("arrow-down") && (o.removeClass("arrow-down"), o.addClass("arrow-up"), o.text("Read less")))
            })
        }, e.fn.collapseToggle = function() {
            e(this).each(function() {
                var t, o = e(this),
                    n = o.closest(".collapse-group"),
                    i = n.find(".collapse-content");
                n.addClass("collapsed"), o.click(function(o) {
                    o.preventDefault();
                    var a = e(this),
                        r = e(this).text();
                    clearTimeout(t), n.hasClass("collapsed") ? (a.text(r.replace(/(.*)more(.*)/i, "$1less$2")), t = setTimeout(function() {
                        i.css("max-height", i.height())
                    }, 400)) : (a.text(r.replace(/(.*)less(.*)/i, "$1more$2")), i.css("max-height", "")), n.toggleClass("collapsed")
                })
            })
        }, e.fn.centerForms = function() {
            e(this).length && e(".elsevier-matrix-form").wrap('<div class="row"><div class="large-12 columns"></div></div>')
        }, e(".toggle-hidden-content").showHideContent(!0), e(".collapse-toggle").collapseToggle(), e(".elsevier-matrix-form").centerForms(), positionArticleLinks(), scrollArticleLinks(), initStickyNav(), scrollStickyNav(), jQuery(window).scroll(function() {
            setTimeout(function() {
                scrollArticleLinks(), scrollStickyNav()
            }, TICK_COUNT)
        }), e("ol[start]").length && updateOLCounter()
    }(jQuery)
}), $(function() {
    var e = $("main > div:first"),
        t = $("header"),
        o = $(".accessibility-link");
    o.length && o.keypress(function(o) {
        13 === o.which && ($(window).scrollTop(e.offset().top - t.outerHeight()), e.attr("tabindex", 0), e.focus())
    })
}), $(document).ready(function() {
    ! function(e, t) {
        "use strict";
        jQuery.fn[t] = function(e) {
            return e ? this.bind("resize", (o = e, function() {
                var e = this,
                    t = arguments;
                a ? clearTimeout(a) : i && o.apply(e, t), a = setTimeout(function() {
                    i || o.apply(e, t), a = null
                }, n || 100)
            })) : this.trigger(t);
            var o, n, i, a
        }
    }(jQuery, "smartresize")
});
var scrollTimeout, $body = $body || $("body"),
    $header = $("header"),
    $cartContainer = $(".shopping-cart-container"),
    $primaryMenu = $(".primary-menu"),
    $closePrimaryMenu = $(".js-close-primary-menu"),
    $closePrimaryMenuModal = $(".js-header-menu-toggle-open, .js-close-primary-menu, .modal"),
    $menuIcon = $(".js-header-menu-toggle-open .main-ui-icon"),
    $menuToggleOpen = $(".js-header-menu-toggle-open"),
    $menuItemLink = $(".menu-item-link"),
    $navigation = $(".main-navigation"),
    $spineSectionPrimary = $(".primary-menu .spine-section"),
    scrolling = !1,
    mouseClick = !1;

function activateStickyHeader() {
    function e() {
        $menuToggleOpen.click(function(e) {
            e.preventDefault(), e.stopPropagation(), o(), $cartContainer.removeClass("show-menu"), $(".spine-level-1").css("position", "static"), $primaryMenu.addClass("open"), $menuItemLink.attr("tabIndex", "6"),
                function() {
                    if (!$body.hasClass("menu-open")) {
                        var e = i();
                        $body.addClass("menu-open"), $body.css({
                            top: 0 - e
                        })
                    }
                }(), $spineSectionPrimary.eq(1).scrollTop(0), $closePrimaryMenu.focus(), n() && $closePrimaryMenu.blur(), $menuIcon.hasClass("open") && t(!0), $body.hasClass("vertical-menu") && $menuIcon.toggleClass("open")
        }), $closePrimaryMenu.click(function(e) {
            e.stopPropagation(), t(!0)
        }), $closePrimaryMenuModal.mousedown(function() {
            mouseClick = !0
        })
    }

    function t(e) {
        ! function() {
            if ($body.hasClass("menu-open")) {
                var e = i();
                $body.attr("style", "").removeClass("menu-open"), $(window).scrollTop(e)
            }
        }(), $menuItemLink.attr("tabIndex", "-1"), $primaryMenu.hasClass("open") && ($primaryMenu.removeClass("open"), e && ($menuToggleOpen.focus(), n() && $menuToggleOpen.blur()))
    }

    function o() {
        t(!0), $(".gh-is-expanded").removeClass("gh-is-expanded"), window.location.pathname.indexOf("search-results") < 0 && $(".bigsearch-area").slideUp("fast")
    }

    function n() {
        var e = mouseClick;
        return mouseClick = !1, e
    }

    function i() {
        var e = Math.abs(($body.css("top") || "0").replace("px", ""));
        return $body.scrollTop() || $(window).scrollTop() || e
    }

    function a(e, t) {
        const o = document.querySelectorAll(e);
        Array.from(o).forEach(function(e) {
            e.addEventListener("click", function() {
                window.location = elcm.ECOMM_URL + t
            })
        })
    }
    $(function() {
        e(), $(".modal").on("click", function(e) {
            e.stopPropagation(), o(), $body.hasClass("vertical-menu") && $menuIcon.removeClass("open")
        }), $('header[role="banner"]').click(function(e) {
            e.target === this && ($body.hasClass("vertical-menu") || o())
        }), $(".main-ui-item-cart").click(function() {
            o(), $menuIcon.removeClass("open")
        }), Foundation.utils.is_small_only() && $body.removeClass("vertical-menu"), $(document).keyup(function(e) {
            switch (e.keyCode) {
                case 27:
                    mouseClick = !1, o(), $menuIcon.removeClass("open");
                    break;
                case 9:
                    mouseClick = !1, $primaryMenu.hasClass("open") && !$(document.activeElement).is(".spine-level-1 a, .js-close-primary-menu") && (t(!1), $menuIcon.removeClass("open"))
            }
        }), a(".signin-btn", "auth"), a(".view-account-btn", "account"), a(".sign-out-btn", "logout"), a("#aa-globalheader-shopping-chart", "cart"), $(".gh-ppvr-trigger").on("click", function() {
            ! function(e) {
                let t = $(e);
                if (o(), t.hasClass("gh-is-expanded")) return void t.removeClass("gh-is-expanded");
                $(".gh-is-expanded").removeClass("gh-is-expanded"), t.addClass("gh-is-expanded")
            }($(this).parents(".gh-ppvr"))
        }), $(".gh-hamburger button").on("click", function() {
            const e = $(this),
                t = "true" === e.attr("aria-expanded");
            e.attr("aria-expanded", !t), $("#gh-drawer").toggleClass("gh-is-expanded"), $("#gh-overlay").toggleClass("u-display-none")
        }), $("#gh-overlay").on("click", function() {
            const e = $(this);
            e.addClass("u-display-none"), $("#gh-drawer").removeClass("gh-is-expanded"), e.attr("aria-expanded", !1)
        }), $(".bigsearch-toggle").on("click", function() {
            $(".gh-is-expanded").removeClass("gh-is-expanded")
        }), $body.on("click", function(e) {
            if ($("#gh-drawer").hasClass("gh-is-expanded")) return;
            const t = $(e.target);
            t.parents(".bigsearch-area").length || t.hasClass("bigsearch-area") || t.parents().hasClass("gh-ppvr") || t.parents().hasClass("button-link") || t.parents("#js-wrapper-search-link").length || ($(".gh-is-expanded").removeClass("gh-is-expanded"), o(), $body.hasClass("vertical-menu") && $menuIcon.removeClass("open"))
        })
    }), $(function() {
        $primaryMenu.show()
    })
}

function getLocaleFromUrl() {
    const e = window.location.pathname.split("/")[1],
        t = /^([a-z][a-z]-[a-z][a-z])$/.exec(e);
    return t ? t[0] : "global"
}
document.addEventListener("DOMContentLoaded", function() {
    if (sessionStorage)
        if (sessionStorage.getItem("notFirstPageLoad")) {
            let e = document.querySelector("#promotion-script-tag");
            e && (e.src = e.getAttribute("data-src"))
        } else sessionStorage.setItem("notFirstPageLoad", !0);
    elcm && elcm.featureFlag && elcm.featureFlag.isActive && elcm.featureFlag.isActive("global-integrated-header") && "global" === getLocaleFromUrl() || document.querySelector(".global-header.header-container") || activateStickyHeader()
});
var elcm = elcm || {};
elcm.solutions = function(e) {
    var t = e(".btn-toggle"),
        o = e(".filter-wrapper"),
        n = e(".filter-wrapper__filter-input"),
        i = e(".filter-nav"),
        a = e(".filter-nav a"),
        r = e(".item-wrapper"),
        s = e(".item-wrapper .tile"),
        l = e(".no-results"),
        c = e(".filter-wrapper .icon-standalone-delete"),
        u = {
            classes: {
                tile: ".tile",
                flipContainer: ".flip-container",
                notFound: "filter-nav--not-found",
                filterWrapperActive: "filter-wrapper--active",
                flipActive: "flip-container--hover"
            }
        };

    function p() {
        r.show(), s.show(), l.hide(), a.removeClass(u.classes.notFound)
    }

    function h(t) {
        t.each(function() {
            var t = e(this);
            i.find('a:contains("' + t.find("a").text()[0].toUpperCase() + '")').removeClass(u.classes.notFound)
        }), t.length > 0 ? l.hide() : l.show(), r.show(), r.each(function() {
            var t = e(this),
                o = t.find(u.classes.tile).is(":visible");
            o ? t.show() : t.hide()
        })
    }

    function d() {
        e(this).closest(u.classes.flipContainer).toggleClass(u.classes.flipActive)
    }

    function f(e) {
        var t = e.target.value.toLowerCase();
        "blur" === e.type && t.length < 1 && o.removeClass(u.classes.filterWrapperActive), "focus" === e.type && o.addClass(u.classes.filterWrapperActive)
    }

    function g() {
        n.val("").blur(), p()
    }

    function m(t) {
        var o = t.target.value.toLowerCase();
        o.length > 0 ? (a.addClass(u.classes.notFound), h(s.filter(function() {
            var t = e(this);
            if (t.text().toLowerCase().indexOf(o) > -1) return t.show(), t;
            t.hide()
        }))) : p()
    }
    return {
        init: function() {
            n.on("focus blur", f), n.on("keyup change", m), t.on("click", d), c.on("click", g)
        }
    }
}(jQuery || {}), $(function() {
    document.getElementsByClassName("solutions-page").length > 0 && elcm.solutions.init()
});
! function(e) {
    function __webpack_require__(t) {
        if (r[t]) return r[t].exports;
        var n = r[t] = {
            i: t,
            l: !1,
            exports: {}
        };
        return e[t].call(n.exports, n, n.exports, __webpack_require__), n.l = !0, n.exports
    }
    var t = window.webpackJsonp;
    window.webpackJsonp = function(r, o, a) {
        for (var i, s, u, c = 0, l = []; c < r.length; c++) s = r[c], n[s] && l.push(n[s][0]), n[s] = 0;
        for (i in o) Object.prototype.hasOwnProperty.call(o, i) && (e[i] = o[i]);
        for (t && t(r, o, a); l.length;) l.shift()();
        if (a)
            for (c = 0; c < a.length; c++) u = __webpack_require__(__webpack_require__.s = a[c]);
        return u
    };
    var r = {},
        n = {
            2: 0
        };
    __webpack_require__.e = function(e) {
        function onScriptComplete() {
            a.onerror = a.onload = null, clearTimeout(i);
            var t = n[e];
            0 !== t && (t && t[1](new Error("Loading chunk " + e + " failed.")), n[e] = void 0)
        }
        var t = n[e];
        if (0 === t) return new Promise(function(e) {
            e()
        });
        if (t) return t[2];
        var r = new Promise(function(r, o) {
            t = n[e] = [r, o]
        });
        t[2] = r;
        var o = document.getElementsByTagName("head")[0],
            a = document.createElement("script");
        a.type = "text/javascript", a.charset = "utf-8", a.async = !0, a.timeout = 12e4, __webpack_require__.nc && a.setAttribute("nonce", __webpack_require__.nc), a.src = __webpack_require__.p + "" + e + ".js";
        var i = setTimeout(onScriptComplete, 12e4);
        return a.onerror = a.onload = onScriptComplete, o.appendChild(a), r
    }, __webpack_require__.m = e, __webpack_require__.c = r, __webpack_require__.i = function(e) {
        return e
    }, __webpack_require__.d = function(e, t, r) {
        __webpack_require__.o(e, t) || Object.defineProperty(e, t, {
            configurable: !1,
            enumerable: !0,
            get: r
        })
    }, __webpack_require__.n = function(e) {
        var t = e && e.__esModule ? function() {
            return e.default
        } : function() {
            return e
        };
        return __webpack_require__.d(t, "a", t), t
    }, __webpack_require__.o = function(e, t) {
        return Object.prototype.hasOwnProperty.call(e, t)
    }, __webpack_require__.p = "", __webpack_require__.oe = function(e) {
        throw console.error(e), e
    }, __webpack_require__(__webpack_require__.s = 181)
}([function(e, t, r) {
    e.exports = r(160).default
}, function(e, t, r) {
    var n = r(55)("wks"),
        o = r(38),
        a = r(3).Symbol,
        i = "function" == typeof a;
    (e.exports = function(e) {
        return n[e] || (n[e] = i && a[e] || (i ? a : o)("Symbol." + e))
    }).store = n
}, function(e, t, r) {
    "use strict";

    function isArray(e) {
        return "[object Array]" === a.call(e)
    }

    function isArrayBuffer(e) {
        return "[object ArrayBuffer]" === a.call(e)
    }

    function isFormData(e) {
        return "undefined" != typeof FormData && e instanceof FormData
    }

    function isArrayBufferView(e) {
        return "undefined" != typeof ArrayBuffer && ArrayBuffer.isView ? ArrayBuffer.isView(e) : e && e.buffer && e.buffer instanceof ArrayBuffer
    }

    function isString(e) {
        return "string" == typeof e
    }

    function isNumber(e) {
        return "number" == typeof e
    }

    function isUndefined(e) {
        return void 0 === e
    }

    function isObject(e) {
        return null !== e && "object" == typeof e
    }

    function isDate(e) {
        return "[object Date]" === a.call(e)
    }

    function isFile(e) {
        return "[object File]" === a.call(e)
    }

    function isBlob(e) {
        return "[object Blob]" === a.call(e)
    }

    function isFunction(e) {
        return "[object Function]" === a.call(e)
    }

    function isStream(e) {
        return isObject(e) && isFunction(e.pipe)
    }

    function isURLSearchParams(e) {
        return "undefined" != typeof URLSearchParams && e instanceof URLSearchParams
    }

    function trim(e) {
        return e.replace(/^\s*/, "").replace(/\s*$/, "")
    }

    function isStandardBrowserEnv() {
        return ("undefined" == typeof navigator || "ReactNative" !== navigator.product) && ("undefined" != typeof window && "undefined" != typeof document)
    }

    function forEach(e, t) {
        if (null !== e && void 0 !== e)
            if ("object" == typeof e || isArray(e) || (e = [e]), isArray(e))
                for (var r = 0, n = e.length; r < n; r++) t.call(null, e[r], r, e);
            else
                for (var o in e) Object.prototype.hasOwnProperty.call(e, o) && t.call(null, e[o], o, e)
    }

    function merge() {
        function assignValue(t, r) {
            "object" == typeof e[r] && "object" == typeof t ? e[r] = merge(e[r], t) : e[r] = t
        }
        for (var e = {}, t = 0, r = arguments.length; t < r; t++) forEach(arguments[t], assignValue);
        return e
    }

    function extend(e, t, r) {
        return forEach(t, function(t, o) {
            e[o] = r && "function" == typeof t ? n(t, r) : t
        }), e
    }
    var n = r(44),
        o = r(175),
        a = Object.prototype.toString;
    e.exports = {
        isArray: isArray,
        isArrayBuffer: isArrayBuffer,
        isBuffer: o,
        isFormData: isFormData,
        isArrayBufferView: isArrayBufferView,
        isString: isString,
        isNumber: isNumber,
        isObject: isObject,
        isUndefined: isUndefined,
        isDate: isDate,
        isFile: isFile,
        isBlob: isBlob,
        isFunction: isFunction,
        isStream: isStream,
        isURLSearchParams: isURLSearchParams,
        isStandardBrowserEnv: isStandardBrowserEnv,
        forEach: forEach,
        merge: merge,
        extend: extend,
        trim: trim
    }
}, function(e, t) {
    var r = e.exports = "undefined" != typeof window && window.Math == Math ? window : "undefined" != typeof self && self.Math == Math ? self : Function("return this")();
    "number" == typeof __g && (__g = r)
}, function(e, t, r) {
    "use strict";

    function escapeChar(e) {
        return n[e]
    }

    function extend(e) {
        for (var t = 1; t < arguments.length; t++)
            for (var r in arguments[t]) Object.prototype.hasOwnProperty.call(arguments[t], r) && (e[r] = arguments[t][r]);
        return e
    }

    function indexOf(e, t) {
        for (var r = 0, n = e.length; r < n; r++)
            if (e[r] === t) return r;
        return -1
    }

    function escapeExpression(e) {
        if ("string" != typeof e) {
            if (e && e.toHTML) return e.toHTML();
            if (null == e) return "";
            if (!e) return e + "";
            e = "" + e
        }
        return a.test(e) ? e.replace(o, escapeChar) : e
    }

    function isEmpty(e) {
        return !e && 0 !== e || !(!u(e) || 0 !== e.length)
    }

    function createFrame(e) {
        var t = extend({}, e);
        return t._parent = e, t
    }

    function blockParams(e, t) {
        return e.path = t, e
    }

    function appendContextPath(e, t) {
        return (e ? e + "." : "") + t
    }
    t.__esModule = !0, t.extend = extend, t.indexOf = indexOf, t.escapeExpression = escapeExpression, t.isEmpty = isEmpty, t.createFrame = createFrame, t.blockParams = blockParams, t.appendContextPath = appendContextPath;
    var n = {
            "&": "&amp;",
            "<": "&lt;",
            ">": "&gt;",
            '"': "&quot;",
            "'": "&#x27;",
            "`": "&#x60;",
            "=": "&#x3D;"
        },
        o = /[&<>"'`=]/g,
        a = /[&<>"'`=]/,
        i = Object.prototype.toString;
    t.toString = i;
    var s = function(e) {
        return "function" == typeof e
    };
    s(/x/) && (t.isFunction = s = function(e) {
        return "function" == typeof e && "[object Function]" === i.call(e)
    }), t.isFunction = s;
    var u = Array.isArray || function(e) {
        return !(!e || "object" != typeof e) && "[object Array]" === i.call(e)
    };
    t.isArray = u
}, function(e, t) {
    var r = e.exports = {
        version: "2.5.7"
    };
    "number" == typeof __e && (__e = r)
}, function(e, t, r) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    }), t.objGet = t.toggleSearch = t.getSiteSearchPath = t.urlContainsPath = t.getLocaleFromUrl = void 0;
    var n = r(9),
        o = t.getLocaleFromUrl = function() {
            var e = window.location.pathname.split("/")[1],
                t = /^([a-z][a-z]-[a-z][a-z])$/,
                r = t.exec(e);
            return r ? r[0] : "global"
        };
    t.urlContainsPath = function(e) {
        return window.location.pathname.indexOf(e) > -1
    }, t.getSiteSearchPath = function(e) {
        var t = o();
        return "global" === t ? e + "?" : "/" + t + e + "?"
    }, t.toggleSearch = function(e, t) {
        var r = $("body");
        $(e).on("click", t, function(e) {
            if (e.preventDefault(), window.location.pathname.indexOf("search-results") > -1) return !1;
            $(".bigsearch-area").slideToggle(100, function() {
                $(".bigsearch-input").focus(), $(".js-header-menu-toggle-open .main-ui-icon").removeClass("open")
            });
            var t = (0, n.getCurTop)();
            r.hasClass("menu-open") ? (r.attr("style", "").removeClass("menu-open"), $(window).scrollTop(t)) : (r.addClass("menu-open"), r.css({
                top: 0 - t
            })), $(".primary-menu").removeClass("open"), $(".js-header-menu-toggle-open .main-ui-icon").hasClass("open") && r.addClass("menu-open"), r.hasClass("menu-open") ? $(".bigsearch-area").css({
                position: "relative",
                "z-index": 1e3
            }) : $(".bigsearch-area").css({
                position: "static"
            })
        })
    }, t.objGet = function(e, t) {
        return t.split(".").reduce(function(e, t) {
            return void 0 === e || null === e ? e : e[t]
        }, e)
    }
}, function(e, t, r) {
    var n = r(12);
    e.exports = function(e) {
        if (!n(e)) throw TypeError(e + " is not an object!");
        return e
    }
}, function(e, t, r) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    });
    t.config = {
        cdn: {
            develop: {
                url: "https://s3.eu-west-2.amazonaws.com/elcm-cdn.dev.elsevier.io"
            },
            staging: {
                url: "https://s3.eu-west-2.amazonaws.com/elcm-cdn.dev.elsevier.io"
            },
            production: {
                url: "https://cdn.elsevier.io"
            }
        },
        urls: {
            develop: {
                url: "https://elsevier-internet-dev.squiz.co.uk"
            },
            staging: {
                url: "https://elsevier.staging.squiz.co.uk"
            },
            production: {
                url: "https://www.elsevier.com"
            }
        },
        sitesearch: {
            appName: "sitesearch",
            develop: {
                url: "https://site-search-api.dev.ecommerce.elsevier.com"
            },
            staging: {
                url: "https://site-search-api.staging.ecommerce.elsevier.com"
            },
            production: {
                url: "https://site-search-api.prod.ecommerce.elsevier.com"
            },
            layout: {
                default: {
                    results: "results.hbs",
                    suggest: "suggest.hbs"
                },
                a: {
                    results: "results-a.hbs",
                    suggest: "suggest-a.hbs"
                }
            },
            path: "/search-results",
            routes: {
                search: "/search",
                suggest: "/suggest"
            }
        },
        genuine: {
            develop: {
                url: "https://enterprise-sit.api.elsevier.com/cxf/authenticity/checkAuthenticityPS"
            },
            staging: {
                url: "https://enterprise-sit.api.elsevier.com/cxf/authenticity/checkAuthenticityPS"
            },
            production: {
                url: "https://enterprise.api.elsevier.com/cxf/authenticity/checkAuthenticityPS"
            }
        },
        geo: {
            develop: {
                url: "https://elsevier-internet-dev.squiz.co.uk/__geo"
            },
            staging: {
                url: "https://elsevier.staging.squiz.co.uk/__geo"
            },
            production: {
                url: "https://www.elsevier.com/__geo"
            }
        },
        searchtool: {
            develop: {
                url: "https://institute-certificate-generator.dev.ecommerce.elsevier.com"
            },
            staging: {
                url: "https://institute-certificate-generator.staging.ecommerce.elsevier.com"
            },
            production: {
                url: "https://institute-certificate-generator.prod.ecommerce.elsevier.com"
            }
        }
    }
}, function(e, t, r) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    });
    t.hasBodyClass = function(e) {
        return document.body.classList.contains(e)
    }, t.hasElement = function(e) {
        return document.querySelectorAll(e).length > 0
    }, t.deBounce = function(e, t) {
        var r = void 0;
        return function() {
            var n = this,
                o = arguments,
                a = function() {
                    return e.apply(n, o)
                };
            clearTimeout(r), r = setTimeout(a, t)
        }
    }, t.showElement = function(e) {
        e.style.display = "block"
    }, t.hideElement = function(e) {
        e.style.display = "none"
    }, t.getCurTop = function() {
        var e = $("body"),
            t = Math.abs((e.css("top") || "0").replace("px", ""));
        return e.scrollTop() || $(window).scrollTop() || t
    }, t.decodeHtml = function(e) {
        var t = document.createElement("textarea");
        return t.innerHTML = e, t.value
    }
}, function(e, t, r) {
    var n = r(20);
    e.exports = function(e, t, r) {
        if (n(e), void 0 === t) return e;
        switch (r) {
            case 1:
                return function(r) {
                    return e.call(t, r)
                };
            case 2:
                return function(r, n) {
                    return e.call(t, r, n)
                };
            case 3:
                return function(r, n, o) {
                    return e.call(t, r, n, o)
                }
        }
        return function() {
            return e.apply(t, arguments)
        }
    }
}, function(e, t, r) {
    var n = r(16),
        o = r(32);
    e.exports = r(14) ? function(e, t, r) {
        return n.f(e, t, o(1, r))
    } : function(e, t, r) {
        return e[t] = r, e
    }
}, function(e, t) {
    e.exports = function(e) {
        return "object" == typeof e ? null !== e : "function" == typeof e
    }
}, function(e, t) {
    var r = {}.toString;
    e.exports = function(e) {
        return r.call(e).slice(8, -1)
    }
}, function(e, t, r) {
    e.exports = !r(30)(function() {
        return 7 != Object.defineProperty({}, "a", {
            get: function() {
                return 7
            }
        }).a
    })
}, function(e, t) {
    e.exports = {}
}, function(e, t, r) {
    var n = r(7),
        o = r(127),
        a = r(145),
        i = Object.defineProperty;
    t.f = r(14) ? Object.defineProperty : function(e, t, r) {
        if (n(e), t = a(t, !0), n(r), o) try {
            return i(e, t, r)
        } catch (e) {}
        if ("get" in r || "set" in r) throw TypeError("Accessors not supported!");
        return "value" in r && (e[t] = r.value), e
    }
}, function(e, t, r) {
    var n = r(3),
        o = r(11),
        a = r(22),
        i = r(38)("src"),
        s = Function.toString,
        u = ("" + s).split("toString");
    r(5).inspectSource = function(e) {
        return s.call(e)
    }, (e.exports = function(e, t, r, s) {
        var c = "function" == typeof r;
        c && (a(r, "name") || o(r, "name", t)), e[t] !== r && (c && (a(r, i) || o(r, i, e[t] ? "" + e[t] : u.join(String(t)))), e === n ? e[t] = r : s ? e[t] ? e[t] = r : o(e, t, r) : (delete e[t], o(e, t, r)))
    })(Function.prototype, "toString", function() {
        return "function" == typeof this && this[i] || s.call(this)
    })
}, function(e, t, r) {
    "use strict";

    function Exception(e, t) {
        var r = t && t.loc,
            o = void 0,
            a = void 0;
        r && (o = r.start.line, a = r.start.column, e += " - " + o + ":" + a);
        for (var i = Error.prototype.constructor.call(this, e), s = 0; s < n.length; s++) this[n[s]] = i[n[s]];
        Error.captureStackTrace && Error.captureStackTrace(this, Exception);
        try {
            r && (this.lineNumber = o, Object.defineProperty ? Object.defineProperty(this, "column", {
                value: a,
                enumerable: !0
            }) : this.column = a)
        } catch (e) {}
    }
    t.__esModule = !0;
    var n = ["description", "fileName", "lineNumber", "message", "name", "number", "stack"];
    Exception.prototype = new Error, t.default = Exception, e.exports = t.default
}, function(e, t, r) {
    e.exports = r(85)
}, function(e, t) {
    e.exports = function(e) {
        if ("function" != typeof e) throw TypeError(e + " is not a function!");
        return e
    }
}, function(e, t, r) {
    var n = r(3),
        o = r(5),
        a = r(11),
        i = r(17),
        s = r(10),
        u = function(e, t, r) {
            var c, l, p, f, h = e & u.F,
                d = e & u.G,
                v = e & u.S,
                m = e & u.P,
                g = e & u.B,
                b = d ? n : v ? n[t] || (n[t] = {}) : (n[t] || {}).prototype,
                y = d ? o : o[t] || (o[t] = {}),
                x = y.prototype || (y.prototype = {});
            d && (r = t);
            for (c in r) l = !h && b && void 0 !== b[c], p = (l ? b : r)[c], f = g && l ? s(p, n) : m && "function" == typeof p ? s(Function.call, p) : p, b && i(b, c, p, e & u.U), y[c] != p && a(y, c, f), m && x[c] != p && (x[c] = p)
        };
    n.core = o, u.F = 1, u.G = 2, u.S = 4, u.P = 8, u.B = 16, u.W = 32, u.U = 64, u.R = 128, e.exports = u
}, function(e, t) {
    var r = {}.hasOwnProperty;
    e.exports = function(e, t) {
        return r.call(e, t)
    }
}, function(e, t, r) {
    var n = r(35),
        o = Math.min;
    e.exports = function(e) {
        return e > 0 ? o(n(e), 9007199254740991) : 0
    }
}, function(e, t, r) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    });
    t.regionMap = {
        global: {
            name: "Global",
            lang: "English",
            locale: {
                name: "Global",
                lang: "English"
            },
            code: "GLOBAL",
            siteSearch: {
                searchBox: "Search for books, journals or webpages...",
                searchBoxMobile: "Search...",
                noResults: "No search results found for",
                noSearchTerm: "Please enter at least one keyword to perform a search.",
                serviceUnavailable: "Service currently unavailable, please try again later.",
                searchResultsFoundFor: "search results found for",
                all: "in all",
                pages: "in webpages",
                books: "in books",
                journals: "in journals",
                labels: {
                    webpages: "Webpages",
                    books: "Books",
                    journals: "Journals"
                },
                previous: "Previous",
                next: "Next",
                seconds: "seconds",
                alternativeTxt: "Alternatively these popular pages can help you:",
                alternativeLinks: [{
                    txt: "Submit your paper",
                    path: "/authors/journal-authors/submit-your-paper"
                }, {
                    txt: "Find an article",
                    path: "http://www.sciencedirect.com/"
                }, {
                    txt: "Find a journal",
                    path: "/catalog?producttype=journals "
                }, {
                    txt: "Find a book",
                    path: "/catalog?producttype=books"
                }]
            }
        },
        "de-de": {
            name: "Germany",
            lang: "German",
            locale: {
                name: "Deutschland",
                lang: "Deutsch"
            },
            code: "DEU",
            siteSearch: {
                searchBox: "Nach Büchern, Zeitschriften oder Websites suchen...",
                searchBoxMobile: "Suchen...",
                noResults: "Keine Suchergebnisse gefunden für",
                noSearchTerm: "Bitte geben Sie mindestens ein Suchwort ein, um eine Suche durchzuführen.",
                serviceUnavailable: "Der Dienst steht momentan nicht zur Verfügung, bitte versuchen Sie es später erneut.",
                searchResultsFoundFor: "Suchergebnisse gefunden für",
                all: "insgesamt",
                pages: "in Seiten",
                books: "in Büchern",
                journals: "in Zeitschriften",
                labels: {
                    webpages: "Seiten",
                    books: "Büchern",
                    journals: "Zeitschriften"
                },
                previous: "Bisherige",
                next: "Nächster",
                seconds: "sekunden",
                alternativeTxt: "Alternativ können Ihnen diese beliebten Seiten weiterhelfen:",
                alternativeLinks: [{
                    txt: "Wissenschaftliche Arbeit einreichen",
                    path: "/de-de/authors/journal-authors/submit-your-paper"
                }, {
                    txt: "Einen Artikel finden",
                    path: "http://www.sciencedirect.com/"
                }, {
                    txt: "Zeitschrift suchen",
                    path: "/catalog?producttype=journals "
                }, {
                    txt: "Ein Buch finden",
                    path: "/catalog?producttype=books"
                }]
            }
        },
        "en-gb": {
            name: "United Kingdom",
            lang: "English",
            locale: {
                name: "United Kingdom",
                lang: "English"
            },
            code: "GBR",
            siteSearch: {
                searchBox: "Search for books, journals or webpages...",
                searchBoxMobile: "Search...",
                noResults: "No search results found for",
                noSearchTerm: "Please enter at least one keyword to perform a search.",
                serviceUnavailable: "Service currently unavailable, please try again later.",
                searchResultsFoundFor: "search results found for",
                all: "in all",
                pages: "in webpages",
                books: "in books",
                journals: "in journals",
                labels: {
                    webpages: "Webpages",
                    books: "Books",
                    journals: "Journals"
                },
                previous: "Previous",
                next: "Next",
                seconds: "seconds",
                alternativeTxt: "Alternatively these popular pages can help you:",
                alternativeLinks: [{
                    txt: "Submit your paper",
                    path: "/en-gb/authors/journal-authors/submit-your-paper"
                }, {
                    txt: "Find an article",
                    path: "http://www.sciencedirect.com/"
                }, {
                    txt: "Find a journal",
                    path: "/catalog?producttype=journals "
                }, {
                    txt: "Find a book",
                    path: "/catalog?producttype=books"
                }]
            }
        },
        "en-au": {
            name: "Australia",
            lang: "English",
            locale: {
                name: "Australia",
                lang: "English"
            },
            code: "AUS",
            siteSearch: {
                searchBox: "Search for books, journals or webpages...",
                searchBoxMobile: "Search...",
                noResults: "No search results found for",
                noSearchTerm: "Please enter at least one keyword to perform a search.",
                serviceUnavailable: "Service currently unavailable, please try again later.",
                searchResultsFoundFor: "search results found for",
                all: "in all",
                pages: "in webpages",
                books: "in books",
                journals: "in journals",
                labels: {
                    webpages: "Webpages",
                    books: "Books",
                    journals: "Journals"
                },
                previous: "Previous",
                next: "Next",
                seconds: "seconds",
                alternativeTxt: "Alternatively these popular pages can help you:",
                alternativeLinks: [{
                    txt: "Submit your paper",
                    path: "/en-au/authors/journal-authors/submit-your-paper"
                }, {
                    txt: "Find an article",
                    path: "http://www.sciencedirect.com/"
                }, {
                    txt: "Find a journal",
                    path: "/catalog?producttype=journals "
                }, {
                    txt: "Find a book",
                    path: "/catalog?producttype=books"
                }]
            }
        },
        "en-in": {
            name: "India",
            lang: "English",
            locale: {
                name: "India",
                lang: "English"
            },
            code: "IND",
            siteSearch: {
                searchBox: "Search for books, journals or webpages...",
                searchBoxMobile: "Search...",
                noResults: "No search results found for",
                noSearchTerm: "Please enter at least one keyword to perform a search.",
                serviceUnavailable: "Service currently unavailable, please try again later.",
                searchResultsFoundFor: "search results found for",
                all: "in all",
                pages: "in webpages",
                books: "in books",
                journals: "in journals",
                labels: {
                    webpages: "Webpages",
                    books: "Books",
                    journals: "Journals"
                },
                previous: "Previous",
                next: "Next",
                seconds: "seconds",
                alternativeTxt: "Alternatively these popular pages can help you:",
                alternativeLinks: [{
                    txt: "Submit your paper",
                    path: "/en-in/authors/journal-authors/submit-your-paper"
                }, {
                    txt: "Find an article",
                    path: "http://www.sciencedirect.com/"
                }, {
                    txt: "Find a journal",
                    path: "/catalog?producttype=journals "
                }, {
                    txt: "Find a book",
                    path: "/catalog?producttype=books"
                }]
            }
        },
        "en-xm": {
            name: "Middle East",
            lang: "English",
            locale: {
                name: "Middle East",
                lang: "English"
            },
            code: "XM",
            siteSearch: {
                searchBox: "Search for books, journals or webpages...",
                searchBoxMobile: "Search...",
                noResults: "No search results found for",
                noSearchTerm: "Please enter at least one keyword to perform a search.",
                serviceUnavailable: "Service currently unavailable, please try again later.",
                searchResultsFoundFor: "search results found for",
                all: "in all",
                pages: "in webpages",
                books: "in books",
                journals: "in journals",
                labels: {
                    webpages: "Webpages",
                    books: "Books",
                    journals: "Journals"
                },
                previous: "Previous",
                next: "Next",
                seconds: "seconds",
                alternativeTxt: "Alternatively these popular pages can help you:",
                alternativeLinks: [{
                    txt: "Submit your paper",
                    path: "/en-xm/authors/journal-authors/submit-your-paper"
                }, {
                    txt: "Find an article",
                    path: "http://www.sciencedirect.com/"
                }, {
                    txt: "Find a journal",
                    path: "/catalog?producttype=journals "
                }, {
                    txt: "Find a book",
                    path: "/catalog?producttype=books"
                }]
            }
        },
        "en-xs": {
            name: "South East Asia",
            lang: "English",
            locale: {
                name: "South East Asia",
                lang: "English"
            },
            code: "XS",
            siteSearch: {
                searchBox: "Search for books, journals or webpages...",
                searchBoxMobile: "Search...",
                noResults: "No search results found for",
                noSearchTerm: "Please enter at least one keyword to perform a search.",
                serviceUnavailable: "Service currently unavailable, please try again later.",
                searchResultsFoundFor: "search results found for",
                all: "in all",
                pages: "in webpages",
                books: "in books",
                journals: "in journals",
                labels: {
                    webpages: "Webpages",
                    books: "Books",
                    journals: "Journals"
                },
                previous: "Previous",
                next: "Next",
                seconds: "seconds",
                alternativeTxt: "Alternatively these popular pages can help you:",
                alternativeLinks: [{
                    txt: "Submit your paper",
                    path: "/en-xs/authors/journal-authors/submit-your-paper"
                }, {
                    txt: "Find an article",
                    path: "http://www.sciencedirect.com/"
                }, {
                    txt: "Find a journal",
                    path: "/catalog?producttype=journals "
                }, {
                    txt: "Find a book",
                    path: "/catalog?producttype=books"
                }]
            }
        },
        "es-es": {
            name: "Spain",
            lang: "Spanish",
            locale: {
                name: "España",
                lang: "Español"
            },
            code: "ESP",
            siteSearch: {
                searchBox: "Buscar libros, revistas o páginas web",
                searchBoxMobile: "Buscar...",
                noResults: "No se han encontrado resultados de la búsqueda para",
                noSearchTerm: "Introduzca al menos una palabra clave para realizar una búsqueda.",
                serviceUnavailable: "Servicio no disponible en este momento, vuelva a intentarlo más tarde",
                searchResultsFoundFor: "Se han encontrado resultados de la búsqueda para",
                all: "en todo",
                pages: "en páginas",
                books: "en libros",
                journals: "en revistas",
                labels: {
                    webpages: "Páginas",
                    books: "Libros",
                    journals: "Revistas"
                },
                previous: "Anterior",
                next: "Siguiente",
                seconds: "segundos",
                alternativeTxt: "Como alternativa, estas populares páginas pueden ayudarle:",
                alternativeLinks: [{
                    txt: "Envíe su artículo",
                    path: "/es-es/authors/journal-authors/submit-your-paper"
                }, {
                    txt: "Encontrar un artículo",
                    path: "http://www.sciencedirect.com/"
                }, {
                    txt: "Encontrar una revista",
                    path: "/catalog?producttype=journals "
                }, {
                    txt: "Encontrar un libro",
                    path: "/catalog?producttype=books"
                }]
            }
        },
        "es-mx": {
            name: "Mexico",
            lang: "Spanish",
            locale: {
                name: "México",
                lang: "Español"
            },
            code: "MEX",
            siteSearch: {
                searchBox: "Buscar libros, revistas o páginas web",
                searchBoxMobile: "Buscar...",
                noResults: "No se han encontrado resultados de la búsqueda para",
                noSearchTerm: "Introduzca al menos una palabra clave para realizar una búsqueda.",
                serviceUnavailable: "Servicio no disponible en este momento, vuelva a intentarlo más tarde",
                searchResultsFoundFor: "Se han encontrado resultados de la búsqueda para",
                all: "en todo",
                pages: "en páginas",
                books: "en libros",
                journals: "en revistas",
                labels: {
                    webpages: "Páginas",
                    books: "Libros",
                    journals: "Revistas"
                },
                previous: "Anterior",
                next: "Siguiente",
                seconds: "segundos",
                alternativeTxt: "Como alternativa, estas populares páginas pueden ayudarle:",
                alternativeLinks: [{
                    txt: "Envíe su artículo",
                    path: "/es-mx/authors/journal-authors/submit-your-paper"
                }, {
                    txt: "Encontrar un artículo",
                    path: "http://www.sciencedirect.com/"
                }, {
                    txt: "Encontrar una revista",
                    path: "/catalog?producttype=journals "
                }, {
                    txt: "Encontrar un libro",
                    path: "/catalog?producttype=books"
                }]
            }
        },
        "fr-fr": {
            name: "France",
            lang: "French",
            locale: {
                name: "France",
                lang: "Français"
            },
            code: "FRA",
            siteSearch: {
                searchBox: "Rechercher des livres, revues ou pages web...",
                searchBoxMobile: "Chercher...",
                noResults: "Aucun résultat de recherche pour",
                noSearchTerm: "Veuillez saisir au moins un mot clé pour lancer la recherche.",
                serviceUnavailable: "Service actuellement indisponible, veuillez réessayer plus tard",
                searchResultsFoundFor: "résultats de recherche pour",
                all: "tout",
                pages: "pages",
                books: "livres",
                journals: "revues",
                labels: {
                    webpages: "Pages",
                    books: "Livres",
                    journals: "Revues"
                },
                previous: "Précédent",
                next: "Prochain",
                seconds: "secondes",
                alternativeTxt: "Autrement, ces pages plus visitées peuvent vous aider:",
                alternativeLinks: [{
                    txt: "Soumettre votre article",
                    path: "/fr-fr/authors/journal-authors/submit-your-paper"
                }, {
                    txt: "Rechercher un article",
                    path: "http://www.sciencedirect.com/"
                }, {
                    txt: "Trouver une revue",
                    path: "/catalog?producttype=journals "
                }, {
                    txt: "Trouver un livre",
                    path: "/catalog?producttype=books"
                }]
            }
        },
        "ko-kr": {
            name: "Korea",
            lang: "Korean",
            locale: {
                name: "한국",
                lang: "한국어"
            },
            code: "KOR",
            siteSearch: {
                searchBox: "도서, 저널 혹은 웹페이지 검색...",
                searchBoxMobile: "검색...",
                noResults: "검색 결과가 없습니다.",
                noSearchTerm: "검색을 수행하려면 하나 이상의 키워드를 입력하십시오.",
                serviceUnavailable: "현재 서비스를 사용할 수 없습니다. 나중에 다시 이용하시기 바랍니다.",
                searchResultsFoundFor: "다음에 대한 검색 결과",
                all: "전체에서",
                pages: "페이지에서",
                books: "도서에서",
                journals: "저널에서",
                labels: {
                    webpages: "웹페이지",
                    books: "도서",
                    journals: "저널"
                },
                previous: "이전",
                next: "다음",
                seconds: "seconds",
                alternativeTxt: "이러한 인기 페이지를 통해 다음과 같은 이점을 누릴 수 있습니다.",
                alternativeLinks: [{
                    txt: "논문 제출",
                    path: "/ko-kr/authors/journal-authors/submit-your-paper"
                }, {
                    txt: "논문 찾기",
                    path: "http://www.sciencedirect.com/"
                }, {
                    txt: "저널 찾기",
                    path: "/catalog?producttype=journals "
                }, {
                    txt: "도서 찾기",
                    path: "/catalog?producttype=books"
                }]
            }
        },
        "ja-jp": {
            name: "Japan",
            lang: "Japanese",
            locale: {
                name: "日本",
                lang: "日本語"
            },
            code: "JPN",
            siteSearch: {
                searchBox: "書籍、ジャーナル、ウェブサイトを検索する...",
                searchBoxMobile: "検索...",
                noResults: "検索結果なし",
                noSearchTerm: "検索をするために最低一つのキーワードを入力してください。",
                serviceUnavailable: "現在お使いいただけません。後ほどお試しください。",
                searchResultsFoundFor: "検索結果",
                all: "すべて",
                pages: "ページ",
                books: "書籍",
                journals: "ジャーナル",
                labels: {
                    webpages: "ウェブページ",
                    books: "書籍",
                    journals: "ジャーナル"
                },
                previous: "前",
                next: "次へ",
                seconds: "秒",
                alternativeTxt: "またはこちらの好評なページをご利用ください:",
                alternativeLinks: [{
                    txt: "論文を提出する",
                    path: "/ja-jp/authors/journal-authors/submit-your-paper"
                }, {
                    txt: "論文を検索する",
                    path: "http://www.sciencedirect.com/"
                }, {
                    txt: "ジャーナル検索",
                    path: "/catalog?producttype=journals "
                }, {
                    txt: "書籍を検索する",
                    path: "/catalog?producttype=books"
                }]
            }
        },
        "pl-pl": {
            name: "Poland",
            lang: "Polish",
            locale: {
                name: "Polska",
                lang: "Polski"
            },
            code: "POL",
            siteSearch: {
                searchBox: "Wyszukiwanie książek, czasopism lub stron internetowych...",
                searchBoxMobile: "Szukaj...",
                noResults: "Brak wyników wyszukiwania",
                noSearchTerm: "Aby przeprowadzić wyszukiwanie, wprowadź co najmniej jedno słowo kluczowe.",
                serviceUnavailable: "Serwis czasowo niedostępny, spróbuj ponownie później",
                searchResultsFoundFor: "wyników wyszukiwania",
                all: "we wszystkich treściach",
                pages: "na stronach",
                books: "w książkach",
                journals: "w czasopismach",
                labels: {
                    webpages: "Stronach",
                    books: "Książkach",
                    journals: "Czasopismach"
                },
                previous: "Poprzedni",
                next: "Kolejny",
                seconds: "sekundy",
                alternativeTxt: "Możesz też uzyskać pomoc na tych popularnych stronach:",
                alternativeLinks: [{
                    txt: "Prześlij swój artykuł",
                    path: "/pl-pl/authors/journal-authors/submit-your-paper"
                }, {
                    txt: "Znajdź artykuł",
                    path: "http://www.sciencedirect.com/"
                }, {
                    txt: "Szukaj czasopisma",
                    path: "/catalog?producttype=journals "
                }, {
                    txt: "Znajdź książkę",
                    path: "/catalog?producttype=books"
                }]
            }
        },
        "pt-br": {
            name: "Brazil",
            lang: "Portuguese",
            locale: {
                name: "Brasil",
                lang: "Português"
            },
            code: "BRA",
            siteSearch: {
                searchBox: "Pesquisar livros, revistas ou páginas da internet...",
                searchBoxMobile: "Pesquisar...",
                noResults: "Nenhum resultado encontrado para",
                noSearchTerm: "Insira pelo menos uma palavra-chave para realizar a busca.",
                serviceUnavailable: "Serviço indisponível no momento, tente novamente mais tarde",
                searchResultsFoundFor: "pesquisar resultados encontrados para",
                all: "em tudo",
                pages: "em páginas",
                books: "em livros",
                journals: "em revistas",
                labels: {
                    webpages: "Páginas da internet",
                    books: "Livros",
                    journals: "Revistas científicas"
                },
                previous: "Anterior",
                next: "Próximo",
                seconds: "segundos",
                alternativeTxt: "Ou essas páginas populares podem ajudar você a:",
                alternativeLinks: [{
                    txt: "Envie o seu artigo",
                    path: "/pt-br/authors/journal-authors/submit-your-paper"
                }, {
                    txt: "Encontrar um artigo",
                    path: "http://www.sciencedirect.com/"
                }, {
                    txt: "Encontre uma revista científica",
                    path: "/catalog?producttype=journals "
                }, {
                    txt: "Encontrar um livro",
                    path: "/catalog?producttype=books"
                }]
            }
        },
        "tr-tr": {
            name: "Turkey",
            lang: "Turkish",
            locale: {
                name: "Türkiye",
                lang: "Türkçe"
            },
            code: "TUR",
            siteSearch: {
                searchBox: "Kitap, dergi veya internet sayfası arayın...",
                searchBoxMobile: "Ara",
                noResults: "Şunun için arama sonucu bulunamadı:",
                noSearchTerm: "Lütfen arama yapmak için en az bir anahtar sözcük girin.",
                serviceUnavailable: "Hizmet şu anda kullanılamıyor, lütfen daha sonra yeniden deneyin",
                searchResultsFoundFor: "şunun için bulunan arama sonuçları:",
                all: "tümünde",
                pages: "sayfalarda",
                books: "kitaplarda",
                journals: "dergilerde",
                labels: {
                    webpages: "İnternet sayfaları",
                    books: "Kitaplar",
                    journals: "Akademik Dergiler"
                },
                previous: "Önceki",
                next: "Sonraki",
                seconds: "saniyeler",
                alternativeTxt: "Alternatif olarak şu popüler sayfalar size yardımcı olabilir:",
                alternativeLinks: [{
                    txt: "Makalenizi gönderin",
                    path: "/tr-tr/authors/journal-authors/submit-your-paper"
                }, {
                    txt: "Bir kitap bulun",
                    path: "http://www.sciencedirect.com/"
                }, {
                    txt: "Makale bulun",
                    path: "/catalog?producttype=journals "
                }, {
                    txt: "Bir Dergi bulun",
                    path: "/catalog?producttype=books"
                }]
            }
        },
        "zh-cn": {
            name: "China",
            lang: "Chinese (Simplified)",
            locale: {
                name: "中国",
                lang: "简体中文"
            },
            code: "CHN",
            siteSearch: {
                searchBox: "搜索图书、期刊或网页......",
                searchBoxMobile: "搜索...",
                noResults: "未发现任何搜索结果",
                noSearchTerm: "请输入至少一个关键词来执行搜索。",
                serviceUnavailable: "当前服务不可用，请稍后再试",
                searchResultsFoundFor: "发现搜索结果",
                all: "在所有刊物中",
                pages: "在页面中",
                books: "在图书中",
                journals: "在期刊中",
                labels: {
                    webpages: "网页",
                    books: "图书",
                    journals: "期刊"
                },
                previous: "上一页",
                next: "下一页",
                seconds: "秒",
                alternativeTxt: "或者，这些流行页可帮助您：",
                alternativeLinks: [{
                    txt: "提交您的论文",
                    path: "/zh-cn/authors/journal-authors/submit-your-paper"
                }, {
                    txt: "查找文章",
                    path: "http://www.sciencedirect.com/"
                }, {
                    txt: "查找期刊",
                    path: "/catalog?producttype=journals "
                }, {
                    txt: "查找图书",
                    path: "/catalog?producttype=books"
                }]
            }
        },
        "zh-tw": {
            name: "Taiwan",
            lang: "Taiwanese Mandarin",
            locale: {
                name: "台灣",
                lang: "繁體中文"
            },
            code: "TWN",
            siteSearch: {
                searchBox: "搜尋書籍、期刊或網頁…",
                searchBoxMobile: "搜尋…",
                noResults: "沒有找到搜尋結果",
                noSearchTerm: "請輸入至少一個關鍵字以執行搜尋。",
                serviceUnavailable: "目前無法使用服務，請稍後再試",
                searchResultsFoundFor: "找到搜尋結果",
                all: "所有",
                pages: "頁面",
                books: "書籍",
                journals: "期刊",
                labels: {
                    webpages: "網頁",
                    books: "書籍",
                    journals: "期刊"
                },
                previous: "前一頁",
                next: "後一頁",
                seconds: "秒",
                alternativeTxt: "或者，這些熱門頁面可幫助您：",
                alternativeLinks: [{
                    txt: "提交您的論文",
                    path: "/zh-tw/authors/journal-authors/submit-your-paper"
                }, {
                    txt: "尋找論文",
                    path: "http://www.sciencedirect.com/"
                }, {
                    txt: "尋找期刊",
                    path: "/catalog?producttype=journals "
                }, {
                    txt: "找尋書籍",
                    path: "/catalog?producttype=books"
                }]
            }
        },
        "en-af": {
            name: "Africa",
            lang: "English",
            code: "AF"
        },
        "en-bh": {
            name: "Bahrain",
            lang: "English",
            code: "BHR"
        },
        "en-iq": {
            name: "Iraq",
            lang: "English",
            code: "IRQ"
        },
        "en-jo": {
            name: "Jordan",
            lang: "English",
            code: "JOR"
        },
        "en-kw": {
            name: "Kuwait",
            lang: "English",
            code: "KWT"
        },
        "en-lb": {
            name: "Lebanon",
            lang: "English",
            code: "LBN"
        },
        "en-om": {
            name: "Oman",
            lang: "English",
            code: "OMN"
        },
        "en-ps": {
            name: "Palestinian Territory, Occupied",
            lang: "English",
            code: "PSE"
        },
        "en-qa": {
            name: "Qatar",
            lang: "English",
            code: "QAT"
        },
        "en-sa": {
            name: "Saudi Arabia",
            lang: "English",
            code: "SAU"
        },
        "en-sy": {
            name: "Syrian Arab Republic (Syria)",
            lang: "English",
            code: "SYR"
        },
        "en-ae": {
            name: "United Arab Emirates",
            lang: "English",
            code: "ARE"
        },
        "en-ye": {
            name: "Yemen",
            lang: "English",
            code: "YEM"
        },
        "en-bn": {
            name: "Brunei",
            lang: "English",
            code: "BRN"
        },
        "en-kh": {
            name: "Cambodia",
            lang: "English",
            code: "KHM"
        },
        "en-id": {
            name: "Indonesia",
            lang: "English",
            code: "IDN"
        },
        "en-la": {
            name: "Laos",
            lang: "English",
            code: "LAO"
        },
        "en-my": {
            name: "Malaysia",
            lang: "English",
            code: "MYS"
        },
        "en-mm": {
            name: "Myanmar",
            lang: "English",
            code: "MMR"
        },
        "en-ph": {
            name: "Philippines",
            lang: "English",
            code: "PHL"
        },
        "en-sg": {
            name: "Singapore",
            lang: "English",
            code: "SGP"
        },
        "en-th": {
            name: "Thailand",
            lang: "English",
            code: "THA"
        },
        "en-vn": {
            name: "Vietnam",
            lang: "English",
            code: "VNM"
        }
    }
}, function(e, t, r) {
    "use strict";
    (function(t) {
        function setContentTypeIfUnset(e, t) {
            !n.isUndefined(e) && n.isUndefined(e["Content-Type"]) && (e["Content-Type"] = t)
        }
        var n = r(2),
            o = r(99),
            a = {
                "Content-Type": "application/x-www-form-urlencoded"
            },
            i = {
                adapter: function() {
                    var e;
                    return "undefined" != typeof XMLHttpRequest ? e = r(40) : void 0 !== t && (e = r(40)), e
                }(),
                transformRequest: [function(e, t) {
                    return o(t, "Content-Type"), n.isFormData(e) || n.isArrayBuffer(e) || n.isBuffer(e) || n.isStream(e) || n.isFile(e) || n.isBlob(e) ? e : n.isArrayBufferView(e) ? e.buffer : n.isURLSearchParams(e) ? (setContentTypeIfUnset(t, "application/x-www-form-urlencoded;charset=utf-8"), e.toString()) : n.isObject(e) ? (setContentTypeIfUnset(t, "application/json;charset=utf-8"), JSON.stringify(e)) : e
                }],
                transformResponse: [function(e) {
                    if ("string" == typeof e) try {
                        e = JSON.parse(e)
                    } catch (e) {}
                    return e
                }],
                timeout: 0,
                xsrfCookieName: "XSRF-TOKEN",
                xsrfHeaderName: "X-XSRF-TOKEN",
                maxContentLength: -1,
                validateStatus: function(e) {
                    return e >= 200 && e < 300
                }
            };
        i.headers = {
            common: {
                Accept: "application/json, text/plain, */*"
            }
        }, n.forEach(["delete", "get", "head"], function(e) {
            i.headers[e] = {}
        }), n.forEach(["post", "put", "patch"], function(e) {
            i.headers[e] = n.merge(a)
        }), e.exports = i
    }).call(t, r(65))
}, , function(e, t, r) {
    var n = r(13),
        o = r(1)("toStringTag"),
        a = "Arguments" == n(function() {
            return arguments
        }()),
        i = function(e, t) {
            try {
                return e[t]
            } catch (e) {}
        };
    e.exports = function(e) {
        var t, r, s;
        return void 0 === e ? "Undefined" : null === e ? "Null" : "string" == typeof(r = i(t = Object(e), o)) ? r : a ? n(t) : "Object" == (s = n(t)) && "function" == typeof t.callee ? "Arguments" : s
    }
}, function(e, t) {
    e.exports = function(e) {
        if (void 0 == e) throw TypeError("Can't call method on  " + e);
        return e
    }
}, function(e, t, r) {
    var n = r(12),
        o = r(3).document,
        a = n(o) && n(o.createElement);
    e.exports = function(e) {
        return a ? o.createElement(e) : {}
    }
}, function(e, t) {
    e.exports = function(e) {
        try {
            return !!e()
        } catch (e) {
            return !0
        }
    }
}, function(e, t) {
    e.exports = !1
}, function(e, t) {
    e.exports = function(e, t) {
        return {
            enumerable: !(1 & e),
            configurable: !(2 & e),
            writable: !(4 & e),
            value: t
        }
    }
}, function(e, t, r) {
    var n = r(16).f,
        o = r(22),
        a = r(1)("toStringTag");
    e.exports = function(e, t, r) {
        e && !o(e = r ? e : e.prototype, a) && n(e, a, {
            configurable: !0,
            value: t
        })
    }
}, function(e, t, r) {
    var n = r(55)("keys"),
        o = r(38);
    e.exports = function(e) {
        return n[e] || (n[e] = o(e))
    }
}, function(e, t) {
    var r = Math.ceil,
        n = Math.floor;
    e.exports = function(e) {
        return isNaN(e = +e) ? 0 : (e > 0 ? n : r)(e)
    }
}, function(e, t, r) {
    var n = r(48),
        o = r(28);
    e.exports = function(e) {
        return n(o(e))
    }
}, function(e, t, r) {
    var n = r(28);
    e.exports = function(e) {
        return Object(n(e))
    }
}, function(e, t) {
    var r = 0,
        n = Math.random();
    e.exports = function(e) {
        return "Symbol(".concat(void 0 === e ? "" : e, ")_", (++r + n).toString(36))
    }
}, , function(e, t, r) {
    "use strict";
    (function(t) {
        var n = r(2),
            o = r(91),
            a = r(94),
            i = r(100),
            s = r(98),
            u = r(43),
            c = "undefined" != typeof window && window.btoa && window.btoa.bind(window) || r(93);
        e.exports = function(e) {
            return new Promise(function(l, p) {
                var f = e.data,
                    h = e.headers;
                n.isFormData(f) && delete h["Content-Type"];
                var d = new XMLHttpRequest,
                    v = "onreadystatechange",
                    m = !1;
                if ("test" === t.env.NODE_ENV || "undefined" == typeof window || !window.XDomainRequest || "withCredentials" in d || s(e.url) || (d = new window.XDomainRequest, v = "onload", m = !0, d.onprogress = function() {}, d.ontimeout = function() {}), e.auth) {
                    var g = e.auth.username || "",
                        b = e.auth.password || "";
                    h.Authorization = "Basic " + c(g + ":" + b)
                }
                if (d.open(e.method.toUpperCase(), a(e.url, e.params, e.paramsSerializer), !0), d.timeout = e.timeout, d[v] = function() {
                        if (d && (4 === d.readyState || m) && (0 !== d.status || d.responseURL && 0 === d.responseURL.indexOf("file:"))) {
                            var t = "getAllResponseHeaders" in d ? i(d.getAllResponseHeaders()) : null,
                                r = e.responseType && "text" !== e.responseType ? d.response : d.responseText,
                                n = {
                                    data: r,
                                    status: 1223 === d.status ? 204 : d.status,
                                    statusText: 1223 === d.status ? "No Content" : d.statusText,
                                    headers: t,
                                    config: e,
                                    request: d
                                };
                            o(l, p, n), d = null
                        }
                    }, d.onerror = function() {
                        p(u("Network Error", e, null, d)), d = null
                    }, d.ontimeout = function() {
                        p(u("timeout of " + e.timeout + "ms exceeded", e, "ECONNABORTED", d)), d = null
                    }, n.isStandardBrowserEnv()) {
                    var y = r(96),
                        x = (e.withCredentials || s(e.url)) && e.xsrfCookieName ? y.read(e.xsrfCookieName) : void 0;
                    x && (h[e.xsrfHeaderName] = x)
                }
                if ("setRequestHeader" in d && n.forEach(h, function(e, t) {
                        void 0 === f && "content-type" === t.toLowerCase() ? delete h[t] : d.setRequestHeader(t, e)
                    }), e.withCredentials && (d.withCredentials = !0), e.responseType) try {
                    d.responseType = e.responseType
                } catch (t) {
                    if ("json" !== e.responseType) throw t
                }
                "function" == typeof e.onDownloadProgress && d.addEventListener("progress", e.onDownloadProgress), "function" == typeof e.onUploadProgress && d.upload && d.upload.addEventListener("progress", e.onUploadProgress), e.cancelToken && e.cancelToken.promise.then(function(e) {
                    d && (d.abort(), p(e), d = null)
                }), void 0 === f && (f = null), d.send(f)
            })
        }
    }).call(t, r(65))
}, function(e, t, r) {
    "use strict";

    function Cancel(e) {
        this.message = e
    }
    Cancel.prototype.toString = function() {
        return "Cancel" + (this.message ? ": " + this.message : "")
    }, Cancel.prototype.__CANCEL__ = !0, e.exports = Cancel
}, function(e, t, r) {
    "use strict";
    e.exports = function(e) {
        return !(!e || !e.__CANCEL__)
    }
}, function(e, t, r) {
    "use strict";
    var n = r(90);
    e.exports = function(e, t, r, o, a) {
        var i = new Error(e);
        return n(i, t, r, o, a)
    }
}, function(e, t, r) {
    "use strict";
    e.exports = function(e, t) {
        return function() {
            for (var r = new Array(arguments.length), n = 0; n < r.length; n++) r[n] = arguments[n];
            return e.apply(t, r)
        }
    }
}, function(e, t, r) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    });
    t.getQueryParam = function(e) {
        e = e.replace(/[[]/, "\\[").replace(/[\]]/, "\\]");
        var t = new RegExp("[\\?&]" + e + "=([^&#]*)"),
            r = t.exec(location.search);
        return null === r ? "" : decodeURIComponent(r[1].replace(/\+/g, " "))
    }, t.getClientOS = function(e) {
        return e.indexOf("Win") > -1 ? "Windows" : e.indexOf("Mac") > -1 ? "Mac" : e.indexOf("X11") > -1 ? "Unix" : e.indexOf("Linux") > -1 ? "Linux" : "Other"
    }, t.storageAvailable = function(e) {
        try {
            var t = window[e],
                r = "__storage_test__";
            return t.setItem(r, r), t.removeItem(r), !0
        } catch (e) {
            return e instanceof DOMException && (22 === e.code || 1014 === e.code || "QuotaExceededError" === e.name || "NS_ERROR_DOM_QUOTA_REACHED" === e.name) && 0 !== storage.length
        }
    }
}, function(e, t) {
    e.exports = "constructor,hasOwnProperty,isPrototypeOf,propertyIsEnumerable,toLocaleString,toString,valueOf".split(",")
}, function(e, t, r) {
    var n = r(3).document;
    e.exports = n && n.documentElement
}, function(e, t, r) {
    var n = r(13);
    e.exports = Object("z").propertyIsEnumerable(0) ? Object : function(e) {
        return "String" == n(e) ? e.split("") : Object(e)
    }
}, function(e, t, r) {
    var n = r(15),
        o = r(1)("iterator"),
        a = Array.prototype;
    e.exports = function(e) {
        return void 0 !== e && (n.Array === e || a[o] === e)
    }
}, function(e, t, r) {
    var n = r(7);
    e.exports = function(e, t, r, o) {
        try {
            return o ? t(n(r)[0], r[1]) : t(r)
        } catch (t) {
            var a = e.return;
            throw void 0 !== a && n(a.call(e)), t
        }
    }
}, function(e, t, r) {
    "use strict";
    var n = r(31),
        o = r(21),
        a = r(17),
        i = r(11),
        s = r(15),
        u = r(130),
        c = r(33),
        l = r(135),
        p = r(1)("iterator"),
        f = !([].keys && "next" in [].keys()),
        h = function() {
            return this
        };
    e.exports = function(e, t, r, d, v, m, g) {
        u(r, t, d);
        var b, y, x, w = function(e) {
                if (!f && e in j) return j[e];
                switch (e) {
                    case "keys":
                    case "values":
                        return function() {
                            return new r(this, e)
                        }
                }
                return function() {
                    return new r(this, e)
                }
            },
            _ = t + " Iterator",
            k = "values" == v,
            S = !1,
            j = e.prototype,
            E = j[p] || j["@@iterator"] || v && j[v],
            T = E || w(v),
            P = v ? k ? w("entries") : T : void 0,
            R = "Array" == t ? j.entries || E : E;
        if (R && (x = l(R.call(new e))) !== Object.prototype && x.next && (c(x, _, !0), n || "function" == typeof x[p] || i(x, p, h)), k && E && "values" !== E.name && (S = !0, T = function() {
                return E.call(this)
            }), n && !g || !f && !S && j[p] || i(j, p, T), s[t] = T, s[_] = h, v)
            if (b = {
                    values: k ? T : w("values"),
                    keys: m ? T : w("keys"),
                    entries: P
                }, g)
                for (y in b) y in j || a(j, y, b[y]);
            else o(o.P + o.F * (f || S), t, b);
        return b
    }
}, function(e, t, r) {
    var n = r(1)("iterator"),
        o = !1;
    try {
        var a = [7][n]();
        a.return = function() {
            o = !0
        }, Array.from(a, function() {
            throw 2
        })
    } catch (e) {}
    e.exports = function(e, t) {
        if (!t && !o) return !1;
        var r = !1;
        try {
            var a = [7],
                i = a[n]();
            i.next = function() {
                return {
                    done: r = !0
                }
            }, a[n] = function() {
                return i
            }, e(a)
        } catch (e) {}
        return r
    }
}, function(e, t, r) {
    "use strict";

    function PromiseCapability(e) {
        var t, r;
        this.promise = new e(function(e, n) {
            if (void 0 !== t || void 0 !== r) throw TypeError("Bad Promise constructor");
            t = e, r = n
        }), this.resolve = n(t), this.reject = n(r)
    }
    var n = r(20);
    e.exports.f = function(e) {
        return new PromiseCapability(e)
    }
}, function(e, t, r) {
    var n = r(136),
        o = r(46);
    e.exports = Object.keys || function(e) {
        return n(e, o)
    }
}, function(e, t, r) {
    var n = r(5),
        o = r(3),
        a = o["__core-js_shared__"] || (o["__core-js_shared__"] = {});
    (e.exports = function(e, t) {
        return a[e] || (a[e] = void 0 !== t ? t : {})
    })("versions", []).push({
        version: n.version,
        mode: r(31) ? "pure" : "global",
        copyright: "© 2018 Denis Pushkarev (zloirock.ru)"
    })
}, function(e, t, r) {
    var n, o, a, i = r(10),
        s = r(128),
        u = r(47),
        c = r(29),
        l = r(3),
        p = l.process,
        f = l.setImmediate,
        h = l.clearImmediate,
        d = l.MessageChannel,
        v = l.Dispatch,
        m = 0,
        g = {},
        b = function() {
            var e = +this;
            if (g.hasOwnProperty(e)) {
                var t = g[e];
                delete g[e], t()
            }
        },
        y = function(e) {
            b.call(e.data)
        };
    f && h || (f = function(e) {
        for (var t = [], r = 1; arguments.length > r;) t.push(arguments[r++]);
        return g[++m] = function() {
            s("function" == typeof e ? e : Function(e), t)
        }, n(m), m
    }, h = function(e) {
        delete g[e]
    }, "process" == r(13)(p) ? n = function(e) {
        p.nextTick(i(b, e, 1))
    } : v && v.now ? n = function(e) {
        v.now(i(b, e, 1))
    } : d ? (o = new d, a = o.port2, o.port1.onmessage = y, n = i(a.postMessage, a, 1)) : l.addEventListener && "function" == typeof postMessage && !l.importScripts ? (n = function(e) {
        l.postMessage(e + "", "*")
    }, l.addEventListener("message", y, !1)) : n = "onreadystatechange" in c("script") ? function(e) {
        u.appendChild(c("script")).onreadystatechange = function() {
            u.removeChild(this), b.call(e)
        }
    } : function(e) {
        setTimeout(i(b, e, 1), 0)
    }), e.exports = {
        set: f,
        clear: h
    }
}, function(e, t, r) {
    var n = r(27),
        o = r(1)("iterator"),
        a = r(15);
    e.exports = r(5).getIteratorMethod = function(e) {
        if (void 0 != e) return e[o] || e["@@iterator"] || a[n(e)]
    }
}, function(e, t, r) {
    "use strict";
    var n = r(143)(!0);
    r(51)(String, "String", function(e) {
        this._t = String(e), this._i = 0
    }, function() {
        var e, t = this._t,
            r = this._i;
        return r >= t.length ? {
            value: void 0,
            done: !0
        } : (e = n(t, r), this._i += e.length, {
            value: e,
            done: !1
        })
    })
}, , , , , , function(e, t, r) {
    "use strict";

    function _interopRequireDefault(e) {
        return e && e.__esModule ? e : {
            default: e
        }
    }

    function HandlebarsEnvironment(e, t, r) {
        this.helpers = e || {}, this.partials = t || {}, this.decorators = r || {}, i.registerDefaultHelpers(this), s.registerDefaultDecorators(this)
    }
    t.__esModule = !0, t.HandlebarsEnvironment = HandlebarsEnvironment;
    var n = r(4),
        o = r(18),
        a = _interopRequireDefault(o),
        i = r(163),
        s = r(161),
        u = r(171),
        c = _interopRequireDefault(u);
    t.VERSION = "4.0.12";
    t.COMPILER_REVISION = 7;
    var l = {
        1: "<= 1.0.rc.2",
        2: "== 1.0.0-rc.3",
        3: "== 1.0.0-rc.4",
        4: "== 1.x.x",
        5: "== 2.0.0-alpha.x",
        6: ">= 2.0.0-beta.1",
        7: ">= 4.0.0"
    };
    t.REVISION_CHANGES = l;
    HandlebarsEnvironment.prototype = {
        constructor: HandlebarsEnvironment,
        logger: c.default,
        log: c.default.log,
        registerHelper: function(e, t) {
            if ("[object Object]" === n.toString.call(e)) {
                if (t) throw new a.default("Arg not supported with multiple helpers");
                n.extend(this.helpers, e)
            } else this.helpers[e] = t
        },
        unregisterHelper: function(e) {
            delete this.helpers[e]
        },
        registerPartial: function(e, t) {
            if ("[object Object]" === n.toString.call(e)) n.extend(this.partials, e);
            else {
                if (void 0 === t) throw new a.default('Attempting to register a partial called "' + e + '" as undefined');
                this.partials[e] = t
            }
        },
        unregisterPartial: function(e) {
            delete this.partials[e]
        },
        registerDecorator: function(e, t) {
            if ("[object Object]" === n.toString.call(e)) {
                if (t) throw new a.default("Arg not supported with multiple decorators");
                n.extend(this.decorators, e)
            } else this.decorators[e] = t
        },
        unregisterDecorator: function(e) {
            delete this.decorators[e]
        }
    };
    var p = c.default.log;
    t.log = p, t.createFrame = n.createFrame, t.logger = c.default
}, function(e, t) {
    function defaultSetTimout() {
        throw new Error("setTimeout has not been defined")
    }

    function defaultClearTimeout() {
        throw new Error("clearTimeout has not been defined")
    }

    function runTimeout(e) {
        if (r === setTimeout) return setTimeout(e, 0);
        if ((r === defaultSetTimout || !r) && setTimeout) return r = setTimeout, setTimeout(e, 0);
        try {
            return r(e, 0)
        } catch (t) {
            try {
                return r.call(null, e, 0)
            } catch (t) {
                return r.call(this, e, 0)
            }
        }
    }

    function runClearTimeout(e) {
        if (n === clearTimeout) return clearTimeout(e);
        if ((n === defaultClearTimeout || !n) && clearTimeout) return n = clearTimeout, clearTimeout(e);
        try {
            return n(e)
        } catch (t) {
            try {
                return n.call(null, e)
            } catch (t) {
                return n.call(this, e)
            }
        }
    }

    function cleanUpNextTick() {
        s && a && (s = !1, a.length ? i = a.concat(i) : u = -1, i.length && drainQueue())
    }

    function drainQueue() {
        if (!s) {
            var e = runTimeout(cleanUpNextTick);
            s = !0;
            for (var t = i.length; t;) {
                for (a = i, i = []; ++u < t;) a && a[u].run();
                u = -1, t = i.length
            }
            a = null, s = !1, runClearTimeout(e)
        }
    }

    function Item(e, t) {
        this.fun = e, this.array = t
    }

    function noop() {}
    var r, n, o = e.exports = {};
    ! function() {
        try {
            r = "function" == typeof setTimeout ? setTimeout : defaultSetTimout
        } catch (e) {
            r = defaultSetTimout
        }
        try {
            n = "function" == typeof clearTimeout ? clearTimeout : defaultClearTimeout
        } catch (e) {
            n = defaultClearTimeout
        }
    }();
    var a, i = [],
        s = !1,
        u = -1;
    o.nextTick = function(e) {
        var t = new Array(arguments.length - 1);
        if (arguments.length > 1)
            for (var r = 1; r < arguments.length; r++) t[r - 1] = arguments[r];
        i.push(new Item(e, t)), 1 !== i.length || s || runTimeout(drainQueue)
    }, Item.prototype.run = function() {
        this.fun.apply(null, this.array)
    }, o.title = "browser", o.browser = !0, o.env = {}, o.argv = [], o.version = "", o.versions = {}, o.on = noop, o.addListener = noop, o.once = noop, o.off = noop, o.removeListener = noop, o.removeAllListeners = noop, o.emit = noop, o.prependListener = noop, o.prependOnceListener = noop, o.listeners = function(e) {
        return []
    }, o.binding = function(e) {
        throw new Error("process.binding is not supported")
    }, o.cwd = function() {
        return "/"
    }, o.chdir = function(e) {
        throw new Error("process.chdir is not supported")
    }, o.umask = function() {
        return 0
    }
}, , , , , , , , , , , , , , , , , function(e, t, r) {
    r(150), r(58), r(152), r(151), e.exports = r(5).Promise
}, function(e, t, r) {
    r(147), e.exports = r(5).Array.forEach
}, function(e, t, r) {
    r(58), r(148), e.exports = r(5).Array.from
}, function(e, t, r) {
    "use strict";

    function createInstance(e) {
        var t = new a(e),
            r = o(a.prototype.request, t);
        return n.extend(r, a.prototype, t), n.extend(r, t), r
    }
    var n = r(2),
        o = r(44),
        a = r(87),
        i = r(25),
        s = createInstance(i);
    s.Axios = a, s.create = function(e) {
        return createInstance(n.merge(i, e))
    }, s.Cancel = r(41), s.CancelToken = r(86), s.isCancel = r(42), s.all = function(e) {
        return Promise.all(e)
    }, s.spread = r(101), e.exports = s, e.exports.default = s
}, function(e, t, r) {
    "use strict";

    function CancelToken(e) {
        if ("function" != typeof e) throw new TypeError("executor must be a function.");
        var t;
        this.promise = new Promise(function(e) {
            t = e
        });
        var r = this;
        e(function(e) {
            r.reason || (r.reason = new n(e), t(r.reason))
        })
    }
    var n = r(41);
    CancelToken.prototype.throwIfRequested = function() {
        if (this.reason) throw this.reason
    }, CancelToken.source = function() {
        var e;
        return {
            token: new CancelToken(function(t) {
                e = t
            }),
            cancel: e
        }
    }, e.exports = CancelToken
}, function(e, t, r) {
    "use strict";

    function Axios(e) {
        this.defaults = e, this.interceptors = {
            request: new a,
            response: new a
        }
    }
    var n = r(25),
        o = r(2),
        a = r(88),
        i = r(89),
        s = r(97),
        u = r(95);
    Axios.prototype.request = function(e) {
        "string" == typeof e && (e = o.merge({
            url: arguments[0]
        }, arguments[1])), e = o.merge(n, this.defaults, {
            method: "get"
        }, e), e.method = e.method.toLowerCase(), e.baseURL && !s(e.url) && (e.url = u(e.baseURL, e.url));
        var t = [i, void 0],
            r = Promise.resolve(e);
        for (this.interceptors.request.forEach(function(e) {
                t.unshift(e.fulfilled, e.rejected)
            }), this.interceptors.response.forEach(function(e) {
                t.push(e.fulfilled, e.rejected)
            }); t.length;) r = r.then(t.shift(), t.shift());
        return r
    }, o.forEach(["delete", "get", "head", "options"], function(e) {
        Axios.prototype[e] = function(t, r) {
            return this.request(o.merge(r || {}, {
                method: e,
                url: t
            }))
        }
    }), o.forEach(["post", "put", "patch"], function(e) {
        Axios.prototype[e] = function(t, r, n) {
            return this.request(o.merge(n || {}, {
                method: e,
                url: t,
                data: r
            }))
        }
    }), e.exports = Axios
}, function(e, t, r) {
    "use strict";

    function InterceptorManager() {
        this.handlers = []
    }
    var n = r(2);
    InterceptorManager.prototype.use = function(e, t) {
        return this.handlers.push({
            fulfilled: e,
            rejected: t
        }), this.handlers.length - 1
    }, InterceptorManager.prototype.eject = function(e) {
        this.handlers[e] && (this.handlers[e] = null)
    }, InterceptorManager.prototype.forEach = function(e) {
        n.forEach(this.handlers, function(t) {
            null !== t && e(t)
        })
    }, e.exports = InterceptorManager
}, function(e, t, r) {
    "use strict";

    function throwIfCancellationRequested(e) {
        e.cancelToken && e.cancelToken.throwIfRequested()
    }
    var n = r(2),
        o = r(92),
        a = r(42),
        i = r(25);
    e.exports = function(e) {
        return throwIfCancellationRequested(e), e.headers = e.headers || {}, e.data = o(e.data, e.headers, e.transformRequest), e.headers = n.merge(e.headers.common || {}, e.headers[e.method] || {}, e.headers || {}), n.forEach(["delete", "get", "head", "post", "put", "patch", "common"], function(t) {
            delete e.headers[t]
        }), (e.adapter || i.adapter)(e).then(function(t) {
            return throwIfCancellationRequested(e), t.data = o(t.data, t.headers, e.transformResponse), t
        }, function(t) {
            return a(t) || (throwIfCancellationRequested(e), t && t.response && (t.response.data = o(t.response.data, t.response.headers, e.transformResponse))), Promise.reject(t)
        })
    }
}, function(e, t, r) {
    "use strict";
    e.exports = function(e, t, r, n, o) {
        return e.config = t, r && (e.code = r), e.request = n, e.response = o, e
    }
}, function(e, t, r) {
    "use strict";
    var n = r(43);
    e.exports = function(e, t, r) {
        var o = r.config.validateStatus;
        r.status && o && !o(r.status) ? t(n("Request failed with status code " + r.status, r.config, null, r.request, r)) : e(r)
    }
}, function(e, t, r) {
    "use strict";
    var n = r(2);
    e.exports = function(e, t, r) {
        return n.forEach(r, function(r) {
            e = r(e, t)
        }), e
    }
}, function(e, t, r) {
    "use strict";

    function E() {
        this.message = "String contains an invalid character"
    }

    function btoa(e) {
        for (var t, r, o = String(e), a = "", i = 0, s = n; o.charAt(0 | i) || (s = "=", i % 1); a += s.charAt(63 & t >> 8 - i % 1 * 8)) {
            if ((r = o.charCodeAt(i += .75)) > 255) throw new E;
            t = t << 8 | r
        }
        return a
    }
    var n = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=";
    E.prototype = new Error, E.prototype.code = 5, E.prototype.name = "InvalidCharacterError", e.exports = btoa
}, function(e, t, r) {
    "use strict";

    function encode(e) {
        return encodeURIComponent(e).replace(/%40/gi, "@").replace(/%3A/gi, ":").replace(/%24/g, "$").replace(/%2C/gi, ",").replace(/%20/g, "+").replace(/%5B/gi, "[").replace(/%5D/gi, "]")
    }
    var n = r(2);
    e.exports = function(e, t, r) {
        if (!t) return e;
        var o;
        if (r) o = r(t);
        else if (n.isURLSearchParams(t)) o = t.toString();
        else {
            var a = [];
            n.forEach(t, function(e, t) {
                null !== e && void 0 !== e && (n.isArray(e) && (t += "[]"), n.isArray(e) || (e = [e]), n.forEach(e, function(e) {
                    n.isDate(e) ? e = e.toISOString() : n.isObject(e) && (e = JSON.stringify(e)), a.push(encode(t) + "=" + encode(e))
                }))
            }), o = a.join("&")
        }
        return o && (e += (-1 === e.indexOf("?") ? "?" : "&") + o), e
    }
}, function(e, t, r) {
    "use strict";
    e.exports = function(e, t) {
        return t ? e.replace(/\/+$/, "") + "/" + t.replace(/^\/+/, "") : e
    }
}, function(e, t, r) {
    "use strict";
    var n = r(2);
    e.exports = n.isStandardBrowserEnv() ? function() {
        return {
            write: function(e, t, r, o, a, i) {
                var s = [];
                s.push(e + "=" + encodeURIComponent(t)), n.isNumber(r) && s.push("expires=" + new Date(r).toGMTString()), n.isString(o) && s.push("path=" + o), n.isString(a) && s.push("domain=" + a), !0 === i && s.push("secure"), document.cookie = s.join("; ")
            },
            read: function(e) {
                var t = document.cookie.match(new RegExp("(^|;\\s*)(" + e + ")=([^;]*)"));
                return t ? decodeURIComponent(t[3]) : null
            },
            remove: function(e) {
                this.write(e, "", Date.now() - 864e5)
            }
        }
    }() : function() {
        return {
            write: function() {},
            read: function() {
                return null
            },
            remove: function() {}
        }
    }()
}, function(e, t, r) {
    "use strict";
    e.exports = function(e) {
        return /^([a-z][a-z\d\+\-\.]*:)?\/\//i.test(e)
    }
}, function(e, t, r) {
    "use strict";
    var n = r(2);
    e.exports = n.isStandardBrowserEnv() ? function() {
        function resolveURL(e) {
            var n = e;
            return t && (r.setAttribute("href", n), n = r.href), r.setAttribute("href", n), {
                href: r.href,
                protocol: r.protocol ? r.protocol.replace(/:$/, "") : "",
                host: r.host,
                search: r.search ? r.search.replace(/^\?/, "") : "",
                hash: r.hash ? r.hash.replace(/^#/, "") : "",
                hostname: r.hostname,
                port: r.port,
                pathname: "/" === r.pathname.charAt(0) ? r.pathname : "/" + r.pathname
            }
        }
        var e, t = /(msie|trident)/i.test(navigator.userAgent),
            r = document.createElement("a");
        return e = resolveURL(window.location.href),
            function(t) {
                var r = n.isString(t) ? resolveURL(t) : t;
                return r.protocol === e.protocol && r.host === e.host
            }
    }() : function() {
        return function() {
            return !0
        }
    }()
}, function(e, t, r) {
    "use strict";
    var n = r(2);
    e.exports = function(e, t) {
        n.forEach(e, function(r, n) {
            n !== t && n.toUpperCase() === t.toUpperCase() && (e[t] = r, delete e[n])
        })
    }
}, function(e, t, r) {
    "use strict";
    var n = r(2);
    e.exports = function(e) {
        var t, r, o, a = {};
        return e ? (n.forEach(e.split("\n"), function(e) {
            o = e.indexOf(":"), t = n.trim(e.substr(0, o)).toLowerCase(), r = n.trim(e.substr(o + 1)), t && (a[t] = a[t] ? a[t] + ", " + r : r)
        }), a) : a
    }
}, function(e, t, r) {
    "use strict";
    e.exports = function(e) {
        return function(t) {
            return e.apply(null, t)
        }
    }
}, , , , , , , , , , , , , , , , , , function(e, t, r) {
    var n = r(1)("unscopables"),
        o = Array.prototype;
    void 0 == o[n] && r(11)(o, n, {}), e.exports = function(e) {
        o[n][e] = !0
    }
}, function(e, t) {
    e.exports = function(e, t, r, n) {
        if (!(e instanceof t) || void 0 !== n && n in e) throw TypeError(r + ": incorrect invocation!");
        return e
    }
}, function(e, t, r) {
    var n = r(36),
        o = r(23),
        a = r(144);
    e.exports = function(e) {
        return function(t, r, i) {
            var s, u = n(t),
                c = o(u.length),
                l = a(i, c);
            if (e && r != r) {
                for (; c > l;)
                    if ((s = u[l++]) != s) return !0
            } else
                for (; c > l; l++)
                    if ((e || l in u) && u[l] === r) return e || l || 0;
            return !e && -1
        }
    }
}, function(e, t, r) {
    var n = r(10),
        o = r(48),
        a = r(37),
        i = r(23),
        s = r(124);
    e.exports = function(e, t) {
        var r = 1 == e,
            u = 2 == e,
            c = 3 == e,
            l = 4 == e,
            p = 6 == e,
            f = 5 == e || p,
            h = t || s;
        return function(t, s, d) {
            for (var v, m, g = a(t), b = o(g), y = n(s, d, 3), x = i(b.length), w = 0, _ = r ? h(t, x) : u ? h(t, 0) : void 0; x > w; w++)
                if ((f || w in b) && (v = b[w], m = y(v, w, g), e))
                    if (r) _[w] = m;
                    else if (m) switch (e) {
                case 3:
                    return !0;
                case 5:
                    return v;
                case 6:
                    return w;
                case 2:
                    _.push(v)
            } else if (l) return !1;
            return p ? -1 : c || l ? l : _
        }
    }
}, function(e, t, r) {
    var n = r(12),
        o = r(129),
        a = r(1)("species");
    e.exports = function(e) {
        var t;
        return o(e) && (t = e.constructor, "function" != typeof t || t !== Array && !o(t.prototype) || (t = void 0), n(t) && null === (t = t[a]) && (t = void 0)), void 0 === t ? Array : t
    }
}, function(e, t, r) {
    var n = r(123);
    e.exports = function(e, t) {
        return new(n(e))(t)
    }
}, function(e, t, r) {
    "use strict";
    var n = r(16),
        o = r(32);
    e.exports = function(e, t, r) {
        t in e ? n.f(e, t, o(0, r)) : e[t] = r
    }
}, function(e, t, r) {
    var n = r(10),
        o = r(50),
        a = r(49),
        i = r(7),
        s = r(23),
        u = r(57),
        c = {},
        l = {},
        t = e.exports = function(e, t, r, p, f) {
            var h, d, v, m, g = f ? function() {
                    return e
                } : u(e),
                b = n(r, p, t ? 2 : 1),
                y = 0;
            if ("function" != typeof g) throw TypeError(e + " is not iterable!");
            if (a(g)) {
                for (h = s(e.length); h > y; y++)
                    if ((m = t ? b(i(d = e[y])[0], d[1]) : b(e[y])) === c || m === l) return m
            } else
                for (v = g.call(e); !(d = v.next()).done;)
                    if ((m = o(v, b, d.value, t)) === c || m === l) return m
        };
    t.BREAK = c, t.RETURN = l
}, function(e, t, r) {
    e.exports = !r(14) && !r(30)(function() {
        return 7 != Object.defineProperty(r(29)("div"), "a", {
            get: function() {
                return 7
            }
        }).a
    })
}, function(e, t) {
    e.exports = function(e, t, r) {
        var n = void 0 === r;
        switch (t.length) {
            case 0:
                return n ? e() : e.call(r);
            case 1:
                return n ? e(t[0]) : e.call(r, t[0]);
            case 2:
                return n ? e(t[0], t[1]) : e.call(r, t[0], t[1]);
            case 3:
                return n ? e(t[0], t[1], t[2]) : e.call(r, t[0], t[1], t[2]);
            case 4:
                return n ? e(t[0], t[1], t[2], t[3]) : e.call(r, t[0], t[1], t[2], t[3])
        }
        return e.apply(r, t)
    }
}, function(e, t, r) {
    var n = r(13);
    e.exports = Array.isArray || function(e) {
        return "Array" == n(e)
    }
}, function(e, t, r) {
    "use strict";
    var n = r(133),
        o = r(32),
        a = r(33),
        i = {};
    r(11)(i, r(1)("iterator"), function() {
        return this
    }), e.exports = function(e, t, r) {
        e.prototype = n(i, {
            next: o(1, r)
        }), a(e, t + " Iterator")
    }
}, function(e, t) {
    e.exports = function(e, t) {
        return {
            value: t,
            done: !!e
        }
    }
}, function(e, t, r) {
    var n = r(3),
        o = r(56).set,
        a = n.MutationObserver || n.WebKitMutationObserver,
        i = n.process,
        s = n.Promise,
        u = "process" == r(13)(i);
    e.exports = function() {
        var e, t, r, c = function() {
            var n, o;
            for (u && (n = i.domain) && n.exit(); e;) {
                o = e.fn, e = e.next;
                try {
                    o()
                } catch (n) {
                    throw e ? r() : t = void 0, n
                }
            }
            t = void 0, n && n.enter()
        };
        if (u) r = function() {
            i.nextTick(c)
        };
        else if (!a || n.navigator && n.navigator.standalone)
            if (s && s.resolve) {
                var l = s.resolve(void 0);
                r = function() {
                    l.then(c)
                }
            } else r = function() {
                o.call(n, c)
            };
        else {
            var p = !0,
                f = document.createTextNode("");
            new a(c).observe(f, {
                characterData: !0
            }), r = function() {
                f.data = p = !p
            }
        }
        return function(n) {
            var o = {
                fn: n,
                next: void 0
            };
            t && (t.next = o), e || (e = o, r()), t = o
        }
    }
}, function(e, t, r) {
    var n = r(7),
        o = r(134),
        a = r(46),
        i = r(34)("IE_PROTO"),
        s = function() {},
        u = function() {
            var e, t = r(29)("iframe"),
                n = a.length;
            for (t.style.display = "none", r(47).appendChild(t), t.src = "javascript:", e = t.contentWindow.document, e.open(), e.write("<script>document.F=Object<\/script>"), e.close(), u = e.F; n--;) delete u.prototype[a[n]];
            return u()
        };
    e.exports = Object.create || function(e, t) {
        var r;
        return null !== e ? (s.prototype = n(e), r = new s, s.prototype = null, r[i] = e) : r = u(), void 0 === t ? r : o(r, t)
    }
}, function(e, t, r) {
    var n = r(16),
        o = r(7),
        a = r(54);
    e.exports = r(14) ? Object.defineProperties : function(e, t) {
        o(e);
        for (var r, i = a(t), s = i.length, u = 0; s > u;) n.f(e, r = i[u++], t[r]);
        return e
    }
}, function(e, t, r) {
    var n = r(22),
        o = r(37),
        a = r(34)("IE_PROTO"),
        i = Object.prototype;
    e.exports = Object.getPrototypeOf || function(e) {
        return e = o(e), n(e, a) ? e[a] : "function" == typeof e.constructor && e instanceof e.constructor ? e.constructor.prototype : e instanceof Object ? i : null
    }
}, function(e, t, r) {
    var n = r(22),
        o = r(36),
        a = r(121)(!1),
        i = r(34)("IE_PROTO");
    e.exports = function(e, t) {
        var r, s = o(e),
            u = 0,
            c = [];
        for (r in s) r != i && n(s, r) && c.push(r);
        for (; t.length > u;) n(s, r = t[u++]) && (~a(c, r) || c.push(r));
        return c
    }
}, function(e, t) {
    e.exports = function(e) {
        try {
            return {
                e: !1,
                v: e()
            }
        } catch (e) {
            return {
                e: !0,
                v: e
            }
        }
    }
}, function(e, t, r) {
    var n = r(7),
        o = r(12),
        a = r(53);
    e.exports = function(e, t) {
        if (n(e), o(t) && t.constructor === e) return t;
        var r = a.f(e);
        return (0, r.resolve)(t), r.promise
    }
}, function(e, t, r) {
    var n = r(17);
    e.exports = function(e, t, r) {
        for (var o in t) n(e, o, t[o], r);
        return e
    }
}, function(e, t, r) {
    "use strict";
    var n = r(3),
        o = r(16),
        a = r(14),
        i = r(1)("species");
    e.exports = function(e) {
        var t = n[e];
        a && t && !t[i] && o.f(t, i, {
            configurable: !0,
            get: function() {
                return this
            }
        })
    }
}, function(e, t, r) {
    var n = r(7),
        o = r(20),
        a = r(1)("species");
    e.exports = function(e, t) {
        var r, i = n(e).constructor;
        return void 0 === i || void 0 == (r = n(i)[a]) ? t : o(r)
    }
}, function(e, t, r) {
    "use strict";
    var n = r(30);
    e.exports = function(e, t) {
        return !!e && n(function() {
            t ? e.call(null, function() {}, 1) : e.call(null)
        })
    }
}, function(e, t, r) {
    var n = r(35),
        o = r(28);
    e.exports = function(e) {
        return function(t, r) {
            var a, i, s = String(o(t)),
                u = n(r),
                c = s.length;
            return u < 0 || u >= c ? e ? "" : void 0 : (a = s.charCodeAt(u), a < 55296 || a > 56319 || u + 1 === c || (i = s.charCodeAt(u + 1)) < 56320 || i > 57343 ? e ? s.charAt(u) : a : e ? s.slice(u, u + 2) : i - 56320 + (a - 55296 << 10) + 65536)
        }
    }
}, function(e, t, r) {
    var n = r(35),
        o = Math.max,
        a = Math.min;
    e.exports = function(e, t) {
        return e = n(e), e < 0 ? o(e + t, 0) : a(e, t)
    }
}, function(e, t, r) {
    var n = r(12);
    e.exports = function(e, t) {
        if (!n(e)) return e;
        var r, o;
        if (t && "function" == typeof(r = e.toString) && !n(o = r.call(e))) return o;
        if ("function" == typeof(r = e.valueOf) && !n(o = r.call(e))) return o;
        if (!t && "function" == typeof(r = e.toString) && !n(o = r.call(e))) return o;
        throw TypeError("Can't convert object to primitive value")
    }
}, function(e, t, r) {
    var n = r(3),
        o = n.navigator;
    e.exports = o && o.userAgent || ""
}, function(e, t, r) {
    "use strict";
    var n = r(21),
        o = r(122)(0),
        a = r(142)([].forEach, !0);
    n(n.P + n.F * !a, "Array", {
        forEach: function(e) {
            return o(this, e, arguments[1])
        }
    })
}, function(e, t, r) {
    "use strict";
    var n = r(10),
        o = r(21),
        a = r(37),
        i = r(50),
        s = r(49),
        u = r(23),
        c = r(125),
        l = r(57);
    o(o.S + o.F * !r(52)(function(e) {
        Array.from(e)
    }), "Array", {
        from: function(e) {
            var t, r, o, p, f = a(e),
                h = "function" == typeof this ? this : Array,
                d = arguments.length,
                v = d > 1 ? arguments[1] : void 0,
                m = void 0 !== v,
                g = 0,
                b = l(f);
            if (m && (v = n(v, d > 2 ? arguments[2] : void 0, 2)), void 0 == b || h == Array && s(b))
                for (t = u(f.length), r = new h(t); t > g; g++) c(r, g, m ? v(f[g], g) : f[g]);
            else
                for (p = b.call(f), r = new h; !(o = p.next()).done; g++) c(r, g, m ? i(p, v, [o.value, g], !0) : o.value);
            return r.length = g, r
        }
    })
}, function(e, t, r) {
    "use strict";
    var n = r(119),
        o = r(131),
        a = r(15),
        i = r(36);
    e.exports = r(51)(Array, "Array", function(e, t) {
        this._t = i(e), this._i = 0, this._k = t
    }, function() {
        var e = this._t,
            t = this._k,
            r = this._i++;
        return !e || r >= e.length ? (this._t = void 0, o(1)) : "keys" == t ? o(0, r) : "values" == t ? o(0, e[r]) : o(0, [r, e[r]])
    }, "values"), a.Arguments = a.Array, n("keys"), n("values"), n("entries")
}, function(e, t, r) {
    "use strict";
    var n = r(27),
        o = {};
    o[r(1)("toStringTag")] = "z", o + "" != "[object z]" && r(17)(Object.prototype, "toString", function() {
        return "[object " + n(this) + "]"
    }, !0)
}, function(e, t, r) {
    "use strict";
    var n, o, a, i, s = r(31),
        u = r(3),
        c = r(10),
        l = r(27),
        p = r(21),
        f = r(12),
        h = r(20),
        d = r(120),
        v = r(126),
        m = r(141),
        g = r(56).set,
        b = r(132)(),
        y = r(53),
        x = r(137),
        w = r(146),
        _ = r(138),
        k = u.TypeError,
        S = u.process,
        j = S && S.versions,
        E = j && j.v8 || "",
        T = u.Promise,
        P = "process" == l(S),
        R = function() {},
        A = o = y.f,
        M = !! function() {
            try {
                var e = T.resolve(1),
                    t = (e.constructor = {})[r(1)("species")] = function(e) {
                        e(R, R)
                    };
                return (P || "function" == typeof PromiseRejectionEvent) && e.then(R) instanceof t && 0 !== E.indexOf("6.6") && -1 === w.indexOf("Chrome/66")
            } catch (e) {}
        }(),
        C = function(e) {
            var t;
            return !(!f(e) || "function" != typeof(t = e.then)) && t
        },
        O = function(e, t) {
            if (!e._n) {
                e._n = !0;
                var r = e._c;
                b(function() {
                    for (var n = e._v, o = 1 == e._s, a = 0; r.length > a;) ! function(t) {
                        var r, a, i, s = o ? t.ok : t.fail,
                            u = t.resolve,
                            c = t.reject,
                            l = t.domain;
                        try {
                            s ? (o || (2 == e._h && L(e), e._h = 1), !0 === s ? r = n : (l && l.enter(), r = s(n), l && (l.exit(), i = !0)), r === t.promise ? c(k("Promise-chain cycle")) : (a = C(r)) ? a.call(r, u, c) : u(r)) : c(n)
                        } catch (e) {
                            l && !i && l.exit(), c(e)
                        }
                    }(r[a++]);
                    e._c = [], e._n = !1, t && !e._h && F(e)
                })
            }
        },
        F = function(e) {
            g.call(u, function() {
                var t, r, n, o = e._v,
                    a = B(e);
                if (a && (t = x(function() {
                        P ? S.emit("unhandledRejection", o, e) : (r = u.onunhandledrejection) ? r({
                            promise: e,
                            reason: o
                        }) : (n = u.console) && n.error && n.error("Unhandled promise rejection", o)
                    }), e._h = P || B(e) ? 2 : 1), e._a = void 0, a && t.e) throw t.v
            })
        },
        B = function(e) {
            return 1 !== e._h && 0 === (e._a || e._c).length
        },
        L = function(e) {
            g.call(u, function() {
                var t;
                P ? S.emit("rejectionHandled", e) : (t = u.onrejectionhandled) && t({
                    promise: e,
                    reason: e._v
                })
            })
        },
        q = function(e) {
            var t = this;
            t._d || (t._d = !0, t = t._w || t, t._v = e, t._s = 2, t._a || (t._a = t._c.slice()), O(t, !0))
        },
        D = function(e) {
            var t, r = this;
            if (!r._d) {
                r._d = !0, r = r._w || r;
                try {
                    if (r === e) throw k("Promise can't be resolved itself");
                    (t = C(e)) ? b(function() {
                        var n = {
                            _w: r,
                            _d: !1
                        };
                        try {
                            t.call(e, c(D, n, 1), c(q, n, 1))
                        } catch (e) {
                            q.call(n, e)
                        }
                    }): (r._v = e, r._s = 1, O(r, !1))
                } catch (e) {
                    q.call({
                        _w: r,
                        _d: !1
                    }, e)
                }
            }
        };
    M || (T = function(e) {
        d(this, T, "Promise", "_h"), h(e), n.call(this);
        try {
            e(c(D, this, 1), c(q, this, 1))
        } catch (e) {
            q.call(this, e)
        }
    }, n = function(e) {
        this._c = [], this._a = void 0, this._s = 0, this._d = !1, this._v = void 0, this._h = 0, this._n = !1
    }, n.prototype = r(139)(T.prototype, {
        then: function(e, t) {
            var r = A(m(this, T));
            return r.ok = "function" != typeof e || e, r.fail = "function" == typeof t && t, r.domain = P ? S.domain : void 0, this._c.push(r), this._a && this._a.push(r), this._s && O(this, !1), r.promise
        },
        catch: function(e) {
            return this.then(void 0, e)
        }
    }), a = function() {
        var e = new n;
        this.promise = e, this.resolve = c(D, e, 1), this.reject = c(q, e, 1)
    }, y.f = A = function(e) {
        return e === T || e === i ? new a(e) : o(e)
    }), p(p.G + p.W + p.F * !M, {
        Promise: T
    }), r(33)(T, "Promise"), r(140)("Promise"), i = r(5).Promise, p(p.S + p.F * !M, "Promise", {
        reject: function(e) {
            var t = A(this);
            return (0, t.reject)(e), t.promise
        }
    }), p(p.S + p.F * (s || !M), "Promise", {
        resolve: function(e) {
            return _(s && this === i ? T : this, e)
        }
    }), p(p.S + p.F * !(M && r(52)(function(e) {
        T.all(e).catch(R)
    })), "Promise", {
        all: function(e) {
            var t = this,
                r = A(t),
                n = r.resolve,
                o = r.reject,
                a = x(function() {
                    var r = [],
                        a = 0,
                        i = 1;
                    v(e, !1, function(e) {
                        var s = a++,
                            u = !1;
                        r.push(void 0), i++, t.resolve(e).then(function(e) {
                            u || (u = !0, r[s] = e, --i || n(r))
                        }, o)
                    }), --i || n(r)
                });
            return a.e && o(a.v), r.promise
        },
        race: function(e) {
            var t = this,
                r = A(t),
                n = r.reject,
                o = x(function() {
                    v(e, !1, function(e) {
                        t.resolve(e).then(r.resolve, n)
                    })
                });
            return o.e && n(o.v), r.promise
        }
    })
}, function(e, t, r) {
    for (var n = r(149), o = r(54), a = r(17), i = r(3), s = r(11), u = r(15), c = r(1), l = c("iterator"), p = c("toStringTag"), f = u.Array, h = {
            CSSRuleList: !0,
            CSSStyleDeclaration: !1,
            CSSValueList: !1,
            ClientRectList: !1,
            DOMRectList: !1,
            DOMStringList: !1,
            DOMTokenList: !0,
            DataTransferItemList: !1,
            FileList: !1,
            HTMLAllCollection: !1,
            HTMLCollection: !1,
            HTMLFormElement: !1,
            HTMLSelectElement: !1,
            MediaList: !0,
            MimeTypeArray: !1,
            NamedNodeMap: !1,
            NodeList: !0,
            PaintRequestList: !1,
            Plugin: !1,
            PluginArray: !1,
            SVGLengthList: !1,
            SVGNumberList: !1,
            SVGPathSegList: !1,
            SVGPointList: !1,
            SVGStringList: !1,
            SVGTransformList: !1,
            SourceBufferList: !1,
            StyleSheetList: !0,
            TextTrackCueList: !1,
            TextTrackList: !1,
            TouchList: !1
        }, d = o(h), v = 0; v < d.length; v++) {
        var m, g = d[v],
            b = h[g],
            y = i[g],
            x = y && y.prototype;
        if (x && (x[l] || s(x, l, f), x[p] || s(x, p, g), u[g] = f, b))
            for (m in n) x[m] || a(x, m, n[m], !0)
    }
}, , , , , , , , function(e, t, r) {
    "use strict";

    function _interopRequireDefault(e) {
        return e && e.__esModule ? e : {
            default: e
        }
    }

    function _interopRequireWildcard(e) {
        if (e && e.__esModule) return e;
        var t = {};
        if (null != e)
            for (var r in e) Object.prototype.hasOwnProperty.call(e, r) && (t[r] = e[r]);
        return t.default = e, t
    }

    function create() {
        var e = new o.HandlebarsEnvironment;
        return l.extend(e, o), e.SafeString = i.default, e.Exception = u.default, e.Utils = l, e.escapeExpression = l.escapeExpression, e.VM = f, e.template = function(t) {
            return f.template(t, e)
        }, e
    }
    t.__esModule = !0;
    var n = r(64),
        o = _interopRequireWildcard(n),
        a = r(174),
        i = _interopRequireDefault(a),
        s = r(18),
        u = _interopRequireDefault(s),
        c = r(4),
        l = _interopRequireWildcard(c),
        p = r(173),
        f = _interopRequireWildcard(p),
        h = r(172),
        d = _interopRequireDefault(h),
        v = create();
    v.create = create, d.default(v), v.default = v, t.default = v, e.exports = t.default
}, function(e, t, r) {
    "use strict";

    function registerDefaultDecorators(e) {
        o.default(e)
    }
    t.__esModule = !0, t.registerDefaultDecorators = registerDefaultDecorators;
    var n = r(162),
        o = function(e) {
            return e && e.__esModule ? e : {
                default: e
            }
        }(n)
}, function(e, t, r) {
    "use strict";
    t.__esModule = !0;
    var n = r(4);
    t.default = function(e) {
        e.registerDecorator("inline", function(e, t, r, o) {
            var a = e;
            return t.partials || (t.partials = {}, a = function(o, a) {
                var i = r.partials;
                r.partials = n.extend({}, i, t.partials);
                var s = e(o, a);
                return r.partials = i, s
            }), t.partials[o.args[0]] = o.fn, a
        })
    }, e.exports = t.default
}, function(e, t, r) {
    "use strict";

    function _interopRequireDefault(e) {
        return e && e.__esModule ? e : {
            default: e
        }
    }

    function registerDefaultHelpers(e) {
        o.default(e), i.default(e), u.default(e), l.default(e), f.default(e), d.default(e), m.default(e)
    }
    t.__esModule = !0, t.registerDefaultHelpers = registerDefaultHelpers;
    var n = r(164),
        o = _interopRequireDefault(n),
        a = r(165),
        i = _interopRequireDefault(a),
        s = r(166),
        u = _interopRequireDefault(s),
        c = r(167),
        l = _interopRequireDefault(c),
        p = r(168),
        f = _interopRequireDefault(p),
        h = r(169),
        d = _interopRequireDefault(h),
        v = r(170),
        m = _interopRequireDefault(v)
}, function(e, t, r) {
    "use strict";
    t.__esModule = !0;
    var n = r(4);
    t.default = function(e) {
        e.registerHelper("blockHelperMissing", function(t, r) {
            var o = r.inverse,
                a = r.fn;
            if (!0 === t) return a(this);
            if (!1 === t || null == t) return o(this);
            if (n.isArray(t)) return t.length > 0 ? (r.ids && (r.ids = [r.name]), e.helpers.each(t, r)) : o(this);
            if (r.data && r.ids) {
                var i = n.createFrame(r.data);
                i.contextPath = n.appendContextPath(r.data.contextPath, r.name), r = {
                    data: i
                }
            }
            return a(t, r)
        })
    }, e.exports = t.default
}, function(e, t, r) {
    "use strict";
    t.__esModule = !0;
    var n = r(4),
        o = r(18),
        a = function(e) {
            return e && e.__esModule ? e : {
                default: e
            }
        }(o);
    t.default = function(e) {
        e.registerHelper("each", function(e, t) {
            function execIteration(t, o, a) {
                u && (u.key = t, u.index = o, u.first = 0 === o, u.last = !!a, c && (u.contextPath = c + t)), s += r(e[t], {
                    data: u,
                    blockParams: n.blockParams([e[t], t], [c + t, null])
                })
            }
            if (!t) throw new a.default("Must pass iterator to #each");
            var r = t.fn,
                o = t.inverse,
                i = 0,
                s = "",
                u = void 0,
                c = void 0;
            if (t.data && t.ids && (c = n.appendContextPath(t.data.contextPath, t.ids[0]) + "."), n.isFunction(e) && (e = e.call(this)), t.data && (u = n.createFrame(t.data)), e && "object" == typeof e)
                if (n.isArray(e))
                    for (var l = e.length; i < l; i++) i in e && execIteration(i, i, i === e.length - 1);
                else {
                    var p = void 0;
                    for (var f in e) e.hasOwnProperty(f) && (void 0 !== p && execIteration(p, i - 1), p = f, i++);
                    void 0 !== p && execIteration(p, i - 1, !0)
                } return 0 === i && (s = o(this)), s
        })
    }, e.exports = t.default
}, function(e, t, r) {
    "use strict";
    t.__esModule = !0;
    var n = r(18),
        o = function(e) {
            return e && e.__esModule ? e : {
                default: e
            }
        }(n);
    t.default = function(e) {
        e.registerHelper("helperMissing", function() {
            if (1 !== arguments.length) throw new o.default('Missing helper: "' + arguments[arguments.length - 1].name + '"')
        })
    }, e.exports = t.default
}, function(e, t, r) {
    "use strict";
    t.__esModule = !0;
    var n = r(4);
    t.default = function(e) {
        e.registerHelper("if", function(e, t) {
            return n.isFunction(e) && (e = e.call(this)), !t.hash.includeZero && !e || n.isEmpty(e) ? t.inverse(this) : t.fn(this)
        }), e.registerHelper("unless", function(t, r) {
            return e.helpers.if.call(this, t, {
                fn: r.inverse,
                inverse: r.fn,
                hash: r.hash
            })
        })
    }, e.exports = t.default
}, function(e, t, r) {
    "use strict";
    t.__esModule = !0, t.default = function(e) {
        e.registerHelper("log", function() {
            for (var t = [void 0], r = arguments[arguments.length - 1], n = 0; n < arguments.length - 1; n++) t.push(arguments[n]);
            var o = 1;
            null != r.hash.level ? o = r.hash.level : r.data && null != r.data.level && (o = r.data.level), t[0] = o, e.log.apply(e, t)
        })
    }, e.exports = t.default
}, function(e, t, r) {
    "use strict";
    t.__esModule = !0, t.default = function(e) {
        e.registerHelper("lookup", function(e, t) {
            return e && e[t]
        })
    }, e.exports = t.default
}, function(e, t, r) {
    "use strict";
    t.__esModule = !0;
    var n = r(4);
    t.default = function(e) {
        e.registerHelper("with", function(e, t) {
            n.isFunction(e) && (e = e.call(this));
            var r = t.fn;
            if (n.isEmpty(e)) return t.inverse(this);
            var o = t.data;
            return t.data && t.ids && (o = n.createFrame(t.data), o.contextPath = n.appendContextPath(t.data.contextPath, t.ids[0])), r(e, {
                data: o,
                blockParams: n.blockParams([e], [o && o.contextPath])
            })
        })
    }, e.exports = t.default
}, function(e, t, r) {
    "use strict";
    t.__esModule = !0;
    var n = r(4),
        o = {
            methodMap: ["debug", "info", "warn", "error"],
            level: "info",
            lookupLevel: function(e) {
                if ("string" == typeof e) {
                    var t = n.indexOf(o.methodMap, e.toLowerCase());
                    e = t >= 0 ? t : parseInt(e, 10)
                }
                return e
            },
            log: function(e) {
                if (e = o.lookupLevel(e), "undefined" != typeof console && o.lookupLevel(o.level) <= e) {
                    var t = o.methodMap[e];
                    console[t] || (t = "log");
                    for (var r = arguments.length, n = Array(r > 1 ? r - 1 : 0), a = 1; a < r; a++) n[a - 1] = arguments[a];
                    console[t].apply(console, n)
                }
            }
        };
    t.default = o, e.exports = t.default
}, function(e, t, r) {
    "use strict";
    (function(r) {
        t.__esModule = !0, t.default = function(e) {
            var t = void 0 !== r ? r : window,
                n = t.Handlebars;
            e.noConflict = function() {
                return t.Handlebars === e && (t.Handlebars = n), e
            }
        }, e.exports = t.default
    }).call(t, r(178))
}, function(e, t, r) {
    "use strict";

    function checkRevision(e) {
        var t = e && e[0] || 1,
            r = s.COMPILER_REVISION;
        if (t !== r) {
            if (t < r) {
                var n = s.REVISION_CHANGES[r],
                    o = s.REVISION_CHANGES[t];
                throw new i.default("Template was precompiled with an older version of Handlebars than the current runtime. Please update your precompiler to a newer version (" + n + ") or downgrade your runtime to an older version (" + o + ").")
            }
            throw new i.default("Template was precompiled with a newer version of Handlebars than the current runtime. Please update your runtime to a newer version (" + e[1] + ").")
        }
    }

    function template(e, t) {
        function invokePartialWrapper(r, n, a) {
            a.hash && (n = o.extend({}, n, a.hash), a.ids && (a.ids[0] = !0)), r = t.VM.resolvePartial.call(this, r, n, a);
            var s = t.VM.invokePartial.call(this, r, n, a);
            if (null == s && t.compile && (a.partials[a.name] = t.compile(r, e.compilerOptions, t), s = a.partials[a.name](n, a)), null != s) {
                if (a.indent) {
                    for (var u = s.split("\n"), c = 0, l = u.length; c < l && (u[c] || c + 1 !== l); c++) u[c] = a.indent + u[c];
                    s = u.join("\n")
                }
                return s
            }
            throw new i.default("The partial " + a.name + " could not be compiled when running in runtime-only mode")
        }

        function ret(t) {
            function main(t) {
                return "" + e.main(r, t, r.helpers, r.partials, o, i, a)
            }
            var n = arguments.length <= 1 || void 0 === arguments[1] ? {} : arguments[1],
                o = n.data;
            ret._setup(n), !n.partial && e.useData && (o = initData(t, o));
            var a = void 0,
                i = e.useBlockParams ? [] : void 0;
            return e.useDepths && (a = n.depths ? t != n.depths[0] ? [t].concat(n.depths) : n.depths : [t]), (main = executeDecorators(e.main, main, r, n.depths || [], o, i))(t, n)
        }
        if (!t) throw new i.default("No environment passed to template");
        if (!e || !e.main) throw new i.default("Unknown template object: " + typeof e);
        e.main.decorator = e.main_d, t.VM.checkRevision(e.compiler);
        var r = {
            strict: function(e, t) {
                if (!(t in e)) throw new i.default('"' + t + '" not defined in ' + e);
                return e[t]
            },
            lookup: function(e, t) {
                for (var r = e.length, n = 0; n < r; n++)
                    if (e[n] && null != e[n][t]) return e[n][t]
            },
            lambda: function(e, t) {
                return "function" == typeof e ? e.call(t) : e
            },
            escapeExpression: o.escapeExpression,
            invokePartial: invokePartialWrapper,
            fn: function(t) {
                var r = e[t];
                return r.decorator = e[t + "_d"], r
            },
            programs: [],
            program: function(e, t, r, n, o) {
                var a = this.programs[e],
                    i = this.fn(e);
                return t || o || n || r ? a = wrapProgram(this, e, i, t, r, n, o) : a || (a = this.programs[e] = wrapProgram(this, e, i)), a
            },
            data: function(e, t) {
                for (; e && t--;) e = e._parent;
                return e
            },
            merge: function(e, t) {
                var r = e || t;
                return e && t && e !== t && (r = o.extend({}, t, e)), r
            },
            nullContext: Object.seal({}),
            noop: t.VM.noop,
            compilerInfo: e.compiler
        };
        return ret.isTop = !0, ret._setup = function(n) {
            n.partial ? (r.helpers = n.helpers, r.partials = n.partials, r.decorators = n.decorators) : (r.helpers = r.merge(n.helpers, t.helpers), e.usePartial && (r.partials = r.merge(n.partials, t.partials)), (e.usePartial || e.useDecorators) && (r.decorators = r.merge(n.decorators, t.decorators)))
        }, ret._child = function(t, n, o, a) {
            if (e.useBlockParams && !o) throw new i.default("must pass block params");
            if (e.useDepths && !a) throw new i.default("must pass parent depths");
            return wrapProgram(r, t, e[t], n, 0, o, a)
        }, ret
    }

    function wrapProgram(e, t, r, n, o, a, i) {
        function prog(t) {
            var o = arguments.length <= 1 || void 0 === arguments[1] ? {} : arguments[1],
                s = i;
            return !i || t == i[0] || t === e.nullContext && null === i[0] || (s = [t].concat(i)), r(e, t, e.helpers, e.partials, o.data || n, a && [o.blockParams].concat(a), s)
        }
        return prog = executeDecorators(r, prog, e, i, n, a), prog.program = t, prog.depth = i ? i.length : 0, prog.blockParams = o || 0, prog
    }

    function resolvePartial(e, t, r) {
        return e ? e.call || r.name || (r.name = e, e = r.partials[e]) : e = "@partial-block" === r.name ? r.data["partial-block"] : r.partials[r.name], e
    }

    function invokePartial(e, t, r) {
        var n = r.data && r.data["partial-block"];
        r.partial = !0, r.ids && (r.data.contextPath = r.ids[0] || r.data.contextPath);
        var a = void 0;
        if (r.fn && r.fn !== noop && function() {
                r.data = s.createFrame(r.data);
                var e = r.fn;
                a = r.data["partial-block"] = function(t) {
                    var r = arguments.length <= 1 || void 0 === arguments[1] ? {} : arguments[1];
                    return r.data = s.createFrame(r.data), r.data["partial-block"] = n, e(t, r)
                }, e.partials && (r.partials = o.extend({}, r.partials, e.partials))
            }(), void 0 === e && a && (e = a), void 0 === e) throw new i.default("The partial " + r.name + " could not be found");
        if (e instanceof Function) return e(t, r)
    }

    function noop() {
        return ""
    }

    function initData(e, t) {
        return t && "root" in t || (t = t ? s.createFrame(t) : {}, t.root = e), t
    }

    function executeDecorators(e, t, r, n, a, i) {
        if (e.decorator) {
            var s = {};
            t = e.decorator(t, s, r, n && n[0], a, i, n), o.extend(t, s)
        }
        return t
    }
    t.__esModule = !0, t.checkRevision = checkRevision, t.template = template, t.wrapProgram = wrapProgram, t.resolvePartial = resolvePartial, t.invokePartial = invokePartial, t.noop = noop;
    var n = r(4),
        o = function(e) {
            if (e && e.__esModule) return e;
            var t = {};
            if (null != e)
                for (var r in e) Object.prototype.hasOwnProperty.call(e, r) && (t[r] = e[r]);
            return t.default = e, t
        }(n),
        a = r(18),
        i = function(e) {
            return e && e.__esModule ? e : {
                default: e
            }
        }(a),
        s = r(64)
}, function(e, t, r) {
    "use strict";

    function SafeString(e) {
        this.string = e
    }
    t.__esModule = !0, SafeString.prototype.toString = SafeString.prototype.toHTML = function() {
        return "" + this.string
    }, t.default = SafeString, e.exports = t.default
}, function(e, t) {
    function isBuffer(e) {
        return !!e.constructor && "function" == typeof e.constructor.isBuffer && e.constructor.isBuffer(e)
    }

    function isSlowBuffer(e) {
        return "function" == typeof e.readFloatLE && "function" == typeof e.slice && isBuffer(e.slice(0, 0))
    }
    e.exports = function(e) {
        return null != e && (isBuffer(e) || isSlowBuffer(e) || !!e._isBuffer)
    }
}, , , function(e, t) {
    var r;
    r = function() {
        return this
    }();
    try {
        r = r || Function("return this")() || (0, eval)("this")
    } catch (e) {
        "object" == typeof window && (r = window)
    }
    e.exports = r
}, , , function(e, t, r) {
    r(84), r(83), r(82), r(19), e.exports = r(0)
}]);
webpackJsonp([0], {
    102: function(e, t, n) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        });
        t.sendBcVideoTrackEvent = function() {
            for (var e = function() {
                    "0" === parseFloat(this.cache_.currentTime).toFixed(0) ? pageDataTracker.trackEvent("videoStart", {
                        video: {
                            id: this.id(),
                            length: parseFloat(this.mediainfo.duration).toFixed(2),
                            position: parseFloat(this.cache_.currentTime).toFixed(0)
                        }
                    }) : pageDataTracker.trackEvent("videoPlay", {
                        video: {
                            id: this.id(),
                            length: parseFloat(this.mediainfo.duration).toFixed(2),
                            position: parseFloat(this.cache_.currentTime).toFixed(2)
                        }
                    })
                }, t = function() {
                    parseFloat(this.cache_.currentTime).toFixed(2) === parseFloat(this.mediainfo.duration).toFixed(2) ? pageDataTracker.trackEvent("videoComplete", {
                        video: {
                            id: this.id(),
                            length: parseFloat(this.mediainfo.duration).toFixed(2),
                            position: parseFloat(this.cache_.currentTime).toFixed(2)
                        }
                    }) : pageDataTracker.trackEvent("videoStop", {
                        video: {
                            id: this.id(),
                            length: parseFloat(this.mediainfo.duration).toFixed(2),
                            position: parseFloat(this.cache_.currentTime).toFixed(2)
                        }
                    })
                }, n = document.body.getElementsByTagName("video"), a = {}, i = 0; i < n.length; i++) {
                var r = n[i].getAttribute("data-video-id");
                n[i].setAttribute("id", r), a.bcID = videojs(r), a.bcID.on("pause", t), a.bcID.on("play", e)
            }
        }
    },
    103: function(e, t, n) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        }), t.sendPageData = t.setJournalsPageContent = t.setBooksPageContent = t.setSolutionsPageContent = t.setConnectPageContent = t.setConnectMetadataContent = void 0;
        var a = n(26),
            i = function(e) {
                if (e && e.__esModule) return e;
                var t = {};
                if (null != e)
                    for (var n in e) Object.prototype.hasOwnProperty.call(e, n) && (t[n] = e[n]);
                return t.default = e, t
            }(a),
            r = {},
            o = i.getPageName();
        t.setConnectMetadataContent = function() {
            var e = document.querySelector('meta[Name="Title"]') ? document.querySelector('meta[Name="Title"]') || document.querySelector('meta[Name="title"]') : "unknown";
            r.onlineDate = i.getPublishedDate("PubDate"), r.title = e.content
        }, t.setConnectPageContent = function() {
            r.url = window.location.href, r.breadcrumb = i.generateBreadcrumbString(), r.authorName = i.getMetadataContent('meta[name="Author"]'), r.subjectAreas = i.getMetadataContent('meta[name="Tag.Community"]'), r.section = "content", r.type = "article", o = "connect:tag:story"
        }, t.setSolutionsPageContent = function() {
            var e = [{
                title: "title"
            }];
            i.updatePageDataContent(r, e), r.url = window.location.href, r.breadcrumb = i.generateBreadcrumbString(), r.section = "Solutions", o = i.generateSolutionsPageName()
        }, t.setBooksPageContent = function() {
            var e = [{
                bookTitle: ".book-title"
            }, {
                authorNames: ".editor"
            }, {
                subjectAreas: ".breadcrumb span"
            }, {
                format: '[itemprop="bookFormat"]'
            }, {
                isbn: ".isbn"
            }, {
                edition: ".edition"
            }, {
                publisher: ".imprint"
            }, {
                language: '[itemprop="inLanguage"]'
            }, {
                inStock: '[class="stock-availability available"]'
            }];
            if (i.updatePageDataContent(r, e), r.subjectAreas = r.subjectAreas.slice(2, -1).toString(), Array.isArray(r.isbn)) {
                for (var t = [], n = 0; n < r.isbn.length;) t.push(r.format[n] + ":" + r.isbn[n]), n++;
                r.id = t, r.format = r.format.filter(function(e, t) {
                    return r.format.indexOf(e) === t
                })
            } else r.id = r.format + ":" + r.isbn;
            r.format = r.format.toString(), r.breadcrumb = i.generateBreadcrumbString(), r.publishedDate = i.getPublishedDate("published.date"), r.url = window.location.href, r.section = "books", r.type = "books", o = "books:product"
        }, t.setJournalsPageContent = function() {
            var e = [{
                journalTitle: ".main-title"
            }, {
                editor: '[itemprop="editor"]'
            }, {
                subjectAreas: ".breadcrumb span"
            }, {
                issn: '[itemprop="issn"]'
            }, {
                edition: ".edition"
            }, {
                publisher: ".imprint"
            }, {
                language: '[itemprop="inLanguage"]'
            }];
            i.updatePageDataContent(r, e), r.subjectAreas = r.subjectAreas.slice(2, -1).toString(), r.breadcrumb = i.generateBreadcrumbString(), r.format = "print", r.publishedDate = i.getPublishedDate("published.date"), r.url = window.location.href, r.section = "journals", r.type = "journals";
            var t = document.querySelectorAll(".journal-buying-options div[id$=-subscription]")[0].id;
            o = "journals:product-" + t
        }, t.sendPageData = function() {
            pageData = {
                content: [r],
                page: {
                    businessUnit: "ELS:OPS",
                    environment: i.getEnv(),
                    language: i.getLanguage(),
                    loadTimestamp: i.loadTimeStamp(),
                    name: o,
                    noTracking: "false",
                    productName: "EC",
                    type: "NP-GP",
                    loadTime: i.loadTime()
                },
                visitor: {
                    accessType: "ec:anon_guest",
                    ipAddress: ""
                }
            }
        }
    },
    104: function(e, t, n) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        }), t.sendPageFormViewData = t.waitForValidationFormSubmit = t.getFormData = void 0;
        var a = n(26),
            i = function(e) {
                if (e && e.__esModule) return e;
                var t = {};
                if (null != e)
                    for (var n in e) Object.prototype.hasOwnProperty.call(e, n) && (t[n] = e[n]);
                return t.default = e, t
            }(a),
            r = "",
            o = "";
        t.getFormData = function() {
            var e = i.languageCodes.indexOf(i.getUrlPathArray()[0].toLowerCase()) > -1 ? 2 : 1;
            "industry-insights" === i.getUrlPathArray()[e].toLowerCase() && e++;
            var t = {
                    "chemicals-and-materials": "CHEM",
                    "pharma-and-life-sciences-solutions": "ELSS",
                    "oil-and-gas": "OIL&GAS",
                    "education-and-research": "EDU&RES",
                    "embase-biomedical-research": "EM",
                    "engineering-village": "EV",
                    geofacets: "GF",
                    "pathway-studio-biological-research": "PS",
                    "pharmapendium-clinical-data": "PP",
                    "quosa-scientific-literature": "QU",
                    reaxys: "RX",
                    "knovel-engineering-information": "KN",
                    sciencedirect: "SD",
                    scopus: "SC",
                    "professional-services": "PF",
                    mendeley: "MD",
                    ssrn: "SS",
                    librarians: "LIB",
                    "research-intelligence": "RI",
                    connect: "CON",
                    "clinical-key": "CK",
                    "digital-commons": "DC",
                    "clinical-solutions": "CS",
                    macro: "MA",
                    "funding-institutional": "FI",
                    hivebench: "HB",
                    "patient-engagement": "PE"
                },
                n = i.getUrlPathArray()[e];
            n = n.toLowerCase(), r = t[n] || "CM-GENERIC";
            var a = "",
                s = i.getUrlPathArray()[i.getUrlPathArray().length - 1],
                l = {
                    contact: "CONTACT-SALES",
                    sales: "CONTACT-SALES",
                    newsltter: "NEWSLETTER-SIGNUP",
                    newsletter: "NEWSLETTER-SIGNUP",
                    "journal-title-suggestion": "JOURNAL-TITLE-SUGGESTION"
                },
                c = !1;
            Object.keys(l).forEach(function(e) {
                s.indexOf(e) >= 0 && (a = l[e], c = !0)
            }), c || (a = i.getUrlPathArray()[i.getUrlPathArray().length - 2]), i.getUrlPathStringColonSeparated().includes("promo:") && (r = "PROMO:" + r), o = r + ":" + a, i.getUrlPathStringColonSeparated().includes("promo:rd-solutions:") && (o = "PPC:" + i.getUrlPathArray()[2], i.getUrlPathArray()[3] && (o = o + ":" + i.getUrlPathArray()[3]), r = "PPC"), o = o.toUpperCase()
        }, t.waitForValidationFormSubmit = function waitForValidationFormSubmit() {
            [].forEach.call(document.querySelectorAll('a[id="submitButton"]'), function(e) {
                "Please Wait..." === e.textContent && pageDataTracker.trackEvent("formSubmit", {
                    form: {
                        productName: r,
                        step: "complete",
                        type: "lead",
                        name: o
                    }
                }), e.addEventListener("click", function() {
                    waitForValidationFormSubmit()
                })
            })
        }, t.sendPageFormViewData = function() {
            document.getElementById("recipient__email") || (pageData.form.errorType = "FE-" + o), pageDataTracker.trackEvent("formView", {
                form: {
                    productName: r,
                    step: "start",
                    type: "lead",
                    name: o
                }
            })
        }
    },
    105: function(e, t, n) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        });
        t.sendSocialShareThisPageData = function() {
            [].forEach.call(document.querySelectorAll(".article-actions .social-share .holder-icon-social span"), function(e) {
                e.addEventListener("click", function() {
                    var t = e.getAttribute("title");
                    pageDataTracker.trackEvent("socialShare", {
                        social: {
                            sharePlatform: t
                        }
                    })
                })
            })
        }, t.sendSocialShareThatPageData = function() {
            [].forEach.call(document.querySelectorAll("div[id*=share-that-wrapper] .sidebar"), function(e) {
                e.addEventListener("click", function() {
                    var t = e.getAttribute("id");
                    pageDataTracker.trackEvent("socialShare", {
                        social: {
                            sharePlatform: t
                        }
                    })
                })
            })
        }
    },
    106: function(e, t, n) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        });
        t.sendPageDataPdfDownloadTracker = function() {
            [].forEach.call(document.querySelectorAll('a[href$=".pdf"]'), function(e) {
                e.addEventListener("click", function() {
                    var t = e.getAttribute("href").split("/");
                    pageDataTracker.trackEvent("contentDownload", {
                        content: [{
                            format: "MIME-PDF",
                            type: "other-ct:scope-full",
                            id: t[t.length - 2],
                            title: t[t.length - 1]
                        }]
                    })
                })
            })
        }
    },
    107: function(e, t, n) {
        "use strict";

        function _classCallCheck(e, t) {
            if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
        }
        Object.defineProperty(t, "__esModule", {
            value: !0
        });
        var a = function() {
            function defineProperties(e, t) {
                for (var n = 0; n < t.length; n++) {
                    var a = t[n];
                    a.enumerable = a.enumerable || !1, a.configurable = !0, "value" in a && (a.writable = !0), Object.defineProperty(e, a.key, a)
                }
            }
            return function(e, t, n) {
                return t && defineProperties(e.prototype, t), n && defineProperties(e, n), e
            }
        }();
        t.EmbeddedCatalog = function() {
            function EmbeddedCatalog(e) {
                _classCallCheck(this, EmbeddedCatalog), this.currentPath = window.location.pathname, this.embeddedParams = e, this.elements = {
                    header: document.querySelector("header"),
                    catalog: document.querySelector(".listing-content"),
                    searchForm: document.querySelector(".listing-content #listing-form-filters"),
                    clearSearch: document.querySelector(".listing-content .clear-filter a"),
                    productTypes: document.querySelectorAll(".listing-content #listing-form-filters-type option"),
                    sortBy: document.querySelector(".listing-content #listing-form-filters-results-sort"),
                    inputs: {
                        categoryrestriction: document.querySelector('.listing-content input[aria-label="Category Restriction"]'),
                        producttype: document.querySelector(".listing-content #listing-form-filters-type")
                    },
                    pagination: document.querySelectorAll('.listing-pagination a[aria-label="Pagination Navigation"]')
                }, this.updateUI(), this.addEventListeners()
            }
            return a(EmbeddedCatalog, [{
                key: "updateUI",
                value: function() {
                    this.scrollToCatalog(), this.changeClearSearchUrl(), this.changePaginationLinkUrls(), this.restrictProductTypes()
                }
            }, {
                key: "scrollToCatalog",
                value: function() {
                    if (window.location.href.indexOf("?") > -1) {
                        var e = this.elements.header.getBoundingClientRect().height,
                            t = this.elements.catalog.getBoundingClientRect().top;
                        window.scrollTo({
                            top: t - e,
                            behavior: "smooth"
                        })
                    }
                }
            }, {
                key: "changeClearSearchUrl",
                value: function() {
                    this.elements.clearSearch.href = this.currentPath + "?"
                }
            }, {
                key: "changePaginationLinkUrls",
                value: function() {
                    var e = this;
                    this.elements.pagination.forEach(function(t) {
                        t.href = t.href.replace("/catalog", e.currentPath), e.embeddedParams.forEach(function(e) {
                            t.href = t.href.replace(e.key + "=" + e.value, "").replace("&&", "&")
                        })
                    })
                }
            }, {
                key: "restrictProductTypes",
                value: function() {
                    var e = this.embeddedParams.filter(function(e) {
                        return "producttype" === e.key
                    })[0];
                    e && this.elements.productTypes.forEach(function(t) {
                        t.value !== e.value && t.remove()
                    })
                }
            }, {
                key: "addEventListeners",
                value: function() {
                    var e = this,
                        t = this.elements.sortBy,
                        n = this.elements.searchForm;
                    n.addEventListener("submit", function(t) {
                        t.preventDefault(), e.excludeEmbeddedParams(), e.redirectFormSubmit(n)
                    }), t.addEventListener("change", function(t) {
                        t.preventDefault(), e.excludeEmbeddedParams(), e.redirectFormSubmit(n)
                    })
                }
            }, {
                key: "excludeEmbeddedParams",
                value: function() {
                    var e = this;
                    this.embeddedParams.forEach(function(t) {
                        "categoryrestriction" === t.key && (e.elements.inputs.categoryrestriction.name = ""), "producttype" === t.key && (e.elements.inputs.producttype.name = "")
                    })
                }
            }, {
                key: "redirectFormSubmit",
                value: function(e) {
                    e.action = this.currentPath, e.submit()
                }
            }]), EmbeddedCatalog
        }()
    },
    108: function(e, t, n) {
        "use strict";

        function _classCallCheck(e, t) {
            if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
        }
        Object.defineProperty(t, "__esModule", {
            value: !0
        });
        var a = function() {
            function defineProperties(e, t) {
                for (var n = 0; n < t.length; n++) {
                    var a = t[n];
                    a.enumerable = a.enumerable || !1, a.configurable = !0, "value" in a && (a.writable = !0), Object.defineProperty(e, a.key, a)
                }
            }
            return function(e, t, n) {
                return t && defineProperties(e.prototype, t), n && defineProperties(e, n), e
            }
        }();
        t.GlobalHeader = function() {
            function GlobalHeader() {
                _classCallCheck(this, GlobalHeader), this.header = document.querySelector(".global-header.header-container"), this.classes = {
                    ariaExpanded: '[aria-expanded="true"]',
                    ghExpanded: "gh-is-expanded",
                    bigsearchExpanded: "gh-bigsearch-open",
                    showOverlay: "u-show-overlay"
                }, this.dom = {
                    mainContent: document.querySelector("main#maincontent"),
                    dropdownTriggers: this.header.querySelectorAll(".gh-ppvr-trigger"),
                    bigsearchIcon: this.header.querySelector(".bigsearch-toggle"),
                    bigsearchArea: this.header.querySelector(".bigsearch-area"),
                    openMobileMenu: this.header.querySelector(".gh-open-menu"),
                    closeMobileMenu: this.header.querySelector(".gh-close-menu"),
                    mobileMenu: this.header.querySelector("#gh-drawer"),
                    overlay: this.header.querySelector("#gh-overlay"),
                    profileDropdownTrigger: this.header.querySelector("#gh-profile-dd-trigger")
                }, this.init()
            }
            return a(GlobalHeader, [{
                key: "init",
                value: function() {
                    this.changeLinksToDropdowns(), this.addMainContentListeners(), this.addSearchIconListeners(), this.addMobileMenuListeners()
                }
            }, {
                key: "changeLinksToDropdowns",
                value: function() {
                    var e = this;
                    Array.from(this.dom.dropdownTriggers).forEach(function(t) {
                        var n = t.querySelector(".anchor");
                        n && (n.setAttribute("aria-haspopup", !0), n.setAttribute("aria-expanded", !1)), t.addEventListener("click", function(a) {
                            a.preventDefault(), e.toggleExpandedForDropdown(t, n)
                        })
                    })
                }
            }, {
                key: "toggleExpandedForDropdown",
                value: function(e, t) {
                    var n = !0 === e.parentNode.classList.contains(this.classes.ghExpanded);
                    n ? e.parentNode.classList.remove(this.classes.ghExpanded) : (this.collapseExpandedMenus(), this.collapseBigSearch(), e.parentNode.classList.add(this.classes.ghExpanded)), t && t.setAttribute("aria-expanded", !n)
                }
            }, {
                key: "addMainContentListeners",
                value: function() {
                    var e = this;
                    this.dom.mainContent.addEventListener("click", function() {
                        e.collapseExpandedMenus()
                    })
                }
            }, {
                key: "addSearchIconListeners",
                value: function() {
                    var e = this;
                    this.dom.bigsearchIcon.addEventListener("click", function(t) {
                        t.preventDefault(), e.collapseExpandedMenus(), e.dom.bigsearchIcon.classList.contains(e.classes.bigsearchExpanded) ? (e.dom.bigsearchIcon.classList.remove(e.classes.bigsearchExpanded), e.dom.overlay.classList.remove(e.classes.showOverlay)) : (e.dom.bigsearchIcon.classList.add(e.classes.bigsearchExpanded), e.dom.overlay.classList.add(e.classes.showOverlay))
                    })
                }
            }, {
                key: "addMobileMenuListeners",
                value: function() {
                    var e = this;
                    this.dom.openMobileMenu.addEventListener("click", function() {
                        e.collapseExpandedMenus(), e.collapseBigSearch(), e.dom.mobileMenu.classList.add(e.classes.ghExpanded), e.dom.overlay.classList.add(e.classes.showOverlay)
                    }), this.dom.closeMobileMenu.addEventListener("click", function() {
                        e.dom.overlay.classList.remove(e.classes.showOverlay), e.dom.mobileMenu.classList.remove(e.classes.ghExpanded)
                    }), this.dom.overlay.addEventListener("click", function() {
                        e.dom.overlay.classList.remove(e.classes.showOverlay), e.dom.mobileMenu.classList.remove(e.classes.ghExpanded), e.collapseBigSearch()
                    })
                }
            }, {
                key: "collapseExpandedMenus",
                value: function() {
                    var e = this;
                    this.dom.overlay.classList.remove(this.classes.showOverlay), Array.from(document.querySelectorAll("." + this.classes.ghExpanded)).forEach(function(t) {
                        t.classList.remove(e.classes.ghExpanded)
                    }), Array.from(document.querySelectorAll(this.classes.ariaExpanded)).forEach(function(e) {
                        e.setAttribute("aria-expanded", "false")
                    })
                }
            }, {
                key: "collapseBigSearch",
                value: function() {
                    this.dom.bigsearchIcon.classList.remove(this.classes.bigsearchExpanded), window.location.pathname.indexOf("search-results") < 0 && ($ ? $(".bigsearch-area").slideUp("fast") : this.dom.bigsearchArea.style.display = "none")
                }
            }]), GlobalHeader
        }()
    },
    109: function(e, t, n) {
        "use strict";

        function _classCallCheck(e, t) {
            if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
        }
        Object.defineProperty(t, "__esModule", {
            value: !0
        });
        var a = function() {
            function defineProperties(e, t) {
                for (var n = 0; n < t.length; n++) {
                    var a = t[n];
                    a.enumerable = a.enumerable || !1, a.configurable = !0, "value" in a && (a.writable = !0), Object.defineProperty(e, a.key, a)
                }
            }
            return function(e, t, n) {
                return t && defineProperties(e.prototype, t), n && defineProperties(e, n), e
            }
        }();
        t.GlobalHeaderAB = function() {
            function GlobalHeaderAB(e, t) {
                _classCallCheck(this, GlobalHeaderAB), this.config = {
                    newHeader: {
                        classList: "gh-move-to-spine-at-md gh-sticky-header gh-shrinkable",
                        id: "gh-cnt"
                    },
                    headerContainer: {
                        class: "gih"
                    },
                    expandedClass: "gh-is-expanded"
                }, this.dom = {
                    mountNode: document.querySelector(e),
                    body: document.querySelector("body"),
                    oldHeader: document.querySelector('header[role="banner"]'),
                    oldMenu: document.querySelector("aside.primary-menu"),
                    menuFlyouts: document.querySelectorAll(".gh-ppvr-trigger")
                }, this.templates = {
                    default: n(153)(t)
                }, this.init()
            }
            return a(GlobalHeaderAB, [{
                key: "init",
                value: function() {
                    this.removeOldMenu(), this.mountNewHeader(), this.addEventListeners()
                }
            }, {
                key: "removeOldMenu",
                value: function() {
                    this.dom.oldMenu.parentNode.removeChild(this.dom.oldMenu)
                }
            }, {
                key: "buildNewHeaderElement",
                value: function() {
                    var e = document.createElement("header");
                    return e.className = this.config.newHeader.classList, e.id = this.config.newHeader.id, e.innerHTML = this.templates.default, e
                }
            }, {
                key: "mountNewHeader",
                value: function() {
                    var e = this.buildNewHeaderElement();
                    this.dom.mountNode.classList.add(this.config.headerContainer.class), this.dom.mountNode.replaceChild(e, this.dom.oldHeader)
                }
            }, {
                key: "openDropdownMenu",
                value: function(e) {
                    if (e.classList.contains(this.config.expandedClass)) return void e.classList.remove(this.config.expandedClass);
                    this.closeAllMenus(), e.classList.add(this.config.expandedClass)
                }
            }, {
                key: "closeAllMenus",
                value: function() {
                    this.dom.body.classList.remove("menu-open"), this.closeDropdownMenus(), window.location.pathname.indexOf("search-results") < 0 && ($ ? $(".bigsearch-area").slideUp("fast") : document.querySelector(".bigsearch-area").style.display = "none")
                }
            }, {
                key: "closeDropdownMenus",
                value: function() {
                    var e = this;
                    [].slice.call(document.querySelectorAll("." + this.config.expandedClass)).forEach(function(t) {
                        t && t.classList.remove(e.config.expandedClass)
                    })
                }
            }, {
                key: "setButtonHref",
                value: function(e, t) {
                    var n = document.querySelectorAll(e);
                    [].slice.call(n).forEach(function(e) {
                        e.addEventListener("click", function() {
                            window.location = elcm.ECOMM_URL + t
                        })
                    })
                }
            }, {
                key: "elementHasParent",
                value: function(e, t) {
                    var n = document.querySelectorAll(t),
                        a = !1;
                    return [].slice.call(n).forEach(function(t) {
                        t.contains(e) && (a = !0)
                    }), a
                }
            }, {
                key: "addEventListeners",
                value: function() {
                    var e = this;
                    this.setButtonHref(".signin-btn", "auth"), this.setButtonHref(".view-account-btn", "account"), this.setButtonHref(".sign-out-btn", "logout"), this.setButtonHref("#aa-globalheader-shopping-chart", "cart");
                    var t = document.querySelectorAll(".gh-ppvr-trigger");
                    [].slice.call(t).forEach(function(t) {
                        t.addEventListener("keyup", function(n) {
                            9 !== n.keyCode || t.parentNode.classList.contains(e.config.expandedClass) || e.closeDropdownMenus()
                        }), t.addEventListener("click", function(n) {
                            n.preventDefault(), e.openDropdownMenu(t.parentNode)
                        })
                    });
                    var n = document.querySelector(".gh-open-menu button"),
                        a = document.querySelector(".gh-close-menu button"),
                        i = document.querySelector("#gh-drawer"),
                        r = document.querySelector("#gh-overlay"),
                        o = document.querySelector(".bigsearch-toggle"),
                        s = document.querySelector(".bigsearch-area");
                    n.addEventListener("click", function() {
                        i.classList.add(e.config.expandedClass), r.classList.remove("u-display-none")
                    }), a.addEventListener("click", function(t) {
                        r.classList.add("u-display-none"), i.classList.remove(e.config.expandedClass)
                    }), r.addEventListener("click", function(t) {
                        t.target.classList.add("u-display-none"), i.classList.remove(e.config.expandedClass)
                    }), o.addEventListener("click", function() {
                        e.closeDropdownMenus()
                    }), this.dom.body.addEventListener("click", function(t) {
                        i.classList.contains(e.config.expandedClass) || s.contains(t.target) || t.target.classList.contains("bigsearch-area") || e.elementHasParent(t.target, ".gh-ppvr") || e.elementHasParent(t.target, ".button-link") || e.elementHasParent(t.target, "#js-wrapper-search-link") || e.closeAllMenus()
                    })
                }
            }]), GlobalHeaderAB
        }()
    },
    110: function(e, t, n) {
        "use strict";

        function _interopRequireDefault(e) {
            return e && e.__esModule ? e : {
                default: e
            }
        }

        function _asyncToGenerator(e) {
            return function() {
                var t = e.apply(this, arguments);
                return new Promise(function(e, n) {
                    function step(a, i) {
                        try {
                            var r = t[a](i),
                                o = r.value
                        } catch (e) {
                            return void n(e)
                        }
                        if (!r.done) return Promise.resolve(o).then(function(e) {
                            step("next", e)
                        }, function(e) {
                            step("throw", e)
                        });
                        e(o)
                    }
                    return step("next")
                })
            }
        }

        function _classCallCheck(e, t) {
            if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
        }
        Object.defineProperty(t, "__esModule", {
            value: !0
        }), t.InstituteCertificateTool = void 0;
        var a = function() {
                function defineProperties(e, t) {
                    for (var n = 0; n < t.length; n++) {
                        var a = t[n];
                        a.enumerable = a.enumerable || !1, a.configurable = !0, "value" in a && (a.writable = !0), Object.defineProperty(e, a.key, a)
                    }
                }
                return function(e, t, n) {
                    return t && defineProperties(e.prototype, t), n && defineProperties(e, n), e
                }
            }(),
            i = n(19),
            r = _interopRequireDefault(i),
            o = n(176),
            s = _interopRequireDefault(o);
        t.InstituteCertificateTool = function() {
            function InstituteCertificateTool(e) {
                _classCallCheck(this, InstituteCertificateTool), this.config = e, this.mountNode = this.config.mountNode, this.uniqueFieldValues = [], this.searchToolUrl = this.config.searchToolUrl, this.searchToolPaths = {
                    certificate: "/certificate",
                    search: "/search",
                    uniqueFields: "/uniquefields"
                }, this.errorColor = "red", this.defaultTextColor = "black", this.pleaseFillMandatoryFieldsMessageTranslation = "“学科”与“年”为必选项。", this.noResultsReturnedMessageTranslation = "无匹配的结果。请修改您的搜索条件。", this.pdfShouldBeDownloadingMessageTranslation = "您的证书正在下载。若浏览器无响应，请再次点击此链接。", this.scholarNameTranslation = "学者姓名", this.institutionTranslation = "机构", this.certificateTranslation = "证书", this.downloadPdfTranslation = "下载证书", this.init()
            }
            return a(InstituteCertificateTool, [{
                key: "init",
                value: function() {
                    function init() {
                        return e.apply(this, arguments)
                    }
                    var e = _asyncToGenerator(s.default.mark(function _callee() {
                        return s.default.wrap(function(e) {
                            for (;;) switch (e.prev = e.next) {
                                case 0:
                                    return e.next = 2, this.getUniqueValuesForYearAndTopic();
                                case 2:
                                    this.build(), this.getDOMElements(), this.registerEventListeners();
                                case 5:
                                case "end":
                                    return e.stop()
                            }
                        }, _callee, this)
                    }));
                    return init
                }()
            }, {
                key: "getUniqueValuesForYearAndTopic",
                value: function() {
                    function getUniqueValuesForYearAndTopic() {
                        return e.apply(this, arguments)
                    }
                    var e = _asyncToGenerator(s.default.mark(function _callee2() {
                        var e = this;
                        return s.default.wrap(function(t) {
                            for (;;) switch (t.prev = t.next) {
                                case 0:
                                    return t.next = 2, r.default.get(encodeURI("" + this.searchToolUrl + this.searchToolPaths.uniqueFields + "?field=year")).then(function(t) {
                                        e.uniqueFieldValues.year = t.data.uniqueFieldValues
                                    }).catch(function(e) {
                                        console.log(e)
                                    });
                                case 2:
                                    return t.next = 4, r.default.get(encodeURI("" + this.searchToolUrl + this.searchToolPaths.uniqueFields + "?field=topic")).then(function(t) {
                                        e.uniqueFieldValues.topic = t.data.uniqueFieldValues
                                    }).catch(function(e) {
                                        console.log(e)
                                    });
                                case 4:
                                case "end":
                                    return t.stop()
                            }
                        }, _callee2, this)
                    }));
                    return getUniqueValuesForYearAndTopic
                }()
            }, {
                key: "build",
                value: function() {
                    var e = n(154);
                    this.mountNode.innerHTML = e({
                        year: this.uniqueFieldValues.year,
                        topic: this.uniqueFieldValues.topic
                    })
                }
            }, {
                key: "getDOMElements",
                value: function() {
                    this.keywordInput = document.getElementById("keyword"), this.yearSelected = document.getElementById("year"), this.topicSelected = document.getElementById("topic"), this.results = document.getElementById("results"), this.warningMessage = document.getElementById("warningMessage"), this.submitButton = document.getElementById("submit"), this.clearSearch = document.getElementById("clearSearch")
                }
            }, {
                key: "getCertificate",
                value: function(e) {
                    var t = this,
                        n = {
                            responseType: "arraybuffer"
                        };
                    this.warningMessage.innerHTML = "", r.default.post(encodeURI("" + this.searchToolUrl + this.searchToolPaths.certificate), {
                        id: e
                    }, n).then(function(e) {
                        var n = new Blob([e.data], {
                                type: "application/pdf"
                            }),
                            a = document.createElement("a");
                        a.href = window.URL.createObjectURL(n), a.download = "certificate.pdf", a.click(), t.warningMessage.innerHTML = t.pdfShouldBeDownloadingMessageTranslation + ' <a href="' + a + '" target="_blank">' + t.downloadPdfTranslation + "</a>"
                    }).catch(function(e) {
                        t.warningMessage.innerHTML = t.noResultsReturnedMessageTranslation
                    })
                }
            }, {
                key: "searchStudents",
                value: function(e) {
                    var t = this;
                    this.results.innerHTML = "";
                    var n = this.keywordInput.value.toLowerCase(),
                        a = this.yearSelected.value.toLowerCase(),
                        i = this.topicSelected.value.toLowerCase();
                    if (!a || !i) return this.warningMessage.innerHTML = this.pleaseFillMandatoryFieldsMessageTranslation, a || (this.yearSelected.style.color = this.errorColor), void(i || (this.topicSelected.style.color = this.errorColor));
                    a && i && (this.warningMessage.innerHTML = "", r.default.get(encodeURI("" + this.searchToolUrl + this.searchToolPaths.search + "?year=" + a + "&topic=" + i + "&keyword=" + n)).then(function(e) {
                        e.data.students.length > 0 ? (t.results.innerHTML = '<div id="header"><span>' + t.scholarNameTranslation + "</span><span>" + t.institutionTranslation + "</span><span>" + t.certificateTranslation + "</span></div>", e.data.students.filter(function(e) {
                            return t.results.innerHTML += "<div/><span>" + e.fullname + "</span><span>" + e.institution + "</span><span><a href='#' data-id=" + e.id + " tabindex='1'>" + t.downloadPdfTranslation + "</a></span></div>", !0
                        })) : t.warningMessage.innerHTML = t.noResultsReturnedMessageTranslation
                    }).catch(function(e) {
                        t.results.innerHTML = "" + e
                    }))
                }
            }, {
                key: "clearResults",
                value: function(e) {
                    this.results.innerHTML = "", this.warningMessage.innerHTML = ""
                }
            }, {
                key: "clearYearValidationColor",
                value: function(e) {
                    this.yearSelected.style.color = this.defaultTextColor, this.warningMessage.innerHTML = ""
                }
            }, {
                key: "clearTopicValidationColor",
                value: function(e) {
                    this.topicSelected.style.color = this.defaultTextColor, this.warningMessage.innerHTML = ""
                }
            }, {
                key: "registerEventListeners",
                value: function() {
                    var e = this;
                    this.results.addEventListener("click", function(t) {
                        t.target && "A" === t.target.nodeName && (t.preventDefault(), e.getCertificate(Number(t.target.getAttribute("data-id"))))
                    }), this.keywordInput.addEventListener("keypress", function(t) {
                        "Enter" === t.key && e.searchStudents(t)
                    }), this.clearSearch.addEventListener("keypress", function(t) {
                        "Enter" === t.key && e.clearResults(t)
                    }), this.submitButton.addEventListener("click", function(t) {
                        return e.searchStudents(t)
                    }), this.clearSearch.addEventListener("click", function(t) {
                        return e.clearResults(t)
                    }), this.yearSelected.addEventListener("click", function(t) {
                        return e.clearYearValidationColor(t)
                    }), this.topicSelected.addEventListener("click", function(t) {
                        return e.clearTopicValidationColor(t)
                    })
                }
            }]), InstituteCertificateTool
        }()
    },
    111: function(e, t, n) {
        "use strict";

        function _classCallCheck(e, t) {
            if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
        }
        Object.defineProperty(t, "__esModule", {
            value: !0
        }), t.Timeline = void 0;
        var a = function() {
                function defineProperties(e, t) {
                    for (var n = 0; n < t.length; n++) {
                        var a = t[n];
                        a.enumerable = a.enumerable || !1, a.configurable = !0, "value" in a && (a.writable = !0), Object.defineProperty(e, a.key, a)
                    }
                }
                return function(e, t, n) {
                    return t && defineProperties(e.prototype, t), n && defineProperties(e, n), e
                }
            }(),
            i = n(66),
            r = function(e) {
                return e && e.__esModule ? e : {
                    default: e
                }
            }(i),
            o = n(179),
            s = n(155);
        t.Timeline = function() {
            function Timeline(e) {
                _classCallCheck(this, Timeline), this.config = e, this.mountNode = document.querySelector(e.mountNode), this.activeSlideNum = e.activeSlideNum, this.currentSlideNum = e.activeSlideNum, this.contentItem = e.classItem, this.numSlides = o.chapters.length - 1, this.init()
            }
            return a(Timeline, [{
                key: "init",
                value: function() {
                    this.build(), this.getDOMElements(), this.registerEventHandlers()
                }
            }, {
                key: "build",
                value: function() {
                    this.mountNode.innerHTML = s({
                        activeSlideNum: this.activeSlideNum,
                        chapters: o.chapters
                    })
                }
            }, {
                key: "getDOMElements",
                value: function() {
                    this.$contentContainer = (0, r.default)(this.config.classContentContainer), this.$currentSlide = (0, r.default)("#" + this.activeSlideNum), this.$activeSlide = (0, r.default)("#" + this.activeSlideNum), this.$menuContainer = (0, r.default)(this.config.classMenuContainer), this.$menuItem = (0, r.default)(this.config.classMenuItem), this.$headerContainer = (0, r.default)(this.config.classHeaderContainer), this.$sliderContainer = (0, r.default)(this.config.classSliderContainer), this.$pageTop = (0, r.default)(this.config.classPageTop)
                }
            }, {
                key: "registerEventHandlers",
                value: function() {
                    var e = this;
                    window.onload = function() {
                        return e.resizeContainer()
                    }, window.onresize = function() {
                        return e.resizeContainer()
                    }, this.$menuItem.on("click", function(t) {
                        t.preventDefault(), e.scrollToMenu(), e.setActiveSlide(t.target.getAttribute("data-target"))
                    }), this.$pageTop.on("click", function(t) {
                        t.preventDefault(), e.scrollToMenu(), e.$pageTop.blur()
                    })
                }
            }, {
                key: "scrollToMenu",
                value: function() {
                    var e = this.$sliderContainer.offset().top - this.$headerContainer.outerHeight();
                    (0, r.default)("html, body").animate({
                        scrollTop: e
                    }, 1e3)
                }
            }, {
                key: "resizeContainer",
                value: function() {
                    this.$contentContainer.css("height", this.$activeSlide.height())
                }
            }, {
                key: "setActiveSlide",
                value: function(e) {
                    this.currentSlideNum = this.activeSlideNum, "prev" === e ? this.activeSlideNum-- : "next" === e ? this.activeSlideNum++ : this.activeSlideNum = parseInt(e, 10), this.$currentSlide = (0, r.default)("#" + this.currentSlideNum), this.$activeSlide = (0, r.default)("#" + this.activeSlideNum), this.animateSlide(), this.animateMenu()
                }
            }, {
                key: "animateSlide",
                value: function() {
                    var e = this;
                    if (this.currentSlideNum !== this.activeSlideNum) {
                        var t = this.getAnimationClasses(this.currentSlideNum);
                        this.$activeSlide.attr("class", t.enter), this.$currentSlide.attr("class", t.exit).one("webkitAnimationEnd oanimationend msAnimationEnd animationend", function() {
                            e.$currentSlide.removeClass("leave-right leave-left"), e.$activeSlide.removeClass("enter-left enter-right")
                        }), this.resizeContainer()
                    }
                }
            }, {
                key: "animateMenu",
                value: function() {
                    var e = this;
                    setTimeout(function() {
                        var t = e.$menuContainer.find("[data-target='" + e.activeSlideNum + "']"),
                            n = e.$menuItem,
                            a = n.offset().left,
                            i = t.offset().left - parseInt(t.parent().css("margin-left"), 10);
                        n.removeClass("selected"), t.addClass("selected"), e.$menuContainer.animate({
                            scrollLeft: i - a
                        }, {
                            duration: 500,
                            easing: "swing"
                        }, 800)
                    }, 500)
                }
            }, {
                key: "getAnimationClasses",
                value: function() {
                    return {
                        enter: this.contentItem + " selected " + (this.activeSlideNum > this.currentSlideNum ? "enter-right" : "enter-left"),
                        exit: this.contentItem + " " + (this.activeSlideNum > this.currentSlideNum ? "leave-left" : "leave-right")
                    }
                }
            }]), Timeline
        }()
    },
    112: function(e, t, n) {
        "use strict";

        function _classCallCheck(e, t) {
            if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
        }
        Object.defineProperty(t, "__esModule", {
            value: !0
        });
        var a = function() {
            function defineProperties(e, t) {
                for (var n = 0; n < t.length; n++) {
                    var a = t[n];
                    a.enumerable = a.enumerable || !1, a.configurable = !0, "value" in a && (a.writable = !0), Object.defineProperty(e, a.key, a)
                }
            }
            return function(e, t, n) {
                return t && defineProperties(e.prototype, t), n && defineProperties(e, n), e
            }
        }();
        t.Tooltip = function() {
            function Tooltip(e) {
                _classCallCheck(this, Tooltip), this.config = e, this.init()
            }
            return a(Tooltip, [{
                key: "init",
                value: function() {
                    this.registerEventHandlerForLinks()
                }
            }, {
                key: "hideTooltip",
                value: function() {
                    var e = document.querySelector(this.config.openTooltipContent),
                        t = document.querySelector(this.config.callout),
                        n = document.querySelector(this.config.closeTooltip);
                    e.style.display = "none", e.classList.remove("borderTop"), e.classList.remove("borderBottom"), document.querySelector(this.config.openTooltip).classList.remove("open"), t.parentNode.removeChild(t), n.parentNode.removeChild(n)
                }
            }, {
                key: "showTooltip",
                value: function(e) {
                    e.target.classList.add("open");
                    var t = document.querySelector(this.config.openTooltipContent);
                    t.style.display = "inline-block";
                    var n = document.createElement("div");
                    n.classList.add("closeTooltip"), t.appendChild(n)
                }
            }, {
                key: "registerEventHandlerForLinks",
                value: function() {
                    var e = this;
                    Array.from(this.config.tooltipLinksAll).forEach(function(t) {
                        t.addEventListener("click", function(t) {
                            var n = t.target.className;
                            "tooltip-clickable" === n ? (document.querySelectorAll(e.config.openTooltipContent).length > 0 && e.hideTooltip(), e.showTooltip(t), e.calculateTooltipContentPosition(t), e.registerEventHandlerForCloseButton()) : "tooltip-clickable open" === n && e.hideTooltip()
                        })
                    })
                }
            }, {
                key: "registerEventHandlerForCloseButton",
                value: function() {
                    var e = this;
                    document.querySelector(this.config.closeTooltip).addEventListener("click", function(t) {
                        e.hideTooltip()
                    })
                }
            }, {
                key: "calculateClickPosition",
                value: function(e) {
                    var t = e.target.getBoundingClientRect().top / document.body.getBoundingClientRect().height,
                        n = e.target.getBoundingClientRect().left / document.body.getBoundingClientRect().width;
                    return t < .5 && n > .5 ? "bottomRight" : t < .5 && n < .5 ? "bottomLeft" : t > .5 && n < .5 ? "topLeft" : t > .5 && n > .5 ? "topRight" : void 0
                }
            }, {
                key: "calculateTooltipContentPosition",
                value: function(e) {
                    var t = document.querySelector(this.config.openTooltipContent),
                        n = t.offsetHeight + 19,
                        a = t.offsetWidth;
                    switch (this.calculateClickPosition(e)) {
                        case "bottomRight":
                            t.classList.add("borderTop"), t.style.marginTop = 39..toString() + "px", t.style.marginRight = a.toString() + "px", t.style.marginLeft = -a.toString() + "px";
                            break;
                        case "bottomLeft":
                            t.classList.add("borderTop"), t.style.marginTop = 39..toString() + "px", t.style.marginLeft = (-2).toString() + "rem";
                            break;
                        case "topLeft":
                            t.classList.add("borderBottom"), t.style.marginTop = (1 - n).toString() + "px", t.style.marginLeft = (-2).toString() + "rem", t.style.marginTop = (-t.offsetHeight - 19 + 1).toString() + "px";
                            break;
                        case "topRight":
                            t.classList.add("borderBottom"), t.style.marginTop = (1 - n).toString() + "px", t.style.marginRight = a.toString() + "px", t.style.marginLeft = -a.toString() + "px";
                            break;
                        default:
                            console.log("position not set")
                    }
                    var i = document.createElement("span");
                    i.classList.add("callout"), document.querySelector(this.config.openTooltip).appendChild(i), document.querySelector(this.config.callout).classList.add(this.calculateClickPosition(e))
                }
            }]), Tooltip
        }()
    },
    113: function(e, t, n) {
        "use strict";
        n(71), n(68), n(69), n(70), n(72), n(73), n(74), n(76), n(75), n(77), n(78), n(80), n(67)
    },
    115: function(e, t, n) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        });
        t.getCookie = function(e) {
            var t = document.cookie.match("(^| )" + e + "=([^;]+)");
            return t ? {
                name: e,
                contents: t[2]
            } : void 0
        }, t.setCookie = function(e, t, n, a) {
            n = n || 1, a = void 0 === a ? "" : "domain=" + a + ";";
            var i = new Date;
            i.setDate(i.getDate() + n), t = window.escape(t) + (null == i ? "" : "; expires=" + i.toUTCString()), document.cookie = e + "=" + t + ";" + a + "path=/"
        }
    },
    116: function(e, t, n) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        });
        t.changeInputFocusAtMaxLength = function(e, t) {
            var n = e[0];
            n.value.length === Number(n.maxLength) && t.focus()
        }, t.changeInputFocusAtLastDelete = function(e, t, n) {
            var a = t[0];
            8 !== e || a.value.length || n.focus()
        }
    },
    153: function(e, t, n) {
        var a = n(0);
        e.exports = (a.default || a).template({
            compiler: [7, ">= 4.0.0"],
            main: function(e, t, n, a, i) {
                var r, o = e.lambda,
                    s = e.escapeExpression;
                return '<div id="gh-main-cnt" class="u-flex-center-ver u-position-relative gh-sides-padding">\n\n    <a href="/" id="gh-branding" class="u-flex-center-ver">\n        <img src="' + s(o(null != (r = null != t ? t.url : t) ? r.cdn : r, t)) + '/matrix/includes/img/logo-tree.svg" class="gh-logo">\n        <img src="' + s(o(null != (r = null != t ? t.url : t) ? r.cdn : r, t)) + '/matrix/includes/img/logo-text.svg" class="gh-wordmark gh-elsevier-wordmark">\n    </a>\n\n    <div id="gh-nav-cnt" class="u-flex-center-ver">\n\n        <nav aria-label="links" class="gh-nav gh-nav-links gh-nav-h gh-nav-shrinkable">\n            <ul class="gh-nav-list u-list-reset">\n                <li class="gh-nav-item gh-has-dd gh-move-to-spine">\n                    <div class="gh-ppvr">\n                        <div class="gh-ppvr-trigger">\n                            <button class="button-link button-medium button-link-primary gh-nav-action"\n                                tabindex="0" id="aa-globalheader-navigation-link1" data-aa-region="aa-globalheader-navigation-link1"\n                                data-aa-name="aa-globalheader-navigation-About" role="button" aria-haspopup="true"\n                                aria-expanded="false" type="button">\n                                <span class="button-link-text">About</span>\n                            </button>\n                        </div>\n                        <div class="gh-ppvr-cnt gh-ppvr-right">\n                            <div class="gh-ppvr-arrow-cnt">\n                                <div class="gh-ppvr-arrow gh-arrow-right">\n                                    <div class="u-position-relative">\n                                        <div class="gh-ppvr-arrow-fill"></div>\n                                    </div>\n                                </div>\n                            </div>\n                            <div class="gh-ppvr-cnt-inner">\n                                <ul class="gh-dd-nav">\n                                    <li class="gh-nav-item">\n                                        <a href="/about" class="anchor button-link-primary gh-nav-action"\n                                            tabindex="0">\n                                            <span class="anchor-text">About Elsevier</span>\n                                        </a>\n                                    </li>\n                                    <li class="gh-nav-item">\n                                        <a href="/connect" class="anchor button-link-primary gh-nav-action" tabindex="0">\n                                            <span class="anchor-text">Elsevier Connect</span>\n                                        </a>\n                                    </li>\n                                    <li class="gh-nav-item">\n                                        <a href="/careers" class="anchor button-link-primary gh-nav-action" tabindex="0">\n                                            <span class="anchor-text">Careers</span>\n                                        </a>\n                                    </li>\n                                </ul>\n                            </div>\n                        </div>\n                    </div>\n                </li>\n                <li class="gh-nav-item gh-has-dd gh-move-to-spine">\n                    <div class="gh-ppvr">\n                        <div class="gh-ppvr-trigger">\n                            <button class="button-link button-medium button-link-primary gh-nav-action" tabindex="0" id="aa-globalheader-navigation-link2"\n                                data-aa-region="aa-globalheader-navigation-link2" data-aa-name="aa-globalheader-navigation-Solutions"\n                                role="button" aria-haspopup="true" aria-expanded="false" type="button">\n                                <span class="button-link-text">Solutions</span>\n                            </button>\n                        </div>\n                        <div class="gh-ppvr-cnt gh-ppvr-right">\n                            <div class="gh-ppvr-arrow-cnt">\n                                <div class="gh-ppvr-arrow gh-arrow-right">\n                                    <div class="u-position-relative">\n                                        <div class="gh-ppvr-arrow-fill"></div>\n                                    </div>\n                                </div>\n                            </div>\n                            <div class="gh-ppvr-cnt-inner">\n                                <ul class="gh-dd-nav">\n                                    <li class="gh-nav-item">\n                                        <a href="/rd-solutions" class="anchor button-link-primary gh-nav-action" tabindex="0">\n                                            <span class="anchor-text">R&amp;D Solutions</span>\n                                        </a>\n                                    </li>\n                                    <li class="gh-nav-item">\n                                        <a href="/clinical-solutions" class="anchor button-link-primary gh-nav-action" tabindex="0">\n                                            <span class="anchor-text">Clinical Decision support</span>\n                                        </a>\n                                    </li>\n                                    <li class="gh-nav-item">\n                                        <a href="/education" class="anchor button-link-primary gh-nav-action" tabindex="0">\n                                            <span class="anchor-text">Healthcare Education</span>\n                                        </a>\n                                    </li>\n                                    <li class="gh-nav-item">\n                                        <a href="/research-intelligence" class="anchor button-link-primary gh-nav-action" tabindex="0">\n                                            <span class="anchor-text">Research Intelligence</span>\n                                        </a>\n                                    </li>\n                                    <li class="gh-nav-item">\n                                        <a href="/research-platforms" class="anchor button-link-primary gh-nav-action" tabindex="0">\n                                            <span class="anchor-text">Research Platforms</span>\n                                        </a>\n                                    </li>\n                                    <li class="gh-nav-item">\n                                        <a href="/solutions" class="anchor button-link-primary gh-nav-action" tabindex="0">\n                                            <span class="anchor-text">All solutions</span>\n                                        </a>\n                                    </li>\n                                </ul>\n                            </div>\n                        </div>\n                    </div>\n                </li>\n                <li class="gh-nav-item gh-has-dd gh-move-to-spine">\n                    <div class="gh-ppvr">\n                        <div class="gh-ppvr-trigger">\n                            <button class="button-link button-medium button-link-primary gh-nav-action" tabindex="0" id="aa-globalheader-navigation-link3"\n                                data-aa-region="aa-globalheader-navigation-link3" data-aa-name="aa-globalheader-navigation-Services"\n                                role="button" aria-haspopup="true" aria-expanded="false" type="button">\n                                <span class="button-link-text">Services</span>\n                            </button>\n                        </div>\n                        <div class="gh-ppvr-cnt gh-ppvr-right">\n                            <div class="gh-ppvr-arrow-cnt">\n                                <div class="gh-ppvr-arrow gh-arrow-right">\n                                    <div class="u-position-relative">\n                                        <div class="gh-ppvr-arrow-fill"></div>\n                                    </div>\n                                </div>\n                            </div>\n                            <div class="gh-ppvr-cnt-inner">\n                                <ul class="gh-dd-nav">\n                                    <li class="gh-nav-item">\n                                        <a href="/authors" class="anchor button-link-primary gh-nav-action" tabindex="0">\n                                            <span class="anchor-text">Authors</span>\n                                        </a>\n                                    </li>\n                                    <li class="gh-nav-item">\n                                        <a href="/editors" class="anchor button-link-primary gh-nav-action" tabindex="0">\n                                            <span class="anchor-text">Editors</span>\n                                        </a>\n                                    </li>\n                                    <li class="gh-nav-item">\n                                        <a href="/librarians" class="anchor button-link-primary gh-nav-action" tabindex="0">\n                                            <span class="anchor-text">Librarians</span>\n                                        </a>\n                                    </li>\n                                    <li class="gh-nav-item">\n                                        <a href="/reviewers" class="anchor button-link-primary gh-nav-action" tabindex="0">\n                                            <span class="anchor-text">Reviewers</span>\n                                        </a>\n                                    </li>\n                                </ul>\n                            </div>\n                        </div>\n                    </div>\n                </li>\n                <li class="gh-nav-item gh-has-dd gh-move-to-spine">\n                    <div class="gh-ppvr">\n                        <div class="gh-ppvr-trigger">\n                            <button class="button-link button-medium button-link-primary gh-nav-action" tabindex="0" id="aa-globalheader-navigation-link4"\n                                data-aa-region="aa-globalheader-navigation-link4" data-aa-name="aa-globalheader-navigation-Shop"\n                                role="button" aria-haspopup="true" aria-expanded="false" type="button">\n                                <span class="button-link-text">Shop</span>\n                            </button>\n                        </div>\n                        <div class="gh-ppvr-cnt gh-ppvr-right">\n                            <div class="gh-ppvr-arrow-cnt">\n                                <div class="gh-ppvr-arrow gh-arrow-right">\n                                    <div class="u-position-relative">\n                                        <div class="gh-ppvr-arrow-fill"></div>\n                                    </div>\n                                </div>\n                            </div>\n                            <div class="gh-ppvr-cnt-inner">\n                                <ul class="gh-dd-nav">\n                                    <li class="gh-nav-item">\n                                        <a href="/books-and-journals" class="anchor button-link-primary gh-nav-action" tabindex="0">\n                                            <span class="anchor-text">Books &amp; Journals</span>\n                                        </a>\n                                    </li>\n                                    <li class="gh-nav-item">\n                                        <a href="https://webshop.elsevier.com/?utm_source=ecom&utm_medium=top&utm_campaign=webshop"\n                                            class="anchor button-link-primary gh-nav-action anchor-external-link" tabindex="0">\n                                            <span class="anchor-text">Author Webshop</span>\n                                            <span class="gh-sr-only">(Opens new window)</span>\n                                        </a>\n                                    </li>\n                                </ul>\n                            </div>\n                        </div>\n                    </div>\n                </li>\n            </ul>\n        </nav>\n\n        <nav aria-label="utilities" class="gh-nav gh-nav-utilities gh-nav-h gh-nav-shrinkable">\n            <ul class="gh-nav-list u-list-reset">\n                <li class="gh-nav-item" id="js-wrapper-search-link">\n                    <button class="button-link button-medium button-link-primary gh-nav-action gh-nav-item-search gh-icon-btn bigsearch-toggle"\n                        tabindex="0" id="aa-globalheader-search" data-aa-region="aa-globalheader-search" data-aa-name="aa-globalheader-search"\n                        type="button">\n\n                        <svg xmlns="http://www.w3.org/2000/svg" version="1.1" focusable="false" aria-label="Search"\n                            viewBox="0 0 100 128" width="18.75" height="24" class="gh-icon icon-search">\n                            <path d="m19.22 76.91c-5.84-5.84-9.05-13.6-9.05-21.85s3.21-16.01 9.05-21.85c5.84-5.83 13.59-9.05 21.85-9.05 8.25 0 16.01 3.22 21.84 9.05 5.84 5.84 9.05 13.6 9.05 21.85s-3.21 16.01-9.05 21.85c-5.83 5.83-13.59 9.05-21.84 9.05-8.26 0-16.01-3.22-21.85-9.05zm80.33 29.6l-26.32-26.32c5.61-7.15 8.68-15.9 8.68-25.13 0-10.91-4.25-21.17-11.96-28.88-7.72-7.71-17.97-11.96-28.88-11.96s-21.17 4.25-28.88 11.96c-7.72 7.71-11.97 17.97-11.97 28.88s4.25 21.17 11.97 28.88c7.71 7.71 17.97 11.96 28.88 11.96 9.23 0 17.98-3.07 25.13-8.68l26.32 26.32 7.03-7.03"></path>\n                            <rect x="0" y="0" width="100%" height="100%" stroke="none" opacity="0">\n                                <title>Search</title>\n                            </rect>\n                        </svg>\n\n                        <span class="button-link-text"></span>\n                    </button>\n                </li>\n                <li class="gh-nav-item gh-has-dd">\n                    <div class="gh-ppvr u-clr-grey7 gh-is-empty" id="gh-cart-dd">\n                        <div class="gh-ppvr-trigger">\n                            <button class="button-link button-medium button-link-primary gh-nav-action gh-icon-btn gh-has-badge"\n                                tabindex="0" id="aa-globalheader-shopping-chart" data-aa-region="aa-globalheader-shopping-chart"\n                                data-aa-name="aa-globalheader-shopping-chart" role="button" aria-haspopup="true"\n                                aria-expanded="false" type="button">\n\n                                <svg xmlns="http://www.w3.org/2000/svg" version="1.1" focusable="false" aria-label="Shopping Cart"\n                                    viewBox="0 0 118 128" width="22.125" height="24" class="gh-icon icon-shopping-cart">\n                                    <path d="m35.22 2e1c-2.23-6-8.93-12-16.62-12h-18.6v1e1h18.6c3.94 0 7.4 3.22 7.4 6.9v57.04c0 9.15 7.14 16.06 16.6 16.06h67.4v-1e1h-67.4c-4.01 0-6.6-2.38-6.6-6.06v-51.96h71.2c-0.77 1e1 -1.91 23.77-2.44 27.28-0.54 3.62-3.95 6.28-8.9 6.95-5.59 0.77-34.69 4.12-47.86 5.71v10.08c12.55-1.52 43.3-5.07 49.22-5.88 9.37-1.29 16.21-7.32 17.43-15.38 0.85-5.62 2.84-32.24 2.93-33.37l0.4-5.37h-82.76m64.78 84c-5.53 0-1e1 4.47-1e1 1e1 0 5.52 4.47 1e1 1e1 1e1 5.52 0 1e1 -4.48 1e1 -1e1 0-5.53-4.48-1e1 -1e1 -1e1m-64 0c-5.52 0-1e1 4.47-1e1 1e1 0 5.52 4.48 1e1 1e1 1e1s1e1 -4.48 1e1 -1e1c0-5.53-4.48-1e1 -1e1 -1e1"></path>\n                                    <rect x="0" y="0" width="100%" height="100%" stroke="none" opacity="0">\n                                        <title>Shopping Cart</title>\n                                    </rect>\n                                </svg>\n\n                                <span id="shopping-cart-count-container" class="button-link-text hide">\n                                    <div class="gh-badge gh-badge-sm u-flex-center u-font-sans">\n                                        <span class="shopping-cart-count">0</span>\n                                    </div>\n                                </span>\n                                <input type="hidden" id="criteo-hash" />\n                            </button>\n                        </div>\n                    </div>\n                </li>\n            </ul>\n        </nav>\n    </div>\n\n    <button class="button-link button-medium hide-for-small gh-icon-btn button-link-primary signin-btn" id="gh-signin-btn" type="button">\n        <svg xmlns="http://www.w3.org/2000/svg" version="1.1" focusable="false" viewBox="0 0 106 128" width="19.875"\n            height="24" class="gh-icon icon-person">\n            <path d="m11.07 1.2e2l0.84-9.29c1.97-18.79 23.34-22.93 41.09-22.93 17.74 0 39.11 4.13 41.08 22.84l0.84 9.38h10.04l-0.93-10.34c-2.15-20.43-20.14-31.66-51.03-31.66s-48.89 11.22-51.05 31.73l-0.91 10.27h10.03m41.93-102.29c-9.72 0-18.24 8.69-18.24 18.59 0 13.67 7.84 23.98 18.24 23.98s18.24-10.31 18.24-23.98c0-9.9-8.52-18.59-18.24-18.59zm0 52.29c-15.96 0-28-14.48-28-33.67 0-15.36 12.82-28.33 28-28.33s28 12.97 28 28.33c0 19.19-12.04 33.67-28 33.67"></path>\n        </svg>\n    </button>\n\n    <div id="gh-profile-cnt" class="u-margin-left-m u-flex-center-ver gh-move-to-spine gu-hide">\n        <div class="gh-ppvr" id="gh-profile-dd" aria-label="">\n            <div class="gh-ppvr-trigger">\n                <div role="button" tabindex="0" aria-label="Profile dropwn" class="gh-avatar u-flex-center-ver gh-sm">\n                    <span class="gh-initials"></span>\n                </div>\n            </div>\n            <div id="gh-ppvr-cnt-gh-profile-dd" class="gh-ppvr-cnt gh-ppvr-right">\n                <div class="gh-ppvr-arrow-cnt">\n                    <div class="gh-ppvr-arrow gh-arrow-right">\n                        <div class="u-position-relative">\n                            <div class="gh-ppvr-arrow-fill"></div>\n                        </div>\n                    </div>\n                </div>\n                <div class="gh-ppvr-cnt-inner">\n                    <div class="gh-user-info u-flex-center-ver u-margin-bottom-m">\n                        <div aria-label="" class="gh-avatar u-flex-center-ver gh-md">\n                            <span class="gh-initials"></span>\n                        </div>\n                        <ul class="u-list-reset u-margin-left-s">\n                            <li class="gh-user-fname"></li>\n                            <li class="gh-user-email"></li>\n                        </ul>\n                    </div>\n                    <div class="gh-dd-actions">\n                        <button class="button button-medium button-tertiary view-account-btn" type="button">\n                            <span class="button-text">View account</span>\n                        </button>\n                        <button class="button button-medium button-primary sign-out-btn" type="button">\n                            <span class="button-text">Sign out</span>\n                        </button>\n                    </div>\n                </div>\n            </div>\n        </div>\n    </div>\n\n    <div id="gh-mobile-menu" class="gh-theme-light">\n        <div class="gh-hamburger gh-open-menu u-fill-grey7 u-margin-left-m">\n            <button class="button-link button-medium u-flex-center-ver button-link-primary" aria-label="Open mobile menu" aria-expanded="false" type="button">\n\n                <svg xmlns="http://www.w3.org/2000/svg" version="1.1" class="gh-hamburger-svg-el" height="18" width="32">\n                    <path d="M0 14h40v2H0zm0-7h40v2H0zm0-7h40v2H0z"></path>\n                </svg>\n\n            </button>\n        </div>\n\n        <div id="gh-overlay" class="u-overlay u-display-none" role="button" tabindex="-1"></div>\n\n        <div id="gh-drawer" aria-label="Mobile menu" class="" role="navigation">\n            <header id="gh-drawer-header" class="u-padding-s-xs text-s">\n                <div class="gh-hamburger gh-close-menu u-margin-left-s">\n                    <button class="button-link button-medium u-flex-center-ver button-link-primary" aria-label="Close mobile menu" aria-expanded="true" type="button">\n\n                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20"\n                            viewBox="0 0 20 20">\n                            <rect x="9.01" y="-2.95" width="1.97" height="25.91" transform="translate(9.86 -4.29) rotate(45)"></rect>\n                            <rect x="9.01" y="-2.95" width="1.97" height="25.91" transform="translate(24 9.86) rotate(135)"></rect>\n                        </svg>\n\n                    </button>\n                </div>\n                <div class="gh-dh-opt" id="gh-m-signin">\n                    <div>\n                        <p class="u-margin-bottom-s">Sign-in to view your account details and order history</p>\n                        <div class="gh-dh-actions">\n                            <button class="button-link button-medium button-link-secondary signin-btn" type="button">\n                                <span class="button-link-text">Sign in</span>\n                            </button>\n                        </div>\n                    </div>\n                </div>\n                <div class="gh-dh-opt gu-hide" id="gh-m-profile-cnt">\n                    <div aria-label="Profile image" class="gh-avatar u-flex-center-ver u-margin-right-s gh-xs">\n                        <span class="gh-initials"></span>\n                    </div>\n                    <div class="gh-dh-profile">\n                        <div class="gh-user-info gh-mobile">\n                            <span class="gh-user-email"></span>\n                        </div>\n                        <div class="gh-dh-actions">\n                            <button class="button-link button-medium u-margin-right-m button-link-secondary view-account-btn"\n                                type="button">\n                                <span class="button-link-text">View account</span>\n                            </button>\n                            <button class="button-link button-medium button-link-secondary sign-out-btn" type="button">\n                                <span class="button-link-text">Sign out</span>\n                            </button>\n                        </div>\n                    </div>\n                </div>\n            </header>\n            <div id="gh-mob-inst-cnt"></div>\n            <nav aria-label="links" class="gh-nav gh-nav-links gh-nav-v">\n                <ul class="gh-nav-list u-list-reset">\n                    <li role="presentation" class="gh-nav-item gh-has-dd">\n                        <div class="u-clr-grey4 u-margin-bottom-s gh-lbl" role="heading" aria-level="2" tabindex="0">About</div>\n                        <ul class="gh-dd-nav">\n                            <li class="gh-nav-item">\n                                <a href="/about" class="anchor button-link-primary gh-nav-action"\n                                    tabindex="0">\n                                    <span class="anchor-text">About Elsevier</span>\n                                </a>\n                            </li>\n                            <li class="gh-nav-item">\n                                <a href="/connect" class="anchor button-link-primary gh-nav-action" tabindex="0">\n                                    <span class="anchor-text">Elsevier Connect</span>\n                                </a>\n                            </li>\n                            <li class="gh-nav-item">\n                                <a href="/careers" class="anchor button-link-primary gh-nav-action" tabindex="0">\n                                    <span class="anchor-text">Careers</span>\n                                </a>\n                            </li>\n                        </ul>\n                    </li>\n                    <li role="presentation" class="gh-nav-item gh-has-dd">\n                        <div class="u-clr-grey4 u-margin-bottom-s gh-lbl" role="heading" aria-level="2" tabindex="0">Solutions</div>\n                        <ul class="gh-dd-nav">\n                            <li class="gh-nav-item">\n                                <a href="/rd-solutions" class="anchor button-link-primary gh-nav-action" tabindex="0">\n                                    <span class="anchor-text">R&amp;D Solutions</span>\n                                </a>\n                            </li>\n                            <li class="gh-nav-item">\n                                <a href="/clinical-solutions" class="anchor button-link-primary gh-nav-action" tabindex="0">\n                                    <span class="anchor-text">Clinical Decision support</span>\n                                </a>\n                            </li>\n                            <li class="gh-nav-item">\n                                <a href="/education" class="anchor button-link-primary gh-nav-action" tabindex="0">\n                                    <span class="anchor-text">Healthcare Education</span>\n                                </a>\n                            </li>\n                            <li class="gh-nav-item">\n                                <a href="/research-intelligence" class="anchor button-link-primary gh-nav-action" tabindex="0">\n                                    <span class="anchor-text">Research Intelligence</span>\n                                </a>\n                            </li>\n                            <li class="gh-nav-item">\n                                <a href="/research-platforms" class="anchor button-link-primary gh-nav-action" tabindex="0">\n                                    <span class="anchor-text">Research Platforms</span>\n                                </a>\n                            </li>\n                            <li class="gh-nav-item">\n                                <a href="/solutions" class="anchor button-link-primary gh-nav-action" tabindex="0">\n                                    <span class="anchor-text">All solutions</span>\n                                </a>\n                            </li>\n                        </ul>\n                    </li>\n                    <li role="presentation" class="gh-nav-item gh-has-dd">\n                        <div class="u-clr-grey4 u-margin-bottom-s gh-lbl" role="heading" aria-level="2" tabindex="0">Services</div>\n                        <ul class="gh-dd-nav">\n                            <li class="gh-nav-item">\n                                <a href="/authors" class="anchor button-link-primary gh-nav-action" tabindex="0">\n                                    <span class="anchor-text">Authors</span>\n                                </a>\n                            </li>\n                            <li class="gh-nav-item">\n                                <a href="/editors" class="anchor button-link-primary gh-nav-action" tabindex="0">\n                                    <span class="anchor-text">Editors</span>\n                                </a>\n                            </li>\n                            <li class="gh-nav-item">\n                                <a href="/reviewers" class="anchor button-link-primary gh-nav-action" tabindex="0">\n                                    <span class="anchor-text">Librarians</span>\n                                </a>\n                            </li>\n                            <li class="gh-nav-item">\n                                <a href="/librarians" class="anchor button-link-primary gh-nav-action" tabindex="0">\n                                    <span class="anchor-text">Reviewers</span>\n                                </a>\n                            </li>\n                        </ul>\n                    </li>\n                    <li role="presentation" class="gh-nav-item gh-has-dd">\n                        <div class="u-clr-grey4 u-margin-bottom-s gh-lbl" role="heading" aria-level="2" tabindex="0">Shop</div>\n                        <ul class="gh-dd-nav">\n                            <li class="gh-nav-item">\n                                <a href="/books-and-journals" class="anchor button-link-primary gh-nav-action" tabindex="0">\n                                    <span class="anchor-text">Books &amp; Journals</span>\n                                </a>\n                            </li>\n                            <li class="gh-nav-item">\n                                <a href="https://webshop.elsevier.com/?utm_source=ecom&utm_medium=top&utm_campaign=webshop"\n                                    class="anchor button-link-primary gh-nav-action anchor-external-link" tabindex="0">\n                                    <span class="anchor-text">Author Webshop</span>\n                                    <span class="gh-sr-only">(Opens new window)</span>\n                                </a>\n                            </li>\n                        </ul>\n                    </li>\n                </ul>\n            </nav>\n            <nav aria-label="utilities" class="gh-nav gh-nav-utilities gh-nav-v gh-nav-shrinkable">\n                <ul class="gh-nav-list u-list-reset">\n                    <li class="gh-nav-item u-hide">\n                        <button class="button-link button-medium button-link-primary gh-nav-action gh-nav-item-search"\n                            tabindex="0" id="aa-globalheader-search" data-aa-region="aa-globalheader-search"\n                            data-aa-name="aa-globalheader-search" type="button">\n                            <span class="button-link-text">Search</span>\n                        </button>\n                    </li>\n                </ul>\n            </nav>\n        </div>\n    </div>\n</div>\n\n<div id="gh-sub-header" class="u-flex-center-ver gh-sides-padding gh-move-to-spine">\n    <nav aria-label="links" class="gh-nav gh-nav-links gh-nav-h gh-nav-shrinkable u-hide">\n        <ul class="gh-nav-list u-list-reset">\n            <li class="gh-nav-item gh-has-dd gh-move-to-spine">\n                <div class="gh-ppvr">\n                    <div class="gh-ppvr-trigger">\n                        <button class="button-link button-medium button-link-primary gh-nav-action"\n                            tabindex="0" id="aa-globalheader-navigation-link1" data-aa-region="aa-globalheader-navigation-link1"\n                            data-aa-name="aa-globalheader-navigation-About" role="button" aria-haspopup="true"\n                            aria-expanded="false" type="button">\n                            <span class="button-link-text">About</span>\n                        </button>\n                    </div>\n                    <div class="gh-ppvr-cnt gh-ppvr-right">\n                        <div class="gh-ppvr-arrow-cnt">\n                            <div class="gh-ppvr-arrow gh-arrow-right">\n                                <div class="u-position-relative">\n                                    <div class="gh-ppvr-arrow-fill"></div>\n                                </div>\n                            </div>\n                        </div>\n                        <div class="gh-ppvr-cnt-inner">\n                            <ul class="gh-dd-nav">\n                                <li class="gh-nav-item">\n                                    <a href="/about" class="anchor button-link-primary gh-nav-action"\n                                        tabindex="0">\n                                        <span class="anchor-text">About Elsevier</span>\n                                    </a>\n                                </li>\n                                <li class="gh-nav-item">\n                                    <a href="/connect" class="anchor button-link-primary gh-nav-action" tabindex="0">\n                                        <span class="anchor-text">Elsevier Connect</span>\n                                    </a>\n                                </li>\n                                <li class="gh-nav-item">\n                                    <a href="/careers" class="anchor button-link-primary gh-nav-action" tabindex="0">\n                                        <span class="anchor-text">Careers</span>\n                                    </a>\n                                </li>\n                            </ul>\n                        </div>\n                    </div>\n                </div>\n            </li>\n            <li class="gh-nav-item gh-has-dd gh-move-to-spine">\n                <div class="gh-ppvr">\n                    <div class="gh-ppvr-trigger">\n                        <button class="button-link button-medium button-link-primary gh-nav-action"\n                            tabindex="0" id="aa-globalheader-navigation-link2" data-aa-region="aa-globalheader-navigation-link2"\n                            data-aa-name="aa-globalheader-navigation-Solutions" role="button" aria-haspopup="true"\n                            aria-expanded="false" type="button">\n                            <span class="button-link-text">Solutions</span>\n                        </button>\n                    </div>\n                    <div class="gh-ppvr-cnt gh-ppvr-right">\n                        <div class="gh-ppvr-arrow-cnt">\n                            <div class="gh-ppvr-arrow gh-arrow-right">\n                                <div class="u-position-relative">\n                                    <div class="gh-ppvr-arrow-fill"></div>\n                                </div>\n                            </div>\n                        </div>\n                        <div class="gh-ppvr-cnt-inner">\n                            <ul class="gh-dd-nav">\n                                <li class="gh-nav-item">\n                                    <a href="/rd-solutions" class="anchor button-link-primary gh-nav-action" tabindex="0">\n                                        <span class="anchor-text">R&amp;D Solutions</span>\n                                    </a>\n                                </li>\n                                <li class="gh-nav-item">\n                                    <a href="/clinical-solutions" class="anchor button-link-primary gh-nav-action" tabindex="0">\n                                        <span class="anchor-text">Clinical Decision support</span>\n                                    </a>\n                                </li>\n                                <li class="gh-nav-item">\n                                    <a href="/education" class="anchor button-link-primary gh-nav-action" tabindex="0">\n                                        <span class="anchor-text">Healthcare Education</span>\n                                    </a>\n                                </li>\n                                <li class="gh-nav-item">\n                                    <a href="/research-intelligence" class="anchor button-link-primary gh-nav-action" tabindex="0">\n                                        <span class="anchor-text">Research Intelligence</span>\n                                    </a>\n                                </li>\n                                <li class="gh-nav-item">\n                                    <a href="/research-platforms" class="anchor button-link-primary gh-nav-action" tabindex="0">\n                                        <span class="anchor-text">Research Platforms</span>\n                                    </a>\n                                </li>\n                                <li class="gh-nav-item">\n                                    <a href="/solutions" class="anchor button-link-primary gh-nav-action" tabindex="0">\n                                        <span class="anchor-text">All solutions</span>\n                                    </a>\n                                </li>\n                            </ul>\n                        </div>\n                    </div>\n                </div>\n            </li>\n            <li class="gh-nav-item gh-has-dd gh-move-to-spine">\n                <div class="gh-ppvr">\n                    <div class="gh-ppvr-trigger">\n                        <button class="button-link button-medium button-link-primary gh-nav-action"\n                            tabindex="0" id="aa-globalheader-navigation-link3" data-aa-region="aa-globalheader-navigation-link3"\n                            data-aa-name="aa-globalheader-navigation-Services" role="button" aria-haspopup="true"\n                            aria-expanded="false" type="button">\n                            <span class="button-link-text">Services</span>\n                        </button>\n                    </div>\n                    <div class="gh-ppvr-cnt gh-ppvr-right">\n                        <div class="gh-ppvr-arrow-cnt">\n                            <div class="gh-ppvr-arrow gh-arrow-right">\n                                <div class="u-position-relative">\n                                    <div class="gh-ppvr-arrow-fill"></div>\n                                </div>\n                            </div>\n                        </div>\n                        <div class="gh-ppvr-cnt-inner">\n                            <ul class="gh-dd-nav">\n                                <li class="gh-nav-item">\n                                    <a href="/authors" class="anchor button-link-primary gh-nav-action" tabindex="0">\n                                        <span class="anchor-text">Authors</span>\n                                    </a>\n                                </li>\n                                <li class="gh-nav-item">\n                                    <a href="/editors" class="anchor button-link-primary gh-nav-action" tabindex="0">\n                                        <span class="anchor-text">Editors</span>\n                                    </a>\n                                </li>\n                                <li class="gh-nav-item">\n                                    <a href="/reviewers" class="anchor button-link-primary gh-nav-action" tabindex="0">\n                                        <span class="anchor-text">Librarians</span>\n                                    </a>\n                                </li>\n                                <li class="gh-nav-item">\n                                    <a href="/librarians" class="anchor button-link-primary gh-nav-action" tabindex="0">\n                                        <span class="anchor-text">Reviewers</span>\n                                    </a>\n                                </li>\n                            </ul>\n                        </div>\n                    </div>\n                </div>\n            </li>\n            <li class="gh-nav-item gh-has-dd gh-move-to-spine">\n                <div class="gh-ppvr">\n                    <div class="gh-ppvr-trigger">\n                        <button class="button-link button-medium button-link-primary gh-nav-action"\n                            tabindex="0" id="aa-globalheader-navigation-link4" data-aa-region="aa-globalheader-navigation-link4"\n                            data-aa-name="aa-globalheader-navigation-Shop" role="button" aria-haspopup="true"\n                            aria-expanded="false" type="button">\n                            <span class="button-link-text">Shop</span>\n                        </button>\n                    </div>\n                    <div class="gh-ppvr-cnt gh-ppvr-right">\n                        <div class="gh-ppvr-arrow-cnt">\n                            <div class="gh-ppvr-arrow gh-arrow-right">\n                                <div class="u-position-relative">\n                                    <div class="gh-ppvr-arrow-fill"></div>\n                                </div>\n                            </div>\n                        </div>\n                        <div class="gh-ppvr-cnt-inner">\n                            <ul class="gh-dd-nav">\n                                <li class="gh-nav-item">\n                                    <a href="/books-and-journals" class="anchor button-link-primary gh-nav-action"\n                                        tabindex="0">\n                                        <span class="anchor-text">Books &amp; Journals</span>\n                                    </a>\n                                </li>\n                                <li class="gh-nav-item">\n                                    <a href="https://webshop.elsevier.com/?utm_source=ecom&utm_medium=top&utm_campaign=webshop"\n                                        class="anchor button-link-primary gh-nav-action anchor-external-link" tabindex="0">\n                                        <span class="anchor-text">Author Webshop</span>\n                                        <span class="gh-sr-only">(Opens new window)</span>\n                                    </a>\n                                </li>\n                            </ul>\n                        </div>\n                    </div>\n                </div>\n            </li>\n        </ul>\n    </nav>\n</div>\n'
            },
            useData: !0
        })
    },
    154: function(e, t, n) {
        var a = n(0);
        e.exports = (a.default || a).template({
            1: function(e, t, n, a, i) {
                var r = e.lambda,
                    o = e.escapeExpression;
                return '                <option value="' + o(r(t, t)) + '">' + o(r(t, t)) + "</option>\n"
            },
            compiler: [7, ">= 4.0.0"],
            main: function(e, t, n, a, i) {
                var r, o = null != t ? t : e.nullContext || {};
                return '<div id="studentSearchSection">\n    <div id="studentSearchFields">\n    <input id="keyword" class="searchInput" type="text" tabindex="1" placeholder="按学者姓名或机构搜索">\n        <select id="year" class="searchInput" tabindex="1">\n            <option value="" selected disabled hidden>年 *</option>\n' + (null != (r = n.each.call(o, null != t ? t.year : t, {
                    name: "each",
                    hash: {},
                    fn: e.program(1, i, 0),
                    inverse: e.noop,
                    data: i
                })) ? r : "") + '        </select>\n        <select id="topic" class="searchInput" tabindex="1">\n            <option value="" selected disabled hidden>学科 *</option>\n' + (null != (r = n.each.call(o, null != t ? t.topic : t, {
                    name: "each",
                    hash: {},
                    fn: e.program(1, i, 0),
                    inverse: e.noop,
                    data: i
                })) ? r : "") + '        </select>\n        <input id="submit" type="submit" value="搜索" tabindex="1">\n    </div>\n    <div id="clearSearch" tabindex="1"><a>取消搜索 x</a></div>\n    <br/>\n    <div id="warningMessage"></div>\n    <br/>\n    <div id="results"></div>\n</div>\n'
            },
            useData: !0
        })
    },
    155: function(e, t, n) {
        var a = n(0);
        e.exports = (a.default || a).template({
            1: function(e, t, n, a, i, r, o) {
                var s, l, c = null != t ? t : e.nullContext || {},
                    d = n.helperMissing;
                return '                    <li>\n                        <a href="#" data-target="' + e.escapeExpression((l = null != (l = n.index || i && i.index) ? l : d, "function" == typeof l ? l.call(c, {
                    name: "index",
                    hash: {},
                    data: i
                }) : l)) + '" class="menu-item' + (null != (s = (n.ifCond || t && t.ifCond || d).call(c, null != o[1] ? o[1].activeSlideNum : o[1], "===", i && i.index, {
                    name: "ifCond",
                    hash: {},
                    fn: e.program(2, i, 0, r, o),
                    inverse: e.noop,
                    data: i
                })) ? s : "") + '">' + (null != (l = null != (l = n.title || (null != t ? t.title : t)) ? l : d, s = "function" == typeof l ? l.call(c, {
                    name: "title",
                    hash: {},
                    data: i
                }) : l) ? s : "") + "</a>\n                    </li>\n"
            },
            2: function(e, t, n, a, i) {
                return " selected"
            },
            4: function(e, t, n, a, i, r, o) {
                var s, l, c = null != t ? t : e.nullContext || {},
                    d = n.helperMissing,
                    u = e.escapeExpression;
                return '            <li id="' + u((l = null != (l = n.index || i && i.index) ? l : d, "function" == typeof l ? l.call(c, {
                    name: "index",
                    hash: {},
                    data: i
                }) : l)) + '" class="slider-item' + (null != (s = (n.ifCond || t && t.ifCond || d).call(c, null != o[1] ? o[1].activeSlideNum : o[1], "===", i && i.index, {
                    name: "ifCond",
                    hash: {},
                    fn: e.program(2, i, 0, r, o),
                    inverse: e.noop,
                    data: i
                })) ? s : "") + '" data-title="' + u((l = null != (l = n.title || (null != t ? t.title : t)) ? l : d, "function" == typeof l ? l.call(c, {
                    name: "title",
                    hash: {},
                    data: i
                }) : l)) + '">\n' + (null != (s = n.each.call(c, null != t ? t.slides : t, {
                    name: "each",
                    hash: {},
                    fn: e.program(5, i, 0, r, o),
                    inverse: e.noop,
                    data: i
                })) ? s : "") + "            </li>\n"
            },
            5: function(e, t, n, a, i) {
                var r, o, s = null != t ? t : e.nullContext || {},
                    l = n.helperMissing;
                return '                    <div class="clearfix">\n                        <h1>' + e.escapeExpression((o = null != (o = n.title || (null != t ? t.title : t)) ? o : l, "function" == typeof o ? o.call(s, {
                    name: "title",
                    hash: {},
                    data: i
                }) : o)) + "</h1>\n                        " + (null != (o = null != (o = n.description || (null != t ? t.description : t)) ? o : l, r = "function" == typeof o ? o.call(s, {
                    name: "description",
                    hash: {},
                    data: i
                }) : o) ? r : "") + "\n                    </div>\n"
            },
            compiler: [7, ">= 4.0.0"],
            main: function(e, t, n, a, i, r, o) {
                var s, l = null != t ? t : e.nullContext || {};
                return '<section class="els-slider large-12 columns">\n    <div class="article-content">\n        <div class="row row-tight">\n            <div class="large-12 columns">\n                <h2>Stories that made our history</h2>\n            </div>\n        </div>\n    </div>\n    <div class="timeline">\n        <div class="menu-wrapper">\n            <ul class="menu">\n' + (null != (s = n.each.call(l, null != t ? t.chapters : t, {
                    name: "each",
                    hash: {},
                    fn: e.program(1, i, 0, r, o),
                    inverse: e.noop,
                    data: i
                })) ? s : "") + '            </ul>            \n        </div>\n    </div>\n\n    <div class="slider-content">\n        <ol>\n' + (null != (s = n.each.call(l, null != t ? t.chapters : t, {
                    name: "each",
                    hash: {},
                    fn: e.program(4, i, 0, r, o),
                    inverse: e.noop,
                    data: i
                })) ? s : "") + '        </ol>\n    </div>\n    <div class="row">\n        <div class="text-center">\n            <a class="cta-primary small timeline-top" href="#" title="Timeline top">Top</a>\n        </div>\n    </div>\n</section>\n'
            },
            useData: !0,
            useDepths: !0
        })
    },
    176: function(e, t, n) {
        var a = function() {
                return this || "object" == typeof self && self
            }() || Function("return this")(),
            i = a.regeneratorRuntime && Object.getOwnPropertyNames(a).indexOf("regeneratorRuntime") >= 0,
            r = i && a.regeneratorRuntime;
        if (a.regeneratorRuntime = void 0, e.exports = n(177), i) a.regeneratorRuntime = r;
        else try {
            delete a.regeneratorRuntime
        } catch (e) {
            a.regeneratorRuntime = void 0
        }
    },
    177: function(e, t) {
        ! function(t) {
            "use strict";

            function wrap(e, t, n, a) {
                var i = t && t.prototype instanceof Generator ? t : Generator,
                    r = Object.create(i.prototype),
                    o = new Context(a || []);
                return r._invoke = makeInvokeMethod(e, n, o), r
            }

            function tryCatch(e, t, n) {
                try {
                    return {
                        type: "normal",
                        arg: e.call(t, n)
                    }
                } catch (e) {
                    return {
                        type: "throw",
                        arg: e
                    }
                }
            }

            function Generator() {}

            function GeneratorFunction() {}

            function GeneratorFunctionPrototype() {}

            function defineIteratorMethods(e) {
                ["next", "throw", "return"].forEach(function(t) {
                    e[t] = function(e) {
                        return this._invoke(t, e)
                    }
                })
            }

            function AsyncIterator(e) {
                function invoke(t, n, a, r) {
                    var o = tryCatch(e[t], e, n);
                    if ("throw" !== o.type) {
                        var s = o.arg,
                            l = s.value;
                        return l && "object" == typeof l && i.call(l, "__await") ? Promise.resolve(l.__await).then(function(e) {
                            invoke("next", e, a, r)
                        }, function(e) {
                            invoke("throw", e, a, r)
                        }) : Promise.resolve(l).then(function(e) {
                            s.value = e, a(s)
                        }, function(e) {
                            return invoke("throw", e, a, r)
                        })
                    }
                    r(o.arg)
                }

                function enqueue(e, n) {
                    function callInvokeWithMethodAndArg() {
                        return new Promise(function(t, a) {
                            invoke(e, n, t, a)
                        })
                    }
                    return t = t ? t.then(callInvokeWithMethodAndArg, callInvokeWithMethodAndArg) : callInvokeWithMethodAndArg()
                }
                var t;
                this._invoke = enqueue
            }

            function makeInvokeMethod(e, t, n) {
                var a = u;
                return function(i, r) {
                    if (a === p) throw new Error("Generator is already running");
                    if (a === g) {
                        if ("throw" === i) throw r;
                        return doneResult()
                    }
                    for (n.method = i, n.arg = r;;) {
                        var o = n.delegate;
                        if (o) {
                            var s = maybeInvokeDelegate(o, n);
                            if (s) {
                                if (s === m) continue;
                                return s
                            }
                        }
                        if ("next" === n.method) n.sent = n._sent = n.arg;
                        else if ("throw" === n.method) {
                            if (a === u) throw a = g, n.arg;
                            n.dispatchException(n.arg)
                        } else "return" === n.method && n.abrupt("return", n.arg);
                        a = p;
                        var l = tryCatch(e, t, n);
                        if ("normal" === l.type) {
                            if (a = n.done ? g : h, l.arg === m) continue;
                            return {
                                value: l.arg,
                                done: n.done
                            }
                        }
                        "throw" === l.type && (a = g, n.method = "throw", n.arg = l.arg)
                    }
                }
            }

            function maybeInvokeDelegate(e, t) {
                var a = e.iterator[t.method];
                if (a === n) {
                    if (t.delegate = null, "throw" === t.method) {
                        if (e.iterator.return && (t.method = "return", t.arg = n, maybeInvokeDelegate(e, t), "throw" === t.method)) return m;
                        t.method = "throw", t.arg = new TypeError("The iterator does not provide a 'throw' method")
                    }
                    return m
                }
                var i = tryCatch(a, e.iterator, t.arg);
                if ("throw" === i.type) return t.method = "throw", t.arg = i.arg, t.delegate = null, m;
                var r = i.arg;
                return r ? r.done ? (t[e.resultName] = r.value, t.next = e.nextLoc, "return" !== t.method && (t.method = "next", t.arg = n), t.delegate = null, m) : r : (t.method = "throw", t.arg = new TypeError("iterator result is not an object"), t.delegate = null, m)
            }

            function pushTryEntry(e) {
                var t = {
                    tryLoc: e[0]
                };
                1 in e && (t.catchLoc = e[1]), 2 in e && (t.finallyLoc = e[2], t.afterLoc = e[3]), this.tryEntries.push(t)
            }

            function resetTryEntry(e) {
                var t = e.completion || {};
                t.type = "normal", delete t.arg, e.completion = t
            }

            function Context(e) {
                this.tryEntries = [{
                    tryLoc: "root"
                }], e.forEach(pushTryEntry, this), this.reset(!0)
            }

            function values(e) {
                if (e) {
                    var t = e[o];
                    if (t) return t.call(e);
                    if ("function" == typeof e.next) return e;
                    if (!isNaN(e.length)) {
                        var a = -1,
                            r = function next() {
                                for (; ++a < e.length;)
                                    if (i.call(e, a)) return next.value = e[a], next.done = !1, next;
                                return next.value = n, next.done = !0, next
                            };
                        return r.next = r
                    }
                }
                return {
                    next: doneResult
                }
            }

            function doneResult() {
                return {
                    value: n,
                    done: !0
                }
            }
            var n, a = Object.prototype,
                i = a.hasOwnProperty,
                r = "function" == typeof Symbol ? Symbol : {},
                o = r.iterator || "@@iterator",
                s = r.asyncIterator || "@@asyncIterator",
                l = r.toStringTag || "@@toStringTag",
                c = "object" == typeof e,
                d = t.regeneratorRuntime;
            if (d) return void(c && (e.exports = d));
            d = t.regeneratorRuntime = c ? e.exports : {}, d.wrap = wrap;
            var u = "suspendedStart",
                h = "suspendedYield",
                p = "executing",
                g = "completed",
                m = {},
                v = {};
            v[o] = function() {
                return this
            };
            var f = Object.getPrototypeOf,
                b = f && f(f(values([])));
            b && b !== a && i.call(b, o) && (v = b);
            var y = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(v);
            GeneratorFunction.prototype = y.constructor = GeneratorFunctionPrototype, GeneratorFunctionPrototype.constructor = GeneratorFunction, GeneratorFunctionPrototype[l] = GeneratorFunction.displayName = "GeneratorFunction", d.isGeneratorFunction = function(e) {
                var t = "function" == typeof e && e.constructor;
                return !!t && (t === GeneratorFunction || "GeneratorFunction" === (t.displayName || t.name))
            }, d.mark = function(e) {
                return Object.setPrototypeOf ? Object.setPrototypeOf(e, GeneratorFunctionPrototype) : (e.__proto__ = GeneratorFunctionPrototype, l in e || (e[l] = "GeneratorFunction")), e.prototype = Object.create(y), e
            }, d.awrap = function(e) {
                return {
                    __await: e
                }
            }, defineIteratorMethods(AsyncIterator.prototype), AsyncIterator.prototype[s] = function() {
                return this
            }, d.AsyncIterator = AsyncIterator, d.async = function(e, t, n, a) {
                var i = new AsyncIterator(wrap(e, t, n, a));
                return d.isGeneratorFunction(t) ? i : i.next().then(function(e) {
                    return e.done ? e.value : i.next()
                })
            }, defineIteratorMethods(y), y[l] = "Generator", y[o] = function() {
                return this
            }, y.toString = function() {
                return "[object Generator]"
            }, d.keys = function(e) {
                var t = [];
                for (var n in e) t.push(n);
                return t.reverse(),
                    function next() {
                        for (; t.length;) {
                            var n = t.pop();
                            if (n in e) return next.value = n, next.done = !1, next
                        }
                        return next.done = !0, next
                    }
            }, d.values = values, Context.prototype = {
                constructor: Context,
                reset: function(e) {
                    if (this.prev = 0, this.next = 0, this.sent = this._sent = n, this.done = !1, this.delegate = null, this.method = "next", this.arg = n, this.tryEntries.forEach(resetTryEntry), !e)
                        for (var t in this) "t" === t.charAt(0) && i.call(this, t) && !isNaN(+t.slice(1)) && (this[t] = n)
                },
                stop: function() {
                    this.done = !0;
                    var e = this.tryEntries[0],
                        t = e.completion;
                    if ("throw" === t.type) throw t.arg;
                    return this.rval
                },
                dispatchException: function(e) {
                    function handle(a, i) {
                        return o.type = "throw", o.arg = e, t.next = a, i && (t.method = "next", t.arg = n), !!i
                    }
                    if (this.done) throw e;
                    for (var t = this, a = this.tryEntries.length - 1; a >= 0; --a) {
                        var r = this.tryEntries[a],
                            o = r.completion;
                        if ("root" === r.tryLoc) return handle("end");
                        if (r.tryLoc <= this.prev) {
                            var s = i.call(r, "catchLoc"),
                                l = i.call(r, "finallyLoc");
                            if (s && l) {
                                if (this.prev < r.catchLoc) return handle(r.catchLoc, !0);
                                if (this.prev < r.finallyLoc) return handle(r.finallyLoc)
                            } else if (s) {
                                if (this.prev < r.catchLoc) return handle(r.catchLoc, !0)
                            } else {
                                if (!l) throw new Error("try statement without catch or finally");
                                if (this.prev < r.finallyLoc) return handle(r.finallyLoc)
                            }
                        }
                    }
                },
                abrupt: function(e, t) {
                    for (var n = this.tryEntries.length - 1; n >= 0; --n) {
                        var a = this.tryEntries[n];
                        if (a.tryLoc <= this.prev && i.call(a, "finallyLoc") && this.prev < a.finallyLoc) {
                            var r = a;
                            break
                        }
                    }
                    r && ("break" === e || "continue" === e) && r.tryLoc <= t && t <= r.finallyLoc && (r = null);
                    var o = r ? r.completion : {};
                    return o.type = e, o.arg = t, r ? (this.method = "next", this.next = r.finallyLoc, m) : this.complete(o)
                },
                complete: function(e, t) {
                    if ("throw" === e.type) throw e.arg;
                    return "break" === e.type || "continue" === e.type ? this.next = e.arg : "return" === e.type ? (this.rval = this.arg = e.arg, this.method = "return", this.next = "end") : "normal" === e.type && t && (this.next = t), m
                },
                finish: function(e) {
                    for (var t = this.tryEntries.length - 1; t >= 0; --t) {
                        var n = this.tryEntries[t];
                        if (n.finallyLoc === e) return this.complete(n.completion, n.afterLoc), resetTryEntry(n), m
                    }
                },
                catch: function(e) {
                    for (var t = this.tryEntries.length - 1; t >= 0; --t) {
                        var n = this.tryEntries[t];
                        if (n.tryLoc === e) {
                            var a = n.completion;
                            if ("throw" === a.type) {
                                var i = a.arg;
                                resetTryEntry(n)
                            }
                            return i
                        }
                    }
                    throw new Error("illegal catch attempt")
                },
                delegateYield: function(e, t, a) {
                    return this.delegate = {
                        iterator: values(e),
                        resultName: t,
                        nextLoc: a
                    }, "next" === this.method && (this.arg = n), m
                }
            }
        }(function() {
            return this || "object" == typeof self && self
        }() || Function("return this")())
    },
    179: function(e, t) {
        e.exports = {
            chapters: [{
                title: "<br/>Inspiration",
                slides: [{
                    title: "1580",
                    description: "<p>On the run from Catholic persecution, Protestant bookbinder Louis Elzevier settles in Leiden, the Netherlands. The Elzevier family expands its business, and makes a name for itself in academia by publishing some of the greatest minds of the seventeenth century.</p><img src='https://s3.eu-west-2.amazonaws.com/elcm-cdn.dev.elsevier.io/matrix/ui/timeline/imgs/timeline/1580.jpg'/><p class='text-center'>The Elzeviers’ print shop in the second half of the seventeenth century.</p>"
                }, {
                    title: "1712",
                    description: "<p>As the publisher of ground-breaking scientific authors such as Galileo and Descartes, the Elzevier family enjoyed an excellent reputation for over a century. Though the company goes bankrupt and ceases to exist, they are remembered as some of the greatest publishers who had ever lived.</p><p><img src='https://s3.eu-west-2.amazonaws.com/elcm-cdn.dev.elsevier.io/matrix/ui/timeline/imgs/timeline/1712.jpg' /></p><p class='text-center'>Galileo’s Two New Sciences was first published by the Elzeviers in 1638.</p>"
                }]
            }, {
                title: "<br/>Founding",
                slides: [{
                    title: "1880",
                    description: "<p>Jacobus Robbers joins hands with four other businessmen in founding modern Elsevier in Rotterdam, the Netherlands. Inspired by the historical publishers, they adopt their name and the Non Solus printer’s mark – meaning “not alone” – which highlights the relationship between authors and publishers.</p><img src='https://s3.eu-west-2.amazonaws.com/elcm-cdn.dev.elsevier.io/matrix/ui/timeline/imgs/timeline/1880.jpg' /><p class='text-center'>Elsevier’s first logo, inspired by the classic Non Solus.</p>"
                }, {
                    title: "1884",
                    description: "<p>Elsevier’s goal is to spread knowledge and entertainment among all layers of the Dutch population. The company publishes preacher-researcher Anthony Winkler Prins’s Illustrated Encyclopedia, whose quality ensured it would remain one of Elsevier’s flagship products for over a century.</p><img src='https://s3.eu-west-2.amazonaws.com/elcm-cdn.dev.elsevier.io/matrix/ui/timeline/imgs/timeline/1884.jpg' /><p class='text-center'>A tome from the Winkler Prins Encyclopedia in the 1930s.</p>"
                }]
            }, {
                title: "Science <br/>publishing",
                slides: [{
                    title: "1928",
                    description: "<p>23-year-old journalist Ted Klautz accepts the position of secretary at Elsevier. Young, bold and ambitious, he has a good grasp of the changing times that see the arrival of new media, the expansion of advertising, and increasing competition. Three years later, he is made director of the company.</p><img src='https://s3.eu-west-2.amazonaws.com/elcm-cdn.dev.elsevier.io/matrix/ui/timeline/imgs/timeline/1928.jpg' /><p class='text-center'>Portrait of Ted Klautz as director of Elsevier, circa 1931.</p>"
                }, {
                    title: "1937",
                    description: "<p>The persecution of Jews in Nazi Germany leads to many people fleeing the country. As a result, Germany’s once-thriving academic publishing industry is rapidly crumbling. Considering it their moral duty to help those in need, Elsevier begins publishing the works of German exiled scientists.</p><img src='https://s3.eu-west-2.amazonaws.com/elcm-cdn.dev.elsevier.io/matrix/ui/timeline/imgs/timeline/1937.jpg' /><p class='text-center'>One of Elsevier’s most ambitious projects of the day, an Encyclopaedia of Organic Chemistry.</p>"
                }, {
                    title: "1940",
                    description: "<p>Anticipating the center of academia would eventually shift to the English-speaking world, Elsevier founds offices in London and New York. Director Ted Klautz’s ambitions in science publishing need to be put on hold as the Netherlands is occupied by the Nazis in May.</p><img src='https://s3.eu-west-2.amazonaws.com/elcm-cdn.dev.elsevier.io/matrix/ui/timeline/imgs/timeline/1940.jpg' /><p class='text-center'>A wartime dinner in honor of chemist and Elsevier advisor Jan Ketelaar, who had just been appointed professor at the University of Amsterdam.</p>"
                }, {
                    title: "1945",
                    description: "<p>The Netherlands is liberated. After years of suppression, Elsevier prepares to make a new start. A newsmagazine titled Elsevier’s Weekly is launched, and becomes the most widely-read Dutch periodical of the 1940s and 1950s – enabling the company to further invest in academic publishing.</p><img src='https://s3.eu-west-2.amazonaws.com/elcm-cdn.dev.elsevier.io/matrix/ui/timeline/imgs/timeline/1945.jpg' /><p class='text-center'>A newsstand promoting Elsevier’s Weekly in the 1950s.</p>"
                }]
            }, {
                title: "Post-war <br/>growth",
                slides: [{
                    title: "1947",
                    description: "<p>Elsevier publishes a broad array of scientific works in the Research in Holland series, and launches Biochimica et Biophysica Acta, its first journal. Though the company is praised for the quality of its content, it proves difficult for a small Dutch newcomer to make its mark on the academic world.</p><img src='https://s3.eu-west-2.amazonaws.com/elcm-cdn.dev.elsevier.io/matrix/ui/timeline/imgs/timeline/1947.jpg' /><p class='text-center'>Cover for a book in the Research in Holland series, 1946.</p>"
                }, {
                    title: "1958",
                    description: "<p>After more than two decades of investments, Elsevier’s science division yields its first profit. To strengthen its relationship with academia, and ensure a continuous stream of manuscripts for publication, the company starts to hire more scientists to develop its portfolio.</p><img src='https://s3.eu-west-2.amazonaws.com/elcm-cdn.dev.elsevier.io/matrix/ui/timeline/imgs/timeline/1958.jpg' /><p class='text-center'>Advertising for Chemistry of Carbon Compounds, one of Elsevier’s first scientific titles that achieved financial success, ca. 1958.</p>"
                }, {
                    title: "1963",
                    description: "<p>Listed on the Amsterdam stock market since 1952, Elsevier has become an internationally-oriented publishing company that includes a thriving science division. With a constantly expanding staff, director Dolf van den Brink opens a modern office on the edge of the Dutch capital.</p><img src='https://s3.eu-west-2.amazonaws.com/elcm-cdn.dev.elsevier.io/matrix/ui/timeline/imgs/timeline/1963.jpg' /><p class='text-center'>The Elsevier offices on Jan van Galenstraat in Amsterdam, ca. 1973.</p>"
                }, {
                    title: "1970",
                    description: "<p>Elsevier’s science division is merged with the North-Holland Publishing Company, expanding the company’s chemistry-oriented portfolio with a large number of physics titles. Elsevier now ranks among the largest science publishers in the world, joining the likes of Pergamon, Springer, and Wiley.</p><img src='https://s3.eu-west-2.amazonaws.com/elcm-cdn.dev.elsevier.io/matrix/ui/timeline/imgs/timeline/1970.jpg' /><p class='text-center'>Brochure for Associated Scientific Publishers, in which the new companies North-Holland and Excerpta Medica were also included, ca. 1974.</p>"
                }]
            }, {
                title: "New <br/>technology",
                slides: [{
                    title: "1971",
                    description: "<p>Elsevier acquires Excerpta Medica, a small medical abstract publisher based in Amsterdam. As the first and only company in the world that employed a database for the production of journals, it introduced computer technology to Elsevier.</p><img src='https://s3.eu-west-2.amazonaws.com/elcm-cdn.dev.elsevier.io/matrix/ui/timeline/imgs/timeline/1971.jpg' /><p class='text-center'>Excerpta Medica’s workflow, from manuscript to database to printed journal, ca. 1971.</p>"
                }, {
                    title: "1978",
                    description: "<p>Always aiming to be on the forefront of technology, Elsevier invests in the new media of the day. The company merges with Dutch newspaper publisher NDU, and devises a strategy to broadcast textual news to people’s television sets through Viewdata and Teletext technology.</p><img src='https://s3.eu-west-2.amazonaws.com/elcm-cdn.dev.elsevier.io/matrix/ui/timeline/imgs/timeline/1978.jpg' /><p class='text-center'>Elsevier internal newspaper article about the new Viewdata technology, ca. 1978.</p>"
                }, {
                    title: "1979",
                    description: "<p>Elsevier Science Publishers launches the Article Delivery Over Network Information System (ADONIS) project in conjunction with four business partners. The project aims to find a way to deliver scientific articles to libraries electronically, and would continue for over a decade.</p><img src='https://s3.eu-west-2.amazonaws.com/elcm-cdn.dev.elsevier.io/matrix/ui/timeline/imgs/timeline/1979.jpg' /><p class='text-center'>Article on ADONIS from the last stage of the project, ca. 1993.</p>"
                }, {
                    title: "1981",
                    description: "<p>In a time when stock market takeovers are rapidly becoming the norm, the Elsevier Group sets out to grow by retaining only its most valuable assets in science and B2B publishing – and finding an international merger partner.</p><img src='https://s3.eu-west-2.amazonaws.com/elcm-cdn.dev.elsevier.io/matrix/ui/timeline/imgs/timeline/1981.png' /><p class='text-center'>Elsevier-NDU NV brochure, circa 1980</p>"
                }]
            }, {
                title: "<br/>Merger",
                slides: [{
                    title: "1987",
                    description: "<p>Elsevier announces the divestment of its consumer books division. Elsevier surprises the Dutch business world by attempting a take-over of publisher Kluwer. Though the merger is not realized, Elsevier catches the eye of future partner Reed International.</p><img src='https://s3.eu-west-2.amazonaws.com/elcm-cdn.dev.elsevier.io/matrix/ui/timeline/imgs/timeline/1987.jpg' /><p class='text-center'>A photo of the shareholders’ meeting, during which Kluwer was the point of discussion, 1987.</p>"
                }, {
                    title: "1991",
                    description: "<p>In conjunction with nine American universities, Elsevier’s The University Licensing Project (TULIP) becomes the first ground-breaking step in making published, copyrighted material available over the Internet. It forms the basis for ScienceDirect, launched six years later.</p><img src='https://s3.eu-west-2.amazonaws.com/elcm-cdn.dev.elsevier.io/matrix/ui/timeline/imgs/timeline/1991.jpg' /><p class='text-center'>TULIP landing page, ca. 1993.</p>"
                }, {
                    title: "1993",
                    description: "<p>Elsevier merges with Reed International to form the Reed Elsevier Group PLC, a British-Dutch media company based in London. Elsevier Science Publishers continues as a subsidiary of Reed Elsevier (today known as RELX Group).</p><img src='https://s3.eu-west-2.amazonaws.com/elcm-cdn.dev.elsevier.io/matrix/ui/timeline/imgs/timeline/1993.jpg' /><p class='text-center'>The Reed Elsevier board of directors, ca. 1992.</p>"
                }]
            }, {
                title: "Digital <br/>age",
                slides: [{
                    title: "1997",
                    description: "<p>After almost two decades of experiments, ScienceDirect is launched as the first online repository of electronic (scientific) books and articles. Though librarians and researchers initially need to get used to the new technology, more and more of them switch to e-only subscriptions.</p><img src='https://s3.eu-west-2.amazonaws.com/elcm-cdn.dev.elsevier.io/matrix/ui/timeline/imgs/timeline/1997.jpg' /><p class='text-center'>ScienceDirect landing page, ca. 2000.</p>"
                }, {
                    title: "2001",
                    description: "<p>Elsevier Science Publishers is expanded with a set of strong American imprints predominantly aimed at medical professionals, including Mosby’s, W.B. Saunders, and Academic Press. The following year, the Reed Elsevier subsidiary officially changes its name to simply 'Elsevier.'</p><img src='https://s3.eu-west-2.amazonaws.com/elcm-cdn.dev.elsevier.io/matrix/ui/timeline/imgs/timeline/2001.jpg' /><p class='text-center'>Some of the American books and journals now part of the Elsevier family, ca. 2001.</p>"
                }, {
                    title: "2004",
                    description: "<p>Scopus is launched. The abstract database covers journals and books from various publishers, and measures performance on both author and publication levels. Elsevier initiates a strategy as part of which “workflow solutions” software aims to help researchers in their work.</p><img src='https://s3.eu-west-2.amazonaws.com/elcm-cdn.dev.elsevier.io/matrix/ui/timeline/imgs/timeline/2004.jpg' /><p class='text-center'>Scopus landing page, ca. 2005.</p>"
                }, {
                    title: "2009",
                    description: "<p>SciVal Spotlight is released. Based on citations in the Scopus database, this strategic analysis tool enabled research administrators to make informed decisions by measuring their institution’s relative standing in terms of productivity, grants, publications, and more.</p><img src='https://s3.eu-west-2.amazonaws.com/elcm-cdn.dev.elsevier.io/matrix/ui/timeline/imgs/timeline/2009.jpg' /><p class='text-center'>SciVal, ca. 2009.</p>"
                }]
            }, {
                title: "Information <br/>analytics",
                slides: [{
                    title: "2013",
                    description: "<p>Mendeley joins the Elsevier family. Originally a London-based start-up, the app allows researchers to manage and share papers, discover new data and collaborate online.</p><img src='https://s3.eu-west-2.amazonaws.com/elcm-cdn.dev.elsevier.io/matrix/ui/timeline/imgs/timeline/2013.jpg' /><p class='text-center'>The Mendeley crew, ca. 2013.</p>"
                }, {
                    title: "2015",
                    description: "<p>By the 2010s Elsevier had evolved into a technology-driven business with an audience of millions of researchers worldwide. With the advent of digital technology the company started focusing on analytical and decision-making tools, helping with a wider range of high-value tasks and problems – moving beyond ‘read this’ and ‘how to find this’ to answer the customer’s most pressing question: ‘what should I do?’.</p>"
                }]
            }]
        }
    },
    26: function(e, t, n) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        });
        var a = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
                return typeof e
            } : function(e) {
                return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
            },
            i = t.prodMatch = new RegExp(/^(www\.)?elsevier.com/),
            r = (t.getEnv = function() {
                return window.location.hostname.match(i) ? "prod" : "dev"
            }, t.getUrlPathArray = function() {
                return window.location.pathname.split("/").filter(String)
            }),
            o = t.getUrlPathStringColonSeparated = function() {
                return window.location.pathname.split("/").filter(String).toString().replace("[#|?].*", "").replace(/^\/|\/$/g, "").replace(/,/g, ":")
            },
            s = t.languageCodes = ["de-de", "en-au", "en-gb", "en-in", "en-xm", "en-xs", "es-es", "es-mx", "fr-fr", "ja-jp", "ko-kr", "pl-pl", "pt-br", "tr-tr", "zh-cn", "zh-tw"],
            l = t.getLocaleFound = function() {
                return s.some(function(e) {
                    return r().includes(e)
                })
            },
            c = t.getPathArrayMinusLocale = function() {
                return l() ? r().slice(1) : r()
            };
        t.getLanguage = function() {
            return s.indexOf(r()[0]) > -1 ? r()[0] : "en"
        }, t.getPageName = function() {
            return s.indexOf(r()[0]) > -1 ? r().length > 1 ? /:(.+)/.exec(o())[1] : "Home" : r().length > 0 ? o() : "Home"
        }, t.loadTime = function() {
            var e = "";
            if ("undefined" != typeof performance && "object" === a(performance.timing)) {
                var t = performance.timing,
                    n = t.redirectStart || t.fetchStart || t.requestStart,
                    i = t.domContentLoadedEventEnd || t.domInteractive || t.domComplete || t.loadEventComplete;
                n && i && i > n && (e = i - n)
            }
            return e.toString()
        }, t.loadTimeStamp = function() {
            var e = "";
            if ("undefined" != typeof performance && "object" === a(performance.timing)) {
                var t = performance.timing,
                    n = t.redirectStart || t.fetchStart || t.requestStart;
                n && (e = n)
            }
            return e.toString()
        }, t.pathExists = function(e) {
            return window.location.pathname.indexOf(e) > -1
        }, t.elementExists = function(e) {
            return document.querySelectorAll(e).length > 0
        }, t.getPublishedDate = function(e) {
            var t = 'meta[Name="' + e + '"]',
                n = document.querySelector(t);
            if (n && n.content) {
                var a = n.content.substr(0, n.content.indexOf(" "));
                return new Date(a).getTime() / 1e3
            }
            return "unknown"
        }, t.getMetadataContent = function(e) {
            var t = document.querySelector(e);
            return t && t.content ? t.content : "unknown"
        }, t.generateBreadcrumbString = function() {
            var e = document.querySelectorAll(".breadcrumb li");
            return Array.from(e).map(function(e) {
                return e.textContent.trim()
            }).join(" > ")
        }, t.generateSolutionsPageName = function() {
            var e = "solutions:" + c()[1].trim();
            return "solutions" === r()[r().length - 2] ? e + ":home" : r().findIndex(function(e) {
                return e.includes("content") || e.includes("resource")
            }) > 0 ? e + ":content" : r().findIndex(function(e) {
                return e.includes("contact") || e.includes("sales") || "form" === e || "forms" === e
            }) > 0 ? e + ":form" : r().findIndex(function(e) {
                return e.includes("support")
            }) > 0 ? e + ":support" : r().findIndex(function(e) {
                return "news" === e || "newsletter" === e
            }) > 0 ? e + ":news" : e + ":info"
        }, t.updatePageDataContent = function(e, t) {
            Array.from(t).forEach(function(t) {
                var n = Object.keys(t).map(function(e) {
                        return t[e]
                    }),
                    a = Object.keys(t),
                    i = void 0;
                if (document.querySelectorAll(n).length > 0)
                    if (i = document.querySelectorAll(n), i.length > 1) {
                        var r = [];
                        Array.from(i).forEach(function(e) {
                            r.push(e.textContent.trim())
                        }), e[a.toString()] = r
                    } else e[a.toString()] = i[0].textContent.trim();
                else e[a.toString()] = "unknown"
            })
        }
    },
    66: function(e, t) {
        e.exports = jQuery
    },
    67: function(e, t, n) {
        "use strict";

        function _interopRequireWildcard(e) {
            if (e && e.__esModule) return e;
            var t = {};
            if (null != e)
                for (var n in e) Object.prototype.hasOwnProperty.call(e, n) && (t[n] = e[n]);
            return t.default = e, t
        }
        Object.defineProperty(t, "__esModule", {
            value: !0
        }), t.AaDataEventTracking = void 0;
        var a = n(26),
            i = _interopRequireWildcard(a),
            r = n(103),
            o = _interopRequireWildcard(r),
            s = n(102),
            l = n(104),
            c = n(105),
            d = n(106);
        new(t.AaDataEventTracking = function() {
            var e = ["/connect/", "/solutions/", "/books/", "/journals/"],
                t = window.location.pathname;
            if ("loading" === document.readyState) {
                e.some(function(e) {
                    return t.includes(e)
                }) ? (t.includes("/connect/") && i.elementExists("#breadcrumb") && o.setConnectMetadataContent(), "prod" !== i.getEnv() && t.includes("/connect/") && i.elementExists("#breadcrumb") && o.setConnectPageContent(), "prod" !== i.getEnv() && t.includes("/solutions/") && o.setSolutionsPageContent(), "prod" !== i.getEnv() && t.includes("/books/") && i.elementExists("section.book") && o.setBooksPageContent(), "prod" !== i.getEnv() && t.includes("/journals/") && i.elementExists("section.journal") && o.setJournalsPageContent(), o.sendPageData()) : pageData = {
                    content: [{}],
                    page: {
                        businessUnit: "ELS:OPS",
                        environment: i.getEnv(),
                        language: i.getLanguage(),
                        loadTimestamp: i.loadTimeStamp(),
                        name: i.getPageName(),
                        noTracking: "false",
                        productName: "EC",
                        type: "NP-GP",
                        loadTime: i.loadTime()
                    },
                    visitor: {
                        accessType: "ec:anon_guest",
                        ipAddress: ""
                    }
                }
            }
            document.addEventListener("DOMContentLoaded", function() {
                "undefined" != typeof videojs && (0, s.sendBcVideoTrackEvent)(), "undefined" != typeof validateFront && ((0, l.getFormData)(), (0, l.sendPageFormViewData)(), (0, l.waitForValidationFormSubmit)()), document.querySelectorAll(".st-sticky-share-buttons, .article-actions .social-share").length > 0 && (0, c.sendSocialShareThisPageData)(), document.querySelectorAll("div[id*=share-that-wrapper] .sidebar").length > 0 && (0, c.sendSocialShareThatPageData)(), document.querySelectorAll('a[href$=".pdf"]').length > 0 && (0, d.sendPageDataPdfDownloadTracker)()
            })
        })
    },
    68: function(e, t, n) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        }), t.GenuineProduct = void 0;
        var a = n(66),
            i = function(e) {
                return e && e.__esModule ? e : {
                    default: e
                }
            }(a),
            r = n(8),
            o = n(116);
        t.GenuineProduct = function() {
            var e = function(e, t) {
                    var n = e.val().split("-");
                    e.val(n[0] || ""), t.val(n[1] || "")
                },
                t = function(e, t, n) {
                    (0, i.default)(".service-unavailable").hide(), e.addClass("loading");
                    var a = {
                        identifierCode: t.val().toUpperCase(),
                        validationCode: n.val().toUpperCase(),
                        longitude: elcm.user.geo.longitude,
                        latitude: elcm.user.geo.latitude
                    };
                    i.default.ajax({
                        url: r.config.genuine[elcm.env].url,
                        dataType: "json",
                        method: "GET",
                        data: a,
                        success: function(t) {
                            e.removeClass("loading"), 200 === t.code ? e.addClass("success") : e.addClass("fail")
                        },
                        error: function(t) {
                            e.removeClass("loading"), 400 === t.status ? e.addClass("fail") : (0, i.default)(".service-unavailable").show()
                        }
                    })
                };
            (0, i.default)(document).ready(function() {
                var n = (0, i.default)(".key"),
                    a = (0, i.default)(".genuine-box-container .key-1 input"),
                    r = (0, i.default)(".genuine-box-container .key-2 input"),
                    s = (0, i.default)(".genuine-box-container"),
                    l = (0, i.default)(".genuine-box-container button");
                n.keyup(function(n) {
                    var o = a.val(),
                        c = r.val();
                    o.match("-") && (e(a, r), r.focus()), 8 === o.length && 3 === c.length ? l.prop("disabled", !1) : l.prop("disabled", !0), 13 !== n.which || l.prop("disabled") || t(s, a, r), s.removeClass("success"), s.removeClass("fail"), (0, i.default)(".service-unavailable").hide()
                }), a.keyup(function() {
                    (0, o.changeInputFocusAtMaxLength)(a, r)
                }), r.keydown(function(e) {
                    (0, o.changeInputFocusAtLastDelete)(e.which, r, a)
                }), l.click(function() {
                    t(s, a, r)
                })
            })
        }()
    },
    69: function(e, t, n) {
        "use strict";
        var a = n(108);
        document.addEventListener("DOMContentLoaded", function() {
            document.querySelector(".global-header.header-container") && new a.GlobalHeader
        })
    },
    70: function(e, t, n) {
        "use strict";
        var a = n(8),
            i = n(6),
            r = n(109);
        document.addEventListener("DOMContentLoaded", function() {
            if (elcm && elcm.featureFlag && elcm.featureFlag.isActive && elcm.featureFlag.isActive("global-integrated-header") && "global" === (0, i.getLocaleFromUrl)()) {
                var e = {
                    url: {
                        cdn: a.config.cdn[elcm.env].url
                    }
                };
                new r.GlobalHeaderAB("div.header-container.header-fixed", e)
            }
        })
    },
    71: function(e, t, n) {
        "use strict";
        var a = n(110),
            i = n(9),
            r = n(8);
        document.addEventListener("DOMContentLoaded", function() {
            (0, i.hasElement)('[id="institute-search-tool"]') && new a.InstituteCertificateTool({
                mountNode: document.querySelector("#institute-search-tool"),
                searchToolUrl: r.config.searchtool[elcm.env].url
            })
        })
    },
    72: function(e, t, n) {
        "use strict";
        var a = n(9);
        document.addEventListener("DOMContentLoaded", function() {
            if ((0, a.hasElement)('[id^="share-that-wrapper"]')) {
                var e = document.getElementById("facebook"),
                    t = document.getElementById("twitter"),
                    n = document.getElementById("linkedin"),
                    i = document.getElementById("googleplus"),
                    r = document.getElementById("email"),
                    o = navigator.language,
                    s = window.location,
                    l = "menubar=no,toolbar=no,resizable=yes,scrollbars=yes,height=300,width=600",
                    c = void 0;
                c = document.querySelectorAll('meta[Name="Title"]').length ? document.querySelector('meta[Name="Title"]').content : document.title.length > 0 ? document.title : "Elsevier";
                var d = void 0;
                d = document.querySelectorAll('meta[Name="Description"]').length > 0 ? document.querySelector('meta[Name="Description"]').content : "Elsevier ", e.addEventListener("click", function(e) {
                    e.preventDefault(), window.open("https://www.facebook.com/sharer/sharer.php?u=" + encodeURIComponent(s), "", l)
                }, !1), t.addEventListener("click", function(e) {
                    e.preventDefault(), window.open("https://twitter.com/share?url=" + encodeURIComponent(s) + "&text=" + c, "", l)
                }, !1), n.addEventListener("click", function(e) {
                    e.preventDefault(), window.open("https://www.linkedin.com/shareArticle?mini=true&url=" + encodeURIComponent(s) + "&title=" + c + "&summary=" + d, "", l)
                }, !1), i.addEventListener("click", function(e) {
                    e.preventDefault(), window.open("https://plus.google.com/share?url=" + encodeURIComponent(s) + "&hl=" + o, "", l)
                }, !1), r.addEventListener("click", function(e) {
                    e.preventDefault(), window.open("mailto:?subject=Shared%20from%20Elsevier&body=" + encodeURIComponent(s), "", l)
                }, !1)
            }
        })
    },
    73: function(e, t, n) {
        "use strict";
        var a = n(111),
            i = n(9);
        document.addEventListener("DOMContentLoaded", function() {
            (0, i.hasElement)("div.els-timeline") && new a.Timeline({
                mountNode: "#timeline",
                activeSlideNum: 0,
                classContentContainer: ".slider-content",
                classHeaderContainer: ".header-container",
                classMenuContainer: ".menu",
                classSliderContainer: ".els-slider",
                classItem: "slider-item",
                classMenuItem: ".menu-item",
                classPageTop: ".timeline-top"
            })
        })
    },
    74: function(e, t, n) {
        "use strict";
        var a = n(112),
            i = n(9);
        document.addEventListener("DOMContentLoaded", function() {
            (0, i.hasElement)("span.tooltip-clickable") && new a.Tooltip({
                tooltipLinksAll: document.querySelectorAll(".tooltip-clickable"),
                tooltipLink: ".tooltip-clickable",
                openTooltipContent: ".tooltip-clickable.open .info",
                openTooltip: ".tooltip-clickable.open",
                toolTipInfo: ".tooltip-clickable .info",
                callout: '.tooltip-clickable span[class^="callout"]',
                closeTooltip: ".closeTooltip"
            })
        })
    },
    75: function(e, t, n) {
        "use strict";

        function _toConsumableArray(e) {
            if (Array.isArray(e)) {
                for (var t = 0, n = Array(e.length); t < e.length; t++) n[t] = e[t];
                return n
            }
            return Array.from(e)
        }

        function _classCallCheck(e, t) {
            if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
        }
        Object.defineProperty(t, "__esModule", {
            value: !0
        }), t.RegionSelector = void 0;
        var a = function() {
                function defineProperties(e, t) {
                    for (var n = 0; n < t.length; n++) {
                        var a = t[n];
                        a.enumerable = a.enumerable || !1, a.configurable = !0, "value" in a && (a.writable = !0), Object.defineProperty(e, a.key, a)
                    }
                }
                return function(e, t, n) {
                    return t && defineProperties(e.prototype, t), n && defineProperties(e, n), e
                }
            }(),
            i = n(115),
            r = n(6),
            o = n(24),
            s = t.RegionSelector = function() {
                function RegionSelector(e) {
                    _classCallCheck(this, RegionSelector), this.locale = (0, r.getLocaleFromUrl)(), this.region = this.getRegion(), this.mountNode = e.mountNode, this.regionList = [].concat(_toConsumableArray(document.querySelectorAll(".location-selector .location-language-container .location-language"))), this.bindEvents(), this.renderDOM()
                }
                return a(RegionSelector, [{
                    key: "bindEvents",
                    value: function() {
                        var e = this;
                        this.regionList.forEach(function(t) {
                            t.addEventListener("click", function(t) {
                                return e.setRegion(t.currentTarget.getAttribute("data-locale"))
                            })
                        })
                    }
                }, {
                    key: "getRegion",
                    value: function() {
                        var e = o.regionMap[this.locale];
                        return e || o.regionMap.global
                    }
                }, {
                    key: "setRegion",
                    value: function(e) {
                        if (this.region = o.regionMap[e], !this.region) return console.error("No mapping found for region", {
                            region: e
                        });
                        (0, i.setCookie)("elsevierRegion", this.region.code.toUpperCase())
                    }
                }, {
                    key: "renderDOM",
                    value: function() {
                        this.mountNode.innerHTML = '<a href="/location-selector">' + this.region.locale.name + ' - <span class="language">' + this.region.locale.lang + "</span></a>"
                    }
                }]), RegionSelector
            }();
        document.addEventListener("DOMContentLoaded", function() {
            var e = document.querySelector(".region-current");
            e && new s({
                mountNode: e
            })
        })
    },
    76: function(e, t, n) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        }), t.getClientData = t.getGeoData = void 0;
        var a = n(19),
            i = function(e) {
                return e && e.__esModule ? e : {
                    default: e
                }
            }(a),
            r = n(8),
            o = n(45),
            s = t.getGeoData = function() {
                var e = (0, o.storageAvailable)("sessionStorage"),
                    t = "elcm.user.geo";
                return e && sessionStorage.getItem(t) ? Promise.resolve(JSON.parse(sessionStorage.getItem(t))) : i.default.get(r.config.geo[elcm.env].url).then(function(n) {
                    var a = n.data;
                    return e && sessionStorage.setItem(t, JSON.stringify(a)), a
                }).catch(function(e) {
                    return {}
                })
            },
            l = t.getClientData = function() {
                var e = window.screen,
                    t = window.navigator;
                return {
                    os: (0, o.getClientOS)(t.userAgent),
                    browser: t.appName,
                    browserLang: t.language,
                    screenWidth: e.width,
                    screenHeight: e.height,
                    localStorage: !!window.localStorage,
                    cookies: t.cookieEnabled
                }
            };
        document.addEventListener("DOMContentLoaded", function() {
            elcm.user = elcm.user || {}, elcm.user.client = l(), elcm.user.geo = elcm.user.geo || {}, s().then(function(e) {
                elcm.user.geo = e
            })
        })
    },
    77: function(e, t, n) {
        "use strict";
        var a = n(6);
        (0, a.urlContainsPath)("/zh-cn") && document.addEventListener("DOMContentLoaded", function() {
            if ((0, a.urlContainsPath)("/about/careers/nested-content/tile-profile")) {
                var e = document.querySelector(".article-tile-quote-container q");
                e.innerHTML = e.innerHTML.replace(/\.+$/, "")
            }
        })
    },
    78: function(e, t, n) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        }), t.correctJapaneseQuoteEnding = void 0;
        var a = n(6),
            i = t.correctJapaneseQuoteEnding = function(e) {
                return "…" === e.slice(-1) || "。" === e.slice(-1) ? e : "..." === e.slice(-3) ? e.slice(0, e.length - 3) + "…" : (e = e.replace(/\.+$/, ""), "。" !== e.slice(-1) ? e + "。" : e)
            };
        (0, a.urlContainsPath)("/ja-jp") && document.addEventListener("DOMContentLoaded", function() {
            for (var e = document.querySelectorAll("q") || [], t = 0; t < e.length; t++) e[t].innerHTML = i(e[t].innerHTML);
            for (var n = document.querySelectorAll("blockquote p") || [], a = 0; a < n.length; a++) n[a].innerHTML = i(n[a].innerHTML)
        })
    },
    80: function(e, t, n) {
        "use strict";
        var a = n(6),
            i = n(107);
        document.addEventListener("DOMContentLoaded", function() {
            if ((0, a.urlContainsPath)("/solutions/journals-consult/catalog")) {
                var e = [{
                    key: "producttype",
                    value: "journals"
                }, {
                    key: "categoryrestriction",
                    value: "27322"
                }];
                new i.EmbeddedCatalog(e)
            }
        })
    }
}, [113]);
webpackJsonp([1], {
    114: function(e, n, a) {
        "use strict";
        Object.defineProperty(n, "__esModule", {
            value: !0
        });
        n.pushEvent = function(e, n, a) {
            if ("google" === e) try {
                a.event = n, dataLayer.push(a), delete a.event
            } catch (e) {
                console.error("Error pushing event to Google")
            } else if ("adobe" === e) try {
                pageDataTracker.trackEvent(n, a)
            } catch (e) {
                console.error("Error pushing event to Adobe")
            }
        }
    },
    117: function(e, n, a) {
        "use strict";
        Object.defineProperty(n, "__esModule", {
            value: !0
        });
        n.sanitiseInput = function(e) {
            return encodeURIComponent(e.replace(/[&<>='"]/g, "").trim())
        }, n.capitalizeFirst = function(e) {
            return "string" == typeof e ? e.charAt(0).toUpperCase() + e.slice(1) : e
        }, n.truncateString = function(e, n) {
            return e && e.length > n ? e.substr(0, n) + "..." : e
        }, n.commaSeparateNumber = function(e) {
            return "number" == typeof e ? e.toLocaleString() : e
        }
    },
    118: function(e, n, a) {
        "use strict";

        function _toConsumableArray(e) {
            if (Array.isArray(e)) {
                for (var n = 0, a = Array(e.length); n < e.length; n++) a[n] = e[n];
                return a
            }
            return Array.from(e)
        }
        var t = a(81),
            l = a(8),
            r = a(24),
            s = a(9),
            i = a(6);
        a(79), document.addEventListener("DOMContentLoaded", function() {
            var e = document.getElementById("js-bigsearch"),
                n = document.querySelector(".search-input"),
                a = document.querySelector(".bigsearch-input"),
                u = document.querySelector(".search-input label"),
                o = document.querySelector(".search-error span"),
                c = document.querySelector(".search-input .icon-standalone-delete"),
                h = document.querySelector(".bigsearch-tabs"),
                d = document.querySelector("#js-bigsearch .tabs"),
                p = (0, i.getLocaleFromUrl)();
            if (e) {
                var m = function() {
                        u.innerHTML = Foundation.utils.is_medium_up() ? r.regionMap[p].siteSearch.searchBox : r.regionMap[p].siteSearch.searchBoxMobile
                    },
                    f = function() {
                        "" !== a.value ? c.style.display = "inline" : c.style.display = "none"
                    };
                "global" !== p && (e.action = "/" + p + l.config.sitesearch.path), m(),
                    function() {
                        (0, i.urlContainsPath)("search-results") || (h.style.display = "none")
                    }(), (0, i.toggleSearch)("#js-wrapper-search-link", ".bigsearch-toggle"), window.addEventListener("resize", (0, s.deBounce)(function(e) {
                        m()
                    }, 150)), ["keyup", "focus", "blur", "change", "input"].forEach(function(e) {
                        a.addEventListener(e, function(t) {
                            "keyup" === e ? a.value.length && (o.innerHTML = "") : "focus" === e ? n.classList.add("active") : "blur" === e ? n.classList.remove("active") : "change" !== e && "input" !== e || f()
                        })
                    }), ["click", "keydown"].forEach(function(e) {
                        d.addEventListener(e, function(n) {
                            if (n.target && "LABEL" === n.target.nodeName)
                                if ("click" === e) {
                                    var a = [].concat(_toConsumableArray(d.querySelectorAll("li")));
                                    a.forEach(function(e) {
                                        return e.classList.remove("active")
                                    }), n.target.parentNode.classList.add("active")
                                } else {
                                    var t = n.which;
                                    13 !== t && 32 !== t || (n.preventDefault(), n.target.click())
                                }
                        })
                    }), c.addEventListener("click", function() {
                        a.value = "", a.focus(), c.style.display = "none"
                    }), e.addEventListener("submit", function(e) {
                        a.value.trim().length || (e.preventDefault(), o.innerHTML = r.regionMap[p].siteSearch.noSearchTerm, a.focus())
                    }), (0, s.hasBodyClass)("search-page") && ($(".bigsearch-area").removeClass("hide"), $(".standout.bigsearch-area").prependTo("#maincontent"), new t.SearchClient({
                        searchAPI: l.config.sitesearch[elcm.env].url,
                        searchPath: (0, i.getSiteSearchPath)(l.config.sitesearch.path),
                        searchRoutes: l.config.sitesearch.routes,
                        limit: Foundation.utils.is_small_only() ? 10 : 20,
                        allowedTypes: ["all", "pages", "books", "journals"],
                        locale: p,
                        classForm: "#js-bigsearch",
                        classAutoCompleteContainer: "#autocomplete-results",
                        classInputContainer: ".search-input",
                        classInput: "#search",
                        classResults: ".search-results",
                        classButton: ".search-form-button",
                        classTabContainer: ".tabs",
                        classTabContainerItems: ".tabs li"
                    }))
            }
        })
    },
    156: function(e, n, a) {
        var t = a(0);
        e.exports = (t.default || t).template({
            compiler: [7, ">= 4.0.0"],
            main: function(e, n, a, t, l) {
                var r, s = null != n ? n : e.nullContext || {},
                    i = a.helperMissing,
                    u = e.escapeExpression;
                return '<a class="cta-primary small" href="' + u((r = null != (r = a.primaryActionURL || (null != n ? n.primaryActionURL : n)) ? r : i, "function" == typeof r ? r.call(s, {
                    name: "primaryActionURL",
                    hash: {},
                    data: l
                }) : r)) + '" title="' + u((r = null != (r = a.primaryActionText || (null != n ? n.primaryActionText : n)) ? r : i, "function" == typeof r ? r.call(s, {
                    name: "primaryActionText",
                    hash: {},
                    data: l
                }) : r)) + '">\n    ' + u((r = null != (r = a.primaryActionText || (null != n ? n.primaryActionText : n)) ? r : i, "function" == typeof r ? r.call(s, {
                    name: "primaryActionText",
                    hash: {},
                    data: l
                }) : r)) + "\n</a>\n"
            },
            useData: !0
        })
    },
    157: function(e, n, a) {
        var t = a(0);
        e.exports = (t.default || t).template({
            compiler: [7, ">= 4.0.0"],
            main: function(e, n, a, t, l) {
                var r, s = null != n ? n : e.nullContext || {},
                    i = a.helperMissing,
                    u = e.escapeExpression;
                return '<a class="cta-secondary small" href="' + u((r = null != (r = a.secondaryActionURL || (null != n ? n.secondaryActionURL : n)) ? r : i, "function" == typeof r ? r.call(s, {
                    name: "secondaryActionURL",
                    hash: {},
                    data: l
                }) : r)) + '" title="' + u((r = null != (r = a.secondaryActionText || (null != n ? n.secondaryActionText : n)) ? r : i, "function" == typeof r ? r.call(s, {
                    name: "secondaryActionText",
                    hash: {},
                    data: l
                }) : r)) + '">' + u((r = null != (r = a.secondaryActionText || (null != n ? n.secondaryActionText : n)) ? r : i, "function" == typeof r ? r.call(s, {
                    name: "secondaryActionText",
                    hash: {},
                    data: l
                }) : r)) + "</a>\n"
            },
            useData: !0
        })
    },
    158: function(e, n, a) {
        var t = a(0);
        e.exports = (t.default || t).template({
            1: function(e, n, a, t, l, r, s) {
                var i, u = null != n ? n : e.nullContext || {},
                    o = a.helperMissing;
                return "\n" + (null != (i = (a.ifCond || n && n.ifCond || o).call(u, null != n ? n.totalResults : n, "<", 1, {
                    name: "ifCond",
                    hash: {},
                    fn: e.program(2, l, 0, r, s),
                    inverse: e.program(5, l, 0, r, s),
                    data: l
                })) ? i : "") + "\n" + (null != (i = (a.ifCond || n && n.ifCond || o).call(u, null != n ? n.numPages : n, ">", 1, {
                    name: "ifCond",
                    hash: {},
                    fn: e.program(46, l, 0, r, s),
                    inverse: e.noop,
                    data: l
                })) ? i : "") + "\n"
            },
            2: function(e, n, a, t, l) {
                var r, s, i = e.lambda,
                    u = e.escapeExpression,
                    o = null != n ? n : e.nullContext || {};
                return '        <div class="row row-tight">\n            <div class="columns medium-12">\n            <div class="search-result-feedback text-center">\n                <p class="text-medium text-ui">' + u(i(null != (r = null != (r = null != n ? n.locale : n) ? r.siteSearch : r) ? r.noResults : r, n)) + ' </p>\n                <h1 class="search-results-query text-medium text-ui">"' + u((s = null != (s = a.searchQuery || (null != n ? n.searchQuery : n)) ? s : a.helperMissing, "function" == typeof s ? s.call(o, {
                    name: "searchQuery",
                    hash: {},
                    data: l
                }) : s)) + '"</h1>\n            </div>\n            </div>\n        </div>\n        <div class="row row-tight">\n            <div class="columns medium-12">\n                <p class="text-medium text-ui text-center">' + u(i(null != (r = null != (r = null != n ? n.locale : n) ? r.siteSearch : r) ? r.alternativeTxt : r, n)) + '</p>\n            </div>\n        </div>\n        <div class="row">\n            <nav class="top-tasks" aria-label="secondary">\n                <ul class="not-enum">\n' + (null != (r = a.each.call(o, null != (r = null != (r = null != n ? n.locale : n) ? r.siteSearch : r) ? r.alternativeLinks : r, {
                    name: "each",
                    hash: {},
                    fn: e.program(3, l, 0),
                    inverse: e.noop,
                    data: l
                })) ? r : "") + "                </ul>\n            </nav>\n        </div>\n"
            },
            3: function(e, n, a, t, l) {
                var r, s = null != n ? n : e.nullContext || {},
                    i = a.helperMissing,
                    u = e.escapeExpression;
                return '                        <li><a href="' + u((r = null != (r = a.path || (null != n ? n.path : n)) ? r : i, "function" == typeof r ? r.call(s, {
                    name: "path",
                    hash: {},
                    data: l
                }) : r)) + '" title="' + u((r = null != (r = a.txt || (null != n ? n.txt : n)) ? r : i, "function" == typeof r ? r.call(s, {
                    name: "txt",
                    hash: {},
                    data: l
                }) : r)) + '">' + u((r = null != (r = a.txt || (null != n ? n.txt : n)) ? r : i, "function" == typeof r ? r.call(s, {
                    name: "txt",
                    hash: {},
                    data: l
                }) : r)) + "</a></li>\n"
            },
            5: function(e, n, a, t, l, r, s) {
                var i, u, o = null != n ? n : e.nullContext || {},
                    c = a.helperMissing,
                    h = e.escapeExpression;
                return '        <div class="row row-tight">\n            <div class="columns medium-12">\n                <h1>Version A</h1>\n            <div class="search-result-feedback">\n                <h1 class="search-results-query text-medium text-ui">' + h((a.commaSeparateNumber || n && n.commaSeparateNumber || c).call(o, null != n ? n.totalResults : n, {
                    name: "commaSeparateNumber",
                    hash: {},
                    data: l
                })) + '</h1>\n                <p class="text-medium text-ui"> search results found </p>\n' + (null != (i = (a.ifCond || n && n.ifCond || c).call(o, null != n ? n.searchQuery : n, "!==", "", {
                    name: "ifCond",
                    hash: {},
                    fn: e.program(6, l, 0, r, s),
                    inverse: e.noop,
                    data: l
                })) ? i : "") + '                <p class="text-medium text-ui"> in </p>\n                <h1 class="search-results-query text-medium text-ui">' + h((u = null != (u = a.searchType || (null != n ? n.searchType : n)) ? u : c, "function" == typeof u ? u.call(o, {
                    name: "searchType",
                    hash: {},
                    data: l
                }) : u)) + '</h1>\n                <p class="text-medium text-ui"> (' + h((u = null != (u = a.took || (null != n ? n.took : n)) ? u : c, "function" == typeof u ? u.call(o, {
                    name: "took",
                    hash: {},
                    data: l
                }) : u)) + " seconds)</p>\n            </div>\n            </div>\n            <hr/>\n        </div>\n" + (null != (i = a.each.call(o, null != (i = null != n ? n.results : n) ? i.data : i, {
                    name: "each",
                    hash: {},
                    fn: e.program(8, l, 0, r, s),
                    inverse: e.noop,
                    data: l
                })) ? i : "")
            },
            6: function(e, n, a, t, l) {
                var r, s;
                return '                    <p class="text-medium text-ui">for <p>\n                    <h1 class="search-results-query text-medium text-ui">"' + (null != (s = null != (s = a.searchQuery || (null != n ? n.searchQuery : n)) ? s : a.helperMissing, r = "function" == typeof s ? s.call(null != n ? n : e.nullContext || {}, {
                    name: "searchQuery",
                    hash: {},
                    data: l
                }) : s) ? r : "") + '"</h1>\n'
            },
            8: function(e, n, a, t, l, r, s) {
                var i, u, o = null != n ? n : e.nullContext || {},
                    c = a.helperMissing,
                    h = e.lambda,
                    d = e.escapeExpression;
                return '        <article class="row row-tight search-result">\n' + (null != (i = (a.ifCond || n && n.ifCond || c).call(o, null != (i = null != n ? n._source : n) ? i.imageUrl : i, "||", null != (i = null != (i = null != n ? n._source : n) ? i.meta : i) ? i.imageUrl : i, {
                    name: "ifCond",
                    hash: {},
                    fn: e.program(9, l, 0, r, s),
                    inverse: e.program(11, l, 0, r, s),
                    data: l
                })) ? i : "") + '\n                <div class="search-result-body">\n                    <h2 class="search-title text-normal">\n                        <a href="' + d(h(null != (i = null != n ? n._source : n) ? i.url : i, n)) + '" \n                        title="' + d(h(null != (i = null != n ? n._source : n) ? i.title : i, n)) + '" \n                        class="search-track" \n                        ' + (null != (i = (a.ifCond || n && n.ifCond || c).call(o, null != n ? n._type : n, "===", "journals", {
                    name: "ifCond",
                    hash: {},
                    fn: e.program(13, l, 0, r, s),
                    inverse: e.noop,
                    data: l
                })) ? i : "") + '\n                        data-event="search" \n                        data-category="search-click" \n                        data-label="' + d((u = null != (u = a._type || (null != n ? n._type : n)) ? u : c, "function" == typeof u ? u.call(o, {
                    name: "_type",
                    hash: {},
                    data: l
                }) : u)) + '-title" \n                        data-action="result-' + d((a.math || n && n.math || c).call(o, l && l.key, "+", null != s[1] ? s[1].start : s[1], {
                    name: "math",
                    hash: {},
                    data: l
                })) + '" \n                        data-value="' + d((a.math || n && n.math || c).call(o, null != s[1] ? s[1].start : s[1], "+", l && l.key, {
                    name: "math",
                    hash: {},
                    data: l
                })) + '" \n                        data-type="' + d((u = null != (u = a._type || (null != n ? n._type : n)) ? u : c, "function" == typeof u ? u.call(o, {
                    name: "_type",
                    hash: {},
                    data: l
                }) : u)) + '" \n                        data-division-code="' + d(h(null != (i = null != n ? n._source : n) ? i.divisionCode : i, n)) + '" \n                        data-isbn="' + d(h(null != (i = null != n ? n._source : n) ? i.isbn : i, n)) + '" \n                        data-issn="' + d(h(null != (i = null != n ? n._source : n) ? i.issn : i, n)) + '">\n' + (null != (i = a.if.call(o, null != (i = null != (i = null != n ? n._source : n) ? i.meta : i) ? i.title : i, {
                    name: "if",
                    hash: {},
                    fn: e.program(15, l, 0, r, s),
                    inverse: e.program(17, l, 0, r, s),
                    data: l
                })) ? i : "") + '                        </a>\n                    </h2>\n                    <div class="search-result-url">\n                        <a href="' + d(h(null != (i = null != n ? n._source : n) ? i.url : i, n)) + '" \n                        title="' + d(h(null != (i = null != n ? n._source : n) ? i.url : i, n)) + '" \n                        class="search-track" \n                        ' + (null != (i = (a.ifCond || n && n.ifCond || c).call(o, null != n ? n._type : n, "===", "journals", {
                    name: "ifCond",
                    hash: {},
                    fn: e.program(22, l, 0, r, s),
                    inverse: e.noop,
                    data: l
                })) ? i : "") + '\n                        data-event="search" \n                        data-category="search-click" \n                        data-label="' + d((u = null != (u = a._type || (null != n ? n._type : n)) ? u : c, "function" == typeof u ? u.call(o, {
                    name: "_type",
                    hash: {},
                    data: l
                }) : u)) + '-url" \n                        data-action="result-' + d((a.math || n && n.math || c).call(o, l && l.key, "+", null != s[1] ? s[1].start : s[1], {
                    name: "math",
                    hash: {},
                    data: l
                })) + '" \n                        data-value="' + d((a.math || n && n.math || c).call(o, null != s[1] ? s[1].start : s[1], "+", l && l.key, {
                    name: "math",
                    hash: {},
                    data: l
                })) + '" \n                        data-type="' + d((u = null != (u = a._type || (null != n ? n._type : n)) ? u : c, "function" == typeof u ? u.call(o, {
                    name: "_type",
                    hash: {},
                    data: l
                }) : u)) + '" \n                        data-division-code="' + d(h(null != (i = null != n ? n._source : n) ? i.divisionCode : i, n)) + '" \n                        data-isbn="' + d(h(null != (i = null != n ? n._source : n) ? i.isbn : i, n)) + '" \n                        data-issn="' + d(h(null != (i = null != n ? n._source : n) ? i.issn : i, n)) + '">\n                            ' + d((a.truncate || n && n.truncate || c).call(o, null != (i = null != n ? n._source : n) ? i.url : i, 80, {
                    name: "truncate",
                    hash: {},
                    data: l
                })) + '\n                        </a>\n                    </div>\n                    <div class="search-result-excerpt">\n' + (null != (i = a.if.call(o, null != (i = null != (i = null != n ? n._source : n) ? i.meta : i) ? i.desc : i, {
                    name: "if",
                    hash: {},
                    fn: e.program(24, l, 0, r, s),
                    inverse: e.program(26, l, 0, r, s),
                    data: l
                })) ? i : "") + '                    </div>\n                    <div class="search-result-meta">\n                        <p class="text-small text-ui">\n                            <span class="category">\n' + (null != (i = (a.ifCond || n && n.ifCond || c).call(o, null != (i = null != (i = null != n ? n._source : n) ? i.meta : i) ? i.community : i, "===", "Elsevier Connect", {
                    name: "ifCond",
                    hash: {},
                    fn: e.program(34, l, 0, r, s),
                    inverse: e.program(36, l, 0, r, s),
                    data: l
                })) ? i : "") + "                            </span>\n                        </p>\n                    </div>\n                </div>\n            </div>\n            \n" + (null != (i = a.if.call(o, null != (i = null != n ? n._source : n) ? i.imageUrl : i, {
                    name: "if",
                    hash: {},
                    fn: e.program(41, l, 0, r, s),
                    inverse: e.noop,
                    data: l
                })) ? i : "") + (null != (i = a.if.call(o, null != (i = null != (i = null != n ? n._source : n) ? i.meta : i) ? i.imageUrl : i, {
                    name: "if",
                    hash: {},
                    fn: e.program(43, l, 0, r, s),
                    inverse: e.noop,
                    data: l
                })) ? i : "") + "            </div>\n        </article>\n"
            },
            9: function(e, n, a, t, l) {
                return '                <div class="columns small-8 medium-10">\n'
            },
            11: function(e, n, a, t, l) {
                return '                <div class="columns medium-11">\n'
            },
            13: function(e, n, a, t, l) {
                return ' target="_blank" '
            },
            15: function(e, n, a, t, l) {
                var r;
                return "                                " + (null != (r = e.lambda(null != (r = null != (r = null != n ? n._source : n) ? r.meta : r) ? r.title : r, n)) ? r : "") + "\n\n"
            },
            17: function(e, n, a, t, l) {
                var r;
                return null != (r = a.if.call(null != n ? n : e.nullContext || {}, null != (r = null != n ? n.highlight : n) ? r.title : r, {
                    name: "if",
                    hash: {},
                    fn: e.program(18, l, 0),
                    inverse: e.program(20, l, 0),
                    data: l
                })) ? r : ""
            },
            18: function(e, n, a, t, l) {
                var r;
                return "                                " + (null != (r = e.lambda(null != (r = null != n ? n.highlight : n) ? r.title : r, n)) ? r : "") + "\n"
            },
            20: function(e, n, a, t, l) {
                var r;
                return "                                " + e.escapeExpression((a.truncate || n && n.truncate || a.helperMissing).call(null != n ? n : e.nullContext || {}, null != (r = null != n ? n._source : n) ? r.title : r, 70, {
                    name: "truncate",
                    hash: {},
                    data: l
                })) + "\n                            "
            },
            22: function(e, n, a, t, l) {
                return 'target="_blank" '
            },
            24: function(e, n, a, t, l) {
                var r;
                return "                            <p>" + (null != (r = e.lambda(null != (r = null != (r = null != n ? n._source : n) ? r.meta : r) ? r.desc : r, n)) ? r : "") + "</p>\n"
            },
            26: function(e, n, a, t, l) {
                var r;
                return null != (r = a.if.call(null != n ? n : e.nullContext || {}, null != (r = null != n ? n.highlight : n) ? r.description : r, {
                    name: "if",
                    hash: {},
                    fn: e.program(27, l, 0),
                    inverse: e.program(29, l, 0),
                    data: l
                })) ? r : ""
            },
            27: function(e, n, a, t, l) {
                var r;
                return "                            <p>" + (null != (r = e.lambda(null != (r = null != n ? n.highlight : n) ? r.description : r, n)) ? r : "") + "...</p>\n"
            },
            29: function(e, n, a, t, l) {
                var r;
                return null != (r = a.if.call(null != n ? n : e.nullContext || {}, null != (r = null != n ? n.highlight : n) ? r["file.content"] : r, {
                    name: "if",
                    hash: {},
                    fn: e.program(30, l, 0),
                    inverse: e.program(32, l, 0),
                    data: l
                })) ? r : ""
            },
            30: function(e, n, a, t, l) {
                var r;
                return "                            <p>" + (null != (r = e.lambda(null != (r = null != n ? n.highlight : n) ? r["file.content"] : r, n)) ? r : "") + "...</p>\n"
            },
            32: function(e, n, a, t, l) {
                var r, s = null != n ? n : e.nullContext || {},
                    i = a.helperMissing;
                return "                            <p>" + e.escapeExpression((a.encodeMyString || n && n.encodeMyString || i).call(s, (a.truncate || n && n.truncate || i).call(s, null != (r = null != n ? n._source : n) ? r.description : r, 170, {
                    name: "truncate",
                    hash: {},
                    data: l
                }), {
                    name: "encodeMyString",
                    hash: {},
                    data: l
                })) + "</p>\n                        "
            },
            34: function(e, n, a, t, l) {
                return "                                    Elsevier Connect\n"
            },
            36: function(e, n, a, t, l) {
                var r;
                return null != (r = (a.ifCond || n && n.ifCond || a.helperMissing).call(null != n ? n : e.nullContext || {}, null != (r = null != n ? n._source : n) ? r.webpageType : r, "===", "journals", {
                    name: "ifCond",
                    hash: {},
                    fn: e.program(37, l, 0),
                    inverse: e.program(39, l, 0),
                    data: l
                })) ? r : ""
            },
            37: function(e, n, a, t, l) {
                return "                                        Journals\n"
            },
            39: function(e, n, a, t, l) {
                return "                                        " + e.escapeExpression((a.capitalizeFirst || n && n.capitalizeFirst || a.helperMissing).call(null != n ? n : e.nullContext || {}, null != n ? n._type : n, {
                    name: "capitalizeFirst",
                    hash: {},
                    data: l
                })) + "\n"
            },
            41: function(e, n, a, t, l, r, s) {
                var i, u, o = e.lambda,
                    c = e.escapeExpression,
                    h = null != n ? n : e.nullContext || {},
                    d = a.helperMissing;
                return '                    <div class="columns small-4 medium-2">\n                        <figure class="search-result-image-static">\n                            <a href="' + c(o(null != (i = null != n ? n._source : n) ? i.url : i, n)) + '" \n                            title="' + c(o(null != (i = null != n ? n.source : n) ? i.title : i, n)) + '" \n                            class="search-track" \n                            ' + (null != (i = (a.ifCond || n && n.ifCond || d).call(h, null != n ? n._type : n, "===", "journals", {
                    name: "ifCond",
                    hash: {},
                    fn: e.program(22, l, 0, r, s),
                    inverse: e.noop,
                    data: l
                })) ? i : "") + '\n                            data-event="search" \n                            data-category="search-click" \n                            data-label="' + c((u = null != (u = a._type || (null != n ? n._type : n)) ? u : d, "function" == typeof u ? u.call(h, {
                    name: "_type",
                    hash: {},
                    data: l
                }) : u)) + '-image" \n                            data-action="result-' + c((a.math || n && n.math || d).call(h, l && l.key, "+", null != s[1] ? s[1].start : s[1], {
                    name: "math",
                    hash: {},
                    data: l
                })) + '" \n                            data-value="' + c((a.math || n && n.math || d).call(h, null != s[1] ? s[1].start : s[1], "+", l && l.key, {
                    name: "math",
                    hash: {},
                    data: l
                })) + '" \n                            data-type="' + c((u = null != (u = a._type || (null != n ? n._type : n)) ? u : d, "function" == typeof u ? u.call(h, {
                    name: "_type",
                    hash: {},
                    data: l
                }) : u)) + '" \n                            data-division-code="' + c(o(null != (i = null != n ? n._source : n) ? i.divisionCode : i, n)) + '" \n                            data-isbn="' + c(o(null != (i = null != n ? n._source : n) ? i.isbn : i, n)) + '" \n                            data-issn="' + c(o(null != (i = null != n ? n._source : n) ? i.issn : i, n)) + '">\n                                <img src="' + c(o(null != (i = null != n ? n._source : n) ? i.imageUrl : i, n)) + '" alt="' + c(o(null != (i = null != n ? n._source : n) ? i.title : i, n)) + '">\n                            </a>\n                        </figure>\n                    </div>\n'
            },
            43: function(e, n, a, t, l, r, s) {
                var i, u, o = e.lambda,
                    c = e.escapeExpression,
                    h = null != n ? n : e.nullContext || {},
                    d = a.helperMissing;
                return '                    <div class="columns small-4 medium-2">\n                        <figure class="search-result-image-static">\n                            <a href="' + c(o(null != (i = null != n ? n._source : n) ? i.url : i, n)) + '" \n                            title="' + c(o(null != (i = null != n ? n.source : n) ? i.title : i, n)) + '" \n                            class="search-track" \n                            ' + (null != (i = (a.ifCond || n && n.ifCond || d).call(h, null != n ? n._type : n, "!==", "webpages", {
                    name: "ifCond",
                    hash: {},
                    fn: e.program(44, l, 0, r, s),
                    inverse: e.noop,
                    data: l
                })) ? i : "") + '\n                            data-event="search" \n                            data-category="search-click" \n                            data-label="' + c((u = null != (u = a._type || (null != n ? n._type : n)) ? u : d, "function" == typeof u ? u.call(h, {
                    name: "_type",
                    hash: {},
                    data: l
                }) : u)) + '-image" \n                            data-action="result-' + c((a.math || n && n.math || d).call(h, l && l.key, "+", null != s[1] ? s[1].start : s[1], {
                    name: "math",
                    hash: {},
                    data: l
                })) + '" \n                            data-value="' + c((a.math || n && n.math || d).call(h, null != s[1] ? s[1].start : s[1], "+", l && l.key, {
                    name: "math",
                    hash: {},
                    data: l
                })) + '" \n                            data-type="' + c((u = null != (u = a._type || (null != n ? n._type : n)) ? u : d, "function" == typeof u ? u.call(h, {
                    name: "_type",
                    hash: {},
                    data: l
                }) : u)) + '" \n                            data-division-code="' + c(o(null != (i = null != n ? n._source : n) ? i.divisionCode : i, n)) + '" \n                            data-isbn="' + c(o(null != (i = null != n ? n._source : n) ? i.isbn : i, n)) + '" \n                            data-issn="' + c(o(null != (i = null != n ? n._source : n) ? i.issn : i, n)) + '">\n                                <img src="' + c(o(null != (i = null != (i = null != n ? n._source : n) ? i.meta : i) ? i.imageUrl : i, n)) + '" alt="' + c(o(null != (i = null != n ? n._source : n) ? i.title : i, n)) + '">\n                            </a>\n                        </figure>\n                    </div>\n'
            },
            44: function(e, n, a, t, l) {
                return ' target="_blank"'
            },
            46: function(e, n, a, t, l) {
                var r, s = null != n ? n : e.nullContext || {},
                    i = a.helperMissing;
                return '        <div id="pagination-wrapper" class="row">\n\n            <div class="columns medium-12">\n                <ol class="pagination">\n' + (null != (r = (a.ifCond || n && n.ifCond || i).call(s, null != n ? n.prevPage : n, ">", 0, {
                    name: "ifCond",
                    hash: {},
                    fn: e.program(47, l, 0),
                    inverse: e.noop,
                    data: l
                })) ? r : "") + "\n                    " + (null != (r = (a.pagination || n && n.pagination || i).call(s, null != n ? n.currentPage : n, null != n ? n.numPages : n, "limit 3", {
                    name: "pagination",
                    hash: {},
                    data: l
                })) ? r : "") + "\n\n" + (null != (r = (a.ifCond || n && n.ifCond || i).call(s, null != n ? n.nextPage : n, ">", 0, {
                    name: "ifCond",
                    hash: {},
                    fn: e.program(49, l, 0),
                    inverse: e.noop,
                    data: l
                })) ? r : "") + "                </ol>\n            </div>\n        </div>\n"
            },
            47: function(e, n, a, t, l) {
                var r;
                return '                        <li class="pag-prev-next">\n                            <button class="btn-left-arrow pag-prev btn-tertiary pagination-link" data-page="' + e.escapeExpression((r = null != (r = a.prevPage || (null != n ? n.prevPage : n)) ? r : a.helperMissing, "function" == typeof r ? r.call(null != n ? n : e.nullContext || {}, {
                    name: "prevPage",
                    hash: {},
                    data: l
                }) : r)) + '">Previous</button>\n                        </li>\n'
            },
            49: function(e, n, a, t, l) {
                var r;
                return '                        <li class="pag-prev-next">\n                            <button class="btn-right-arrow pag-next btn-tertiary pagination-link" data-page="' + e.escapeExpression((r = null != (r = a.nextPage || (null != n ? n.nextPage : n)) ? r : a.helperMissing, "function" == typeof r ? r.call(null != n ? n : e.nullContext || {}, {
                    name: "nextPage",
                    hash: {},
                    data: l
                }) : r)) + '">Next</button>\n                        </li>\n'
            },
            51: function(e, n, a, t, l) {
                var r;
                return '\n    <div class="row row-tight">\n        <div class="columns medium-12">\n          <div class="search-result-feedback">\n            <p class="text-medium text-ui">' + e.escapeExpression(e.lambda(null != (r = null != (r = null != n ? n.locale : n) ? r.siteSearch : r) ? r.serviceUnavailable : r, n)) + "</p>\n          </div>\n        </div>\n      </div>\n\n"
            },
            compiler: [7, ">= 4.0.0"],
            main: function(e, n, a, t, l, r, s) {
                var i;
                return "\n" + (null != (i = a.if.call(null != n ? n : e.nullContext || {}, null != n ? n.serviceIsAvailable : n, {
                    name: "if",
                    hash: {},
                    fn: e.program(1, l, 0, r, s),
                    inverse: e.program(51, l, 0, r, s),
                    data: l
                })) ? i : "")
            },
            useData: !0,
            useDepths: !0
        })
    },
    159: function(e, n, a) {
        var t = a(0);
        e.exports = (t.default || t).template({
            1: function(e, n, a, t, l, r, s) {
                var i, u = null != n ? n : e.nullContext || {},
                    o = a.helperMissing;
                return "\n" + (null != (i = (a.ifCond || n && n.ifCond || o).call(u, null != n ? n.totalResults : n, "<", 1, {
                    name: "ifCond",
                    hash: {},
                    fn: e.program(2, l, 0, r, s),
                    inverse: e.program(5, l, 0, r, s),
                    data: l
                })) ? i : "") + "\n" + (null != (i = (a.ifCond || n && n.ifCond || o).call(u, null != n ? n.numPages : n, ">", 1, {
                    name: "ifCond",
                    hash: {},
                    fn: e.program(8, l, 0, r, s),
                    inverse: e.noop,
                    data: l
                })) ? i : "") + "\n"
            },
            2: function(e, n, a, t, l) {
                var r, s, i = e.lambda,
                    u = e.escapeExpression,
                    o = null != n ? n : e.nullContext || {};
                return '        <div class="row row-tight">\n            <div class="columns medium-12">\n                <div class="search-result-feedback text-center">\n                    <p class="text-medium text-ui">' + u(i(null != (r = null != (r = null != n ? n.locale : n) ? r.siteSearch : r) ? r.noResults : r, n)) + ' </p>\n                    <h1 class="search-results-query text-medium text-ui">"' + u((s = null != (s = a.searchQuery || (null != n ? n.searchQuery : n)) ? s : a.helperMissing, "function" == typeof s ? s.call(o, {
                    name: "searchQuery",
                    hash: {},
                    data: l
                }) : s)) + '"</h1>\n                </div>\n            </div>\n        </div>\n        <div class="row row-tight">\n            <div class="columns medium-12">\n                <p class="text-medium text-ui text-center">' + u(i(null != (r = null != (r = null != n ? n.locale : n) ? r.siteSearch : r) ? r.alternativeTxt : r, n)) + '</p>\n            </div>\n        </div>\n        <div class="row">\n            <nav class="top-tasks" aria-label="secondary">\n                <ul class="not-enum">\n' + (null != (r = a.each.call(o, null != (r = null != (r = null != n ? n.locale : n) ? r.siteSearch : r) ? r.alternativeLinks : r, {
                    name: "each",
                    hash: {},
                    fn: e.program(3, l, 0),
                    inverse: e.noop,
                    data: l
                })) ? r : "") + "                </ul>\n            </nav>\n        </div>\n"
            },
            3: function(e, n, a, t, l) {
                var r, s = null != n ? n : e.nullContext || {},
                    i = a.helperMissing,
                    u = e.escapeExpression;
                return '                        <li><a href="' + u((r = null != (r = a.path || (null != n ? n.path : n)) ? r : i, "function" == typeof r ? r.call(s, {
                    name: "path",
                    hash: {},
                    data: l
                }) : r)) + '" title="' + u((r = null != (r = a.txt || (null != n ? n.txt : n)) ? r : i, "function" == typeof r ? r.call(s, {
                    name: "txt",
                    hash: {},
                    data: l
                }) : r)) + '">' + u((r = null != (r = a.txt || (null != n ? n.txt : n)) ? r : i, "function" == typeof r ? r.call(s, {
                    name: "txt",
                    hash: {},
                    data: l
                }) : r)) + "</a></li>\n"
            },
            5: function(e, n, a, t, l, r, s) {
                var i, u, o = null != n ? n : e.nullContext || {},
                    c = a.helperMissing,
                    h = e.escapeExpression,
                    d = e.lambda;
                return '        <div class="row row-tight">\n            <div class="columns medium-12">\n                <div class="search-result-feedback">\n                    <p class="text-ui">\n                        ' + h((a.commaSeparateNumber || n && n.commaSeparateNumber || c).call(o, null != n ? n.totalResults : n, {
                    name: "commaSeparateNumber",
                    hash: {},
                    data: l
                })) + " " + h(d(null != (i = null != (i = null != n ? n.locale : n) ? i.siteSearch : i) ? i.searchResultsFoundFor : i, n)) + '\n                    </p>\n                    <h1 class="search-results-query text-ui">"' + (null != (u = null != (u = a.searchQuery || (null != n ? n.searchQuery : n)) ? u : c, i = "function" == typeof u ? u.call(o, {
                    name: "searchQuery",
                    hash: {},
                    data: l
                }) : u) ? i : "") + '"</h1>\n                    <p class="text-ui"> ' + h((a.getObjectValue || n && n.getObjectValue || c).call(o, null != (i = null != n ? n.locale : n) ? i.siteSearch : i, {
                    name: "getObjectValue",
                    hash: {
                        key: null != n ? n.searchType : n
                    },
                    data: l
                })) + ' </p>\n                    <p class="text-ui"> (' + h((u = null != (u = a.took || (null != n ? n.took : n)) ? u : c, "function" == typeof u ? u.call(o, {
                    name: "took",
                    hash: {},
                    data: l
                }) : u)) + " " + h(d(null != (i = null != (i = null != n ? n.locale : n) ? i.siteSearch : i) ? i.seconds : i, n)) + ")</p>\n                </div>\n            </div>\n            <hr/>\n        </div>\n" + (null != (i = a.each.call(o, null != (i = null != n ? n.results : n) ? i.data : i, {
                    name: "each",
                    hash: {},
                    fn: e.program(6, l, 0, r, s),
                    inverse: e.noop,
                    data: l
                })) ? i : "")
            },
            6: function(e, n, t, l, r, s, i) {
                var u;
                return null != (u = e.invokePartial(a(63), n, {
                    name: "partials/search-results/generic",
                    hash: {
                        locale: null != i[1] ? i[1].locale : i[1]
                    },
                    data: r,
                    indent: "            ",
                    helpers: t,
                    partials: l,
                    decorators: e.decorators
                })) ? u : ""
            },
            8: function(e, n, a, t, l) {
                var r, s = null != n ? n : e.nullContext || {},
                    i = a.helperMissing;
                return '        <div id="pagination-wrapper" class="row">\n\n            <div class="columns medium-12">\n                <ol class="pagination">\n' + (null != (r = (a.ifCond || n && n.ifCond || i).call(s, null != n ? n.prevPage : n, ">", 0, {
                    name: "ifCond",
                    hash: {},
                    fn: e.program(9, l, 0),
                    inverse: e.noop,
                    data: l
                })) ? r : "") + "\n                    " + (null != (r = (a.pagination || n && n.pagination || i).call(s, null != n ? n.currentPage : n, null != n ? n.numPages : n, "limit 3", {
                    name: "pagination",
                    hash: {},
                    data: l
                })) ? r : "") + "\n\n" + (null != (r = (a.ifCond || n && n.ifCond || i).call(s, null != n ? n.nextPage : n, ">", 0, {
                    name: "ifCond",
                    hash: {},
                    fn: e.program(11, l, 0),
                    inverse: e.noop,
                    data: l
                })) ? r : "") + "                </ol>\n            </div>\n        </div>\n"
            },
            9: function(e, n, a, t, l) {
                var r, s, i = e.escapeExpression;
                return '                        <li class="pag-prev-next">\n                            <button class="btn-left-arrow pag-prev btn-tertiary pagination-link" data-page="' + i((s = null != (s = a.prevPage || (null != n ? n.prevPage : n)) ? s : a.helperMissing, "function" == typeof s ? s.call(null != n ? n : e.nullContext || {}, {
                    name: "prevPage",
                    hash: {},
                    data: l
                }) : s)) + '">' + i(e.lambda(null != (r = null != (r = null != n ? n.locale : n) ? r.siteSearch : r) ? r.previous : r, n)) + "</button>\n                        </li>\n"
            },
            11: function(e, n, a, t, l) {
                var r, s, i = e.escapeExpression;
                return '                        <li class="pag-prev-next">\n                            <button class="btn-right-arrow pag-next btn-tertiary pagination-link" data-page="' + i((s = null != (s = a.nextPage || (null != n ? n.nextPage : n)) ? s : a.helperMissing, "function" == typeof s ? s.call(null != n ? n : e.nullContext || {}, {
                    name: "nextPage",
                    hash: {},
                    data: l
                }) : s)) + '">' + i(e.lambda(null != (r = null != (r = null != n ? n.locale : n) ? r.siteSearch : r) ? r.next : r, n)) + "</button>\n                        </li>\n"
            },
            13: function(e, n, a, t, l) {
                var r;
                return '\n    <div class="row row-tight">\n        <div class="columns medium-12">\n          <div class="search-result-feedback">\n            <p class="text-medium text-ui">' + e.escapeExpression(e.lambda(null != (r = null != (r = null != n ? n.locale : n) ? r.siteSearch : r) ? r.serviceUnavailable : r, n)) + "</p>\n          </div>\n        </div>\n      </div>\n\n"
            },
            compiler: [7, ">= 4.0.0"],
            main: function(e, n, a, t, l, r, s) {
                var i;
                return "\n" + (null != (i = a.if.call(null != n ? n : e.nullContext || {}, null != n ? n.serviceIsAvailable : n, {
                    name: "if",
                    hash: {},
                    fn: e.program(1, l, 0, r, s),
                    inverse: e.program(13, l, 0, r, s),
                    data: l
                })) ? i : "")
            },
            usePartial: !0,
            useData: !0,
            useDepths: !0
        })
    },
    180: function(e, n, a) {
        function webpackContext(e) {
            return a(webpackContextResolve(e))
        }

        function webpackContextResolve(e) {
            var n = t[e];
            if (!(n + 1)) throw new Error("Cannot find module '" + e + "'.");
            return n
        }
        var t = {
            "./partials/search-results/components/meta.hbs": 59,
            "./partials/search-results/components/primary-cta.hbs": 156,
            "./partials/search-results/components/secondary-cta.hbs": 157,
            "./partials/search-results/components/text-excerpt.hbs": 60,
            "./partials/search-results/components/thumbnail.hbs": 39,
            "./partials/search-results/components/title.hbs": 61,
            "./partials/search-results/components/url.hbs": 62,
            "./partials/search-results/generic.hbs": 63,
            "./results-a.hbs": 158,
            "./results.hbs": 159
        };
        webpackContext.keys = function() {
            return Object.keys(t)
        }, webpackContext.resolve = webpackContextResolve, e.exports = webpackContext, webpackContext.id = 180
    },
    39: function(e, n, a) {
        var t = a(0);
        e.exports = (t.default || t).template({
            1: function(e, n, a, t, l) {
                return 'target="_blank" '
            },
            compiler: [7, ">= 4.0.0"],
            main: function(e, n, a, t, l, r, s) {
                var i, u, o = e.lambda,
                    c = e.escapeExpression,
                    h = null != n ? n : e.nullContext || {},
                    d = a.helperMissing;
                return '<figure class="search-result-image-static">\n    <a\n        href="' + c(o(null != (i = null != n ? n._source : n) ? i.url : i, n)) + '"\n        title="' + c(o(null != (i = null != n ? n.source : n) ? i.title : i, n)) + '"\n        class="search-track"\n        ' + (null != (i = (a.ifCond || n && n.ifCond || d).call(h, null != n ? n._type : n, "===", "journals", {
                    name: "ifCond",
                    hash: {},
                    fn: e.program(1, l, 0, r, s),
                    inverse: e.noop,
                    data: l
                })) ? i : "") + '\n        data-event="search"\n        data-category="search-click"\n        data-label="' + c((u = null != (u = a._type || (null != n ? n._type : n)) ? u : d, "function" == typeof u ? u.call(h, {
                    name: "_type",
                    hash: {},
                    data: l
                }) : u)) + '-image"\n        data-action="result-' + c((a.math || n && n.math || d).call(h, l && l.key, "+", null != s[1] ? s[1].start : s[1], {
                    name: "math",
                    hash: {},
                    data: l
                })) + '"\n        data-value="' + c((a.math || n && n.math || d).call(h, null != s[1] ? s[1].start : s[1], "+", l && l.key, {
                    name: "math",
                    hash: {},
                    data: l
                })) + '"\n        data-type="' + c((u = null != (u = a._type || (null != n ? n._type : n)) ? u : d, "function" == typeof u ? u.call(h, {
                    name: "_type",
                    hash: {},
                    data: l
                }) : u)) + '"\n        data-division-code="' + c(o(null != (i = null != n ? n._source : n) ? i.divisionCode : i, n)) + '"\n        data-isbn="' + c(o(null != (i = null != n ? n._source : n) ? i.isbn : i, n)) + '"\n        data-issn="' + c(o(null != (i = null != n ? n._source : n) ? i.issn : i, n)) + '"\n    >\n        <img src="' + c((u = null != (u = a.imageUrl || (null != n ? n.imageUrl : n)) ? u : d, "function" == typeof u ? u.call(h, {
                    name: "imageUrl",
                    hash: {},
                    data: l
                }) : u)) + '" alt="' + c(o(null != (i = null != n ? n._source : n) ? i.title : i, n)) + '">\n    </a>\n</figure>\n'
            },
            useData: !0,
            useDepths: !0
        })
    },
    59: function(e, n, a) {
        var t = a(0);
        e.exports = (t.default || t).template({
            1: function(e, n, a, t, l) {
                return "                Elsevier Connect\n"
            },
            3: function(e, n, a, t, l) {
                var r;
                return null != (r = (a.ifCond || n && n.ifCond || a.helperMissing).call(null != n ? n : e.nullContext || {}, null != (r = null != n ? n._source : n) ? r.webpageType : r, "===", "journals", {
                    name: "ifCond",
                    hash: {},
                    fn: e.program(4, l, 0),
                    inverse: e.program(6, l, 0),
                    data: l
                })) ? r : ""
            },
            4: function(e, n, a, t, l) {
                return "                Journals\n"
            },
            6: function(e, n, a, t, l) {
                var r;
                return "                " + e.escapeExpression((a.getObjectValue || n && n.getObjectValue || a.helperMissing).call(null != n ? n : e.nullContext || {}, null != (r = null != (r = null != n ? n.locale : n) ? r.siteSearch : r) ? r.labels : r, {
                    name: "getObjectValue",
                    hash: {
                        key: null != n ? n._type : n
                    },
                    data: l
                })) + "\n            "
            },
            compiler: [7, ">= 4.0.0"],
            main: function(e, n, a, t, l) {
                var r;
                return '<div class="search-result-meta">\n    <p class="text-small text-ui">\n        <span class="category">\n' + (null != (r = (a.ifCond || n && n.ifCond || a.helperMissing).call(null != n ? n : e.nullContext || {}, null != (r = null != (r = null != n ? n._source : n) ? r.meta : r) ? r.community : r, "===", "Elsevier Connect", {
                    name: "ifCond",
                    hash: {},
                    fn: e.program(1, l, 0),
                    inverse: e.program(3, l, 0),
                    data: l
                })) ? r : "") + "        </span>\n    </p>\n</div>\n"
            },
            useData: !0
        })
    },
    60: function(e, n, a) {
        var t = a(0);
        e.exports = (t.default || t).template({
            1: function(e, n, a, t, l) {
                var r;
                return "        <p>" + (null != (r = e.lambda(null != (r = null != (r = null != n ? n._source : n) ? r.meta : r) ? r.desc : r, n)) ? r : "") + "</p>\n"
            },
            3: function(e, n, a, t, l) {
                var r;
                return null != (r = a.if.call(null != n ? n : e.nullContext || {}, null != (r = null != n ? n.highlight : n) ? r["meta.desc.folded"] : r, {
                    name: "if",
                    hash: {},
                    fn: e.program(4, l, 0),
                    inverse: e.program(6, l, 0),
                    data: l
                })) ? r : ""
            },
            4: function(e, n, a, t, l) {
                var r;
                return "        <p>" + (null != (r = e.lambda(null != (r = null != n ? n.highlight : n) ? r["meta.desc.folded"] : r, n)) ? r : "") + "...</p>\n"
            },
            6: function(e, n, a, t, l) {
                var r;
                return null != (r = a.if.call(null != n ? n : e.nullContext || {}, null != (r = null != n ? n.highlight : n) ? r["meta.desc"] : r, {
                    name: "if",
                    hash: {},
                    fn: e.program(7, l, 0),
                    inverse: e.program(9, l, 0),
                    data: l
                })) ? r : ""
            },
            7: function(e, n, a, t, l) {
                var r;
                return "        <p>" + (null != (r = e.lambda(null != (r = null != n ? n.highlight : n) ? r["meta.desc"] : r, n)) ? r : "") + "...</p>\n"
            },
            9: function(e, n, a, t, l) {
                var r;
                return null != (r = a.if.call(null != n ? n : e.nullContext || {}, null != (r = null != (r = null != n ? n._source : n) ? r.meta : r) ? r.desc : r, {
                    name: "if",
                    hash: {},
                    fn: e.program(10, l, 0),
                    inverse: e.program(12, l, 0),
                    data: l
                })) ? r : ""
            },
            10: function(e, n, a, t, l) {
                var r;
                return "        <p>" + (null != (r = e.lambda(null != (r = null != (r = null != n ? n._source : n) ? r.meta : r) ? r.desc : r, n)) ? r : "") + "...</p>\n"
            },
            12: function(e, n, a, t, l) {
                var r;
                return null != (r = a.if.call(null != n ? n : e.nullContext || {}, null != (r = null != n ? n.highlight : n) ? r.description : r, {
                    name: "if",
                    hash: {},
                    fn: e.program(13, l, 0),
                    inverse: e.program(15, l, 0),
                    data: l
                })) ? r : ""
            },
            13: function(e, n, a, t, l) {
                var r;
                return "        <p>" + (null != (r = e.lambda(null != (r = null != n ? n.highlight : n) ? r.description : r, n)) ? r : "") + "...</p>\n"
            },
            15: function(e, n, a, t, l) {
                var r;
                return null != (r = a.if.call(null != n ? n : e.nullContext || {}, null != (r = null != n ? n.highlight : n) ? r["file.content"] : r, {
                    name: "if",
                    hash: {},
                    fn: e.program(16, l, 0),
                    inverse: e.program(18, l, 0),
                    data: l
                })) ? r : ""
            },
            16: function(e, n, a, t, l) {
                var r;
                return "        <p>" + (null != (r = e.lambda(null != (r = null != n ? n.highlight : n) ? r["file.content"] : r, n)) ? r : "") + "...</p>\n"
            },
            18: function(e, n, a, t, l) {
                var r, s = null != n ? n : e.nullContext || {},
                    i = a.helperMissing;
                return "        <p>" + e.escapeExpression((a.encodeMyString || n && n.encodeMyString || i).call(s, (a.truncate || n && n.truncate || i).call(s, null != (r = null != n ? n._source : n) ? r.description : r, 170, {
                    name: "truncate",
                    hash: {},
                    data: l
                }), {
                    name: "encodeMyString",
                    hash: {},
                    data: l
                })) + "</p>\n    "
            },
            compiler: [7, ">= 4.0.0"],
            main: function(e, n, a, t, l) {
                var r, s = null != n ? n : e.nullContext || {};
                return '<div class="search-result-excerpt">\n' + (null != (r = a.if.call(s, (a.isValidSolutionResult || n && n.isValidSolutionResult || a.helperMissing).call(s, null != n ? n._source : n, {
                    name: "isValidSolutionResult",
                    hash: {},
                    data: l
                }), {
                    name: "if",
                    hash: {},
                    fn: e.program(1, l, 0),
                    inverse: e.program(3, l, 0),
                    data: l
                })) ? r : "") + "</div>\n"
            },
            useData: !0
        })
    },
    61: function(e, n, a) {
        var t = a(0);
        e.exports = (t.default || t).template({
            1: function(e, n, a, t, l) {
                return ' target="_blank" '
            },
            3: function(e, n, a, t, l) {
                var r;
                return "            " + (null != (r = e.lambda(null != (r = null != n ? n._source : n) ? r.shortName : r, n)) ? r : "") + "\n"
            },
            5: function(e, n, a, t, l) {
                var r;
                return null != (r = a.if.call(null != n ? n : e.nullContext || {}, null != (r = null != n ? n.highlight : n) ? r["meta.title.folded"] : r, {
                    name: "if",
                    hash: {},
                    fn: e.program(6, l, 0),
                    inverse: e.program(8, l, 0),
                    data: l
                })) ? r : ""
            },
            6: function(e, n, a, t, l) {
                var r;
                return "            " + (null != (r = e.lambda(null != (r = null != n ? n.highlight : n) ? r["meta.title.folded"] : r, n)) ? r : "") + "\n"
            },
            8: function(e, n, a, t, l) {
                var r;
                return null != (r = a.if.call(null != n ? n : e.nullContext || {}, null != (r = null != n ? n.highlight : n) ? r["meta.title"] : r, {
                    name: "if",
                    hash: {},
                    fn: e.program(9, l, 0),
                    inverse: e.program(11, l, 0),
                    data: l
                })) ? r : ""
            },
            9: function(e, n, a, t, l) {
                var r;
                return "            " + (null != (r = e.lambda(null != (r = null != n ? n.highlight : n) ? r["meta.title"] : r, n)) ? r : "") + "\n"
            },
            11: function(e, n, a, t, l) {
                var r;
                return null != (r = a.if.call(null != n ? n : e.nullContext || {}, null != (r = null != (r = null != n ? n._source : n) ? r.meta : r) ? r.title : r, {
                    name: "if",
                    hash: {},
                    fn: e.program(12, l, 0),
                    inverse: e.program(14, l, 0),
                    data: l
                })) ? r : ""
            },
            12: function(e, n, a, t, l) {
                var r;
                return "            " + (null != (r = e.lambda(null != (r = null != (r = null != n ? n._source : n) ? r.meta : r) ? r.title : r, n)) ? r : "") + "\n"
            },
            14: function(e, n, a, t, l) {
                var r;
                return null != (r = a.if.call(null != n ? n : e.nullContext || {}, null != (r = null != n ? n.highlight : n) ? r.title : r, {
                    name: "if",
                    hash: {},
                    fn: e.program(15, l, 0),
                    inverse: e.program(17, l, 0),
                    data: l
                })) ? r : ""
            },
            15: function(e, n, a, t, l) {
                var r;
                return "            " + (null != (r = e.lambda(null != (r = null != n ? n.highlight : n) ? r.title : r, n)) ? r : "") + "\n"
            },
            17: function(e, n, a, t, l) {
                var r;
                return "            " + e.escapeExpression((a.truncate || n && n.truncate || a.helperMissing).call(null != n ? n : e.nullContext || {}, null != (r = null != n ? n._source : n) ? r.title : r, 70, {
                    name: "truncate",
                    hash: {},
                    data: l
                })) + "\n        "
            },
            compiler: [7, ">= 4.0.0"],
            main: function(e, n, a, t, l, r, s) {
                var i, u, o = e.lambda,
                    c = e.escapeExpression,
                    h = null != n ? n : e.nullContext || {},
                    d = a.helperMissing;
                return '<h2 class="search-title text-normal">\n    <a\n        href="' + c(o(null != (i = null != n ? n._source : n) ? i.url : i, n)) + '"\n        title="' + c(o(null != (i = null != n ? n._source : n) ? i.title : i, n)) + '"\n        class="search-track"\n        ' + (null != (i = (a.ifCond || n && n.ifCond || d).call(h, null != n ? n._type : n, "===", "journals", {
                    name: "ifCond",
                    hash: {},
                    fn: e.program(1, l, 0, r, s),
                    inverse: e.noop,
                    data: l
                })) ? i : "") + '\n        data-event="search"\n        data-category="search-click"\n        data-label="' + c((u = null != (u = a._type || (null != n ? n._type : n)) ? u : d, "function" == typeof u ? u.call(h, {
                    name: "_type",
                    hash: {},
                    data: l
                }) : u)) + '-title"\n        data-action="result-' + c((a.math || n && n.math || d).call(h, l && l.key, "+", null != s[1] ? s[1].start : s[1], {
                    name: "math",
                    hash: {},
                    data: l
                })) + '"\n        data-value="' + c((a.math || n && n.math || d).call(h, null != s[1] ? s[1].start : s[1], "+", l && l.key, {
                    name: "math",
                    hash: {},
                    data: l
                })) + '"\n        data-type="' + c((u = null != (u = a._type || (null != n ? n._type : n)) ? u : d, "function" == typeof u ? u.call(h, {
                    name: "_type",
                    hash: {},
                    data: l
                }) : u)) + '"\n        data-division-code="' + c(o(null != (i = null != n ? n._source : n) ? i.divisionCode : i, n)) + '"\n        data-isbn="' + c(o(null != (i = null != n ? n._source : n) ? i.isbn : i, n)) + '"\n        data-issn="' + c(o(null != (i = null != n ? n._source : n) ? i.issn : i, n)) + '"\n    >\n' + (null != (i = a.if.call(h, (a.isValidSolutionResult || n && n.isValidSolutionResult || d).call(h, null != n ? n._source : n, {
                    name: "isValidSolutionResult",
                    hash: {},
                    data: l
                }), {
                    name: "if",
                    hash: {},
                    fn: e.program(3, l, 0, r, s),
                    inverse: e.program(5, l, 0, r, s),
                    data: l
                })) ? i : "") + "    </a>\n</h2>\n"
            },
            useData: !0,
            useDepths: !0
        })
    },
    62: function(e, n, a) {
        var t = a(0);
        e.exports = (t.default || t).template({
            1: function(e, n, a, t, l) {
                return 'target="_blank" '
            },
            compiler: [7, ">= 4.0.0"],
            main: function(e, n, a, t, l, r, s) {
                var i, u, o = e.lambda,
                    c = e.escapeExpression,
                    h = null != n ? n : e.nullContext || {},
                    d = a.helperMissing;
                return '<div class="search-result-url">\n    <a\n        href="' + c(o(null != (i = null != n ? n._source : n) ? i.url : i, n)) + '"\n        title="' + c(o(null != (i = null != n ? n._source : n) ? i.url : i, n)) + '"\n        class="search-track"\n        ' + (null != (i = (a.ifCond || n && n.ifCond || d).call(h, null != n ? n._type : n, "===", "journals", {
                    name: "ifCond",
                    hash: {},
                    fn: e.program(1, l, 0, r, s),
                    inverse: e.noop,
                    data: l
                })) ? i : "") + '\n        data-event="search"\n        data-category="search-click"\n        data-label="' + c((u = null != (u = a._type || (null != n ? n._type : n)) ? u : d, "function" == typeof u ? u.call(h, {
                    name: "_type",
                    hash: {},
                    data: l
                }) : u)) + '-url"\n        data-action="result-' + c((a.math || n && n.math || d).call(h, l && l.key, "+", null != s[1] ? s[1].start : s[1], {
                    name: "math",
                    hash: {},
                    data: l
                })) + '"\n        data-value="' + c((a.math || n && n.math || d).call(h, null != s[1] ? s[1].start : s[1], "+", l && l.key, {
                    name: "math",
                    hash: {},
                    data: l
                })) + '"\n        data-type="' + c((u = null != (u = a._type || (null != n ? n._type : n)) ? u : d, "function" == typeof u ? u.call(h, {
                    name: "_type",
                    hash: {},
                    data: l
                }) : u)) + '"\n        data-division-code="' + c(o(null != (i = null != n ? n._source : n) ? i.divisionCode : i, n)) + '"\n        data-isbn="' + c(o(null != (i = null != n ? n._source : n) ? i.isbn : i, n)) + '"\n        data-issn="' + c(o(null != (i = null != n ? n._source : n) ? i.issn : i, n)) + '"\n    >\n        ' + c((a.truncate || n && n.truncate || d).call(h, null != (i = null != n ? n._source : n) ? i.url : i, 80, {
                    name: "truncate",
                    hash: {},
                    data: l
                })) + "\n    </a>\n</div>\n"
            },
            useData: !0,
            useDepths: !0
        })
    },
    63: function(e, n, a) {
        var t = a(0);
        e.exports = (t.default || t).template({
            1: function(e, n, a, t, l) {
                return '    <div class="columns small-8 medium-10">\n'
            },
            3: function(e, n, a, t, l) {
                return '    <div class="columns medium-11">\n'
            },
            5: function(e, n, t, l, r) {
                var s;
                return '        <div class="columns small-4 medium-2">\n' + (null != (s = e.invokePartial(a(39), n, {
                    name: "components/thumbnail",
                    hash: {
                        imageUrl: null != (s = null != n ? n._source : n) ? s.imageUrl : s
                    },
                    data: r,
                    indent: "            ",
                    helpers: t,
                    partials: l,
                    decorators: e.decorators
                })) ? s : "") + "        </div>\n"
            },
            7: function(e, n, a, t, l) {
                var r;
                return null != (r = a.if.call(null != n ? n : e.nullContext || {}, null != (r = null != (r = null != n ? n._source : n) ? r.meta : r) ? r.imageUrl : r, {
                    name: "if",
                    hash: {},
                    fn: e.program(8, l, 0),
                    inverse: e.noop,
                    data: l
                })) ? r : ""
            },
            8: function(e, n, t, l, r) {
                var s;
                return '        <div class="columns small-4 medium-2">\n' + (null != (s = e.invokePartial(a(39), n, {
                    name: "components/thumbnail",
                    hash: {
                        imageUrl: null != (s = null != (s = null != n ? n._source : n) ? s.meta : s) ? s.imageUrl : s
                    },
                    data: r,
                    indent: "            ",
                    helpers: t,
                    partials: l,
                    decorators: e.decorators
                })) ? s : "") + "        </div>\n    "
            },
            compiler: [7, ">= 4.0.0"],
            main: function(e, n, t, l, r) {
                var s, i = null != n ? n : e.nullContext || {};
                return '<article class="row row-tight search-result">\n\n' + (null != (s = (t.ifCond || n && n.ifCond || t.helperMissing).call(i, null != (s = null != n ? n._source : n) ? s.imageUrl : s, "||", null != (s = null != (s = null != n ? n._source : n) ? s.meta : s) ? s.imageUrl : s, {
                    name: "ifCond",
                    hash: {},
                    fn: e.program(1, r, 0),
                    inverse: e.program(3, r, 0),
                    data: r
                })) ? s : "") + '        <div class="search-result-body">\n' + (null != (s = e.invokePartial(a(61), n, {
                    name: "components/title",
                    data: r,
                    indent: "            ",
                    helpers: t,
                    partials: l,
                    decorators: e.decorators
                })) ? s : "") + (null != (s = e.invokePartial(a(62), n, {
                    name: "components/url",
                    data: r,
                    indent: "            ",
                    helpers: t,
                    partials: l,
                    decorators: e.decorators
                })) ? s : "") + (null != (s = e.invokePartial(a(60), n, {
                    name: "components/text-excerpt",
                    data: r,
                    indent: "            ",
                    helpers: t,
                    partials: l,
                    decorators: e.decorators
                })) ? s : "") + (null != (s = e.invokePartial(a(59), n, {
                    name: "components/meta",
                    data: r,
                    indent: "            ",
                    helpers: t,
                    partials: l,
                    decorators: e.decorators
                })) ? s : "") + "        </div>\n    </div>\n\n" + (null != (s = t.if.call(i, null != (s = null != n ? n._source : n) ? s.imageUrl : s, {
                    name: "if",
                    hash: {},
                    fn: e.program(5, r, 0),
                    inverse: e.program(7, r, 0),
                    data: r
                })) ? s : "") + "\n</article>\n"
            },
            usePartial: !0,
            useData: !0
        })
    },
    79: function(e, n, a) {
        "use strict";
        Object.defineProperty(n, "__esModule", {
            value: !0
        }), n.HandlebarsHelpers = void 0;
        var t = a(0),
            l = function(e) {
                return e && e.__esModule ? e : {
                    default: e
                }
            }(t);
        n.HandlebarsHelpers = function() {
            l.default.registerHelper("ifCond", function(e, n, a, t) {
                switch (n) {
                    case "==":
                        return e == a ? t.fn(this) : t.inverse(this);
                    case "===":
                        return e === a ? t.fn(this) : t.inverse(this);
                    case "!=":
                        return e != a ? t.fn(this) : t.inverse(this);
                    case "!==":
                        return e !== a ? t.fn(this) : t.inverse(this);
                    case "<":
                        return e < a ? t.fn(this) : t.inverse(this);
                    case "<=":
                        return e <= a ? t.fn(this) : t.inverse(this);
                    case ">":
                        return e > a ? t.fn(this) : t.inverse(this);
                    case ">=":
                        return e >= a ? t.fn(this) : t.inverse(this);
                    case "&&":
                        return e && a ? t.fn(this) : t.inverse(this);
                    case "||":
                        return e || a ? t.fn(this) : t.inverse(this);
                    default:
                        return t.inverse(this)
                }
            }), l.default.registerHelper("pagination", function(e, n, a, t) {
                for (var l = "", r = 1; r <= n; r++)(1 === r || r === n || r === e || r >= e - t && r <= e + t) && (l += r === e ? '<li class="selected"><span><a role="navigation" aria-label="Pagination Navigation" class="pagination-link" data-page="' + (r - 1 + 1) + '">' + r + "</a></span></li>" : '<li><span><a role="navigation" aria-label="Pagination Navigation" class="pagination-link" data-page="' + (r - 1 + 1) + '">' + r + "</a></span></li>"), (n > e + t + 1 && r === n - 1 || 2 === r && e - t > 2) && (l += "<li>…</li>");
                return l
            }), l.default.registerHelper("math", function(e, n, a) {
                switch (e = parseFloat(e), a = parseFloat(a), n) {
                    case "+":
                        return e + a;
                    case "-":
                        return e - a;
                    case "*":
                        return e * a;
                    case "/":
                        return e !== a;
                    case "%":
                        return e % a;
                    default:
                        return NaN
                }
            }), l.default.registerHelper("getObjectValue", function(e, n) {
                return e[n.hash.key]
            }), l.default.registerHelper("capitalizeFirst", function(e) {
                return "string" == typeof e ? e.charAt(0).toUpperCase() + e.slice(1) : e
            }), l.default.registerHelper("truncate", function(e, n) {
                return e && e.length > n ? e.substr(0, n) + "..." : e
            }), l.default.registerHelper("commaSeparateNumber", function(e) {
                return "number" == typeof e ? e.toLocaleString() : e
            }), l.default.registerHelper("log", function(e) {
                console.log("variable = ", e)
            }), l.default.registerHelper("encodeMyString", function(e) {
                return new l.default.SafeString(e)
            }), l.default.registerHelper("isValidSolutionResult", function(e) {
                return "solution" === e.resultUIType && "" !== e.primaryActionText && "" !== e.primaryActionURL && "" !== e.secondaryActionText && "" !== e.secondaryActionURL
            })
        }()
    },
    81: function(e, n, a) {
        "use strict";

        function _classCallCheck(e, n) {
            if (!(e instanceof n)) throw new TypeError("Cannot call a class as a function")
        }
        Object.defineProperty(n, "__esModule", {
            value: !0
        }), n.SearchClient = void 0;
        var t = function() {
                function defineProperties(e, n) {
                    for (var a = 0; a < n.length; a++) {
                        var t = n[a];
                        t.enumerable = t.enumerable || !1, t.configurable = !0, "value" in t && (t.writable = !0), Object.defineProperty(e, t.key, t)
                    }
                }
                return function(e, n, a) {
                    return n && defineProperties(e.prototype, n), a && defineProperties(e, a), e
                }
            }(),
            l = a(19),
            r = function(e) {
                return e && e.__esModule ? e : {
                    default: e
                }
            }(l),
            s = a(8),
            i = a(45),
            u = a(117),
            o = a(114),
            c = a(6),
            h = a(24);
        n.SearchClient = function() {
            function SearchClient(e) {
                _classCallCheck(this, SearchClient), this.config = e, this.queryStr = "", this.searchQuery = (0, u.sanitiseInput)((0, i.getQueryParam)("query")) || "", this.searchType = (0, u.sanitiseInput)((0, i.getQueryParam)("labels")) || "", this.currentPage = parseInt((0, u.sanitiseInput)((0, i.getQueryParam)("page")), 10) || 1, this.layout = (0, c.objGet)(elcm.testing, s.config.sitesearch.appName), this.searchLimit = e.limit, this.allowedTypes = e.allowedTypes, this.locale = e.locale, this.searchPath = e.searchPath, this.start = 0, this.numPages = 0, this.nextPage = 0, this.prevPage = 0, this.results = {}, this.searchForm = document.querySelector(e.classForm), this.searchInputContainer = document.querySelector(e.classInputContainer), this.searchResults = document.querySelector(e.classResults), this.searchInput = document.querySelector(e.classInput), this.searchButton = document.querySelector(e.classButton), this.searchTypeInput = document.querySelector(e.classType), this.tabContainer = document.querySelector(e.classTabContainer), this.tabContainerItems = document.querySelectorAll(e.classTabContainerItems), this.firstLoad = !0, this.firstResponse = !0, this.init()
            }
            return t(SearchClient, [{
                key: "init",
                value: function() {
                    this.registerHandlers(), this.setSelectedTab(), this.setSearchParams()
                }
            }, {
                key: "registerHandlers",
                value: function() {
                    var e = this;
                    this.tabContainer.addEventListener("change", function(n) {
                        return e.setSelectedTab(n.target)
                    }), this.searchResults.addEventListener("click", function(n) {
                        return e.handleResultsClick(n)
                    }), this.searchForm.addEventListener("submit", function(n) {
                        n.preventDefault(), e.searchInput.value.length || (e.searchInputContainer.classList.add("error"), e.searchInputContainer.classList.remove("active")), e.handleInputChange()
                    }), window.onpopstate = function() {
                        var n = window.history.state;
                        n && (e.searchQuery = n.query, e.searchLimit = n.limit, e.searchType = n.type, e.currentPage = n.page, e.makeSearchRequest())
                    }
                }
            }, {
                key: "handleResultsClick",
                value: function(e) {
                    var n = e.target,
                        a = n.classList;
                    if (a.contains("pagination-link")) {
                        e.preventDefault(), this.currentPage = parseInt(n.getAttribute("data-page"), 10), this.setSearchParams();
                        var t = {
                            eventCategory: "search-navigation",
                            eventAction: "page-" + this.currentPage,
                            eventLabel: "pagination",
                            eventValue: ""
                        };
                        a.contains("pag-prev") ? t.eventLabel = "back" : a.contains("pag-next") && (t.eventLabel = "next"), (0, o.pushEvent)("google", "search", t)
                    } else if (a.contains("search-track")) {
                        var l = n.getAttribute("data-type").slice(0, -1);
                        if ("book" === l || "journal" === l) {
                            var r = "book" === l ? "isbn" : "issn",
                                s = ("isbn" === r ? n.getAttribute("data-isbn") : n.getAttribute("data-issn")).replace(/-/g, ""),
                                i = n.getAttribute("data-division-code").replace(/&/g, ""),
                                u = n.getAttribute("data-value") || "";
                            (0, o.pushEvent)("adobe", "searchResultsClick", {
                                content: [{
                                    format: "MIME-" + l.toUpperCase(),
                                    id: "ec:" + l + ":" + r + ":" + s,
                                    detail: "ec:" + l + ":division:" + i
                                }],
                                search: {
                                    resultsPosition: u
                                }
                            })
                        }(0, o.pushEvent)("google", "search", {
                            eventCategory: "search-click",
                            eventAction: n.getAttribute("data-action") || "",
                            eventLabel: n.getAttribute("data-label") || "",
                            eventValue: n.getAttribute("data-value") || ""
                        })
                    }
                }
            }, {
                key: "setSelectedTab",
                value: function(e) {
                    e ? this.handleInputChange() : (this.tabContainerItems[0].classList.remove("active"), e = document.querySelector("input[name='labels'][value='" + this.searchType + "']") || document.querySelector("input[name='labels'][value='all']")), e.checked = !0, e.parentNode.parentNode.classList.add("active")
                }
            }, {
                key: "handleInputChange",
                value: function() {
                    this.searchButton.blur(), this.searchInput.blur(), this.currentPage = 1, this.setSearchParams()
                }
            }, {
                key: "setSearchParams",
                value: function() {
                    var e = (0, u.sanitiseInput)(this.searchInput.value) || this.searchQuery,
                        n = (0, u.sanitiseInput)(document.querySelector("input[name='labels']:checked").value) || this.searchType,
                        a = parseInt((0, u.sanitiseInput)((0, i.getQueryParam)("page")), 10) || 1;
                    (e !== this.searchQuery || n !== this.searchType || a !== this.currentPage || this.firstLoad) && (this.firstLoad = !1, (0, o.pushEvent)("google", "search", {
                        eventCategory: "search-refinement",
                        eventAction: e + " -> " + this.searchQuery,
                        eventLabel: n + " -> " + this.searchType,
                        eventValue: ""
                    }), this.searchQuery = e, this.searchType = n, history.pushState({
                        query: this.searchQuery,
                        type: this.searchType,
                        limit: this.searchLimit,
                        page: this.currentPage
                    }, "", "" + this.searchPath + this.buildQueryString()), (0, o.pushEvent)("google", "search", {
                        eventCategory: "search-submit",
                        eventAction: "",
                        eventLabel: this.searchType,
                        eventValue: ""
                    }), this.makeSearchRequest())
                }
            }, {
                key: "validateSearchParams",
                value: function() {
                    return !!(this.allowedTypes.indexOf(this.searchType) > -1) || (this.searchType = "all", !1)
                }
            }, {
                key: "makeSearchRequest",
                value: function() {
                    var e = this;
                    if (this.validateSearchParams()) {
                        this.start = this.currentPage > 0 ? (this.currentPage - 1) * this.searchLimit : 0, this.queryStr = this.buildQueryString();
                        var n = {
                                query: this.searchQuery,
                                type: "pages" === this.searchType ? "webpages" : this.searchType,
                                start: this.start,
                                limit: this.searchLimit,
                                locale: this.locale
                            },
                            a = "" + this.config.searchAPI + this.config.searchRoutes.search + "?query=" + n.query + "&labels=" + n.type + "&start=" + n.start + "&limit=" + n.limit + "&lang=" + n.locale;
                        r.default.get(a).then(function(n) {
                            return e.handleSearchResponse(n.data)
                        }).catch(function(n) {
                            return e.handleSearchResponse({
                                error: n
                            })
                        })
                    }
                }
            }, {
                key: "handleSearchResponse",
                value: function(e) {
                    if (!e.error) {
                        this.results = {
                            took: e.took / 100,
                            totalResults: e.hits.total,
                            data: e.hits.hits
                        }, this.numPages = Math.ceil(this.results.totalResults / this.searchLimit), this.prevPage = this.currentPage > 1 ? this.currentPage - 1 : 0, this.nextPage = this.currentPage < this.numPages ? this.currentPage + 1 : 0, (0, o.pushEvent)("google", "search", {
                            eventCategory: "search-results",
                            eventAction: "page-" + this.currentPage,
                            eventLabel: this.results.totalResults > 0 ? this.getContentCountString() : "no-results",
                            eventValue: ""
                        }), 0 === this.results.totalResults && (0, o.pushEvent)("google", "search", {
                            eventCategory: "search",
                            eventAction: "no-results",
                            eventLabel: this.searchQuery,
                            eventValue: ""
                        });
                        var n = {
                            totalResults: this.results.totalResults.toString()
                        };
                        pageData.search = n, this.firstResponse ? (this.firstResponse = !1, pageDataTracker.trackPageLoad()) : (0, o.pushEvent)("adobe", "searchResultsUpdated", {
                            search: n
                        })
                    }
                    this.updateSearchResultsUI()
                }
            }, {
                key: "updateSearchResultsUI",
                value: function() {
                    var e = a(180)("./" + this.getLayout().results),
                        n = 0 !== Object.keys(this.results).length,
                        t = document.querySelector(".back-to-top"),
                        l = void 0;
                    this.searchQuery = decodeURIComponent(this.searchQuery), this.searchInput.value = this.searchQuery, l = n ? {
                        serviceIsAvailable: n,
                        searchQuery: this.searchQuery,
                        searchType: this.searchType,
                        searchPath: this.searchPath,
                        start: this.start + 1,
                        limit: this.searchLimit,
                        took: this.results.took,
                        totalResults: this.results.totalResults,
                        results: this.results,
                        numPages: this.numPages,
                        currentPage: this.currentPage,
                        prevPage: this.prevPage,
                        nextPage: this.nextPage,
                        queryStr: this.queryStr,
                        locale: h.regionMap[this.locale]
                    } : {
                        serviceIsAvailable: n
                    }, this.searchResults.innerHTML = e(l), t && window.scrollY > 0 && t.click()
                }
            }, {
                key: "getContentCountString",
                value: function() {
                    var e = this.results.data.reduce(function(e, n) {
                        return e[n._type]++, e
                    }, {
                        books: 0,
                        journals: 0,
                        webpages: 0
                    });
                    return e.books + " books, " + e.journals + " journals, " + e.webpages + " pages"
                }
            }, {
                key: "buildQueryString",
                value: function() {
                    return "query=" + this.searchQuery + "&labels=" + this.searchType + "&page=" + this.currentPage
                }
            }, {
                key: "getLayout",
                value: function() {
                    return s.config.sitesearch.layout[this.layout] || s.config.sitesearch.layout.default
                }
            }]), SearchClient
        }()
    }
}, [118]);