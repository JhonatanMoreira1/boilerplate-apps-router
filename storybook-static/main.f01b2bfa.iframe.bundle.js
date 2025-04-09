;(self.webpackChunkboilerplate_apps_router =
  self.webpackChunkboilerplate_apps_router || []).push([
  [792],
  {
    './.storybook/preview.tsx': (
      __unused_webpack_module,
      __webpack_exports__,
      __webpack_require__
    ) => {
      'use strict'
      __webpack_require__.r(__webpack_exports__),
        __webpack_require__.d(__webpack_exports__, {
          decorators: () => decorators
        })
      var jsx_runtime = __webpack_require__(
        './node_modules/next/dist/compiled/react/jsx-runtime.js'
      )
      __webpack_require__('./node_modules/next/dist/compiled/react/index.js')
      let t
      const global = (0,
        __webpack_require__(
          './node_modules/styled-components/dist/styled-components.browser.esm.js'
        ).DU)(
          t ||
            (t = ((t) => t)`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
  
  html {
    font-size: 62.5%;
  }
  
  html, body, #__next {
    height: 100%;
  }
  
  body {
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, 
      Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
  }
`)
        ),
        decorators = [
          (Story) =>
            (0, jsx_runtime.jsxs)(jsx_runtime.Fragment, {
              children: [
                (0, jsx_runtime.jsx)(global, {}),
                (0, jsx_runtime.jsx)(Story, {})
              ]
            })
        ]
    },
    './node_modules/@storybook/instrumenter/dist sync recursive': (module) => {
      function webpackEmptyContext(req) {
        var e = new Error("Cannot find module '" + req + "'")
        throw ((e.code = 'MODULE_NOT_FOUND'), e)
      }
      ;(webpackEmptyContext.keys = () => []),
        (webpackEmptyContext.resolve = webpackEmptyContext),
        (webpackEmptyContext.id =
          './node_modules/@storybook/instrumenter/dist sync recursive'),
        (module.exports = webpackEmptyContext)
    },
    './node_modules/@storybook/nextjs/dist sync recursive': (module) => {
      function webpackEmptyContext(req) {
        var e = new Error("Cannot find module '" + req + "'")
        throw ((e.code = 'MODULE_NOT_FOUND'), e)
      }
      ;(webpackEmptyContext.keys = () => []),
        (webpackEmptyContext.resolve = webpackEmptyContext),
        (webpackEmptyContext.id =
          './node_modules/@storybook/nextjs/dist sync recursive'),
        (module.exports = webpackEmptyContext)
    },
    './node_modules/@storybook/test/dist sync recursive': (module) => {
      function webpackEmptyContext(req) {
        var e = new Error("Cannot find module '" + req + "'")
        throw ((e.code = 'MODULE_NOT_FOUND'), e)
      }
      ;(webpackEmptyContext.keys = () => []),
        (webpackEmptyContext.resolve = webpackEmptyContext),
        (webpackEmptyContext.id =
          './node_modules/@storybook/test/dist sync recursive'),
        (module.exports = webpackEmptyContext)
    },
    './src/components lazy recursive ^\\.\\/.*$ include: (?%21.*node_modules)(?:\\/src\\/components(?:\\/(?%21\\.)(?:(?:(?%21(?:^%7C\\/)\\.).)*?)\\/%7C\\/%7C$)stories\\.tsx)$':
      (module, __unused_webpack_exports, __webpack_require__) => {
        var map = {
          './main/stories': ['./src/components/main/stories.tsx', 112],
          './main/stories.tsx': ['./src/components/main/stories.tsx', 112]
        }
        function webpackAsyncContext(req) {
          if (!__webpack_require__.o(map, req))
            return Promise.resolve().then(() => {
              var e = new Error("Cannot find module '" + req + "'")
              throw ((e.code = 'MODULE_NOT_FOUND'), e)
            })
          var ids = map[req],
            id = ids[0]
          return __webpack_require__
            .e(ids[1])
            .then(() => __webpack_require__(id))
        }
        ;(webpackAsyncContext.keys = () => Object.keys(map)),
          (webpackAsyncContext.id =
            './src/components lazy recursive ^\\.\\/.*$ include: (?%21.*node_modules)(?:\\/src\\/components(?:\\/(?%21\\.)(?:(?:(?%21(?:^%7C\\/)\\.).)*?)\\/%7C\\/%7C$)stories\\.tsx)$'),
          (module.exports = webpackAsyncContext)
      },
    './storybook-config-entry.js': (
      __unused_webpack_module,
      __unused_webpack___webpack_exports__,
      __webpack_require__
    ) => {
      'use strict'
      var external_STORYBOOK_MODULE_CHANNELS_ = __webpack_require__(
          'storybook/internal/channels'
        ),
        csf = __webpack_require__(
          './node_modules/@storybook/core/dist/csf/index.js'
        ),
        external_STORYBOOK_MODULE_PREVIEW_API_ = __webpack_require__(
          'storybook/internal/preview-api'
        ),
        external_STORYBOOK_MODULE_GLOBAL_ =
          __webpack_require__('@storybook/global')
      const importers = [
        async (path) => {
          if (
            !/^\.[\\/](?:src\/components(?:\/(?!\.)(?:(?:(?!(?:^|\/)\.).)*?)\/|\/|$)stories\.tsx)$/.exec(
              path
            )
          )
            return
          const pathRemainder = path.substring(17)
          return __webpack_require__(
            './src/components lazy recursive ^\\.\\/.*$ include: (?%21.*node_modules)(?:\\/src\\/components(?:\\/(?%21\\.)(?:(?:(?%21(?:^%7C\\/)\\.).)*?)\\/%7C\\/%7C$)stories\\.tsx)$'
          )('./' + pathRemainder)
        }
      ]
      const channel = (0,
      external_STORYBOOK_MODULE_CHANNELS_.createBrowserChannel)({
        page: 'preview'
      })
      external_STORYBOOK_MODULE_PREVIEW_API_.addons.setChannel(channel),
        'DEVELOPMENT' ===
          external_STORYBOOK_MODULE_GLOBAL_.global.CONFIG_TYPE &&
          (window.__STORYBOOK_SERVER_CHANNEL__ = channel)
      const preview = new external_STORYBOOK_MODULE_PREVIEW_API_.PreviewWeb(
        async function importFn(path) {
          for (let i = 0; i < importers.length; i++) {
            const moduleExports = await ((x = () => importers[i](path)), x())
            if (moduleExports) return moduleExports
          }
          var x
        },
        () => {
          const previewAnnotations = [
              __webpack_require__(
                './node_modules/@storybook/react/dist/entry-preview.mjs'
              ),
              __webpack_require__(
                './node_modules/@storybook/react/dist/entry-preview-docs.mjs'
              ),
              __webpack_require__(
                './node_modules/@storybook/nextjs/dist/preview.mjs'
              ),
              __webpack_require__(
                './node_modules/@storybook/addon-essentials/dist/actions/preview.mjs'
              ),
              __webpack_require__(
                './node_modules/@storybook/addon-essentials/dist/docs/preview.mjs'
              ),
              __webpack_require__(
                './node_modules/@storybook/addon-essentials/dist/backgrounds/preview.mjs'
              ),
              __webpack_require__(
                './node_modules/@storybook/addon-essentials/dist/viewport/preview.mjs'
              ),
              __webpack_require__(
                './node_modules/@storybook/addon-essentials/dist/measure/preview.mjs'
              ),
              __webpack_require__(
                './node_modules/@storybook/addon-essentials/dist/outline/preview.mjs'
              ),
              __webpack_require__(
                './node_modules/@storybook/addon-essentials/dist/highlight/preview.mjs'
              ),
              __webpack_require__('./.storybook/preview.tsx')
            ],
            userPreview =
              previewAnnotations[previewAnnotations.length - 1]?.default
          return (0, csf.bU)(userPreview)
            ? userPreview.composed
            : (0, external_STORYBOOK_MODULE_PREVIEW_API_.composeConfigs)(
                previewAnnotations
              )
        }
      )
      ;(window.__STORYBOOK_PREVIEW__ = preview),
        (window.__STORYBOOK_STORY_STORE__ = preview.storyStore),
        (window.__STORYBOOK_ADDONS_CHANNEL__ = channel)
    },
    '?19e6': () => {},
    '?3e83': () => {},
    '?c969': () => {},
    '@storybook/global': (module) => {
      'use strict'
      module.exports = __STORYBOOK_MODULE_GLOBAL__
    },
    'storybook/internal/channels': (module) => {
      'use strict'
      module.exports = __STORYBOOK_MODULE_CHANNELS__
    },
    'storybook/internal/client-logger': (module) => {
      'use strict'
      module.exports = __STORYBOOK_MODULE_CLIENT_LOGGER__
    },
    'storybook/internal/core-events': (module) => {
      'use strict'
      module.exports = __STORYBOOK_MODULE_CORE_EVENTS__
    },
    'storybook/internal/preview-api': (module) => {
      'use strict'
      module.exports = __STORYBOOK_MODULE_PREVIEW_API__
    },
    'storybook/internal/preview-errors': (module) => {
      'use strict'
      module.exports = __STORYBOOK_MODULE_CORE_EVENTS_PREVIEW_ERRORS__
    }
  },
  (__webpack_require__) => {
    __webpack_require__.O(0, [965], () => {
      return (
        (moduleId = './storybook-config-entry.js'),
        __webpack_require__((__webpack_require__.s = moduleId))
      )
      var moduleId
    })
    __webpack_require__.O()
  }
])
//# sourceMappingURL=main.f01b2bfa.iframe.bundle.js.map
