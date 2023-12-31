"use strict";
(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [553],
  {
    81353: function (e, i, a) {
      a.d(i, {
        E: function () {
          return s;
        },
      });
      var o = a(10990),
        n = a(25317);
      function t(e, i, a) {
        return (
          i in e
            ? Object.defineProperty(e, i, {
                value: a,
                enumerable: !0,
                configurable: !0,
                writable: !0,
              })
            : (e[i] = a),
          e
        );
      }
      function r(e) {
        for (var i = 1; i < arguments.length; i++) {
          var a = null != arguments[i] ? arguments[i] : {},
            o = Object.keys(a);
          "function" === typeof Object.getOwnPropertySymbols &&
            (o = o.concat(
              Object.getOwnPropertySymbols(a).filter(function (e) {
                return Object.getOwnPropertyDescriptor(a, e).enumerable;
              })
            )),
            o.forEach(function (i) {
              t(e, i, a[i]);
            });
        }
        return e;
      }
      var s = function (e, i, a) {
        return o.ZP.fromTo(
          e,
          r({ opacity: 0 }, i),
          r({ opacity: 1 }, a, { stagger: 0.2, ease: n.Aq.easeOut })
        );
      };
    },
    25542: function (e, i, a) {
      var o = a(85893),
        n = (a(67294), a(82010));
      i.Z = function (e) {
        var i = e.children,
          a = e.type,
          t = e.onClick,
          r = e.classes,
          s = (0, n.F)().theme;
        return "primary" === a
          ? (0, o.jsx)("button", {
              onClick: t,
              type: "button",
              className:
                "font-bold text-lg tablet:text-lg p-1 laptop:p-2 m-1 laptop:m-2 rounded-lg cursor-none "
                  .concat(
                    "dark" === s
                      ? "bg-white text-black"
                      : "bg-black text-white",
                    "  transition-all duration-300 ease-out first:ml-0 hover:scale-105 active:scale-100 link "
                  )
                  .concat(r),
              children: i,
            })
          : (0, o.jsx)("button", {
              onClick: t,
              type: "button",
              className:
                "font-bold cursor-none text-lg tablet:text-lg p-1 laptop:p-2 m-1 laptop:m-2 rounded-lg flex items-center transition-all ease-out duration-300 "
                  .concat(
                    "dark" === s
                      ? "hover:bg-slate-600 text-white"
                      : "hover:bg-slate-100",
                    " hover:scale-105 active:scale-100  tablet:first:ml-0 "
                  )
                  .concat(r, " link"),
              children: i,
            });
      };
    },
    29617: function (e, i, a) {
      var o = a(85893),
        n = a(67294),
        t = a(93462),
        r = (a(40358), a(82010));
      i.Z = function () {
        var e = (0, r.F)(),
          i = (0, n.useState)(),
          a = i[0],
          s = i[1];
        return (
          (0, n.useEffect)(function () {
            s(!0);
          }, []),
          (0, o.jsx)(o.Fragment, {
            children:
              a &&
              (0, o.jsx)(t.Z, {
                targets: [".link", "h1"],
                customClass: "custom-cursor",
                dimensions: 30,
                fill:
                  "dark" === e.theme
                    ? "#fff"
                    : "light" === e.theme
                    ? "#000"
                    : void 0,
                smoothness: { movement: 0.25, scale: 0.1, opacity: 1 },
                targetOpacity: 0.5,
                targetScale: 2,
              }),
          })
        );
      };
    },
    42665: function (e, i, a) {
      var o = a(85893),
        n = a(2271),
        t = a(82010),
        r = a(11163),
        s = a(67294),
        c = a(25542),
        l = a(69954);
      i.Z = function (e) {
        var i = e.handleWorkScroll,
          a = e.handleAboutScroll,
          m = e.isBlog,
          d = e.handleHomeScroll,
          u = e.handleTechScroll,
          p = (0, r.useRouter)(),
          h = (0, t.F)(),
          g = h.theme,
          v = h.setTheme,
          b = (0, s.useState)(!1),
          f = b[0],
          k = b[1],
          x = l.name,
          j = (l.showBlog, l.showResume);
        return (
          (0, s.useEffect)(function () {
            k(!0);
          }, []),
          (0, o.jsxs)(o.Fragment, {
            children: [
              (0, o.jsx)(n.J, {
                className: "block tablet:hidden mt-5",
                children: function (e) {
                  var t = e.open;
                  return (0, o.jsxs)(o.Fragment, {
                    children: [
                      (0, o.jsxs)("div", {
                        className:
                          "flex items-center justify-between p-2 laptop:p-0",
                        children: [
                          (0, o.jsx)("h1", {
                            className: "font-medium p-2 laptop:p-0 link",
                            children: x,
                          }),
                          (0, o.jsxs)("div", {
                            className: "flex items-center",
                            children: [
                              l.darkMode &&
                                (0, o.jsx)(c.Z, {
                                  onClick: function () {
                                    return v("dark" === g ? "light" : "dark");
                                  },
                                  children: (0, o.jsx)("img", {
                                    className: "h-6",
                                    src: "./images/".concat(
                                      "dark" === g ? "moon.svg" : "sun.svg"
                                    ),
                                  }),
                                }),
                              (0, o.jsx)(n.J.Button, {
                                children: (0, o.jsx)("img", {
                                  className: "h-5",
                                  src: "./images/".concat(
                                    t
                                      ? "light" === g
                                        ? "cancel.svg"
                                        : "cancel-white.svg"
                                      : "dark" === g
                                      ? "menu-white.svg"
                                      : "menu.svg"
                                  ),
                                }),
                              }),
                            ],
                          }),
                        ],
                      }),
                      (0, o.jsx)(n.J.Panel, {
                        className: "absolute right-0 z-10 w-11/12 p-4 ".concat(
                          "dark" === g ? "bg-slate-800" : "bg-slate-100",
                          " shadow-md rounded-md"
                        ),
                        children: m
                          ? (0, o.jsxs)("div", {
                              className: "grid grid-cols-1",
                              children: [
                                (0, o.jsx)(c.Z, {
                                  onClick: function () {
                                    return p.push("./");
                                  },
                                  classes: "first:ml-1",
                                  children: "Home",
                                }),
                                j &&
                                  (0, o.jsx)(c.Z, {
                                    onClick: function () {
                                      return p.push("/resume");
                                    },
                                    classes: "first:ml-1",
                                    children: "Resume",
                                  }),
                                (0, o.jsx)(c.Z, {
                                  onClick: function () {
                                    return window.open(
                                      "mailto:ariel_robinson_moreira@hotmail.com"
                                    );
                                  },
                                  children: "Contact",
                                }),
                              ],
                            })
                          : (0, o.jsxs)("div", {
                              className: "grid grid-cols-1",
                              children: [
                                (0, o.jsx)(c.Z, {
                                  onClick: i,
                                  children: "Meus projetos",
                                }),
                                (0, o.jsx)(c.Z, {
                                  onClick: u,
                                  children: "Tecnologias",
                                }),
                                (0, o.jsx)(c.Z, {
                                  onClick: a,
                                  children: "Sobre mim",
                                }),
                                j &&
                                  (0, o.jsx)(c.Z, {
                                    onClick: function () {
                                        return p.push("/Next.JS-Static-Portfolio/resume");
                                      },
                                    children: "Currículo",
                                  }),
                                (0, o.jsx)(c.Z, {
                                  onClick: function () {
                                    return window.open(
                                      "mailto:ariel_robinson_moreira@hotmail.com"
                                    );
                                  },
                                  children: "Contact",
                                }),
                              ],
                            }),
                      }),
                    ],
                  });
                },
              }),
              (0, o.jsxs)("div", {
                className:
                  "mb-10 mt-10 hidden flex-row items-center justify-between sticky ".concat(
                    "light" === g && "",
                    " dark:text-white top-0 z-10 tablet:flex"
                  ),
                children: [
                  (0, o.jsx)(c.Z, { onClick: d, children: "In\xedcio" }),
                  m
                    ? (0, o.jsxs)("div", {
                        className: "flex",
                        children: [
                          (0, o.jsx)(c.Z, {
                            onClick: function () {
                              return p.push("/");
                            },
                            children: "Home",
                          }),
                          j &&
                            (0, o.jsx)(c.Z, {
                              onClick: function () {
                                return p.push("/resume");
                              },
                              classes: "first:ml-1",
                              children: "Resume",
                            }),
                          (0, o.jsx)(c.Z, {
                            onClick: function () {
                              return window.open(
                                "mailto:ariel_robinson_moreira@hotmail.com"
                              );
                            },
                            children: "Contact",
                          }),
                          f &&
                            g &&
                            l.darkMode &&
                            (0, o.jsx)(c.Z, {
                              onClick: function () {
                                return v("dark" === g ? "light" : "dark");
                              },
                              children: (0, o.jsx)("img", {
                                className: "h-6",
                                src: "./images/".concat(
                                  "dark" === g ? "moon.svg" : "sun.svg"
                                ),
                              }),
                            }),
                        ],
                      })
                    : (0, o.jsxs)("div", {
                        className: "flex",
                        children: [
                          (0, o.jsx)(c.Z, {
                            onClick: i,
                            children: "Meus projetos",
                          }),
                          (0, o.jsx)(c.Z, {
                            onClick: u,
                            children: "Tecnologias",
                          }),
                          (0, o.jsx)(c.Z, {
                            onClick: a,
                            children: "Sobre mim",
                          }),
                          j &&
                            (0, o.jsx)(c.Z, {
                              onClick: function () {
                                return p.push("/Next.JS-Static-Portfolio/resume");
                              },
                              classes: "first:ml-1",
                              children: "Curr\xedculo",
                            }),
                          (0, o.jsx)(c.Z, {
                            onClick: function () {
                              return window.open(
                                "mailto:ariel_robinson_moreira@hotmail.com"
                              );
                            },
                            children: "Contato",
                          }),
                          f &&
                            g &&
                            l.darkMode &&
                            (0, o.jsx)(c.Z, {
                              onClick: function () {
                                return v("dark" === g ? "light" : "dark");
                              },
                              children: (0, o.jsx)("img", {
                                className: "h-6",
                                src: "./images/".concat(
                                  "dark" === g ? "moon.svg" : "sun.svg"
                                ),
                              }),
                            }),
                        ],
                      }),
                ],
              }),
            ],
          })
        );
      };
    },
    20558: function (e, i, a) {
      a.d(i, {
        KO: function () {
          return n;
        },
        LI: function () {
          return o;
        },
      });
      var o = a(67294).useLayoutEffect;
      function n(e) {
        if (e) {
          var i = new Date(e);
          return i.getFullYear() + "-" + (i.getMonth() + 1) + "-" + i.getDate();
        }
      }
    },
    69954: function (e) {
      e.exports = JSON.parse(
        '{"name":"Ariel","headerTaglineOne":"ARIEL ","headerTaglineTwo":"Desenvolvedor","headerTaglineThree":"WEB","showBlog":true,"darkMode":true,"showResume":true,"socials":[{"id":"1","title":"Github","link":"https://github.com/chefia777"},{"id":"2","title":"LinkedIn","link":"https://www.linkedin.com/in/ariel-robinson-moreira/"},{"id":"5","title":"Email","link":"mailto:ariel_robinson_moreira@hotmail.com"}],"projects":[{"id":"1","title":"Who\'s that Pokem\xf3n?","description":"Web Design, API","imageSrc":"./images/poke1.png","imageSrc2":"./images/poke2.png","url":"https://chefia777.github.io/Who-s-that-Pokemon-/"},{"id":"2","title":"Other projects!","description":"Check out all of my projects","imageSrc":"./images/proj2.png","imageSrc2":"./images/proj2.png","url":"https://github.com/chefia777"}],"technologies":[{"id":"1","title":"HTML5","description":"Web Design, API","imageSrc":"./images/html.png","imageSrc2":"./images/html.png","url":"https://developer.mozilla.org/pt-BR/docs/Web/HTML"},{"id":"2","title":"Javascript","description":"Check out all of my projects","imageSrc":"./images/javascript.png","imageSrc2":"./images/javascript.png","url":"https://developer.mozilla.org/pt-BR/docs/Web/JavaScript"},{"id":"1","title":"CSS3","description":"Web Design, API","imageSrc":"./images/css.png","imageSrc2":"./images/css.png","url":"https://developer.mozilla.org/pt-BR/docs/Web/CSS"},{"id":"1","title":"React","description":"Web Design, API","imageSrc":"./images/react.png","imageSrc2":"./images/react.png","url":"https://react.dev/"},{"id":"1","title":"Next.JS","description":"Web Design, API","imageSrc":"./images/next.png","imageSrc2":"./images/next.png","url":"https://nextjs.org/"},{"id":"1","title":"Python","description":"Web Design, API","imageSrc":"./images/python.png","imageSrc2":"./images/python.png","url":"https://www.python.org/"},{"id":"1","title":"Tailwind CSS","description":"Web Design, API","imageSrc":"./images/tailwind.png","imageSrc2":"./images/tailwind.png","url":"https://tailwindcss.com/"}],"aboutpara":"Ol\xe1! Eu sou o Ariel, um entusiasta apaixonado por tecnologia e inova\xe7\xe3o. Meu foco principal est\xe1 na \xe1rea de desenvolvimento web e programa\xe7\xe3o. Com habilidades s\xf3lidas em HTML, CSS e JavaScript, posso criar interfaces e experi\xeancias de usu\xe1rio envolventes e responsivas. Al\xe9m disso, tenho experi\xeancia em trabalhar com a biblioteca React e no framework Next.js, o que me permite desenvolver aplica\xe7\xf5es web modernas e eficientes. Tamb\xe9m tenho conhecimentos em Python. Meu objetivo \xe9 sempre estar atualizado com as \xfaltimas tend\xeancias e melhores pr\xe1ticas de desenvolvimento, buscando constantemente aprender e aprimorar minhas habilidades. Este portf\xf3lio \xe9 uma amostra do meu trabalho e dos projetos que estive envolvido. Aqui, voc\xea encontrar\xe1 demonstra\xe7\xf5es dos meus conhecimentos em HTML, CSS, JavaScript, React, Next.js e Python. Se voc\xea est\xe1 em busca de um desenvolvedor comprometido, criativo e entusiasmado, estou pronto para contribuir com o sucesso do seu projeto. Vamos trabalhar juntos para criar solu\xe7\xf5es inovadoras e impactantes. Agrade\xe7o por visitar o meu portf\xf3lio. Caso tenha alguma d\xfavida ou queira entrar em contato, sinta-se \xe0 vontade para me enviar uma mensagem. Estou animado para embarcar em novos desafios e ser parte do seu time.","resume":{"fullName":"Ariel Robinson Moreira","tagline":"Engenheiro Mec\xe2nico & Desenvolvedor Web","description":"Ol\xe1! Meu nome \xe9 Ariel Robinson Moreira e sou um profissional apaixonado por engenharia mec\xe2nica e desenvolvimento web. Meu objetivo \xe9 unir minha expertise nessas \xe1reas para criar solu\xe7\xf5es inovadoras e impactantes.","experiences":[{"id":"1","dates":"Fevereiro 2021 - Julho 2022","type":"Est\xe1gio","position":"Estagi\xe1rio de Engenharia na Braskem","bullets":"Contribu\xed para projetos de engenharia, Ganhei o pr\xeamio Destaque na Braskem em reconhecimento ao meu trabalho"}],"education":{"universityName":"UNISINOS","universityName2":"Est\xe1cio","universityDate":"Formado em Engenharia Mec\xe2nica","universityDate2":"Graduando em An\xe1lise e Desenvolvimento de Sistemas","universityPara":"Possuo forma\xe7\xe3o em Engenharia Mec\xe2nica pela UNISINOS, onde adquiri uma base s\xf3lida em princ\xedpios de engenharia e habilidades de resolu\xe7\xe3o de problemas. Durante minha trajet\xf3ria acad\xeamica, descobri minha paix\xe3o pelo desenvolvimento web e decidi complementar minha forma\xe7\xe3o com estudos em An\xe1lise e Desenvolvimento de Sistemas.","universityPara2":"Atualmente, estou cursando An\xe1lise e Desenvolvimento de Sistemas, onde tenho a oportunidade de aprimorar minhas habilidades em programa\xe7\xe3o, banco de dados e desenvolvimento de software. Meu interesse nessa \xe1rea surgiu enquanto eu me graduava em Engenharia Mec\xe2nica e percebi que a tecnologia tinha um papel crucial em diversas ind\xfastrias e campos de atua\xe7\xe3o."},"languages":["Javascript","HTML5","CSS","Python"],"frameworks":["React","Typescript","NodeJs","Next.js"],"others":["Tailwind CSS","SASS","SCSS","Bootstrap"]}}'
      );
    },
  },
]);
