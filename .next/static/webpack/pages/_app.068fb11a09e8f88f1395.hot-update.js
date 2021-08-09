self["webpackHotUpdate_N_E"]("pages/_app",{

/***/ "./components/Header/Bar/BarItems/Logged/LoggedWallper/LoggedWallper.jsx":
/*!*******************************************************************************!*\
  !*** ./components/Header/Bar/BarItems/Logged/LoggedWallper/LoggedWallper.jsx ***!
  \*******************************************************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "LoggedWallper": function() { return /* binding */ LoggedWallper; }
/* harmony export */ });
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var _redux_features_userSlice__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../../../redux/features/userSlice */ "./redux/features/userSlice.js");
/* harmony import */ var _LoggedWallper_module_scss__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./LoggedWallper.module.scss */ "./components/Header/Bar/BarItems/Logged/LoggedWallper/LoggedWallper.module.scss");
/* harmony import */ var _LoggedWallper_module_scss__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_LoggedWallper_module_scss__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _public_images_common_triangle_png__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../../../../public/images/common/triangle.png */ "./public/images/common/triangle.png");
/* harmony import */ var _public_images_common_userDefault_png__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../../../../../public/images/common/userDefault.png */ "./public/images/common/userDefault.png");
/* module decorator */ module = __webpack_require__.hmd(module);


var _jsxFileName = "C:\\Users\\user\\Desktop\\projects\\ait-projects\\foot-bet\\components\\Header\\Bar\\BarItems\\Logged\\LoggedWallper\\LoggedWallper.jsx",
    _s = $RefreshSig$();

// components



 // styles

 // icons



