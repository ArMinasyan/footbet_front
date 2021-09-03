self["webpackHotUpdate_N_E"]("pages/_app",{

/***/ "./components/Header/Bar/Login/ResetPassword/GetEmailCode/GetEmailCode.jsx":
/*!*********************************************************************************!*\
  !*** ./components/Header/Bar/Login/ResetPassword/GetEmailCode/GetEmailCode.jsx ***!
  \*********************************************************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "GetEmailCode": function() { return /* binding */ GetEmailCode; }
/* harmony export */ });
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var C_Users_Admin_Desktop_projects_foot_bet_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/defineProperty */ "./node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var C_Users_Admin_Desktop_projects_foot_bet_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/@babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var C_Users_Admin_Desktop_projects_foot_bet_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(C_Users_Admin_Desktop_projects_foot_bet_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var C_Users_Admin_Desktop_projects_foot_bet_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator */ "./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js");
/* harmony import */ var next_translate_useTranslation__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! next-translate/useTranslation */ "./node_modules/next-translate/lib/esm/useTranslation.js");
/* harmony import */ var react_hook_form__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react-hook-form */ "./node_modules/react-hook-form/dist/index.esm.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var yup__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! yup */ "./node_modules/yup/es/index.js");
/* harmony import */ var _hookform_resolvers_yup__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @hookform/resolvers/yup */ "./node_modules/@hookform/resolvers/yup/dist/yup.module.js");
/* harmony import */ var _input_configs__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./input_configs */ "./components/Header/Bar/Login/ResetPassword/GetEmailCode/input_configs.js");
/* harmony import */ var _common_Title__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../common/Title */ "./components/Header/Bar/Login/common/Title.jsx");
/* harmony import */ var _common_Submit__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../common/Submit */ "./components/Header/Bar/Login/common/Submit.jsx");
/* harmony import */ var _common_auth_Modal_Modal__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../../../../common/auth/Modal/Modal */ "./components/common/auth/Modal/Modal.jsx");
/* harmony import */ var _NewPassword_NewPassword__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../NewPassword/NewPassword */ "./components/Header/Bar/Login/ResetPassword/NewPassword/NewPassword.jsx");
/* harmony import */ var _GetEmailCode_module_scss__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./GetEmailCode.module.scss */ "./components/Header/Bar/Login/ResetPassword/GetEmailCode/GetEmailCode.module.scss");
/* harmony import */ var _GetEmailCode_module_scss__WEBPACK_IMPORTED_MODULE_17___default = /*#__PURE__*/__webpack_require__.n(_GetEmailCode_module_scss__WEBPACK_IMPORTED_MODULE_17__);
/* harmony import */ var _lib_er_lib__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../../../../../../lib/er.lib */ "./lib/er.lib.js");
/* harmony import */ var react_toastify__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! react-toastify */ "./node_modules/react-toastify/dist/react-toastify.esm.js");
/* harmony import */ var _lib_request_destinations__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../../../../../../lib/request-destinations */ "./lib/request-destinations.js");
/* module decorator */ module = __webpack_require__.hmd(module);






