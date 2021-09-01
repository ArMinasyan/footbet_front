self["webpackHotUpdate_N_E"]("pages/index",{

/***/ "./components/Pages/common/Testimonials/LeaveComment/LeaveComment.jsx":
/*!****************************************************************************!*\
  !*** ./components/Pages/common/Testimonials/LeaveComment/LeaveComment.jsx ***!
  \****************************************************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "LeaveComment": function() { return /* binding */ LeaveComment; }
/* harmony export */ });
/* harmony import */ var C_Users_Admin_Desktop_projects_foot_bet_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/defineProperty */ "./node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var C_Users_Admin_Desktop_projects_foot_bet_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/@babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var C_Users_Admin_Desktop_projects_foot_bet_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(C_Users_Admin_Desktop_projects_foot_bet_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var C_Users_Admin_Desktop_projects_foot_bet_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator */ "./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js");
/* harmony import */ var next_translate_useTranslation__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! next-translate/useTranslation */ "./node_modules/next-translate/lib/esm/useTranslation.js");
/* harmony import */ var react_hook_form__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react-hook-form */ "./node_modules/react-hook-form/dist/index.esm.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var yup__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! yup */ "./node_modules/yup/es/index.js");
/* harmony import */ var _hookform_resolvers_yup__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @hookform/resolvers/yup */ "./node_modules/@hookform/resolvers/yup/dist/yup.module.js");
/* harmony import */ var _LeaveComment_module_scss__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./LeaveComment.module.scss */ "./components/Pages/common/Testimonials/LeaveComment/LeaveComment.module.scss");
/* harmony import */ var _LeaveComment_module_scss__WEBPACK_IMPORTED_MODULE_15___default = /*#__PURE__*/__webpack_require__.n(_LeaveComment_module_scss__WEBPACK_IMPORTED_MODULE_15__);
/* harmony import */ var _public_images_main_feedbacks_filledStar_png__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../../../../../public/images/main/feedbacks/filledStar.png */ "./public/images/main/feedbacks/filledStar.png");
/* harmony import */ var _public_images_main_feedbacks_unfilledStar_png__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../../../../../public/images/main/feedbacks/unfilledStar.png */ "./public/images/main/feedbacks/unfilledStar.png");
/* harmony import */ var _lib_er_lib__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../../../../lib/er.lib */ "./lib/er.lib.js");
/* harmony import */ var _lib_request_destinations__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../../../../lib/request-destinations */ "./lib/request-destinations.js");
/* harmony import */ var react_toastify__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! react-toastify */ "./node_modules/react-toastify/dist/react-toastify.esm.js");
/* harmony import */ var _common_LoadingButton__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../../../../common/LoadingButton */ "./components/common/LoadingButton.jsx");
/* module decorator */ module = __webpack_require__.hmd(module);





