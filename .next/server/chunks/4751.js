exports.id = 4751;
exports.ids = [4751];
exports.modules = {

/***/ 955:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "WY": function() { return /* binding */ request; },
/* harmony export */   "ej": function() { return /* binding */ getCookie; },
/* harmony export */   "d8": function() { return /* binding */ setCookie; }
/* harmony export */ });
/* unused harmony export removeCookie */
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(2376);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_0__);
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }


const request = (destination, payload = null, options = null) => new Promise((rslv, rjct) => {
  let headers = {};

  if (options) {
    if (options.auth === true) {
      headers = _objectSpread(_objectSpread({}, headers), {}, {
        Authorization: `Bearer ${getCookie(`access-token`)}` || `` // for most of requests

      });
    }

    if (`headers` in options && options.headers instanceof Object) {
      headers = _objectSpread(_objectSpread({}, headers), options.headers);
    }
  }

  console.log(`start loading`);
  axios__WEBPACK_IMPORTED_MODULE_0___default()({
    method: destination.method,
    url: destination.url,
    headers,
    data: payload || {}
  }).then(rslv).catch(rjct).finally(() => console.log(`end loading`));
});
const getCookie = name => {
  var nameEQ = name + "=";
  var ca = document.cookie.split(';');

  for (var i = 0; i < ca.length; i++) {
    var c = ca[i];

    while (c.charAt(0) == ' ') {
      c = c.substring(1, c.length);
    }

    if (c.indexOf(nameEQ) == 0) return c.substring(nameEQ.length, c.length);
  }

  return null;
};
const removeCookie = name => {
  document.cookie = name + '=; Path=/; Expires=Thu, 01 Jan 1970 00:00:01 GMT;';
};
const setCookie = (name, value, days) => {
  let expires = "";

  if (days) {
    let date = new Date();
    date.setTime(date.getTime() + days * 24 * 60 * 60 * 1000);
    expires = "; expires=" + date.toUTCString();
  }

  document.cookie = name + "=" + (value || "") + expires + "; path=/";
};

/***/ }),

/***/ 9541:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "mZ": function() { return /* binding */ GET_FEEDBACK; },
  "Bd": function() { return /* binding */ GET_MATCHES; },
  "SH": function() { return /* binding */ GET_MATCHES_BY_TYPE; },
  "vK": function() { return /* binding */ GET_MATCHES_OF_NEXT_DAY; },
  "uA": function() { return /* binding */ GET_NEWS; },
  "s2": function() { return /* binding */ GET_PREDICTIONS; },
  "ym": function() { return /* binding */ LOGIN; },
  "Nz": function() { return /* binding */ REGISTER; },
  "MC": function() { return /* binding */ SET_NEW_PASSWORD; },
  "Cl": function() { return /* binding */ START_RESET_PASSWORD; },
  "cq": function() { return /* binding */ VERIFY_PASSWORD_RESET; }
});

;// CONCATENATED MODULE: ./lib/constants.js
const host = "http://localhost:1998/api";
;// CONCATENATED MODULE: ./lib/request-destinations.js

const AUTH_URL = host + `/auth`;
const REGISTER = {
  url: AUTH_URL + '/registration',
  method: 'post'
};
const LOGIN = {
  url: AUTH_URL + '/login',
  method: 'post'
};
const START_RESET_PASSWORD = email => ({
  url: AUTH_URL + `/password/reset?email=${email}`,
  method: 'post'
});
const VERIFY_PASSWORD_RESET = {
  url: AUTH_URL + `/password/verify_code`,
  method: 'put'
};
const SET_NEW_PASSWORD = {
  url: AUTH_URL + `/password/new_password `,
  method: 'put'
};
const GET_NEWS = {
  url: host + `/admin/news`,
  method: `get`
};
const GET_MATCHES = {
  url: host + `/admin/match-of-the-day`,
  method: `get`
};
const GET_MATCHES_OF_NEXT_DAY = {
  url: host + `/admin/match-of-the-day?type=next_day`,
  method: `get`
};
const GET_PREDICTIONS = {
  url: host + `/admin/prediction`,
  method: `get`
};
const GET_FEEDBACK = id => ({
  url: host + `/feedback/${id}?sort_by=created_at&order_by=desc`,
  method: `get`
});
const GET_MATCHES_BY_TYPE = type => ({
  url: host + `/admin/game?type=${type}`,
  method: `get`
});

/***/ })

};
;