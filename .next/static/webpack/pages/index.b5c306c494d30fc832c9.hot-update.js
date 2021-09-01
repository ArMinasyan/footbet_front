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
/* harmony import */ var next_translate_useTranslation__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next-translate/useTranslation */ "./node_modules/next-translate/lib/esm/useTranslation.js");
/* harmony import */ var react_hook_form__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-hook-form */ "./node_modules/react-hook-form/dist/index.esm.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var yup__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! yup */ "./node_modules/yup/es/index.js");
/* harmony import */ var _hookform_resolvers_yup__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @hookform/resolvers/yup */ "./node_modules/@hookform/resolvers/yup/dist/yup.module.js");
/* harmony import */ var _LeaveComment_module_scss__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./LeaveComment.module.scss */ "./components/Pages/common/Testimonials/LeaveComment/LeaveComment.module.scss");
/* harmony import */ var _LeaveComment_module_scss__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(_LeaveComment_module_scss__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var _public_images_main_feedbacks_filledStar_png__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../../../../public/images/main/feedbacks/filledStar.png */ "./public/images/main/feedbacks/filledStar.png");
/* harmony import */ var _public_images_main_feedbacks_unfilledStar_png__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../../../../public/images/main/feedbacks/unfilledStar.png */ "./public/images/main/feedbacks/unfilledStar.png");
/* module decorator */ module = __webpack_require__.hmd(module);



