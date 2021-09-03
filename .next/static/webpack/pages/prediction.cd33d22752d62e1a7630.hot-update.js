self["webpackHotUpdate_N_E"]("pages/prediction",{

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
/* harmony export */   "GET_MATCHES_OF_SPECIFIC_DAY": function() { return /* binding */ GET_MATCHES_OF_SPECIFIC_DAY; },
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
var GET_MATCHES_OF_SPECIFIC_DAY = function GET_MATCHES_OF_SPECIFIC_DAY(day) {
  return {
    url: ACCOUNT_URL + "match-of-the-day?date=".concat(day),
    method: "get"
  };
};
_c2 = GET_MATCHES_OF_SPECIFIC_DAY;
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
_c3 = GET_FEEDBACK;
var GET_MATCHES_BY_TYPE = function GET_MATCHES_BY_TYPE(type) {
  return {
    url: ACCOUNT_URL + "game?type=".concat(type),
    method: "get"
  };
};
_c4 = GET_MATCHES_BY_TYPE;
var ADD_FEEDBACK = {
  url: _constants__WEBPACK_IMPORTED_MODULE_0__.host + "feedback",
  method: "post"
};
var GET_STATISTICS = {
  url: _constants__WEBPACK_IMPORTED_MODULE_0__.host + "admin/statistics",
  method: "get"
};

var _c, _c2, _c3, _c4;

$RefreshReg$(_c, "START_RESET_PASSWORD");
$RefreshReg$(_c2, "GET_MATCHES_OF_SPECIFIC_DAY");
$RefreshReg$(_c3, "GET_FEEDBACK");
$RefreshReg$(_c4, "GET_MATCHES_BY_TYPE");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vbGliL3JlcXVlc3QtZGVzdGluYXRpb25zLmpzIl0sIm5hbWVzIjpbIkFVVEhfVVJMIiwiaG9zdCIsIkFDQ09VTlRfVVJMIiwiUkVHSVNURVIiLCJ1cmwiLCJtZXRob2QiLCJMT0dJTiIsIkdFVF9BQ0NPVU5UX0lORk8iLCJDSEFOR0VfQUNDT1VOVF9JTkZPIiwiQ0hBTkdFX0FDQ09VTlRfSU1BR0UiLCJTVEFSVF9SRVNFVF9QQVNTV09SRCIsImVtYWlsIiwiVkVSSUZZX1BBU1NXT1JEX1JFU0VUIiwiU0VUX05FV19QQVNTV09SRCIsIkdFVF9ORVdTIiwiR0VUX01BVENIRVMiLCJHRVRfTUFUQ0hFU19PRl9TUEVDSUZJQ19EQVkiLCJkYXkiLCJHRVRfTUFUQ0hFU19PRl9ORVhUX0RBWSIsIkdFVF9QUkVESUNUSU9OUyIsIkdFVF9GRUVEQkFDSyIsImlkIiwiR0VUX01BVENIRVNfQllfVFlQRSIsInR5cGUiLCJBRERfRkVFREJBQ0siLCJHRVRfU1RBVElTVElDUyJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBSUEsSUFBTUEsUUFBUSxHQUFHQyw0Q0FBSSxVQUFyQjtBQUNBLElBQU1DLFdBQVcsR0FBR0QsNENBQUksYUFBeEI7QUFFTyxJQUFNRSxRQUFRLEdBQUc7QUFDdEJDLEtBQUcsRUFBRUosUUFBUSxHQUFHLGNBRE07QUFFdEJLLFFBQU0sRUFBRTtBQUZjLENBQWpCO0FBS0EsSUFBTUMsS0FBSyxHQUFHO0FBQ25CRixLQUFHLEVBQUVKLFFBQVEsR0FBRyxPQURHO0FBRW5CSyxRQUFNLEVBQUU7QUFGVyxDQUFkO0FBS0EsSUFBTUUsZ0JBQWdCLEdBQUc7QUFDOUJILEtBQUcsRUFBRUYsV0FBVyxHQUFHLE1BRFc7QUFFOUJHLFFBQU0sRUFBRTtBQUZzQixDQUF6QjtBQUtBLElBQU1HLG1CQUFtQixHQUFHO0FBQ2pDSixLQUFHLEVBQUVGLFdBQVcsR0FBRyxNQURjO0FBRWpDRyxRQUFNLEVBQUU7QUFGeUIsQ0FBNUI7QUFLQSxJQUFNSSxvQkFBb0IsR0FBRztBQUNsQ0wsS0FBRyxFQUFFRixXQUFXLEdBQUcsZUFEZTtBQUVsQ0csUUFBTSxFQUFFO0FBRjBCLENBQTdCO0FBS0EsSUFBTUssb0JBQW9CLEdBQUcsU0FBdkJBLG9CQUF1QixDQUFBQyxLQUFLO0FBQUEsU0FBSztBQUM1Q1AsT0FBRyxFQUFFSixRQUFRLGtDQUEyQlcsS0FBM0IsQ0FEK0I7QUFFNUNOLFVBQU0sRUFBRTtBQUZvQyxHQUFMO0FBQUEsQ0FBbEM7S0FBTUssb0I7QUFNTixJQUFNRSxxQkFBcUIsR0FBRztBQUNuQ1IsS0FBRyxFQUFFSixRQUFRLHlCQURzQjtBQUVuQ0ssUUFBTSxFQUFFO0FBRjJCLENBQTlCO0FBS0EsSUFBTVEsZ0JBQWdCLEdBQUc7QUFDOUJULEtBQUcsRUFBRUosUUFBUSwyQkFEaUI7QUFFOUJLLFFBQU0sRUFBRTtBQUZzQixDQUF6QjtBQUtBLElBQU1TLFFBQVEsR0FBRztBQUN0QlYsS0FBRyxFQUFFRixXQUFXLFNBRE07QUFFdEJHLFFBQU07QUFGZ0IsQ0FBakI7QUFLQSxJQUFNVSxXQUFXLEdBQUc7QUFDekJYLEtBQUcsRUFBRUYsV0FBVyxxQkFEUztBQUV6QkcsUUFBTTtBQUZtQixDQUFwQjtBQUtBLElBQU1XLDJCQUEyQixHQUFHLFNBQTlCQSwyQkFBOEIsQ0FBQ0MsR0FBRDtBQUFBLFNBQVU7QUFDbkRiLE9BQUcsRUFBRUYsV0FBVyxtQ0FBNEJlLEdBQTVCLENBRG1DO0FBRW5EWixVQUFNO0FBRjZDLEdBQVY7QUFBQSxDQUFwQztNQUFNVywyQjtBQUtOLElBQU1FLHVCQUF1QixHQUFHO0FBQ3JDZCxLQUFHLEVBQUVGLFdBQVcsbUNBRHFCO0FBRXJDRyxRQUFNO0FBRitCLENBQWhDO0FBS0EsSUFBTWMsZUFBZSxHQUFHO0FBQzdCZixLQUFHLEVBQUVGLFdBQVcsZUFEYTtBQUU3QkcsUUFBTTtBQUZ1QixDQUF4QjtBQUtBLElBQU1lLFlBQVksR0FBRyxTQUFmQSxZQUFlLENBQUFDLEVBQUU7QUFBQSxTQUFLO0FBQ2pDakIsT0FBRyxFQUFFSCw0Q0FBSSxzQkFBZW9CLEVBQWYsc0NBRHdCO0FBRWpDaEIsVUFBTTtBQUYyQixHQUFMO0FBQUEsQ0FBdkI7TUFBTWUsWTtBQUtOLElBQU1FLG1CQUFtQixHQUFHLFNBQXRCQSxtQkFBc0IsQ0FBQUMsSUFBSTtBQUFBLFNBQUs7QUFDMUNuQixPQUFHLEVBQUVGLFdBQVcsdUJBQWdCcUIsSUFBaEIsQ0FEMEI7QUFFMUNsQixVQUFNO0FBRm9DLEdBQUw7QUFBQSxDQUFoQztNQUFNaUIsbUI7QUFLTixJQUFNRSxZQUFZLEdBQUc7QUFDMUJwQixLQUFHLEVBQUVILDRDQUFJLGFBRGlCO0FBRTFCSSxRQUFNO0FBRm9CLENBQXJCO0FBS0EsSUFBTW9CLGNBQWMsR0FBRztBQUM1QnJCLEtBQUcsRUFBRUgsNENBQUkscUJBRG1CO0FBRTVCSSxRQUFNO0FBRnNCLENBQXZCIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL3ByZWRpY3Rpb24uY2QzM2QyMjc1MmQ2MmUxYTc2MzAuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7XHJcbiAgaG9zdFxyXG59IGZyb20gXCIuL2NvbnN0YW50c1wiXHJcblxyXG5jb25zdCBBVVRIX1VSTCA9IGhvc3QgKyBgYXV0aC9gO1xyXG5jb25zdCBBQ0NPVU5UX1VSTCA9IGhvc3QgKyBgYWNjb3VudC9gXHJcblxyXG5leHBvcnQgY29uc3QgUkVHSVNURVIgPSB7XHJcbiAgdXJsOiBBVVRIX1VSTCArICdyZWdpc3RyYXRpb24nLFxyXG4gIG1ldGhvZDogJ3Bvc3QnXHJcbn1cclxuXHJcbmV4cG9ydCBjb25zdCBMT0dJTiA9IHtcclxuICB1cmw6IEFVVEhfVVJMICsgJ2xvZ2luJyxcclxuICBtZXRob2Q6ICdwb3N0J1xyXG59XHJcblxyXG5leHBvcnQgY29uc3QgR0VUX0FDQ09VTlRfSU5GTyA9IHtcclxuICB1cmw6IEFDQ09VTlRfVVJMICsgJ2luZm8nLFxyXG4gIG1ldGhvZDogJ2dldCdcclxufVxyXG5cclxuZXhwb3J0IGNvbnN0IENIQU5HRV9BQ0NPVU5UX0lORk8gPSB7XHJcbiAgdXJsOiBBQ0NPVU5UX1VSTCArICdpbmZvJyxcclxuICBtZXRob2Q6ICdwdXQnXHJcbn1cclxuXHJcbmV4cG9ydCBjb25zdCBDSEFOR0VfQUNDT1VOVF9JTUFHRSA9IHtcclxuICB1cmw6IEFDQ09VTlRfVVJMICsgJ3Byb2ZpbGUtaW1hZ2UnLFxyXG4gIG1ldGhvZDogJ3Bvc3QnXHJcbn1cclxuXHJcbmV4cG9ydCBjb25zdCBTVEFSVF9SRVNFVF9QQVNTV09SRCA9IGVtYWlsID0+ICh7XHJcbiAgdXJsOiBBVVRIX1VSTCArIGBwYXNzd29yZC9yZXNldD9lbWFpbD0ke2VtYWlsfWAsXHJcbiAgbWV0aG9kOiAncG9zdCdcclxufSlcclxuXHJcblxyXG5leHBvcnQgY29uc3QgVkVSSUZZX1BBU1NXT1JEX1JFU0VUID0ge1xyXG4gIHVybDogQVVUSF9VUkwgKyBgcGFzc3dvcmQvdmVyaWZ5X2NvZGVgLFxyXG4gIG1ldGhvZDogJ3B1dCdcclxufVxyXG5cclxuZXhwb3J0IGNvbnN0IFNFVF9ORVdfUEFTU1dPUkQgPSB7XHJcbiAgdXJsOiBBVVRIX1VSTCArIGBwYXNzd29yZC9uZXdfcGFzc3dvcmQgYCxcclxuICBtZXRob2Q6ICdwdXQnXHJcbn1cclxuXHJcbmV4cG9ydCBjb25zdCBHRVRfTkVXUyA9IHtcclxuICB1cmw6IEFDQ09VTlRfVVJMICsgYG5ld3NgLFxyXG4gIG1ldGhvZDogYGdldGBcclxufVxyXG5cclxuZXhwb3J0IGNvbnN0IEdFVF9NQVRDSEVTID0ge1xyXG4gIHVybDogQUNDT1VOVF9VUkwgKyBgbWF0Y2gtb2YtdGhlLWRheWAsXHJcbiAgbWV0aG9kOiBgZ2V0YFxyXG59XHJcblxyXG5leHBvcnQgY29uc3QgR0VUX01BVENIRVNfT0ZfU1BFQ0lGSUNfREFZID0gKGRheSkgPT4gKHtcclxuICB1cmw6IEFDQ09VTlRfVVJMICsgYG1hdGNoLW9mLXRoZS1kYXk/ZGF0ZT0ke2RheX1gLFxyXG4gIG1ldGhvZDogYGdldGBcclxufSlcclxuXHJcbmV4cG9ydCBjb25zdCBHRVRfTUFUQ0hFU19PRl9ORVhUX0RBWSA9IHtcclxuICB1cmw6IEFDQ09VTlRfVVJMICsgYG1hdGNoLW9mLXRoZS1kYXk/dHlwZT1uZXh0X2RheWAsXHJcbiAgbWV0aG9kOiBgZ2V0YFxyXG59XHJcblxyXG5leHBvcnQgY29uc3QgR0VUX1BSRURJQ1RJT05TID0ge1xyXG4gIHVybDogQUNDT1VOVF9VUkwgKyBgcHJlZGljdGlvbmAsXHJcbiAgbWV0aG9kOiBgZ2V0YFxyXG59XHJcblxyXG5leHBvcnQgY29uc3QgR0VUX0ZFRURCQUNLID0gaWQgPT4gKHtcclxuICB1cmw6IGhvc3QgKyBgZmVlZGJhY2svJHtpZH0/c29ydF9ieT1jcmVhdGVkX2F0Jm9yZGVyX2J5PWRlc2NgLFxyXG4gIG1ldGhvZDogYGdldGBcclxufSlcclxuXHJcbmV4cG9ydCBjb25zdCBHRVRfTUFUQ0hFU19CWV9UWVBFID0gdHlwZSA9PiAoe1xyXG4gIHVybDogQUNDT1VOVF9VUkwgKyBgZ2FtZT90eXBlPSR7dHlwZX1gLFxyXG4gIG1ldGhvZDogYGdldGBcclxufSlcclxuXHJcbmV4cG9ydCBjb25zdCBBRERfRkVFREJBQ0sgPSB7XHJcbiAgdXJsOiBob3N0ICsgYGZlZWRiYWNrYCxcclxuICBtZXRob2Q6IGBwb3N0YFxyXG59XHJcblxyXG5leHBvcnQgY29uc3QgR0VUX1NUQVRJU1RJQ1MgPSB7XHJcbiAgdXJsOiBob3N0ICsgYGFkbWluL3N0YXRpc3RpY3NgLFxyXG4gIG1ldGhvZDogYGdldGBcclxufSJdLCJzb3VyY2VSb290IjoiIn0=