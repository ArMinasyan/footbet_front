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
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var _redux_features_userSlice__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../../redux/features/userSlice */ "./redux/features/userSlice.js");
/* harmony import */ var _Logged_module_scss__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./Logged.module.scss */ "./components/Header/Bar/BarItems/Logged/Logged.module.scss");
/* harmony import */ var _Logged_module_scss__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_Logged_module_scss__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _LoggedDrop_LoggedDrop__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./LoggedDrop/LoggedDrop */ "./components/Header/Bar/BarItems/Logged/LoggedDrop/LoggedDrop.jsx");
/* harmony import */ var _LoggedWallper_LoggedWallper__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./LoggedWallper/LoggedWallper */ "./components/Header/Bar/BarItems/Logged/LoggedWallper/LoggedWallper.jsx");
/* module decorator */ module = __webpack_require__.hmd(module);


var _jsxFileName = "C:\\Users\\user\\Desktop\\projects\\ait-projects\\foot-bet\\components\\Header\\Bar\\BarItems\\Logged\\Logged.jsx",
    _s = $RefreshSig$();

// styles






function Logged() {
  _s();

  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false),
      showUserDrop = _useState[0],
      setShowUserDrop = _useState[1];

  var data = (0,react_redux__WEBPACK_IMPORTED_MODULE_2__.useSelector)(_redux_features_userSlice__WEBPACK_IMPORTED_MODULE_3__.selectUser);

  var _useState2 = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(data.photo),
      photo = _useState2[0],
      setPhoto = _useState2[1];

  (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(function () {
    setPhoto(data.photo);
  }, [data]);
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
    className: (_Logged_module_scss__WEBPACK_IMPORTED_MODULE_6___default().container),
    style: showUserDrop ? {
      padding: '17.5px 0'
    } : null,
    children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
      className: (_Logged_module_scss__WEBPACK_IMPORTED_MODULE_6___default().content),
      children: !showUserDrop ? /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_LoggedWallper_LoggedWallper__WEBPACK_IMPORTED_MODULE_5__.LoggedWallper, {
        img: photo,
        fullName: data.username,
        click: function click() {
          return setShowUserDrop(true);
        }
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 27,
        columnNumber: 21
      }, this) : /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_LoggedDrop_LoggedDrop__WEBPACK_IMPORTED_MODULE_4__.LoggedDrop, {
        onClose: function onClose() {
          return setShowUserDrop(false);
        },
        user: data
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 32,
        columnNumber: 21
      }, this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 25,
      columnNumber: 13
    }, this)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 22,
    columnNumber: 9
  }, this);
}

