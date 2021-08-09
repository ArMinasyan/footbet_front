self["webpackHotUpdate_N_E"]("pages/_app",{

/***/ "./components/Header/Bar/BarItems/Logged/LoggedDrop/LoggedDrop.jsx":
/*!*************************************************************************!*\
  !*** ./components/Header/Bar/BarItems/Logged/LoggedDrop/LoggedDrop.jsx ***!
  \*************************************************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "LoggedDrop": function() { return /* binding */ LoggedDrop; }
/* harmony export */ });
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_dist_client_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/dist/client/router */ "./node_modules/next/dist/client/router.js");
/* harmony import */ var next_dist_client_router__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_dist_client_router__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var _public_images_common_userDefault_png__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../../../../public/images/common/userDefault.png */ "./public/images/common/userDefault.png");
/* harmony import */ var next_translate_useTranslation__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! next-translate/useTranslation */ "./node_modules/next-translate/lib/esm/useTranslation.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _LoggedDrop_module_scss__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./LoggedDrop.module.scss */ "./components/Header/Bar/BarItems/Logged/LoggedDrop/LoggedDrop.module.scss");
/* harmony import */ var _LoggedDrop_module_scss__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(_LoggedDrop_module_scss__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var _public_images_common_phone_png__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../../../../../public/images/common/phone.png */ "./public/images/common/phone.png");
/* harmony import */ var _redux_features_userSlice__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../../../../../redux/features/userSlice */ "./redux/features/userSlice.js");
/* module decorator */ module = __webpack_require__.hmd(module);


var _jsxFileName = "C:\\Users\\user\\Desktop\\projects\\ait-projects\\foot-bet\\components\\Header\\Bar\\BarItems\\Logged\\LoggedDrop\\LoggedDrop.jsx",
    _s = $RefreshSig$();

// hooks and helpers



 // translation 

 // componetns

 // styles 

 // icons



