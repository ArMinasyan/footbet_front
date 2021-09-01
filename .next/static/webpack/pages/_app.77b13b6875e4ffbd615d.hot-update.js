self["webpackHotUpdate_N_E"]("pages/_app",{

/***/ "./lib/request-destinations.js":
/*!*************************************!*\
  !*** ./lib/request-destinations.js ***!
  \*************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "REGISTER": function() { return /* binding */ REGISTER; },
/* harmony export */   "LOGIN": function() { return /* binding */ LOGIN; },
/* harmony export */   "GET_ACCOUNT_INFO": function() { return /* binding */ GET_ACCOUNT_INFO; },
/* harmony export */   "CHANGE_ACCOUNT_INFO": function() { return /* binding */ CHANGE_ACCOUNT_INFO; },
/* harmony export */   "CHANGE_ACCOUNT_IMAGE": function() { return /* binding */ CHANGE_ACCOUNT_IMAGE; },
/* harmony export */   "START_RESET_PASSWORD": function() { return /* binding */ START_RESET_PASSWORD; },
/* harmony export */   "VERIFY_PASSWORD_RESET": function() { return /* binding */ VERIFY_PASSWORD_RESET; },
/* harmony export */   "SET_NEW_PASSWORD": function() { return /* binding */ SET_NEW_PASSWORD; },
/* harmony export */   "GET_NEWS": function() { return /* binding */ GET_NEWS; },
/* harmony export */   "GET_MATCHES": function() { return /* binding */ GET_MATCHES; },
/* harmony export */   "GET_MATCHES_OF_NEXT_DAY": function() { return /* binding */ GET_MATCHES_OF_NEXT_DAY; },
/* harmony export */   "GET_PREDICTIONS": function() { return /* binding */ GET_PREDICTIONS; },
/* harmony export */   "GET_FEEDBACK": function() { return /* binding */ GET_FEEDBACK; },
/* harmony export */   "GET_MATCHES_BY_TYPE": function() { return /* binding */ GET_MATCHES_BY_TYPE; },
/* harmony export */   "ADD_FEEDBACK": function() { return /* binding */ ADD_FEEDBACK; },
/* harmony export */   "GET_STATISTICS": function() { return /* binding */ GET_STATISTICS; }
/* harmony export */ });
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./constants */ "./lib/constants.js");
/* module decorator */ module = __webpack_require__.hmd(module);

var AUTH_URL = _constants__WEBPACK_IMPORTED_MODULE_0__.host + "auth/";
var ACCOUNT_URL = _constants__WEBPACK_IMPORTED_MODULE_0__.host + "account/";
var REGISTER = {
  url: AUTH_URL + 'registration',
  method: 'post'
};
var LOGIN = {
  url: AUTH_URL + 'login',
  method: 'post'
};
var GET_ACCOUNT_INFO = {
  url: ACCOUNT_URL + 'info',
  method: 'get'
};
var CHANGE_ACCOUNT_INFO = {
  url: ACCOUNT_URL + 'info',
  method: 'put'
};
var CHANGE_ACCOUNT_IMAGE = {
  url: ACCOUNT_URL + 'profile-image',
  method: 'post'
};
var START_RESET_PASSWORD = function START_RESET_PASSWORD(email) {
  return {
    url: AUTH_URL + "password/reset?email=".concat(email),
    method: 'post'
  };
};
_c = START_RESET_PASSWORD;
var VERIFY_PASSWORD_RESET = {
  url: AUTH_URL + "password/verify_code",
  method: 'put'
};
var SET_NEW_PASSWORD = {
  url: AUTH_URL + "password/new_password ",
  method: 'put'
};
var GET_NEWS = {
  url: ACCOUNT_URL + "news",
  method: "get"
};
var GET_MATCHES = {
  url: ACCOUNT_URL + "match-of-the-day",
  method: "get"
};
var GET_MATCHES_OF_NEXT_DAY = {
  url: ACCOUNT_URL + "match-of-the-day?type=next_day",
  method: "get"
};
var GET_PREDICTIONS = {
  url: ACCOUNT_URL + "prediction",
  method: "get"
};
var GET_FEEDBACK = function GET_FEEDBACK(id) {
  return {
    url: _constants__WEBPACK_IMPORTED_MODULE_0__.host + "feedback/".concat(id, "?sort_by=created_at&order_by=desc"),
    method: "get"
  };
};
_c2 = GET_FEEDBACK;
var GET_MATCHES_BY_TYPE = function GET_MATCHES_BY_TYPE(type) {
  return {
    url: ACCOUNT_URL + "game?type=".concat(type),
    method: "get"
  };
};
_c3 = GET_MATCHES_BY_TYPE;
var ADD_FEEDBACK = {
  url: _constants__WEBPACK_IMPORTED_MODULE_0__.host + "feedback",
  method: "post"
};
var GET_STATISTICS = {
  url: _constants__WEBPACK_IMPORTED_MODULE_0__.host + "admin/statistics",
  method: "get"
};

