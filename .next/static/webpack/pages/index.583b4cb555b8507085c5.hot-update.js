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
/* harmony export */   "START_RESET_PASSWORD": function() { return /* binding */ START_RESET_PASSWORD; },
/* harmony export */   "VERIFY_PASSWORD_RESET": function() { return /* binding */ VERIFY_PASSWORD_RESET; },
/* harmony export */   "SET_NEW_PASSWORD": function() { return /* binding */ SET_NEW_PASSWORD; },
/* harmony export */   "GET_NEWS": function() { return /* binding */ GET_NEWS; },
/* harmony export */   "GET_MATCHES": function() { return /* binding */ GET_MATCHES; },
/* harmony export */   "GET_MATCHES_OF_NEXT_DAY": function() { return /* binding */ GET_MATCHES_OF_NEXT_DAY; },
/* harmony export */   "GET_PREDICTIONS": function() { return /* binding */ GET_PREDICTIONS; },
/* harmony export */   "GET_FEEDBACK": function() { return /* binding */ GET_FEEDBACK; },
/* harmony export */   "GET_MATCHES_BY_TYPE": function() { return /* binding */ GET_MATCHES_BY_TYPE; }
/* harmony export */ });
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./constants */ "./lib/constants.js");
/* module decorator */ module = __webpack_require__.hmd(module);

