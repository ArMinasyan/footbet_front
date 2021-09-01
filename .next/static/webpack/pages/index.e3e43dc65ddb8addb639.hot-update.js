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
    style: {
      position: 'relative',
      opacity: loading ? '0.5' : '1',
      pointerEvents: loading ? "none" : "unset"
    },
    children: [children, loading ? /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("div", {
      style: {
        position: "absolute",
        top: "50%",
        left: "40%"
      },
      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(react_loader_spinner__WEBPACK_IMPORTED_MODULE_4__.default, {
        type: "Puff",
        color: "#00BFFF",
        height: 30,
        width: 30,
        timeout: 3000 //3 secs

      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 19,
        columnNumber: 13
      }, this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 14,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9jb21tb24vTG9hZGluZ0J1dHRvbi5qc3giXSwibmFtZXMiOlsiTG9hZGluZ0J1dHRvbiIsImxvYWRpbmciLCJjaGlsZHJlbiIsInByb3BzIiwicG9zaXRpb24iLCJvcGFjaXR5IiwicG9pbnRlckV2ZW50cyIsInRvcCIsImxlZnQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBRWUsU0FBU0EsYUFBVCxPQUEyRDtBQUFBLE1BQWpDQyxPQUFpQyxRQUFqQ0EsT0FBaUM7QUFBQSxNQUF4QkMsUUFBd0IsUUFBeEJBLFFBQXdCO0FBQUEsTUFBWEMsS0FBVzs7QUFDeEUsc0JBQ0Usd0dBQVlBLEtBQVo7QUFBbUIsUUFBSSxFQUFDLFFBQXhCO0FBQWlDLFNBQUssRUFBRTtBQUN0Q0MsY0FBUSxFQUFFLFVBRDRCO0FBRXRDQyxhQUFPLEVBQUVKLE9BQU8sR0FBRyxLQUFILEdBQVcsR0FGVztBQUd0Q0ssbUJBQWEsRUFBRUwsT0FBTztBQUhnQixLQUF4QztBQUFBLGVBS0lDLFFBTEosRUFPSUQsT0FBTyxnQkFDTDtBQUFLLFdBQUssRUFBRTtBQUNWRyxnQkFBUSxZQURFO0FBRVZHLFdBQUcsT0FGTztBQUdWQyxZQUFJO0FBSE0sT0FBWjtBQUFBLDZCQUtFLDhEQUFDLHlEQUFEO0FBQ0UsWUFBSSxFQUFDLE1BRFA7QUFFRSxhQUFLLEVBQUMsU0FGUjtBQUdFLGNBQU0sRUFBRSxFQUhWO0FBSUUsYUFBSyxFQUFFLEVBSlQ7QUFLRSxlQUFPLEVBQUUsSUFMWCxDQUtpQjs7QUFMakI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUxGO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFESyxnQkFlUCw2SUF0Qko7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFVBREY7QUEyQkQ7S0E1QnVCUixhIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL2luZGV4LmUzZTQzZGM2NWRkYjhhZGRiNjM5LmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnXHJcbmltcG9ydCBMb2FkZXIgZnJvbSAncmVhY3QtbG9hZGVyLXNwaW5uZXInXHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBMb2FkaW5nQnV0dG9uKCB7IGxvYWRpbmcsIGNoaWxkcmVuLCAuLi5wcm9wcyAgfSApIHtcclxuICByZXR1cm4gKFxyXG4gICAgPGJ1dHRvbiB7Li4ucHJvcHN9IHR5cGU9XCJzdWJtaXRcIiBzdHlsZT17eyBcclxuICAgICAgcG9zaXRpb246ICdyZWxhdGl2ZScsIFxyXG4gICAgICBvcGFjaXR5OiBsb2FkaW5nID8gJzAuNScgOiAnMScsIFxyXG4gICAgICBwb2ludGVyRXZlbnRzOiBsb2FkaW5nID8gYG5vbmVgIDogYHVuc2V0YFxyXG4gICAgfX0gPlxyXG4gICAgICB7IGNoaWxkcmVuIH1cclxuICAgICAgeyBcclxuICAgICAgICBsb2FkaW5nID8gKFxyXG4gICAgICAgICAgPGRpdiBzdHlsZT17eyBcclxuICAgICAgICAgICAgcG9zaXRpb246IGBhYnNvbHV0ZWAsXHJcbiAgICAgICAgICAgIHRvcDogYDUwJWAsXHJcbiAgICAgICAgICAgIGxlZnQ6IGA0MCVgXHJcbiAgICAgICAgICB9fT5cclxuICAgICAgICAgICAgPExvYWRlclxyXG4gICAgICAgICAgICAgIHR5cGU9XCJQdWZmXCJcclxuICAgICAgICAgICAgICBjb2xvcj1cIiMwMEJGRkZcIlxyXG4gICAgICAgICAgICAgIGhlaWdodD17MzB9XHJcbiAgICAgICAgICAgICAgd2lkdGg9ezMwfVxyXG4gICAgICAgICAgICAgIHRpbWVvdXQ9ezMwMDB9IC8vMyBzZWNzXHJcbiAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICApIDpcclxuICAgICAgICA8PjwvPlxyXG4gICAgICB9XHJcbiAgICA8L2J1dHRvbj5cclxuICApXHJcbn1cclxuIl0sInNvdXJjZVJvb3QiOiIifQ==