var _jsxFileName = "C:\\Users\\Admin\\Desktop\\projects\\foot-bet\\components\\Header\\Bar\\Login\\ResetPassword\\GetEmailCode\\GetEmailCode.jsx",
    _s = $RefreshSig$();

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { (0,C_Users_Admin_Desktop_projects_foot_bet_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__.default)(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

// hooks and helpers





 //components




 // styles





function GetEmailCode(_ref) {
  _s();

  var _this = this;

  var onModalClose = _ref.onModalClose;

  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_6__.useState)(true),
      showGetEmailCodeMl = _useState[0],
      setShowEmailCodeMl = _useState[1],
      _useState2 = (0,react__WEBPACK_IMPORTED_MODULE_6__.useState)(false),
      showNewPasswordMl = _useState2[0],
      setShowNewPasswordMl = _useState2[1],
      _useTranslation = (0,next_translate_useTranslation__WEBPACK_IMPORTED_MODULE_4__.default)('common'),
      t = _useTranslation.t,
      translationPath = 'header.getEmailCodeModal.',
      translate = function translate(key) {
    return t("".concat(translationPath).concat(key));
  },
      schema = yup__WEBPACK_IMPORTED_MODULE_7__.object().shape({
    num1: yup__WEBPACK_IMPORTED_MODULE_7__.string().required().matches(/[0-9]/mg),
    num2: yup__WEBPACK_IMPORTED_MODULE_7__.string().required().matches(/[0-9]/mg),
    num3: yup__WEBPACK_IMPORTED_MODULE_7__.string().required().matches(/[0-9]/mg),
    num4: yup__WEBPACK_IMPORTED_MODULE_7__.string().required().matches(/[0-9]/mg),
    num5: yup__WEBPACK_IMPORTED_MODULE_7__.string().required().matches(/[0-9]/mg),
    num6: yup__WEBPACK_IMPORTED_MODULE_7__.string().required().matches(/[0-9]/mg)
  }),
      _useForm = (0,react_hook_form__WEBPACK_IMPORTED_MODULE_5__.useForm)({
    mode: 'onChange',
    resolver: (0,_hookform_resolvers_yup__WEBPACK_IMPORTED_MODULE_8__.yupResolver)(schema)
  }),
      register = _useForm.register,
      handleSubmit = _useForm.handleSubmit,
      errors = _useForm.formState.errors,
      jump = function jump(x) {
    if (x.value.length) {
      x = x.nextSibling;

      if (x && /text/.test(x.type)) {
        x.focus();
      }
    }
  },
      jumpBack = function jumpBack(x) {
    if (x.target.value.length == 0) {
      if (x.code === 'Backspace') {
        if (document.querySelector(".move:focus").previousSibling) {
          document.querySelector(".move:focus").previousSibling.focus();
        }
      }
    }
  },
      submit = /*#__PURE__*/function () {
    var _ref2 = (0,C_Users_Admin_Desktop_projects_foot_bet_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_3__.default)( /*#__PURE__*/C_Users_Admin_Desktop_projects_foot_bet_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_2___default().mark(function _callee(data) {
      var _err$response$data;

      return C_Users_Admin_Desktop_projects_foot_bet_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_2___default().wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              _context.prev = 0;
              data = Object.values(data).reduce(function (ac, el) {
                return ac + el;
              });
              _context.next = 4;
              return (0,_lib_er_lib__WEBPACK_IMPORTED_MODULE_14__.request)(_lib_request_destinations__WEBPACK_IMPORTED_MODULE_15__.VERIFY_PASSWORD_RESET, {
                code: data
              }, {
                headers: {
                  'Authorization': "Bearer ".concat((0,_lib_er_lib__WEBPACK_IMPORTED_MODULE_14__.getCookie)("reset-token"))
                }
              });

            case 4:
              setShowEmailCodeMl(false);
              setShowNewPasswordMl(true);
              _context.next = 11;
              break;

            case 8:
              _context.prev = 8;
              _context.t0 = _context["catch"](0);
              (0,react_toastify__WEBPACK_IMPORTED_MODULE_16__.toast)(((_err$response$data = _context.t0.response.data) === null || _err$response$data === void 0 ? void 0 : _err$response$data.message) || "\u041D\u0435 \u0443\u0434\u0430\u043B\u043E\u0441\u044C \u0432\u043E\u0441\u0442\u0430\u043D\u043E\u0432\u0438\u0442\u044C \u043F\u0430\u0440\u043E\u043B\u044C", {
                type: "error"
              });

            case 11:
            case "end":
              return _context.stop();
          }
        }
      }, _callee, null, [[0, 8]]);
    }));

    return function submit(_x) {
      return _ref2.apply(this, arguments);
    };
  }();

  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
    children: [showGetEmailCodeMl && /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_common_auth_Modal_Modal__WEBPACK_IMPORTED_MODULE_12__.Modal, {
      onClose: onModalClose,
      contentStyles: (_GetEmailCode_module_scss__WEBPACK_IMPORTED_MODULE_17___default().m_content),
      containerStyles: (_GetEmailCode_module_scss__WEBPACK_IMPORTED_MODULE_17___default().m_container),
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
        className: (_GetEmailCode_module_scss__WEBPACK_IMPORTED_MODULE_17___default().container),
        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_common_Title__WEBPACK_IMPORTED_MODULE_10__.Title, {
          styles: (_GetEmailCode_module_scss__WEBPACK_IMPORTED_MODULE_17___default().title),
          content: translate('title')
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 88,
          columnNumber: 25
        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("form", {
          onSubmit: handleSubmit(submit),
          children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_common_Title__WEBPACK_IMPORTED_MODULE_10__.Title, {
            styles: (_GetEmailCode_module_scss__WEBPACK_IMPORTED_MODULE_17___default().description),
            content: translate('description')
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 93,
            columnNumber: 29
          }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
            className: (_GetEmailCode_module_scss__WEBPACK_IMPORTED_MODULE_17___default().inputs),
            children: _input_configs__WEBPACK_IMPORTED_MODULE_9__.inputs.map(function (el, i) {
              return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("input", _objectSpread({
                id: el.id,
                className: "".concat(el["class"], " \n                                                ").concat(errors.num1 || errors.num2 || errors.num3 || errors.num4 || errors.num5 || errors.num6 ? (_GetEmailCode_module_scss__WEBPACK_IMPORTED_MODULE_17___default().error_input) : (_GetEmailCode_module_scss__WEBPACK_IMPORTED_MODULE_17___default().success_input)).trim(),
                type: el.type,
                maxLength: el.maxLength,
                onInput: function onInput(e) {
                  return jump(e.target);
                },
                onKeyDown: function onKeyDown(e) {
                  return jumpBack(e);
                }
              }, register('num' + (i + 1))), el.key, false, {
                fileName: _jsxFileName,
                lineNumber: 100,
                columnNumber: 41
              }, _this);
            })
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 97,
            columnNumber: 29
          }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_common_Submit__WEBPACK_IMPORTED_MODULE_11__.Submit, {
            styles: (_GetEmailCode_module_scss__WEBPACK_IMPORTED_MODULE_17___default().submit),
            content: translate('send')
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 122,
            columnNumber: 29
          }, this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 92,
          columnNumber: 25
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 87,
        columnNumber: 21
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_toastify__WEBPACK_IMPORTED_MODULE_16__.ToastContainer, {}, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 128,
        columnNumber: 21
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 86,
      columnNumber: 17
    }, this), showNewPasswordMl && /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_NewPassword_NewPassword__WEBPACK_IMPORTED_MODULE_13__.NewPassword, {
      onModalClose: onModalClose
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 132,
      columnNumber: 38
    }, this)]
  }, void 0, true);
}