var _c, _c2, _c3;

$RefreshReg$(_c, "START_RESET_PASSWORD");
$RefreshReg$(_c2, "GET_FEEDBACK");
$RefreshReg$(_c3, "GET_MATCHES_BY_TYPE");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vbGliL3JlcXVlc3QtZGVzdGluYXRpb25zLmpzIl0sIm5hbWVzIjpbIkFVVEhfVVJMIiwiaG9zdCIsIkFDQ09VTlRfVVJMIiwiUkVHSVNURVIiLCJ1cmwiLCJtZXRob2QiLCJMT0dJTiIsIkdFVF9BQ0NPVU5UX0lORk8iLCJDSEFOR0VfQUNDT1VOVF9JTkZPIiwiQ0hBTkdFX0FDQ09VTlRfSU1BR0UiLCJTVEFSVF9SRVNFVF9QQVNTV09SRCIsImVtYWlsIiwiVkVSSUZZX1BBU1NXT1JEX1JFU0VUIiwiU0VUX05FV19QQVNTV09SRCIsIkdFVF9ORVdTIiwiR0VUX01BVENIRVMiLCJHRVRfTUFUQ0hFU19PRl9ORVhUX0RBWSIsIkdFVF9QUkVESUNUSU9OUyIsIkdFVF9GRUVEQkFDSyIsImlkIiwiR0VUX01BVENIRVNfQllfVFlQRSIsInR5cGUiLCJBRERfRkVFREJBQ0siLCJHRVRfU1RBVElTVElDUyJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFFQSxJQUFNQSxRQUFRLEdBQUdDLDRDQUFJLFVBQXJCO0FBQ0EsSUFBTUMsV0FBVyxHQUFHRCw0Q0FBSSxhQUF4QjtBQUVPLElBQU1FLFFBQVEsR0FBRztBQUN0QkMsS0FBRyxFQUFFSixRQUFRLEdBQUcsY0FETTtBQUV0QkssUUFBTSxFQUFFO0FBRmMsQ0FBakI7QUFLQSxJQUFNQyxLQUFLLEdBQUc7QUFDbkJGLEtBQUcsRUFBRUosUUFBUSxHQUFHLE9BREc7QUFFbkJLLFFBQU0sRUFBRTtBQUZXLENBQWQ7QUFLQSxJQUFNRSxnQkFBZ0IsR0FBRztBQUM5QkgsS0FBRyxFQUFFRixXQUFXLEdBQUcsTUFEVztBQUU5QkcsUUFBTSxFQUFFO0FBRnNCLENBQXpCO0FBS0EsSUFBTUcsbUJBQW1CLEdBQUc7QUFDakNKLEtBQUcsRUFBRUYsV0FBVyxHQUFHLE1BRGM7QUFFakNHLFFBQU0sRUFBRTtBQUZ5QixDQUE1QjtBQUtBLElBQU1JLG9CQUFvQixHQUFHO0FBQ2xDTCxLQUFHLEVBQUVGLFdBQVcsR0FBRyxlQURlO0FBRWxDRyxRQUFNLEVBQUU7QUFGMEIsQ0FBN0I7QUFLQSxJQUFNSyxvQkFBb0IsR0FBRyxTQUF2QkEsb0JBQXVCLENBQUFDLEtBQUs7QUFBQSxTQUFLO0FBQzVDUCxPQUFHLEVBQUVKLFFBQVEsa0NBQTJCVyxLQUEzQixDQUQrQjtBQUU1Q04sVUFBTSxFQUFFO0FBRm9DLEdBQUw7QUFBQSxDQUFsQztLQUFNSyxvQjtBQU1OLElBQU1FLHFCQUFxQixHQUFHO0FBQ25DUixLQUFHLEVBQUVKLFFBQVEseUJBRHNCO0FBRW5DSyxRQUFNLEVBQUU7QUFGMkIsQ0FBOUI7QUFLQSxJQUFNUSxnQkFBZ0IsR0FBRztBQUM5QlQsS0FBRyxFQUFFSixRQUFRLDJCQURpQjtBQUU5QkssUUFBTSxFQUFFO0FBRnNCLENBQXpCO0FBS0EsSUFBTVMsUUFBUSxHQUFHO0FBQ3RCVixLQUFHLEVBQUVGLFdBQVcsU0FETTtBQUV0QkcsUUFBTTtBQUZnQixDQUFqQjtBQUtBLElBQU1VLFdBQVcsR0FBRztBQUN6QlgsS0FBRyxFQUFFRixXQUFXLHFCQURTO0FBRXpCRyxRQUFNO0FBRm1CLENBQXBCO0FBS0EsSUFBTVcsdUJBQXVCLEdBQUc7QUFDckNaLEtBQUcsRUFBRUYsV0FBVyxtQ0FEcUI7QUFFckNHLFFBQU07QUFGK0IsQ0FBaEM7QUFLQSxJQUFNWSxlQUFlLEdBQUc7QUFDN0JiLEtBQUcsRUFBRUYsV0FBVyxlQURhO0FBRTdCRyxRQUFNO0FBRnVCLENBQXhCO0FBS0EsSUFBTWEsWUFBWSxHQUFHLFNBQWZBLFlBQWUsQ0FBQUMsRUFBRTtBQUFBLFNBQUs7QUFDakNmLE9BQUcsRUFBRUgsNENBQUksc0JBQWVrQixFQUFmLHNDQUR3QjtBQUVqQ2QsVUFBTTtBQUYyQixHQUFMO0FBQUEsQ0FBdkI7TUFBTWEsWTtBQUtOLElBQU1FLG1CQUFtQixHQUFHLFNBQXRCQSxtQkFBc0IsQ0FBQUMsSUFBSTtBQUFBLFNBQUs7QUFDMUNqQixPQUFHLEVBQUVGLFdBQVcsdUJBQWdCbUIsSUFBaEIsQ0FEMEI7QUFFMUNoQixVQUFNO0FBRm9DLEdBQUw7QUFBQSxDQUFoQztNQUFNZSxtQjtBQUtOLElBQU1FLFlBQVksR0FBRztBQUMxQmxCLEtBQUcsRUFBRUgsNENBQUksYUFEaUI7QUFFMUJJLFFBQU07QUFGb0IsQ0FBckI7QUFLQSxJQUFNa0IsY0FBYyxHQUFHO0FBQzVCbkIsS0FBRyxFQUFFSCw0Q0FBSSxxQkFEbUI7QUFFNUJJLFFBQU07QUFGc0IsQ0FBdkIiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvX2FwcC43N2IxM2I2ODc1ZTRmZmJkNjE1ZC5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtob3N0fSBmcm9tIFwiLi9jb25zdGFudHNcIlxyXG5cclxuY29uc3QgQVVUSF9VUkwgPSBob3N0ICsgYGF1dGgvYDtcclxuY29uc3QgQUNDT1VOVF9VUkwgPSBob3N0ICsgYGFjY291bnQvYFxyXG5cclxuZXhwb3J0IGNvbnN0IFJFR0lTVEVSID0ge1xyXG4gIHVybDogQVVUSF9VUkwgKyAncmVnaXN0cmF0aW9uJyxcclxuICBtZXRob2Q6ICdwb3N0J1xyXG59XHJcblxyXG5leHBvcnQgY29uc3QgTE9HSU4gPSB7XHJcbiAgdXJsOiBBVVRIX1VSTCArICdsb2dpbicsXHJcbiAgbWV0aG9kOiAncG9zdCdcclxufVxyXG5cclxuZXhwb3J0IGNvbnN0IEdFVF9BQ0NPVU5UX0lORk8gPSB7XHJcbiAgdXJsOiBBQ0NPVU5UX1VSTCArICdpbmZvJyxcclxuICBtZXRob2Q6ICdnZXQnXHJcbn1cclxuXHJcbmV4cG9ydCBjb25zdCBDSEFOR0VfQUNDT1VOVF9JTkZPID0ge1xyXG4gIHVybDogQUNDT1VOVF9VUkwgKyAnaW5mbycsXHJcbiAgbWV0aG9kOiAncHV0J1xyXG59XHJcblxyXG5leHBvcnQgY29uc3QgQ0hBTkdFX0FDQ09VTlRfSU1BR0UgPSB7XHJcbiAgdXJsOiBBQ0NPVU5UX1VSTCArICdwcm9maWxlLWltYWdlJyxcclxuICBtZXRob2Q6ICdwb3N0J1xyXG59XHJcblxyXG5leHBvcnQgY29uc3QgU1RBUlRfUkVTRVRfUEFTU1dPUkQgPSBlbWFpbCA9PiAoe1xyXG4gIHVybDogQVVUSF9VUkwgKyBgcGFzc3dvcmQvcmVzZXQ/ZW1haWw9JHtlbWFpbH1gLFxyXG4gIG1ldGhvZDogJ3Bvc3QnXHJcbn0pXHJcblxyXG5cclxuZXhwb3J0IGNvbnN0IFZFUklGWV9QQVNTV09SRF9SRVNFVCA9IHtcclxuICB1cmw6IEFVVEhfVVJMICsgYHBhc3N3b3JkL3ZlcmlmeV9jb2RlYCxcclxuICBtZXRob2Q6ICdwdXQnXHJcbn1cclxuXHJcbmV4cG9ydCBjb25zdCBTRVRfTkVXX1BBU1NXT1JEID0ge1xyXG4gIHVybDogQVVUSF9VUkwgKyBgcGFzc3dvcmQvbmV3X3Bhc3N3b3JkIGAsXHJcbiAgbWV0aG9kOiAncHV0J1xyXG59XHJcblxyXG5leHBvcnQgY29uc3QgR0VUX05FV1MgPSB7XHJcbiAgdXJsOiBBQ0NPVU5UX1VSTCArIGBuZXdzYCxcclxuICBtZXRob2Q6IGBnZXRgXHJcbn1cclxuXHJcbmV4cG9ydCBjb25zdCBHRVRfTUFUQ0hFUyA9IHtcclxuICB1cmw6IEFDQ09VTlRfVVJMICsgYG1hdGNoLW9mLXRoZS1kYXlgLFxyXG4gIG1ldGhvZDogYGdldGBcclxufVxyXG5cclxuZXhwb3J0IGNvbnN0IEdFVF9NQVRDSEVTX09GX05FWFRfREFZID0ge1xyXG4gIHVybDogQUNDT1VOVF9VUkwgKyBgbWF0Y2gtb2YtdGhlLWRheT90eXBlPW5leHRfZGF5YCxcclxuICBtZXRob2Q6IGBnZXRgXHJcbn1cclxuXHJcbmV4cG9ydCBjb25zdCBHRVRfUFJFRElDVElPTlMgPSB7XHJcbiAgdXJsOiBBQ0NPVU5UX1VSTCArIGBwcmVkaWN0aW9uYCxcclxuICBtZXRob2Q6IGBnZXRgXHJcbn1cclxuXHJcbmV4cG9ydCBjb25zdCBHRVRfRkVFREJBQ0sgPSBpZCA9PiAoe1xyXG4gIHVybDogaG9zdCArIGBmZWVkYmFjay8ke2lkfT9zb3J0X2J5PWNyZWF0ZWRfYXQmb3JkZXJfYnk9ZGVzY2AsXHJcbiAgbWV0aG9kOiBgZ2V0YFxyXG59KVxyXG5cclxuZXhwb3J0IGNvbnN0IEdFVF9NQVRDSEVTX0JZX1RZUEUgPSB0eXBlID0+ICh7XHJcbiAgdXJsOiBBQ0NPVU5UX1VSTCArIGBnYW1lP3R5cGU9JHt0eXBlfWAsXHJcbiAgbWV0aG9kOiBgZ2V0YFxyXG59KVxyXG5cclxuZXhwb3J0IGNvbnN0IEFERF9GRUVEQkFDSyA9IHtcclxuICB1cmw6IGhvc3QgKyBgZmVlZGJhY2tgLFxyXG4gIG1ldGhvZDogYHBvc3RgXHJcbn1cclxuXHJcbmV4cG9ydCBjb25zdCBHRVRfU1RBVElTVElDUyA9IHtcclxuICB1cmw6IGhvc3QgKyBgYWRtaW4vc3RhdGlzdGljc2AsXHJcbiAgbWV0aG9kOiBgZ2V0YFxyXG59XHJcbiJdLCJzb3VyY2VSb290IjoiIn0=