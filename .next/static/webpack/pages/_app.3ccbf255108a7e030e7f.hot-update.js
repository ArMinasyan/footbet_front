self["webpackHotUpdate_N_E"]("pages/_app",{

/***/ "./components/Header/Bar/BarItems/Logged/Logged.jsx":
/*!**********************************************************!*\
  !*** ./components/Header/Bar/BarItems/Logged/Logged.jsx ***!
  \**********************************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Logged": function() { return /* binding */ Logged; }
/* harmony export */ });
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _Logged_module_scss__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./Logged.module.scss */ "./components/Header/Bar/BarItems/Logged/Logged.module.scss");
/* harmony import */ var _Logged_module_scss__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_Logged_module_scss__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _LoggedDrop_LoggedDrop__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./LoggedDrop/LoggedDrop */ "./components/Header/Bar/BarItems/Logged/LoggedDrop/LoggedDrop.jsx");
/* harmony import */ var _LoggedWallper_LoggedWallper__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./LoggedWallper/LoggedWallper */ "./components/Header/Bar/BarItems/Logged/LoggedWallper/LoggedWallper.jsx");
/* module decorator */ module = __webpack_require__.hmd(module);


var _jsxFileName = "C:\\Users\\user\\Desktop\\projects\\ait-projects\\foot-bet\\components\\Header\\Bar\\BarItems\\Logged\\Logged.jsx",
    _s = $RefreshSig$();

// styles




function Logged(_ref) {
  _s();

  var data = _ref.data;

  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false),
      showUserDrop = _useState[0],
      setShowUserDrop = _useState[1];

  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
    className: (_Logged_module_scss__WEBPACK_IMPORTED_MODULE_4___default().container),
    style: showUserDrop ? {
      padding: '17.5px 0'
    } : null,
    children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
      className: (_Logged_module_scss__WEBPACK_IMPORTED_MODULE_4___default().content),
      children: !showUserDrop ? /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_LoggedWallper_LoggedWallper__WEBPACK_IMPORTED_MODULE_3__.LoggedWallper, {
        img: data.photo,
        fullName: data.username,
        click: function click() {
          return setShowUserDrop(true);
        }
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 21,
        columnNumber: 21
      }, this) : /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_LoggedDrop_LoggedDrop__WEBPACK_IMPORTED_MODULE_2__.LoggedDrop, {
        onClose: function onClose() {
          return setShowUserDrop(false);
        },
        user: data
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 26,
        columnNumber: 21
      }, this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 19,
      columnNumber: 13
    }, this)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 16,
    columnNumber: 9
  }, this);
}

_s(Logged, "y7H8uauPU1aetBlvixQA6YQTvqY=");

_c = Logged;

var _c;