var _jsxFileName = "C:\\Users\\Admin\\Desktop\\projects\\foot-bet\\components\\Pages\\common\\Testimonials\\LeaveComment\\LeaveComment.jsx",
    _s = $RefreshSig$();

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { (0,C_Users_Admin_Desktop_projects_foot_bet_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__.default)(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

// hooks and helpers




 // styles

 // icons







function LeaveComment(_ref) {
  _s();

  var _this = this;

  var matchId = _ref.matchId;

  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_6__.useState)(false),
      loading = _useState[0],
      setLoading = _useState[1];

  // states consts
  var stars = [0, 1, 2, 3, 4],
      _useState2 = (0,react__WEBPACK_IMPORTED_MODULE_6__.useState)(0),
      simulator = _useState2[0],
      setSimulator = _useState2[1],
      _useTranslation = (0,next_translate_useTranslation__WEBPACK_IMPORTED_MODULE_4__.default)('common'),
      t = _useTranslation.t,
      translationPath = 'commons.',
      translate = function translate(key) {
    return t("".concat(translationPath).concat(key));
  },
      schema = yup__WEBPACK_IMPORTED_MODULE_7__.object().shape({
    comment: yup__WEBPACK_IMPORTED_MODULE_7__.string()
  }),
      _useForm = (0,react_hook_form__WEBPACK_IMPORTED_MODULE_5__.useForm)({
    mode: 'onChange',
    resolver: (0,_hookform_resolvers_yup__WEBPACK_IMPORTED_MODULE_8__.yupResolver)(schema)
  }),
      register = _useForm.register,
      handleSubmit = _useForm.handleSubmit,
      errors = _useForm.formState.errors;

  var submit = /*#__PURE__*/function () {
    var _ref2 = (0,C_Users_Admin_Desktop_projects_foot_bet_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_3__.default)( /*#__PURE__*/C_Users_Admin_Desktop_projects_foot_bet_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_2___default().mark(function _callee(data) {
      var _err$response$data;

      return C_Users_Admin_Desktop_projects_foot_bet_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_2___default().wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              console.log(1234, matchId);

              if (!matchId) {
                _context.next = 14;
                break;
              }

              _context.prev = 2;
              setLoading(true);
              _context.next = 6;
              return (0,_lib_er_lib__WEBPACK_IMPORTED_MODULE_11__.request)(_lib_request_destinations__WEBPACK_IMPORTED_MODULE_12__.ADD_FEEDBACK, {
                comment: data.comment,
                stars: simulator,
                matchId: matchId
              }, {
                auth: true
              });

            case 6:
              _context.next = 11;
              break;

            case 8:
              _context.prev = 8;
              _context.t0 = _context["catch"](2);
              (0,react_toastify__WEBPACK_IMPORTED_MODULE_14__.toast)(((_err$response$data = _context.t0.response.data) === null || _err$response$data === void 0 ? void 0 : _err$response$data.message) || "\u041D\u0435\u0432\u043E\u0437\u043C\u043E\u0436\u043D\u043E \u0434\u043E\u0431\u0430\u0432\u0438\u0442\u044C \u043E\u0442\u0437\u044B\u0432", {
                type: "error"
              });

            case 11:
              _context.prev = 11;
              setLoading(false);
              return _context.finish(11);

            case 14:
            case "end":
              return _context.stop();
          }
        }
      }, _callee, null, [[2, 8, 11, 14]]);
    }));

    return function submit(_x) {
      return _ref2.apply(this, arguments);
    };
  }();

  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("div", {
    className: (_LeaveComment_module_scss__WEBPACK_IMPORTED_MODULE_15___default().container),
    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("div", {
      className: (_LeaveComment_module_scss__WEBPACK_IMPORTED_MODULE_15___default().stars_container),
      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("div", {
        className: (_LeaveComment_module_scss__WEBPACK_IMPORTED_MODULE_15___default().stars_content),
        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("div", {
          className: (_LeaveComment_module_scss__WEBPACK_IMPORTED_MODULE_15___default().stars_area),
          children: stars.map(function (el) {
            return simulator > el ? /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("img", {
              src: _public_images_main_feedbacks_filledStar_png__WEBPACK_IMPORTED_MODULE_9__.default.src,
              alt: "",
              onClick: function onClick() {
                return setSimulator(el);
              }
            }, (el + 1) * Math.random(), false, {
              fileName: _jsxFileName,
              lineNumber: 68,
              columnNumber: 38
            }, _this) : /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("img", {
              src: _public_images_main_feedbacks_unfilledStar_png__WEBPACK_IMPORTED_MODULE_10__.default.src,
              alt: "",
              onClick: function onClick() {
                return setSimulator(el + 1);
              }
            }, (el + 1) * Math.random(), false, {
              fileName: _jsxFileName,
              lineNumber: 75,
              columnNumber: 38
            }, _this);
          })
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 64,
          columnNumber: 21
        }, this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 63,
        columnNumber: 17
      }, this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 62,
      columnNumber: 13
    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("form", {
      onSubmit: handleSubmit(submit),
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("div", {
        className: (_LeaveComment_module_scss__WEBPACK_IMPORTED_MODULE_15___default().textarea_container),
        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("textarea", _objectSpread(_objectSpread({}, register('comment')), {}, {
          id: "comment",
          cols: "30",
          rows: "7",
          placeholder: translate('placeHolder')
        }), void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 87,
          columnNumber: 21
        }, this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 86,
        columnNumber: 17
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("div", {
        className: (_LeaveComment_module_scss__WEBPACK_IMPORTED_MODULE_15___default().button_container),
        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(_common_LoadingButton__WEBPACK_IMPORTED_MODULE_13__.default, {
          loading: loading,
          children: translate('send')
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 96,
          columnNumber: 21
        }, this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 95,
        columnNumber: 17
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 85,
      columnNumber: 13
    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(react_toastify__WEBPACK_IMPORTED_MODULE_14__.ToastContainer, {}, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 103,
      columnNumber: 13
    }, this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 61,
    columnNumber: 9
  }, this);
}

_s(LeaveComment, "Kta+wJfDVIjkEn0+WBv7fNVrMx0=", false, function () {
  return [next_translate_useTranslation__WEBPACK_IMPORTED_MODULE_4__.default, react_hook_form__WEBPACK_IMPORTED_MODULE_5__.useForm];
});

_c = LeaveComment;

var _c;

$RefreshReg$(_c, "LeaveComment");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9QYWdlcy9jb21tb24vVGVzdGltb25pYWxzL0xlYXZlQ29tbWVudC9MZWF2ZUNvbW1lbnQuanN4Il0sIm5hbWVzIjpbIkxlYXZlQ29tbWVudCIsIm1hdGNoSWQiLCJ1c2VTdGF0ZSIsImxvYWRpbmciLCJzZXRMb2FkaW5nIiwic3RhcnMiLCJzaW11bGF0b3IiLCJzZXRTaW11bGF0b3IiLCJ1c2VUcmFuc2xhdGlvbiIsInQiLCJ0cmFuc2xhdGlvblBhdGgiLCJ0cmFuc2xhdGUiLCJrZXkiLCJzY2hlbWEiLCJ5dXAiLCJzaGFwZSIsImNvbW1lbnQiLCJ1c2VGb3JtIiwibW9kZSIsInJlc29sdmVyIiwieXVwUmVzb2x2ZXIiLCJyZWdpc3RlciIsImhhbmRsZVN1Ym1pdCIsImVycm9ycyIsImZvcm1TdGF0ZSIsInN1Ym1pdCIsImRhdGEiLCJjb25zb2xlIiwibG9nIiwicmVxdWVzdCIsIkFERF9GRUVEQkFDSyIsImF1dGgiLCJ0b2FzdCIsInJlc3BvbnNlIiwibWVzc2FnZSIsInR5cGUiLCJzdHlsZXMiLCJtYXAiLCJlbCIsImZpbGxlZFN0YXIiLCJNYXRoIiwicmFuZG9tIiwidW5maWxsZWRTdGFyIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtDQUVBOztDQUVBOztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUlPLFNBQVNBLFlBQVQsT0FBcUM7QUFBQTs7QUFBQTs7QUFBQSxNQUFaQyxPQUFZLFFBQVpBLE9BQVk7O0FBQUEsa0JBRVZDLCtDQUFRLENBQUMsS0FBRCxDQUZFO0FBQUEsTUFFbENDLE9BRmtDO0FBQUEsTUFFekJDLFVBRnlCOztBQUlwQztBQUNBLE1BQUFDLEtBQUssR0FBRyxDQUFDLENBQUQsRUFBSSxDQUFKLEVBQU8sQ0FBUCxFQUFVLENBQVYsRUFBYSxDQUFiLENBQVI7QUFB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QTtBQUFBO0FBREo7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQURKLGVBd0JJO0FBQU0sY0FBUSxFQUFFbkIsWUFBWSxDQUFDRyxNQUFELENBQTVCO0FBQUEsOEJBQ0k7QUFBSyxpQkFBUyxFQUFFVyxzRkFBaEI7QUFBQSwrQkFDSSwwR0FDUWYsUUFBUSxDQUFDLFNBQUQsQ0FEaEI7QUFFSSxZQUFFLEVBQUMsU0FGUDtBQUdJLGNBQUksRUFBQyxJQUhUO0FBSUksY0FBSSxFQUFDLEdBSlQ7QUFLSSxxQkFBVyxFQUFFVixTQUFTLENBQUMsYUFBRDtBQUwxQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREo7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQURKLGVBVUk7QUFBSyxpQkFBUyxFQUFFeUIsb0ZBQWhCO0FBQUEsK0JBQ0ksOERBQUMsMkRBQUQ7QUFBZSxpQkFBTyxFQUFFakMsT0FBeEI7QUFBQSxvQkFFTVEsU0FBUyxDQUFDLE1BQUQ7QUFGZjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREo7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQVZKO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQXhCSixlQTBDSSw4REFBQywyREFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBMUNKO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxVQURKO0FBOENIOztHQXZGZVgsWTtVQVFBUSxrRSxFQVM0Q1Msb0Q7OztLQWpCNUNqQixZIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL2luZGV4LjNhNGJmYzJiM2RkMDM1NDBlY2MyLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyIvLyBob29rcyBhbmQgaGVscGVyc1xyXG5pbXBvcnQgdXNlVHJhbnNsYXRpb24gZnJvbSAnbmV4dC10cmFuc2xhdGUvdXNlVHJhbnNsYXRpb24nXHJcbmltcG9ydCB7IHVzZUZvcm0gfSBmcm9tICdyZWFjdC1ob29rLWZvcm0nXHJcbmltcG9ydCB7IHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnXHJcbmltcG9ydCAqIGFzIHl1cCBmcm9tICd5dXAnXHJcbmltcG9ydCB7IHl1cFJlc29sdmVyIH0gZnJvbSAnQGhvb2tmb3JtL3Jlc29sdmVycy95dXAnXHJcbi8vIHN0eWxlc1xyXG5pbXBvcnQgc3R5bGVzIGZyb20gJy4vTGVhdmVDb21tZW50Lm1vZHVsZS5zY3NzJ1xyXG4vLyBpY29uc1xyXG5pbXBvcnQgZmlsbGVkU3RhciBmcm9tICcvcHVibGljL2ltYWdlcy9tYWluL2ZlZWRiYWNrcy9maWxsZWRTdGFyLnBuZydcclxuaW1wb3J0IHVuZmlsbGVkU3RhciBmcm9tICcvcHVibGljL2ltYWdlcy9tYWluL2ZlZWRiYWNrcy91bmZpbGxlZFN0YXIucG5nJ1xyXG5pbXBvcnQgeyByZXF1ZXN0IH0gZnJvbSAnLi4vLi4vLi4vLi4vLi4vbGliL2VyLmxpYidcclxuaW1wb3J0IHsgQUREX0ZFRURCQUNLIH0gZnJvbSAnLi4vLi4vLi4vLi4vLi4vbGliL3JlcXVlc3QtZGVzdGluYXRpb25zJ1xyXG5pbXBvcnQgeyB0b2FzdCwgVG9hc3RDb250YWluZXIgfSBmcm9tICdyZWFjdC10b2FzdGlmeSdcclxuaW1wb3J0IExvYWRpbmdCdXR0b24gZnJvbSAnLi4vLi4vLi4vLi4vY29tbW9uL0xvYWRpbmdCdXR0b24nXHJcblxyXG5cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBMZWF2ZUNvbW1lbnQoIHsgbWF0Y2hJZCB9ICkge1xyXG5cclxuICBjb25zdCBbIGxvYWRpbmcsIHNldExvYWRpbmcgXSA9IHVzZVN0YXRlKGZhbHNlKTtcclxuICAgIGNvbnN0XHJcbiAgICAgICAgLy8gc3RhdGVzIGNvbnN0c1xyXG4gICAgICAgIHN0YXJzID0gWzAsIDEsIDIsIDMsIDRdLFxyXG4gICAgICAgIFtzaW11bGF0b3IsIHNldFNpbXVsYXRvcl0gPSB1c2VTdGF0ZSgwKSxcclxuICAgICAgICAvLyB0cmFuc2xhdGlvbiBjb25zZmlnc1xyXG4gICAgICAgIHsgdCB9ID0gdXNlVHJhbnNsYXRpb24oJ2NvbW1vbicpLFxyXG4gICAgICAgIHRyYW5zbGF0aW9uUGF0aCA9ICdjb21tb25zLicsXHJcbiAgICAgICAgdHJhbnNsYXRlID0ga2V5ID0+IHQoYCR7dHJhbnNsYXRpb25QYXRofSR7a2V5fWApLFxyXG4gICAgICAgIC8vIHl1cCBjb25maWdzXHJcbiAgICAgICAgc2NoZW1hID0geXVwLm9iamVjdCgpLnNoYXBlKHtcclxuICAgICAgICAgICAgY29tbWVudDogeXVwXHJcbiAgICAgICAgICAgICAgICAuc3RyaW5nKClcclxuICAgICAgICB9KSxcclxuICAgICAgICAvLyBmb3JtIGNvbmZpZ3NcclxuICAgICAgICB7IHJlZ2lzdGVyLCBoYW5kbGVTdWJtaXQsIGZvcm1TdGF0ZTogeyBlcnJvcnMgfSB9ID0gdXNlRm9ybSh7XHJcbiAgICAgICAgICAgIG1vZGU6ICdvbkNoYW5nZScsXHJcbiAgICAgICAgICAgIHJlc29sdmVyOiB5dXBSZXNvbHZlcihzY2hlbWEpXHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgXHJcbiAgICBjb25zdCBzdWJtaXQgPSBhc3luYyAoZGF0YSkgPT4ge1xyXG4gICAgICBjb25zb2xlLmxvZyggMTIzNCwgbWF0Y2hJZCApO1xyXG4gICAgICBpZiAoIG1hdGNoSWQgKSB7XHJcbiAgICAgICAgdHJ5IHtcclxuICAgICAgICAgIHNldExvYWRpbmcodHJ1ZSk7XHJcbiAgICAgICAgICBhd2FpdCByZXF1ZXN0KEFERF9GRUVEQkFDSywgeyBjb21tZW50OiBkYXRhLmNvbW1lbnQsIHN0YXJzOiBzaW11bGF0b3IsIG1hdGNoSWQgfSwge2F1dGg6IHRydWV9KTtcclxuICAgICAgICB9XHJcbiAgICAgICAgY2F0Y2ggKCBlcnIgKSB7XHJcbiAgICAgICAgICB0b2FzdCggZXJyLnJlc3BvbnNlLmRhdGE/Lm1lc3NhZ2UgfHwgYNCd0LXQstC+0LfQvNC+0LbQvdC+INC00L7QsdCw0LLQuNGC0Ywg0L7RgtC30YvQsmAsIHtcclxuICAgICAgICAgICAgICB0eXBlOiBgZXJyb3JgXHJcbiAgICAgICAgICB9KTtcclxuICAgICAgICB9XHJcbiAgICAgICAgZmluYWxseXtcclxuICAgICAgICAgIHNldExvYWRpbmcoZmFsc2UpO1xyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgfVxyXG5cclxuXHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuY29udGFpbmVyfT5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5zdGFyc19jb250YWluZXJ9PlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5zdGFyc19jb250ZW50fT5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLnN0YXJzX2FyZWF9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdGFycy5tYXAoZWwgPT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzaW11bGF0b3IgPiBlbCA/XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICg8aW1nXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBrZXk9eyhlbCArIDEpICogTWF0aC5yYW5kb20oKX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNyYz17ZmlsbGVkU3Rhci5zcmN9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhbHQ9XCJcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb25DbGljaz17KCkgPT4gc2V0U2ltdWxhdG9yKGVsKX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLz4pXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDpcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKDxpbWdcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGtleT17KGVsICsgMSkgKiBNYXRoLnJhbmRvbSgpfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3JjPXt1bmZpbGxlZFN0YXIuc3JjfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYWx0PVwiXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IHNldFNpbXVsYXRvcihlbCArIDEpfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvPikpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPGZvcm0gb25TdWJtaXQ9e2hhbmRsZVN1Ym1pdChzdWJtaXQpfT5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMudGV4dGFyZWFfY29udGFpbmVyfT5cclxuICAgICAgICAgICAgICAgICAgICA8dGV4dGFyZWFcclxuICAgICAgICAgICAgICAgICAgICAgICAgey4uLnJlZ2lzdGVyKCdjb21tZW50Jyl9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlkPSdjb21tZW50J1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBjb2xzPVwiMzBcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICByb3dzPVwiN1wiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHBsYWNlaG9sZGVyPXt0cmFuc2xhdGUoJ3BsYWNlSG9sZGVyJyl9XHJcbiAgICAgICAgICAgICAgICAgICAgPjwvdGV4dGFyZWE+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuYnV0dG9uX2NvbnRhaW5lcn0+XHJcbiAgICAgICAgICAgICAgICAgICAgPExvYWRpbmdCdXR0b24gbG9hZGluZz17bG9hZGluZ30+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICB0cmFuc2xhdGUoJ3NlbmQnKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgPC9Mb2FkaW5nQnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDwvZm9ybT5cclxuICAgICAgICAgICAgPFRvYXN0Q29udGFpbmVyIC8+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICApXHJcbn1cclxuIl0sInNvdXJjZVJvb3QiOiIifQ==