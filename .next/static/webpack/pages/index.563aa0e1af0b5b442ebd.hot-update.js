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
              console.log(1234);

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9QYWdlcy9jb21tb24vVGVzdGltb25pYWxzL0xlYXZlQ29tbWVudC9MZWF2ZUNvbW1lbnQuanN4Il0sIm5hbWVzIjpbIkxlYXZlQ29tbWVudCIsIm1hdGNoSWQiLCJ1c2VTdGF0ZSIsImxvYWRpbmciLCJzZXRMb2FkaW5nIiwic3RhcnMiLCJzaW11bGF0b3IiLCJzZXRTaW11bGF0b3IiLCJ1c2VUcmFuc2xhdGlvbiIsInQiLCJ0cmFuc2xhdGlvblBhdGgiLCJ0cmFuc2xhdGUiLCJrZXkiLCJzY2hlbWEiLCJ5dXAiLCJzaGFwZSIsImNvbW1lbnQiLCJ1c2VGb3JtIiwibW9kZSIsInJlc29sdmVyIiwieXVwUmVzb2x2ZXIiLCJyZWdpc3RlciIsImhhbmRsZVN1Ym1pdCIsImVycm9ycyIsImZvcm1TdGF0ZSIsInN1Ym1pdCIsImRhdGEiLCJjb25zb2xlIiwibG9nIiwicmVxdWVzdCIsIkFERF9GRUVEQkFDSyIsImF1dGgiLCJ0b2FzdCIsInJlc3BvbnNlIiwibWVzc2FnZSIsInR5cGUiLCJzdHlsZXMiLCJtYXAiLCJlbCIsImZpbGxlZFN0YXIiLCJNYXRoIiwicmFuZG9tIiwidW5maWxsZWRTdGFyIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtDQUVBOztDQUVBOztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUlPLFNBQVNBLFlBQVQsT0FBcUM7QUFBQTs7QUFBQTs7QUFBQSxNQUFaQyxPQUFZLFFBQVpBLE9BQVk7O0FBQUEsa0JBRVZDLCtDQUFRLENBQUMsS0FBRCxDQUZFO0FBQUEsTUFFbENDLE9BRmtDO0FBQUEsTUFFekJDLFVBRnlCOztBQUlwQztBQUNBLE1BQUFDLEtBQUssR0FBRyxDQUFDLENBQUQsRUFBSSxDQUFKLEVBQU8sQ0FBUCxFQUFVLENBQVYsRUFBYSxDQUFiLENBQVI7QUFB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QUFBO0FBQUE7QUFBQTtBQUFBLFlBREosZUF3Qkk7QUFBTSxjQUFRLEVBQUVuQixZQUFZLENBQUNHLE1BQUQsQ0FBNUI7QUFBQSw4QkFDSTtBQUFLLGlCQUFTLEVBQUVXLHNGQUFoQjtBQUFBLCtCQUNJLDBHQUNRZixRQUFRLENBQUMsU0FBRCxDQURoQjtBQUVJLFlBQUUsRUFBQyxTQUZQO0FBR0ksY0FBSSxFQUFDLElBSFQ7QUFJSSxjQUFJLEVBQUMsR0FKVDtBQUtJLHFCQUFXLEVBQUVWLFNBQVMsQ0FBQyxhQUFEO0FBTDFCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFESjtBQUFBO0FBQUE7QUFBQTtBQUFBLGNBREosZUFVSTtBQUFLLGlCQUFTLEVBQUV5QixvRkFBaEI7QUFBQSwrQkFDSSw4REFBQywyREFBRDtBQUFlLGlCQUFPLEVBQUVqQyxPQUF4QjtBQUFBLG9CQUVNUSxTQUFTLENBQUMsTUFBRDtBQUZmO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFESjtBQUFBO0FBQUE7QUFBQTtBQUFBLGNBVko7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBeEJKLGVBMENJLDhEQUFDLDJEQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUExQ0o7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFVBREo7QUE4Q0g7O0dBdkZlWCxZO1VBUUFRLGtFLEVBUzRDUyxvRDs7O0tBakI1Q2pCLFkiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvaW5kZXguNTYzYWEwZTFhZjBiNWI0NDJlYmQuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8vIGhvb2tzIGFuZCBoZWxwZXJzXHJcbmltcG9ydCB1c2VUcmFuc2xhdGlvbiBmcm9tICduZXh0LXRyYW5zbGF0ZS91c2VUcmFuc2xhdGlvbidcclxuaW1wb3J0IHsgdXNlRm9ybSB9IGZyb20gJ3JlYWN0LWhvb2stZm9ybSdcclxuaW1wb3J0IHsgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCdcclxuaW1wb3J0ICogYXMgeXVwIGZyb20gJ3l1cCdcclxuaW1wb3J0IHsgeXVwUmVzb2x2ZXIgfSBmcm9tICdAaG9va2Zvcm0vcmVzb2x2ZXJzL3l1cCdcclxuLy8gc3R5bGVzXHJcbmltcG9ydCBzdHlsZXMgZnJvbSAnLi9MZWF2ZUNvbW1lbnQubW9kdWxlLnNjc3MnXHJcbi8vIGljb25zXHJcbmltcG9ydCBmaWxsZWRTdGFyIGZyb20gJy9wdWJsaWMvaW1hZ2VzL21haW4vZmVlZGJhY2tzL2ZpbGxlZFN0YXIucG5nJ1xyXG5pbXBvcnQgdW5maWxsZWRTdGFyIGZyb20gJy9wdWJsaWMvaW1hZ2VzL21haW4vZmVlZGJhY2tzL3VuZmlsbGVkU3Rhci5wbmcnXHJcbmltcG9ydCB7IHJlcXVlc3QgfSBmcm9tICcuLi8uLi8uLi8uLi8uLi9saWIvZXIubGliJ1xyXG5pbXBvcnQgeyBBRERfRkVFREJBQ0sgfSBmcm9tICcuLi8uLi8uLi8uLi8uLi9saWIvcmVxdWVzdC1kZXN0aW5hdGlvbnMnXHJcbmltcG9ydCB7IHRvYXN0LCBUb2FzdENvbnRhaW5lciB9IGZyb20gJ3JlYWN0LXRvYXN0aWZ5J1xyXG5pbXBvcnQgTG9hZGluZ0J1dHRvbiBmcm9tICcuLi8uLi8uLi8uLi9jb21tb24vTG9hZGluZ0J1dHRvbidcclxuXHJcblxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIExlYXZlQ29tbWVudCggeyBtYXRjaElkIH0gKSB7XHJcblxyXG4gIGNvbnN0IFsgbG9hZGluZywgc2V0TG9hZGluZyBdID0gdXNlU3RhdGUoZmFsc2UpO1xyXG4gICAgY29uc3RcclxuICAgICAgICAvLyBzdGF0ZXMgY29uc3RzXHJcbiAgICAgICAgc3RhcnMgPSBbMCwgMSwgMiwgMywgNF0sXHJcbiAgICAgICAgW3NpbXVsYXRvciwgc2V0U2ltdWxhdG9yXSA9IHVzZVN0YXRlKDApLFxyXG4gICAgICAgIC8vIHRyYW5zbGF0aW9uIGNvbnNmaWdzXHJcbiAgICAgICAgeyB0IH0gPSB1c2VUcmFuc2xhdGlvbignY29tbW9uJyksXHJcbiAgICAgICAgdHJhbnNsYXRpb25QYXRoID0gJ2NvbW1vbnMuJyxcclxuICAgICAgICB0cmFuc2xhdGUgPSBrZXkgPT4gdChgJHt0cmFuc2xhdGlvblBhdGh9JHtrZXl9YCksXHJcbiAgICAgICAgLy8geXVwIGNvbmZpZ3NcclxuICAgICAgICBzY2hlbWEgPSB5dXAub2JqZWN0KCkuc2hhcGUoe1xyXG4gICAgICAgICAgICBjb21tZW50OiB5dXBcclxuICAgICAgICAgICAgICAgIC5zdHJpbmcoKVxyXG4gICAgICAgIH0pLFxyXG4gICAgICAgIC8vIGZvcm0gY29uZmlnc1xyXG4gICAgICAgIHsgcmVnaXN0ZXIsIGhhbmRsZVN1Ym1pdCwgZm9ybVN0YXRlOiB7IGVycm9ycyB9IH0gPSB1c2VGb3JtKHtcclxuICAgICAgICAgICAgbW9kZTogJ29uQ2hhbmdlJyxcclxuICAgICAgICAgICAgcmVzb2x2ZXI6IHl1cFJlc29sdmVyKHNjaGVtYSlcclxuICAgICAgICB9KTtcclxuICAgICAgICBcclxuICAgIGNvbnN0IHN1Ym1pdCA9IGFzeW5jIChkYXRhKSA9PiB7XHJcbiAgICAgIGNvbnNvbGUubG9nKCAxMjM0ICk7XHJcbiAgICAgIGlmICggbWF0Y2hJZCApIHtcclxuICAgICAgICB0cnkge1xyXG4gICAgICAgICAgc2V0TG9hZGluZyh0cnVlKTtcclxuICAgICAgICAgIGF3YWl0IHJlcXVlc3QoQUREX0ZFRURCQUNLLCB7IGNvbW1lbnQ6IGRhdGEuY29tbWVudCwgc3RhcnM6IHNpbXVsYXRvciwgbWF0Y2hJZCB9LCB7YXV0aDogdHJ1ZX0pO1xyXG4gICAgICAgIH1cclxuICAgICAgICBjYXRjaCAoIGVyciApIHtcclxuICAgICAgICAgIHRvYXN0KCBlcnIucmVzcG9uc2UuZGF0YT8ubWVzc2FnZSB8fCBg0J3QtdCy0L7Qt9C80L7QttC90L4g0LTQvtCx0LDQstC40YLRjCDQvtGC0LfRi9CyYCwge1xyXG4gICAgICAgICAgICAgIHR5cGU6IGBlcnJvcmBcclxuICAgICAgICAgIH0pO1xyXG4gICAgICAgIH1cclxuICAgICAgICBmaW5hbGx5e1xyXG4gICAgICAgICAgc2V0TG9hZGluZyhmYWxzZSk7XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICB9XHJcblxyXG5cclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5jb250YWluZXJ9PlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLnN0YXJzX2NvbnRhaW5lcn0+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLnN0YXJzX2NvbnRlbnR9PlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuc3RhcnNfYXJlYX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN0YXJzLm1hcChlbCA9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNpbXVsYXRvciA+IGVsID9cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKDxpbWdcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGtleT17KGVsICsgMSkgKiBNYXRoLnJhbmRvbSgpfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3JjPXtmaWxsZWRTdGFyLnNyY31cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFsdD1cIlwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiBzZXRTaW11bGF0b3IoZWwpfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvPilcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgOlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAoPGltZ1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAga2V5PXsoZWwgKyAxKSAqIE1hdGgucmFuZG9tKCl9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzcmM9e3VuZmlsbGVkU3Rhci5zcmN9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhbHQ9XCJcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb25DbGljaz17KCkgPT4gc2V0U2ltdWxhdG9yKGVsICsgMSl9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8+KSlcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8Zm9ybSBvblN1Ym1pdD17aGFuZGxlU3VibWl0KHN1Ym1pdCl9PlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy50ZXh0YXJlYV9jb250YWluZXJ9PlxyXG4gICAgICAgICAgICAgICAgICAgIDx0ZXh0YXJlYVxyXG4gICAgICAgICAgICAgICAgICAgICAgICB7Li4ucmVnaXN0ZXIoJ2NvbW1lbnQnKX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgaWQ9J2NvbW1lbnQnXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbHM9XCIzMFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHJvd3M9XCI3XCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9e3RyYW5zbGF0ZSgncGxhY2VIb2xkZXInKX1cclxuICAgICAgICAgICAgICAgICAgICA+PC90ZXh0YXJlYT5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5idXR0b25fY29udGFpbmVyfT5cclxuICAgICAgICAgICAgICAgICAgICA8TG9hZGluZ0J1dHRvbiBsb2FkaW5nPXtsb2FkaW5nfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIHRyYW5zbGF0ZSgnc2VuZCcpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICA8L0xvYWRpbmdCdXR0b24+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPC9mb3JtPlxyXG4gICAgICAgICAgICA8VG9hc3RDb250YWluZXIgLz5cclxuICAgICAgICA8L2Rpdj5cclxuICAgIClcclxufVxyXG4iXSwic291cmNlUm9vdCI6IiJ9