$RefreshReg$(_c, "Logged");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9IZWFkZXIvQmFyL0Jhckl0ZW1zL0xvZ2dlZC9Mb2dnZWQuanN4Il0sIm5hbWVzIjpbIkxvZ2dlZCIsImRhdGEiLCJ1c2VTdGF0ZSIsInNob3dVc2VyRHJvcCIsInNldFNob3dVc2VyRHJvcCIsInN0eWxlcyIsInBhZGRpbmciLCJwaG90byIsInVzZXJuYW1lIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRU8sU0FBU0EsTUFBVCxPQUVKO0FBQUE7O0FBQUEsTUFEQ0MsSUFDRCxRQURDQSxJQUNEOztBQUFBLGtCQUl1Q0MsK0NBQVEsQ0FBQyxLQUFELENBSi9DO0FBQUEsTUFJTUMsWUFKTjtBQUFBLE1BSW9CQyxlQUpwQjs7QUFNQyxzQkFDSTtBQUNJLGFBQVMsRUFBRUMsc0VBRGY7QUFFSSxTQUFLLEVBQUVGLFlBQVksR0FBRztBQUFFRyxhQUFPLEVBQUU7QUFBWCxLQUFILEdBQTZCLElBRnBEO0FBQUEsMkJBR0k7QUFBSyxlQUFTLEVBQUVELG9FQUFoQjtBQUFBLGdCQUNLLENBQUNGLFlBQUQsZ0JBQ0csOERBQUMsdUVBQUQ7QUFDSSxXQUFHLEVBQUVGLElBQUksQ0FBQ00sS0FEZDtBQUVJLGdCQUFRLEVBQUVOLElBQUksQ0FBQ08sUUFGbkI7QUFHSSxhQUFLLEVBQUU7QUFBQSxpQkFBTUosZUFBZSxDQUFDLElBQUQsQ0FBckI7QUFBQTtBQUhYO0FBQUE7QUFBQTtBQUFBO0FBQUEsY0FESCxnQkFNRyw4REFBQyw4REFBRDtBQUNJLGVBQU8sRUFBRTtBQUFBLGlCQUFNQSxlQUFlLENBQUMsS0FBRCxDQUFyQjtBQUFBLFNBRGI7QUFFSSxZQUFJLEVBQUVIO0FBRlY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQVBSO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFISjtBQUFBO0FBQUE7QUFBQTtBQUFBLFVBREo7QUFtQkg7O0dBM0JlRCxNOztLQUFBQSxNIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL19hcHAuM2NjYmYyNTUxMDhhN2UwMzBlN2YuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8vIHN0eWxlc1xyXG5pbXBvcnQgeyB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IHN0eWxlcyBmcm9tICcuL0xvZ2dlZC5tb2R1bGUuc2NzcydcclxuaW1wb3J0IHsgTG9nZ2VkRHJvcCB9IGZyb20gJy4vTG9nZ2VkRHJvcC9Mb2dnZWREcm9wJztcclxuaW1wb3J0IHsgTG9nZ2VkV2FsbHBlciB9IGZyb20gJy4vTG9nZ2VkV2FsbHBlci9Mb2dnZWRXYWxscGVyJ1xyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIExvZ2dlZCh7XHJcbiAgICBkYXRhXHJcbn0pIHtcclxuICAgIGNvbnN0XHJcbiAgICAgICAgLy8gc3RhdGVzXHJcbiAgICAgICAgLy9jaGFuZ2UgdXNlciBkcm9wZG93blxyXG4gICAgICAgIFtzaG93VXNlckRyb3AsIHNldFNob3dVc2VyRHJvcF0gPSB1c2VTdGF0ZShmYWxzZSlcclxuXHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIDxkaXZcclxuICAgICAgICAgICAgY2xhc3NOYW1lPXtzdHlsZXMuY29udGFpbmVyfVxyXG4gICAgICAgICAgICBzdHlsZT17c2hvd1VzZXJEcm9wID8geyBwYWRkaW5nOiAnMTcuNXB4IDAnIH0gOiBudWxsfT5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5jb250ZW50fT5cclxuICAgICAgICAgICAgICAgIHshc2hvd1VzZXJEcm9wID9cclxuICAgICAgICAgICAgICAgICAgICA8TG9nZ2VkV2FsbHBlclxyXG4gICAgICAgICAgICAgICAgICAgICAgICBpbWc9e2RhdGEucGhvdG99XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGZ1bGxOYW1lPXtkYXRhLnVzZXJuYW1lfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBjbGljaz17KCkgPT4gc2V0U2hvd1VzZXJEcm9wKHRydWUpfVxyXG4gICAgICAgICAgICAgICAgICAgIC8+IDpcclxuICAgICAgICAgICAgICAgICAgICA8TG9nZ2VkRHJvcFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBvbkNsb3NlPXsoKSA9PiBzZXRTaG93VXNlckRyb3AoZmFsc2UpfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICB1c2VyPXtkYXRhfVxyXG4gICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgKVxyXG59XHJcbiJdLCJzb3VyY2VSb290IjoiIn0=