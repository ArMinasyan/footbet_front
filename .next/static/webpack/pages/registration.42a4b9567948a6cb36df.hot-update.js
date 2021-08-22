self["webpackHotUpdate_N_E"]("pages/registration",{

/***/ "./components/Registration/Form/FileInput/FileInput.jsx":
/*!**************************************************************!*\
  !*** ./components/Registration/Form/FileInput/FileInput.jsx ***!
  \**************************************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "FileInput": function() { return /* binding */ FileInput; }
/* harmony export */ });
/* harmony import */ var C_Users_Admin_Desktop_projects_foot_bet_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/defineProperty */ "./node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _FileInput_module_scss__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./FileInput.module.scss */ "./components/Registration/Form/FileInput/FileInput.module.scss");
/* harmony import */ var _FileInput_module_scss__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_FileInput_module_scss__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _public_images_register_plus_svg__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../../../public/images/register/plus.svg */ "./public/images/register/plus.svg");
/* module decorator */ module = __webpack_require__.hmd(module);



var _jsxFileName = "C:\\Users\\Admin\\Desktop\\projects\\foot-bet\\components\\Registration\\Form\\FileInput\\FileInput.jsx",
    _s = $RefreshSig$();

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { (0,C_Users_Admin_Desktop_projects_foot_bet_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__.default)(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

// hooks

 // styles

 // icons 


function FileInput(_ref) {
  _s();

  var id = _ref.id,
      type = _ref.type,
      other = _ref.other;

  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(''),
      imgInput = _useState[0],
      setImgInput = _useState[1];

  (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(function () {
    console.log(imgInput);
  }, [imgInput]);
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("div", {
    className: (_FileInput_module_scss__WEBPACK_IMPORTED_MODULE_4___default().uploadImageConteiner),
    children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("label", {
      htmlFor: id,
      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("div", {
        className: (_FileInput_module_scss__WEBPACK_IMPORTED_MODULE_4___default().uploadImageContent),
        children: [imgInput ? /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("span", {
          children: imgInput.name
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 24,
          columnNumber: 25
        }, this) : /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("img", {
          src: _public_images_register_plus_svg__WEBPACK_IMPORTED_MODULE_3__.default.src
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 26,
          columnNumber: 25
        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("input", _objectSpread({
          type: type,
          id: id,
          style: {
            display: 'none'
          },
          onInput: function onInput(e) {
            return setImgInput(e.target.files[0]);
          }
        }, other), void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 28,
          columnNumber: 21
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 22,
        columnNumber: 17
      }, this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 21,
      columnNumber: 13
    }, this)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 20,
    columnNumber: 9
  }, this);
}

_s(FileInput, "dlPV5WwRt4Vjm7U+GZ0Xb+U12rg=");

_c = FileInput;

var _c;

$RefreshReg$(_c, "FileInput");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9SZWdpc3RyYXRpb24vRm9ybS9GaWxlSW5wdXQvRmlsZUlucHV0LmpzeCJdLCJuYW1lcyI6WyJGaWxlSW5wdXQiLCJpZCIsInR5cGUiLCJvdGhlciIsInVzZVN0YXRlIiwiaW1nSW5wdXQiLCJzZXRJbWdJbnB1dCIsInVzZUVmZmVjdCIsImNvbnNvbGUiLCJsb2ciLCJzdHlsZXMiLCJuYW1lIiwicGx1c0ljb24iLCJzcmMiLCJkaXNwbGF5IiwiZSIsInRhcmdldCIsImZpbGVzIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7Q0FFQTs7Q0FFQTs7QUFDQTtBQUdPLFNBQVNBLFNBQVQsT0FBd0M7QUFBQTs7QUFBQSxNQUFuQkMsRUFBbUIsUUFBbkJBLEVBQW1CO0FBQUEsTUFBZkMsSUFBZSxRQUFmQSxJQUFlO0FBQUEsTUFBVEMsS0FBUyxRQUFUQSxLQUFTOztBQUFBLGtCQUliQywrQ0FBUSxDQUFDLEVBQUQsQ0FKSztBQUFBLE1BSXRDQyxRQUpzQztBQUFBLE1BSTVCQyxXQUo0Qjs7QUFLM0NDLGtEQUFTLENBQUMsWUFBSTtBQUNWQyxXQUFPLENBQUNDLEdBQVIsQ0FBYUosUUFBYjtBQUNILEdBRlEsRUFFTixDQUFDQSxRQUFELENBRk0sQ0FBVDtBQUlBLHNCQUNJO0FBQUssYUFBUyxFQUFFSyxvRkFBaEI7QUFBQSwyQkFDSTtBQUFPLGFBQU8sRUFBRVQsRUFBaEI7QUFBQSw2QkFDSTtBQUFLLGlCQUFTLEVBQUVTLGtGQUFoQjtBQUFBLG1CQUNLTCxRQUFRLGdCQUNMO0FBQUEsb0JBQU9BLFFBQVEsQ0FBQ007QUFBaEI7QUFBQTtBQUFBO0FBQUE7QUFBQSxnQkFESyxnQkFHTDtBQUFLLGFBQUcsRUFBRUMseUVBQVlDO0FBQXRCO0FBQUE7QUFBQTtBQUFBO0FBQUEsZ0JBSlIsZUFNSTtBQUNJLGNBQUksRUFBRVgsSUFEVjtBQUVJLFlBQUUsRUFBRUQsRUFGUjtBQUdJLGVBQUssRUFBRTtBQUFFYSxtQkFBTyxFQUFFO0FBQVgsV0FIWDtBQUlJLGlCQUFPLEVBQUUsaUJBQUFDLENBQUM7QUFBQSxtQkFBSVQsV0FBVyxDQUFDUyxDQUFDLENBQUNDLE1BQUYsQ0FBU0MsS0FBVCxDQUFlLENBQWYsQ0FBRCxDQUFmO0FBQUE7QUFKZCxXQUtRZCxLQUxSO0FBQUE7QUFBQTtBQUFBO0FBQUEsZ0JBTko7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREo7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURKO0FBQUE7QUFBQTtBQUFBO0FBQUEsVUFESjtBQW9CSDs7R0E3QmVILFM7O0tBQUFBLFMiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvcmVnaXN0cmF0aW9uLjQyYTRiOTU2Nzk0OGE2Y2IzNmRmLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyIvLyBob29rc1xyXG5pbXBvcnQgeyB1c2VFZmZlY3QgfSBmcm9tICdyZWFjdCdcclxuaW1wb3J0IHsgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCdcclxuLy8gc3R5bGVzXHJcbmltcG9ydCBzdHlsZXMgZnJvbSAnLi9GaWxlSW5wdXQubW9kdWxlLnNjc3MnXHJcbi8vIGljb25zIFxyXG5pbXBvcnQgcGx1c0ljb24gZnJvbSAnL3B1YmxpYy9pbWFnZXMvcmVnaXN0ZXIvcGx1cy5zdmcnXHJcblxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIEZpbGVJbnB1dCh7IGlkLCB0eXBlLCBvdGhlciB9KSB7XHJcblxyXG4gICAgY29uc3RcclxuICAgICAgICAvLyBmb3IgaW1nIGlucHV0XHJcbiAgICAgICAgW2ltZ0lucHV0LCBzZXRJbWdJbnB1dF0gPSB1c2VTdGF0ZSgnJylcclxuICAgIHVzZUVmZmVjdCgoKT0+e1xyXG4gICAgICAgIGNvbnNvbGUubG9nKCBpbWdJbnB1dCApO1xyXG4gICAgfSwgW2ltZ0lucHV0XSlcclxuXHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMudXBsb2FkSW1hZ2VDb250ZWluZXJ9PlxyXG4gICAgICAgICAgICA8bGFiZWwgaHRtbEZvcj17aWR9PlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy51cGxvYWRJbWFnZUNvbnRlbnR9PlxyXG4gICAgICAgICAgICAgICAgICAgIHtpbWdJbnB1dCA/XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuPntpbWdJbnB1dC5uYW1lfTwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgOlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8aW1nIHNyYz17cGx1c0ljb24uc3JjfSAvPlxyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICA8aW5wdXRcclxuICAgICAgICAgICAgICAgICAgICAgICAgdHlwZT17dHlwZX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgaWQ9e2lkfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBzdHlsZT17eyBkaXNwbGF5OiAnbm9uZScgfX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgb25JbnB1dD17ZSA9PiBzZXRJbWdJbnB1dChlLnRhcmdldC5maWxlc1swXSl9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHsuLi5vdGhlcn1cclxuICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDwvbGFiZWw+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICApXHJcbn1cclxuIl0sInNvdXJjZVJvb3QiOiIifQ==