(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [856], {
    2962: function(e, t, o) {
      "use strict";
      o.d(t, {
        PB: function() {
          return c
        }
      });
      var r = o(9008),
        a = o(7294);

      function n() {
        return (n = Object.assign || function(e) {
          for (var t = 1; t < arguments.length; t++) {
            var o = arguments[t];
            for (var r in o) Object.prototype.hasOwnProperty.call(o, r) && (e[r] = o[r])
          }
          return e
        }).apply(this, arguments)
      }

      function i(e, t) {
        e.prototype = Object.create(t.prototype), e.prototype.constructor = e, e.__proto__ = t
      }
      var p = {
          templateTitle: "",
          noindex: !1,
          nofollow: !1,
          defaultOpenGraphImageWidth: 0,
          defaultOpenGraphImageHeight: 0,
          defaultOpenGraphVideoWidth: 0,
          defaultOpenGraphVideoHeight: 0
        },
        l = function(e) {
          var t, o = [];
          e.titleTemplate && (p.templateTitle = e.titleTemplate);
          var r = "";
          e.title ? (r = e.title, p.templateTitle && (r = p.templateTitle.replace(/%s/g, (function() {
            return r
          })))) : e.defaultTitle && (r = e.defaultTitle), r && o.push(a.createElement("title", {
            key: "title"
          }, r));
          var i = e.noindex || p.noindex || e.dangerouslySetAllPagesToNoIndex,
            l = e.nofollow || p.nofollow || e.dangerouslySetAllPagesToNoFollow,
            c = "";
          if (e.robotsProps) {
            var h = e.robotsProps,
              s = h.nosnippet,
              d = h.maxSnippet,
              u = h.maxImagePreview,
              m = h.maxVideoPreview,
              f = h.noarchive,
              g = h.noimageindex,
              y = h.notranslate,
              v = h.unavailableAfter;
            c = (s ? ",nosnippet" : "") + (d ? ",max-snippet:" + d : "") + (u ? ",max-image-preview:" + u : "") + (f ? ",noarchive" : "") + (v ? ",unavailable_after:" + v : "") + (g ? ",noimageindex" : "") + (m ? ",max-video-preview:" + m : "") + (y ? ",notranslate" : "")
          }
          if (i || l ? (e.dangerouslySetAllPagesToNoIndex && (p.noindex = !0), e.dangerouslySetAllPagesToNoFollow && (p.nofollow = !0), o.push(a.createElement("meta", {
              key: "robots",
              name: "robots",
              content: (i ? "noindex" : "index") + "," + (l ? "nofollow" : "follow") + c
            })), o.push(a.createElement("meta", {
              key: "googlebot",
              name: "googlebot",
              content: (i ? "noindex" : "index") + "," + (l ? "nofollow" : "follow") + c
            }))) : (o.push(a.createElement("meta", {
              key: "robots",
              name: "robots",
              content: "index,follow" + c
            })), o.push(a.createElement("meta", {
              key: "googlebot",
              name: "googlebot",
              content: "index,follow" + c
            }))), e.description && o.push(a.createElement("meta", {
              key: "description",
              name: "description",
              content: e.description
            })), e.mobileAlternate && o.push(a.createElement("link", {
              rel: "alternate",
              key: "mobileAlternate",
              media: e.mobileAlternate.media,
              href: e.mobileAlternate.href
            })), e.languageAlternates && e.languageAlternates.length > 0 && e.languageAlternates.forEach((function(e) {
              o.push(a.createElement("link", {
                rel: "alternate",
                key: "languageAlternate-" + e.hrefLang,
                hrefLang: e.hrefLang,
                href: e.href
              }))
            })), e.twitter && (e.twitter.cardType && o.push(a.createElement("meta", {
              key: "twitter:card",
              name: "twitter:card",
              content: e.twitter.cardType
            })), e.twitter.site && o.push(a.createElement("meta", {
              key: "twitter:site",
              name: "twitter:site",
              content: e.twitter.site
            })), e.twitter.handle && o.push(a.createElement("meta", {
              key: "twitter:creator",
              name: "twitter:creator",
              content: e.twitter.handle
            }))), e.facebook && e.facebook.appId && o.push(a.createElement("meta", {
              key: "fb:app_id",
              property: "fb:app_id",
              content: e.facebook.appId
            })), e.openGraph) {
            if ((e.openGraph.url || e.canonical) && o.push(a.createElement("meta", {
                key: "og:url",
                property: "og:url",
                content: e.openGraph.url || e.canonical
              })), e.openGraph.type) {
              var k = e.openGraph.type.toLowerCase();
              o.push(a.createElement("meta", {
                key: "og:type",
                property: "og:type",
                content: k
              })), "profile" === k && e.openGraph.profile ? (e.openGraph.profile.firstName && o.push(a.createElement("meta", {
                key: "profile:first_name",
                property: "profile:first_name",
                content: e.openGraph.profile.firstName
              })), e.openGraph.profile.lastName && o.push(a.createElement("meta", {
                key: "profile:last_name",
                property: "profile:last_name",
                content: e.openGraph.profile.lastName
              })), e.openGraph.profile.username && o.push(a.createElement("meta", {
                key: "profile:username",
                property: "profile:username",
                content: e.openGraph.profile.username
              })), e.openGraph.profile.gender && o.push(a.createElement("meta", {
                key: "profile:gender",
                property: "profile:gender",
                content: e.openGraph.profile.gender
              }))) : "book" === k && e.openGraph.book ? (e.openGraph.book.authors && e.openGraph.book.authors.length && e.openGraph.book.authors.forEach((function(e, t) {
                o.push(a.createElement("meta", {
                  key: "book:author:0" + t,
                  property: "book:author",
                  content: e
                }))
              })), e.openGraph.book.isbn && o.push(a.createElement("meta", {
                key: "book:isbn",
                property: "book:isbn",
                content: e.openGraph.book.isbn
              })), e.openGraph.book.releaseDate && o.push(a.createElement("meta", {
                key: "book:release_date",
                property: "book:release_date",
                content: e.openGraph.book.releaseDate
              })), e.openGraph.book.tags && e.openGraph.book.tags.length && e.openGraph.book.tags.forEach((function(e, t) {
                o.push(a.createElement("meta", {
                  key: "book:tag:0" + t,
                  property: "book:tag",
                  content: e
                }))
              }))) : "article" === k && e.openGraph.article ? (e.openGraph.article.publishedTime && o.push(a.createElement("meta", {
                key: "article:published_time",
                property: "article:published_time",
                content: e.openGraph.article.publishedTime
              })), e.openGraph.article.modifiedTime && o.push(a.createElement("meta", {
                key: "article:modified_time",
                property: "article:modified_time",
                content: e.openGraph.article.modifiedTime
              })), e.openGraph.article.expirationTime && o.push(a.createElement("meta", {
                key: "article:expiration_time",
                property: "article:expiration_time",
                content: e.openGraph.article.expirationTime
              })), e.openGraph.article.authors && e.openGraph.article.authors.length && e.openGraph.article.authors.forEach((function(e, t) {
                o.push(a.createElement("meta", {
                  key: "article:author:0" + t,
                  property: "article:author",
                  content: e
                }))
              })), e.openGraph.article.section && o.push(a.createElement("meta", {
                key: "article:section",
                property: "article:section",
                content: e.openGraph.article.section
              })), e.openGraph.article.tags && e.openGraph.article.tags.length && e.openGraph.article.tags.forEach((function(e, t) {
                o.push(a.createElement("meta", {
                  key: "article:tag:0" + t,
                  property: "article:tag",
                  content: e
                }))
              }))) : "video.movie" !== k && "video.episode" !== k && "video.tv_show" !== k && "video.other" !== k || !e.openGraph.video || (e.openGraph.video.actors && e.openGraph.video.actors.length && e.openGraph.video.actors.forEach((function(e, t) {
                e.profile && o.push(a.createElement("meta", {
                  key: "video:actor:0" + t,
                  property: "video:actor",
                  content: e.profile
                })), e.role && o.push(a.createElement("meta", {
                  key: "video:actor:role:0" + t,
                  property: "video:actor:role",
                  content: e.role
                }))
              })), e.openGraph.video.directors && e.openGraph.video.directors.length && e.openGraph.video.directors.forEach((function(e, t) {
                o.push(a.createElement("meta", {
                  key: "video:director:0" + t,
                  property: "video:director",
                  content: e
                }))
              })), e.openGraph.video.writers && e.openGraph.video.writers.length && e.openGraph.video.writers.forEach((function(e, t) {
                o.push(a.createElement("meta", {
                  key: "video:writer:0" + t,
                  property: "video:writer",
                  content: e
                }))
              })), e.openGraph.video.duration && o.push(a.createElement("meta", {
                key: "video:duration",
                property: "video:duration",
                content: e.openGraph.video.duration.toString()
              })), e.openGraph.video.releaseDate && o.push(a.createElement("meta", {
                key: "video:release_date",
                property: "video:release_date",
                content: e.openGraph.video.releaseDate
              })), e.openGraph.video.tags && e.openGraph.video.tags.length && e.openGraph.video.tags.forEach((function(e, t) {
                o.push(a.createElement("meta", {
                  key: "video:tag:0" + t,
                  property: "video:tag",
                  content: e
                }))
              })), e.openGraph.video.series && o.push(a.createElement("meta", {
                key: "video:series",
                property: "video:series",
                content: e.openGraph.video.series
              })))
            }(e.openGraph.title || e.title) && o.push(a.createElement("meta", {
              key: "og:title",
              property: "og:title",
              content: e.openGraph.title || r
            })), (e.openGraph.description || e.description) && o.push(a.createElement("meta", {
              key: "og:description",
              property: "og:description",
              content: e.openGraph.description || e.description
            })), e.defaultOpenGraphImageWidth && (p.defaultOpenGraphImageWidth = e.defaultOpenGraphImageWidth), e.defaultOpenGraphImageHeight && (p.defaultOpenGraphImageHeight = e.defaultOpenGraphImageHeight), e.openGraph.images && e.openGraph.images.length && e.openGraph.images.forEach((function(e, t) {
              o.push(a.createElement("meta", {
                key: "og:image:0" + t,
                property: "og:image",
                content: e.url
              })), e.alt && o.push(a.createElement("meta", {
                key: "og:image:alt0" + t,
                property: "og:image:alt",
                content: e.alt
              })), e.width ? o.push(a.createElement("meta", {
                key: "og:image:width0" + t,
                property: "og:image:width",
                content: e.width.toString()
              })) : p.defaultOpenGraphImageWidth && o.push(a.createElement("meta", {
                key: "og:image:width0" + t,
                property: "og:image:width",
                content: p.defaultOpenGraphImageWidth.toString()
              })), e.height ? o.push(a.createElement("meta", {
                key: "og:image:height" + t,
                property: "og:image:height",
                content: e.height.toString()
              })) : p.defaultOpenGraphImageHeight && o.push(a.createElement("meta", {
                key: "og:image:height" + t,
                property: "og:image:height",
                content: p.defaultOpenGraphImageHeight.toString()
              }))
            })), e.defaultOpenGraphVideoWidth && (p.defaultOpenGraphVideoWidth = e.defaultOpenGraphVideoWidth), e.defaultOpenGraphVideoHeight && (p.defaultOpenGraphVideoHeight = e.defaultOpenGraphVideoHeight), e.openGraph.videos && e.openGraph.videos.length && e.openGraph.videos.forEach((function(e, t) {
              o.push(a.createElement("meta", {
                key: "og:video:0" + t,
                property: "og:video",
                content: e.url
              })), e.alt && o.push(a.createElement("meta", {
                key: "og:video:alt0" + t,
                property: "og:video:alt",
                content: e.alt
              })), e.width ? o.push(a.createElement("meta", {
                key: "og:video:width0" + t,
                property: "og:video:width",
                content: e.width.toString()
              })) : p.defaultOpenGraphVideoWidth && o.push(a.createElement("meta", {
                key: "og:video:width0" + t,
                property: "og:video:width",
                content: p.defaultOpenGraphVideoWidth.toString()
              })), e.height ? o.push(a.createElement("meta", {
                key: "og:video:height" + t,
                property: "og:video:height",
                content: e.height.toString()
              })) : p.defaultOpenGraphVideoHeight && o.push(a.createElement("meta", {
                key: "og:video:height" + t,
                property: "og:video:height",
                content: p.defaultOpenGraphVideoHeight.toString()
              })), e.secureUrl && o.push(a.createElement("meta", {
                key: "og:video:secure_url" + t,
                property: "og:video:secure_url",
                content: e.secureUrl.toString()
              })), e.type && o.push(a.createElement("meta", {
                key: "og:video:type" + t,
                property: "og:video:type",
                content: e.type.toString()
              }))
            })), e.openGraph.locale && o.push(a.createElement("meta", {
              key: "og:locale",
              property: "og:locale",
              content: e.openGraph.locale
            })), e.openGraph.site_name && o.push(a.createElement("meta", {
              key: "og:site_name",
              property: "og:site_name",
              content: e.openGraph.site_name
            }))
          }
          return e.canonical && o.push(a.createElement("link", {
            rel: "canonical",
            href: e.canonical,
            key: "canonical"
          })), e.additionalMetaTags && e.additionalMetaTags.length > 0 && e.additionalMetaTags.forEach((function(e) {
            var t, r, i;
            o.push(a.createElement("meta", n({
              key: "meta:" + (null != (t = null != (r = null != (i = e.keyOverride) ? i : e.name) ? r : e.property) ? t : e.httpEquiv)
            }, e)))
          })), null != (t = e.additionalLinkTags) && t.length && e.additionalLinkTags.forEach((function(e) {
            var t;
            o.push(a.createElement("link", n({
              key: "link" + (null != (t = e.keyOverride) ? t : e.href) + e.rel
            }, e)))
          })), o
        },
        c = (a.Component, function(e) {
          function t() {
            return e.apply(this, arguments) || this
          }
          return i(t, e), t.prototype.render = function() {
            var e = this.props,
              t = e.title,
              o = e.noindex,
              n = void 0 !== o && o,
              i = e.nofollow,
              p = e.robotsProps,
              c = e.description,
              h = e.canonical,
              s = e.openGraph,
              d = e.facebook,
              u = e.twitter,
              m = e.additionalMetaTags,
              f = e.titleTemplate,
              g = e.mobileAlternate,
              y = e.languageAlternates,
              v = e.additionalLinkTags;
            return a.createElement(r.default, null, l({
              title: t,
              noindex: n,
              nofollow: i,
              robotsProps: p,
              description: c,
              canonical: h,
              facebook: d,
              openGraph: s,
              additionalMetaTags: m,
              twitter: u,
              titleTemplate: f,
              mobileAlternate: g,
              languageAlternates: y,
              additionalLinkTags: v
            }))
          }, t
        }(a.Component))
    },
    2167: function(e, t, o) {
      "use strict";
      var r = o(3038);
      t.default = void 0;
      var a, n = (a = o(7294)) && a.__esModule ? a : {
          default: a
        },
        i = o(1063),
        p = o(4651),
        l = o(7426);
      var c = {};

      function h(e, t, o, r) {
        if (e && i.isLocalURL(t)) {
          e.prefetch(t, o, r).catch((function(e) {
            0
          }));
          var a = r && "undefined" !== typeof r.locale ? r.locale : e && e.locale;
          c[t + "%" + o + (a ? "%" + a : "")] = !0
        }
      }
      var s = function(e) {
        var t, o = !1 !== e.prefetch,
          a = p.useRouter(),
          s = n.default.useMemo((function() {
            var t = i.resolveHref(a, e.href, !0),
              o = r(t, 2),
              n = o[0],
              p = o[1];
            return {
              href: n,
              as: e.as ? i.resolveHref(a, e.as) : p || n
            }
          }), [a, e.href, e.as]),
          d = s.href,
          u = s.as,
          m = e.children,
          f = e.replace,
          g = e.shallow,
          y = e.scroll,
          v = e.locale;
        "string" === typeof m && (m = n.default.createElement("a", null, m));
        var k = (t = n.default.Children.only(m)) && "object" === typeof t && t.ref,
          G = l.useIntersection({
            rootMargin: "200px"
          }),
          E = r(G, 2),
          b = E[0],
          w = E[1],
          _ = n.default.useCallback((function(e) {
            b(e), k && ("function" === typeof k ? k(e) : "object" === typeof k && (k.current = e))
          }), [k, b]);
        n.default.useEffect((function() {
          var e = w && o && i.isLocalURL(d),
            t = "undefined" !== typeof v ? v : a && a.locale,
            r = c[d + "%" + u + (t ? "%" + t : "")];
          e && !r && h(a, d, u, {
            locale: t
          })
        }), [u, d, w, v, o, a]);
        var O = {
          ref: _,
          onClick: function(e) {
            t.props && "function" === typeof t.props.onClick && t.props.onClick(e), e.defaultPrevented || function(e, t, o, r, a, n, p, l) {
              ("A" !== e.currentTarget.nodeName || ! function(e) {
                var t = e.currentTarget.target;
                return t && "_self" !== t || e.metaKey || e.ctrlKey || e.shiftKey || e.altKey || e.nativeEvent && 2 === e.nativeEvent.which
              }(e) && i.isLocalURL(o)) && (e.preventDefault(), null == p && r.indexOf("#") >= 0 && (p = !1), t[a ? "replace" : "push"](o, r, {
                shallow: n,
                locale: l,
                scroll: p
              }))
            }(e, a, d, u, f, g, y, v)
          },
          onMouseEnter: function(e) {
            i.isLocalURL(d) && (t.props && "function" === typeof t.props.onMouseEnter && t.props.onMouseEnter(e), h(a, d, u, {
              priority: !0
            }))
          }
        };
        if (e.passHref || "a" === t.type && !("href" in t.props)) {
          var T = "undefined" !== typeof v ? v : a && a.locale,
            x = a && a.isLocaleDomain && i.getDomainLocale(u, T, a && a.locales, a && a.domainLocales);
          O.href = x || i.addBasePath(i.addLocale(u, T, a && a.defaultLocale))
        }
        return n.default.cloneElement(t, O)
      };
      t.default = s
    },
    7426: function(e, t, o) {
      "use strict";
      var r = o(3038);
      Object.defineProperty(t, "__esModule", {
        value: !0
      }), t.useIntersection = function(e) {
        var t = e.rootMargin,
          o = e.disabled || !i,
          l = a.useRef(),
          c = a.useState(!1),
          h = r(c, 2),
          s = h[0],
          d = h[1],
          u = a.useCallback((function(e) {
            l.current && (l.current(), l.current = void 0), o || s || e && e.tagName && (l.current = function(e, t, o) {
              var r = function(e) {
                  var t = e.rootMargin || "",
                    o = p.get(t);
                  if (o) return o;
                  var r = new Map,
                    a = new IntersectionObserver((function(e) {
                      e.forEach((function(e) {
                        var t = r.get(e.target),
                          o = e.isIntersecting || e.intersectionRatio > 0;
                        t && o && t(o)
                      }))
                    }), e);
                  return p.set(t, o = {
                    id: t,
                    observer: a,
                    elements: r
                  }), o
                }(o),
                a = r.id,
                n = r.observer,
                i = r.elements;
              return i.set(e, t), n.observe(e),
                function() {
                  i.delete(e), n.unobserve(e), 0 === i.size && (n.disconnect(), p.delete(a))
                }
            }(e, (function(e) {
              return e && d(e)
            }), {
              rootMargin: t
            }))
          }), [o, t, s]);
        return a.useEffect((function() {
          if (!i && !s) {
            var e = n.requestIdleCallback((function() {
              return d(!0)
            }));
            return function() {
              return n.cancelIdleCallback(e)
            }
          }
        }), [s]), [u, s]
      };
      var a = o(7294),
        n = o(3447),
        i = "undefined" !== typeof IntersectionObserver;
      var p = new Map
    },
    9008: function(e, t, o) {
      e.exports = o(639)
    },
    1664: function(e, t, o) {
      e.exports = o(2167)
    }
  }
]);
