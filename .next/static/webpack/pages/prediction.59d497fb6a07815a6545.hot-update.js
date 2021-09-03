self["webpackHotUpdate_N_E"]("pages/prediction",{

/***/ "./components/Pages/PredictionPayments/Tabs/PaymentTab/PaymentPart/Payment/CardForm/CardForm.jsx":
/*!*******************************************************************************************************!*\
  !*** ./components/Pages/PredictionPayments/Tabs/PaymentTab/PaymentPart/Payment/CardForm/CardForm.jsx ***!
  \*******************************************************************************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CardForm": function() { return /* binding */ CardForm; }
/* harmony export */ });
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var C_Users_Admin_Desktop_projects_foot_bet_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/defineProperty */ "./node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var react_hook_form__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-hook-form */ "./node_modules/react-hook-form/dist/index.esm.js");
/* harmony import */ var yup__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! yup */ "./node_modules/yup/es/index.js");
/* harmony import */ var _hookform_resolvers_yup__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @hookform/resolvers/yup */ "./node_modules/@hookform/resolvers/yup/dist/yup.module.js");
/* harmony import */ var next_translate_useTranslation__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! next-translate/useTranslation */ "./node_modules/next-translate/lib/esm/useTranslation.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _CardForm_module_scss__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./CardForm.module.scss */ "./components/Pages/PredictionPayments/Tabs/PaymentTab/PaymentPart/Payment/CardForm/CardForm.module.scss");
/* harmony import */ var _CardForm_module_scss__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(_CardForm_module_scss__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var _Success_Success__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../Success/Success */ "./components/Pages/PredictionPayments/Tabs/PaymentTab/PaymentPart/Payment/Success/Success.jsx");
/* harmony import */ var _Pending_Pending__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../Pending/Pending */ "./components/Pages/PredictionPayments/Tabs/PaymentTab/PaymentPart/Payment/Pending/Pending.jsx");
/* module decorator */ module = __webpack_require__.hmd(module);




