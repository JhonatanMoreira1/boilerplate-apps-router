/*! For license information please see 207.00865cc8.iframe.bundle.js.LICENSE.txt */
'use strict'
;(self.webpackChunkboilerplate_apps_router =
  self.webpackChunkboilerplate_apps_router || []).push([
  [207],
  {
    './node_modules/next/dist/compiled/react-dom/cjs/react-dom-test-utils.production.js':
      (__unused_webpack_module, exports, __webpack_require__) => {
        var console = __webpack_require__(
            './node_modules/console-browserify/index.js'
          ),
          React = __webpack_require__(
            './node_modules/next/dist/compiled/react/index.js'
          ),
          didWarnAboutUsingAct = !1
        exports.act = function (callback) {
          return (
            !1 === didWarnAboutUsingAct &&
              ((didWarnAboutUsingAct = !0),
              console.error(
                '`ReactDOMTestUtils.act` is deprecated in favor of `React.act`. Import `act` from `react` instead of `react-dom/test-utils`. See https://react.dev/warnings/react-dom-test-utils for more info.'
              )),
            React.act(callback)
          )
        }
      }
  }
])
