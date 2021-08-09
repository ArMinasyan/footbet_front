(function() {
var exports = {};
exports.id = "pages/_app";
exports.ids = ["pages/_app"];
exports.modules = {

/***/ "./i18n.json":
/*!*******************!*\
  !*** ./i18n.json ***!
  \*******************/
/***/ (function(module) {

"use strict";
module.exports = JSON.parse('{"locales":["rs","am","en","deu","fr","esp"],"defaultLocale":"rs","pages":{"*":["common"],"/":["home"],"/testimonials":["testimonials"],"/matches":["home"],"/games":["games"],"/prediction":["prediction"],"/statistics":["statistics"],"/aboutUs":["aboutUs"],"/personal":["personal"]}}');

/***/ }),

/***/ "./locales lazy recursive ^\\.\\/.*\\/.*$":
/*!*****************************************************!*\
  !*** ./locales/ lazy ^\.\/.*\/.*$ namespace object ***!
  \*****************************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

var map = {
	"./am/aboutUs": [
		"./locales/am/aboutUs.json",
		"locales_am_aboutUs_json"
	],
	"./am/aboutUs.json": [
		"./locales/am/aboutUs.json",
		"locales_am_aboutUs_json"
	],
	"./am/common": [
		"./locales/am/common.json",
		"locales_am_common_json"
	],
	"./am/common.json": [
		"./locales/am/common.json",
		"locales_am_common_json"
	],
	"./am/games": [
		"./locales/am/games.json",
		"locales_am_games_json"
	],
	"./am/games.json": [
		"./locales/am/games.json",
		"locales_am_games_json"
	],
	"./am/home": [
		"./locales/am/home.json",
		"locales_am_home_json"
	],
	"./am/home.json": [
		"./locales/am/home.json",
		"locales_am_home_json"
	],
	"./am/personal": [
		"./locales/am/personal.json",
		"locales_am_personal_json"
	],
	"./am/personal.json": [
		"./locales/am/personal.json",
		"locales_am_personal_json"
	],
	"./am/prediction": [
		"./locales/am/prediction.json",
		"locales_am_prediction_json"
	],
	"./am/prediction.json": [
		"./locales/am/prediction.json",
		"locales_am_prediction_json"
	],
	"./am/statistics": [
		"./locales/am/statistics.json",
		"locales_am_statistics_json"
	],
	"./am/statistics.json": [
		"./locales/am/statistics.json",
		"locales_am_statistics_json"
	],
	"./am/testimonials": [
		"./locales/am/testimonials.json",
		"locales_am_testimonials_json"
	],
	"./am/testimonials.json": [
		"./locales/am/testimonials.json",
		"locales_am_testimonials_json"
	],
	"./deu/aboutUs": [
		"./locales/deu/aboutUs.json",
		"locales_deu_aboutUs_json"
	],
	"./deu/aboutUs.json": [
		"./locales/deu/aboutUs.json",
		"locales_deu_aboutUs_json"
	],
	"./deu/common": [
		"./locales/deu/common.json",
		"locales_deu_common_json"
	],
	"./deu/common.json": [
		"./locales/deu/common.json",
		"locales_deu_common_json"
	],
	"./deu/games": [
		"./locales/deu/games.json",
		"locales_deu_games_json"
	],
	"./deu/games.json": [
		"./locales/deu/games.json",
		"locales_deu_games_json"
	],
	"./deu/home": [
		"./locales/deu/home.json",
		"locales_deu_home_json"
	],
	"./deu/home.json": [
		"./locales/deu/home.json",
		"locales_deu_home_json"
	],
	"./deu/personal": [
		"./locales/deu/personal.json",
		"locales_deu_personal_json"
	],
	"./deu/personal.json": [
		"./locales/deu/personal.json",
		"locales_deu_personal_json"
	],
	"./deu/prediction": [
		"./locales/deu/prediction.json",
		"locales_deu_prediction_json"
	],
	"./deu/prediction.json": [
		"./locales/deu/prediction.json",
		"locales_deu_prediction_json"
	],
	"./deu/statistics": [
		"./locales/deu/statistics.json",
		"locales_deu_statistics_json"
	],
	"./deu/statistics.json": [
		"./locales/deu/statistics.json",
		"locales_deu_statistics_json"
	],
	"./deu/testimonials": [
		"./locales/deu/testimonials.json",
		"locales_deu_testimonials_json"
	],
	"./deu/testimonials.json": [
		"./locales/deu/testimonials.json",
		"locales_deu_testimonials_json"
	],
	"./en/aboutUs": [
		"./locales/en/aboutUs.json",
		"locales_en_aboutUs_json"
	],
	"./en/aboutUs.json": [
		"./locales/en/aboutUs.json",
		"locales_en_aboutUs_json"
	],
	"./en/common": [
		"./locales/en/common.json",
		"locales_en_common_json"
	],
	"./en/common.json": [
		"./locales/en/common.json",
		"locales_en_common_json"
	],
	"./en/games": [
		"./locales/en/games.json",
		"locales_en_games_json"
	],
	"./en/games.json": [
		"./locales/en/games.json",
		"locales_en_games_json"
	],
	"./en/home": [
		"./locales/en/home.json",
		"locales_en_home_json"
	],
	"./en/home.json": [
		"./locales/en/home.json",
		"locales_en_home_json"
	],
	"./en/personal": [
		"./locales/en/personal.json",
		"locales_en_personal_json"
	],
	"./en/personal.json": [
		"./locales/en/personal.json",
		"locales_en_personal_json"
	],
	"./en/prediction": [
		"./locales/en/prediction.json",
		"locales_en_prediction_json"
	],
	"./en/prediction.json": [
		"./locales/en/prediction.json",
		"locales_en_prediction_json"
	],
	"./en/statistics": [
		"./locales/en/statistics.json",
		"locales_en_statistics_json"
	],
	"./en/statistics.json": [
		"./locales/en/statistics.json",
		"locales_en_statistics_json"
	],
	"./en/testimonials": [
		"./locales/en/testimonials.json",
		"locales_en_testimonials_json"
	],
	"./en/testimonials.json": [
		"./locales/en/testimonials.json",
		"locales_en_testimonials_json"
	],
	"./esp/aboutUs": [
		"./locales/esp/aboutUs.json",
		"locales_esp_aboutUs_json"
	],
	"./esp/aboutUs.json": [
		"./locales/esp/aboutUs.json",
		"locales_esp_aboutUs_json"
	],
	"./esp/common": [
		"./locales/esp/common.json",
		"locales_esp_common_json"
	],
	"./esp/common.json": [
		"./locales/esp/common.json",
		"locales_esp_common_json"
	],
	"./esp/games": [
		"./locales/esp/games.json",
		"locales_esp_games_json"
	],
	"./esp/games.json": [
		"./locales/esp/games.json",
		"locales_esp_games_json"
	],
	"./esp/home": [
		"./locales/esp/home.json",
		"locales_esp_home_json"
	],
	"./esp/home.json": [
		"./locales/esp/home.json",
		"locales_esp_home_json"
	],
	"./esp/personal": [
		"./locales/esp/personal.json",
		"locales_esp_personal_json"
	],
	"./esp/personal.json": [
		"./locales/esp/personal.json",
		"locales_esp_personal_json"
	],
	"./esp/prediction": [
		"./locales/esp/prediction.json",
		"locales_esp_prediction_json"
	],
	"./esp/prediction.json": [
		"./locales/esp/prediction.json",
		"locales_esp_prediction_json"
	],
	"./esp/statistics": [
		"./locales/esp/statistics.json",
		"locales_esp_statistics_json"
	],
	"./esp/statistics.json": [
		"./locales/esp/statistics.json",
		"locales_esp_statistics_json"
	],
	"./esp/testimonials": [
		"./locales/esp/testimonials.json",
		"locales_esp_testimonials_json"
	],
	"./esp/testimonials.json": [
		"./locales/esp/testimonials.json",
		"locales_esp_testimonials_json"
	],
	"./fr/aboutUs": [
		"./locales/fr/aboutUs.json",
		"locales_fr_aboutUs_json"
	],
	"./fr/aboutUs.json": [
		"./locales/fr/aboutUs.json",
		"locales_fr_aboutUs_json"
	],
	"./fr/common": [
		"./locales/fr/common.json",
		"locales_fr_common_json"
	],
	"./fr/common.json": [
		"./locales/fr/common.json",
		"locales_fr_common_json"
	],
	"./fr/games": [
		"./locales/fr/games.json",
		"locales_fr_games_json"
	],
	"./fr/games.json": [
		"./locales/fr/games.json",
		"locales_fr_games_json"
	],
	"./fr/home": [
		"./locales/fr/home.json",
		"locales_fr_home_json"
	],
	"./fr/home.json": [
		"./locales/fr/home.json",
		"locales_fr_home_json"
	],
	"./fr/personal": [
		"./locales/fr/personal.json",
		"locales_fr_personal_json"
	],
	"./fr/personal.json": [
		"./locales/fr/personal.json",
		"locales_fr_personal_json"
	],
	"./fr/prediction": [
		"./locales/fr/prediction.json",
		"locales_fr_prediction_json"
	],
	"./fr/prediction.json": [
		"./locales/fr/prediction.json",
		"locales_fr_prediction_json"
	],
	"./fr/statistics": [
		"./locales/fr/statistics.json",
		"locales_fr_statistics_json"
	],
	"./fr/statistics.json": [
		"./locales/fr/statistics.json",
		"locales_fr_statistics_json"
	],
	"./fr/testimonials": [
		"./locales/fr/testimonials.json",
		"locales_fr_testimonials_json"
	],
	"./fr/testimonials.json": [
		"./locales/fr/testimonials.json",
		"locales_fr_testimonials_json"
	],
	"./rs/aboutUs": [
		"./locales/rs/aboutUs.json",
		"locales_rs_aboutUs_json"
	],
	"./rs/aboutUs.json": [
		"./locales/rs/aboutUs.json",
		"locales_rs_aboutUs_json"
	],
	"./rs/common": [
		"./locales/rs/common.json",
		"locales_rs_common_json"
	],
	"./rs/common.json": [
		"./locales/rs/common.json",
		"locales_rs_common_json"
	],
	"./rs/games": [
		"./locales/rs/games.json",
		"locales_rs_games_json"
	],
	"./rs/games.json": [
		"./locales/rs/games.json",
		"locales_rs_games_json"
	],
	"./rs/home": [
		"./locales/rs/home.json",
		"locales_rs_home_json"
	],
	"./rs/home.json": [
		"./locales/rs/home.json",
		"locales_rs_home_json"
	],
	"./rs/personal": [
		"./locales/rs/personal.json",
		"locales_rs_personal_json"
	],
	"./rs/personal.json": [
		"./locales/rs/personal.json",
		"locales_rs_personal_json"
	],
	"./rs/prediction": [
		"./locales/rs/prediction.json",
		"locales_rs_prediction_json"
	],
	"./rs/prediction.json": [
		"./locales/rs/prediction.json",
		"locales_rs_prediction_json"
	],
	"./rs/statistics": [
		"./locales/rs/statistics.json",
		"locales_rs_statistics_json"
	],
	"./rs/statistics.json": [
		"./locales/rs/statistics.json",
		"locales_rs_statistics_json"
	],
	"./rs/testimonials": [
		"./locales/rs/testimonials.json",
		"locales_rs_testimonials_json"
	],
	"./rs/testimonials.json": [
		"./locales/rs/testimonials.json",
		"locales_rs_testimonials_json"
	]
};
function webpackAsyncContext(req) {
	if(!__webpack_require__.o(map, req)) {
		return Promise.resolve().then(function() {
			var e = new Error("Cannot find module '" + req + "'");
			e.code = 'MODULE_NOT_FOUND';
			throw e;
		});
	}

	var ids = map[req], id = ids[0];
	return __webpack_require__.e(ids[1]).then(function() {
		return __webpack_require__.t(id, 3 | 16);
	});
}
webpackAsyncContext.keys = function() { return Object.keys(map); };
webpackAsyncContext.id = "./locales lazy recursive ^\\.\\/.*\\/.*$";
module.exports = webpackAsyncContext;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/interopRequireDefault.js":
/*!**********************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/interopRequireDefault.js ***!
  \**********************************************************************/
/***/ (function(module) {

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    "default": obj
  };
}

module.exports = _interopRequireDefault;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/interopRequireWildcard.js":
/*!***********************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/interopRequireWildcard.js ***!
  \***********************************************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

var _typeof = __webpack_require__(/*! @babel/runtime/helpers/typeof */ "./node_modules/@babel/runtime/helpers/typeof.js");

function _getRequireWildcardCache() {
  if (typeof WeakMap !== "function") return null;
  var cache = new WeakMap();

  _getRequireWildcardCache = function _getRequireWildcardCache() {
    return cache;
  };

  return cache;
}

function _interopRequireWildcard(obj) {
  if (obj && obj.__esModule) {
    return obj;
  }

  if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") {
    return {
      "default": obj
    };
  }

  var cache = _getRequireWildcardCache();

  if (cache && cache.has(obj)) {
    return cache.get(obj);
  }

  var newObj = {};
  var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor;

  for (var key in obj) {
    if (Object.prototype.hasOwnProperty.call(obj, key)) {
      var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null;

      if (desc && (desc.get || desc.set)) {
        Object.defineProperty(newObj, key, desc);
      } else {
        newObj[key] = obj[key];
      }
    }
  }

  newObj["default"] = obj;

  if (cache) {
    cache.set(obj, newObj);
  }

  return newObj;
}

module.exports = _interopRequireWildcard;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/typeof.js":
/*!*******************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/typeof.js ***!
  \*******************************************************/
/***/ (function(module) {

function _typeof(obj) {
  "@babel/helpers - typeof";

  if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") {
    module.exports = _typeof = function _typeof(obj) {
      return typeof obj;
    };
  } else {
    module.exports = _typeof = function _typeof(obj) {
      return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
    };
  }

  return _typeof(obj);
}

module.exports = _typeof;

/***/ }),

/***/ "./node_modules/next/dist/next-server/server/denormalize-page-path.js":
/*!****************************************************************************!*\
  !*** ./node_modules/next/dist/next-server/server/denormalize-page-path.js ***!
  \****************************************************************************/
/***/ (function(__unused_webpack_module, exports) {

"use strict";
exports.__esModule=true;exports.normalizePathSep=normalizePathSep;exports.denormalizePagePath=denormalizePagePath;function normalizePathSep(path){return path.replace(/\\/g,'/');}function denormalizePagePath(page){page=normalizePathSep(page);if(page.startsWith('/index/')){page=page.slice(6);}else if(page==='/index'){page='/';}return page;}
//# sourceMappingURL=denormalize-page-path.js.map

/***/ }),

/***/ "./node_modules/next/link.js":
/*!***********************************!*\
  !*** ./node_modules/next/link.js ***!
  \***********************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

module.exports = __webpack_require__(/*! ./dist/client/link */ "./node_modules/next/dist/client/link.js")


/***/ }),

/***/ "./components/Footer/Ball/Ball.jsx":
/*!*****************************************!*\
  !*** ./components/Footer/Ball/Ball.jsx ***!
  \*****************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Ball": function() { return /* binding */ Ball; }
/* harmony export */ });
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _public_images_footer_leftBall_png__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../../../../public/images/footer/leftBall.png */ "./public/images/footer/leftBall.png");
/* harmony import */ var _Ball_module_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Ball.module.scss */ "./components/Footer/Ball/Ball.module.scss");
/* harmony import */ var _Ball_module_scss__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_Ball_module_scss__WEBPACK_IMPORTED_MODULE_2__);

var _jsxFileName = "C:\\Users\\user\\Desktop\\projects\\ait-projects\\foot-bet\\components\\Footer\\Ball\\Ball.jsx";


function Ball() {
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
    className: (_Ball_module_scss__WEBPACK_IMPORTED_MODULE_2___default().container),
    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("img", {
      src: _public_images_footer_leftBall_png__WEBPACK_IMPORTED_MODULE_1__.default.src,
      className: (_Ball_module_scss__WEBPACK_IMPORTED_MODULE_2___default().ball),
      alt: "ball-png"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 7,
      columnNumber: 13
    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
      className: (_Ball_module_scss__WEBPACK_IMPORTED_MODULE_2___default().text_with_ball),
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("p", {
        className: (_Ball_module_scss__WEBPACK_IMPORTED_MODULE_2___default().top),
        children: "FOOT"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 13,
        columnNumber: 17
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("p", {
        className: (_Ball_module_scss__WEBPACK_IMPORTED_MODULE_2___default().bottom),
        children: "BET"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 14,
        columnNumber: 17
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 12,
      columnNumber: 13
    }, this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 6,
    columnNumber: 9
  }, this);
}

/***/ }),

/***/ "./components/Footer/Footer.jsx":
/*!**************************************!*\
  !*** ./components/Footer/Footer.jsx ***!
  \**************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Footer": function() { return /* binding */ Footer; }
/* harmony export */ });
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_dist_client_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/dist/client/router */ "./node_modules/next/dist/client/router.js");
/* harmony import */ var _Ball_Ball__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Ball/Ball */ "./components/Footer/Ball/Ball.jsx");
/* harmony import */ var _Footer_module_scss__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./Footer.module.scss */ "./components/Footer/Footer.module.scss");
/* harmony import */ var _Footer_module_scss__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_Footer_module_scss__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _Navigation_Navigation__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Navigation/Navigation */ "./components/Footer/Navigation/Navigation.jsx");
/* harmony import */ var _SocialMedia_SocialMedia__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./SocialMedia/SocialMedia */ "./components/Footer/SocialMedia/SocialMedia.jsx");
/* harmony import */ var _public_images_personal_ball_png__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../../../../public/images/personal/ball.png */ "./public/images/personal/ball.png");

var _jsxFileName = "C:\\Users\\user\\Desktop\\projects\\ait-projects\\foot-bet\\components\\Footer\\Footer.jsx";
//

 // styles



 // icon

 // TODO click events on icons

function Footer() {
  const router = (0,next_dist_client_router__WEBPACK_IMPORTED_MODULE_1__.useRouter)();
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
    className: (_Footer_module_scss__WEBPACK_IMPORTED_MODULE_6___default().container),
    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_Ball_Ball__WEBPACK_IMPORTED_MODULE_2__.Ball, {}, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 17,
      columnNumber: 13
    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
      className: (_Footer_module_scss__WEBPACK_IMPORTED_MODULE_6___default().content),
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_Navigation_Navigation__WEBPACK_IMPORTED_MODULE_3__.Navigation, {}, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 19,
        columnNumber: 17
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_SocialMedia_SocialMedia__WEBPACK_IMPORTED_MODULE_4__.SocialMedia, {}, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 20,
        columnNumber: 17
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 18,
      columnNumber: 13
    }, this), router.pathname === '/personal' && /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
      className: (_Footer_module_scss__WEBPACK_IMPORTED_MODULE_6___default().ball),
      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("img", {
        src: _public_images_personal_ball_png__WEBPACK_IMPORTED_MODULE_5__.default.src,
        alt: "ball-icon"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 24,
        columnNumber: 21
      }, this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 23,
      columnNumber: 17
    }, this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 16,
    columnNumber: 9
  }, this);
}

/***/ }),

/***/ "./components/Footer/Navigation/List/List.jsx":
/*!****************************************************!*\
  !*** ./components/Footer/Navigation/List/List.jsx ***!
  \****************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "List": function() { return /* binding */ List; }
/* harmony export */ });
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_translate_useTranslation__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next-translate/useTranslation */ "next-translate/useTranslation");
/* harmony import */ var next_translate_useTranslation__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_translate_useTranslation__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _List_module_scss__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./List.module.scss */ "./components/Footer/Navigation/List/List.module.scss");
/* harmony import */ var _List_module_scss__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_List_module_scss__WEBPACK_IMPORTED_MODULE_3__);

var _jsxFileName = "C:\\Users\\user\\Desktop\\projects\\ait-projects\\foot-bet\\components\\Footer\\Navigation\\List\\List.jsx";



function List({
  list_items = [],
  bordersActive
}) {
  const {
    t
  } = next_translate_useTranslation__WEBPACK_IMPORTED_MODULE_1___default()("common"),
        translationPath = "footer.navigation.",
        translate = key => t(`${translationPath}${key}`);

  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
    className: `${(_List_module_scss__WEBPACK_IMPORTED_MODULE_3___default().container)} ${bordersActive && (_List_module_scss__WEBPACK_IMPORTED_MODULE_3___default().borders)}`,
    children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("ul", {
      children: list_items.map(el => /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_2___default()), {
        href: el.link,
        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("li", {
          children: translate(el.name)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 15,
          columnNumber: 13
        }, this)
      }, Math.random(), false, {
        fileName: _jsxFileName,
        lineNumber: 14,
        columnNumber: 11
      }, this))
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 12,
      columnNumber: 7
    }, this)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 11,
    columnNumber: 5
  }, this);
}

/***/ }),

/***/ "./components/Footer/Navigation/Navigation.jsx":
/*!*****************************************************!*\
  !*** ./components/Footer/Navigation/Navigation.jsx ***!
  \*****************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Navigation": function() { return /* binding */ Navigation; }
/* harmony export */ });
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _List_List__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./List/List */ "./components/Footer/Navigation/List/List.jsx");
/* harmony import */ var _Navigation_module_scss__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Navigation.module.scss */ "./components/Footer/Navigation/Navigation.module.scss");
/* harmony import */ var _Navigation_module_scss__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_Navigation_module_scss__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _nav_data__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./nav_data */ "./components/Footer/Navigation/nav_data.js");

var _jsxFileName = "C:\\Users\\user\\Desktop\\projects\\ait-projects\\foot-bet\\components\\Footer\\Navigation\\Navigation.jsx";
// styles

 // datas


function Navigation() {
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
    className: (_Navigation_module_scss__WEBPACK_IMPORTED_MODULE_3___default().container),
    children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
      className: (_Navigation_module_scss__WEBPACK_IMPORTED_MODULE_3___default().content),
      children: _nav_data__WEBPACK_IMPORTED_MODULE_2__.nav_data.map((el, i) => /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_List_List__WEBPACK_IMPORTED_MODULE_1__.List, {
        list_items: el,
        bordersActive: i === 1 ? true : false
      }, Math.random(), false, {
        fileName: _jsxFileName,
        lineNumber: 13,
        columnNumber: 25
      }, this))
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 10,
      columnNumber: 13
    }, this)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 9,
    columnNumber: 9
  }, this);
}

/***/ }),

/***/ "./components/Footer/Navigation/nav_data.js":
/*!**************************************************!*\
  !*** ./components/Footer/Navigation/nav_data.js ***!
  \**************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "nav_data": function() { return /* binding */ nav_data; }
/* harmony export */ });
const nav_data = [[{
  link: '/prediction',
  name: 'prediction'
}, {
  link: '/games',
  name: 'games'
}, {
  link: '/',
  name: 'news'
}], [{
  link: '/aboutUs',
  name: 'aboutUs'
}, {
  link: '/prediction',
  name: 'payment'
}, {
  link: '/statistics',
  name: 'matchStatistics'
}], [{
  link: '/registration',
  name: 'register'
}, {
  link: '/testimonials',
  name: 'feedbacks'
}, {
  link: '/',
  name: 'contacts'
}, {
  link: '/privacy-policy',
  name: 'privacy-policy'
}]];

/***/ }),

/***/ "./components/Footer/SocialMedia/PSIcons/PS.jsx":
/*!******************************************************!*\
  !*** ./components/Footer/SocialMedia/PSIcons/PS.jsx ***!
  \******************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PS": function() { return /* binding */ PS; }
/* harmony export */ });
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _PS_module_scss__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./PS.module.scss */ "./components/Footer/SocialMedia/PSIcons/PS.module.scss");
/* harmony import */ var _PS_module_scss__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_PS_module_scss__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _public_images_footer_paypal_png__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../../../../public/images/footer/paypal.png */ "./public/images/footer/paypal.png");
/* harmony import */ var _public_images_footer_visa_png__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../../../public/images/footer/visa.png */ "./public/images/footer/visa.png");
/* harmony import */ var _public_images_footer_masterCard_png__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../../../../public/images/footer/masterCard.png */ "./public/images/footer/masterCard.png");
/* harmony import */ var _common_Icon_Icon__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../common/Icon/Icon */ "./components/Footer/SocialMedia/common/Icon/Icon.jsx");


var _jsxFileName = "C:\\Users\\user\\Desktop\\projects\\ait-projects\\foot-bet\\components\\Footer\\SocialMedia\\PSIcons\\PS.jsx";
// styles
 // icons



 // components


function PS() {
  const // config
  icons = [{
    key: Math.random(),
    src: _public_images_footer_paypal_png__WEBPACK_IMPORTED_MODULE_1__.default.src
  }, {
    key: Math.random(),
    src: _public_images_footer_visa_png__WEBPACK_IMPORTED_MODULE_2__.default.src
  }, {
    key: Math.random(),
    src: _public_images_footer_masterCard_png__WEBPACK_IMPORTED_MODULE_3__.default.src,
    lastElement: true
  }];
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
    children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
      className: (_PS_module_scss__WEBPACK_IMPORTED_MODULE_5___default().container),
      children: icons.map(el => /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_common_Icon_Icon__WEBPACK_IMPORTED_MODULE_4__.Icon, {
        src: el.src,
        classes: (_PS_module_scss__WEBPACK_IMPORTED_MODULE_5___default().icons),
        lastElement: el.lastElement && el.lastElement
      }, el.key, false, {
        fileName: _jsxFileName,
        lineNumber: 36,
        columnNumber: 25
      }, this))
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 33,
      columnNumber: 13
    }, this)
  }, void 0, false);
}

/***/ }),

/***/ "./components/Footer/SocialMedia/SMIcons/SM.jsx":
/*!******************************************************!*\
  !*** ./components/Footer/SocialMedia/SMIcons/SM.jsx ***!
  \******************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SM": function() { return /* binding */ SM; }
/* harmony export */ });
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _SM_module_scss__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./SM.module.scss */ "./components/Footer/SocialMedia/SMIcons/SM.module.scss");
/* harmony import */ var _SM_module_scss__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_SM_module_scss__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _public_images_header_SocialMedia_phone_svg__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../../../../public/images/header/SocialMedia/phone.svg */ "./public/images/header/SocialMedia/phone.svg");
/* harmony import */ var _public_images_header_SocialMedia_facebook_svg__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../../../public/images/header/SocialMedia/facebook.svg */ "./public/images/header/SocialMedia/facebook.svg");
/* harmony import */ var _public_images_header_SocialMedia_telegram_svg__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../../../../public/images/header/SocialMedia/telegram.svg */ "./public/images/header/SocialMedia/telegram.svg");
/* harmony import */ var _public_images_header_SocialMedia_watsup_svg__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../../../../public/images/header/SocialMedia/watsup.svg */ "./public/images/header/SocialMedia/watsup.svg");
/* harmony import */ var _public_images_header_SocialMedia_instagram_svg__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../../../../public/images/header/SocialMedia/instagram.svg */ "./public/images/header/SocialMedia/instagram.svg");
/* harmony import */ var _public_images_header_SocialMedia_viber_svg__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../../../../../public/images/header/SocialMedia/viber.svg */ "./public/images/header/SocialMedia/viber.svg");
/* harmony import */ var _common_Icon_Icon__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../common/Icon/Icon */ "./components/Footer/SocialMedia/common/Icon/Icon.jsx");


var _jsxFileName = "C:\\Users\\user\\Desktop\\projects\\ait-projects\\foot-bet\\components\\Footer\\SocialMedia\\SMIcons\\SM.jsx";
// styles
 // icons






 // components


function SM() {
  const // config
  icons = [{
    key: Math.random(),
    src: _public_images_header_SocialMedia_phone_svg__WEBPACK_IMPORTED_MODULE_1__.default.src,
    url: "tel:+37498645457"
  }, {
    key: Math.random(),
    src: _public_images_header_SocialMedia_facebook_svg__WEBPACK_IMPORTED_MODULE_2__.default.src,
    url: "https://www.facebook.com/%D0%9F%D1%80%D0%BE%D0%B3%D0%BD%D0%BE%D0%B7%D1%8B-%D0%BD%D0%B0-%D0%A4%D1%83%D1%82%D0%B1%D0%BE%D0%BB-104941347577913/"
  }, {
    key: Math.random(),
    src: _public_images_header_SocialMedia_watsup_svg__WEBPACK_IMPORTED_MODULE_4__.default.src,
    url: "https://api.whatsapp.com/send?phone=+37498645457"
  }, {
    key: Math.random(),
    src: _public_images_header_SocialMedia_instagram_svg__WEBPACK_IMPORTED_MODULE_5__.default.src,
    url: "https://www.instagram.com/prognozyna550/?utm_medium=copy_link"
  }, {
    key: Math.random(),
    src: _public_images_header_SocialMedia_viber_svg__WEBPACK_IMPORTED_MODULE_6__.default.src,
    url: "viber://chat?number=+37498645457"
  }, {
    key: Math.random(),
    src: _public_images_header_SocialMedia_telegram_svg__WEBPACK_IMPORTED_MODULE_3__.default.src,
    url: "https://telegram.me/ermaann",
    lastElement: true
  }];
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
    children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
      className: (_SM_module_scss__WEBPACK_IMPORTED_MODULE_8___default().container),
      children: icons.map(el => /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_common_Icon_Icon__WEBPACK_IMPORTED_MODULE_7__.Icon, {
        src: el.src,
        url: el.url,
        elements: icons.length,
        lastElement: el.lastElement && el.lastElement
      }, el.key, false, {
        fileName: _jsxFileName,
        lineNumber: 57,
        columnNumber: 25
      }, this))
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 54,
      columnNumber: 13
    }, this)
  }, void 0, false);
}

/***/ }),

/***/ "./components/Footer/SocialMedia/SocialMedia.jsx":
/*!*******************************************************!*\
  !*** ./components/Footer/SocialMedia/SocialMedia.jsx ***!
  \*******************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SocialMedia": function() { return /* binding */ SocialMedia; }
/* harmony export */ });
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _SMIcons_SM__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./SMIcons/SM */ "./components/Footer/SocialMedia/SMIcons/SM.jsx");
/* harmony import */ var _PSIcons_PS__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./PSIcons/PS */ "./components/Footer/SocialMedia/PSIcons/PS.jsx");
/* harmony import */ var _SocialMedia_module_scss__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./SocialMedia.module.scss */ "./components/Footer/SocialMedia/SocialMedia.module.scss");
/* harmony import */ var _SocialMedia_module_scss__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_SocialMedia_module_scss__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var next_translate_useTranslation__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next-translate/useTranslation */ "next-translate/useTranslation");
/* harmony import */ var next_translate_useTranslation__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_translate_useTranslation__WEBPACK_IMPORTED_MODULE_3__);

var _jsxFileName = "C:\\Users\\user\\Desktop\\projects\\ait-projects\\foot-bet\\components\\Footer\\SocialMedia\\SocialMedia.jsx";
// components

 // styles

 // translation 


function SocialMedia() {
  const // translation
  {
    t
  } = next_translate_useTranslation__WEBPACK_IMPORTED_MODULE_3___default()('common'),
        translationPath = 'footer.social_media_paymants',
        translate = key => t(`${translationPath}${key}`);

  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
    className: (_SocialMedia_module_scss__WEBPACK_IMPORTED_MODULE_4___default().container),
    children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
      className: (_SocialMedia_module_scss__WEBPACK_IMPORTED_MODULE_4___default().content),
      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
        className: (_SocialMedia_module_scss__WEBPACK_IMPORTED_MODULE_4___default().controler),
        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
          className: (_SocialMedia_module_scss__WEBPACK_IMPORTED_MODULE_4___default().social_medias),
          children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("p", {
            children: translate('.SM.title')
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 23,
            columnNumber: 25
          }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_SMIcons_SM__WEBPACK_IMPORTED_MODULE_1__.SM, {}, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 28,
            columnNumber: 25
          }, this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 22,
          columnNumber: 21
        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
          className: (_SocialMedia_module_scss__WEBPACK_IMPORTED_MODULE_4___default().payment_systems),
          children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("p", {
            children: translate('.PS.title')
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 31,
            columnNumber: 25
          }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_PSIcons_PS__WEBPACK_IMPORTED_MODULE_2__.PS, {}, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 36,
            columnNumber: 25
          }, this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 30,
          columnNumber: 21
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 21,
        columnNumber: 17
      }, this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 20,
      columnNumber: 13
    }, this)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 19,
    columnNumber: 9
  }, this);
}

/***/ }),

/***/ "./components/Footer/SocialMedia/common/Icon/Icon.jsx":
/*!************************************************************!*\
  !*** ./components/Footer/SocialMedia/common/Icon/Icon.jsx ***!
  \************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Icon": function() { return /* binding */ Icon; }
/* harmony export */ });
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _Icon_module_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Icon.module.scss */ "./components/Footer/SocialMedia/common/Icon/Icon.module.scss");
/* harmony import */ var _Icon_module_scss__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_Icon_module_scss__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_1__);

var _jsxFileName = "C:\\Users\\user\\Desktop\\projects\\ait-projects\\foot-bet\\components\\Footer\\SocialMedia\\common\\Icon\\Icon.jsx";


function Icon({
  src,
  click = null,
  lastElement = false,
  elements,
  otherStyles = null,
  classes,
  url = ""
}) {
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
    style: elements ? {
      width: `${100 / elements}%`
    } : {
      padding: '0 8px'
    },
    className: `${(_Icon_module_scss__WEBPACK_IMPORTED_MODULE_2___default().container)} ${lastElement ? (_Icon_module_scss__WEBPACK_IMPORTED_MODULE_2___default().last_element) : ""} ${classes}`,
    children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_1___default()), {
      href: url,
      target: "_blank",
      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("a", {
        target: "_blank",
        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("img", {
          src: src,
          alt: `icons-${src}`,
          onClick: click,
          style: otherStyles
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 18,
          columnNumber: 21
        }, this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 17,
        columnNumber: 17
      }, this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 16,
      columnNumber: 13
    }, this)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 13,
    columnNumber: 9
  }, this);
}

/***/ }),

/***/ "./components/Header/Bar/Bar.jsx":
/*!***************************************!*\
  !*** ./components/Header/Bar/Bar.jsx ***!
  \***************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Bar": function() { return /* binding */ Bar; }
/* harmony export */ });
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _Bar_module_scss__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./Bar.module.scss */ "./components/Header/Bar/Bar.module.scss");
/* harmony import */ var _Bar_module_scss__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_Bar_module_scss__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var next_translate_useTranslation__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next-translate/useTranslation */ "next-translate/useTranslation");
/* harmony import */ var next_translate_useTranslation__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_translate_useTranslation__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _Login_Login__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Login/Login */ "./components/Header/Bar/Login/Login.jsx");
/* harmony import */ var _BarItems_BarItems__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./BarItems/BarItems */ "./components/Header/Bar/BarItems/BarItems.jsx");
/* harmony import */ var _Logo_Logo__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./Logo/Logo */ "./components/Header/Bar/Logo/Logo.jsx");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react-redux */ "react-redux");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _DropdownMenu_Dropdown__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./DropdownMenu/Dropdown */ "./components/Header/Bar/DropdownMenu/Dropdown.jsx");

var _jsxFileName = "C:\\Users\\user\\Desktop\\projects\\ait-projects\\foot-bet\\components\\Header\\Bar\\Bar.jsx";
// hooks and helpers
 // styles

 // translation 

 //components






function Bar({
  bar_items,
  bar_items_cont
}) {
  const {
    t
  } = next_translate_useTranslation__WEBPACK_IMPORTED_MODULE_2___default()('common'),
        translationPath = 'header.',
        translate = key => t(`${translationPath}${key}`),
        // login modal configs
  {
    0: showLoginModal,
    1: setShowLoginModal
  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false),
        user_info = (0,react_redux__WEBPACK_IMPORTED_MODULE_6__.useSelector)(state => state.user.user);

  console.log(user_info);
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
    className: `${(_Bar_module_scss__WEBPACK_IMPORTED_MODULE_8___default().bar_container)} ${bar_items_cont}`,
    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_Logo_Logo__WEBPACK_IMPORTED_MODULE_5__.Logo, {}, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 28,
        columnNumber: 17
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_DropdownMenu_Dropdown__WEBPACK_IMPORTED_MODULE_7__.default, {}, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 29,
        columnNumber: 17
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 27,
      columnNumber: 13
    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_BarItems_BarItems__WEBPACK_IMPORTED_MODULE_4__.BarItems, {
      userLogged: user_info !== null ? true : false,
      registration: translate('register'),
      login: translate('login'),
      registration_path: "/registration",
      loginModalHandle: () => setShowLoginModal(true),
      bar_items: bar_items
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 31,
      columnNumber: 13
    }, this), showLoginModal && /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_Login_Login__WEBPACK_IMPORTED_MODULE_3__.Login, {
      onModalClose: () => setShowLoginModal(false)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 39,
      columnNumber: 32
    }, this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 26,
    columnNumber: 9
  }, this);
}

/***/ }),

/***/ "./components/Header/Bar/BarItems/BarItems.jsx":
/*!*****************************************************!*\
  !*** ./components/Header/Bar/BarItems/BarItems.jsx ***!
  \*****************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "BarItems": function() { return /* binding */ BarItems; }
/* harmony export */ });
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _LanguageDropConfigs_lang_configs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./LanguageDropConfigs/lang-configs */ "./components/Header/Bar/BarItems/LanguageDropConfigs/lang-configs.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _src_user_user__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../../../../src/user/user */ "./src/user/user.js");
/* harmony import */ var next_dist_client_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! next/dist/client/router */ "./node_modules/next/dist/client/router.js");
/* harmony import */ var next_translate_useTranslation__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! next-translate/useTranslation */ "next-translate/useTranslation");
/* harmony import */ var next_translate_useTranslation__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(next_translate_useTranslation__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _BarItems_module_scss__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./BarItems.module.scss */ "./components/Header/Bar/BarItems/BarItems.module.scss");
/* harmony import */ var _BarItems_module_scss__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(_BarItems_module_scss__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _LanguageDrop_LanguageDrop__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./LanguageDrop/LanguageDrop */ "./components/Header/Bar/BarItems/LanguageDrop/LanguageDrop.jsx");
/* harmony import */ var _Logged_Logged__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./Logged/Logged */ "./components/Header/Bar/BarItems/Logged/Logged.jsx");
/* harmony import */ var _public_images_header_register_png__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../../../../../../public/images/header/register.png */ "./public/images/header/register.png");
/* harmony import */ var _public_images_header_login_png__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../../../../../../public/images/header/login.png */ "./public/images/header/login.png");


var _jsxFileName = "C:\\Users\\user\\Desktop\\projects\\ait-projects\\foot-bet\\components\\Header\\Bar\\BarItems\\BarItems.jsx";
// hooks and helpers



 // translation 

 // styles 

 // components



 // icons



function BarItems({
  registration,
  login,
  registration_path,
  loginModalHandle,
  bar_items,
  userLogged
}) {
  const {
    t,
    lang
  } = next_translate_useTranslation__WEBPACK_IMPORTED_MODULE_5___default()('common');
  const {
    0: languagesTitle,
    1: setLanguagesTitle
  } = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(_LanguageDropConfigs_lang_configs__WEBPACK_IMPORTED_MODULE_1__.languages[1]);
  (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(() => {
    const newLang = _LanguageDropConfigs_lang_configs__WEBPACK_IMPORTED_MODULE_1__.languages.find(el => el.lang === lang);

    if (newLang) {
      setLanguagesTitle(newLang);
    }
  }, [lang]);

  const router = (0,next_dist_client_router__WEBPACK_IMPORTED_MODULE_4__.useRouter)(),
        languages_data = _LanguageDropConfigs_lang_configs__WEBPACK_IMPORTED_MODULE_1__.languages,
        {
    0: showDrop,
    1: setShowDrop
  } = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(false),
        changeLangTitle = event => {
    let lang_title_data = languages_data.filter(el => el.lang === event.target.className);
    setLanguagesTitle(lang_title_data[0]);
    setShowDrop(false);
  },
        translationPath = 'header.lang.',
        translate = key => t(`${translationPath}${key}`);

  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
    children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
      className: `${(_BarItems_module_scss__WEBPACK_IMPORTED_MODULE_11___default().bar_item_container)} ${bar_items} ${router.pathname !== '/' ? (_BarItems_module_scss__WEBPACK_IMPORTED_MODULE_11___default().for_mobile) : null}`,
      children: [userLogged ? /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_Logged_Logged__WEBPACK_IMPORTED_MODULE_8__.Logged, {
        data: _src_user_user__WEBPACK_IMPORTED_MODULE_3__.user_data
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 60,
        columnNumber: 35
      }, this) : /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
        className: (_BarItems_module_scss__WEBPACK_IMPORTED_MODULE_11___default().auth_container),
        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
          className: (_BarItems_module_scss__WEBPACK_IMPORTED_MODULE_11___default().auth_buttons),
          children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
            className: (_BarItems_module_scss__WEBPACK_IMPORTED_MODULE_11___default().sign_up_button),
            children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_6___default()), {
              href: registration_path,
              children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("img", {
                src: _public_images_header_register_png__WEBPACK_IMPORTED_MODULE_9__.default.src,
                alt: ""
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 65,
                columnNumber: 41
              }, this)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 64,
              columnNumber: 37
            }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_6___default()), {
              href: registration_path,
              children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("span", {
                children: registration
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 68,
                columnNumber: 41
              }, this)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 67,
              columnNumber: 37
            }, this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 63,
            columnNumber: 33
          }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
            className: (_BarItems_module_scss__WEBPACK_IMPORTED_MODULE_11___default().sign_in_button),
            onClick: loginModalHandle,
            children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("img", {
              src: _public_images_header_login_png__WEBPACK_IMPORTED_MODULE_10__.default.src,
              alt: ""
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 79,
              columnNumber: 37
            }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("span", {
              children: login
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 80,
              columnNumber: 37
            }, this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 75,
            columnNumber: 33
          }, this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 62,
          columnNumber: 29
        }, this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 61,
        columnNumber: 25
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
        className: (_BarItems_module_scss__WEBPACK_IMPORTED_MODULE_11___default().lang_button),
        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
          className: (_BarItems_module_scss__WEBPACK_IMPORTED_MODULE_11___default().lang_button_content),
          style: showDrop ? {
            display: 'none'
          } : null,
          onClick: () => setShowDrop(true),
          children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("span", {
            children: translate(`${languagesTitle.contentOnTitle}`)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 95,
            columnNumber: 29
          }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("img", {
            src: languagesTitle.icon,
            alt: "lang-flag"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 100,
            columnNumber: 29
          }, this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 90,
          columnNumber: 25
        }, this), showDrop && /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_LanguageDrop_LanguageDrop__WEBPACK_IMPORTED_MODULE_7__.LanguageDrop, {
          click: changeLangTitle,
          onClose: () => setShowDrop(false),
          data: languages_data
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 105,
          columnNumber: 38
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 89,
        columnNumber: 21
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 59,
      columnNumber: 17
    }, this)
  }, void 0, false);
}

/***/ }),

/***/ "./components/Header/Bar/BarItems/LanguageDropConfigs/lang-configs.js":
/*!****************************************************************************!*\
  !*** ./components/Header/Bar/BarItems/LanguageDropConfigs/lang-configs.js ***!
  \****************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "languages": function() { return /* binding */ languages; }
/* harmony export */ });
/* harmony import */ var _public_images_header_flags_rus_png__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../../../../public/images/header/flags/rus.png */ "./public/images/header/flags/rus.png");
/* harmony import */ var _public_images_header_flags_arm_svg__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../../../../public/images/header/flags/arm.svg */ "./public/images/header/flags/arm.svg");
/* harmony import */ var _public_images_header_flags_en_svg__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../../../public/images/header/flags/en.svg */ "./public/images/header/flags/en.svg");
/* harmony import */ var _public_images_header_flags_esp_svg__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../../../../public/images/header/flags/esp.svg */ "./public/images/header/flags/esp.svg");
/* harmony import */ var _public_images_header_flags_frc_svg__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../../../../public/images/header/flags/frc.svg */ "./public/images/header/flags/frc.svg");
/* harmony import */ var _public_images_header_flags_deu_svg__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../../../../public/images/header/flags/deu.svg */ "./public/images/header/flags/deu.svg");
// flag icons






const languages = [{
  lang: "am",
  contentOnTitle: 'am.onTitle',
  contentOnDrop: 'am.onDrop',
  icon: _public_images_header_flags_arm_svg__WEBPACK_IMPORTED_MODULE_1__.default.src
}, {
  lang: "rs",
  contentOnTitle: 'rs.onTitle',
  contentOnDrop: 'rs.onDrop',
  icon: _public_images_header_flags_rus_png__WEBPACK_IMPORTED_MODULE_0__.default.src
}, {
  lang: "en",
  contentOnTitle: 'en.onTitle',
  contentOnDrop: 'en.onDrop',
  icon: _public_images_header_flags_en_svg__WEBPACK_IMPORTED_MODULE_2__.default.src
}, {
  lang: "esp",
  contentOnTitle: 'esp.onTitle',
  contentOnDrop: 'esp.onDrop',
  icon: _public_images_header_flags_esp_svg__WEBPACK_IMPORTED_MODULE_3__.default.src
}, {
  lang: "fr",
  contentOnTitle: 'frc.onTitle',
  contentOnDrop: 'frc.onDrop',
  icon: _public_images_header_flags_frc_svg__WEBPACK_IMPORTED_MODULE_4__.default.src
}, {
  lang: "deu",
  contentOnTitle: 'deu.onTitle',
  contentOnDrop: 'deu.onDrop',
  icon: _public_images_header_flags_deu_svg__WEBPACK_IMPORTED_MODULE_5__.default.src
}];

/***/ }),

/***/ "./components/Header/Bar/BarItems/LanguageDrop/LanguageDrop.jsx":
/*!**********************************************************************!*\
  !*** ./components/Header/Bar/BarItems/LanguageDrop/LanguageDrop.jsx ***!
  \**********************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "LanguageDrop": function() { return /* binding */ LanguageDrop; }
/* harmony export */ });
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_dist_client_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/dist/client/router */ "./node_modules/next/dist/client/router.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var next_translate_useTranslation__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next-translate/useTranslation */ "next-translate/useTranslation");
/* harmony import */ var next_translate_useTranslation__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_translate_useTranslation__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _LanguageDrop_module_scss__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./LanguageDrop.module.scss */ "./components/Header/Bar/BarItems/LanguageDrop/LanguageDrop.module.scss");
/* harmony import */ var _LanguageDrop_module_scss__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_LanguageDrop_module_scss__WEBPACK_IMPORTED_MODULE_5__);

var _jsxFileName = "C:\\Users\\user\\Desktop\\projects\\ait-projects\\foot-bet\\components\\Header\\Bar\\BarItems\\LanguageDrop\\LanguageDrop.jsx";
// hooks and helpers

 // translation 

 // componetns

 // styles 


function LanguageDrop({
  onClose,
  click,
  data
}) {
  (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(() => {
    document.addEventListener("mousedown", handleClose);
    return () => {
      document.removeEventListener("mousedown", handleClose);
    };
  }, []);

  const node = (0,react__WEBPACK_IMPORTED_MODULE_2__.useRef)(),
        router = (0,next_dist_client_router__WEBPACK_IMPORTED_MODULE_1__.useRouter)(),
        handleClose = e => {
    if (node.current.contains(e.target)) {
      if (e.target.parentNode) return;
    }

    onClose();
  },
        {
    t
  } = next_translate_useTranslation__WEBPACK_IMPORTED_MODULE_3___default()('common'),
        translationPath = 'header.lang.',
        translate = key => t(`${translationPath}${key}`);

  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
    className: (_LanguageDrop_module_scss__WEBPACK_IMPORTED_MODULE_5___default().container),
    ref: node,
    children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
      className: (_LanguageDrop_module_scss__WEBPACK_IMPORTED_MODULE_5___default().content),
      children: data.map(el => {
        return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_4___default()), {
          href: `${router.pathname}`,
          locale: el.lang,
          children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
            className: (_LanguageDrop_module_scss__WEBPACK_IMPORTED_MODULE_5___default().row),
            children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("span", {
              onClick: click,
              className: `${el.lang}`,
              children: translate(el.contentOnDrop)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 49,
              columnNumber: 37
            }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("img", {
              onClick: click,
              src: el.icon,
              className: `${el.lang}`
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 57,
              columnNumber: 37
            }, this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 48,
            columnNumber: 33
          }, this)
        }, `change-lang-${el.lang}`, false, {
          fileName: _jsxFileName,
          lineNumber: 44,
          columnNumber: 29
        }, this);
      })
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 40,
      columnNumber: 13
    }, this)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 36,
    columnNumber: 9
  }, this);
}

/***/ }),

/***/ "./components/Header/Bar/BarItems/Logged/Logged.jsx":
/*!**********************************************************!*\
  !*** ./components/Header/Bar/BarItems/Logged/Logged.jsx ***!
  \**********************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Logged": function() { return /* binding */ Logged; }
/* harmony export */ });
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _Logged_module_scss__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./Logged.module.scss */ "./components/Header/Bar/BarItems/Logged/Logged.module.scss");
/* harmony import */ var _Logged_module_scss__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_Logged_module_scss__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _LoggedDrop_LoggedDrop__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./LoggedDrop/LoggedDrop */ "./components/Header/Bar/BarItems/Logged/LoggedDrop/LoggedDrop.jsx");
/* harmony import */ var _LoggedWallper_LoggedWallper__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./LoggedWallper/LoggedWallper */ "./components/Header/Bar/BarItems/Logged/LoggedWallper/LoggedWallper.jsx");

var _jsxFileName = "C:\\Users\\user\\Desktop\\projects\\ait-projects\\foot-bet\\components\\Header\\Bar\\BarItems\\Logged\\Logged.jsx";
// styles




function Logged({
  data
}) {
  const // states
  //change user dropdown
  {
    0: showUserDrop,
    1: setShowUserDrop
  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
    className: (_Logged_module_scss__WEBPACK_IMPORTED_MODULE_4___default().container),
    style: showUserDrop ? {
      padding: '17.5px 0'
    } : null,
    children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
      className: (_Logged_module_scss__WEBPACK_IMPORTED_MODULE_4___default().content),
      children: !showUserDrop ? /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_LoggedWallper_LoggedWallper__WEBPACK_IMPORTED_MODULE_3__.LoggedWallper, {
        img: data.photo,
        fullName: data.fullName,
        click: () => setShowUserDrop(true)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 21,
        columnNumber: 21
      }, this) : /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_LoggedDrop_LoggedDrop__WEBPACK_IMPORTED_MODULE_2__.LoggedDrop, {
        onClose: () => setShowUserDrop(false),
        user: data
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 26,
        columnNumber: 21
      }, this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 19,
      columnNumber: 13
    }, this)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 16,
    columnNumber: 9
  }, this);
}

/***/ }),

/***/ "./components/Header/Bar/BarItems/Logged/LoggedDrop/LoggedDrop.jsx":
/*!*************************************************************************!*\
  !*** ./components/Header/Bar/BarItems/Logged/LoggedDrop/LoggedDrop.jsx ***!
  \*************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "LoggedDrop": function() { return /* binding */ LoggedDrop; }
/* harmony export */ });
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_dist_client_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/dist/client/router */ "./node_modules/next/dist/client/router.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-redux */ "react-redux");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var next_translate_useTranslation__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! next-translate/useTranslation */ "next-translate/useTranslation");
/* harmony import */ var next_translate_useTranslation__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_translate_useTranslation__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _LoggedDrop_module_scss__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./LoggedDrop.module.scss */ "./components/Header/Bar/BarItems/Logged/LoggedDrop/LoggedDrop.module.scss");
/* harmony import */ var _LoggedDrop_module_scss__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_LoggedDrop_module_scss__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _public_images_common_phone_png__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../../../../../public/images/common/phone.png */ "./public/images/common/phone.png");
/* harmony import */ var _redux_features_userSlice__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../../../../../redux/features/userSlice */ "./redux/features/userSlice.js");

var _jsxFileName = "C:\\Users\\user\\Desktop\\projects\\ait-projects\\foot-bet\\components\\Header\\Bar\\BarItems\\Logged\\LoggedDrop\\LoggedDrop.jsx";
// hooks and helpers


 // translation 

 // componetns

 // styles 

 // icons



function LoggedDrop({
  onClose,
  user
}) {
  (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(() => {
    document.addEventListener("mousedown", handleClose);
    return () => {
      document.removeEventListener("mousedown", handleClose);
    };
  }, []);

  const node = (0,react__WEBPACK_IMPORTED_MODULE_2__.useRef)(),
        router = (0,next_dist_client_router__WEBPACK_IMPORTED_MODULE_1__.useRouter)(),
        handleClose = e => {
    if (node.current.contains(e.target)) {
      if (e.target.parentNode) return;
    }

    onClose();
  },
        {
    t
  } = next_translate_useTranslation__WEBPACK_IMPORTED_MODULE_4___default()('common'),
        translationPath = 'commons.',
        translate = key => t(`${translationPath}${key}`),
        dispatch = (0,react_redux__WEBPACK_IMPORTED_MODULE_3__.useDispatch)();

  function _logout() {
    dispatch((0,_redux_features_userSlice__WEBPACK_IMPORTED_MODULE_7__.logout)());
    router.push(`/`);
  }

  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
    className: (_LoggedDrop_module_scss__WEBPACK_IMPORTED_MODULE_8___default().container),
    ref: node,
    children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
      className: (_LoggedDrop_module_scss__WEBPACK_IMPORTED_MODULE_8___default().content),
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
        className: (_LoggedDrop_module_scss__WEBPACK_IMPORTED_MODULE_8___default().user_photo_name),
        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("span", {
          children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_5___default()), {
            href: "/personal",
            children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("img", {
              src: user.photo,
              alt: ""
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 54,
              columnNumber: 29
            }, this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 53,
            columnNumber: 25
          }, this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 52,
          columnNumber: 21
        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("span", {
          children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_5___default()), {
            href: "/personal",
            children: user.fullName
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 58,
            columnNumber: 25
          }, this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 57,
          columnNumber: 21
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 51,
        columnNumber: 17
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
        className: (_LoggedDrop_module_scss__WEBPACK_IMPORTED_MODULE_8___default().user_tel),
        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("span", {
          children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("img", {
            src: _public_images_common_phone_png__WEBPACK_IMPORTED_MODULE_6__.default.src,
            alt: ""
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 65,
            columnNumber: 25
          }, this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 64,
          columnNumber: 21
        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("span", {
          children: user.telephone
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 67,
          columnNumber: 21
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 63,
        columnNumber: 17
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
        className: (_LoggedDrop_module_scss__WEBPACK_IMPORTED_MODULE_8___default().logOut),
        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("span", {
          onClick: () => _logout(),
          children: translate('logOut')
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 70,
          columnNumber: 21
        }, this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 69,
        columnNumber: 17
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 50,
      columnNumber: 13
    }, this)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 46,
    columnNumber: 9
  }, this);
}

/***/ }),

/***/ "./components/Header/Bar/BarItems/Logged/LoggedWallper/LoggedWallper.jsx":
/*!*******************************************************************************!*\
  !*** ./components/Header/Bar/BarItems/Logged/LoggedWallper/LoggedWallper.jsx ***!
  \*******************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "LoggedWallper": function() { return /* binding */ LoggedWallper; }
/* harmony export */ });
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _LoggedWallper_module_scss__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./LoggedWallper.module.scss */ "./components/Header/Bar/BarItems/Logged/LoggedWallper/LoggedWallper.module.scss");
/* harmony import */ var _LoggedWallper_module_scss__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_LoggedWallper_module_scss__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _public_images_common_triangle_png__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../../../public/images/common/triangle.png */ "./public/images/common/triangle.png");
/* harmony import */ var _public_images_common_userDefault_png__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../../../../public/images/common/userDefault.png */ "./public/images/common/userDefault.png");

var _jsxFileName = "C:\\Users\\user\\Desktop\\projects\\ait-projects\\foot-bet\\components\\Header\\Bar\\BarItems\\Logged\\LoggedWallper\\LoggedWallper.jsx";
// components
 // styles

 // icons



function LoggedWallper({
  img,
  fullName,
  click
}) {
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
    className: (_LoggedWallper_module_scss__WEBPACK_IMPORTED_MODULE_4___default().container),
    children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
      className: (_LoggedWallper_module_scss__WEBPACK_IMPORTED_MODULE_4___default().content),
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
        className: (_LoggedWallper_module_scss__WEBPACK_IMPORTED_MODULE_4___default().user_photo),
        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_1___default()), {
          href: "/personal",
          children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("img", {
            src: img ? img : _public_images_common_userDefault_png__WEBPACK_IMPORTED_MODULE_3__.default.src,
            alt: `${fullName} icon`
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 20,
            columnNumber: 25
          }, this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 19,
          columnNumber: 21
        }, this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 18,
        columnNumber: 17
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
        className: (_LoggedWallper_module_scss__WEBPACK_IMPORTED_MODULE_4___default().user_fullName),
        onClick: click,
        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("span", {
          className: (_LoggedWallper_module_scss__WEBPACK_IMPORTED_MODULE_4___default().fullname),
          children: fullName
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 29,
          columnNumber: 21
        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("span", {
          style: {
            color: 'white'
          },
          children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("img", {
            src: _public_images_common_triangle_png__WEBPACK_IMPORTED_MODULE_2__.default.src,
            alt: "triangle"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 35,
            columnNumber: 25
          }, this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 32,
          columnNumber: 21
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 25,
        columnNumber: 17
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 17,
      columnNumber: 13
    }, this)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 16,
    columnNumber: 9
  }, this);
}

/***/ }),

/***/ "./components/Header/Bar/DropdownMenu/Dropdown.jsx":
/*!*********************************************************!*\
  !*** ./components/Header/Bar/DropdownMenu/Dropdown.jsx ***!
  \*********************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ Dropdown; }
/* harmony export */ });
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_dist_client_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/dist/client/router */ "./node_modules/next/dist/client/router.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _Dropdown_module_scss__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./Dropdown.module.scss */ "./components/Header/Bar/DropdownMenu/Dropdown.module.scss");
/* harmony import */ var _Dropdown_module_scss__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_Dropdown_module_scss__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var next_translate_useTranslation__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next-translate/useTranslation */ "next-translate/useTranslation");
/* harmony import */ var next_translate_useTranslation__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_translate_useTranslation__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _public_images_header_dropdown_lines_png__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../../../../public/images/header/dropdown_lines.png */ "./public/images/header/dropdown_lines.png");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _Pages_Contacts_ContactsModal__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../Pages/Contacts/ContactsModal */ "./components/Pages/Contacts/ContactsModal.jsx");

var _jsxFileName = "C:\\Users\\user\\Desktop\\projects\\ait-projects\\foot-bet\\components\\Header\\Bar\\DropdownMenu\\Dropdown.jsx";
// hooks and helpers

 // styles

 // translation 

 //imgs

 //components



function Dropdown() {
  (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(() => {
    document.addEventListener("mousedown", handleClose);
    return () => {
      document.removeEventListener("mousedown", handleClose);
    };
  }, []);

  const {
    0: showDropdown,
    1: setShowDropdown
  } = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(false),
        {
    0: showContactsModal,
    1: setShowContactsModal
  } = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(false),
        {
    t
  } = next_translate_useTranslation__WEBPACK_IMPORTED_MODULE_3___default()('common'),
        translationPath = 'header.navBar.',
        translate = key => t(`${translationPath}${key}`),
        router = (0,next_dist_client_router__WEBPACK_IMPORTED_MODULE_1__.useRouter)(),
        node = (0,react__WEBPACK_IMPORTED_MODULE_2__.useRef)(),
        handleClose = e => {
    var _node$current;

    if (node !== null && node !== void 0 && (_node$current = node.current) !== null && _node$current !== void 0 && _node$current.contains(e.target)) {
      if (e.target.parentNode) return;
    }

    setShowDropdown(false);
  },
        buttonsInHomePage = [{
    id: 'main',
    key: Math.random(),
    frstContent: translate('main'),
    href: '/'
  }, {
    id: 'games',
    key: Math.random(),
    frstContent: translate('games'),
    href: '/games'
  }, {
    id: 'statistics',
    key: Math.random(),
    frstContent: translate('statistics.frs'),
    secContent: translate('statistics.sec'),
    href: '/statistics'
  }, {
    id: 'prediction',
    key: Math.random(),
    frstContent: translate('prediction.frs'),
    secContent: translate('prediction.sec'),
    href: '/prediction'
  }, {
    id: 'testimonials',
    key: Math.random(),
    frstContent: translate('testimonials'),
    href: '/testimonials'
  }, {
    id: 'aboutUs',
    key: Math.random(),
    frstContent: translate('aboutUs'),
    href: '/aboutUs'
  }, {
    id: 'contacts',
    key: Math.random(),
    frstContent: translate('contacts'),
    href: null,
    click: () => {
      setShowDropdown(false);
      setShowContactsModal(true);
    }
  }],
        buttons = buttonsInHomePage.filter(el => el.id !== "statistics");

  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
    className: (_Dropdown_module_scss__WEBPACK_IMPORTED_MODULE_7___default().dropdown),
    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
      className: (_Dropdown_module_scss__WEBPACK_IMPORTED_MODULE_7___default().dropdown_check),
      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("img", {
        src: _public_images_header_dropdown_lines_png__WEBPACK_IMPORTED_MODULE_4__.default.src,
        alt: "drop-check-icon",
        onClick: () => setShowDropdown(!showDropdown)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 103,
        columnNumber: 17
      }, this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 102,
      columnNumber: 13
    }, this), showDropdown && /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
      className: (_Dropdown_module_scss__WEBPACK_IMPORTED_MODULE_7___default().dropdown_menu),
      ref: node,
      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("ul", {
        className: (_Dropdown_module_scss__WEBPACK_IMPORTED_MODULE_7___default().dropdown_list),
        children: (router.pathname === '/' ? buttonsInHomePage : buttons).map(el => /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_5___default()), {
          href: el.href ? el.href : "",
          children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("li", {
            onClick: el.click && el.click,
            className: (_Dropdown_module_scss__WEBPACK_IMPORTED_MODULE_7___default().dropdown_list_items),
            children: [el.frstContent, " ", el.secContent]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 114,
            columnNumber: 37
          }, this)
        }, el.key, false, {
          fileName: _jsxFileName,
          lineNumber: 110,
          columnNumber: 33
        }, this))
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 107,
        columnNumber: 21
      }, this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 106,
      columnNumber: 17
    }, this), showContactsModal && /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_Pages_Contacts_ContactsModal__WEBPACK_IMPORTED_MODULE_6__.default, {
      opened: showContactsModal ? true : false,
      onModalClose: () => setShowContactsModal(false)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 127,
      columnNumber: 17
    }, this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 101,
    columnNumber: 9
  }, this);
}

/***/ }),

/***/ "./components/Header/Bar/Login/Login.jsx":
/*!***********************************************!*\
  !*** ./components/Header/Bar/Login/Login.jsx ***!
  \***********************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Login": function() { return /* binding */ Login; }
/* harmony export */ });
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _common_auth_Modal_Modal__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../common/auth/Modal/Modal */ "./components/common/auth/Modal/Modal.jsx");
/* harmony import */ var _SocialMediaIcons_SocialMediaIcons__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./SocialMediaIcons/SocialMediaIcons */ "./components/Header/Bar/Login/SocialMediaIcons/SocialMediaIcons.jsx");
/* harmony import */ var _ResetPassword_ForgotPassword_ForgotPassword__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./ResetPassword/ForgotPassword/ForgotPassword */ "./components/Header/Bar/Login/ResetPassword/ForgotPassword/ForgotPassword.jsx");
/* harmony import */ var _LoginForm_LoginForm__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./LoginForm/LoginForm */ "./components/Header/Bar/Login/LoginForm/LoginForm.jsx");
/* harmony import */ var _Login_module_scss__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./Login.module.scss */ "./components/Header/Bar/Login/Login.module.scss");
/* harmony import */ var _Login_module_scss__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_Login_module_scss__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_5__);


var _jsxFileName = "C:\\Users\\user\\Desktop\\projects\\ait-projects\\foot-bet\\components\\Header\\Bar\\Login\\Login.jsx";
// components



 // styles



function Login({
  onModalClose
}) {
  const {
    0: showLoginModal,
    1: setShowLoginModal
  } = (0,react__WEBPACK_IMPORTED_MODULE_5__.useState)(true),
        {
    0: showResetPasswordModal,
    1: setShowResetPasswordModal
  } = (0,react__WEBPACK_IMPORTED_MODULE_5__.useState)(false);
  console.log(showResetPasswordModal);
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
    children: [showLoginModal && /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_common_auth_Modal_Modal__WEBPACK_IMPORTED_MODULE_1__.Modal, {
      onClose: onModalClose,
      contentStyles: (_Login_module_scss__WEBPACK_IMPORTED_MODULE_6___default().m_content),
      containerStyles: (_Login_module_scss__WEBPACK_IMPORTED_MODULE_6___default().m_container),
      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
        className: (_Login_module_scss__WEBPACK_IMPORTED_MODULE_6___default().login_container),
        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_SocialMediaIcons_SocialMediaIcons__WEBPACK_IMPORTED_MODULE_2__.SocialMediaIcons, {}, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 24,
          columnNumber: 25
        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_LoginForm_LoginForm__WEBPACK_IMPORTED_MODULE_4__.LoginForm, {
          onModalClose: onModalClose,
          handleResetPassModal: () => {
            setShowResetPasswordModal(true);
            setShowLoginModal(false);
          }
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 25,
          columnNumber: 25
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 23,
        columnNumber: 21
      }, this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 22,
      columnNumber: 17
    }, this), showResetPasswordModal && /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_ResetPassword_ForgotPassword_ForgotPassword__WEBPACK_IMPORTED_MODULE_3__.ForgotPassword, {
      onModalClose: onModalClose
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 35,
      columnNumber: 40
    }, this)]
  }, void 0, true);
}

/***/ }),

/***/ "./components/Header/Bar/Login/LoginForm/LoginForm.jsx":
/*!*************************************************************!*\
  !*** ./components/Header/Bar/Login/LoginForm/LoginForm.jsx ***!
  \*************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "LoginForm": function() { return /* binding */ LoginForm; }
/* harmony export */ });
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_translate_useTranslation__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next-translate/useTranslation */ "next-translate/useTranslation");
/* harmony import */ var next_translate_useTranslation__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_translate_useTranslation__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_hook_form__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-hook-form */ "react-hook-form");
/* harmony import */ var react_hook_form__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_hook_form__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var yup__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! yup */ "yup");
/* harmony import */ var yup__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(yup__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _hookform_resolvers_yup__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @hookform/resolvers/yup */ "@hookform/resolvers/yup");
/* harmony import */ var _hookform_resolvers_yup__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_hookform_resolvers_yup__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _lib_er_lib__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../../lib/er.lib */ "./lib/er.lib.js");
/* harmony import */ var _components_common_auth_InputContainer_InputContainer__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../../../../../components/common/auth/InputContainer/InputContainer */ "./components/common/auth/InputContainer/InputContainer.jsx");
/* harmony import */ var _common_Title__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../common/Title */ "./components/Header/Bar/Login/common/Title.jsx");
/* harmony import */ var _common_ResetPasswordLink__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../common/ResetPasswordLink */ "./components/Header/Bar/Login/common/ResetPasswordLink.jsx");
/* harmony import */ var _common_Submit__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../common/Submit */ "./components/Header/Bar/Login/common/Submit.jsx");
/* harmony import */ var _common_ToRegister__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../common/ToRegister */ "./components/Header/Bar/Login/common/ToRegister.jsx");
/* harmony import */ var _LoginForm_module_scss__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./LoginForm.module.scss */ "./components/Header/Bar/Login/LoginForm/LoginForm.module.scss");
/* harmony import */ var _LoginForm_module_scss__WEBPACK_IMPORTED_MODULE_16___default = /*#__PURE__*/__webpack_require__.n(_LoginForm_module_scss__WEBPACK_IMPORTED_MODULE_16__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! react-redux */ "react-redux");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var _redux_features_userSlice__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../../../../redux/features/userSlice */ "./redux/features/userSlice.js");
/* harmony import */ var _lib_request_destinations__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../../../../../lib/request-destinations */ "./lib/request-destinations.js");
/* harmony import */ var react_toastify__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! react-toastify */ "react-toastify");
/* harmony import */ var react_toastify__WEBPACK_IMPORTED_MODULE_14___default = /*#__PURE__*/__webpack_require__.n(react_toastify__WEBPACK_IMPORTED_MODULE_14__);
/* harmony import */ var next_dist_client_router__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! next/dist/client/router */ "./node_modules/next/dist/client/router.js");

var _jsxFileName = "C:\\Users\\user\\Desktop\\projects\\ait-projects\\foot-bet\\components\\Header\\Bar\\Login\\LoginForm\\LoginForm.jsx";
// hooks and helpers




 //components





 // styles 







function LoginForm({
  onModalClose,
  handleResetPassModal
}) {
  const router = (0,next_dist_client_router__WEBPACK_IMPORTED_MODULE_15__.useRouter)();

  const dispatch = (0,react_redux__WEBPACK_IMPORTED_MODULE_11__.useDispatch)(),
        // translation consfigs
  {
    t
  } = next_translate_useTranslation__WEBPACK_IMPORTED_MODULE_1___default()('common'),
        translationPath = 'registration.inputPlaceHolders.',
        translate = key => t(`${translationPath}${key}`),
        handle_to_register_click = () => {
    document.querySelector('body').style.overflow = 'visible';
    onModalClose();
  },
        // yup configs
  schema = yup__WEBPACK_IMPORTED_MODULE_3__.object().shape({
    email: yup__WEBPACK_IMPORTED_MODULE_3__.string().required().matches(/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/),
    password: yup__WEBPACK_IMPORTED_MODULE_3__.string().required().min(6)
  }),
        // form configs
  {
    register,
    handleSubmit,
    formState: {
      errors
    }
  } = (0,react_hook_form__WEBPACK_IMPORTED_MODULE_2__.useForm)({
    mode: 'onChange',
    resolver: (0,_hookform_resolvers_yup__WEBPACK_IMPORTED_MODULE_4__.yupResolver)(schema)
  }),
        // on form submit
  submit = async data => {
    try {
      var _await$request$data;

      const user = (_await$request$data = (await (0,_lib_er_lib__WEBPACK_IMPORTED_MODULE_5__.request)(_lib_request_destinations__WEBPACK_IMPORTED_MODULE_13__.LOGIN, data)).data) === null || _await$request$data === void 0 ? void 0 : _await$request$data.data;
      (0,_lib_er_lib__WEBPACK_IMPORTED_MODULE_5__.setCookie)(`access-token`, user.token, 1);
      dispatch((0,_redux_features_userSlice__WEBPACK_IMPORTED_MODULE_12__.login)(user));
      router.push(`/`);
    } catch (error) {
      var _error$response$data;

      (0,react_toastify__WEBPACK_IMPORTED_MODULE_14__.toast)(((_error$response$data = error.response.data) === null || _error$response$data === void 0 ? void 0 : _error$response$data.message) || `unknown error`, {
        type: `error`
      });
    }

    handle_to_register_click();
  };

  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
    className: (_LoginForm_module_scss__WEBPACK_IMPORTED_MODULE_16___default().container),
    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_common_Title__WEBPACK_IMPORTED_MODULE_7__.Title, {
      styles: (_LoginForm_module_scss__WEBPACK_IMPORTED_MODULE_16___default().title),
      content: t('header.loginModal.title')
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 72,
      columnNumber: 13
    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("form", {
      onSubmit: handleSubmit(submit),
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
        className: (_LoginForm_module_scss__WEBPACK_IMPORTED_MODULE_16___default().inputs),
        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_common_auth_InputContainer_InputContainer__WEBPACK_IMPORTED_MODULE_6__.InputContainer, {
          id: "name",
          type: "text",
          placeholder: translate('email'),
          errors: !!errors.email,
          other: register('email')
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 78,
          columnNumber: 21
        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_common_auth_InputContainer_InputContainer__WEBPACK_IMPORTED_MODULE_6__.InputContainer, {
          id: "password",
          type: "password",
          placeholder: translate('password'),
          errors: !!errors.password,
          other: register('password')
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 85,
          columnNumber: 21
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 77,
        columnNumber: 17
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_common_ResetPasswordLink__WEBPACK_IMPORTED_MODULE_8__.ResetPasswordLink, {
        click: handleResetPassModal,
        styles: (_LoginForm_module_scss__WEBPACK_IMPORTED_MODULE_16___default().reset_password),
        content: t('header.loginModal.resPassword')
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 93,
        columnNumber: 17
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_common_Submit__WEBPACK_IMPORTED_MODULE_9__.Submit, {
        styles: (_LoginForm_module_scss__WEBPACK_IMPORTED_MODULE_16___default().submit),
        content: t('header.loginModal.submit')
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 98,
        columnNumber: 17
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 76,
      columnNumber: 13
    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_common_ToRegister__WEBPACK_IMPORTED_MODULE_10__.ToRegister, {
      href: "/registration",
      click: handle_to_register_click,
      container_styles: (_LoginForm_module_scss__WEBPACK_IMPORTED_MODULE_16___default().to_register_container),
      content_styles: (_LoginForm_module_scss__WEBPACK_IMPORTED_MODULE_16___default().to_register_content),
      or: t('header.loginModal.or'),
      register_text_styles: (_LoginForm_module_scss__WEBPACK_IMPORTED_MODULE_16___default().to_register_text),
      content: t('header.loginModal.register')
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 103,
      columnNumber: 13
    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_toastify__WEBPACK_IMPORTED_MODULE_14__.ToastContainer, {}, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 114,
      columnNumber: 13
    }, this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 71,
    columnNumber: 9
  }, this);
}

/***/ }),

/***/ "./components/Header/Bar/Login/ResetPassword/ForgotPassword/ForgotPassword.jsx":
/*!*************************************************************************************!*\
  !*** ./components/Header/Bar/Login/ResetPassword/ForgotPassword/ForgotPassword.jsx ***!
  \*************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ForgotPassword": function() { return /* binding */ ForgotPassword; }
/* harmony export */ });
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_translate_useTranslation__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next-translate/useTranslation */ "next-translate/useTranslation");
/* harmony import */ var next_translate_useTranslation__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_translate_useTranslation__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_hook_form__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-hook-form */ "react-hook-form");
/* harmony import */ var react_hook_form__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_hook_form__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var yup__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! yup */ "yup");
/* harmony import */ var yup__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(yup__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _hookform_resolvers_yup__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @hookform/resolvers/yup */ "@hookform/resolvers/yup");
/* harmony import */ var _hookform_resolvers_yup__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_hookform_resolvers_yup__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _common_Title__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../common/Title */ "./components/Header/Bar/Login/common/Title.jsx");
/* harmony import */ var _components_common_auth_InputContainer_InputContainer__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../../../../../components/common/auth/InputContainer/InputContainer */ "./components/common/auth/InputContainer/InputContainer.jsx");
/* harmony import */ var _common_Submit__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../common/Submit */ "./components/Header/Bar/Login/common/Submit.jsx");
/* harmony import */ var _common_auth_Modal_Modal__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../../../../common/auth/Modal/Modal */ "./components/common/auth/Modal/Modal.jsx");
/* harmony import */ var _GetEmailCode_GetEmailCode__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../GetEmailCode/GetEmailCode */ "./components/Header/Bar/Login/ResetPassword/GetEmailCode/GetEmailCode.jsx");
/* harmony import */ var _ForgotPassword_module_scss__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./ForgotPassword.module.scss */ "./components/Header/Bar/Login/ResetPassword/ForgotPassword/ForgotPassword.module.scss");
/* harmony import */ var _ForgotPassword_module_scss__WEBPACK_IMPORTED_MODULE_14___default = /*#__PURE__*/__webpack_require__.n(_ForgotPassword_module_scss__WEBPACK_IMPORTED_MODULE_14__);
/* harmony import */ var _lib_er_lib__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../../../../../../lib/er.lib */ "./lib/er.lib.js");
/* harmony import */ var react_toastify__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! react-toastify */ "react-toastify");
/* harmony import */ var react_toastify__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(react_toastify__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var _lib_request_destinations__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../../../../../../lib/request-destinations */ "./lib/request-destinations.js");


var _jsxFileName = "C:\\Users\\user\\Desktop\\projects\\ait-projects\\foot-bet\\components\\Header\\Bar\\Login\\ResetPassword\\ForgotPassword\\ForgotPassword.jsx";
// hooks and helpers




 //components





 // styles





function ForgotPassword({
  onModalClose
}) {
  const // modal states pass => password Ml => Modal
  {
    0: showForgotPassMl,
    1: setShowForgotPassMl
  } = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)(true),
        {
    0: showGetEmailCodeMl,
    1: setShowEmailCodeMl
  } = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)(false),
        // translation consfigs
  {
    t
  } = next_translate_useTranslation__WEBPACK_IMPORTED_MODULE_1___default()('common'),
        translationPath = 'header.resetPasswordModal.',
        translate = key => t(`${translationPath}${key}`),
        // yup configs
  schema = yup__WEBPACK_IMPORTED_MODULE_4__.object().shape({
    email: yup__WEBPACK_IMPORTED_MODULE_4__.string().required().matches(/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/)
  }),
        // form configs
  {
    register,
    handleSubmit,
    formState: {
      errors
    }
  } = (0,react_hook_form__WEBPACK_IMPORTED_MODULE_2__.useForm)({
    mode: 'onChange',
    resolver: (0,_hookform_resolvers_yup__WEBPACK_IMPORTED_MODULE_5__.yupResolver)(schema)
  }),
        // on form submit
  submit = async data => {
    try {
      const {
        data: response
      } = await (0,_lib_er_lib__WEBPACK_IMPORTED_MODULE_11__.request)((0,_lib_request_destinations__WEBPACK_IMPORTED_MODULE_13__.START_RESET_PASSWORD)(data.email));
      const token = response.data.token;
      console.log(token);
      (0,_lib_er_lib__WEBPACK_IMPORTED_MODULE_11__.setCookie)(`reset-token`, token, 1 / 24 * 1);
      setShowForgotPassMl(false);
      setShowEmailCodeMl(true);
    } catch (err) {
      var _err$response$data;

      (0,react_toastify__WEBPACK_IMPORTED_MODULE_12__.toast)(((_err$response$data = err.response.data) === null || _err$response$data === void 0 ? void 0 : _err$response$data.message) || `unknown error`, {
        type: `error`
      });
    }
  };

  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
    children: [showForgotPassMl && /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_common_auth_Modal_Modal__WEBPACK_IMPORTED_MODULE_9__.Modal, {
      onClose: onModalClose,
      contentStyles: (_ForgotPassword_module_scss__WEBPACK_IMPORTED_MODULE_14___default().m_content),
      containerStyles: (_ForgotPassword_module_scss__WEBPACK_IMPORTED_MODULE_14___default().m_container),
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
        className: (_ForgotPassword_module_scss__WEBPACK_IMPORTED_MODULE_14___default().container),
        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_common_Title__WEBPACK_IMPORTED_MODULE_6__.Title, {
          styles: (_ForgotPassword_module_scss__WEBPACK_IMPORTED_MODULE_14___default().title),
          content: translate('title')
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 67,
          columnNumber: 25
        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("form", {
          onSubmit: handleSubmit(submit),
          children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
            className: (_ForgotPassword_module_scss__WEBPACK_IMPORTED_MODULE_14___default().inputs),
            children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_common_auth_InputContainer_InputContainer__WEBPACK_IMPORTED_MODULE_7__.InputContainer, {
              id: "name",
              type: "text",
              placeholder: t('registration.inputPlaceHolders.email'),
              errors: !!errors.email,
              other: register('email')
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 73,
              columnNumber: 33
            }, this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 72,
            columnNumber: 29
          }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_common_Submit__WEBPACK_IMPORTED_MODULE_8__.Submit, {
            styles: (_ForgotPassword_module_scss__WEBPACK_IMPORTED_MODULE_14___default().submit),
            content: translate('send')
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 81,
            columnNumber: 29
          }, this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 71,
          columnNumber: 25
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 66,
        columnNumber: 21
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_toastify__WEBPACK_IMPORTED_MODULE_12__.ToastContainer, {}, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 87,
        columnNumber: 21
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 65,
      columnNumber: 17
    }, this), showGetEmailCodeMl && /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_GetEmailCode_GetEmailCode__WEBPACK_IMPORTED_MODULE_10__.GetEmailCode, {
      onModalClose: onModalClose
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 91,
      columnNumber: 39
    }, this)]
  }, void 0, true);
}

/***/ }),

/***/ "./components/Header/Bar/Login/ResetPassword/GetEmailCode/GetEmailCode.jsx":
/*!*********************************************************************************!*\
  !*** ./components/Header/Bar/Login/ResetPassword/GetEmailCode/GetEmailCode.jsx ***!
  \*********************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "GetEmailCode": function() { return /* binding */ GetEmailCode; }
/* harmony export */ });
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_translate_useTranslation__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next-translate/useTranslation */ "next-translate/useTranslation");
/* harmony import */ var next_translate_useTranslation__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_translate_useTranslation__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_hook_form__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-hook-form */ "react-hook-form");
/* harmony import */ var react_hook_form__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_hook_form__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var yup__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! yup */ "yup");
/* harmony import */ var yup__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(yup__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _hookform_resolvers_yup__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @hookform/resolvers/yup */ "@hookform/resolvers/yup");
/* harmony import */ var _hookform_resolvers_yup__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_hookform_resolvers_yup__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _input_configs__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./input_configs */ "./components/Header/Bar/Login/ResetPassword/GetEmailCode/input_configs.js");
/* harmony import */ var _common_Title__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../common/Title */ "./components/Header/Bar/Login/common/Title.jsx");
/* harmony import */ var _common_Submit__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../common/Submit */ "./components/Header/Bar/Login/common/Submit.jsx");
/* harmony import */ var _common_auth_Modal_Modal__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../../../../common/auth/Modal/Modal */ "./components/common/auth/Modal/Modal.jsx");
/* harmony import */ var _NewPassword_NewPassword__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../NewPassword/NewPassword */ "./components/Header/Bar/Login/ResetPassword/NewPassword/NewPassword.jsx");
/* harmony import */ var _GetEmailCode_module_scss__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./GetEmailCode.module.scss */ "./components/Header/Bar/Login/ResetPassword/GetEmailCode/GetEmailCode.module.scss");
/* harmony import */ var _GetEmailCode_module_scss__WEBPACK_IMPORTED_MODULE_14___default = /*#__PURE__*/__webpack_require__.n(_GetEmailCode_module_scss__WEBPACK_IMPORTED_MODULE_14__);
/* harmony import */ var _lib_er_lib__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../../../../../../lib/er.lib */ "./lib/er.lib.js");
/* harmony import */ var react_toastify__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! react-toastify */ "react-toastify");
/* harmony import */ var react_toastify__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(react_toastify__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var _lib_request_destinations__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../../../../../../lib/request-destinations */ "./lib/request-destinations.js");


var _jsxFileName = "C:\\Users\\user\\Desktop\\projects\\ait-projects\\foot-bet\\components\\Header\\Bar\\Login\\ResetPassword\\GetEmailCode\\GetEmailCode.jsx";

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

// hooks and helpers





 //components




 // styles





function GetEmailCode({
  onModalClose
}) {
  const // modal states pass => password Ml => Modal
  {
    0: showGetEmailCodeMl,
    1: setShowEmailCodeMl
  } = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)(true),
        {
    0: showNewPasswordMl,
    1: setShowNewPasswordMl
  } = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)(false),
        // translation consfigs
  {
    t
  } = next_translate_useTranslation__WEBPACK_IMPORTED_MODULE_1___default()('common'),
        translationPath = 'header.getEmailCodeModal.',
        translate = key => t(`${translationPath}${key}`),
        // yup configs
  schema = yup__WEBPACK_IMPORTED_MODULE_4__.object().shape({
    num1: yup__WEBPACK_IMPORTED_MODULE_4__.string().required().matches(/[0-9]/mg),
    num2: yup__WEBPACK_IMPORTED_MODULE_4__.string().required().matches(/[0-9]/mg),
    num3: yup__WEBPACK_IMPORTED_MODULE_4__.string().required().matches(/[0-9]/mg),
    num4: yup__WEBPACK_IMPORTED_MODULE_4__.string().required().matches(/[0-9]/mg),
    num5: yup__WEBPACK_IMPORTED_MODULE_4__.string().required().matches(/[0-9]/mg),
    num6: yup__WEBPACK_IMPORTED_MODULE_4__.string().required().matches(/[0-9]/mg)
  }),
        // form configs
  {
    register,
    handleSubmit,
    formState: {
      errors
    }
  } = (0,react_hook_form__WEBPACK_IMPORTED_MODULE_2__.useForm)({
    mode: 'onChange',
    resolver: (0,_hookform_resolvers_yup__WEBPACK_IMPORTED_MODULE_5__.yupResolver)(schema)
  }),
        // input jumps 
  jump = x => {
    if (x.value.length) {
      x = x.nextSibling;

      if (x && /text/.test(x.type)) {
        x.focus();
      }
    }
  },
        jumpBack = x => {
    if (x.target.value.length == 0) {
      if (x.code === 'Backspace') {
        if (document.querySelector(".move:focus").previousSibling) {
          document.querySelector(".move:focus").previousSibling.focus();
        }
      }
    }
  },
        // on form submit
  submit = async data => {
    try {
      data = Object.values(data).reduce((ac, el) => ac + el);
      console.log(data);
      await (0,_lib_er_lib__WEBPACK_IMPORTED_MODULE_11__.request)(_lib_request_destinations__WEBPACK_IMPORTED_MODULE_13__.VERIFY_PASSWORD_RESET, {
        code: data
      }, {
        headers: {
          'Authorization': `Bearer ${(0,_lib_er_lib__WEBPACK_IMPORTED_MODULE_11__.getCookie)(`reset-token`)}`
        }
      });
      setShowEmailCodeMl(false);
      setShowNewPasswordMl(true);
    } catch (err) {
      var _err$response$data;

      (0,react_toastify__WEBPACK_IMPORTED_MODULE_12__.toast)(((_err$response$data = err.response.data) === null || _err$response$data === void 0 ? void 0 : _err$response$data.message) || `unknown error`, {
        type: `error`
      });
    }
  };

  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
    children: [showGetEmailCodeMl && /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_common_auth_Modal_Modal__WEBPACK_IMPORTED_MODULE_9__.Modal, {
      onClose: onModalClose,
      contentStyles: (_GetEmailCode_module_scss__WEBPACK_IMPORTED_MODULE_14___default().m_content),
      containerStyles: (_GetEmailCode_module_scss__WEBPACK_IMPORTED_MODULE_14___default().m_container),
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
        className: (_GetEmailCode_module_scss__WEBPACK_IMPORTED_MODULE_14___default().container),
        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_common_Title__WEBPACK_IMPORTED_MODULE_7__.Title, {
          styles: (_GetEmailCode_module_scss__WEBPACK_IMPORTED_MODULE_14___default().title),
          content: translate('title')
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 89,
          columnNumber: 25
        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("form", {
          onSubmit: handleSubmit(submit),
          children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_common_Title__WEBPACK_IMPORTED_MODULE_7__.Title, {
            styles: (_GetEmailCode_module_scss__WEBPACK_IMPORTED_MODULE_14___default().description),
            content: translate('description')
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 94,
            columnNumber: 29
          }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
            className: (_GetEmailCode_module_scss__WEBPACK_IMPORTED_MODULE_14___default().inputs),
            children: _input_configs__WEBPACK_IMPORTED_MODULE_6__.inputs.map((el, i) => /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("input", _objectSpread({
              id: el.id,
              className: `${el.class} 
                                                ${errors.num1 || errors.num2 || errors.num3 || errors.num4 || errors.num5 || errors.num6 ? (_GetEmailCode_module_scss__WEBPACK_IMPORTED_MODULE_14___default().error_input) : (_GetEmailCode_module_scss__WEBPACK_IMPORTED_MODULE_14___default().success_input)}`.trim(),
              type: el.type,
              maxLength: el.maxLength,
              onInput: e => jump(e.target),
              onKeyDown: e => jumpBack(e)
            }, register('num' + (i + 1))), el.key, false, {
              fileName: _jsxFileName,
              lineNumber: 101,
              columnNumber: 41
            }, this))
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 98,
            columnNumber: 29
          }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_common_Submit__WEBPACK_IMPORTED_MODULE_8__.Submit, {
            styles: (_GetEmailCode_module_scss__WEBPACK_IMPORTED_MODULE_14___default().submit),
            content: translate('send')
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 123,
            columnNumber: 29
          }, this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 93,
          columnNumber: 25
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 88,
        columnNumber: 21
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_toastify__WEBPACK_IMPORTED_MODULE_12__.ToastContainer, {}, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 129,
        columnNumber: 21
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 87,
      columnNumber: 17
    }, this), showNewPasswordMl && /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_NewPassword_NewPassword__WEBPACK_IMPORTED_MODULE_10__.NewPassword, {
      onModalClose: onModalClose
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 133,
      columnNumber: 38
    }, this)]
  }, void 0, true);
}

/***/ }),

/***/ "./components/Header/Bar/Login/ResetPassword/GetEmailCode/input_configs.js":
/*!*********************************************************************************!*\
  !*** ./components/Header/Bar/Login/ResetPassword/GetEmailCode/input_configs.js ***!
  \*********************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "inputs": function() { return /* binding */ inputs; }
/* harmony export */ });
const // input configs
inputs = [{
  id: 'first',
  type: 'text',
  class: 'move',
  key: Math.random(),
  maxLength: "1"
}, {
  id: 'second',
  type: 'text',
  class: 'move',
  key: Math.random(),
  maxLength: '1'
}, {
  id: 'third',
  type: 'text',
  class: 'move',
  key: Math.random(),
  maxLength: '1'
}, {
  id: 'fourth',
  type: 'text',
  class: 'move',
  key: Math.random(),
  maxLength: '1'
}, {
  id: 'fifth',
  type: 'text',
  class: 'move',
  key: Math.random(),
  maxLength: '1'
}, {
  id: 'sixth',
  type: 'text',
  class: 'move',
  key: Math.random(),
  maxLength: '1'
}];

/***/ }),

/***/ "./components/Header/Bar/Login/ResetPassword/NewPassword/NewPassword.jsx":
/*!*******************************************************************************!*\
  !*** ./components/Header/Bar/Login/ResetPassword/NewPassword/NewPassword.jsx ***!
  \*******************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "NewPassword": function() { return /* binding */ NewPassword; }
/* harmony export */ });
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_translate_useTranslation__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next-translate/useTranslation */ "next-translate/useTranslation");
/* harmony import */ var next_translate_useTranslation__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_translate_useTranslation__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_hook_form__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-hook-form */ "react-hook-form");
/* harmony import */ var react_hook_form__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_hook_form__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var yup__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! yup */ "yup");
/* harmony import */ var yup__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(yup__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _hookform_resolvers_yup__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @hookform/resolvers/yup */ "@hookform/resolvers/yup");
/* harmony import */ var _hookform_resolvers_yup__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_hookform_resolvers_yup__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _common_Title__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../common/Title */ "./components/Header/Bar/Login/common/Title.jsx");
/* harmony import */ var _components_common_auth_InputContainer_InputContainer__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../../../../../components/common/auth/InputContainer/InputContainer */ "./components/common/auth/InputContainer/InputContainer.jsx");
/* harmony import */ var _common_Submit__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../common/Submit */ "./components/Header/Bar/Login/common/Submit.jsx");
/* harmony import */ var _common_auth_Modal_Modal__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../../../../common/auth/Modal/Modal */ "./components/common/auth/Modal/Modal.jsx");
/* harmony import */ var react_toastify__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! react-toastify */ "react-toastify");
/* harmony import */ var react_toastify__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(react_toastify__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var _NewPassword_module_scss__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./NewPassword.module.scss */ "./components/Header/Bar/Login/ResetPassword/NewPassword/NewPassword.module.scss");
/* harmony import */ var _NewPassword_module_scss__WEBPACK_IMPORTED_MODULE_14___default = /*#__PURE__*/__webpack_require__.n(_NewPassword_module_scss__WEBPACK_IMPORTED_MODULE_14__);
/* harmony import */ var _Success_Success__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../Success/Success */ "./components/Header/Bar/Login/ResetPassword/Success/Success.jsx");
/* harmony import */ var _lib_er_lib__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../../../../../../lib/er.lib */ "./lib/er.lib.js");
/* harmony import */ var _lib_request_destinations__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../../../../../../lib/request-destinations */ "./lib/request-destinations.js");


var _jsxFileName = "C:\\Users\\user\\Desktop\\projects\\ait-projects\\foot-bet\\components\\Header\\Bar\\Login\\ResetPassword\\NewPassword\\NewPassword.jsx";
// hooks and helpers




 //components





 // styles





function NewPassword({
  onModalClose
}) {
  const // modal states pass => password Ml => Modal
  {
    0: showNewPassMl,
    1: setShowNewPassMl
  } = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)(true),
        {
    0: showSuccessMl,
    1: setShowSuccessMl
  } = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)(false),
        // translation consfigs
  {
    t
  } = next_translate_useTranslation__WEBPACK_IMPORTED_MODULE_1___default()('common'),
        translationPath = 'header.newPasswordModal.',
        translate = key => t(`${translationPath}${key}`),
        // yup configs
  schema = yup__WEBPACK_IMPORTED_MODULE_4__.object().shape({
    password: yup__WEBPACK_IMPORTED_MODULE_4__.string().required().min(6)
  }),
        // form configs
  {
    register,
    handleSubmit,
    formState: {
      errors
    }
  } = (0,react_hook_form__WEBPACK_IMPORTED_MODULE_2__.useForm)({
    mode: 'onChange',
    resolver: (0,_hookform_resolvers_yup__WEBPACK_IMPORTED_MODULE_5__.yupResolver)(schema)
  }),
        // on form submit
  submit = async data => {
    try {
      await (0,_lib_er_lib__WEBPACK_IMPORTED_MODULE_12__.request)(_lib_request_destinations__WEBPACK_IMPORTED_MODULE_13__.SET_NEW_PASSWORD, {
        password: data.password
      }, {
        headers: {
          'Authorization': `Bearer ${(0,_lib_er_lib__WEBPACK_IMPORTED_MODULE_12__.getCookie)(`reset-token`)}`
        }
      });
      setShowNewPassMl(false);
      setShowSuccessMl(true);
    } catch (err) {
      var _err$response$data;

      (0,react_toastify__WEBPACK_IMPORTED_MODULE_10__.toast)(((_err$response$data = err.response.data) === null || _err$response$data === void 0 ? void 0 : _err$response$data.message) || `unknown error`, {
        type: `error`
      });
    }
  };

  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
    children: [showNewPassMl && /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_common_auth_Modal_Modal__WEBPACK_IMPORTED_MODULE_9__.Modal, {
      onClose: onModalClose,
      contentStyles: (_NewPassword_module_scss__WEBPACK_IMPORTED_MODULE_14___default().m_content),
      containerStyles: (_NewPassword_module_scss__WEBPACK_IMPORTED_MODULE_14___default().m_container),
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
        className: (_NewPassword_module_scss__WEBPACK_IMPORTED_MODULE_14___default().container),
        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_common_Title__WEBPACK_IMPORTED_MODULE_6__.Title, {
          styles: (_NewPassword_module_scss__WEBPACK_IMPORTED_MODULE_14___default().title),
          content: translate('title')
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 66,
          columnNumber: 25
        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("form", {
          onSubmit: handleSubmit(submit),
          children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
            className: (_NewPassword_module_scss__WEBPACK_IMPORTED_MODULE_14___default().inputs),
            children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_common_auth_InputContainer_InputContainer__WEBPACK_IMPORTED_MODULE_7__.InputContainer, {
              id: "password",
              type: "password",
              placeholder: t('registration.inputPlaceHolders.password'),
              errors: !!errors.password,
              other: register('password')
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 72,
              columnNumber: 33
            }, this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 71,
            columnNumber: 29
          }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_common_Submit__WEBPACK_IMPORTED_MODULE_8__.Submit, {
            styles: (_NewPassword_module_scss__WEBPACK_IMPORTED_MODULE_14___default().submit),
            content: translate('success')
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 80,
            columnNumber: 29
          }, this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 70,
          columnNumber: 25
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 65,
        columnNumber: 21
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_toastify__WEBPACK_IMPORTED_MODULE_10__.ToastContainer, {}, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 86,
        columnNumber: 21
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 64,
      columnNumber: 17
    }, this), showSuccessMl && /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_Success_Success__WEBPACK_IMPORTED_MODULE_11__.Success, {
      onModalClose: onModalClose
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 90,
      columnNumber: 34
    }, this)]
  }, void 0, true);
}

/***/ }),

/***/ "./components/Header/Bar/Login/ResetPassword/Success/Success.jsx":
/*!***********************************************************************!*\
  !*** ./components/Header/Bar/Login/ResetPassword/Success/Success.jsx ***!
  \***********************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Success": function() { return /* binding */ Success; }
/* harmony export */ });
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_translate_useTranslation__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next-translate/useTranslation */ "next-translate/useTranslation");
/* harmony import */ var next_translate_useTranslation__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_translate_useTranslation__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _common_auth_Modal_Modal__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../common/auth/Modal/Modal */ "./components/common/auth/Modal/Modal.jsx");
/* harmony import */ var _common_Title__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../common/Title */ "./components/Header/Bar/Login/common/Title.jsx");
/* harmony import */ var _Success_module_scss__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./Success.module.scss */ "./components/Header/Bar/Login/ResetPassword/Success/Success.module.scss");
/* harmony import */ var _Success_module_scss__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_Success_module_scss__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _public_images_header_login_success_png__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../../../../public/images/header/login/success.png */ "./public/images/header/login/success.png");

var _jsxFileName = "C:\\Users\\user\\Desktop\\projects\\ait-projects\\foot-bet\\components\\Header\\Bar\\Login\\ResetPassword\\Success\\Success.jsx";
// hooks helpers
 // components


 // styles

 // icons


function Success({
  onModalClose
}) {
  const // translation    
  {
    t
  } = next_translate_useTranslation__WEBPACK_IMPORTED_MODULE_1___default()('common'),
        translationPath = 'header.successModal.',
        translate = key => t(`${translationPath}${key}`);

  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_common_auth_Modal_Modal__WEBPACK_IMPORTED_MODULE_2__.Modal, {
    onClose: onModalClose,
    contentStyles: (_Success_module_scss__WEBPACK_IMPORTED_MODULE_5___default().m_content),
    containerStyles: (_Success_module_scss__WEBPACK_IMPORTED_MODULE_5___default().m_container),
    children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
      className: (_Success_module_scss__WEBPACK_IMPORTED_MODULE_5___default().container),
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_common_Title__WEBPACK_IMPORTED_MODULE_3__.Title, {
        styles: (_Success_module_scss__WEBPACK_IMPORTED_MODULE_5___default().title),
        content: translate('title')
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 22,
        columnNumber: 17
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
        className: (_Success_module_scss__WEBPACK_IMPORTED_MODULE_5___default().icon_container),
        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("img", {
          src: _public_images_header_login_success_png__WEBPACK_IMPORTED_MODULE_4__.default.src,
          alt: "Success img"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 27,
          columnNumber: 21
        }, this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 26,
        columnNumber: 17
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 21,
      columnNumber: 13
    }, this)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 20,
    columnNumber: 9
  }, this);
}

/***/ }),

/***/ "./components/Header/Bar/Login/SocialMediaIcons/SocialMediaIcons.jsx":
/*!***************************************************************************!*\
  !*** ./components/Header/Bar/Login/SocialMediaIcons/SocialMediaIcons.jsx ***!
  \***************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SocialMediaIcons": function() { return /* binding */ SocialMediaIcons; }
/* harmony export */ });
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _public_images_header_login_facebook_svg__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../../../../public/images/header/login/facebook.svg */ "./public/images/header/login/facebook.svg");
/* harmony import */ var _public_images_header_login_gmail_svg__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../../../public/images/header/login/gmail.svg */ "./public/images/header/login/gmail.svg");
/* harmony import */ var _public_images_header_login_vk_svg__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../../../../public/images/header/login/vk.svg */ "./public/images/header/login/vk.svg");
/* harmony import */ var _public_images_header_login_twitter_svg__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../../../../public/images/header/login/twitter.svg */ "./public/images/header/login/twitter.svg");
/* harmony import */ var _SocialMediaIcons_module_scss__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./SocialMediaIcons.module.scss */ "./components/Header/Bar/Login/SocialMediaIcons/SocialMediaIcons.module.scss");
/* harmony import */ var _SocialMediaIcons_module_scss__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(_SocialMediaIcons_module_scss__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var react_facebook_login__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react-facebook-login */ "react-facebook-login");
/* harmony import */ var react_facebook_login__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react_facebook_login__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var react_google_login__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react-google-login */ "react-google-login");
/* harmony import */ var react_google_login__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react_google_login__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var react_twitter_login__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react-twitter-login */ "react-twitter-login");
/* harmony import */ var react_twitter_login__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(react_twitter_login__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_8__);

var _jsxFileName = "C:\\Users\\user\\Desktop\\projects\\ait-projects\\foot-bet\\components\\Header\\Bar\\Login\\SocialMediaIcons\\SocialMediaIcons.jsx";
// Icons



 // scss

 // components





const icons = [{
  iconUrl: _public_images_header_login_facebook_svg__WEBPACK_IMPORTED_MODULE_1__.default.src
}, {
  iconUrl: _public_images_header_login_gmail_svg__WEBPACK_IMPORTED_MODULE_2__.default.src
}, {
  iconUrl: _public_images_header_login_vk_svg__WEBPACK_IMPORTED_MODULE_3__.default.src
}, {
  iconUrl: _public_images_header_login_twitter_svg__WEBPACK_IMPORTED_MODULE_4__.default.src
}];

const responseFacebook = response => {
  console.log(response);
};

const responseGoogle = response => {
  console.log(response);
};

const TWITTER_CONSUMER_KEY = "";
const TWITTER_CONSUMER_SECRET = "";
function SocialMediaIcons() {
  (0,react__WEBPACK_IMPORTED_MODULE_8__.useEffect)(() => {
    VK.init({
      apiId: '7911294'
    });
  }, []);

  function onSocialMediaBtnClick(i) {
    if (i === 0) {
      const facebookLoginBtn = document.querySelector(`.facebook-login-btn`);
      console.log(facebookLoginBtn);
      if (facebookLoginBtn) facebookLoginBtn.click();
    } else if (i === 1) {
      const googleLoginBtn = document.querySelector(`.google-login-btn`);
      if (googleLoginBtn) googleLoginBtn.click();
    } else if (i === 2) {
      VK.Auth.login(function (response) {
        if (response.session) {
          /*User authorization succeeded*/
          console.log(response);

          if (response.status == 'connected') {
            /*Selected user access settings, if they are requested*/
          }
        } else {
            /*User clicks the cancel button in the authorization window*/
          }
      });
    } else if (i === 3) {}
  }

  const twitterAuthHandler = (err, data) => {
    console.log(err, data);
  };

  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
    className: (_SocialMediaIcons_module_scss__WEBPACK_IMPORTED_MODULE_9___default().conteiner),
    children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
      className: (_SocialMediaIcons_module_scss__WEBPACK_IMPORTED_MODULE_9___default().content),
      children: icons.map((el, i) => {
        return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
          className: (_SocialMediaIcons_module_scss__WEBPACK_IMPORTED_MODULE_9___default().iconContent),
          children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("a", {
            target: "_blank",
            children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
              className: (_SocialMediaIcons_module_scss__WEBPACK_IMPORTED_MODULE_9___default().iconBody),
              children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("img", {
                src: el.iconUrl,
                alt: "",
                onClick: () => onSocialMediaBtnClick(i),
                className: (_SocialMediaIcons_module_scss__WEBPACK_IMPORTED_MODULE_9___default().icon),
                style: {
                  cursor: 'pointer'
                }
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 94,
                columnNumber: 41
              }, this), i === 0 && /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((react_facebook_login__WEBPACK_IMPORTED_MODULE_5___default()), {
                containerStyle: {
                  display: `none`
                },
                cssClass: "facebook-login-btn",
                appId: "118863770361683",
                fields: "name,email,picture",
                callback: responseFacebook
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 102,
                columnNumber: 49
              }, this), i === 1 && /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((react_google_login__WEBPACK_IMPORTED_MODULE_6___default()), {
                clientId: "1089618047943-r91su9qkc0c9npo1tfoff3sp8421bt5g.apps.googleusercontent.com",
                render: renderProps => /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("button", {
                  onClick: renderProps.onClick,
                  disabled: renderProps.disabled,
                  style: {
                    display: 'none'
                  },
                  className: "google-login-btn"
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 115,
                  columnNumber: 57
                }, this),
                cookiePolicy: 'single_host_origin',
                onSuccess: responseGoogle,
                onFailure: responseGoogle
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 112,
                columnNumber: 49
              }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((react_twitter_login__WEBPACK_IMPORTED_MODULE_7___default()), {
                authCallback: twitterAuthHandler,
                consumerKey: TWITTER_CONSUMER_KEY,
                consumerSecret: TWITTER_CONSUMER_SECRET
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 128,
                columnNumber: 45
              }, this)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 93,
              columnNumber: 37
            }, this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 92,
            columnNumber: 33
          }, this)
        }, Math.random() * 10, false, {
          fileName: _jsxFileName,
          lineNumber: 91,
          columnNumber: 29
        }, this);
      })
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 87,
      columnNumber: 13
    }, this)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 86,
    columnNumber: 9
  }, this);
} // TODO
// add foot footbet domain in google develpors account

/***/ }),

/***/ "./components/Header/Bar/Login/common/ResetPasswordLink.jsx":
/*!******************************************************************!*\
  !*** ./components/Header/Bar/Login/common/ResetPasswordLink.jsx ***!
  \******************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ResetPasswordLink": function() { return /* binding */ ResetPasswordLink; }
/* harmony export */ });
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);

var _jsxFileName = "C:\\Users\\user\\Desktop\\projects\\ait-projects\\foot-bet\\components\\Header\\Bar\\Login\\common\\ResetPasswordLink.jsx";
function ResetPasswordLink({
  styles,
  content,
  click
}) {
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
    className: styles,
    children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("span", {
      onClick: click,
      children: content
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 5,
      columnNumber: 13
    }, this)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 4,
    columnNumber: 9
  }, this);
}

/***/ }),

/***/ "./components/Header/Bar/Login/common/Submit.jsx":
/*!*******************************************************!*\
  !*** ./components/Header/Bar/Login/common/Submit.jsx ***!
  \*******************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Submit": function() { return /* binding */ Submit; }
/* harmony export */ });
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);

var _jsxFileName = "C:\\Users\\user\\Desktop\\projects\\ait-projects\\foot-bet\\components\\Header\\Bar\\Login\\common\\Submit.jsx";
function Submit({
  styles,
  content,
  click
}) {
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
    className: styles,
    children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("button", {
      type: "submit",
      children: content
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 4,
      columnNumber: 13
    }, this)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 3,
    columnNumber: 9
  }, this);
}

/***/ }),

/***/ "./components/Header/Bar/Login/common/Title.jsx":
/*!******************************************************!*\
  !*** ./components/Header/Bar/Login/common/Title.jsx ***!
  \******************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Title": function() { return /* binding */ Title; }
/* harmony export */ });
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);

var _jsxFileName = "C:\\Users\\user\\Desktop\\projects\\ait-projects\\foot-bet\\components\\Header\\Bar\\Login\\common\\Title.jsx";
function Title({
  styles,
  content
}) {
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
    className: styles,
    children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("p", {
      children: content
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 4,
      columnNumber: 13
    }, this)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 3,
    columnNumber: 9
  }, this);
}

/***/ }),

/***/ "./components/Header/Bar/Login/common/ToRegister.jsx":
/*!***********************************************************!*\
  !*** ./components/Header/Bar/Login/common/ToRegister.jsx ***!
  \***********************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ToRegister": function() { return /* binding */ ToRegister; }
/* harmony export */ });
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_1__);

var _jsxFileName = "C:\\Users\\user\\Desktop\\projects\\ait-projects\\foot-bet\\components\\Header\\Bar\\Login\\common\\ToRegister.jsx";

function ToRegister({
  container_styles,
  content_styles,
  or,
  register_text_styles,
  content,
  href,
  click
}) {
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
    className: container_styles,
    onClick: click,
    children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
      className: content_styles,
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("span", {
        children: or + " "
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 16,
        columnNumber: 17
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_1___default()), {
        href: href,
        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("span", {
          className: register_text_styles,
          children: content
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 22,
          columnNumber: 21
        }, this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 21,
        columnNumber: 17
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 15,
      columnNumber: 13
    }, this)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 12,
    columnNumber: 9
  }, this);
}

/***/ }),

/***/ "./components/Header/Bar/Logo/Logo.jsx":
/*!*********************************************!*\
  !*** ./components/Header/Bar/Logo/Logo.jsx ***!
  \*********************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Logo": function() { return /* binding */ Logo; }
/* harmony export */ });
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _Logo_module_scss__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Logo.module.scss */ "./components/Header/Bar/Logo/Logo.module.scss");
/* harmony import */ var _Logo_module_scss__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_Logo_module_scss__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _public_images_header_logo_svg__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../../../public/images/header/logo.svg */ "./public/images/header/logo.svg");

var _jsxFileName = "C:\\Users\\user\\Desktop\\projects\\ait-projects\\foot-bet\\components\\Header\\Bar\\Logo\\Logo.jsx";
// styles
 // components

 // images and icons


function Logo() {
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
    className: (_Logo_module_scss__WEBPACK_IMPORTED_MODULE_3___default().logo_conatiner),
    children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_1___default()), {
      href: "/",
      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("img", {
        src: _public_images_header_logo_svg__WEBPACK_IMPORTED_MODULE_2__.default.src,
        alt: "FootBet Logo"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 15,
        columnNumber: 17
      }, this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 14,
      columnNumber: 13
    }, this)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 13,
    columnNumber: 9
  }, this);
}

/***/ }),

/***/ "./components/Header/Header.jsx":
/*!**************************************!*\
  !*** ./components/Header/Header.jsx ***!
  \**************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Header": function() { return /* binding */ Header; }
/* harmony export */ });
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-redux */ "react-redux");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _Header_module_scss__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./Header.module.scss */ "./components/Header/Header.module.scss");
/* harmony import */ var _Header_module_scss__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_Header_module_scss__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _Bar_Bar__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Bar/Bar */ "./components/Header/Bar/Bar.jsx");
/* harmony import */ var _NavBar_NavBar__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./NavBar/NavBar */ "./components/Header/NavBar/NavBar.jsx");
/* harmony import */ var _SocialMedia_SocialMedia__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./SocialMedia/SocialMedia */ "./components/Header/SocialMedia/SocialMedia.jsx");
/* harmony import */ var _public_images_header_footballer_svg__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../../../../public/images/header/footballer.svg */ "./public/images/header/footballer.svg");


var _jsxFileName = "C:\\Users\\user\\Desktop\\projects\\ait-projects\\foot-bet\\components\\Header\\Header.jsx";
// hooks
 //styles

 // components



 // imges


function Header({
  mainsPages
}) {
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
    children: mainsPages ? /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
      className: (_Header_module_scss__WEBPACK_IMPORTED_MODULE_6___default().header_container_big),
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
        className: (_Header_module_scss__WEBPACK_IMPORTED_MODULE_6___default().bar),
        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_SocialMedia_SocialMedia__WEBPACK_IMPORTED_MODULE_4__.SocialMedia, {}, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 19,
          columnNumber: 25
        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
          className: (_Header_module_scss__WEBPACK_IMPORTED_MODULE_6___default().bar_controler),
          children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
            className: (_Header_module_scss__WEBPACK_IMPORTED_MODULE_6___default().bar_conteiner),
            children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
              className: (_Header_module_scss__WEBPACK_IMPORTED_MODULE_6___default().bar_content),
              children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_Bar_Bar__WEBPACK_IMPORTED_MODULE_2__.Bar, {
                bar_items_cont: (_Header_module_scss__WEBPACK_IMPORTED_MODULE_6___default().bar_items_cont),
                bar_items: (_Header_module_scss__WEBPACK_IMPORTED_MODULE_6___default().bar_items)
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 23,
                columnNumber: 37
              }, this)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 22,
              columnNumber: 33
            }, this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 21,
            columnNumber: 29
          }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
            className: (_Header_module_scss__WEBPACK_IMPORTED_MODULE_6___default().footballer),
            children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("img", {
              src: _public_images_header_footballer_svg__WEBPACK_IMPORTED_MODULE_5__.default.src,
              alt: ""
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 30,
              columnNumber: 33
            }, this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 29,
            columnNumber: 29
          }, this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 20,
          columnNumber: 25
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 18,
        columnNumber: 21
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_NavBar_NavBar__WEBPACK_IMPORTED_MODULE_3__.NavBar, {}, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 34,
        columnNumber: 21
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 17,
      columnNumber: 17
    }, this) : /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
      className: (_Header_module_scss__WEBPACK_IMPORTED_MODULE_6___default().header_container_small),
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_Bar_Bar__WEBPACK_IMPORTED_MODULE_2__.Bar, {}, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 37,
        columnNumber: 21
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_NavBar_NavBar__WEBPACK_IMPORTED_MODULE_3__.NavBar, {}, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 38,
        columnNumber: 21
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 36,
      columnNumber: 17
    }, this)
  }, void 0, false);
}

/***/ }),

/***/ "./components/Header/NavBar/Button/Button.jsx":
/*!****************************************************!*\
  !*** ./components/Header/NavBar/Button/Button.jsx ***!
  \****************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Button": function() { return /* binding */ Button; }
/* harmony export */ });
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _Button_module_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Button.module.scss */ "./components/Header/NavBar/Button/Button.module.scss");
/* harmony import */ var _Button_module_scss__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_Button_module_scss__WEBPACK_IMPORTED_MODULE_2__);


var _jsxFileName = "C:\\Users\\user\\Desktop\\projects\\ait-projects\\foot-bet\\components\\Header\\NavBar\\Button\\Button.jsx";
 // styles


function Button({
  href,
  contentFrstP,
  contentSecP = null,
  active,
  click = null
}) {
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
    children: href !== null ? /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_1___default()), {
      href: href,
      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
        className: `${(_Button_module_scss__WEBPACK_IMPORTED_MODULE_2___default().container)} ${active && (_Button_module_scss__WEBPACK_IMPORTED_MODULE_2___default().active)}`,
        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
          className: (_Button_module_scss__WEBPACK_IMPORTED_MODULE_2___default().content),
          onClick: click,
          children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("pre", {
            children: [contentFrstP, /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("br", {}, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 24,
              columnNumber: 33
            }, this), contentSecP]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 20,
            columnNumber: 29
          }, this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 16,
          columnNumber: 25
        }, this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 15,
        columnNumber: 21
      }, this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 14,
      columnNumber: 17
    }, this) : /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
      className: `${(_Button_module_scss__WEBPACK_IMPORTED_MODULE_2___default().container)} ${active && (_Button_module_scss__WEBPACK_IMPORTED_MODULE_2___default().active)}`,
      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
        className: (_Button_module_scss__WEBPACK_IMPORTED_MODULE_2___default().content),
        onClick: click,
        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("pre", {
          children: [contentFrstP, /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("br", {}, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 42,
            columnNumber: 29
          }, this), contentSecP]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 38,
          columnNumber: 25
        }, this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 34,
        columnNumber: 21
      }, this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 33,
      columnNumber: 17
    }, this)
  }, void 0, false);
}

/***/ }),

/***/ "./components/Header/NavBar/NavBar.jsx":
/*!*********************************************!*\
  !*** ./components/Header/NavBar/NavBar.jsx ***!
  \*********************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "NavBar": function() { return /* binding */ NavBar; }
/* harmony export */ });
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_dist_client_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/dist/client/router */ "./node_modules/next/dist/client/router.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _NavBar_module_scss__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./NavBar.module.scss */ "./components/Header/NavBar/NavBar.module.scss");
/* harmony import */ var _NavBar_module_scss__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_NavBar_module_scss__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var next_translate_useTranslation__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next-translate/useTranslation */ "next-translate/useTranslation");
/* harmony import */ var next_translate_useTranslation__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_translate_useTranslation__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _Button_Button__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./Button/Button */ "./components/Header/NavBar/Button/Button.jsx");
/* harmony import */ var _Pages_Contacts_ContactsModal__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../Pages/Contacts/ContactsModal */ "./components/Pages/Contacts/ContactsModal.jsx");


var _jsxFileName = "C:\\Users\\user\\Desktop\\projects\\ait-projects\\foot-bet\\components\\Header\\NavBar\\NavBar.jsx";
// hooks and helpers

 // styles

 // translation 

 // componetns



function NavBar() {
  const //states
  {
    0: showContactsModal,
    1: setShowContactsModal
  } = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(false),
        {
    t
  } = next_translate_useTranslation__WEBPACK_IMPORTED_MODULE_3___default()('common'),
        translationPath = 'header.navBar.',
        translate = key => t(`${translationPath}${key}`),
        // router
  router = (0,next_dist_client_router__WEBPACK_IMPORTED_MODULE_1__.useRouter)(),
        // nav bar buttons configs
  buttonsInHomePage = [{
    id: 'main',
    key: Math.random(),
    frstContent: translate('main'),
    href: '/'
  }, {
    id: 'games',
    key: Math.random(),
    frstContent: translate('games'),
    href: '/games'
  }, {
    id: 'statistics',
    key: Math.random(),
    frstContent: translate('statistics.frs'),
    secContent: translate('statistics.sec'),
    href: '/statistics'
  }, {
    id: 'prediction',
    key: Math.random(),
    frstContent: translate('prediction.frs'),
    secContent: translate('prediction.sec'),
    href: '/prediction'
  }, {
    id: 'testimonials',
    key: Math.random(),
    frstContent: translate('testimonials'),
    href: '/testimonials'
  }, {
    id: 'aboutUs',
    key: Math.random(),
    frstContent: translate('aboutUs'),
    href: '/aboutUs'
  }, {
    id: 'contacts',
    key: Math.random(),
    frstContent: translate('contacts'),
    href: null,
    click: () => setShowContactsModal(true)
  }],
        buttons = buttonsInHomePage.filter(el => el.id !== "statistics");

  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
      className: `${(_NavBar_module_scss__WEBPACK_IMPORTED_MODULE_6___default().container)} ${router.pathname !== '/' ? (_NavBar_module_scss__WEBPACK_IMPORTED_MODULE_6___default().tablet) : null}`,
      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
        className: (_NavBar_module_scss__WEBPACK_IMPORTED_MODULE_6___default().content),
        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
          className: (_NavBar_module_scss__WEBPACK_IMPORTED_MODULE_6___default().top_on_tablet),
          children: (router.pathname === '/' ? buttonsInHomePage : buttons).map((el, i) => i < 3 && /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_Button_Button__WEBPACK_IMPORTED_MODULE_4__.Button, {
            contentFrstP: el.frstContent,
            contentSecP: el.secContent,
            href: el.href,
            active: router.pathname === el.href ? 'true' : null,
            click: el.click && el.click
          }, el.key, false, {
            fileName: _jsxFileName,
            lineNumber: 82,
            columnNumber: 43
          }, this))
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 78,
          columnNumber: 21
        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
          className: (_NavBar_module_scss__WEBPACK_IMPORTED_MODULE_6___default().bottom_on_tablet),
          children: (router.pathname === '/' ? buttonsInHomePage : buttons).map((el, i) => i >= 3 && /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_Button_Button__WEBPACK_IMPORTED_MODULE_4__.Button, {
            contentFrstP: el.frstContent,
            contentSecP: el.secContent,
            href: el.href,
            active: router.pathname === el.href ? 'true' : null,
            click: el.click && el.click
          }, el.key, false, {
            fileName: _jsxFileName,
            lineNumber: 96,
            columnNumber: 44
          }, this))
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 93,
          columnNumber: 21
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 77,
        columnNumber: 17
      }, this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 76,
      columnNumber: 13
    }, this), showContactsModal && /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_Pages_Contacts_ContactsModal__WEBPACK_IMPORTED_MODULE_5__.default, {
      opened: showContactsModal ? true : false,
      onModalClose: () => setShowContactsModal(false)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 113,
      columnNumber: 17
    }, this)]
  }, void 0, true);
}

/***/ }),

/***/ "./components/Header/SocialMedia/Icon/Icon.jsx":
/*!*****************************************************!*\
  !*** ./components/Header/SocialMedia/Icon/Icon.jsx ***!
  \*****************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Icon": function() { return /* binding */ Icon; }
/* harmony export */ });
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _Icon_module_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Icon.module.scss */ "./components/Header/SocialMedia/Icon/Icon.module.scss");
/* harmony import */ var _Icon_module_scss__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_Icon_module_scss__WEBPACK_IMPORTED_MODULE_1__);

var _jsxFileName = "C:\\Users\\user\\Desktop\\projects\\ait-projects\\foot-bet\\components\\Header\\SocialMedia\\Icon\\Icon.jsx";

function Icon({
  src,
  click,
  id
}) {
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
    className: (_Icon_module_scss__WEBPACK_IMPORTED_MODULE_1___default().container),
    id: id,
    children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("img", {
      src: src,
      alt: `icons-${src}`,
      onClick: click
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 6,
      columnNumber: 13
    }, this)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 5,
    columnNumber: 9
  }, this);
}

/***/ }),

/***/ "./components/Header/SocialMedia/Modals/Facebook/Facebook.jsx":
/*!********************************************************************!*\
  !*** ./components/Header/SocialMedia/Modals/Facebook/Facebook.jsx ***!
  \********************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Facebook": function() { return /* binding */ Facebook; }
/* harmony export */ });
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _common_auth_Modal_Modal__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../common/auth/Modal/Modal */ "./components/common/auth/Modal/Modal.jsx");
/* harmony import */ var _SocialMediaModal_module_scss__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../SocialMediaModal.module.scss */ "./components/Header/SocialMedia/Modals/SocialMediaModal.module.scss");
/* harmony import */ var _SocialMediaModal_module_scss__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_SocialMediaModal_module_scss__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_2__);

var _jsxFileName = "C:\\Users\\user\\Desktop\\projects\\ait-projects\\foot-bet\\components\\Header\\SocialMedia\\Modals\\Facebook\\Facebook.jsx";



function Facebook({
  onModalClose,
  data,
  parent
}) {
  const top = parent.current.children.facebook.offsetTop;
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_common_auth_Modal_Modal__WEBPACK_IMPORTED_MODULE_1__.Modal, {
    onClose: onModalClose,
    containerStyles: (_SocialMediaModal_module_scss__WEBPACK_IMPORTED_MODULE_3___default().container),
    contentStyles: (_SocialMediaModal_module_scss__WEBPACK_IMPORTED_MODULE_3___default().content),
    otherStyles: {
      top: top + 'px'
    },
    children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_2___default()), {
      href: data.url,
      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("a", {
        target: "_blank",
        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("p", {
          children: data.text
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 18,
          columnNumber: 21
        }, this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 17,
        columnNumber: 17
      }, this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 16,
      columnNumber: 13
    }, this)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 10,
    columnNumber: 9
  }, this);
}

/***/ }),

/***/ "./components/Header/SocialMedia/Modals/Instagram/Instagram.jsx":
/*!**********************************************************************!*\
  !*** ./components/Header/SocialMedia/Modals/Instagram/Instagram.jsx ***!
  \**********************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Instagram": function() { return /* binding */ Instagram; }
/* harmony export */ });
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _common_auth_Modal_Modal__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../common/auth/Modal/Modal */ "./components/common/auth/Modal/Modal.jsx");
/* harmony import */ var _SocialMediaModal_module_scss__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../SocialMediaModal.module.scss */ "./components/Header/SocialMedia/Modals/SocialMediaModal.module.scss");
/* harmony import */ var _SocialMediaModal_module_scss__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_SocialMediaModal_module_scss__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_2__);

var _jsxFileName = "C:\\Users\\user\\Desktop\\projects\\ait-projects\\foot-bet\\components\\Header\\SocialMedia\\Modals\\Instagram\\Instagram.jsx";



function Instagram({
  onModalClose,
  data,
  parent
}) {
  const top = parent.current.children.instagram.offsetTop;
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_common_auth_Modal_Modal__WEBPACK_IMPORTED_MODULE_1__.Modal, {
    onClose: onModalClose,
    containerStyles: (_SocialMediaModal_module_scss__WEBPACK_IMPORTED_MODULE_3___default().container),
    contentStyles: (_SocialMediaModal_module_scss__WEBPACK_IMPORTED_MODULE_3___default().content),
    otherStyles: {
      top: top + 'px'
    },
    children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_2___default()), {
      href: data.url,
      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("a", {
        target: "_blank",
        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("p", {
          children: data.text
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 18,
          columnNumber: 21
        }, this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 17,
        columnNumber: 17
      }, this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 16,
      columnNumber: 13
    }, this)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 10,
    columnNumber: 9
  }, this);
}

/***/ }),

/***/ "./components/Header/SocialMedia/Modals/Phone/Phone.jsx":
/*!**************************************************************!*\
  !*** ./components/Header/SocialMedia/Modals/Phone/Phone.jsx ***!
  \**************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Phone": function() { return /* binding */ Phone; }
/* harmony export */ });
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _common_auth_Modal_Modal__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../common/auth/Modal/Modal */ "./components/common/auth/Modal/Modal.jsx");
/* harmony import */ var _SocialMediaModal_module_scss__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../SocialMediaModal.module.scss */ "./components/Header/SocialMedia/Modals/SocialMediaModal.module.scss");
/* harmony import */ var _SocialMediaModal_module_scss__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_SocialMediaModal_module_scss__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_2__);

var _jsxFileName = "C:\\Users\\user\\Desktop\\projects\\ait-projects\\foot-bet\\components\\Header\\SocialMedia\\Modals\\Phone\\Phone.jsx";



function Phone({
  onModalClose,
  data,
  parent
}) {
  const top = parent.current.children.phone.offsetTop;
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_common_auth_Modal_Modal__WEBPACK_IMPORTED_MODULE_1__.Modal, {
    onClose: onModalClose,
    containerStyles: (_SocialMediaModal_module_scss__WEBPACK_IMPORTED_MODULE_3___default().container),
    contentStyles: (_SocialMediaModal_module_scss__WEBPACK_IMPORTED_MODULE_3___default().content),
    otherStyles: {
      top: top + 'px'
    },
    children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_2___default()), {
      href: data.url,
      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("a", {
        target: "_blank",
        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("p", {
          children: data.text
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 19,
          columnNumber: 21
        }, this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 18,
        columnNumber: 17
      }, this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 17,
      columnNumber: 13
    }, this)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 11,
    columnNumber: 9
  }, this);
}

/***/ }),

/***/ "./components/Header/SocialMedia/Modals/Telegram/Telegram.jsx":
/*!********************************************************************!*\
  !*** ./components/Header/SocialMedia/Modals/Telegram/Telegram.jsx ***!
  \********************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Telegram": function() { return /* binding */ Telegram; }
/* harmony export */ });
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _common_auth_Modal_Modal__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../common/auth/Modal/Modal */ "./components/common/auth/Modal/Modal.jsx");
/* harmony import */ var _SocialMediaModal_module_scss__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../SocialMediaModal.module.scss */ "./components/Header/SocialMedia/Modals/SocialMediaModal.module.scss");
/* harmony import */ var _SocialMediaModal_module_scss__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_SocialMediaModal_module_scss__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_2__);

var _jsxFileName = "C:\\Users\\user\\Desktop\\projects\\ait-projects\\foot-bet\\components\\Header\\SocialMedia\\Modals\\Telegram\\Telegram.jsx";



function Telegram({
  onModalClose,
  data,
  parent
}) {
  const top = parent.current.children.telegram.offsetTop;
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_common_auth_Modal_Modal__WEBPACK_IMPORTED_MODULE_1__.Modal, {
    onClose: onModalClose,
    containerStyles: (_SocialMediaModal_module_scss__WEBPACK_IMPORTED_MODULE_3___default().container),
    contentStyles: (_SocialMediaModal_module_scss__WEBPACK_IMPORTED_MODULE_3___default().content),
    otherStyles: {
      top: top + 'px'
    },
    children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_2___default()), {
      href: data.url,
      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("a", {
        target: "_blank",
        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("p", {
          children: data.text
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 18,
          columnNumber: 21
        }, this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 17,
        columnNumber: 17
      }, this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 16,
      columnNumber: 13
    }, this)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 10,
    columnNumber: 9
  }, this);
}

/***/ }),

/***/ "./components/Header/SocialMedia/Modals/Viber/Viber.jsx":
/*!**************************************************************!*\
  !*** ./components/Header/SocialMedia/Modals/Viber/Viber.jsx ***!
  \**************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Viber": function() { return /* binding */ Viber; }
/* harmony export */ });
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _common_auth_Modal_Modal__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../common/auth/Modal/Modal */ "./components/common/auth/Modal/Modal.jsx");
/* harmony import */ var _SocialMediaModal_module_scss__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../SocialMediaModal.module.scss */ "./components/Header/SocialMedia/Modals/SocialMediaModal.module.scss");
/* harmony import */ var _SocialMediaModal_module_scss__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_SocialMediaModal_module_scss__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_2__);

var _jsxFileName = "C:\\Users\\user\\Desktop\\projects\\ait-projects\\foot-bet\\components\\Header\\SocialMedia\\Modals\\Viber\\Viber.jsx";



function Viber({
  onModalClose,
  data,
  parent
}) {
  const top = parent.current.children.viber.offsetTop;
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_common_auth_Modal_Modal__WEBPACK_IMPORTED_MODULE_1__.Modal, {
    onClose: onModalClose,
    containerStyles: (_SocialMediaModal_module_scss__WEBPACK_IMPORTED_MODULE_3___default().container),
    contentStyles: (_SocialMediaModal_module_scss__WEBPACK_IMPORTED_MODULE_3___default().content),
    otherStyles: {
      top: top + 'px'
    },
    children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_2___default()), {
      href: data.url,
      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("a", {
        target: "_blank",
        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("p", {
          children: data.text
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 18,
          columnNumber: 21
        }, this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 17,
        columnNumber: 17
      }, this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 16,
      columnNumber: 13
    }, this)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 10,
    columnNumber: 9
  }, this);
}

/***/ }),

/***/ "./components/Header/SocialMedia/Modals/WatsUp/WatsUp.jsx":
/*!****************************************************************!*\
  !*** ./components/Header/SocialMedia/Modals/WatsUp/WatsUp.jsx ***!
  \****************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "WatsUp": function() { return /* binding */ WatsUp; }
/* harmony export */ });
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _common_auth_Modal_Modal__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../common/auth/Modal/Modal */ "./components/common/auth/Modal/Modal.jsx");
/* harmony import */ var _SocialMediaModal_module_scss__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../SocialMediaModal.module.scss */ "./components/Header/SocialMedia/Modals/SocialMediaModal.module.scss");
/* harmony import */ var _SocialMediaModal_module_scss__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_SocialMediaModal_module_scss__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_2__);

var _jsxFileName = "C:\\Users\\user\\Desktop\\projects\\ait-projects\\foot-bet\\components\\Header\\SocialMedia\\Modals\\WatsUp\\WatsUp.jsx";



function WatsUp({
  onModalClose,
  data,
  parent
}) {
  const top = parent.current.children.watsup.offsetTop;
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_common_auth_Modal_Modal__WEBPACK_IMPORTED_MODULE_1__.Modal, {
    onClose: onModalClose,
    containerStyles: (_SocialMediaModal_module_scss__WEBPACK_IMPORTED_MODULE_3___default().container),
    contentStyles: (_SocialMediaModal_module_scss__WEBPACK_IMPORTED_MODULE_3___default().content),
    otherStyles: {
      top: top + 'px'
    },
    children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_2___default()), {
      href: data.url,
      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("a", {
        target: "_blank",
        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("p", {
          children: data.text
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 18,
          columnNumber: 21
        }, this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 17,
        columnNumber: 17
      }, this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 16,
      columnNumber: 13
    }, this)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 10,
    columnNumber: 9
  }, this);
}

/***/ }),

/***/ "./components/Header/SocialMedia/SocialMedia.jsx":
/*!*******************************************************!*\
  !*** ./components/Header/SocialMedia/SocialMedia.jsx ***!
  \*******************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SocialMedia": function() { return /* binding */ SocialMedia; }
/* harmony export */ });
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _SocialMedia_module_scss__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./SocialMedia.module.scss */ "./components/Header/SocialMedia/SocialMedia.module.scss");
/* harmony import */ var _SocialMedia_module_scss__WEBPACK_IMPORTED_MODULE_15___default = /*#__PURE__*/__webpack_require__.n(_SocialMedia_module_scss__WEBPACK_IMPORTED_MODULE_15__);
/* harmony import */ var _Icon_Icon__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Icon/Icon */ "./components/Header/SocialMedia/Icon/Icon.jsx");
/* harmony import */ var _Modals_Phone_Phone__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Modals/Phone/Phone */ "./components/Header/SocialMedia/Modals/Phone/Phone.jsx");
/* harmony import */ var _Modals_Facebook_Facebook__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./Modals/Facebook/Facebook */ "./components/Header/SocialMedia/Modals/Facebook/Facebook.jsx");
/* harmony import */ var _Modals_Telegram_Telegram__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./Modals/Telegram/Telegram */ "./components/Header/SocialMedia/Modals/Telegram/Telegram.jsx");
/* harmony import */ var _Modals_WatsUp_WatsUp__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./Modals/WatsUp/WatsUp */ "./components/Header/SocialMedia/Modals/WatsUp/WatsUp.jsx");
/* harmony import */ var _Modals_Instagram_Instagram__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./Modals/Instagram/Instagram */ "./components/Header/SocialMedia/Modals/Instagram/Instagram.jsx");
/* harmony import */ var _Modals_Viber_Viber__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./Modals/Viber/Viber */ "./components/Header/SocialMedia/Modals/Viber/Viber.jsx");
/* harmony import */ var _public_images_header_SocialMedia_phone_svg__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../../../../../../public/images/header/SocialMedia/phone.svg */ "./public/images/header/SocialMedia/phone.svg");
/* harmony import */ var _public_images_header_SocialMedia_facebook_svg__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../../../../../../public/images/header/SocialMedia/facebook.svg */ "./public/images/header/SocialMedia/facebook.svg");
/* harmony import */ var _public_images_header_SocialMedia_telegram_svg__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../../../../../../public/images/header/SocialMedia/telegram.svg */ "./public/images/header/SocialMedia/telegram.svg");
/* harmony import */ var _public_images_header_SocialMedia_watsup_svg__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../../../../../../public/images/header/SocialMedia/watsup.svg */ "./public/images/header/SocialMedia/watsup.svg");
/* harmony import */ var _public_images_header_SocialMedia_instagram_svg__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../../../../../../../public/images/header/SocialMedia/instagram.svg */ "./public/images/header/SocialMedia/instagram.svg");
/* harmony import */ var _public_images_header_SocialMedia_viber_svg__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../../../../../../../public/images/header/SocialMedia/viber.svg */ "./public/images/header/SocialMedia/viber.svg");


var _jsxFileName = "C:\\Users\\user\\Desktop\\projects\\ait-projects\\foot-bet\\components\\Header\\SocialMedia\\SocialMedia.jsx";
 // styles

 // components








 // icons







function SocialMedia() {
  const // states
  {
    0: showPhoneModal,
    1: setShowPhoneModal
  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false),
        {
    0: showFacbookModal,
    1: setShowFacbookModal
  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false),
        {
    0: showTelegramModal,
    1: setShowTelegramModal
  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false),
        {
    0: showWatsUpModal,
    1: setShowWatsUpModal
  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false),
        {
    0: showInstagramModal,
    1: setShowInstagramModal
  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false),
        {
    0: showViberModal,
    1: setShowViberModal
  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false),
        socialMediasRef = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)(),
        // config
  icons = [{
    id: "phone",
    key: Math.random(),
    src: _public_images_header_SocialMedia_phone_svg__WEBPACK_IMPORTED_MODULE_9__.default.src,
    click: () => {
      window.scrollTo(0, 0);
      setShowPhoneModal(true);
    }
  }, {
    id: "facebook",
    key: Math.random(),
    src: _public_images_header_SocialMedia_facebook_svg__WEBPACK_IMPORTED_MODULE_10__.default.src,
    click: () => {
      window.scrollTo(0, 0);
      setShowFacbookModal(true);
    }
  }, {
    id: "telegram",
    key: Math.random(),
    src: _public_images_header_SocialMedia_telegram_svg__WEBPACK_IMPORTED_MODULE_11__.default.src,
    click: () => {
      window.scrollTo(0, 0);
      setShowTelegramModal(true);
    }
  }, {
    id: "watsup",
    key: Math.random(),
    src: _public_images_header_SocialMedia_watsup_svg__WEBPACK_IMPORTED_MODULE_12__.default.src,
    click: () => {
      window.scrollTo(0, 0);
      setShowWatsUpModal(true);
    }
  }, {
    id: "instagram",
    key: Math.random(),
    src: _public_images_header_SocialMedia_instagram_svg__WEBPACK_IMPORTED_MODULE_13__.default.src,
    click: () => {
      window.scrollTo(0, 0);
      setShowInstagramModal(true);
    }
  }, {
    id: "viber",
    key: Math.random(),
    src: _public_images_header_SocialMedia_viber_svg__WEBPACK_IMPORTED_MODULE_14__.default.src,
    click: () => {
      window.scrollTo(0, 0);
      setShowViberModal(true);
    }
  }],
        modal_contents = {
    phone: {
      text: "+374 64 54 59",
      url: "tel:+37498645457"
    },
    facebook: {
      text: "Facebook",
      url: "https://www.facebook.com/%D0%9F%D1%80%D0%BE%D0%B3%D0%BD%D0%BE%D0%B7%D1%8B-%D0%BD%D0%B0-%D0%A4%D1%83%D1%82%D0%B1%D0%BE%D0%BB-104941347577913/"
    },
    telegram: {
      text: "+374 64 54 59",
      url: "https://telegram.me/ermaann"
    },
    watsup: {
      text: "+374 64 54 59",
      url: "https://api.whatsapp.com/send?phone=+37498645457"
    },
    instagram: {
      text: "Instagram",
      url: "https://www.instagram.com/prognozyna550/?utm_medium=copy_link"
    },
    viber: {
      text: "+374 64 54 59",
      url: "viber://chat?number=+37498645457"
    }
  };
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
      className: (_SocialMedia_module_scss__WEBPACK_IMPORTED_MODULE_15___default().container),
      ref: socialMediasRef,
      children: icons.map(el => /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_Icon_Icon__WEBPACK_IMPORTED_MODULE_2__.Icon, {
        id: el.id,
        src: el.src,
        click: el.click
      }, el.key, false, {
        fileName: _jsxFileName,
        lineNumber: 121,
        columnNumber: 25
      }, this))
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 118,
      columnNumber: 13
    }, this), showPhoneModal && /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_Modals_Phone_Phone__WEBPACK_IMPORTED_MODULE_3__.Phone, {
      onModalClose: () => setShowPhoneModal(false),
      data: modal_contents.phone,
      parent: socialMediasRef
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 131,
      columnNumber: 32
    }, this), showFacbookModal && /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_Modals_Facebook_Facebook__WEBPACK_IMPORTED_MODULE_4__.Facebook, {
      onModalClose: () => setShowFacbookModal(false),
      data: modal_contents.facebook,
      parent: socialMediasRef
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 132,
      columnNumber: 34
    }, this), showTelegramModal && /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_Modals_Telegram_Telegram__WEBPACK_IMPORTED_MODULE_5__.Telegram, {
      onModalClose: () => setShowTelegramModal(false),
      data: modal_contents.telegram,
      parent: socialMediasRef
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 133,
      columnNumber: 35
    }, this), showWatsUpModal && /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_Modals_WatsUp_WatsUp__WEBPACK_IMPORTED_MODULE_6__.WatsUp, {
      onModalClose: () => setShowWatsUpModal(false),
      data: modal_contents.watsup,
      parent: socialMediasRef
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 134,
      columnNumber: 33
    }, this), showInstagramModal && /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_Modals_Instagram_Instagram__WEBPACK_IMPORTED_MODULE_7__.Instagram, {
      onModalClose: () => setShowInstagramModal(false),
      data: modal_contents.instagram,
      parent: socialMediasRef
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 135,
      columnNumber: 36
    }, this), showViberModal && /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_Modals_Viber_Viber__WEBPACK_IMPORTED_MODULE_8__.Viber, {
      onModalClose: () => setShowViberModal(false),
      data: modal_contents.viber,
      parent: socialMediasRef
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 136,
      columnNumber: 32
    }, this)]
  }, void 0, true);
}

/***/ }),

/***/ "./components/Pages/Contacts/ContactsModal.jsx":
/*!*****************************************************!*\
  !*** ./components/Pages/Contacts/ContactsModal.jsx ***!
  \*****************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ ContactsModal; }
/* harmony export */ });
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _common_auth_Modal_Modal__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../common/auth/Modal/Modal */ "./components/common/auth/Modal/Modal.jsx");
/* harmony import */ var _Contacts_module_scss__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./Contacts.module.scss */ "./components/Pages/Contacts/Contacts.module.scss");
/* harmony import */ var _Contacts_module_scss__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_Contacts_module_scss__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _contacts_data__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./contacts_data */ "./components/Pages/Contacts/contacts_data.js");
/* harmony import */ var _public_images_header_SocialMedia_closeVector_png__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../../../../public/images/header/SocialMedia/closeVector.png */ "./public/images/header/SocialMedia/closeVector.png");

var _jsxFileName = "C:\\Users\\user\\Desktop\\projects\\ait-projects\\foot-bet\\components\\Pages\\Contacts\\ContactsModal.jsx";
 // styles 


 // icons


function ContactsModal({
  onModalClose,
  opened = false
}) {
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_common_auth_Modal_Modal__WEBPACK_IMPORTED_MODULE_1__.Modal, {
    onClose: onModalClose,
    containerStyles: `${(_Contacts_module_scss__WEBPACK_IMPORTED_MODULE_4___default().container)} `,
    contentStyles: `${(_Contacts_module_scss__WEBPACK_IMPORTED_MODULE_4___default().content)} ${opened ? (_Contacts_module_scss__WEBPACK_IMPORTED_MODULE_4___default().open) : (_Contacts_module_scss__WEBPACK_IMPORTED_MODULE_4___default().close)}`,
    children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
      className: (_Contacts_module_scss__WEBPACK_IMPORTED_MODULE_4___default().modal_content),
      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
        className: (_Contacts_module_scss__WEBPACK_IMPORTED_MODULE_4___default().content_container),
        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
          className: (_Contacts_module_scss__WEBPACK_IMPORTED_MODULE_4___default().top),
          children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("img", {
            src: _public_images_header_SocialMedia_closeVector_png__WEBPACK_IMPORTED_MODULE_3__.default.src,
            alt: "",
            onClick: () => {
              onModalClose();
              document.querySelector('body').style.overflow = 'visible';
            }
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 20,
            columnNumber: 25
          }, this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 19,
          columnNumber: 21
        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
          className: (_Contacts_module_scss__WEBPACK_IMPORTED_MODULE_4___default().rows),
          children: _contacts_data__WEBPACK_IMPORTED_MODULE_2__.contacts_data.map(el => /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
            className: (_Contacts_module_scss__WEBPACK_IMPORTED_MODULE_4___default().row),
            children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
              className: (_Contacts_module_scss__WEBPACK_IMPORTED_MODULE_4___default().img),
              children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("img", {
                src: el.icon,
                alt: "contact-icon"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 34,
                columnNumber: 41
              }, this)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 33,
              columnNumber: 37
            }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
              className: (_Contacts_module_scss__WEBPACK_IMPORTED_MODULE_4___default().text),
              children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("p", {
                children: el.text
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 37,
                columnNumber: 41
              }, this)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 36,
              columnNumber: 37
            }, this)]
          }, Math.random(), true, {
            fileName: _jsxFileName,
            lineNumber: 32,
            columnNumber: 33
          }, this))
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 29,
          columnNumber: 21
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 18,
        columnNumber: 17
      }, this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 17,
      columnNumber: 13
    }, this)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 12,
    columnNumber: 9
  }, this);
}

/***/ }),

/***/ "./components/Pages/Contacts/contacts_data.js":
/*!****************************************************!*\
  !*** ./components/Pages/Contacts/contacts_data.js ***!
  \****************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "contacts_data": function() { return /* binding */ contacts_data; }
/* harmony export */ });
/* harmony import */ var _public_images_header_SocialMedia_phone_svg__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../../../../public/images/header/SocialMedia/phone.svg */ "./public/images/header/SocialMedia/phone.svg");
/* harmony import */ var _public_images_header_SocialMedia_facebook_svg__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../../../../public/images/header/SocialMedia/facebook.svg */ "./public/images/header/SocialMedia/facebook.svg");
/* harmony import */ var _public_images_header_SocialMedia_telegram_svg__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../../../public/images/header/SocialMedia/telegram.svg */ "./public/images/header/SocialMedia/telegram.svg");
/* harmony import */ var _public_images_header_SocialMedia_watsup_svg__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../../../../public/images/header/SocialMedia/watsup.svg */ "./public/images/header/SocialMedia/watsup.svg");
/* harmony import */ var _public_images_header_SocialMedia_instagram_svg__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../../../../public/images/header/SocialMedia/instagram.svg */ "./public/images/header/SocialMedia/instagram.svg");
/* harmony import */ var _public_images_header_SocialMedia_viber_svg__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../../../../public/images/header/SocialMedia/viber.svg */ "./public/images/header/SocialMedia/viber.svg");
/* harmony import */ var _public_images_header_SocialMedia_email_svg__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../../../../../public/images/header/SocialMedia/email.svg */ "./public/images/header/SocialMedia/email.svg");







const contacts_data = [{
  icon: _public_images_header_SocialMedia_phone_svg__WEBPACK_IMPORTED_MODULE_0__.default.src,
  text: "+34 672 314 808"
}, {
  icon: _public_images_header_SocialMedia_facebook_svg__WEBPACK_IMPORTED_MODULE_1__.default.src,
  text: ""
}, {
  icon: _public_images_header_SocialMedia_telegram_svg__WEBPACK_IMPORTED_MODULE_2__.default.src,
  text: ""
}, {
  icon: _public_images_header_SocialMedia_watsup_svg__WEBPACK_IMPORTED_MODULE_3__.default.src,
  text: "+34 672 314 808"
}, {
  icon: _public_images_header_SocialMedia_instagram_svg__WEBPACK_IMPORTED_MODULE_4__.default.src,
  text: ""
}, {
  icon: _public_images_header_SocialMedia_viber_svg__WEBPACK_IMPORTED_MODULE_5__.default.src,
  text: "+34 672 314 808"
}, {
  icon: _public_images_header_SocialMedia_email_svg__WEBPACK_IMPORTED_MODULE_6__.default.src,
  text: "n.xach1987@mail.ru"
}];

/***/ }),

/***/ "./components/common/auth/InputContainer/InputContainer.jsx":
/*!******************************************************************!*\
  !*** ./components/common/auth/InputContainer/InputContainer.jsx ***!
  \******************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "InputContainer": function() { return /* binding */ InputContainer; }
/* harmony export */ });
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _InputContainer_module_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./InputContainer.module.scss */ "./components/common/auth/InputContainer/InputContainer.module.scss");
/* harmony import */ var _InputContainer_module_scss__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_InputContainer_module_scss__WEBPACK_IMPORTED_MODULE_1__);

var _jsxFileName = "C:\\Users\\user\\Desktop\\projects\\ait-projects\\foot-bet\\components\\common\\auth\\InputContainer\\InputContainer.jsx";

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }


function InputContainer({
  label,
  id,
  type,
  placeholder,
  errors,
  other
}) {
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
    className: (_InputContainer_module_scss__WEBPACK_IMPORTED_MODULE_1___default().container),
    children: [label && /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
      className: (_InputContainer_module_scss__WEBPACK_IMPORTED_MODULE_1___default().label_content),
      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("label", {
        htmlFor: id,
        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("img", {
          src: label.src,
          alt: "icon"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 16,
          columnNumber: 25
        }, this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 15,
        columnNumber: 21
      }, this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 14,
      columnNumber: 17
    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
      className: (_InputContainer_module_scss__WEBPACK_IMPORTED_MODULE_1___default().input_container),
      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
        className: errors ? (_InputContainer_module_scss__WEBPACK_IMPORTED_MODULE_1___default().input_error_content) : (_InputContainer_module_scss__WEBPACK_IMPORTED_MODULE_1___default().input_success_content),
        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("input", _objectSpread({
          id: id,
          type: type,
          placeholder: placeholder
        }, other), void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 25,
          columnNumber: 21
        }, this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 24,
        columnNumber: 17
      }, this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 23,
      columnNumber: 13
    }, this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 12,
    columnNumber: 9
  }, this);
}

/***/ }),

/***/ "./components/common/auth/Modal/Modal.jsx":
/*!************************************************!*\
  !*** ./components/common/auth/Modal/Modal.jsx ***!
  \************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Modal": function() { return /* binding */ Modal; }
/* harmony export */ });
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _Modal_module_scss__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Modal.module.scss */ "./components/common/auth/Modal/Modal.module.scss");
/* harmony import */ var _Modal_module_scss__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_Modal_module_scss__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-dom */ "react-dom");
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_dom__WEBPACK_IMPORTED_MODULE_2__);

var _jsxFileName = "C:\\Users\\user\\Desktop\\projects\\ait-projects\\foot-bet\\components\\common\\auth\\Modal\\Modal.jsx";



function Modal({
  onClose,
  // closeWithVectore = null,
  children,
  containerStyles = null,
  contentStyles = null,
  otherStyles = null,
  portalLocation = 'modal-conteiner'
}) {
  const {
    0: showModal,
    1: setShowModal
  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false),
        {
    0: pageOverflow,
    1: setPageOverflow
  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(showModal),
        body = document.querySelector('body');
  (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(() => {
    setShowModal(true);
    setPageOverflow(true);
    document.addEventListener("mousedown", handleClose);
    return () => {
      document.removeEventListener("mousedown", handleClose);
      body.style.overflow = 'visible';
    };
  }, []);
  const node = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)();

  const handleClose = e => {
    var _node$current;

    if (node !== null && node !== void 0 && (_node$current = node.current) !== null && _node$current !== void 0 && _node$current.contains(e.target)) {
      return;
    } else {
      setPageOverflow(false);
      onClose();
    }
  },
        dinamicTop = window.scrollY;

  pageOverflow ? body.style.overflow = 'hidden' : body.style.overflow = 'visible';

  const modal = /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
    className: `${(_Modal_module_scss__WEBPACK_IMPORTED_MODULE_3___default().modalConteiner)} ${containerStyles}`,
    style: {
      top: dinamicTop + 'px'
    },
    children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
      className: `${(_Modal_module_scss__WEBPACK_IMPORTED_MODULE_3___default().modalContent)} ${contentStyles}`,
      style: otherStyles,
      ref: node,
      children: children
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 55,
      columnNumber: 13
    }, this)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 50,
    columnNumber: 9
  }, this);

  if (showModal) {
    return /*#__PURE__*/(0,react_dom__WEBPACK_IMPORTED_MODULE_2__.createPortal)(modal, document.getElementById(portalLocation));
  } else return null;
}

/***/ }),

/***/ "./layouts/Error.jsx":
/*!***************************!*\
  !*** ./layouts/Error.jsx ***!
  \***************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ Error; }
/* harmony export */ });
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);


var _jsxFileName = "C:\\Users\\user\\Desktop\\projects\\ait-projects\\foot-bet\\layouts\\Error.jsx";
function Error({
  children
}) {
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
    children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("main", {
      children: children
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 4,
      columnNumber: 13
    }, this)
  }, void 0, false);
}

/***/ }),

/***/ "./layouts/Main.jsx":
/*!**************************!*\
  !*** ./layouts/Main.jsx ***!
  \**************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ Main; }
/* harmony export */ });
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _components_Footer_Footer__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../components/Footer/Footer */ "./components/Footer/Footer.jsx");
/* harmony import */ var _components_Header_Header__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/Header/Header */ "./components/Header/Header.jsx");


var _jsxFileName = "C:\\Users\\user\\Desktop\\projects\\ait-projects\\foot-bet\\layouts\\Main.jsx";


function Main({
  children
}) {
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Header_Header__WEBPACK_IMPORTED_MODULE_2__.Header, {
      mainsPages: true
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 7,
      columnNumber: 13
    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("main", {
      children: children
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 8,
      columnNumber: 13
    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Footer_Footer__WEBPACK_IMPORTED_MODULE_1__.Footer, {}, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 11,
      columnNumber: 13
    }, this)]
  }, void 0, true);
}

/***/ }),

/***/ "./layouts/Register.jsx":
/*!******************************!*\
  !*** ./layouts/Register.jsx ***!
  \******************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ RegisterLayout; }
/* harmony export */ });
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _components_Header_Header__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../components/Header/Header */ "./components/Header/Header.jsx");


var _jsxFileName = "C:\\Users\\user\\Desktop\\projects\\ait-projects\\foot-bet\\layouts\\Register.jsx";

function RegisterLayout({
  children
}) {
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Header_Header__WEBPACK_IMPORTED_MODULE_1__.Header, {
      mainsPages: false
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 6,
      columnNumber: 13
    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("main", {
      children: children
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 7,
      columnNumber: 13
    }, this)]
  }, void 0, true);
}

/***/ }),

/***/ "./layouts/WithoutPhoto.jsx":
/*!**********************************!*\
  !*** ./layouts/WithoutPhoto.jsx ***!
  \**********************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ Main; }
/* harmony export */ });
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _components_Footer_Footer__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../components/Footer/Footer */ "./components/Footer/Footer.jsx");
/* harmony import */ var _components_Header_Header__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/Header/Header */ "./components/Header/Header.jsx");


var _jsxFileName = "C:\\Users\\user\\Desktop\\projects\\ait-projects\\foot-bet\\layouts\\WithoutPhoto.jsx";


function Main({
  children
}) {
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Header_Header__WEBPACK_IMPORTED_MODULE_2__.Header, {
      mainsPages: false
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 7,
      columnNumber: 13
    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("main", {
      children: children
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 8,
      columnNumber: 13
    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Footer_Footer__WEBPACK_IMPORTED_MODULE_1__.Footer, {}, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 11,
      columnNumber: 13
    }, this)]
  }, void 0, true);
}

/***/ }),

/***/ "./layouts/layout-wrapper.jsx":
/*!************************************!*\
  !*** ./layouts/layout-wrapper.jsx ***!
  \************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _Main__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Main */ "./layouts/Main.jsx");
/* harmony import */ var _WithoutPhoto__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./WithoutPhoto */ "./layouts/WithoutPhoto.jsx");
/* harmony import */ var _Register__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Register */ "./layouts/Register.jsx");
/* harmony import */ var _Error__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./Error */ "./layouts/Error.jsx");

var _jsxFileName = "C:\\Users\\user\\Desktop\\projects\\ait-projects\\foot-bet\\layouts\\layout-wrapper.jsx";

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }





const layouts = {
  main: _Main__WEBPACK_IMPORTED_MODULE_1__.default,
  withoutPhoto: _WithoutPhoto__WEBPACK_IMPORTED_MODULE_2__.default,
  register: _Register__WEBPACK_IMPORTED_MODULE_3__.default
};

const LayoutWrapper = props => {
  // to get the text value of the assigned layout of each component
  const Layout = layouts[props.children.type.layout]; // if we have a registered layout render children with said layout

  if (Layout != null) {
    return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Layout, _objectSpread(_objectSpread({}, props), {}, {
      children: props.children
    }), void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 17,
      columnNumber: 12
    }, undefined);
  } // if not render children with fragment


  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_Error__WEBPACK_IMPORTED_MODULE_4__.default, _objectSpread(_objectSpread({}, props), {}, {
    children: props.children
  }), void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 20,
    columnNumber: 10
  }, undefined);
};

/* harmony default export */ __webpack_exports__["default"] = (LayoutWrapper);

/***/ }),

/***/ "./lib/constants.js":
/*!**************************!*\
  !*** ./lib/constants.js ***!
  \**************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "host": function() { return /* binding */ host; }
/* harmony export */ });
const host = "https://www.footbet24.com/api";

/***/ }),

/***/ "./lib/er.lib.js":
/*!***********************!*\
  !*** ./lib/er.lib.js ***!
  \***********************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "request": function() { return /* binding */ request; },
/* harmony export */   "getCookie": function() { return /* binding */ getCookie; },
/* harmony export */   "removeCookie": function() { return /* binding */ removeCookie; },
/* harmony export */   "setCookie": function() { return /* binding */ setCookie; }
/* harmony export */ });
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! axios */ "axios");
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

/***/ "./lib/request-destinations.js":
/*!*************************************!*\
  !*** ./lib/request-destinations.js ***!
  \*************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

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

const AUTH_URL = _constants__WEBPACK_IMPORTED_MODULE_0__.host + `auth`;
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
  url: _constants__WEBPACK_IMPORTED_MODULE_0__.host + `admin/news`,
  method: `get`
};
const GET_MATCHES = {
  url: _constants__WEBPACK_IMPORTED_MODULE_0__.host + `admin/match-of-the-day`,
  method: `get`
};
const GET_MATCHES_OF_NEXT_DAY = {
  url: _constants__WEBPACK_IMPORTED_MODULE_0__.host + `admin/match-of-the-day?type=next_day`,
  method: `get`
};
const GET_PREDICTIONS = {
  url: _constants__WEBPACK_IMPORTED_MODULE_0__.host + `admin/prediction`,
  method: `get`
};
const GET_FEEDBACK = id => ({
  url: _constants__WEBPACK_IMPORTED_MODULE_0__.host + `feedback/${id}?sort_by=created_at&order_by=desc`,
  method: `get`
});
const GET_MATCHES_BY_TYPE = type => ({
  url: _constants__WEBPACK_IMPORTED_MODULE_0__.host + `admin/game?type=${type}`,
  method: `get`
});

/***/ }),

/***/ "./node_modules/next/dist/client/link.js":
/*!***********************************************!*\
  !*** ./node_modules/next/dist/client/link.js ***!
  \***********************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";


var _interopRequireWildcard = __webpack_require__(/*! @babel/runtime/helpers/interopRequireWildcard */ "./node_modules/@babel/runtime/helpers/interopRequireWildcard.js");

exports.__esModule = true;
exports.default = void 0;

var _react = _interopRequireWildcard(__webpack_require__(/*! react */ "react"));

var _router = __webpack_require__(/*! ../next-server/lib/router/router */ "./node_modules/next/dist/next-server/lib/router/router.js");

var _router2 = __webpack_require__(/*! ./router */ "./node_modules/next/dist/client/router.js");

var _useIntersection = __webpack_require__(/*! ./use-intersection */ "./node_modules/next/dist/client/use-intersection.js");

const prefetched = {};

function prefetch(router, href, as, options) {
  if (true) return;
  if (!(0, _router.isLocalURL)(href)) return; // Prefetch the JSON page if asked (only in the client)
  // We need to handle a prefetch error here since we may be
  // loading with priority which can reject but we don't
  // want to force navigation since this is only a prefetch

  router.prefetch(href, as, options).catch(err => {
    if (true) {
      // rethrow to show invalid URL errors
      throw err;
    }
  });
  const curLocale = options && typeof options.locale !== 'undefined' ? options.locale : router && router.locale; // Join on an invalid URI character

  prefetched[href + '%' + as + (curLocale ? '%' + curLocale : '')] = true;
}

function isModifiedEvent(event) {
  const {
    target
  } = event.currentTarget;
  return target && target !== '_self' || event.metaKey || event.ctrlKey || event.shiftKey || event.altKey || // triggers resource download
  event.nativeEvent && event.nativeEvent.which === 2;
}

function linkClicked(e, router, href, as, replace, shallow, scroll, locale) {
  const {
    nodeName
  } = e.currentTarget;

  if (nodeName === 'A' && (isModifiedEvent(e) || !(0, _router.isLocalURL)(href))) {
    // ignore click for browser’s default behavior
    return;
  }

  e.preventDefault(); //  avoid scroll for urls with anchor refs

  if (scroll == null && as.indexOf('#') >= 0) {
    scroll = false;
  } // replace state instead of push if prop is present


  router[replace ? 'replace' : 'push'](href, as, {
    shallow,
    locale,
    scroll
  });
}

function Link(props) {
  if (true) {
    function createPropError(args) {
      return new Error(`Failed prop type: The prop \`${args.key}\` expects a ${args.expected} in \`<Link>\`, but got \`${args.actual}\` instead.` + ( false ? 0 : ''));
    } // TypeScript trick for type-guarding:


    const requiredPropsGuard = {
      href: true
    };
    const requiredProps = Object.keys(requiredPropsGuard);
    requiredProps.forEach(key => {
      if (key === 'href') {
        if (props[key] == null || typeof props[key] !== 'string' && typeof props[key] !== 'object') {
          throw createPropError({
            key,
            expected: '`string` or `object`',
            actual: props[key] === null ? 'null' : typeof props[key]
          });
        }
      } else {
        // TypeScript trick for type-guarding:
        // eslint-disable-next-line @typescript-eslint/no-unused-vars
        const _ = key;
      }
    }); // TypeScript trick for type-guarding:

    const optionalPropsGuard = {
      as: true,
      replace: true,
      scroll: true,
      shallow: true,
      passHref: true,
      prefetch: true,
      locale: true
    };
    const optionalProps = Object.keys(optionalPropsGuard);
    optionalProps.forEach(key => {
      const valType = typeof props[key];

      if (key === 'as') {
        if (props[key] && valType !== 'string' && valType !== 'object') {
          throw createPropError({
            key,
            expected: '`string` or `object`',
            actual: valType
          });
        }
      } else if (key === 'locale') {
        if (props[key] && valType !== 'string') {
          throw createPropError({
            key,
            expected: '`string`',
            actual: valType
          });
        }
      } else if (key === 'replace' || key === 'scroll' || key === 'shallow' || key === 'passHref' || key === 'prefetch') {
        if (props[key] != null && valType !== 'boolean') {
          throw createPropError({
            key,
            expected: '`boolean`',
            actual: valType
          });
        }
      } else {
        // TypeScript trick for type-guarding:
        // eslint-disable-next-line @typescript-eslint/no-unused-vars
        const _ = key;
      }
    }); // This hook is in a conditional but that is ok because `process.env.NODE_ENV` never changes
    // eslint-disable-next-line react-hooks/rules-of-hooks

    const hasWarned = _react.default.useRef(false);

    if (props.prefetch && !hasWarned.current) {
      hasWarned.current = true;
      console.warn('Next.js auto-prefetches automatically based on viewport. The prefetch attribute is no longer needed. More: https://nextjs.org/docs/messages/prefetch-true-deprecated');
    }
  }

  const p = props.prefetch !== false;
  const router = (0, _router2.useRouter)();

  const {
    href,
    as
  } = _react.default.useMemo(() => {
    const [resolvedHref, resolvedAs] = (0, _router.resolveHref)(router, props.href, true);
    return {
      href: resolvedHref,
      as: props.as ? (0, _router.resolveHref)(router, props.as) : resolvedAs || resolvedHref
    };
  }, [router, props.href, props.as]);

  let {
    children,
    replace,
    shallow,
    scroll,
    locale
  } = props; // Deprecated. Warning shown by propType check. If the children provided is a string (<Link>example</Link>) we wrap it in an <a> tag

  if (typeof children === 'string') {
    children = /*#__PURE__*/_react.default.createElement("a", null, children);
  } // This will return the first child, if multiple are provided it will throw an error


  let child;

  if (true) {
    try {
      child = _react.Children.only(children);
    } catch (err) {
      throw new Error(`Multiple children were passed to <Link> with \`href\` of \`${props.href}\` but only one child is supported https://nextjs.org/docs/messages/link-multiple-children` + ( false ? 0 : ''));
    }
  } else {}

  const childRef = child && typeof child === 'object' && child.ref;
  const [setIntersectionRef, isVisible] = (0, _useIntersection.useIntersection)({
    rootMargin: '200px'
  });

  const setRef = _react.default.useCallback(el => {
    setIntersectionRef(el);

    if (childRef) {
      if (typeof childRef === 'function') childRef(el);else if (typeof childRef === 'object') {
        childRef.current = el;
      }
    }
  }, [childRef, setIntersectionRef]);

  (0, _react.useEffect)(() => {
    const shouldPrefetch = isVisible && p && (0, _router.isLocalURL)(href);
    const curLocale = typeof locale !== 'undefined' ? locale : router && router.locale;
    const isPrefetched = prefetched[href + '%' + as + (curLocale ? '%' + curLocale : '')];

    if (shouldPrefetch && !isPrefetched) {
      prefetch(router, href, as, {
        locale: curLocale
      });
    }
  }, [as, href, isVisible, locale, p, router]);
  const childProps = {
    ref: setRef,
    onClick: e => {
      if (child.props && typeof child.props.onClick === 'function') {
        child.props.onClick(e);
      }

      if (!e.defaultPrevented) {
        linkClicked(e, router, href, as, replace, shallow, scroll, locale);
      }
    }
  };

  childProps.onMouseEnter = e => {
    if (!(0, _router.isLocalURL)(href)) return;

    if (child.props && typeof child.props.onMouseEnter === 'function') {
      child.props.onMouseEnter(e);
    }

    prefetch(router, href, as, {
      priority: true
    });
  }; // If child is an <a> tag and doesn't have a href attribute, or if the 'passHref' property is
  // defined, we specify the current 'href', so that repetition is not needed by the user


  if (props.passHref || child.type === 'a' && !('href' in child.props)) {
    const curLocale = typeof locale !== 'undefined' ? locale : router && router.locale; // we only render domain locales if we are currently on a domain locale
    // so that locale links are still visitable in development/preview envs

    const localeDomain = router && router.isLocaleDomain && (0, _router.getDomainLocale)(as, curLocale, router && router.locales, router && router.domainLocales);
    childProps.href = localeDomain || (0, _router.addBasePath)((0, _router.addLocale)(as, curLocale, router && router.defaultLocale));
  }

  return /*#__PURE__*/_react.default.cloneElement(child, childProps);
}

var _default = Link;
exports.default = _default;

/***/ }),

/***/ "./node_modules/next/dist/client/normalize-trailing-slash.js":
/*!*******************************************************************!*\
  !*** ./node_modules/next/dist/client/normalize-trailing-slash.js ***!
  \*******************************************************************/
/***/ (function(__unused_webpack_module, exports) {

"use strict";


exports.__esModule = true;
exports.removePathTrailingSlash = removePathTrailingSlash;
exports.normalizePathTrailingSlash = void 0;
/**
* Removes the trailing slash of a path if there is one. Preserves the root path `/`.
*/

function removePathTrailingSlash(path) {
  return path.endsWith('/') && path !== '/' ? path.slice(0, -1) : path;
}
/**
* Normalizes the trailing slash of a path according to the `trailingSlash` option
* in `next.config.js`.
*/


const normalizePathTrailingSlash =  false ? 0 : removePathTrailingSlash;
exports.normalizePathTrailingSlash = normalizePathTrailingSlash;

/***/ }),

/***/ "./node_modules/next/dist/client/request-idle-callback.js":
/*!****************************************************************!*\
  !*** ./node_modules/next/dist/client/request-idle-callback.js ***!
  \****************************************************************/
/***/ (function(__unused_webpack_module, exports) {

"use strict";


exports.__esModule = true;
exports.cancelIdleCallback = exports.requestIdleCallback = void 0;

const requestIdleCallback = typeof self !== 'undefined' && self.requestIdleCallback || function (cb) {
  let start = Date.now();
  return setTimeout(function () {
    cb({
      didTimeout: false,
      timeRemaining: function () {
        return Math.max(0, 50 - (Date.now() - start));
      }
    });
  }, 1);
};

exports.requestIdleCallback = requestIdleCallback;

const cancelIdleCallback = typeof self !== 'undefined' && self.cancelIdleCallback || function (id) {
  return clearTimeout(id);
};

exports.cancelIdleCallback = cancelIdleCallback;

/***/ }),

/***/ "./node_modules/next/dist/client/route-loader.js":
/*!*******************************************************!*\
  !*** ./node_modules/next/dist/client/route-loader.js ***!
  \*******************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "./node_modules/@babel/runtime/helpers/interopRequireDefault.js");

exports.__esModule = true;
exports.markAssetError = markAssetError;
exports.isAssetError = isAssetError;
exports.getClientBuildManifest = getClientBuildManifest;
exports.default = void 0;

var _getAssetPathFromRoute = _interopRequireDefault(__webpack_require__(/*! ../next-server/lib/router/utils/get-asset-path-from-route */ "../next-server/lib/router/utils/get-asset-path-from-route"));

var _requestIdleCallback = __webpack_require__(/*! ./request-idle-callback */ "./node_modules/next/dist/client/request-idle-callback.js"); // 3.8s was arbitrarily chosen as it's what https://web.dev/interactive
// considers as "Good" time-to-interactive. We must assume something went
// wrong beyond this point, and then fall-back to a full page transition to
// show the user something of value.


const MS_MAX_IDLE_DELAY = 3800;

function withFuture(key, map, generator) {
  let entry = map.get(key);

  if (entry) {
    if ('future' in entry) {
      return entry.future;
    }

    return Promise.resolve(entry);
  }

  let resolver;
  const prom = new Promise(resolve => {
    resolver = resolve;
  });
  map.set(key, entry = {
    resolve: resolver,
    future: prom
  });
  return generator ? // eslint-disable-next-line no-sequences
  generator().then(value => (resolver(value), value)) : prom;
}

function hasPrefetch(link) {
  try {
    link = document.createElement('link');
    return (// detect IE11 since it supports prefetch but isn't detected
      // with relList.support
      !!window.MSInputMethodContext && !!document.documentMode || link.relList.supports('prefetch')
    );
  } catch (_unused) {
    return false;
  }
}

const canPrefetch = hasPrefetch();

function prefetchViaDom(href, as, link) {
  return new Promise((res, rej) => {
    if (document.querySelector(`link[rel="prefetch"][href^="${href}"]`)) {
      return res();
    }

    link = document.createElement('link'); // The order of property assignment here is intentional:

    if (as) link.as = as;
    link.rel = `prefetch`;
    link.crossOrigin = undefined;
    link.onload = res;
    link.onerror = rej; // `href` should always be last:

    link.href = href;
    document.head.appendChild(link);
  });
}

const ASSET_LOAD_ERROR = Symbol('ASSET_LOAD_ERROR'); // TODO: unexport

function markAssetError(err) {
  return Object.defineProperty(err, ASSET_LOAD_ERROR, {});
}

function isAssetError(err) {
  return err && ASSET_LOAD_ERROR in err;
}

function appendScript(src, script) {
  return new Promise((resolve, reject) => {
    script = document.createElement('script'); // The order of property assignment here is intentional.
    // 1. Setup success/failure hooks in case the browser synchronously
    //    executes when `src` is set.

    script.onload = resolve;

    script.onerror = () => reject(markAssetError(new Error(`Failed to load script: ${src}`))); // 2. Configure the cross-origin attribute before setting `src` in case the
    //    browser begins to fetch.


    script.crossOrigin = undefined; // 3. Finally, set the source and inject into the DOM in case the child
    //    must be appended for fetching to start.

    script.src = src;
    document.body.appendChild(script);
  });
} // Resolve a promise that times out after given amount of milliseconds.


function resolvePromiseWithTimeout(p, ms, err) {
  return new Promise((resolve, reject) => {
    let cancelled = false;
    p.then(r => {
      // Resolved, cancel the timeout
      cancelled = true;
      resolve(r);
    }).catch(reject);
    (0, _requestIdleCallback.requestIdleCallback)(() => setTimeout(() => {
      if (!cancelled) {
        reject(err);
      }
    }, ms));
  });
} // TODO: stop exporting or cache the failure
// It'd be best to stop exporting this. It's an implementation detail. We're
// only exporting it for backwards compatibilty with the `page-loader`.
// Only cache this response as a last resort if we cannot eliminate all other
// code branches that use the Build Manifest Callback and push them through
// the Route Loader interface.


function getClientBuildManifest() {
  if (self.__BUILD_MANIFEST) {
    return Promise.resolve(self.__BUILD_MANIFEST);
  }

  const onBuildManifest = new Promise(resolve => {
    // Mandatory because this is not concurrent safe:
    const cb = self.__BUILD_MANIFEST_CB;

    self.__BUILD_MANIFEST_CB = () => {
      resolve(self.__BUILD_MANIFEST);
      cb && cb();
    };
  });
  return resolvePromiseWithTimeout(onBuildManifest, MS_MAX_IDLE_DELAY, markAssetError(new Error('Failed to load client build manifest')));
}

function getFilesForRoute(assetPrefix, route) {
  if (true) {
    return Promise.resolve({
      scripts: [assetPrefix + '/_next/static/chunks/pages' + encodeURI((0, _getAssetPathFromRoute.default)(route, '.js'))],
      // Styles are handled by `style-loader` in development:
      css: []
    });
  }

  return getClientBuildManifest().then(manifest => {
    if (!(route in manifest)) {
      throw markAssetError(new Error(`Failed to lookup route: ${route}`));
    }

    const allFiles = manifest[route].map(entry => assetPrefix + '/_next/' + encodeURI(entry));
    return {
      scripts: allFiles.filter(v => v.endsWith('.js')),
      css: allFiles.filter(v => v.endsWith('.css'))
    };
  });
}

function createRouteLoader(assetPrefix) {
  const entrypoints = new Map();
  const loadedScripts = new Map();
  const styleSheets = new Map();
  const routes = new Map();

  function maybeExecuteScript(src) {
    let prom = loadedScripts.get(src);

    if (prom) {
      return prom;
    } // Skip executing script if it's already in the DOM:


    if (document.querySelector(`script[src^="${src}"]`)) {
      return Promise.resolve();
    }

    loadedScripts.set(src, prom = appendScript(src));
    return prom;
  }

  function fetchStyleSheet(href) {
    let prom = styleSheets.get(href);

    if (prom) {
      return prom;
    }

    styleSheets.set(href, prom = fetch(href).then(res => {
      if (!res.ok) {
        throw new Error(`Failed to load stylesheet: ${href}`);
      }

      return res.text().then(text => ({
        href: href,
        content: text
      }));
    }).catch(err => {
      throw markAssetError(err);
    }));
    return prom;
  }

  return {
    whenEntrypoint(route) {
      return withFuture(route, entrypoints);
    },

    onEntrypoint(route, execute) {
      Promise.resolve(execute).then(fn => fn()).then(exports => ({
        component: exports && exports.default || exports,
        exports: exports
      }), err => ({
        error: err
      })).then(input => {
        const old = entrypoints.get(route);
        entrypoints.set(route, input);
        if (old && 'resolve' in old) old.resolve(input);
      });
    },

    loadRoute(route, prefetch) {
      return withFuture(route, routes, () => {
        return resolvePromiseWithTimeout(getFilesForRoute(assetPrefix, route).then(({
          scripts,
          css
        }) => {
          return Promise.all([entrypoints.has(route) ? [] : Promise.all(scripts.map(maybeExecuteScript)), Promise.all(css.map(fetchStyleSheet))]);
        }).then(res => {
          return this.whenEntrypoint(route).then(entrypoint => ({
            entrypoint,
            styles: res[1]
          }));
        }), MS_MAX_IDLE_DELAY, markAssetError(new Error(`Route did not complete loading: ${route}`))).then(({
          entrypoint,
          styles
        }) => {
          const res = Object.assign({
            styles: styles
          }, entrypoint);
          return 'error' in entrypoint ? entrypoint : res;
        }).catch(err => {
          if (prefetch) {
            // we don't want to cache errors during prefetch
            throw err;
          }

          return {
            error: err
          };
        });
      });
    },

    prefetch(route) {
      // https://github.com/GoogleChromeLabs/quicklink/blob/453a661fa1fa940e2d2e044452398e38c67a98fb/src/index.mjs#L115-L118
      // License: Apache 2.0
      let cn;

      if (cn = navigator.connection) {
        // Don't prefetch if using 2G or if Save-Data is enabled.
        if (cn.saveData || /2g/.test(cn.effectiveType)) return Promise.resolve();
      }

      return getFilesForRoute(assetPrefix, route).then(output => Promise.all(canPrefetch ? output.scripts.map(script => prefetchViaDom(script, 'script')) : [])).then(() => {
        (0, _requestIdleCallback.requestIdleCallback)(() => this.loadRoute(route, true).catch(() => {}));
      }).catch( // swallow prefetch errors
      () => {});
    }

  };
}

var _default = createRouteLoader;
exports.default = _default;

/***/ }),

/***/ "./node_modules/next/dist/client/router.js":
/*!*************************************************!*\
  !*** ./node_modules/next/dist/client/router.js ***!
  \*************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";


var _interopRequireWildcard = __webpack_require__(/*! @babel/runtime/helpers/interopRequireWildcard */ "./node_modules/@babel/runtime/helpers/interopRequireWildcard.js");

var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "./node_modules/@babel/runtime/helpers/interopRequireDefault.js");

exports.__esModule = true;
exports.useRouter = useRouter;
exports.makePublicRouterInstance = makePublicRouterInstance;
exports.createRouter = exports.withRouter = exports.default = void 0;

var _react = _interopRequireDefault(__webpack_require__(/*! react */ "react"));

var _router2 = _interopRequireWildcard(__webpack_require__(/*! ../next-server/lib/router/router */ "./node_modules/next/dist/next-server/lib/router/router.js"));

exports.Router = _router2.default;
exports.NextRouter = _router2.NextRouter;

var _routerContext = __webpack_require__(/*! ../next-server/lib/router-context */ "../next-server/lib/router-context");

var _withRouter = _interopRequireDefault(__webpack_require__(/*! ./with-router */ "./node_modules/next/dist/client/with-router.js"));

exports.withRouter = _withRouter.default;
/* global window */

const singletonRouter = {
  router: null,
  // holds the actual router instance
  readyCallbacks: [],

  ready(cb) {
    if (this.router) return cb();

    if (false) {}
  }

}; // Create public properties and methods of the router in the singletonRouter

const urlPropertyFields = ['pathname', 'route', 'query', 'asPath', 'components', 'isFallback', 'basePath', 'locale', 'locales', 'defaultLocale', 'isReady', 'isPreview', 'isLocaleDomain', 'domainLocales'];
const routerEvents = ['routeChangeStart', 'beforeHistoryChange', 'routeChangeComplete', 'routeChangeError', 'hashChangeStart', 'hashChangeComplete'];
const coreMethodFields = ['push', 'replace', 'reload', 'back', 'prefetch', 'beforePopState']; // Events is a static property on the router, the router doesn't have to be initialized to use it

Object.defineProperty(singletonRouter, 'events', {
  get() {
    return _router2.default.events;
  }

});
urlPropertyFields.forEach(field => {
  // Here we need to use Object.defineProperty because we need to return
  // the property assigned to the actual router
  // The value might get changed as we change routes and this is the
  // proper way to access it
  Object.defineProperty(singletonRouter, field, {
    get() {
      const router = getRouter();
      return router[field];
    }

  });
});
coreMethodFields.forEach(field => {
  // We don't really know the types here, so we add them later instead
  ;

  singletonRouter[field] = (...args) => {
    const router = getRouter();
    return router[field](...args);
  };
});
routerEvents.forEach(event => {
  singletonRouter.ready(() => {
    _router2.default.events.on(event, (...args) => {
      const eventField = `on${event.charAt(0).toUpperCase()}${event.substring(1)}`;
      const _singletonRouter = singletonRouter;

      if (_singletonRouter[eventField]) {
        try {
          _singletonRouter[eventField](...args);
        } catch (err) {
          console.error(`Error when running the Router event: ${eventField}`);
          console.error(`${err.message}\n${err.stack}`);
        }
      }
    });
  });
});

function getRouter() {
  if (!singletonRouter.router) {
    const message = 'No router instance found.\n' + 'You should only use "next/router" on the client side of your app.\n';
    throw new Error(message);
  }

  return singletonRouter.router;
} // Export the singletonRouter and this is the public API.


var _default = singletonRouter; // Reexport the withRoute HOC

exports.default = _default;

function useRouter() {
  return _react.default.useContext(_routerContext.RouterContext);
} // INTERNAL APIS
// -------------
// (do not use following exports inside the app)
// Create a router and assign it as the singleton instance.
// This is used in client side when we are initilizing the app.
// This should **not** be used inside the server.


const createRouter = (...args) => {
  singletonRouter.router = new _router2.default(...args);
  singletonRouter.readyCallbacks.forEach(cb => cb());
  singletonRouter.readyCallbacks = [];
  return singletonRouter.router;
}; // This function is used to create the `withRouter` router instance


exports.createRouter = createRouter;

function makePublicRouterInstance(router) {
  const _router = router;
  const instance = {};

  for (const property of urlPropertyFields) {
    if (typeof _router[property] === 'object') {
      instance[property] = Object.assign(Array.isArray(_router[property]) ? [] : {}, _router[property]); // makes sure query is not stateful

      continue;
    }

    instance[property] = _router[property];
  } // Events is a static property on the router, the router doesn't have to be initialized to use it


  instance.events = _router2.default.events;
  coreMethodFields.forEach(field => {
    instance[field] = (...args) => {
      return _router[field](...args);
    };
  });
  return instance;
}

/***/ }),

/***/ "./node_modules/next/dist/client/use-intersection.js":
/*!***********************************************************!*\
  !*** ./node_modules/next/dist/client/use-intersection.js ***!
  \***********************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.useIntersection = useIntersection;

var _react = __webpack_require__(/*! react */ "react");

var _requestIdleCallback = __webpack_require__(/*! ./request-idle-callback */ "./node_modules/next/dist/client/request-idle-callback.js");

const hasIntersectionObserver = typeof IntersectionObserver !== 'undefined';

function useIntersection({
  rootMargin,
  disabled
}) {
  const isDisabled = disabled || !hasIntersectionObserver;
  const unobserve = (0, _react.useRef)();
  const [visible, setVisible] = (0, _react.useState)(false);
  const setRef = (0, _react.useCallback)(el => {
    if (unobserve.current) {
      unobserve.current();
      unobserve.current = undefined;
    }

    if (isDisabled || visible) return;

    if (el && el.tagName) {
      unobserve.current = observe(el, isVisible => isVisible && setVisible(isVisible), {
        rootMargin
      });
    }
  }, [isDisabled, rootMargin, visible]);
  (0, _react.useEffect)(() => {
    if (!hasIntersectionObserver) {
      if (!visible) {
        const idleCallback = (0, _requestIdleCallback.requestIdleCallback)(() => setVisible(true));
        return () => (0, _requestIdleCallback.cancelIdleCallback)(idleCallback);
      }
    }
  }, [visible]);
  return [setRef, visible];
}

function observe(element, callback, options) {
  const {
    id,
    observer,
    elements
  } = createObserver(options);
  elements.set(element, callback);
  observer.observe(element);
  return function unobserve() {
    elements.delete(element);
    observer.unobserve(element); // Destroy observer when there's nothing left to watch:

    if (elements.size === 0) {
      observer.disconnect();
      observers.delete(id);
    }
  };
}

const observers = new Map();

function createObserver(options) {
  const id = options.rootMargin || '';
  let instance = observers.get(id);

  if (instance) {
    return instance;
  }

  const elements = new Map();
  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      const callback = elements.get(entry.target);
      const isVisible = entry.isIntersecting || entry.intersectionRatio > 0;

      if (callback && isVisible) {
        callback(isVisible);
      }
    });
  }, options);
  observers.set(id, instance = {
    id,
    observer,
    elements
  });
  return instance;
}

/***/ }),

/***/ "./node_modules/next/dist/client/with-router.js":
/*!******************************************************!*\
  !*** ./node_modules/next/dist/client/with-router.js ***!
  \******************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "./node_modules/@babel/runtime/helpers/interopRequireDefault.js");

exports.__esModule = true;
exports.default = withRouter;

var _react = _interopRequireDefault(__webpack_require__(/*! react */ "react"));

var _router = __webpack_require__(/*! ./router */ "./node_modules/next/dist/client/router.js");

function withRouter(ComposedComponent) {
  function WithRouterWrapper(props) {
    return /*#__PURE__*/_react.default.createElement(ComposedComponent, Object.assign({
      router: (0, _router.useRouter)()
    }, props));
  }

  WithRouterWrapper.getInitialProps = ComposedComponent.getInitialProps // This is needed to allow checking for custom getInitialProps in _app
  ;
  WithRouterWrapper.origGetInitialProps = ComposedComponent.origGetInitialProps;

  if (true) {
    const name = ComposedComponent.displayName || ComposedComponent.name || 'Unknown';
    WithRouterWrapper.displayName = `withRouter(${name})`;
  }

  return WithRouterWrapper;
}

/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/i18n/detect-domain-locale.js":
/*!*****************************************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/i18n/detect-domain-locale.js ***!
  \*****************************************************************************/
/***/ (function(__unused_webpack_module, exports) {

"use strict";


exports.__esModule = true;
exports.detectDomainLocale = detectDomainLocale;

function detectDomainLocale(domainItems, hostname, detectedLocale) {
  let domainItem;

  if (domainItems) {
    if (detectedLocale) {
      detectedLocale = detectedLocale.toLowerCase();
    }

    for (const item of domainItems) {
      var _item$domain, _item$locales; // remove port if present


      const domainHostname = (_item$domain = item.domain) == null ? void 0 : _item$domain.split(':')[0].toLowerCase();

      if (hostname === domainHostname || detectedLocale === item.defaultLocale.toLowerCase() || (_item$locales = item.locales) != null && _item$locales.some(locale => locale.toLowerCase() === detectedLocale)) {
        domainItem = item;
        break;
      }
    }
  }

  return domainItem;
}

/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/i18n/normalize-locale-path.js":
/*!******************************************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/i18n/normalize-locale-path.js ***!
  \******************************************************************************/
/***/ (function(__unused_webpack_module, exports) {

"use strict";


exports.__esModule = true;
exports.normalizeLocalePath = normalizeLocalePath;

function normalizeLocalePath(pathname, locales) {
  let detectedLocale; // first item will be empty string from splitting at first char

  const pathnameParts = pathname.split('/');
  (locales || []).some(locale => {
    if (pathnameParts[1].toLowerCase() === locale.toLowerCase()) {
      detectedLocale = locale;
      pathnameParts.splice(1, 1);
      pathname = pathnameParts.join('/') || '/';
      return true;
    }

    return false;
  });
  return {
    pathname,
    detectedLocale
  };
}

/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/mitt.js":
/*!********************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/mitt.js ***!
  \********************************************************/
/***/ (function(__unused_webpack_module, exports) {

"use strict";


exports.__esModule = true;
exports.default = mitt;
/*
MIT License
Copyright (c) Jason Miller (https://jasonformat.com/)
Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:
The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.
THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
*/
// This file is based on https://github.com/developit/mitt/blob/v1.1.3/src/index.js
// It's been edited for the needs of this script
// See the LICENSE at the top of the file

function mitt() {
  const all = Object.create(null);
  return {
    on(type, handler) {
      ;
      (all[type] || (all[type] = [])).push(handler);
    },

    off(type, handler) {
      if (all[type]) {
        all[type].splice(all[type].indexOf(handler) >>> 0, 1);
      }
    },

    emit(type, ...evts) {
      // eslint-disable-next-line array-callback-return
      ;
      (all[type] || []).slice().map(handler => {
        handler(...evts);
      });
    }

  };
}

/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/router/router.js":
/*!*****************************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/router/router.js ***!
  \*****************************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.getDomainLocale = getDomainLocale;
exports.addLocale = addLocale;
exports.delLocale = delLocale;
exports.hasBasePath = hasBasePath;
exports.addBasePath = addBasePath;
exports.delBasePath = delBasePath;
exports.isLocalURL = isLocalURL;
exports.interpolateAs = interpolateAs;
exports.resolveHref = resolveHref;
exports.default = void 0;

var _normalizeTrailingSlash = __webpack_require__(/*! ../../../client/normalize-trailing-slash */ "./node_modules/next/dist/client/normalize-trailing-slash.js");

var _routeLoader = __webpack_require__(/*! ../../../client/route-loader */ "./node_modules/next/dist/client/route-loader.js");

var _denormalizePagePath = __webpack_require__(/*! ../../server/denormalize-page-path */ "./node_modules/next/dist/next-server/server/denormalize-page-path.js");

var _normalizeLocalePath = __webpack_require__(/*! ../i18n/normalize-locale-path */ "./node_modules/next/dist/next-server/lib/i18n/normalize-locale-path.js");

var _mitt = _interopRequireDefault(__webpack_require__(/*! ../mitt */ "./node_modules/next/dist/next-server/lib/mitt.js"));

var _utils = __webpack_require__(/*! ../utils */ "./node_modules/next/dist/next-server/lib/utils.js");

var _isDynamic = __webpack_require__(/*! ./utils/is-dynamic */ "./node_modules/next/dist/next-server/lib/router/utils/is-dynamic.js");

var _parseRelativeUrl = __webpack_require__(/*! ./utils/parse-relative-url */ "./node_modules/next/dist/next-server/lib/router/utils/parse-relative-url.js");

var _querystring = __webpack_require__(/*! ./utils/querystring */ "./node_modules/next/dist/next-server/lib/router/utils/querystring.js");

var _resolveRewrites = _interopRequireDefault(__webpack_require__(/*! ./utils/resolve-rewrites */ "?ca47"));

var _routeMatcher = __webpack_require__(/*! ./utils/route-matcher */ "./node_modules/next/dist/next-server/lib/router/utils/route-matcher.js");

var _routeRegex = __webpack_require__(/*! ./utils/route-regex */ "./node_modules/next/dist/next-server/lib/router/utils/route-regex.js");

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    default: obj
  };
} // tslint:disable:no-console


let detectDomainLocale;

if (true) {
  detectDomainLocale = __webpack_require__(/*! ../i18n/detect-domain-locale */ "./node_modules/next/dist/next-server/lib/i18n/detect-domain-locale.js").detectDomainLocale;
}

const basePath =  false || '';

function buildCancellationError() {
  return Object.assign(new Error('Route Cancelled'), {
    cancelled: true
  });
}

function addPathPrefix(path, prefix) {
  return prefix && path.startsWith('/') ? path === '/' ? (0, _normalizeTrailingSlash.normalizePathTrailingSlash)(prefix) : `${prefix}${pathNoQueryHash(path) === '/' ? path.substring(1) : path}` : path;
}

function getDomainLocale(path, locale, locales, domainLocales) {
  if (true) {
    locale = locale || (0, _normalizeLocalePath.normalizeLocalePath)(path, locales).detectedLocale;
    const detectedDomain = detectDomainLocale(domainLocales, undefined, locale);

    if (detectedDomain) {
      return `http${detectedDomain.http ? '' : 's'}://${detectedDomain.domain}${basePath || ''}${locale === detectedDomain.defaultLocale ? '' : `/${locale}`}${path}`;
    }

    return false;
  }

  return false;
}

function addLocale(path, locale, defaultLocale) {
  if (true) {
    const pathname = pathNoQueryHash(path);
    const pathLower = pathname.toLowerCase();
    const localeLower = locale && locale.toLowerCase();
    return locale && locale !== defaultLocale && !pathLower.startsWith('/' + localeLower + '/') && pathLower !== '/' + localeLower ? addPathPrefix(path, '/' + locale) : path;
  }

  return path;
}

function delLocale(path, locale) {
  if (true) {
    const pathname = pathNoQueryHash(path);
    const pathLower = pathname.toLowerCase();
    const localeLower = locale && locale.toLowerCase();
    return locale && (pathLower.startsWith('/' + localeLower + '/') || pathLower === '/' + localeLower) ? (pathname.length === locale.length + 1 ? '/' : '') + path.substr(locale.length + 1) : path;
  }

  return path;
}

function pathNoQueryHash(path) {
  const queryIndex = path.indexOf('?');
  const hashIndex = path.indexOf('#');

  if (queryIndex > -1 || hashIndex > -1) {
    path = path.substring(0, queryIndex > -1 ? queryIndex : hashIndex);
  }

  return path;
}

function hasBasePath(path) {
  path = pathNoQueryHash(path);
  return path === basePath || path.startsWith(basePath + '/');
}

function addBasePath(path) {
  // we only add the basepath on relative urls
  return addPathPrefix(path, basePath);
}

function delBasePath(path) {
  path = path.slice(basePath.length);
  if (!path.startsWith('/')) path = `/${path}`;
  return path;
}
/**
* Detects whether a given url is routable by the Next.js router (browser only).
*/


function isLocalURL(url) {
  // prevent a hydration mismatch on href for url with anchor refs
  if (url.startsWith('/') || url.startsWith('#') || url.startsWith('?')) return true;

  try {
    // absolute urls can be local if they are on the same origin
    const locationOrigin = (0, _utils.getLocationOrigin)();
    const resolved = new URL(url, locationOrigin);
    return resolved.origin === locationOrigin && hasBasePath(resolved.pathname);
  } catch (_) {
    return false;
  }
}

function interpolateAs(route, asPathname, query) {
  let interpolatedRoute = '';
  const dynamicRegex = (0, _routeRegex.getRouteRegex)(route);
  const dynamicGroups = dynamicRegex.groups;
  const dynamicMatches = // Try to match the dynamic route against the asPath
  (asPathname !== route ? (0, _routeMatcher.getRouteMatcher)(dynamicRegex)(asPathname) : '') || // Fall back to reading the values from the href
  // TODO: should this take priority; also need to change in the router.
  query;
  interpolatedRoute = route;
  const params = Object.keys(dynamicGroups);

  if (!params.every(param => {
    let value = dynamicMatches[param] || '';
    const {
      repeat,
      optional
    } = dynamicGroups[param]; // support single-level catch-all
    // TODO: more robust handling for user-error (passing `/`)

    let replaced = `[${repeat ? '...' : ''}${param}]`;

    if (optional) {
      replaced = `${!value ? '/' : ''}[${replaced}]`;
    }

    if (repeat && !Array.isArray(value)) value = [value];
    return (optional || param in dynamicMatches) && ( // Interpolate group into data URL if present
    interpolatedRoute = interpolatedRoute.replace(replaced, repeat ? value.map( // these values should be fully encoded instead of just
    // path delimiter escaped since they are being inserted
    // into the URL and we expect URL encoded segments
    // when parsing dynamic route params
    segment => encodeURIComponent(segment)).join('/') : encodeURIComponent(value)) || '/');
  })) {
    interpolatedRoute = ''; // did not satisfy all requirements
    // n.b. We ignore this error because we handle warning for this case in
    // development in the `<Link>` component directly.
  }

  return {
    params,
    result: interpolatedRoute
  };
}

function omitParmsFromQuery(query, params) {
  const filteredQuery = {};
  Object.keys(query).forEach(key => {
    if (!params.includes(key)) {
      filteredQuery[key] = query[key];
    }
  });
  return filteredQuery;
}
/**
* Resolves a given hyperlink with a certain router state (basePath not included).
* Preserves absolute urls.
*/


function resolveHref(router, href, resolveAs) {
  // we use a dummy base url for relative urls
  let base;
  const urlAsString = typeof href === 'string' ? href : (0, _utils.formatWithValidation)(href);

  try {
    base = new URL(urlAsString.startsWith('#') ? router.asPath : router.pathname, 'http://n');
  } catch (_) {
    // fallback to / for invalid asPath values e.g. //
    base = new URL('/', 'http://n');
  } // Return because it cannot be routed by the Next.js router


  if (!isLocalURL(urlAsString)) {
    return resolveAs ? [urlAsString] : urlAsString;
  }

  try {
    const finalUrl = new URL(urlAsString, base);
    finalUrl.pathname = (0, _normalizeTrailingSlash.normalizePathTrailingSlash)(finalUrl.pathname);
    let interpolatedAs = '';

    if ((0, _isDynamic.isDynamicRoute)(finalUrl.pathname) && finalUrl.searchParams && resolveAs) {
      const query = (0, _querystring.searchParamsToUrlQuery)(finalUrl.searchParams);
      const {
        result,
        params
      } = interpolateAs(finalUrl.pathname, finalUrl.pathname, query);

      if (result) {
        interpolatedAs = (0, _utils.formatWithValidation)({
          pathname: result,
          hash: finalUrl.hash,
          query: omitParmsFromQuery(query, params)
        });
      }
    } // if the origin didn't change, it means we received a relative href


    const resolvedHref = finalUrl.origin === base.origin ? finalUrl.href.slice(finalUrl.origin.length) : finalUrl.href;
    return resolveAs ? [resolvedHref, interpolatedAs || resolvedHref] : resolvedHref;
  } catch (_) {
    return resolveAs ? [urlAsString] : urlAsString;
  }
}

function stripOrigin(url) {
  const origin = (0, _utils.getLocationOrigin)();
  return url.startsWith(origin) ? url.substring(origin.length) : url;
}

function prepareUrlAs(router, url, as) {
  // If url and as provided as an object representation,
  // we'll format them into the string version here.
  let [resolvedHref, resolvedAs] = resolveHref(router, url, true);
  const origin = (0, _utils.getLocationOrigin)();
  const hrefHadOrigin = resolvedHref.startsWith(origin);
  const asHadOrigin = resolvedAs && resolvedAs.startsWith(origin);
  resolvedHref = stripOrigin(resolvedHref);
  resolvedAs = resolvedAs ? stripOrigin(resolvedAs) : resolvedAs;
  const preparedUrl = hrefHadOrigin ? resolvedHref : addBasePath(resolvedHref);
  const preparedAs = as ? stripOrigin(resolveHref(router, as)) : resolvedAs || resolvedHref;
  return {
    url: preparedUrl,
    as: asHadOrigin ? preparedAs : addBasePath(preparedAs)
  };
}

function resolveDynamicRoute(pathname, pages) {
  const cleanPathname = (0, _normalizeTrailingSlash.removePathTrailingSlash)((0, _denormalizePagePath.denormalizePagePath)(pathname));

  if (cleanPathname === '/404' || cleanPathname === '/_error') {
    return pathname;
  } // handle resolving href for dynamic routes


  if (!pages.includes(cleanPathname)) {
    // eslint-disable-next-line array-callback-return
    pages.some(page => {
      if ((0, _isDynamic.isDynamicRoute)(page) && (0, _routeRegex.getRouteRegex)(page).re.test(cleanPathname)) {
        pathname = page;
        return true;
      }
    });
  }

  return (0, _normalizeTrailingSlash.removePathTrailingSlash)(pathname);
}

const manualScrollRestoration =  false && 0;
const SSG_DATA_NOT_FOUND = Symbol('SSG_DATA_NOT_FOUND');

function fetchRetry(url, attempts) {
  return fetch(url, {
    // Cookies are required to be present for Next.js' SSG "Preview Mode".
    // Cookies may also be required for `getServerSideProps`.
    //
    // > `fetch` won’t send cookies, unless you set the credentials init
    // > option.
    // https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API/Using_Fetch
    //
    // > For maximum browser compatibility when it comes to sending &
    // > receiving cookies, always supply the `credentials: 'same-origin'`
    // > option instead of relying on the default.
    // https://github.com/github/fetch#caveats
    credentials: 'same-origin'
  }).then(res => {
    if (!res.ok) {
      if (attempts > 1 && res.status >= 500) {
        return fetchRetry(url, attempts - 1);
      }

      if (res.status === 404) {
        return res.json().then(data => {
          if (data.notFound) {
            return {
              notFound: SSG_DATA_NOT_FOUND
            };
          }

          throw new Error(`Failed to load static props`);
        });
      }

      throw new Error(`Failed to load static props`);
    }

    return res.json();
  });
}

function fetchNextData(dataHref, isServerRender) {
  return fetchRetry(dataHref, isServerRender ? 3 : 1).catch(err => {
    // We should only trigger a server-side transition if this was caused
    // on a client-side transition. Otherwise, we'd get into an infinite
    // loop.
    if (!isServerRender) {
      (0, _routeLoader.markAssetError)(err);
    }

    throw err;
  });
}

class Router {
  /**
  * Map of all components loaded in `Router`
  */
  // Static Data Cache
  // In-flight Server Data Requests, for deduping
  constructor(_pathname, _query, _as, {
    initialProps,
    pageLoader,
    App,
    wrapApp,
    Component,
    err,
    subscription,
    isFallback,
    locale,
    locales,
    defaultLocale,
    domainLocales,
    isPreview
  }) {
    this.route = void 0;
    this.pathname = void 0;
    this.query = void 0;
    this.asPath = void 0;
    this.basePath = void 0;
    this.components = void 0;
    this.sdc = {};
    this.sdr = {};
    this.sub = void 0;
    this.clc = void 0;
    this.pageLoader = void 0;
    this._bps = void 0;
    this.events = void 0;
    this._wrapApp = void 0;
    this.isSsr = void 0;
    this.isFallback = void 0;
    this._inFlightRoute = void 0;
    this._shallow = void 0;
    this.locale = void 0;
    this.locales = void 0;
    this.defaultLocale = void 0;
    this.domainLocales = void 0;
    this.isReady = void 0;
    this.isPreview = void 0;
    this.isLocaleDomain = void 0;
    this._idx = 0;

    this.onPopState = e => {
      const state = e.state;

      if (!state) {
        // We get state as undefined for two reasons.
        //  1. With older safari (< 8) and older chrome (< 34)
        //  2. When the URL changed with #
        //
        // In the both cases, we don't need to proceed and change the route.
        // (as it's already changed)
        // But we can simply replace the state with the new changes.
        // Actually, for (1) we don't need to nothing. But it's hard to detect that event.
        // So, doing the following for (1) does no harm.
        const {
          pathname,
          query
        } = this;
        this.changeState('replaceState', (0, _utils.formatWithValidation)({
          pathname: addBasePath(pathname),
          query
        }), (0, _utils.getURL)());
        return;
      }

      if (!state.__N) {
        return;
      }

      let forcedScroll;
      const {
        url,
        as,
        options,
        idx
      } = state;

      if (false) {}

      this._idx = idx;
      const {
        pathname
      } = (0, _parseRelativeUrl.parseRelativeUrl)(url); // Make sure we don't re-render on initial load,
      // can be caused by navigating back from an external site

      if (this.isSsr && as === this.asPath && pathname === this.pathname) {
        return;
      } // If the downstream application returns falsy, return.
      // They will then be responsible for handling the event.


      if (this._bps && !this._bps(state)) {
        return;
      }

      this.change('replaceState', url, as, Object.assign({}, options, {
        shallow: options.shallow && this._shallow,
        locale: options.locale || this.defaultLocale
      }), forcedScroll);
    }; // represents the current component key


    this.route = (0, _normalizeTrailingSlash.removePathTrailingSlash)(_pathname); // set up the component cache (by route keys)

    this.components = {}; // We should not keep the cache, if there's an error
    // Otherwise, this cause issues when when going back and
    // come again to the errored page.

    if (_pathname !== '/_error') {
      this.components[this.route] = {
        Component,
        initial: true,
        props: initialProps,
        err,
        __N_SSG: initialProps && initialProps.__N_SSG,
        __N_SSP: initialProps && initialProps.__N_SSP
      };
    }

    this.components['/_app'] = {
      Component: App,
      styleSheets: [
        /* /_app does not need its stylesheets managed */
      ]
    }; // Backwards compat for Router.router.events
    // TODO: Should be remove the following major version as it was never documented

    this.events = Router.events;
    this.pageLoader = pageLoader;
    this.pathname = _pathname;
    this.query = _query; // if auto prerendered and dynamic route wait to update asPath
    // until after mount to prevent hydration mismatch

    const autoExportDynamic = (0, _isDynamic.isDynamicRoute)(_pathname) && self.__NEXT_DATA__.autoExport;

    this.asPath = autoExportDynamic ? _pathname : _as;
    this.basePath = basePath;
    this.sub = subscription;
    this.clc = null;
    this._wrapApp = wrapApp; // make sure to ignore extra popState in safari on navigating
    // back from external site

    this.isSsr = true;
    this.isFallback = isFallback;
    this.isReady = !!(self.__NEXT_DATA__.gssp || self.__NEXT_DATA__.gip || !autoExportDynamic && !self.location.search && !false);
    this.isPreview = !!isPreview;
    this.isLocaleDomain = false;

    if (true) {
      this.locale = locale;
      this.locales = locales;
      this.defaultLocale = defaultLocale;
      this.domainLocales = domainLocales;
      this.isLocaleDomain = !!detectDomainLocale(domainLocales, self.location.hostname);
    }

    if (false) {}
  }

  reload() {
    window.location.reload();
  }
  /**
  * Go back in history
  */


  back() {
    window.history.back();
  }
  /**
  * Performs a `pushState` with arguments
  * @param url of the route
  * @param as masks `url` for the browser
  * @param options object you can define `shallow` and other options
  */


  push(url, as, options = {}) {
    if (false) {}

    ;
    ({
      url,
      as
    } = prepareUrlAs(this, url, as));
    return this.change('pushState', url, as, options);
  }
  /**
  * Performs a `replaceState` with arguments
  * @param url of the route
  * @param as masks `url` for the browser
  * @param options object you can define `shallow` and other options
  */


  replace(url, as, options = {}) {
    ;
    ({
      url,
      as
    } = prepareUrlAs(this, url, as));
    return this.change('replaceState', url, as, options);
  }

  async change(method, url, as, options, forcedScroll) {
    if (!isLocalURL(url)) {
      window.location.href = url;
      return false;
    }

    const shouldResolveHref = url === as || options._h || options._shouldResolveHref; // for static pages with query params in the URL we delay
    // marking the router ready until after the query is updated

    if (options._h) {
      this.isReady = true;
    }

    let localeChange = options.locale !== this.locale;

    if (true) {
      this.locale = options.locale === false ? this.defaultLocale : options.locale || this.locale;

      if (typeof options.locale === 'undefined') {
        options.locale = this.locale;
      }

      const parsedAs = (0, _parseRelativeUrl.parseRelativeUrl)(hasBasePath(as) ? delBasePath(as) : as);
      const localePathResult = (0, _normalizeLocalePath.normalizeLocalePath)(parsedAs.pathname, this.locales);

      if (localePathResult.detectedLocale) {
        this.locale = localePathResult.detectedLocale;
        parsedAs.pathname = addBasePath(parsedAs.pathname);
        as = (0, _utils.formatWithValidation)(parsedAs);
        url = addBasePath((0, _normalizeLocalePath.normalizeLocalePath)(hasBasePath(url) ? delBasePath(url) : url, this.locales).pathname);
      }

      let didNavigate = false; // we need to wrap this in the env check again since regenerator runtime
      // moves this on its own due to the return

      if (true) {
        var _this$locales; // if the locale isn't configured hard navigate to show 404 page


        if (!((_this$locales = this.locales) != null && _this$locales.includes(this.locale))) {
          parsedAs.pathname = addLocale(parsedAs.pathname, this.locale);
          window.location.href = (0, _utils.formatWithValidation)(parsedAs); // this was previously a return but was removed in favor
          // of better dead code elimination with regenerator runtime

          didNavigate = true;
        }
      }

      const detectedDomain = detectDomainLocale(this.domainLocales, undefined, this.locale); // we need to wrap this in the env check again since regenerator runtime
      // moves this on its own due to the return

      if (true) {
        // if we are navigating to a domain locale ensure we redirect to the
        // correct domain
        if (!didNavigate && detectedDomain && this.isLocaleDomain && self.location.hostname !== detectedDomain.domain) {
          const asNoBasePath = delBasePath(as);
          window.location.href = `http${detectedDomain.http ? '' : 's'}://${detectedDomain.domain}${addBasePath(`${this.locale === detectedDomain.defaultLocale ? '' : `/${this.locale}`}${asNoBasePath === '/' ? '' : asNoBasePath}` || '/')}`; // this was previously a return but was removed in favor
          // of better dead code elimination with regenerator runtime

          didNavigate = true;
        }
      }

      if (didNavigate) {
        return new Promise(() => {});
      }
    }

    if (!options._h) {
      this.isSsr = false;
    } // marking route changes as a navigation start entry


    if (_utils.ST) {
      performance.mark('routeChange');
    }

    const {
      shallow = false
    } = options;
    const routeProps = {
      shallow
    };

    if (this._inFlightRoute) {
      this.abortComponentLoad(this._inFlightRoute, routeProps);
    }

    as = addBasePath(addLocale(hasBasePath(as) ? delBasePath(as) : as, options.locale, this.defaultLocale));
    const cleanedAs = delLocale(hasBasePath(as) ? delBasePath(as) : as, this.locale);
    this._inFlightRoute = as; // If the url change is only related to a hash change
    // We should not proceed. We should only change the state.
    // WARNING: `_h` is an internal option for handing Next.js client-side
    // hydration. Your app should _never_ use this property. It may change at
    // any time without notice.

    if (!options._h && this.onlyAHashChange(cleanedAs)) {
      this.asPath = cleanedAs;
      Router.events.emit('hashChangeStart', as, routeProps); // TODO: do we need the resolved href when only a hash change?

      this.changeState(method, url, as, options);
      this.scrollToHash(cleanedAs);
      this.notify(this.components[this.route], null);
      Router.events.emit('hashChangeComplete', as, routeProps);
      return true;
    }

    let parsed = (0, _parseRelativeUrl.parseRelativeUrl)(url);
    let {
      pathname,
      query
    } = parsed; // The build manifest needs to be loaded before auto-static dynamic pages
    // get their query parameters to allow ensuring they can be parsed properly
    // when rewritten to

    let pages, rewrites;

    try {
      pages = await this.pageLoader.getPageList();
      ({
        __rewrites: rewrites
      } = await (0, _routeLoader.getClientBuildManifest)());
    } catch (err) {
      // If we fail to resolve the page list or client-build manifest, we must
      // do a server-side transition:
      window.location.href = as;
      return false;
    } // If asked to change the current URL we should reload the current page
    // (not location.reload() but reload getInitialProps and other Next.js stuffs)
    // We also need to set the method = replaceState always
    // as this should not go into the history (That's how browsers work)
    // We should compare the new asPath to the current asPath, not the url


    if (!this.urlIsNew(cleanedAs) && !localeChange) {
      method = 'replaceState';
    } // we need to resolve the as value using rewrites for dynamic SSG
    // pages to allow building the data URL correctly


    let resolvedAs = as; // url and as should always be prefixed with basePath by this
    // point by either next/link or router.push/replace so strip the
    // basePath from the pathname to match the pages dir 1-to-1

    pathname = pathname ? (0, _normalizeTrailingSlash.removePathTrailingSlash)(delBasePath(pathname)) : pathname;

    if (shouldResolveHref && pathname !== '/_error') {
      ;
      options._shouldResolveHref = true;

      if (false) {} else {
        parsed.pathname = resolveDynamicRoute(pathname, pages);

        if (parsed.pathname !== pathname) {
          pathname = parsed.pathname;
          parsed.pathname = addBasePath(pathname);
          url = (0, _utils.formatWithValidation)(parsed);
        }
      }
    }

    const route = (0, _normalizeTrailingSlash.removePathTrailingSlash)(pathname);

    if (!isLocalURL(as)) {
      if (true) {
        throw new Error(`Invalid href: "${url}" and as: "${as}", received relative href and external as` + `\nSee more info: https://nextjs.org/docs/messages/invalid-relative-url-external-as`);
      }

      window.location.href = as;
      return false;
    }

    resolvedAs = delLocale(delBasePath(resolvedAs), this.locale);

    if ((0, _isDynamic.isDynamicRoute)(route)) {
      const parsedAs = (0, _parseRelativeUrl.parseRelativeUrl)(resolvedAs);
      const asPathname = parsedAs.pathname;
      const routeRegex = (0, _routeRegex.getRouteRegex)(route);
      const routeMatch = (0, _routeMatcher.getRouteMatcher)(routeRegex)(asPathname);
      const shouldInterpolate = route === asPathname;
      const interpolatedAs = shouldInterpolate ? interpolateAs(route, asPathname, query) : {};

      if (!routeMatch || shouldInterpolate && !interpolatedAs.result) {
        const missingParams = Object.keys(routeRegex.groups).filter(param => !query[param]);

        if (missingParams.length > 0) {
          if (true) {
            console.warn(`${shouldInterpolate ? `Interpolating href` : `Mismatching \`as\` and \`href\``} failed to manually provide ` + `the params: ${missingParams.join(', ')} in the \`href\`'s \`query\``);
          }

          throw new Error((shouldInterpolate ? `The provided \`href\` (${url}) value is missing query values (${missingParams.join(', ')}) to be interpolated properly. ` : `The provided \`as\` value (${asPathname}) is incompatible with the \`href\` value (${route}). `) + `Read more: https://nextjs.org/docs/messages/${shouldInterpolate ? 'href-interpolation-failed' : 'incompatible-href-as'}`);
        }
      } else if (shouldInterpolate) {
        as = (0, _utils.formatWithValidation)(Object.assign({}, parsedAs, {
          pathname: interpolatedAs.result,
          query: omitParmsFromQuery(query, interpolatedAs.params)
        }));
      } else {
        // Merge params into `query`, overwriting any specified in search
        Object.assign(query, routeMatch);
      }
    }

    Router.events.emit('routeChangeStart', as, routeProps);

    try {
      var _self$__NEXT_DATA__$p, _self$__NEXT_DATA__$p2, _options$scroll;

      let routeInfo = await this.getRouteInfo(route, pathname, query, as, resolvedAs, routeProps);
      let {
        error,
        props,
        __N_SSG,
        __N_SSP
      } = routeInfo; // handle redirect on client-transition

      if ((__N_SSG || __N_SSP) && props) {
        if (props.pageProps && props.pageProps.__N_REDIRECT) {
          const destination = props.pageProps.__N_REDIRECT; // check if destination is internal (resolves to a page) and attempt
          // client-navigation if it is falling back to hard navigation if
          // it's not

          if (destination.startsWith('/')) {
            const parsedHref = (0, _parseRelativeUrl.parseRelativeUrl)(destination);
            parsedHref.pathname = resolveDynamicRoute(parsedHref.pathname, pages);
            const {
              url: newUrl,
              as: newAs
            } = prepareUrlAs(this, destination, destination);
            return this.change(method, newUrl, newAs, options);
          }

          window.location.href = destination;
          return new Promise(() => {});
        }

        this.isPreview = !!props.__N_PREVIEW; // handle SSG data 404

        if (props.notFound === SSG_DATA_NOT_FOUND) {
          let notFoundRoute;

          try {
            await this.fetchComponent('/404');
            notFoundRoute = '/404';
          } catch (_) {
            notFoundRoute = '/_error';
          }

          routeInfo = await this.getRouteInfo(notFoundRoute, notFoundRoute, query, as, resolvedAs, {
            shallow: false
          });
        }
      }

      Router.events.emit('beforeHistoryChange', as, routeProps);
      this.changeState(method, url, as, options);

      if (true) {
        const appComp = this.components['/_app'].Component;
        window.next.isPrerendered = appComp.getInitialProps === appComp.origGetInitialProps && !routeInfo.Component.getInitialProps;
      }

      if (options._h && pathname === '/_error' && ((_self$__NEXT_DATA__$p = self.__NEXT_DATA__.props) == null ? void 0 : (_self$__NEXT_DATA__$p2 = _self$__NEXT_DATA__$p.pageProps) == null ? void 0 : _self$__NEXT_DATA__$p2.statusCode) === 500 && props != null && props.pageProps) {
        // ensure statusCode is still correct for static 500 page
        // when updating query information
        props.pageProps.statusCode = 500;
      } // shallow routing is only allowed for same page URL changes.


      const isValidShallowRoute = options.shallow && this.route === route;
      const shouldScroll = (_options$scroll = options.scroll) != null ? _options$scroll : !isValidShallowRoute;
      const resetScroll = shouldScroll ? {
        x: 0,
        y: 0
      } : null;
      await this.set(route, pathname, query, cleanedAs, routeInfo, forcedScroll != null ? forcedScroll : resetScroll).catch(e => {
        if (e.cancelled) error = error || e;else throw e;
      });

      if (error) {
        Router.events.emit('routeChangeError', error, cleanedAs, routeProps);
        throw error;
      }

      if (true) {
        if (this.locale) {
          document.documentElement.lang = this.locale;
        }
      }

      Router.events.emit('routeChangeComplete', as, routeProps);
      return true;
    } catch (err) {
      if (err.cancelled) {
        return false;
      }

      throw err;
    }
  }

  changeState(method, url, as, options = {}) {
    if (true) {
      if (typeof window.history === 'undefined') {
        console.error(`Warning: window.history is not available.`);
        return;
      }

      if (typeof window.history[method] === 'undefined') {
        console.error(`Warning: window.history.${method} is not available`);
        return;
      }
    }

    if (method !== 'pushState' || (0, _utils.getURL)() !== as) {
      this._shallow = options.shallow;
      window.history[method]({
        url,
        as,
        options,
        __N: true,
        idx: this._idx = method !== 'pushState' ? this._idx : this._idx + 1
      }, // Most browsers currently ignores this parameter, although they may use it in the future.
      // Passing the empty string here should be safe against future changes to the method.
      // https://developer.mozilla.org/en-US/docs/Web/API/History/replaceState
      '', as);
    }
  }

  async handleRouteInfoError(err, pathname, query, as, routeProps, loadErrorFail) {
    if (err.cancelled) {
      // bubble up cancellation errors
      throw err;
    }

    if ((0, _routeLoader.isAssetError)(err) || loadErrorFail) {
      Router.events.emit('routeChangeError', err, as, routeProps); // If we can't load the page it could be one of following reasons
      //  1. Page doesn't exists
      //  2. Page does exist in a different zone
      //  3. Internal error while loading the page
      // So, doing a hard reload is the proper way to deal with this.

      window.location.href = as; // Changing the URL doesn't block executing the current code path.
      // So let's throw a cancellation error stop the routing logic.

      throw buildCancellationError();
    }

    try {
      let Component;
      let styleSheets;
      let props;

      if (typeof Component === 'undefined' || typeof styleSheets === 'undefined') {
        ;
        ({
          page: Component,
          styleSheets
        } = await this.fetchComponent('/_error'));
      }

      const routeInfo = {
        props,
        Component,
        styleSheets,
        err,
        error: err
      };

      if (!routeInfo.props) {
        try {
          routeInfo.props = await this.getInitialProps(Component, {
            err,
            pathname,
            query
          });
        } catch (gipErr) {
          console.error('Error in error page `getInitialProps`: ', gipErr);
          routeInfo.props = {};
        }
      }

      return routeInfo;
    } catch (routeInfoErr) {
      return this.handleRouteInfoError(routeInfoErr, pathname, query, as, routeProps, true);
    }
  }

  async getRouteInfo(route, pathname, query, as, resolvedAs, routeProps) {
    try {
      const existingRouteInfo = this.components[route];

      if (routeProps.shallow && existingRouteInfo && this.route === route) {
        return existingRouteInfo;
      }

      const cachedRouteInfo = existingRouteInfo && 'initial' in existingRouteInfo ? undefined : existingRouteInfo;
      const routeInfo = cachedRouteInfo ? cachedRouteInfo : await this.fetchComponent(route).then(res => ({
        Component: res.page,
        styleSheets: res.styleSheets,
        __N_SSG: res.mod.__N_SSG,
        __N_SSP: res.mod.__N_SSP
      }));
      const {
        Component,
        __N_SSG,
        __N_SSP
      } = routeInfo;

      if (true) {
        const {
          isValidElementType
        } = __webpack_require__(/*! react-is */ "react-is");

        if (!isValidElementType(Component)) {
          throw new Error(`The default export is not a React Component in page: "${pathname}"`);
        }
      }

      let dataHref;

      if (__N_SSG || __N_SSP) {
        dataHref = this.pageLoader.getDataHref((0, _utils.formatWithValidation)({
          pathname,
          query
        }), resolvedAs, __N_SSG, this.locale);
      }

      const props = await this._getData(() => __N_SSG ? this._getStaticData(dataHref) : __N_SSP ? this._getServerData(dataHref) : this.getInitialProps(Component, // we provide AppTree later so this needs to be `any`
      {
        pathname,
        query,
        asPath: as,
        locale: this.locale,
        locales: this.locales,
        defaultLocale: this.defaultLocale
      }));
      routeInfo.props = props;
      this.components[route] = routeInfo;
      return routeInfo;
    } catch (err) {
      return this.handleRouteInfoError(err, pathname, query, as, routeProps);
    }
  }

  set(route, pathname, query, as, data, resetScroll) {
    this.isFallback = false;
    this.route = route;
    this.pathname = pathname;
    this.query = query;
    this.asPath = as;
    return this.notify(data, resetScroll);
  }
  /**
  * Callback to execute before replacing router state
  * @param cb callback to be executed
  */


  beforePopState(cb) {
    this._bps = cb;
  }

  onlyAHashChange(as) {
    if (!this.asPath) return false;
    const [oldUrlNoHash, oldHash] = this.asPath.split('#');
    const [newUrlNoHash, newHash] = as.split('#'); // Makes sure we scroll to the provided hash if the url/hash are the same

    if (newHash && oldUrlNoHash === newUrlNoHash && oldHash === newHash) {
      return true;
    } // If the urls are change, there's more than a hash change


    if (oldUrlNoHash !== newUrlNoHash) {
      return false;
    } // If the hash has changed, then it's a hash only change.
    // This check is necessary to handle both the enter and
    // leave hash === '' cases. The identity case falls through
    // and is treated as a next reload.


    return oldHash !== newHash;
  }

  scrollToHash(as) {
    const [, hash] = as.split('#'); // Scroll to top if the hash is just `#` with no value or `#top`
    // To mirror browsers

    if (hash === '' || hash === 'top') {
      window.scrollTo(0, 0);
      return;
    } // First we check if the element by id is found


    const idEl = document.getElementById(hash);

    if (idEl) {
      idEl.scrollIntoView();
      return;
    } // If there's no element with the id, we check the `name` property
    // To mirror browsers


    const nameEl = document.getElementsByName(hash)[0];

    if (nameEl) {
      nameEl.scrollIntoView();
    }
  }

  urlIsNew(asPath) {
    return this.asPath !== asPath;
  }
  /**
  * Prefetch page code, you may wait for the data during page rendering.
  * This feature only works in production!
  * @param url the href of prefetched page
  * @param asPath the as path of the prefetched page
  */


  async prefetch(url, asPath = url, options = {}) {
    let parsed = (0, _parseRelativeUrl.parseRelativeUrl)(url);
    let {
      pathname
    } = parsed;

    if (true) {
      if (options.locale === false) {
        pathname = (0, _normalizeLocalePath.normalizeLocalePath)(pathname, this.locales).pathname;
        parsed.pathname = pathname;
        url = (0, _utils.formatWithValidation)(parsed);
        let parsedAs = (0, _parseRelativeUrl.parseRelativeUrl)(asPath);
        const localePathResult = (0, _normalizeLocalePath.normalizeLocalePath)(parsedAs.pathname, this.locales);
        parsedAs.pathname = localePathResult.pathname;
        options.locale = localePathResult.detectedLocale || this.defaultLocale;
        asPath = (0, _utils.formatWithValidation)(parsedAs);
      }
    }

    const pages = await this.pageLoader.getPageList();
    let resolvedAs = asPath;

    if (false) {} else {
      parsed.pathname = resolveDynamicRoute(parsed.pathname, pages);

      if (parsed.pathname !== pathname) {
        pathname = parsed.pathname;
        parsed.pathname = pathname;
        url = (0, _utils.formatWithValidation)(parsed);
      }
    }

    const route = (0, _normalizeTrailingSlash.removePathTrailingSlash)(pathname); // Prefetch is not supported in development mode because it would trigger on-demand-entries

    if (true) {
      return;
    }

    await Promise.all([this.pageLoader._isSsg(route).then(isSsg => {
      return isSsg ? this._getStaticData(this.pageLoader.getDataHref(url, resolvedAs, true, typeof options.locale !== 'undefined' ? options.locale : this.locale)) : false;
    }), this.pageLoader[options.priority ? 'loadPage' : 'prefetch'](route)]);
  }

  async fetchComponent(route) {
    let cancelled = false;

    const cancel = this.clc = () => {
      cancelled = true;
    };

    const componentResult = await this.pageLoader.loadPage(route);

    if (cancelled) {
      const error = new Error(`Abort fetching component for route: "${route}"`);
      error.cancelled = true;
      throw error;
    }

    if (cancel === this.clc) {
      this.clc = null;
    }

    return componentResult;
  }

  _getData(fn) {
    let cancelled = false;

    const cancel = () => {
      cancelled = true;
    };

    this.clc = cancel;
    return fn().then(data => {
      if (cancel === this.clc) {
        this.clc = null;
      }

      if (cancelled) {
        const err = new Error('Loading initial props cancelled');
        err.cancelled = true;
        throw err;
      }

      return data;
    });
  }

  _getStaticData(dataHref) {
    const {
      href: cacheKey
    } = new URL(dataHref, window.location.href);

    if (false) {}

    return fetchNextData(dataHref, this.isSsr).then(data => {
      this.sdc[cacheKey] = data;
      return data;
    });
  }

  _getServerData(dataHref) {
    const {
      href: resourceKey
    } = new URL(dataHref, window.location.href);

    if (this.sdr[resourceKey]) {
      return this.sdr[resourceKey];
    }

    return this.sdr[resourceKey] = fetchNextData(dataHref, this.isSsr).then(data => {
      delete this.sdr[resourceKey];
      return data;
    }).catch(err => {
      delete this.sdr[resourceKey];
      throw err;
    });
  }

  getInitialProps(Component, ctx) {
    const {
      Component: App
    } = this.components['/_app'];

    const AppTree = this._wrapApp(App);

    ctx.AppTree = AppTree;
    return (0, _utils.loadGetInitialProps)(App, {
      AppTree,
      Component,
      router: this,
      ctx
    });
  }

  abortComponentLoad(as, routeProps) {
    if (this.clc) {
      Router.events.emit('routeChangeError', buildCancellationError(), as, routeProps);
      this.clc();
      this.clc = null;
    }
  }

  notify(data, resetScroll) {
    return this.sub(data, this.components['/_app'].Component, resetScroll);
  }

}

exports.default = Router;
Router.events = (0, _mitt.default)();

/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/router/utils/format-url.js":
/*!***************************************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/router/utils/format-url.js ***!
  \***************************************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.formatUrl = formatUrl;

var querystring = _interopRequireWildcard(__webpack_require__(/*! ./querystring */ "./node_modules/next/dist/next-server/lib/router/utils/querystring.js"));

function _getRequireWildcardCache() {
  if (typeof WeakMap !== "function") return null;
  var cache = new WeakMap();

  _getRequireWildcardCache = function () {
    return cache;
  };

  return cache;
}

function _interopRequireWildcard(obj) {
  if (obj && obj.__esModule) {
    return obj;
  }

  if (obj === null || typeof obj !== "object" && typeof obj !== "function") {
    return {
      default: obj
    };
  }

  var cache = _getRequireWildcardCache();

  if (cache && cache.has(obj)) {
    return cache.get(obj);
  }

  var newObj = {};
  var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor;

  for (var key in obj) {
    if (Object.prototype.hasOwnProperty.call(obj, key)) {
      var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null;

      if (desc && (desc.get || desc.set)) {
        Object.defineProperty(newObj, key, desc);
      } else {
        newObj[key] = obj[key];
      }
    }
  }

  newObj.default = obj;

  if (cache) {
    cache.set(obj, newObj);
  }

  return newObj;
} // Format function modified from nodejs
// Copyright Joyent, Inc. and other Node contributors.
//
// Permission is hereby granted, free of charge, to any person obtaining a
// copy of this software and associated documentation files (the
// "Software"), to deal in the Software without restriction, including
// without limitation the rights to use, copy, modify, merge, publish,
// distribute, sublicense, and/or sell copies of the Software, and to permit
// persons to whom the Software is furnished to do so, subject to the
// following conditions:
//
// The above copyright notice and this permission notice shall be included
// in all copies or substantial portions of the Software.
//
// THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS
// OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
// MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN
// NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM,
// DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR
// OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE
// USE OR OTHER DEALINGS IN THE SOFTWARE.


const slashedProtocols = /https?|ftp|gopher|file/;

function formatUrl(urlObj) {
  let {
    auth,
    hostname
  } = urlObj;
  let protocol = urlObj.protocol || '';
  let pathname = urlObj.pathname || '';
  let hash = urlObj.hash || '';
  let query = urlObj.query || '';
  let host = false;
  auth = auth ? encodeURIComponent(auth).replace(/%3A/i, ':') + '@' : '';

  if (urlObj.host) {
    host = auth + urlObj.host;
  } else if (hostname) {
    host = auth + (~hostname.indexOf(':') ? `[${hostname}]` : hostname);

    if (urlObj.port) {
      host += ':' + urlObj.port;
    }
  }

  if (query && typeof query === 'object') {
    query = String(querystring.urlQueryToSearchParams(query));
  }

  let search = urlObj.search || query && `?${query}` || '';
  if (protocol && protocol.substr(-1) !== ':') protocol += ':';

  if (urlObj.slashes || (!protocol || slashedProtocols.test(protocol)) && host !== false) {
    host = '//' + (host || '');
    if (pathname && pathname[0] !== '/') pathname = '/' + pathname;
  } else if (!host) {
    host = '';
  }

  if (hash && hash[0] !== '#') hash = '#' + hash;
  if (search && search[0] !== '?') search = '?' + search;
  pathname = pathname.replace(/[?#]/g, encodeURIComponent);
  search = search.replace('#', '%23');
  return `${protocol}${host}${pathname}${search}${hash}`;
}

/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/router/utils/is-dynamic.js":
/*!***************************************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/router/utils/is-dynamic.js ***!
  \***************************************************************************/
/***/ (function(__unused_webpack_module, exports) {

"use strict";


exports.__esModule = true;
exports.isDynamicRoute = isDynamicRoute; // Identify /[param]/ in route string

const TEST_ROUTE = /\/\[[^/]+?\](?=\/|$)/;

function isDynamicRoute(route) {
  return TEST_ROUTE.test(route);
}

/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/router/utils/parse-relative-url.js":
/*!***********************************************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/router/utils/parse-relative-url.js ***!
  \***********************************************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.parseRelativeUrl = parseRelativeUrl;

var _utils = __webpack_require__(/*! ../../utils */ "./node_modules/next/dist/next-server/lib/utils.js");

var _querystring = __webpack_require__(/*! ./querystring */ "./node_modules/next/dist/next-server/lib/router/utils/querystring.js");
/**
* Parses path-relative urls (e.g. `/hello/world?foo=bar`). If url isn't path-relative
* (e.g. `./hello`) then at least base must be.
* Absolute urls are rejected with one exception, in the browser, absolute urls that are on
* the current origin will be parsed as relative
*/


function parseRelativeUrl(url, base) {
  const globalBase = new URL( true ? 'http://n' : 0);
  const resolvedBase = base ? new URL(base, globalBase) : globalBase;
  const {
    pathname,
    searchParams,
    search,
    hash,
    href,
    origin
  } = new URL(url, resolvedBase);

  if (origin !== globalBase.origin) {
    throw new Error(`invariant: invalid relative URL, router received ${url}`);
  }

  return {
    pathname,
    query: (0, _querystring.searchParamsToUrlQuery)(searchParams),
    search,
    hash,
    href: href.slice(globalBase.origin.length)
  };
}

/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/router/utils/querystring.js":
/*!****************************************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/router/utils/querystring.js ***!
  \****************************************************************************/
/***/ (function(__unused_webpack_module, exports) {

"use strict";


exports.__esModule = true;
exports.searchParamsToUrlQuery = searchParamsToUrlQuery;
exports.urlQueryToSearchParams = urlQueryToSearchParams;
exports.assign = assign;

function searchParamsToUrlQuery(searchParams) {
  const query = {};
  searchParams.forEach((value, key) => {
    if (typeof query[key] === 'undefined') {
      query[key] = value;
    } else if (Array.isArray(query[key])) {
      ;
      query[key].push(value);
    } else {
      query[key] = [query[key], value];
    }
  });
  return query;
}

function stringifyUrlQueryParam(param) {
  if (typeof param === 'string' || typeof param === 'number' && !isNaN(param) || typeof param === 'boolean') {
    return String(param);
  } else {
    return '';
  }
}

function urlQueryToSearchParams(urlQuery) {
  const result = new URLSearchParams();
  Object.entries(urlQuery).forEach(([key, value]) => {
    if (Array.isArray(value)) {
      value.forEach(item => result.append(key, stringifyUrlQueryParam(item)));
    } else {
      result.set(key, stringifyUrlQueryParam(value));
    }
  });
  return result;
}

function assign(target, ...searchParamsList) {
  searchParamsList.forEach(searchParams => {
    Array.from(searchParams.keys()).forEach(key => target.delete(key));
    searchParams.forEach((value, key) => target.append(key, value));
  });
  return target;
}

/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/router/utils/route-matcher.js":
/*!******************************************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/router/utils/route-matcher.js ***!
  \******************************************************************************/
/***/ (function(__unused_webpack_module, exports) {

"use strict";


exports.__esModule = true;
exports.getRouteMatcher = getRouteMatcher;

function getRouteMatcher(routeRegex) {
  const {
    re,
    groups
  } = routeRegex;
  return pathname => {
    const routeMatch = re.exec(pathname);

    if (!routeMatch) {
      return false;
    }

    const decode = param => {
      try {
        return decodeURIComponent(param);
      } catch (_) {
        const err = new Error('failed to decode param');
        err.code = 'DECODE_FAILED';
        throw err;
      }
    };

    const params = {};
    Object.keys(groups).forEach(slugName => {
      const g = groups[slugName];
      const m = routeMatch[g.pos];

      if (m !== undefined) {
        params[slugName] = ~m.indexOf('/') ? m.split('/').map(entry => decode(entry)) : g.repeat ? [decode(m)] : decode(m);
      }
    });
    return params;
  };
}

/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/router/utils/route-regex.js":
/*!****************************************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/router/utils/route-regex.js ***!
  \****************************************************************************/
/***/ (function(__unused_webpack_module, exports) {

"use strict";


exports.__esModule = true;
exports.getRouteRegex = getRouteRegex; // this isn't importing the escape-string-regex module
// to reduce bytes

function escapeRegex(str) {
  return str.replace(/[|\\{}()[\]^$+*?.-]/g, '\\$&');
}

function parseParameter(param) {
  const optional = param.startsWith('[') && param.endsWith(']');

  if (optional) {
    param = param.slice(1, -1);
  }

  const repeat = param.startsWith('...');

  if (repeat) {
    param = param.slice(3);
  }

  return {
    key: param,
    repeat,
    optional
  };
}

function getRouteRegex(normalizedRoute) {
  const segments = (normalizedRoute.replace(/\/$/, '') || '/').slice(1).split('/');
  const groups = {};
  let groupIndex = 1;
  const parameterizedRoute = segments.map(segment => {
    if (segment.startsWith('[') && segment.endsWith(']')) {
      const {
        key,
        optional,
        repeat
      } = parseParameter(segment.slice(1, -1));
      groups[key] = {
        pos: groupIndex++,
        repeat,
        optional
      };
      return repeat ? optional ? '(?:/(.+?))?' : '/(.+?)' : '/([^/]+?)';
    } else {
      return `/${escapeRegex(segment)}`;
    }
  }).join(''); // dead code eliminate for browser since it's only needed
  // while generating routes-manifest

  if (true) {
    let routeKeyCharCode = 97;
    let routeKeyCharLength = 1; // builds a minimal routeKey using only a-z and minimal number of characters

    const getSafeRouteKey = () => {
      let routeKey = '';

      for (let i = 0; i < routeKeyCharLength; i++) {
        routeKey += String.fromCharCode(routeKeyCharCode);
        routeKeyCharCode++;

        if (routeKeyCharCode > 122) {
          routeKeyCharLength++;
          routeKeyCharCode = 97;
        }
      }

      return routeKey;
    };

    const routeKeys = {};
    let namedParameterizedRoute = segments.map(segment => {
      if (segment.startsWith('[') && segment.endsWith(']')) {
        const {
          key,
          optional,
          repeat
        } = parseParameter(segment.slice(1, -1)); // replace any non-word characters since they can break
        // the named regex

        let cleanedKey = key.replace(/\W/g, '');
        let invalidKey = false; // check if the key is still invalid and fallback to using a known
        // safe key

        if (cleanedKey.length === 0 || cleanedKey.length > 30) {
          invalidKey = true;
        }

        if (!isNaN(parseInt(cleanedKey.substr(0, 1)))) {
          invalidKey = true;
        }

        if (invalidKey) {
          cleanedKey = getSafeRouteKey();
        }

        routeKeys[cleanedKey] = key;
        return repeat ? optional ? `(?:/(?<${cleanedKey}>.+?))?` : `/(?<${cleanedKey}>.+?)` : `/(?<${cleanedKey}>[^/]+?)`;
      } else {
        return `/${escapeRegex(segment)}`;
      }
    }).join('');
    return {
      re: new RegExp(`^${parameterizedRoute}(?:/)?$`),
      groups,
      routeKeys,
      namedRegex: `^${namedParameterizedRoute}(?:/)?$`
    };
  }

  return {
    re: new RegExp(`^${parameterizedRoute}(?:/)?$`),
    groups
  };
}

/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/utils.js":
/*!*********************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/utils.js ***!
  \*********************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.execOnce = execOnce;
exports.getLocationOrigin = getLocationOrigin;
exports.getURL = getURL;
exports.getDisplayName = getDisplayName;
exports.isResSent = isResSent;
exports.loadGetInitialProps = loadGetInitialProps;
exports.formatWithValidation = formatWithValidation;
exports.ST = exports.SP = exports.urlObjectKeys = void 0;

var _formatUrl = __webpack_require__(/*! ./router/utils/format-url */ "./node_modules/next/dist/next-server/lib/router/utils/format-url.js");
/**
* Utils
*/


function execOnce(fn) {
  let used = false;
  let result;
  return (...args) => {
    if (!used) {
      used = true;
      result = fn(...args);
    }

    return result;
  };
}

function getLocationOrigin() {
  const {
    protocol,
    hostname,
    port
  } = window.location;
  return `${protocol}//${hostname}${port ? ':' + port : ''}`;
}

function getURL() {
  const {
    href
  } = window.location;
  const origin = getLocationOrigin();
  return href.substring(origin.length);
}

function getDisplayName(Component) {
  return typeof Component === 'string' ? Component : Component.displayName || Component.name || 'Unknown';
}

function isResSent(res) {
  return res.finished || res.headersSent;
}

async function loadGetInitialProps(App, ctx) {
  if (true) {
    var _App$prototype;

    if ((_App$prototype = App.prototype) != null && _App$prototype.getInitialProps) {
      const message = `"${getDisplayName(App)}.getInitialProps()" is defined as an instance method - visit https://nextjs.org/docs/messages/get-initial-props-as-an-instance-method for more information.`;
      throw new Error(message);
    }
  } // when called from _app `ctx` is nested in `ctx`


  const res = ctx.res || ctx.ctx && ctx.ctx.res;

  if (!App.getInitialProps) {
    if (ctx.ctx && ctx.Component) {
      // @ts-ignore pageProps default
      return {
        pageProps: await loadGetInitialProps(ctx.Component, ctx.ctx)
      };
    }

    return {};
  }

  const props = await App.getInitialProps(ctx);

  if (res && isResSent(res)) {
    return props;
  }

  if (!props) {
    const message = `"${getDisplayName(App)}.getInitialProps()" should resolve to an object. But found "${props}" instead.`;
    throw new Error(message);
  }

  if (true) {
    if (Object.keys(props).length === 0 && !ctx.ctx) {
      console.warn(`${getDisplayName(App)} returned an empty object from \`getInitialProps\`. This de-optimizes and prevents automatic static optimization. https://nextjs.org/docs/messages/empty-object-getInitialProps`);
    }
  }

  return props;
}

const urlObjectKeys = ['auth', 'hash', 'host', 'hostname', 'href', 'path', 'pathname', 'port', 'protocol', 'query', 'search', 'slashes'];
exports.urlObjectKeys = urlObjectKeys;

function formatWithValidation(url) {
  if (true) {
    if (url !== null && typeof url === 'object') {
      Object.keys(url).forEach(key => {
        if (urlObjectKeys.indexOf(key) === -1) {
          console.warn(`Unknown key passed via urlObject into url.format: ${key}`);
        }
      });
    }
  }

  return (0, _formatUrl.formatUrl)(url);
}

const SP = typeof performance !== 'undefined';
exports.SP = SP;
const ST = SP && typeof performance.mark === 'function' && typeof performance.measure === 'function';
exports.ST = ST;

/***/ }),

/***/ "./pages/_app.js":
/*!***********************!*\
  !*** ./pages/_app.js ***!
  \***********************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "getServerSideProps": function() { return /* binding */ getServerSideProps; }
/* harmony export */ });
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _next_translate_root_i18n__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @next-translate-root/i18n */ "./i18n.json");
/* harmony import */ var next_translate_appWithI18n__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next-translate/appWithI18n */ "next-translate/appWithI18n");
/* harmony import */ var next_translate_appWithI18n__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_translate_appWithI18n__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _styles_globals_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./../styles/globals.css */ "./styles/globals.css");
/* harmony import */ var _styles_globals_css__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_styles_globals_css__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _styles_calendar_scss__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./../styles/calendar.scss */ "./styles/calendar.scss");
/* harmony import */ var _styles_calendar_scss__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_styles_calendar_scss__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var react_toastify_dist_ReactToastify_css__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react-toastify/dist/ReactToastify.css */ "./node_modules/react-toastify/dist/ReactToastify.css");
/* harmony import */ var react_toastify_dist_ReactToastify_css__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react_toastify_dist_ReactToastify_css__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! next/head */ "next/head");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _layouts_layout_wrapper__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./../layouts/layout-wrapper */ "./layouts/layout-wrapper.jsx");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! react-redux */ "react-redux");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _redux_store__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../redux/store */ "./redux/store.js");
/* harmony import */ var react_beautiful_dnd__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! react-beautiful-dnd */ "react-beautiful-dnd");
/* harmony import */ var react_beautiful_dnd__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(react_beautiful_dnd__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var _styles_static_empty_css__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./../styles/static-empty.css */ "./styles/static-empty.css");
/* harmony import */ var _styles_static_empty_css__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(_styles_static_empty_css__WEBPACK_IMPORTED_MODULE_11__);

var _jsxFileName = "C:\\Users\\user\\Desktop\\projects\\ait-projects\\foot-bet\\pages\\_app.js";

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }













const __Page_Next_Translate__ = function MyApp({
  Component,
  pageProps
}) {
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_redux__WEBPACK_IMPORTED_MODULE_8__.Provider, {
    store: _redux_store__WEBPACK_IMPORTED_MODULE_9__.default,
    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_head__WEBPACK_IMPORTED_MODULE_6___default()), {
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("title", {
        children: "FootBet"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 20,
        columnNumber: 9
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("meta", {
        name: "viewport",
        content: "initial-scale=1.0, width=device-width"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 21,
        columnNumber: 9
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("script", {
        type: "text/javascript",
        src: "//vk.com/js/api/openapi.js?152"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 22,
        columnNumber: 9
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 19,
      columnNumber: 7
    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_layouts_layout_wrapper__WEBPACK_IMPORTED_MODULE_7__.default, _objectSpread(_objectSpread({}, pageProps), {}, {
      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Component, _objectSpread({}, pageProps), void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 25,
        columnNumber: 9
      }, this)
    }), void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 24,
      columnNumber: 7
    }, this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 18,
    columnNumber: 5
  }, this);
};

async function getServerSideProps(context) {
  (0,react_beautiful_dnd__WEBPACK_IMPORTED_MODULE_10__.resetServerContext)();
  return {
    props: {} // will be passed to the page component as props

  };
}
/* harmony default export */ __webpack_exports__["default"] = (next_translate_appWithI18n__WEBPACK_IMPORTED_MODULE_2___default()(__Page_Next_Translate__, _objectSpread(_objectSpread({}, _next_translate_root_i18n__WEBPACK_IMPORTED_MODULE_1__), {}, {
  isLoader: true,
  skipInitialProps: true,
  loadLocaleFrom: (l, n) => __webpack_require__("./locales lazy recursive ^\\.\\/.*\\/.*$")(`./${l}/${n}`).then(m => m.default)
})));

/***/ }),

/***/ "./redux/features/matchSlice.js":
/*!**************************************!*\
  !*** ./redux/features/matchSlice.js ***!
  \**************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "matchSlice": function() { return /* binding */ matchSlice; },
/* harmony export */   "setMatchId": function() { return /* binding */ setMatchId; },
/* harmony export */   "getMatchId": function() { return /* binding */ getMatchId; }
/* harmony export */ });
/* harmony import */ var _reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @reduxjs/toolkit */ "@reduxjs/toolkit");
/* harmony import */ var _reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__);

const matchSlice = (0,_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__.createSlice)({
  name: "user",
  initialState: {
    matchId: null
  },
  reducers: {
    setMatchId: (state, action) => {
      state.matchId = action.payload;
    }
  }
});
const {
  setMatchId
} = matchSlice.actions;
const getMatchId = state => state.match.matchId;
/* harmony default export */ __webpack_exports__["default"] = (matchSlice.reducer);

/***/ }),

/***/ "./redux/features/userSlice.js":
/*!*************************************!*\
  !*** ./redux/features/userSlice.js ***!
  \*************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "userSlice": function() { return /* binding */ userSlice; },
/* harmony export */   "login": function() { return /* binding */ login; },
/* harmony export */   "logout": function() { return /* binding */ logout; },
/* harmony export */   "selectUser": function() { return /* binding */ selectUser; }
/* harmony export */ });
/* harmony import */ var _reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @reduxjs/toolkit */ "@reduxjs/toolkit");
/* harmony import */ var _reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__);

const userSlice = (0,_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__.createSlice)({
  name: "user",
  initialState: {
    user: null
  },
  reducers: {
    login: (state, action) => {
      state.user = action.payload;
    },
    logout: state => {
      state.user = null;
    }
  }
});
const {
  login,
  logout
} = userSlice.actions;
const selectUser = state => state.user.user;
/* harmony default export */ __webpack_exports__["default"] = (userSlice.reducer);

/***/ }),

/***/ "./redux/store.js":
/*!************************!*\
  !*** ./redux/store.js ***!
  \************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @reduxjs/toolkit */ "@reduxjs/toolkit");
/* harmony import */ var _reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _features_userSlice__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./features/userSlice */ "./redux/features/userSlice.js");
/* harmony import */ var _features_matchSlice__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./features/matchSlice */ "./redux/features/matchSlice.js");
// import { createStore } from 'redux'
// export const store = createStore(/*reducer function*/(state, action) => {
//     if (action.type === "login") {
//         return {
//             ...state,
//             currentUser: {
//                 name: action.payload.name
//             }
//         }
//     }
//     return state
// }, {
//     currentUser: {
//         name: 'Erik Muradyan'
//     }
// })



/* harmony default export */ __webpack_exports__["default"] = ((0,_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__.configureStore)({
  reducer: {
    user: _features_userSlice__WEBPACK_IMPORTED_MODULE_1__.default,
    match: _features_matchSlice__WEBPACK_IMPORTED_MODULE_2__.default
  }
}));

/***/ }),

/***/ "./src/user/user.js":
/*!**************************!*\
  !*** ./src/user/user.js ***!
  \**************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "user_data": function() { return /* binding */ user_data; }
/* harmony export */ });
/* harmony import */ var _public_images_common_userphoto_png__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../../../../public/images/common/userphoto.png */ "./public/images/common/userphoto.png");

const user_data = {
  photo: _public_images_common_userphoto_png__WEBPACK_IMPORTED_MODULE_0__.default.src,
  birthDate: '12.03.1978',
  telephone: '+495 -254-24-75',
  fullName: 'Александр Михаева',
  email: ' alex.mikhaeva.19@mail.ru'
};

/***/ }),

/***/ "./public/images/common/phone.png":
/*!****************************************!*\
  !*** ./public/images/common/phone.png ***!
  \****************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ({"src":"/_next/static/image/public/images/common/phone.302160191980cf3febb1ea4ef445194b.png","height":16,"width":16,"blurDataURL":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAICAYAAADED76LAAAA50lEQVR42mP4//8/w9f3H1g+v3sv/Of3b3EgX/Dvnz8C3z9/YQHJMXx5+x7EEAJibiAWubxupxaQFgViYZAiBiCD9+7+k6pLNKKm7m2e7LRCM756Q1BxHFBc7N/fv4IgBfzHJy0xnsvg8n9XZY/HkbbZ5quMkwuvb92nDjKZ4cfXrxIg45eYRM9bahY7d0/DJNd9zVMcQVb8/vVLnOHnt++CIDvf33sivdQ0Zt5cBtf/S7SipgLFeD6/fy8MsoL51/cfYiBFIMGTU5YaPT51SQnsyI+fwY4EKwKZBLWOH4j5vn34CPYmAGzlq1wESHWGAAAAAElFTkSuQmCC"});

/***/ }),

/***/ "./public/images/common/triangle.png":
/*!*******************************************!*\
  !*** ./public/images/common/triangle.png ***!
  \*******************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ({"src":"/_next/static/image/public/images/common/triangle.54ba395b147d6d1d132a896a0fcf5807.png","height":7,"width":10,"blurDataURL":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAGCAYAAAD+Bd/7AAAAhElEQVR42k3LsY0CQAxE0dFefAGiAUQhhFRATBGAhEQL9EAn9EBKSg0k2GMvP2Slp7HsHVXV2vYl7QN5MpiP5JnbStG9zO6Hu2fiJ+/V/a+oErZZFSyTnHhH5kbizTkHC+FmjqaNK3thiPbobmHB4cXH5ydiGRHCUNrCn0nsmPdFAUOSvsPqmwLEyLqSAAAAAElFTkSuQmCC"});

/***/ }),

/***/ "./public/images/common/userDefault.png":
/*!**********************************************!*\
  !*** ./public/images/common/userDefault.png ***!
  \**********************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ({"src":"/_next/static/image/public/images/common/userDefault.0814c24b239138a8175fadd2554278a0.png","height":35,"width":36,"blurDataURL":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAICAYAAADED76LAAAAr0lEQVR42jWMMQrCUBBE9xKCWHgEC8HCk2gaPVICSiCghVWittYmpdgk2mnhFQQlJBrdzQwkC+//YWYYMTNR1TH+DPxABc7whswYjkBhuPiYaBwnSg3vBQYsnGgURfkVEQPUn6aUsFBRA3PdhXrekrpdeUs7HwQrnU5m6jhz9f2ABd5T8BzyPOd0Cf6Emh5uz0IfK480vVgU7SwMt5ZlV87fkHVZID2wAfeGNeiYmdRQANET+GpmcAAAAABJRU5ErkJggg=="});

/***/ }),

/***/ "./public/images/common/userphoto.png":
/*!********************************************!*\
  !*** ./public/images/common/userphoto.png ***!
  \********************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ({"src":"/_next/static/image/public/images/common/userphoto.0847c5b7c13e4093107a1154a84d2352.png","height":426,"width":445,"blurDataURL":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAICAYAAADED76LAAAA6UlEQVR42iWMu0oDURRF97lz52EhYqoQ8BEs7K38Bitb8f8sBQs/QLAVA4GkUCxEZ8bMZMhoEif3cU64pNqbvRcLX9Wcq/aX19ZyPqv48eFemkXLLMLGe1aKiCCCKNI0eX1B+3yHtv4hAhB2FSJ0Fsj56QBJmiHN9gTYPcp5Hxy0XK1psdGkji9gVUxOABaBds6L94zPssF70WF4eY3JWwknMY76h1DeexjrQGxwdiD4m1cUicVs9IRVnUMbayhJU1FdQ4P/qfQ4RpGXtFkW8pHpAFiYroPe72E8aqj5nmJcJ7i6uUV/eIItlIqC+ZYXuQEAAAAASUVORK5CYII="});

/***/ }),

/***/ "./public/images/footer/leftBall.png":
/*!*******************************************!*\
  !*** ./public/images/footer/leftBall.png ***!
  \*******************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ({"src":"/_next/static/image/public/images/footer/leftBall.9d913458e610693dcce7d9b191755ef2.png","height":358,"width":452,"blurDataURL":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAGCAYAAAD+Bd/7AAAAY0lEQVR42mMgCNavW6f64f1HKZwKvnz5Ev/////4+/ceuAO57BgKfv38GQ5UEPby5avElNQ0OwwFgX5eEWtWr474+/df5OXL10N9w7MwTIloaW6KePf2fdSp0xeC6lomoSgAAAh6Lj9+IpgnAAAAAElFTkSuQmCC"});

/***/ }),

/***/ "./public/images/footer/masterCard.png":
/*!*********************************************!*\
  !*** ./public/images/footer/masterCard.png ***!
  \*********************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ({"src":"/_next/static/image/public/images/footer/masterCard.29493d522d0e854efc9f102ad8f0a87f.png","height":42,"width":69,"blurDataURL":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAFCAYAAAB4ka1VAAAAoElEQVR4nBWOPQrCQBgF50uMqKRRjCKYwlrsxJ9GuyAeQOy9mI2BeACPIIhgEdQT6AFMICAbdl2L96aYZkTDEEigZ1meiAtw1RqCB+q9FT1bpGT5iGeqWbUcoiYMfC3fm2O88V10nBiCjiL/VKi7CnKkrzzT6JaSvTzRy+hMvTanWoO29ZMMQh/RLsYU139DaBv2wNTuyMG+w8aKiynY/QDkXDVqE0ykJwAAAABJRU5ErkJggg=="});

/***/ }),

/***/ "./public/images/footer/paypal.png":
/*!*****************************************!*\
  !*** ./public/images/footer/paypal.png ***!
  \*****************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ({"src":"/_next/static/image/public/images/footer/paypal.e06692c269590789348e55d5b4bc6345.png","height":38,"width":149,"blurDataURL":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAACCAYAAABllJ3tAAAATElEQVR4nGNksGz9z6AtV8mw5+FxBnE2GYaT8/cwdC02ZRAWFmb49+8WI0PlrksM6qpJDAnT+RnMRbQZHn3hYkhyeMOgpvqP4dcveQDYDBatLvCPwwAAAABJRU5ErkJggg=="});

/***/ }),

/***/ "./public/images/footer/visa.png":
/*!***************************************!*\
  !*** ./public/images/footer/visa.png ***!
  \***************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ({"src":"/_next/static/image/public/images/footer/visa.56e9f851457af83605186a394484e11d.png","height":31,"width":104,"blurDataURL":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAACCAYAAABllJ3tAAAARUlEQVR4nGM82J0d/uCTiH38RdW/Mly/fz35xyDOwMCwH4jVgFiVkYHhCRtD6J69Ysz/V7z6xyjCwPD/L1BCH4j/ADEPADD6FU4jYQWmAAAAAElFTkSuQmCC"});

/***/ }),

/***/ "./public/images/header/SocialMedia/closeVector.png":
/*!**********************************************************!*\
  !*** ./public/images/header/SocialMedia/closeVector.png ***!
  \**********************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ({"src":"/_next/static/image/public/images/header/SocialMedia/closeVector.d1faada7c5dce7c8f1fbd1ffde6c99d9.png","height":13,"width":13,"blurDataURL":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAICAQAAABuBnYAAAAAQUlEQVR42mWNwQ0AIQzD0v0HOYkBykqwhI/kiVA+rqs2YtEUcsq0xORnEDFMMz7wOVmUcDJEhl/xnvT1tMW+avcBZRFfWZXKot0AAAAASUVORK5CYII="});

/***/ }),

/***/ "./public/images/header/SocialMedia/email.svg":
/*!****************************************************!*\
  !*** ./public/images/header/SocialMedia/email.svg ***!
  \****************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ({"src":"/_next/static/image/public/images/header/SocialMedia/email.2986d0c4bb65fe3a1f58b6c9bbe1597a.svg","height":20,"width":25});

/***/ }),

/***/ "./public/images/header/SocialMedia/facebook.svg":
/*!*******************************************************!*\
  !*** ./public/images/header/SocialMedia/facebook.svg ***!
  \*******************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ({"src":"/_next/static/image/public/images/header/SocialMedia/facebook.85f524e32ad377e7424a5d8712a6664a.svg","height":34,"width":28});

/***/ }),

/***/ "./public/images/header/SocialMedia/instagram.svg":
/*!********************************************************!*\
  !*** ./public/images/header/SocialMedia/instagram.svg ***!
  \********************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ({"src":"/_next/static/image/public/images/header/SocialMedia/instagram.f5ffd20055aeb8be2e2a6a66e757274e.svg","height":30,"width":31});

/***/ }),

/***/ "./public/images/header/SocialMedia/phone.svg":
/*!****************************************************!*\
  !*** ./public/images/header/SocialMedia/phone.svg ***!
  \****************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ({"src":"/_next/static/image/public/images/header/SocialMedia/phone.55ee8819e254093aa33fdb4782b35cd4.svg","height":25,"width":24});

/***/ }),

/***/ "./public/images/header/SocialMedia/telegram.svg":
/*!*******************************************************!*\
  !*** ./public/images/header/SocialMedia/telegram.svg ***!
  \*******************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ({"src":"/_next/static/image/public/images/header/SocialMedia/telegram.aff9e3d95d74ff6112927acf1640e6a3.svg","height":37,"width":29});

/***/ }),

/***/ "./public/images/header/SocialMedia/viber.svg":
/*!****************************************************!*\
  !*** ./public/images/header/SocialMedia/viber.svg ***!
  \****************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ({"src":"/_next/static/image/public/images/header/SocialMedia/viber.92d118c26760f796dc3278147251dffe.svg","height":39,"width":30});

/***/ }),

/***/ "./public/images/header/SocialMedia/watsup.svg":
/*!*****************************************************!*\
  !*** ./public/images/header/SocialMedia/watsup.svg ***!
  \*****************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ({"src":"/_next/static/image/public/images/header/SocialMedia/watsup.e5c1d0468ecb4c80731a67e461e19253.svg","height":37,"width":29});

/***/ }),

/***/ "./public/images/header/dropdown_lines.png":
/*!*************************************************!*\
  !*** ./public/images/header/dropdown_lines.png ***!
  \*************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ({"src":"/_next/static/image/public/images/header/dropdown_lines.3026094b1449e1420839b89cea855e19.png","height":17,"width":27,"blurDataURL":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAFCAQAAADSmGXeAAAAO0lEQVR42l3GsQmAMBAAwC9sdCBB5xPUwmBio8sewpfhmguXpqbbawmdUDxaqj5rGE1Sbgib05F2xfwDyUs0V/V0c6UAAAAASUVORK5CYII="});

/***/ }),

/***/ "./public/images/header/flags/arm.svg":
/*!********************************************!*\
  !*** ./public/images/header/flags/arm.svg ***!
  \********************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ({"src":"/_next/static/image/public/images/header/flags/arm.94fdfa9a621438c57153ac07b079c412.svg","height":21,"width":21});

/***/ }),

/***/ "./public/images/header/flags/deu.svg":
/*!********************************************!*\
  !*** ./public/images/header/flags/deu.svg ***!
  \********************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ({"src":"/_next/static/image/public/images/header/flags/deu.db91936c209d8e0d41810eac31428b8d.svg","height":21,"width":21});

/***/ }),

/***/ "./public/images/header/flags/en.svg":
/*!*******************************************!*\
  !*** ./public/images/header/flags/en.svg ***!
  \*******************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ({"src":"/_next/static/image/public/images/header/flags/en.1c85630df414717081ea8657eeca7e2c.svg","height":21,"width":21});

/***/ }),

/***/ "./public/images/header/flags/esp.svg":
/*!********************************************!*\
  !*** ./public/images/header/flags/esp.svg ***!
  \********************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ({"src":"/_next/static/image/public/images/header/flags/esp.43788d57514706de9ea42c424cb8792f.svg","height":21,"width":21});

/***/ }),

/***/ "./public/images/header/flags/frc.svg":
/*!********************************************!*\
  !*** ./public/images/header/flags/frc.svg ***!
  \********************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ({"src":"/_next/static/image/public/images/header/flags/frc.c32b391317fb03718355dd8a684f5541.svg","height":21,"width":21});

/***/ }),

/***/ "./public/images/header/flags/rus.png":
/*!********************************************!*\
  !*** ./public/images/header/flags/rus.png ***!
  \********************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ({"src":"/_next/static/image/public/images/header/flags/rus.6eb4cb14c6727094ffbdc706f51360a0.png","height":22,"width":21,"blurDataURL":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAICAYAAADED76LAAAAuUlEQVR42k3JTwqCUBgE8LlMZekq1xXUnSLCAo9RgfuwjUEUKG48gJD0xxtoO5HQh/Je3wcuGvjBMANOWVZG07RR27YVEdT9ovhq4CilDJITjuxwMqLB9e7hxX8p7/oQ59tTMu680RcAcASwk8BBAXtJuBPenBqYHmssThJz95/ijT6BpWkH9nitLHMjtmNLMu68rUw7xKePYTpE9h5BpSNI1vU878MAJ9ZnWqIP/ETvCVJTj2Jjwid+tCCScAJCN9gAAAAASUVORK5CYII="});

/***/ }),

/***/ "./public/images/header/footballer.svg":
/*!*********************************************!*\
  !*** ./public/images/header/footballer.svg ***!
  \*********************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ({"src":"/_next/static/image/public/images/header/footballer.7505db6ff2334082e65f57b15504691c.svg","height":600,"width":662});

/***/ }),

/***/ "./public/images/header/login.png":
/*!****************************************!*\
  !*** ./public/images/header/login.png ***!
  \****************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ({"src":"/_next/static/image/public/images/header/login.2b90f4f21c830dc3851cb3fc3f1618b3.png","height":21,"width":19,"blurDataURL":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAcAAAAICAQAAACfDS2NAAAAZ0lEQVR42jXNKwoCARhF4esDETfgDmwGmzYXYLEpGhTGZDUJFpPZBZjNLsJlfQx/GG463AMneuLm7ufvE7WFgavYFWytjFzEuXDoa+koToUbB2NN9040ZkreR1+svT1NvSIqVbGHeQtEukRdrLnb8QAAAABJRU5ErkJggg=="});

/***/ }),

/***/ "./public/images/header/login/facebook.svg":
/*!*************************************************!*\
  !*** ./public/images/header/login/facebook.svg ***!
  \*************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ({"src":"/_next/static/image/public/images/header/login/facebook.50193220c705167c0e8524982908a4ee.svg","height":76,"width":76});

/***/ }),

/***/ "./public/images/header/login/gmail.svg":
/*!**********************************************!*\
  !*** ./public/images/header/login/gmail.svg ***!
  \**********************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ({"src":"/_next/static/image/public/images/header/login/gmail.b78b335d7b71ec5b3b9033065412a0f8.svg","height":76,"width":76});

/***/ }),

/***/ "./public/images/header/login/success.png":
/*!************************************************!*\
  !*** ./public/images/header/login/success.png ***!
  \************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ({"src":"/_next/static/image/public/images/header/login/success.b2f639f6971931b9d4939c59119e7859.png","height":132,"width":141,"blurDataURL":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAHCAYAAAA1WQxeAAAA8klEQVR4nAHnABj/ARm+LgAJAQY+7v/2jgUAAi/r/tT+Ygtq1X0YdeHkIdxYARa+LUrq/uS1BgEUABoBDf/g/c4BqRitAPfj9QBg8F5TAQC9HuFHCDUe1fvf++T6zgVpEHH/XQBX/WXhcATVFt7gAQC6AP+iD6b9BAgEA1rqVv+6Gb0A1NvUAXILb/4fBDECAQC/GuA37ygfiReA+/IV9AQH5wQAR+xk/A4TCwUA/QDgATK/P0fO/8G2WvJhAnIUawCk6KgAkBGMABsBL/7t//hJASnCNwAE/wQ60/vNjTLnNzDTE+cACQoD0Pf8/XMCAQHGNDBlOPg+WCUAAAAASUVORK5CYII="});

/***/ }),

/***/ "./public/images/header/login/twitter.svg":
/*!************************************************!*\
  !*** ./public/images/header/login/twitter.svg ***!
  \************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ({"src":"/_next/static/image/public/images/header/login/twitter.372f6f68ac46a0b5a2cbf106f608e4c2.svg","height":76,"width":76});

/***/ }),

/***/ "./public/images/header/login/vk.svg":
/*!*******************************************!*\
  !*** ./public/images/header/login/vk.svg ***!
  \*******************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ({"src":"/_next/static/image/public/images/header/login/vk.f9a321d3db5de3a706483d7309582330.svg","height":76,"width":76});

/***/ }),

/***/ "./public/images/header/logo.svg":
/*!***************************************!*\
  !*** ./public/images/header/logo.svg ***!
  \***************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ({"src":"/_next/static/image/public/images/header/logo.6cdf91faf3ca12a076c5f9628145fc04.svg","height":221,"width":221});

/***/ }),

/***/ "./public/images/header/register.png":
/*!*******************************************!*\
  !*** ./public/images/header/register.png ***!
  \*******************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ({"src":"/_next/static/image/public/images/header/register.47403b998ce2c53617bfb46dbf914bda.png","height":23,"width":23,"blurDataURL":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAICAQAAABuBnYAAAAAbUlEQVR42g3EQQvBABiA4U8iJ2eXHbSTbIoaKQdprSwns6w4OPgBDu7++ZP19L4hpF4qE6EXOj+Ft6+lMAhnGw83mVIYhtpBayd1lIhw6TUWfbnaNpyMjZQyH7k2PO0VGmuVlXuYSsz6X1U68z9hvUzPNC77RgAAAABJRU5ErkJggg=="});

/***/ }),

/***/ "./public/images/personal/ball.png":
/*!*****************************************!*\
  !*** ./public/images/personal/ball.png ***!
  \*****************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ({"src":"/_next/static/image/public/images/personal/ball.7a4217860e3b0be644a2c0534df6e64d.png","height":882,"width":950,"blurDataURL":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAHCAYAAAA1WQxeAAAAkElEQVR42mPABlavWMYEpFiSEpOYMSTfvX7K9vnzJ66bN29yPX/+ggtFsjg3j/XD68fc////54RhFAWzZ0zl+PT2JdfxY4c4U1OTuBYsmI+q4OC+XRwvnj7kWr1yOUiCq7ysFFXB5In9LFs3reM6e+o4597duzjPnz3Hhe5GxgB/P/aJ/b1ca1ev5Fy2dBknAFcnP3eusvtcAAAAAElFTkSuQmCC"});

/***/ }),

/***/ "./components/Footer/Ball/Ball.module.scss":
/*!*************************************************!*\
  !*** ./components/Footer/Ball/Ball.module.scss ***!
  \*************************************************/
/***/ (function(module) {

// Exports
module.exports = {
	"container": "Ball_container__2Wl1d",
	"ball": "Ball_ball__1SKlM",
	"text_with_ball": "Ball_text_with_ball__7lpHU",
	"top": "Ball_top__QN56G",
	"bottom": "Ball_bottom__2k4q4"
};


/***/ }),

/***/ "./components/Footer/Footer.module.scss":
/*!**********************************************!*\
  !*** ./components/Footer/Footer.module.scss ***!
  \**********************************************/
/***/ (function(module) {

// Exports
module.exports = {
	"container": "Footer_container__l2D4g",
	"content": "Footer_content__1bpu6",
	"ball": "Footer_ball__2Sl3n"
};


/***/ }),

/***/ "./components/Footer/Navigation/List/List.module.scss":
/*!************************************************************!*\
  !*** ./components/Footer/Navigation/List/List.module.scss ***!
  \************************************************************/
/***/ (function(module) {

// Exports
module.exports = {
	"container": "List_container__1TpnV",
	"borders": "List_borders__1Rmzb"
};


/***/ }),

/***/ "./components/Footer/Navigation/Navigation.module.scss":
/*!*************************************************************!*\
  !*** ./components/Footer/Navigation/Navigation.module.scss ***!
  \*************************************************************/
/***/ (function(module) {

// Exports
module.exports = {
	"container": "Navigation_container__1s3nG",
	"content": "Navigation_content__3NM4A"
};


/***/ }),

/***/ "./components/Footer/SocialMedia/PSIcons/PS.module.scss":
/*!**************************************************************!*\
  !*** ./components/Footer/SocialMedia/PSIcons/PS.module.scss ***!
  \**************************************************************/
/***/ (function(module) {

// Exports
module.exports = {
	"container": "PS_container__s4l13",
	"icons": "PS_icons___xHba"
};


/***/ }),

/***/ "./components/Footer/SocialMedia/SMIcons/SM.module.scss":
/*!**************************************************************!*\
  !*** ./components/Footer/SocialMedia/SMIcons/SM.module.scss ***!
  \**************************************************************/
/***/ (function(module) {

// Exports
module.exports = {
	"container": "SM_container__2LvDs"
};


/***/ }),

/***/ "./components/Footer/SocialMedia/SocialMedia.module.scss":
/*!***************************************************************!*\
  !*** ./components/Footer/SocialMedia/SocialMedia.module.scss ***!
  \***************************************************************/
/***/ (function(module) {

// Exports
module.exports = {
	"container": "SocialMedia_container__1Tidh",
	"content": "SocialMedia_content__1K6tl",
	"controler": "SocialMedia_controler__khSUQ",
	"social_medias": "SocialMedia_social_medias__UEuCs",
	"payment_systems": "SocialMedia_payment_systems__1WSF5"
};


/***/ }),

/***/ "./components/Footer/SocialMedia/common/Icon/Icon.module.scss":
/*!********************************************************************!*\
  !*** ./components/Footer/SocialMedia/common/Icon/Icon.module.scss ***!
  \********************************************************************/
/***/ (function(module) {

// Exports
module.exports = {
	"container": "Icon_container__2XLct",
	"last_element": "Icon_last_element__1Lh8S"
};


/***/ }),

/***/ "./components/Header/Bar/Bar.module.scss":
/*!***********************************************!*\
  !*** ./components/Header/Bar/Bar.module.scss ***!
  \***********************************************/
/***/ (function(module) {

// Exports
module.exports = {
	"bar_container": "Bar_bar_container__37nD9"
};


/***/ }),

/***/ "./components/Header/Bar/BarItems/BarItems.module.scss":
/*!*************************************************************!*\
  !*** ./components/Header/Bar/BarItems/BarItems.module.scss ***!
  \*************************************************************/
/***/ (function(module) {

// Exports
module.exports = {
	"bar_item_container": "BarItems_bar_item_container__1bnOe",
	"auth_container": "BarItems_auth_container__2_5S5",
	"auth_buttons": "BarItems_auth_buttons__2ShpU",
	"sign_up_button": "BarItems_sign_up_button__3_2M5",
	"sign_in_button": "BarItems_sign_in_button__3X-6_",
	"lang_button": "BarItems_lang_button__8jm_g",
	"lang_button_content": "BarItems_lang_button_content__3uy6n",
	"for_mobile": "BarItems_for_mobile__1vOCi"
};


/***/ }),

/***/ "./components/Header/Bar/BarItems/LanguageDrop/LanguageDrop.module.scss":
/*!******************************************************************************!*\
  !*** ./components/Header/Bar/BarItems/LanguageDrop/LanguageDrop.module.scss ***!
  \******************************************************************************/
/***/ (function(module) {

// Exports
module.exports = {
	"container": "LanguageDrop_container__26YUM",
	"transition": "LanguageDrop_transition__30cP-",
	"content": "LanguageDrop_content__2V6nF",
	"row": "LanguageDrop_row__16F6_"
};


/***/ }),

/***/ "./components/Header/Bar/BarItems/Logged/Logged.module.scss":
/*!******************************************************************!*\
  !*** ./components/Header/Bar/BarItems/Logged/Logged.module.scss ***!
  \******************************************************************/
/***/ (function(module) {

// Exports
module.exports = {
	"container": "Logged_container__xlePM",
	"content": "Logged_content__3cE3O"
};


/***/ }),

/***/ "./components/Header/Bar/BarItems/Logged/LoggedDrop/LoggedDrop.module.scss":
/*!*********************************************************************************!*\
  !*** ./components/Header/Bar/BarItems/Logged/LoggedDrop/LoggedDrop.module.scss ***!
  \*********************************************************************************/
/***/ (function(module) {

// Exports
module.exports = {
	"container": "LoggedDrop_container__2Q6LP",
	"transition": "LoggedDrop_transition__Qg48i",
	"content": "LoggedDrop_content__EDtbq",
	"user_photo_name": "LoggedDrop_user_photo_name__19gia",
	"user_tel": "LoggedDrop_user_tel__13CAF",
	"logOut": "LoggedDrop_logOut__3eD-y"
};


/***/ }),

/***/ "./components/Header/Bar/BarItems/Logged/LoggedWallper/LoggedWallper.module.scss":
/*!***************************************************************************************!*\
  !*** ./components/Header/Bar/BarItems/Logged/LoggedWallper/LoggedWallper.module.scss ***!
  \***************************************************************************************/
/***/ (function(module) {

// Exports
module.exports = {
	"container": "LoggedWallper_container__2oRMV",
	"content": "LoggedWallper_content__2M1qT",
	"user_photo": "LoggedWallper_user_photo__1mszp",
	"user_fullName": "LoggedWallper_user_fullName__2WvpF",
	"fullname": "LoggedWallper_fullname__1Gj25"
};


/***/ }),

/***/ "./components/Header/Bar/DropdownMenu/Dropdown.module.scss":
/*!*****************************************************************!*\
  !*** ./components/Header/Bar/DropdownMenu/Dropdown.module.scss ***!
  \*****************************************************************/
/***/ (function(module) {

// Exports
module.exports = {
	"dropdown": "Dropdown_dropdown__3ABcq",
	"transition": "Dropdown_transition__1fzbO",
	"dropdown_menu": "Dropdown_dropdown_menu__1UmY7",
	"dropdown_list": "Dropdown_dropdown_list__2bG2Y",
	"dropdown_list_items": "Dropdown_dropdown_list_items__2v_vW",
	"dropdown_check": "Dropdown_dropdown_check__30wOn"
};


/***/ }),

/***/ "./components/Header/Bar/Login/Login.module.scss":
/*!*******************************************************!*\
  !*** ./components/Header/Bar/Login/Login.module.scss ***!
  \*******************************************************/
/***/ (function(module) {

// Exports
module.exports = {
	"m_container": "Login_m_container__2NKPV",
	"m_content": "Login_m_content__1k8c6",
	"login_container": "Login_login_container__j_L-T"
};


/***/ }),

/***/ "./components/Header/Bar/Login/LoginForm/LoginForm.module.scss":
/*!*********************************************************************!*\
  !*** ./components/Header/Bar/Login/LoginForm/LoginForm.module.scss ***!
  \*********************************************************************/
/***/ (function(module) {

// Exports
module.exports = {
	"container": "LoginForm_container__GaiFv",
	"title": "LoginForm_title__3fmjT",
	"inputs": "LoginForm_inputs__3C14x",
	"reset_password": "LoginForm_reset_password__Dp2_F",
	"submit": "LoginForm_submit__3fH8I",
	"to_register_container": "LoginForm_to_register_container__3zZqp",
	"to_register_content": "LoginForm_to_register_content__1CFxa",
	"to_register_text": "LoginForm_to_register_text__1p097"
};


/***/ }),

/***/ "./components/Header/Bar/Login/ResetPassword/ForgotPassword/ForgotPassword.module.scss":
/*!*********************************************************************************************!*\
  !*** ./components/Header/Bar/Login/ResetPassword/ForgotPassword/ForgotPassword.module.scss ***!
  \*********************************************************************************************/
/***/ (function(module) {

// Exports
module.exports = {
	"m_container": "ForgotPassword_m_container__2BDSe",
	"m_content": "ForgotPassword_m_content__2kH-4",
	"container": "ForgotPassword_container__2jNtG",
	"title": "ForgotPassword_title__1Ih8W",
	"inputs": "ForgotPassword_inputs__19lVt",
	"submit": "ForgotPassword_submit__qzpyr"
};


/***/ }),

/***/ "./components/Header/Bar/Login/ResetPassword/GetEmailCode/GetEmailCode.module.scss":
/*!*****************************************************************************************!*\
  !*** ./components/Header/Bar/Login/ResetPassword/GetEmailCode/GetEmailCode.module.scss ***!
  \*****************************************************************************************/
/***/ (function(module) {

// Exports
module.exports = {
	"m_container": "GetEmailCode_m_container___qFF-",
	"m_content": "GetEmailCode_m_content__rdAd9",
	"container": "GetEmailCode_container__3tsHd",
	"title": "GetEmailCode_title__2ZWF_",
	"description": "GetEmailCode_description__3ye8R",
	"inputs": "GetEmailCode_inputs__2s369",
	"error_input": "GetEmailCode_error_input__Rt_1d",
	"success_input": "GetEmailCode_success_input__2ppTq",
	"submit": "GetEmailCode_submit__2GRQI"
};


/***/ }),

/***/ "./components/Header/Bar/Login/ResetPassword/NewPassword/NewPassword.module.scss":
/*!***************************************************************************************!*\
  !*** ./components/Header/Bar/Login/ResetPassword/NewPassword/NewPassword.module.scss ***!
  \***************************************************************************************/
/***/ (function(module) {

// Exports
module.exports = {
	"m_container": "NewPassword_m_container__1IWHT",
	"m_content": "NewPassword_m_content__2MBjy",
	"container": "NewPassword_container__3syQj",
	"title": "NewPassword_title__1qVZn",
	"inputs": "NewPassword_inputs__3Vz0k",
	"submit": "NewPassword_submit__3kX0O"
};


/***/ }),

/***/ "./components/Header/Bar/Login/ResetPassword/Success/Success.module.scss":
/*!*******************************************************************************!*\
  !*** ./components/Header/Bar/Login/ResetPassword/Success/Success.module.scss ***!
  \*******************************************************************************/
/***/ (function(module) {

// Exports
module.exports = {
	"m_container": "Success_m_container__3RLSl",
	"m_content": "Success_m_content__znakk",
	"container": "Success_container__kgppk",
	"title": "Success_title__3PGVP",
	"icon_container": "Success_icon_container__3wPBV"
};


/***/ }),

/***/ "./components/Header/Bar/Login/SocialMediaIcons/SocialMediaIcons.module.scss":
/*!***********************************************************************************!*\
  !*** ./components/Header/Bar/Login/SocialMediaIcons/SocialMediaIcons.module.scss ***!
  \***********************************************************************************/
/***/ (function(module) {

// Exports
module.exports = {
	"conteiner": "SocialMediaIcons_conteiner__22yL_",
	"content": "SocialMediaIcons_content__P_-6G",
	"iconContent": "SocialMediaIcons_iconContent__2f0KL",
	"iconBody": "SocialMediaIcons_iconBody__LWlLD",
	"icon": "SocialMediaIcons_icon__1LUni"
};


/***/ }),

/***/ "./components/Header/Bar/Logo/Logo.module.scss":
/*!*****************************************************!*\
  !*** ./components/Header/Bar/Logo/Logo.module.scss ***!
  \*****************************************************/
/***/ (function(module) {

// Exports
module.exports = {
	"logo_conatiner": "Logo_logo_conatiner__1buMu"
};


/***/ }),

/***/ "./components/Header/Header.module.scss":
/*!**********************************************!*\
  !*** ./components/Header/Header.module.scss ***!
  \**********************************************/
/***/ (function(module) {

// Exports
module.exports = {
	"header_container_big": "Header_header_container_big__1BhyV",
	"transition": "Header_transition__2hRYo",
	"bar": "Header_bar__C_gX3",
	"bar_controler": "Header_bar_controler__3Rg_i",
	"bar_conteiner": "Header_bar_conteiner__jg900",
	"bar_content": "Header_bar_content__1N0yC",
	"bar_items_cont": "Header_bar_items_cont__1Scwz",
	"bar_items": "Header_bar_items__GvsVw",
	"footballer": "Header_footballer__3SIN6",
	"header_container_small": "Header_header_container_small__379Vk"
};


/***/ }),

/***/ "./components/Header/NavBar/Button/Button.module.scss":
/*!************************************************************!*\
  !*** ./components/Header/NavBar/Button/Button.module.scss ***!
  \************************************************************/
/***/ (function(module) {

// Exports
module.exports = {
	"container": "Button_container__11zsX",
	"content": "Button_content__viCSW",
	"active": "Button_active__2qGMW"
};


/***/ }),

/***/ "./components/Header/NavBar/NavBar.module.scss":
/*!*****************************************************!*\
  !*** ./components/Header/NavBar/NavBar.module.scss ***!
  \*****************************************************/
/***/ (function(module) {

// Exports
module.exports = {
	"container": "NavBar_container__1qJ7Y",
	"content": "NavBar_content__1GQJd",
	"top_on_tablet": "NavBar_top_on_tablet__3EH39",
	"bottom_on_tablet": "NavBar_bottom_on_tablet__eyz9I",
	"tablet": "NavBar_tablet__3LPMm"
};


/***/ }),

/***/ "./components/Header/SocialMedia/Icon/Icon.module.scss":
/*!*************************************************************!*\
  !*** ./components/Header/SocialMedia/Icon/Icon.module.scss ***!
  \*************************************************************/
/***/ (function(module) {

// Exports
module.exports = {
	"container": "Icon_container__34Nf9"
};


/***/ }),

/***/ "./components/Header/SocialMedia/Modals/SocialMediaModal.module.scss":
/*!***************************************************************************!*\
  !*** ./components/Header/SocialMedia/Modals/SocialMediaModal.module.scss ***!
  \***************************************************************************/
/***/ (function(module) {

// Exports
module.exports = {
	"container": "SocialMediaModal_container__3fsXk",
	"content": "SocialMediaModal_content__17FKE"
};


/***/ }),

/***/ "./components/Header/SocialMedia/SocialMedia.module.scss":
/*!***************************************************************!*\
  !*** ./components/Header/SocialMedia/SocialMedia.module.scss ***!
  \***************************************************************/
/***/ (function(module) {

// Exports
module.exports = {
	"container": "SocialMedia_container__1-yYo"
};


/***/ }),

/***/ "./components/Pages/Contacts/Contacts.module.scss":
/*!********************************************************!*\
  !*** ./components/Pages/Contacts/Contacts.module.scss ***!
  \********************************************************/
/***/ (function(module) {

// Exports
module.exports = {
	"container": "Contacts_container__2it0V",
	"content": "Contacts_content__2fdrk",
	"modal_content": "Contacts_modal_content__2Ve_v",
	"content_container": "Contacts_content_container__20coA",
	"top": "Contacts_top__2gTzS",
	"rows": "Contacts_rows__3ZhET",
	"row": "Contacts_row__AiZKj",
	"img": "Contacts_img__dvX-a",
	"text": "Contacts_text__2D9qc",
	"open": "Contacts_open__3CHJ_",
	"rightLeft": "Contacts_rightLeft__2rlb8",
	"close": "Contacts_close__Vi7g7"
};


/***/ }),

/***/ "./components/common/auth/InputContainer/InputContainer.module.scss":
/*!**************************************************************************!*\
  !*** ./components/common/auth/InputContainer/InputContainer.module.scss ***!
  \**************************************************************************/
/***/ (function(module) {

// Exports
module.exports = {
	"container": "InputContainer_container__1KzvS",
	"label_content": "InputContainer_label_content__2_yAQ",
	"input_container": "InputContainer_input_container__1bTRJ",
	"input_success_content": "InputContainer_input_success_content__1yOZD",
	"input_error_content": "InputContainer_input_error_content__3-W2W"
};


/***/ }),

/***/ "./components/common/auth/Modal/Modal.module.scss":
/*!********************************************************!*\
  !*** ./components/common/auth/Modal/Modal.module.scss ***!
  \********************************************************/
/***/ (function(module) {

// Exports
module.exports = {
	"modalConteiner": "Modal_modalConteiner__3g8If",
	"transition": "Modal_transition__1kfv9",
	"modalContent": "Modal_modalContent__1-O47"
};


/***/ }),

/***/ "./node_modules/react-toastify/dist/ReactToastify.css":
/*!************************************************************!*\
  !*** ./node_modules/react-toastify/dist/ReactToastify.css ***!
  \************************************************************/
/***/ (function() {



/***/ }),

/***/ "./styles/calendar.scss":
/*!******************************!*\
  !*** ./styles/calendar.scss ***!
  \******************************/
/***/ (function() {



/***/ }),

/***/ "./styles/globals.css":
/*!****************************!*\
  !*** ./styles/globals.css ***!
  \****************************/
/***/ (function() {



/***/ }),

/***/ "./styles/static-empty.css":
/*!*********************************!*\
  !*** ./styles/static-empty.css ***!
  \*********************************/
/***/ (function() {



/***/ }),

/***/ "@hookform/resolvers/yup":
/*!******************************************!*\
  !*** external "@hookform/resolvers/yup" ***!
  \******************************************/
/***/ (function(module) {

"use strict";
module.exports = require("@hookform/resolvers/yup");;

/***/ }),

/***/ "@reduxjs/toolkit":
/*!***********************************!*\
  !*** external "@reduxjs/toolkit" ***!
  \***********************************/
/***/ (function(module) {

"use strict";
module.exports = require("@reduxjs/toolkit");;

/***/ }),

/***/ "axios":
/*!************************!*\
  !*** external "axios" ***!
  \************************/
/***/ (function(module) {

"use strict";
module.exports = require("axios");;

/***/ }),

/***/ "next-translate/appWithI18n":
/*!*********************************************!*\
  !*** external "next-translate/appWithI18n" ***!
  \*********************************************/
/***/ (function(module) {

"use strict";
module.exports = require("next-translate/appWithI18n");;

/***/ }),

/***/ "next-translate/useTranslation":
/*!************************************************!*\
  !*** external "next-translate/useTranslation" ***!
  \************************************************/
/***/ (function(module) {

"use strict";
module.exports = require("next-translate/useTranslation");;

/***/ }),

/***/ "../next-server/lib/router-context":
/*!**************************************************************!*\
  !*** external "next/dist/next-server/lib/router-context.js" ***!
  \**************************************************************/
/***/ (function(module) {

"use strict";
module.exports = require("next/dist/next-server/lib/router-context.js");;

/***/ }),

/***/ "../next-server/lib/router/utils/get-asset-path-from-route":
/*!**************************************************************************************!*\
  !*** external "next/dist/next-server/lib/router/utils/get-asset-path-from-route.js" ***!
  \**************************************************************************************/
/***/ (function(module) {

"use strict";
module.exports = require("next/dist/next-server/lib/router/utils/get-asset-path-from-route.js");;

/***/ }),

/***/ "next/head":
/*!****************************!*\
  !*** external "next/head" ***!
  \****************************/
/***/ (function(module) {

"use strict";
module.exports = require("next/head");;

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/***/ (function(module) {

"use strict";
module.exports = require("react");;

/***/ }),

/***/ "react-beautiful-dnd":
/*!**************************************!*\
  !*** external "react-beautiful-dnd" ***!
  \**************************************/
/***/ (function(module) {

"use strict";
module.exports = require("react-beautiful-dnd");;

/***/ }),

/***/ "react-dom":
/*!****************************!*\
  !*** external "react-dom" ***!
  \****************************/
/***/ (function(module) {

"use strict";
module.exports = require("react-dom");;

/***/ }),

/***/ "react-facebook-login":
/*!***************************************!*\
  !*** external "react-facebook-login" ***!
  \***************************************/
/***/ (function(module) {

"use strict";
module.exports = require("react-facebook-login");;

/***/ }),

/***/ "react-google-login":
/*!*************************************!*\
  !*** external "react-google-login" ***!
  \*************************************/
/***/ (function(module) {

"use strict";
module.exports = require("react-google-login");;

/***/ }),

/***/ "react-hook-form":
/*!**********************************!*\
  !*** external "react-hook-form" ***!
  \**********************************/
/***/ (function(module) {

"use strict";
module.exports = require("react-hook-form");;

/***/ }),

/***/ "react-is":
/*!***************************!*\
  !*** external "react-is" ***!
  \***************************/
/***/ (function(module) {

"use strict";
module.exports = require("react-is");;

/***/ }),

/***/ "react-redux":
/*!******************************!*\
  !*** external "react-redux" ***!
  \******************************/
/***/ (function(module) {

"use strict";
module.exports = require("react-redux");;

/***/ }),

/***/ "react-toastify":
/*!*********************************!*\
  !*** external "react-toastify" ***!
  \*********************************/
/***/ (function(module) {

"use strict";
module.exports = require("react-toastify");;

/***/ }),

/***/ "react-twitter-login":
/*!**************************************!*\
  !*** external "react-twitter-login" ***!
  \**************************************/
/***/ (function(module) {

"use strict";
module.exports = require("react-twitter-login");;

/***/ }),

/***/ "react/jsx-dev-runtime":
/*!****************************************!*\
  !*** external "react/jsx-dev-runtime" ***!
  \****************************************/
/***/ (function(module) {

"use strict";
module.exports = require("react/jsx-dev-runtime");;

/***/ }),

/***/ "yup":
/*!**********************!*\
  !*** external "yup" ***!
  \**********************/
/***/ (function(module) {

"use strict";
module.exports = require("yup");;

/***/ }),

/***/ "?ca47":
/*!******************************************!*\
  !*** ./utils/resolve-rewrites (ignored) ***!
  \******************************************/
/***/ (function() {

/* (ignored) */

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = function(moduleId) { return __webpack_require__(__webpack_require__.s = moduleId); }
var __webpack_exports__ = (__webpack_exec__("./pages/_app.js"));
module.exports = __webpack_exports__;

})();
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9mb290LWJldC8uL2xvY2FsZXN8bGF6eXwvXi8uKi8uKiQvfGdyb3VwT3B0aW9uczoge318bmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly9mb290LWJldC8uL25vZGVfbW9kdWxlcy9AYmFiZWwvcnVudGltZS9oZWxwZXJzL2ludGVyb3BSZXF1aXJlRGVmYXVsdC5qcyIsIndlYnBhY2s6Ly9mb290LWJldC8uL25vZGVfbW9kdWxlcy9AYmFiZWwvcnVudGltZS9oZWxwZXJzL2ludGVyb3BSZXF1aXJlV2lsZGNhcmQuanMiLCJ3ZWJwYWNrOi8vZm9vdC1iZXQvLi9ub2RlX21vZHVsZXMvQGJhYmVsL3J1bnRpbWUvaGVscGVycy90eXBlb2YuanMiLCJ3ZWJwYWNrOi8vZm9vdC1iZXQvLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L25leHQtc2VydmVyL3NlcnZlci9kZW5vcm1hbGl6ZS1wYWdlLXBhdGguanMiLCJ3ZWJwYWNrOi8vZm9vdC1iZXQvLi9ub2RlX21vZHVsZXMvbmV4dC9saW5rLmpzIiwid2VicGFjazovL2Zvb3QtYmV0Ly4vY29tcG9uZW50cy9Gb290ZXIvQmFsbC9CYWxsLmpzeCIsIndlYnBhY2s6Ly9mb290LWJldC8uL2NvbXBvbmVudHMvRm9vdGVyL0Zvb3Rlci5qc3giLCJ3ZWJwYWNrOi8vZm9vdC1iZXQvLi9jb21wb25lbnRzL0Zvb3Rlci9OYXZpZ2F0aW9uL0xpc3QvTGlzdC5qc3giLCJ3ZWJwYWNrOi8vZm9vdC1iZXQvLi9jb21wb25lbnRzL0Zvb3Rlci9OYXZpZ2F0aW9uL05hdmlnYXRpb24uanN4Iiwid2VicGFjazovL2Zvb3QtYmV0Ly4vY29tcG9uZW50cy9Gb290ZXIvTmF2aWdhdGlvbi9uYXZfZGF0YS5qcyIsIndlYnBhY2s6Ly9mb290LWJldC8uL2NvbXBvbmVudHMvRm9vdGVyL1NvY2lhbE1lZGlhL1BTSWNvbnMvUFMuanN4Iiwid2VicGFjazovL2Zvb3QtYmV0Ly4vY29tcG9uZW50cy9Gb290ZXIvU29jaWFsTWVkaWEvU01JY29ucy9TTS5qc3giLCJ3ZWJwYWNrOi8vZm9vdC1iZXQvLi9jb21wb25lbnRzL0Zvb3Rlci9Tb2NpYWxNZWRpYS9Tb2NpYWxNZWRpYS5qc3giLCJ3ZWJwYWNrOi8vZm9vdC1iZXQvLi9jb21wb25lbnRzL0Zvb3Rlci9Tb2NpYWxNZWRpYS9jb21tb24vSWNvbi9JY29uLmpzeCIsIndlYnBhY2s6Ly9mb290LWJldC8uL2NvbXBvbmVudHMvSGVhZGVyL0Jhci9CYXIuanN4Iiwid2VicGFjazovL2Zvb3QtYmV0Ly4vY29tcG9uZW50cy9IZWFkZXIvQmFyL0Jhckl0ZW1zL0Jhckl0ZW1zLmpzeCIsIndlYnBhY2s6Ly9mb290LWJldC8uL2NvbXBvbmVudHMvSGVhZGVyL0Jhci9CYXJJdGVtcy9MYW5ndWFnZURyb3BDb25maWdzL2xhbmctY29uZmlncy5qcyIsIndlYnBhY2s6Ly9mb290LWJldC8uL2NvbXBvbmVudHMvSGVhZGVyL0Jhci9CYXJJdGVtcy9MYW5ndWFnZURyb3AvTGFuZ3VhZ2VEcm9wLmpzeCIsIndlYnBhY2s6Ly9mb290LWJldC8uL2NvbXBvbmVudHMvSGVhZGVyL0Jhci9CYXJJdGVtcy9Mb2dnZWQvTG9nZ2VkLmpzeCIsIndlYnBhY2s6Ly9mb290LWJldC8uL2NvbXBvbmVudHMvSGVhZGVyL0Jhci9CYXJJdGVtcy9Mb2dnZWQvTG9nZ2VkRHJvcC9Mb2dnZWREcm9wLmpzeCIsIndlYnBhY2s6Ly9mb290LWJldC8uL2NvbXBvbmVudHMvSGVhZGVyL0Jhci9CYXJJdGVtcy9Mb2dnZWQvTG9nZ2VkV2FsbHBlci9Mb2dnZWRXYWxscGVyLmpzeCIsIndlYnBhY2s6Ly9mb290LWJldC8uL2NvbXBvbmVudHMvSGVhZGVyL0Jhci9Ecm9wZG93bk1lbnUvRHJvcGRvd24uanN4Iiwid2VicGFjazovL2Zvb3QtYmV0Ly4vY29tcG9uZW50cy9IZWFkZXIvQmFyL0xvZ2luL0xvZ2luLmpzeCIsIndlYnBhY2s6Ly9mb290LWJldC8uL2NvbXBvbmVudHMvSGVhZGVyL0Jhci9Mb2dpbi9Mb2dpbkZvcm0vTG9naW5Gb3JtLmpzeCIsIndlYnBhY2s6Ly9mb290LWJldC8uL2NvbXBvbmVudHMvSGVhZGVyL0Jhci9Mb2dpbi9SZXNldFBhc3N3b3JkL0ZvcmdvdFBhc3N3b3JkL0ZvcmdvdFBhc3N3b3JkLmpzeCIsIndlYnBhY2s6Ly9mb290LWJldC8uL2NvbXBvbmVudHMvSGVhZGVyL0Jhci9Mb2dpbi9SZXNldFBhc3N3b3JkL0dldEVtYWlsQ29kZS9HZXRFbWFpbENvZGUuanN4Iiwid2VicGFjazovL2Zvb3QtYmV0Ly4vY29tcG9uZW50cy9IZWFkZXIvQmFyL0xvZ2luL1Jlc2V0UGFzc3dvcmQvR2V0RW1haWxDb2RlL2lucHV0X2NvbmZpZ3MuanMiLCJ3ZWJwYWNrOi8vZm9vdC1iZXQvLi9jb21wb25lbnRzL0hlYWRlci9CYXIvTG9naW4vUmVzZXRQYXNzd29yZC9OZXdQYXNzd29yZC9OZXdQYXNzd29yZC5qc3giLCJ3ZWJwYWNrOi8vZm9vdC1iZXQvLi9jb21wb25lbnRzL0hlYWRlci9CYXIvTG9naW4vUmVzZXRQYXNzd29yZC9TdWNjZXNzL1N1Y2Nlc3MuanN4Iiwid2VicGFjazovL2Zvb3QtYmV0Ly4vY29tcG9uZW50cy9IZWFkZXIvQmFyL0xvZ2luL1NvY2lhbE1lZGlhSWNvbnMvU29jaWFsTWVkaWFJY29ucy5qc3giLCJ3ZWJwYWNrOi8vZm9vdC1iZXQvLi9jb21wb25lbnRzL0hlYWRlci9CYXIvTG9naW4vY29tbW9uL1Jlc2V0UGFzc3dvcmRMaW5rLmpzeCIsIndlYnBhY2s6Ly9mb290LWJldC8uL2NvbXBvbmVudHMvSGVhZGVyL0Jhci9Mb2dpbi9jb21tb24vU3VibWl0LmpzeCIsIndlYnBhY2s6Ly9mb290LWJldC8uL2NvbXBvbmVudHMvSGVhZGVyL0Jhci9Mb2dpbi9jb21tb24vVGl0bGUuanN4Iiwid2VicGFjazovL2Zvb3QtYmV0Ly4vY29tcG9uZW50cy9IZWFkZXIvQmFyL0xvZ2luL2NvbW1vbi9Ub1JlZ2lzdGVyLmpzeCIsIndlYnBhY2s6Ly9mb290LWJldC8uL2NvbXBvbmVudHMvSGVhZGVyL0Jhci9Mb2dvL0xvZ28uanN4Iiwid2VicGFjazovL2Zvb3QtYmV0Ly4vY29tcG9uZW50cy9IZWFkZXIvSGVhZGVyLmpzeCIsIndlYnBhY2s6Ly9mb290LWJldC8uL2NvbXBvbmVudHMvSGVhZGVyL05hdkJhci9CdXR0b24vQnV0dG9uLmpzeCIsIndlYnBhY2s6Ly9mb290LWJldC8uL2NvbXBvbmVudHMvSGVhZGVyL05hdkJhci9OYXZCYXIuanN4Iiwid2VicGFjazovL2Zvb3QtYmV0Ly4vY29tcG9uZW50cy9IZWFkZXIvU29jaWFsTWVkaWEvSWNvbi9JY29uLmpzeCIsIndlYnBhY2s6Ly9mb290LWJldC8uL2NvbXBvbmVudHMvSGVhZGVyL1NvY2lhbE1lZGlhL01vZGFscy9GYWNlYm9vay9GYWNlYm9vay5qc3giLCJ3ZWJwYWNrOi8vZm9vdC1iZXQvLi9jb21wb25lbnRzL0hlYWRlci9Tb2NpYWxNZWRpYS9Nb2RhbHMvSW5zdGFncmFtL0luc3RhZ3JhbS5qc3giLCJ3ZWJwYWNrOi8vZm9vdC1iZXQvLi9jb21wb25lbnRzL0hlYWRlci9Tb2NpYWxNZWRpYS9Nb2RhbHMvUGhvbmUvUGhvbmUuanN4Iiwid2VicGFjazovL2Zvb3QtYmV0Ly4vY29tcG9uZW50cy9IZWFkZXIvU29jaWFsTWVkaWEvTW9kYWxzL1RlbGVncmFtL1RlbGVncmFtLmpzeCIsIndlYnBhY2s6Ly9mb290LWJldC8uL2NvbXBvbmVudHMvSGVhZGVyL1NvY2lhbE1lZGlhL01vZGFscy9WaWJlci9WaWJlci5qc3giLCJ3ZWJwYWNrOi8vZm9vdC1iZXQvLi9jb21wb25lbnRzL0hlYWRlci9Tb2NpYWxNZWRpYS9Nb2RhbHMvV2F0c1VwL1dhdHNVcC5qc3giLCJ3ZWJwYWNrOi8vZm9vdC1iZXQvLi9jb21wb25lbnRzL0hlYWRlci9Tb2NpYWxNZWRpYS9Tb2NpYWxNZWRpYS5qc3giLCJ3ZWJwYWNrOi8vZm9vdC1iZXQvLi9jb21wb25lbnRzL1BhZ2VzL0NvbnRhY3RzL0NvbnRhY3RzTW9kYWwuanN4Iiwid2VicGFjazovL2Zvb3QtYmV0Ly4vY29tcG9uZW50cy9QYWdlcy9Db250YWN0cy9jb250YWN0c19kYXRhLmpzIiwid2VicGFjazovL2Zvb3QtYmV0Ly4vY29tcG9uZW50cy9jb21tb24vYXV0aC9JbnB1dENvbnRhaW5lci9JbnB1dENvbnRhaW5lci5qc3giLCJ3ZWJwYWNrOi8vZm9vdC1iZXQvLi9jb21wb25lbnRzL2NvbW1vbi9hdXRoL01vZGFsL01vZGFsLmpzeCIsIndlYnBhY2s6Ly9mb290LWJldC8uL2xheW91dHMvRXJyb3IuanN4Iiwid2VicGFjazovL2Zvb3QtYmV0Ly4vbGF5b3V0cy9NYWluLmpzeCIsIndlYnBhY2s6Ly9mb290LWJldC8uL2xheW91dHMvUmVnaXN0ZXIuanN4Iiwid2VicGFjazovL2Zvb3QtYmV0Ly4vbGF5b3V0cy9XaXRob3V0UGhvdG8uanN4Iiwid2VicGFjazovL2Zvb3QtYmV0Ly4vbGF5b3V0cy9sYXlvdXQtd3JhcHBlci5qc3giLCJ3ZWJwYWNrOi8vZm9vdC1iZXQvLi9saWIvY29uc3RhbnRzLmpzIiwid2VicGFjazovL2Zvb3QtYmV0Ly4vbGliL2VyLmxpYi5qcyIsIndlYnBhY2s6Ly9mb290LWJldC8uL2xpYi9yZXF1ZXN0LWRlc3RpbmF0aW9ucy5qcyIsIndlYnBhY2s6Ly9mb290LWJldC8uL25vZGVfbW9kdWxlcy9uZXh0L2Rpc3QvY2xpZW50L2xpbmsuanMiLCJ3ZWJwYWNrOi8vZm9vdC1iZXQvLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L2NsaWVudC9ub3JtYWxpemUtdHJhaWxpbmctc2xhc2guanMiLCJ3ZWJwYWNrOi8vZm9vdC1iZXQvLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L2NsaWVudC9yZXF1ZXN0LWlkbGUtY2FsbGJhY2suanMiLCJ3ZWJwYWNrOi8vZm9vdC1iZXQvLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L2NsaWVudC9yb3V0ZS1sb2FkZXIuanMiLCJ3ZWJwYWNrOi8vZm9vdC1iZXQvLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L2NsaWVudC9yb3V0ZXIuanMiLCJ3ZWJwYWNrOi8vZm9vdC1iZXQvLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L2NsaWVudC91c2UtaW50ZXJzZWN0aW9uLmpzIiwid2VicGFjazovL2Zvb3QtYmV0Ly4vbm9kZV9tb2R1bGVzL25leHQvZGlzdC9jbGllbnQvd2l0aC1yb3V0ZXIuanMiLCJ3ZWJwYWNrOi8vZm9vdC1iZXQvLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L25leHQtc2VydmVyL2xpYi9pMThuL2RldGVjdC1kb21haW4tbG9jYWxlLmpzIiwid2VicGFjazovL2Zvb3QtYmV0Ly4vbm9kZV9tb2R1bGVzL25leHQvZGlzdC9uZXh0LXNlcnZlci9saWIvaTE4bi9ub3JtYWxpemUtbG9jYWxlLXBhdGguanMiLCJ3ZWJwYWNrOi8vZm9vdC1iZXQvLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L25leHQtc2VydmVyL2xpYi9taXR0LmpzIiwid2VicGFjazovL2Zvb3QtYmV0Ly4vbm9kZV9tb2R1bGVzL25leHQvZGlzdC9uZXh0LXNlcnZlci9saWIvcm91dGVyL3JvdXRlci5qcyIsIndlYnBhY2s6Ly9mb290LWJldC8uL25vZGVfbW9kdWxlcy9uZXh0L2Rpc3QvbmV4dC1zZXJ2ZXIvbGliL3JvdXRlci91dGlscy9mb3JtYXQtdXJsLmpzIiwid2VicGFjazovL2Zvb3QtYmV0Ly4vbm9kZV9tb2R1bGVzL25leHQvZGlzdC9uZXh0LXNlcnZlci9saWIvcm91dGVyL3V0aWxzL2lzLWR5bmFtaWMuanMiLCJ3ZWJwYWNrOi8vZm9vdC1iZXQvLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L25leHQtc2VydmVyL2xpYi9yb3V0ZXIvdXRpbHMvcGFyc2UtcmVsYXRpdmUtdXJsLmpzIiwid2VicGFjazovL2Zvb3QtYmV0Ly4vbm9kZV9tb2R1bGVzL25leHQvZGlzdC9uZXh0LXNlcnZlci9saWIvcm91dGVyL3V0aWxzL3F1ZXJ5c3RyaW5nLmpzIiwid2VicGFjazovL2Zvb3QtYmV0Ly4vbm9kZV9tb2R1bGVzL25leHQvZGlzdC9uZXh0LXNlcnZlci9saWIvcm91dGVyL3V0aWxzL3JvdXRlLW1hdGNoZXIuanMiLCJ3ZWJwYWNrOi8vZm9vdC1iZXQvLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L25leHQtc2VydmVyL2xpYi9yb3V0ZXIvdXRpbHMvcm91dGUtcmVnZXguanMiLCJ3ZWJwYWNrOi8vZm9vdC1iZXQvLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L25leHQtc2VydmVyL2xpYi91dGlscy5qcyIsIndlYnBhY2s6Ly9mb290LWJldC8uL3BhZ2VzL19hcHAuanMiLCJ3ZWJwYWNrOi8vZm9vdC1iZXQvLi9yZWR1eC9mZWF0dXJlcy9tYXRjaFNsaWNlLmpzIiwid2VicGFjazovL2Zvb3QtYmV0Ly4vcmVkdXgvZmVhdHVyZXMvdXNlclNsaWNlLmpzIiwid2VicGFjazovL2Zvb3QtYmV0Ly4vcmVkdXgvc3RvcmUuanMiLCJ3ZWJwYWNrOi8vZm9vdC1iZXQvLi9zcmMvdXNlci91c2VyLmpzIiwid2VicGFjazovL2Zvb3QtYmV0Ly4vcHVibGljL2ltYWdlcy9jb21tb24vcGhvbmUucG5nIiwid2VicGFjazovL2Zvb3QtYmV0Ly4vcHVibGljL2ltYWdlcy9jb21tb24vdHJpYW5nbGUucG5nIiwid2VicGFjazovL2Zvb3QtYmV0Ly4vcHVibGljL2ltYWdlcy9jb21tb24vdXNlckRlZmF1bHQucG5nIiwid2VicGFjazovL2Zvb3QtYmV0Ly4vcHVibGljL2ltYWdlcy9jb21tb24vdXNlcnBob3RvLnBuZyIsIndlYnBhY2s6Ly9mb290LWJldC8uL3B1YmxpYy9pbWFnZXMvZm9vdGVyL2xlZnRCYWxsLnBuZyIsIndlYnBhY2s6Ly9mb290LWJldC8uL3B1YmxpYy9pbWFnZXMvZm9vdGVyL21hc3RlckNhcmQucG5nIiwid2VicGFjazovL2Zvb3QtYmV0Ly4vcHVibGljL2ltYWdlcy9mb290ZXIvcGF5cGFsLnBuZyIsIndlYnBhY2s6Ly9mb290LWJldC8uL3B1YmxpYy9pbWFnZXMvZm9vdGVyL3Zpc2EucG5nIiwid2VicGFjazovL2Zvb3QtYmV0Ly4vcHVibGljL2ltYWdlcy9oZWFkZXIvU29jaWFsTWVkaWEvY2xvc2VWZWN0b3IucG5nIiwid2VicGFjazovL2Zvb3QtYmV0Ly4vcHVibGljL2ltYWdlcy9oZWFkZXIvU29jaWFsTWVkaWEvZW1haWwuc3ZnIiwid2VicGFjazovL2Zvb3QtYmV0Ly4vcHVibGljL2ltYWdlcy9oZWFkZXIvU29jaWFsTWVkaWEvZmFjZWJvb2suc3ZnIiwid2VicGFjazovL2Zvb3QtYmV0Ly4vcHVibGljL2ltYWdlcy9oZWFkZXIvU29jaWFsTWVkaWEvaW5zdGFncmFtLnN2ZyIsIndlYnBhY2s6Ly9mb290LWJldC8uL3B1YmxpYy9pbWFnZXMvaGVhZGVyL1NvY2lhbE1lZGlhL3Bob25lLnN2ZyIsIndlYnBhY2s6Ly9mb290LWJldC8uL3B1YmxpYy9pbWFnZXMvaGVhZGVyL1NvY2lhbE1lZGlhL3RlbGVncmFtLnN2ZyIsIndlYnBhY2s6Ly9mb290LWJldC8uL3B1YmxpYy9pbWFnZXMvaGVhZGVyL1NvY2lhbE1lZGlhL3ZpYmVyLnN2ZyIsIndlYnBhY2s6Ly9mb290LWJldC8uL3B1YmxpYy9pbWFnZXMvaGVhZGVyL1NvY2lhbE1lZGlhL3dhdHN1cC5zdmciLCJ3ZWJwYWNrOi8vZm9vdC1iZXQvLi9wdWJsaWMvaW1hZ2VzL2hlYWRlci9kcm9wZG93bl9saW5lcy5wbmciLCJ3ZWJwYWNrOi8vZm9vdC1iZXQvLi9wdWJsaWMvaW1hZ2VzL2hlYWRlci9mbGFncy9hcm0uc3ZnIiwid2VicGFjazovL2Zvb3QtYmV0Ly4vcHVibGljL2ltYWdlcy9oZWFkZXIvZmxhZ3MvZGV1LnN2ZyIsIndlYnBhY2s6Ly9mb290LWJldC8uL3B1YmxpYy9pbWFnZXMvaGVhZGVyL2ZsYWdzL2VuLnN2ZyIsIndlYnBhY2s6Ly9mb290LWJldC8uL3B1YmxpYy9pbWFnZXMvaGVhZGVyL2ZsYWdzL2VzcC5zdmciLCJ3ZWJwYWNrOi8vZm9vdC1iZXQvLi9wdWJsaWMvaW1hZ2VzL2hlYWRlci9mbGFncy9mcmMuc3ZnIiwid2VicGFjazovL2Zvb3QtYmV0Ly4vcHVibGljL2ltYWdlcy9oZWFkZXIvZmxhZ3MvcnVzLnBuZyIsIndlYnBhY2s6Ly9mb290LWJldC8uL3B1YmxpYy9pbWFnZXMvaGVhZGVyL2Zvb3RiYWxsZXIuc3ZnIiwid2VicGFjazovL2Zvb3QtYmV0Ly4vcHVibGljL2ltYWdlcy9oZWFkZXIvbG9naW4ucG5nIiwid2VicGFjazovL2Zvb3QtYmV0Ly4vcHVibGljL2ltYWdlcy9oZWFkZXIvbG9naW4vZmFjZWJvb2suc3ZnIiwid2VicGFjazovL2Zvb3QtYmV0Ly4vcHVibGljL2ltYWdlcy9oZWFkZXIvbG9naW4vZ21haWwuc3ZnIiwid2VicGFjazovL2Zvb3QtYmV0Ly4vcHVibGljL2ltYWdlcy9oZWFkZXIvbG9naW4vc3VjY2Vzcy5wbmciLCJ3ZWJwYWNrOi8vZm9vdC1iZXQvLi9wdWJsaWMvaW1hZ2VzL2hlYWRlci9sb2dpbi90d2l0dGVyLnN2ZyIsIndlYnBhY2s6Ly9mb290LWJldC8uL3B1YmxpYy9pbWFnZXMvaGVhZGVyL2xvZ2luL3ZrLnN2ZyIsIndlYnBhY2s6Ly9mb290LWJldC8uL3B1YmxpYy9pbWFnZXMvaGVhZGVyL2xvZ28uc3ZnIiwid2VicGFjazovL2Zvb3QtYmV0Ly4vcHVibGljL2ltYWdlcy9oZWFkZXIvcmVnaXN0ZXIucG5nIiwid2VicGFjazovL2Zvb3QtYmV0Ly4vcHVibGljL2ltYWdlcy9wZXJzb25hbC9iYWxsLnBuZyIsIndlYnBhY2s6Ly9mb290LWJldC8uL2NvbXBvbmVudHMvRm9vdGVyL0JhbGwvQmFsbC5tb2R1bGUuc2NzcyIsIndlYnBhY2s6Ly9mb290LWJldC8uL2NvbXBvbmVudHMvRm9vdGVyL0Zvb3Rlci5tb2R1bGUuc2NzcyIsIndlYnBhY2s6Ly9mb290LWJldC8uL2NvbXBvbmVudHMvRm9vdGVyL05hdmlnYXRpb24vTGlzdC9MaXN0Lm1vZHVsZS5zY3NzIiwid2VicGFjazovL2Zvb3QtYmV0Ly4vY29tcG9uZW50cy9Gb290ZXIvTmF2aWdhdGlvbi9OYXZpZ2F0aW9uLm1vZHVsZS5zY3NzIiwid2VicGFjazovL2Zvb3QtYmV0Ly4vY29tcG9uZW50cy9Gb290ZXIvU29jaWFsTWVkaWEvUFNJY29ucy9QUy5tb2R1bGUuc2NzcyIsIndlYnBhY2s6Ly9mb290LWJldC8uL2NvbXBvbmVudHMvRm9vdGVyL1NvY2lhbE1lZGlhL1NNSWNvbnMvU00ubW9kdWxlLnNjc3MiLCJ3ZWJwYWNrOi8vZm9vdC1iZXQvLi9jb21wb25lbnRzL0Zvb3Rlci9Tb2NpYWxNZWRpYS9Tb2NpYWxNZWRpYS5tb2R1bGUuc2NzcyIsIndlYnBhY2s6Ly9mb290LWJldC8uL2NvbXBvbmVudHMvRm9vdGVyL1NvY2lhbE1lZGlhL2NvbW1vbi9JY29uL0ljb24ubW9kdWxlLnNjc3MiLCJ3ZWJwYWNrOi8vZm9vdC1iZXQvLi9jb21wb25lbnRzL0hlYWRlci9CYXIvQmFyLm1vZHVsZS5zY3NzIiwid2VicGFjazovL2Zvb3QtYmV0Ly4vY29tcG9uZW50cy9IZWFkZXIvQmFyL0Jhckl0ZW1zL0Jhckl0ZW1zLm1vZHVsZS5zY3NzIiwid2VicGFjazovL2Zvb3QtYmV0Ly4vY29tcG9uZW50cy9IZWFkZXIvQmFyL0Jhckl0ZW1zL0xhbmd1YWdlRHJvcC9MYW5ndWFnZURyb3AubW9kdWxlLnNjc3MiLCJ3ZWJwYWNrOi8vZm9vdC1iZXQvLi9jb21wb25lbnRzL0hlYWRlci9CYXIvQmFySXRlbXMvTG9nZ2VkL0xvZ2dlZC5tb2R1bGUuc2NzcyIsIndlYnBhY2s6Ly9mb290LWJldC8uL2NvbXBvbmVudHMvSGVhZGVyL0Jhci9CYXJJdGVtcy9Mb2dnZWQvTG9nZ2VkRHJvcC9Mb2dnZWREcm9wLm1vZHVsZS5zY3NzIiwid2VicGFjazovL2Zvb3QtYmV0Ly4vY29tcG9uZW50cy9IZWFkZXIvQmFyL0Jhckl0ZW1zL0xvZ2dlZC9Mb2dnZWRXYWxscGVyL0xvZ2dlZFdhbGxwZXIubW9kdWxlLnNjc3MiLCJ3ZWJwYWNrOi8vZm9vdC1iZXQvLi9jb21wb25lbnRzL0hlYWRlci9CYXIvRHJvcGRvd25NZW51L0Ryb3Bkb3duLm1vZHVsZS5zY3NzIiwid2VicGFjazovL2Zvb3QtYmV0Ly4vY29tcG9uZW50cy9IZWFkZXIvQmFyL0xvZ2luL0xvZ2luLm1vZHVsZS5zY3NzIiwid2VicGFjazovL2Zvb3QtYmV0Ly4vY29tcG9uZW50cy9IZWFkZXIvQmFyL0xvZ2luL0xvZ2luRm9ybS9Mb2dpbkZvcm0ubW9kdWxlLnNjc3MiLCJ3ZWJwYWNrOi8vZm9vdC1iZXQvLi9jb21wb25lbnRzL0hlYWRlci9CYXIvTG9naW4vUmVzZXRQYXNzd29yZC9Gb3Jnb3RQYXNzd29yZC9Gb3Jnb3RQYXNzd29yZC5tb2R1bGUuc2NzcyIsIndlYnBhY2s6Ly9mb290LWJldC8uL2NvbXBvbmVudHMvSGVhZGVyL0Jhci9Mb2dpbi9SZXNldFBhc3N3b3JkL0dldEVtYWlsQ29kZS9HZXRFbWFpbENvZGUubW9kdWxlLnNjc3MiLCJ3ZWJwYWNrOi8vZm9vdC1iZXQvLi9jb21wb25lbnRzL0hlYWRlci9CYXIvTG9naW4vUmVzZXRQYXNzd29yZC9OZXdQYXNzd29yZC9OZXdQYXNzd29yZC5tb2R1bGUuc2NzcyIsIndlYnBhY2s6Ly9mb290LWJldC8uL2NvbXBvbmVudHMvSGVhZGVyL0Jhci9Mb2dpbi9SZXNldFBhc3N3b3JkL1N1Y2Nlc3MvU3VjY2Vzcy5tb2R1bGUuc2NzcyIsIndlYnBhY2s6Ly9mb290LWJldC8uL2NvbXBvbmVudHMvSGVhZGVyL0Jhci9Mb2dpbi9Tb2NpYWxNZWRpYUljb25zL1NvY2lhbE1lZGlhSWNvbnMubW9kdWxlLnNjc3MiLCJ3ZWJwYWNrOi8vZm9vdC1iZXQvLi9jb21wb25lbnRzL0hlYWRlci9CYXIvTG9nby9Mb2dvLm1vZHVsZS5zY3NzIiwid2VicGFjazovL2Zvb3QtYmV0Ly4vY29tcG9uZW50cy9IZWFkZXIvSGVhZGVyLm1vZHVsZS5zY3NzIiwid2VicGFjazovL2Zvb3QtYmV0Ly4vY29tcG9uZW50cy9IZWFkZXIvTmF2QmFyL0J1dHRvbi9CdXR0b24ubW9kdWxlLnNjc3MiLCJ3ZWJwYWNrOi8vZm9vdC1iZXQvLi9jb21wb25lbnRzL0hlYWRlci9OYXZCYXIvTmF2QmFyLm1vZHVsZS5zY3NzIiwid2VicGFjazovL2Zvb3QtYmV0Ly4vY29tcG9uZW50cy9IZWFkZXIvU29jaWFsTWVkaWEvSWNvbi9JY29uLm1vZHVsZS5zY3NzIiwid2VicGFjazovL2Zvb3QtYmV0Ly4vY29tcG9uZW50cy9IZWFkZXIvU29jaWFsTWVkaWEvTW9kYWxzL1NvY2lhbE1lZGlhTW9kYWwubW9kdWxlLnNjc3MiLCJ3ZWJwYWNrOi8vZm9vdC1iZXQvLi9jb21wb25lbnRzL0hlYWRlci9Tb2NpYWxNZWRpYS9Tb2NpYWxNZWRpYS5tb2R1bGUuc2NzcyIsIndlYnBhY2s6Ly9mb290LWJldC8uL2NvbXBvbmVudHMvUGFnZXMvQ29udGFjdHMvQ29udGFjdHMubW9kdWxlLnNjc3MiLCJ3ZWJwYWNrOi8vZm9vdC1iZXQvLi9jb21wb25lbnRzL2NvbW1vbi9hdXRoL0lucHV0Q29udGFpbmVyL0lucHV0Q29udGFpbmVyLm1vZHVsZS5zY3NzIiwid2VicGFjazovL2Zvb3QtYmV0Ly4vY29tcG9uZW50cy9jb21tb24vYXV0aC9Nb2RhbC9Nb2RhbC5tb2R1bGUuc2NzcyIsIndlYnBhY2s6Ly9mb290LWJldC9leHRlcm5hbCBcIkBob29rZm9ybS9yZXNvbHZlcnMveXVwXCIiLCJ3ZWJwYWNrOi8vZm9vdC1iZXQvZXh0ZXJuYWwgXCJAcmVkdXhqcy90b29sa2l0XCIiLCJ3ZWJwYWNrOi8vZm9vdC1iZXQvZXh0ZXJuYWwgXCJheGlvc1wiIiwid2VicGFjazovL2Zvb3QtYmV0L2V4dGVybmFsIFwibmV4dC10cmFuc2xhdGUvYXBwV2l0aEkxOG5cIiIsIndlYnBhY2s6Ly9mb290LWJldC9leHRlcm5hbCBcIm5leHQtdHJhbnNsYXRlL3VzZVRyYW5zbGF0aW9uXCIiLCJ3ZWJwYWNrOi8vZm9vdC1iZXQvZXh0ZXJuYWwgXCJuZXh0L2Rpc3QvbmV4dC1zZXJ2ZXIvbGliL3JvdXRlci1jb250ZXh0LmpzXCIiLCJ3ZWJwYWNrOi8vZm9vdC1iZXQvZXh0ZXJuYWwgXCJuZXh0L2Rpc3QvbmV4dC1zZXJ2ZXIvbGliL3JvdXRlci91dGlscy9nZXQtYXNzZXQtcGF0aC1mcm9tLXJvdXRlLmpzXCIiLCJ3ZWJwYWNrOi8vZm9vdC1iZXQvZXh0ZXJuYWwgXCJuZXh0L2hlYWRcIiIsIndlYnBhY2s6Ly9mb290LWJldC9leHRlcm5hbCBcInJlYWN0XCIiLCJ3ZWJwYWNrOi8vZm9vdC1iZXQvZXh0ZXJuYWwgXCJyZWFjdC1iZWF1dGlmdWwtZG5kXCIiLCJ3ZWJwYWNrOi8vZm9vdC1iZXQvZXh0ZXJuYWwgXCJyZWFjdC1kb21cIiIsIndlYnBhY2s6Ly9mb290LWJldC9leHRlcm5hbCBcInJlYWN0LWZhY2Vib29rLWxvZ2luXCIiLCJ3ZWJwYWNrOi8vZm9vdC1iZXQvZXh0ZXJuYWwgXCJyZWFjdC1nb29nbGUtbG9naW5cIiIsIndlYnBhY2s6Ly9mb290LWJldC9leHRlcm5hbCBcInJlYWN0LWhvb2stZm9ybVwiIiwid2VicGFjazovL2Zvb3QtYmV0L2V4dGVybmFsIFwicmVhY3QtaXNcIiIsIndlYnBhY2s6Ly9mb290LWJldC9leHRlcm5hbCBcInJlYWN0LXJlZHV4XCIiLCJ3ZWJwYWNrOi8vZm9vdC1iZXQvZXh0ZXJuYWwgXCJyZWFjdC10b2FzdGlmeVwiIiwid2VicGFjazovL2Zvb3QtYmV0L2V4dGVybmFsIFwicmVhY3QtdHdpdHRlci1sb2dpblwiIiwid2VicGFjazovL2Zvb3QtYmV0L2V4dGVybmFsIFwicmVhY3QvanN4LWRldi1ydW50aW1lXCIiLCJ3ZWJwYWNrOi8vZm9vdC1iZXQvZXh0ZXJuYWwgXCJ5dXBcIiIsIndlYnBhY2s6Ly9mb290LWJldC9pZ25vcmVkfEM6XFxVc2Vyc1xcdXNlclxcRGVza3RvcFxccHJvamVjdHNcXGFpdC1wcm9qZWN0c1xcZm9vdC1iZXRcXG5vZGVfbW9kdWxlc1xcbmV4dFxcZGlzdFxcbmV4dC1zZXJ2ZXJcXGxpYlxccm91dGVyfC4vdXRpbHMvcmVzb2x2ZS1yZXdyaXRlcyJdLCJuYW1lcyI6WyJCYWxsIiwic3R5bGVzIiwiYmFsbEljb24iLCJGb290ZXIiLCJyb3V0ZXIiLCJ1c2VSb3V0ZXIiLCJwYXRobmFtZSIsIkxpc3QiLCJsaXN0X2l0ZW1zIiwiYm9yZGVyc0FjdGl2ZSIsInQiLCJ1c2VUcmFuc2xhdGlvbiIsInRyYW5zbGF0aW9uUGF0aCIsInRyYW5zbGF0ZSIsImtleSIsIm1hcCIsImVsIiwibGluayIsIm5hbWUiLCJNYXRoIiwicmFuZG9tIiwiTmF2aWdhdGlvbiIsIm5hdl9kYXRhIiwiaSIsIlBTIiwiaWNvbnMiLCJzcmMiLCJwYXlQYWwiLCJ2aXNhIiwibWFzdGVyQ2FyZCIsImxhc3RFbGVtZW50IiwiU00iLCJwaG9uZSIsInVybCIsImZhY2Vib29rIiwid2F0c3VwIiwiaW5zdGFncmFtIiwidmliZXIiLCJ0ZWxlZ3JhbSIsImxlbmd0aCIsIlNvY2lhbE1lZGlhIiwiSWNvbiIsImNsaWNrIiwiZWxlbWVudHMiLCJvdGhlclN0eWxlcyIsImNsYXNzZXMiLCJ3aWR0aCIsInBhZGRpbmciLCJCYXIiLCJiYXJfaXRlbXMiLCJiYXJfaXRlbXNfY29udCIsInNob3dMb2dpbk1vZGFsIiwic2V0U2hvd0xvZ2luTW9kYWwiLCJ1c2VTdGF0ZSIsInVzZXJfaW5mbyIsInVzZVNlbGVjdG9yIiwic3RhdGUiLCJ1c2VyIiwiY29uc29sZSIsImxvZyIsIkJhckl0ZW1zIiwicmVnaXN0cmF0aW9uIiwibG9naW4iLCJyZWdpc3RyYXRpb25fcGF0aCIsImxvZ2luTW9kYWxIYW5kbGUiLCJ1c2VyTG9nZ2VkIiwibGFuZyIsImxhbmd1YWdlc1RpdGxlIiwic2V0TGFuZ3VhZ2VzVGl0bGUiLCJsYW5ndWFnZXMiLCJ1c2VFZmZlY3QiLCJuZXdMYW5nIiwibGFuZ3VhZ2VzX2RhdGEiLCJzaG93RHJvcCIsInNldFNob3dEcm9wIiwiY2hhbmdlTGFuZ1RpdGxlIiwiZXZlbnQiLCJsYW5nX3RpdGxlX2RhdGEiLCJmaWx0ZXIiLCJ0YXJnZXQiLCJjbGFzc05hbWUiLCJ1c2VyX2RhdGEiLCJyZWdpc3Rlcl9pY29uIiwibG9naW5faWNvbiIsImRpc3BsYXkiLCJjb250ZW50T25UaXRsZSIsImljb24iLCJjb250ZW50T25Ecm9wIiwiYXJtRmxhZyIsInJ1c0ZsYWciLCJlbkZsYWciLCJlc3BGbGFnIiwiZnJjRmxhZyIsImRldUZsYWciLCJMYW5ndWFnZURyb3AiLCJvbkNsb3NlIiwiZGF0YSIsImRvY3VtZW50IiwiYWRkRXZlbnRMaXN0ZW5lciIsImhhbmRsZUNsb3NlIiwicmVtb3ZlRXZlbnRMaXN0ZW5lciIsIm5vZGUiLCJ1c2VSZWYiLCJlIiwiY3VycmVudCIsImNvbnRhaW5zIiwicGFyZW50Tm9kZSIsIkxvZ2dlZCIsInNob3dVc2VyRHJvcCIsInNldFNob3dVc2VyRHJvcCIsInBob3RvIiwiZnVsbE5hbWUiLCJMb2dnZWREcm9wIiwiZGlzcGF0Y2giLCJ1c2VEaXNwYXRjaCIsIl9sb2dvdXQiLCJsb2dvdXQiLCJwdXNoIiwidGVsSWNvbiIsInRlbGVwaG9uZSIsIkxvZ2dlZFdhbGxwZXIiLCJpbWciLCJ1c2VyRGVmYXVsdEljb24iLCJjb2xvciIsInRyaWFuZ2xlIiwiRHJvcGRvd24iLCJzaG93RHJvcGRvd24iLCJzZXRTaG93RHJvcGRvd24iLCJzaG93Q29udGFjdHNNb2RhbCIsInNldFNob3dDb250YWN0c01vZGFsIiwiYnV0dG9uc0luSG9tZVBhZ2UiLCJpZCIsImZyc3RDb250ZW50IiwiaHJlZiIsInNlY0NvbnRlbnQiLCJidXR0b25zIiwiZHJvcGRvd25MaW5lcyIsIkxvZ2luIiwib25Nb2RhbENsb3NlIiwic2hvd1Jlc2V0UGFzc3dvcmRNb2RhbCIsInNldFNob3dSZXNldFBhc3N3b3JkTW9kYWwiLCJMb2dpbkZvcm0iLCJoYW5kbGVSZXNldFBhc3NNb2RhbCIsImhhbmRsZV90b19yZWdpc3Rlcl9jbGljayIsInF1ZXJ5U2VsZWN0b3IiLCJzdHlsZSIsIm92ZXJmbG93Iiwic2NoZW1hIiwieXVwIiwic2hhcGUiLCJlbWFpbCIsInJlcXVpcmVkIiwibWF0Y2hlcyIsInBhc3N3b3JkIiwibWluIiwicmVnaXN0ZXIiLCJoYW5kbGVTdWJtaXQiLCJmb3JtU3RhdGUiLCJlcnJvcnMiLCJ1c2VGb3JtIiwibW9kZSIsInJlc29sdmVyIiwieXVwUmVzb2x2ZXIiLCJzdWJtaXQiLCJyZXF1ZXN0IiwiTE9HSU4iLCJzZXRDb29raWUiLCJ0b2tlbiIsImVycm9yIiwidG9hc3QiLCJyZXNwb25zZSIsIm1lc3NhZ2UiLCJ0eXBlIiwiRm9yZ290UGFzc3dvcmQiLCJzaG93Rm9yZ290UGFzc01sIiwic2V0U2hvd0ZvcmdvdFBhc3NNbCIsInNob3dHZXRFbWFpbENvZGVNbCIsInNldFNob3dFbWFpbENvZGVNbCIsIlNUQVJUX1JFU0VUX1BBU1NXT1JEIiwiZXJyIiwiR2V0RW1haWxDb2RlIiwic2hvd05ld1Bhc3N3b3JkTWwiLCJzZXRTaG93TmV3UGFzc3dvcmRNbCIsIm51bTEiLCJudW0yIiwibnVtMyIsIm51bTQiLCJudW01IiwibnVtNiIsImp1bXAiLCJ4IiwidmFsdWUiLCJuZXh0U2libGluZyIsInRlc3QiLCJmb2N1cyIsImp1bXBCYWNrIiwiY29kZSIsInByZXZpb3VzU2libGluZyIsIk9iamVjdCIsInZhbHVlcyIsInJlZHVjZSIsImFjIiwiVkVSSUZZX1BBU1NXT1JEX1JFU0VUIiwiaGVhZGVycyIsImdldENvb2tpZSIsImlucHV0cyIsImNsYXNzIiwidHJpbSIsIm1heExlbmd0aCIsIk5ld1Bhc3N3b3JkIiwic2hvd05ld1Bhc3NNbCIsInNldFNob3dOZXdQYXNzTWwiLCJzaG93U3VjY2Vzc01sIiwic2V0U2hvd1N1Y2Nlc3NNbCIsIlNFVF9ORVdfUEFTU1dPUkQiLCJTdWNjZXNzIiwic3VjY2Vzc0ljb24iLCJpY29uVXJsIiwiZ21haWwiLCJ2ayIsInR3aXR0ZXIiLCJyZXNwb25zZUZhY2Vib29rIiwicmVzcG9uc2VHb29nbGUiLCJUV0lUVEVSX0NPTlNVTUVSX0tFWSIsIlRXSVRURVJfQ09OU1VNRVJfU0VDUkVUIiwiU29jaWFsTWVkaWFJY29ucyIsIlZLIiwiaW5pdCIsImFwaUlkIiwib25Tb2NpYWxNZWRpYUJ0bkNsaWNrIiwiZmFjZWJvb2tMb2dpbkJ0biIsImdvb2dsZUxvZ2luQnRuIiwiQXV0aCIsInNlc3Npb24iLCJzdGF0dXMiLCJ0d2l0dGVyQXV0aEhhbmRsZXIiLCJjdXJzb3IiLCJyZW5kZXJQcm9wcyIsIm9uQ2xpY2siLCJkaXNhYmxlZCIsIlJlc2V0UGFzc3dvcmRMaW5rIiwiY29udGVudCIsIlN1Ym1pdCIsIlRpdGxlIiwiVG9SZWdpc3RlciIsImNvbnRhaW5lcl9zdHlsZXMiLCJjb250ZW50X3N0eWxlcyIsIm9yIiwicmVnaXN0ZXJfdGV4dF9zdHlsZXMiLCJMb2dvIiwibG9nbyIsIkhlYWRlciIsIm1haW5zUGFnZXMiLCJmb290YmFsbGVyIiwiQnV0dG9uIiwiY29udGVudEZyc3RQIiwiY29udGVudFNlY1AiLCJhY3RpdmUiLCJOYXZCYXIiLCJGYWNlYm9vayIsInBhcmVudCIsInRvcCIsImNoaWxkcmVuIiwib2Zmc2V0VG9wIiwidGV4dCIsIkluc3RhZ3JhbSIsIlBob25lIiwiVGVsZWdyYW0iLCJWaWJlciIsIldhdHNVcCIsInNob3dQaG9uZU1vZGFsIiwic2V0U2hvd1Bob25lTW9kYWwiLCJzaG93RmFjYm9va01vZGFsIiwic2V0U2hvd0ZhY2Jvb2tNb2RhbCIsInNob3dUZWxlZ3JhbU1vZGFsIiwic2V0U2hvd1RlbGVncmFtTW9kYWwiLCJzaG93V2F0c1VwTW9kYWwiLCJzZXRTaG93V2F0c1VwTW9kYWwiLCJzaG93SW5zdGFncmFtTW9kYWwiLCJzZXRTaG93SW5zdGFncmFtTW9kYWwiLCJzaG93VmliZXJNb2RhbCIsInNldFNob3dWaWJlck1vZGFsIiwic29jaWFsTWVkaWFzUmVmIiwid2luZG93Iiwic2Nyb2xsVG8iLCJtb2RhbF9jb250ZW50cyIsIkNvbnRhY3RzTW9kYWwiLCJvcGVuZWQiLCJjbG9zZVZlY3RvciIsImNvbnRhY3RzX2RhdGEiLCJJbnB1dENvbnRhaW5lciIsImxhYmVsIiwicGxhY2Vob2xkZXIiLCJvdGhlciIsIk1vZGFsIiwiY29udGFpbmVyU3R5bGVzIiwiY29udGVudFN0eWxlcyIsInBvcnRhbExvY2F0aW9uIiwic2hvd01vZGFsIiwic2V0U2hvd01vZGFsIiwicGFnZU92ZXJmbG93Iiwic2V0UGFnZU92ZXJmbG93IiwiYm9keSIsImRpbmFtaWNUb3AiLCJzY3JvbGxZIiwibW9kYWwiLCJjcmVhdGVQb3J0YWwiLCJnZXRFbGVtZW50QnlJZCIsIkVycm9yIiwiTWFpbiIsIlJlZ2lzdGVyTGF5b3V0IiwibGF5b3V0cyIsIm1haW4iLCJ3aXRob3V0UGhvdG8iLCJXaXRob3V0UGhvdG8iLCJSZWdpc3RlciIsIkxheW91dFdyYXBwZXIiLCJwcm9wcyIsIkxheW91dCIsImxheW91dCIsImhvc3QiLCJkZXN0aW5hdGlvbiIsInBheWxvYWQiLCJvcHRpb25zIiwiUHJvbWlzZSIsInJzbHYiLCJyamN0IiwiYXV0aCIsIkF1dGhvcml6YXRpb24iLCJheGlvcyIsIm1ldGhvZCIsInRoZW4iLCJjYXRjaCIsImZpbmFsbHkiLCJuYW1lRVEiLCJjYSIsImNvb2tpZSIsInNwbGl0IiwiYyIsImNoYXJBdCIsInN1YnN0cmluZyIsImluZGV4T2YiLCJyZW1vdmVDb29raWUiLCJkYXlzIiwiZXhwaXJlcyIsImRhdGUiLCJEYXRlIiwic2V0VGltZSIsImdldFRpbWUiLCJ0b1VUQ1N0cmluZyIsIkFVVEhfVVJMIiwiUkVHSVNURVIiLCJHRVRfTkVXUyIsIkdFVF9NQVRDSEVTIiwiR0VUX01BVENIRVNfT0ZfTkVYVF9EQVkiLCJHRVRfUFJFRElDVElPTlMiLCJHRVRfRkVFREJBQ0siLCJHRVRfTUFUQ0hFU19CWV9UWVBFIiwiX2ludGVyb3BSZXF1aXJlV2lsZGNhcmQiLCJyZXF1aXJlIiwiZXhwb3J0cyIsIl9yZWFjdCIsIl9yb3V0ZXIiLCJfcm91dGVyMiIsIl91c2VJbnRlcnNlY3Rpb24iLCJwcmVmZXRjaGVkIiwicHJlZmV0Y2giLCJhcyIsImlzTG9jYWxVUkwiLCJjdXJMb2NhbGUiLCJsb2NhbGUiLCJpc01vZGlmaWVkRXZlbnQiLCJjdXJyZW50VGFyZ2V0IiwibWV0YUtleSIsImN0cmxLZXkiLCJzaGlmdEtleSIsImFsdEtleSIsIm5hdGl2ZUV2ZW50Iiwid2hpY2giLCJsaW5rQ2xpY2tlZCIsInJlcGxhY2UiLCJzaGFsbG93Iiwic2Nyb2xsIiwibm9kZU5hbWUiLCJwcmV2ZW50RGVmYXVsdCIsIkxpbmsiLCJjcmVhdGVQcm9wRXJyb3IiLCJhcmdzIiwiZXhwZWN0ZWQiLCJhY3R1YWwiLCJyZXF1aXJlZFByb3BzR3VhcmQiLCJyZXF1aXJlZFByb3BzIiwia2V5cyIsImZvckVhY2giLCJfIiwib3B0aW9uYWxQcm9wc0d1YXJkIiwicGFzc0hyZWYiLCJvcHRpb25hbFByb3BzIiwidmFsVHlwZSIsImhhc1dhcm5lZCIsImRlZmF1bHQiLCJ3YXJuIiwicCIsInVzZU1lbW8iLCJyZXNvbHZlZEhyZWYiLCJyZXNvbHZlZEFzIiwicmVzb2x2ZUhyZWYiLCJjcmVhdGVFbGVtZW50IiwiY2hpbGQiLCJDaGlsZHJlbiIsIm9ubHkiLCJjaGlsZFJlZiIsInJlZiIsInNldEludGVyc2VjdGlvblJlZiIsImlzVmlzaWJsZSIsInVzZUludGVyc2VjdGlvbiIsInJvb3RNYXJnaW4iLCJzZXRSZWYiLCJ1c2VDYWxsYmFjayIsInNob3VsZFByZWZldGNoIiwiaXNQcmVmZXRjaGVkIiwiY2hpbGRQcm9wcyIsImRlZmF1bHRQcmV2ZW50ZWQiLCJvbk1vdXNlRW50ZXIiLCJwcmlvcml0eSIsImxvY2FsZURvbWFpbiIsImlzTG9jYWxlRG9tYWluIiwiZ2V0RG9tYWluTG9jYWxlIiwibG9jYWxlcyIsImRvbWFpbkxvY2FsZXMiLCJhZGRCYXNlUGF0aCIsImFkZExvY2FsZSIsImRlZmF1bHRMb2NhbGUiLCJjbG9uZUVsZW1lbnQiLCJfZGVmYXVsdCIsInJlbW92ZVBhdGhUcmFpbGluZ1NsYXNoIiwicGF0aCIsImVuZHNXaXRoIiwic2xpY2UiLCJub3JtYWxpemVQYXRoVHJhaWxpbmdTbGFzaCIsInByb2Nlc3MiLCJyZXF1ZXN0SWRsZUNhbGxiYWNrIiwic2VsZiIsImNiIiwic3RhcnQiLCJub3ciLCJzZXRUaW1lb3V0IiwiZGlkVGltZW91dCIsInRpbWVSZW1haW5pbmciLCJtYXgiLCJjYW5jZWxJZGxlQ2FsbGJhY2siLCJjbGVhclRpbWVvdXQiLCJfaW50ZXJvcFJlcXVpcmVEZWZhdWx0IiwibWFya0Fzc2V0RXJyb3IiLCJpc0Fzc2V0RXJyb3IiLCJnZXRDbGllbnRCdWlsZE1hbmlmZXN0IiwiX2dldEFzc2V0UGF0aEZyb21Sb3V0ZSIsIl9yZXF1ZXN0SWRsZUNhbGxiYWNrIiwiTVNfTUFYX0lETEVfREVMQVkiLCJ3aXRoRnV0dXJlIiwiZ2VuZXJhdG9yIiwiZW50cnkiLCJnZXQiLCJmdXR1cmUiLCJyZXNvbHZlIiwicHJvbSIsInNldCIsImhhc1ByZWZldGNoIiwiTVNJbnB1dE1ldGhvZENvbnRleHQiLCJkb2N1bWVudE1vZGUiLCJyZWxMaXN0Iiwic3VwcG9ydHMiLCJfdW51c2VkIiwiY2FuUHJlZmV0Y2giLCJwcmVmZXRjaFZpYURvbSIsInJlcyIsInJlaiIsInJlbCIsImNyb3NzT3JpZ2luIiwib25sb2FkIiwib25lcnJvciIsImhlYWQiLCJhcHBlbmRDaGlsZCIsIkFTU0VUX0xPQURfRVJST1IiLCJTeW1ib2wiLCJkZWZpbmVQcm9wZXJ0eSIsImFwcGVuZFNjcmlwdCIsInNjcmlwdCIsInJlamVjdCIsInJlc29sdmVQcm9taXNlV2l0aFRpbWVvdXQiLCJtcyIsImNhbmNlbGxlZCIsInIiLCJfX0JVSUxEX01BTklGRVNUIiwib25CdWlsZE1hbmlmZXN0IiwiX19CVUlMRF9NQU5JRkVTVF9DQiIsImdldEZpbGVzRm9yUm91dGUiLCJhc3NldFByZWZpeCIsInJvdXRlIiwic2NyaXB0cyIsImVuY29kZVVSSSIsImNzcyIsIm1hbmlmZXN0IiwiYWxsRmlsZXMiLCJ2IiwiY3JlYXRlUm91dGVMb2FkZXIiLCJlbnRyeXBvaW50cyIsIk1hcCIsImxvYWRlZFNjcmlwdHMiLCJzdHlsZVNoZWV0cyIsInJvdXRlcyIsIm1heWJlRXhlY3V0ZVNjcmlwdCIsImZldGNoU3R5bGVTaGVldCIsImZldGNoIiwib2siLCJ3aGVuRW50cnlwb2ludCIsIm9uRW50cnlwb2ludCIsImV4ZWN1dGUiLCJmbiIsImNvbXBvbmVudCIsImlucHV0Iiwib2xkIiwibG9hZFJvdXRlIiwiYWxsIiwiaGFzIiwiZW50cnlwb2ludCIsImFzc2lnbiIsImNuIiwibmF2aWdhdG9yIiwiY29ubmVjdGlvbiIsInNhdmVEYXRhIiwiZWZmZWN0aXZlVHlwZSIsIm91dHB1dCIsIm1ha2VQdWJsaWNSb3V0ZXJJbnN0YW5jZSIsIk5leHRSb3V0ZXIiLCJfcm91dGVyQ29udGV4dCIsIl93aXRoUm91dGVyIiwic2luZ2xldG9uUm91dGVyIiwicmVhZHlDYWxsYmFja3MiLCJyZWFkeSIsInVybFByb3BlcnR5RmllbGRzIiwicm91dGVyRXZlbnRzIiwiY29yZU1ldGhvZEZpZWxkcyIsImV2ZW50cyIsImZpZWxkIiwiZ2V0Um91dGVyIiwib24iLCJldmVudEZpZWxkIiwidG9VcHBlckNhc2UiLCJfc2luZ2xldG9uUm91dGVyIiwic3RhY2siLCJ1c2VDb250ZXh0IiwiUm91dGVyQ29udGV4dCIsImNyZWF0ZVJvdXRlciIsImluc3RhbmNlIiwicHJvcGVydHkiLCJBcnJheSIsImlzQXJyYXkiLCJoYXNJbnRlcnNlY3Rpb25PYnNlcnZlciIsIkludGVyc2VjdGlvbk9ic2VydmVyIiwiaXNEaXNhYmxlZCIsInVub2JzZXJ2ZSIsInZpc2libGUiLCJzZXRWaXNpYmxlIiwidW5kZWZpbmVkIiwidGFnTmFtZSIsIm9ic2VydmUiLCJpZGxlQ2FsbGJhY2siLCJlbGVtZW50IiwiY2FsbGJhY2siLCJvYnNlcnZlciIsImNyZWF0ZU9ic2VydmVyIiwiZGVsZXRlIiwic2l6ZSIsImRpc2Nvbm5lY3QiLCJvYnNlcnZlcnMiLCJlbnRyaWVzIiwiaXNJbnRlcnNlY3RpbmciLCJpbnRlcnNlY3Rpb25SYXRpbyIsIndpdGhSb3V0ZXIiLCJDb21wb3NlZENvbXBvbmVudCIsIldpdGhSb3V0ZXJXcmFwcGVyIiwiZ2V0SW5pdGlhbFByb3BzIiwib3JpZ0dldEluaXRpYWxQcm9wcyIsImRpc3BsYXlOYW1lIiwiZGV0ZWN0RG9tYWluTG9jYWxlIiwiZG9tYWluSXRlbXMiLCJob3N0bmFtZSIsImRldGVjdGVkTG9jYWxlIiwiZG9tYWluSXRlbSIsInRvTG93ZXJDYXNlIiwiaXRlbSIsIl9pdGVtJGRvbWFpbiIsIl9pdGVtJGxvY2FsZXMiLCJkb21haW5Ib3N0bmFtZSIsImRvbWFpbiIsInNvbWUiLCJub3JtYWxpemVMb2NhbGVQYXRoIiwicGF0aG5hbWVQYXJ0cyIsInNwbGljZSIsImpvaW4iLCJtaXR0IiwiY3JlYXRlIiwiaGFuZGxlciIsIm9mZiIsImVtaXQiLCJldnRzIiwiZGVsTG9jYWxlIiwiaGFzQmFzZVBhdGgiLCJkZWxCYXNlUGF0aCIsImludGVycG9sYXRlQXMiLCJfbm9ybWFsaXplVHJhaWxpbmdTbGFzaCIsIl9yb3V0ZUxvYWRlciIsIl9kZW5vcm1hbGl6ZVBhZ2VQYXRoIiwiX25vcm1hbGl6ZUxvY2FsZVBhdGgiLCJfbWl0dCIsIl91dGlscyIsIl9pc0R5bmFtaWMiLCJfcGFyc2VSZWxhdGl2ZVVybCIsIl9xdWVyeXN0cmluZyIsIl9yZXNvbHZlUmV3cml0ZXMiLCJfcm91dGVNYXRjaGVyIiwiX3JvdXRlUmVnZXgiLCJvYmoiLCJfX2VzTW9kdWxlIiwiYmFzZVBhdGgiLCJidWlsZENhbmNlbGxhdGlvbkVycm9yIiwiYWRkUGF0aFByZWZpeCIsInByZWZpeCIsInN0YXJ0c1dpdGgiLCJwYXRoTm9RdWVyeUhhc2giLCJkZXRlY3RlZERvbWFpbiIsImh0dHAiLCJwYXRoTG93ZXIiLCJsb2NhbGVMb3dlciIsInN1YnN0ciIsInF1ZXJ5SW5kZXgiLCJoYXNoSW5kZXgiLCJsb2NhdGlvbk9yaWdpbiIsImdldExvY2F0aW9uT3JpZ2luIiwicmVzb2x2ZWQiLCJVUkwiLCJvcmlnaW4iLCJhc1BhdGhuYW1lIiwicXVlcnkiLCJpbnRlcnBvbGF0ZWRSb3V0ZSIsImR5bmFtaWNSZWdleCIsImdldFJvdXRlUmVnZXgiLCJkeW5hbWljR3JvdXBzIiwiZ3JvdXBzIiwiZHluYW1pY01hdGNoZXMiLCJnZXRSb3V0ZU1hdGNoZXIiLCJwYXJhbXMiLCJldmVyeSIsInBhcmFtIiwicmVwZWF0Iiwib3B0aW9uYWwiLCJyZXBsYWNlZCIsInNlZ21lbnQiLCJlbmNvZGVVUklDb21wb25lbnQiLCJyZXN1bHQiLCJvbWl0UGFybXNGcm9tUXVlcnkiLCJmaWx0ZXJlZFF1ZXJ5IiwiaW5jbHVkZXMiLCJyZXNvbHZlQXMiLCJiYXNlIiwidXJsQXNTdHJpbmciLCJmb3JtYXRXaXRoVmFsaWRhdGlvbiIsImFzUGF0aCIsImZpbmFsVXJsIiwiaW50ZXJwb2xhdGVkQXMiLCJpc0R5bmFtaWNSb3V0ZSIsInNlYXJjaFBhcmFtcyIsInNlYXJjaFBhcmFtc1RvVXJsUXVlcnkiLCJoYXNoIiwic3RyaXBPcmlnaW4iLCJwcmVwYXJlVXJsQXMiLCJocmVmSGFkT3JpZ2luIiwiYXNIYWRPcmlnaW4iLCJwcmVwYXJlZFVybCIsInByZXBhcmVkQXMiLCJyZXNvbHZlRHluYW1pY1JvdXRlIiwicGFnZXMiLCJjbGVhblBhdGhuYW1lIiwiZGVub3JtYWxpemVQYWdlUGF0aCIsInBhZ2UiLCJyZSIsIm1hbnVhbFNjcm9sbFJlc3RvcmF0aW9uIiwiU1NHX0RBVEFfTk9UX0ZPVU5EIiwiZmV0Y2hSZXRyeSIsImF0dGVtcHRzIiwiY3JlZGVudGlhbHMiLCJqc29uIiwibm90Rm91bmQiLCJmZXRjaE5leHREYXRhIiwiZGF0YUhyZWYiLCJpc1NlcnZlclJlbmRlciIsIlJvdXRlciIsImNvbnN0cnVjdG9yIiwiX3BhdGhuYW1lIiwiX3F1ZXJ5IiwiX2FzIiwiaW5pdGlhbFByb3BzIiwicGFnZUxvYWRlciIsIkFwcCIsIndyYXBBcHAiLCJDb21wb25lbnQiLCJzdWJzY3JpcHRpb24iLCJpc0ZhbGxiYWNrIiwiaXNQcmV2aWV3IiwiY29tcG9uZW50cyIsInNkYyIsInNkciIsInN1YiIsImNsYyIsIl9icHMiLCJfd3JhcEFwcCIsImlzU3NyIiwiX2luRmxpZ2h0Um91dGUiLCJfc2hhbGxvdyIsImlzUmVhZHkiLCJfaWR4Iiwib25Qb3BTdGF0ZSIsImNoYW5nZVN0YXRlIiwiZ2V0VVJMIiwiX19OIiwiZm9yY2VkU2Nyb2xsIiwiaWR4IiwicGFyc2VSZWxhdGl2ZVVybCIsImNoYW5nZSIsImluaXRpYWwiLCJfX05fU1NHIiwiX19OX1NTUCIsImF1dG9FeHBvcnREeW5hbWljIiwiX19ORVhUX0RBVEFfXyIsImF1dG9FeHBvcnQiLCJnc3NwIiwiZ2lwIiwibG9jYXRpb24iLCJzZWFyY2giLCJyZWxvYWQiLCJiYWNrIiwiaGlzdG9yeSIsInNob3VsZFJlc29sdmVIcmVmIiwiX2giLCJfc2hvdWxkUmVzb2x2ZUhyZWYiLCJsb2NhbGVDaGFuZ2UiLCJwYXJzZWRBcyIsImxvY2FsZVBhdGhSZXN1bHQiLCJkaWROYXZpZ2F0ZSIsIl90aGlzJGxvY2FsZXMiLCJhc05vQmFzZVBhdGgiLCJTVCIsInBlcmZvcm1hbmNlIiwibWFyayIsInJvdXRlUHJvcHMiLCJhYm9ydENvbXBvbmVudExvYWQiLCJjbGVhbmVkQXMiLCJvbmx5QUhhc2hDaGFuZ2UiLCJzY3JvbGxUb0hhc2giLCJub3RpZnkiLCJwYXJzZWQiLCJyZXdyaXRlcyIsImdldFBhZ2VMaXN0IiwiX19yZXdyaXRlcyIsInVybElzTmV3Iiwicm91dGVSZWdleCIsInJvdXRlTWF0Y2giLCJzaG91bGRJbnRlcnBvbGF0ZSIsIm1pc3NpbmdQYXJhbXMiLCJfc2VsZiRfX05FWFRfREFUQV9fJHAiLCJfc2VsZiRfX05FWFRfREFUQV9fJHAyIiwiX29wdGlvbnMkc2Nyb2xsIiwicm91dGVJbmZvIiwiZ2V0Um91dGVJbmZvIiwicGFnZVByb3BzIiwiX19OX1JFRElSRUNUIiwicGFyc2VkSHJlZiIsIm5ld1VybCIsIm5ld0FzIiwiX19OX1BSRVZJRVciLCJub3RGb3VuZFJvdXRlIiwiZmV0Y2hDb21wb25lbnQiLCJhcHBDb21wIiwibmV4dCIsImlzUHJlcmVuZGVyZWQiLCJzdGF0dXNDb2RlIiwiaXNWYWxpZFNoYWxsb3dSb3V0ZSIsInNob3VsZFNjcm9sbCIsInJlc2V0U2Nyb2xsIiwieSIsImRvY3VtZW50RWxlbWVudCIsImhhbmRsZVJvdXRlSW5mb0Vycm9yIiwibG9hZEVycm9yRmFpbCIsImdpcEVyciIsInJvdXRlSW5mb0VyciIsImV4aXN0aW5nUm91dGVJbmZvIiwiY2FjaGVkUm91dGVJbmZvIiwibW9kIiwiaXNWYWxpZEVsZW1lbnRUeXBlIiwiZ2V0RGF0YUhyZWYiLCJfZ2V0RGF0YSIsIl9nZXRTdGF0aWNEYXRhIiwiX2dldFNlcnZlckRhdGEiLCJiZWZvcmVQb3BTdGF0ZSIsIm9sZFVybE5vSGFzaCIsIm9sZEhhc2giLCJuZXdVcmxOb0hhc2giLCJuZXdIYXNoIiwiaWRFbCIsInNjcm9sbEludG9WaWV3IiwibmFtZUVsIiwiZ2V0RWxlbWVudHNCeU5hbWUiLCJfaXNTc2ciLCJpc1NzZyIsImNhbmNlbCIsImNvbXBvbmVudFJlc3VsdCIsImxvYWRQYWdlIiwiY2FjaGVLZXkiLCJyZXNvdXJjZUtleSIsImN0eCIsIkFwcFRyZWUiLCJsb2FkR2V0SW5pdGlhbFByb3BzIiwiZm9ybWF0VXJsIiwicXVlcnlzdHJpbmciLCJfZ2V0UmVxdWlyZVdpbGRjYXJkQ2FjaGUiLCJXZWFrTWFwIiwiY2FjaGUiLCJuZXdPYmoiLCJoYXNQcm9wZXJ0eURlc2NyaXB0b3IiLCJnZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3IiLCJwcm90b3R5cGUiLCJoYXNPd25Qcm9wZXJ0eSIsImNhbGwiLCJkZXNjIiwic2xhc2hlZFByb3RvY29scyIsInVybE9iaiIsInByb3RvY29sIiwicG9ydCIsIlN0cmluZyIsInVybFF1ZXJ5VG9TZWFyY2hQYXJhbXMiLCJzbGFzaGVzIiwiVEVTVF9ST1VURSIsImdsb2JhbEJhc2UiLCJyZXNvbHZlZEJhc2UiLCJzdHJpbmdpZnlVcmxRdWVyeVBhcmFtIiwiaXNOYU4iLCJ1cmxRdWVyeSIsIlVSTFNlYXJjaFBhcmFtcyIsImFwcGVuZCIsInNlYXJjaFBhcmFtc0xpc3QiLCJmcm9tIiwiZXhlYyIsImRlY29kZSIsImRlY29kZVVSSUNvbXBvbmVudCIsInNsdWdOYW1lIiwiZyIsIm0iLCJwb3MiLCJlc2NhcGVSZWdleCIsInN0ciIsInBhcnNlUGFyYW1ldGVyIiwibm9ybWFsaXplZFJvdXRlIiwic2VnbWVudHMiLCJncm91cEluZGV4IiwicGFyYW1ldGVyaXplZFJvdXRlIiwicm91dGVLZXlDaGFyQ29kZSIsInJvdXRlS2V5Q2hhckxlbmd0aCIsImdldFNhZmVSb3V0ZUtleSIsInJvdXRlS2V5IiwiZnJvbUNoYXJDb2RlIiwicm91dGVLZXlzIiwibmFtZWRQYXJhbWV0ZXJpemVkUm91dGUiLCJjbGVhbmVkS2V5IiwiaW52YWxpZEtleSIsInBhcnNlSW50IiwiUmVnRXhwIiwibmFtZWRSZWdleCIsImV4ZWNPbmNlIiwiZ2V0RGlzcGxheU5hbWUiLCJpc1Jlc1NlbnQiLCJfZm9ybWF0VXJsIiwidXNlZCIsImZpbmlzaGVkIiwiaGVhZGVyc1NlbnQiLCJfQXBwJHByb3RvdHlwZSIsInVybE9iamVjdEtleXMiLCJTUCIsIm1lYXN1cmUiLCJfX1BhZ2VfTmV4dF9UcmFuc2xhdGVfXyIsIk15QXBwIiwic3RvcmUiLCJnZXRTZXJ2ZXJTaWRlUHJvcHMiLCJjb250ZXh0IiwicmVzZXRTZXJ2ZXJDb250ZXh0IiwiX19hcHBXaXRoSTE4biIsIl9faTE4bkNvbmZpZyIsImlzTG9hZGVyIiwic2tpcEluaXRpYWxQcm9wcyIsImxvYWRMb2NhbGVGcm9tIiwibCIsIm4iLCJtYXRjaFNsaWNlIiwiY3JlYXRlU2xpY2UiLCJpbml0aWFsU3RhdGUiLCJtYXRjaElkIiwicmVkdWNlcnMiLCJzZXRNYXRjaElkIiwiYWN0aW9uIiwiYWN0aW9ucyIsImdldE1hdGNoSWQiLCJtYXRjaCIsInJlZHVjZXIiLCJ1c2VyU2xpY2UiLCJzZWxlY3RVc2VyIiwiY29uZmlndXJlU3RvcmUiLCJ1c2VyUmVkdWNlciIsIm1hdGNoUmVkdWNlciIsInVzZXJJY29uIiwiYmlydGhEYXRlIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7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QUFDQTs7Ozs7Ozs7Ozs7QUNMQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7OztBQ0pBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7O0FDSkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7QUNKQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7QUNIQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7OztBQ1BBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7O0FDSkE7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7O0FDSEE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7QUNWQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7QUNOQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7OztBQ0pBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7QUNSQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7OztBQ1BBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7QUNSQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7O0FDTEE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7QUNWQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7O0FDUkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7OztBQ1hBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7QUNSQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7OztBQ1BBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7O0FDUEE7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7O0FDSEE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7O0FDWkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7OztBQ0xBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7O0FDUEE7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7O0FDSEE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7QUNKQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7QUNIQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7O0FDZEE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7QUNQQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNMQSxxRDs7Ozs7Ozs7Ozs7QUNBQSw4Qzs7Ozs7Ozs7Ozs7QUNBQSxtQzs7Ozs7Ozs7Ozs7QUNBQSx3RDs7Ozs7Ozs7Ozs7QUNBQSwyRDs7Ozs7Ozs7Ozs7QUNBQSx5RTs7Ozs7Ozs7Ozs7QUNBQSxpRzs7Ozs7Ozs7Ozs7QUNBQSx1Qzs7Ozs7Ozs7Ozs7QUNBQSxtQzs7Ozs7Ozs7Ozs7QUNBQSxpRDs7Ozs7Ozs7Ozs7QUNBQSx1Qzs7Ozs7Ozs7Ozs7QUNBQSxrRDs7Ozs7Ozs7Ozs7QUNBQSxnRDs7Ozs7Ozs7Ozs7QUNBQSw2Qzs7Ozs7Ozs7Ozs7QUNBQSxzQzs7Ozs7Ozs7Ozs7QUNBQSx5Qzs7Ozs7Ozs7Ozs7QUNBQSw0Qzs7Ozs7Ozs7Ozs7QUNBQSxpRDs7Ozs7Ozs7Ozs7QUNBQSxtRDs7Ozs7Ozs7Ozs7QUNBQSxpQzs7Ozs7Ozs7OztBQ0FBLGUiLCJmaWxlIjoicGFnZXMvX2FwcC5qcyIsInNvdXJjZXNDb250ZW50IjpbInZhciBtYXAgPSB7XG5cdFwiLi9hbS9hYm91dFVzXCI6IFtcblx0XHRcIi4vbG9jYWxlcy9hbS9hYm91dFVzLmpzb25cIixcblx0XHRcImxvY2FsZXNfYW1fYWJvdXRVc19qc29uXCJcblx0XSxcblx0XCIuL2FtL2Fib3V0VXMuanNvblwiOiBbXG5cdFx0XCIuL2xvY2FsZXMvYW0vYWJvdXRVcy5qc29uXCIsXG5cdFx0XCJsb2NhbGVzX2FtX2Fib3V0VXNfanNvblwiXG5cdF0sXG5cdFwiLi9hbS9jb21tb25cIjogW1xuXHRcdFwiLi9sb2NhbGVzL2FtL2NvbW1vbi5qc29uXCIsXG5cdFx0XCJsb2NhbGVzX2FtX2NvbW1vbl9qc29uXCJcblx0XSxcblx0XCIuL2FtL2NvbW1vbi5qc29uXCI6IFtcblx0XHRcIi4vbG9jYWxlcy9hbS9jb21tb24uanNvblwiLFxuXHRcdFwibG9jYWxlc19hbV9jb21tb25fanNvblwiXG5cdF0sXG5cdFwiLi9hbS9nYW1lc1wiOiBbXG5cdFx0XCIuL2xvY2FsZXMvYW0vZ2FtZXMuanNvblwiLFxuXHRcdFwibG9jYWxlc19hbV9nYW1lc19qc29uXCJcblx0XSxcblx0XCIuL2FtL2dhbWVzLmpzb25cIjogW1xuXHRcdFwiLi9sb2NhbGVzL2FtL2dhbWVzLmpzb25cIixcblx0XHRcImxvY2FsZXNfYW1fZ2FtZXNfanNvblwiXG5cdF0sXG5cdFwiLi9hbS9ob21lXCI6IFtcblx0XHRcIi4vbG9jYWxlcy9hbS9ob21lLmpzb25cIixcblx0XHRcImxvY2FsZXNfYW1faG9tZV9qc29uXCJcblx0XSxcblx0XCIuL2FtL2hvbWUuanNvblwiOiBbXG5cdFx0XCIuL2xvY2FsZXMvYW0vaG9tZS5qc29uXCIsXG5cdFx0XCJsb2NhbGVzX2FtX2hvbWVfanNvblwiXG5cdF0sXG5cdFwiLi9hbS9wZXJzb25hbFwiOiBbXG5cdFx0XCIuL2xvY2FsZXMvYW0vcGVyc29uYWwuanNvblwiLFxuXHRcdFwibG9jYWxlc19hbV9wZXJzb25hbF9qc29uXCJcblx0XSxcblx0XCIuL2FtL3BlcnNvbmFsLmpzb25cIjogW1xuXHRcdFwiLi9sb2NhbGVzL2FtL3BlcnNvbmFsLmpzb25cIixcblx0XHRcImxvY2FsZXNfYW1fcGVyc29uYWxfanNvblwiXG5cdF0sXG5cdFwiLi9hbS9wcmVkaWN0aW9uXCI6IFtcblx0XHRcIi4vbG9jYWxlcy9hbS9wcmVkaWN0aW9uLmpzb25cIixcblx0XHRcImxvY2FsZXNfYW1fcHJlZGljdGlvbl9qc29uXCJcblx0XSxcblx0XCIuL2FtL3ByZWRpY3Rpb24uanNvblwiOiBbXG5cdFx0XCIuL2xvY2FsZXMvYW0vcHJlZGljdGlvbi5qc29uXCIsXG5cdFx0XCJsb2NhbGVzX2FtX3ByZWRpY3Rpb25fanNvblwiXG5cdF0sXG5cdFwiLi9hbS9zdGF0aXN0aWNzXCI6IFtcblx0XHRcIi4vbG9jYWxlcy9hbS9zdGF0aXN0aWNzLmpzb25cIixcblx0XHRcImxvY2FsZXNfYW1fc3RhdGlzdGljc19qc29uXCJcblx0XSxcblx0XCIuL2FtL3N0YXRpc3RpY3MuanNvblwiOiBbXG5cdFx0XCIuL2xvY2FsZXMvYW0vc3RhdGlzdGljcy5qc29uXCIsXG5cdFx0XCJsb2NhbGVzX2FtX3N0YXRpc3RpY3NfanNvblwiXG5cdF0sXG5cdFwiLi9hbS90ZXN0aW1vbmlhbHNcIjogW1xuXHRcdFwiLi9sb2NhbGVzL2FtL3Rlc3RpbW9uaWFscy5qc29uXCIsXG5cdFx0XCJsb2NhbGVzX2FtX3Rlc3RpbW9uaWFsc19qc29uXCJcblx0XSxcblx0XCIuL2FtL3Rlc3RpbW9uaWFscy5qc29uXCI6IFtcblx0XHRcIi4vbG9jYWxlcy9hbS90ZXN0aW1vbmlhbHMuanNvblwiLFxuXHRcdFwibG9jYWxlc19hbV90ZXN0aW1vbmlhbHNfanNvblwiXG5cdF0sXG5cdFwiLi9kZXUvYWJvdXRVc1wiOiBbXG5cdFx0XCIuL2xvY2FsZXMvZGV1L2Fib3V0VXMuanNvblwiLFxuXHRcdFwibG9jYWxlc19kZXVfYWJvdXRVc19qc29uXCJcblx0XSxcblx0XCIuL2RldS9hYm91dFVzLmpzb25cIjogW1xuXHRcdFwiLi9sb2NhbGVzL2RldS9hYm91dFVzLmpzb25cIixcblx0XHRcImxvY2FsZXNfZGV1X2Fib3V0VXNfanNvblwiXG5cdF0sXG5cdFwiLi9kZXUvY29tbW9uXCI6IFtcblx0XHRcIi4vbG9jYWxlcy9kZXUvY29tbW9uLmpzb25cIixcblx0XHRcImxvY2FsZXNfZGV1X2NvbW1vbl9qc29uXCJcblx0XSxcblx0XCIuL2RldS9jb21tb24uanNvblwiOiBbXG5cdFx0XCIuL2xvY2FsZXMvZGV1L2NvbW1vbi5qc29uXCIsXG5cdFx0XCJsb2NhbGVzX2RldV9jb21tb25fanNvblwiXG5cdF0sXG5cdFwiLi9kZXUvZ2FtZXNcIjogW1xuXHRcdFwiLi9sb2NhbGVzL2RldS9nYW1lcy5qc29uXCIsXG5cdFx0XCJsb2NhbGVzX2RldV9nYW1lc19qc29uXCJcblx0XSxcblx0XCIuL2RldS9nYW1lcy5qc29uXCI6IFtcblx0XHRcIi4vbG9jYWxlcy9kZXUvZ2FtZXMuanNvblwiLFxuXHRcdFwibG9jYWxlc19kZXVfZ2FtZXNfanNvblwiXG5cdF0sXG5cdFwiLi9kZXUvaG9tZVwiOiBbXG5cdFx0XCIuL2xvY2FsZXMvZGV1L2hvbWUuanNvblwiLFxuXHRcdFwibG9jYWxlc19kZXVfaG9tZV9qc29uXCJcblx0XSxcblx0XCIuL2RldS9ob21lLmpzb25cIjogW1xuXHRcdFwiLi9sb2NhbGVzL2RldS9ob21lLmpzb25cIixcblx0XHRcImxvY2FsZXNfZGV1X2hvbWVfanNvblwiXG5cdF0sXG5cdFwiLi9kZXUvcGVyc29uYWxcIjogW1xuXHRcdFwiLi9sb2NhbGVzL2RldS9wZXJzb25hbC5qc29uXCIsXG5cdFx0XCJsb2NhbGVzX2RldV9wZXJzb25hbF9qc29uXCJcblx0XSxcblx0XCIuL2RldS9wZXJzb25hbC5qc29uXCI6IFtcblx0XHRcIi4vbG9jYWxlcy9kZXUvcGVyc29uYWwuanNvblwiLFxuXHRcdFwibG9jYWxlc19kZXVfcGVyc29uYWxfanNvblwiXG5cdF0sXG5cdFwiLi9kZXUvcHJlZGljdGlvblwiOiBbXG5cdFx0XCIuL2xvY2FsZXMvZGV1L3ByZWRpY3Rpb24uanNvblwiLFxuXHRcdFwibG9jYWxlc19kZXVfcHJlZGljdGlvbl9qc29uXCJcblx0XSxcblx0XCIuL2RldS9wcmVkaWN0aW9uLmpzb25cIjogW1xuXHRcdFwiLi9sb2NhbGVzL2RldS9wcmVkaWN0aW9uLmpzb25cIixcblx0XHRcImxvY2FsZXNfZGV1X3ByZWRpY3Rpb25fanNvblwiXG5cdF0sXG5cdFwiLi9kZXUvc3RhdGlzdGljc1wiOiBbXG5cdFx0XCIuL2xvY2FsZXMvZGV1L3N0YXRpc3RpY3MuanNvblwiLFxuXHRcdFwibG9jYWxlc19kZXVfc3RhdGlzdGljc19qc29uXCJcblx0XSxcblx0XCIuL2RldS9zdGF0aXN0aWNzLmpzb25cIjogW1xuXHRcdFwiLi9sb2NhbGVzL2RldS9zdGF0aXN0aWNzLmpzb25cIixcblx0XHRcImxvY2FsZXNfZGV1X3N0YXRpc3RpY3NfanNvblwiXG5cdF0sXG5cdFwiLi9kZXUvdGVzdGltb25pYWxzXCI6IFtcblx0XHRcIi4vbG9jYWxlcy9kZXUvdGVzdGltb25pYWxzLmpzb25cIixcblx0XHRcImxvY2FsZXNfZGV1X3Rlc3RpbW9uaWFsc19qc29uXCJcblx0XSxcblx0XCIuL2RldS90ZXN0aW1vbmlhbHMuanNvblwiOiBbXG5cdFx0XCIuL2xvY2FsZXMvZGV1L3Rlc3RpbW9uaWFscy5qc29uXCIsXG5cdFx0XCJsb2NhbGVzX2RldV90ZXN0aW1vbmlhbHNfanNvblwiXG5cdF0sXG5cdFwiLi9lbi9hYm91dFVzXCI6IFtcblx0XHRcIi4vbG9jYWxlcy9lbi9hYm91dFVzLmpzb25cIixcblx0XHRcImxvY2FsZXNfZW5fYWJvdXRVc19qc29uXCJcblx0XSxcblx0XCIuL2VuL2Fib3V0VXMuanNvblwiOiBbXG5cdFx0XCIuL2xvY2FsZXMvZW4vYWJvdXRVcy5qc29uXCIsXG5cdFx0XCJsb2NhbGVzX2VuX2Fib3V0VXNfanNvblwiXG5cdF0sXG5cdFwiLi9lbi9jb21tb25cIjogW1xuXHRcdFwiLi9sb2NhbGVzL2VuL2NvbW1vbi5qc29uXCIsXG5cdFx0XCJsb2NhbGVzX2VuX2NvbW1vbl9qc29uXCJcblx0XSxcblx0XCIuL2VuL2NvbW1vbi5qc29uXCI6IFtcblx0XHRcIi4vbG9jYWxlcy9lbi9jb21tb24uanNvblwiLFxuXHRcdFwibG9jYWxlc19lbl9jb21tb25fanNvblwiXG5cdF0sXG5cdFwiLi9lbi9nYW1lc1wiOiBbXG5cdFx0XCIuL2xvY2FsZXMvZW4vZ2FtZXMuanNvblwiLFxuXHRcdFwibG9jYWxlc19lbl9nYW1lc19qc29uXCJcblx0XSxcblx0XCIuL2VuL2dhbWVzLmpzb25cIjogW1xuXHRcdFwiLi9sb2NhbGVzL2VuL2dhbWVzLmpzb25cIixcblx0XHRcImxvY2FsZXNfZW5fZ2FtZXNfanNvblwiXG5cdF0sXG5cdFwiLi9lbi9ob21lXCI6IFtcblx0XHRcIi4vbG9jYWxlcy9lbi9ob21lLmpzb25cIixcblx0XHRcImxvY2FsZXNfZW5faG9tZV9qc29uXCJcblx0XSxcblx0XCIuL2VuL2hvbWUuanNvblwiOiBbXG5cdFx0XCIuL2xvY2FsZXMvZW4vaG9tZS5qc29uXCIsXG5cdFx0XCJsb2NhbGVzX2VuX2hvbWVfanNvblwiXG5cdF0sXG5cdFwiLi9lbi9wZXJzb25hbFwiOiBbXG5cdFx0XCIuL2xvY2FsZXMvZW4vcGVyc29uYWwuanNvblwiLFxuXHRcdFwibG9jYWxlc19lbl9wZXJzb25hbF9qc29uXCJcblx0XSxcblx0XCIuL2VuL3BlcnNvbmFsLmpzb25cIjogW1xuXHRcdFwiLi9sb2NhbGVzL2VuL3BlcnNvbmFsLmpzb25cIixcblx0XHRcImxvY2FsZXNfZW5fcGVyc29uYWxfanNvblwiXG5cdF0sXG5cdFwiLi9lbi9wcmVkaWN0aW9uXCI6IFtcblx0XHRcIi4vbG9jYWxlcy9lbi9wcmVkaWN0aW9uLmpzb25cIixcblx0XHRcImxvY2FsZXNfZW5fcHJlZGljdGlvbl9qc29uXCJcblx0XSxcblx0XCIuL2VuL3ByZWRpY3Rpb24uanNvblwiOiBbXG5cdFx0XCIuL2xvY2FsZXMvZW4vcHJlZGljdGlvbi5qc29uXCIsXG5cdFx0XCJsb2NhbGVzX2VuX3ByZWRpY3Rpb25fanNvblwiXG5cdF0sXG5cdFwiLi9lbi9zdGF0aXN0aWNzXCI6IFtcblx0XHRcIi4vbG9jYWxlcy9lbi9zdGF0aXN0aWNzLmpzb25cIixcblx0XHRcImxvY2FsZXNfZW5fc3RhdGlzdGljc19qc29uXCJcblx0XSxcblx0XCIuL2VuL3N0YXRpc3RpY3MuanNvblwiOiBbXG5cdFx0XCIuL2xvY2FsZXMvZW4vc3RhdGlzdGljcy5qc29uXCIsXG5cdFx0XCJsb2NhbGVzX2VuX3N0YXRpc3RpY3NfanNvblwiXG5cdF0sXG5cdFwiLi9lbi90ZXN0aW1vbmlhbHNcIjogW1xuXHRcdFwiLi9sb2NhbGVzL2VuL3Rlc3RpbW9uaWFscy5qc29uXCIsXG5cdFx0XCJsb2NhbGVzX2VuX3Rlc3RpbW9uaWFsc19qc29uXCJcblx0XSxcblx0XCIuL2VuL3Rlc3RpbW9uaWFscy5qc29uXCI6IFtcblx0XHRcIi4vbG9jYWxlcy9lbi90ZXN0aW1vbmlhbHMuanNvblwiLFxuXHRcdFwibG9jYWxlc19lbl90ZXN0aW1vbmlhbHNfanNvblwiXG5cdF0sXG5cdFwiLi9lc3AvYWJvdXRVc1wiOiBbXG5cdFx0XCIuL2xvY2FsZXMvZXNwL2Fib3V0VXMuanNvblwiLFxuXHRcdFwibG9jYWxlc19lc3BfYWJvdXRVc19qc29uXCJcblx0XSxcblx0XCIuL2VzcC9hYm91dFVzLmpzb25cIjogW1xuXHRcdFwiLi9sb2NhbGVzL2VzcC9hYm91dFVzLmpzb25cIixcblx0XHRcImxvY2FsZXNfZXNwX2Fib3V0VXNfanNvblwiXG5cdF0sXG5cdFwiLi9lc3AvY29tbW9uXCI6IFtcblx0XHRcIi4vbG9jYWxlcy9lc3AvY29tbW9uLmpzb25cIixcblx0XHRcImxvY2FsZXNfZXNwX2NvbW1vbl9qc29uXCJcblx0XSxcblx0XCIuL2VzcC9jb21tb24uanNvblwiOiBbXG5cdFx0XCIuL2xvY2FsZXMvZXNwL2NvbW1vbi5qc29uXCIsXG5cdFx0XCJsb2NhbGVzX2VzcF9jb21tb25fanNvblwiXG5cdF0sXG5cdFwiLi9lc3AvZ2FtZXNcIjogW1xuXHRcdFwiLi9sb2NhbGVzL2VzcC9nYW1lcy5qc29uXCIsXG5cdFx0XCJsb2NhbGVzX2VzcF9nYW1lc19qc29uXCJcblx0XSxcblx0XCIuL2VzcC9nYW1lcy5qc29uXCI6IFtcblx0XHRcIi4vbG9jYWxlcy9lc3AvZ2FtZXMuanNvblwiLFxuXHRcdFwibG9jYWxlc19lc3BfZ2FtZXNfanNvblwiXG5cdF0sXG5cdFwiLi9lc3AvaG9tZVwiOiBbXG5cdFx0XCIuL2xvY2FsZXMvZXNwL2hvbWUuanNvblwiLFxuXHRcdFwibG9jYWxlc19lc3BfaG9tZV9qc29uXCJcblx0XSxcblx0XCIuL2VzcC9ob21lLmpzb25cIjogW1xuXHRcdFwiLi9sb2NhbGVzL2VzcC9ob21lLmpzb25cIixcblx0XHRcImxvY2FsZXNfZXNwX2hvbWVfanNvblwiXG5cdF0sXG5cdFwiLi9lc3AvcGVyc29uYWxcIjogW1xuXHRcdFwiLi9sb2NhbGVzL2VzcC9wZXJzb25hbC5qc29uXCIsXG5cdFx0XCJsb2NhbGVzX2VzcF9wZXJzb25hbF9qc29uXCJcblx0XSxcblx0XCIuL2VzcC9wZXJzb25hbC5qc29uXCI6IFtcblx0XHRcIi4vbG9jYWxlcy9lc3AvcGVyc29uYWwuanNvblwiLFxuXHRcdFwibG9jYWxlc19lc3BfcGVyc29uYWxfanNvblwiXG5cdF0sXG5cdFwiLi9lc3AvcHJlZGljdGlvblwiOiBbXG5cdFx0XCIuL2xvY2FsZXMvZXNwL3ByZWRpY3Rpb24uanNvblwiLFxuXHRcdFwibG9jYWxlc19lc3BfcHJlZGljdGlvbl9qc29uXCJcblx0XSxcblx0XCIuL2VzcC9wcmVkaWN0aW9uLmpzb25cIjogW1xuXHRcdFwiLi9sb2NhbGVzL2VzcC9wcmVkaWN0aW9uLmpzb25cIixcblx0XHRcImxvY2FsZXNfZXNwX3ByZWRpY3Rpb25fanNvblwiXG5cdF0sXG5cdFwiLi9lc3Avc3RhdGlzdGljc1wiOiBbXG5cdFx0XCIuL2xvY2FsZXMvZXNwL3N0YXRpc3RpY3MuanNvblwiLFxuXHRcdFwibG9jYWxlc19lc3Bfc3RhdGlzdGljc19qc29uXCJcblx0XSxcblx0XCIuL2VzcC9zdGF0aXN0aWNzLmpzb25cIjogW1xuXHRcdFwiLi9sb2NhbGVzL2VzcC9zdGF0aXN0aWNzLmpzb25cIixcblx0XHRcImxvY2FsZXNfZXNwX3N0YXRpc3RpY3NfanNvblwiXG5cdF0sXG5cdFwiLi9lc3AvdGVzdGltb25pYWxzXCI6IFtcblx0XHRcIi4vbG9jYWxlcy9lc3AvdGVzdGltb25pYWxzLmpzb25cIixcblx0XHRcImxvY2FsZXNfZXNwX3Rlc3RpbW9uaWFsc19qc29uXCJcblx0XSxcblx0XCIuL2VzcC90ZXN0aW1vbmlhbHMuanNvblwiOiBbXG5cdFx0XCIuL2xvY2FsZXMvZXNwL3Rlc3RpbW9uaWFscy5qc29uXCIsXG5cdFx0XCJsb2NhbGVzX2VzcF90ZXN0aW1vbmlhbHNfanNvblwiXG5cdF0sXG5cdFwiLi9mci9hYm91dFVzXCI6IFtcblx0XHRcIi4vbG9jYWxlcy9mci9hYm91dFVzLmpzb25cIixcblx0XHRcImxvY2FsZXNfZnJfYWJvdXRVc19qc29uXCJcblx0XSxcblx0XCIuL2ZyL2Fib3V0VXMuanNvblwiOiBbXG5cdFx0XCIuL2xvY2FsZXMvZnIvYWJvdXRVcy5qc29uXCIsXG5cdFx0XCJsb2NhbGVzX2ZyX2Fib3V0VXNfanNvblwiXG5cdF0sXG5cdFwiLi9mci9jb21tb25cIjogW1xuXHRcdFwiLi9sb2NhbGVzL2ZyL2NvbW1vbi5qc29uXCIsXG5cdFx0XCJsb2NhbGVzX2ZyX2NvbW1vbl9qc29uXCJcblx0XSxcblx0XCIuL2ZyL2NvbW1vbi5qc29uXCI6IFtcblx0XHRcIi4vbG9jYWxlcy9mci9jb21tb24uanNvblwiLFxuXHRcdFwibG9jYWxlc19mcl9jb21tb25fanNvblwiXG5cdF0sXG5cdFwiLi9mci9nYW1lc1wiOiBbXG5cdFx0XCIuL2xvY2FsZXMvZnIvZ2FtZXMuanNvblwiLFxuXHRcdFwibG9jYWxlc19mcl9nYW1lc19qc29uXCJcblx0XSxcblx0XCIuL2ZyL2dhbWVzLmpzb25cIjogW1xuXHRcdFwiLi9sb2NhbGVzL2ZyL2dhbWVzLmpzb25cIixcblx0XHRcImxvY2FsZXNfZnJfZ2FtZXNfanNvblwiXG5cdF0sXG5cdFwiLi9mci9ob21lXCI6IFtcblx0XHRcIi4vbG9jYWxlcy9mci9ob21lLmpzb25cIixcblx0XHRcImxvY2FsZXNfZnJfaG9tZV9qc29uXCJcblx0XSxcblx0XCIuL2ZyL2hvbWUuanNvblwiOiBbXG5cdFx0XCIuL2xvY2FsZXMvZnIvaG9tZS5qc29uXCIsXG5cdFx0XCJsb2NhbGVzX2ZyX2hvbWVfanNvblwiXG5cdF0sXG5cdFwiLi9mci9wZXJzb25hbFwiOiBbXG5cdFx0XCIuL2xvY2FsZXMvZnIvcGVyc29uYWwuanNvblwiLFxuXHRcdFwibG9jYWxlc19mcl9wZXJzb25hbF9qc29uXCJcblx0XSxcblx0XCIuL2ZyL3BlcnNvbmFsLmpzb25cIjogW1xuXHRcdFwiLi9sb2NhbGVzL2ZyL3BlcnNvbmFsLmpzb25cIixcblx0XHRcImxvY2FsZXNfZnJfcGVyc29uYWxfanNvblwiXG5cdF0sXG5cdFwiLi9mci9wcmVkaWN0aW9uXCI6IFtcblx0XHRcIi4vbG9jYWxlcy9mci9wcmVkaWN0aW9uLmpzb25cIixcblx0XHRcImxvY2FsZXNfZnJfcHJlZGljdGlvbl9qc29uXCJcblx0XSxcblx0XCIuL2ZyL3ByZWRpY3Rpb24uanNvblwiOiBbXG5cdFx0XCIuL2xvY2FsZXMvZnIvcHJlZGljdGlvbi5qc29uXCIsXG5cdFx0XCJsb2NhbGVzX2ZyX3ByZWRpY3Rpb25fanNvblwiXG5cdF0sXG5cdFwiLi9mci9zdGF0aXN0aWNzXCI6IFtcblx0XHRcIi4vbG9jYWxlcy9mci9zdGF0aXN0aWNzLmpzb25cIixcblx0XHRcImxvY2FsZXNfZnJfc3RhdGlzdGljc19qc29uXCJcblx0XSxcblx0XCIuL2ZyL3N0YXRpc3RpY3MuanNvblwiOiBbXG5cdFx0XCIuL2xvY2FsZXMvZnIvc3RhdGlzdGljcy5qc29uXCIsXG5cdFx0XCJsb2NhbGVzX2ZyX3N0YXRpc3RpY3NfanNvblwiXG5cdF0sXG5cdFwiLi9mci90ZXN0aW1vbmlhbHNcIjogW1xuXHRcdFwiLi9sb2NhbGVzL2ZyL3Rlc3RpbW9uaWFscy5qc29uXCIsXG5cdFx0XCJsb2NhbGVzX2ZyX3Rlc3RpbW9uaWFsc19qc29uXCJcblx0XSxcblx0XCIuL2ZyL3Rlc3RpbW9uaWFscy5qc29uXCI6IFtcblx0XHRcIi4vbG9jYWxlcy9mci90ZXN0aW1vbmlhbHMuanNvblwiLFxuXHRcdFwibG9jYWxlc19mcl90ZXN0aW1vbmlhbHNfanNvblwiXG5cdF0sXG5cdFwiLi9ycy9hYm91dFVzXCI6IFtcblx0XHRcIi4vbG9jYWxlcy9ycy9hYm91dFVzLmpzb25cIixcblx0XHRcImxvY2FsZXNfcnNfYWJvdXRVc19qc29uXCJcblx0XSxcblx0XCIuL3JzL2Fib3V0VXMuanNvblwiOiBbXG5cdFx0XCIuL2xvY2FsZXMvcnMvYWJvdXRVcy5qc29uXCIsXG5cdFx0XCJsb2NhbGVzX3JzX2Fib3V0VXNfanNvblwiXG5cdF0sXG5cdFwiLi9ycy9jb21tb25cIjogW1xuXHRcdFwiLi9sb2NhbGVzL3JzL2NvbW1vbi5qc29uXCIsXG5cdFx0XCJsb2NhbGVzX3JzX2NvbW1vbl9qc29uXCJcblx0XSxcblx0XCIuL3JzL2NvbW1vbi5qc29uXCI6IFtcblx0XHRcIi4vbG9jYWxlcy9ycy9jb21tb24uanNvblwiLFxuXHRcdFwibG9jYWxlc19yc19jb21tb25fanNvblwiXG5cdF0sXG5cdFwiLi9ycy9nYW1lc1wiOiBbXG5cdFx0XCIuL2xvY2FsZXMvcnMvZ2FtZXMuanNvblwiLFxuXHRcdFwibG9jYWxlc19yc19nYW1lc19qc29uXCJcblx0XSxcblx0XCIuL3JzL2dhbWVzLmpzb25cIjogW1xuXHRcdFwiLi9sb2NhbGVzL3JzL2dhbWVzLmpzb25cIixcblx0XHRcImxvY2FsZXNfcnNfZ2FtZXNfanNvblwiXG5cdF0sXG5cdFwiLi9ycy9ob21lXCI6IFtcblx0XHRcIi4vbG9jYWxlcy9ycy9ob21lLmpzb25cIixcblx0XHRcImxvY2FsZXNfcnNfaG9tZV9qc29uXCJcblx0XSxcblx0XCIuL3JzL2hvbWUuanNvblwiOiBbXG5cdFx0XCIuL2xvY2FsZXMvcnMvaG9tZS5qc29uXCIsXG5cdFx0XCJsb2NhbGVzX3JzX2hvbWVfanNvblwiXG5cdF0sXG5cdFwiLi9ycy9wZXJzb25hbFwiOiBbXG5cdFx0XCIuL2xvY2FsZXMvcnMvcGVyc29uYWwuanNvblwiLFxuXHRcdFwibG9jYWxlc19yc19wZXJzb25hbF9qc29uXCJcblx0XSxcblx0XCIuL3JzL3BlcnNvbmFsLmpzb25cIjogW1xuXHRcdFwiLi9sb2NhbGVzL3JzL3BlcnNvbmFsLmpzb25cIixcblx0XHRcImxvY2FsZXNfcnNfcGVyc29uYWxfanNvblwiXG5cdF0sXG5cdFwiLi9ycy9wcmVkaWN0aW9uXCI6IFtcblx0XHRcIi4vbG9jYWxlcy9ycy9wcmVkaWN0aW9uLmpzb25cIixcblx0XHRcImxvY2FsZXNfcnNfcHJlZGljdGlvbl9qc29uXCJcblx0XSxcblx0XCIuL3JzL3ByZWRpY3Rpb24uanNvblwiOiBbXG5cdFx0XCIuL2xvY2FsZXMvcnMvcHJlZGljdGlvbi5qc29uXCIsXG5cdFx0XCJsb2NhbGVzX3JzX3ByZWRpY3Rpb25fanNvblwiXG5cdF0sXG5cdFwiLi9ycy9zdGF0aXN0aWNzXCI6IFtcblx0XHRcIi4vbG9jYWxlcy9ycy9zdGF0aXN0aWNzLmpzb25cIixcblx0XHRcImxvY2FsZXNfcnNfc3RhdGlzdGljc19qc29uXCJcblx0XSxcblx0XCIuL3JzL3N0YXRpc3RpY3MuanNvblwiOiBbXG5cdFx0XCIuL2xvY2FsZXMvcnMvc3RhdGlzdGljcy5qc29uXCIsXG5cdFx0XCJsb2NhbGVzX3JzX3N0YXRpc3RpY3NfanNvblwiXG5cdF0sXG5cdFwiLi9ycy90ZXN0aW1vbmlhbHNcIjogW1xuXHRcdFwiLi9sb2NhbGVzL3JzL3Rlc3RpbW9uaWFscy5qc29uXCIsXG5cdFx0XCJsb2NhbGVzX3JzX3Rlc3RpbW9uaWFsc19qc29uXCJcblx0XSxcblx0XCIuL3JzL3Rlc3RpbW9uaWFscy5qc29uXCI6IFtcblx0XHRcIi4vbG9jYWxlcy9ycy90ZXN0aW1vbmlhbHMuanNvblwiLFxuXHRcdFwibG9jYWxlc19yc190ZXN0aW1vbmlhbHNfanNvblwiXG5cdF1cbn07XG5mdW5jdGlvbiB3ZWJwYWNrQXN5bmNDb250ZXh0KHJlcSkge1xuXHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKG1hcCwgcmVxKSkge1xuXHRcdHJldHVybiBQcm9taXNlLnJlc29sdmUoKS50aGVuKGZ1bmN0aW9uKCkge1xuXHRcdFx0dmFyIGUgPSBuZXcgRXJyb3IoXCJDYW5ub3QgZmluZCBtb2R1bGUgJ1wiICsgcmVxICsgXCInXCIpO1xuXHRcdFx0ZS5jb2RlID0gJ01PRFVMRV9OT1RfRk9VTkQnO1xuXHRcdFx0dGhyb3cgZTtcblx0XHR9KTtcblx0fVxuXG5cdHZhciBpZHMgPSBtYXBbcmVxXSwgaWQgPSBpZHNbMF07XG5cdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fLmUoaWRzWzFdKS50aGVuKGZ1bmN0aW9uKCkge1xuXHRcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fLnQoaWQsIDMgfCAxNik7XG5cdH0pO1xufVxud2VicGFja0FzeW5jQ29udGV4dC5rZXlzID0gZnVuY3Rpb24oKSB7IHJldHVybiBPYmplY3Qua2V5cyhtYXApOyB9O1xud2VicGFja0FzeW5jQ29udGV4dC5pZCA9IFwiLi9sb2NhbGVzIGxhenkgcmVjdXJzaXZlIF5cXFxcLlxcXFwvLipcXFxcLy4qJFwiO1xubW9kdWxlLmV4cG9ydHMgPSB3ZWJwYWNrQXN5bmNDb250ZXh0OyIsImZ1bmN0aW9uIF9pbnRlcm9wUmVxdWlyZURlZmF1bHQob2JqKSB7XG4gIHJldHVybiBvYmogJiYgb2JqLl9fZXNNb2R1bGUgPyBvYmogOiB7XG4gICAgXCJkZWZhdWx0XCI6IG9ialxuICB9O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQ7IiwidmFyIF90eXBlb2YgPSByZXF1aXJlKFwiQGJhYmVsL3J1bnRpbWUvaGVscGVycy90eXBlb2ZcIik7XG5cbmZ1bmN0aW9uIF9nZXRSZXF1aXJlV2lsZGNhcmRDYWNoZSgpIHtcbiAgaWYgKHR5cGVvZiBXZWFrTWFwICE9PSBcImZ1bmN0aW9uXCIpIHJldHVybiBudWxsO1xuICB2YXIgY2FjaGUgPSBuZXcgV2Vha01hcCgpO1xuXG4gIF9nZXRSZXF1aXJlV2lsZGNhcmRDYWNoZSA9IGZ1bmN0aW9uIF9nZXRSZXF1aXJlV2lsZGNhcmRDYWNoZSgpIHtcbiAgICByZXR1cm4gY2FjaGU7XG4gIH07XG5cbiAgcmV0dXJuIGNhY2hlO1xufVxuXG5mdW5jdGlvbiBfaW50ZXJvcFJlcXVpcmVXaWxkY2FyZChvYmopIHtcbiAgaWYgKG9iaiAmJiBvYmouX19lc01vZHVsZSkge1xuICAgIHJldHVybiBvYmo7XG4gIH1cblxuICBpZiAob2JqID09PSBudWxsIHx8IF90eXBlb2Yob2JqKSAhPT0gXCJvYmplY3RcIiAmJiB0eXBlb2Ygb2JqICE9PSBcImZ1bmN0aW9uXCIpIHtcbiAgICByZXR1cm4ge1xuICAgICAgXCJkZWZhdWx0XCI6IG9ialxuICAgIH07XG4gIH1cblxuICB2YXIgY2FjaGUgPSBfZ2V0UmVxdWlyZVdpbGRjYXJkQ2FjaGUoKTtcblxuICBpZiAoY2FjaGUgJiYgY2FjaGUuaGFzKG9iaikpIHtcbiAgICByZXR1cm4gY2FjaGUuZ2V0KG9iaik7XG4gIH1cblxuICB2YXIgbmV3T2JqID0ge307XG4gIHZhciBoYXNQcm9wZXJ0eURlc2NyaXB0b3IgPSBPYmplY3QuZGVmaW5lUHJvcGVydHkgJiYgT2JqZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvcjtcblxuICBmb3IgKHZhciBrZXkgaW4gb2JqKSB7XG4gICAgaWYgKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIGtleSkpIHtcbiAgICAgIHZhciBkZXNjID0gaGFzUHJvcGVydHlEZXNjcmlwdG9yID8gT2JqZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvcihvYmosIGtleSkgOiBudWxsO1xuXG4gICAgICBpZiAoZGVzYyAmJiAoZGVzYy5nZXQgfHwgZGVzYy5zZXQpKSB7XG4gICAgICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShuZXdPYmosIGtleSwgZGVzYyk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBuZXdPYmpba2V5XSA9IG9ialtrZXldO1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIG5ld09ialtcImRlZmF1bHRcIl0gPSBvYmo7XG5cbiAgaWYgKGNhY2hlKSB7XG4gICAgY2FjaGUuc2V0KG9iaiwgbmV3T2JqKTtcbiAgfVxuXG4gIHJldHVybiBuZXdPYmo7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gX2ludGVyb3BSZXF1aXJlV2lsZGNhcmQ7IiwiZnVuY3Rpb24gX3R5cGVvZihvYmopIHtcbiAgXCJAYmFiZWwvaGVscGVycyAtIHR5cGVvZlwiO1xuXG4gIGlmICh0eXBlb2YgU3ltYm9sID09PSBcImZ1bmN0aW9uXCIgJiYgdHlwZW9mIFN5bWJvbC5pdGVyYXRvciA9PT0gXCJzeW1ib2xcIikge1xuICAgIG1vZHVsZS5leHBvcnRzID0gX3R5cGVvZiA9IGZ1bmN0aW9uIF90eXBlb2Yob2JqKSB7XG4gICAgICByZXR1cm4gdHlwZW9mIG9iajtcbiAgICB9O1xuICB9IGVsc2Uge1xuICAgIG1vZHVsZS5leHBvcnRzID0gX3R5cGVvZiA9IGZ1bmN0aW9uIF90eXBlb2Yob2JqKSB7XG4gICAgICByZXR1cm4gb2JqICYmIHR5cGVvZiBTeW1ib2wgPT09IFwiZnVuY3Rpb25cIiAmJiBvYmouY29uc3RydWN0b3IgPT09IFN5bWJvbCAmJiBvYmogIT09IFN5bWJvbC5wcm90b3R5cGUgPyBcInN5bWJvbFwiIDogdHlwZW9mIG9iajtcbiAgICB9O1xuICB9XG5cbiAgcmV0dXJuIF90eXBlb2Yob2JqKTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBfdHlwZW9mOyIsIlwidXNlIHN0cmljdFwiO2V4cG9ydHMuX19lc01vZHVsZT10cnVlO2V4cG9ydHMubm9ybWFsaXplUGF0aFNlcD1ub3JtYWxpemVQYXRoU2VwO2V4cG9ydHMuZGVub3JtYWxpemVQYWdlUGF0aD1kZW5vcm1hbGl6ZVBhZ2VQYXRoO2Z1bmN0aW9uIG5vcm1hbGl6ZVBhdGhTZXAocGF0aCl7cmV0dXJuIHBhdGgucmVwbGFjZSgvXFxcXC9nLCcvJyk7fWZ1bmN0aW9uIGRlbm9ybWFsaXplUGFnZVBhdGgocGFnZSl7cGFnZT1ub3JtYWxpemVQYXRoU2VwKHBhZ2UpO2lmKHBhZ2Uuc3RhcnRzV2l0aCgnL2luZGV4LycpKXtwYWdlPXBhZ2Uuc2xpY2UoNik7fWVsc2UgaWYocGFnZT09PScvaW5kZXgnKXtwYWdlPScvJzt9cmV0dXJuIHBhZ2U7fVxuLy8jIHNvdXJjZU1hcHBpbmdVUkw9ZGVub3JtYWxpemUtcGFnZS1wYXRoLmpzLm1hcCIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZSgnLi9kaXN0L2NsaWVudC9saW5rJylcbiIsImltcG9ydCBiYWxsSWNvbiBmcm9tICcvcHVibGljL2ltYWdlcy9mb290ZXIvbGVmdEJhbGwucG5nJ1xyXG5pbXBvcnQgc3R5bGVzIGZyb20gJy4vQmFsbC5tb2R1bGUuc2NzcydcclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBCYWxsKCkge1xyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmNvbnRhaW5lcn0+XHJcbiAgICAgICAgICAgIDxpbWdcclxuICAgICAgICAgICAgICAgIHNyYz17YmFsbEljb24uc3JjfVxyXG4gICAgICAgICAgICAgICAgY2xhc3NOYW1lPXtzdHlsZXMuYmFsbH1cclxuICAgICAgICAgICAgICAgIGFsdD1cImJhbGwtcG5nXCJcclxuICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy50ZXh0X3dpdGhfYmFsbH0+XHJcbiAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9e3N0eWxlcy50b3B9PkZPT1Q8L3A+XHJcbiAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9e3N0eWxlcy5ib3R0b219PkJFVDwvcD5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICApXHJcbn1cclxuIiwiLy9cclxuaW1wb3J0IHsgdXNlUm91dGVyIH0gZnJvbSAnbmV4dC9kaXN0L2NsaWVudC9yb3V0ZXInXHJcbmltcG9ydCB7IEJhbGwgfSBmcm9tICcuL0JhbGwvQmFsbCdcclxuLy8gc3R5bGVzXHJcbmltcG9ydCBzdHlsZXMgZnJvbSAnLi9Gb290ZXIubW9kdWxlLnNjc3MnXHJcbmltcG9ydCB7IE5hdmlnYXRpb24gfSBmcm9tICcuL05hdmlnYXRpb24vTmF2aWdhdGlvbidcclxuaW1wb3J0IHsgU29jaWFsTWVkaWEgfSBmcm9tICcuL1NvY2lhbE1lZGlhL1NvY2lhbE1lZGlhJ1xyXG4vLyBpY29uXHJcbmltcG9ydCBiYWxsSWNvbiBmcm9tICcvcHVibGljL2ltYWdlcy9wZXJzb25hbC9iYWxsLnBuZydcclxuXHJcbi8vIFRPRE8gY2xpY2sgZXZlbnRzIG9uIGljb25zXHJcblxyXG5leHBvcnQgZnVuY3Rpb24gRm9vdGVyKCkge1xyXG4gICAgY29uc3Qgcm91dGVyID0gdXNlUm91dGVyKClcclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5jb250YWluZXJ9PlxyXG4gICAgICAgICAgICA8QmFsbCAvPlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmNvbnRlbnR9PlxyXG4gICAgICAgICAgICAgICAgPE5hdmlnYXRpb24gLz5cclxuICAgICAgICAgICAgICAgIDxTb2NpYWxNZWRpYSAvPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAge3JvdXRlci5wYXRobmFtZSA9PT0gJy9wZXJzb25hbCcgJiZcclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuYmFsbH0+XHJcbiAgICAgICAgICAgICAgICAgICAgPGltZyBzcmM9e2JhbGxJY29uLnNyY30gYWx0PVwiYmFsbC1pY29uXCIgLz5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICApXHJcbn1cclxuIiwiaW1wb3J0IHVzZVRyYW5zbGF0aW9uIGZyb20gXCJuZXh0LXRyYW5zbGF0ZS91c2VUcmFuc2xhdGlvblwiO1xyXG5pbXBvcnQgTGluayBmcm9tIFwibmV4dC9saW5rXCI7XHJcbmltcG9ydCBzdHlsZXMgZnJvbSBcIi4vTGlzdC5tb2R1bGUuc2Nzc1wiO1xyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIExpc3QoeyBsaXN0X2l0ZW1zID0gW10sIGJvcmRlcnNBY3RpdmUgfSkge1xyXG4gIGNvbnN0IHsgdCB9ID0gdXNlVHJhbnNsYXRpb24oXCJjb21tb25cIiksXHJcbiAgICB0cmFuc2xhdGlvblBhdGggPSBcImZvb3Rlci5uYXZpZ2F0aW9uLlwiLFxyXG4gICAgdHJhbnNsYXRlID0gKGtleSkgPT4gdChgJHt0cmFuc2xhdGlvblBhdGh9JHtrZXl9YCk7XHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8ZGl2IGNsYXNzTmFtZT17YCR7c3R5bGVzLmNvbnRhaW5lcn0gJHtib3JkZXJzQWN0aXZlICYmIHN0eWxlcy5ib3JkZXJzfWB9PlxyXG4gICAgICA8dWw+XHJcbiAgICAgICAge2xpc3RfaXRlbXMubWFwKChlbCkgPT4gKFxyXG4gICAgICAgICAgPExpbmsgaHJlZj17ZWwubGlua30ga2V5PXtNYXRoLnJhbmRvbSgpfT5cclxuICAgICAgICAgICAgPGxpPnt0cmFuc2xhdGUoZWwubmFtZSl9PC9saT5cclxuICAgICAgICAgIDwvTGluaz5cclxuICAgICAgICApKX1cclxuICAgICAgPC91bD5cclxuICAgIDwvZGl2PlxyXG4gICk7XHJcbn1cclxuIiwiLy8gc3R5bGVzXHJcbmltcG9ydCB7IExpc3QgfSBmcm9tICcuL0xpc3QvTGlzdCdcclxuaW1wb3J0IHN0eWxlcyBmcm9tICcuL05hdmlnYXRpb24ubW9kdWxlLnNjc3MnXHJcbi8vIGRhdGFzXHJcbmltcG9ydCB7IG5hdl9kYXRhIH0gZnJvbSAnLi9uYXZfZGF0YSdcclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBOYXZpZ2F0aW9uKCkge1xyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmNvbnRhaW5lcn0+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuY29udGVudH0+XHJcbiAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgbmF2X2RhdGEubWFwKChlbCwgaSkgPT4gKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8TGlzdFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbGlzdF9pdGVtcz17ZWx9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBib3JkZXJzQWN0aXZlPXtpID09PSAxID8gdHJ1ZSA6IGZhbHNlfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAga2V5PXtNYXRoLnJhbmRvbSgpfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICAgICkpXHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgKVxyXG59XHJcbiIsImV4cG9ydCBjb25zdCBuYXZfZGF0YSA9IFtcclxuICAgIFtcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIGxpbms6Jy9wcmVkaWN0aW9uJyxcclxuICAgICAgICAgICAgbmFtZTogJ3ByZWRpY3Rpb24nXHJcbiAgICAgICAgfSxcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIGxpbms6Jy9nYW1lcycsXHJcbiAgICAgICAgICAgIG5hbWU6ICdnYW1lcydcclxuICAgICAgICB9LFxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgbGluazonLycsXHJcbiAgICAgICAgICAgIG5hbWU6ICduZXdzJ1xyXG4gICAgICAgIH0gICBcclxuICAgIF0sXHJcbiAgICBbXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBsaW5rOicvYWJvdXRVcycsXHJcbiAgICAgICAgICAgIG5hbWU6ICdhYm91dFVzJ1xyXG4gICAgICAgIH0sXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBsaW5rOicvcHJlZGljdGlvbicsXHJcbiAgICAgICAgICAgIG5hbWU6ICdwYXltZW50J1xyXG4gICAgICAgIH0sXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBsaW5rOicvc3RhdGlzdGljcycsXHJcbiAgICAgICAgICAgIG5hbWU6ICdtYXRjaFN0YXRpc3RpY3MnXHJcbiAgICAgICAgfVxyXG4gICAgXSxcclxuICAgIFtcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIGxpbms6Jy9yZWdpc3RyYXRpb24nLFxyXG4gICAgICAgICAgICBuYW1lOiAncmVnaXN0ZXInXHJcbiAgICAgICAgfSxcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIGxpbms6Jy90ZXN0aW1vbmlhbHMnLFxyXG4gICAgICAgICAgICBuYW1lOiAnZmVlZGJhY2tzJ1xyXG4gICAgICAgIH0sXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBsaW5rOicvJyxcclxuICAgICAgICAgICAgbmFtZTogJ2NvbnRhY3RzJ1xyXG4gICAgICAgIH0sXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBsaW5rOicvcHJpdmFjeS1wb2xpY3knLFxyXG4gICAgICAgICAgICBuYW1lOiAncHJpdmFjeS1wb2xpY3knXHJcbiAgICAgICAgfVxyXG4gICAgXSxcclxuXVxyXG5cclxuXHJcblxyXG5cclxuXHJcbiIsIi8vIHN0eWxlc1xyXG5pbXBvcnQgc3R5bGVzIGZyb20gJy4vUFMubW9kdWxlLnNjc3MnXHJcbi8vIGljb25zXHJcbmltcG9ydCBwYXlQYWwgZnJvbSAnL3B1YmxpYy9pbWFnZXMvZm9vdGVyL3BheXBhbC5wbmcnXHJcbmltcG9ydCB2aXNhIGZyb20gJy9wdWJsaWMvaW1hZ2VzL2Zvb3Rlci92aXNhLnBuZydcclxuaW1wb3J0IG1hc3RlckNhcmQgZnJvbSAnL3B1YmxpYy9pbWFnZXMvZm9vdGVyL21hc3RlckNhcmQucG5nJ1xyXG4vLyBjb21wb25lbnRzXHJcbmltcG9ydCB7IEljb24gfSBmcm9tICcuLi9jb21tb24vSWNvbi9JY29uJ1xyXG5cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBQUygpIHtcclxuXHJcbiAgICBjb25zdFxyXG4gICAgICAgIC8vIGNvbmZpZ1xyXG4gICAgICAgIGljb25zID0gW1xyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICBrZXk6IE1hdGgucmFuZG9tKCksXHJcbiAgICAgICAgICAgICAgICBzcmM6IHBheVBhbC5zcmMsXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIGtleTogTWF0aC5yYW5kb20oKSxcclxuICAgICAgICAgICAgICAgIHNyYzogdmlzYS5zcmMsXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIGtleTogTWF0aC5yYW5kb20oKSxcclxuICAgICAgICAgICAgICAgIHNyYzogbWFzdGVyQ2FyZC5zcmMsXHJcbiAgICAgICAgICAgICAgICBsYXN0RWxlbWVudDogdHJ1ZVxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgIF1cclxuXHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIDw+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuY29udGFpbmVyfT5cclxuICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICBpY29ucy5tYXAoZWwgPT4gKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8SWNvblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAga2V5PXtlbC5rZXl9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzcmM9e2VsLnNyY31cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzZXM9e3N0eWxlcy5pY29uc31cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxhc3RFbGVtZW50PXtlbC5sYXN0RWxlbWVudCAmJiBlbC5sYXN0RWxlbWVudH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAgICApKVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8Lz5cclxuICAgIClcclxufVxyXG4iLCIvLyBzdHlsZXNcclxuaW1wb3J0IHN0eWxlcyBmcm9tICcuL1NNLm1vZHVsZS5zY3NzJ1xyXG4vLyBpY29uc1xyXG5pbXBvcnQgcGhvbmUgZnJvbSAnL3B1YmxpYy9pbWFnZXMvaGVhZGVyL1NvY2lhbE1lZGlhL3Bob25lLnN2ZydcclxuaW1wb3J0IGZhY2Vib29rIGZyb20gJy9wdWJsaWMvaW1hZ2VzL2hlYWRlci9Tb2NpYWxNZWRpYS9mYWNlYm9vay5zdmcnXHJcbmltcG9ydCB0ZWxlZ3JhbSBmcm9tICcvcHVibGljL2ltYWdlcy9oZWFkZXIvU29jaWFsTWVkaWEvdGVsZWdyYW0uc3ZnJ1xyXG5pbXBvcnQgd2F0c3VwIGZyb20gJy9wdWJsaWMvaW1hZ2VzL2hlYWRlci9Tb2NpYWxNZWRpYS93YXRzdXAuc3ZnJ1xyXG5pbXBvcnQgaW5zdGFncmFtIGZyb20gJy9wdWJsaWMvaW1hZ2VzL2hlYWRlci9Tb2NpYWxNZWRpYS9pbnN0YWdyYW0uc3ZnJ1xyXG5pbXBvcnQgdmliZXIgZnJvbSAnL3B1YmxpYy9pbWFnZXMvaGVhZGVyL1NvY2lhbE1lZGlhL3ZpYmVyLnN2ZydcclxuLy8gY29tcG9uZW50c1xyXG5pbXBvcnQgeyBJY29uIH0gZnJvbSAnLi4vY29tbW9uL0ljb24vSWNvbidcclxuXHJcblxyXG5leHBvcnQgZnVuY3Rpb24gU00oKSB7XHJcblxyXG4gICAgY29uc3RcclxuICAgICAgICAvLyBjb25maWdcclxuICAgICAgICBpY29ucyA9IFtcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAga2V5OiBNYXRoLnJhbmRvbSgpLFxyXG4gICAgICAgICAgICAgICAgc3JjOiBwaG9uZS5zcmMsXHJcbiAgICAgICAgICAgICAgICB1cmw6IFwidGVsOiszNzQ5ODY0NTQ1N1wiXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIGtleTogTWF0aC5yYW5kb20oKSxcclxuICAgICAgICAgICAgICAgIHNyYzogZmFjZWJvb2suc3JjLFxyXG4gICAgICAgICAgICAgICAgdXJsOiBcImh0dHBzOi8vd3d3LmZhY2Vib29rLmNvbS8lRDAlOUYlRDElODAlRDAlQkUlRDAlQjMlRDAlQkQlRDAlQkUlRDAlQjclRDElOEItJUQwJUJEJUQwJUIwLSVEMCVBNCVEMSU4MyVEMSU4MiVEMCVCMSVEMCVCRSVEMCVCQi0xMDQ5NDEzNDc1Nzc5MTMvXCJcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAga2V5OiBNYXRoLnJhbmRvbSgpLFxyXG4gICAgICAgICAgICAgICAgc3JjOiB3YXRzdXAuc3JjLFxyXG4gICAgICAgICAgICAgICAgdXJsOiBcImh0dHBzOi8vYXBpLndoYXRzYXBwLmNvbS9zZW5kP3Bob25lPSszNzQ5ODY0NTQ1N1wiXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIGtleTogTWF0aC5yYW5kb20oKSxcclxuICAgICAgICAgICAgICAgIHNyYzogaW5zdGFncmFtLnNyYyxcclxuICAgICAgICAgICAgICAgIHVybDogXCJodHRwczovL3d3dy5pbnN0YWdyYW0uY29tL3Byb2dub3p5bmE1NTAvP3V0bV9tZWRpdW09Y29weV9saW5rXCJcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAga2V5OiBNYXRoLnJhbmRvbSgpLFxyXG4gICAgICAgICAgICAgICAgc3JjOiB2aWJlci5zcmMsXHJcbiAgICAgICAgICAgICAgICB1cmw6IFwidmliZXI6Ly9jaGF0P251bWJlcj0rMzc0OTg2NDU0NTdcIlxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICBrZXk6IE1hdGgucmFuZG9tKCksXHJcbiAgICAgICAgICAgICAgICBzcmM6IHRlbGVncmFtLnNyYyxcclxuICAgICAgICAgICAgICAgIHVybDogXCJodHRwczovL3RlbGVncmFtLm1lL2VybWFhbm5cIixcclxuICAgICAgICAgICAgICAgIGxhc3RFbGVtZW50OiB0cnVlXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgXVxyXG5cclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPD5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5jb250YWluZXJ9PlxyXG4gICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgIGljb25zLm1hcChlbCA9PiAoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxJY29uXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBrZXk9e2VsLmtleX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNyYz17ZWwuc3JjfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdXJsPXtlbC51cmx9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBlbGVtZW50cz17aWNvbnMubGVuZ3RofVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbGFzdEVsZW1lbnQ9e2VsLmxhc3RFbGVtZW50ICYmIGVsLmxhc3RFbGVtZW50fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICAgICkpXHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwvPlxyXG4gICAgKVxyXG59XHJcbiIsIi8vIGNvbXBvbmVudHNcclxuaW1wb3J0IHsgU00gfSBmcm9tICcuL1NNSWNvbnMvU00nXHJcbmltcG9ydCB7IFBTIH0gZnJvbSAnLi9QU0ljb25zL1BTJ1xyXG4vLyBzdHlsZXNcclxuaW1wb3J0IHN0eWxlcyBmcm9tICcuL1NvY2lhbE1lZGlhLm1vZHVsZS5zY3NzJ1xyXG4vLyB0cmFuc2xhdGlvbiBcclxuaW1wb3J0IHVzZVRyYW5zbGF0aW9uIGZyb20gJ25leHQtdHJhbnNsYXRlL3VzZVRyYW5zbGF0aW9uJ1xyXG5cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBTb2NpYWxNZWRpYSgpIHtcclxuXHJcbiAgICBjb25zdFxyXG4gICAgICAgIC8vIHRyYW5zbGF0aW9uXHJcbiAgICAgICAgeyB0IH0gPSB1c2VUcmFuc2xhdGlvbignY29tbW9uJyksXHJcbiAgICAgICAgdHJhbnNsYXRpb25QYXRoID0gJ2Zvb3Rlci5zb2NpYWxfbWVkaWFfcGF5bWFudHMnLFxyXG4gICAgICAgIHRyYW5zbGF0ZSA9IChrZXkpID0+IHQoYCR7dHJhbnNsYXRpb25QYXRofSR7a2V5fWApXHJcblxyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmNvbnRhaW5lcn0+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuY29udGVudH0+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmNvbnRyb2xlcn0+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5zb2NpYWxfbWVkaWFzfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPHA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdHJhbnNsYXRlKCcuU00udGl0bGUnKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L3A+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxTTSAvPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMucGF5bWVudF9zeXN0ZW1zfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPHA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdHJhbnNsYXRlKCcuUFMudGl0bGUnKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L3A+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxQUyAvPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwvZGl2ID5cclxuICAgIClcclxufVxyXG4iLCJpbXBvcnQgc3R5bGVzIGZyb20gJy4vSWNvbi5tb2R1bGUuc2NzcydcclxuaW1wb3J0IExpbmsgZnJvbSAnbmV4dC9saW5rJ1xyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIEljb24oe1xyXG4gICAgc3JjLFxyXG4gICAgY2xpY2sgPSBudWxsLFxyXG4gICAgbGFzdEVsZW1lbnQgPSBmYWxzZSxcclxuICAgIGVsZW1lbnRzLFxyXG4gICAgb3RoZXJTdHlsZXMgPSBudWxsLFxyXG4gICAgY2xhc3NlcyxcclxuICAgIHVybCA9IFwiXCIgfSkge1xyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8ZGl2XHJcbiAgICAgICAgICAgIHN0eWxlPXtlbGVtZW50cyA/IHsgd2lkdGg6IGAkezEwMCAvIGVsZW1lbnRzfSVgIH0gOiB7IHBhZGRpbmc6ICcwIDhweCcgfX1cclxuICAgICAgICAgICAgY2xhc3NOYW1lPXtgJHtzdHlsZXMuY29udGFpbmVyfSAke2xhc3RFbGVtZW50ID8gc3R5bGVzLmxhc3RfZWxlbWVudCA6IFwiXCJ9ICR7Y2xhc3Nlc31gfT5cclxuICAgICAgICAgICAgPExpbmsgaHJlZj17dXJsfSB0YXJnZXQ9XCJfYmxhbmtcIj5cclxuICAgICAgICAgICAgICAgIDxhIHRhcmdldD1cIl9ibGFua1wiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxpbWdcclxuICAgICAgICAgICAgICAgICAgICAgICAgc3JjPXtzcmN9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGFsdD17YGljb25zLSR7c3JjfWB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9e2NsaWNrfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBzdHlsZT17b3RoZXJTdHlsZXN9XHJcbiAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgIDwvYT5cclxuICAgICAgICAgICAgPC9MaW5rPlxyXG4gICAgICAgIDwvZGl2ID5cclxuICAgIClcclxufVxyXG4iLCIvLyBob29rcyBhbmQgaGVscGVyc1xyXG5pbXBvcnQgeyB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0J1xyXG4vLyBzdHlsZXNcclxuaW1wb3J0IHN0eWxlcyBmcm9tICcuL0Jhci5tb2R1bGUuc2NzcydcclxuLy8gdHJhbnNsYXRpb24gXHJcbmltcG9ydCB1c2VUcmFuc2xhdGlvbiBmcm9tICduZXh0LXRyYW5zbGF0ZS91c2VUcmFuc2xhdGlvbidcclxuLy9jb21wb25lbnRzXHJcbmltcG9ydCB7IExvZ2luIH0gZnJvbSAnLi9Mb2dpbi9Mb2dpbidcclxuaW1wb3J0IHsgQmFySXRlbXMgfSBmcm9tICcuL0Jhckl0ZW1zL0Jhckl0ZW1zJ1xyXG5pbXBvcnQgeyBMb2dvIH0gZnJvbSAnLi9Mb2dvL0xvZ28nXHJcbmltcG9ydCB7IHVzZVNlbGVjdG9yIH0gZnJvbSAncmVhY3QtcmVkdXgnXHJcbmltcG9ydCBEcm9wZG93biBmcm9tICcuL0Ryb3Bkb3duTWVudS9Ecm9wZG93bidcclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBCYXIoeyBiYXJfaXRlbXMsIGJhcl9pdGVtc19jb250IH0pIHtcclxuXHJcbiAgICBjb25zdFxyXG4gICAgICAgIHsgdCB9ID0gdXNlVHJhbnNsYXRpb24oJ2NvbW1vbicpLFxyXG4gICAgICAgIHRyYW5zbGF0aW9uUGF0aCA9ICdoZWFkZXIuJyxcclxuICAgICAgICB0cmFuc2xhdGUgPSAoa2V5KSA9PiB0KGAke3RyYW5zbGF0aW9uUGF0aH0ke2tleX1gKSxcclxuICAgICAgICAvLyBsb2dpbiBtb2RhbCBjb25maWdzXHJcbiAgICAgICAgW3Nob3dMb2dpbk1vZGFsLCBzZXRTaG93TG9naW5Nb2RhbF0gPSB1c2VTdGF0ZShmYWxzZSksXHJcbiAgICAgICAgdXNlcl9pbmZvID0gdXNlU2VsZWN0b3IoKHN0YXRlKSA9PiBzdGF0ZS51c2VyLnVzZXIpXHJcblxyXG4gICAgY29uc29sZS5sb2coIHVzZXJfaW5mbyApO1xyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT17YCR7c3R5bGVzLmJhcl9jb250YWluZXJ9ICR7YmFyX2l0ZW1zX2NvbnR9YH0+XHJcbiAgICAgICAgICAgIDxkaXY+XHJcbiAgICAgICAgICAgICAgICA8TG9nbyAvPlxyXG4gICAgICAgICAgICAgICAgPERyb3Bkb3duIC8+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8QmFySXRlbXNcclxuICAgICAgICAgICAgICAgIHVzZXJMb2dnZWQ9e3VzZXJfaW5mbyAhPT0gbnVsbCA/IHRydWUgOiBmYWxzZX1cclxuICAgICAgICAgICAgICAgIHJlZ2lzdHJhdGlvbj17dHJhbnNsYXRlKCdyZWdpc3RlcicpfVxyXG4gICAgICAgICAgICAgICAgbG9naW49e3RyYW5zbGF0ZSgnbG9naW4nKX1cclxuICAgICAgICAgICAgICAgIHJlZ2lzdHJhdGlvbl9wYXRoPScvcmVnaXN0cmF0aW9uJ1xyXG4gICAgICAgICAgICAgICAgbG9naW5Nb2RhbEhhbmRsZT17KCkgPT4gc2V0U2hvd0xvZ2luTW9kYWwodHJ1ZSl9XHJcbiAgICAgICAgICAgICAgICBiYXJfaXRlbXM9e2Jhcl9pdGVtc31cclxuICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAge3Nob3dMb2dpbk1vZGFsICYmIDxMb2dpbiBvbk1vZGFsQ2xvc2U9eygpID0+IHNldFNob3dMb2dpbk1vZGFsKGZhbHNlKX0gLz59XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICApXHJcbn1cclxuIiwiLy8gaG9va3MgYW5kIGhlbHBlcnNcclxuaW1wb3J0IHsgbGFuZ3VhZ2VzIH0gZnJvbSAnLi9MYW5ndWFnZURyb3BDb25maWdzL2xhbmctY29uZmlncydcclxuaW1wb3J0IHsgdXNlU3RhdGUsIHVzZUVmZmVjdCB9IGZyb20gJ3JlYWN0J1xyXG5pbXBvcnQgeyB1c2VyX2RhdGEgfSBmcm9tICcvc3JjL3VzZXIvdXNlcidcclxuaW1wb3J0IHsgdXNlUm91dGVyIH0gZnJvbSAnbmV4dC9kaXN0L2NsaWVudC9yb3V0ZXInXHJcbi8vIHRyYW5zbGF0aW9uIFxyXG5pbXBvcnQgdXNlVHJhbnNsYXRpb24gZnJvbSAnbmV4dC10cmFuc2xhdGUvdXNlVHJhbnNsYXRpb24nXHJcbi8vIHN0eWxlcyBcclxuaW1wb3J0IHN0eWxlcyBmcm9tICcuL0Jhckl0ZW1zLm1vZHVsZS5zY3NzJ1xyXG4vLyBjb21wb25lbnRzXHJcbmltcG9ydCBMaW5rIGZyb20gJ25leHQvbGluaydcclxuaW1wb3J0IHsgTGFuZ3VhZ2VEcm9wIH0gZnJvbSAnLi9MYW5ndWFnZURyb3AvTGFuZ3VhZ2VEcm9wJ1xyXG5pbXBvcnQgeyBMb2dnZWQgfSBmcm9tICcuL0xvZ2dlZC9Mb2dnZWQnXHJcbi8vIGljb25zXHJcbmltcG9ydCByZWdpc3Rlcl9pY29uIGZyb20gJy9wdWJsaWMvaW1hZ2VzL2hlYWRlci9yZWdpc3Rlci5wbmcnXHJcbmltcG9ydCBsb2dpbl9pY29uIGZyb20gJy9wdWJsaWMvaW1hZ2VzL2hlYWRlci9sb2dpbi5wbmcnXHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBCYXJJdGVtcyh7XHJcbiAgICByZWdpc3RyYXRpb24sXHJcbiAgICBsb2dpbixcclxuICAgIHJlZ2lzdHJhdGlvbl9wYXRoLFxyXG4gICAgbG9naW5Nb2RhbEhhbmRsZSxcclxuICAgIGJhcl9pdGVtcyxcclxuICAgIHVzZXJMb2dnZWQgfSkge1xyXG4gICAgICAgIFxyXG4gICAgICAgIGNvbnN0IHsgdCwgbGFuZyB9ID0gdXNlVHJhbnNsYXRpb24oJ2NvbW1vbicpO1xyXG4gICAgICAgIGNvbnN0IFtsYW5ndWFnZXNUaXRsZSwgc2V0TGFuZ3VhZ2VzVGl0bGVdID0gdXNlU3RhdGUobGFuZ3VhZ2VzWzFdKTtcclxuICAgICAgICB1c2VFZmZlY3QoICgpPT57XHJcbiAgICAgICAgICAgIGNvbnN0IG5ld0xhbmcgPSBsYW5ndWFnZXMuZmluZCggZWwgPT4gZWwubGFuZyA9PT0gbGFuZyApO1xyXG4gICAgICAgICAgICBpZiAoIG5ld0xhbmcgKSB7XHJcbiAgICAgICAgICAgICAgICBzZXRMYW5ndWFnZXNUaXRsZSggbmV3TGFuZyApO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSwgW2xhbmddICk7IFxyXG4gICAgICAgIFxyXG4gICAgICAgIGNvbnN0XHJcbiAgICAgICAgcm91dGVyID0gdXNlUm91dGVyKCksXHJcbiAgICAgICAgbGFuZ3VhZ2VzX2RhdGEgPSBsYW5ndWFnZXMsXHJcblxyXG4gICAgICAgIFtzaG93RHJvcCwgc2V0U2hvd0Ryb3BdID0gdXNlU3RhdGUoZmFsc2UpLFxyXG5cclxuICAgICAgICBjaGFuZ2VMYW5nVGl0bGUgPSAoZXZlbnQpID0+IHtcclxuICAgICAgICAgICAgbGV0IGxhbmdfdGl0bGVfZGF0YSA9IGxhbmd1YWdlc19kYXRhLmZpbHRlcihlbCA9PiBlbC5sYW5nID09PSBldmVudC50YXJnZXQuY2xhc3NOYW1lKVxyXG4gICAgICAgICAgICBzZXRMYW5ndWFnZXNUaXRsZShsYW5nX3RpdGxlX2RhdGFbMF0pXHJcbiAgICAgICAgICAgIHNldFNob3dEcm9wKGZhbHNlKVxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgXHJcbiAgICAgICAgdHJhbnNsYXRpb25QYXRoID0gJ2hlYWRlci5sYW5nLicsXHJcbiAgICAgICAgdHJhbnNsYXRlID0gKGtleSkgPT4gdChgJHt0cmFuc2xhdGlvblBhdGh9JHtrZXl9YClcclxuXHJcbiAgICBcclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPD5cclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e2Ake3N0eWxlcy5iYXJfaXRlbV9jb250YWluZXJ9ICR7YmFyX2l0ZW1zfSAke3JvdXRlci5wYXRobmFtZSAhPT0gJy8nID8gc3R5bGVzLmZvcl9tb2JpbGUgOiBudWxsfWB9PlxyXG4gICAgICAgICAgICAgICAgICAgIHt1c2VyTG9nZ2VkID8gPExvZ2dlZCBkYXRhPXt1c2VyX2RhdGF9IC8+IDpcclxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5hdXRoX2NvbnRhaW5lcn0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmF1dGhfYnV0dG9uc30+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5zaWduX3VwX2J1dHRvbn0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxMaW5rIGhyZWY9e3JlZ2lzdHJhdGlvbl9wYXRofT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpbWcgc3JjPXtyZWdpc3Rlcl9pY29uLnNyY30gYWx0PVwiXCIgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9MaW5rPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8TGluayBocmVmPXtyZWdpc3RyYXRpb25fcGF0aH0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJlZ2lzdHJhdGlvblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9MaW5rPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXZcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPXtzdHlsZXMuc2lnbl9pbl9idXR0b259XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9e2xvZ2luTW9kYWxIYW5kbGV9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aW1nIHNyYz17bG9naW5faWNvbi5zcmN9IGFsdD1cIlwiIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxvZ2luXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5sYW5nX2J1dHRvbn0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXZcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17c3R5bGVzLmxhbmdfYnV0dG9uX2NvbnRlbnR9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdHlsZT17c2hvd0Ryb3AgPyB7IGRpc3BsYXk6ICdub25lJyB9IDogbnVsbH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IHNldFNob3dEcm9wKHRydWUpfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRyYW5zbGF0ZShgJHtsYW5ndWFnZXNUaXRsZS5jb250ZW50T25UaXRsZX1gKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpbWdcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzcmM9e2xhbmd1YWdlc1RpdGxlLmljb259XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYWx0PVwibGFuZy1mbGFnXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICB7c2hvd0Ryb3AgJiYgPExhbmd1YWdlRHJvcFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xpY2s9e2NoYW5nZUxhbmdUaXRsZX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2xvc2U9eygpID0+IHNldFNob3dEcm9wKGZhbHNlKX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRhdGE9e2xhbmd1YWdlc19kYXRhfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAvPn1cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDwvZGl2ID5cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIDwvPlxyXG4gICAgKVxyXG59XHJcbiIsIi8vIGZsYWcgaWNvbnNcclxuaW1wb3J0IHJ1c0ZsYWcgZnJvbSAnL3B1YmxpYy9pbWFnZXMvaGVhZGVyL2ZsYWdzL3J1cy5wbmcnXHJcbmltcG9ydCBhcm1GbGFnIGZyb20gJy9wdWJsaWMvaW1hZ2VzL2hlYWRlci9mbGFncy9hcm0uc3ZnJ1xyXG5pbXBvcnQgZW5GbGFnIGZyb20gJy9wdWJsaWMvaW1hZ2VzL2hlYWRlci9mbGFncy9lbi5zdmcnXHJcbmltcG9ydCBlc3BGbGFnIGZyb20gJy9wdWJsaWMvaW1hZ2VzL2hlYWRlci9mbGFncy9lc3Auc3ZnJ1xyXG5pbXBvcnQgZnJjRmxhZyBmcm9tICcvcHVibGljL2ltYWdlcy9oZWFkZXIvZmxhZ3MvZnJjLnN2ZydcclxuaW1wb3J0IGRldUZsYWcgZnJvbSAnL3B1YmxpYy9pbWFnZXMvaGVhZGVyL2ZsYWdzL2RldS5zdmcnXHJcblxyXG5cclxuZXhwb3J0IGNvbnN0IGxhbmd1YWdlcyA9XHJcbiAgICBbXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBsYW5nOiBcImFtXCIsXHJcbiAgICAgICAgICAgIGNvbnRlbnRPblRpdGxlOiAnYW0ub25UaXRsZScsXHJcbiAgICAgICAgICAgIGNvbnRlbnRPbkRyb3A6ICdhbS5vbkRyb3AnLFxyXG4gICAgICAgICAgICBpY29uOiBhcm1GbGFnLnNyYyxcclxuICAgICAgICB9LFxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgbGFuZzogXCJyc1wiLFxyXG4gICAgICAgICAgICBjb250ZW50T25UaXRsZTogJ3JzLm9uVGl0bGUnLFxyXG4gICAgICAgICAgICBjb250ZW50T25Ecm9wOiAncnMub25Ecm9wJyxcclxuICAgICAgICAgICAgaWNvbjogcnVzRmxhZy5zcmMsXHJcbiAgICAgICAgfSxcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIGxhbmc6IFwiZW5cIixcclxuICAgICAgICAgICAgY29udGVudE9uVGl0bGU6ICdlbi5vblRpdGxlJyxcclxuICAgICAgICAgICAgY29udGVudE9uRHJvcDogJ2VuLm9uRHJvcCcsXHJcbiAgICAgICAgICAgIGljb246IGVuRmxhZy5zcmMsXHJcbiAgICAgICAgfSxcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIGxhbmc6IFwiZXNwXCIsXHJcbiAgICAgICAgICAgIGNvbnRlbnRPblRpdGxlOiAnZXNwLm9uVGl0bGUnLFxyXG4gICAgICAgICAgICBjb250ZW50T25Ecm9wOiAnZXNwLm9uRHJvcCcsXHJcbiAgICAgICAgICAgIGljb246IGVzcEZsYWcuc3JjLFxyXG4gICAgICAgIH0sXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBsYW5nOiBcImZyXCIsXHJcbiAgICAgICAgICAgIGNvbnRlbnRPblRpdGxlOiAnZnJjLm9uVGl0bGUnLFxyXG4gICAgICAgICAgICBjb250ZW50T25Ecm9wOiAnZnJjLm9uRHJvcCcsXHJcbiAgICAgICAgICAgIGljb246IGZyY0ZsYWcuc3JjLFxyXG4gICAgICAgIH0sXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBsYW5nOiBcImRldVwiLFxyXG4gICAgICAgICAgICBjb250ZW50T25UaXRsZTogJ2RldS5vblRpdGxlJyxcclxuICAgICAgICAgICAgY29udGVudE9uRHJvcDogJ2RldS5vbkRyb3AnLFxyXG4gICAgICAgICAgICBpY29uOiBkZXVGbGFnLnNyYyxcclxuICAgICAgICB9LFxyXG4gICAgXVxyXG4iLCIvLyBob29rcyBhbmQgaGVscGVyc1xyXG5pbXBvcnQgeyB1c2VSb3V0ZXIgfSBmcm9tICduZXh0L2Rpc3QvY2xpZW50L3JvdXRlcic7XHJcbmltcG9ydCB7IHVzZUVmZmVjdCwgdXNlUmVmIH0gZnJvbSAncmVhY3QnO1xyXG4vLyB0cmFuc2xhdGlvbiBcclxuaW1wb3J0IHVzZVRyYW5zbGF0aW9uIGZyb20gJ25leHQtdHJhbnNsYXRlL3VzZVRyYW5zbGF0aW9uJ1xyXG4vLyBjb21wb25ldG5zXHJcbmltcG9ydCBMaW5rIGZyb20gJ25leHQvbGluaydcclxuLy8gc3R5bGVzIFxyXG5pbXBvcnQgc3R5bGVzIGZyb20gJy4vTGFuZ3VhZ2VEcm9wLm1vZHVsZS5zY3NzJ1xyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIExhbmd1YWdlRHJvcCh7IG9uQ2xvc2UsIGNsaWNrLCBkYXRhIH0pIHtcclxuXHJcbiAgICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgICAgIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoXCJtb3VzZWRvd25cIiwgaGFuZGxlQ2xvc2UpO1xyXG4gICAgICAgIHJldHVybiAoKSA9PiB7XHJcbiAgICAgICAgICAgIGRvY3VtZW50LnJlbW92ZUV2ZW50TGlzdGVuZXIoXCJtb3VzZWRvd25cIiwgaGFuZGxlQ2xvc2UpO1xyXG4gICAgICAgIH1cclxuICAgIH0sIFtdKVxyXG5cclxuICAgIGNvbnN0XHJcbiAgICAgICAgbm9kZSA9IHVzZVJlZigpLFxyXG4gICAgICAgIHJvdXRlciA9IHVzZVJvdXRlcigpLFxyXG5cclxuICAgICAgICBoYW5kbGVDbG9zZSA9IChlKSA9PiB7XHJcbiAgICAgICAgICAgIGlmIChub2RlLmN1cnJlbnQuY29udGFpbnMoZS50YXJnZXQpKSB7XHJcbiAgICAgICAgICAgICAgICBpZiAoZS50YXJnZXQucGFyZW50Tm9kZSkgcmV0dXJuXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgb25DbG9zZSgpXHJcbiAgICAgICAgfSxcclxuICAgICAgICB7IHQgfSA9IHVzZVRyYW5zbGF0aW9uKCdjb21tb24nKSxcclxuICAgICAgICB0cmFuc2xhdGlvblBhdGggPSAnaGVhZGVyLmxhbmcuJyxcclxuICAgICAgICB0cmFuc2xhdGUgPSAoa2V5KSA9PiB0KGAke3RyYW5zbGF0aW9uUGF0aH0ke2tleX1gKVxyXG5cclxuXHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIDxkaXZcclxuICAgICAgICAgICAgY2xhc3NOYW1lPXtzdHlsZXMuY29udGFpbmVyfVxyXG4gICAgICAgICAgICByZWY9e25vZGV9XHJcbiAgICAgICAgPlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmNvbnRlbnR9PlxyXG4gICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgIGRhdGEubWFwKGVsID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIChcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxMaW5rXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaHJlZj17YCR7cm91dGVyLnBhdGhuYW1lfWB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbG9jYWxlPXtlbC5sYW5nfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGtleT17YGNoYW5nZS1sYW5nLSR7ZWwubGFuZ31gfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLnJvd30+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNsaWNrPXtjbGlja31cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17YCR7ZWwubGFuZ31gfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdHJhbnNsYXRlKGVsLmNvbnRlbnRPbkRyb3ApXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGltZ1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb25DbGljaz17Y2xpY2t9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzcmM9e2VsLmljb259XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9e2Ake2VsLmxhbmd9YH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvTGluaz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgKVxyXG5cclxuICAgICAgICAgICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgIClcclxuXHJcbn1cclxuIiwiLy8gc3R5bGVzXHJcbmltcG9ydCB7IHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgc3R5bGVzIGZyb20gJy4vTG9nZ2VkLm1vZHVsZS5zY3NzJ1xyXG5pbXBvcnQgeyBMb2dnZWREcm9wIH0gZnJvbSAnLi9Mb2dnZWREcm9wL0xvZ2dlZERyb3AnO1xyXG5pbXBvcnQgeyBMb2dnZWRXYWxscGVyIH0gZnJvbSAnLi9Mb2dnZWRXYWxscGVyL0xvZ2dlZFdhbGxwZXInXHJcblxyXG5leHBvcnQgZnVuY3Rpb24gTG9nZ2VkKHtcclxuICAgIGRhdGFcclxufSkge1xyXG4gICAgY29uc3RcclxuICAgICAgICAvLyBzdGF0ZXNcclxuICAgICAgICAvL2NoYW5nZSB1c2VyIGRyb3Bkb3duXHJcbiAgICAgICAgW3Nob3dVc2VyRHJvcCwgc2V0U2hvd1VzZXJEcm9wXSA9IHVzZVN0YXRlKGZhbHNlKVxyXG5cclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPGRpdlxyXG4gICAgICAgICAgICBjbGFzc05hbWU9e3N0eWxlcy5jb250YWluZXJ9XHJcbiAgICAgICAgICAgIHN0eWxlPXtzaG93VXNlckRyb3AgPyB7IHBhZGRpbmc6ICcxNy41cHggMCcgfSA6IG51bGx9PlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmNvbnRlbnR9PlxyXG4gICAgICAgICAgICAgICAgeyFzaG93VXNlckRyb3AgP1xyXG4gICAgICAgICAgICAgICAgICAgIDxMb2dnZWRXYWxscGVyXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGltZz17ZGF0YS5waG90b31cclxuICAgICAgICAgICAgICAgICAgICAgICAgZnVsbE5hbWU9e2RhdGEuZnVsbE5hbWV9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNsaWNrPXsoKSA9PiBzZXRTaG93VXNlckRyb3AodHJ1ZSl9XHJcbiAgICAgICAgICAgICAgICAgICAgLz4gOlxyXG4gICAgICAgICAgICAgICAgICAgIDxMb2dnZWREcm9wXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2xvc2U9eygpID0+IHNldFNob3dVc2VyRHJvcChmYWxzZSl9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHVzZXI9e2RhdGF9XHJcbiAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICApXHJcbn1cclxuIiwiLy8gaG9va3MgYW5kIGhlbHBlcnNcclxuaW1wb3J0IHsgdXNlUm91dGVyIH0gZnJvbSAnbmV4dC9kaXN0L2NsaWVudC9yb3V0ZXInO1xyXG5pbXBvcnQgeyB1c2VFZmZlY3QsIHVzZVJlZiB9IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IHsgdXNlRGlzcGF0Y2ggfSBmcm9tICdyZWFjdC1yZWR1eCc7XHJcbi8vIHRyYW5zbGF0aW9uIFxyXG5pbXBvcnQgdXNlVHJhbnNsYXRpb24gZnJvbSAnbmV4dC10cmFuc2xhdGUvdXNlVHJhbnNsYXRpb24nXHJcbi8vIGNvbXBvbmV0bnNcclxuaW1wb3J0IExpbmsgZnJvbSAnbmV4dC9saW5rJ1xyXG4vLyBzdHlsZXMgXHJcbmltcG9ydCBzdHlsZXMgZnJvbSAnLi9Mb2dnZWREcm9wLm1vZHVsZS5zY3NzJ1xyXG4vLyBpY29uc1xyXG5pbXBvcnQgdGVsSWNvbiBmcm9tICcvcHVibGljL2ltYWdlcy9jb21tb24vcGhvbmUucG5nJ1xyXG5pbXBvcnQgeyBsb2dvdXQgfSBmcm9tICcvcmVkdXgvZmVhdHVyZXMvdXNlclNsaWNlJztcclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBMb2dnZWREcm9wKHsgb25DbG9zZSwgdXNlciB9KSB7XHJcblxyXG4gICAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgICAgICBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKFwibW91c2Vkb3duXCIsIGhhbmRsZUNsb3NlKTtcclxuICAgICAgICByZXR1cm4gKCkgPT4ge1xyXG4gICAgICAgICAgICBkb2N1bWVudC5yZW1vdmVFdmVudExpc3RlbmVyKFwibW91c2Vkb3duXCIsIGhhbmRsZUNsb3NlKTtcclxuICAgICAgICB9XHJcbiAgICB9LCBbXSlcclxuXHJcbiAgICBjb25zdFxyXG4gICAgICAgIG5vZGUgPSB1c2VSZWYoKSxcclxuICAgICAgICByb3V0ZXIgPSB1c2VSb3V0ZXIoKSxcclxuXHJcbiAgICAgICAgaGFuZGxlQ2xvc2UgPSAoZSkgPT4ge1xyXG4gICAgICAgICAgICBpZiAobm9kZS5jdXJyZW50LmNvbnRhaW5zKGUudGFyZ2V0KSkge1xyXG4gICAgICAgICAgICAgICAgaWYgKGUudGFyZ2V0LnBhcmVudE5vZGUpIHJldHVyblxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIG9uQ2xvc2UoKVxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgeyB0IH0gPSB1c2VUcmFuc2xhdGlvbignY29tbW9uJyksXHJcbiAgICAgICAgdHJhbnNsYXRpb25QYXRoID0gJ2NvbW1vbnMuJyxcclxuICAgICAgICB0cmFuc2xhdGUgPSAoa2V5KSA9PiB0KGAke3RyYW5zbGF0aW9uUGF0aH0ke2tleX1gKSxcclxuICAgICAgICBkaXNwYXRjaCA9IHVzZURpc3BhdGNoKClcclxuXHJcbiAgICBmdW5jdGlvbiBfbG9nb3V0KCkge1xyXG4gICAgICAgIGRpc3BhdGNoKGxvZ291dCgpKTtcclxuICAgICAgICByb3V0ZXIucHVzaChgL2ApO1xyXG4gICAgfSAgICBcclxuXHJcblxyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8ZGl2XHJcbiAgICAgICAgICAgIGNsYXNzTmFtZT17c3R5bGVzLmNvbnRhaW5lcn1cclxuICAgICAgICAgICAgcmVmPXtub2RlfVxyXG4gICAgICAgID5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5jb250ZW50fT5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMudXNlcl9waG90b19uYW1lfT5cclxuICAgICAgICAgICAgICAgICAgICA8c3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPExpbmsgaHJlZj0nL3BlcnNvbmFsJz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpbWcgc3JjPXt1c2VyLnBob3RvfSBhbHQ9XCJcIiAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L0xpbms+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgIDxzcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8TGluayBocmVmPScvcGVyc29uYWwnPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAge3VzZXIuZnVsbE5hbWV9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvTGluaz5cclxuICAgICAgICAgICAgICAgICAgICA8L3NwYW4+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMudXNlcl90ZWx9PlxyXG4gICAgICAgICAgICAgICAgICAgIDxzcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8aW1nIHNyYz17dGVsSWNvbi5zcmN9IGFsdD1cIlwiIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgIDxzcGFuPnt1c2VyLnRlbGVwaG9uZX08L3NwYW4+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMubG9nT3V0fT5cclxuICAgICAgICAgICAgICAgICAgICA8c3BhblxyXG4gICAgICAgICAgICAgICAgICAgICAgICBvbkNsaWNrPXsoKSA9Pl9sb2dvdXQoKSB9XHJcbiAgICAgICAgICAgICAgICAgICAgPnt0cmFuc2xhdGUoJ2xvZ091dCcpfTwvc3Bhbj5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgIClcclxuXHJcbn1cclxuIiwiLy8gY29tcG9uZW50c1xyXG5pbXBvcnQgTGluayBmcm9tICduZXh0L2xpbmsnXHJcbi8vIHN0eWxlc1xyXG5pbXBvcnQgc3R5bGVzIGZyb20gJy4vTG9nZ2VkV2FsbHBlci5tb2R1bGUuc2NzcydcclxuLy8gaWNvbnNcclxuaW1wb3J0IHRyaWFuZ2xlIGZyb20gJy9wdWJsaWMvaW1hZ2VzL2NvbW1vbi90cmlhbmdsZS5wbmcnXHJcbmltcG9ydCB1c2VyRGVmYXVsdEljb24gZnJvbSAnL3B1YmxpYy9pbWFnZXMvY29tbW9uL3VzZXJEZWZhdWx0LnBuZydcclxuXHJcblxyXG5leHBvcnQgZnVuY3Rpb24gTG9nZ2VkV2FsbHBlcih7XHJcbiAgICBpbWcsXHJcbiAgICBmdWxsTmFtZSxcclxuICAgIGNsaWNrXHJcbn0pIHtcclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5jb250YWluZXJ9PlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmNvbnRlbnR9PlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy51c2VyX3Bob3RvfT5cclxuICAgICAgICAgICAgICAgICAgICA8TGluayBocmVmPScvcGVyc29uYWwnPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8aW1nXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzcmM9e2ltZyA/IGltZyA6IHVzZXJEZWZhdWx0SWNvbi5zcmN9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBhbHQ9e2Ake2Z1bGxOYW1lfSBpY29uYH0gLz5cclxuICAgICAgICAgICAgICAgICAgICA8L0xpbms+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDxkaXZcclxuICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9e3N0eWxlcy51c2VyX2Z1bGxOYW1lfVxyXG4gICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9e2NsaWNrfVxyXG4gICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT17c3R5bGVzLmZ1bGxuYW1lfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAge2Z1bGxOYW1lfVxyXG4gICAgICAgICAgICAgICAgICAgIDwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICA8c3BhbiBzdHlsZT17e1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBjb2xvcjogJ3doaXRlJyxcclxuICAgICAgICAgICAgICAgICAgICB9fT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGltZ1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc3JjPXt0cmlhbmdsZS5zcmN9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBhbHQ9XCJ0cmlhbmdsZVwiIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgKVxyXG59XHJcbiIsIi8vIGhvb2tzIGFuZCBoZWxwZXJzXHJcbmltcG9ydCB7IHVzZVJvdXRlciB9IGZyb20gJ25leHQvZGlzdC9jbGllbnQvcm91dGVyJ1xyXG5pbXBvcnQgeyB1c2VFZmZlY3QsIHVzZVJlZiwgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCc7XHJcblxyXG5cclxuLy8gc3R5bGVzXHJcbmltcG9ydCBzdHlsZXMgZnJvbSAnLi9Ecm9wZG93bi5tb2R1bGUuc2Nzcyc7XHJcblxyXG4vLyB0cmFuc2xhdGlvbiBcclxuaW1wb3J0IHVzZVRyYW5zbGF0aW9uIGZyb20gJ25leHQtdHJhbnNsYXRlL3VzZVRyYW5zbGF0aW9uJ1xyXG5cclxuLy9pbWdzXHJcbmltcG9ydCBkcm9wZG93bkxpbmVzIGZyb20gJy9wdWJsaWMvaW1hZ2VzL2hlYWRlci9kcm9wZG93bl9saW5lcy5wbmcnO1xyXG5cclxuLy9jb21wb25lbnRzXHJcbmltcG9ydCBMaW5rIGZyb20gJ25leHQvbGluaydcclxuaW1wb3J0IENvbnRhY3RzTW9kYWwgZnJvbSAnLi4vLi4vLi4vUGFnZXMvQ29udGFjdHMvQ29udGFjdHNNb2RhbCc7XHJcblxyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gRHJvcGRvd24oKSB7XHJcbiAgICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgICAgIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoXCJtb3VzZWRvd25cIiwgaGFuZGxlQ2xvc2UpO1xyXG4gICAgICAgIHJldHVybiAoKSA9PiB7XHJcbiAgICAgICAgICAgIGRvY3VtZW50LnJlbW92ZUV2ZW50TGlzdGVuZXIoXCJtb3VzZWRvd25cIiwgaGFuZGxlQ2xvc2UpO1xyXG4gICAgICAgIH1cclxuICAgIH0sIFtdKVxyXG5cclxuICAgIGNvbnN0XHJcbiAgICAgICAgW3Nob3dEcm9wZG93biwgc2V0U2hvd0Ryb3Bkb3duXSA9IHVzZVN0YXRlKGZhbHNlKSxcclxuICAgICAgICBbc2hvd0NvbnRhY3RzTW9kYWwsIHNldFNob3dDb250YWN0c01vZGFsXSA9IHVzZVN0YXRlKGZhbHNlKSxcclxuXHJcbiAgICAgICAgeyB0IH0gPSB1c2VUcmFuc2xhdGlvbignY29tbW9uJyksXHJcbiAgICAgICAgdHJhbnNsYXRpb25QYXRoID0gJ2hlYWRlci5uYXZCYXIuJyxcclxuICAgICAgICB0cmFuc2xhdGUgPSAoa2V5KSA9PiB0KGAke3RyYW5zbGF0aW9uUGF0aH0ke2tleX1gKSxcclxuXHJcbiAgICAgICAgcm91dGVyID0gdXNlUm91dGVyKCksXHJcblxyXG4gICAgICAgIG5vZGUgPSB1c2VSZWYoKSxcclxuXHJcbiAgICAgICAgaGFuZGxlQ2xvc2UgPSAoZSkgPT4ge1xyXG4gICAgICAgICAgICBpZiAobm9kZT8uY3VycmVudD8uY29udGFpbnMoZS50YXJnZXQpKSB7XHJcbiAgICAgICAgICAgICAgICBpZiAoZS50YXJnZXQucGFyZW50Tm9kZSkgcmV0dXJuXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgc2V0U2hvd0Ryb3Bkb3duKGZhbHNlKVxyXG4gICAgICAgIH0sXHJcblxyXG4gICAgICAgIGJ1dHRvbnNJbkhvbWVQYWdlID0gW1xyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICBpZDogJ21haW4nLFxyXG4gICAgICAgICAgICAgICAga2V5OiBNYXRoLnJhbmRvbSgpLFxyXG4gICAgICAgICAgICAgICAgZnJzdENvbnRlbnQ6IHRyYW5zbGF0ZSgnbWFpbicpLFxyXG4gICAgICAgICAgICAgICAgaHJlZjogJy8nXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIGlkOiAnZ2FtZXMnLFxyXG4gICAgICAgICAgICAgICAga2V5OiBNYXRoLnJhbmRvbSgpLFxyXG4gICAgICAgICAgICAgICAgZnJzdENvbnRlbnQ6IHRyYW5zbGF0ZSgnZ2FtZXMnKSxcclxuICAgICAgICAgICAgICAgIGhyZWY6ICcvZ2FtZXMnXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIGlkOiAnc3RhdGlzdGljcycsXHJcbiAgICAgICAgICAgICAgICBrZXk6IE1hdGgucmFuZG9tKCksXHJcbiAgICAgICAgICAgICAgICBmcnN0Q29udGVudDogdHJhbnNsYXRlKCdzdGF0aXN0aWNzLmZycycpLFxyXG4gICAgICAgICAgICAgICAgc2VjQ29udGVudDogdHJhbnNsYXRlKCdzdGF0aXN0aWNzLnNlYycpLFxyXG4gICAgICAgICAgICAgICAgaHJlZjogJy9zdGF0aXN0aWNzJ1xyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICBpZDogJ3ByZWRpY3Rpb24nLFxyXG4gICAgICAgICAgICAgICAga2V5OiBNYXRoLnJhbmRvbSgpLFxyXG4gICAgICAgICAgICAgICAgZnJzdENvbnRlbnQ6IHRyYW5zbGF0ZSgncHJlZGljdGlvbi5mcnMnKSxcclxuICAgICAgICAgICAgICAgIHNlY0NvbnRlbnQ6IHRyYW5zbGF0ZSgncHJlZGljdGlvbi5zZWMnKSxcclxuICAgICAgICAgICAgICAgIGhyZWY6ICcvcHJlZGljdGlvbidcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgaWQ6ICd0ZXN0aW1vbmlhbHMnLFxyXG4gICAgICAgICAgICAgICAga2V5OiBNYXRoLnJhbmRvbSgpLFxyXG4gICAgICAgICAgICAgICAgZnJzdENvbnRlbnQ6IHRyYW5zbGF0ZSgndGVzdGltb25pYWxzJyksXHJcbiAgICAgICAgICAgICAgICBocmVmOiAnL3Rlc3RpbW9uaWFscydcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgaWQ6ICdhYm91dFVzJyxcclxuICAgICAgICAgICAgICAgIGtleTogTWF0aC5yYW5kb20oKSxcclxuICAgICAgICAgICAgICAgIGZyc3RDb250ZW50OiB0cmFuc2xhdGUoJ2Fib3V0VXMnKSxcclxuICAgICAgICAgICAgICAgIGhyZWY6ICcvYWJvdXRVcydcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgaWQ6ICdjb250YWN0cycsXHJcbiAgICAgICAgICAgICAgICBrZXk6IE1hdGgucmFuZG9tKCksXHJcbiAgICAgICAgICAgICAgICBmcnN0Q29udGVudDogdHJhbnNsYXRlKCdjb250YWN0cycpLFxyXG4gICAgICAgICAgICAgICAgaHJlZjogbnVsbCxcclxuICAgICAgICAgICAgICAgIGNsaWNrOiAoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgc2V0U2hvd0Ryb3Bkb3duKGZhbHNlKVxyXG4gICAgICAgICAgICAgICAgICAgIHNldFNob3dDb250YWN0c01vZGFsKHRydWUpXHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgXSxcclxuICAgICAgICBidXR0b25zID0gYnV0dG9uc0luSG9tZVBhZ2UuZmlsdGVyKGVsID0+IGVsLmlkICE9PSBcInN0YXRpc3RpY3NcIilcclxuXHJcblxyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmRyb3Bkb3dufT5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5kcm9wZG93bl9jaGVja30+XHJcbiAgICAgICAgICAgICAgICA8aW1nIHNyYz17ZHJvcGRvd25MaW5lcy5zcmN9IGFsdD1cImRyb3AtY2hlY2staWNvblwiIG9uQ2xpY2s9eygpID0+IHNldFNob3dEcm9wZG93bighc2hvd0Ryb3Bkb3duKX0gLz5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIHtzaG93RHJvcGRvd24gJiYgKFxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5kcm9wZG93bl9tZW51fSByZWY9e25vZGV9PlxyXG4gICAgICAgICAgICAgICAgICAgIDx1bCBjbGFzc05hbWU9e3N0eWxlcy5kcm9wZG93bl9saXN0fT5cclxuICAgICAgICAgICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgKHJvdXRlci5wYXRobmFtZSA9PT0gJy8nID8gYnV0dG9uc0luSG9tZVBhZ2UgOiBidXR0b25zKS5tYXAoZWwgPT4gKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxMaW5rXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGhyZWY9e2VsLmhyZWYgPyBlbC5ocmVmIDogXCJcIn1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAga2V5PXtlbC5rZXl9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGlcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9e2VsLmNsaWNrICYmIGVsLmNsaWNrfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPXtzdHlsZXMuZHJvcGRvd25fbGlzdF9pdGVtc31cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge2VsLmZyc3RDb250ZW50fSB7ZWwuc2VjQ29udGVudH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9saT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0xpbms+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICApKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgPC91bD5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICApfVxyXG4gICAgICAgICAgICB7c2hvd0NvbnRhY3RzTW9kYWwgJiZcclxuICAgICAgICAgICAgICAgIDxDb250YWN0c01vZGFsXHJcbiAgICAgICAgICAgICAgICAgICAgb3BlbmVkPXtzaG93Q29udGFjdHNNb2RhbCA/IHRydWUgOiBmYWxzZX1cclxuICAgICAgICAgICAgICAgICAgICBvbk1vZGFsQ2xvc2U9eygpID0+IHNldFNob3dDb250YWN0c01vZGFsKGZhbHNlKX1cclxuICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICA8L2Rpdj5cclxuICAgIClcclxufSIsIi8vIGNvbXBvbmVudHNcclxuaW1wb3J0IHsgTW9kYWwgfSBmcm9tICcuLi8uLi8uLi9jb21tb24vYXV0aC9Nb2RhbC9Nb2RhbCdcclxuaW1wb3J0IHsgU29jaWFsTWVkaWFJY29ucyB9IGZyb20gJy4vU29jaWFsTWVkaWFJY29ucy9Tb2NpYWxNZWRpYUljb25zJ1xyXG5pbXBvcnQgeyBGb3Jnb3RQYXNzd29yZCB9IGZyb20gJy4vUmVzZXRQYXNzd29yZC9Gb3Jnb3RQYXNzd29yZC9Gb3Jnb3RQYXNzd29yZCdcclxuaW1wb3J0IHsgTG9naW5Gb3JtIH0gZnJvbSAnLi9Mb2dpbkZvcm0vTG9naW5Gb3JtJ1xyXG4vLyBzdHlsZXNcclxuaW1wb3J0IHN0eWxlcyBmcm9tICcuL0xvZ2luLm1vZHVsZS5zY3NzJ1xyXG5pbXBvcnQgeyB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0J1xyXG5cclxuXHJcblxyXG5leHBvcnQgZnVuY3Rpb24gTG9naW4oeyBvbk1vZGFsQ2xvc2UgfSkge1xyXG5cclxuICAgIGNvbnN0XHJcbiAgICAgICAgW3Nob3dMb2dpbk1vZGFsLCBzZXRTaG93TG9naW5Nb2RhbF0gPSB1c2VTdGF0ZSh0cnVlKSxcclxuICAgICAgICBbc2hvd1Jlc2V0UGFzc3dvcmRNb2RhbCwgc2V0U2hvd1Jlc2V0UGFzc3dvcmRNb2RhbF0gPSB1c2VTdGF0ZShmYWxzZSlcclxuXHJcbiAgICBjb25zb2xlLmxvZyhzaG93UmVzZXRQYXNzd29yZE1vZGFsKTtcclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPD5cclxuICAgICAgICAgICAge3Nob3dMb2dpbk1vZGFsICYmXHJcbiAgICAgICAgICAgICAgICA8TW9kYWwgb25DbG9zZT17b25Nb2RhbENsb3NlfSBjb250ZW50U3R5bGVzPXtzdHlsZXMubV9jb250ZW50fSBjb250YWluZXJTdHlsZXM9e3N0eWxlcy5tX2NvbnRhaW5lcn0+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5sb2dpbl9jb250YWluZXJ9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8U29jaWFsTWVkaWFJY29ucyAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8TG9naW5Gb3JtXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbk1vZGFsQ2xvc2U9e29uTW9kYWxDbG9zZX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGhhbmRsZVJlc2V0UGFzc01vZGFsPXsoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc2V0U2hvd1Jlc2V0UGFzc3dvcmRNb2RhbCh0cnVlKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNldFNob3dMb2dpbk1vZGFsKGZhbHNlKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDwvTW9kYWw+XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAge3Nob3dSZXNldFBhc3N3b3JkTW9kYWwgJiYgPEZvcmdvdFBhc3N3b3JkIG9uTW9kYWxDbG9zZT17b25Nb2RhbENsb3NlfSAvPn1cclxuICAgICAgICA8Lz5cclxuICAgIClcclxufVxyXG4iLCIvLyBob29rcyBhbmQgaGVscGVyc1xyXG5pbXBvcnQgdXNlVHJhbnNsYXRpb24gZnJvbSAnbmV4dC10cmFuc2xhdGUvdXNlVHJhbnNsYXRpb24nXHJcbmltcG9ydCB7IHVzZUZvcm0gfSBmcm9tICdyZWFjdC1ob29rLWZvcm0nXHJcbmltcG9ydCAqIGFzIHl1cCBmcm9tICd5dXAnXHJcbmltcG9ydCB7IHl1cFJlc29sdmVyIH0gZnJvbSAnQGhvb2tmb3JtL3Jlc29sdmVycy95dXAnXHJcbmltcG9ydCB7IHJlcXVlc3QsIHNldENvb2tpZSB9IGZyb20gJy4uLy4uLy4uLy4uLy4uL2xpYi9lci5saWInO1xyXG4vL2NvbXBvbmVudHNcclxuaW1wb3J0IHsgSW5wdXRDb250YWluZXIgfSBmcm9tICcvY29tcG9uZW50cy9jb21tb24vYXV0aC9JbnB1dENvbnRhaW5lci9JbnB1dENvbnRhaW5lcidcclxuaW1wb3J0IHsgVGl0bGUgfSBmcm9tICcuLi9jb21tb24vVGl0bGUnXHJcbmltcG9ydCB7IFJlc2V0UGFzc3dvcmRMaW5rIH0gZnJvbSAnLi4vY29tbW9uL1Jlc2V0UGFzc3dvcmRMaW5rJ1xyXG5pbXBvcnQgeyBTdWJtaXQgfSBmcm9tICcuLi9jb21tb24vU3VibWl0J1xyXG5pbXBvcnQgeyBUb1JlZ2lzdGVyIH0gZnJvbSAnLi4vY29tbW9uL1RvUmVnaXN0ZXInXHJcbi8vIHN0eWxlcyBcclxuaW1wb3J0IHN0eWxlcyBmcm9tICcuL0xvZ2luRm9ybS5tb2R1bGUuc2NzcydcclxuaW1wb3J0IHsgdXNlRGlzcGF0Y2ggfSBmcm9tICdyZWFjdC1yZWR1eCdcclxuaW1wb3J0IHsgbG9naW4gfSBmcm9tICcuLi8uLi8uLi8uLi8uLi9yZWR1eC9mZWF0dXJlcy91c2VyU2xpY2UnXHJcbmltcG9ydCB7IExPR0lOIH0gZnJvbSAnLi4vLi4vLi4vLi4vLi4vbGliL3JlcXVlc3QtZGVzdGluYXRpb25zJztcclxuXHJcbmltcG9ydCB7IFRvYXN0Q29udGFpbmVyLCB0b2FzdCB9IGZyb20gJ3JlYWN0LXRvYXN0aWZ5JztcclxuaW1wb3J0IHsgdXNlUm91dGVyIH0gZnJvbSAnbmV4dC9kaXN0L2NsaWVudC9yb3V0ZXInO1xyXG5cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBMb2dpbkZvcm0oeyBvbk1vZGFsQ2xvc2UsIGhhbmRsZVJlc2V0UGFzc01vZGFsIH0pIHtcclxuICAgIGNvbnN0IHJvdXRlciA9IHVzZVJvdXRlcigpO1xyXG5cclxuICAgIGNvbnN0XHJcbiAgICAgICAgZGlzcGF0Y2ggPSB1c2VEaXNwYXRjaCgpLFxyXG4gICAgICAgIC8vIHRyYW5zbGF0aW9uIGNvbnNmaWdzXHJcbiAgICAgICAgeyB0IH0gPSB1c2VUcmFuc2xhdGlvbignY29tbW9uJyksXHJcbiAgICAgICAgdHJhbnNsYXRpb25QYXRoID0gJ3JlZ2lzdHJhdGlvbi5pbnB1dFBsYWNlSG9sZGVycy4nLFxyXG4gICAgICAgIHRyYW5zbGF0ZSA9IGtleSA9PiB0KGAke3RyYW5zbGF0aW9uUGF0aH0ke2tleX1gKSxcclxuICAgICAgICBoYW5kbGVfdG9fcmVnaXN0ZXJfY2xpY2sgPSAoKSA9PiB7XHJcbiAgICAgICAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ2JvZHknKS5zdHlsZS5vdmVyZmxvdyA9ICd2aXNpYmxlJ1xyXG4gICAgICAgICAgICBvbk1vZGFsQ2xvc2UoKVxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgLy8geXVwIGNvbmZpZ3NcclxuICAgICAgICBzY2hlbWEgPSB5dXAub2JqZWN0KCkuc2hhcGUoe1xyXG4gICAgICAgICAgICBlbWFpbDogeXVwXHJcbiAgICAgICAgICAgICAgICAuc3RyaW5nKClcclxuICAgICAgICAgICAgICAgIC5yZXF1aXJlZCgpXHJcbiAgICAgICAgICAgICAgICAubWF0Y2hlcygvXigoW148PigpXFxbXFxdXFxcXC4sOzpcXHNAXCJdKyhcXC5bXjw+KClcXFtcXF1cXFxcLiw7Olxcc0BcIl0rKSopfChcIi4rXCIpKUAoKFxcW1swLTldezEsM31cXC5bMC05XXsxLDN9XFwuWzAtOV17MSwzfVxcLlswLTldezEsM31dKXwoKFthLXpBLVpcXC0wLTldK1xcLikrW2EtekEtWl17Mix9KSkkLyksXHJcbiAgICAgICAgICAgIHBhc3N3b3JkOiB5dXBcclxuICAgICAgICAgICAgICAgIC5zdHJpbmcoKVxyXG4gICAgICAgICAgICAgICAgLnJlcXVpcmVkKClcclxuICAgICAgICAgICAgICAgIC5taW4oNilcclxuICAgICAgICB9KSxcclxuICAgICAgICAvLyBmb3JtIGNvbmZpZ3NcclxuICAgICAgICB7IHJlZ2lzdGVyLCBoYW5kbGVTdWJtaXQsIGZvcm1TdGF0ZTogeyBlcnJvcnMgfSB9ID0gdXNlRm9ybSh7XHJcbiAgICAgICAgICAgIG1vZGU6ICdvbkNoYW5nZScsXHJcbiAgICAgICAgICAgIHJlc29sdmVyOiB5dXBSZXNvbHZlcihzY2hlbWEpXHJcbiAgICAgICAgfSksXHJcbiAgICAgICAgLy8gb24gZm9ybSBzdWJtaXRcclxuICAgICAgICBzdWJtaXQgPSBhc3luYyAoZGF0YSkgPT4ge1xyXG4gICAgICAgICAgICB0cnkge1xyXG4gICAgICAgICAgICAgICAgY29uc3QgdXNlciA9IChhd2FpdCByZXF1ZXN0KCBMT0dJTiwgZGF0YSApKS5kYXRhPy5kYXRhO1xyXG4gICAgICAgICAgICAgICAgc2V0Q29va2llKCBgYWNjZXNzLXRva2VuYCwgdXNlci50b2tlbiwgMSApO1xyXG4gICAgICAgICAgICAgICAgZGlzcGF0Y2gobG9naW4odXNlcikpO1xyXG4gICAgICAgICAgICAgICAgcm91dGVyLnB1c2goYC9gKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBjYXRjaCggZXJyb3IgKSB7XHJcbiAgICAgICAgICAgICAgICB0b2FzdCggZXJyb3IucmVzcG9uc2UuZGF0YT8ubWVzc2FnZSB8fCBgdW5rbm93biBlcnJvcmAsIHtcclxuICAgICAgICAgICAgICAgICAgICB0eXBlOiBgZXJyb3JgXHJcbiAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBoYW5kbGVfdG9fcmVnaXN0ZXJfY2xpY2soKVxyXG4gICAgICAgIH07XHJcblxyXG4gICAgICAgIFxyXG5cclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5jb250YWluZXJ9PlxyXG4gICAgICAgICAgICA8VGl0bGVcclxuICAgICAgICAgICAgICAgIHN0eWxlcz17c3R5bGVzLnRpdGxlfVxyXG4gICAgICAgICAgICAgICAgY29udGVudD17dCgnaGVhZGVyLmxvZ2luTW9kYWwudGl0bGUnKX1cclxuICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgPGZvcm0gb25TdWJtaXQ9e2hhbmRsZVN1Ym1pdChzdWJtaXQpfT5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuaW5wdXRzfT5cclxuICAgICAgICAgICAgICAgICAgICA8SW5wdXRDb250YWluZXJcclxuICAgICAgICAgICAgICAgICAgICAgICAgaWQ9J25hbWUnXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU9J3RleHQnXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHBsYWNlaG9sZGVyPXt0cmFuc2xhdGUoJ2VtYWlsJyl9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGVycm9ycz17KCEhZXJyb3JzLmVtYWlsKX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgb3RoZXI9e3JlZ2lzdGVyKCdlbWFpbCcpfVxyXG4gICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgPElucHV0Q29udGFpbmVyXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlkPSdwYXNzd29yZCdcclxuICAgICAgICAgICAgICAgICAgICAgICAgdHlwZT0ncGFzc3dvcmQnXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHBsYWNlaG9sZGVyPXt0cmFuc2xhdGUoJ3Bhc3N3b3JkJyl9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGVycm9ycz17ISFlcnJvcnMucGFzc3dvcmR9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG90aGVyPXtyZWdpc3RlcigncGFzc3dvcmQnKX1cclxuICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8UmVzZXRQYXNzd29yZExpbmtcclxuICAgICAgICAgICAgICAgICAgICBjbGljaz17aGFuZGxlUmVzZXRQYXNzTW9kYWx9XHJcbiAgICAgICAgICAgICAgICAgICAgc3R5bGVzPXtzdHlsZXMucmVzZXRfcGFzc3dvcmR9XHJcbiAgICAgICAgICAgICAgICAgICAgY29udGVudD17dCgnaGVhZGVyLmxvZ2luTW9kYWwucmVzUGFzc3dvcmQnKX1cclxuICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICA8U3VibWl0XHJcbiAgICAgICAgICAgICAgICAgICAgc3R5bGVzPXtzdHlsZXMuc3VibWl0fVxyXG4gICAgICAgICAgICAgICAgICAgIGNvbnRlbnQ9e3QoJ2hlYWRlci5sb2dpbk1vZGFsLnN1Ym1pdCcpfVxyXG4gICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgPC9mb3JtPlxyXG4gICAgICAgICAgICA8VG9SZWdpc3RlclxyXG4gICAgICAgICAgICAgICAgaHJlZj0nL3JlZ2lzdHJhdGlvbidcclxuICAgICAgICAgICAgICAgIGNsaWNrPXtoYW5kbGVfdG9fcmVnaXN0ZXJfY2xpY2t9XHJcbiAgICAgICAgICAgICAgICBjb250YWluZXJfc3R5bGVzPXtzdHlsZXMudG9fcmVnaXN0ZXJfY29udGFpbmVyfVxyXG4gICAgICAgICAgICAgICAgY29udGVudF9zdHlsZXM9e3N0eWxlcy50b19yZWdpc3Rlcl9jb250ZW50fVxyXG4gICAgICAgICAgICAgICAgb3I9e3QoJ2hlYWRlci5sb2dpbk1vZGFsLm9yJyl9XHJcbiAgICAgICAgICAgICAgICByZWdpc3Rlcl90ZXh0X3N0eWxlcz17c3R5bGVzLnRvX3JlZ2lzdGVyX3RleHR9XHJcbiAgICAgICAgICAgICAgICBjb250ZW50PXt0KCdoZWFkZXIubG9naW5Nb2RhbC5yZWdpc3RlcicpfVxyXG4gICAgICAgICAgICAvPlxyXG5cclxuXHJcbiAgICAgICAgICAgIDxUb2FzdENvbnRhaW5lciAvPlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgKVxyXG59XHJcbiIsIi8vIGhvb2tzIGFuZCBoZWxwZXJzXHJcbmltcG9ydCB1c2VUcmFuc2xhdGlvbiBmcm9tICduZXh0LXRyYW5zbGF0ZS91c2VUcmFuc2xhdGlvbidcclxuaW1wb3J0IHsgdXNlRm9ybSB9IGZyb20gJ3JlYWN0LWhvb2stZm9ybSdcclxuaW1wb3J0IHsgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCdcclxuaW1wb3J0ICogYXMgeXVwIGZyb20gJ3l1cCdcclxuaW1wb3J0IHsgeXVwUmVzb2x2ZXIgfSBmcm9tICdAaG9va2Zvcm0vcmVzb2x2ZXJzL3l1cCdcclxuLy9jb21wb25lbnRzXHJcbmltcG9ydCB7IFRpdGxlIH0gZnJvbSAnLi4vLi4vY29tbW9uL1RpdGxlJ1xyXG5pbXBvcnQgeyBJbnB1dENvbnRhaW5lciB9IGZyb20gJy9jb21wb25lbnRzL2NvbW1vbi9hdXRoL0lucHV0Q29udGFpbmVyL0lucHV0Q29udGFpbmVyJ1xyXG5pbXBvcnQgeyBTdWJtaXQgfSBmcm9tICcuLi8uLi9jb21tb24vU3VibWl0J1xyXG5pbXBvcnQgeyBNb2RhbCB9IGZyb20gJy4uLy4uLy4uLy4uLy4uL2NvbW1vbi9hdXRoL01vZGFsL01vZGFsJ1xyXG5pbXBvcnQgeyBHZXRFbWFpbENvZGUgfSBmcm9tICcuLi9HZXRFbWFpbENvZGUvR2V0RW1haWxDb2RlJ1xyXG4vLyBzdHlsZXNcclxuaW1wb3J0IHN0eWxlcyBmcm9tICcuL0ZvcmdvdFBhc3N3b3JkLm1vZHVsZS5zY3NzJ1xyXG5cclxuaW1wb3J0IHsgcmVxdWVzdCwgc2V0Q29va2llIH0gZnJvbSAnL2xpYi9lci5saWInO1xyXG5cclxuaW1wb3J0IHsgVG9hc3RDb250YWluZXIsIHRvYXN0IH0gZnJvbSAncmVhY3QtdG9hc3RpZnknO1xyXG5pbXBvcnQgeyBTVEFSVF9SRVNFVF9QQVNTV09SRCB9IGZyb20gJy4uLy4uLy4uLy4uLy4uLy4uL2xpYi9yZXF1ZXN0LWRlc3RpbmF0aW9ucydcclxuXHJcblxyXG5leHBvcnQgZnVuY3Rpb24gRm9yZ290UGFzc3dvcmQoeyBvbk1vZGFsQ2xvc2UgfSkge1xyXG5cclxuICAgIGNvbnN0XHJcbiAgICAgICAgLy8gbW9kYWwgc3RhdGVzIHBhc3MgPT4gcGFzc3dvcmQgTWwgPT4gTW9kYWxcclxuICAgICAgICBbc2hvd0ZvcmdvdFBhc3NNbCwgc2V0U2hvd0ZvcmdvdFBhc3NNbF0gPSB1c2VTdGF0ZSh0cnVlKSxcclxuICAgICAgICBbc2hvd0dldEVtYWlsQ29kZU1sLCBzZXRTaG93RW1haWxDb2RlTWxdID0gdXNlU3RhdGUoZmFsc2UpLFxyXG4gICAgICAgIC8vIHRyYW5zbGF0aW9uIGNvbnNmaWdzXHJcbiAgICAgICAgeyB0IH0gPSB1c2VUcmFuc2xhdGlvbignY29tbW9uJyksXHJcbiAgICAgICAgdHJhbnNsYXRpb25QYXRoID0gJ2hlYWRlci5yZXNldFBhc3N3b3JkTW9kYWwuJyxcclxuICAgICAgICB0cmFuc2xhdGUgPSBrZXkgPT4gdChgJHt0cmFuc2xhdGlvblBhdGh9JHtrZXl9YCksXHJcbiAgICAgICAgLy8geXVwIGNvbmZpZ3NcclxuICAgICAgICBzY2hlbWEgPSB5dXAub2JqZWN0KCkuc2hhcGUoe1xyXG4gICAgICAgICAgICBlbWFpbDogeXVwXHJcbiAgICAgICAgICAgICAgICAuc3RyaW5nKClcclxuICAgICAgICAgICAgICAgIC5yZXF1aXJlZCgpXHJcbiAgICAgICAgICAgICAgICAubWF0Y2hlcygvXigoW148PigpXFxbXFxdXFxcXC4sOzpcXHNAXCJdKyhcXC5bXjw+KClcXFtcXF1cXFxcLiw7Olxcc0BcIl0rKSopfChcIi4rXCIpKUAoKFxcW1swLTldezEsM31cXC5bMC05XXsxLDN9XFwuWzAtOV17MSwzfVxcLlswLTldezEsM31dKXwoKFthLXpBLVpcXC0wLTldK1xcLikrW2EtekEtWl17Mix9KSkkLyksXHJcbiAgICAgICAgfSksXHJcbiAgICAgICAgLy8gZm9ybSBjb25maWdzXHJcbiAgICAgICAgeyByZWdpc3RlciwgaGFuZGxlU3VibWl0LCBmb3JtU3RhdGU6IHsgZXJyb3JzIH0gfSA9IHVzZUZvcm0oe1xyXG4gICAgICAgICAgICBtb2RlOiAnb25DaGFuZ2UnLFxyXG4gICAgICAgICAgICByZXNvbHZlcjogeXVwUmVzb2x2ZXIoc2NoZW1hKVxyXG4gICAgICAgIH0pLFxyXG4gICAgICAgIC8vIG9uIGZvcm0gc3VibWl0XHJcbiAgICAgICAgc3VibWl0ID0gYXN5bmMgKGRhdGEpID0+IHtcclxuICAgICAgICAgICAgdHJ5IHtcclxuICAgICAgICAgICAgICAgIGNvbnN0IHsgZGF0YTogcmVzcG9uc2UgfSA9IGF3YWl0IHJlcXVlc3QoIFNUQVJUX1JFU0VUX1BBU1NXT1JEKCBkYXRhLmVtYWlsICkgKTtcclxuICAgICAgICAgICAgICAgIGNvbnN0IHRva2VuID0gcmVzcG9uc2UuZGF0YS50b2tlbjtcclxuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKCB0b2tlbiApO1xyXG4gICAgICAgICAgICAgICAgc2V0Q29va2llKGByZXNldC10b2tlbmAsIHRva2VuLCAoMS8yNCkqMSk7XHJcbiAgICAgICAgICAgICAgICBzZXRTaG93Rm9yZ290UGFzc01sKGZhbHNlKVxyXG4gICAgICAgICAgICAgICAgc2V0U2hvd0VtYWlsQ29kZU1sKHRydWUpXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgY2F0Y2ggKCBlcnIgKSB7XHJcbiAgICAgICAgICAgICAgICB0b2FzdCggZXJyLnJlc3BvbnNlLmRhdGE/Lm1lc3NhZ2UgfHwgYHVua25vd24gZXJyb3JgLCB7XHJcbiAgICAgICAgICAgICAgICAgICAgdHlwZTogYGVycm9yYFxyXG4gICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcblxyXG5cclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPD5cclxuICAgICAgICAgICAge3Nob3dGb3Jnb3RQYXNzTWwgJiZcclxuICAgICAgICAgICAgICAgIDxNb2RhbCBvbkNsb3NlPXtvbk1vZGFsQ2xvc2V9IGNvbnRlbnRTdHlsZXM9e3N0eWxlcy5tX2NvbnRlbnR9IGNvbnRhaW5lclN0eWxlcz17c3R5bGVzLm1fY29udGFpbmVyfT5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmNvbnRhaW5lcn0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxUaXRsZVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc3R5bGVzPXtzdHlsZXMudGl0bGV9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb250ZW50PXt0cmFuc2xhdGUoJ3RpdGxlJyl9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxmb3JtIG9uU3VibWl0PXtoYW5kbGVTdWJtaXQoc3VibWl0KX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmlucHV0c30+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPElucHV0Q29udGFpbmVyXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlkPSduYW1lJ1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0eXBlPSd0ZXh0J1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwbGFjZWhvbGRlcj17dCgncmVnaXN0cmF0aW9uLmlucHV0UGxhY2VIb2xkZXJzLmVtYWlsJyl9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGVycm9ycz17KCEhZXJyb3JzLmVtYWlsKX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb3RoZXI9e3JlZ2lzdGVyKCdlbWFpbCcpfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxTdWJtaXRcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdHlsZXM9e3N0eWxlcy5zdWJtaXR9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29udGVudD17dHJhbnNsYXRlKCdzZW5kJyl9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Zvcm0+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgPFRvYXN0Q29udGFpbmVyIC8+XHJcbiAgICAgICAgICAgICAgICA8L01vZGFsPlxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIHNob3dHZXRFbWFpbENvZGVNbCAmJiA8R2V0RW1haWxDb2RlIG9uTW9kYWxDbG9zZT17b25Nb2RhbENsb3NlfSAvPlxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgPC8+XHJcbiAgICApXHJcbn1cclxuIiwiLy8gaG9va3MgYW5kIGhlbHBlcnNcclxuaW1wb3J0IHVzZVRyYW5zbGF0aW9uIGZyb20gJ25leHQtdHJhbnNsYXRlL3VzZVRyYW5zbGF0aW9uJ1xyXG5pbXBvcnQgeyB1c2VGb3JtIH0gZnJvbSAncmVhY3QtaG9vay1mb3JtJ1xyXG5pbXBvcnQgeyB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0J1xyXG5pbXBvcnQgKiBhcyB5dXAgZnJvbSAneXVwJ1xyXG5pbXBvcnQgeyB5dXBSZXNvbHZlciB9IGZyb20gJ0Bob29rZm9ybS9yZXNvbHZlcnMveXVwJ1xyXG5pbXBvcnQgeyBpbnB1dHMgfSBmcm9tICcuL2lucHV0X2NvbmZpZ3MnXHJcbi8vY29tcG9uZW50c1xyXG5pbXBvcnQgeyBUaXRsZSB9IGZyb20gJy4uLy4uL2NvbW1vbi9UaXRsZSdcclxuaW1wb3J0IHsgU3VibWl0IH0gZnJvbSAnLi4vLi4vY29tbW9uL1N1Ym1pdCdcclxuaW1wb3J0IHsgTW9kYWwgfSBmcm9tICcuLi8uLi8uLi8uLi8uLi9jb21tb24vYXV0aC9Nb2RhbC9Nb2RhbCdcclxuaW1wb3J0IHsgTmV3UGFzc3dvcmQgfSBmcm9tICcuLi9OZXdQYXNzd29yZC9OZXdQYXNzd29yZCdcclxuLy8gc3R5bGVzXHJcbmltcG9ydCBzdHlsZXMgZnJvbSAnLi9HZXRFbWFpbENvZGUubW9kdWxlLnNjc3MnXHJcblxyXG5pbXBvcnQgeyByZXF1ZXN0LCBnZXRDb29raWUgfSBmcm9tICcvbGliL2VyLmxpYic7XHJcblxyXG5pbXBvcnQgeyBUb2FzdENvbnRhaW5lciwgdG9hc3QgfSBmcm9tICdyZWFjdC10b2FzdGlmeSc7XHJcbmltcG9ydCB7IFNUQVJUX1JFU0VUX1BBU1NXT1JELCBWRVJJRllfUEFTU1dPUkRfUkVTRVQgfSBmcm9tICcuLi8uLi8uLi8uLi8uLi8uLi9saWIvcmVxdWVzdC1kZXN0aW5hdGlvbnMnXHJcblxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIEdldEVtYWlsQ29kZSh7IG9uTW9kYWxDbG9zZSB9KSB7XHJcblxyXG4gICAgY29uc3RcclxuICAgICAgICAvLyBtb2RhbCBzdGF0ZXMgcGFzcyA9PiBwYXNzd29yZCBNbCA9PiBNb2RhbFxyXG4gICAgICAgIFtzaG93R2V0RW1haWxDb2RlTWwsIHNldFNob3dFbWFpbENvZGVNbF0gPSB1c2VTdGF0ZSh0cnVlKSxcclxuICAgICAgICBbc2hvd05ld1Bhc3N3b3JkTWwsIHNldFNob3dOZXdQYXNzd29yZE1sXSA9IHVzZVN0YXRlKGZhbHNlKSxcclxuICAgICAgICAvLyB0cmFuc2xhdGlvbiBjb25zZmlnc1xyXG4gICAgICAgIHsgdCB9ID0gdXNlVHJhbnNsYXRpb24oJ2NvbW1vbicpLFxyXG4gICAgICAgIHRyYW5zbGF0aW9uUGF0aCA9ICdoZWFkZXIuZ2V0RW1haWxDb2RlTW9kYWwuJyxcclxuICAgICAgICB0cmFuc2xhdGUgPSBrZXkgPT4gdChgJHt0cmFuc2xhdGlvblBhdGh9JHtrZXl9YCksXHJcbiAgICAgICAgLy8geXVwIGNvbmZpZ3NcclxuICAgICAgICBzY2hlbWEgPSB5dXAub2JqZWN0KCkuc2hhcGUoe1xyXG4gICAgICAgICAgICBudW0xOiB5dXAuc3RyaW5nKCkucmVxdWlyZWQoKS5tYXRjaGVzKC9bMC05XS9tZyksXHJcbiAgICAgICAgICAgIG51bTI6IHl1cC5zdHJpbmcoKS5yZXF1aXJlZCgpLm1hdGNoZXMoL1swLTldL21nKSxcclxuICAgICAgICAgICAgbnVtMzogeXVwLnN0cmluZygpLnJlcXVpcmVkKCkubWF0Y2hlcygvWzAtOV0vbWcpLFxyXG4gICAgICAgICAgICBudW00OiB5dXAuc3RyaW5nKCkucmVxdWlyZWQoKS5tYXRjaGVzKC9bMC05XS9tZyksXHJcbiAgICAgICAgICAgIG51bTU6IHl1cC5zdHJpbmcoKS5yZXF1aXJlZCgpLm1hdGNoZXMoL1swLTldL21nKSxcclxuICAgICAgICAgICAgbnVtNjogeXVwLnN0cmluZygpLnJlcXVpcmVkKCkubWF0Y2hlcygvWzAtOV0vbWcpLFxyXG4gICAgICAgIH0pLFxyXG4gICAgICAgIC8vIGZvcm0gY29uZmlnc1xyXG4gICAgICAgIHsgcmVnaXN0ZXIsIGhhbmRsZVN1Ym1pdCwgZm9ybVN0YXRlOiB7IGVycm9ycyB9IH0gPSB1c2VGb3JtKHtcclxuICAgICAgICAgICAgbW9kZTogJ29uQ2hhbmdlJyxcclxuICAgICAgICAgICAgcmVzb2x2ZXI6IHl1cFJlc29sdmVyKHNjaGVtYSlcclxuICAgICAgICB9KSxcclxuICAgICAgICAvLyBpbnB1dCBqdW1wcyBcclxuICAgICAgICBqdW1wID0gKHgpID0+IHtcclxuICAgICAgICAgICAgaWYgKHgudmFsdWUubGVuZ3RoKSB7XHJcbiAgICAgICAgICAgICAgICB4ID0geC5uZXh0U2libGluZztcclxuICAgICAgICAgICAgICAgIGlmICh4ICYmIC90ZXh0Ly50ZXN0KHgudHlwZSkpIHtcclxuICAgICAgICAgICAgICAgICAgICB4LmZvY3VzKCk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9LFxyXG4gICAgICAgIGp1bXBCYWNrID0gKHgpID0+IHtcclxuICAgICAgICAgICAgaWYgKHgudGFyZ2V0LnZhbHVlLmxlbmd0aCA9PSAwKSB7XHJcbiAgICAgICAgICAgICAgICBpZiAoeC5jb2RlID09PSAnQmFja3NwYWNlJykge1xyXG4gICAgICAgICAgICAgICAgICAgIGlmIChkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLm1vdmU6Zm9jdXNcIikucHJldmlvdXNTaWJsaW5nKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIubW92ZTpmb2N1c1wiKS5wcmV2aW91c1NpYmxpbmcuZm9jdXMoKTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9LFxyXG4gICAgICAgIC8vIG9uIGZvcm0gc3VibWl0XHJcbiAgICAgICAgc3VibWl0ID0gYXN5bmMgKGRhdGEpID0+IHtcclxuICAgICAgICAgICAgdHJ5IHtcclxuICAgICAgICAgICAgICAgIGRhdGEgPSBPYmplY3QudmFsdWVzKGRhdGEpLnJlZHVjZSgoYWMsIGVsKSA9PiBhYyArIGVsKVxyXG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coZGF0YSk7XHJcbiAgICAgICAgICAgICAgICBhd2FpdCByZXF1ZXN0KCBWRVJJRllfUEFTU1dPUkRfUkVTRVQsIHsgY29kZTogZGF0YSB9LCB7XHJcbiAgICAgICAgICAgICAgICAgICAgaGVhZGVyczoge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAnQXV0aG9yaXphdGlvbic6IGBCZWFyZXIgJHtnZXRDb29raWUoYHJlc2V0LXRva2VuYCl9YFxyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgICAgICBzZXRTaG93RW1haWxDb2RlTWwoZmFsc2UpXHJcbiAgICAgICAgICAgICAgICBzZXRTaG93TmV3UGFzc3dvcmRNbCh0cnVlKVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGNhdGNoKCBlcnIgKSB7XHJcbiAgICAgICAgICAgICAgICB0b2FzdCggZXJyLnJlc3BvbnNlLmRhdGE/Lm1lc3NhZ2UgfHwgYHVua25vd24gZXJyb3JgLCB7XHJcbiAgICAgICAgICAgICAgICAgICAgdHlwZTogYGVycm9yYFxyXG4gICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcblxyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8PlxyXG4gICAgICAgICAgICB7c2hvd0dldEVtYWlsQ29kZU1sICYmXHJcbiAgICAgICAgICAgICAgICA8IE1vZGFsIG9uQ2xvc2U9e29uTW9kYWxDbG9zZX0gY29udGVudFN0eWxlcz17c3R5bGVzLm1fY29udGVudH0gY29udGFpbmVyU3R5bGVzPXtzdHlsZXMubV9jb250YWluZXJ9PlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuY29udGFpbmVyfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPFRpdGxlXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdHlsZXM9e3N0eWxlcy50aXRsZX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnRlbnQ9e3RyYW5zbGF0ZSgndGl0bGUnKX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGZvcm0gb25TdWJtaXQ9e2hhbmRsZVN1Ym1pdChzdWJtaXQpfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxUaXRsZVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN0eWxlcz17c3R5bGVzLmRlc2NyaXB0aW9ufVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnRlbnQ9e3RyYW5zbGF0ZSgnZGVzY3JpcHRpb24nKX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmlucHV0c30+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpbnB1dHMubWFwKChlbCwgaSkgPT4gKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGlucHV0XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWQ9e2VsLmlkfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGAke2VsLmNsYXNzfSBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgJHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGVycm9ycy5udW0xIHx8XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBlcnJvcnMubnVtMiB8fFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZXJyb3JzLm51bTMgfHxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGVycm9ycy5udW00IHx8XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBlcnJvcnMubnVtNSB8fFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZXJyb3JzLm51bTYgPyBzdHlsZXMuZXJyb3JfaW5wdXQgOiBzdHlsZXMuc3VjY2Vzc19pbnB1dFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9YC50cmltKCl9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdHlwZT17ZWwudHlwZX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBrZXk9e2VsLmtleX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBtYXhMZW5ndGg9e2VsLm1heExlbmd0aH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbklucHV0PXtlID0+IGp1bXAoZS50YXJnZXQpfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uS2V5RG93bj17ZSA9PiBqdW1wQmFjayhlKX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7Li4ucmVnaXN0ZXIoJ251bScgKyAoaSArIDEpKX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICkpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8U3VibWl0XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3R5bGVzPXtzdHlsZXMuc3VibWl0fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnRlbnQ9e3RyYW5zbGF0ZSgnc2VuZCcpfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9mb3JtPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIDxUb2FzdENvbnRhaW5lciAvPlxyXG4gICAgICAgICAgICAgICAgPC9Nb2RhbCA+XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgc2hvd05ld1Bhc3N3b3JkTWwgJiYgPE5ld1Bhc3N3b3JkIG9uTW9kYWxDbG9zZT17b25Nb2RhbENsb3NlfSAvPlxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgPC8+XHJcblxyXG4gICAgKVxyXG59XHJcbiIsImV4cG9ydCBjb25zdCAvLyBpbnB1dCBjb25maWdzXHJcbiAgICBpbnB1dHMgPSBbXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBpZDogJ2ZpcnN0JyxcclxuICAgICAgICAgICAgdHlwZTogJ3RleHQnLFxyXG4gICAgICAgICAgICBjbGFzczogJ21vdmUnLFxyXG4gICAgICAgICAgICBrZXk6IE1hdGgucmFuZG9tKCksXHJcbiAgICAgICAgICAgIG1heExlbmd0aDogXCIxXCIsXHJcbiAgICAgICAgfSxcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIGlkOiAnc2Vjb25kJyxcclxuICAgICAgICAgICAgdHlwZTogJ3RleHQnLFxyXG4gICAgICAgICAgICBjbGFzczogJ21vdmUnLFxyXG4gICAgICAgICAgICBrZXk6IE1hdGgucmFuZG9tKCksXHJcbiAgICAgICAgICAgIG1heExlbmd0aDogJzEnLFxyXG4gICAgICAgIH0sXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBpZDogJ3RoaXJkJyxcclxuICAgICAgICAgICAgdHlwZTogJ3RleHQnLFxyXG4gICAgICAgICAgICBjbGFzczogJ21vdmUnLFxyXG4gICAgICAgICAgICBrZXk6IE1hdGgucmFuZG9tKCksXHJcbiAgICAgICAgICAgIG1heExlbmd0aDogJzEnLFxyXG4gICAgICAgIH0sXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBpZDogJ2ZvdXJ0aCcsXHJcbiAgICAgICAgICAgIHR5cGU6ICd0ZXh0JyxcclxuICAgICAgICAgICAgY2xhc3M6ICdtb3ZlJyxcclxuICAgICAgICAgICAga2V5OiBNYXRoLnJhbmRvbSgpLFxyXG4gICAgICAgICAgICBtYXhMZW5ndGg6ICcxJyxcclxuICAgICAgICB9LFxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgaWQ6ICdmaWZ0aCcsXHJcbiAgICAgICAgICAgIHR5cGU6ICd0ZXh0JyxcclxuICAgICAgICAgICAgY2xhc3M6ICdtb3ZlJyxcclxuICAgICAgICAgICAga2V5OiBNYXRoLnJhbmRvbSgpLFxyXG4gICAgICAgICAgICBtYXhMZW5ndGg6ICcxJyxcclxuICAgICAgICB9LFxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgaWQ6ICdzaXh0aCcsXHJcbiAgICAgICAgICAgIHR5cGU6ICd0ZXh0JyxcclxuICAgICAgICAgICAgY2xhc3M6ICdtb3ZlJyxcclxuICAgICAgICAgICAga2V5OiBNYXRoLnJhbmRvbSgpLFxyXG4gICAgICAgICAgICBtYXhMZW5ndGg6ICcxJyxcclxuICAgICAgICB9LFxyXG4gICAgXSIsIi8vIGhvb2tzIGFuZCBoZWxwZXJzXHJcbmltcG9ydCB1c2VUcmFuc2xhdGlvbiBmcm9tICduZXh0LXRyYW5zbGF0ZS91c2VUcmFuc2xhdGlvbidcclxuaW1wb3J0IHsgdXNlRm9ybSB9IGZyb20gJ3JlYWN0LWhvb2stZm9ybSdcclxuaW1wb3J0IHsgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCdcclxuaW1wb3J0ICogYXMgeXVwIGZyb20gJ3l1cCdcclxuaW1wb3J0IHsgeXVwUmVzb2x2ZXIgfSBmcm9tICdAaG9va2Zvcm0vcmVzb2x2ZXJzL3l1cCdcclxuLy9jb21wb25lbnRzXHJcbmltcG9ydCB7IFRpdGxlIH0gZnJvbSAnLi4vLi4vY29tbW9uL1RpdGxlJ1xyXG5pbXBvcnQgeyBJbnB1dENvbnRhaW5lciB9IGZyb20gJy9jb21wb25lbnRzL2NvbW1vbi9hdXRoL0lucHV0Q29udGFpbmVyL0lucHV0Q29udGFpbmVyJ1xyXG5pbXBvcnQgeyBTdWJtaXQgfSBmcm9tICcuLi8uLi9jb21tb24vU3VibWl0J1xyXG5pbXBvcnQgeyBNb2RhbCB9IGZyb20gJy4uLy4uLy4uLy4uLy4uL2NvbW1vbi9hdXRoL01vZGFsL01vZGFsJ1xyXG5pbXBvcnQgeyBUb2FzdENvbnRhaW5lciwgdG9hc3QgfSBmcm9tICdyZWFjdC10b2FzdGlmeSc7XHJcblxyXG4vLyBzdHlsZXNcclxuaW1wb3J0IHN0eWxlcyBmcm9tICcuL05ld1Bhc3N3b3JkLm1vZHVsZS5zY3NzJ1xyXG5pbXBvcnQgeyBTdWNjZXNzIH0gZnJvbSAnLi4vU3VjY2Vzcy9TdWNjZXNzJ1xyXG5cclxuaW1wb3J0IHsgcmVxdWVzdCwgZ2V0Q29va2llIH0gZnJvbSAnL2xpYi9lci5saWInO1xyXG5pbXBvcnQgeyBTRVRfTkVXX1BBU1NXT1JEIH0gZnJvbSAnLi4vLi4vLi4vLi4vLi4vLi4vbGliL3JlcXVlc3QtZGVzdGluYXRpb25zJ1xyXG5cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBOZXdQYXNzd29yZCh7IG9uTW9kYWxDbG9zZSB9KSB7XHJcbiAgICBjb25zdFxyXG4gICAgICAgIC8vIG1vZGFsIHN0YXRlcyBwYXNzID0+IHBhc3N3b3JkIE1sID0+IE1vZGFsXHJcbiAgICAgICAgW3Nob3dOZXdQYXNzTWwsIHNldFNob3dOZXdQYXNzTWxdID0gdXNlU3RhdGUodHJ1ZSksXHJcbiAgICAgICAgW3Nob3dTdWNjZXNzTWwsIHNldFNob3dTdWNjZXNzTWxdID0gdXNlU3RhdGUoZmFsc2UpLFxyXG4gICAgICAgIC8vIHRyYW5zbGF0aW9uIGNvbnNmaWdzXHJcbiAgICAgICAgeyB0IH0gPSB1c2VUcmFuc2xhdGlvbignY29tbW9uJyksXHJcbiAgICAgICAgdHJhbnNsYXRpb25QYXRoID0gJ2hlYWRlci5uZXdQYXNzd29yZE1vZGFsLicsXHJcbiAgICAgICAgdHJhbnNsYXRlID0ga2V5ID0+IHQoYCR7dHJhbnNsYXRpb25QYXRofSR7a2V5fWApLFxyXG4gICAgICAgIC8vIHl1cCBjb25maWdzXHJcbiAgICAgICAgc2NoZW1hID0geXVwLm9iamVjdCgpLnNoYXBlKHtcclxuICAgICAgICAgICAgcGFzc3dvcmQ6IHl1cFxyXG4gICAgICAgICAgICAgICAgLnN0cmluZygpXHJcbiAgICAgICAgICAgICAgICAucmVxdWlyZWQoKVxyXG4gICAgICAgICAgICAgICAgLm1pbig2KVxyXG4gICAgICAgIH0pLFxyXG4gICAgICAgIC8vIGZvcm0gY29uZmlnc1xyXG4gICAgICAgIHsgcmVnaXN0ZXIsIGhhbmRsZVN1Ym1pdCwgZm9ybVN0YXRlOiB7IGVycm9ycyB9IH0gPSB1c2VGb3JtKHtcclxuICAgICAgICAgICAgbW9kZTogJ29uQ2hhbmdlJyxcclxuICAgICAgICAgICAgcmVzb2x2ZXI6IHl1cFJlc29sdmVyKHNjaGVtYSlcclxuICAgICAgICB9KSxcclxuICAgICAgICAvLyBvbiBmb3JtIHN1Ym1pdFxyXG4gICAgICAgIHN1Ym1pdCA9IGFzeW5jICggZGF0YSApID0+IHtcclxuICAgICAgICAgICAgdHJ5IHtcclxuICAgICAgICAgICAgICAgIGF3YWl0IHJlcXVlc3QoIFNFVF9ORVdfUEFTU1dPUkQsIHsgcGFzc3dvcmQ6IGRhdGEucGFzc3dvcmQgfSwge1xyXG4gICAgICAgICAgICAgICAgICAgIGhlYWRlcnM6IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgJ0F1dGhvcml6YXRpb24nOiBgQmVhcmVyICR7Z2V0Q29va2llKGByZXNldC10b2tlbmApfWBcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICAgICAgc2V0U2hvd05ld1Bhc3NNbChmYWxzZSlcclxuICAgICAgICAgICAgICAgIHNldFNob3dTdWNjZXNzTWwodHJ1ZSlcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBjYXRjaCAoIGVyciApIHtcclxuICAgICAgICAgICAgICAgIHRvYXN0KCBlcnIucmVzcG9uc2UuZGF0YT8ubWVzc2FnZSB8fCBgdW5rbm93biBlcnJvcmAsIHtcclxuICAgICAgICAgICAgICAgICAgICB0eXBlOiBgZXJyb3JgXHJcbiAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuXHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIDw+XHJcbiAgICAgICAgICAgIHtzaG93TmV3UGFzc01sICYmXHJcbiAgICAgICAgICAgICAgICA8TW9kYWwgb25DbG9zZT17b25Nb2RhbENsb3NlfSBjb250ZW50U3R5bGVzPXtzdHlsZXMubV9jb250ZW50fSBjb250YWluZXJTdHlsZXM9e3N0eWxlcy5tX2NvbnRhaW5lcn0+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5jb250YWluZXJ9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8VGl0bGVcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN0eWxlcz17c3R5bGVzLnRpdGxlfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY29udGVudD17dHJhbnNsYXRlKCd0aXRsZScpfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8Zm9ybSBvblN1Ym1pdD17aGFuZGxlU3VibWl0KHN1Ym1pdCl9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5pbnB1dHN9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxJbnB1dENvbnRhaW5lclxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZD0ncGFzc3dvcmQnXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU9J3Bhc3N3b3JkJ1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwbGFjZWhvbGRlcj17dCgncmVnaXN0cmF0aW9uLmlucHV0UGxhY2VIb2xkZXJzLnBhc3N3b3JkJyl9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGVycm9ycz17ISFlcnJvcnMucGFzc3dvcmR9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG90aGVyPXtyZWdpc3RlcigncGFzc3dvcmQnKX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8U3VibWl0XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3R5bGVzPXtzdHlsZXMuc3VibWl0fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnRlbnQ9e3RyYW5zbGF0ZSgnc3VjY2VzcycpfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9mb3JtPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIDxUb2FzdENvbnRhaW5lciAvPlxyXG4gICAgICAgICAgICAgICAgPC9Nb2RhbD5cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICBzaG93U3VjY2Vzc01sICYmIDxTdWNjZXNzIG9uTW9kYWxDbG9zZT17b25Nb2RhbENsb3NlfSAvPlxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgPC8+XHJcbiAgICApXHJcbn1cclxuIiwiLy8gaG9va3MgaGVscGVyc1xyXG5pbXBvcnQgdXNlVHJhbnNsYXRpb24gZnJvbSAnbmV4dC10cmFuc2xhdGUvdXNlVHJhbnNsYXRpb24nXHJcbi8vIGNvbXBvbmVudHNcclxuaW1wb3J0IHsgTW9kYWwgfSBmcm9tICcuLi8uLi8uLi8uLi8uLi9jb21tb24vYXV0aC9Nb2RhbC9Nb2RhbCdcclxuaW1wb3J0IHsgVGl0bGUgfSBmcm9tICcuLi8uLi9jb21tb24vVGl0bGUnXHJcbi8vIHN0eWxlc1xyXG5pbXBvcnQgc3R5bGVzIGZyb20gJy4vU3VjY2Vzcy5tb2R1bGUuc2NzcydcclxuLy8gaWNvbnNcclxuaW1wb3J0IHN1Y2Nlc3NJY29uIGZyb20gJy9wdWJsaWMvaW1hZ2VzL2hlYWRlci9sb2dpbi9zdWNjZXNzLnBuZydcclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBTdWNjZXNzKHsgb25Nb2RhbENsb3NlIH0pIHtcclxuXHJcbiAgICBjb25zdFxyXG4gICAgICAgIC8vIHRyYW5zbGF0aW9uICAgIFxyXG4gICAgICAgIHsgdCB9ID0gdXNlVHJhbnNsYXRpb24oJ2NvbW1vbicpLFxyXG4gICAgICAgIHRyYW5zbGF0aW9uUGF0aCA9ICdoZWFkZXIuc3VjY2Vzc01vZGFsLicsXHJcbiAgICAgICAgdHJhbnNsYXRlID0ga2V5ID0+IHQoYCR7dHJhbnNsYXRpb25QYXRofSR7a2V5fWApXHJcblxyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8TW9kYWwgb25DbG9zZT17b25Nb2RhbENsb3NlfSBjb250ZW50U3R5bGVzPXtzdHlsZXMubV9jb250ZW50fSBjb250YWluZXJTdHlsZXM9e3N0eWxlcy5tX2NvbnRhaW5lcn0+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuY29udGFpbmVyfT5cclxuICAgICAgICAgICAgICAgIDxUaXRsZVxyXG4gICAgICAgICAgICAgICAgICAgIHN0eWxlcz17c3R5bGVzLnRpdGxlfVxyXG4gICAgICAgICAgICAgICAgICAgIGNvbnRlbnQ9e3RyYW5zbGF0ZSgndGl0bGUnKX1cclxuICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmljb25fY29udGFpbmVyfT5cclxuICAgICAgICAgICAgICAgICAgICA8aW1nXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHNyYz17c3VjY2Vzc0ljb24uc3JjfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBhbHQ9J1N1Y2Nlc3MgaW1nJ1xyXG4gICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC9Nb2RhbD5cclxuICAgIClcclxufVxyXG4iLCIvLyBJY29uc1xyXG5pbXBvcnQgZmFjZWJvb2sgZnJvbSAnL3B1YmxpYy9pbWFnZXMvaGVhZGVyL2xvZ2luL2ZhY2Vib29rLnN2ZydcclxuaW1wb3J0IGdtYWlsIGZyb20gJy9wdWJsaWMvaW1hZ2VzL2hlYWRlci9sb2dpbi9nbWFpbC5zdmcnXHJcbmltcG9ydCB2ayBmcm9tICcvcHVibGljL2ltYWdlcy9oZWFkZXIvbG9naW4vdmsuc3ZnJ1xyXG5pbXBvcnQgdHdpdHRlciBmcm9tICcvcHVibGljL2ltYWdlcy9oZWFkZXIvbG9naW4vdHdpdHRlci5zdmcnXHJcbi8vIHNjc3NcclxuaW1wb3J0IHN0eWxlcyBmcm9tICcuL1NvY2lhbE1lZGlhSWNvbnMubW9kdWxlLnNjc3MnXHJcbi8vIGNvbXBvbmVudHNcclxuaW1wb3J0IFJlYWN0RmFjZWJvb2tMb2dpbiBmcm9tICdyZWFjdC1mYWNlYm9vay1sb2dpbidcclxuaW1wb3J0IEdvb2dsZUxvZ2luIGZyb20gJ3JlYWN0LWdvb2dsZS1sb2dpbidcclxuaW1wb3J0IFR3aXR0ZXJMb2dpbiBmcm9tIFwicmVhY3QtdHdpdHRlci1sb2dpblwiO1xyXG5pbXBvcnQgeyB1c2VFZmZlY3QgfSBmcm9tICdyZWFjdCdcclxuXHJcbmNvbnN0IGljb25zID0gW1xyXG4gICAge1xyXG4gICAgICAgIGljb25Vcmw6IGZhY2Vib29rLnNyYyxcclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgICAgaWNvblVybDogZ21haWwuc3JjLFxyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgICBpY29uVXJsOiB2ay5zcmMsXHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICAgIGljb25Vcmw6IHR3aXR0ZXIuc3JjLFxyXG4gICAgfV1cclxuXHJcblxyXG5cclxuY29uc3QgcmVzcG9uc2VGYWNlYm9vayA9IChyZXNwb25zZSkgPT4ge1xyXG4gICAgY29uc29sZS5sb2cocmVzcG9uc2UpO1xyXG59XHJcblxyXG5jb25zdCByZXNwb25zZUdvb2dsZSA9IChyZXNwb25zZSkgPT4ge1xyXG4gICAgY29uc29sZS5sb2cocmVzcG9uc2UpO1xyXG59XHJcblxyXG5jb25zdCBUV0lUVEVSX0NPTlNVTUVSX0tFWSA9IFwiXCI7XHJcbmNvbnN0IFRXSVRURVJfQ09OU1VNRVJfU0VDUkVUID0gXCJcIjtcclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBTb2NpYWxNZWRpYUljb25zKCkge1xyXG5cclxuXHJcbiAgICB1c2VFZmZlY3QoKCk9PnsgICAgICAgICAgICAgICAgICAgICAgICAgXHJcbiAgICAgVksuaW5pdCh7YXBpSWQ6Jzc5MTEyOTQnfSk7XHJcbiAgICB9LFtdKVxyXG4gICAgXHJcbiAgICBmdW5jdGlvbiBvblNvY2lhbE1lZGlhQnRuQ2xpY2soaSkge1xyXG4gICAgICAgIGlmIChpID09PSAwKSB7XHJcbiAgICAgICAgICAgIGNvbnN0IGZhY2Vib29rTG9naW5CdG4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKGAuZmFjZWJvb2stbG9naW4tYnRuYCk7XHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKCBmYWNlYm9va0xvZ2luQnRuICk7XHJcbiAgICAgICAgICAgIGlmIChmYWNlYm9va0xvZ2luQnRuKVxyXG4gICAgICAgICAgICAgICAgZmFjZWJvb2tMb2dpbkJ0bi5jbGljaygpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBlbHNlIGlmIChpID09PSAxKSB7XHJcbiAgICAgICAgICAgIGNvbnN0XHJcbiAgICAgICAgICAgICAgICBnb29nbGVMb2dpbkJ0biA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoYC5nb29nbGUtbG9naW4tYnRuYClcclxuICAgICAgICAgICAgaWYgKGdvb2dsZUxvZ2luQnRuKVxyXG4gICAgICAgICAgICAgICAgZ29vZ2xlTG9naW5CdG4uY2xpY2soKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgZWxzZSBpZiAoIGkgPT09IDIgKSB7ICAgICAgICAgICAgXHJcbiAgICAgICAgICAgIFZLLkF1dGgubG9naW4oZnVuY3Rpb24ocmVzcG9uc2Upe1xyXG4gICAgICAgICAgICAgICAgaWYocmVzcG9uc2Uuc2Vzc2lvbil7XHJcbiAgICAgICAgICAgICAgICAgICAgLypVc2VyIGF1dGhvcml6YXRpb24gc3VjY2VlZGVkKi9cclxuICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhyZXNwb25zZSlcclxuICAgICAgICAgICAgICAgICAgICBpZihyZXNwb25zZS5zdGF0dXM9PSdjb25uZWN0ZWQnKXtcclxuICAgICAgICAgICAgICAgICAgICAgICAgLypTZWxlY3RlZCB1c2VyIGFjY2VzcyBzZXR0aW5ncywgaWYgdGhleSBhcmUgcmVxdWVzdGVkKi9cclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgIC8qVXNlciBjbGlja3MgdGhlIGNhbmNlbCBidXR0b24gaW4gdGhlIGF1dGhvcml6YXRpb24gd2luZG93Ki9cclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsc2UgaWYgKCBpID09PSAzICkge1xyXG5cclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgY29uc3QgdHdpdHRlckF1dGhIYW5kbGVyID0gKCBlcnIsIGRhdGEgKSA9PiB7XHJcbiAgICAgICAgY29uc29sZS5sb2coIGVyciwgZGF0YSApO1xyXG4gICAgfVxyXG5cclxuICAgIFxyXG5cclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5jb250ZWluZXJ9PlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmNvbnRlbnR9PlxyXG4gICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgIGljb25zLm1hcCgoZWwsIGkpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIChcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuaWNvbkNvbnRlbnR9IGtleT17TWF0aC5yYW5kb20oKSAqIDEwfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YSB0YXJnZXQ9XCJfYmxhbmtcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5pY29uQm9keX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aW1nXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3JjPXtlbC5pY29uVXJsfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFsdD1cIlwiIG9uQ2xpY2s9eygpID0+IG9uU29jaWFsTWVkaWFCdG5DbGljayhpKX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9e3N0eWxlcy5pY29ufVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN0eWxlPXt7IGN1cnNvcjogJ3BvaW50ZXInIH19XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIChpID09PSAwKSAmJiAoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxSZWFjdEZhY2Vib29rTG9naW5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnRhaW5lclN0eWxlPXt7IGRpc3BsYXk6IGBub25lYCB9fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY3NzQ2xhc3M9XCJmYWNlYm9vay1sb2dpbi1idG5cIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYXBwSWQ9XCIxMTg4NjM3NzAzNjE2ODNcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZmllbGRzPVwibmFtZSxlbWFpbCxwaWN0dXJlXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNhbGxiYWNrPXtyZXNwb25zZUZhY2Vib29rfSAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIClcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAoaSA9PT0gMSkgJiYgKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8R29vZ2xlTG9naW5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsaWVudElkPVwiMTA4OTYxODA0Nzk0My1yOTFzdTlxa2MwYzlucG8xdGZvZmYzc3A4NDIxYnQ1Zy5hcHBzLmdvb2dsZXVzZXJjb250ZW50LmNvbVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZW5kZXI9e3JlbmRlclByb3BzID0+IChcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YnV0dG9uXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9e3JlbmRlclByb3BzLm9uQ2xpY2t9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRpc2FibGVkPXtyZW5kZXJQcm9wcy5kaXNhYmxlZH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3R5bGU9e3sgZGlzcGxheTogJ25vbmUnIH19XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImdvb2dsZS1sb2dpbi1idG5cIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8+KX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvb2tpZVBvbGljeT17J3NpbmdsZV9ob3N0X29yaWdpbid9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvblN1Y2Nlc3M9e3Jlc3BvbnNlR29vZ2xlfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb25GYWlsdXJlPXtyZXNwb25zZUdvb2dsZX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgeyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPFR3aXR0ZXJMb2dpblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhdXRoQ2FsbGJhY2s9e3R3aXR0ZXJBdXRoSGFuZGxlcn1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uc3VtZXJLZXk9e1RXSVRURVJfQ09OU1VNRVJfS0VZfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25zdW1lclNlY3JldD17VFdJVFRFUl9DT05TVU1FUl9TRUNSRVR9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9hPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIClcclxuICAgICAgICAgICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgIClcclxufVxyXG5cclxuLy8gVE9ET1xyXG4vLyBhZGQgZm9vdCBmb290YmV0IGRvbWFpbiBpbiBnb29nbGUgZGV2ZWxwb3JzIGFjY291bnQiLCJcclxuZXhwb3J0IGZ1bmN0aW9uIFJlc2V0UGFzc3dvcmRMaW5rKHsgc3R5bGVzLCBjb250ZW50LCBjbGljayB9KSB7XHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXN9ID5cclxuICAgICAgICAgICAgPHNwYW4gb25DbGljaz17Y2xpY2t9PlxyXG4gICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbnRlbnRcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgPC9zcGFuPlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgKVxyXG59XHJcbiIsImV4cG9ydCBmdW5jdGlvbiBTdWJtaXQoeyBzdHlsZXMsIGNvbnRlbnQsIGNsaWNrIH0pIHtcclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlc30+XHJcbiAgICAgICAgICAgIDxidXR0b24gdHlwZT0nc3VibWl0Jz5cclxuICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICBjb250ZW50XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIDwvYnV0dG9uPlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgKVxyXG59XHJcbiIsImV4cG9ydCBmdW5jdGlvbiBUaXRsZSh7IHN0eWxlcywgY29udGVudCB9KSB7XHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXN9PlxyXG4gICAgICAgICAgICA8cD5cclxuICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICBjb250ZW50XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIDwvcD5cclxuICAgICAgICA8L2Rpdj5cclxuICAgIClcclxufVxyXG4iLCJpbXBvcnQgTGluayBmcm9tICduZXh0L2xpbmsnXHJcblxyXG5leHBvcnQgZnVuY3Rpb24gVG9SZWdpc3Rlcih7XHJcbiAgICBjb250YWluZXJfc3R5bGVzLFxyXG4gICAgY29udGVudF9zdHlsZXMsXHJcbiAgICBvcixcclxuICAgIHJlZ2lzdGVyX3RleHRfc3R5bGVzLFxyXG4gICAgY29udGVudCxcclxuICAgIGhyZWYsXHJcbiAgICBjbGljayB9KSB7XHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIDxkaXZcclxuICAgICAgICAgICAgY2xhc3NOYW1lPXtjb250YWluZXJfc3R5bGVzfVxyXG4gICAgICAgICAgICBvbkNsaWNrPXtjbGlja30+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtjb250ZW50X3N0eWxlc30+XHJcbiAgICAgICAgICAgICAgICA8c3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG9yICsgXCIgXCJcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICA8L3NwYW4+XHJcbiAgICAgICAgICAgICAgICA8TGluayBocmVmPXtocmVmfT5cclxuICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9e3JlZ2lzdGVyX3RleHRfc3R5bGVzfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY29udGVudFxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgPC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgPC9MaW5rPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8L2RpdiA+XHJcbiAgICApXHJcbn1cclxuIiwiLy8gc3R5bGVzXHJcbmltcG9ydCBzdHlsZXMgZnJvbSAnLi9Mb2dvLm1vZHVsZS5zY3NzJ1xyXG4vLyBjb21wb25lbnRzXHJcbmltcG9ydCBMaW5rIGZyb20gJ25leHQvbGluaydcclxuLy8gaW1hZ2VzIGFuZCBpY29uc1xyXG5pbXBvcnQgbG9nbyBmcm9tICcvcHVibGljL2ltYWdlcy9oZWFkZXIvbG9nby5zdmcnXHJcblxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIExvZ28oKSB7XHJcblxyXG4gICAgcmV0dXJuIChcclxuXHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5sb2dvX2NvbmF0aW5lcn0+XHJcbiAgICAgICAgICAgIDxMaW5rIGhyZWY9Jy8nPlxyXG4gICAgICAgICAgICAgICAgPGltZ1xyXG4gICAgICAgICAgICAgICAgICAgIHNyYz17bG9nby5zcmN9XHJcbiAgICAgICAgICAgICAgICAgICAgYWx0PVwiRm9vdEJldCBMb2dvXCJcclxuICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgIDwvTGluayA+XHJcbiAgICAgICAgPC9kaXY+XHJcblxyXG4gICAgKVxyXG59XHJcbiIsIi8vIGhvb2tzXHJcbmltcG9ydCB7IHVzZVNlbGVjdG9yIH0gZnJvbSAncmVhY3QtcmVkdXgnXHJcbi8vc3R5bGVzXHJcbmltcG9ydCBzdHlsZXMgZnJvbSAnLi9IZWFkZXIubW9kdWxlLnNjc3MnXHJcbi8vIGNvbXBvbmVudHNcclxuaW1wb3J0IHsgQmFyIH0gZnJvbSAnLi9CYXIvQmFyJ1xyXG5pbXBvcnQgeyBOYXZCYXIgfSBmcm9tICcuL05hdkJhci9OYXZCYXInXHJcbmltcG9ydCB7IFNvY2lhbE1lZGlhIH0gZnJvbSAnLi9Tb2NpYWxNZWRpYS9Tb2NpYWxNZWRpYSdcclxuLy8gaW1nZXNcclxuaW1wb3J0IGZvb3RiYWxsZXIgZnJvbSAnL3B1YmxpYy9pbWFnZXMvaGVhZGVyL2Zvb3RiYWxsZXIuc3ZnJ1xyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIEhlYWRlcih7IG1haW5zUGFnZXMgfSkge1xyXG5cclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPD5cclxuICAgICAgICAgICAge21haW5zUGFnZXMgP1xyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5oZWFkZXJfY29udGFpbmVyX2JpZ30+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5iYXJ9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8U29jaWFsTWVkaWEgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5iYXJfY29udHJvbGVyfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuYmFyX2NvbnRlaW5lcn0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5iYXJfY29udGVudH0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxCYXJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJhcl9pdGVtc19jb250PXtzdHlsZXMuYmFyX2l0ZW1zX2NvbnR9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBiYXJfaXRlbXM9e3N0eWxlcy5iYXJfaXRlbXN9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuZm9vdGJhbGxlcn0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGltZyBzcmM9e2Zvb3RiYWxsZXIuc3JjfSBhbHQ9XCJcIiAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIDxOYXZCYXIgLz5cclxuICAgICAgICAgICAgICAgIDwvZGl2PiA6XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmhlYWRlcl9jb250YWluZXJfc21hbGx9PlxyXG4gICAgICAgICAgICAgICAgICAgIDxCYXIgLz5cclxuICAgICAgICAgICAgICAgICAgICA8TmF2QmFyIC8+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIDwvPlxyXG5cclxuICAgIClcclxufVxyXG5cclxuIiwiaW1wb3J0IExpbmsgZnJvbSAnbmV4dC9saW5rJ1xyXG4vLyBzdHlsZXNcclxuaW1wb3J0IHN0eWxlcyBmcm9tICcuL0J1dHRvbi5tb2R1bGUuc2NzcydcclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBCdXR0b24oe1xyXG4gICAgaHJlZixcclxuICAgIGNvbnRlbnRGcnN0UCxcclxuICAgIGNvbnRlbnRTZWNQID0gbnVsbCxcclxuICAgIGFjdGl2ZSxcclxuICAgIGNsaWNrID0gbnVsbCB9KSB7XHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIDw+XHJcbiAgICAgICAgICAgIHtocmVmICE9PSBudWxsID9cclxuICAgICAgICAgICAgICAgIDxMaW5rIGhyZWY9e2hyZWZ9PlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtgJHtzdHlsZXMuY29udGFpbmVyfSAke2FjdGl2ZSAmJiBzdHlsZXMuYWN0aXZlfWB9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9e3N0eWxlcy5jb250ZW50fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgb25DbGljaz17Y2xpY2t9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwcmU+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb250ZW50RnJzdFBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGJyIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb250ZW50U2VjUFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvcHJlPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICA8L2RpdiA+XHJcbiAgICAgICAgICAgICAgICA8L0xpbms+IFxyXG4gICAgICAgICAgICAgICAgOlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e2Ake3N0eWxlcy5jb250YWluZXJ9ICR7YWN0aXZlICYmIHN0eWxlcy5hY3RpdmV9YH0+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9e3N0eWxlcy5jb250ZW50fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBvbkNsaWNrPXtjbGlja31cclxuICAgICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxwcmU+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29udGVudEZyc3RQXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YnIgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb250ZW50U2VjUFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L3ByZT5cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDwvZGl2ID5cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIDwvPlxyXG5cclxuICAgIClcclxufVxyXG4iLCIvLyBob29rcyBhbmQgaGVscGVyc1xyXG5pbXBvcnQgeyB1c2VSb3V0ZXIgfSBmcm9tICduZXh0L2Rpc3QvY2xpZW50L3JvdXRlcidcclxuaW1wb3J0IHsgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCdcclxuLy8gc3R5bGVzXHJcbmltcG9ydCBzdHlsZXMgZnJvbSAnLi9OYXZCYXIubW9kdWxlLnNjc3MnXHJcbi8vIHRyYW5zbGF0aW9uIFxyXG5pbXBvcnQgdXNlVHJhbnNsYXRpb24gZnJvbSAnbmV4dC10cmFuc2xhdGUvdXNlVHJhbnNsYXRpb24nXHJcbi8vIGNvbXBvbmV0bnNcclxuaW1wb3J0IHsgQnV0dG9uIH0gZnJvbSAnLi9CdXR0b24vQnV0dG9uJ1xyXG5pbXBvcnQgQ29udGFjdHNNb2RhbCBmcm9tICcuLi8uLi9QYWdlcy9Db250YWN0cy9Db250YWN0c01vZGFsJ1xyXG5cclxuXHJcblxyXG5leHBvcnQgZnVuY3Rpb24gTmF2QmFyKCkge1xyXG5cclxuICAgIGNvbnN0XHJcbiAgICAgICAgLy9zdGF0ZXNcclxuICAgICAgICBbc2hvd0NvbnRhY3RzTW9kYWwsIHNldFNob3dDb250YWN0c01vZGFsXSA9IHVzZVN0YXRlKGZhbHNlKSxcclxuICAgICAgICB7IHQgfSA9IHVzZVRyYW5zbGF0aW9uKCdjb21tb24nKSxcclxuICAgICAgICB0cmFuc2xhdGlvblBhdGggPSAnaGVhZGVyLm5hdkJhci4nLFxyXG4gICAgICAgIHRyYW5zbGF0ZSA9IChrZXkpID0+IHQoYCR7dHJhbnNsYXRpb25QYXRofSR7a2V5fWApLFxyXG4gICAgICAgIC8vIHJvdXRlclxyXG4gICAgICAgIHJvdXRlciA9IHVzZVJvdXRlcigpLFxyXG4gICAgICAgIC8vIG5hdiBiYXIgYnV0dG9ucyBjb25maWdzXHJcbiAgICAgICAgYnV0dG9uc0luSG9tZVBhZ2UgPSBbXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIGlkOiAnbWFpbicsXHJcbiAgICAgICAgICAgICAgICBrZXk6IE1hdGgucmFuZG9tKCksXHJcbiAgICAgICAgICAgICAgICBmcnN0Q29udGVudDogdHJhbnNsYXRlKCdtYWluJyksXHJcbiAgICAgICAgICAgICAgICBocmVmOiAnLydcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgaWQ6ICdnYW1lcycsXHJcbiAgICAgICAgICAgICAgICBrZXk6IE1hdGgucmFuZG9tKCksXHJcbiAgICAgICAgICAgICAgICBmcnN0Q29udGVudDogdHJhbnNsYXRlKCdnYW1lcycpLFxyXG4gICAgICAgICAgICAgICAgaHJlZjogJy9nYW1lcydcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgaWQ6ICdzdGF0aXN0aWNzJyxcclxuICAgICAgICAgICAgICAgIGtleTogTWF0aC5yYW5kb20oKSxcclxuICAgICAgICAgICAgICAgIGZyc3RDb250ZW50OiB0cmFuc2xhdGUoJ3N0YXRpc3RpY3MuZnJzJyksXHJcbiAgICAgICAgICAgICAgICBzZWNDb250ZW50OiB0cmFuc2xhdGUoJ3N0YXRpc3RpY3Muc2VjJyksXHJcbiAgICAgICAgICAgICAgICBocmVmOiAnL3N0YXRpc3RpY3MnXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIGlkOiAncHJlZGljdGlvbicsXHJcbiAgICAgICAgICAgICAgICBrZXk6IE1hdGgucmFuZG9tKCksXHJcbiAgICAgICAgICAgICAgICBmcnN0Q29udGVudDogdHJhbnNsYXRlKCdwcmVkaWN0aW9uLmZycycpLFxyXG4gICAgICAgICAgICAgICAgc2VjQ29udGVudDogdHJhbnNsYXRlKCdwcmVkaWN0aW9uLnNlYycpLFxyXG4gICAgICAgICAgICAgICAgaHJlZjogJy9wcmVkaWN0aW9uJ1xyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICBpZDogJ3Rlc3RpbW9uaWFscycsXHJcbiAgICAgICAgICAgICAgICBrZXk6IE1hdGgucmFuZG9tKCksXHJcbiAgICAgICAgICAgICAgICBmcnN0Q29udGVudDogdHJhbnNsYXRlKCd0ZXN0aW1vbmlhbHMnKSxcclxuICAgICAgICAgICAgICAgIGhyZWY6ICcvdGVzdGltb25pYWxzJ1xyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICBpZDogJ2Fib3V0VXMnLFxyXG4gICAgICAgICAgICAgICAga2V5OiBNYXRoLnJhbmRvbSgpLFxyXG4gICAgICAgICAgICAgICAgZnJzdENvbnRlbnQ6IHRyYW5zbGF0ZSgnYWJvdXRVcycpLFxyXG4gICAgICAgICAgICAgICAgaHJlZjogJy9hYm91dFVzJ1xyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICBpZDogJ2NvbnRhY3RzJyxcclxuICAgICAgICAgICAgICAgIGtleTogTWF0aC5yYW5kb20oKSxcclxuICAgICAgICAgICAgICAgIGZyc3RDb250ZW50OiB0cmFuc2xhdGUoJ2NvbnRhY3RzJyksXHJcbiAgICAgICAgICAgICAgICBocmVmOiBudWxsLFxyXG4gICAgICAgICAgICAgICAgY2xpY2s6ICgpID0+IHNldFNob3dDb250YWN0c01vZGFsKHRydWUpXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgXSxcclxuICAgICAgICBidXR0b25zID0gYnV0dG9uc0luSG9tZVBhZ2UuZmlsdGVyKGVsID0+IGVsLmlkICE9PSBcInN0YXRpc3RpY3NcIilcclxuXHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIDw+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtgJHtzdHlsZXMuY29udGFpbmVyfSAke3JvdXRlci5wYXRobmFtZSAhPT0gJy8nID8gc3R5bGVzLnRhYmxldCA6IG51bGx9YH0+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmNvbnRlbnR9PlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMudG9wX29uX3RhYmxldH0+XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAocm91dGVyLnBhdGhuYW1lID09PSAnLycgPyBidXR0b25zSW5Ib21lUGFnZSA6IGJ1dHRvbnMpLm1hcCgoZWwsIGkpID0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaSA8IDMgJiYgKDxCdXR0b25cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29udGVudEZyc3RQPXtlbC5mcnN0Q29udGVudH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29udGVudFNlY1A9e2VsLnNlY0NvbnRlbnR9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGhyZWY9e2VsLmhyZWZ9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGtleT17ZWwua2V5fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhY3RpdmU9e3JvdXRlci5wYXRobmFtZSA9PT0gZWwuaHJlZiA/ICd0cnVlJyA6IG51bGx9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsaWNrPXtlbC5jbGljayAmJiBlbC5jbGlja31cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICkpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmJvdHRvbV9vbl90YWJsZXR9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAocm91dGVyLnBhdGhuYW1lID09PSAnLycgPyBidXR0b25zSW5Ib21lUGFnZSA6IGJ1dHRvbnMpLm1hcCgoZWwsIGkpID0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaSA+PSAzICYmICg8QnV0dG9uXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnRlbnRGcnN0UD17ZWwuZnJzdENvbnRlbnR9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnRlbnRTZWNQPXtlbC5zZWNDb250ZW50fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBocmVmPXtlbC5ocmVmfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBrZXk9e2VsLmtleX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYWN0aXZlPXtyb3V0ZXIucGF0aG5hbWUgPT09IGVsLmhyZWYgPyAndHJ1ZScgOiBudWxsfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGljaz17ZWwuY2xpY2sgJiYgZWwuY2xpY2t9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcblxyXG5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgc2hvd0NvbnRhY3RzTW9kYWwgJiZcclxuICAgICAgICAgICAgICAgIDxDb250YWN0c01vZGFsXHJcbiAgICAgICAgICAgICAgICAgICAgb3BlbmVkPXtzaG93Q29udGFjdHNNb2RhbCA/IHRydWUgOiBmYWxzZX1cclxuICAgICAgICAgICAgICAgICAgICBvbk1vZGFsQ2xvc2U9eygpID0+IHNldFNob3dDb250YWN0c01vZGFsKGZhbHNlKX1cclxuICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICA8Lz5cclxuXHJcbiAgICApXHJcbn1cclxuIiwiaW1wb3J0IHN0eWxlcyBmcm9tICcuL0ljb24ubW9kdWxlLnNjc3MnXHJcblxyXG5leHBvcnQgZnVuY3Rpb24gSWNvbih7IHNyYywgY2xpY2ssIGlkIH0pIHtcclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5jb250YWluZXJ9IGlkPXtpZH0+XHJcbiAgICAgICAgICAgIDxpbWdcclxuICAgICAgICAgICAgICAgIHNyYz17c3JjfVxyXG4gICAgICAgICAgICAgICAgYWx0PXtgaWNvbnMtJHtzcmN9YH1cclxuICAgICAgICAgICAgICAgIG9uQ2xpY2s9e2NsaWNrfVxyXG4gICAgICAgICAgICAvPlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgKVxyXG59XHJcbiIsImltcG9ydCB7IE1vZGFsIH0gZnJvbSBcIi4uLy4uLy4uLy4uL2NvbW1vbi9hdXRoL01vZGFsL01vZGFsXCJcclxuaW1wb3J0IHN0eWxlcyBmcm9tICcuLi9Tb2NpYWxNZWRpYU1vZGFsLm1vZHVsZS5zY3NzJ1xyXG5pbXBvcnQgTGluayBmcm9tICduZXh0L2xpbmsnXHJcblxyXG5leHBvcnQgZnVuY3Rpb24gRmFjZWJvb2soeyBvbk1vZGFsQ2xvc2UsIGRhdGEsIHBhcmVudCB9KSB7XHJcblxyXG4gICAgY29uc3QgdG9wID0gcGFyZW50LmN1cnJlbnQuY2hpbGRyZW4uZmFjZWJvb2sub2Zmc2V0VG9wXHJcblxyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8TW9kYWxcclxuICAgICAgICAgICAgb25DbG9zZT17b25Nb2RhbENsb3NlfVxyXG4gICAgICAgICAgICBjb250YWluZXJTdHlsZXM9e3N0eWxlcy5jb250YWluZXJ9XHJcbiAgICAgICAgICAgIGNvbnRlbnRTdHlsZXM9e3N0eWxlcy5jb250ZW50fVxyXG4gICAgICAgICAgICBvdGhlclN0eWxlcz17eyB0b3A6IHRvcCArICdweCcgfX1cclxuICAgICAgICA+XHJcbiAgICAgICAgICAgIDxMaW5rIGhyZWY9e2RhdGEudXJsfT5cclxuICAgICAgICAgICAgICAgIDxhIHRhcmdldD1cIl9ibGFua1wiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxwPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBkYXRhLnRleHRcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIDwvcD5cclxuICAgICAgICAgICAgICAgIDwvYT5cclxuICAgICAgICAgICAgPC9MaW5rPlxyXG4gICAgICAgIDwvTW9kYWw+XHJcbiAgICApXHJcbn0iLCJpbXBvcnQgeyBNb2RhbCB9IGZyb20gXCIuLi8uLi8uLi8uLi9jb21tb24vYXV0aC9Nb2RhbC9Nb2RhbFwiXHJcbmltcG9ydCBzdHlsZXMgZnJvbSAnLi4vU29jaWFsTWVkaWFNb2RhbC5tb2R1bGUuc2NzcydcclxuaW1wb3J0IExpbmsgZnJvbSAnbmV4dC9saW5rJ1xyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIEluc3RhZ3JhbSh7IG9uTW9kYWxDbG9zZSwgZGF0YSwgcGFyZW50IH0pIHtcclxuXHJcbiAgICBjb25zdCB0b3AgPSBwYXJlbnQuY3VycmVudC5jaGlsZHJlbi5pbnN0YWdyYW0ub2Zmc2V0VG9wXHJcblxyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8TW9kYWxcclxuICAgICAgICAgICAgb25DbG9zZT17b25Nb2RhbENsb3NlfVxyXG4gICAgICAgICAgICBjb250YWluZXJTdHlsZXM9e3N0eWxlcy5jb250YWluZXJ9XHJcbiAgICAgICAgICAgIGNvbnRlbnRTdHlsZXM9e3N0eWxlcy5jb250ZW50fVxyXG4gICAgICAgICAgICBvdGhlclN0eWxlcz17eyB0b3A6IHRvcCArICdweCcgfX1cclxuICAgICAgICA+XHJcbiAgICAgICAgICAgIDxMaW5rIGhyZWY9e2RhdGEudXJsfT5cclxuICAgICAgICAgICAgICAgIDxhIHRhcmdldD1cIl9ibGFua1wiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxwPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBkYXRhLnRleHRcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIDwvcD5cclxuICAgICAgICAgICAgICAgIDwvYT5cclxuICAgICAgICAgICAgPC9MaW5rPlxyXG4gICAgICAgIDwvTW9kYWw+XHJcbiAgICApXHJcbn0iLCJpbXBvcnQgeyBNb2RhbCB9IGZyb20gXCIuLi8uLi8uLi8uLi9jb21tb24vYXV0aC9Nb2RhbC9Nb2RhbFwiXHJcbmltcG9ydCBzdHlsZXMgZnJvbSAnLi4vU29jaWFsTWVkaWFNb2RhbC5tb2R1bGUuc2NzcydcclxuaW1wb3J0IExpbmsgZnJvbSAnbmV4dC9saW5rJ1xyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIFBob25lKHsgb25Nb2RhbENsb3NlLCBkYXRhLCBwYXJlbnQgfSkge1xyXG5cclxuICAgIGNvbnN0XHJcbiAgICAgICAgdG9wID0gcGFyZW50LmN1cnJlbnQuY2hpbGRyZW4ucGhvbmUub2Zmc2V0VG9wXHJcblxyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8TW9kYWxcclxuICAgICAgICAgICAgb25DbG9zZT17b25Nb2RhbENsb3NlfVxyXG4gICAgICAgICAgICBjb250YWluZXJTdHlsZXM9e3N0eWxlcy5jb250YWluZXJ9XHJcbiAgICAgICAgICAgIGNvbnRlbnRTdHlsZXM9e3N0eWxlcy5jb250ZW50fVxyXG4gICAgICAgICAgICBvdGhlclN0eWxlcz17eyB0b3A6IHRvcCArICdweCcgfX1cclxuICAgICAgICA+XHJcbiAgICAgICAgICAgIDxMaW5rIGhyZWY9e2RhdGEudXJsfT5cclxuICAgICAgICAgICAgICAgIDxhIHRhcmdldD1cIl9ibGFua1wiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxwPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBkYXRhLnRleHRcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIDwvcD5cclxuICAgICAgICAgICAgICAgIDwvYT5cclxuICAgICAgICAgICAgPC9MaW5rPlxyXG4gICAgICAgIDwvTW9kYWw+XHJcbiAgICApXHJcbn1cclxuIiwiaW1wb3J0IHsgTW9kYWwgfSBmcm9tIFwiLi4vLi4vLi4vLi4vY29tbW9uL2F1dGgvTW9kYWwvTW9kYWxcIlxyXG5pbXBvcnQgc3R5bGVzIGZyb20gJy4uL1NvY2lhbE1lZGlhTW9kYWwubW9kdWxlLnNjc3MnXHJcbmltcG9ydCBMaW5rIGZyb20gJ25leHQvbGluaydcclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBUZWxlZ3JhbSh7IG9uTW9kYWxDbG9zZSwgZGF0YSwgcGFyZW50IH0pIHtcclxuXHJcbiAgICBjb25zdCB0b3AgPSBwYXJlbnQuY3VycmVudC5jaGlsZHJlbi50ZWxlZ3JhbS5vZmZzZXRUb3BcclxuXHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIDxNb2RhbFxyXG4gICAgICAgICAgICBvbkNsb3NlPXtvbk1vZGFsQ2xvc2V9XHJcbiAgICAgICAgICAgIGNvbnRhaW5lclN0eWxlcz17c3R5bGVzLmNvbnRhaW5lcn1cclxuICAgICAgICAgICAgY29udGVudFN0eWxlcz17c3R5bGVzLmNvbnRlbnR9XHJcbiAgICAgICAgICAgIG90aGVyU3R5bGVzPXt7IHRvcDogdG9wICsgJ3B4JyB9fVxyXG4gICAgICAgID5cclxuICAgICAgICAgICAgPExpbmsgaHJlZj17ZGF0YS51cmx9PlxyXG4gICAgICAgICAgICAgICAgPGEgdGFyZ2V0PVwiX2JsYW5rXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPHA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRhdGEudGV4dFxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgPC9wPlxyXG4gICAgICAgICAgICAgICAgPC9hPlxyXG4gICAgICAgICAgICA8L0xpbms+XHJcbiAgICAgICAgPC9Nb2RhbD5cclxuICAgIClcclxufSIsImltcG9ydCB7IE1vZGFsIH0gZnJvbSBcIi4uLy4uLy4uLy4uL2NvbW1vbi9hdXRoL01vZGFsL01vZGFsXCJcclxuaW1wb3J0IHN0eWxlcyBmcm9tICcuLi9Tb2NpYWxNZWRpYU1vZGFsLm1vZHVsZS5zY3NzJ1xyXG5pbXBvcnQgTGluayBmcm9tICduZXh0L2xpbmsnXHJcblxyXG5leHBvcnQgZnVuY3Rpb24gVmliZXIoeyBvbk1vZGFsQ2xvc2UsIGRhdGEsIHBhcmVudCB9KSB7XHJcblxyXG4gICAgY29uc3QgdG9wID0gcGFyZW50LmN1cnJlbnQuY2hpbGRyZW4udmliZXIub2Zmc2V0VG9wXHJcblxyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8TW9kYWxcclxuICAgICAgICAgICAgb25DbG9zZT17b25Nb2RhbENsb3NlfVxyXG4gICAgICAgICAgICBjb250YWluZXJTdHlsZXM9e3N0eWxlcy5jb250YWluZXJ9XHJcbiAgICAgICAgICAgIGNvbnRlbnRTdHlsZXM9e3N0eWxlcy5jb250ZW50fVxyXG4gICAgICAgICAgICBvdGhlclN0eWxlcz17eyB0b3A6IHRvcCArICdweCcgfX1cclxuICAgICAgICA+XHJcbiAgICAgICAgICAgIDxMaW5rIGhyZWY9e2RhdGEudXJsfT5cclxuICAgICAgICAgICAgICAgIDxhIHRhcmdldD1cIl9ibGFua1wiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxwPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBkYXRhLnRleHRcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIDwvcD5cclxuICAgICAgICAgICAgICAgIDwvYT5cclxuICAgICAgICAgICAgPC9MaW5rPlxyXG4gICAgICAgIDwvTW9kYWw+XHJcbiAgICApXHJcbn0iLCJpbXBvcnQgeyBNb2RhbCB9IGZyb20gXCIuLi8uLi8uLi8uLi9jb21tb24vYXV0aC9Nb2RhbC9Nb2RhbFwiXHJcbmltcG9ydCBzdHlsZXMgZnJvbSAnLi4vU29jaWFsTWVkaWFNb2RhbC5tb2R1bGUuc2NzcydcclxuaW1wb3J0IExpbmsgZnJvbSAnbmV4dC9saW5rJ1xyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIFdhdHNVcCh7IG9uTW9kYWxDbG9zZSwgZGF0YSwgcGFyZW50IH0pIHtcclxuXHJcbiAgICBjb25zdCB0b3AgPSBwYXJlbnQuY3VycmVudC5jaGlsZHJlbi53YXRzdXAub2Zmc2V0VG9wXHJcblxyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8TW9kYWxcclxuICAgICAgICAgICAgb25DbG9zZT17b25Nb2RhbENsb3NlfVxyXG4gICAgICAgICAgICBjb250YWluZXJTdHlsZXM9e3N0eWxlcy5jb250YWluZXJ9XHJcbiAgICAgICAgICAgIGNvbnRlbnRTdHlsZXM9e3N0eWxlcy5jb250ZW50fVxyXG4gICAgICAgICAgICBvdGhlclN0eWxlcz17eyB0b3A6IHRvcCArICdweCcgfX1cclxuICAgICAgICA+XHJcbiAgICAgICAgICAgIDxMaW5rIGhyZWY9e2RhdGEudXJsfT5cclxuICAgICAgICAgICAgICAgIDxhIHRhcmdldD1cIl9ibGFua1wiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxwPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBkYXRhLnRleHRcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIDwvcD5cclxuICAgICAgICAgICAgICAgIDwvYT5cclxuICAgICAgICAgICAgPC9MaW5rPlxyXG4gICAgICAgIDwvTW9kYWw+XHJcbiAgICApXHJcbn0iLCJpbXBvcnQgeyB1c2VSZWYgfSBmcm9tICdyZWFjdCdcclxuLy8gc3R5bGVzXHJcbmltcG9ydCBzdHlsZXMgZnJvbSAnLi9Tb2NpYWxNZWRpYS5tb2R1bGUuc2NzcydcclxuLy8gY29tcG9uZW50c1xyXG5pbXBvcnQgeyBJY29uIH0gZnJvbSAnLi9JY29uL0ljb24nXHJcbmltcG9ydCB7IHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnXHJcbmltcG9ydCB7IFBob25lIH0gZnJvbSAnLi9Nb2RhbHMvUGhvbmUvUGhvbmUnXHJcbmltcG9ydCB7IEZhY2Vib29rIH0gZnJvbSAnLi9Nb2RhbHMvRmFjZWJvb2svRmFjZWJvb2snXHJcbmltcG9ydCB7IFRlbGVncmFtIH0gZnJvbSAnLi9Nb2RhbHMvVGVsZWdyYW0vVGVsZWdyYW0nXHJcbmltcG9ydCB7IFdhdHNVcCB9IGZyb20gJy4vTW9kYWxzL1dhdHNVcC9XYXRzVXAnXHJcbmltcG9ydCB7IEluc3RhZ3JhbSB9IGZyb20gJy4vTW9kYWxzL0luc3RhZ3JhbS9JbnN0YWdyYW0nXHJcbmltcG9ydCB7IFZpYmVyIH0gZnJvbSAnLi9Nb2RhbHMvVmliZXIvVmliZXInXHJcbi8vIGljb25zXHJcbmltcG9ydCBwaG9uZSBmcm9tICcvcHVibGljL2ltYWdlcy9oZWFkZXIvU29jaWFsTWVkaWEvcGhvbmUuc3ZnJ1xyXG5pbXBvcnQgZmFjZWJvb2sgZnJvbSAnL3B1YmxpYy9pbWFnZXMvaGVhZGVyL1NvY2lhbE1lZGlhL2ZhY2Vib29rLnN2ZydcclxuaW1wb3J0IHRlbGVncmFtIGZyb20gJy9wdWJsaWMvaW1hZ2VzL2hlYWRlci9Tb2NpYWxNZWRpYS90ZWxlZ3JhbS5zdmcnXHJcbmltcG9ydCB3YXRzdXAgZnJvbSAnL3B1YmxpYy9pbWFnZXMvaGVhZGVyL1NvY2lhbE1lZGlhL3dhdHN1cC5zdmcnXHJcbmltcG9ydCBpbnN0YWdyYW0gZnJvbSAnL3B1YmxpYy9pbWFnZXMvaGVhZGVyL1NvY2lhbE1lZGlhL2luc3RhZ3JhbS5zdmcnXHJcbmltcG9ydCB2aWJlciBmcm9tICcvcHVibGljL2ltYWdlcy9oZWFkZXIvU29jaWFsTWVkaWEvdmliZXIuc3ZnJ1xyXG5cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBTb2NpYWxNZWRpYSgpIHtcclxuXHJcbiAgICBjb25zdFxyXG4gICAgICAgIC8vIHN0YXRlc1xyXG4gICAgICAgIFtzaG93UGhvbmVNb2RhbCwgc2V0U2hvd1Bob25lTW9kYWxdID0gdXNlU3RhdGUoZmFsc2UpLFxyXG4gICAgICAgIFtzaG93RmFjYm9va01vZGFsLCBzZXRTaG93RmFjYm9va01vZGFsXSA9IHVzZVN0YXRlKGZhbHNlKSxcclxuICAgICAgICBbc2hvd1RlbGVncmFtTW9kYWwsIHNldFNob3dUZWxlZ3JhbU1vZGFsXSA9IHVzZVN0YXRlKGZhbHNlKSxcclxuICAgICAgICBbc2hvd1dhdHNVcE1vZGFsLCBzZXRTaG93V2F0c1VwTW9kYWxdID0gdXNlU3RhdGUoZmFsc2UpLFxyXG4gICAgICAgIFtzaG93SW5zdGFncmFtTW9kYWwsIHNldFNob3dJbnN0YWdyYW1Nb2RhbF0gPSB1c2VTdGF0ZShmYWxzZSksXHJcbiAgICAgICAgW3Nob3dWaWJlck1vZGFsLCBzZXRTaG93VmliZXJNb2RhbF0gPSB1c2VTdGF0ZShmYWxzZSksXHJcbiAgICAgICAgc29jaWFsTWVkaWFzUmVmID0gdXNlUmVmKCksXHJcbiAgICAgICAgLy8gY29uZmlnXHJcbiAgICAgICAgaWNvbnMgPSBbXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIGlkOiBcInBob25lXCIsXHJcbiAgICAgICAgICAgICAgICBrZXk6IE1hdGgucmFuZG9tKCksXHJcbiAgICAgICAgICAgICAgICBzcmM6IHBob25lLnNyYyxcclxuICAgICAgICAgICAgICAgIGNsaWNrOiAoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgd2luZG93LnNjcm9sbFRvKDAsIDApXHJcbiAgICAgICAgICAgICAgICAgICAgc2V0U2hvd1Bob25lTW9kYWwodHJ1ZSlcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgaWQ6IFwiZmFjZWJvb2tcIixcclxuICAgICAgICAgICAgICAgIGtleTogTWF0aC5yYW5kb20oKSxcclxuICAgICAgICAgICAgICAgIHNyYzogZmFjZWJvb2suc3JjLFxyXG4gICAgICAgICAgICAgICAgY2xpY2s6ICgpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICB3aW5kb3cuc2Nyb2xsVG8oMCwgMClcclxuICAgICAgICAgICAgICAgICAgICBzZXRTaG93RmFjYm9va01vZGFsKHRydWUpXHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIGlkOiBcInRlbGVncmFtXCIsXHJcbiAgICAgICAgICAgICAgICBrZXk6IE1hdGgucmFuZG9tKCksXHJcbiAgICAgICAgICAgICAgICBzcmM6IHRlbGVncmFtLnNyYyxcclxuICAgICAgICAgICAgICAgIGNsaWNrOiAoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgd2luZG93LnNjcm9sbFRvKDAsIDApXHJcbiAgICAgICAgICAgICAgICAgICAgc2V0U2hvd1RlbGVncmFtTW9kYWwodHJ1ZSlcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgaWQ6IFwid2F0c3VwXCIsXHJcbiAgICAgICAgICAgICAgICBrZXk6IE1hdGgucmFuZG9tKCksXHJcbiAgICAgICAgICAgICAgICBzcmM6IHdhdHN1cC5zcmMsXHJcbiAgICAgICAgICAgICAgICBjbGljazogKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIHdpbmRvdy5zY3JvbGxUbygwLCAwKVxyXG4gICAgICAgICAgICAgICAgICAgIHNldFNob3dXYXRzVXBNb2RhbCh0cnVlKVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICBpZDogXCJpbnN0YWdyYW1cIixcclxuICAgICAgICAgICAgICAgIGtleTogTWF0aC5yYW5kb20oKSxcclxuICAgICAgICAgICAgICAgIHNyYzogaW5zdGFncmFtLnNyYyxcclxuICAgICAgICAgICAgICAgIGNsaWNrOiAoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgd2luZG93LnNjcm9sbFRvKDAsIDApXHJcbiAgICAgICAgICAgICAgICAgICAgc2V0U2hvd0luc3RhZ3JhbU1vZGFsKHRydWUpXHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIGlkOiBcInZpYmVyXCIsXHJcbiAgICAgICAgICAgICAgICBrZXk6IE1hdGgucmFuZG9tKCksXHJcbiAgICAgICAgICAgICAgICBzcmM6IHZpYmVyLnNyYyxcclxuICAgICAgICAgICAgICAgIGNsaWNrOiAoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgd2luZG93LnNjcm9sbFRvKDAsIDApXHJcbiAgICAgICAgICAgICAgICAgICAgc2V0U2hvd1ZpYmVyTW9kYWwodHJ1ZSlcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfSxcclxuICAgICAgICBdLFxyXG4gICAgICAgIG1vZGFsX2NvbnRlbnRzID0ge1xyXG4gICAgICAgICAgICBwaG9uZToge1xyXG4gICAgICAgICAgICAgICAgdGV4dDogXCIrMzc0IDY0IDU0IDU5XCIsXHJcbiAgICAgICAgICAgICAgICB1cmw6IFwidGVsOiszNzQ5ODY0NTQ1N1wiXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIGZhY2Vib29rOiB7XHJcbiAgICAgICAgICAgICAgICB0ZXh0OiBcIkZhY2Vib29rXCIsXHJcbiAgICAgICAgICAgICAgICB1cmw6IFwiaHR0cHM6Ly93d3cuZmFjZWJvb2suY29tLyVEMCU5RiVEMSU4MCVEMCVCRSVEMCVCMyVEMCVCRCVEMCVCRSVEMCVCNyVEMSU4Qi0lRDAlQkQlRDAlQjAtJUQwJUE0JUQxJTgzJUQxJTgyJUQwJUIxJUQwJUJFJUQwJUJCLTEwNDk0MTM0NzU3NzkxMy9cIlxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICB0ZWxlZ3JhbToge1xyXG4gICAgICAgICAgICAgICAgdGV4dDogXCIrMzc0IDY0IDU0IDU5XCIsXHJcbiAgICAgICAgICAgICAgICB1cmw6IFwiaHR0cHM6Ly90ZWxlZ3JhbS5tZS9lcm1hYW5uXCJcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgd2F0c3VwOiB7XHJcbiAgICAgICAgICAgICAgICB0ZXh0OiBcIiszNzQgNjQgNTQgNTlcIixcclxuICAgICAgICAgICAgICAgIHVybDogXCJodHRwczovL2FwaS53aGF0c2FwcC5jb20vc2VuZD9waG9uZT0rMzc0OTg2NDU0NTdcIlxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICBpbnN0YWdyYW06IHtcclxuICAgICAgICAgICAgICAgIHRleHQ6IFwiSW5zdGFncmFtXCIsXHJcbiAgICAgICAgICAgICAgICB1cmw6IFwiaHR0cHM6Ly93d3cuaW5zdGFncmFtLmNvbS9wcm9nbm96eW5hNTUwLz91dG1fbWVkaXVtPWNvcHlfbGlua1wiXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIHZpYmVyOiB7XHJcbiAgICAgICAgICAgICAgICB0ZXh0OiBcIiszNzQgNjQgNTQgNTlcIixcclxuICAgICAgICAgICAgICAgIHVybDogXCJ2aWJlcjovL2NoYXQ/bnVtYmVyPSszNzQ5ODY0NTQ1N1wiXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIDw+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuY29udGFpbmVyfSByZWY9e3NvY2lhbE1lZGlhc1JlZn0+XHJcbiAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgaWNvbnMubWFwKGVsID0+IChcclxuICAgICAgICAgICAgICAgICAgICAgICAgPEljb25cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlkPXtlbC5pZH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGtleT17ZWwua2V5fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc3JjPXtlbC5zcmN9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGljaz17ZWwuY2xpY2t9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAgICApKVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAge3Nob3dQaG9uZU1vZGFsICYmIDxQaG9uZSBvbk1vZGFsQ2xvc2U9eygpID0+IHNldFNob3dQaG9uZU1vZGFsKGZhbHNlKX0gZGF0YT17bW9kYWxfY29udGVudHMucGhvbmV9IHBhcmVudD17c29jaWFsTWVkaWFzUmVmfSAvPn1cclxuICAgICAgICAgICAge3Nob3dGYWNib29rTW9kYWwgJiYgPEZhY2Vib29rIG9uTW9kYWxDbG9zZT17KCkgPT4gc2V0U2hvd0ZhY2Jvb2tNb2RhbChmYWxzZSl9IGRhdGE9e21vZGFsX2NvbnRlbnRzLmZhY2Vib29rfSBwYXJlbnQ9e3NvY2lhbE1lZGlhc1JlZn0gLz59XHJcbiAgICAgICAgICAgIHtzaG93VGVsZWdyYW1Nb2RhbCAmJiA8VGVsZWdyYW0gb25Nb2RhbENsb3NlPXsoKSA9PiBzZXRTaG93VGVsZWdyYW1Nb2RhbChmYWxzZSl9IGRhdGE9e21vZGFsX2NvbnRlbnRzLnRlbGVncmFtfSBwYXJlbnQ9e3NvY2lhbE1lZGlhc1JlZn0gLz59XHJcbiAgICAgICAgICAgIHtzaG93V2F0c1VwTW9kYWwgJiYgPFdhdHNVcCBvbk1vZGFsQ2xvc2U9eygpID0+IHNldFNob3dXYXRzVXBNb2RhbChmYWxzZSl9IGRhdGE9e21vZGFsX2NvbnRlbnRzLndhdHN1cH0gcGFyZW50PXtzb2NpYWxNZWRpYXNSZWZ9IC8+fVxyXG4gICAgICAgICAgICB7c2hvd0luc3RhZ3JhbU1vZGFsICYmIDxJbnN0YWdyYW0gb25Nb2RhbENsb3NlPXsoKSA9PiBzZXRTaG93SW5zdGFncmFtTW9kYWwoZmFsc2UpfSBkYXRhPXttb2RhbF9jb250ZW50cy5pbnN0YWdyYW19IHBhcmVudD17c29jaWFsTWVkaWFzUmVmfSAvPn1cclxuICAgICAgICAgICAge3Nob3dWaWJlck1vZGFsICYmIDxWaWJlciBvbk1vZGFsQ2xvc2U9eygpID0+IHNldFNob3dWaWJlck1vZGFsKGZhbHNlKX0gZGF0YT17bW9kYWxfY29udGVudHMudmliZXJ9IHBhcmVudD17c29jaWFsTWVkaWFzUmVmfSAvPn1cclxuICAgICAgICA8Lz5cclxuICAgIClcclxufVxyXG4iLCJpbXBvcnQgeyBNb2RhbCB9IGZyb20gJy4uLy4uL2NvbW1vbi9hdXRoL01vZGFsL01vZGFsJ1xyXG4vLyBzdHlsZXMgXHJcbmltcG9ydCBzdHlsZXMgZnJvbSAnLi9Db250YWN0cy5tb2R1bGUuc2NzcydcclxuaW1wb3J0IHsgY29udGFjdHNfZGF0YSB9IGZyb20gJy4vY29udGFjdHNfZGF0YSdcclxuLy8gaWNvbnNcclxuaW1wb3J0IGNsb3NlVmVjdG9yIGZyb20gJy9wdWJsaWMvaW1hZ2VzL2hlYWRlci9Tb2NpYWxNZWRpYS9jbG9zZVZlY3Rvci5wbmcnXHJcblxyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gQ29udGFjdHNNb2RhbCh7IG9uTW9kYWxDbG9zZSwgb3BlbmVkID0gZmFsc2UgfSkge1xyXG5cclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPE1vZGFsXHJcbiAgICAgICAgICAgIG9uQ2xvc2U9e29uTW9kYWxDbG9zZX1cclxuICAgICAgICAgICAgY29udGFpbmVyU3R5bGVzPXtgJHtzdHlsZXMuY29udGFpbmVyfSBgfVxyXG4gICAgICAgICAgICBjb250ZW50U3R5bGVzPXtgJHtzdHlsZXMuY29udGVudH0gJHtvcGVuZWQgPyBzdHlsZXMub3BlbiA6IHN0eWxlcy5jbG9zZX1gfVxyXG4gICAgICAgID5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5tb2RhbF9jb250ZW50fT5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuY29udGVudF9jb250YWluZXJ9PlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMudG9wfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGltZ1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc3JjPXtjbG9zZVZlY3Rvci5zcmN9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBhbHQ9XCJcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgb25DbGljaz17KCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uTW9kYWxDbG9zZSgpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignYm9keScpLnN0eWxlLm92ZXJmbG93ID0gJ3Zpc2libGUnXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMucm93c30+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnRhY3RzX2RhdGEubWFwKGVsID0+IChcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLnJvd30ga2V5PXtNYXRoLnJhbmRvbSgpfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5pbWd9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGltZyBzcmM9e2VsLmljb259IGFsdD1cImNvbnRhY3QtaWNvblwiIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLnRleHR9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHA+e2VsLnRleHR9PC9wPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICkpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8L01vZGFsPlxyXG4gICAgKVxyXG59XHJcbiIsImltcG9ydCBwaG9uZSBmcm9tICcvcHVibGljL2ltYWdlcy9oZWFkZXIvU29jaWFsTWVkaWEvcGhvbmUuc3ZnJ1xyXG5pbXBvcnQgZmFjZWJvb2sgZnJvbSAnL3B1YmxpYy9pbWFnZXMvaGVhZGVyL1NvY2lhbE1lZGlhL2ZhY2Vib29rLnN2ZydcclxuaW1wb3J0IHRlbGVncmFtIGZyb20gJy9wdWJsaWMvaW1hZ2VzL2hlYWRlci9Tb2NpYWxNZWRpYS90ZWxlZ3JhbS5zdmcnXHJcbmltcG9ydCB3YXRzdXAgZnJvbSAnL3B1YmxpYy9pbWFnZXMvaGVhZGVyL1NvY2lhbE1lZGlhL3dhdHN1cC5zdmcnXHJcbmltcG9ydCBpbnN0YWdyYW0gZnJvbSAnL3B1YmxpYy9pbWFnZXMvaGVhZGVyL1NvY2lhbE1lZGlhL2luc3RhZ3JhbS5zdmcnXHJcbmltcG9ydCB2aWJlciBmcm9tICcvcHVibGljL2ltYWdlcy9oZWFkZXIvU29jaWFsTWVkaWEvdmliZXIuc3ZnJ1xyXG5pbXBvcnQgZW1haWwgZnJvbSAnL3B1YmxpYy9pbWFnZXMvaGVhZGVyL1NvY2lhbE1lZGlhL2VtYWlsLnN2ZydcclxuXHJcbmV4cG9ydCBjb25zdCBjb250YWN0c19kYXRhID0gW1xyXG4gICAge1xyXG4gICAgICAgIGljb246cGhvbmUuc3JjLFxyXG4gICAgICAgIHRleHQ6XCIrMzQgNjcyIDMxNCA4MDhcIlxyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgICBpY29uOmZhY2Vib29rLnNyYyxcclxuICAgICAgICB0ZXh0OlwiXCJcclxuICAgIH1cclxuICAgICxcclxuICAgIHtcclxuICAgICAgICBpY29uOnRlbGVncmFtLnNyYyxcclxuICAgICAgICB0ZXh0OlwiXCJcclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgICAgaWNvbjp3YXRzdXAuc3JjLFxyXG4gICAgICAgIHRleHQ6XCIrMzQgNjcyIDMxNCA4MDhcIlxyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgICBpY29uOmluc3RhZ3JhbS5zcmMsXHJcbiAgICAgICAgdGV4dDpcIlwiXHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICAgIGljb246dmliZXIuc3JjLFxyXG4gICAgICAgIHRleHQ6XCIrMzQgNjcyIDMxNCA4MDhcIlxyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgICBpY29uOmVtYWlsLnNyYyxcclxuICAgICAgICB0ZXh0Olwibi54YWNoMTk4N0BtYWlsLnJ1XCJcclxuICAgIH1cclxuXSIsImltcG9ydCBzdHlsZXMgZnJvbSAnLi9JbnB1dENvbnRhaW5lci5tb2R1bGUuc2NzcydcclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBJbnB1dENvbnRhaW5lcih7XHJcbiAgICBsYWJlbCxcclxuICAgIGlkLFxyXG4gICAgdHlwZSxcclxuICAgIHBsYWNlaG9sZGVyLFxyXG4gICAgZXJyb3JzLFxyXG4gICAgb3RoZXIgfSkge1xyXG5cclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5jb250YWluZXJ9PlxyXG4gICAgICAgICAgICB7bGFiZWwgJiZcclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMubGFiZWxfY29udGVudH0+XHJcbiAgICAgICAgICAgICAgICAgICAgPGxhYmVsIGh0bWxGb3I9e2lkfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGltZ1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc3JjPXtsYWJlbC5zcmN9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBhbHQ9XCJpY29uXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAgICA8L2xhYmVsPlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5pbnB1dF9jb250YWluZXJ9PlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e2Vycm9ycyA/IHN0eWxlcy5pbnB1dF9lcnJvcl9jb250ZW50IDogc3R5bGVzLmlucHV0X3N1Y2Nlc3NfY29udGVudH0+XHJcbiAgICAgICAgICAgICAgICAgICAgPGlucHV0XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlkPXtpZH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgdHlwZT17dHlwZX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9e3BsYWNlaG9sZGVyfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICB7Li4ub3RoZXJ9XHJcbiAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgIClcclxufVxyXG4iLCJpbXBvcnQgeyB1c2VFZmZlY3QsIHVzZVN0YXRlLCB1c2VSZWYgfSBmcm9tICdyZWFjdCdcclxuaW1wb3J0IHN0eWxlcyBmcm9tICcuL01vZGFsLm1vZHVsZS5zY3NzJ1xyXG5pbXBvcnQgeyBjcmVhdGVQb3J0YWwgfSBmcm9tICdyZWFjdC1kb20nXHJcblxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIE1vZGFsKHtcclxuICAgIG9uQ2xvc2UsXHJcbiAgICAvLyBjbG9zZVdpdGhWZWN0b3JlID0gbnVsbCxcclxuICAgIGNoaWxkcmVuLFxyXG4gICAgY29udGFpbmVyU3R5bGVzID0gbnVsbCxcclxuICAgIGNvbnRlbnRTdHlsZXMgPSBudWxsLFxyXG4gICAgb3RoZXJTdHlsZXMgPSBudWxsLFxyXG4gICAgcG9ydGFsTG9jYXRpb24gPSAnbW9kYWwtY29udGVpbmVyJyB9KSB7XHJcblxyXG5cclxuXHJcbiAgICBjb25zdFxyXG4gICAgICAgIFtzaG93TW9kYWwsIHNldFNob3dNb2RhbF0gPSB1c2VTdGF0ZShmYWxzZSksXHJcbiAgICAgICAgW3BhZ2VPdmVyZmxvdywgc2V0UGFnZU92ZXJmbG93XSA9IHVzZVN0YXRlKHNob3dNb2RhbCksXHJcbiAgICAgICAgYm9keSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ2JvZHknKVxyXG5cclxuICAgIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICAgICAgc2V0U2hvd01vZGFsKHRydWUpXHJcbiAgICAgICAgc2V0UGFnZU92ZXJmbG93KHRydWUpXHJcbiAgICAgICAgZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcihcIm1vdXNlZG93blwiLCBoYW5kbGVDbG9zZSk7XHJcbiAgICAgICAgXHJcbiAgICAgICAgcmV0dXJuICgpID0+IHtcclxuICAgICAgICAgICAgZG9jdW1lbnQucmVtb3ZlRXZlbnRMaXN0ZW5lcihcIm1vdXNlZG93blwiLCBoYW5kbGVDbG9zZSk7XHJcbiAgICAgICAgICAgIGJvZHkuc3R5bGUub3ZlcmZsb3cgPSAndmlzaWJsZSdcclxuICAgICAgICB9O1xyXG4gICAgfSwgW10pXHJcblxyXG4gICAgY29uc3Qgbm9kZSA9IHVzZVJlZigpXHJcblxyXG5cclxuXHJcbiAgICBjb25zdCBoYW5kbGVDbG9zZSA9IGUgPT4ge1xyXG4gICAgICAgIGlmIChub2RlPy5jdXJyZW50Py5jb250YWlucyhlLnRhcmdldCkpIHtcclxuICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIHNldFBhZ2VPdmVyZmxvdyhmYWxzZSlcclxuICAgICAgICAgICAgb25DbG9zZSgpXHJcbiAgICAgICAgfVxyXG4gICAgfSxcclxuICAgICAgICBkaW5hbWljVG9wID0gd2luZG93LnNjcm9sbFlcclxuXHJcbiAgICBwYWdlT3ZlcmZsb3cgPyBib2R5LnN0eWxlLm92ZXJmbG93ID0gJ2hpZGRlbicgOiBib2R5LnN0eWxlLm92ZXJmbG93ID0gJ3Zpc2libGUnXHJcblxyXG4gICAgY29uc3QgbW9kYWwgPSAoXHJcbiAgICAgICAgPGRpdlxyXG4gICAgICAgICAgICBjbGFzc05hbWU9e2Ake3N0eWxlcy5tb2RhbENvbnRlaW5lcn0gJHtjb250YWluZXJTdHlsZXN9YH1cclxuICAgICAgICAgICAgc3R5bGU9e3tcclxuICAgICAgICAgICAgICAgIHRvcDogZGluYW1pY1RvcCArICdweCdcclxuICAgICAgICAgICAgfX0+XHJcbiAgICAgICAgICAgIDxkaXZcclxuICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17YCR7c3R5bGVzLm1vZGFsQ29udGVudH0gJHtjb250ZW50U3R5bGVzfWB9XHJcbiAgICAgICAgICAgICAgICBzdHlsZT17b3RoZXJTdHlsZXN9XHJcbiAgICAgICAgICAgICAgICByZWY9e25vZGV9XHJcbiAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICBjaGlsZHJlblxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgIClcclxuICAgIGlmIChzaG93TW9kYWwpIHtcclxuICAgICAgICByZXR1cm4gY3JlYXRlUG9ydGFsKFxyXG4gICAgICAgICAgICBtb2RhbCxcclxuICAgICAgICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQocG9ydGFsTG9jYXRpb24pXHJcbiAgICAgICAgKVxyXG4gICAgfVxyXG4gICAgZWxzZSByZXR1cm4gbnVsbFxyXG59XHJcbiIsImV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIEVycm9yKHsgY2hpbGRyZW4gfSkge1xyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8PlxyXG4gICAgICAgICAgICA8bWFpbj5cclxuICAgICAgICAgICAgICAgIHtjaGlsZHJlbn1cclxuICAgICAgICAgICAgPC9tYWluPlxyXG4gICAgICAgIDwvPlxyXG4gICAgKVxyXG59XHJcbiIsImltcG9ydCB7IEZvb3RlciB9IGZyb20gJy4uL2NvbXBvbmVudHMvRm9vdGVyL0Zvb3RlcidcclxuaW1wb3J0IHsgSGVhZGVyIH0gZnJvbSAnLi4vY29tcG9uZW50cy9IZWFkZXIvSGVhZGVyJ1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gTWFpbih7IGNoaWxkcmVuIH0pIHtcclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPD5cclxuICAgICAgICAgICAgPEhlYWRlciBtYWluc1BhZ2VzPXt0cnVlfSAvPlxyXG4gICAgICAgICAgICA8bWFpbj5cclxuICAgICAgICAgICAgICAgIHtjaGlsZHJlbn1cclxuICAgICAgICAgICAgPC9tYWluPlxyXG4gICAgICAgICAgICA8Rm9vdGVyIC8+XHJcbiAgICAgICAgPC8+XHJcbiAgICApXHJcbn1cclxuIiwiaW1wb3J0IHsgSGVhZGVyIH0gZnJvbSAnLi4vY29tcG9uZW50cy9IZWFkZXIvSGVhZGVyJ1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gUmVnaXN0ZXJMYXlvdXQoeyBjaGlsZHJlbiB9KSB7XHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIDw+XHJcbiAgICAgICAgICAgIDxIZWFkZXIgbWFpbnNQYWdlcz17ZmFsc2V9Lz5cclxuICAgICAgICAgICAgPG1haW4+XHJcbiAgICAgICAgICAgICAgICB7Y2hpbGRyZW59XHJcbiAgICAgICAgICAgIDwvbWFpbj5cclxuICAgICAgICA8Lz5cclxuICAgIClcclxufVxyXG4iLCJpbXBvcnQgeyBGb290ZXIgfSBmcm9tICcuLi9jb21wb25lbnRzL0Zvb3Rlci9Gb290ZXInXHJcbmltcG9ydCB7IEhlYWRlciB9IGZyb20gJy4uL2NvbXBvbmVudHMvSGVhZGVyL0hlYWRlcidcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIE1haW4oeyBjaGlsZHJlbiB9KSB7XHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIDw+XHJcbiAgICAgICAgICAgIDxIZWFkZXIgbWFpbnNQYWdlcz17ZmFsc2V9IC8+XHJcbiAgICAgICAgICAgIDxtYWluPlxyXG4gICAgICAgICAgICAgICAge2NoaWxkcmVufVxyXG4gICAgICAgICAgICA8L21haW4+XHJcbiAgICAgICAgICAgIDxGb290ZXIgLz5cclxuICAgICAgICA8Lz5cclxuICAgIClcclxufVxyXG4iLCJpbXBvcnQgTWFpbiBmcm9tIFwiLi9NYWluXCI7XHJcbmltcG9ydCBXaXRob3V0UGhvdG8gZnJvbSBcIi4vV2l0aG91dFBob3RvXCI7XHJcbmltcG9ydCBSZWdpc3RlciBmcm9tIFwiLi9SZWdpc3RlclwiO1xyXG5pbXBvcnQgRXJyb3IgZnJvbSBcIi4vRXJyb3JcIlxyXG5cclxuY29uc3QgbGF5b3V0cyA9IHtcclxuICBtYWluOiBNYWluLFxyXG4gIHdpdGhvdXRQaG90bzogV2l0aG91dFBob3RvLFxyXG4gIHJlZ2lzdGVyOiBSZWdpc3RlclxyXG59O1xyXG5cclxuY29uc3QgTGF5b3V0V3JhcHBlciA9IChwcm9wcykgPT4ge1xyXG4gIC8vIHRvIGdldCB0aGUgdGV4dCB2YWx1ZSBvZiB0aGUgYXNzaWduZWQgbGF5b3V0IG9mIGVhY2ggY29tcG9uZW50XHJcbiAgY29uc3QgTGF5b3V0ID0gbGF5b3V0c1twcm9wcy5jaGlsZHJlbi50eXBlLmxheW91dF07XHJcbiAgLy8gaWYgd2UgaGF2ZSBhIHJlZ2lzdGVyZWQgbGF5b3V0IHJlbmRlciBjaGlsZHJlbiB3aXRoIHNhaWQgbGF5b3V0XHJcbiAgaWYgKExheW91dCAhPSBudWxsKSB7XHJcbiAgICByZXR1cm4gPExheW91dCB7Li4ucHJvcHN9Pntwcm9wcy5jaGlsZHJlbn08L0xheW91dD47XHJcbiAgfVxyXG4gIC8vIGlmIG5vdCByZW5kZXIgY2hpbGRyZW4gd2l0aCBmcmFnbWVudFxyXG4gIHJldHVybiA8RXJyb3Igey4uLnByb3BzfT57cHJvcHMuY2hpbGRyZW59PC9FcnJvcj47XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBMYXlvdXRXcmFwcGVyO1xyXG4iLCJleHBvcnQgY29uc3QgaG9zdCA9IFwiaHR0cHM6Ly93d3cuZm9vdGJldDI0LmNvbS9hcGlcIjtcclxuIiwiaW1wb3J0IGF4aW9zIGZyb20gXCJheGlvc1wiO1xyXG5cclxuXHJcbmV4cG9ydCBjb25zdCByZXF1ZXN0ID0gKCBkZXN0aW5hdGlvbiwgcGF5bG9hZCA9IG51bGwsIG9wdGlvbnMgPSBudWxsICkgPT4gbmV3IFByb21pc2UoICggcnNsdiwgcmpjdCApID0+IHtcclxuICBsZXQgaGVhZGVycyA9IHt9O1xyXG5cclxuICBpZiAoIG9wdGlvbnMgKSB7XHJcbiAgICBpZiAoIG9wdGlvbnMuYXV0aCA9PT0gdHJ1ZSApIHtcclxuICAgICAgaGVhZGVycyA9IHtcclxuICAgICAgICAuLi5oZWFkZXJzLFxyXG4gICAgICAgIEF1dGhvcml6YXRpb246IGBCZWFyZXIgJHtnZXRDb29raWUoYGFjY2Vzcy10b2tlbmApfWAgfHwgYGAgLy8gZm9yIG1vc3Qgb2YgcmVxdWVzdHNcclxuICAgICAgfTtcclxuICAgIH1cclxuICAgIGlmICggYGhlYWRlcnNgIGluIG9wdGlvbnMgJiYgb3B0aW9ucy5oZWFkZXJzIGluc3RhbmNlb2YgT2JqZWN0ICkge1xyXG4gICAgICBoZWFkZXJzID0geyAuLi5oZWFkZXJzLCAuLi5vcHRpb25zLmhlYWRlcnMgfVxyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgY29uc29sZS5sb2coIGBzdGFydCBsb2FkaW5nYCApO1xyXG4gIGF4aW9zKHtcclxuICAgIG1ldGhvZDogZGVzdGluYXRpb24ubWV0aG9kLFxyXG4gICAgdXJsOiBkZXN0aW5hdGlvbi51cmwsXHJcbiAgICBoZWFkZXJzLFxyXG4gICAgZGF0YTogcGF5bG9hZCB8fCB7fVxyXG4gIH0pXHJcbiAgLnRoZW4oIHJzbHYgKVxyXG4gIC5jYXRjaCggcmpjdCApXHJcbiAgLmZpbmFsbHkoICgpID0+IGNvbnNvbGUubG9nKCBgZW5kIGxvYWRpbmdgICkgKVxyXG5cclxufSk7XHJcblxyXG5leHBvcnQgY29uc3QgZ2V0Q29va2llID0gbmFtZSA9PiB7XHJcbiAgdmFyIG5hbWVFUSA9IG5hbWUgKyBcIj1cIjtcclxuICB2YXIgY2EgPSBkb2N1bWVudC5jb29raWUuc3BsaXQoJzsnKTtcclxuXHJcbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBjYS5sZW5ndGg7IGkrKykge1xyXG4gICAgdmFyIGMgPSBjYVtpXTtcclxuXHJcbiAgICB3aGlsZSAoYy5jaGFyQXQoMCkgPT0gJyAnKSB7XHJcbiAgICAgIGMgPSBjLnN1YnN0cmluZygxLCBjLmxlbmd0aCk7XHJcbiAgICB9XHJcblxyXG4gICAgaWYgKGMuaW5kZXhPZihuYW1lRVEpID09IDApIHJldHVybiBjLnN1YnN0cmluZyhuYW1lRVEubGVuZ3RoLCBjLmxlbmd0aCk7XHJcbiAgfVxyXG5cclxuICByZXR1cm4gbnVsbDtcclxufVxyXG5cclxuZXhwb3J0IGNvbnN0IHJlbW92ZUNvb2tpZSA9IG5hbWUgPT4ge1xyXG4gIGRvY3VtZW50LmNvb2tpZSA9IG5hbWUgKyAnPTsgUGF0aD0vOyBFeHBpcmVzPVRodSwgMDEgSmFuIDE5NzAgMDA6MDA6MDEgR01UOyc7XHJcbn1cclxuXHJcblxyXG5leHBvcnQgY29uc3Qgc2V0Q29va2llID0gKG5hbWUsIHZhbHVlLCBkYXlzKSA9PiB7XHJcbiAgbGV0IGV4cGlyZXMgPSBcIlwiO1xyXG5cclxuICBpZiAoZGF5cykge1xyXG4gICAgbGV0IGRhdGUgPSBuZXcgRGF0ZSgpO1xyXG4gICAgZGF0ZS5zZXRUaW1lKGRhdGUuZ2V0VGltZSgpICsgZGF5cyAqIDI0ICogNjAgKiA2MCAqIDEwMDApO1xyXG4gICAgZXhwaXJlcyA9IFwiOyBleHBpcmVzPVwiICsgZGF0ZS50b1VUQ1N0cmluZygpO1xyXG4gIH1cclxuXHJcbiAgZG9jdW1lbnQuY29va2llID0gbmFtZSArIFwiPVwiICsgKHZhbHVlIHx8IFwiXCIpICsgZXhwaXJlcyArIFwiOyBwYXRoPS9cIjtcclxufVxyXG4iLCJpbXBvcnQgeyBob3N0IH0gZnJvbSBcIi4vY29uc3RhbnRzXCJcclxuXHJcbmNvbnN0IEFVVEhfVVJMID0gaG9zdCArIGBhdXRoYDtcclxuXHJcbmV4cG9ydCBjb25zdCBSRUdJU1RFUiA9IHtcclxuICAgIHVybDogQVVUSF9VUkwgKyAnL3JlZ2lzdHJhdGlvbicsXHJcbiAgICBtZXRob2Q6ICdwb3N0J1xyXG59XHJcblxyXG5leHBvcnQgY29uc3QgTE9HSU4gPSB7XHJcbiAgICB1cmw6IEFVVEhfVVJMICsgJy9sb2dpbicsXHJcbiAgICBtZXRob2Q6ICdwb3N0J1xyXG59XHJcblxyXG5leHBvcnQgY29uc3QgU1RBUlRfUkVTRVRfUEFTU1dPUkQgPSBlbWFpbCA9PiAoe1xyXG4gICAgdXJsOiBBVVRIX1VSTCArIGAvcGFzc3dvcmQvcmVzZXQ/ZW1haWw9JHtlbWFpbH1gLFxyXG4gICAgbWV0aG9kOiAncG9zdCdcclxufSlcclxuXHJcblxyXG5leHBvcnQgY29uc3QgVkVSSUZZX1BBU1NXT1JEX1JFU0VUID0ge1xyXG4gICAgdXJsOiBBVVRIX1VSTCArIGAvcGFzc3dvcmQvdmVyaWZ5X2NvZGVgLFxyXG4gICAgbWV0aG9kOiAncHV0JyAgICBcclxufVxyXG5cclxuZXhwb3J0IGNvbnN0IFNFVF9ORVdfUEFTU1dPUkQgPSB7XHJcbiAgICB1cmw6IEFVVEhfVVJMICsgYC9wYXNzd29yZC9uZXdfcGFzc3dvcmQgYCxcclxuICAgIG1ldGhvZDogJ3B1dCcgICAgXHJcbn1cclxuXHJcbmV4cG9ydCBjb25zdCBHRVRfTkVXUyA9IHtcclxuICAgIHVybDogaG9zdCArIGBhZG1pbi9uZXdzYCxcclxuICAgIG1ldGhvZDogYGdldGBcclxufVxyXG5cclxuZXhwb3J0IGNvbnN0IEdFVF9NQVRDSEVTID0ge1xyXG4gICAgdXJsOiBob3N0ICsgYGFkbWluL21hdGNoLW9mLXRoZS1kYXlgLFxyXG4gICAgbWV0aG9kOiBgZ2V0YFxyXG59XHJcblxyXG5leHBvcnQgY29uc3QgR0VUX01BVENIRVNfT0ZfTkVYVF9EQVkgPSB7XHJcbiAgICB1cmw6IGhvc3QgKyBgYWRtaW4vbWF0Y2gtb2YtdGhlLWRheT90eXBlPW5leHRfZGF5YCxcclxuICAgIG1ldGhvZDogYGdldGBcclxufVxyXG5cclxuZXhwb3J0IGNvbnN0IEdFVF9QUkVESUNUSU9OUyA9IHtcclxuICAgIHVybDogaG9zdCArIGBhZG1pbi9wcmVkaWN0aW9uYCxcclxuICAgIG1ldGhvZDogYGdldGBcclxufVxyXG5cclxuZXhwb3J0IGNvbnN0IEdFVF9GRUVEQkFDSyA9IGlkID0+ICh7XHJcbiAgICB1cmw6IGhvc3QgKyBgZmVlZGJhY2svJHtpZH0/c29ydF9ieT1jcmVhdGVkX2F0Jm9yZGVyX2J5PWRlc2NgLFxyXG4gICAgbWV0aG9kOiBgZ2V0YFxyXG59KVxyXG5cclxuZXhwb3J0IGNvbnN0IEdFVF9NQVRDSEVTX0JZX1RZUEUgPSB0eXBlID0+ICh7XHJcbiAgICB1cmw6IGhvc3QgKyBgYWRtaW4vZ2FtZT90eXBlPSR7dHlwZX1gLFxyXG4gICAgbWV0aG9kOiBgZ2V0YFxyXG59KVxyXG4iLCJcInVzZSBzdHJpY3RcIjt2YXIgX2ludGVyb3BSZXF1aXJlV2lsZGNhcmQ9cmVxdWlyZShcIkBiYWJlbC9ydW50aW1lL2hlbHBlcnMvaW50ZXJvcFJlcXVpcmVXaWxkY2FyZFwiKTtleHBvcnRzLl9fZXNNb2R1bGU9dHJ1ZTtleHBvcnRzLmRlZmF1bHQ9dm9pZCAwO3ZhciBfcmVhY3Q9X2ludGVyb3BSZXF1aXJlV2lsZGNhcmQocmVxdWlyZShcInJlYWN0XCIpKTt2YXIgX3JvdXRlcj1yZXF1aXJlKFwiLi4vbmV4dC1zZXJ2ZXIvbGliL3JvdXRlci9yb3V0ZXJcIik7dmFyIF9yb3V0ZXIyPXJlcXVpcmUoXCIuL3JvdXRlclwiKTt2YXIgX3VzZUludGVyc2VjdGlvbj1yZXF1aXJlKFwiLi91c2UtaW50ZXJzZWN0aW9uXCIpO2NvbnN0IHByZWZldGNoZWQ9e307ZnVuY3Rpb24gcHJlZmV0Y2gocm91dGVyLGhyZWYsYXMsb3B0aW9ucyl7aWYodHlwZW9mIHdpbmRvdz09PSd1bmRlZmluZWQnfHwhcm91dGVyKXJldHVybjtpZighKDAsX3JvdXRlci5pc0xvY2FsVVJMKShocmVmKSlyZXR1cm47Ly8gUHJlZmV0Y2ggdGhlIEpTT04gcGFnZSBpZiBhc2tlZCAob25seSBpbiB0aGUgY2xpZW50KVxuLy8gV2UgbmVlZCB0byBoYW5kbGUgYSBwcmVmZXRjaCBlcnJvciBoZXJlIHNpbmNlIHdlIG1heSBiZVxuLy8gbG9hZGluZyB3aXRoIHByaW9yaXR5IHdoaWNoIGNhbiByZWplY3QgYnV0IHdlIGRvbid0XG4vLyB3YW50IHRvIGZvcmNlIG5hdmlnYXRpb24gc2luY2UgdGhpcyBpcyBvbmx5IGEgcHJlZmV0Y2hcbnJvdXRlci5wcmVmZXRjaChocmVmLGFzLG9wdGlvbnMpLmNhdGNoKGVycj0+e2lmKHByb2Nlc3MuZW52Lk5PREVfRU5WIT09J3Byb2R1Y3Rpb24nKXsvLyByZXRocm93IHRvIHNob3cgaW52YWxpZCBVUkwgZXJyb3JzXG50aHJvdyBlcnI7fX0pO2NvbnN0IGN1ckxvY2FsZT1vcHRpb25zJiZ0eXBlb2Ygb3B0aW9ucy5sb2NhbGUhPT0ndW5kZWZpbmVkJz9vcHRpb25zLmxvY2FsZTpyb3V0ZXImJnJvdXRlci5sb2NhbGU7Ly8gSm9pbiBvbiBhbiBpbnZhbGlkIFVSSSBjaGFyYWN0ZXJcbnByZWZldGNoZWRbaHJlZisnJScrYXMrKGN1ckxvY2FsZT8nJScrY3VyTG9jYWxlOicnKV09dHJ1ZTt9ZnVuY3Rpb24gaXNNb2RpZmllZEV2ZW50KGV2ZW50KXtjb25zdHt0YXJnZXR9PWV2ZW50LmN1cnJlbnRUYXJnZXQ7cmV0dXJuIHRhcmdldCYmdGFyZ2V0IT09J19zZWxmJ3x8ZXZlbnQubWV0YUtleXx8ZXZlbnQuY3RybEtleXx8ZXZlbnQuc2hpZnRLZXl8fGV2ZW50LmFsdEtleXx8Ly8gdHJpZ2dlcnMgcmVzb3VyY2UgZG93bmxvYWRcbmV2ZW50Lm5hdGl2ZUV2ZW50JiZldmVudC5uYXRpdmVFdmVudC53aGljaD09PTI7fWZ1bmN0aW9uIGxpbmtDbGlja2VkKGUscm91dGVyLGhyZWYsYXMscmVwbGFjZSxzaGFsbG93LHNjcm9sbCxsb2NhbGUpe2NvbnN0e25vZGVOYW1lfT1lLmN1cnJlbnRUYXJnZXQ7aWYobm9kZU5hbWU9PT0nQScmJihpc01vZGlmaWVkRXZlbnQoZSl8fCEoMCxfcm91dGVyLmlzTG9jYWxVUkwpKGhyZWYpKSl7Ly8gaWdub3JlIGNsaWNrIGZvciBicm93c2Vy4oCZcyBkZWZhdWx0IGJlaGF2aW9yXG5yZXR1cm47fWUucHJldmVudERlZmF1bHQoKTsvLyAgYXZvaWQgc2Nyb2xsIGZvciB1cmxzIHdpdGggYW5jaG9yIHJlZnNcbmlmKHNjcm9sbD09bnVsbCYmYXMuaW5kZXhPZignIycpPj0wKXtzY3JvbGw9ZmFsc2U7fS8vIHJlcGxhY2Ugc3RhdGUgaW5zdGVhZCBvZiBwdXNoIGlmIHByb3AgaXMgcHJlc2VudFxucm91dGVyW3JlcGxhY2U/J3JlcGxhY2UnOidwdXNoJ10oaHJlZixhcyx7c2hhbGxvdyxsb2NhbGUsc2Nyb2xsfSk7fWZ1bmN0aW9uIExpbmsocHJvcHMpe2lmKHByb2Nlc3MuZW52Lk5PREVfRU5WIT09J3Byb2R1Y3Rpb24nKXtmdW5jdGlvbiBjcmVhdGVQcm9wRXJyb3IoYXJncyl7cmV0dXJuIG5ldyBFcnJvcihgRmFpbGVkIHByb3AgdHlwZTogVGhlIHByb3AgXFxgJHthcmdzLmtleX1cXGAgZXhwZWN0cyBhICR7YXJncy5leHBlY3RlZH0gaW4gXFxgPExpbms+XFxgLCBidXQgZ290IFxcYCR7YXJncy5hY3R1YWx9XFxgIGluc3RlYWQuYCsodHlwZW9mIHdpbmRvdyE9PSd1bmRlZmluZWQnP1wiXFxuT3BlbiB5b3VyIGJyb3dzZXIncyBjb25zb2xlIHRvIHZpZXcgdGhlIENvbXBvbmVudCBzdGFjayB0cmFjZS5cIjonJykpO30vLyBUeXBlU2NyaXB0IHRyaWNrIGZvciB0eXBlLWd1YXJkaW5nOlxuY29uc3QgcmVxdWlyZWRQcm9wc0d1YXJkPXtocmVmOnRydWV9O2NvbnN0IHJlcXVpcmVkUHJvcHM9T2JqZWN0LmtleXMocmVxdWlyZWRQcm9wc0d1YXJkKTtyZXF1aXJlZFByb3BzLmZvckVhY2goa2V5PT57aWYoa2V5PT09J2hyZWYnKXtpZihwcm9wc1trZXldPT1udWxsfHx0eXBlb2YgcHJvcHNba2V5XSE9PSdzdHJpbmcnJiZ0eXBlb2YgcHJvcHNba2V5XSE9PSdvYmplY3QnKXt0aHJvdyBjcmVhdGVQcm9wRXJyb3Ioe2tleSxleHBlY3RlZDonYHN0cmluZ2Agb3IgYG9iamVjdGAnLGFjdHVhbDpwcm9wc1trZXldPT09bnVsbD8nbnVsbCc6dHlwZW9mIHByb3BzW2tleV19KTt9fWVsc2V7Ly8gVHlwZVNjcmlwdCB0cmljayBmb3IgdHlwZS1ndWFyZGluZzpcbi8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBAdHlwZXNjcmlwdC1lc2xpbnQvbm8tdW51c2VkLXZhcnNcbmNvbnN0IF89a2V5O319KTsvLyBUeXBlU2NyaXB0IHRyaWNrIGZvciB0eXBlLWd1YXJkaW5nOlxuY29uc3Qgb3B0aW9uYWxQcm9wc0d1YXJkPXthczp0cnVlLHJlcGxhY2U6dHJ1ZSxzY3JvbGw6dHJ1ZSxzaGFsbG93OnRydWUscGFzc0hyZWY6dHJ1ZSxwcmVmZXRjaDp0cnVlLGxvY2FsZTp0cnVlfTtjb25zdCBvcHRpb25hbFByb3BzPU9iamVjdC5rZXlzKG9wdGlvbmFsUHJvcHNHdWFyZCk7b3B0aW9uYWxQcm9wcy5mb3JFYWNoKGtleT0+e2NvbnN0IHZhbFR5cGU9dHlwZW9mIHByb3BzW2tleV07aWYoa2V5PT09J2FzJyl7aWYocHJvcHNba2V5XSYmdmFsVHlwZSE9PSdzdHJpbmcnJiZ2YWxUeXBlIT09J29iamVjdCcpe3Rocm93IGNyZWF0ZVByb3BFcnJvcih7a2V5LGV4cGVjdGVkOidgc3RyaW5nYCBvciBgb2JqZWN0YCcsYWN0dWFsOnZhbFR5cGV9KTt9fWVsc2UgaWYoa2V5PT09J2xvY2FsZScpe2lmKHByb3BzW2tleV0mJnZhbFR5cGUhPT0nc3RyaW5nJyl7dGhyb3cgY3JlYXRlUHJvcEVycm9yKHtrZXksZXhwZWN0ZWQ6J2BzdHJpbmdgJyxhY3R1YWw6dmFsVHlwZX0pO319ZWxzZSBpZihrZXk9PT0ncmVwbGFjZSd8fGtleT09PSdzY3JvbGwnfHxrZXk9PT0nc2hhbGxvdyd8fGtleT09PSdwYXNzSHJlZid8fGtleT09PSdwcmVmZXRjaCcpe2lmKHByb3BzW2tleV0hPW51bGwmJnZhbFR5cGUhPT0nYm9vbGVhbicpe3Rocm93IGNyZWF0ZVByb3BFcnJvcih7a2V5LGV4cGVjdGVkOidgYm9vbGVhbmAnLGFjdHVhbDp2YWxUeXBlfSk7fX1lbHNley8vIFR5cGVTY3JpcHQgdHJpY2sgZm9yIHR5cGUtZ3VhcmRpbmc6XG4vLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgQHR5cGVzY3JpcHQtZXNsaW50L25vLXVudXNlZC12YXJzXG5jb25zdCBfPWtleTt9fSk7Ly8gVGhpcyBob29rIGlzIGluIGEgY29uZGl0aW9uYWwgYnV0IHRoYXQgaXMgb2sgYmVjYXVzZSBgcHJvY2Vzcy5lbnYuTk9ERV9FTlZgIG5ldmVyIGNoYW5nZXNcbi8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSByZWFjdC1ob29rcy9ydWxlcy1vZi1ob29rc1xuY29uc3QgaGFzV2FybmVkPV9yZWFjdC5kZWZhdWx0LnVzZVJlZihmYWxzZSk7aWYocHJvcHMucHJlZmV0Y2gmJiFoYXNXYXJuZWQuY3VycmVudCl7aGFzV2FybmVkLmN1cnJlbnQ9dHJ1ZTtjb25zb2xlLndhcm4oJ05leHQuanMgYXV0by1wcmVmZXRjaGVzIGF1dG9tYXRpY2FsbHkgYmFzZWQgb24gdmlld3BvcnQuIFRoZSBwcmVmZXRjaCBhdHRyaWJ1dGUgaXMgbm8gbG9uZ2VyIG5lZWRlZC4gTW9yZTogaHR0cHM6Ly9uZXh0anMub3JnL2RvY3MvbWVzc2FnZXMvcHJlZmV0Y2gtdHJ1ZS1kZXByZWNhdGVkJyk7fX1jb25zdCBwPXByb3BzLnByZWZldGNoIT09ZmFsc2U7Y29uc3Qgcm91dGVyPSgwLF9yb3V0ZXIyLnVzZVJvdXRlcikoKTtjb25zdHtocmVmLGFzfT1fcmVhY3QuZGVmYXVsdC51c2VNZW1vKCgpPT57Y29uc3RbcmVzb2x2ZWRIcmVmLHJlc29sdmVkQXNdPSgwLF9yb3V0ZXIucmVzb2x2ZUhyZWYpKHJvdXRlcixwcm9wcy5ocmVmLHRydWUpO3JldHVybntocmVmOnJlc29sdmVkSHJlZixhczpwcm9wcy5hcz8oMCxfcm91dGVyLnJlc29sdmVIcmVmKShyb3V0ZXIscHJvcHMuYXMpOnJlc29sdmVkQXN8fHJlc29sdmVkSHJlZn07fSxbcm91dGVyLHByb3BzLmhyZWYscHJvcHMuYXNdKTtsZXR7Y2hpbGRyZW4scmVwbGFjZSxzaGFsbG93LHNjcm9sbCxsb2NhbGV9PXByb3BzOy8vIERlcHJlY2F0ZWQuIFdhcm5pbmcgc2hvd24gYnkgcHJvcFR5cGUgY2hlY2suIElmIHRoZSBjaGlsZHJlbiBwcm92aWRlZCBpcyBhIHN0cmluZyAoPExpbms+ZXhhbXBsZTwvTGluaz4pIHdlIHdyYXAgaXQgaW4gYW4gPGE+IHRhZ1xuaWYodHlwZW9mIGNoaWxkcmVuPT09J3N0cmluZycpe2NoaWxkcmVuPS8qI19fUFVSRV9fKi9fcmVhY3QuZGVmYXVsdC5jcmVhdGVFbGVtZW50KFwiYVwiLG51bGwsY2hpbGRyZW4pO30vLyBUaGlzIHdpbGwgcmV0dXJuIHRoZSBmaXJzdCBjaGlsZCwgaWYgbXVsdGlwbGUgYXJlIHByb3ZpZGVkIGl0IHdpbGwgdGhyb3cgYW4gZXJyb3JcbmxldCBjaGlsZDtpZihwcm9jZXNzLmVudi5OT0RFX0VOVj09PSdkZXZlbG9wbWVudCcpe3RyeXtjaGlsZD1fcmVhY3QuQ2hpbGRyZW4ub25seShjaGlsZHJlbik7fWNhdGNoKGVycil7dGhyb3cgbmV3IEVycm9yKGBNdWx0aXBsZSBjaGlsZHJlbiB3ZXJlIHBhc3NlZCB0byA8TGluaz4gd2l0aCBcXGBocmVmXFxgIG9mIFxcYCR7cHJvcHMuaHJlZn1cXGAgYnV0IG9ubHkgb25lIGNoaWxkIGlzIHN1cHBvcnRlZCBodHRwczovL25leHRqcy5vcmcvZG9jcy9tZXNzYWdlcy9saW5rLW11bHRpcGxlLWNoaWxkcmVuYCsodHlwZW9mIHdpbmRvdyE9PSd1bmRlZmluZWQnP1wiXFxuT3BlbiB5b3VyIGJyb3dzZXIncyBjb25zb2xlIHRvIHZpZXcgdGhlIENvbXBvbmVudCBzdGFjayB0cmFjZS5cIjonJykpO319ZWxzZXtjaGlsZD1fcmVhY3QuQ2hpbGRyZW4ub25seShjaGlsZHJlbik7fWNvbnN0IGNoaWxkUmVmPWNoaWxkJiZ0eXBlb2YgY2hpbGQ9PT0nb2JqZWN0JyYmY2hpbGQucmVmO2NvbnN0W3NldEludGVyc2VjdGlvblJlZixpc1Zpc2libGVdPSgwLF91c2VJbnRlcnNlY3Rpb24udXNlSW50ZXJzZWN0aW9uKSh7cm9vdE1hcmdpbjonMjAwcHgnfSk7Y29uc3Qgc2V0UmVmPV9yZWFjdC5kZWZhdWx0LnVzZUNhbGxiYWNrKGVsPT57c2V0SW50ZXJzZWN0aW9uUmVmKGVsKTtpZihjaGlsZFJlZil7aWYodHlwZW9mIGNoaWxkUmVmPT09J2Z1bmN0aW9uJyljaGlsZFJlZihlbCk7ZWxzZSBpZih0eXBlb2YgY2hpbGRSZWY9PT0nb2JqZWN0Jyl7Y2hpbGRSZWYuY3VycmVudD1lbDt9fX0sW2NoaWxkUmVmLHNldEludGVyc2VjdGlvblJlZl0pOygwLF9yZWFjdC51c2VFZmZlY3QpKCgpPT57Y29uc3Qgc2hvdWxkUHJlZmV0Y2g9aXNWaXNpYmxlJiZwJiYoMCxfcm91dGVyLmlzTG9jYWxVUkwpKGhyZWYpO2NvbnN0IGN1ckxvY2FsZT10eXBlb2YgbG9jYWxlIT09J3VuZGVmaW5lZCc/bG9jYWxlOnJvdXRlciYmcm91dGVyLmxvY2FsZTtjb25zdCBpc1ByZWZldGNoZWQ9cHJlZmV0Y2hlZFtocmVmKyclJythcysoY3VyTG9jYWxlPyclJytjdXJMb2NhbGU6JycpXTtpZihzaG91bGRQcmVmZXRjaCYmIWlzUHJlZmV0Y2hlZCl7cHJlZmV0Y2gocm91dGVyLGhyZWYsYXMse2xvY2FsZTpjdXJMb2NhbGV9KTt9fSxbYXMsaHJlZixpc1Zpc2libGUsbG9jYWxlLHAscm91dGVyXSk7Y29uc3QgY2hpbGRQcm9wcz17cmVmOnNldFJlZixvbkNsaWNrOmU9PntpZihjaGlsZC5wcm9wcyYmdHlwZW9mIGNoaWxkLnByb3BzLm9uQ2xpY2s9PT0nZnVuY3Rpb24nKXtjaGlsZC5wcm9wcy5vbkNsaWNrKGUpO31pZighZS5kZWZhdWx0UHJldmVudGVkKXtsaW5rQ2xpY2tlZChlLHJvdXRlcixocmVmLGFzLHJlcGxhY2Usc2hhbGxvdyxzY3JvbGwsbG9jYWxlKTt9fX07Y2hpbGRQcm9wcy5vbk1vdXNlRW50ZXI9ZT0+e2lmKCEoMCxfcm91dGVyLmlzTG9jYWxVUkwpKGhyZWYpKXJldHVybjtpZihjaGlsZC5wcm9wcyYmdHlwZW9mIGNoaWxkLnByb3BzLm9uTW91c2VFbnRlcj09PSdmdW5jdGlvbicpe2NoaWxkLnByb3BzLm9uTW91c2VFbnRlcihlKTt9cHJlZmV0Y2gocm91dGVyLGhyZWYsYXMse3ByaW9yaXR5OnRydWV9KTt9Oy8vIElmIGNoaWxkIGlzIGFuIDxhPiB0YWcgYW5kIGRvZXNuJ3QgaGF2ZSBhIGhyZWYgYXR0cmlidXRlLCBvciBpZiB0aGUgJ3Bhc3NIcmVmJyBwcm9wZXJ0eSBpc1xuLy8gZGVmaW5lZCwgd2Ugc3BlY2lmeSB0aGUgY3VycmVudCAnaHJlZicsIHNvIHRoYXQgcmVwZXRpdGlvbiBpcyBub3QgbmVlZGVkIGJ5IHRoZSB1c2VyXG5pZihwcm9wcy5wYXNzSHJlZnx8Y2hpbGQudHlwZT09PSdhJyYmISgnaHJlZidpbiBjaGlsZC5wcm9wcykpe2NvbnN0IGN1ckxvY2FsZT10eXBlb2YgbG9jYWxlIT09J3VuZGVmaW5lZCc/bG9jYWxlOnJvdXRlciYmcm91dGVyLmxvY2FsZTsvLyB3ZSBvbmx5IHJlbmRlciBkb21haW4gbG9jYWxlcyBpZiB3ZSBhcmUgY3VycmVudGx5IG9uIGEgZG9tYWluIGxvY2FsZVxuLy8gc28gdGhhdCBsb2NhbGUgbGlua3MgYXJlIHN0aWxsIHZpc2l0YWJsZSBpbiBkZXZlbG9wbWVudC9wcmV2aWV3IGVudnNcbmNvbnN0IGxvY2FsZURvbWFpbj1yb3V0ZXImJnJvdXRlci5pc0xvY2FsZURvbWFpbiYmKDAsX3JvdXRlci5nZXREb21haW5Mb2NhbGUpKGFzLGN1ckxvY2FsZSxyb3V0ZXImJnJvdXRlci5sb2NhbGVzLHJvdXRlciYmcm91dGVyLmRvbWFpbkxvY2FsZXMpO2NoaWxkUHJvcHMuaHJlZj1sb2NhbGVEb21haW58fCgwLF9yb3V0ZXIuYWRkQmFzZVBhdGgpKCgwLF9yb3V0ZXIuYWRkTG9jYWxlKShhcyxjdXJMb2NhbGUscm91dGVyJiZyb3V0ZXIuZGVmYXVsdExvY2FsZSkpO31yZXR1cm4vKiNfX1BVUkVfXyovX3JlYWN0LmRlZmF1bHQuY2xvbmVFbGVtZW50KGNoaWxkLGNoaWxkUHJvcHMpO312YXIgX2RlZmF1bHQ9TGluaztleHBvcnRzLmRlZmF1bHQ9X2RlZmF1bHQ7XG4vLyMgc291cmNlTWFwcGluZ1VSTD1saW5rLmpzLm1hcCIsIlwidXNlIHN0cmljdFwiO2V4cG9ydHMuX19lc01vZHVsZT10cnVlO2V4cG9ydHMucmVtb3ZlUGF0aFRyYWlsaW5nU2xhc2g9cmVtb3ZlUGF0aFRyYWlsaW5nU2xhc2g7ZXhwb3J0cy5ub3JtYWxpemVQYXRoVHJhaWxpbmdTbGFzaD12b2lkIDA7LyoqXG4gKiBSZW1vdmVzIHRoZSB0cmFpbGluZyBzbGFzaCBvZiBhIHBhdGggaWYgdGhlcmUgaXMgb25lLiBQcmVzZXJ2ZXMgdGhlIHJvb3QgcGF0aCBgL2AuXG4gKi9mdW5jdGlvbiByZW1vdmVQYXRoVHJhaWxpbmdTbGFzaChwYXRoKXtyZXR1cm4gcGF0aC5lbmRzV2l0aCgnLycpJiZwYXRoIT09Jy8nP3BhdGguc2xpY2UoMCwtMSk6cGF0aDt9LyoqXG4gKiBOb3JtYWxpemVzIHRoZSB0cmFpbGluZyBzbGFzaCBvZiBhIHBhdGggYWNjb3JkaW5nIHRvIHRoZSBgdHJhaWxpbmdTbGFzaGAgb3B0aW9uXG4gKiBpbiBgbmV4dC5jb25maWcuanNgLlxuICovY29uc3Qgbm9ybWFsaXplUGF0aFRyYWlsaW5nU2xhc2g9cHJvY2Vzcy5lbnYuX19ORVhUX1RSQUlMSU5HX1NMQVNIP3BhdGg9PntpZigvXFwuW14vXStcXC8/JC8udGVzdChwYXRoKSl7cmV0dXJuIHJlbW92ZVBhdGhUcmFpbGluZ1NsYXNoKHBhdGgpO31lbHNlIGlmKHBhdGguZW5kc1dpdGgoJy8nKSl7cmV0dXJuIHBhdGg7fWVsc2V7cmV0dXJuIHBhdGgrJy8nO319OnJlbW92ZVBhdGhUcmFpbGluZ1NsYXNoO2V4cG9ydHMubm9ybWFsaXplUGF0aFRyYWlsaW5nU2xhc2g9bm9ybWFsaXplUGF0aFRyYWlsaW5nU2xhc2g7XG4vLyMgc291cmNlTWFwcGluZ1VSTD1ub3JtYWxpemUtdHJhaWxpbmctc2xhc2guanMubWFwIiwiXCJ1c2Ugc3RyaWN0XCI7ZXhwb3J0cy5fX2VzTW9kdWxlPXRydWU7ZXhwb3J0cy5jYW5jZWxJZGxlQ2FsbGJhY2s9ZXhwb3J0cy5yZXF1ZXN0SWRsZUNhbGxiYWNrPXZvaWQgMDtjb25zdCByZXF1ZXN0SWRsZUNhbGxiYWNrPXR5cGVvZiBzZWxmIT09J3VuZGVmaW5lZCcmJnNlbGYucmVxdWVzdElkbGVDYWxsYmFja3x8ZnVuY3Rpb24oY2Ipe2xldCBzdGFydD1EYXRlLm5vdygpO3JldHVybiBzZXRUaW1lb3V0KGZ1bmN0aW9uKCl7Y2Ioe2RpZFRpbWVvdXQ6ZmFsc2UsdGltZVJlbWFpbmluZzpmdW5jdGlvbigpe3JldHVybiBNYXRoLm1heCgwLDUwLShEYXRlLm5vdygpLXN0YXJ0KSk7fX0pO30sMSk7fTtleHBvcnRzLnJlcXVlc3RJZGxlQ2FsbGJhY2s9cmVxdWVzdElkbGVDYWxsYmFjaztjb25zdCBjYW5jZWxJZGxlQ2FsbGJhY2s9dHlwZW9mIHNlbGYhPT0ndW5kZWZpbmVkJyYmc2VsZi5jYW5jZWxJZGxlQ2FsbGJhY2t8fGZ1bmN0aW9uKGlkKXtyZXR1cm4gY2xlYXJUaW1lb3V0KGlkKTt9O2V4cG9ydHMuY2FuY2VsSWRsZUNhbGxiYWNrPWNhbmNlbElkbGVDYWxsYmFjaztcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPXJlcXVlc3QtaWRsZS1jYWxsYmFjay5qcy5tYXAiLCJcInVzZSBzdHJpY3RcIjt2YXIgX2ludGVyb3BSZXF1aXJlRGVmYXVsdD1yZXF1aXJlKFwiQGJhYmVsL3J1bnRpbWUvaGVscGVycy9pbnRlcm9wUmVxdWlyZURlZmF1bHRcIik7ZXhwb3J0cy5fX2VzTW9kdWxlPXRydWU7ZXhwb3J0cy5tYXJrQXNzZXRFcnJvcj1tYXJrQXNzZXRFcnJvcjtleHBvcnRzLmlzQXNzZXRFcnJvcj1pc0Fzc2V0RXJyb3I7ZXhwb3J0cy5nZXRDbGllbnRCdWlsZE1hbmlmZXN0PWdldENsaWVudEJ1aWxkTWFuaWZlc3Q7ZXhwb3J0cy5kZWZhdWx0PXZvaWQgMDt2YXIgX2dldEFzc2V0UGF0aEZyb21Sb3V0ZT1faW50ZXJvcFJlcXVpcmVEZWZhdWx0KHJlcXVpcmUoXCIuLi9uZXh0LXNlcnZlci9saWIvcm91dGVyL3V0aWxzL2dldC1hc3NldC1wYXRoLWZyb20tcm91dGVcIikpO3ZhciBfcmVxdWVzdElkbGVDYWxsYmFjaz1yZXF1aXJlKFwiLi9yZXF1ZXN0LWlkbGUtY2FsbGJhY2tcIik7Ly8gMy44cyB3YXMgYXJiaXRyYXJpbHkgY2hvc2VuIGFzIGl0J3Mgd2hhdCBodHRwczovL3dlYi5kZXYvaW50ZXJhY3RpdmVcbi8vIGNvbnNpZGVycyBhcyBcIkdvb2RcIiB0aW1lLXRvLWludGVyYWN0aXZlLiBXZSBtdXN0IGFzc3VtZSBzb21ldGhpbmcgd2VudFxuLy8gd3JvbmcgYmV5b25kIHRoaXMgcG9pbnQsIGFuZCB0aGVuIGZhbGwtYmFjayB0byBhIGZ1bGwgcGFnZSB0cmFuc2l0aW9uIHRvXG4vLyBzaG93IHRoZSB1c2VyIHNvbWV0aGluZyBvZiB2YWx1ZS5cbmNvbnN0IE1TX01BWF9JRExFX0RFTEFZPTM4MDA7ZnVuY3Rpb24gd2l0aEZ1dHVyZShrZXksbWFwLGdlbmVyYXRvcil7bGV0IGVudHJ5PW1hcC5nZXQoa2V5KTtpZihlbnRyeSl7aWYoJ2Z1dHVyZSdpbiBlbnRyeSl7cmV0dXJuIGVudHJ5LmZ1dHVyZTt9cmV0dXJuIFByb21pc2UucmVzb2x2ZShlbnRyeSk7fWxldCByZXNvbHZlcjtjb25zdCBwcm9tPW5ldyBQcm9taXNlKHJlc29sdmU9PntyZXNvbHZlcj1yZXNvbHZlO30pO21hcC5zZXQoa2V5LGVudHJ5PXtyZXNvbHZlOnJlc29sdmVyLGZ1dHVyZTpwcm9tfSk7cmV0dXJuIGdlbmVyYXRvcj8vLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tc2VxdWVuY2VzXG5nZW5lcmF0b3IoKS50aGVuKHZhbHVlPT4ocmVzb2x2ZXIodmFsdWUpLHZhbHVlKSk6cHJvbTt9ZnVuY3Rpb24gaGFzUHJlZmV0Y2gobGluayl7dHJ5e2xpbms9ZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbGluaycpO3JldHVybigvLyBkZXRlY3QgSUUxMSBzaW5jZSBpdCBzdXBwb3J0cyBwcmVmZXRjaCBidXQgaXNuJ3QgZGV0ZWN0ZWRcbi8vIHdpdGggcmVsTGlzdC5zdXBwb3J0XG4hIXdpbmRvdy5NU0lucHV0TWV0aG9kQ29udGV4dCYmISFkb2N1bWVudC5kb2N1bWVudE1vZGV8fGxpbmsucmVsTGlzdC5zdXBwb3J0cygncHJlZmV0Y2gnKSk7fWNhdGNoKF91bnVzZWQpe3JldHVybiBmYWxzZTt9fWNvbnN0IGNhblByZWZldGNoPWhhc1ByZWZldGNoKCk7ZnVuY3Rpb24gcHJlZmV0Y2hWaWFEb20oaHJlZixhcyxsaW5rKXtyZXR1cm4gbmV3IFByb21pc2UoKHJlcyxyZWopPT57aWYoZG9jdW1lbnQucXVlcnlTZWxlY3RvcihgbGlua1tyZWw9XCJwcmVmZXRjaFwiXVtocmVmXj1cIiR7aHJlZn1cIl1gKSl7cmV0dXJuIHJlcygpO31saW5rPWRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2xpbmsnKTsvLyBUaGUgb3JkZXIgb2YgcHJvcGVydHkgYXNzaWdubWVudCBoZXJlIGlzIGludGVudGlvbmFsOlxuaWYoYXMpbGluay5hcz1hcztsaW5rLnJlbD1gcHJlZmV0Y2hgO2xpbmsuY3Jvc3NPcmlnaW49cHJvY2Vzcy5lbnYuX19ORVhUX0NST1NTX09SSUdJTjtsaW5rLm9ubG9hZD1yZXM7bGluay5vbmVycm9yPXJlajsvLyBgaHJlZmAgc2hvdWxkIGFsd2F5cyBiZSBsYXN0OlxubGluay5ocmVmPWhyZWY7ZG9jdW1lbnQuaGVhZC5hcHBlbmRDaGlsZChsaW5rKTt9KTt9Y29uc3QgQVNTRVRfTE9BRF9FUlJPUj1TeW1ib2woJ0FTU0VUX0xPQURfRVJST1InKTsvLyBUT0RPOiB1bmV4cG9ydFxuZnVuY3Rpb24gbWFya0Fzc2V0RXJyb3IoZXJyKXtyZXR1cm4gT2JqZWN0LmRlZmluZVByb3BlcnR5KGVycixBU1NFVF9MT0FEX0VSUk9SLHt9KTt9ZnVuY3Rpb24gaXNBc3NldEVycm9yKGVycil7cmV0dXJuIGVyciYmQVNTRVRfTE9BRF9FUlJPUiBpbiBlcnI7fWZ1bmN0aW9uIGFwcGVuZFNjcmlwdChzcmMsc2NyaXB0KXtyZXR1cm4gbmV3IFByb21pc2UoKHJlc29sdmUscmVqZWN0KT0+e3NjcmlwdD1kb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzY3JpcHQnKTsvLyBUaGUgb3JkZXIgb2YgcHJvcGVydHkgYXNzaWdubWVudCBoZXJlIGlzIGludGVudGlvbmFsLlxuLy8gMS4gU2V0dXAgc3VjY2Vzcy9mYWlsdXJlIGhvb2tzIGluIGNhc2UgdGhlIGJyb3dzZXIgc3luY2hyb25vdXNseVxuLy8gICAgZXhlY3V0ZXMgd2hlbiBgc3JjYCBpcyBzZXQuXG5zY3JpcHQub25sb2FkPXJlc29sdmU7c2NyaXB0Lm9uZXJyb3I9KCk9PnJlamVjdChtYXJrQXNzZXRFcnJvcihuZXcgRXJyb3IoYEZhaWxlZCB0byBsb2FkIHNjcmlwdDogJHtzcmN9YCkpKTsvLyAyLiBDb25maWd1cmUgdGhlIGNyb3NzLW9yaWdpbiBhdHRyaWJ1dGUgYmVmb3JlIHNldHRpbmcgYHNyY2AgaW4gY2FzZSB0aGVcbi8vICAgIGJyb3dzZXIgYmVnaW5zIHRvIGZldGNoLlxuc2NyaXB0LmNyb3NzT3JpZ2luPXByb2Nlc3MuZW52Ll9fTkVYVF9DUk9TU19PUklHSU47Ly8gMy4gRmluYWxseSwgc2V0IHRoZSBzb3VyY2UgYW5kIGluamVjdCBpbnRvIHRoZSBET00gaW4gY2FzZSB0aGUgY2hpbGRcbi8vICAgIG11c3QgYmUgYXBwZW5kZWQgZm9yIGZldGNoaW5nIHRvIHN0YXJ0Llxuc2NyaXB0LnNyYz1zcmM7ZG9jdW1lbnQuYm9keS5hcHBlbmRDaGlsZChzY3JpcHQpO30pO30vLyBSZXNvbHZlIGEgcHJvbWlzZSB0aGF0IHRpbWVzIG91dCBhZnRlciBnaXZlbiBhbW91bnQgb2YgbWlsbGlzZWNvbmRzLlxuZnVuY3Rpb24gcmVzb2x2ZVByb21pc2VXaXRoVGltZW91dChwLG1zLGVycil7cmV0dXJuIG5ldyBQcm9taXNlKChyZXNvbHZlLHJlamVjdCk9PntsZXQgY2FuY2VsbGVkPWZhbHNlO3AudGhlbihyPT57Ly8gUmVzb2x2ZWQsIGNhbmNlbCB0aGUgdGltZW91dFxuY2FuY2VsbGVkPXRydWU7cmVzb2x2ZShyKTt9KS5jYXRjaChyZWplY3QpOygwLF9yZXF1ZXN0SWRsZUNhbGxiYWNrLnJlcXVlc3RJZGxlQ2FsbGJhY2spKCgpPT5zZXRUaW1lb3V0KCgpPT57aWYoIWNhbmNlbGxlZCl7cmVqZWN0KGVycik7fX0sbXMpKTt9KTt9Ly8gVE9ETzogc3RvcCBleHBvcnRpbmcgb3IgY2FjaGUgdGhlIGZhaWx1cmVcbi8vIEl0J2QgYmUgYmVzdCB0byBzdG9wIGV4cG9ydGluZyB0aGlzLiBJdCdzIGFuIGltcGxlbWVudGF0aW9uIGRldGFpbC4gV2UncmVcbi8vIG9ubHkgZXhwb3J0aW5nIGl0IGZvciBiYWNrd2FyZHMgY29tcGF0aWJpbHR5IHdpdGggdGhlIGBwYWdlLWxvYWRlcmAuXG4vLyBPbmx5IGNhY2hlIHRoaXMgcmVzcG9uc2UgYXMgYSBsYXN0IHJlc29ydCBpZiB3ZSBjYW5ub3QgZWxpbWluYXRlIGFsbCBvdGhlclxuLy8gY29kZSBicmFuY2hlcyB0aGF0IHVzZSB0aGUgQnVpbGQgTWFuaWZlc3QgQ2FsbGJhY2sgYW5kIHB1c2ggdGhlbSB0aHJvdWdoXG4vLyB0aGUgUm91dGUgTG9hZGVyIGludGVyZmFjZS5cbmZ1bmN0aW9uIGdldENsaWVudEJ1aWxkTWFuaWZlc3QoKXtpZihzZWxmLl9fQlVJTERfTUFOSUZFU1Qpe3JldHVybiBQcm9taXNlLnJlc29sdmUoc2VsZi5fX0JVSUxEX01BTklGRVNUKTt9Y29uc3Qgb25CdWlsZE1hbmlmZXN0PW5ldyBQcm9taXNlKHJlc29sdmU9PnsvLyBNYW5kYXRvcnkgYmVjYXVzZSB0aGlzIGlzIG5vdCBjb25jdXJyZW50IHNhZmU6XG5jb25zdCBjYj1zZWxmLl9fQlVJTERfTUFOSUZFU1RfQ0I7c2VsZi5fX0JVSUxEX01BTklGRVNUX0NCPSgpPT57cmVzb2x2ZShzZWxmLl9fQlVJTERfTUFOSUZFU1QpO2NiJiZjYigpO307fSk7cmV0dXJuIHJlc29sdmVQcm9taXNlV2l0aFRpbWVvdXQob25CdWlsZE1hbmlmZXN0LE1TX01BWF9JRExFX0RFTEFZLG1hcmtBc3NldEVycm9yKG5ldyBFcnJvcignRmFpbGVkIHRvIGxvYWQgY2xpZW50IGJ1aWxkIG1hbmlmZXN0JykpKTt9ZnVuY3Rpb24gZ2V0RmlsZXNGb3JSb3V0ZShhc3NldFByZWZpeCxyb3V0ZSl7aWYocHJvY2Vzcy5lbnYuTk9ERV9FTlY9PT0nZGV2ZWxvcG1lbnQnKXtyZXR1cm4gUHJvbWlzZS5yZXNvbHZlKHtzY3JpcHRzOlthc3NldFByZWZpeCsnL19uZXh0L3N0YXRpYy9jaHVua3MvcGFnZXMnK2VuY29kZVVSSSgoMCxfZ2V0QXNzZXRQYXRoRnJvbVJvdXRlLmRlZmF1bHQpKHJvdXRlLCcuanMnKSldLC8vIFN0eWxlcyBhcmUgaGFuZGxlZCBieSBgc3R5bGUtbG9hZGVyYCBpbiBkZXZlbG9wbWVudDpcbmNzczpbXX0pO31yZXR1cm4gZ2V0Q2xpZW50QnVpbGRNYW5pZmVzdCgpLnRoZW4obWFuaWZlc3Q9PntpZighKHJvdXRlIGluIG1hbmlmZXN0KSl7dGhyb3cgbWFya0Fzc2V0RXJyb3IobmV3IEVycm9yKGBGYWlsZWQgdG8gbG9va3VwIHJvdXRlOiAke3JvdXRlfWApKTt9Y29uc3QgYWxsRmlsZXM9bWFuaWZlc3Rbcm91dGVdLm1hcChlbnRyeT0+YXNzZXRQcmVmaXgrJy9fbmV4dC8nK2VuY29kZVVSSShlbnRyeSkpO3JldHVybntzY3JpcHRzOmFsbEZpbGVzLmZpbHRlcih2PT52LmVuZHNXaXRoKCcuanMnKSksY3NzOmFsbEZpbGVzLmZpbHRlcih2PT52LmVuZHNXaXRoKCcuY3NzJykpfTt9KTt9ZnVuY3Rpb24gY3JlYXRlUm91dGVMb2FkZXIoYXNzZXRQcmVmaXgpe2NvbnN0IGVudHJ5cG9pbnRzPW5ldyBNYXAoKTtjb25zdCBsb2FkZWRTY3JpcHRzPW5ldyBNYXAoKTtjb25zdCBzdHlsZVNoZWV0cz1uZXcgTWFwKCk7Y29uc3Qgcm91dGVzPW5ldyBNYXAoKTtmdW5jdGlvbiBtYXliZUV4ZWN1dGVTY3JpcHQoc3JjKXtsZXQgcHJvbT1sb2FkZWRTY3JpcHRzLmdldChzcmMpO2lmKHByb20pe3JldHVybiBwcm9tO30vLyBTa2lwIGV4ZWN1dGluZyBzY3JpcHQgaWYgaXQncyBhbHJlYWR5IGluIHRoZSBET006XG5pZihkb2N1bWVudC5xdWVyeVNlbGVjdG9yKGBzY3JpcHRbc3JjXj1cIiR7c3JjfVwiXWApKXtyZXR1cm4gUHJvbWlzZS5yZXNvbHZlKCk7fWxvYWRlZFNjcmlwdHMuc2V0KHNyYyxwcm9tPWFwcGVuZFNjcmlwdChzcmMpKTtyZXR1cm4gcHJvbTt9ZnVuY3Rpb24gZmV0Y2hTdHlsZVNoZWV0KGhyZWYpe2xldCBwcm9tPXN0eWxlU2hlZXRzLmdldChocmVmKTtpZihwcm9tKXtyZXR1cm4gcHJvbTt9c3R5bGVTaGVldHMuc2V0KGhyZWYscHJvbT1mZXRjaChocmVmKS50aGVuKHJlcz0+e2lmKCFyZXMub2spe3Rocm93IG5ldyBFcnJvcihgRmFpbGVkIHRvIGxvYWQgc3R5bGVzaGVldDogJHtocmVmfWApO31yZXR1cm4gcmVzLnRleHQoKS50aGVuKHRleHQ9Pih7aHJlZjpocmVmLGNvbnRlbnQ6dGV4dH0pKTt9KS5jYXRjaChlcnI9Pnt0aHJvdyBtYXJrQXNzZXRFcnJvcihlcnIpO30pKTtyZXR1cm4gcHJvbTt9cmV0dXJue3doZW5FbnRyeXBvaW50KHJvdXRlKXtyZXR1cm4gd2l0aEZ1dHVyZShyb3V0ZSxlbnRyeXBvaW50cyk7fSxvbkVudHJ5cG9pbnQocm91dGUsZXhlY3V0ZSl7UHJvbWlzZS5yZXNvbHZlKGV4ZWN1dGUpLnRoZW4oZm49PmZuKCkpLnRoZW4oZXhwb3J0cz0+KHtjb21wb25lbnQ6ZXhwb3J0cyYmZXhwb3J0cy5kZWZhdWx0fHxleHBvcnRzLGV4cG9ydHM6ZXhwb3J0c30pLGVycj0+KHtlcnJvcjplcnJ9KSkudGhlbihpbnB1dD0+e2NvbnN0IG9sZD1lbnRyeXBvaW50cy5nZXQocm91dGUpO2VudHJ5cG9pbnRzLnNldChyb3V0ZSxpbnB1dCk7aWYob2xkJiYncmVzb2x2ZSdpbiBvbGQpb2xkLnJlc29sdmUoaW5wdXQpO30pO30sbG9hZFJvdXRlKHJvdXRlLHByZWZldGNoKXtyZXR1cm4gd2l0aEZ1dHVyZShyb3V0ZSxyb3V0ZXMsKCk9PntyZXR1cm4gcmVzb2x2ZVByb21pc2VXaXRoVGltZW91dChnZXRGaWxlc0ZvclJvdXRlKGFzc2V0UHJlZml4LHJvdXRlKS50aGVuKCh7c2NyaXB0cyxjc3N9KT0+e3JldHVybiBQcm9taXNlLmFsbChbZW50cnlwb2ludHMuaGFzKHJvdXRlKT9bXTpQcm9taXNlLmFsbChzY3JpcHRzLm1hcChtYXliZUV4ZWN1dGVTY3JpcHQpKSxQcm9taXNlLmFsbChjc3MubWFwKGZldGNoU3R5bGVTaGVldCkpXSk7fSkudGhlbihyZXM9PntyZXR1cm4gdGhpcy53aGVuRW50cnlwb2ludChyb3V0ZSkudGhlbihlbnRyeXBvaW50PT4oe2VudHJ5cG9pbnQsc3R5bGVzOnJlc1sxXX0pKTt9KSxNU19NQVhfSURMRV9ERUxBWSxtYXJrQXNzZXRFcnJvcihuZXcgRXJyb3IoYFJvdXRlIGRpZCBub3QgY29tcGxldGUgbG9hZGluZzogJHtyb3V0ZX1gKSkpLnRoZW4oKHtlbnRyeXBvaW50LHN0eWxlc30pPT57Y29uc3QgcmVzPU9iamVjdC5hc3NpZ24oe3N0eWxlczpzdHlsZXN9LGVudHJ5cG9pbnQpO3JldHVybidlcnJvcidpbiBlbnRyeXBvaW50P2VudHJ5cG9pbnQ6cmVzO30pLmNhdGNoKGVycj0+e2lmKHByZWZldGNoKXsvLyB3ZSBkb24ndCB3YW50IHRvIGNhY2hlIGVycm9ycyBkdXJpbmcgcHJlZmV0Y2hcbnRocm93IGVycjt9cmV0dXJue2Vycm9yOmVycn07fSk7fSk7fSxwcmVmZXRjaChyb3V0ZSl7Ly8gaHR0cHM6Ly9naXRodWIuY29tL0dvb2dsZUNocm9tZUxhYnMvcXVpY2tsaW5rL2Jsb2IvNDUzYTY2MWZhMWZhOTQwZTJkMmUwNDQ0NTIzOThlMzhjNjdhOThmYi9zcmMvaW5kZXgubWpzI0wxMTUtTDExOFxuLy8gTGljZW5zZTogQXBhY2hlIDIuMFxubGV0IGNuO2lmKGNuPW5hdmlnYXRvci5jb25uZWN0aW9uKXsvLyBEb24ndCBwcmVmZXRjaCBpZiB1c2luZyAyRyBvciBpZiBTYXZlLURhdGEgaXMgZW5hYmxlZC5cbmlmKGNuLnNhdmVEYXRhfHwvMmcvLnRlc3QoY24uZWZmZWN0aXZlVHlwZSkpcmV0dXJuIFByb21pc2UucmVzb2x2ZSgpO31yZXR1cm4gZ2V0RmlsZXNGb3JSb3V0ZShhc3NldFByZWZpeCxyb3V0ZSkudGhlbihvdXRwdXQ9PlByb21pc2UuYWxsKGNhblByZWZldGNoP291dHB1dC5zY3JpcHRzLm1hcChzY3JpcHQ9PnByZWZldGNoVmlhRG9tKHNjcmlwdCwnc2NyaXB0JykpOltdKSkudGhlbigoKT0+eygwLF9yZXF1ZXN0SWRsZUNhbGxiYWNrLnJlcXVlc3RJZGxlQ2FsbGJhY2spKCgpPT50aGlzLmxvYWRSb3V0ZShyb3V0ZSx0cnVlKS5jYXRjaCgoKT0+e30pKTt9KS5jYXRjaCgvLyBzd2FsbG93IHByZWZldGNoIGVycm9yc1xuKCk9Pnt9KTt9fTt9dmFyIF9kZWZhdWx0PWNyZWF0ZVJvdXRlTG9hZGVyO2V4cG9ydHMuZGVmYXVsdD1fZGVmYXVsdDtcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPXJvdXRlLWxvYWRlci5qcy5tYXAiLCJcInVzZSBzdHJpY3RcIjt2YXIgX2ludGVyb3BSZXF1aXJlV2lsZGNhcmQ9cmVxdWlyZShcIkBiYWJlbC9ydW50aW1lL2hlbHBlcnMvaW50ZXJvcFJlcXVpcmVXaWxkY2FyZFwiKTt2YXIgX2ludGVyb3BSZXF1aXJlRGVmYXVsdD1yZXF1aXJlKFwiQGJhYmVsL3J1bnRpbWUvaGVscGVycy9pbnRlcm9wUmVxdWlyZURlZmF1bHRcIik7ZXhwb3J0cy5fX2VzTW9kdWxlPXRydWU7ZXhwb3J0cy51c2VSb3V0ZXI9dXNlUm91dGVyO2V4cG9ydHMubWFrZVB1YmxpY1JvdXRlckluc3RhbmNlPW1ha2VQdWJsaWNSb3V0ZXJJbnN0YW5jZTtleHBvcnRzLmNyZWF0ZVJvdXRlcj1leHBvcnRzLndpdGhSb3V0ZXI9ZXhwb3J0cy5kZWZhdWx0PXZvaWQgMDt2YXIgX3JlYWN0PV9pbnRlcm9wUmVxdWlyZURlZmF1bHQocmVxdWlyZShcInJlYWN0XCIpKTt2YXIgX3JvdXRlcjI9X2ludGVyb3BSZXF1aXJlV2lsZGNhcmQocmVxdWlyZShcIi4uL25leHQtc2VydmVyL2xpYi9yb3V0ZXIvcm91dGVyXCIpKTtleHBvcnRzLlJvdXRlcj1fcm91dGVyMi5kZWZhdWx0O2V4cG9ydHMuTmV4dFJvdXRlcj1fcm91dGVyMi5OZXh0Um91dGVyO3ZhciBfcm91dGVyQ29udGV4dD1yZXF1aXJlKFwiLi4vbmV4dC1zZXJ2ZXIvbGliL3JvdXRlci1jb250ZXh0XCIpO3ZhciBfd2l0aFJvdXRlcj1faW50ZXJvcFJlcXVpcmVEZWZhdWx0KHJlcXVpcmUoXCIuL3dpdGgtcm91dGVyXCIpKTtleHBvcnRzLndpdGhSb3V0ZXI9X3dpdGhSb3V0ZXIuZGVmYXVsdDsvKiBnbG9iYWwgd2luZG93ICovY29uc3Qgc2luZ2xldG9uUm91dGVyPXtyb3V0ZXI6bnVsbCwvLyBob2xkcyB0aGUgYWN0dWFsIHJvdXRlciBpbnN0YW5jZVxucmVhZHlDYWxsYmFja3M6W10scmVhZHkoY2Ipe2lmKHRoaXMucm91dGVyKXJldHVybiBjYigpO2lmKHR5cGVvZiB3aW5kb3chPT0ndW5kZWZpbmVkJyl7dGhpcy5yZWFkeUNhbGxiYWNrcy5wdXNoKGNiKTt9fX07Ly8gQ3JlYXRlIHB1YmxpYyBwcm9wZXJ0aWVzIGFuZCBtZXRob2RzIG9mIHRoZSByb3V0ZXIgaW4gdGhlIHNpbmdsZXRvblJvdXRlclxuY29uc3QgdXJsUHJvcGVydHlGaWVsZHM9WydwYXRobmFtZScsJ3JvdXRlJywncXVlcnknLCdhc1BhdGgnLCdjb21wb25lbnRzJywnaXNGYWxsYmFjaycsJ2Jhc2VQYXRoJywnbG9jYWxlJywnbG9jYWxlcycsJ2RlZmF1bHRMb2NhbGUnLCdpc1JlYWR5JywnaXNQcmV2aWV3JywnaXNMb2NhbGVEb21haW4nLCdkb21haW5Mb2NhbGVzJ107Y29uc3Qgcm91dGVyRXZlbnRzPVsncm91dGVDaGFuZ2VTdGFydCcsJ2JlZm9yZUhpc3RvcnlDaGFuZ2UnLCdyb3V0ZUNoYW5nZUNvbXBsZXRlJywncm91dGVDaGFuZ2VFcnJvcicsJ2hhc2hDaGFuZ2VTdGFydCcsJ2hhc2hDaGFuZ2VDb21wbGV0ZSddO2NvbnN0IGNvcmVNZXRob2RGaWVsZHM9WydwdXNoJywncmVwbGFjZScsJ3JlbG9hZCcsJ2JhY2snLCdwcmVmZXRjaCcsJ2JlZm9yZVBvcFN0YXRlJ107Ly8gRXZlbnRzIGlzIGEgc3RhdGljIHByb3BlcnR5IG9uIHRoZSByb3V0ZXIsIHRoZSByb3V0ZXIgZG9lc24ndCBoYXZlIHRvIGJlIGluaXRpYWxpemVkIHRvIHVzZSBpdFxuT2JqZWN0LmRlZmluZVByb3BlcnR5KHNpbmdsZXRvblJvdXRlciwnZXZlbnRzJyx7Z2V0KCl7cmV0dXJuIF9yb3V0ZXIyLmRlZmF1bHQuZXZlbnRzO319KTt1cmxQcm9wZXJ0eUZpZWxkcy5mb3JFYWNoKGZpZWxkPT57Ly8gSGVyZSB3ZSBuZWVkIHRvIHVzZSBPYmplY3QuZGVmaW5lUHJvcGVydHkgYmVjYXVzZSB3ZSBuZWVkIHRvIHJldHVyblxuLy8gdGhlIHByb3BlcnR5IGFzc2lnbmVkIHRvIHRoZSBhY3R1YWwgcm91dGVyXG4vLyBUaGUgdmFsdWUgbWlnaHQgZ2V0IGNoYW5nZWQgYXMgd2UgY2hhbmdlIHJvdXRlcyBhbmQgdGhpcyBpcyB0aGVcbi8vIHByb3BlciB3YXkgdG8gYWNjZXNzIGl0XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoc2luZ2xldG9uUm91dGVyLGZpZWxkLHtnZXQoKXtjb25zdCByb3V0ZXI9Z2V0Um91dGVyKCk7cmV0dXJuIHJvdXRlcltmaWVsZF07fX0pO30pO2NvcmVNZXRob2RGaWVsZHMuZm9yRWFjaChmaWVsZD0+ey8vIFdlIGRvbid0IHJlYWxseSBrbm93IHRoZSB0eXBlcyBoZXJlLCBzbyB3ZSBhZGQgdGhlbSBsYXRlciBpbnN0ZWFkXG47c2luZ2xldG9uUm91dGVyW2ZpZWxkXT0oLi4uYXJncyk9Pntjb25zdCByb3V0ZXI9Z2V0Um91dGVyKCk7cmV0dXJuIHJvdXRlcltmaWVsZF0oLi4uYXJncyk7fTt9KTtyb3V0ZXJFdmVudHMuZm9yRWFjaChldmVudD0+e3NpbmdsZXRvblJvdXRlci5yZWFkeSgoKT0+e19yb3V0ZXIyLmRlZmF1bHQuZXZlbnRzLm9uKGV2ZW50LCguLi5hcmdzKT0+e2NvbnN0IGV2ZW50RmllbGQ9YG9uJHtldmVudC5jaGFyQXQoMCkudG9VcHBlckNhc2UoKX0ke2V2ZW50LnN1YnN0cmluZygxKX1gO2NvbnN0IF9zaW5nbGV0b25Sb3V0ZXI9c2luZ2xldG9uUm91dGVyO2lmKF9zaW5nbGV0b25Sb3V0ZXJbZXZlbnRGaWVsZF0pe3RyeXtfc2luZ2xldG9uUm91dGVyW2V2ZW50RmllbGRdKC4uLmFyZ3MpO31jYXRjaChlcnIpe2NvbnNvbGUuZXJyb3IoYEVycm9yIHdoZW4gcnVubmluZyB0aGUgUm91dGVyIGV2ZW50OiAke2V2ZW50RmllbGR9YCk7Y29uc29sZS5lcnJvcihgJHtlcnIubWVzc2FnZX1cXG4ke2Vyci5zdGFja31gKTt9fX0pO30pO30pO2Z1bmN0aW9uIGdldFJvdXRlcigpe2lmKCFzaW5nbGV0b25Sb3V0ZXIucm91dGVyKXtjb25zdCBtZXNzYWdlPSdObyByb3V0ZXIgaW5zdGFuY2UgZm91bmQuXFxuJysnWW91IHNob3VsZCBvbmx5IHVzZSBcIm5leHQvcm91dGVyXCIgb24gdGhlIGNsaWVudCBzaWRlIG9mIHlvdXIgYXBwLlxcbic7dGhyb3cgbmV3IEVycm9yKG1lc3NhZ2UpO31yZXR1cm4gc2luZ2xldG9uUm91dGVyLnJvdXRlcjt9Ly8gRXhwb3J0IHRoZSBzaW5nbGV0b25Sb3V0ZXIgYW5kIHRoaXMgaXMgdGhlIHB1YmxpYyBBUEkuXG52YXIgX2RlZmF1bHQ9c2luZ2xldG9uUm91dGVyOy8vIFJlZXhwb3J0IHRoZSB3aXRoUm91dGUgSE9DXG5leHBvcnRzLmRlZmF1bHQ9X2RlZmF1bHQ7ZnVuY3Rpb24gdXNlUm91dGVyKCl7cmV0dXJuIF9yZWFjdC5kZWZhdWx0LnVzZUNvbnRleHQoX3JvdXRlckNvbnRleHQuUm91dGVyQ29udGV4dCk7fS8vIElOVEVSTkFMIEFQSVNcbi8vIC0tLS0tLS0tLS0tLS1cbi8vIChkbyBub3QgdXNlIGZvbGxvd2luZyBleHBvcnRzIGluc2lkZSB0aGUgYXBwKVxuLy8gQ3JlYXRlIGEgcm91dGVyIGFuZCBhc3NpZ24gaXQgYXMgdGhlIHNpbmdsZXRvbiBpbnN0YW5jZS5cbi8vIFRoaXMgaXMgdXNlZCBpbiBjbGllbnQgc2lkZSB3aGVuIHdlIGFyZSBpbml0aWxpemluZyB0aGUgYXBwLlxuLy8gVGhpcyBzaG91bGQgKipub3QqKiBiZSB1c2VkIGluc2lkZSB0aGUgc2VydmVyLlxuY29uc3QgY3JlYXRlUm91dGVyPSguLi5hcmdzKT0+e3NpbmdsZXRvblJvdXRlci5yb3V0ZXI9bmV3IF9yb3V0ZXIyLmRlZmF1bHQoLi4uYXJncyk7c2luZ2xldG9uUm91dGVyLnJlYWR5Q2FsbGJhY2tzLmZvckVhY2goY2I9PmNiKCkpO3NpbmdsZXRvblJvdXRlci5yZWFkeUNhbGxiYWNrcz1bXTtyZXR1cm4gc2luZ2xldG9uUm91dGVyLnJvdXRlcjt9Oy8vIFRoaXMgZnVuY3Rpb24gaXMgdXNlZCB0byBjcmVhdGUgdGhlIGB3aXRoUm91dGVyYCByb3V0ZXIgaW5zdGFuY2VcbmV4cG9ydHMuY3JlYXRlUm91dGVyPWNyZWF0ZVJvdXRlcjtmdW5jdGlvbiBtYWtlUHVibGljUm91dGVySW5zdGFuY2Uocm91dGVyKXtjb25zdCBfcm91dGVyPXJvdXRlcjtjb25zdCBpbnN0YW5jZT17fTtmb3IoY29uc3QgcHJvcGVydHkgb2YgdXJsUHJvcGVydHlGaWVsZHMpe2lmKHR5cGVvZiBfcm91dGVyW3Byb3BlcnR5XT09PSdvYmplY3QnKXtpbnN0YW5jZVtwcm9wZXJ0eV09T2JqZWN0LmFzc2lnbihBcnJheS5pc0FycmF5KF9yb3V0ZXJbcHJvcGVydHldKT9bXTp7fSxfcm91dGVyW3Byb3BlcnR5XSk7Ly8gbWFrZXMgc3VyZSBxdWVyeSBpcyBub3Qgc3RhdGVmdWxcbmNvbnRpbnVlO31pbnN0YW5jZVtwcm9wZXJ0eV09X3JvdXRlcltwcm9wZXJ0eV07fS8vIEV2ZW50cyBpcyBhIHN0YXRpYyBwcm9wZXJ0eSBvbiB0aGUgcm91dGVyLCB0aGUgcm91dGVyIGRvZXNuJ3QgaGF2ZSB0byBiZSBpbml0aWFsaXplZCB0byB1c2UgaXRcbmluc3RhbmNlLmV2ZW50cz1fcm91dGVyMi5kZWZhdWx0LmV2ZW50cztjb3JlTWV0aG9kRmllbGRzLmZvckVhY2goZmllbGQ9PntpbnN0YW5jZVtmaWVsZF09KC4uLmFyZ3MpPT57cmV0dXJuIF9yb3V0ZXJbZmllbGRdKC4uLmFyZ3MpO307fSk7cmV0dXJuIGluc3RhbmNlO31cbi8vIyBzb3VyY2VNYXBwaW5nVVJMPXJvdXRlci5qcy5tYXAiLCJcInVzZSBzdHJpY3RcIjtleHBvcnRzLl9fZXNNb2R1bGU9dHJ1ZTtleHBvcnRzLnVzZUludGVyc2VjdGlvbj11c2VJbnRlcnNlY3Rpb247dmFyIF9yZWFjdD1yZXF1aXJlKFwicmVhY3RcIik7dmFyIF9yZXF1ZXN0SWRsZUNhbGxiYWNrPXJlcXVpcmUoXCIuL3JlcXVlc3QtaWRsZS1jYWxsYmFja1wiKTtjb25zdCBoYXNJbnRlcnNlY3Rpb25PYnNlcnZlcj10eXBlb2YgSW50ZXJzZWN0aW9uT2JzZXJ2ZXIhPT0ndW5kZWZpbmVkJztmdW5jdGlvbiB1c2VJbnRlcnNlY3Rpb24oe3Jvb3RNYXJnaW4sZGlzYWJsZWR9KXtjb25zdCBpc0Rpc2FibGVkPWRpc2FibGVkfHwhaGFzSW50ZXJzZWN0aW9uT2JzZXJ2ZXI7Y29uc3QgdW5vYnNlcnZlPSgwLF9yZWFjdC51c2VSZWYpKCk7Y29uc3RbdmlzaWJsZSxzZXRWaXNpYmxlXT0oMCxfcmVhY3QudXNlU3RhdGUpKGZhbHNlKTtjb25zdCBzZXRSZWY9KDAsX3JlYWN0LnVzZUNhbGxiYWNrKShlbD0+e2lmKHVub2JzZXJ2ZS5jdXJyZW50KXt1bm9ic2VydmUuY3VycmVudCgpO3Vub2JzZXJ2ZS5jdXJyZW50PXVuZGVmaW5lZDt9aWYoaXNEaXNhYmxlZHx8dmlzaWJsZSlyZXR1cm47aWYoZWwmJmVsLnRhZ05hbWUpe3Vub2JzZXJ2ZS5jdXJyZW50PW9ic2VydmUoZWwsaXNWaXNpYmxlPT5pc1Zpc2libGUmJnNldFZpc2libGUoaXNWaXNpYmxlKSx7cm9vdE1hcmdpbn0pO319LFtpc0Rpc2FibGVkLHJvb3RNYXJnaW4sdmlzaWJsZV0pOygwLF9yZWFjdC51c2VFZmZlY3QpKCgpPT57aWYoIWhhc0ludGVyc2VjdGlvbk9ic2VydmVyKXtpZighdmlzaWJsZSl7Y29uc3QgaWRsZUNhbGxiYWNrPSgwLF9yZXF1ZXN0SWRsZUNhbGxiYWNrLnJlcXVlc3RJZGxlQ2FsbGJhY2spKCgpPT5zZXRWaXNpYmxlKHRydWUpKTtyZXR1cm4oKT0+KDAsX3JlcXVlc3RJZGxlQ2FsbGJhY2suY2FuY2VsSWRsZUNhbGxiYWNrKShpZGxlQ2FsbGJhY2spO319fSxbdmlzaWJsZV0pO3JldHVybltzZXRSZWYsdmlzaWJsZV07fWZ1bmN0aW9uIG9ic2VydmUoZWxlbWVudCxjYWxsYmFjayxvcHRpb25zKXtjb25zdHtpZCxvYnNlcnZlcixlbGVtZW50c309Y3JlYXRlT2JzZXJ2ZXIob3B0aW9ucyk7ZWxlbWVudHMuc2V0KGVsZW1lbnQsY2FsbGJhY2spO29ic2VydmVyLm9ic2VydmUoZWxlbWVudCk7cmV0dXJuIGZ1bmN0aW9uIHVub2JzZXJ2ZSgpe2VsZW1lbnRzLmRlbGV0ZShlbGVtZW50KTtvYnNlcnZlci51bm9ic2VydmUoZWxlbWVudCk7Ly8gRGVzdHJveSBvYnNlcnZlciB3aGVuIHRoZXJlJ3Mgbm90aGluZyBsZWZ0IHRvIHdhdGNoOlxuaWYoZWxlbWVudHMuc2l6ZT09PTApe29ic2VydmVyLmRpc2Nvbm5lY3QoKTtvYnNlcnZlcnMuZGVsZXRlKGlkKTt9fTt9Y29uc3Qgb2JzZXJ2ZXJzPW5ldyBNYXAoKTtmdW5jdGlvbiBjcmVhdGVPYnNlcnZlcihvcHRpb25zKXtjb25zdCBpZD1vcHRpb25zLnJvb3RNYXJnaW58fCcnO2xldCBpbnN0YW5jZT1vYnNlcnZlcnMuZ2V0KGlkKTtpZihpbnN0YW5jZSl7cmV0dXJuIGluc3RhbmNlO31jb25zdCBlbGVtZW50cz1uZXcgTWFwKCk7Y29uc3Qgb2JzZXJ2ZXI9bmV3IEludGVyc2VjdGlvbk9ic2VydmVyKGVudHJpZXM9PntlbnRyaWVzLmZvckVhY2goZW50cnk9Pntjb25zdCBjYWxsYmFjaz1lbGVtZW50cy5nZXQoZW50cnkudGFyZ2V0KTtjb25zdCBpc1Zpc2libGU9ZW50cnkuaXNJbnRlcnNlY3Rpbmd8fGVudHJ5LmludGVyc2VjdGlvblJhdGlvPjA7aWYoY2FsbGJhY2smJmlzVmlzaWJsZSl7Y2FsbGJhY2soaXNWaXNpYmxlKTt9fSk7fSxvcHRpb25zKTtvYnNlcnZlcnMuc2V0KGlkLGluc3RhbmNlPXtpZCxvYnNlcnZlcixlbGVtZW50c30pO3JldHVybiBpbnN0YW5jZTt9XG4vLyMgc291cmNlTWFwcGluZ1VSTD11c2UtaW50ZXJzZWN0aW9uLmpzLm1hcCIsIlwidXNlIHN0cmljdFwiO3ZhciBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0PXJlcXVpcmUoXCJAYmFiZWwvcnVudGltZS9oZWxwZXJzL2ludGVyb3BSZXF1aXJlRGVmYXVsdFwiKTtleHBvcnRzLl9fZXNNb2R1bGU9dHJ1ZTtleHBvcnRzLmRlZmF1bHQ9d2l0aFJvdXRlcjt2YXIgX3JlYWN0PV9pbnRlcm9wUmVxdWlyZURlZmF1bHQocmVxdWlyZShcInJlYWN0XCIpKTt2YXIgX3JvdXRlcj1yZXF1aXJlKFwiLi9yb3V0ZXJcIik7ZnVuY3Rpb24gd2l0aFJvdXRlcihDb21wb3NlZENvbXBvbmVudCl7ZnVuY3Rpb24gV2l0aFJvdXRlcldyYXBwZXIocHJvcHMpe3JldHVybi8qI19fUFVSRV9fKi9fcmVhY3QuZGVmYXVsdC5jcmVhdGVFbGVtZW50KENvbXBvc2VkQ29tcG9uZW50LE9iamVjdC5hc3NpZ24oe3JvdXRlcjooMCxfcm91dGVyLnVzZVJvdXRlcikoKX0scHJvcHMpKTt9V2l0aFJvdXRlcldyYXBwZXIuZ2V0SW5pdGlhbFByb3BzPUNvbXBvc2VkQ29tcG9uZW50LmdldEluaXRpYWxQcm9wcy8vIFRoaXMgaXMgbmVlZGVkIHRvIGFsbG93IGNoZWNraW5nIGZvciBjdXN0b20gZ2V0SW5pdGlhbFByb3BzIGluIF9hcHBcbjtXaXRoUm91dGVyV3JhcHBlci5vcmlnR2V0SW5pdGlhbFByb3BzPUNvbXBvc2VkQ29tcG9uZW50Lm9yaWdHZXRJbml0aWFsUHJvcHM7aWYocHJvY2Vzcy5lbnYuTk9ERV9FTlYhPT0ncHJvZHVjdGlvbicpe2NvbnN0IG5hbWU9Q29tcG9zZWRDb21wb25lbnQuZGlzcGxheU5hbWV8fENvbXBvc2VkQ29tcG9uZW50Lm5hbWV8fCdVbmtub3duJztXaXRoUm91dGVyV3JhcHBlci5kaXNwbGF5TmFtZT1gd2l0aFJvdXRlcigke25hbWV9KWA7fXJldHVybiBXaXRoUm91dGVyV3JhcHBlcjt9XG4vLyMgc291cmNlTWFwcGluZ1VSTD13aXRoLXJvdXRlci5qcy5tYXAiLCJcInVzZSBzdHJpY3RcIjtleHBvcnRzLl9fZXNNb2R1bGU9dHJ1ZTtleHBvcnRzLmRldGVjdERvbWFpbkxvY2FsZT1kZXRlY3REb21haW5Mb2NhbGU7ZnVuY3Rpb24gZGV0ZWN0RG9tYWluTG9jYWxlKGRvbWFpbkl0ZW1zLGhvc3RuYW1lLGRldGVjdGVkTG9jYWxlKXtsZXQgZG9tYWluSXRlbTtpZihkb21haW5JdGVtcyl7aWYoZGV0ZWN0ZWRMb2NhbGUpe2RldGVjdGVkTG9jYWxlPWRldGVjdGVkTG9jYWxlLnRvTG93ZXJDYXNlKCk7fWZvcihjb25zdCBpdGVtIG9mIGRvbWFpbkl0ZW1zKXt2YXIgX2l0ZW0kZG9tYWluLF9pdGVtJGxvY2FsZXM7Ly8gcmVtb3ZlIHBvcnQgaWYgcHJlc2VudFxuY29uc3QgZG9tYWluSG9zdG5hbWU9KF9pdGVtJGRvbWFpbj1pdGVtLmRvbWFpbik9PW51bGw/dm9pZCAwOl9pdGVtJGRvbWFpbi5zcGxpdCgnOicpWzBdLnRvTG93ZXJDYXNlKCk7aWYoaG9zdG5hbWU9PT1kb21haW5Ib3N0bmFtZXx8ZGV0ZWN0ZWRMb2NhbGU9PT1pdGVtLmRlZmF1bHRMb2NhbGUudG9Mb3dlckNhc2UoKXx8KF9pdGVtJGxvY2FsZXM9aXRlbS5sb2NhbGVzKSE9bnVsbCYmX2l0ZW0kbG9jYWxlcy5zb21lKGxvY2FsZT0+bG9jYWxlLnRvTG93ZXJDYXNlKCk9PT1kZXRlY3RlZExvY2FsZSkpe2RvbWFpbkl0ZW09aXRlbTticmVhazt9fX1yZXR1cm4gZG9tYWluSXRlbTt9XG4vLyMgc291cmNlTWFwcGluZ1VSTD1kZXRlY3QtZG9tYWluLWxvY2FsZS5qcy5tYXAiLCJcInVzZSBzdHJpY3RcIjtleHBvcnRzLl9fZXNNb2R1bGU9dHJ1ZTtleHBvcnRzLm5vcm1hbGl6ZUxvY2FsZVBhdGg9bm9ybWFsaXplTG9jYWxlUGF0aDtmdW5jdGlvbiBub3JtYWxpemVMb2NhbGVQYXRoKHBhdGhuYW1lLGxvY2FsZXMpe2xldCBkZXRlY3RlZExvY2FsZTsvLyBmaXJzdCBpdGVtIHdpbGwgYmUgZW1wdHkgc3RyaW5nIGZyb20gc3BsaXR0aW5nIGF0IGZpcnN0IGNoYXJcbmNvbnN0IHBhdGhuYW1lUGFydHM9cGF0aG5hbWUuc3BsaXQoJy8nKTsobG9jYWxlc3x8W10pLnNvbWUobG9jYWxlPT57aWYocGF0aG5hbWVQYXJ0c1sxXS50b0xvd2VyQ2FzZSgpPT09bG9jYWxlLnRvTG93ZXJDYXNlKCkpe2RldGVjdGVkTG9jYWxlPWxvY2FsZTtwYXRobmFtZVBhcnRzLnNwbGljZSgxLDEpO3BhdGhuYW1lPXBhdGhuYW1lUGFydHMuam9pbignLycpfHwnLyc7cmV0dXJuIHRydWU7fXJldHVybiBmYWxzZTt9KTtyZXR1cm57cGF0aG5hbWUsZGV0ZWN0ZWRMb2NhbGV9O31cbi8vIyBzb3VyY2VNYXBwaW5nVVJMPW5vcm1hbGl6ZS1sb2NhbGUtcGF0aC5qcy5tYXAiLCJcInVzZSBzdHJpY3RcIjtleHBvcnRzLl9fZXNNb2R1bGU9dHJ1ZTtleHBvcnRzLmRlZmF1bHQ9bWl0dDsvKlxuTUlUIExpY2Vuc2VcblxuQ29weXJpZ2h0IChjKSBKYXNvbiBNaWxsZXIgKGh0dHBzOi8vamFzb25mb3JtYXQuY29tLylcblxuUGVybWlzc2lvbiBpcyBoZXJlYnkgZ3JhbnRlZCwgZnJlZSBvZiBjaGFyZ2UsIHRvIGFueSBwZXJzb24gb2J0YWluaW5nIGEgY29weSBvZiB0aGlzIHNvZnR3YXJlIGFuZCBhc3NvY2lhdGVkIGRvY3VtZW50YXRpb24gZmlsZXMgKHRoZSBcIlNvZnR3YXJlXCIpLCB0byBkZWFsIGluIHRoZSBTb2Z0d2FyZSB3aXRob3V0IHJlc3RyaWN0aW9uLCBpbmNsdWRpbmcgd2l0aG91dCBsaW1pdGF0aW9uIHRoZSByaWdodHMgdG8gdXNlLCBjb3B5LCBtb2RpZnksIG1lcmdlLCBwdWJsaXNoLCBkaXN0cmlidXRlLCBzdWJsaWNlbnNlLCBhbmQvb3Igc2VsbCBjb3BpZXMgb2YgdGhlIFNvZnR3YXJlLCBhbmQgdG8gcGVybWl0IHBlcnNvbnMgdG8gd2hvbSB0aGUgU29mdHdhcmUgaXMgZnVybmlzaGVkIHRvIGRvIHNvLCBzdWJqZWN0IHRvIHRoZSBmb2xsb3dpbmcgY29uZGl0aW9uczpcblxuVGhlIGFib3ZlIGNvcHlyaWdodCBub3RpY2UgYW5kIHRoaXMgcGVybWlzc2lvbiBub3RpY2Ugc2hhbGwgYmUgaW5jbHVkZWQgaW4gYWxsIGNvcGllcyBvciBzdWJzdGFudGlhbCBwb3J0aW9ucyBvZiB0aGUgU29mdHdhcmUuXG5cblRIRSBTT0ZUV0FSRSBJUyBQUk9WSURFRCBcIkFTIElTXCIsIFdJVEhPVVQgV0FSUkFOVFkgT0YgQU5ZIEtJTkQsIEVYUFJFU1MgT1IgSU1QTElFRCwgSU5DTFVESU5HIEJVVCBOT1QgTElNSVRFRCBUTyBUSEUgV0FSUkFOVElFUyBPRiBNRVJDSEFOVEFCSUxJVFksIEZJVE5FU1MgRk9SIEEgUEFSVElDVUxBUiBQVVJQT1NFIEFORCBOT05JTkZSSU5HRU1FTlQuIElOIE5PIEVWRU5UIFNIQUxMIFRIRSBBVVRIT1JTIE9SIENPUFlSSUdIVCBIT0xERVJTIEJFIExJQUJMRSBGT1IgQU5ZIENMQUlNLCBEQU1BR0VTIE9SIE9USEVSIExJQUJJTElUWSwgV0hFVEhFUiBJTiBBTiBBQ1RJT04gT0YgQ09OVFJBQ1QsIFRPUlQgT1IgT1RIRVJXSVNFLCBBUklTSU5HIEZST00sIE9VVCBPRiBPUiBJTiBDT05ORUNUSU9OIFdJVEggVEhFIFNPRlRXQVJFIE9SIFRIRSBVU0UgT1IgT1RIRVIgREVBTElOR1MgSU4gVEhFIFNPRlRXQVJFLlxuKi8gLy8gVGhpcyBmaWxlIGlzIGJhc2VkIG9uIGh0dHBzOi8vZ2l0aHViLmNvbS9kZXZlbG9waXQvbWl0dC9ibG9iL3YxLjEuMy9zcmMvaW5kZXguanNcbi8vIEl0J3MgYmVlbiBlZGl0ZWQgZm9yIHRoZSBuZWVkcyBvZiB0aGlzIHNjcmlwdFxuLy8gU2VlIHRoZSBMSUNFTlNFIGF0IHRoZSB0b3Agb2YgdGhlIGZpbGVcbmZ1bmN0aW9uIG1pdHQoKXtjb25zdCBhbGw9T2JqZWN0LmNyZWF0ZShudWxsKTtyZXR1cm57b24odHlwZSxoYW5kbGVyKXs7KGFsbFt0eXBlXXx8KGFsbFt0eXBlXT1bXSkpLnB1c2goaGFuZGxlcik7fSxvZmYodHlwZSxoYW5kbGVyKXtpZihhbGxbdHlwZV0pe2FsbFt0eXBlXS5zcGxpY2UoYWxsW3R5cGVdLmluZGV4T2YoaGFuZGxlcik+Pj4wLDEpO319LGVtaXQodHlwZSwuLi5ldnRzKXsvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgYXJyYXktY2FsbGJhY2stcmV0dXJuXG47KGFsbFt0eXBlXXx8W10pLnNsaWNlKCkubWFwKGhhbmRsZXI9PntoYW5kbGVyKC4uLmV2dHMpO30pO319O31cbi8vIyBzb3VyY2VNYXBwaW5nVVJMPW1pdHQuanMubWFwIiwiXCJ1c2Ugc3RyaWN0XCI7ZXhwb3J0cy5fX2VzTW9kdWxlPXRydWU7ZXhwb3J0cy5nZXREb21haW5Mb2NhbGU9Z2V0RG9tYWluTG9jYWxlO2V4cG9ydHMuYWRkTG9jYWxlPWFkZExvY2FsZTtleHBvcnRzLmRlbExvY2FsZT1kZWxMb2NhbGU7ZXhwb3J0cy5oYXNCYXNlUGF0aD1oYXNCYXNlUGF0aDtleHBvcnRzLmFkZEJhc2VQYXRoPWFkZEJhc2VQYXRoO2V4cG9ydHMuZGVsQmFzZVBhdGg9ZGVsQmFzZVBhdGg7ZXhwb3J0cy5pc0xvY2FsVVJMPWlzTG9jYWxVUkw7ZXhwb3J0cy5pbnRlcnBvbGF0ZUFzPWludGVycG9sYXRlQXM7ZXhwb3J0cy5yZXNvbHZlSHJlZj1yZXNvbHZlSHJlZjtleHBvcnRzLmRlZmF1bHQ9dm9pZCAwO3ZhciBfbm9ybWFsaXplVHJhaWxpbmdTbGFzaD1yZXF1aXJlKFwiLi4vLi4vLi4vY2xpZW50L25vcm1hbGl6ZS10cmFpbGluZy1zbGFzaFwiKTt2YXIgX3JvdXRlTG9hZGVyPXJlcXVpcmUoXCIuLi8uLi8uLi9jbGllbnQvcm91dGUtbG9hZGVyXCIpO3ZhciBfZGVub3JtYWxpemVQYWdlUGF0aD1yZXF1aXJlKFwiLi4vLi4vc2VydmVyL2Rlbm9ybWFsaXplLXBhZ2UtcGF0aFwiKTt2YXIgX25vcm1hbGl6ZUxvY2FsZVBhdGg9cmVxdWlyZShcIi4uL2kxOG4vbm9ybWFsaXplLWxvY2FsZS1wYXRoXCIpO3ZhciBfbWl0dD1faW50ZXJvcFJlcXVpcmVEZWZhdWx0KHJlcXVpcmUoXCIuLi9taXR0XCIpKTt2YXIgX3V0aWxzPXJlcXVpcmUoXCIuLi91dGlsc1wiKTt2YXIgX2lzRHluYW1pYz1yZXF1aXJlKFwiLi91dGlscy9pcy1keW5hbWljXCIpO3ZhciBfcGFyc2VSZWxhdGl2ZVVybD1yZXF1aXJlKFwiLi91dGlscy9wYXJzZS1yZWxhdGl2ZS11cmxcIik7dmFyIF9xdWVyeXN0cmluZz1yZXF1aXJlKFwiLi91dGlscy9xdWVyeXN0cmluZ1wiKTt2YXIgX3Jlc29sdmVSZXdyaXRlcz1faW50ZXJvcFJlcXVpcmVEZWZhdWx0KHJlcXVpcmUoXCIuL3V0aWxzL3Jlc29sdmUtcmV3cml0ZXNcIikpO3ZhciBfcm91dGVNYXRjaGVyPXJlcXVpcmUoXCIuL3V0aWxzL3JvdXRlLW1hdGNoZXJcIik7dmFyIF9yb3V0ZVJlZ2V4PXJlcXVpcmUoXCIuL3V0aWxzL3JvdXRlLXJlZ2V4XCIpO2Z1bmN0aW9uIF9pbnRlcm9wUmVxdWlyZURlZmF1bHQob2JqKXtyZXR1cm4gb2JqJiZvYmouX19lc01vZHVsZT9vYmo6e2RlZmF1bHQ6b2JqfTt9Ly8gdHNsaW50OmRpc2FibGU6bm8tY29uc29sZVxubGV0IGRldGVjdERvbWFpbkxvY2FsZTtpZihwcm9jZXNzLmVudi5fX05FWFRfSTE4Tl9TVVBQT1JUKXtkZXRlY3REb21haW5Mb2NhbGU9cmVxdWlyZSgnLi4vaTE4bi9kZXRlY3QtZG9tYWluLWxvY2FsZScpLmRldGVjdERvbWFpbkxvY2FsZTt9Y29uc3QgYmFzZVBhdGg9cHJvY2Vzcy5lbnYuX19ORVhUX1JPVVRFUl9CQVNFUEFUSHx8Jyc7ZnVuY3Rpb24gYnVpbGRDYW5jZWxsYXRpb25FcnJvcigpe3JldHVybiBPYmplY3QuYXNzaWduKG5ldyBFcnJvcignUm91dGUgQ2FuY2VsbGVkJykse2NhbmNlbGxlZDp0cnVlfSk7fWZ1bmN0aW9uIGFkZFBhdGhQcmVmaXgocGF0aCxwcmVmaXgpe3JldHVybiBwcmVmaXgmJnBhdGguc3RhcnRzV2l0aCgnLycpP3BhdGg9PT0nLyc/KDAsX25vcm1hbGl6ZVRyYWlsaW5nU2xhc2gubm9ybWFsaXplUGF0aFRyYWlsaW5nU2xhc2gpKHByZWZpeCk6YCR7cHJlZml4fSR7cGF0aE5vUXVlcnlIYXNoKHBhdGgpPT09Jy8nP3BhdGguc3Vic3RyaW5nKDEpOnBhdGh9YDpwYXRoO31mdW5jdGlvbiBnZXREb21haW5Mb2NhbGUocGF0aCxsb2NhbGUsbG9jYWxlcyxkb21haW5Mb2NhbGVzKXtpZihwcm9jZXNzLmVudi5fX05FWFRfSTE4Tl9TVVBQT1JUKXtsb2NhbGU9bG9jYWxlfHwoMCxfbm9ybWFsaXplTG9jYWxlUGF0aC5ub3JtYWxpemVMb2NhbGVQYXRoKShwYXRoLGxvY2FsZXMpLmRldGVjdGVkTG9jYWxlO2NvbnN0IGRldGVjdGVkRG9tYWluPWRldGVjdERvbWFpbkxvY2FsZShkb21haW5Mb2NhbGVzLHVuZGVmaW5lZCxsb2NhbGUpO2lmKGRldGVjdGVkRG9tYWluKXtyZXR1cm5gaHR0cCR7ZGV0ZWN0ZWREb21haW4uaHR0cD8nJzoncyd9Oi8vJHtkZXRlY3RlZERvbWFpbi5kb21haW59JHtiYXNlUGF0aHx8Jyd9JHtsb2NhbGU9PT1kZXRlY3RlZERvbWFpbi5kZWZhdWx0TG9jYWxlPycnOmAvJHtsb2NhbGV9YH0ke3BhdGh9YDt9cmV0dXJuIGZhbHNlO31yZXR1cm4gZmFsc2U7fWZ1bmN0aW9uIGFkZExvY2FsZShwYXRoLGxvY2FsZSxkZWZhdWx0TG9jYWxlKXtpZihwcm9jZXNzLmVudi5fX05FWFRfSTE4Tl9TVVBQT1JUKXtjb25zdCBwYXRobmFtZT1wYXRoTm9RdWVyeUhhc2gocGF0aCk7Y29uc3QgcGF0aExvd2VyPXBhdGhuYW1lLnRvTG93ZXJDYXNlKCk7Y29uc3QgbG9jYWxlTG93ZXI9bG9jYWxlJiZsb2NhbGUudG9Mb3dlckNhc2UoKTtyZXR1cm4gbG9jYWxlJiZsb2NhbGUhPT1kZWZhdWx0TG9jYWxlJiYhcGF0aExvd2VyLnN0YXJ0c1dpdGgoJy8nK2xvY2FsZUxvd2VyKycvJykmJnBhdGhMb3dlciE9PScvJytsb2NhbGVMb3dlcj9hZGRQYXRoUHJlZml4KHBhdGgsJy8nK2xvY2FsZSk6cGF0aDt9cmV0dXJuIHBhdGg7fWZ1bmN0aW9uIGRlbExvY2FsZShwYXRoLGxvY2FsZSl7aWYocHJvY2Vzcy5lbnYuX19ORVhUX0kxOE5fU1VQUE9SVCl7Y29uc3QgcGF0aG5hbWU9cGF0aE5vUXVlcnlIYXNoKHBhdGgpO2NvbnN0IHBhdGhMb3dlcj1wYXRobmFtZS50b0xvd2VyQ2FzZSgpO2NvbnN0IGxvY2FsZUxvd2VyPWxvY2FsZSYmbG9jYWxlLnRvTG93ZXJDYXNlKCk7cmV0dXJuIGxvY2FsZSYmKHBhdGhMb3dlci5zdGFydHNXaXRoKCcvJytsb2NhbGVMb3dlcisnLycpfHxwYXRoTG93ZXI9PT0nLycrbG9jYWxlTG93ZXIpPyhwYXRobmFtZS5sZW5ndGg9PT1sb2NhbGUubGVuZ3RoKzE/Jy8nOicnKStwYXRoLnN1YnN0cihsb2NhbGUubGVuZ3RoKzEpOnBhdGg7fXJldHVybiBwYXRoO31mdW5jdGlvbiBwYXRoTm9RdWVyeUhhc2gocGF0aCl7Y29uc3QgcXVlcnlJbmRleD1wYXRoLmluZGV4T2YoJz8nKTtjb25zdCBoYXNoSW5kZXg9cGF0aC5pbmRleE9mKCcjJyk7aWYocXVlcnlJbmRleD4tMXx8aGFzaEluZGV4Pi0xKXtwYXRoPXBhdGguc3Vic3RyaW5nKDAscXVlcnlJbmRleD4tMT9xdWVyeUluZGV4Omhhc2hJbmRleCk7fXJldHVybiBwYXRoO31mdW5jdGlvbiBoYXNCYXNlUGF0aChwYXRoKXtwYXRoPXBhdGhOb1F1ZXJ5SGFzaChwYXRoKTtyZXR1cm4gcGF0aD09PWJhc2VQYXRofHxwYXRoLnN0YXJ0c1dpdGgoYmFzZVBhdGgrJy8nKTt9ZnVuY3Rpb24gYWRkQmFzZVBhdGgocGF0aCl7Ly8gd2Ugb25seSBhZGQgdGhlIGJhc2VwYXRoIG9uIHJlbGF0aXZlIHVybHNcbnJldHVybiBhZGRQYXRoUHJlZml4KHBhdGgsYmFzZVBhdGgpO31mdW5jdGlvbiBkZWxCYXNlUGF0aChwYXRoKXtwYXRoPXBhdGguc2xpY2UoYmFzZVBhdGgubGVuZ3RoKTtpZighcGF0aC5zdGFydHNXaXRoKCcvJykpcGF0aD1gLyR7cGF0aH1gO3JldHVybiBwYXRoO30vKipcbiAqIERldGVjdHMgd2hldGhlciBhIGdpdmVuIHVybCBpcyByb3V0YWJsZSBieSB0aGUgTmV4dC5qcyByb3V0ZXIgKGJyb3dzZXIgb25seSkuXG4gKi9mdW5jdGlvbiBpc0xvY2FsVVJMKHVybCl7Ly8gcHJldmVudCBhIGh5ZHJhdGlvbiBtaXNtYXRjaCBvbiBocmVmIGZvciB1cmwgd2l0aCBhbmNob3IgcmVmc1xuaWYodXJsLnN0YXJ0c1dpdGgoJy8nKXx8dXJsLnN0YXJ0c1dpdGgoJyMnKXx8dXJsLnN0YXJ0c1dpdGgoJz8nKSlyZXR1cm4gdHJ1ZTt0cnl7Ly8gYWJzb2x1dGUgdXJscyBjYW4gYmUgbG9jYWwgaWYgdGhleSBhcmUgb24gdGhlIHNhbWUgb3JpZ2luXG5jb25zdCBsb2NhdGlvbk9yaWdpbj0oMCxfdXRpbHMuZ2V0TG9jYXRpb25PcmlnaW4pKCk7Y29uc3QgcmVzb2x2ZWQ9bmV3IFVSTCh1cmwsbG9jYXRpb25PcmlnaW4pO3JldHVybiByZXNvbHZlZC5vcmlnaW49PT1sb2NhdGlvbk9yaWdpbiYmaGFzQmFzZVBhdGgocmVzb2x2ZWQucGF0aG5hbWUpO31jYXRjaChfKXtyZXR1cm4gZmFsc2U7fX1mdW5jdGlvbiBpbnRlcnBvbGF0ZUFzKHJvdXRlLGFzUGF0aG5hbWUscXVlcnkpe2xldCBpbnRlcnBvbGF0ZWRSb3V0ZT0nJztjb25zdCBkeW5hbWljUmVnZXg9KDAsX3JvdXRlUmVnZXguZ2V0Um91dGVSZWdleCkocm91dGUpO2NvbnN0IGR5bmFtaWNHcm91cHM9ZHluYW1pY1JlZ2V4Lmdyb3Vwcztjb25zdCBkeW5hbWljTWF0Y2hlcz0vLyBUcnkgdG8gbWF0Y2ggdGhlIGR5bmFtaWMgcm91dGUgYWdhaW5zdCB0aGUgYXNQYXRoXG4oYXNQYXRobmFtZSE9PXJvdXRlPygwLF9yb3V0ZU1hdGNoZXIuZ2V0Um91dGVNYXRjaGVyKShkeW5hbWljUmVnZXgpKGFzUGF0aG5hbWUpOicnKXx8Ly8gRmFsbCBiYWNrIHRvIHJlYWRpbmcgdGhlIHZhbHVlcyBmcm9tIHRoZSBocmVmXG4vLyBUT0RPOiBzaG91bGQgdGhpcyB0YWtlIHByaW9yaXR5OyBhbHNvIG5lZWQgdG8gY2hhbmdlIGluIHRoZSByb3V0ZXIuXG5xdWVyeTtpbnRlcnBvbGF0ZWRSb3V0ZT1yb3V0ZTtjb25zdCBwYXJhbXM9T2JqZWN0LmtleXMoZHluYW1pY0dyb3Vwcyk7aWYoIXBhcmFtcy5ldmVyeShwYXJhbT0+e2xldCB2YWx1ZT1keW5hbWljTWF0Y2hlc1twYXJhbV18fCcnO2NvbnN0e3JlcGVhdCxvcHRpb25hbH09ZHluYW1pY0dyb3Vwc1twYXJhbV07Ly8gc3VwcG9ydCBzaW5nbGUtbGV2ZWwgY2F0Y2gtYWxsXG4vLyBUT0RPOiBtb3JlIHJvYnVzdCBoYW5kbGluZyBmb3IgdXNlci1lcnJvciAocGFzc2luZyBgL2ApXG5sZXQgcmVwbGFjZWQ9YFske3JlcGVhdD8nLi4uJzonJ30ke3BhcmFtfV1gO2lmKG9wdGlvbmFsKXtyZXBsYWNlZD1gJHshdmFsdWU/Jy8nOicnfVske3JlcGxhY2VkfV1gO31pZihyZXBlYXQmJiFBcnJheS5pc0FycmF5KHZhbHVlKSl2YWx1ZT1bdmFsdWVdO3JldHVybihvcHRpb25hbHx8cGFyYW0gaW4gZHluYW1pY01hdGNoZXMpJiYoLy8gSW50ZXJwb2xhdGUgZ3JvdXAgaW50byBkYXRhIFVSTCBpZiBwcmVzZW50XG5pbnRlcnBvbGF0ZWRSb3V0ZT1pbnRlcnBvbGF0ZWRSb3V0ZS5yZXBsYWNlKHJlcGxhY2VkLHJlcGVhdD92YWx1ZS5tYXAoLy8gdGhlc2UgdmFsdWVzIHNob3VsZCBiZSBmdWxseSBlbmNvZGVkIGluc3RlYWQgb2YganVzdFxuLy8gcGF0aCBkZWxpbWl0ZXIgZXNjYXBlZCBzaW5jZSB0aGV5IGFyZSBiZWluZyBpbnNlcnRlZFxuLy8gaW50byB0aGUgVVJMIGFuZCB3ZSBleHBlY3QgVVJMIGVuY29kZWQgc2VnbWVudHNcbi8vIHdoZW4gcGFyc2luZyBkeW5hbWljIHJvdXRlIHBhcmFtc1xuc2VnbWVudD0+ZW5jb2RlVVJJQ29tcG9uZW50KHNlZ21lbnQpKS5qb2luKCcvJyk6ZW5jb2RlVVJJQ29tcG9uZW50KHZhbHVlKSl8fCcvJyk7fSkpe2ludGVycG9sYXRlZFJvdXRlPScnOy8vIGRpZCBub3Qgc2F0aXNmeSBhbGwgcmVxdWlyZW1lbnRzXG4vLyBuLmIuIFdlIGlnbm9yZSB0aGlzIGVycm9yIGJlY2F1c2Ugd2UgaGFuZGxlIHdhcm5pbmcgZm9yIHRoaXMgY2FzZSBpblxuLy8gZGV2ZWxvcG1lbnQgaW4gdGhlIGA8TGluaz5gIGNvbXBvbmVudCBkaXJlY3RseS5cbn1yZXR1cm57cGFyYW1zLHJlc3VsdDppbnRlcnBvbGF0ZWRSb3V0ZX07fWZ1bmN0aW9uIG9taXRQYXJtc0Zyb21RdWVyeShxdWVyeSxwYXJhbXMpe2NvbnN0IGZpbHRlcmVkUXVlcnk9e307T2JqZWN0LmtleXMocXVlcnkpLmZvckVhY2goa2V5PT57aWYoIXBhcmFtcy5pbmNsdWRlcyhrZXkpKXtmaWx0ZXJlZFF1ZXJ5W2tleV09cXVlcnlba2V5XTt9fSk7cmV0dXJuIGZpbHRlcmVkUXVlcnk7fS8qKlxuICogUmVzb2x2ZXMgYSBnaXZlbiBoeXBlcmxpbmsgd2l0aCBhIGNlcnRhaW4gcm91dGVyIHN0YXRlIChiYXNlUGF0aCBub3QgaW5jbHVkZWQpLlxuICogUHJlc2VydmVzIGFic29sdXRlIHVybHMuXG4gKi9mdW5jdGlvbiByZXNvbHZlSHJlZihyb3V0ZXIsaHJlZixyZXNvbHZlQXMpey8vIHdlIHVzZSBhIGR1bW15IGJhc2UgdXJsIGZvciByZWxhdGl2ZSB1cmxzXG5sZXQgYmFzZTtjb25zdCB1cmxBc1N0cmluZz10eXBlb2YgaHJlZj09PSdzdHJpbmcnP2hyZWY6KDAsX3V0aWxzLmZvcm1hdFdpdGhWYWxpZGF0aW9uKShocmVmKTt0cnl7YmFzZT1uZXcgVVJMKHVybEFzU3RyaW5nLnN0YXJ0c1dpdGgoJyMnKT9yb3V0ZXIuYXNQYXRoOnJvdXRlci5wYXRobmFtZSwnaHR0cDovL24nKTt9Y2F0Y2goXyl7Ly8gZmFsbGJhY2sgdG8gLyBmb3IgaW52YWxpZCBhc1BhdGggdmFsdWVzIGUuZy4gLy9cbmJhc2U9bmV3IFVSTCgnLycsJ2h0dHA6Ly9uJyk7fS8vIFJldHVybiBiZWNhdXNlIGl0IGNhbm5vdCBiZSByb3V0ZWQgYnkgdGhlIE5leHQuanMgcm91dGVyXG5pZighaXNMb2NhbFVSTCh1cmxBc1N0cmluZykpe3JldHVybiByZXNvbHZlQXM/W3VybEFzU3RyaW5nXTp1cmxBc1N0cmluZzt9dHJ5e2NvbnN0IGZpbmFsVXJsPW5ldyBVUkwodXJsQXNTdHJpbmcsYmFzZSk7ZmluYWxVcmwucGF0aG5hbWU9KDAsX25vcm1hbGl6ZVRyYWlsaW5nU2xhc2gubm9ybWFsaXplUGF0aFRyYWlsaW5nU2xhc2gpKGZpbmFsVXJsLnBhdGhuYW1lKTtsZXQgaW50ZXJwb2xhdGVkQXM9Jyc7aWYoKDAsX2lzRHluYW1pYy5pc0R5bmFtaWNSb3V0ZSkoZmluYWxVcmwucGF0aG5hbWUpJiZmaW5hbFVybC5zZWFyY2hQYXJhbXMmJnJlc29sdmVBcyl7Y29uc3QgcXVlcnk9KDAsX3F1ZXJ5c3RyaW5nLnNlYXJjaFBhcmFtc1RvVXJsUXVlcnkpKGZpbmFsVXJsLnNlYXJjaFBhcmFtcyk7Y29uc3R7cmVzdWx0LHBhcmFtc309aW50ZXJwb2xhdGVBcyhmaW5hbFVybC5wYXRobmFtZSxmaW5hbFVybC5wYXRobmFtZSxxdWVyeSk7aWYocmVzdWx0KXtpbnRlcnBvbGF0ZWRBcz0oMCxfdXRpbHMuZm9ybWF0V2l0aFZhbGlkYXRpb24pKHtwYXRobmFtZTpyZXN1bHQsaGFzaDpmaW5hbFVybC5oYXNoLHF1ZXJ5Om9taXRQYXJtc0Zyb21RdWVyeShxdWVyeSxwYXJhbXMpfSk7fX0vLyBpZiB0aGUgb3JpZ2luIGRpZG4ndCBjaGFuZ2UsIGl0IG1lYW5zIHdlIHJlY2VpdmVkIGEgcmVsYXRpdmUgaHJlZlxuY29uc3QgcmVzb2x2ZWRIcmVmPWZpbmFsVXJsLm9yaWdpbj09PWJhc2Uub3JpZ2luP2ZpbmFsVXJsLmhyZWYuc2xpY2UoZmluYWxVcmwub3JpZ2luLmxlbmd0aCk6ZmluYWxVcmwuaHJlZjtyZXR1cm4gcmVzb2x2ZUFzP1tyZXNvbHZlZEhyZWYsaW50ZXJwb2xhdGVkQXN8fHJlc29sdmVkSHJlZl06cmVzb2x2ZWRIcmVmO31jYXRjaChfKXtyZXR1cm4gcmVzb2x2ZUFzP1t1cmxBc1N0cmluZ106dXJsQXNTdHJpbmc7fX1mdW5jdGlvbiBzdHJpcE9yaWdpbih1cmwpe2NvbnN0IG9yaWdpbj0oMCxfdXRpbHMuZ2V0TG9jYXRpb25PcmlnaW4pKCk7cmV0dXJuIHVybC5zdGFydHNXaXRoKG9yaWdpbik/dXJsLnN1YnN0cmluZyhvcmlnaW4ubGVuZ3RoKTp1cmw7fWZ1bmN0aW9uIHByZXBhcmVVcmxBcyhyb3V0ZXIsdXJsLGFzKXsvLyBJZiB1cmwgYW5kIGFzIHByb3ZpZGVkIGFzIGFuIG9iamVjdCByZXByZXNlbnRhdGlvbixcbi8vIHdlJ2xsIGZvcm1hdCB0aGVtIGludG8gdGhlIHN0cmluZyB2ZXJzaW9uIGhlcmUuXG5sZXRbcmVzb2x2ZWRIcmVmLHJlc29sdmVkQXNdPXJlc29sdmVIcmVmKHJvdXRlcix1cmwsdHJ1ZSk7Y29uc3Qgb3JpZ2luPSgwLF91dGlscy5nZXRMb2NhdGlvbk9yaWdpbikoKTtjb25zdCBocmVmSGFkT3JpZ2luPXJlc29sdmVkSHJlZi5zdGFydHNXaXRoKG9yaWdpbik7Y29uc3QgYXNIYWRPcmlnaW49cmVzb2x2ZWRBcyYmcmVzb2x2ZWRBcy5zdGFydHNXaXRoKG9yaWdpbik7cmVzb2x2ZWRIcmVmPXN0cmlwT3JpZ2luKHJlc29sdmVkSHJlZik7cmVzb2x2ZWRBcz1yZXNvbHZlZEFzP3N0cmlwT3JpZ2luKHJlc29sdmVkQXMpOnJlc29sdmVkQXM7Y29uc3QgcHJlcGFyZWRVcmw9aHJlZkhhZE9yaWdpbj9yZXNvbHZlZEhyZWY6YWRkQmFzZVBhdGgocmVzb2x2ZWRIcmVmKTtjb25zdCBwcmVwYXJlZEFzPWFzP3N0cmlwT3JpZ2luKHJlc29sdmVIcmVmKHJvdXRlcixhcykpOnJlc29sdmVkQXN8fHJlc29sdmVkSHJlZjtyZXR1cm57dXJsOnByZXBhcmVkVXJsLGFzOmFzSGFkT3JpZ2luP3ByZXBhcmVkQXM6YWRkQmFzZVBhdGgocHJlcGFyZWRBcyl9O31mdW5jdGlvbiByZXNvbHZlRHluYW1pY1JvdXRlKHBhdGhuYW1lLHBhZ2VzKXtjb25zdCBjbGVhblBhdGhuYW1lPSgwLF9ub3JtYWxpemVUcmFpbGluZ1NsYXNoLnJlbW92ZVBhdGhUcmFpbGluZ1NsYXNoKSgoMCxfZGVub3JtYWxpemVQYWdlUGF0aC5kZW5vcm1hbGl6ZVBhZ2VQYXRoKShwYXRobmFtZSkpO2lmKGNsZWFuUGF0aG5hbWU9PT0nLzQwNCd8fGNsZWFuUGF0aG5hbWU9PT0nL19lcnJvcicpe3JldHVybiBwYXRobmFtZTt9Ly8gaGFuZGxlIHJlc29sdmluZyBocmVmIGZvciBkeW5hbWljIHJvdXRlc1xuaWYoIXBhZ2VzLmluY2x1ZGVzKGNsZWFuUGF0aG5hbWUpKXsvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgYXJyYXktY2FsbGJhY2stcmV0dXJuXG5wYWdlcy5zb21lKHBhZ2U9PntpZigoMCxfaXNEeW5hbWljLmlzRHluYW1pY1JvdXRlKShwYWdlKSYmKDAsX3JvdXRlUmVnZXguZ2V0Um91dGVSZWdleCkocGFnZSkucmUudGVzdChjbGVhblBhdGhuYW1lKSl7cGF0aG5hbWU9cGFnZTtyZXR1cm4gdHJ1ZTt9fSk7fXJldHVybigwLF9ub3JtYWxpemVUcmFpbGluZ1NsYXNoLnJlbW92ZVBhdGhUcmFpbGluZ1NsYXNoKShwYXRobmFtZSk7fWNvbnN0IG1hbnVhbFNjcm9sbFJlc3RvcmF0aW9uPXByb2Nlc3MuZW52Ll9fTkVYVF9TQ1JPTExfUkVTVE9SQVRJT04mJnR5cGVvZiB3aW5kb3chPT0ndW5kZWZpbmVkJyYmJ3Njcm9sbFJlc3RvcmF0aW9uJ2luIHdpbmRvdy5oaXN0b3J5JiYhIWZ1bmN0aW9uKCl7dHJ5e2xldCB2PSdfX25leHQnOy8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby1zZXF1ZW5jZXNcbnJldHVybiBzZXNzaW9uU3RvcmFnZS5zZXRJdGVtKHYsdiksc2Vzc2lvblN0b3JhZ2UucmVtb3ZlSXRlbSh2KSx0cnVlO31jYXRjaChuKXt9fSgpO2NvbnN0IFNTR19EQVRBX05PVF9GT1VORD1TeW1ib2woJ1NTR19EQVRBX05PVF9GT1VORCcpO2Z1bmN0aW9uIGZldGNoUmV0cnkodXJsLGF0dGVtcHRzKXtyZXR1cm4gZmV0Y2godXJsLHsvLyBDb29raWVzIGFyZSByZXF1aXJlZCB0byBiZSBwcmVzZW50IGZvciBOZXh0LmpzJyBTU0cgXCJQcmV2aWV3IE1vZGVcIi5cbi8vIENvb2tpZXMgbWF5IGFsc28gYmUgcmVxdWlyZWQgZm9yIGBnZXRTZXJ2ZXJTaWRlUHJvcHNgLlxuLy9cbi8vID4gYGZldGNoYCB3b27igJl0IHNlbmQgY29va2llcywgdW5sZXNzIHlvdSBzZXQgdGhlIGNyZWRlbnRpYWxzIGluaXRcbi8vID4gb3B0aW9uLlxuLy8gaHR0cHM6Ly9kZXZlbG9wZXIubW96aWxsYS5vcmcvZW4tVVMvZG9jcy9XZWIvQVBJL0ZldGNoX0FQSS9Vc2luZ19GZXRjaFxuLy9cbi8vID4gRm9yIG1heGltdW0gYnJvd3NlciBjb21wYXRpYmlsaXR5IHdoZW4gaXQgY29tZXMgdG8gc2VuZGluZyAmXG4vLyA+IHJlY2VpdmluZyBjb29raWVzLCBhbHdheXMgc3VwcGx5IHRoZSBgY3JlZGVudGlhbHM6ICdzYW1lLW9yaWdpbidgXG4vLyA+IG9wdGlvbiBpbnN0ZWFkIG9mIHJlbHlpbmcgb24gdGhlIGRlZmF1bHQuXG4vLyBodHRwczovL2dpdGh1Yi5jb20vZ2l0aHViL2ZldGNoI2NhdmVhdHNcbmNyZWRlbnRpYWxzOidzYW1lLW9yaWdpbid9KS50aGVuKHJlcz0+e2lmKCFyZXMub2spe2lmKGF0dGVtcHRzPjEmJnJlcy5zdGF0dXM+PTUwMCl7cmV0dXJuIGZldGNoUmV0cnkodXJsLGF0dGVtcHRzLTEpO31pZihyZXMuc3RhdHVzPT09NDA0KXtyZXR1cm4gcmVzLmpzb24oKS50aGVuKGRhdGE9PntpZihkYXRhLm5vdEZvdW5kKXtyZXR1cm57bm90Rm91bmQ6U1NHX0RBVEFfTk9UX0ZPVU5EfTt9dGhyb3cgbmV3IEVycm9yKGBGYWlsZWQgdG8gbG9hZCBzdGF0aWMgcHJvcHNgKTt9KTt9dGhyb3cgbmV3IEVycm9yKGBGYWlsZWQgdG8gbG9hZCBzdGF0aWMgcHJvcHNgKTt9cmV0dXJuIHJlcy5qc29uKCk7fSk7fWZ1bmN0aW9uIGZldGNoTmV4dERhdGEoZGF0YUhyZWYsaXNTZXJ2ZXJSZW5kZXIpe3JldHVybiBmZXRjaFJldHJ5KGRhdGFIcmVmLGlzU2VydmVyUmVuZGVyPzM6MSkuY2F0Y2goZXJyPT57Ly8gV2Ugc2hvdWxkIG9ubHkgdHJpZ2dlciBhIHNlcnZlci1zaWRlIHRyYW5zaXRpb24gaWYgdGhpcyB3YXMgY2F1c2VkXG4vLyBvbiBhIGNsaWVudC1zaWRlIHRyYW5zaXRpb24uIE90aGVyd2lzZSwgd2UnZCBnZXQgaW50byBhbiBpbmZpbml0ZVxuLy8gbG9vcC5cbmlmKCFpc1NlcnZlclJlbmRlcil7KDAsX3JvdXRlTG9hZGVyLm1hcmtBc3NldEVycm9yKShlcnIpO310aHJvdyBlcnI7fSk7fWNsYXNzIFJvdXRlcnsvKipcbiAgICogTWFwIG9mIGFsbCBjb21wb25lbnRzIGxvYWRlZCBpbiBgUm91dGVyYFxuICAgKi8gLy8gU3RhdGljIERhdGEgQ2FjaGVcbi8vIEluLWZsaWdodCBTZXJ2ZXIgRGF0YSBSZXF1ZXN0cywgZm9yIGRlZHVwaW5nXG5jb25zdHJ1Y3RvcihfcGF0aG5hbWUsX3F1ZXJ5LF9hcyx7aW5pdGlhbFByb3BzLHBhZ2VMb2FkZXIsQXBwLHdyYXBBcHAsQ29tcG9uZW50LGVycixzdWJzY3JpcHRpb24saXNGYWxsYmFjayxsb2NhbGUsbG9jYWxlcyxkZWZhdWx0TG9jYWxlLGRvbWFpbkxvY2FsZXMsaXNQcmV2aWV3fSl7dGhpcy5yb3V0ZT12b2lkIDA7dGhpcy5wYXRobmFtZT12b2lkIDA7dGhpcy5xdWVyeT12b2lkIDA7dGhpcy5hc1BhdGg9dm9pZCAwO3RoaXMuYmFzZVBhdGg9dm9pZCAwO3RoaXMuY29tcG9uZW50cz12b2lkIDA7dGhpcy5zZGM9e307dGhpcy5zZHI9e307dGhpcy5zdWI9dm9pZCAwO3RoaXMuY2xjPXZvaWQgMDt0aGlzLnBhZ2VMb2FkZXI9dm9pZCAwO3RoaXMuX2Jwcz12b2lkIDA7dGhpcy5ldmVudHM9dm9pZCAwO3RoaXMuX3dyYXBBcHA9dm9pZCAwO3RoaXMuaXNTc3I9dm9pZCAwO3RoaXMuaXNGYWxsYmFjaz12b2lkIDA7dGhpcy5faW5GbGlnaHRSb3V0ZT12b2lkIDA7dGhpcy5fc2hhbGxvdz12b2lkIDA7dGhpcy5sb2NhbGU9dm9pZCAwO3RoaXMubG9jYWxlcz12b2lkIDA7dGhpcy5kZWZhdWx0TG9jYWxlPXZvaWQgMDt0aGlzLmRvbWFpbkxvY2FsZXM9dm9pZCAwO3RoaXMuaXNSZWFkeT12b2lkIDA7dGhpcy5pc1ByZXZpZXc9dm9pZCAwO3RoaXMuaXNMb2NhbGVEb21haW49dm9pZCAwO3RoaXMuX2lkeD0wO3RoaXMub25Qb3BTdGF0ZT1lPT57Y29uc3Qgc3RhdGU9ZS5zdGF0ZTtpZighc3RhdGUpey8vIFdlIGdldCBzdGF0ZSBhcyB1bmRlZmluZWQgZm9yIHR3byByZWFzb25zLlxuLy8gIDEuIFdpdGggb2xkZXIgc2FmYXJpICg8IDgpIGFuZCBvbGRlciBjaHJvbWUgKDwgMzQpXG4vLyAgMi4gV2hlbiB0aGUgVVJMIGNoYW5nZWQgd2l0aCAjXG4vL1xuLy8gSW4gdGhlIGJvdGggY2FzZXMsIHdlIGRvbid0IG5lZWQgdG8gcHJvY2VlZCBhbmQgY2hhbmdlIHRoZSByb3V0ZS5cbi8vIChhcyBpdCdzIGFscmVhZHkgY2hhbmdlZClcbi8vIEJ1dCB3ZSBjYW4gc2ltcGx5IHJlcGxhY2UgdGhlIHN0YXRlIHdpdGggdGhlIG5ldyBjaGFuZ2VzLlxuLy8gQWN0dWFsbHksIGZvciAoMSkgd2UgZG9uJ3QgbmVlZCB0byBub3RoaW5nLiBCdXQgaXQncyBoYXJkIHRvIGRldGVjdCB0aGF0IGV2ZW50LlxuLy8gU28sIGRvaW5nIHRoZSBmb2xsb3dpbmcgZm9yICgxKSBkb2VzIG5vIGhhcm0uXG5jb25zdHtwYXRobmFtZSxxdWVyeX09dGhpczt0aGlzLmNoYW5nZVN0YXRlKCdyZXBsYWNlU3RhdGUnLCgwLF91dGlscy5mb3JtYXRXaXRoVmFsaWRhdGlvbikoe3BhdGhuYW1lOmFkZEJhc2VQYXRoKHBhdGhuYW1lKSxxdWVyeX0pLCgwLF91dGlscy5nZXRVUkwpKCkpO3JldHVybjt9aWYoIXN0YXRlLl9fTil7cmV0dXJuO31sZXQgZm9yY2VkU2Nyb2xsO2NvbnN0e3VybCxhcyxvcHRpb25zLGlkeH09c3RhdGU7aWYocHJvY2Vzcy5lbnYuX19ORVhUX1NDUk9MTF9SRVNUT1JBVElPTil7aWYobWFudWFsU2Nyb2xsUmVzdG9yYXRpb24pe2lmKHRoaXMuX2lkeCE9PWlkeCl7Ly8gU25hcHNob3QgY3VycmVudCBzY3JvbGwgcG9zaXRpb246XG50cnl7c2Vzc2lvblN0b3JhZ2Uuc2V0SXRlbSgnX19uZXh0X3Njcm9sbF8nK3RoaXMuX2lkeCxKU09OLnN0cmluZ2lmeSh7eDpzZWxmLnBhZ2VYT2Zmc2V0LHk6c2VsZi5wYWdlWU9mZnNldH0pKTt9Y2F0Y2goX3VudXNlZCl7fS8vIFJlc3RvcmUgb2xkIHNjcm9sbCBwb3NpdGlvbjpcbnRyeXtjb25zdCB2PXNlc3Npb25TdG9yYWdlLmdldEl0ZW0oJ19fbmV4dF9zY3JvbGxfJytpZHgpO2ZvcmNlZFNjcm9sbD1KU09OLnBhcnNlKHYpO31jYXRjaChfdW51c2VkMil7Zm9yY2VkU2Nyb2xsPXt4OjAseTowfTt9fX19dGhpcy5faWR4PWlkeDtjb25zdHtwYXRobmFtZX09KDAsX3BhcnNlUmVsYXRpdmVVcmwucGFyc2VSZWxhdGl2ZVVybCkodXJsKTsvLyBNYWtlIHN1cmUgd2UgZG9uJ3QgcmUtcmVuZGVyIG9uIGluaXRpYWwgbG9hZCxcbi8vIGNhbiBiZSBjYXVzZWQgYnkgbmF2aWdhdGluZyBiYWNrIGZyb20gYW4gZXh0ZXJuYWwgc2l0ZVxuaWYodGhpcy5pc1NzciYmYXM9PT10aGlzLmFzUGF0aCYmcGF0aG5hbWU9PT10aGlzLnBhdGhuYW1lKXtyZXR1cm47fS8vIElmIHRoZSBkb3duc3RyZWFtIGFwcGxpY2F0aW9uIHJldHVybnMgZmFsc3ksIHJldHVybi5cbi8vIFRoZXkgd2lsbCB0aGVuIGJlIHJlc3BvbnNpYmxlIGZvciBoYW5kbGluZyB0aGUgZXZlbnQuXG5pZih0aGlzLl9icHMmJiF0aGlzLl9icHMoc3RhdGUpKXtyZXR1cm47fXRoaXMuY2hhbmdlKCdyZXBsYWNlU3RhdGUnLHVybCxhcyxPYmplY3QuYXNzaWduKHt9LG9wdGlvbnMse3NoYWxsb3c6b3B0aW9ucy5zaGFsbG93JiZ0aGlzLl9zaGFsbG93LGxvY2FsZTpvcHRpb25zLmxvY2FsZXx8dGhpcy5kZWZhdWx0TG9jYWxlfSksZm9yY2VkU2Nyb2xsKTt9Oy8vIHJlcHJlc2VudHMgdGhlIGN1cnJlbnQgY29tcG9uZW50IGtleVxudGhpcy5yb3V0ZT0oMCxfbm9ybWFsaXplVHJhaWxpbmdTbGFzaC5yZW1vdmVQYXRoVHJhaWxpbmdTbGFzaCkoX3BhdGhuYW1lKTsvLyBzZXQgdXAgdGhlIGNvbXBvbmVudCBjYWNoZSAoYnkgcm91dGUga2V5cylcbnRoaXMuY29tcG9uZW50cz17fTsvLyBXZSBzaG91bGQgbm90IGtlZXAgdGhlIGNhY2hlLCBpZiB0aGVyZSdzIGFuIGVycm9yXG4vLyBPdGhlcndpc2UsIHRoaXMgY2F1c2UgaXNzdWVzIHdoZW4gd2hlbiBnb2luZyBiYWNrIGFuZFxuLy8gY29tZSBhZ2FpbiB0byB0aGUgZXJyb3JlZCBwYWdlLlxuaWYoX3BhdGhuYW1lIT09Jy9fZXJyb3InKXt0aGlzLmNvbXBvbmVudHNbdGhpcy5yb3V0ZV09e0NvbXBvbmVudCxpbml0aWFsOnRydWUscHJvcHM6aW5pdGlhbFByb3BzLGVycixfX05fU1NHOmluaXRpYWxQcm9wcyYmaW5pdGlhbFByb3BzLl9fTl9TU0csX19OX1NTUDppbml0aWFsUHJvcHMmJmluaXRpYWxQcm9wcy5fX05fU1NQfTt9dGhpcy5jb21wb25lbnRzWycvX2FwcCddPXtDb21wb25lbnQ6QXBwLHN0eWxlU2hlZXRzOlsvKiAvX2FwcCBkb2VzIG5vdCBuZWVkIGl0cyBzdHlsZXNoZWV0cyBtYW5hZ2VkICovXX07Ly8gQmFja3dhcmRzIGNvbXBhdCBmb3IgUm91dGVyLnJvdXRlci5ldmVudHNcbi8vIFRPRE86IFNob3VsZCBiZSByZW1vdmUgdGhlIGZvbGxvd2luZyBtYWpvciB2ZXJzaW9uIGFzIGl0IHdhcyBuZXZlciBkb2N1bWVudGVkXG50aGlzLmV2ZW50cz1Sb3V0ZXIuZXZlbnRzO3RoaXMucGFnZUxvYWRlcj1wYWdlTG9hZGVyO3RoaXMucGF0aG5hbWU9X3BhdGhuYW1lO3RoaXMucXVlcnk9X3F1ZXJ5Oy8vIGlmIGF1dG8gcHJlcmVuZGVyZWQgYW5kIGR5bmFtaWMgcm91dGUgd2FpdCB0byB1cGRhdGUgYXNQYXRoXG4vLyB1bnRpbCBhZnRlciBtb3VudCB0byBwcmV2ZW50IGh5ZHJhdGlvbiBtaXNtYXRjaFxuY29uc3QgYXV0b0V4cG9ydER5bmFtaWM9KDAsX2lzRHluYW1pYy5pc0R5bmFtaWNSb3V0ZSkoX3BhdGhuYW1lKSYmc2VsZi5fX05FWFRfREFUQV9fLmF1dG9FeHBvcnQ7dGhpcy5hc1BhdGg9YXV0b0V4cG9ydER5bmFtaWM/X3BhdGhuYW1lOl9hczt0aGlzLmJhc2VQYXRoPWJhc2VQYXRoO3RoaXMuc3ViPXN1YnNjcmlwdGlvbjt0aGlzLmNsYz1udWxsO3RoaXMuX3dyYXBBcHA9d3JhcEFwcDsvLyBtYWtlIHN1cmUgdG8gaWdub3JlIGV4dHJhIHBvcFN0YXRlIGluIHNhZmFyaSBvbiBuYXZpZ2F0aW5nXG4vLyBiYWNrIGZyb20gZXh0ZXJuYWwgc2l0ZVxudGhpcy5pc1Nzcj10cnVlO3RoaXMuaXNGYWxsYmFjaz1pc0ZhbGxiYWNrO3RoaXMuaXNSZWFkeT0hIShzZWxmLl9fTkVYVF9EQVRBX18uZ3NzcHx8c2VsZi5fX05FWFRfREFUQV9fLmdpcHx8IWF1dG9FeHBvcnREeW5hbWljJiYhc2VsZi5sb2NhdGlvbi5zZWFyY2gmJiFwcm9jZXNzLmVudi5fX05FWFRfSEFTX1JFV1JJVEVTKTt0aGlzLmlzUHJldmlldz0hIWlzUHJldmlldzt0aGlzLmlzTG9jYWxlRG9tYWluPWZhbHNlO2lmKHByb2Nlc3MuZW52Ll9fTkVYVF9JMThOX1NVUFBPUlQpe3RoaXMubG9jYWxlPWxvY2FsZTt0aGlzLmxvY2FsZXM9bG9jYWxlczt0aGlzLmRlZmF1bHRMb2NhbGU9ZGVmYXVsdExvY2FsZTt0aGlzLmRvbWFpbkxvY2FsZXM9ZG9tYWluTG9jYWxlczt0aGlzLmlzTG9jYWxlRG9tYWluPSEhZGV0ZWN0RG9tYWluTG9jYWxlKGRvbWFpbkxvY2FsZXMsc2VsZi5sb2NhdGlvbi5ob3N0bmFtZSk7fWlmKHR5cGVvZiB3aW5kb3chPT0ndW5kZWZpbmVkJyl7Ly8gbWFrZSBzdXJlIFwiYXNcIiBkb2Vzbid0IHN0YXJ0IHdpdGggZG91YmxlIHNsYXNoZXMgb3IgZWxzZSBpdCBjYW5cbi8vIHRocm93IGFuIGVycm9yIGFzIGl0J3MgY29uc2lkZXJlZCBpbnZhbGlkXG5pZihfYXMuc3Vic3RyKDAsMikhPT0nLy8nKXsvLyBpbiBvcmRlciBmb3IgYGUuc3RhdGVgIHRvIHdvcmsgb24gdGhlIGBvbnBvcHN0YXRlYCBldmVudFxuLy8gd2UgaGF2ZSB0byByZWdpc3RlciB0aGUgaW5pdGlhbCByb3V0ZSB1cG9uIGluaXRpYWxpemF0aW9uXG5jb25zdCBvcHRpb25zPXtsb2NhbGV9O29wdGlvbnMuX3Nob3VsZFJlc29sdmVIcmVmPV9hcyE9PV9wYXRobmFtZTt0aGlzLmNoYW5nZVN0YXRlKCdyZXBsYWNlU3RhdGUnLCgwLF91dGlscy5mb3JtYXRXaXRoVmFsaWRhdGlvbikoe3BhdGhuYW1lOmFkZEJhc2VQYXRoKF9wYXRobmFtZSkscXVlcnk6X3F1ZXJ5fSksKDAsX3V0aWxzLmdldFVSTCkoKSxvcHRpb25zKTt9d2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ3BvcHN0YXRlJyx0aGlzLm9uUG9wU3RhdGUpOy8vIGVuYWJsZSBjdXN0b20gc2Nyb2xsIHJlc3RvcmF0aW9uIGhhbmRsaW5nIHdoZW4gYXZhaWxhYmxlXG4vLyBvdGhlcndpc2UgZmFsbGJhY2sgdG8gYnJvd3NlcidzIGRlZmF1bHQgaGFuZGxpbmdcbmlmKHByb2Nlc3MuZW52Ll9fTkVYVF9TQ1JPTExfUkVTVE9SQVRJT04pe2lmKG1hbnVhbFNjcm9sbFJlc3RvcmF0aW9uKXt3aW5kb3cuaGlzdG9yeS5zY3JvbGxSZXN0b3JhdGlvbj0nbWFudWFsJzt9fX19cmVsb2FkKCl7d2luZG93LmxvY2F0aW9uLnJlbG9hZCgpO30vKipcbiAgICogR28gYmFjayBpbiBoaXN0b3J5XG4gICAqL2JhY2soKXt3aW5kb3cuaGlzdG9yeS5iYWNrKCk7fS8qKlxuICAgKiBQZXJmb3JtcyBhIGBwdXNoU3RhdGVgIHdpdGggYXJndW1lbnRzXG4gICAqIEBwYXJhbSB1cmwgb2YgdGhlIHJvdXRlXG4gICAqIEBwYXJhbSBhcyBtYXNrcyBgdXJsYCBmb3IgdGhlIGJyb3dzZXJcbiAgICogQHBhcmFtIG9wdGlvbnMgb2JqZWN0IHlvdSBjYW4gZGVmaW5lIGBzaGFsbG93YCBhbmQgb3RoZXIgb3B0aW9uc1xuICAgKi9wdXNoKHVybCxhcyxvcHRpb25zPXt9KXtpZihwcm9jZXNzLmVudi5fX05FWFRfU0NST0xMX1JFU1RPUkFUSU9OKXsvLyBUT0RPOiByZW1vdmUgaW4gdGhlIGZ1dHVyZSB3aGVuIHdlIHVwZGF0ZSBoaXN0b3J5IGJlZm9yZSByb3V0ZSBjaGFuZ2Vcbi8vIGlzIGNvbXBsZXRlLCBhcyB0aGUgcG9wc3RhdGUgZXZlbnQgc2hvdWxkIGhhbmRsZSB0aGlzIGNhcHR1cmUuXG5pZihtYW51YWxTY3JvbGxSZXN0b3JhdGlvbil7dHJ5ey8vIFNuYXBzaG90IHNjcm9sbCBwb3NpdGlvbiByaWdodCBiZWZvcmUgbmF2aWdhdGluZyB0byBhIG5ldyBwYWdlOlxuc2Vzc2lvblN0b3JhZ2Uuc2V0SXRlbSgnX19uZXh0X3Njcm9sbF8nK3RoaXMuX2lkeCxKU09OLnN0cmluZ2lmeSh7eDpzZWxmLnBhZ2VYT2Zmc2V0LHk6c2VsZi5wYWdlWU9mZnNldH0pKTt9Y2F0Y2goX3VudXNlZDMpe319fTsoe3VybCxhc309cHJlcGFyZVVybEFzKHRoaXMsdXJsLGFzKSk7cmV0dXJuIHRoaXMuY2hhbmdlKCdwdXNoU3RhdGUnLHVybCxhcyxvcHRpb25zKTt9LyoqXG4gICAqIFBlcmZvcm1zIGEgYHJlcGxhY2VTdGF0ZWAgd2l0aCBhcmd1bWVudHNcbiAgICogQHBhcmFtIHVybCBvZiB0aGUgcm91dGVcbiAgICogQHBhcmFtIGFzIG1hc2tzIGB1cmxgIGZvciB0aGUgYnJvd3NlclxuICAgKiBAcGFyYW0gb3B0aW9ucyBvYmplY3QgeW91IGNhbiBkZWZpbmUgYHNoYWxsb3dgIGFuZCBvdGhlciBvcHRpb25zXG4gICAqL3JlcGxhY2UodXJsLGFzLG9wdGlvbnM9e30pezsoe3VybCxhc309cHJlcGFyZVVybEFzKHRoaXMsdXJsLGFzKSk7cmV0dXJuIHRoaXMuY2hhbmdlKCdyZXBsYWNlU3RhdGUnLHVybCxhcyxvcHRpb25zKTt9YXN5bmMgY2hhbmdlKG1ldGhvZCx1cmwsYXMsb3B0aW9ucyxmb3JjZWRTY3JvbGwpe2lmKCFpc0xvY2FsVVJMKHVybCkpe3dpbmRvdy5sb2NhdGlvbi5ocmVmPXVybDtyZXR1cm4gZmFsc2U7fWNvbnN0IHNob3VsZFJlc29sdmVIcmVmPXVybD09PWFzfHxvcHRpb25zLl9ofHxvcHRpb25zLl9zaG91bGRSZXNvbHZlSHJlZjsvLyBmb3Igc3RhdGljIHBhZ2VzIHdpdGggcXVlcnkgcGFyYW1zIGluIHRoZSBVUkwgd2UgZGVsYXlcbi8vIG1hcmtpbmcgdGhlIHJvdXRlciByZWFkeSB1bnRpbCBhZnRlciB0aGUgcXVlcnkgaXMgdXBkYXRlZFxuaWYob3B0aW9ucy5faCl7dGhpcy5pc1JlYWR5PXRydWU7fWxldCBsb2NhbGVDaGFuZ2U9b3B0aW9ucy5sb2NhbGUhPT10aGlzLmxvY2FsZTtpZihwcm9jZXNzLmVudi5fX05FWFRfSTE4Tl9TVVBQT1JUKXt0aGlzLmxvY2FsZT1vcHRpb25zLmxvY2FsZT09PWZhbHNlP3RoaXMuZGVmYXVsdExvY2FsZTpvcHRpb25zLmxvY2FsZXx8dGhpcy5sb2NhbGU7aWYodHlwZW9mIG9wdGlvbnMubG9jYWxlPT09J3VuZGVmaW5lZCcpe29wdGlvbnMubG9jYWxlPXRoaXMubG9jYWxlO31jb25zdCBwYXJzZWRBcz0oMCxfcGFyc2VSZWxhdGl2ZVVybC5wYXJzZVJlbGF0aXZlVXJsKShoYXNCYXNlUGF0aChhcyk/ZGVsQmFzZVBhdGgoYXMpOmFzKTtjb25zdCBsb2NhbGVQYXRoUmVzdWx0PSgwLF9ub3JtYWxpemVMb2NhbGVQYXRoLm5vcm1hbGl6ZUxvY2FsZVBhdGgpKHBhcnNlZEFzLnBhdGhuYW1lLHRoaXMubG9jYWxlcyk7aWYobG9jYWxlUGF0aFJlc3VsdC5kZXRlY3RlZExvY2FsZSl7dGhpcy5sb2NhbGU9bG9jYWxlUGF0aFJlc3VsdC5kZXRlY3RlZExvY2FsZTtwYXJzZWRBcy5wYXRobmFtZT1hZGRCYXNlUGF0aChwYXJzZWRBcy5wYXRobmFtZSk7YXM9KDAsX3V0aWxzLmZvcm1hdFdpdGhWYWxpZGF0aW9uKShwYXJzZWRBcyk7dXJsPWFkZEJhc2VQYXRoKCgwLF9ub3JtYWxpemVMb2NhbGVQYXRoLm5vcm1hbGl6ZUxvY2FsZVBhdGgpKGhhc0Jhc2VQYXRoKHVybCk/ZGVsQmFzZVBhdGgodXJsKTp1cmwsdGhpcy5sb2NhbGVzKS5wYXRobmFtZSk7fWxldCBkaWROYXZpZ2F0ZT1mYWxzZTsvLyB3ZSBuZWVkIHRvIHdyYXAgdGhpcyBpbiB0aGUgZW52IGNoZWNrIGFnYWluIHNpbmNlIHJlZ2VuZXJhdG9yIHJ1bnRpbWVcbi8vIG1vdmVzIHRoaXMgb24gaXRzIG93biBkdWUgdG8gdGhlIHJldHVyblxuaWYocHJvY2Vzcy5lbnYuX19ORVhUX0kxOE5fU1VQUE9SVCl7dmFyIF90aGlzJGxvY2FsZXM7Ly8gaWYgdGhlIGxvY2FsZSBpc24ndCBjb25maWd1cmVkIGhhcmQgbmF2aWdhdGUgdG8gc2hvdyA0MDQgcGFnZVxuaWYoISgoX3RoaXMkbG9jYWxlcz10aGlzLmxvY2FsZXMpIT1udWxsJiZfdGhpcyRsb2NhbGVzLmluY2x1ZGVzKHRoaXMubG9jYWxlKSkpe3BhcnNlZEFzLnBhdGhuYW1lPWFkZExvY2FsZShwYXJzZWRBcy5wYXRobmFtZSx0aGlzLmxvY2FsZSk7d2luZG93LmxvY2F0aW9uLmhyZWY9KDAsX3V0aWxzLmZvcm1hdFdpdGhWYWxpZGF0aW9uKShwYXJzZWRBcyk7Ly8gdGhpcyB3YXMgcHJldmlvdXNseSBhIHJldHVybiBidXQgd2FzIHJlbW92ZWQgaW4gZmF2b3Jcbi8vIG9mIGJldHRlciBkZWFkIGNvZGUgZWxpbWluYXRpb24gd2l0aCByZWdlbmVyYXRvciBydW50aW1lXG5kaWROYXZpZ2F0ZT10cnVlO319Y29uc3QgZGV0ZWN0ZWREb21haW49ZGV0ZWN0RG9tYWluTG9jYWxlKHRoaXMuZG9tYWluTG9jYWxlcyx1bmRlZmluZWQsdGhpcy5sb2NhbGUpOy8vIHdlIG5lZWQgdG8gd3JhcCB0aGlzIGluIHRoZSBlbnYgY2hlY2sgYWdhaW4gc2luY2UgcmVnZW5lcmF0b3IgcnVudGltZVxuLy8gbW92ZXMgdGhpcyBvbiBpdHMgb3duIGR1ZSB0byB0aGUgcmV0dXJuXG5pZihwcm9jZXNzLmVudi5fX05FWFRfSTE4Tl9TVVBQT1JUKXsvLyBpZiB3ZSBhcmUgbmF2aWdhdGluZyB0byBhIGRvbWFpbiBsb2NhbGUgZW5zdXJlIHdlIHJlZGlyZWN0IHRvIHRoZVxuLy8gY29ycmVjdCBkb21haW5cbmlmKCFkaWROYXZpZ2F0ZSYmZGV0ZWN0ZWREb21haW4mJnRoaXMuaXNMb2NhbGVEb21haW4mJnNlbGYubG9jYXRpb24uaG9zdG5hbWUhPT1kZXRlY3RlZERvbWFpbi5kb21haW4pe2NvbnN0IGFzTm9CYXNlUGF0aD1kZWxCYXNlUGF0aChhcyk7d2luZG93LmxvY2F0aW9uLmhyZWY9YGh0dHAke2RldGVjdGVkRG9tYWluLmh0dHA/Jyc6J3MnfTovLyR7ZGV0ZWN0ZWREb21haW4uZG9tYWlufSR7YWRkQmFzZVBhdGgoYCR7dGhpcy5sb2NhbGU9PT1kZXRlY3RlZERvbWFpbi5kZWZhdWx0TG9jYWxlPycnOmAvJHt0aGlzLmxvY2FsZX1gfSR7YXNOb0Jhc2VQYXRoPT09Jy8nPycnOmFzTm9CYXNlUGF0aH1gfHwnLycpfWA7Ly8gdGhpcyB3YXMgcHJldmlvdXNseSBhIHJldHVybiBidXQgd2FzIHJlbW92ZWQgaW4gZmF2b3Jcbi8vIG9mIGJldHRlciBkZWFkIGNvZGUgZWxpbWluYXRpb24gd2l0aCByZWdlbmVyYXRvciBydW50aW1lXG5kaWROYXZpZ2F0ZT10cnVlO319aWYoZGlkTmF2aWdhdGUpe3JldHVybiBuZXcgUHJvbWlzZSgoKT0+e30pO319aWYoIW9wdGlvbnMuX2gpe3RoaXMuaXNTc3I9ZmFsc2U7fS8vIG1hcmtpbmcgcm91dGUgY2hhbmdlcyBhcyBhIG5hdmlnYXRpb24gc3RhcnQgZW50cnlcbmlmKF91dGlscy5TVCl7cGVyZm9ybWFuY2UubWFyaygncm91dGVDaGFuZ2UnKTt9Y29uc3R7c2hhbGxvdz1mYWxzZX09b3B0aW9ucztjb25zdCByb3V0ZVByb3BzPXtzaGFsbG93fTtpZih0aGlzLl9pbkZsaWdodFJvdXRlKXt0aGlzLmFib3J0Q29tcG9uZW50TG9hZCh0aGlzLl9pbkZsaWdodFJvdXRlLHJvdXRlUHJvcHMpO31hcz1hZGRCYXNlUGF0aChhZGRMb2NhbGUoaGFzQmFzZVBhdGgoYXMpP2RlbEJhc2VQYXRoKGFzKTphcyxvcHRpb25zLmxvY2FsZSx0aGlzLmRlZmF1bHRMb2NhbGUpKTtjb25zdCBjbGVhbmVkQXM9ZGVsTG9jYWxlKGhhc0Jhc2VQYXRoKGFzKT9kZWxCYXNlUGF0aChhcyk6YXMsdGhpcy5sb2NhbGUpO3RoaXMuX2luRmxpZ2h0Um91dGU9YXM7Ly8gSWYgdGhlIHVybCBjaGFuZ2UgaXMgb25seSByZWxhdGVkIHRvIGEgaGFzaCBjaGFuZ2Vcbi8vIFdlIHNob3VsZCBub3QgcHJvY2VlZC4gV2Ugc2hvdWxkIG9ubHkgY2hhbmdlIHRoZSBzdGF0ZS5cbi8vIFdBUk5JTkc6IGBfaGAgaXMgYW4gaW50ZXJuYWwgb3B0aW9uIGZvciBoYW5kaW5nIE5leHQuanMgY2xpZW50LXNpZGVcbi8vIGh5ZHJhdGlvbi4gWW91ciBhcHAgc2hvdWxkIF9uZXZlcl8gdXNlIHRoaXMgcHJvcGVydHkuIEl0IG1heSBjaGFuZ2UgYXRcbi8vIGFueSB0aW1lIHdpdGhvdXQgbm90aWNlLlxuaWYoIW9wdGlvbnMuX2gmJnRoaXMub25seUFIYXNoQ2hhbmdlKGNsZWFuZWRBcykpe3RoaXMuYXNQYXRoPWNsZWFuZWRBcztSb3V0ZXIuZXZlbnRzLmVtaXQoJ2hhc2hDaGFuZ2VTdGFydCcsYXMscm91dGVQcm9wcyk7Ly8gVE9ETzogZG8gd2UgbmVlZCB0aGUgcmVzb2x2ZWQgaHJlZiB3aGVuIG9ubHkgYSBoYXNoIGNoYW5nZT9cbnRoaXMuY2hhbmdlU3RhdGUobWV0aG9kLHVybCxhcyxvcHRpb25zKTt0aGlzLnNjcm9sbFRvSGFzaChjbGVhbmVkQXMpO3RoaXMubm90aWZ5KHRoaXMuY29tcG9uZW50c1t0aGlzLnJvdXRlXSxudWxsKTtSb3V0ZXIuZXZlbnRzLmVtaXQoJ2hhc2hDaGFuZ2VDb21wbGV0ZScsYXMscm91dGVQcm9wcyk7cmV0dXJuIHRydWU7fWxldCBwYXJzZWQ9KDAsX3BhcnNlUmVsYXRpdmVVcmwucGFyc2VSZWxhdGl2ZVVybCkodXJsKTtsZXR7cGF0aG5hbWUscXVlcnl9PXBhcnNlZDsvLyBUaGUgYnVpbGQgbWFuaWZlc3QgbmVlZHMgdG8gYmUgbG9hZGVkIGJlZm9yZSBhdXRvLXN0YXRpYyBkeW5hbWljIHBhZ2VzXG4vLyBnZXQgdGhlaXIgcXVlcnkgcGFyYW1ldGVycyB0byBhbGxvdyBlbnN1cmluZyB0aGV5IGNhbiBiZSBwYXJzZWQgcHJvcGVybHlcbi8vIHdoZW4gcmV3cml0dGVuIHRvXG5sZXQgcGFnZXMscmV3cml0ZXM7dHJ5e3BhZ2VzPWF3YWl0IHRoaXMucGFnZUxvYWRlci5nZXRQYWdlTGlzdCgpOyh7X19yZXdyaXRlczpyZXdyaXRlc309YXdhaXQoMCxfcm91dGVMb2FkZXIuZ2V0Q2xpZW50QnVpbGRNYW5pZmVzdCkoKSk7fWNhdGNoKGVycil7Ly8gSWYgd2UgZmFpbCB0byByZXNvbHZlIHRoZSBwYWdlIGxpc3Qgb3IgY2xpZW50LWJ1aWxkIG1hbmlmZXN0LCB3ZSBtdXN0XG4vLyBkbyBhIHNlcnZlci1zaWRlIHRyYW5zaXRpb246XG53aW5kb3cubG9jYXRpb24uaHJlZj1hcztyZXR1cm4gZmFsc2U7fS8vIElmIGFza2VkIHRvIGNoYW5nZSB0aGUgY3VycmVudCBVUkwgd2Ugc2hvdWxkIHJlbG9hZCB0aGUgY3VycmVudCBwYWdlXG4vLyAobm90IGxvY2F0aW9uLnJlbG9hZCgpIGJ1dCByZWxvYWQgZ2V0SW5pdGlhbFByb3BzIGFuZCBvdGhlciBOZXh0LmpzIHN0dWZmcylcbi8vIFdlIGFsc28gbmVlZCB0byBzZXQgdGhlIG1ldGhvZCA9IHJlcGxhY2VTdGF0ZSBhbHdheXNcbi8vIGFzIHRoaXMgc2hvdWxkIG5vdCBnbyBpbnRvIHRoZSBoaXN0b3J5IChUaGF0J3MgaG93IGJyb3dzZXJzIHdvcmspXG4vLyBXZSBzaG91bGQgY29tcGFyZSB0aGUgbmV3IGFzUGF0aCB0byB0aGUgY3VycmVudCBhc1BhdGgsIG5vdCB0aGUgdXJsXG5pZighdGhpcy51cmxJc05ldyhjbGVhbmVkQXMpJiYhbG9jYWxlQ2hhbmdlKXttZXRob2Q9J3JlcGxhY2VTdGF0ZSc7fS8vIHdlIG5lZWQgdG8gcmVzb2x2ZSB0aGUgYXMgdmFsdWUgdXNpbmcgcmV3cml0ZXMgZm9yIGR5bmFtaWMgU1NHXG4vLyBwYWdlcyB0byBhbGxvdyBidWlsZGluZyB0aGUgZGF0YSBVUkwgY29ycmVjdGx5XG5sZXQgcmVzb2x2ZWRBcz1hczsvLyB1cmwgYW5kIGFzIHNob3VsZCBhbHdheXMgYmUgcHJlZml4ZWQgd2l0aCBiYXNlUGF0aCBieSB0aGlzXG4vLyBwb2ludCBieSBlaXRoZXIgbmV4dC9saW5rIG9yIHJvdXRlci5wdXNoL3JlcGxhY2Ugc28gc3RyaXAgdGhlXG4vLyBiYXNlUGF0aCBmcm9tIHRoZSBwYXRobmFtZSB0byBtYXRjaCB0aGUgcGFnZXMgZGlyIDEtdG8tMVxucGF0aG5hbWU9cGF0aG5hbWU/KDAsX25vcm1hbGl6ZVRyYWlsaW5nU2xhc2gucmVtb3ZlUGF0aFRyYWlsaW5nU2xhc2gpKGRlbEJhc2VQYXRoKHBhdGhuYW1lKSk6cGF0aG5hbWU7aWYoc2hvdWxkUmVzb2x2ZUhyZWYmJnBhdGhuYW1lIT09Jy9fZXJyb3InKXs7b3B0aW9ucy5fc2hvdWxkUmVzb2x2ZUhyZWY9dHJ1ZTtpZihwcm9jZXNzLmVudi5fX05FWFRfSEFTX1JFV1JJVEVTJiZhcy5zdGFydHNXaXRoKCcvJykpe2NvbnN0IHJld3JpdGVzUmVzdWx0PSgwLF9yZXNvbHZlUmV3cml0ZXMuZGVmYXVsdCkoYWRkQmFzZVBhdGgoYWRkTG9jYWxlKGNsZWFuZWRBcyx0aGlzLmxvY2FsZSkpLHBhZ2VzLHJld3JpdGVzLHF1ZXJ5LHA9PnJlc29sdmVEeW5hbWljUm91dGUocCxwYWdlcyksdGhpcy5sb2NhbGVzKTtyZXNvbHZlZEFzPXJld3JpdGVzUmVzdWx0LmFzUGF0aDtpZihyZXdyaXRlc1Jlc3VsdC5tYXRjaGVkUGFnZSYmcmV3cml0ZXNSZXN1bHQucmVzb2x2ZWRIcmVmKXsvLyBpZiB0aGlzIGRpcmVjdGx5IG1hdGNoZXMgYSBwYWdlIHdlIG5lZWQgdG8gdXBkYXRlIHRoZSBocmVmIHRvXG4vLyBhbGxvdyB0aGUgY29ycmVjdCBwYWdlIGNodW5rIHRvIGJlIGxvYWRlZFxucGF0aG5hbWU9cmV3cml0ZXNSZXN1bHQucmVzb2x2ZWRIcmVmO3BhcnNlZC5wYXRobmFtZT1hZGRCYXNlUGF0aChwYXRobmFtZSk7dXJsPSgwLF91dGlscy5mb3JtYXRXaXRoVmFsaWRhdGlvbikocGFyc2VkKTt9fWVsc2V7cGFyc2VkLnBhdGhuYW1lPXJlc29sdmVEeW5hbWljUm91dGUocGF0aG5hbWUscGFnZXMpO2lmKHBhcnNlZC5wYXRobmFtZSE9PXBhdGhuYW1lKXtwYXRobmFtZT1wYXJzZWQucGF0aG5hbWU7cGFyc2VkLnBhdGhuYW1lPWFkZEJhc2VQYXRoKHBhdGhuYW1lKTt1cmw9KDAsX3V0aWxzLmZvcm1hdFdpdGhWYWxpZGF0aW9uKShwYXJzZWQpO319fWNvbnN0IHJvdXRlPSgwLF9ub3JtYWxpemVUcmFpbGluZ1NsYXNoLnJlbW92ZVBhdGhUcmFpbGluZ1NsYXNoKShwYXRobmFtZSk7aWYoIWlzTG9jYWxVUkwoYXMpKXtpZihwcm9jZXNzLmVudi5OT0RFX0VOViE9PSdwcm9kdWN0aW9uJyl7dGhyb3cgbmV3IEVycm9yKGBJbnZhbGlkIGhyZWY6IFwiJHt1cmx9XCIgYW5kIGFzOiBcIiR7YXN9XCIsIHJlY2VpdmVkIHJlbGF0aXZlIGhyZWYgYW5kIGV4dGVybmFsIGFzYCtgXFxuU2VlIG1vcmUgaW5mbzogaHR0cHM6Ly9uZXh0anMub3JnL2RvY3MvbWVzc2FnZXMvaW52YWxpZC1yZWxhdGl2ZS11cmwtZXh0ZXJuYWwtYXNgKTt9d2luZG93LmxvY2F0aW9uLmhyZWY9YXM7cmV0dXJuIGZhbHNlO31yZXNvbHZlZEFzPWRlbExvY2FsZShkZWxCYXNlUGF0aChyZXNvbHZlZEFzKSx0aGlzLmxvY2FsZSk7aWYoKDAsX2lzRHluYW1pYy5pc0R5bmFtaWNSb3V0ZSkocm91dGUpKXtjb25zdCBwYXJzZWRBcz0oMCxfcGFyc2VSZWxhdGl2ZVVybC5wYXJzZVJlbGF0aXZlVXJsKShyZXNvbHZlZEFzKTtjb25zdCBhc1BhdGhuYW1lPXBhcnNlZEFzLnBhdGhuYW1lO2NvbnN0IHJvdXRlUmVnZXg9KDAsX3JvdXRlUmVnZXguZ2V0Um91dGVSZWdleCkocm91dGUpO2NvbnN0IHJvdXRlTWF0Y2g9KDAsX3JvdXRlTWF0Y2hlci5nZXRSb3V0ZU1hdGNoZXIpKHJvdXRlUmVnZXgpKGFzUGF0aG5hbWUpO2NvbnN0IHNob3VsZEludGVycG9sYXRlPXJvdXRlPT09YXNQYXRobmFtZTtjb25zdCBpbnRlcnBvbGF0ZWRBcz1zaG91bGRJbnRlcnBvbGF0ZT9pbnRlcnBvbGF0ZUFzKHJvdXRlLGFzUGF0aG5hbWUscXVlcnkpOnt9O2lmKCFyb3V0ZU1hdGNofHxzaG91bGRJbnRlcnBvbGF0ZSYmIWludGVycG9sYXRlZEFzLnJlc3VsdCl7Y29uc3QgbWlzc2luZ1BhcmFtcz1PYmplY3Qua2V5cyhyb3V0ZVJlZ2V4Lmdyb3VwcykuZmlsdGVyKHBhcmFtPT4hcXVlcnlbcGFyYW1dKTtpZihtaXNzaW5nUGFyYW1zLmxlbmd0aD4wKXtpZihwcm9jZXNzLmVudi5OT0RFX0VOViE9PSdwcm9kdWN0aW9uJyl7Y29uc29sZS53YXJuKGAke3Nob3VsZEludGVycG9sYXRlP2BJbnRlcnBvbGF0aW5nIGhyZWZgOmBNaXNtYXRjaGluZyBcXGBhc1xcYCBhbmQgXFxgaHJlZlxcYGB9IGZhaWxlZCB0byBtYW51YWxseSBwcm92aWRlIGArYHRoZSBwYXJhbXM6ICR7bWlzc2luZ1BhcmFtcy5qb2luKCcsICcpfSBpbiB0aGUgXFxgaHJlZlxcYCdzIFxcYHF1ZXJ5XFxgYCk7fXRocm93IG5ldyBFcnJvcigoc2hvdWxkSW50ZXJwb2xhdGU/YFRoZSBwcm92aWRlZCBcXGBocmVmXFxgICgke3VybH0pIHZhbHVlIGlzIG1pc3NpbmcgcXVlcnkgdmFsdWVzICgke21pc3NpbmdQYXJhbXMuam9pbignLCAnKX0pIHRvIGJlIGludGVycG9sYXRlZCBwcm9wZXJseS4gYDpgVGhlIHByb3ZpZGVkIFxcYGFzXFxgIHZhbHVlICgke2FzUGF0aG5hbWV9KSBpcyBpbmNvbXBhdGlibGUgd2l0aCB0aGUgXFxgaHJlZlxcYCB2YWx1ZSAoJHtyb3V0ZX0pLiBgKStgUmVhZCBtb3JlOiBodHRwczovL25leHRqcy5vcmcvZG9jcy9tZXNzYWdlcy8ke3Nob3VsZEludGVycG9sYXRlPydocmVmLWludGVycG9sYXRpb24tZmFpbGVkJzonaW5jb21wYXRpYmxlLWhyZWYtYXMnfWApO319ZWxzZSBpZihzaG91bGRJbnRlcnBvbGF0ZSl7YXM9KDAsX3V0aWxzLmZvcm1hdFdpdGhWYWxpZGF0aW9uKShPYmplY3QuYXNzaWduKHt9LHBhcnNlZEFzLHtwYXRobmFtZTppbnRlcnBvbGF0ZWRBcy5yZXN1bHQscXVlcnk6b21pdFBhcm1zRnJvbVF1ZXJ5KHF1ZXJ5LGludGVycG9sYXRlZEFzLnBhcmFtcyl9KSk7fWVsc2V7Ly8gTWVyZ2UgcGFyYW1zIGludG8gYHF1ZXJ5YCwgb3ZlcndyaXRpbmcgYW55IHNwZWNpZmllZCBpbiBzZWFyY2hcbk9iamVjdC5hc3NpZ24ocXVlcnkscm91dGVNYXRjaCk7fX1Sb3V0ZXIuZXZlbnRzLmVtaXQoJ3JvdXRlQ2hhbmdlU3RhcnQnLGFzLHJvdXRlUHJvcHMpO3RyeXt2YXIgX3NlbGYkX19ORVhUX0RBVEFfXyRwLF9zZWxmJF9fTkVYVF9EQVRBX18kcDIsX29wdGlvbnMkc2Nyb2xsO2xldCByb3V0ZUluZm89YXdhaXQgdGhpcy5nZXRSb3V0ZUluZm8ocm91dGUscGF0aG5hbWUscXVlcnksYXMscmVzb2x2ZWRBcyxyb3V0ZVByb3BzKTtsZXR7ZXJyb3IscHJvcHMsX19OX1NTRyxfX05fU1NQfT1yb3V0ZUluZm87Ly8gaGFuZGxlIHJlZGlyZWN0IG9uIGNsaWVudC10cmFuc2l0aW9uXG5pZigoX19OX1NTR3x8X19OX1NTUCkmJnByb3BzKXtpZihwcm9wcy5wYWdlUHJvcHMmJnByb3BzLnBhZ2VQcm9wcy5fX05fUkVESVJFQ1Qpe2NvbnN0IGRlc3RpbmF0aW9uPXByb3BzLnBhZ2VQcm9wcy5fX05fUkVESVJFQ1Q7Ly8gY2hlY2sgaWYgZGVzdGluYXRpb24gaXMgaW50ZXJuYWwgKHJlc29sdmVzIHRvIGEgcGFnZSkgYW5kIGF0dGVtcHRcbi8vIGNsaWVudC1uYXZpZ2F0aW9uIGlmIGl0IGlzIGZhbGxpbmcgYmFjayB0byBoYXJkIG5hdmlnYXRpb24gaWZcbi8vIGl0J3Mgbm90XG5pZihkZXN0aW5hdGlvbi5zdGFydHNXaXRoKCcvJykpe2NvbnN0IHBhcnNlZEhyZWY9KDAsX3BhcnNlUmVsYXRpdmVVcmwucGFyc2VSZWxhdGl2ZVVybCkoZGVzdGluYXRpb24pO3BhcnNlZEhyZWYucGF0aG5hbWU9cmVzb2x2ZUR5bmFtaWNSb3V0ZShwYXJzZWRIcmVmLnBhdGhuYW1lLHBhZ2VzKTtjb25zdHt1cmw6bmV3VXJsLGFzOm5ld0FzfT1wcmVwYXJlVXJsQXModGhpcyxkZXN0aW5hdGlvbixkZXN0aW5hdGlvbik7cmV0dXJuIHRoaXMuY2hhbmdlKG1ldGhvZCxuZXdVcmwsbmV3QXMsb3B0aW9ucyk7fXdpbmRvdy5sb2NhdGlvbi5ocmVmPWRlc3RpbmF0aW9uO3JldHVybiBuZXcgUHJvbWlzZSgoKT0+e30pO310aGlzLmlzUHJldmlldz0hIXByb3BzLl9fTl9QUkVWSUVXOy8vIGhhbmRsZSBTU0cgZGF0YSA0MDRcbmlmKHByb3BzLm5vdEZvdW5kPT09U1NHX0RBVEFfTk9UX0ZPVU5EKXtsZXQgbm90Rm91bmRSb3V0ZTt0cnl7YXdhaXQgdGhpcy5mZXRjaENvbXBvbmVudCgnLzQwNCcpO25vdEZvdW5kUm91dGU9Jy80MDQnO31jYXRjaChfKXtub3RGb3VuZFJvdXRlPScvX2Vycm9yJzt9cm91dGVJbmZvPWF3YWl0IHRoaXMuZ2V0Um91dGVJbmZvKG5vdEZvdW5kUm91dGUsbm90Rm91bmRSb3V0ZSxxdWVyeSxhcyxyZXNvbHZlZEFzLHtzaGFsbG93OmZhbHNlfSk7fX1Sb3V0ZXIuZXZlbnRzLmVtaXQoJ2JlZm9yZUhpc3RvcnlDaGFuZ2UnLGFzLHJvdXRlUHJvcHMpO3RoaXMuY2hhbmdlU3RhdGUobWV0aG9kLHVybCxhcyxvcHRpb25zKTtpZihwcm9jZXNzLmVudi5OT0RFX0VOViE9PSdwcm9kdWN0aW9uJyl7Y29uc3QgYXBwQ29tcD10aGlzLmNvbXBvbmVudHNbJy9fYXBwJ10uQ29tcG9uZW50O3dpbmRvdy5uZXh0LmlzUHJlcmVuZGVyZWQ9YXBwQ29tcC5nZXRJbml0aWFsUHJvcHM9PT1hcHBDb21wLm9yaWdHZXRJbml0aWFsUHJvcHMmJiFyb3V0ZUluZm8uQ29tcG9uZW50LmdldEluaXRpYWxQcm9wczt9aWYob3B0aW9ucy5faCYmcGF0aG5hbWU9PT0nL19lcnJvcicmJigoX3NlbGYkX19ORVhUX0RBVEFfXyRwPXNlbGYuX19ORVhUX0RBVEFfXy5wcm9wcyk9PW51bGw/dm9pZCAwOihfc2VsZiRfX05FWFRfREFUQV9fJHAyPV9zZWxmJF9fTkVYVF9EQVRBX18kcC5wYWdlUHJvcHMpPT1udWxsP3ZvaWQgMDpfc2VsZiRfX05FWFRfREFUQV9fJHAyLnN0YXR1c0NvZGUpPT09NTAwJiZwcm9wcyE9bnVsbCYmcHJvcHMucGFnZVByb3BzKXsvLyBlbnN1cmUgc3RhdHVzQ29kZSBpcyBzdGlsbCBjb3JyZWN0IGZvciBzdGF0aWMgNTAwIHBhZ2Vcbi8vIHdoZW4gdXBkYXRpbmcgcXVlcnkgaW5mb3JtYXRpb25cbnByb3BzLnBhZ2VQcm9wcy5zdGF0dXNDb2RlPTUwMDt9Ly8gc2hhbGxvdyByb3V0aW5nIGlzIG9ubHkgYWxsb3dlZCBmb3Igc2FtZSBwYWdlIFVSTCBjaGFuZ2VzLlxuY29uc3QgaXNWYWxpZFNoYWxsb3dSb3V0ZT1vcHRpb25zLnNoYWxsb3cmJnRoaXMucm91dGU9PT1yb3V0ZTtjb25zdCBzaG91bGRTY3JvbGw9KF9vcHRpb25zJHNjcm9sbD1vcHRpb25zLnNjcm9sbCkhPW51bGw/X29wdGlvbnMkc2Nyb2xsOiFpc1ZhbGlkU2hhbGxvd1JvdXRlO2NvbnN0IHJlc2V0U2Nyb2xsPXNob3VsZFNjcm9sbD97eDowLHk6MH06bnVsbDthd2FpdCB0aGlzLnNldChyb3V0ZSxwYXRobmFtZSxxdWVyeSxjbGVhbmVkQXMscm91dGVJbmZvLGZvcmNlZFNjcm9sbCE9bnVsbD9mb3JjZWRTY3JvbGw6cmVzZXRTY3JvbGwpLmNhdGNoKGU9PntpZihlLmNhbmNlbGxlZCllcnJvcj1lcnJvcnx8ZTtlbHNlIHRocm93IGU7fSk7aWYoZXJyb3Ipe1JvdXRlci5ldmVudHMuZW1pdCgncm91dGVDaGFuZ2VFcnJvcicsZXJyb3IsY2xlYW5lZEFzLHJvdXRlUHJvcHMpO3Rocm93IGVycm9yO31pZihwcm9jZXNzLmVudi5fX05FWFRfSTE4Tl9TVVBQT1JUKXtpZih0aGlzLmxvY2FsZSl7ZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50Lmxhbmc9dGhpcy5sb2NhbGU7fX1Sb3V0ZXIuZXZlbnRzLmVtaXQoJ3JvdXRlQ2hhbmdlQ29tcGxldGUnLGFzLHJvdXRlUHJvcHMpO3JldHVybiB0cnVlO31jYXRjaChlcnIpe2lmKGVyci5jYW5jZWxsZWQpe3JldHVybiBmYWxzZTt9dGhyb3cgZXJyO319Y2hhbmdlU3RhdGUobWV0aG9kLHVybCxhcyxvcHRpb25zPXt9KXtpZihwcm9jZXNzLmVudi5OT0RFX0VOViE9PSdwcm9kdWN0aW9uJyl7aWYodHlwZW9mIHdpbmRvdy5oaXN0b3J5PT09J3VuZGVmaW5lZCcpe2NvbnNvbGUuZXJyb3IoYFdhcm5pbmc6IHdpbmRvdy5oaXN0b3J5IGlzIG5vdCBhdmFpbGFibGUuYCk7cmV0dXJuO31pZih0eXBlb2Ygd2luZG93Lmhpc3RvcnlbbWV0aG9kXT09PSd1bmRlZmluZWQnKXtjb25zb2xlLmVycm9yKGBXYXJuaW5nOiB3aW5kb3cuaGlzdG9yeS4ke21ldGhvZH0gaXMgbm90IGF2YWlsYWJsZWApO3JldHVybjt9fWlmKG1ldGhvZCE9PSdwdXNoU3RhdGUnfHwoMCxfdXRpbHMuZ2V0VVJMKSgpIT09YXMpe3RoaXMuX3NoYWxsb3c9b3B0aW9ucy5zaGFsbG93O3dpbmRvdy5oaXN0b3J5W21ldGhvZF0oe3VybCxhcyxvcHRpb25zLF9fTjp0cnVlLGlkeDp0aGlzLl9pZHg9bWV0aG9kIT09J3B1c2hTdGF0ZSc/dGhpcy5faWR4OnRoaXMuX2lkeCsxfSwvLyBNb3N0IGJyb3dzZXJzIGN1cnJlbnRseSBpZ25vcmVzIHRoaXMgcGFyYW1ldGVyLCBhbHRob3VnaCB0aGV5IG1heSB1c2UgaXQgaW4gdGhlIGZ1dHVyZS5cbi8vIFBhc3NpbmcgdGhlIGVtcHR5IHN0cmluZyBoZXJlIHNob3VsZCBiZSBzYWZlIGFnYWluc3QgZnV0dXJlIGNoYW5nZXMgdG8gdGhlIG1ldGhvZC5cbi8vIGh0dHBzOi8vZGV2ZWxvcGVyLm1vemlsbGEub3JnL2VuLVVTL2RvY3MvV2ViL0FQSS9IaXN0b3J5L3JlcGxhY2VTdGF0ZVxuJycsYXMpO319YXN5bmMgaGFuZGxlUm91dGVJbmZvRXJyb3IoZXJyLHBhdGhuYW1lLHF1ZXJ5LGFzLHJvdXRlUHJvcHMsbG9hZEVycm9yRmFpbCl7aWYoZXJyLmNhbmNlbGxlZCl7Ly8gYnViYmxlIHVwIGNhbmNlbGxhdGlvbiBlcnJvcnNcbnRocm93IGVycjt9aWYoKDAsX3JvdXRlTG9hZGVyLmlzQXNzZXRFcnJvcikoZXJyKXx8bG9hZEVycm9yRmFpbCl7Um91dGVyLmV2ZW50cy5lbWl0KCdyb3V0ZUNoYW5nZUVycm9yJyxlcnIsYXMscm91dGVQcm9wcyk7Ly8gSWYgd2UgY2FuJ3QgbG9hZCB0aGUgcGFnZSBpdCBjb3VsZCBiZSBvbmUgb2YgZm9sbG93aW5nIHJlYXNvbnNcbi8vICAxLiBQYWdlIGRvZXNuJ3QgZXhpc3RzXG4vLyAgMi4gUGFnZSBkb2VzIGV4aXN0IGluIGEgZGlmZmVyZW50IHpvbmVcbi8vICAzLiBJbnRlcm5hbCBlcnJvciB3aGlsZSBsb2FkaW5nIHRoZSBwYWdlXG4vLyBTbywgZG9pbmcgYSBoYXJkIHJlbG9hZCBpcyB0aGUgcHJvcGVyIHdheSB0byBkZWFsIHdpdGggdGhpcy5cbndpbmRvdy5sb2NhdGlvbi5ocmVmPWFzOy8vIENoYW5naW5nIHRoZSBVUkwgZG9lc24ndCBibG9jayBleGVjdXRpbmcgdGhlIGN1cnJlbnQgY29kZSBwYXRoLlxuLy8gU28gbGV0J3MgdGhyb3cgYSBjYW5jZWxsYXRpb24gZXJyb3Igc3RvcCB0aGUgcm91dGluZyBsb2dpYy5cbnRocm93IGJ1aWxkQ2FuY2VsbGF0aW9uRXJyb3IoKTt9dHJ5e2xldCBDb21wb25lbnQ7bGV0IHN0eWxlU2hlZXRzO2xldCBwcm9wcztpZih0eXBlb2YgQ29tcG9uZW50PT09J3VuZGVmaW5lZCd8fHR5cGVvZiBzdHlsZVNoZWV0cz09PSd1bmRlZmluZWQnKXs7KHtwYWdlOkNvbXBvbmVudCxzdHlsZVNoZWV0c309YXdhaXQgdGhpcy5mZXRjaENvbXBvbmVudCgnL19lcnJvcicpKTt9Y29uc3Qgcm91dGVJbmZvPXtwcm9wcyxDb21wb25lbnQsc3R5bGVTaGVldHMsZXJyLGVycm9yOmVycn07aWYoIXJvdXRlSW5mby5wcm9wcyl7dHJ5e3JvdXRlSW5mby5wcm9wcz1hd2FpdCB0aGlzLmdldEluaXRpYWxQcm9wcyhDb21wb25lbnQse2VycixwYXRobmFtZSxxdWVyeX0pO31jYXRjaChnaXBFcnIpe2NvbnNvbGUuZXJyb3IoJ0Vycm9yIGluIGVycm9yIHBhZ2UgYGdldEluaXRpYWxQcm9wc2A6ICcsZ2lwRXJyKTtyb3V0ZUluZm8ucHJvcHM9e307fX1yZXR1cm4gcm91dGVJbmZvO31jYXRjaChyb3V0ZUluZm9FcnIpe3JldHVybiB0aGlzLmhhbmRsZVJvdXRlSW5mb0Vycm9yKHJvdXRlSW5mb0VycixwYXRobmFtZSxxdWVyeSxhcyxyb3V0ZVByb3BzLHRydWUpO319YXN5bmMgZ2V0Um91dGVJbmZvKHJvdXRlLHBhdGhuYW1lLHF1ZXJ5LGFzLHJlc29sdmVkQXMscm91dGVQcm9wcyl7dHJ5e2NvbnN0IGV4aXN0aW5nUm91dGVJbmZvPXRoaXMuY29tcG9uZW50c1tyb3V0ZV07aWYocm91dGVQcm9wcy5zaGFsbG93JiZleGlzdGluZ1JvdXRlSW5mbyYmdGhpcy5yb3V0ZT09PXJvdXRlKXtyZXR1cm4gZXhpc3RpbmdSb3V0ZUluZm87fWNvbnN0IGNhY2hlZFJvdXRlSW5mbz1leGlzdGluZ1JvdXRlSW5mbyYmJ2luaXRpYWwnaW4gZXhpc3RpbmdSb3V0ZUluZm8/dW5kZWZpbmVkOmV4aXN0aW5nUm91dGVJbmZvO2NvbnN0IHJvdXRlSW5mbz1jYWNoZWRSb3V0ZUluZm8/Y2FjaGVkUm91dGVJbmZvOmF3YWl0IHRoaXMuZmV0Y2hDb21wb25lbnQocm91dGUpLnRoZW4ocmVzPT4oe0NvbXBvbmVudDpyZXMucGFnZSxzdHlsZVNoZWV0czpyZXMuc3R5bGVTaGVldHMsX19OX1NTRzpyZXMubW9kLl9fTl9TU0csX19OX1NTUDpyZXMubW9kLl9fTl9TU1B9KSk7Y29uc3R7Q29tcG9uZW50LF9fTl9TU0csX19OX1NTUH09cm91dGVJbmZvO2lmKHByb2Nlc3MuZW52Lk5PREVfRU5WIT09J3Byb2R1Y3Rpb24nKXtjb25zdHtpc1ZhbGlkRWxlbWVudFR5cGV9PXJlcXVpcmUoJ3JlYWN0LWlzJyk7aWYoIWlzVmFsaWRFbGVtZW50VHlwZShDb21wb25lbnQpKXt0aHJvdyBuZXcgRXJyb3IoYFRoZSBkZWZhdWx0IGV4cG9ydCBpcyBub3QgYSBSZWFjdCBDb21wb25lbnQgaW4gcGFnZTogXCIke3BhdGhuYW1lfVwiYCk7fX1sZXQgZGF0YUhyZWY7aWYoX19OX1NTR3x8X19OX1NTUCl7ZGF0YUhyZWY9dGhpcy5wYWdlTG9hZGVyLmdldERhdGFIcmVmKCgwLF91dGlscy5mb3JtYXRXaXRoVmFsaWRhdGlvbikoe3BhdGhuYW1lLHF1ZXJ5fSkscmVzb2x2ZWRBcyxfX05fU1NHLHRoaXMubG9jYWxlKTt9Y29uc3QgcHJvcHM9YXdhaXQgdGhpcy5fZ2V0RGF0YSgoKT0+X19OX1NTRz90aGlzLl9nZXRTdGF0aWNEYXRhKGRhdGFIcmVmKTpfX05fU1NQP3RoaXMuX2dldFNlcnZlckRhdGEoZGF0YUhyZWYpOnRoaXMuZ2V0SW5pdGlhbFByb3BzKENvbXBvbmVudCwvLyB3ZSBwcm92aWRlIEFwcFRyZWUgbGF0ZXIgc28gdGhpcyBuZWVkcyB0byBiZSBgYW55YFxue3BhdGhuYW1lLHF1ZXJ5LGFzUGF0aDphcyxsb2NhbGU6dGhpcy5sb2NhbGUsbG9jYWxlczp0aGlzLmxvY2FsZXMsZGVmYXVsdExvY2FsZTp0aGlzLmRlZmF1bHRMb2NhbGV9KSk7cm91dGVJbmZvLnByb3BzPXByb3BzO3RoaXMuY29tcG9uZW50c1tyb3V0ZV09cm91dGVJbmZvO3JldHVybiByb3V0ZUluZm87fWNhdGNoKGVycil7cmV0dXJuIHRoaXMuaGFuZGxlUm91dGVJbmZvRXJyb3IoZXJyLHBhdGhuYW1lLHF1ZXJ5LGFzLHJvdXRlUHJvcHMpO319c2V0KHJvdXRlLHBhdGhuYW1lLHF1ZXJ5LGFzLGRhdGEscmVzZXRTY3JvbGwpe3RoaXMuaXNGYWxsYmFjaz1mYWxzZTt0aGlzLnJvdXRlPXJvdXRlO3RoaXMucGF0aG5hbWU9cGF0aG5hbWU7dGhpcy5xdWVyeT1xdWVyeTt0aGlzLmFzUGF0aD1hcztyZXR1cm4gdGhpcy5ub3RpZnkoZGF0YSxyZXNldFNjcm9sbCk7fS8qKlxuICAgKiBDYWxsYmFjayB0byBleGVjdXRlIGJlZm9yZSByZXBsYWNpbmcgcm91dGVyIHN0YXRlXG4gICAqIEBwYXJhbSBjYiBjYWxsYmFjayB0byBiZSBleGVjdXRlZFxuICAgKi9iZWZvcmVQb3BTdGF0ZShjYil7dGhpcy5fYnBzPWNiO31vbmx5QUhhc2hDaGFuZ2UoYXMpe2lmKCF0aGlzLmFzUGF0aClyZXR1cm4gZmFsc2U7Y29uc3Rbb2xkVXJsTm9IYXNoLG9sZEhhc2hdPXRoaXMuYXNQYXRoLnNwbGl0KCcjJyk7Y29uc3RbbmV3VXJsTm9IYXNoLG5ld0hhc2hdPWFzLnNwbGl0KCcjJyk7Ly8gTWFrZXMgc3VyZSB3ZSBzY3JvbGwgdG8gdGhlIHByb3ZpZGVkIGhhc2ggaWYgdGhlIHVybC9oYXNoIGFyZSB0aGUgc2FtZVxuaWYobmV3SGFzaCYmb2xkVXJsTm9IYXNoPT09bmV3VXJsTm9IYXNoJiZvbGRIYXNoPT09bmV3SGFzaCl7cmV0dXJuIHRydWU7fS8vIElmIHRoZSB1cmxzIGFyZSBjaGFuZ2UsIHRoZXJlJ3MgbW9yZSB0aGFuIGEgaGFzaCBjaGFuZ2VcbmlmKG9sZFVybE5vSGFzaCE9PW5ld1VybE5vSGFzaCl7cmV0dXJuIGZhbHNlO30vLyBJZiB0aGUgaGFzaCBoYXMgY2hhbmdlZCwgdGhlbiBpdCdzIGEgaGFzaCBvbmx5IGNoYW5nZS5cbi8vIFRoaXMgY2hlY2sgaXMgbmVjZXNzYXJ5IHRvIGhhbmRsZSBib3RoIHRoZSBlbnRlciBhbmRcbi8vIGxlYXZlIGhhc2ggPT09ICcnIGNhc2VzLiBUaGUgaWRlbnRpdHkgY2FzZSBmYWxscyB0aHJvdWdoXG4vLyBhbmQgaXMgdHJlYXRlZCBhcyBhIG5leHQgcmVsb2FkLlxucmV0dXJuIG9sZEhhc2ghPT1uZXdIYXNoO31zY3JvbGxUb0hhc2goYXMpe2NvbnN0WyxoYXNoXT1hcy5zcGxpdCgnIycpOy8vIFNjcm9sbCB0byB0b3AgaWYgdGhlIGhhc2ggaXMganVzdCBgI2Agd2l0aCBubyB2YWx1ZSBvciBgI3RvcGBcbi8vIFRvIG1pcnJvciBicm93c2Vyc1xuaWYoaGFzaD09PScnfHxoYXNoPT09J3RvcCcpe3dpbmRvdy5zY3JvbGxUbygwLDApO3JldHVybjt9Ly8gRmlyc3Qgd2UgY2hlY2sgaWYgdGhlIGVsZW1lbnQgYnkgaWQgaXMgZm91bmRcbmNvbnN0IGlkRWw9ZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoaGFzaCk7aWYoaWRFbCl7aWRFbC5zY3JvbGxJbnRvVmlldygpO3JldHVybjt9Ly8gSWYgdGhlcmUncyBubyBlbGVtZW50IHdpdGggdGhlIGlkLCB3ZSBjaGVjayB0aGUgYG5hbWVgIHByb3BlcnR5XG4vLyBUbyBtaXJyb3IgYnJvd3NlcnNcbmNvbnN0IG5hbWVFbD1kb2N1bWVudC5nZXRFbGVtZW50c0J5TmFtZShoYXNoKVswXTtpZihuYW1lRWwpe25hbWVFbC5zY3JvbGxJbnRvVmlldygpO319dXJsSXNOZXcoYXNQYXRoKXtyZXR1cm4gdGhpcy5hc1BhdGghPT1hc1BhdGg7fS8qKlxuICAgKiBQcmVmZXRjaCBwYWdlIGNvZGUsIHlvdSBtYXkgd2FpdCBmb3IgdGhlIGRhdGEgZHVyaW5nIHBhZ2UgcmVuZGVyaW5nLlxuICAgKiBUaGlzIGZlYXR1cmUgb25seSB3b3JrcyBpbiBwcm9kdWN0aW9uIVxuICAgKiBAcGFyYW0gdXJsIHRoZSBocmVmIG9mIHByZWZldGNoZWQgcGFnZVxuICAgKiBAcGFyYW0gYXNQYXRoIHRoZSBhcyBwYXRoIG9mIHRoZSBwcmVmZXRjaGVkIHBhZ2VcbiAgICovYXN5bmMgcHJlZmV0Y2godXJsLGFzUGF0aD11cmwsb3B0aW9ucz17fSl7bGV0IHBhcnNlZD0oMCxfcGFyc2VSZWxhdGl2ZVVybC5wYXJzZVJlbGF0aXZlVXJsKSh1cmwpO2xldHtwYXRobmFtZX09cGFyc2VkO2lmKHByb2Nlc3MuZW52Ll9fTkVYVF9JMThOX1NVUFBPUlQpe2lmKG9wdGlvbnMubG9jYWxlPT09ZmFsc2Upe3BhdGhuYW1lPSgwLF9ub3JtYWxpemVMb2NhbGVQYXRoLm5vcm1hbGl6ZUxvY2FsZVBhdGgpKHBhdGhuYW1lLHRoaXMubG9jYWxlcykucGF0aG5hbWU7cGFyc2VkLnBhdGhuYW1lPXBhdGhuYW1lO3VybD0oMCxfdXRpbHMuZm9ybWF0V2l0aFZhbGlkYXRpb24pKHBhcnNlZCk7bGV0IHBhcnNlZEFzPSgwLF9wYXJzZVJlbGF0aXZlVXJsLnBhcnNlUmVsYXRpdmVVcmwpKGFzUGF0aCk7Y29uc3QgbG9jYWxlUGF0aFJlc3VsdD0oMCxfbm9ybWFsaXplTG9jYWxlUGF0aC5ub3JtYWxpemVMb2NhbGVQYXRoKShwYXJzZWRBcy5wYXRobmFtZSx0aGlzLmxvY2FsZXMpO3BhcnNlZEFzLnBhdGhuYW1lPWxvY2FsZVBhdGhSZXN1bHQucGF0aG5hbWU7b3B0aW9ucy5sb2NhbGU9bG9jYWxlUGF0aFJlc3VsdC5kZXRlY3RlZExvY2FsZXx8dGhpcy5kZWZhdWx0TG9jYWxlO2FzUGF0aD0oMCxfdXRpbHMuZm9ybWF0V2l0aFZhbGlkYXRpb24pKHBhcnNlZEFzKTt9fWNvbnN0IHBhZ2VzPWF3YWl0IHRoaXMucGFnZUxvYWRlci5nZXRQYWdlTGlzdCgpO2xldCByZXNvbHZlZEFzPWFzUGF0aDtpZihwcm9jZXNzLmVudi5fX05FWFRfSEFTX1JFV1JJVEVTJiZhc1BhdGguc3RhcnRzV2l0aCgnLycpKXtsZXQgcmV3cml0ZXM7KHtfX3Jld3JpdGVzOnJld3JpdGVzfT1hd2FpdCgwLF9yb3V0ZUxvYWRlci5nZXRDbGllbnRCdWlsZE1hbmlmZXN0KSgpKTtjb25zdCByZXdyaXRlc1Jlc3VsdD0oMCxfcmVzb2x2ZVJld3JpdGVzLmRlZmF1bHQpKGFkZEJhc2VQYXRoKGFkZExvY2FsZShhc1BhdGgsdGhpcy5sb2NhbGUpKSxwYWdlcyxyZXdyaXRlcyxwYXJzZWQucXVlcnkscD0+cmVzb2x2ZUR5bmFtaWNSb3V0ZShwLHBhZ2VzKSx0aGlzLmxvY2FsZXMpO3Jlc29sdmVkQXM9ZGVsTG9jYWxlKGRlbEJhc2VQYXRoKHJld3JpdGVzUmVzdWx0LmFzUGF0aCksdGhpcy5sb2NhbGUpO2lmKHJld3JpdGVzUmVzdWx0Lm1hdGNoZWRQYWdlJiZyZXdyaXRlc1Jlc3VsdC5yZXNvbHZlZEhyZWYpey8vIGlmIHRoaXMgZGlyZWN0bHkgbWF0Y2hlcyBhIHBhZ2Ugd2UgbmVlZCB0byB1cGRhdGUgdGhlIGhyZWYgdG9cbi8vIGFsbG93IHRoZSBjb3JyZWN0IHBhZ2UgY2h1bmsgdG8gYmUgbG9hZGVkXG5wYXRobmFtZT1yZXdyaXRlc1Jlc3VsdC5yZXNvbHZlZEhyZWY7cGFyc2VkLnBhdGhuYW1lPXBhdGhuYW1lO3VybD0oMCxfdXRpbHMuZm9ybWF0V2l0aFZhbGlkYXRpb24pKHBhcnNlZCk7fX1lbHNle3BhcnNlZC5wYXRobmFtZT1yZXNvbHZlRHluYW1pY1JvdXRlKHBhcnNlZC5wYXRobmFtZSxwYWdlcyk7aWYocGFyc2VkLnBhdGhuYW1lIT09cGF0aG5hbWUpe3BhdGhuYW1lPXBhcnNlZC5wYXRobmFtZTtwYXJzZWQucGF0aG5hbWU9cGF0aG5hbWU7dXJsPSgwLF91dGlscy5mb3JtYXRXaXRoVmFsaWRhdGlvbikocGFyc2VkKTt9fWNvbnN0IHJvdXRlPSgwLF9ub3JtYWxpemVUcmFpbGluZ1NsYXNoLnJlbW92ZVBhdGhUcmFpbGluZ1NsYXNoKShwYXRobmFtZSk7Ly8gUHJlZmV0Y2ggaXMgbm90IHN1cHBvcnRlZCBpbiBkZXZlbG9wbWVudCBtb2RlIGJlY2F1c2UgaXQgd291bGQgdHJpZ2dlciBvbi1kZW1hbmQtZW50cmllc1xuaWYocHJvY2Vzcy5lbnYuTk9ERV9FTlYhPT0ncHJvZHVjdGlvbicpe3JldHVybjt9YXdhaXQgUHJvbWlzZS5hbGwoW3RoaXMucGFnZUxvYWRlci5faXNTc2cocm91dGUpLnRoZW4oaXNTc2c9PntyZXR1cm4gaXNTc2c/dGhpcy5fZ2V0U3RhdGljRGF0YSh0aGlzLnBhZ2VMb2FkZXIuZ2V0RGF0YUhyZWYodXJsLHJlc29sdmVkQXMsdHJ1ZSx0eXBlb2Ygb3B0aW9ucy5sb2NhbGUhPT0ndW5kZWZpbmVkJz9vcHRpb25zLmxvY2FsZTp0aGlzLmxvY2FsZSkpOmZhbHNlO30pLHRoaXMucGFnZUxvYWRlcltvcHRpb25zLnByaW9yaXR5Pydsb2FkUGFnZSc6J3ByZWZldGNoJ10ocm91dGUpXSk7fWFzeW5jIGZldGNoQ29tcG9uZW50KHJvdXRlKXtsZXQgY2FuY2VsbGVkPWZhbHNlO2NvbnN0IGNhbmNlbD10aGlzLmNsYz0oKT0+e2NhbmNlbGxlZD10cnVlO307Y29uc3QgY29tcG9uZW50UmVzdWx0PWF3YWl0IHRoaXMucGFnZUxvYWRlci5sb2FkUGFnZShyb3V0ZSk7aWYoY2FuY2VsbGVkKXtjb25zdCBlcnJvcj1uZXcgRXJyb3IoYEFib3J0IGZldGNoaW5nIGNvbXBvbmVudCBmb3Igcm91dGU6IFwiJHtyb3V0ZX1cImApO2Vycm9yLmNhbmNlbGxlZD10cnVlO3Rocm93IGVycm9yO31pZihjYW5jZWw9PT10aGlzLmNsYyl7dGhpcy5jbGM9bnVsbDt9cmV0dXJuIGNvbXBvbmVudFJlc3VsdDt9X2dldERhdGEoZm4pe2xldCBjYW5jZWxsZWQ9ZmFsc2U7Y29uc3QgY2FuY2VsPSgpPT57Y2FuY2VsbGVkPXRydWU7fTt0aGlzLmNsYz1jYW5jZWw7cmV0dXJuIGZuKCkudGhlbihkYXRhPT57aWYoY2FuY2VsPT09dGhpcy5jbGMpe3RoaXMuY2xjPW51bGw7fWlmKGNhbmNlbGxlZCl7Y29uc3QgZXJyPW5ldyBFcnJvcignTG9hZGluZyBpbml0aWFsIHByb3BzIGNhbmNlbGxlZCcpO2Vyci5jYW5jZWxsZWQ9dHJ1ZTt0aHJvdyBlcnI7fXJldHVybiBkYXRhO30pO31fZ2V0U3RhdGljRGF0YShkYXRhSHJlZil7Y29uc3R7aHJlZjpjYWNoZUtleX09bmV3IFVSTChkYXRhSHJlZix3aW5kb3cubG9jYXRpb24uaHJlZik7aWYocHJvY2Vzcy5lbnYuTk9ERV9FTlY9PT0ncHJvZHVjdGlvbicmJiF0aGlzLmlzUHJldmlldyYmdGhpcy5zZGNbY2FjaGVLZXldKXtyZXR1cm4gUHJvbWlzZS5yZXNvbHZlKHRoaXMuc2RjW2NhY2hlS2V5XSk7fXJldHVybiBmZXRjaE5leHREYXRhKGRhdGFIcmVmLHRoaXMuaXNTc3IpLnRoZW4oZGF0YT0+e3RoaXMuc2RjW2NhY2hlS2V5XT1kYXRhO3JldHVybiBkYXRhO30pO31fZ2V0U2VydmVyRGF0YShkYXRhSHJlZil7Y29uc3R7aHJlZjpyZXNvdXJjZUtleX09bmV3IFVSTChkYXRhSHJlZix3aW5kb3cubG9jYXRpb24uaHJlZik7aWYodGhpcy5zZHJbcmVzb3VyY2VLZXldKXtyZXR1cm4gdGhpcy5zZHJbcmVzb3VyY2VLZXldO31yZXR1cm4gdGhpcy5zZHJbcmVzb3VyY2VLZXldPWZldGNoTmV4dERhdGEoZGF0YUhyZWYsdGhpcy5pc1NzcikudGhlbihkYXRhPT57ZGVsZXRlIHRoaXMuc2RyW3Jlc291cmNlS2V5XTtyZXR1cm4gZGF0YTt9KS5jYXRjaChlcnI9PntkZWxldGUgdGhpcy5zZHJbcmVzb3VyY2VLZXldO3Rocm93IGVycjt9KTt9Z2V0SW5pdGlhbFByb3BzKENvbXBvbmVudCxjdHgpe2NvbnN0e0NvbXBvbmVudDpBcHB9PXRoaXMuY29tcG9uZW50c1snL19hcHAnXTtjb25zdCBBcHBUcmVlPXRoaXMuX3dyYXBBcHAoQXBwKTtjdHguQXBwVHJlZT1BcHBUcmVlO3JldHVybigwLF91dGlscy5sb2FkR2V0SW5pdGlhbFByb3BzKShBcHAse0FwcFRyZWUsQ29tcG9uZW50LHJvdXRlcjp0aGlzLGN0eH0pO31hYm9ydENvbXBvbmVudExvYWQoYXMscm91dGVQcm9wcyl7aWYodGhpcy5jbGMpe1JvdXRlci5ldmVudHMuZW1pdCgncm91dGVDaGFuZ2VFcnJvcicsYnVpbGRDYW5jZWxsYXRpb25FcnJvcigpLGFzLHJvdXRlUHJvcHMpO3RoaXMuY2xjKCk7dGhpcy5jbGM9bnVsbDt9fW5vdGlmeShkYXRhLHJlc2V0U2Nyb2xsKXtyZXR1cm4gdGhpcy5zdWIoZGF0YSx0aGlzLmNvbXBvbmVudHNbJy9fYXBwJ10uQ29tcG9uZW50LHJlc2V0U2Nyb2xsKTt9fWV4cG9ydHMuZGVmYXVsdD1Sb3V0ZXI7Um91dGVyLmV2ZW50cz0oMCxfbWl0dC5kZWZhdWx0KSgpO1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9cm91dGVyLmpzLm1hcCIsIlwidXNlIHN0cmljdFwiO2V4cG9ydHMuX19lc01vZHVsZT10cnVlO2V4cG9ydHMuZm9ybWF0VXJsPWZvcm1hdFVybDt2YXIgcXVlcnlzdHJpbmc9X2ludGVyb3BSZXF1aXJlV2lsZGNhcmQocmVxdWlyZShcIi4vcXVlcnlzdHJpbmdcIikpO2Z1bmN0aW9uIF9nZXRSZXF1aXJlV2lsZGNhcmRDYWNoZSgpe2lmKHR5cGVvZiBXZWFrTWFwIT09XCJmdW5jdGlvblwiKXJldHVybiBudWxsO3ZhciBjYWNoZT1uZXcgV2Vha01hcCgpO19nZXRSZXF1aXJlV2lsZGNhcmRDYWNoZT1mdW5jdGlvbigpe3JldHVybiBjYWNoZTt9O3JldHVybiBjYWNoZTt9ZnVuY3Rpb24gX2ludGVyb3BSZXF1aXJlV2lsZGNhcmQob2JqKXtpZihvYmomJm9iai5fX2VzTW9kdWxlKXtyZXR1cm4gb2JqO31pZihvYmo9PT1udWxsfHx0eXBlb2Ygb2JqIT09XCJvYmplY3RcIiYmdHlwZW9mIG9iaiE9PVwiZnVuY3Rpb25cIil7cmV0dXJue2RlZmF1bHQ6b2JqfTt9dmFyIGNhY2hlPV9nZXRSZXF1aXJlV2lsZGNhcmRDYWNoZSgpO2lmKGNhY2hlJiZjYWNoZS5oYXMob2JqKSl7cmV0dXJuIGNhY2hlLmdldChvYmopO312YXIgbmV3T2JqPXt9O3ZhciBoYXNQcm9wZXJ0eURlc2NyaXB0b3I9T2JqZWN0LmRlZmluZVByb3BlcnR5JiZPYmplY3QuZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yO2Zvcih2YXIga2V5IGluIG9iail7aWYoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaixrZXkpKXt2YXIgZGVzYz1oYXNQcm9wZXJ0eURlc2NyaXB0b3I/T2JqZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvcihvYmosa2V5KTpudWxsO2lmKGRlc2MmJihkZXNjLmdldHx8ZGVzYy5zZXQpKXtPYmplY3QuZGVmaW5lUHJvcGVydHkobmV3T2JqLGtleSxkZXNjKTt9ZWxzZXtuZXdPYmpba2V5XT1vYmpba2V5XTt9fX1uZXdPYmouZGVmYXVsdD1vYmo7aWYoY2FjaGUpe2NhY2hlLnNldChvYmosbmV3T2JqKTt9cmV0dXJuIG5ld09iajt9Ly8gRm9ybWF0IGZ1bmN0aW9uIG1vZGlmaWVkIGZyb20gbm9kZWpzXG4vLyBDb3B5cmlnaHQgSm95ZW50LCBJbmMuIGFuZCBvdGhlciBOb2RlIGNvbnRyaWJ1dG9ycy5cbi8vXG4vLyBQZXJtaXNzaW9uIGlzIGhlcmVieSBncmFudGVkLCBmcmVlIG9mIGNoYXJnZSwgdG8gYW55IHBlcnNvbiBvYnRhaW5pbmcgYVxuLy8gY29weSBvZiB0aGlzIHNvZnR3YXJlIGFuZCBhc3NvY2lhdGVkIGRvY3VtZW50YXRpb24gZmlsZXMgKHRoZVxuLy8gXCJTb2Z0d2FyZVwiKSwgdG8gZGVhbCBpbiB0aGUgU29mdHdhcmUgd2l0aG91dCByZXN0cmljdGlvbiwgaW5jbHVkaW5nXG4vLyB3aXRob3V0IGxpbWl0YXRpb24gdGhlIHJpZ2h0cyB0byB1c2UsIGNvcHksIG1vZGlmeSwgbWVyZ2UsIHB1Ymxpc2gsXG4vLyBkaXN0cmlidXRlLCBzdWJsaWNlbnNlLCBhbmQvb3Igc2VsbCBjb3BpZXMgb2YgdGhlIFNvZnR3YXJlLCBhbmQgdG8gcGVybWl0XG4vLyBwZXJzb25zIHRvIHdob20gdGhlIFNvZnR3YXJlIGlzIGZ1cm5pc2hlZCB0byBkbyBzbywgc3ViamVjdCB0byB0aGVcbi8vIGZvbGxvd2luZyBjb25kaXRpb25zOlxuLy9cbi8vIFRoZSBhYm92ZSBjb3B5cmlnaHQgbm90aWNlIGFuZCB0aGlzIHBlcm1pc3Npb24gbm90aWNlIHNoYWxsIGJlIGluY2x1ZGVkXG4vLyBpbiBhbGwgY29waWVzIG9yIHN1YnN0YW50aWFsIHBvcnRpb25zIG9mIHRoZSBTb2Z0d2FyZS5cbi8vXG4vLyBUSEUgU09GVFdBUkUgSVMgUFJPVklERUQgXCJBUyBJU1wiLCBXSVRIT1VUIFdBUlJBTlRZIE9GIEFOWSBLSU5ELCBFWFBSRVNTXG4vLyBPUiBJTVBMSUVELCBJTkNMVURJTkcgQlVUIE5PVCBMSU1JVEVEIFRPIFRIRSBXQVJSQU5USUVTIE9GXG4vLyBNRVJDSEFOVEFCSUxJVFksIEZJVE5FU1MgRk9SIEEgUEFSVElDVUxBUiBQVVJQT1NFIEFORCBOT05JTkZSSU5HRU1FTlQuIElOXG4vLyBOTyBFVkVOVCBTSEFMTCBUSEUgQVVUSE9SUyBPUiBDT1BZUklHSFQgSE9MREVSUyBCRSBMSUFCTEUgRk9SIEFOWSBDTEFJTSxcbi8vIERBTUFHRVMgT1IgT1RIRVIgTElBQklMSVRZLCBXSEVUSEVSIElOIEFOIEFDVElPTiBPRiBDT05UUkFDVCwgVE9SVCBPUlxuLy8gT1RIRVJXSVNFLCBBUklTSU5HIEZST00sIE9VVCBPRiBPUiBJTiBDT05ORUNUSU9OIFdJVEggVEhFIFNPRlRXQVJFIE9SIFRIRVxuLy8gVVNFIE9SIE9USEVSIERFQUxJTkdTIElOIFRIRSBTT0ZUV0FSRS5cbmNvbnN0IHNsYXNoZWRQcm90b2NvbHM9L2h0dHBzP3xmdHB8Z29waGVyfGZpbGUvO2Z1bmN0aW9uIGZvcm1hdFVybCh1cmxPYmope2xldHthdXRoLGhvc3RuYW1lfT11cmxPYmo7bGV0IHByb3RvY29sPXVybE9iai5wcm90b2NvbHx8Jyc7bGV0IHBhdGhuYW1lPXVybE9iai5wYXRobmFtZXx8Jyc7bGV0IGhhc2g9dXJsT2JqLmhhc2h8fCcnO2xldCBxdWVyeT11cmxPYmoucXVlcnl8fCcnO2xldCBob3N0PWZhbHNlO2F1dGg9YXV0aD9lbmNvZGVVUklDb21wb25lbnQoYXV0aCkucmVwbGFjZSgvJTNBL2ksJzonKSsnQCc6Jyc7aWYodXJsT2JqLmhvc3Qpe2hvc3Q9YXV0aCt1cmxPYmouaG9zdDt9ZWxzZSBpZihob3N0bmFtZSl7aG9zdD1hdXRoKyh+aG9zdG5hbWUuaW5kZXhPZignOicpP2BbJHtob3N0bmFtZX1dYDpob3N0bmFtZSk7aWYodXJsT2JqLnBvcnQpe2hvc3QrPSc6Jyt1cmxPYmoucG9ydDt9fWlmKHF1ZXJ5JiZ0eXBlb2YgcXVlcnk9PT0nb2JqZWN0Jyl7cXVlcnk9U3RyaW5nKHF1ZXJ5c3RyaW5nLnVybFF1ZXJ5VG9TZWFyY2hQYXJhbXMocXVlcnkpKTt9bGV0IHNlYXJjaD11cmxPYmouc2VhcmNofHxxdWVyeSYmYD8ke3F1ZXJ5fWB8fCcnO2lmKHByb3RvY29sJiZwcm90b2NvbC5zdWJzdHIoLTEpIT09JzonKXByb3RvY29sKz0nOic7aWYodXJsT2JqLnNsYXNoZXN8fCghcHJvdG9jb2x8fHNsYXNoZWRQcm90b2NvbHMudGVzdChwcm90b2NvbCkpJiZob3N0IT09ZmFsc2Upe2hvc3Q9Jy8vJysoaG9zdHx8JycpO2lmKHBhdGhuYW1lJiZwYXRobmFtZVswXSE9PScvJylwYXRobmFtZT0nLycrcGF0aG5hbWU7fWVsc2UgaWYoIWhvc3Qpe2hvc3Q9Jyc7fWlmKGhhc2gmJmhhc2hbMF0hPT0nIycpaGFzaD0nIycraGFzaDtpZihzZWFyY2gmJnNlYXJjaFswXSE9PSc/JylzZWFyY2g9Jz8nK3NlYXJjaDtwYXRobmFtZT1wYXRobmFtZS5yZXBsYWNlKC9bPyNdL2csZW5jb2RlVVJJQ29tcG9uZW50KTtzZWFyY2g9c2VhcmNoLnJlcGxhY2UoJyMnLCclMjMnKTtyZXR1cm5gJHtwcm90b2NvbH0ke2hvc3R9JHtwYXRobmFtZX0ke3NlYXJjaH0ke2hhc2h9YDt9XG4vLyMgc291cmNlTWFwcGluZ1VSTD1mb3JtYXQtdXJsLmpzLm1hcCIsIlwidXNlIHN0cmljdFwiO2V4cG9ydHMuX19lc01vZHVsZT10cnVlO2V4cG9ydHMuaXNEeW5hbWljUm91dGU9aXNEeW5hbWljUm91dGU7Ly8gSWRlbnRpZnkgL1twYXJhbV0vIGluIHJvdXRlIHN0cmluZ1xuY29uc3QgVEVTVF9ST1VURT0vXFwvXFxbW14vXSs/XFxdKD89XFwvfCQpLztmdW5jdGlvbiBpc0R5bmFtaWNSb3V0ZShyb3V0ZSl7cmV0dXJuIFRFU1RfUk9VVEUudGVzdChyb3V0ZSk7fVxuLy8jIHNvdXJjZU1hcHBpbmdVUkw9aXMtZHluYW1pYy5qcy5tYXAiLCJcInVzZSBzdHJpY3RcIjtleHBvcnRzLl9fZXNNb2R1bGU9dHJ1ZTtleHBvcnRzLnBhcnNlUmVsYXRpdmVVcmw9cGFyc2VSZWxhdGl2ZVVybDt2YXIgX3V0aWxzPXJlcXVpcmUoXCIuLi8uLi91dGlsc1wiKTt2YXIgX3F1ZXJ5c3RyaW5nPXJlcXVpcmUoXCIuL3F1ZXJ5c3RyaW5nXCIpOy8qKlxuICogUGFyc2VzIHBhdGgtcmVsYXRpdmUgdXJscyAoZS5nLiBgL2hlbGxvL3dvcmxkP2Zvbz1iYXJgKS4gSWYgdXJsIGlzbid0IHBhdGgtcmVsYXRpdmVcbiAqIChlLmcuIGAuL2hlbGxvYCkgdGhlbiBhdCBsZWFzdCBiYXNlIG11c3QgYmUuXG4gKiBBYnNvbHV0ZSB1cmxzIGFyZSByZWplY3RlZCB3aXRoIG9uZSBleGNlcHRpb24sIGluIHRoZSBicm93c2VyLCBhYnNvbHV0ZSB1cmxzIHRoYXQgYXJlIG9uXG4gKiB0aGUgY3VycmVudCBvcmlnaW4gd2lsbCBiZSBwYXJzZWQgYXMgcmVsYXRpdmVcbiAqL2Z1bmN0aW9uIHBhcnNlUmVsYXRpdmVVcmwodXJsLGJhc2Upe2NvbnN0IGdsb2JhbEJhc2U9bmV3IFVSTCh0eXBlb2Ygd2luZG93PT09J3VuZGVmaW5lZCc/J2h0dHA6Ly9uJzooMCxfdXRpbHMuZ2V0TG9jYXRpb25PcmlnaW4pKCkpO2NvbnN0IHJlc29sdmVkQmFzZT1iYXNlP25ldyBVUkwoYmFzZSxnbG9iYWxCYXNlKTpnbG9iYWxCYXNlO2NvbnN0e3BhdGhuYW1lLHNlYXJjaFBhcmFtcyxzZWFyY2gsaGFzaCxocmVmLG9yaWdpbn09bmV3IFVSTCh1cmwscmVzb2x2ZWRCYXNlKTtpZihvcmlnaW4hPT1nbG9iYWxCYXNlLm9yaWdpbil7dGhyb3cgbmV3IEVycm9yKGBpbnZhcmlhbnQ6IGludmFsaWQgcmVsYXRpdmUgVVJMLCByb3V0ZXIgcmVjZWl2ZWQgJHt1cmx9YCk7fXJldHVybntwYXRobmFtZSxxdWVyeTooMCxfcXVlcnlzdHJpbmcuc2VhcmNoUGFyYW1zVG9VcmxRdWVyeSkoc2VhcmNoUGFyYW1zKSxzZWFyY2gsaGFzaCxocmVmOmhyZWYuc2xpY2UoZ2xvYmFsQmFzZS5vcmlnaW4ubGVuZ3RoKX07fVxuLy8jIHNvdXJjZU1hcHBpbmdVUkw9cGFyc2UtcmVsYXRpdmUtdXJsLmpzLm1hcCIsIlwidXNlIHN0cmljdFwiO2V4cG9ydHMuX19lc01vZHVsZT10cnVlO2V4cG9ydHMuc2VhcmNoUGFyYW1zVG9VcmxRdWVyeT1zZWFyY2hQYXJhbXNUb1VybFF1ZXJ5O2V4cG9ydHMudXJsUXVlcnlUb1NlYXJjaFBhcmFtcz11cmxRdWVyeVRvU2VhcmNoUGFyYW1zO2V4cG9ydHMuYXNzaWduPWFzc2lnbjtmdW5jdGlvbiBzZWFyY2hQYXJhbXNUb1VybFF1ZXJ5KHNlYXJjaFBhcmFtcyl7Y29uc3QgcXVlcnk9e307c2VhcmNoUGFyYW1zLmZvckVhY2goKHZhbHVlLGtleSk9PntpZih0eXBlb2YgcXVlcnlba2V5XT09PSd1bmRlZmluZWQnKXtxdWVyeVtrZXldPXZhbHVlO31lbHNlIGlmKEFycmF5LmlzQXJyYXkocXVlcnlba2V5XSkpeztxdWVyeVtrZXldLnB1c2godmFsdWUpO31lbHNle3F1ZXJ5W2tleV09W3F1ZXJ5W2tleV0sdmFsdWVdO319KTtyZXR1cm4gcXVlcnk7fWZ1bmN0aW9uIHN0cmluZ2lmeVVybFF1ZXJ5UGFyYW0ocGFyYW0pe2lmKHR5cGVvZiBwYXJhbT09PSdzdHJpbmcnfHx0eXBlb2YgcGFyYW09PT0nbnVtYmVyJyYmIWlzTmFOKHBhcmFtKXx8dHlwZW9mIHBhcmFtPT09J2Jvb2xlYW4nKXtyZXR1cm4gU3RyaW5nKHBhcmFtKTt9ZWxzZXtyZXR1cm4nJzt9fWZ1bmN0aW9uIHVybFF1ZXJ5VG9TZWFyY2hQYXJhbXModXJsUXVlcnkpe2NvbnN0IHJlc3VsdD1uZXcgVVJMU2VhcmNoUGFyYW1zKCk7T2JqZWN0LmVudHJpZXModXJsUXVlcnkpLmZvckVhY2goKFtrZXksdmFsdWVdKT0+e2lmKEFycmF5LmlzQXJyYXkodmFsdWUpKXt2YWx1ZS5mb3JFYWNoKGl0ZW09PnJlc3VsdC5hcHBlbmQoa2V5LHN0cmluZ2lmeVVybFF1ZXJ5UGFyYW0oaXRlbSkpKTt9ZWxzZXtyZXN1bHQuc2V0KGtleSxzdHJpbmdpZnlVcmxRdWVyeVBhcmFtKHZhbHVlKSk7fX0pO3JldHVybiByZXN1bHQ7fWZ1bmN0aW9uIGFzc2lnbih0YXJnZXQsLi4uc2VhcmNoUGFyYW1zTGlzdCl7c2VhcmNoUGFyYW1zTGlzdC5mb3JFYWNoKHNlYXJjaFBhcmFtcz0+e0FycmF5LmZyb20oc2VhcmNoUGFyYW1zLmtleXMoKSkuZm9yRWFjaChrZXk9PnRhcmdldC5kZWxldGUoa2V5KSk7c2VhcmNoUGFyYW1zLmZvckVhY2goKHZhbHVlLGtleSk9PnRhcmdldC5hcHBlbmQoa2V5LHZhbHVlKSk7fSk7cmV0dXJuIHRhcmdldDt9XG4vLyMgc291cmNlTWFwcGluZ1VSTD1xdWVyeXN0cmluZy5qcy5tYXAiLCJcInVzZSBzdHJpY3RcIjtleHBvcnRzLl9fZXNNb2R1bGU9dHJ1ZTtleHBvcnRzLmdldFJvdXRlTWF0Y2hlcj1nZXRSb3V0ZU1hdGNoZXI7ZnVuY3Rpb24gZ2V0Um91dGVNYXRjaGVyKHJvdXRlUmVnZXgpe2NvbnN0e3JlLGdyb3Vwc309cm91dGVSZWdleDtyZXR1cm4gcGF0aG5hbWU9Pntjb25zdCByb3V0ZU1hdGNoPXJlLmV4ZWMocGF0aG5hbWUpO2lmKCFyb3V0ZU1hdGNoKXtyZXR1cm4gZmFsc2U7fWNvbnN0IGRlY29kZT1wYXJhbT0+e3RyeXtyZXR1cm4gZGVjb2RlVVJJQ29tcG9uZW50KHBhcmFtKTt9Y2F0Y2goXyl7Y29uc3QgZXJyPW5ldyBFcnJvcignZmFpbGVkIHRvIGRlY29kZSBwYXJhbScpO2Vyci5jb2RlPSdERUNPREVfRkFJTEVEJzt0aHJvdyBlcnI7fX07Y29uc3QgcGFyYW1zPXt9O09iamVjdC5rZXlzKGdyb3VwcykuZm9yRWFjaChzbHVnTmFtZT0+e2NvbnN0IGc9Z3JvdXBzW3NsdWdOYW1lXTtjb25zdCBtPXJvdXRlTWF0Y2hbZy5wb3NdO2lmKG0hPT11bmRlZmluZWQpe3BhcmFtc1tzbHVnTmFtZV09fm0uaW5kZXhPZignLycpP20uc3BsaXQoJy8nKS5tYXAoZW50cnk9PmRlY29kZShlbnRyeSkpOmcucmVwZWF0P1tkZWNvZGUobSldOmRlY29kZShtKTt9fSk7cmV0dXJuIHBhcmFtczt9O31cbi8vIyBzb3VyY2VNYXBwaW5nVVJMPXJvdXRlLW1hdGNoZXIuanMubWFwIiwiXCJ1c2Ugc3RyaWN0XCI7ZXhwb3J0cy5fX2VzTW9kdWxlPXRydWU7ZXhwb3J0cy5nZXRSb3V0ZVJlZ2V4PWdldFJvdXRlUmVnZXg7Ly8gdGhpcyBpc24ndCBpbXBvcnRpbmcgdGhlIGVzY2FwZS1zdHJpbmctcmVnZXggbW9kdWxlXG4vLyB0byByZWR1Y2UgYnl0ZXNcbmZ1bmN0aW9uIGVzY2FwZVJlZ2V4KHN0cil7cmV0dXJuIHN0ci5yZXBsYWNlKC9bfFxcXFx7fSgpW1xcXV4kKyo/Li1dL2csJ1xcXFwkJicpO31mdW5jdGlvbiBwYXJzZVBhcmFtZXRlcihwYXJhbSl7Y29uc3Qgb3B0aW9uYWw9cGFyYW0uc3RhcnRzV2l0aCgnWycpJiZwYXJhbS5lbmRzV2l0aCgnXScpO2lmKG9wdGlvbmFsKXtwYXJhbT1wYXJhbS5zbGljZSgxLC0xKTt9Y29uc3QgcmVwZWF0PXBhcmFtLnN0YXJ0c1dpdGgoJy4uLicpO2lmKHJlcGVhdCl7cGFyYW09cGFyYW0uc2xpY2UoMyk7fXJldHVybntrZXk6cGFyYW0scmVwZWF0LG9wdGlvbmFsfTt9ZnVuY3Rpb24gZ2V0Um91dGVSZWdleChub3JtYWxpemVkUm91dGUpe2NvbnN0IHNlZ21lbnRzPShub3JtYWxpemVkUm91dGUucmVwbGFjZSgvXFwvJC8sJycpfHwnLycpLnNsaWNlKDEpLnNwbGl0KCcvJyk7Y29uc3QgZ3JvdXBzPXt9O2xldCBncm91cEluZGV4PTE7Y29uc3QgcGFyYW1ldGVyaXplZFJvdXRlPXNlZ21lbnRzLm1hcChzZWdtZW50PT57aWYoc2VnbWVudC5zdGFydHNXaXRoKCdbJykmJnNlZ21lbnQuZW5kc1dpdGgoJ10nKSl7Y29uc3R7a2V5LG9wdGlvbmFsLHJlcGVhdH09cGFyc2VQYXJhbWV0ZXIoc2VnbWVudC5zbGljZSgxLC0xKSk7Z3JvdXBzW2tleV09e3Bvczpncm91cEluZGV4KysscmVwZWF0LG9wdGlvbmFsfTtyZXR1cm4gcmVwZWF0P29wdGlvbmFsPycoPzovKC4rPykpPyc6Jy8oLis/KSc6Jy8oW14vXSs/KSc7fWVsc2V7cmV0dXJuYC8ke2VzY2FwZVJlZ2V4KHNlZ21lbnQpfWA7fX0pLmpvaW4oJycpOy8vIGRlYWQgY29kZSBlbGltaW5hdGUgZm9yIGJyb3dzZXIgc2luY2UgaXQncyBvbmx5IG5lZWRlZFxuLy8gd2hpbGUgZ2VuZXJhdGluZyByb3V0ZXMtbWFuaWZlc3RcbmlmKHR5cGVvZiB3aW5kb3c9PT0ndW5kZWZpbmVkJyl7bGV0IHJvdXRlS2V5Q2hhckNvZGU9OTc7bGV0IHJvdXRlS2V5Q2hhckxlbmd0aD0xOy8vIGJ1aWxkcyBhIG1pbmltYWwgcm91dGVLZXkgdXNpbmcgb25seSBhLXogYW5kIG1pbmltYWwgbnVtYmVyIG9mIGNoYXJhY3RlcnNcbmNvbnN0IGdldFNhZmVSb3V0ZUtleT0oKT0+e2xldCByb3V0ZUtleT0nJztmb3IobGV0IGk9MDtpPHJvdXRlS2V5Q2hhckxlbmd0aDtpKyspe3JvdXRlS2V5Kz1TdHJpbmcuZnJvbUNoYXJDb2RlKHJvdXRlS2V5Q2hhckNvZGUpO3JvdXRlS2V5Q2hhckNvZGUrKztpZihyb3V0ZUtleUNoYXJDb2RlPjEyMil7cm91dGVLZXlDaGFyTGVuZ3RoKys7cm91dGVLZXlDaGFyQ29kZT05Nzt9fXJldHVybiByb3V0ZUtleTt9O2NvbnN0IHJvdXRlS2V5cz17fTtsZXQgbmFtZWRQYXJhbWV0ZXJpemVkUm91dGU9c2VnbWVudHMubWFwKHNlZ21lbnQ9PntpZihzZWdtZW50LnN0YXJ0c1dpdGgoJ1snKSYmc2VnbWVudC5lbmRzV2l0aCgnXScpKXtjb25zdHtrZXksb3B0aW9uYWwscmVwZWF0fT1wYXJzZVBhcmFtZXRlcihzZWdtZW50LnNsaWNlKDEsLTEpKTsvLyByZXBsYWNlIGFueSBub24td29yZCBjaGFyYWN0ZXJzIHNpbmNlIHRoZXkgY2FuIGJyZWFrXG4vLyB0aGUgbmFtZWQgcmVnZXhcbmxldCBjbGVhbmVkS2V5PWtleS5yZXBsYWNlKC9cXFcvZywnJyk7bGV0IGludmFsaWRLZXk9ZmFsc2U7Ly8gY2hlY2sgaWYgdGhlIGtleSBpcyBzdGlsbCBpbnZhbGlkIGFuZCBmYWxsYmFjayB0byB1c2luZyBhIGtub3duXG4vLyBzYWZlIGtleVxuaWYoY2xlYW5lZEtleS5sZW5ndGg9PT0wfHxjbGVhbmVkS2V5Lmxlbmd0aD4zMCl7aW52YWxpZEtleT10cnVlO31pZighaXNOYU4ocGFyc2VJbnQoY2xlYW5lZEtleS5zdWJzdHIoMCwxKSkpKXtpbnZhbGlkS2V5PXRydWU7fWlmKGludmFsaWRLZXkpe2NsZWFuZWRLZXk9Z2V0U2FmZVJvdXRlS2V5KCk7fXJvdXRlS2V5c1tjbGVhbmVkS2V5XT1rZXk7cmV0dXJuIHJlcGVhdD9vcHRpb25hbD9gKD86Lyg/PCR7Y2xlYW5lZEtleX0+Lis/KSk/YDpgLyg/PCR7Y2xlYW5lZEtleX0+Lis/KWA6YC8oPzwke2NsZWFuZWRLZXl9PlteL10rPylgO31lbHNle3JldHVybmAvJHtlc2NhcGVSZWdleChzZWdtZW50KX1gO319KS5qb2luKCcnKTtyZXR1cm57cmU6bmV3IFJlZ0V4cChgXiR7cGFyYW1ldGVyaXplZFJvdXRlfSg/Oi8pPyRgKSxncm91cHMscm91dGVLZXlzLG5hbWVkUmVnZXg6YF4ke25hbWVkUGFyYW1ldGVyaXplZFJvdXRlfSg/Oi8pPyRgfTt9cmV0dXJue3JlOm5ldyBSZWdFeHAoYF4ke3BhcmFtZXRlcml6ZWRSb3V0ZX0oPzovKT8kYCksZ3JvdXBzfTt9XG4vLyMgc291cmNlTWFwcGluZ1VSTD1yb3V0ZS1yZWdleC5qcy5tYXAiLCJcInVzZSBzdHJpY3RcIjtleHBvcnRzLl9fZXNNb2R1bGU9dHJ1ZTtleHBvcnRzLmV4ZWNPbmNlPWV4ZWNPbmNlO2V4cG9ydHMuZ2V0TG9jYXRpb25PcmlnaW49Z2V0TG9jYXRpb25PcmlnaW47ZXhwb3J0cy5nZXRVUkw9Z2V0VVJMO2V4cG9ydHMuZ2V0RGlzcGxheU5hbWU9Z2V0RGlzcGxheU5hbWU7ZXhwb3J0cy5pc1Jlc1NlbnQ9aXNSZXNTZW50O2V4cG9ydHMubG9hZEdldEluaXRpYWxQcm9wcz1sb2FkR2V0SW5pdGlhbFByb3BzO2V4cG9ydHMuZm9ybWF0V2l0aFZhbGlkYXRpb249Zm9ybWF0V2l0aFZhbGlkYXRpb247ZXhwb3J0cy5TVD1leHBvcnRzLlNQPWV4cG9ydHMudXJsT2JqZWN0S2V5cz12b2lkIDA7dmFyIF9mb3JtYXRVcmw9cmVxdWlyZShcIi4vcm91dGVyL3V0aWxzL2Zvcm1hdC11cmxcIik7LyoqXG4gKiBVdGlsc1xuICovZnVuY3Rpb24gZXhlY09uY2UoZm4pe2xldCB1c2VkPWZhbHNlO2xldCByZXN1bHQ7cmV0dXJuKC4uLmFyZ3MpPT57aWYoIXVzZWQpe3VzZWQ9dHJ1ZTtyZXN1bHQ9Zm4oLi4uYXJncyk7fXJldHVybiByZXN1bHQ7fTt9ZnVuY3Rpb24gZ2V0TG9jYXRpb25PcmlnaW4oKXtjb25zdHtwcm90b2NvbCxob3N0bmFtZSxwb3J0fT13aW5kb3cubG9jYXRpb247cmV0dXJuYCR7cHJvdG9jb2x9Ly8ke2hvc3RuYW1lfSR7cG9ydD8nOicrcG9ydDonJ31gO31mdW5jdGlvbiBnZXRVUkwoKXtjb25zdHtocmVmfT13aW5kb3cubG9jYXRpb247Y29uc3Qgb3JpZ2luPWdldExvY2F0aW9uT3JpZ2luKCk7cmV0dXJuIGhyZWYuc3Vic3RyaW5nKG9yaWdpbi5sZW5ndGgpO31mdW5jdGlvbiBnZXREaXNwbGF5TmFtZShDb21wb25lbnQpe3JldHVybiB0eXBlb2YgQ29tcG9uZW50PT09J3N0cmluZyc/Q29tcG9uZW50OkNvbXBvbmVudC5kaXNwbGF5TmFtZXx8Q29tcG9uZW50Lm5hbWV8fCdVbmtub3duJzt9ZnVuY3Rpb24gaXNSZXNTZW50KHJlcyl7cmV0dXJuIHJlcy5maW5pc2hlZHx8cmVzLmhlYWRlcnNTZW50O31hc3luYyBmdW5jdGlvbiBsb2FkR2V0SW5pdGlhbFByb3BzKEFwcCxjdHgpe2lmKHByb2Nlc3MuZW52Lk5PREVfRU5WIT09J3Byb2R1Y3Rpb24nKXt2YXIgX0FwcCRwcm90b3R5cGU7aWYoKF9BcHAkcHJvdG90eXBlPUFwcC5wcm90b3R5cGUpIT1udWxsJiZfQXBwJHByb3RvdHlwZS5nZXRJbml0aWFsUHJvcHMpe2NvbnN0IG1lc3NhZ2U9YFwiJHtnZXREaXNwbGF5TmFtZShBcHApfS5nZXRJbml0aWFsUHJvcHMoKVwiIGlzIGRlZmluZWQgYXMgYW4gaW5zdGFuY2UgbWV0aG9kIC0gdmlzaXQgaHR0cHM6Ly9uZXh0anMub3JnL2RvY3MvbWVzc2FnZXMvZ2V0LWluaXRpYWwtcHJvcHMtYXMtYW4taW5zdGFuY2UtbWV0aG9kIGZvciBtb3JlIGluZm9ybWF0aW9uLmA7dGhyb3cgbmV3IEVycm9yKG1lc3NhZ2UpO319Ly8gd2hlbiBjYWxsZWQgZnJvbSBfYXBwIGBjdHhgIGlzIG5lc3RlZCBpbiBgY3R4YFxuY29uc3QgcmVzPWN0eC5yZXN8fGN0eC5jdHgmJmN0eC5jdHgucmVzO2lmKCFBcHAuZ2V0SW5pdGlhbFByb3BzKXtpZihjdHguY3R4JiZjdHguQ29tcG9uZW50KXsvLyBAdHMtaWdub3JlIHBhZ2VQcm9wcyBkZWZhdWx0XG5yZXR1cm57cGFnZVByb3BzOmF3YWl0IGxvYWRHZXRJbml0aWFsUHJvcHMoY3R4LkNvbXBvbmVudCxjdHguY3R4KX07fXJldHVybnt9O31jb25zdCBwcm9wcz1hd2FpdCBBcHAuZ2V0SW5pdGlhbFByb3BzKGN0eCk7aWYocmVzJiZpc1Jlc1NlbnQocmVzKSl7cmV0dXJuIHByb3BzO31pZighcHJvcHMpe2NvbnN0IG1lc3NhZ2U9YFwiJHtnZXREaXNwbGF5TmFtZShBcHApfS5nZXRJbml0aWFsUHJvcHMoKVwiIHNob3VsZCByZXNvbHZlIHRvIGFuIG9iamVjdC4gQnV0IGZvdW5kIFwiJHtwcm9wc31cIiBpbnN0ZWFkLmA7dGhyb3cgbmV3IEVycm9yKG1lc3NhZ2UpO31pZihwcm9jZXNzLmVudi5OT0RFX0VOViE9PSdwcm9kdWN0aW9uJyl7aWYoT2JqZWN0LmtleXMocHJvcHMpLmxlbmd0aD09PTAmJiFjdHguY3R4KXtjb25zb2xlLndhcm4oYCR7Z2V0RGlzcGxheU5hbWUoQXBwKX0gcmV0dXJuZWQgYW4gZW1wdHkgb2JqZWN0IGZyb20gXFxgZ2V0SW5pdGlhbFByb3BzXFxgLiBUaGlzIGRlLW9wdGltaXplcyBhbmQgcHJldmVudHMgYXV0b21hdGljIHN0YXRpYyBvcHRpbWl6YXRpb24uIGh0dHBzOi8vbmV4dGpzLm9yZy9kb2NzL21lc3NhZ2VzL2VtcHR5LW9iamVjdC1nZXRJbml0aWFsUHJvcHNgKTt9fXJldHVybiBwcm9wczt9Y29uc3QgdXJsT2JqZWN0S2V5cz1bJ2F1dGgnLCdoYXNoJywnaG9zdCcsJ2hvc3RuYW1lJywnaHJlZicsJ3BhdGgnLCdwYXRobmFtZScsJ3BvcnQnLCdwcm90b2NvbCcsJ3F1ZXJ5Jywnc2VhcmNoJywnc2xhc2hlcyddO2V4cG9ydHMudXJsT2JqZWN0S2V5cz11cmxPYmplY3RLZXlzO2Z1bmN0aW9uIGZvcm1hdFdpdGhWYWxpZGF0aW9uKHVybCl7aWYocHJvY2Vzcy5lbnYuTk9ERV9FTlY9PT0nZGV2ZWxvcG1lbnQnKXtpZih1cmwhPT1udWxsJiZ0eXBlb2YgdXJsPT09J29iamVjdCcpe09iamVjdC5rZXlzKHVybCkuZm9yRWFjaChrZXk9PntpZih1cmxPYmplY3RLZXlzLmluZGV4T2Yoa2V5KT09PS0xKXtjb25zb2xlLndhcm4oYFVua25vd24ga2V5IHBhc3NlZCB2aWEgdXJsT2JqZWN0IGludG8gdXJsLmZvcm1hdDogJHtrZXl9YCk7fX0pO319cmV0dXJuKDAsX2Zvcm1hdFVybC5mb3JtYXRVcmwpKHVybCk7fWNvbnN0IFNQPXR5cGVvZiBwZXJmb3JtYW5jZSE9PSd1bmRlZmluZWQnO2V4cG9ydHMuU1A9U1A7Y29uc3QgU1Q9U1AmJnR5cGVvZiBwZXJmb3JtYW5jZS5tYXJrPT09J2Z1bmN0aW9uJyYmdHlwZW9mIHBlcmZvcm1hbmNlLm1lYXN1cmU9PT0nZnVuY3Rpb24nO2V4cG9ydHMuU1Q9U1Q7XG4vLyMgc291cmNlTWFwcGluZ1VSTD11dGlscy5qcy5tYXAiLCJcbiAgICBpbXBvcnQgX19pMThuQ29uZmlnIGZyb20gJ0BuZXh0LXRyYW5zbGF0ZS1yb290L2kxOG4nXG4gICAgaW1wb3J0IF9fYXBwV2l0aEkxOG4gZnJvbSAnbmV4dC10cmFuc2xhdGUvYXBwV2l0aEkxOG4nXG4gICAgXG5pbXBvcnQgJy4vLi4vc3R5bGVzL2dsb2JhbHMuY3NzJ1xyXG5pbXBvcnQgJy4vLi4vc3R5bGVzL2NhbGVuZGFyLnNjc3MnXHJcbmltcG9ydCAncmVhY3QtdG9hc3RpZnkvZGlzdC9SZWFjdFRvYXN0aWZ5LmNzcyc7XHJcblxyXG5pbXBvcnQgSGVhZCBmcm9tICduZXh0L2hlYWQnXHJcbmltcG9ydCBMYXlvdXRXcmFwcGVyIGZyb20gJy4vLi4vbGF5b3V0cy9sYXlvdXQtd3JhcHBlcic7XHJcbmltcG9ydCB7IFByb3ZpZGVyIH0gZnJvbSAncmVhY3QtcmVkdXgnXHJcbmltcG9ydCBzdG9yZSBmcm9tICcuLi9yZWR1eC9zdG9yZSdcclxuaW1wb3J0IHsgcmVzZXRTZXJ2ZXJDb250ZXh0IH0gZnJvbSAncmVhY3QtYmVhdXRpZnVsLWRuZCc7XHJcbmltcG9ydFwiLi8uLi9zdHlsZXMvc3RhdGljLWVtcHR5LmNzc1wiO1xyXG5jb25zdCBfX1BhZ2VfTmV4dF9UcmFuc2xhdGVfXyA9IGZ1bmN0aW9uIE15QXBwKHsgQ29tcG9uZW50LCBwYWdlUHJvcHMgfSkge1xyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPFByb3ZpZGVyIHN0b3JlPXtzdG9yZX0+XHJcbiAgICAgIDxIZWFkPlxyXG4gICAgICAgIDx0aXRsZT5Gb290QmV0PC90aXRsZT5cclxuICAgICAgICA8bWV0YSBuYW1lPVwidmlld3BvcnRcIiBjb250ZW50PVwiaW5pdGlhbC1zY2FsZT0xLjAsIHdpZHRoPWRldmljZS13aWR0aFwiIC8+XHJcbiAgICAgICAgPHNjcmlwdCB0eXBlPVwidGV4dC9qYXZhc2NyaXB0XCIgc3JjPVwiLy92ay5jb20vanMvYXBpL29wZW5hcGkuanM/MTUyXCI+PC9zY3JpcHQ+XHJcbiAgICAgIDwvSGVhZD5cclxuICAgICAgPExheW91dFdyYXBwZXIgey4uLnBhZ2VQcm9wc30+XHJcbiAgICAgICAgPENvbXBvbmVudCB7Li4ucGFnZVByb3BzfSAvPlxyXG4gICAgICA8L0xheW91dFdyYXBwZXI+XHJcbiAgICA8L1Byb3ZpZGVyPlxyXG4gIClcclxufVxyXG5cclxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGdldFNlcnZlclNpZGVQcm9wcyhjb250ZXh0KSB7XHJcblxyXG4gIHJlc2V0U2VydmVyQ29udGV4dCgpXHJcblxyXG4gIHJldHVybiB7XHJcbiAgICBwcm9wczoge30sIC8vIHdpbGwgYmUgcGFzc2VkIHRvIHRoZSBwYWdlIGNvbXBvbmVudCBhcyBwcm9wc1xyXG4gIH1cclxufVxuXG4gICAgZXhwb3J0IGRlZmF1bHQgX19hcHBXaXRoSTE4bihfX1BhZ2VfTmV4dF9UcmFuc2xhdGVfXywge1xuICAgICAgLi4uX19pMThuQ29uZmlnLFxuICAgICAgaXNMb2FkZXI6IHRydWUsXG4gICAgICBza2lwSW5pdGlhbFByb3BzOiB0cnVlLFxuICAgICAgbG9hZExvY2FsZUZyb206IChsLCBuKSA9PiBpbXBvcnQoYEBuZXh0LXRyYW5zbGF0ZS1yb290L2xvY2FsZXMvJHtsfS8ke259YCkudGhlbihtID0+IG0uZGVmYXVsdCksXG4gICAgfSk7XG4gICIsImltcG9ydCB7IGNyZWF0ZVNsaWNlIH0gZnJvbSAnQHJlZHV4anMvdG9vbGtpdCdcclxuXHJcblxyXG5leHBvcnQgY29uc3QgbWF0Y2hTbGljZSA9IGNyZWF0ZVNsaWNlKHtcclxuICAgIG5hbWU6IFwidXNlclwiLFxyXG4gICAgaW5pdGlhbFN0YXRlOiB7XHJcbiAgICAgICAgbWF0Y2hJZDogbnVsbFxyXG4gICAgfSxcclxuICAgIHJlZHVjZXJzOiB7XHJcbiAgICAgICAgc2V0TWF0Y2hJZDogKHN0YXRlLCBhY3Rpb24pID0+IHtcclxuICAgICAgICAgICAgc3RhdGUubWF0Y2hJZCA9IGFjdGlvbi5wYXlsb2FkXHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59KVxyXG5cclxuXHJcbmV4cG9ydCBjb25zdCB7IHNldE1hdGNoSWQgfSA9IG1hdGNoU2xpY2UuYWN0aW9uc1xyXG5cclxuZXhwb3J0IGNvbnN0IGdldE1hdGNoSWQgPSBzdGF0ZSA9PiBzdGF0ZS5tYXRjaC5tYXRjaElkXHJcblxyXG5leHBvcnQgZGVmYXVsdCBtYXRjaFNsaWNlLnJlZHVjZXIiLCJpbXBvcnQgeyBjcmVhdGVTbGljZSB9IGZyb20gJ0ByZWR1eGpzL3Rvb2xraXQnXHJcblxyXG5cclxuZXhwb3J0IGNvbnN0IHVzZXJTbGljZSA9IGNyZWF0ZVNsaWNlKHtcclxuICAgIG5hbWU6IFwidXNlclwiLFxyXG4gICAgaW5pdGlhbFN0YXRlOiB7XHJcbiAgICAgICAgdXNlcjogbnVsbFxyXG4gICAgfSxcclxuICAgIHJlZHVjZXJzOiB7XHJcbiAgICAgICAgbG9naW46IChzdGF0ZSwgYWN0aW9uKSA9PiB7XHJcbiAgICAgICAgICAgIHN0YXRlLnVzZXIgPSBhY3Rpb24ucGF5bG9hZFxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgbG9nb3V0OiBzdGF0ZSA9PiB7XHJcbiAgICAgICAgICAgIHN0YXRlLnVzZXIgPSBudWxsXHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59KVxyXG5cclxuXHJcbmV4cG9ydCBjb25zdCB7IGxvZ2luLCBsb2dvdXQgfSA9IHVzZXJTbGljZS5hY3Rpb25zXHJcblxyXG5leHBvcnQgY29uc3Qgc2VsZWN0VXNlciA9IHN0YXRlID0+IHN0YXRlLnVzZXIudXNlclxyXG5cclxuZXhwb3J0IGRlZmF1bHQgdXNlclNsaWNlLnJlZHVjZXIiLCIvLyBpbXBvcnQgeyBjcmVhdGVTdG9yZSB9IGZyb20gJ3JlZHV4J1xyXG5cclxuLy8gZXhwb3J0IGNvbnN0IHN0b3JlID0gY3JlYXRlU3RvcmUoLypyZWR1Y2VyIGZ1bmN0aW9uKi8oc3RhdGUsIGFjdGlvbikgPT4ge1xyXG4vLyAgICAgaWYgKGFjdGlvbi50eXBlID09PSBcImxvZ2luXCIpIHtcclxuLy8gICAgICAgICByZXR1cm4ge1xyXG4vLyAgICAgICAgICAgICAuLi5zdGF0ZSxcclxuLy8gICAgICAgICAgICAgY3VycmVudFVzZXI6IHtcclxuLy8gICAgICAgICAgICAgICAgIG5hbWU6IGFjdGlvbi5wYXlsb2FkLm5hbWVcclxuLy8gICAgICAgICAgICAgfVxyXG4vLyAgICAgICAgIH1cclxuLy8gICAgIH1cclxuLy8gICAgIHJldHVybiBzdGF0ZVxyXG4vLyB9LCB7XHJcbi8vICAgICBjdXJyZW50VXNlcjoge1xyXG4vLyAgICAgICAgIG5hbWU6ICdFcmlrIE11cmFkeWFuJ1xyXG4vLyAgICAgfVxyXG4vLyB9KVxyXG5cclxuaW1wb3J0IHsgY29uZmlndXJlU3RvcmUgfSBmcm9tIFwiQHJlZHV4anMvdG9vbGtpdFwiO1xyXG5pbXBvcnQgdXNlclJlZHVjZXIgZnJvbSBcIi4vZmVhdHVyZXMvdXNlclNsaWNlXCI7XHJcbmltcG9ydCBtYXRjaFJlZHVjZXIgZnJvbSBcIi4vZmVhdHVyZXMvbWF0Y2hTbGljZVwiO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgY29uZmlndXJlU3RvcmUoe1xyXG4gICAgcmVkdWNlcjoge1xyXG4gICAgICAgIHVzZXI6IHVzZXJSZWR1Y2VyLFxyXG4gICAgICAgIG1hdGNoOiBtYXRjaFJlZHVjZXJcclxuICAgIH1cclxufSlcclxuXHJcbiIsImltcG9ydCB1c2VySWNvbiBmcm9tICcvcHVibGljL2ltYWdlcy9jb21tb24vdXNlcnBob3RvLnBuZydcclxuXHJcbmV4cG9ydCBjb25zdCB1c2VyX2RhdGEgPSB7XHJcbiAgICBwaG90bzogdXNlckljb24uc3JjLFxyXG4gICAgYmlydGhEYXRlOiAnMTIuMDMuMTk3OCcsXHJcbiAgICB0ZWxlcGhvbmU6ICcrNDk1IC0yNTQtMjQtNzUnLFxyXG4gICAgZnVsbE5hbWU6ICfQkNC70LXQutGB0LDQvdC00YAg0JzQuNGF0LDQtdCy0LAnLFxyXG4gICAgZW1haWw6ICcgYWxleC5taWtoYWV2YS4xOUBtYWlsLnJ1J1xyXG59IiwiZXhwb3J0IGRlZmF1bHQgIHtcInNyY1wiOlwiL19uZXh0L3N0YXRpYy9pbWFnZS9wdWJsaWMvaW1hZ2VzL2NvbW1vbi9waG9uZS4zMDIxNjAxOTE5ODBjZjNmZWJiMWVhNGVmNDQ1MTk0Yi5wbmdcIixcImhlaWdodFwiOjE2LFwid2lkdGhcIjoxNixcImJsdXJEYXRhVVJMXCI6XCJkYXRhOmltYWdlL3BuZztiYXNlNjQsaVZCT1J3MEtHZ29BQUFBTlNVaEVVZ0FBQUFnQUFBQUlDQVlBQUFERUQ3NkxBQUFBNTBsRVFWUjQybVA0Ly84L3c5ZjNIMWcrdjNzdi9PZjNiM0VnWC9Edm56OEMzejkvWVFISk1YeDUreDdFRUFKaWJpQVd1Ynh1cHhhUUZnVmlZWkFpQmlDRDkrNytrNnBMTktLbTdtMmU3TFJDTTc1NlExQnhIRkJjN04vZnY0SWdCZnpISnkweG5zdmc4bjlYWlkvSGtiYlo1cXVNa3d1dmI5Mm5EaktaNGNmWHJ4SWc0NWVZUk05YmFoWTdkMC9ESk5kOXpWTWNRVmI4L3ZWTG5PSG50KytDSUR2ZjMzc2l2ZFEwWnQ1Y0J0Zi9TN1NpcGdMRmVENi9meThNc29MNTEvY2ZZaUJGSU1HVFU1WWFQVDUxU1Fuc3lJK2Z3WTRFS3dLWkJMV09INGo1dm4zNENQWW1BR3pscTF3RVNIV0dBQUFBQUVsRlRrU3VRbUNDXCJ9OyIsImV4cG9ydCBkZWZhdWx0ICB7XCJzcmNcIjpcIi9fbmV4dC9zdGF0aWMvaW1hZ2UvcHVibGljL2ltYWdlcy9jb21tb24vdHJpYW5nbGUuNTRiYTM5NWIxNDdkNmQxZDEzMmE4OTZhMGZjZjU4MDcucG5nXCIsXCJoZWlnaHRcIjo3LFwid2lkdGhcIjoxMCxcImJsdXJEYXRhVVJMXCI6XCJkYXRhOmltYWdlL3BuZztiYXNlNjQsaVZCT1J3MEtHZ29BQUFBTlNVaEVVZ0FBQUFnQUFBQUdDQVlBQUFEK0JkLzdBQUFBaEVsRVFWUjQyazNMc1kwQ1FBeEUwZEZlZkFHaUFVUWhoRlJBVEJHQWhFUUw5RUFuOUVCS1NnMGsyR012UDJTbHA3SHNIVlhWMnZZbDdRTjVNcGlQNUpuYlN0Rzl6TzZIdTJmaUorL1YvYStvRXJaWkZTeVRuSGhINWtiaXpUa0hDK0ZtanFhTkszdGhpUGJvYm1IQjRjWEg1eWRpR1JIQ1VOckNuMG5zbVBkRkFVT1N2c1BxbXdMRXlMcVNBQUFBQUVsRlRrU3VRbUNDXCJ9OyIsImV4cG9ydCBkZWZhdWx0ICB7XCJzcmNcIjpcIi9fbmV4dC9zdGF0aWMvaW1hZ2UvcHVibGljL2ltYWdlcy9jb21tb24vdXNlckRlZmF1bHQuMDgxNGMyNGIyMzkxMzhhODE3NWZhZGQyNTU0Mjc4YTAucG5nXCIsXCJoZWlnaHRcIjozNSxcIndpZHRoXCI6MzYsXCJibHVyRGF0YVVSTFwiOlwiZGF0YTppbWFnZS9wbmc7YmFzZTY0LGlWQk9SdzBLR2dvQUFBQU5TVWhFVWdBQUFBZ0FBQUFJQ0FZQUFBREVENzZMQUFBQXIwbEVRVlI0MmpXTU1RckNVQkJFOXhLQ1dIZ0VDOEhDazJnYVBWSUNTaUNnaFZXaXR0WW1wZGdrMm1uaEZRUWxKQnJkelF3a0MrLy9ZV1lZTVROUjFUSCtEUHhBQmM3d2hzd1lqa0JodVBpWWFCd25TZzN2QlFZc25HZ1VSZmtWRVFQVW42YVVzRkJSQTNQZGhYcmVrcnBkZVVzN0h3UXJuVTVtNmpoejlmMkFCZDVUOEJ6eVBPZDBDZjZFbWg1dXowSWZLNDgwdlZnVTdTd010NVpsVjg3ZmtIVlpJRDJ3QWZlR05laVltZFJRQU5FVCtHcG1jQUFBQUFCSlJVNUVya0pnZ2c9PVwifTsiLCJleHBvcnQgZGVmYXVsdCAge1wic3JjXCI6XCIvX25leHQvc3RhdGljL2ltYWdlL3B1YmxpYy9pbWFnZXMvY29tbW9uL3VzZXJwaG90by4wODQ3YzViN2MxM2U0MDkzMTA3YTExNTRhODRkMjM1Mi5wbmdcIixcImhlaWdodFwiOjQyNixcIndpZHRoXCI6NDQ1LFwiYmx1ckRhdGFVUkxcIjpcImRhdGE6aW1hZ2UvcG5nO2Jhc2U2NCxpVkJPUncwS0dnb0FBQUFOU1VoRVVnQUFBQWdBQUFBSUNBWUFBQURFRDc2TEFBQUE2VWxFUVZSNDJpV011MG9EVVJSRjk3bHo1MkVoWXFvUThCRXM3SzM4Qml0YjhmOHNCUXMvUUxBVkE0R2tVQ3hFWjhiTVpNaG9FaWYzY1U2NHBOcWJ2UmNMWDlXY3EvYVgxOVp5UHF2NDhlRmVta1hMTE1MR2UxYUtpQ0NDS05JMGVYMUIrM3lIdHY0aEFoQjJGU0owRnNqNTZRQkptaUhOOWdUWVBjcDVIeHkwWEsxcHNkR2tqaTlnVlV4T0FCYUJkczZMOTR6UHNzRjcwV0Y0ZVkzSld3a25NWTc2aDFEZWV4anJRR3h3ZGlENG0xY1VpY1ZzOUlSVm5VTWJheWhKVTFGZFE0UC9xZlE0UnBHWHRGa1c4cEhwQUZpWXJvUGU3MkU4YXFqNW5tSmNKN2k2dVVWL2VJSXRsSXFDK1pZWHVRRUFBQUFBU1VWT1JLNUNZSUk9XCJ9OyIsImV4cG9ydCBkZWZhdWx0ICB7XCJzcmNcIjpcIi9fbmV4dC9zdGF0aWMvaW1hZ2UvcHVibGljL2ltYWdlcy9mb290ZXIvbGVmdEJhbGwuOWQ5MTM0NThlNjEwNjkzZGNjZTdkOWIxOTE3NTVlZjIucG5nXCIsXCJoZWlnaHRcIjozNTgsXCJ3aWR0aFwiOjQ1MixcImJsdXJEYXRhVVJMXCI6XCJkYXRhOmltYWdlL3BuZztiYXNlNjQsaVZCT1J3MEtHZ29BQUFBTlNVaEVVZ0FBQUFnQUFBQUdDQVlBQUFEK0JkLzdBQUFBWTBsRVFWUjQybU1nQ05hdlc2ZjY0ZjFIS1p3S3ZuejVFdi8vLy8vNCsvY2V1QU81N0JnS2Z2MzhHUTVVRVBieTVhdkVsTlEwT3d3RmdYNWVFV3RXcjQ3NCsvZGY1T1hMMTBOOXc3TXdUSWxvYVc2S2VQZjJmZFNwMHhlQzZsb21vU2dBQUFoNkxqOStJcGduQUFBQUFFbEZUa1N1UW1DQ1wifTsiLCJleHBvcnQgZGVmYXVsdCAge1wic3JjXCI6XCIvX25leHQvc3RhdGljL2ltYWdlL3B1YmxpYy9pbWFnZXMvZm9vdGVyL21hc3RlckNhcmQuMjk0OTNkNTIyZDBlODU0ZWZjOWYxMDJhZDhmMGE4N2YucG5nXCIsXCJoZWlnaHRcIjo0MixcIndpZHRoXCI6NjksXCJibHVyRGF0YVVSTFwiOlwiZGF0YTppbWFnZS9wbmc7YmFzZTY0LGlWQk9SdzBLR2dvQUFBQU5TVWhFVWdBQUFBZ0FBQUFGQ0FZQUFBQjRrYTFWQUFBQW9FbEVRVlI0bkJXT1BRckNRQmdGNTB1TXFLUlJqQ0tZd2xyc3hKOUd1eUFlUU95OW1JMkJlQUNQSUloZ0VkUVQ2QUZNSUNBYmRsMkw5NmFZWmtUREVFaWdaMW1laUF0dzFScUNCK3E5RlQxYnBHVDVpR2VxV2JVY29pWU1mQzNmbTJPODhWMTBuQmlDamlML1ZLaTdDbktrcnp6VDZKYVN2VHpSeStoTXZUYW5Xb08yOVpNTVFoL1JMc1lVMTM5RGFCdjJ3TlR1eU1HK3c4YUtpeW5ZL1FEa1hEVnFFMHlrSndBQUFBQkpSVTVFcmtKZ2dnPT1cIn07IiwiZXhwb3J0IGRlZmF1bHQgIHtcInNyY1wiOlwiL19uZXh0L3N0YXRpYy9pbWFnZS9wdWJsaWMvaW1hZ2VzL2Zvb3Rlci9wYXlwYWwuZTA2NjkyYzI2OTU5MDc4OTM0OGU1NWQ1YjRiYzYzNDUucG5nXCIsXCJoZWlnaHRcIjozOCxcIndpZHRoXCI6MTQ5LFwiYmx1ckRhdGFVUkxcIjpcImRhdGE6aW1hZ2UvcG5nO2Jhc2U2NCxpVkJPUncwS0dnb0FBQUFOU1VoRVVnQUFBQWdBQUFBQ0NBWUFBQUJsbEozdEFBQUFURWxFUVZSNG5HTmtzR3o5ejZBdFY4bXc1K0Z4Qm5FMkdZYVQ4L2N3ZEMwMlpSQVdGbWI0OSs4V0kwUGxya3NNNnFwSkRBblQrUm5NUmJRWkhuM2hZa2h5ZU1PZ3B2cVA0ZGN2ZVFEWURCYXRMdkNQd3dBQUFBQkpSVTVFcmtKZ2dnPT1cIn07IiwiZXhwb3J0IGRlZmF1bHQgIHtcInNyY1wiOlwiL19uZXh0L3N0YXRpYy9pbWFnZS9wdWJsaWMvaW1hZ2VzL2Zvb3Rlci92aXNhLjU2ZTlmODUxNDU3YWY4MzYwNTE4NmEzOTQ0ODRlMTFkLnBuZ1wiLFwiaGVpZ2h0XCI6MzEsXCJ3aWR0aFwiOjEwNCxcImJsdXJEYXRhVVJMXCI6XCJkYXRhOmltYWdlL3BuZztiYXNlNjQsaVZCT1J3MEtHZ29BQUFBTlNVaEVVZ0FBQUFnQUFBQUNDQVlBQUFCbGxKM3RBQUFBUlVsRVFWUjRuR004MkowZC91Q1RpSDM4UmRXL01seS9mejM1eHlET3dNQ3dINGpWZ0ZpVmtZSGhDUnRENko2OVlzei9WN3o2eHlqQ3dQRC9MMUJDSDRqL0FERVBBREQ2RlU0allRV21BQUFBQUVsRlRrU3VRbUNDXCJ9OyIsImV4cG9ydCBkZWZhdWx0ICB7XCJzcmNcIjpcIi9fbmV4dC9zdGF0aWMvaW1hZ2UvcHVibGljL2ltYWdlcy9oZWFkZXIvU29jaWFsTWVkaWEvY2xvc2VWZWN0b3IuZDFmYWFkYTdjNWRjZTdjOGYxZmJkMWZmZGU2Yzk5ZDkucG5nXCIsXCJoZWlnaHRcIjoxMyxcIndpZHRoXCI6MTMsXCJibHVyRGF0YVVSTFwiOlwiZGF0YTppbWFnZS9wbmc7YmFzZTY0LGlWQk9SdzBLR2dvQUFBQU5TVWhFVWdBQUFBZ0FBQUFJQ0FRQUFBQnVCbllBQUFBQVFVbEVRVlI0Mm1XTndRMEFJUXpEMHYwSE9Za0J5a3F3aEkva2lWQStycXMyWXRFVWNzcTB4T1JuRURGTU16N3dPVm1VY0RKRWhsL3hudlQxdE1XK2F2Y0JaUkZmV1pYS290MEFBQUFBU1VWT1JLNUNZSUk9XCJ9OyIsImV4cG9ydCBkZWZhdWx0ICB7XCJzcmNcIjpcIi9fbmV4dC9zdGF0aWMvaW1hZ2UvcHVibGljL2ltYWdlcy9oZWFkZXIvU29jaWFsTWVkaWEvZW1haWwuMjk4NmQwYzRiYjY1ZmUzYTFmNThiNmM5YmJlMTU5N2Euc3ZnXCIsXCJoZWlnaHRcIjoyMCxcIndpZHRoXCI6MjV9OyIsImV4cG9ydCBkZWZhdWx0ICB7XCJzcmNcIjpcIi9fbmV4dC9zdGF0aWMvaW1hZ2UvcHVibGljL2ltYWdlcy9oZWFkZXIvU29jaWFsTWVkaWEvZmFjZWJvb2suODVmNTI0ZTMyYWQzNzdlNzQyNGE1ZDg3MTJhNjY2NGEuc3ZnXCIsXCJoZWlnaHRcIjozNCxcIndpZHRoXCI6Mjh9OyIsImV4cG9ydCBkZWZhdWx0ICB7XCJzcmNcIjpcIi9fbmV4dC9zdGF0aWMvaW1hZ2UvcHVibGljL2ltYWdlcy9oZWFkZXIvU29jaWFsTWVkaWEvaW5zdGFncmFtLmY1ZmZkMjAwNTVhZWI4YmUyZTJhNmE2NmU3NTcyNzRlLnN2Z1wiLFwiaGVpZ2h0XCI6MzAsXCJ3aWR0aFwiOjMxfTsiLCJleHBvcnQgZGVmYXVsdCAge1wic3JjXCI6XCIvX25leHQvc3RhdGljL2ltYWdlL3B1YmxpYy9pbWFnZXMvaGVhZGVyL1NvY2lhbE1lZGlhL3Bob25lLjU1ZWU4ODE5ZTI1NDA5M2FhMzNmZGI0NzgyYjM1Y2Q0LnN2Z1wiLFwiaGVpZ2h0XCI6MjUsXCJ3aWR0aFwiOjI0fTsiLCJleHBvcnQgZGVmYXVsdCAge1wic3JjXCI6XCIvX25leHQvc3RhdGljL2ltYWdlL3B1YmxpYy9pbWFnZXMvaGVhZGVyL1NvY2lhbE1lZGlhL3RlbGVncmFtLmFmZjllM2Q5NWQ3NGZmNjExMjkyN2FjZjE2NDBlNmEzLnN2Z1wiLFwiaGVpZ2h0XCI6MzcsXCJ3aWR0aFwiOjI5fTsiLCJleHBvcnQgZGVmYXVsdCAge1wic3JjXCI6XCIvX25leHQvc3RhdGljL2ltYWdlL3B1YmxpYy9pbWFnZXMvaGVhZGVyL1NvY2lhbE1lZGlhL3ZpYmVyLjkyZDExOGMyNjc2MGY3OTZkYzMyNzgxNDcyNTFkZmZlLnN2Z1wiLFwiaGVpZ2h0XCI6MzksXCJ3aWR0aFwiOjMwfTsiLCJleHBvcnQgZGVmYXVsdCAge1wic3JjXCI6XCIvX25leHQvc3RhdGljL2ltYWdlL3B1YmxpYy9pbWFnZXMvaGVhZGVyL1NvY2lhbE1lZGlhL3dhdHN1cC5lNWMxZDA0NjhlY2I0YzgwNzMxYTY3ZTQ2MWUxOTI1My5zdmdcIixcImhlaWdodFwiOjM3LFwid2lkdGhcIjoyOX07IiwiZXhwb3J0IGRlZmF1bHQgIHtcInNyY1wiOlwiL19uZXh0L3N0YXRpYy9pbWFnZS9wdWJsaWMvaW1hZ2VzL2hlYWRlci9kcm9wZG93bl9saW5lcy4zMDI2MDk0YjE0NDllMTQyMDgzOWI4OWNlYTg1NWUxOS5wbmdcIixcImhlaWdodFwiOjE3LFwid2lkdGhcIjoyNyxcImJsdXJEYXRhVVJMXCI6XCJkYXRhOmltYWdlL3BuZztiYXNlNjQsaVZCT1J3MEtHZ29BQUFBTlNVaEVVZ0FBQUFnQUFBQUZDQVFBQUFEU21HWGVBQUFBTzBsRVFWUjQybDNHc1FtQU1CQUF3QzlzZENCQjV4UFV3bUJpbzhzZXdwZmhtZ3VYcHFiYmF3bWRVRHhhcWo1ckdFMVNiZ2liMDVGMnhmd0R5VXMwVi9WMGM2VUFBQUFBU1VWT1JLNUNZSUk9XCJ9OyIsImV4cG9ydCBkZWZhdWx0ICB7XCJzcmNcIjpcIi9fbmV4dC9zdGF0aWMvaW1hZ2UvcHVibGljL2ltYWdlcy9oZWFkZXIvZmxhZ3MvYXJtLjk0ZmRmYTlhNjIxNDM4YzU3MTUzYWMwN2IwNzljNDEyLnN2Z1wiLFwiaGVpZ2h0XCI6MjEsXCJ3aWR0aFwiOjIxfTsiLCJleHBvcnQgZGVmYXVsdCAge1wic3JjXCI6XCIvX25leHQvc3RhdGljL2ltYWdlL3B1YmxpYy9pbWFnZXMvaGVhZGVyL2ZsYWdzL2RldS5kYjkxOTM2YzIwOWQ4ZTBkNDE4MTBlYWMzMTQyOGI4ZC5zdmdcIixcImhlaWdodFwiOjIxLFwid2lkdGhcIjoyMX07IiwiZXhwb3J0IGRlZmF1bHQgIHtcInNyY1wiOlwiL19uZXh0L3N0YXRpYy9pbWFnZS9wdWJsaWMvaW1hZ2VzL2hlYWRlci9mbGFncy9lbi4xYzg1NjMwZGY0MTQ3MTcwODFlYTg2NTdlZWNhN2UyYy5zdmdcIixcImhlaWdodFwiOjIxLFwid2lkdGhcIjoyMX07IiwiZXhwb3J0IGRlZmF1bHQgIHtcInNyY1wiOlwiL19uZXh0L3N0YXRpYy9pbWFnZS9wdWJsaWMvaW1hZ2VzL2hlYWRlci9mbGFncy9lc3AuNDM3ODhkNTc1MTQ3MDZkZTllYTQyYzQyNGNiODc5MmYuc3ZnXCIsXCJoZWlnaHRcIjoyMSxcIndpZHRoXCI6MjF9OyIsImV4cG9ydCBkZWZhdWx0ICB7XCJzcmNcIjpcIi9fbmV4dC9zdGF0aWMvaW1hZ2UvcHVibGljL2ltYWdlcy9oZWFkZXIvZmxhZ3MvZnJjLmMzMmIzOTEzMTdmYjAzNzE4MzU1ZGQ4YTY4NGY1NTQxLnN2Z1wiLFwiaGVpZ2h0XCI6MjEsXCJ3aWR0aFwiOjIxfTsiLCJleHBvcnQgZGVmYXVsdCAge1wic3JjXCI6XCIvX25leHQvc3RhdGljL2ltYWdlL3B1YmxpYy9pbWFnZXMvaGVhZGVyL2ZsYWdzL3J1cy42ZWI0Y2IxNGM2NzI3MDk0ZmZiZGM3MDZmNTEzNjBhMC5wbmdcIixcImhlaWdodFwiOjIyLFwid2lkdGhcIjoyMSxcImJsdXJEYXRhVVJMXCI6XCJkYXRhOmltYWdlL3BuZztiYXNlNjQsaVZCT1J3MEtHZ29BQUFBTlNVaEVVZ0FBQUFnQUFBQUlDQVlBQUFERUQ3NkxBQUFBdVVsRVFWUjQyazNKVHdxQ1VCZ0U4TGxNWmVrcTF4WFVuU0xDQW85UmdmdXdqVUVVS0c0OGdKRDB4eHRvTzVIUWgvSmUzd2N1R3ZqQk1BTk9XVlpHMDdSUjI3WVZFZFQ5b3ZocTRDaWxESklUanV4d01xTEI5ZTdoeFg4cDcvb1E1OXRUTXU2ODBSY0FjQVN3azhCQkFYdEp1QlBlbkJxWUhtc3NUaEp6OTUvaWpUNkJwV2tIOW5pdExITWp0bU5MTXU2OHJVdzd4S2VQWVRwRTloNUJwU05JMXZVODc4TUFKOVpuV3FJUC9FVHZDVkpUajJKandpZCt0Q0NTY0FKQ045Z0FBQUFBU1VWT1JLNUNZSUk9XCJ9OyIsImV4cG9ydCBkZWZhdWx0ICB7XCJzcmNcIjpcIi9fbmV4dC9zdGF0aWMvaW1hZ2UvcHVibGljL2ltYWdlcy9oZWFkZXIvZm9vdGJhbGxlci43NTA1ZGI2ZmYyMzM0MDgyZTY1ZjU3YjE1NTA0NjkxYy5zdmdcIixcImhlaWdodFwiOjYwMCxcIndpZHRoXCI6NjYyfTsiLCJleHBvcnQgZGVmYXVsdCAge1wic3JjXCI6XCIvX25leHQvc3RhdGljL2ltYWdlL3B1YmxpYy9pbWFnZXMvaGVhZGVyL2xvZ2luLjJiOTBmNGYyMWM4MzBkYzM4NTFjYjNmYzNmMTYxOGIzLnBuZ1wiLFwiaGVpZ2h0XCI6MjEsXCJ3aWR0aFwiOjE5LFwiYmx1ckRhdGFVUkxcIjpcImRhdGE6aW1hZ2UvcG5nO2Jhc2U2NCxpVkJPUncwS0dnb0FBQUFOU1VoRVVnQUFBQWNBQUFBSUNBUUFBQUNmRFMyTkFBQUFaMGxFUVZSNDJqWE5Ld29DQVJoRjRlc0RFVGZnRG13R216WVhZTEVwR2hUR1pEVUpGcFBaQlpqTkxzSmxmUXgvR0c0NjNBTW5ldUxtN3VmdkU3V0ZnYXZZRld5dGpGekV1WERvYStrb1RvVWJCMk5OOTA0MFprcmVSMStzdlQxTnZTSXFWYkdIZVF0RXVrUmRyTG5iOFFBQUFBQkpSVTVFcmtKZ2dnPT1cIn07IiwiZXhwb3J0IGRlZmF1bHQgIHtcInNyY1wiOlwiL19uZXh0L3N0YXRpYy9pbWFnZS9wdWJsaWMvaW1hZ2VzL2hlYWRlci9sb2dpbi9mYWNlYm9vay41MDE5MzIyMGM3MDUxNjdjMGU4NTI0OTgyOTA4YTRlZS5zdmdcIixcImhlaWdodFwiOjc2LFwid2lkdGhcIjo3Nn07IiwiZXhwb3J0IGRlZmF1bHQgIHtcInNyY1wiOlwiL19uZXh0L3N0YXRpYy9pbWFnZS9wdWJsaWMvaW1hZ2VzL2hlYWRlci9sb2dpbi9nbWFpbC5iNzhiMzM1ZDdiNzFlYzViM2I5MDMzMDY1NDEyYTBmOC5zdmdcIixcImhlaWdodFwiOjc2LFwid2lkdGhcIjo3Nn07IiwiZXhwb3J0IGRlZmF1bHQgIHtcInNyY1wiOlwiL19uZXh0L3N0YXRpYy9pbWFnZS9wdWJsaWMvaW1hZ2VzL2hlYWRlci9sb2dpbi9zdWNjZXNzLmIyZjYzOWY2OTcxOTMxYjlkNDkzOWM1OTExOWU3ODU5LnBuZ1wiLFwiaGVpZ2h0XCI6MTMyLFwid2lkdGhcIjoxNDEsXCJibHVyRGF0YVVSTFwiOlwiZGF0YTppbWFnZS9wbmc7YmFzZTY0LGlWQk9SdzBLR2dvQUFBQU5TVWhFVWdBQUFBZ0FBQUFIQ0FZQUFBQTFXUXhlQUFBQThrbEVRVlI0bkFIbkFCai9BUm0rTGdBSkFRWSs3di8yamdVQUFpL3IvdFQrWWd0cTFYMFlkZUhrSWR4WUFSYStMVXJxL3VTMUJnRVVBQm9CRGYvZy9jNEJxUml0QVBmajlRQmc4RjVUQVFDOUh1RkhDRFVlMWZ2ZisrVDZ6Z1ZwRUhIL1hRQlgvV1hoY0FUVkZ0N2dBUUM2QVAraUQ2YjlCQWdFQTFycVZ2KzZHYjBBMU52VUFYSUxiLzRmQkRFQ0FRQy9HdUEzN3lnZmlSZUErL0lWOUFRSDV3UUFSK3hrL0E0VEN3VUEvUURnQVRLL1AwZk8vOEcyV3ZKaEFuSVVhd0NrNktnQWtCR01BQnNCTC83dC8vaEpBU25DTndBRS93UTYwL3ZOalRMbk56RFRFK2NBQ1FvRDBQZjgvWE1DQVFIR05EQmxPUGcrV0NVQUFBQUFTVVZPUks1Q1lJST1cIn07IiwiZXhwb3J0IGRlZmF1bHQgIHtcInNyY1wiOlwiL19uZXh0L3N0YXRpYy9pbWFnZS9wdWJsaWMvaW1hZ2VzL2hlYWRlci9sb2dpbi90d2l0dGVyLjM3MmY2ZjY4YWM0NmEwYjVhMmNiZjEwNmY2MDhlNGMyLnN2Z1wiLFwiaGVpZ2h0XCI6NzYsXCJ3aWR0aFwiOjc2fTsiLCJleHBvcnQgZGVmYXVsdCAge1wic3JjXCI6XCIvX25leHQvc3RhdGljL2ltYWdlL3B1YmxpYy9pbWFnZXMvaGVhZGVyL2xvZ2luL3ZrLmY5YTMyMWQzZGI1ZGUzYTcwNjQ4M2Q3MzA5NTgyMzMwLnN2Z1wiLFwiaGVpZ2h0XCI6NzYsXCJ3aWR0aFwiOjc2fTsiLCJleHBvcnQgZGVmYXVsdCAge1wic3JjXCI6XCIvX25leHQvc3RhdGljL2ltYWdlL3B1YmxpYy9pbWFnZXMvaGVhZGVyL2xvZ28uNmNkZjkxZmFmM2NhMTJhMDc2YzVmOTYyODE0NWZjMDQuc3ZnXCIsXCJoZWlnaHRcIjoyMjEsXCJ3aWR0aFwiOjIyMX07IiwiZXhwb3J0IGRlZmF1bHQgIHtcInNyY1wiOlwiL19uZXh0L3N0YXRpYy9pbWFnZS9wdWJsaWMvaW1hZ2VzL2hlYWRlci9yZWdpc3Rlci40NzQwM2I5OThjZTJjNTM2MTdiZmI0NmRiZjkxNGJkYS5wbmdcIixcImhlaWdodFwiOjIzLFwid2lkdGhcIjoyMyxcImJsdXJEYXRhVVJMXCI6XCJkYXRhOmltYWdlL3BuZztiYXNlNjQsaVZCT1J3MEtHZ29BQUFBTlNVaEVVZ0FBQUFnQUFBQUlDQVFBQUFCdUJuWUFBQUFBYlVsRVFWUjQyZzNFUVF2QkFCaUE0VThpSjJlWEhiU1RiSW9hS1FkcHJTd25zNnc0T1BnQkR1NysrWlAxOUw0aHBGNHFFNkVYT2orRnQ2K2xNQWhuR3c4M21WSVlodHBCYXlkMWxJaHc2VFVXZmJuYU5weU1qWlF5SDdrMlBPMFZHbXVWbFh1WVNzejZYMVU2OHo5aHZVelBOQzc3UmdBQUFBQkpSVTVFcmtKZ2dnPT1cIn07IiwiZXhwb3J0IGRlZmF1bHQgIHtcInNyY1wiOlwiL19uZXh0L3N0YXRpYy9pbWFnZS9wdWJsaWMvaW1hZ2VzL3BlcnNvbmFsL2JhbGwuN2E0MjE3ODYwZTNiMGJlNjQ0YTJjMDUzNGRmNmU2NGQucG5nXCIsXCJoZWlnaHRcIjo4ODIsXCJ3aWR0aFwiOjk1MCxcImJsdXJEYXRhVVJMXCI6XCJkYXRhOmltYWdlL3BuZztiYXNlNjQsaVZCT1J3MEtHZ29BQUFBTlNVaEVVZ0FBQUFnQUFBQUhDQVlBQUFBMVdReGVBQUFBa0VsRVFWUjQybVBBQmxhdldNWUVwRmlTRXBPWU1TVGZ2WDdLOXZueko2NmJOMjl5UFgvK2dndEZzamczai9YRDY4ZmMvLy8vNTRSaEZBV3paMHpsK1BUMkpkZnhZNGM0VTFPVHVCWXNtSStxNE9DK1hSd3ZuajdrV3IxeU9VaUNxN3lzRkZYQjVJbjlMRnMzcmVNNmUrbzQ1OTdkdXpqUG56M0hoZTVHeGdCL1AvYUovYjFjYTFldjVGeTJkQmtuQUZjblAzZXVzdnRjQUFBQUFFbEZUa1N1UW1DQ1wifTsiLCIvLyBFeHBvcnRzXG5tb2R1bGUuZXhwb3J0cyA9IHtcblx0XCJjb250YWluZXJcIjogXCJCYWxsX2NvbnRhaW5lcl9fMldsMWRcIixcblx0XCJiYWxsXCI6IFwiQmFsbF9iYWxsX18xU0tsTVwiLFxuXHRcInRleHRfd2l0aF9iYWxsXCI6IFwiQmFsbF90ZXh0X3dpdGhfYmFsbF9fN2xwSFVcIixcblx0XCJ0b3BcIjogXCJCYWxsX3RvcF9fUU41NkdcIixcblx0XCJib3R0b21cIjogXCJCYWxsX2JvdHRvbV9fMms0cTRcIlxufTtcbiIsIi8vIEV4cG9ydHNcbm1vZHVsZS5leHBvcnRzID0ge1xuXHRcImNvbnRhaW5lclwiOiBcIkZvb3Rlcl9jb250YWluZXJfX2wyRDRnXCIsXG5cdFwiY29udGVudFwiOiBcIkZvb3Rlcl9jb250ZW50X18xYnB1NlwiLFxuXHRcImJhbGxcIjogXCJGb290ZXJfYmFsbF9fMlNsM25cIlxufTtcbiIsIi8vIEV4cG9ydHNcbm1vZHVsZS5leHBvcnRzID0ge1xuXHRcImNvbnRhaW5lclwiOiBcIkxpc3RfY29udGFpbmVyX18xVHBuVlwiLFxuXHRcImJvcmRlcnNcIjogXCJMaXN0X2JvcmRlcnNfXzFSbXpiXCJcbn07XG4iLCIvLyBFeHBvcnRzXG5tb2R1bGUuZXhwb3J0cyA9IHtcblx0XCJjb250YWluZXJcIjogXCJOYXZpZ2F0aW9uX2NvbnRhaW5lcl9fMXMzbkdcIixcblx0XCJjb250ZW50XCI6IFwiTmF2aWdhdGlvbl9jb250ZW50X18zTk00QVwiXG59O1xuIiwiLy8gRXhwb3J0c1xubW9kdWxlLmV4cG9ydHMgPSB7XG5cdFwiY29udGFpbmVyXCI6IFwiUFNfY29udGFpbmVyX19zNGwxM1wiLFxuXHRcImljb25zXCI6IFwiUFNfaWNvbnNfX194SGJhXCJcbn07XG4iLCIvLyBFeHBvcnRzXG5tb2R1bGUuZXhwb3J0cyA9IHtcblx0XCJjb250YWluZXJcIjogXCJTTV9jb250YWluZXJfXzJMdkRzXCJcbn07XG4iLCIvLyBFeHBvcnRzXG5tb2R1bGUuZXhwb3J0cyA9IHtcblx0XCJjb250YWluZXJcIjogXCJTb2NpYWxNZWRpYV9jb250YWluZXJfXzFUaWRoXCIsXG5cdFwiY29udGVudFwiOiBcIlNvY2lhbE1lZGlhX2NvbnRlbnRfXzFLNnRsXCIsXG5cdFwiY29udHJvbGVyXCI6IFwiU29jaWFsTWVkaWFfY29udHJvbGVyX19raFNVUVwiLFxuXHRcInNvY2lhbF9tZWRpYXNcIjogXCJTb2NpYWxNZWRpYV9zb2NpYWxfbWVkaWFzX19VRXVDc1wiLFxuXHRcInBheW1lbnRfc3lzdGVtc1wiOiBcIlNvY2lhbE1lZGlhX3BheW1lbnRfc3lzdGVtc19fMVdTRjVcIlxufTtcbiIsIi8vIEV4cG9ydHNcbm1vZHVsZS5leHBvcnRzID0ge1xuXHRcImNvbnRhaW5lclwiOiBcIkljb25fY29udGFpbmVyX18yWExjdFwiLFxuXHRcImxhc3RfZWxlbWVudFwiOiBcIkljb25fbGFzdF9lbGVtZW50X18xTGg4U1wiXG59O1xuIiwiLy8gRXhwb3J0c1xubW9kdWxlLmV4cG9ydHMgPSB7XG5cdFwiYmFyX2NvbnRhaW5lclwiOiBcIkJhcl9iYXJfY29udGFpbmVyX18zN25EOVwiXG59O1xuIiwiLy8gRXhwb3J0c1xubW9kdWxlLmV4cG9ydHMgPSB7XG5cdFwiYmFyX2l0ZW1fY29udGFpbmVyXCI6IFwiQmFySXRlbXNfYmFyX2l0ZW1fY29udGFpbmVyX18xYm5PZVwiLFxuXHRcImF1dGhfY29udGFpbmVyXCI6IFwiQmFySXRlbXNfYXV0aF9jb250YWluZXJfXzJfNVM1XCIsXG5cdFwiYXV0aF9idXR0b25zXCI6IFwiQmFySXRlbXNfYXV0aF9idXR0b25zX18yU2hwVVwiLFxuXHRcInNpZ25fdXBfYnV0dG9uXCI6IFwiQmFySXRlbXNfc2lnbl91cF9idXR0b25fXzNfMk01XCIsXG5cdFwic2lnbl9pbl9idXR0b25cIjogXCJCYXJJdGVtc19zaWduX2luX2J1dHRvbl9fM1gtNl9cIixcblx0XCJsYW5nX2J1dHRvblwiOiBcIkJhckl0ZW1zX2xhbmdfYnV0dG9uX184am1fZ1wiLFxuXHRcImxhbmdfYnV0dG9uX2NvbnRlbnRcIjogXCJCYXJJdGVtc19sYW5nX2J1dHRvbl9jb250ZW50X18zdXk2blwiLFxuXHRcImZvcl9tb2JpbGVcIjogXCJCYXJJdGVtc19mb3JfbW9iaWxlX18xdk9DaVwiXG59O1xuIiwiLy8gRXhwb3J0c1xubW9kdWxlLmV4cG9ydHMgPSB7XG5cdFwiY29udGFpbmVyXCI6IFwiTGFuZ3VhZ2VEcm9wX2NvbnRhaW5lcl9fMjZZVU1cIixcblx0XCJ0cmFuc2l0aW9uXCI6IFwiTGFuZ3VhZ2VEcm9wX3RyYW5zaXRpb25fXzMwY1AtXCIsXG5cdFwiY29udGVudFwiOiBcIkxhbmd1YWdlRHJvcF9jb250ZW50X18yVjZuRlwiLFxuXHRcInJvd1wiOiBcIkxhbmd1YWdlRHJvcF9yb3dfXzE2RjZfXCJcbn07XG4iLCIvLyBFeHBvcnRzXG5tb2R1bGUuZXhwb3J0cyA9IHtcblx0XCJjb250YWluZXJcIjogXCJMb2dnZWRfY29udGFpbmVyX194bGVQTVwiLFxuXHRcImNvbnRlbnRcIjogXCJMb2dnZWRfY29udGVudF9fM2NFM09cIlxufTtcbiIsIi8vIEV4cG9ydHNcbm1vZHVsZS5leHBvcnRzID0ge1xuXHRcImNvbnRhaW5lclwiOiBcIkxvZ2dlZERyb3BfY29udGFpbmVyX18yUTZMUFwiLFxuXHRcInRyYW5zaXRpb25cIjogXCJMb2dnZWREcm9wX3RyYW5zaXRpb25fX1FnNDhpXCIsXG5cdFwiY29udGVudFwiOiBcIkxvZ2dlZERyb3BfY29udGVudF9fRUR0YnFcIixcblx0XCJ1c2VyX3Bob3RvX25hbWVcIjogXCJMb2dnZWREcm9wX3VzZXJfcGhvdG9fbmFtZV9fMTlnaWFcIixcblx0XCJ1c2VyX3RlbFwiOiBcIkxvZ2dlZERyb3BfdXNlcl90ZWxfXzEzQ0FGXCIsXG5cdFwibG9nT3V0XCI6IFwiTG9nZ2VkRHJvcF9sb2dPdXRfXzNlRC15XCJcbn07XG4iLCIvLyBFeHBvcnRzXG5tb2R1bGUuZXhwb3J0cyA9IHtcblx0XCJjb250YWluZXJcIjogXCJMb2dnZWRXYWxscGVyX2NvbnRhaW5lcl9fMm9STVZcIixcblx0XCJjb250ZW50XCI6IFwiTG9nZ2VkV2FsbHBlcl9jb250ZW50X18yTTFxVFwiLFxuXHRcInVzZXJfcGhvdG9cIjogXCJMb2dnZWRXYWxscGVyX3VzZXJfcGhvdG9fXzFtc3pwXCIsXG5cdFwidXNlcl9mdWxsTmFtZVwiOiBcIkxvZ2dlZFdhbGxwZXJfdXNlcl9mdWxsTmFtZV9fMld2cEZcIixcblx0XCJmdWxsbmFtZVwiOiBcIkxvZ2dlZFdhbGxwZXJfZnVsbG5hbWVfXzFHajI1XCJcbn07XG4iLCIvLyBFeHBvcnRzXG5tb2R1bGUuZXhwb3J0cyA9IHtcblx0XCJkcm9wZG93blwiOiBcIkRyb3Bkb3duX2Ryb3Bkb3duX18zQUJjcVwiLFxuXHRcInRyYW5zaXRpb25cIjogXCJEcm9wZG93bl90cmFuc2l0aW9uX18xZnpiT1wiLFxuXHRcImRyb3Bkb3duX21lbnVcIjogXCJEcm9wZG93bl9kcm9wZG93bl9tZW51X18xVW1ZN1wiLFxuXHRcImRyb3Bkb3duX2xpc3RcIjogXCJEcm9wZG93bl9kcm9wZG93bl9saXN0X18yYkcyWVwiLFxuXHRcImRyb3Bkb3duX2xpc3RfaXRlbXNcIjogXCJEcm9wZG93bl9kcm9wZG93bl9saXN0X2l0ZW1zX18ydl92V1wiLFxuXHRcImRyb3Bkb3duX2NoZWNrXCI6IFwiRHJvcGRvd25fZHJvcGRvd25fY2hlY2tfXzMwd09uXCJcbn07XG4iLCIvLyBFeHBvcnRzXG5tb2R1bGUuZXhwb3J0cyA9IHtcblx0XCJtX2NvbnRhaW5lclwiOiBcIkxvZ2luX21fY29udGFpbmVyX18yTktQVlwiLFxuXHRcIm1fY29udGVudFwiOiBcIkxvZ2luX21fY29udGVudF9fMWs4YzZcIixcblx0XCJsb2dpbl9jb250YWluZXJcIjogXCJMb2dpbl9sb2dpbl9jb250YWluZXJfX2pfTC1UXCJcbn07XG4iLCIvLyBFeHBvcnRzXG5tb2R1bGUuZXhwb3J0cyA9IHtcblx0XCJjb250YWluZXJcIjogXCJMb2dpbkZvcm1fY29udGFpbmVyX19HYWlGdlwiLFxuXHRcInRpdGxlXCI6IFwiTG9naW5Gb3JtX3RpdGxlX18zZm1qVFwiLFxuXHRcImlucHV0c1wiOiBcIkxvZ2luRm9ybV9pbnB1dHNfXzNDMTR4XCIsXG5cdFwicmVzZXRfcGFzc3dvcmRcIjogXCJMb2dpbkZvcm1fcmVzZXRfcGFzc3dvcmRfX0RwMl9GXCIsXG5cdFwic3VibWl0XCI6IFwiTG9naW5Gb3JtX3N1Ym1pdF9fM2ZIOElcIixcblx0XCJ0b19yZWdpc3Rlcl9jb250YWluZXJcIjogXCJMb2dpbkZvcm1fdG9fcmVnaXN0ZXJfY29udGFpbmVyX18zelpxcFwiLFxuXHRcInRvX3JlZ2lzdGVyX2NvbnRlbnRcIjogXCJMb2dpbkZvcm1fdG9fcmVnaXN0ZXJfY29udGVudF9fMUNGeGFcIixcblx0XCJ0b19yZWdpc3Rlcl90ZXh0XCI6IFwiTG9naW5Gb3JtX3RvX3JlZ2lzdGVyX3RleHRfXzFwMDk3XCJcbn07XG4iLCIvLyBFeHBvcnRzXG5tb2R1bGUuZXhwb3J0cyA9IHtcblx0XCJtX2NvbnRhaW5lclwiOiBcIkZvcmdvdFBhc3N3b3JkX21fY29udGFpbmVyX18yQkRTZVwiLFxuXHRcIm1fY29udGVudFwiOiBcIkZvcmdvdFBhc3N3b3JkX21fY29udGVudF9fMmtILTRcIixcblx0XCJjb250YWluZXJcIjogXCJGb3Jnb3RQYXNzd29yZF9jb250YWluZXJfXzJqTnRHXCIsXG5cdFwidGl0bGVcIjogXCJGb3Jnb3RQYXNzd29yZF90aXRsZV9fMUloOFdcIixcblx0XCJpbnB1dHNcIjogXCJGb3Jnb3RQYXNzd29yZF9pbnB1dHNfXzE5bFZ0XCIsXG5cdFwic3VibWl0XCI6IFwiRm9yZ290UGFzc3dvcmRfc3VibWl0X19xenB5clwiXG59O1xuIiwiLy8gRXhwb3J0c1xubW9kdWxlLmV4cG9ydHMgPSB7XG5cdFwibV9jb250YWluZXJcIjogXCJHZXRFbWFpbENvZGVfbV9jb250YWluZXJfX19xRkYtXCIsXG5cdFwibV9jb250ZW50XCI6IFwiR2V0RW1haWxDb2RlX21fY29udGVudF9fcmRBZDlcIixcblx0XCJjb250YWluZXJcIjogXCJHZXRFbWFpbENvZGVfY29udGFpbmVyX18zdHNIZFwiLFxuXHRcInRpdGxlXCI6IFwiR2V0RW1haWxDb2RlX3RpdGxlX18yWldGX1wiLFxuXHRcImRlc2NyaXB0aW9uXCI6IFwiR2V0RW1haWxDb2RlX2Rlc2NyaXB0aW9uX18zeWU4UlwiLFxuXHRcImlucHV0c1wiOiBcIkdldEVtYWlsQ29kZV9pbnB1dHNfXzJzMzY5XCIsXG5cdFwiZXJyb3JfaW5wdXRcIjogXCJHZXRFbWFpbENvZGVfZXJyb3JfaW5wdXRfX1J0XzFkXCIsXG5cdFwic3VjY2Vzc19pbnB1dFwiOiBcIkdldEVtYWlsQ29kZV9zdWNjZXNzX2lucHV0X18ycHBUcVwiLFxuXHRcInN1Ym1pdFwiOiBcIkdldEVtYWlsQ29kZV9zdWJtaXRfXzJHUlFJXCJcbn07XG4iLCIvLyBFeHBvcnRzXG5tb2R1bGUuZXhwb3J0cyA9IHtcblx0XCJtX2NvbnRhaW5lclwiOiBcIk5ld1Bhc3N3b3JkX21fY29udGFpbmVyX18xSVdIVFwiLFxuXHRcIm1fY29udGVudFwiOiBcIk5ld1Bhc3N3b3JkX21fY29udGVudF9fMk1CanlcIixcblx0XCJjb250YWluZXJcIjogXCJOZXdQYXNzd29yZF9jb250YWluZXJfXzNzeVFqXCIsXG5cdFwidGl0bGVcIjogXCJOZXdQYXNzd29yZF90aXRsZV9fMXFWWm5cIixcblx0XCJpbnB1dHNcIjogXCJOZXdQYXNzd29yZF9pbnB1dHNfXzNWejBrXCIsXG5cdFwic3VibWl0XCI6IFwiTmV3UGFzc3dvcmRfc3VibWl0X18za1gwT1wiXG59O1xuIiwiLy8gRXhwb3J0c1xubW9kdWxlLmV4cG9ydHMgPSB7XG5cdFwibV9jb250YWluZXJcIjogXCJTdWNjZXNzX21fY29udGFpbmVyX18zUkxTbFwiLFxuXHRcIm1fY29udGVudFwiOiBcIlN1Y2Nlc3NfbV9jb250ZW50X196bmFra1wiLFxuXHRcImNvbnRhaW5lclwiOiBcIlN1Y2Nlc3NfY29udGFpbmVyX19rZ3Bwa1wiLFxuXHRcInRpdGxlXCI6IFwiU3VjY2Vzc190aXRsZV9fM1BHVlBcIixcblx0XCJpY29uX2NvbnRhaW5lclwiOiBcIlN1Y2Nlc3NfaWNvbl9jb250YWluZXJfXzN3UEJWXCJcbn07XG4iLCIvLyBFeHBvcnRzXG5tb2R1bGUuZXhwb3J0cyA9IHtcblx0XCJjb250ZWluZXJcIjogXCJTb2NpYWxNZWRpYUljb25zX2NvbnRlaW5lcl9fMjJ5TF9cIixcblx0XCJjb250ZW50XCI6IFwiU29jaWFsTWVkaWFJY29uc19jb250ZW50X19QXy02R1wiLFxuXHRcImljb25Db250ZW50XCI6IFwiU29jaWFsTWVkaWFJY29uc19pY29uQ29udGVudF9fMmYwS0xcIixcblx0XCJpY29uQm9keVwiOiBcIlNvY2lhbE1lZGlhSWNvbnNfaWNvbkJvZHlfX0xXbExEXCIsXG5cdFwiaWNvblwiOiBcIlNvY2lhbE1lZGlhSWNvbnNfaWNvbl9fMUxVbmlcIlxufTtcbiIsIi8vIEV4cG9ydHNcbm1vZHVsZS5leHBvcnRzID0ge1xuXHRcImxvZ29fY29uYXRpbmVyXCI6IFwiTG9nb19sb2dvX2NvbmF0aW5lcl9fMWJ1TXVcIlxufTtcbiIsIi8vIEV4cG9ydHNcbm1vZHVsZS5leHBvcnRzID0ge1xuXHRcImhlYWRlcl9jb250YWluZXJfYmlnXCI6IFwiSGVhZGVyX2hlYWRlcl9jb250YWluZXJfYmlnX18xQmh5VlwiLFxuXHRcInRyYW5zaXRpb25cIjogXCJIZWFkZXJfdHJhbnNpdGlvbl9fMmhSWW9cIixcblx0XCJiYXJcIjogXCJIZWFkZXJfYmFyX19DX2dYM1wiLFxuXHRcImJhcl9jb250cm9sZXJcIjogXCJIZWFkZXJfYmFyX2NvbnRyb2xlcl9fM1JnX2lcIixcblx0XCJiYXJfY29udGVpbmVyXCI6IFwiSGVhZGVyX2Jhcl9jb250ZWluZXJfX2pnOTAwXCIsXG5cdFwiYmFyX2NvbnRlbnRcIjogXCJIZWFkZXJfYmFyX2NvbnRlbnRfXzFOMHlDXCIsXG5cdFwiYmFyX2l0ZW1zX2NvbnRcIjogXCJIZWFkZXJfYmFyX2l0ZW1zX2NvbnRfXzFTY3d6XCIsXG5cdFwiYmFyX2l0ZW1zXCI6IFwiSGVhZGVyX2Jhcl9pdGVtc19fR3ZzVndcIixcblx0XCJmb290YmFsbGVyXCI6IFwiSGVhZGVyX2Zvb3RiYWxsZXJfXzNTSU42XCIsXG5cdFwiaGVhZGVyX2NvbnRhaW5lcl9zbWFsbFwiOiBcIkhlYWRlcl9oZWFkZXJfY29udGFpbmVyX3NtYWxsX18zNzlWa1wiXG59O1xuIiwiLy8gRXhwb3J0c1xubW9kdWxlLmV4cG9ydHMgPSB7XG5cdFwiY29udGFpbmVyXCI6IFwiQnV0dG9uX2NvbnRhaW5lcl9fMTF6c1hcIixcblx0XCJjb250ZW50XCI6IFwiQnV0dG9uX2NvbnRlbnRfX3ZpQ1NXXCIsXG5cdFwiYWN0aXZlXCI6IFwiQnV0dG9uX2FjdGl2ZV9fMnFHTVdcIlxufTtcbiIsIi8vIEV4cG9ydHNcbm1vZHVsZS5leHBvcnRzID0ge1xuXHRcImNvbnRhaW5lclwiOiBcIk5hdkJhcl9jb250YWluZXJfXzFxSjdZXCIsXG5cdFwiY29udGVudFwiOiBcIk5hdkJhcl9jb250ZW50X18xR1FKZFwiLFxuXHRcInRvcF9vbl90YWJsZXRcIjogXCJOYXZCYXJfdG9wX29uX3RhYmxldF9fM0VIMzlcIixcblx0XCJib3R0b21fb25fdGFibGV0XCI6IFwiTmF2QmFyX2JvdHRvbV9vbl90YWJsZXRfX2V5ejlJXCIsXG5cdFwidGFibGV0XCI6IFwiTmF2QmFyX3RhYmxldF9fM0xQTW1cIlxufTtcbiIsIi8vIEV4cG9ydHNcbm1vZHVsZS5leHBvcnRzID0ge1xuXHRcImNvbnRhaW5lclwiOiBcIkljb25fY29udGFpbmVyX18zNE5mOVwiXG59O1xuIiwiLy8gRXhwb3J0c1xubW9kdWxlLmV4cG9ydHMgPSB7XG5cdFwiY29udGFpbmVyXCI6IFwiU29jaWFsTWVkaWFNb2RhbF9jb250YWluZXJfXzNmc1hrXCIsXG5cdFwiY29udGVudFwiOiBcIlNvY2lhbE1lZGlhTW9kYWxfY29udGVudF9fMTdGS0VcIlxufTtcbiIsIi8vIEV4cG9ydHNcbm1vZHVsZS5leHBvcnRzID0ge1xuXHRcImNvbnRhaW5lclwiOiBcIlNvY2lhbE1lZGlhX2NvbnRhaW5lcl9fMS15WW9cIlxufTtcbiIsIi8vIEV4cG9ydHNcbm1vZHVsZS5leHBvcnRzID0ge1xuXHRcImNvbnRhaW5lclwiOiBcIkNvbnRhY3RzX2NvbnRhaW5lcl9fMml0MFZcIixcblx0XCJjb250ZW50XCI6IFwiQ29udGFjdHNfY29udGVudF9fMmZkcmtcIixcblx0XCJtb2RhbF9jb250ZW50XCI6IFwiQ29udGFjdHNfbW9kYWxfY29udGVudF9fMlZlX3ZcIixcblx0XCJjb250ZW50X2NvbnRhaW5lclwiOiBcIkNvbnRhY3RzX2NvbnRlbnRfY29udGFpbmVyX18yMGNvQVwiLFxuXHRcInRvcFwiOiBcIkNvbnRhY3RzX3RvcF9fMmdUelNcIixcblx0XCJyb3dzXCI6IFwiQ29udGFjdHNfcm93c19fM1poRVRcIixcblx0XCJyb3dcIjogXCJDb250YWN0c19yb3dfX0FpWktqXCIsXG5cdFwiaW1nXCI6IFwiQ29udGFjdHNfaW1nX19kdlgtYVwiLFxuXHRcInRleHRcIjogXCJDb250YWN0c190ZXh0X18yRDlxY1wiLFxuXHRcIm9wZW5cIjogXCJDb250YWN0c19vcGVuX18zQ0hKX1wiLFxuXHRcInJpZ2h0TGVmdFwiOiBcIkNvbnRhY3RzX3JpZ2h0TGVmdF9fMnJsYjhcIixcblx0XCJjbG9zZVwiOiBcIkNvbnRhY3RzX2Nsb3NlX19WaTdnN1wiXG59O1xuIiwiLy8gRXhwb3J0c1xubW9kdWxlLmV4cG9ydHMgPSB7XG5cdFwiY29udGFpbmVyXCI6IFwiSW5wdXRDb250YWluZXJfY29udGFpbmVyX18xS3p2U1wiLFxuXHRcImxhYmVsX2NvbnRlbnRcIjogXCJJbnB1dENvbnRhaW5lcl9sYWJlbF9jb250ZW50X18yX3lBUVwiLFxuXHRcImlucHV0X2NvbnRhaW5lclwiOiBcIklucHV0Q29udGFpbmVyX2lucHV0X2NvbnRhaW5lcl9fMWJUUkpcIixcblx0XCJpbnB1dF9zdWNjZXNzX2NvbnRlbnRcIjogXCJJbnB1dENvbnRhaW5lcl9pbnB1dF9zdWNjZXNzX2NvbnRlbnRfXzF5T1pEXCIsXG5cdFwiaW5wdXRfZXJyb3JfY29udGVudFwiOiBcIklucHV0Q29udGFpbmVyX2lucHV0X2Vycm9yX2NvbnRlbnRfXzMtVzJXXCJcbn07XG4iLCIvLyBFeHBvcnRzXG5tb2R1bGUuZXhwb3J0cyA9IHtcblx0XCJtb2RhbENvbnRlaW5lclwiOiBcIk1vZGFsX21vZGFsQ29udGVpbmVyX18zZzhJZlwiLFxuXHRcInRyYW5zaXRpb25cIjogXCJNb2RhbF90cmFuc2l0aW9uX18xa2Z2OVwiLFxuXHRcIm1vZGFsQ29udGVudFwiOiBcIk1vZGFsX21vZGFsQ29udGVudF9fMS1PNDdcIlxufTtcbiIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIkBob29rZm9ybS9yZXNvbHZlcnMveXVwXCIpOzsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJAcmVkdXhqcy90b29sa2l0XCIpOzsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJheGlvc1wiKTs7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwibmV4dC10cmFuc2xhdGUvYXBwV2l0aEkxOG5cIik7OyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIm5leHQtdHJhbnNsYXRlL3VzZVRyYW5zbGF0aW9uXCIpOzsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJuZXh0L2Rpc3QvbmV4dC1zZXJ2ZXIvbGliL3JvdXRlci1jb250ZXh0LmpzXCIpOzsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJuZXh0L2Rpc3QvbmV4dC1zZXJ2ZXIvbGliL3JvdXRlci91dGlscy9nZXQtYXNzZXQtcGF0aC1mcm9tLXJvdXRlLmpzXCIpOzsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJuZXh0L2hlYWRcIik7OyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlYWN0XCIpOzsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdC1iZWF1dGlmdWwtZG5kXCIpOzsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdC1kb21cIik7OyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlYWN0LWZhY2Vib29rLWxvZ2luXCIpOzsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdC1nb29nbGUtbG9naW5cIik7OyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlYWN0LWhvb2stZm9ybVwiKTs7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVhY3QtaXNcIik7OyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlYWN0LXJlZHV4XCIpOzsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdC10b2FzdGlmeVwiKTs7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVhY3QtdHdpdHRlci1sb2dpblwiKTs7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVhY3QvanN4LWRldi1ydW50aW1lXCIpOzsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJ5dXBcIik7OyIsIi8qIChpZ25vcmVkKSAqLyJdLCJzb3VyY2VSb290IjoiIn0=