var _jsxFileName = "C:\\Users\\Admin\\Desktop\\projects\\foot-bet\\components\\Pages\\common\\Testimonials\\LeaveComment\\LeaveComment.jsx",
    _s = $RefreshSig$();

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { (0,C_Users_Admin_Desktop_projects_foot_bet_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__.default)(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

// hooks and helpers




 // styles

 // icons



function LeaveComment() {
  _s();

  var _this = this;

  // states consts
  var stars = [0, 1, 2, 3, 4],
      _useState = (0,react__WEBPACK_IMPORTED_MODULE_4__.useState)(0),
      simulator = _useState[0],
      setSimulator = _useState[1],
      _useTranslation = (0,next_translate_useTranslation__WEBPACK_IMPORTED_MODULE_2__.default)('common'),
      t = _useTranslation.t,
      translationPath = 'commons.',
      translate = function translate(key) {
    return t("".concat(translationPath).concat(key));
  },
      schema = yup__WEBPACK_IMPORTED_MODULE_5__.object().shape({
    comment: yup__WEBPACK_IMPORTED_MODULE_5__.string()
  }),
      _useForm = (0,react_hook_form__WEBPACK_IMPORTED_MODULE_3__.useForm)({
    mode: 'onChange',
    resolver: (0,_hookform_resolvers_yup__WEBPACK_IMPORTED_MODULE_6__.yupResolver)(schema)
  }),
      register = _useForm.register,
      handleSubmit = _useForm.handleSubmit,
      errors = _useForm.formState.errors;

  var submit = function submit(data) {
    console.log(data, {
      rate: simulator
    });
  };

  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("div", {
    className: (_LeaveComment_module_scss__WEBPACK_IMPORTED_MODULE_9___default().container),
    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("div", {
      className: (_LeaveComment_module_scss__WEBPACK_IMPORTED_MODULE_9___default().stars_container),
      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("div", {
        className: (_LeaveComment_module_scss__WEBPACK_IMPORTED_MODULE_9___default().stars_content),
        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("div", {
          className: (_LeaveComment_module_scss__WEBPACK_IMPORTED_MODULE_9___default().stars_area),
          children: stars.map(function (el) {
            return simulator > el ? /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("img", {
              src: _public_images_main_feedbacks_filledStar_png__WEBPACK_IMPORTED_MODULE_7__.default.src,
              alt: "",
              onClick: function onClick() {
                return setSimulator(el);
              }
            }, (el + 1) * Math.random(), false, {
              fileName: _jsxFileName,
              lineNumber: 49,
              columnNumber: 38
            }, _this) : /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("img", {
              src: _public_images_main_feedbacks_unfilledStar_png__WEBPACK_IMPORTED_MODULE_8__.default.src,
              alt: "",
              onClick: function onClick() {
                return setSimulator(el + 1);
              }
            }, (el + 1) * Math.random(), false, {
              fileName: _jsxFileName,
              lineNumber: 56,
              columnNumber: 38
            }, _this);
          })
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 45,
          columnNumber: 21
        }, this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 44,
        columnNumber: 17
      }, this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 43,
      columnNumber: 13
    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("form", {
      onSubmit: handleSubmit(submit),
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("div", {
        className: (_LeaveComment_module_scss__WEBPACK_IMPORTED_MODULE_9___default().textarea_container),
        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("textarea", _objectSpread(_objectSpread({}, register('comment')), {}, {
          id: "comment",
          cols: "30",
          rows: "7",
          placeholder: translate('placeHolder')
        }), void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 68,
          columnNumber: 21
        }, this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 67,
        columnNumber: 17
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("div", {
        className: (_LeaveComment_module_scss__WEBPACK_IMPORTED_MODULE_9___default().button_container),
        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("button", {
          children: translate('send')
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 77,
          columnNumber: 21
        }, this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 76,
        columnNumber: 17
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 66,
      columnNumber: 13
    }, this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 42,
    columnNumber: 9
  }, this);
}

_s(LeaveComment, "7N9KCdeX531cc9PEODSjSc16024=", false, function () {
  return [next_translate_useTranslation__WEBPACK_IMPORTED_MODULE_2__.default, react_hook_form__WEBPACK_IMPORTED_MODULE_3__.useForm];
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9QYWdlcy9jb21tb24vVGVzdGltb25pYWxzL0xlYXZlQ29tbWVudC9MZWF2ZUNvbW1lbnQuanN4Il0sIm5hbWVzIjpbIkxlYXZlQ29tbWVudCIsInN0YXJzIiwidXNlU3RhdGUiLCJzaW11bGF0b3IiLCJzZXRTaW11bGF0b3IiLCJ1c2VUcmFuc2xhdGlvbiIsInQiLCJ0cmFuc2xhdGlvblBhdGgiLCJ0cmFuc2xhdGUiLCJrZXkiLCJzY2hlbWEiLCJ5dXAiLCJzaGFwZSIsImNvbW1lbnQiLCJ1c2VGb3JtIiwibW9kZSIsInJlc29sdmVyIiwieXVwUmVzb2x2ZXIiLCJyZWdpc3RlciIsImhhbmRsZVN1Ym1pdCIsImVycm9ycyIsImZvcm1TdGF0ZSIsInN1Ym1pdCIsImRhdGEiLCJjb25zb2xlIiwibG9nIiwicmF0ZSIsInN0eWxlcyIsIm1hcCIsImVsIiwiZmlsbGVkU3RhciIsIk1hdGgiLCJyYW5kb20iLCJ1bmZpbGxlZFN0YXIiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0NBRUE7O0NBRUE7O0FBQ0E7QUFDQTtBQUlPLFNBQVNBLFlBQVQsR0FBd0I7QUFBQTs7QUFBQTs7QUFHdkI7QUFDQSxNQUFBQyxLQUFLLEdBQUcsQ0FBQyxDQUFELEVBQUksQ0FBSixFQUFPLENBQVAsRUFBVSxDQUFWLEVBQWEsQ0FBYixDQUFSO0FBQUEsa0JBQzRCQywrQ0FBUSxDQUFDLENBQUQsQ0FEcEM7QUFBQSxNQUNDQyxTQUREO0FBQUEsTUFDWUMsWUFEWjtBQUFBLHdCQUdRQyxzRUFBYyxDQUFDLFFBQUQsQ0FIdEI7QUFBQSxNQUdFQyxDQUhGLG1CQUdFQSxDQUhGO0FBQUEsTUFJQUMsZUFKQSxHQUlrQixVQUpsQjtBQUFBLE1BS0FDLFNBTEEsR0FLWSxTQUFaQSxTQUFZLENBQUFDLEdBQUc7QUFBQSxXQUFJSCxDQUFDLFdBQUlDLGVBQUosU0FBc0JFLEdBQXRCLEVBQUw7QUFBQSxHQUxmO0FBQUEsTUFPQUMsTUFQQSxHQU9TQyx1Q0FBQSxHQUFhQyxLQUFiLENBQW1CO0FBQ3hCQyxXQUFPLEVBQUVGLHVDQUFBO0FBRGUsR0FBbkIsQ0FQVDtBQUFBLGlCQVlvREcsd0RBQU8sQ0FBQztBQUN4REMsUUFBSSxFQUFFLFVBRGtEO0FBRXhEQyxZQUFRLEVBQUVDLG9FQUFXLENBQUNQLE1BQUQ7QUFGbUMsR0FBRCxDQVozRDtBQUFBLE1BWUVRLFFBWkYsWUFZRUEsUUFaRjtBQUFBLE1BWVlDLFlBWlosWUFZWUEsWUFaWjtBQUFBLE1BWXVDQyxNQVp2QyxZQVkwQkMsU0FaMUIsQ0FZdUNELE1BWnZDOztBQWlCSixNQUFNRSxNQUFNLEdBQUcsU0FBVEEsTUFBUyxDQUFDQyxJQUFELEVBQVU7QUFDdkJDLFdBQU8sQ0FBQ0MsR0FBUixDQUFZRixJQUFaLEVBQWtCO0FBQUVHLFVBQUksRUFBRXZCO0FBQVIsS0FBbEI7QUFDRCxHQUZEOztBQUtBLHNCQUNJO0FBQUssYUFBUyxFQUFFd0IsNEVBQWhCO0FBQUEsNEJBQ0k7QUFBSyxlQUFTLEVBQUVBLGtGQUFoQjtBQUFBLDZCQUNJO0FBQUssaUJBQVMsRUFBRUEsZ0ZBQWhCO0FBQUEsK0JBQ0k7QUFBSyxtQkFBUyxFQUFFQSw2RUFBaEI7QUFBQSxvQkFFUTFCLEtBQUssQ0FBQzJCLEdBQU4sQ0FBVSxVQUFBQyxFQUFFO0FBQUEsbUJBQ1IxQixTQUFTLEdBQUcwQixFQUFaLGdCQUNLO0FBRUcsaUJBQUcsRUFBRUMscUZBRlI7QUFHRyxpQkFBRyxFQUFDLEVBSFA7QUFJRyxxQkFBTyxFQUFFO0FBQUEsdUJBQU0xQixZQUFZLENBQUN5QixFQUFELENBQWxCO0FBQUE7QUFKWixlQUNRLENBQUNBLEVBQUUsR0FBRyxDQUFOLElBQVdFLElBQUksQ0FBQ0MsTUFBTCxFQURuQjtBQUFBO0FBQUE7QUFBQTtBQUFBLHFCQURMLGdCQVFLO0FBRUcsaUJBQUcsRUFBRUMsdUZBRlI7QUFHRyxpQkFBRyxFQUFDLEVBSFA7QUFJRyxxQkFBTyxFQUFFO0FBQUEsdUJBQU03QixZQUFZLENBQUN5QixFQUFFLEdBQUcsQ0FBTixDQUFsQjtBQUFBO0FBSlosZUFDUSxDQUFDQSxFQUFFLEdBQUcsQ0FBTixJQUFXRSxJQUFJLENBQUNDLE1BQUwsRUFEbkI7QUFBQTtBQUFBO0FBQUE7QUFBQSxxQkFURztBQUFBLFdBQVo7QUFGUjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREo7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURKO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFESixlQXdCSTtBQUFNLGNBQVEsRUFBRWIsWUFBWSxDQUFDRyxNQUFELENBQTVCO0FBQUEsOEJBQ0k7QUFBSyxpQkFBUyxFQUFFSyxxRkFBaEI7QUFBQSwrQkFDSSwwR0FDUVQsUUFBUSxDQUFDLFNBQUQsQ0FEaEI7QUFFSSxZQUFFLEVBQUMsU0FGUDtBQUdJLGNBQUksRUFBQyxJQUhUO0FBSUksY0FBSSxFQUFDLEdBSlQ7QUFLSSxxQkFBVyxFQUFFVixTQUFTLENBQUMsYUFBRDtBQUwxQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREo7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQURKLGVBVUk7QUFBSyxpQkFBUyxFQUFFbUIsbUZBQWhCO0FBQUEsK0JBQ0k7QUFBQSxvQkFFUW5CLFNBQVMsQ0FBQyxNQUFEO0FBRmpCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFESjtBQUFBO0FBQUE7QUFBQTtBQUFBLGNBVko7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBeEJKO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxVQURKO0FBNkNIOztHQXZFZVIsWTtVQU9BSyxrRSxFQVM0Q1Msb0Q7OztLQWhCNUNkLFkiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvaW5kZXguYjVjMzA2YzQ5NGQzMGZjODMyYzkuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8vIGhvb2tzIGFuZCBoZWxwZXJzXHJcbmltcG9ydCB1c2VUcmFuc2xhdGlvbiBmcm9tICduZXh0LXRyYW5zbGF0ZS91c2VUcmFuc2xhdGlvbidcclxuaW1wb3J0IHsgdXNlRm9ybSB9IGZyb20gJ3JlYWN0LWhvb2stZm9ybSdcclxuaW1wb3J0IHsgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCdcclxuaW1wb3J0ICogYXMgeXVwIGZyb20gJ3l1cCdcclxuaW1wb3J0IHsgeXVwUmVzb2x2ZXIgfSBmcm9tICdAaG9va2Zvcm0vcmVzb2x2ZXJzL3l1cCdcclxuLy8gc3R5bGVzXHJcbmltcG9ydCBzdHlsZXMgZnJvbSAnLi9MZWF2ZUNvbW1lbnQubW9kdWxlLnNjc3MnXHJcbi8vIGljb25zXHJcbmltcG9ydCBmaWxsZWRTdGFyIGZyb20gJy9wdWJsaWMvaW1hZ2VzL21haW4vZmVlZGJhY2tzL2ZpbGxlZFN0YXIucG5nJ1xyXG5pbXBvcnQgdW5maWxsZWRTdGFyIGZyb20gJy9wdWJsaWMvaW1hZ2VzL21haW4vZmVlZGJhY2tzL3VuZmlsbGVkU3Rhci5wbmcnXHJcblxyXG5cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBMZWF2ZUNvbW1lbnQoKSB7XHJcblxyXG4gICAgY29uc3RcclxuICAgICAgICAvLyBzdGF0ZXMgY29uc3RzXHJcbiAgICAgICAgc3RhcnMgPSBbMCwgMSwgMiwgMywgNF0sXHJcbiAgICAgICAgW3NpbXVsYXRvciwgc2V0U2ltdWxhdG9yXSA9IHVzZVN0YXRlKDApLFxyXG4gICAgICAgIC8vIHRyYW5zbGF0aW9uIGNvbnNmaWdzXHJcbiAgICAgICAgeyB0IH0gPSB1c2VUcmFuc2xhdGlvbignY29tbW9uJyksXHJcbiAgICAgICAgdHJhbnNsYXRpb25QYXRoID0gJ2NvbW1vbnMuJyxcclxuICAgICAgICB0cmFuc2xhdGUgPSBrZXkgPT4gdChgJHt0cmFuc2xhdGlvblBhdGh9JHtrZXl9YCksXHJcbiAgICAgICAgLy8geXVwIGNvbmZpZ3NcclxuICAgICAgICBzY2hlbWEgPSB5dXAub2JqZWN0KCkuc2hhcGUoe1xyXG4gICAgICAgICAgICBjb21tZW50OiB5dXBcclxuICAgICAgICAgICAgICAgIC5zdHJpbmcoKVxyXG4gICAgICAgIH0pLFxyXG4gICAgICAgIC8vIGZvcm0gY29uZmlnc1xyXG4gICAgICAgIHsgcmVnaXN0ZXIsIGhhbmRsZVN1Ym1pdCwgZm9ybVN0YXRlOiB7IGVycm9ycyB9IH0gPSB1c2VGb3JtKHtcclxuICAgICAgICAgICAgbW9kZTogJ29uQ2hhbmdlJyxcclxuICAgICAgICAgICAgcmVzb2x2ZXI6IHl1cFJlc29sdmVyKHNjaGVtYSlcclxuICAgICAgICB9KTtcclxuICAgICAgICBcclxuICAgIGNvbnN0IHN1Ym1pdCA9IChkYXRhKSA9PiB7XHJcbiAgICAgIGNvbnNvbGUubG9nKGRhdGEsIHsgcmF0ZTogc2ltdWxhdG9yIH0pIFxyXG4gICAgfVxyXG5cclxuXHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuY29udGFpbmVyfT5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5zdGFyc19jb250YWluZXJ9PlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5zdGFyc19jb250ZW50fT5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLnN0YXJzX2FyZWF9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdGFycy5tYXAoZWwgPT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzaW11bGF0b3IgPiBlbCA/XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICg8aW1nXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBrZXk9eyhlbCArIDEpICogTWF0aC5yYW5kb20oKX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNyYz17ZmlsbGVkU3Rhci5zcmN9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhbHQ9XCJcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb25DbGljaz17KCkgPT4gc2V0U2ltdWxhdG9yKGVsKX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLz4pXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDpcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKDxpbWdcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGtleT17KGVsICsgMSkgKiBNYXRoLnJhbmRvbSgpfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3JjPXt1bmZpbGxlZFN0YXIuc3JjfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYWx0PVwiXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IHNldFNpbXVsYXRvcihlbCArIDEpfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvPikpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPGZvcm0gb25TdWJtaXQ9e2hhbmRsZVN1Ym1pdChzdWJtaXQpfT5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMudGV4dGFyZWFfY29udGFpbmVyfT5cclxuICAgICAgICAgICAgICAgICAgICA8dGV4dGFyZWFcclxuICAgICAgICAgICAgICAgICAgICAgICAgey4uLnJlZ2lzdGVyKCdjb21tZW50Jyl9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlkPSdjb21tZW50J1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBjb2xzPVwiMzBcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICByb3dzPVwiN1wiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHBsYWNlaG9sZGVyPXt0cmFuc2xhdGUoJ3BsYWNlSG9sZGVyJyl9XHJcbiAgICAgICAgICAgICAgICAgICAgPjwvdGV4dGFyZWE+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuYnV0dG9uX2NvbnRhaW5lcn0+XHJcbiAgICAgICAgICAgICAgICAgICAgPGJ1dHRvbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdHJhbnNsYXRlKCdzZW5kJylcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIDwvYnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDwvZm9ybT5cclxuICAgICAgICA8L2Rpdj5cclxuICAgIClcclxufVxyXG4iXSwic291cmNlUm9vdCI6IiJ9