_s(Logged, "RYoQXubND1W6MiGHo+7DuJNJilU=", false, function () {
  return [react_redux__WEBPACK_IMPORTED_MODULE_2__.useSelector];
});

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9IZWFkZXIvQmFyL0Jhckl0ZW1zL0xvZ2dlZC9Mb2dnZWQuanN4Il0sIm5hbWVzIjpbIkxvZ2dlZCIsInVzZVN0YXRlIiwic2hvd1VzZXJEcm9wIiwic2V0U2hvd1VzZXJEcm9wIiwiZGF0YSIsInVzZVNlbGVjdG9yIiwic2VsZWN0VXNlciIsInBob3RvIiwic2V0UGhvdG8iLCJ1c2VFZmZlY3QiLCJzdHlsZXMiLCJwYWRkaW5nIiwidXNlcm5hbWUiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFTyxTQUFTQSxNQUFULEdBQW1CO0FBQUE7O0FBQUEsa0JBSWdCQywrQ0FBUSxDQUFDLEtBQUQsQ0FKeEI7QUFBQSxNQUlqQkMsWUFKaUI7QUFBQSxNQUlIQyxlQUpHOztBQU10QixNQUFNQyxJQUFJLEdBQUdDLHdEQUFXLENBQUNDLGlFQUFELENBQXhCOztBQU5zQixtQkFPR0wsK0NBQVEsQ0FBQ0csSUFBSSxDQUFDRyxLQUFOLENBUFg7QUFBQSxNQU9mQSxLQVBlO0FBQUEsTUFPVEMsUUFQUzs7QUFRdEJDLGtEQUFTLENBQUUsWUFBSTtBQUNYRCxZQUFRLENBQUNKLElBQUksQ0FBQ0csS0FBTixDQUFSO0FBQ0gsR0FGUSxFQUVOLENBQUNILElBQUQsQ0FGTSxDQUFUO0FBSUEsc0JBQ0k7QUFDSSxhQUFTLEVBQUVNLHNFQURmO0FBRUksU0FBSyxFQUFFUixZQUFZLEdBQUc7QUFBRVMsYUFBTyxFQUFFO0FBQVgsS0FBSCxHQUE2QixJQUZwRDtBQUFBLDJCQUdJO0FBQUssZUFBUyxFQUFFRCxvRUFBaEI7QUFBQSxnQkFDSyxDQUFDUixZQUFELGdCQUNHLDhEQUFDLHVFQUFEO0FBQ0ksV0FBRyxFQUFFSyxLQURUO0FBRUksZ0JBQVEsRUFBRUgsSUFBSSxDQUFDUSxRQUZuQjtBQUdJLGFBQUssRUFBRTtBQUFBLGlCQUFNVCxlQUFlLENBQUMsSUFBRCxDQUFyQjtBQUFBO0FBSFg7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQURILGdCQU1HLDhEQUFDLDhEQUFEO0FBQ0ksZUFBTyxFQUFFO0FBQUEsaUJBQU1BLGVBQWUsQ0FBQyxLQUFELENBQXJCO0FBQUEsU0FEYjtBQUVJLFlBQUksRUFBRUM7QUFGVjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBUFI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUhKO0FBQUE7QUFBQTtBQUFBO0FBQUEsVUFESjtBQW1CSDs7R0EvQmVKLE07VUFNQ0ssb0Q7OztLQU5ETCxNIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL19hcHAuODU3OTNlMmE5OTczYzFkYTRhZGYuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8vIHN0eWxlc1xyXG5pbXBvcnQgeyB1c2VTdGF0ZSwgdXNlRWZmZWN0IH0gZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgeyB1c2VTZWxlY3RvciB9IGZyb20gJ3JlYWN0LXJlZHV4JztcclxuaW1wb3J0IHsgc2VsZWN0VXNlciB9IGZyb20gJy4uLy4uLy4uLy4uLy4uL3JlZHV4L2ZlYXR1cmVzL3VzZXJTbGljZSc7XHJcbmltcG9ydCBzdHlsZXMgZnJvbSAnLi9Mb2dnZWQubW9kdWxlLnNjc3MnXHJcbmltcG9ydCB7IExvZ2dlZERyb3AgfSBmcm9tICcuL0xvZ2dlZERyb3AvTG9nZ2VkRHJvcCc7XHJcbmltcG9ydCB7IExvZ2dlZFdhbGxwZXIgfSBmcm9tICcuL0xvZ2dlZFdhbGxwZXIvTG9nZ2VkV2FsbHBlcidcclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBMb2dnZWQoICkge1xyXG4gICAgY29uc3RcclxuICAgICAgICAvLyBzdGF0ZXNcclxuICAgICAgICAvL2NoYW5nZSB1c2VyIGRyb3Bkb3duXHJcbiAgICAgICAgW3Nob3dVc2VyRHJvcCwgc2V0U2hvd1VzZXJEcm9wXSA9IHVzZVN0YXRlKGZhbHNlKVxyXG5cclxuICAgIGNvbnN0IGRhdGEgPSB1c2VTZWxlY3RvcihzZWxlY3RVc2VyKTtcclxuICAgIGNvbnN0IFtwaG90byxzZXRQaG90b10gPSB1c2VTdGF0ZShkYXRhLnBob3RvKTtcclxuICAgIHVzZUVmZmVjdCAoKCk9PntcclxuICAgICAgICBzZXRQaG90byhkYXRhLnBob3RvKVxyXG4gICAgfSwgW2RhdGFdKTtcclxuXHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIDxkaXZcclxuICAgICAgICAgICAgY2xhc3NOYW1lPXtzdHlsZXMuY29udGFpbmVyfVxyXG4gICAgICAgICAgICBzdHlsZT17c2hvd1VzZXJEcm9wID8geyBwYWRkaW5nOiAnMTcuNXB4IDAnIH0gOiBudWxsfT5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5jb250ZW50fT5cclxuICAgICAgICAgICAgICAgIHshc2hvd1VzZXJEcm9wID9cclxuICAgICAgICAgICAgICAgICAgICA8TG9nZ2VkV2FsbHBlclxyXG4gICAgICAgICAgICAgICAgICAgICAgICBpbWc9e3Bob3RvfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBmdWxsTmFtZT17ZGF0YS51c2VybmFtZX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgY2xpY2s9eygpID0+IHNldFNob3dVc2VyRHJvcCh0cnVlKX1cclxuICAgICAgICAgICAgICAgICAgICAvPiA6XHJcbiAgICAgICAgICAgICAgICAgICAgPExvZ2dlZERyb3BcclxuICAgICAgICAgICAgICAgICAgICAgICAgb25DbG9zZT17KCkgPT4gc2V0U2hvd1VzZXJEcm9wKGZhbHNlKX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgdXNlcj17ZGF0YX1cclxuICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgIClcclxufVxyXG4iXSwic291cmNlUm9vdCI6IiJ9