self["webpackHotUpdate_N_E"]("pages/_app",{

/***/ "./components/Header/Bar/Login/ResetPassword/ForgotPassword/ForgotPassword.jsx":
/*!*************************************************************************************!*\
  !*** ./components/Header/Bar/Login/ResetPassword/ForgotPassword/ForgotPassword.jsx ***!
  \*************************************************************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ForgotPassword": function() { return /* binding */ ForgotPassword; }
/* harmony export */ });
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var C_Users_Admin_Desktop_projects_foot_bet_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var C_Users_Admin_Desktop_projects_foot_bet_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(C_Users_Admin_Desktop_projects_foot_bet_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var C_Users_Admin_Desktop_projects_foot_bet_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator */ "./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js");
/* harmony import */ var next_translate_useTranslation__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next-translate/useTranslation */ "./node_modules/next-translate/lib/esm/useTranslation.js");
/* harmony import */ var react_hook_form__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-hook-form */ "./node_modules/react-hook-form/dist/index.esm.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var yup__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! yup */ "./node_modules/yup/es/index.js");
/* harmony import */ var _hookform_resolvers_yup__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @hookform/resolvers/yup */ "./node_modules/@hookform/resolvers/yup/dist/yup.module.js");
/* harmony import */ var _common_Title__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../common/Title */ "./components/Header/Bar/Login/common/Title.jsx");
/* harmony import */ var _components_common_auth_InputContainer_InputContainer__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../../../../../components/common/auth/InputContainer/InputContainer */ "./components/common/auth/InputContainer/InputContainer.jsx");
/* harmony import */ var _common_Submit__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../common/Submit */ "./components/Header/Bar/Login/common/Submit.jsx");
/* harmony import */ var _common_auth_Modal_Modal__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../../../../common/auth/Modal/Modal */ "./components/common/auth/Modal/Modal.jsx");
/* harmony import */ var _GetEmailCode_GetEmailCode__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../GetEmailCode/GetEmailCode */ "./components/Header/Bar/Login/ResetPassword/GetEmailCode/GetEmailCode.jsx");
/* harmony import */ var _ForgotPassword_module_scss__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./ForgotPassword.module.scss */ "./components/Header/Bar/Login/ResetPassword/ForgotPassword/ForgotPassword.module.scss");
/* harmony import */ var _ForgotPassword_module_scss__WEBPACK_IMPORTED_MODULE_16___default = /*#__PURE__*/__webpack_require__.n(_ForgotPassword_module_scss__WEBPACK_IMPORTED_MODULE_16__);
/* harmony import */ var _lib_er_lib__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../../../../../../lib/er.lib */ "./lib/er.lib.js");
/* harmony import */ var react_toastify__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! react-toastify */ "./node_modules/react-toastify/dist/react-toastify.esm.js");
/* harmony import */ var _lib_request_destinations__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../../../../../../lib/request-destinations */ "./lib/request-destinations.js");
/* module decorator */ module = __webpack_require__.hmd(module);





var _jsxFileName = "C:\\Users\\Admin\\Desktop\\projects\\foot-bet\\components\\Header\\Bar\\Login\\ResetPassword\\ForgotPassword\\ForgotPassword.jsx",
    _s = $RefreshSig$();

// hooks and helpers




 //components





 // styles