var _jsxFileName = "C:\\Users\\Admin\\Desktop\\projects\\foot-bet\\components\\Pages\\PredictionPayments\\Tabs\\PaymentTab\\PaymentPart\\Payment\\CardForm\\CardForm.jsx",
    _s = $RefreshSig$();

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { (0,C_Users_Admin_Desktop_projects_foot_bet_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__.default)(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

// hooks and helpers




 // styles

 // components



function CardForm() {
  _s();

  var _useTranslation = (0,next_translate_useTranslation__WEBPACK_IMPORTED_MODULE_5__.default)('prediction'),
      t = _useTranslation.t,
      translationPath = 'tabs.payments.cardForm.',
      translate = function translate(key) {
    return t("".concat(translationPath).concat(key));
  },
      _useState = (0,react__WEBPACK_IMPORTED_MODULE_6__.useState)(false),
      showSuccess = _useState[0],
      setShowSuccess = _useState[1],
      _useState2 = (0,react__WEBPACK_IMPORTED_MODULE_6__.useState)(false),
      showPending = _useState2[0],
      setShowPending = _useState2[1],
      _useState3 = (0,react__WEBPACK_IMPORTED_MODULE_6__.useState)(true),
      showForm = _useState3[0],
      setShowForm = _useState3[1],
      jump = function jump(x) {
    if (x.value.length === 4) {
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
      schema = yup__WEBPACK_IMPORTED_MODULE_3__.object().shape({
    fullName: yup__WEBPACK_IMPORTED_MODULE_3__.string().required().matches(/(^[A-Z ]*$)/mg),
    CVV: yup__WEBPACK_IMPORTED_MODULE_3__.string().min(3).max(3).required(),
    activeUntill: yup__WEBPACK_IMPORTED_MODULE_3__.string().required().min(5).max(5).matches(/(^[0-9/]*$)/mg)
  }),
      cardNumberSchema = yup__WEBPACK_IMPORTED_MODULE_3__.object().shape({
    Quartet1: yup__WEBPACK_IMPORTED_MODULE_3__.string().min(4).max(4).required().matches(/^[0-9]{4}$/mg),
    Quartet2: yup__WEBPACK_IMPORTED_MODULE_3__.string().min(4).max(4).required().matches(/^[0-9]{4}$/mg),
    Quartet3: yup__WEBPACK_IMPORTED_MODULE_3__.string().min(4).max(4).required().matches(/^[0-9]{4}$/mg),
    Quartet4: yup__WEBPACK_IMPORTED_MODULE_3__.string().min(4).max(4).required().matches(/^[0-9]{4}$/mg)
  }),
      margedSchema = schema.concat(cardNumberSchema),
      _useForm = (0,react_hook_form__WEBPACK_IMPORTED_MODULE_2__.useForm)({
    mode: 'onChange',
    resolver: (0,_hookform_resolvers_yup__WEBPACK_IMPORTED_MODULE_4__.yupResolver)(margedSchema)
  }),
      register = _useForm.register,
      handleSubmit = _useForm.handleSubmit,
      errors = _useForm.formState.errors,
      submit = function submit(data) {
    var dataEntries = Object.entries(data),
        cardNumbers = dataEntries.filter(function (el) {
      return el[0].indexOf('Quartet') > -1;
    }).reduce(function (ac, el) {
      return ac + el[1];
    }, ""),
        transformedData = dataEntries.filter(function (el) {
      return el[0].indexOf('Quartet');
    });
    transformedData.push(["cardNumber", cardNumbers]);
    setShowForm(false);
    setShowSuccess(true);
  };

  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
    children: [showForm && /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
      className: (_CardForm_module_scss__WEBPACK_IMPORTED_MODULE_9___default().container),
      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
        className: (_CardForm_module_scss__WEBPACK_IMPORTED_MODULE_9___default().content),
        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("form", {
          onSubmit: handleSubmit(submit),
          autoComplete: "off",
          children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
            className: (_CardForm_module_scss__WEBPACK_IMPORTED_MODULE_9___default().name),
            children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("input", _objectSpread(_objectSpread({
              id: "fullName"
            }, register('fullName')), {}, {
              type: "text",
              placeholder: translate('fullName'),
              className: errors.fullName ? (_CardForm_module_scss__WEBPACK_IMPORTED_MODULE_9___default().input_error) : (_CardForm_module_scss__WEBPACK_IMPORTED_MODULE_9___default().input_success)
            }), void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 78,
              columnNumber: 33
            }, this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 77,
            columnNumber: 29
          }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
            className: (_CardForm_module_scss__WEBPACK_IMPORTED_MODULE_9___default().card_number_content),
            children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("p", {
              children: translate('cardNumber')
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 87,
              columnNumber: 33
            }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
              className: (_CardForm_module_scss__WEBPACK_IMPORTED_MODULE_9___default().card_number_inputs),
              children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("input", _objectSpread(_objectSpread({
                id: "quartet1"
              }, register('Quartet1')), {}, {
                type: "text",
                className: "move ".concat(errors.Quartet1 ? (_CardForm_module_scss__WEBPACK_IMPORTED_MODULE_9___default().input_error) : (_CardForm_module_scss__WEBPACK_IMPORTED_MODULE_9___default().input_success)),
                onInput: function onInput(e) {
                  return jump(e.target);
                },
                onKeyDown: function onKeyDown(e) {
                  return jumpBack(e);
                }
              }), void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 91,
                columnNumber: 37
              }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("input", _objectSpread(_objectSpread({
                id: "quartet2"
              }, register('Quartet2')), {}, {
                type: "text",
                className: "move ".concat(errors.Quartet2 ? (_CardForm_module_scss__WEBPACK_IMPORTED_MODULE_9___default().input_error) : (_CardForm_module_scss__WEBPACK_IMPORTED_MODULE_9___default().input_success)),
                onInput: function onInput(e) {
                  return jump(e.target);
                },
                onKeyDown: function onKeyDown(e) {
                  return jumpBack(e);
                }
              }), void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 99,
                columnNumber: 37
              }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("input", _objectSpread(_objectSpread({
                id: "quartet3"
              }, register('Quartet3')), {}, {
                type: "text",
                className: "move ".concat(errors.Quartet3 ? (_CardForm_module_scss__WEBPACK_IMPORTED_MODULE_9___default().input_error) : (_CardForm_module_scss__WEBPACK_IMPORTED_MODULE_9___default().input_success)),
                onInput: function onInput(e) {
                  return jump(e.target);
                },
                onKeyDown: function onKeyDown(e) {
                  return jumpBack(e);
                }
              }), void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 107,
                columnNumber: 37
              }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("input", _objectSpread(_objectSpread({
                id: "quartet4"
              }, register('Quartet4')), {}, {
                type: "text",
                className: "move ".concat(errors.Quartet4 ? (_CardForm_module_scss__WEBPACK_IMPORTED_MODULE_9___default().input_error) : (_CardForm_module_scss__WEBPACK_IMPORTED_MODULE_9___default().input_success)),
                onInput: function onInput(e) {
                  return jump(e.target);
                },
                onKeyDown: function onKeyDown(e) {
                  return jumpBack(e);
                }
              }), void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 115,
                columnNumber: 37
              }, this)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 90,
              columnNumber: 33
            }, this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 86,
            columnNumber: 29
          }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
            className: (_CardForm_module_scss__WEBPACK_IMPORTED_MODULE_9___default().cvv),
            children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("input", _objectSpread(_objectSpread({
              id: "CVV"
            }, register('CVV')), {}, {
              type: "text",
              placeholder: translate('codeCVV'),
              className: errors.CVV ? (_CardForm_module_scss__WEBPACK_IMPORTED_MODULE_9___default().input_error) : (_CardForm_module_scss__WEBPACK_IMPORTED_MODULE_9___default().input_success)
            }), void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 126,
              columnNumber: 33
            }, this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 125,
            columnNumber: 29
          }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
            className: (_CardForm_module_scss__WEBPACK_IMPORTED_MODULE_9___default().active_untill),
            children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("input", _objectSpread(_objectSpread({
              id: "activeUntill"
            }, register('activeUntill')), {}, {
              type: "text",
              placeholder: translate('activeUntill'),
              className: errors.activeUntill ? (_CardForm_module_scss__WEBPACK_IMPORTED_MODULE_9___default().input_error) : (_CardForm_module_scss__WEBPACK_IMPORTED_MODULE_9___default().input_success)
            }), void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 135,
              columnNumber: 33
            }, this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 134,
            columnNumber: 29
          }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
            className: (_CardForm_module_scss__WEBPACK_IMPORTED_MODULE_9___default().success),
            children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("button", {
              type: "submit",
              children: translate('success')
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 144,
              columnNumber: 33
            }, this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 143,
            columnNumber: 29
          }, this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 76,
          columnNumber: 25
        }, this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 75,
        columnNumber: 21
      }, this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 74,
      columnNumber: 17
    }, this), showSuccess && /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_Success_Success__WEBPACK_IMPORTED_MODULE_7__.Success, {}, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 152,
      columnNumber: 29
    }, this), showPending && /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_Pending_Pending__WEBPACK_IMPORTED_MODULE_8__.Pending, {}, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 153,
      columnNumber: 29
    }, this)]
  }, void 0, true);
}

