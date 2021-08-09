self["webpackHotUpdate_N_E"]("pages/_app",{

/***/ "./components/Header/Bar/Login/LoginForm/LoginForm.jsx":
/*!*************************************************************!*\
  !*** ./components/Header/Bar/Login/LoginForm/LoginForm.jsx ***!
  \*************************************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "LoginForm": function() { return /* binding */ LoginForm; }
/* harmony export */ });
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var C_Users_user_Desktop_projects_ait_projects_foot_bet_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var C_Users_user_Desktop_projects_ait_projects_foot_bet_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(C_Users_user_Desktop_projects_ait_projects_foot_bet_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var C_Users_user_Desktop_projects_ait_projects_foot_bet_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator */ "./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js");
/* harmony import */ var next_translate_useTranslation__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next-translate/useTranslation */ "./node_modules/next-translate/lib/esm/useTranslation.js");
/* harmony import */ var react_hook_form__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-hook-form */ "./node_modules/react-hook-form/dist/index.esm.js");
/* harmony import */ var yup__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! yup */ "./node_modules/yup/es/index.js");
/* harmony import */ var _hookform_resolvers_yup__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @hookform/resolvers/yup */ "./node_modules/@hookform/resolvers/yup/dist/yup.module.js");
/* harmony import */ var _lib_er_lib__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../../../lib/er.lib */ "./lib/er.lib.js");
/* harmony import */ var _components_common_auth_InputContainer_InputContainer__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../../../../../components/common/auth/InputContainer/InputContainer */ "./components/common/auth/InputContainer/InputContainer.jsx");
/* harmony import */ var _common_Title__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../common/Title */ "./components/Header/Bar/Login/common/Title.jsx");
/* harmony import */ var _common_ResetPasswordLink__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../common/ResetPasswordLink */ "./components/Header/Bar/Login/common/ResetPasswordLink.jsx");
/* harmony import */ var _common_Submit__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../common/Submit */ "./components/Header/Bar/Login/common/Submit.jsx");
/* harmony import */ var _common_ToRegister__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../common/ToRegister */ "./components/Header/Bar/Login/common/ToRegister.jsx");
/* harmony import */ var _LoginForm_module_scss__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./LoginForm.module.scss */ "./components/Header/Bar/Login/LoginForm/LoginForm.module.scss");
/* harmony import */ var _LoginForm_module_scss__WEBPACK_IMPORTED_MODULE_18___default = /*#__PURE__*/__webpack_require__.n(_LoginForm_module_scss__WEBPACK_IMPORTED_MODULE_18__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var _redux_features_userSlice__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../../../../../redux/features/userSlice */ "./redux/features/userSlice.js");
/* harmony import */ var _lib_request_destinations__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../../../../../lib/request-destinations */ "./lib/request-destinations.js");
/* harmony import */ var react_toastify__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! react-toastify */ "./node_modules/react-toastify/dist/react-toastify.esm.js");
/* harmony import */ var next_dist_client_router__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! next/dist/client/router */ "./node_modules/next/dist/client/router.js");
/* harmony import */ var next_dist_client_router__WEBPACK_IMPORTED_MODULE_16___default = /*#__PURE__*/__webpack_require__.n(next_dist_client_router__WEBPACK_IMPORTED_MODULE_16__);
/* module decorator */ module = __webpack_require__.hmd(module);




var _jsxFileName = "C:\\Users\\user\\Desktop\\projects\\ait-projects\\foot-bet\\components\\Header\\Bar\\Login\\LoginForm\\LoginForm.jsx",
    _s = $RefreshSig$();

// hooks and helpers




 //components





 // styles 







