self["webpackHotUpdate_N_E"]("pages/_app",{

/***/ "./components/Header/Bar/Bar.jsx":
/*!***************************************!*\
  !*** ./components/Header/Bar/Bar.jsx ***!
  \***************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Bar": function() { return /* binding */ Bar; }
/* harmony export */ });
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _Bar_module_scss__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./Bar.module.scss */ "./components/Header/Bar/Bar.module.scss");
/* harmony import */ var _Bar_module_scss__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_Bar_module_scss__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var next_translate_useTranslation__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next-translate/useTranslation */ "./node_modules/next-translate/lib/esm/useTranslation.js");
/* harmony import */ var _Login_Login__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Login/Login */ "./components/Header/Bar/Login/Login.jsx");
/* harmony import */ var _BarItems_BarItems__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./BarItems/BarItems */ "./components/Header/Bar/BarItems/BarItems.jsx");
/* harmony import */ var _Logo_Logo__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./Logo/Logo */ "./components/Header/Bar/Logo/Logo.jsx");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var _DropdownMenu_Dropdown__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./DropdownMenu/Dropdown */ "./components/Header/Bar/DropdownMenu/Dropdown.jsx");
/* module decorator */ module = __webpack_require__.hmd(module);


var _jsxFileName = "C:\\Users\\Admin\\Desktop\\projects\\foot-bet\\components\\Header\\Bar\\Bar.jsx",
    _s = $RefreshSig$();

// hooks and helpers
 // styles

 // translation 

 //components






function Bar(_ref) {
  _s();

  var bar_items = _ref.bar_items,
      bar_items_cont = _ref.bar_items_cont;

  var _useTranslation = (0,next_translate_useTranslation__WEBPACK_IMPORTED_MODULE_2__.default)('common'),
      t = _useTranslation.t,
      translationPath = 'header.',
      translate = function translate(key) {
    return t("".concat(translationPath).concat(key));
  },
      _useState = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false),
      showLoginModal = _useState[0],
      setShowLoginModal = _useState[1],
      user_info = (0,react_redux__WEBPACK_IMPORTED_MODULE_6__.useSelector)(function (state) {
    return state.user.user;
  });

  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
    className: "".concat((_Bar_module_scss__WEBPACK_IMPORTED_MODULE_8___default().bar_container), " ").concat(bar_items_cont),
    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_Logo_Logo__WEBPACK_IMPORTED_MODULE_5__.Logo, {}, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 27,
        columnNumber: 17
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_DropdownMenu_Dropdown__WEBPACK_IMPORTED_MODULE_7__.default, {}, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 28,
        columnNumber: 17
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 26,
      columnNumber: 13
    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_BarItems_BarItems__WEBPACK_IMPORTED_MODULE_4__.BarItems, {
      userLogged: user_info !== null ? true : false,
      registration: translate('register'),
      login: translate('login'),
      registration_path: "/registration",
      loginModalHandle: function loginModalHandle() {
        return setShowLoginModal(true);
      },
      bar_items: bar_items
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 30,
      columnNumber: 13
    }, this), showLoginModal && /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_Login_Login__WEBPACK_IMPORTED_MODULE_3__.Login, {
      onModalClose: function onModalClose() {
        return setShowLoginModal(false);
      }
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 38,
      columnNumber: 32
    }, this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 25,
    columnNumber: 9
  }, this);
}

_s(Bar, "a+6nG+GRBQt7AXbF+pJT0GFLwqY=", false, function () {
  return [next_translate_useTranslation__WEBPACK_IMPORTED_MODULE_2__.default, react_redux__WEBPACK_IMPORTED_MODULE_6__.useSelector];
});

_c = Bar;

var _c;

