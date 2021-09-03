self["webpackHotUpdate_N_E"]("pages/_app",{

/***/ "./components/Header/Bar/Login/Login.jsx":
/*!***********************************************!*\
  !*** ./components/Header/Bar/Login/Login.jsx ***!
  \***********************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Login": function() { return /* binding */ Login; }
/* harmony export */ });
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _common_auth_Modal_Modal__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../common/auth/Modal/Modal */ "./components/common/auth/Modal/Modal.jsx");
/* harmony import */ var _SocialMediaIcons_SocialMediaIcons__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./SocialMediaIcons/SocialMediaIcons */ "./components/Header/Bar/Login/SocialMediaIcons/SocialMediaIcons.jsx");
/* harmony import */ var _ResetPassword_ForgotPassword_ForgotPassword__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./ResetPassword/ForgotPassword/ForgotPassword */ "./components/Header/Bar/Login/ResetPassword/ForgotPassword/ForgotPassword.jsx");
/* harmony import */ var _LoginForm_LoginForm__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./LoginForm/LoginForm */ "./components/Header/Bar/Login/LoginForm/LoginForm.jsx");
/* harmony import */ var _Login_module_scss__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./Login.module.scss */ "./components/Header/Bar/Login/Login.module.scss");
/* harmony import */ var _Login_module_scss__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_Login_module_scss__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_5__);
/* module decorator */ module = __webpack_require__.hmd(module);



var _jsxFileName = "C:\\Users\\Admin\\Desktop\\projects\\foot-bet\\components\\Header\\Bar\\Login\\Login.jsx",
    _s = $RefreshSig$();

// components



 // styles



function Login(_ref) {
  _s();

  var onModalClose = _ref.onModalClose;

  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_5__.useState)(true),
      showLoginModal = _useState[0],
      setShowLoginModal = _useState[1],
      _useState2 = (0,react__WEBPACK_IMPORTED_MODULE_5__.useState)(false),
      showResetPasswordModal = _useState2[0],
      setShowResetPasswordModal = _useState2[1];

  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
    children: [showLoginModal && /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_common_auth_Modal_Modal__WEBPACK_IMPORTED_MODULE_1__.Modal, {
      onClose: onModalClose,
      contentStyles: (_Login_module_scss__WEBPACK_IMPORTED_MODULE_6___default().m_content),
      containerStyles: (_Login_module_scss__WEBPACK_IMPORTED_MODULE_6___default().m_container),
      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
        className: (_Login_module_scss__WEBPACK_IMPORTED_MODULE_6___default().login_container),
        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_SocialMediaIcons_SocialMediaIcons__WEBPACK_IMPORTED_MODULE_2__.SocialMediaIcons, {}, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 23,
          columnNumber: 25
        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_LoginForm_LoginForm__WEBPACK_IMPORTED_MODULE_4__.LoginForm, {
          onModalClose: onModalClose,
          handleResetPassModal: function handleResetPassModal() {
            setShowResetPasswordModal(true);
            setShowLoginModal(false);
          }
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 24,
          columnNumber: 25
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 22,
        columnNumber: 21
      }, this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 21,
      columnNumber: 17
    }, this), showResetPasswordModal && /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_ResetPassword_ForgotPassword_ForgotPassword__WEBPACK_IMPORTED_MODULE_3__.ForgotPassword, {
      onModalClose: onModalClose
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 34,
      columnNumber: 40
    }, this)]
  }, void 0, true);
}

_s(Login, "QqB+j6mZBpoBHLXQpseNDqORSGs=");

_c = Login;

var _c;