var AUTH_URL = _constants__WEBPACK_IMPORTED_MODULE_0__.host + "auth";
var ACCOUNT_URL = _constants__WEBPACK_IMPORTED_MODULE_0__.host + "account";
var REGISTER = {
  url: AUTH_URL + '/registration',
  method: 'post'
};
var LOGIN = {
  url: AUTH_URL + '/login',
  method: 'post'
};
var GET_ACCOUNT_INFO = {
  url: ACCOUNT_URL + '/info',
  method: 'get'
};
var START_RESET_PASSWORD = function START_RESET_PASSWORD(email) {
  return {
    url: AUTH_URL + "/password/reset?email=".concat(email),
    method: 'post'
  };
};
_c = START_RESET_PASSWORD;
var VERIFY_PASSWORD_RESET = {
  url: AUTH_URL + "/password/verify_code",
  method: 'put'
};
var SET_NEW_PASSWORD = {
  url: AUTH_URL + "/password/new_password ",
  method: 'put'
};
var GET_NEWS = {
  url: _constants__WEBPACK_IMPORTED_MODULE_0__.host + "admin/news",
  method: "get"
};
var GET_MATCHES = {
  url: _constants__WEBPACK_IMPORTED_MODULE_0__.host + "admin/match-of-the-day",
  method: "get"
};
var GET_MATCHES_OF_NEXT_DAY = {
  url: _constants__WEBPACK_IMPORTED_MODULE_0__.host + "admin/match-of-the-day?type=next_day",
  method: "get"
};
var GET_PREDICTIONS = {
  url: _constants__WEBPACK_IMPORTED_MODULE_0__.host + "admin/prediction",
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
    url: _constants__WEBPACK_IMPORTED_MODULE_0__.host + "admin/game?type=".concat(type),
    method: "get"
  };
};
_c3 = GET_MATCHES_BY_TYPE;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vbGliL3JlcXVlc3QtZGVzdGluYXRpb25zLmpzIl0sIm5hbWVzIjpbIkFVVEhfVVJMIiwiaG9zdCIsIkFDQ09VTlRfVVJMIiwiUkVHSVNURVIiLCJ1cmwiLCJtZXRob2QiLCJMT0dJTiIsIkdFVF9BQ0NPVU5UX0lORk8iLCJTVEFSVF9SRVNFVF9QQVNTV09SRCIsImVtYWlsIiwiVkVSSUZZX1BBU1NXT1JEX1JFU0VUIiwiU0VUX05FV19QQVNTV09SRCIsIkdFVF9ORVdTIiwiR0VUX01BVENIRVMiLCJHRVRfTUFUQ0hFU19PRl9ORVhUX0RBWSIsIkdFVF9QUkVESUNUSU9OUyIsIkdFVF9GRUVEQkFDSyIsImlkIiwiR0VUX01BVENIRVNfQllfVFlQRSIsInR5cGUiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFFQSxJQUFNQSxRQUFRLEdBQUdDLDRDQUFJLFNBQXJCO0FBQ0EsSUFBTUMsV0FBVyxHQUFHRCw0Q0FBSSxZQUF4QjtBQUVPLElBQU1FLFFBQVEsR0FBRztBQUNwQkMsS0FBRyxFQUFFSixRQUFRLEdBQUcsZUFESTtBQUVwQkssUUFBTSxFQUFFO0FBRlksQ0FBakI7QUFLQSxJQUFNQyxLQUFLLEdBQUc7QUFDakJGLEtBQUcsRUFBRUosUUFBUSxHQUFHLFFBREM7QUFFakJLLFFBQU0sRUFBRTtBQUZTLENBQWQ7QUFLQSxJQUFNRSxnQkFBZ0IsR0FBRztBQUM1QkgsS0FBRyxFQUFFRixXQUFXLEdBQUcsT0FEUztBQUU1QkcsUUFBTSxFQUFFO0FBRm9CLENBQXpCO0FBS0EsSUFBTUcsb0JBQW9CLEdBQUcsU0FBdkJBLG9CQUF1QixDQUFBQyxLQUFLO0FBQUEsU0FBSztBQUMxQ0wsT0FBRyxFQUFFSixRQUFRLG1DQUE0QlMsS0FBNUIsQ0FENkI7QUFFMUNKLFVBQU0sRUFBRTtBQUZrQyxHQUFMO0FBQUEsQ0FBbEM7S0FBTUcsb0I7QUFNTixJQUFNRSxxQkFBcUIsR0FBRztBQUNqQ04sS0FBRyxFQUFFSixRQUFRLDBCQURvQjtBQUVqQ0ssUUFBTSxFQUFFO0FBRnlCLENBQTlCO0FBS0EsSUFBTU0sZ0JBQWdCLEdBQUc7QUFDNUJQLEtBQUcsRUFBRUosUUFBUSw0QkFEZTtBQUU1QkssUUFBTSxFQUFFO0FBRm9CLENBQXpCO0FBS0EsSUFBTU8sUUFBUSxHQUFHO0FBQ3BCUixLQUFHLEVBQUVILDRDQUFJLGVBRFc7QUFFcEJJLFFBQU07QUFGYyxDQUFqQjtBQUtBLElBQU1RLFdBQVcsR0FBRztBQUN2QlQsS0FBRyxFQUFFSCw0Q0FBSSwyQkFEYztBQUV2QkksUUFBTTtBQUZpQixDQUFwQjtBQUtBLElBQU1TLHVCQUF1QixHQUFHO0FBQ25DVixLQUFHLEVBQUVILDRDQUFJLHlDQUQwQjtBQUVuQ0ksUUFBTTtBQUY2QixDQUFoQztBQUtBLElBQU1VLGVBQWUsR0FBRztBQUMzQlgsS0FBRyxFQUFFSCw0Q0FBSSxxQkFEa0I7QUFFM0JJLFFBQU07QUFGcUIsQ0FBeEI7QUFLQSxJQUFNVyxZQUFZLEdBQUcsU0FBZkEsWUFBZSxDQUFBQyxFQUFFO0FBQUEsU0FBSztBQUMvQmIsT0FBRyxFQUFFSCw0Q0FBSSxzQkFBZWdCLEVBQWYsc0NBRHNCO0FBRS9CWixVQUFNO0FBRnlCLEdBQUw7QUFBQSxDQUF2QjtNQUFNVyxZO0FBS04sSUFBTUUsbUJBQW1CLEdBQUcsU0FBdEJBLG1CQUFzQixDQUFBQyxJQUFJO0FBQUEsU0FBSztBQUN4Q2YsT0FBRyxFQUFFSCw0Q0FBSSw2QkFBc0JrQixJQUF0QixDQUQrQjtBQUV4Q2QsVUFBTTtBQUZrQyxHQUFMO0FBQUEsQ0FBaEM7TUFBTWEsbUIiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvaW5kZXguNTgzYjRjYjU1NWI4NTA3MDg1YzUuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IGhvc3QgfSBmcm9tIFwiLi9jb25zdGFudHNcIlxyXG5cclxuY29uc3QgQVVUSF9VUkwgPSBob3N0ICsgYGF1dGhgO1xyXG5jb25zdCBBQ0NPVU5UX1VSTCA9IGhvc3QgKyBgYWNjb3VudGBcclxuXHJcbmV4cG9ydCBjb25zdCBSRUdJU1RFUiA9IHtcclxuICAgIHVybDogQVVUSF9VUkwgKyAnL3JlZ2lzdHJhdGlvbicsXHJcbiAgICBtZXRob2Q6ICdwb3N0J1xyXG59XHJcblxyXG5leHBvcnQgY29uc3QgTE9HSU4gPSB7XHJcbiAgICB1cmw6IEFVVEhfVVJMICsgJy9sb2dpbicsXHJcbiAgICBtZXRob2Q6ICdwb3N0J1xyXG59XHJcblxyXG5leHBvcnQgY29uc3QgR0VUX0FDQ09VTlRfSU5GTyA9IHtcclxuICAgIHVybDogQUNDT1VOVF9VUkwgKyAnL2luZm8nLFxyXG4gICAgbWV0aG9kOiAnZ2V0J1xyXG59XHJcblxyXG5leHBvcnQgY29uc3QgU1RBUlRfUkVTRVRfUEFTU1dPUkQgPSBlbWFpbCA9PiAoe1xyXG4gICAgdXJsOiBBVVRIX1VSTCArIGAvcGFzc3dvcmQvcmVzZXQ/ZW1haWw9JHtlbWFpbH1gLFxyXG4gICAgbWV0aG9kOiAncG9zdCdcclxufSlcclxuXHJcblxyXG5leHBvcnQgY29uc3QgVkVSSUZZX1BBU1NXT1JEX1JFU0VUID0ge1xyXG4gICAgdXJsOiBBVVRIX1VSTCArIGAvcGFzc3dvcmQvdmVyaWZ5X2NvZGVgLFxyXG4gICAgbWV0aG9kOiAncHV0JyAgICBcclxufVxyXG5cclxuZXhwb3J0IGNvbnN0IFNFVF9ORVdfUEFTU1dPUkQgPSB7XHJcbiAgICB1cmw6IEFVVEhfVVJMICsgYC9wYXNzd29yZC9uZXdfcGFzc3dvcmQgYCxcclxuICAgIG1ldGhvZDogJ3B1dCcgICAgXHJcbn1cclxuXHJcbmV4cG9ydCBjb25zdCBHRVRfTkVXUyA9IHtcclxuICAgIHVybDogaG9zdCArIGBhZG1pbi9uZXdzYCxcclxuICAgIG1ldGhvZDogYGdldGBcclxufVxyXG5cclxuZXhwb3J0IGNvbnN0IEdFVF9NQVRDSEVTID0ge1xyXG4gICAgdXJsOiBob3N0ICsgYGFkbWluL21hdGNoLW9mLXRoZS1kYXlgLFxyXG4gICAgbWV0aG9kOiBgZ2V0YFxyXG59XHJcblxyXG5leHBvcnQgY29uc3QgR0VUX01BVENIRVNfT0ZfTkVYVF9EQVkgPSB7XHJcbiAgICB1cmw6IGhvc3QgKyBgYWRtaW4vbWF0Y2gtb2YtdGhlLWRheT90eXBlPW5leHRfZGF5YCxcclxuICAgIG1ldGhvZDogYGdldGBcclxufVxyXG5cclxuZXhwb3J0IGNvbnN0IEdFVF9QUkVESUNUSU9OUyA9IHtcclxuICAgIHVybDogaG9zdCArIGBhZG1pbi9wcmVkaWN0aW9uYCxcclxuICAgIG1ldGhvZDogYGdldGBcclxufVxyXG5cclxuZXhwb3J0IGNvbnN0IEdFVF9GRUVEQkFDSyA9IGlkID0+ICh7XHJcbiAgICB1cmw6IGhvc3QgKyBgZmVlZGJhY2svJHtpZH0/c29ydF9ieT1jcmVhdGVkX2F0Jm9yZGVyX2J5PWRlc2NgLFxyXG4gICAgbWV0aG9kOiBgZ2V0YFxyXG59KVxyXG5cclxuZXhwb3J0IGNvbnN0IEdFVF9NQVRDSEVTX0JZX1RZUEUgPSB0eXBlID0+ICh7XHJcbiAgICB1cmw6IGhvc3QgKyBgYWRtaW4vZ2FtZT90eXBlPSR7dHlwZX1gLFxyXG4gICAgbWV0aG9kOiBgZ2V0YFxyXG59KVxyXG4iXSwic291cmNlUm9vdCI6IiJ9