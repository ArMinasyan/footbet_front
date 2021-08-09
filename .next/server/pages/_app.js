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
/* harmony import */ var next_dist_client_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/dist/client/router */ "./node_modules/next/dist/client/router.js");
/* harmony import */ var next_translate_useTranslation__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! next-translate/useTranslation */ "next-translate/useTranslation");
/* harmony import */ var next_translate_useTranslation__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_translate_useTranslation__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _BarItems_module_scss__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./BarItems.module.scss */ "./components/Header/Bar/BarItems/BarItems.module.scss");
/* harmony import */ var _BarItems_module_scss__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(_BarItems_module_scss__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _LanguageDrop_LanguageDrop__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./LanguageDrop/LanguageDrop */ "./components/Header/Bar/BarItems/LanguageDrop/LanguageDrop.jsx");
/* harmony import */ var _Logged_Logged__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./Logged/Logged */ "./components/Header/Bar/BarItems/Logged/Logged.jsx");
/* harmony import */ var _public_images_header_register_png__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../../../../../public/images/header/register.png */ "./public/images/header/register.png");
/* harmony import */ var _public_images_header_login_png__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../../../../../../public/images/header/login.png */ "./public/images/header/login.png");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! react-redux */ "react-redux");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var _redux_features_userSlice__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../../../redux/features/userSlice */ "./redux/features/userSlice.js");


var _jsxFileName = "C:\\Users\\user\\Desktop\\projects\\ait-projects\\foot-bet\\components\\Header\\Bar\\BarItems\\BarItems.jsx";
// hooks and helpers

 // import { user_data } from '/src/user/user'

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
  } = next_translate_useTranslation__WEBPACK_IMPORTED_MODULE_4___default()('common');
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

  const router = (0,next_dist_client_router__WEBPACK_IMPORTED_MODULE_3__.useRouter)(),
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

  const user_data = (0,react_redux__WEBPACK_IMPORTED_MODULE_10__.useSelector)(_redux_features_userSlice__WEBPACK_IMPORTED_MODULE_11__.selectUser);
  console.log(user_data);
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
    children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
      className: `${(_BarItems_module_scss__WEBPACK_IMPORTED_MODULE_12___default().bar_item_container)} ${bar_items} ${router.pathname !== '/' ? (_BarItems_module_scss__WEBPACK_IMPORTED_MODULE_12___default().for_mobile) : null}`,
      children: [userLogged ? /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_Logged_Logged__WEBPACK_IMPORTED_MODULE_7__.Logged, {
        data: user_data
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 63,
        columnNumber: 35
      }, this) : /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
        className: (_BarItems_module_scss__WEBPACK_IMPORTED_MODULE_12___default().auth_container),
        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
          className: (_BarItems_module_scss__WEBPACK_IMPORTED_MODULE_12___default().auth_buttons),
          children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
            className: (_BarItems_module_scss__WEBPACK_IMPORTED_MODULE_12___default().sign_up_button),
            children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_5___default()), {
              href: registration_path,
              children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("img", {
                src: _public_images_header_register_png__WEBPACK_IMPORTED_MODULE_8__.default.src,
                alt: ""
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 68,
                columnNumber: 41
              }, this)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 67,
              columnNumber: 37
            }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_5___default()), {
              href: registration_path,
              children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("span", {
                children: registration
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 71,
                columnNumber: 41
              }, this)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 70,
              columnNumber: 37
            }, this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 66,
            columnNumber: 33
          }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
            className: (_BarItems_module_scss__WEBPACK_IMPORTED_MODULE_12___default().sign_in_button),
            onClick: loginModalHandle,
            children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("img", {
              src: _public_images_header_login_png__WEBPACK_IMPORTED_MODULE_9__.default.src,
              alt: ""
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 82,
              columnNumber: 37
            }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("span", {
              children: login
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 83,
              columnNumber: 37
            }, this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 78,
            columnNumber: 33
          }, this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 65,
          columnNumber: 29
        }, this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 64,
        columnNumber: 25
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
        className: (_BarItems_module_scss__WEBPACK_IMPORTED_MODULE_12___default().lang_button),
        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
          className: (_BarItems_module_scss__WEBPACK_IMPORTED_MODULE_12___default().lang_button_content),
          style: showDrop ? {
            display: 'none'
          } : null,
          onClick: () => setShowDrop(true),
          children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("span", {
            children: translate(`${languagesTitle.contentOnTitle}`)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 98,
            columnNumber: 29
          }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("img", {
            src: languagesTitle.icon,
            alt: "lang-flag"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 103,
            columnNumber: 29
          }, this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 93,
          columnNumber: 25
        }, this), showDrop && /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_LanguageDrop_LanguageDrop__WEBPACK_IMPORTED_MODULE_6__.LanguageDrop, {
          click: changeLangTitle,
          onClose: () => setShowDrop(false),
          data: languages_data
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 108,
          columnNumber: 38
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 92,
        columnNumber: 21
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 62,
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
        fullName: data.username,
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
/* harmony import */ var _public_images_common_userDefault_png__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../../../../public/images/common/userDefault.png */ "./public/images/common/userDefault.png");
/* harmony import */ var next_translate_useTranslation__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! next-translate/useTranslation */ "next-translate/useTranslation");
/* harmony import */ var next_translate_useTranslation__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(next_translate_useTranslation__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _LoggedDrop_module_scss__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./LoggedDrop.module.scss */ "./components/Header/Bar/BarItems/Logged/LoggedDrop/LoggedDrop.module.scss");
/* harmony import */ var _LoggedDrop_module_scss__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(_LoggedDrop_module_scss__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var _public_images_common_phone_png__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../../../../../public/images/common/phone.png */ "./public/images/common/phone.png");
/* harmony import */ var _redux_features_userSlice__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../../../../../redux/features/userSlice */ "./redux/features/userSlice.js");

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
  var _user$photo;

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
  } = next_translate_useTranslation__WEBPACK_IMPORTED_MODULE_5___default()('common'),
        translationPath = 'commons.',
        translate = key => t(`${translationPath}${key}`),
        dispatch = (0,react_redux__WEBPACK_IMPORTED_MODULE_3__.useDispatch)();

  function _logout() {
    dispatch((0,_redux_features_userSlice__WEBPACK_IMPORTED_MODULE_8__.logout)());
    router.push(`/`);
  }

  function goToPersonal() {
    router.push(`/personal`);
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
          onClick: () => _logout(),
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
      var _await$request$data, _await$request$data2;

      const {
        token
      } = (_await$request$data = (await (0,_lib_er_lib__WEBPACK_IMPORTED_MODULE_5__.request)(_lib_request_destinations__WEBPACK_IMPORTED_MODULE_13__.LOGIN, data)).data) === null || _await$request$data === void 0 ? void 0 : _await$request$data.data;
      (0,_lib_er_lib__WEBPACK_IMPORTED_MODULE_5__.setCookie)(`access-token`, token, 1);
      const user = (_await$request$data2 = (await (0,_lib_er_lib__WEBPACK_IMPORTED_MODULE_5__.request)(_lib_request_destinations__WEBPACK_IMPORTED_MODULE_13__.GET_ACCOUNT_INFO, {}, {
        auth: true
      })).data) === null || _await$request$data2 === void 0 ? void 0 : _await$request$data2.data;
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
      lineNumber: 73,
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
          lineNumber: 79,
          columnNumber: 21
        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_common_auth_InputContainer_InputContainer__WEBPACK_IMPORTED_MODULE_6__.InputContainer, {
          id: "password",
          type: "password",
          placeholder: translate('password'),
          errors: !!errors.password,
          other: register('password')
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 86,
          columnNumber: 21
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 78,
        columnNumber: 17
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_common_ResetPasswordLink__WEBPACK_IMPORTED_MODULE_8__.ResetPasswordLink, {
        click: handleResetPassModal,
        styles: (_LoginForm_module_scss__WEBPACK_IMPORTED_MODULE_16___default().reset_password),
        content: t('header.loginModal.resPassword')
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 94,
        columnNumber: 17
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_common_Submit__WEBPACK_IMPORTED_MODULE_9__.Submit, {
        styles: (_LoginForm_module_scss__WEBPACK_IMPORTED_MODULE_16___default().submit),
        content: t('header.loginModal.submit')
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 99,
        columnNumber: 17
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 77,
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
      lineNumber: 104,
      columnNumber: 13
    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_toastify__WEBPACK_IMPORTED_MODULE_14__.ToastContainer, {}, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 115,
      columnNumber: 13
    }, this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 72,
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

const AUTH_URL = _constants__WEBPACK_IMPORTED_MODULE_0__.host + `auth`;
const ACCOUNT_URL = _constants__WEBPACK_IMPORTED_MODULE_0__.host + `account`;
const REGISTER = {
  url: AUTH_URL + '/registration',
  method: 'post'
};
const LOGIN = {
  url: AUTH_URL + '/login',
  method: 'post'
};
const GET_ACCOUNT_INFO = {
  url: ACCOUNT_URL + '/info',
  method: 'get'
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
/* harmony import */ var redux_persist_integration_react__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! redux-persist/integration/react */ "redux-persist/integration/react");
/* harmony import */ var redux_persist_integration_react__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(redux_persist_integration_react__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var react_beautiful_dnd__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! react-beautiful-dnd */ "react-beautiful-dnd");
/* harmony import */ var react_beautiful_dnd__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(react_beautiful_dnd__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var _styles_static_empty_css__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./../styles/static-empty.css */ "./styles/static-empty.css");
/* harmony import */ var _styles_static_empty_css__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(_styles_static_empty_css__WEBPACK_IMPORTED_MODULE_12__);

var _jsxFileName = "C:\\Users\\user\\Desktop\\projects\\ait-projects\\foot-bet\\pages\\_app.js";

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }














const __Page_Next_Translate__ = function MyApp({
  Component,
  pageProps
}) {
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_redux__WEBPACK_IMPORTED_MODULE_8__.Provider, {
    store: _redux_store__WEBPACK_IMPORTED_MODULE_9__.store,
    children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(redux_persist_integration_react__WEBPACK_IMPORTED_MODULE_10__.PersistGate, {
      loading: null,
      persistor: _redux_store__WEBPACK_IMPORTED_MODULE_9__.persistor,
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_head__WEBPACK_IMPORTED_MODULE_6___default()), {
        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("title", {
          children: "FootBet"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 24,
          columnNumber: 11
        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("meta", {
          name: "viewport",
          content: "initial-scale=1.0, width=device-width"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 25,
          columnNumber: 11
        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("script", {
          type: "text/javascript",
          src: "//vk.com/js/api/openapi.js?152"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 26,
          columnNumber: 11
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 23,
        columnNumber: 9
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_layouts_layout_wrapper__WEBPACK_IMPORTED_MODULE_7__.default, _objectSpread(_objectSpread({}, pageProps), {}, {
        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Component, _objectSpread({}, pageProps), void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 29,
          columnNumber: 11
        }, this)
      }), void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 28,
        columnNumber: 9
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 22,
      columnNumber: 7
    }, this)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 21,
    columnNumber: 5
  }, this);
};

async function getServerSideProps(context) {
  (0,react_beautiful_dnd__WEBPACK_IMPORTED_MODULE_11__.resetServerContext)();
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
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "store": function() { return /* binding */ store; },
/* harmony export */   "persistor": function() { return /* binding */ persistor; }
/* harmony export */ });
/* harmony import */ var _reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @reduxjs/toolkit */ "@reduxjs/toolkit");
/* harmony import */ var _reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _features_userSlice__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./features/userSlice */ "./redux/features/userSlice.js");
/* harmony import */ var _features_matchSlice__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./features/matchSlice */ "./redux/features/matchSlice.js");
/* harmony import */ var redux_persist__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! redux-persist */ "redux-persist");
/* harmony import */ var redux_persist__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(redux_persist__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var redux_persist_lib_storage__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! redux-persist/lib/storage */ "redux-persist/lib/storage");
/* harmony import */ var redux_persist_lib_storage__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(redux_persist_lib_storage__WEBPACK_IMPORTED_MODULE_4__);
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





const persistConfig = {
  key: 'root',
  version: 1,
  storage: (redux_persist_lib_storage__WEBPACK_IMPORTED_MODULE_4___default())
};
const persistedReducer = (0,redux_persist__WEBPACK_IMPORTED_MODULE_3__.persistReducer)(persistConfig, (0,_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__.combineReducers)({
  user: _features_userSlice__WEBPACK_IMPORTED_MODULE_1__.default,
  match: _features_matchSlice__WEBPACK_IMPORTED_MODULE_2__.default
}));
const store = (0,_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__.configureStore)({
  reducer: persistedReducer,
  middleware: getDefaultMiddleware => getDefaultMiddleware({
    serializableCheck: {
      ignoredActions: [redux_persist__WEBPACK_IMPORTED_MODULE_3__.FLUSH, redux_persist__WEBPACK_IMPORTED_MODULE_3__.REHYDRATE, redux_persist__WEBPACK_IMPORTED_MODULE_3__.PAUSE, redux_persist__WEBPACK_IMPORTED_MODULE_3__.PERSIST, redux_persist__WEBPACK_IMPORTED_MODULE_3__.PURGE, redux_persist__WEBPACK_IMPORTED_MODULE_3__.REGISTER]
    }
  })
});
const persistor = (0,redux_persist__WEBPACK_IMPORTED_MODULE_3__.persistStore)(store);

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

/***/ "redux-persist":
/*!********************************!*\
  !*** external "redux-persist" ***!
  \********************************/
/***/ (function(module) {

"use strict";
module.exports = require("redux-persist");;

/***/ }),

/***/ "redux-persist/integration/react":
/*!**************************************************!*\
  !*** external "redux-persist/integration/react" ***!
  \**************************************************/
/***/ (function(module) {

"use strict";
module.exports = require("redux-persist/integration/react");;

/***/ }),

/***/ "redux-persist/lib/storage":
/*!********************************************!*\
  !*** external "redux-persist/lib/storage" ***!
  \********************************************/
/***/ (function(module) {

"use strict";
module.exports = require("redux-persist/lib/storage");;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9mb290LWJldC8uL2xvY2FsZXN8bGF6eXwvXi8uKi8uKiQvfGdyb3VwT3B0aW9uczoge318bmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly9mb290LWJldC8uL25vZGVfbW9kdWxlcy9AYmFiZWwvcnVudGltZS9oZWxwZXJzL2ludGVyb3BSZXF1aXJlRGVmYXVsdC5qcyIsIndlYnBhY2s6Ly9mb290LWJldC8uL25vZGVfbW9kdWxlcy9AYmFiZWwvcnVudGltZS9oZWxwZXJzL2ludGVyb3BSZXF1aXJlV2lsZGNhcmQuanMiLCJ3ZWJwYWNrOi8vZm9vdC1iZXQvLi9ub2RlX21vZHVsZXMvQGJhYmVsL3J1bnRpbWUvaGVscGVycy90eXBlb2YuanMiLCJ3ZWJwYWNrOi8vZm9vdC1iZXQvLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L25leHQtc2VydmVyL3NlcnZlci9kZW5vcm1hbGl6ZS1wYWdlLXBhdGguanMiLCJ3ZWJwYWNrOi8vZm9vdC1iZXQvLi9ub2RlX21vZHVsZXMvbmV4dC9saW5rLmpzIiwid2VicGFjazovL2Zvb3QtYmV0Ly4vY29tcG9uZW50cy9Gb290ZXIvQmFsbC9CYWxsLmpzeCIsIndlYnBhY2s6Ly9mb290LWJldC8uL2NvbXBvbmVudHMvRm9vdGVyL0Zvb3Rlci5qc3giLCJ3ZWJwYWNrOi8vZm9vdC1iZXQvLi9jb21wb25lbnRzL0Zvb3Rlci9OYXZpZ2F0aW9uL0xpc3QvTGlzdC5qc3giLCJ3ZWJwYWNrOi8vZm9vdC1iZXQvLi9jb21wb25lbnRzL0Zvb3Rlci9OYXZpZ2F0aW9uL05hdmlnYXRpb24uanN4Iiwid2VicGFjazovL2Zvb3QtYmV0Ly4vY29tcG9uZW50cy9Gb290ZXIvTmF2aWdhdGlvbi9uYXZfZGF0YS5qcyIsIndlYnBhY2s6Ly9mb290LWJldC8uL2NvbXBvbmVudHMvRm9vdGVyL1NvY2lhbE1lZGlhL1BTSWNvbnMvUFMuanN4Iiwid2VicGFjazovL2Zvb3QtYmV0Ly4vY29tcG9uZW50cy9Gb290ZXIvU29jaWFsTWVkaWEvU01JY29ucy9TTS5qc3giLCJ3ZWJwYWNrOi8vZm9vdC1iZXQvLi9jb21wb25lbnRzL0Zvb3Rlci9Tb2NpYWxNZWRpYS9Tb2NpYWxNZWRpYS5qc3giLCJ3ZWJwYWNrOi8vZm9vdC1iZXQvLi9jb21wb25lbnRzL0Zvb3Rlci9Tb2NpYWxNZWRpYS9jb21tb24vSWNvbi9JY29uLmpzeCIsIndlYnBhY2s6Ly9mb290LWJldC8uL2NvbXBvbmVudHMvSGVhZGVyL0Jhci9CYXIuanN4Iiwid2VicGFjazovL2Zvb3QtYmV0Ly4vY29tcG9uZW50cy9IZWFkZXIvQmFyL0Jhckl0ZW1zL0Jhckl0ZW1zLmpzeCIsIndlYnBhY2s6Ly9mb290LWJldC8uL2NvbXBvbmVudHMvSGVhZGVyL0Jhci9CYXJJdGVtcy9MYW5ndWFnZURyb3BDb25maWdzL2xhbmctY29uZmlncy5qcyIsIndlYnBhY2s6Ly9mb290LWJldC8uL2NvbXBvbmVudHMvSGVhZGVyL0Jhci9CYXJJdGVtcy9MYW5ndWFnZURyb3AvTGFuZ3VhZ2VEcm9wLmpzeCIsIndlYnBhY2s6Ly9mb290LWJldC8uL2NvbXBvbmVudHMvSGVhZGVyL0Jhci9CYXJJdGVtcy9Mb2dnZWQvTG9nZ2VkLmpzeCIsIndlYnBhY2s6Ly9mb290LWJldC8uL2NvbXBvbmVudHMvSGVhZGVyL0Jhci9CYXJJdGVtcy9Mb2dnZWQvTG9nZ2VkRHJvcC9Mb2dnZWREcm9wLmpzeCIsIndlYnBhY2s6Ly9mb290LWJldC8uL2NvbXBvbmVudHMvSGVhZGVyL0Jhci9CYXJJdGVtcy9Mb2dnZWQvTG9nZ2VkV2FsbHBlci9Mb2dnZWRXYWxscGVyLmpzeCIsIndlYnBhY2s6Ly9mb290LWJldC8uL2NvbXBvbmVudHMvSGVhZGVyL0Jhci9Ecm9wZG93bk1lbnUvRHJvcGRvd24uanN4Iiwid2VicGFjazovL2Zvb3QtYmV0Ly4vY29tcG9uZW50cy9IZWFkZXIvQmFyL0xvZ2luL0xvZ2luLmpzeCIsIndlYnBhY2s6Ly9mb290LWJldC8uL2NvbXBvbmVudHMvSGVhZGVyL0Jhci9Mb2dpbi9Mb2dpbkZvcm0vTG9naW5Gb3JtLmpzeCIsIndlYnBhY2s6Ly9mb290LWJldC8uL2NvbXBvbmVudHMvSGVhZGVyL0Jhci9Mb2dpbi9SZXNldFBhc3N3b3JkL0ZvcmdvdFBhc3N3b3JkL0ZvcmdvdFBhc3N3b3JkLmpzeCIsIndlYnBhY2s6Ly9mb290LWJldC8uL2NvbXBvbmVudHMvSGVhZGVyL0Jhci9Mb2dpbi9SZXNldFBhc3N3b3JkL0dldEVtYWlsQ29kZS9HZXRFbWFpbENvZGUuanN4Iiwid2VicGFjazovL2Zvb3QtYmV0Ly4vY29tcG9uZW50cy9IZWFkZXIvQmFyL0xvZ2luL1Jlc2V0UGFzc3dvcmQvR2V0RW1haWxDb2RlL2lucHV0X2NvbmZpZ3MuanMiLCJ3ZWJwYWNrOi8vZm9vdC1iZXQvLi9jb21wb25lbnRzL0hlYWRlci9CYXIvTG9naW4vUmVzZXRQYXNzd29yZC9OZXdQYXNzd29yZC9OZXdQYXNzd29yZC5qc3giLCJ3ZWJwYWNrOi8vZm9vdC1iZXQvLi9jb21wb25lbnRzL0hlYWRlci9CYXIvTG9naW4vUmVzZXRQYXNzd29yZC9TdWNjZXNzL1N1Y2Nlc3MuanN4Iiwid2VicGFjazovL2Zvb3QtYmV0Ly4vY29tcG9uZW50cy9IZWFkZXIvQmFyL0xvZ2luL1NvY2lhbE1lZGlhSWNvbnMvU29jaWFsTWVkaWFJY29ucy5qc3giLCJ3ZWJwYWNrOi8vZm9vdC1iZXQvLi9jb21wb25lbnRzL0hlYWRlci9CYXIvTG9naW4vY29tbW9uL1Jlc2V0UGFzc3dvcmRMaW5rLmpzeCIsIndlYnBhY2s6Ly9mb290LWJldC8uL2NvbXBvbmVudHMvSGVhZGVyL0Jhci9Mb2dpbi9jb21tb24vU3VibWl0LmpzeCIsIndlYnBhY2s6Ly9mb290LWJldC8uL2NvbXBvbmVudHMvSGVhZGVyL0Jhci9Mb2dpbi9jb21tb24vVGl0bGUuanN4Iiwid2VicGFjazovL2Zvb3QtYmV0Ly4vY29tcG9uZW50cy9IZWFkZXIvQmFyL0xvZ2luL2NvbW1vbi9Ub1JlZ2lzdGVyLmpzeCIsIndlYnBhY2s6Ly9mb290LWJldC8uL2NvbXBvbmVudHMvSGVhZGVyL0Jhci9Mb2dvL0xvZ28uanN4Iiwid2VicGFjazovL2Zvb3QtYmV0Ly4vY29tcG9uZW50cy9IZWFkZXIvSGVhZGVyLmpzeCIsIndlYnBhY2s6Ly9mb290LWJldC8uL2NvbXBvbmVudHMvSGVhZGVyL05hdkJhci9CdXR0b24vQnV0dG9uLmpzeCIsIndlYnBhY2s6Ly9mb290LWJldC8uL2NvbXBvbmVudHMvSGVhZGVyL05hdkJhci9OYXZCYXIuanN4Iiwid2VicGFjazovL2Zvb3QtYmV0Ly4vY29tcG9uZW50cy9IZWFkZXIvU29jaWFsTWVkaWEvSWNvbi9JY29uLmpzeCIsIndlYnBhY2s6Ly9mb290LWJldC8uL2NvbXBvbmVudHMvSGVhZGVyL1NvY2lhbE1lZGlhL01vZGFscy9GYWNlYm9vay9GYWNlYm9vay5qc3giLCJ3ZWJwYWNrOi8vZm9vdC1iZXQvLi9jb21wb25lbnRzL0hlYWRlci9Tb2NpYWxNZWRpYS9Nb2RhbHMvSW5zdGFncmFtL0luc3RhZ3JhbS5qc3giLCJ3ZWJwYWNrOi8vZm9vdC1iZXQvLi9jb21wb25lbnRzL0hlYWRlci9Tb2NpYWxNZWRpYS9Nb2RhbHMvUGhvbmUvUGhvbmUuanN4Iiwid2VicGFjazovL2Zvb3QtYmV0Ly4vY29tcG9uZW50cy9IZWFkZXIvU29jaWFsTWVkaWEvTW9kYWxzL1RlbGVncmFtL1RlbGVncmFtLmpzeCIsIndlYnBhY2s6Ly9mb290LWJldC8uL2NvbXBvbmVudHMvSGVhZGVyL1NvY2lhbE1lZGlhL01vZGFscy9WaWJlci9WaWJlci5qc3giLCJ3ZWJwYWNrOi8vZm9vdC1iZXQvLi9jb21wb25lbnRzL0hlYWRlci9Tb2NpYWxNZWRpYS9Nb2RhbHMvV2F0c1VwL1dhdHNVcC5qc3giLCJ3ZWJwYWNrOi8vZm9vdC1iZXQvLi9jb21wb25lbnRzL0hlYWRlci9Tb2NpYWxNZWRpYS9Tb2NpYWxNZWRpYS5qc3giLCJ3ZWJwYWNrOi8vZm9vdC1iZXQvLi9jb21wb25lbnRzL1BhZ2VzL0NvbnRhY3RzL0NvbnRhY3RzTW9kYWwuanN4Iiwid2VicGFjazovL2Zvb3QtYmV0Ly4vY29tcG9uZW50cy9QYWdlcy9Db250YWN0cy9jb250YWN0c19kYXRhLmpzIiwid2VicGFjazovL2Zvb3QtYmV0Ly4vY29tcG9uZW50cy9jb21tb24vYXV0aC9JbnB1dENvbnRhaW5lci9JbnB1dENvbnRhaW5lci5qc3giLCJ3ZWJwYWNrOi8vZm9vdC1iZXQvLi9jb21wb25lbnRzL2NvbW1vbi9hdXRoL01vZGFsL01vZGFsLmpzeCIsIndlYnBhY2s6Ly9mb290LWJldC8uL2xheW91dHMvRXJyb3IuanN4Iiwid2VicGFjazovL2Zvb3QtYmV0Ly4vbGF5b3V0cy9NYWluLmpzeCIsIndlYnBhY2s6Ly9mb290LWJldC8uL2xheW91dHMvUmVnaXN0ZXIuanN4Iiwid2VicGFjazovL2Zvb3QtYmV0Ly4vbGF5b3V0cy9XaXRob3V0UGhvdG8uanN4Iiwid2VicGFjazovL2Zvb3QtYmV0Ly4vbGF5b3V0cy9sYXlvdXQtd3JhcHBlci5qc3giLCJ3ZWJwYWNrOi8vZm9vdC1iZXQvLi9saWIvY29uc3RhbnRzLmpzIiwid2VicGFjazovL2Zvb3QtYmV0Ly4vbGliL2VyLmxpYi5qcyIsIndlYnBhY2s6Ly9mb290LWJldC8uL2xpYi9yZXF1ZXN0LWRlc3RpbmF0aW9ucy5qcyIsIndlYnBhY2s6Ly9mb290LWJldC8uL25vZGVfbW9kdWxlcy9uZXh0L2Rpc3QvY2xpZW50L2xpbmsuanMiLCJ3ZWJwYWNrOi8vZm9vdC1iZXQvLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L2NsaWVudC9ub3JtYWxpemUtdHJhaWxpbmctc2xhc2guanMiLCJ3ZWJwYWNrOi8vZm9vdC1iZXQvLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L2NsaWVudC9yZXF1ZXN0LWlkbGUtY2FsbGJhY2suanMiLCJ3ZWJwYWNrOi8vZm9vdC1iZXQvLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L2NsaWVudC9yb3V0ZS1sb2FkZXIuanMiLCJ3ZWJwYWNrOi8vZm9vdC1iZXQvLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L2NsaWVudC9yb3V0ZXIuanMiLCJ3ZWJwYWNrOi8vZm9vdC1iZXQvLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L2NsaWVudC91c2UtaW50ZXJzZWN0aW9uLmpzIiwid2VicGFjazovL2Zvb3QtYmV0Ly4vbm9kZV9tb2R1bGVzL25leHQvZGlzdC9jbGllbnQvd2l0aC1yb3V0ZXIuanMiLCJ3ZWJwYWNrOi8vZm9vdC1iZXQvLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L25leHQtc2VydmVyL2xpYi9pMThuL2RldGVjdC1kb21haW4tbG9jYWxlLmpzIiwid2VicGFjazovL2Zvb3QtYmV0Ly4vbm9kZV9tb2R1bGVzL25leHQvZGlzdC9uZXh0LXNlcnZlci9saWIvaTE4bi9ub3JtYWxpemUtbG9jYWxlLXBhdGguanMiLCJ3ZWJwYWNrOi8vZm9vdC1iZXQvLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L25leHQtc2VydmVyL2xpYi9taXR0LmpzIiwid2VicGFjazovL2Zvb3QtYmV0Ly4vbm9kZV9tb2R1bGVzL25leHQvZGlzdC9uZXh0LXNlcnZlci9saWIvcm91dGVyL3JvdXRlci5qcyIsIndlYnBhY2s6Ly9mb290LWJldC8uL25vZGVfbW9kdWxlcy9uZXh0L2Rpc3QvbmV4dC1zZXJ2ZXIvbGliL3JvdXRlci91dGlscy9mb3JtYXQtdXJsLmpzIiwid2VicGFjazovL2Zvb3QtYmV0Ly4vbm9kZV9tb2R1bGVzL25leHQvZGlzdC9uZXh0LXNlcnZlci9saWIvcm91dGVyL3V0aWxzL2lzLWR5bmFtaWMuanMiLCJ3ZWJwYWNrOi8vZm9vdC1iZXQvLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L25leHQtc2VydmVyL2xpYi9yb3V0ZXIvdXRpbHMvcGFyc2UtcmVsYXRpdmUtdXJsLmpzIiwid2VicGFjazovL2Zvb3QtYmV0Ly4vbm9kZV9tb2R1bGVzL25leHQvZGlzdC9uZXh0LXNlcnZlci9saWIvcm91dGVyL3V0aWxzL3F1ZXJ5c3RyaW5nLmpzIiwid2VicGFjazovL2Zvb3QtYmV0Ly4vbm9kZV9tb2R1bGVzL25leHQvZGlzdC9uZXh0LXNlcnZlci9saWIvcm91dGVyL3V0aWxzL3JvdXRlLW1hdGNoZXIuanMiLCJ3ZWJwYWNrOi8vZm9vdC1iZXQvLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L25leHQtc2VydmVyL2xpYi9yb3V0ZXIvdXRpbHMvcm91dGUtcmVnZXguanMiLCJ3ZWJwYWNrOi8vZm9vdC1iZXQvLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L25leHQtc2VydmVyL2xpYi91dGlscy5qcyIsIndlYnBhY2s6Ly9mb290LWJldC8uL3BhZ2VzL19hcHAuanMiLCJ3ZWJwYWNrOi8vZm9vdC1iZXQvLi9yZWR1eC9mZWF0dXJlcy9tYXRjaFNsaWNlLmpzIiwid2VicGFjazovL2Zvb3QtYmV0Ly4vcmVkdXgvZmVhdHVyZXMvdXNlclNsaWNlLmpzIiwid2VicGFjazovL2Zvb3QtYmV0Ly4vcmVkdXgvc3RvcmUuanMiLCJ3ZWJwYWNrOi8vZm9vdC1iZXQvLi9wdWJsaWMvaW1hZ2VzL2NvbW1vbi9waG9uZS5wbmciLCJ3ZWJwYWNrOi8vZm9vdC1iZXQvLi9wdWJsaWMvaW1hZ2VzL2NvbW1vbi90cmlhbmdsZS5wbmciLCJ3ZWJwYWNrOi8vZm9vdC1iZXQvLi9wdWJsaWMvaW1hZ2VzL2NvbW1vbi91c2VyRGVmYXVsdC5wbmciLCJ3ZWJwYWNrOi8vZm9vdC1iZXQvLi9wdWJsaWMvaW1hZ2VzL2Zvb3Rlci9sZWZ0QmFsbC5wbmciLCJ3ZWJwYWNrOi8vZm9vdC1iZXQvLi9wdWJsaWMvaW1hZ2VzL2Zvb3Rlci9tYXN0ZXJDYXJkLnBuZyIsIndlYnBhY2s6Ly9mb290LWJldC8uL3B1YmxpYy9pbWFnZXMvZm9vdGVyL3BheXBhbC5wbmciLCJ3ZWJwYWNrOi8vZm9vdC1iZXQvLi9wdWJsaWMvaW1hZ2VzL2Zvb3Rlci92aXNhLnBuZyIsIndlYnBhY2s6Ly9mb290LWJldC8uL3B1YmxpYy9pbWFnZXMvaGVhZGVyL1NvY2lhbE1lZGlhL2Nsb3NlVmVjdG9yLnBuZyIsIndlYnBhY2s6Ly9mb290LWJldC8uL3B1YmxpYy9pbWFnZXMvaGVhZGVyL1NvY2lhbE1lZGlhL2VtYWlsLnN2ZyIsIndlYnBhY2s6Ly9mb290LWJldC8uL3B1YmxpYy9pbWFnZXMvaGVhZGVyL1NvY2lhbE1lZGlhL2ZhY2Vib29rLnN2ZyIsIndlYnBhY2s6Ly9mb290LWJldC8uL3B1YmxpYy9pbWFnZXMvaGVhZGVyL1NvY2lhbE1lZGlhL2luc3RhZ3JhbS5zdmciLCJ3ZWJwYWNrOi8vZm9vdC1iZXQvLi9wdWJsaWMvaW1hZ2VzL2hlYWRlci9Tb2NpYWxNZWRpYS9waG9uZS5zdmciLCJ3ZWJwYWNrOi8vZm9vdC1iZXQvLi9wdWJsaWMvaW1hZ2VzL2hlYWRlci9Tb2NpYWxNZWRpYS90ZWxlZ3JhbS5zdmciLCJ3ZWJwYWNrOi8vZm9vdC1iZXQvLi9wdWJsaWMvaW1hZ2VzL2hlYWRlci9Tb2NpYWxNZWRpYS92aWJlci5zdmciLCJ3ZWJwYWNrOi8vZm9vdC1iZXQvLi9wdWJsaWMvaW1hZ2VzL2hlYWRlci9Tb2NpYWxNZWRpYS93YXRzdXAuc3ZnIiwid2VicGFjazovL2Zvb3QtYmV0Ly4vcHVibGljL2ltYWdlcy9oZWFkZXIvZHJvcGRvd25fbGluZXMucG5nIiwid2VicGFjazovL2Zvb3QtYmV0Ly4vcHVibGljL2ltYWdlcy9oZWFkZXIvZmxhZ3MvYXJtLnN2ZyIsIndlYnBhY2s6Ly9mb290LWJldC8uL3B1YmxpYy9pbWFnZXMvaGVhZGVyL2ZsYWdzL2RldS5zdmciLCJ3ZWJwYWNrOi8vZm9vdC1iZXQvLi9wdWJsaWMvaW1hZ2VzL2hlYWRlci9mbGFncy9lbi5zdmciLCJ3ZWJwYWNrOi8vZm9vdC1iZXQvLi9wdWJsaWMvaW1hZ2VzL2hlYWRlci9mbGFncy9lc3Auc3ZnIiwid2VicGFjazovL2Zvb3QtYmV0Ly4vcHVibGljL2ltYWdlcy9oZWFkZXIvZmxhZ3MvZnJjLnN2ZyIsIndlYnBhY2s6Ly9mb290LWJldC8uL3B1YmxpYy9pbWFnZXMvaGVhZGVyL2ZsYWdzL3J1cy5wbmciLCJ3ZWJwYWNrOi8vZm9vdC1iZXQvLi9wdWJsaWMvaW1hZ2VzL2hlYWRlci9mb290YmFsbGVyLnN2ZyIsIndlYnBhY2s6Ly9mb290LWJldC8uL3B1YmxpYy9pbWFnZXMvaGVhZGVyL2xvZ2luLnBuZyIsIndlYnBhY2s6Ly9mb290LWJldC8uL3B1YmxpYy9pbWFnZXMvaGVhZGVyL2xvZ2luL2ZhY2Vib29rLnN2ZyIsIndlYnBhY2s6Ly9mb290LWJldC8uL3B1YmxpYy9pbWFnZXMvaGVhZGVyL2xvZ2luL2dtYWlsLnN2ZyIsIndlYnBhY2s6Ly9mb290LWJldC8uL3B1YmxpYy9pbWFnZXMvaGVhZGVyL2xvZ2luL3N1Y2Nlc3MucG5nIiwid2VicGFjazovL2Zvb3QtYmV0Ly4vcHVibGljL2ltYWdlcy9oZWFkZXIvbG9naW4vdHdpdHRlci5zdmciLCJ3ZWJwYWNrOi8vZm9vdC1iZXQvLi9wdWJsaWMvaW1hZ2VzL2hlYWRlci9sb2dpbi92ay5zdmciLCJ3ZWJwYWNrOi8vZm9vdC1iZXQvLi9wdWJsaWMvaW1hZ2VzL2hlYWRlci9sb2dvLnN2ZyIsIndlYnBhY2s6Ly9mb290LWJldC8uL3B1YmxpYy9pbWFnZXMvaGVhZGVyL3JlZ2lzdGVyLnBuZyIsIndlYnBhY2s6Ly9mb290LWJldC8uL3B1YmxpYy9pbWFnZXMvcGVyc29uYWwvYmFsbC5wbmciLCJ3ZWJwYWNrOi8vZm9vdC1iZXQvLi9jb21wb25lbnRzL0Zvb3Rlci9CYWxsL0JhbGwubW9kdWxlLnNjc3MiLCJ3ZWJwYWNrOi8vZm9vdC1iZXQvLi9jb21wb25lbnRzL0Zvb3Rlci9Gb290ZXIubW9kdWxlLnNjc3MiLCJ3ZWJwYWNrOi8vZm9vdC1iZXQvLi9jb21wb25lbnRzL0Zvb3Rlci9OYXZpZ2F0aW9uL0xpc3QvTGlzdC5tb2R1bGUuc2NzcyIsIndlYnBhY2s6Ly9mb290LWJldC8uL2NvbXBvbmVudHMvRm9vdGVyL05hdmlnYXRpb24vTmF2aWdhdGlvbi5tb2R1bGUuc2NzcyIsIndlYnBhY2s6Ly9mb290LWJldC8uL2NvbXBvbmVudHMvRm9vdGVyL1NvY2lhbE1lZGlhL1BTSWNvbnMvUFMubW9kdWxlLnNjc3MiLCJ3ZWJwYWNrOi8vZm9vdC1iZXQvLi9jb21wb25lbnRzL0Zvb3Rlci9Tb2NpYWxNZWRpYS9TTUljb25zL1NNLm1vZHVsZS5zY3NzIiwid2VicGFjazovL2Zvb3QtYmV0Ly4vY29tcG9uZW50cy9Gb290ZXIvU29jaWFsTWVkaWEvU29jaWFsTWVkaWEubW9kdWxlLnNjc3MiLCJ3ZWJwYWNrOi8vZm9vdC1iZXQvLi9jb21wb25lbnRzL0Zvb3Rlci9Tb2NpYWxNZWRpYS9jb21tb24vSWNvbi9JY29uLm1vZHVsZS5zY3NzIiwid2VicGFjazovL2Zvb3QtYmV0Ly4vY29tcG9uZW50cy9IZWFkZXIvQmFyL0Jhci5tb2R1bGUuc2NzcyIsIndlYnBhY2s6Ly9mb290LWJldC8uL2NvbXBvbmVudHMvSGVhZGVyL0Jhci9CYXJJdGVtcy9CYXJJdGVtcy5tb2R1bGUuc2NzcyIsIndlYnBhY2s6Ly9mb290LWJldC8uL2NvbXBvbmVudHMvSGVhZGVyL0Jhci9CYXJJdGVtcy9MYW5ndWFnZURyb3AvTGFuZ3VhZ2VEcm9wLm1vZHVsZS5zY3NzIiwid2VicGFjazovL2Zvb3QtYmV0Ly4vY29tcG9uZW50cy9IZWFkZXIvQmFyL0Jhckl0ZW1zL0xvZ2dlZC9Mb2dnZWQubW9kdWxlLnNjc3MiLCJ3ZWJwYWNrOi8vZm9vdC1iZXQvLi9jb21wb25lbnRzL0hlYWRlci9CYXIvQmFySXRlbXMvTG9nZ2VkL0xvZ2dlZERyb3AvTG9nZ2VkRHJvcC5tb2R1bGUuc2NzcyIsIndlYnBhY2s6Ly9mb290LWJldC8uL2NvbXBvbmVudHMvSGVhZGVyL0Jhci9CYXJJdGVtcy9Mb2dnZWQvTG9nZ2VkV2FsbHBlci9Mb2dnZWRXYWxscGVyLm1vZHVsZS5zY3NzIiwid2VicGFjazovL2Zvb3QtYmV0Ly4vY29tcG9uZW50cy9IZWFkZXIvQmFyL0Ryb3Bkb3duTWVudS9Ecm9wZG93bi5tb2R1bGUuc2NzcyIsIndlYnBhY2s6Ly9mb290LWJldC8uL2NvbXBvbmVudHMvSGVhZGVyL0Jhci9Mb2dpbi9Mb2dpbi5tb2R1bGUuc2NzcyIsIndlYnBhY2s6Ly9mb290LWJldC8uL2NvbXBvbmVudHMvSGVhZGVyL0Jhci9Mb2dpbi9Mb2dpbkZvcm0vTG9naW5Gb3JtLm1vZHVsZS5zY3NzIiwid2VicGFjazovL2Zvb3QtYmV0Ly4vY29tcG9uZW50cy9IZWFkZXIvQmFyL0xvZ2luL1Jlc2V0UGFzc3dvcmQvRm9yZ290UGFzc3dvcmQvRm9yZ290UGFzc3dvcmQubW9kdWxlLnNjc3MiLCJ3ZWJwYWNrOi8vZm9vdC1iZXQvLi9jb21wb25lbnRzL0hlYWRlci9CYXIvTG9naW4vUmVzZXRQYXNzd29yZC9HZXRFbWFpbENvZGUvR2V0RW1haWxDb2RlLm1vZHVsZS5zY3NzIiwid2VicGFjazovL2Zvb3QtYmV0Ly4vY29tcG9uZW50cy9IZWFkZXIvQmFyL0xvZ2luL1Jlc2V0UGFzc3dvcmQvTmV3UGFzc3dvcmQvTmV3UGFzc3dvcmQubW9kdWxlLnNjc3MiLCJ3ZWJwYWNrOi8vZm9vdC1iZXQvLi9jb21wb25lbnRzL0hlYWRlci9CYXIvTG9naW4vUmVzZXRQYXNzd29yZC9TdWNjZXNzL1N1Y2Nlc3MubW9kdWxlLnNjc3MiLCJ3ZWJwYWNrOi8vZm9vdC1iZXQvLi9jb21wb25lbnRzL0hlYWRlci9CYXIvTG9naW4vU29jaWFsTWVkaWFJY29ucy9Tb2NpYWxNZWRpYUljb25zLm1vZHVsZS5zY3NzIiwid2VicGFjazovL2Zvb3QtYmV0Ly4vY29tcG9uZW50cy9IZWFkZXIvQmFyL0xvZ28vTG9nby5tb2R1bGUuc2NzcyIsIndlYnBhY2s6Ly9mb290LWJldC8uL2NvbXBvbmVudHMvSGVhZGVyL0hlYWRlci5tb2R1bGUuc2NzcyIsIndlYnBhY2s6Ly9mb290LWJldC8uL2NvbXBvbmVudHMvSGVhZGVyL05hdkJhci9CdXR0b24vQnV0dG9uLm1vZHVsZS5zY3NzIiwid2VicGFjazovL2Zvb3QtYmV0Ly4vY29tcG9uZW50cy9IZWFkZXIvTmF2QmFyL05hdkJhci5tb2R1bGUuc2NzcyIsIndlYnBhY2s6Ly9mb290LWJldC8uL2NvbXBvbmVudHMvSGVhZGVyL1NvY2lhbE1lZGlhL0ljb24vSWNvbi5tb2R1bGUuc2NzcyIsIndlYnBhY2s6Ly9mb290LWJldC8uL2NvbXBvbmVudHMvSGVhZGVyL1NvY2lhbE1lZGlhL01vZGFscy9Tb2NpYWxNZWRpYU1vZGFsLm1vZHVsZS5zY3NzIiwid2VicGFjazovL2Zvb3QtYmV0Ly4vY29tcG9uZW50cy9IZWFkZXIvU29jaWFsTWVkaWEvU29jaWFsTWVkaWEubW9kdWxlLnNjc3MiLCJ3ZWJwYWNrOi8vZm9vdC1iZXQvLi9jb21wb25lbnRzL1BhZ2VzL0NvbnRhY3RzL0NvbnRhY3RzLm1vZHVsZS5zY3NzIiwid2VicGFjazovL2Zvb3QtYmV0Ly4vY29tcG9uZW50cy9jb21tb24vYXV0aC9JbnB1dENvbnRhaW5lci9JbnB1dENvbnRhaW5lci5tb2R1bGUuc2NzcyIsIndlYnBhY2s6Ly9mb290LWJldC8uL2NvbXBvbmVudHMvY29tbW9uL2F1dGgvTW9kYWwvTW9kYWwubW9kdWxlLnNjc3MiLCJ3ZWJwYWNrOi8vZm9vdC1iZXQvZXh0ZXJuYWwgXCJAaG9va2Zvcm0vcmVzb2x2ZXJzL3l1cFwiIiwid2VicGFjazovL2Zvb3QtYmV0L2V4dGVybmFsIFwiQHJlZHV4anMvdG9vbGtpdFwiIiwid2VicGFjazovL2Zvb3QtYmV0L2V4dGVybmFsIFwiYXhpb3NcIiIsIndlYnBhY2s6Ly9mb290LWJldC9leHRlcm5hbCBcIm5leHQtdHJhbnNsYXRlL2FwcFdpdGhJMThuXCIiLCJ3ZWJwYWNrOi8vZm9vdC1iZXQvZXh0ZXJuYWwgXCJuZXh0LXRyYW5zbGF0ZS91c2VUcmFuc2xhdGlvblwiIiwid2VicGFjazovL2Zvb3QtYmV0L2V4dGVybmFsIFwibmV4dC9kaXN0L25leHQtc2VydmVyL2xpYi9yb3V0ZXItY29udGV4dC5qc1wiIiwid2VicGFjazovL2Zvb3QtYmV0L2V4dGVybmFsIFwibmV4dC9kaXN0L25leHQtc2VydmVyL2xpYi9yb3V0ZXIvdXRpbHMvZ2V0LWFzc2V0LXBhdGgtZnJvbS1yb3V0ZS5qc1wiIiwid2VicGFjazovL2Zvb3QtYmV0L2V4dGVybmFsIFwibmV4dC9oZWFkXCIiLCJ3ZWJwYWNrOi8vZm9vdC1iZXQvZXh0ZXJuYWwgXCJyZWFjdFwiIiwid2VicGFjazovL2Zvb3QtYmV0L2V4dGVybmFsIFwicmVhY3QtYmVhdXRpZnVsLWRuZFwiIiwid2VicGFjazovL2Zvb3QtYmV0L2V4dGVybmFsIFwicmVhY3QtZG9tXCIiLCJ3ZWJwYWNrOi8vZm9vdC1iZXQvZXh0ZXJuYWwgXCJyZWFjdC1mYWNlYm9vay1sb2dpblwiIiwid2VicGFjazovL2Zvb3QtYmV0L2V4dGVybmFsIFwicmVhY3QtZ29vZ2xlLWxvZ2luXCIiLCJ3ZWJwYWNrOi8vZm9vdC1iZXQvZXh0ZXJuYWwgXCJyZWFjdC1ob29rLWZvcm1cIiIsIndlYnBhY2s6Ly9mb290LWJldC9leHRlcm5hbCBcInJlYWN0LWlzXCIiLCJ3ZWJwYWNrOi8vZm9vdC1iZXQvZXh0ZXJuYWwgXCJyZWFjdC1yZWR1eFwiIiwid2VicGFjazovL2Zvb3QtYmV0L2V4dGVybmFsIFwicmVhY3QtdG9hc3RpZnlcIiIsIndlYnBhY2s6Ly9mb290LWJldC9leHRlcm5hbCBcInJlYWN0LXR3aXR0ZXItbG9naW5cIiIsIndlYnBhY2s6Ly9mb290LWJldC9leHRlcm5hbCBcInJlYWN0L2pzeC1kZXYtcnVudGltZVwiIiwid2VicGFjazovL2Zvb3QtYmV0L2V4dGVybmFsIFwicmVkdXgtcGVyc2lzdFwiIiwid2VicGFjazovL2Zvb3QtYmV0L2V4dGVybmFsIFwicmVkdXgtcGVyc2lzdC9pbnRlZ3JhdGlvbi9yZWFjdFwiIiwid2VicGFjazovL2Zvb3QtYmV0L2V4dGVybmFsIFwicmVkdXgtcGVyc2lzdC9saWIvc3RvcmFnZVwiIiwid2VicGFjazovL2Zvb3QtYmV0L2V4dGVybmFsIFwieXVwXCIiLCJ3ZWJwYWNrOi8vZm9vdC1iZXQvaWdub3JlZHxDOlxcVXNlcnNcXHVzZXJcXERlc2t0b3BcXHByb2plY3RzXFxhaXQtcHJvamVjdHNcXGZvb3QtYmV0XFxub2RlX21vZHVsZXNcXG5leHRcXGRpc3RcXG5leHQtc2VydmVyXFxsaWJcXHJvdXRlcnwuL3V0aWxzL3Jlc29sdmUtcmV3cml0ZXMiXSwibmFtZXMiOlsiQmFsbCIsInN0eWxlcyIsImJhbGxJY29uIiwiRm9vdGVyIiwicm91dGVyIiwidXNlUm91dGVyIiwicGF0aG5hbWUiLCJMaXN0IiwibGlzdF9pdGVtcyIsImJvcmRlcnNBY3RpdmUiLCJ0IiwidXNlVHJhbnNsYXRpb24iLCJ0cmFuc2xhdGlvblBhdGgiLCJ0cmFuc2xhdGUiLCJrZXkiLCJtYXAiLCJlbCIsImxpbmsiLCJuYW1lIiwiTWF0aCIsInJhbmRvbSIsIk5hdmlnYXRpb24iLCJuYXZfZGF0YSIsImkiLCJQUyIsImljb25zIiwic3JjIiwicGF5UGFsIiwidmlzYSIsIm1hc3RlckNhcmQiLCJsYXN0RWxlbWVudCIsIlNNIiwicGhvbmUiLCJ1cmwiLCJmYWNlYm9vayIsIndhdHN1cCIsImluc3RhZ3JhbSIsInZpYmVyIiwidGVsZWdyYW0iLCJsZW5ndGgiLCJTb2NpYWxNZWRpYSIsIkljb24iLCJjbGljayIsImVsZW1lbnRzIiwib3RoZXJTdHlsZXMiLCJjbGFzc2VzIiwid2lkdGgiLCJwYWRkaW5nIiwiQmFyIiwiYmFyX2l0ZW1zIiwiYmFyX2l0ZW1zX2NvbnQiLCJzaG93TG9naW5Nb2RhbCIsInNldFNob3dMb2dpbk1vZGFsIiwidXNlU3RhdGUiLCJ1c2VyX2luZm8iLCJ1c2VTZWxlY3RvciIsInN0YXRlIiwidXNlciIsImNvbnNvbGUiLCJsb2ciLCJCYXJJdGVtcyIsInJlZ2lzdHJhdGlvbiIsImxvZ2luIiwicmVnaXN0cmF0aW9uX3BhdGgiLCJsb2dpbk1vZGFsSGFuZGxlIiwidXNlckxvZ2dlZCIsImxhbmciLCJsYW5ndWFnZXNUaXRsZSIsInNldExhbmd1YWdlc1RpdGxlIiwibGFuZ3VhZ2VzIiwidXNlRWZmZWN0IiwibmV3TGFuZyIsImxhbmd1YWdlc19kYXRhIiwic2hvd0Ryb3AiLCJzZXRTaG93RHJvcCIsImNoYW5nZUxhbmdUaXRsZSIsImV2ZW50IiwibGFuZ190aXRsZV9kYXRhIiwiZmlsdGVyIiwidGFyZ2V0IiwiY2xhc3NOYW1lIiwidXNlcl9kYXRhIiwic2VsZWN0VXNlciIsInJlZ2lzdGVyX2ljb24iLCJsb2dpbl9pY29uIiwiZGlzcGxheSIsImNvbnRlbnRPblRpdGxlIiwiaWNvbiIsImNvbnRlbnRPbkRyb3AiLCJhcm1GbGFnIiwicnVzRmxhZyIsImVuRmxhZyIsImVzcEZsYWciLCJmcmNGbGFnIiwiZGV1RmxhZyIsIkxhbmd1YWdlRHJvcCIsIm9uQ2xvc2UiLCJkYXRhIiwiZG9jdW1lbnQiLCJhZGRFdmVudExpc3RlbmVyIiwiaGFuZGxlQ2xvc2UiLCJyZW1vdmVFdmVudExpc3RlbmVyIiwibm9kZSIsInVzZVJlZiIsImUiLCJjdXJyZW50IiwiY29udGFpbnMiLCJwYXJlbnROb2RlIiwiTG9nZ2VkIiwic2hvd1VzZXJEcm9wIiwic2V0U2hvd1VzZXJEcm9wIiwicGhvdG8iLCJ1c2VybmFtZSIsIkxvZ2dlZERyb3AiLCJkaXNwYXRjaCIsInVzZURpc3BhdGNoIiwiX2xvZ291dCIsImxvZ291dCIsInB1c2giLCJnb1RvUGVyc29uYWwiLCJ1c2VyRGVmYXVsdEljb24iLCJ0ZWxJY29uIiwidGVsZXBob25lIiwiTG9nZ2VkV2FsbHBlciIsImltZyIsImZ1bGxOYW1lIiwiY29sb3IiLCJ0cmlhbmdsZSIsIkRyb3Bkb3duIiwic2hvd0Ryb3Bkb3duIiwic2V0U2hvd0Ryb3Bkb3duIiwic2hvd0NvbnRhY3RzTW9kYWwiLCJzZXRTaG93Q29udGFjdHNNb2RhbCIsImJ1dHRvbnNJbkhvbWVQYWdlIiwiaWQiLCJmcnN0Q29udGVudCIsImhyZWYiLCJzZWNDb250ZW50IiwiYnV0dG9ucyIsImRyb3Bkb3duTGluZXMiLCJMb2dpbiIsIm9uTW9kYWxDbG9zZSIsInNob3dSZXNldFBhc3N3b3JkTW9kYWwiLCJzZXRTaG93UmVzZXRQYXNzd29yZE1vZGFsIiwiTG9naW5Gb3JtIiwiaGFuZGxlUmVzZXRQYXNzTW9kYWwiLCJoYW5kbGVfdG9fcmVnaXN0ZXJfY2xpY2siLCJxdWVyeVNlbGVjdG9yIiwic3R5bGUiLCJvdmVyZmxvdyIsInNjaGVtYSIsInl1cCIsInNoYXBlIiwiZW1haWwiLCJyZXF1aXJlZCIsIm1hdGNoZXMiLCJwYXNzd29yZCIsIm1pbiIsInJlZ2lzdGVyIiwiaGFuZGxlU3VibWl0IiwiZm9ybVN0YXRlIiwiZXJyb3JzIiwidXNlRm9ybSIsIm1vZGUiLCJyZXNvbHZlciIsInl1cFJlc29sdmVyIiwic3VibWl0IiwidG9rZW4iLCJyZXF1ZXN0IiwiTE9HSU4iLCJzZXRDb29raWUiLCJHRVRfQUNDT1VOVF9JTkZPIiwiYXV0aCIsImVycm9yIiwidG9hc3QiLCJyZXNwb25zZSIsIm1lc3NhZ2UiLCJ0eXBlIiwiRm9yZ290UGFzc3dvcmQiLCJzaG93Rm9yZ290UGFzc01sIiwic2V0U2hvd0ZvcmdvdFBhc3NNbCIsInNob3dHZXRFbWFpbENvZGVNbCIsInNldFNob3dFbWFpbENvZGVNbCIsIlNUQVJUX1JFU0VUX1BBU1NXT1JEIiwiZXJyIiwiR2V0RW1haWxDb2RlIiwic2hvd05ld1Bhc3N3b3JkTWwiLCJzZXRTaG93TmV3UGFzc3dvcmRNbCIsIm51bTEiLCJudW0yIiwibnVtMyIsIm51bTQiLCJudW01IiwibnVtNiIsImp1bXAiLCJ4IiwidmFsdWUiLCJuZXh0U2libGluZyIsInRlc3QiLCJmb2N1cyIsImp1bXBCYWNrIiwiY29kZSIsInByZXZpb3VzU2libGluZyIsIk9iamVjdCIsInZhbHVlcyIsInJlZHVjZSIsImFjIiwiVkVSSUZZX1BBU1NXT1JEX1JFU0VUIiwiaGVhZGVycyIsImdldENvb2tpZSIsImlucHV0cyIsImNsYXNzIiwidHJpbSIsIm1heExlbmd0aCIsIk5ld1Bhc3N3b3JkIiwic2hvd05ld1Bhc3NNbCIsInNldFNob3dOZXdQYXNzTWwiLCJzaG93U3VjY2Vzc01sIiwic2V0U2hvd1N1Y2Nlc3NNbCIsIlNFVF9ORVdfUEFTU1dPUkQiLCJTdWNjZXNzIiwic3VjY2Vzc0ljb24iLCJpY29uVXJsIiwiZ21haWwiLCJ2ayIsInR3aXR0ZXIiLCJyZXNwb25zZUZhY2Vib29rIiwicmVzcG9uc2VHb29nbGUiLCJUV0lUVEVSX0NPTlNVTUVSX0tFWSIsIlRXSVRURVJfQ09OU1VNRVJfU0VDUkVUIiwiU29jaWFsTWVkaWFJY29ucyIsIlZLIiwiaW5pdCIsImFwaUlkIiwib25Tb2NpYWxNZWRpYUJ0bkNsaWNrIiwiZmFjZWJvb2tMb2dpbkJ0biIsImdvb2dsZUxvZ2luQnRuIiwiQXV0aCIsInNlc3Npb24iLCJzdGF0dXMiLCJ0d2l0dGVyQXV0aEhhbmRsZXIiLCJjdXJzb3IiLCJyZW5kZXJQcm9wcyIsIm9uQ2xpY2siLCJkaXNhYmxlZCIsIlJlc2V0UGFzc3dvcmRMaW5rIiwiY29udGVudCIsIlN1Ym1pdCIsIlRpdGxlIiwiVG9SZWdpc3RlciIsImNvbnRhaW5lcl9zdHlsZXMiLCJjb250ZW50X3N0eWxlcyIsIm9yIiwicmVnaXN0ZXJfdGV4dF9zdHlsZXMiLCJMb2dvIiwibG9nbyIsIkhlYWRlciIsIm1haW5zUGFnZXMiLCJmb290YmFsbGVyIiwiQnV0dG9uIiwiY29udGVudEZyc3RQIiwiY29udGVudFNlY1AiLCJhY3RpdmUiLCJOYXZCYXIiLCJGYWNlYm9vayIsInBhcmVudCIsInRvcCIsImNoaWxkcmVuIiwib2Zmc2V0VG9wIiwidGV4dCIsIkluc3RhZ3JhbSIsIlBob25lIiwiVGVsZWdyYW0iLCJWaWJlciIsIldhdHNVcCIsInNob3dQaG9uZU1vZGFsIiwic2V0U2hvd1Bob25lTW9kYWwiLCJzaG93RmFjYm9va01vZGFsIiwic2V0U2hvd0ZhY2Jvb2tNb2RhbCIsInNob3dUZWxlZ3JhbU1vZGFsIiwic2V0U2hvd1RlbGVncmFtTW9kYWwiLCJzaG93V2F0c1VwTW9kYWwiLCJzZXRTaG93V2F0c1VwTW9kYWwiLCJzaG93SW5zdGFncmFtTW9kYWwiLCJzZXRTaG93SW5zdGFncmFtTW9kYWwiLCJzaG93VmliZXJNb2RhbCIsInNldFNob3dWaWJlck1vZGFsIiwic29jaWFsTWVkaWFzUmVmIiwid2luZG93Iiwic2Nyb2xsVG8iLCJtb2RhbF9jb250ZW50cyIsIkNvbnRhY3RzTW9kYWwiLCJvcGVuZWQiLCJjbG9zZVZlY3RvciIsImNvbnRhY3RzX2RhdGEiLCJJbnB1dENvbnRhaW5lciIsImxhYmVsIiwicGxhY2Vob2xkZXIiLCJvdGhlciIsIk1vZGFsIiwiY29udGFpbmVyU3R5bGVzIiwiY29udGVudFN0eWxlcyIsInBvcnRhbExvY2F0aW9uIiwic2hvd01vZGFsIiwic2V0U2hvd01vZGFsIiwicGFnZU92ZXJmbG93Iiwic2V0UGFnZU92ZXJmbG93IiwiYm9keSIsImRpbmFtaWNUb3AiLCJzY3JvbGxZIiwibW9kYWwiLCJjcmVhdGVQb3J0YWwiLCJnZXRFbGVtZW50QnlJZCIsIkVycm9yIiwiTWFpbiIsIlJlZ2lzdGVyTGF5b3V0IiwibGF5b3V0cyIsIm1haW4iLCJ3aXRob3V0UGhvdG8iLCJXaXRob3V0UGhvdG8iLCJSZWdpc3RlciIsIkxheW91dFdyYXBwZXIiLCJwcm9wcyIsIkxheW91dCIsImxheW91dCIsImhvc3QiLCJkZXN0aW5hdGlvbiIsInBheWxvYWQiLCJvcHRpb25zIiwiUHJvbWlzZSIsInJzbHYiLCJyamN0IiwiQXV0aG9yaXphdGlvbiIsImF4aW9zIiwibWV0aG9kIiwidGhlbiIsImNhdGNoIiwiZmluYWxseSIsIm5hbWVFUSIsImNhIiwiY29va2llIiwic3BsaXQiLCJjIiwiY2hhckF0Iiwic3Vic3RyaW5nIiwiaW5kZXhPZiIsInJlbW92ZUNvb2tpZSIsImRheXMiLCJleHBpcmVzIiwiZGF0ZSIsIkRhdGUiLCJzZXRUaW1lIiwiZ2V0VGltZSIsInRvVVRDU3RyaW5nIiwiQVVUSF9VUkwiLCJBQ0NPVU5UX1VSTCIsIlJFR0lTVEVSIiwiR0VUX05FV1MiLCJHRVRfTUFUQ0hFUyIsIkdFVF9NQVRDSEVTX09GX05FWFRfREFZIiwiR0VUX1BSRURJQ1RJT05TIiwiR0VUX0ZFRURCQUNLIiwiR0VUX01BVENIRVNfQllfVFlQRSIsIl9pbnRlcm9wUmVxdWlyZVdpbGRjYXJkIiwicmVxdWlyZSIsImV4cG9ydHMiLCJfcmVhY3QiLCJfcm91dGVyIiwiX3JvdXRlcjIiLCJfdXNlSW50ZXJzZWN0aW9uIiwicHJlZmV0Y2hlZCIsInByZWZldGNoIiwiYXMiLCJpc0xvY2FsVVJMIiwiY3VyTG9jYWxlIiwibG9jYWxlIiwiaXNNb2RpZmllZEV2ZW50IiwiY3VycmVudFRhcmdldCIsIm1ldGFLZXkiLCJjdHJsS2V5Iiwic2hpZnRLZXkiLCJhbHRLZXkiLCJuYXRpdmVFdmVudCIsIndoaWNoIiwibGlua0NsaWNrZWQiLCJyZXBsYWNlIiwic2hhbGxvdyIsInNjcm9sbCIsIm5vZGVOYW1lIiwicHJldmVudERlZmF1bHQiLCJMaW5rIiwiY3JlYXRlUHJvcEVycm9yIiwiYXJncyIsImV4cGVjdGVkIiwiYWN0dWFsIiwicmVxdWlyZWRQcm9wc0d1YXJkIiwicmVxdWlyZWRQcm9wcyIsImtleXMiLCJmb3JFYWNoIiwiXyIsIm9wdGlvbmFsUHJvcHNHdWFyZCIsInBhc3NIcmVmIiwib3B0aW9uYWxQcm9wcyIsInZhbFR5cGUiLCJoYXNXYXJuZWQiLCJkZWZhdWx0Iiwid2FybiIsInAiLCJ1c2VNZW1vIiwicmVzb2x2ZWRIcmVmIiwicmVzb2x2ZWRBcyIsInJlc29sdmVIcmVmIiwiY3JlYXRlRWxlbWVudCIsImNoaWxkIiwiQ2hpbGRyZW4iLCJvbmx5IiwiY2hpbGRSZWYiLCJyZWYiLCJzZXRJbnRlcnNlY3Rpb25SZWYiLCJpc1Zpc2libGUiLCJ1c2VJbnRlcnNlY3Rpb24iLCJyb290TWFyZ2luIiwic2V0UmVmIiwidXNlQ2FsbGJhY2siLCJzaG91bGRQcmVmZXRjaCIsImlzUHJlZmV0Y2hlZCIsImNoaWxkUHJvcHMiLCJkZWZhdWx0UHJldmVudGVkIiwib25Nb3VzZUVudGVyIiwicHJpb3JpdHkiLCJsb2NhbGVEb21haW4iLCJpc0xvY2FsZURvbWFpbiIsImdldERvbWFpbkxvY2FsZSIsImxvY2FsZXMiLCJkb21haW5Mb2NhbGVzIiwiYWRkQmFzZVBhdGgiLCJhZGRMb2NhbGUiLCJkZWZhdWx0TG9jYWxlIiwiY2xvbmVFbGVtZW50IiwiX2RlZmF1bHQiLCJyZW1vdmVQYXRoVHJhaWxpbmdTbGFzaCIsInBhdGgiLCJlbmRzV2l0aCIsInNsaWNlIiwibm9ybWFsaXplUGF0aFRyYWlsaW5nU2xhc2giLCJwcm9jZXNzIiwicmVxdWVzdElkbGVDYWxsYmFjayIsInNlbGYiLCJjYiIsInN0YXJ0Iiwibm93Iiwic2V0VGltZW91dCIsImRpZFRpbWVvdXQiLCJ0aW1lUmVtYWluaW5nIiwibWF4IiwiY2FuY2VsSWRsZUNhbGxiYWNrIiwiY2xlYXJUaW1lb3V0IiwiX2ludGVyb3BSZXF1aXJlRGVmYXVsdCIsIm1hcmtBc3NldEVycm9yIiwiaXNBc3NldEVycm9yIiwiZ2V0Q2xpZW50QnVpbGRNYW5pZmVzdCIsIl9nZXRBc3NldFBhdGhGcm9tUm91dGUiLCJfcmVxdWVzdElkbGVDYWxsYmFjayIsIk1TX01BWF9JRExFX0RFTEFZIiwid2l0aEZ1dHVyZSIsImdlbmVyYXRvciIsImVudHJ5IiwiZ2V0IiwiZnV0dXJlIiwicmVzb2x2ZSIsInByb20iLCJzZXQiLCJoYXNQcmVmZXRjaCIsIk1TSW5wdXRNZXRob2RDb250ZXh0IiwiZG9jdW1lbnRNb2RlIiwicmVsTGlzdCIsInN1cHBvcnRzIiwiX3VudXNlZCIsImNhblByZWZldGNoIiwicHJlZmV0Y2hWaWFEb20iLCJyZXMiLCJyZWoiLCJyZWwiLCJjcm9zc09yaWdpbiIsIm9ubG9hZCIsIm9uZXJyb3IiLCJoZWFkIiwiYXBwZW5kQ2hpbGQiLCJBU1NFVF9MT0FEX0VSUk9SIiwiU3ltYm9sIiwiZGVmaW5lUHJvcGVydHkiLCJhcHBlbmRTY3JpcHQiLCJzY3JpcHQiLCJyZWplY3QiLCJyZXNvbHZlUHJvbWlzZVdpdGhUaW1lb3V0IiwibXMiLCJjYW5jZWxsZWQiLCJyIiwiX19CVUlMRF9NQU5JRkVTVCIsIm9uQnVpbGRNYW5pZmVzdCIsIl9fQlVJTERfTUFOSUZFU1RfQ0IiLCJnZXRGaWxlc0ZvclJvdXRlIiwiYXNzZXRQcmVmaXgiLCJyb3V0ZSIsInNjcmlwdHMiLCJlbmNvZGVVUkkiLCJjc3MiLCJtYW5pZmVzdCIsImFsbEZpbGVzIiwidiIsImNyZWF0ZVJvdXRlTG9hZGVyIiwiZW50cnlwb2ludHMiLCJNYXAiLCJsb2FkZWRTY3JpcHRzIiwic3R5bGVTaGVldHMiLCJyb3V0ZXMiLCJtYXliZUV4ZWN1dGVTY3JpcHQiLCJmZXRjaFN0eWxlU2hlZXQiLCJmZXRjaCIsIm9rIiwid2hlbkVudHJ5cG9pbnQiLCJvbkVudHJ5cG9pbnQiLCJleGVjdXRlIiwiZm4iLCJjb21wb25lbnQiLCJpbnB1dCIsIm9sZCIsImxvYWRSb3V0ZSIsImFsbCIsImhhcyIsImVudHJ5cG9pbnQiLCJhc3NpZ24iLCJjbiIsIm5hdmlnYXRvciIsImNvbm5lY3Rpb24iLCJzYXZlRGF0YSIsImVmZmVjdGl2ZVR5cGUiLCJvdXRwdXQiLCJtYWtlUHVibGljUm91dGVySW5zdGFuY2UiLCJOZXh0Um91dGVyIiwiX3JvdXRlckNvbnRleHQiLCJfd2l0aFJvdXRlciIsInNpbmdsZXRvblJvdXRlciIsInJlYWR5Q2FsbGJhY2tzIiwicmVhZHkiLCJ1cmxQcm9wZXJ0eUZpZWxkcyIsInJvdXRlckV2ZW50cyIsImNvcmVNZXRob2RGaWVsZHMiLCJldmVudHMiLCJmaWVsZCIsImdldFJvdXRlciIsIm9uIiwiZXZlbnRGaWVsZCIsInRvVXBwZXJDYXNlIiwiX3NpbmdsZXRvblJvdXRlciIsInN0YWNrIiwidXNlQ29udGV4dCIsIlJvdXRlckNvbnRleHQiLCJjcmVhdGVSb3V0ZXIiLCJpbnN0YW5jZSIsInByb3BlcnR5IiwiQXJyYXkiLCJpc0FycmF5IiwiaGFzSW50ZXJzZWN0aW9uT2JzZXJ2ZXIiLCJJbnRlcnNlY3Rpb25PYnNlcnZlciIsImlzRGlzYWJsZWQiLCJ1bm9ic2VydmUiLCJ2aXNpYmxlIiwic2V0VmlzaWJsZSIsInVuZGVmaW5lZCIsInRhZ05hbWUiLCJvYnNlcnZlIiwiaWRsZUNhbGxiYWNrIiwiZWxlbWVudCIsImNhbGxiYWNrIiwib2JzZXJ2ZXIiLCJjcmVhdGVPYnNlcnZlciIsImRlbGV0ZSIsInNpemUiLCJkaXNjb25uZWN0Iiwib2JzZXJ2ZXJzIiwiZW50cmllcyIsImlzSW50ZXJzZWN0aW5nIiwiaW50ZXJzZWN0aW9uUmF0aW8iLCJ3aXRoUm91dGVyIiwiQ29tcG9zZWRDb21wb25lbnQiLCJXaXRoUm91dGVyV3JhcHBlciIsImdldEluaXRpYWxQcm9wcyIsIm9yaWdHZXRJbml0aWFsUHJvcHMiLCJkaXNwbGF5TmFtZSIsImRldGVjdERvbWFpbkxvY2FsZSIsImRvbWFpbkl0ZW1zIiwiaG9zdG5hbWUiLCJkZXRlY3RlZExvY2FsZSIsImRvbWFpbkl0ZW0iLCJ0b0xvd2VyQ2FzZSIsIml0ZW0iLCJfaXRlbSRkb21haW4iLCJfaXRlbSRsb2NhbGVzIiwiZG9tYWluSG9zdG5hbWUiLCJkb21haW4iLCJzb21lIiwibm9ybWFsaXplTG9jYWxlUGF0aCIsInBhdGhuYW1lUGFydHMiLCJzcGxpY2UiLCJqb2luIiwibWl0dCIsImNyZWF0ZSIsImhhbmRsZXIiLCJvZmYiLCJlbWl0IiwiZXZ0cyIsImRlbExvY2FsZSIsImhhc0Jhc2VQYXRoIiwiZGVsQmFzZVBhdGgiLCJpbnRlcnBvbGF0ZUFzIiwiX25vcm1hbGl6ZVRyYWlsaW5nU2xhc2giLCJfcm91dGVMb2FkZXIiLCJfZGVub3JtYWxpemVQYWdlUGF0aCIsIl9ub3JtYWxpemVMb2NhbGVQYXRoIiwiX21pdHQiLCJfdXRpbHMiLCJfaXNEeW5hbWljIiwiX3BhcnNlUmVsYXRpdmVVcmwiLCJfcXVlcnlzdHJpbmciLCJfcmVzb2x2ZVJld3JpdGVzIiwiX3JvdXRlTWF0Y2hlciIsIl9yb3V0ZVJlZ2V4Iiwib2JqIiwiX19lc01vZHVsZSIsImJhc2VQYXRoIiwiYnVpbGRDYW5jZWxsYXRpb25FcnJvciIsImFkZFBhdGhQcmVmaXgiLCJwcmVmaXgiLCJzdGFydHNXaXRoIiwicGF0aE5vUXVlcnlIYXNoIiwiZGV0ZWN0ZWREb21haW4iLCJodHRwIiwicGF0aExvd2VyIiwibG9jYWxlTG93ZXIiLCJzdWJzdHIiLCJxdWVyeUluZGV4IiwiaGFzaEluZGV4IiwibG9jYXRpb25PcmlnaW4iLCJnZXRMb2NhdGlvbk9yaWdpbiIsInJlc29sdmVkIiwiVVJMIiwib3JpZ2luIiwiYXNQYXRobmFtZSIsInF1ZXJ5IiwiaW50ZXJwb2xhdGVkUm91dGUiLCJkeW5hbWljUmVnZXgiLCJnZXRSb3V0ZVJlZ2V4IiwiZHluYW1pY0dyb3VwcyIsImdyb3VwcyIsImR5bmFtaWNNYXRjaGVzIiwiZ2V0Um91dGVNYXRjaGVyIiwicGFyYW1zIiwiZXZlcnkiLCJwYXJhbSIsInJlcGVhdCIsIm9wdGlvbmFsIiwicmVwbGFjZWQiLCJzZWdtZW50IiwiZW5jb2RlVVJJQ29tcG9uZW50IiwicmVzdWx0Iiwib21pdFBhcm1zRnJvbVF1ZXJ5IiwiZmlsdGVyZWRRdWVyeSIsImluY2x1ZGVzIiwicmVzb2x2ZUFzIiwiYmFzZSIsInVybEFzU3RyaW5nIiwiZm9ybWF0V2l0aFZhbGlkYXRpb24iLCJhc1BhdGgiLCJmaW5hbFVybCIsImludGVycG9sYXRlZEFzIiwiaXNEeW5hbWljUm91dGUiLCJzZWFyY2hQYXJhbXMiLCJzZWFyY2hQYXJhbXNUb1VybFF1ZXJ5IiwiaGFzaCIsInN0cmlwT3JpZ2luIiwicHJlcGFyZVVybEFzIiwiaHJlZkhhZE9yaWdpbiIsImFzSGFkT3JpZ2luIiwicHJlcGFyZWRVcmwiLCJwcmVwYXJlZEFzIiwicmVzb2x2ZUR5bmFtaWNSb3V0ZSIsInBhZ2VzIiwiY2xlYW5QYXRobmFtZSIsImRlbm9ybWFsaXplUGFnZVBhdGgiLCJwYWdlIiwicmUiLCJtYW51YWxTY3JvbGxSZXN0b3JhdGlvbiIsIlNTR19EQVRBX05PVF9GT1VORCIsImZldGNoUmV0cnkiLCJhdHRlbXB0cyIsImNyZWRlbnRpYWxzIiwianNvbiIsIm5vdEZvdW5kIiwiZmV0Y2hOZXh0RGF0YSIsImRhdGFIcmVmIiwiaXNTZXJ2ZXJSZW5kZXIiLCJSb3V0ZXIiLCJjb25zdHJ1Y3RvciIsIl9wYXRobmFtZSIsIl9xdWVyeSIsIl9hcyIsImluaXRpYWxQcm9wcyIsInBhZ2VMb2FkZXIiLCJBcHAiLCJ3cmFwQXBwIiwiQ29tcG9uZW50Iiwic3Vic2NyaXB0aW9uIiwiaXNGYWxsYmFjayIsImlzUHJldmlldyIsImNvbXBvbmVudHMiLCJzZGMiLCJzZHIiLCJzdWIiLCJjbGMiLCJfYnBzIiwiX3dyYXBBcHAiLCJpc1NzciIsIl9pbkZsaWdodFJvdXRlIiwiX3NoYWxsb3ciLCJpc1JlYWR5IiwiX2lkeCIsIm9uUG9wU3RhdGUiLCJjaGFuZ2VTdGF0ZSIsImdldFVSTCIsIl9fTiIsImZvcmNlZFNjcm9sbCIsImlkeCIsInBhcnNlUmVsYXRpdmVVcmwiLCJjaGFuZ2UiLCJpbml0aWFsIiwiX19OX1NTRyIsIl9fTl9TU1AiLCJhdXRvRXhwb3J0RHluYW1pYyIsIl9fTkVYVF9EQVRBX18iLCJhdXRvRXhwb3J0IiwiZ3NzcCIsImdpcCIsImxvY2F0aW9uIiwic2VhcmNoIiwicmVsb2FkIiwiYmFjayIsImhpc3RvcnkiLCJzaG91bGRSZXNvbHZlSHJlZiIsIl9oIiwiX3Nob3VsZFJlc29sdmVIcmVmIiwibG9jYWxlQ2hhbmdlIiwicGFyc2VkQXMiLCJsb2NhbGVQYXRoUmVzdWx0IiwiZGlkTmF2aWdhdGUiLCJfdGhpcyRsb2NhbGVzIiwiYXNOb0Jhc2VQYXRoIiwiU1QiLCJwZXJmb3JtYW5jZSIsIm1hcmsiLCJyb3V0ZVByb3BzIiwiYWJvcnRDb21wb25lbnRMb2FkIiwiY2xlYW5lZEFzIiwib25seUFIYXNoQ2hhbmdlIiwic2Nyb2xsVG9IYXNoIiwibm90aWZ5IiwicGFyc2VkIiwicmV3cml0ZXMiLCJnZXRQYWdlTGlzdCIsIl9fcmV3cml0ZXMiLCJ1cmxJc05ldyIsInJvdXRlUmVnZXgiLCJyb3V0ZU1hdGNoIiwic2hvdWxkSW50ZXJwb2xhdGUiLCJtaXNzaW5nUGFyYW1zIiwiX3NlbGYkX19ORVhUX0RBVEFfXyRwIiwiX3NlbGYkX19ORVhUX0RBVEFfXyRwMiIsIl9vcHRpb25zJHNjcm9sbCIsInJvdXRlSW5mbyIsImdldFJvdXRlSW5mbyIsInBhZ2VQcm9wcyIsIl9fTl9SRURJUkVDVCIsInBhcnNlZEhyZWYiLCJuZXdVcmwiLCJuZXdBcyIsIl9fTl9QUkVWSUVXIiwibm90Rm91bmRSb3V0ZSIsImZldGNoQ29tcG9uZW50IiwiYXBwQ29tcCIsIm5leHQiLCJpc1ByZXJlbmRlcmVkIiwic3RhdHVzQ29kZSIsImlzVmFsaWRTaGFsbG93Um91dGUiLCJzaG91bGRTY3JvbGwiLCJyZXNldFNjcm9sbCIsInkiLCJkb2N1bWVudEVsZW1lbnQiLCJoYW5kbGVSb3V0ZUluZm9FcnJvciIsImxvYWRFcnJvckZhaWwiLCJnaXBFcnIiLCJyb3V0ZUluZm9FcnIiLCJleGlzdGluZ1JvdXRlSW5mbyIsImNhY2hlZFJvdXRlSW5mbyIsIm1vZCIsImlzVmFsaWRFbGVtZW50VHlwZSIsImdldERhdGFIcmVmIiwiX2dldERhdGEiLCJfZ2V0U3RhdGljRGF0YSIsIl9nZXRTZXJ2ZXJEYXRhIiwiYmVmb3JlUG9wU3RhdGUiLCJvbGRVcmxOb0hhc2giLCJvbGRIYXNoIiwibmV3VXJsTm9IYXNoIiwibmV3SGFzaCIsImlkRWwiLCJzY3JvbGxJbnRvVmlldyIsIm5hbWVFbCIsImdldEVsZW1lbnRzQnlOYW1lIiwiX2lzU3NnIiwiaXNTc2ciLCJjYW5jZWwiLCJjb21wb25lbnRSZXN1bHQiLCJsb2FkUGFnZSIsImNhY2hlS2V5IiwicmVzb3VyY2VLZXkiLCJjdHgiLCJBcHBUcmVlIiwibG9hZEdldEluaXRpYWxQcm9wcyIsImZvcm1hdFVybCIsInF1ZXJ5c3RyaW5nIiwiX2dldFJlcXVpcmVXaWxkY2FyZENhY2hlIiwiV2Vha01hcCIsImNhY2hlIiwibmV3T2JqIiwiaGFzUHJvcGVydHlEZXNjcmlwdG9yIiwiZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yIiwicHJvdG90eXBlIiwiaGFzT3duUHJvcGVydHkiLCJjYWxsIiwiZGVzYyIsInNsYXNoZWRQcm90b2NvbHMiLCJ1cmxPYmoiLCJwcm90b2NvbCIsInBvcnQiLCJTdHJpbmciLCJ1cmxRdWVyeVRvU2VhcmNoUGFyYW1zIiwic2xhc2hlcyIsIlRFU1RfUk9VVEUiLCJnbG9iYWxCYXNlIiwicmVzb2x2ZWRCYXNlIiwic3RyaW5naWZ5VXJsUXVlcnlQYXJhbSIsImlzTmFOIiwidXJsUXVlcnkiLCJVUkxTZWFyY2hQYXJhbXMiLCJhcHBlbmQiLCJzZWFyY2hQYXJhbXNMaXN0IiwiZnJvbSIsImV4ZWMiLCJkZWNvZGUiLCJkZWNvZGVVUklDb21wb25lbnQiLCJzbHVnTmFtZSIsImciLCJtIiwicG9zIiwiZXNjYXBlUmVnZXgiLCJzdHIiLCJwYXJzZVBhcmFtZXRlciIsIm5vcm1hbGl6ZWRSb3V0ZSIsInNlZ21lbnRzIiwiZ3JvdXBJbmRleCIsInBhcmFtZXRlcml6ZWRSb3V0ZSIsInJvdXRlS2V5Q2hhckNvZGUiLCJyb3V0ZUtleUNoYXJMZW5ndGgiLCJnZXRTYWZlUm91dGVLZXkiLCJyb3V0ZUtleSIsImZyb21DaGFyQ29kZSIsInJvdXRlS2V5cyIsIm5hbWVkUGFyYW1ldGVyaXplZFJvdXRlIiwiY2xlYW5lZEtleSIsImludmFsaWRLZXkiLCJwYXJzZUludCIsIlJlZ0V4cCIsIm5hbWVkUmVnZXgiLCJleGVjT25jZSIsImdldERpc3BsYXlOYW1lIiwiaXNSZXNTZW50IiwiX2Zvcm1hdFVybCIsInVzZWQiLCJmaW5pc2hlZCIsImhlYWRlcnNTZW50IiwiX0FwcCRwcm90b3R5cGUiLCJ1cmxPYmplY3RLZXlzIiwiU1AiLCJtZWFzdXJlIiwiX19QYWdlX05leHRfVHJhbnNsYXRlX18iLCJNeUFwcCIsInN0b3JlIiwicGVyc2lzdG9yIiwiZ2V0U2VydmVyU2lkZVByb3BzIiwiY29udGV4dCIsInJlc2V0U2VydmVyQ29udGV4dCIsIl9fYXBwV2l0aEkxOG4iLCJfX2kxOG5Db25maWciLCJpc0xvYWRlciIsInNraXBJbml0aWFsUHJvcHMiLCJsb2FkTG9jYWxlRnJvbSIsImwiLCJuIiwibWF0Y2hTbGljZSIsImNyZWF0ZVNsaWNlIiwiaW5pdGlhbFN0YXRlIiwibWF0Y2hJZCIsInJlZHVjZXJzIiwic2V0TWF0Y2hJZCIsImFjdGlvbiIsImFjdGlvbnMiLCJnZXRNYXRjaElkIiwibWF0Y2giLCJyZWR1Y2VyIiwidXNlclNsaWNlIiwicGVyc2lzdENvbmZpZyIsInZlcnNpb24iLCJzdG9yYWdlIiwicGVyc2lzdGVkUmVkdWNlciIsInBlcnNpc3RSZWR1Y2VyIiwiY29tYmluZVJlZHVjZXJzIiwidXNlclJlZHVjZXIiLCJtYXRjaFJlZHVjZXIiLCJjb25maWd1cmVTdG9yZSIsIm1pZGRsZXdhcmUiLCJnZXREZWZhdWx0TWlkZGxld2FyZSIsInNlcmlhbGl6YWJsZUNoZWNrIiwiaWdub3JlZEFjdGlvbnMiLCJGTFVTSCIsIlJFSFlEUkFURSIsIlBBVVNFIiwiUEVSU0lTVCIsIlBVUkdFIiwicGVyc2lzdFN0b3JlIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FB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Q0E5WSwrREFBZ0IsQ0FBQyxvSkFBb0oscVJBQXFSLEU7Ozs7Ozs7Ozs7QUNBMWI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7QUNQQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7O0FDTEE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7QUNKQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7OztBQ0pBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7O0FDSkE7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7O0FDSEE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7QUNQQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7OztBQ0pBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7OztBQ0hBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7O0FDVkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7O0FDTkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7QUNKQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7O0FDUkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7QUNQQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7O0FDUkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7OztBQ0xBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7O0FDVkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7OztBQ1JBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7QUNYQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7O0FDUkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7QUNQQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7OztBQ1BBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7OztBQ0hBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7OztBQ1pBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7QUNMQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7OztBQ1BBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7OztBQ0hBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7O0FDSkE7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7O0FDSEE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7OztBQ2RBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7O0FDUEE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDTEEscUQ7Ozs7Ozs7Ozs7O0FDQUEsOEM7Ozs7Ozs7Ozs7O0FDQUEsbUM7Ozs7Ozs7Ozs7O0FDQUEsd0Q7Ozs7Ozs7Ozs7O0FDQUEsMkQ7Ozs7Ozs7Ozs7O0FDQUEseUU7Ozs7Ozs7Ozs7O0FDQUEsaUc7Ozs7Ozs7Ozs7O0FDQUEsdUM7Ozs7Ozs7Ozs7O0FDQUEsbUM7Ozs7Ozs7Ozs7O0FDQUEsaUQ7Ozs7Ozs7Ozs7O0FDQUEsdUM7Ozs7Ozs7Ozs7O0FDQUEsa0Q7Ozs7Ozs7Ozs7O0FDQUEsZ0Q7Ozs7Ozs7Ozs7O0FDQUEsNkM7Ozs7Ozs7Ozs7O0FDQUEsc0M7Ozs7Ozs7Ozs7O0FDQUEseUM7Ozs7Ozs7Ozs7O0FDQUEsNEM7Ozs7Ozs7Ozs7O0FDQUEsaUQ7Ozs7Ozs7Ozs7O0FDQUEsbUQ7Ozs7Ozs7Ozs7O0FDQUEsMkM7Ozs7Ozs7Ozs7O0FDQUEsNkQ7Ozs7Ozs7Ozs7O0FDQUEsdUQ7Ozs7Ozs7Ozs7O0FDQUEsaUM7Ozs7Ozs7Ozs7QUNBQSxlIiwiZmlsZSI6InBhZ2VzL19hcHAuanMiLCJzb3VyY2VzQ29udGVudCI6WyJ2YXIgbWFwID0ge1xuXHRcIi4vYW0vYWJvdXRVc1wiOiBbXG5cdFx0XCIuL2xvY2FsZXMvYW0vYWJvdXRVcy5qc29uXCIsXG5cdFx0XCJsb2NhbGVzX2FtX2Fib3V0VXNfanNvblwiXG5cdF0sXG5cdFwiLi9hbS9hYm91dFVzLmpzb25cIjogW1xuXHRcdFwiLi9sb2NhbGVzL2FtL2Fib3V0VXMuanNvblwiLFxuXHRcdFwibG9jYWxlc19hbV9hYm91dFVzX2pzb25cIlxuXHRdLFxuXHRcIi4vYW0vY29tbW9uXCI6IFtcblx0XHRcIi4vbG9jYWxlcy9hbS9jb21tb24uanNvblwiLFxuXHRcdFwibG9jYWxlc19hbV9jb21tb25fanNvblwiXG5cdF0sXG5cdFwiLi9hbS9jb21tb24uanNvblwiOiBbXG5cdFx0XCIuL2xvY2FsZXMvYW0vY29tbW9uLmpzb25cIixcblx0XHRcImxvY2FsZXNfYW1fY29tbW9uX2pzb25cIlxuXHRdLFxuXHRcIi4vYW0vZ2FtZXNcIjogW1xuXHRcdFwiLi9sb2NhbGVzL2FtL2dhbWVzLmpzb25cIixcblx0XHRcImxvY2FsZXNfYW1fZ2FtZXNfanNvblwiXG5cdF0sXG5cdFwiLi9hbS9nYW1lcy5qc29uXCI6IFtcblx0XHRcIi4vbG9jYWxlcy9hbS9nYW1lcy5qc29uXCIsXG5cdFx0XCJsb2NhbGVzX2FtX2dhbWVzX2pzb25cIlxuXHRdLFxuXHRcIi4vYW0vaG9tZVwiOiBbXG5cdFx0XCIuL2xvY2FsZXMvYW0vaG9tZS5qc29uXCIsXG5cdFx0XCJsb2NhbGVzX2FtX2hvbWVfanNvblwiXG5cdF0sXG5cdFwiLi9hbS9ob21lLmpzb25cIjogW1xuXHRcdFwiLi9sb2NhbGVzL2FtL2hvbWUuanNvblwiLFxuXHRcdFwibG9jYWxlc19hbV9ob21lX2pzb25cIlxuXHRdLFxuXHRcIi4vYW0vcGVyc29uYWxcIjogW1xuXHRcdFwiLi9sb2NhbGVzL2FtL3BlcnNvbmFsLmpzb25cIixcblx0XHRcImxvY2FsZXNfYW1fcGVyc29uYWxfanNvblwiXG5cdF0sXG5cdFwiLi9hbS9wZXJzb25hbC5qc29uXCI6IFtcblx0XHRcIi4vbG9jYWxlcy9hbS9wZXJzb25hbC5qc29uXCIsXG5cdFx0XCJsb2NhbGVzX2FtX3BlcnNvbmFsX2pzb25cIlxuXHRdLFxuXHRcIi4vYW0vcHJlZGljdGlvblwiOiBbXG5cdFx0XCIuL2xvY2FsZXMvYW0vcHJlZGljdGlvbi5qc29uXCIsXG5cdFx0XCJsb2NhbGVzX2FtX3ByZWRpY3Rpb25fanNvblwiXG5cdF0sXG5cdFwiLi9hbS9wcmVkaWN0aW9uLmpzb25cIjogW1xuXHRcdFwiLi9sb2NhbGVzL2FtL3ByZWRpY3Rpb24uanNvblwiLFxuXHRcdFwibG9jYWxlc19hbV9wcmVkaWN0aW9uX2pzb25cIlxuXHRdLFxuXHRcIi4vYW0vc3RhdGlzdGljc1wiOiBbXG5cdFx0XCIuL2xvY2FsZXMvYW0vc3RhdGlzdGljcy5qc29uXCIsXG5cdFx0XCJsb2NhbGVzX2FtX3N0YXRpc3RpY3NfanNvblwiXG5cdF0sXG5cdFwiLi9hbS9zdGF0aXN0aWNzLmpzb25cIjogW1xuXHRcdFwiLi9sb2NhbGVzL2FtL3N0YXRpc3RpY3MuanNvblwiLFxuXHRcdFwibG9jYWxlc19hbV9zdGF0aXN0aWNzX2pzb25cIlxuXHRdLFxuXHRcIi4vYW0vdGVzdGltb25pYWxzXCI6IFtcblx0XHRcIi4vbG9jYWxlcy9hbS90ZXN0aW1vbmlhbHMuanNvblwiLFxuXHRcdFwibG9jYWxlc19hbV90ZXN0aW1vbmlhbHNfanNvblwiXG5cdF0sXG5cdFwiLi9hbS90ZXN0aW1vbmlhbHMuanNvblwiOiBbXG5cdFx0XCIuL2xvY2FsZXMvYW0vdGVzdGltb25pYWxzLmpzb25cIixcblx0XHRcImxvY2FsZXNfYW1fdGVzdGltb25pYWxzX2pzb25cIlxuXHRdLFxuXHRcIi4vZGV1L2Fib3V0VXNcIjogW1xuXHRcdFwiLi9sb2NhbGVzL2RldS9hYm91dFVzLmpzb25cIixcblx0XHRcImxvY2FsZXNfZGV1X2Fib3V0VXNfanNvblwiXG5cdF0sXG5cdFwiLi9kZXUvYWJvdXRVcy5qc29uXCI6IFtcblx0XHRcIi4vbG9jYWxlcy9kZXUvYWJvdXRVcy5qc29uXCIsXG5cdFx0XCJsb2NhbGVzX2RldV9hYm91dFVzX2pzb25cIlxuXHRdLFxuXHRcIi4vZGV1L2NvbW1vblwiOiBbXG5cdFx0XCIuL2xvY2FsZXMvZGV1L2NvbW1vbi5qc29uXCIsXG5cdFx0XCJsb2NhbGVzX2RldV9jb21tb25fanNvblwiXG5cdF0sXG5cdFwiLi9kZXUvY29tbW9uLmpzb25cIjogW1xuXHRcdFwiLi9sb2NhbGVzL2RldS9jb21tb24uanNvblwiLFxuXHRcdFwibG9jYWxlc19kZXVfY29tbW9uX2pzb25cIlxuXHRdLFxuXHRcIi4vZGV1L2dhbWVzXCI6IFtcblx0XHRcIi4vbG9jYWxlcy9kZXUvZ2FtZXMuanNvblwiLFxuXHRcdFwibG9jYWxlc19kZXVfZ2FtZXNfanNvblwiXG5cdF0sXG5cdFwiLi9kZXUvZ2FtZXMuanNvblwiOiBbXG5cdFx0XCIuL2xvY2FsZXMvZGV1L2dhbWVzLmpzb25cIixcblx0XHRcImxvY2FsZXNfZGV1X2dhbWVzX2pzb25cIlxuXHRdLFxuXHRcIi4vZGV1L2hvbWVcIjogW1xuXHRcdFwiLi9sb2NhbGVzL2RldS9ob21lLmpzb25cIixcblx0XHRcImxvY2FsZXNfZGV1X2hvbWVfanNvblwiXG5cdF0sXG5cdFwiLi9kZXUvaG9tZS5qc29uXCI6IFtcblx0XHRcIi4vbG9jYWxlcy9kZXUvaG9tZS5qc29uXCIsXG5cdFx0XCJsb2NhbGVzX2RldV9ob21lX2pzb25cIlxuXHRdLFxuXHRcIi4vZGV1L3BlcnNvbmFsXCI6IFtcblx0XHRcIi4vbG9jYWxlcy9kZXUvcGVyc29uYWwuanNvblwiLFxuXHRcdFwibG9jYWxlc19kZXVfcGVyc29uYWxfanNvblwiXG5cdF0sXG5cdFwiLi9kZXUvcGVyc29uYWwuanNvblwiOiBbXG5cdFx0XCIuL2xvY2FsZXMvZGV1L3BlcnNvbmFsLmpzb25cIixcblx0XHRcImxvY2FsZXNfZGV1X3BlcnNvbmFsX2pzb25cIlxuXHRdLFxuXHRcIi4vZGV1L3ByZWRpY3Rpb25cIjogW1xuXHRcdFwiLi9sb2NhbGVzL2RldS9wcmVkaWN0aW9uLmpzb25cIixcblx0XHRcImxvY2FsZXNfZGV1X3ByZWRpY3Rpb25fanNvblwiXG5cdF0sXG5cdFwiLi9kZXUvcHJlZGljdGlvbi5qc29uXCI6IFtcblx0XHRcIi4vbG9jYWxlcy9kZXUvcHJlZGljdGlvbi5qc29uXCIsXG5cdFx0XCJsb2NhbGVzX2RldV9wcmVkaWN0aW9uX2pzb25cIlxuXHRdLFxuXHRcIi4vZGV1L3N0YXRpc3RpY3NcIjogW1xuXHRcdFwiLi9sb2NhbGVzL2RldS9zdGF0aXN0aWNzLmpzb25cIixcblx0XHRcImxvY2FsZXNfZGV1X3N0YXRpc3RpY3NfanNvblwiXG5cdF0sXG5cdFwiLi9kZXUvc3RhdGlzdGljcy5qc29uXCI6IFtcblx0XHRcIi4vbG9jYWxlcy9kZXUvc3RhdGlzdGljcy5qc29uXCIsXG5cdFx0XCJsb2NhbGVzX2RldV9zdGF0aXN0aWNzX2pzb25cIlxuXHRdLFxuXHRcIi4vZGV1L3Rlc3RpbW9uaWFsc1wiOiBbXG5cdFx0XCIuL2xvY2FsZXMvZGV1L3Rlc3RpbW9uaWFscy5qc29uXCIsXG5cdFx0XCJsb2NhbGVzX2RldV90ZXN0aW1vbmlhbHNfanNvblwiXG5cdF0sXG5cdFwiLi9kZXUvdGVzdGltb25pYWxzLmpzb25cIjogW1xuXHRcdFwiLi9sb2NhbGVzL2RldS90ZXN0aW1vbmlhbHMuanNvblwiLFxuXHRcdFwibG9jYWxlc19kZXVfdGVzdGltb25pYWxzX2pzb25cIlxuXHRdLFxuXHRcIi4vZW4vYWJvdXRVc1wiOiBbXG5cdFx0XCIuL2xvY2FsZXMvZW4vYWJvdXRVcy5qc29uXCIsXG5cdFx0XCJsb2NhbGVzX2VuX2Fib3V0VXNfanNvblwiXG5cdF0sXG5cdFwiLi9lbi9hYm91dFVzLmpzb25cIjogW1xuXHRcdFwiLi9sb2NhbGVzL2VuL2Fib3V0VXMuanNvblwiLFxuXHRcdFwibG9jYWxlc19lbl9hYm91dFVzX2pzb25cIlxuXHRdLFxuXHRcIi4vZW4vY29tbW9uXCI6IFtcblx0XHRcIi4vbG9jYWxlcy9lbi9jb21tb24uanNvblwiLFxuXHRcdFwibG9jYWxlc19lbl9jb21tb25fanNvblwiXG5cdF0sXG5cdFwiLi9lbi9jb21tb24uanNvblwiOiBbXG5cdFx0XCIuL2xvY2FsZXMvZW4vY29tbW9uLmpzb25cIixcblx0XHRcImxvY2FsZXNfZW5fY29tbW9uX2pzb25cIlxuXHRdLFxuXHRcIi4vZW4vZ2FtZXNcIjogW1xuXHRcdFwiLi9sb2NhbGVzL2VuL2dhbWVzLmpzb25cIixcblx0XHRcImxvY2FsZXNfZW5fZ2FtZXNfanNvblwiXG5cdF0sXG5cdFwiLi9lbi9nYW1lcy5qc29uXCI6IFtcblx0XHRcIi4vbG9jYWxlcy9lbi9nYW1lcy5qc29uXCIsXG5cdFx0XCJsb2NhbGVzX2VuX2dhbWVzX2pzb25cIlxuXHRdLFxuXHRcIi4vZW4vaG9tZVwiOiBbXG5cdFx0XCIuL2xvY2FsZXMvZW4vaG9tZS5qc29uXCIsXG5cdFx0XCJsb2NhbGVzX2VuX2hvbWVfanNvblwiXG5cdF0sXG5cdFwiLi9lbi9ob21lLmpzb25cIjogW1xuXHRcdFwiLi9sb2NhbGVzL2VuL2hvbWUuanNvblwiLFxuXHRcdFwibG9jYWxlc19lbl9ob21lX2pzb25cIlxuXHRdLFxuXHRcIi4vZW4vcGVyc29uYWxcIjogW1xuXHRcdFwiLi9sb2NhbGVzL2VuL3BlcnNvbmFsLmpzb25cIixcblx0XHRcImxvY2FsZXNfZW5fcGVyc29uYWxfanNvblwiXG5cdF0sXG5cdFwiLi9lbi9wZXJzb25hbC5qc29uXCI6IFtcblx0XHRcIi4vbG9jYWxlcy9lbi9wZXJzb25hbC5qc29uXCIsXG5cdFx0XCJsb2NhbGVzX2VuX3BlcnNvbmFsX2pzb25cIlxuXHRdLFxuXHRcIi4vZW4vcHJlZGljdGlvblwiOiBbXG5cdFx0XCIuL2xvY2FsZXMvZW4vcHJlZGljdGlvbi5qc29uXCIsXG5cdFx0XCJsb2NhbGVzX2VuX3ByZWRpY3Rpb25fanNvblwiXG5cdF0sXG5cdFwiLi9lbi9wcmVkaWN0aW9uLmpzb25cIjogW1xuXHRcdFwiLi9sb2NhbGVzL2VuL3ByZWRpY3Rpb24uanNvblwiLFxuXHRcdFwibG9jYWxlc19lbl9wcmVkaWN0aW9uX2pzb25cIlxuXHRdLFxuXHRcIi4vZW4vc3RhdGlzdGljc1wiOiBbXG5cdFx0XCIuL2xvY2FsZXMvZW4vc3RhdGlzdGljcy5qc29uXCIsXG5cdFx0XCJsb2NhbGVzX2VuX3N0YXRpc3RpY3NfanNvblwiXG5cdF0sXG5cdFwiLi9lbi9zdGF0aXN0aWNzLmpzb25cIjogW1xuXHRcdFwiLi9sb2NhbGVzL2VuL3N0YXRpc3RpY3MuanNvblwiLFxuXHRcdFwibG9jYWxlc19lbl9zdGF0aXN0aWNzX2pzb25cIlxuXHRdLFxuXHRcIi4vZW4vdGVzdGltb25pYWxzXCI6IFtcblx0XHRcIi4vbG9jYWxlcy9lbi90ZXN0aW1vbmlhbHMuanNvblwiLFxuXHRcdFwibG9jYWxlc19lbl90ZXN0aW1vbmlhbHNfanNvblwiXG5cdF0sXG5cdFwiLi9lbi90ZXN0aW1vbmlhbHMuanNvblwiOiBbXG5cdFx0XCIuL2xvY2FsZXMvZW4vdGVzdGltb25pYWxzLmpzb25cIixcblx0XHRcImxvY2FsZXNfZW5fdGVzdGltb25pYWxzX2pzb25cIlxuXHRdLFxuXHRcIi4vZXNwL2Fib3V0VXNcIjogW1xuXHRcdFwiLi9sb2NhbGVzL2VzcC9hYm91dFVzLmpzb25cIixcblx0XHRcImxvY2FsZXNfZXNwX2Fib3V0VXNfanNvblwiXG5cdF0sXG5cdFwiLi9lc3AvYWJvdXRVcy5qc29uXCI6IFtcblx0XHRcIi4vbG9jYWxlcy9lc3AvYWJvdXRVcy5qc29uXCIsXG5cdFx0XCJsb2NhbGVzX2VzcF9hYm91dFVzX2pzb25cIlxuXHRdLFxuXHRcIi4vZXNwL2NvbW1vblwiOiBbXG5cdFx0XCIuL2xvY2FsZXMvZXNwL2NvbW1vbi5qc29uXCIsXG5cdFx0XCJsb2NhbGVzX2VzcF9jb21tb25fanNvblwiXG5cdF0sXG5cdFwiLi9lc3AvY29tbW9uLmpzb25cIjogW1xuXHRcdFwiLi9sb2NhbGVzL2VzcC9jb21tb24uanNvblwiLFxuXHRcdFwibG9jYWxlc19lc3BfY29tbW9uX2pzb25cIlxuXHRdLFxuXHRcIi4vZXNwL2dhbWVzXCI6IFtcblx0XHRcIi4vbG9jYWxlcy9lc3AvZ2FtZXMuanNvblwiLFxuXHRcdFwibG9jYWxlc19lc3BfZ2FtZXNfanNvblwiXG5cdF0sXG5cdFwiLi9lc3AvZ2FtZXMuanNvblwiOiBbXG5cdFx0XCIuL2xvY2FsZXMvZXNwL2dhbWVzLmpzb25cIixcblx0XHRcImxvY2FsZXNfZXNwX2dhbWVzX2pzb25cIlxuXHRdLFxuXHRcIi4vZXNwL2hvbWVcIjogW1xuXHRcdFwiLi9sb2NhbGVzL2VzcC9ob21lLmpzb25cIixcblx0XHRcImxvY2FsZXNfZXNwX2hvbWVfanNvblwiXG5cdF0sXG5cdFwiLi9lc3AvaG9tZS5qc29uXCI6IFtcblx0XHRcIi4vbG9jYWxlcy9lc3AvaG9tZS5qc29uXCIsXG5cdFx0XCJsb2NhbGVzX2VzcF9ob21lX2pzb25cIlxuXHRdLFxuXHRcIi4vZXNwL3BlcnNvbmFsXCI6IFtcblx0XHRcIi4vbG9jYWxlcy9lc3AvcGVyc29uYWwuanNvblwiLFxuXHRcdFwibG9jYWxlc19lc3BfcGVyc29uYWxfanNvblwiXG5cdF0sXG5cdFwiLi9lc3AvcGVyc29uYWwuanNvblwiOiBbXG5cdFx0XCIuL2xvY2FsZXMvZXNwL3BlcnNvbmFsLmpzb25cIixcblx0XHRcImxvY2FsZXNfZXNwX3BlcnNvbmFsX2pzb25cIlxuXHRdLFxuXHRcIi4vZXNwL3ByZWRpY3Rpb25cIjogW1xuXHRcdFwiLi9sb2NhbGVzL2VzcC9wcmVkaWN0aW9uLmpzb25cIixcblx0XHRcImxvY2FsZXNfZXNwX3ByZWRpY3Rpb25fanNvblwiXG5cdF0sXG5cdFwiLi9lc3AvcHJlZGljdGlvbi5qc29uXCI6IFtcblx0XHRcIi4vbG9jYWxlcy9lc3AvcHJlZGljdGlvbi5qc29uXCIsXG5cdFx0XCJsb2NhbGVzX2VzcF9wcmVkaWN0aW9uX2pzb25cIlxuXHRdLFxuXHRcIi4vZXNwL3N0YXRpc3RpY3NcIjogW1xuXHRcdFwiLi9sb2NhbGVzL2VzcC9zdGF0aXN0aWNzLmpzb25cIixcblx0XHRcImxvY2FsZXNfZXNwX3N0YXRpc3RpY3NfanNvblwiXG5cdF0sXG5cdFwiLi9lc3Avc3RhdGlzdGljcy5qc29uXCI6IFtcblx0XHRcIi4vbG9jYWxlcy9lc3Avc3RhdGlzdGljcy5qc29uXCIsXG5cdFx0XCJsb2NhbGVzX2VzcF9zdGF0aXN0aWNzX2pzb25cIlxuXHRdLFxuXHRcIi4vZXNwL3Rlc3RpbW9uaWFsc1wiOiBbXG5cdFx0XCIuL2xvY2FsZXMvZXNwL3Rlc3RpbW9uaWFscy5qc29uXCIsXG5cdFx0XCJsb2NhbGVzX2VzcF90ZXN0aW1vbmlhbHNfanNvblwiXG5cdF0sXG5cdFwiLi9lc3AvdGVzdGltb25pYWxzLmpzb25cIjogW1xuXHRcdFwiLi9sb2NhbGVzL2VzcC90ZXN0aW1vbmlhbHMuanNvblwiLFxuXHRcdFwibG9jYWxlc19lc3BfdGVzdGltb25pYWxzX2pzb25cIlxuXHRdLFxuXHRcIi4vZnIvYWJvdXRVc1wiOiBbXG5cdFx0XCIuL2xvY2FsZXMvZnIvYWJvdXRVcy5qc29uXCIsXG5cdFx0XCJsb2NhbGVzX2ZyX2Fib3V0VXNfanNvblwiXG5cdF0sXG5cdFwiLi9mci9hYm91dFVzLmpzb25cIjogW1xuXHRcdFwiLi9sb2NhbGVzL2ZyL2Fib3V0VXMuanNvblwiLFxuXHRcdFwibG9jYWxlc19mcl9hYm91dFVzX2pzb25cIlxuXHRdLFxuXHRcIi4vZnIvY29tbW9uXCI6IFtcblx0XHRcIi4vbG9jYWxlcy9mci9jb21tb24uanNvblwiLFxuXHRcdFwibG9jYWxlc19mcl9jb21tb25fanNvblwiXG5cdF0sXG5cdFwiLi9mci9jb21tb24uanNvblwiOiBbXG5cdFx0XCIuL2xvY2FsZXMvZnIvY29tbW9uLmpzb25cIixcblx0XHRcImxvY2FsZXNfZnJfY29tbW9uX2pzb25cIlxuXHRdLFxuXHRcIi4vZnIvZ2FtZXNcIjogW1xuXHRcdFwiLi9sb2NhbGVzL2ZyL2dhbWVzLmpzb25cIixcblx0XHRcImxvY2FsZXNfZnJfZ2FtZXNfanNvblwiXG5cdF0sXG5cdFwiLi9mci9nYW1lcy5qc29uXCI6IFtcblx0XHRcIi4vbG9jYWxlcy9mci9nYW1lcy5qc29uXCIsXG5cdFx0XCJsb2NhbGVzX2ZyX2dhbWVzX2pzb25cIlxuXHRdLFxuXHRcIi4vZnIvaG9tZVwiOiBbXG5cdFx0XCIuL2xvY2FsZXMvZnIvaG9tZS5qc29uXCIsXG5cdFx0XCJsb2NhbGVzX2ZyX2hvbWVfanNvblwiXG5cdF0sXG5cdFwiLi9mci9ob21lLmpzb25cIjogW1xuXHRcdFwiLi9sb2NhbGVzL2ZyL2hvbWUuanNvblwiLFxuXHRcdFwibG9jYWxlc19mcl9ob21lX2pzb25cIlxuXHRdLFxuXHRcIi4vZnIvcGVyc29uYWxcIjogW1xuXHRcdFwiLi9sb2NhbGVzL2ZyL3BlcnNvbmFsLmpzb25cIixcblx0XHRcImxvY2FsZXNfZnJfcGVyc29uYWxfanNvblwiXG5cdF0sXG5cdFwiLi9mci9wZXJzb25hbC5qc29uXCI6IFtcblx0XHRcIi4vbG9jYWxlcy9mci9wZXJzb25hbC5qc29uXCIsXG5cdFx0XCJsb2NhbGVzX2ZyX3BlcnNvbmFsX2pzb25cIlxuXHRdLFxuXHRcIi4vZnIvcHJlZGljdGlvblwiOiBbXG5cdFx0XCIuL2xvY2FsZXMvZnIvcHJlZGljdGlvbi5qc29uXCIsXG5cdFx0XCJsb2NhbGVzX2ZyX3ByZWRpY3Rpb25fanNvblwiXG5cdF0sXG5cdFwiLi9mci9wcmVkaWN0aW9uLmpzb25cIjogW1xuXHRcdFwiLi9sb2NhbGVzL2ZyL3ByZWRpY3Rpb24uanNvblwiLFxuXHRcdFwibG9jYWxlc19mcl9wcmVkaWN0aW9uX2pzb25cIlxuXHRdLFxuXHRcIi4vZnIvc3RhdGlzdGljc1wiOiBbXG5cdFx0XCIuL2xvY2FsZXMvZnIvc3RhdGlzdGljcy5qc29uXCIsXG5cdFx0XCJsb2NhbGVzX2ZyX3N0YXRpc3RpY3NfanNvblwiXG5cdF0sXG5cdFwiLi9mci9zdGF0aXN0aWNzLmpzb25cIjogW1xuXHRcdFwiLi9sb2NhbGVzL2ZyL3N0YXRpc3RpY3MuanNvblwiLFxuXHRcdFwibG9jYWxlc19mcl9zdGF0aXN0aWNzX2pzb25cIlxuXHRdLFxuXHRcIi4vZnIvdGVzdGltb25pYWxzXCI6IFtcblx0XHRcIi4vbG9jYWxlcy9mci90ZXN0aW1vbmlhbHMuanNvblwiLFxuXHRcdFwibG9jYWxlc19mcl90ZXN0aW1vbmlhbHNfanNvblwiXG5cdF0sXG5cdFwiLi9mci90ZXN0aW1vbmlhbHMuanNvblwiOiBbXG5cdFx0XCIuL2xvY2FsZXMvZnIvdGVzdGltb25pYWxzLmpzb25cIixcblx0XHRcImxvY2FsZXNfZnJfdGVzdGltb25pYWxzX2pzb25cIlxuXHRdLFxuXHRcIi4vcnMvYWJvdXRVc1wiOiBbXG5cdFx0XCIuL2xvY2FsZXMvcnMvYWJvdXRVcy5qc29uXCIsXG5cdFx0XCJsb2NhbGVzX3JzX2Fib3V0VXNfanNvblwiXG5cdF0sXG5cdFwiLi9ycy9hYm91dFVzLmpzb25cIjogW1xuXHRcdFwiLi9sb2NhbGVzL3JzL2Fib3V0VXMuanNvblwiLFxuXHRcdFwibG9jYWxlc19yc19hYm91dFVzX2pzb25cIlxuXHRdLFxuXHRcIi4vcnMvY29tbW9uXCI6IFtcblx0XHRcIi4vbG9jYWxlcy9ycy9jb21tb24uanNvblwiLFxuXHRcdFwibG9jYWxlc19yc19jb21tb25fanNvblwiXG5cdF0sXG5cdFwiLi9ycy9jb21tb24uanNvblwiOiBbXG5cdFx0XCIuL2xvY2FsZXMvcnMvY29tbW9uLmpzb25cIixcblx0XHRcImxvY2FsZXNfcnNfY29tbW9uX2pzb25cIlxuXHRdLFxuXHRcIi4vcnMvZ2FtZXNcIjogW1xuXHRcdFwiLi9sb2NhbGVzL3JzL2dhbWVzLmpzb25cIixcblx0XHRcImxvY2FsZXNfcnNfZ2FtZXNfanNvblwiXG5cdF0sXG5cdFwiLi9ycy9nYW1lcy5qc29uXCI6IFtcblx0XHRcIi4vbG9jYWxlcy9ycy9nYW1lcy5qc29uXCIsXG5cdFx0XCJsb2NhbGVzX3JzX2dhbWVzX2pzb25cIlxuXHRdLFxuXHRcIi4vcnMvaG9tZVwiOiBbXG5cdFx0XCIuL2xvY2FsZXMvcnMvaG9tZS5qc29uXCIsXG5cdFx0XCJsb2NhbGVzX3JzX2hvbWVfanNvblwiXG5cdF0sXG5cdFwiLi9ycy9ob21lLmpzb25cIjogW1xuXHRcdFwiLi9sb2NhbGVzL3JzL2hvbWUuanNvblwiLFxuXHRcdFwibG9jYWxlc19yc19ob21lX2pzb25cIlxuXHRdLFxuXHRcIi4vcnMvcGVyc29uYWxcIjogW1xuXHRcdFwiLi9sb2NhbGVzL3JzL3BlcnNvbmFsLmpzb25cIixcblx0XHRcImxvY2FsZXNfcnNfcGVyc29uYWxfanNvblwiXG5cdF0sXG5cdFwiLi9ycy9wZXJzb25hbC5qc29uXCI6IFtcblx0XHRcIi4vbG9jYWxlcy9ycy9wZXJzb25hbC5qc29uXCIsXG5cdFx0XCJsb2NhbGVzX3JzX3BlcnNvbmFsX2pzb25cIlxuXHRdLFxuXHRcIi4vcnMvcHJlZGljdGlvblwiOiBbXG5cdFx0XCIuL2xvY2FsZXMvcnMvcHJlZGljdGlvbi5qc29uXCIsXG5cdFx0XCJsb2NhbGVzX3JzX3ByZWRpY3Rpb25fanNvblwiXG5cdF0sXG5cdFwiLi9ycy9wcmVkaWN0aW9uLmpzb25cIjogW1xuXHRcdFwiLi9sb2NhbGVzL3JzL3ByZWRpY3Rpb24uanNvblwiLFxuXHRcdFwibG9jYWxlc19yc19wcmVkaWN0aW9uX2pzb25cIlxuXHRdLFxuXHRcIi4vcnMvc3RhdGlzdGljc1wiOiBbXG5cdFx0XCIuL2xvY2FsZXMvcnMvc3RhdGlzdGljcy5qc29uXCIsXG5cdFx0XCJsb2NhbGVzX3JzX3N0YXRpc3RpY3NfanNvblwiXG5cdF0sXG5cdFwiLi9ycy9zdGF0aXN0aWNzLmpzb25cIjogW1xuXHRcdFwiLi9sb2NhbGVzL3JzL3N0YXRpc3RpY3MuanNvblwiLFxuXHRcdFwibG9jYWxlc19yc19zdGF0aXN0aWNzX2pzb25cIlxuXHRdLFxuXHRcIi4vcnMvdGVzdGltb25pYWxzXCI6IFtcblx0XHRcIi4vbG9jYWxlcy9ycy90ZXN0aW1vbmlhbHMuanNvblwiLFxuXHRcdFwibG9jYWxlc19yc190ZXN0aW1vbmlhbHNfanNvblwiXG5cdF0sXG5cdFwiLi9ycy90ZXN0aW1vbmlhbHMuanNvblwiOiBbXG5cdFx0XCIuL2xvY2FsZXMvcnMvdGVzdGltb25pYWxzLmpzb25cIixcblx0XHRcImxvY2FsZXNfcnNfdGVzdGltb25pYWxzX2pzb25cIlxuXHRdXG59O1xuZnVuY3Rpb24gd2VicGFja0FzeW5jQ29udGV4dChyZXEpIHtcblx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhtYXAsIHJlcSkpIHtcblx0XHRyZXR1cm4gUHJvbWlzZS5yZXNvbHZlKCkudGhlbihmdW5jdGlvbigpIHtcblx0XHRcdHZhciBlID0gbmV3IEVycm9yKFwiQ2Fubm90IGZpbmQgbW9kdWxlICdcIiArIHJlcSArIFwiJ1wiKTtcblx0XHRcdGUuY29kZSA9ICdNT0RVTEVfTk9UX0ZPVU5EJztcblx0XHRcdHRocm93IGU7XG5cdFx0fSk7XG5cdH1cblxuXHR2YXIgaWRzID0gbWFwW3JlcV0sIGlkID0gaWRzWzBdO1xuXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXy5lKGlkc1sxXSkudGhlbihmdW5jdGlvbigpIHtcblx0XHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXy50KGlkLCAzIHwgMTYpO1xuXHR9KTtcbn1cbndlYnBhY2tBc3luY0NvbnRleHQua2V5cyA9IGZ1bmN0aW9uKCkgeyByZXR1cm4gT2JqZWN0LmtleXMobWFwKTsgfTtcbndlYnBhY2tBc3luY0NvbnRleHQuaWQgPSBcIi4vbG9jYWxlcyBsYXp5IHJlY3Vyc2l2ZSBeXFxcXC5cXFxcLy4qXFxcXC8uKiRcIjtcbm1vZHVsZS5leHBvcnRzID0gd2VicGFja0FzeW5jQ29udGV4dDsiLCJmdW5jdGlvbiBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KG9iaikge1xuICByZXR1cm4gb2JqICYmIG9iai5fX2VzTW9kdWxlID8gb2JqIDoge1xuICAgIFwiZGVmYXVsdFwiOiBvYmpcbiAgfTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0OyIsInZhciBfdHlwZW9mID0gcmVxdWlyZShcIkBiYWJlbC9ydW50aW1lL2hlbHBlcnMvdHlwZW9mXCIpO1xuXG5mdW5jdGlvbiBfZ2V0UmVxdWlyZVdpbGRjYXJkQ2FjaGUoKSB7XG4gIGlmICh0eXBlb2YgV2Vha01hcCAhPT0gXCJmdW5jdGlvblwiKSByZXR1cm4gbnVsbDtcbiAgdmFyIGNhY2hlID0gbmV3IFdlYWtNYXAoKTtcblxuICBfZ2V0UmVxdWlyZVdpbGRjYXJkQ2FjaGUgPSBmdW5jdGlvbiBfZ2V0UmVxdWlyZVdpbGRjYXJkQ2FjaGUoKSB7XG4gICAgcmV0dXJuIGNhY2hlO1xuICB9O1xuXG4gIHJldHVybiBjYWNoZTtcbn1cblxuZnVuY3Rpb24gX2ludGVyb3BSZXF1aXJlV2lsZGNhcmQob2JqKSB7XG4gIGlmIChvYmogJiYgb2JqLl9fZXNNb2R1bGUpIHtcbiAgICByZXR1cm4gb2JqO1xuICB9XG5cbiAgaWYgKG9iaiA9PT0gbnVsbCB8fCBfdHlwZW9mKG9iaikgIT09IFwib2JqZWN0XCIgJiYgdHlwZW9mIG9iaiAhPT0gXCJmdW5jdGlvblwiKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIFwiZGVmYXVsdFwiOiBvYmpcbiAgICB9O1xuICB9XG5cbiAgdmFyIGNhY2hlID0gX2dldFJlcXVpcmVXaWxkY2FyZENhY2hlKCk7XG5cbiAgaWYgKGNhY2hlICYmIGNhY2hlLmhhcyhvYmopKSB7XG4gICAgcmV0dXJuIGNhY2hlLmdldChvYmopO1xuICB9XG5cbiAgdmFyIG5ld09iaiA9IHt9O1xuICB2YXIgaGFzUHJvcGVydHlEZXNjcmlwdG9yID0gT2JqZWN0LmRlZmluZVByb3BlcnR5ICYmIE9iamVjdC5nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3I7XG5cbiAgZm9yICh2YXIga2V5IGluIG9iaikge1xuICAgIGlmIChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBrZXkpKSB7XG4gICAgICB2YXIgZGVzYyA9IGhhc1Byb3BlcnR5RGVzY3JpcHRvciA/IE9iamVjdC5nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3Iob2JqLCBrZXkpIDogbnVsbDtcblxuICAgICAgaWYgKGRlc2MgJiYgKGRlc2MuZ2V0IHx8IGRlc2Muc2V0KSkge1xuICAgICAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkobmV3T2JqLCBrZXksIGRlc2MpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgbmV3T2JqW2tleV0gPSBvYmpba2V5XTtcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICBuZXdPYmpbXCJkZWZhdWx0XCJdID0gb2JqO1xuXG4gIGlmIChjYWNoZSkge1xuICAgIGNhY2hlLnNldChvYmosIG5ld09iaik7XG4gIH1cblxuICByZXR1cm4gbmV3T2JqO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IF9pbnRlcm9wUmVxdWlyZVdpbGRjYXJkOyIsImZ1bmN0aW9uIF90eXBlb2Yob2JqKSB7XG4gIFwiQGJhYmVsL2hlbHBlcnMgLSB0eXBlb2ZcIjtcblxuICBpZiAodHlwZW9mIFN5bWJvbCA9PT0gXCJmdW5jdGlvblwiICYmIHR5cGVvZiBTeW1ib2wuaXRlcmF0b3IgPT09IFwic3ltYm9sXCIpIHtcbiAgICBtb2R1bGUuZXhwb3J0cyA9IF90eXBlb2YgPSBmdW5jdGlvbiBfdHlwZW9mKG9iaikge1xuICAgICAgcmV0dXJuIHR5cGVvZiBvYmo7XG4gICAgfTtcbiAgfSBlbHNlIHtcbiAgICBtb2R1bGUuZXhwb3J0cyA9IF90eXBlb2YgPSBmdW5jdGlvbiBfdHlwZW9mKG9iaikge1xuICAgICAgcmV0dXJuIG9iaiAmJiB0eXBlb2YgU3ltYm9sID09PSBcImZ1bmN0aW9uXCIgJiYgb2JqLmNvbnN0cnVjdG9yID09PSBTeW1ib2wgJiYgb2JqICE9PSBTeW1ib2wucHJvdG90eXBlID8gXCJzeW1ib2xcIiA6IHR5cGVvZiBvYmo7XG4gICAgfTtcbiAgfVxuXG4gIHJldHVybiBfdHlwZW9mKG9iaik7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gX3R5cGVvZjsiLCJcInVzZSBzdHJpY3RcIjtleHBvcnRzLl9fZXNNb2R1bGU9dHJ1ZTtleHBvcnRzLm5vcm1hbGl6ZVBhdGhTZXA9bm9ybWFsaXplUGF0aFNlcDtleHBvcnRzLmRlbm9ybWFsaXplUGFnZVBhdGg9ZGVub3JtYWxpemVQYWdlUGF0aDtmdW5jdGlvbiBub3JtYWxpemVQYXRoU2VwKHBhdGgpe3JldHVybiBwYXRoLnJlcGxhY2UoL1xcXFwvZywnLycpO31mdW5jdGlvbiBkZW5vcm1hbGl6ZVBhZ2VQYXRoKHBhZ2Upe3BhZ2U9bm9ybWFsaXplUGF0aFNlcChwYWdlKTtpZihwYWdlLnN0YXJ0c1dpdGgoJy9pbmRleC8nKSl7cGFnZT1wYWdlLnNsaWNlKDYpO31lbHNlIGlmKHBhZ2U9PT0nL2luZGV4Jyl7cGFnZT0nLyc7fXJldHVybiBwYWdlO31cbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWRlbm9ybWFsaXplLXBhZ2UtcGF0aC5qcy5tYXAiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoJy4vZGlzdC9jbGllbnQvbGluaycpXG4iLCJpbXBvcnQgYmFsbEljb24gZnJvbSAnL3B1YmxpYy9pbWFnZXMvZm9vdGVyL2xlZnRCYWxsLnBuZydcclxuaW1wb3J0IHN0eWxlcyBmcm9tICcuL0JhbGwubW9kdWxlLnNjc3MnXHJcblxyXG5leHBvcnQgZnVuY3Rpb24gQmFsbCgpIHtcclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5jb250YWluZXJ9PlxyXG4gICAgICAgICAgICA8aW1nXHJcbiAgICAgICAgICAgICAgICBzcmM9e2JhbGxJY29uLnNyY31cclxuICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17c3R5bGVzLmJhbGx9XHJcbiAgICAgICAgICAgICAgICBhbHQ9XCJiYWxsLXBuZ1wiXHJcbiAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMudGV4dF93aXRoX2JhbGx9PlxyXG4gICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPXtzdHlsZXMudG9wfT5GT09UPC9wPlxyXG4gICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPXtzdHlsZXMuYm90dG9tfT5CRVQ8L3A+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgKVxyXG59XHJcbiIsIi8vXHJcbmltcG9ydCB7IHVzZVJvdXRlciB9IGZyb20gJ25leHQvZGlzdC9jbGllbnQvcm91dGVyJ1xyXG5pbXBvcnQgeyBCYWxsIH0gZnJvbSAnLi9CYWxsL0JhbGwnXHJcbi8vIHN0eWxlc1xyXG5pbXBvcnQgc3R5bGVzIGZyb20gJy4vRm9vdGVyLm1vZHVsZS5zY3NzJ1xyXG5pbXBvcnQgeyBOYXZpZ2F0aW9uIH0gZnJvbSAnLi9OYXZpZ2F0aW9uL05hdmlnYXRpb24nXHJcbmltcG9ydCB7IFNvY2lhbE1lZGlhIH0gZnJvbSAnLi9Tb2NpYWxNZWRpYS9Tb2NpYWxNZWRpYSdcclxuLy8gaWNvblxyXG5pbXBvcnQgYmFsbEljb24gZnJvbSAnL3B1YmxpYy9pbWFnZXMvcGVyc29uYWwvYmFsbC5wbmcnXHJcblxyXG4vLyBUT0RPIGNsaWNrIGV2ZW50cyBvbiBpY29uc1xyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIEZvb3RlcigpIHtcclxuICAgIGNvbnN0IHJvdXRlciA9IHVzZVJvdXRlcigpXHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuY29udGFpbmVyfT5cclxuICAgICAgICAgICAgPEJhbGwgLz5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5jb250ZW50fT5cclxuICAgICAgICAgICAgICAgIDxOYXZpZ2F0aW9uIC8+XHJcbiAgICAgICAgICAgICAgICA8U29jaWFsTWVkaWEgLz5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIHtyb3V0ZXIucGF0aG5hbWUgPT09ICcvcGVyc29uYWwnICYmXHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmJhbGx9PlxyXG4gICAgICAgICAgICAgICAgICAgIDxpbWcgc3JjPXtiYWxsSWNvbi5zcmN9IGFsdD1cImJhbGwtaWNvblwiIC8+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgKVxyXG59XHJcbiIsImltcG9ydCB1c2VUcmFuc2xhdGlvbiBmcm9tIFwibmV4dC10cmFuc2xhdGUvdXNlVHJhbnNsYXRpb25cIjtcclxuaW1wb3J0IExpbmsgZnJvbSBcIm5leHQvbGlua1wiO1xyXG5pbXBvcnQgc3R5bGVzIGZyb20gXCIuL0xpc3QubW9kdWxlLnNjc3NcIjtcclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBMaXN0KHsgbGlzdF9pdGVtcyA9IFtdLCBib3JkZXJzQWN0aXZlIH0pIHtcclxuICBjb25zdCB7IHQgfSA9IHVzZVRyYW5zbGF0aW9uKFwiY29tbW9uXCIpLFxyXG4gICAgdHJhbnNsYXRpb25QYXRoID0gXCJmb290ZXIubmF2aWdhdGlvbi5cIixcclxuICAgIHRyYW5zbGF0ZSA9IChrZXkpID0+IHQoYCR7dHJhbnNsYXRpb25QYXRofSR7a2V5fWApO1xyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPGRpdiBjbGFzc05hbWU9e2Ake3N0eWxlcy5jb250YWluZXJ9ICR7Ym9yZGVyc0FjdGl2ZSAmJiBzdHlsZXMuYm9yZGVyc31gfT5cclxuICAgICAgPHVsPlxyXG4gICAgICAgIHtsaXN0X2l0ZW1zLm1hcCgoZWwpID0+IChcclxuICAgICAgICAgIDxMaW5rIGhyZWY9e2VsLmxpbmt9IGtleT17TWF0aC5yYW5kb20oKX0+XHJcbiAgICAgICAgICAgIDxsaT57dHJhbnNsYXRlKGVsLm5hbWUpfTwvbGk+XHJcbiAgICAgICAgICA8L0xpbms+XHJcbiAgICAgICAgKSl9XHJcbiAgICAgIDwvdWw+XHJcbiAgICA8L2Rpdj5cclxuICApO1xyXG59XHJcbiIsIi8vIHN0eWxlc1xyXG5pbXBvcnQgeyBMaXN0IH0gZnJvbSAnLi9MaXN0L0xpc3QnXHJcbmltcG9ydCBzdHlsZXMgZnJvbSAnLi9OYXZpZ2F0aW9uLm1vZHVsZS5zY3NzJ1xyXG4vLyBkYXRhc1xyXG5pbXBvcnQgeyBuYXZfZGF0YSB9IGZyb20gJy4vbmF2X2RhdGEnXHJcblxyXG5leHBvcnQgZnVuY3Rpb24gTmF2aWdhdGlvbigpIHtcclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5jb250YWluZXJ9PlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmNvbnRlbnR9PlxyXG4gICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgIG5hdl9kYXRhLm1hcCgoZWwsIGkpID0+IChcclxuICAgICAgICAgICAgICAgICAgICAgICAgPExpc3RcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxpc3RfaXRlbXM9e2VsfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYm9yZGVyc0FjdGl2ZT17aSA9PT0gMSA/IHRydWUgOiBmYWxzZX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGtleT17TWF0aC5yYW5kb20oKX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAgICApKVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgIClcclxufVxyXG4iLCJleHBvcnQgY29uc3QgbmF2X2RhdGEgPSBbXHJcbiAgICBbXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBsaW5rOicvcHJlZGljdGlvbicsXHJcbiAgICAgICAgICAgIG5hbWU6ICdwcmVkaWN0aW9uJ1xyXG4gICAgICAgIH0sXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBsaW5rOicvZ2FtZXMnLFxyXG4gICAgICAgICAgICBuYW1lOiAnZ2FtZXMnXHJcbiAgICAgICAgfSxcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIGxpbms6Jy8nLFxyXG4gICAgICAgICAgICBuYW1lOiAnbmV3cydcclxuICAgICAgICB9ICAgXHJcbiAgICBdLFxyXG4gICAgW1xyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgbGluazonL2Fib3V0VXMnLFxyXG4gICAgICAgICAgICBuYW1lOiAnYWJvdXRVcydcclxuICAgICAgICB9LFxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgbGluazonL3ByZWRpY3Rpb24nLFxyXG4gICAgICAgICAgICBuYW1lOiAncGF5bWVudCdcclxuICAgICAgICB9LFxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgbGluazonL3N0YXRpc3RpY3MnLFxyXG4gICAgICAgICAgICBuYW1lOiAnbWF0Y2hTdGF0aXN0aWNzJ1xyXG4gICAgICAgIH1cclxuICAgIF0sXHJcbiAgICBbXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBsaW5rOicvcmVnaXN0cmF0aW9uJyxcclxuICAgICAgICAgICAgbmFtZTogJ3JlZ2lzdGVyJ1xyXG4gICAgICAgIH0sXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBsaW5rOicvdGVzdGltb25pYWxzJyxcclxuICAgICAgICAgICAgbmFtZTogJ2ZlZWRiYWNrcydcclxuICAgICAgICB9LFxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgbGluazonLycsXHJcbiAgICAgICAgICAgIG5hbWU6ICdjb250YWN0cydcclxuICAgICAgICB9LFxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgbGluazonL3ByaXZhY3ktcG9saWN5JyxcclxuICAgICAgICAgICAgbmFtZTogJ3ByaXZhY3ktcG9saWN5J1xyXG4gICAgICAgIH1cclxuICAgIF0sXHJcbl1cclxuXHJcblxyXG5cclxuXHJcblxyXG4iLCIvLyBzdHlsZXNcclxuaW1wb3J0IHN0eWxlcyBmcm9tICcuL1BTLm1vZHVsZS5zY3NzJ1xyXG4vLyBpY29uc1xyXG5pbXBvcnQgcGF5UGFsIGZyb20gJy9wdWJsaWMvaW1hZ2VzL2Zvb3Rlci9wYXlwYWwucG5nJ1xyXG5pbXBvcnQgdmlzYSBmcm9tICcvcHVibGljL2ltYWdlcy9mb290ZXIvdmlzYS5wbmcnXHJcbmltcG9ydCBtYXN0ZXJDYXJkIGZyb20gJy9wdWJsaWMvaW1hZ2VzL2Zvb3Rlci9tYXN0ZXJDYXJkLnBuZydcclxuLy8gY29tcG9uZW50c1xyXG5pbXBvcnQgeyBJY29uIH0gZnJvbSAnLi4vY29tbW9uL0ljb24vSWNvbidcclxuXHJcblxyXG5leHBvcnQgZnVuY3Rpb24gUFMoKSB7XHJcblxyXG4gICAgY29uc3RcclxuICAgICAgICAvLyBjb25maWdcclxuICAgICAgICBpY29ucyA9IFtcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAga2V5OiBNYXRoLnJhbmRvbSgpLFxyXG4gICAgICAgICAgICAgICAgc3JjOiBwYXlQYWwuc3JjLFxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICBrZXk6IE1hdGgucmFuZG9tKCksXHJcbiAgICAgICAgICAgICAgICBzcmM6IHZpc2Euc3JjLFxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICBrZXk6IE1hdGgucmFuZG9tKCksXHJcbiAgICAgICAgICAgICAgICBzcmM6IG1hc3RlckNhcmQuc3JjLFxyXG4gICAgICAgICAgICAgICAgbGFzdEVsZW1lbnQ6IHRydWVcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICBdXHJcblxyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8PlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmNvbnRhaW5lcn0+XHJcbiAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgaWNvbnMubWFwKGVsID0+IChcclxuICAgICAgICAgICAgICAgICAgICAgICAgPEljb25cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGtleT17ZWwua2V5fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc3JjPXtlbC5zcmN9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc2VzPXtzdHlsZXMuaWNvbnN9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBsYXN0RWxlbWVudD17ZWwubGFzdEVsZW1lbnQgJiYgZWwubGFzdEVsZW1lbnR9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgKSlcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC8+XHJcbiAgICApXHJcbn1cclxuIiwiLy8gc3R5bGVzXHJcbmltcG9ydCBzdHlsZXMgZnJvbSAnLi9TTS5tb2R1bGUuc2NzcydcclxuLy8gaWNvbnNcclxuaW1wb3J0IHBob25lIGZyb20gJy9wdWJsaWMvaW1hZ2VzL2hlYWRlci9Tb2NpYWxNZWRpYS9waG9uZS5zdmcnXHJcbmltcG9ydCBmYWNlYm9vayBmcm9tICcvcHVibGljL2ltYWdlcy9oZWFkZXIvU29jaWFsTWVkaWEvZmFjZWJvb2suc3ZnJ1xyXG5pbXBvcnQgdGVsZWdyYW0gZnJvbSAnL3B1YmxpYy9pbWFnZXMvaGVhZGVyL1NvY2lhbE1lZGlhL3RlbGVncmFtLnN2ZydcclxuaW1wb3J0IHdhdHN1cCBmcm9tICcvcHVibGljL2ltYWdlcy9oZWFkZXIvU29jaWFsTWVkaWEvd2F0c3VwLnN2ZydcclxuaW1wb3J0IGluc3RhZ3JhbSBmcm9tICcvcHVibGljL2ltYWdlcy9oZWFkZXIvU29jaWFsTWVkaWEvaW5zdGFncmFtLnN2ZydcclxuaW1wb3J0IHZpYmVyIGZyb20gJy9wdWJsaWMvaW1hZ2VzL2hlYWRlci9Tb2NpYWxNZWRpYS92aWJlci5zdmcnXHJcbi8vIGNvbXBvbmVudHNcclxuaW1wb3J0IHsgSWNvbiB9IGZyb20gJy4uL2NvbW1vbi9JY29uL0ljb24nXHJcblxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIFNNKCkge1xyXG5cclxuICAgIGNvbnN0XHJcbiAgICAgICAgLy8gY29uZmlnXHJcbiAgICAgICAgaWNvbnMgPSBbXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIGtleTogTWF0aC5yYW5kb20oKSxcclxuICAgICAgICAgICAgICAgIHNyYzogcGhvbmUuc3JjLFxyXG4gICAgICAgICAgICAgICAgdXJsOiBcInRlbDorMzc0OTg2NDU0NTdcIlxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICBrZXk6IE1hdGgucmFuZG9tKCksXHJcbiAgICAgICAgICAgICAgICBzcmM6IGZhY2Vib29rLnNyYyxcclxuICAgICAgICAgICAgICAgIHVybDogXCJodHRwczovL3d3dy5mYWNlYm9vay5jb20vJUQwJTlGJUQxJTgwJUQwJUJFJUQwJUIzJUQwJUJEJUQwJUJFJUQwJUI3JUQxJThCLSVEMCVCRCVEMCVCMC0lRDAlQTQlRDElODMlRDElODIlRDAlQjElRDAlQkUlRDAlQkItMTA0OTQxMzQ3NTc3OTEzL1wiXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIGtleTogTWF0aC5yYW5kb20oKSxcclxuICAgICAgICAgICAgICAgIHNyYzogd2F0c3VwLnNyYyxcclxuICAgICAgICAgICAgICAgIHVybDogXCJodHRwczovL2FwaS53aGF0c2FwcC5jb20vc2VuZD9waG9uZT0rMzc0OTg2NDU0NTdcIlxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICBrZXk6IE1hdGgucmFuZG9tKCksXHJcbiAgICAgICAgICAgICAgICBzcmM6IGluc3RhZ3JhbS5zcmMsXHJcbiAgICAgICAgICAgICAgICB1cmw6IFwiaHR0cHM6Ly93d3cuaW5zdGFncmFtLmNvbS9wcm9nbm96eW5hNTUwLz91dG1fbWVkaXVtPWNvcHlfbGlua1wiXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIGtleTogTWF0aC5yYW5kb20oKSxcclxuICAgICAgICAgICAgICAgIHNyYzogdmliZXIuc3JjLFxyXG4gICAgICAgICAgICAgICAgdXJsOiBcInZpYmVyOi8vY2hhdD9udW1iZXI9KzM3NDk4NjQ1NDU3XCJcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAga2V5OiBNYXRoLnJhbmRvbSgpLFxyXG4gICAgICAgICAgICAgICAgc3JjOiB0ZWxlZ3JhbS5zcmMsXHJcbiAgICAgICAgICAgICAgICB1cmw6IFwiaHR0cHM6Ly90ZWxlZ3JhbS5tZS9lcm1hYW5uXCIsXHJcbiAgICAgICAgICAgICAgICBsYXN0RWxlbWVudDogdHJ1ZVxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgIF1cclxuXHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIDw+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuY29udGFpbmVyfT5cclxuICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICBpY29ucy5tYXAoZWwgPT4gKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8SWNvblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAga2V5PXtlbC5rZXl9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzcmM9e2VsLnNyY31cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHVybD17ZWwudXJsfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZWxlbWVudHM9e2ljb25zLmxlbmd0aH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxhc3RFbGVtZW50PXtlbC5sYXN0RWxlbWVudCAmJiBlbC5sYXN0RWxlbWVudH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAgICApKVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8Lz5cclxuICAgIClcclxufVxyXG4iLCIvLyBjb21wb25lbnRzXHJcbmltcG9ydCB7IFNNIH0gZnJvbSAnLi9TTUljb25zL1NNJ1xyXG5pbXBvcnQgeyBQUyB9IGZyb20gJy4vUFNJY29ucy9QUydcclxuLy8gc3R5bGVzXHJcbmltcG9ydCBzdHlsZXMgZnJvbSAnLi9Tb2NpYWxNZWRpYS5tb2R1bGUuc2NzcydcclxuLy8gdHJhbnNsYXRpb24gXHJcbmltcG9ydCB1c2VUcmFuc2xhdGlvbiBmcm9tICduZXh0LXRyYW5zbGF0ZS91c2VUcmFuc2xhdGlvbidcclxuXHJcblxyXG5leHBvcnQgZnVuY3Rpb24gU29jaWFsTWVkaWEoKSB7XHJcblxyXG4gICAgY29uc3RcclxuICAgICAgICAvLyB0cmFuc2xhdGlvblxyXG4gICAgICAgIHsgdCB9ID0gdXNlVHJhbnNsYXRpb24oJ2NvbW1vbicpLFxyXG4gICAgICAgIHRyYW5zbGF0aW9uUGF0aCA9ICdmb290ZXIuc29jaWFsX21lZGlhX3BheW1hbnRzJyxcclxuICAgICAgICB0cmFuc2xhdGUgPSAoa2V5KSA9PiB0KGAke3RyYW5zbGF0aW9uUGF0aH0ke2tleX1gKVxyXG5cclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5jb250YWluZXJ9PlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmNvbnRlbnR9PlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5jb250cm9sZXJ9PlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuc29jaWFsX21lZGlhc30+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxwPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRyYW5zbGF0ZSgnLlNNLnRpdGxlJylcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9wPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8U00gLz5cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLnBheW1lbnRfc3lzdGVtc30+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxwPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRyYW5zbGF0ZSgnLlBTLnRpdGxlJylcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9wPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8UFMgLz5cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8L2RpdiA+XHJcbiAgICApXHJcbn1cclxuIiwiaW1wb3J0IHN0eWxlcyBmcm9tICcuL0ljb24ubW9kdWxlLnNjc3MnXHJcbmltcG9ydCBMaW5rIGZyb20gJ25leHQvbGluaydcclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBJY29uKHtcclxuICAgIHNyYyxcclxuICAgIGNsaWNrID0gbnVsbCxcclxuICAgIGxhc3RFbGVtZW50ID0gZmFsc2UsXHJcbiAgICBlbGVtZW50cyxcclxuICAgIG90aGVyU3R5bGVzID0gbnVsbCxcclxuICAgIGNsYXNzZXMsXHJcbiAgICB1cmwgPSBcIlwiIH0pIHtcclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPGRpdlxyXG4gICAgICAgICAgICBzdHlsZT17ZWxlbWVudHMgPyB7IHdpZHRoOiBgJHsxMDAgLyBlbGVtZW50c30lYCB9IDogeyBwYWRkaW5nOiAnMCA4cHgnIH19XHJcbiAgICAgICAgICAgIGNsYXNzTmFtZT17YCR7c3R5bGVzLmNvbnRhaW5lcn0gJHtsYXN0RWxlbWVudCA/IHN0eWxlcy5sYXN0X2VsZW1lbnQgOiBcIlwifSAke2NsYXNzZXN9YH0+XHJcbiAgICAgICAgICAgIDxMaW5rIGhyZWY9e3VybH0gdGFyZ2V0PVwiX2JsYW5rXCI+XHJcbiAgICAgICAgICAgICAgICA8YSB0YXJnZXQ9XCJfYmxhbmtcIj5cclxuICAgICAgICAgICAgICAgICAgICA8aW1nXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHNyYz17c3JjfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBhbHQ9e2BpY29ucy0ke3NyY31gfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBvbkNsaWNrPXtjbGlja31cclxuICAgICAgICAgICAgICAgICAgICAgICAgc3R5bGU9e290aGVyU3R5bGVzfVxyXG4gICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICA8L2E+XHJcbiAgICAgICAgICAgIDwvTGluaz5cclxuICAgICAgICA8L2RpdiA+XHJcbiAgICApXHJcbn1cclxuIiwiLy8gaG9va3MgYW5kIGhlbHBlcnNcclxuaW1wb3J0IHsgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCdcclxuLy8gc3R5bGVzXHJcbmltcG9ydCBzdHlsZXMgZnJvbSAnLi9CYXIubW9kdWxlLnNjc3MnXHJcbi8vIHRyYW5zbGF0aW9uIFxyXG5pbXBvcnQgdXNlVHJhbnNsYXRpb24gZnJvbSAnbmV4dC10cmFuc2xhdGUvdXNlVHJhbnNsYXRpb24nXHJcbi8vY29tcG9uZW50c1xyXG5pbXBvcnQgeyBMb2dpbiB9IGZyb20gJy4vTG9naW4vTG9naW4nXHJcbmltcG9ydCB7IEJhckl0ZW1zIH0gZnJvbSAnLi9CYXJJdGVtcy9CYXJJdGVtcydcclxuaW1wb3J0IHsgTG9nbyB9IGZyb20gJy4vTG9nby9Mb2dvJ1xyXG5pbXBvcnQgeyB1c2VTZWxlY3RvciB9IGZyb20gJ3JlYWN0LXJlZHV4J1xyXG5pbXBvcnQgRHJvcGRvd24gZnJvbSAnLi9Ecm9wZG93bk1lbnUvRHJvcGRvd24nXHJcblxyXG5leHBvcnQgZnVuY3Rpb24gQmFyKHsgYmFyX2l0ZW1zLCBiYXJfaXRlbXNfY29udCB9KSB7XHJcblxyXG4gICAgY29uc3RcclxuICAgICAgICB7IHQgfSA9IHVzZVRyYW5zbGF0aW9uKCdjb21tb24nKSxcclxuICAgICAgICB0cmFuc2xhdGlvblBhdGggPSAnaGVhZGVyLicsXHJcbiAgICAgICAgdHJhbnNsYXRlID0gKGtleSkgPT4gdChgJHt0cmFuc2xhdGlvblBhdGh9JHtrZXl9YCksXHJcbiAgICAgICAgLy8gbG9naW4gbW9kYWwgY29uZmlnc1xyXG4gICAgICAgIFtzaG93TG9naW5Nb2RhbCwgc2V0U2hvd0xvZ2luTW9kYWxdID0gdXNlU3RhdGUoZmFsc2UpLFxyXG4gICAgICAgIHVzZXJfaW5mbyA9IHVzZVNlbGVjdG9yKChzdGF0ZSkgPT4gc3RhdGUudXNlci51c2VyKVxyXG5cclxuICAgIGNvbnNvbGUubG9nKCB1c2VyX2luZm8gKTtcclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9e2Ake3N0eWxlcy5iYXJfY29udGFpbmVyfSAke2Jhcl9pdGVtc19jb250fWB9PlxyXG4gICAgICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgICAgICAgPExvZ28gLz5cclxuICAgICAgICAgICAgICAgIDxEcm9wZG93biAvPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPEJhckl0ZW1zXHJcbiAgICAgICAgICAgICAgICB1c2VyTG9nZ2VkPXt1c2VyX2luZm8gIT09IG51bGwgPyB0cnVlIDogZmFsc2V9XHJcbiAgICAgICAgICAgICAgICByZWdpc3RyYXRpb249e3RyYW5zbGF0ZSgncmVnaXN0ZXInKX1cclxuICAgICAgICAgICAgICAgIGxvZ2luPXt0cmFuc2xhdGUoJ2xvZ2luJyl9XHJcbiAgICAgICAgICAgICAgICByZWdpc3RyYXRpb25fcGF0aD0nL3JlZ2lzdHJhdGlvbidcclxuICAgICAgICAgICAgICAgIGxvZ2luTW9kYWxIYW5kbGU9eygpID0+IHNldFNob3dMb2dpbk1vZGFsKHRydWUpfVxyXG4gICAgICAgICAgICAgICAgYmFyX2l0ZW1zPXtiYXJfaXRlbXN9XHJcbiAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgIHtzaG93TG9naW5Nb2RhbCAmJiA8TG9naW4gb25Nb2RhbENsb3NlPXsoKSA9PiBzZXRTaG93TG9naW5Nb2RhbChmYWxzZSl9IC8+fVxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgKVxyXG59XHJcbiIsIi8vIGhvb2tzIGFuZCBoZWxwZXJzXHJcbmltcG9ydCB7IGxhbmd1YWdlcyB9IGZyb20gJy4vTGFuZ3VhZ2VEcm9wQ29uZmlncy9sYW5nLWNvbmZpZ3MnXHJcbmltcG9ydCB7IHVzZVN0YXRlLCB1c2VFZmZlY3QgfSBmcm9tICdyZWFjdCdcclxuLy8gaW1wb3J0IHsgdXNlcl9kYXRhIH0gZnJvbSAnL3NyYy91c2VyL3VzZXInXHJcbmltcG9ydCB7IHVzZVJvdXRlciB9IGZyb20gJ25leHQvZGlzdC9jbGllbnQvcm91dGVyJ1xyXG4vLyB0cmFuc2xhdGlvbiBcclxuaW1wb3J0IHVzZVRyYW5zbGF0aW9uIGZyb20gJ25leHQtdHJhbnNsYXRlL3VzZVRyYW5zbGF0aW9uJ1xyXG4vLyBzdHlsZXMgXHJcbmltcG9ydCBzdHlsZXMgZnJvbSAnLi9CYXJJdGVtcy5tb2R1bGUuc2NzcydcclxuLy8gY29tcG9uZW50c1xyXG5pbXBvcnQgTGluayBmcm9tICduZXh0L2xpbmsnXHJcbmltcG9ydCB7IExhbmd1YWdlRHJvcCB9IGZyb20gJy4vTGFuZ3VhZ2VEcm9wL0xhbmd1YWdlRHJvcCdcclxuaW1wb3J0IHsgTG9nZ2VkIH0gZnJvbSAnLi9Mb2dnZWQvTG9nZ2VkJ1xyXG4vLyBpY29uc1xyXG5pbXBvcnQgcmVnaXN0ZXJfaWNvbiBmcm9tICcvcHVibGljL2ltYWdlcy9oZWFkZXIvcmVnaXN0ZXIucG5nJ1xyXG5pbXBvcnQgbG9naW5faWNvbiBmcm9tICcvcHVibGljL2ltYWdlcy9oZWFkZXIvbG9naW4ucG5nJ1xyXG5pbXBvcnQgeyB1c2VTZWxlY3RvciB9IGZyb20gJ3JlYWN0LXJlZHV4J1xyXG5pbXBvcnQgeyBzZWxlY3RVc2VyIH0gZnJvbSAnLi4vLi4vLi4vLi4vcmVkdXgvZmVhdHVyZXMvdXNlclNsaWNlJ1xyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG5leHBvcnQgZnVuY3Rpb24gQmFySXRlbXMoe1xyXG4gICAgcmVnaXN0cmF0aW9uLFxyXG4gICAgbG9naW4sXHJcbiAgICByZWdpc3RyYXRpb25fcGF0aCxcclxuICAgIGxvZ2luTW9kYWxIYW5kbGUsXHJcbiAgICBiYXJfaXRlbXMsXHJcbiAgICB1c2VyTG9nZ2VkIH0pIHtcclxuICAgICAgICBcclxuICAgICAgICBjb25zdCB7IHQsIGxhbmcgfSA9IHVzZVRyYW5zbGF0aW9uKCdjb21tb24nKTtcclxuICAgICAgICBjb25zdCBbbGFuZ3VhZ2VzVGl0bGUsIHNldExhbmd1YWdlc1RpdGxlXSA9IHVzZVN0YXRlKGxhbmd1YWdlc1sxXSk7XHJcbiAgICAgICAgdXNlRWZmZWN0KCAoKT0+e1xyXG4gICAgICAgICAgICBjb25zdCBuZXdMYW5nID0gbGFuZ3VhZ2VzLmZpbmQoIGVsID0+IGVsLmxhbmcgPT09IGxhbmcgKTtcclxuICAgICAgICAgICAgaWYgKCBuZXdMYW5nICkge1xyXG4gICAgICAgICAgICAgICAgc2V0TGFuZ3VhZ2VzVGl0bGUoIG5ld0xhbmcgKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0sIFtsYW5nXSApOyBcclxuICAgICAgICBcclxuICAgICAgICBjb25zdFxyXG4gICAgICAgIHJvdXRlciA9IHVzZVJvdXRlcigpLFxyXG4gICAgICAgIGxhbmd1YWdlc19kYXRhID0gbGFuZ3VhZ2VzLFxyXG5cclxuICAgICAgICBbc2hvd0Ryb3AsIHNldFNob3dEcm9wXSA9IHVzZVN0YXRlKGZhbHNlKSxcclxuXHJcbiAgICAgICAgY2hhbmdlTGFuZ1RpdGxlID0gKGV2ZW50KSA9PiB7XHJcbiAgICAgICAgICAgIGxldCBsYW5nX3RpdGxlX2RhdGEgPSBsYW5ndWFnZXNfZGF0YS5maWx0ZXIoZWwgPT4gZWwubGFuZyA9PT0gZXZlbnQudGFyZ2V0LmNsYXNzTmFtZSlcclxuICAgICAgICAgICAgc2V0TGFuZ3VhZ2VzVGl0bGUobGFuZ190aXRsZV9kYXRhWzBdKVxyXG4gICAgICAgICAgICBzZXRTaG93RHJvcChmYWxzZSlcclxuICAgICAgICB9LFxyXG4gICAgICAgIFxyXG4gICAgICAgIHRyYW5zbGF0aW9uUGF0aCA9ICdoZWFkZXIubGFuZy4nLFxyXG4gICAgICAgIHRyYW5zbGF0ZSA9IChrZXkpID0+IHQoYCR7dHJhbnNsYXRpb25QYXRofSR7a2V5fWApXHJcblxyXG4gICAgICAgIGNvbnN0IHVzZXJfZGF0YSA9IHVzZVNlbGVjdG9yKHNlbGVjdFVzZXIpO1xyXG4gICAgICAgIGNvbnNvbGUubG9nKHVzZXJfZGF0YSk7XHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIDw+XHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtgJHtzdHlsZXMuYmFyX2l0ZW1fY29udGFpbmVyfSAke2Jhcl9pdGVtc30gJHtyb3V0ZXIucGF0aG5hbWUgIT09ICcvJyA/IHN0eWxlcy5mb3JfbW9iaWxlIDogbnVsbH1gfT5cclxuICAgICAgICAgICAgICAgICAgICB7dXNlckxvZ2dlZCA/IDxMb2dnZWQgZGF0YT17dXNlcl9kYXRhfSAvPiA6XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuYXV0aF9jb250YWluZXJ9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5hdXRoX2J1dHRvbnN9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuc2lnbl91cF9idXR0b259PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8TGluayBocmVmPXtyZWdpc3RyYXRpb25fcGF0aH0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aW1nIHNyYz17cmVnaXN0ZXJfaWNvbi5zcmN9IGFsdD1cIlwiIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvTGluaz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPExpbmsgaHJlZj17cmVnaXN0cmF0aW9uX3BhdGh9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZWdpc3RyYXRpb25cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvTGluaz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17c3R5bGVzLnNpZ25faW5fYnV0dG9ufVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNsaWNrPXtsb2dpbk1vZGFsSGFuZGxlfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGltZyBzcmM9e2xvZ2luX2ljb24uc3JjfSBhbHQ9XCJcIiAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBsb2dpblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMubGFuZ19idXR0b259PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9e3N0eWxlcy5sYW5nX2J1dHRvbl9jb250ZW50fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc3R5bGU9e3Nob3dEcm9wID8geyBkaXNwbGF5OiAnbm9uZScgfSA6IG51bGx9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiBzZXRTaG93RHJvcCh0cnVlKX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0cmFuc2xhdGUoYCR7bGFuZ3VhZ2VzVGl0bGUuY29udGVudE9uVGl0bGV9YClcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aW1nXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3JjPXtsYW5ndWFnZXNUaXRsZS5pY29ufVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFsdD1cImxhbmctZmxhZ1wiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAge3Nob3dEcm9wICYmIDxMYW5ndWFnZURyb3BcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsaWNrPXtjaGFuZ2VMYW5nVGl0bGV9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNsb3NlPXsoKSA9PiBzZXRTaG93RHJvcChmYWxzZSl9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBkYXRhPXtsYW5ndWFnZXNfZGF0YX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgLz59XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8L2RpdiA+XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICA8Lz5cclxuICAgIClcclxufVxyXG4iLCIvLyBmbGFnIGljb25zXHJcbmltcG9ydCBydXNGbGFnIGZyb20gJy9wdWJsaWMvaW1hZ2VzL2hlYWRlci9mbGFncy9ydXMucG5nJ1xyXG5pbXBvcnQgYXJtRmxhZyBmcm9tICcvcHVibGljL2ltYWdlcy9oZWFkZXIvZmxhZ3MvYXJtLnN2ZydcclxuaW1wb3J0IGVuRmxhZyBmcm9tICcvcHVibGljL2ltYWdlcy9oZWFkZXIvZmxhZ3MvZW4uc3ZnJ1xyXG5pbXBvcnQgZXNwRmxhZyBmcm9tICcvcHVibGljL2ltYWdlcy9oZWFkZXIvZmxhZ3MvZXNwLnN2ZydcclxuaW1wb3J0IGZyY0ZsYWcgZnJvbSAnL3B1YmxpYy9pbWFnZXMvaGVhZGVyL2ZsYWdzL2ZyYy5zdmcnXHJcbmltcG9ydCBkZXVGbGFnIGZyb20gJy9wdWJsaWMvaW1hZ2VzL2hlYWRlci9mbGFncy9kZXUuc3ZnJ1xyXG5cclxuXHJcbmV4cG9ydCBjb25zdCBsYW5ndWFnZXMgPVxyXG4gICAgW1xyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgbGFuZzogXCJhbVwiLFxyXG4gICAgICAgICAgICBjb250ZW50T25UaXRsZTogJ2FtLm9uVGl0bGUnLFxyXG4gICAgICAgICAgICBjb250ZW50T25Ecm9wOiAnYW0ub25Ecm9wJyxcclxuICAgICAgICAgICAgaWNvbjogYXJtRmxhZy5zcmMsXHJcbiAgICAgICAgfSxcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIGxhbmc6IFwicnNcIixcclxuICAgICAgICAgICAgY29udGVudE9uVGl0bGU6ICdycy5vblRpdGxlJyxcclxuICAgICAgICAgICAgY29udGVudE9uRHJvcDogJ3JzLm9uRHJvcCcsXHJcbiAgICAgICAgICAgIGljb246IHJ1c0ZsYWcuc3JjLFxyXG4gICAgICAgIH0sXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBsYW5nOiBcImVuXCIsXHJcbiAgICAgICAgICAgIGNvbnRlbnRPblRpdGxlOiAnZW4ub25UaXRsZScsXHJcbiAgICAgICAgICAgIGNvbnRlbnRPbkRyb3A6ICdlbi5vbkRyb3AnLFxyXG4gICAgICAgICAgICBpY29uOiBlbkZsYWcuc3JjLFxyXG4gICAgICAgIH0sXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBsYW5nOiBcImVzcFwiLFxyXG4gICAgICAgICAgICBjb250ZW50T25UaXRsZTogJ2VzcC5vblRpdGxlJyxcclxuICAgICAgICAgICAgY29udGVudE9uRHJvcDogJ2VzcC5vbkRyb3AnLFxyXG4gICAgICAgICAgICBpY29uOiBlc3BGbGFnLnNyYyxcclxuICAgICAgICB9LFxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgbGFuZzogXCJmclwiLFxyXG4gICAgICAgICAgICBjb250ZW50T25UaXRsZTogJ2ZyYy5vblRpdGxlJyxcclxuICAgICAgICAgICAgY29udGVudE9uRHJvcDogJ2ZyYy5vbkRyb3AnLFxyXG4gICAgICAgICAgICBpY29uOiBmcmNGbGFnLnNyYyxcclxuICAgICAgICB9LFxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgbGFuZzogXCJkZXVcIixcclxuICAgICAgICAgICAgY29udGVudE9uVGl0bGU6ICdkZXUub25UaXRsZScsXHJcbiAgICAgICAgICAgIGNvbnRlbnRPbkRyb3A6ICdkZXUub25Ecm9wJyxcclxuICAgICAgICAgICAgaWNvbjogZGV1RmxhZy5zcmMsXHJcbiAgICAgICAgfSxcclxuICAgIF1cclxuIiwiLy8gaG9va3MgYW5kIGhlbHBlcnNcclxuaW1wb3J0IHsgdXNlUm91dGVyIH0gZnJvbSAnbmV4dC9kaXN0L2NsaWVudC9yb3V0ZXInO1xyXG5pbXBvcnQgeyB1c2VFZmZlY3QsIHVzZVJlZiB9IGZyb20gJ3JlYWN0JztcclxuLy8gdHJhbnNsYXRpb24gXHJcbmltcG9ydCB1c2VUcmFuc2xhdGlvbiBmcm9tICduZXh0LXRyYW5zbGF0ZS91c2VUcmFuc2xhdGlvbidcclxuLy8gY29tcG9uZXRuc1xyXG5pbXBvcnQgTGluayBmcm9tICduZXh0L2xpbmsnXHJcbi8vIHN0eWxlcyBcclxuaW1wb3J0IHN0eWxlcyBmcm9tICcuL0xhbmd1YWdlRHJvcC5tb2R1bGUuc2NzcydcclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBMYW5ndWFnZURyb3AoeyBvbkNsb3NlLCBjbGljaywgZGF0YSB9KSB7XHJcblxyXG4gICAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgICAgICBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKFwibW91c2Vkb3duXCIsIGhhbmRsZUNsb3NlKTtcclxuICAgICAgICByZXR1cm4gKCkgPT4ge1xyXG4gICAgICAgICAgICBkb2N1bWVudC5yZW1vdmVFdmVudExpc3RlbmVyKFwibW91c2Vkb3duXCIsIGhhbmRsZUNsb3NlKTtcclxuICAgICAgICB9XHJcbiAgICB9LCBbXSlcclxuXHJcbiAgICBjb25zdFxyXG4gICAgICAgIG5vZGUgPSB1c2VSZWYoKSxcclxuICAgICAgICByb3V0ZXIgPSB1c2VSb3V0ZXIoKSxcclxuXHJcbiAgICAgICAgaGFuZGxlQ2xvc2UgPSAoZSkgPT4ge1xyXG4gICAgICAgICAgICBpZiAobm9kZS5jdXJyZW50LmNvbnRhaW5zKGUudGFyZ2V0KSkge1xyXG4gICAgICAgICAgICAgICAgaWYgKGUudGFyZ2V0LnBhcmVudE5vZGUpIHJldHVyblxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIG9uQ2xvc2UoKVxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgeyB0IH0gPSB1c2VUcmFuc2xhdGlvbignY29tbW9uJyksXHJcbiAgICAgICAgdHJhbnNsYXRpb25QYXRoID0gJ2hlYWRlci5sYW5nLicsXHJcbiAgICAgICAgdHJhbnNsYXRlID0gKGtleSkgPT4gdChgJHt0cmFuc2xhdGlvblBhdGh9JHtrZXl9YClcclxuXHJcblxyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8ZGl2XHJcbiAgICAgICAgICAgIGNsYXNzTmFtZT17c3R5bGVzLmNvbnRhaW5lcn1cclxuICAgICAgICAgICAgcmVmPXtub2RlfVxyXG4gICAgICAgID5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5jb250ZW50fT5cclxuICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICBkYXRhLm1hcChlbCA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiAoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8TGlua1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGhyZWY9e2Ake3JvdXRlci5wYXRobmFtZX1gfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxvY2FsZT17ZWwubGFuZ31cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBrZXk9e2BjaGFuZ2UtbGFuZy0ke2VsLmxhbmd9YH0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5yb3d9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3BhblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb25DbGljaz17Y2xpY2t9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9e2Ake2VsLmxhbmd9YH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRyYW5zbGF0ZShlbC5jb250ZW50T25Ecm9wKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpbWdcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9e2NsaWNrfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3JjPXtlbC5pY29ufVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPXtgJHtlbC5sYW5nfWB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0xpbms+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIClcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICApXHJcblxyXG59XHJcbiIsIi8vIHN0eWxlc1xyXG5pbXBvcnQgeyB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IHN0eWxlcyBmcm9tICcuL0xvZ2dlZC5tb2R1bGUuc2NzcydcclxuaW1wb3J0IHsgTG9nZ2VkRHJvcCB9IGZyb20gJy4vTG9nZ2VkRHJvcC9Mb2dnZWREcm9wJztcclxuaW1wb3J0IHsgTG9nZ2VkV2FsbHBlciB9IGZyb20gJy4vTG9nZ2VkV2FsbHBlci9Mb2dnZWRXYWxscGVyJ1xyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIExvZ2dlZCh7XHJcbiAgICBkYXRhXHJcbn0pIHtcclxuICAgIGNvbnN0XHJcbiAgICAgICAgLy8gc3RhdGVzXHJcbiAgICAgICAgLy9jaGFuZ2UgdXNlciBkcm9wZG93blxyXG4gICAgICAgIFtzaG93VXNlckRyb3AsIHNldFNob3dVc2VyRHJvcF0gPSB1c2VTdGF0ZShmYWxzZSlcclxuXHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIDxkaXZcclxuICAgICAgICAgICAgY2xhc3NOYW1lPXtzdHlsZXMuY29udGFpbmVyfVxyXG4gICAgICAgICAgICBzdHlsZT17c2hvd1VzZXJEcm9wID8geyBwYWRkaW5nOiAnMTcuNXB4IDAnIH0gOiBudWxsfT5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5jb250ZW50fT5cclxuICAgICAgICAgICAgICAgIHshc2hvd1VzZXJEcm9wID9cclxuICAgICAgICAgICAgICAgICAgICA8TG9nZ2VkV2FsbHBlclxyXG4gICAgICAgICAgICAgICAgICAgICAgICBpbWc9e2RhdGEucGhvdG99XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGZ1bGxOYW1lPXtkYXRhLnVzZXJuYW1lfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBjbGljaz17KCkgPT4gc2V0U2hvd1VzZXJEcm9wKHRydWUpfVxyXG4gICAgICAgICAgICAgICAgICAgIC8+IDpcclxuICAgICAgICAgICAgICAgICAgICA8TG9nZ2VkRHJvcFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBvbkNsb3NlPXsoKSA9PiBzZXRTaG93VXNlckRyb3AoZmFsc2UpfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICB1c2VyPXtkYXRhfVxyXG4gICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgKVxyXG59XHJcbiIsIi8vIGhvb2tzIGFuZCBoZWxwZXJzXHJcbmltcG9ydCB7IHVzZVJvdXRlciB9IGZyb20gJ25leHQvZGlzdC9jbGllbnQvcm91dGVyJztcclxuaW1wb3J0IHsgdXNlRWZmZWN0LCB1c2VSZWYgfSBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCB7IHVzZURpc3BhdGNoIH0gZnJvbSAncmVhY3QtcmVkdXgnO1xyXG5pbXBvcnQgdXNlckRlZmF1bHRJY29uIGZyb20gJy9wdWJsaWMvaW1hZ2VzL2NvbW1vbi91c2VyRGVmYXVsdC5wbmcnXHJcbi8vIHRyYW5zbGF0aW9uIFxyXG5pbXBvcnQgdXNlVHJhbnNsYXRpb24gZnJvbSAnbmV4dC10cmFuc2xhdGUvdXNlVHJhbnNsYXRpb24nXHJcbi8vIGNvbXBvbmV0bnNcclxuaW1wb3J0IExpbmsgZnJvbSAnbmV4dC9saW5rJ1xyXG4vLyBzdHlsZXMgXHJcbmltcG9ydCBzdHlsZXMgZnJvbSAnLi9Mb2dnZWREcm9wLm1vZHVsZS5zY3NzJ1xyXG4vLyBpY29uc1xyXG5pbXBvcnQgdGVsSWNvbiBmcm9tICcvcHVibGljL2ltYWdlcy9jb21tb24vcGhvbmUucG5nJ1xyXG5pbXBvcnQgeyBsb2dvdXQgfSBmcm9tICcvcmVkdXgvZmVhdHVyZXMvdXNlclNsaWNlJztcclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBMb2dnZWREcm9wKHsgb25DbG9zZSwgdXNlciB9KSB7XHJcblxyXG4gICAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgICAgICBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKFwibW91c2Vkb3duXCIsIGhhbmRsZUNsb3NlKTtcclxuICAgICAgICByZXR1cm4gKCkgPT4ge1xyXG4gICAgICAgICAgICBkb2N1bWVudC5yZW1vdmVFdmVudExpc3RlbmVyKFwibW91c2Vkb3duXCIsIGhhbmRsZUNsb3NlKTtcclxuICAgICAgICB9XHJcbiAgICB9LCBbXSlcclxuXHJcbiAgICBjb25zdFxyXG4gICAgICAgIG5vZGUgPSB1c2VSZWYoKSxcclxuICAgICAgICByb3V0ZXIgPSB1c2VSb3V0ZXIoKSxcclxuXHJcbiAgICAgICAgaGFuZGxlQ2xvc2UgPSAoZSkgPT4ge1xyXG4gICAgICAgICAgICBpZiAobm9kZS5jdXJyZW50LmNvbnRhaW5zKGUudGFyZ2V0KSkge1xyXG4gICAgICAgICAgICAgICAgaWYgKGUudGFyZ2V0LnBhcmVudE5vZGUpIHJldHVyblxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIG9uQ2xvc2UoKVxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgeyB0IH0gPSB1c2VUcmFuc2xhdGlvbignY29tbW9uJyksXHJcbiAgICAgICAgdHJhbnNsYXRpb25QYXRoID0gJ2NvbW1vbnMuJyxcclxuICAgICAgICB0cmFuc2xhdGUgPSAoa2V5KSA9PiB0KGAke3RyYW5zbGF0aW9uUGF0aH0ke2tleX1gKSxcclxuICAgICAgICBkaXNwYXRjaCA9IHVzZURpc3BhdGNoKClcclxuXHJcbiAgICBmdW5jdGlvbiBfbG9nb3V0KCkge1xyXG4gICAgICAgIGRpc3BhdGNoKGxvZ291dCgpKTtcclxuICAgICAgICByb3V0ZXIucHVzaChgL2ApO1xyXG4gICAgfSAgICBcclxuXHJcblxyXG4gICAgZnVuY3Rpb24gZ29Ub1BlcnNvbmFsICgpIHtcclxuICAgICAgICByb3V0ZXIucHVzaChgL3BlcnNvbmFsYCk7XHJcbiAgICB9XHJcblxyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8ZGl2XHJcbiAgICAgICAgICAgIGNsYXNzTmFtZT17c3R5bGVzLmNvbnRhaW5lcn1cclxuICAgICAgICAgICAgcmVmPXtub2RlfVxyXG4gICAgICAgID5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5jb250ZW50fT5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMudXNlcl9waG90b19uYW1lfT5cclxuICAgICAgICAgICAgICAgICAgICA8c3BhbiBvbkNsaWNrPXtnb1RvUGVyc29uYWx9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICB7LyogPExpbmsgaHJlZj0nL3BlcnNvbmFsJz4gKi99XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aW1nIHNyYz17dXNlci5waG90byA/PyB1c2VyRGVmYXVsdEljb24uc3JjfSBhbHQ9XCJcIiAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICB7LyogPC9MaW5rPiAqL31cclxuICAgICAgICAgICAgICAgICAgICA8L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgICAgPHNwYW4gb25DbGljaz17Z29Ub1BlcnNvbmFsfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgey8qIDxMaW5rIGhyZWY9Jy9wZXJzb25hbCc+ICovfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAge3VzZXIudXNlcm5hbWV9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHsvKiA8L0xpbms+ICovfVxyXG4gICAgICAgICAgICAgICAgICAgIDwvc3Bhbj5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy51c2VyX3RlbH0+XHJcbiAgICAgICAgICAgICAgICAgICAgPHNwYW4+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxpbWcgc3JjPXt0ZWxJY29uLnNyY30gYWx0PVwiXCIgLz5cclxuICAgICAgICAgICAgICAgICAgICA8L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgICAgPHNwYW4+e3VzZXIudGVsZXBob25lfTwvc3Bhbj5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5sb2dPdXR9PlxyXG4gICAgICAgICAgICAgICAgICAgIDxzcGFuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+X2xvZ291dCgpIH1cclxuICAgICAgICAgICAgICAgICAgICA+e3RyYW5zbGF0ZSgnbG9nT3V0Jyl9PC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgKVxyXG5cclxufVxyXG4iLCIvLyBjb21wb25lbnRzXHJcbmltcG9ydCBMaW5rIGZyb20gJ25leHQvbGluaydcclxuLy8gc3R5bGVzXHJcbmltcG9ydCBzdHlsZXMgZnJvbSAnLi9Mb2dnZWRXYWxscGVyLm1vZHVsZS5zY3NzJ1xyXG4vLyBpY29uc1xyXG5pbXBvcnQgdHJpYW5nbGUgZnJvbSAnL3B1YmxpYy9pbWFnZXMvY29tbW9uL3RyaWFuZ2xlLnBuZydcclxuaW1wb3J0IHVzZXJEZWZhdWx0SWNvbiBmcm9tICcvcHVibGljL2ltYWdlcy9jb21tb24vdXNlckRlZmF1bHQucG5nJ1xyXG5cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBMb2dnZWRXYWxscGVyKHtcclxuICAgIGltZyxcclxuICAgIGZ1bGxOYW1lLFxyXG4gICAgY2xpY2tcclxufSkge1xyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmNvbnRhaW5lcn0+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuY29udGVudH0+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLnVzZXJfcGhvdG99PlxyXG4gICAgICAgICAgICAgICAgICAgIDxMaW5rIGhyZWY9Jy9wZXJzb25hbCc+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxpbWdcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNyYz17aW1nID8gaW1nIDogdXNlckRlZmF1bHRJY29uLnNyY31cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFsdD17YCR7ZnVsbE5hbWV9IGljb25gfSAvPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvTGluaz5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPGRpdlxyXG4gICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17c3R5bGVzLnVzZXJfZnVsbE5hbWV9XHJcbiAgICAgICAgICAgICAgICAgICAgb25DbGljaz17Y2xpY2t9XHJcbiAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPXtzdHlsZXMuZnVsbG5hbWV9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICB7ZnVsbE5hbWV9XHJcbiAgICAgICAgICAgICAgICAgICAgPC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgIDxzcGFuIHN0eWxlPXt7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbG9yOiAnd2hpdGUnLFxyXG4gICAgICAgICAgICAgICAgICAgIH19PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8aW1nXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzcmM9e3RyaWFuZ2xlLnNyY31cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFsdD1cInRyaWFuZ2xlXCIgLz5cclxuICAgICAgICAgICAgICAgICAgICA8L3NwYW4+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICApXHJcbn1cclxuIiwiLy8gaG9va3MgYW5kIGhlbHBlcnNcclxuaW1wb3J0IHsgdXNlUm91dGVyIH0gZnJvbSAnbmV4dC9kaXN0L2NsaWVudC9yb3V0ZXInXHJcbmltcG9ydCB7IHVzZUVmZmVjdCwgdXNlUmVmLCB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0JztcclxuXHJcblxyXG4vLyBzdHlsZXNcclxuaW1wb3J0IHN0eWxlcyBmcm9tICcuL0Ryb3Bkb3duLm1vZHVsZS5zY3NzJztcclxuXHJcbi8vIHRyYW5zbGF0aW9uIFxyXG5pbXBvcnQgdXNlVHJhbnNsYXRpb24gZnJvbSAnbmV4dC10cmFuc2xhdGUvdXNlVHJhbnNsYXRpb24nXHJcblxyXG4vL2ltZ3NcclxuaW1wb3J0IGRyb3Bkb3duTGluZXMgZnJvbSAnL3B1YmxpYy9pbWFnZXMvaGVhZGVyL2Ryb3Bkb3duX2xpbmVzLnBuZyc7XHJcblxyXG4vL2NvbXBvbmVudHNcclxuaW1wb3J0IExpbmsgZnJvbSAnbmV4dC9saW5rJ1xyXG5pbXBvcnQgQ29udGFjdHNNb2RhbCBmcm9tICcuLi8uLi8uLi9QYWdlcy9Db250YWN0cy9Db250YWN0c01vZGFsJztcclxuXHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBEcm9wZG93bigpIHtcclxuICAgIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICAgICAgZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcihcIm1vdXNlZG93blwiLCBoYW5kbGVDbG9zZSk7XHJcbiAgICAgICAgcmV0dXJuICgpID0+IHtcclxuICAgICAgICAgICAgZG9jdW1lbnQucmVtb3ZlRXZlbnRMaXN0ZW5lcihcIm1vdXNlZG93blwiLCBoYW5kbGVDbG9zZSk7XHJcbiAgICAgICAgfVxyXG4gICAgfSwgW10pXHJcblxyXG4gICAgY29uc3RcclxuICAgICAgICBbc2hvd0Ryb3Bkb3duLCBzZXRTaG93RHJvcGRvd25dID0gdXNlU3RhdGUoZmFsc2UpLFxyXG4gICAgICAgIFtzaG93Q29udGFjdHNNb2RhbCwgc2V0U2hvd0NvbnRhY3RzTW9kYWxdID0gdXNlU3RhdGUoZmFsc2UpLFxyXG5cclxuICAgICAgICB7IHQgfSA9IHVzZVRyYW5zbGF0aW9uKCdjb21tb24nKSxcclxuICAgICAgICB0cmFuc2xhdGlvblBhdGggPSAnaGVhZGVyLm5hdkJhci4nLFxyXG4gICAgICAgIHRyYW5zbGF0ZSA9IChrZXkpID0+IHQoYCR7dHJhbnNsYXRpb25QYXRofSR7a2V5fWApLFxyXG5cclxuICAgICAgICByb3V0ZXIgPSB1c2VSb3V0ZXIoKSxcclxuXHJcbiAgICAgICAgbm9kZSA9IHVzZVJlZigpLFxyXG5cclxuICAgICAgICBoYW5kbGVDbG9zZSA9IChlKSA9PiB7XHJcbiAgICAgICAgICAgIGlmIChub2RlPy5jdXJyZW50Py5jb250YWlucyhlLnRhcmdldCkpIHtcclxuICAgICAgICAgICAgICAgIGlmIChlLnRhcmdldC5wYXJlbnROb2RlKSByZXR1cm5cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBzZXRTaG93RHJvcGRvd24oZmFsc2UpXHJcbiAgICAgICAgfSxcclxuXHJcbiAgICAgICAgYnV0dG9uc0luSG9tZVBhZ2UgPSBbXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIGlkOiAnbWFpbicsXHJcbiAgICAgICAgICAgICAgICBrZXk6IE1hdGgucmFuZG9tKCksXHJcbiAgICAgICAgICAgICAgICBmcnN0Q29udGVudDogdHJhbnNsYXRlKCdtYWluJyksXHJcbiAgICAgICAgICAgICAgICBocmVmOiAnLydcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgaWQ6ICdnYW1lcycsXHJcbiAgICAgICAgICAgICAgICBrZXk6IE1hdGgucmFuZG9tKCksXHJcbiAgICAgICAgICAgICAgICBmcnN0Q29udGVudDogdHJhbnNsYXRlKCdnYW1lcycpLFxyXG4gICAgICAgICAgICAgICAgaHJlZjogJy9nYW1lcydcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgaWQ6ICdzdGF0aXN0aWNzJyxcclxuICAgICAgICAgICAgICAgIGtleTogTWF0aC5yYW5kb20oKSxcclxuICAgICAgICAgICAgICAgIGZyc3RDb250ZW50OiB0cmFuc2xhdGUoJ3N0YXRpc3RpY3MuZnJzJyksXHJcbiAgICAgICAgICAgICAgICBzZWNDb250ZW50OiB0cmFuc2xhdGUoJ3N0YXRpc3RpY3Muc2VjJyksXHJcbiAgICAgICAgICAgICAgICBocmVmOiAnL3N0YXRpc3RpY3MnXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIGlkOiAncHJlZGljdGlvbicsXHJcbiAgICAgICAgICAgICAgICBrZXk6IE1hdGgucmFuZG9tKCksXHJcbiAgICAgICAgICAgICAgICBmcnN0Q29udGVudDogdHJhbnNsYXRlKCdwcmVkaWN0aW9uLmZycycpLFxyXG4gICAgICAgICAgICAgICAgc2VjQ29udGVudDogdHJhbnNsYXRlKCdwcmVkaWN0aW9uLnNlYycpLFxyXG4gICAgICAgICAgICAgICAgaHJlZjogJy9wcmVkaWN0aW9uJ1xyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICBpZDogJ3Rlc3RpbW9uaWFscycsXHJcbiAgICAgICAgICAgICAgICBrZXk6IE1hdGgucmFuZG9tKCksXHJcbiAgICAgICAgICAgICAgICBmcnN0Q29udGVudDogdHJhbnNsYXRlKCd0ZXN0aW1vbmlhbHMnKSxcclxuICAgICAgICAgICAgICAgIGhyZWY6ICcvdGVzdGltb25pYWxzJ1xyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICBpZDogJ2Fib3V0VXMnLFxyXG4gICAgICAgICAgICAgICAga2V5OiBNYXRoLnJhbmRvbSgpLFxyXG4gICAgICAgICAgICAgICAgZnJzdENvbnRlbnQ6IHRyYW5zbGF0ZSgnYWJvdXRVcycpLFxyXG4gICAgICAgICAgICAgICAgaHJlZjogJy9hYm91dFVzJ1xyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICBpZDogJ2NvbnRhY3RzJyxcclxuICAgICAgICAgICAgICAgIGtleTogTWF0aC5yYW5kb20oKSxcclxuICAgICAgICAgICAgICAgIGZyc3RDb250ZW50OiB0cmFuc2xhdGUoJ2NvbnRhY3RzJyksXHJcbiAgICAgICAgICAgICAgICBocmVmOiBudWxsLFxyXG4gICAgICAgICAgICAgICAgY2xpY2s6ICgpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICBzZXRTaG93RHJvcGRvd24oZmFsc2UpXHJcbiAgICAgICAgICAgICAgICAgICAgc2V0U2hvd0NvbnRhY3RzTW9kYWwodHJ1ZSlcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfSxcclxuICAgICAgICBdLFxyXG4gICAgICAgIGJ1dHRvbnMgPSBidXR0b25zSW5Ib21lUGFnZS5maWx0ZXIoZWwgPT4gZWwuaWQgIT09IFwic3RhdGlzdGljc1wiKVxyXG5cclxuXHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuZHJvcGRvd259PlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmRyb3Bkb3duX2NoZWNrfT5cclxuICAgICAgICAgICAgICAgIDxpbWcgc3JjPXtkcm9wZG93bkxpbmVzLnNyY30gYWx0PVwiZHJvcC1jaGVjay1pY29uXCIgb25DbGljaz17KCkgPT4gc2V0U2hvd0Ryb3Bkb3duKCFzaG93RHJvcGRvd24pfSAvPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAge3Nob3dEcm9wZG93biAmJiAoXHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmRyb3Bkb3duX21lbnV9IHJlZj17bm9kZX0+XHJcbiAgICAgICAgICAgICAgICAgICAgPHVsIGNsYXNzTmFtZT17c3R5bGVzLmRyb3Bkb3duX2xpc3R9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAocm91dGVyLnBhdGhuYW1lID09PSAnLycgPyBidXR0b25zSW5Ib21lUGFnZSA6IGJ1dHRvbnMpLm1hcChlbCA9PiAoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPExpbmtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaHJlZj17ZWwuaHJlZiA/IGVsLmhyZWYgOiBcIlwifVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBrZXk9e2VsLmtleX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsaVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb25DbGljaz17ZWwuY2xpY2sgJiYgZWwuY2xpY2t9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9e3N0eWxlcy5kcm9wZG93bl9saXN0X2l0ZW1zfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7ZWwuZnJzdENvbnRlbnR9IHtlbC5zZWNDb250ZW50fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2xpPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvTGluaz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICkpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICA8L3VsPlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICl9XHJcbiAgICAgICAgICAgIHtzaG93Q29udGFjdHNNb2RhbCAmJlxyXG4gICAgICAgICAgICAgICAgPENvbnRhY3RzTW9kYWxcclxuICAgICAgICAgICAgICAgICAgICBvcGVuZWQ9e3Nob3dDb250YWN0c01vZGFsID8gdHJ1ZSA6IGZhbHNlfVxyXG4gICAgICAgICAgICAgICAgICAgIG9uTW9kYWxDbG9zZT17KCkgPT4gc2V0U2hvd0NvbnRhY3RzTW9kYWwoZmFsc2UpfVxyXG4gICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgKVxyXG59IiwiLy8gY29tcG9uZW50c1xyXG5pbXBvcnQgeyBNb2RhbCB9IGZyb20gJy4uLy4uLy4uL2NvbW1vbi9hdXRoL01vZGFsL01vZGFsJ1xyXG5pbXBvcnQgeyBTb2NpYWxNZWRpYUljb25zIH0gZnJvbSAnLi9Tb2NpYWxNZWRpYUljb25zL1NvY2lhbE1lZGlhSWNvbnMnXHJcbmltcG9ydCB7IEZvcmdvdFBhc3N3b3JkIH0gZnJvbSAnLi9SZXNldFBhc3N3b3JkL0ZvcmdvdFBhc3N3b3JkL0ZvcmdvdFBhc3N3b3JkJ1xyXG5pbXBvcnQgeyBMb2dpbkZvcm0gfSBmcm9tICcuL0xvZ2luRm9ybS9Mb2dpbkZvcm0nXHJcbi8vIHN0eWxlc1xyXG5pbXBvcnQgc3R5bGVzIGZyb20gJy4vTG9naW4ubW9kdWxlLnNjc3MnXHJcbmltcG9ydCB7IHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnXHJcblxyXG5cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBMb2dpbih7IG9uTW9kYWxDbG9zZSB9KSB7XHJcblxyXG4gICAgY29uc3RcclxuICAgICAgICBbc2hvd0xvZ2luTW9kYWwsIHNldFNob3dMb2dpbk1vZGFsXSA9IHVzZVN0YXRlKHRydWUpLFxyXG4gICAgICAgIFtzaG93UmVzZXRQYXNzd29yZE1vZGFsLCBzZXRTaG93UmVzZXRQYXNzd29yZE1vZGFsXSA9IHVzZVN0YXRlKGZhbHNlKVxyXG5cclxuICAgIGNvbnNvbGUubG9nKHNob3dSZXNldFBhc3N3b3JkTW9kYWwpO1xyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8PlxyXG4gICAgICAgICAgICB7c2hvd0xvZ2luTW9kYWwgJiZcclxuICAgICAgICAgICAgICAgIDxNb2RhbCBvbkNsb3NlPXtvbk1vZGFsQ2xvc2V9IGNvbnRlbnRTdHlsZXM9e3N0eWxlcy5tX2NvbnRlbnR9IGNvbnRhaW5lclN0eWxlcz17c3R5bGVzLm1fY29udGFpbmVyfT5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmxvZ2luX2NvbnRhaW5lcn0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxTb2NpYWxNZWRpYUljb25zIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxMb2dpbkZvcm1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uTW9kYWxDbG9zZT17b25Nb2RhbENsb3NlfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaGFuZGxlUmVzZXRQYXNzTW9kYWw9eygpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzZXRTaG93UmVzZXRQYXNzd29yZE1vZGFsKHRydWUpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc2V0U2hvd0xvZ2luTW9kYWwoZmFsc2UpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPC9Nb2RhbD5cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB7c2hvd1Jlc2V0UGFzc3dvcmRNb2RhbCAmJiA8Rm9yZ290UGFzc3dvcmQgb25Nb2RhbENsb3NlPXtvbk1vZGFsQ2xvc2V9IC8+fVxyXG4gICAgICAgIDwvPlxyXG4gICAgKVxyXG59XHJcbiIsIi8vIGhvb2tzIGFuZCBoZWxwZXJzXHJcbmltcG9ydCB1c2VUcmFuc2xhdGlvbiBmcm9tICduZXh0LXRyYW5zbGF0ZS91c2VUcmFuc2xhdGlvbidcclxuaW1wb3J0IHsgdXNlRm9ybSB9IGZyb20gJ3JlYWN0LWhvb2stZm9ybSdcclxuaW1wb3J0ICogYXMgeXVwIGZyb20gJ3l1cCdcclxuaW1wb3J0IHsgeXVwUmVzb2x2ZXIgfSBmcm9tICdAaG9va2Zvcm0vcmVzb2x2ZXJzL3l1cCdcclxuaW1wb3J0IHsgcmVxdWVzdCwgc2V0Q29va2llIH0gZnJvbSAnLi4vLi4vLi4vLi4vLi4vbGliL2VyLmxpYic7XHJcbi8vY29tcG9uZW50c1xyXG5pbXBvcnQgeyBJbnB1dENvbnRhaW5lciB9IGZyb20gJy9jb21wb25lbnRzL2NvbW1vbi9hdXRoL0lucHV0Q29udGFpbmVyL0lucHV0Q29udGFpbmVyJ1xyXG5pbXBvcnQgeyBUaXRsZSB9IGZyb20gJy4uL2NvbW1vbi9UaXRsZSdcclxuaW1wb3J0IHsgUmVzZXRQYXNzd29yZExpbmsgfSBmcm9tICcuLi9jb21tb24vUmVzZXRQYXNzd29yZExpbmsnXHJcbmltcG9ydCB7IFN1Ym1pdCB9IGZyb20gJy4uL2NvbW1vbi9TdWJtaXQnXHJcbmltcG9ydCB7IFRvUmVnaXN0ZXIgfSBmcm9tICcuLi9jb21tb24vVG9SZWdpc3RlcidcclxuLy8gc3R5bGVzIFxyXG5pbXBvcnQgc3R5bGVzIGZyb20gJy4vTG9naW5Gb3JtLm1vZHVsZS5zY3NzJ1xyXG5pbXBvcnQgeyB1c2VEaXNwYXRjaCB9IGZyb20gJ3JlYWN0LXJlZHV4J1xyXG5pbXBvcnQgeyBsb2dpbiB9IGZyb20gJy4uLy4uLy4uLy4uLy4uL3JlZHV4L2ZlYXR1cmVzL3VzZXJTbGljZSdcclxuaW1wb3J0IHsgR0VUX0FDQ09VTlRfSU5GTywgTE9HSU4gfSBmcm9tICcuLi8uLi8uLi8uLi8uLi9saWIvcmVxdWVzdC1kZXN0aW5hdGlvbnMnO1xyXG5cclxuaW1wb3J0IHsgVG9hc3RDb250YWluZXIsIHRvYXN0IH0gZnJvbSAncmVhY3QtdG9hc3RpZnknO1xyXG5pbXBvcnQgeyB1c2VSb3V0ZXIgfSBmcm9tICduZXh0L2Rpc3QvY2xpZW50L3JvdXRlcic7XHJcblxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIExvZ2luRm9ybSh7IG9uTW9kYWxDbG9zZSwgaGFuZGxlUmVzZXRQYXNzTW9kYWwgfSkge1xyXG4gICAgY29uc3Qgcm91dGVyID0gdXNlUm91dGVyKCk7XHJcblxyXG4gICAgY29uc3RcclxuICAgICAgICBkaXNwYXRjaCA9IHVzZURpc3BhdGNoKCksXHJcbiAgICAgICAgLy8gdHJhbnNsYXRpb24gY29uc2ZpZ3NcclxuICAgICAgICB7IHQgfSA9IHVzZVRyYW5zbGF0aW9uKCdjb21tb24nKSxcclxuICAgICAgICB0cmFuc2xhdGlvblBhdGggPSAncmVnaXN0cmF0aW9uLmlucHV0UGxhY2VIb2xkZXJzLicsXHJcbiAgICAgICAgdHJhbnNsYXRlID0ga2V5ID0+IHQoYCR7dHJhbnNsYXRpb25QYXRofSR7a2V5fWApLFxyXG4gICAgICAgIGhhbmRsZV90b19yZWdpc3Rlcl9jbGljayA9ICgpID0+IHtcclxuICAgICAgICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignYm9keScpLnN0eWxlLm92ZXJmbG93ID0gJ3Zpc2libGUnXHJcbiAgICAgICAgICAgIG9uTW9kYWxDbG9zZSgpXHJcbiAgICAgICAgfSxcclxuICAgICAgICAvLyB5dXAgY29uZmlnc1xyXG4gICAgICAgIHNjaGVtYSA9IHl1cC5vYmplY3QoKS5zaGFwZSh7XHJcbiAgICAgICAgICAgIGVtYWlsOiB5dXBcclxuICAgICAgICAgICAgICAgIC5zdHJpbmcoKVxyXG4gICAgICAgICAgICAgICAgLnJlcXVpcmVkKClcclxuICAgICAgICAgICAgICAgIC5tYXRjaGVzKC9eKChbXjw+KClcXFtcXF1cXFxcLiw7Olxcc0BcIl0rKFxcLltePD4oKVxcW1xcXVxcXFwuLDs6XFxzQFwiXSspKil8KFwiLitcIikpQCgoXFxbWzAtOV17MSwzfVxcLlswLTldezEsM31cXC5bMC05XXsxLDN9XFwuWzAtOV17MSwzfV0pfCgoW2EtekEtWlxcLTAtOV0rXFwuKStbYS16QS1aXXsyLH0pKSQvKSxcclxuICAgICAgICAgICAgcGFzc3dvcmQ6IHl1cFxyXG4gICAgICAgICAgICAgICAgLnN0cmluZygpXHJcbiAgICAgICAgICAgICAgICAucmVxdWlyZWQoKVxyXG4gICAgICAgICAgICAgICAgLm1pbig2KVxyXG4gICAgICAgIH0pLFxyXG4gICAgICAgIC8vIGZvcm0gY29uZmlnc1xyXG4gICAgICAgIHsgcmVnaXN0ZXIsIGhhbmRsZVN1Ym1pdCwgZm9ybVN0YXRlOiB7IGVycm9ycyB9IH0gPSB1c2VGb3JtKHtcclxuICAgICAgICAgICAgbW9kZTogJ29uQ2hhbmdlJyxcclxuICAgICAgICAgICAgcmVzb2x2ZXI6IHl1cFJlc29sdmVyKHNjaGVtYSlcclxuICAgICAgICB9KSxcclxuICAgICAgICAvLyBvbiBmb3JtIHN1Ym1pdFxyXG4gICAgICAgIHN1Ym1pdCA9IGFzeW5jIChkYXRhKSA9PiB7XHJcbiAgICAgICAgICAgIHRyeSB7XHJcbiAgICAgICAgICAgICAgICBjb25zdCB7IHRva2VuIH0gPSAoYXdhaXQgcmVxdWVzdCggTE9HSU4sIGRhdGEgKSkuZGF0YT8uZGF0YTtcclxuICAgICAgICAgICAgICAgIHNldENvb2tpZSggYGFjY2Vzcy10b2tlbmAsIHRva2VuLCAxICk7XHJcbiAgICAgICAgICAgICAgICBjb25zdCB1c2VyID0gKCBhd2FpdCByZXF1ZXN0KCBHRVRfQUNDT1VOVF9JTkZPLCB7fSwge2F1dGg6IHRydWV9ICkgKS5kYXRhPy5kYXRhO1xyXG4gICAgICAgICAgICAgICAgZGlzcGF0Y2gobG9naW4odXNlcikpO1xyXG4gICAgICAgICAgICAgICAgcm91dGVyLnB1c2goYC9gKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBjYXRjaCggZXJyb3IgKSB7XHJcbiAgICAgICAgICAgICAgICB0b2FzdCggZXJyb3IucmVzcG9uc2UuZGF0YT8ubWVzc2FnZSB8fCBgdW5rbm93biBlcnJvcmAsIHtcclxuICAgICAgICAgICAgICAgICAgICB0eXBlOiBgZXJyb3JgXHJcbiAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBoYW5kbGVfdG9fcmVnaXN0ZXJfY2xpY2soKVxyXG4gICAgICAgIH07XHJcblxyXG4gICAgICAgIFxyXG5cclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5jb250YWluZXJ9PlxyXG4gICAgICAgICAgICA8VGl0bGVcclxuICAgICAgICAgICAgICAgIHN0eWxlcz17c3R5bGVzLnRpdGxlfVxyXG4gICAgICAgICAgICAgICAgY29udGVudD17dCgnaGVhZGVyLmxvZ2luTW9kYWwudGl0bGUnKX1cclxuICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgPGZvcm0gb25TdWJtaXQ9e2hhbmRsZVN1Ym1pdChzdWJtaXQpfT5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuaW5wdXRzfT5cclxuICAgICAgICAgICAgICAgICAgICA8SW5wdXRDb250YWluZXJcclxuICAgICAgICAgICAgICAgICAgICAgICAgaWQ9J25hbWUnXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU9J3RleHQnXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHBsYWNlaG9sZGVyPXt0cmFuc2xhdGUoJ2VtYWlsJyl9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGVycm9ycz17KCEhZXJyb3JzLmVtYWlsKX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgb3RoZXI9e3JlZ2lzdGVyKCdlbWFpbCcpfVxyXG4gICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgPElucHV0Q29udGFpbmVyXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlkPSdwYXNzd29yZCdcclxuICAgICAgICAgICAgICAgICAgICAgICAgdHlwZT0ncGFzc3dvcmQnXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHBsYWNlaG9sZGVyPXt0cmFuc2xhdGUoJ3Bhc3N3b3JkJyl9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGVycm9ycz17ISFlcnJvcnMucGFzc3dvcmR9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG90aGVyPXtyZWdpc3RlcigncGFzc3dvcmQnKX1cclxuICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8UmVzZXRQYXNzd29yZExpbmtcclxuICAgICAgICAgICAgICAgICAgICBjbGljaz17aGFuZGxlUmVzZXRQYXNzTW9kYWx9XHJcbiAgICAgICAgICAgICAgICAgICAgc3R5bGVzPXtzdHlsZXMucmVzZXRfcGFzc3dvcmR9XHJcbiAgICAgICAgICAgICAgICAgICAgY29udGVudD17dCgnaGVhZGVyLmxvZ2luTW9kYWwucmVzUGFzc3dvcmQnKX1cclxuICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICA8U3VibWl0XHJcbiAgICAgICAgICAgICAgICAgICAgc3R5bGVzPXtzdHlsZXMuc3VibWl0fVxyXG4gICAgICAgICAgICAgICAgICAgIGNvbnRlbnQ9e3QoJ2hlYWRlci5sb2dpbk1vZGFsLnN1Ym1pdCcpfVxyXG4gICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgPC9mb3JtPlxyXG4gICAgICAgICAgICA8VG9SZWdpc3RlclxyXG4gICAgICAgICAgICAgICAgaHJlZj0nL3JlZ2lzdHJhdGlvbidcclxuICAgICAgICAgICAgICAgIGNsaWNrPXtoYW5kbGVfdG9fcmVnaXN0ZXJfY2xpY2t9XHJcbiAgICAgICAgICAgICAgICBjb250YWluZXJfc3R5bGVzPXtzdHlsZXMudG9fcmVnaXN0ZXJfY29udGFpbmVyfVxyXG4gICAgICAgICAgICAgICAgY29udGVudF9zdHlsZXM9e3N0eWxlcy50b19yZWdpc3Rlcl9jb250ZW50fVxyXG4gICAgICAgICAgICAgICAgb3I9e3QoJ2hlYWRlci5sb2dpbk1vZGFsLm9yJyl9XHJcbiAgICAgICAgICAgICAgICByZWdpc3Rlcl90ZXh0X3N0eWxlcz17c3R5bGVzLnRvX3JlZ2lzdGVyX3RleHR9XHJcbiAgICAgICAgICAgICAgICBjb250ZW50PXt0KCdoZWFkZXIubG9naW5Nb2RhbC5yZWdpc3RlcicpfVxyXG4gICAgICAgICAgICAvPlxyXG5cclxuXHJcbiAgICAgICAgICAgIDxUb2FzdENvbnRhaW5lciAvPlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgKVxyXG59XHJcbiIsIi8vIGhvb2tzIGFuZCBoZWxwZXJzXHJcbmltcG9ydCB1c2VUcmFuc2xhdGlvbiBmcm9tICduZXh0LXRyYW5zbGF0ZS91c2VUcmFuc2xhdGlvbidcclxuaW1wb3J0IHsgdXNlRm9ybSB9IGZyb20gJ3JlYWN0LWhvb2stZm9ybSdcclxuaW1wb3J0IHsgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCdcclxuaW1wb3J0ICogYXMgeXVwIGZyb20gJ3l1cCdcclxuaW1wb3J0IHsgeXVwUmVzb2x2ZXIgfSBmcm9tICdAaG9va2Zvcm0vcmVzb2x2ZXJzL3l1cCdcclxuLy9jb21wb25lbnRzXHJcbmltcG9ydCB7IFRpdGxlIH0gZnJvbSAnLi4vLi4vY29tbW9uL1RpdGxlJ1xyXG5pbXBvcnQgeyBJbnB1dENvbnRhaW5lciB9IGZyb20gJy9jb21wb25lbnRzL2NvbW1vbi9hdXRoL0lucHV0Q29udGFpbmVyL0lucHV0Q29udGFpbmVyJ1xyXG5pbXBvcnQgeyBTdWJtaXQgfSBmcm9tICcuLi8uLi9jb21tb24vU3VibWl0J1xyXG5pbXBvcnQgeyBNb2RhbCB9IGZyb20gJy4uLy4uLy4uLy4uLy4uL2NvbW1vbi9hdXRoL01vZGFsL01vZGFsJ1xyXG5pbXBvcnQgeyBHZXRFbWFpbENvZGUgfSBmcm9tICcuLi9HZXRFbWFpbENvZGUvR2V0RW1haWxDb2RlJ1xyXG4vLyBzdHlsZXNcclxuaW1wb3J0IHN0eWxlcyBmcm9tICcuL0ZvcmdvdFBhc3N3b3JkLm1vZHVsZS5zY3NzJ1xyXG5cclxuaW1wb3J0IHsgcmVxdWVzdCwgc2V0Q29va2llIH0gZnJvbSAnL2xpYi9lci5saWInO1xyXG5cclxuaW1wb3J0IHsgVG9hc3RDb250YWluZXIsIHRvYXN0IH0gZnJvbSAncmVhY3QtdG9hc3RpZnknO1xyXG5pbXBvcnQgeyBTVEFSVF9SRVNFVF9QQVNTV09SRCB9IGZyb20gJy4uLy4uLy4uLy4uLy4uLy4uL2xpYi9yZXF1ZXN0LWRlc3RpbmF0aW9ucydcclxuXHJcblxyXG5leHBvcnQgZnVuY3Rpb24gRm9yZ290UGFzc3dvcmQoeyBvbk1vZGFsQ2xvc2UgfSkge1xyXG5cclxuICAgIGNvbnN0XHJcbiAgICAgICAgLy8gbW9kYWwgc3RhdGVzIHBhc3MgPT4gcGFzc3dvcmQgTWwgPT4gTW9kYWxcclxuICAgICAgICBbc2hvd0ZvcmdvdFBhc3NNbCwgc2V0U2hvd0ZvcmdvdFBhc3NNbF0gPSB1c2VTdGF0ZSh0cnVlKSxcclxuICAgICAgICBbc2hvd0dldEVtYWlsQ29kZU1sLCBzZXRTaG93RW1haWxDb2RlTWxdID0gdXNlU3RhdGUoZmFsc2UpLFxyXG4gICAgICAgIC8vIHRyYW5zbGF0aW9uIGNvbnNmaWdzXHJcbiAgICAgICAgeyB0IH0gPSB1c2VUcmFuc2xhdGlvbignY29tbW9uJyksXHJcbiAgICAgICAgdHJhbnNsYXRpb25QYXRoID0gJ2hlYWRlci5yZXNldFBhc3N3b3JkTW9kYWwuJyxcclxuICAgICAgICB0cmFuc2xhdGUgPSBrZXkgPT4gdChgJHt0cmFuc2xhdGlvblBhdGh9JHtrZXl9YCksXHJcbiAgICAgICAgLy8geXVwIGNvbmZpZ3NcclxuICAgICAgICBzY2hlbWEgPSB5dXAub2JqZWN0KCkuc2hhcGUoe1xyXG4gICAgICAgICAgICBlbWFpbDogeXVwXHJcbiAgICAgICAgICAgICAgICAuc3RyaW5nKClcclxuICAgICAgICAgICAgICAgIC5yZXF1aXJlZCgpXHJcbiAgICAgICAgICAgICAgICAubWF0Y2hlcygvXigoW148PigpXFxbXFxdXFxcXC4sOzpcXHNAXCJdKyhcXC5bXjw+KClcXFtcXF1cXFxcLiw7Olxcc0BcIl0rKSopfChcIi4rXCIpKUAoKFxcW1swLTldezEsM31cXC5bMC05XXsxLDN9XFwuWzAtOV17MSwzfVxcLlswLTldezEsM31dKXwoKFthLXpBLVpcXC0wLTldK1xcLikrW2EtekEtWl17Mix9KSkkLyksXHJcbiAgICAgICAgfSksXHJcbiAgICAgICAgLy8gZm9ybSBjb25maWdzXHJcbiAgICAgICAgeyByZWdpc3RlciwgaGFuZGxlU3VibWl0LCBmb3JtU3RhdGU6IHsgZXJyb3JzIH0gfSA9IHVzZUZvcm0oe1xyXG4gICAgICAgICAgICBtb2RlOiAnb25DaGFuZ2UnLFxyXG4gICAgICAgICAgICByZXNvbHZlcjogeXVwUmVzb2x2ZXIoc2NoZW1hKVxyXG4gICAgICAgIH0pLFxyXG4gICAgICAgIC8vIG9uIGZvcm0gc3VibWl0XHJcbiAgICAgICAgc3VibWl0ID0gYXN5bmMgKGRhdGEpID0+IHtcclxuICAgICAgICAgICAgdHJ5IHtcclxuICAgICAgICAgICAgICAgIGNvbnN0IHsgZGF0YTogcmVzcG9uc2UgfSA9IGF3YWl0IHJlcXVlc3QoIFNUQVJUX1JFU0VUX1BBU1NXT1JEKCBkYXRhLmVtYWlsICkgKTtcclxuICAgICAgICAgICAgICAgIGNvbnN0IHRva2VuID0gcmVzcG9uc2UuZGF0YS50b2tlbjtcclxuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKCB0b2tlbiApO1xyXG4gICAgICAgICAgICAgICAgc2V0Q29va2llKGByZXNldC10b2tlbmAsIHRva2VuLCAoMS8yNCkqMSk7XHJcbiAgICAgICAgICAgICAgICBzZXRTaG93Rm9yZ290UGFzc01sKGZhbHNlKVxyXG4gICAgICAgICAgICAgICAgc2V0U2hvd0VtYWlsQ29kZU1sKHRydWUpXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgY2F0Y2ggKCBlcnIgKSB7XHJcbiAgICAgICAgICAgICAgICB0b2FzdCggZXJyLnJlc3BvbnNlLmRhdGE/Lm1lc3NhZ2UgfHwgYHVua25vd24gZXJyb3JgLCB7XHJcbiAgICAgICAgICAgICAgICAgICAgdHlwZTogYGVycm9yYFxyXG4gICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcblxyXG5cclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPD5cclxuICAgICAgICAgICAge3Nob3dGb3Jnb3RQYXNzTWwgJiZcclxuICAgICAgICAgICAgICAgIDxNb2RhbCBvbkNsb3NlPXtvbk1vZGFsQ2xvc2V9IGNvbnRlbnRTdHlsZXM9e3N0eWxlcy5tX2NvbnRlbnR9IGNvbnRhaW5lclN0eWxlcz17c3R5bGVzLm1fY29udGFpbmVyfT5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmNvbnRhaW5lcn0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxUaXRsZVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc3R5bGVzPXtzdHlsZXMudGl0bGV9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb250ZW50PXt0cmFuc2xhdGUoJ3RpdGxlJyl9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxmb3JtIG9uU3VibWl0PXtoYW5kbGVTdWJtaXQoc3VibWl0KX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmlucHV0c30+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPElucHV0Q29udGFpbmVyXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlkPSduYW1lJ1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0eXBlPSd0ZXh0J1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwbGFjZWhvbGRlcj17dCgncmVnaXN0cmF0aW9uLmlucHV0UGxhY2VIb2xkZXJzLmVtYWlsJyl9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGVycm9ycz17KCEhZXJyb3JzLmVtYWlsKX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb3RoZXI9e3JlZ2lzdGVyKCdlbWFpbCcpfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxTdWJtaXRcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdHlsZXM9e3N0eWxlcy5zdWJtaXR9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29udGVudD17dHJhbnNsYXRlKCdzZW5kJyl9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Zvcm0+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgPFRvYXN0Q29udGFpbmVyIC8+XHJcbiAgICAgICAgICAgICAgICA8L01vZGFsPlxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIHNob3dHZXRFbWFpbENvZGVNbCAmJiA8R2V0RW1haWxDb2RlIG9uTW9kYWxDbG9zZT17b25Nb2RhbENsb3NlfSAvPlxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgPC8+XHJcbiAgICApXHJcbn1cclxuIiwiLy8gaG9va3MgYW5kIGhlbHBlcnNcclxuaW1wb3J0IHVzZVRyYW5zbGF0aW9uIGZyb20gJ25leHQtdHJhbnNsYXRlL3VzZVRyYW5zbGF0aW9uJ1xyXG5pbXBvcnQgeyB1c2VGb3JtIH0gZnJvbSAncmVhY3QtaG9vay1mb3JtJ1xyXG5pbXBvcnQgeyB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0J1xyXG5pbXBvcnQgKiBhcyB5dXAgZnJvbSAneXVwJ1xyXG5pbXBvcnQgeyB5dXBSZXNvbHZlciB9IGZyb20gJ0Bob29rZm9ybS9yZXNvbHZlcnMveXVwJ1xyXG5pbXBvcnQgeyBpbnB1dHMgfSBmcm9tICcuL2lucHV0X2NvbmZpZ3MnXHJcbi8vY29tcG9uZW50c1xyXG5pbXBvcnQgeyBUaXRsZSB9IGZyb20gJy4uLy4uL2NvbW1vbi9UaXRsZSdcclxuaW1wb3J0IHsgU3VibWl0IH0gZnJvbSAnLi4vLi4vY29tbW9uL1N1Ym1pdCdcclxuaW1wb3J0IHsgTW9kYWwgfSBmcm9tICcuLi8uLi8uLi8uLi8uLi9jb21tb24vYXV0aC9Nb2RhbC9Nb2RhbCdcclxuaW1wb3J0IHsgTmV3UGFzc3dvcmQgfSBmcm9tICcuLi9OZXdQYXNzd29yZC9OZXdQYXNzd29yZCdcclxuLy8gc3R5bGVzXHJcbmltcG9ydCBzdHlsZXMgZnJvbSAnLi9HZXRFbWFpbENvZGUubW9kdWxlLnNjc3MnXHJcblxyXG5pbXBvcnQgeyByZXF1ZXN0LCBnZXRDb29raWUgfSBmcm9tICcvbGliL2VyLmxpYic7XHJcblxyXG5pbXBvcnQgeyBUb2FzdENvbnRhaW5lciwgdG9hc3QgfSBmcm9tICdyZWFjdC10b2FzdGlmeSc7XHJcbmltcG9ydCB7IFNUQVJUX1JFU0VUX1BBU1NXT1JELCBWRVJJRllfUEFTU1dPUkRfUkVTRVQgfSBmcm9tICcuLi8uLi8uLi8uLi8uLi8uLi9saWIvcmVxdWVzdC1kZXN0aW5hdGlvbnMnXHJcblxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIEdldEVtYWlsQ29kZSh7IG9uTW9kYWxDbG9zZSB9KSB7XHJcblxyXG4gICAgY29uc3RcclxuICAgICAgICAvLyBtb2RhbCBzdGF0ZXMgcGFzcyA9PiBwYXNzd29yZCBNbCA9PiBNb2RhbFxyXG4gICAgICAgIFtzaG93R2V0RW1haWxDb2RlTWwsIHNldFNob3dFbWFpbENvZGVNbF0gPSB1c2VTdGF0ZSh0cnVlKSxcclxuICAgICAgICBbc2hvd05ld1Bhc3N3b3JkTWwsIHNldFNob3dOZXdQYXNzd29yZE1sXSA9IHVzZVN0YXRlKGZhbHNlKSxcclxuICAgICAgICAvLyB0cmFuc2xhdGlvbiBjb25zZmlnc1xyXG4gICAgICAgIHsgdCB9ID0gdXNlVHJhbnNsYXRpb24oJ2NvbW1vbicpLFxyXG4gICAgICAgIHRyYW5zbGF0aW9uUGF0aCA9ICdoZWFkZXIuZ2V0RW1haWxDb2RlTW9kYWwuJyxcclxuICAgICAgICB0cmFuc2xhdGUgPSBrZXkgPT4gdChgJHt0cmFuc2xhdGlvblBhdGh9JHtrZXl9YCksXHJcbiAgICAgICAgLy8geXVwIGNvbmZpZ3NcclxuICAgICAgICBzY2hlbWEgPSB5dXAub2JqZWN0KCkuc2hhcGUoe1xyXG4gICAgICAgICAgICBudW0xOiB5dXAuc3RyaW5nKCkucmVxdWlyZWQoKS5tYXRjaGVzKC9bMC05XS9tZyksXHJcbiAgICAgICAgICAgIG51bTI6IHl1cC5zdHJpbmcoKS5yZXF1aXJlZCgpLm1hdGNoZXMoL1swLTldL21nKSxcclxuICAgICAgICAgICAgbnVtMzogeXVwLnN0cmluZygpLnJlcXVpcmVkKCkubWF0Y2hlcygvWzAtOV0vbWcpLFxyXG4gICAgICAgICAgICBudW00OiB5dXAuc3RyaW5nKCkucmVxdWlyZWQoKS5tYXRjaGVzKC9bMC05XS9tZyksXHJcbiAgICAgICAgICAgIG51bTU6IHl1cC5zdHJpbmcoKS5yZXF1aXJlZCgpLm1hdGNoZXMoL1swLTldL21nKSxcclxuICAgICAgICAgICAgbnVtNjogeXVwLnN0cmluZygpLnJlcXVpcmVkKCkubWF0Y2hlcygvWzAtOV0vbWcpLFxyXG4gICAgICAgIH0pLFxyXG4gICAgICAgIC8vIGZvcm0gY29uZmlnc1xyXG4gICAgICAgIHsgcmVnaXN0ZXIsIGhhbmRsZVN1Ym1pdCwgZm9ybVN0YXRlOiB7IGVycm9ycyB9IH0gPSB1c2VGb3JtKHtcclxuICAgICAgICAgICAgbW9kZTogJ29uQ2hhbmdlJyxcclxuICAgICAgICAgICAgcmVzb2x2ZXI6IHl1cFJlc29sdmVyKHNjaGVtYSlcclxuICAgICAgICB9KSxcclxuICAgICAgICAvLyBpbnB1dCBqdW1wcyBcclxuICAgICAgICBqdW1wID0gKHgpID0+IHtcclxuICAgICAgICAgICAgaWYgKHgudmFsdWUubGVuZ3RoKSB7XHJcbiAgICAgICAgICAgICAgICB4ID0geC5uZXh0U2libGluZztcclxuICAgICAgICAgICAgICAgIGlmICh4ICYmIC90ZXh0Ly50ZXN0KHgudHlwZSkpIHtcclxuICAgICAgICAgICAgICAgICAgICB4LmZvY3VzKCk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9LFxyXG4gICAgICAgIGp1bXBCYWNrID0gKHgpID0+IHtcclxuICAgICAgICAgICAgaWYgKHgudGFyZ2V0LnZhbHVlLmxlbmd0aCA9PSAwKSB7XHJcbiAgICAgICAgICAgICAgICBpZiAoeC5jb2RlID09PSAnQmFja3NwYWNlJykge1xyXG4gICAgICAgICAgICAgICAgICAgIGlmIChkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLm1vdmU6Zm9jdXNcIikucHJldmlvdXNTaWJsaW5nKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIubW92ZTpmb2N1c1wiKS5wcmV2aW91c1NpYmxpbmcuZm9jdXMoKTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9LFxyXG4gICAgICAgIC8vIG9uIGZvcm0gc3VibWl0XHJcbiAgICAgICAgc3VibWl0ID0gYXN5bmMgKGRhdGEpID0+IHtcclxuICAgICAgICAgICAgdHJ5IHtcclxuICAgICAgICAgICAgICAgIGRhdGEgPSBPYmplY3QudmFsdWVzKGRhdGEpLnJlZHVjZSgoYWMsIGVsKSA9PiBhYyArIGVsKVxyXG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coZGF0YSk7XHJcbiAgICAgICAgICAgICAgICBhd2FpdCByZXF1ZXN0KCBWRVJJRllfUEFTU1dPUkRfUkVTRVQsIHsgY29kZTogZGF0YSB9LCB7XHJcbiAgICAgICAgICAgICAgICAgICAgaGVhZGVyczoge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAnQXV0aG9yaXphdGlvbic6IGBCZWFyZXIgJHtnZXRDb29raWUoYHJlc2V0LXRva2VuYCl9YFxyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgICAgICBzZXRTaG93RW1haWxDb2RlTWwoZmFsc2UpXHJcbiAgICAgICAgICAgICAgICBzZXRTaG93TmV3UGFzc3dvcmRNbCh0cnVlKVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGNhdGNoKCBlcnIgKSB7XHJcbiAgICAgICAgICAgICAgICB0b2FzdCggZXJyLnJlc3BvbnNlLmRhdGE/Lm1lc3NhZ2UgfHwgYHVua25vd24gZXJyb3JgLCB7XHJcbiAgICAgICAgICAgICAgICAgICAgdHlwZTogYGVycm9yYFxyXG4gICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcblxyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8PlxyXG4gICAgICAgICAgICB7c2hvd0dldEVtYWlsQ29kZU1sICYmXHJcbiAgICAgICAgICAgICAgICA8IE1vZGFsIG9uQ2xvc2U9e29uTW9kYWxDbG9zZX0gY29udGVudFN0eWxlcz17c3R5bGVzLm1fY29udGVudH0gY29udGFpbmVyU3R5bGVzPXtzdHlsZXMubV9jb250YWluZXJ9PlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuY29udGFpbmVyfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPFRpdGxlXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdHlsZXM9e3N0eWxlcy50aXRsZX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnRlbnQ9e3RyYW5zbGF0ZSgndGl0bGUnKX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGZvcm0gb25TdWJtaXQ9e2hhbmRsZVN1Ym1pdChzdWJtaXQpfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxUaXRsZVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN0eWxlcz17c3R5bGVzLmRlc2NyaXB0aW9ufVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnRlbnQ9e3RyYW5zbGF0ZSgnZGVzY3JpcHRpb24nKX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmlucHV0c30+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpbnB1dHMubWFwKChlbCwgaSkgPT4gKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGlucHV0XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWQ9e2VsLmlkfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGAke2VsLmNsYXNzfSBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgJHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGVycm9ycy5udW0xIHx8XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBlcnJvcnMubnVtMiB8fFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZXJyb3JzLm51bTMgfHxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGVycm9ycy5udW00IHx8XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBlcnJvcnMubnVtNSB8fFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZXJyb3JzLm51bTYgPyBzdHlsZXMuZXJyb3JfaW5wdXQgOiBzdHlsZXMuc3VjY2Vzc19pbnB1dFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9YC50cmltKCl9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdHlwZT17ZWwudHlwZX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBrZXk9e2VsLmtleX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBtYXhMZW5ndGg9e2VsLm1heExlbmd0aH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbklucHV0PXtlID0+IGp1bXAoZS50YXJnZXQpfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uS2V5RG93bj17ZSA9PiBqdW1wQmFjayhlKX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7Li4ucmVnaXN0ZXIoJ251bScgKyAoaSArIDEpKX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICkpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8U3VibWl0XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3R5bGVzPXtzdHlsZXMuc3VibWl0fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnRlbnQ9e3RyYW5zbGF0ZSgnc2VuZCcpfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9mb3JtPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIDxUb2FzdENvbnRhaW5lciAvPlxyXG4gICAgICAgICAgICAgICAgPC9Nb2RhbCA+XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgc2hvd05ld1Bhc3N3b3JkTWwgJiYgPE5ld1Bhc3N3b3JkIG9uTW9kYWxDbG9zZT17b25Nb2RhbENsb3NlfSAvPlxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgPC8+XHJcblxyXG4gICAgKVxyXG59XHJcbiIsImV4cG9ydCBjb25zdCAvLyBpbnB1dCBjb25maWdzXHJcbiAgICBpbnB1dHMgPSBbXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBpZDogJ2ZpcnN0JyxcclxuICAgICAgICAgICAgdHlwZTogJ3RleHQnLFxyXG4gICAgICAgICAgICBjbGFzczogJ21vdmUnLFxyXG4gICAgICAgICAgICBrZXk6IE1hdGgucmFuZG9tKCksXHJcbiAgICAgICAgICAgIG1heExlbmd0aDogXCIxXCIsXHJcbiAgICAgICAgfSxcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIGlkOiAnc2Vjb25kJyxcclxuICAgICAgICAgICAgdHlwZTogJ3RleHQnLFxyXG4gICAgICAgICAgICBjbGFzczogJ21vdmUnLFxyXG4gICAgICAgICAgICBrZXk6IE1hdGgucmFuZG9tKCksXHJcbiAgICAgICAgICAgIG1heExlbmd0aDogJzEnLFxyXG4gICAgICAgIH0sXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBpZDogJ3RoaXJkJyxcclxuICAgICAgICAgICAgdHlwZTogJ3RleHQnLFxyXG4gICAgICAgICAgICBjbGFzczogJ21vdmUnLFxyXG4gICAgICAgICAgICBrZXk6IE1hdGgucmFuZG9tKCksXHJcbiAgICAgICAgICAgIG1heExlbmd0aDogJzEnLFxyXG4gICAgICAgIH0sXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBpZDogJ2ZvdXJ0aCcsXHJcbiAgICAgICAgICAgIHR5cGU6ICd0ZXh0JyxcclxuICAgICAgICAgICAgY2xhc3M6ICdtb3ZlJyxcclxuICAgICAgICAgICAga2V5OiBNYXRoLnJhbmRvbSgpLFxyXG4gICAgICAgICAgICBtYXhMZW5ndGg6ICcxJyxcclxuICAgICAgICB9LFxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgaWQ6ICdmaWZ0aCcsXHJcbiAgICAgICAgICAgIHR5cGU6ICd0ZXh0JyxcclxuICAgICAgICAgICAgY2xhc3M6ICdtb3ZlJyxcclxuICAgICAgICAgICAga2V5OiBNYXRoLnJhbmRvbSgpLFxyXG4gICAgICAgICAgICBtYXhMZW5ndGg6ICcxJyxcclxuICAgICAgICB9LFxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgaWQ6ICdzaXh0aCcsXHJcbiAgICAgICAgICAgIHR5cGU6ICd0ZXh0JyxcclxuICAgICAgICAgICAgY2xhc3M6ICdtb3ZlJyxcclxuICAgICAgICAgICAga2V5OiBNYXRoLnJhbmRvbSgpLFxyXG4gICAgICAgICAgICBtYXhMZW5ndGg6ICcxJyxcclxuICAgICAgICB9LFxyXG4gICAgXSIsIi8vIGhvb2tzIGFuZCBoZWxwZXJzXHJcbmltcG9ydCB1c2VUcmFuc2xhdGlvbiBmcm9tICduZXh0LXRyYW5zbGF0ZS91c2VUcmFuc2xhdGlvbidcclxuaW1wb3J0IHsgdXNlRm9ybSB9IGZyb20gJ3JlYWN0LWhvb2stZm9ybSdcclxuaW1wb3J0IHsgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCdcclxuaW1wb3J0ICogYXMgeXVwIGZyb20gJ3l1cCdcclxuaW1wb3J0IHsgeXVwUmVzb2x2ZXIgfSBmcm9tICdAaG9va2Zvcm0vcmVzb2x2ZXJzL3l1cCdcclxuLy9jb21wb25lbnRzXHJcbmltcG9ydCB7IFRpdGxlIH0gZnJvbSAnLi4vLi4vY29tbW9uL1RpdGxlJ1xyXG5pbXBvcnQgeyBJbnB1dENvbnRhaW5lciB9IGZyb20gJy9jb21wb25lbnRzL2NvbW1vbi9hdXRoL0lucHV0Q29udGFpbmVyL0lucHV0Q29udGFpbmVyJ1xyXG5pbXBvcnQgeyBTdWJtaXQgfSBmcm9tICcuLi8uLi9jb21tb24vU3VibWl0J1xyXG5pbXBvcnQgeyBNb2RhbCB9IGZyb20gJy4uLy4uLy4uLy4uLy4uL2NvbW1vbi9hdXRoL01vZGFsL01vZGFsJ1xyXG5pbXBvcnQgeyBUb2FzdENvbnRhaW5lciwgdG9hc3QgfSBmcm9tICdyZWFjdC10b2FzdGlmeSc7XHJcblxyXG4vLyBzdHlsZXNcclxuaW1wb3J0IHN0eWxlcyBmcm9tICcuL05ld1Bhc3N3b3JkLm1vZHVsZS5zY3NzJ1xyXG5pbXBvcnQgeyBTdWNjZXNzIH0gZnJvbSAnLi4vU3VjY2Vzcy9TdWNjZXNzJ1xyXG5cclxuaW1wb3J0IHsgcmVxdWVzdCwgZ2V0Q29va2llIH0gZnJvbSAnL2xpYi9lci5saWInO1xyXG5pbXBvcnQgeyBTRVRfTkVXX1BBU1NXT1JEIH0gZnJvbSAnLi4vLi4vLi4vLi4vLi4vLi4vbGliL3JlcXVlc3QtZGVzdGluYXRpb25zJ1xyXG5cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBOZXdQYXNzd29yZCh7IG9uTW9kYWxDbG9zZSB9KSB7XHJcbiAgICBjb25zdFxyXG4gICAgICAgIC8vIG1vZGFsIHN0YXRlcyBwYXNzID0+IHBhc3N3b3JkIE1sID0+IE1vZGFsXHJcbiAgICAgICAgW3Nob3dOZXdQYXNzTWwsIHNldFNob3dOZXdQYXNzTWxdID0gdXNlU3RhdGUodHJ1ZSksXHJcbiAgICAgICAgW3Nob3dTdWNjZXNzTWwsIHNldFNob3dTdWNjZXNzTWxdID0gdXNlU3RhdGUoZmFsc2UpLFxyXG4gICAgICAgIC8vIHRyYW5zbGF0aW9uIGNvbnNmaWdzXHJcbiAgICAgICAgeyB0IH0gPSB1c2VUcmFuc2xhdGlvbignY29tbW9uJyksXHJcbiAgICAgICAgdHJhbnNsYXRpb25QYXRoID0gJ2hlYWRlci5uZXdQYXNzd29yZE1vZGFsLicsXHJcbiAgICAgICAgdHJhbnNsYXRlID0ga2V5ID0+IHQoYCR7dHJhbnNsYXRpb25QYXRofSR7a2V5fWApLFxyXG4gICAgICAgIC8vIHl1cCBjb25maWdzXHJcbiAgICAgICAgc2NoZW1hID0geXVwLm9iamVjdCgpLnNoYXBlKHtcclxuICAgICAgICAgICAgcGFzc3dvcmQ6IHl1cFxyXG4gICAgICAgICAgICAgICAgLnN0cmluZygpXHJcbiAgICAgICAgICAgICAgICAucmVxdWlyZWQoKVxyXG4gICAgICAgICAgICAgICAgLm1pbig2KVxyXG4gICAgICAgIH0pLFxyXG4gICAgICAgIC8vIGZvcm0gY29uZmlnc1xyXG4gICAgICAgIHsgcmVnaXN0ZXIsIGhhbmRsZVN1Ym1pdCwgZm9ybVN0YXRlOiB7IGVycm9ycyB9IH0gPSB1c2VGb3JtKHtcclxuICAgICAgICAgICAgbW9kZTogJ29uQ2hhbmdlJyxcclxuICAgICAgICAgICAgcmVzb2x2ZXI6IHl1cFJlc29sdmVyKHNjaGVtYSlcclxuICAgICAgICB9KSxcclxuICAgICAgICAvLyBvbiBmb3JtIHN1Ym1pdFxyXG4gICAgICAgIHN1Ym1pdCA9IGFzeW5jICggZGF0YSApID0+IHtcclxuICAgICAgICAgICAgdHJ5IHtcclxuICAgICAgICAgICAgICAgIGF3YWl0IHJlcXVlc3QoIFNFVF9ORVdfUEFTU1dPUkQsIHsgcGFzc3dvcmQ6IGRhdGEucGFzc3dvcmQgfSwge1xyXG4gICAgICAgICAgICAgICAgICAgIGhlYWRlcnM6IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgJ0F1dGhvcml6YXRpb24nOiBgQmVhcmVyICR7Z2V0Q29va2llKGByZXNldC10b2tlbmApfWBcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICAgICAgc2V0U2hvd05ld1Bhc3NNbChmYWxzZSlcclxuICAgICAgICAgICAgICAgIHNldFNob3dTdWNjZXNzTWwodHJ1ZSlcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBjYXRjaCAoIGVyciApIHtcclxuICAgICAgICAgICAgICAgIHRvYXN0KCBlcnIucmVzcG9uc2UuZGF0YT8ubWVzc2FnZSB8fCBgdW5rbm93biBlcnJvcmAsIHtcclxuICAgICAgICAgICAgICAgICAgICB0eXBlOiBgZXJyb3JgXHJcbiAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuXHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIDw+XHJcbiAgICAgICAgICAgIHtzaG93TmV3UGFzc01sICYmXHJcbiAgICAgICAgICAgICAgICA8TW9kYWwgb25DbG9zZT17b25Nb2RhbENsb3NlfSBjb250ZW50U3R5bGVzPXtzdHlsZXMubV9jb250ZW50fSBjb250YWluZXJTdHlsZXM9e3N0eWxlcy5tX2NvbnRhaW5lcn0+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5jb250YWluZXJ9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8VGl0bGVcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN0eWxlcz17c3R5bGVzLnRpdGxlfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY29udGVudD17dHJhbnNsYXRlKCd0aXRsZScpfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8Zm9ybSBvblN1Ym1pdD17aGFuZGxlU3VibWl0KHN1Ym1pdCl9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5pbnB1dHN9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxJbnB1dENvbnRhaW5lclxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZD0ncGFzc3dvcmQnXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU9J3Bhc3N3b3JkJ1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwbGFjZWhvbGRlcj17dCgncmVnaXN0cmF0aW9uLmlucHV0UGxhY2VIb2xkZXJzLnBhc3N3b3JkJyl9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGVycm9ycz17ISFlcnJvcnMucGFzc3dvcmR9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG90aGVyPXtyZWdpc3RlcigncGFzc3dvcmQnKX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8U3VibWl0XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3R5bGVzPXtzdHlsZXMuc3VibWl0fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnRlbnQ9e3RyYW5zbGF0ZSgnc3VjY2VzcycpfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9mb3JtPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIDxUb2FzdENvbnRhaW5lciAvPlxyXG4gICAgICAgICAgICAgICAgPC9Nb2RhbD5cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICBzaG93U3VjY2Vzc01sICYmIDxTdWNjZXNzIG9uTW9kYWxDbG9zZT17b25Nb2RhbENsb3NlfSAvPlxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgPC8+XHJcbiAgICApXHJcbn1cclxuIiwiLy8gaG9va3MgaGVscGVyc1xyXG5pbXBvcnQgdXNlVHJhbnNsYXRpb24gZnJvbSAnbmV4dC10cmFuc2xhdGUvdXNlVHJhbnNsYXRpb24nXHJcbi8vIGNvbXBvbmVudHNcclxuaW1wb3J0IHsgTW9kYWwgfSBmcm9tICcuLi8uLi8uLi8uLi8uLi9jb21tb24vYXV0aC9Nb2RhbC9Nb2RhbCdcclxuaW1wb3J0IHsgVGl0bGUgfSBmcm9tICcuLi8uLi9jb21tb24vVGl0bGUnXHJcbi8vIHN0eWxlc1xyXG5pbXBvcnQgc3R5bGVzIGZyb20gJy4vU3VjY2Vzcy5tb2R1bGUuc2NzcydcclxuLy8gaWNvbnNcclxuaW1wb3J0IHN1Y2Nlc3NJY29uIGZyb20gJy9wdWJsaWMvaW1hZ2VzL2hlYWRlci9sb2dpbi9zdWNjZXNzLnBuZydcclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBTdWNjZXNzKHsgb25Nb2RhbENsb3NlIH0pIHtcclxuXHJcbiAgICBjb25zdFxyXG4gICAgICAgIC8vIHRyYW5zbGF0aW9uICAgIFxyXG4gICAgICAgIHsgdCB9ID0gdXNlVHJhbnNsYXRpb24oJ2NvbW1vbicpLFxyXG4gICAgICAgIHRyYW5zbGF0aW9uUGF0aCA9ICdoZWFkZXIuc3VjY2Vzc01vZGFsLicsXHJcbiAgICAgICAgdHJhbnNsYXRlID0ga2V5ID0+IHQoYCR7dHJhbnNsYXRpb25QYXRofSR7a2V5fWApXHJcblxyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8TW9kYWwgb25DbG9zZT17b25Nb2RhbENsb3NlfSBjb250ZW50U3R5bGVzPXtzdHlsZXMubV9jb250ZW50fSBjb250YWluZXJTdHlsZXM9e3N0eWxlcy5tX2NvbnRhaW5lcn0+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuY29udGFpbmVyfT5cclxuICAgICAgICAgICAgICAgIDxUaXRsZVxyXG4gICAgICAgICAgICAgICAgICAgIHN0eWxlcz17c3R5bGVzLnRpdGxlfVxyXG4gICAgICAgICAgICAgICAgICAgIGNvbnRlbnQ9e3RyYW5zbGF0ZSgndGl0bGUnKX1cclxuICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmljb25fY29udGFpbmVyfT5cclxuICAgICAgICAgICAgICAgICAgICA8aW1nXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHNyYz17c3VjY2Vzc0ljb24uc3JjfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBhbHQ9J1N1Y2Nlc3MgaW1nJ1xyXG4gICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC9Nb2RhbD5cclxuICAgIClcclxufVxyXG4iLCIvLyBJY29uc1xyXG5pbXBvcnQgZmFjZWJvb2sgZnJvbSAnL3B1YmxpYy9pbWFnZXMvaGVhZGVyL2xvZ2luL2ZhY2Vib29rLnN2ZydcclxuaW1wb3J0IGdtYWlsIGZyb20gJy9wdWJsaWMvaW1hZ2VzL2hlYWRlci9sb2dpbi9nbWFpbC5zdmcnXHJcbmltcG9ydCB2ayBmcm9tICcvcHVibGljL2ltYWdlcy9oZWFkZXIvbG9naW4vdmsuc3ZnJ1xyXG5pbXBvcnQgdHdpdHRlciBmcm9tICcvcHVibGljL2ltYWdlcy9oZWFkZXIvbG9naW4vdHdpdHRlci5zdmcnXHJcbi8vIHNjc3NcclxuaW1wb3J0IHN0eWxlcyBmcm9tICcuL1NvY2lhbE1lZGlhSWNvbnMubW9kdWxlLnNjc3MnXHJcbi8vIGNvbXBvbmVudHNcclxuaW1wb3J0IFJlYWN0RmFjZWJvb2tMb2dpbiBmcm9tICdyZWFjdC1mYWNlYm9vay1sb2dpbidcclxuaW1wb3J0IEdvb2dsZUxvZ2luIGZyb20gJ3JlYWN0LWdvb2dsZS1sb2dpbidcclxuaW1wb3J0IFR3aXR0ZXJMb2dpbiBmcm9tIFwicmVhY3QtdHdpdHRlci1sb2dpblwiO1xyXG5pbXBvcnQgeyB1c2VFZmZlY3QgfSBmcm9tICdyZWFjdCdcclxuXHJcbmNvbnN0IGljb25zID0gW1xyXG4gICAge1xyXG4gICAgICAgIGljb25Vcmw6IGZhY2Vib29rLnNyYyxcclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgICAgaWNvblVybDogZ21haWwuc3JjLFxyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgICBpY29uVXJsOiB2ay5zcmMsXHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICAgIGljb25Vcmw6IHR3aXR0ZXIuc3JjLFxyXG4gICAgfV1cclxuXHJcblxyXG5cclxuY29uc3QgcmVzcG9uc2VGYWNlYm9vayA9IChyZXNwb25zZSkgPT4ge1xyXG4gICAgY29uc29sZS5sb2cocmVzcG9uc2UpO1xyXG59XHJcblxyXG5jb25zdCByZXNwb25zZUdvb2dsZSA9IChyZXNwb25zZSkgPT4ge1xyXG4gICAgY29uc29sZS5sb2cocmVzcG9uc2UpO1xyXG59XHJcblxyXG5jb25zdCBUV0lUVEVSX0NPTlNVTUVSX0tFWSA9IFwiXCI7XHJcbmNvbnN0IFRXSVRURVJfQ09OU1VNRVJfU0VDUkVUID0gXCJcIjtcclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBTb2NpYWxNZWRpYUljb25zKCkge1xyXG5cclxuXHJcbiAgICB1c2VFZmZlY3QoKCk9PnsgICAgICAgICAgICAgICAgICAgICAgICAgXHJcbiAgICAgVksuaW5pdCh7YXBpSWQ6Jzc5MTEyOTQnfSk7XHJcbiAgICB9LFtdKVxyXG4gICAgXHJcbiAgICBmdW5jdGlvbiBvblNvY2lhbE1lZGlhQnRuQ2xpY2soaSkge1xyXG4gICAgICAgIGlmIChpID09PSAwKSB7XHJcbiAgICAgICAgICAgIGNvbnN0IGZhY2Vib29rTG9naW5CdG4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKGAuZmFjZWJvb2stbG9naW4tYnRuYCk7XHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKCBmYWNlYm9va0xvZ2luQnRuICk7XHJcbiAgICAgICAgICAgIGlmIChmYWNlYm9va0xvZ2luQnRuKVxyXG4gICAgICAgICAgICAgICAgZmFjZWJvb2tMb2dpbkJ0bi5jbGljaygpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBlbHNlIGlmIChpID09PSAxKSB7XHJcbiAgICAgICAgICAgIGNvbnN0XHJcbiAgICAgICAgICAgICAgICBnb29nbGVMb2dpbkJ0biA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoYC5nb29nbGUtbG9naW4tYnRuYClcclxuICAgICAgICAgICAgaWYgKGdvb2dsZUxvZ2luQnRuKVxyXG4gICAgICAgICAgICAgICAgZ29vZ2xlTG9naW5CdG4uY2xpY2soKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgZWxzZSBpZiAoIGkgPT09IDIgKSB7ICAgICAgICAgICAgXHJcbiAgICAgICAgICAgIFZLLkF1dGgubG9naW4oZnVuY3Rpb24ocmVzcG9uc2Upe1xyXG4gICAgICAgICAgICAgICAgaWYocmVzcG9uc2Uuc2Vzc2lvbil7XHJcbiAgICAgICAgICAgICAgICAgICAgLypVc2VyIGF1dGhvcml6YXRpb24gc3VjY2VlZGVkKi9cclxuICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhyZXNwb25zZSlcclxuICAgICAgICAgICAgICAgICAgICBpZihyZXNwb25zZS5zdGF0dXM9PSdjb25uZWN0ZWQnKXtcclxuICAgICAgICAgICAgICAgICAgICAgICAgLypTZWxlY3RlZCB1c2VyIGFjY2VzcyBzZXR0aW5ncywgaWYgdGhleSBhcmUgcmVxdWVzdGVkKi9cclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgIC8qVXNlciBjbGlja3MgdGhlIGNhbmNlbCBidXR0b24gaW4gdGhlIGF1dGhvcml6YXRpb24gd2luZG93Ki9cclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsc2UgaWYgKCBpID09PSAzICkge1xyXG5cclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgY29uc3QgdHdpdHRlckF1dGhIYW5kbGVyID0gKCBlcnIsIGRhdGEgKSA9PiB7XHJcbiAgICAgICAgY29uc29sZS5sb2coIGVyciwgZGF0YSApO1xyXG4gICAgfVxyXG5cclxuICAgIFxyXG5cclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5jb250ZWluZXJ9PlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmNvbnRlbnR9PlxyXG4gICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgIGljb25zLm1hcCgoZWwsIGkpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIChcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuaWNvbkNvbnRlbnR9IGtleT17TWF0aC5yYW5kb20oKSAqIDEwfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YSB0YXJnZXQ9XCJfYmxhbmtcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5pY29uQm9keX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aW1nXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3JjPXtlbC5pY29uVXJsfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFsdD1cIlwiIG9uQ2xpY2s9eygpID0+IG9uU29jaWFsTWVkaWFCdG5DbGljayhpKX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9e3N0eWxlcy5pY29ufVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN0eWxlPXt7IGN1cnNvcjogJ3BvaW50ZXInIH19XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIChpID09PSAwKSAmJiAoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxSZWFjdEZhY2Vib29rTG9naW5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnRhaW5lclN0eWxlPXt7IGRpc3BsYXk6IGBub25lYCB9fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY3NzQ2xhc3M9XCJmYWNlYm9vay1sb2dpbi1idG5cIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYXBwSWQ9XCIxMTg4NjM3NzAzNjE2ODNcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZmllbGRzPVwibmFtZSxlbWFpbCxwaWN0dXJlXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNhbGxiYWNrPXtyZXNwb25zZUZhY2Vib29rfSAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIClcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAoaSA9PT0gMSkgJiYgKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8R29vZ2xlTG9naW5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsaWVudElkPVwiMTA4OTYxODA0Nzk0My1yOTFzdTlxa2MwYzlucG8xdGZvZmYzc3A4NDIxYnQ1Zy5hcHBzLmdvb2dsZXVzZXJjb250ZW50LmNvbVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZW5kZXI9e3JlbmRlclByb3BzID0+IChcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YnV0dG9uXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9e3JlbmRlclByb3BzLm9uQ2xpY2t9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRpc2FibGVkPXtyZW5kZXJQcm9wcy5kaXNhYmxlZH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3R5bGU9e3sgZGlzcGxheTogJ25vbmUnIH19XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImdvb2dsZS1sb2dpbi1idG5cIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8+KX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvb2tpZVBvbGljeT17J3NpbmdsZV9ob3N0X29yaWdpbid9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvblN1Y2Nlc3M9e3Jlc3BvbnNlR29vZ2xlfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb25GYWlsdXJlPXtyZXNwb25zZUdvb2dsZX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgeyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPFR3aXR0ZXJMb2dpblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhdXRoQ2FsbGJhY2s9e3R3aXR0ZXJBdXRoSGFuZGxlcn1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uc3VtZXJLZXk9e1RXSVRURVJfQ09OU1VNRVJfS0VZfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25zdW1lclNlY3JldD17VFdJVFRFUl9DT05TVU1FUl9TRUNSRVR9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9hPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIClcclxuICAgICAgICAgICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgIClcclxufVxyXG5cclxuLy8gVE9ET1xyXG4vLyBhZGQgZm9vdCBmb290YmV0IGRvbWFpbiBpbiBnb29nbGUgZGV2ZWxwb3JzIGFjY291bnQiLCJcclxuZXhwb3J0IGZ1bmN0aW9uIFJlc2V0UGFzc3dvcmRMaW5rKHsgc3R5bGVzLCBjb250ZW50LCBjbGljayB9KSB7XHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXN9ID5cclxuICAgICAgICAgICAgPHNwYW4gb25DbGljaz17Y2xpY2t9PlxyXG4gICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbnRlbnRcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgPC9zcGFuPlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgKVxyXG59XHJcbiIsImV4cG9ydCBmdW5jdGlvbiBTdWJtaXQoeyBzdHlsZXMsIGNvbnRlbnQsIGNsaWNrIH0pIHtcclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlc30+XHJcbiAgICAgICAgICAgIDxidXR0b24gdHlwZT0nc3VibWl0Jz5cclxuICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICBjb250ZW50XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIDwvYnV0dG9uPlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgKVxyXG59XHJcbiIsImV4cG9ydCBmdW5jdGlvbiBUaXRsZSh7IHN0eWxlcywgY29udGVudCB9KSB7XHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXN9PlxyXG4gICAgICAgICAgICA8cD5cclxuICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICBjb250ZW50XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIDwvcD5cclxuICAgICAgICA8L2Rpdj5cclxuICAgIClcclxufVxyXG4iLCJpbXBvcnQgTGluayBmcm9tICduZXh0L2xpbmsnXHJcblxyXG5leHBvcnQgZnVuY3Rpb24gVG9SZWdpc3Rlcih7XHJcbiAgICBjb250YWluZXJfc3R5bGVzLFxyXG4gICAgY29udGVudF9zdHlsZXMsXHJcbiAgICBvcixcclxuICAgIHJlZ2lzdGVyX3RleHRfc3R5bGVzLFxyXG4gICAgY29udGVudCxcclxuICAgIGhyZWYsXHJcbiAgICBjbGljayB9KSB7XHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIDxkaXZcclxuICAgICAgICAgICAgY2xhc3NOYW1lPXtjb250YWluZXJfc3R5bGVzfVxyXG4gICAgICAgICAgICBvbkNsaWNrPXtjbGlja30+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtjb250ZW50X3N0eWxlc30+XHJcbiAgICAgICAgICAgICAgICA8c3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG9yICsgXCIgXCJcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICA8L3NwYW4+XHJcbiAgICAgICAgICAgICAgICA8TGluayBocmVmPXtocmVmfT5cclxuICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9e3JlZ2lzdGVyX3RleHRfc3R5bGVzfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY29udGVudFxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgPC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgPC9MaW5rPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8L2RpdiA+XHJcbiAgICApXHJcbn1cclxuIiwiLy8gc3R5bGVzXHJcbmltcG9ydCBzdHlsZXMgZnJvbSAnLi9Mb2dvLm1vZHVsZS5zY3NzJ1xyXG4vLyBjb21wb25lbnRzXHJcbmltcG9ydCBMaW5rIGZyb20gJ25leHQvbGluaydcclxuLy8gaW1hZ2VzIGFuZCBpY29uc1xyXG5pbXBvcnQgbG9nbyBmcm9tICcvcHVibGljL2ltYWdlcy9oZWFkZXIvbG9nby5zdmcnXHJcblxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIExvZ28oKSB7XHJcblxyXG4gICAgcmV0dXJuIChcclxuXHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5sb2dvX2NvbmF0aW5lcn0+XHJcbiAgICAgICAgICAgIDxMaW5rIGhyZWY9Jy8nPlxyXG4gICAgICAgICAgICAgICAgPGltZ1xyXG4gICAgICAgICAgICAgICAgICAgIHNyYz17bG9nby5zcmN9XHJcbiAgICAgICAgICAgICAgICAgICAgYWx0PVwiRm9vdEJldCBMb2dvXCJcclxuICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgIDwvTGluayA+XHJcbiAgICAgICAgPC9kaXY+XHJcblxyXG4gICAgKVxyXG59XHJcbiIsIi8vIGhvb2tzXHJcbmltcG9ydCB7IHVzZVNlbGVjdG9yIH0gZnJvbSAncmVhY3QtcmVkdXgnXHJcbi8vc3R5bGVzXHJcbmltcG9ydCBzdHlsZXMgZnJvbSAnLi9IZWFkZXIubW9kdWxlLnNjc3MnXHJcbi8vIGNvbXBvbmVudHNcclxuaW1wb3J0IHsgQmFyIH0gZnJvbSAnLi9CYXIvQmFyJ1xyXG5pbXBvcnQgeyBOYXZCYXIgfSBmcm9tICcuL05hdkJhci9OYXZCYXInXHJcbmltcG9ydCB7IFNvY2lhbE1lZGlhIH0gZnJvbSAnLi9Tb2NpYWxNZWRpYS9Tb2NpYWxNZWRpYSdcclxuLy8gaW1nZXNcclxuaW1wb3J0IGZvb3RiYWxsZXIgZnJvbSAnL3B1YmxpYy9pbWFnZXMvaGVhZGVyL2Zvb3RiYWxsZXIuc3ZnJ1xyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIEhlYWRlcih7IG1haW5zUGFnZXMgfSkge1xyXG5cclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPD5cclxuICAgICAgICAgICAge21haW5zUGFnZXMgP1xyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5oZWFkZXJfY29udGFpbmVyX2JpZ30+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5iYXJ9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8U29jaWFsTWVkaWEgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5iYXJfY29udHJvbGVyfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuYmFyX2NvbnRlaW5lcn0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5iYXJfY29udGVudH0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxCYXJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJhcl9pdGVtc19jb250PXtzdHlsZXMuYmFyX2l0ZW1zX2NvbnR9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBiYXJfaXRlbXM9e3N0eWxlcy5iYXJfaXRlbXN9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuZm9vdGJhbGxlcn0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGltZyBzcmM9e2Zvb3RiYWxsZXIuc3JjfSBhbHQ9XCJcIiAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIDxOYXZCYXIgLz5cclxuICAgICAgICAgICAgICAgIDwvZGl2PiA6XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmhlYWRlcl9jb250YWluZXJfc21hbGx9PlxyXG4gICAgICAgICAgICAgICAgICAgIDxCYXIgLz5cclxuICAgICAgICAgICAgICAgICAgICA8TmF2QmFyIC8+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIDwvPlxyXG5cclxuICAgIClcclxufVxyXG5cclxuIiwiaW1wb3J0IExpbmsgZnJvbSAnbmV4dC9saW5rJ1xyXG4vLyBzdHlsZXNcclxuaW1wb3J0IHN0eWxlcyBmcm9tICcuL0J1dHRvbi5tb2R1bGUuc2NzcydcclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBCdXR0b24oe1xyXG4gICAgaHJlZixcclxuICAgIGNvbnRlbnRGcnN0UCxcclxuICAgIGNvbnRlbnRTZWNQID0gbnVsbCxcclxuICAgIGFjdGl2ZSxcclxuICAgIGNsaWNrID0gbnVsbCB9KSB7XHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIDw+XHJcbiAgICAgICAgICAgIHtocmVmICE9PSBudWxsID9cclxuICAgICAgICAgICAgICAgIDxMaW5rIGhyZWY9e2hyZWZ9PlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtgJHtzdHlsZXMuY29udGFpbmVyfSAke2FjdGl2ZSAmJiBzdHlsZXMuYWN0aXZlfWB9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9e3N0eWxlcy5jb250ZW50fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgb25DbGljaz17Y2xpY2t9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwcmU+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb250ZW50RnJzdFBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGJyIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb250ZW50U2VjUFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvcHJlPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICA8L2RpdiA+XHJcbiAgICAgICAgICAgICAgICA8L0xpbms+IFxyXG4gICAgICAgICAgICAgICAgOlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e2Ake3N0eWxlcy5jb250YWluZXJ9ICR7YWN0aXZlICYmIHN0eWxlcy5hY3RpdmV9YH0+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9e3N0eWxlcy5jb250ZW50fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBvbkNsaWNrPXtjbGlja31cclxuICAgICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxwcmU+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29udGVudEZyc3RQXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YnIgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb250ZW50U2VjUFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L3ByZT5cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDwvZGl2ID5cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIDwvPlxyXG5cclxuICAgIClcclxufVxyXG4iLCIvLyBob29rcyBhbmQgaGVscGVyc1xyXG5pbXBvcnQgeyB1c2VSb3V0ZXIgfSBmcm9tICduZXh0L2Rpc3QvY2xpZW50L3JvdXRlcidcclxuaW1wb3J0IHsgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCdcclxuLy8gc3R5bGVzXHJcbmltcG9ydCBzdHlsZXMgZnJvbSAnLi9OYXZCYXIubW9kdWxlLnNjc3MnXHJcbi8vIHRyYW5zbGF0aW9uIFxyXG5pbXBvcnQgdXNlVHJhbnNsYXRpb24gZnJvbSAnbmV4dC10cmFuc2xhdGUvdXNlVHJhbnNsYXRpb24nXHJcbi8vIGNvbXBvbmV0bnNcclxuaW1wb3J0IHsgQnV0dG9uIH0gZnJvbSAnLi9CdXR0b24vQnV0dG9uJ1xyXG5pbXBvcnQgQ29udGFjdHNNb2RhbCBmcm9tICcuLi8uLi9QYWdlcy9Db250YWN0cy9Db250YWN0c01vZGFsJ1xyXG5cclxuXHJcblxyXG5leHBvcnQgZnVuY3Rpb24gTmF2QmFyKCkge1xyXG5cclxuICAgIGNvbnN0XHJcbiAgICAgICAgLy9zdGF0ZXNcclxuICAgICAgICBbc2hvd0NvbnRhY3RzTW9kYWwsIHNldFNob3dDb250YWN0c01vZGFsXSA9IHVzZVN0YXRlKGZhbHNlKSxcclxuICAgICAgICB7IHQgfSA9IHVzZVRyYW5zbGF0aW9uKCdjb21tb24nKSxcclxuICAgICAgICB0cmFuc2xhdGlvblBhdGggPSAnaGVhZGVyLm5hdkJhci4nLFxyXG4gICAgICAgIHRyYW5zbGF0ZSA9IChrZXkpID0+IHQoYCR7dHJhbnNsYXRpb25QYXRofSR7a2V5fWApLFxyXG4gICAgICAgIC8vIHJvdXRlclxyXG4gICAgICAgIHJvdXRlciA9IHVzZVJvdXRlcigpLFxyXG4gICAgICAgIC8vIG5hdiBiYXIgYnV0dG9ucyBjb25maWdzXHJcbiAgICAgICAgYnV0dG9uc0luSG9tZVBhZ2UgPSBbXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIGlkOiAnbWFpbicsXHJcbiAgICAgICAgICAgICAgICBrZXk6IE1hdGgucmFuZG9tKCksXHJcbiAgICAgICAgICAgICAgICBmcnN0Q29udGVudDogdHJhbnNsYXRlKCdtYWluJyksXHJcbiAgICAgICAgICAgICAgICBocmVmOiAnLydcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgaWQ6ICdnYW1lcycsXHJcbiAgICAgICAgICAgICAgICBrZXk6IE1hdGgucmFuZG9tKCksXHJcbiAgICAgICAgICAgICAgICBmcnN0Q29udGVudDogdHJhbnNsYXRlKCdnYW1lcycpLFxyXG4gICAgICAgICAgICAgICAgaHJlZjogJy9nYW1lcydcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgaWQ6ICdzdGF0aXN0aWNzJyxcclxuICAgICAgICAgICAgICAgIGtleTogTWF0aC5yYW5kb20oKSxcclxuICAgICAgICAgICAgICAgIGZyc3RDb250ZW50OiB0cmFuc2xhdGUoJ3N0YXRpc3RpY3MuZnJzJyksXHJcbiAgICAgICAgICAgICAgICBzZWNDb250ZW50OiB0cmFuc2xhdGUoJ3N0YXRpc3RpY3Muc2VjJyksXHJcbiAgICAgICAgICAgICAgICBocmVmOiAnL3N0YXRpc3RpY3MnXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIGlkOiAncHJlZGljdGlvbicsXHJcbiAgICAgICAgICAgICAgICBrZXk6IE1hdGgucmFuZG9tKCksXHJcbiAgICAgICAgICAgICAgICBmcnN0Q29udGVudDogdHJhbnNsYXRlKCdwcmVkaWN0aW9uLmZycycpLFxyXG4gICAgICAgICAgICAgICAgc2VjQ29udGVudDogdHJhbnNsYXRlKCdwcmVkaWN0aW9uLnNlYycpLFxyXG4gICAgICAgICAgICAgICAgaHJlZjogJy9wcmVkaWN0aW9uJ1xyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICBpZDogJ3Rlc3RpbW9uaWFscycsXHJcbiAgICAgICAgICAgICAgICBrZXk6IE1hdGgucmFuZG9tKCksXHJcbiAgICAgICAgICAgICAgICBmcnN0Q29udGVudDogdHJhbnNsYXRlKCd0ZXN0aW1vbmlhbHMnKSxcclxuICAgICAgICAgICAgICAgIGhyZWY6ICcvdGVzdGltb25pYWxzJ1xyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICBpZDogJ2Fib3V0VXMnLFxyXG4gICAgICAgICAgICAgICAga2V5OiBNYXRoLnJhbmRvbSgpLFxyXG4gICAgICAgICAgICAgICAgZnJzdENvbnRlbnQ6IHRyYW5zbGF0ZSgnYWJvdXRVcycpLFxyXG4gICAgICAgICAgICAgICAgaHJlZjogJy9hYm91dFVzJ1xyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICBpZDogJ2NvbnRhY3RzJyxcclxuICAgICAgICAgICAgICAgIGtleTogTWF0aC5yYW5kb20oKSxcclxuICAgICAgICAgICAgICAgIGZyc3RDb250ZW50OiB0cmFuc2xhdGUoJ2NvbnRhY3RzJyksXHJcbiAgICAgICAgICAgICAgICBocmVmOiBudWxsLFxyXG4gICAgICAgICAgICAgICAgY2xpY2s6ICgpID0+IHNldFNob3dDb250YWN0c01vZGFsKHRydWUpXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgXSxcclxuICAgICAgICBidXR0b25zID0gYnV0dG9uc0luSG9tZVBhZ2UuZmlsdGVyKGVsID0+IGVsLmlkICE9PSBcInN0YXRpc3RpY3NcIilcclxuXHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIDw+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtgJHtzdHlsZXMuY29udGFpbmVyfSAke3JvdXRlci5wYXRobmFtZSAhPT0gJy8nID8gc3R5bGVzLnRhYmxldCA6IG51bGx9YH0+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmNvbnRlbnR9PlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMudG9wX29uX3RhYmxldH0+XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAocm91dGVyLnBhdGhuYW1lID09PSAnLycgPyBidXR0b25zSW5Ib21lUGFnZSA6IGJ1dHRvbnMpLm1hcCgoZWwsIGkpID0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaSA8IDMgJiYgKDxCdXR0b25cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29udGVudEZyc3RQPXtlbC5mcnN0Q29udGVudH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29udGVudFNlY1A9e2VsLnNlY0NvbnRlbnR9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGhyZWY9e2VsLmhyZWZ9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGtleT17ZWwua2V5fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhY3RpdmU9e3JvdXRlci5wYXRobmFtZSA9PT0gZWwuaHJlZiA/ICd0cnVlJyA6IG51bGx9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsaWNrPXtlbC5jbGljayAmJiBlbC5jbGlja31cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICkpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmJvdHRvbV9vbl90YWJsZXR9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAocm91dGVyLnBhdGhuYW1lID09PSAnLycgPyBidXR0b25zSW5Ib21lUGFnZSA6IGJ1dHRvbnMpLm1hcCgoZWwsIGkpID0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaSA+PSAzICYmICg8QnV0dG9uXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnRlbnRGcnN0UD17ZWwuZnJzdENvbnRlbnR9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnRlbnRTZWNQPXtlbC5zZWNDb250ZW50fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBocmVmPXtlbC5ocmVmfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBrZXk9e2VsLmtleX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYWN0aXZlPXtyb3V0ZXIucGF0aG5hbWUgPT09IGVsLmhyZWYgPyAndHJ1ZScgOiBudWxsfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGljaz17ZWwuY2xpY2sgJiYgZWwuY2xpY2t9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcblxyXG5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgc2hvd0NvbnRhY3RzTW9kYWwgJiZcclxuICAgICAgICAgICAgICAgIDxDb250YWN0c01vZGFsXHJcbiAgICAgICAgICAgICAgICAgICAgb3BlbmVkPXtzaG93Q29udGFjdHNNb2RhbCA/IHRydWUgOiBmYWxzZX1cclxuICAgICAgICAgICAgICAgICAgICBvbk1vZGFsQ2xvc2U9eygpID0+IHNldFNob3dDb250YWN0c01vZGFsKGZhbHNlKX1cclxuICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICA8Lz5cclxuXHJcbiAgICApXHJcbn1cclxuIiwiaW1wb3J0IHN0eWxlcyBmcm9tICcuL0ljb24ubW9kdWxlLnNjc3MnXHJcblxyXG5leHBvcnQgZnVuY3Rpb24gSWNvbih7IHNyYywgY2xpY2ssIGlkIH0pIHtcclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5jb250YWluZXJ9IGlkPXtpZH0+XHJcbiAgICAgICAgICAgIDxpbWdcclxuICAgICAgICAgICAgICAgIHNyYz17c3JjfVxyXG4gICAgICAgICAgICAgICAgYWx0PXtgaWNvbnMtJHtzcmN9YH1cclxuICAgICAgICAgICAgICAgIG9uQ2xpY2s9e2NsaWNrfVxyXG4gICAgICAgICAgICAvPlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgKVxyXG59XHJcbiIsImltcG9ydCB7IE1vZGFsIH0gZnJvbSBcIi4uLy4uLy4uLy4uL2NvbW1vbi9hdXRoL01vZGFsL01vZGFsXCJcclxuaW1wb3J0IHN0eWxlcyBmcm9tICcuLi9Tb2NpYWxNZWRpYU1vZGFsLm1vZHVsZS5zY3NzJ1xyXG5pbXBvcnQgTGluayBmcm9tICduZXh0L2xpbmsnXHJcblxyXG5leHBvcnQgZnVuY3Rpb24gRmFjZWJvb2soeyBvbk1vZGFsQ2xvc2UsIGRhdGEsIHBhcmVudCB9KSB7XHJcblxyXG4gICAgY29uc3QgdG9wID0gcGFyZW50LmN1cnJlbnQuY2hpbGRyZW4uZmFjZWJvb2sub2Zmc2V0VG9wXHJcblxyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8TW9kYWxcclxuICAgICAgICAgICAgb25DbG9zZT17b25Nb2RhbENsb3NlfVxyXG4gICAgICAgICAgICBjb250YWluZXJTdHlsZXM9e3N0eWxlcy5jb250YWluZXJ9XHJcbiAgICAgICAgICAgIGNvbnRlbnRTdHlsZXM9e3N0eWxlcy5jb250ZW50fVxyXG4gICAgICAgICAgICBvdGhlclN0eWxlcz17eyB0b3A6IHRvcCArICdweCcgfX1cclxuICAgICAgICA+XHJcbiAgICAgICAgICAgIDxMaW5rIGhyZWY9e2RhdGEudXJsfT5cclxuICAgICAgICAgICAgICAgIDxhIHRhcmdldD1cIl9ibGFua1wiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxwPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBkYXRhLnRleHRcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIDwvcD5cclxuICAgICAgICAgICAgICAgIDwvYT5cclxuICAgICAgICAgICAgPC9MaW5rPlxyXG4gICAgICAgIDwvTW9kYWw+XHJcbiAgICApXHJcbn0iLCJpbXBvcnQgeyBNb2RhbCB9IGZyb20gXCIuLi8uLi8uLi8uLi9jb21tb24vYXV0aC9Nb2RhbC9Nb2RhbFwiXHJcbmltcG9ydCBzdHlsZXMgZnJvbSAnLi4vU29jaWFsTWVkaWFNb2RhbC5tb2R1bGUuc2NzcydcclxuaW1wb3J0IExpbmsgZnJvbSAnbmV4dC9saW5rJ1xyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIEluc3RhZ3JhbSh7IG9uTW9kYWxDbG9zZSwgZGF0YSwgcGFyZW50IH0pIHtcclxuXHJcbiAgICBjb25zdCB0b3AgPSBwYXJlbnQuY3VycmVudC5jaGlsZHJlbi5pbnN0YWdyYW0ub2Zmc2V0VG9wXHJcblxyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8TW9kYWxcclxuICAgICAgICAgICAgb25DbG9zZT17b25Nb2RhbENsb3NlfVxyXG4gICAgICAgICAgICBjb250YWluZXJTdHlsZXM9e3N0eWxlcy5jb250YWluZXJ9XHJcbiAgICAgICAgICAgIGNvbnRlbnRTdHlsZXM9e3N0eWxlcy5jb250ZW50fVxyXG4gICAgICAgICAgICBvdGhlclN0eWxlcz17eyB0b3A6IHRvcCArICdweCcgfX1cclxuICAgICAgICA+XHJcbiAgICAgICAgICAgIDxMaW5rIGhyZWY9e2RhdGEudXJsfT5cclxuICAgICAgICAgICAgICAgIDxhIHRhcmdldD1cIl9ibGFua1wiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxwPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBkYXRhLnRleHRcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIDwvcD5cclxuICAgICAgICAgICAgICAgIDwvYT5cclxuICAgICAgICAgICAgPC9MaW5rPlxyXG4gICAgICAgIDwvTW9kYWw+XHJcbiAgICApXHJcbn0iLCJpbXBvcnQgeyBNb2RhbCB9IGZyb20gXCIuLi8uLi8uLi8uLi9jb21tb24vYXV0aC9Nb2RhbC9Nb2RhbFwiXHJcbmltcG9ydCBzdHlsZXMgZnJvbSAnLi4vU29jaWFsTWVkaWFNb2RhbC5tb2R1bGUuc2NzcydcclxuaW1wb3J0IExpbmsgZnJvbSAnbmV4dC9saW5rJ1xyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIFBob25lKHsgb25Nb2RhbENsb3NlLCBkYXRhLCBwYXJlbnQgfSkge1xyXG5cclxuICAgIGNvbnN0XHJcbiAgICAgICAgdG9wID0gcGFyZW50LmN1cnJlbnQuY2hpbGRyZW4ucGhvbmUub2Zmc2V0VG9wXHJcblxyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8TW9kYWxcclxuICAgICAgICAgICAgb25DbG9zZT17b25Nb2RhbENsb3NlfVxyXG4gICAgICAgICAgICBjb250YWluZXJTdHlsZXM9e3N0eWxlcy5jb250YWluZXJ9XHJcbiAgICAgICAgICAgIGNvbnRlbnRTdHlsZXM9e3N0eWxlcy5jb250ZW50fVxyXG4gICAgICAgICAgICBvdGhlclN0eWxlcz17eyB0b3A6IHRvcCArICdweCcgfX1cclxuICAgICAgICA+XHJcbiAgICAgICAgICAgIDxMaW5rIGhyZWY9e2RhdGEudXJsfT5cclxuICAgICAgICAgICAgICAgIDxhIHRhcmdldD1cIl9ibGFua1wiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxwPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBkYXRhLnRleHRcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIDwvcD5cclxuICAgICAgICAgICAgICAgIDwvYT5cclxuICAgICAgICAgICAgPC9MaW5rPlxyXG4gICAgICAgIDwvTW9kYWw+XHJcbiAgICApXHJcbn1cclxuIiwiaW1wb3J0IHsgTW9kYWwgfSBmcm9tIFwiLi4vLi4vLi4vLi4vY29tbW9uL2F1dGgvTW9kYWwvTW9kYWxcIlxyXG5pbXBvcnQgc3R5bGVzIGZyb20gJy4uL1NvY2lhbE1lZGlhTW9kYWwubW9kdWxlLnNjc3MnXHJcbmltcG9ydCBMaW5rIGZyb20gJ25leHQvbGluaydcclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBUZWxlZ3JhbSh7IG9uTW9kYWxDbG9zZSwgZGF0YSwgcGFyZW50IH0pIHtcclxuXHJcbiAgICBjb25zdCB0b3AgPSBwYXJlbnQuY3VycmVudC5jaGlsZHJlbi50ZWxlZ3JhbS5vZmZzZXRUb3BcclxuXHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIDxNb2RhbFxyXG4gICAgICAgICAgICBvbkNsb3NlPXtvbk1vZGFsQ2xvc2V9XHJcbiAgICAgICAgICAgIGNvbnRhaW5lclN0eWxlcz17c3R5bGVzLmNvbnRhaW5lcn1cclxuICAgICAgICAgICAgY29udGVudFN0eWxlcz17c3R5bGVzLmNvbnRlbnR9XHJcbiAgICAgICAgICAgIG90aGVyU3R5bGVzPXt7IHRvcDogdG9wICsgJ3B4JyB9fVxyXG4gICAgICAgID5cclxuICAgICAgICAgICAgPExpbmsgaHJlZj17ZGF0YS51cmx9PlxyXG4gICAgICAgICAgICAgICAgPGEgdGFyZ2V0PVwiX2JsYW5rXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPHA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRhdGEudGV4dFxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgPC9wPlxyXG4gICAgICAgICAgICAgICAgPC9hPlxyXG4gICAgICAgICAgICA8L0xpbms+XHJcbiAgICAgICAgPC9Nb2RhbD5cclxuICAgIClcclxufSIsImltcG9ydCB7IE1vZGFsIH0gZnJvbSBcIi4uLy4uLy4uLy4uL2NvbW1vbi9hdXRoL01vZGFsL01vZGFsXCJcclxuaW1wb3J0IHN0eWxlcyBmcm9tICcuLi9Tb2NpYWxNZWRpYU1vZGFsLm1vZHVsZS5zY3NzJ1xyXG5pbXBvcnQgTGluayBmcm9tICduZXh0L2xpbmsnXHJcblxyXG5leHBvcnQgZnVuY3Rpb24gVmliZXIoeyBvbk1vZGFsQ2xvc2UsIGRhdGEsIHBhcmVudCB9KSB7XHJcblxyXG4gICAgY29uc3QgdG9wID0gcGFyZW50LmN1cnJlbnQuY2hpbGRyZW4udmliZXIub2Zmc2V0VG9wXHJcblxyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8TW9kYWxcclxuICAgICAgICAgICAgb25DbG9zZT17b25Nb2RhbENsb3NlfVxyXG4gICAgICAgICAgICBjb250YWluZXJTdHlsZXM9e3N0eWxlcy5jb250YWluZXJ9XHJcbiAgICAgICAgICAgIGNvbnRlbnRTdHlsZXM9e3N0eWxlcy5jb250ZW50fVxyXG4gICAgICAgICAgICBvdGhlclN0eWxlcz17eyB0b3A6IHRvcCArICdweCcgfX1cclxuICAgICAgICA+XHJcbiAgICAgICAgICAgIDxMaW5rIGhyZWY9e2RhdGEudXJsfT5cclxuICAgICAgICAgICAgICAgIDxhIHRhcmdldD1cIl9ibGFua1wiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxwPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBkYXRhLnRleHRcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIDwvcD5cclxuICAgICAgICAgICAgICAgIDwvYT5cclxuICAgICAgICAgICAgPC9MaW5rPlxyXG4gICAgICAgIDwvTW9kYWw+XHJcbiAgICApXHJcbn0iLCJpbXBvcnQgeyBNb2RhbCB9IGZyb20gXCIuLi8uLi8uLi8uLi9jb21tb24vYXV0aC9Nb2RhbC9Nb2RhbFwiXHJcbmltcG9ydCBzdHlsZXMgZnJvbSAnLi4vU29jaWFsTWVkaWFNb2RhbC5tb2R1bGUuc2NzcydcclxuaW1wb3J0IExpbmsgZnJvbSAnbmV4dC9saW5rJ1xyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIFdhdHNVcCh7IG9uTW9kYWxDbG9zZSwgZGF0YSwgcGFyZW50IH0pIHtcclxuXHJcbiAgICBjb25zdCB0b3AgPSBwYXJlbnQuY3VycmVudC5jaGlsZHJlbi53YXRzdXAub2Zmc2V0VG9wXHJcblxyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8TW9kYWxcclxuICAgICAgICAgICAgb25DbG9zZT17b25Nb2RhbENsb3NlfVxyXG4gICAgICAgICAgICBjb250YWluZXJTdHlsZXM9e3N0eWxlcy5jb250YWluZXJ9XHJcbiAgICAgICAgICAgIGNvbnRlbnRTdHlsZXM9e3N0eWxlcy5jb250ZW50fVxyXG4gICAgICAgICAgICBvdGhlclN0eWxlcz17eyB0b3A6IHRvcCArICdweCcgfX1cclxuICAgICAgICA+XHJcbiAgICAgICAgICAgIDxMaW5rIGhyZWY9e2RhdGEudXJsfT5cclxuICAgICAgICAgICAgICAgIDxhIHRhcmdldD1cIl9ibGFua1wiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxwPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBkYXRhLnRleHRcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIDwvcD5cclxuICAgICAgICAgICAgICAgIDwvYT5cclxuICAgICAgICAgICAgPC9MaW5rPlxyXG4gICAgICAgIDwvTW9kYWw+XHJcbiAgICApXHJcbn0iLCJpbXBvcnQgeyB1c2VSZWYgfSBmcm9tICdyZWFjdCdcclxuLy8gc3R5bGVzXHJcbmltcG9ydCBzdHlsZXMgZnJvbSAnLi9Tb2NpYWxNZWRpYS5tb2R1bGUuc2NzcydcclxuLy8gY29tcG9uZW50c1xyXG5pbXBvcnQgeyBJY29uIH0gZnJvbSAnLi9JY29uL0ljb24nXHJcbmltcG9ydCB7IHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnXHJcbmltcG9ydCB7IFBob25lIH0gZnJvbSAnLi9Nb2RhbHMvUGhvbmUvUGhvbmUnXHJcbmltcG9ydCB7IEZhY2Vib29rIH0gZnJvbSAnLi9Nb2RhbHMvRmFjZWJvb2svRmFjZWJvb2snXHJcbmltcG9ydCB7IFRlbGVncmFtIH0gZnJvbSAnLi9Nb2RhbHMvVGVsZWdyYW0vVGVsZWdyYW0nXHJcbmltcG9ydCB7IFdhdHNVcCB9IGZyb20gJy4vTW9kYWxzL1dhdHNVcC9XYXRzVXAnXHJcbmltcG9ydCB7IEluc3RhZ3JhbSB9IGZyb20gJy4vTW9kYWxzL0luc3RhZ3JhbS9JbnN0YWdyYW0nXHJcbmltcG9ydCB7IFZpYmVyIH0gZnJvbSAnLi9Nb2RhbHMvVmliZXIvVmliZXInXHJcbi8vIGljb25zXHJcbmltcG9ydCBwaG9uZSBmcm9tICcvcHVibGljL2ltYWdlcy9oZWFkZXIvU29jaWFsTWVkaWEvcGhvbmUuc3ZnJ1xyXG5pbXBvcnQgZmFjZWJvb2sgZnJvbSAnL3B1YmxpYy9pbWFnZXMvaGVhZGVyL1NvY2lhbE1lZGlhL2ZhY2Vib29rLnN2ZydcclxuaW1wb3J0IHRlbGVncmFtIGZyb20gJy9wdWJsaWMvaW1hZ2VzL2hlYWRlci9Tb2NpYWxNZWRpYS90ZWxlZ3JhbS5zdmcnXHJcbmltcG9ydCB3YXRzdXAgZnJvbSAnL3B1YmxpYy9pbWFnZXMvaGVhZGVyL1NvY2lhbE1lZGlhL3dhdHN1cC5zdmcnXHJcbmltcG9ydCBpbnN0YWdyYW0gZnJvbSAnL3B1YmxpYy9pbWFnZXMvaGVhZGVyL1NvY2lhbE1lZGlhL2luc3RhZ3JhbS5zdmcnXHJcbmltcG9ydCB2aWJlciBmcm9tICcvcHVibGljL2ltYWdlcy9oZWFkZXIvU29jaWFsTWVkaWEvdmliZXIuc3ZnJ1xyXG5cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBTb2NpYWxNZWRpYSgpIHtcclxuXHJcbiAgICBjb25zdFxyXG4gICAgICAgIC8vIHN0YXRlc1xyXG4gICAgICAgIFtzaG93UGhvbmVNb2RhbCwgc2V0U2hvd1Bob25lTW9kYWxdID0gdXNlU3RhdGUoZmFsc2UpLFxyXG4gICAgICAgIFtzaG93RmFjYm9va01vZGFsLCBzZXRTaG93RmFjYm9va01vZGFsXSA9IHVzZVN0YXRlKGZhbHNlKSxcclxuICAgICAgICBbc2hvd1RlbGVncmFtTW9kYWwsIHNldFNob3dUZWxlZ3JhbU1vZGFsXSA9IHVzZVN0YXRlKGZhbHNlKSxcclxuICAgICAgICBbc2hvd1dhdHNVcE1vZGFsLCBzZXRTaG93V2F0c1VwTW9kYWxdID0gdXNlU3RhdGUoZmFsc2UpLFxyXG4gICAgICAgIFtzaG93SW5zdGFncmFtTW9kYWwsIHNldFNob3dJbnN0YWdyYW1Nb2RhbF0gPSB1c2VTdGF0ZShmYWxzZSksXHJcbiAgICAgICAgW3Nob3dWaWJlck1vZGFsLCBzZXRTaG93VmliZXJNb2RhbF0gPSB1c2VTdGF0ZShmYWxzZSksXHJcbiAgICAgICAgc29jaWFsTWVkaWFzUmVmID0gdXNlUmVmKCksXHJcbiAgICAgICAgLy8gY29uZmlnXHJcbiAgICAgICAgaWNvbnMgPSBbXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIGlkOiBcInBob25lXCIsXHJcbiAgICAgICAgICAgICAgICBrZXk6IE1hdGgucmFuZG9tKCksXHJcbiAgICAgICAgICAgICAgICBzcmM6IHBob25lLnNyYyxcclxuICAgICAgICAgICAgICAgIGNsaWNrOiAoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgd2luZG93LnNjcm9sbFRvKDAsIDApXHJcbiAgICAgICAgICAgICAgICAgICAgc2V0U2hvd1Bob25lTW9kYWwodHJ1ZSlcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgaWQ6IFwiZmFjZWJvb2tcIixcclxuICAgICAgICAgICAgICAgIGtleTogTWF0aC5yYW5kb20oKSxcclxuICAgICAgICAgICAgICAgIHNyYzogZmFjZWJvb2suc3JjLFxyXG4gICAgICAgICAgICAgICAgY2xpY2s6ICgpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICB3aW5kb3cuc2Nyb2xsVG8oMCwgMClcclxuICAgICAgICAgICAgICAgICAgICBzZXRTaG93RmFjYm9va01vZGFsKHRydWUpXHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIGlkOiBcInRlbGVncmFtXCIsXHJcbiAgICAgICAgICAgICAgICBrZXk6IE1hdGgucmFuZG9tKCksXHJcbiAgICAgICAgICAgICAgICBzcmM6IHRlbGVncmFtLnNyYyxcclxuICAgICAgICAgICAgICAgIGNsaWNrOiAoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgd2luZG93LnNjcm9sbFRvKDAsIDApXHJcbiAgICAgICAgICAgICAgICAgICAgc2V0U2hvd1RlbGVncmFtTW9kYWwodHJ1ZSlcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgaWQ6IFwid2F0c3VwXCIsXHJcbiAgICAgICAgICAgICAgICBrZXk6IE1hdGgucmFuZG9tKCksXHJcbiAgICAgICAgICAgICAgICBzcmM6IHdhdHN1cC5zcmMsXHJcbiAgICAgICAgICAgICAgICBjbGljazogKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIHdpbmRvdy5zY3JvbGxUbygwLCAwKVxyXG4gICAgICAgICAgICAgICAgICAgIHNldFNob3dXYXRzVXBNb2RhbCh0cnVlKVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICBpZDogXCJpbnN0YWdyYW1cIixcclxuICAgICAgICAgICAgICAgIGtleTogTWF0aC5yYW5kb20oKSxcclxuICAgICAgICAgICAgICAgIHNyYzogaW5zdGFncmFtLnNyYyxcclxuICAgICAgICAgICAgICAgIGNsaWNrOiAoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgd2luZG93LnNjcm9sbFRvKDAsIDApXHJcbiAgICAgICAgICAgICAgICAgICAgc2V0U2hvd0luc3RhZ3JhbU1vZGFsKHRydWUpXHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIGlkOiBcInZpYmVyXCIsXHJcbiAgICAgICAgICAgICAgICBrZXk6IE1hdGgucmFuZG9tKCksXHJcbiAgICAgICAgICAgICAgICBzcmM6IHZpYmVyLnNyYyxcclxuICAgICAgICAgICAgICAgIGNsaWNrOiAoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgd2luZG93LnNjcm9sbFRvKDAsIDApXHJcbiAgICAgICAgICAgICAgICAgICAgc2V0U2hvd1ZpYmVyTW9kYWwodHJ1ZSlcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfSxcclxuICAgICAgICBdLFxyXG4gICAgICAgIG1vZGFsX2NvbnRlbnRzID0ge1xyXG4gICAgICAgICAgICBwaG9uZToge1xyXG4gICAgICAgICAgICAgICAgdGV4dDogXCIrMzc0IDY0IDU0IDU5XCIsXHJcbiAgICAgICAgICAgICAgICB1cmw6IFwidGVsOiszNzQ5ODY0NTQ1N1wiXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIGZhY2Vib29rOiB7XHJcbiAgICAgICAgICAgICAgICB0ZXh0OiBcIkZhY2Vib29rXCIsXHJcbiAgICAgICAgICAgICAgICB1cmw6IFwiaHR0cHM6Ly93d3cuZmFjZWJvb2suY29tLyVEMCU5RiVEMSU4MCVEMCVCRSVEMCVCMyVEMCVCRCVEMCVCRSVEMCVCNyVEMSU4Qi0lRDAlQkQlRDAlQjAtJUQwJUE0JUQxJTgzJUQxJTgyJUQwJUIxJUQwJUJFJUQwJUJCLTEwNDk0MTM0NzU3NzkxMy9cIlxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICB0ZWxlZ3JhbToge1xyXG4gICAgICAgICAgICAgICAgdGV4dDogXCIrMzc0IDY0IDU0IDU5XCIsXHJcbiAgICAgICAgICAgICAgICB1cmw6IFwiaHR0cHM6Ly90ZWxlZ3JhbS5tZS9lcm1hYW5uXCJcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgd2F0c3VwOiB7XHJcbiAgICAgICAgICAgICAgICB0ZXh0OiBcIiszNzQgNjQgNTQgNTlcIixcclxuICAgICAgICAgICAgICAgIHVybDogXCJodHRwczovL2FwaS53aGF0c2FwcC5jb20vc2VuZD9waG9uZT0rMzc0OTg2NDU0NTdcIlxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICBpbnN0YWdyYW06IHtcclxuICAgICAgICAgICAgICAgIHRleHQ6IFwiSW5zdGFncmFtXCIsXHJcbiAgICAgICAgICAgICAgICB1cmw6IFwiaHR0cHM6Ly93d3cuaW5zdGFncmFtLmNvbS9wcm9nbm96eW5hNTUwLz91dG1fbWVkaXVtPWNvcHlfbGlua1wiXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIHZpYmVyOiB7XHJcbiAgICAgICAgICAgICAgICB0ZXh0OiBcIiszNzQgNjQgNTQgNTlcIixcclxuICAgICAgICAgICAgICAgIHVybDogXCJ2aWJlcjovL2NoYXQ/bnVtYmVyPSszNzQ5ODY0NTQ1N1wiXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIDw+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuY29udGFpbmVyfSByZWY9e3NvY2lhbE1lZGlhc1JlZn0+XHJcbiAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgaWNvbnMubWFwKGVsID0+IChcclxuICAgICAgICAgICAgICAgICAgICAgICAgPEljb25cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlkPXtlbC5pZH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGtleT17ZWwua2V5fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc3JjPXtlbC5zcmN9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGljaz17ZWwuY2xpY2t9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAgICApKVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAge3Nob3dQaG9uZU1vZGFsICYmIDxQaG9uZSBvbk1vZGFsQ2xvc2U9eygpID0+IHNldFNob3dQaG9uZU1vZGFsKGZhbHNlKX0gZGF0YT17bW9kYWxfY29udGVudHMucGhvbmV9IHBhcmVudD17c29jaWFsTWVkaWFzUmVmfSAvPn1cclxuICAgICAgICAgICAge3Nob3dGYWNib29rTW9kYWwgJiYgPEZhY2Vib29rIG9uTW9kYWxDbG9zZT17KCkgPT4gc2V0U2hvd0ZhY2Jvb2tNb2RhbChmYWxzZSl9IGRhdGE9e21vZGFsX2NvbnRlbnRzLmZhY2Vib29rfSBwYXJlbnQ9e3NvY2lhbE1lZGlhc1JlZn0gLz59XHJcbiAgICAgICAgICAgIHtzaG93VGVsZWdyYW1Nb2RhbCAmJiA8VGVsZWdyYW0gb25Nb2RhbENsb3NlPXsoKSA9PiBzZXRTaG93VGVsZWdyYW1Nb2RhbChmYWxzZSl9IGRhdGE9e21vZGFsX2NvbnRlbnRzLnRlbGVncmFtfSBwYXJlbnQ9e3NvY2lhbE1lZGlhc1JlZn0gLz59XHJcbiAgICAgICAgICAgIHtzaG93V2F0c1VwTW9kYWwgJiYgPFdhdHNVcCBvbk1vZGFsQ2xvc2U9eygpID0+IHNldFNob3dXYXRzVXBNb2RhbChmYWxzZSl9IGRhdGE9e21vZGFsX2NvbnRlbnRzLndhdHN1cH0gcGFyZW50PXtzb2NpYWxNZWRpYXNSZWZ9IC8+fVxyXG4gICAgICAgICAgICB7c2hvd0luc3RhZ3JhbU1vZGFsICYmIDxJbnN0YWdyYW0gb25Nb2RhbENsb3NlPXsoKSA9PiBzZXRTaG93SW5zdGFncmFtTW9kYWwoZmFsc2UpfSBkYXRhPXttb2RhbF9jb250ZW50cy5pbnN0YWdyYW19IHBhcmVudD17c29jaWFsTWVkaWFzUmVmfSAvPn1cclxuICAgICAgICAgICAge3Nob3dWaWJlck1vZGFsICYmIDxWaWJlciBvbk1vZGFsQ2xvc2U9eygpID0+IHNldFNob3dWaWJlck1vZGFsKGZhbHNlKX0gZGF0YT17bW9kYWxfY29udGVudHMudmliZXJ9IHBhcmVudD17c29jaWFsTWVkaWFzUmVmfSAvPn1cclxuICAgICAgICA8Lz5cclxuICAgIClcclxufVxyXG4iLCJpbXBvcnQgeyBNb2RhbCB9IGZyb20gJy4uLy4uL2NvbW1vbi9hdXRoL01vZGFsL01vZGFsJ1xyXG4vLyBzdHlsZXMgXHJcbmltcG9ydCBzdHlsZXMgZnJvbSAnLi9Db250YWN0cy5tb2R1bGUuc2NzcydcclxuaW1wb3J0IHsgY29udGFjdHNfZGF0YSB9IGZyb20gJy4vY29udGFjdHNfZGF0YSdcclxuLy8gaWNvbnNcclxuaW1wb3J0IGNsb3NlVmVjdG9yIGZyb20gJy9wdWJsaWMvaW1hZ2VzL2hlYWRlci9Tb2NpYWxNZWRpYS9jbG9zZVZlY3Rvci5wbmcnXHJcblxyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gQ29udGFjdHNNb2RhbCh7IG9uTW9kYWxDbG9zZSwgb3BlbmVkID0gZmFsc2UgfSkge1xyXG5cclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPE1vZGFsXHJcbiAgICAgICAgICAgIG9uQ2xvc2U9e29uTW9kYWxDbG9zZX1cclxuICAgICAgICAgICAgY29udGFpbmVyU3R5bGVzPXtgJHtzdHlsZXMuY29udGFpbmVyfSBgfVxyXG4gICAgICAgICAgICBjb250ZW50U3R5bGVzPXtgJHtzdHlsZXMuY29udGVudH0gJHtvcGVuZWQgPyBzdHlsZXMub3BlbiA6IHN0eWxlcy5jbG9zZX1gfVxyXG4gICAgICAgID5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5tb2RhbF9jb250ZW50fT5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuY29udGVudF9jb250YWluZXJ9PlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMudG9wfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGltZ1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc3JjPXtjbG9zZVZlY3Rvci5zcmN9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBhbHQ9XCJcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgb25DbGljaz17KCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uTW9kYWxDbG9zZSgpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignYm9keScpLnN0eWxlLm92ZXJmbG93ID0gJ3Zpc2libGUnXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMucm93c30+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnRhY3RzX2RhdGEubWFwKGVsID0+IChcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLnJvd30ga2V5PXtNYXRoLnJhbmRvbSgpfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5pbWd9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGltZyBzcmM9e2VsLmljb259IGFsdD1cImNvbnRhY3QtaWNvblwiIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLnRleHR9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHA+e2VsLnRleHR9PC9wPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICkpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8L01vZGFsPlxyXG4gICAgKVxyXG59XHJcbiIsImltcG9ydCBwaG9uZSBmcm9tICcvcHVibGljL2ltYWdlcy9oZWFkZXIvU29jaWFsTWVkaWEvcGhvbmUuc3ZnJ1xyXG5pbXBvcnQgZmFjZWJvb2sgZnJvbSAnL3B1YmxpYy9pbWFnZXMvaGVhZGVyL1NvY2lhbE1lZGlhL2ZhY2Vib29rLnN2ZydcclxuaW1wb3J0IHRlbGVncmFtIGZyb20gJy9wdWJsaWMvaW1hZ2VzL2hlYWRlci9Tb2NpYWxNZWRpYS90ZWxlZ3JhbS5zdmcnXHJcbmltcG9ydCB3YXRzdXAgZnJvbSAnL3B1YmxpYy9pbWFnZXMvaGVhZGVyL1NvY2lhbE1lZGlhL3dhdHN1cC5zdmcnXHJcbmltcG9ydCBpbnN0YWdyYW0gZnJvbSAnL3B1YmxpYy9pbWFnZXMvaGVhZGVyL1NvY2lhbE1lZGlhL2luc3RhZ3JhbS5zdmcnXHJcbmltcG9ydCB2aWJlciBmcm9tICcvcHVibGljL2ltYWdlcy9oZWFkZXIvU29jaWFsTWVkaWEvdmliZXIuc3ZnJ1xyXG5pbXBvcnQgZW1haWwgZnJvbSAnL3B1YmxpYy9pbWFnZXMvaGVhZGVyL1NvY2lhbE1lZGlhL2VtYWlsLnN2ZydcclxuXHJcbmV4cG9ydCBjb25zdCBjb250YWN0c19kYXRhID0gW1xyXG4gICAge1xyXG4gICAgICAgIGljb246cGhvbmUuc3JjLFxyXG4gICAgICAgIHRleHQ6XCIrMzQgNjcyIDMxNCA4MDhcIlxyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgICBpY29uOmZhY2Vib29rLnNyYyxcclxuICAgICAgICB0ZXh0OlwiXCJcclxuICAgIH1cclxuICAgICxcclxuICAgIHtcclxuICAgICAgICBpY29uOnRlbGVncmFtLnNyYyxcclxuICAgICAgICB0ZXh0OlwiXCJcclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgICAgaWNvbjp3YXRzdXAuc3JjLFxyXG4gICAgICAgIHRleHQ6XCIrMzQgNjcyIDMxNCA4MDhcIlxyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgICBpY29uOmluc3RhZ3JhbS5zcmMsXHJcbiAgICAgICAgdGV4dDpcIlwiXHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICAgIGljb246dmliZXIuc3JjLFxyXG4gICAgICAgIHRleHQ6XCIrMzQgNjcyIDMxNCA4MDhcIlxyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgICBpY29uOmVtYWlsLnNyYyxcclxuICAgICAgICB0ZXh0Olwibi54YWNoMTk4N0BtYWlsLnJ1XCJcclxuICAgIH1cclxuXSIsImltcG9ydCBzdHlsZXMgZnJvbSAnLi9JbnB1dENvbnRhaW5lci5tb2R1bGUuc2NzcydcclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBJbnB1dENvbnRhaW5lcih7XHJcbiAgICBsYWJlbCxcclxuICAgIGlkLFxyXG4gICAgdHlwZSxcclxuICAgIHBsYWNlaG9sZGVyLFxyXG4gICAgZXJyb3JzLFxyXG4gICAgb3RoZXIgfSkge1xyXG5cclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5jb250YWluZXJ9PlxyXG4gICAgICAgICAgICB7bGFiZWwgJiZcclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMubGFiZWxfY29udGVudH0+XHJcbiAgICAgICAgICAgICAgICAgICAgPGxhYmVsIGh0bWxGb3I9e2lkfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGltZ1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc3JjPXtsYWJlbC5zcmN9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBhbHQ9XCJpY29uXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAgICA8L2xhYmVsPlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5pbnB1dF9jb250YWluZXJ9PlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e2Vycm9ycyA/IHN0eWxlcy5pbnB1dF9lcnJvcl9jb250ZW50IDogc3R5bGVzLmlucHV0X3N1Y2Nlc3NfY29udGVudH0+XHJcbiAgICAgICAgICAgICAgICAgICAgPGlucHV0XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlkPXtpZH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgdHlwZT17dHlwZX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9e3BsYWNlaG9sZGVyfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICB7Li4ub3RoZXJ9XHJcbiAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgIClcclxufVxyXG4iLCJpbXBvcnQgeyB1c2VFZmZlY3QsIHVzZVN0YXRlLCB1c2VSZWYgfSBmcm9tICdyZWFjdCdcclxuaW1wb3J0IHN0eWxlcyBmcm9tICcuL01vZGFsLm1vZHVsZS5zY3NzJ1xyXG5pbXBvcnQgeyBjcmVhdGVQb3J0YWwgfSBmcm9tICdyZWFjdC1kb20nXHJcblxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIE1vZGFsKHtcclxuICAgIG9uQ2xvc2UsXHJcbiAgICAvLyBjbG9zZVdpdGhWZWN0b3JlID0gbnVsbCxcclxuICAgIGNoaWxkcmVuLFxyXG4gICAgY29udGFpbmVyU3R5bGVzID0gbnVsbCxcclxuICAgIGNvbnRlbnRTdHlsZXMgPSBudWxsLFxyXG4gICAgb3RoZXJTdHlsZXMgPSBudWxsLFxyXG4gICAgcG9ydGFsTG9jYXRpb24gPSAnbW9kYWwtY29udGVpbmVyJyB9KSB7XHJcblxyXG5cclxuXHJcbiAgICBjb25zdFxyXG4gICAgICAgIFtzaG93TW9kYWwsIHNldFNob3dNb2RhbF0gPSB1c2VTdGF0ZShmYWxzZSksXHJcbiAgICAgICAgW3BhZ2VPdmVyZmxvdywgc2V0UGFnZU92ZXJmbG93XSA9IHVzZVN0YXRlKHNob3dNb2RhbCksXHJcbiAgICAgICAgYm9keSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ2JvZHknKVxyXG5cclxuICAgIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICAgICAgc2V0U2hvd01vZGFsKHRydWUpXHJcbiAgICAgICAgc2V0UGFnZU92ZXJmbG93KHRydWUpXHJcbiAgICAgICAgZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcihcIm1vdXNlZG93blwiLCBoYW5kbGVDbG9zZSk7XHJcbiAgICAgICAgXHJcbiAgICAgICAgcmV0dXJuICgpID0+IHtcclxuICAgICAgICAgICAgZG9jdW1lbnQucmVtb3ZlRXZlbnRMaXN0ZW5lcihcIm1vdXNlZG93blwiLCBoYW5kbGVDbG9zZSk7XHJcbiAgICAgICAgICAgIGJvZHkuc3R5bGUub3ZlcmZsb3cgPSAndmlzaWJsZSdcclxuICAgICAgICB9O1xyXG4gICAgfSwgW10pXHJcblxyXG4gICAgY29uc3Qgbm9kZSA9IHVzZVJlZigpXHJcblxyXG5cclxuXHJcbiAgICBjb25zdCBoYW5kbGVDbG9zZSA9IGUgPT4ge1xyXG4gICAgICAgIGlmIChub2RlPy5jdXJyZW50Py5jb250YWlucyhlLnRhcmdldCkpIHtcclxuICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIHNldFBhZ2VPdmVyZmxvdyhmYWxzZSlcclxuICAgICAgICAgICAgb25DbG9zZSgpXHJcbiAgICAgICAgfVxyXG4gICAgfSxcclxuICAgICAgICBkaW5hbWljVG9wID0gd2luZG93LnNjcm9sbFlcclxuXHJcbiAgICBwYWdlT3ZlcmZsb3cgPyBib2R5LnN0eWxlLm92ZXJmbG93ID0gJ2hpZGRlbicgOiBib2R5LnN0eWxlLm92ZXJmbG93ID0gJ3Zpc2libGUnXHJcblxyXG4gICAgY29uc3QgbW9kYWwgPSAoXHJcbiAgICAgICAgPGRpdlxyXG4gICAgICAgICAgICBjbGFzc05hbWU9e2Ake3N0eWxlcy5tb2RhbENvbnRlaW5lcn0gJHtjb250YWluZXJTdHlsZXN9YH1cclxuICAgICAgICAgICAgc3R5bGU9e3tcclxuICAgICAgICAgICAgICAgIHRvcDogZGluYW1pY1RvcCArICdweCdcclxuICAgICAgICAgICAgfX0+XHJcbiAgICAgICAgICAgIDxkaXZcclxuICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17YCR7c3R5bGVzLm1vZGFsQ29udGVudH0gJHtjb250ZW50U3R5bGVzfWB9XHJcbiAgICAgICAgICAgICAgICBzdHlsZT17b3RoZXJTdHlsZXN9XHJcbiAgICAgICAgICAgICAgICByZWY9e25vZGV9XHJcbiAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICBjaGlsZHJlblxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgIClcclxuICAgIGlmIChzaG93TW9kYWwpIHtcclxuICAgICAgICByZXR1cm4gY3JlYXRlUG9ydGFsKFxyXG4gICAgICAgICAgICBtb2RhbCxcclxuICAgICAgICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQocG9ydGFsTG9jYXRpb24pXHJcbiAgICAgICAgKVxyXG4gICAgfVxyXG4gICAgZWxzZSByZXR1cm4gbnVsbFxyXG59XHJcbiIsImV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIEVycm9yKHsgY2hpbGRyZW4gfSkge1xyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8PlxyXG4gICAgICAgICAgICA8bWFpbj5cclxuICAgICAgICAgICAgICAgIHtjaGlsZHJlbn1cclxuICAgICAgICAgICAgPC9tYWluPlxyXG4gICAgICAgIDwvPlxyXG4gICAgKVxyXG59XHJcbiIsImltcG9ydCB7IEZvb3RlciB9IGZyb20gJy4uL2NvbXBvbmVudHMvRm9vdGVyL0Zvb3RlcidcclxuaW1wb3J0IHsgSGVhZGVyIH0gZnJvbSAnLi4vY29tcG9uZW50cy9IZWFkZXIvSGVhZGVyJ1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gTWFpbih7IGNoaWxkcmVuIH0pIHtcclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPD5cclxuICAgICAgICAgICAgPEhlYWRlciBtYWluc1BhZ2VzPXt0cnVlfSAvPlxyXG4gICAgICAgICAgICA8bWFpbj5cclxuICAgICAgICAgICAgICAgIHtjaGlsZHJlbn1cclxuICAgICAgICAgICAgPC9tYWluPlxyXG4gICAgICAgICAgICA8Rm9vdGVyIC8+XHJcbiAgICAgICAgPC8+XHJcbiAgICApXHJcbn1cclxuIiwiaW1wb3J0IHsgSGVhZGVyIH0gZnJvbSAnLi4vY29tcG9uZW50cy9IZWFkZXIvSGVhZGVyJ1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gUmVnaXN0ZXJMYXlvdXQoeyBjaGlsZHJlbiB9KSB7XHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIDw+XHJcbiAgICAgICAgICAgIDxIZWFkZXIgbWFpbnNQYWdlcz17ZmFsc2V9Lz5cclxuICAgICAgICAgICAgPG1haW4+XHJcbiAgICAgICAgICAgICAgICB7Y2hpbGRyZW59XHJcbiAgICAgICAgICAgIDwvbWFpbj5cclxuICAgICAgICA8Lz5cclxuICAgIClcclxufVxyXG4iLCJpbXBvcnQgeyBGb290ZXIgfSBmcm9tICcuLi9jb21wb25lbnRzL0Zvb3Rlci9Gb290ZXInXHJcbmltcG9ydCB7IEhlYWRlciB9IGZyb20gJy4uL2NvbXBvbmVudHMvSGVhZGVyL0hlYWRlcidcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIE1haW4oeyBjaGlsZHJlbiB9KSB7XHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIDw+XHJcbiAgICAgICAgICAgIDxIZWFkZXIgbWFpbnNQYWdlcz17ZmFsc2V9IC8+XHJcbiAgICAgICAgICAgIDxtYWluPlxyXG4gICAgICAgICAgICAgICAge2NoaWxkcmVufVxyXG4gICAgICAgICAgICA8L21haW4+XHJcbiAgICAgICAgICAgIDxGb290ZXIgLz5cclxuICAgICAgICA8Lz5cclxuICAgIClcclxufVxyXG4iLCJpbXBvcnQgTWFpbiBmcm9tIFwiLi9NYWluXCI7XHJcbmltcG9ydCBXaXRob3V0UGhvdG8gZnJvbSBcIi4vV2l0aG91dFBob3RvXCI7XHJcbmltcG9ydCBSZWdpc3RlciBmcm9tIFwiLi9SZWdpc3RlclwiO1xyXG5pbXBvcnQgRXJyb3IgZnJvbSBcIi4vRXJyb3JcIlxyXG5cclxuY29uc3QgbGF5b3V0cyA9IHtcclxuICBtYWluOiBNYWluLFxyXG4gIHdpdGhvdXRQaG90bzogV2l0aG91dFBob3RvLFxyXG4gIHJlZ2lzdGVyOiBSZWdpc3RlclxyXG59O1xyXG5cclxuY29uc3QgTGF5b3V0V3JhcHBlciA9IChwcm9wcykgPT4ge1xyXG4gIC8vIHRvIGdldCB0aGUgdGV4dCB2YWx1ZSBvZiB0aGUgYXNzaWduZWQgbGF5b3V0IG9mIGVhY2ggY29tcG9uZW50XHJcbiAgY29uc3QgTGF5b3V0ID0gbGF5b3V0c1twcm9wcy5jaGlsZHJlbi50eXBlLmxheW91dF07XHJcbiAgLy8gaWYgd2UgaGF2ZSBhIHJlZ2lzdGVyZWQgbGF5b3V0IHJlbmRlciBjaGlsZHJlbiB3aXRoIHNhaWQgbGF5b3V0XHJcbiAgaWYgKExheW91dCAhPSBudWxsKSB7XHJcbiAgICByZXR1cm4gPExheW91dCB7Li4ucHJvcHN9Pntwcm9wcy5jaGlsZHJlbn08L0xheW91dD47XHJcbiAgfVxyXG4gIC8vIGlmIG5vdCByZW5kZXIgY2hpbGRyZW4gd2l0aCBmcmFnbWVudFxyXG4gIHJldHVybiA8RXJyb3Igey4uLnByb3BzfT57cHJvcHMuY2hpbGRyZW59PC9FcnJvcj47XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBMYXlvdXRXcmFwcGVyO1xyXG4iLCJleHBvcnQgY29uc3QgaG9zdCA9IFwiaHR0cHM6Ly93d3cuZm9vdGJldDI0LmNvbS9hcGlcIjtcclxuIiwiaW1wb3J0IGF4aW9zIGZyb20gXCJheGlvc1wiO1xyXG5cclxuXHJcbmV4cG9ydCBjb25zdCByZXF1ZXN0ID0gKCBkZXN0aW5hdGlvbiwgcGF5bG9hZCA9IG51bGwsIG9wdGlvbnMgPSBudWxsICkgPT4gbmV3IFByb21pc2UoICggcnNsdiwgcmpjdCApID0+IHtcclxuICBsZXQgaGVhZGVycyA9IHt9O1xyXG5cclxuICBpZiAoIG9wdGlvbnMgKSB7XHJcbiAgICBpZiAoIG9wdGlvbnMuYXV0aCA9PT0gdHJ1ZSApIHtcclxuICAgICAgaGVhZGVycyA9IHtcclxuICAgICAgICAuLi5oZWFkZXJzLFxyXG4gICAgICAgIEF1dGhvcml6YXRpb246IGBCZWFyZXIgJHtnZXRDb29raWUoYGFjY2Vzcy10b2tlbmApfWAgfHwgYGAgLy8gZm9yIG1vc3Qgb2YgcmVxdWVzdHNcclxuICAgICAgfTtcclxuICAgIH1cclxuICAgIGlmICggYGhlYWRlcnNgIGluIG9wdGlvbnMgJiYgb3B0aW9ucy5oZWFkZXJzIGluc3RhbmNlb2YgT2JqZWN0ICkge1xyXG4gICAgICBoZWFkZXJzID0geyAuLi5oZWFkZXJzLCAuLi5vcHRpb25zLmhlYWRlcnMgfVxyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgY29uc29sZS5sb2coIGBzdGFydCBsb2FkaW5nYCApO1xyXG4gIGF4aW9zKHtcclxuICAgIG1ldGhvZDogZGVzdGluYXRpb24ubWV0aG9kLFxyXG4gICAgdXJsOiBkZXN0aW5hdGlvbi51cmwsXHJcbiAgICBoZWFkZXJzLFxyXG4gICAgZGF0YTogcGF5bG9hZCB8fCB7fVxyXG4gIH0pXHJcbiAgLnRoZW4oIHJzbHYgKVxyXG4gIC5jYXRjaCggcmpjdCApXHJcbiAgLmZpbmFsbHkoICgpID0+IGNvbnNvbGUubG9nKCBgZW5kIGxvYWRpbmdgICkgKVxyXG5cclxufSk7XHJcblxyXG5leHBvcnQgY29uc3QgZ2V0Q29va2llID0gbmFtZSA9PiB7XHJcbiAgdmFyIG5hbWVFUSA9IG5hbWUgKyBcIj1cIjtcclxuICB2YXIgY2EgPSBkb2N1bWVudC5jb29raWUuc3BsaXQoJzsnKTtcclxuXHJcbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBjYS5sZW5ndGg7IGkrKykge1xyXG4gICAgdmFyIGMgPSBjYVtpXTtcclxuXHJcbiAgICB3aGlsZSAoYy5jaGFyQXQoMCkgPT0gJyAnKSB7XHJcbiAgICAgIGMgPSBjLnN1YnN0cmluZygxLCBjLmxlbmd0aCk7XHJcbiAgICB9XHJcblxyXG4gICAgaWYgKGMuaW5kZXhPZihuYW1lRVEpID09IDApIHJldHVybiBjLnN1YnN0cmluZyhuYW1lRVEubGVuZ3RoLCBjLmxlbmd0aCk7XHJcbiAgfVxyXG5cclxuICByZXR1cm4gbnVsbDtcclxufVxyXG5cclxuZXhwb3J0IGNvbnN0IHJlbW92ZUNvb2tpZSA9IG5hbWUgPT4ge1xyXG4gIGRvY3VtZW50LmNvb2tpZSA9IG5hbWUgKyAnPTsgUGF0aD0vOyBFeHBpcmVzPVRodSwgMDEgSmFuIDE5NzAgMDA6MDA6MDEgR01UOyc7XHJcbn1cclxuXHJcblxyXG5leHBvcnQgY29uc3Qgc2V0Q29va2llID0gKG5hbWUsIHZhbHVlLCBkYXlzKSA9PiB7XHJcbiAgbGV0IGV4cGlyZXMgPSBcIlwiO1xyXG5cclxuICBpZiAoZGF5cykge1xyXG4gICAgbGV0IGRhdGUgPSBuZXcgRGF0ZSgpO1xyXG4gICAgZGF0ZS5zZXRUaW1lKGRhdGUuZ2V0VGltZSgpICsgZGF5cyAqIDI0ICogNjAgKiA2MCAqIDEwMDApO1xyXG4gICAgZXhwaXJlcyA9IFwiOyBleHBpcmVzPVwiICsgZGF0ZS50b1VUQ1N0cmluZygpO1xyXG4gIH1cclxuXHJcbiAgZG9jdW1lbnQuY29va2llID0gbmFtZSArIFwiPVwiICsgKHZhbHVlIHx8IFwiXCIpICsgZXhwaXJlcyArIFwiOyBwYXRoPS9cIjtcclxufVxyXG4iLCJpbXBvcnQgeyBob3N0IH0gZnJvbSBcIi4vY29uc3RhbnRzXCJcclxuXHJcbmNvbnN0IEFVVEhfVVJMID0gaG9zdCArIGBhdXRoYDtcclxuY29uc3QgQUNDT1VOVF9VUkwgPSBob3N0ICsgYGFjY291bnRgXHJcblxyXG5leHBvcnQgY29uc3QgUkVHSVNURVIgPSB7XHJcbiAgICB1cmw6IEFVVEhfVVJMICsgJy9yZWdpc3RyYXRpb24nLFxyXG4gICAgbWV0aG9kOiAncG9zdCdcclxufVxyXG5cclxuZXhwb3J0IGNvbnN0IExPR0lOID0ge1xyXG4gICAgdXJsOiBBVVRIX1VSTCArICcvbG9naW4nLFxyXG4gICAgbWV0aG9kOiAncG9zdCdcclxufVxyXG5cclxuZXhwb3J0IGNvbnN0IEdFVF9BQ0NPVU5UX0lORk8gPSB7XHJcbiAgICB1cmw6IEFDQ09VTlRfVVJMICsgJy9pbmZvJyxcclxuICAgIG1ldGhvZDogJ2dldCdcclxufVxyXG5cclxuZXhwb3J0IGNvbnN0IFNUQVJUX1JFU0VUX1BBU1NXT1JEID0gZW1haWwgPT4gKHtcclxuICAgIHVybDogQVVUSF9VUkwgKyBgL3Bhc3N3b3JkL3Jlc2V0P2VtYWlsPSR7ZW1haWx9YCxcclxuICAgIG1ldGhvZDogJ3Bvc3QnXHJcbn0pXHJcblxyXG5cclxuZXhwb3J0IGNvbnN0IFZFUklGWV9QQVNTV09SRF9SRVNFVCA9IHtcclxuICAgIHVybDogQVVUSF9VUkwgKyBgL3Bhc3N3b3JkL3ZlcmlmeV9jb2RlYCxcclxuICAgIG1ldGhvZDogJ3B1dCcgICAgXHJcbn1cclxuXHJcbmV4cG9ydCBjb25zdCBTRVRfTkVXX1BBU1NXT1JEID0ge1xyXG4gICAgdXJsOiBBVVRIX1VSTCArIGAvcGFzc3dvcmQvbmV3X3Bhc3N3b3JkIGAsXHJcbiAgICBtZXRob2Q6ICdwdXQnICAgIFxyXG59XHJcblxyXG5leHBvcnQgY29uc3QgR0VUX05FV1MgPSB7XHJcbiAgICB1cmw6IGhvc3QgKyBgYWRtaW4vbmV3c2AsXHJcbiAgICBtZXRob2Q6IGBnZXRgXHJcbn1cclxuXHJcbmV4cG9ydCBjb25zdCBHRVRfTUFUQ0hFUyA9IHtcclxuICAgIHVybDogaG9zdCArIGBhZG1pbi9tYXRjaC1vZi10aGUtZGF5YCxcclxuICAgIG1ldGhvZDogYGdldGBcclxufVxyXG5cclxuZXhwb3J0IGNvbnN0IEdFVF9NQVRDSEVTX09GX05FWFRfREFZID0ge1xyXG4gICAgdXJsOiBob3N0ICsgYGFkbWluL21hdGNoLW9mLXRoZS1kYXk/dHlwZT1uZXh0X2RheWAsXHJcbiAgICBtZXRob2Q6IGBnZXRgXHJcbn1cclxuXHJcbmV4cG9ydCBjb25zdCBHRVRfUFJFRElDVElPTlMgPSB7XHJcbiAgICB1cmw6IGhvc3QgKyBgYWRtaW4vcHJlZGljdGlvbmAsXHJcbiAgICBtZXRob2Q6IGBnZXRgXHJcbn1cclxuXHJcbmV4cG9ydCBjb25zdCBHRVRfRkVFREJBQ0sgPSBpZCA9PiAoe1xyXG4gICAgdXJsOiBob3N0ICsgYGZlZWRiYWNrLyR7aWR9P3NvcnRfYnk9Y3JlYXRlZF9hdCZvcmRlcl9ieT1kZXNjYCxcclxuICAgIG1ldGhvZDogYGdldGBcclxufSlcclxuXHJcbmV4cG9ydCBjb25zdCBHRVRfTUFUQ0hFU19CWV9UWVBFID0gdHlwZSA9PiAoe1xyXG4gICAgdXJsOiBob3N0ICsgYGFkbWluL2dhbWU/dHlwZT0ke3R5cGV9YCxcclxuICAgIG1ldGhvZDogYGdldGBcclxufSlcclxuIiwiXCJ1c2Ugc3RyaWN0XCI7dmFyIF9pbnRlcm9wUmVxdWlyZVdpbGRjYXJkPXJlcXVpcmUoXCJAYmFiZWwvcnVudGltZS9oZWxwZXJzL2ludGVyb3BSZXF1aXJlV2lsZGNhcmRcIik7ZXhwb3J0cy5fX2VzTW9kdWxlPXRydWU7ZXhwb3J0cy5kZWZhdWx0PXZvaWQgMDt2YXIgX3JlYWN0PV9pbnRlcm9wUmVxdWlyZVdpbGRjYXJkKHJlcXVpcmUoXCJyZWFjdFwiKSk7dmFyIF9yb3V0ZXI9cmVxdWlyZShcIi4uL25leHQtc2VydmVyL2xpYi9yb3V0ZXIvcm91dGVyXCIpO3ZhciBfcm91dGVyMj1yZXF1aXJlKFwiLi9yb3V0ZXJcIik7dmFyIF91c2VJbnRlcnNlY3Rpb249cmVxdWlyZShcIi4vdXNlLWludGVyc2VjdGlvblwiKTtjb25zdCBwcmVmZXRjaGVkPXt9O2Z1bmN0aW9uIHByZWZldGNoKHJvdXRlcixocmVmLGFzLG9wdGlvbnMpe2lmKHR5cGVvZiB3aW5kb3c9PT0ndW5kZWZpbmVkJ3x8IXJvdXRlcilyZXR1cm47aWYoISgwLF9yb3V0ZXIuaXNMb2NhbFVSTCkoaHJlZikpcmV0dXJuOy8vIFByZWZldGNoIHRoZSBKU09OIHBhZ2UgaWYgYXNrZWQgKG9ubHkgaW4gdGhlIGNsaWVudClcbi8vIFdlIG5lZWQgdG8gaGFuZGxlIGEgcHJlZmV0Y2ggZXJyb3IgaGVyZSBzaW5jZSB3ZSBtYXkgYmVcbi8vIGxvYWRpbmcgd2l0aCBwcmlvcml0eSB3aGljaCBjYW4gcmVqZWN0IGJ1dCB3ZSBkb24ndFxuLy8gd2FudCB0byBmb3JjZSBuYXZpZ2F0aW9uIHNpbmNlIHRoaXMgaXMgb25seSBhIHByZWZldGNoXG5yb3V0ZXIucHJlZmV0Y2goaHJlZixhcyxvcHRpb25zKS5jYXRjaChlcnI9PntpZihwcm9jZXNzLmVudi5OT0RFX0VOViE9PSdwcm9kdWN0aW9uJyl7Ly8gcmV0aHJvdyB0byBzaG93IGludmFsaWQgVVJMIGVycm9yc1xudGhyb3cgZXJyO319KTtjb25zdCBjdXJMb2NhbGU9b3B0aW9ucyYmdHlwZW9mIG9wdGlvbnMubG9jYWxlIT09J3VuZGVmaW5lZCc/b3B0aW9ucy5sb2NhbGU6cm91dGVyJiZyb3V0ZXIubG9jYWxlOy8vIEpvaW4gb24gYW4gaW52YWxpZCBVUkkgY2hhcmFjdGVyXG5wcmVmZXRjaGVkW2hyZWYrJyUnK2FzKyhjdXJMb2NhbGU/JyUnK2N1ckxvY2FsZTonJyldPXRydWU7fWZ1bmN0aW9uIGlzTW9kaWZpZWRFdmVudChldmVudCl7Y29uc3R7dGFyZ2V0fT1ldmVudC5jdXJyZW50VGFyZ2V0O3JldHVybiB0YXJnZXQmJnRhcmdldCE9PSdfc2VsZid8fGV2ZW50Lm1ldGFLZXl8fGV2ZW50LmN0cmxLZXl8fGV2ZW50LnNoaWZ0S2V5fHxldmVudC5hbHRLZXl8fC8vIHRyaWdnZXJzIHJlc291cmNlIGRvd25sb2FkXG5ldmVudC5uYXRpdmVFdmVudCYmZXZlbnQubmF0aXZlRXZlbnQud2hpY2g9PT0yO31mdW5jdGlvbiBsaW5rQ2xpY2tlZChlLHJvdXRlcixocmVmLGFzLHJlcGxhY2Usc2hhbGxvdyxzY3JvbGwsbG9jYWxlKXtjb25zdHtub2RlTmFtZX09ZS5jdXJyZW50VGFyZ2V0O2lmKG5vZGVOYW1lPT09J0EnJiYoaXNNb2RpZmllZEV2ZW50KGUpfHwhKDAsX3JvdXRlci5pc0xvY2FsVVJMKShocmVmKSkpey8vIGlnbm9yZSBjbGljayBmb3IgYnJvd3NlcuKAmXMgZGVmYXVsdCBiZWhhdmlvclxucmV0dXJuO31lLnByZXZlbnREZWZhdWx0KCk7Ly8gIGF2b2lkIHNjcm9sbCBmb3IgdXJscyB3aXRoIGFuY2hvciByZWZzXG5pZihzY3JvbGw9PW51bGwmJmFzLmluZGV4T2YoJyMnKT49MCl7c2Nyb2xsPWZhbHNlO30vLyByZXBsYWNlIHN0YXRlIGluc3RlYWQgb2YgcHVzaCBpZiBwcm9wIGlzIHByZXNlbnRcbnJvdXRlcltyZXBsYWNlPydyZXBsYWNlJzoncHVzaCddKGhyZWYsYXMse3NoYWxsb3csbG9jYWxlLHNjcm9sbH0pO31mdW5jdGlvbiBMaW5rKHByb3BzKXtpZihwcm9jZXNzLmVudi5OT0RFX0VOViE9PSdwcm9kdWN0aW9uJyl7ZnVuY3Rpb24gY3JlYXRlUHJvcEVycm9yKGFyZ3Mpe3JldHVybiBuZXcgRXJyb3IoYEZhaWxlZCBwcm9wIHR5cGU6IFRoZSBwcm9wIFxcYCR7YXJncy5rZXl9XFxgIGV4cGVjdHMgYSAke2FyZ3MuZXhwZWN0ZWR9IGluIFxcYDxMaW5rPlxcYCwgYnV0IGdvdCBcXGAke2FyZ3MuYWN0dWFsfVxcYCBpbnN0ZWFkLmArKHR5cGVvZiB3aW5kb3chPT0ndW5kZWZpbmVkJz9cIlxcbk9wZW4geW91ciBicm93c2VyJ3MgY29uc29sZSB0byB2aWV3IHRoZSBDb21wb25lbnQgc3RhY2sgdHJhY2UuXCI6JycpKTt9Ly8gVHlwZVNjcmlwdCB0cmljayBmb3IgdHlwZS1ndWFyZGluZzpcbmNvbnN0IHJlcXVpcmVkUHJvcHNHdWFyZD17aHJlZjp0cnVlfTtjb25zdCByZXF1aXJlZFByb3BzPU9iamVjdC5rZXlzKHJlcXVpcmVkUHJvcHNHdWFyZCk7cmVxdWlyZWRQcm9wcy5mb3JFYWNoKGtleT0+e2lmKGtleT09PSdocmVmJyl7aWYocHJvcHNba2V5XT09bnVsbHx8dHlwZW9mIHByb3BzW2tleV0hPT0nc3RyaW5nJyYmdHlwZW9mIHByb3BzW2tleV0hPT0nb2JqZWN0Jyl7dGhyb3cgY3JlYXRlUHJvcEVycm9yKHtrZXksZXhwZWN0ZWQ6J2BzdHJpbmdgIG9yIGBvYmplY3RgJyxhY3R1YWw6cHJvcHNba2V5XT09PW51bGw/J251bGwnOnR5cGVvZiBwcm9wc1trZXldfSk7fX1lbHNley8vIFR5cGVTY3JpcHQgdHJpY2sgZm9yIHR5cGUtZ3VhcmRpbmc6XG4vLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgQHR5cGVzY3JpcHQtZXNsaW50L25vLXVudXNlZC12YXJzXG5jb25zdCBfPWtleTt9fSk7Ly8gVHlwZVNjcmlwdCB0cmljayBmb3IgdHlwZS1ndWFyZGluZzpcbmNvbnN0IG9wdGlvbmFsUHJvcHNHdWFyZD17YXM6dHJ1ZSxyZXBsYWNlOnRydWUsc2Nyb2xsOnRydWUsc2hhbGxvdzp0cnVlLHBhc3NIcmVmOnRydWUscHJlZmV0Y2g6dHJ1ZSxsb2NhbGU6dHJ1ZX07Y29uc3Qgb3B0aW9uYWxQcm9wcz1PYmplY3Qua2V5cyhvcHRpb25hbFByb3BzR3VhcmQpO29wdGlvbmFsUHJvcHMuZm9yRWFjaChrZXk9Pntjb25zdCB2YWxUeXBlPXR5cGVvZiBwcm9wc1trZXldO2lmKGtleT09PSdhcycpe2lmKHByb3BzW2tleV0mJnZhbFR5cGUhPT0nc3RyaW5nJyYmdmFsVHlwZSE9PSdvYmplY3QnKXt0aHJvdyBjcmVhdGVQcm9wRXJyb3Ioe2tleSxleHBlY3RlZDonYHN0cmluZ2Agb3IgYG9iamVjdGAnLGFjdHVhbDp2YWxUeXBlfSk7fX1lbHNlIGlmKGtleT09PSdsb2NhbGUnKXtpZihwcm9wc1trZXldJiZ2YWxUeXBlIT09J3N0cmluZycpe3Rocm93IGNyZWF0ZVByb3BFcnJvcih7a2V5LGV4cGVjdGVkOidgc3RyaW5nYCcsYWN0dWFsOnZhbFR5cGV9KTt9fWVsc2UgaWYoa2V5PT09J3JlcGxhY2UnfHxrZXk9PT0nc2Nyb2xsJ3x8a2V5PT09J3NoYWxsb3cnfHxrZXk9PT0ncGFzc0hyZWYnfHxrZXk9PT0ncHJlZmV0Y2gnKXtpZihwcm9wc1trZXldIT1udWxsJiZ2YWxUeXBlIT09J2Jvb2xlYW4nKXt0aHJvdyBjcmVhdGVQcm9wRXJyb3Ioe2tleSxleHBlY3RlZDonYGJvb2xlYW5gJyxhY3R1YWw6dmFsVHlwZX0pO319ZWxzZXsvLyBUeXBlU2NyaXB0IHRyaWNrIGZvciB0eXBlLWd1YXJkaW5nOlxuLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIEB0eXBlc2NyaXB0LWVzbGludC9uby11bnVzZWQtdmFyc1xuY29uc3QgXz1rZXk7fX0pOy8vIFRoaXMgaG9vayBpcyBpbiBhIGNvbmRpdGlvbmFsIGJ1dCB0aGF0IGlzIG9rIGJlY2F1c2UgYHByb2Nlc3MuZW52Lk5PREVfRU5WYCBuZXZlciBjaGFuZ2VzXG4vLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgcmVhY3QtaG9va3MvcnVsZXMtb2YtaG9va3NcbmNvbnN0IGhhc1dhcm5lZD1fcmVhY3QuZGVmYXVsdC51c2VSZWYoZmFsc2UpO2lmKHByb3BzLnByZWZldGNoJiYhaGFzV2FybmVkLmN1cnJlbnQpe2hhc1dhcm5lZC5jdXJyZW50PXRydWU7Y29uc29sZS53YXJuKCdOZXh0LmpzIGF1dG8tcHJlZmV0Y2hlcyBhdXRvbWF0aWNhbGx5IGJhc2VkIG9uIHZpZXdwb3J0LiBUaGUgcHJlZmV0Y2ggYXR0cmlidXRlIGlzIG5vIGxvbmdlciBuZWVkZWQuIE1vcmU6IGh0dHBzOi8vbmV4dGpzLm9yZy9kb2NzL21lc3NhZ2VzL3ByZWZldGNoLXRydWUtZGVwcmVjYXRlZCcpO319Y29uc3QgcD1wcm9wcy5wcmVmZXRjaCE9PWZhbHNlO2NvbnN0IHJvdXRlcj0oMCxfcm91dGVyMi51c2VSb3V0ZXIpKCk7Y29uc3R7aHJlZixhc309X3JlYWN0LmRlZmF1bHQudXNlTWVtbygoKT0+e2NvbnN0W3Jlc29sdmVkSHJlZixyZXNvbHZlZEFzXT0oMCxfcm91dGVyLnJlc29sdmVIcmVmKShyb3V0ZXIscHJvcHMuaHJlZix0cnVlKTtyZXR1cm57aHJlZjpyZXNvbHZlZEhyZWYsYXM6cHJvcHMuYXM/KDAsX3JvdXRlci5yZXNvbHZlSHJlZikocm91dGVyLHByb3BzLmFzKTpyZXNvbHZlZEFzfHxyZXNvbHZlZEhyZWZ9O30sW3JvdXRlcixwcm9wcy5ocmVmLHByb3BzLmFzXSk7bGV0e2NoaWxkcmVuLHJlcGxhY2Usc2hhbGxvdyxzY3JvbGwsbG9jYWxlfT1wcm9wczsvLyBEZXByZWNhdGVkLiBXYXJuaW5nIHNob3duIGJ5IHByb3BUeXBlIGNoZWNrLiBJZiB0aGUgY2hpbGRyZW4gcHJvdmlkZWQgaXMgYSBzdHJpbmcgKDxMaW5rPmV4YW1wbGU8L0xpbms+KSB3ZSB3cmFwIGl0IGluIGFuIDxhPiB0YWdcbmlmKHR5cGVvZiBjaGlsZHJlbj09PSdzdHJpbmcnKXtjaGlsZHJlbj0vKiNfX1BVUkVfXyovX3JlYWN0LmRlZmF1bHQuY3JlYXRlRWxlbWVudChcImFcIixudWxsLGNoaWxkcmVuKTt9Ly8gVGhpcyB3aWxsIHJldHVybiB0aGUgZmlyc3QgY2hpbGQsIGlmIG11bHRpcGxlIGFyZSBwcm92aWRlZCBpdCB3aWxsIHRocm93IGFuIGVycm9yXG5sZXQgY2hpbGQ7aWYocHJvY2Vzcy5lbnYuTk9ERV9FTlY9PT0nZGV2ZWxvcG1lbnQnKXt0cnl7Y2hpbGQ9X3JlYWN0LkNoaWxkcmVuLm9ubHkoY2hpbGRyZW4pO31jYXRjaChlcnIpe3Rocm93IG5ldyBFcnJvcihgTXVsdGlwbGUgY2hpbGRyZW4gd2VyZSBwYXNzZWQgdG8gPExpbms+IHdpdGggXFxgaHJlZlxcYCBvZiBcXGAke3Byb3BzLmhyZWZ9XFxgIGJ1dCBvbmx5IG9uZSBjaGlsZCBpcyBzdXBwb3J0ZWQgaHR0cHM6Ly9uZXh0anMub3JnL2RvY3MvbWVzc2FnZXMvbGluay1tdWx0aXBsZS1jaGlsZHJlbmArKHR5cGVvZiB3aW5kb3chPT0ndW5kZWZpbmVkJz9cIlxcbk9wZW4geW91ciBicm93c2VyJ3MgY29uc29sZSB0byB2aWV3IHRoZSBDb21wb25lbnQgc3RhY2sgdHJhY2UuXCI6JycpKTt9fWVsc2V7Y2hpbGQ9X3JlYWN0LkNoaWxkcmVuLm9ubHkoY2hpbGRyZW4pO31jb25zdCBjaGlsZFJlZj1jaGlsZCYmdHlwZW9mIGNoaWxkPT09J29iamVjdCcmJmNoaWxkLnJlZjtjb25zdFtzZXRJbnRlcnNlY3Rpb25SZWYsaXNWaXNpYmxlXT0oMCxfdXNlSW50ZXJzZWN0aW9uLnVzZUludGVyc2VjdGlvbikoe3Jvb3RNYXJnaW46JzIwMHB4J30pO2NvbnN0IHNldFJlZj1fcmVhY3QuZGVmYXVsdC51c2VDYWxsYmFjayhlbD0+e3NldEludGVyc2VjdGlvblJlZihlbCk7aWYoY2hpbGRSZWYpe2lmKHR5cGVvZiBjaGlsZFJlZj09PSdmdW5jdGlvbicpY2hpbGRSZWYoZWwpO2Vsc2UgaWYodHlwZW9mIGNoaWxkUmVmPT09J29iamVjdCcpe2NoaWxkUmVmLmN1cnJlbnQ9ZWw7fX19LFtjaGlsZFJlZixzZXRJbnRlcnNlY3Rpb25SZWZdKTsoMCxfcmVhY3QudXNlRWZmZWN0KSgoKT0+e2NvbnN0IHNob3VsZFByZWZldGNoPWlzVmlzaWJsZSYmcCYmKDAsX3JvdXRlci5pc0xvY2FsVVJMKShocmVmKTtjb25zdCBjdXJMb2NhbGU9dHlwZW9mIGxvY2FsZSE9PSd1bmRlZmluZWQnP2xvY2FsZTpyb3V0ZXImJnJvdXRlci5sb2NhbGU7Y29uc3QgaXNQcmVmZXRjaGVkPXByZWZldGNoZWRbaHJlZisnJScrYXMrKGN1ckxvY2FsZT8nJScrY3VyTG9jYWxlOicnKV07aWYoc2hvdWxkUHJlZmV0Y2gmJiFpc1ByZWZldGNoZWQpe3ByZWZldGNoKHJvdXRlcixocmVmLGFzLHtsb2NhbGU6Y3VyTG9jYWxlfSk7fX0sW2FzLGhyZWYsaXNWaXNpYmxlLGxvY2FsZSxwLHJvdXRlcl0pO2NvbnN0IGNoaWxkUHJvcHM9e3JlZjpzZXRSZWYsb25DbGljazplPT57aWYoY2hpbGQucHJvcHMmJnR5cGVvZiBjaGlsZC5wcm9wcy5vbkNsaWNrPT09J2Z1bmN0aW9uJyl7Y2hpbGQucHJvcHMub25DbGljayhlKTt9aWYoIWUuZGVmYXVsdFByZXZlbnRlZCl7bGlua0NsaWNrZWQoZSxyb3V0ZXIsaHJlZixhcyxyZXBsYWNlLHNoYWxsb3csc2Nyb2xsLGxvY2FsZSk7fX19O2NoaWxkUHJvcHMub25Nb3VzZUVudGVyPWU9PntpZighKDAsX3JvdXRlci5pc0xvY2FsVVJMKShocmVmKSlyZXR1cm47aWYoY2hpbGQucHJvcHMmJnR5cGVvZiBjaGlsZC5wcm9wcy5vbk1vdXNlRW50ZXI9PT0nZnVuY3Rpb24nKXtjaGlsZC5wcm9wcy5vbk1vdXNlRW50ZXIoZSk7fXByZWZldGNoKHJvdXRlcixocmVmLGFzLHtwcmlvcml0eTp0cnVlfSk7fTsvLyBJZiBjaGlsZCBpcyBhbiA8YT4gdGFnIGFuZCBkb2Vzbid0IGhhdmUgYSBocmVmIGF0dHJpYnV0ZSwgb3IgaWYgdGhlICdwYXNzSHJlZicgcHJvcGVydHkgaXNcbi8vIGRlZmluZWQsIHdlIHNwZWNpZnkgdGhlIGN1cnJlbnQgJ2hyZWYnLCBzbyB0aGF0IHJlcGV0aXRpb24gaXMgbm90IG5lZWRlZCBieSB0aGUgdXNlclxuaWYocHJvcHMucGFzc0hyZWZ8fGNoaWxkLnR5cGU9PT0nYScmJiEoJ2hyZWYnaW4gY2hpbGQucHJvcHMpKXtjb25zdCBjdXJMb2NhbGU9dHlwZW9mIGxvY2FsZSE9PSd1bmRlZmluZWQnP2xvY2FsZTpyb3V0ZXImJnJvdXRlci5sb2NhbGU7Ly8gd2Ugb25seSByZW5kZXIgZG9tYWluIGxvY2FsZXMgaWYgd2UgYXJlIGN1cnJlbnRseSBvbiBhIGRvbWFpbiBsb2NhbGVcbi8vIHNvIHRoYXQgbG9jYWxlIGxpbmtzIGFyZSBzdGlsbCB2aXNpdGFibGUgaW4gZGV2ZWxvcG1lbnQvcHJldmlldyBlbnZzXG5jb25zdCBsb2NhbGVEb21haW49cm91dGVyJiZyb3V0ZXIuaXNMb2NhbGVEb21haW4mJigwLF9yb3V0ZXIuZ2V0RG9tYWluTG9jYWxlKShhcyxjdXJMb2NhbGUscm91dGVyJiZyb3V0ZXIubG9jYWxlcyxyb3V0ZXImJnJvdXRlci5kb21haW5Mb2NhbGVzKTtjaGlsZFByb3BzLmhyZWY9bG9jYWxlRG9tYWlufHwoMCxfcm91dGVyLmFkZEJhc2VQYXRoKSgoMCxfcm91dGVyLmFkZExvY2FsZSkoYXMsY3VyTG9jYWxlLHJvdXRlciYmcm91dGVyLmRlZmF1bHRMb2NhbGUpKTt9cmV0dXJuLyojX19QVVJFX18qL19yZWFjdC5kZWZhdWx0LmNsb25lRWxlbWVudChjaGlsZCxjaGlsZFByb3BzKTt9dmFyIF9kZWZhdWx0PUxpbms7ZXhwb3J0cy5kZWZhdWx0PV9kZWZhdWx0O1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9bGluay5qcy5tYXAiLCJcInVzZSBzdHJpY3RcIjtleHBvcnRzLl9fZXNNb2R1bGU9dHJ1ZTtleHBvcnRzLnJlbW92ZVBhdGhUcmFpbGluZ1NsYXNoPXJlbW92ZVBhdGhUcmFpbGluZ1NsYXNoO2V4cG9ydHMubm9ybWFsaXplUGF0aFRyYWlsaW5nU2xhc2g9dm9pZCAwOy8qKlxuICogUmVtb3ZlcyB0aGUgdHJhaWxpbmcgc2xhc2ggb2YgYSBwYXRoIGlmIHRoZXJlIGlzIG9uZS4gUHJlc2VydmVzIHRoZSByb290IHBhdGggYC9gLlxuICovZnVuY3Rpb24gcmVtb3ZlUGF0aFRyYWlsaW5nU2xhc2gocGF0aCl7cmV0dXJuIHBhdGguZW5kc1dpdGgoJy8nKSYmcGF0aCE9PScvJz9wYXRoLnNsaWNlKDAsLTEpOnBhdGg7fS8qKlxuICogTm9ybWFsaXplcyB0aGUgdHJhaWxpbmcgc2xhc2ggb2YgYSBwYXRoIGFjY29yZGluZyB0byB0aGUgYHRyYWlsaW5nU2xhc2hgIG9wdGlvblxuICogaW4gYG5leHQuY29uZmlnLmpzYC5cbiAqL2NvbnN0IG5vcm1hbGl6ZVBhdGhUcmFpbGluZ1NsYXNoPXByb2Nlc3MuZW52Ll9fTkVYVF9UUkFJTElOR19TTEFTSD9wYXRoPT57aWYoL1xcLlteL10rXFwvPyQvLnRlc3QocGF0aCkpe3JldHVybiByZW1vdmVQYXRoVHJhaWxpbmdTbGFzaChwYXRoKTt9ZWxzZSBpZihwYXRoLmVuZHNXaXRoKCcvJykpe3JldHVybiBwYXRoO31lbHNle3JldHVybiBwYXRoKycvJzt9fTpyZW1vdmVQYXRoVHJhaWxpbmdTbGFzaDtleHBvcnRzLm5vcm1hbGl6ZVBhdGhUcmFpbGluZ1NsYXNoPW5vcm1hbGl6ZVBhdGhUcmFpbGluZ1NsYXNoO1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9bm9ybWFsaXplLXRyYWlsaW5nLXNsYXNoLmpzLm1hcCIsIlwidXNlIHN0cmljdFwiO2V4cG9ydHMuX19lc01vZHVsZT10cnVlO2V4cG9ydHMuY2FuY2VsSWRsZUNhbGxiYWNrPWV4cG9ydHMucmVxdWVzdElkbGVDYWxsYmFjaz12b2lkIDA7Y29uc3QgcmVxdWVzdElkbGVDYWxsYmFjaz10eXBlb2Ygc2VsZiE9PSd1bmRlZmluZWQnJiZzZWxmLnJlcXVlc3RJZGxlQ2FsbGJhY2t8fGZ1bmN0aW9uKGNiKXtsZXQgc3RhcnQ9RGF0ZS5ub3coKTtyZXR1cm4gc2V0VGltZW91dChmdW5jdGlvbigpe2NiKHtkaWRUaW1lb3V0OmZhbHNlLHRpbWVSZW1haW5pbmc6ZnVuY3Rpb24oKXtyZXR1cm4gTWF0aC5tYXgoMCw1MC0oRGF0ZS5ub3coKS1zdGFydCkpO319KTt9LDEpO307ZXhwb3J0cy5yZXF1ZXN0SWRsZUNhbGxiYWNrPXJlcXVlc3RJZGxlQ2FsbGJhY2s7Y29uc3QgY2FuY2VsSWRsZUNhbGxiYWNrPXR5cGVvZiBzZWxmIT09J3VuZGVmaW5lZCcmJnNlbGYuY2FuY2VsSWRsZUNhbGxiYWNrfHxmdW5jdGlvbihpZCl7cmV0dXJuIGNsZWFyVGltZW91dChpZCk7fTtleHBvcnRzLmNhbmNlbElkbGVDYWxsYmFjaz1jYW5jZWxJZGxlQ2FsbGJhY2s7XG4vLyMgc291cmNlTWFwcGluZ1VSTD1yZXF1ZXN0LWlkbGUtY2FsbGJhY2suanMubWFwIiwiXCJ1c2Ugc3RyaWN0XCI7dmFyIF9pbnRlcm9wUmVxdWlyZURlZmF1bHQ9cmVxdWlyZShcIkBiYWJlbC9ydW50aW1lL2hlbHBlcnMvaW50ZXJvcFJlcXVpcmVEZWZhdWx0XCIpO2V4cG9ydHMuX19lc01vZHVsZT10cnVlO2V4cG9ydHMubWFya0Fzc2V0RXJyb3I9bWFya0Fzc2V0RXJyb3I7ZXhwb3J0cy5pc0Fzc2V0RXJyb3I9aXNBc3NldEVycm9yO2V4cG9ydHMuZ2V0Q2xpZW50QnVpbGRNYW5pZmVzdD1nZXRDbGllbnRCdWlsZE1hbmlmZXN0O2V4cG9ydHMuZGVmYXVsdD12b2lkIDA7dmFyIF9nZXRBc3NldFBhdGhGcm9tUm91dGU9X2ludGVyb3BSZXF1aXJlRGVmYXVsdChyZXF1aXJlKFwiLi4vbmV4dC1zZXJ2ZXIvbGliL3JvdXRlci91dGlscy9nZXQtYXNzZXQtcGF0aC1mcm9tLXJvdXRlXCIpKTt2YXIgX3JlcXVlc3RJZGxlQ2FsbGJhY2s9cmVxdWlyZShcIi4vcmVxdWVzdC1pZGxlLWNhbGxiYWNrXCIpOy8vIDMuOHMgd2FzIGFyYml0cmFyaWx5IGNob3NlbiBhcyBpdCdzIHdoYXQgaHR0cHM6Ly93ZWIuZGV2L2ludGVyYWN0aXZlXG4vLyBjb25zaWRlcnMgYXMgXCJHb29kXCIgdGltZS10by1pbnRlcmFjdGl2ZS4gV2UgbXVzdCBhc3N1bWUgc29tZXRoaW5nIHdlbnRcbi8vIHdyb25nIGJleW9uZCB0aGlzIHBvaW50LCBhbmQgdGhlbiBmYWxsLWJhY2sgdG8gYSBmdWxsIHBhZ2UgdHJhbnNpdGlvbiB0b1xuLy8gc2hvdyB0aGUgdXNlciBzb21ldGhpbmcgb2YgdmFsdWUuXG5jb25zdCBNU19NQVhfSURMRV9ERUxBWT0zODAwO2Z1bmN0aW9uIHdpdGhGdXR1cmUoa2V5LG1hcCxnZW5lcmF0b3Ipe2xldCBlbnRyeT1tYXAuZ2V0KGtleSk7aWYoZW50cnkpe2lmKCdmdXR1cmUnaW4gZW50cnkpe3JldHVybiBlbnRyeS5mdXR1cmU7fXJldHVybiBQcm9taXNlLnJlc29sdmUoZW50cnkpO31sZXQgcmVzb2x2ZXI7Y29uc3QgcHJvbT1uZXcgUHJvbWlzZShyZXNvbHZlPT57cmVzb2x2ZXI9cmVzb2x2ZTt9KTttYXAuc2V0KGtleSxlbnRyeT17cmVzb2x2ZTpyZXNvbHZlcixmdXR1cmU6cHJvbX0pO3JldHVybiBnZW5lcmF0b3I/Ly8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLXNlcXVlbmNlc1xuZ2VuZXJhdG9yKCkudGhlbih2YWx1ZT0+KHJlc29sdmVyKHZhbHVlKSx2YWx1ZSkpOnByb207fWZ1bmN0aW9uIGhhc1ByZWZldGNoKGxpbmspe3RyeXtsaW5rPWRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2xpbmsnKTtyZXR1cm4oLy8gZGV0ZWN0IElFMTEgc2luY2UgaXQgc3VwcG9ydHMgcHJlZmV0Y2ggYnV0IGlzbid0IGRldGVjdGVkXG4vLyB3aXRoIHJlbExpc3Quc3VwcG9ydFxuISF3aW5kb3cuTVNJbnB1dE1ldGhvZENvbnRleHQmJiEhZG9jdW1lbnQuZG9jdW1lbnRNb2RlfHxsaW5rLnJlbExpc3Quc3VwcG9ydHMoJ3ByZWZldGNoJykpO31jYXRjaChfdW51c2VkKXtyZXR1cm4gZmFsc2U7fX1jb25zdCBjYW5QcmVmZXRjaD1oYXNQcmVmZXRjaCgpO2Z1bmN0aW9uIHByZWZldGNoVmlhRG9tKGhyZWYsYXMsbGluayl7cmV0dXJuIG5ldyBQcm9taXNlKChyZXMscmVqKT0+e2lmKGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoYGxpbmtbcmVsPVwicHJlZmV0Y2hcIl1baHJlZl49XCIke2hyZWZ9XCJdYCkpe3JldHVybiByZXMoKTt9bGluaz1kb2N1bWVudC5jcmVhdGVFbGVtZW50KCdsaW5rJyk7Ly8gVGhlIG9yZGVyIG9mIHByb3BlcnR5IGFzc2lnbm1lbnQgaGVyZSBpcyBpbnRlbnRpb25hbDpcbmlmKGFzKWxpbmsuYXM9YXM7bGluay5yZWw9YHByZWZldGNoYDtsaW5rLmNyb3NzT3JpZ2luPXByb2Nlc3MuZW52Ll9fTkVYVF9DUk9TU19PUklHSU47bGluay5vbmxvYWQ9cmVzO2xpbmsub25lcnJvcj1yZWo7Ly8gYGhyZWZgIHNob3VsZCBhbHdheXMgYmUgbGFzdDpcbmxpbmsuaHJlZj1ocmVmO2RvY3VtZW50LmhlYWQuYXBwZW5kQ2hpbGQobGluayk7fSk7fWNvbnN0IEFTU0VUX0xPQURfRVJST1I9U3ltYm9sKCdBU1NFVF9MT0FEX0VSUk9SJyk7Ly8gVE9ETzogdW5leHBvcnRcbmZ1bmN0aW9uIG1hcmtBc3NldEVycm9yKGVycil7cmV0dXJuIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShlcnIsQVNTRVRfTE9BRF9FUlJPUix7fSk7fWZ1bmN0aW9uIGlzQXNzZXRFcnJvcihlcnIpe3JldHVybiBlcnImJkFTU0VUX0xPQURfRVJST1IgaW4gZXJyO31mdW5jdGlvbiBhcHBlbmRTY3JpcHQoc3JjLHNjcmlwdCl7cmV0dXJuIG5ldyBQcm9taXNlKChyZXNvbHZlLHJlamVjdCk9PntzY3JpcHQ9ZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc2NyaXB0Jyk7Ly8gVGhlIG9yZGVyIG9mIHByb3BlcnR5IGFzc2lnbm1lbnQgaGVyZSBpcyBpbnRlbnRpb25hbC5cbi8vIDEuIFNldHVwIHN1Y2Nlc3MvZmFpbHVyZSBob29rcyBpbiBjYXNlIHRoZSBicm93c2VyIHN5bmNocm9ub3VzbHlcbi8vICAgIGV4ZWN1dGVzIHdoZW4gYHNyY2AgaXMgc2V0Llxuc2NyaXB0Lm9ubG9hZD1yZXNvbHZlO3NjcmlwdC5vbmVycm9yPSgpPT5yZWplY3QobWFya0Fzc2V0RXJyb3IobmV3IEVycm9yKGBGYWlsZWQgdG8gbG9hZCBzY3JpcHQ6ICR7c3JjfWApKSk7Ly8gMi4gQ29uZmlndXJlIHRoZSBjcm9zcy1vcmlnaW4gYXR0cmlidXRlIGJlZm9yZSBzZXR0aW5nIGBzcmNgIGluIGNhc2UgdGhlXG4vLyAgICBicm93c2VyIGJlZ2lucyB0byBmZXRjaC5cbnNjcmlwdC5jcm9zc09yaWdpbj1wcm9jZXNzLmVudi5fX05FWFRfQ1JPU1NfT1JJR0lOOy8vIDMuIEZpbmFsbHksIHNldCB0aGUgc291cmNlIGFuZCBpbmplY3QgaW50byB0aGUgRE9NIGluIGNhc2UgdGhlIGNoaWxkXG4vLyAgICBtdXN0IGJlIGFwcGVuZGVkIGZvciBmZXRjaGluZyB0byBzdGFydC5cbnNjcmlwdC5zcmM9c3JjO2RvY3VtZW50LmJvZHkuYXBwZW5kQ2hpbGQoc2NyaXB0KTt9KTt9Ly8gUmVzb2x2ZSBhIHByb21pc2UgdGhhdCB0aW1lcyBvdXQgYWZ0ZXIgZ2l2ZW4gYW1vdW50IG9mIG1pbGxpc2Vjb25kcy5cbmZ1bmN0aW9uIHJlc29sdmVQcm9taXNlV2l0aFRpbWVvdXQocCxtcyxlcnIpe3JldHVybiBuZXcgUHJvbWlzZSgocmVzb2x2ZSxyZWplY3QpPT57bGV0IGNhbmNlbGxlZD1mYWxzZTtwLnRoZW4ocj0+ey8vIFJlc29sdmVkLCBjYW5jZWwgdGhlIHRpbWVvdXRcbmNhbmNlbGxlZD10cnVlO3Jlc29sdmUocik7fSkuY2F0Y2gocmVqZWN0KTsoMCxfcmVxdWVzdElkbGVDYWxsYmFjay5yZXF1ZXN0SWRsZUNhbGxiYWNrKSgoKT0+c2V0VGltZW91dCgoKT0+e2lmKCFjYW5jZWxsZWQpe3JlamVjdChlcnIpO319LG1zKSk7fSk7fS8vIFRPRE86IHN0b3AgZXhwb3J0aW5nIG9yIGNhY2hlIHRoZSBmYWlsdXJlXG4vLyBJdCdkIGJlIGJlc3QgdG8gc3RvcCBleHBvcnRpbmcgdGhpcy4gSXQncyBhbiBpbXBsZW1lbnRhdGlvbiBkZXRhaWwuIFdlJ3JlXG4vLyBvbmx5IGV4cG9ydGluZyBpdCBmb3IgYmFja3dhcmRzIGNvbXBhdGliaWx0eSB3aXRoIHRoZSBgcGFnZS1sb2FkZXJgLlxuLy8gT25seSBjYWNoZSB0aGlzIHJlc3BvbnNlIGFzIGEgbGFzdCByZXNvcnQgaWYgd2UgY2Fubm90IGVsaW1pbmF0ZSBhbGwgb3RoZXJcbi8vIGNvZGUgYnJhbmNoZXMgdGhhdCB1c2UgdGhlIEJ1aWxkIE1hbmlmZXN0IENhbGxiYWNrIGFuZCBwdXNoIHRoZW0gdGhyb3VnaFxuLy8gdGhlIFJvdXRlIExvYWRlciBpbnRlcmZhY2UuXG5mdW5jdGlvbiBnZXRDbGllbnRCdWlsZE1hbmlmZXN0KCl7aWYoc2VsZi5fX0JVSUxEX01BTklGRVNUKXtyZXR1cm4gUHJvbWlzZS5yZXNvbHZlKHNlbGYuX19CVUlMRF9NQU5JRkVTVCk7fWNvbnN0IG9uQnVpbGRNYW5pZmVzdD1uZXcgUHJvbWlzZShyZXNvbHZlPT57Ly8gTWFuZGF0b3J5IGJlY2F1c2UgdGhpcyBpcyBub3QgY29uY3VycmVudCBzYWZlOlxuY29uc3QgY2I9c2VsZi5fX0JVSUxEX01BTklGRVNUX0NCO3NlbGYuX19CVUlMRF9NQU5JRkVTVF9DQj0oKT0+e3Jlc29sdmUoc2VsZi5fX0JVSUxEX01BTklGRVNUKTtjYiYmY2IoKTt9O30pO3JldHVybiByZXNvbHZlUHJvbWlzZVdpdGhUaW1lb3V0KG9uQnVpbGRNYW5pZmVzdCxNU19NQVhfSURMRV9ERUxBWSxtYXJrQXNzZXRFcnJvcihuZXcgRXJyb3IoJ0ZhaWxlZCB0byBsb2FkIGNsaWVudCBidWlsZCBtYW5pZmVzdCcpKSk7fWZ1bmN0aW9uIGdldEZpbGVzRm9yUm91dGUoYXNzZXRQcmVmaXgscm91dGUpe2lmKHByb2Nlc3MuZW52Lk5PREVfRU5WPT09J2RldmVsb3BtZW50Jyl7cmV0dXJuIFByb21pc2UucmVzb2x2ZSh7c2NyaXB0czpbYXNzZXRQcmVmaXgrJy9fbmV4dC9zdGF0aWMvY2h1bmtzL3BhZ2VzJytlbmNvZGVVUkkoKDAsX2dldEFzc2V0UGF0aEZyb21Sb3V0ZS5kZWZhdWx0KShyb3V0ZSwnLmpzJykpXSwvLyBTdHlsZXMgYXJlIGhhbmRsZWQgYnkgYHN0eWxlLWxvYWRlcmAgaW4gZGV2ZWxvcG1lbnQ6XG5jc3M6W119KTt9cmV0dXJuIGdldENsaWVudEJ1aWxkTWFuaWZlc3QoKS50aGVuKG1hbmlmZXN0PT57aWYoIShyb3V0ZSBpbiBtYW5pZmVzdCkpe3Rocm93IG1hcmtBc3NldEVycm9yKG5ldyBFcnJvcihgRmFpbGVkIHRvIGxvb2t1cCByb3V0ZTogJHtyb3V0ZX1gKSk7fWNvbnN0IGFsbEZpbGVzPW1hbmlmZXN0W3JvdXRlXS5tYXAoZW50cnk9PmFzc2V0UHJlZml4KycvX25leHQvJytlbmNvZGVVUkkoZW50cnkpKTtyZXR1cm57c2NyaXB0czphbGxGaWxlcy5maWx0ZXIodj0+di5lbmRzV2l0aCgnLmpzJykpLGNzczphbGxGaWxlcy5maWx0ZXIodj0+di5lbmRzV2l0aCgnLmNzcycpKX07fSk7fWZ1bmN0aW9uIGNyZWF0ZVJvdXRlTG9hZGVyKGFzc2V0UHJlZml4KXtjb25zdCBlbnRyeXBvaW50cz1uZXcgTWFwKCk7Y29uc3QgbG9hZGVkU2NyaXB0cz1uZXcgTWFwKCk7Y29uc3Qgc3R5bGVTaGVldHM9bmV3IE1hcCgpO2NvbnN0IHJvdXRlcz1uZXcgTWFwKCk7ZnVuY3Rpb24gbWF5YmVFeGVjdXRlU2NyaXB0KHNyYyl7bGV0IHByb209bG9hZGVkU2NyaXB0cy5nZXQoc3JjKTtpZihwcm9tKXtyZXR1cm4gcHJvbTt9Ly8gU2tpcCBleGVjdXRpbmcgc2NyaXB0IGlmIGl0J3MgYWxyZWFkeSBpbiB0aGUgRE9NOlxuaWYoZG9jdW1lbnQucXVlcnlTZWxlY3Rvcihgc2NyaXB0W3NyY149XCIke3NyY31cIl1gKSl7cmV0dXJuIFByb21pc2UucmVzb2x2ZSgpO31sb2FkZWRTY3JpcHRzLnNldChzcmMscHJvbT1hcHBlbmRTY3JpcHQoc3JjKSk7cmV0dXJuIHByb207fWZ1bmN0aW9uIGZldGNoU3R5bGVTaGVldChocmVmKXtsZXQgcHJvbT1zdHlsZVNoZWV0cy5nZXQoaHJlZik7aWYocHJvbSl7cmV0dXJuIHByb207fXN0eWxlU2hlZXRzLnNldChocmVmLHByb209ZmV0Y2goaHJlZikudGhlbihyZXM9PntpZighcmVzLm9rKXt0aHJvdyBuZXcgRXJyb3IoYEZhaWxlZCB0byBsb2FkIHN0eWxlc2hlZXQ6ICR7aHJlZn1gKTt9cmV0dXJuIHJlcy50ZXh0KCkudGhlbih0ZXh0PT4oe2hyZWY6aHJlZixjb250ZW50OnRleHR9KSk7fSkuY2F0Y2goZXJyPT57dGhyb3cgbWFya0Fzc2V0RXJyb3IoZXJyKTt9KSk7cmV0dXJuIHByb207fXJldHVybnt3aGVuRW50cnlwb2ludChyb3V0ZSl7cmV0dXJuIHdpdGhGdXR1cmUocm91dGUsZW50cnlwb2ludHMpO30sb25FbnRyeXBvaW50KHJvdXRlLGV4ZWN1dGUpe1Byb21pc2UucmVzb2x2ZShleGVjdXRlKS50aGVuKGZuPT5mbigpKS50aGVuKGV4cG9ydHM9Pih7Y29tcG9uZW50OmV4cG9ydHMmJmV4cG9ydHMuZGVmYXVsdHx8ZXhwb3J0cyxleHBvcnRzOmV4cG9ydHN9KSxlcnI9Pih7ZXJyb3I6ZXJyfSkpLnRoZW4oaW5wdXQ9Pntjb25zdCBvbGQ9ZW50cnlwb2ludHMuZ2V0KHJvdXRlKTtlbnRyeXBvaW50cy5zZXQocm91dGUsaW5wdXQpO2lmKG9sZCYmJ3Jlc29sdmUnaW4gb2xkKW9sZC5yZXNvbHZlKGlucHV0KTt9KTt9LGxvYWRSb3V0ZShyb3V0ZSxwcmVmZXRjaCl7cmV0dXJuIHdpdGhGdXR1cmUocm91dGUscm91dGVzLCgpPT57cmV0dXJuIHJlc29sdmVQcm9taXNlV2l0aFRpbWVvdXQoZ2V0RmlsZXNGb3JSb3V0ZShhc3NldFByZWZpeCxyb3V0ZSkudGhlbigoe3NjcmlwdHMsY3NzfSk9PntyZXR1cm4gUHJvbWlzZS5hbGwoW2VudHJ5cG9pbnRzLmhhcyhyb3V0ZSk/W106UHJvbWlzZS5hbGwoc2NyaXB0cy5tYXAobWF5YmVFeGVjdXRlU2NyaXB0KSksUHJvbWlzZS5hbGwoY3NzLm1hcChmZXRjaFN0eWxlU2hlZXQpKV0pO30pLnRoZW4ocmVzPT57cmV0dXJuIHRoaXMud2hlbkVudHJ5cG9pbnQocm91dGUpLnRoZW4oZW50cnlwb2ludD0+KHtlbnRyeXBvaW50LHN0eWxlczpyZXNbMV19KSk7fSksTVNfTUFYX0lETEVfREVMQVksbWFya0Fzc2V0RXJyb3IobmV3IEVycm9yKGBSb3V0ZSBkaWQgbm90IGNvbXBsZXRlIGxvYWRpbmc6ICR7cm91dGV9YCkpKS50aGVuKCh7ZW50cnlwb2ludCxzdHlsZXN9KT0+e2NvbnN0IHJlcz1PYmplY3QuYXNzaWduKHtzdHlsZXM6c3R5bGVzfSxlbnRyeXBvaW50KTtyZXR1cm4nZXJyb3InaW4gZW50cnlwb2ludD9lbnRyeXBvaW50OnJlczt9KS5jYXRjaChlcnI9PntpZihwcmVmZXRjaCl7Ly8gd2UgZG9uJ3Qgd2FudCB0byBjYWNoZSBlcnJvcnMgZHVyaW5nIHByZWZldGNoXG50aHJvdyBlcnI7fXJldHVybntlcnJvcjplcnJ9O30pO30pO30scHJlZmV0Y2gocm91dGUpey8vIGh0dHBzOi8vZ2l0aHViLmNvbS9Hb29nbGVDaHJvbWVMYWJzL3F1aWNrbGluay9ibG9iLzQ1M2E2NjFmYTFmYTk0MGUyZDJlMDQ0NDUyMzk4ZTM4YzY3YTk4ZmIvc3JjL2luZGV4Lm1qcyNMMTE1LUwxMThcbi8vIExpY2Vuc2U6IEFwYWNoZSAyLjBcbmxldCBjbjtpZihjbj1uYXZpZ2F0b3IuY29ubmVjdGlvbil7Ly8gRG9uJ3QgcHJlZmV0Y2ggaWYgdXNpbmcgMkcgb3IgaWYgU2F2ZS1EYXRhIGlzIGVuYWJsZWQuXG5pZihjbi5zYXZlRGF0YXx8LzJnLy50ZXN0KGNuLmVmZmVjdGl2ZVR5cGUpKXJldHVybiBQcm9taXNlLnJlc29sdmUoKTt9cmV0dXJuIGdldEZpbGVzRm9yUm91dGUoYXNzZXRQcmVmaXgscm91dGUpLnRoZW4ob3V0cHV0PT5Qcm9taXNlLmFsbChjYW5QcmVmZXRjaD9vdXRwdXQuc2NyaXB0cy5tYXAoc2NyaXB0PT5wcmVmZXRjaFZpYURvbShzY3JpcHQsJ3NjcmlwdCcpKTpbXSkpLnRoZW4oKCk9PnsoMCxfcmVxdWVzdElkbGVDYWxsYmFjay5yZXF1ZXN0SWRsZUNhbGxiYWNrKSgoKT0+dGhpcy5sb2FkUm91dGUocm91dGUsdHJ1ZSkuY2F0Y2goKCk9Pnt9KSk7fSkuY2F0Y2goLy8gc3dhbGxvdyBwcmVmZXRjaCBlcnJvcnNcbigpPT57fSk7fX07fXZhciBfZGVmYXVsdD1jcmVhdGVSb3V0ZUxvYWRlcjtleHBvcnRzLmRlZmF1bHQ9X2RlZmF1bHQ7XG4vLyMgc291cmNlTWFwcGluZ1VSTD1yb3V0ZS1sb2FkZXIuanMubWFwIiwiXCJ1c2Ugc3RyaWN0XCI7dmFyIF9pbnRlcm9wUmVxdWlyZVdpbGRjYXJkPXJlcXVpcmUoXCJAYmFiZWwvcnVudGltZS9oZWxwZXJzL2ludGVyb3BSZXF1aXJlV2lsZGNhcmRcIik7dmFyIF9pbnRlcm9wUmVxdWlyZURlZmF1bHQ9cmVxdWlyZShcIkBiYWJlbC9ydW50aW1lL2hlbHBlcnMvaW50ZXJvcFJlcXVpcmVEZWZhdWx0XCIpO2V4cG9ydHMuX19lc01vZHVsZT10cnVlO2V4cG9ydHMudXNlUm91dGVyPXVzZVJvdXRlcjtleHBvcnRzLm1ha2VQdWJsaWNSb3V0ZXJJbnN0YW5jZT1tYWtlUHVibGljUm91dGVySW5zdGFuY2U7ZXhwb3J0cy5jcmVhdGVSb3V0ZXI9ZXhwb3J0cy53aXRoUm91dGVyPWV4cG9ydHMuZGVmYXVsdD12b2lkIDA7dmFyIF9yZWFjdD1faW50ZXJvcFJlcXVpcmVEZWZhdWx0KHJlcXVpcmUoXCJyZWFjdFwiKSk7dmFyIF9yb3V0ZXIyPV9pbnRlcm9wUmVxdWlyZVdpbGRjYXJkKHJlcXVpcmUoXCIuLi9uZXh0LXNlcnZlci9saWIvcm91dGVyL3JvdXRlclwiKSk7ZXhwb3J0cy5Sb3V0ZXI9X3JvdXRlcjIuZGVmYXVsdDtleHBvcnRzLk5leHRSb3V0ZXI9X3JvdXRlcjIuTmV4dFJvdXRlcjt2YXIgX3JvdXRlckNvbnRleHQ9cmVxdWlyZShcIi4uL25leHQtc2VydmVyL2xpYi9yb3V0ZXItY29udGV4dFwiKTt2YXIgX3dpdGhSb3V0ZXI9X2ludGVyb3BSZXF1aXJlRGVmYXVsdChyZXF1aXJlKFwiLi93aXRoLXJvdXRlclwiKSk7ZXhwb3J0cy53aXRoUm91dGVyPV93aXRoUm91dGVyLmRlZmF1bHQ7LyogZ2xvYmFsIHdpbmRvdyAqL2NvbnN0IHNpbmdsZXRvblJvdXRlcj17cm91dGVyOm51bGwsLy8gaG9sZHMgdGhlIGFjdHVhbCByb3V0ZXIgaW5zdGFuY2VcbnJlYWR5Q2FsbGJhY2tzOltdLHJlYWR5KGNiKXtpZih0aGlzLnJvdXRlcilyZXR1cm4gY2IoKTtpZih0eXBlb2Ygd2luZG93IT09J3VuZGVmaW5lZCcpe3RoaXMucmVhZHlDYWxsYmFja3MucHVzaChjYik7fX19Oy8vIENyZWF0ZSBwdWJsaWMgcHJvcGVydGllcyBhbmQgbWV0aG9kcyBvZiB0aGUgcm91dGVyIGluIHRoZSBzaW5nbGV0b25Sb3V0ZXJcbmNvbnN0IHVybFByb3BlcnR5RmllbGRzPVsncGF0aG5hbWUnLCdyb3V0ZScsJ3F1ZXJ5JywnYXNQYXRoJywnY29tcG9uZW50cycsJ2lzRmFsbGJhY2snLCdiYXNlUGF0aCcsJ2xvY2FsZScsJ2xvY2FsZXMnLCdkZWZhdWx0TG9jYWxlJywnaXNSZWFkeScsJ2lzUHJldmlldycsJ2lzTG9jYWxlRG9tYWluJywnZG9tYWluTG9jYWxlcyddO2NvbnN0IHJvdXRlckV2ZW50cz1bJ3JvdXRlQ2hhbmdlU3RhcnQnLCdiZWZvcmVIaXN0b3J5Q2hhbmdlJywncm91dGVDaGFuZ2VDb21wbGV0ZScsJ3JvdXRlQ2hhbmdlRXJyb3InLCdoYXNoQ2hhbmdlU3RhcnQnLCdoYXNoQ2hhbmdlQ29tcGxldGUnXTtjb25zdCBjb3JlTWV0aG9kRmllbGRzPVsncHVzaCcsJ3JlcGxhY2UnLCdyZWxvYWQnLCdiYWNrJywncHJlZmV0Y2gnLCdiZWZvcmVQb3BTdGF0ZSddOy8vIEV2ZW50cyBpcyBhIHN0YXRpYyBwcm9wZXJ0eSBvbiB0aGUgcm91dGVyLCB0aGUgcm91dGVyIGRvZXNuJ3QgaGF2ZSB0byBiZSBpbml0aWFsaXplZCB0byB1c2UgaXRcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShzaW5nbGV0b25Sb3V0ZXIsJ2V2ZW50cycse2dldCgpe3JldHVybiBfcm91dGVyMi5kZWZhdWx0LmV2ZW50czt9fSk7dXJsUHJvcGVydHlGaWVsZHMuZm9yRWFjaChmaWVsZD0+ey8vIEhlcmUgd2UgbmVlZCB0byB1c2UgT2JqZWN0LmRlZmluZVByb3BlcnR5IGJlY2F1c2Ugd2UgbmVlZCB0byByZXR1cm5cbi8vIHRoZSBwcm9wZXJ0eSBhc3NpZ25lZCB0byB0aGUgYWN0dWFsIHJvdXRlclxuLy8gVGhlIHZhbHVlIG1pZ2h0IGdldCBjaGFuZ2VkIGFzIHdlIGNoYW5nZSByb3V0ZXMgYW5kIHRoaXMgaXMgdGhlXG4vLyBwcm9wZXIgd2F5IHRvIGFjY2VzcyBpdFxuT2JqZWN0LmRlZmluZVByb3BlcnR5KHNpbmdsZXRvblJvdXRlcixmaWVsZCx7Z2V0KCl7Y29uc3Qgcm91dGVyPWdldFJvdXRlcigpO3JldHVybiByb3V0ZXJbZmllbGRdO319KTt9KTtjb3JlTWV0aG9kRmllbGRzLmZvckVhY2goZmllbGQ9PnsvLyBXZSBkb24ndCByZWFsbHkga25vdyB0aGUgdHlwZXMgaGVyZSwgc28gd2UgYWRkIHRoZW0gbGF0ZXIgaW5zdGVhZFxuO3NpbmdsZXRvblJvdXRlcltmaWVsZF09KC4uLmFyZ3MpPT57Y29uc3Qgcm91dGVyPWdldFJvdXRlcigpO3JldHVybiByb3V0ZXJbZmllbGRdKC4uLmFyZ3MpO307fSk7cm91dGVyRXZlbnRzLmZvckVhY2goZXZlbnQ9PntzaW5nbGV0b25Sb3V0ZXIucmVhZHkoKCk9Pntfcm91dGVyMi5kZWZhdWx0LmV2ZW50cy5vbihldmVudCwoLi4uYXJncyk9Pntjb25zdCBldmVudEZpZWxkPWBvbiR7ZXZlbnQuY2hhckF0KDApLnRvVXBwZXJDYXNlKCl9JHtldmVudC5zdWJzdHJpbmcoMSl9YDtjb25zdCBfc2luZ2xldG9uUm91dGVyPXNpbmdsZXRvblJvdXRlcjtpZihfc2luZ2xldG9uUm91dGVyW2V2ZW50RmllbGRdKXt0cnl7X3NpbmdsZXRvblJvdXRlcltldmVudEZpZWxkXSguLi5hcmdzKTt9Y2F0Y2goZXJyKXtjb25zb2xlLmVycm9yKGBFcnJvciB3aGVuIHJ1bm5pbmcgdGhlIFJvdXRlciBldmVudDogJHtldmVudEZpZWxkfWApO2NvbnNvbGUuZXJyb3IoYCR7ZXJyLm1lc3NhZ2V9XFxuJHtlcnIuc3RhY2t9YCk7fX19KTt9KTt9KTtmdW5jdGlvbiBnZXRSb3V0ZXIoKXtpZighc2luZ2xldG9uUm91dGVyLnJvdXRlcil7Y29uc3QgbWVzc2FnZT0nTm8gcm91dGVyIGluc3RhbmNlIGZvdW5kLlxcbicrJ1lvdSBzaG91bGQgb25seSB1c2UgXCJuZXh0L3JvdXRlclwiIG9uIHRoZSBjbGllbnQgc2lkZSBvZiB5b3VyIGFwcC5cXG4nO3Rocm93IG5ldyBFcnJvcihtZXNzYWdlKTt9cmV0dXJuIHNpbmdsZXRvblJvdXRlci5yb3V0ZXI7fS8vIEV4cG9ydCB0aGUgc2luZ2xldG9uUm91dGVyIGFuZCB0aGlzIGlzIHRoZSBwdWJsaWMgQVBJLlxudmFyIF9kZWZhdWx0PXNpbmdsZXRvblJvdXRlcjsvLyBSZWV4cG9ydCB0aGUgd2l0aFJvdXRlIEhPQ1xuZXhwb3J0cy5kZWZhdWx0PV9kZWZhdWx0O2Z1bmN0aW9uIHVzZVJvdXRlcigpe3JldHVybiBfcmVhY3QuZGVmYXVsdC51c2VDb250ZXh0KF9yb3V0ZXJDb250ZXh0LlJvdXRlckNvbnRleHQpO30vLyBJTlRFUk5BTCBBUElTXG4vLyAtLS0tLS0tLS0tLS0tXG4vLyAoZG8gbm90IHVzZSBmb2xsb3dpbmcgZXhwb3J0cyBpbnNpZGUgdGhlIGFwcClcbi8vIENyZWF0ZSBhIHJvdXRlciBhbmQgYXNzaWduIGl0IGFzIHRoZSBzaW5nbGV0b24gaW5zdGFuY2UuXG4vLyBUaGlzIGlzIHVzZWQgaW4gY2xpZW50IHNpZGUgd2hlbiB3ZSBhcmUgaW5pdGlsaXppbmcgdGhlIGFwcC5cbi8vIFRoaXMgc2hvdWxkICoqbm90KiogYmUgdXNlZCBpbnNpZGUgdGhlIHNlcnZlci5cbmNvbnN0IGNyZWF0ZVJvdXRlcj0oLi4uYXJncyk9PntzaW5nbGV0b25Sb3V0ZXIucm91dGVyPW5ldyBfcm91dGVyMi5kZWZhdWx0KC4uLmFyZ3MpO3NpbmdsZXRvblJvdXRlci5yZWFkeUNhbGxiYWNrcy5mb3JFYWNoKGNiPT5jYigpKTtzaW5nbGV0b25Sb3V0ZXIucmVhZHlDYWxsYmFja3M9W107cmV0dXJuIHNpbmdsZXRvblJvdXRlci5yb3V0ZXI7fTsvLyBUaGlzIGZ1bmN0aW9uIGlzIHVzZWQgdG8gY3JlYXRlIHRoZSBgd2l0aFJvdXRlcmAgcm91dGVyIGluc3RhbmNlXG5leHBvcnRzLmNyZWF0ZVJvdXRlcj1jcmVhdGVSb3V0ZXI7ZnVuY3Rpb24gbWFrZVB1YmxpY1JvdXRlckluc3RhbmNlKHJvdXRlcil7Y29uc3QgX3JvdXRlcj1yb3V0ZXI7Y29uc3QgaW5zdGFuY2U9e307Zm9yKGNvbnN0IHByb3BlcnR5IG9mIHVybFByb3BlcnR5RmllbGRzKXtpZih0eXBlb2YgX3JvdXRlcltwcm9wZXJ0eV09PT0nb2JqZWN0Jyl7aW5zdGFuY2VbcHJvcGVydHldPU9iamVjdC5hc3NpZ24oQXJyYXkuaXNBcnJheShfcm91dGVyW3Byb3BlcnR5XSk/W106e30sX3JvdXRlcltwcm9wZXJ0eV0pOy8vIG1ha2VzIHN1cmUgcXVlcnkgaXMgbm90IHN0YXRlZnVsXG5jb250aW51ZTt9aW5zdGFuY2VbcHJvcGVydHldPV9yb3V0ZXJbcHJvcGVydHldO30vLyBFdmVudHMgaXMgYSBzdGF0aWMgcHJvcGVydHkgb24gdGhlIHJvdXRlciwgdGhlIHJvdXRlciBkb2Vzbid0IGhhdmUgdG8gYmUgaW5pdGlhbGl6ZWQgdG8gdXNlIGl0XG5pbnN0YW5jZS5ldmVudHM9X3JvdXRlcjIuZGVmYXVsdC5ldmVudHM7Y29yZU1ldGhvZEZpZWxkcy5mb3JFYWNoKGZpZWxkPT57aW5zdGFuY2VbZmllbGRdPSguLi5hcmdzKT0+e3JldHVybiBfcm91dGVyW2ZpZWxkXSguLi5hcmdzKTt9O30pO3JldHVybiBpbnN0YW5jZTt9XG4vLyMgc291cmNlTWFwcGluZ1VSTD1yb3V0ZXIuanMubWFwIiwiXCJ1c2Ugc3RyaWN0XCI7ZXhwb3J0cy5fX2VzTW9kdWxlPXRydWU7ZXhwb3J0cy51c2VJbnRlcnNlY3Rpb249dXNlSW50ZXJzZWN0aW9uO3ZhciBfcmVhY3Q9cmVxdWlyZShcInJlYWN0XCIpO3ZhciBfcmVxdWVzdElkbGVDYWxsYmFjaz1yZXF1aXJlKFwiLi9yZXF1ZXN0LWlkbGUtY2FsbGJhY2tcIik7Y29uc3QgaGFzSW50ZXJzZWN0aW9uT2JzZXJ2ZXI9dHlwZW9mIEludGVyc2VjdGlvbk9ic2VydmVyIT09J3VuZGVmaW5lZCc7ZnVuY3Rpb24gdXNlSW50ZXJzZWN0aW9uKHtyb290TWFyZ2luLGRpc2FibGVkfSl7Y29uc3QgaXNEaXNhYmxlZD1kaXNhYmxlZHx8IWhhc0ludGVyc2VjdGlvbk9ic2VydmVyO2NvbnN0IHVub2JzZXJ2ZT0oMCxfcmVhY3QudXNlUmVmKSgpO2NvbnN0W3Zpc2libGUsc2V0VmlzaWJsZV09KDAsX3JlYWN0LnVzZVN0YXRlKShmYWxzZSk7Y29uc3Qgc2V0UmVmPSgwLF9yZWFjdC51c2VDYWxsYmFjaykoZWw9PntpZih1bm9ic2VydmUuY3VycmVudCl7dW5vYnNlcnZlLmN1cnJlbnQoKTt1bm9ic2VydmUuY3VycmVudD11bmRlZmluZWQ7fWlmKGlzRGlzYWJsZWR8fHZpc2libGUpcmV0dXJuO2lmKGVsJiZlbC50YWdOYW1lKXt1bm9ic2VydmUuY3VycmVudD1vYnNlcnZlKGVsLGlzVmlzaWJsZT0+aXNWaXNpYmxlJiZzZXRWaXNpYmxlKGlzVmlzaWJsZSkse3Jvb3RNYXJnaW59KTt9fSxbaXNEaXNhYmxlZCxyb290TWFyZ2luLHZpc2libGVdKTsoMCxfcmVhY3QudXNlRWZmZWN0KSgoKT0+e2lmKCFoYXNJbnRlcnNlY3Rpb25PYnNlcnZlcil7aWYoIXZpc2libGUpe2NvbnN0IGlkbGVDYWxsYmFjaz0oMCxfcmVxdWVzdElkbGVDYWxsYmFjay5yZXF1ZXN0SWRsZUNhbGxiYWNrKSgoKT0+c2V0VmlzaWJsZSh0cnVlKSk7cmV0dXJuKCk9PigwLF9yZXF1ZXN0SWRsZUNhbGxiYWNrLmNhbmNlbElkbGVDYWxsYmFjaykoaWRsZUNhbGxiYWNrKTt9fX0sW3Zpc2libGVdKTtyZXR1cm5bc2V0UmVmLHZpc2libGVdO31mdW5jdGlvbiBvYnNlcnZlKGVsZW1lbnQsY2FsbGJhY2ssb3B0aW9ucyl7Y29uc3R7aWQsb2JzZXJ2ZXIsZWxlbWVudHN9PWNyZWF0ZU9ic2VydmVyKG9wdGlvbnMpO2VsZW1lbnRzLnNldChlbGVtZW50LGNhbGxiYWNrKTtvYnNlcnZlci5vYnNlcnZlKGVsZW1lbnQpO3JldHVybiBmdW5jdGlvbiB1bm9ic2VydmUoKXtlbGVtZW50cy5kZWxldGUoZWxlbWVudCk7b2JzZXJ2ZXIudW5vYnNlcnZlKGVsZW1lbnQpOy8vIERlc3Ryb3kgb2JzZXJ2ZXIgd2hlbiB0aGVyZSdzIG5vdGhpbmcgbGVmdCB0byB3YXRjaDpcbmlmKGVsZW1lbnRzLnNpemU9PT0wKXtvYnNlcnZlci5kaXNjb25uZWN0KCk7b2JzZXJ2ZXJzLmRlbGV0ZShpZCk7fX07fWNvbnN0IG9ic2VydmVycz1uZXcgTWFwKCk7ZnVuY3Rpb24gY3JlYXRlT2JzZXJ2ZXIob3B0aW9ucyl7Y29uc3QgaWQ9b3B0aW9ucy5yb290TWFyZ2lufHwnJztsZXQgaW5zdGFuY2U9b2JzZXJ2ZXJzLmdldChpZCk7aWYoaW5zdGFuY2Upe3JldHVybiBpbnN0YW5jZTt9Y29uc3QgZWxlbWVudHM9bmV3IE1hcCgpO2NvbnN0IG9ic2VydmVyPW5ldyBJbnRlcnNlY3Rpb25PYnNlcnZlcihlbnRyaWVzPT57ZW50cmllcy5mb3JFYWNoKGVudHJ5PT57Y29uc3QgY2FsbGJhY2s9ZWxlbWVudHMuZ2V0KGVudHJ5LnRhcmdldCk7Y29uc3QgaXNWaXNpYmxlPWVudHJ5LmlzSW50ZXJzZWN0aW5nfHxlbnRyeS5pbnRlcnNlY3Rpb25SYXRpbz4wO2lmKGNhbGxiYWNrJiZpc1Zpc2libGUpe2NhbGxiYWNrKGlzVmlzaWJsZSk7fX0pO30sb3B0aW9ucyk7b2JzZXJ2ZXJzLnNldChpZCxpbnN0YW5jZT17aWQsb2JzZXJ2ZXIsZWxlbWVudHN9KTtyZXR1cm4gaW5zdGFuY2U7fVxuLy8jIHNvdXJjZU1hcHBpbmdVUkw9dXNlLWludGVyc2VjdGlvbi5qcy5tYXAiLCJcInVzZSBzdHJpY3RcIjt2YXIgX2ludGVyb3BSZXF1aXJlRGVmYXVsdD1yZXF1aXJlKFwiQGJhYmVsL3J1bnRpbWUvaGVscGVycy9pbnRlcm9wUmVxdWlyZURlZmF1bHRcIik7ZXhwb3J0cy5fX2VzTW9kdWxlPXRydWU7ZXhwb3J0cy5kZWZhdWx0PXdpdGhSb3V0ZXI7dmFyIF9yZWFjdD1faW50ZXJvcFJlcXVpcmVEZWZhdWx0KHJlcXVpcmUoXCJyZWFjdFwiKSk7dmFyIF9yb3V0ZXI9cmVxdWlyZShcIi4vcm91dGVyXCIpO2Z1bmN0aW9uIHdpdGhSb3V0ZXIoQ29tcG9zZWRDb21wb25lbnQpe2Z1bmN0aW9uIFdpdGhSb3V0ZXJXcmFwcGVyKHByb3BzKXtyZXR1cm4vKiNfX1BVUkVfXyovX3JlYWN0LmRlZmF1bHQuY3JlYXRlRWxlbWVudChDb21wb3NlZENvbXBvbmVudCxPYmplY3QuYXNzaWduKHtyb3V0ZXI6KDAsX3JvdXRlci51c2VSb3V0ZXIpKCl9LHByb3BzKSk7fVdpdGhSb3V0ZXJXcmFwcGVyLmdldEluaXRpYWxQcm9wcz1Db21wb3NlZENvbXBvbmVudC5nZXRJbml0aWFsUHJvcHMvLyBUaGlzIGlzIG5lZWRlZCB0byBhbGxvdyBjaGVja2luZyBmb3IgY3VzdG9tIGdldEluaXRpYWxQcm9wcyBpbiBfYXBwXG47V2l0aFJvdXRlcldyYXBwZXIub3JpZ0dldEluaXRpYWxQcm9wcz1Db21wb3NlZENvbXBvbmVudC5vcmlnR2V0SW5pdGlhbFByb3BzO2lmKHByb2Nlc3MuZW52Lk5PREVfRU5WIT09J3Byb2R1Y3Rpb24nKXtjb25zdCBuYW1lPUNvbXBvc2VkQ29tcG9uZW50LmRpc3BsYXlOYW1lfHxDb21wb3NlZENvbXBvbmVudC5uYW1lfHwnVW5rbm93bic7V2l0aFJvdXRlcldyYXBwZXIuZGlzcGxheU5hbWU9YHdpdGhSb3V0ZXIoJHtuYW1lfSlgO31yZXR1cm4gV2l0aFJvdXRlcldyYXBwZXI7fVxuLy8jIHNvdXJjZU1hcHBpbmdVUkw9d2l0aC1yb3V0ZXIuanMubWFwIiwiXCJ1c2Ugc3RyaWN0XCI7ZXhwb3J0cy5fX2VzTW9kdWxlPXRydWU7ZXhwb3J0cy5kZXRlY3REb21haW5Mb2NhbGU9ZGV0ZWN0RG9tYWluTG9jYWxlO2Z1bmN0aW9uIGRldGVjdERvbWFpbkxvY2FsZShkb21haW5JdGVtcyxob3N0bmFtZSxkZXRlY3RlZExvY2FsZSl7bGV0IGRvbWFpbkl0ZW07aWYoZG9tYWluSXRlbXMpe2lmKGRldGVjdGVkTG9jYWxlKXtkZXRlY3RlZExvY2FsZT1kZXRlY3RlZExvY2FsZS50b0xvd2VyQ2FzZSgpO31mb3IoY29uc3QgaXRlbSBvZiBkb21haW5JdGVtcyl7dmFyIF9pdGVtJGRvbWFpbixfaXRlbSRsb2NhbGVzOy8vIHJlbW92ZSBwb3J0IGlmIHByZXNlbnRcbmNvbnN0IGRvbWFpbkhvc3RuYW1lPShfaXRlbSRkb21haW49aXRlbS5kb21haW4pPT1udWxsP3ZvaWQgMDpfaXRlbSRkb21haW4uc3BsaXQoJzonKVswXS50b0xvd2VyQ2FzZSgpO2lmKGhvc3RuYW1lPT09ZG9tYWluSG9zdG5hbWV8fGRldGVjdGVkTG9jYWxlPT09aXRlbS5kZWZhdWx0TG9jYWxlLnRvTG93ZXJDYXNlKCl8fChfaXRlbSRsb2NhbGVzPWl0ZW0ubG9jYWxlcykhPW51bGwmJl9pdGVtJGxvY2FsZXMuc29tZShsb2NhbGU9PmxvY2FsZS50b0xvd2VyQ2FzZSgpPT09ZGV0ZWN0ZWRMb2NhbGUpKXtkb21haW5JdGVtPWl0ZW07YnJlYWs7fX19cmV0dXJuIGRvbWFpbkl0ZW07fVxuLy8jIHNvdXJjZU1hcHBpbmdVUkw9ZGV0ZWN0LWRvbWFpbi1sb2NhbGUuanMubWFwIiwiXCJ1c2Ugc3RyaWN0XCI7ZXhwb3J0cy5fX2VzTW9kdWxlPXRydWU7ZXhwb3J0cy5ub3JtYWxpemVMb2NhbGVQYXRoPW5vcm1hbGl6ZUxvY2FsZVBhdGg7ZnVuY3Rpb24gbm9ybWFsaXplTG9jYWxlUGF0aChwYXRobmFtZSxsb2NhbGVzKXtsZXQgZGV0ZWN0ZWRMb2NhbGU7Ly8gZmlyc3QgaXRlbSB3aWxsIGJlIGVtcHR5IHN0cmluZyBmcm9tIHNwbGl0dGluZyBhdCBmaXJzdCBjaGFyXG5jb25zdCBwYXRobmFtZVBhcnRzPXBhdGhuYW1lLnNwbGl0KCcvJyk7KGxvY2FsZXN8fFtdKS5zb21lKGxvY2FsZT0+e2lmKHBhdGhuYW1lUGFydHNbMV0udG9Mb3dlckNhc2UoKT09PWxvY2FsZS50b0xvd2VyQ2FzZSgpKXtkZXRlY3RlZExvY2FsZT1sb2NhbGU7cGF0aG5hbWVQYXJ0cy5zcGxpY2UoMSwxKTtwYXRobmFtZT1wYXRobmFtZVBhcnRzLmpvaW4oJy8nKXx8Jy8nO3JldHVybiB0cnVlO31yZXR1cm4gZmFsc2U7fSk7cmV0dXJue3BhdGhuYW1lLGRldGVjdGVkTG9jYWxlfTt9XG4vLyMgc291cmNlTWFwcGluZ1VSTD1ub3JtYWxpemUtbG9jYWxlLXBhdGguanMubWFwIiwiXCJ1c2Ugc3RyaWN0XCI7ZXhwb3J0cy5fX2VzTW9kdWxlPXRydWU7ZXhwb3J0cy5kZWZhdWx0PW1pdHQ7Lypcbk1JVCBMaWNlbnNlXG5cbkNvcHlyaWdodCAoYykgSmFzb24gTWlsbGVyIChodHRwczovL2phc29uZm9ybWF0LmNvbS8pXG5cblBlcm1pc3Npb24gaXMgaGVyZWJ5IGdyYW50ZWQsIGZyZWUgb2YgY2hhcmdlLCB0byBhbnkgcGVyc29uIG9idGFpbmluZyBhIGNvcHkgb2YgdGhpcyBzb2Z0d2FyZSBhbmQgYXNzb2NpYXRlZCBkb2N1bWVudGF0aW9uIGZpbGVzICh0aGUgXCJTb2Z0d2FyZVwiKSwgdG8gZGVhbCBpbiB0aGUgU29mdHdhcmUgd2l0aG91dCByZXN0cmljdGlvbiwgaW5jbHVkaW5nIHdpdGhvdXQgbGltaXRhdGlvbiB0aGUgcmlnaHRzIHRvIHVzZSwgY29weSwgbW9kaWZ5LCBtZXJnZSwgcHVibGlzaCwgZGlzdHJpYnV0ZSwgc3VibGljZW5zZSwgYW5kL29yIHNlbGwgY29waWVzIG9mIHRoZSBTb2Z0d2FyZSwgYW5kIHRvIHBlcm1pdCBwZXJzb25zIHRvIHdob20gdGhlIFNvZnR3YXJlIGlzIGZ1cm5pc2hlZCB0byBkbyBzbywgc3ViamVjdCB0byB0aGUgZm9sbG93aW5nIGNvbmRpdGlvbnM6XG5cblRoZSBhYm92ZSBjb3B5cmlnaHQgbm90aWNlIGFuZCB0aGlzIHBlcm1pc3Npb24gbm90aWNlIHNoYWxsIGJlIGluY2x1ZGVkIGluIGFsbCBjb3BpZXMgb3Igc3Vic3RhbnRpYWwgcG9ydGlvbnMgb2YgdGhlIFNvZnR3YXJlLlxuXG5USEUgU09GVFdBUkUgSVMgUFJPVklERUQgXCJBUyBJU1wiLCBXSVRIT1VUIFdBUlJBTlRZIE9GIEFOWSBLSU5ELCBFWFBSRVNTIE9SIElNUExJRUQsIElOQ0xVRElORyBCVVQgTk9UIExJTUlURUQgVE8gVEhFIFdBUlJBTlRJRVMgT0YgTUVSQ0hBTlRBQklMSVRZLCBGSVRORVNTIEZPUiBBIFBBUlRJQ1VMQVIgUFVSUE9TRSBBTkQgTk9OSU5GUklOR0VNRU5ULiBJTiBOTyBFVkVOVCBTSEFMTCBUSEUgQVVUSE9SUyBPUiBDT1BZUklHSFQgSE9MREVSUyBCRSBMSUFCTEUgRk9SIEFOWSBDTEFJTSwgREFNQUdFUyBPUiBPVEhFUiBMSUFCSUxJVFksIFdIRVRIRVIgSU4gQU4gQUNUSU9OIE9GIENPTlRSQUNULCBUT1JUIE9SIE9USEVSV0lTRSwgQVJJU0lORyBGUk9NLCBPVVQgT0YgT1IgSU4gQ09OTkVDVElPTiBXSVRIIFRIRSBTT0ZUV0FSRSBPUiBUSEUgVVNFIE9SIE9USEVSIERFQUxJTkdTIElOIFRIRSBTT0ZUV0FSRS5cbiovIC8vIFRoaXMgZmlsZSBpcyBiYXNlZCBvbiBodHRwczovL2dpdGh1Yi5jb20vZGV2ZWxvcGl0L21pdHQvYmxvYi92MS4xLjMvc3JjL2luZGV4LmpzXG4vLyBJdCdzIGJlZW4gZWRpdGVkIGZvciB0aGUgbmVlZHMgb2YgdGhpcyBzY3JpcHRcbi8vIFNlZSB0aGUgTElDRU5TRSBhdCB0aGUgdG9wIG9mIHRoZSBmaWxlXG5mdW5jdGlvbiBtaXR0KCl7Y29uc3QgYWxsPU9iamVjdC5jcmVhdGUobnVsbCk7cmV0dXJue29uKHR5cGUsaGFuZGxlcil7OyhhbGxbdHlwZV18fChhbGxbdHlwZV09W10pKS5wdXNoKGhhbmRsZXIpO30sb2ZmKHR5cGUsaGFuZGxlcil7aWYoYWxsW3R5cGVdKXthbGxbdHlwZV0uc3BsaWNlKGFsbFt0eXBlXS5pbmRleE9mKGhhbmRsZXIpPj4+MCwxKTt9fSxlbWl0KHR5cGUsLi4uZXZ0cyl7Ly8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIGFycmF5LWNhbGxiYWNrLXJldHVyblxuOyhhbGxbdHlwZV18fFtdKS5zbGljZSgpLm1hcChoYW5kbGVyPT57aGFuZGxlciguLi5ldnRzKTt9KTt9fTt9XG4vLyMgc291cmNlTWFwcGluZ1VSTD1taXR0LmpzLm1hcCIsIlwidXNlIHN0cmljdFwiO2V4cG9ydHMuX19lc01vZHVsZT10cnVlO2V4cG9ydHMuZ2V0RG9tYWluTG9jYWxlPWdldERvbWFpbkxvY2FsZTtleHBvcnRzLmFkZExvY2FsZT1hZGRMb2NhbGU7ZXhwb3J0cy5kZWxMb2NhbGU9ZGVsTG9jYWxlO2V4cG9ydHMuaGFzQmFzZVBhdGg9aGFzQmFzZVBhdGg7ZXhwb3J0cy5hZGRCYXNlUGF0aD1hZGRCYXNlUGF0aDtleHBvcnRzLmRlbEJhc2VQYXRoPWRlbEJhc2VQYXRoO2V4cG9ydHMuaXNMb2NhbFVSTD1pc0xvY2FsVVJMO2V4cG9ydHMuaW50ZXJwb2xhdGVBcz1pbnRlcnBvbGF0ZUFzO2V4cG9ydHMucmVzb2x2ZUhyZWY9cmVzb2x2ZUhyZWY7ZXhwb3J0cy5kZWZhdWx0PXZvaWQgMDt2YXIgX25vcm1hbGl6ZVRyYWlsaW5nU2xhc2g9cmVxdWlyZShcIi4uLy4uLy4uL2NsaWVudC9ub3JtYWxpemUtdHJhaWxpbmctc2xhc2hcIik7dmFyIF9yb3V0ZUxvYWRlcj1yZXF1aXJlKFwiLi4vLi4vLi4vY2xpZW50L3JvdXRlLWxvYWRlclwiKTt2YXIgX2Rlbm9ybWFsaXplUGFnZVBhdGg9cmVxdWlyZShcIi4uLy4uL3NlcnZlci9kZW5vcm1hbGl6ZS1wYWdlLXBhdGhcIik7dmFyIF9ub3JtYWxpemVMb2NhbGVQYXRoPXJlcXVpcmUoXCIuLi9pMThuL25vcm1hbGl6ZS1sb2NhbGUtcGF0aFwiKTt2YXIgX21pdHQ9X2ludGVyb3BSZXF1aXJlRGVmYXVsdChyZXF1aXJlKFwiLi4vbWl0dFwiKSk7dmFyIF91dGlscz1yZXF1aXJlKFwiLi4vdXRpbHNcIik7dmFyIF9pc0R5bmFtaWM9cmVxdWlyZShcIi4vdXRpbHMvaXMtZHluYW1pY1wiKTt2YXIgX3BhcnNlUmVsYXRpdmVVcmw9cmVxdWlyZShcIi4vdXRpbHMvcGFyc2UtcmVsYXRpdmUtdXJsXCIpO3ZhciBfcXVlcnlzdHJpbmc9cmVxdWlyZShcIi4vdXRpbHMvcXVlcnlzdHJpbmdcIik7dmFyIF9yZXNvbHZlUmV3cml0ZXM9X2ludGVyb3BSZXF1aXJlRGVmYXVsdChyZXF1aXJlKFwiLi91dGlscy9yZXNvbHZlLXJld3JpdGVzXCIpKTt2YXIgX3JvdXRlTWF0Y2hlcj1yZXF1aXJlKFwiLi91dGlscy9yb3V0ZS1tYXRjaGVyXCIpO3ZhciBfcm91dGVSZWdleD1yZXF1aXJlKFwiLi91dGlscy9yb3V0ZS1yZWdleFwiKTtmdW5jdGlvbiBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KG9iail7cmV0dXJuIG9iaiYmb2JqLl9fZXNNb2R1bGU/b2JqOntkZWZhdWx0Om9ian07fS8vIHRzbGludDpkaXNhYmxlOm5vLWNvbnNvbGVcbmxldCBkZXRlY3REb21haW5Mb2NhbGU7aWYocHJvY2Vzcy5lbnYuX19ORVhUX0kxOE5fU1VQUE9SVCl7ZGV0ZWN0RG9tYWluTG9jYWxlPXJlcXVpcmUoJy4uL2kxOG4vZGV0ZWN0LWRvbWFpbi1sb2NhbGUnKS5kZXRlY3REb21haW5Mb2NhbGU7fWNvbnN0IGJhc2VQYXRoPXByb2Nlc3MuZW52Ll9fTkVYVF9ST1VURVJfQkFTRVBBVEh8fCcnO2Z1bmN0aW9uIGJ1aWxkQ2FuY2VsbGF0aW9uRXJyb3IoKXtyZXR1cm4gT2JqZWN0LmFzc2lnbihuZXcgRXJyb3IoJ1JvdXRlIENhbmNlbGxlZCcpLHtjYW5jZWxsZWQ6dHJ1ZX0pO31mdW5jdGlvbiBhZGRQYXRoUHJlZml4KHBhdGgscHJlZml4KXtyZXR1cm4gcHJlZml4JiZwYXRoLnN0YXJ0c1dpdGgoJy8nKT9wYXRoPT09Jy8nPygwLF9ub3JtYWxpemVUcmFpbGluZ1NsYXNoLm5vcm1hbGl6ZVBhdGhUcmFpbGluZ1NsYXNoKShwcmVmaXgpOmAke3ByZWZpeH0ke3BhdGhOb1F1ZXJ5SGFzaChwYXRoKT09PScvJz9wYXRoLnN1YnN0cmluZygxKTpwYXRofWA6cGF0aDt9ZnVuY3Rpb24gZ2V0RG9tYWluTG9jYWxlKHBhdGgsbG9jYWxlLGxvY2FsZXMsZG9tYWluTG9jYWxlcyl7aWYocHJvY2Vzcy5lbnYuX19ORVhUX0kxOE5fU1VQUE9SVCl7bG9jYWxlPWxvY2FsZXx8KDAsX25vcm1hbGl6ZUxvY2FsZVBhdGgubm9ybWFsaXplTG9jYWxlUGF0aCkocGF0aCxsb2NhbGVzKS5kZXRlY3RlZExvY2FsZTtjb25zdCBkZXRlY3RlZERvbWFpbj1kZXRlY3REb21haW5Mb2NhbGUoZG9tYWluTG9jYWxlcyx1bmRlZmluZWQsbG9jYWxlKTtpZihkZXRlY3RlZERvbWFpbil7cmV0dXJuYGh0dHAke2RldGVjdGVkRG9tYWluLmh0dHA/Jyc6J3MnfTovLyR7ZGV0ZWN0ZWREb21haW4uZG9tYWlufSR7YmFzZVBhdGh8fCcnfSR7bG9jYWxlPT09ZGV0ZWN0ZWREb21haW4uZGVmYXVsdExvY2FsZT8nJzpgLyR7bG9jYWxlfWB9JHtwYXRofWA7fXJldHVybiBmYWxzZTt9cmV0dXJuIGZhbHNlO31mdW5jdGlvbiBhZGRMb2NhbGUocGF0aCxsb2NhbGUsZGVmYXVsdExvY2FsZSl7aWYocHJvY2Vzcy5lbnYuX19ORVhUX0kxOE5fU1VQUE9SVCl7Y29uc3QgcGF0aG5hbWU9cGF0aE5vUXVlcnlIYXNoKHBhdGgpO2NvbnN0IHBhdGhMb3dlcj1wYXRobmFtZS50b0xvd2VyQ2FzZSgpO2NvbnN0IGxvY2FsZUxvd2VyPWxvY2FsZSYmbG9jYWxlLnRvTG93ZXJDYXNlKCk7cmV0dXJuIGxvY2FsZSYmbG9jYWxlIT09ZGVmYXVsdExvY2FsZSYmIXBhdGhMb3dlci5zdGFydHNXaXRoKCcvJytsb2NhbGVMb3dlcisnLycpJiZwYXRoTG93ZXIhPT0nLycrbG9jYWxlTG93ZXI/YWRkUGF0aFByZWZpeChwYXRoLCcvJytsb2NhbGUpOnBhdGg7fXJldHVybiBwYXRoO31mdW5jdGlvbiBkZWxMb2NhbGUocGF0aCxsb2NhbGUpe2lmKHByb2Nlc3MuZW52Ll9fTkVYVF9JMThOX1NVUFBPUlQpe2NvbnN0IHBhdGhuYW1lPXBhdGhOb1F1ZXJ5SGFzaChwYXRoKTtjb25zdCBwYXRoTG93ZXI9cGF0aG5hbWUudG9Mb3dlckNhc2UoKTtjb25zdCBsb2NhbGVMb3dlcj1sb2NhbGUmJmxvY2FsZS50b0xvd2VyQ2FzZSgpO3JldHVybiBsb2NhbGUmJihwYXRoTG93ZXIuc3RhcnRzV2l0aCgnLycrbG9jYWxlTG93ZXIrJy8nKXx8cGF0aExvd2VyPT09Jy8nK2xvY2FsZUxvd2VyKT8ocGF0aG5hbWUubGVuZ3RoPT09bG9jYWxlLmxlbmd0aCsxPycvJzonJykrcGF0aC5zdWJzdHIobG9jYWxlLmxlbmd0aCsxKTpwYXRoO31yZXR1cm4gcGF0aDt9ZnVuY3Rpb24gcGF0aE5vUXVlcnlIYXNoKHBhdGgpe2NvbnN0IHF1ZXJ5SW5kZXg9cGF0aC5pbmRleE9mKCc/Jyk7Y29uc3QgaGFzaEluZGV4PXBhdGguaW5kZXhPZignIycpO2lmKHF1ZXJ5SW5kZXg+LTF8fGhhc2hJbmRleD4tMSl7cGF0aD1wYXRoLnN1YnN0cmluZygwLHF1ZXJ5SW5kZXg+LTE/cXVlcnlJbmRleDpoYXNoSW5kZXgpO31yZXR1cm4gcGF0aDt9ZnVuY3Rpb24gaGFzQmFzZVBhdGgocGF0aCl7cGF0aD1wYXRoTm9RdWVyeUhhc2gocGF0aCk7cmV0dXJuIHBhdGg9PT1iYXNlUGF0aHx8cGF0aC5zdGFydHNXaXRoKGJhc2VQYXRoKycvJyk7fWZ1bmN0aW9uIGFkZEJhc2VQYXRoKHBhdGgpey8vIHdlIG9ubHkgYWRkIHRoZSBiYXNlcGF0aCBvbiByZWxhdGl2ZSB1cmxzXG5yZXR1cm4gYWRkUGF0aFByZWZpeChwYXRoLGJhc2VQYXRoKTt9ZnVuY3Rpb24gZGVsQmFzZVBhdGgocGF0aCl7cGF0aD1wYXRoLnNsaWNlKGJhc2VQYXRoLmxlbmd0aCk7aWYoIXBhdGguc3RhcnRzV2l0aCgnLycpKXBhdGg9YC8ke3BhdGh9YDtyZXR1cm4gcGF0aDt9LyoqXG4gKiBEZXRlY3RzIHdoZXRoZXIgYSBnaXZlbiB1cmwgaXMgcm91dGFibGUgYnkgdGhlIE5leHQuanMgcm91dGVyIChicm93c2VyIG9ubHkpLlxuICovZnVuY3Rpb24gaXNMb2NhbFVSTCh1cmwpey8vIHByZXZlbnQgYSBoeWRyYXRpb24gbWlzbWF0Y2ggb24gaHJlZiBmb3IgdXJsIHdpdGggYW5jaG9yIHJlZnNcbmlmKHVybC5zdGFydHNXaXRoKCcvJyl8fHVybC5zdGFydHNXaXRoKCcjJyl8fHVybC5zdGFydHNXaXRoKCc/JykpcmV0dXJuIHRydWU7dHJ5ey8vIGFic29sdXRlIHVybHMgY2FuIGJlIGxvY2FsIGlmIHRoZXkgYXJlIG9uIHRoZSBzYW1lIG9yaWdpblxuY29uc3QgbG9jYXRpb25PcmlnaW49KDAsX3V0aWxzLmdldExvY2F0aW9uT3JpZ2luKSgpO2NvbnN0IHJlc29sdmVkPW5ldyBVUkwodXJsLGxvY2F0aW9uT3JpZ2luKTtyZXR1cm4gcmVzb2x2ZWQub3JpZ2luPT09bG9jYXRpb25PcmlnaW4mJmhhc0Jhc2VQYXRoKHJlc29sdmVkLnBhdGhuYW1lKTt9Y2F0Y2goXyl7cmV0dXJuIGZhbHNlO319ZnVuY3Rpb24gaW50ZXJwb2xhdGVBcyhyb3V0ZSxhc1BhdGhuYW1lLHF1ZXJ5KXtsZXQgaW50ZXJwb2xhdGVkUm91dGU9Jyc7Y29uc3QgZHluYW1pY1JlZ2V4PSgwLF9yb3V0ZVJlZ2V4LmdldFJvdXRlUmVnZXgpKHJvdXRlKTtjb25zdCBkeW5hbWljR3JvdXBzPWR5bmFtaWNSZWdleC5ncm91cHM7Y29uc3QgZHluYW1pY01hdGNoZXM9Ly8gVHJ5IHRvIG1hdGNoIHRoZSBkeW5hbWljIHJvdXRlIGFnYWluc3QgdGhlIGFzUGF0aFxuKGFzUGF0aG5hbWUhPT1yb3V0ZT8oMCxfcm91dGVNYXRjaGVyLmdldFJvdXRlTWF0Y2hlcikoZHluYW1pY1JlZ2V4KShhc1BhdGhuYW1lKTonJyl8fC8vIEZhbGwgYmFjayB0byByZWFkaW5nIHRoZSB2YWx1ZXMgZnJvbSB0aGUgaHJlZlxuLy8gVE9ETzogc2hvdWxkIHRoaXMgdGFrZSBwcmlvcml0eTsgYWxzbyBuZWVkIHRvIGNoYW5nZSBpbiB0aGUgcm91dGVyLlxucXVlcnk7aW50ZXJwb2xhdGVkUm91dGU9cm91dGU7Y29uc3QgcGFyYW1zPU9iamVjdC5rZXlzKGR5bmFtaWNHcm91cHMpO2lmKCFwYXJhbXMuZXZlcnkocGFyYW09PntsZXQgdmFsdWU9ZHluYW1pY01hdGNoZXNbcGFyYW1dfHwnJztjb25zdHtyZXBlYXQsb3B0aW9uYWx9PWR5bmFtaWNHcm91cHNbcGFyYW1dOy8vIHN1cHBvcnQgc2luZ2xlLWxldmVsIGNhdGNoLWFsbFxuLy8gVE9ETzogbW9yZSByb2J1c3QgaGFuZGxpbmcgZm9yIHVzZXItZXJyb3IgKHBhc3NpbmcgYC9gKVxubGV0IHJlcGxhY2VkPWBbJHtyZXBlYXQ/Jy4uLic6Jyd9JHtwYXJhbX1dYDtpZihvcHRpb25hbCl7cmVwbGFjZWQ9YCR7IXZhbHVlPycvJzonJ31bJHtyZXBsYWNlZH1dYDt9aWYocmVwZWF0JiYhQXJyYXkuaXNBcnJheSh2YWx1ZSkpdmFsdWU9W3ZhbHVlXTtyZXR1cm4ob3B0aW9uYWx8fHBhcmFtIGluIGR5bmFtaWNNYXRjaGVzKSYmKC8vIEludGVycG9sYXRlIGdyb3VwIGludG8gZGF0YSBVUkwgaWYgcHJlc2VudFxuaW50ZXJwb2xhdGVkUm91dGU9aW50ZXJwb2xhdGVkUm91dGUucmVwbGFjZShyZXBsYWNlZCxyZXBlYXQ/dmFsdWUubWFwKC8vIHRoZXNlIHZhbHVlcyBzaG91bGQgYmUgZnVsbHkgZW5jb2RlZCBpbnN0ZWFkIG9mIGp1c3Rcbi8vIHBhdGggZGVsaW1pdGVyIGVzY2FwZWQgc2luY2UgdGhleSBhcmUgYmVpbmcgaW5zZXJ0ZWRcbi8vIGludG8gdGhlIFVSTCBhbmQgd2UgZXhwZWN0IFVSTCBlbmNvZGVkIHNlZ21lbnRzXG4vLyB3aGVuIHBhcnNpbmcgZHluYW1pYyByb3V0ZSBwYXJhbXNcbnNlZ21lbnQ9PmVuY29kZVVSSUNvbXBvbmVudChzZWdtZW50KSkuam9pbignLycpOmVuY29kZVVSSUNvbXBvbmVudCh2YWx1ZSkpfHwnLycpO30pKXtpbnRlcnBvbGF0ZWRSb3V0ZT0nJzsvLyBkaWQgbm90IHNhdGlzZnkgYWxsIHJlcXVpcmVtZW50c1xuLy8gbi5iLiBXZSBpZ25vcmUgdGhpcyBlcnJvciBiZWNhdXNlIHdlIGhhbmRsZSB3YXJuaW5nIGZvciB0aGlzIGNhc2UgaW5cbi8vIGRldmVsb3BtZW50IGluIHRoZSBgPExpbms+YCBjb21wb25lbnQgZGlyZWN0bHkuXG59cmV0dXJue3BhcmFtcyxyZXN1bHQ6aW50ZXJwb2xhdGVkUm91dGV9O31mdW5jdGlvbiBvbWl0UGFybXNGcm9tUXVlcnkocXVlcnkscGFyYW1zKXtjb25zdCBmaWx0ZXJlZFF1ZXJ5PXt9O09iamVjdC5rZXlzKHF1ZXJ5KS5mb3JFYWNoKGtleT0+e2lmKCFwYXJhbXMuaW5jbHVkZXMoa2V5KSl7ZmlsdGVyZWRRdWVyeVtrZXldPXF1ZXJ5W2tleV07fX0pO3JldHVybiBmaWx0ZXJlZFF1ZXJ5O30vKipcbiAqIFJlc29sdmVzIGEgZ2l2ZW4gaHlwZXJsaW5rIHdpdGggYSBjZXJ0YWluIHJvdXRlciBzdGF0ZSAoYmFzZVBhdGggbm90IGluY2x1ZGVkKS5cbiAqIFByZXNlcnZlcyBhYnNvbHV0ZSB1cmxzLlxuICovZnVuY3Rpb24gcmVzb2x2ZUhyZWYocm91dGVyLGhyZWYscmVzb2x2ZUFzKXsvLyB3ZSB1c2UgYSBkdW1teSBiYXNlIHVybCBmb3IgcmVsYXRpdmUgdXJsc1xubGV0IGJhc2U7Y29uc3QgdXJsQXNTdHJpbmc9dHlwZW9mIGhyZWY9PT0nc3RyaW5nJz9ocmVmOigwLF91dGlscy5mb3JtYXRXaXRoVmFsaWRhdGlvbikoaHJlZik7dHJ5e2Jhc2U9bmV3IFVSTCh1cmxBc1N0cmluZy5zdGFydHNXaXRoKCcjJyk/cm91dGVyLmFzUGF0aDpyb3V0ZXIucGF0aG5hbWUsJ2h0dHA6Ly9uJyk7fWNhdGNoKF8pey8vIGZhbGxiYWNrIHRvIC8gZm9yIGludmFsaWQgYXNQYXRoIHZhbHVlcyBlLmcuIC8vXG5iYXNlPW5ldyBVUkwoJy8nLCdodHRwOi8vbicpO30vLyBSZXR1cm4gYmVjYXVzZSBpdCBjYW5ub3QgYmUgcm91dGVkIGJ5IHRoZSBOZXh0LmpzIHJvdXRlclxuaWYoIWlzTG9jYWxVUkwodXJsQXNTdHJpbmcpKXtyZXR1cm4gcmVzb2x2ZUFzP1t1cmxBc1N0cmluZ106dXJsQXNTdHJpbmc7fXRyeXtjb25zdCBmaW5hbFVybD1uZXcgVVJMKHVybEFzU3RyaW5nLGJhc2UpO2ZpbmFsVXJsLnBhdGhuYW1lPSgwLF9ub3JtYWxpemVUcmFpbGluZ1NsYXNoLm5vcm1hbGl6ZVBhdGhUcmFpbGluZ1NsYXNoKShmaW5hbFVybC5wYXRobmFtZSk7bGV0IGludGVycG9sYXRlZEFzPScnO2lmKCgwLF9pc0R5bmFtaWMuaXNEeW5hbWljUm91dGUpKGZpbmFsVXJsLnBhdGhuYW1lKSYmZmluYWxVcmwuc2VhcmNoUGFyYW1zJiZyZXNvbHZlQXMpe2NvbnN0IHF1ZXJ5PSgwLF9xdWVyeXN0cmluZy5zZWFyY2hQYXJhbXNUb1VybFF1ZXJ5KShmaW5hbFVybC5zZWFyY2hQYXJhbXMpO2NvbnN0e3Jlc3VsdCxwYXJhbXN9PWludGVycG9sYXRlQXMoZmluYWxVcmwucGF0aG5hbWUsZmluYWxVcmwucGF0aG5hbWUscXVlcnkpO2lmKHJlc3VsdCl7aW50ZXJwb2xhdGVkQXM9KDAsX3V0aWxzLmZvcm1hdFdpdGhWYWxpZGF0aW9uKSh7cGF0aG5hbWU6cmVzdWx0LGhhc2g6ZmluYWxVcmwuaGFzaCxxdWVyeTpvbWl0UGFybXNGcm9tUXVlcnkocXVlcnkscGFyYW1zKX0pO319Ly8gaWYgdGhlIG9yaWdpbiBkaWRuJ3QgY2hhbmdlLCBpdCBtZWFucyB3ZSByZWNlaXZlZCBhIHJlbGF0aXZlIGhyZWZcbmNvbnN0IHJlc29sdmVkSHJlZj1maW5hbFVybC5vcmlnaW49PT1iYXNlLm9yaWdpbj9maW5hbFVybC5ocmVmLnNsaWNlKGZpbmFsVXJsLm9yaWdpbi5sZW5ndGgpOmZpbmFsVXJsLmhyZWY7cmV0dXJuIHJlc29sdmVBcz9bcmVzb2x2ZWRIcmVmLGludGVycG9sYXRlZEFzfHxyZXNvbHZlZEhyZWZdOnJlc29sdmVkSHJlZjt9Y2F0Y2goXyl7cmV0dXJuIHJlc29sdmVBcz9bdXJsQXNTdHJpbmddOnVybEFzU3RyaW5nO319ZnVuY3Rpb24gc3RyaXBPcmlnaW4odXJsKXtjb25zdCBvcmlnaW49KDAsX3V0aWxzLmdldExvY2F0aW9uT3JpZ2luKSgpO3JldHVybiB1cmwuc3RhcnRzV2l0aChvcmlnaW4pP3VybC5zdWJzdHJpbmcob3JpZ2luLmxlbmd0aCk6dXJsO31mdW5jdGlvbiBwcmVwYXJlVXJsQXMocm91dGVyLHVybCxhcyl7Ly8gSWYgdXJsIGFuZCBhcyBwcm92aWRlZCBhcyBhbiBvYmplY3QgcmVwcmVzZW50YXRpb24sXG4vLyB3ZSdsbCBmb3JtYXQgdGhlbSBpbnRvIHRoZSBzdHJpbmcgdmVyc2lvbiBoZXJlLlxubGV0W3Jlc29sdmVkSHJlZixyZXNvbHZlZEFzXT1yZXNvbHZlSHJlZihyb3V0ZXIsdXJsLHRydWUpO2NvbnN0IG9yaWdpbj0oMCxfdXRpbHMuZ2V0TG9jYXRpb25PcmlnaW4pKCk7Y29uc3QgaHJlZkhhZE9yaWdpbj1yZXNvbHZlZEhyZWYuc3RhcnRzV2l0aChvcmlnaW4pO2NvbnN0IGFzSGFkT3JpZ2luPXJlc29sdmVkQXMmJnJlc29sdmVkQXMuc3RhcnRzV2l0aChvcmlnaW4pO3Jlc29sdmVkSHJlZj1zdHJpcE9yaWdpbihyZXNvbHZlZEhyZWYpO3Jlc29sdmVkQXM9cmVzb2x2ZWRBcz9zdHJpcE9yaWdpbihyZXNvbHZlZEFzKTpyZXNvbHZlZEFzO2NvbnN0IHByZXBhcmVkVXJsPWhyZWZIYWRPcmlnaW4/cmVzb2x2ZWRIcmVmOmFkZEJhc2VQYXRoKHJlc29sdmVkSHJlZik7Y29uc3QgcHJlcGFyZWRBcz1hcz9zdHJpcE9yaWdpbihyZXNvbHZlSHJlZihyb3V0ZXIsYXMpKTpyZXNvbHZlZEFzfHxyZXNvbHZlZEhyZWY7cmV0dXJue3VybDpwcmVwYXJlZFVybCxhczphc0hhZE9yaWdpbj9wcmVwYXJlZEFzOmFkZEJhc2VQYXRoKHByZXBhcmVkQXMpfTt9ZnVuY3Rpb24gcmVzb2x2ZUR5bmFtaWNSb3V0ZShwYXRobmFtZSxwYWdlcyl7Y29uc3QgY2xlYW5QYXRobmFtZT0oMCxfbm9ybWFsaXplVHJhaWxpbmdTbGFzaC5yZW1vdmVQYXRoVHJhaWxpbmdTbGFzaCkoKDAsX2Rlbm9ybWFsaXplUGFnZVBhdGguZGVub3JtYWxpemVQYWdlUGF0aCkocGF0aG5hbWUpKTtpZihjbGVhblBhdGhuYW1lPT09Jy80MDQnfHxjbGVhblBhdGhuYW1lPT09Jy9fZXJyb3InKXtyZXR1cm4gcGF0aG5hbWU7fS8vIGhhbmRsZSByZXNvbHZpbmcgaHJlZiBmb3IgZHluYW1pYyByb3V0ZXNcbmlmKCFwYWdlcy5pbmNsdWRlcyhjbGVhblBhdGhuYW1lKSl7Ly8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIGFycmF5LWNhbGxiYWNrLXJldHVyblxucGFnZXMuc29tZShwYWdlPT57aWYoKDAsX2lzRHluYW1pYy5pc0R5bmFtaWNSb3V0ZSkocGFnZSkmJigwLF9yb3V0ZVJlZ2V4LmdldFJvdXRlUmVnZXgpKHBhZ2UpLnJlLnRlc3QoY2xlYW5QYXRobmFtZSkpe3BhdGhuYW1lPXBhZ2U7cmV0dXJuIHRydWU7fX0pO31yZXR1cm4oMCxfbm9ybWFsaXplVHJhaWxpbmdTbGFzaC5yZW1vdmVQYXRoVHJhaWxpbmdTbGFzaCkocGF0aG5hbWUpO31jb25zdCBtYW51YWxTY3JvbGxSZXN0b3JhdGlvbj1wcm9jZXNzLmVudi5fX05FWFRfU0NST0xMX1JFU1RPUkFUSU9OJiZ0eXBlb2Ygd2luZG93IT09J3VuZGVmaW5lZCcmJidzY3JvbGxSZXN0b3JhdGlvbidpbiB3aW5kb3cuaGlzdG9yeSYmISFmdW5jdGlvbigpe3RyeXtsZXQgdj0nX19uZXh0JzsvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tc2VxdWVuY2VzXG5yZXR1cm4gc2Vzc2lvblN0b3JhZ2Uuc2V0SXRlbSh2LHYpLHNlc3Npb25TdG9yYWdlLnJlbW92ZUl0ZW0odiksdHJ1ZTt9Y2F0Y2gobil7fX0oKTtjb25zdCBTU0dfREFUQV9OT1RfRk9VTkQ9U3ltYm9sKCdTU0dfREFUQV9OT1RfRk9VTkQnKTtmdW5jdGlvbiBmZXRjaFJldHJ5KHVybCxhdHRlbXB0cyl7cmV0dXJuIGZldGNoKHVybCx7Ly8gQ29va2llcyBhcmUgcmVxdWlyZWQgdG8gYmUgcHJlc2VudCBmb3IgTmV4dC5qcycgU1NHIFwiUHJldmlldyBNb2RlXCIuXG4vLyBDb29raWVzIG1heSBhbHNvIGJlIHJlcXVpcmVkIGZvciBgZ2V0U2VydmVyU2lkZVByb3BzYC5cbi8vXG4vLyA+IGBmZXRjaGAgd29u4oCZdCBzZW5kIGNvb2tpZXMsIHVubGVzcyB5b3Ugc2V0IHRoZSBjcmVkZW50aWFscyBpbml0XG4vLyA+IG9wdGlvbi5cbi8vIGh0dHBzOi8vZGV2ZWxvcGVyLm1vemlsbGEub3JnL2VuLVVTL2RvY3MvV2ViL0FQSS9GZXRjaF9BUEkvVXNpbmdfRmV0Y2hcbi8vXG4vLyA+IEZvciBtYXhpbXVtIGJyb3dzZXIgY29tcGF0aWJpbGl0eSB3aGVuIGl0IGNvbWVzIHRvIHNlbmRpbmcgJlxuLy8gPiByZWNlaXZpbmcgY29va2llcywgYWx3YXlzIHN1cHBseSB0aGUgYGNyZWRlbnRpYWxzOiAnc2FtZS1vcmlnaW4nYFxuLy8gPiBvcHRpb24gaW5zdGVhZCBvZiByZWx5aW5nIG9uIHRoZSBkZWZhdWx0LlxuLy8gaHR0cHM6Ly9naXRodWIuY29tL2dpdGh1Yi9mZXRjaCNjYXZlYXRzXG5jcmVkZW50aWFsczonc2FtZS1vcmlnaW4nfSkudGhlbihyZXM9PntpZighcmVzLm9rKXtpZihhdHRlbXB0cz4xJiZyZXMuc3RhdHVzPj01MDApe3JldHVybiBmZXRjaFJldHJ5KHVybCxhdHRlbXB0cy0xKTt9aWYocmVzLnN0YXR1cz09PTQwNCl7cmV0dXJuIHJlcy5qc29uKCkudGhlbihkYXRhPT57aWYoZGF0YS5ub3RGb3VuZCl7cmV0dXJue25vdEZvdW5kOlNTR19EQVRBX05PVF9GT1VORH07fXRocm93IG5ldyBFcnJvcihgRmFpbGVkIHRvIGxvYWQgc3RhdGljIHByb3BzYCk7fSk7fXRocm93IG5ldyBFcnJvcihgRmFpbGVkIHRvIGxvYWQgc3RhdGljIHByb3BzYCk7fXJldHVybiByZXMuanNvbigpO30pO31mdW5jdGlvbiBmZXRjaE5leHREYXRhKGRhdGFIcmVmLGlzU2VydmVyUmVuZGVyKXtyZXR1cm4gZmV0Y2hSZXRyeShkYXRhSHJlZixpc1NlcnZlclJlbmRlcj8zOjEpLmNhdGNoKGVycj0+ey8vIFdlIHNob3VsZCBvbmx5IHRyaWdnZXIgYSBzZXJ2ZXItc2lkZSB0cmFuc2l0aW9uIGlmIHRoaXMgd2FzIGNhdXNlZFxuLy8gb24gYSBjbGllbnQtc2lkZSB0cmFuc2l0aW9uLiBPdGhlcndpc2UsIHdlJ2QgZ2V0IGludG8gYW4gaW5maW5pdGVcbi8vIGxvb3AuXG5pZighaXNTZXJ2ZXJSZW5kZXIpeygwLF9yb3V0ZUxvYWRlci5tYXJrQXNzZXRFcnJvcikoZXJyKTt9dGhyb3cgZXJyO30pO31jbGFzcyBSb3V0ZXJ7LyoqXG4gICAqIE1hcCBvZiBhbGwgY29tcG9uZW50cyBsb2FkZWQgaW4gYFJvdXRlcmBcbiAgICovIC8vIFN0YXRpYyBEYXRhIENhY2hlXG4vLyBJbi1mbGlnaHQgU2VydmVyIERhdGEgUmVxdWVzdHMsIGZvciBkZWR1cGluZ1xuY29uc3RydWN0b3IoX3BhdGhuYW1lLF9xdWVyeSxfYXMse2luaXRpYWxQcm9wcyxwYWdlTG9hZGVyLEFwcCx3cmFwQXBwLENvbXBvbmVudCxlcnIsc3Vic2NyaXB0aW9uLGlzRmFsbGJhY2ssbG9jYWxlLGxvY2FsZXMsZGVmYXVsdExvY2FsZSxkb21haW5Mb2NhbGVzLGlzUHJldmlld30pe3RoaXMucm91dGU9dm9pZCAwO3RoaXMucGF0aG5hbWU9dm9pZCAwO3RoaXMucXVlcnk9dm9pZCAwO3RoaXMuYXNQYXRoPXZvaWQgMDt0aGlzLmJhc2VQYXRoPXZvaWQgMDt0aGlzLmNvbXBvbmVudHM9dm9pZCAwO3RoaXMuc2RjPXt9O3RoaXMuc2RyPXt9O3RoaXMuc3ViPXZvaWQgMDt0aGlzLmNsYz12b2lkIDA7dGhpcy5wYWdlTG9hZGVyPXZvaWQgMDt0aGlzLl9icHM9dm9pZCAwO3RoaXMuZXZlbnRzPXZvaWQgMDt0aGlzLl93cmFwQXBwPXZvaWQgMDt0aGlzLmlzU3NyPXZvaWQgMDt0aGlzLmlzRmFsbGJhY2s9dm9pZCAwO3RoaXMuX2luRmxpZ2h0Um91dGU9dm9pZCAwO3RoaXMuX3NoYWxsb3c9dm9pZCAwO3RoaXMubG9jYWxlPXZvaWQgMDt0aGlzLmxvY2FsZXM9dm9pZCAwO3RoaXMuZGVmYXVsdExvY2FsZT12b2lkIDA7dGhpcy5kb21haW5Mb2NhbGVzPXZvaWQgMDt0aGlzLmlzUmVhZHk9dm9pZCAwO3RoaXMuaXNQcmV2aWV3PXZvaWQgMDt0aGlzLmlzTG9jYWxlRG9tYWluPXZvaWQgMDt0aGlzLl9pZHg9MDt0aGlzLm9uUG9wU3RhdGU9ZT0+e2NvbnN0IHN0YXRlPWUuc3RhdGU7aWYoIXN0YXRlKXsvLyBXZSBnZXQgc3RhdGUgYXMgdW5kZWZpbmVkIGZvciB0d28gcmVhc29ucy5cbi8vICAxLiBXaXRoIG9sZGVyIHNhZmFyaSAoPCA4KSBhbmQgb2xkZXIgY2hyb21lICg8IDM0KVxuLy8gIDIuIFdoZW4gdGhlIFVSTCBjaGFuZ2VkIHdpdGggI1xuLy9cbi8vIEluIHRoZSBib3RoIGNhc2VzLCB3ZSBkb24ndCBuZWVkIHRvIHByb2NlZWQgYW5kIGNoYW5nZSB0aGUgcm91dGUuXG4vLyAoYXMgaXQncyBhbHJlYWR5IGNoYW5nZWQpXG4vLyBCdXQgd2UgY2FuIHNpbXBseSByZXBsYWNlIHRoZSBzdGF0ZSB3aXRoIHRoZSBuZXcgY2hhbmdlcy5cbi8vIEFjdHVhbGx5LCBmb3IgKDEpIHdlIGRvbid0IG5lZWQgdG8gbm90aGluZy4gQnV0IGl0J3MgaGFyZCB0byBkZXRlY3QgdGhhdCBldmVudC5cbi8vIFNvLCBkb2luZyB0aGUgZm9sbG93aW5nIGZvciAoMSkgZG9lcyBubyBoYXJtLlxuY29uc3R7cGF0aG5hbWUscXVlcnl9PXRoaXM7dGhpcy5jaGFuZ2VTdGF0ZSgncmVwbGFjZVN0YXRlJywoMCxfdXRpbHMuZm9ybWF0V2l0aFZhbGlkYXRpb24pKHtwYXRobmFtZTphZGRCYXNlUGF0aChwYXRobmFtZSkscXVlcnl9KSwoMCxfdXRpbHMuZ2V0VVJMKSgpKTtyZXR1cm47fWlmKCFzdGF0ZS5fX04pe3JldHVybjt9bGV0IGZvcmNlZFNjcm9sbDtjb25zdHt1cmwsYXMsb3B0aW9ucyxpZHh9PXN0YXRlO2lmKHByb2Nlc3MuZW52Ll9fTkVYVF9TQ1JPTExfUkVTVE9SQVRJT04pe2lmKG1hbnVhbFNjcm9sbFJlc3RvcmF0aW9uKXtpZih0aGlzLl9pZHghPT1pZHgpey8vIFNuYXBzaG90IGN1cnJlbnQgc2Nyb2xsIHBvc2l0aW9uOlxudHJ5e3Nlc3Npb25TdG9yYWdlLnNldEl0ZW0oJ19fbmV4dF9zY3JvbGxfJyt0aGlzLl9pZHgsSlNPTi5zdHJpbmdpZnkoe3g6c2VsZi5wYWdlWE9mZnNldCx5OnNlbGYucGFnZVlPZmZzZXR9KSk7fWNhdGNoKF91bnVzZWQpe30vLyBSZXN0b3JlIG9sZCBzY3JvbGwgcG9zaXRpb246XG50cnl7Y29uc3Qgdj1zZXNzaW9uU3RvcmFnZS5nZXRJdGVtKCdfX25leHRfc2Nyb2xsXycraWR4KTtmb3JjZWRTY3JvbGw9SlNPTi5wYXJzZSh2KTt9Y2F0Y2goX3VudXNlZDIpe2ZvcmNlZFNjcm9sbD17eDowLHk6MH07fX19fXRoaXMuX2lkeD1pZHg7Y29uc3R7cGF0aG5hbWV9PSgwLF9wYXJzZVJlbGF0aXZlVXJsLnBhcnNlUmVsYXRpdmVVcmwpKHVybCk7Ly8gTWFrZSBzdXJlIHdlIGRvbid0IHJlLXJlbmRlciBvbiBpbml0aWFsIGxvYWQsXG4vLyBjYW4gYmUgY2F1c2VkIGJ5IG5hdmlnYXRpbmcgYmFjayBmcm9tIGFuIGV4dGVybmFsIHNpdGVcbmlmKHRoaXMuaXNTc3ImJmFzPT09dGhpcy5hc1BhdGgmJnBhdGhuYW1lPT09dGhpcy5wYXRobmFtZSl7cmV0dXJuO30vLyBJZiB0aGUgZG93bnN0cmVhbSBhcHBsaWNhdGlvbiByZXR1cm5zIGZhbHN5LCByZXR1cm4uXG4vLyBUaGV5IHdpbGwgdGhlbiBiZSByZXNwb25zaWJsZSBmb3IgaGFuZGxpbmcgdGhlIGV2ZW50LlxuaWYodGhpcy5fYnBzJiYhdGhpcy5fYnBzKHN0YXRlKSl7cmV0dXJuO310aGlzLmNoYW5nZSgncmVwbGFjZVN0YXRlJyx1cmwsYXMsT2JqZWN0LmFzc2lnbih7fSxvcHRpb25zLHtzaGFsbG93Om9wdGlvbnMuc2hhbGxvdyYmdGhpcy5fc2hhbGxvdyxsb2NhbGU6b3B0aW9ucy5sb2NhbGV8fHRoaXMuZGVmYXVsdExvY2FsZX0pLGZvcmNlZFNjcm9sbCk7fTsvLyByZXByZXNlbnRzIHRoZSBjdXJyZW50IGNvbXBvbmVudCBrZXlcbnRoaXMucm91dGU9KDAsX25vcm1hbGl6ZVRyYWlsaW5nU2xhc2gucmVtb3ZlUGF0aFRyYWlsaW5nU2xhc2gpKF9wYXRobmFtZSk7Ly8gc2V0IHVwIHRoZSBjb21wb25lbnQgY2FjaGUgKGJ5IHJvdXRlIGtleXMpXG50aGlzLmNvbXBvbmVudHM9e307Ly8gV2Ugc2hvdWxkIG5vdCBrZWVwIHRoZSBjYWNoZSwgaWYgdGhlcmUncyBhbiBlcnJvclxuLy8gT3RoZXJ3aXNlLCB0aGlzIGNhdXNlIGlzc3VlcyB3aGVuIHdoZW4gZ29pbmcgYmFjayBhbmRcbi8vIGNvbWUgYWdhaW4gdG8gdGhlIGVycm9yZWQgcGFnZS5cbmlmKF9wYXRobmFtZSE9PScvX2Vycm9yJyl7dGhpcy5jb21wb25lbnRzW3RoaXMucm91dGVdPXtDb21wb25lbnQsaW5pdGlhbDp0cnVlLHByb3BzOmluaXRpYWxQcm9wcyxlcnIsX19OX1NTRzppbml0aWFsUHJvcHMmJmluaXRpYWxQcm9wcy5fX05fU1NHLF9fTl9TU1A6aW5pdGlhbFByb3BzJiZpbml0aWFsUHJvcHMuX19OX1NTUH07fXRoaXMuY29tcG9uZW50c1snL19hcHAnXT17Q29tcG9uZW50OkFwcCxzdHlsZVNoZWV0czpbLyogL19hcHAgZG9lcyBub3QgbmVlZCBpdHMgc3R5bGVzaGVldHMgbWFuYWdlZCAqL119Oy8vIEJhY2t3YXJkcyBjb21wYXQgZm9yIFJvdXRlci5yb3V0ZXIuZXZlbnRzXG4vLyBUT0RPOiBTaG91bGQgYmUgcmVtb3ZlIHRoZSBmb2xsb3dpbmcgbWFqb3IgdmVyc2lvbiBhcyBpdCB3YXMgbmV2ZXIgZG9jdW1lbnRlZFxudGhpcy5ldmVudHM9Um91dGVyLmV2ZW50czt0aGlzLnBhZ2VMb2FkZXI9cGFnZUxvYWRlcjt0aGlzLnBhdGhuYW1lPV9wYXRobmFtZTt0aGlzLnF1ZXJ5PV9xdWVyeTsvLyBpZiBhdXRvIHByZXJlbmRlcmVkIGFuZCBkeW5hbWljIHJvdXRlIHdhaXQgdG8gdXBkYXRlIGFzUGF0aFxuLy8gdW50aWwgYWZ0ZXIgbW91bnQgdG8gcHJldmVudCBoeWRyYXRpb24gbWlzbWF0Y2hcbmNvbnN0IGF1dG9FeHBvcnREeW5hbWljPSgwLF9pc0R5bmFtaWMuaXNEeW5hbWljUm91dGUpKF9wYXRobmFtZSkmJnNlbGYuX19ORVhUX0RBVEFfXy5hdXRvRXhwb3J0O3RoaXMuYXNQYXRoPWF1dG9FeHBvcnREeW5hbWljP19wYXRobmFtZTpfYXM7dGhpcy5iYXNlUGF0aD1iYXNlUGF0aDt0aGlzLnN1Yj1zdWJzY3JpcHRpb247dGhpcy5jbGM9bnVsbDt0aGlzLl93cmFwQXBwPXdyYXBBcHA7Ly8gbWFrZSBzdXJlIHRvIGlnbm9yZSBleHRyYSBwb3BTdGF0ZSBpbiBzYWZhcmkgb24gbmF2aWdhdGluZ1xuLy8gYmFjayBmcm9tIGV4dGVybmFsIHNpdGVcbnRoaXMuaXNTc3I9dHJ1ZTt0aGlzLmlzRmFsbGJhY2s9aXNGYWxsYmFjazt0aGlzLmlzUmVhZHk9ISEoc2VsZi5fX05FWFRfREFUQV9fLmdzc3B8fHNlbGYuX19ORVhUX0RBVEFfXy5naXB8fCFhdXRvRXhwb3J0RHluYW1pYyYmIXNlbGYubG9jYXRpb24uc2VhcmNoJiYhcHJvY2Vzcy5lbnYuX19ORVhUX0hBU19SRVdSSVRFUyk7dGhpcy5pc1ByZXZpZXc9ISFpc1ByZXZpZXc7dGhpcy5pc0xvY2FsZURvbWFpbj1mYWxzZTtpZihwcm9jZXNzLmVudi5fX05FWFRfSTE4Tl9TVVBQT1JUKXt0aGlzLmxvY2FsZT1sb2NhbGU7dGhpcy5sb2NhbGVzPWxvY2FsZXM7dGhpcy5kZWZhdWx0TG9jYWxlPWRlZmF1bHRMb2NhbGU7dGhpcy5kb21haW5Mb2NhbGVzPWRvbWFpbkxvY2FsZXM7dGhpcy5pc0xvY2FsZURvbWFpbj0hIWRldGVjdERvbWFpbkxvY2FsZShkb21haW5Mb2NhbGVzLHNlbGYubG9jYXRpb24uaG9zdG5hbWUpO31pZih0eXBlb2Ygd2luZG93IT09J3VuZGVmaW5lZCcpey8vIG1ha2Ugc3VyZSBcImFzXCIgZG9lc24ndCBzdGFydCB3aXRoIGRvdWJsZSBzbGFzaGVzIG9yIGVsc2UgaXQgY2FuXG4vLyB0aHJvdyBhbiBlcnJvciBhcyBpdCdzIGNvbnNpZGVyZWQgaW52YWxpZFxuaWYoX2FzLnN1YnN0cigwLDIpIT09Jy8vJyl7Ly8gaW4gb3JkZXIgZm9yIGBlLnN0YXRlYCB0byB3b3JrIG9uIHRoZSBgb25wb3BzdGF0ZWAgZXZlbnRcbi8vIHdlIGhhdmUgdG8gcmVnaXN0ZXIgdGhlIGluaXRpYWwgcm91dGUgdXBvbiBpbml0aWFsaXphdGlvblxuY29uc3Qgb3B0aW9ucz17bG9jYWxlfTtvcHRpb25zLl9zaG91bGRSZXNvbHZlSHJlZj1fYXMhPT1fcGF0aG5hbWU7dGhpcy5jaGFuZ2VTdGF0ZSgncmVwbGFjZVN0YXRlJywoMCxfdXRpbHMuZm9ybWF0V2l0aFZhbGlkYXRpb24pKHtwYXRobmFtZTphZGRCYXNlUGF0aChfcGF0aG5hbWUpLHF1ZXJ5Ol9xdWVyeX0pLCgwLF91dGlscy5nZXRVUkwpKCksb3B0aW9ucyk7fXdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdwb3BzdGF0ZScsdGhpcy5vblBvcFN0YXRlKTsvLyBlbmFibGUgY3VzdG9tIHNjcm9sbCByZXN0b3JhdGlvbiBoYW5kbGluZyB3aGVuIGF2YWlsYWJsZVxuLy8gb3RoZXJ3aXNlIGZhbGxiYWNrIHRvIGJyb3dzZXIncyBkZWZhdWx0IGhhbmRsaW5nXG5pZihwcm9jZXNzLmVudi5fX05FWFRfU0NST0xMX1JFU1RPUkFUSU9OKXtpZihtYW51YWxTY3JvbGxSZXN0b3JhdGlvbil7d2luZG93Lmhpc3Rvcnkuc2Nyb2xsUmVzdG9yYXRpb249J21hbnVhbCc7fX19fXJlbG9hZCgpe3dpbmRvdy5sb2NhdGlvbi5yZWxvYWQoKTt9LyoqXG4gICAqIEdvIGJhY2sgaW4gaGlzdG9yeVxuICAgKi9iYWNrKCl7d2luZG93Lmhpc3RvcnkuYmFjaygpO30vKipcbiAgICogUGVyZm9ybXMgYSBgcHVzaFN0YXRlYCB3aXRoIGFyZ3VtZW50c1xuICAgKiBAcGFyYW0gdXJsIG9mIHRoZSByb3V0ZVxuICAgKiBAcGFyYW0gYXMgbWFza3MgYHVybGAgZm9yIHRoZSBicm93c2VyXG4gICAqIEBwYXJhbSBvcHRpb25zIG9iamVjdCB5b3UgY2FuIGRlZmluZSBgc2hhbGxvd2AgYW5kIG90aGVyIG9wdGlvbnNcbiAgICovcHVzaCh1cmwsYXMsb3B0aW9ucz17fSl7aWYocHJvY2Vzcy5lbnYuX19ORVhUX1NDUk9MTF9SRVNUT1JBVElPTil7Ly8gVE9ETzogcmVtb3ZlIGluIHRoZSBmdXR1cmUgd2hlbiB3ZSB1cGRhdGUgaGlzdG9yeSBiZWZvcmUgcm91dGUgY2hhbmdlXG4vLyBpcyBjb21wbGV0ZSwgYXMgdGhlIHBvcHN0YXRlIGV2ZW50IHNob3VsZCBoYW5kbGUgdGhpcyBjYXB0dXJlLlxuaWYobWFudWFsU2Nyb2xsUmVzdG9yYXRpb24pe3RyeXsvLyBTbmFwc2hvdCBzY3JvbGwgcG9zaXRpb24gcmlnaHQgYmVmb3JlIG5hdmlnYXRpbmcgdG8gYSBuZXcgcGFnZTpcbnNlc3Npb25TdG9yYWdlLnNldEl0ZW0oJ19fbmV4dF9zY3JvbGxfJyt0aGlzLl9pZHgsSlNPTi5zdHJpbmdpZnkoe3g6c2VsZi5wYWdlWE9mZnNldCx5OnNlbGYucGFnZVlPZmZzZXR9KSk7fWNhdGNoKF91bnVzZWQzKXt9fX07KHt1cmwsYXN9PXByZXBhcmVVcmxBcyh0aGlzLHVybCxhcykpO3JldHVybiB0aGlzLmNoYW5nZSgncHVzaFN0YXRlJyx1cmwsYXMsb3B0aW9ucyk7fS8qKlxuICAgKiBQZXJmb3JtcyBhIGByZXBsYWNlU3RhdGVgIHdpdGggYXJndW1lbnRzXG4gICAqIEBwYXJhbSB1cmwgb2YgdGhlIHJvdXRlXG4gICAqIEBwYXJhbSBhcyBtYXNrcyBgdXJsYCBmb3IgdGhlIGJyb3dzZXJcbiAgICogQHBhcmFtIG9wdGlvbnMgb2JqZWN0IHlvdSBjYW4gZGVmaW5lIGBzaGFsbG93YCBhbmQgb3RoZXIgb3B0aW9uc1xuICAgKi9yZXBsYWNlKHVybCxhcyxvcHRpb25zPXt9KXs7KHt1cmwsYXN9PXByZXBhcmVVcmxBcyh0aGlzLHVybCxhcykpO3JldHVybiB0aGlzLmNoYW5nZSgncmVwbGFjZVN0YXRlJyx1cmwsYXMsb3B0aW9ucyk7fWFzeW5jIGNoYW5nZShtZXRob2QsdXJsLGFzLG9wdGlvbnMsZm9yY2VkU2Nyb2xsKXtpZighaXNMb2NhbFVSTCh1cmwpKXt3aW5kb3cubG9jYXRpb24uaHJlZj11cmw7cmV0dXJuIGZhbHNlO31jb25zdCBzaG91bGRSZXNvbHZlSHJlZj11cmw9PT1hc3x8b3B0aW9ucy5faHx8b3B0aW9ucy5fc2hvdWxkUmVzb2x2ZUhyZWY7Ly8gZm9yIHN0YXRpYyBwYWdlcyB3aXRoIHF1ZXJ5IHBhcmFtcyBpbiB0aGUgVVJMIHdlIGRlbGF5XG4vLyBtYXJraW5nIHRoZSByb3V0ZXIgcmVhZHkgdW50aWwgYWZ0ZXIgdGhlIHF1ZXJ5IGlzIHVwZGF0ZWRcbmlmKG9wdGlvbnMuX2gpe3RoaXMuaXNSZWFkeT10cnVlO31sZXQgbG9jYWxlQ2hhbmdlPW9wdGlvbnMubG9jYWxlIT09dGhpcy5sb2NhbGU7aWYocHJvY2Vzcy5lbnYuX19ORVhUX0kxOE5fU1VQUE9SVCl7dGhpcy5sb2NhbGU9b3B0aW9ucy5sb2NhbGU9PT1mYWxzZT90aGlzLmRlZmF1bHRMb2NhbGU6b3B0aW9ucy5sb2NhbGV8fHRoaXMubG9jYWxlO2lmKHR5cGVvZiBvcHRpb25zLmxvY2FsZT09PSd1bmRlZmluZWQnKXtvcHRpb25zLmxvY2FsZT10aGlzLmxvY2FsZTt9Y29uc3QgcGFyc2VkQXM9KDAsX3BhcnNlUmVsYXRpdmVVcmwucGFyc2VSZWxhdGl2ZVVybCkoaGFzQmFzZVBhdGgoYXMpP2RlbEJhc2VQYXRoKGFzKTphcyk7Y29uc3QgbG9jYWxlUGF0aFJlc3VsdD0oMCxfbm9ybWFsaXplTG9jYWxlUGF0aC5ub3JtYWxpemVMb2NhbGVQYXRoKShwYXJzZWRBcy5wYXRobmFtZSx0aGlzLmxvY2FsZXMpO2lmKGxvY2FsZVBhdGhSZXN1bHQuZGV0ZWN0ZWRMb2NhbGUpe3RoaXMubG9jYWxlPWxvY2FsZVBhdGhSZXN1bHQuZGV0ZWN0ZWRMb2NhbGU7cGFyc2VkQXMucGF0aG5hbWU9YWRkQmFzZVBhdGgocGFyc2VkQXMucGF0aG5hbWUpO2FzPSgwLF91dGlscy5mb3JtYXRXaXRoVmFsaWRhdGlvbikocGFyc2VkQXMpO3VybD1hZGRCYXNlUGF0aCgoMCxfbm9ybWFsaXplTG9jYWxlUGF0aC5ub3JtYWxpemVMb2NhbGVQYXRoKShoYXNCYXNlUGF0aCh1cmwpP2RlbEJhc2VQYXRoKHVybCk6dXJsLHRoaXMubG9jYWxlcykucGF0aG5hbWUpO31sZXQgZGlkTmF2aWdhdGU9ZmFsc2U7Ly8gd2UgbmVlZCB0byB3cmFwIHRoaXMgaW4gdGhlIGVudiBjaGVjayBhZ2FpbiBzaW5jZSByZWdlbmVyYXRvciBydW50aW1lXG4vLyBtb3ZlcyB0aGlzIG9uIGl0cyBvd24gZHVlIHRvIHRoZSByZXR1cm5cbmlmKHByb2Nlc3MuZW52Ll9fTkVYVF9JMThOX1NVUFBPUlQpe3ZhciBfdGhpcyRsb2NhbGVzOy8vIGlmIHRoZSBsb2NhbGUgaXNuJ3QgY29uZmlndXJlZCBoYXJkIG5hdmlnYXRlIHRvIHNob3cgNDA0IHBhZ2VcbmlmKCEoKF90aGlzJGxvY2FsZXM9dGhpcy5sb2NhbGVzKSE9bnVsbCYmX3RoaXMkbG9jYWxlcy5pbmNsdWRlcyh0aGlzLmxvY2FsZSkpKXtwYXJzZWRBcy5wYXRobmFtZT1hZGRMb2NhbGUocGFyc2VkQXMucGF0aG5hbWUsdGhpcy5sb2NhbGUpO3dpbmRvdy5sb2NhdGlvbi5ocmVmPSgwLF91dGlscy5mb3JtYXRXaXRoVmFsaWRhdGlvbikocGFyc2VkQXMpOy8vIHRoaXMgd2FzIHByZXZpb3VzbHkgYSByZXR1cm4gYnV0IHdhcyByZW1vdmVkIGluIGZhdm9yXG4vLyBvZiBiZXR0ZXIgZGVhZCBjb2RlIGVsaW1pbmF0aW9uIHdpdGggcmVnZW5lcmF0b3IgcnVudGltZVxuZGlkTmF2aWdhdGU9dHJ1ZTt9fWNvbnN0IGRldGVjdGVkRG9tYWluPWRldGVjdERvbWFpbkxvY2FsZSh0aGlzLmRvbWFpbkxvY2FsZXMsdW5kZWZpbmVkLHRoaXMubG9jYWxlKTsvLyB3ZSBuZWVkIHRvIHdyYXAgdGhpcyBpbiB0aGUgZW52IGNoZWNrIGFnYWluIHNpbmNlIHJlZ2VuZXJhdG9yIHJ1bnRpbWVcbi8vIG1vdmVzIHRoaXMgb24gaXRzIG93biBkdWUgdG8gdGhlIHJldHVyblxuaWYocHJvY2Vzcy5lbnYuX19ORVhUX0kxOE5fU1VQUE9SVCl7Ly8gaWYgd2UgYXJlIG5hdmlnYXRpbmcgdG8gYSBkb21haW4gbG9jYWxlIGVuc3VyZSB3ZSByZWRpcmVjdCB0byB0aGVcbi8vIGNvcnJlY3QgZG9tYWluXG5pZighZGlkTmF2aWdhdGUmJmRldGVjdGVkRG9tYWluJiZ0aGlzLmlzTG9jYWxlRG9tYWluJiZzZWxmLmxvY2F0aW9uLmhvc3RuYW1lIT09ZGV0ZWN0ZWREb21haW4uZG9tYWluKXtjb25zdCBhc05vQmFzZVBhdGg9ZGVsQmFzZVBhdGgoYXMpO3dpbmRvdy5sb2NhdGlvbi5ocmVmPWBodHRwJHtkZXRlY3RlZERvbWFpbi5odHRwPycnOidzJ306Ly8ke2RldGVjdGVkRG9tYWluLmRvbWFpbn0ke2FkZEJhc2VQYXRoKGAke3RoaXMubG9jYWxlPT09ZGV0ZWN0ZWREb21haW4uZGVmYXVsdExvY2FsZT8nJzpgLyR7dGhpcy5sb2NhbGV9YH0ke2FzTm9CYXNlUGF0aD09PScvJz8nJzphc05vQmFzZVBhdGh9YHx8Jy8nKX1gOy8vIHRoaXMgd2FzIHByZXZpb3VzbHkgYSByZXR1cm4gYnV0IHdhcyByZW1vdmVkIGluIGZhdm9yXG4vLyBvZiBiZXR0ZXIgZGVhZCBjb2RlIGVsaW1pbmF0aW9uIHdpdGggcmVnZW5lcmF0b3IgcnVudGltZVxuZGlkTmF2aWdhdGU9dHJ1ZTt9fWlmKGRpZE5hdmlnYXRlKXtyZXR1cm4gbmV3IFByb21pc2UoKCk9Pnt9KTt9fWlmKCFvcHRpb25zLl9oKXt0aGlzLmlzU3NyPWZhbHNlO30vLyBtYXJraW5nIHJvdXRlIGNoYW5nZXMgYXMgYSBuYXZpZ2F0aW9uIHN0YXJ0IGVudHJ5XG5pZihfdXRpbHMuU1Qpe3BlcmZvcm1hbmNlLm1hcmsoJ3JvdXRlQ2hhbmdlJyk7fWNvbnN0e3NoYWxsb3c9ZmFsc2V9PW9wdGlvbnM7Y29uc3Qgcm91dGVQcm9wcz17c2hhbGxvd307aWYodGhpcy5faW5GbGlnaHRSb3V0ZSl7dGhpcy5hYm9ydENvbXBvbmVudExvYWQodGhpcy5faW5GbGlnaHRSb3V0ZSxyb3V0ZVByb3BzKTt9YXM9YWRkQmFzZVBhdGgoYWRkTG9jYWxlKGhhc0Jhc2VQYXRoKGFzKT9kZWxCYXNlUGF0aChhcyk6YXMsb3B0aW9ucy5sb2NhbGUsdGhpcy5kZWZhdWx0TG9jYWxlKSk7Y29uc3QgY2xlYW5lZEFzPWRlbExvY2FsZShoYXNCYXNlUGF0aChhcyk/ZGVsQmFzZVBhdGgoYXMpOmFzLHRoaXMubG9jYWxlKTt0aGlzLl9pbkZsaWdodFJvdXRlPWFzOy8vIElmIHRoZSB1cmwgY2hhbmdlIGlzIG9ubHkgcmVsYXRlZCB0byBhIGhhc2ggY2hhbmdlXG4vLyBXZSBzaG91bGQgbm90IHByb2NlZWQuIFdlIHNob3VsZCBvbmx5IGNoYW5nZSB0aGUgc3RhdGUuXG4vLyBXQVJOSU5HOiBgX2hgIGlzIGFuIGludGVybmFsIG9wdGlvbiBmb3IgaGFuZGluZyBOZXh0LmpzIGNsaWVudC1zaWRlXG4vLyBoeWRyYXRpb24uIFlvdXIgYXBwIHNob3VsZCBfbmV2ZXJfIHVzZSB0aGlzIHByb3BlcnR5LiBJdCBtYXkgY2hhbmdlIGF0XG4vLyBhbnkgdGltZSB3aXRob3V0IG5vdGljZS5cbmlmKCFvcHRpb25zLl9oJiZ0aGlzLm9ubHlBSGFzaENoYW5nZShjbGVhbmVkQXMpKXt0aGlzLmFzUGF0aD1jbGVhbmVkQXM7Um91dGVyLmV2ZW50cy5lbWl0KCdoYXNoQ2hhbmdlU3RhcnQnLGFzLHJvdXRlUHJvcHMpOy8vIFRPRE86IGRvIHdlIG5lZWQgdGhlIHJlc29sdmVkIGhyZWYgd2hlbiBvbmx5IGEgaGFzaCBjaGFuZ2U/XG50aGlzLmNoYW5nZVN0YXRlKG1ldGhvZCx1cmwsYXMsb3B0aW9ucyk7dGhpcy5zY3JvbGxUb0hhc2goY2xlYW5lZEFzKTt0aGlzLm5vdGlmeSh0aGlzLmNvbXBvbmVudHNbdGhpcy5yb3V0ZV0sbnVsbCk7Um91dGVyLmV2ZW50cy5lbWl0KCdoYXNoQ2hhbmdlQ29tcGxldGUnLGFzLHJvdXRlUHJvcHMpO3JldHVybiB0cnVlO31sZXQgcGFyc2VkPSgwLF9wYXJzZVJlbGF0aXZlVXJsLnBhcnNlUmVsYXRpdmVVcmwpKHVybCk7bGV0e3BhdGhuYW1lLHF1ZXJ5fT1wYXJzZWQ7Ly8gVGhlIGJ1aWxkIG1hbmlmZXN0IG5lZWRzIHRvIGJlIGxvYWRlZCBiZWZvcmUgYXV0by1zdGF0aWMgZHluYW1pYyBwYWdlc1xuLy8gZ2V0IHRoZWlyIHF1ZXJ5IHBhcmFtZXRlcnMgdG8gYWxsb3cgZW5zdXJpbmcgdGhleSBjYW4gYmUgcGFyc2VkIHByb3Blcmx5XG4vLyB3aGVuIHJld3JpdHRlbiB0b1xubGV0IHBhZ2VzLHJld3JpdGVzO3RyeXtwYWdlcz1hd2FpdCB0aGlzLnBhZ2VMb2FkZXIuZ2V0UGFnZUxpc3QoKTsoe19fcmV3cml0ZXM6cmV3cml0ZXN9PWF3YWl0KDAsX3JvdXRlTG9hZGVyLmdldENsaWVudEJ1aWxkTWFuaWZlc3QpKCkpO31jYXRjaChlcnIpey8vIElmIHdlIGZhaWwgdG8gcmVzb2x2ZSB0aGUgcGFnZSBsaXN0IG9yIGNsaWVudC1idWlsZCBtYW5pZmVzdCwgd2UgbXVzdFxuLy8gZG8gYSBzZXJ2ZXItc2lkZSB0cmFuc2l0aW9uOlxud2luZG93LmxvY2F0aW9uLmhyZWY9YXM7cmV0dXJuIGZhbHNlO30vLyBJZiBhc2tlZCB0byBjaGFuZ2UgdGhlIGN1cnJlbnQgVVJMIHdlIHNob3VsZCByZWxvYWQgdGhlIGN1cnJlbnQgcGFnZVxuLy8gKG5vdCBsb2NhdGlvbi5yZWxvYWQoKSBidXQgcmVsb2FkIGdldEluaXRpYWxQcm9wcyBhbmQgb3RoZXIgTmV4dC5qcyBzdHVmZnMpXG4vLyBXZSBhbHNvIG5lZWQgdG8gc2V0IHRoZSBtZXRob2QgPSByZXBsYWNlU3RhdGUgYWx3YXlzXG4vLyBhcyB0aGlzIHNob3VsZCBub3QgZ28gaW50byB0aGUgaGlzdG9yeSAoVGhhdCdzIGhvdyBicm93c2VycyB3b3JrKVxuLy8gV2Ugc2hvdWxkIGNvbXBhcmUgdGhlIG5ldyBhc1BhdGggdG8gdGhlIGN1cnJlbnQgYXNQYXRoLCBub3QgdGhlIHVybFxuaWYoIXRoaXMudXJsSXNOZXcoY2xlYW5lZEFzKSYmIWxvY2FsZUNoYW5nZSl7bWV0aG9kPSdyZXBsYWNlU3RhdGUnO30vLyB3ZSBuZWVkIHRvIHJlc29sdmUgdGhlIGFzIHZhbHVlIHVzaW5nIHJld3JpdGVzIGZvciBkeW5hbWljIFNTR1xuLy8gcGFnZXMgdG8gYWxsb3cgYnVpbGRpbmcgdGhlIGRhdGEgVVJMIGNvcnJlY3RseVxubGV0IHJlc29sdmVkQXM9YXM7Ly8gdXJsIGFuZCBhcyBzaG91bGQgYWx3YXlzIGJlIHByZWZpeGVkIHdpdGggYmFzZVBhdGggYnkgdGhpc1xuLy8gcG9pbnQgYnkgZWl0aGVyIG5leHQvbGluayBvciByb3V0ZXIucHVzaC9yZXBsYWNlIHNvIHN0cmlwIHRoZVxuLy8gYmFzZVBhdGggZnJvbSB0aGUgcGF0aG5hbWUgdG8gbWF0Y2ggdGhlIHBhZ2VzIGRpciAxLXRvLTFcbnBhdGhuYW1lPXBhdGhuYW1lPygwLF9ub3JtYWxpemVUcmFpbGluZ1NsYXNoLnJlbW92ZVBhdGhUcmFpbGluZ1NsYXNoKShkZWxCYXNlUGF0aChwYXRobmFtZSkpOnBhdGhuYW1lO2lmKHNob3VsZFJlc29sdmVIcmVmJiZwYXRobmFtZSE9PScvX2Vycm9yJyl7O29wdGlvbnMuX3Nob3VsZFJlc29sdmVIcmVmPXRydWU7aWYocHJvY2Vzcy5lbnYuX19ORVhUX0hBU19SRVdSSVRFUyYmYXMuc3RhcnRzV2l0aCgnLycpKXtjb25zdCByZXdyaXRlc1Jlc3VsdD0oMCxfcmVzb2x2ZVJld3JpdGVzLmRlZmF1bHQpKGFkZEJhc2VQYXRoKGFkZExvY2FsZShjbGVhbmVkQXMsdGhpcy5sb2NhbGUpKSxwYWdlcyxyZXdyaXRlcyxxdWVyeSxwPT5yZXNvbHZlRHluYW1pY1JvdXRlKHAscGFnZXMpLHRoaXMubG9jYWxlcyk7cmVzb2x2ZWRBcz1yZXdyaXRlc1Jlc3VsdC5hc1BhdGg7aWYocmV3cml0ZXNSZXN1bHQubWF0Y2hlZFBhZ2UmJnJld3JpdGVzUmVzdWx0LnJlc29sdmVkSHJlZil7Ly8gaWYgdGhpcyBkaXJlY3RseSBtYXRjaGVzIGEgcGFnZSB3ZSBuZWVkIHRvIHVwZGF0ZSB0aGUgaHJlZiB0b1xuLy8gYWxsb3cgdGhlIGNvcnJlY3QgcGFnZSBjaHVuayB0byBiZSBsb2FkZWRcbnBhdGhuYW1lPXJld3JpdGVzUmVzdWx0LnJlc29sdmVkSHJlZjtwYXJzZWQucGF0aG5hbWU9YWRkQmFzZVBhdGgocGF0aG5hbWUpO3VybD0oMCxfdXRpbHMuZm9ybWF0V2l0aFZhbGlkYXRpb24pKHBhcnNlZCk7fX1lbHNle3BhcnNlZC5wYXRobmFtZT1yZXNvbHZlRHluYW1pY1JvdXRlKHBhdGhuYW1lLHBhZ2VzKTtpZihwYXJzZWQucGF0aG5hbWUhPT1wYXRobmFtZSl7cGF0aG5hbWU9cGFyc2VkLnBhdGhuYW1lO3BhcnNlZC5wYXRobmFtZT1hZGRCYXNlUGF0aChwYXRobmFtZSk7dXJsPSgwLF91dGlscy5mb3JtYXRXaXRoVmFsaWRhdGlvbikocGFyc2VkKTt9fX1jb25zdCByb3V0ZT0oMCxfbm9ybWFsaXplVHJhaWxpbmdTbGFzaC5yZW1vdmVQYXRoVHJhaWxpbmdTbGFzaCkocGF0aG5hbWUpO2lmKCFpc0xvY2FsVVJMKGFzKSl7aWYocHJvY2Vzcy5lbnYuTk9ERV9FTlYhPT0ncHJvZHVjdGlvbicpe3Rocm93IG5ldyBFcnJvcihgSW52YWxpZCBocmVmOiBcIiR7dXJsfVwiIGFuZCBhczogXCIke2FzfVwiLCByZWNlaXZlZCByZWxhdGl2ZSBocmVmIGFuZCBleHRlcm5hbCBhc2ArYFxcblNlZSBtb3JlIGluZm86IGh0dHBzOi8vbmV4dGpzLm9yZy9kb2NzL21lc3NhZ2VzL2ludmFsaWQtcmVsYXRpdmUtdXJsLWV4dGVybmFsLWFzYCk7fXdpbmRvdy5sb2NhdGlvbi5ocmVmPWFzO3JldHVybiBmYWxzZTt9cmVzb2x2ZWRBcz1kZWxMb2NhbGUoZGVsQmFzZVBhdGgocmVzb2x2ZWRBcyksdGhpcy5sb2NhbGUpO2lmKCgwLF9pc0R5bmFtaWMuaXNEeW5hbWljUm91dGUpKHJvdXRlKSl7Y29uc3QgcGFyc2VkQXM9KDAsX3BhcnNlUmVsYXRpdmVVcmwucGFyc2VSZWxhdGl2ZVVybCkocmVzb2x2ZWRBcyk7Y29uc3QgYXNQYXRobmFtZT1wYXJzZWRBcy5wYXRobmFtZTtjb25zdCByb3V0ZVJlZ2V4PSgwLF9yb3V0ZVJlZ2V4LmdldFJvdXRlUmVnZXgpKHJvdXRlKTtjb25zdCByb3V0ZU1hdGNoPSgwLF9yb3V0ZU1hdGNoZXIuZ2V0Um91dGVNYXRjaGVyKShyb3V0ZVJlZ2V4KShhc1BhdGhuYW1lKTtjb25zdCBzaG91bGRJbnRlcnBvbGF0ZT1yb3V0ZT09PWFzUGF0aG5hbWU7Y29uc3QgaW50ZXJwb2xhdGVkQXM9c2hvdWxkSW50ZXJwb2xhdGU/aW50ZXJwb2xhdGVBcyhyb3V0ZSxhc1BhdGhuYW1lLHF1ZXJ5KTp7fTtpZighcm91dGVNYXRjaHx8c2hvdWxkSW50ZXJwb2xhdGUmJiFpbnRlcnBvbGF0ZWRBcy5yZXN1bHQpe2NvbnN0IG1pc3NpbmdQYXJhbXM9T2JqZWN0LmtleXMocm91dGVSZWdleC5ncm91cHMpLmZpbHRlcihwYXJhbT0+IXF1ZXJ5W3BhcmFtXSk7aWYobWlzc2luZ1BhcmFtcy5sZW5ndGg+MCl7aWYocHJvY2Vzcy5lbnYuTk9ERV9FTlYhPT0ncHJvZHVjdGlvbicpe2NvbnNvbGUud2FybihgJHtzaG91bGRJbnRlcnBvbGF0ZT9gSW50ZXJwb2xhdGluZyBocmVmYDpgTWlzbWF0Y2hpbmcgXFxgYXNcXGAgYW5kIFxcYGhyZWZcXGBgfSBmYWlsZWQgdG8gbWFudWFsbHkgcHJvdmlkZSBgK2B0aGUgcGFyYW1zOiAke21pc3NpbmdQYXJhbXMuam9pbignLCAnKX0gaW4gdGhlIFxcYGhyZWZcXGAncyBcXGBxdWVyeVxcYGApO310aHJvdyBuZXcgRXJyb3IoKHNob3VsZEludGVycG9sYXRlP2BUaGUgcHJvdmlkZWQgXFxgaHJlZlxcYCAoJHt1cmx9KSB2YWx1ZSBpcyBtaXNzaW5nIHF1ZXJ5IHZhbHVlcyAoJHttaXNzaW5nUGFyYW1zLmpvaW4oJywgJyl9KSB0byBiZSBpbnRlcnBvbGF0ZWQgcHJvcGVybHkuIGA6YFRoZSBwcm92aWRlZCBcXGBhc1xcYCB2YWx1ZSAoJHthc1BhdGhuYW1lfSkgaXMgaW5jb21wYXRpYmxlIHdpdGggdGhlIFxcYGhyZWZcXGAgdmFsdWUgKCR7cm91dGV9KS4gYCkrYFJlYWQgbW9yZTogaHR0cHM6Ly9uZXh0anMub3JnL2RvY3MvbWVzc2FnZXMvJHtzaG91bGRJbnRlcnBvbGF0ZT8naHJlZi1pbnRlcnBvbGF0aW9uLWZhaWxlZCc6J2luY29tcGF0aWJsZS1ocmVmLWFzJ31gKTt9fWVsc2UgaWYoc2hvdWxkSW50ZXJwb2xhdGUpe2FzPSgwLF91dGlscy5mb3JtYXRXaXRoVmFsaWRhdGlvbikoT2JqZWN0LmFzc2lnbih7fSxwYXJzZWRBcyx7cGF0aG5hbWU6aW50ZXJwb2xhdGVkQXMucmVzdWx0LHF1ZXJ5Om9taXRQYXJtc0Zyb21RdWVyeShxdWVyeSxpbnRlcnBvbGF0ZWRBcy5wYXJhbXMpfSkpO31lbHNley8vIE1lcmdlIHBhcmFtcyBpbnRvIGBxdWVyeWAsIG92ZXJ3cml0aW5nIGFueSBzcGVjaWZpZWQgaW4gc2VhcmNoXG5PYmplY3QuYXNzaWduKHF1ZXJ5LHJvdXRlTWF0Y2gpO319Um91dGVyLmV2ZW50cy5lbWl0KCdyb3V0ZUNoYW5nZVN0YXJ0Jyxhcyxyb3V0ZVByb3BzKTt0cnl7dmFyIF9zZWxmJF9fTkVYVF9EQVRBX18kcCxfc2VsZiRfX05FWFRfREFUQV9fJHAyLF9vcHRpb25zJHNjcm9sbDtsZXQgcm91dGVJbmZvPWF3YWl0IHRoaXMuZ2V0Um91dGVJbmZvKHJvdXRlLHBhdGhuYW1lLHF1ZXJ5LGFzLHJlc29sdmVkQXMscm91dGVQcm9wcyk7bGV0e2Vycm9yLHByb3BzLF9fTl9TU0csX19OX1NTUH09cm91dGVJbmZvOy8vIGhhbmRsZSByZWRpcmVjdCBvbiBjbGllbnQtdHJhbnNpdGlvblxuaWYoKF9fTl9TU0d8fF9fTl9TU1ApJiZwcm9wcyl7aWYocHJvcHMucGFnZVByb3BzJiZwcm9wcy5wYWdlUHJvcHMuX19OX1JFRElSRUNUKXtjb25zdCBkZXN0aW5hdGlvbj1wcm9wcy5wYWdlUHJvcHMuX19OX1JFRElSRUNUOy8vIGNoZWNrIGlmIGRlc3RpbmF0aW9uIGlzIGludGVybmFsIChyZXNvbHZlcyB0byBhIHBhZ2UpIGFuZCBhdHRlbXB0XG4vLyBjbGllbnQtbmF2aWdhdGlvbiBpZiBpdCBpcyBmYWxsaW5nIGJhY2sgdG8gaGFyZCBuYXZpZ2F0aW9uIGlmXG4vLyBpdCdzIG5vdFxuaWYoZGVzdGluYXRpb24uc3RhcnRzV2l0aCgnLycpKXtjb25zdCBwYXJzZWRIcmVmPSgwLF9wYXJzZVJlbGF0aXZlVXJsLnBhcnNlUmVsYXRpdmVVcmwpKGRlc3RpbmF0aW9uKTtwYXJzZWRIcmVmLnBhdGhuYW1lPXJlc29sdmVEeW5hbWljUm91dGUocGFyc2VkSHJlZi5wYXRobmFtZSxwYWdlcyk7Y29uc3R7dXJsOm5ld1VybCxhczpuZXdBc309cHJlcGFyZVVybEFzKHRoaXMsZGVzdGluYXRpb24sZGVzdGluYXRpb24pO3JldHVybiB0aGlzLmNoYW5nZShtZXRob2QsbmV3VXJsLG5ld0FzLG9wdGlvbnMpO313aW5kb3cubG9jYXRpb24uaHJlZj1kZXN0aW5hdGlvbjtyZXR1cm4gbmV3IFByb21pc2UoKCk9Pnt9KTt9dGhpcy5pc1ByZXZpZXc9ISFwcm9wcy5fX05fUFJFVklFVzsvLyBoYW5kbGUgU1NHIGRhdGEgNDA0XG5pZihwcm9wcy5ub3RGb3VuZD09PVNTR19EQVRBX05PVF9GT1VORCl7bGV0IG5vdEZvdW5kUm91dGU7dHJ5e2F3YWl0IHRoaXMuZmV0Y2hDb21wb25lbnQoJy80MDQnKTtub3RGb3VuZFJvdXRlPScvNDA0Jzt9Y2F0Y2goXyl7bm90Rm91bmRSb3V0ZT0nL19lcnJvcic7fXJvdXRlSW5mbz1hd2FpdCB0aGlzLmdldFJvdXRlSW5mbyhub3RGb3VuZFJvdXRlLG5vdEZvdW5kUm91dGUscXVlcnksYXMscmVzb2x2ZWRBcyx7c2hhbGxvdzpmYWxzZX0pO319Um91dGVyLmV2ZW50cy5lbWl0KCdiZWZvcmVIaXN0b3J5Q2hhbmdlJyxhcyxyb3V0ZVByb3BzKTt0aGlzLmNoYW5nZVN0YXRlKG1ldGhvZCx1cmwsYXMsb3B0aW9ucyk7aWYocHJvY2Vzcy5lbnYuTk9ERV9FTlYhPT0ncHJvZHVjdGlvbicpe2NvbnN0IGFwcENvbXA9dGhpcy5jb21wb25lbnRzWycvX2FwcCddLkNvbXBvbmVudDt3aW5kb3cubmV4dC5pc1ByZXJlbmRlcmVkPWFwcENvbXAuZ2V0SW5pdGlhbFByb3BzPT09YXBwQ29tcC5vcmlnR2V0SW5pdGlhbFByb3BzJiYhcm91dGVJbmZvLkNvbXBvbmVudC5nZXRJbml0aWFsUHJvcHM7fWlmKG9wdGlvbnMuX2gmJnBhdGhuYW1lPT09Jy9fZXJyb3InJiYoKF9zZWxmJF9fTkVYVF9EQVRBX18kcD1zZWxmLl9fTkVYVF9EQVRBX18ucHJvcHMpPT1udWxsP3ZvaWQgMDooX3NlbGYkX19ORVhUX0RBVEFfXyRwMj1fc2VsZiRfX05FWFRfREFUQV9fJHAucGFnZVByb3BzKT09bnVsbD92b2lkIDA6X3NlbGYkX19ORVhUX0RBVEFfXyRwMi5zdGF0dXNDb2RlKT09PTUwMCYmcHJvcHMhPW51bGwmJnByb3BzLnBhZ2VQcm9wcyl7Ly8gZW5zdXJlIHN0YXR1c0NvZGUgaXMgc3RpbGwgY29ycmVjdCBmb3Igc3RhdGljIDUwMCBwYWdlXG4vLyB3aGVuIHVwZGF0aW5nIHF1ZXJ5IGluZm9ybWF0aW9uXG5wcm9wcy5wYWdlUHJvcHMuc3RhdHVzQ29kZT01MDA7fS8vIHNoYWxsb3cgcm91dGluZyBpcyBvbmx5IGFsbG93ZWQgZm9yIHNhbWUgcGFnZSBVUkwgY2hhbmdlcy5cbmNvbnN0IGlzVmFsaWRTaGFsbG93Um91dGU9b3B0aW9ucy5zaGFsbG93JiZ0aGlzLnJvdXRlPT09cm91dGU7Y29uc3Qgc2hvdWxkU2Nyb2xsPShfb3B0aW9ucyRzY3JvbGw9b3B0aW9ucy5zY3JvbGwpIT1udWxsP19vcHRpb25zJHNjcm9sbDohaXNWYWxpZFNoYWxsb3dSb3V0ZTtjb25zdCByZXNldFNjcm9sbD1zaG91bGRTY3JvbGw/e3g6MCx5OjB9Om51bGw7YXdhaXQgdGhpcy5zZXQocm91dGUscGF0aG5hbWUscXVlcnksY2xlYW5lZEFzLHJvdXRlSW5mbyxmb3JjZWRTY3JvbGwhPW51bGw/Zm9yY2VkU2Nyb2xsOnJlc2V0U2Nyb2xsKS5jYXRjaChlPT57aWYoZS5jYW5jZWxsZWQpZXJyb3I9ZXJyb3J8fGU7ZWxzZSB0aHJvdyBlO30pO2lmKGVycm9yKXtSb3V0ZXIuZXZlbnRzLmVtaXQoJ3JvdXRlQ2hhbmdlRXJyb3InLGVycm9yLGNsZWFuZWRBcyxyb3V0ZVByb3BzKTt0aHJvdyBlcnJvcjt9aWYocHJvY2Vzcy5lbnYuX19ORVhUX0kxOE5fU1VQUE9SVCl7aWYodGhpcy5sb2NhbGUpe2RvY3VtZW50LmRvY3VtZW50RWxlbWVudC5sYW5nPXRoaXMubG9jYWxlO319Um91dGVyLmV2ZW50cy5lbWl0KCdyb3V0ZUNoYW5nZUNvbXBsZXRlJyxhcyxyb3V0ZVByb3BzKTtyZXR1cm4gdHJ1ZTt9Y2F0Y2goZXJyKXtpZihlcnIuY2FuY2VsbGVkKXtyZXR1cm4gZmFsc2U7fXRocm93IGVycjt9fWNoYW5nZVN0YXRlKG1ldGhvZCx1cmwsYXMsb3B0aW9ucz17fSl7aWYocHJvY2Vzcy5lbnYuTk9ERV9FTlYhPT0ncHJvZHVjdGlvbicpe2lmKHR5cGVvZiB3aW5kb3cuaGlzdG9yeT09PSd1bmRlZmluZWQnKXtjb25zb2xlLmVycm9yKGBXYXJuaW5nOiB3aW5kb3cuaGlzdG9yeSBpcyBub3QgYXZhaWxhYmxlLmApO3JldHVybjt9aWYodHlwZW9mIHdpbmRvdy5oaXN0b3J5W21ldGhvZF09PT0ndW5kZWZpbmVkJyl7Y29uc29sZS5lcnJvcihgV2FybmluZzogd2luZG93Lmhpc3RvcnkuJHttZXRob2R9IGlzIG5vdCBhdmFpbGFibGVgKTtyZXR1cm47fX1pZihtZXRob2QhPT0ncHVzaFN0YXRlJ3x8KDAsX3V0aWxzLmdldFVSTCkoKSE9PWFzKXt0aGlzLl9zaGFsbG93PW9wdGlvbnMuc2hhbGxvdzt3aW5kb3cuaGlzdG9yeVttZXRob2RdKHt1cmwsYXMsb3B0aW9ucyxfX046dHJ1ZSxpZHg6dGhpcy5faWR4PW1ldGhvZCE9PSdwdXNoU3RhdGUnP3RoaXMuX2lkeDp0aGlzLl9pZHgrMX0sLy8gTW9zdCBicm93c2VycyBjdXJyZW50bHkgaWdub3JlcyB0aGlzIHBhcmFtZXRlciwgYWx0aG91Z2ggdGhleSBtYXkgdXNlIGl0IGluIHRoZSBmdXR1cmUuXG4vLyBQYXNzaW5nIHRoZSBlbXB0eSBzdHJpbmcgaGVyZSBzaG91bGQgYmUgc2FmZSBhZ2FpbnN0IGZ1dHVyZSBjaGFuZ2VzIHRvIHRoZSBtZXRob2QuXG4vLyBodHRwczovL2RldmVsb3Blci5tb3ppbGxhLm9yZy9lbi1VUy9kb2NzL1dlYi9BUEkvSGlzdG9yeS9yZXBsYWNlU3RhdGVcbicnLGFzKTt9fWFzeW5jIGhhbmRsZVJvdXRlSW5mb0Vycm9yKGVycixwYXRobmFtZSxxdWVyeSxhcyxyb3V0ZVByb3BzLGxvYWRFcnJvckZhaWwpe2lmKGVyci5jYW5jZWxsZWQpey8vIGJ1YmJsZSB1cCBjYW5jZWxsYXRpb24gZXJyb3JzXG50aHJvdyBlcnI7fWlmKCgwLF9yb3V0ZUxvYWRlci5pc0Fzc2V0RXJyb3IpKGVycil8fGxvYWRFcnJvckZhaWwpe1JvdXRlci5ldmVudHMuZW1pdCgncm91dGVDaGFuZ2VFcnJvcicsZXJyLGFzLHJvdXRlUHJvcHMpOy8vIElmIHdlIGNhbid0IGxvYWQgdGhlIHBhZ2UgaXQgY291bGQgYmUgb25lIG9mIGZvbGxvd2luZyByZWFzb25zXG4vLyAgMS4gUGFnZSBkb2Vzbid0IGV4aXN0c1xuLy8gIDIuIFBhZ2UgZG9lcyBleGlzdCBpbiBhIGRpZmZlcmVudCB6b25lXG4vLyAgMy4gSW50ZXJuYWwgZXJyb3Igd2hpbGUgbG9hZGluZyB0aGUgcGFnZVxuLy8gU28sIGRvaW5nIGEgaGFyZCByZWxvYWQgaXMgdGhlIHByb3BlciB3YXkgdG8gZGVhbCB3aXRoIHRoaXMuXG53aW5kb3cubG9jYXRpb24uaHJlZj1hczsvLyBDaGFuZ2luZyB0aGUgVVJMIGRvZXNuJ3QgYmxvY2sgZXhlY3V0aW5nIHRoZSBjdXJyZW50IGNvZGUgcGF0aC5cbi8vIFNvIGxldCdzIHRocm93IGEgY2FuY2VsbGF0aW9uIGVycm9yIHN0b3AgdGhlIHJvdXRpbmcgbG9naWMuXG50aHJvdyBidWlsZENhbmNlbGxhdGlvbkVycm9yKCk7fXRyeXtsZXQgQ29tcG9uZW50O2xldCBzdHlsZVNoZWV0cztsZXQgcHJvcHM7aWYodHlwZW9mIENvbXBvbmVudD09PSd1bmRlZmluZWQnfHx0eXBlb2Ygc3R5bGVTaGVldHM9PT0ndW5kZWZpbmVkJyl7Oyh7cGFnZTpDb21wb25lbnQsc3R5bGVTaGVldHN9PWF3YWl0IHRoaXMuZmV0Y2hDb21wb25lbnQoJy9fZXJyb3InKSk7fWNvbnN0IHJvdXRlSW5mbz17cHJvcHMsQ29tcG9uZW50LHN0eWxlU2hlZXRzLGVycixlcnJvcjplcnJ9O2lmKCFyb3V0ZUluZm8ucHJvcHMpe3RyeXtyb3V0ZUluZm8ucHJvcHM9YXdhaXQgdGhpcy5nZXRJbml0aWFsUHJvcHMoQ29tcG9uZW50LHtlcnIscGF0aG5hbWUscXVlcnl9KTt9Y2F0Y2goZ2lwRXJyKXtjb25zb2xlLmVycm9yKCdFcnJvciBpbiBlcnJvciBwYWdlIGBnZXRJbml0aWFsUHJvcHNgOiAnLGdpcEVycik7cm91dGVJbmZvLnByb3BzPXt9O319cmV0dXJuIHJvdXRlSW5mbzt9Y2F0Y2gocm91dGVJbmZvRXJyKXtyZXR1cm4gdGhpcy5oYW5kbGVSb3V0ZUluZm9FcnJvcihyb3V0ZUluZm9FcnIscGF0aG5hbWUscXVlcnksYXMscm91dGVQcm9wcyx0cnVlKTt9fWFzeW5jIGdldFJvdXRlSW5mbyhyb3V0ZSxwYXRobmFtZSxxdWVyeSxhcyxyZXNvbHZlZEFzLHJvdXRlUHJvcHMpe3RyeXtjb25zdCBleGlzdGluZ1JvdXRlSW5mbz10aGlzLmNvbXBvbmVudHNbcm91dGVdO2lmKHJvdXRlUHJvcHMuc2hhbGxvdyYmZXhpc3RpbmdSb3V0ZUluZm8mJnRoaXMucm91dGU9PT1yb3V0ZSl7cmV0dXJuIGV4aXN0aW5nUm91dGVJbmZvO31jb25zdCBjYWNoZWRSb3V0ZUluZm89ZXhpc3RpbmdSb3V0ZUluZm8mJidpbml0aWFsJ2luIGV4aXN0aW5nUm91dGVJbmZvP3VuZGVmaW5lZDpleGlzdGluZ1JvdXRlSW5mbztjb25zdCByb3V0ZUluZm89Y2FjaGVkUm91dGVJbmZvP2NhY2hlZFJvdXRlSW5mbzphd2FpdCB0aGlzLmZldGNoQ29tcG9uZW50KHJvdXRlKS50aGVuKHJlcz0+KHtDb21wb25lbnQ6cmVzLnBhZ2Usc3R5bGVTaGVldHM6cmVzLnN0eWxlU2hlZXRzLF9fTl9TU0c6cmVzLm1vZC5fX05fU1NHLF9fTl9TU1A6cmVzLm1vZC5fX05fU1NQfSkpO2NvbnN0e0NvbXBvbmVudCxfX05fU1NHLF9fTl9TU1B9PXJvdXRlSW5mbztpZihwcm9jZXNzLmVudi5OT0RFX0VOViE9PSdwcm9kdWN0aW9uJyl7Y29uc3R7aXNWYWxpZEVsZW1lbnRUeXBlfT1yZXF1aXJlKCdyZWFjdC1pcycpO2lmKCFpc1ZhbGlkRWxlbWVudFR5cGUoQ29tcG9uZW50KSl7dGhyb3cgbmV3IEVycm9yKGBUaGUgZGVmYXVsdCBleHBvcnQgaXMgbm90IGEgUmVhY3QgQ29tcG9uZW50IGluIHBhZ2U6IFwiJHtwYXRobmFtZX1cImApO319bGV0IGRhdGFIcmVmO2lmKF9fTl9TU0d8fF9fTl9TU1Ape2RhdGFIcmVmPXRoaXMucGFnZUxvYWRlci5nZXREYXRhSHJlZigoMCxfdXRpbHMuZm9ybWF0V2l0aFZhbGlkYXRpb24pKHtwYXRobmFtZSxxdWVyeX0pLHJlc29sdmVkQXMsX19OX1NTRyx0aGlzLmxvY2FsZSk7fWNvbnN0IHByb3BzPWF3YWl0IHRoaXMuX2dldERhdGEoKCk9Pl9fTl9TU0c/dGhpcy5fZ2V0U3RhdGljRGF0YShkYXRhSHJlZik6X19OX1NTUD90aGlzLl9nZXRTZXJ2ZXJEYXRhKGRhdGFIcmVmKTp0aGlzLmdldEluaXRpYWxQcm9wcyhDb21wb25lbnQsLy8gd2UgcHJvdmlkZSBBcHBUcmVlIGxhdGVyIHNvIHRoaXMgbmVlZHMgdG8gYmUgYGFueWBcbntwYXRobmFtZSxxdWVyeSxhc1BhdGg6YXMsbG9jYWxlOnRoaXMubG9jYWxlLGxvY2FsZXM6dGhpcy5sb2NhbGVzLGRlZmF1bHRMb2NhbGU6dGhpcy5kZWZhdWx0TG9jYWxlfSkpO3JvdXRlSW5mby5wcm9wcz1wcm9wczt0aGlzLmNvbXBvbmVudHNbcm91dGVdPXJvdXRlSW5mbztyZXR1cm4gcm91dGVJbmZvO31jYXRjaChlcnIpe3JldHVybiB0aGlzLmhhbmRsZVJvdXRlSW5mb0Vycm9yKGVycixwYXRobmFtZSxxdWVyeSxhcyxyb3V0ZVByb3BzKTt9fXNldChyb3V0ZSxwYXRobmFtZSxxdWVyeSxhcyxkYXRhLHJlc2V0U2Nyb2xsKXt0aGlzLmlzRmFsbGJhY2s9ZmFsc2U7dGhpcy5yb3V0ZT1yb3V0ZTt0aGlzLnBhdGhuYW1lPXBhdGhuYW1lO3RoaXMucXVlcnk9cXVlcnk7dGhpcy5hc1BhdGg9YXM7cmV0dXJuIHRoaXMubm90aWZ5KGRhdGEscmVzZXRTY3JvbGwpO30vKipcbiAgICogQ2FsbGJhY2sgdG8gZXhlY3V0ZSBiZWZvcmUgcmVwbGFjaW5nIHJvdXRlciBzdGF0ZVxuICAgKiBAcGFyYW0gY2IgY2FsbGJhY2sgdG8gYmUgZXhlY3V0ZWRcbiAgICovYmVmb3JlUG9wU3RhdGUoY2Ipe3RoaXMuX2Jwcz1jYjt9b25seUFIYXNoQ2hhbmdlKGFzKXtpZighdGhpcy5hc1BhdGgpcmV0dXJuIGZhbHNlO2NvbnN0W29sZFVybE5vSGFzaCxvbGRIYXNoXT10aGlzLmFzUGF0aC5zcGxpdCgnIycpO2NvbnN0W25ld1VybE5vSGFzaCxuZXdIYXNoXT1hcy5zcGxpdCgnIycpOy8vIE1ha2VzIHN1cmUgd2Ugc2Nyb2xsIHRvIHRoZSBwcm92aWRlZCBoYXNoIGlmIHRoZSB1cmwvaGFzaCBhcmUgdGhlIHNhbWVcbmlmKG5ld0hhc2gmJm9sZFVybE5vSGFzaD09PW5ld1VybE5vSGFzaCYmb2xkSGFzaD09PW5ld0hhc2gpe3JldHVybiB0cnVlO30vLyBJZiB0aGUgdXJscyBhcmUgY2hhbmdlLCB0aGVyZSdzIG1vcmUgdGhhbiBhIGhhc2ggY2hhbmdlXG5pZihvbGRVcmxOb0hhc2ghPT1uZXdVcmxOb0hhc2gpe3JldHVybiBmYWxzZTt9Ly8gSWYgdGhlIGhhc2ggaGFzIGNoYW5nZWQsIHRoZW4gaXQncyBhIGhhc2ggb25seSBjaGFuZ2UuXG4vLyBUaGlzIGNoZWNrIGlzIG5lY2Vzc2FyeSB0byBoYW5kbGUgYm90aCB0aGUgZW50ZXIgYW5kXG4vLyBsZWF2ZSBoYXNoID09PSAnJyBjYXNlcy4gVGhlIGlkZW50aXR5IGNhc2UgZmFsbHMgdGhyb3VnaFxuLy8gYW5kIGlzIHRyZWF0ZWQgYXMgYSBuZXh0IHJlbG9hZC5cbnJldHVybiBvbGRIYXNoIT09bmV3SGFzaDt9c2Nyb2xsVG9IYXNoKGFzKXtjb25zdFssaGFzaF09YXMuc3BsaXQoJyMnKTsvLyBTY3JvbGwgdG8gdG9wIGlmIHRoZSBoYXNoIGlzIGp1c3QgYCNgIHdpdGggbm8gdmFsdWUgb3IgYCN0b3BgXG4vLyBUbyBtaXJyb3IgYnJvd3NlcnNcbmlmKGhhc2g9PT0nJ3x8aGFzaD09PSd0b3AnKXt3aW5kb3cuc2Nyb2xsVG8oMCwwKTtyZXR1cm47fS8vIEZpcnN0IHdlIGNoZWNrIGlmIHRoZSBlbGVtZW50IGJ5IGlkIGlzIGZvdW5kXG5jb25zdCBpZEVsPWRvY3VtZW50LmdldEVsZW1lbnRCeUlkKGhhc2gpO2lmKGlkRWwpe2lkRWwuc2Nyb2xsSW50b1ZpZXcoKTtyZXR1cm47fS8vIElmIHRoZXJlJ3Mgbm8gZWxlbWVudCB3aXRoIHRoZSBpZCwgd2UgY2hlY2sgdGhlIGBuYW1lYCBwcm9wZXJ0eVxuLy8gVG8gbWlycm9yIGJyb3dzZXJzXG5jb25zdCBuYW1lRWw9ZG9jdW1lbnQuZ2V0RWxlbWVudHNCeU5hbWUoaGFzaClbMF07aWYobmFtZUVsKXtuYW1lRWwuc2Nyb2xsSW50b1ZpZXcoKTt9fXVybElzTmV3KGFzUGF0aCl7cmV0dXJuIHRoaXMuYXNQYXRoIT09YXNQYXRoO30vKipcbiAgICogUHJlZmV0Y2ggcGFnZSBjb2RlLCB5b3UgbWF5IHdhaXQgZm9yIHRoZSBkYXRhIGR1cmluZyBwYWdlIHJlbmRlcmluZy5cbiAgICogVGhpcyBmZWF0dXJlIG9ubHkgd29ya3MgaW4gcHJvZHVjdGlvbiFcbiAgICogQHBhcmFtIHVybCB0aGUgaHJlZiBvZiBwcmVmZXRjaGVkIHBhZ2VcbiAgICogQHBhcmFtIGFzUGF0aCB0aGUgYXMgcGF0aCBvZiB0aGUgcHJlZmV0Y2hlZCBwYWdlXG4gICAqL2FzeW5jIHByZWZldGNoKHVybCxhc1BhdGg9dXJsLG9wdGlvbnM9e30pe2xldCBwYXJzZWQ9KDAsX3BhcnNlUmVsYXRpdmVVcmwucGFyc2VSZWxhdGl2ZVVybCkodXJsKTtsZXR7cGF0aG5hbWV9PXBhcnNlZDtpZihwcm9jZXNzLmVudi5fX05FWFRfSTE4Tl9TVVBQT1JUKXtpZihvcHRpb25zLmxvY2FsZT09PWZhbHNlKXtwYXRobmFtZT0oMCxfbm9ybWFsaXplTG9jYWxlUGF0aC5ub3JtYWxpemVMb2NhbGVQYXRoKShwYXRobmFtZSx0aGlzLmxvY2FsZXMpLnBhdGhuYW1lO3BhcnNlZC5wYXRobmFtZT1wYXRobmFtZTt1cmw9KDAsX3V0aWxzLmZvcm1hdFdpdGhWYWxpZGF0aW9uKShwYXJzZWQpO2xldCBwYXJzZWRBcz0oMCxfcGFyc2VSZWxhdGl2ZVVybC5wYXJzZVJlbGF0aXZlVXJsKShhc1BhdGgpO2NvbnN0IGxvY2FsZVBhdGhSZXN1bHQ9KDAsX25vcm1hbGl6ZUxvY2FsZVBhdGgubm9ybWFsaXplTG9jYWxlUGF0aCkocGFyc2VkQXMucGF0aG5hbWUsdGhpcy5sb2NhbGVzKTtwYXJzZWRBcy5wYXRobmFtZT1sb2NhbGVQYXRoUmVzdWx0LnBhdGhuYW1lO29wdGlvbnMubG9jYWxlPWxvY2FsZVBhdGhSZXN1bHQuZGV0ZWN0ZWRMb2NhbGV8fHRoaXMuZGVmYXVsdExvY2FsZTthc1BhdGg9KDAsX3V0aWxzLmZvcm1hdFdpdGhWYWxpZGF0aW9uKShwYXJzZWRBcyk7fX1jb25zdCBwYWdlcz1hd2FpdCB0aGlzLnBhZ2VMb2FkZXIuZ2V0UGFnZUxpc3QoKTtsZXQgcmVzb2x2ZWRBcz1hc1BhdGg7aWYocHJvY2Vzcy5lbnYuX19ORVhUX0hBU19SRVdSSVRFUyYmYXNQYXRoLnN0YXJ0c1dpdGgoJy8nKSl7bGV0IHJld3JpdGVzOyh7X19yZXdyaXRlczpyZXdyaXRlc309YXdhaXQoMCxfcm91dGVMb2FkZXIuZ2V0Q2xpZW50QnVpbGRNYW5pZmVzdCkoKSk7Y29uc3QgcmV3cml0ZXNSZXN1bHQ9KDAsX3Jlc29sdmVSZXdyaXRlcy5kZWZhdWx0KShhZGRCYXNlUGF0aChhZGRMb2NhbGUoYXNQYXRoLHRoaXMubG9jYWxlKSkscGFnZXMscmV3cml0ZXMscGFyc2VkLnF1ZXJ5LHA9PnJlc29sdmVEeW5hbWljUm91dGUocCxwYWdlcyksdGhpcy5sb2NhbGVzKTtyZXNvbHZlZEFzPWRlbExvY2FsZShkZWxCYXNlUGF0aChyZXdyaXRlc1Jlc3VsdC5hc1BhdGgpLHRoaXMubG9jYWxlKTtpZihyZXdyaXRlc1Jlc3VsdC5tYXRjaGVkUGFnZSYmcmV3cml0ZXNSZXN1bHQucmVzb2x2ZWRIcmVmKXsvLyBpZiB0aGlzIGRpcmVjdGx5IG1hdGNoZXMgYSBwYWdlIHdlIG5lZWQgdG8gdXBkYXRlIHRoZSBocmVmIHRvXG4vLyBhbGxvdyB0aGUgY29ycmVjdCBwYWdlIGNodW5rIHRvIGJlIGxvYWRlZFxucGF0aG5hbWU9cmV3cml0ZXNSZXN1bHQucmVzb2x2ZWRIcmVmO3BhcnNlZC5wYXRobmFtZT1wYXRobmFtZTt1cmw9KDAsX3V0aWxzLmZvcm1hdFdpdGhWYWxpZGF0aW9uKShwYXJzZWQpO319ZWxzZXtwYXJzZWQucGF0aG5hbWU9cmVzb2x2ZUR5bmFtaWNSb3V0ZShwYXJzZWQucGF0aG5hbWUscGFnZXMpO2lmKHBhcnNlZC5wYXRobmFtZSE9PXBhdGhuYW1lKXtwYXRobmFtZT1wYXJzZWQucGF0aG5hbWU7cGFyc2VkLnBhdGhuYW1lPXBhdGhuYW1lO3VybD0oMCxfdXRpbHMuZm9ybWF0V2l0aFZhbGlkYXRpb24pKHBhcnNlZCk7fX1jb25zdCByb3V0ZT0oMCxfbm9ybWFsaXplVHJhaWxpbmdTbGFzaC5yZW1vdmVQYXRoVHJhaWxpbmdTbGFzaCkocGF0aG5hbWUpOy8vIFByZWZldGNoIGlzIG5vdCBzdXBwb3J0ZWQgaW4gZGV2ZWxvcG1lbnQgbW9kZSBiZWNhdXNlIGl0IHdvdWxkIHRyaWdnZXIgb24tZGVtYW5kLWVudHJpZXNcbmlmKHByb2Nlc3MuZW52Lk5PREVfRU5WIT09J3Byb2R1Y3Rpb24nKXtyZXR1cm47fWF3YWl0IFByb21pc2UuYWxsKFt0aGlzLnBhZ2VMb2FkZXIuX2lzU3NnKHJvdXRlKS50aGVuKGlzU3NnPT57cmV0dXJuIGlzU3NnP3RoaXMuX2dldFN0YXRpY0RhdGEodGhpcy5wYWdlTG9hZGVyLmdldERhdGFIcmVmKHVybCxyZXNvbHZlZEFzLHRydWUsdHlwZW9mIG9wdGlvbnMubG9jYWxlIT09J3VuZGVmaW5lZCc/b3B0aW9ucy5sb2NhbGU6dGhpcy5sb2NhbGUpKTpmYWxzZTt9KSx0aGlzLnBhZ2VMb2FkZXJbb3B0aW9ucy5wcmlvcml0eT8nbG9hZFBhZ2UnOidwcmVmZXRjaCddKHJvdXRlKV0pO31hc3luYyBmZXRjaENvbXBvbmVudChyb3V0ZSl7bGV0IGNhbmNlbGxlZD1mYWxzZTtjb25zdCBjYW5jZWw9dGhpcy5jbGM9KCk9PntjYW5jZWxsZWQ9dHJ1ZTt9O2NvbnN0IGNvbXBvbmVudFJlc3VsdD1hd2FpdCB0aGlzLnBhZ2VMb2FkZXIubG9hZFBhZ2Uocm91dGUpO2lmKGNhbmNlbGxlZCl7Y29uc3QgZXJyb3I9bmV3IEVycm9yKGBBYm9ydCBmZXRjaGluZyBjb21wb25lbnQgZm9yIHJvdXRlOiBcIiR7cm91dGV9XCJgKTtlcnJvci5jYW5jZWxsZWQ9dHJ1ZTt0aHJvdyBlcnJvcjt9aWYoY2FuY2VsPT09dGhpcy5jbGMpe3RoaXMuY2xjPW51bGw7fXJldHVybiBjb21wb25lbnRSZXN1bHQ7fV9nZXREYXRhKGZuKXtsZXQgY2FuY2VsbGVkPWZhbHNlO2NvbnN0IGNhbmNlbD0oKT0+e2NhbmNlbGxlZD10cnVlO307dGhpcy5jbGM9Y2FuY2VsO3JldHVybiBmbigpLnRoZW4oZGF0YT0+e2lmKGNhbmNlbD09PXRoaXMuY2xjKXt0aGlzLmNsYz1udWxsO31pZihjYW5jZWxsZWQpe2NvbnN0IGVycj1uZXcgRXJyb3IoJ0xvYWRpbmcgaW5pdGlhbCBwcm9wcyBjYW5jZWxsZWQnKTtlcnIuY2FuY2VsbGVkPXRydWU7dGhyb3cgZXJyO31yZXR1cm4gZGF0YTt9KTt9X2dldFN0YXRpY0RhdGEoZGF0YUhyZWYpe2NvbnN0e2hyZWY6Y2FjaGVLZXl9PW5ldyBVUkwoZGF0YUhyZWYsd2luZG93LmxvY2F0aW9uLmhyZWYpO2lmKHByb2Nlc3MuZW52Lk5PREVfRU5WPT09J3Byb2R1Y3Rpb24nJiYhdGhpcy5pc1ByZXZpZXcmJnRoaXMuc2RjW2NhY2hlS2V5XSl7cmV0dXJuIFByb21pc2UucmVzb2x2ZSh0aGlzLnNkY1tjYWNoZUtleV0pO31yZXR1cm4gZmV0Y2hOZXh0RGF0YShkYXRhSHJlZix0aGlzLmlzU3NyKS50aGVuKGRhdGE9Pnt0aGlzLnNkY1tjYWNoZUtleV09ZGF0YTtyZXR1cm4gZGF0YTt9KTt9X2dldFNlcnZlckRhdGEoZGF0YUhyZWYpe2NvbnN0e2hyZWY6cmVzb3VyY2VLZXl9PW5ldyBVUkwoZGF0YUhyZWYsd2luZG93LmxvY2F0aW9uLmhyZWYpO2lmKHRoaXMuc2RyW3Jlc291cmNlS2V5XSl7cmV0dXJuIHRoaXMuc2RyW3Jlc291cmNlS2V5XTt9cmV0dXJuIHRoaXMuc2RyW3Jlc291cmNlS2V5XT1mZXRjaE5leHREYXRhKGRhdGFIcmVmLHRoaXMuaXNTc3IpLnRoZW4oZGF0YT0+e2RlbGV0ZSB0aGlzLnNkcltyZXNvdXJjZUtleV07cmV0dXJuIGRhdGE7fSkuY2F0Y2goZXJyPT57ZGVsZXRlIHRoaXMuc2RyW3Jlc291cmNlS2V5XTt0aHJvdyBlcnI7fSk7fWdldEluaXRpYWxQcm9wcyhDb21wb25lbnQsY3R4KXtjb25zdHtDb21wb25lbnQ6QXBwfT10aGlzLmNvbXBvbmVudHNbJy9fYXBwJ107Y29uc3QgQXBwVHJlZT10aGlzLl93cmFwQXBwKEFwcCk7Y3R4LkFwcFRyZWU9QXBwVHJlZTtyZXR1cm4oMCxfdXRpbHMubG9hZEdldEluaXRpYWxQcm9wcykoQXBwLHtBcHBUcmVlLENvbXBvbmVudCxyb3V0ZXI6dGhpcyxjdHh9KTt9YWJvcnRDb21wb25lbnRMb2FkKGFzLHJvdXRlUHJvcHMpe2lmKHRoaXMuY2xjKXtSb3V0ZXIuZXZlbnRzLmVtaXQoJ3JvdXRlQ2hhbmdlRXJyb3InLGJ1aWxkQ2FuY2VsbGF0aW9uRXJyb3IoKSxhcyxyb3V0ZVByb3BzKTt0aGlzLmNsYygpO3RoaXMuY2xjPW51bGw7fX1ub3RpZnkoZGF0YSxyZXNldFNjcm9sbCl7cmV0dXJuIHRoaXMuc3ViKGRhdGEsdGhpcy5jb21wb25lbnRzWycvX2FwcCddLkNvbXBvbmVudCxyZXNldFNjcm9sbCk7fX1leHBvcnRzLmRlZmF1bHQ9Um91dGVyO1JvdXRlci5ldmVudHM9KDAsX21pdHQuZGVmYXVsdCkoKTtcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPXJvdXRlci5qcy5tYXAiLCJcInVzZSBzdHJpY3RcIjtleHBvcnRzLl9fZXNNb2R1bGU9dHJ1ZTtleHBvcnRzLmZvcm1hdFVybD1mb3JtYXRVcmw7dmFyIHF1ZXJ5c3RyaW5nPV9pbnRlcm9wUmVxdWlyZVdpbGRjYXJkKHJlcXVpcmUoXCIuL3F1ZXJ5c3RyaW5nXCIpKTtmdW5jdGlvbiBfZ2V0UmVxdWlyZVdpbGRjYXJkQ2FjaGUoKXtpZih0eXBlb2YgV2Vha01hcCE9PVwiZnVuY3Rpb25cIilyZXR1cm4gbnVsbDt2YXIgY2FjaGU9bmV3IFdlYWtNYXAoKTtfZ2V0UmVxdWlyZVdpbGRjYXJkQ2FjaGU9ZnVuY3Rpb24oKXtyZXR1cm4gY2FjaGU7fTtyZXR1cm4gY2FjaGU7fWZ1bmN0aW9uIF9pbnRlcm9wUmVxdWlyZVdpbGRjYXJkKG9iail7aWYob2JqJiZvYmouX19lc01vZHVsZSl7cmV0dXJuIG9iajt9aWYob2JqPT09bnVsbHx8dHlwZW9mIG9iaiE9PVwib2JqZWN0XCImJnR5cGVvZiBvYmohPT1cImZ1bmN0aW9uXCIpe3JldHVybntkZWZhdWx0Om9ian07fXZhciBjYWNoZT1fZ2V0UmVxdWlyZVdpbGRjYXJkQ2FjaGUoKTtpZihjYWNoZSYmY2FjaGUuaGFzKG9iaikpe3JldHVybiBjYWNoZS5nZXQob2JqKTt9dmFyIG5ld09iaj17fTt2YXIgaGFzUHJvcGVydHlEZXNjcmlwdG9yPU9iamVjdC5kZWZpbmVQcm9wZXJ0eSYmT2JqZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvcjtmb3IodmFyIGtleSBpbiBvYmope2lmKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosa2V5KSl7dmFyIGRlc2M9aGFzUHJvcGVydHlEZXNjcmlwdG9yP09iamVjdC5nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3Iob2JqLGtleSk6bnVsbDtpZihkZXNjJiYoZGVzYy5nZXR8fGRlc2Muc2V0KSl7T2JqZWN0LmRlZmluZVByb3BlcnR5KG5ld09iaixrZXksZGVzYyk7fWVsc2V7bmV3T2JqW2tleV09b2JqW2tleV07fX19bmV3T2JqLmRlZmF1bHQ9b2JqO2lmKGNhY2hlKXtjYWNoZS5zZXQob2JqLG5ld09iaik7fXJldHVybiBuZXdPYmo7fS8vIEZvcm1hdCBmdW5jdGlvbiBtb2RpZmllZCBmcm9tIG5vZGVqc1xuLy8gQ29weXJpZ2h0IEpveWVudCwgSW5jLiBhbmQgb3RoZXIgTm9kZSBjb250cmlidXRvcnMuXG4vL1xuLy8gUGVybWlzc2lvbiBpcyBoZXJlYnkgZ3JhbnRlZCwgZnJlZSBvZiBjaGFyZ2UsIHRvIGFueSBwZXJzb24gb2J0YWluaW5nIGFcbi8vIGNvcHkgb2YgdGhpcyBzb2Z0d2FyZSBhbmQgYXNzb2NpYXRlZCBkb2N1bWVudGF0aW9uIGZpbGVzICh0aGVcbi8vIFwiU29mdHdhcmVcIiksIHRvIGRlYWwgaW4gdGhlIFNvZnR3YXJlIHdpdGhvdXQgcmVzdHJpY3Rpb24sIGluY2x1ZGluZ1xuLy8gd2l0aG91dCBsaW1pdGF0aW9uIHRoZSByaWdodHMgdG8gdXNlLCBjb3B5LCBtb2RpZnksIG1lcmdlLCBwdWJsaXNoLFxuLy8gZGlzdHJpYnV0ZSwgc3VibGljZW5zZSwgYW5kL29yIHNlbGwgY29waWVzIG9mIHRoZSBTb2Z0d2FyZSwgYW5kIHRvIHBlcm1pdFxuLy8gcGVyc29ucyB0byB3aG9tIHRoZSBTb2Z0d2FyZSBpcyBmdXJuaXNoZWQgdG8gZG8gc28sIHN1YmplY3QgdG8gdGhlXG4vLyBmb2xsb3dpbmcgY29uZGl0aW9uczpcbi8vXG4vLyBUaGUgYWJvdmUgY29weXJpZ2h0IG5vdGljZSBhbmQgdGhpcyBwZXJtaXNzaW9uIG5vdGljZSBzaGFsbCBiZSBpbmNsdWRlZFxuLy8gaW4gYWxsIGNvcGllcyBvciBzdWJzdGFudGlhbCBwb3J0aW9ucyBvZiB0aGUgU29mdHdhcmUuXG4vL1xuLy8gVEhFIFNPRlRXQVJFIElTIFBST1ZJREVEIFwiQVMgSVNcIiwgV0lUSE9VVCBXQVJSQU5UWSBPRiBBTlkgS0lORCwgRVhQUkVTU1xuLy8gT1IgSU1QTElFRCwgSU5DTFVESU5HIEJVVCBOT1QgTElNSVRFRCBUTyBUSEUgV0FSUkFOVElFUyBPRlxuLy8gTUVSQ0hBTlRBQklMSVRZLCBGSVRORVNTIEZPUiBBIFBBUlRJQ1VMQVIgUFVSUE9TRSBBTkQgTk9OSU5GUklOR0VNRU5ULiBJTlxuLy8gTk8gRVZFTlQgU0hBTEwgVEhFIEFVVEhPUlMgT1IgQ09QWVJJR0hUIEhPTERFUlMgQkUgTElBQkxFIEZPUiBBTlkgQ0xBSU0sXG4vLyBEQU1BR0VTIE9SIE9USEVSIExJQUJJTElUWSwgV0hFVEhFUiBJTiBBTiBBQ1RJT04gT0YgQ09OVFJBQ1QsIFRPUlQgT1Jcbi8vIE9USEVSV0lTRSwgQVJJU0lORyBGUk9NLCBPVVQgT0YgT1IgSU4gQ09OTkVDVElPTiBXSVRIIFRIRSBTT0ZUV0FSRSBPUiBUSEVcbi8vIFVTRSBPUiBPVEhFUiBERUFMSU5HUyBJTiBUSEUgU09GVFdBUkUuXG5jb25zdCBzbGFzaGVkUHJvdG9jb2xzPS9odHRwcz98ZnRwfGdvcGhlcnxmaWxlLztmdW5jdGlvbiBmb3JtYXRVcmwodXJsT2JqKXtsZXR7YXV0aCxob3N0bmFtZX09dXJsT2JqO2xldCBwcm90b2NvbD11cmxPYmoucHJvdG9jb2x8fCcnO2xldCBwYXRobmFtZT11cmxPYmoucGF0aG5hbWV8fCcnO2xldCBoYXNoPXVybE9iai5oYXNofHwnJztsZXQgcXVlcnk9dXJsT2JqLnF1ZXJ5fHwnJztsZXQgaG9zdD1mYWxzZTthdXRoPWF1dGg/ZW5jb2RlVVJJQ29tcG9uZW50KGF1dGgpLnJlcGxhY2UoLyUzQS9pLCc6JykrJ0AnOicnO2lmKHVybE9iai5ob3N0KXtob3N0PWF1dGgrdXJsT2JqLmhvc3Q7fWVsc2UgaWYoaG9zdG5hbWUpe2hvc3Q9YXV0aCsofmhvc3RuYW1lLmluZGV4T2YoJzonKT9gWyR7aG9zdG5hbWV9XWA6aG9zdG5hbWUpO2lmKHVybE9iai5wb3J0KXtob3N0Kz0nOicrdXJsT2JqLnBvcnQ7fX1pZihxdWVyeSYmdHlwZW9mIHF1ZXJ5PT09J29iamVjdCcpe3F1ZXJ5PVN0cmluZyhxdWVyeXN0cmluZy51cmxRdWVyeVRvU2VhcmNoUGFyYW1zKHF1ZXJ5KSk7fWxldCBzZWFyY2g9dXJsT2JqLnNlYXJjaHx8cXVlcnkmJmA/JHtxdWVyeX1gfHwnJztpZihwcm90b2NvbCYmcHJvdG9jb2wuc3Vic3RyKC0xKSE9PSc6Jylwcm90b2NvbCs9JzonO2lmKHVybE9iai5zbGFzaGVzfHwoIXByb3RvY29sfHxzbGFzaGVkUHJvdG9jb2xzLnRlc3QocHJvdG9jb2wpKSYmaG9zdCE9PWZhbHNlKXtob3N0PScvLycrKGhvc3R8fCcnKTtpZihwYXRobmFtZSYmcGF0aG5hbWVbMF0hPT0nLycpcGF0aG5hbWU9Jy8nK3BhdGhuYW1lO31lbHNlIGlmKCFob3N0KXtob3N0PScnO31pZihoYXNoJiZoYXNoWzBdIT09JyMnKWhhc2g9JyMnK2hhc2g7aWYoc2VhcmNoJiZzZWFyY2hbMF0hPT0nPycpc2VhcmNoPSc/JytzZWFyY2g7cGF0aG5hbWU9cGF0aG5hbWUucmVwbGFjZSgvWz8jXS9nLGVuY29kZVVSSUNvbXBvbmVudCk7c2VhcmNoPXNlYXJjaC5yZXBsYWNlKCcjJywnJTIzJyk7cmV0dXJuYCR7cHJvdG9jb2x9JHtob3N0fSR7cGF0aG5hbWV9JHtzZWFyY2h9JHtoYXNofWA7fVxuLy8jIHNvdXJjZU1hcHBpbmdVUkw9Zm9ybWF0LXVybC5qcy5tYXAiLCJcInVzZSBzdHJpY3RcIjtleHBvcnRzLl9fZXNNb2R1bGU9dHJ1ZTtleHBvcnRzLmlzRHluYW1pY1JvdXRlPWlzRHluYW1pY1JvdXRlOy8vIElkZW50aWZ5IC9bcGFyYW1dLyBpbiByb3V0ZSBzdHJpbmdcbmNvbnN0IFRFU1RfUk9VVEU9L1xcL1xcW1teL10rP1xcXSg/PVxcL3wkKS87ZnVuY3Rpb24gaXNEeW5hbWljUm91dGUocm91dGUpe3JldHVybiBURVNUX1JPVVRFLnRlc3Qocm91dGUpO31cbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWlzLWR5bmFtaWMuanMubWFwIiwiXCJ1c2Ugc3RyaWN0XCI7ZXhwb3J0cy5fX2VzTW9kdWxlPXRydWU7ZXhwb3J0cy5wYXJzZVJlbGF0aXZlVXJsPXBhcnNlUmVsYXRpdmVVcmw7dmFyIF91dGlscz1yZXF1aXJlKFwiLi4vLi4vdXRpbHNcIik7dmFyIF9xdWVyeXN0cmluZz1yZXF1aXJlKFwiLi9xdWVyeXN0cmluZ1wiKTsvKipcbiAqIFBhcnNlcyBwYXRoLXJlbGF0aXZlIHVybHMgKGUuZy4gYC9oZWxsby93b3JsZD9mb289YmFyYCkuIElmIHVybCBpc24ndCBwYXRoLXJlbGF0aXZlXG4gKiAoZS5nLiBgLi9oZWxsb2ApIHRoZW4gYXQgbGVhc3QgYmFzZSBtdXN0IGJlLlxuICogQWJzb2x1dGUgdXJscyBhcmUgcmVqZWN0ZWQgd2l0aCBvbmUgZXhjZXB0aW9uLCBpbiB0aGUgYnJvd3NlciwgYWJzb2x1dGUgdXJscyB0aGF0IGFyZSBvblxuICogdGhlIGN1cnJlbnQgb3JpZ2luIHdpbGwgYmUgcGFyc2VkIGFzIHJlbGF0aXZlXG4gKi9mdW5jdGlvbiBwYXJzZVJlbGF0aXZlVXJsKHVybCxiYXNlKXtjb25zdCBnbG9iYWxCYXNlPW5ldyBVUkwodHlwZW9mIHdpbmRvdz09PSd1bmRlZmluZWQnPydodHRwOi8vbic6KDAsX3V0aWxzLmdldExvY2F0aW9uT3JpZ2luKSgpKTtjb25zdCByZXNvbHZlZEJhc2U9YmFzZT9uZXcgVVJMKGJhc2UsZ2xvYmFsQmFzZSk6Z2xvYmFsQmFzZTtjb25zdHtwYXRobmFtZSxzZWFyY2hQYXJhbXMsc2VhcmNoLGhhc2gsaHJlZixvcmlnaW59PW5ldyBVUkwodXJsLHJlc29sdmVkQmFzZSk7aWYob3JpZ2luIT09Z2xvYmFsQmFzZS5vcmlnaW4pe3Rocm93IG5ldyBFcnJvcihgaW52YXJpYW50OiBpbnZhbGlkIHJlbGF0aXZlIFVSTCwgcm91dGVyIHJlY2VpdmVkICR7dXJsfWApO31yZXR1cm57cGF0aG5hbWUscXVlcnk6KDAsX3F1ZXJ5c3RyaW5nLnNlYXJjaFBhcmFtc1RvVXJsUXVlcnkpKHNlYXJjaFBhcmFtcyksc2VhcmNoLGhhc2gsaHJlZjpocmVmLnNsaWNlKGdsb2JhbEJhc2Uub3JpZ2luLmxlbmd0aCl9O31cbi8vIyBzb3VyY2VNYXBwaW5nVVJMPXBhcnNlLXJlbGF0aXZlLXVybC5qcy5tYXAiLCJcInVzZSBzdHJpY3RcIjtleHBvcnRzLl9fZXNNb2R1bGU9dHJ1ZTtleHBvcnRzLnNlYXJjaFBhcmFtc1RvVXJsUXVlcnk9c2VhcmNoUGFyYW1zVG9VcmxRdWVyeTtleHBvcnRzLnVybFF1ZXJ5VG9TZWFyY2hQYXJhbXM9dXJsUXVlcnlUb1NlYXJjaFBhcmFtcztleHBvcnRzLmFzc2lnbj1hc3NpZ247ZnVuY3Rpb24gc2VhcmNoUGFyYW1zVG9VcmxRdWVyeShzZWFyY2hQYXJhbXMpe2NvbnN0IHF1ZXJ5PXt9O3NlYXJjaFBhcmFtcy5mb3JFYWNoKCh2YWx1ZSxrZXkpPT57aWYodHlwZW9mIHF1ZXJ5W2tleV09PT0ndW5kZWZpbmVkJyl7cXVlcnlba2V5XT12YWx1ZTt9ZWxzZSBpZihBcnJheS5pc0FycmF5KHF1ZXJ5W2tleV0pKXs7cXVlcnlba2V5XS5wdXNoKHZhbHVlKTt9ZWxzZXtxdWVyeVtrZXldPVtxdWVyeVtrZXldLHZhbHVlXTt9fSk7cmV0dXJuIHF1ZXJ5O31mdW5jdGlvbiBzdHJpbmdpZnlVcmxRdWVyeVBhcmFtKHBhcmFtKXtpZih0eXBlb2YgcGFyYW09PT0nc3RyaW5nJ3x8dHlwZW9mIHBhcmFtPT09J251bWJlcicmJiFpc05hTihwYXJhbSl8fHR5cGVvZiBwYXJhbT09PSdib29sZWFuJyl7cmV0dXJuIFN0cmluZyhwYXJhbSk7fWVsc2V7cmV0dXJuJyc7fX1mdW5jdGlvbiB1cmxRdWVyeVRvU2VhcmNoUGFyYW1zKHVybFF1ZXJ5KXtjb25zdCByZXN1bHQ9bmV3IFVSTFNlYXJjaFBhcmFtcygpO09iamVjdC5lbnRyaWVzKHVybFF1ZXJ5KS5mb3JFYWNoKChba2V5LHZhbHVlXSk9PntpZihBcnJheS5pc0FycmF5KHZhbHVlKSl7dmFsdWUuZm9yRWFjaChpdGVtPT5yZXN1bHQuYXBwZW5kKGtleSxzdHJpbmdpZnlVcmxRdWVyeVBhcmFtKGl0ZW0pKSk7fWVsc2V7cmVzdWx0LnNldChrZXksc3RyaW5naWZ5VXJsUXVlcnlQYXJhbSh2YWx1ZSkpO319KTtyZXR1cm4gcmVzdWx0O31mdW5jdGlvbiBhc3NpZ24odGFyZ2V0LC4uLnNlYXJjaFBhcmFtc0xpc3Qpe3NlYXJjaFBhcmFtc0xpc3QuZm9yRWFjaChzZWFyY2hQYXJhbXM9PntBcnJheS5mcm9tKHNlYXJjaFBhcmFtcy5rZXlzKCkpLmZvckVhY2goa2V5PT50YXJnZXQuZGVsZXRlKGtleSkpO3NlYXJjaFBhcmFtcy5mb3JFYWNoKCh2YWx1ZSxrZXkpPT50YXJnZXQuYXBwZW5kKGtleSx2YWx1ZSkpO30pO3JldHVybiB0YXJnZXQ7fVxuLy8jIHNvdXJjZU1hcHBpbmdVUkw9cXVlcnlzdHJpbmcuanMubWFwIiwiXCJ1c2Ugc3RyaWN0XCI7ZXhwb3J0cy5fX2VzTW9kdWxlPXRydWU7ZXhwb3J0cy5nZXRSb3V0ZU1hdGNoZXI9Z2V0Um91dGVNYXRjaGVyO2Z1bmN0aW9uIGdldFJvdXRlTWF0Y2hlcihyb3V0ZVJlZ2V4KXtjb25zdHtyZSxncm91cHN9PXJvdXRlUmVnZXg7cmV0dXJuIHBhdGhuYW1lPT57Y29uc3Qgcm91dGVNYXRjaD1yZS5leGVjKHBhdGhuYW1lKTtpZighcm91dGVNYXRjaCl7cmV0dXJuIGZhbHNlO31jb25zdCBkZWNvZGU9cGFyYW09Pnt0cnl7cmV0dXJuIGRlY29kZVVSSUNvbXBvbmVudChwYXJhbSk7fWNhdGNoKF8pe2NvbnN0IGVycj1uZXcgRXJyb3IoJ2ZhaWxlZCB0byBkZWNvZGUgcGFyYW0nKTtlcnIuY29kZT0nREVDT0RFX0ZBSUxFRCc7dGhyb3cgZXJyO319O2NvbnN0IHBhcmFtcz17fTtPYmplY3Qua2V5cyhncm91cHMpLmZvckVhY2goc2x1Z05hbWU9Pntjb25zdCBnPWdyb3Vwc1tzbHVnTmFtZV07Y29uc3QgbT1yb3V0ZU1hdGNoW2cucG9zXTtpZihtIT09dW5kZWZpbmVkKXtwYXJhbXNbc2x1Z05hbWVdPX5tLmluZGV4T2YoJy8nKT9tLnNwbGl0KCcvJykubWFwKGVudHJ5PT5kZWNvZGUoZW50cnkpKTpnLnJlcGVhdD9bZGVjb2RlKG0pXTpkZWNvZGUobSk7fX0pO3JldHVybiBwYXJhbXM7fTt9XG4vLyMgc291cmNlTWFwcGluZ1VSTD1yb3V0ZS1tYXRjaGVyLmpzLm1hcCIsIlwidXNlIHN0cmljdFwiO2V4cG9ydHMuX19lc01vZHVsZT10cnVlO2V4cG9ydHMuZ2V0Um91dGVSZWdleD1nZXRSb3V0ZVJlZ2V4Oy8vIHRoaXMgaXNuJ3QgaW1wb3J0aW5nIHRoZSBlc2NhcGUtc3RyaW5nLXJlZ2V4IG1vZHVsZVxuLy8gdG8gcmVkdWNlIGJ5dGVzXG5mdW5jdGlvbiBlc2NhcGVSZWdleChzdHIpe3JldHVybiBzdHIucmVwbGFjZSgvW3xcXFxce30oKVtcXF1eJCsqPy4tXS9nLCdcXFxcJCYnKTt9ZnVuY3Rpb24gcGFyc2VQYXJhbWV0ZXIocGFyYW0pe2NvbnN0IG9wdGlvbmFsPXBhcmFtLnN0YXJ0c1dpdGgoJ1snKSYmcGFyYW0uZW5kc1dpdGgoJ10nKTtpZihvcHRpb25hbCl7cGFyYW09cGFyYW0uc2xpY2UoMSwtMSk7fWNvbnN0IHJlcGVhdD1wYXJhbS5zdGFydHNXaXRoKCcuLi4nKTtpZihyZXBlYXQpe3BhcmFtPXBhcmFtLnNsaWNlKDMpO31yZXR1cm57a2V5OnBhcmFtLHJlcGVhdCxvcHRpb25hbH07fWZ1bmN0aW9uIGdldFJvdXRlUmVnZXgobm9ybWFsaXplZFJvdXRlKXtjb25zdCBzZWdtZW50cz0obm9ybWFsaXplZFJvdXRlLnJlcGxhY2UoL1xcLyQvLCcnKXx8Jy8nKS5zbGljZSgxKS5zcGxpdCgnLycpO2NvbnN0IGdyb3Vwcz17fTtsZXQgZ3JvdXBJbmRleD0xO2NvbnN0IHBhcmFtZXRlcml6ZWRSb3V0ZT1zZWdtZW50cy5tYXAoc2VnbWVudD0+e2lmKHNlZ21lbnQuc3RhcnRzV2l0aCgnWycpJiZzZWdtZW50LmVuZHNXaXRoKCddJykpe2NvbnN0e2tleSxvcHRpb25hbCxyZXBlYXR9PXBhcnNlUGFyYW1ldGVyKHNlZ21lbnQuc2xpY2UoMSwtMSkpO2dyb3Vwc1trZXldPXtwb3M6Z3JvdXBJbmRleCsrLHJlcGVhdCxvcHRpb25hbH07cmV0dXJuIHJlcGVhdD9vcHRpb25hbD8nKD86LyguKz8pKT8nOicvKC4rPyknOicvKFteL10rPyknO31lbHNle3JldHVybmAvJHtlc2NhcGVSZWdleChzZWdtZW50KX1gO319KS5qb2luKCcnKTsvLyBkZWFkIGNvZGUgZWxpbWluYXRlIGZvciBicm93c2VyIHNpbmNlIGl0J3Mgb25seSBuZWVkZWRcbi8vIHdoaWxlIGdlbmVyYXRpbmcgcm91dGVzLW1hbmlmZXN0XG5pZih0eXBlb2Ygd2luZG93PT09J3VuZGVmaW5lZCcpe2xldCByb3V0ZUtleUNoYXJDb2RlPTk3O2xldCByb3V0ZUtleUNoYXJMZW5ndGg9MTsvLyBidWlsZHMgYSBtaW5pbWFsIHJvdXRlS2V5IHVzaW5nIG9ubHkgYS16IGFuZCBtaW5pbWFsIG51bWJlciBvZiBjaGFyYWN0ZXJzXG5jb25zdCBnZXRTYWZlUm91dGVLZXk9KCk9PntsZXQgcm91dGVLZXk9Jyc7Zm9yKGxldCBpPTA7aTxyb3V0ZUtleUNoYXJMZW5ndGg7aSsrKXtyb3V0ZUtleSs9U3RyaW5nLmZyb21DaGFyQ29kZShyb3V0ZUtleUNoYXJDb2RlKTtyb3V0ZUtleUNoYXJDb2RlKys7aWYocm91dGVLZXlDaGFyQ29kZT4xMjIpe3JvdXRlS2V5Q2hhckxlbmd0aCsrO3JvdXRlS2V5Q2hhckNvZGU9OTc7fX1yZXR1cm4gcm91dGVLZXk7fTtjb25zdCByb3V0ZUtleXM9e307bGV0IG5hbWVkUGFyYW1ldGVyaXplZFJvdXRlPXNlZ21lbnRzLm1hcChzZWdtZW50PT57aWYoc2VnbWVudC5zdGFydHNXaXRoKCdbJykmJnNlZ21lbnQuZW5kc1dpdGgoJ10nKSl7Y29uc3R7a2V5LG9wdGlvbmFsLHJlcGVhdH09cGFyc2VQYXJhbWV0ZXIoc2VnbWVudC5zbGljZSgxLC0xKSk7Ly8gcmVwbGFjZSBhbnkgbm9uLXdvcmQgY2hhcmFjdGVycyBzaW5jZSB0aGV5IGNhbiBicmVha1xuLy8gdGhlIG5hbWVkIHJlZ2V4XG5sZXQgY2xlYW5lZEtleT1rZXkucmVwbGFjZSgvXFxXL2csJycpO2xldCBpbnZhbGlkS2V5PWZhbHNlOy8vIGNoZWNrIGlmIHRoZSBrZXkgaXMgc3RpbGwgaW52YWxpZCBhbmQgZmFsbGJhY2sgdG8gdXNpbmcgYSBrbm93blxuLy8gc2FmZSBrZXlcbmlmKGNsZWFuZWRLZXkubGVuZ3RoPT09MHx8Y2xlYW5lZEtleS5sZW5ndGg+MzApe2ludmFsaWRLZXk9dHJ1ZTt9aWYoIWlzTmFOKHBhcnNlSW50KGNsZWFuZWRLZXkuc3Vic3RyKDAsMSkpKSl7aW52YWxpZEtleT10cnVlO31pZihpbnZhbGlkS2V5KXtjbGVhbmVkS2V5PWdldFNhZmVSb3V0ZUtleSgpO31yb3V0ZUtleXNbY2xlYW5lZEtleV09a2V5O3JldHVybiByZXBlYXQ/b3B0aW9uYWw/YCg/Oi8oPzwke2NsZWFuZWRLZXl9Pi4rPykpP2A6YC8oPzwke2NsZWFuZWRLZXl9Pi4rPylgOmAvKD88JHtjbGVhbmVkS2V5fT5bXi9dKz8pYDt9ZWxzZXtyZXR1cm5gLyR7ZXNjYXBlUmVnZXgoc2VnbWVudCl9YDt9fSkuam9pbignJyk7cmV0dXJue3JlOm5ldyBSZWdFeHAoYF4ke3BhcmFtZXRlcml6ZWRSb3V0ZX0oPzovKT8kYCksZ3JvdXBzLHJvdXRlS2V5cyxuYW1lZFJlZ2V4OmBeJHtuYW1lZFBhcmFtZXRlcml6ZWRSb3V0ZX0oPzovKT8kYH07fXJldHVybntyZTpuZXcgUmVnRXhwKGBeJHtwYXJhbWV0ZXJpemVkUm91dGV9KD86Lyk/JGApLGdyb3Vwc307fVxuLy8jIHNvdXJjZU1hcHBpbmdVUkw9cm91dGUtcmVnZXguanMubWFwIiwiXCJ1c2Ugc3RyaWN0XCI7ZXhwb3J0cy5fX2VzTW9kdWxlPXRydWU7ZXhwb3J0cy5leGVjT25jZT1leGVjT25jZTtleHBvcnRzLmdldExvY2F0aW9uT3JpZ2luPWdldExvY2F0aW9uT3JpZ2luO2V4cG9ydHMuZ2V0VVJMPWdldFVSTDtleHBvcnRzLmdldERpc3BsYXlOYW1lPWdldERpc3BsYXlOYW1lO2V4cG9ydHMuaXNSZXNTZW50PWlzUmVzU2VudDtleHBvcnRzLmxvYWRHZXRJbml0aWFsUHJvcHM9bG9hZEdldEluaXRpYWxQcm9wcztleHBvcnRzLmZvcm1hdFdpdGhWYWxpZGF0aW9uPWZvcm1hdFdpdGhWYWxpZGF0aW9uO2V4cG9ydHMuU1Q9ZXhwb3J0cy5TUD1leHBvcnRzLnVybE9iamVjdEtleXM9dm9pZCAwO3ZhciBfZm9ybWF0VXJsPXJlcXVpcmUoXCIuL3JvdXRlci91dGlscy9mb3JtYXQtdXJsXCIpOy8qKlxuICogVXRpbHNcbiAqL2Z1bmN0aW9uIGV4ZWNPbmNlKGZuKXtsZXQgdXNlZD1mYWxzZTtsZXQgcmVzdWx0O3JldHVybiguLi5hcmdzKT0+e2lmKCF1c2VkKXt1c2VkPXRydWU7cmVzdWx0PWZuKC4uLmFyZ3MpO31yZXR1cm4gcmVzdWx0O307fWZ1bmN0aW9uIGdldExvY2F0aW9uT3JpZ2luKCl7Y29uc3R7cHJvdG9jb2wsaG9zdG5hbWUscG9ydH09d2luZG93LmxvY2F0aW9uO3JldHVybmAke3Byb3RvY29sfS8vJHtob3N0bmFtZX0ke3BvcnQ/JzonK3BvcnQ6Jyd9YDt9ZnVuY3Rpb24gZ2V0VVJMKCl7Y29uc3R7aHJlZn09d2luZG93LmxvY2F0aW9uO2NvbnN0IG9yaWdpbj1nZXRMb2NhdGlvbk9yaWdpbigpO3JldHVybiBocmVmLnN1YnN0cmluZyhvcmlnaW4ubGVuZ3RoKTt9ZnVuY3Rpb24gZ2V0RGlzcGxheU5hbWUoQ29tcG9uZW50KXtyZXR1cm4gdHlwZW9mIENvbXBvbmVudD09PSdzdHJpbmcnP0NvbXBvbmVudDpDb21wb25lbnQuZGlzcGxheU5hbWV8fENvbXBvbmVudC5uYW1lfHwnVW5rbm93bic7fWZ1bmN0aW9uIGlzUmVzU2VudChyZXMpe3JldHVybiByZXMuZmluaXNoZWR8fHJlcy5oZWFkZXJzU2VudDt9YXN5bmMgZnVuY3Rpb24gbG9hZEdldEluaXRpYWxQcm9wcyhBcHAsY3R4KXtpZihwcm9jZXNzLmVudi5OT0RFX0VOViE9PSdwcm9kdWN0aW9uJyl7dmFyIF9BcHAkcHJvdG90eXBlO2lmKChfQXBwJHByb3RvdHlwZT1BcHAucHJvdG90eXBlKSE9bnVsbCYmX0FwcCRwcm90b3R5cGUuZ2V0SW5pdGlhbFByb3BzKXtjb25zdCBtZXNzYWdlPWBcIiR7Z2V0RGlzcGxheU5hbWUoQXBwKX0uZ2V0SW5pdGlhbFByb3BzKClcIiBpcyBkZWZpbmVkIGFzIGFuIGluc3RhbmNlIG1ldGhvZCAtIHZpc2l0IGh0dHBzOi8vbmV4dGpzLm9yZy9kb2NzL21lc3NhZ2VzL2dldC1pbml0aWFsLXByb3BzLWFzLWFuLWluc3RhbmNlLW1ldGhvZCBmb3IgbW9yZSBpbmZvcm1hdGlvbi5gO3Rocm93IG5ldyBFcnJvcihtZXNzYWdlKTt9fS8vIHdoZW4gY2FsbGVkIGZyb20gX2FwcCBgY3R4YCBpcyBuZXN0ZWQgaW4gYGN0eGBcbmNvbnN0IHJlcz1jdHgucmVzfHxjdHguY3R4JiZjdHguY3R4LnJlcztpZighQXBwLmdldEluaXRpYWxQcm9wcyl7aWYoY3R4LmN0eCYmY3R4LkNvbXBvbmVudCl7Ly8gQHRzLWlnbm9yZSBwYWdlUHJvcHMgZGVmYXVsdFxucmV0dXJue3BhZ2VQcm9wczphd2FpdCBsb2FkR2V0SW5pdGlhbFByb3BzKGN0eC5Db21wb25lbnQsY3R4LmN0eCl9O31yZXR1cm57fTt9Y29uc3QgcHJvcHM9YXdhaXQgQXBwLmdldEluaXRpYWxQcm9wcyhjdHgpO2lmKHJlcyYmaXNSZXNTZW50KHJlcykpe3JldHVybiBwcm9wczt9aWYoIXByb3BzKXtjb25zdCBtZXNzYWdlPWBcIiR7Z2V0RGlzcGxheU5hbWUoQXBwKX0uZ2V0SW5pdGlhbFByb3BzKClcIiBzaG91bGQgcmVzb2x2ZSB0byBhbiBvYmplY3QuIEJ1dCBmb3VuZCBcIiR7cHJvcHN9XCIgaW5zdGVhZC5gO3Rocm93IG5ldyBFcnJvcihtZXNzYWdlKTt9aWYocHJvY2Vzcy5lbnYuTk9ERV9FTlYhPT0ncHJvZHVjdGlvbicpe2lmKE9iamVjdC5rZXlzKHByb3BzKS5sZW5ndGg9PT0wJiYhY3R4LmN0eCl7Y29uc29sZS53YXJuKGAke2dldERpc3BsYXlOYW1lKEFwcCl9IHJldHVybmVkIGFuIGVtcHR5IG9iamVjdCBmcm9tIFxcYGdldEluaXRpYWxQcm9wc1xcYC4gVGhpcyBkZS1vcHRpbWl6ZXMgYW5kIHByZXZlbnRzIGF1dG9tYXRpYyBzdGF0aWMgb3B0aW1pemF0aW9uLiBodHRwczovL25leHRqcy5vcmcvZG9jcy9tZXNzYWdlcy9lbXB0eS1vYmplY3QtZ2V0SW5pdGlhbFByb3BzYCk7fX1yZXR1cm4gcHJvcHM7fWNvbnN0IHVybE9iamVjdEtleXM9WydhdXRoJywnaGFzaCcsJ2hvc3QnLCdob3N0bmFtZScsJ2hyZWYnLCdwYXRoJywncGF0aG5hbWUnLCdwb3J0JywncHJvdG9jb2wnLCdxdWVyeScsJ3NlYXJjaCcsJ3NsYXNoZXMnXTtleHBvcnRzLnVybE9iamVjdEtleXM9dXJsT2JqZWN0S2V5cztmdW5jdGlvbiBmb3JtYXRXaXRoVmFsaWRhdGlvbih1cmwpe2lmKHByb2Nlc3MuZW52Lk5PREVfRU5WPT09J2RldmVsb3BtZW50Jyl7aWYodXJsIT09bnVsbCYmdHlwZW9mIHVybD09PSdvYmplY3QnKXtPYmplY3Qua2V5cyh1cmwpLmZvckVhY2goa2V5PT57aWYodXJsT2JqZWN0S2V5cy5pbmRleE9mKGtleSk9PT0tMSl7Y29uc29sZS53YXJuKGBVbmtub3duIGtleSBwYXNzZWQgdmlhIHVybE9iamVjdCBpbnRvIHVybC5mb3JtYXQ6ICR7a2V5fWApO319KTt9fXJldHVybigwLF9mb3JtYXRVcmwuZm9ybWF0VXJsKSh1cmwpO31jb25zdCBTUD10eXBlb2YgcGVyZm9ybWFuY2UhPT0ndW5kZWZpbmVkJztleHBvcnRzLlNQPVNQO2NvbnN0IFNUPVNQJiZ0eXBlb2YgcGVyZm9ybWFuY2UubWFyaz09PSdmdW5jdGlvbicmJnR5cGVvZiBwZXJmb3JtYW5jZS5tZWFzdXJlPT09J2Z1bmN0aW9uJztleHBvcnRzLlNUPVNUO1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9dXRpbHMuanMubWFwIiwiXG4gICAgaW1wb3J0IF9faTE4bkNvbmZpZyBmcm9tICdAbmV4dC10cmFuc2xhdGUtcm9vdC9pMThuJ1xuICAgIGltcG9ydCBfX2FwcFdpdGhJMThuIGZyb20gJ25leHQtdHJhbnNsYXRlL2FwcFdpdGhJMThuJ1xuICAgIFxuaW1wb3J0ICcuLy4uL3N0eWxlcy9nbG9iYWxzLmNzcydcclxuaW1wb3J0ICcuLy4uL3N0eWxlcy9jYWxlbmRhci5zY3NzJ1xyXG5pbXBvcnQgJ3JlYWN0LXRvYXN0aWZ5L2Rpc3QvUmVhY3RUb2FzdGlmeS5jc3MnO1xyXG5cclxuaW1wb3J0IEhlYWQgZnJvbSAnbmV4dC9oZWFkJ1xyXG5pbXBvcnQgTGF5b3V0V3JhcHBlciBmcm9tICcuLy4uL2xheW91dHMvbGF5b3V0LXdyYXBwZXInO1xyXG5pbXBvcnQgeyBQcm92aWRlciB9IGZyb20gJ3JlYWN0LXJlZHV4J1xyXG5pbXBvcnQgeyBzdG9yZSwgcGVyc2lzdG9yIH0gZnJvbSAnLi4vcmVkdXgvc3RvcmUnXHJcbmltcG9ydCB7IFBlcnNpc3RHYXRlIH0gZnJvbSAncmVkdXgtcGVyc2lzdC9pbnRlZ3JhdGlvbi9yZWFjdCdcclxuaW1wb3J0IHsgcmVzZXRTZXJ2ZXJDb250ZXh0IH0gZnJvbSAncmVhY3QtYmVhdXRpZnVsLWRuZCc7XHJcbmltcG9ydFwiLi8uLi9zdHlsZXMvc3RhdGljLWVtcHR5LmNzc1wiO1xyXG5cclxuXHJcbmNvbnN0IF9fUGFnZV9OZXh0X1RyYW5zbGF0ZV9fID0gZnVuY3Rpb24gTXlBcHAoeyBDb21wb25lbnQsIHBhZ2VQcm9wcyB9KSB7XHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8UHJvdmlkZXIgc3RvcmU9e3N0b3JlfT5cclxuICAgICAgPFBlcnNpc3RHYXRlIGxvYWRpbmc9e251bGx9IHBlcnNpc3Rvcj17cGVyc2lzdG9yfT5cclxuICAgICAgICA8SGVhZD5cclxuICAgICAgICAgIDx0aXRsZT5Gb290QmV0PC90aXRsZT5cclxuICAgICAgICAgIDxtZXRhIG5hbWU9XCJ2aWV3cG9ydFwiIGNvbnRlbnQ9XCJpbml0aWFsLXNjYWxlPTEuMCwgd2lkdGg9ZGV2aWNlLXdpZHRoXCIgLz5cclxuICAgICAgICAgIDxzY3JpcHQgdHlwZT1cInRleHQvamF2YXNjcmlwdFwiIHNyYz1cIi8vdmsuY29tL2pzL2FwaS9vcGVuYXBpLmpzPzE1MlwiPjwvc2NyaXB0PlxyXG4gICAgICAgIDwvSGVhZD5cclxuICAgICAgICA8TGF5b3V0V3JhcHBlciB7Li4ucGFnZVByb3BzfT5cclxuICAgICAgICAgIDxDb21wb25lbnQgey4uLnBhZ2VQcm9wc30gLz5cclxuICAgICAgICA8L0xheW91dFdyYXBwZXI+XHJcbiAgICAgIDwvUGVyc2lzdEdhdGU+XHJcbiAgICA8L1Byb3ZpZGVyPlxyXG4gIClcclxufVxyXG5cclxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGdldFNlcnZlclNpZGVQcm9wcyhjb250ZXh0KSB7XHJcblxyXG4gIHJlc2V0U2VydmVyQ29udGV4dCgpXHJcblxyXG4gIHJldHVybiB7XHJcbiAgICBwcm9wczoge30sIC8vIHdpbGwgYmUgcGFzc2VkIHRvIHRoZSBwYWdlIGNvbXBvbmVudCBhcyBwcm9wc1xyXG4gIH1cclxufVxuXG4gICAgZXhwb3J0IGRlZmF1bHQgX19hcHBXaXRoSTE4bihfX1BhZ2VfTmV4dF9UcmFuc2xhdGVfXywge1xuICAgICAgLi4uX19pMThuQ29uZmlnLFxuICAgICAgaXNMb2FkZXI6IHRydWUsXG4gICAgICBza2lwSW5pdGlhbFByb3BzOiB0cnVlLFxuICAgICAgbG9hZExvY2FsZUZyb206IChsLCBuKSA9PiBpbXBvcnQoYEBuZXh0LXRyYW5zbGF0ZS1yb290L2xvY2FsZXMvJHtsfS8ke259YCkudGhlbihtID0+IG0uZGVmYXVsdCksXG4gICAgfSk7XG4gICIsImltcG9ydCB7IGNyZWF0ZVNsaWNlIH0gZnJvbSAnQHJlZHV4anMvdG9vbGtpdCdcclxuXHJcblxyXG5leHBvcnQgY29uc3QgbWF0Y2hTbGljZSA9IGNyZWF0ZVNsaWNlKHtcclxuICAgIG5hbWU6IFwidXNlclwiLFxyXG4gICAgaW5pdGlhbFN0YXRlOiB7XHJcbiAgICAgICAgbWF0Y2hJZDogbnVsbFxyXG4gICAgfSxcclxuICAgIHJlZHVjZXJzOiB7XHJcbiAgICAgICAgc2V0TWF0Y2hJZDogKHN0YXRlLCBhY3Rpb24pID0+IHtcclxuICAgICAgICAgICAgc3RhdGUubWF0Y2hJZCA9IGFjdGlvbi5wYXlsb2FkXHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59KVxyXG5cclxuXHJcbmV4cG9ydCBjb25zdCB7IHNldE1hdGNoSWQgfSA9IG1hdGNoU2xpY2UuYWN0aW9uc1xyXG5cclxuZXhwb3J0IGNvbnN0IGdldE1hdGNoSWQgPSBzdGF0ZSA9PiBzdGF0ZS5tYXRjaC5tYXRjaElkXHJcblxyXG5leHBvcnQgZGVmYXVsdCBtYXRjaFNsaWNlLnJlZHVjZXIiLCJpbXBvcnQgeyBjcmVhdGVTbGljZSB9IGZyb20gJ0ByZWR1eGpzL3Rvb2xraXQnXHJcblxyXG5cclxuZXhwb3J0IGNvbnN0IHVzZXJTbGljZSA9IGNyZWF0ZVNsaWNlKHtcclxuICAgIG5hbWU6IFwidXNlclwiLFxyXG4gICAgaW5pdGlhbFN0YXRlOiB7XHJcbiAgICAgICAgdXNlcjogbnVsbFxyXG4gICAgfSxcclxuICAgIHJlZHVjZXJzOiB7XHJcbiAgICAgICAgbG9naW46IChzdGF0ZSwgYWN0aW9uKSA9PiB7XHJcbiAgICAgICAgICAgIHN0YXRlLnVzZXIgPSBhY3Rpb24ucGF5bG9hZFxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgbG9nb3V0OiBzdGF0ZSA9PiB7XHJcbiAgICAgICAgICAgIHN0YXRlLnVzZXIgPSBudWxsXHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59KVxyXG5cclxuXHJcbmV4cG9ydCBjb25zdCB7IGxvZ2luLCBsb2dvdXQgfSA9IHVzZXJTbGljZS5hY3Rpb25zXHJcblxyXG5leHBvcnQgY29uc3Qgc2VsZWN0VXNlciA9IHN0YXRlID0+IHN0YXRlLnVzZXIudXNlclxyXG5cclxuZXhwb3J0IGRlZmF1bHQgdXNlclNsaWNlLnJlZHVjZXIiLCIvLyBpbXBvcnQgeyBjcmVhdGVTdG9yZSB9IGZyb20gJ3JlZHV4J1xyXG5cclxuLy8gZXhwb3J0IGNvbnN0IHN0b3JlID0gY3JlYXRlU3RvcmUoLypyZWR1Y2VyIGZ1bmN0aW9uKi8oc3RhdGUsIGFjdGlvbikgPT4ge1xyXG4vLyAgICAgaWYgKGFjdGlvbi50eXBlID09PSBcImxvZ2luXCIpIHtcclxuLy8gICAgICAgICByZXR1cm4ge1xyXG4vLyAgICAgICAgICAgICAuLi5zdGF0ZSxcclxuLy8gICAgICAgICAgICAgY3VycmVudFVzZXI6IHtcclxuLy8gICAgICAgICAgICAgICAgIG5hbWU6IGFjdGlvbi5wYXlsb2FkLm5hbWVcclxuLy8gICAgICAgICAgICAgfVxyXG4vLyAgICAgICAgIH1cclxuLy8gICAgIH1cclxuLy8gICAgIHJldHVybiBzdGF0ZVxyXG4vLyB9LCB7XHJcbi8vICAgICBjdXJyZW50VXNlcjoge1xyXG4vLyAgICAgICAgIG5hbWU6ICdFcmlrIE11cmFkeWFuJ1xyXG4vLyAgICAgfVxyXG4vLyB9KVxyXG5cclxuaW1wb3J0IHsgY29uZmlndXJlU3RvcmUsIGNvbWJpbmVSZWR1Y2VycyB9IGZyb20gXCJAcmVkdXhqcy90b29sa2l0XCI7XHJcbmltcG9ydCB1c2VyUmVkdWNlciBmcm9tIFwiLi9mZWF0dXJlcy91c2VyU2xpY2VcIjtcclxuaW1wb3J0IG1hdGNoUmVkdWNlciBmcm9tIFwiLi9mZWF0dXJlcy9tYXRjaFNsaWNlXCI7XHJcblxyXG5pbXBvcnQge1xyXG4gICAgcGVyc2lzdFN0b3JlLFxyXG4gICAgcGVyc2lzdFJlZHVjZXIsXHJcbiAgICBGTFVTSCxcclxuICAgIFJFSFlEUkFURSxcclxuICAgIFBBVVNFLFxyXG4gICAgUEVSU0lTVCxcclxuICAgIFBVUkdFLFxyXG4gICAgUkVHSVNURVIsXHJcbiAgfSBmcm9tICdyZWR1eC1wZXJzaXN0J1xyXG4gIFxyXG5pbXBvcnQgc3RvcmFnZSBmcm9tICdyZWR1eC1wZXJzaXN0L2xpYi9zdG9yYWdlJ1xyXG5cclxuY29uc3QgcGVyc2lzdENvbmZpZyA9IHtcclxuICAgIGtleTogJ3Jvb3QnLFxyXG4gICAgdmVyc2lvbjogMSxcclxuICAgIHN0b3JhZ2UsXHJcbn1cclxuXHJcbmNvbnN0IHBlcnNpc3RlZFJlZHVjZXIgPSBwZXJzaXN0UmVkdWNlcihwZXJzaXN0Q29uZmlnLCBjb21iaW5lUmVkdWNlcnMoIHtcclxuICAgIHVzZXI6IHVzZXJSZWR1Y2VyLFxyXG4gICAgbWF0Y2g6IG1hdGNoUmVkdWNlclxyXG59ICkgKVxyXG5cclxuZXhwb3J0IGNvbnN0IHN0b3JlID0gY29uZmlndXJlU3RvcmUoe1xyXG4gICAgcmVkdWNlcjogcGVyc2lzdGVkUmVkdWNlcixcclxuICAgIG1pZGRsZXdhcmU6IChnZXREZWZhdWx0TWlkZGxld2FyZSkgPT5cclxuICAgICAgZ2V0RGVmYXVsdE1pZGRsZXdhcmUoe1xyXG4gICAgICAgIHNlcmlhbGl6YWJsZUNoZWNrOiB7XHJcbiAgICAgICAgICBpZ25vcmVkQWN0aW9uczogW0ZMVVNILCBSRUhZRFJBVEUsIFBBVVNFLCBQRVJTSVNULCBQVVJHRSwgUkVHSVNURVJdLFxyXG4gICAgICAgIH0sXHJcbiAgICAgIH0pLFxyXG59KVxyXG4gIFxyXG5leHBvcnQgY29uc3QgcGVyc2lzdG9yID0gcGVyc2lzdFN0b3JlKHN0b3JlKVxyXG5cclxuXHJcbiIsImV4cG9ydCBkZWZhdWx0ICB7XCJzcmNcIjpcIi9fbmV4dC9zdGF0aWMvaW1hZ2UvcHVibGljL2ltYWdlcy9jb21tb24vcGhvbmUuMzAyMTYwMTkxOTgwY2YzZmViYjFlYTRlZjQ0NTE5NGIucG5nXCIsXCJoZWlnaHRcIjoxNixcIndpZHRoXCI6MTYsXCJibHVyRGF0YVVSTFwiOlwiZGF0YTppbWFnZS9wbmc7YmFzZTY0LGlWQk9SdzBLR2dvQUFBQU5TVWhFVWdBQUFBZ0FBQUFJQ0FZQUFBREVENzZMQUFBQTUwbEVRVlI0Mm1QNC8vOC93OWYzSDFnK3Yzc3YvT2YzYjNFZ1gvRHZuejhDM3o5L1lRSEpNWHg1K3g3RUVBSmliaUFXdWJ4dXB4YVFGZ1ZpWVpBaUJpQ0Q5KzcrazZwTE5LS203bTJlN0xSQ003NTZRMUJ4SEZCYzdOL2Z2NElnQmZ6SEp5MHhuc3ZnOG45WFpZL0hrYmJaNXF1TWt3dXZiOTJuRGpLWjRjZlhyeElnNDVlWVJNOWJhaFk3ZDAvREpOZDl6Vk1jUVZiOC92VkxuT0hudCsrQ0lEdmYzM3NpdmRRMFp0NWNCdGYvUzdTaXBnTEZlRDYvZnk4TXNvTDUxL2NmWWlCRklNR1RVNVlhUFQ1MVNRbnN5SStmd1k0RUt3S1pCTFdPSDRqNXZuMzRDUFltQUd6bHExd0VTSFdHQUFBQUFFbEZUa1N1UW1DQ1wifTsiLCJleHBvcnQgZGVmYXVsdCAge1wic3JjXCI6XCIvX25leHQvc3RhdGljL2ltYWdlL3B1YmxpYy9pbWFnZXMvY29tbW9uL3RyaWFuZ2xlLjU0YmEzOTViMTQ3ZDZkMWQxMzJhODk2YTBmY2Y1ODA3LnBuZ1wiLFwiaGVpZ2h0XCI6NyxcIndpZHRoXCI6MTAsXCJibHVyRGF0YVVSTFwiOlwiZGF0YTppbWFnZS9wbmc7YmFzZTY0LGlWQk9SdzBLR2dvQUFBQU5TVWhFVWdBQUFBZ0FBQUFHQ0FZQUFBRCtCZC83QUFBQWhFbEVRVlI0MmszTHNZMENRQXhFMGRGZWZBR2lBVVFoaEZSQVRCR0FoRVFMOUVBbjlFQktTZzBrMkdNdlAyU2xwN0hzSFZYVjJ2WWw3UU41TXBpUDVKbmJTdEc5ek82SHUyZmlKKy9WL2Erb0VyWlpGU3lUbkhoSDVrYml6VGtIQytGbWpxYU5LM3RoaVBib2JtSEI0Y1hINXlkaUdSSENVTnJDbjBuc21QZEZBVU9TdnNQcW13TEV5THFTQUFBQUFFbEZUa1N1UW1DQ1wifTsiLCJleHBvcnQgZGVmYXVsdCAge1wic3JjXCI6XCIvX25leHQvc3RhdGljL2ltYWdlL3B1YmxpYy9pbWFnZXMvY29tbW9uL3VzZXJEZWZhdWx0LjA4MTRjMjRiMjM5MTM4YTgxNzVmYWRkMjU1NDI3OGEwLnBuZ1wiLFwiaGVpZ2h0XCI6MzUsXCJ3aWR0aFwiOjM2LFwiYmx1ckRhdGFVUkxcIjpcImRhdGE6aW1hZ2UvcG5nO2Jhc2U2NCxpVkJPUncwS0dnb0FBQUFOU1VoRVVnQUFBQWdBQUFBSUNBWUFBQURFRDc2TEFBQUFyMGxFUVZSNDJqV01NUXJDVUJCRTl4S0NXSGdFQzhIQ2syZ2FQVklDU2lDZ2hWV2l0dFltcGRnazJtbmhGUVFsSkJyZHpRd2tDKy8vWVdZWU1UTlIxVEgrRFB4QUJjN3doc3dZamtCaHVQaVlhQnduU2czdkJRWXNuR2dVUmZrVkVRUFVuNmFVc0ZCUkEzUGRoWHJla3JwZGVVczdId1FyblU1bTZqaHo5ZjJBQmQ1VDhCenlQT2QwQ2Y2RW1oNXV6MElmSzQ4MHZWZ1U3U3dNdDVabFY4N2ZrSFZaSUQyd0FmZUdOZWlZbWRSUUFORVQrR3BtY0FBQUFBQkpSVTVFcmtKZ2dnPT1cIn07IiwiZXhwb3J0IGRlZmF1bHQgIHtcInNyY1wiOlwiL19uZXh0L3N0YXRpYy9pbWFnZS9wdWJsaWMvaW1hZ2VzL2Zvb3Rlci9sZWZ0QmFsbC45ZDkxMzQ1OGU2MTA2OTNkY2NlN2Q5YjE5MTc1NWVmMi5wbmdcIixcImhlaWdodFwiOjM1OCxcIndpZHRoXCI6NDUyLFwiYmx1ckRhdGFVUkxcIjpcImRhdGE6aW1hZ2UvcG5nO2Jhc2U2NCxpVkJPUncwS0dnb0FBQUFOU1VoRVVnQUFBQWdBQUFBR0NBWUFBQUQrQmQvN0FBQUFZMGxFUVZSNDJtTWdDTmF2VzZmNjRmMUhLWndLdm56NUV2Ly8vLy80Ky9jZXVBTzU3QmdLZnYzOEdRNVVFUGJ5NWF2RWxOUTBPd3dGZ1g1ZUVXdFdyNDc0Ky9kZjVPWEwxME45dzdNd1RJbG9hVzZLZVBmMmZkU3AweGVDNmxvbW9TZ0FBQWg2TGo5K0lwZ25BQUFBQUVsRlRrU3VRbUNDXCJ9OyIsImV4cG9ydCBkZWZhdWx0ICB7XCJzcmNcIjpcIi9fbmV4dC9zdGF0aWMvaW1hZ2UvcHVibGljL2ltYWdlcy9mb290ZXIvbWFzdGVyQ2FyZC4yOTQ5M2Q1MjJkMGU4NTRlZmM5ZjEwMmFkOGYwYTg3Zi5wbmdcIixcImhlaWdodFwiOjQyLFwid2lkdGhcIjo2OSxcImJsdXJEYXRhVVJMXCI6XCJkYXRhOmltYWdlL3BuZztiYXNlNjQsaVZCT1J3MEtHZ29BQUFBTlNVaEVVZ0FBQUFnQUFBQUZDQVlBQUFCNGthMVZBQUFBb0VsRVFWUjRuQldPUFFyQ1FCZ0Y1MHVNcUtSUmpDS1l3bHJzeEo5R3V5QWVRT3k5bUkyQmVBQ1BJSWhnRWRRVDZBRk1JQ0FiZGwyTDk2YVlaa1RERUVpZ1oxbWVpQXR3MVJxQ0IrcTlGVDFicEdUNWlHZXFXYlVjb2lZTWZDM2ZtMk84OFYxMG5CaUNqaUwvVktpN0NuS2tyenpUNkphU3ZUelJ5K2hNdlRhbldvTzI5Wk1NUWgvUkxzWVUxMzlEYUJ2MndOVHV5TUcrdzhhS2l5blkvUURrWERWcUUweWtKd0FBQUFCSlJVNUVya0pnZ2c9PVwifTsiLCJleHBvcnQgZGVmYXVsdCAge1wic3JjXCI6XCIvX25leHQvc3RhdGljL2ltYWdlL3B1YmxpYy9pbWFnZXMvZm9vdGVyL3BheXBhbC5lMDY2OTJjMjY5NTkwNzg5MzQ4ZTU1ZDViNGJjNjM0NS5wbmdcIixcImhlaWdodFwiOjM4LFwid2lkdGhcIjoxNDksXCJibHVyRGF0YVVSTFwiOlwiZGF0YTppbWFnZS9wbmc7YmFzZTY0LGlWQk9SdzBLR2dvQUFBQU5TVWhFVWdBQUFBZ0FBQUFDQ0FZQUFBQmxsSjN0QUFBQVRFbEVRVlI0bkdOa3NHejl6NkF0VjhtdzUrRnhCbkUyR1lhVDgvY3dkQzAyWlJBV0ZtYjQ5KzhXSTBQbHJrc002cXBKREFuVCtSbk1SYlFaSG4zaFlraHllTU9ncHZxUDRkY3ZlUURZREJhdEx2Q1B3d0FBQUFCSlJVNUVya0pnZ2c9PVwifTsiLCJleHBvcnQgZGVmYXVsdCAge1wic3JjXCI6XCIvX25leHQvc3RhdGljL2ltYWdlL3B1YmxpYy9pbWFnZXMvZm9vdGVyL3Zpc2EuNTZlOWY4NTE0NTdhZjgzNjA1MTg2YTM5NDQ4NGUxMWQucG5nXCIsXCJoZWlnaHRcIjozMSxcIndpZHRoXCI6MTA0LFwiYmx1ckRhdGFVUkxcIjpcImRhdGE6aW1hZ2UvcG5nO2Jhc2U2NCxpVkJPUncwS0dnb0FBQUFOU1VoRVVnQUFBQWdBQUFBQ0NBWUFBQUJsbEozdEFBQUFSVWxFUVZSNG5HTTgySjBkL3VDVGlIMzhSZFcvTWx5L2Z6MzV4eURPd01Dd0g0alZnRmlWa1lIaENSdEQ2SjY5WXN6L1Y3ejZ4eWpDd1BEL0wxQkNINGovQURFUEFERDZGVTRqWVFXbUFBQUFBRWxGVGtTdVFtQ0NcIn07IiwiZXhwb3J0IGRlZmF1bHQgIHtcInNyY1wiOlwiL19uZXh0L3N0YXRpYy9pbWFnZS9wdWJsaWMvaW1hZ2VzL2hlYWRlci9Tb2NpYWxNZWRpYS9jbG9zZVZlY3Rvci5kMWZhYWRhN2M1ZGNlN2M4ZjFmYmQxZmZkZTZjOTlkOS5wbmdcIixcImhlaWdodFwiOjEzLFwid2lkdGhcIjoxMyxcImJsdXJEYXRhVVJMXCI6XCJkYXRhOmltYWdlL3BuZztiYXNlNjQsaVZCT1J3MEtHZ29BQUFBTlNVaEVVZ0FBQUFnQUFBQUlDQVFBQUFCdUJuWUFBQUFBUVVsRVFWUjQybVdOd1EwQUlRekQwdjBIT1lrQnlrcXdoSS9raVZBK3JxczJZdEVVY3NxMHhPUm5FREZNTXo3d09WbVVjREpFaGwveG52VDF0TVcrYXZjQlpSRmZXWlhLb3QwQUFBQUFTVVZPUks1Q1lJST1cIn07IiwiZXhwb3J0IGRlZmF1bHQgIHtcInNyY1wiOlwiL19uZXh0L3N0YXRpYy9pbWFnZS9wdWJsaWMvaW1hZ2VzL2hlYWRlci9Tb2NpYWxNZWRpYS9lbWFpbC4yOTg2ZDBjNGJiNjVmZTNhMWY1OGI2YzliYmUxNTk3YS5zdmdcIixcImhlaWdodFwiOjIwLFwid2lkdGhcIjoyNX07IiwiZXhwb3J0IGRlZmF1bHQgIHtcInNyY1wiOlwiL19uZXh0L3N0YXRpYy9pbWFnZS9wdWJsaWMvaW1hZ2VzL2hlYWRlci9Tb2NpYWxNZWRpYS9mYWNlYm9vay44NWY1MjRlMzJhZDM3N2U3NDI0YTVkODcxMmE2NjY0YS5zdmdcIixcImhlaWdodFwiOjM0LFwid2lkdGhcIjoyOH07IiwiZXhwb3J0IGRlZmF1bHQgIHtcInNyY1wiOlwiL19uZXh0L3N0YXRpYy9pbWFnZS9wdWJsaWMvaW1hZ2VzL2hlYWRlci9Tb2NpYWxNZWRpYS9pbnN0YWdyYW0uZjVmZmQyMDA1NWFlYjhiZTJlMmE2YTY2ZTc1NzI3NGUuc3ZnXCIsXCJoZWlnaHRcIjozMCxcIndpZHRoXCI6MzF9OyIsImV4cG9ydCBkZWZhdWx0ICB7XCJzcmNcIjpcIi9fbmV4dC9zdGF0aWMvaW1hZ2UvcHVibGljL2ltYWdlcy9oZWFkZXIvU29jaWFsTWVkaWEvcGhvbmUuNTVlZTg4MTllMjU0MDkzYWEzM2ZkYjQ3ODJiMzVjZDQuc3ZnXCIsXCJoZWlnaHRcIjoyNSxcIndpZHRoXCI6MjR9OyIsImV4cG9ydCBkZWZhdWx0ICB7XCJzcmNcIjpcIi9fbmV4dC9zdGF0aWMvaW1hZ2UvcHVibGljL2ltYWdlcy9oZWFkZXIvU29jaWFsTWVkaWEvdGVsZWdyYW0uYWZmOWUzZDk1ZDc0ZmY2MTEyOTI3YWNmMTY0MGU2YTMuc3ZnXCIsXCJoZWlnaHRcIjozNyxcIndpZHRoXCI6Mjl9OyIsImV4cG9ydCBkZWZhdWx0ICB7XCJzcmNcIjpcIi9fbmV4dC9zdGF0aWMvaW1hZ2UvcHVibGljL2ltYWdlcy9oZWFkZXIvU29jaWFsTWVkaWEvdmliZXIuOTJkMTE4YzI2NzYwZjc5NmRjMzI3ODE0NzI1MWRmZmUuc3ZnXCIsXCJoZWlnaHRcIjozOSxcIndpZHRoXCI6MzB9OyIsImV4cG9ydCBkZWZhdWx0ICB7XCJzcmNcIjpcIi9fbmV4dC9zdGF0aWMvaW1hZ2UvcHVibGljL2ltYWdlcy9oZWFkZXIvU29jaWFsTWVkaWEvd2F0c3VwLmU1YzFkMDQ2OGVjYjRjODA3MzFhNjdlNDYxZTE5MjUzLnN2Z1wiLFwiaGVpZ2h0XCI6MzcsXCJ3aWR0aFwiOjI5fTsiLCJleHBvcnQgZGVmYXVsdCAge1wic3JjXCI6XCIvX25leHQvc3RhdGljL2ltYWdlL3B1YmxpYy9pbWFnZXMvaGVhZGVyL2Ryb3Bkb3duX2xpbmVzLjMwMjYwOTRiMTQ0OWUxNDIwODM5Yjg5Y2VhODU1ZTE5LnBuZ1wiLFwiaGVpZ2h0XCI6MTcsXCJ3aWR0aFwiOjI3LFwiYmx1ckRhdGFVUkxcIjpcImRhdGE6aW1hZ2UvcG5nO2Jhc2U2NCxpVkJPUncwS0dnb0FBQUFOU1VoRVVnQUFBQWdBQUFBRkNBUUFBQURTbUdYZUFBQUFPMGxFUVZSNDJsM0dzUW1BTUJBQXdDOXNkQ0JCNXhQVXdtQmlvOHNld3BmaG1ndVhwcWJiYXdtZFVEeGFxajVyR0UxU2JnaWIwNUYyeGZ3RHlVczBWL1YwYzZVQUFBQUFTVVZPUks1Q1lJST1cIn07IiwiZXhwb3J0IGRlZmF1bHQgIHtcInNyY1wiOlwiL19uZXh0L3N0YXRpYy9pbWFnZS9wdWJsaWMvaW1hZ2VzL2hlYWRlci9mbGFncy9hcm0uOTRmZGZhOWE2MjE0MzhjNTcxNTNhYzA3YjA3OWM0MTIuc3ZnXCIsXCJoZWlnaHRcIjoyMSxcIndpZHRoXCI6MjF9OyIsImV4cG9ydCBkZWZhdWx0ICB7XCJzcmNcIjpcIi9fbmV4dC9zdGF0aWMvaW1hZ2UvcHVibGljL2ltYWdlcy9oZWFkZXIvZmxhZ3MvZGV1LmRiOTE5MzZjMjA5ZDhlMGQ0MTgxMGVhYzMxNDI4YjhkLnN2Z1wiLFwiaGVpZ2h0XCI6MjEsXCJ3aWR0aFwiOjIxfTsiLCJleHBvcnQgZGVmYXVsdCAge1wic3JjXCI6XCIvX25leHQvc3RhdGljL2ltYWdlL3B1YmxpYy9pbWFnZXMvaGVhZGVyL2ZsYWdzL2VuLjFjODU2MzBkZjQxNDcxNzA4MWVhODY1N2VlY2E3ZTJjLnN2Z1wiLFwiaGVpZ2h0XCI6MjEsXCJ3aWR0aFwiOjIxfTsiLCJleHBvcnQgZGVmYXVsdCAge1wic3JjXCI6XCIvX25leHQvc3RhdGljL2ltYWdlL3B1YmxpYy9pbWFnZXMvaGVhZGVyL2ZsYWdzL2VzcC40Mzc4OGQ1NzUxNDcwNmRlOWVhNDJjNDI0Y2I4NzkyZi5zdmdcIixcImhlaWdodFwiOjIxLFwid2lkdGhcIjoyMX07IiwiZXhwb3J0IGRlZmF1bHQgIHtcInNyY1wiOlwiL19uZXh0L3N0YXRpYy9pbWFnZS9wdWJsaWMvaW1hZ2VzL2hlYWRlci9mbGFncy9mcmMuYzMyYjM5MTMxN2ZiMDM3MTgzNTVkZDhhNjg0ZjU1NDEuc3ZnXCIsXCJoZWlnaHRcIjoyMSxcIndpZHRoXCI6MjF9OyIsImV4cG9ydCBkZWZhdWx0ICB7XCJzcmNcIjpcIi9fbmV4dC9zdGF0aWMvaW1hZ2UvcHVibGljL2ltYWdlcy9oZWFkZXIvZmxhZ3MvcnVzLjZlYjRjYjE0YzY3MjcwOTRmZmJkYzcwNmY1MTM2MGEwLnBuZ1wiLFwiaGVpZ2h0XCI6MjIsXCJ3aWR0aFwiOjIxLFwiYmx1ckRhdGFVUkxcIjpcImRhdGE6aW1hZ2UvcG5nO2Jhc2U2NCxpVkJPUncwS0dnb0FBQUFOU1VoRVVnQUFBQWdBQUFBSUNBWUFBQURFRDc2TEFBQUF1VWxFUVZSNDJrM0pUd3FDVUJnRThMbE1aZWtxMXhYVW5TTENBbzlSZ2Z1d2pVRVVLRzQ4Z0pEMHh4dG9PNUhRaC9KZTN3Y3VHdmpCTUFOT1dWWkcwN1JSMjdZVkVkVDlvdmhxNENpbERKSVRqdXh3TXFMQjllN2h4WDhwNy9vUTU5dFRNdTY4MFJjQWNBU3drOEJCQVh0SnVCUGVuQnFZSG1zc1RoSno5NS9palQ2QnBXa0g5bml0TEhNanRtTkxNdTY4clV3N3hLZVBZVHBFOWg1QnBTTkkxdlU4NzhNQUo5Wm5XcUlQL0VUdkNWSlRqMkpqd2lkK3RDQ1NjQUpDTjlnQUFBQUFTVVZPUks1Q1lJST1cIn07IiwiZXhwb3J0IGRlZmF1bHQgIHtcInNyY1wiOlwiL19uZXh0L3N0YXRpYy9pbWFnZS9wdWJsaWMvaW1hZ2VzL2hlYWRlci9mb290YmFsbGVyLjc1MDVkYjZmZjIzMzQwODJlNjVmNTdiMTU1MDQ2OTFjLnN2Z1wiLFwiaGVpZ2h0XCI6NjAwLFwid2lkdGhcIjo2NjJ9OyIsImV4cG9ydCBkZWZhdWx0ICB7XCJzcmNcIjpcIi9fbmV4dC9zdGF0aWMvaW1hZ2UvcHVibGljL2ltYWdlcy9oZWFkZXIvbG9naW4uMmI5MGY0ZjIxYzgzMGRjMzg1MWNiM2ZjM2YxNjE4YjMucG5nXCIsXCJoZWlnaHRcIjoyMSxcIndpZHRoXCI6MTksXCJibHVyRGF0YVVSTFwiOlwiZGF0YTppbWFnZS9wbmc7YmFzZTY0LGlWQk9SdzBLR2dvQUFBQU5TVWhFVWdBQUFBY0FBQUFJQ0FRQUFBQ2ZEUzJOQUFBQVowbEVRVlI0MmpYTkt3b0NBUmhGNGVzREVUZmdEbXdHbXpZWFlMRXBHaFRHWkRVSkZwUFpCWmpOTHNKbGZReC9HRzQ2M0FNbmV1TG03dWZ2RTdXRmdhdllGV3l0akZ6RXVYRG9hK2tvVG9VYkIyTk45MDQwWmtyZVIxK3N2VDFOdlNJcVZiR0hlUXRFdWtSZHJMbmI4UUFBQUFCSlJVNUVya0pnZ2c9PVwifTsiLCJleHBvcnQgZGVmYXVsdCAge1wic3JjXCI6XCIvX25leHQvc3RhdGljL2ltYWdlL3B1YmxpYy9pbWFnZXMvaGVhZGVyL2xvZ2luL2ZhY2Vib29rLjUwMTkzMjIwYzcwNTE2N2MwZTg1MjQ5ODI5MDhhNGVlLnN2Z1wiLFwiaGVpZ2h0XCI6NzYsXCJ3aWR0aFwiOjc2fTsiLCJleHBvcnQgZGVmYXVsdCAge1wic3JjXCI6XCIvX25leHQvc3RhdGljL2ltYWdlL3B1YmxpYy9pbWFnZXMvaGVhZGVyL2xvZ2luL2dtYWlsLmI3OGIzMzVkN2I3MWVjNWIzYjkwMzMwNjU0MTJhMGY4LnN2Z1wiLFwiaGVpZ2h0XCI6NzYsXCJ3aWR0aFwiOjc2fTsiLCJleHBvcnQgZGVmYXVsdCAge1wic3JjXCI6XCIvX25leHQvc3RhdGljL2ltYWdlL3B1YmxpYy9pbWFnZXMvaGVhZGVyL2xvZ2luL3N1Y2Nlc3MuYjJmNjM5ZjY5NzE5MzFiOWQ0OTM5YzU5MTE5ZTc4NTkucG5nXCIsXCJoZWlnaHRcIjoxMzIsXCJ3aWR0aFwiOjE0MSxcImJsdXJEYXRhVVJMXCI6XCJkYXRhOmltYWdlL3BuZztiYXNlNjQsaVZCT1J3MEtHZ29BQUFBTlNVaEVVZ0FBQUFnQUFBQUhDQVlBQUFBMVdReGVBQUFBOGtsRVFWUjRuQUhuQUJqL0FSbStMZ0FKQVFZKzd2LzJqZ1VBQWkvci90VCtZZ3RxMVgwWWRlSGtJZHhZQVJhK0xVcnEvdVMxQmdFVUFCb0JEZi9nL2M0QnFSaXRBUGZqOVFCZzhGNVRBUUM5SHVGSENEVWUxZnZmKytUNnpnVnBFSEgvWFFCWC9XWGhjQVRWRnQ3Z0FRQzZBUCtpRDZiOUJBZ0VBMXJxVnYrNkdiMEExTnZVQVhJTGIvNGZCREVDQVFDL0d1QTM3eWdmaVJlQSsvSVY5QVFINXdRQVIreGsvQTRUQ3dVQS9RRGdBVEsvUDBmTy84RzJXdkpoQW5JVWF3Q2s2S2dBa0JHTUFCc0JMLzd0Ly9oSkFTbkNOd0FFL3dRNjAvdk5qVExuTnpEVEUrY0FDUW9EMFBmOC9YTUNBUUhHTkRCbE9QZytXQ1VBQUFBQVNVVk9SSzVDWUlJPVwifTsiLCJleHBvcnQgZGVmYXVsdCAge1wic3JjXCI6XCIvX25leHQvc3RhdGljL2ltYWdlL3B1YmxpYy9pbWFnZXMvaGVhZGVyL2xvZ2luL3R3aXR0ZXIuMzcyZjZmNjhhYzQ2YTBiNWEyY2JmMTA2ZjYwOGU0YzIuc3ZnXCIsXCJoZWlnaHRcIjo3NixcIndpZHRoXCI6NzZ9OyIsImV4cG9ydCBkZWZhdWx0ICB7XCJzcmNcIjpcIi9fbmV4dC9zdGF0aWMvaW1hZ2UvcHVibGljL2ltYWdlcy9oZWFkZXIvbG9naW4vdmsuZjlhMzIxZDNkYjVkZTNhNzA2NDgzZDczMDk1ODIzMzAuc3ZnXCIsXCJoZWlnaHRcIjo3NixcIndpZHRoXCI6NzZ9OyIsImV4cG9ydCBkZWZhdWx0ICB7XCJzcmNcIjpcIi9fbmV4dC9zdGF0aWMvaW1hZ2UvcHVibGljL2ltYWdlcy9oZWFkZXIvbG9nby42Y2RmOTFmYWYzY2ExMmEwNzZjNWY5NjI4MTQ1ZmMwNC5zdmdcIixcImhlaWdodFwiOjIyMSxcIndpZHRoXCI6MjIxfTsiLCJleHBvcnQgZGVmYXVsdCAge1wic3JjXCI6XCIvX25leHQvc3RhdGljL2ltYWdlL3B1YmxpYy9pbWFnZXMvaGVhZGVyL3JlZ2lzdGVyLjQ3NDAzYjk5OGNlMmM1MzYxN2JmYjQ2ZGJmOTE0YmRhLnBuZ1wiLFwiaGVpZ2h0XCI6MjMsXCJ3aWR0aFwiOjIzLFwiYmx1ckRhdGFVUkxcIjpcImRhdGE6aW1hZ2UvcG5nO2Jhc2U2NCxpVkJPUncwS0dnb0FBQUFOU1VoRVVnQUFBQWdBQUFBSUNBUUFBQUJ1Qm5ZQUFBQUFiVWxFUVZSNDJnM0VRUXZCQUJpQTRVOGlKMmVYSGJTVGJJb2FLUWRwclN3bnM2dzRPUGdCRHU3KytaUDE5TDRocEY0cUU2RVhPaitGdDYrbE1BaG5HdzgzbVZJWWh0cEJheWQxbElodzZUVVdmYm5hTnB5TWpaUXlIN2syUE8wVkdtdVZsWHVZU3N6NlgxVTY4ejlodlV6UE5DNzdSZ0FBQUFCSlJVNUVya0pnZ2c9PVwifTsiLCJleHBvcnQgZGVmYXVsdCAge1wic3JjXCI6XCIvX25leHQvc3RhdGljL2ltYWdlL3B1YmxpYy9pbWFnZXMvcGVyc29uYWwvYmFsbC43YTQyMTc4NjBlM2IwYmU2NDRhMmMwNTM0ZGY2ZTY0ZC5wbmdcIixcImhlaWdodFwiOjg4MixcIndpZHRoXCI6OTUwLFwiYmx1ckRhdGFVUkxcIjpcImRhdGE6aW1hZ2UvcG5nO2Jhc2U2NCxpVkJPUncwS0dnb0FBQUFOU1VoRVVnQUFBQWdBQUFBSENBWUFBQUExV1F4ZUFBQUFrRWxFUVZSNDJtUEFCbGF2V01ZRXBGaVNFcE9ZTVNUZnZYN0s5dm56SjY2Yk4yOXlQWC8rZ2d0RnNqZzNqL1hENjhmYy8vLy81NFJoRkFXelowemwrUFQySmRmeFk0YzRVMU9UdUJZc21JK3E0T0MrWFJ3dm5qN2tXcjF5T1VpQ3E3eXNGRlhCNUluOUxGczNyZU02ZStvNDU5N2R1empQbnozSGhlNUd4Z0IvUC9hSi9iMWNhMWV2NUZ5MmRCa25BRmNuUDNldXN2dGNBQUFBQUVsRlRrU3VRbUNDXCJ9OyIsIi8vIEV4cG9ydHNcbm1vZHVsZS5leHBvcnRzID0ge1xuXHRcImNvbnRhaW5lclwiOiBcIkJhbGxfY29udGFpbmVyX18yV2wxZFwiLFxuXHRcImJhbGxcIjogXCJCYWxsX2JhbGxfXzFTS2xNXCIsXG5cdFwidGV4dF93aXRoX2JhbGxcIjogXCJCYWxsX3RleHRfd2l0aF9iYWxsX183bHBIVVwiLFxuXHRcInRvcFwiOiBcIkJhbGxfdG9wX19RTjU2R1wiLFxuXHRcImJvdHRvbVwiOiBcIkJhbGxfYm90dG9tX18yazRxNFwiXG59O1xuIiwiLy8gRXhwb3J0c1xubW9kdWxlLmV4cG9ydHMgPSB7XG5cdFwiY29udGFpbmVyXCI6IFwiRm9vdGVyX2NvbnRhaW5lcl9fbDJENGdcIixcblx0XCJjb250ZW50XCI6IFwiRm9vdGVyX2NvbnRlbnRfXzFicHU2XCIsXG5cdFwiYmFsbFwiOiBcIkZvb3Rlcl9iYWxsX18yU2wzblwiXG59O1xuIiwiLy8gRXhwb3J0c1xubW9kdWxlLmV4cG9ydHMgPSB7XG5cdFwiY29udGFpbmVyXCI6IFwiTGlzdF9jb250YWluZXJfXzFUcG5WXCIsXG5cdFwiYm9yZGVyc1wiOiBcIkxpc3RfYm9yZGVyc19fMVJtemJcIlxufTtcbiIsIi8vIEV4cG9ydHNcbm1vZHVsZS5leHBvcnRzID0ge1xuXHRcImNvbnRhaW5lclwiOiBcIk5hdmlnYXRpb25fY29udGFpbmVyX18xczNuR1wiLFxuXHRcImNvbnRlbnRcIjogXCJOYXZpZ2F0aW9uX2NvbnRlbnRfXzNOTTRBXCJcbn07XG4iLCIvLyBFeHBvcnRzXG5tb2R1bGUuZXhwb3J0cyA9IHtcblx0XCJjb250YWluZXJcIjogXCJQU19jb250YWluZXJfX3M0bDEzXCIsXG5cdFwiaWNvbnNcIjogXCJQU19pY29uc19fX3hIYmFcIlxufTtcbiIsIi8vIEV4cG9ydHNcbm1vZHVsZS5leHBvcnRzID0ge1xuXHRcImNvbnRhaW5lclwiOiBcIlNNX2NvbnRhaW5lcl9fMkx2RHNcIlxufTtcbiIsIi8vIEV4cG9ydHNcbm1vZHVsZS5leHBvcnRzID0ge1xuXHRcImNvbnRhaW5lclwiOiBcIlNvY2lhbE1lZGlhX2NvbnRhaW5lcl9fMVRpZGhcIixcblx0XCJjb250ZW50XCI6IFwiU29jaWFsTWVkaWFfY29udGVudF9fMUs2dGxcIixcblx0XCJjb250cm9sZXJcIjogXCJTb2NpYWxNZWRpYV9jb250cm9sZXJfX2toU1VRXCIsXG5cdFwic29jaWFsX21lZGlhc1wiOiBcIlNvY2lhbE1lZGlhX3NvY2lhbF9tZWRpYXNfX1VFdUNzXCIsXG5cdFwicGF5bWVudF9zeXN0ZW1zXCI6IFwiU29jaWFsTWVkaWFfcGF5bWVudF9zeXN0ZW1zX18xV1NGNVwiXG59O1xuIiwiLy8gRXhwb3J0c1xubW9kdWxlLmV4cG9ydHMgPSB7XG5cdFwiY29udGFpbmVyXCI6IFwiSWNvbl9jb250YWluZXJfXzJYTGN0XCIsXG5cdFwibGFzdF9lbGVtZW50XCI6IFwiSWNvbl9sYXN0X2VsZW1lbnRfXzFMaDhTXCJcbn07XG4iLCIvLyBFeHBvcnRzXG5tb2R1bGUuZXhwb3J0cyA9IHtcblx0XCJiYXJfY29udGFpbmVyXCI6IFwiQmFyX2Jhcl9jb250YWluZXJfXzM3bkQ5XCJcbn07XG4iLCIvLyBFeHBvcnRzXG5tb2R1bGUuZXhwb3J0cyA9IHtcblx0XCJiYXJfaXRlbV9jb250YWluZXJcIjogXCJCYXJJdGVtc19iYXJfaXRlbV9jb250YWluZXJfXzFibk9lXCIsXG5cdFwiYXV0aF9jb250YWluZXJcIjogXCJCYXJJdGVtc19hdXRoX2NvbnRhaW5lcl9fMl81UzVcIixcblx0XCJhdXRoX2J1dHRvbnNcIjogXCJCYXJJdGVtc19hdXRoX2J1dHRvbnNfXzJTaHBVXCIsXG5cdFwic2lnbl91cF9idXR0b25cIjogXCJCYXJJdGVtc19zaWduX3VwX2J1dHRvbl9fM18yTTVcIixcblx0XCJzaWduX2luX2J1dHRvblwiOiBcIkJhckl0ZW1zX3NpZ25faW5fYnV0dG9uX18zWC02X1wiLFxuXHRcImxhbmdfYnV0dG9uXCI6IFwiQmFySXRlbXNfbGFuZ19idXR0b25fXzhqbV9nXCIsXG5cdFwibGFuZ19idXR0b25fY29udGVudFwiOiBcIkJhckl0ZW1zX2xhbmdfYnV0dG9uX2NvbnRlbnRfXzN1eTZuXCIsXG5cdFwiZm9yX21vYmlsZVwiOiBcIkJhckl0ZW1zX2Zvcl9tb2JpbGVfXzF2T0NpXCJcbn07XG4iLCIvLyBFeHBvcnRzXG5tb2R1bGUuZXhwb3J0cyA9IHtcblx0XCJjb250YWluZXJcIjogXCJMYW5ndWFnZURyb3BfY29udGFpbmVyX18yNllVTVwiLFxuXHRcInRyYW5zaXRpb25cIjogXCJMYW5ndWFnZURyb3BfdHJhbnNpdGlvbl9fMzBjUC1cIixcblx0XCJjb250ZW50XCI6IFwiTGFuZ3VhZ2VEcm9wX2NvbnRlbnRfXzJWNm5GXCIsXG5cdFwicm93XCI6IFwiTGFuZ3VhZ2VEcm9wX3Jvd19fMTZGNl9cIlxufTtcbiIsIi8vIEV4cG9ydHNcbm1vZHVsZS5leHBvcnRzID0ge1xuXHRcImNvbnRhaW5lclwiOiBcIkxvZ2dlZF9jb250YWluZXJfX3hsZVBNXCIsXG5cdFwiY29udGVudFwiOiBcIkxvZ2dlZF9jb250ZW50X18zY0UzT1wiXG59O1xuIiwiLy8gRXhwb3J0c1xubW9kdWxlLmV4cG9ydHMgPSB7XG5cdFwiY29udGFpbmVyXCI6IFwiTG9nZ2VkRHJvcF9jb250YWluZXJfXzJRNkxQXCIsXG5cdFwidHJhbnNpdGlvblwiOiBcIkxvZ2dlZERyb3BfdHJhbnNpdGlvbl9fUWc0OGlcIixcblx0XCJjb250ZW50XCI6IFwiTG9nZ2VkRHJvcF9jb250ZW50X19FRHRicVwiLFxuXHRcInVzZXJfcGhvdG9fbmFtZVwiOiBcIkxvZ2dlZERyb3BfdXNlcl9waG90b19uYW1lX18xOWdpYVwiLFxuXHRcInVzZXJfdGVsXCI6IFwiTG9nZ2VkRHJvcF91c2VyX3RlbF9fMTNDQUZcIixcblx0XCJsb2dPdXRcIjogXCJMb2dnZWREcm9wX2xvZ091dF9fM2VELXlcIlxufTtcbiIsIi8vIEV4cG9ydHNcbm1vZHVsZS5leHBvcnRzID0ge1xuXHRcImNvbnRhaW5lclwiOiBcIkxvZ2dlZFdhbGxwZXJfY29udGFpbmVyX18yb1JNVlwiLFxuXHRcImNvbnRlbnRcIjogXCJMb2dnZWRXYWxscGVyX2NvbnRlbnRfXzJNMXFUXCIsXG5cdFwidXNlcl9waG90b1wiOiBcIkxvZ2dlZFdhbGxwZXJfdXNlcl9waG90b19fMW1zenBcIixcblx0XCJ1c2VyX2Z1bGxOYW1lXCI6IFwiTG9nZ2VkV2FsbHBlcl91c2VyX2Z1bGxOYW1lX18yV3ZwRlwiLFxuXHRcImZ1bGxuYW1lXCI6IFwiTG9nZ2VkV2FsbHBlcl9mdWxsbmFtZV9fMUdqMjVcIlxufTtcbiIsIi8vIEV4cG9ydHNcbm1vZHVsZS5leHBvcnRzID0ge1xuXHRcImRyb3Bkb3duXCI6IFwiRHJvcGRvd25fZHJvcGRvd25fXzNBQmNxXCIsXG5cdFwidHJhbnNpdGlvblwiOiBcIkRyb3Bkb3duX3RyYW5zaXRpb25fXzFmemJPXCIsXG5cdFwiZHJvcGRvd25fbWVudVwiOiBcIkRyb3Bkb3duX2Ryb3Bkb3duX21lbnVfXzFVbVk3XCIsXG5cdFwiZHJvcGRvd25fbGlzdFwiOiBcIkRyb3Bkb3duX2Ryb3Bkb3duX2xpc3RfXzJiRzJZXCIsXG5cdFwiZHJvcGRvd25fbGlzdF9pdGVtc1wiOiBcIkRyb3Bkb3duX2Ryb3Bkb3duX2xpc3RfaXRlbXNfXzJ2X3ZXXCIsXG5cdFwiZHJvcGRvd25fY2hlY2tcIjogXCJEcm9wZG93bl9kcm9wZG93bl9jaGVja19fMzB3T25cIlxufTtcbiIsIi8vIEV4cG9ydHNcbm1vZHVsZS5leHBvcnRzID0ge1xuXHRcIm1fY29udGFpbmVyXCI6IFwiTG9naW5fbV9jb250YWluZXJfXzJOS1BWXCIsXG5cdFwibV9jb250ZW50XCI6IFwiTG9naW5fbV9jb250ZW50X18xazhjNlwiLFxuXHRcImxvZ2luX2NvbnRhaW5lclwiOiBcIkxvZ2luX2xvZ2luX2NvbnRhaW5lcl9fal9MLVRcIlxufTtcbiIsIi8vIEV4cG9ydHNcbm1vZHVsZS5leHBvcnRzID0ge1xuXHRcImNvbnRhaW5lclwiOiBcIkxvZ2luRm9ybV9jb250YWluZXJfX0dhaUZ2XCIsXG5cdFwidGl0bGVcIjogXCJMb2dpbkZvcm1fdGl0bGVfXzNmbWpUXCIsXG5cdFwiaW5wdXRzXCI6IFwiTG9naW5Gb3JtX2lucHV0c19fM0MxNHhcIixcblx0XCJyZXNldF9wYXNzd29yZFwiOiBcIkxvZ2luRm9ybV9yZXNldF9wYXNzd29yZF9fRHAyX0ZcIixcblx0XCJzdWJtaXRcIjogXCJMb2dpbkZvcm1fc3VibWl0X18zZkg4SVwiLFxuXHRcInRvX3JlZ2lzdGVyX2NvbnRhaW5lclwiOiBcIkxvZ2luRm9ybV90b19yZWdpc3Rlcl9jb250YWluZXJfXzN6WnFwXCIsXG5cdFwidG9fcmVnaXN0ZXJfY29udGVudFwiOiBcIkxvZ2luRm9ybV90b19yZWdpc3Rlcl9jb250ZW50X18xQ0Z4YVwiLFxuXHRcInRvX3JlZ2lzdGVyX3RleHRcIjogXCJMb2dpbkZvcm1fdG9fcmVnaXN0ZXJfdGV4dF9fMXAwOTdcIlxufTtcbiIsIi8vIEV4cG9ydHNcbm1vZHVsZS5leHBvcnRzID0ge1xuXHRcIm1fY29udGFpbmVyXCI6IFwiRm9yZ290UGFzc3dvcmRfbV9jb250YWluZXJfXzJCRFNlXCIsXG5cdFwibV9jb250ZW50XCI6IFwiRm9yZ290UGFzc3dvcmRfbV9jb250ZW50X18ya0gtNFwiLFxuXHRcImNvbnRhaW5lclwiOiBcIkZvcmdvdFBhc3N3b3JkX2NvbnRhaW5lcl9fMmpOdEdcIixcblx0XCJ0aXRsZVwiOiBcIkZvcmdvdFBhc3N3b3JkX3RpdGxlX18xSWg4V1wiLFxuXHRcImlucHV0c1wiOiBcIkZvcmdvdFBhc3N3b3JkX2lucHV0c19fMTlsVnRcIixcblx0XCJzdWJtaXRcIjogXCJGb3Jnb3RQYXNzd29yZF9zdWJtaXRfX3F6cHlyXCJcbn07XG4iLCIvLyBFeHBvcnRzXG5tb2R1bGUuZXhwb3J0cyA9IHtcblx0XCJtX2NvbnRhaW5lclwiOiBcIkdldEVtYWlsQ29kZV9tX2NvbnRhaW5lcl9fX3FGRi1cIixcblx0XCJtX2NvbnRlbnRcIjogXCJHZXRFbWFpbENvZGVfbV9jb250ZW50X19yZEFkOVwiLFxuXHRcImNvbnRhaW5lclwiOiBcIkdldEVtYWlsQ29kZV9jb250YWluZXJfXzN0c0hkXCIsXG5cdFwidGl0bGVcIjogXCJHZXRFbWFpbENvZGVfdGl0bGVfXzJaV0ZfXCIsXG5cdFwiZGVzY3JpcHRpb25cIjogXCJHZXRFbWFpbENvZGVfZGVzY3JpcHRpb25fXzN5ZThSXCIsXG5cdFwiaW5wdXRzXCI6IFwiR2V0RW1haWxDb2RlX2lucHV0c19fMnMzNjlcIixcblx0XCJlcnJvcl9pbnB1dFwiOiBcIkdldEVtYWlsQ29kZV9lcnJvcl9pbnB1dF9fUnRfMWRcIixcblx0XCJzdWNjZXNzX2lucHV0XCI6IFwiR2V0RW1haWxDb2RlX3N1Y2Nlc3NfaW5wdXRfXzJwcFRxXCIsXG5cdFwic3VibWl0XCI6IFwiR2V0RW1haWxDb2RlX3N1Ym1pdF9fMkdSUUlcIlxufTtcbiIsIi8vIEV4cG9ydHNcbm1vZHVsZS5leHBvcnRzID0ge1xuXHRcIm1fY29udGFpbmVyXCI6IFwiTmV3UGFzc3dvcmRfbV9jb250YWluZXJfXzFJV0hUXCIsXG5cdFwibV9jb250ZW50XCI6IFwiTmV3UGFzc3dvcmRfbV9jb250ZW50X18yTUJqeVwiLFxuXHRcImNvbnRhaW5lclwiOiBcIk5ld1Bhc3N3b3JkX2NvbnRhaW5lcl9fM3N5UWpcIixcblx0XCJ0aXRsZVwiOiBcIk5ld1Bhc3N3b3JkX3RpdGxlX18xcVZablwiLFxuXHRcImlucHV0c1wiOiBcIk5ld1Bhc3N3b3JkX2lucHV0c19fM1Z6MGtcIixcblx0XCJzdWJtaXRcIjogXCJOZXdQYXNzd29yZF9zdWJtaXRfXzNrWDBPXCJcbn07XG4iLCIvLyBFeHBvcnRzXG5tb2R1bGUuZXhwb3J0cyA9IHtcblx0XCJtX2NvbnRhaW5lclwiOiBcIlN1Y2Nlc3NfbV9jb250YWluZXJfXzNSTFNsXCIsXG5cdFwibV9jb250ZW50XCI6IFwiU3VjY2Vzc19tX2NvbnRlbnRfX3puYWtrXCIsXG5cdFwiY29udGFpbmVyXCI6IFwiU3VjY2Vzc19jb250YWluZXJfX2tncHBrXCIsXG5cdFwidGl0bGVcIjogXCJTdWNjZXNzX3RpdGxlX18zUEdWUFwiLFxuXHRcImljb25fY29udGFpbmVyXCI6IFwiU3VjY2Vzc19pY29uX2NvbnRhaW5lcl9fM3dQQlZcIlxufTtcbiIsIi8vIEV4cG9ydHNcbm1vZHVsZS5leHBvcnRzID0ge1xuXHRcImNvbnRlaW5lclwiOiBcIlNvY2lhbE1lZGlhSWNvbnNfY29udGVpbmVyX18yMnlMX1wiLFxuXHRcImNvbnRlbnRcIjogXCJTb2NpYWxNZWRpYUljb25zX2NvbnRlbnRfX1BfLTZHXCIsXG5cdFwiaWNvbkNvbnRlbnRcIjogXCJTb2NpYWxNZWRpYUljb25zX2ljb25Db250ZW50X18yZjBLTFwiLFxuXHRcImljb25Cb2R5XCI6IFwiU29jaWFsTWVkaWFJY29uc19pY29uQm9keV9fTFdsTERcIixcblx0XCJpY29uXCI6IFwiU29jaWFsTWVkaWFJY29uc19pY29uX18xTFVuaVwiXG59O1xuIiwiLy8gRXhwb3J0c1xubW9kdWxlLmV4cG9ydHMgPSB7XG5cdFwibG9nb19jb25hdGluZXJcIjogXCJMb2dvX2xvZ29fY29uYXRpbmVyX18xYnVNdVwiXG59O1xuIiwiLy8gRXhwb3J0c1xubW9kdWxlLmV4cG9ydHMgPSB7XG5cdFwiaGVhZGVyX2NvbnRhaW5lcl9iaWdcIjogXCJIZWFkZXJfaGVhZGVyX2NvbnRhaW5lcl9iaWdfXzFCaHlWXCIsXG5cdFwidHJhbnNpdGlvblwiOiBcIkhlYWRlcl90cmFuc2l0aW9uX18yaFJZb1wiLFxuXHRcImJhclwiOiBcIkhlYWRlcl9iYXJfX0NfZ1gzXCIsXG5cdFwiYmFyX2NvbnRyb2xlclwiOiBcIkhlYWRlcl9iYXJfY29udHJvbGVyX18zUmdfaVwiLFxuXHRcImJhcl9jb250ZWluZXJcIjogXCJIZWFkZXJfYmFyX2NvbnRlaW5lcl9famc5MDBcIixcblx0XCJiYXJfY29udGVudFwiOiBcIkhlYWRlcl9iYXJfY29udGVudF9fMU4weUNcIixcblx0XCJiYXJfaXRlbXNfY29udFwiOiBcIkhlYWRlcl9iYXJfaXRlbXNfY29udF9fMVNjd3pcIixcblx0XCJiYXJfaXRlbXNcIjogXCJIZWFkZXJfYmFyX2l0ZW1zX19HdnNWd1wiLFxuXHRcImZvb3RiYWxsZXJcIjogXCJIZWFkZXJfZm9vdGJhbGxlcl9fM1NJTjZcIixcblx0XCJoZWFkZXJfY29udGFpbmVyX3NtYWxsXCI6IFwiSGVhZGVyX2hlYWRlcl9jb250YWluZXJfc21hbGxfXzM3OVZrXCJcbn07XG4iLCIvLyBFeHBvcnRzXG5tb2R1bGUuZXhwb3J0cyA9IHtcblx0XCJjb250YWluZXJcIjogXCJCdXR0b25fY29udGFpbmVyX18xMXpzWFwiLFxuXHRcImNvbnRlbnRcIjogXCJCdXR0b25fY29udGVudF9fdmlDU1dcIixcblx0XCJhY3RpdmVcIjogXCJCdXR0b25fYWN0aXZlX18ycUdNV1wiXG59O1xuIiwiLy8gRXhwb3J0c1xubW9kdWxlLmV4cG9ydHMgPSB7XG5cdFwiY29udGFpbmVyXCI6IFwiTmF2QmFyX2NvbnRhaW5lcl9fMXFKN1lcIixcblx0XCJjb250ZW50XCI6IFwiTmF2QmFyX2NvbnRlbnRfXzFHUUpkXCIsXG5cdFwidG9wX29uX3RhYmxldFwiOiBcIk5hdkJhcl90b3Bfb25fdGFibGV0X18zRUgzOVwiLFxuXHRcImJvdHRvbV9vbl90YWJsZXRcIjogXCJOYXZCYXJfYm90dG9tX29uX3RhYmxldF9fZXl6OUlcIixcblx0XCJ0YWJsZXRcIjogXCJOYXZCYXJfdGFibGV0X18zTFBNbVwiXG59O1xuIiwiLy8gRXhwb3J0c1xubW9kdWxlLmV4cG9ydHMgPSB7XG5cdFwiY29udGFpbmVyXCI6IFwiSWNvbl9jb250YWluZXJfXzM0TmY5XCJcbn07XG4iLCIvLyBFeHBvcnRzXG5tb2R1bGUuZXhwb3J0cyA9IHtcblx0XCJjb250YWluZXJcIjogXCJTb2NpYWxNZWRpYU1vZGFsX2NvbnRhaW5lcl9fM2ZzWGtcIixcblx0XCJjb250ZW50XCI6IFwiU29jaWFsTWVkaWFNb2RhbF9jb250ZW50X18xN0ZLRVwiXG59O1xuIiwiLy8gRXhwb3J0c1xubW9kdWxlLmV4cG9ydHMgPSB7XG5cdFwiY29udGFpbmVyXCI6IFwiU29jaWFsTWVkaWFfY29udGFpbmVyX18xLXlZb1wiXG59O1xuIiwiLy8gRXhwb3J0c1xubW9kdWxlLmV4cG9ydHMgPSB7XG5cdFwiY29udGFpbmVyXCI6IFwiQ29udGFjdHNfY29udGFpbmVyX18yaXQwVlwiLFxuXHRcImNvbnRlbnRcIjogXCJDb250YWN0c19jb250ZW50X18yZmRya1wiLFxuXHRcIm1vZGFsX2NvbnRlbnRcIjogXCJDb250YWN0c19tb2RhbF9jb250ZW50X18yVmVfdlwiLFxuXHRcImNvbnRlbnRfY29udGFpbmVyXCI6IFwiQ29udGFjdHNfY29udGVudF9jb250YWluZXJfXzIwY29BXCIsXG5cdFwidG9wXCI6IFwiQ29udGFjdHNfdG9wX18yZ1R6U1wiLFxuXHRcInJvd3NcIjogXCJDb250YWN0c19yb3dzX18zWmhFVFwiLFxuXHRcInJvd1wiOiBcIkNvbnRhY3RzX3Jvd19fQWlaS2pcIixcblx0XCJpbWdcIjogXCJDb250YWN0c19pbWdfX2R2WC1hXCIsXG5cdFwidGV4dFwiOiBcIkNvbnRhY3RzX3RleHRfXzJEOXFjXCIsXG5cdFwib3BlblwiOiBcIkNvbnRhY3RzX29wZW5fXzNDSEpfXCIsXG5cdFwicmlnaHRMZWZ0XCI6IFwiQ29udGFjdHNfcmlnaHRMZWZ0X18ycmxiOFwiLFxuXHRcImNsb3NlXCI6IFwiQ29udGFjdHNfY2xvc2VfX1ZpN2c3XCJcbn07XG4iLCIvLyBFeHBvcnRzXG5tb2R1bGUuZXhwb3J0cyA9IHtcblx0XCJjb250YWluZXJcIjogXCJJbnB1dENvbnRhaW5lcl9jb250YWluZXJfXzFLenZTXCIsXG5cdFwibGFiZWxfY29udGVudFwiOiBcIklucHV0Q29udGFpbmVyX2xhYmVsX2NvbnRlbnRfXzJfeUFRXCIsXG5cdFwiaW5wdXRfY29udGFpbmVyXCI6IFwiSW5wdXRDb250YWluZXJfaW5wdXRfY29udGFpbmVyX18xYlRSSlwiLFxuXHRcImlucHV0X3N1Y2Nlc3NfY29udGVudFwiOiBcIklucHV0Q29udGFpbmVyX2lucHV0X3N1Y2Nlc3NfY29udGVudF9fMXlPWkRcIixcblx0XCJpbnB1dF9lcnJvcl9jb250ZW50XCI6IFwiSW5wdXRDb250YWluZXJfaW5wdXRfZXJyb3JfY29udGVudF9fMy1XMldcIlxufTtcbiIsIi8vIEV4cG9ydHNcbm1vZHVsZS5leHBvcnRzID0ge1xuXHRcIm1vZGFsQ29udGVpbmVyXCI6IFwiTW9kYWxfbW9kYWxDb250ZWluZXJfXzNnOElmXCIsXG5cdFwidHJhbnNpdGlvblwiOiBcIk1vZGFsX3RyYW5zaXRpb25fXzFrZnY5XCIsXG5cdFwibW9kYWxDb250ZW50XCI6IFwiTW9kYWxfbW9kYWxDb250ZW50X18xLU80N1wiXG59O1xuIiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiQGhvb2tmb3JtL3Jlc29sdmVycy95dXBcIik7OyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIkByZWR1eGpzL3Rvb2xraXRcIik7OyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcImF4aW9zXCIpOzsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJuZXh0LXRyYW5zbGF0ZS9hcHBXaXRoSTE4blwiKTs7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwibmV4dC10cmFuc2xhdGUvdXNlVHJhbnNsYXRpb25cIik7OyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIm5leHQvZGlzdC9uZXh0LXNlcnZlci9saWIvcm91dGVyLWNvbnRleHQuanNcIik7OyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIm5leHQvZGlzdC9uZXh0LXNlcnZlci9saWIvcm91dGVyL3V0aWxzL2dldC1hc3NldC1wYXRoLWZyb20tcm91dGUuanNcIik7OyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIm5leHQvaGVhZFwiKTs7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVhY3RcIik7OyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlYWN0LWJlYXV0aWZ1bC1kbmRcIik7OyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlYWN0LWRvbVwiKTs7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVhY3QtZmFjZWJvb2stbG9naW5cIik7OyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlYWN0LWdvb2dsZS1sb2dpblwiKTs7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVhY3QtaG9vay1mb3JtXCIpOzsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdC1pc1wiKTs7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVhY3QtcmVkdXhcIik7OyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlYWN0LXRvYXN0aWZ5XCIpOzsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdC10d2l0dGVyLWxvZ2luXCIpOzsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdC9qc3gtZGV2LXJ1bnRpbWVcIik7OyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlZHV4LXBlcnNpc3RcIik7OyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlZHV4LXBlcnNpc3QvaW50ZWdyYXRpb24vcmVhY3RcIik7OyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlZHV4LXBlcnNpc3QvbGliL3N0b3JhZ2VcIik7OyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInl1cFwiKTs7IiwiLyogKGlnbm9yZWQpICovIl0sInNvdXJjZVJvb3QiOiIifQ==