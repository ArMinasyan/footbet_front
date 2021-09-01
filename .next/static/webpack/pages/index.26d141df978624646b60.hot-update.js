self["webpackHotUpdate_N_E"]("pages/index",{

/***/ "./components/common/LoadingButton.jsx":
/*!*********************************************!*\
  !*** ./components/common/LoadingButton.jsx ***!
  \*********************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ LoadingButton; }
/* harmony export */ });
/* harmony import */ var C_Users_Admin_Desktop_projects_foot_bet_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/defineProperty */ "./node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var C_Users_Admin_Desktop_projects_foot_bet_node_modules_babel_runtime_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/objectWithoutProperties */ "./node_modules/@babel/runtime/helpers/esm/objectWithoutProperties.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var react_loader_spinner__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-loader-spinner */ "./node_modules/react-loader-spinner/dist/index.js");
/* module decorator */ module = __webpack_require__.hmd(module);




var _jsxFileName = "C:\\Users\\Admin\\Desktop\\projects\\foot-bet\\components\\common\\LoadingButton.jsx";

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { (0,C_Users_Admin_Desktop_projects_foot_bet_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__.default)(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }



function LoadingButton(_ref) {
  var loading = _ref.loading,
      children = _ref.children,
      props = (0,C_Users_Admin_Desktop_projects_foot_bet_node_modules_babel_runtime_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_2__.default)(_ref, ["loading", "children"]);

  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("button", _objectSpread(_objectSpread({}, props), {}, {
    type: "submit",
    children: [children, loading ? /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(react_loader_spinner__WEBPACK_IMPORTED_MODULE_4__.default, {
      type: "Puff",
      color: "#00BFFF",
      height: 100,
      width: 100,
      timeout: 3000 //3 secs

    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 10,
      columnNumber: 11
    }, this) : /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.Fragment, {}, void 0, false)]
  }), void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 6,
    columnNumber: 5
  }, this);
}
_c = LoadingButton;

var _c;

$RefreshReg$(_c, "LoadingButton");

;
    var _a, _b;
    // Legacy CSS implementations will `eval` browser code in a Node.js context
    // to extract CSS. For backwards compatibility, we need to check we're in a
    // browser context before continuing.
    if (typeof self !== 'undefined' &&
        // AMP / No-JS mode does not inject these helpers:
        '$RefreshHelpers$' in self) {
        var currentExports = module.__proto__.exports;
        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;
        // This cannot happen in MainTemplate because the exports mismatch between
        // templating and execution.
        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);
        // A module can be accepted automatically based on its exports, e.g. when
        // it is a Refresh Boundary.
        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {
            // Save the previous exports on update so we can compare the boundary
            // signatures.
            module.hot.dispose(function (data) {
                data.prevExports = currentExports;
            });
            // Unconditionally accept an update to this module, we'll check if it's
            // still a Refresh Boundary later.
            module.hot.accept();
            // This field is set when the previous version of this module was a
            // Refresh Boundary, letting us know we need to check for invalidation or
            // enqueue an update.
            if (prevExports !== null) {
                // A boundary can become ineligible if its exports are incompatible
                // with the previous exports.
                //
                // For example, if you add/remove/change exports, we'll want to
                // re-execute the importing modules, and force those components to
                // re-render. Similarly, if you convert a class component to a
                // function, we want to invalidate the boundary.
                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {
                    module.hot.invalidate();
                }
                else {
                    self.$RefreshHelpers$.scheduleUpdate();
                }
            }
        }
        else {
            // Since we just executed the code for the module, it's possible that the
            // new exports made it ineligible for being a boundary.
            // We only care about the case when we were _previously_ a boundary,
            // because we already accepted this update (accidental side effect).
            var isNoLongerABoundary = prevExports !== null;
            if (isNoLongerABoundary) {
                module.hot.invalidate();
            }
        }
    }


/***/ })

});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9jb21tb24vTG9hZGluZ0J1dHRvbi5qc3giXSwibmFtZXMiOlsiTG9hZGluZ0J1dHRvbiIsImxvYWRpbmciLCJjaGlsZHJlbiIsInByb3BzIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUVlLFNBQVNBLGFBQVQsT0FBMkQ7QUFBQSxNQUFqQ0MsT0FBaUMsUUFBakNBLE9BQWlDO0FBQUEsTUFBeEJDLFFBQXdCLFFBQXhCQSxRQUF3QjtBQUFBLE1BQVhDLEtBQVc7O0FBQ3hFLHNCQUNFLHdHQUFZQSxLQUFaO0FBQW1CLFFBQUksRUFBQyxRQUF4QjtBQUFBLGVBQ0lELFFBREosRUFHSUQsT0FBTyxnQkFDTCw4REFBQyx5REFBRDtBQUNFLFVBQUksRUFBQyxNQURQO0FBRUUsV0FBSyxFQUFDLFNBRlI7QUFHRSxZQUFNLEVBQUUsR0FIVjtBQUlFLFdBQUssRUFBRSxHQUpUO0FBS0UsYUFBTyxFQUFFLElBTFgsQ0FLaUI7O0FBTGpCO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFESyxnQkFTUCw2SUFaSjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsVUFERjtBQWlCRDtLQWxCdUJELGEiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvaW5kZXguMjZkMTQxZGY5Nzg2MjQ2NDZiNjAuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCdcclxuaW1wb3J0IExvYWRlciBmcm9tICdyZWFjdC1sb2FkZXItc3Bpbm5lcidcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIExvYWRpbmdCdXR0b24oIHsgbG9hZGluZywgY2hpbGRyZW4sIC4uLnByb3BzICB9ICkge1xyXG4gIHJldHVybiAoXHJcbiAgICA8YnV0dG9uIHsuLi5wcm9wc30gdHlwZT1cInN1Ym1pdFwiID5cclxuICAgICAgeyBjaGlsZHJlbiB9XHJcbiAgICAgIHsgXHJcbiAgICAgICAgbG9hZGluZyA/IChcclxuICAgICAgICAgIDxMb2FkZXJcclxuICAgICAgICAgICAgdHlwZT1cIlB1ZmZcIlxyXG4gICAgICAgICAgICBjb2xvcj1cIiMwMEJGRkZcIlxyXG4gICAgICAgICAgICBoZWlnaHQ9ezEwMH1cclxuICAgICAgICAgICAgd2lkdGg9ezEwMH1cclxuICAgICAgICAgICAgdGltZW91dD17MzAwMH0gLy8zIHNlY3NcclxuICAgICAgICAgIC8+XHJcbiAgICAgICAgKSA6XHJcbiAgICAgICAgPD48Lz5cclxuICAgICAgfVxyXG4gICAgPC9idXR0b24+XHJcbiAgKVxyXG59XHJcbiJdLCJzb3VyY2VSb290IjoiIn0=