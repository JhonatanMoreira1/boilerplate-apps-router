;(self.webpackChunkboilerplate_apps_router =
  self.webpackChunkboilerplate_apps_router || []).push([
  [980],
  {
    './node_modules/@storybook/blocks/dist sync recursive': (module) => {
      function webpackEmptyContext(req) {
        var e = new Error("Cannot find module '" + req + "'")
        throw ((e.code = 'MODULE_NOT_FOUND'), e)
      }
      ;(webpackEmptyContext.keys = () => []),
        (webpackEmptyContext.resolve = webpackEmptyContext),
        (webpackEmptyContext.id =
          './node_modules/@storybook/blocks/dist sync recursive'),
        (module.exports = webpackEmptyContext)
    },
    './node_modules/@storybook/core/dist/components sync recursive': (
      module
    ) => {
      function webpackEmptyContext(req) {
        var e = new Error("Cannot find module '" + req + "'")
        throw ((e.code = 'MODULE_NOT_FOUND'), e)
      }
      ;(webpackEmptyContext.keys = () => []),
        (webpackEmptyContext.resolve = webpackEmptyContext),
        (webpackEmptyContext.id =
          './node_modules/@storybook/core/dist/components sync recursive'),
        (module.exports = webpackEmptyContext)
    },
    './node_modules/@storybook/core/dist/theming sync recursive': (module) => {
      function webpackEmptyContext(req) {
        var e = new Error("Cannot find module '" + req + "'")
        throw ((e.code = 'MODULE_NOT_FOUND'), e)
      }
      ;(webpackEmptyContext.keys = () => []),
        (webpackEmptyContext.resolve = webpackEmptyContext),
        (webpackEmptyContext.id =
          './node_modules/@storybook/core/dist/theming sync recursive'),
        (module.exports = webpackEmptyContext)
    }
  }
])
