'use strict'
;(self.webpackChunkboilerplate_apps_router =
  self.webpackChunkboilerplate_apps_router || []).push([
  [112],
  {
    './src/components/main/stories.tsx': (
      __unused_webpack_module,
      __webpack_exports__,
      __webpack_require__
    ) => {
      __webpack_require__.r(__webpack_exports__),
        __webpack_require__.d(__webpack_exports__, {
          Basic: () => Basic,
          Default: () => Default,
          default: () => stories
        })
      var jsx_runtime = __webpack_require__(
          './node_modules/next/dist/compiled/react/jsx-runtime.js'
        ),
        styled_components_browser_esm = __webpack_require__(
          './node_modules/styled-components/dist/styled-components.browser.esm.js'
        )
      let t,
        t1,
        t2,
        t3,
        t4,
        _ = (t) => t
      const Wrapper = styled_components_browser_esm.Ay.main(
          t ||
            (t = _`
  background-color: #06092b;
  color: #fff;
  width: 100%;
  height: 100%;
  padding: 3rem;
  text-align: center;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`)
        ),
        Logo = styled_components_browser_esm.Ay.img(
          t1 ||
            (t1 = _`
  width: 25rem;
  margin-bottom: 2rem;
`)
        ),
        Title = styled_components_browser_esm.Ay.h1(
          t2 ||
            (t2 = _`
  font-size: 2.5rem;
`)
        ),
        Description = styled_components_browser_esm.Ay.h2(
          t3 ||
            (t3 = _`
  font-size: 2rem;
  font-weight: 400;
`)
        ),
        Illustration = styled_components_browser_esm.Ay.img(
          t4 ||
            (t4 = _`
  margin-top: 3rem;
  width: min(30rem, 100%);
`)
        ),
        Main = ({
          title = 'React Avançado',
          description = 'TypeScript, ReactJS, NextJS e Styled Components'
        }) =>
          (0, jsx_runtime.jsxs)(Wrapper, {
            children: [
              (0, jsx_runtime.jsx)(Logo, {
                src: '/img/logo.svg',
                alt: 'Imagem de um átomo e React Avançado escrito ao lado.'
              }),
              (0, jsx_runtime.jsx)(Title, { children: title }),
              (0, jsx_runtime.jsx)(Description, { children: description }),
              (0, jsx_runtime.jsx)(Illustration, {
                src: '/img/hero-illustration.svg',
                alt: 'Um desenvolvedor de frente para uma tela com código.'
              })
            ]
          }),
        main = Main
      Main.__docgenInfo = {
        description: '',
        methods: [],
        displayName: 'Main',
        props: {
          title: {
            defaultValue: { value: "'React Avançado'", computed: !1 },
            required: !1
          },
          description: {
            defaultValue: {
              value: "'TypeScript, ReactJS, NextJS e Styled Components'",
              computed: !1
            },
            required: !1
          }
        }
      }
      const stories = {
          title: 'Main',
          component: main,
          parameters: { layout: 'fullscreen' }
        },
        Default = {},
        Basic = {
          args: { title: 'title basic', description: 'description basic' }
        }
    }
  }
])
//# sourceMappingURL=main-stories.b1d35033.iframe.bundle.js.map
