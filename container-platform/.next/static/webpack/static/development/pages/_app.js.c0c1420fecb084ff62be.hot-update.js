webpackHotUpdate("static/development/pages/_app.js",{

/***/ "./pages/_app.js":
/*!***********************!*\
  !*** ./pages/_app.js ***!
  \***********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return _app; });\n/* harmony import */ var _babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/extends */ \"./node_modules/@babel/runtime/helpers/esm/extends.js\");\n/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-jsx/style */ \"./node_modules/styled-jsx/style.js\");\n/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _components_layout_header__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/layout/header */ \"./components/layout/header.js\");\n/* harmony import */ var _components_layout_footer__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../components/layout/footer */ \"./components/layout/footer.js\");\n/* harmony import */ var _app_module_scss__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./app.module.scss */ \"./pages/app.module.scss\");\n/* harmony import */ var _app_module_scss__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_app_module_scss__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var react_google_recaptcha__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react-google-recaptcha */ \"./node_modules/react-google-recaptcha/lib/esm/index.js\");\n\n\nvar _jsxFileName = \"/Users/marcusbolinsson/Projects/sbfastigheter/container-platform/pages/_app.js\",\n    _s = $RefreshSig$();\n\n\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement;\n\n\n\n\n\nfunction _app(_ref) {\n  _s();\n\n  var Component = _ref.Component,\n      pageProps = _ref.pageProps;\n\n  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_2__[\"useState\"])(80),\n      HeaderViewHeight = _useState[0],\n      setHeaderViewHeight = _useState[1];\n\n  function onChange(value) {\n    console.log(\"Captcha value:\", value);\n  }\n\n  return __jsx(\"div\", {\n    className: \"jsx-651080770\" + \" \" + (_app_module_scss__WEBPACK_IMPORTED_MODULE_5___default.a.body || \"\"),\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 13,\n      columnNumber: 5\n    }\n  }, __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default.a, {\n    id: \"651080770\",\n    __self: this\n  }, \"@import url(\\\"https://fonts.googleapis.com/css2?family=Josefin+Sans&display=swap\\\");body{margin:0;padding:0;}\\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9tYXJjdXNib2xpbnNzb24vUHJvamVjdHMvc2JmYXN0aWdoZXRlci9jb250YWluZXItcGxhdGZvcm0vcGFnZXMvX2FwcC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFheUIsQUFHb0IsU0FDQyxVQUN1RSxBQUNuRiIsImZpbGUiOiIvVXNlcnMvbWFyY3VzYm9saW5zc29uL1Byb2plY3RzL3NiZmFzdGlnaGV0ZXIvY29udGFpbmVyLXBsYXRmb3JtL3BhZ2VzL19hcHAuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHt1c2VTdGF0ZX0gZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQge0hlYWRlcn0gZnJvbSBcIi4uL2NvbXBvbmVudHMvbGF5b3V0L2hlYWRlclwiO1xuaW1wb3J0IHtGb290ZXJ9IGZyb20gXCIuLi9jb21wb25lbnRzL2xheW91dC9mb290ZXJcIjtcbmltcG9ydCBzdHlsZXMgZnJvbSBcIi4vYXBwLm1vZHVsZS5zY3NzXCI7XG5pbXBvcnQgUmVDQVBUQ0hBIGZyb20gXCJyZWFjdC1nb29nbGUtcmVjYXB0Y2hhXCI7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIF9hcHAoe0NvbXBvbmVudCwgcGFnZVByb3BzfSkge1xuICBjb25zdCBbSGVhZGVyVmlld0hlaWdodCwgc2V0SGVhZGVyVmlld0hlaWdodF0gPSB1c2VTdGF0ZSg4MCk7XG4gIGZ1bmN0aW9uIG9uQ2hhbmdlKHZhbHVlKSB7XG4gICAgY29uc29sZS5sb2coXCJDYXB0Y2hhIHZhbHVlOlwiLCB2YWx1ZSk7XG4gIH1cbiAgcmV0dXJuIChcbiAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmJvZHl9PlxuICAgICAgPHN0eWxlIGpzeCBnbG9iYWw+e2BcbiAgICAgICAgYm9keSB7XG4gICAgICAgICAgbWFyZ2luOiAwO1xuICAgICAgICAgIHBhZGRpbmc6IDA7XG4gICAgICAgICAgQGltcG9ydCB1cmwoXCJodHRwczovL2ZvbnRzLmdvb2dsZWFwaXMuY29tL2NzczI/ZmFtaWx5PUpvc2VmaW4rU2FucyZkaXNwbGF5PXN3YXBcIik7XG4gICAgICAgIH1cbiAgICAgIGB9PC9zdHlsZT5cbiAgICAgIDxIZWFkZXIgLz5cbiAgICAgIDxDb21wb25lbnQgey4uLnBhZ2VQcm9wc30gLz5cbiAgICAgIDxGb290ZXIgLz5cbiAgICAgIDxSZUNBUFRDSEEgc2l0ZWtleT1cIjZMZU5nTDhaQUFBQUFPRlRtNlVMX0RjZ0V4TUpnMjZHYTUwd2VpQW1cIiBvbkNoYW5nZT17b25DaGFuZ2V9IC8+XG4gICAgPC9kaXY+XG4gICk7XG59XG4iXX0= */\\n/*@ sourceURL=/Users/marcusbolinsson/Projects/sbfastigheter/container-platform/pages/_app.js */\"), __jsx(_components_layout_header__WEBPACK_IMPORTED_MODULE_3__[\"Header\"], {\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 21,\n      columnNumber: 7\n    }\n  }), __jsx(Component, Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__[\"default\"])({}, pageProps, {\n    className: \"jsx-651080770\" + \" \" + (pageProps && pageProps.className != null && pageProps.className || \"\"),\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 22,\n      columnNumber: 7\n    }\n  })), __jsx(_components_layout_footer__WEBPACK_IMPORTED_MODULE_4__[\"Footer\"], {\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 23,\n      columnNumber: 7\n    }\n  }), __jsx(react_google_recaptcha__WEBPACK_IMPORTED_MODULE_6__[\"default\"], {\n    sitekey: \"6LeNgL8ZAAAAAOFTm6UL_DcgExMJg26Ga50weiAm\",\n    onChange: onChange,\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 24,\n      columnNumber: 7\n    }\n  }));\n}\n\n_s(_app, \"CayFdLo7g3URiFLyaJKM7+eCfN8=\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports_1 = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports_1, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports_1)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports_1;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports_1)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9wYWdlcy9fYXBwLmpzP2Q1MzAiXSwibmFtZXMiOlsiX2FwcCIsIkNvbXBvbmVudCIsInBhZ2VQcm9wcyIsInVzZVN0YXRlIiwiSGVhZGVyVmlld0hlaWdodCIsInNldEhlYWRlclZpZXdIZWlnaHQiLCJvbkNoYW5nZSIsInZhbHVlIiwiY29uc29sZSIsImxvZyIsInN0eWxlcyIsImJvZHkiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRWUsU0FBU0EsSUFBVCxPQUFzQztBQUFBOztBQUFBLE1BQXZCQyxTQUF1QixRQUF2QkEsU0FBdUI7QUFBQSxNQUFaQyxTQUFZLFFBQVpBLFNBQVk7O0FBQUEsa0JBQ0hDLHNEQUFRLENBQUMsRUFBRCxDQURMO0FBQUEsTUFDNUNDLGdCQUQ0QztBQUFBLE1BQzFCQyxtQkFEMEI7O0FBRW5ELFdBQVNDLFFBQVQsQ0FBa0JDLEtBQWxCLEVBQXlCO0FBQ3ZCQyxXQUFPLENBQUNDLEdBQVIsQ0FBWSxnQkFBWixFQUE4QkYsS0FBOUI7QUFDRDs7QUFDRCxTQUNFO0FBQUEsd0NBQWdCRyx1REFBTSxDQUFDQyxJQUF2QjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGl6REFRRSxNQUFDLGdFQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFSRixFQVNFLE1BQUMsU0FBRCx5RkFBZVQsU0FBZjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FURixFQVVFLE1BQUMsZ0VBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQVZGLEVBV0UsTUFBQyw4REFBRDtBQUFXLFdBQU8sRUFBQywwQ0FBbkI7QUFBOEQsWUFBUSxFQUFFSSxRQUF4RTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBWEYsQ0FERjtBQWVEOztHQXBCdUJOLEkiLCJmaWxlIjoiLi9wYWdlcy9fYXBwLmpzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7dXNlU3RhdGV9IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IHtIZWFkZXJ9IGZyb20gXCIuLi9jb21wb25lbnRzL2xheW91dC9oZWFkZXJcIjtcbmltcG9ydCB7Rm9vdGVyfSBmcm9tIFwiLi4vY29tcG9uZW50cy9sYXlvdXQvZm9vdGVyXCI7XG5pbXBvcnQgc3R5bGVzIGZyb20gXCIuL2FwcC5tb2R1bGUuc2Nzc1wiO1xuaW1wb3J0IFJlQ0FQVENIQSBmcm9tIFwicmVhY3QtZ29vZ2xlLXJlY2FwdGNoYVwiO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBfYXBwKHtDb21wb25lbnQsIHBhZ2VQcm9wc30pIHtcbiAgY29uc3QgW0hlYWRlclZpZXdIZWlnaHQsIHNldEhlYWRlclZpZXdIZWlnaHRdID0gdXNlU3RhdGUoODApO1xuICBmdW5jdGlvbiBvbkNoYW5nZSh2YWx1ZSkge1xuICAgIGNvbnNvbGUubG9nKFwiQ2FwdGNoYSB2YWx1ZTpcIiwgdmFsdWUpO1xuICB9XG4gIHJldHVybiAoXG4gICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5ib2R5fT5cbiAgICAgIDxzdHlsZSBqc3ggZ2xvYmFsPntgXG4gICAgICAgIGJvZHkge1xuICAgICAgICAgIG1hcmdpbjogMDtcbiAgICAgICAgICBwYWRkaW5nOiAwO1xuICAgICAgICAgIEBpbXBvcnQgdXJsKFwiaHR0cHM6Ly9mb250cy5nb29nbGVhcGlzLmNvbS9jc3MyP2ZhbWlseT1Kb3NlZmluK1NhbnMmZGlzcGxheT1zd2FwXCIpO1xuICAgICAgICB9XG4gICAgICBgfTwvc3R5bGU+XG4gICAgICA8SGVhZGVyIC8+XG4gICAgICA8Q29tcG9uZW50IHsuLi5wYWdlUHJvcHN9IC8+XG4gICAgICA8Rm9vdGVyIC8+XG4gICAgICA8UmVDQVBUQ0hBIHNpdGVrZXk9XCI2TGVOZ0w4WkFBQUFBT0ZUbTZVTF9EY2dFeE1KZzI2R2E1MHdlaUFtXCIgb25DaGFuZ2U9e29uQ2hhbmdlfSAvPlxuICAgIDwvZGl2PlxuICApO1xufVxuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/_app.js\n");

/***/ })

})