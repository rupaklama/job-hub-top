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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _swc_helpers_src_define_property_mjs__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @swc/helpers/src/_define_property.mjs */ \"./node_modules/@swc/helpers/src/_define_property.mjs\");\n/* harmony import */ var _swc_helpers_src_object_spread_mjs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @swc/helpers/src/_object_spread.mjs */ \"./node_modules/@swc/helpers/src/_object_spread.mjs\");\n/* harmony import */ var _swc_helpers_src_object_spread_props_mjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @swc/helpers/src/_object_spread_props.mjs */ \"./node_modules/@swc/helpers/src/_object_spread_props.mjs\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/link */ \"./node_modules/next/link.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var validator__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! validator */ \"./node_modules/validator/index.js\");\n/* harmony import */ var validator__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(validator__WEBPACK_IMPORTED_MODULE_7__);\n/* harmony import */ var _components_Layout__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/Layout */ \"./components/Layout.js\");\n\n\n\nvar _this = undefined;\n\nvar _s = $RefreshSig$();\n\n\n\n\nvar Register = function() {\n    _s();\n    var ref = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)({\n        name: \"\",\n        email: \"\",\n        password: \"\"\n    }), user = ref[0], setUser = ref[1];\n    var ref1 = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(\"\"), error = ref1[0], setError = ref1[1];\n    var name = user.name, email = user.email, password = user.password;\n    var handleChange = function(e) {\n        setUser((0,_swc_helpers_src_object_spread_props_mjs__WEBPACK_IMPORTED_MODULE_4__[\"default\"])((0,_swc_helpers_src_object_spread_mjs__WEBPACK_IMPORTED_MODULE_5__[\"default\"])({}, user), (0,_swc_helpers_src_define_property_mjs__WEBPACK_IMPORTED_MODULE_6__[\"default\"])({}, e.target.name, e.target.value)));\n    };\n    var handleSubmit = function(e) {\n        e.preventDefault();\n        console.table({\n            name: name,\n            email: email,\n            password: password\n        });\n        if (name.length <= 0) {\n            return setError(\"The full name field is required\");\n        }\n        if (!validator__WEBPACK_IMPORTED_MODULE_7___default().isEmail(email)) {\n            return setError(\"The email you input is invalid\");\n        }\n        if (password.length < 6) {\n            return setError(\"The password you entered should contain 6 or more characters\");\n        }\n        setError(\"\");\n        setUser({\n            name: \"\",\n            email: \"\",\n            password: \"\"\n        });\n    };\n    var registerForm = function() {\n        return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"form\", {\n            onSubmit: handleSubmit,\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"input-group mb-3\",\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                            className: \"input-group-text\",\n                            id: \"username\",\n                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"svg\", {\n                                className: \"icon-input\",\n                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"use\", {\n                                    href: \"/static/icons/sprite.svg#icon-add-user\"\n                                }, void 0, false, {\n                                    fileName: \"/Users/rupaklama/Desktop/job-hub-top/pages/register.js\",\n                                    lineNumber: 48,\n                                    columnNumber: 13\n                                }, _this)\n                            }, void 0, false, {\n                                fileName: \"/Users/rupaklama/Desktop/job-hub-top/pages/register.js\",\n                                lineNumber: 47,\n                                columnNumber: 11\n                            }, _this)\n                        }, void 0, false, {\n                            fileName: \"/Users/rupaklama/Desktop/job-hub-top/pages/register.js\",\n                            lineNumber: 46,\n                            columnNumber: 9\n                        }, _this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                            name: \"name\",\n                            type: \"text\",\n                            className: \"form-control\",\n                            placeholder: \"Full Name\",\n                            \"aria-label\": \"Username\",\n                            \"aria-describedby\": \"username\",\n                            value: name,\n                            onChange: handleChange\n                        }, void 0, false, {\n                            fileName: \"/Users/rupaklama/Desktop/job-hub-top/pages/register.js\",\n                            lineNumber: 51,\n                            columnNumber: 9\n                        }, _this)\n                    ]\n                }, void 0, true, {\n                    fileName: \"/Users/rupaklama/Desktop/job-hub-top/pages/register.js\",\n                    lineNumber: 45,\n                    columnNumber: 7\n                }, _this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"input-group mb-3\",\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                            className: \"input-group-text\",\n                            id: \"email\",\n                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"svg\", {\n                                className: \"icon-input\",\n                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"use\", {\n                                    href: \"/static/icons/sprite.svg#icon-mail\"\n                                }, void 0, false, {\n                                    fileName: \"/Users/rupaklama/Desktop/job-hub-top/pages/register.js\",\n                                    lineNumber: 66,\n                                    columnNumber: 13\n                                }, _this)\n                            }, void 0, false, {\n                                fileName: \"/Users/rupaklama/Desktop/job-hub-top/pages/register.js\",\n                                lineNumber: 65,\n                                columnNumber: 11\n                            }, _this)\n                        }, void 0, false, {\n                            fileName: \"/Users/rupaklama/Desktop/job-hub-top/pages/register.js\",\n                            lineNumber: 64,\n                            columnNumber: 9\n                        }, _this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                            name: \"email\",\n                            type: \"email\",\n                            className: \"form-control\",\n                            placeholder: \"email\",\n                            \"aria-label\": \"email\",\n                            \"aria-describedby\": \"email\",\n                            value: email.toLowerCase().trim(),\n                            onChange: handleChange\n                        }, void 0, false, {\n                            fileName: \"/Users/rupaklama/Desktop/job-hub-top/pages/register.js\",\n                            lineNumber: 70,\n                            columnNumber: 9\n                        }, _this)\n                    ]\n                }, void 0, true, {\n                    fileName: \"/Users/rupaklama/Desktop/job-hub-top/pages/register.js\",\n                    lineNumber: 63,\n                    columnNumber: 7\n                }, _this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"input-group mb-3\",\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                            className: \"input-group-text\",\n                            id: \"email\",\n                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"svg\", {\n                                className: \"icon-input\",\n                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"use\", {\n                                    href: \"/static/icons/sprite.svg#icon-lock\"\n                                }, void 0, false, {\n                                    fileName: \"/Users/rupaklama/Desktop/job-hub-top/pages/register.js\",\n                                    lineNumber: 85,\n                                    columnNumber: 13\n                                }, _this)\n                            }, void 0, false, {\n                                fileName: \"/Users/rupaklama/Desktop/job-hub-top/pages/register.js\",\n                                lineNumber: 84,\n                                columnNumber: 11\n                            }, _this)\n                        }, void 0, false, {\n                            fileName: \"/Users/rupaklama/Desktop/job-hub-top/pages/register.js\",\n                            lineNumber: 83,\n                            columnNumber: 9\n                        }, _this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                            name: \"password\",\n                            type: \"password\",\n                            className: \"form-control\",\n                            placeholder: \"password\",\n                            \"aria-label\": \"password\",\n                            \"aria-describedby\": \"password\",\n                            value: password,\n                            onChange: handleChange\n                        }, void 0, false, {\n                            fileName: \"/Users/rupaklama/Desktop/job-hub-top/pages/register.js\",\n                            lineNumber: 89,\n                            columnNumber: 9\n                        }, _this)\n                    ]\n                }, void 0, true, {\n                    fileName: \"/Users/rupaklama/Desktop/job-hub-top/pages/register.js\",\n                    lineNumber: 82,\n                    columnNumber: 7\n                }, _this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"input-group mb-4\",\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                        type: \"submit\",\n                        className: \"btn btn-outline-success btn-submit\",\n                        children: \"Signup\"\n                    }, void 0, false, {\n                        fileName: \"/Users/rupaklama/Desktop/job-hub-top/pages/register.js\",\n                        lineNumber: 102,\n                        columnNumber: 9\n                    }, _this)\n                }, void 0, false, {\n                    fileName: \"/Users/rupaklama/Desktop/job-hub-top/pages/register.js\",\n                    lineNumber: 101,\n                    columnNumber: 7\n                }, _this)\n            ]\n        }, void 0, true, {\n            fileName: \"/Users/rupaklama/Desktop/job-hub-top/pages/register.js\",\n            lineNumber: 44,\n            columnNumber: 5\n        }, _this);\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Layout__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            className: \"col-md-6 offset-md-3 text-center\",\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                    children: \"Job Hub Top\"\n                }, void 0, false, {\n                    fileName: \"/Users/rupaklama/Desktop/job-hub-top/pages/register.js\",\n                    lineNumber: 112,\n                    columnNumber: 9\n                }, _this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h3\", {\n                    children: \"Signup to discover best places to look for Jobs and much more!\"\n                }, void 0, false, {\n                    fileName: \"/Users/rupaklama/Desktop/job-hub-top/pages/register.js\",\n                    lineNumber: 113,\n                    columnNumber: 9\n                }, _this),\n                registerForm(),\n                error && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                    className: \"text-danger\",\n                    children: error\n                }, void 0, false, {\n                    fileName: \"/Users/rupaklama/Desktop/job-hub-top/pages/register.js\",\n                    lineNumber: 115,\n                    columnNumber: 19\n                }, _this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"hr\", {}, void 0, false, {\n                    fileName: \"/Users/rupaklama/Desktop/job-hub-top/pages/register.js\",\n                    lineNumber: 116,\n                    columnNumber: 9\n                }, _this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                    children: \"Already have an account?\"\n                }, void 0, false, {\n                    fileName: \"/Users/rupaklama/Desktop/job-hub-top/pages/register.js\",\n                    lineNumber: 117,\n                    columnNumber: 9\n                }, _this),\n                \" \",\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_1___default()), {\n                    href: \"/login\",\n                    children: \"Login\"\n                }, void 0, false, {\n                    fileName: \"/Users/rupaklama/Desktop/job-hub-top/pages/register.js\",\n                    lineNumber: 117,\n                    columnNumber: 47\n                }, _this)\n            ]\n        }, void 0, true, {\n            fileName: \"/Users/rupaklama/Desktop/job-hub-top/pages/register.js\",\n            lineNumber: 111,\n            columnNumber: 7\n        }, _this)\n    }, void 0, false, {\n        fileName: \"/Users/rupaklama/Desktop/job-hub-top/pages/register.js\",\n        lineNumber: 110,\n        columnNumber: 5\n    }, _this);\n};\n_s(Register, \"G6OGy5P7Xqhj96FmnzmOy4ZDreQ=\");\n_c = Register;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Register);\nvar _c;\n$RefreshReg$(_c, \"Register\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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OztpQ0FDdEI7Ozs7Ozt5QkFDRTs4QkFFTiw4REFBQ2EsS0FBRztvQkFBQ0MsU0FBUyxFQUFDLGtCQUFrQjs4QkFDL0IsNEVBQUNjLFFBQU07d0JBQUNQLElBQUksRUFBQyxRQUFRO3dCQUFDUCxTQUFTLEVBQUMsb0NBQW9DO2tDQUFDLFFBRXJFOzs7Ozs2QkFBUzs7Ozs7eUJBQ0w7Ozs7OztpQkFDRDtLQUNSO0lBRUQscUJBQ0UsOERBQUN2QiwwREFBTTtrQkFDTCw0RUFBQ3NCLEtBQUc7WUFBQ0MsU0FBUyxFQUFDLGtDQUFrQzs7OEJBQy9DLDhEQUFDZSxJQUFFOzhCQUFDLGFBQVc7Ozs7O3lCQUFLOzhCQUNwQiw4REFBQ0MsSUFBRTs4QkFBQyxnRUFBOEQ7Ozs7O3lCQUFLO2dCQUN0RXBCLFlBQVksRUFBRTtnQkFDZFosS0FBSyxrQkFBSSw4REFBQ2lDLEdBQUM7b0JBQUNqQixTQUFTLEVBQUMsYUFBYTs4QkFBRWhCLEtBQUs7Ozs7O3lCQUFLOzhCQUNoRCw4REFBQ2tDLElBQUU7Ozs7eUJBQUc7OEJBQ04sOERBQUNqQixNQUFJOzhCQUFDLDBCQUF3Qjs7Ozs7eUJBQU87Z0JBQUEsR0FBQzs4QkFBQSw4REFBQzNCLGtEQUFJO29CQUFDK0IsSUFBSSxFQUFDLFFBQVE7OEJBQUMsT0FBSzs7Ozs7eUJBQU87Ozs7OztpQkFDbEU7Ozs7O2FBQ0MsQ0FDVDtBQUNKLENBQUM7R0FsSEszQixRQUFRO0FBQVJBLEtBQUFBLFFBQVE7QUFvSGQsK0RBQWVBLFFBQVEsRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9wYWdlcy9yZWdpc3Rlci5qcz9hMDk3Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBMaW5rIGZyb20gXCJuZXh0L2xpbmtcIjtcbmltcG9ydCB7IHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgdmFsaWRhdG9yIGZyb20gXCJ2YWxpZGF0b3JcIjtcblxuaW1wb3J0IExheW91dCBmcm9tIFwiLi4vY29tcG9uZW50cy9MYXlvdXRcIjtcblxuY29uc3QgUmVnaXN0ZXIgPSAoKSA9PiB7XG4gIGNvbnN0IFt1c2VyLCBzZXRVc2VyXSA9IHVzZVN0YXRlKHtcbiAgICBuYW1lOiBcIlwiLFxuICAgIGVtYWlsOiBcIlwiLFxuICAgIHBhc3N3b3JkOiBcIlwiLFxuICB9KTtcblxuICBjb25zdCBbZXJyb3IsIHNldEVycm9yXSA9IHVzZVN0YXRlKFwiXCIpO1xuXG4gIGNvbnN0IHsgbmFtZSwgZW1haWwsIHBhc3N3b3JkIH0gPSB1c2VyO1xuXG4gIGNvbnN0IGhhbmRsZUNoYW5nZSA9IChlKSA9PiB7XG4gICAgc2V0VXNlcih7IC4uLnVzZXIsIFtlLnRhcmdldC5uYW1lXTogZS50YXJnZXQudmFsdWUgfSk7XG4gIH07XG5cbiAgY29uc3QgaGFuZGxlU3VibWl0ID0gKGUpID0+IHtcbiAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgY29uc29sZS50YWJsZSh7IG5hbWUsIGVtYWlsLCBwYXNzd29yZCB9KTtcblxuICAgIGlmIChuYW1lLmxlbmd0aCA8PSAwKSB7XG4gICAgICByZXR1cm4gc2V0RXJyb3IoXCJUaGUgZnVsbCBuYW1lIGZpZWxkIGlzIHJlcXVpcmVkXCIpO1xuICAgIH1cblxuICAgIGlmICghdmFsaWRhdG9yLmlzRW1haWwoZW1haWwpKSB7XG4gICAgICByZXR1cm4gc2V0RXJyb3IoXCJUaGUgZW1haWwgeW91IGlucHV0IGlzIGludmFsaWRcIik7XG4gICAgfVxuICAgIGlmIChwYXNzd29yZC5sZW5ndGggPCA2KSB7XG4gICAgICByZXR1cm4gc2V0RXJyb3IoXG4gICAgICAgIFwiVGhlIHBhc3N3b3JkIHlvdSBlbnRlcmVkIHNob3VsZCBjb250YWluIDYgb3IgbW9yZSBjaGFyYWN0ZXJzXCJcbiAgICAgICk7XG4gICAgfVxuXG4gICAgc2V0RXJyb3IoXCJcIik7XG4gICAgc2V0VXNlcih7IG5hbWU6IFwiXCIsIGVtYWlsOiBcIlwiLCBwYXNzd29yZDogXCJcIiB9KTtcbiAgfTtcblxuICBjb25zdCByZWdpc3RlckZvcm0gPSAoKSA9PiAoXG4gICAgPGZvcm0gb25TdWJtaXQ9e2hhbmRsZVN1Ym1pdH0+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImlucHV0LWdyb3VwIG1iLTNcIj5cbiAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwiaW5wdXQtZ3JvdXAtdGV4dFwiIGlkPVwidXNlcm5hbWVcIj5cbiAgICAgICAgICA8c3ZnIGNsYXNzTmFtZT1cImljb24taW5wdXRcIj5cbiAgICAgICAgICAgIDx1c2UgaHJlZj1cIi9zdGF0aWMvaWNvbnMvc3ByaXRlLnN2ZyNpY29uLWFkZC11c2VyXCIgLz5cbiAgICAgICAgICA8L3N2Zz5cbiAgICAgICAgPC9zcGFuPlxuICAgICAgICA8aW5wdXRcbiAgICAgICAgICBuYW1lPVwibmFtZVwiXG4gICAgICAgICAgdHlwZT1cInRleHRcIlxuICAgICAgICAgIGNsYXNzTmFtZT1cImZvcm0tY29udHJvbFwiXG4gICAgICAgICAgcGxhY2Vob2xkZXI9XCJGdWxsIE5hbWVcIlxuICAgICAgICAgIGFyaWEtbGFiZWw9XCJVc2VybmFtZVwiXG4gICAgICAgICAgYXJpYS1kZXNjcmliZWRieT1cInVzZXJuYW1lXCJcbiAgICAgICAgICB2YWx1ZT17bmFtZX1cbiAgICAgICAgICBvbkNoYW5nZT17aGFuZGxlQ2hhbmdlfVxuICAgICAgICAvPlxuICAgICAgPC9kaXY+XG5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiaW5wdXQtZ3JvdXAgbWItM1wiPlxuICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJpbnB1dC1ncm91cC10ZXh0XCIgaWQ9XCJlbWFpbFwiPlxuICAgICAgICAgIDxzdmcgY2xhc3NOYW1lPVwiaWNvbi1pbnB1dFwiPlxuICAgICAgICAgICAgPHVzZSBocmVmPVwiL3N0YXRpYy9pY29ucy9zcHJpdGUuc3ZnI2ljb24tbWFpbFwiIC8+XG4gICAgICAgICAgPC9zdmc+XG4gICAgICAgIDwvc3Bhbj5cblxuICAgICAgICA8aW5wdXRcbiAgICAgICAgICBuYW1lPVwiZW1haWxcIlxuICAgICAgICAgIHR5cGU9XCJlbWFpbFwiXG4gICAgICAgICAgY2xhc3NOYW1lPVwiZm9ybS1jb250cm9sXCJcbiAgICAgICAgICBwbGFjZWhvbGRlcj1cImVtYWlsXCJcbiAgICAgICAgICBhcmlhLWxhYmVsPVwiZW1haWxcIlxuICAgICAgICAgIGFyaWEtZGVzY3JpYmVkYnk9XCJlbWFpbFwiXG4gICAgICAgICAgdmFsdWU9e2VtYWlsLnRvTG93ZXJDYXNlKCkudHJpbSgpfVxuICAgICAgICAgIG9uQ2hhbmdlPXtoYW5kbGVDaGFuZ2V9XG4gICAgICAgIC8+XG4gICAgICA8L2Rpdj5cblxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJpbnB1dC1ncm91cCBtYi0zXCI+XG4gICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cImlucHV0LWdyb3VwLXRleHRcIiBpZD1cImVtYWlsXCI+XG4gICAgICAgICAgPHN2ZyBjbGFzc05hbWU9XCJpY29uLWlucHV0XCI+XG4gICAgICAgICAgICA8dXNlIGhyZWY9XCIvc3RhdGljL2ljb25zL3Nwcml0ZS5zdmcjaWNvbi1sb2NrXCIgLz5cbiAgICAgICAgICA8L3N2Zz5cbiAgICAgICAgPC9zcGFuPlxuXG4gICAgICAgIDxpbnB1dFxuICAgICAgICAgIG5hbWU9XCJwYXNzd29yZFwiXG4gICAgICAgICAgdHlwZT1cInBhc3N3b3JkXCJcbiAgICAgICAgICBjbGFzc05hbWU9XCJmb3JtLWNvbnRyb2xcIlxuICAgICAgICAgIHBsYWNlaG9sZGVyPVwicGFzc3dvcmRcIlxuICAgICAgICAgIGFyaWEtbGFiZWw9XCJwYXNzd29yZFwiXG4gICAgICAgICAgYXJpYS1kZXNjcmliZWRieT1cInBhc3N3b3JkXCJcbiAgICAgICAgICB2YWx1ZT17cGFzc3dvcmR9XG4gICAgICAgICAgb25DaGFuZ2U9e2hhbmRsZUNoYW5nZX1cbiAgICAgICAgLz5cbiAgICAgIDwvZGl2PlxuXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImlucHV0LWdyb3VwIG1iLTRcIj5cbiAgICAgICAgPGJ1dHRvbiB0eXBlPVwic3VibWl0XCIgY2xhc3NOYW1lPVwiYnRuIGJ0bi1vdXRsaW5lLXN1Y2Nlc3MgYnRuLXN1Ym1pdFwiPlxuICAgICAgICAgIFNpZ251cFxuICAgICAgICA8L2J1dHRvbj5cbiAgICAgIDwvZGl2PlxuICAgIDwvZm9ybT5cbiAgKTtcblxuICByZXR1cm4gKFxuICAgIDxMYXlvdXQ+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbC1tZC02IG9mZnNldC1tZC0zIHRleHQtY2VudGVyXCI+XG4gICAgICAgIDxoMT5Kb2IgSHViIFRvcDwvaDE+XG4gICAgICAgIDxoMz5TaWdudXAgdG8gZGlzY292ZXIgYmVzdCBwbGFjZXMgdG8gbG9vayBmb3IgSm9icyBhbmQgbXVjaCBtb3JlITwvaDM+XG4gICAgICAgIHtyZWdpc3RlckZvcm0oKX1cbiAgICAgICAge2Vycm9yICYmIDxwIGNsYXNzTmFtZT1cInRleHQtZGFuZ2VyXCI+e2Vycm9yfTwvcD59XG4gICAgICAgIDxociAvPlxuICAgICAgICA8c3Bhbj5BbHJlYWR5IGhhdmUgYW4gYWNjb3VudD88L3NwYW4+IDxMaW5rIGhyZWY9XCIvbG9naW5cIj5Mb2dpbjwvTGluaz5cbiAgICAgIDwvZGl2PlxuICAgIDwvTGF5b3V0PlxuICApO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgUmVnaXN0ZXI7XG4iXSwibmFtZXMiOlsiTGluayIsInVzZVN0YXRlIiwidmFsaWRhdG9yIiwiTGF5b3V0IiwiUmVnaXN0ZXIiLCJuYW1lIiwiZW1haWwiLCJwYXNzd29yZCIsInVzZXIiLCJzZXRVc2VyIiwiZXJyb3IiLCJzZXRFcnJvciIsImhhbmRsZUNoYW5nZSIsImUiLCJ0YXJnZXQiLCJ2YWx1ZSIsImhhbmRsZVN1Ym1pdCIsInByZXZlbnREZWZhdWx0IiwiY29uc29sZSIsInRhYmxlIiwibGVuZ3RoIiwiaXNFbWFpbCIsInJlZ2lzdGVyRm9ybSIsImZvcm0iLCJvblN1Ym1pdCIsImRpdiIsImNsYXNzTmFtZSIsInNwYW4iLCJpZCIsInN2ZyIsInVzZSIsImhyZWYiLCJpbnB1dCIsInR5cGUiLCJwbGFjZWhvbGRlciIsImFyaWEtbGFiZWwiLCJhcmlhLWRlc2NyaWJlZGJ5Iiwib25DaGFuZ2UiLCJ0b0xvd2VyQ2FzZSIsInRyaW0iLCJidXR0b24iLCJoMSIsImgzIiwicCIsImhyIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/register.js\n"));

/***/ })

});