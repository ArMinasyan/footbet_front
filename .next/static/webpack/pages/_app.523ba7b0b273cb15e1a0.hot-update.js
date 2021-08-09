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
    console.log("new phono");
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
        lineNumber: 28,
        columnNumber: 21
      }, this) : /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_LoggedDrop_LoggedDrop__WEBPACK_IMPORTED_MODULE_4__.LoggedDrop, {
        onClose: function onClose() {
          return setShowUserDrop(false);
        },
        user: data
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 33,
        columnNumber: 21
      }, this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 26,
      columnNumber: 13
    }, this)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 23,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9IZWFkZXIvQmFyL0Jhckl0ZW1zL0xvZ2dlZC9Mb2dnZWQuanN4Il0sIm5hbWVzIjpbIkxvZ2dlZCIsInVzZVN0YXRlIiwic2hvd1VzZXJEcm9wIiwic2V0U2hvd1VzZXJEcm9wIiwiZGF0YSIsInVzZVNlbGVjdG9yIiwic2VsZWN0VXNlciIsInBob3RvIiwic2V0UGhvdG8iLCJ1c2VFZmZlY3QiLCJjb25zb2xlIiwibG9nIiwic3R5bGVzIiwicGFkZGluZyIsInVzZXJuYW1lIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRU8sU0FBU0EsTUFBVCxHQUFtQjtBQUFBOztBQUFBLGtCQUlnQkMsK0NBQVEsQ0FBQyxLQUFELENBSnhCO0FBQUEsTUFJakJDLFlBSmlCO0FBQUEsTUFJSEMsZUFKRzs7QUFNdEIsTUFBTUMsSUFBSSxHQUFHQyx3REFBVyxDQUFDQyxpRUFBRCxDQUF4Qjs7QUFOc0IsbUJBT0dMLCtDQUFRLENBQUNHLElBQUksQ0FBQ0csS0FBTixDQVBYO0FBQUEsTUFPZkEsS0FQZTtBQUFBLE1BT1RDLFFBUFM7O0FBUXRCQyxrREFBUyxDQUFFLFlBQUk7QUFDWEQsWUFBUSxDQUFDSixJQUFJLENBQUNHLEtBQU4sQ0FBUjtBQUNBRyxXQUFPLENBQUNDLEdBQVI7QUFDSCxHQUhRLEVBR04sQ0FBQ1AsSUFBRCxDQUhNLENBQVQ7QUFLQSxzQkFDSTtBQUNJLGFBQVMsRUFBRVEsc0VBRGY7QUFFSSxTQUFLLEVBQUVWLFlBQVksR0FBRztBQUFFVyxhQUFPLEVBQUU7QUFBWCxLQUFILEdBQTZCLElBRnBEO0FBQUEsMkJBR0k7QUFBSyxlQUFTLEVBQUVELG9FQUFoQjtBQUFBLGdCQUNLLENBQUNWLFlBQUQsZ0JBQ0csOERBQUMsdUVBQUQ7QUFDSSxXQUFHLEVBQUVLLEtBRFQ7QUFFSSxnQkFBUSxFQUFFSCxJQUFJLENBQUNVLFFBRm5CO0FBR0ksYUFBSyxFQUFFO0FBQUEsaUJBQU1YLGVBQWUsQ0FBQyxJQUFELENBQXJCO0FBQUE7QUFIWDtBQUFBO0FBQUE7QUFBQTtBQUFBLGNBREgsZ0JBTUcsOERBQUMsOERBQUQ7QUFDSSxlQUFPLEVBQUU7QUFBQSxpQkFBTUEsZUFBZSxDQUFDLEtBQUQsQ0FBckI7QUFBQSxTQURiO0FBRUksWUFBSSxFQUFFQztBQUZWO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFQUjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBSEo7QUFBQTtBQUFBO0FBQUE7QUFBQSxVQURKO0FBbUJIOztHQWhDZUosTTtVQU1DSyxvRDs7O0tBTkRMLE0iLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvX2FwcC41MjNiYTdiMGIyNzNjYjE1ZTFhMC5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiLy8gc3R5bGVzXHJcbmltcG9ydCB7IHVzZVN0YXRlLCB1c2VFZmZlY3QgfSBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCB7IHVzZVNlbGVjdG9yIH0gZnJvbSAncmVhY3QtcmVkdXgnO1xyXG5pbXBvcnQgeyBzZWxlY3RVc2VyIH0gZnJvbSAnLi4vLi4vLi4vLi4vLi4vcmVkdXgvZmVhdHVyZXMvdXNlclNsaWNlJztcclxuaW1wb3J0IHN0eWxlcyBmcm9tICcuL0xvZ2dlZC5tb2R1bGUuc2NzcydcclxuaW1wb3J0IHsgTG9nZ2VkRHJvcCB9IGZyb20gJy4vTG9nZ2VkRHJvcC9Mb2dnZWREcm9wJztcclxuaW1wb3J0IHsgTG9nZ2VkV2FsbHBlciB9IGZyb20gJy4vTG9nZ2VkV2FsbHBlci9Mb2dnZWRXYWxscGVyJ1xyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIExvZ2dlZCggKSB7XHJcbiAgICBjb25zdFxyXG4gICAgICAgIC8vIHN0YXRlc1xyXG4gICAgICAgIC8vY2hhbmdlIHVzZXIgZHJvcGRvd25cclxuICAgICAgICBbc2hvd1VzZXJEcm9wLCBzZXRTaG93VXNlckRyb3BdID0gdXNlU3RhdGUoZmFsc2UpXHJcblxyXG4gICAgY29uc3QgZGF0YSA9IHVzZVNlbGVjdG9yKHNlbGVjdFVzZXIpO1xyXG4gICAgY29uc3QgW3Bob3RvLHNldFBob3RvXSA9IHVzZVN0YXRlKGRhdGEucGhvdG8pO1xyXG4gICAgdXNlRWZmZWN0ICgoKT0+e1xyXG4gICAgICAgIHNldFBob3RvKGRhdGEucGhvdG8pXHJcbiAgICAgICAgY29uc29sZS5sb2cgKCBgbmV3IHBob25vYCApO1xyXG4gICAgfSwgW2RhdGFdKTtcclxuXHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIDxkaXZcclxuICAgICAgICAgICAgY2xhc3NOYW1lPXtzdHlsZXMuY29udGFpbmVyfVxyXG4gICAgICAgICAgICBzdHlsZT17c2hvd1VzZXJEcm9wID8geyBwYWRkaW5nOiAnMTcuNXB4IDAnIH0gOiBudWxsfT5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5jb250ZW50fT5cclxuICAgICAgICAgICAgICAgIHshc2hvd1VzZXJEcm9wID9cclxuICAgICAgICAgICAgICAgICAgICA8TG9nZ2VkV2FsbHBlclxyXG4gICAgICAgICAgICAgICAgICAgICAgICBpbWc9e3Bob3RvfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBmdWxsTmFtZT17ZGF0YS51c2VybmFtZX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgY2xpY2s9eygpID0+IHNldFNob3dVc2VyRHJvcCh0cnVlKX1cclxuICAgICAgICAgICAgICAgICAgICAvPiA6XHJcbiAgICAgICAgICAgICAgICAgICAgPExvZ2dlZERyb3BcclxuICAgICAgICAgICAgICAgICAgICAgICAgb25DbG9zZT17KCkgPT4gc2V0U2hvd1VzZXJEcm9wKGZhbHNlKX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgdXNlcj17ZGF0YX1cclxuICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgIClcclxufVxyXG4iXSwic291cmNlUm9vdCI6IiJ9