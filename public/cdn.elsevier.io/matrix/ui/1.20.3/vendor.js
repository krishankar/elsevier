/*! elsevier-matrix - v1.20.3 - 2018-12-12 */ ! function(t) {
    var e = function() {
        "use strict";
        return {
            isMsie: function() {
                return !!/(msie|trident)/i.test(navigator.userAgent) && navigator.userAgent.match(/(msie |rv:)(\d+(.\d+)?)/i)[2]
            },
            isBlankString: function(t) {
                return !t || /^\s*$/.test(t)
            },
            escapeRegExChars: function(t) {
                return t.replace(/[\-\[\]\/\{\}\(\)\*\+\?\.\\\^\$\|]/g, "\\$&")
            },
            isString: function(t) {
                return "string" == typeof t
            },
            isNumber: function(t) {
                return "number" == typeof t
            },
            isArray: t.isArray,
            isFunction: t.isFunction,
            isObject: t.isPlainObject,
            isUndefined: function(t) {
                return void 0 === t
            },
            toStr: function(t) {
                return e.isUndefined(t) || null === t ? "" : t + ""
            },
            bind: t.proxy,
            each: function(e, n) {
                t.each(e, function(t, e) {
                    return n(e, t)
                })
            },
            map: t.map,
            filter: t.grep,
            every: function(e, n) {
                var i = !0;
                return e ? (t.each(e, function(t, r) {
                    return !!(i = n.call(null, r, t, e)) && void 0
                }), !!i) : i
            },
            some: function(e, n) {
                var i = !1;
                return e ? (t.each(e, function(t, r) {
                    return !(i = n.call(null, r, t, e)) && void 0
                }), !!i) : i
            },
            mixin: t.extend,
            getUniqueId: function() {
                var t = 0;
                return function() {
                    return t++
                }
            }(),
            templatify: function(e) {
                return t.isFunction(e) ? e : function() {
                    return String(e)
                }
            },
            defer: function(t) {
                setTimeout(t, 0)
            },
            debounce: function(t, e, n) {
                var i, r;
                return function() {
                    var a, o, s = this,
                        u = arguments;
                    return a = function() {
                        i = null, n || (r = t.apply(s, u))
                    }, o = n && !i, clearTimeout(i), i = setTimeout(a, e), o && (r = t.apply(s, u)), r
                }
            },
            throttle: function(t, e) {
                var n, i, r, a, o, s;
                return o = 0, s = function() {
                        o = new Date, r = null, a = t.apply(n, i)
                    },
                    function() {
                        var u = new Date,
                            c = e - (u - o);
                        return n = this, i = arguments, 0 >= c ? (clearTimeout(r), r = null, o = u, a = t.apply(n, i)) : r || (r = setTimeout(s, c)), a
                    }
            },
            noop: function() {}
        }
    }(),
    n = {
        wrapper: '<span class="twitter-typeahead"></span>',
        dropdown: '<span class="tt-dropdown-menu"></span>',
        dataset: '<div class="tt-dataset-%CLASS%"></div>',
        suggestions: '<span class="tt-suggestions"></span>',
        suggestion: '<div class="tt-suggestion"></div>'
    },
    i = function() {
        "use strict";
        var t = {
            wrapper: {
                position: "relative",
                display: "inline-block"
            },
            hint: {
                position: "absolute",
                top: "0",
                left: "0",
                borderColor: "transparent",
                boxShadow: "none",
                opacity: "1"
            },
            input: {
                position: "relative",
                verticalAlign: "top",
                backgroundColor: "transparent"
            },
            inputWithNoHint: {
                position: "relative",
                verticalAlign: "top"
            },
            dropdown: {
                position: "absolute",
                top: "100%",
                left: "0",
                zIndex: "100",
                display: "none"
            },
            suggestions: {
                display: "block"
            },
            suggestion: {
                whiteSpace: "nowrap",
                cursor: "pointer"
            },
            suggestionChild: {
                whiteSpace: "normal"
            },
            ltr: {
                left: "0",
                right: "auto"
            },
            rtl: {
                left: "auto",
                right: " 0"
            }
        };
        return e.isMsie() && e.mixin(t.input, {
            backgroundImage: "url(data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7)"
        }), e.isMsie() && e.isMsie() <= 7 && e.mixin(t.input, {
            marginTop: "-1px"
        }), t
    }(),
    r = function() {
        "use strict";

        function n(e) {
            e && e.el || t.error("EventBus initialized without el"), this.$el = t(e.el)
        }
        return e.mixin(n.prototype, {
            trigger: function(t) {
                var e = [].slice.call(arguments, 1);
                this.$el.trigger("typeahead:" + t, e)
            }
        }), n
    }(),
    a = function() {
        "use strict";

        function t(t, e, i, r) {
            var a;
            if (!i) return this;
            for (e = e.split(n), i = r ? function(t, e) {
                    return t.bind ? t.bind(e) : function() {
                        t.apply(e, [].slice.call(arguments, 0))
                    }
                }(i, r) : i, this._callbacks = this._callbacks || {}; a = e.shift();) this._callbacks[a] = this._callbacks[a] || {
                sync: [],
                async: []
            }, this._callbacks[a][t].push(i);
            return this
        }

        function e(t, e, n) {
            return function() {
                for (var i, r = 0, a = t.length; !i && a > r; r += 1) i = !1 === t[r].apply(e, n);
                return !i
            }
        }
        var n = /\s+/,
            i = window.setImmediate ? function(t) {
                setImmediate(function() {
                    t()
                })
            } : function(t) {
                setTimeout(function() {
                    t()
                }, 0)
            };
        return {
            onSync: function(e, n, i) {
                return t.call(this, "sync", e, n, i)
            },
            onAsync: function(e, n, i) {
                return t.call(this, "async", e, n, i)
            },
            off: function(t) {
                var e;
                if (!this._callbacks) return this;
                for (t = t.split(n); e = t.shift();) delete this._callbacks[e];
                return this
            },
            trigger: function(t) {
                var r, a, o, s, u;
                if (!this._callbacks) return this;
                for (t = t.split(n), o = [].slice.call(arguments, 1);
                    (r = t.shift()) && (a = this._callbacks[r]);) s = e(a.sync, this, [r].concat(o)), u = e(a.async, this, [r].concat(o)), s() && i(u);
                return this
            }
        }
    }(),
    o = function(t) {
        "use strict";
        var n = {
            node: null,
            pattern: null,
            tagName: "strong",
            className: null,
            wordsOnly: !1,
            caseSensitive: !1
        };
        return function(i) {
            var r;
            (i = e.mixin({}, n, i)).node && i.pattern && (i.pattern = e.isArray(i.pattern) ? i.pattern : [i.pattern], r = function(t, n, i) {
                for (var r, a = [], o = 0, s = t.length; s > o; o++) a.push(e.escapeRegExChars(t[o]));
                return r = i ? "\\b(" + a.join("|") + ")\\b" : "(" + a.join("|") + ")", n ? new RegExp(r) : new RegExp(r, "i")
            }(i.pattern, i.caseSensitive, i.wordsOnly), function t(e, n) {
                for (var i, r = 0; r < e.childNodes.length; r++) 3 === (i = e.childNodes[r]).nodeType ? r += n(i) ? 1 : 0 : t(i, n)
            }(i.node, function(e) {
                var n, a, o;
                return (n = r.exec(e.data)) && (o = t.createElement(i.tagName), i.className && (o.className = i.className), (a = e.splitText(n.index)).splitText(n[0].length), o.appendChild(a.cloneNode(!0)), e.parentNode.replaceChild(o, a)), !!n
            }))
        }
    }(window.document),
    s = function() {
        "use strict";

        function n(n) {
            var i, r, a, s, u = this;
            (n = n || {}).input || t.error("input is missing"), i = e.bind(this._onBlur, this), r = e.bind(this._onFocus, this), a = e.bind(this._onKeydown, this), s = e.bind(this._onInput, this), this.$hint = t(n.hint), this.$input = t(n.input).on("blur.tt", i).on("focus.tt", r).on("keydown.tt", a), 0 === this.$hint.length && (this.setHint = this.getHint = this.clearHint = this.clearHintIfInvalid = e.noop), e.isMsie() ? this.$input.on("keydown.tt keypress.tt cut.tt paste.tt", function(t) {
                o[t.which || t.keyCode] || e.defer(e.bind(u._onInput, u, t))
            }) : this.$input.on("input.tt", s), this.query = this.$input.val(), this.$overflowHelper = function(e) {
                return t('<pre aria-hidden="true"></pre>').css({
                    position: "absolute",
                    visibility: "hidden",
                    whiteSpace: "pre",
                    fontFamily: e.css("font-family"),
                    fontSize: e.css("font-size"),
                    fontStyle: e.css("font-style"),
                    fontVariant: e.css("font-variant"),
                    fontWeight: e.css("font-weight"),
                    wordSpacing: e.css("word-spacing"),
                    letterSpacing: e.css("letter-spacing"),
                    textIndent: e.css("text-indent"),
                    textRendering: e.css("text-rendering"),
                    textTransform: e.css("text-transform")
                }).insertAfter(e)
            }(this.$input)
        }

        function i(t, e) {
            return n.normalizeQuery(t) === n.normalizeQuery(e)
        }

        function r(t) {
            return t.altKey || t.ctrlKey || t.metaKey || t.shiftKey
        }
        var o;
        return o = {
            9: "tab",
            27: "esc",
            37: "left",
            39: "right",
            13: "enter",
            38: "up",
            40: "down"
        }, n.normalizeQuery = function(t) {
            return (t || "").replace(/^\s*/g, "").replace(/\s{2,}/g, " ")
        }, e.mixin(n.prototype, a, {
            _onBlur: function() {
                this.resetInputValue(), this.trigger("blurred")
            },
            _onFocus: function() {
                this.trigger("focused")
            },
            _onKeydown: function(t) {
                var e = o[t.which || t.keyCode];
                this._managePreventDefault(e, t), e && this._shouldTrigger(e, t) && this.trigger(e + "Keyed", t)
            },
            _onInput: function() {
                this._checkInputValue()
            },
            _managePreventDefault: function(t, e) {
                var n, i, a;
                switch (t) {
                    case "tab":
                        i = this.getHint(), a = this.getInputValue(), n = i && i !== a && !r(e);
                        break;
                    case "up":
                    case "down":
                        n = !r(e);
                        break;
                    default:
                        n = !1
                }
                n && e.preventDefault()
            },
            _shouldTrigger: function(t, e) {
                var n;
                switch (t) {
                    case "tab":
                        n = !r(e);
                        break;
                    default:
                        n = !0
                }
                return n
            },
            _checkInputValue: function() {
                var t, e, n;
                n = !!(e = i(t = this.getInputValue(), this.query)) && this.query.length !== t.length, this.query = t, e ? n && this.trigger("whitespaceChanged", this.query) : this.trigger("queryChanged", this.query)
            },
            focus: function() {
                this.$input.focus()
            },
            blur: function() {
                this.$input.blur()
            },
            getQuery: function() {
                return this.query
            },
            setQuery: function(t) {
                this.query = t
            },
            getInputValue: function() {
                return this.$input.val()
            },
            setInputValue: function(t, e) {
                this.$input.val(t), e ? this.clearHint() : this._checkInputValue()
            },
            resetInputValue: function() {
                this.setInputValue(this.query, !0)
            },
            getHint: function() {
                return this.$hint.val()
            },
            setHint: function(t) {
                this.$hint.val(t)
            },
            clearHint: function() {
                this.setHint("")
            },
            clearHintIfInvalid: function() {
                var t, e, n;
                n = (t = this.getInputValue()) !== (e = this.getHint()) && 0 === e.indexOf(t), !("" !== t && n && !this.hasOverflow()) && this.clearHint()
            },
            getLanguageDirection: function() {
                return (this.$input.css("direction") || "ltr").toLowerCase()
            },
            hasOverflow: function() {
                var t = this.$input.width() - 2;
                return this.$overflowHelper.text(this.getInputValue()), this.$overflowHelper.width() >= t
            },
            isCursorAtEnd: function() {
                var t, n, i;
                return t = this.$input.val().length, n = this.$input[0].selectionStart, e.isNumber(n) ? n === t : !document.selection || ((i = document.selection.createRange()).moveStart("character", -t), t === i.text.length)
            },
            destroy: function() {
                this.$hint.off(".tt"), this.$input.off(".tt"), this.$hint = this.$input = this.$overflowHelper = null
            }
        }), n
    }(),
    u = function() {
        "use strict";

        function r(i) {
            (i = i || {}).templates = i.templates || {}, i.source || t.error("missing source"), i.name && ! function(t) {
                return /^[_a-zA-Z0-9-]+$/.test(t)
            }(i.name) && t.error("invalid dataset name: " + i.name), this.query = null, this.highlight = !!i.highlight, this.name = i.name || e.getUniqueId(), this.source = i.source, this.displayFn = function(t) {
                return t = t || "value", e.isFunction(t) ? t : function(e) {
                    return e[t]
                }
            }(i.display || i.displayKey), this.templates = function(t, n) {
                return {
                    empty: t.empty && e.templatify(t.empty),
                    header: t.header && e.templatify(t.header),
                    footer: t.footer && e.templatify(t.footer),
                    suggestion: t.suggestion || function(t) {
                        return "<p>" + n(t) + "</p>"
                    }
                }
            }(i.templates, this.displayFn), this.$el = t(n.dataset.replace("%CLASS%", this.name))
        }
        var s = "ttDataset",
            u = "ttValue",
            c = "ttDatum";
        return r.extractDatasetName = function(e) {
            return t(e).data(s)
        }, r.extractValue = function(e) {
            return t(e).data(u)
        }, r.extractDatum = function(e) {
            return t(e).data(c)
        }, e.mixin(r.prototype, a, {
            _render: function(r, a) {
                function l() {
                    return p.templates.header({
                        query: r,
                        isEmpty: !h
                    })
                }

                function d() {
                    return p.templates.footer({
                        query: r,
                        isEmpty: !h
                    })
                }
                if (this.$el) {
                    var h, p = this;
                    this.$el.empty(), !(h = a && a.length) && this.templates.empty ? this.$el.html(p.templates.empty({
                        query: r,
                        isEmpty: !0
                    })).prepend(p.templates.header ? l() : null).append(p.templates.footer ? d() : null) : h && this.$el.html(function() {
                        var l, d;
                        return l = t(n.suggestions).css(i.suggestions), d = e.map(a, function(e) {
                            var r;
                            return (r = t(n.suggestion).append(p.templates.suggestion(e)).data(s, p.name).data(u, p.displayFn(e)).data(c, e)).children().each(function() {
                                t(this).css(i.suggestionChild)
                            }), r
                        }), l.append.apply(l, d), p.highlight && o({
                            className: "tt-highlight",
                            node: l[0],
                            pattern: r
                        }), l
                    }()).prepend(p.templates.header ? l() : null).append(p.templates.footer ? d() : null), this.trigger("rendered")
                }
            },
            getRoot: function() {
                return this.$el
            },
            update: function(t) {
                var e = this;
                this.query = t, this.canceled = !1, this.source(t, function(n) {
                    e.canceled || t !== e.query || e._render(t, n)
                })
            },
            cancel: function() {
                this.canceled = !0
            },
            clear: function() {
                this.cancel(), this.$el.empty(), this.trigger("rendered")
            },
            isEmpty: function() {
                return this.$el.is(":empty")
            },
            destroy: function() {
                this.$el = null
            }
        }), r
    }(),
    c = function() {
        "use strict";

        function n(n) {
            var i, a, o, s = this;
            (n = n || {}).menu || t.error("menu is required"), this.isOpen = !1, this.isEmpty = !0, this.datasets = e.map(n.datasets, r), i = e.bind(this._onSuggestionClick, this), a = e.bind(this._onSuggestionMouseEnter, this), o = e.bind(this._onSuggestionMouseLeave, this), this.$menu = t(n.menu).on("click.tt", ".tt-suggestion", i).on("mouseenter.tt", ".tt-suggestion", a).on("mouseleave.tt", ".tt-suggestion", o), e.each(this.datasets, function(t) {
                s.$menu.append(t.getRoot()), t.onSync("rendered", s._onRendered, s)
            })
        }

        function r(t) {
            return new u(t)
        }
        return e.mixin(n.prototype, a, {
            _onSuggestionClick: function(e) {
                this.trigger("suggestionClicked", t(e.currentTarget))
            },
            _onSuggestionMouseEnter: function(e) {
                this._removeCursor(), this._setCursor(t(e.currentTarget), !0)
            },
            _onSuggestionMouseLeave: function() {
                this._removeCursor()
            },
            _onRendered: function() {
                this.isEmpty = e.every(this.datasets, function(t) {
                    return t.isEmpty()
                }), this.isEmpty ? this._hide() : this.isOpen && this._show(), this.trigger("datasetRendered")
            },
            _hide: function() {
                this.$menu.hide()
            },
            _show: function() {
                this.$menu.css("display", "block")
            },
            _getSuggestions: function() {
                return this.$menu.find(".tt-suggestion")
            },
            _getCursor: function() {
                return this.$menu.find(".tt-cursor").first()
            },
            _setCursor: function(t, e) {
                t.first().addClass("tt-cursor"), !e && this.trigger("cursorMoved")
            },
            _removeCursor: function() {
                this._getCursor().removeClass("tt-cursor")
            },
            _moveCursor: function(t) {
                var e, n, i, r;
                if (this.isOpen) {
                    if (n = this._getCursor(), e = this._getSuggestions(), this._removeCursor(), -1 === (i = ((i = e.index(n) + t) + 1) % (e.length + 1) - 1)) return void this.trigger("cursorRemoved"); - 1 > i && (i = e.length - 1), this._setCursor(r = e.eq(i)), this._ensureVisible(r)
                }
            },
            _ensureVisible: function(t) {
                var e, n, i, r;
                n = (e = t.position().top) + t.outerHeight(!0), i = this.$menu.scrollTop(), r = this.$menu.height() + parseInt(this.$menu.css("paddingTop"), 10) + parseInt(this.$menu.css("paddingBottom"), 10), 0 > e ? this.$menu.scrollTop(i + e) : n > r && this.$menu.scrollTop(i + (n - r))
            },
            close: function() {
                this.isOpen && (this.isOpen = !1, this._removeCursor(), this._hide(), this.trigger("closed"))
            },
            open: function() {
                this.isOpen || (this.isOpen = !0, !this.isEmpty && this._show(), this.trigger("opened"))
            },
            setLanguageDirection: function(t) {
                this.$menu.css("ltr" === t ? i.ltr : i.rtl)
            },
            moveCursorUp: function() {
                this._moveCursor(-1)
            },
            moveCursorDown: function() {
                this._moveCursor(1)
            },
            getDatumForSuggestion: function(t) {
                var e = null;
                return t.length && (e = {
                    raw: u.extractDatum(t),
                    value: u.extractValue(t),
                    datasetName: u.extractDatasetName(t)
                }), e
            },
            getDatumForCursor: function() {
                return this.getDatumForSuggestion(this._getCursor().first())
            },
            getDatumForTopSuggestion: function() {
                return this.getDatumForSuggestion(this._getSuggestions().first())
            },
            update: function(t) {
                e.each(this.datasets, function(e) {
                    e.update(t)
                })
            },
            empty: function() {
                e.each(this.datasets, function(t) {
                    t.clear()
                }), this.isEmpty = !0
            },
            isVisible: function() {
                return this.isOpen && !this.isEmpty
            },
            destroy: function() {
                this.$menu.off(".tt"), this.$menu = null, e.each(this.datasets, function(t) {
                    t.destroy()
                })
            }
        }), n
    }(),
    l = function() {
        "use strict";

        function a(n) {
            var i, a, u;
            (n = n || {}).input || t.error("missing input"), this.isActivated = !1, this.autoselect = !!n.autoselect, this.minLength = e.isNumber(n.minLength) ? n.minLength : 1, this.$node = o(n.input, n.withHint), i = this.$node.find(".tt-dropdown-menu"), a = this.$node.find(".tt-input"), u = this.$node.find(".tt-hint"), a.on("blur.tt", function(t) {
                var n, r, o;
                n = document.activeElement, r = i.is(n), o = i.has(n).length > 0, e.isMsie() && (r || o) && (t.preventDefault(), t.stopImmediatePropagation(), e.defer(function() {
                    a.focus()
                }))
            }), i.on("mousedown.tt", function(t) {
                t.preventDefault()
            }), this.eventBus = n.eventBus || new r({
                el: a
            }), this.dropdown = new c({
                menu: i,
                datasets: n.datasets
            }).onSync("suggestionClicked", this._onSuggestionClicked, this).onSync("cursorMoved", this._onCursorMoved, this).onSync("cursorRemoved", this._onCursorRemoved, this).onSync("opened", this._onOpened, this).onSync("closed", this._onClosed, this).onAsync("datasetRendered", this._onDatasetRendered, this), this.input = new s({
                input: a,
                hint: u
            }).onSync("focused", this._onFocused, this).onSync("blurred", this._onBlurred, this).onSync("enterKeyed", this._onEnterKeyed, this).onSync("tabKeyed", this._onTabKeyed, this).onSync("escKeyed", this._onEscKeyed, this).onSync("upKeyed", this._onUpKeyed, this).onSync("downKeyed", this._onDownKeyed, this).onSync("leftKeyed", this._onLeftKeyed, this).onSync("rightKeyed", this._onRightKeyed, this).onSync("queryChanged", this._onQueryChanged, this).onSync("whitespaceChanged", this._onWhitespaceChanged, this), this._setLanguageDirection()
        }

        function o(e, r) {
            var a, o, s, c;
            a = t(e), o = t(n.wrapper).css(i.wrapper), s = t(n.dropdown).css(i.dropdown), (c = a.clone().css(i.hint).css(function(t) {
                return {
                    backgroundAttachment: t.css("background-attachment"),
                    backgroundClip: t.css("background-clip"),
                    backgroundColor: t.css("background-color"),
                    backgroundImage: t.css("background-image"),
                    backgroundOrigin: t.css("background-origin"),
                    backgroundPosition: t.css("background-position"),
                    backgroundRepeat: t.css("background-repeat"),
                    backgroundSize: t.css("background-size")
                }
            }(a))).val("").removeData().addClass("tt-hint").removeAttr("id name placeholder required").prop("readonly", !0).attr({
                autocomplete: "off",
                spellcheck: "false",
                tabindex: -1
            }), a.data(u, {
                dir: a.attr("dir"),
                autocomplete: a.attr("autocomplete"),
                spellcheck: a.attr("spellcheck"),
                style: a.attr("style")
            }), a.addClass("tt-input").attr({
                autocomplete: "off",
                spellcheck: !1
            }).css(r ? i.input : i.inputWithNoHint);
            try {
                !a.attr("dir") && a.attr("dir", "auto")
            } catch (t) {}
            return a.wrap(o).parent().prepend(r ? c : null).append(s)
        }
        var u = "ttAttrs";
        return e.mixin(a.prototype, {
            _onSuggestionClicked: function(t, e) {
                var n;
                (n = this.dropdown.getDatumForSuggestion(e)) && this._select(n)
            },
            _onCursorMoved: function() {
                var t = this.dropdown.getDatumForCursor();
                this.input.setInputValue(t.value, !0), this.eventBus.trigger("cursorchanged", t.raw, t.datasetName)
            },
            _onCursorRemoved: function() {
                this.input.resetInputValue(), this._updateHint()
            },
            _onDatasetRendered: function() {
                this._updateHint()
            },
            _onOpened: function() {
                this._updateHint(), this.eventBus.trigger("opened")
            },
            _onClosed: function() {
                this.input.clearHint(), this.eventBus.trigger("closed")
            },
            _onFocused: function() {
                this.isActivated = !0, this.dropdown.open()
            },
            _onBlurred: function() {
                this.isActivated = !1, this.dropdown.empty(), this.dropdown.close()
            },
            _onEnterKeyed: function(t, e) {
                var n, i;
                n = this.dropdown.getDatumForCursor(), i = this.dropdown.getDatumForTopSuggestion(), n ? (this._select(n), e.preventDefault()) : this.autoselect && i && (this._select(i), e.preventDefault())
            },
            _onTabKeyed: function(t, e) {
                var n;
                (n = this.dropdown.getDatumForCursor()) ? (this._select(n), e.preventDefault()) : this._autocomplete(!0)
            },
            _onEscKeyed: function() {
                this.dropdown.close(), this.input.resetInputValue()
            },
            _onUpKeyed: function() {
                var t = this.input.getQuery();
                this.dropdown.isEmpty && t.length >= this.minLength ? this.dropdown.update(t) : this.dropdown.moveCursorUp(), this.dropdown.open()
            },
            _onDownKeyed: function() {
                var t = this.input.getQuery();
                this.dropdown.isEmpty && t.length >= this.minLength ? this.dropdown.update(t) : this.dropdown.moveCursorDown(), this.dropdown.open()
            },
            _onLeftKeyed: function() {
                "rtl" === this.dir && this._autocomplete()
            },
            _onRightKeyed: function() {
                "ltr" === this.dir && this._autocomplete()
            },
            _onQueryChanged: function(t, e) {
                this.input.clearHintIfInvalid(), e.length >= this.minLength ? this.dropdown.update(e) : this.dropdown.empty(), this.dropdown.open(), this._setLanguageDirection()
            },
            _onWhitespaceChanged: function() {
                this._updateHint(), this.dropdown.open()
            },
            _setLanguageDirection: function() {
                var t;
                this.dir !== (t = this.input.getLanguageDirection()) && (this.dir = t, this.$node.css("direction", t), this.dropdown.setLanguageDirection(t))
            },
            _updateHint: function() {
                var t, n, i, r, a;
                (t = this.dropdown.getDatumForTopSuggestion()) && this.dropdown.isVisible() && !this.input.hasOverflow() ? (n = this.input.getInputValue(), i = s.normalizeQuery(n), r = e.escapeRegExChars(i), (a = new RegExp("^(?:" + r + ")(.+$)", "i").exec(t.value)) ? this.input.setHint(n + a[1]) : this.input.clearHint()) : this.input.clearHint()
            },
            _autocomplete: function(t) {
                var e, n, i, r;
                e = this.input.getHint(), n = this.input.getQuery(), i = t || this.input.isCursorAtEnd(), e && n !== e && i && ((r = this.dropdown.getDatumForTopSuggestion()) && this.input.setInputValue(r.value), this.eventBus.trigger("autocompleted", r.raw, r.datasetName))
            },
            _select: function(t) {
                this.input.setQuery(t.value), this.input.setInputValue(t.value, !0), this._setLanguageDirection(), this.eventBus.trigger("selected", t.raw, t.datasetName), this.dropdown.close(), e.defer(e.bind(this.dropdown.empty, this.dropdown))
            },
            open: function() {
                this.dropdown.open()
            },
            close: function() {
                this.dropdown.close()
            },
            setVal: function(t) {
                t = e.toStr(t), this.isActivated ? this.input.setInputValue(t) : (this.input.setQuery(t), this.input.setInputValue(t, !0)), this._setLanguageDirection()
            },
            getVal: function() {
                return this.input.getQuery()
            },
            destroy: function() {
                var t, n;
                this.input.destroy(), this.dropdown.destroy(), t = this.$node, n = t.find(".tt-input"), e.each(n.data(u), function(t, i) {
                    e.isUndefined(t) ? n.removeAttr(i) : n.attr(i, t)
                }), n.detach().removeData(u).removeClass("tt-input").insertAfter(t), t.remove(), this.$node = null
            }
        }), a
    }();
! function() {
    "use strict";
    var n, i, a;
    n = t.fn.typeahead, i = "ttTypeahead", a = {
        initialize: function(n, a) {
            return a = e.isArray(a) ? a : [].slice.call(arguments, 1), n = n || {}, this.each(function() {
                var o, s = t(this);
                e.each(a, function(t) {
                    t.highlight = !!n.highlight
                }), o = new l({
                    input: s,
                    eventBus: new r({
                        el: s
                    }),
                    withHint: !!e.isUndefined(n.hint) || !!n.hint,
                    minLength: n.minLength,
                    autoselect: n.autoselect,
                    datasets: a
                }), s.data(i, o)
            })
        },
        open: function() {
            return this.each(function() {
                var e;
                (e = t(this).data(i)) && e.open()
            })
        },
        close: function() {
            return this.each(function() {
                var e;
                (e = t(this).data(i)) && e.close()
            })
        },
        val: function(e) {
            return arguments.length ? this.each(function() {
                var n;
                (n = t(this).data(i)) && n.setVal(e)
            }) : function(t) {
                var e, n;
                return (e = t.data(i)) && (n = e.getVal()), n
            }(this.first())
        },
        destroy: function() {
            return this.each(function() {
                var e, n = t(this);
                (e = n.data(i)) && (e.destroy(), n.removeData(i))
            })
        }
    }, t.fn.typeahead = function(e) {
        var n;
        return a[e] && "initialize" !== e ? (n = this.filter(function() {
            return !!t(this).data(i)
        }), a[e].apply(n, [].slice.call(arguments, 1))) : a.initialize.apply(this, arguments)
    }, t.fn.typeahead.noConflict = function() {
        return t.fn.typeahead = n, this
    }
}()
}(window.jQuery), "object" != typeof JSON && (JSON = {}),
function() {
    "use strict";

    function f(t) {
        return t < 10 ? "0" + t : t
    }

    function quote(t) {
        return escapable.lastIndex = 0, escapable.test(t) ? '"' + t.replace(escapable, function(t) {
            var e = meta[t];
            return "string" == typeof e ? e : "\\u" + ("0000" + t.charCodeAt(0).toString(16)).slice(-4)
        }) + '"' : '"' + t + '"'
    }

    function str(t, e) {
        var n, i, r, a, o, s = gap,
            u = e[t];
        switch (u && "object" == typeof u && "function" == typeof u.toJSON && (u = u.toJSON(t)), "function" == typeof rep && (u = rep.call(e, t, u)), typeof u) {
            case "string":
                return quote(u);
            case "number":
                return isFinite(u) ? String(u) : "null";
            case "boolean":
            case "null":
                return String(u);
            case "object":
                if (!u) return "null";
                if (gap += indent, o = [], "[object Array]" === Object.prototype.toString.apply(u)) {
                    for (a = u.length, n = 0; n < a; n += 1) o[n] = str(n, u) || "null";
                    return r = 0 === o.length ? "[]" : gap ? "[\n" + gap + o.join(",\n" + gap) + "\n" + s + "]" : "[" + o.join(",") + "]", gap = s, r
                }
                if (rep && "object" == typeof rep)
                    for (a = rep.length, n = 0; n < a; n += 1) "string" == typeof rep[n] && ((r = str(i = rep[n], u)) && o.push(quote(i) + (gap ? ": " : ":") + r));
                else
                    for (i in u) Object.prototype.hasOwnProperty.call(u, i) && ((r = str(i, u)) && o.push(quote(i) + (gap ? ": " : ":") + r));
                return r = 0 === o.length ? "{}" : gap ? "{\n" + gap + o.join(",\n" + gap) + "\n" + s + "}" : "{" + o.join(",") + "}", gap = s, r
        }
    }
    "function" != typeof Date.prototype.toJSON && (Date.prototype.toJSON = function(t) {
        return isFinite(this.valueOf()) ? this.getUTCFullYear() + "-" + f(this.getUTCMonth() + 1) + "-" + f(this.getUTCDate()) + "T" + f(this.getUTCHours()) + ":" + f(this.getUTCMinutes()) + ":" + f(this.getUTCSeconds()) + "Z" : null
    }, String.prototype.toJSON = Number.prototype.toJSON = Boolean.prototype.toJSON = function(t) {
        return this.valueOf()
    });
    var cx = /[\u0000\u00ad\u0600-\u0604\u070f\u17b4\u17b5\u200c-\u200f\u2028-\u202f\u2060-\u206f\ufeff\ufff0-\uffff]/g,
        escapable = /[\\\"\x00-\x1f\x7f-\x9f\u00ad\u0600-\u0604\u070f\u17b4\u17b5\u200c-\u200f\u2028-\u202f\u2060-\u206f\ufeff\ufff0-\uffff]/g,
        gap, indent, meta = {
            "\b": "\\b",
            "    ": "\\t",
            "\n": "\\n",
            "\f": "\\f",
            "\r": "\\r",
            '"': '\\"',
            "\\": "\\\\"
        },
        rep;
    "function" != typeof JSON.stringify && (JSON.stringify = function(t, e, n) {
        var i;
        if (gap = "", indent = "", "number" == typeof n)
            for (i = 0; i < n; i += 1) indent += " ";
        else "string" == typeof n && (indent = n);
        if (rep = e, !e || "function" == typeof e || "object" == typeof e && "number" == typeof e.length) return str("", {
            "": t
        });
        throw new Error("JSON.stringify")
    }), "function" != typeof JSON.parse && (JSON.parse = function(text, reviver) {
        function walk(t, e) {
            var n, i, r = t[e];
            if (r && "object" == typeof r)
                for (n in r) Object.prototype.hasOwnProperty.call(r, n) && (void 0 !== (i = walk(r, n)) ? r[n] = i : delete r[n]);
            return reviver.call(t, e, r)
        }
        var j;
        if (text = String(text), cx.lastIndex = 0, cx.test(text) && (text = text.replace(cx, function(t) {
                return "\\u" + ("0000" + t.charCodeAt(0).toString(16)).slice(-4)
            })), /^[\],:{}\s]*$/.test(text.replace(/\\(?:["\\\/bfnrt]|u[0-9a-fA-F]{4})/g, "@").replace(/"[^"\\\n\r]*"|true|false|null|-?\d+(?:\.\d*)?(?:[eE][+\-]?\d+)?/g, "]").replace(/(?:^|:|,)(?:\s*\[)+/g, ""))) return j = eval("(" + text + ")"), "function" == typeof reviver ? walk({
            "": j
        }, "") : j;
        throw new SyntaxError("JSON.parse")
    })
}(),
function(t, e) {
    "use strict";
    var n = t.History = t.History || {},
        i = t.jQuery;
    if (void 0 !== n.Adapter) throw new Error("History.js Adapter has already been loaded...");
    n.Adapter = {
        bind: function(t, e, n) {
            i(t).bind(e, n)
        },
        trigger: function(t, e, n) {
            i(t).trigger(e, n)
        },
        extractEventData: function(t, e, n) {
            return e && e.originalEvent && e.originalEvent[t] || n && n[t] || void 0
        },
        onDomLoad: function(t) {
            i(t)
        }
    }, void 0 !== n.init && n.init()
}(window),
function(t, e) {
    "use strict";
    var n = t.document,
        i = t.setTimeout || i,
        r = t.clearTimeout || r,
        a = t.setInterval || a,
        o = t.History = t.History || {};
    if (void 0 !== o.initHtml4) throw new Error("History.js HTML4 Support has already been loaded...");
    o.initHtml4 = function() {
        if (void 0 !== o.initHtml4.initialized) return !1;
        o.initHtml4.initialized = !0, o.enabled = !0, o.savedHashes = [], o.isLastHash = function(t) {
            return t === o.getHashByIndex()
        }, o.isHashEqual = function(t, e) {
            return (t = encodeURIComponent(t).replace(/%25/g, "%")) === (e = encodeURIComponent(e).replace(/%25/g, "%"))
        }, o.saveHash = function(t) {
            return !o.isLastHash(t) && (o.savedHashes.push(t), !0)
        }, o.getHashByIndex = function(t) {
            return void 0 === t ? o.savedHashes[o.savedHashes.length - 1] : t < 0 ? o.savedHashes[o.savedHashes.length + t] : o.savedHashes[t]
        }, o.discardedHashes = {}, o.discardedStates = {}, o.discardState = function(t, e, n) {
            var i, r = o.getHashByState(t);
            return i = {
                discardedState: t,
                backState: n,
                forwardState: e
            }, o.discardedStates[r] = i, !0
        }, o.discardHash = function(t, e, n) {
            var i = {
                discardedHash: t,
                backState: n,
                forwardState: e
            };
            return o.discardedHashes[t] = i, !0
        }, o.discardedState = function(t) {
            var e = o.getHashByState(t);
            return o.discardedStates[e] || !1
        }, o.discardedHash = function(t) {
            return o.discardedHashes[t] || !1
        }, o.recycleState = function(t) {
            var e = o.getHashByState(t);
            return o.discardedState(t) && delete o.discardedStates[e], !0
        }, o.emulated.hashChange && (o.hashChangeInit = function() {
            o.checkerFunction = null;
            var e, i, r, s, u = "",
                c = Boolean(o.getHash());
            return o.isInternetExplorer() ? (e = "historyjs-iframe", (i = n.createElement("iframe")).setAttribute("id", e), i.setAttribute("src", "#"), i.style.display = "none", n.body.appendChild(i), i.contentWindow.document.open(), i.contentWindow.document.close(), r = "", s = !1, o.checkerFunction = function() {
                if (s) return !1;
                s = !0;
                var e = o.getHash(),
                    n = o.getHash(i.contentWindow.document);
                return e !== u ? (u = e, n !== e && (r = n = e, i.contentWindow.document.open(), i.contentWindow.document.close(), i.contentWindow.document.location.hash = o.escapeHash(e)), o.Adapter.trigger(t, "hashchange")) : n !== r && (r = n, c && "" === n ? o.back() : o.setHash(n, !1)), s = !1, !0
            }) : o.checkerFunction = function() {
                var e = o.getHash() || "";
                return e !== u && (u = e, o.Adapter.trigger(t, "hashchange")), !0
            }, o.intervalList.push(a(o.checkerFunction, o.options.hashChangeInterval)), !0
        }, o.Adapter.onDomLoad(o.hashChangeInit)), o.emulated.pushState && (o.onHashChange = function(e) {
            var n, i = e && e.newURL || o.getLocationHref(),
                r = o.getHashByUrl(i),
                a = null;
            return o.isLastHash(r) ? (o.busy(!1), !1) : (o.doubleCheckComplete(), o.saveHash(r), r && o.isTraditionalAnchor(r) ? (o.Adapter.trigger(t, "anchorchange"), o.busy(!1), !1) : (a = o.extractState(o.getFullUrl(r || o.getLocationHref()), !0), o.isLastSavedState(a) ? (o.busy(!1), !1) : (o.getHashByState(a), (n = o.discardedState(a)) ? (o.getHashByIndex(-2) === o.getHashByState(n.forwardState) ? o.back(!1) : o.forward(!1), !1) : (o.pushState(a.data, a.title, encodeURI(a.url), !1), !0))))
        }, o.Adapter.bind(t, "hashchange", o.onHashChange), o.pushState = function(e, n, i, r) {
            if (i = encodeURI(i).replace(/%25/g, "%"), o.getHashByUrl(i)) throw new Error("History.js does not support states with fragment-identifiers (hashes/anchors).");
            if (!1 !== r && o.busy()) return o.pushQueue({
                scope: o,
                callback: o.pushState,
                args: arguments,
                queue: r
            }), !1;
            o.busy(!0);
            var a = o.createStateObject(e, n, i),
                s = o.getHashByState(a),
                u = o.getState(!1),
                c = o.getHashByState(u),
                l = o.getHash(),
                d = o.expectedStateId == a.id;
            return o.storeState(a), o.expectedStateId = a.id, o.recycleState(a), o.setTitle(a), s === c ? (o.busy(!1), !1) : (o.saveState(a), d || o.Adapter.trigger(t, "statechange"), !o.isHashEqual(s, l) && !o.isHashEqual(s, o.getShortUrl(o.getLocationHref())) && o.setHash(s, !1), o.busy(!1), !0)
        }, o.replaceState = function(e, n, i, r) {
            if (i = encodeURI(i).replace(/%25/g, "%"), o.getHashByUrl(i)) throw new Error("History.js does not support states with fragment-identifiers (hashes/anchors).");
            if (!1 !== r && o.busy()) return o.pushQueue({
                scope: o,
                callback: o.replaceState,
                args: arguments,
                queue: r
            }), !1;
            o.busy(!0);
            var a = o.createStateObject(e, n, i),
                s = o.getHashByState(a),
                u = o.getState(!1),
                c = o.getHashByState(u),
                l = o.getStateByIndex(-2);
            return o.discardState(u, a, l), s === c ? (o.storeState(a), o.expectedStateId = a.id, o.recycleState(a), o.setTitle(a), o.saveState(a), o.Adapter.trigger(t, "statechange"), o.busy(!1)) : o.pushState(a.data, a.title, a.url, !1), !0
        }), o.emulated.pushState && o.getHash() && !o.emulated.hashChange && o.Adapter.onDomLoad(function() {
            o.Adapter.trigger(t, "hashchange")
        })
    }, void 0 !== o.init && o.init()
}(window),
function(t, e) {
    "use strict";
    var n = t.console || e,
        i = t.document,
        r = t.navigator,
        a = !1,
        o = t.setTimeout,
        s = t.clearTimeout,
        u = t.setInterval,
        c = t.clearInterval,
        l = t.JSON,
        d = t.alert,
        h = t.History = t.History || {},
        p = t.history;
    try {
        (a = t.sessionStorage).setItem("TEST", "1"), a.removeItem("TEST")
    } catch (t) {
        a = !1
    }
    if (l.stringify = l.stringify || l.encode, l.parse = l.parse || l.decode, void 0 !== h.init) throw new Error("History.js Core has already been loaded...");
    h.init = function(t) {
        return void 0 !== h.Adapter && (void 0 !== h.initCore && h.initCore(), void 0 !== h.initHtml4 && h.initHtml4(), !0)
    }, h.initCore = function(g) {
        if (void 0 !== h.initCore.initialized) return !1;
        if (h.initCore.initialized = !0, h.options = h.options || {}, h.options.hashChangeInterval = h.options.hashChangeInterval || 100, h.options.safariPollInterval = h.options.safariPollInterval || 500, h.options.doubleCheckInterval = h.options.doubleCheckInterval || 500, h.options.disableSuid = h.options.disableSuid || !1, h.options.storeInterval = h.options.storeInterval || 1e3, h.options.busyDelay = h.options.busyDelay || 250, h.options.debug = h.options.debug || !1, h.options.initialTitle = h.options.initialTitle || i.title, h.options.html4Mode = h.options.html4Mode || !1, h.options.delayInit = h.options.delayInit || !1, h.intervalList = [], h.clearAllIntervals = function() {
                var t, e = h.intervalList;
                if (void 0 !== e && null !== e) {
                    for (t = 0; t < e.length; t++) c(e[t]);
                    h.intervalList = null
                }
            }, h.debug = function() {
                h.options.debug && h.log.apply(h, arguments)
            }, h.log = function() {
                var t, e, r, a, o, s = void 0 !== n && void 0 !== n.log && void 0 !== n.log.apply,
                    u = i.getElementById("log");
                for (s ? (t = (a = Array.prototype.slice.call(arguments)).shift(), void 0 !== n.debug ? n.debug.apply(n, [t, a]) : n.log.apply(n, [t, a])) : t = "\n" + arguments[0] + "\n", e = 1, r = arguments.length; e < r; ++e) {
                    if ("object" == typeof(o = arguments[e]) && void 0 !== l) try {
                        o = l.stringify(o)
                    } catch (t) {}
                    t += "\n" + o + "\n"
                }
                return u ? (u.value += t + "\n-----\n", u.scrollTop = u.scrollHeight - u.clientHeight) : s || d(t), !0
            }, h.getInternetExplorerMajorVersion = function() {
                return h.getInternetExplorerMajorVersion.cached = void 0 !== h.getInternetExplorerMajorVersion.cached ? h.getInternetExplorerMajorVersion.cached : function() {
                    for (var t = 3, e = i.createElement("div"), n = e.getElementsByTagName("i");
                        (e.innerHTML = "\x3c!--[if gt IE " + ++t + "]><i></i><![endif]--\x3e") && n[0];);
                    return t > 4 && t
                }()
            }, h.isInternetExplorer = function() {
                return h.isInternetExplorer.cached = void 0 !== h.isInternetExplorer.cached ? h.isInternetExplorer.cached : Boolean(h.getInternetExplorerMajorVersion())
            }, h.options.html4Mode ? h.emulated = {
                pushState: !0,
                hashChange: !0
            } : h.emulated = {
                pushState: !Boolean(t.history && t.history.pushState && t.history.replaceState && !/ Mobile\/([1-7][a-z]|(8([abcde]|f(1[0-8]))))/i.test(r.userAgent) && !/AppleWebKit\/5([0-2]|3[0-2])/i.test(r.userAgent)),
                hashChange: Boolean(!("onhashchange" in t || "onhashchange" in i) || h.isInternetExplorer() && h.getInternetExplorerMajorVersion() < 8)
            }, h.enabled = !h.emulated.pushState, h.bugs = {
                setHash: Boolean(!h.emulated.pushState && "Apple Computer, Inc." === r.vendor && /AppleWebKit\/5([0-2]|3[0-3])/.test(r.userAgent)),
                safariPoll: Boolean(!h.emulated.pushState && "Apple Computer, Inc." === r.vendor && /AppleWebKit\/5([0-2]|3[0-3])/.test(r.userAgent)),
                ieDoubleCheck: Boolean(h.isInternetExplorer() && h.getInternetExplorerMajorVersion() < 8),
                hashEscape: Boolean(h.isInternetExplorer() && h.getInternetExplorerMajorVersion() < 7)
            }, h.isEmptyObject = function(t) {
                for (var e in t)
                    if (t.hasOwnProperty(e)) return !1;
                return !0
            }, h.cloneObject = function(t) {
                var e, n;
                return t ? (e = l.stringify(t), n = l.parse(e)) : n = {}, n
            }, h.getRootUrl = function() {
                var t = i.location.protocol + "//" + (i.location.hostname || i.location.host);
                return i.location.port && (t += ":" + i.location.port), t += "/"
            }, h.getBaseHref = function() {
                var t = i.getElementsByTagName("base"),
                    e = "";
                return 1 === t.length && (e = t[0].href.replace(/[^\/]+$/, "")), (e = e.replace(/\/+$/, "")) && (e += "/"), e
            }, h.getBaseUrl = function() {
                return h.getBaseHref() || h.getBasePageUrl() || h.getRootUrl()
            }, h.getPageUrl = function() {
                return ((h.getState(!1, !1) || {}).url || h.getLocationHref()).replace(/\/+$/, "").replace(/[^\/]+$/, function(t, e, n) {
                    return /\./.test(t) ? t : t + "/"
                })
            }, h.getBasePageUrl = function() {
                return h.getLocationHref().replace(/[#\?].*/, "").replace(/[^\/]+$/, function(t, e, n) {
                    return /[^\/]$/.test(t) ? "" : t
                }).replace(/\/+$/, "") + "/"
            }, h.getFullUrl = function(t, e) {
                var n = t,
                    i = t.substring(0, 1);
                return e = void 0 === e || e, /[a-z]+\:\/\//.test(t) || (n = "/" === i ? h.getRootUrl() + t.replace(/^\/+/, "") : "#" === i ? h.getPageUrl().replace(/#.*/, "") + t : "?" === i ? h.getPageUrl().replace(/[\?#].*/, "") + t : e ? h.getBaseUrl() + t.replace(/^(\.\/)+/, "") : h.getBasePageUrl() + t.replace(/^(\.\/)+/, "")), n.replace(/\#$/, "")
            }, h.getShortUrl = function(t) {
                var e = t,
                    n = h.getBaseUrl(),
                    i = h.getRootUrl();
                return h.emulated.pushState && (e = e.replace(n, "")), e = e.replace(i, "/"), h.isTraditionalAnchor(e) && (e = "./" + e), e = e.replace(/^(\.\/)+/g, "./").replace(/\#$/, "")
            }, h.getLocationHref = function(t) {
                return (t = t || i).URL === t.location.href ? t.location.href : t.location.href === decodeURIComponent(t.URL) ? t.URL : t.location.hash && decodeURIComponent(t.location.href.replace(/^[^#]+/, "")) === t.location.hash ? t.location.href : -1 == t.URL.indexOf("#") && -1 != t.location.href.indexOf("#") ? t.location.href : t.URL || t.location.href
            }, h.store = {}, h.idToState = h.idToState || {}, h.stateToId = h.stateToId || {}, h.urlToId = h.urlToId || {}, h.storedStates = h.storedStates || [], h.savedStates = h.savedStates || [], h.normalizeStore = function() {
                h.store.idToState = h.store.idToState || {}, h.store.urlToId = h.store.urlToId || {}, h.store.stateToId = h.store.stateToId || {}
            }, h.getState = function(t, e) {
                void 0 === t && (t = !0), void 0 === e && (e = !0);
                var n = h.getLastSavedState();
                return !n && e && (n = h.createStateObject()), t && ((n = h.cloneObject(n)).url = n.cleanUrl || n.url), n
            }, h.getIdByState = function(t) {
                var e, n = h.extractId(t.url);
                if (!n)
                    if (e = h.getStateString(t), void 0 !== h.stateToId[e]) n = h.stateToId[e];
                    else if (void 0 !== h.store.stateToId[e]) n = h.store.stateToId[e];
                else {
                    for (; n = (new Date).getTime() + String(Math.random()).replace(/\D/g, ""), void 0 !== h.idToState[n] || void 0 !== h.store.idToState[n];);
                    h.stateToId[e] = n, h.idToState[n] = t
                }
                return n
            }, h.normalizeState = function(t) {
                var e, n;
                return t && "object" == typeof t || (t = {}), void 0 !== t.normalized ? t : (t.data && "object" == typeof t.data || (t.data = {}), (e = {}).normalized = !0, e.title = t.title || "", e.url = h.getFullUrl(t.url ? t.url : h.getLocationHref()), e.hash = h.getShortUrl(e.url), e.data = h.cloneObject(t.data), e.id = h.getIdByState(e), e.cleanUrl = e.url.replace(/\??\&_suid.*/, ""), e.url = e.cleanUrl, n = !h.isEmptyObject(e.data), (e.title || n) && !0 !== h.options.disableSuid && (e.hash = h.getShortUrl(e.url).replace(/\??\&_suid.*/, ""), /\?/.test(e.hash) || (e.hash += "?"), e.hash += "&_suid=" + e.id), e.hashedUrl = h.getFullUrl(e.hash), (h.emulated.pushState || h.bugs.safariPoll) && h.hasUrlDuplicate(e) && (e.url = e.hashedUrl), e)
            }, h.createStateObject = function(t, e, n) {
                var i = {
                    data: t,
                    title: e,
                    url: n
                };
                return i = h.normalizeState(i)
            }, h.getStateById = function(t) {
                return t = String(t), h.idToState[t] || h.store.idToState[t] || e
            }, h.getStateString = function(t) {
                var e;
                return e = {
                    data: h.normalizeState(t).data,
                    title: t.title,
                    url: t.url
                }, l.stringify(e)
            }, h.getStateId = function(t) {
                return h.normalizeState(t).id
            }, h.getHashByState = function(t) {
                return h.normalizeState(t).hash
            }, h.extractId = function(t) {
                var e, n;
                return n = -1 != t.indexOf("#") ? t.split("#")[0] : t, (e = /(.*)\&_suid=([0-9]+)$/.exec(n)) && e[1] || t, (e ? String(e[2] || "") : "") || !1
            }, h.isTraditionalAnchor = function(t) {
                return !/[\/\?\.]/.test(t)
            }, h.extractState = function(t, e) {
                var n, i, r = null;
                return e = e || !1, (n = h.extractId(t)) && (r = h.getStateById(n)), r || (i = h.getFullUrl(t), (n = h.getIdByUrl(i) || !1) && (r = h.getStateById(n)), !r && e && !h.isTraditionalAnchor(t) && (r = h.createStateObject(null, null, i))), r
            }, h.getIdByUrl = function(t) {
                return h.urlToId[t] || h.store.urlToId[t] || e
            }, h.getLastSavedState = function() {
                return h.savedStates[h.savedStates.length - 1] || e
            }, h.getLastStoredState = function() {
                return h.storedStates[h.storedStates.length - 1] || e
            }, h.hasUrlDuplicate = function(t) {
                var e;
                return (e = h.extractState(t.url)) && e.id !== t.id
            }, h.storeState = function(t) {
                return h.urlToId[t.url] = t.id, h.storedStates.push(h.cloneObject(t)), t
            }, h.isLastSavedState = function(t) {
                var e = !1;
                return h.savedStates.length && (e = t.id === h.getLastSavedState().id), e
            }, h.saveState = function(t) {
                return !h.isLastSavedState(t) && (h.savedStates.push(h.cloneObject(t)), !0)
            }, h.getStateByIndex = function(t) {
                return void 0 === t ? h.savedStates[h.savedStates.length - 1] : t < 0 ? h.savedStates[h.savedStates.length + t] : h.savedStates[t]
            }, h.getCurrentIndex = function() {
                return h.savedStates.length < 1 ? 0 : h.savedStates.length - 1
            }, h.getHash = function(t) {
                var e = h.getLocationHref(t);
                return h.getHashByUrl(e)
            }, h.unescapeHash = function(t) {
                var e = h.normalizeHash(t);
                return e = decodeURIComponent(e)
            }, h.normalizeHash = function(t) {
                return t.replace(/[^#]*#/, "").replace(/#.*/, "")
            }, h.setHash = function(t, e) {
                var n, r;
                return !1 !== e && h.busy() ? (h.pushQueue({
                    scope: h,
                    callback: h.setHash,
                    args: arguments,
                    queue: e
                }), !1) : (h.busy(!0), (n = h.extractState(t, !0)) && !h.emulated.pushState ? h.pushState(n.data, n.title, n.url, !1) : h.getHash() !== t && (h.bugs.setHash ? (r = h.getPageUrl(), h.pushState(null, null, r + "#" + t, !1)) : i.location.hash = t), h)
            }, h.escapeHash = function(e) {
                var n = h.normalizeHash(e);
                return n = t.encodeURIComponent(n), h.bugs.hashEscape || (n = n.replace(/\%21/g, "!").replace(/\%26/g, "&").replace(/\%3D/g, "=").replace(/\%3F/g, "?")), n
            }, h.getHashByUrl = function(t) {
                var e = String(t).replace(/([^#]*)#?([^#]*)#?(.*)/, "$2");
                return e = h.unescapeHash(e)
            }, h.setTitle = function(t) {
                var e, n = t.title;
                n || (e = h.getStateByIndex(0)) && e.url === t.url && (n = e.title || h.options.initialTitle);
                try {
                    i.getElementsByTagName("title")[0].innerHTML = n.replace("<", "&lt;").replace(">", "&gt;").replace(" & ", " &amp; ")
                } catch (t) {}
                return i.title = n, h
            }, h.queues = [], h.busy = function(t) {
                if (void 0 !== t ? h.busy.flag = t : void 0 === h.busy.flag && (h.busy.flag = !1), !h.busy.flag) {
                    s(h.busy.timeout);
                    var e = function() {
                        var t, n, i;
                        if (!h.busy.flag)
                            for (t = h.queues.length - 1; t >= 0; --t) 0 !== (n = h.queues[t]).length && (i = n.shift(), h.fireQueueItem(i), h.busy.timeout = o(e, h.options.busyDelay))
                    };
                    h.busy.timeout = o(e, h.options.busyDelay)
                }
                return h.busy.flag
            }, h.busy.flag = !1, h.fireQueueItem = function(t) {
                return t.callback.apply(t.scope || h, t.args || [])
            }, h.pushQueue = function(t) {
                return h.queues[t.queue || 0] = h.queues[t.queue || 0] || [], h.queues[t.queue || 0].push(t), h
            }, h.queue = function(t, e) {
                return "function" == typeof t && (t = {
                    callback: t
                }), void 0 !== e && (t.queue = e), h.busy() ? h.pushQueue(t) : h.fireQueueItem(t), h
            }, h.clearQueue = function() {
                return h.busy.flag = !1, h.queues = [], h
            }, h.stateChanged = !1, h.doubleChecker = !1, h.doubleCheckComplete = function() {
                return h.stateChanged = !0, h.doubleCheckClear(), h
            }, h.doubleCheckClear = function() {
                return h.doubleChecker && (s(h.doubleChecker), h.doubleChecker = !1), h
            }, h.doubleCheck = function(t) {
                return h.stateChanged = !1, h.doubleCheckClear(), h.bugs.ieDoubleCheck && (h.doubleChecker = o(function() {
                    return h.doubleCheckClear(), h.stateChanged || t(), !0
                }, h.options.doubleCheckInterval)), h
            }, h.safariStatePoll = function() {
                var e = h.extractState(h.getLocationHref());
                if (!h.isLastSavedState(e)) return e || h.createStateObject(), h.Adapter.trigger(t, "popstate"), h
            }, h.back = function(t) {
                return !1 !== t && h.busy() ? (h.pushQueue({
                    scope: h,
                    callback: h.back,
                    args: arguments,
                    queue: t
                }), !1) : (h.busy(!0), h.doubleCheck(function() {
                    h.back(!1)
                }), p.go(-1), !0)
            }, h.forward = function(t) {
                return !1 !== t && h.busy() ? (h.pushQueue({
                    scope: h,
                    callback: h.forward,
                    args: arguments,
                    queue: t
                }), !1) : (h.busy(!0), h.doubleCheck(function() {
                    h.forward(!1)
                }), p.go(1), !0)
            }, h.go = function(t, e) {
                var n;
                if (t > 0)
                    for (n = 1; n <= t; ++n) h.forward(e);
                else {
                    if (!(t < 0)) throw new Error("History.go: History.go requires a positive or negative integer passed.");
                    for (n = -1; n >= t; --n) h.back(e)
                }
                return h
            }, h.emulated.pushState) {
            var f = function() {};
            h.pushState = h.pushState || f, h.replaceState = h.replaceState || f
        } else h.onPopState = function(e, n) {
            var i, r, a = !1,
                o = !1;
            return h.doubleCheckComplete(), (i = h.getHash()) ? ((r = h.extractState(i || h.getLocationHref(), !0)) ? h.replaceState(r.data, r.title, r.url, !1) : (h.Adapter.trigger(t, "anchorchange"), h.busy(!1)), h.expectedStateId = !1, !1) : ((o = (a = h.Adapter.extractEventData("state", e, n) || !1) ? h.getStateById(a) : h.expectedStateId ? h.getStateById(h.expectedStateId) : h.extractState(h.getLocationHref())) || (o = h.createStateObject(null, null, h.getLocationHref())), h.expectedStateId = !1, h.isLastSavedState(o) ? (h.busy(!1), !1) : (h.storeState(o), h.saveState(o), h.setTitle(o), h.Adapter.trigger(t, "statechange"), h.busy(!1), !0))
        }, h.Adapter.bind(t, "popstate", h.onPopState), h.pushState = function(e, n, i, r) {
            if (h.getHashByUrl(i) && h.emulated.pushState) throw new Error("History.js does not support states with fragement-identifiers (hashes/anchors).");
            if (!1 !== r && h.busy()) return h.pushQueue({
                scope: h,
                callback: h.pushState,
                args: arguments,
                queue: r
            }), !1;
            h.busy(!0);
            var a = h.createStateObject(e, n, i);
            return h.isLastSavedState(a) ? h.busy(!1) : (h.storeState(a), h.expectedStateId = a.id, p.pushState(a.id, a.title, a.url), h.Adapter.trigger(t, "popstate")), !0
        }, h.replaceState = function(e, n, i, r) {
            if (h.getHashByUrl(i) && h.emulated.pushState) throw new Error("History.js does not support states with fragement-identifiers (hashes/anchors).");
            if (!1 !== r && h.busy()) return h.pushQueue({
                scope: h,
                callback: h.replaceState,
                args: arguments,
                queue: r
            }), !1;
            h.busy(!0);
            var a = h.createStateObject(e, n, i);
            return h.isLastSavedState(a) ? h.busy(!1) : (h.storeState(a), h.expectedStateId = a.id, p.replaceState(a.id, a.title, a.url), h.Adapter.trigger(t, "popstate")), !0
        };
        if (a) {
            try {
                h.store = l.parse(a.getItem("History.store")) || {}
            } catch (t) {
                h.store = {}
            }
            h.normalizeStore()
        } else h.store = {}, h.normalizeStore();
        h.Adapter.bind(t, "unload", h.clearAllIntervals), h.saveState(h.storeState(h.extractState(h.getLocationHref(), !0))), a && (h.onUnload = function() {
            var t, e, n;
            try {
                t = l.parse(a.getItem("History.store")) || {}
            } catch (e) {
                t = {}
            }
            for (e in t.idToState = t.idToState || {}, t.urlToId = t.urlToId || {}, t.stateToId = t.stateToId || {}, h.idToState) h.idToState.hasOwnProperty(e) && (t.idToState[e] = h.idToState[e]);
            for (e in h.urlToId) h.urlToId.hasOwnProperty(e) && (t.urlToId[e] = h.urlToId[e]);
            for (e in h.stateToId) h.stateToId.hasOwnProperty(e) && (t.stateToId[e] = h.stateToId[e]);
            h.store = t, h.normalizeStore(), n = l.stringify(t);
            try {
                a.setItem("History.store", n)
            } catch (t) {
                if (t.code !== DOMException.QUOTA_EXCEEDED_ERR) throw t;
                a.length && (a.removeItem("History.store"), a.setItem("History.store", n))
            }
        }, h.intervalList.push(u(h.onUnload, h.options.storeInterval)), h.Adapter.bind(t, "beforeunload", h.onUnload), h.Adapter.bind(t, "unload", h.onUnload)), h.emulated.pushState || (h.bugs.safariPoll && h.intervalList.push(u(h.safariStatePoll, h.options.safariPollInterval)), "Apple Computer, Inc." !== r.vendor && "Mozilla" !== (r.appCodeName || "") || (h.Adapter.bind(t, "hashchange", function() {
            h.Adapter.trigger(t, "popstate")
        }), h.getHash() && h.Adapter.onDomLoad(function() {
            h.Adapter.trigger(t, "hashchange")
        })))
    }, (!h.options || !h.options.delayInit) && h.init()
}(window);