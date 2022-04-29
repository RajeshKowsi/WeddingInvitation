
(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [880], {
    9493: function(e, t, r) {
      "use strict";
      r.d(t, {
        LN: function() {
          return a
        },
        Dv: function() {
          return d
        },
        nv: function() {
          return l
        }
      });
      r(7294);
      var n = r(9008),
        o = r(5669),
        s = r(5893),
        a = function(e) {
          var t = e.children,
            r = void 0 === t ? null : t;
          return (0, s.jsxs)("div", {
            className: "app-container ",
            style: {
              minHeight: "620px"
            },
            children: [(0, s.jsx)(n.default, {
              children: (0, s.jsxs)("title", {
                children: [o.Z.APP_NAME, " - ", o.Z.APP_DESCRIPTION]
              })
            }), (0, s.jsx)("main", {
              children: r
            })]
          })
        },
        c = r(1664),
        i = r(2764),
        l = function() {
          return (0, s.jsxs)("footer", {
            className: "px-4 text-sm text-red-400 flex flex-col-reverse text-center md:flex-row py-4",
            children: [(0, s.jsxs)("p", {
              children: ["\xa9 2016 - ", (new Date).getFullYear(), " ", o.Z.APP_NAME, " App"]
            }), (0, s.jsxs)("ul", {
              className: "md:ml-auto space-x-4 text-bold list-disc font-bold",
              children: [(0, s.jsx)("li", {
                className: "inline-block",
                children: (0, s.jsx)(c.default, {
                  href: "/faq",
                  children: (0, s.jsx)("a", {
                    children: "FAQ"
                  })
                })
              }), (0, s.jsx)("li", {
                className: "inline-block",
                children: (0, s.jsx)(c.default, {
                  href: "/terms-and-policies",
                  children: (0, s.jsx)("a", {
                    children: "Terms and policies"
                  })
                })
              })]
            })]
          })
        },
        d = function(e) {
          var t = e.children,
            r = void 0 === t ? null : t;
          return (0, s.jsxs)("div", {
            className: "bg-red-100 min-h-full",
            children: [(0, s.jsx)(i.q, {}), (0, s.jsxs)("div", {
              className: "mx-auto  max-w-screen-lg py-4",
              children: [(0, s.jsxs)("div", {
                className: "px-4 flex flex-col md:flex-row items-center  grd-1 shadow-lg mb-4 py-2",
                children: [(0, s.jsx)(c.default, {
                  href: "/",
                  children: (0, s.jsxs)("a", {
                    className: "text-3xl font-thin text-white flex items-center",
                    children: [(0, s.jsx)("img", {
                      className: " h-10 rounded-lg inline-block",
                      src: "/images/logo.png"
                    }), (0, s.jsx)("span", {
                      className: "inline-block ml-2",
                      children: "Wedding Countdown"
                    })]
                  })
                }), (0, s.jsxs)("nav", {
                  className: "md:ml-auto space-x-2",
                  children: [(0, s.jsx)(u, {
                    href: "/",
                    children: "Home"
                  }), (0, s.jsx)(u, {
                    href: "/articles",
                    children: "Articles"
                  }), (0, s.jsx)(u, {
                    href: "/faq",
                    children: "FAQ"
                  }), (0, s.jsx)(u, {
                    href: "/terms-and-policies",
                    children: "Terms and policies"
                  })]
                })]
              }), (0, s.jsx)("div", {
                children: r
              }), (0, s.jsx)(l, {})]
            })]
          })
        },
        u = function(e) {
          var t = e.href,
            r = void 0 === t ? "/" : t,
            n = e.children,
            o = void 0 === n ? null : n;
          return (0, s.jsx)(c.default, {
            href: r,
            children: (0, s.jsx)("a", {
              className: "inline-block border border-pink-500 hover:bg-red-600  rounded-2xl px-3 py-2 text-white transition duration-500 ease-in-out",
              children: o
            })
          })
        }
    },
    6354: function(e, t, r) {
      "use strict";
      r.d(t, {
        jL: function() {
          return f
        },
        Hr: function() {
          return i
        },
        PK: function() {
          return p
        }
      });
      var n = r(4942),
        o = r(7294),
        s = r(5893);

      function a(e, t) {
        var r = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var n = Object.getOwnPropertySymbols(e);
          t && (n = n.filter((function(t) {
            return Object.getOwnPropertyDescriptor(e, t).enumerable
          }))), r.push.apply(r, n)
        }
        return r
      }

      function c(e) {
        for (var t = 1; t < arguments.length; t++) {
          var r = null != arguments[t] ? arguments[t] : {};
          t % 2 ? a(Object(r), !0).forEach((function(t) {
            (0, n.Z)(e, t, r[t])
          })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : a(Object(r)).forEach((function(t) {
            Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(r, t))
          }))
        }
        return e
      }

      function i(e) {
        return (0, s.jsxs)("svg", c(c({
          xmlns: "http://www.w3.org/2000/svg",
          viewBox: "0 0 512 512"
        }, e), {}, {
          children: [(0, s.jsx)("path", {
            d: "M257.65 433.586l-32.096-59.817c-10.658-19.864-10.658-43.58.003-63.443l32.092-59.802a27.156 27.156 0 000-25.681l-32.092-59.802c-10.659-19.865-10.659-43.585.001-63.449 0 0 18.484-35.978-11.288-51-54.084-27.29-122.825-13.875-166.136 33.567-142.742 156.359 68.057 321.955 165.785 386.2 15.009 9.867 35.24 4.734 43.732-11.094-.001.002 7.117-12.023-.001-25.679z",
            fill: "#ff8392"
          }), (0, s.jsx)("path", {
            d: "M213.917 470.36c15.009 9.867 35.24 4.734 43.732-11.093 0 0 6.802-11.477.467-24.745-55.12-43.061-111.506-100.431-143.069-170.678-55.803-124.193-12.451-195.725 14.494-224.948-30.222 5.514-59.169 20.903-81.409 45.263-142.741 156.36 68.058 321.956 165.785 386.201z",
            fill: "#f46262"
          }), (0, s.jsx)("path", {
            d: "M463.867 84.16c-37.208-40.758-92.229-54.376-142.118-41.853-18.814 4.722-34.715 17.268-43.888 34.36l-23.51 43.807a27.163 27.163 0 000 25.686l32.092 59.8c10.66 19.864 10.66 43.583 0 63.447l-32.092 59.802a27.093 27.093 0 00-.001 25.68l32.096 59.817a67.131 67.131 0 017.079 20.721c2.684 16.105 20.971 24.063 34.248 14.561C431.824 375.521 593.39 226.038 463.867 84.16z",
            fill: "#ff8392"
          }), (0, s.jsx)("path", {
            d: "M351.905 423.347l-33.739-62.88a28.477 28.477 0 01.001-26.995l33.735-62.864c11.206-20.881 11.206-45.815 0-66.696l-33.735-62.863a28.548 28.548 0 010-27L342.88 68a72.94 72.94 0 0129.251-29.5 148.747 148.747 0 00-50.382 3.809c-18.814 4.722-34.715 17.268-43.888 34.36l-23.51 43.806a27.163 27.163 0 000 25.686l32.092 59.8c10.66 19.864 10.66 43.584 0 63.447l-32.092 59.802a27.093 27.093 0 00-.001 25.68l32.096 59.817a67.122 67.122 0 017.079 20.721c2.684 16.105 20.971 24.063 34.248 14.562a859.71 859.71 0 0027.145-20.238 70.539 70.539 0 00-3.013-6.405z",
            fill: "#f46262"
          })]
        }))
      }
      var l = r(5324),
        d = ["Just remember\u2026 The cake gets eaten, the flowers will die, but the wedding moments will last forever\u2026", "Two souls but a single thought two hearts that beat as one.", "Love is blind but marriage restores its sight.", "Love is an irresistible desire to be irresistibly desired.", "A successful marriage requires falling in love many times, always with the same person.", "Love isn't something you find. Love is something that finds you.", "We love because it's the only true adventure. ", "Love is what makes two people sit in the middle of a bench when there is plenty of room at both ends.", "Real love stories never have endings.", 'No matter how old you get, never stop dancing, never stop saying "I Love You"', "A happy marriage is a long conversation which always seems too short.", "Every love story is beautiful but ours is my favourite.", "Don't marry someone you can live with marry someone you can't live without", "Love doesn't make the world go round. Love is what makes the ride worthwhile.", "Happy marriages begin when we marry the ones we love, and they blossom when we love the ones we marry", "Marriage is a mutual commitment to love without condition or expiration date.", '"A Perfect Marriage" is just two imperfect people who refuse to give up on each other', "When we are in love we seem to ourselves quite different from what we were before. ", "True love is quiescent, except in the nascent moments of true humility.", "Love is only a dirty trick played on us to achieve continuation of the species.", "Love is all we have, the only way that each can help the other. ", "Say what you will, 'tis better to be left than never to have been loved. ", "Love is a game that two can play and both win.", "Love is when you meet someone who tells you something new about yourself. ", "Words may be false and full of art; Sighs are the natural language of the heart.", "Love is like war: easy to begin but very hard to stop.", "We are all born for love. It is the principle of existence, and its only end.", "I am happiest when I'm right next to you", "I need you like a heart needs a beat.", "Love is not only something you feel, it is something you do", "We always believe our first love is our last, and our last love our first", "You come to love not by finding the perfect person, but by seeing an imperfect person perfectly.", "True love comes quietly, without banners or flashing lights. If you hear bells, get your ears checked.", "Just remember\u2026 The cake gets eaten, the flowers will die, but the wedding moments will last forever\u2026", "Every love story is beautiful but ours is my favourite.", "Love doesn't make the world go round. Love is what makes the ride worthwhile.", "In love the paradox occurs that two beings become one and yet remain two. ", "Love is an emotion experienced by the many and enjoyed by the few.  ", "All love shifts and changes. I don't know if you can be wholeheartedly in love all the time. ", "People who throw kisses are hopelessly lazy. ", "To love is to admire with the heart; to admire is to love with the mind.", "To enlarge or illustrate this power and effect of love is to set a candle in the sun.", "Love means not ever having to say you're sorry. ", "Pains of love be sweeter far than all other pleasures are.", "In matters of the heart, nothing is true except the improbable.", "We cease loving ourselves if no one loves us.", "No, there's nothing half so sweet in life as love's young dream."];

      function u(e, t) {
        var r = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var n = Object.getOwnPropertySymbols(e);
          t && (n = n.filter((function(t) {
            return Object.getOwnPropertyDescriptor(e, t).enumerable
          }))), r.push.apply(r, n)
        }
        return r
      }

      function h(e) {
        for (var t = 1; t < arguments.length; t++) {
          var r = null != arguments[t] ? arguments[t] : {};
          t % 2 ? u(Object(r), !0).forEach((function(t) {
            (0, n.Z)(e, t, r[t])
          })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : u(Object(r)).forEach((function(t) {
            Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(r, t))
          }))
        }
        return e
      }
      var p = function(e) {
        var t = e.textStyles,
          r = o.useMemo((function() {
            return function(e, t) {
              var r = new Array(t),
                n = e.length,
                o = new Array(n);
              if (t > n) throw new RangeError("getRandom: more elements taken than available");
              for (; t--;) {
                var s = Math.floor(Math.random() * n);
                r[t] = e[s in o ? o[s] : s], o[s] = --n in o ? o[n] : n
              }
              return r
            }(d, d.length)
          }), []);
        return (0, s.jsx)("div", {
          className: "text-sm  mt-4 text-center w-full px-3 h-14",
          style: h({}, t),
          children: (0, s.jsx)(l.Z, {
            interval: 1e4,
            delay: 10,
            mask: !0,
            noWrap: !1,
            springConfig: {
              stiffness: 70,
              damping: 10
            },
            children: r.map((function(e, t) {
              return (0, s.jsx)("span", {
                children: e
              }, t)
            }))
          })
        })
      };
      var f = function() {
        return (0, s.jsx)("div", {
          className: "h-full w-full flex items-center justify-center",
          children: (0, s.jsx)("div", {
            className: " p-3 rounded-xl text-center flex items-center animate-pulse",
            children: (0, s.jsx)("img", {
              src: "/images/logo.png",
              className: "w-12 h-12 rounded-full"
            })
          })
        })
      }
    },
    2764: function(e, t, r) {
      "use strict";
      r.d(t, {
        q: function() {
          return a
        }
      });
      r(7294);
      var n = r(2962),
        o = r(5669),
        s = r(5893),
        a = function(e) {
          var t = e.title,
            r = void 0 === t ? null : t,
            a = e.description,
            c = void 0 === a ? null : a,
            i = e.image,
            l = void 0 === i ? null : i;
          return (0, s.jsx)(n.PB, {
            title: r ? "".concat(r, " - ").concat(o.Z.APP_NAME) : o.Z.SEO_TITLE,
            description: c || o.Z.SEO_DESCRIPTION,
            openGraph: {
              url: o.Z.APP_URL,
              title: r || o.Z.SEO_TITLE,
              description: c || o.Z.SEO_DESCRIPTION,
              locale: "en_US",
              images: [{
                url: l || o.Z.SEO_IMAGE,
                width: 800,
                height: 600,
                alt: o.Z.SEO_TITLE
              }],
              site_name: "SiteName"
            },
            twitter: {
              cardType: "summary_large_image"
            }
          })
        }
    },
    1385: function(e, t, r) {
      "use strict";
      r.d(t, {
        Mp: function() {
          return oe
        },
        UV: function() {
          return te
        },
        LY: function() {
          return W
        },
        GX: function() {
          return Q
        },
        Jf: function() {
          return _e
        },
        sj: function() {
          return q
        },
        TX: function() {
          return we
        },
        tv: function() {
          return k
        },
        yw: function() {
          return ge
        },
        R5: function() {
          return je
        }
      });
      var n = r(7294),
        o = r(4942),
        s = r(5434),
        a = r(1607),
        c = r(5893);

      function i(e, t) {
        var r = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var n = Object.getOwnPropertySymbols(e);
          t && (n = n.filter((function(t) {
            return Object.getOwnPropertyDescriptor(e, t).enumerable
          }))), r.push.apply(r, n)
        }
        return r
      }

      function l(e) {
        for (var t = 1; t < arguments.length; t++) {
          var r = null != arguments[t] ? arguments[t] : {};
          t % 2 ? i(Object(r), !0).forEach((function(t) {
            (0, o.Z)(e, t, r[t])
          })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : i(Object(r)).forEach((function(t) {
            Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(r, t))
          }))
        }
        return e
      }
      var d = function(e) {
          var t = e.path,
            r = (0, n.useState)(null),
            o = r[0],
            i = r[1];
          (0, n.useEffect)((function() {
            var e = new Audio(t);
            e.autoplay = !0, e.loop = !0, i(e)
          }), []);
          var d = (0, n.useState)({
              ready: !1,
              error: !1,
              paused: !0
            }),
            u = d[0],
            h = d[1];
          return (0, n.useEffect)((function() {
            o && o.addEventListener("canplaythrough", (function(e) {
              h((function(e) {
                return l(l({}, e), {}, {
                  ready: !0,
                  paused: o.paused
                })
              }))
            }))
          }), [o]), (0, c.jsx)("div", {
            children: u.ready ? (0, c.jsx)("button", {
              className: "h-12  w-full border  text-center rounded-xl text-xl flex justify-center items-center animate-pulse ".concat(u.paused ? "border-red-400  text-red-400" : "border-green-400  text-green-400"),
              onClick: function() {
                o.paused ? o.play() : o.pause(), h((function(e) {
                  return l(l({}, e), {}, {
                    paused: o.paused
                  })
                }))
              },
              children: u.paused ? (0, c.jsx)(s.HvK, {}) : (0, c.jsx)(s.hwG, {})
            }) : (0, c.jsx)("div", {
              className: "centerlize",
              children: (0, c.jsx)(a.Z, {
                type: "Puff",
                color: "#34D399",
                height: 25,
                width: 22
              })
            })
          })
        },
        u = r(5669),
        h = function() {
          return u.Z.AD_ENABLED ? ((0, n.useEffect)((function() {
            window && (window.adsbygoogle = window.adsbygoogle || []).push({})
          }), []), (0, c.jsx)("div", {
            className: "absolute w-full  bottom-0 px-2 pb-2 z-50",
            style: {
              height: u.Z.AD_PLACEHOLDER_HEIGHT
            },
            children: (0, c.jsx)("div", {
              className: "h-full relative  text-black font-sans flex justify-center items-end ".concat(u.Z.AD_DEBUG_MODE ? "border border-dashed" : ""),
              children: (0, c.jsx)("ins", {
                className: "adsbygoogle example_responsive",
                style: {
                  display: "inline-block"
                },
                "data-full-width-responsive": "true",
                "data-ad-client": u.Z.AD_CLIENT,
                "data-ad-slot": u.Z.AD_SLOT
              })
            })
          })) : null
        },
        p = r(3949),
        f = r(13),
        m = r(1649),
        y = r(2834),
        x = r(9275),
        b = r(6573),
        g = r(1020),
        j = r(6616),
        v = r(7385),
        w = r(8168),
        O = r(4276),
        P = r(8137),
        _ = r(6339);

      function N(e, t) {
        var r = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var n = Object.getOwnPropertySymbols(e);
          t && (n = n.filter((function(t) {
            return Object.getOwnPropertyDescriptor(e, t).enumerable
          }))), r.push.apply(r, n)
        }
        return r
      }

      function S(e) {
        for (var t = 1; t < arguments.length; t++) {
          var r = null != arguments[t] ? arguments[t] : {};
          t % 2 ? N(Object(r), !0).forEach((function(t) {
            (0, o.Z)(e, t, r[t])
          })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : N(Object(r)).forEach((function(t) {
            Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(r, t))
          }))
        }
        return e
      }
      var D = {
          round: !0,
          size: "40"
        },
        E = function(e) {
          var t = e.countdownId,
            r = void 0 === t ? null : t,
            o = (0, n.useState)(!1),
            s = o[0],
            a = o[1],
            i = (0, n.useState)(u.Z.APP_URL),
            l = i[0],
            d = i[1];
          return (0, n.useEffect)((function() {
            d("".concat(u.Z.APP_URL, "/watch/").concat(r))
          }), [r]), (0, c.jsxs)("div", {
            className: "z-50 relative",
            style: {
              zIndex: 8e3
            },
            children: [(0, c.jsx)("button", {
              onClick: function() {
                return a(!0)
              },
              className: "h-12 border border-red-400 p-1 rounded-lg text-lg w-full text-center flex justify-center items-center",
              children: (0, c.jsx)(m.cav, {
                className: "text-red-400"
              })
            }), (0, c.jsx)(p.u, {
              show: s,
              enter: "transition duration-100 ease-out",
              enterFrom: "transform scale-95 opacity-0",
              enterTo: "transform scale-100 opacity-100",
              leave: "transition duration-75 ease-out",
              leaveFrom: "transform scale-100 opacity-100",
              leaveTo: "transform scale-95 opacity-0",
              children: (0, c.jsxs)(f.V, {
                open: s,
                onClose: function() {
                  return a(!1)
                },
                className: "fixed  w-full inset-0  overflow-y-auto  ",
                children: [(0, c.jsx)(f.V.Overlay, {
                  className: "fixed inset-0 bg-black opacity-30 "
                }), (0, c.jsx)("div", {
                  className: "flex items-center justify-center relative z-50 w-96 mx-auto ",
                  style: {
                    top: "50%",
                    transform: "translateY(-50%)"
                  },
                  children: (0, c.jsxs)("div", {
                    className: "bg-gray-900 rounded-xl  shadow-2xl relative p-3 text-white",
                    children: [(0, c.jsxs)("div", {
                      className: " flex text-red-400",
                      children: [(0, c.jsx)(f.V.Title, {
                        children: "Share"
                      }), (0, c.jsx)("button", {
                        onClick: function() {
                          return a(!1)
                        },
                        className: " inline-block p-1  ml-auto",
                        children: "\xd7"
                      })]
                    }), (0, c.jsx)(f.V.Description, {
                      className: "text-sm",
                      children: "Share with others"
                    }), (0, c.jsxs)("div", {
                      className: "p-2 space-x-2",
                      children: [(0, c.jsx)(y.Z, {
                        url: "".concat(l, "?source=share_btn_wa"),
                        children: (0, c.jsx)(x.Z, S({}, D))
                      }), (0, c.jsx)(b.Z, {
                        url: "".concat(l, "?source=share_btn_fb"),
                        children: (0, c.jsx)(g.Z, S({}, D))
                      }), (0, c.jsx)(j.Z, {
                        url: "".concat(l, "?source=share_btn_tw"),
                        children: (0, c.jsx)(v.Z, S({}, D))
                      }), (0, c.jsx)(w.Z, {
                        url: "".concat(l, "?source=share_btn_tg"),
                        children: (0, c.jsx)(O.Z, S({}, D))
                      }), (0, c.jsx)(P.Z, {
                        url: "".concat(l, "?source=share_btn_email"),
                        children: (0, c.jsx)(_.Z, S({}, D))
                      })]
                    })]
                  })
                })]
              })
            })]
          })
        },
        T = r(2962),
        k = function(e) {
          var t = e.children,
            r = e.bgImage,
            n = void 0 === r ? "" : r,
            o = e.bgPosition,
            s = void 0 === o ? "0 0" : o,
            a = e.bgFilter,
            i = void 0 === a ? "none" : a,
            l = e.padding,
            p = void 0 === l ? "p-4" : l,
            f = e.font,
            m = void 0 === f ? "" : f,
            y = e.color,
            x = void 0 === y ? "#fff" : y,
            b = e.sound,
            g = void 0 === b ? "" : b,
            j = e.event;
          return (0, c.jsxs)("div", {
            className: "invitation  h-full  relative \n      bg-gray-900 text-white   ",
            style: {
              filter: i,
              color: x
            },
            children: [(0, c.jsx)(T.PB, {
              title: "".concat(j.bride, " \u2764\ufe0f   ").concat(j.groom, "  ").concat(u.Z.EVNET_PAGE_TITLE_SUFIX),
              description: u.Z.SEO_DESCRIPTION,
              openGraph: {
                title: "".concat(j.bride, "  \u2764\ufe0f  ").concat(j.groom, "  ").concat(u.Z.EVNET_PAGE_TITLE_SUFIX),
                description: u.Z.SEO_DESCRIPTION,
                images: [{
                  url: n,
                  width: 800,
                  height: 600,
                  alt: "".concat(j.bride, " \u2764\ufe0f  ").concat(j.groom, "  ").concat(u.Z.EVNET_PAGE_TITLE_SUFIX)
                }],
                site_name: "WeddingCountdown.app"
              }
            }), (0, c.jsxs)("div", {
              className: " absolute top-2 right-2 w-16 text-center p-2  bg-gray-700 shadow-lg rounded-xl z-50 bg-opacity-30",
              children: [g && (0, c.jsx)(d, {
                path: g
              }), (0, c.jsx)("div", {
                className: "mt-4",
                children: (0, c.jsx)(E, {
                  countdownId: j.id
                })
              })]
            }), (0, c.jsx)("div", {
              className: "absolute top-0 left-0 w-full h-full  bg-cover bg-center ".concat(j.coverAnim ? "animate-bg-pos" : ""),
              style: {
                backgroundImage: "url('".concat(n, "')"),
                backgroundPosition: s,
                filter: "blur(".concat(j.bgBlur, ")")
              }
            }), (0, c.jsx)("div", {
              className: "absolute z-10 top-0 left-0 w-full h-full ",
              style: {
                backgroundColor: j.bgFilterColor,
                opacity: j.bgFilterPr
              }
            }), (0, c.jsxs)("div", {
              className: "absolute z-20  w-full h-full ".concat(p, " flex flex-col justify-center items-center ").concat(m),
              children: [t, j.isAdEnabled && (0, c.jsx)(h, {})]
            })]
          })
        },
        A = {
          base: "",
          large: "avatar__large"
        },
        L = function(e) {
          var t = e.src,
            r = e.size,
            n = void 0 === r ? "base" : r;
          return (0, c.jsx)("img", {
            className: "avatar__img ".concat(A[n], " "),
            src: t
          })
        },
        I = r(4925),
        Z = r(8130),
        C = ["days", "hours", "minutes", "seconds", "completed", "blocked", "variant", "daysSeperate", "daysLabel", "completionText", "textStyles"],
        F = ["showdays", "variant", "daysSeperate", "daysLabel", "color", "font", "completionText", "textStyles"];

      function R(e, t) {
        var r = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var n = Object.getOwnPropertySymbols(e);
          t && (n = n.filter((function(t) {
            return Object.getOwnPropertyDescriptor(e, t).enumerable
          }))), r.push.apply(r, n)
        }
        return r
      }

      function M(e) {
        for (var t = 1; t < arguments.length; t++) {
          var r = null != arguments[t] ? arguments[t] : {};
          t % 2 ? R(Object(r), !0).forEach((function(t) {
            (0, o.Z)(e, t, r[t])
          })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : R(Object(r)).forEach((function(t) {
            Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(r, t))
          }))
        }
        return e
      }
      var B = function(e) {
          var t = e.text,
            r = void 0 === t ? "Congratulations!" : t,
            n = e.textStyles,
            o = void 0 === n ? {} : n;
          return (0, c.jsx)("div", {
            className: "text-center",
            style: M({
              fontSize: "inherit",
              color: "inherit",
              fontFamily: "inherit"
            }, o),
            children: r
          })
        },
        z = function(e) {
          var t = e.days,
            r = e.hours,
            n = e.minutes,
            o = e.seconds,
            s = e.completed,
            a = (e.blocked, e.variant),
            i = void 0 === a ? "" : a,
            l = e.daysSeperate,
            d = void 0 !== l && l,
            u = e.daysLabel,
            h = void 0 === u ? "Days" : u,
            p = e.completionText,
            f = void 0 === p ? "@@#" : p,
            m = e.textStyles,
            y = void 0 === m ? {} : m;
          (0, I.Z)(e, C);
          return s ? (0, c.jsx)(B, {
            text: f,
            textStyles: y
          }) : (0, c.jsx)("div", {
            className: "counter counter__".concat(i),
            children: d ? (0, c.jsxs)("div", {
              children: [(0, c.jsxs)("div", {
                className: "counter__element counter_day",
                children: [(0, c.jsx)("div", {
                  style: M({}, y),
                  children: (0, Z.Bu)(t)
                }), (0, c.jsx)("p", {
                  style: M({}, y),
                  children: h
                })]
              }), (0, c.jsxs)("div", {
                className: "counter_time_elements",
                children: [(0, c.jsxs)("div", {
                  className: "counter__element",
                  children: [(0, c.jsx)("div", {
                    style: M({}, y),
                    children: (0, Z.Bu)(r)
                  }), (0, c.jsx)("p", {
                    style: M({}, y),
                    children: "Hours"
                  })]
                }), (0, c.jsx)("span", {
                  className: "counter-seperator",
                  style: M({}, y),
                  children: ":"
                }), (0, c.jsxs)("div", {
                  className: "counter__element",
                  children: [(0, c.jsx)("div", {
                    style: M({}, y),
                    children: (0, Z.Bu)(n)
                  }), (0, c.jsx)("p", {
                    style: M({}, y),
                    children: "Min"
                  })]
                }), (0, c.jsx)("span", {
                  className: "counter-seperator",
                  style: M({}, y),
                  children: ":"
                }), (0, c.jsxs)("div", {
                  className: "counter__element",
                  children: [(0, c.jsx)("div", {
                    style: M({}, y),
                    children: (0, Z.Bu)(o)
                  }), (0, c.jsx)("p", {
                    style: M({}, y),
                    children: "Sec"
                  })]
                })]
              })]
            }) : (0, c.jsxs)(c.Fragment, {
              children: [(0, c.jsxs)("div", {
                className: "counter__element",
                children: [(0, c.jsx)("div", {
                  style: M({}, y),
                  children: (0, Z.Bu)(t)
                }), (0, c.jsx)("p", {
                  style: M({}, y),
                  children: "Days"
                })]
              }), (0, c.jsx)("span", {
                className: "counter-seperator",
                style: M({}, y),
                children: ":"
              }), (0, c.jsxs)("div", {
                className: "counter__element",
                children: [(0, c.jsx)("div", {
                  style: M({}, y),
                  children: (0, Z.Bu)(r)
                }), (0, c.jsx)("p", {
                  style: M({}, y),
                  children: "Hours"
                })]
              }), (0, c.jsx)("span", {
                className: "counter-seperator",
                style: M({}, y),
                children: ":"
              }), (0, c.jsxs)("div", {
                className: "counter__element",
                children: [(0, c.jsx)("div", {
                  style: M({}, y),
                  children: (0, Z.Bu)(n)
                }), (0, c.jsx)("p", {
                  style: M({}, y),
                  children: "Min"
                })]
              }), (0, c.jsx)("span", {
                className: "counter-seperator",
                style: M({}, y),
                children: ":"
              }), (0, c.jsxs)("div", {
                className: "counter__element",
                children: [(0, c.jsx)("div", {
                  style: M({}, y),
                  children: (0, Z.Bu)(o)
                }), (0, c.jsx)("p", {
                  style: M({}, y),
                  children: "Sec"
                })]
              })]
            })
          })
        },
        U = function(e) {
          e.showdays;
          var t = e.variant,
            r = void 0 === t ? "" : t,
            n = e.daysSeperate,
            o = void 0 !== n && n,
            s = e.daysLabel,
            a = void 0 === s ? "Days" : s,
            i = e.color,
            l = void 0 === i ? "#fff" : i,
            d = e.font,
            u = void 0 === d ? "" : d,
            h = e.completionText,
            p = void 0 === h ? "Congratulations!" : h,
            f = e.textStyles,
            m = void 0 === f ? {} : f,
            y = (0, I.Z)(e, F);
          return (0, c.jsx)("div", {
            className: "".concat(u),
            style: {
              color: l
            },
            children: (0, c.jsx)(Z.ZP, M(M({}, y), {}, {
              renderer: function(e) {
                return (0, c.jsx)(z, M({
                  variant: r,
                  daysSeperate: o,
                  daysLabel: a,
                  completionText: p,
                  textStyles: m
                }, e))
              }
            }))
          })
        },
        G = r(6354);

      function H(e, t) {
        var r = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var n = Object.getOwnPropertySymbols(e);
          t && (n = n.filter((function(t) {
            return Object.getOwnPropertyDescriptor(e, t).enumerable
          }))), r.push.apply(r, n)
        }
        return r
      }

      function V(e) {
        for (var t = 1; t < arguments.length; t++) {
          var r = null != arguments[t] ? arguments[t] : {};
          t % 2 ? H(Object(r), !0).forEach((function(t) {
            (0, o.Z)(e, t, r[t])
          })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : H(Object(r)).forEach((function(t) {
            Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(r, t))
          }))
        }
        return e
      }
      var W = function(e) {
        var t = e.event,
          r = e.showHeart,
          n = void 0 !== r && r,
          o = e.singlePhoto,
          s = void 0 !== o && o;
        return (0, c.jsxs)(k, {
          bgImage: t.bgUrl,
          font: t.nameFont,
          color: t.textColor,
          sound: t.bgmPath,
          event: t,
          children: [(0, c.jsxs)("div", {
            className: "text-center text-4xl overflow-hidden",
            style: V({}, t.textStyles),
            children: [(0, c.jsx)("h1", {
              children: t.bride
            }), (0, c.jsx)("h1", {
              className: "and",
              children: "&"
            }), (0, c.jsx)("h1", {
              children: t.groom
            }), (0, c.jsx)("p", {
              className: "text-sm",
              children: t.displayDate
            })]
          }), !n && (0, c.jsx)("div", {
            className: "flex space-x-4 mt-6",
            children: s ? (0, c.jsx)(L, {
              src: t.c_dp_name,
              size: "large"
            }) : (0, c.jsxs)(c.Fragment, {
              children: [(0, c.jsx)(L, {
                src: t.f_dp_name
              }), (0, c.jsx)(L, {
                src: t.s_dp_name
              })]
            })
          }), (0, c.jsxs)("div", {
            className: " text-2xl relative mt-6 ".concat(n ? "show-heart" : ""),
            children: [n && (0, c.jsx)("div", {
              className: "absolute h-full w-full  bg-no-repeat bg-contain bg-center animate-heartbeat ",
              style: {
                backgroundImage: n ? "url('/images/shapes/heart/".concat(t.bgShapeResource, ".png')") : null,
                opacity: t.stickerAlpha
              }
            }), (0, c.jsxs)("div", {
              className: "relative z-20  -top-4",
              children: [(0, c.jsx)(U, {
                date: t.eventDate,
                color: t.textColor,
                font: t.digitFont,
                completionText: t.congratsTxt,
                textStyles: t.textStyles
              }), (0, c.jsx)("p", {
                className: "text-sm  mt-4 text-center",
                style: V({}, t.textStyles),
                children: t.counterBottomText
              })]
            })]
          }), (0, c.jsx)(G.PK, {
            textStyles: t.textStyles
          })]
        })
      };

      function K(e, t) {
        var r = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var n = Object.getOwnPropertySymbols(e);
          t && (n = n.filter((function(t) {
            return Object.getOwnPropertyDescriptor(e, t).enumerable
          }))), r.push.apply(r, n)
        }
        return r
      }

      function Y(e) {
        for (var t = 1; t < arguments.length; t++) {
          var r = null != arguments[t] ? arguments[t] : {};
          t % 2 ? K(Object(r), !0).forEach((function(t) {
            (0, o.Z)(e, t, r[t])
          })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : K(Object(r)).forEach((function(t) {
            Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(r, t))
          }))
        }
        return e
      }
      var q = function(e) {
        var t = e.event,
          r = e.counterVariant,
          n = void 0 === r ? "" : r,
          o = e.enableCounterContainerBg,
          s = void 0 === o || o,
          a = e.daysSeperate,
          i = void 0 !== a && a,
          l = e.daysLabel,
          d = void 0 === l ? "Days" : l;
        return (0, c.jsxs)(k, {
          bgImage: t.bgUrl,
          font: t.nameFont,
          color: t.textColor,
          sound: t.bgmPath,
          event: t,
          children: [(0, c.jsxs)("div", {
            className: "text-center text-4xl",
            style: Y({}, t.textStyles),
            children: [(0, c.jsx)("h1", {
              children: t.bride
            }), (0, c.jsx)("h1", {
              className: "and",
              children: "&"
            }), (0, c.jsx)("h1", {
              children: t.groom
            }), (0, c.jsx)("p", {
              className: "text-sm",
              children: t.displayDate
            })]
          }), (0, c.jsx)("div", {
            className: " counter text-2xl mt-6",
            style: {
              backgroundColor: s ? "rgba(1,1,1,0.3)" : "transparent"
            },
            children: (0, c.jsx)(U, {
              date: t.eventDate,
              variant: n,
              daysSeperate: i,
              daysLabel: d,
              completionText: t.congratsTxt,
              color: t.textColor,
              font: t.digitFont,
              textStyles: t.textStyles
            })
          }), (0, c.jsx)("p", {
            className: "text-sm text-gray-300  text-center mt-6",
            style: Y({}, t.textStyles),
            children: t.counterBottomText
          }), (0, c.jsx)(G.PK, {
            textStyles: t.textStyles
          })]
        })
      };

      function X(e, t) {
        var r = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var n = Object.getOwnPropertySymbols(e);
          t && (n = n.filter((function(t) {
            return Object.getOwnPropertyDescriptor(e, t).enumerable
          }))), r.push.apply(r, n)
        }
        return r
      }

      function J(e) {
        for (var t = 1; t < arguments.length; t++) {
          var r = null != arguments[t] ? arguments[t] : {};
          t % 2 ? X(Object(r), !0).forEach((function(t) {
            (0, o.Z)(e, t, r[t])
          })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : X(Object(r)).forEach((function(t) {
            Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(r, t))
          }))
        }
        return e
      }
      var Q = function(e) {
        var t = e.event;
        return (0, c.jsx)(k, {
          bgImage: t.bgUrl,
          font: t.nameFont,
          color: t.textColor,
          padding: "p-0",
          sound: t.bgmPath,
          event: t,
          children: (0, c.jsxs)("div", {
            className: "flex flex-col h-full w-full overflow-hidden theme-elegant",
            children: [(0, c.jsx)("div", {
              className: "flex-grow"
            }), (0, c.jsxs)("div", {
              className: " w-full bg-white text-blue relative",
              children: [(0, c.jsx)("div", {
                className: "absolute w-full top-0 left-0 h-28 border-t-4 ",
                style: {
                  transform: "skewY(-7deg)",
                  background: "white",
                  borderColor: "".concat(t.textColor),
                  top: "-2.3rem"
                }
              }), (0, c.jsxs)("div", {
                className: "z-10 relative text-black py-4 bg-no-repeat ",
                style: {
                  position: "relative",
                  backgroundImage: 'url("/images/background/4.svg")',
                  backgroundSize: "100%",
                  backgroundPosition: "bottom"
                },
                children: [(0, c.jsx)("p", {
                  className: "text-center text-sm ",
                  children: "For the weeding of"
                }), (0, c.jsxs)("div", {
                  className: "text-center text-4xl mt-4",
                  style: J({
                    color: t.textColor
                  }, t.textStyles),
                  children: [(0, c.jsx)("h1", {
                    children: t.bride
                  }), (0, c.jsx)("h1", {
                    className: "and",
                    children: "&"
                  }), (0, c.jsx)("h1", {
                    children: t.groom
                  })]
                }), (0, c.jsx)("p", {
                  className: "text-sm text-center mt-4",
                  style: J({
                    color: t.textColor
                  }, t.textStyles),
                  children: t.displayDate
                }), (0, c.jsx)("div", {
                  className: " mx-auto  my-4 w-64",
                  children: (0, c.jsx)(U, {
                    date: t.eventDate,
                    color: "#030303",
                    font: t.digitFont,
                    completionText: t.congratsTxt
                  })
                })]
              })]
            })]
          })
        })
      };

      function $(e, t) {
        var r = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var n = Object.getOwnPropertySymbols(e);
          t && (n = n.filter((function(t) {
            return Object.getOwnPropertyDescriptor(e, t).enumerable
          }))), r.push.apply(r, n)
        }
        return r
      }

      function ee(e) {
        for (var t = 1; t < arguments.length; t++) {
          var r = null != arguments[t] ? arguments[t] : {};
          t % 2 ? $(Object(r), !0).forEach((function(t) {
            (0, o.Z)(e, t, r[t])
          })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : $(Object(r)).forEach((function(t) {
            Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(r, t))
          }))
        }
        return e
      }
      var te = function(e) {
        var t = e.event;
        return (0, c.jsx)(k, {
          bgImage: t.bgUrl,
          padding: "p-0",
          font: t.nameFont,
          color: t.textColor,
          sound: t.bgmPath,
          event: t,
          children: (0, c.jsx)("div", {
            className: " h-full w-full flex items-center justify-end theme-daystogo",
            children: (0, c.jsxs)("div", {
              className: "  relative ",
              style: {
                top: "14%"
              },
              children: [(0, c.jsx)("div", {
                children: (0, c.jsx)(U, {
                  date: t.eventDate,
                  daysSeperate: !0,
                  daysLabel: "Days to go",
                  color: "#030303",
                  font: t.digitFont,
                  textStyles: t.textStyles
                })
              }), (0, c.jsxs)("div", {
                className: "text-center text-3xl  mt-2 space-y-1 px-4",
                style: ee({}, t.textStyles),
                children: [(0, c.jsx)("h1", {
                  children: t.bride
                }), (0, c.jsx)("h1", {
                  className: "and",
                  children: "&"
                }), (0, c.jsx)("h1", {
                  children: t.groom
                })]
              }), (0, c.jsx)("p", {
                className: "text-center text-base text-black mt-2",
                style: ee({}, t.textStyles),
                children: t.counterBottomText
              }), (0, c.jsxs)("p", {
                className: "text-xs text-black text-center ",
                style: ee({}, t.textStyles),
                children: ["On ", t.displayDate]
              })]
            })
          })
        })
      };

      function re(e, t) {
        var r = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var n = Object.getOwnPropertySymbols(e);
          t && (n = n.filter((function(t) {
            return Object.getOwnPropertyDescriptor(e, t).enumerable
          }))), r.push.apply(r, n)
        }
        return r
      }

      function ne(e) {
        for (var t = 1; t < arguments.length; t++) {
          var r = null != arguments[t] ? arguments[t] : {};
          t % 2 ? re(Object(r), !0).forEach((function(t) {
            (0, o.Z)(e, t, r[t])
          })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : re(Object(r)).forEach((function(t) {
            Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(r, t))
          }))
        }
        return e
      }
      var oe = function(e) {
          var t = e.event;
          return (0, c.jsx)(k, {
            bgImage: t.bgUrl,
            bgFilter: "grayscale(100%)",
            font: t.nameFont,
            sound: t.bgmPath,
            event: t,
            children: (0, c.jsxs)("div", {
              className: "h-full w-full theme-balckandwhite",
              children: [(0, c.jsxs)("div", {
                className: "text-4xl  mt-4 space-y-2 ",
                style: ne({}, t.textStyles),
                children: [(0, c.jsx)("h1", {
                  children: t.bride
                }), (0, c.jsx)("h1", {
                  className: "ml-3 and",
                  children: "&"
                }), (0, c.jsx)("h1", {
                  children: t.groom
                })]
              }), (0, c.jsx)("p", {
                className: "date-txt",
                style: ne({}, t.textStyles),
                children: (0, c.jsxs)("span", {
                  children: ["Will marry on ", t.displayDate]
                })
              }), (0, c.jsx)("div", {
                children: (0, c.jsx)(U, {
                  date: t.eventDate,
                  color: t.counterTextColor,
                  font: t.digitFont,
                  completionText: t.congratsTxt,
                  textStyles: t.textStyles
                })
              }), (0, c.jsx)("p", {
                className: "mt-4",
                style: ne({}, t.textStyles),
                children: (0, c.jsx)("span", {
                  className: "meta-text",
                  children: t.counterBottomText
                })
              }), (0, c.jsx)(G.PK, {
                textStyles: ne(ne({}, t.textStyles), {}, {
                  textAlign: "left",
                  padding: 0
                })
              })]
            })
          })
        },
        se = r(9669),
        ae = r.n(se),
        ce = r(8575),
        ie = r(9878),
        le = ae().create({
          baseURL: u.Z.APP_API_BASE
        }),
        de = function(e) {
          return le.get("/".concat(e, ".json")).then((function(e) {
            return e.data
          }))
        };
      var ue = r(5503),
        he = (r(332), (0 === ue.Z.apps.length ? ue.Z.initializeApp(u.Z.firebaseConfig) : ue.Z.app()).storage()),
        pe = "",
        fe = "",
        me = {
          basePath: "",
          token: "",
          append: "",
          commonPath: "",
          key: ""
        };

      function ye(e) {
        var t = (0, ce.ZP)(e, (function(e) {
            return function(e) {
              return he.ref("".concat(u.Z.storagePath.rootPath, "/").concat(e, "/data.json")).getDownloadURL().then((function(t) {
                var r = new URL(t);
                fe = "".concat(r.origin).concat(r.pathname.replace("data.json", "")), me.basePath = fe, me.append = r.search, me.key = e;
                var n = new URLSearchParams(r.search);
                return pe = n.get("token"), me.token = pe, me.commonPath = fe.replace(e, u.Z.storagePath.commonKey), ae().get(t)
              })).then((function(e) {
                var t = e.data,
                  r = void 0 === t ? null : t,
                  n = (0, ie.l)(r, me);
                return Promise.resolve(n)
              })).catch((function(e) {
                return u.Z.API.ERROR_LOG && console.log("API Request Error >", e), e && e.code && "storage/object-not-found" === e.code || e && e.response && 404 === e.response.status ? Promise.reject(new Error(u.Z.API.errors[404])) : Promise.reject(e)
              }))
            }(e)
          })),
          r = t.data,
          n = t.error;
        return {
          error: n,
          loading: !r && !n,
          data: r,
          mutate: t.mutate
        }
      }
      var xe = {
        layoutTen: {
          id: "Dualphoto",
          Theme: W,
          defaultProps: {}
        },
        layoutEleven: {
          id: "Singlephoto",
          Theme: W,
          defaultProps: {
            singlePhoto: !0
          }
        },
        layoutOne: {
          id: "Heart",
          Theme: W,
          defaultProps: {
            showHeart: !0
          }
        },
        layoutFive: {
          id: "Glassy",
          Theme: q,
          defaultProps: {}
        },
        layoutSix: {
          id: "Elegant",
          Theme: Q,
          defaultProps: {}
        },
        layoutTwo: {
          id: "Daystogo",
          Theme: te,
          defaultProps: {}
        },
        layoutThree: {
          id: "blackandwhite",
          Theme: oe,
          defaultProps: {}
        },
        layoutEight: {
          id: "daysleft",
          Theme: q,
          defaultProps: {
            counterVariant: "daysleft",
            enableCounterContainerBg: !1,
            daysSeperate: !0,
            daysLabel: "Days left"
          }
        },
        layoutSeven: {
          id: "singleblock",
          Theme: q,
          defaultProps: {
            counterVariant: "singleblock",
            enableCounterContainerBg: !1
          }
        },
        layoutFour: {
          id: "whiteblocks",
          Theme: q,
          defaultProps: {
            counterVariant: "whiteblock",
            enableCounterContainerBg: !1
          }
        }
      };

      function be(e, t) {
        var r = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var n = Object.getOwnPropertySymbols(e);
          t && (n = n.filter((function(t) {
            return Object.getOwnPropertyDescriptor(e, t).enumerable
          }))), r.push.apply(r, n)
        }
        return r
      }
      var ge = function(e) {
          var t = e.dataId,
            r = void 0 === t ? null : t,
            o = e.live,
            s = void 0 !== o && o ? ye(r) : function(e) {
              var t = (0, ce.ZP)(e, de),
                r = t.data,
                n = t.error,
                o = t.mutate;
              return {
                error: n,
                loading: !r && !n,
                data: r ? (0, ie.l)(r, {
                  key: e
                }) : r,
                mutate: o
              }
            }(r),
            a = s.data,
            i = s.error,
            l = s.loading,
            d = (0, n.useState)(!0),
            u = d[0],
            h = d[1];

          function p() {
            h(!1)
          }
          return (0, n.useEffect)((function() {
            a && "" == a.bgUrl && h(!1)
          }), [a]), a ? (0, c.jsxs)("div", {
            className: "h-full",
            children: [a.bgUrl && (0, c.jsx)("img", {
              className: "h-0",
              src: a.bgUrl,
              onLoad: p,
              onError: p
            }), u ? (0, c.jsx)(ve, {}) : (0, c.jsx)(je, {
              themeId: a.layoutId,
              event: a
            })]
          }) : l ? (0, c.jsx)(ve, {}) : (0, c.jsx)(we, {
            error: i
          })
        },
        je = function(e) {
          var t = e.themeId,
            r = void 0 === t ? "heart" : t,
            n = e.event,
            s = xe[r] || xe.heart;
          return (0, c.jsx)(s.Theme, function(e) {
            for (var t = 1; t < arguments.length; t++) {
              var r = null != arguments[t] ? arguments[t] : {};
              t % 2 ? be(Object(r), !0).forEach((function(t) {
                (0, o.Z)(e, t, r[t])
              })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : be(Object(r)).forEach((function(t) {
                Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(r, t))
              }))
            }
            return e
          }({
            event: n
          }, s.defaultProps))
        },
        ve = function() {
          return (0, c.jsx)("div", {
            className: "centerlize",
            children: (0, c.jsx)("div", {
              className: "text-center",
              children: (0, c.jsx)(a.Z, {
                type: "Hearts",
                color: u.Z.META_THEME_COLOR,
                height: 100,
                width: 100
              })
            })
          })
        },
        we = function(e) {
          var t = e.error;
          return (0, c.jsxs)("div", {
            className: "centerlize text-white ",
            children: [(0, c.jsxs)("h1", {
              className: "text-lg font-mono",
              children: [t.message, " "]
            }), (0, c.jsx)("div", {
              children: (0, c.jsx)(G.Hr, {})
            })]
          })
        },
        Oe = r(926),
        Pe = r.n(Oe),
        _e = function() {
          return (0, c.jsx)("div", {
            className: "absolute top-0 w-0 h-0 overflow-hidden",
            style: {
              zIndex: -10
            },
            children: Object.keys(Pe().theme.extend.fontFamily).map((function(e) {
              return (0, c.jsx)("span", {
                id: e,
                className: "font-".concat(e),
                children: e
              }, e)
            }))
          })
        }
    },
    5669: function(e, t) {
      "use strict";
      t.Z = {
        APP_NAME: "Wedding Countdown",
        APP_DESCRIPTION: "A Wedding Countdown Timer App",
        APP_URL: "https://weddingcountdown.app",
        APP_API_BASE: "/api",
        GOOGLE_GTAG_ID: "G-8918T90C54",
        SEO_TITLE: "Wedding Countdown - Countdown Timer App For Wedding",
        SEO_DESCRIPTION: "Wedding countdown is a wedding countdown app for Android. This timer app counts down days until your wedding date and at the same time allows you to design the wedding countdown page as you like",
        SEO_IMAGE: "https://i.imgur.com/lVtXLVl.jpg",
        META_THEME_COLOR: "#fc575e",
        AD_ENABLED: !0,
        AD_PLACEHOLDER_HEIGHT: "90px",
        AD_CLIENT: "ca-pub-1834819461294413",
        AD_SLOT: "7370871051",
        AD_FORMAT: "auto",
        AD_DEBUG_MODE: !1,
        EVNET_PAGE_TITLE_SUFIX: "Wedding Countdown",
        API: {
          ERROR_LOG: !0,
          errors: {
            404: "Page not found :("
          }
        },
        storagePath: {
          rootPath: "web",
          commonKey: "common"
        },
        mediaDefaultFileNames: {
          backgroundImage: "bg.jpg",
          backgroundMusic: "bgm.mp3",
          firstPersonDp: "dp_fp.jpg",
          secondPersonDp: "dp_sp.jpg",
          commonDp: "dp_common.jpg"
        },
        firebaseConfig: {
          apiKey: "AIzaSyAVFD5cdzLmdkfmztu6_5Aj0ymSYPHQ2rY",
          authDomain: "wedding-day-counter.firebaseapp.com",
          databaseURL: "https://wedding-day-counter.firebaseio.com",
          projectId: "wedding-day-counter",
          storageBucket: "wedding-day-counter.appspot.com",
          messagingSenderId: "407258154325",
          appId: "1:407258154325:web:681f4296a44a48324f1bdc",
          measurementId: "G-Y3DYTVJNGN"
        },
        firebaseStaticBasePath: "https://firebasestorage.googleapis.com/"
      }
    },
    9878: function(e, t, r) {
      "use strict";
      r.d(t, {
        l: function() {
          return u
        }
      });
      var n = r(4942),
        o = r(5853),
        s = r(5460);

      function a(e, t) {
        return (0, o.Z)("".concat(e, " ").concat(t), "M/d/yyyy hh:mm a", new Date)
      }

      function c(e) {
        return (0, s.Z)(e, "iiii d MMMM yyyy")
      }
      var i = r(5669);

      function l(e, t) {
        var r = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var n = Object.getOwnPropertySymbols(e);
          t && (n = n.filter((function(t) {
            return Object.getOwnPropertyDescriptor(e, t).enumerable
          }))), r.push.apply(r, n)
        }
        return r
      }

      function d(e) {
        for (var t = 1; t < arguments.length; t++) {
          var r = null != arguments[t] ? arguments[t] : {};
          t % 2 ? l(Object(r), !0).forEach((function(t) {
            (0, n.Z)(e, t, r[t])
          })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : l(Object(r)).forEach((function(t) {
            Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(r, t))
          }))
        }
        return e
      }

      function u(e) {
        var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null,
          r = d({}, e);
        if (r.id = t.key, r.eventDate = a(e.eventDate, e.eventTime), r.displayDate = c(r.eventDate), r.nameFont = "font-wdc_".concat(e.nameFont).toLocaleLowerCase(), r.digitFont = e.digitFont ? "font-wdc_".concat(e.digitFont).toLocaleLowerCase() : "font-wdc_".concat(e.nameFont).toLocaleLowerCase(), t) {
          var n = i.Z.mediaDefaultFileNames;
          r.bgUrl = r.bgUrl ? "".concat(t.basePath).concat(n.backgroundImage).concat(t.append) : "".concat(t.commonPath).concat(n.backgroundImage).concat(t.append), r.bgmPath = r.bgmPath ? "".concat(t.basePath).concat(n.backgroundMusic).concat(t.append) : "".concat(t.commonPath).concat(n.backgroundMusic).concat(t.append), r.f_dp_name = "".concat(r.f_dp_name ? t.basePath : t.commonPath).concat(n.firstPersonDp).concat(t.append), r.s_dp_name = "".concat(r.s_dp_name ? t.basePath : t.commonPath).concat(n.secondPersonDp).concat(t.append), r.c_dp_name = "".concat(r.c_dp_name ? t.basePath : t.commonPath).concat(n.commonDp).concat(t.append)
        }
        return r.bgBlur = e.bgBlur ? p(e.bgBlur, 25) : "0px", r.stickerAlpha = e.stickerAlpha ? h(e.stickerAlpha, 255) : 1, r.bgFilterColor = e.bgFilterColor ? e.bgFilterColor : "rgb(0,0,0)", r.bgFilterPr = e.bgFilterPr ? h(e.bgFilterPr, 100) : .3, r.textStyles = void 0 === e.textColorAlpha ? {
          opacity: 1
        } : {
          opacity: h(e.textColorAlpha, 255)
        }, r
      }

      function h(e, t) {
        return t ? e / t : 0
      }

      function p(e, t) {
        return t ? "".concat(e / t * 25, "px") : "0px"
      }
    },
    926: function(e, t, r) {
      e.exports = {
        purge: ["./src/pages/**/*.{js,ts,jsx,tsx}", "./src/components/**/*.{js,ts,jsx,tsx}"],
        darkMode: !1,
        theme: {
          extend: {
            fontFamily: {
              wdc_aclonica: ["Aclonica"],
              wdc_bold: ["bold"],
              wdc_copse: ["Copse"],
              wdc_courgette: ["Courgette"],
              wdc_greatvibes: ["GreatVibes"],
              wdc_kanit: ["Kanit"],
              wdc_lora: ["Lora"],
              wdc_loveletters: ["loveletters"],
              wdc_merienda: ["Merienda"],
              wdc_niconne: ["Niconne"],
              wdc_norican: ["Norican"],
              wdc_novaround: ["NovaRound"],
              wdc_playball: ["Playball"],
              wdc_reemkufi: ["ReemKufi"],
              wdc_sacramento: ["Sacramento"]
            }
          }
        },
        variants: {
          extend: {
            borderRadius: ["hover", "focus", "first", "last"]
          }
        },
        plugins: [r(4863)]
      }
    }
  }
]);