function ForgotPassword(_ref) {
  _s();

  var onModalClose = _ref.onModalClose;

  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_5__.useState)(true),
      showForgotPassMl = _useState[0],
      setShowForgotPassMl = _useState[1],
      _useState2 = (0,react__WEBPACK_IMPORTED_MODULE_5__.useState)(false),
      showGetEmailCodeMl = _useState2[0],
      setShowEmailCodeMl = _useState2[1],
      _useTranslation = (0,next_translate_useTranslation__WEBPACK_IMPORTED_MODULE_3__.default)('common'),
      t = _useTranslation.t,
      translationPath = 'header.resetPasswordModal.',
      translate = function translate(key) {
    return t("".concat(translationPath).concat(key));
  },
      schema = yup__WEBPACK_IMPORTED_MODULE_6__.object().shape({
    email: yup__WEBPACK_IMPORTED_MODULE_6__.string().required().matches(/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/)
  }),
      _useForm = (0,react_hook_form__WEBPACK_IMPORTED_MODULE_4__.useForm)({
    mode: 'onChange',
    resolver: (0,_hookform_resolvers_yup__WEBPACK_IMPORTED_MODULE_7__.yupResolver)(schema)
  }),
      register = _useForm.register,
      handleSubmit = _useForm.handleSubmit,
      errors = _useForm.formState.errors,
      submit = /*#__PURE__*/function () {
    var _ref2 = (0,C_Users_Admin_Desktop_projects_foot_bet_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__.default)( /*#__PURE__*/C_Users_Admin_Desktop_projects_foot_bet_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default().mark(function _callee(data) {
      var _yield$request, response, token, _err$response$data;

      return C_Users_Admin_Desktop_projects_foot_bet_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default().wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              _context.prev = 0;
              _context.next = 3;
              return (0,_lib_er_lib__WEBPACK_IMPORTED_MODULE_13__.request)((0,_lib_request_destinations__WEBPACK_IMPORTED_MODULE_14__.START_RESET_PASSWORD)(data.email));

            case 3:
              _yield$request = _context.sent;
              response = _yield$request.data;
              token = response.data.token;
              (0,_lib_er_lib__WEBPACK_IMPORTED_MODULE_13__.setCookie)("reset-token", token, 1 / 24 * 1);
              setShowForgotPassMl(false);
              setShowEmailCodeMl(true);
              _context.next = 14;
              break;

            case 11:
              _context.prev = 11;
              _context.t0 = _context["catch"](0);
              (0,react_toastify__WEBPACK_IMPORTED_MODULE_15__.toast)(((_err$response$data = _context.t0.response.data) === null || _err$response$data === void 0 ? void 0 : _err$response$data.message) || "\u041D\u0435 \u0443\u0434\u0430\u043B\u043E\u0441\u044C \u0432\u043E\u0441\u0442\u0430\u043D\u043E\u0432\u0438\u0442\u044C \u043F\u0430\u0440\u043E\u043B\u044C", {
                type: "error"
              });

            case 14:
            case "end":
              return _context.stop();
          }
        }
      }, _callee, null, [[0, 11]]);
    }));

    return function submit(_x) {
      return _ref2.apply(this, arguments);
    };
  }();

  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
    children: [showForgotPassMl && /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_common_auth_Modal_Modal__WEBPACK_IMPORTED_MODULE_11__.Modal, {
      onClose: onModalClose,
      contentStyles: (_ForgotPassword_module_scss__WEBPACK_IMPORTED_MODULE_16___default().m_content),
      containerStyles: (_ForgotPassword_module_scss__WEBPACK_IMPORTED_MODULE_16___default().m_container),
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
        className: (_ForgotPassword_module_scss__WEBPACK_IMPORTED_MODULE_16___default().container),
        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_common_Title__WEBPACK_IMPORTED_MODULE_8__.Title, {
          styles: (_ForgotPassword_module_scss__WEBPACK_IMPORTED_MODULE_16___default().title),
          content: translate('title')
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 66,
          columnNumber: 25
        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("form", {
          onSubmit: handleSubmit(submit),
          children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
            className: (_ForgotPassword_module_scss__WEBPACK_IMPORTED_MODULE_16___default().inputs),
            children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_common_auth_InputContainer_InputContainer__WEBPACK_IMPORTED_MODULE_9__.InputContainer, {
              id: "name",
              type: "text",
              placeholder: t('registration.inputPlaceHolders.email'),
              errors: !!errors.email,
              other: register('email')
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 72,
              columnNumber: 33
            }, this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 71,
            columnNumber: 29
          }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_common_Submit__WEBPACK_IMPORTED_MODULE_10__.Submit, {
            styles: (_ForgotPassword_module_scss__WEBPACK_IMPORTED_MODULE_16___default().submit),
            content: translate('send')
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 80,
            columnNumber: 29
          }, this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 70,
          columnNumber: 25
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 65,
        columnNumber: 21
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_toastify__WEBPACK_IMPORTED_MODULE_15__.ToastContainer, {}, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 86,
        columnNumber: 21
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 64,
      columnNumber: 17
    }, this), showGetEmailCodeMl && /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_GetEmailCode_GetEmailCode__WEBPACK_IMPORTED_MODULE_12__.GetEmailCode, {
      onModalClose: onModalClose
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 90,
      columnNumber: 39
    }, this)]
  }, void 0, true);
}

