/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/[locale]",{

/***/ "./src/components/geoloc/aboutlocation.js":
/*!************************************************!*\
  !*** ./src/components/geoloc/aboutlocation.js ***!
  \************************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ AboutLocation; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var i18next__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! i18next */ \"./node_modules/i18next/dist/esm/i18next.js\");\n/* harmony import */ var react_bootstrap__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-bootstrap */ \"./node_modules/react-bootstrap/esm/index.js\");\n/* module decorator */ module = __webpack_require__.hmd(module);\n\n\nvar _jsxFileName = \"/home/ionut/workspace/ionkom/weather/src/components/geoloc/aboutlocation.js\";\n\n\nfunction AboutLocation(_ref) {\n  var location = _ref.location,\n      admList = _ref.admList;\n  var admListJSX = admList.map(function (loc) {\n    if (loc && (loc.localeAltName !== '' || loc.name !== '')) return loc.localeAltName || loc.name;\n    return null;\n  }).filter(function (loc) {\n    return loc;\n  }).join(', ');\n  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n    children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__.Row, {\n      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__.Col, {\n        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h3\", {\n          children: i18next__WEBPACK_IMPORTED_MODULE_1__.default.t('aboutlocation:about-location', {\n            location: location.localeAltName || location.name\n          })\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 17,\n          columnNumber: 11\n        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n          children: i18next__WEBPACK_IMPORTED_MODULE_1__.default.t('aboutlocation:short-geo-desc', {\n            city: location.localeAltName || location.name,\n            admList: admListJSX\n          })\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 18,\n          columnNumber: 11\n        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n          children: [i18next__WEBPACK_IMPORTED_MODULE_1__.default.t('aboutlocation:geo-coords'), \" \", i18next__WEBPACK_IMPORTED_MODULE_1__.default.t('latitude'), \": \", location.latitude, \"; \", i18next__WEBPACK_IMPORTED_MODULE_1__.default.t('longitude'), \": \", location.longitude]\n        }, void 0, true, {\n          fileName: _jsxFileName,\n          lineNumber: 25,\n          columnNumber: 11\n        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"a\", {\n          href: \"http://www.google.com/maps/place/\".concat(location.latitude, \",\").concat(location.longitude),\n          target: \"_blank\",\n          rel: \"noopener\",\n          children: i18next__WEBPACK_IMPORTED_MODULE_1__.default.t('aboutlocation:show-in-gmaps', {\n            name: location.name\n          })\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 26,\n          columnNumber: 11\n        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n          children: [i18next__WEBPACK_IMPORTED_MODULE_1__.default.t('aboutlocation:alternatenames'), \" \", location.alternatenames.split(', ')]\n        }, void 0, true, {\n          fileName: _jsxFileName,\n          lineNumber: 29,\n          columnNumber: 11\n        }, this)]\n      }, void 0, true, {\n        fileName: _jsxFileName,\n        lineNumber: 16,\n        columnNumber: 9\n      }, this)\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 15,\n      columnNumber: 7\n    }, this)\n  }, void 0, false);\n}\n_c = AboutLocation;\n\nvar _c;\n\n$RefreshReg$(_c, \"AboutLocation\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2NvbXBvbmVudHMvZ2VvbG9jL2Fib3V0bG9jYXRpb24uanM/NzY4NCJdLCJuYW1lcyI6WyJBYm91dExvY2F0aW9uIiwibG9jYXRpb24iLCJhZG1MaXN0IiwiYWRtTGlzdEpTWCIsIm1hcCIsImxvYyIsImxvY2FsZUFsdE5hbWUiLCJuYW1lIiwiZmlsdGVyIiwiam9pbiIsImkxOG5leHQiLCJjaXR5IiwibGF0aXR1ZGUiLCJsb25naXR1ZGUiLCJhbHRlcm5hdGVuYW1lcyIsInNwbGl0Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7QUFBQTtBQUVBO0FBR2UsU0FBU0EsYUFBVCxPQUE4QztBQUFBLE1BQXJCQyxRQUFxQixRQUFyQkEsUUFBcUI7QUFBQSxNQUFYQyxPQUFXLFFBQVhBLE9BQVc7QUFDM0QsTUFBSUMsVUFBVSxHQUFHRCxPQUFPLENBQUNFLEdBQVIsQ0FBWSxVQUFBQyxHQUFHLEVBQUk7QUFDbEMsUUFBSUEsR0FBRyxLQUFLQSxHQUFHLENBQUNDLGFBQUosS0FBc0IsRUFBdEIsSUFBNEJELEdBQUcsQ0FBQ0UsSUFBSixLQUFhLEVBQTlDLENBQVAsRUFDRSxPQUFPRixHQUFHLENBQUNDLGFBQUosSUFBcUJELEdBQUcsQ0FBQ0UsSUFBaEM7QUFDRixXQUFPLElBQVA7QUFDRCxHQUpnQixFQUlkQyxNQUpjLENBSVAsVUFBQUgsR0FBRztBQUFBLFdBQUlBLEdBQUo7QUFBQSxHQUpJLEVBSUtJLElBSkwsQ0FJVSxJQUpWLENBQWpCO0FBTUEsc0JBQ0U7QUFBQSwyQkFDRSw4REFBQyxnREFBRDtBQUFBLDZCQUNFLDhEQUFDLGdEQUFEO0FBQUEsZ0NBQ0U7QUFBQSxvQkFBTUMsOENBQUEsQ0FBVSw4QkFBVixFQUEwQztBQUFFVCxvQkFBUSxFQUFFQSxRQUFRLENBQUNLLGFBQVQsSUFBMEJMLFFBQVEsQ0FBQ007QUFBL0MsV0FBMUM7QUFBTjtBQUFBO0FBQUE7QUFBQTtBQUFBLGdCQURGLGVBRUU7QUFBQSxvQkFDSUcsOENBQUEsQ0FBVSw4QkFBVixFQUNGO0FBQ0VDLGdCQUFJLEVBQUVWLFFBQVEsQ0FBQ0ssYUFBVCxJQUEwQkwsUUFBUSxDQUFDTSxJQUQzQztBQUVFTCxtQkFBTyxFQUFFQztBQUZYLFdBREU7QUFESjtBQUFBO0FBQUE7QUFBQTtBQUFBLGdCQUZGLGVBU0U7QUFBQSxxQkFBS08sOENBQUEsQ0FBVSwwQkFBVixDQUFMLE9BQStDQSw4Q0FBQSxDQUFVLFVBQVYsQ0FBL0MsUUFBeUVULFFBQVEsQ0FBQ1csUUFBbEYsUUFBK0ZGLDhDQUFBLENBQVUsV0FBVixDQUEvRixRQUEwSFQsUUFBUSxDQUFDWSxTQUFuSTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsZ0JBVEYsZUFVRTtBQUFHLGNBQUksNkNBQXNDWixRQUFRLENBQUNXLFFBQS9DLGNBQTJEWCxRQUFRLENBQUNZLFNBQXBFLENBQVA7QUFBd0YsZ0JBQU0sRUFBQyxRQUEvRjtBQUF3RyxhQUFHLEVBQUMsVUFBNUc7QUFBQSxvQkFDSUgsOENBQUEsQ0FBVSw2QkFBVixFQUF5QztBQUFFSCxnQkFBSSxFQUFFTixRQUFRLENBQUNNO0FBQWpCLFdBQXpDO0FBREo7QUFBQTtBQUFBO0FBQUE7QUFBQSxnQkFWRixlQWFFO0FBQUEscUJBQ0VHLDhDQUFBLENBQVUsOEJBQVYsQ0FERixPQUNnRFQsUUFBUSxDQUFDYSxjQUFULENBQXdCQyxLQUF4QixDQUE4QixJQUE5QixDQURoRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsZ0JBYkY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGLG1CQURGO0FBdUJEO0tBOUJ1QmYsYSIsImZpbGUiOiIuL3NyYy9jb21wb25lbnRzL2dlb2xvYy9hYm91dGxvY2F0aW9uLmpzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IGkxOG5leHQgZnJvbSAnaTE4bmV4dCc7XG5cbmltcG9ydCB7IFJvdywgQ29sIH0gZnJvbSAncmVhY3QtYm9vdHN0cmFwJztcblxuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBBYm91dExvY2F0aW9uKHsgbG9jYXRpb24sIGFkbUxpc3QgfSkge1xuICBsZXQgYWRtTGlzdEpTWCA9IGFkbUxpc3QubWFwKGxvYyA9PiB7XG4gICAgaWYgKGxvYyAmJiAobG9jLmxvY2FsZUFsdE5hbWUgIT09ICcnIHx8IGxvYy5uYW1lICE9PSAnJykpXG4gICAgICByZXR1cm4gbG9jLmxvY2FsZUFsdE5hbWUgfHwgbG9jLm5hbWVcbiAgICByZXR1cm4gbnVsbDtcbiAgfSkuZmlsdGVyKGxvYyA9PiBsb2MpLmpvaW4oJywgJyk7XG5cbiAgcmV0dXJuIChcbiAgICA8PlxuICAgICAgPFJvdz5cbiAgICAgICAgPENvbD5cbiAgICAgICAgICA8aDM+eyBpMThuZXh0LnQoJ2Fib3V0bG9jYXRpb246YWJvdXQtbG9jYXRpb24nLCB7IGxvY2F0aW9uOiBsb2NhdGlvbi5sb2NhbGVBbHROYW1lIHx8IGxvY2F0aW9uLm5hbWUgfSl9PC9oMz5cbiAgICAgICAgICA8cD5cbiAgICAgICAgICAgIHsgaTE4bmV4dC50KCdhYm91dGxvY2F0aW9uOnNob3J0LWdlby1kZXNjJywgXG4gICAgICAgICAgICB7IFxuICAgICAgICAgICAgICBjaXR5OiBsb2NhdGlvbi5sb2NhbGVBbHROYW1lIHx8IGxvY2F0aW9uLm5hbWUsXG4gICAgICAgICAgICAgIGFkbUxpc3Q6IGFkbUxpc3RKU1hcbiAgICAgICAgICAgIH0pIH1cbiAgICAgICAgICA8L3A+ICAgICAgICAgICAgICBcbiAgICAgICAgICA8cD57IGkxOG5leHQudCgnYWJvdXRsb2NhdGlvbjpnZW8tY29vcmRzJykgfSB7IGkxOG5leHQudCgnbGF0aXR1ZGUnKSB9OiB7bG9jYXRpb24ubGF0aXR1ZGV9OyB7IGkxOG5leHQudCgnbG9uZ2l0dWRlJykgfToge2xvY2F0aW9uLmxvbmdpdHVkZX08L3A+XG4gICAgICAgICAgPGEgaHJlZj17YGh0dHA6Ly93d3cuZ29vZ2xlLmNvbS9tYXBzL3BsYWNlLyR7bG9jYXRpb24ubGF0aXR1ZGV9LCR7bG9jYXRpb24ubG9uZ2l0dWRlfWB9IHRhcmdldD1cIl9ibGFua1wiIHJlbD1cIm5vb3BlbmVyXCI+XG4gICAgICAgICAgICB7IGkxOG5leHQudCgnYWJvdXRsb2NhdGlvbjpzaG93LWluLWdtYXBzJywgeyBuYW1lOiBsb2NhdGlvbi5uYW1lIH0pIH1cbiAgICAgICAgICA8L2E+XG4gICAgICAgICAgPGRpdj5cbiAgICAgICAgICB7IGkxOG5leHQudCgnYWJvdXRsb2NhdGlvbjphbHRlcm5hdGVuYW1lcycpIH0geyBsb2NhdGlvbi5hbHRlcm5hdGVuYW1lcy5zcGxpdCgnLCAnKSB9XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvQ29sPlxuICAgICAgPC9Sb3c+XG4gICAgPC8+XG4gIClcbn0iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/components/geoloc/aboutlocation.js\n");

/***/ })

});