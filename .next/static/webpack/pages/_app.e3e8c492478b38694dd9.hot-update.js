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
              console.log(user);
              dispatch((0,_redux_features_userSlice__WEBPACK_IMPORTED_MODULE_14__.login)(user));
              router.push("/");
              _context.next = 35;
              break;

            case 32:
              _context.prev = 32;
              _context.t6 = _context["catch"](0);
              (0,react_toastify__WEBPACK_IMPORTED_MODULE_17__.toast)(((_error$response$data = _context.t6.response.data) === null || _error$response$data === void 0 ? void 0 : _error$response$data.message) || "unknown error", {
                type: "error"
              });

            case 35:
              handle_to_register_click();

            case 36:
            case "end":
              return _context.stop();
          }
        }
      }, _callee, null, [[0, 32]]);
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
      lineNumber: 74,
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
          lineNumber: 80,
          columnNumber: 21
        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_common_auth_InputContainer_InputContainer__WEBPACK_IMPORTED_MODULE_8__.InputContainer, {
          id: "password",
          type: "password",
          placeholder: translate('password'),
          errors: !!errors.password,
          other: register('password')
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 87,
          columnNumber: 21
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 79,
        columnNumber: 17
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_common_ResetPasswordLink__WEBPACK_IMPORTED_MODULE_10__.ResetPasswordLink, {
        click: handleResetPassModal,
        styles: (_LoginForm_module_scss__WEBPACK_IMPORTED_MODULE_18___default().reset_password),
        content: t('header.loginModal.resPassword')
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 95,
        columnNumber: 17
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_common_Submit__WEBPACK_IMPORTED_MODULE_11__.Submit, {
        styles: (_LoginForm_module_scss__WEBPACK_IMPORTED_MODULE_18___default().submit),
        content: t('header.loginModal.submit')
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 100,
        columnNumber: 17
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 78,
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
      lineNumber: 105,
      columnNumber: 13
    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_toastify__WEBPACK_IMPORTED_MODULE_17__.ToastContainer, {}, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 116,
      columnNumber: 13
    }, this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 73,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9IZWFkZXIvQmFyL0xvZ2luL0xvZ2luRm9ybS9Mb2dpbkZvcm0uanN4Il0sIm5hbWVzIjpbIkxvZ2luRm9ybSIsIm9uTW9kYWxDbG9zZSIsImhhbmRsZVJlc2V0UGFzc01vZGFsIiwicm91dGVyIiwidXNlUm91dGVyIiwiZGlzcGF0Y2giLCJ1c2VEaXNwYXRjaCIsInVzZVRyYW5zbGF0aW9uIiwidCIsInRyYW5zbGF0aW9uUGF0aCIsInRyYW5zbGF0ZSIsImtleSIsImhhbmRsZV90b19yZWdpc3Rlcl9jbGljayIsImRvY3VtZW50IiwicXVlcnlTZWxlY3RvciIsInN0eWxlIiwib3ZlcmZsb3ciLCJzY2hlbWEiLCJ5dXAiLCJzaGFwZSIsImVtYWlsIiwicmVxdWlyZWQiLCJtYXRjaGVzIiwicGFzc3dvcmQiLCJtaW4iLCJ1c2VGb3JtIiwibW9kZSIsInJlc29sdmVyIiwieXVwUmVzb2x2ZXIiLCJyZWdpc3RlciIsImhhbmRsZVN1Ym1pdCIsImVycm9ycyIsImZvcm1TdGF0ZSIsInN1Ym1pdCIsImRhdGEiLCJyZXF1ZXN0IiwiTE9HSU4iLCJ0b2tlbiIsInNldENvb2tpZSIsIkdFVF9BQ0NPVU5UX0lORk8iLCJhdXRoIiwidXNlciIsImNvbnNvbGUiLCJsb2ciLCJsb2dpbiIsInB1c2giLCJ0b2FzdCIsInJlc3BvbnNlIiwibWVzc2FnZSIsInR5cGUiLCJzdHlsZXMiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtDQUVBOztBQUNBO0FBQ0E7QUFDQTtBQUNBO0NBRUE7O0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBR08sU0FBU0EsU0FBVCxPQUEyRDtBQUFBOztBQUFBLE1BQXRDQyxZQUFzQyxRQUF0Q0EsWUFBc0M7QUFBQSxNQUF4QkMsb0JBQXdCLFFBQXhCQSxvQkFBd0I7QUFDOUQsTUFBTUMs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QkFBYyxFQUFFQSxvRkFKcEI7QUFLSSxRQUFFLEVBQUUxQyxDQUFDLENBQUMsc0JBQUQsQ0FMVDtBQU1JLDBCQUFvQixFQUFFMEMsaUZBTjFCO0FBT0ksYUFBTyxFQUFFMUMsQ0FBQyxDQUFDLDRCQUFEO0FBUGQ7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQWhDSixlQTJDSSw4REFBQywyREFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBM0NKO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxVQURKO0FBK0NIOztHQWhHZVIsUztVQUNHSSwrRCxFQUdBRSxxRCxFQUVIQyxrRSxFQW1CNENrQixvRDs7O0tBekI1Q3pCLFMiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvX2FwcC5lM2U4YzQ5MjQ3OGIzODY5NGRkOS5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiLy8gaG9va3MgYW5kIGhlbHBlcnNcclxuaW1wb3J0IHVzZVRyYW5zbGF0aW9uIGZyb20gJ25leHQtdHJhbnNsYXRlL3VzZVRyYW5zbGF0aW9uJ1xyXG5pbXBvcnQgeyB1c2VGb3JtIH0gZnJvbSAncmVhY3QtaG9vay1mb3JtJ1xyXG5pbXBvcnQgKiBhcyB5dXAgZnJvbSAneXVwJ1xyXG5pbXBvcnQgeyB5dXBSZXNvbHZlciB9IGZyb20gJ0Bob29rZm9ybS9yZXNvbHZlcnMveXVwJ1xyXG5pbXBvcnQgeyByZXF1ZXN0LCBzZXRDb29raWUgfSBmcm9tICcuLi8uLi8uLi8uLi8uLi9saWIvZXIubGliJztcclxuLy9jb21wb25lbnRzXHJcbmltcG9ydCB7IElucHV0Q29udGFpbmVyIH0gZnJvbSAnL2NvbXBvbmVudHMvY29tbW9uL2F1dGgvSW5wdXRDb250YWluZXIvSW5wdXRDb250YWluZXInXHJcbmltcG9ydCB7IFRpdGxlIH0gZnJvbSAnLi4vY29tbW9uL1RpdGxlJ1xyXG5pbXBvcnQgeyBSZXNldFBhc3N3b3JkTGluayB9IGZyb20gJy4uL2NvbW1vbi9SZXNldFBhc3N3b3JkTGluaydcclxuaW1wb3J0IHsgU3VibWl0IH0gZnJvbSAnLi4vY29tbW9uL1N1Ym1pdCdcclxuaW1wb3J0IHsgVG9SZWdpc3RlciB9IGZyb20gJy4uL2NvbW1vbi9Ub1JlZ2lzdGVyJ1xyXG4vLyBzdHlsZXMgXHJcbmltcG9ydCBzdHlsZXMgZnJvbSAnLi9Mb2dpbkZvcm0ubW9kdWxlLnNjc3MnXHJcbmltcG9ydCB7IHVzZURpc3BhdGNoIH0gZnJvbSAncmVhY3QtcmVkdXgnXHJcbmltcG9ydCB7IGxvZ2luIH0gZnJvbSAnLi4vLi4vLi4vLi4vLi4vcmVkdXgvZmVhdHVyZXMvdXNlclNsaWNlJ1xyXG5pbXBvcnQgeyBHRVRfQUNDT1VOVF9JTkZPLCBMT0dJTiB9IGZyb20gJy4uLy4uLy4uLy4uLy4uL2xpYi9yZXF1ZXN0LWRlc3RpbmF0aW9ucyc7XHJcblxyXG5pbXBvcnQgeyBUb2FzdENvbnRhaW5lciwgdG9hc3QgfSBmcm9tICdyZWFjdC10b2FzdGlmeSc7XHJcbmltcG9ydCB7IHVzZVJvdXRlciB9IGZyb20gJ25leHQvZGlzdC9jbGllbnQvcm91dGVyJztcclxuXHJcblxyXG5leHBvcnQgZnVuY3Rpb24gTG9naW5Gb3JtKHsgb25Nb2RhbENsb3NlLCBoYW5kbGVSZXNldFBhc3NNb2RhbCB9KSB7XHJcbiAgICBjb25zdCByb3V0ZXIgPSB1c2VSb3V0ZXIoKTtcclxuXHJcbiAgICBjb25zdFxyXG4gICAgICAgIGRpc3BhdGNoID0gdXNlRGlzcGF0Y2goKSxcclxuICAgICAgICAvLyB0cmFuc2xhdGlvbiBjb25zZmlnc1xyXG4gICAgICAgIHsgdCB9ID0gdXNlVHJhbnNsYXRpb24oJ2NvbW1vbicpLFxyXG4gICAgICAgIHRyYW5zbGF0aW9uUGF0aCA9ICdyZWdpc3RyYXRpb24uaW5wdXRQbGFjZUhvbGRlcnMuJyxcclxuICAgICAgICB0cmFuc2xhdGUgPSBrZXkgPT4gdChgJHt0cmFuc2xhdGlvblBhdGh9JHtrZXl9YCksXHJcbiAgICAgICAgaGFuZGxlX3RvX3JlZ2lzdGVyX2NsaWNrID0gKCkgPT4ge1xyXG4gICAgICAgICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdib2R5Jykuc3R5bGUub3ZlcmZsb3cgPSAndmlzaWJsZSdcclxuICAgICAgICAgICAgb25Nb2RhbENsb3NlKClcclxuICAgICAgICB9LFxyXG4gICAgICAgIC8vIHl1cCBjb25maWdzXHJcbiAgICAgICAgc2NoZW1hID0geXVwLm9iamVjdCgpLnNoYXBlKHtcclxuICAgICAgICAgICAgZW1haWw6IHl1cFxyXG4gICAgICAgICAgICAgICAgLnN0cmluZygpXHJcbiAgICAgICAgICAgICAgICAucmVxdWlyZWQoKVxyXG4gICAgICAgICAgICAgICAgLm1hdGNoZXMoL14oKFtePD4oKVxcW1xcXVxcXFwuLDs6XFxzQFwiXSsoXFwuW148PigpXFxbXFxdXFxcXC4sOzpcXHNAXCJdKykqKXwoXCIuK1wiKSlAKChcXFtbMC05XXsxLDN9XFwuWzAtOV17MSwzfVxcLlswLTldezEsM31cXC5bMC05XXsxLDN9XSl8KChbYS16QS1aXFwtMC05XStcXC4pK1thLXpBLVpdezIsfSkpJC8pLFxyXG4gICAgICAgICAgICBwYXNzd29yZDogeXVwXHJcbiAgICAgICAgICAgICAgICAuc3RyaW5nKClcclxuICAgICAgICAgICAgICAgIC5yZXF1aXJlZCgpXHJcbiAgICAgICAgICAgICAgICAubWluKDYpXHJcbiAgICAgICAgfSksXHJcbiAgICAgICAgLy8gZm9ybSBjb25maWdzXHJcbiAgICAgICAgeyByZWdpc3RlciwgaGFuZGxlU3VibWl0LCBmb3JtU3RhdGU6IHsgZXJyb3JzIH0gfSA9IHVzZUZvcm0oe1xyXG4gICAgICAgICAgICBtb2RlOiAnb25DaGFuZ2UnLFxyXG4gICAgICAgICAgICByZXNvbHZlcjogeXVwUmVzb2x2ZXIoc2NoZW1hKVxyXG4gICAgICAgIH0pLFxyXG4gICAgICAgIC8vIG9uIGZvcm0gc3VibWl0XHJcbiAgICAgICAgc3VibWl0ID0gYXN5bmMgKGRhdGEpID0+IHtcclxuICAgICAgICAgICAgdHJ5IHtcclxuICAgICAgICAgICAgICAgIGNvbnN0IHsgdG9rZW4gfSA9IChhd2FpdCByZXF1ZXN0KCBMT0dJTiwgZGF0YSApKS5kYXRhPy5kYXRhO1xyXG4gICAgICAgICAgICAgICAgc2V0Q29va2llKCBgYWNjZXNzLXRva2VuYCwgdG9rZW4sIDEgKTtcclxuICAgICAgICAgICAgICAgIGNvbnN0IHVzZXIgPSAoIGF3YWl0IHJlcXVlc3QoIEdFVF9BQ0NPVU5UX0lORk8sIHt9LCB7YXV0aDogdHJ1ZX0gKSApLmRhdGE/LmRhdGE7XHJcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyggdXNlciApO1xyXG4gICAgICAgICAgICAgICAgZGlzcGF0Y2gobG9naW4odXNlcikpO1xyXG4gICAgICAgICAgICAgICAgcm91dGVyLnB1c2goYC9gKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBjYXRjaCggZXJyb3IgKSB7XHJcbiAgICAgICAgICAgICAgICB0b2FzdCggZXJyb3IucmVzcG9uc2UuZGF0YT8ubWVzc2FnZSB8fCBgdW5rbm93biBlcnJvcmAsIHtcclxuICAgICAgICAgICAgICAgICAgICB0eXBlOiBgZXJyb3JgXHJcbiAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBoYW5kbGVfdG9fcmVnaXN0ZXJfY2xpY2soKVxyXG4gICAgICAgIH07XHJcblxyXG4gICAgICAgIFxyXG5cclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5jb250YWluZXJ9PlxyXG4gICAgICAgICAgICA8VGl0bGVcclxuICAgICAgICAgICAgICAgIHN0eWxlcz17c3R5bGVzLnRpdGxlfVxyXG4gICAgICAgICAgICAgICAgY29udGVudD17dCgnaGVhZGVyLmxvZ2luTW9kYWwudGl0bGUnKX1cclxuICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgPGZvcm0gb25TdWJtaXQ9e2hhbmRsZVN1Ym1pdChzdWJtaXQpfT5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuaW5wdXRzfT5cclxuICAgICAgICAgICAgICAgICAgICA8SW5wdXRDb250YWluZXJcclxuICAgICAgICAgICAgICAgICAgICAgICAgaWQ9J25hbWUnXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU9J3RleHQnXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHBsYWNlaG9sZGVyPXt0cmFuc2xhdGUoJ2VtYWlsJyl9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGVycm9ycz17KCEhZXJyb3JzLmVtYWlsKX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgb3RoZXI9e3JlZ2lzdGVyKCdlbWFpbCcpfVxyXG4gICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgPElucHV0Q29udGFpbmVyXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlkPSdwYXNzd29yZCdcclxuICAgICAgICAgICAgICAgICAgICAgICAgdHlwZT0ncGFzc3dvcmQnXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHBsYWNlaG9sZGVyPXt0cmFuc2xhdGUoJ3Bhc3N3b3JkJyl9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGVycm9ycz17ISFlcnJvcnMucGFzc3dvcmR9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG90aGVyPXtyZWdpc3RlcigncGFzc3dvcmQnKX1cclxuICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8UmVzZXRQYXNzd29yZExpbmtcclxuICAgICAgICAgICAgICAgICAgICBjbGljaz17aGFuZGxlUmVzZXRQYXNzTW9kYWx9XHJcbiAgICAgICAgICAgICAgICAgICAgc3R5bGVzPXtzdHlsZXMucmVzZXRfcGFzc3dvcmR9XHJcbiAgICAgICAgICAgICAgICAgICAgY29udGVudD17dCgnaGVhZGVyLmxvZ2luTW9kYWwucmVzUGFzc3dvcmQnKX1cclxuICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICA8U3VibWl0XHJcbiAgICAgICAgICAgICAgICAgICAgc3R5bGVzPXtzdHlsZXMuc3VibWl0fVxyXG4gICAgICAgICAgICAgICAgICAgIGNvbnRlbnQ9e3QoJ2hlYWRlci5sb2dpbk1vZGFsLnN1Ym1pdCcpfVxyXG4gICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgPC9mb3JtPlxyXG4gICAgICAgICAgICA8VG9SZWdpc3RlclxyXG4gICAgICAgICAgICAgICAgaHJlZj0nL3JlZ2lzdHJhdGlvbidcclxuICAgICAgICAgICAgICAgIGNsaWNrPXtoYW5kbGVfdG9fcmVnaXN0ZXJfY2xpY2t9XHJcbiAgICAgICAgICAgICAgICBjb250YWluZXJfc3R5bGVzPXtzdHlsZXMudG9fcmVnaXN0ZXJfY29udGFpbmVyfVxyXG4gICAgICAgICAgICAgICAgY29udGVudF9zdHlsZXM9e3N0eWxlcy50b19yZWdpc3Rlcl9jb250ZW50fVxyXG4gICAgICAgICAgICAgICAgb3I9e3QoJ2hlYWRlci5sb2dpbk1vZGFsLm9yJyl9XHJcbiAgICAgICAgICAgICAgICByZWdpc3Rlcl90ZXh0X3N0eWxlcz17c3R5bGVzLnRvX3JlZ2lzdGVyX3RleHR9XHJcbiAgICAgICAgICAgICAgICBjb250ZW50PXt0KCdoZWFkZXIubG9naW5Nb2RhbC5yZWdpc3RlcicpfVxyXG4gICAgICAgICAgICAvPlxyXG5cclxuXHJcbiAgICAgICAgICAgIDxUb2FzdENvbnRhaW5lciAvPlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgKVxyXG59XHJcbiJdLCJzb3VyY2VSb290IjoiIn0=