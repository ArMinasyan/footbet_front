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
var REGISTER = {
  url: AUTH_URL + '/registration',
  method: 'post'
};
var LOGIN = {
  url: AUTH_URL + '/login',
  method: 'post'
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vbGliL3JlcXVlc3QtZGVzdGluYXRpb25zLmpzIl0sIm5hbWVzIjpbIkFVVEhfVVJMIiwiaG9zdCIsIlJFR0lTVEVSIiwidXJsIiwibWV0aG9kIiwiTE9HSU4iLCJTVEFSVF9SRVNFVF9QQVNTV09SRCIsImVtYWlsIiwiVkVSSUZZX1BBU1NXT1JEX1JFU0VUIiwiU0VUX05FV19QQVNTV09SRCIsIkdFVF9ORVdTIiwiR0VUX01BVENIRVMiLCJHRVRfTUFUQ0hFU19PRl9ORVhUX0RBWSIsIkdFVF9QUkVESUNUSU9OUyIsIkdFVF9GRUVEQkFDSyIsImlkIiwiR0VUX01BVENIRVNfQllfVFlQRSIsInR5cGUiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUVBLElBQU1BLFFBQVEsR0FBR0MsNENBQUksU0FBckI7QUFFTyxJQUFNQyxRQUFRLEdBQUc7QUFDcEJDLEtBQUcsRUFBRUgsUUFBUSxHQUFHLGVBREk7QUFFcEJJLFFBQU0sRUFBRTtBQUZZLENBQWpCO0FBS0EsSUFBTUMsS0FBSyxHQUFHO0FBQ2pCRixLQUFHLEVBQUVILFFBQVEsR0FBRyxRQURDO0FBRWpCSSxRQUFNLEVBQUU7QUFGUyxDQUFkO0FBS0EsSUFBTUUsb0JBQW9CLEdBQUcsU0FBdkJBLG9CQUF1QixDQUFBQyxLQUFLO0FBQUEsU0FBSztBQUMxQ0osT0FBRyxFQUFFSCxRQUFRLG1DQUE0Qk8sS0FBNUIsQ0FENkI7QUFFMUNILFVBQU0sRUFBRTtBQUZrQyxHQUFMO0FBQUEsQ0FBbEM7S0FBTUUsb0I7QUFNTixJQUFNRSxxQkFBcUIsR0FBRztBQUNqQ0wsS0FBRyxFQUFFSCxRQUFRLDBCQURvQjtBQUVqQ0ksUUFBTSxFQUFFO0FBRnlCLENBQTlCO0FBS0EsSUFBTUssZ0JBQWdCLEdBQUc7QUFDNUJOLEtBQUcsRUFBRUgsUUFBUSw0QkFEZTtBQUU1QkksUUFBTSxFQUFFO0FBRm9CLENBQXpCO0FBS0EsSUFBTU0sUUFBUSxHQUFHO0FBQ3BCUCxLQUFHLEVBQUVGLDRDQUFJLGVBRFc7QUFFcEJHLFFBQU07QUFGYyxDQUFqQjtBQUtBLElBQU1PLFdBQVcsR0FBRztBQUN2QlIsS0FBRyxFQUFFRiw0Q0FBSSwyQkFEYztBQUV2QkcsUUFBTTtBQUZpQixDQUFwQjtBQUtBLElBQU1RLHVCQUF1QixHQUFHO0FBQ25DVCxLQUFHLEVBQUVGLDRDQUFJLHlDQUQwQjtBQUVuQ0csUUFBTTtBQUY2QixDQUFoQztBQUtBLElBQU1TLGVBQWUsR0FBRztBQUMzQlYsS0FBRyxFQUFFRiw0Q0FBSSxxQkFEa0I7QUFFM0JHLFFBQU07QUFGcUIsQ0FBeEI7QUFLQSxJQUFNVSxZQUFZLEdBQUcsU0FBZkEsWUFBZSxDQUFBQyxFQUFFO0FBQUEsU0FBSztBQUMvQlosT0FBRyxFQUFFRiw0Q0FBSSxzQkFBZWMsRUFBZixzQ0FEc0I7QUFFL0JYLFVBQU07QUFGeUIsR0FBTDtBQUFBLENBQXZCO01BQU1VLFk7QUFLTixJQUFNRSxtQkFBbUIsR0FBRyxTQUF0QkEsbUJBQXNCLENBQUFDLElBQUk7QUFBQSxTQUFLO0FBQ3hDZCxPQUFHLEVBQUVGLDRDQUFJLDZCQUFzQmdCLElBQXRCLENBRCtCO0FBRXhDYixVQUFNO0FBRmtDLEdBQUw7QUFBQSxDQUFoQztNQUFNWSxtQiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9pbmRleC43MmJlNmM4MDc4OWM2NGFiMWVkMS5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgaG9zdCB9IGZyb20gXCIuL2NvbnN0YW50c1wiXHJcblxyXG5jb25zdCBBVVRIX1VSTCA9IGhvc3QgKyBgYXV0aGA7XHJcblxyXG5leHBvcnQgY29uc3QgUkVHSVNURVIgPSB7XHJcbiAgICB1cmw6IEFVVEhfVVJMICsgJy9yZWdpc3RyYXRpb24nLFxyXG4gICAgbWV0aG9kOiAncG9zdCdcclxufVxyXG5cclxuZXhwb3J0IGNvbnN0IExPR0lOID0ge1xyXG4gICAgdXJsOiBBVVRIX1VSTCArICcvbG9naW4nLFxyXG4gICAgbWV0aG9kOiAncG9zdCdcclxufVxyXG5cclxuZXhwb3J0IGNvbnN0IFNUQVJUX1JFU0VUX1BBU1NXT1JEID0gZW1haWwgPT4gKHtcclxuICAgIHVybDogQVVUSF9VUkwgKyBgL3Bhc3N3b3JkL3Jlc2V0P2VtYWlsPSR7ZW1haWx9YCxcclxuICAgIG1ldGhvZDogJ3Bvc3QnXHJcbn0pXHJcblxyXG5cclxuZXhwb3J0IGNvbnN0IFZFUklGWV9QQVNTV09SRF9SRVNFVCA9IHtcclxuICAgIHVybDogQVVUSF9VUkwgKyBgL3Bhc3N3b3JkL3ZlcmlmeV9jb2RlYCxcclxuICAgIG1ldGhvZDogJ3B1dCcgICAgXHJcbn1cclxuXHJcbmV4cG9ydCBjb25zdCBTRVRfTkVXX1BBU1NXT1JEID0ge1xyXG4gICAgdXJsOiBBVVRIX1VSTCArIGAvcGFzc3dvcmQvbmV3X3Bhc3N3b3JkIGAsXHJcbiAgICBtZXRob2Q6ICdwdXQnICAgIFxyXG59XHJcblxyXG5leHBvcnQgY29uc3QgR0VUX05FV1MgPSB7XHJcbiAgICB1cmw6IGhvc3QgKyBgYWRtaW4vbmV3c2AsXHJcbiAgICBtZXRob2Q6IGBnZXRgXHJcbn1cclxuXHJcbmV4cG9ydCBjb25zdCBHRVRfTUFUQ0hFUyA9IHtcclxuICAgIHVybDogaG9zdCArIGBhZG1pbi9tYXRjaC1vZi10aGUtZGF5YCxcclxuICAgIG1ldGhvZDogYGdldGBcclxufVxyXG5cclxuZXhwb3J0IGNvbnN0IEdFVF9NQVRDSEVTX09GX05FWFRfREFZID0ge1xyXG4gICAgdXJsOiBob3N0ICsgYGFkbWluL21hdGNoLW9mLXRoZS1kYXk/dHlwZT1uZXh0X2RheWAsXHJcbiAgICBtZXRob2Q6IGBnZXRgXHJcbn1cclxuXHJcbmV4cG9ydCBjb25zdCBHRVRfUFJFRElDVElPTlMgPSB7XHJcbiAgICB1cmw6IGhvc3QgKyBgYWRtaW4vcHJlZGljdGlvbmAsXHJcbiAgICBtZXRob2Q6IGBnZXRgXHJcbn1cclxuXHJcbmV4cG9ydCBjb25zdCBHRVRfRkVFREJBQ0sgPSBpZCA9PiAoe1xyXG4gICAgdXJsOiBob3N0ICsgYGZlZWRiYWNrLyR7aWR9P3NvcnRfYnk9Y3JlYXRlZF9hdCZvcmRlcl9ieT1kZXNjYCxcclxuICAgIG1ldGhvZDogYGdldGBcclxufSlcclxuXHJcbmV4cG9ydCBjb25zdCBHRVRfTUFUQ0hFU19CWV9UWVBFID0gdHlwZSA9PiAoe1xyXG4gICAgdXJsOiBob3N0ICsgYGFkbWluL2dhbWU/dHlwZT0ke3R5cGV9YCxcclxuICAgIG1ldGhvZDogYGdldGBcclxufSlcclxuIl0sInNvdXJjZVJvb3QiOiIifQ==