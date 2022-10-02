"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/register",{

/***/ "./pages/register.js":
/*!***************************!*\
  !*** ./pages/register.js ***!
  \***************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _swc_helpers_src_define_property_mjs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @swc/helpers/src/_define_property.mjs */ \"./node_modules/@swc/helpers/src/_define_property.mjs\");\n/* harmony import */ var _swc_helpers_src_object_spread_mjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @swc/helpers/src/_object_spread.mjs */ \"./node_modules/@swc/helpers/src/_object_spread.mjs\");\n/* harmony import */ var _swc_helpers_src_object_spread_props_mjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @swc/helpers/src/_object_spread_props.mjs */ \"./node_modules/@swc/helpers/src/_object_spread_props.mjs\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var validator__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! validator */ \"./node_modules/validator/index.js\");\n/* harmony import */ var validator__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(validator__WEBPACK_IMPORTED_MODULE_6__);\n/* harmony import */ var _components_Layout__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/Layout */ \"./components/Layout.js\");\n\n\n\nvar _this = undefined;\n\nvar _s = $RefreshSig$();\n\n\n\nvar Register = function() {\n    _s();\n    var ref = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)({\n        name: \"\",\n        email: \"\",\n        password: \"\"\n    }), user = ref[0], setUser = ref[1];\n    var ref1 = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"\"), error = ref1[0], setError = ref1[1];\n    var name = user.name, email = user.email, password = user.password;\n    var handleChange = function(e) {\n        setUser((0,_swc_helpers_src_object_spread_props_mjs__WEBPACK_IMPORTED_MODULE_3__[\"default\"])((0,_swc_helpers_src_object_spread_mjs__WEBPACK_IMPORTED_MODULE_4__[\"default\"])({}, user), (0,_swc_helpers_src_define_property_mjs__WEBPACK_IMPORTED_MODULE_5__[\"default\"])({}, e.target.name, e.target.value)));\n    };\n    var handleSubmit = function(e) {\n        e.preventDefault();\n        console.table({\n            name: name,\n            email: email,\n            password: password\n        });\n        if (name.length <= 0) {\n            return setError(\"The username is required\");\n        }\n        if (!validator__WEBPACK_IMPORTED_MODULE_6___default().isEmail(email)) {\n            return setError(\"The email you input is invalid\");\n        }\n        if (password.length < 6) {\n            return setError(\"The password you entered should contain 6 or more characters\");\n        }\n        setError(\"\");\n        setUser({});\n    };\n    var registerForm = function() {\n        return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"form\", {\n            onSubmit: handleSubmit,\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"input-group mb-3\",\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                            className: \"input-group-text\",\n                            id: \"username\",\n                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"svg\", {\n                                className: \"icon-input\",\n                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"use\", {\n                                    href: \"/static/icons/sprite.svg#icon-add-user\"\n                                }, void 0, false, {\n                                    fileName: \"/Users/rupaklama/Desktop/job-hub-top/pages/register.js\",\n                                    lineNumber: 45,\n                                    columnNumber: 13\n                                }, _this)\n                            }, void 0, false, {\n                                fileName: \"/Users/rupaklama/Desktop/job-hub-top/pages/register.js\",\n                                lineNumber: 44,\n                                columnNumber: 11\n                            }, _this)\n                        }, void 0, false, {\n                            fileName: \"/Users/rupaklama/Desktop/job-hub-top/pages/register.js\",\n                            lineNumber: 43,\n                            columnNumber: 9\n                        }, _this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                            name: \"name\",\n                            type: \"text\",\n                            className: \"form-control\",\n                            placeholder: \"Username\",\n                            \"aria-label\": \"Username\",\n                            \"aria-describedby\": \"username\",\n                            value: name,\n                            onChange: handleChange\n                        }, void 0, false, {\n                            fileName: \"/Users/rupaklama/Desktop/job-hub-top/pages/register.js\",\n                            lineNumber: 48,\n                            columnNumber: 9\n                        }, _this)\n                    ]\n                }, void 0, true, {\n                    fileName: \"/Users/rupaklama/Desktop/job-hub-top/pages/register.js\",\n                    lineNumber: 42,\n                    columnNumber: 7\n                }, _this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"input-group mb-3\",\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                            className: \"input-group-text\",\n                            id: \"email\",\n                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"svg\", {\n                                className: \"icon-input\",\n                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"use\", {\n                                    href: \"/static/icons/sprite.svg#icon-mail\"\n                                }, void 0, false, {\n                                    fileName: \"/Users/rupaklama/Desktop/job-hub-top/pages/register.js\",\n                                    lineNumber: 63,\n                                    columnNumber: 13\n                                }, _this)\n                            }, void 0, false, {\n                                fileName: \"/Users/rupaklama/Desktop/job-hub-top/pages/register.js\",\n                                lineNumber: 62,\n                                columnNumber: 11\n                            }, _this)\n                        }, void 0, false, {\n                            fileName: \"/Users/rupaklama/Desktop/job-hub-top/pages/register.js\",\n                            lineNumber: 61,\n                            columnNumber: 9\n                        }, _this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                            name: \"email\",\n                            type: \"email\",\n                            className: \"form-control\",\n                            placeholder: \"email\",\n                            \"aria-label\": \"email\",\n                            \"aria-describedby\": \"email\",\n                            value: email.toLowerCase().trim(),\n                            onChange: handleChange\n                        }, void 0, false, {\n                            fileName: \"/Users/rupaklama/Desktop/job-hub-top/pages/register.js\",\n                            lineNumber: 67,\n                            columnNumber: 9\n                        }, _this)\n                    ]\n                }, void 0, true, {\n                    fileName: \"/Users/rupaklama/Desktop/job-hub-top/pages/register.js\",\n                    lineNumber: 60,\n                    columnNumber: 7\n                }, _this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"input-group mb-3\",\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                            className: \"input-group-text\",\n                            id: \"email\",\n                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"svg\", {\n                                className: \"icon-input\",\n                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"use\", {\n                                    href: \"/static/icons/sprite.svg#icon-lock\"\n                                }, void 0, false, {\n                                    fileName: \"/Users/rupaklama/Desktop/job-hub-top/pages/register.js\",\n                                    lineNumber: 82,\n                                    columnNumber: 13\n                                }, _this)\n                            }, void 0, false, {\n                                fileName: \"/Users/rupaklama/Desktop/job-hub-top/pages/register.js\",\n                                lineNumber: 81,\n                                columnNumber: 11\n                            }, _this)\n                        }, void 0, false, {\n                            fileName: \"/Users/rupaklama/Desktop/job-hub-top/pages/register.js\",\n                            lineNumber: 80,\n                            columnNumber: 9\n                        }, _this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                            name: \"password\",\n                            type: \"password\",\n                            className: \"form-control\",\n                            placeholder: \"password\",\n                            \"aria-label\": \"password\",\n                            \"aria-describedby\": \"password\",\n                            value: password,\n                            onChange: handleChange\n                        }, void 0, false, {\n                            fileName: \"/Users/rupaklama/Desktop/job-hub-top/pages/register.js\",\n                            lineNumber: 86,\n                            columnNumber: 9\n                        }, _this)\n                    ]\n                }, void 0, true, {\n                    fileName: \"/Users/rupaklama/Desktop/job-hub-top/pages/register.js\",\n                    lineNumber: 79,\n                    columnNumber: 7\n                }, _this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"input-group mb-3\",\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                        type: \"submit\",\n                        className: \"btn btn-outline-success btn-submit\",\n                        children: \"Signup\"\n                    }, void 0, false, {\n                        fileName: \"/Users/rupaklama/Desktop/job-hub-top/pages/register.js\",\n                        lineNumber: 99,\n                        columnNumber: 9\n                    }, _this)\n                }, void 0, false, {\n                    fileName: \"/Users/rupaklama/Desktop/job-hub-top/pages/register.js\",\n                    lineNumber: 98,\n                    columnNumber: 7\n                }, _this)\n            ]\n        }, void 0, true, {\n            fileName: \"/Users/rupaklama/Desktop/job-hub-top/pages/register.js\",\n            lineNumber: 41,\n            columnNumber: 5\n        }, _this);\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Layout__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            className: \"col-md-6 offset-md-3 text-center\",\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                    children: \"Job Hub Top\"\n                }, void 0, false, {\n                    fileName: \"/Users/rupaklama/Desktop/job-hub-top/pages/register.js\",\n                    lineNumber: 109,\n                    columnNumber: 9\n                }, _this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h3\", {\n                    children: \"Signup to discover best places to look for Jobs and much more!\"\n                }, void 0, false, {\n                    fileName: \"/Users/rupaklama/Desktop/job-hub-top/pages/register.js\",\n                    lineNumber: 110,\n                    columnNumber: 9\n                }, _this),\n                registerForm(),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"hr\", {}, void 0, false, {\n                    fileName: \"/Users/rupaklama/Desktop/job-hub-top/pages/register.js\",\n                    lineNumber: 114,\n                    columnNumber: 9\n                }, _this),\n                error && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                    className: \"text-danger\",\n                    children: error\n                }, void 0, false, {\n                    fileName: \"/Users/rupaklama/Desktop/job-hub-top/pages/register.js\",\n                    lineNumber: 115,\n                    columnNumber: 19\n                }, _this)\n            ]\n        }, void 0, true, {\n            fileName: \"/Users/rupaklama/Desktop/job-hub-top/pages/register.js\",\n            lineNumber: 108,\n            columnNumber: 7\n        }, _this)\n    }, void 0, false, {\n        fileName: \"/Users/rupaklama/Desktop/job-hub-top/pages/register.js\",\n        lineNumber: 107,\n        columnNumber: 5\n    }, _this);\n};\n_s(Register, \"G6OGy5P7Xqhj96FmnzmOy4ZDreQ=\");\n_c = Register;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Register);\nvar _c;\n$RefreshReg$(_c, \"Register\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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NEVBQUNjLFFBQU07d0JBQUNQLElBQUksRUFBQyxRQUFRO3dCQUFDUCxTQUFTLEVBQUMsb0NBQW9DO2tDQUFDLFFBRXJFOzs7Ozs2QkFBUzs7Ozs7eUJBQ0w7Ozs7OztpQkFDRDtLQUNSO0lBRUQscUJBQ0UsOERBQUN2QiwwREFBTTtrQkFDTCw0RUFBQ3NCLEtBQUc7WUFBQ0MsU0FBUyxFQUFDLGtDQUFrQzs7OEJBQy9DLDhEQUFDZSxJQUFFOzhCQUFDLGFBQVc7Ozs7O3lCQUFLOzhCQUNwQiw4REFBQ0MsSUFBRTs4QkFBQyxnRUFBOEQ7Ozs7O3lCQUFLO2dCQUV0RXBCLFlBQVksRUFBRTs4QkFFZiw4REFBQ3FCLElBQUU7Ozs7eUJBQUc7Z0JBQ0xqQyxLQUFLLGtCQUFJLDhEQUFDa0MsR0FBQztvQkFBQ2xCLFNBQVMsRUFBQyxhQUFhOzhCQUFFaEIsS0FBSzs7Ozs7eUJBQUs7Ozs7OztpQkFDNUM7Ozs7O2FBQ0MsQ0FDVDtBQUNKLENBQUM7R0FqSEtOLFFBQVE7QUFBUkEsS0FBQUEsUUFBUTtBQW1IZCwrREFBZUEsUUFBUSxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3BhZ2VzL3JlZ2lzdGVyLmpzP2EwOTciXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCB2YWxpZGF0b3IgZnJvbSBcInZhbGlkYXRvclwiO1xuXG5pbXBvcnQgTGF5b3V0IGZyb20gXCIuLi9jb21wb25lbnRzL0xheW91dFwiO1xuXG5jb25zdCBSZWdpc3RlciA9ICgpID0+IHtcbiAgY29uc3QgW3VzZXIsIHNldFVzZXJdID0gdXNlU3RhdGUoe1xuICAgIG5hbWU6IFwiXCIsXG4gICAgZW1haWw6IFwiXCIsXG4gICAgcGFzc3dvcmQ6IFwiXCIsXG4gIH0pO1xuXG4gIGNvbnN0IFtlcnJvciwgc2V0RXJyb3JdID0gdXNlU3RhdGUoXCJcIik7XG5cbiAgY29uc3QgeyBuYW1lLCBlbWFpbCwgcGFzc3dvcmQgfSA9IHVzZXI7XG5cbiAgY29uc3QgaGFuZGxlQ2hhbmdlID0gZSA9PiB7XG4gICAgc2V0VXNlcih7IC4uLnVzZXIsIFtlLnRhcmdldC5uYW1lXTogZS50YXJnZXQudmFsdWUgfSk7XG4gIH07XG5cbiAgY29uc3QgaGFuZGxlU3VibWl0ID0gZSA9PiB7XG4gICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgIGNvbnNvbGUudGFibGUoeyBuYW1lLCBlbWFpbCwgcGFzc3dvcmQgfSk7XG5cbiAgICBpZiAobmFtZS5sZW5ndGggPD0gMCkge1xuICAgICAgcmV0dXJuIHNldEVycm9yKFwiVGhlIHVzZXJuYW1lIGlzIHJlcXVpcmVkXCIpO1xuICAgIH1cblxuICAgIGlmICghdmFsaWRhdG9yLmlzRW1haWwoZW1haWwpKSB7XG4gICAgICByZXR1cm4gc2V0RXJyb3IoXCJUaGUgZW1haWwgeW91IGlucHV0IGlzIGludmFsaWRcIik7XG4gICAgfVxuICAgIGlmIChwYXNzd29yZC5sZW5ndGggPCA2KSB7XG4gICAgICByZXR1cm4gc2V0RXJyb3IoXCJUaGUgcGFzc3dvcmQgeW91IGVudGVyZWQgc2hvdWxkIGNvbnRhaW4gNiBvciBtb3JlIGNoYXJhY3RlcnNcIik7XG4gICAgfVxuXG4gICAgc2V0RXJyb3IoXCJcIik7XG4gICAgc2V0VXNlcih7fSk7XG4gIH07XG5cbiAgY29uc3QgcmVnaXN0ZXJGb3JtID0gKCkgPT4gKFxuICAgIDxmb3JtIG9uU3VibWl0PXtoYW5kbGVTdWJtaXR9PlxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJpbnB1dC1ncm91cCBtYi0zXCI+XG4gICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cImlucHV0LWdyb3VwLXRleHRcIiBpZD1cInVzZXJuYW1lXCI+XG4gICAgICAgICAgPHN2ZyBjbGFzc05hbWU9XCJpY29uLWlucHV0XCI+XG4gICAgICAgICAgICA8dXNlIGhyZWY9XCIvc3RhdGljL2ljb25zL3Nwcml0ZS5zdmcjaWNvbi1hZGQtdXNlclwiIC8+XG4gICAgICAgICAgPC9zdmc+XG4gICAgICAgIDwvc3Bhbj5cbiAgICAgICAgPGlucHV0XG4gICAgICAgICAgbmFtZT1cIm5hbWVcIlxuICAgICAgICAgIHR5cGU9XCJ0ZXh0XCJcbiAgICAgICAgICBjbGFzc05hbWU9XCJmb3JtLWNvbnRyb2xcIlxuICAgICAgICAgIHBsYWNlaG9sZGVyPVwiVXNlcm5hbWVcIlxuICAgICAgICAgIGFyaWEtbGFiZWw9XCJVc2VybmFtZVwiXG4gICAgICAgICAgYXJpYS1kZXNjcmliZWRieT1cInVzZXJuYW1lXCJcbiAgICAgICAgICB2YWx1ZT17bmFtZX1cbiAgICAgICAgICBvbkNoYW5nZT17aGFuZGxlQ2hhbmdlfVxuICAgICAgICAvPlxuICAgICAgPC9kaXY+XG5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiaW5wdXQtZ3JvdXAgbWItM1wiPlxuICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJpbnB1dC1ncm91cC10ZXh0XCIgaWQ9XCJlbWFpbFwiPlxuICAgICAgICAgIDxzdmcgY2xhc3NOYW1lPVwiaWNvbi1pbnB1dFwiPlxuICAgICAgICAgICAgPHVzZSBocmVmPVwiL3N0YXRpYy9pY29ucy9zcHJpdGUuc3ZnI2ljb24tbWFpbFwiIC8+XG4gICAgICAgICAgPC9zdmc+XG4gICAgICAgIDwvc3Bhbj5cblxuICAgICAgICA8aW5wdXRcbiAgICAgICAgICBuYW1lPVwiZW1haWxcIlxuICAgICAgICAgIHR5cGU9XCJlbWFpbFwiXG4gICAgICAgICAgY2xhc3NOYW1lPVwiZm9ybS1jb250cm9sXCJcbiAgICAgICAgICBwbGFjZWhvbGRlcj1cImVtYWlsXCJcbiAgICAgICAgICBhcmlhLWxhYmVsPVwiZW1haWxcIlxuICAgICAgICAgIGFyaWEtZGVzY3JpYmVkYnk9XCJlbWFpbFwiXG4gICAgICAgICAgdmFsdWU9e2VtYWlsLnRvTG93ZXJDYXNlKCkudHJpbSgpfVxuICAgICAgICAgIG9uQ2hhbmdlPXtoYW5kbGVDaGFuZ2V9XG4gICAgICAgIC8+XG4gICAgICA8L2Rpdj5cblxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJpbnB1dC1ncm91cCBtYi0zXCI+XG4gICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cImlucHV0LWdyb3VwLXRleHRcIiBpZD1cImVtYWlsXCI+XG4gICAgICAgICAgPHN2ZyBjbGFzc05hbWU9XCJpY29uLWlucHV0XCI+XG4gICAgICAgICAgICA8dXNlIGhyZWY9XCIvc3RhdGljL2ljb25zL3Nwcml0ZS5zdmcjaWNvbi1sb2NrXCIgLz5cbiAgICAgICAgICA8L3N2Zz5cbiAgICAgICAgPC9zcGFuPlxuXG4gICAgICAgIDxpbnB1dFxuICAgICAgICAgIG5hbWU9XCJwYXNzd29yZFwiXG4gICAgICAgICAgdHlwZT1cInBhc3N3b3JkXCJcbiAgICAgICAgICBjbGFzc05hbWU9XCJmb3JtLWNvbnRyb2xcIlxuICAgICAgICAgIHBsYWNlaG9sZGVyPVwicGFzc3dvcmRcIlxuICAgICAgICAgIGFyaWEtbGFiZWw9XCJwYXNzd29yZFwiXG4gICAgICAgICAgYXJpYS1kZXNjcmliZWRieT1cInBhc3N3b3JkXCJcbiAgICAgICAgICB2YWx1ZT17cGFzc3dvcmR9XG4gICAgICAgICAgb25DaGFuZ2U9e2hhbmRsZUNoYW5nZX1cbiAgICAgICAgLz5cbiAgICAgIDwvZGl2PlxuXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImlucHV0LWdyb3VwIG1iLTNcIj5cbiAgICAgICAgPGJ1dHRvbiB0eXBlPVwic3VibWl0XCIgY2xhc3NOYW1lPVwiYnRuIGJ0bi1vdXRsaW5lLXN1Y2Nlc3MgYnRuLXN1Ym1pdFwiPlxuICAgICAgICAgIFNpZ251cFxuICAgICAgICA8L2J1dHRvbj5cbiAgICAgIDwvZGl2PlxuICAgIDwvZm9ybT5cbiAgKTtcblxuICByZXR1cm4gKFxuICAgIDxMYXlvdXQ+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbC1tZC02IG9mZnNldC1tZC0zIHRleHQtY2VudGVyXCI+XG4gICAgICAgIDxoMT5Kb2IgSHViIFRvcDwvaDE+XG4gICAgICAgIDxoMz5TaWdudXAgdG8gZGlzY292ZXIgYmVzdCBwbGFjZXMgdG8gbG9vayBmb3IgSm9icyBhbmQgbXVjaCBtb3JlITwvaDM+XG5cbiAgICAgICAge3JlZ2lzdGVyRm9ybSgpfVxuXG4gICAgICAgIDxociAvPlxuICAgICAgICB7ZXJyb3IgJiYgPHAgY2xhc3NOYW1lPVwidGV4dC1kYW5nZXJcIj57ZXJyb3J9PC9wPn1cbiAgICAgIDwvZGl2PlxuICAgIDwvTGF5b3V0PlxuICApO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgUmVnaXN0ZXI7XG4iXSwibmFtZXMiOlsidXNlU3RhdGUiLCJ2YWxpZGF0b3IiLCJMYXlvdXQiLCJSZWdpc3RlciIsIm5hbWUiLCJlbWFpbCIsInBhc3N3b3JkIiwidXNlciIsInNldFVzZXIiLCJlcnJvciIsInNldEVycm9yIiwiaGFuZGxlQ2hhbmdlIiwiZSIsInRhcmdldCIsInZhbHVlIiwiaGFuZGxlU3VibWl0IiwicHJldmVudERlZmF1bHQiLCJjb25zb2xlIiwidGFibGUiLCJsZW5ndGgiLCJpc0VtYWlsIiwicmVnaXN0ZXJGb3JtIiwiZm9ybSIsIm9uU3VibWl0IiwiZGl2IiwiY2xhc3NOYW1lIiwic3BhbiIsImlkIiwic3ZnIiwidXNlIiwiaHJlZiIsImlucHV0IiwidHlwZSIsInBsYWNlaG9sZGVyIiwiYXJpYS1sYWJlbCIsImFyaWEtZGVzY3JpYmVkYnkiLCJvbkNoYW5nZSIsInRvTG93ZXJDYXNlIiwidHJpbSIsImJ1dHRvbiIsImgxIiwiaDMiLCJociIsInAiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/register.js\n"));

/***/ })

});