_s(GetEmailCode, "TRJlvtgv8cVc5ffn5SId1q++J0I=", false, function () {
  return [next_translate_useTranslation__WEBPACK_IMPORTED_MODULE_4__.default, react_hook_form__WEBPACK_IMPORTED_MODULE_5__.useForm];
});

_c = GetEmailCode;

var _c;

$RefreshReg$(_c, "GetEmailCode");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9IZWFkZXIvQmFyL0xvZ2luL1Jlc2V0UGFzc3dvcmQvR2V0RW1haWxDb2RlL0dldEVtYWlsQ29kZS5qc3giXSwibmFtZXMiOlsiR2V0RW1haWxDb2RlIiwib25Nb2RhbENsb3NlIiwidXNlU3RhdGUiLCJzaG93R2V0RW1haWxDb2RlTWwiLCJzZXRTaG93RW1haWxDb2RlTWwiLCJzaG93TmV3UGFzc3dvcmRNbCIsInNldFNob3dOZXdQYXNzd29yZE1sIiwidXNlVHJhbnNsYXRpb24iLCJ0IiwidHJhbnNsYXRpb25QYXRoIiwidHJhbnNsYXRlIiwia2V5Iiwic2NoZW1hIiwieXVwIiwic2hhcGUiLCJudW0xIiwicmVxdWlyZWQiLCJtYXRjaGVzIiwibnVtMiIsIm51bTMiLCJudW00IiwibnVtNSIsIm51bTYiLCJ1c2VGb3JtIiwibW9kZSIsInJlc29sdmVyIiwieXVwUmVzb2x2ZXIiLCJyZWdpc3RlciIsImhhbmRsZVN1Ym1pdCIsImVycm9ycyIsImZvcm1TdGF0ZSIsImp1bXAiLCJ4IiwidmFsdWUiLCJsZW5ndGgiLCJuZXh0U2libGluZyIsInRlc3QiLCJ0eXBlIiwiZm9jdXMiLCJqdW1wQmFjayIsInRhcmdldCIsImNvZGUiLCJkb2N1bWVudCIsInF1ZXJ5U2VsZWN0b3IiLCJwcmV2aW91c1NpYmxpbmciLCJzdWJtaXQiLCJkYXRhIiwiT2JqZWN0IiwidmFsdWVzIiwicmVkdWNlIiwiYWMiLCJlbCIsInJlcXVlc3QiLCJWRVJJRllfUEFTU1dPUkRfUkVTRVQiLCJoZWFkZXJzIiwiZ2V0Q29va2llIiwidG9hc3QiLCJyZXNwb25zZSIsIm1lc3NhZ2UiLCJzdHlsZXMiLCJpbnB1dHMiLCJpIiwiaWQiLCJ0cmltIiwibWF4TGVuZ3RoIiwiZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtD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OERBQUMsMkRBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQTFDSjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFGUixFQWdEUUwsaUJBQWlCLGlCQUFJLDhEQUFDLGtFQUFEO0FBQWEsa0JBQVksRUFBRUo7QUFBM0I7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQWhEN0I7QUFBQSxrQkFESjtBQXNESDs7R0FuSGVELFk7VUFPQU8sa0UsRUFhNENnQixvRDs7O0tBcEI1Q3ZCLFkiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvX2FwcC44ZGU5ZTQzNmJjMDA5YzI2M2Q2NC5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiLy8gaG9va3MgYW5kIGhlbHBlcnNcclxuaW1wb3J0IHVzZVRyYW5zbGF0aW9uIGZyb20gJ25leHQtdHJhbnNsYXRlL3VzZVRyYW5zbGF0aW9uJ1xyXG5pbXBvcnQgeyB1c2VGb3JtIH0gZnJvbSAncmVhY3QtaG9vay1mb3JtJ1xyXG5pbXBvcnQgeyB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0J1xyXG5pbXBvcnQgKiBhcyB5dXAgZnJvbSAneXVwJ1xyXG5pbXBvcnQgeyB5dXBSZXNvbHZlciB9IGZyb20gJ0Bob29rZm9ybS9yZXNvbHZlcnMveXVwJ1xyXG5pbXBvcnQgeyBpbnB1dHMgfSBmcm9tICcuL2lucHV0X2NvbmZpZ3MnXHJcbi8vY29tcG9uZW50c1xyXG5pbXBvcnQgeyBUaXRsZSB9IGZyb20gJy4uLy4uL2NvbW1vbi9UaXRsZSdcclxuaW1wb3J0IHsgU3VibWl0IH0gZnJvbSAnLi4vLi4vY29tbW9uL1N1Ym1pdCdcclxuaW1wb3J0IHsgTW9kYWwgfSBmcm9tICcuLi8uLi8uLi8uLi8uLi9jb21tb24vYXV0aC9Nb2RhbC9Nb2RhbCdcclxuaW1wb3J0IHsgTmV3UGFzc3dvcmQgfSBmcm9tICcuLi9OZXdQYXNzd29yZC9OZXdQYXNzd29yZCdcclxuLy8gc3R5bGVzXHJcbmltcG9ydCBzdHlsZXMgZnJvbSAnLi9HZXRFbWFpbENvZGUubW9kdWxlLnNjc3MnXHJcblxyXG5pbXBvcnQgeyByZXF1ZXN0LCBnZXRDb29raWUgfSBmcm9tICcvbGliL2VyLmxpYic7XHJcblxyXG5pbXBvcnQgeyBUb2FzdENvbnRhaW5lciwgdG9hc3QgfSBmcm9tICdyZWFjdC10b2FzdGlmeSc7XHJcbmltcG9ydCB7IFNUQVJUX1JFU0VUX1BBU1NXT1JELCBWRVJJRllfUEFTU1dPUkRfUkVTRVQgfSBmcm9tICcuLi8uLi8uLi8uLi8uLi8uLi9saWIvcmVxdWVzdC1kZXN0aW5hdGlvbnMnXHJcblxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIEdldEVtYWlsQ29kZSh7IG9uTW9kYWxDbG9zZSB9KSB7XHJcblxyXG4gICAgY29uc3RcclxuICAgICAgICAvLyBtb2RhbCBzdGF0ZXMgcGFzcyA9PiBwYXNzd29yZCBNbCA9PiBNb2RhbFxyXG4gICAgICAgIFtzaG93R2V0RW1haWxDb2RlTWwsIHNldFNob3dFbWFpbENvZGVNbF0gPSB1c2VTdGF0ZSh0cnVlKSxcclxuICAgICAgICBbc2hvd05ld1Bhc3N3b3JkTWwsIHNldFNob3dOZXdQYXNzd29yZE1sXSA9IHVzZVN0YXRlKGZhbHNlKSxcclxuICAgICAgICAvLyB0cmFuc2xhdGlvbiBjb25zZmlnc1xyXG4gICAgICAgIHsgdCB9ID0gdXNlVHJhbnNsYXRpb24oJ2NvbW1vbicpLFxyXG4gICAgICAgIHRyYW5zbGF0aW9uUGF0aCA9ICdoZWFkZXIuZ2V0RW1haWxDb2RlTW9kYWwuJyxcclxuICAgICAgICB0cmFuc2xhdGUgPSBrZXkgPT4gdChgJHt0cmFuc2xhdGlvblBhdGh9JHtrZXl9YCksXHJcbiAgICAgICAgLy8geXVwIGNvbmZpZ3NcclxuICAgICAgICBzY2hlbWEgPSB5dXAub2JqZWN0KCkuc2hhcGUoe1xyXG4gICAgICAgICAgICBudW0xOiB5dXAuc3RyaW5nKCkucmVxdWlyZWQoKS5tYXRjaGVzKC9bMC05XS9tZyksXHJcbiAgICAgICAgICAgIG51bTI6IHl1cC5zdHJpbmcoKS5yZXF1aXJlZCgpLm1hdGNoZXMoL1swLTldL21nKSxcclxuICAgICAgICAgICAgbnVtMzogeXVwLnN0cmluZygpLnJlcXVpcmVkKCkubWF0Y2hlcygvWzAtOV0vbWcpLFxyXG4gICAgICAgICAgICBudW00OiB5dXAuc3RyaW5nKCkucmVxdWlyZWQoKS5tYXRjaGVzKC9bMC05XS9tZyksXHJcbiAgICAgICAgICAgIG51bTU6IHl1cC5zdHJpbmcoKS5yZXF1aXJlZCgpLm1hdGNoZXMoL1swLTldL21nKSxcclxuICAgICAgICAgICAgbnVtNjogeXVwLnN0cmluZygpLnJlcXVpcmVkKCkubWF0Y2hlcygvWzAtOV0vbWcpLFxyXG4gICAgICAgIH0pLFxyXG4gICAgICAgIC8vIGZvcm0gY29uZmlnc1xyXG4gICAgICAgIHsgcmVnaXN0ZXIsIGhhbmRsZVN1Ym1pdCwgZm9ybVN0YXRlOiB7IGVycm9ycyB9IH0gPSB1c2VGb3JtKHtcclxuICAgICAgICAgICAgbW9kZTogJ29uQ2hhbmdlJyxcclxuICAgICAgICAgICAgcmVzb2x2ZXI6IHl1cFJlc29sdmVyKHNjaGVtYSlcclxuICAgICAgICB9KSxcclxuICAgICAgICAvLyBpbnB1dCBqdW1wcyBcclxuICAgICAgICBqdW1wID0gKHgpID0+IHtcclxuICAgICAgICAgICAgaWYgKHgudmFsdWUubGVuZ3RoKSB7XHJcbiAgICAgICAgICAgICAgICB4ID0geC5uZXh0U2libGluZztcclxuICAgICAgICAgICAgICAgIGlmICh4ICYmIC90ZXh0Ly50ZXN0KHgudHlwZSkpIHtcclxuICAgICAgICAgICAgICAgICAgICB4LmZvY3VzKCk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9LFxyXG4gICAgICAgIGp1bXBCYWNrID0gKHgpID0+IHtcclxuICAgICAgICAgICAgaWYgKHgudGFyZ2V0LnZhbHVlLmxlbmd0aCA9PSAwKSB7XHJcbiAgICAgICAgICAgICAgICBpZiAoeC5jb2RlID09PSAnQmFja3NwYWNlJykge1xyXG4gICAgICAgICAgICAgICAgICAgIGlmIChkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLm1vdmU6Zm9jdXNcIikucHJldmlvdXNTaWJsaW5nKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIubW92ZTpmb2N1c1wiKS5wcmV2aW91c1NpYmxpbmcuZm9jdXMoKTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9LFxyXG4gICAgICAgIC8vIG9uIGZvcm0gc3VibWl0XHJcbiAgICAgICAgc3VibWl0ID0gYXN5bmMgKGRhdGEpID0+IHtcclxuICAgICAgICAgICAgdHJ5IHtcclxuICAgICAgICAgICAgICAgIGRhdGEgPSBPYmplY3QudmFsdWVzKGRhdGEpLnJlZHVjZSgoYWMsIGVsKSA9PiBhYyArIGVsKVxyXG4gICAgICAgICAgICAgICAgYXdhaXQgcmVxdWVzdCggVkVSSUZZX1BBU1NXT1JEX1JFU0VULCB7IGNvZGU6IGRhdGEgfSwge1xyXG4gICAgICAgICAgICAgICAgICAgIGhlYWRlcnM6IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgJ0F1dGhvcml6YXRpb24nOiBgQmVhcmVyICR7Z2V0Q29va2llKGByZXNldC10b2tlbmApfWBcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICAgICAgc2V0U2hvd0VtYWlsQ29kZU1sKGZhbHNlKVxyXG4gICAgICAgICAgICAgICAgc2V0U2hvd05ld1Bhc3N3b3JkTWwodHJ1ZSlcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBjYXRjaCggZXJyICkge1xyXG4gICAgICAgICAgICAgICAgdG9hc3QoIGVyci5yZXNwb25zZS5kYXRhPy5tZXNzYWdlIHx8IGDQndC1INGD0LTQsNC70L7RgdGMINCy0L7RgdGC0LDQvdC+0LLQuNGC0Ywg0L/QsNGA0L7Qu9GMYCwge1xyXG4gICAgICAgICAgICAgICAgICAgIHR5cGU6IGBlcnJvcmBcclxuICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG5cclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPD5cclxuICAgICAgICAgICAge3Nob3dHZXRFbWFpbENvZGVNbCAmJlxyXG4gICAgICAgICAgICAgICAgPCBNb2RhbCBvbkNsb3NlPXtvbk1vZGFsQ2xvc2V9IGNvbnRlbnRTdHlsZXM9e3N0eWxlcy5tX2NvbnRlbnR9IGNvbnRhaW5lclN0eWxlcz17c3R5bGVzLm1fY29udGFpbmVyfT5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmNvbnRhaW5lcn0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxUaXRsZVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc3R5bGVzPXtzdHlsZXMudGl0bGV9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb250ZW50PXt0cmFuc2xhdGUoJ3RpdGxlJyl9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxmb3JtIG9uU3VibWl0PXtoYW5kbGVTdWJtaXQoc3VibWl0KX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8VGl0bGVcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdHlsZXM9e3N0eWxlcy5kZXNjcmlwdGlvbn1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb250ZW50PXt0cmFuc2xhdGUoJ2Rlc2NyaXB0aW9uJyl9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5pbnB1dHN9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaW5wdXRzLm1hcCgoZWwsIGkpID0+IChcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpbnB1dFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlkPXtlbC5pZH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9e1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBgJHtlbC5jbGFzc30gXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICR7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBlcnJvcnMubnVtMSB8fFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZXJyb3JzLm51bTIgfHxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGVycm9ycy5udW0zIHx8XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBlcnJvcnMubnVtNCB8fFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZXJyb3JzLm51bTUgfHxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGVycm9ycy5udW02ID8gc3R5bGVzLmVycm9yX2lucHV0IDogc3R5bGVzLnN1Y2Nlc3NfaW5wdXRcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfWAudHJpbSgpfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU9e2VsLnR5cGV9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAga2V5PXtlbC5rZXl9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbWF4TGVuZ3RoPXtlbC5tYXhMZW5ndGh9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb25JbnB1dD17ZSA9PiBqdW1wKGUudGFyZ2V0KX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbktleURvd249e2UgPT4ganVtcEJhY2soZSl9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgey4uLnJlZ2lzdGVyKCdudW0nICsgKGkgKyAxKSl9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPFN1Ym1pdFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN0eWxlcz17c3R5bGVzLnN1Ym1pdH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb250ZW50PXt0cmFuc2xhdGUoJ3NlbmQnKX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZm9ybT5cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICA8VG9hc3RDb250YWluZXIgLz5cclxuICAgICAgICAgICAgICAgIDwvTW9kYWwgPlxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIHNob3dOZXdQYXNzd29yZE1sICYmIDxOZXdQYXNzd29yZCBvbk1vZGFsQ2xvc2U9e29uTW9kYWxDbG9zZX0gLz5cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIDwvPlxyXG5cclxuICAgIClcclxufVxyXG4iXSwic291cmNlUm9vdCI6IiJ9