function LoginForm(_ref) {
  _s();

  var onModalClose = _ref.onModalClose,
      handleResetPassModal = _ref.handleResetPassModal;
  var router = (0,next_dist_client_router__WEBPACK_IMPORTED_MODULE_16__.useRouter)();

  var dispatch = (0,react_redux__WEBPACK_IMPORTED_MODULE_13__.useDispatch)(),
      _useTranslation = (0,next_translate_useTranslation__WEBPACK_IMPORTED_MODULE_3__.default)('common'),
      t = _useTranslation.t,
      translationPath = 'registration.inputPlaceHolders.',
      translate = function translate(key) {
    return t("".concat(translationPath).concat(key));
  },
      handle_to_register_click = function handle_to_register_click() {
    document.querySelector('body').style.overflow = 'visible';
    onModalClose();
  },
      schema = yup__WEBPACK_IMPORTED_MODULE_5__.object().shape({
    email: yup__WEBPACK_IMPORTED_MODULE_5__.string().required().matches(/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/),
    password: yup__WEBPACK_IMPORTED_MODULE_5__.string().required().min(6)
  }),
      _useForm = (0,react_hook_form__WEBPACK_IMPORTED_MODULE_4__.useForm)({
    mode: 'onChange',
    resolver: (0,_hookform_resolvers_yup__WEBPACK_IMPORTED_MODULE_6__.yupResolver)(schema)
  }),
      register = _useForm.register,
      handleSubmit = _useForm.handleSubmit,
      errors = _useForm.formState.errors,
      submit = /*#__PURE__*/function () {
    var _ref2 = (0,C_Users_user_Desktop_projects_ait_projects_foot_bet_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__.default)( /*#__PURE__*/C_Users_user_Desktop_projects_ait_projects_foot_bet_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default().mark(function _callee(data) {
      var _yield$request$data, _yield$request$data2, _yield$request$data$d, token, user, _error$response$data;

      return C_Users_user_Desktop_projects_ait_projects_foot_bet_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default().wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              _context.prev = 0;
              _context.next = 3;
              return (0,_lib_er_lib__WEBPACK_IMPORTED_MODULE_7__.request)(_lib_request_destinations__WEBPACK_IMPORTED_MODULE_15__.LOGIN, data);

            case 3:
              _context.t1 = _yield$request$data = _context.sent.data;
              _context.t0 = _context.t1 === null;

              if (_context.t0) {
                _context.next = 7;
                break;
              }

              _context.t0 = _yield$request$data === void 0;

            case 7:
              if (!_context.t0) {
                _context.next = 11;
                break;
              }

              _context.t2 = void 0;
              _context.next = 12;
              break;

            case 11:
              _context.t2 = _yield$request$data.data;

            case 12:
              _yield$request$data$d = _context.t2;
              token = _yield$request$data$d.token;
              (0,_lib_er_lib__WEBPACK_IMPORTED_MODULE_7__.setCookie)("access-token", token, 1);
              _context.next = 17;
              return (0,_lib_er_lib__WEBPACK_IMPORTED_MODULE_7__.request)(_lib_request_destinations__WEBPACK_IMPORTED_MODULE_15__.GET_ACCOUNT_INFO, {}, {
                auth: true
              });

            case 17:
              _context.t4 = _yield$request$data2 = _context.sent.data;
              _context.t3 = _context.t4 === null;

              if (_context.t3) {
                _context.next = 21;
                break;
              }

              _context.t3 = _yield$request$data2 === void 0;

            case 21:
              if (!_context.t3) {
                _context.next = 25;
                break;
              }

              _context.t5 = void 0;
              _context.next = 26;
              break;

            case 25:
              _context.t5 = _yield$request$data2.data;

            case 26:
              user = _context.t5;
              dispatch((0,_redux_features_userSlice__WEBPACK_IMPORTED_MODULE_14__.login)(user));
              router.push("/");
              _context.next = 34;
              break;

            case 31:
              _context.prev = 31;
              _context.t6 = _context["catch"](0);
              (0,react_toastify__WEBPACK_IMPORTED_MODULE_17__.toast)(((_error$response$data = _context.t6.response.data) === null || _error$response$data === void 0 ? void 0 : _error$response$data.message) || "unknown error", {
                type: "error"
              });

            case 34:
              handle_to_register_click();

            case 35:
            case "end":
              return _context.stop();
          }
        }
      }, _callee, null, [[0, 31]]);
    }));

    return function submit(_x) {
      return _ref2.apply(this, arguments);
    };
  }();

  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
    className: (_LoginForm_module_scss__WEBPACK_IMPORTED_MODULE_18___default().container),
    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_common_Title__WEBPACK_IMPORTED_MODULE_9__.Title, {
      styles: (_LoginForm_module_scss__WEBPACK_IMPORTED_MODULE_18___default().title),
      content: t('header.loginModal.title')
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 73,
      columnNumber: 13
    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("form", {
      onSubmit: handleSubmit(submit),
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
        className: (_LoginForm_module_scss__WEBPACK_IMPORTED_MODULE_18___default().inputs),
        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_common_auth_InputContainer_InputContainer__WEBPACK_IMPORTED_MODULE_8__.InputContainer, {
          id: "name",
          type: "text",
          placeholder: translate('email'),
          errors: !!errors.email,
          other: register('email')
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 79,
          columnNumber: 21
        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_common_auth_InputContainer_InputContainer__WEBPACK_IMPORTED_MODULE_8__.InputContainer, {
          id: "password",
          type: "password",
          placeholder: translate('password'),
          errors: !!errors.password,
          other: register('password')
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 86,
          columnNumber: 21
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 78,
        columnNumber: 17
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_common_ResetPasswordLink__WEBPACK_IMPORTED_MODULE_10__.ResetPasswordLink, {
        click: handleResetPassModal,
        styles: (_LoginForm_module_scss__WEBPACK_IMPORTED_MODULE_18___default().reset_password),
        content: t('header.loginModal.resPassword')
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 94,
        columnNumber: 17
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_common_Submit__WEBPACK_IMPORTED_MODULE_11__.Submit, {
        styles: (_LoginForm_module_scss__WEBPACK_IMPORTED_MODULE_18___default().submit),
        content: t('header.loginModal.submit')
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 99,
        columnNumber: 17
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 77,
      columnNumber: 13
    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_common_ToRegister__WEBPACK_IMPORTED_MODULE_12__.ToRegister, {
      href: "/registration",
      click: handle_to_register_click,
      container_styles: (_LoginForm_module_scss__WEBPACK_IMPORTED_MODULE_18___default().to_register_container),
      content_styles: (_LoginForm_module_scss__WEBPACK_IMPORTED_MODULE_18___default().to_register_content),
      or: t('header.loginModal.or'),
      register_text_styles: (_LoginForm_module_scss__WEBPACK_IMPORTED_MODULE_18___default().to_register_text),
      content: t('header.loginModal.register')
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 104,
      columnNumber: 13
    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_toastify__WEBPACK_IMPORTED_MODULE_17__.ToastContainer, {}, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 115,
      columnNumber: 13
    }, this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 72,
    columnNumber: 9
  }, this);
}

_s(LoginForm, "nK0Im3IJjm+IEiA1iKC454R612Y=", false, function () {
  return [next_dist_client_router__WEBPACK_IMPORTED_MODULE_16__.useRouter, react_redux__WEBPACK_IMPORTED_MODULE_13__.useDispatch, next_translate_useTranslation__WEBPACK_IMPORTED_MODULE_3__.default, react_hook_form__WEBPACK_IMPORTED_MODULE_4__.useForm];
});

_c = LoginForm;

var _c;

$RefreshReg$(_c, "LoginForm");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9IZWFkZXIvQmFyL0xvZ2luL0xvZ2luRm9ybS9Mb2dpbkZvcm0uanN4Il0sIm5hbWVzIjpbIkxvZ2luRm9ybSIsIm9uTW9kYWxDbG9zZSIsImhhbmRsZVJlc2V0UGFzc01vZGFsIiwicm91dGVyIiwidXNlUm91dGVyIiwiZGlzcGF0Y2giLCJ1c2VEaXNwYXRjaCIsInVzZVRyYW5zbGF0aW9uIiwidCIsInRyYW5zbGF0aW9uUGF0aCIsInRyYW5zbGF0ZSIsImtleSIsImhhbmRsZV90b19yZWdpc3Rlcl9jbGljayIsImRvY3VtZW50IiwicXVlcnlTZWxlY3RvciIsInN0eWxlIiwib3ZlcmZsb3ciLCJzY2hlbWEiLCJ5dXAiLCJzaGFwZSIsImVtYWlsIiwicmVxdWlyZWQiLCJtYXRjaGVzIiwicGFzc3dvcmQiLCJtaW4iLCJ1c2VGb3JtIiwibW9kZSIsInJlc29sdmVyIiwieXVwUmVzb2x2ZXIiLCJyZWdpc3RlciIsImhhbmRsZVN1Ym1pdCIsImVycm9ycyIsImZvcm1TdGF0ZSIsInN1Ym1pdCIsImRhdGEiLCJyZXF1ZXN0IiwiTE9HSU4iLCJ0b2tlbiIsInNldENvb2tpZSIsIkdFVF9BQ0NPVU5UX0lORk8iLCJhdXRoIiwidXNlciIsImxvZ2luIiwicHVzaCIsInRvYXN0IiwicmVzcG9uc2UiLCJtZXNzYWdlIiwidHlwZSIsInN0eWxlcyJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0NBRUE7O0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Q0FFQTs7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFHTyxTQUFTQSxTQUFULE9BQTJEO0FBQUE7O0FBQUEsTUFBdENDLFlBQXNDLFFBQXRDQSxZQUFzQztBQUFBLE1BQXhCQyxvQkFBd0IsUUFBeEJBLG9CQUF3QjtBQUM5RCxNQUFNQyxNQUFNLEdBQUdDLG1FQUFT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QUxUO0FBTUksMEJBQW9CLEVBQUV3QyxpRkFOMUI7QUFPSSxhQUFPLEVBQUV4QyxDQUFDLENBQUMsNEJBQUQ7QUFQZDtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBaENKLGVBMkNJLDhEQUFDLDJEQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUEzQ0o7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFVBREo7QUErQ0g7O0dBL0ZlUixTO1VBQ0dJLCtELEVBR0FFLHFELEVBRUhDLGtFLEVBbUI0Q2tCLG9EOzs7S0F6QjVDekIsUyIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9fYXBwLmRhMzZhODgwM2M4MTY2MjZmYTRmLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyIvLyBob29rcyBhbmQgaGVscGVyc1xyXG5pbXBvcnQgdXNlVHJhbnNsYXRpb24gZnJvbSAnbmV4dC10cmFuc2xhdGUvdXNlVHJhbnNsYXRpb24nXHJcbmltcG9ydCB7IHVzZUZvcm0gfSBmcm9tICdyZWFjdC1ob29rLWZvcm0nXHJcbmltcG9ydCAqIGFzIHl1cCBmcm9tICd5dXAnXHJcbmltcG9ydCB7IHl1cFJlc29sdmVyIH0gZnJvbSAnQGhvb2tmb3JtL3Jlc29sdmVycy95dXAnXHJcbmltcG9ydCB7IHJlcXVlc3QsIHNldENvb2tpZSB9IGZyb20gJy4uLy4uLy4uLy4uLy4uL2xpYi9lci5saWInO1xyXG4vL2NvbXBvbmVudHNcclxuaW1wb3J0IHsgSW5wdXRDb250YWluZXIgfSBmcm9tICcvY29tcG9uZW50cy9jb21tb24vYXV0aC9JbnB1dENvbnRhaW5lci9JbnB1dENvbnRhaW5lcidcclxuaW1wb3J0IHsgVGl0bGUgfSBmcm9tICcuLi9jb21tb24vVGl0bGUnXHJcbmltcG9ydCB7IFJlc2V0UGFzc3dvcmRMaW5rIH0gZnJvbSAnLi4vY29tbW9uL1Jlc2V0UGFzc3dvcmRMaW5rJ1xyXG5pbXBvcnQgeyBTdWJtaXQgfSBmcm9tICcuLi9jb21tb24vU3VibWl0J1xyXG5pbXBvcnQgeyBUb1JlZ2lzdGVyIH0gZnJvbSAnLi4vY29tbW9uL1RvUmVnaXN0ZXInXHJcbi8vIHN0eWxlcyBcclxuaW1wb3J0IHN0eWxlcyBmcm9tICcuL0xvZ2luRm9ybS5tb2R1bGUuc2NzcydcclxuaW1wb3J0IHsgdXNlRGlzcGF0Y2ggfSBmcm9tICdyZWFjdC1yZWR1eCdcclxuaW1wb3J0IHsgbG9naW4gfSBmcm9tICcuLi8uLi8uLi8uLi8uLi9yZWR1eC9mZWF0dXJlcy91c2VyU2xpY2UnXHJcbmltcG9ydCB7IEdFVF9BQ0NPVU5UX0lORk8sIExPR0lOIH0gZnJvbSAnLi4vLi4vLi4vLi4vLi4vbGliL3JlcXVlc3QtZGVzdGluYXRpb25zJztcclxuXHJcbmltcG9ydCB7IFRvYXN0Q29udGFpbmVyLCB0b2FzdCB9IGZyb20gJ3JlYWN0LXRvYXN0aWZ5JztcclxuaW1wb3J0IHsgdXNlUm91dGVyIH0gZnJvbSAnbmV4dC9kaXN0L2NsaWVudC9yb3V0ZXInO1xyXG5cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBMb2dpbkZvcm0oeyBvbk1vZGFsQ2xvc2UsIGhhbmRsZVJlc2V0UGFzc01vZGFsIH0pIHtcclxuICAgIGNvbnN0IHJvdXRlciA9IHVzZVJvdXRlcigpO1xyXG5cclxuICAgIGNvbnN0XHJcbiAgICAgICAgZGlzcGF0Y2ggPSB1c2VEaXNwYXRjaCgpLFxyXG4gICAgICAgIC8vIHRyYW5zbGF0aW9uIGNvbnNmaWdzXHJcbiAgICAgICAgeyB0IH0gPSB1c2VUcmFuc2xhdGlvbignY29tbW9uJyksXHJcbiAgICAgICAgdHJhbnNsYXRpb25QYXRoID0gJ3JlZ2lzdHJhdGlvbi5pbnB1dFBsYWNlSG9sZGVycy4nLFxyXG4gICAgICAgIHRyYW5zbGF0ZSA9IGtleSA9PiB0KGAke3RyYW5zbGF0aW9uUGF0aH0ke2tleX1gKSxcclxuICAgICAgICBoYW5kbGVfdG9fcmVnaXN0ZXJfY2xpY2sgPSAoKSA9PiB7XHJcbiAgICAgICAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ2JvZHknKS5zdHlsZS5vdmVyZmxvdyA9ICd2aXNpYmxlJ1xyXG4gICAgICAgICAgICBvbk1vZGFsQ2xvc2UoKVxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgLy8geXVwIGNvbmZpZ3NcclxuICAgICAgICBzY2hlbWEgPSB5dXAub2JqZWN0KCkuc2hhcGUoe1xyXG4gICAgICAgICAgICBlbWFpbDogeXVwXHJcbiAgICAgICAgICAgICAgICAuc3RyaW5nKClcclxuICAgICAgICAgICAgICAgIC5yZXF1aXJlZCgpXHJcbiAgICAgICAgICAgICAgICAubWF0Y2hlcygvXigoW148PigpXFxbXFxdXFxcXC4sOzpcXHNAXCJdKyhcXC5bXjw+KClcXFtcXF1cXFxcLiw7Olxcc0BcIl0rKSopfChcIi4rXCIpKUAoKFxcW1swLTldezEsM31cXC5bMC05XXsxLDN9XFwuWzAtOV17MSwzfVxcLlswLTldezEsM31dKXwoKFthLXpBLVpcXC0wLTldK1xcLikrW2EtekEtWl17Mix9KSkkLyksXHJcbiAgICAgICAgICAgIHBhc3N3b3JkOiB5dXBcclxuICAgICAgICAgICAgICAgIC5zdHJpbmcoKVxyXG4gICAgICAgICAgICAgICAgLnJlcXVpcmVkKClcclxuICAgICAgICAgICAgICAgIC5taW4oNilcclxuICAgICAgICB9KSxcclxuICAgICAgICAvLyBmb3JtIGNvbmZpZ3NcclxuICAgICAgICB7IHJlZ2lzdGVyLCBoYW5kbGVTdWJtaXQsIGZvcm1TdGF0ZTogeyBlcnJvcnMgfSB9ID0gdXNlRm9ybSh7XHJcbiAgICAgICAgICAgIG1vZGU6ICdvbkNoYW5nZScsXHJcbiAgICAgICAgICAgIHJlc29sdmVyOiB5dXBSZXNvbHZlcihzY2hlbWEpXHJcbiAgICAgICAgfSksXHJcbiAgICAgICAgLy8gb24gZm9ybSBzdWJtaXRcclxuICAgICAgICBzdWJtaXQgPSBhc3luYyAoZGF0YSkgPT4ge1xyXG4gICAgICAgICAgICB0cnkge1xyXG4gICAgICAgICAgICAgICAgY29uc3QgeyB0b2tlbiB9ID0gKGF3YWl0IHJlcXVlc3QoIExPR0lOLCBkYXRhICkpLmRhdGE/LmRhdGE7XHJcbiAgICAgICAgICAgICAgICBzZXRDb29raWUoIGBhY2Nlc3MtdG9rZW5gLCB0b2tlbiwgMSApO1xyXG4gICAgICAgICAgICAgICAgY29uc3QgdXNlciA9ICggYXdhaXQgcmVxdWVzdCggR0VUX0FDQ09VTlRfSU5GTywge30sIHthdXRoOiB0cnVlfSApICkuZGF0YT8uZGF0YTtcclxuICAgICAgICAgICAgICAgIGRpc3BhdGNoKGxvZ2luKHVzZXIpKTtcclxuICAgICAgICAgICAgICAgIHJvdXRlci5wdXNoKGAvYCk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgY2F0Y2goIGVycm9yICkge1xyXG4gICAgICAgICAgICAgICAgdG9hc3QoIGVycm9yLnJlc3BvbnNlLmRhdGE/Lm1lc3NhZ2UgfHwgYHVua25vd24gZXJyb3JgLCB7XHJcbiAgICAgICAgICAgICAgICAgICAgdHlwZTogYGVycm9yYFxyXG4gICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgaGFuZGxlX3RvX3JlZ2lzdGVyX2NsaWNrKClcclxuICAgICAgICB9O1xyXG5cclxuICAgICAgICBcclxuXHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuY29udGFpbmVyfT5cclxuICAgICAgICAgICAgPFRpdGxlXHJcbiAgICAgICAgICAgICAgICBzdHlsZXM9e3N0eWxlcy50aXRsZX1cclxuICAgICAgICAgICAgICAgIGNvbnRlbnQ9e3QoJ2hlYWRlci5sb2dpbk1vZGFsLnRpdGxlJyl9XHJcbiAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgIDxmb3JtIG9uU3VibWl0PXtoYW5kbGVTdWJtaXQoc3VibWl0KX0+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmlucHV0c30+XHJcbiAgICAgICAgICAgICAgICAgICAgPElucHV0Q29udGFpbmVyXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlkPSduYW1lJ1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB0eXBlPSd0ZXh0J1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBwbGFjZWhvbGRlcj17dHJhbnNsYXRlKCdlbWFpbCcpfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBlcnJvcnM9eyghIWVycm9ycy5lbWFpbCl9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG90aGVyPXtyZWdpc3RlcignZW1haWwnKX1cclxuICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICAgIDxJbnB1dENvbnRhaW5lclxyXG4gICAgICAgICAgICAgICAgICAgICAgICBpZD0ncGFzc3dvcmQnXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU9J3Bhc3N3b3JkJ1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBwbGFjZWhvbGRlcj17dHJhbnNsYXRlKCdwYXNzd29yZCcpfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBlcnJvcnM9eyEhZXJyb3JzLnBhc3N3b3JkfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBvdGhlcj17cmVnaXN0ZXIoJ3Bhc3N3b3JkJyl9XHJcbiAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPFJlc2V0UGFzc3dvcmRMaW5rXHJcbiAgICAgICAgICAgICAgICAgICAgY2xpY2s9e2hhbmRsZVJlc2V0UGFzc01vZGFsfVxyXG4gICAgICAgICAgICAgICAgICAgIHN0eWxlcz17c3R5bGVzLnJlc2V0X3Bhc3N3b3JkfVxyXG4gICAgICAgICAgICAgICAgICAgIGNvbnRlbnQ9e3QoJ2hlYWRlci5sb2dpbk1vZGFsLnJlc1Bhc3N3b3JkJyl9XHJcbiAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgPFN1Ym1pdFxyXG4gICAgICAgICAgICAgICAgICAgIHN0eWxlcz17c3R5bGVzLnN1Ym1pdH1cclxuICAgICAgICAgICAgICAgICAgICBjb250ZW50PXt0KCdoZWFkZXIubG9naW5Nb2RhbC5zdWJtaXQnKX1cclxuICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgIDwvZm9ybT5cclxuICAgICAgICAgICAgPFRvUmVnaXN0ZXJcclxuICAgICAgICAgICAgICAgIGhyZWY9Jy9yZWdpc3RyYXRpb24nXHJcbiAgICAgICAgICAgICAgICBjbGljaz17aGFuZGxlX3RvX3JlZ2lzdGVyX2NsaWNrfVxyXG4gICAgICAgICAgICAgICAgY29udGFpbmVyX3N0eWxlcz17c3R5bGVzLnRvX3JlZ2lzdGVyX2NvbnRhaW5lcn1cclxuICAgICAgICAgICAgICAgIGNvbnRlbnRfc3R5bGVzPXtzdHlsZXMudG9fcmVnaXN0ZXJfY29udGVudH1cclxuICAgICAgICAgICAgICAgIG9yPXt0KCdoZWFkZXIubG9naW5Nb2RhbC5vcicpfVxyXG4gICAgICAgICAgICAgICAgcmVnaXN0ZXJfdGV4dF9zdHlsZXM9e3N0eWxlcy50b19yZWdpc3Rlcl90ZXh0fVxyXG4gICAgICAgICAgICAgICAgY29udGVudD17dCgnaGVhZGVyLmxvZ2luTW9kYWwucmVnaXN0ZXInKX1cclxuICAgICAgICAgICAgLz5cclxuXHJcblxyXG4gICAgICAgICAgICA8VG9hc3RDb250YWluZXIgLz5cclxuICAgICAgICA8L2Rpdj5cclxuICAgIClcclxufVxyXG4iXSwic291cmNlUm9vdCI6IiJ9