_s(CardForm, "vfHpiuVa+ginO+FIjPz6ZGk6554=", false, function () {
  return [next_translate_useTranslation__WEBPACK_IMPORTED_MODULE_5__.default, react_hook_form__WEBPACK_IMPORTED_MODULE_2__.useForm];
});

_c = CardForm;

var _c;

$RefreshReg$(_c, "CardForm");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9QYWdlcy9QcmVkaWN0aW9uUGF5bWVudHMvVGFicy9QYXltZW50VGFiL1BheW1lbnRQYXJ0L1BheW1lbnQvQ2FyZEZvcm0vQ2FyZEZvcm0uanN4Il0sIm5hbWVzIjpbIkNhcmRGb3JtIiwidXNlVHJhbnNsYXRpb24iLCJ0IiwidHJhbnNsYXRpb25QYXRoIiwidHJhbnNsYXRlIiwia2V5IiwidXNlU3RhdGUiLCJzaG93U3VjY2VzcyIsInNldFNob3dTdWNjZXNzIiwic2hvd1BlbmRpbmciLCJzZXRTaG93UGVuZGluZyIsInNob3dGb3JtIiwic2V0U2hvd0Zvcm0iLCJqdW1wIiwieCIsInZhbHVlIiwibGVuZ3RoIiwibmV4dFNpYmxpbmciLCJ0ZXN0IiwidHlwZSIsImZvY3VzIiwianVtcEJhY2siLCJ0YXJnZXQiLCJjb2RlIiwiZG9jdW1lbnQiLCJxdWVyeVNlbGVjdG9yIiwicHJldmlvdXNTaWJsaW5nIiwic2NoZW1hIiwieXVwIiwic2hhcGUiLCJmdWxsTmFtZSIsInJlcXVpcmVkIiwibWF0Y2hlcyIsIkNWViIsIm1pbiIsIm1heCIsImFjdGl2ZVVudGlsbCIsImNhcmROdW1iZXJTY2hlbWEiLCJRdWFydGV0MSIsIlF1YXJ0ZXQyIiwiUXVhcnRldDMiLCJRdWFydGV0NCIsIm1hcmdlZFNjaGVtYSIsImNvbmNhdCIsInVzZUZvcm0iLCJtb2RlIiwicmVzb2x2ZXIiLCJ5dXBSZXNvbHZlciIsInJlZ2lzdGVyIiwiaGFuZGxlU3VibWl0IiwiZXJyb3JzIiwiZm9ybVN0YXRlIiwic3VibWl0IiwiZGF0YSIsImRhdGFFbnRyaWVzIiwiT2JqZWN0IiwiZW50cmllcyIsImNhcmROdW1iZXJzIiwiZmlsdGVyIiwiZWwiLCJpbmRleE9mIiwicmVkdWNlIiwiYWMiLCJ0cmFuc2Zvcm1lZERhdGEiLCJwdXNoIiwic3R5bGVzIiwiaW5wdXRfc3VjY2VzcyIsImUiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7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QUFEO0FBRGQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURKO0FBQUE7QUFBQTtBQUFBO0FBQUEsa0JBbkVKO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURKO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFESjtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBRlIsRUFnRktHLFdBQVcsaUJBQUksOERBQUMscURBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQWhGcEIsRUFpRktFLFdBQVcsaUJBQUksOERBQUMscURBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQWpGcEI7QUFBQSxrQkFESjtBQXNGSDs7R0EvSWVULFE7VUFJQUMsa0UsRUF3QzRDMkMsb0Q7OztLQTVDNUM1QyxRIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL3ByZWRpY3Rpb24uNTlkNDk3ZmI2YTA3ODE1YTY1NDUuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8vIGhvb2tzIGFuZCBoZWxwZXJzXHJcbmltcG9ydCB7IHVzZUZvcm0gfSBmcm9tICdyZWFjdC1ob29rLWZvcm0nXHJcbmltcG9ydCAqIGFzIHl1cCBmcm9tICd5dXAnXHJcbmltcG9ydCB7IHl1cFJlc29sdmVyIH0gZnJvbSAnQGhvb2tmb3JtL3Jlc29sdmVycy95dXAnXHJcbmltcG9ydCB1c2VUcmFuc2xhdGlvbiBmcm9tICduZXh0LXRyYW5zbGF0ZS91c2VUcmFuc2xhdGlvbidcclxuaW1wb3J0IHsgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCdcclxuLy8gc3R5bGVzXHJcbmltcG9ydCBzdHlsZXMgZnJvbSAnLi9DYXJkRm9ybS5tb2R1bGUuc2NzcydcclxuLy8gY29tcG9uZW50c1xyXG5pbXBvcnQgeyBTdWNjZXNzIH0gZnJvbSAnLi4vU3VjY2Vzcy9TdWNjZXNzJ1xyXG5pbXBvcnQgeyBQZW5kaW5nIH0gZnJvbSAnLi4vUGVuZGluZy9QZW5kaW5nJ1xyXG5cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBDYXJkRm9ybSgpIHtcclxuXHJcbiAgICBjb25zdFxyXG4gICAgICAgIC8vIHRyYW5zbGF0aW9uIGNvbnNmaWdzXHJcbiAgICAgICAgeyB0IH0gPSB1c2VUcmFuc2xhdGlvbigncHJlZGljdGlvbicpLFxyXG4gICAgICAgIHRyYW5zbGF0aW9uUGF0aCA9ICd0YWJzLnBheW1lbnRzLmNhcmRGb3JtLicsXHJcbiAgICAgICAgdHJhbnNsYXRlID0ga2V5ID0+IHQoYCR7dHJhbnNsYXRpb25QYXRofSR7a2V5fWApLFxyXG4gICAgICAgIC8vIHN0YXRlc1xyXG4gICAgICAgIFtzaG93U3VjY2Vzcywgc2V0U2hvd1N1Y2Nlc3NdID0gdXNlU3RhdGUoZmFsc2UpLFxyXG4gICAgICAgIFtzaG93UGVuZGluZywgc2V0U2hvd1BlbmRpbmddID0gdXNlU3RhdGUoZmFsc2UpLFxyXG4gICAgICAgIFtzaG93Rm9ybSwgc2V0U2hvd0Zvcm1dID0gdXNlU3RhdGUodHJ1ZSksXHJcbiAgICAgICAgLy8gZnVuY3Rpb25zXHJcbiAgICAgICAganVtcCA9ICh4KSA9PiB7XHJcbiAgICAgICAgICAgIGlmICh4LnZhbHVlLmxlbmd0aCA9PT0gNCkge1xyXG4gICAgICAgICAgICAgICAgeCA9IHgubmV4dFNpYmxpbmc7XHJcbiAgICAgICAgICAgICAgICBpZiAoeCAmJiAvdGV4dC8udGVzdCh4LnR5cGUpKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgeC5mb2N1cygpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSxcclxuICAgICAgICBqdW1wQmFjayA9ICh4KSA9PiB7XHJcbiAgICAgICAgICAgIGlmICh4LnRhcmdldC52YWx1ZS5sZW5ndGggPT0gMCkge1xyXG4gICAgICAgICAgICAgICAgaWYgKHguY29kZSA9PT0gJ0JhY2tzcGFjZScpIHtcclxuICAgICAgICAgICAgICAgICAgICBpZiAoZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5tb3ZlOmZvY3VzXCIpLnByZXZpb3VzU2libGluZykge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLm1vdmU6Zm9jdXNcIikucHJldmlvdXNTaWJsaW5nLmZvY3VzKCk7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSxcclxuICAgICAgICAvLyB5dXAgY29uZmlnc1xyXG4gICAgICAgIHNjaGVtYSA9IHl1cC5vYmplY3QoKS5zaGFwZSh7XHJcbiAgICAgICAgICAgIGZ1bGxOYW1lOiB5dXAuc3RyaW5nKCkucmVxdWlyZWQoKS5tYXRjaGVzKC8oXltBLVogXSokKS9tZyksXHJcbiAgICAgICAgICAgIENWVjogeXVwLnN0cmluZygpLm1pbigzKS5tYXgoMykucmVxdWlyZWQoKSxcclxuICAgICAgICAgICAgYWN0aXZlVW50aWxsOiB5dXAuc3RyaW5nKCkucmVxdWlyZWQoKS5taW4oNSkubWF4KDUpLm1hdGNoZXMoLyheWzAtOS9dKiQpL21nKVxyXG4gICAgICAgIH0pLFxyXG4gICAgICAgIGNhcmROdW1iZXJTY2hlbWEgPSB5dXAub2JqZWN0KCkuc2hhcGUoe1xyXG4gICAgICAgICAgICBRdWFydGV0MTogeXVwLnN0cmluZygpLm1pbig0KS5tYXgoNCkucmVxdWlyZWQoKS5tYXRjaGVzKC9eWzAtOV17NH0kL21nKSxcclxuICAgICAgICAgICAgUXVhcnRldDI6IHl1cC5zdHJpbmcoKS5taW4oNCkubWF4KDQpLnJlcXVpcmVkKCkubWF0Y2hlcygvXlswLTldezR9JC9tZyksXHJcbiAgICAgICAgICAgIFF1YXJ0ZXQzOiB5dXAuc3RyaW5nKCkubWluKDQpLm1heCg0KS5yZXF1aXJlZCgpLm1hdGNoZXMoL15bMC05XXs0fSQvbWcpLFxyXG4gICAgICAgICAgICBRdWFydGV0NDogeXVwLnN0cmluZygpLm1pbig0KS5tYXgoNCkucmVxdWlyZWQoKS5tYXRjaGVzKC9eWzAtOV17NH0kL21nKSxcclxuICAgICAgICB9KSxcclxuICAgICAgICAvLyBjYXJkTnVtYmVycyBzY2hlbWFcclxuICAgICAgICBtYXJnZWRTY2hlbWEgPSBzY2hlbWEuY29uY2F0KGNhcmROdW1iZXJTY2hlbWEpLFxyXG4gICAgICAgIC8vIGZvcm0gY29uZmlnc1xyXG4gICAgICAgIHsgcmVnaXN0ZXIsIGhhbmRsZVN1Ym1pdCwgZm9ybVN0YXRlOiB7IGVycm9ycyB9IH0gPSB1c2VGb3JtKHtcclxuICAgICAgICAgICAgbW9kZTogJ29uQ2hhbmdlJyxcclxuICAgICAgICAgICAgcmVzb2x2ZXI6IHl1cFJlc29sdmVyKG1hcmdlZFNjaGVtYSlcclxuICAgICAgICB9KSxcclxuICAgICAgICBzdWJtaXQgPSBkYXRhID0+IHtcclxuICAgICAgICAgICAgbGV0XHJcbiAgICAgICAgICAgICAgICBkYXRhRW50cmllcyA9IE9iamVjdC5lbnRyaWVzKGRhdGEpLFxyXG4gICAgICAgICAgICAgICAgY2FyZE51bWJlcnMgPSBkYXRhRW50cmllcy5maWx0ZXIoZWwgPT4gZWxbMF0uaW5kZXhPZignUXVhcnRldCcpID4gLTEpLnJlZHVjZSgoYWMsIGVsKSA9PiAoYWMgKyBlbFsxXSksIFwiXCIpLFxyXG4gICAgICAgICAgICAgICAgdHJhbnNmb3JtZWREYXRhID0gZGF0YUVudHJpZXMuZmlsdGVyKGVsID0+IGVsWzBdLmluZGV4T2YoJ1F1YXJ0ZXQnKSlcclxuICAgICAgICAgICAgdHJhbnNmb3JtZWREYXRhLnB1c2goW1wiY2FyZE51bWJlclwiLCBjYXJkTnVtYmVyc10pXHJcbiAgICAgICAgICAgIHNldFNob3dGb3JtKGZhbHNlKVxyXG4gICAgICAgICAgICBzZXRTaG93U3VjY2Vzcyh0cnVlKVxyXG4gICAgICAgIH1cclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPD5cclxuICAgICAgICAgICAge3Nob3dGb3JtICYmXHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmNvbnRhaW5lcn0+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5jb250ZW50fT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGZvcm0gb25TdWJtaXQ9e2hhbmRsZVN1Ym1pdChzdWJtaXQpfSBhdXRvQ29tcGxldGU9J29mZic+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLm5hbWV9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpbnB1dFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZD0nZnVsbE5hbWUnXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHsuLi5yZWdpc3RlcignZnVsbE5hbWUnKX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdHlwZT1cInRleHRcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwbGFjZWhvbGRlcj17dHJhbnNsYXRlKCdmdWxsTmFtZScpfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9e2Vycm9ycy5mdWxsTmFtZSA/IHN0eWxlcy5pbnB1dF9lcnJvciA6IHN0eWxlcy5pbnB1dF9zdWNjZXNzfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuY2FyZF9udW1iZXJfY29udGVudH0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHt0cmFuc2xhdGUoJ2NhcmROdW1iZXInKX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3A+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5jYXJkX251bWJlcl9pbnB1dHN9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aW5wdXRcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlkPSdxdWFydGV0MSdcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHsuLi5yZWdpc3RlcignUXVhcnRldDEnKX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU9XCJ0ZXh0XCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17YG1vdmUgJHtlcnJvcnMuUXVhcnRldDEgPyBzdHlsZXMuaW5wdXRfZXJyb3IgOiBzdHlsZXMuaW5wdXRfc3VjY2Vzc31gfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb25JbnB1dD17ZSA9PiBqdW1wKGUudGFyZ2V0KX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uS2V5RG93bj17ZSA9PiBqdW1wQmFjayhlKX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGlucHV0XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZD1cInF1YXJ0ZXQyXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHsuLi5yZWdpc3RlcignUXVhcnRldDInKX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU9XCJ0ZXh0XCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17YG1vdmUgJHtlcnJvcnMuUXVhcnRldDIgPyBzdHlsZXMuaW5wdXRfZXJyb3IgOiBzdHlsZXMuaW5wdXRfc3VjY2Vzc31gfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb25JbnB1dD17ZSA9PiBqdW1wKGUudGFyZ2V0KX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uS2V5RG93bj17ZSA9PiBqdW1wQmFjayhlKX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGlucHV0XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZD1cInF1YXJ0ZXQzXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHsuLi5yZWdpc3RlcignUXVhcnRldDMnKX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU9XCJ0ZXh0XCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17YG1vdmUgJHtlcnJvcnMuUXVhcnRldDMgPyBzdHlsZXMuaW5wdXRfZXJyb3IgOiBzdHlsZXMuaW5wdXRfc3VjY2Vzc31gfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb25JbnB1dD17ZSA9PiBqdW1wKGUudGFyZ2V0KX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uS2V5RG93bj17ZSA9PiBqdW1wQmFjayhlKX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGlucHV0XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZD1cInF1YXJ0ZXQ0XCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHsuLi5yZWdpc3RlcignUXVhcnRldDQnKX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU9XCJ0ZXh0XCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17YG1vdmUgJHtlcnJvcnMuUXVhcnRldDQgPyBzdHlsZXMuaW5wdXRfZXJyb3IgOiBzdHlsZXMuaW5wdXRfc3VjY2Vzc31gfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb25JbnB1dD17ZSA9PiBqdW1wKGUudGFyZ2V0KX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uS2V5RG93bj17ZSA9PiBqdW1wQmFjayhlKX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5jdnZ9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpbnB1dFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZD1cIkNWVlwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHsuLi5yZWdpc3RlcignQ1ZWJyl9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU9XCJ0ZXh0XCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9e3RyYW5zbGF0ZSgnY29kZUNWVicpfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9e2Vycm9ycy5DVlYgPyBzdHlsZXMuaW5wdXRfZXJyb3IgOiBzdHlsZXMuaW5wdXRfc3VjY2Vzc31cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmFjdGl2ZV91bnRpbGx9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpbnB1dFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZD1cImFjdGl2ZVVudGlsbFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHsuLi5yZWdpc3RlcignYWN0aXZlVW50aWxsJyl9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU9XCJ0ZXh0XCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9e3RyYW5zbGF0ZSgnYWN0aXZlVW50aWxsJyl9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17ZXJyb3JzLmFjdGl2ZVVudGlsbCA/IHN0eWxlcy5pbnB1dF9lcnJvciA6IHN0eWxlcy5pbnB1dF9zdWNjZXNzfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuc3VjY2Vzc30+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGJ1dHRvbiB0eXBlPSdzdWJtaXQnPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7dHJhbnNsYXRlKCdzdWNjZXNzJyl9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9idXR0b24+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9mb3JtPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAge3Nob3dTdWNjZXNzICYmIDxTdWNjZXNzIC8+fVxyXG4gICAgICAgICAgICB7c2hvd1BlbmRpbmcgJiYgPFBlbmRpbmcgLz59XHJcbiAgICAgICAgPC8+XHJcblxyXG4gICAgKVxyXG59XHJcbiJdLCJzb3VyY2VSb290IjoiIn0=