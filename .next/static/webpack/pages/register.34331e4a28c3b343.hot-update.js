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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _swc_helpers_src_define_property_mjs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @swc/helpers/src/_define_property.mjs */ \"./node_modules/@swc/helpers/src/_define_property.mjs\");\n/* harmony import */ var _swc_helpers_src_object_spread_mjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @swc/helpers/src/_object_spread.mjs */ \"./node_modules/@swc/helpers/src/_object_spread.mjs\");\n/* harmony import */ var _swc_helpers_src_object_spread_props_mjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @swc/helpers/src/_object_spread_props.mjs */ \"./node_modules/@swc/helpers/src/_object_spread_props.mjs\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var validator__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! validator */ \"./node_modules/validator/index.js\");\n/* harmony import */ var validator__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(validator__WEBPACK_IMPORTED_MODULE_6__);\n/* harmony import */ var _components_Layout__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/Layout */ \"./components/Layout.js\");\n\n\n\nvar _this = undefined;\n\nvar _s = $RefreshSig$();\n\n\n\nvar Register = function() {\n    _s();\n    var ref = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)({\n        name: \"\",\n        email: \"\",\n        password: \"\"\n    }), user = ref[0], setUser = ref[1];\n    var ref1 = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"\"), error = ref1[0], setError = ref1[1];\n    var name = user.name, email = user.email, password = user.password;\n    var handleChange = function(e) {\n        setUser((0,_swc_helpers_src_object_spread_props_mjs__WEBPACK_IMPORTED_MODULE_3__[\"default\"])((0,_swc_helpers_src_object_spread_mjs__WEBPACK_IMPORTED_MODULE_4__[\"default\"])({}, user), (0,_swc_helpers_src_define_property_mjs__WEBPACK_IMPORTED_MODULE_5__[\"default\"])({}, e.target.name, e.target.value)));\n    };\n    var handleSubmit = function(e) {\n        e.preventDefault();\n        console.table({\n            name: name,\n            email: email,\n            password: password\n        });\n        if (name.length <= 0) {\n            return setError(\"The username is required\");\n        }\n        if (!validator__WEBPACK_IMPORTED_MODULE_6___default().isEmail(email)) {\n            return setError(\"The email you input is invalid\");\n        }\n        if (password.length < 6) {\n            return setError(\"The password you entered should contain 6 or more characters\");\n        }\n        setError(\"\");\n        setUser({\n            name: \"\",\n            email: \"\",\n            password: \"\"\n        });\n    };\n    var registerForm = function() {\n        return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"form\", {\n            onSubmit: handleSubmit,\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"input-group mb-3\",\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                            className: \"input-group-text\",\n                            id: \"username\",\n                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"svg\", {\n                                className: \"icon-input\",\n                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"use\", {\n                                    href: \"/static/icons/sprite.svg#icon-add-user\"\n                                }, void 0, false, {\n                                    fileName: \"/Users/rupaklama/Desktop/job-hub-top/pages/register.js\",\n                                    lineNumber: 45,\n                                    columnNumber: 13\n                                }, _this)\n                            }, void 0, false, {\n                                fileName: \"/Users/rupaklama/Desktop/job-hub-top/pages/register.js\",\n                                lineNumber: 44,\n                                columnNumber: 11\n                            }, _this)\n                        }, void 0, false, {\n                            fileName: \"/Users/rupaklama/Desktop/job-hub-top/pages/register.js\",\n                            lineNumber: 43,\n                            columnNumber: 9\n                        }, _this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                            name: \"name\",\n                            type: \"text\",\n                            className: \"form-control\",\n                            placeholder: \"Username\",\n                            \"aria-label\": \"Username\",\n                            \"aria-describedby\": \"username\",\n                            value: name,\n                            onChange: handleChange\n                        }, void 0, false, {\n                            fileName: \"/Users/rupaklama/Desktop/job-hub-top/pages/register.js\",\n                            lineNumber: 48,\n                            columnNumber: 9\n                        }, _this)\n                    ]\n                }, void 0, true, {\n                    fileName: \"/Users/rupaklama/Desktop/job-hub-top/pages/register.js\",\n                    lineNumber: 42,\n                    columnNumber: 7\n                }, _this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"input-group mb-3\",\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                            className: \"input-group-text\",\n                            id: \"email\",\n                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"svg\", {\n                                className: \"icon-input\",\n                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"use\", {\n                                    href: \"/static/icons/sprite.svg#icon-mail\"\n                                }, void 0, false, {\n                                    fileName: \"/Users/rupaklama/Desktop/job-hub-top/pages/register.js\",\n                                    lineNumber: 63,\n                                    columnNumber: 13\n                                }, _this)\n                            }, void 0, false, {\n                                fileName: \"/Users/rupaklama/Desktop/job-hub-top/pages/register.js\",\n                                lineNumber: 62,\n                                columnNumber: 11\n                            }, _this)\n                        }, void 0, false, {\n                            fileName: \"/Users/rupaklama/Desktop/job-hub-top/pages/register.js\",\n                            lineNumber: 61,\n                            columnNumber: 9\n                        }, _this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                            name: \"email\",\n                            type: \"email\",\n                            className: \"form-control\",\n                            placeholder: \"email\",\n                            \"aria-label\": \"email\",\n                            \"aria-describedby\": \"email\",\n                            value: email.toLowerCase().trim(),\n                            onChange: handleChange\n                        }, void 0, false, {\n                            fileName: \"/Users/rupaklama/Desktop/job-hub-top/pages/register.js\",\n                            lineNumber: 67,\n                            columnNumber: 9\n                        }, _this)\n                    ]\n                }, void 0, true, {\n                    fileName: \"/Users/rupaklama/Desktop/job-hub-top/pages/register.js\",\n                    lineNumber: 60,\n                    columnNumber: 7\n                }, _this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"input-group mb-3\",\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                            className: \"input-group-text\",\n                            id: \"email\",\n                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"svg\", {\n                                className: \"icon-input\",\n                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"use\", {\n                                    href: \"/static/icons/sprite.svg#icon-lock\"\n                                }, void 0, false, {\n                                    fileName: \"/Users/rupaklama/Desktop/job-hub-top/pages/register.js\",\n                                    lineNumber: 82,\n                                    columnNumber: 13\n                                }, _this)\n                            }, void 0, false, {\n                                fileName: \"/Users/rupaklama/Desktop/job-hub-top/pages/register.js\",\n                                lineNumber: 81,\n                                columnNumber: 11\n                            }, _this)\n                        }, void 0, false, {\n                            fileName: \"/Users/rupaklama/Desktop/job-hub-top/pages/register.js\",\n                            lineNumber: 80,\n                            columnNumber: 9\n                        }, _this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                            name: \"password\",\n                            type: \"password\",\n                            className: \"form-control\",\n                            placeholder: \"password\",\n                            \"aria-label\": \"password\",\n                            \"aria-describedby\": \"password\",\n                            value: password,\n                            onChange: handleChange\n                        }, void 0, false, {\n                            fileName: \"/Users/rupaklama/Desktop/job-hub-top/pages/register.js\",\n                            lineNumber: 86,\n                            columnNumber: 9\n                        }, _this)\n                    ]\n                }, void 0, true, {\n                    fileName: \"/Users/rupaklama/Desktop/job-hub-top/pages/register.js\",\n                    lineNumber: 79,\n                    columnNumber: 7\n                }, _this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"input-group mb-3\",\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                        type: \"submit\",\n                        className: \"btn btn-outline-success btn-submit\",\n                        children: \"Signup\"\n                    }, void 0, false, {\n                        fileName: \"/Users/rupaklama/Desktop/job-hub-top/pages/register.js\",\n                        lineNumber: 99,\n                        columnNumber: 9\n                    }, _this)\n                }, void 0, false, {\n                    fileName: \"/Users/rupaklama/Desktop/job-hub-top/pages/register.js\",\n                    lineNumber: 98,\n                    columnNumber: 7\n                }, _this)\n            ]\n        }, void 0, true, {\n            fileName: \"/Users/rupaklama/Desktop/job-hub-top/pages/register.js\",\n            lineNumber: 41,\n            columnNumber: 5\n        }, _this);\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Layout__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            className: \"col-md-6 offset-md-3 text-center\",\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                    children: \"Job Hub Top\"\n                }, void 0, false, {\n                    fileName: \"/Users/rupaklama/Desktop/job-hub-top/pages/register.js\",\n                    lineNumber: 109,\n                    columnNumber: 9\n                }, _this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h3\", {\n                    children: \"Signup to discover best places to look for Jobs and much more!\"\n                }, void 0, false, {\n                    fileName: \"/Users/rupaklama/Desktop/job-hub-top/pages/register.js\",\n                    lineNumber: 110,\n                    columnNumber: 9\n                }, _this),\n                registerForm(),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"hr\", {}, void 0, false, {\n                    fileName: \"/Users/rupaklama/Desktop/job-hub-top/pages/register.js\",\n                    lineNumber: 114,\n                    columnNumber: 9\n                }, _this),\n                error && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                    className: \"text-danger\",\n                    children: error\n                }, void 0, false, {\n                    fileName: \"/Users/rupaklama/Desktop/job-hub-top/pages/register.js\",\n                    lineNumber: 115,\n                    columnNumber: 19\n                }, _this)\n            ]\n        }, void 0, true, {\n            fileName: \"/Users/rupaklama/Desktop/job-hub-top/pages/register.js\",\n            lineNumber: 108,\n            columnNumber: 7\n        }, _this)\n    }, void 0, false, {\n        fileName: \"/Users/rupaklama/Desktop/job-hub-top/pages/register.js\",\n        lineNumber: 107,\n        columnNumber: 5\n    }, _this);\n};\n_s(Register, \"G6OGy5P7Xqhj96FmnzmOy4ZDreQ=\");\n_c = Register;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Register);\nvar _c;\n$RefreshReg$(_c, \"Register\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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Q3RCOzs7Ozs7eUJBQ0U7OEJBRU4sOERBQUNhLEtBQUc7b0JBQUNDLFNBQVMsRUFBQyxrQkFBa0I7OEJBQy9CLDRFQUFDYyxRQUFNO3dCQUFDUCxJQUFJLEVBQUMsUUFBUTt3QkFBQ1AsU0FBUyxFQUFDLG9DQUFvQztrQ0FBQyxRQUVyRTs7Ozs7NkJBQVM7Ozs7O3lCQUNMOzs7Ozs7aUJBQ0Q7S0FDUjtJQUVELHFCQUNFLDhEQUFDdkIsMERBQU07a0JBQ0wsNEVBQUNzQixLQUFHO1lBQUNDLFNBQVMsRUFBQyxrQ0FBa0M7OzhCQUMvQyw4REFBQ2UsSUFBRTs4QkFBQyxhQUFXOzs7Ozt5QkFBSzs4QkFDcEIsOERBQUNDLElBQUU7OEJBQUMsZ0VBQThEOzs7Ozt5QkFBSztnQkFFdEVwQixZQUFZLEVBQUU7OEJBRWYsOERBQUNxQixJQUFFOzs7O3lCQUFHO2dCQUNMakMsS0FBSyxrQkFBSSw4REFBQ2tDLEdBQUM7b0JBQUNsQixTQUFTLEVBQUMsYUFBYTs4QkFBRWhCLEtBQUs7Ozs7O3lCQUFLOzs7Ozs7aUJBQzVDOzs7OzthQUNDLENBQ1Q7QUFDSixDQUFDO0dBakhLTixRQUFRO0FBQVJBLEtBQUFBLFFBQVE7QUFtSGQsK0RBQWVBLFFBQVEsRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9wYWdlcy9yZWdpc3Rlci5qcz9hMDk3Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgdmFsaWRhdG9yIGZyb20gXCJ2YWxpZGF0b3JcIjtcblxuaW1wb3J0IExheW91dCBmcm9tIFwiLi4vY29tcG9uZW50cy9MYXlvdXRcIjtcblxuY29uc3QgUmVnaXN0ZXIgPSAoKSA9PiB7XG4gIGNvbnN0IFt1c2VyLCBzZXRVc2VyXSA9IHVzZVN0YXRlKHtcbiAgICBuYW1lOiBcIlwiLFxuICAgIGVtYWlsOiBcIlwiLFxuICAgIHBhc3N3b3JkOiBcIlwiLFxuICB9KTtcblxuICBjb25zdCBbZXJyb3IsIHNldEVycm9yXSA9IHVzZVN0YXRlKFwiXCIpO1xuXG4gIGNvbnN0IHsgbmFtZSwgZW1haWwsIHBhc3N3b3JkIH0gPSB1c2VyO1xuXG4gIGNvbnN0IGhhbmRsZUNoYW5nZSA9IGUgPT4ge1xuICAgIHNldFVzZXIoeyAuLi51c2VyLCBbZS50YXJnZXQubmFtZV06IGUudGFyZ2V0LnZhbHVlIH0pO1xuICB9O1xuXG4gIGNvbnN0IGhhbmRsZVN1Ym1pdCA9IGUgPT4ge1xuICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICBjb25zb2xlLnRhYmxlKHsgbmFtZSwgZW1haWwsIHBhc3N3b3JkIH0pO1xuXG4gICAgaWYgKG5hbWUubGVuZ3RoIDw9IDApIHtcbiAgICAgIHJldHVybiBzZXRFcnJvcihcIlRoZSB1c2VybmFtZSBpcyByZXF1aXJlZFwiKTtcbiAgICB9XG5cbiAgICBpZiAoIXZhbGlkYXRvci5pc0VtYWlsKGVtYWlsKSkge1xuICAgICAgcmV0dXJuIHNldEVycm9yKFwiVGhlIGVtYWlsIHlvdSBpbnB1dCBpcyBpbnZhbGlkXCIpO1xuICAgIH1cbiAgICBpZiAocGFzc3dvcmQubGVuZ3RoIDwgNikge1xuICAgICAgcmV0dXJuIHNldEVycm9yKFwiVGhlIHBhc3N3b3JkIHlvdSBlbnRlcmVkIHNob3VsZCBjb250YWluIDYgb3IgbW9yZSBjaGFyYWN0ZXJzXCIpO1xuICAgIH1cblxuICAgIHNldEVycm9yKFwiXCIpO1xuICAgIHNldFVzZXIoeyBuYW1lOiBcIlwiLCBlbWFpbDogXCJcIiwgcGFzc3dvcmQ6IFwiXCIgfSk7XG4gIH07XG5cbiAgY29uc3QgcmVnaXN0ZXJGb3JtID0gKCkgPT4gKFxuICAgIDxmb3JtIG9uU3VibWl0PXtoYW5kbGVTdWJtaXR9PlxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJpbnB1dC1ncm91cCBtYi0zXCI+XG4gICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cImlucHV0LWdyb3VwLXRleHRcIiBpZD1cInVzZXJuYW1lXCI+XG4gICAgICAgICAgPHN2ZyBjbGFzc05hbWU9XCJpY29uLWlucHV0XCI+XG4gICAgICAgICAgICA8dXNlIGhyZWY9XCIvc3RhdGljL2ljb25zL3Nwcml0ZS5zdmcjaWNvbi1hZGQtdXNlclwiIC8+XG4gICAgICAgICAgPC9zdmc+XG4gICAgICAgIDwvc3Bhbj5cbiAgICAgICAgPGlucHV0XG4gICAgICAgICAgbmFtZT1cIm5hbWVcIlxuICAgICAgICAgIHR5cGU9XCJ0ZXh0XCJcbiAgICAgICAgICBjbGFzc05hbWU9XCJmb3JtLWNvbnRyb2xcIlxuICAgICAgICAgIHBsYWNlaG9sZGVyPVwiVXNlcm5hbWVcIlxuICAgICAgICAgIGFyaWEtbGFiZWw9XCJVc2VybmFtZVwiXG4gICAgICAgICAgYXJpYS1kZXNjcmliZWRieT1cInVzZXJuYW1lXCJcbiAgICAgICAgICB2YWx1ZT17bmFtZX1cbiAgICAgICAgICBvbkNoYW5nZT17aGFuZGxlQ2hhbmdlfVxuICAgICAgICAvPlxuICAgICAgPC9kaXY+XG5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiaW5wdXQtZ3JvdXAgbWItM1wiPlxuICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJpbnB1dC1ncm91cC10ZXh0XCIgaWQ9XCJlbWFpbFwiPlxuICAgICAgICAgIDxzdmcgY2xhc3NOYW1lPVwiaWNvbi1pbnB1dFwiPlxuICAgICAgICAgICAgPHVzZSBocmVmPVwiL3N0YXRpYy9pY29ucy9zcHJpdGUuc3ZnI2ljb24tbWFpbFwiIC8+XG4gICAgICAgICAgPC9zdmc+XG4gICAgICAgIDwvc3Bhbj5cblxuICAgICAgICA8aW5wdXRcbiAgICAgICAgICBuYW1lPVwiZW1haWxcIlxuICAgICAgICAgIHR5cGU9XCJlbWFpbFwiXG4gICAgICAgICAgY2xhc3NOYW1lPVwiZm9ybS1jb250cm9sXCJcbiAgICAgICAgICBwbGFjZWhvbGRlcj1cImVtYWlsXCJcbiAgICAgICAgICBhcmlhLWxhYmVsPVwiZW1haWxcIlxuICAgICAgICAgIGFyaWEtZGVzY3JpYmVkYnk9XCJlbWFpbFwiXG4gICAgICAgICAgdmFsdWU9e2VtYWlsLnRvTG93ZXJDYXNlKCkudHJpbSgpfVxuICAgICAgICAgIG9uQ2hhbmdlPXtoYW5kbGVDaGFuZ2V9XG4gICAgICAgIC8+XG4gICAgICA8L2Rpdj5cblxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJpbnB1dC1ncm91cCBtYi0zXCI+XG4gICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cImlucHV0LWdyb3VwLXRleHRcIiBpZD1cImVtYWlsXCI+XG4gICAgICAgICAgPHN2ZyBjbGFzc05hbWU9XCJpY29uLWlucHV0XCI+XG4gICAgICAgICAgICA8dXNlIGhyZWY9XCIvc3RhdGljL2ljb25zL3Nwcml0ZS5zdmcjaWNvbi1sb2NrXCIgLz5cbiAgICAgICAgICA8L3N2Zz5cbiAgICAgICAgPC9zcGFuPlxuXG4gICAgICAgIDxpbnB1dFxuICAgICAgICAgIG5hbWU9XCJwYXNzd29yZFwiXG4gICAgICAgICAgdHlwZT1cInBhc3N3b3JkXCJcbiAgICAgICAgICBjbGFzc05hbWU9XCJmb3JtLWNvbnRyb2xcIlxuICAgICAgICAgIHBsYWNlaG9sZGVyPVwicGFzc3dvcmRcIlxuICAgICAgICAgIGFyaWEtbGFiZWw9XCJwYXNzd29yZFwiXG4gICAgICAgICAgYXJpYS1kZXNjcmliZWRieT1cInBhc3N3b3JkXCJcbiAgICAgICAgICB2YWx1ZT17cGFzc3dvcmR9XG4gICAgICAgICAgb25DaGFuZ2U9e2hhbmRsZUNoYW5nZX1cbiAgICAgICAgLz5cbiAgICAgIDwvZGl2PlxuXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImlucHV0LWdyb3VwIG1iLTNcIj5cbiAgICAgICAgPGJ1dHRvbiB0eXBlPVwic3VibWl0XCIgY2xhc3NOYW1lPVwiYnRuIGJ0bi1vdXRsaW5lLXN1Y2Nlc3MgYnRuLXN1Ym1pdFwiPlxuICAgICAgICAgIFNpZ251cFxuICAgICAgICA8L2J1dHRvbj5cbiAgICAgIDwvZGl2PlxuICAgIDwvZm9ybT5cbiAgKTtcblxuICByZXR1cm4gKFxuICAgIDxMYXlvdXQ+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbC1tZC02IG9mZnNldC1tZC0zIHRleHQtY2VudGVyXCI+XG4gICAgICAgIDxoMT5Kb2IgSHViIFRvcDwvaDE+XG4gICAgICAgIDxoMz5TaWdudXAgdG8gZGlzY292ZXIgYmVzdCBwbGFjZXMgdG8gbG9vayBmb3IgSm9icyBhbmQgbXVjaCBtb3JlITwvaDM+XG5cbiAgICAgICAge3JlZ2lzdGVyRm9ybSgpfVxuXG4gICAgICAgIDxociAvPlxuICAgICAgICB7ZXJyb3IgJiYgPHAgY2xhc3NOYW1lPVwidGV4dC1kYW5nZXJcIj57ZXJyb3J9PC9wPn1cbiAgICAgIDwvZGl2PlxuICAgIDwvTGF5b3V0PlxuICApO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgUmVnaXN0ZXI7XG4iXSwibmFtZXMiOlsidXNlU3RhdGUiLCJ2YWxpZGF0b3IiLCJMYXlvdXQiLCJSZWdpc3RlciIsIm5hbWUiLCJlbWFpbCIsInBhc3N3b3JkIiwidXNlciIsInNldFVzZXIiLCJlcnJvciIsInNldEVycm9yIiwiaGFuZGxlQ2hhbmdlIiwiZSIsInRhcmdldCIsInZhbHVlIiwiaGFuZGxlU3VibWl0IiwicHJldmVudERlZmF1bHQiLCJjb25zb2xlIiwidGFibGUiLCJsZW5ndGgiLCJpc0VtYWlsIiwicmVnaXN0ZXJGb3JtIiwiZm9ybSIsIm9uU3VibWl0IiwiZGl2IiwiY2xhc3NOYW1lIiwic3BhbiIsImlkIiwic3ZnIiwidXNlIiwiaHJlZiIsImlucHV0IiwidHlwZSIsInBsYWNlaG9sZGVyIiwiYXJpYS1sYWJlbCIsImFyaWEtZGVzY3JpYmVkYnkiLCJvbkNoYW5nZSIsInRvTG93ZXJDYXNlIiwidHJpbSIsImJ1dHRvbiIsImgxIiwiaDMiLCJociIsInAiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/register.js\n"));

/***/ })

});