_s(ForgotPassword, "JxlZuAR4/aQsmB9+EbldK/8WHUc=", false, function () {
  return [next_translate_useTranslation__WEBPACK_IMPORTED_MODULE_3__.default, react_hook_form__WEBPACK_IMPORTED_MODULE_4__.useForm];
});

_c = ForgotPassword;

var _c;

$RefreshReg$(_c, "ForgotPassword");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9IZWFkZXIvQmFyL0xvZ2luL1Jlc2V0UGFzc3dvcmQvRm9yZ290UGFzc3dvcmQvRm9yZ290UGFzc3dvcmQuanN4Il0sIm5hbWVzIjpbIkZvcmdvdFBhc3N3b3JkIiwib25Nb2RhbENsb3NlIiwidXNlU3RhdGUiLCJzaG93Rm9yZ290UGFzc01sIiwic2V0U2hvd0ZvcmdvdFBhc3NNbCIsInNob3dHZXRFbWFpbENvZGVNbCIsInNldFNob3dFbWFpbENvZGVNbCIsInVzZVRyYW5zbGF0aW9uIiwidCIsInRyYW5zbGF0aW9uUGF0aCIsInRyYW5zbGF0ZSIsImtleSIsInNjaGVtYSIsInl1cCIsInNoYXBlIiwiZW1haWwiLCJyZXF1aXJlZCIsIm1hdGNoZXMiLCJ1c2VGb3JtIiwibW9kZSIsInJlc29sdmVyIiwieXVwUmVzb2x2ZXIiLCJyZWdpc3RlciIsImhhbmRsZVN1Ym1pdCIsImVycm9ycyIsImZvcm1TdGF0ZSIsInN1Ym1pdCIsImRhdGEiLCJyZXF1ZXN0IiwiU1RBUlRfUkVTRVRfUEFTU1dPUkQiLCJyZXNwb25zZSIsInRva2VuIiwic2V0Q29va2llIiwidG9hc3QiLCJtZXNzYWdlIiwidHlwZSIsInN0eWxlcyJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Q0FFQTs7QUFDQTtBQUNBO0FBQ0E7QUFDQTtDQUVBOztBQUNBO0FBRUE7QUFFQTtBQUNBO0FBR08sU0FBU0EsY0FBVCxPQUEwQztBQUFBOztBQUFBLE1BQWhCQyxZQUFnQixRQUFoQkEsWUFBZ0I7O0FBQUEsa0JBSUNDLCtDQUFRLENBQUMsSUFBRCxDQUpUO0FBQUEsTUFJeENDLGdCQUp3QztBQUFBLE1BSXRCQyxtQkFKc0I7QUFBQSxtQkFLRUYsK0NBQVEsQ0FBQyxLQUFELENBTFY7QUFBQSxNQUt4Q0csa0JBTHdDO0FBQUEsTUFLcEJDLGtCQUxv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QUFBQSxnQkFMSjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsY0FESixlQXNCSSw4REFBQywyREFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBLGNBdEJKO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQUZSLEVBNEJRTCxrQkFBa0IsaUJBQUksOERBQUMscUVBQUQ7QUFBYyxrQkFBWSxFQUFFSjtBQUE1QjtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBNUI5QjtBQUFBLGtCQURKO0FBaUNIOztHQXhFZUQsYztVQU9BTyxrRSxFQVc0Q1csb0Q7OztLQWxCNUNsQixjIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL19hcHAuYjczMjJiMDJiMjdiNTA3ZDBlYzguaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8vIGhvb2tzIGFuZCBoZWxwZXJzXHJcbmltcG9ydCB1c2VUcmFuc2xhdGlvbiBmcm9tICduZXh0LXRyYW5zbGF0ZS91c2VUcmFuc2xhdGlvbidcclxuaW1wb3J0IHsgdXNlRm9ybSB9IGZyb20gJ3JlYWN0LWhvb2stZm9ybSdcclxuaW1wb3J0IHsgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCdcclxuaW1wb3J0ICogYXMgeXVwIGZyb20gJ3l1cCdcclxuaW1wb3J0IHsgeXVwUmVzb2x2ZXIgfSBmcm9tICdAaG9va2Zvcm0vcmVzb2x2ZXJzL3l1cCdcclxuLy9jb21wb25lbnRzXHJcbmltcG9ydCB7IFRpdGxlIH0gZnJvbSAnLi4vLi4vY29tbW9uL1RpdGxlJ1xyXG5pbXBvcnQgeyBJbnB1dENvbnRhaW5lciB9IGZyb20gJy9jb21wb25lbnRzL2NvbW1vbi9hdXRoL0lucHV0Q29udGFpbmVyL0lucHV0Q29udGFpbmVyJ1xyXG5pbXBvcnQgeyBTdWJtaXQgfSBmcm9tICcuLi8uLi9jb21tb24vU3VibWl0J1xyXG5pbXBvcnQgeyBNb2RhbCB9IGZyb20gJy4uLy4uLy4uLy4uLy4uL2NvbW1vbi9hdXRoL01vZGFsL01vZGFsJ1xyXG5pbXBvcnQgeyBHZXRFbWFpbENvZGUgfSBmcm9tICcuLi9HZXRFbWFpbENvZGUvR2V0RW1haWxDb2RlJ1xyXG4vLyBzdHlsZXNcclxuaW1wb3J0IHN0eWxlcyBmcm9tICcuL0ZvcmdvdFBhc3N3b3JkLm1vZHVsZS5zY3NzJ1xyXG5cclxuaW1wb3J0IHsgcmVxdWVzdCwgc2V0Q29va2llIH0gZnJvbSAnL2xpYi9lci5saWInO1xyXG5cclxuaW1wb3J0IHsgVG9hc3RDb250YWluZXIsIHRvYXN0IH0gZnJvbSAncmVhY3QtdG9hc3RpZnknO1xyXG5pbXBvcnQgeyBTVEFSVF9SRVNFVF9QQVNTV09SRCB9IGZyb20gJy4uLy4uLy4uLy4uLy4uLy4uL2xpYi9yZXF1ZXN0LWRlc3RpbmF0aW9ucydcclxuXHJcblxyXG5leHBvcnQgZnVuY3Rpb24gRm9yZ290UGFzc3dvcmQoeyBvbk1vZGFsQ2xvc2UgfSkge1xyXG5cclxuICAgIGNvbnN0XHJcbiAgICAgICAgLy8gbW9kYWwgc3RhdGVzIHBhc3MgPT4gcGFzc3dvcmQgTWwgPT4gTW9kYWxcclxuICAgICAgICBbc2hvd0ZvcmdvdFBhc3NNbCwgc2V0U2hvd0ZvcmdvdFBhc3NNbF0gPSB1c2VTdGF0ZSh0cnVlKSxcclxuICAgICAgICBbc2hvd0dldEVtYWlsQ29kZU1sLCBzZXRTaG93RW1haWxDb2RlTWxdID0gdXNlU3RhdGUoZmFsc2UpLFxyXG4gICAgICAgIC8vIHRyYW5zbGF0aW9uIGNvbnNmaWdzXHJcbiAgICAgICAgeyB0IH0gPSB1c2VUcmFuc2xhdGlvbignY29tbW9uJyksXHJcbiAgICAgICAgdHJhbnNsYXRpb25QYXRoID0gJ2hlYWRlci5yZXNldFBhc3N3b3JkTW9kYWwuJyxcclxuICAgICAgICB0cmFuc2xhdGUgPSBrZXkgPT4gdChgJHt0cmFuc2xhdGlvblBhdGh9JHtrZXl9YCksXHJcbiAgICAgICAgLy8geXVwIGNvbmZpZ3NcclxuICAgICAgICBzY2hlbWEgPSB5dXAub2JqZWN0KCkuc2hhcGUoe1xyXG4gICAgICAgICAgICBlbWFpbDogeXVwXHJcbiAgICAgICAgICAgICAgICAuc3RyaW5nKClcclxuICAgICAgICAgICAgICAgIC5yZXF1aXJlZCgpXHJcbiAgICAgICAgICAgICAgICAubWF0Y2hlcygvXigoW148PigpXFxbXFxdXFxcXC4sOzpcXHNAXCJdKyhcXC5bXjw+KClcXFtcXF1cXFxcLiw7Olxcc0BcIl0rKSopfChcIi4rXCIpKUAoKFxcW1swLTldezEsM31cXC5bMC05XXsxLDN9XFwuWzAtOV17MSwzfVxcLlswLTldezEsM31dKXwoKFthLXpBLVpcXC0wLTldK1xcLikrW2EtekEtWl17Mix9KSkkLyksXHJcbiAgICAgICAgfSksXHJcbiAgICAgICAgLy8gZm9ybSBjb25maWdzXHJcbiAgICAgICAgeyByZWdpc3RlciwgaGFuZGxlU3VibWl0LCBmb3JtU3RhdGU6IHsgZXJyb3JzIH0gfSA9IHVzZUZvcm0oe1xyXG4gICAgICAgICAgICBtb2RlOiAnb25DaGFuZ2UnLFxyXG4gICAgICAgICAgICByZXNvbHZlcjogeXVwUmVzb2x2ZXIoc2NoZW1hKVxyXG4gICAgICAgIH0pLFxyXG4gICAgICAgIC8vIG9uIGZvcm0gc3VibWl0XHJcbiAgICAgICAgc3VibWl0ID0gYXN5bmMgKGRhdGEpID0+IHtcclxuICAgICAgICAgICAgdHJ5IHtcclxuICAgICAgICAgICAgICAgIGNvbnN0IHsgZGF0YTogcmVzcG9uc2UgfSA9IGF3YWl0IHJlcXVlc3QoIFNUQVJUX1JFU0VUX1BBU1NXT1JEKCBkYXRhLmVtYWlsICkgKTtcclxuICAgICAgICAgICAgICAgIGNvbnN0IHRva2VuID0gcmVzcG9uc2UuZGF0YS50b2tlbjtcclxuICAgICAgICAgICAgICAgIHNldENvb2tpZShgcmVzZXQtdG9rZW5gLCB0b2tlbiwgKDEvMjQpKjEpO1xyXG4gICAgICAgICAgICAgICAgc2V0U2hvd0ZvcmdvdFBhc3NNbChmYWxzZSlcclxuICAgICAgICAgICAgICAgIHNldFNob3dFbWFpbENvZGVNbCh0cnVlKVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGNhdGNoICggZXJyICkge1xyXG4gICAgICAgICAgICAgICAgdG9hc3QoIGVyci5yZXNwb25zZS5kYXRhPy5tZXNzYWdlIHx8IGDQndC1INGD0LTQsNC70L7RgdGMINCy0L7RgdGC0LDQvdC+0LLQuNGC0Ywg0L/QsNGA0L7Qu9GMYCwge1xyXG4gICAgICAgICAgICAgICAgICAgIHR5cGU6IGBlcnJvcmBcclxuICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG5cclxuXHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIDw+XHJcbiAgICAgICAgICAgIHtzaG93Rm9yZ290UGFzc01sICYmXHJcbiAgICAgICAgICAgICAgICA8TW9kYWwgb25DbG9zZT17b25Nb2RhbENsb3NlfSBjb250ZW50U3R5bGVzPXtzdHlsZXMubV9jb250ZW50fSBjb250YWluZXJTdHlsZXM9e3N0eWxlcy5tX2NvbnRhaW5lcn0+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5jb250YWluZXJ9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8VGl0bGVcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN0eWxlcz17c3R5bGVzLnRpdGxlfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY29udGVudD17dHJhbnNsYXRlKCd0aXRsZScpfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8Zm9ybSBvblN1Ym1pdD17aGFuZGxlU3VibWl0KHN1Ym1pdCl9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5pbnB1dHN9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxJbnB1dENvbnRhaW5lclxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZD0nbmFtZSdcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdHlwZT0ndGV4dCdcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9e3QoJ3JlZ2lzdHJhdGlvbi5pbnB1dFBsYWNlSG9sZGVycy5lbWFpbCcpfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBlcnJvcnM9eyghIWVycm9ycy5lbWFpbCl9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG90aGVyPXtyZWdpc3RlcignZW1haWwnKX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8U3VibWl0XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3R5bGVzPXtzdHlsZXMuc3VibWl0fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnRlbnQ9e3RyYW5zbGF0ZSgnc2VuZCcpfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9mb3JtPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIDxUb2FzdENvbnRhaW5lciAvPlxyXG4gICAgICAgICAgICAgICAgPC9Nb2RhbD5cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICBzaG93R2V0RW1haWxDb2RlTWwgJiYgPEdldEVtYWlsQ29kZSBvbk1vZGFsQ2xvc2U9e29uTW9kYWxDbG9zZX0gLz5cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIDwvPlxyXG4gICAgKVxyXG59XHJcbiJdLCJzb3VyY2VSb290IjoiIn0=