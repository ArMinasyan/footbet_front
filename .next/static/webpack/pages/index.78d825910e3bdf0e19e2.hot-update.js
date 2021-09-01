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
              if (!matchId) {
                _context.next = 13;
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
              _context.next = 10;
              break;

            case 7:
              _context.prev = 7;
              _context.t0 = _context["catch"](1);
              (0,react_toastify__WEBPACK_IMPORTED_MODULE_14__.toast)(((_err$response$data = _context.t0.response.data) === null || _err$response$data === void 0 ? void 0 : _err$response$data.message) || "\u041D\u0435\u0432\u043E\u0437\u043C\u043E\u0436\u043D\u043E \u0434\u043E\u0431\u0430\u0432\u0438\u0442\u044C \u043E\u0442\u0437\u044B\u0432", {
                type: "error"
              });

            case 10:
              _context.prev = 10;
              setLoading(false);
              return _context.finish(10);

            case 13:
            case "end":
              return _context.stop();
          }
        }
      }, _callee, null, [[1, 7, 10, 13]]);
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
              lineNumber: 67,
              columnNumber: 38
            }, _this) : /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("img", {
              src: _public_images_main_feedbacks_unfilledStar_png__WEBPACK_IMPORTED_MODULE_10__.default.src,
              alt: "",
              onClick: function onClick() {
                return setSimulator(el + 1);
              }
            }, (el + 1) * Math.random(), false, {
              fileName: _jsxFileName,
              lineNumber: 74,
              columnNumber: 38
            }, _this);
          })
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 63,
          columnNumber: 21
        }, this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 62,
        columnNumber: 17
      }, this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 61,
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
          lineNumber: 86,
          columnNumber: 21
        }, this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 85,
        columnNumber: 17
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("div", {
        className: (_LeaveComment_module_scss__WEBPACK_IMPORTED_MODULE_15___default().button_container),
        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(_common_LoadingButton__WEBPACK_IMPORTED_MODULE_13__.default, {
          loading: loading,
          children: translate('send')
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 95,
          columnNumber: 21
        }, this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 94,
        columnNumber: 17
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 84,
      columnNumber: 13
    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(react_toastify__WEBPACK_IMPORTED_MODULE_14__.ToastContainer, {}, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 102,
      columnNumber: 13
    }, this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 60,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9QYWdlcy9jb21tb24vVGVzdGltb25pYWxzL0xlYXZlQ29tbWVudC9MZWF2ZUNvbW1lbnQuanN4Il0sIm5hbWVzIjpbIkxlYXZlQ29tbWVudCIsIm1hdGNoSWQiLCJ1c2VTdGF0ZSIsImxvYWRpbmciLCJzZXRMb2FkaW5nIiwic3RhcnMiLCJzaW11bGF0b3IiLCJzZXRTaW11bGF0b3IiLCJ1c2VUcmFuc2xhdGlvbiIsInQiLCJ0cmFuc2xhdGlvblBhdGgiLCJ0cmFuc2xhdGUiLCJrZXkiLCJzY2hlbWEiLCJ5dXAiLCJzaGFwZSIsImNvbW1lbnQiLCJ1c2VGb3JtIiwibW9kZSIsInJlc29sdmVyIiwieXVwUmVzb2x2ZXIiLCJyZWdpc3RlciIsImhhbmRsZVN1Ym1pdCIsImVycm9ycyIsImZvcm1TdGF0ZSIsInN1Ym1pdCIsImRhdGEiLCJyZXF1ZXN0IiwiQUREX0ZFRURCQUNLIiwiYXV0aCIsInRvYXN0IiwicmVzcG9uc2UiLCJtZXNzYWdlIiwidHlwZSIsInN0eWxlcyIsIm1hcCIsImVsIiwiZmlsbGVkU3RhciIsIk1hdGgiLCJyYW5kb20iLCJ1bmZpbGxlZFN0YXIiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0NBRUE7O0NBRUE7O0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBSU8sU0FBU0EsWUFBVCxPQUFxQztBQUFBOztBQUFBOztBQUFBLE1BQVpDLE9BQVksUUFBWkEsT0FBWTs7QUFBQSxrQkFFVkMsK0NBQVEsQ0FBQyxLQUFELENBRkU7QUFBQSxNQUVsQ0MsT0FGa0M7QUFBQSxNQUV6QkMsVUFGeUI7O0FBSXBDO0FBQ0EsTUFBQUMsS0FBSyxHQUFHLENBQUMsQ0FBRCxFQUFJLENBQUosRUFBTyxDQUFQLEVBQVUsQ0FBVixFQUFhLENBQWIsQ0FBUjtBQUFBLG1CQUM0QkgsK0NBQVEs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WSxDQUFDRyxNQUFELENBQTVCO0FBQUEsOEJBQ0k7QUFBSyxpQkFBUyxFQUFFUyxzRkFBaEI7QUFBQSwrQkFDSSwwR0FDUWIsUUFBUSxDQUFDLFNBQUQsQ0FEaEI7QUFFSSxZQUFFLEVBQUMsU0FGUDtBQUdJLGNBQUksRUFBQyxJQUhUO0FBSUksY0FBSSxFQUFDLEdBSlQ7QUFLSSxxQkFBVyxFQUFFVixTQUFTLENBQUMsYUFBRDtBQUwxQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREo7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQURKLGVBVUk7QUFBSyxpQkFBUyxFQUFFdUIsb0ZBQWhCO0FBQUEsK0JBQ0ksOERBQUMsMkRBQUQ7QUFBZSxpQkFBTyxFQUFFL0IsT0FBeEI7QUFBQSxvQkFFUVEsU0FBUyxDQUFDLE1BQUQ7QUFGakI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURKO0FBQUE7QUFBQTtBQUFBO0FBQUEsY0FWSjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUF4QkosZUEwQ0ksOERBQUMsMkRBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQTFDSjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsVUFESjtBQThDSDs7R0F0RmVYLFk7VUFRQVEsa0UsRUFTNENTLG9EOzs7S0FqQjVDakIsWSIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9pbmRleC43OGQ4MjU5MTBlM2JkZjBlMTllMi5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiLy8gaG9va3MgYW5kIGhlbHBlcnNcclxuaW1wb3J0IHVzZVRyYW5zbGF0aW9uIGZyb20gJ25leHQtdHJhbnNsYXRlL3VzZVRyYW5zbGF0aW9uJ1xyXG5pbXBvcnQgeyB1c2VGb3JtIH0gZnJvbSAncmVhY3QtaG9vay1mb3JtJ1xyXG5pbXBvcnQgeyB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0J1xyXG5pbXBvcnQgKiBhcyB5dXAgZnJvbSAneXVwJ1xyXG5pbXBvcnQgeyB5dXBSZXNvbHZlciB9IGZyb20gJ0Bob29rZm9ybS9yZXNvbHZlcnMveXVwJ1xyXG4vLyBzdHlsZXNcclxuaW1wb3J0IHN0eWxlcyBmcm9tICcuL0xlYXZlQ29tbWVudC5tb2R1bGUuc2NzcydcclxuLy8gaWNvbnNcclxuaW1wb3J0IGZpbGxlZFN0YXIgZnJvbSAnL3B1YmxpYy9pbWFnZXMvbWFpbi9mZWVkYmFja3MvZmlsbGVkU3Rhci5wbmcnXHJcbmltcG9ydCB1bmZpbGxlZFN0YXIgZnJvbSAnL3B1YmxpYy9pbWFnZXMvbWFpbi9mZWVkYmFja3MvdW5maWxsZWRTdGFyLnBuZydcclxuaW1wb3J0IHsgcmVxdWVzdCB9IGZyb20gJy4uLy4uLy4uLy4uLy4uL2xpYi9lci5saWInXHJcbmltcG9ydCB7IEFERF9GRUVEQkFDSyB9IGZyb20gJy4uLy4uLy4uLy4uLy4uL2xpYi9yZXF1ZXN0LWRlc3RpbmF0aW9ucydcclxuaW1wb3J0IHsgdG9hc3QsIFRvYXN0Q29udGFpbmVyIH0gZnJvbSAncmVhY3QtdG9hc3RpZnknXHJcbmltcG9ydCBMb2FkaW5nQnV0dG9uIGZyb20gJy4uLy4uLy4uLy4uL2NvbW1vbi9Mb2FkaW5nQnV0dG9uJ1xyXG5cclxuXHJcblxyXG5leHBvcnQgZnVuY3Rpb24gTGVhdmVDb21tZW50KCB7IG1hdGNoSWQgfSApIHtcclxuXHJcbiAgY29uc3QgWyBsb2FkaW5nLCBzZXRMb2FkaW5nIF0gPSB1c2VTdGF0ZShmYWxzZSk7XHJcbiAgICBjb25zdFxyXG4gICAgICAgIC8vIHN0YXRlcyBjb25zdHNcclxuICAgICAgICBzdGFycyA9IFswLCAxLCAyLCAzLCA0XSxcclxuICAgICAgICBbc2ltdWxhdG9yLCBzZXRTaW11bGF0b3JdID0gdXNlU3RhdGUoMCksXHJcbiAgICAgICAgLy8gdHJhbnNsYXRpb24gY29uc2ZpZ3NcclxuICAgICAgICB7IHQgfSA9IHVzZVRyYW5zbGF0aW9uKCdjb21tb24nKSxcclxuICAgICAgICB0cmFuc2xhdGlvblBhdGggPSAnY29tbW9ucy4nLFxyXG4gICAgICAgIHRyYW5zbGF0ZSA9IGtleSA9PiB0KGAke3RyYW5zbGF0aW9uUGF0aH0ke2tleX1gKSxcclxuICAgICAgICAvLyB5dXAgY29uZmlnc1xyXG4gICAgICAgIHNjaGVtYSA9IHl1cC5vYmplY3QoKS5zaGFwZSh7XHJcbiAgICAgICAgICAgIGNvbW1lbnQ6IHl1cFxyXG4gICAgICAgICAgICAgICAgLnN0cmluZygpXHJcbiAgICAgICAgfSksXHJcbiAgICAgICAgLy8gZm9ybSBjb25maWdzXHJcbiAgICAgICAgeyByZWdpc3RlciwgaGFuZGxlU3VibWl0LCBmb3JtU3RhdGU6IHsgZXJyb3JzIH0gfSA9IHVzZUZvcm0oe1xyXG4gICAgICAgICAgICBtb2RlOiAnb25DaGFuZ2UnLFxyXG4gICAgICAgICAgICByZXNvbHZlcjogeXVwUmVzb2x2ZXIoc2NoZW1hKVxyXG4gICAgICAgIH0pO1xyXG4gICAgICAgIFxyXG4gICAgY29uc3Qgc3VibWl0ID0gYXN5bmMgKGRhdGEpID0+IHtcclxuICAgICAgaWYgKCBtYXRjaElkICkge1xyXG4gICAgICAgIHRyeSB7XHJcbiAgICAgICAgICBzZXRMb2FkaW5nKHRydWUpO1xyXG4gICAgICAgICAgYXdhaXQgcmVxdWVzdChBRERfRkVFREJBQ0ssIHsgY29tbWVudDogZGF0YS5jb21tZW50LCBzdGFyczogc2ltdWxhdG9yLCBtYXRjaElkIH0sIHthdXRoOiB0cnVlfSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGNhdGNoICggZXJyICkge1xyXG4gICAgICAgICAgdG9hc3QoIGVyci5yZXNwb25zZS5kYXRhPy5tZXNzYWdlIHx8IGDQndC10LLQvtC30LzQvtC20L3QviDQtNC+0LHQsNCy0LjRgtGMINC+0YLQt9GL0LJgLCB7XHJcbiAgICAgICAgICAgICAgdHlwZTogYGVycm9yYFxyXG4gICAgICAgICAgfSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGZpbmFsbHl7XHJcbiAgICAgICAgICBzZXRMb2FkaW5nKGZhbHNlKTtcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgIH1cclxuXHJcblxyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmNvbnRhaW5lcn0+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuc3RhcnNfY29udGFpbmVyfT5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuc3RhcnNfY29udGVudH0+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5zdGFyc19hcmVhfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc3RhcnMubWFwKGVsID0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc2ltdWxhdG9yID4gZWwgP1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAoPGltZ1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAga2V5PXsoZWwgKyAxKSAqIE1hdGgucmFuZG9tKCl9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzcmM9e2ZpbGxlZFN0YXIuc3JjfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYWx0PVwiXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IHNldFNpbXVsYXRvcihlbCl9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8+KVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA6XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICg8aW1nXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBrZXk9eyhlbCArIDEpICogTWF0aC5yYW5kb20oKX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNyYz17dW5maWxsZWRTdGFyLnNyY31cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFsdD1cIlwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiBzZXRTaW11bGF0b3IoZWwgKyAxKX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLz4pKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDxmb3JtIG9uU3VibWl0PXtoYW5kbGVTdWJtaXQoc3VibWl0KX0+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLnRleHRhcmVhX2NvbnRhaW5lcn0+XHJcbiAgICAgICAgICAgICAgICAgICAgPHRleHRhcmVhXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHsuLi5yZWdpc3RlcignY29tbWVudCcpfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBpZD0nY29tbWVudCdcclxuICAgICAgICAgICAgICAgICAgICAgICAgY29scz1cIjMwXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgcm93cz1cIjdcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBwbGFjZWhvbGRlcj17dHJhbnNsYXRlKCdwbGFjZUhvbGRlcicpfVxyXG4gICAgICAgICAgICAgICAgICAgID48L3RleHRhcmVhPlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmJ1dHRvbl9jb250YWluZXJ9PlxyXG4gICAgICAgICAgICAgICAgICAgIDxMb2FkaW5nQnV0dG9uIGxvYWRpbmc9e2xvYWRpbmd9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0cmFuc2xhdGUoJ3NlbmQnKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgPC9Mb2FkaW5nQnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDwvZm9ybT5cclxuICAgICAgICAgICAgPFRvYXN0Q29udGFpbmVyIC8+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICApXHJcbn1cclxuIl0sInNvdXJjZVJvb3QiOiIifQ==