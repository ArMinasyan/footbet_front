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

  var commentBoxRef = (0,react__WEBPACK_IMPORTED_MODULE_6__.useRef)(null);

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
              setLoading(true);
              setTimeout(function () {
                setLoading(false);
              }, 4000);

              if (!matchId) {
                _context.next = 16;
                break;
              }

              _context.prev = 3;
              setLoading(true);
              _context.next = 7;
              return (0,_lib_er_lib__WEBPACK_IMPORTED_MODULE_11__.request)(_lib_request_destinations__WEBPACK_IMPORTED_MODULE_12__.ADD_FEEDBACK, {
                comment: data.comment,
                stars: simulator,
                matchId: matchId
              }, {
                auth: true
              });

            case 7:
              if (commentBoxRef.current) commentBoxRef.current.value = "";
              _context.next = 13;
              break;

            case 10:
              _context.prev = 10;
              _context.t0 = _context["catch"](3);
              (0,react_toastify__WEBPACK_IMPORTED_MODULE_14__.toast)(((_err$response$data = _context.t0.response.data) === null || _err$response$data === void 0 ? void 0 : _err$response$data.message) || "\u041D\u0435\u0432\u043E\u0437\u043C\u043E\u0436\u043D\u043E \u0434\u043E\u0431\u0430\u0432\u0438\u0442\u044C \u043E\u0442\u0437\u044B\u0432", {
                type: "error"
              });

            case 13:
              _context.prev = 13;
              setLoading(false);
              return _context.finish(13);

            case 16:
            case "end":
              return _context.stop();
          }
        }
      }, _callee, null, [[3, 10, 13, 16]]);
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
              lineNumber: 76,
              columnNumber: 38
            }, _this) : /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("img", {
              src: _public_images_main_feedbacks_unfilledStar_png__WEBPACK_IMPORTED_MODULE_10__.default.src,
              alt: "",
              onClick: function onClick() {
                return setSimulator(el + 1);
              }
            }, (el + 1) * Math.random(), false, {
              fileName: _jsxFileName,
              lineNumber: 83,
              columnNumber: 38
            }, _this);
          })
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 72,
          columnNumber: 21
        }, this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 71,
        columnNumber: 17
      }, this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 70,
      columnNumber: 13
    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("form", {
      onSubmit: handleSubmit(submit),
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("div", {
        className: (_LeaveComment_module_scss__WEBPACK_IMPORTED_MODULE_15___default().textarea_container),
        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("textarea", _objectSpread(_objectSpread({}, register('comment')), {}, {
          id: "comment",
          cols: "30",
          rows: "7",
          ref: commentBoxRef,
          placeholder: translate('placeHolder')
        }), void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 95,
          columnNumber: 21
        }, this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 94,
        columnNumber: 17
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("div", {
        className: (_LeaveComment_module_scss__WEBPACK_IMPORTED_MODULE_15___default().button_container),
        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(_common_LoadingButton__WEBPACK_IMPORTED_MODULE_13__.default, {
          loading: loading,
          children: translate('send')
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 105,
          columnNumber: 21
        }, this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 104,
        columnNumber: 17
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 93,
      columnNumber: 13
    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(react_toastify__WEBPACK_IMPORTED_MODULE_14__.ToastContainer, {}, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 112,
      columnNumber: 13
    }, this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 69,
    columnNumber: 9
  }, this);
}

_s(LeaveComment, "xItpKTgJnxPiIv+74PL8xVqe02c=", false, function () {
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9QYWdlcy9jb21tb24vVGVzdGltb25pYWxzL0xlYXZlQ29tbWVudC9MZWF2ZUNvbW1lbnQuanN4Il0sIm5hbWVzIjpbIkxlYXZlQ29tbWVudCIsIm1hdGNoSWQiLCJ1c2VTdGF0ZSIsImxvYWRpbmciLCJzZXRMb2FkaW5nIiwiY29tbWVudEJveFJlZiIsInVzZVJlZiIsInN0YXJzIiwic2ltdWxhdG9yIiwic2V0U2ltdWxhdG9yIiwidXNlVHJhbnNsYXRpb24iLCJ0IiwidHJhbnNsYXRpb25QYXRoIiwidHJhbnNsYXRlIiwia2V5Iiwic2NoZW1hIiwieXVwIiwic2hhcGUiLCJjb21tZW50IiwidXNlRm9ybSIsIm1vZGUiLCJyZXNvbHZlciIsInl1cFJlc29sdmVyIiwicmVnaXN0ZXIiLCJoYW5kbGVTdWJtaXQiLCJlcnJvcnMiLCJmb3JtU3RhdGUiLCJzdWJtaXQiLCJkYXRhIiwic2V0VGltZW91dCIsInJlcXVlc3QiLCJBRERfRkVFREJBQ0siLCJhdXRoIiwiY3VycmVudCIsInZhbHVlIiwidG9hc3QiLCJyZXNwb25zZSIsIm1lc3NhZ2UiLCJ0eXBlIiwic3R5bGVzIiwibWFwIiwiZWwiLCJmaWxsZWRTdGFyIiwiTWF0aCIsInJhbmRvbSIsInVuZmlsbGVkU3RhciJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Q0FFQTs7Q0FFQTs7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUlPLFNBQVNBLFlBQVQsT0FBcUM7QUFBQTs7QUFBQTs7QUFBQSxNQUFaQyxPQUFZLFFBQVpBLE9BQVk7O0FBQUEsa0JBRVZDLCtDQUFRLENBQUMsS0FBRCxDQUZFO0FBQUEsTUFFbENDLE9BRmtDO0FBQUEsTUFFekJDLFVBRnlCOztBQUcxQyxNQUFNQyxhQUFhLEdBQUdDLDZDQUFNLENBQUMsSUFBRCxD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ZGV4LmZiNDdjYjM0YTlmMGY0ZGVmNTkxLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyIvLyBob29rcyBhbmQgaGVscGVyc1xyXG5pbXBvcnQgdXNlVHJhbnNsYXRpb24gZnJvbSAnbmV4dC10cmFuc2xhdGUvdXNlVHJhbnNsYXRpb24nXHJcbmltcG9ydCB7IHVzZUZvcm0gfSBmcm9tICdyZWFjdC1ob29rLWZvcm0nXHJcbmltcG9ydCB7IHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnXHJcbmltcG9ydCAqIGFzIHl1cCBmcm9tICd5dXAnXHJcbmltcG9ydCB7IHl1cFJlc29sdmVyIH0gZnJvbSAnQGhvb2tmb3JtL3Jlc29sdmVycy95dXAnXHJcbi8vIHN0eWxlc1xyXG5pbXBvcnQgc3R5bGVzIGZyb20gJy4vTGVhdmVDb21tZW50Lm1vZHVsZS5zY3NzJ1xyXG4vLyBpY29uc1xyXG5pbXBvcnQgZmlsbGVkU3RhciBmcm9tICcvcHVibGljL2ltYWdlcy9tYWluL2ZlZWRiYWNrcy9maWxsZWRTdGFyLnBuZydcclxuaW1wb3J0IHVuZmlsbGVkU3RhciBmcm9tICcvcHVibGljL2ltYWdlcy9tYWluL2ZlZWRiYWNrcy91bmZpbGxlZFN0YXIucG5nJ1xyXG5pbXBvcnQgeyByZXF1ZXN0IH0gZnJvbSAnLi4vLi4vLi4vLi4vLi4vbGliL2VyLmxpYidcclxuaW1wb3J0IHsgQUREX0ZFRURCQUNLIH0gZnJvbSAnLi4vLi4vLi4vLi4vLi4vbGliL3JlcXVlc3QtZGVzdGluYXRpb25zJ1xyXG5pbXBvcnQgeyB0b2FzdCwgVG9hc3RDb250YWluZXIgfSBmcm9tICdyZWFjdC10b2FzdGlmeSdcclxuaW1wb3J0IExvYWRpbmdCdXR0b24gZnJvbSAnLi4vLi4vLi4vLi4vY29tbW9uL0xvYWRpbmdCdXR0b24nXHJcbmltcG9ydCB7IHVzZVJlZiB9IGZyb20gJ3JlYWN0J1xyXG5cclxuXHJcblxyXG5leHBvcnQgZnVuY3Rpb24gTGVhdmVDb21tZW50KCB7IG1hdGNoSWQgfSApIHtcclxuXHJcbiAgY29uc3QgWyBsb2FkaW5nLCBzZXRMb2FkaW5nIF0gPSB1c2VTdGF0ZShmYWxzZSk7XHJcbiAgY29uc3QgY29tbWVudEJveFJlZiA9IHVzZVJlZihudWxsKTtcclxuICAgIGNvbnN0XHJcbiAgICAgICAgLy8gc3RhdGVzIGNvbnN0c1xyXG4gICAgICAgIHN0YXJzID0gWzAsIDEsIDIsIDMsIDRdLFxyXG4gICAgICAgIFtzaW11bGF0b3IsIHNldFNpbXVsYXRvcl0gPSB1c2VTdGF0ZSgwKSxcclxuICAgICAgICAvLyB0cmFuc2xhdGlvbiBjb25zZmlnc1xyXG4gICAgICAgIHsgdCB9ID0gdXNlVHJhbnNsYXRpb24oJ2NvbW1vbicpLFxyXG4gICAgICAgIHRyYW5zbGF0aW9uUGF0aCA9ICdjb21tb25zLicsXHJcbiAgICAgICAgdHJhbnNsYXRlID0ga2V5ID0+IHQoYCR7dHJhbnNsYXRpb25QYXRofSR7a2V5fWApLFxyXG4gICAgICAgIC8vIHl1cCBjb25maWdzXHJcbiAgICAgICAgc2NoZW1hID0geXVwLm9iamVjdCgpLnNoYXBlKHtcclxuICAgICAgICAgICAgY29tbWVudDogeXVwXHJcbiAgICAgICAgICAgICAgICAuc3RyaW5nKClcclxuICAgICAgICB9KSxcclxuICAgICAgICAvLyBmb3JtIGNvbmZpZ3NcclxuICAgICAgICB7IHJlZ2lzdGVyLCBoYW5kbGVTdWJtaXQsIGZvcm1TdGF0ZTogeyBlcnJvcnMgfSB9ID0gdXNlRm9ybSh7XHJcbiAgICAgICAgICAgIG1vZGU6ICdvbkNoYW5nZScsXHJcbiAgICAgICAgICAgIHJlc29sdmVyOiB5dXBSZXNvbHZlcihzY2hlbWEpXHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgXHJcbiAgICBjb25zdCBzdWJtaXQgPSBhc3luYyAoZGF0YSkgPT4ge1xyXG4gICAgICBcclxuICAgICAgc2V0TG9hZGluZyh0cnVlKTtcclxuICAgICAgc2V0VGltZW91dCgoKT0+e1xyXG4gICAgICAgIHNldExvYWRpbmcoZmFsc2UpO1xyXG4gICAgICB9LCA0MDAwKTtcclxuICAgICAgaWYgKCBtYXRjaElkICkge1xyXG4gICAgICAgIHRyeSB7XHJcbiAgICAgICAgICBzZXRMb2FkaW5nKHRydWUpO1xyXG4gICAgICAgICAgYXdhaXQgcmVxdWVzdChBRERfRkVFREJBQ0ssIHsgY29tbWVudDogZGF0YS5jb21tZW50LCBzdGFyczogc2ltdWxhdG9yLCBtYXRjaElkIH0sIHthdXRoOiB0cnVlfSk7XHJcbiAgICAgICAgICBpZiAoIGNvbW1lbnRCb3hSZWYuY3VycmVudCApIFxyXG4gICAgICAgICAgICBjb21tZW50Qm94UmVmLmN1cnJlbnQudmFsdWUgPSBcIlwiO1xyXG4gICAgICAgIH1cclxuICAgICAgICBjYXRjaCAoIGVyciApIHtcclxuICAgICAgICAgIHRvYXN0KCBlcnIucmVzcG9uc2UuZGF0YT8ubWVzc2FnZSB8fCBg0J3QtdCy0L7Qt9C80L7QttC90L4g0LTQvtCx0LDQstC40YLRjCDQvtGC0LfRi9CyYCwge1xyXG4gICAgICAgICAgICAgIHR5cGU6IGBlcnJvcmBcclxuICAgICAgICAgIH0pO1xyXG4gICAgICAgIH1cclxuICAgICAgICBmaW5hbGx5e1xyXG4gICAgICAgICAgc2V0TG9hZGluZyhmYWxzZSk7XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICB9XHJcblxyXG5cclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5jb250YWluZXJ9PlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLnN0YXJzX2NvbnRhaW5lcn0+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLnN0YXJzX2NvbnRlbnR9PlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuc3RhcnNfYXJlYX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN0YXJzLm1hcChlbCA9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNpbXVsYXRvciA+IGVsID9cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKDxpbWdcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGtleT17KGVsICsgMSkgKiBNYXRoLnJhbmRvbSgpfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3JjPXtmaWxsZWRTdGFyLnNyY31cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFsdD1cIlwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiBzZXRTaW11bGF0b3IoZWwpfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvPilcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgOlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAoPGltZ1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAga2V5PXsoZWwgKyAxKSAqIE1hdGgucmFuZG9tKCl9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzcmM9e3VuZmlsbGVkU3Rhci5zcmN9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhbHQ9XCJcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb25DbGljaz17KCkgPT4gc2V0U2ltdWxhdG9yKGVsICsgMSl9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8+KSlcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8Zm9ybSBvblN1Ym1pdD17aGFuZGxlU3VibWl0KHN1Ym1pdCl9PlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy50ZXh0YXJlYV9jb250YWluZXJ9PlxyXG4gICAgICAgICAgICAgICAgICAgIDx0ZXh0YXJlYVxyXG4gICAgICAgICAgICAgICAgICAgICAgICB7Li4ucmVnaXN0ZXIoJ2NvbW1lbnQnKX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgaWQ9J2NvbW1lbnQnXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbHM9XCIzMFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHJvd3M9XCI3XCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgcmVmPXtjb21tZW50Qm94UmVmfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBwbGFjZWhvbGRlcj17dHJhbnNsYXRlKCdwbGFjZUhvbGRlcicpfVxyXG4gICAgICAgICAgICAgICAgICAgID48L3RleHRhcmVhPlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmJ1dHRvbl9jb250YWluZXJ9PlxyXG4gICAgICAgICAgICAgICAgICAgIDxMb2FkaW5nQnV0dG9uIGxvYWRpbmc9e2xvYWRpbmd9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgdHJhbnNsYXRlKCdzZW5kJylcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIDwvTG9hZGluZ0J1dHRvbj5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8L2Zvcm0+XHJcbiAgICAgICAgICAgIDxUb2FzdENvbnRhaW5lciAvPlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgKVxyXG59XHJcbiJdLCJzb3VyY2VSb290IjoiIn0=