$RefreshReg$(_c, "Bar");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9IZWFkZXIvQmFyL0Jhci5qc3giXSwibmFtZXMiOlsiQmFyIiwiYmFyX2l0ZW1zIiwiYmFyX2l0ZW1zX2NvbnQiLCJ1c2VUcmFuc2xhdGlvbiIsInQiLCJ0cmFuc2xhdGlvblBhdGgiLCJ0cmFuc2xhdGUiLCJrZXkiLCJ1c2VTdGF0ZSIsInNob3dMb2dpbk1vZGFsIiwic2V0U2hvd0xvZ2luTW9kYWwiLCJ1c2VyX2luZm8iLCJ1c2VTZWxlY3RvciIsInN0YXRlIiwidXNlciIsInN0eWxlcyJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0NBRUE7O0NBRUE7O0NBRUE7O0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVPLFNBQVNBLEdBQVQsT0FBNEM7QUFBQTs7QUFBQSxNQUE3QkMsU0FBNkIsUUFBN0JBLFNBQTZCO0FBQUEsTUFBbEJDLGNBQWtCLFFBQWxCQSxjQUFrQjs7QUFBQSx3QkFHbkNDLHNFQUFjLENBQUMsUUFBRCxDQUhxQjtBQUFBLE1BR3pDQyxDQUh5QyxtQkFHekNBLENBSHlDO0FBQUEsTUFJM0NDLGVBSjJDLEdBSXpCLFNBSnlCO0FBQUEsTUFLM0NDLFNBTDJDLEdBSy9CLFNBQVpBLFNBQVksQ0FBQ0MsR0FBRDtBQUFBLFdBQVNILENBQUMsV0FBSUMsZUFBSixTQUFzQkUsR0FBdEIsRUFBVjtBQUFBLEdBTCtCO0FBQUEsa0JBT0xDLCtDQUFRLENBQUMsS0FBRCxDQVBIO0FBQUEsTUFPMUNDLGNBUDBDO0FBQUEsTUFPMUJDLGlCQVAwQjtBQUFBLE1BUTNDQyxTQVIyQyxHQVEvQkMsd0RBQVcsQ0FBQyxVQUFDQyxLQUFEO0FBQUEsV0FBV0EsS0FBSyxDQUFDQyxJQUFOLENBQVdBLElBQXRCO0FBQUEsR0FBRCxDQVJvQjs7QUFVL0Msc0JBQ0k7QUFBSyxhQUFTLFlBQUtDLHVFQUFMLGNBQTZCYixjQUE3QixDQUFkO0FBQUEsNEJBQ0k7QUFBQSw4QkFDSSw4REFBQyw0Q0FBRDtBQUFBO0FBQUE7QUFBQTtBQUFBLGNBREosZUFFSSw4REFBQywyREFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBLGNBRko7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBREosZUFLSSw4REFBQyx3REFBRDtBQUNJLGdCQUFVLEVBQUVTLFNBQVMsS0FBSyxJQUFkLEdBQXFCLElBQXJCLEdBQTRCLEtBRDVDO0FBRUksa0JBQVksRUFBRUwsU0FBUyxDQUFDLFVBQUQsQ0FGM0I7QUFHSSxXQUFLLEVBQUVBLFNBQVMsQ0FBQyxPQUFELENBSHBCO0FBSUksdUJBQWlCLEVBQUMsZUFKdEI7QUFLSSxzQkFBZ0IsRUFBRTtBQUFBLGVBQU1JLGlCQUFpQixDQUFDLElBQUQsQ0FBdkI7QUFBQSxPQUx0QjtBQU1JLGVBQVMsRUFBRVQ7QUFOZjtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBTEosRUFhS1EsY0FBYyxpQkFBSSw4REFBQywrQ0FBRDtBQUFPLGtCQUFZLEVBQUU7QUFBQSxlQUFNQyxpQkFBaUIsQ0FBQyxLQUFELENBQXZCO0FBQUE7QUFBckI7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQWJ2QjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsVUFESjtBQWlCSDs7R0EzQmVWLEc7VUFHQUcsa0UsRUFLSVMsb0Q7OztLQVJKWixHIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL19hcHAuMjVhZGRkZWZmZGJmNGY3MjYzODYuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8vIGhvb2tzIGFuZCBoZWxwZXJzXHJcbmltcG9ydCB7IHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnXHJcbi8vIHN0eWxlc1xyXG5pbXBvcnQgc3R5bGVzIGZyb20gJy4vQmFyLm1vZHVsZS5zY3NzJ1xyXG4vLyB0cmFuc2xhdGlvbiBcclxuaW1wb3J0IHVzZVRyYW5zbGF0aW9uIGZyb20gJ25leHQtdHJhbnNsYXRlL3VzZVRyYW5zbGF0aW9uJ1xyXG4vL2NvbXBvbmVudHNcclxuaW1wb3J0IHsgTG9naW4gfSBmcm9tICcuL0xvZ2luL0xvZ2luJ1xyXG5pbXBvcnQgeyBCYXJJdGVtcyB9IGZyb20gJy4vQmFySXRlbXMvQmFySXRlbXMnXHJcbmltcG9ydCB7IExvZ28gfSBmcm9tICcuL0xvZ28vTG9nbydcclxuaW1wb3J0IHsgdXNlU2VsZWN0b3IgfSBmcm9tICdyZWFjdC1yZWR1eCdcclxuaW1wb3J0IERyb3Bkb3duIGZyb20gJy4vRHJvcGRvd25NZW51L0Ryb3Bkb3duJ1xyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIEJhcih7IGJhcl9pdGVtcywgYmFyX2l0ZW1zX2NvbnQgfSkge1xyXG5cclxuICAgIGNvbnN0XHJcbiAgICAgICAgeyB0IH0gPSB1c2VUcmFuc2xhdGlvbignY29tbW9uJyksXHJcbiAgICAgICAgdHJhbnNsYXRpb25QYXRoID0gJ2hlYWRlci4nLFxyXG4gICAgICAgIHRyYW5zbGF0ZSA9IChrZXkpID0+IHQoYCR7dHJhbnNsYXRpb25QYXRofSR7a2V5fWApLFxyXG4gICAgICAgIC8vIGxvZ2luIG1vZGFsIGNvbmZpZ3NcclxuICAgICAgICBbc2hvd0xvZ2luTW9kYWwsIHNldFNob3dMb2dpbk1vZGFsXSA9IHVzZVN0YXRlKGZhbHNlKSxcclxuICAgICAgICB1c2VyX2luZm8gPSB1c2VTZWxlY3Rvcigoc3RhdGUpID0+IHN0YXRlLnVzZXIudXNlcilcclxuXHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPXtgJHtzdHlsZXMuYmFyX2NvbnRhaW5lcn0gJHtiYXJfaXRlbXNfY29udH1gfT5cclxuICAgICAgICAgICAgPGRpdj5cclxuICAgICAgICAgICAgICAgIDxMb2dvIC8+XHJcbiAgICAgICAgICAgICAgICA8RHJvcGRvd24gLz5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDxCYXJJdGVtc1xyXG4gICAgICAgICAgICAgICAgdXNlckxvZ2dlZD17dXNlcl9pbmZvICE9PSBudWxsID8gdHJ1ZSA6IGZhbHNlfVxyXG4gICAgICAgICAgICAgICAgcmVnaXN0cmF0aW9uPXt0cmFuc2xhdGUoJ3JlZ2lzdGVyJyl9XHJcbiAgICAgICAgICAgICAgICBsb2dpbj17dHJhbnNsYXRlKCdsb2dpbicpfVxyXG4gICAgICAgICAgICAgICAgcmVnaXN0cmF0aW9uX3BhdGg9Jy9yZWdpc3RyYXRpb24nXHJcbiAgICAgICAgICAgICAgICBsb2dpbk1vZGFsSGFuZGxlPXsoKSA9PiBzZXRTaG93TG9naW5Nb2RhbCh0cnVlKX1cclxuICAgICAgICAgICAgICAgIGJhcl9pdGVtcz17YmFyX2l0ZW1zfVxyXG4gICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICB7c2hvd0xvZ2luTW9kYWwgJiYgPExvZ2luIG9uTW9kYWxDbG9zZT17KCkgPT4gc2V0U2hvd0xvZ2luTW9kYWwoZmFsc2UpfSAvPn1cclxuICAgICAgICA8L2Rpdj5cclxuICAgIClcclxufVxyXG4iXSwic291cmNlUm9vdCI6IiJ9