function LoggedWallper(_ref) {
  _s();

  var img = _ref.img,
      fullName = _ref.fullName,
      click = _ref.click;
  var data = (0,react_redux__WEBPACK_IMPORTED_MODULE_3__.useSelector)(_redux_features_userSlice__WEBPACK_IMPORTED_MODULE_4__.selectUser);

  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(data.photo),
      photo = _useState[0],
      setPhoto = _useState[1];

  var _useState2 = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(data.username),
      fullname = _useState2[0],
      setFullname = _useState2[1];

  (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(function () {
    setPhoto(data.photo);
    setFullname(data.username);
  }, [data]);
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
    className: (_LoggedWallper_module_scss__WEBPACK_IMPORTED_MODULE_7___default().container),
    children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
      className: (_LoggedWallper_module_scss__WEBPACK_IMPORTED_MODULE_7___default().content),
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
        className: (_LoggedWallper_module_scss__WEBPACK_IMPORTED_MODULE_7___default().user_photo),
        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_1___default()), {
          href: "/personal",
          children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("img", {
            src: photo || _public_images_common_userDefault_png__WEBPACK_IMPORTED_MODULE_6__.default.src,
            alt: "".concat(username, " icon")
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 31,
            columnNumber: 25
          }, this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 30,
          columnNumber: 21
        }, this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 29,
        columnNumber: 17
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
        className: (_LoggedWallper_module_scss__WEBPACK_IMPORTED_MODULE_7___default().user_fullName),
        onClick: click,
        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("span", {
          className: (_LoggedWallper_module_scss__WEBPACK_IMPORTED_MODULE_7___default().fullname),
          children: username
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 40,
          columnNumber: 21
        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("span", {
          style: {
            color: 'white'
          },
          children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("img", {
            src: _public_images_common_triangle_png__WEBPACK_IMPORTED_MODULE_5__.default.src,
            alt: "triangle"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 46,
            columnNumber: 25
          }, this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 43,
          columnNumber: 21
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 36,
        columnNumber: 17
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 28,
      columnNumber: 13
    }, this)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 27,
    columnNumber: 9
  }, this);
}

_s(LoggedWallper, "JGgtWK2Yy1syIdpfRrgPumKabPc=", false, function () {
  return [react_redux__WEBPACK_IMPORTED_MODULE_3__.useSelector];
});

_c = LoggedWallper;

var _c;

$RefreshReg$(_c, "LoggedWallper");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9IZWFkZXIvQmFyL0Jhckl0ZW1zL0xvZ2dlZC9Mb2dnZWRXYWxscGVyL0xvZ2dlZFdhbGxwZXIuanN4Il0sIm5hbWVzIjpbIkxvZ2dlZFdhbGxwZXIiLCJpbWciLCJmdWxsTmFtZSIsImNsaWNrIiwiZGF0YSIsInVzZVNlbGVjdG9yIiwic2VsZWN0VXNlciIsInVzZVN0YXRlIiwicGhvdG8iLCJzZXRQaG90byIsInVzZXJuYW1lIiwiZnVsbG5hbWUiLCJzZXRGdWxsbmFtZSIsInVzZUVmZmVjdCIsInN0eWxlcyIsInVzZXJEZWZhdWx0SWNvbiIsImNvbG9yIiwidHJpYW5nbGUiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtDQUVBOztDQUVBOztBQUNBO0FBQ0E7QUFHTyxTQUFTQSxhQUFULE9BSUo7QUFBQTs7QUFBQSxNQUhDQyxHQUdELFFBSENBLEdBR0Q7QUFBQSxNQUZDQyxRQUVELFFBRkNBLFFBRUQ7QUFBQSxNQURDQyxLQUNELFFBRENBLEtBQ0Q7QUFDQyxNQUFNQyxJQUFJLEdBQUdDLHdEQUFXLENBQUNDLGlFQUFELENBQXhCOztBQURELGtCQUU2QkMsK0NBQVEsQ0FBQ0gsSUFBSSxDQUFDSSxLQUFOLENBRnJDO0FBQUEsTUFFU0EsS0FGVDtBQUFBLE1BRWdCQyxRQUZoQjs7QUFBQSxtQkFHbUNGLCtDQUFRLENBQUNILElBQUksQ0FBQ00sUUFBTixDQUgzQztBQUFBLE1BR1NDLFFBSFQ7QUFBQSxNQUdtQkMsV0FIbkI7O0FBSUNDLGtEQUFTLENBQUMsWUFBSTtBQUNWSixZQUFRLENBQUVMLElBQUksQ0FBQ0ksS0FBUCxDQUFSO0FBQ0FJLGVBQVcsQ0FBRVIsSUFBSSxDQUFDTSxRQUFQLENBQVg7QUFDSCxHQUhRLEVBR1AsQ0FBQ04sSUFBRCxDQUhPLENBQVQ7QUFLQSxzQkFDSTtBQUFLLGFBQVMsRUFBRVUsNkVBQWhCO0FBQUEsMkJBQ0k7QUFBSyxlQUFTLEVBQUVBLDJFQUFoQjtBQUFBLDhCQUNJO0FBQUssaUJBQVMsRUFBRUEsOEVBQWhCO0FBQUEsK0JBQ0ksOERBQUMsa0RBQUQ7QUFBTSxjQUFJLEVBQUMsV0FBWDtBQUFBLGlDQUNJO0FBQ0ksZUFBRyxFQUFFTixLQUFLLElBQUlPLDhFQURsQjtBQUVJLGVBQUcsWUFBS0wsUUFBTDtBQUZQO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFESjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREo7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQURKLGVBUUk7QUFDSSxpQkFBUyxFQUFFSSxpRkFEZjtBQUVJLGVBQU8sRUFBRVgsS0FGYjtBQUFBLGdDQUlJO0FBQU0sbUJBQVMsRUFBRVcsNEVBQWpCO0FBQUEsb0JBQ0tKO0FBREw7QUFBQTtBQUFBO0FBQUE7QUFBQSxnQkFKSixlQU9JO0FBQU0sZUFBSyxFQUFFO0FBQ1RNLGlCQUFLLEVBQUU7QUFERSxXQUFiO0FBQUEsaUNBR0k7QUFDSSxlQUFHLEVBQUVDLDJFQURUO0FBRUksZUFBRyxFQUFDO0FBRlI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUhKO0FBQUE7QUFBQTtBQUFBO0FBQUEsZ0JBUEo7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGNBUko7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREo7QUFBQTtBQUFBO0FBQUE7QUFBQSxVQURKO0FBNEJIOztHQXpDZWpCLGE7VUFLQ0ssb0Q7OztLQUxETCxhIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL19hcHAuMDY4ZmIxMWEwOWU4Zjg4ZjEzOTUuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8vIGNvbXBvbmVudHNcclxuaW1wb3J0IExpbmsgZnJvbSAnbmV4dC9saW5rJ1xyXG5pbXBvcnQgeyB1c2VFZmZlY3QsdXNlU3RhdGUgfSBmcm9tICdyZWFjdCdcclxuaW1wb3J0IHsgdXNlU2VsZWN0b3IgfSBmcm9tICdyZWFjdC1yZWR1eCdcclxuaW1wb3J0IHsgc2VsZWN0VXNlciB9IGZyb20gJy4uLy4uLy4uLy4uLy4uLy4uL3JlZHV4L2ZlYXR1cmVzL3VzZXJTbGljZSdcclxuLy8gc3R5bGVzXHJcbmltcG9ydCBzdHlsZXMgZnJvbSAnLi9Mb2dnZWRXYWxscGVyLm1vZHVsZS5zY3NzJ1xyXG4vLyBpY29uc1xyXG5pbXBvcnQgdHJpYW5nbGUgZnJvbSAnL3B1YmxpYy9pbWFnZXMvY29tbW9uL3RyaWFuZ2xlLnBuZydcclxuaW1wb3J0IHVzZXJEZWZhdWx0SWNvbiBmcm9tICcvcHVibGljL2ltYWdlcy9jb21tb24vdXNlckRlZmF1bHQucG5nJ1xyXG5cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBMb2dnZWRXYWxscGVyKHtcclxuICAgIGltZyxcclxuICAgIGZ1bGxOYW1lLFxyXG4gICAgY2xpY2tcclxufSkge1xyXG4gICAgY29uc3QgZGF0YSA9IHVzZVNlbGVjdG9yKHNlbGVjdFVzZXIpO1xyXG4gICAgY29uc3QgWyBwaG90bywgc2V0UGhvdG8gXSA9IHVzZVN0YXRlKGRhdGEucGhvdG8pXHJcbiAgICBjb25zdCBbIGZ1bGxuYW1lLCBzZXRGdWxsbmFtZSBdID0gdXNlU3RhdGUoZGF0YS51c2VybmFtZSlcclxuICAgIHVzZUVmZmVjdCgoKT0+e1xyXG4gICAgICAgIHNldFBob3RvKCBkYXRhLnBob3RvIClcclxuICAgICAgICBzZXRGdWxsbmFtZSggZGF0YS51c2VybmFtZSApXHJcbiAgICB9LFtkYXRhXSlcclxuXHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuY29udGFpbmVyfT5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5jb250ZW50fT5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMudXNlcl9waG90b30+XHJcbiAgICAgICAgICAgICAgICAgICAgPExpbmsgaHJlZj0nL3BlcnNvbmFsJz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGltZ1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc3JjPXtwaG90byB8fCB1c2VyRGVmYXVsdEljb24uc3JjfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYWx0PXtgJHt1c2VybmFtZX0gaWNvbmB9IC8+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9MaW5rPlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8ZGl2XHJcbiAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPXtzdHlsZXMudXNlcl9mdWxsTmFtZX1cclxuICAgICAgICAgICAgICAgICAgICBvbkNsaWNrPXtjbGlja31cclxuICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9e3N0eWxlcy5mdWxsbmFtZX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHt1c2VybmFtZX1cclxuICAgICAgICAgICAgICAgICAgICA8L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgICAgPHNwYW4gc3R5bGU9e3tcclxuICAgICAgICAgICAgICAgICAgICAgICAgY29sb3I6ICd3aGl0ZScsXHJcbiAgICAgICAgICAgICAgICAgICAgfX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxpbWdcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNyYz17dHJpYW5nbGUuc3JjfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYWx0PVwidHJpYW5nbGVcIiAvPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvc3Bhbj5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgIClcclxufVxyXG4iXSwic291cmNlUm9vdCI6IiJ9