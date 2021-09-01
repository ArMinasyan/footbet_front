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
              if (!matchId) {
                _context.next = 14;
                break;
              }

              _context.prev = 1;
              setLoading(true);
              _context.next = 5;
              return (0,_lib_er_lib__WEBPACK_IMPORTED_MODULE_11__.request)(_lib_request_destinations__WEBPACK_IMPORTED_MODULE_12__.ADD_FEEDBACK, {
                comment: data.comment,
                stars: simulator,
                matchId: matchId
              }, {
                auth: true
              });

            case 5:
              if (commentBoxRef.current) commentBoxRef.current.value = "";
              _context.next = 11;
              break;

            case 8:
              _context.prev = 8;
              _context.t0 = _context["catch"](1);
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
      }, _callee, null, [[1, 8, 11, 14]]);
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
              lineNumber: 71,
              columnNumber: 38
            }, _this) : /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("img", {
              src: _public_images_main_feedbacks_unfilledStar_png__WEBPACK_IMPORTED_MODULE_10__.default.src,
              alt: "",
              onClick: function onClick() {
                return setSimulator(el + 1);
              }
            }, (el + 1) * Math.random(), false, {
              fileName: _jsxFileName,
              lineNumber: 78,
              columnNumber: 38
            }, _this);
          })
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 67,
          columnNumber: 21
        }, this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 66,
        columnNumber: 17
      }, this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 65,
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
          lineNumber: 90,
          columnNumber: 21
        }, this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 89,
        columnNumber: 17
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("div", {
        className: (_LeaveComment_module_scss__WEBPACK_IMPORTED_MODULE_15___default().button_container),
        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(_common_LoadingButton__WEBPACK_IMPORTED_MODULE_13__.default, {
          loading: loading,
          children: translate('send')
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 100,
          columnNumber: 21
        }, this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 99,
        columnNumber: 17
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 88,
      columnNumber: 13
    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(react_toastify__WEBPACK_IMPORTED_MODULE_14__.ToastContainer, {}, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 107,
      columnNumber: 13
    }, this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 64,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9QYWdlcy9jb21tb24vVGVzdGltb25pYWxzL0xlYXZlQ29tbWVudC9MZWF2ZUNvbW1lbnQuanN4Il0sIm5hbWVzIjpbIkxlYXZlQ29tbWVudCIsIm1hdGNoSWQiLCJ1c2VTdGF0ZSIsImxvYWRpbmciLCJzZXRMb2FkaW5nIiwiY29tbWVudEJveFJlZiIsInVzZVJlZiIsInN0YXJzIiwic2ltdWxhdG9yIiwic2V0U2ltdWxhdG9yIiwidXNlVHJhbnNsYXRpb24iLCJ0IiwidHJhbnNsYXRpb25QYXRoIiwidHJhbnNsYXRlIiwia2V5Iiwic2NoZW1hIiwieXVwIiwic2hhcGUiLCJjb21tZW50IiwidXNlRm9ybSIsIm1vZGUiLCJyZXNvbHZlciIsInl1cFJlc29sdmVyIiwicmVnaXN0ZXIiLCJoYW5kbGVTdWJtaXQiLCJlcnJvcnMiLCJmb3JtU3RhdGUiLCJzdWJtaXQiLCJkYXRhIiwicmVxdWVzdCIsIkFERF9GRUVEQkFDSyIsImF1dGgiLCJjdXJyZW50IiwidmFsdWUiLCJ0b2FzdCIsInJlc3BvbnNlIiwibWVzc2FnZSIsInR5cGUiLCJzdHlsZXMiLCJtYXAiLCJlbCIsImZpbGxlZFN0YXIiLCJNYXRoIiwicmFuZG9tIiwidW5maWxsZWRTdGFyIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtDQUVBOztDQUVBOztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBSU8sU0FBU0EsWUFBVCxPQUFxQztBQUFBOztBQUFBOztBQUFBLE1BQVpDLE9BQVksUUFBWkEsT0FBWTs7QUFBQSxrQkFFVkMsK0NBQVEsQ0FBQyxLQUFELENBRkU7QUFBQSxNQUVsQ0MsT0FGa0M7QUFBQSxNQUV6QkMsVUFGeUI7O0FBRzFDLE1BQU1DLGFBQWEsR0FBR0MsNkNBQU0sQ0FBQyxJQUFELENBQTVCOztBQUVNO0FB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QU4sSUFBV0UsSUFBSSxDQUFDQyxNQUFMLEVBRG5CO0FBQUE7QUFBQTtBQUFBO0FBQUEscUJBVEc7QUFBQSxXQUFaO0FBRlI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURKO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFESjtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBREosZUF3Qkk7QUFBTSxjQUFRLEVBQUVuQixZQUFZLENBQUNHLE1BQUQsQ0FBNUI7QUFBQSw4QkFDSTtBQUFLLGlCQUFTLEVBQUVXLHNGQUFoQjtBQUFBLCtCQUNJLDBHQUNRZixRQUFRLENBQUMsU0FBRCxDQURoQjtBQUVJLFlBQUUsRUFBQyxTQUZQO0FBR0ksY0FBSSxFQUFDLElBSFQ7QUFJSSxjQUFJLEVBQUMsR0FKVDtBQUtJLGFBQUcsRUFBRWxCLGFBTFQ7QUFNSSxxQkFBVyxFQUFFUSxTQUFTLENBQUMsYUFBRDtBQU4xQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREo7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQURKLGVBV0k7QUFBSyxpQkFBUyxFQUFFeUIsb0ZBQWhCO0FBQUEsK0JBQ0ksOERBQUMsMkRBQUQ7QUFBZSxpQkFBTyxFQUFFbkMsT0FBeEI7QUFBQSxvQkFFTVUsU0FBUyxDQUFDLE1BQUQ7QUFGZjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREo7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQVhKO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQXhCSixlQTJDSSw4REFBQywyREFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBM0NKO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxVQURKO0FBK0NIOztHQTFGZWIsWTtVQVNBVSxrRSxFQVM0Q1Msb0Q7OztLQWxCNUNuQixZIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL2luZGV4LmQ3YzFlZTViYmViNzczNWU3OGE4LmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyIvLyBob29rcyBhbmQgaGVscGVyc1xyXG5pbXBvcnQgdXNlVHJhbnNsYXRpb24gZnJvbSAnbmV4dC10cmFuc2xhdGUvdXNlVHJhbnNsYXRpb24nXHJcbmltcG9ydCB7IHVzZUZvcm0gfSBmcm9tICdyZWFjdC1ob29rLWZvcm0nXHJcbmltcG9ydCB7IHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnXHJcbmltcG9ydCAqIGFzIHl1cCBmcm9tICd5dXAnXHJcbmltcG9ydCB7IHl1cFJlc29sdmVyIH0gZnJvbSAnQGhvb2tmb3JtL3Jlc29sdmVycy95dXAnXHJcbi8vIHN0eWxlc1xyXG5pbXBvcnQgc3R5bGVzIGZyb20gJy4vTGVhdmVDb21tZW50Lm1vZHVsZS5zY3NzJ1xyXG4vLyBpY29uc1xyXG5pbXBvcnQgZmlsbGVkU3RhciBmcm9tICcvcHVibGljL2ltYWdlcy9tYWluL2ZlZWRiYWNrcy9maWxsZWRTdGFyLnBuZydcclxuaW1wb3J0IHVuZmlsbGVkU3RhciBmcm9tICcvcHVibGljL2ltYWdlcy9tYWluL2ZlZWRiYWNrcy91bmZpbGxlZFN0YXIucG5nJ1xyXG5pbXBvcnQgeyByZXF1ZXN0IH0gZnJvbSAnLi4vLi4vLi4vLi4vLi4vbGliL2VyLmxpYidcclxuaW1wb3J0IHsgQUREX0ZFRURCQUNLIH0gZnJvbSAnLi4vLi4vLi4vLi4vLi4vbGliL3JlcXVlc3QtZGVzdGluYXRpb25zJ1xyXG5pbXBvcnQgeyB0b2FzdCwgVG9hc3RDb250YWluZXIgfSBmcm9tICdyZWFjdC10b2FzdGlmeSdcclxuaW1wb3J0IExvYWRpbmdCdXR0b24gZnJvbSAnLi4vLi4vLi4vLi4vY29tbW9uL0xvYWRpbmdCdXR0b24nXHJcbmltcG9ydCB7IHVzZVJlZiB9IGZyb20gJ3JlYWN0J1xyXG5cclxuXHJcblxyXG5leHBvcnQgZnVuY3Rpb24gTGVhdmVDb21tZW50KCB7IG1hdGNoSWQgfSApIHtcclxuXHJcbiAgY29uc3QgWyBsb2FkaW5nLCBzZXRMb2FkaW5nIF0gPSB1c2VTdGF0ZShmYWxzZSk7XHJcbiAgY29uc3QgY29tbWVudEJveFJlZiA9IHVzZVJlZihudWxsKTtcclxuICAgIGNvbnN0XHJcbiAgICAgICAgLy8gc3RhdGVzIGNvbnN0c1xyXG4gICAgICAgIHN0YXJzID0gWzAsIDEsIDIsIDMsIDRdLFxyXG4gICAgICAgIFtzaW11bGF0b3IsIHNldFNpbXVsYXRvcl0gPSB1c2VTdGF0ZSgwKSxcclxuICAgICAgICAvLyB0cmFuc2xhdGlvbiBjb25zZmlnc1xyXG4gICAgICAgIHsgdCB9ID0gdXNlVHJhbnNsYXRpb24oJ2NvbW1vbicpLFxyXG4gICAgICAgIHRyYW5zbGF0aW9uUGF0aCA9ICdjb21tb25zLicsXHJcbiAgICAgICAgdHJhbnNsYXRlID0ga2V5ID0+IHQoYCR7dHJhbnNsYXRpb25QYXRofSR7a2V5fWApLFxyXG4gICAgICAgIC8vIHl1cCBjb25maWdzXHJcbiAgICAgICAgc2NoZW1hID0geXVwLm9iamVjdCgpLnNoYXBlKHtcclxuICAgICAgICAgICAgY29tbWVudDogeXVwXHJcbiAgICAgICAgICAgICAgICAuc3RyaW5nKClcclxuICAgICAgICB9KSxcclxuICAgICAgICAvLyBmb3JtIGNvbmZpZ3NcclxuICAgICAgICB7IHJlZ2lzdGVyLCBoYW5kbGVTdWJtaXQsIGZvcm1TdGF0ZTogeyBlcnJvcnMgfSB9ID0gdXNlRm9ybSh7XHJcbiAgICAgICAgICAgIG1vZGU6ICdvbkNoYW5nZScsXHJcbiAgICAgICAgICAgIHJlc29sdmVyOiB5dXBSZXNvbHZlcihzY2hlbWEpXHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgXHJcbiAgICBjb25zdCBzdWJtaXQgPSBhc3luYyAoZGF0YSkgPT4ge1xyXG4gICAgICBpZiAoIG1hdGNoSWQgKSB7XHJcbiAgICAgICAgdHJ5IHtcclxuICAgICAgICAgIHNldExvYWRpbmcodHJ1ZSk7XHJcbiAgICAgICAgICBhd2FpdCByZXF1ZXN0KEFERF9GRUVEQkFDSywgeyBjb21tZW50OiBkYXRhLmNvbW1lbnQsIHN0YXJzOiBzaW11bGF0b3IsIG1hdGNoSWQgfSwge2F1dGg6IHRydWV9KTtcclxuICAgICAgICAgIGlmICggY29tbWVudEJveFJlZi5jdXJyZW50ICkgXHJcbiAgICAgICAgICAgIGNvbW1lbnRCb3hSZWYuY3VycmVudC52YWx1ZSA9IFwiXCI7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGNhdGNoICggZXJyICkge1xyXG4gICAgICAgICAgdG9hc3QoIGVyci5yZXNwb25zZS5kYXRhPy5tZXNzYWdlIHx8IGDQndC10LLQvtC30LzQvtC20L3QviDQtNC+0LHQsNCy0LjRgtGMINC+0YLQt9GL0LJgLCB7XHJcbiAgICAgICAgICAgICAgdHlwZTogYGVycm9yYFxyXG4gICAgICAgICAgfSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGZpbmFsbHl7XHJcbiAgICAgICAgICBzZXRMb2FkaW5nKGZhbHNlKTtcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgIH1cclxuXHJcblxyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmNvbnRhaW5lcn0+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuc3RhcnNfY29udGFpbmVyfT5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuc3RhcnNfY29udGVudH0+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5zdGFyc19hcmVhfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc3RhcnMubWFwKGVsID0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc2ltdWxhdG9yID4gZWwgP1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAoPGltZ1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAga2V5PXsoZWwgKyAxKSAqIE1hdGgucmFuZG9tKCl9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzcmM9e2ZpbGxlZFN0YXIuc3JjfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYWx0PVwiXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IHNldFNpbXVsYXRvcihlbCl9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8+KVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA6XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICg8aW1nXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBrZXk9eyhlbCArIDEpICogTWF0aC5yYW5kb20oKX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNyYz17dW5maWxsZWRTdGFyLnNyY31cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFsdD1cIlwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiBzZXRTaW11bGF0b3IoZWwgKyAxKX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLz4pKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDxmb3JtIG9uU3VibWl0PXtoYW5kbGVTdWJtaXQoc3VibWl0KX0+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLnRleHRhcmVhX2NvbnRhaW5lcn0+XHJcbiAgICAgICAgICAgICAgICAgICAgPHRleHRhcmVhXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHsuLi5yZWdpc3RlcignY29tbWVudCcpfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBpZD0nY29tbWVudCdcclxuICAgICAgICAgICAgICAgICAgICAgICAgY29scz1cIjMwXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgcm93cz1cIjdcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICByZWY9e2NvbW1lbnRCb3hSZWZ9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHBsYWNlaG9sZGVyPXt0cmFuc2xhdGUoJ3BsYWNlSG9sZGVyJyl9XHJcbiAgICAgICAgICAgICAgICAgICAgPjwvdGV4dGFyZWE+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuYnV0dG9uX2NvbnRhaW5lcn0+XHJcbiAgICAgICAgICAgICAgICAgICAgPExvYWRpbmdCdXR0b24gbG9hZGluZz17bG9hZGluZ30+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICB0cmFuc2xhdGUoJ3NlbmQnKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgPC9Mb2FkaW5nQnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDwvZm9ybT5cclxuICAgICAgICAgICAgPFRvYXN0Q29udGFpbmVyIC8+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICApXHJcbn1cclxuIl0sInNvdXJjZVJvb3QiOiIifQ==