$RefreshReg$(_c, "Login");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9IZWFkZXIvQmFyL0xvZ2luL0xvZ2luLmpzeCJdLCJuYW1lcyI6WyJMb2dpbiIsIm9uTW9kYWxDbG9zZSIsInVzZVN0YXRlIiwic2hvd0xvZ2luTW9kYWwiLCJzZXRTaG93TG9naW5Nb2RhbCIsInNob3dSZXNldFBhc3N3b3JkTW9kYWwiLCJzZXRTaG93UmVzZXRQYXNzd29yZE1vZGFsIiwic3R5bGVzIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtDQUVBOztBQUNBO0FBQ0E7QUFJTyxTQUFTQSxLQUFULE9BQWlDO0FBQUE7O0FBQUEsTUFBaEJDLFlBQWdCLFFBQWhCQSxZQUFnQjs7QUFBQSxrQkFHTUMsK0NBQVEsQ0FBQyxJQUFELENBSGQ7QUFBQSxNQUcvQkMsY0FIK0I7QUFBQSxNQUdmQyxpQkFIZTtBQUFBLG1CQUlzQkYsK0NBQVEsQ0FBQyxLQUFELENBSjlCO0FBQUEsTUFJL0JHLHNCQUorQjtBQUFBLE1BSVBDLHlCQUpPOztBQU1wQyxzQkFDSTtBQUFBLGVBQ0tILGNBQWMsaUJBQ1gsOERBQUMsMkRBQUQ7QUFBTyxhQUFPLEVBQUVGLFlBQWhCO0FBQThCLG1CQUFhLEVBQUVNLHFFQUE3QztBQUErRCxxQkFBZSxFQUFFQSx1RUFBaEY7QUFBQSw2QkFDSTtBQUFLLGlCQUFTLEVBQUVBLDJFQUFoQjtBQUFBLGdDQUNJLDhEQUFDLGdGQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUEsZ0JBREosZUFFSSw4REFBQywyREFBRDtBQUNJLHNCQUFZLEVBQUVOLFlBRGxCO0FBRUksOEJBQW9CLEVBQUUsZ0NBQU07QUFDeEJLLHFDQUF5QixDQUFDLElBQUQsQ0FBekI7QUFDQUYsNkJBQWlCLENBQUMsS0FBRCxDQUFqQjtBQUNIO0FBTEw7QUFBQTtBQUFBO0FBQUE7QUFBQSxnQkFGSjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFESjtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBRlIsRUFlS0Msc0JBQXNCLGlCQUFJLDhEQUFDLHdGQUFEO0FBQWdCLGtCQUFZLEVBQUVKO0FBQTlCO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFmL0I7QUFBQSxrQkFESjtBQW1CSDs7R0F6QmVELEs7O0tBQUFBLEsiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvX2FwcC44NmFlMTNlOTQ1ZjA2ZjlkOGZlZC5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiLy8gY29tcG9uZW50c1xyXG5pbXBvcnQgeyBNb2RhbCB9IGZyb20gJy4uLy4uLy4uL2NvbW1vbi9hdXRoL01vZGFsL01vZGFsJ1xyXG5pbXBvcnQgeyBTb2NpYWxNZWRpYUljb25zIH0gZnJvbSAnLi9Tb2NpYWxNZWRpYUljb25zL1NvY2lhbE1lZGlhSWNvbnMnXHJcbmltcG9ydCB7IEZvcmdvdFBhc3N3b3JkIH0gZnJvbSAnLi9SZXNldFBhc3N3b3JkL0ZvcmdvdFBhc3N3b3JkL0ZvcmdvdFBhc3N3b3JkJ1xyXG5pbXBvcnQgeyBMb2dpbkZvcm0gfSBmcm9tICcuL0xvZ2luRm9ybS9Mb2dpbkZvcm0nXHJcbi8vIHN0eWxlc1xyXG5pbXBvcnQgc3R5bGVzIGZyb20gJy4vTG9naW4ubW9kdWxlLnNjc3MnXHJcbmltcG9ydCB7IHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnXHJcblxyXG5cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBMb2dpbih7IG9uTW9kYWxDbG9zZSB9KSB7XHJcblxyXG4gICAgY29uc3RcclxuICAgICAgICBbc2hvd0xvZ2luTW9kYWwsIHNldFNob3dMb2dpbk1vZGFsXSA9IHVzZVN0YXRlKHRydWUpLFxyXG4gICAgICAgIFtzaG93UmVzZXRQYXNzd29yZE1vZGFsLCBzZXRTaG93UmVzZXRQYXNzd29yZE1vZGFsXSA9IHVzZVN0YXRlKGZhbHNlKVxyXG5cclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPD5cclxuICAgICAgICAgICAge3Nob3dMb2dpbk1vZGFsICYmXHJcbiAgICAgICAgICAgICAgICA8TW9kYWwgb25DbG9zZT17b25Nb2RhbENsb3NlfSBjb250ZW50U3R5bGVzPXtzdHlsZXMubV9jb250ZW50fSBjb250YWluZXJTdHlsZXM9e3N0eWxlcy5tX2NvbnRhaW5lcn0+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5sb2dpbl9jb250YWluZXJ9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8U29jaWFsTWVkaWFJY29ucyAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8TG9naW5Gb3JtXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbk1vZGFsQ2xvc2U9e29uTW9kYWxDbG9zZX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGhhbmRsZVJlc2V0UGFzc01vZGFsPXsoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc2V0U2hvd1Jlc2V0UGFzc3dvcmRNb2RhbCh0cnVlKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNldFNob3dMb2dpbk1vZGFsKGZhbHNlKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDwvTW9kYWw+XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAge3Nob3dSZXNldFBhc3N3b3JkTW9kYWwgJiYgPEZvcmdvdFBhc3N3b3JkIG9uTW9kYWxDbG9zZT17b25Nb2RhbENsb3NlfSAvPn1cclxuICAgICAgICA8Lz5cclxuICAgIClcclxufVxyXG4iXSwic291cmNlUm9vdCI6IiJ9