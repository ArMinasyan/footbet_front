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
        children: [imgInput ? /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("img", {
          className: (_FileInput_module_scss__WEBPACK_IMPORTED_MODULE_4___default()["image-preview"]),
          src: URL.createObjectURL(imgInput),
          alt: ""
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9SZWdpc3RyYXRpb24vRm9ybS9GaWxlSW5wdXQvRmlsZUlucHV0LmpzeCJdLCJuYW1lcyI6WyJGaWxlSW5wdXQiLCJpZCIsInR5cGUiLCJvdGhlciIsInVzZVN0YXRlIiwiaW1nSW5wdXQiLCJzZXRJbWdJbnB1dCIsInVzZUVmZmVjdCIsImNvbnNvbGUiLCJsb2ciLCJzdHlsZXMiLCJVUkwiLCJjcmVhdGVPYmplY3RVUkwiLCJwbHVzSWNvbiIsInNyYyIsImRpc3BsYXkiLCJlIiwidGFyZ2V0IiwiZmlsZXMiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtDQUVBOztDQUVBOztBQUNBO0FBR08sU0FBU0EsU0FBVCxPQUF3QztBQUFBOztBQUFBLE1BQW5CQyxFQUFtQixRQUFuQkEsRUFBbUI7QUFBQSxNQUFmQyxJQUFlLFFBQWZBLElBQWU7QUFBQSxNQUFUQyxLQUFTLFFBQVRBLEtBQVM7O0FBQUEsa0JBSWJDLCtDQUFRLENBQUMsRUFBRCxDQUpLO0FBQUEsTUFJdENDLFFBSnNDO0FBQUEsTUFJNUJDLFdBSjRCOztBQUszQ0Msa0RBQVMsQ0FBQyxZQUFJO0FBQ1ZDLFdBQU8sQ0FBQ0MsR0FBUixDQUFhSixRQUFiO0FBQ0gsR0FGUSxFQUVOLENBQUNBLFFBQUQsQ0FGTSxDQUFUO0FBSUEsc0JBQ0k7QUFBSyxhQUFTLEVBQUVLLG9GQUFoQjtBQUFBLDJCQUNJO0FBQU8sYUFBTyxFQUFFVCxFQUFoQjtBQUFBLDZCQUNJO0FBQUssaUJBQVMsRUFBRVMsa0ZBQWhCO0FBQUEsbUJBQ0tMLFFBQVEsZ0JBQ0w7QUFBSyxtQkFBUyxFQUFFSyxnRkFBaEI7QUFBeUMsYUFBRyxFQUFFQyxHQUFHLENBQUNDLGVBQUosQ0FBb0JQLFFBQXBCLENBQTlDO0FBQTZFLGFBQUcsRUFBQztBQUFqRjtBQUFBO0FBQUE7QUFBQTtBQUFBLGdCQURLLGdCQUdMO0FBQUssYUFBRyxFQUFFUSx5RUFBWUM7QUFBdEI7QUFBQTtBQUFBO0FBQUE7QUFBQSxnQkFKUixlQU1JO0FBQ0ksY0FBSSxFQUFFWixJQURWO0FBRUksWUFBRSxFQUFFRCxFQUZSO0FBR0ksZUFBSyxFQUFFO0FBQUVjLG1CQUFPLEVBQUU7QUFBWCxXQUhYO0FBSUksaUJBQU8sRUFBRSxpQkFBQUMsQ0FBQztBQUFBLG1CQUFJVixXQUFXLENBQUNVLENBQUMsQ0FBQ0MsTUFBRixDQUFTQyxLQUFULENBQWUsQ0FBZixDQUFELENBQWY7QUFBQTtBQUpkLFdBS1FmLEtBTFI7QUFBQTtBQUFBO0FBQUE7QUFBQSxnQkFOSjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFESjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREo7QUFBQTtBQUFBO0FBQUE7QUFBQSxVQURKO0FBb0JIOztHQTdCZUgsUzs7S0FBQUEsUyIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9yZWdpc3RyYXRpb24uNGJkMWY4OGY5YzYxZmIxZjhiMjUuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8vIGhvb2tzXHJcbmltcG9ydCB7IHVzZUVmZmVjdCB9IGZyb20gJ3JlYWN0J1xyXG5pbXBvcnQgeyB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0J1xyXG4vLyBzdHlsZXNcclxuaW1wb3J0IHN0eWxlcyBmcm9tICcuL0ZpbGVJbnB1dC5tb2R1bGUuc2NzcydcclxuLy8gaWNvbnMgXHJcbmltcG9ydCBwbHVzSWNvbiBmcm9tICcvcHVibGljL2ltYWdlcy9yZWdpc3Rlci9wbHVzLnN2ZydcclxuXHJcblxyXG5leHBvcnQgZnVuY3Rpb24gRmlsZUlucHV0KHsgaWQsIHR5cGUsIG90aGVyIH0pIHtcclxuXHJcbiAgICBjb25zdFxyXG4gICAgICAgIC8vIGZvciBpbWcgaW5wdXRcclxuICAgICAgICBbaW1nSW5wdXQsIHNldEltZ0lucHV0XSA9IHVzZVN0YXRlKCcnKVxyXG4gICAgdXNlRWZmZWN0KCgpPT57XHJcbiAgICAgICAgY29uc29sZS5sb2coIGltZ0lucHV0ICk7XHJcbiAgICB9LCBbaW1nSW5wdXRdKVxyXG5cclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy51cGxvYWRJbWFnZUNvbnRlaW5lcn0+XHJcbiAgICAgICAgICAgIDxsYWJlbCBodG1sRm9yPXtpZH0+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLnVwbG9hZEltYWdlQ29udGVudH0+XHJcbiAgICAgICAgICAgICAgICAgICAge2ltZ0lucHV0ID9cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGltZyBjbGFzc05hbWU9e3N0eWxlc1tcImltYWdlLXByZXZpZXdcIl19IHNyYz17VVJMLmNyZWF0ZU9iamVjdFVSTChpbWdJbnB1dCl9IGFsdD1cIlwiLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgOlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8aW1nIHNyYz17cGx1c0ljb24uc3JjfSAvPlxyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICA8aW5wdXRcclxuICAgICAgICAgICAgICAgICAgICAgICAgdHlwZT17dHlwZX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgaWQ9e2lkfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBzdHlsZT17eyBkaXNwbGF5OiAnbm9uZScgfX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgb25JbnB1dD17ZSA9PiBzZXRJbWdJbnB1dChlLnRhcmdldC5maWxlc1swXSl9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHsuLi5vdGhlcn1cclxuICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDwvbGFiZWw+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICApXHJcbn1cclxuIl0sInNvdXJjZVJvb3QiOiIifQ==