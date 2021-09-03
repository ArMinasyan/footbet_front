self["webpackHotUpdate_N_E"]("pages/index",{

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
var GET_MATCHES_OF_SPECIFIC_DAY = {
  url: ACCOUNT_URL + "match-of-the-day?date=",
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vbGliL3JlcXVlc3QtZGVzdGluYXRpb25zLmpzIl0sIm5hbWVzIjpbIkFVVEhfVVJMIiwiaG9zdCIsIkFDQ09VTlRfVVJMIiwiUkVHSVNURVIiLCJ1cmwiLCJtZXRob2QiLCJMT0dJTiIsIkdFVF9BQ0NPVU5UX0lORk8iLCJDSEFOR0VfQUNDT1VOVF9JTkZPIiwiQ0hBTkdFX0FDQ09VTlRfSU1BR0UiLCJTVEFSVF9SRVNFVF9QQVNTV09SRCIsImVtYWlsIiwiVkVSSUZZX1BBU1NXT1JEX1JFU0VUIiwiU0VUX05FV19QQVNTV09SRCIsIkdFVF9ORVdTIiwiR0VUX01BVENIRVMiLCJHRVRfTUFUQ0hFU19PRl9TUEVDSUZJQ19EQVkiLCJHRVRfTUFUQ0hFU19PRl9ORVhUX0RBWSIsIkdFVF9QUkVESUNUSU9OUyIsIkdFVF9GRUVEQkFDSyIsImlkIiwiR0VUX01BVENIRVNfQllfVFlQRSIsInR5cGUiLCJBRERfRkVFREJBQ0siLCJHRVRfU1RBVElTVElDUyJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBSUEsSUFBTUEsUUFBUSxHQUFHQyw0Q0FBSSxVQUFyQjtBQUNBLElBQU1DLFdBQVcsR0FBR0QsNENBQUksYUFBeEI7QUFFTyxJQUFNRSxRQUFRLEdBQUc7QUFDdEJDLEtBQUcsRUFBRUosUUFBUSxHQUFHLGNBRE07QUFFdEJLLFFBQU0sRUFBRTtBQUZjLENBQWpCO0FBS0EsSUFBTUMsS0FBSyxHQUFHO0FBQ25CRixLQUFHLEVBQUVKLFFBQVEsR0FBRyxPQURHO0FBRW5CSyxRQUFNLEVBQUU7QUFGVyxDQUFkO0FBS0EsSUFBTUUsZ0JBQWdCLEdBQUc7QUFDOUJILEtBQUcsRUFBRUYsV0FBVyxHQUFHLE1BRFc7QUFFOUJHLFFBQU0sRUFBRTtBQUZzQixDQUF6QjtBQUtBLElBQU1HLG1CQUFtQixHQUFHO0FBQ2pDSixLQUFHLEVBQUVGLFdBQVcsR0FBRyxNQURjO0FBRWpDRyxRQUFNLEVBQUU7QUFGeUIsQ0FBNUI7QUFLQSxJQUFNSSxvQkFBb0IsR0FBRztBQUNsQ0wsS0FBRyxFQUFFRixXQUFXLEdBQUcsZUFEZTtBQUVsQ0csUUFBTSxFQUFFO0FBRjBCLENBQTdCO0FBS0EsSUFBTUssb0JBQW9CLEdBQUcsU0FBdkJBLG9CQUF1QixDQUFBQyxLQUFLO0FBQUEsU0FBSztBQUM1Q1AsT0FBRyxFQUFFSixRQUFRLGtDQUEyQlcsS0FBM0IsQ0FEK0I7QUFFNUNOLFVBQU0sRUFBRTtBQUZvQyxHQUFMO0FBQUEsQ0FBbEM7S0FBTUssb0I7QUFNTixJQUFNRSxxQkFBcUIsR0FBRztBQUNuQ1IsS0FBRyxFQUFFSixRQUFRLHlCQURzQjtBQUVuQ0ssUUFBTSxFQUFFO0FBRjJCLENBQTlCO0FBS0EsSUFBTVEsZ0JBQWdCLEdBQUc7QUFDOUJULEtBQUcsRUFBRUosUUFBUSwyQkFEaUI7QUFFOUJLLFFBQU0sRUFBRTtBQUZzQixDQUF6QjtBQUtBLElBQU1TLFFBQVEsR0FBRztBQUN0QlYsS0FBRyxFQUFFRixXQUFXLFNBRE07QUFFdEJHLFFBQU07QUFGZ0IsQ0FBakI7QUFLQSxJQUFNVSxXQUFXLEdBQUc7QUFDekJYLEtBQUcsRUFBRUYsV0FBVyxxQkFEUztBQUV6QkcsUUFBTTtBQUZtQixDQUFwQjtBQUtBLElBQU1XLDJCQUEyQixHQUFHO0FBQ3pDWixLQUFHLEVBQUVGLFdBQVcsMkJBRHlCO0FBRXpDRyxRQUFNO0FBRm1DLENBQXBDO0FBSUEsSUFBTVksdUJBQXVCLEdBQUc7QUFDckNiLEtBQUcsRUFBRUYsV0FBVyxtQ0FEcUI7QUFFckNHLFFBQU07QUFGK0IsQ0FBaEM7QUFLQSxJQUFNYSxlQUFlLEdBQUc7QUFDN0JkLEtBQUcsRUFBRUYsV0FBVyxlQURhO0FBRTdCRyxRQUFNO0FBRnVCLENBQXhCO0FBS0EsSUFBTWMsWUFBWSxHQUFHLFNBQWZBLFlBQWUsQ0FBQUMsRUFBRTtBQUFBLFNBQUs7QUFDakNoQixPQUFHLEVBQUVILDRDQUFJLHNCQUFlbUIsRUFBZixzQ0FEd0I7QUFFakNmLFVBQU07QUFGMkIsR0FBTDtBQUFBLENBQXZCO01BQU1jLFk7QUFLTixJQUFNRSxtQkFBbUIsR0FBRyxTQUF0QkEsbUJBQXNCLENBQUFDLElBQUk7QUFBQSxTQUFLO0FBQzFDbEIsT0FBRyxFQUFFRixXQUFXLHVCQUFnQm9CLElBQWhCLENBRDBCO0FBRTFDakIsVUFBTTtBQUZvQyxHQUFMO0FBQUEsQ0FBaEM7TUFBTWdCLG1CO0FBS04sSUFBTUUsWUFBWSxHQUFHO0FBQzFCbkIsS0FBRyxFQUFFSCw0Q0FBSSxhQURpQjtBQUUxQkksUUFBTTtBQUZvQixDQUFyQjtBQUtBLElBQU1tQixjQUFjLEdBQUc7QUFDNUJwQixLQUFHLEVBQUVILDRDQUFJLHFCQURtQjtBQUU1QkksUUFBTTtBQUZzQixDQUF2QiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9pbmRleC4yMzhkN2Y0ZTQ4YWFmOWNmOWZiOC5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtcclxuICBob3N0XHJcbn0gZnJvbSBcIi4vY29uc3RhbnRzXCJcclxuXHJcbmNvbnN0IEFVVEhfVVJMID0gaG9zdCArIGBhdXRoL2A7XHJcbmNvbnN0IEFDQ09VTlRfVVJMID0gaG9zdCArIGBhY2NvdW50L2BcclxuXHJcbmV4cG9ydCBjb25zdCBSRUdJU1RFUiA9IHtcclxuICB1cmw6IEFVVEhfVVJMICsgJ3JlZ2lzdHJhdGlvbicsXHJcbiAgbWV0aG9kOiAncG9zdCdcclxufVxyXG5cclxuZXhwb3J0IGNvbnN0IExPR0lOID0ge1xyXG4gIHVybDogQVVUSF9VUkwgKyAnbG9naW4nLFxyXG4gIG1ldGhvZDogJ3Bvc3QnXHJcbn1cclxuXHJcbmV4cG9ydCBjb25zdCBHRVRfQUNDT1VOVF9JTkZPID0ge1xyXG4gIHVybDogQUNDT1VOVF9VUkwgKyAnaW5mbycsXHJcbiAgbWV0aG9kOiAnZ2V0J1xyXG59XHJcblxyXG5leHBvcnQgY29uc3QgQ0hBTkdFX0FDQ09VTlRfSU5GTyA9IHtcclxuICB1cmw6IEFDQ09VTlRfVVJMICsgJ2luZm8nLFxyXG4gIG1ldGhvZDogJ3B1dCdcclxufVxyXG5cclxuZXhwb3J0IGNvbnN0IENIQU5HRV9BQ0NPVU5UX0lNQUdFID0ge1xyXG4gIHVybDogQUNDT1VOVF9VUkwgKyAncHJvZmlsZS1pbWFnZScsXHJcbiAgbWV0aG9kOiAncG9zdCdcclxufVxyXG5cclxuZXhwb3J0IGNvbnN0IFNUQVJUX1JFU0VUX1BBU1NXT1JEID0gZW1haWwgPT4gKHtcclxuICB1cmw6IEFVVEhfVVJMICsgYHBhc3N3b3JkL3Jlc2V0P2VtYWlsPSR7ZW1haWx9YCxcclxuICBtZXRob2Q6ICdwb3N0J1xyXG59KVxyXG5cclxuXHJcbmV4cG9ydCBjb25zdCBWRVJJRllfUEFTU1dPUkRfUkVTRVQgPSB7XHJcbiAgdXJsOiBBVVRIX1VSTCArIGBwYXNzd29yZC92ZXJpZnlfY29kZWAsXHJcbiAgbWV0aG9kOiAncHV0J1xyXG59XHJcblxyXG5leHBvcnQgY29uc3QgU0VUX05FV19QQVNTV09SRCA9IHtcclxuICB1cmw6IEFVVEhfVVJMICsgYHBhc3N3b3JkL25ld19wYXNzd29yZCBgLFxyXG4gIG1ldGhvZDogJ3B1dCdcclxufVxyXG5cclxuZXhwb3J0IGNvbnN0IEdFVF9ORVdTID0ge1xyXG4gIHVybDogQUNDT1VOVF9VUkwgKyBgbmV3c2AsXHJcbiAgbWV0aG9kOiBgZ2V0YFxyXG59XHJcblxyXG5leHBvcnQgY29uc3QgR0VUX01BVENIRVMgPSB7XHJcbiAgdXJsOiBBQ0NPVU5UX1VSTCArIGBtYXRjaC1vZi10aGUtZGF5YCxcclxuICBtZXRob2Q6IGBnZXRgXHJcbn1cclxuXHJcbmV4cG9ydCBjb25zdCBHRVRfTUFUQ0hFU19PRl9TUEVDSUZJQ19EQVkgPSB7XHJcbiAgdXJsOiBBQ0NPVU5UX1VSTCArIGBtYXRjaC1vZi10aGUtZGF5P2RhdGU9YCxcclxuICBtZXRob2Q6IGBnZXRgXHJcbn1cclxuZXhwb3J0IGNvbnN0IEdFVF9NQVRDSEVTX09GX05FWFRfREFZID0ge1xyXG4gIHVybDogQUNDT1VOVF9VUkwgKyBgbWF0Y2gtb2YtdGhlLWRheT90eXBlPW5leHRfZGF5YCxcclxuICBtZXRob2Q6IGBnZXRgXHJcbn1cclxuXHJcbmV4cG9ydCBjb25zdCBHRVRfUFJFRElDVElPTlMgPSB7XHJcbiAgdXJsOiBBQ0NPVU5UX1VSTCArIGBwcmVkaWN0aW9uYCxcclxuICBtZXRob2Q6IGBnZXRgXHJcbn1cclxuXHJcbmV4cG9ydCBjb25zdCBHRVRfRkVFREJBQ0sgPSBpZCA9PiAoe1xyXG4gIHVybDogaG9zdCArIGBmZWVkYmFjay8ke2lkfT9zb3J0X2J5PWNyZWF0ZWRfYXQmb3JkZXJfYnk9ZGVzY2AsXHJcbiAgbWV0aG9kOiBgZ2V0YFxyXG59KVxyXG5cclxuZXhwb3J0IGNvbnN0IEdFVF9NQVRDSEVTX0JZX1RZUEUgPSB0eXBlID0+ICh7XHJcbiAgdXJsOiBBQ0NPVU5UX1VSTCArIGBnYW1lP3R5cGU9JHt0eXBlfWAsXHJcbiAgbWV0aG9kOiBgZ2V0YFxyXG59KVxyXG5cclxuZXhwb3J0IGNvbnN0IEFERF9GRUVEQkFDSyA9IHtcclxuICB1cmw6IGhvc3QgKyBgZmVlZGJhY2tgLFxyXG4gIG1ldGhvZDogYHBvc3RgXHJcbn1cclxuXHJcbmV4cG9ydCBjb25zdCBHRVRfU1RBVElTVElDUyA9IHtcclxuICB1cmw6IGhvc3QgKyBgYWRtaW4vc3RhdGlzdGljc2AsXHJcbiAgbWV0aG9kOiBgZ2V0YFxyXG59Il0sInNvdXJjZVJvb3QiOiIifQ==