function LoggedDrop(_ref) {
  _s();

  var _user$photo;

  var onClose = _ref.onClose,
      user = _ref.user;
  (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(function () {
    document.addEventListener("mousedown", handleClose);
    return function () {
      document.removeEventListener("mousedown", handleClose);
    };
  }, []);

  var node = (0,react__WEBPACK_IMPORTED_MODULE_2__.useRef)(),
      router = (0,next_dist_client_router__WEBPACK_IMPORTED_MODULE_1__.useRouter)(),
      handleClose = function handleClose(e) {
    if (node.current.contains(e.target)) {
      if (e.target.parentNode) return;
    }

    onClose();
  },
      _useTranslation = (0,next_translate_useTranslation__WEBPACK_IMPORTED_MODULE_5__.default)('common'),
      t = _useTranslation.t,
      translationPath = 'commons.',
      translate = function translate(key) {
    return t("".concat(translationPath).concat(key));
  },
      dispatch = (0,react_redux__WEBPACK_IMPORTED_MODULE_3__.useDispatch)();

  function _logout() {
    dispatch((0,_redux_features_userSlice__WEBPACK_IMPORTED_MODULE_8__.logout)());
    router.push("/");
  }

  function goToPersonal() {
    router.push("/personal");
  }

  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
    className: (_LoggedDrop_module_scss__WEBPACK_IMPORTED_MODULE_9___default().container),
    ref: node,
    children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
      className: (_LoggedDrop_module_scss__WEBPACK_IMPORTED_MODULE_9___default().content),
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
        className: (_LoggedDrop_module_scss__WEBPACK_IMPORTED_MODULE_9___default().user_photo_name),
        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("span", {
          onClick: goToPersonal,
          children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("img", {
            src: (_user$photo = user.photo) !== null && _user$photo !== void 0 ? _user$photo : _public_images_common_userDefault_png__WEBPACK_IMPORTED_MODULE_4__.default.src,
            alt: ""
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 59,
            columnNumber: 29
          }, this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 57,
          columnNumber: 21
        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("span", {
          onClick: goToPersonal,
          children: user.username
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 62,
          columnNumber: 21
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 56,
        columnNumber: 17
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
        className: (_LoggedDrop_module_scss__WEBPACK_IMPORTED_MODULE_9___default().user_tel),
        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("span", {
          children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("img", {
            src: _public_images_common_phone_png__WEBPACK_IMPORTED_MODULE_7__.default.src,
            alt: ""
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 70,
            columnNumber: 25
          }, this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 69,
          columnNumber: 21
        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("span", {
          children: user.telephone
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 72,
          columnNumber: 21
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 68,
        columnNumber: 17
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
        className: (_LoggedDrop_module_scss__WEBPACK_IMPORTED_MODULE_9___default().logOut),
        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("span", {
          onClick: function onClick() {
            return _logout();
          },
          children: translate('logOut')
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 75,
          columnNumber: 21
        }, this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 74,
        columnNumber: 17
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 55,
      columnNumber: 13
    }, this)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 51,
    columnNumber: 9
  }, this);
}

_s(LoggedDrop, "S0287hNQkCXKRRiPRn1dnsO3HJ8=", false, function () {
  return [next_dist_client_router__WEBPACK_IMPORTED_MODULE_1__.useRouter, next_translate_useTranslation__WEBPACK_IMPORTED_MODULE_5__.default, react_redux__WEBPACK_IMPORTED_MODULE_3__.useDispatch];
});

_c = LoggedDrop;

var _c;

$RefreshReg$(_c, "LoggedDrop");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9IZWFkZXIvQmFyL0Jhckl0ZW1zL0xvZ2dlZC9Mb2dnZWREcm9wL0xvZ2dlZERyb3AuanN4Il0sIm5hbWVzIjpbIkxvZ2dlZERyb3AiLCJvbkNsb3NlIiwidXNlciIsInVzZUVmZmVjdCIsImRvY3VtZW50IiwiYWRkRXZlbnRMaXN0ZW5lciIsImhhbmRsZUNsb3NlIiwicmVtb3ZlRXZlbnRMaXN0ZW5lciIsIm5vZGUiLCJ1c2VSZWYiLCJyb3V0ZXIiLCJ1c2VSb3V0ZXIiLCJlIiwiY3VycmVudCIsImNvbnRhaW5zIiwidGFyZ2V0IiwicGFyZW50Tm9kZSIsInVzZVRyYW5zbGF0aW9uIiwidCIsInRyYW5zbGF0aW9uUGF0aCIsInRyYW5zbGF0ZSIsImtleSIsImRpc3BhdGNoIiwidXNlRGlzcGF0Y2giLCJfbG9nb3V0IiwibG9nb3V0IiwicHVzaCIsImdvVG9QZXJzb25hbCIsInN0eWxlcyIsInBob3RvIiwidXNlckRlZmF1bHRJY29uIiwidXNlcm5hbWUiLCJ0ZWxJY29uIiwidGVsZXBob25lIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7Q0FFQTs7Q0FFQTs7Q0FFQTs7Q0FFQTs7QUFDQTtBQUNBO0FBRU8sU0FBU0EsVUFBVCxPQUF1QztBQUFBOztBQUFBOztBQUFBLE1BQWpCQyxPQUFpQixRQUFqQkEsT0FBaUI7QUFBQSxNQUFSQyxJQUFRLFFBQVJBLElBQVE7QUFFMUNDLGtEQUFTLENBQUMsWUFBTTtBQUNaQyxZQUFRLENBQUNDLGdCQUFULENBQTBCLFdBQTFCLEVBQXVDQyxXQUF2QztBQUNBLFdBQU8sWUFBTTtBQUNURixjQUFRLENBQUNHLG1CQUFULENBQTZCLFdBQTdCLEVBQTBDRCxXQUExQztBQUNILEtBRkQ7QUFHSCxHQUxRLEVBS04sRUFMTSxDQUFUOztBQVFJLE1BQUFFLElBQUksR0FBR0MsNkNBQU0sRUFBYjtBQUFBLE1BQ0FDLE1BREEsR0FDU0Msa0VBQVMsRUFEbEI7QUFBQSxNQUdBTCxXQUhBLEdBR2MsU0FBZEEsV0FBYyxDQUFDTSxDQUFELEVBQU87QUFDakIsUUFBSUosSUFBSSxDQUFDSyxPQUFMLENBQWFDLFFBQWIsQ0FBc0JGLENBQUMsQ0FBQ0csTUFBeEIsQ0FBSixFQUFxQztBQUNqQyxVQUFJSCxDQUFDLENBQUNHLE1BQUYsQ0FBU0MsVUFBYixFQUF5QjtBQUM1Qjs7QUFDRGYsV0FBTztBQUNWLEdBUkQ7QUFBQSx3QkFTUWdCLHNFQUFjLENBQUMsUUFBRCxDQVR0QjtBQUFBLE1BU0VDLENBVEYsbUJBU0VBLENBVEY7QUFBQSxNQVVBQyxlQVZBLEdBVWtCLFVBVmxCO0FBQUEsTUFXQUMsU0FYQSxHQVdZLFNBQVpBLFNBQVksQ0FBQ0MsR0FBRDtBQUFBLFdBQVNILENBQUMsV0FBSUMsZUFBSixTQUFzQkUsR0FBdEIsRUFBVjtBQUFBLEdBWFo7QUFBQSxNQVlBQyxRQVpBLEdBWVdDLHdEQUFXLEVBWnRCOztBQWNKLFdBQVNDLE9BQVQsR0FBbUI7QUFDZkYsWUFBUSxDQUFDRyxpRUFBTSxFQUFQLENBQVI7QUFDQWYsVUFBTSxDQUFDZ0IsSUFBUDtBQUNIOztBQUdELFdBQVNDLFlBQVQsR0FBeUI7QUFDckJqQixVQUFNLENBQUNnQixJQUFQO0FBQ0g7O0FBRUQsc0JBQ0k7QUFDSSxhQUFTLEVBQUVFLDBFQURmO0FBRUksT0FBRyxFQUFFcEIsSUFGVDtBQUFBLDJCQUlJO0FBQUssZUFBUyxFQUFFb0Isd0VBQWhCO0FBQUEsOEJBQ0k7QUFBSyxpQkFBUyxFQUFFQSxnRkFBaEI7QUFBQSxnQ0FDSTtBQUFNLGlCQUFPLEVBQUVELFlBQWY7QUFBQSxpQ0FFUTtBQUFLLGVBQUcsaUJBQUV6QixJQUFJLENBQUMyQixLQUFQLHFEQUFnQkMsOEVBQXhCO0FBQTZDLGVBQUcsRUFBQztBQUFqRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBRlI7QUFBQTtBQUFBO0FBQUE7QUFBQSxnQkFESixlQU1JO0FBQU0saUJBQU8sRUFBRUgsWUFBZjtBQUFBLG9CQUVTekIsSUFBSSxDQUFDNkI7QUFGZDtBQUFBO0FBQUE7QUFBQTtBQUFBLGdCQU5KO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQURKLGVBYUk7QUFBSyxpQkFBUyxFQUFFSCx5RUFBaEI7QUFBQSxnQ0FDSTtBQUFBLGlDQUNJO0FBQUssZUFBRyxFQUFFSSx3RUFBVjtBQUF1QixlQUFHLEVBQUM7QUFBM0I7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURKO0FBQUE7QUFBQTtBQUFBO0FBQUEsZ0JBREosZUFJSTtBQUFBLG9CQUFPOUIsSUFBSSxDQUFDK0I7QUFBWjtBQUFBO0FBQUE7QUFBQTtBQUFBLGdCQUpKO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQWJKLGVBbUJJO0FBQUssaUJBQVMsRUFBRUwsdUVBQWhCO0FBQUEsK0JBQ0k7QUFDSSxpQkFBTyxFQUFFO0FBQUEsbUJBQUtKLE9BQU8sRUFBWjtBQUFBLFdBRGI7QUFBQSxvQkFFRUosU0FBUyxDQUFDLFFBQUQ7QUFGWDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREo7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQW5CSjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFKSjtBQUFBO0FBQUE7QUFBQTtBQUFBLFVBREo7QUFpQ0g7O0dBbkVlcEIsVTtVQVdDVyw4RCxFQVFETSxrRSxFQUdHTSxvRDs7O0tBdEJIdkIsVSIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9fYXBwLjg1OWQ2NDdkM2EwMzhmMmE1NDllLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyIvLyBob29rcyBhbmQgaGVscGVyc1xyXG5pbXBvcnQgeyB1c2VSb3V0ZXIgfSBmcm9tICduZXh0L2Rpc3QvY2xpZW50L3JvdXRlcic7XHJcbmltcG9ydCB7IHVzZUVmZmVjdCwgdXNlUmVmIH0gZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgeyB1c2VEaXNwYXRjaCB9IGZyb20gJ3JlYWN0LXJlZHV4JztcclxuaW1wb3J0IHVzZXJEZWZhdWx0SWNvbiBmcm9tICcvcHVibGljL2ltYWdlcy9jb21tb24vdXNlckRlZmF1bHQucG5nJ1xyXG4vLyB0cmFuc2xhdGlvbiBcclxuaW1wb3J0IHVzZVRyYW5zbGF0aW9uIGZyb20gJ25leHQtdHJhbnNsYXRlL3VzZVRyYW5zbGF0aW9uJ1xyXG4vLyBjb21wb25ldG5zXHJcbmltcG9ydCBMaW5rIGZyb20gJ25leHQvbGluaydcclxuLy8gc3R5bGVzIFxyXG5pbXBvcnQgc3R5bGVzIGZyb20gJy4vTG9nZ2VkRHJvcC5tb2R1bGUuc2NzcydcclxuLy8gaWNvbnNcclxuaW1wb3J0IHRlbEljb24gZnJvbSAnL3B1YmxpYy9pbWFnZXMvY29tbW9uL3Bob25lLnBuZydcclxuaW1wb3J0IHsgbG9nb3V0IH0gZnJvbSAnL3JlZHV4L2ZlYXR1cmVzL3VzZXJTbGljZSc7XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gTG9nZ2VkRHJvcCh7IG9uQ2xvc2UsIHVzZXIgfSkge1xyXG5cclxuICAgIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICAgICAgZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcihcIm1vdXNlZG93blwiLCBoYW5kbGVDbG9zZSk7XHJcbiAgICAgICAgcmV0dXJuICgpID0+IHtcclxuICAgICAgICAgICAgZG9jdW1lbnQucmVtb3ZlRXZlbnRMaXN0ZW5lcihcIm1vdXNlZG93blwiLCBoYW5kbGVDbG9zZSk7XHJcbiAgICAgICAgfVxyXG4gICAgfSwgW10pXHJcblxyXG4gICAgY29uc3RcclxuICAgICAgICBub2RlID0gdXNlUmVmKCksXHJcbiAgICAgICAgcm91dGVyID0gdXNlUm91dGVyKCksXHJcblxyXG4gICAgICAgIGhhbmRsZUNsb3NlID0gKGUpID0+IHtcclxuICAgICAgICAgICAgaWYgKG5vZGUuY3VycmVudC5jb250YWlucyhlLnRhcmdldCkpIHtcclxuICAgICAgICAgICAgICAgIGlmIChlLnRhcmdldC5wYXJlbnROb2RlKSByZXR1cm5cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBvbkNsb3NlKClcclxuICAgICAgICB9LFxyXG4gICAgICAgIHsgdCB9ID0gdXNlVHJhbnNsYXRpb24oJ2NvbW1vbicpLFxyXG4gICAgICAgIHRyYW5zbGF0aW9uUGF0aCA9ICdjb21tb25zLicsXHJcbiAgICAgICAgdHJhbnNsYXRlID0gKGtleSkgPT4gdChgJHt0cmFuc2xhdGlvblBhdGh9JHtrZXl9YCksXHJcbiAgICAgICAgZGlzcGF0Y2ggPSB1c2VEaXNwYXRjaCgpXHJcblxyXG4gICAgZnVuY3Rpb24gX2xvZ291dCgpIHtcclxuICAgICAgICBkaXNwYXRjaChsb2dvdXQoKSk7XHJcbiAgICAgICAgcm91dGVyLnB1c2goYC9gKTtcclxuICAgIH0gICAgXHJcblxyXG5cclxuICAgIGZ1bmN0aW9uIGdvVG9QZXJzb25hbCAoKSB7XHJcbiAgICAgICAgcm91dGVyLnB1c2goYC9wZXJzb25hbGApO1xyXG4gICAgfVxyXG5cclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPGRpdlxyXG4gICAgICAgICAgICBjbGFzc05hbWU9e3N0eWxlcy5jb250YWluZXJ9XHJcbiAgICAgICAgICAgIHJlZj17bm9kZX1cclxuICAgICAgICA+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuY29udGVudH0+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLnVzZXJfcGhvdG9fbmFtZX0+XHJcbiAgICAgICAgICAgICAgICAgICAgPHNwYW4gb25DbGljaz17Z29Ub1BlcnNvbmFsfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgey8qIDxMaW5rIGhyZWY9Jy9wZXJzb25hbCc+ICovfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGltZyBzcmM9e3VzZXIucGhvdG8gPz8gdXNlckRlZmF1bHRJY29uLnNyY30gYWx0PVwiXCIgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgey8qIDwvTGluaz4gKi99XHJcbiAgICAgICAgICAgICAgICAgICAgPC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgIDxzcGFuIG9uQ2xpY2s9e2dvVG9QZXJzb25hbH0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHsvKiA8TGluayBocmVmPScvcGVyc29uYWwnPiAqL31cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHt1c2VyLnVzZXJuYW1lfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICB7LyogPC9MaW5rPiAqL31cclxuICAgICAgICAgICAgICAgICAgICA8L3NwYW4+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMudXNlcl90ZWx9PlxyXG4gICAgICAgICAgICAgICAgICAgIDxzcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8aW1nIHNyYz17dGVsSWNvbi5zcmN9IGFsdD1cIlwiIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgIDxzcGFuPnt1c2VyLnRlbGVwaG9uZX08L3NwYW4+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMubG9nT3V0fT5cclxuICAgICAgICAgICAgICAgICAgICA8c3BhblxyXG4gICAgICAgICAgICAgICAgICAgICAgICBvbkNsaWNrPXsoKSA9Pl9sb2dvdXQoKSB9XHJcbiAgICAgICAgICAgICAgICAgICAgPnt0cmFuc2xhdGUoJ2xvZ091dCcpfTwvc3Bhbj5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgIClcclxuXHJcbn1cclxuIl0sInNvdXJjZVJvb3QiOiIifQ==