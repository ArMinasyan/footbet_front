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
/* harmony export */   "GET_MATCHES_BY_TYPE": function() { return /* binding */ GET_MATCHES_BY_TYPE; }
/* harmony export */ });
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./constants */ "./lib/constants.js");
/* module decorator */ module = __webpack_require__.hmd(module);

var AUTH_URL = _constants__WEBPACK_IMPORTED_MODULE_0__.host + "auth";
var ACCOUNT_URL = _constants__WEBPACK_IMPORTED_MODULE_0__.host + "account";
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vbGliL3JlcXVlc3QtZGVzdGluYXRpb25zLmpzIl0sIm5hbWVzIjpbIkFVVEhfVVJMIiwiaG9zdCIsIkFDQ09VTlRfVVJMIiwiUkVHSVNURVIiLCJ1cmwiLCJtZXRob2QiLCJMT0dJTiIsIkdFVF9BQ0NPVU5UX0lORk8iLCJDSEFOR0VfQUNDT1VOVF9JTkZPIiwiQ0hBTkdFX0FDQ09VTlRfSU1BR0UiLCJTVEFSVF9SRVNFVF9QQVNTV09SRCIsImVtYWlsIiwiVkVSSUZZX1BBU1NXT1JEX1JFU0VUIiwiU0VUX05FV19QQVNTV09SRCIsIkdFVF9ORVdTIiwiR0VUX01BVENIRVMiLCJHRVRfTUFUQ0hFU19PRl9ORVhUX0RBWSIsIkdFVF9QUkVESUNUSU9OUyIsIkdFVF9GRUVEQkFDSyIsImlkIiwiR0VUX01BVENIRVNfQllfVFlQRSIsInR5cGUiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUVBLElBQU1BLFFBQVEsR0FBR0MsNENBQUksU0FBckI7QUFDQSxJQUFNQyxXQUFXLEdBQUdELDRDQUFJLFlBQXhCO0FBRU8sSUFBTUUsUUFBUSxHQUFHO0FBQ3RCQyxLQUFHLEVBQUVKLFFBQVEsR0FBRyxjQURNO0FBRXRCSyxRQUFNLEVBQUU7QUFGYyxDQUFqQjtBQUtBLElBQU1DLEtBQUssR0FBRztBQUNuQkYsS0FBRyxFQUFFSixRQUFRLEdBQUcsT0FERztBQUVuQkssUUFBTSxFQUFFO0FBRlcsQ0FBZDtBQUtBLElBQU1FLGdCQUFnQixHQUFHO0FBQzlCSCxLQUFHLEVBQUVGLFdBQVcsR0FBRyxNQURXO0FBRTlCRyxRQUFNLEVBQUU7QUFGc0IsQ0FBekI7QUFLQSxJQUFNRyxtQkFBbUIsR0FBRztBQUNqQ0osS0FBRyxFQUFFRixXQUFXLEdBQUcsTUFEYztBQUVqQ0csUUFBTSxFQUFFO0FBRnlCLENBQTVCO0FBS0EsSUFBTUksb0JBQW9CLEdBQUc7QUFDbENMLEtBQUcsRUFBRUYsV0FBVyxHQUFHLGVBRGU7QUFFbENHLFFBQU0sRUFBRTtBQUYwQixDQUE3QjtBQUtBLElBQU1LLG9CQUFvQixHQUFHLFNBQXZCQSxvQkFBdUIsQ0FBQUMsS0FBSztBQUFBLFNBQUs7QUFDNUNQLE9BQUcsRUFBRUosUUFBUSxrQ0FBMkJXLEtBQTNCLENBRCtCO0FBRTVDTixVQUFNLEVBQUU7QUFGb0MsR0FBTDtBQUFBLENBQWxDO0tBQU1LLG9CO0FBTU4sSUFBTUUscUJBQXFCLEdBQUc7QUFDbkNSLEtBQUcsRUFBRUosUUFBUSx5QkFEc0I7QUFFbkNLLFFBQU0sRUFBRTtBQUYyQixDQUE5QjtBQUtBLElBQU1RLGdCQUFnQixHQUFHO0FBQzlCVCxLQUFHLEVBQUVKLFFBQVEsMkJBRGlCO0FBRTlCSyxRQUFNLEVBQUU7QUFGc0IsQ0FBekI7QUFLQSxJQUFNUyxRQUFRLEdBQUc7QUFDcEJWLEtBQUcsRUFBRUgsNENBQUksZUFEVztBQUVwQkksUUFBTTtBQUZjLENBQWpCO0FBS0EsSUFBTVUsV0FBVyxHQUFHO0FBQ3ZCWCxLQUFHLEVBQUVILDRDQUFJLDJCQURjO0FBRXZCSSxRQUFNO0FBRmlCLENBQXBCO0FBS0EsSUFBTVcsdUJBQXVCLEdBQUc7QUFDbkNaLEtBQUcsRUFBRUgsNENBQUkseUNBRDBCO0FBRW5DSSxRQUFNO0FBRjZCLENBQWhDO0FBS0EsSUFBTVksZUFBZSxHQUFHO0FBQzNCYixLQUFHLEVBQUVILDRDQUFJLHFCQURrQjtBQUUzQkksUUFBTTtBQUZxQixDQUF4QjtBQUtBLElBQU1hLFlBQVksR0FBRyxTQUFmQSxZQUFlLENBQUFDLEVBQUU7QUFBQSxTQUFLO0FBQy9CZixPQUFHLEVBQUVILDRDQUFJLHNCQUFla0IsRUFBZixzQ0FEc0I7QUFFL0JkLFVBQU07QUFGeUIsR0FBTDtBQUFBLENBQXZCO01BQU1hLFk7QUFLTixJQUFNRSxtQkFBbUIsR0FBRyxTQUF0QkEsbUJBQXNCLENBQUFDLElBQUk7QUFBQSxTQUFLO0FBQ3hDakIsT0FBRyxFQUFFSCw0Q0FBSSw2QkFBc0JvQixJQUF0QixDQUQrQjtBQUV4Q2hCLFVBQU07QUFGa0MsR0FBTDtBQUFBLENBQWhDO01BQU1lLG1CIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL19hcHAuMDljNDA1ODc2MGQwNzcyODljMWEuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7aG9zdH0gZnJvbSBcIi4vY29uc3RhbnRzXCJcclxuXHJcbmNvbnN0IEFVVEhfVVJMID0gaG9zdCArIGBhdXRoYDtcclxuY29uc3QgQUNDT1VOVF9VUkwgPSBob3N0ICsgYGFjY291bnRgXHJcblxyXG5leHBvcnQgY29uc3QgUkVHSVNURVIgPSB7XHJcbiAgdXJsOiBBVVRIX1VSTCArICdyZWdpc3RyYXRpb24nLFxyXG4gIG1ldGhvZDogJ3Bvc3QnXHJcbn1cclxuXHJcbmV4cG9ydCBjb25zdCBMT0dJTiA9IHtcclxuICB1cmw6IEFVVEhfVVJMICsgJ2xvZ2luJyxcclxuICBtZXRob2Q6ICdwb3N0J1xyXG59XHJcblxyXG5leHBvcnQgY29uc3QgR0VUX0FDQ09VTlRfSU5GTyA9IHtcclxuICB1cmw6IEFDQ09VTlRfVVJMICsgJ2luZm8nLFxyXG4gIG1ldGhvZDogJ2dldCdcclxufVxyXG5cclxuZXhwb3J0IGNvbnN0IENIQU5HRV9BQ0NPVU5UX0lORk8gPSB7XHJcbiAgdXJsOiBBQ0NPVU5UX1VSTCArICdpbmZvJyxcclxuICBtZXRob2Q6ICdwdXQnXHJcbn1cclxuXHJcbmV4cG9ydCBjb25zdCBDSEFOR0VfQUNDT1VOVF9JTUFHRSA9IHtcclxuICB1cmw6IEFDQ09VTlRfVVJMICsgJ3Byb2ZpbGUtaW1hZ2UnLFxyXG4gIG1ldGhvZDogJ3Bvc3QnXHJcbn1cclxuXHJcbmV4cG9ydCBjb25zdCBTVEFSVF9SRVNFVF9QQVNTV09SRCA9IGVtYWlsID0+ICh7XHJcbiAgdXJsOiBBVVRIX1VSTCArIGBwYXNzd29yZC9yZXNldD9lbWFpbD0ke2VtYWlsfWAsXHJcbiAgbWV0aG9kOiAncG9zdCdcclxufSlcclxuXHJcblxyXG5leHBvcnQgY29uc3QgVkVSSUZZX1BBU1NXT1JEX1JFU0VUID0ge1xyXG4gIHVybDogQVVUSF9VUkwgKyBgcGFzc3dvcmQvdmVyaWZ5X2NvZGVgLFxyXG4gIG1ldGhvZDogJ3B1dCdcclxufVxyXG5cclxuZXhwb3J0IGNvbnN0IFNFVF9ORVdfUEFTU1dPUkQgPSB7XHJcbiAgdXJsOiBBVVRIX1VSTCArIGBwYXNzd29yZC9uZXdfcGFzc3dvcmQgYCxcclxuICBtZXRob2Q6ICdwdXQnXHJcbn1cclxuXHJcbmV4cG9ydCBjb25zdCBHRVRfTkVXUyA9IHtcclxuICAgIHVybDogaG9zdCArIGBhZG1pbi9uZXdzYCxcclxuICAgIG1ldGhvZDogYGdldGBcclxufVxyXG5cclxuZXhwb3J0IGNvbnN0IEdFVF9NQVRDSEVTID0ge1xyXG4gICAgdXJsOiBob3N0ICsgYGFkbWluL21hdGNoLW9mLXRoZS1kYXlgLFxyXG4gICAgbWV0aG9kOiBgZ2V0YFxyXG59XHJcblxyXG5leHBvcnQgY29uc3QgR0VUX01BVENIRVNfT0ZfTkVYVF9EQVkgPSB7XHJcbiAgICB1cmw6IGhvc3QgKyBgYWRtaW4vbWF0Y2gtb2YtdGhlLWRheT90eXBlPW5leHRfZGF5YCxcclxuICAgIG1ldGhvZDogYGdldGBcclxufVxyXG5cclxuZXhwb3J0IGNvbnN0IEdFVF9QUkVESUNUSU9OUyA9IHtcclxuICAgIHVybDogaG9zdCArIGBhZG1pbi9wcmVkaWN0aW9uYCxcclxuICAgIG1ldGhvZDogYGdldGBcclxufVxyXG5cclxuZXhwb3J0IGNvbnN0IEdFVF9GRUVEQkFDSyA9IGlkID0+ICh7XHJcbiAgICB1cmw6IGhvc3QgKyBgZmVlZGJhY2svJHtpZH0/c29ydF9ieT1jcmVhdGVkX2F0Jm9yZGVyX2J5PWRlc2NgLFxyXG4gICAgbWV0aG9kOiBgZ2V0YFxyXG59KVxyXG5cclxuZXhwb3J0IGNvbnN0IEdFVF9NQVRDSEVTX0JZX1RZUEUgPSB0eXBlID0+ICh7XHJcbiAgICB1cmw6IGhvc3QgKyBgYWRtaW4vZ2FtZT90eXBlPSR7dHlwZX1gLFxyXG4gICAgbWV0aG9kOiBgZ2V0YFxyXG59KVxyXG4iXSwic291cmNlUm9vdCI6IiJ9