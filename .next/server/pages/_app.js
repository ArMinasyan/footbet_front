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
module.exports = JSON.parse('{"locales":["rs","am","en","deu","fr","esp"],"defaultLocale":"rs","pages":{"*":["common"],"/":["home"],"/testimonials":["testimonials","home"],"/matches":["home"],"/games":["games"],"/prediction":["prediction"],"/statistics":["statistics"],"/aboutUs":["aboutUs"],"/personal":["personal"]}}');

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
/* harmony import */ var _public_images_footer_leftBall_png__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../../../public/images/footer/leftBall.png */ "./public/images/footer/leftBall.png");
/* harmony import */ var _Ball_module_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Ball.module.scss */ "./components/Footer/Ball/Ball.module.scss");
/* harmony import */ var _Ball_module_scss__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_Ball_module_scss__WEBPACK_IMPORTED_MODULE_2__);

var _jsxFileName = "C:\\Users\\Admin\\Desktop\\projects\\foot-bet\\components\\Footer\\Ball\\Ball.jsx";


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
/* harmony import */ var _public_images_personal_ball_png__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../../../public/images/personal/ball.png */ "./public/images/personal/ball.png");

var _jsxFileName = "C:\\Users\\Admin\\Desktop\\projects\\foot-bet\\components\\Footer\\Footer.jsx";
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

var _jsxFileName = "C:\\Users\\Admin\\Desktop\\projects\\foot-bet\\components\\Footer\\Navigation\\List\\List.jsx";



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

var _jsxFileName = "C:\\Users\\Admin\\Desktop\\projects\\foot-bet\\components\\Footer\\Navigation\\Navigation.jsx";
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
  link: '/terms-of-use',
  name: 'terms-of-use'
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
/* harmony import */ var _PS_module_scss__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./PS.module.scss */ "./components/Footer/SocialMedia/PSIcons/PS.module.scss");
/* harmony import */ var _PS_module_scss__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_PS_module_scss__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _public_images_footer_visa_png__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../../../public/images/footer/visa.png */ "./public/images/footer/visa.png");
/* harmony import */ var _public_images_footer_masterCard_png__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../../public/images/footer/masterCard.png */ "./public/images/footer/masterCard.png");
/* harmony import */ var _common_Icon_Icon__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../common/Icon/Icon */ "./components/Footer/SocialMedia/common/Icon/Icon.jsx");


var _jsxFileName = "C:\\Users\\Admin\\Desktop\\projects\\foot-bet\\components\\Footer\\SocialMedia\\PSIcons\\PS.jsx";
// styles
 // icons


 // components


function PS() {
  const // config
  icons = [{
    key: Math.random(),
    src: _public_images_footer_visa_png__WEBPACK_IMPORTED_MODULE_1__.default.src
  }, {
    key: Math.random(),
    src: _public_images_footer_masterCard_png__WEBPACK_IMPORTED_MODULE_2__.default.src,
    lastElement: true
  }];
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
    children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
      className: (_PS_module_scss__WEBPACK_IMPORTED_MODULE_4___default().container),
      children: icons.map(el => /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_common_Icon_Icon__WEBPACK_IMPORTED_MODULE_3__.Icon, {
        src: el.src,
        classes: (_PS_module_scss__WEBPACK_IMPORTED_MODULE_4___default().icons),
        lastElement: el.lastElement && el.lastElement
      }, el.key, false, {
        fileName: _jsxFileName,
        lineNumber: 27,
        columnNumber: 11
      }, this))
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 25,
      columnNumber: 7
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
/* harmony import */ var _public_images_header_SocialMedia_phone_svg__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../../../public/images/header/SocialMedia/phone.svg */ "./public/images/header/SocialMedia/phone.svg");
/* harmony import */ var _public_images_header_SocialMedia_facebook_svg__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../../public/images/header/SocialMedia/facebook.svg */ "./public/images/header/SocialMedia/facebook.svg");
/* harmony import */ var _public_images_header_SocialMedia_telegram_svg__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../../../public/images/header/SocialMedia/telegram.svg */ "./public/images/header/SocialMedia/telegram.svg");
/* harmony import */ var _public_images_header_SocialMedia_watsup_svg__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../../../public/images/header/SocialMedia/watsup.svg */ "./public/images/header/SocialMedia/watsup.svg");
/* harmony import */ var _public_images_header_SocialMedia_instagram_svg__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../../../public/images/header/SocialMedia/instagram.svg */ "./public/images/header/SocialMedia/instagram.svg");
/* harmony import */ var _public_images_header_SocialMedia_viber_svg__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../../../../public/images/header/SocialMedia/viber.svg */ "./public/images/header/SocialMedia/viber.svg");
/* harmony import */ var _common_Icon_Icon__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../common/Icon/Icon */ "./components/Footer/SocialMedia/common/Icon/Icon.jsx");


var _jsxFileName = "C:\\Users\\Admin\\Desktop\\projects\\foot-bet\\components\\Footer\\SocialMedia\\SMIcons\\SM.jsx";
// styles
 // icons






 // components


function SM() {
  const // config
  icons = [{
    key: Math.random(),
    src: _public_images_header_SocialMedia_phone_svg__WEBPACK_IMPORTED_MODULE_1__.default.src,
    url: "tel:+34672314808"
  }, {
    key: Math.random(),
    src: _public_images_header_SocialMedia_facebook_svg__WEBPACK_IMPORTED_MODULE_2__.default.src,
    url: "https://www.facebook.com/%D0%9F%D1%80%D0%BE%D0%B3%D0%BD%D0%BE%D0%B7%D1%8B-%D0%BD%D0%B0-%D0%A4%D1%83%D1%82%D0%B1%D0%BE%D0%BB-104941347577913/"
  }, {
    key: Math.random(),
    src: _public_images_header_SocialMedia_watsup_svg__WEBPACK_IMPORTED_MODULE_4__.default.src,
    url: "https://api.whatsapp.com/send?phone=+34672314808"
  }, {
    key: Math.random(),
    src: _public_images_header_SocialMedia_instagram_svg__WEBPACK_IMPORTED_MODULE_5__.default.src,
    url: "https://www.instagram.com/prognozyna550/?utm_medium=copy_link"
  }, {
    key: Math.random(),
    src: _public_images_header_SocialMedia_viber_svg__WEBPACK_IMPORTED_MODULE_6__.default.src,
    url: "viber://chat?number=+34672314808"
  }, {
    key: Math.random(),
    src: _public_images_header_SocialMedia_telegram_svg__WEBPACK_IMPORTED_MODULE_3__.default.src,
    url: "https://telegram.me/footbet24com",
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

var _jsxFileName = "C:\\Users\\Admin\\Desktop\\projects\\foot-bet\\components\\Footer\\SocialMedia\\SocialMedia.jsx";
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

var _jsxFileName = "C:\\Users\\Admin\\Desktop\\projects\\foot-bet\\components\\Footer\\SocialMedia\\common\\Icon\\Icon.jsx";


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
      padding: '0 15px'
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

var _jsxFileName = "C:\\Users\\Admin\\Desktop\\projects\\foot-bet\\components\\Header\\Bar\\Bar.jsx";
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
/* harmony import */ var _public_images_header_register_png__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../../../../public/images/header/register.png */ "./public/images/header/register.png");
/* harmony import */ var _public_images_header_login_png__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../../../../../public/images/header/login.png */ "./public/images/header/login.png");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! react-redux */ "react-redux");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var _redux_features_userSlice__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../../../redux/features/userSlice */ "./redux/features/userSlice.js");


var _jsxFileName = "C:\\Users\\Admin\\Desktop\\projects\\foot-bet\\components\\Header\\Bar\\BarItems\\BarItems.jsx";
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

  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
    children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
      className: `${(_BarItems_module_scss__WEBPACK_IMPORTED_MODULE_12___default().bar_item_container)} ${bar_items} ${router.pathname !== '/' ? (_BarItems_module_scss__WEBPACK_IMPORTED_MODULE_12___default().for_mobile) : null}`,
      children: [userLogged ? /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_Logged_Logged__WEBPACK_IMPORTED_MODULE_7__.Logged, {}, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 61,
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
                lineNumber: 66,
                columnNumber: 41
              }, this)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 65,
              columnNumber: 37
            }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_5___default()), {
              href: registration_path,
              children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("span", {
                children: registration
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 69,
                columnNumber: 41
              }, this)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 68,
              columnNumber: 37
            }, this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 64,
            columnNumber: 33
          }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
            className: (_BarItems_module_scss__WEBPACK_IMPORTED_MODULE_12___default().sign_in_button),
            onClick: loginModalHandle,
            children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("img", {
              src: _public_images_header_login_png__WEBPACK_IMPORTED_MODULE_9__.default.src,
              alt: ""
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 80,
              columnNumber: 37
            }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("span", {
              children: login
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 81,
              columnNumber: 37
            }, this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 76,
            columnNumber: 33
          }, this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 63,
          columnNumber: 29
        }, this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 62,
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
            lineNumber: 96,
            columnNumber: 29
          }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("img", {
            src: languagesTitle.icon,
            alt: "lang-flag"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 101,
            columnNumber: 29
          }, this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 91,
          columnNumber: 25
        }, this), showDrop && /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_LanguageDrop_LanguageDrop__WEBPACK_IMPORTED_MODULE_6__.LanguageDrop, {
          click: changeLangTitle,
          onClose: () => setShowDrop(false),
          data: languages_data
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 106,
          columnNumber: 38
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 90,
        columnNumber: 21
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 60,
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
/* harmony import */ var _public_images_header_flags_rus_png__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../../../public/images/header/flags/rus.png */ "./public/images/header/flags/rus.png");
/* harmony import */ var _public_images_header_flags_arm_svg__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../../../public/images/header/flags/arm.svg */ "./public/images/header/flags/arm.svg");
/* harmony import */ var _public_images_header_flags_en_svg__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../../public/images/header/flags/en.svg */ "./public/images/header/flags/en.svg");
/* harmony import */ var _public_images_header_flags_esp_svg__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../../../public/images/header/flags/esp.svg */ "./public/images/header/flags/esp.svg");
/* harmony import */ var _public_images_header_flags_frc_svg__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../../../public/images/header/flags/frc.svg */ "./public/images/header/flags/frc.svg");
/* harmony import */ var _public_images_header_flags_deu_svg__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../../../public/images/header/flags/deu.svg */ "./public/images/header/flags/deu.svg");
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

var _jsxFileName = "C:\\Users\\Admin\\Desktop\\projects\\foot-bet\\components\\Header\\Bar\\BarItems\\LanguageDrop\\LanguageDrop.jsx";
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
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-redux */ "react-redux");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _redux_features_userSlice__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../../redux/features/userSlice */ "./redux/features/userSlice.js");
/* harmony import */ var _Logged_module_scss__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./Logged.module.scss */ "./components/Header/Bar/BarItems/Logged/Logged.module.scss");
/* harmony import */ var _Logged_module_scss__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_Logged_module_scss__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _LoggedDrop_LoggedDrop__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./LoggedDrop/LoggedDrop */ "./components/Header/Bar/BarItems/Logged/LoggedDrop/LoggedDrop.jsx");
/* harmony import */ var _LoggedWallper_LoggedWallper__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./LoggedWallper/LoggedWallper */ "./components/Header/Bar/BarItems/Logged/LoggedWallper/LoggedWallper.jsx");

var _jsxFileName = "C:\\Users\\Admin\\Desktop\\projects\\foot-bet\\components\\Header\\Bar\\BarItems\\Logged\\Logged.jsx";
// styles






function Logged() {
  const // states
  //change user dropdown
  {
    0: showUserDrop,
    1: setShowUserDrop
  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);
  const data = (0,react_redux__WEBPACK_IMPORTED_MODULE_2__.useSelector)(_redux_features_userSlice__WEBPACK_IMPORTED_MODULE_3__.selectUser);
  const {
    0: photo,
    1: setPhoto
  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(data.photo);
  (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(() => {
    setPhoto(data.photo);
  }, [data]);
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
    className: (_Logged_module_scss__WEBPACK_IMPORTED_MODULE_6___default().container),
    style: showUserDrop ? {
      padding: '17.5px 0'
    } : null,
    children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
      className: (_Logged_module_scss__WEBPACK_IMPORTED_MODULE_6___default().content),
      children: !showUserDrop ? /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_LoggedWallper_LoggedWallper__WEBPACK_IMPORTED_MODULE_5__.LoggedWallper, {
        img: photo,
        fullName: data.username,
        click: () => setShowUserDrop(true)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 27,
        columnNumber: 21
      }, this) : /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_LoggedDrop_LoggedDrop__WEBPACK_IMPORTED_MODULE_4__.LoggedDrop, {
        onClose: () => setShowUserDrop(false),
        user: data
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 32,
        columnNumber: 21
      }, this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 25,
      columnNumber: 13
    }, this)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 22,
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
/* harmony import */ var _public_images_common_userDefault_png__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../../../public/images/common/userDefault.png */ "./public/images/common/userDefault.png");
/* harmony import */ var next_translate_useTranslation__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! next-translate/useTranslation */ "next-translate/useTranslation");
/* harmony import */ var next_translate_useTranslation__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(next_translate_useTranslation__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _LoggedDrop_module_scss__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./LoggedDrop.module.scss */ "./components/Header/Bar/BarItems/Logged/LoggedDrop/LoggedDrop.module.scss");
/* harmony import */ var _LoggedDrop_module_scss__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(_LoggedDrop_module_scss__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var _public_images_common_phone_png__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../../../../public/images/common/phone.png */ "./public/images/common/phone.png");
/* harmony import */ var _redux_features_userSlice__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../../../../redux/features/userSlice */ "./redux/features/userSlice.js");

var _jsxFileName = "C:\\Users\\Admin\\Desktop\\projects\\foot-bet\\components\\Header\\Bar\\BarItems\\Logged\\LoggedDrop\\LoggedDrop.jsx";
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
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-redux */ "react-redux");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _redux_features_userSlice__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../../../redux/features/userSlice */ "./redux/features/userSlice.js");
/* harmony import */ var _LoggedWallper_module_scss__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./LoggedWallper.module.scss */ "./components/Header/Bar/BarItems/Logged/LoggedWallper/LoggedWallper.module.scss");
/* harmony import */ var _LoggedWallper_module_scss__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_LoggedWallper_module_scss__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _public_images_common_triangle_png__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../../../public/images/common/triangle.png */ "./public/images/common/triangle.png");
/* harmony import */ var _public_images_common_userDefault_png__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../../../../public/images/common/userDefault.png */ "./public/images/common/userDefault.png");

var _jsxFileName = "C:\\Users\\Admin\\Desktop\\projects\\foot-bet\\components\\Header\\Bar\\BarItems\\Logged\\LoggedWallper\\LoggedWallper.jsx";
// components



 // styles

 // icons



function LoggedWallper({
  img,
  fullName,
  click
}) {
  const data = (0,react_redux__WEBPACK_IMPORTED_MODULE_3__.useSelector)(_redux_features_userSlice__WEBPACK_IMPORTED_MODULE_4__.selectUser);
  const {
    0: photo,
    1: setPhoto
  } = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(data.photo);
  const {
    0: fullname,
    1: setFullname
  } = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(data.username);
  (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(() => {
    setPhoto(data.photo);
    setFullname(data.username);
  }, [data]);
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
    className: (_LoggedWallper_module_scss__WEBPACK_IMPORTED_MODULE_7___default().container),
    children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
      className: (_LoggedWallper_module_scss__WEBPACK_IMPORTED_MODULE_7___default().content),
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
        className: (_LoggedWallper_module_scss__WEBPACK_IMPORTED_MODULE_7___default().user_photo),
        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_1___default()), {
          href: "/personal",
          children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("img", {
            src: photo || _public_images_common_userDefault_png__WEBPACK_IMPORTED_MODULE_6__.default.src,
            alt: `${fullname} icon`
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 31,
            columnNumber: 25
          }, this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 30,
          columnNumber: 21
        }, this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 29,
        columnNumber: 17
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
        className: (_LoggedWallper_module_scss__WEBPACK_IMPORTED_MODULE_7___default().user_fullName),
        onClick: click,
        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("span", {
          className: (_LoggedWallper_module_scss__WEBPACK_IMPORTED_MODULE_7___default().fullname),
          children: fullname
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 40,
          columnNumber: 21
        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("span", {
          style: {
            color: 'white'
          },
          children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("img", {
            src: _public_images_common_triangle_png__WEBPACK_IMPORTED_MODULE_5__.default.src,
            alt: "triangle"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 46,
            columnNumber: 25
          }, this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 43,
          columnNumber: 21
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 36,
        columnNumber: 17
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 28,
      columnNumber: 13
    }, this)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 27,
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
/* harmony import */ var _public_images_header_dropdown_lines_png__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../../../public/images/header/dropdown_lines.png */ "./public/images/header/dropdown_lines.png");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _Pages_Contacts_ContactsModal__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../Pages/Contacts/ContactsModal */ "./components/Pages/Contacts/ContactsModal.jsx");

var _jsxFileName = "C:\\Users\\Admin\\Desktop\\projects\\foot-bet\\components\\Header\\Bar\\DropdownMenu\\Dropdown.jsx";
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


var _jsxFileName = "C:\\Users\\Admin\\Desktop\\projects\\foot-bet\\components\\Header\\Bar\\Login\\Login.jsx";
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
/* harmony import */ var _components_common_auth_InputContainer_InputContainer__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../../../../components/common/auth/InputContainer/InputContainer */ "./components/common/auth/InputContainer/InputContainer.jsx");
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

var _jsxFileName = "C:\\Users\\Admin\\Desktop\\projects\\foot-bet\\components\\Header\\Bar\\Login\\LoginForm\\LoginForm.jsx";
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

      (0,react_toastify__WEBPACK_IMPORTED_MODULE_14__.toast)(((_error$response$data = error.response.data) === null || _error$response$data === void 0 ? void 0 : _error$response$data.message) || `Проблемы с сетью`, {
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
/* harmony import */ var _components_common_auth_InputContainer_InputContainer__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../../../../components/common/auth/InputContainer/InputContainer */ "./components/common/auth/InputContainer/InputContainer.jsx");
/* harmony import */ var _common_Submit__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../common/Submit */ "./components/Header/Bar/Login/common/Submit.jsx");
/* harmony import */ var _common_auth_Modal_Modal__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../../../../common/auth/Modal/Modal */ "./components/common/auth/Modal/Modal.jsx");
/* harmony import */ var _GetEmailCode_GetEmailCode__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../GetEmailCode/GetEmailCode */ "./components/Header/Bar/Login/ResetPassword/GetEmailCode/GetEmailCode.jsx");
/* harmony import */ var _ForgotPassword_module_scss__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./ForgotPassword.module.scss */ "./components/Header/Bar/Login/ResetPassword/ForgotPassword/ForgotPassword.module.scss");
/* harmony import */ var _ForgotPassword_module_scss__WEBPACK_IMPORTED_MODULE_14___default = /*#__PURE__*/__webpack_require__.n(_ForgotPassword_module_scss__WEBPACK_IMPORTED_MODULE_14__);
/* harmony import */ var _lib_er_lib__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../../../../../lib/er.lib */ "./lib/er.lib.js");
/* harmony import */ var react_toastify__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! react-toastify */ "react-toastify");
/* harmony import */ var react_toastify__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(react_toastify__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var _lib_request_destinations__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../../../../../../lib/request-destinations */ "./lib/request-destinations.js");


var _jsxFileName = "C:\\Users\\Admin\\Desktop\\projects\\foot-bet\\components\\Header\\Bar\\Login\\ResetPassword\\ForgotPassword\\ForgotPassword.jsx";
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

      (0,react_toastify__WEBPACK_IMPORTED_MODULE_12__.toast)(((_err$response$data = err.response.data) === null || _err$response$data === void 0 ? void 0 : _err$response$data.message) || `Не удалось востановить пароль`, {
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
/* harmony import */ var _lib_er_lib__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../../../../../lib/er.lib */ "./lib/er.lib.js");
/* harmony import */ var react_toastify__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! react-toastify */ "react-toastify");
/* harmony import */ var react_toastify__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(react_toastify__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var _lib_request_destinations__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../../../../../../lib/request-destinations */ "./lib/request-destinations.js");


var _jsxFileName = "C:\\Users\\Admin\\Desktop\\projects\\foot-bet\\components\\Header\\Bar\\Login\\ResetPassword\\GetEmailCode\\GetEmailCode.jsx";

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

      (0,react_toastify__WEBPACK_IMPORTED_MODULE_12__.toast)(((_err$response$data = err.response.data) === null || _err$response$data === void 0 ? void 0 : _err$response$data.message) || `Не удалось востановить пароль`, {
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
/* harmony import */ var _components_common_auth_InputContainer_InputContainer__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../../../../components/common/auth/InputContainer/InputContainer */ "./components/common/auth/InputContainer/InputContainer.jsx");
/* harmony import */ var _common_Submit__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../common/Submit */ "./components/Header/Bar/Login/common/Submit.jsx");
/* harmony import */ var _common_auth_Modal_Modal__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../../../../common/auth/Modal/Modal */ "./components/common/auth/Modal/Modal.jsx");
/* harmony import */ var react_toastify__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! react-toastify */ "react-toastify");
/* harmony import */ var react_toastify__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(react_toastify__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var _NewPassword_module_scss__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./NewPassword.module.scss */ "./components/Header/Bar/Login/ResetPassword/NewPassword/NewPassword.module.scss");
/* harmony import */ var _NewPassword_module_scss__WEBPACK_IMPORTED_MODULE_14___default = /*#__PURE__*/__webpack_require__.n(_NewPassword_module_scss__WEBPACK_IMPORTED_MODULE_14__);
/* harmony import */ var _Success_Success__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../Success/Success */ "./components/Header/Bar/Login/ResetPassword/Success/Success.jsx");
/* harmony import */ var _lib_er_lib__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../../../../../lib/er.lib */ "./lib/er.lib.js");
/* harmony import */ var _lib_request_destinations__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../../../../../../lib/request-destinations */ "./lib/request-destinations.js");


var _jsxFileName = "C:\\Users\\Admin\\Desktop\\projects\\foot-bet\\components\\Header\\Bar\\Login\\ResetPassword\\NewPassword\\NewPassword.jsx";
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

      (0,react_toastify__WEBPACK_IMPORTED_MODULE_10__.toast)(((_err$response$data = err.response.data) === null || _err$response$data === void 0 ? void 0 : _err$response$data.message) || `Не удалось востановить пароль`, {
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
/* harmony import */ var _public_images_header_login_success_png__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../../../public/images/header/login/success.png */ "./public/images/header/login/success.png");

var _jsxFileName = "C:\\Users\\Admin\\Desktop\\projects\\foot-bet\\components\\Header\\Bar\\Login\\ResetPassword\\Success\\Success.jsx";
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
/* harmony import */ var _public_images_header_login_facebook_svg__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../../../public/images/header/login/facebook.svg */ "./public/images/header/login/facebook.svg");
/* harmony import */ var _public_images_header_login_gmail_svg__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../../public/images/header/login/gmail.svg */ "./public/images/header/login/gmail.svg");
/* harmony import */ var _public_images_header_login_vk_svg__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../../../public/images/header/login/vk.svg */ "./public/images/header/login/vk.svg");
/* harmony import */ var _public_images_header_login_twitter_svg__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../../../public/images/header/login/twitter.svg */ "./public/images/header/login/twitter.svg");
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

var _jsxFileName = "C:\\Users\\Admin\\Desktop\\projects\\foot-bet\\components\\Header\\Bar\\Login\\SocialMediaIcons\\SocialMediaIcons.jsx";
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

var _jsxFileName = "C:\\Users\\Admin\\Desktop\\projects\\foot-bet\\components\\Header\\Bar\\Login\\common\\ResetPasswordLink.jsx";
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

var _jsxFileName = "C:\\Users\\Admin\\Desktop\\projects\\foot-bet\\components\\Header\\Bar\\Login\\common\\Submit.jsx";
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

var _jsxFileName = "C:\\Users\\Admin\\Desktop\\projects\\foot-bet\\components\\Header\\Bar\\Login\\common\\Title.jsx";
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

var _jsxFileName = "C:\\Users\\Admin\\Desktop\\projects\\foot-bet\\components\\Header\\Bar\\Login\\common\\ToRegister.jsx";

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
/* harmony import */ var _public_images_header_logo_svg__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../../public/images/header/logo.svg */ "./public/images/header/logo.svg");

var _jsxFileName = "C:\\Users\\Admin\\Desktop\\projects\\foot-bet\\components\\Header\\Bar\\Logo\\Logo.jsx";
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
/* harmony import */ var _public_images_header_footballer_svg__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../../../public/images/header/footballer.svg */ "./public/images/header/footballer.svg");


var _jsxFileName = "C:\\Users\\Admin\\Desktop\\projects\\foot-bet\\components\\Header\\Header.jsx";
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


var _jsxFileName = "C:\\Users\\Admin\\Desktop\\projects\\foot-bet\\components\\Header\\NavBar\\Button\\Button.jsx";
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


var _jsxFileName = "C:\\Users\\Admin\\Desktop\\projects\\foot-bet\\components\\Header\\NavBar\\NavBar.jsx";
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

var _jsxFileName = "C:\\Users\\Admin\\Desktop\\projects\\foot-bet\\components\\Header\\SocialMedia\\Icon\\Icon.jsx";

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

var _jsxFileName = "C:\\Users\\Admin\\Desktop\\projects\\foot-bet\\components\\Header\\SocialMedia\\Modals\\Facebook\\Facebook.jsx";



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

var _jsxFileName = "C:\\Users\\Admin\\Desktop\\projects\\foot-bet\\components\\Header\\SocialMedia\\Modals\\Instagram\\Instagram.jsx";



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

var _jsxFileName = "C:\\Users\\Admin\\Desktop\\projects\\foot-bet\\components\\Header\\SocialMedia\\Modals\\Phone\\Phone.jsx";



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

var _jsxFileName = "C:\\Users\\Admin\\Desktop\\projects\\foot-bet\\components\\Header\\SocialMedia\\Modals\\Telegram\\Telegram.jsx";



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

var _jsxFileName = "C:\\Users\\Admin\\Desktop\\projects\\foot-bet\\components\\Header\\SocialMedia\\Modals\\Viber\\Viber.jsx";



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

var _jsxFileName = "C:\\Users\\Admin\\Desktop\\projects\\foot-bet\\components\\Header\\SocialMedia\\Modals\\WatsUp\\WatsUp.jsx";



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
/* harmony import */ var _public_images_header_SocialMedia_phone_svg__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../../../../../public/images/header/SocialMedia/phone.svg */ "./public/images/header/SocialMedia/phone.svg");
/* harmony import */ var _public_images_header_SocialMedia_facebook_svg__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../../../../../public/images/header/SocialMedia/facebook.svg */ "./public/images/header/SocialMedia/facebook.svg");
/* harmony import */ var _public_images_header_SocialMedia_telegram_svg__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../../../../../public/images/header/SocialMedia/telegram.svg */ "./public/images/header/SocialMedia/telegram.svg");
/* harmony import */ var _public_images_header_SocialMedia_watsup_svg__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../../../../../public/images/header/SocialMedia/watsup.svg */ "./public/images/header/SocialMedia/watsup.svg");
/* harmony import */ var _public_images_header_SocialMedia_instagram_svg__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../../../../../../public/images/header/SocialMedia/instagram.svg */ "./public/images/header/SocialMedia/instagram.svg");
/* harmony import */ var _public_images_header_SocialMedia_viber_svg__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../../../../../../public/images/header/SocialMedia/viber.svg */ "./public/images/header/SocialMedia/viber.svg");


var _jsxFileName = "C:\\Users\\Admin\\Desktop\\projects\\foot-bet\\components\\Header\\SocialMedia\\SocialMedia.jsx";
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
      text: "+34 672 314 808",
      url: "tel:+34672314808"
    },
    facebook: {
      text: "Facebook",
      url: "https://www.facebook.com/%D0%9F%D1%80%D0%BE%D0%B3%D0%BD%D0%BE%D0%B7%D1%8B-%D0%BD%D0%B0-%D0%A4%D1%83%D1%82%D0%B1%D0%BE%D0%BB-104941347577913/"
    },
    telegram: {
      text: "+34 672 314 808",
      url: "https://telegram.me/footbet24com"
    },
    watsup: {
      text: "+34 672 314 808",
      url: "https://api.whatsapp.com/send?phone=+34672314808"
    },
    instagram: {
      text: "Instagram",
      url: "https://www.instagram.com/prognozyna550/?utm_medium=copy_link"
    },
    viber: {
      text: "+34 672 314 808",
      url: "viber://chat?number=+34672314808"
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
        lineNumber: 117,
        columnNumber: 11
      }, this))
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 115,
      columnNumber: 7
    }, this), showPhoneModal && /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_Modals_Phone_Phone__WEBPACK_IMPORTED_MODULE_3__.Phone, {
      onModalClose: () => setShowPhoneModal(false),
      data: modal_contents.phone,
      parent: socialMediasRef
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 121,
      columnNumber: 9
    }, this), showFacbookModal && /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_Modals_Facebook_Facebook__WEBPACK_IMPORTED_MODULE_4__.Facebook, {
      onModalClose: () => setShowFacbookModal(false),
      data: modal_contents.facebook,
      parent: socialMediasRef
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 128,
      columnNumber: 9
    }, this), showTelegramModal && /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_Modals_Telegram_Telegram__WEBPACK_IMPORTED_MODULE_5__.Telegram, {
      onModalClose: () => setShowTelegramModal(false),
      data: modal_contents.telegram,
      parent: socialMediasRef
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 135,
      columnNumber: 9
    }, this), showWatsUpModal && /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_Modals_WatsUp_WatsUp__WEBPACK_IMPORTED_MODULE_6__.WatsUp, {
      onModalClose: () => setShowWatsUpModal(false),
      data: modal_contents.watsup,
      parent: socialMediasRef
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 142,
      columnNumber: 9
    }, this), showInstagramModal && /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_Modals_Instagram_Instagram__WEBPACK_IMPORTED_MODULE_7__.Instagram, {
      onModalClose: () => setShowInstagramModal(false),
      data: modal_contents.instagram,
      parent: socialMediasRef
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 149,
      columnNumber: 9
    }, this), showViberModal && /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_Modals_Viber_Viber__WEBPACK_IMPORTED_MODULE_8__.Viber, {
      onModalClose: () => setShowViberModal(false),
      data: modal_contents.viber,
      parent: socialMediasRef
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 156,
      columnNumber: 9
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
/* harmony import */ var _public_images_header_SocialMedia_closeVector_png__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../../../public/images/header/SocialMedia/closeVector.png */ "./public/images/header/SocialMedia/closeVector.png");

var _jsxFileName = "C:\\Users\\Admin\\Desktop\\projects\\foot-bet\\components\\Pages\\Contacts\\ContactsModal.jsx";
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
              children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("a", {
                href: el.url,
                target: "_blank",
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
/* harmony import */ var _public_images_header_SocialMedia_phone_svg__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../../../public/images/header/SocialMedia/phone.svg */ "./public/images/header/SocialMedia/phone.svg");
/* harmony import */ var _public_images_header_SocialMedia_facebook_svg__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../../../public/images/header/SocialMedia/facebook.svg */ "./public/images/header/SocialMedia/facebook.svg");
/* harmony import */ var _public_images_header_SocialMedia_telegram_svg__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../../public/images/header/SocialMedia/telegram.svg */ "./public/images/header/SocialMedia/telegram.svg");
/* harmony import */ var _public_images_header_SocialMedia_watsup_svg__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../../../public/images/header/SocialMedia/watsup.svg */ "./public/images/header/SocialMedia/watsup.svg");
/* harmony import */ var _public_images_header_SocialMedia_instagram_svg__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../../../public/images/header/SocialMedia/instagram.svg */ "./public/images/header/SocialMedia/instagram.svg");
/* harmony import */ var _public_images_header_SocialMedia_viber_svg__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../../../public/images/header/SocialMedia/viber.svg */ "./public/images/header/SocialMedia/viber.svg");
/* harmony import */ var _public_images_header_SocialMedia_email_svg__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../../../../public/images/header/SocialMedia/email.svg */ "./public/images/header/SocialMedia/email.svg");







const contacts_data = [{
  icon: _public_images_header_SocialMedia_phone_svg__WEBPACK_IMPORTED_MODULE_0__.default.src,
  url: "tel:+34672314808",
  text: "+34 672 314 808"
}, {
  icon: _public_images_header_SocialMedia_facebook_svg__WEBPACK_IMPORTED_MODULE_1__.default.src,
  url: "https://www.facebook.com/%D0%9F%D1%80%D0%BE%D0%B3%D0%BD%D0%BE%D0%B7%D1%8B-%D0%BD%D0%B0-%D0%A4%D1%83%D1%82%D0%B1%D0%BE%D0%BB-104941347577913/",
  text: "Facebook"
}, {
  icon: _public_images_header_SocialMedia_telegram_svg__WEBPACK_IMPORTED_MODULE_2__.default.src,
  url: "https://telegram.me/footbet24com",
  text: "@footbet24com"
}, {
  icon: _public_images_header_SocialMedia_watsup_svg__WEBPACK_IMPORTED_MODULE_3__.default.src,
  url: "https://api.whatsapp.com/send?phone=+34672314808",
  text: "+34 672 314 808"
}, {
  icon: _public_images_header_SocialMedia_instagram_svg__WEBPACK_IMPORTED_MODULE_4__.default.src,
  url: "https://www.instagram.com/prognozyna550/?utm_medium=copy_link",
  text: "Instagram"
}, {
  icon: _public_images_header_SocialMedia_viber_svg__WEBPACK_IMPORTED_MODULE_5__.default.src,
  url: "viber://chat?number=+34672314808",
  text: "+34 672 314 808"
}, {
  icon: _public_images_header_SocialMedia_email_svg__WEBPACK_IMPORTED_MODULE_6__.default.src,
  url: "mailto:n.xach1987@mail.ru",
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

var _jsxFileName = "C:\\Users\\Admin\\Desktop\\projects\\foot-bet\\components\\common\\auth\\InputContainer\\InputContainer.jsx";

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

var _jsxFileName = "C:\\Users\\Admin\\Desktop\\projects\\foot-bet\\components\\common\\auth\\Modal\\Modal.jsx";




const handle_overflow_on_open = () => {
  document.body.style.overflowY = 'scroll';
  document.body.style.position = 'fixed';
  document.body.style.width = '100%';
},
      handle_overflow_on_close = () => {
  document.body.style.overflowY = 'scroll';
  document.body.style.position = 'static';
  document.body.style.width = 'auto';
};

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
  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);
  (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(() => {
    setShowModal(true);
    document.addEventListener("mousedown", handleClose);
    return () => {
      handle_overflow_on_close();
      document.removeEventListener("mousedown", handleClose);
    };
  }, [handleClose]);
  const node = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)();

  const handleClose = e => {
    var _node$current;

    if (node !== null && node !== void 0 && (_node$current = node.current) !== null && _node$current !== void 0 && _node$current.contains(e.target)) {
      return;
    } else {
      onClose();
    }
  },
        dinamicTop = window.scrollY;

  showModal ? handle_overflow_on_open() : handle_overflow_on_close();

  const modal = /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
    className: `${(_Modal_module_scss__WEBPACK_IMPORTED_MODULE_3___default().modalConteiner)} ${containerStyles}`,
    style: {
      top: '0px',
      position: 'fixed !important'
    },
    children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
      className: `${(_Modal_module_scss__WEBPACK_IMPORTED_MODULE_3___default().modalContent)} ${contentStyles}`,
      style: otherStyles,
      ref: node,
      children: children
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 62,
      columnNumber: 13
    }, this)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 56,
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


var _jsxFileName = "C:\\Users\\Admin\\Desktop\\projects\\foot-bet\\layouts\\Error.jsx";
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


var _jsxFileName = "C:\\Users\\Admin\\Desktop\\projects\\foot-bet\\layouts\\Main.jsx";


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


var _jsxFileName = "C:\\Users\\Admin\\Desktop\\projects\\foot-bet\\layouts\\Register.jsx";

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


var _jsxFileName = "C:\\Users\\Admin\\Desktop\\projects\\foot-bet\\layouts\\WithoutPhoto.jsx";


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

var _jsxFileName = "C:\\Users\\Admin\\Desktop\\projects\\foot-bet\\layouts\\layout-wrapper.jsx";

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

const AUTH_URL = _constants__WEBPACK_IMPORTED_MODULE_0__.host + `auth`;
const ACCOUNT_URL = _constants__WEBPACK_IMPORTED_MODULE_0__.host + `account`;
const REGISTER = {
  url: AUTH_URL + 'registration',
  method: 'post'
};
const LOGIN = {
  url: AUTH_URL + 'login',
  method: 'post'
};
const GET_ACCOUNT_INFO = {
  url: ACCOUNT_URL + 'info',
  method: 'get'
};
const CHANGE_ACCOUNT_INFO = {
  url: ACCOUNT_URL + 'info',
  method: 'put'
};
const CHANGE_ACCOUNT_IMAGE = {
  url: ACCOUNT_URL + 'profile-image',
  method: 'post'
};
const START_RESET_PASSWORD = email => ({
  url: AUTH_URL + `password/reset?email=${email}`,
  method: 'post'
});
const VERIFY_PASSWORD_RESET = {
  url: AUTH_URL + `password/verify_code`,
  method: 'put'
};
const SET_NEW_PASSWORD = {
  url: AUTH_URL + `password/new_password `,
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

var _jsxFileName = "C:\\Users\\Admin\\Desktop\\projects\\foot-bet\\pages\\_app.js";

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9mb290LWJldC8uL2xvY2FsZXN8bGF6eXwvXi8uKi8uKiQvfGdyb3VwT3B0aW9uczoge318bmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly9mb290LWJldC8uL25vZGVfbW9kdWxlcy9AYmFiZWwvcnVudGltZS9oZWxwZXJzL2ludGVyb3BSZXF1aXJlRGVmYXVsdC5qcyIsIndlYnBhY2s6Ly9mb290LWJldC8uL25vZGVfbW9kdWxlcy9AYmFiZWwvcnVudGltZS9oZWxwZXJzL2ludGVyb3BSZXF1aXJlV2lsZGNhcmQuanMiLCJ3ZWJwYWNrOi8vZm9vdC1iZXQvLi9ub2RlX21vZHVsZXMvQGJhYmVsL3J1bnRpbWUvaGVscGVycy90eXBlb2YuanMiLCJ3ZWJwYWNrOi8vZm9vdC1iZXQvLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L25leHQtc2VydmVyL3NlcnZlci9kZW5vcm1hbGl6ZS1wYWdlLXBhdGguanMiLCJ3ZWJwYWNrOi8vZm9vdC1iZXQvLi9ub2RlX21vZHVsZXMvbmV4dC9saW5rLmpzIiwid2VicGFjazovL2Zvb3QtYmV0Ly4vY29tcG9uZW50cy9Gb290ZXIvQmFsbC9CYWxsLmpzeCIsIndlYnBhY2s6Ly9mb290LWJldC8uL2NvbXBvbmVudHMvRm9vdGVyL0Zvb3Rlci5qc3giLCJ3ZWJwYWNrOi8vZm9vdC1iZXQvLi9jb21wb25lbnRzL0Zvb3Rlci9OYXZpZ2F0aW9uL0xpc3QvTGlzdC5qc3giLCJ3ZWJwYWNrOi8vZm9vdC1iZXQvLi9jb21wb25lbnRzL0Zvb3Rlci9OYXZpZ2F0aW9uL05hdmlnYXRpb24uanN4Iiwid2VicGFjazovL2Zvb3QtYmV0Ly4vY29tcG9uZW50cy9Gb290ZXIvTmF2aWdhdGlvbi9uYXZfZGF0YS5qcyIsIndlYnBhY2s6Ly9mb290LWJldC8uL2NvbXBvbmVudHMvRm9vdGVyL1NvY2lhbE1lZGlhL1BTSWNvbnMvUFMuanN4Iiwid2VicGFjazovL2Zvb3QtYmV0Ly4vY29tcG9uZW50cy9Gb290ZXIvU29jaWFsTWVkaWEvU01JY29ucy9TTS5qc3giLCJ3ZWJwYWNrOi8vZm9vdC1iZXQvLi9jb21wb25lbnRzL0Zvb3Rlci9Tb2NpYWxNZWRpYS9Tb2NpYWxNZWRpYS5qc3giLCJ3ZWJwYWNrOi8vZm9vdC1iZXQvLi9jb21wb25lbnRzL0Zvb3Rlci9Tb2NpYWxNZWRpYS9jb21tb24vSWNvbi9JY29uLmpzeCIsIndlYnBhY2s6Ly9mb290LWJldC8uL2NvbXBvbmVudHMvSGVhZGVyL0Jhci9CYXIuanN4Iiwid2VicGFjazovL2Zvb3QtYmV0Ly4vY29tcG9uZW50cy9IZWFkZXIvQmFyL0Jhckl0ZW1zL0Jhckl0ZW1zLmpzeCIsIndlYnBhY2s6Ly9mb290LWJldC8uL2NvbXBvbmVudHMvSGVhZGVyL0Jhci9CYXJJdGVtcy9MYW5ndWFnZURyb3BDb25maWdzL2xhbmctY29uZmlncy5qcyIsIndlYnBhY2s6Ly9mb290LWJldC8uL2NvbXBvbmVudHMvSGVhZGVyL0Jhci9CYXJJdGVtcy9MYW5ndWFnZURyb3AvTGFuZ3VhZ2VEcm9wLmpzeCIsIndlYnBhY2s6Ly9mb290LWJldC8uL2NvbXBvbmVudHMvSGVhZGVyL0Jhci9CYXJJdGVtcy9Mb2dnZWQvTG9nZ2VkLmpzeCIsIndlYnBhY2s6Ly9mb290LWJldC8uL2NvbXBvbmVudHMvSGVhZGVyL0Jhci9CYXJJdGVtcy9Mb2dnZWQvTG9nZ2VkRHJvcC9Mb2dnZWREcm9wLmpzeCIsIndlYnBhY2s6Ly9mb290LWJldC8uL2NvbXBvbmVudHMvSGVhZGVyL0Jhci9CYXJJdGVtcy9Mb2dnZWQvTG9nZ2VkV2FsbHBlci9Mb2dnZWRXYWxscGVyLmpzeCIsIndlYnBhY2s6Ly9mb290LWJldC8uL2NvbXBvbmVudHMvSGVhZGVyL0Jhci9Ecm9wZG93bk1lbnUvRHJvcGRvd24uanN4Iiwid2VicGFjazovL2Zvb3QtYmV0Ly4vY29tcG9uZW50cy9IZWFkZXIvQmFyL0xvZ2luL0xvZ2luLmpzeCIsIndlYnBhY2s6Ly9mb290LWJldC8uL2NvbXBvbmVudHMvSGVhZGVyL0Jhci9Mb2dpbi9Mb2dpbkZvcm0vTG9naW5Gb3JtLmpzeCIsIndlYnBhY2s6Ly9mb290LWJldC8uL2NvbXBvbmVudHMvSGVhZGVyL0Jhci9Mb2dpbi9SZXNldFBhc3N3b3JkL0ZvcmdvdFBhc3N3b3JkL0ZvcmdvdFBhc3N3b3JkLmpzeCIsIndlYnBhY2s6Ly9mb290LWJldC8uL2NvbXBvbmVudHMvSGVhZGVyL0Jhci9Mb2dpbi9SZXNldFBhc3N3b3JkL0dldEVtYWlsQ29kZS9HZXRFbWFpbENvZGUuanN4Iiwid2VicGFjazovL2Zvb3QtYmV0Ly4vY29tcG9uZW50cy9IZWFkZXIvQmFyL0xvZ2luL1Jlc2V0UGFzc3dvcmQvR2V0RW1haWxDb2RlL2lucHV0X2NvbmZpZ3MuanMiLCJ3ZWJwYWNrOi8vZm9vdC1iZXQvLi9jb21wb25lbnRzL0hlYWRlci9CYXIvTG9naW4vUmVzZXRQYXNzd29yZC9OZXdQYXNzd29yZC9OZXdQYXNzd29yZC5qc3giLCJ3ZWJwYWNrOi8vZm9vdC1iZXQvLi9jb21wb25lbnRzL0hlYWRlci9CYXIvTG9naW4vUmVzZXRQYXNzd29yZC9TdWNjZXNzL1N1Y2Nlc3MuanN4Iiwid2VicGFjazovL2Zvb3QtYmV0Ly4vY29tcG9uZW50cy9IZWFkZXIvQmFyL0xvZ2luL1NvY2lhbE1lZGlhSWNvbnMvU29jaWFsTWVkaWFJY29ucy5qc3giLCJ3ZWJwYWNrOi8vZm9vdC1iZXQvLi9jb21wb25lbnRzL0hlYWRlci9CYXIvTG9naW4vY29tbW9uL1Jlc2V0UGFzc3dvcmRMaW5rLmpzeCIsIndlYnBhY2s6Ly9mb290LWJldC8uL2NvbXBvbmVudHMvSGVhZGVyL0Jhci9Mb2dpbi9jb21tb24vU3VibWl0LmpzeCIsIndlYnBhY2s6Ly9mb290LWJldC8uL2NvbXBvbmVudHMvSGVhZGVyL0Jhci9Mb2dpbi9jb21tb24vVGl0bGUuanN4Iiwid2VicGFjazovL2Zvb3QtYmV0Ly4vY29tcG9uZW50cy9IZWFkZXIvQmFyL0xvZ2luL2NvbW1vbi9Ub1JlZ2lzdGVyLmpzeCIsIndlYnBhY2s6Ly9mb290LWJldC8uL2NvbXBvbmVudHMvSGVhZGVyL0Jhci9Mb2dvL0xvZ28uanN4Iiwid2VicGFjazovL2Zvb3QtYmV0Ly4vY29tcG9uZW50cy9IZWFkZXIvSGVhZGVyLmpzeCIsIndlYnBhY2s6Ly9mb290LWJldC8uL2NvbXBvbmVudHMvSGVhZGVyL05hdkJhci9CdXR0b24vQnV0dG9uLmpzeCIsIndlYnBhY2s6Ly9mb290LWJldC8uL2NvbXBvbmVudHMvSGVhZGVyL05hdkJhci9OYXZCYXIuanN4Iiwid2VicGFjazovL2Zvb3QtYmV0Ly4vY29tcG9uZW50cy9IZWFkZXIvU29jaWFsTWVkaWEvSWNvbi9JY29uLmpzeCIsIndlYnBhY2s6Ly9mb290LWJldC8uL2NvbXBvbmVudHMvSGVhZGVyL1NvY2lhbE1lZGlhL01vZGFscy9GYWNlYm9vay9GYWNlYm9vay5qc3giLCJ3ZWJwYWNrOi8vZm9vdC1iZXQvLi9jb21wb25lbnRzL0hlYWRlci9Tb2NpYWxNZWRpYS9Nb2RhbHMvSW5zdGFncmFtL0luc3RhZ3JhbS5qc3giLCJ3ZWJwYWNrOi8vZm9vdC1iZXQvLi9jb21wb25lbnRzL0hlYWRlci9Tb2NpYWxNZWRpYS9Nb2RhbHMvUGhvbmUvUGhvbmUuanN4Iiwid2VicGFjazovL2Zvb3QtYmV0Ly4vY29tcG9uZW50cy9IZWFkZXIvU29jaWFsTWVkaWEvTW9kYWxzL1RlbGVncmFtL1RlbGVncmFtLmpzeCIsIndlYnBhY2s6Ly9mb290LWJldC8uL2NvbXBvbmVudHMvSGVhZGVyL1NvY2lhbE1lZGlhL01vZGFscy9WaWJlci9WaWJlci5qc3giLCJ3ZWJwYWNrOi8vZm9vdC1iZXQvLi9jb21wb25lbnRzL0hlYWRlci9Tb2NpYWxNZWRpYS9Nb2RhbHMvV2F0c1VwL1dhdHNVcC5qc3giLCJ3ZWJwYWNrOi8vZm9vdC1iZXQvLi9jb21wb25lbnRzL0hlYWRlci9Tb2NpYWxNZWRpYS9Tb2NpYWxNZWRpYS5qc3giLCJ3ZWJwYWNrOi8vZm9vdC1iZXQvLi9jb21wb25lbnRzL1BhZ2VzL0NvbnRhY3RzL0NvbnRhY3RzTW9kYWwuanN4Iiwid2VicGFjazovL2Zvb3QtYmV0Ly4vY29tcG9uZW50cy9QYWdlcy9Db250YWN0cy9jb250YWN0c19kYXRhLmpzIiwid2VicGFjazovL2Zvb3QtYmV0Ly4vY29tcG9uZW50cy9jb21tb24vYXV0aC9JbnB1dENvbnRhaW5lci9JbnB1dENvbnRhaW5lci5qc3giLCJ3ZWJwYWNrOi8vZm9vdC1iZXQvLi9jb21wb25lbnRzL2NvbW1vbi9hdXRoL01vZGFsL01vZGFsLmpzeCIsIndlYnBhY2s6Ly9mb290LWJldC8uL2xheW91dHMvRXJyb3IuanN4Iiwid2VicGFjazovL2Zvb3QtYmV0Ly4vbGF5b3V0cy9NYWluLmpzeCIsIndlYnBhY2s6Ly9mb290LWJldC8uL2xheW91dHMvUmVnaXN0ZXIuanN4Iiwid2VicGFjazovL2Zvb3QtYmV0Ly4vbGF5b3V0cy9XaXRob3V0UGhvdG8uanN4Iiwid2VicGFjazovL2Zvb3QtYmV0Ly4vbGF5b3V0cy9sYXlvdXQtd3JhcHBlci5qc3giLCJ3ZWJwYWNrOi8vZm9vdC1iZXQvLi9saWIvY29uc3RhbnRzLmpzIiwid2VicGFjazovL2Zvb3QtYmV0Ly4vbGliL2VyLmxpYi5qcyIsIndlYnBhY2s6Ly9mb290LWJldC8uL2xpYi9yZXF1ZXN0LWRlc3RpbmF0aW9ucy5qcyIsIndlYnBhY2s6Ly9mb290LWJldC8uL25vZGVfbW9kdWxlcy9uZXh0L2Rpc3QvY2xpZW50L2xpbmsuanMiLCJ3ZWJwYWNrOi8vZm9vdC1iZXQvLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L2NsaWVudC9ub3JtYWxpemUtdHJhaWxpbmctc2xhc2guanMiLCJ3ZWJwYWNrOi8vZm9vdC1iZXQvLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L2NsaWVudC9yZXF1ZXN0LWlkbGUtY2FsbGJhY2suanMiLCJ3ZWJwYWNrOi8vZm9vdC1iZXQvLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L2NsaWVudC9yb3V0ZS1sb2FkZXIuanMiLCJ3ZWJwYWNrOi8vZm9vdC1iZXQvLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L2NsaWVudC9yb3V0ZXIuanMiLCJ3ZWJwYWNrOi8vZm9vdC1iZXQvLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L2NsaWVudC91c2UtaW50ZXJzZWN0aW9uLmpzIiwid2VicGFjazovL2Zvb3QtYmV0Ly4vbm9kZV9tb2R1bGVzL25leHQvZGlzdC9jbGllbnQvd2l0aC1yb3V0ZXIuanMiLCJ3ZWJwYWNrOi8vZm9vdC1iZXQvLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L25leHQtc2VydmVyL2xpYi9pMThuL2RldGVjdC1kb21haW4tbG9jYWxlLmpzIiwid2VicGFjazovL2Zvb3QtYmV0Ly4vbm9kZV9tb2R1bGVzL25leHQvZGlzdC9uZXh0LXNlcnZlci9saWIvaTE4bi9ub3JtYWxpemUtbG9jYWxlLXBhdGguanMiLCJ3ZWJwYWNrOi8vZm9vdC1iZXQvLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L25leHQtc2VydmVyL2xpYi9taXR0LmpzIiwid2VicGFjazovL2Zvb3QtYmV0Ly4vbm9kZV9tb2R1bGVzL25leHQvZGlzdC9uZXh0LXNlcnZlci9saWIvcm91dGVyL3JvdXRlci5qcyIsIndlYnBhY2s6Ly9mb290LWJldC8uL25vZGVfbW9kdWxlcy9uZXh0L2Rpc3QvbmV4dC1zZXJ2ZXIvbGliL3JvdXRlci91dGlscy9mb3JtYXQtdXJsLmpzIiwid2VicGFjazovL2Zvb3QtYmV0Ly4vbm9kZV9tb2R1bGVzL25leHQvZGlzdC9uZXh0LXNlcnZlci9saWIvcm91dGVyL3V0aWxzL2lzLWR5bmFtaWMuanMiLCJ3ZWJwYWNrOi8vZm9vdC1iZXQvLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L25leHQtc2VydmVyL2xpYi9yb3V0ZXIvdXRpbHMvcGFyc2UtcmVsYXRpdmUtdXJsLmpzIiwid2VicGFjazovL2Zvb3QtYmV0Ly4vbm9kZV9tb2R1bGVzL25leHQvZGlzdC9uZXh0LXNlcnZlci9saWIvcm91dGVyL3V0aWxzL3F1ZXJ5c3RyaW5nLmpzIiwid2VicGFjazovL2Zvb3QtYmV0Ly4vbm9kZV9tb2R1bGVzL25leHQvZGlzdC9uZXh0LXNlcnZlci9saWIvcm91dGVyL3V0aWxzL3JvdXRlLW1hdGNoZXIuanMiLCJ3ZWJwYWNrOi8vZm9vdC1iZXQvLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L25leHQtc2VydmVyL2xpYi9yb3V0ZXIvdXRpbHMvcm91dGUtcmVnZXguanMiLCJ3ZWJwYWNrOi8vZm9vdC1iZXQvLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L25leHQtc2VydmVyL2xpYi91dGlscy5qcyIsIndlYnBhY2s6Ly9mb290LWJldC8uL3BhZ2VzL19hcHAuanMiLCJ3ZWJwYWNrOi8vZm9vdC1iZXQvLi9yZWR1eC9mZWF0dXJlcy9tYXRjaFNsaWNlLmpzIiwid2VicGFjazovL2Zvb3QtYmV0Ly4vcmVkdXgvZmVhdHVyZXMvdXNlclNsaWNlLmpzIiwid2VicGFjazovL2Zvb3QtYmV0Ly4vcmVkdXgvc3RvcmUuanMiLCJ3ZWJwYWNrOi8vZm9vdC1iZXQvLi9wdWJsaWMvaW1hZ2VzL2NvbW1vbi9waG9uZS5wbmciLCJ3ZWJwYWNrOi8vZm9vdC1iZXQvLi9wdWJsaWMvaW1hZ2VzL2NvbW1vbi90cmlhbmdsZS5wbmciLCJ3ZWJwYWNrOi8vZm9vdC1iZXQvLi9wdWJsaWMvaW1hZ2VzL2NvbW1vbi91c2VyRGVmYXVsdC5wbmciLCJ3ZWJwYWNrOi8vZm9vdC1iZXQvLi9wdWJsaWMvaW1hZ2VzL2Zvb3Rlci9sZWZ0QmFsbC5wbmciLCJ3ZWJwYWNrOi8vZm9vdC1iZXQvLi9wdWJsaWMvaW1hZ2VzL2Zvb3Rlci9tYXN0ZXJDYXJkLnBuZyIsIndlYnBhY2s6Ly9mb290LWJldC8uL3B1YmxpYy9pbWFnZXMvZm9vdGVyL3Zpc2EucG5nIiwid2VicGFjazovL2Zvb3QtYmV0Ly4vcHVibGljL2ltYWdlcy9oZWFkZXIvU29jaWFsTWVkaWEvY2xvc2VWZWN0b3IucG5nIiwid2VicGFjazovL2Zvb3QtYmV0Ly4vcHVibGljL2ltYWdlcy9oZWFkZXIvU29jaWFsTWVkaWEvZW1haWwuc3ZnIiwid2VicGFjazovL2Zvb3QtYmV0Ly4vcHVibGljL2ltYWdlcy9oZWFkZXIvU29jaWFsTWVkaWEvZmFjZWJvb2suc3ZnIiwid2VicGFjazovL2Zvb3QtYmV0Ly4vcHVibGljL2ltYWdlcy9oZWFkZXIvU29jaWFsTWVkaWEvaW5zdGFncmFtLnN2ZyIsIndlYnBhY2s6Ly9mb290LWJldC8uL3B1YmxpYy9pbWFnZXMvaGVhZGVyL1NvY2lhbE1lZGlhL3Bob25lLnN2ZyIsIndlYnBhY2s6Ly9mb290LWJldC8uL3B1YmxpYy9pbWFnZXMvaGVhZGVyL1NvY2lhbE1lZGlhL3RlbGVncmFtLnN2ZyIsIndlYnBhY2s6Ly9mb290LWJldC8uL3B1YmxpYy9pbWFnZXMvaGVhZGVyL1NvY2lhbE1lZGlhL3ZpYmVyLnN2ZyIsIndlYnBhY2s6Ly9mb290LWJldC8uL3B1YmxpYy9pbWFnZXMvaGVhZGVyL1NvY2lhbE1lZGlhL3dhdHN1cC5zdmciLCJ3ZWJwYWNrOi8vZm9vdC1iZXQvLi9wdWJsaWMvaW1hZ2VzL2hlYWRlci9kcm9wZG93bl9saW5lcy5wbmciLCJ3ZWJwYWNrOi8vZm9vdC1iZXQvLi9wdWJsaWMvaW1hZ2VzL2hlYWRlci9mbGFncy9hcm0uc3ZnIiwid2VicGFjazovL2Zvb3QtYmV0Ly4vcHVibGljL2ltYWdlcy9oZWFkZXIvZmxhZ3MvZGV1LnN2ZyIsIndlYnBhY2s6Ly9mb290LWJldC8uL3B1YmxpYy9pbWFnZXMvaGVhZGVyL2ZsYWdzL2VuLnN2ZyIsIndlYnBhY2s6Ly9mb290LWJldC8uL3B1YmxpYy9pbWFnZXMvaGVhZGVyL2ZsYWdzL2VzcC5zdmciLCJ3ZWJwYWNrOi8vZm9vdC1iZXQvLi9wdWJsaWMvaW1hZ2VzL2hlYWRlci9mbGFncy9mcmMuc3ZnIiwid2VicGFjazovL2Zvb3QtYmV0Ly4vcHVibGljL2ltYWdlcy9oZWFkZXIvZmxhZ3MvcnVzLnBuZyIsIndlYnBhY2s6Ly9mb290LWJldC8uL3B1YmxpYy9pbWFnZXMvaGVhZGVyL2Zvb3RiYWxsZXIuc3ZnIiwid2VicGFjazovL2Zvb3QtYmV0Ly4vcHVibGljL2ltYWdlcy9oZWFkZXIvbG9naW4ucG5nIiwid2VicGFjazovL2Zvb3QtYmV0Ly4vcHVibGljL2ltYWdlcy9oZWFkZXIvbG9naW4vZmFjZWJvb2suc3ZnIiwid2VicGFjazovL2Zvb3QtYmV0Ly4vcHVibGljL2ltYWdlcy9oZWFkZXIvbG9naW4vZ21haWwuc3ZnIiwid2VicGFjazovL2Zvb3QtYmV0Ly4vcHVibGljL2ltYWdlcy9oZWFkZXIvbG9naW4vc3VjY2Vzcy5wbmciLCJ3ZWJwYWNrOi8vZm9vdC1iZXQvLi9wdWJsaWMvaW1hZ2VzL2hlYWRlci9sb2dpbi90d2l0dGVyLnN2ZyIsIndlYnBhY2s6Ly9mb290LWJldC8uL3B1YmxpYy9pbWFnZXMvaGVhZGVyL2xvZ2luL3ZrLnN2ZyIsIndlYnBhY2s6Ly9mb290LWJldC8uL3B1YmxpYy9pbWFnZXMvaGVhZGVyL2xvZ28uc3ZnIiwid2VicGFjazovL2Zvb3QtYmV0Ly4vcHVibGljL2ltYWdlcy9oZWFkZXIvcmVnaXN0ZXIucG5nIiwid2VicGFjazovL2Zvb3QtYmV0Ly4vcHVibGljL2ltYWdlcy9wZXJzb25hbC9iYWxsLnBuZyIsIndlYnBhY2s6Ly9mb290LWJldC8uL2NvbXBvbmVudHMvRm9vdGVyL0JhbGwvQmFsbC5tb2R1bGUuc2NzcyIsIndlYnBhY2s6Ly9mb290LWJldC8uL2NvbXBvbmVudHMvRm9vdGVyL0Zvb3Rlci5tb2R1bGUuc2NzcyIsIndlYnBhY2s6Ly9mb290LWJldC8uL2NvbXBvbmVudHMvRm9vdGVyL05hdmlnYXRpb24vTGlzdC9MaXN0Lm1vZHVsZS5zY3NzIiwid2VicGFjazovL2Zvb3QtYmV0Ly4vY29tcG9uZW50cy9Gb290ZXIvTmF2aWdhdGlvbi9OYXZpZ2F0aW9uLm1vZHVsZS5zY3NzIiwid2VicGFjazovL2Zvb3QtYmV0Ly4vY29tcG9uZW50cy9Gb290ZXIvU29jaWFsTWVkaWEvUFNJY29ucy9QUy5tb2R1bGUuc2NzcyIsIndlYnBhY2s6Ly9mb290LWJldC8uL2NvbXBvbmVudHMvRm9vdGVyL1NvY2lhbE1lZGlhL1NNSWNvbnMvU00ubW9kdWxlLnNjc3MiLCJ3ZWJwYWNrOi8vZm9vdC1iZXQvLi9jb21wb25lbnRzL0Zvb3Rlci9Tb2NpYWxNZWRpYS9Tb2NpYWxNZWRpYS5tb2R1bGUuc2NzcyIsIndlYnBhY2s6Ly9mb290LWJldC8uL2NvbXBvbmVudHMvRm9vdGVyL1NvY2lhbE1lZGlhL2NvbW1vbi9JY29uL0ljb24ubW9kdWxlLnNjc3MiLCJ3ZWJwYWNrOi8vZm9vdC1iZXQvLi9jb21wb25lbnRzL0hlYWRlci9CYXIvQmFyLm1vZHVsZS5zY3NzIiwid2VicGFjazovL2Zvb3QtYmV0Ly4vY29tcG9uZW50cy9IZWFkZXIvQmFyL0Jhckl0ZW1zL0Jhckl0ZW1zLm1vZHVsZS5zY3NzIiwid2VicGFjazovL2Zvb3QtYmV0Ly4vY29tcG9uZW50cy9IZWFkZXIvQmFyL0Jhckl0ZW1zL0xhbmd1YWdlRHJvcC9MYW5ndWFnZURyb3AubW9kdWxlLnNjc3MiLCJ3ZWJwYWNrOi8vZm9vdC1iZXQvLi9jb21wb25lbnRzL0hlYWRlci9CYXIvQmFySXRlbXMvTG9nZ2VkL0xvZ2dlZC5tb2R1bGUuc2NzcyIsIndlYnBhY2s6Ly9mb290LWJldC8uL2NvbXBvbmVudHMvSGVhZGVyL0Jhci9CYXJJdGVtcy9Mb2dnZWQvTG9nZ2VkRHJvcC9Mb2dnZWREcm9wLm1vZHVsZS5zY3NzIiwid2VicGFjazovL2Zvb3QtYmV0Ly4vY29tcG9uZW50cy9IZWFkZXIvQmFyL0Jhckl0ZW1zL0xvZ2dlZC9Mb2dnZWRXYWxscGVyL0xvZ2dlZFdhbGxwZXIubW9kdWxlLnNjc3MiLCJ3ZWJwYWNrOi8vZm9vdC1iZXQvLi9jb21wb25lbnRzL0hlYWRlci9CYXIvRHJvcGRvd25NZW51L0Ryb3Bkb3duLm1vZHVsZS5zY3NzIiwid2VicGFjazovL2Zvb3QtYmV0Ly4vY29tcG9uZW50cy9IZWFkZXIvQmFyL0xvZ2luL0xvZ2luLm1vZHVsZS5zY3NzIiwid2VicGFjazovL2Zvb3QtYmV0Ly4vY29tcG9uZW50cy9IZWFkZXIvQmFyL0xvZ2luL0xvZ2luRm9ybS9Mb2dpbkZvcm0ubW9kdWxlLnNjc3MiLCJ3ZWJwYWNrOi8vZm9vdC1iZXQvLi9jb21wb25lbnRzL0hlYWRlci9CYXIvTG9naW4vUmVzZXRQYXNzd29yZC9Gb3Jnb3RQYXNzd29yZC9Gb3Jnb3RQYXNzd29yZC5tb2R1bGUuc2NzcyIsIndlYnBhY2s6Ly9mb290LWJldC8uL2NvbXBvbmVudHMvSGVhZGVyL0Jhci9Mb2dpbi9SZXNldFBhc3N3b3JkL0dldEVtYWlsQ29kZS9HZXRFbWFpbENvZGUubW9kdWxlLnNjc3MiLCJ3ZWJwYWNrOi8vZm9vdC1iZXQvLi9jb21wb25lbnRzL0hlYWRlci9CYXIvTG9naW4vUmVzZXRQYXNzd29yZC9OZXdQYXNzd29yZC9OZXdQYXNzd29yZC5tb2R1bGUuc2NzcyIsIndlYnBhY2s6Ly9mb290LWJldC8uL2NvbXBvbmVudHMvSGVhZGVyL0Jhci9Mb2dpbi9SZXNldFBhc3N3b3JkL1N1Y2Nlc3MvU3VjY2Vzcy5tb2R1bGUuc2NzcyIsIndlYnBhY2s6Ly9mb290LWJldC8uL2NvbXBvbmVudHMvSGVhZGVyL0Jhci9Mb2dpbi9Tb2NpYWxNZWRpYUljb25zL1NvY2lhbE1lZGlhSWNvbnMubW9kdWxlLnNjc3MiLCJ3ZWJwYWNrOi8vZm9vdC1iZXQvLi9jb21wb25lbnRzL0hlYWRlci9CYXIvTG9nby9Mb2dvLm1vZHVsZS5zY3NzIiwid2VicGFjazovL2Zvb3QtYmV0Ly4vY29tcG9uZW50cy9IZWFkZXIvSGVhZGVyLm1vZHVsZS5zY3NzIiwid2VicGFjazovL2Zvb3QtYmV0Ly4vY29tcG9uZW50cy9IZWFkZXIvTmF2QmFyL0J1dHRvbi9CdXR0b24ubW9kdWxlLnNjc3MiLCJ3ZWJwYWNrOi8vZm9vdC1iZXQvLi9jb21wb25lbnRzL0hlYWRlci9OYXZCYXIvTmF2QmFyLm1vZHVsZS5zY3NzIiwid2VicGFjazovL2Zvb3QtYmV0Ly4vY29tcG9uZW50cy9IZWFkZXIvU29jaWFsTWVkaWEvSWNvbi9JY29uLm1vZHVsZS5zY3NzIiwid2VicGFjazovL2Zvb3QtYmV0Ly4vY29tcG9uZW50cy9IZWFkZXIvU29jaWFsTWVkaWEvTW9kYWxzL1NvY2lhbE1lZGlhTW9kYWwubW9kdWxlLnNjc3MiLCJ3ZWJwYWNrOi8vZm9vdC1iZXQvLi9jb21wb25lbnRzL0hlYWRlci9Tb2NpYWxNZWRpYS9Tb2NpYWxNZWRpYS5tb2R1bGUuc2NzcyIsIndlYnBhY2s6Ly9mb290LWJldC8uL2NvbXBvbmVudHMvUGFnZXMvQ29udGFjdHMvQ29udGFjdHMubW9kdWxlLnNjc3MiLCJ3ZWJwYWNrOi8vZm9vdC1iZXQvLi9jb21wb25lbnRzL2NvbW1vbi9hdXRoL0lucHV0Q29udGFpbmVyL0lucHV0Q29udGFpbmVyLm1vZHVsZS5zY3NzIiwid2VicGFjazovL2Zvb3QtYmV0Ly4vY29tcG9uZW50cy9jb21tb24vYXV0aC9Nb2RhbC9Nb2RhbC5tb2R1bGUuc2NzcyIsIndlYnBhY2s6Ly9mb290LWJldC9leHRlcm5hbCBcIkBob29rZm9ybS9yZXNvbHZlcnMveXVwXCIiLCJ3ZWJwYWNrOi8vZm9vdC1iZXQvZXh0ZXJuYWwgXCJAcmVkdXhqcy90b29sa2l0XCIiLCJ3ZWJwYWNrOi8vZm9vdC1iZXQvZXh0ZXJuYWwgXCJheGlvc1wiIiwid2VicGFjazovL2Zvb3QtYmV0L2V4dGVybmFsIFwibmV4dC10cmFuc2xhdGUvYXBwV2l0aEkxOG5cIiIsIndlYnBhY2s6Ly9mb290LWJldC9leHRlcm5hbCBcIm5leHQtdHJhbnNsYXRlL3VzZVRyYW5zbGF0aW9uXCIiLCJ3ZWJwYWNrOi8vZm9vdC1iZXQvZXh0ZXJuYWwgXCJuZXh0L2Rpc3QvbmV4dC1zZXJ2ZXIvbGliL3JvdXRlci1jb250ZXh0LmpzXCIiLCJ3ZWJwYWNrOi8vZm9vdC1iZXQvZXh0ZXJuYWwgXCJuZXh0L2Rpc3QvbmV4dC1zZXJ2ZXIvbGliL3JvdXRlci91dGlscy9nZXQtYXNzZXQtcGF0aC1mcm9tLXJvdXRlLmpzXCIiLCJ3ZWJwYWNrOi8vZm9vdC1iZXQvZXh0ZXJuYWwgXCJuZXh0L2hlYWRcIiIsIndlYnBhY2s6Ly9mb290LWJldC9leHRlcm5hbCBcInJlYWN0XCIiLCJ3ZWJwYWNrOi8vZm9vdC1iZXQvZXh0ZXJuYWwgXCJyZWFjdC1iZWF1dGlmdWwtZG5kXCIiLCJ3ZWJwYWNrOi8vZm9vdC1iZXQvZXh0ZXJuYWwgXCJyZWFjdC1kb21cIiIsIndlYnBhY2s6Ly9mb290LWJldC9leHRlcm5hbCBcInJlYWN0LWZhY2Vib29rLWxvZ2luXCIiLCJ3ZWJwYWNrOi8vZm9vdC1iZXQvZXh0ZXJuYWwgXCJyZWFjdC1nb29nbGUtbG9naW5cIiIsIndlYnBhY2s6Ly9mb290LWJldC9leHRlcm5hbCBcInJlYWN0LWhvb2stZm9ybVwiIiwid2VicGFjazovL2Zvb3QtYmV0L2V4dGVybmFsIFwicmVhY3QtaXNcIiIsIndlYnBhY2s6Ly9mb290LWJldC9leHRlcm5hbCBcInJlYWN0LXJlZHV4XCIiLCJ3ZWJwYWNrOi8vZm9vdC1iZXQvZXh0ZXJuYWwgXCJyZWFjdC10b2FzdGlmeVwiIiwid2VicGFjazovL2Zvb3QtYmV0L2V4dGVybmFsIFwicmVhY3QtdHdpdHRlci1sb2dpblwiIiwid2VicGFjazovL2Zvb3QtYmV0L2V4dGVybmFsIFwicmVhY3QvanN4LWRldi1ydW50aW1lXCIiLCJ3ZWJwYWNrOi8vZm9vdC1iZXQvZXh0ZXJuYWwgXCJyZWR1eC1wZXJzaXN0XCIiLCJ3ZWJwYWNrOi8vZm9vdC1iZXQvZXh0ZXJuYWwgXCJyZWR1eC1wZXJzaXN0L2ludGVncmF0aW9uL3JlYWN0XCIiLCJ3ZWJwYWNrOi8vZm9vdC1iZXQvZXh0ZXJuYWwgXCJyZWR1eC1wZXJzaXN0L2xpYi9zdG9yYWdlXCIiLCJ3ZWJwYWNrOi8vZm9vdC1iZXQvZXh0ZXJuYWwgXCJ5dXBcIiIsIndlYnBhY2s6Ly9mb290LWJldC9pZ25vcmVkfEM6XFxVc2Vyc1xcQWRtaW5cXERlc2t0b3BcXHByb2plY3RzXFxmb290LWJldFxcbm9kZV9tb2R1bGVzXFxuZXh0XFxkaXN0XFxuZXh0LXNlcnZlclxcbGliXFxyb3V0ZXJ8Li91dGlscy9yZXNvbHZlLXJld3JpdGVzIl0sIm5hbWVzIjpbIkJhbGwiLCJzdHlsZXMiLCJiYWxsSWNvbiIsIkZvb3RlciIsInJvdXRlciIsInVzZVJvdXRlciIsInBhdGhuYW1lIiwiTGlzdCIsImxpc3RfaXRlbXMiLCJib3JkZXJzQWN0aXZlIiwidCIsInVzZVRyYW5zbGF0aW9uIiwidHJhbnNsYXRpb25QYXRoIiwidHJhbnNsYXRlIiwia2V5IiwibWFwIiwiZWwiLCJsaW5rIiwibmFtZSIsIk1hdGgiLCJyYW5kb20iLCJOYXZpZ2F0aW9uIiwibmF2X2RhdGEiLCJpIiwiUFMiLCJpY29ucyIsInNyYyIsInZpc2EiLCJtYXN0ZXJDYXJkIiwibGFzdEVsZW1lbnQiLCJTTSIsInBob25lIiwidXJsIiwiZmFjZWJvb2siLCJ3YXRzdXAiLCJpbnN0YWdyYW0iLCJ2aWJlciIsInRlbGVncmFtIiwibGVuZ3RoIiwiU29jaWFsTWVkaWEiLCJJY29uIiwiY2xpY2siLCJlbGVtZW50cyIsIm90aGVyU3R5bGVzIiwiY2xhc3NlcyIsIndpZHRoIiwicGFkZGluZyIsIkJhciIsImJhcl9pdGVtcyIsImJhcl9pdGVtc19jb250Iiwic2hvd0xvZ2luTW9kYWwiLCJzZXRTaG93TG9naW5Nb2RhbCIsInVzZVN0YXRlIiwidXNlcl9pbmZvIiwidXNlU2VsZWN0b3IiLCJzdGF0ZSIsInVzZXIiLCJjb25zb2xlIiwibG9nIiwiQmFySXRlbXMiLCJyZWdpc3RyYXRpb24iLCJsb2dpbiIsInJlZ2lzdHJhdGlvbl9wYXRoIiwibG9naW5Nb2RhbEhhbmRsZSIsInVzZXJMb2dnZWQiLCJsYW5nIiwibGFuZ3VhZ2VzVGl0bGUiLCJzZXRMYW5ndWFnZXNUaXRsZSIsImxhbmd1YWdlcyIsInVzZUVmZmVjdCIsIm5ld0xhbmciLCJsYW5ndWFnZXNfZGF0YSIsInNob3dEcm9wIiwic2V0U2hvd0Ryb3AiLCJjaGFuZ2VMYW5nVGl0bGUiLCJldmVudCIsImxhbmdfdGl0bGVfZGF0YSIsImZpbHRlciIsInRhcmdldCIsImNsYXNzTmFtZSIsInJlZ2lzdGVyX2ljb24iLCJsb2dpbl9pY29uIiwiZGlzcGxheSIsImNvbnRlbnRPblRpdGxlIiwiaWNvbiIsImNvbnRlbnRPbkRyb3AiLCJhcm1GbGFnIiwicnVzRmxhZyIsImVuRmxhZyIsImVzcEZsYWciLCJmcmNGbGFnIiwiZGV1RmxhZyIsIkxhbmd1YWdlRHJvcCIsIm9uQ2xvc2UiLCJkYXRhIiwiZG9jdW1lbnQiLCJhZGRFdmVudExpc3RlbmVyIiwiaGFuZGxlQ2xvc2UiLCJyZW1vdmVFdmVudExpc3RlbmVyIiwibm9kZSIsInVzZVJlZiIsImUiLCJjdXJyZW50IiwiY29udGFpbnMiLCJwYXJlbnROb2RlIiwiTG9nZ2VkIiwic2hvd1VzZXJEcm9wIiwic2V0U2hvd1VzZXJEcm9wIiwic2VsZWN0VXNlciIsInBob3RvIiwic2V0UGhvdG8iLCJ1c2VybmFtZSIsIkxvZ2dlZERyb3AiLCJkaXNwYXRjaCIsInVzZURpc3BhdGNoIiwiX2xvZ291dCIsImxvZ291dCIsInB1c2giLCJnb1RvUGVyc29uYWwiLCJ1c2VyRGVmYXVsdEljb24iLCJ0ZWxJY29uIiwidGVsZXBob25lIiwiTG9nZ2VkV2FsbHBlciIsImltZyIsImZ1bGxOYW1lIiwiZnVsbG5hbWUiLCJzZXRGdWxsbmFtZSIsImNvbG9yIiwidHJpYW5nbGUiLCJEcm9wZG93biIsInNob3dEcm9wZG93biIsInNldFNob3dEcm9wZG93biIsInNob3dDb250YWN0c01vZGFsIiwic2V0U2hvd0NvbnRhY3RzTW9kYWwiLCJidXR0b25zSW5Ib21lUGFnZSIsImlkIiwiZnJzdENvbnRlbnQiLCJocmVmIiwic2VjQ29udGVudCIsImJ1dHRvbnMiLCJkcm9wZG93bkxpbmVzIiwiTG9naW4iLCJvbk1vZGFsQ2xvc2UiLCJzaG93UmVzZXRQYXNzd29yZE1vZGFsIiwic2V0U2hvd1Jlc2V0UGFzc3dvcmRNb2RhbCIsIkxvZ2luRm9ybSIsImhhbmRsZVJlc2V0UGFzc01vZGFsIiwiaGFuZGxlX3RvX3JlZ2lzdGVyX2NsaWNrIiwicXVlcnlTZWxlY3RvciIsInN0eWxlIiwib3ZlcmZsb3ciLCJzY2hlbWEiLCJ5dXAiLCJzaGFwZSIsImVtYWlsIiwicmVxdWlyZWQiLCJtYXRjaGVzIiwicGFzc3dvcmQiLCJtaW4iLCJyZWdpc3RlciIsImhhbmRsZVN1Ym1pdCIsImZvcm1TdGF0ZSIsImVycm9ycyIsInVzZUZvcm0iLCJtb2RlIiwicmVzb2x2ZXIiLCJ5dXBSZXNvbHZlciIsInN1Ym1pdCIsInRva2VuIiwicmVxdWVzdCIsIkxPR0lOIiwic2V0Q29va2llIiwiR0VUX0FDQ09VTlRfSU5GTyIsImF1dGgiLCJlcnJvciIsInRvYXN0IiwicmVzcG9uc2UiLCJtZXNzYWdlIiwidHlwZSIsIkZvcmdvdFBhc3N3b3JkIiwic2hvd0ZvcmdvdFBhc3NNbCIsInNldFNob3dGb3Jnb3RQYXNzTWwiLCJzaG93R2V0RW1haWxDb2RlTWwiLCJzZXRTaG93RW1haWxDb2RlTWwiLCJTVEFSVF9SRVNFVF9QQVNTV09SRCIsImVyciIsIkdldEVtYWlsQ29kZSIsInNob3dOZXdQYXNzd29yZE1sIiwic2V0U2hvd05ld1Bhc3N3b3JkTWwiLCJudW0xIiwibnVtMiIsIm51bTMiLCJudW00IiwibnVtNSIsIm51bTYiLCJqdW1wIiwieCIsInZhbHVlIiwibmV4dFNpYmxpbmciLCJ0ZXN0IiwiZm9jdXMiLCJqdW1wQmFjayIsImNvZGUiLCJwcmV2aW91c1NpYmxpbmciLCJPYmplY3QiLCJ2YWx1ZXMiLCJyZWR1Y2UiLCJhYyIsIlZFUklGWV9QQVNTV09SRF9SRVNFVCIsImhlYWRlcnMiLCJnZXRDb29raWUiLCJpbnB1dHMiLCJjbGFzcyIsInRyaW0iLCJtYXhMZW5ndGgiLCJOZXdQYXNzd29yZCIsInNob3dOZXdQYXNzTWwiLCJzZXRTaG93TmV3UGFzc01sIiwic2hvd1N1Y2Nlc3NNbCIsInNldFNob3dTdWNjZXNzTWwiLCJTRVRfTkVXX1BBU1NXT1JEIiwiU3VjY2VzcyIsInN1Y2Nlc3NJY29uIiwiaWNvblVybCIsImdtYWlsIiwidmsiLCJ0d2l0dGVyIiwicmVzcG9uc2VGYWNlYm9vayIsInJlc3BvbnNlR29vZ2xlIiwiVFdJVFRFUl9DT05TVU1FUl9LRVkiLCJUV0lUVEVSX0NPTlNVTUVSX1NFQ1JFVCIsIlNvY2lhbE1lZGlhSWNvbnMiLCJWSyIsImluaXQiLCJhcGlJZCIsIm9uU29jaWFsTWVkaWFCdG5DbGljayIsImZhY2Vib29rTG9naW5CdG4iLCJnb29nbGVMb2dpbkJ0biIsIkF1dGgiLCJzZXNzaW9uIiwic3RhdHVzIiwidHdpdHRlckF1dGhIYW5kbGVyIiwiY3Vyc29yIiwicmVuZGVyUHJvcHMiLCJvbkNsaWNrIiwiZGlzYWJsZWQiLCJSZXNldFBhc3N3b3JkTGluayIsImNvbnRlbnQiLCJTdWJtaXQiLCJUaXRsZSIsIlRvUmVnaXN0ZXIiLCJjb250YWluZXJfc3R5bGVzIiwiY29udGVudF9zdHlsZXMiLCJvciIsInJlZ2lzdGVyX3RleHRfc3R5bGVzIiwiTG9nbyIsImxvZ28iLCJIZWFkZXIiLCJtYWluc1BhZ2VzIiwiZm9vdGJhbGxlciIsIkJ1dHRvbiIsImNvbnRlbnRGcnN0UCIsImNvbnRlbnRTZWNQIiwiYWN0aXZlIiwiTmF2QmFyIiwiRmFjZWJvb2siLCJwYXJlbnQiLCJ0b3AiLCJjaGlsZHJlbiIsIm9mZnNldFRvcCIsInRleHQiLCJJbnN0YWdyYW0iLCJQaG9uZSIsIlRlbGVncmFtIiwiVmliZXIiLCJXYXRzVXAiLCJzaG93UGhvbmVNb2RhbCIsInNldFNob3dQaG9uZU1vZGFsIiwic2hvd0ZhY2Jvb2tNb2RhbCIsInNldFNob3dGYWNib29rTW9kYWwiLCJzaG93VGVsZWdyYW1Nb2RhbCIsInNldFNob3dUZWxlZ3JhbU1vZGFsIiwic2hvd1dhdHNVcE1vZGFsIiwic2V0U2hvd1dhdHNVcE1vZGFsIiwic2hvd0luc3RhZ3JhbU1vZGFsIiwic2V0U2hvd0luc3RhZ3JhbU1vZGFsIiwic2hvd1ZpYmVyTW9kYWwiLCJzZXRTaG93VmliZXJNb2RhbCIsInNvY2lhbE1lZGlhc1JlZiIsIndpbmRvdyIsInNjcm9sbFRvIiwibW9kYWxfY29udGVudHMiLCJDb250YWN0c01vZGFsIiwib3BlbmVkIiwiY2xvc2VWZWN0b3IiLCJjb250YWN0c19kYXRhIiwiSW5wdXRDb250YWluZXIiLCJsYWJlbCIsInBsYWNlaG9sZGVyIiwib3RoZXIiLCJoYW5kbGVfb3ZlcmZsb3dfb25fb3BlbiIsImJvZHkiLCJvdmVyZmxvd1kiLCJwb3NpdGlvbiIsImhhbmRsZV9vdmVyZmxvd19vbl9jbG9zZSIsIk1vZGFsIiwiY29udGFpbmVyU3R5bGVzIiwiY29udGVudFN0eWxlcyIsInBvcnRhbExvY2F0aW9uIiwic2hvd01vZGFsIiwic2V0U2hvd01vZGFsIiwiZGluYW1pY1RvcCIsInNjcm9sbFkiLCJtb2RhbCIsImNyZWF0ZVBvcnRhbCIsImdldEVsZW1lbnRCeUlkIiwiRXJyb3IiLCJNYWluIiwiUmVnaXN0ZXJMYXlvdXQiLCJsYXlvdXRzIiwibWFpbiIsIndpdGhvdXRQaG90byIsIldpdGhvdXRQaG90byIsIlJlZ2lzdGVyIiwiTGF5b3V0V3JhcHBlciIsInByb3BzIiwiTGF5b3V0IiwibGF5b3V0IiwiaG9zdCIsImRlc3RpbmF0aW9uIiwicGF5bG9hZCIsIm9wdGlvbnMiLCJQcm9taXNlIiwicnNsdiIsInJqY3QiLCJBdXRob3JpemF0aW9uIiwiYXhpb3MiLCJtZXRob2QiLCJ0aGVuIiwiY2F0Y2giLCJmaW5hbGx5IiwibmFtZUVRIiwiY2EiLCJjb29raWUiLCJzcGxpdCIsImMiLCJjaGFyQXQiLCJzdWJzdHJpbmciLCJpbmRleE9mIiwicmVtb3ZlQ29va2llIiwiZGF5cyIsImV4cGlyZXMiLCJkYXRlIiwiRGF0ZSIsInNldFRpbWUiLCJnZXRUaW1lIiwidG9VVENTdHJpbmciLCJBVVRIX1VSTCIsIkFDQ09VTlRfVVJMIiwiUkVHSVNURVIiLCJDSEFOR0VfQUNDT1VOVF9JTkZPIiwiQ0hBTkdFX0FDQ09VTlRfSU1BR0UiLCJHRVRfTkVXUyIsIkdFVF9NQVRDSEVTIiwiR0VUX01BVENIRVNfT0ZfTkVYVF9EQVkiLCJHRVRfUFJFRElDVElPTlMiLCJHRVRfRkVFREJBQ0siLCJHRVRfTUFUQ0hFU19CWV9UWVBFIiwiX2ludGVyb3BSZXF1aXJlV2lsZGNhcmQiLCJyZXF1aXJlIiwiZXhwb3J0cyIsIl9yZWFjdCIsIl9yb3V0ZXIiLCJfcm91dGVyMiIsIl91c2VJbnRlcnNlY3Rpb24iLCJwcmVmZXRjaGVkIiwicHJlZmV0Y2giLCJhcyIsImlzTG9jYWxVUkwiLCJjdXJMb2NhbGUiLCJsb2NhbGUiLCJpc01vZGlmaWVkRXZlbnQiLCJjdXJyZW50VGFyZ2V0IiwibWV0YUtleSIsImN0cmxLZXkiLCJzaGlmdEtleSIsImFsdEtleSIsIm5hdGl2ZUV2ZW50Iiwid2hpY2giLCJsaW5rQ2xpY2tlZCIsInJlcGxhY2UiLCJzaGFsbG93Iiwic2Nyb2xsIiwibm9kZU5hbWUiLCJwcmV2ZW50RGVmYXVsdCIsIkxpbmsiLCJjcmVhdGVQcm9wRXJyb3IiLCJhcmdzIiwiZXhwZWN0ZWQiLCJhY3R1YWwiLCJyZXF1aXJlZFByb3BzR3VhcmQiLCJyZXF1aXJlZFByb3BzIiwia2V5cyIsImZvckVhY2giLCJfIiwib3B0aW9uYWxQcm9wc0d1YXJkIiwicGFzc0hyZWYiLCJvcHRpb25hbFByb3BzIiwidmFsVHlwZSIsImhhc1dhcm5lZCIsImRlZmF1bHQiLCJ3YXJuIiwicCIsInVzZU1lbW8iLCJyZXNvbHZlZEhyZWYiLCJyZXNvbHZlZEFzIiwicmVzb2x2ZUhyZWYiLCJjcmVhdGVFbGVtZW50IiwiY2hpbGQiLCJDaGlsZHJlbiIsIm9ubHkiLCJjaGlsZFJlZiIsInJlZiIsInNldEludGVyc2VjdGlvblJlZiIsImlzVmlzaWJsZSIsInVzZUludGVyc2VjdGlvbiIsInJvb3RNYXJnaW4iLCJzZXRSZWYiLCJ1c2VDYWxsYmFjayIsInNob3VsZFByZWZldGNoIiwiaXNQcmVmZXRjaGVkIiwiY2hpbGRQcm9wcyIsImRlZmF1bHRQcmV2ZW50ZWQiLCJvbk1vdXNlRW50ZXIiLCJwcmlvcml0eSIsImxvY2FsZURvbWFpbiIsImlzTG9jYWxlRG9tYWluIiwiZ2V0RG9tYWluTG9jYWxlIiwibG9jYWxlcyIsImRvbWFpbkxvY2FsZXMiLCJhZGRCYXNlUGF0aCIsImFkZExvY2FsZSIsImRlZmF1bHRMb2NhbGUiLCJjbG9uZUVsZW1lbnQiLCJfZGVmYXVsdCIsInJlbW92ZVBhdGhUcmFpbGluZ1NsYXNoIiwicGF0aCIsImVuZHNXaXRoIiwic2xpY2UiLCJub3JtYWxpemVQYXRoVHJhaWxpbmdTbGFzaCIsInByb2Nlc3MiLCJyZXF1ZXN0SWRsZUNhbGxiYWNrIiwic2VsZiIsImNiIiwic3RhcnQiLCJub3ciLCJzZXRUaW1lb3V0IiwiZGlkVGltZW91dCIsInRpbWVSZW1haW5pbmciLCJtYXgiLCJjYW5jZWxJZGxlQ2FsbGJhY2siLCJjbGVhclRpbWVvdXQiLCJfaW50ZXJvcFJlcXVpcmVEZWZhdWx0IiwibWFya0Fzc2V0RXJyb3IiLCJpc0Fzc2V0RXJyb3IiLCJnZXRDbGllbnRCdWlsZE1hbmlmZXN0IiwiX2dldEFzc2V0UGF0aEZyb21Sb3V0ZSIsIl9yZXF1ZXN0SWRsZUNhbGxiYWNrIiwiTVNfTUFYX0lETEVfREVMQVkiLCJ3aXRoRnV0dXJlIiwiZ2VuZXJhdG9yIiwiZW50cnkiLCJnZXQiLCJmdXR1cmUiLCJyZXNvbHZlIiwicHJvbSIsInNldCIsImhhc1ByZWZldGNoIiwiTVNJbnB1dE1ldGhvZENvbnRleHQiLCJkb2N1bWVudE1vZGUiLCJyZWxMaXN0Iiwic3VwcG9ydHMiLCJfdW51c2VkIiwiY2FuUHJlZmV0Y2giLCJwcmVmZXRjaFZpYURvbSIsInJlcyIsInJlaiIsInJlbCIsImNyb3NzT3JpZ2luIiwib25sb2FkIiwib25lcnJvciIsImhlYWQiLCJhcHBlbmRDaGlsZCIsIkFTU0VUX0xPQURfRVJST1IiLCJTeW1ib2wiLCJkZWZpbmVQcm9wZXJ0eSIsImFwcGVuZFNjcmlwdCIsInNjcmlwdCIsInJlamVjdCIsInJlc29sdmVQcm9taXNlV2l0aFRpbWVvdXQiLCJtcyIsImNhbmNlbGxlZCIsInIiLCJfX0JVSUxEX01BTklGRVNUIiwib25CdWlsZE1hbmlmZXN0IiwiX19CVUlMRF9NQU5JRkVTVF9DQiIsImdldEZpbGVzRm9yUm91dGUiLCJhc3NldFByZWZpeCIsInJvdXRlIiwic2NyaXB0cyIsImVuY29kZVVSSSIsImNzcyIsIm1hbmlmZXN0IiwiYWxsRmlsZXMiLCJ2IiwiY3JlYXRlUm91dGVMb2FkZXIiLCJlbnRyeXBvaW50cyIsIk1hcCIsImxvYWRlZFNjcmlwdHMiLCJzdHlsZVNoZWV0cyIsInJvdXRlcyIsIm1heWJlRXhlY3V0ZVNjcmlwdCIsImZldGNoU3R5bGVTaGVldCIsImZldGNoIiwib2siLCJ3aGVuRW50cnlwb2ludCIsIm9uRW50cnlwb2ludCIsImV4ZWN1dGUiLCJmbiIsImNvbXBvbmVudCIsImlucHV0Iiwib2xkIiwibG9hZFJvdXRlIiwiYWxsIiwiaGFzIiwiZW50cnlwb2ludCIsImFzc2lnbiIsImNuIiwibmF2aWdhdG9yIiwiY29ubmVjdGlvbiIsInNhdmVEYXRhIiwiZWZmZWN0aXZlVHlwZSIsIm91dHB1dCIsIm1ha2VQdWJsaWNSb3V0ZXJJbnN0YW5jZSIsIk5leHRSb3V0ZXIiLCJfcm91dGVyQ29udGV4dCIsIl93aXRoUm91dGVyIiwic2luZ2xldG9uUm91dGVyIiwicmVhZHlDYWxsYmFja3MiLCJyZWFkeSIsInVybFByb3BlcnR5RmllbGRzIiwicm91dGVyRXZlbnRzIiwiY29yZU1ldGhvZEZpZWxkcyIsImV2ZW50cyIsImZpZWxkIiwiZ2V0Um91dGVyIiwib24iLCJldmVudEZpZWxkIiwidG9VcHBlckNhc2UiLCJfc2luZ2xldG9uUm91dGVyIiwic3RhY2siLCJ1c2VDb250ZXh0IiwiUm91dGVyQ29udGV4dCIsImNyZWF0ZVJvdXRlciIsImluc3RhbmNlIiwicHJvcGVydHkiLCJBcnJheSIsImlzQXJyYXkiLCJoYXNJbnRlcnNlY3Rpb25PYnNlcnZlciIsIkludGVyc2VjdGlvbk9ic2VydmVyIiwiaXNEaXNhYmxlZCIsInVub2JzZXJ2ZSIsInZpc2libGUiLCJzZXRWaXNpYmxlIiwidW5kZWZpbmVkIiwidGFnTmFtZSIsIm9ic2VydmUiLCJpZGxlQ2FsbGJhY2siLCJlbGVtZW50IiwiY2FsbGJhY2siLCJvYnNlcnZlciIsImNyZWF0ZU9ic2VydmVyIiwiZGVsZXRlIiwic2l6ZSIsImRpc2Nvbm5lY3QiLCJvYnNlcnZlcnMiLCJlbnRyaWVzIiwiaXNJbnRlcnNlY3RpbmciLCJpbnRlcnNlY3Rpb25SYXRpbyIsIndpdGhSb3V0ZXIiLCJDb21wb3NlZENvbXBvbmVudCIsIldpdGhSb3V0ZXJXcmFwcGVyIiwiZ2V0SW5pdGlhbFByb3BzIiwib3JpZ0dldEluaXRpYWxQcm9wcyIsImRpc3BsYXlOYW1lIiwiZGV0ZWN0RG9tYWluTG9jYWxlIiwiZG9tYWluSXRlbXMiLCJob3N0bmFtZSIsImRldGVjdGVkTG9jYWxlIiwiZG9tYWluSXRlbSIsInRvTG93ZXJDYXNlIiwiaXRlbSIsIl9pdGVtJGRvbWFpbiIsIl9pdGVtJGxvY2FsZXMiLCJkb21haW5Ib3N0bmFtZSIsImRvbWFpbiIsInNvbWUiLCJub3JtYWxpemVMb2NhbGVQYXRoIiwicGF0aG5hbWVQYXJ0cyIsInNwbGljZSIsImpvaW4iLCJtaXR0IiwiY3JlYXRlIiwiaGFuZGxlciIsIm9mZiIsImVtaXQiLCJldnRzIiwiZGVsTG9jYWxlIiwiaGFzQmFzZVBhdGgiLCJkZWxCYXNlUGF0aCIsImludGVycG9sYXRlQXMiLCJfbm9ybWFsaXplVHJhaWxpbmdTbGFzaCIsIl9yb3V0ZUxvYWRlciIsIl9kZW5vcm1hbGl6ZVBhZ2VQYXRoIiwiX25vcm1hbGl6ZUxvY2FsZVBhdGgiLCJfbWl0dCIsIl91dGlscyIsIl9pc0R5bmFtaWMiLCJfcGFyc2VSZWxhdGl2ZVVybCIsIl9xdWVyeXN0cmluZyIsIl9yZXNvbHZlUmV3cml0ZXMiLCJfcm91dGVNYXRjaGVyIiwiX3JvdXRlUmVnZXgiLCJvYmoiLCJfX2VzTW9kdWxlIiwiYmFzZVBhdGgiLCJidWlsZENhbmNlbGxhdGlvbkVycm9yIiwiYWRkUGF0aFByZWZpeCIsInByZWZpeCIsInN0YXJ0c1dpdGgiLCJwYXRoTm9RdWVyeUhhc2giLCJkZXRlY3RlZERvbWFpbiIsImh0dHAiLCJwYXRoTG93ZXIiLCJsb2NhbGVMb3dlciIsInN1YnN0ciIsInF1ZXJ5SW5kZXgiLCJoYXNoSW5kZXgiLCJsb2NhdGlvbk9yaWdpbiIsImdldExvY2F0aW9uT3JpZ2luIiwicmVzb2x2ZWQiLCJVUkwiLCJvcmlnaW4iLCJhc1BhdGhuYW1lIiwicXVlcnkiLCJpbnRlcnBvbGF0ZWRSb3V0ZSIsImR5bmFtaWNSZWdleCIsImdldFJvdXRlUmVnZXgiLCJkeW5hbWljR3JvdXBzIiwiZ3JvdXBzIiwiZHluYW1pY01hdGNoZXMiLCJnZXRSb3V0ZU1hdGNoZXIiLCJwYXJhbXMiLCJldmVyeSIsInBhcmFtIiwicmVwZWF0Iiwib3B0aW9uYWwiLCJyZXBsYWNlZCIsInNlZ21lbnQiLCJlbmNvZGVVUklDb21wb25lbnQiLCJyZXN1bHQiLCJvbWl0UGFybXNGcm9tUXVlcnkiLCJmaWx0ZXJlZFF1ZXJ5IiwiaW5jbHVkZXMiLCJyZXNvbHZlQXMiLCJiYXNlIiwidXJsQXNTdHJpbmciLCJmb3JtYXRXaXRoVmFsaWRhdGlvbiIsImFzUGF0aCIsImZpbmFsVXJsIiwiaW50ZXJwb2xhdGVkQXMiLCJpc0R5bmFtaWNSb3V0ZSIsInNlYXJjaFBhcmFtcyIsInNlYXJjaFBhcmFtc1RvVXJsUXVlcnkiLCJoYXNoIiwic3RyaXBPcmlnaW4iLCJwcmVwYXJlVXJsQXMiLCJocmVmSGFkT3JpZ2luIiwiYXNIYWRPcmlnaW4iLCJwcmVwYXJlZFVybCIsInByZXBhcmVkQXMiLCJyZXNvbHZlRHluYW1pY1JvdXRlIiwicGFnZXMiLCJjbGVhblBhdGhuYW1lIiwiZGVub3JtYWxpemVQYWdlUGF0aCIsInBhZ2UiLCJyZSIsIm1hbnVhbFNjcm9sbFJlc3RvcmF0aW9uIiwiU1NHX0RBVEFfTk9UX0ZPVU5EIiwiZmV0Y2hSZXRyeSIsImF0dGVtcHRzIiwiY3JlZGVudGlhbHMiLCJqc29uIiwibm90Rm91bmQiLCJmZXRjaE5leHREYXRhIiwiZGF0YUhyZWYiLCJpc1NlcnZlclJlbmRlciIsIlJvdXRlciIsImNvbnN0cnVjdG9yIiwiX3BhdGhuYW1lIiwiX3F1ZXJ5IiwiX2FzIiwiaW5pdGlhbFByb3BzIiwicGFnZUxvYWRlciIsIkFwcCIsIndyYXBBcHAiLCJDb21wb25lbnQiLCJzdWJzY3JpcHRpb24iLCJpc0ZhbGxiYWNrIiwiaXNQcmV2aWV3IiwiY29tcG9uZW50cyIsInNkYyIsInNkciIsInN1YiIsImNsYyIsIl9icHMiLCJfd3JhcEFwcCIsImlzU3NyIiwiX2luRmxpZ2h0Um91dGUiLCJfc2hhbGxvdyIsImlzUmVhZHkiLCJfaWR4Iiwib25Qb3BTdGF0ZSIsImNoYW5nZVN0YXRlIiwiZ2V0VVJMIiwiX19OIiwiZm9yY2VkU2Nyb2xsIiwiaWR4IiwicGFyc2VSZWxhdGl2ZVVybCIsImNoYW5nZSIsImluaXRpYWwiLCJfX05fU1NHIiwiX19OX1NTUCIsImF1dG9FeHBvcnREeW5hbWljIiwiX19ORVhUX0RBVEFfXyIsImF1dG9FeHBvcnQiLCJnc3NwIiwiZ2lwIiwibG9jYXRpb24iLCJzZWFyY2giLCJyZWxvYWQiLCJiYWNrIiwiaGlzdG9yeSIsInNob3VsZFJlc29sdmVIcmVmIiwiX2giLCJfc2hvdWxkUmVzb2x2ZUhyZWYiLCJsb2NhbGVDaGFuZ2UiLCJwYXJzZWRBcyIsImxvY2FsZVBhdGhSZXN1bHQiLCJkaWROYXZpZ2F0ZSIsIl90aGlzJGxvY2FsZXMiLCJhc05vQmFzZVBhdGgiLCJTVCIsInBlcmZvcm1hbmNlIiwibWFyayIsInJvdXRlUHJvcHMiLCJhYm9ydENvbXBvbmVudExvYWQiLCJjbGVhbmVkQXMiLCJvbmx5QUhhc2hDaGFuZ2UiLCJzY3JvbGxUb0hhc2giLCJub3RpZnkiLCJwYXJzZWQiLCJyZXdyaXRlcyIsImdldFBhZ2VMaXN0IiwiX19yZXdyaXRlcyIsInVybElzTmV3Iiwicm91dGVSZWdleCIsInJvdXRlTWF0Y2giLCJzaG91bGRJbnRlcnBvbGF0ZSIsIm1pc3NpbmdQYXJhbXMiLCJfc2VsZiRfX05FWFRfREFUQV9fJHAiLCJfc2VsZiRfX05FWFRfREFUQV9fJHAyIiwiX29wdGlvbnMkc2Nyb2xsIiwicm91dGVJbmZvIiwiZ2V0Um91dGVJbmZvIiwicGFnZVByb3BzIiwiX19OX1JFRElSRUNUIiwicGFyc2VkSHJlZiIsIm5ld1VybCIsIm5ld0FzIiwiX19OX1BSRVZJRVciLCJub3RGb3VuZFJvdXRlIiwiZmV0Y2hDb21wb25lbnQiLCJhcHBDb21wIiwibmV4dCIsImlzUHJlcmVuZGVyZWQiLCJzdGF0dXNDb2RlIiwiaXNWYWxpZFNoYWxsb3dSb3V0ZSIsInNob3VsZFNjcm9sbCIsInJlc2V0U2Nyb2xsIiwieSIsImRvY3VtZW50RWxlbWVudCIsImhhbmRsZVJvdXRlSW5mb0Vycm9yIiwibG9hZEVycm9yRmFpbCIsImdpcEVyciIsInJvdXRlSW5mb0VyciIsImV4aXN0aW5nUm91dGVJbmZvIiwiY2FjaGVkUm91dGVJbmZvIiwibW9kIiwiaXNWYWxpZEVsZW1lbnRUeXBlIiwiZ2V0RGF0YUhyZWYiLCJfZ2V0RGF0YSIsIl9nZXRTdGF0aWNEYXRhIiwiX2dldFNlcnZlckRhdGEiLCJiZWZvcmVQb3BTdGF0ZSIsIm9sZFVybE5vSGFzaCIsIm9sZEhhc2giLCJuZXdVcmxOb0hhc2giLCJuZXdIYXNoIiwiaWRFbCIsInNjcm9sbEludG9WaWV3IiwibmFtZUVsIiwiZ2V0RWxlbWVudHNCeU5hbWUiLCJfaXNTc2ciLCJpc1NzZyIsImNhbmNlbCIsImNvbXBvbmVudFJlc3VsdCIsImxvYWRQYWdlIiwiY2FjaGVLZXkiLCJyZXNvdXJjZUtleSIsImN0eCIsIkFwcFRyZWUiLCJsb2FkR2V0SW5pdGlhbFByb3BzIiwiZm9ybWF0VXJsIiwicXVlcnlzdHJpbmciLCJfZ2V0UmVxdWlyZVdpbGRjYXJkQ2FjaGUiLCJXZWFrTWFwIiwiY2FjaGUiLCJuZXdPYmoiLCJoYXNQcm9wZXJ0eURlc2NyaXB0b3IiLCJnZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3IiLCJwcm90b3R5cGUiLCJoYXNPd25Qcm9wZXJ0eSIsImNhbGwiLCJkZXNjIiwic2xhc2hlZFByb3RvY29scyIsInVybE9iaiIsInByb3RvY29sIiwicG9ydCIsIlN0cmluZyIsInVybFF1ZXJ5VG9TZWFyY2hQYXJhbXMiLCJzbGFzaGVzIiwiVEVTVF9ST1VURSIsImdsb2JhbEJhc2UiLCJyZXNvbHZlZEJhc2UiLCJzdHJpbmdpZnlVcmxRdWVyeVBhcmFtIiwiaXNOYU4iLCJ1cmxRdWVyeSIsIlVSTFNlYXJjaFBhcmFtcyIsImFwcGVuZCIsInNlYXJjaFBhcmFtc0xpc3QiLCJmcm9tIiwiZXhlYyIsImRlY29kZSIsImRlY29kZVVSSUNvbXBvbmVudCIsInNsdWdOYW1lIiwiZyIsIm0iLCJwb3MiLCJlc2NhcGVSZWdleCIsInN0ciIsInBhcnNlUGFyYW1ldGVyIiwibm9ybWFsaXplZFJvdXRlIiwic2VnbWVudHMiLCJncm91cEluZGV4IiwicGFyYW1ldGVyaXplZFJvdXRlIiwicm91dGVLZXlDaGFyQ29kZSIsInJvdXRlS2V5Q2hhckxlbmd0aCIsImdldFNhZmVSb3V0ZUtleSIsInJvdXRlS2V5IiwiZnJvbUNoYXJDb2RlIiwicm91dGVLZXlzIiwibmFtZWRQYXJhbWV0ZXJpemVkUm91dGUiLCJjbGVhbmVkS2V5IiwiaW52YWxpZEtleSIsInBhcnNlSW50IiwiUmVnRXhwIiwibmFtZWRSZWdleCIsImV4ZWNPbmNlIiwiZ2V0RGlzcGxheU5hbWUiLCJpc1Jlc1NlbnQiLCJfZm9ybWF0VXJsIiwidXNlZCIsImZpbmlzaGVkIiwiaGVhZGVyc1NlbnQiLCJfQXBwJHByb3RvdHlwZSIsInVybE9iamVjdEtleXMiLCJTUCIsIm1lYXN1cmUiLCJfX1BhZ2VfTmV4dF9UcmFuc2xhdGVfXyIsIk15QXBwIiwic3RvcmUiLCJwZXJzaXN0b3IiLCJnZXRTZXJ2ZXJTaWRlUHJvcHMiLCJjb250ZXh0IiwicmVzZXRTZXJ2ZXJDb250ZXh0IiwiX19hcHBXaXRoSTE4biIsIl9faTE4bkNvbmZpZyIsImlzTG9hZGVyIiwic2tpcEluaXRpYWxQcm9wcyIsImxvYWRMb2NhbGVGcm9tIiwibCIsIm4iLCJtYXRjaFNsaWNlIiwiY3JlYXRlU2xpY2UiLCJpbml0aWFsU3RhdGUiLCJtYXRjaElkIiwicmVkdWNlcnMiLCJzZXRNYXRjaElkIiwiYWN0aW9uIiwiYWN0aW9ucyIsImdldE1hdGNoSWQiLCJtYXRjaCIsInJlZHVjZXIiLCJ1c2VyU2xpY2UiLCJwZXJzaXN0Q29uZmlnIiwidmVyc2lvbiIsInN0b3JhZ2UiLCJwZXJzaXN0ZWRSZWR1Y2VyIiwicGVyc2lzdFJlZHVjZXIiLCJjb21iaW5lUmVkdWNlcnMiLCJ1c2VyUmVkdWNlciIsIm1hdGNoUmVkdWNlciIsImNvbmZpZ3VyZVN0b3JlIiwibWlkZGxld2FyZSIsImdldERlZmF1bHRNaWRkbGV3YXJlIiwic2VyaWFsaXphYmxlQ2hlY2siLCJpZ25vcmVkQWN0aW9ucyIsIkZMVVNIIiwiUkVIWURSQVRFIiwiUEFVU0UiLCJQRVJTSVNUIiwiUFVSR0UiLCJwZXJzaXN0U3RvcmUiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FB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b0gsRTs7Ozs7Ozs7Ozs7O0FDQXJJLCtEQUFnQixDQUFDLG9KQUFvSix5T0FBeU8sRTs7Ozs7Ozs7Ozs7O0FDQTlZLCtEQUFnQixDQUFDLG9KQUFvSixxUkFBcVIsRTs7Ozs7Ozs7OztBQ0ExYjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7OztBQ1BBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7QUNMQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7OztBQ0pBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7O0FDSkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7QUNKQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7QUNIQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7OztBQ1BBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7O0FDSkE7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7O0FDSEE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7QUNWQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7QUNOQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7OztBQ0pBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7QUNSQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7OztBQ1BBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7QUNSQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7O0FDTEE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7QUNWQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7O0FDUkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7OztBQ1hBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7QUNSQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7OztBQ1BBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7O0FDUEE7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7O0FDSEE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7O0FDWkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7OztBQ0xBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7O0FDUEE7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7O0FDSEE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7QUNKQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7QUNIQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7O0FDZEE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7QUNQQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNMQSxxRDs7Ozs7Ozs7Ozs7QUNBQSw4Qzs7Ozs7Ozs7Ozs7QUNBQSxtQzs7Ozs7Ozs7Ozs7QUNBQSx3RDs7Ozs7Ozs7Ozs7QUNBQSwyRDs7Ozs7Ozs7Ozs7QUNBQSx5RTs7Ozs7Ozs7Ozs7QUNBQSxpRzs7Ozs7Ozs7Ozs7QUNBQSx1Qzs7Ozs7Ozs7Ozs7QUNBQSxtQzs7Ozs7Ozs7Ozs7QUNBQSxpRDs7Ozs7Ozs7Ozs7QUNBQSx1Qzs7Ozs7Ozs7Ozs7QUNBQSxrRDs7Ozs7Ozs7Ozs7QUNBQSxnRDs7Ozs7Ozs7Ozs7QUNBQSw2Qzs7Ozs7Ozs7Ozs7QUNBQSxzQzs7Ozs7Ozs7Ozs7QUNBQSx5Qzs7Ozs7Ozs7Ozs7QUNBQSw0Qzs7Ozs7Ozs7Ozs7QUNBQSxpRDs7Ozs7Ozs7Ozs7QUNBQSxtRDs7Ozs7Ozs7Ozs7QUNBQSwyQzs7Ozs7Ozs7Ozs7QUNBQSw2RDs7Ozs7Ozs7Ozs7QUNBQSx1RDs7Ozs7Ozs7Ozs7QUNBQSxpQzs7Ozs7Ozs7OztBQ0FBLGUiLCJmaWxlIjoicGFnZXMvX2FwcC5qcyIsInNvdXJjZXNDb250ZW50IjpbInZhciBtYXAgPSB7XG5cdFwiLi9hbS9hYm91dFVzXCI6IFtcblx0XHRcIi4vbG9jYWxlcy9hbS9hYm91dFVzLmpzb25cIixcblx0XHRcImxvY2FsZXNfYW1fYWJvdXRVc19qc29uXCJcblx0XSxcblx0XCIuL2FtL2Fib3V0VXMuanNvblwiOiBbXG5cdFx0XCIuL2xvY2FsZXMvYW0vYWJvdXRVcy5qc29uXCIsXG5cdFx0XCJsb2NhbGVzX2FtX2Fib3V0VXNfanNvblwiXG5cdF0sXG5cdFwiLi9hbS9jb21tb25cIjogW1xuXHRcdFwiLi9sb2NhbGVzL2FtL2NvbW1vbi5qc29uXCIsXG5cdFx0XCJsb2NhbGVzX2FtX2NvbW1vbl9qc29uXCJcblx0XSxcblx0XCIuL2FtL2NvbW1vbi5qc29uXCI6IFtcblx0XHRcIi4vbG9jYWxlcy9hbS9jb21tb24uanNvblwiLFxuXHRcdFwibG9jYWxlc19hbV9jb21tb25fanNvblwiXG5cdF0sXG5cdFwiLi9hbS9nYW1lc1wiOiBbXG5cdFx0XCIuL2xvY2FsZXMvYW0vZ2FtZXMuanNvblwiLFxuXHRcdFwibG9jYWxlc19hbV9nYW1lc19qc29uXCJcblx0XSxcblx0XCIuL2FtL2dhbWVzLmpzb25cIjogW1xuXHRcdFwiLi9sb2NhbGVzL2FtL2dhbWVzLmpzb25cIixcblx0XHRcImxvY2FsZXNfYW1fZ2FtZXNfanNvblwiXG5cdF0sXG5cdFwiLi9hbS9ob21lXCI6IFtcblx0XHRcIi4vbG9jYWxlcy9hbS9ob21lLmpzb25cIixcblx0XHRcImxvY2FsZXNfYW1faG9tZV9qc29uXCJcblx0XSxcblx0XCIuL2FtL2hvbWUuanNvblwiOiBbXG5cdFx0XCIuL2xvY2FsZXMvYW0vaG9tZS5qc29uXCIsXG5cdFx0XCJsb2NhbGVzX2FtX2hvbWVfanNvblwiXG5cdF0sXG5cdFwiLi9hbS9wZXJzb25hbFwiOiBbXG5cdFx0XCIuL2xvY2FsZXMvYW0vcGVyc29uYWwuanNvblwiLFxuXHRcdFwibG9jYWxlc19hbV9wZXJzb25hbF9qc29uXCJcblx0XSxcblx0XCIuL2FtL3BlcnNvbmFsLmpzb25cIjogW1xuXHRcdFwiLi9sb2NhbGVzL2FtL3BlcnNvbmFsLmpzb25cIixcblx0XHRcImxvY2FsZXNfYW1fcGVyc29uYWxfanNvblwiXG5cdF0sXG5cdFwiLi9hbS9wcmVkaWN0aW9uXCI6IFtcblx0XHRcIi4vbG9jYWxlcy9hbS9wcmVkaWN0aW9uLmpzb25cIixcblx0XHRcImxvY2FsZXNfYW1fcHJlZGljdGlvbl9qc29uXCJcblx0XSxcblx0XCIuL2FtL3ByZWRpY3Rpb24uanNvblwiOiBbXG5cdFx0XCIuL2xvY2FsZXMvYW0vcHJlZGljdGlvbi5qc29uXCIsXG5cdFx0XCJsb2NhbGVzX2FtX3ByZWRpY3Rpb25fanNvblwiXG5cdF0sXG5cdFwiLi9hbS9zdGF0aXN0aWNzXCI6IFtcblx0XHRcIi4vbG9jYWxlcy9hbS9zdGF0aXN0aWNzLmpzb25cIixcblx0XHRcImxvY2FsZXNfYW1fc3RhdGlzdGljc19qc29uXCJcblx0XSxcblx0XCIuL2FtL3N0YXRpc3RpY3MuanNvblwiOiBbXG5cdFx0XCIuL2xvY2FsZXMvYW0vc3RhdGlzdGljcy5qc29uXCIsXG5cdFx0XCJsb2NhbGVzX2FtX3N0YXRpc3RpY3NfanNvblwiXG5cdF0sXG5cdFwiLi9hbS90ZXN0aW1vbmlhbHNcIjogW1xuXHRcdFwiLi9sb2NhbGVzL2FtL3Rlc3RpbW9uaWFscy5qc29uXCIsXG5cdFx0XCJsb2NhbGVzX2FtX3Rlc3RpbW9uaWFsc19qc29uXCJcblx0XSxcblx0XCIuL2FtL3Rlc3RpbW9uaWFscy5qc29uXCI6IFtcblx0XHRcIi4vbG9jYWxlcy9hbS90ZXN0aW1vbmlhbHMuanNvblwiLFxuXHRcdFwibG9jYWxlc19hbV90ZXN0aW1vbmlhbHNfanNvblwiXG5cdF0sXG5cdFwiLi9kZXUvYWJvdXRVc1wiOiBbXG5cdFx0XCIuL2xvY2FsZXMvZGV1L2Fib3V0VXMuanNvblwiLFxuXHRcdFwibG9jYWxlc19kZXVfYWJvdXRVc19qc29uXCJcblx0XSxcblx0XCIuL2RldS9hYm91dFVzLmpzb25cIjogW1xuXHRcdFwiLi9sb2NhbGVzL2RldS9hYm91dFVzLmpzb25cIixcblx0XHRcImxvY2FsZXNfZGV1X2Fib3V0VXNfanNvblwiXG5cdF0sXG5cdFwiLi9kZXUvY29tbW9uXCI6IFtcblx0XHRcIi4vbG9jYWxlcy9kZXUvY29tbW9uLmpzb25cIixcblx0XHRcImxvY2FsZXNfZGV1X2NvbW1vbl9qc29uXCJcblx0XSxcblx0XCIuL2RldS9jb21tb24uanNvblwiOiBbXG5cdFx0XCIuL2xvY2FsZXMvZGV1L2NvbW1vbi5qc29uXCIsXG5cdFx0XCJsb2NhbGVzX2RldV9jb21tb25fanNvblwiXG5cdF0sXG5cdFwiLi9kZXUvZ2FtZXNcIjogW1xuXHRcdFwiLi9sb2NhbGVzL2RldS9nYW1lcy5qc29uXCIsXG5cdFx0XCJsb2NhbGVzX2RldV9nYW1lc19qc29uXCJcblx0XSxcblx0XCIuL2RldS9nYW1lcy5qc29uXCI6IFtcblx0XHRcIi4vbG9jYWxlcy9kZXUvZ2FtZXMuanNvblwiLFxuXHRcdFwibG9jYWxlc19kZXVfZ2FtZXNfanNvblwiXG5cdF0sXG5cdFwiLi9kZXUvaG9tZVwiOiBbXG5cdFx0XCIuL2xvY2FsZXMvZGV1L2hvbWUuanNvblwiLFxuXHRcdFwibG9jYWxlc19kZXVfaG9tZV9qc29uXCJcblx0XSxcblx0XCIuL2RldS9ob21lLmpzb25cIjogW1xuXHRcdFwiLi9sb2NhbGVzL2RldS9ob21lLmpzb25cIixcblx0XHRcImxvY2FsZXNfZGV1X2hvbWVfanNvblwiXG5cdF0sXG5cdFwiLi9kZXUvcGVyc29uYWxcIjogW1xuXHRcdFwiLi9sb2NhbGVzL2RldS9wZXJzb25hbC5qc29uXCIsXG5cdFx0XCJsb2NhbGVzX2RldV9wZXJzb25hbF9qc29uXCJcblx0XSxcblx0XCIuL2RldS9wZXJzb25hbC5qc29uXCI6IFtcblx0XHRcIi4vbG9jYWxlcy9kZXUvcGVyc29uYWwuanNvblwiLFxuXHRcdFwibG9jYWxlc19kZXVfcGVyc29uYWxfanNvblwiXG5cdF0sXG5cdFwiLi9kZXUvcHJlZGljdGlvblwiOiBbXG5cdFx0XCIuL2xvY2FsZXMvZGV1L3ByZWRpY3Rpb24uanNvblwiLFxuXHRcdFwibG9jYWxlc19kZXVfcHJlZGljdGlvbl9qc29uXCJcblx0XSxcblx0XCIuL2RldS9wcmVkaWN0aW9uLmpzb25cIjogW1xuXHRcdFwiLi9sb2NhbGVzL2RldS9wcmVkaWN0aW9uLmpzb25cIixcblx0XHRcImxvY2FsZXNfZGV1X3ByZWRpY3Rpb25fanNvblwiXG5cdF0sXG5cdFwiLi9kZXUvc3RhdGlzdGljc1wiOiBbXG5cdFx0XCIuL2xvY2FsZXMvZGV1L3N0YXRpc3RpY3MuanNvblwiLFxuXHRcdFwibG9jYWxlc19kZXVfc3RhdGlzdGljc19qc29uXCJcblx0XSxcblx0XCIuL2RldS9zdGF0aXN0aWNzLmpzb25cIjogW1xuXHRcdFwiLi9sb2NhbGVzL2RldS9zdGF0aXN0aWNzLmpzb25cIixcblx0XHRcImxvY2FsZXNfZGV1X3N0YXRpc3RpY3NfanNvblwiXG5cdF0sXG5cdFwiLi9kZXUvdGVzdGltb25pYWxzXCI6IFtcblx0XHRcIi4vbG9jYWxlcy9kZXUvdGVzdGltb25pYWxzLmpzb25cIixcblx0XHRcImxvY2FsZXNfZGV1X3Rlc3RpbW9uaWFsc19qc29uXCJcblx0XSxcblx0XCIuL2RldS90ZXN0aW1vbmlhbHMuanNvblwiOiBbXG5cdFx0XCIuL2xvY2FsZXMvZGV1L3Rlc3RpbW9uaWFscy5qc29uXCIsXG5cdFx0XCJsb2NhbGVzX2RldV90ZXN0aW1vbmlhbHNfanNvblwiXG5cdF0sXG5cdFwiLi9lbi9hYm91dFVzXCI6IFtcblx0XHRcIi4vbG9jYWxlcy9lbi9hYm91dFVzLmpzb25cIixcblx0XHRcImxvY2FsZXNfZW5fYWJvdXRVc19qc29uXCJcblx0XSxcblx0XCIuL2VuL2Fib3V0VXMuanNvblwiOiBbXG5cdFx0XCIuL2xvY2FsZXMvZW4vYWJvdXRVcy5qc29uXCIsXG5cdFx0XCJsb2NhbGVzX2VuX2Fib3V0VXNfanNvblwiXG5cdF0sXG5cdFwiLi9lbi9jb21tb25cIjogW1xuXHRcdFwiLi9sb2NhbGVzL2VuL2NvbW1vbi5qc29uXCIsXG5cdFx0XCJsb2NhbGVzX2VuX2NvbW1vbl9qc29uXCJcblx0XSxcblx0XCIuL2VuL2NvbW1vbi5qc29uXCI6IFtcblx0XHRcIi4vbG9jYWxlcy9lbi9jb21tb24uanNvblwiLFxuXHRcdFwibG9jYWxlc19lbl9jb21tb25fanNvblwiXG5cdF0sXG5cdFwiLi9lbi9nYW1lc1wiOiBbXG5cdFx0XCIuL2xvY2FsZXMvZW4vZ2FtZXMuanNvblwiLFxuXHRcdFwibG9jYWxlc19lbl9nYW1lc19qc29uXCJcblx0XSxcblx0XCIuL2VuL2dhbWVzLmpzb25cIjogW1xuXHRcdFwiLi9sb2NhbGVzL2VuL2dhbWVzLmpzb25cIixcblx0XHRcImxvY2FsZXNfZW5fZ2FtZXNfanNvblwiXG5cdF0sXG5cdFwiLi9lbi9ob21lXCI6IFtcblx0XHRcIi4vbG9jYWxlcy9lbi9ob21lLmpzb25cIixcblx0XHRcImxvY2FsZXNfZW5faG9tZV9qc29uXCJcblx0XSxcblx0XCIuL2VuL2hvbWUuanNvblwiOiBbXG5cdFx0XCIuL2xvY2FsZXMvZW4vaG9tZS5qc29uXCIsXG5cdFx0XCJsb2NhbGVzX2VuX2hvbWVfanNvblwiXG5cdF0sXG5cdFwiLi9lbi9wZXJzb25hbFwiOiBbXG5cdFx0XCIuL2xvY2FsZXMvZW4vcGVyc29uYWwuanNvblwiLFxuXHRcdFwibG9jYWxlc19lbl9wZXJzb25hbF9qc29uXCJcblx0XSxcblx0XCIuL2VuL3BlcnNvbmFsLmpzb25cIjogW1xuXHRcdFwiLi9sb2NhbGVzL2VuL3BlcnNvbmFsLmpzb25cIixcblx0XHRcImxvY2FsZXNfZW5fcGVyc29uYWxfanNvblwiXG5cdF0sXG5cdFwiLi9lbi9wcmVkaWN0aW9uXCI6IFtcblx0XHRcIi4vbG9jYWxlcy9lbi9wcmVkaWN0aW9uLmpzb25cIixcblx0XHRcImxvY2FsZXNfZW5fcHJlZGljdGlvbl9qc29uXCJcblx0XSxcblx0XCIuL2VuL3ByZWRpY3Rpb24uanNvblwiOiBbXG5cdFx0XCIuL2xvY2FsZXMvZW4vcHJlZGljdGlvbi5qc29uXCIsXG5cdFx0XCJsb2NhbGVzX2VuX3ByZWRpY3Rpb25fanNvblwiXG5cdF0sXG5cdFwiLi9lbi9zdGF0aXN0aWNzXCI6IFtcblx0XHRcIi4vbG9jYWxlcy9lbi9zdGF0aXN0aWNzLmpzb25cIixcblx0XHRcImxvY2FsZXNfZW5fc3RhdGlzdGljc19qc29uXCJcblx0XSxcblx0XCIuL2VuL3N0YXRpc3RpY3MuanNvblwiOiBbXG5cdFx0XCIuL2xvY2FsZXMvZW4vc3RhdGlzdGljcy5qc29uXCIsXG5cdFx0XCJsb2NhbGVzX2VuX3N0YXRpc3RpY3NfanNvblwiXG5cdF0sXG5cdFwiLi9lbi90ZXN0aW1vbmlhbHNcIjogW1xuXHRcdFwiLi9sb2NhbGVzL2VuL3Rlc3RpbW9uaWFscy5qc29uXCIsXG5cdFx0XCJsb2NhbGVzX2VuX3Rlc3RpbW9uaWFsc19qc29uXCJcblx0XSxcblx0XCIuL2VuL3Rlc3RpbW9uaWFscy5qc29uXCI6IFtcblx0XHRcIi4vbG9jYWxlcy9lbi90ZXN0aW1vbmlhbHMuanNvblwiLFxuXHRcdFwibG9jYWxlc19lbl90ZXN0aW1vbmlhbHNfanNvblwiXG5cdF0sXG5cdFwiLi9lc3AvYWJvdXRVc1wiOiBbXG5cdFx0XCIuL2xvY2FsZXMvZXNwL2Fib3V0VXMuanNvblwiLFxuXHRcdFwibG9jYWxlc19lc3BfYWJvdXRVc19qc29uXCJcblx0XSxcblx0XCIuL2VzcC9hYm91dFVzLmpzb25cIjogW1xuXHRcdFwiLi9sb2NhbGVzL2VzcC9hYm91dFVzLmpzb25cIixcblx0XHRcImxvY2FsZXNfZXNwX2Fib3V0VXNfanNvblwiXG5cdF0sXG5cdFwiLi9lc3AvY29tbW9uXCI6IFtcblx0XHRcIi4vbG9jYWxlcy9lc3AvY29tbW9uLmpzb25cIixcblx0XHRcImxvY2FsZXNfZXNwX2NvbW1vbl9qc29uXCJcblx0XSxcblx0XCIuL2VzcC9jb21tb24uanNvblwiOiBbXG5cdFx0XCIuL2xvY2FsZXMvZXNwL2NvbW1vbi5qc29uXCIsXG5cdFx0XCJsb2NhbGVzX2VzcF9jb21tb25fanNvblwiXG5cdF0sXG5cdFwiLi9lc3AvZ2FtZXNcIjogW1xuXHRcdFwiLi9sb2NhbGVzL2VzcC9nYW1lcy5qc29uXCIsXG5cdFx0XCJsb2NhbGVzX2VzcF9nYW1lc19qc29uXCJcblx0XSxcblx0XCIuL2VzcC9nYW1lcy5qc29uXCI6IFtcblx0XHRcIi4vbG9jYWxlcy9lc3AvZ2FtZXMuanNvblwiLFxuXHRcdFwibG9jYWxlc19lc3BfZ2FtZXNfanNvblwiXG5cdF0sXG5cdFwiLi9lc3AvaG9tZVwiOiBbXG5cdFx0XCIuL2xvY2FsZXMvZXNwL2hvbWUuanNvblwiLFxuXHRcdFwibG9jYWxlc19lc3BfaG9tZV9qc29uXCJcblx0XSxcblx0XCIuL2VzcC9ob21lLmpzb25cIjogW1xuXHRcdFwiLi9sb2NhbGVzL2VzcC9ob21lLmpzb25cIixcblx0XHRcImxvY2FsZXNfZXNwX2hvbWVfanNvblwiXG5cdF0sXG5cdFwiLi9lc3AvcGVyc29uYWxcIjogW1xuXHRcdFwiLi9sb2NhbGVzL2VzcC9wZXJzb25hbC5qc29uXCIsXG5cdFx0XCJsb2NhbGVzX2VzcF9wZXJzb25hbF9qc29uXCJcblx0XSxcblx0XCIuL2VzcC9wZXJzb25hbC5qc29uXCI6IFtcblx0XHRcIi4vbG9jYWxlcy9lc3AvcGVyc29uYWwuanNvblwiLFxuXHRcdFwibG9jYWxlc19lc3BfcGVyc29uYWxfanNvblwiXG5cdF0sXG5cdFwiLi9lc3AvcHJlZGljdGlvblwiOiBbXG5cdFx0XCIuL2xvY2FsZXMvZXNwL3ByZWRpY3Rpb24uanNvblwiLFxuXHRcdFwibG9jYWxlc19lc3BfcHJlZGljdGlvbl9qc29uXCJcblx0XSxcblx0XCIuL2VzcC9wcmVkaWN0aW9uLmpzb25cIjogW1xuXHRcdFwiLi9sb2NhbGVzL2VzcC9wcmVkaWN0aW9uLmpzb25cIixcblx0XHRcImxvY2FsZXNfZXNwX3ByZWRpY3Rpb25fanNvblwiXG5cdF0sXG5cdFwiLi9lc3Avc3RhdGlzdGljc1wiOiBbXG5cdFx0XCIuL2xvY2FsZXMvZXNwL3N0YXRpc3RpY3MuanNvblwiLFxuXHRcdFwibG9jYWxlc19lc3Bfc3RhdGlzdGljc19qc29uXCJcblx0XSxcblx0XCIuL2VzcC9zdGF0aXN0aWNzLmpzb25cIjogW1xuXHRcdFwiLi9sb2NhbGVzL2VzcC9zdGF0aXN0aWNzLmpzb25cIixcblx0XHRcImxvY2FsZXNfZXNwX3N0YXRpc3RpY3NfanNvblwiXG5cdF0sXG5cdFwiLi9lc3AvdGVzdGltb25pYWxzXCI6IFtcblx0XHRcIi4vbG9jYWxlcy9lc3AvdGVzdGltb25pYWxzLmpzb25cIixcblx0XHRcImxvY2FsZXNfZXNwX3Rlc3RpbW9uaWFsc19qc29uXCJcblx0XSxcblx0XCIuL2VzcC90ZXN0aW1vbmlhbHMuanNvblwiOiBbXG5cdFx0XCIuL2xvY2FsZXMvZXNwL3Rlc3RpbW9uaWFscy5qc29uXCIsXG5cdFx0XCJsb2NhbGVzX2VzcF90ZXN0aW1vbmlhbHNfanNvblwiXG5cdF0sXG5cdFwiLi9mci9hYm91dFVzXCI6IFtcblx0XHRcIi4vbG9jYWxlcy9mci9hYm91dFVzLmpzb25cIixcblx0XHRcImxvY2FsZXNfZnJfYWJvdXRVc19qc29uXCJcblx0XSxcblx0XCIuL2ZyL2Fib3V0VXMuanNvblwiOiBbXG5cdFx0XCIuL2xvY2FsZXMvZnIvYWJvdXRVcy5qc29uXCIsXG5cdFx0XCJsb2NhbGVzX2ZyX2Fib3V0VXNfanNvblwiXG5cdF0sXG5cdFwiLi9mci9jb21tb25cIjogW1xuXHRcdFwiLi9sb2NhbGVzL2ZyL2NvbW1vbi5qc29uXCIsXG5cdFx0XCJsb2NhbGVzX2ZyX2NvbW1vbl9qc29uXCJcblx0XSxcblx0XCIuL2ZyL2NvbW1vbi5qc29uXCI6IFtcblx0XHRcIi4vbG9jYWxlcy9mci9jb21tb24uanNvblwiLFxuXHRcdFwibG9jYWxlc19mcl9jb21tb25fanNvblwiXG5cdF0sXG5cdFwiLi9mci9nYW1lc1wiOiBbXG5cdFx0XCIuL2xvY2FsZXMvZnIvZ2FtZXMuanNvblwiLFxuXHRcdFwibG9jYWxlc19mcl9nYW1lc19qc29uXCJcblx0XSxcblx0XCIuL2ZyL2dhbWVzLmpzb25cIjogW1xuXHRcdFwiLi9sb2NhbGVzL2ZyL2dhbWVzLmpzb25cIixcblx0XHRcImxvY2FsZXNfZnJfZ2FtZXNfanNvblwiXG5cdF0sXG5cdFwiLi9mci9ob21lXCI6IFtcblx0XHRcIi4vbG9jYWxlcy9mci9ob21lLmpzb25cIixcblx0XHRcImxvY2FsZXNfZnJfaG9tZV9qc29uXCJcblx0XSxcblx0XCIuL2ZyL2hvbWUuanNvblwiOiBbXG5cdFx0XCIuL2xvY2FsZXMvZnIvaG9tZS5qc29uXCIsXG5cdFx0XCJsb2NhbGVzX2ZyX2hvbWVfanNvblwiXG5cdF0sXG5cdFwiLi9mci9wZXJzb25hbFwiOiBbXG5cdFx0XCIuL2xvY2FsZXMvZnIvcGVyc29uYWwuanNvblwiLFxuXHRcdFwibG9jYWxlc19mcl9wZXJzb25hbF9qc29uXCJcblx0XSxcblx0XCIuL2ZyL3BlcnNvbmFsLmpzb25cIjogW1xuXHRcdFwiLi9sb2NhbGVzL2ZyL3BlcnNvbmFsLmpzb25cIixcblx0XHRcImxvY2FsZXNfZnJfcGVyc29uYWxfanNvblwiXG5cdF0sXG5cdFwiLi9mci9wcmVkaWN0aW9uXCI6IFtcblx0XHRcIi4vbG9jYWxlcy9mci9wcmVkaWN0aW9uLmpzb25cIixcblx0XHRcImxvY2FsZXNfZnJfcHJlZGljdGlvbl9qc29uXCJcblx0XSxcblx0XCIuL2ZyL3ByZWRpY3Rpb24uanNvblwiOiBbXG5cdFx0XCIuL2xvY2FsZXMvZnIvcHJlZGljdGlvbi5qc29uXCIsXG5cdFx0XCJsb2NhbGVzX2ZyX3ByZWRpY3Rpb25fanNvblwiXG5cdF0sXG5cdFwiLi9mci9zdGF0aXN0aWNzXCI6IFtcblx0XHRcIi4vbG9jYWxlcy9mci9zdGF0aXN0aWNzLmpzb25cIixcblx0XHRcImxvY2FsZXNfZnJfc3RhdGlzdGljc19qc29uXCJcblx0XSxcblx0XCIuL2ZyL3N0YXRpc3RpY3MuanNvblwiOiBbXG5cdFx0XCIuL2xvY2FsZXMvZnIvc3RhdGlzdGljcy5qc29uXCIsXG5cdFx0XCJsb2NhbGVzX2ZyX3N0YXRpc3RpY3NfanNvblwiXG5cdF0sXG5cdFwiLi9mci90ZXN0aW1vbmlhbHNcIjogW1xuXHRcdFwiLi9sb2NhbGVzL2ZyL3Rlc3RpbW9uaWFscy5qc29uXCIsXG5cdFx0XCJsb2NhbGVzX2ZyX3Rlc3RpbW9uaWFsc19qc29uXCJcblx0XSxcblx0XCIuL2ZyL3Rlc3RpbW9uaWFscy5qc29uXCI6IFtcblx0XHRcIi4vbG9jYWxlcy9mci90ZXN0aW1vbmlhbHMuanNvblwiLFxuXHRcdFwibG9jYWxlc19mcl90ZXN0aW1vbmlhbHNfanNvblwiXG5cdF0sXG5cdFwiLi9ycy9hYm91dFVzXCI6IFtcblx0XHRcIi4vbG9jYWxlcy9ycy9hYm91dFVzLmpzb25cIixcblx0XHRcImxvY2FsZXNfcnNfYWJvdXRVc19qc29uXCJcblx0XSxcblx0XCIuL3JzL2Fib3V0VXMuanNvblwiOiBbXG5cdFx0XCIuL2xvY2FsZXMvcnMvYWJvdXRVcy5qc29uXCIsXG5cdFx0XCJsb2NhbGVzX3JzX2Fib3V0VXNfanNvblwiXG5cdF0sXG5cdFwiLi9ycy9jb21tb25cIjogW1xuXHRcdFwiLi9sb2NhbGVzL3JzL2NvbW1vbi5qc29uXCIsXG5cdFx0XCJsb2NhbGVzX3JzX2NvbW1vbl9qc29uXCJcblx0XSxcblx0XCIuL3JzL2NvbW1vbi5qc29uXCI6IFtcblx0XHRcIi4vbG9jYWxlcy9ycy9jb21tb24uanNvblwiLFxuXHRcdFwibG9jYWxlc19yc19jb21tb25fanNvblwiXG5cdF0sXG5cdFwiLi9ycy9nYW1lc1wiOiBbXG5cdFx0XCIuL2xvY2FsZXMvcnMvZ2FtZXMuanNvblwiLFxuXHRcdFwibG9jYWxlc19yc19nYW1lc19qc29uXCJcblx0XSxcblx0XCIuL3JzL2dhbWVzLmpzb25cIjogW1xuXHRcdFwiLi9sb2NhbGVzL3JzL2dhbWVzLmpzb25cIixcblx0XHRcImxvY2FsZXNfcnNfZ2FtZXNfanNvblwiXG5cdF0sXG5cdFwiLi9ycy9ob21lXCI6IFtcblx0XHRcIi4vbG9jYWxlcy9ycy9ob21lLmpzb25cIixcblx0XHRcImxvY2FsZXNfcnNfaG9tZV9qc29uXCJcblx0XSxcblx0XCIuL3JzL2hvbWUuanNvblwiOiBbXG5cdFx0XCIuL2xvY2FsZXMvcnMvaG9tZS5qc29uXCIsXG5cdFx0XCJsb2NhbGVzX3JzX2hvbWVfanNvblwiXG5cdF0sXG5cdFwiLi9ycy9wZXJzb25hbFwiOiBbXG5cdFx0XCIuL2xvY2FsZXMvcnMvcGVyc29uYWwuanNvblwiLFxuXHRcdFwibG9jYWxlc19yc19wZXJzb25hbF9qc29uXCJcblx0XSxcblx0XCIuL3JzL3BlcnNvbmFsLmpzb25cIjogW1xuXHRcdFwiLi9sb2NhbGVzL3JzL3BlcnNvbmFsLmpzb25cIixcblx0XHRcImxvY2FsZXNfcnNfcGVyc29uYWxfanNvblwiXG5cdF0sXG5cdFwiLi9ycy9wcmVkaWN0aW9uXCI6IFtcblx0XHRcIi4vbG9jYWxlcy9ycy9wcmVkaWN0aW9uLmpzb25cIixcblx0XHRcImxvY2FsZXNfcnNfcHJlZGljdGlvbl9qc29uXCJcblx0XSxcblx0XCIuL3JzL3ByZWRpY3Rpb24uanNvblwiOiBbXG5cdFx0XCIuL2xvY2FsZXMvcnMvcHJlZGljdGlvbi5qc29uXCIsXG5cdFx0XCJsb2NhbGVzX3JzX3ByZWRpY3Rpb25fanNvblwiXG5cdF0sXG5cdFwiLi9ycy9zdGF0aXN0aWNzXCI6IFtcblx0XHRcIi4vbG9jYWxlcy9ycy9zdGF0aXN0aWNzLmpzb25cIixcblx0XHRcImxvY2FsZXNfcnNfc3RhdGlzdGljc19qc29uXCJcblx0XSxcblx0XCIuL3JzL3N0YXRpc3RpY3MuanNvblwiOiBbXG5cdFx0XCIuL2xvY2FsZXMvcnMvc3RhdGlzdGljcy5qc29uXCIsXG5cdFx0XCJsb2NhbGVzX3JzX3N0YXRpc3RpY3NfanNvblwiXG5cdF0sXG5cdFwiLi9ycy90ZXN0aW1vbmlhbHNcIjogW1xuXHRcdFwiLi9sb2NhbGVzL3JzL3Rlc3RpbW9uaWFscy5qc29uXCIsXG5cdFx0XCJsb2NhbGVzX3JzX3Rlc3RpbW9uaWFsc19qc29uXCJcblx0XSxcblx0XCIuL3JzL3Rlc3RpbW9uaWFscy5qc29uXCI6IFtcblx0XHRcIi4vbG9jYWxlcy9ycy90ZXN0aW1vbmlhbHMuanNvblwiLFxuXHRcdFwibG9jYWxlc19yc190ZXN0aW1vbmlhbHNfanNvblwiXG5cdF1cbn07XG5mdW5jdGlvbiB3ZWJwYWNrQXN5bmNDb250ZXh0KHJlcSkge1xuXHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKG1hcCwgcmVxKSkge1xuXHRcdHJldHVybiBQcm9taXNlLnJlc29sdmUoKS50aGVuKGZ1bmN0aW9uKCkge1xuXHRcdFx0dmFyIGUgPSBuZXcgRXJyb3IoXCJDYW5ub3QgZmluZCBtb2R1bGUgJ1wiICsgcmVxICsgXCInXCIpO1xuXHRcdFx0ZS5jb2RlID0gJ01PRFVMRV9OT1RfRk9VTkQnO1xuXHRcdFx0dGhyb3cgZTtcblx0XHR9KTtcblx0fVxuXG5cdHZhciBpZHMgPSBtYXBbcmVxXSwgaWQgPSBpZHNbMF07XG5cdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fLmUoaWRzWzFdKS50aGVuKGZ1bmN0aW9uKCkge1xuXHRcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fLnQoaWQsIDMgfCAxNik7XG5cdH0pO1xufVxud2VicGFja0FzeW5jQ29udGV4dC5rZXlzID0gZnVuY3Rpb24oKSB7IHJldHVybiBPYmplY3Qua2V5cyhtYXApOyB9O1xud2VicGFja0FzeW5jQ29udGV4dC5pZCA9IFwiLi9sb2NhbGVzIGxhenkgcmVjdXJzaXZlIF5cXFxcLlxcXFwvLipcXFxcLy4qJFwiO1xubW9kdWxlLmV4cG9ydHMgPSB3ZWJwYWNrQXN5bmNDb250ZXh0OyIsImZ1bmN0aW9uIF9pbnRlcm9wUmVxdWlyZURlZmF1bHQob2JqKSB7XG4gIHJldHVybiBvYmogJiYgb2JqLl9fZXNNb2R1bGUgPyBvYmogOiB7XG4gICAgXCJkZWZhdWx0XCI6IG9ialxuICB9O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQ7IiwidmFyIF90eXBlb2YgPSByZXF1aXJlKFwiQGJhYmVsL3J1bnRpbWUvaGVscGVycy90eXBlb2ZcIik7XG5cbmZ1bmN0aW9uIF9nZXRSZXF1aXJlV2lsZGNhcmRDYWNoZSgpIHtcbiAgaWYgKHR5cGVvZiBXZWFrTWFwICE9PSBcImZ1bmN0aW9uXCIpIHJldHVybiBudWxsO1xuICB2YXIgY2FjaGUgPSBuZXcgV2Vha01hcCgpO1xuXG4gIF9nZXRSZXF1aXJlV2lsZGNhcmRDYWNoZSA9IGZ1bmN0aW9uIF9nZXRSZXF1aXJlV2lsZGNhcmRDYWNoZSgpIHtcbiAgICByZXR1cm4gY2FjaGU7XG4gIH07XG5cbiAgcmV0dXJuIGNhY2hlO1xufVxuXG5mdW5jdGlvbiBfaW50ZXJvcFJlcXVpcmVXaWxkY2FyZChvYmopIHtcbiAgaWYgKG9iaiAmJiBvYmouX19lc01vZHVsZSkge1xuICAgIHJldHVybiBvYmo7XG4gIH1cblxuICBpZiAob2JqID09PSBudWxsIHx8IF90eXBlb2Yob2JqKSAhPT0gXCJvYmplY3RcIiAmJiB0eXBlb2Ygb2JqICE9PSBcImZ1bmN0aW9uXCIpIHtcbiAgICByZXR1cm4ge1xuICAgICAgXCJkZWZhdWx0XCI6IG9ialxuICAgIH07XG4gIH1cblxuICB2YXIgY2FjaGUgPSBfZ2V0UmVxdWlyZVdpbGRjYXJkQ2FjaGUoKTtcblxuICBpZiAoY2FjaGUgJiYgY2FjaGUuaGFzKG9iaikpIHtcbiAgICByZXR1cm4gY2FjaGUuZ2V0KG9iaik7XG4gIH1cblxuICB2YXIgbmV3T2JqID0ge307XG4gIHZhciBoYXNQcm9wZXJ0eURlc2NyaXB0b3IgPSBPYmplY3QuZGVmaW5lUHJvcGVydHkgJiYgT2JqZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvcjtcblxuICBmb3IgKHZhciBrZXkgaW4gb2JqKSB7XG4gICAgaWYgKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIGtleSkpIHtcbiAgICAgIHZhciBkZXNjID0gaGFzUHJvcGVydHlEZXNjcmlwdG9yID8gT2JqZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvcihvYmosIGtleSkgOiBudWxsO1xuXG4gICAgICBpZiAoZGVzYyAmJiAoZGVzYy5nZXQgfHwgZGVzYy5zZXQpKSB7XG4gICAgICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShuZXdPYmosIGtleSwgZGVzYyk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBuZXdPYmpba2V5XSA9IG9ialtrZXldO1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIG5ld09ialtcImRlZmF1bHRcIl0gPSBvYmo7XG5cbiAgaWYgKGNhY2hlKSB7XG4gICAgY2FjaGUuc2V0KG9iaiwgbmV3T2JqKTtcbiAgfVxuXG4gIHJldHVybiBuZXdPYmo7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gX2ludGVyb3BSZXF1aXJlV2lsZGNhcmQ7IiwiZnVuY3Rpb24gX3R5cGVvZihvYmopIHtcbiAgXCJAYmFiZWwvaGVscGVycyAtIHR5cGVvZlwiO1xuXG4gIGlmICh0eXBlb2YgU3ltYm9sID09PSBcImZ1bmN0aW9uXCIgJiYgdHlwZW9mIFN5bWJvbC5pdGVyYXRvciA9PT0gXCJzeW1ib2xcIikge1xuICAgIG1vZHVsZS5leHBvcnRzID0gX3R5cGVvZiA9IGZ1bmN0aW9uIF90eXBlb2Yob2JqKSB7XG4gICAgICByZXR1cm4gdHlwZW9mIG9iajtcbiAgICB9O1xuICB9IGVsc2Uge1xuICAgIG1vZHVsZS5leHBvcnRzID0gX3R5cGVvZiA9IGZ1bmN0aW9uIF90eXBlb2Yob2JqKSB7XG4gICAgICByZXR1cm4gb2JqICYmIHR5cGVvZiBTeW1ib2wgPT09IFwiZnVuY3Rpb25cIiAmJiBvYmouY29uc3RydWN0b3IgPT09IFN5bWJvbCAmJiBvYmogIT09IFN5bWJvbC5wcm90b3R5cGUgPyBcInN5bWJvbFwiIDogdHlwZW9mIG9iajtcbiAgICB9O1xuICB9XG5cbiAgcmV0dXJuIF90eXBlb2Yob2JqKTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBfdHlwZW9mOyIsIlwidXNlIHN0cmljdFwiO2V4cG9ydHMuX19lc01vZHVsZT10cnVlO2V4cG9ydHMubm9ybWFsaXplUGF0aFNlcD1ub3JtYWxpemVQYXRoU2VwO2V4cG9ydHMuZGVub3JtYWxpemVQYWdlUGF0aD1kZW5vcm1hbGl6ZVBhZ2VQYXRoO2Z1bmN0aW9uIG5vcm1hbGl6ZVBhdGhTZXAocGF0aCl7cmV0dXJuIHBhdGgucmVwbGFjZSgvXFxcXC9nLCcvJyk7fWZ1bmN0aW9uIGRlbm9ybWFsaXplUGFnZVBhdGgocGFnZSl7cGFnZT1ub3JtYWxpemVQYXRoU2VwKHBhZ2UpO2lmKHBhZ2Uuc3RhcnRzV2l0aCgnL2luZGV4LycpKXtwYWdlPXBhZ2Uuc2xpY2UoNik7fWVsc2UgaWYocGFnZT09PScvaW5kZXgnKXtwYWdlPScvJzt9cmV0dXJuIHBhZ2U7fVxuLy8jIHNvdXJjZU1hcHBpbmdVUkw9ZGVub3JtYWxpemUtcGFnZS1wYXRoLmpzLm1hcCIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZSgnLi9kaXN0L2NsaWVudC9saW5rJylcbiIsImltcG9ydCBiYWxsSWNvbiBmcm9tICcvcHVibGljL2ltYWdlcy9mb290ZXIvbGVmdEJhbGwucG5nJ1xyXG5pbXBvcnQgc3R5bGVzIGZyb20gJy4vQmFsbC5tb2R1bGUuc2NzcydcclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBCYWxsKCkge1xyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmNvbnRhaW5lcn0+XHJcbiAgICAgICAgICAgIDxpbWdcclxuICAgICAgICAgICAgICAgIHNyYz17YmFsbEljb24uc3JjfVxyXG4gICAgICAgICAgICAgICAgY2xhc3NOYW1lPXtzdHlsZXMuYmFsbH1cclxuICAgICAgICAgICAgICAgIGFsdD1cImJhbGwtcG5nXCJcclxuICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy50ZXh0X3dpdGhfYmFsbH0+XHJcbiAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9e3N0eWxlcy50b3B9PkZPT1Q8L3A+XHJcbiAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9e3N0eWxlcy5ib3R0b219PkJFVDwvcD5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICApXHJcbn1cclxuIiwiLy9cclxuaW1wb3J0IHsgdXNlUm91dGVyIH0gZnJvbSAnbmV4dC9kaXN0L2NsaWVudC9yb3V0ZXInXHJcbmltcG9ydCB7IEJhbGwgfSBmcm9tICcuL0JhbGwvQmFsbCdcclxuLy8gc3R5bGVzXHJcbmltcG9ydCBzdHlsZXMgZnJvbSAnLi9Gb290ZXIubW9kdWxlLnNjc3MnXHJcbmltcG9ydCB7IE5hdmlnYXRpb24gfSBmcm9tICcuL05hdmlnYXRpb24vTmF2aWdhdGlvbidcclxuaW1wb3J0IHsgU29jaWFsTWVkaWEgfSBmcm9tICcuL1NvY2lhbE1lZGlhL1NvY2lhbE1lZGlhJ1xyXG4vLyBpY29uXHJcbmltcG9ydCBiYWxsSWNvbiBmcm9tICcvcHVibGljL2ltYWdlcy9wZXJzb25hbC9iYWxsLnBuZydcclxuXHJcbi8vIFRPRE8gY2xpY2sgZXZlbnRzIG9uIGljb25zXHJcblxyXG5leHBvcnQgZnVuY3Rpb24gRm9vdGVyKCkge1xyXG4gICAgY29uc3Qgcm91dGVyID0gdXNlUm91dGVyKClcclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5jb250YWluZXJ9PlxyXG4gICAgICAgICAgICA8QmFsbCAvPlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmNvbnRlbnR9PlxyXG4gICAgICAgICAgICAgICAgPE5hdmlnYXRpb24gLz5cclxuICAgICAgICAgICAgICAgIDxTb2NpYWxNZWRpYSAvPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAge3JvdXRlci5wYXRobmFtZSA9PT0gJy9wZXJzb25hbCcgJiZcclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuYmFsbH0+XHJcbiAgICAgICAgICAgICAgICAgICAgPGltZyBzcmM9e2JhbGxJY29uLnNyY30gYWx0PVwiYmFsbC1pY29uXCIgLz5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICApXHJcbn1cclxuIiwiaW1wb3J0IHVzZVRyYW5zbGF0aW9uIGZyb20gXCJuZXh0LXRyYW5zbGF0ZS91c2VUcmFuc2xhdGlvblwiO1xyXG5pbXBvcnQgTGluayBmcm9tIFwibmV4dC9saW5rXCI7XHJcbmltcG9ydCBzdHlsZXMgZnJvbSBcIi4vTGlzdC5tb2R1bGUuc2Nzc1wiO1xyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIExpc3QoeyBsaXN0X2l0ZW1zID0gW10sIGJvcmRlcnNBY3RpdmUgfSkge1xyXG4gIGNvbnN0IHsgdCB9ID0gdXNlVHJhbnNsYXRpb24oXCJjb21tb25cIiksXHJcbiAgICB0cmFuc2xhdGlvblBhdGggPSBcImZvb3Rlci5uYXZpZ2F0aW9uLlwiLFxyXG4gICAgdHJhbnNsYXRlID0gKGtleSkgPT4gdChgJHt0cmFuc2xhdGlvblBhdGh9JHtrZXl9YCk7XHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8ZGl2IGNsYXNzTmFtZT17YCR7c3R5bGVzLmNvbnRhaW5lcn0gJHtib3JkZXJzQWN0aXZlICYmIHN0eWxlcy5ib3JkZXJzfWB9PlxyXG4gICAgICA8dWw+XHJcbiAgICAgICAge2xpc3RfaXRlbXMubWFwKChlbCkgPT4gKFxyXG4gICAgICAgICAgPExpbmsgaHJlZj17ZWwubGlua30ga2V5PXtNYXRoLnJhbmRvbSgpfT5cclxuICAgICAgICAgICAgPGxpPnt0cmFuc2xhdGUoZWwubmFtZSl9PC9saT5cclxuICAgICAgICAgIDwvTGluaz5cclxuICAgICAgICApKX1cclxuICAgICAgPC91bD5cclxuICAgIDwvZGl2PlxyXG4gICk7XHJcbn1cclxuIiwiLy8gc3R5bGVzXHJcbmltcG9ydCB7IExpc3QgfSBmcm9tICcuL0xpc3QvTGlzdCdcclxuaW1wb3J0IHN0eWxlcyBmcm9tICcuL05hdmlnYXRpb24ubW9kdWxlLnNjc3MnXHJcbi8vIGRhdGFzXHJcbmltcG9ydCB7IG5hdl9kYXRhIH0gZnJvbSAnLi9uYXZfZGF0YSdcclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBOYXZpZ2F0aW9uKCkge1xyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmNvbnRhaW5lcn0+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuY29udGVudH0+XHJcbiAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgbmF2X2RhdGEubWFwKChlbCwgaSkgPT4gKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8TGlzdFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbGlzdF9pdGVtcz17ZWx9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBib3JkZXJzQWN0aXZlPXtpID09PSAxID8gdHJ1ZSA6IGZhbHNlfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAga2V5PXtNYXRoLnJhbmRvbSgpfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICAgICkpXHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgKVxyXG59XHJcbiIsImV4cG9ydCBjb25zdCBuYXZfZGF0YSA9IFtcclxuICAgIFtcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIGxpbms6Jy9wcmVkaWN0aW9uJyxcclxuICAgICAgICAgICAgbmFtZTogJ3ByZWRpY3Rpb24nXHJcbiAgICAgICAgfSxcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIGxpbms6Jy9nYW1lcycsXHJcbiAgICAgICAgICAgIG5hbWU6ICdnYW1lcydcclxuICAgICAgICB9LFxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgbGluazonLycsXHJcbiAgICAgICAgICAgIG5hbWU6ICduZXdzJ1xyXG4gICAgICAgIH0gICBcclxuICAgIF0sXHJcbiAgICBbXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBsaW5rOicvYWJvdXRVcycsXHJcbiAgICAgICAgICAgIG5hbWU6ICdhYm91dFVzJ1xyXG4gICAgICAgIH0sXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBsaW5rOicvcHJlZGljdGlvbicsXHJcbiAgICAgICAgICAgIG5hbWU6ICdwYXltZW50J1xyXG4gICAgICAgIH0sXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBsaW5rOicvc3RhdGlzdGljcycsXHJcbiAgICAgICAgICAgIG5hbWU6ICdtYXRjaFN0YXRpc3RpY3MnXHJcbiAgICAgICAgfVxyXG4gICAgXSxcclxuICAgIFtcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIGxpbms6Jy9yZWdpc3RyYXRpb24nLFxyXG4gICAgICAgICAgICBuYW1lOiAncmVnaXN0ZXInXHJcbiAgICAgICAgfSxcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIGxpbms6Jy90ZXN0aW1vbmlhbHMnLFxyXG4gICAgICAgICAgICBuYW1lOiAnZmVlZGJhY2tzJ1xyXG4gICAgICAgIH0sXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBsaW5rOicvdGVybXMtb2YtdXNlJyxcclxuICAgICAgICAgICAgbmFtZTogJ3Rlcm1zLW9mLXVzZSdcclxuICAgICAgICB9LFxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgbGluazonL3ByaXZhY3ktcG9saWN5JyxcclxuICAgICAgICAgICAgbmFtZTogJ3ByaXZhY3ktcG9saWN5J1xyXG4gICAgICAgIH1cclxuICAgIF0sXHJcbl1cclxuXHJcblxyXG5cclxuXHJcblxyXG4iLCIvLyBzdHlsZXNcclxuaW1wb3J0IHN0eWxlcyBmcm9tIFwiLi9QUy5tb2R1bGUuc2Nzc1wiO1xyXG4vLyBpY29uc1xyXG5pbXBvcnQgdmlzYSBmcm9tIFwiL3B1YmxpYy9pbWFnZXMvZm9vdGVyL3Zpc2EucG5nXCI7XHJcbmltcG9ydCBtYXN0ZXJDYXJkIGZyb20gXCIvcHVibGljL2ltYWdlcy9mb290ZXIvbWFzdGVyQ2FyZC5wbmdcIjtcclxuLy8gY29tcG9uZW50c1xyXG5pbXBvcnQgeyBJY29uIH0gZnJvbSBcIi4uL2NvbW1vbi9JY29uL0ljb25cIjtcclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBQUygpIHtcclxuICBjb25zdCAvLyBjb25maWdcclxuICAgIGljb25zID0gW1xyXG4gICAgICB7XHJcbiAgICAgICAga2V5OiBNYXRoLnJhbmRvbSgpLFxyXG4gICAgICAgIHNyYzogdmlzYS5zcmMsXHJcbiAgICAgIH0sXHJcbiAgICAgIHtcclxuICAgICAgICBrZXk6IE1hdGgucmFuZG9tKCksXHJcbiAgICAgICAgc3JjOiBtYXN0ZXJDYXJkLnNyYyxcclxuICAgICAgICBsYXN0RWxlbWVudDogdHJ1ZSxcclxuICAgICAgfSxcclxuICAgIF07XHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8PlxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmNvbnRhaW5lcn0+XHJcbiAgICAgICAge2ljb25zLm1hcCgoZWwpID0+IChcclxuICAgICAgICAgIDxJY29uXHJcbiAgICAgICAgICAgIGtleT17ZWwua2V5fVxyXG4gICAgICAgICAgICBzcmM9e2VsLnNyY31cclxuICAgICAgICAgICAgY2xhc3Nlcz17c3R5bGVzLmljb25zfVxyXG4gICAgICAgICAgICBsYXN0RWxlbWVudD17ZWwubGFzdEVsZW1lbnQgJiYgZWwubGFzdEVsZW1lbnR9XHJcbiAgICAgICAgICAvPlxyXG4gICAgICAgICkpfVxyXG4gICAgICA8L2Rpdj5cclxuICAgIDwvPlxyXG4gICk7XHJcbn1cclxuIiwiLy8gc3R5bGVzXHJcbmltcG9ydCBzdHlsZXMgZnJvbSAnLi9TTS5tb2R1bGUuc2NzcydcclxuLy8gaWNvbnNcclxuaW1wb3J0IHBob25lIGZyb20gJy9wdWJsaWMvaW1hZ2VzL2hlYWRlci9Tb2NpYWxNZWRpYS9waG9uZS5zdmcnXHJcbmltcG9ydCBmYWNlYm9vayBmcm9tICcvcHVibGljL2ltYWdlcy9oZWFkZXIvU29jaWFsTWVkaWEvZmFjZWJvb2suc3ZnJ1xyXG5pbXBvcnQgdGVsZWdyYW0gZnJvbSAnL3B1YmxpYy9pbWFnZXMvaGVhZGVyL1NvY2lhbE1lZGlhL3RlbGVncmFtLnN2ZydcclxuaW1wb3J0IHdhdHN1cCBmcm9tICcvcHVibGljL2ltYWdlcy9oZWFkZXIvU29jaWFsTWVkaWEvd2F0c3VwLnN2ZydcclxuaW1wb3J0IGluc3RhZ3JhbSBmcm9tICcvcHVibGljL2ltYWdlcy9oZWFkZXIvU29jaWFsTWVkaWEvaW5zdGFncmFtLnN2ZydcclxuaW1wb3J0IHZpYmVyIGZyb20gJy9wdWJsaWMvaW1hZ2VzL2hlYWRlci9Tb2NpYWxNZWRpYS92aWJlci5zdmcnXHJcbi8vIGNvbXBvbmVudHNcclxuaW1wb3J0IHsgSWNvbiB9IGZyb20gJy4uL2NvbW1vbi9JY29uL0ljb24nXHJcblxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIFNNKCkge1xyXG5cclxuICAgIGNvbnN0XHJcbiAgICAgICAgLy8gY29uZmlnXHJcbiAgICAgICAgaWNvbnMgPSBbXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIGtleTogTWF0aC5yYW5kb20oKSxcclxuICAgICAgICAgICAgICAgIHNyYzogcGhvbmUuc3JjLFxyXG4gICAgICAgICAgICAgICAgdXJsOiBcInRlbDorMzQ2NzIzMTQ4MDhcIlxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICBrZXk6IE1hdGgucmFuZG9tKCksXHJcbiAgICAgICAgICAgICAgICBzcmM6IGZhY2Vib29rLnNyYyxcclxuICAgICAgICAgICAgICAgIHVybDogXCJodHRwczovL3d3dy5mYWNlYm9vay5jb20vJUQwJTlGJUQxJTgwJUQwJUJFJUQwJUIzJUQwJUJEJUQwJUJFJUQwJUI3JUQxJThCLSVEMCVCRCVEMCVCMC0lRDAlQTQlRDElODMlRDElODIlRDAlQjElRDAlQkUlRDAlQkItMTA0OTQxMzQ3NTc3OTEzL1wiXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIGtleTogTWF0aC5yYW5kb20oKSxcclxuICAgICAgICAgICAgICAgIHNyYzogd2F0c3VwLnNyYyxcclxuICAgICAgICAgICAgICAgIHVybDogXCJodHRwczovL2FwaS53aGF0c2FwcC5jb20vc2VuZD9waG9uZT0rMzQ2NzIzMTQ4MDhcIlxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICBrZXk6IE1hdGgucmFuZG9tKCksXHJcbiAgICAgICAgICAgICAgICBzcmM6IGluc3RhZ3JhbS5zcmMsXHJcbiAgICAgICAgICAgICAgICB1cmw6IFwiaHR0cHM6Ly93d3cuaW5zdGFncmFtLmNvbS9wcm9nbm96eW5hNTUwLz91dG1fbWVkaXVtPWNvcHlfbGlua1wiXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIGtleTogTWF0aC5yYW5kb20oKSxcclxuICAgICAgICAgICAgICAgIHNyYzogdmliZXIuc3JjLFxyXG4gICAgICAgICAgICAgICAgdXJsOiBcInZpYmVyOi8vY2hhdD9udW1iZXI9KzM0NjcyMzE0ODA4XCJcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAga2V5OiBNYXRoLnJhbmRvbSgpLFxyXG4gICAgICAgICAgICAgICAgc3JjOiB0ZWxlZ3JhbS5zcmMsXHJcbiAgICAgICAgICAgICAgICB1cmw6IFwiaHR0cHM6Ly90ZWxlZ3JhbS5tZS9mb290YmV0MjRjb21cIixcclxuICAgICAgICAgICAgICAgIGxhc3RFbGVtZW50OiB0cnVlXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgXVxyXG5cclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPD5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5jb250YWluZXJ9PlxyXG4gICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgIGljb25zLm1hcChlbCA9PiAoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxJY29uXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBrZXk9e2VsLmtleX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNyYz17ZWwuc3JjfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdXJsPXtlbC51cmx9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBlbGVtZW50cz17aWNvbnMubGVuZ3RofVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbGFzdEVsZW1lbnQ9e2VsLmxhc3RFbGVtZW50ICYmIGVsLmxhc3RFbGVtZW50fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICAgICkpXHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwvPlxyXG4gICAgKVxyXG59XHJcbiIsIi8vIGNvbXBvbmVudHNcclxuaW1wb3J0IHsgU00gfSBmcm9tICcuL1NNSWNvbnMvU00nXHJcbmltcG9ydCB7IFBTIH0gZnJvbSAnLi9QU0ljb25zL1BTJ1xyXG4vLyBzdHlsZXNcclxuaW1wb3J0IHN0eWxlcyBmcm9tICcuL1NvY2lhbE1lZGlhLm1vZHVsZS5zY3NzJ1xyXG4vLyB0cmFuc2xhdGlvbiBcclxuaW1wb3J0IHVzZVRyYW5zbGF0aW9uIGZyb20gJ25leHQtdHJhbnNsYXRlL3VzZVRyYW5zbGF0aW9uJ1xyXG5cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBTb2NpYWxNZWRpYSgpIHtcclxuXHJcbiAgICBjb25zdFxyXG4gICAgICAgIC8vIHRyYW5zbGF0aW9uXHJcbiAgICAgICAgeyB0IH0gPSB1c2VUcmFuc2xhdGlvbignY29tbW9uJyksXHJcbiAgICAgICAgdHJhbnNsYXRpb25QYXRoID0gJ2Zvb3Rlci5zb2NpYWxfbWVkaWFfcGF5bWFudHMnLFxyXG4gICAgICAgIHRyYW5zbGF0ZSA9IChrZXkpID0+IHQoYCR7dHJhbnNsYXRpb25QYXRofSR7a2V5fWApXHJcblxyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmNvbnRhaW5lcn0+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuY29udGVudH0+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmNvbnRyb2xlcn0+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5zb2NpYWxfbWVkaWFzfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPHA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdHJhbnNsYXRlKCcuU00udGl0bGUnKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L3A+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxTTSAvPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMucGF5bWVudF9zeXN0ZW1zfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPHA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdHJhbnNsYXRlKCcuUFMudGl0bGUnKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L3A+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxQUyAvPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwvZGl2ID5cclxuICAgIClcclxufVxyXG4iLCJpbXBvcnQgc3R5bGVzIGZyb20gJy4vSWNvbi5tb2R1bGUuc2NzcydcclxuaW1wb3J0IExpbmsgZnJvbSAnbmV4dC9saW5rJ1xyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIEljb24oe1xyXG4gICAgc3JjLFxyXG4gICAgY2xpY2sgPSBudWxsLFxyXG4gICAgbGFzdEVsZW1lbnQgPSBmYWxzZSxcclxuICAgIGVsZW1lbnRzLFxyXG4gICAgb3RoZXJTdHlsZXMgPSBudWxsLFxyXG4gICAgY2xhc3NlcyxcclxuICAgIHVybCA9IFwiXCIgfSkge1xyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8ZGl2XHJcbiAgICAgICAgICAgIHN0eWxlPXtlbGVtZW50cyA/IHsgd2lkdGg6IGAkezEwMCAvIGVsZW1lbnRzfSVgIH0gOiB7IHBhZGRpbmc6ICcwIDE1cHgnIH19XHJcbiAgICAgICAgICAgIGNsYXNzTmFtZT17YCR7c3R5bGVzLmNvbnRhaW5lcn0gJHtsYXN0RWxlbWVudCA/IHN0eWxlcy5sYXN0X2VsZW1lbnQgOiBcIlwifSAke2NsYXNzZXN9YH0+XHJcbiAgICAgICAgICAgIDxMaW5rIGhyZWY9e3VybH0gdGFyZ2V0PVwiX2JsYW5rXCI+XHJcbiAgICAgICAgICAgICAgICA8YSB0YXJnZXQ9XCJfYmxhbmtcIj5cclxuICAgICAgICAgICAgICAgICAgICA8aW1nXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHNyYz17c3JjfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBhbHQ9e2BpY29ucy0ke3NyY31gfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBvbkNsaWNrPXtjbGlja31cclxuICAgICAgICAgICAgICAgICAgICAgICAgc3R5bGU9e290aGVyU3R5bGVzfVxyXG4gICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICA8L2E+XHJcbiAgICAgICAgICAgIDwvTGluaz5cclxuICAgICAgICA8L2RpdiA+XHJcbiAgICApXHJcbn1cclxuIiwiLy8gaG9va3MgYW5kIGhlbHBlcnNcclxuaW1wb3J0IHsgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCdcclxuLy8gc3R5bGVzXHJcbmltcG9ydCBzdHlsZXMgZnJvbSAnLi9CYXIubW9kdWxlLnNjc3MnXHJcbi8vIHRyYW5zbGF0aW9uIFxyXG5pbXBvcnQgdXNlVHJhbnNsYXRpb24gZnJvbSAnbmV4dC10cmFuc2xhdGUvdXNlVHJhbnNsYXRpb24nXHJcbi8vY29tcG9uZW50c1xyXG5pbXBvcnQgeyBMb2dpbiB9IGZyb20gJy4vTG9naW4vTG9naW4nXHJcbmltcG9ydCB7IEJhckl0ZW1zIH0gZnJvbSAnLi9CYXJJdGVtcy9CYXJJdGVtcydcclxuaW1wb3J0IHsgTG9nbyB9IGZyb20gJy4vTG9nby9Mb2dvJ1xyXG5pbXBvcnQgeyB1c2VTZWxlY3RvciB9IGZyb20gJ3JlYWN0LXJlZHV4J1xyXG5pbXBvcnQgRHJvcGRvd24gZnJvbSAnLi9Ecm9wZG93bk1lbnUvRHJvcGRvd24nXHJcblxyXG5leHBvcnQgZnVuY3Rpb24gQmFyKHsgYmFyX2l0ZW1zLCBiYXJfaXRlbXNfY29udCB9KSB7XHJcblxyXG4gICAgY29uc3RcclxuICAgICAgICB7IHQgfSA9IHVzZVRyYW5zbGF0aW9uKCdjb21tb24nKSxcclxuICAgICAgICB0cmFuc2xhdGlvblBhdGggPSAnaGVhZGVyLicsXHJcbiAgICAgICAgdHJhbnNsYXRlID0gKGtleSkgPT4gdChgJHt0cmFuc2xhdGlvblBhdGh9JHtrZXl9YCksXHJcbiAgICAgICAgLy8gbG9naW4gbW9kYWwgY29uZmlnc1xyXG4gICAgICAgIFtzaG93TG9naW5Nb2RhbCwgc2V0U2hvd0xvZ2luTW9kYWxdID0gdXNlU3RhdGUoZmFsc2UpLFxyXG4gICAgICAgIHVzZXJfaW5mbyA9IHVzZVNlbGVjdG9yKChzdGF0ZSkgPT4gc3RhdGUudXNlci51c2VyKVxyXG5cclxuICAgIGNvbnNvbGUubG9nKCB1c2VyX2luZm8gKTtcclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9e2Ake3N0eWxlcy5iYXJfY29udGFpbmVyfSAke2Jhcl9pdGVtc19jb250fWB9PlxyXG4gICAgICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgICAgICAgPExvZ28gLz5cclxuICAgICAgICAgICAgICAgIDxEcm9wZG93biAvPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPEJhckl0ZW1zXHJcbiAgICAgICAgICAgICAgICB1c2VyTG9nZ2VkPXt1c2VyX2luZm8gIT09IG51bGwgPyB0cnVlIDogZmFsc2V9XHJcbiAgICAgICAgICAgICAgICByZWdpc3RyYXRpb249e3RyYW5zbGF0ZSgncmVnaXN0ZXInKX1cclxuICAgICAgICAgICAgICAgIGxvZ2luPXt0cmFuc2xhdGUoJ2xvZ2luJyl9XHJcbiAgICAgICAgICAgICAgICByZWdpc3RyYXRpb25fcGF0aD0nL3JlZ2lzdHJhdGlvbidcclxuICAgICAgICAgICAgICAgIGxvZ2luTW9kYWxIYW5kbGU9eygpID0+IHNldFNob3dMb2dpbk1vZGFsKHRydWUpfVxyXG4gICAgICAgICAgICAgICAgYmFyX2l0ZW1zPXtiYXJfaXRlbXN9XHJcbiAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgIHtzaG93TG9naW5Nb2RhbCAmJiA8TG9naW4gb25Nb2RhbENsb3NlPXsoKSA9PiBzZXRTaG93TG9naW5Nb2RhbChmYWxzZSl9IC8+fVxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgKVxyXG59XHJcbiIsIi8vIGhvb2tzIGFuZCBoZWxwZXJzXHJcbmltcG9ydCB7IGxhbmd1YWdlcyB9IGZyb20gJy4vTGFuZ3VhZ2VEcm9wQ29uZmlncy9sYW5nLWNvbmZpZ3MnXHJcbmltcG9ydCB7IHVzZVN0YXRlLCB1c2VFZmZlY3QgfSBmcm9tICdyZWFjdCdcclxuLy8gaW1wb3J0IHsgdXNlcl9kYXRhIH0gZnJvbSAnL3NyYy91c2VyL3VzZXInXHJcbmltcG9ydCB7IHVzZVJvdXRlciB9IGZyb20gJ25leHQvZGlzdC9jbGllbnQvcm91dGVyJ1xyXG4vLyB0cmFuc2xhdGlvbiBcclxuaW1wb3J0IHVzZVRyYW5zbGF0aW9uIGZyb20gJ25leHQtdHJhbnNsYXRlL3VzZVRyYW5zbGF0aW9uJ1xyXG4vLyBzdHlsZXMgXHJcbmltcG9ydCBzdHlsZXMgZnJvbSAnLi9CYXJJdGVtcy5tb2R1bGUuc2NzcydcclxuLy8gY29tcG9uZW50c1xyXG5pbXBvcnQgTGluayBmcm9tICduZXh0L2xpbmsnXHJcbmltcG9ydCB7IExhbmd1YWdlRHJvcCB9IGZyb20gJy4vTGFuZ3VhZ2VEcm9wL0xhbmd1YWdlRHJvcCdcclxuaW1wb3J0IHsgTG9nZ2VkIH0gZnJvbSAnLi9Mb2dnZWQvTG9nZ2VkJ1xyXG4vLyBpY29uc1xyXG5pbXBvcnQgcmVnaXN0ZXJfaWNvbiBmcm9tICcvcHVibGljL2ltYWdlcy9oZWFkZXIvcmVnaXN0ZXIucG5nJ1xyXG5pbXBvcnQgbG9naW5faWNvbiBmcm9tICcvcHVibGljL2ltYWdlcy9oZWFkZXIvbG9naW4ucG5nJ1xyXG5pbXBvcnQgeyB1c2VTZWxlY3RvciB9IGZyb20gJ3JlYWN0LXJlZHV4J1xyXG5pbXBvcnQgeyBzZWxlY3RVc2VyIH0gZnJvbSAnLi4vLi4vLi4vLi4vcmVkdXgvZmVhdHVyZXMvdXNlclNsaWNlJ1xyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG5leHBvcnQgZnVuY3Rpb24gQmFySXRlbXMoe1xyXG4gICAgcmVnaXN0cmF0aW9uLFxyXG4gICAgbG9naW4sXHJcbiAgICByZWdpc3RyYXRpb25fcGF0aCxcclxuICAgIGxvZ2luTW9kYWxIYW5kbGUsXHJcbiAgICBiYXJfaXRlbXMsXHJcbiAgICB1c2VyTG9nZ2VkIH0pIHtcclxuICAgICAgICBcclxuICAgICAgICBjb25zdCB7IHQsIGxhbmcgfSA9IHVzZVRyYW5zbGF0aW9uKCdjb21tb24nKTtcclxuICAgICAgICBjb25zdCBbbGFuZ3VhZ2VzVGl0bGUsIHNldExhbmd1YWdlc1RpdGxlXSA9IHVzZVN0YXRlKGxhbmd1YWdlc1sxXSk7XHJcbiAgICAgICAgdXNlRWZmZWN0KCAoKT0+e1xyXG4gICAgICAgICAgICBjb25zdCBuZXdMYW5nID0gbGFuZ3VhZ2VzLmZpbmQoIGVsID0+IGVsLmxhbmcgPT09IGxhbmcgKTtcclxuICAgICAgICAgICAgaWYgKCBuZXdMYW5nICkge1xyXG4gICAgICAgICAgICAgICAgc2V0TGFuZ3VhZ2VzVGl0bGUoIG5ld0xhbmcgKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0sIFtsYW5nXSApOyBcclxuICAgICAgICBcclxuICAgICAgICBjb25zdFxyXG4gICAgICAgIHJvdXRlciA9IHVzZVJvdXRlcigpLFxyXG4gICAgICAgIGxhbmd1YWdlc19kYXRhID0gbGFuZ3VhZ2VzLFxyXG5cclxuICAgICAgICBbc2hvd0Ryb3AsIHNldFNob3dEcm9wXSA9IHVzZVN0YXRlKGZhbHNlKSxcclxuXHJcbiAgICAgICAgY2hhbmdlTGFuZ1RpdGxlID0gKGV2ZW50KSA9PiB7XHJcbiAgICAgICAgICAgIGxldCBsYW5nX3RpdGxlX2RhdGEgPSBsYW5ndWFnZXNfZGF0YS5maWx0ZXIoZWwgPT4gZWwubGFuZyA9PT0gZXZlbnQudGFyZ2V0LmNsYXNzTmFtZSlcclxuICAgICAgICAgICAgc2V0TGFuZ3VhZ2VzVGl0bGUobGFuZ190aXRsZV9kYXRhWzBdKVxyXG4gICAgICAgICAgICBzZXRTaG93RHJvcChmYWxzZSlcclxuICAgICAgICB9LFxyXG4gICAgICAgIFxyXG4gICAgICAgIHRyYW5zbGF0aW9uUGF0aCA9ICdoZWFkZXIubGFuZy4nLFxyXG4gICAgICAgIHRyYW5zbGF0ZSA9IChrZXkpID0+IHQoYCR7dHJhbnNsYXRpb25QYXRofSR7a2V5fWApXHJcblxyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8PlxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17YCR7c3R5bGVzLmJhcl9pdGVtX2NvbnRhaW5lcn0gJHtiYXJfaXRlbXN9ICR7cm91dGVyLnBhdGhuYW1lICE9PSAnLycgPyBzdHlsZXMuZm9yX21vYmlsZSA6IG51bGx9YH0+XHJcbiAgICAgICAgICAgICAgICAgICAge3VzZXJMb2dnZWQgPyA8TG9nZ2VkIC8+IDpcclxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5hdXRoX2NvbnRhaW5lcn0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmF1dGhfYnV0dG9uc30+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5zaWduX3VwX2J1dHRvbn0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxMaW5rIGhyZWY9e3JlZ2lzdHJhdGlvbl9wYXRofT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpbWcgc3JjPXtyZWdpc3Rlcl9pY29uLnNyY30gYWx0PVwiXCIgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9MaW5rPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8TGluayBocmVmPXtyZWdpc3RyYXRpb25fcGF0aH0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJlZ2lzdHJhdGlvblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9MaW5rPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXZcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPXtzdHlsZXMuc2lnbl9pbl9idXR0b259XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9e2xvZ2luTW9kYWxIYW5kbGV9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aW1nIHNyYz17bG9naW5faWNvbi5zcmN9IGFsdD1cIlwiIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxvZ2luXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5sYW5nX2J1dHRvbn0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXZcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17c3R5bGVzLmxhbmdfYnV0dG9uX2NvbnRlbnR9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdHlsZT17c2hvd0Ryb3AgPyB7IGRpc3BsYXk6ICdub25lJyB9IDogbnVsbH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IHNldFNob3dEcm9wKHRydWUpfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRyYW5zbGF0ZShgJHtsYW5ndWFnZXNUaXRsZS5jb250ZW50T25UaXRsZX1gKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpbWdcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzcmM9e2xhbmd1YWdlc1RpdGxlLmljb259XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYWx0PVwibGFuZy1mbGFnXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICB7c2hvd0Ryb3AgJiYgPExhbmd1YWdlRHJvcFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xpY2s9e2NoYW5nZUxhbmdUaXRsZX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2xvc2U9eygpID0+IHNldFNob3dEcm9wKGZhbHNlKX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRhdGE9e2xhbmd1YWdlc19kYXRhfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAvPn1cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDwvZGl2ID5cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIDwvPlxyXG4gICAgKVxyXG59XHJcbiIsIi8vIGZsYWcgaWNvbnNcclxuaW1wb3J0IHJ1c0ZsYWcgZnJvbSAnL3B1YmxpYy9pbWFnZXMvaGVhZGVyL2ZsYWdzL3J1cy5wbmcnXHJcbmltcG9ydCBhcm1GbGFnIGZyb20gJy9wdWJsaWMvaW1hZ2VzL2hlYWRlci9mbGFncy9hcm0uc3ZnJ1xyXG5pbXBvcnQgZW5GbGFnIGZyb20gJy9wdWJsaWMvaW1hZ2VzL2hlYWRlci9mbGFncy9lbi5zdmcnXHJcbmltcG9ydCBlc3BGbGFnIGZyb20gJy9wdWJsaWMvaW1hZ2VzL2hlYWRlci9mbGFncy9lc3Auc3ZnJ1xyXG5pbXBvcnQgZnJjRmxhZyBmcm9tICcvcHVibGljL2ltYWdlcy9oZWFkZXIvZmxhZ3MvZnJjLnN2ZydcclxuaW1wb3J0IGRldUZsYWcgZnJvbSAnL3B1YmxpYy9pbWFnZXMvaGVhZGVyL2ZsYWdzL2RldS5zdmcnXHJcblxyXG5cclxuZXhwb3J0IGNvbnN0IGxhbmd1YWdlcyA9XHJcbiAgICBbXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBsYW5nOiBcImFtXCIsXHJcbiAgICAgICAgICAgIGNvbnRlbnRPblRpdGxlOiAnYW0ub25UaXRsZScsXHJcbiAgICAgICAgICAgIGNvbnRlbnRPbkRyb3A6ICdhbS5vbkRyb3AnLFxyXG4gICAgICAgICAgICBpY29uOiBhcm1GbGFnLnNyYyxcclxuICAgICAgICB9LFxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgbGFuZzogXCJyc1wiLFxyXG4gICAgICAgICAgICBjb250ZW50T25UaXRsZTogJ3JzLm9uVGl0bGUnLFxyXG4gICAgICAgICAgICBjb250ZW50T25Ecm9wOiAncnMub25Ecm9wJyxcclxuICAgICAgICAgICAgaWNvbjogcnVzRmxhZy5zcmMsXHJcbiAgICAgICAgfSxcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIGxhbmc6IFwiZW5cIixcclxuICAgICAgICAgICAgY29udGVudE9uVGl0bGU6ICdlbi5vblRpdGxlJyxcclxuICAgICAgICAgICAgY29udGVudE9uRHJvcDogJ2VuLm9uRHJvcCcsXHJcbiAgICAgICAgICAgIGljb246IGVuRmxhZy5zcmMsXHJcbiAgICAgICAgfSxcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIGxhbmc6IFwiZXNwXCIsXHJcbiAgICAgICAgICAgIGNvbnRlbnRPblRpdGxlOiAnZXNwLm9uVGl0bGUnLFxyXG4gICAgICAgICAgICBjb250ZW50T25Ecm9wOiAnZXNwLm9uRHJvcCcsXHJcbiAgICAgICAgICAgIGljb246IGVzcEZsYWcuc3JjLFxyXG4gICAgICAgIH0sXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBsYW5nOiBcImZyXCIsXHJcbiAgICAgICAgICAgIGNvbnRlbnRPblRpdGxlOiAnZnJjLm9uVGl0bGUnLFxyXG4gICAgICAgICAgICBjb250ZW50T25Ecm9wOiAnZnJjLm9uRHJvcCcsXHJcbiAgICAgICAgICAgIGljb246IGZyY0ZsYWcuc3JjLFxyXG4gICAgICAgIH0sXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBsYW5nOiBcImRldVwiLFxyXG4gICAgICAgICAgICBjb250ZW50T25UaXRsZTogJ2RldS5vblRpdGxlJyxcclxuICAgICAgICAgICAgY29udGVudE9uRHJvcDogJ2RldS5vbkRyb3AnLFxyXG4gICAgICAgICAgICBpY29uOiBkZXVGbGFnLnNyYyxcclxuICAgICAgICB9LFxyXG4gICAgXVxyXG4iLCIvLyBob29rcyBhbmQgaGVscGVyc1xyXG5pbXBvcnQgeyB1c2VSb3V0ZXIgfSBmcm9tICduZXh0L2Rpc3QvY2xpZW50L3JvdXRlcic7XHJcbmltcG9ydCB7IHVzZUVmZmVjdCwgdXNlUmVmIH0gZnJvbSAncmVhY3QnO1xyXG4vLyB0cmFuc2xhdGlvbiBcclxuaW1wb3J0IHVzZVRyYW5zbGF0aW9uIGZyb20gJ25leHQtdHJhbnNsYXRlL3VzZVRyYW5zbGF0aW9uJ1xyXG4vLyBjb21wb25ldG5zXHJcbmltcG9ydCBMaW5rIGZyb20gJ25leHQvbGluaydcclxuLy8gc3R5bGVzIFxyXG5pbXBvcnQgc3R5bGVzIGZyb20gJy4vTGFuZ3VhZ2VEcm9wLm1vZHVsZS5zY3NzJ1xyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIExhbmd1YWdlRHJvcCh7IG9uQ2xvc2UsIGNsaWNrLCBkYXRhIH0pIHtcclxuXHJcbiAgICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgICAgIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoXCJtb3VzZWRvd25cIiwgaGFuZGxlQ2xvc2UpO1xyXG4gICAgICAgIHJldHVybiAoKSA9PiB7XHJcbiAgICAgICAgICAgIGRvY3VtZW50LnJlbW92ZUV2ZW50TGlzdGVuZXIoXCJtb3VzZWRvd25cIiwgaGFuZGxlQ2xvc2UpO1xyXG4gICAgICAgIH1cclxuICAgIH0sIFtdKVxyXG5cclxuICAgIGNvbnN0XHJcbiAgICAgICAgbm9kZSA9IHVzZVJlZigpLFxyXG4gICAgICAgIHJvdXRlciA9IHVzZVJvdXRlcigpLFxyXG5cclxuICAgICAgICBoYW5kbGVDbG9zZSA9IChlKSA9PiB7XHJcbiAgICAgICAgICAgIGlmIChub2RlLmN1cnJlbnQuY29udGFpbnMoZS50YXJnZXQpKSB7XHJcbiAgICAgICAgICAgICAgICBpZiAoZS50YXJnZXQucGFyZW50Tm9kZSkgcmV0dXJuXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgb25DbG9zZSgpXHJcbiAgICAgICAgfSxcclxuICAgICAgICB7IHQgfSA9IHVzZVRyYW5zbGF0aW9uKCdjb21tb24nKSxcclxuICAgICAgICB0cmFuc2xhdGlvblBhdGggPSAnaGVhZGVyLmxhbmcuJyxcclxuICAgICAgICB0cmFuc2xhdGUgPSAoa2V5KSA9PiB0KGAke3RyYW5zbGF0aW9uUGF0aH0ke2tleX1gKVxyXG5cclxuXHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIDxkaXZcclxuICAgICAgICAgICAgY2xhc3NOYW1lPXtzdHlsZXMuY29udGFpbmVyfVxyXG4gICAgICAgICAgICByZWY9e25vZGV9XHJcbiAgICAgICAgPlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmNvbnRlbnR9PlxyXG4gICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgIGRhdGEubWFwKGVsID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIChcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxMaW5rXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaHJlZj17YCR7cm91dGVyLnBhdGhuYW1lfWB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbG9jYWxlPXtlbC5sYW5nfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGtleT17YGNoYW5nZS1sYW5nLSR7ZWwubGFuZ31gfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLnJvd30+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNsaWNrPXtjbGlja31cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17YCR7ZWwubGFuZ31gfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdHJhbnNsYXRlKGVsLmNvbnRlbnRPbkRyb3ApXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGltZ1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb25DbGljaz17Y2xpY2t9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzcmM9e2VsLmljb259XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9e2Ake2VsLmxhbmd9YH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvTGluaz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgKVxyXG5cclxuICAgICAgICAgICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgIClcclxuXHJcbn1cclxuIiwiLy8gc3R5bGVzXHJcbmltcG9ydCB7IHVzZVN0YXRlLCB1c2VFZmZlY3QgfSBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCB7IHVzZVNlbGVjdG9yIH0gZnJvbSAncmVhY3QtcmVkdXgnO1xyXG5pbXBvcnQgeyBzZWxlY3RVc2VyIH0gZnJvbSAnLi4vLi4vLi4vLi4vLi4vcmVkdXgvZmVhdHVyZXMvdXNlclNsaWNlJztcclxuaW1wb3J0IHN0eWxlcyBmcm9tICcuL0xvZ2dlZC5tb2R1bGUuc2NzcydcclxuaW1wb3J0IHsgTG9nZ2VkRHJvcCB9IGZyb20gJy4vTG9nZ2VkRHJvcC9Mb2dnZWREcm9wJztcclxuaW1wb3J0IHsgTG9nZ2VkV2FsbHBlciB9IGZyb20gJy4vTG9nZ2VkV2FsbHBlci9Mb2dnZWRXYWxscGVyJ1xyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIExvZ2dlZCggKSB7XHJcbiAgICBjb25zdFxyXG4gICAgICAgIC8vIHN0YXRlc1xyXG4gICAgICAgIC8vY2hhbmdlIHVzZXIgZHJvcGRvd25cclxuICAgICAgICBbc2hvd1VzZXJEcm9wLCBzZXRTaG93VXNlckRyb3BdID0gdXNlU3RhdGUoZmFsc2UpXHJcblxyXG4gICAgY29uc3QgZGF0YSA9IHVzZVNlbGVjdG9yKHNlbGVjdFVzZXIpO1xyXG4gICAgY29uc3QgW3Bob3RvLHNldFBob3RvXSA9IHVzZVN0YXRlKGRhdGEucGhvdG8pO1xyXG4gICAgdXNlRWZmZWN0ICgoKT0+e1xyXG4gICAgICAgIHNldFBob3RvKGRhdGEucGhvdG8pXHJcbiAgICB9LCBbZGF0YV0pO1xyXG5cclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPGRpdlxyXG4gICAgICAgICAgICBjbGFzc05hbWU9e3N0eWxlcy5jb250YWluZXJ9XHJcbiAgICAgICAgICAgIHN0eWxlPXtzaG93VXNlckRyb3AgPyB7IHBhZGRpbmc6ICcxNy41cHggMCcgfSA6IG51bGx9PlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmNvbnRlbnR9PlxyXG4gICAgICAgICAgICAgICAgeyFzaG93VXNlckRyb3AgP1xyXG4gICAgICAgICAgICAgICAgICAgIDxMb2dnZWRXYWxscGVyXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGltZz17cGhvdG99XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGZ1bGxOYW1lPXtkYXRhLnVzZXJuYW1lfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBjbGljaz17KCkgPT4gc2V0U2hvd1VzZXJEcm9wKHRydWUpfVxyXG4gICAgICAgICAgICAgICAgICAgIC8+IDpcclxuICAgICAgICAgICAgICAgICAgICA8TG9nZ2VkRHJvcFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBvbkNsb3NlPXsoKSA9PiBzZXRTaG93VXNlckRyb3AoZmFsc2UpfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICB1c2VyPXtkYXRhfVxyXG4gICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgKVxyXG59XHJcbiIsIi8vIGhvb2tzIGFuZCBoZWxwZXJzXHJcbmltcG9ydCB7IHVzZVJvdXRlciB9IGZyb20gJ25leHQvZGlzdC9jbGllbnQvcm91dGVyJztcclxuaW1wb3J0IHsgdXNlRWZmZWN0LCB1c2VSZWYgfSBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCB7IHVzZURpc3BhdGNoIH0gZnJvbSAncmVhY3QtcmVkdXgnO1xyXG5pbXBvcnQgdXNlckRlZmF1bHRJY29uIGZyb20gJy9wdWJsaWMvaW1hZ2VzL2NvbW1vbi91c2VyRGVmYXVsdC5wbmcnXHJcbi8vIHRyYW5zbGF0aW9uIFxyXG5pbXBvcnQgdXNlVHJhbnNsYXRpb24gZnJvbSAnbmV4dC10cmFuc2xhdGUvdXNlVHJhbnNsYXRpb24nXHJcbi8vIGNvbXBvbmV0bnNcclxuaW1wb3J0IExpbmsgZnJvbSAnbmV4dC9saW5rJ1xyXG4vLyBzdHlsZXMgXHJcbmltcG9ydCBzdHlsZXMgZnJvbSAnLi9Mb2dnZWREcm9wLm1vZHVsZS5zY3NzJ1xyXG4vLyBpY29uc1xyXG5pbXBvcnQgdGVsSWNvbiBmcm9tICcvcHVibGljL2ltYWdlcy9jb21tb24vcGhvbmUucG5nJ1xyXG5pbXBvcnQgeyBsb2dvdXQgfSBmcm9tICcvcmVkdXgvZmVhdHVyZXMvdXNlclNsaWNlJztcclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBMb2dnZWREcm9wKHsgb25DbG9zZSwgdXNlciB9KSB7XHJcblxyXG4gICAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgICAgICBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKFwibW91c2Vkb3duXCIsIGhhbmRsZUNsb3NlKTtcclxuICAgICAgICByZXR1cm4gKCkgPT4ge1xyXG4gICAgICAgICAgICBkb2N1bWVudC5yZW1vdmVFdmVudExpc3RlbmVyKFwibW91c2Vkb3duXCIsIGhhbmRsZUNsb3NlKTtcclxuICAgICAgICB9XHJcbiAgICB9LCBbXSlcclxuXHJcbiAgICBjb25zdFxyXG4gICAgICAgIG5vZGUgPSB1c2VSZWYoKSxcclxuICAgICAgICByb3V0ZXIgPSB1c2VSb3V0ZXIoKSxcclxuXHJcbiAgICAgICAgaGFuZGxlQ2xvc2UgPSAoZSkgPT4ge1xyXG4gICAgICAgICAgICBpZiAobm9kZS5jdXJyZW50LmNvbnRhaW5zKGUudGFyZ2V0KSkge1xyXG4gICAgICAgICAgICAgICAgaWYgKGUudGFyZ2V0LnBhcmVudE5vZGUpIHJldHVyblxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIG9uQ2xvc2UoKVxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgeyB0IH0gPSB1c2VUcmFuc2xhdGlvbignY29tbW9uJyksXHJcbiAgICAgICAgdHJhbnNsYXRpb25QYXRoID0gJ2NvbW1vbnMuJyxcclxuICAgICAgICB0cmFuc2xhdGUgPSAoa2V5KSA9PiB0KGAke3RyYW5zbGF0aW9uUGF0aH0ke2tleX1gKSxcclxuICAgICAgICBkaXNwYXRjaCA9IHVzZURpc3BhdGNoKClcclxuXHJcbiAgICBmdW5jdGlvbiBfbG9nb3V0KCkge1xyXG4gICAgICAgIGRpc3BhdGNoKGxvZ291dCgpKTtcclxuICAgICAgICByb3V0ZXIucHVzaChgL2ApO1xyXG4gICAgfSAgICBcclxuXHJcblxyXG4gICAgZnVuY3Rpb24gZ29Ub1BlcnNvbmFsICgpIHtcclxuICAgICAgICByb3V0ZXIucHVzaChgL3BlcnNvbmFsYCk7XHJcbiAgICB9XHJcblxyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8ZGl2XHJcbiAgICAgICAgICAgIGNsYXNzTmFtZT17c3R5bGVzLmNvbnRhaW5lcn1cclxuICAgICAgICAgICAgcmVmPXtub2RlfVxyXG4gICAgICAgID5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5jb250ZW50fT5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMudXNlcl9waG90b19uYW1lfT5cclxuICAgICAgICAgICAgICAgICAgICA8c3BhbiBvbkNsaWNrPXtnb1RvUGVyc29uYWx9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICB7LyogPExpbmsgaHJlZj0nL3BlcnNvbmFsJz4gKi99XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aW1nIHNyYz17dXNlci5waG90byA/PyB1c2VyRGVmYXVsdEljb24uc3JjfSBhbHQ9XCJcIiAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICB7LyogPC9MaW5rPiAqL31cclxuICAgICAgICAgICAgICAgICAgICA8L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgICAgPHNwYW4gb25DbGljaz17Z29Ub1BlcnNvbmFsfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgey8qIDxMaW5rIGhyZWY9Jy9wZXJzb25hbCc+ICovfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAge3VzZXIudXNlcm5hbWV9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHsvKiA8L0xpbms+ICovfVxyXG4gICAgICAgICAgICAgICAgICAgIDwvc3Bhbj5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy51c2VyX3RlbH0+XHJcbiAgICAgICAgICAgICAgICAgICAgPHNwYW4+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxpbWcgc3JjPXt0ZWxJY29uLnNyY30gYWx0PVwiXCIgLz5cclxuICAgICAgICAgICAgICAgICAgICA8L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgICAgPHNwYW4+e3VzZXIudGVsZXBob25lfTwvc3Bhbj5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5sb2dPdXR9PlxyXG4gICAgICAgICAgICAgICAgICAgIDxzcGFuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+X2xvZ291dCgpIH1cclxuICAgICAgICAgICAgICAgICAgICA+e3RyYW5zbGF0ZSgnbG9nT3V0Jyl9PC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgKVxyXG5cclxufVxyXG4iLCIvLyBjb21wb25lbnRzXHJcbmltcG9ydCBMaW5rIGZyb20gJ25leHQvbGluaydcclxuaW1wb3J0IHsgdXNlRWZmZWN0LHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnXHJcbmltcG9ydCB7IHVzZVNlbGVjdG9yIH0gZnJvbSAncmVhY3QtcmVkdXgnXHJcbmltcG9ydCB7IHNlbGVjdFVzZXIgfSBmcm9tICcuLi8uLi8uLi8uLi8uLi8uLi9yZWR1eC9mZWF0dXJlcy91c2VyU2xpY2UnXHJcbi8vIHN0eWxlc1xyXG5pbXBvcnQgc3R5bGVzIGZyb20gJy4vTG9nZ2VkV2FsbHBlci5tb2R1bGUuc2NzcydcclxuLy8gaWNvbnNcclxuaW1wb3J0IHRyaWFuZ2xlIGZyb20gJy9wdWJsaWMvaW1hZ2VzL2NvbW1vbi90cmlhbmdsZS5wbmcnXHJcbmltcG9ydCB1c2VyRGVmYXVsdEljb24gZnJvbSAnL3B1YmxpYy9pbWFnZXMvY29tbW9uL3VzZXJEZWZhdWx0LnBuZydcclxuXHJcblxyXG5leHBvcnQgZnVuY3Rpb24gTG9nZ2VkV2FsbHBlcih7XHJcbiAgICBpbWcsXHJcbiAgICBmdWxsTmFtZSxcclxuICAgIGNsaWNrXHJcbn0pIHtcclxuICAgIGNvbnN0IGRhdGEgPSB1c2VTZWxlY3RvcihzZWxlY3RVc2VyKTtcclxuICAgIGNvbnN0IFsgcGhvdG8sIHNldFBob3RvIF0gPSB1c2VTdGF0ZShkYXRhLnBob3RvKVxyXG4gICAgY29uc3QgWyBmdWxsbmFtZSwgc2V0RnVsbG5hbWUgXSA9IHVzZVN0YXRlKGRhdGEudXNlcm5hbWUpXHJcbiAgICB1c2VFZmZlY3QoKCk9PntcclxuICAgICAgICBzZXRQaG90byggZGF0YS5waG90byApXHJcbiAgICAgICAgc2V0RnVsbG5hbWUoIGRhdGEudXNlcm5hbWUgKVxyXG4gICAgfSxbZGF0YV0pXHJcblxyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmNvbnRhaW5lcn0+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuY29udGVudH0+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLnVzZXJfcGhvdG99PlxyXG4gICAgICAgICAgICAgICAgICAgIDxMaW5rIGhyZWY9Jy9wZXJzb25hbCc+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxpbWdcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNyYz17cGhvdG8gfHwgdXNlckRlZmF1bHRJY29uLnNyY31cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFsdD17YCR7ZnVsbG5hbWV9IGljb25gfSAvPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvTGluaz5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPGRpdlxyXG4gICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17c3R5bGVzLnVzZXJfZnVsbE5hbWV9XHJcbiAgICAgICAgICAgICAgICAgICAgb25DbGljaz17Y2xpY2t9XHJcbiAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPXtzdHlsZXMuZnVsbG5hbWV9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICB7ZnVsbG5hbWV9XHJcbiAgICAgICAgICAgICAgICAgICAgPC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgIDxzcGFuIHN0eWxlPXt7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbG9yOiAnd2hpdGUnLFxyXG4gICAgICAgICAgICAgICAgICAgIH19PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8aW1nXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzcmM9e3RyaWFuZ2xlLnNyY31cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFsdD1cInRyaWFuZ2xlXCIgLz5cclxuICAgICAgICAgICAgICAgICAgICA8L3NwYW4+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICApXHJcbn1cclxuIiwiLy8gaG9va3MgYW5kIGhlbHBlcnNcclxuaW1wb3J0IHsgdXNlUm91dGVyIH0gZnJvbSAnbmV4dC9kaXN0L2NsaWVudC9yb3V0ZXInXHJcbmltcG9ydCB7IHVzZUVmZmVjdCwgdXNlUmVmLCB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0JztcclxuXHJcblxyXG4vLyBzdHlsZXNcclxuaW1wb3J0IHN0eWxlcyBmcm9tICcuL0Ryb3Bkb3duLm1vZHVsZS5zY3NzJztcclxuXHJcbi8vIHRyYW5zbGF0aW9uIFxyXG5pbXBvcnQgdXNlVHJhbnNsYXRpb24gZnJvbSAnbmV4dC10cmFuc2xhdGUvdXNlVHJhbnNsYXRpb24nXHJcblxyXG4vL2ltZ3NcclxuaW1wb3J0IGRyb3Bkb3duTGluZXMgZnJvbSAnL3B1YmxpYy9pbWFnZXMvaGVhZGVyL2Ryb3Bkb3duX2xpbmVzLnBuZyc7XHJcblxyXG4vL2NvbXBvbmVudHNcclxuaW1wb3J0IExpbmsgZnJvbSAnbmV4dC9saW5rJ1xyXG5pbXBvcnQgQ29udGFjdHNNb2RhbCBmcm9tICcuLi8uLi8uLi9QYWdlcy9Db250YWN0cy9Db250YWN0c01vZGFsJztcclxuXHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBEcm9wZG93bigpIHtcclxuICAgIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICAgICAgZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcihcIm1vdXNlZG93blwiLCBoYW5kbGVDbG9zZSk7XHJcbiAgICAgICAgcmV0dXJuICgpID0+IHtcclxuICAgICAgICAgICAgZG9jdW1lbnQucmVtb3ZlRXZlbnRMaXN0ZW5lcihcIm1vdXNlZG93blwiLCBoYW5kbGVDbG9zZSk7XHJcbiAgICAgICAgfVxyXG4gICAgfSwgW10pXHJcblxyXG4gICAgY29uc3RcclxuICAgICAgICBbc2hvd0Ryb3Bkb3duLCBzZXRTaG93RHJvcGRvd25dID0gdXNlU3RhdGUoZmFsc2UpLFxyXG4gICAgICAgIFtzaG93Q29udGFjdHNNb2RhbCwgc2V0U2hvd0NvbnRhY3RzTW9kYWxdID0gdXNlU3RhdGUoZmFsc2UpLFxyXG5cclxuICAgICAgICB7IHQgfSA9IHVzZVRyYW5zbGF0aW9uKCdjb21tb24nKSxcclxuICAgICAgICB0cmFuc2xhdGlvblBhdGggPSAnaGVhZGVyLm5hdkJhci4nLFxyXG4gICAgICAgIHRyYW5zbGF0ZSA9IChrZXkpID0+IHQoYCR7dHJhbnNsYXRpb25QYXRofSR7a2V5fWApLFxyXG5cclxuICAgICAgICByb3V0ZXIgPSB1c2VSb3V0ZXIoKSxcclxuXHJcbiAgICAgICAgbm9kZSA9IHVzZVJlZigpLFxyXG5cclxuICAgICAgICBoYW5kbGVDbG9zZSA9IChlKSA9PiB7XHJcbiAgICAgICAgICAgIGlmIChub2RlPy5jdXJyZW50Py5jb250YWlucyhlLnRhcmdldCkpIHtcclxuICAgICAgICAgICAgICAgIGlmIChlLnRhcmdldC5wYXJlbnROb2RlKSByZXR1cm5cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBzZXRTaG93RHJvcGRvd24oZmFsc2UpXHJcbiAgICAgICAgfSxcclxuXHJcbiAgICAgICAgYnV0dG9uc0luSG9tZVBhZ2UgPSBbXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIGlkOiAnbWFpbicsXHJcbiAgICAgICAgICAgICAgICBrZXk6IE1hdGgucmFuZG9tKCksXHJcbiAgICAgICAgICAgICAgICBmcnN0Q29udGVudDogdHJhbnNsYXRlKCdtYWluJyksXHJcbiAgICAgICAgICAgICAgICBocmVmOiAnLydcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgaWQ6ICdnYW1lcycsXHJcbiAgICAgICAgICAgICAgICBrZXk6IE1hdGgucmFuZG9tKCksXHJcbiAgICAgICAgICAgICAgICBmcnN0Q29udGVudDogdHJhbnNsYXRlKCdnYW1lcycpLFxyXG4gICAgICAgICAgICAgICAgaHJlZjogJy9nYW1lcydcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgaWQ6ICdzdGF0aXN0aWNzJyxcclxuICAgICAgICAgICAgICAgIGtleTogTWF0aC5yYW5kb20oKSxcclxuICAgICAgICAgICAgICAgIGZyc3RDb250ZW50OiB0cmFuc2xhdGUoJ3N0YXRpc3RpY3MuZnJzJyksXHJcbiAgICAgICAgICAgICAgICBzZWNDb250ZW50OiB0cmFuc2xhdGUoJ3N0YXRpc3RpY3Muc2VjJyksXHJcbiAgICAgICAgICAgICAgICBocmVmOiAnL3N0YXRpc3RpY3MnXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIGlkOiAncHJlZGljdGlvbicsXHJcbiAgICAgICAgICAgICAgICBrZXk6IE1hdGgucmFuZG9tKCksXHJcbiAgICAgICAgICAgICAgICBmcnN0Q29udGVudDogdHJhbnNsYXRlKCdwcmVkaWN0aW9uLmZycycpLFxyXG4gICAgICAgICAgICAgICAgc2VjQ29udGVudDogdHJhbnNsYXRlKCdwcmVkaWN0aW9uLnNlYycpLFxyXG4gICAgICAgICAgICAgICAgaHJlZjogJy9wcmVkaWN0aW9uJ1xyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICBpZDogJ3Rlc3RpbW9uaWFscycsXHJcbiAgICAgICAgICAgICAgICBrZXk6IE1hdGgucmFuZG9tKCksXHJcbiAgICAgICAgICAgICAgICBmcnN0Q29udGVudDogdHJhbnNsYXRlKCd0ZXN0aW1vbmlhbHMnKSxcclxuICAgICAgICAgICAgICAgIGhyZWY6ICcvdGVzdGltb25pYWxzJ1xyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICBpZDogJ2Fib3V0VXMnLFxyXG4gICAgICAgICAgICAgICAga2V5OiBNYXRoLnJhbmRvbSgpLFxyXG4gICAgICAgICAgICAgICAgZnJzdENvbnRlbnQ6IHRyYW5zbGF0ZSgnYWJvdXRVcycpLFxyXG4gICAgICAgICAgICAgICAgaHJlZjogJy9hYm91dFVzJ1xyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICBpZDogJ2NvbnRhY3RzJyxcclxuICAgICAgICAgICAgICAgIGtleTogTWF0aC5yYW5kb20oKSxcclxuICAgICAgICAgICAgICAgIGZyc3RDb250ZW50OiB0cmFuc2xhdGUoJ2NvbnRhY3RzJyksXHJcbiAgICAgICAgICAgICAgICBocmVmOiBudWxsLFxyXG4gICAgICAgICAgICAgICAgY2xpY2s6ICgpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICBzZXRTaG93RHJvcGRvd24oZmFsc2UpXHJcbiAgICAgICAgICAgICAgICAgICAgc2V0U2hvd0NvbnRhY3RzTW9kYWwodHJ1ZSlcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfSxcclxuICAgICAgICBdLFxyXG4gICAgICAgIGJ1dHRvbnMgPSBidXR0b25zSW5Ib21lUGFnZS5maWx0ZXIoZWwgPT4gZWwuaWQgIT09IFwic3RhdGlzdGljc1wiKVxyXG5cclxuXHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuZHJvcGRvd259PlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmRyb3Bkb3duX2NoZWNrfT5cclxuICAgICAgICAgICAgICAgIDxpbWcgc3JjPXtkcm9wZG93bkxpbmVzLnNyY30gYWx0PVwiZHJvcC1jaGVjay1pY29uXCIgb25DbGljaz17KCkgPT4gc2V0U2hvd0Ryb3Bkb3duKCFzaG93RHJvcGRvd24pfSAvPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAge3Nob3dEcm9wZG93biAmJiAoXHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmRyb3Bkb3duX21lbnV9IHJlZj17bm9kZX0+XHJcbiAgICAgICAgICAgICAgICAgICAgPHVsIGNsYXNzTmFtZT17c3R5bGVzLmRyb3Bkb3duX2xpc3R9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAocm91dGVyLnBhdGhuYW1lID09PSAnLycgPyBidXR0b25zSW5Ib21lUGFnZSA6IGJ1dHRvbnMpLm1hcChlbCA9PiAoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPExpbmtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaHJlZj17ZWwuaHJlZiA/IGVsLmhyZWYgOiBcIlwifVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBrZXk9e2VsLmtleX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsaVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb25DbGljaz17ZWwuY2xpY2sgJiYgZWwuY2xpY2t9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9e3N0eWxlcy5kcm9wZG93bl9saXN0X2l0ZW1zfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7ZWwuZnJzdENvbnRlbnR9IHtlbC5zZWNDb250ZW50fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2xpPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvTGluaz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICkpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICA8L3VsPlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICl9XHJcbiAgICAgICAgICAgIHtzaG93Q29udGFjdHNNb2RhbCAmJlxyXG4gICAgICAgICAgICAgICAgPENvbnRhY3RzTW9kYWxcclxuICAgICAgICAgICAgICAgICAgICBvcGVuZWQ9e3Nob3dDb250YWN0c01vZGFsID8gdHJ1ZSA6IGZhbHNlfVxyXG4gICAgICAgICAgICAgICAgICAgIG9uTW9kYWxDbG9zZT17KCkgPT4gc2V0U2hvd0NvbnRhY3RzTW9kYWwoZmFsc2UpfVxyXG4gICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgKVxyXG59IiwiLy8gY29tcG9uZW50c1xyXG5pbXBvcnQgeyBNb2RhbCB9IGZyb20gJy4uLy4uLy4uL2NvbW1vbi9hdXRoL01vZGFsL01vZGFsJ1xyXG5pbXBvcnQgeyBTb2NpYWxNZWRpYUljb25zIH0gZnJvbSAnLi9Tb2NpYWxNZWRpYUljb25zL1NvY2lhbE1lZGlhSWNvbnMnXHJcbmltcG9ydCB7IEZvcmdvdFBhc3N3b3JkIH0gZnJvbSAnLi9SZXNldFBhc3N3b3JkL0ZvcmdvdFBhc3N3b3JkL0ZvcmdvdFBhc3N3b3JkJ1xyXG5pbXBvcnQgeyBMb2dpbkZvcm0gfSBmcm9tICcuL0xvZ2luRm9ybS9Mb2dpbkZvcm0nXHJcbi8vIHN0eWxlc1xyXG5pbXBvcnQgc3R5bGVzIGZyb20gJy4vTG9naW4ubW9kdWxlLnNjc3MnXHJcbmltcG9ydCB7IHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnXHJcblxyXG5cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBMb2dpbih7IG9uTW9kYWxDbG9zZSB9KSB7XHJcblxyXG4gICAgY29uc3RcclxuICAgICAgICBbc2hvd0xvZ2luTW9kYWwsIHNldFNob3dMb2dpbk1vZGFsXSA9IHVzZVN0YXRlKHRydWUpLFxyXG4gICAgICAgIFtzaG93UmVzZXRQYXNzd29yZE1vZGFsLCBzZXRTaG93UmVzZXRQYXNzd29yZE1vZGFsXSA9IHVzZVN0YXRlKGZhbHNlKVxyXG5cclxuICAgIGNvbnNvbGUubG9nKHNob3dSZXNldFBhc3N3b3JkTW9kYWwpO1xyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8PlxyXG4gICAgICAgICAgICB7c2hvd0xvZ2luTW9kYWwgJiZcclxuICAgICAgICAgICAgICAgIDxNb2RhbCBvbkNsb3NlPXtvbk1vZGFsQ2xvc2V9IGNvbnRlbnRTdHlsZXM9e3N0eWxlcy5tX2NvbnRlbnR9IGNvbnRhaW5lclN0eWxlcz17c3R5bGVzLm1fY29udGFpbmVyfT5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmxvZ2luX2NvbnRhaW5lcn0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxTb2NpYWxNZWRpYUljb25zIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxMb2dpbkZvcm1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uTW9kYWxDbG9zZT17b25Nb2RhbENsb3NlfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaGFuZGxlUmVzZXRQYXNzTW9kYWw9eygpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzZXRTaG93UmVzZXRQYXNzd29yZE1vZGFsKHRydWUpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc2V0U2hvd0xvZ2luTW9kYWwoZmFsc2UpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPC9Nb2RhbD5cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB7c2hvd1Jlc2V0UGFzc3dvcmRNb2RhbCAmJiA8Rm9yZ290UGFzc3dvcmQgb25Nb2RhbENsb3NlPXtvbk1vZGFsQ2xvc2V9IC8+fVxyXG4gICAgICAgIDwvPlxyXG4gICAgKVxyXG59XHJcbiIsIi8vIGhvb2tzIGFuZCBoZWxwZXJzXHJcbmltcG9ydCB1c2VUcmFuc2xhdGlvbiBmcm9tICduZXh0LXRyYW5zbGF0ZS91c2VUcmFuc2xhdGlvbidcclxuaW1wb3J0IHsgdXNlRm9ybSB9IGZyb20gJ3JlYWN0LWhvb2stZm9ybSdcclxuaW1wb3J0ICogYXMgeXVwIGZyb20gJ3l1cCdcclxuaW1wb3J0IHsgeXVwUmVzb2x2ZXIgfSBmcm9tICdAaG9va2Zvcm0vcmVzb2x2ZXJzL3l1cCdcclxuaW1wb3J0IHsgcmVxdWVzdCwgc2V0Q29va2llIH0gZnJvbSAnLi4vLi4vLi4vLi4vLi4vbGliL2VyLmxpYic7XHJcbi8vY29tcG9uZW50c1xyXG5pbXBvcnQgeyBJbnB1dENvbnRhaW5lciB9IGZyb20gJy9jb21wb25lbnRzL2NvbW1vbi9hdXRoL0lucHV0Q29udGFpbmVyL0lucHV0Q29udGFpbmVyJ1xyXG5pbXBvcnQgeyBUaXRsZSB9IGZyb20gJy4uL2NvbW1vbi9UaXRsZSdcclxuaW1wb3J0IHsgUmVzZXRQYXNzd29yZExpbmsgfSBmcm9tICcuLi9jb21tb24vUmVzZXRQYXNzd29yZExpbmsnXHJcbmltcG9ydCB7IFN1Ym1pdCB9IGZyb20gJy4uL2NvbW1vbi9TdWJtaXQnXHJcbmltcG9ydCB7IFRvUmVnaXN0ZXIgfSBmcm9tICcuLi9jb21tb24vVG9SZWdpc3RlcidcclxuLy8gc3R5bGVzIFxyXG5pbXBvcnQgc3R5bGVzIGZyb20gJy4vTG9naW5Gb3JtLm1vZHVsZS5zY3NzJ1xyXG5pbXBvcnQgeyB1c2VEaXNwYXRjaCB9IGZyb20gJ3JlYWN0LXJlZHV4J1xyXG5pbXBvcnQgeyBsb2dpbiB9IGZyb20gJy4uLy4uLy4uLy4uLy4uL3JlZHV4L2ZlYXR1cmVzL3VzZXJTbGljZSdcclxuaW1wb3J0IHsgR0VUX0FDQ09VTlRfSU5GTywgTE9HSU4gfSBmcm9tICcuLi8uLi8uLi8uLi8uLi9saWIvcmVxdWVzdC1kZXN0aW5hdGlvbnMnO1xyXG5cclxuaW1wb3J0IHsgVG9hc3RDb250YWluZXIsIHRvYXN0IH0gZnJvbSAncmVhY3QtdG9hc3RpZnknO1xyXG5pbXBvcnQgeyB1c2VSb3V0ZXIgfSBmcm9tICduZXh0L2Rpc3QvY2xpZW50L3JvdXRlcic7XHJcblxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIExvZ2luRm9ybSh7IG9uTW9kYWxDbG9zZSwgaGFuZGxlUmVzZXRQYXNzTW9kYWwgfSkge1xyXG4gICAgY29uc3Qgcm91dGVyID0gdXNlUm91dGVyKCk7XHJcblxyXG4gICAgY29uc3RcclxuICAgICAgICBkaXNwYXRjaCA9IHVzZURpc3BhdGNoKCksXHJcbiAgICAgICAgLy8gdHJhbnNsYXRpb24gY29uc2ZpZ3NcclxuICAgICAgICB7IHQgfSA9IHVzZVRyYW5zbGF0aW9uKCdjb21tb24nKSxcclxuICAgICAgICB0cmFuc2xhdGlvblBhdGggPSAncmVnaXN0cmF0aW9uLmlucHV0UGxhY2VIb2xkZXJzLicsXHJcbiAgICAgICAgdHJhbnNsYXRlID0ga2V5ID0+IHQoYCR7dHJhbnNsYXRpb25QYXRofSR7a2V5fWApLFxyXG4gICAgICAgIGhhbmRsZV90b19yZWdpc3Rlcl9jbGljayA9ICgpID0+IHtcclxuICAgICAgICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignYm9keScpLnN0eWxlLm92ZXJmbG93ID0gJ3Zpc2libGUnXHJcbiAgICAgICAgICAgIG9uTW9kYWxDbG9zZSgpXHJcbiAgICAgICAgfSxcclxuICAgICAgICAvLyB5dXAgY29uZmlnc1xyXG4gICAgICAgIHNjaGVtYSA9IHl1cC5vYmplY3QoKS5zaGFwZSh7XHJcbiAgICAgICAgICAgIGVtYWlsOiB5dXBcclxuICAgICAgICAgICAgICAgIC5zdHJpbmcoKVxyXG4gICAgICAgICAgICAgICAgLnJlcXVpcmVkKClcclxuICAgICAgICAgICAgICAgIC5tYXRjaGVzKC9eKChbXjw+KClcXFtcXF1cXFxcLiw7Olxcc0BcIl0rKFxcLltePD4oKVxcW1xcXVxcXFwuLDs6XFxzQFwiXSspKil8KFwiLitcIikpQCgoXFxbWzAtOV17MSwzfVxcLlswLTldezEsM31cXC5bMC05XXsxLDN9XFwuWzAtOV17MSwzfV0pfCgoW2EtekEtWlxcLTAtOV0rXFwuKStbYS16QS1aXXsyLH0pKSQvKSxcclxuICAgICAgICAgICAgcGFzc3dvcmQ6IHl1cFxyXG4gICAgICAgICAgICAgICAgLnN0cmluZygpXHJcbiAgICAgICAgICAgICAgICAucmVxdWlyZWQoKVxyXG4gICAgICAgICAgICAgICAgLm1pbig2KVxyXG4gICAgICAgIH0pLFxyXG4gICAgICAgIC8vIGZvcm0gY29uZmlnc1xyXG4gICAgICAgIHsgcmVnaXN0ZXIsIGhhbmRsZVN1Ym1pdCwgZm9ybVN0YXRlOiB7IGVycm9ycyB9IH0gPSB1c2VGb3JtKHtcclxuICAgICAgICAgICAgbW9kZTogJ29uQ2hhbmdlJyxcclxuICAgICAgICAgICAgcmVzb2x2ZXI6IHl1cFJlc29sdmVyKHNjaGVtYSlcclxuICAgICAgICB9KSxcclxuICAgICAgICAvLyBvbiBmb3JtIHN1Ym1pdFxyXG4gICAgICAgIHN1Ym1pdCA9IGFzeW5jIChkYXRhKSA9PiB7XHJcbiAgICAgICAgICAgIHRyeSB7XHJcbiAgICAgICAgICAgICAgICBjb25zdCB7IHRva2VuIH0gPSAoYXdhaXQgcmVxdWVzdCggTE9HSU4sIGRhdGEgKSkuZGF0YT8uZGF0YTtcclxuICAgICAgICAgICAgICAgIHNldENvb2tpZSggYGFjY2Vzcy10b2tlbmAsIHRva2VuLCAxICk7XHJcbiAgICAgICAgICAgICAgICBjb25zdCB1c2VyID0gKCBhd2FpdCByZXF1ZXN0KCBHRVRfQUNDT1VOVF9JTkZPLCB7fSwge2F1dGg6IHRydWV9ICkgKS5kYXRhPy5kYXRhO1xyXG4gICAgICAgICAgICAgICAgZGlzcGF0Y2gobG9naW4odXNlcikpO1xyXG4gICAgICAgICAgICAgICAgcm91dGVyLnB1c2goYC9gKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBjYXRjaCggZXJyb3IgKSB7XHJcbiAgICAgICAgICAgICAgICB0b2FzdCggZXJyb3IucmVzcG9uc2UuZGF0YT8ubWVzc2FnZSB8fCBg0J/RgNC+0LHQu9C10LzRiyDRgSDRgdC10YLRjNGOYCwge1xyXG4gICAgICAgICAgICAgICAgICAgIHR5cGU6IGBlcnJvcmBcclxuICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGhhbmRsZV90b19yZWdpc3Rlcl9jbGljaygpXHJcbiAgICAgICAgfTtcclxuXHJcbiAgICAgICAgXHJcblxyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmNvbnRhaW5lcn0+XHJcbiAgICAgICAgICAgIDxUaXRsZVxyXG4gICAgICAgICAgICAgICAgc3R5bGVzPXtzdHlsZXMudGl0bGV9XHJcbiAgICAgICAgICAgICAgICBjb250ZW50PXt0KCdoZWFkZXIubG9naW5Nb2RhbC50aXRsZScpfVxyXG4gICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICA8Zm9ybSBvblN1Ym1pdD17aGFuZGxlU3VibWl0KHN1Ym1pdCl9PlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5pbnB1dHN9PlxyXG4gICAgICAgICAgICAgICAgICAgIDxJbnB1dENvbnRhaW5lclxyXG4gICAgICAgICAgICAgICAgICAgICAgICBpZD0nbmFtZSdcclxuICAgICAgICAgICAgICAgICAgICAgICAgdHlwZT0ndGV4dCdcclxuICAgICAgICAgICAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9e3RyYW5zbGF0ZSgnZW1haWwnKX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgZXJyb3JzPXsoISFlcnJvcnMuZW1haWwpfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBvdGhlcj17cmVnaXN0ZXIoJ2VtYWlsJyl9XHJcbiAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAgICA8SW5wdXRDb250YWluZXJcclxuICAgICAgICAgICAgICAgICAgICAgICAgaWQ9J3Bhc3N3b3JkJ1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB0eXBlPSdwYXNzd29yZCdcclxuICAgICAgICAgICAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9e3RyYW5zbGF0ZSgncGFzc3dvcmQnKX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgZXJyb3JzPXshIWVycm9ycy5wYXNzd29yZH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgb3RoZXI9e3JlZ2lzdGVyKCdwYXNzd29yZCcpfVxyXG4gICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDxSZXNldFBhc3N3b3JkTGlua1xyXG4gICAgICAgICAgICAgICAgICAgIGNsaWNrPXtoYW5kbGVSZXNldFBhc3NNb2RhbH1cclxuICAgICAgICAgICAgICAgICAgICBzdHlsZXM9e3N0eWxlcy5yZXNldF9wYXNzd29yZH1cclxuICAgICAgICAgICAgICAgICAgICBjb250ZW50PXt0KCdoZWFkZXIubG9naW5Nb2RhbC5yZXNQYXNzd29yZCcpfVxyXG4gICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgIDxTdWJtaXRcclxuICAgICAgICAgICAgICAgICAgICBzdHlsZXM9e3N0eWxlcy5zdWJtaXR9XHJcbiAgICAgICAgICAgICAgICAgICAgY29udGVudD17dCgnaGVhZGVyLmxvZ2luTW9kYWwuc3VibWl0Jyl9XHJcbiAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICA8L2Zvcm0+XHJcbiAgICAgICAgICAgIDxUb1JlZ2lzdGVyXHJcbiAgICAgICAgICAgICAgICBocmVmPScvcmVnaXN0cmF0aW9uJ1xyXG4gICAgICAgICAgICAgICAgY2xpY2s9e2hhbmRsZV90b19yZWdpc3Rlcl9jbGlja31cclxuICAgICAgICAgICAgICAgIGNvbnRhaW5lcl9zdHlsZXM9e3N0eWxlcy50b19yZWdpc3Rlcl9jb250YWluZXJ9XHJcbiAgICAgICAgICAgICAgICBjb250ZW50X3N0eWxlcz17c3R5bGVzLnRvX3JlZ2lzdGVyX2NvbnRlbnR9XHJcbiAgICAgICAgICAgICAgICBvcj17dCgnaGVhZGVyLmxvZ2luTW9kYWwub3InKX1cclxuICAgICAgICAgICAgICAgIHJlZ2lzdGVyX3RleHRfc3R5bGVzPXtzdHlsZXMudG9fcmVnaXN0ZXJfdGV4dH1cclxuICAgICAgICAgICAgICAgIGNvbnRlbnQ9e3QoJ2hlYWRlci5sb2dpbk1vZGFsLnJlZ2lzdGVyJyl9XHJcbiAgICAgICAgICAgIC8+XHJcblxyXG5cclxuICAgICAgICAgICAgPFRvYXN0Q29udGFpbmVyIC8+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICApXHJcbn1cclxuIiwiLy8gaG9va3MgYW5kIGhlbHBlcnNcclxuaW1wb3J0IHVzZVRyYW5zbGF0aW9uIGZyb20gJ25leHQtdHJhbnNsYXRlL3VzZVRyYW5zbGF0aW9uJ1xyXG5pbXBvcnQgeyB1c2VGb3JtIH0gZnJvbSAncmVhY3QtaG9vay1mb3JtJ1xyXG5pbXBvcnQgeyB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0J1xyXG5pbXBvcnQgKiBhcyB5dXAgZnJvbSAneXVwJ1xyXG5pbXBvcnQgeyB5dXBSZXNvbHZlciB9IGZyb20gJ0Bob29rZm9ybS9yZXNvbHZlcnMveXVwJ1xyXG4vL2NvbXBvbmVudHNcclxuaW1wb3J0IHsgVGl0bGUgfSBmcm9tICcuLi8uLi9jb21tb24vVGl0bGUnXHJcbmltcG9ydCB7IElucHV0Q29udGFpbmVyIH0gZnJvbSAnL2NvbXBvbmVudHMvY29tbW9uL2F1dGgvSW5wdXRDb250YWluZXIvSW5wdXRDb250YWluZXInXHJcbmltcG9ydCB7IFN1Ym1pdCB9IGZyb20gJy4uLy4uL2NvbW1vbi9TdWJtaXQnXHJcbmltcG9ydCB7IE1vZGFsIH0gZnJvbSAnLi4vLi4vLi4vLi4vLi4vY29tbW9uL2F1dGgvTW9kYWwvTW9kYWwnXHJcbmltcG9ydCB7IEdldEVtYWlsQ29kZSB9IGZyb20gJy4uL0dldEVtYWlsQ29kZS9HZXRFbWFpbENvZGUnXHJcbi8vIHN0eWxlc1xyXG5pbXBvcnQgc3R5bGVzIGZyb20gJy4vRm9yZ290UGFzc3dvcmQubW9kdWxlLnNjc3MnXHJcblxyXG5pbXBvcnQgeyByZXF1ZXN0LCBzZXRDb29raWUgfSBmcm9tICcvbGliL2VyLmxpYic7XHJcblxyXG5pbXBvcnQgeyBUb2FzdENvbnRhaW5lciwgdG9hc3QgfSBmcm9tICdyZWFjdC10b2FzdGlmeSc7XHJcbmltcG9ydCB7IFNUQVJUX1JFU0VUX1BBU1NXT1JEIH0gZnJvbSAnLi4vLi4vLi4vLi4vLi4vLi4vbGliL3JlcXVlc3QtZGVzdGluYXRpb25zJ1xyXG5cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBGb3Jnb3RQYXNzd29yZCh7IG9uTW9kYWxDbG9zZSB9KSB7XHJcblxyXG4gICAgY29uc3RcclxuICAgICAgICAvLyBtb2RhbCBzdGF0ZXMgcGFzcyA9PiBwYXNzd29yZCBNbCA9PiBNb2RhbFxyXG4gICAgICAgIFtzaG93Rm9yZ290UGFzc01sLCBzZXRTaG93Rm9yZ290UGFzc01sXSA9IHVzZVN0YXRlKHRydWUpLFxyXG4gICAgICAgIFtzaG93R2V0RW1haWxDb2RlTWwsIHNldFNob3dFbWFpbENvZGVNbF0gPSB1c2VTdGF0ZShmYWxzZSksXHJcbiAgICAgICAgLy8gdHJhbnNsYXRpb24gY29uc2ZpZ3NcclxuICAgICAgICB7IHQgfSA9IHVzZVRyYW5zbGF0aW9uKCdjb21tb24nKSxcclxuICAgICAgICB0cmFuc2xhdGlvblBhdGggPSAnaGVhZGVyLnJlc2V0UGFzc3dvcmRNb2RhbC4nLFxyXG4gICAgICAgIHRyYW5zbGF0ZSA9IGtleSA9PiB0KGAke3RyYW5zbGF0aW9uUGF0aH0ke2tleX1gKSxcclxuICAgICAgICAvLyB5dXAgY29uZmlnc1xyXG4gICAgICAgIHNjaGVtYSA9IHl1cC5vYmplY3QoKS5zaGFwZSh7XHJcbiAgICAgICAgICAgIGVtYWlsOiB5dXBcclxuICAgICAgICAgICAgICAgIC5zdHJpbmcoKVxyXG4gICAgICAgICAgICAgICAgLnJlcXVpcmVkKClcclxuICAgICAgICAgICAgICAgIC5tYXRjaGVzKC9eKChbXjw+KClcXFtcXF1cXFxcLiw7Olxcc0BcIl0rKFxcLltePD4oKVxcW1xcXVxcXFwuLDs6XFxzQFwiXSspKil8KFwiLitcIikpQCgoXFxbWzAtOV17MSwzfVxcLlswLTldezEsM31cXC5bMC05XXsxLDN9XFwuWzAtOV17MSwzfV0pfCgoW2EtekEtWlxcLTAtOV0rXFwuKStbYS16QS1aXXsyLH0pKSQvKSxcclxuICAgICAgICB9KSxcclxuICAgICAgICAvLyBmb3JtIGNvbmZpZ3NcclxuICAgICAgICB7IHJlZ2lzdGVyLCBoYW5kbGVTdWJtaXQsIGZvcm1TdGF0ZTogeyBlcnJvcnMgfSB9ID0gdXNlRm9ybSh7XHJcbiAgICAgICAgICAgIG1vZGU6ICdvbkNoYW5nZScsXHJcbiAgICAgICAgICAgIHJlc29sdmVyOiB5dXBSZXNvbHZlcihzY2hlbWEpXHJcbiAgICAgICAgfSksXHJcbiAgICAgICAgLy8gb24gZm9ybSBzdWJtaXRcclxuICAgICAgICBzdWJtaXQgPSBhc3luYyAoZGF0YSkgPT4ge1xyXG4gICAgICAgICAgICB0cnkge1xyXG4gICAgICAgICAgICAgICAgY29uc3QgeyBkYXRhOiByZXNwb25zZSB9ID0gYXdhaXQgcmVxdWVzdCggU1RBUlRfUkVTRVRfUEFTU1dPUkQoIGRhdGEuZW1haWwgKSApO1xyXG4gICAgICAgICAgICAgICAgY29uc3QgdG9rZW4gPSByZXNwb25zZS5kYXRhLnRva2VuO1xyXG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coIHRva2VuICk7XHJcbiAgICAgICAgICAgICAgICBzZXRDb29raWUoYHJlc2V0LXRva2VuYCwgdG9rZW4sICgxLzI0KSoxKTtcclxuICAgICAgICAgICAgICAgIHNldFNob3dGb3Jnb3RQYXNzTWwoZmFsc2UpXHJcbiAgICAgICAgICAgICAgICBzZXRTaG93RW1haWxDb2RlTWwodHJ1ZSlcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBjYXRjaCAoIGVyciApIHtcclxuICAgICAgICAgICAgICAgIHRvYXN0KCBlcnIucmVzcG9uc2UuZGF0YT8ubWVzc2FnZSB8fCBg0J3QtSDRg9C00LDQu9C+0YHRjCDQstC+0YHRgtCw0L3QvtCy0LjRgtGMINC/0LDRgNC+0LvRjGAsIHtcclxuICAgICAgICAgICAgICAgICAgICB0eXBlOiBgZXJyb3JgXHJcbiAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuXHJcblxyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8PlxyXG4gICAgICAgICAgICB7c2hvd0ZvcmdvdFBhc3NNbCAmJlxyXG4gICAgICAgICAgICAgICAgPE1vZGFsIG9uQ2xvc2U9e29uTW9kYWxDbG9zZX0gY29udGVudFN0eWxlcz17c3R5bGVzLm1fY29udGVudH0gY29udGFpbmVyU3R5bGVzPXtzdHlsZXMubV9jb250YWluZXJ9PlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuY29udGFpbmVyfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPFRpdGxlXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdHlsZXM9e3N0eWxlcy50aXRsZX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnRlbnQ9e3RyYW5zbGF0ZSgndGl0bGUnKX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGZvcm0gb25TdWJtaXQ9e2hhbmRsZVN1Ym1pdChzdWJtaXQpfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuaW5wdXRzfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8SW5wdXRDb250YWluZXJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWQ9J25hbWUnXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU9J3RleHQnXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBsYWNlaG9sZGVyPXt0KCdyZWdpc3RyYXRpb24uaW5wdXRQbGFjZUhvbGRlcnMuZW1haWwnKX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZXJyb3JzPXsoISFlcnJvcnMuZW1haWwpfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvdGhlcj17cmVnaXN0ZXIoJ2VtYWlsJyl9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPFN1Ym1pdFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN0eWxlcz17c3R5bGVzLnN1Ym1pdH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb250ZW50PXt0cmFuc2xhdGUoJ3NlbmQnKX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZm9ybT5cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICA8VG9hc3RDb250YWluZXIgLz5cclxuICAgICAgICAgICAgICAgIDwvTW9kYWw+XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgc2hvd0dldEVtYWlsQ29kZU1sICYmIDxHZXRFbWFpbENvZGUgb25Nb2RhbENsb3NlPXtvbk1vZGFsQ2xvc2V9IC8+XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICA8Lz5cclxuICAgIClcclxufVxyXG4iLCIvLyBob29rcyBhbmQgaGVscGVyc1xyXG5pbXBvcnQgdXNlVHJhbnNsYXRpb24gZnJvbSAnbmV4dC10cmFuc2xhdGUvdXNlVHJhbnNsYXRpb24nXHJcbmltcG9ydCB7IHVzZUZvcm0gfSBmcm9tICdyZWFjdC1ob29rLWZvcm0nXHJcbmltcG9ydCB7IHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnXHJcbmltcG9ydCAqIGFzIHl1cCBmcm9tICd5dXAnXHJcbmltcG9ydCB7IHl1cFJlc29sdmVyIH0gZnJvbSAnQGhvb2tmb3JtL3Jlc29sdmVycy95dXAnXHJcbmltcG9ydCB7IGlucHV0cyB9IGZyb20gJy4vaW5wdXRfY29uZmlncydcclxuLy9jb21wb25lbnRzXHJcbmltcG9ydCB7IFRpdGxlIH0gZnJvbSAnLi4vLi4vY29tbW9uL1RpdGxlJ1xyXG5pbXBvcnQgeyBTdWJtaXQgfSBmcm9tICcuLi8uLi9jb21tb24vU3VibWl0J1xyXG5pbXBvcnQgeyBNb2RhbCB9IGZyb20gJy4uLy4uLy4uLy4uLy4uL2NvbW1vbi9hdXRoL01vZGFsL01vZGFsJ1xyXG5pbXBvcnQgeyBOZXdQYXNzd29yZCB9IGZyb20gJy4uL05ld1Bhc3N3b3JkL05ld1Bhc3N3b3JkJ1xyXG4vLyBzdHlsZXNcclxuaW1wb3J0IHN0eWxlcyBmcm9tICcuL0dldEVtYWlsQ29kZS5tb2R1bGUuc2NzcydcclxuXHJcbmltcG9ydCB7IHJlcXVlc3QsIGdldENvb2tpZSB9IGZyb20gJy9saWIvZXIubGliJztcclxuXHJcbmltcG9ydCB7IFRvYXN0Q29udGFpbmVyLCB0b2FzdCB9IGZyb20gJ3JlYWN0LXRvYXN0aWZ5JztcclxuaW1wb3J0IHsgU1RBUlRfUkVTRVRfUEFTU1dPUkQsIFZFUklGWV9QQVNTV09SRF9SRVNFVCB9IGZyb20gJy4uLy4uLy4uLy4uLy4uLy4uL2xpYi9yZXF1ZXN0LWRlc3RpbmF0aW9ucydcclxuXHJcblxyXG5leHBvcnQgZnVuY3Rpb24gR2V0RW1haWxDb2RlKHsgb25Nb2RhbENsb3NlIH0pIHtcclxuXHJcbiAgICBjb25zdFxyXG4gICAgICAgIC8vIG1vZGFsIHN0YXRlcyBwYXNzID0+IHBhc3N3b3JkIE1sID0+IE1vZGFsXHJcbiAgICAgICAgW3Nob3dHZXRFbWFpbENvZGVNbCwgc2V0U2hvd0VtYWlsQ29kZU1sXSA9IHVzZVN0YXRlKHRydWUpLFxyXG4gICAgICAgIFtzaG93TmV3UGFzc3dvcmRNbCwgc2V0U2hvd05ld1Bhc3N3b3JkTWxdID0gdXNlU3RhdGUoZmFsc2UpLFxyXG4gICAgICAgIC8vIHRyYW5zbGF0aW9uIGNvbnNmaWdzXHJcbiAgICAgICAgeyB0IH0gPSB1c2VUcmFuc2xhdGlvbignY29tbW9uJyksXHJcbiAgICAgICAgdHJhbnNsYXRpb25QYXRoID0gJ2hlYWRlci5nZXRFbWFpbENvZGVNb2RhbC4nLFxyXG4gICAgICAgIHRyYW5zbGF0ZSA9IGtleSA9PiB0KGAke3RyYW5zbGF0aW9uUGF0aH0ke2tleX1gKSxcclxuICAgICAgICAvLyB5dXAgY29uZmlnc1xyXG4gICAgICAgIHNjaGVtYSA9IHl1cC5vYmplY3QoKS5zaGFwZSh7XHJcbiAgICAgICAgICAgIG51bTE6IHl1cC5zdHJpbmcoKS5yZXF1aXJlZCgpLm1hdGNoZXMoL1swLTldL21nKSxcclxuICAgICAgICAgICAgbnVtMjogeXVwLnN0cmluZygpLnJlcXVpcmVkKCkubWF0Y2hlcygvWzAtOV0vbWcpLFxyXG4gICAgICAgICAgICBudW0zOiB5dXAuc3RyaW5nKCkucmVxdWlyZWQoKS5tYXRjaGVzKC9bMC05XS9tZyksXHJcbiAgICAgICAgICAgIG51bTQ6IHl1cC5zdHJpbmcoKS5yZXF1aXJlZCgpLm1hdGNoZXMoL1swLTldL21nKSxcclxuICAgICAgICAgICAgbnVtNTogeXVwLnN0cmluZygpLnJlcXVpcmVkKCkubWF0Y2hlcygvWzAtOV0vbWcpLFxyXG4gICAgICAgICAgICBudW02OiB5dXAuc3RyaW5nKCkucmVxdWlyZWQoKS5tYXRjaGVzKC9bMC05XS9tZyksXHJcbiAgICAgICAgfSksXHJcbiAgICAgICAgLy8gZm9ybSBjb25maWdzXHJcbiAgICAgICAgeyByZWdpc3RlciwgaGFuZGxlU3VibWl0LCBmb3JtU3RhdGU6IHsgZXJyb3JzIH0gfSA9IHVzZUZvcm0oe1xyXG4gICAgICAgICAgICBtb2RlOiAnb25DaGFuZ2UnLFxyXG4gICAgICAgICAgICByZXNvbHZlcjogeXVwUmVzb2x2ZXIoc2NoZW1hKVxyXG4gICAgICAgIH0pLFxyXG4gICAgICAgIC8vIGlucHV0IGp1bXBzIFxyXG4gICAgICAgIGp1bXAgPSAoeCkgPT4ge1xyXG4gICAgICAgICAgICBpZiAoeC52YWx1ZS5sZW5ndGgpIHtcclxuICAgICAgICAgICAgICAgIHggPSB4Lm5leHRTaWJsaW5nO1xyXG4gICAgICAgICAgICAgICAgaWYgKHggJiYgL3RleHQvLnRlc3QoeC50eXBlKSkge1xyXG4gICAgICAgICAgICAgICAgICAgIHguZm9jdXMoKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0sXHJcbiAgICAgICAganVtcEJhY2sgPSAoeCkgPT4ge1xyXG4gICAgICAgICAgICBpZiAoeC50YXJnZXQudmFsdWUubGVuZ3RoID09IDApIHtcclxuICAgICAgICAgICAgICAgIGlmICh4LmNvZGUgPT09ICdCYWNrc3BhY2UnKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIubW92ZTpmb2N1c1wiKS5wcmV2aW91c1NpYmxpbmcpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5tb3ZlOmZvY3VzXCIpLnByZXZpb3VzU2libGluZy5mb2N1cygpO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgLy8gb24gZm9ybSBzdWJtaXRcclxuICAgICAgICBzdWJtaXQgPSBhc3luYyAoZGF0YSkgPT4ge1xyXG4gICAgICAgICAgICB0cnkge1xyXG4gICAgICAgICAgICAgICAgZGF0YSA9IE9iamVjdC52YWx1ZXMoZGF0YSkucmVkdWNlKChhYywgZWwpID0+IGFjICsgZWwpXHJcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhkYXRhKTtcclxuICAgICAgICAgICAgICAgIGF3YWl0IHJlcXVlc3QoIFZFUklGWV9QQVNTV09SRF9SRVNFVCwgeyBjb2RlOiBkYXRhIH0sIHtcclxuICAgICAgICAgICAgICAgICAgICBoZWFkZXJzOiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICdBdXRob3JpemF0aW9uJzogYEJlYXJlciAke2dldENvb2tpZShgcmVzZXQtdG9rZW5gKX1gXHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgICAgIHNldFNob3dFbWFpbENvZGVNbChmYWxzZSlcclxuICAgICAgICAgICAgICAgIHNldFNob3dOZXdQYXNzd29yZE1sKHRydWUpXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgY2F0Y2goIGVyciApIHtcclxuICAgICAgICAgICAgICAgIHRvYXN0KCBlcnIucmVzcG9uc2UuZGF0YT8ubWVzc2FnZSB8fCBg0J3QtSDRg9C00LDQu9C+0YHRjCDQstC+0YHRgtCw0L3QvtCy0LjRgtGMINC/0LDRgNC+0LvRjGAsIHtcclxuICAgICAgICAgICAgICAgICAgICB0eXBlOiBgZXJyb3JgXHJcbiAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuXHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIDw+XHJcbiAgICAgICAgICAgIHtzaG93R2V0RW1haWxDb2RlTWwgJiZcclxuICAgICAgICAgICAgICAgIDwgTW9kYWwgb25DbG9zZT17b25Nb2RhbENsb3NlfSBjb250ZW50U3R5bGVzPXtzdHlsZXMubV9jb250ZW50fSBjb250YWluZXJTdHlsZXM9e3N0eWxlcy5tX2NvbnRhaW5lcn0+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5jb250YWluZXJ9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8VGl0bGVcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN0eWxlcz17c3R5bGVzLnRpdGxlfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY29udGVudD17dHJhbnNsYXRlKCd0aXRsZScpfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8Zm9ybSBvblN1Ym1pdD17aGFuZGxlU3VibWl0KHN1Ym1pdCl9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPFRpdGxlXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3R5bGVzPXtzdHlsZXMuZGVzY3JpcHRpb259XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29udGVudD17dHJhbnNsYXRlKCdkZXNjcmlwdGlvbicpfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuaW5wdXRzfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlucHV0cy5tYXAoKGVsLCBpKSA9PiAoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aW5wdXRcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZD17ZWwuaWR9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPXtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYCR7ZWwuY2xhc3N9IFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAke1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZXJyb3JzLm51bTEgfHxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGVycm9ycy5udW0yIHx8XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBlcnJvcnMubnVtMyB8fFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZXJyb3JzLm51bTQgfHxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGVycm9ycy5udW01IHx8XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBlcnJvcnMubnVtNiA/IHN0eWxlcy5lcnJvcl9pbnB1dCA6IHN0eWxlcy5zdWNjZXNzX2lucHV0XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1gLnRyaW0oKX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0eXBlPXtlbC50eXBlfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGtleT17ZWwua2V5fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1heExlbmd0aD17ZWwubWF4TGVuZ3RofVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uSW5wdXQ9e2UgPT4ganVtcChlLnRhcmdldCl9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb25LZXlEb3duPXtlID0+IGp1bXBCYWNrKGUpfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHsuLi5yZWdpc3RlcignbnVtJyArIChpICsgMSkpfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKSlcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxTdWJtaXRcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdHlsZXM9e3N0eWxlcy5zdWJtaXR9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29udGVudD17dHJhbnNsYXRlKCdzZW5kJyl9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Zvcm0+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgPFRvYXN0Q29udGFpbmVyIC8+XHJcbiAgICAgICAgICAgICAgICA8L01vZGFsID5cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICBzaG93TmV3UGFzc3dvcmRNbCAmJiA8TmV3UGFzc3dvcmQgb25Nb2RhbENsb3NlPXtvbk1vZGFsQ2xvc2V9IC8+XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICA8Lz5cclxuXHJcbiAgICApXHJcbn1cclxuIiwiZXhwb3J0IGNvbnN0IC8vIGlucHV0IGNvbmZpZ3NcclxuICAgIGlucHV0cyA9IFtcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIGlkOiAnZmlyc3QnLFxyXG4gICAgICAgICAgICB0eXBlOiAndGV4dCcsXHJcbiAgICAgICAgICAgIGNsYXNzOiAnbW92ZScsXHJcbiAgICAgICAgICAgIGtleTogTWF0aC5yYW5kb20oKSxcclxuICAgICAgICAgICAgbWF4TGVuZ3RoOiBcIjFcIixcclxuICAgICAgICB9LFxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgaWQ6ICdzZWNvbmQnLFxyXG4gICAgICAgICAgICB0eXBlOiAndGV4dCcsXHJcbiAgICAgICAgICAgIGNsYXNzOiAnbW92ZScsXHJcbiAgICAgICAgICAgIGtleTogTWF0aC5yYW5kb20oKSxcclxuICAgICAgICAgICAgbWF4TGVuZ3RoOiAnMScsXHJcbiAgICAgICAgfSxcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIGlkOiAndGhpcmQnLFxyXG4gICAgICAgICAgICB0eXBlOiAndGV4dCcsXHJcbiAgICAgICAgICAgIGNsYXNzOiAnbW92ZScsXHJcbiAgICAgICAgICAgIGtleTogTWF0aC5yYW5kb20oKSxcclxuICAgICAgICAgICAgbWF4TGVuZ3RoOiAnMScsXHJcbiAgICAgICAgfSxcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIGlkOiAnZm91cnRoJyxcclxuICAgICAgICAgICAgdHlwZTogJ3RleHQnLFxyXG4gICAgICAgICAgICBjbGFzczogJ21vdmUnLFxyXG4gICAgICAgICAgICBrZXk6IE1hdGgucmFuZG9tKCksXHJcbiAgICAgICAgICAgIG1heExlbmd0aDogJzEnLFxyXG4gICAgICAgIH0sXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBpZDogJ2ZpZnRoJyxcclxuICAgICAgICAgICAgdHlwZTogJ3RleHQnLFxyXG4gICAgICAgICAgICBjbGFzczogJ21vdmUnLFxyXG4gICAgICAgICAgICBrZXk6IE1hdGgucmFuZG9tKCksXHJcbiAgICAgICAgICAgIG1heExlbmd0aDogJzEnLFxyXG4gICAgICAgIH0sXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBpZDogJ3NpeHRoJyxcclxuICAgICAgICAgICAgdHlwZTogJ3RleHQnLFxyXG4gICAgICAgICAgICBjbGFzczogJ21vdmUnLFxyXG4gICAgICAgICAgICBrZXk6IE1hdGgucmFuZG9tKCksXHJcbiAgICAgICAgICAgIG1heExlbmd0aDogJzEnLFxyXG4gICAgICAgIH0sXHJcbiAgICBdIiwiLy8gaG9va3MgYW5kIGhlbHBlcnNcclxuaW1wb3J0IHVzZVRyYW5zbGF0aW9uIGZyb20gJ25leHQtdHJhbnNsYXRlL3VzZVRyYW5zbGF0aW9uJ1xyXG5pbXBvcnQgeyB1c2VGb3JtIH0gZnJvbSAncmVhY3QtaG9vay1mb3JtJ1xyXG5pbXBvcnQgeyB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0J1xyXG5pbXBvcnQgKiBhcyB5dXAgZnJvbSAneXVwJ1xyXG5pbXBvcnQgeyB5dXBSZXNvbHZlciB9IGZyb20gJ0Bob29rZm9ybS9yZXNvbHZlcnMveXVwJ1xyXG4vL2NvbXBvbmVudHNcclxuaW1wb3J0IHsgVGl0bGUgfSBmcm9tICcuLi8uLi9jb21tb24vVGl0bGUnXHJcbmltcG9ydCB7IElucHV0Q29udGFpbmVyIH0gZnJvbSAnL2NvbXBvbmVudHMvY29tbW9uL2F1dGgvSW5wdXRDb250YWluZXIvSW5wdXRDb250YWluZXInXHJcbmltcG9ydCB7IFN1Ym1pdCB9IGZyb20gJy4uLy4uL2NvbW1vbi9TdWJtaXQnXHJcbmltcG9ydCB7IE1vZGFsIH0gZnJvbSAnLi4vLi4vLi4vLi4vLi4vY29tbW9uL2F1dGgvTW9kYWwvTW9kYWwnXHJcbmltcG9ydCB7IFRvYXN0Q29udGFpbmVyLCB0b2FzdCB9IGZyb20gJ3JlYWN0LXRvYXN0aWZ5JztcclxuXHJcbi8vIHN0eWxlc1xyXG5pbXBvcnQgc3R5bGVzIGZyb20gJy4vTmV3UGFzc3dvcmQubW9kdWxlLnNjc3MnXHJcbmltcG9ydCB7IFN1Y2Nlc3MgfSBmcm9tICcuLi9TdWNjZXNzL1N1Y2Nlc3MnXHJcblxyXG5pbXBvcnQgeyByZXF1ZXN0LCBnZXRDb29raWUgfSBmcm9tICcvbGliL2VyLmxpYic7XHJcbmltcG9ydCB7IFNFVF9ORVdfUEFTU1dPUkQgfSBmcm9tICcuLi8uLi8uLi8uLi8uLi8uLi9saWIvcmVxdWVzdC1kZXN0aW5hdGlvbnMnXHJcblxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIE5ld1Bhc3N3b3JkKHsgb25Nb2RhbENsb3NlIH0pIHtcclxuICAgIGNvbnN0XHJcbiAgICAgICAgLy8gbW9kYWwgc3RhdGVzIHBhc3MgPT4gcGFzc3dvcmQgTWwgPT4gTW9kYWxcclxuICAgICAgICBbc2hvd05ld1Bhc3NNbCwgc2V0U2hvd05ld1Bhc3NNbF0gPSB1c2VTdGF0ZSh0cnVlKSxcclxuICAgICAgICBbc2hvd1N1Y2Nlc3NNbCwgc2V0U2hvd1N1Y2Nlc3NNbF0gPSB1c2VTdGF0ZShmYWxzZSksXHJcbiAgICAgICAgLy8gdHJhbnNsYXRpb24gY29uc2ZpZ3NcclxuICAgICAgICB7IHQgfSA9IHVzZVRyYW5zbGF0aW9uKCdjb21tb24nKSxcclxuICAgICAgICB0cmFuc2xhdGlvblBhdGggPSAnaGVhZGVyLm5ld1Bhc3N3b3JkTW9kYWwuJyxcclxuICAgICAgICB0cmFuc2xhdGUgPSBrZXkgPT4gdChgJHt0cmFuc2xhdGlvblBhdGh9JHtrZXl9YCksXHJcbiAgICAgICAgLy8geXVwIGNvbmZpZ3NcclxuICAgICAgICBzY2hlbWEgPSB5dXAub2JqZWN0KCkuc2hhcGUoe1xyXG4gICAgICAgICAgICBwYXNzd29yZDogeXVwXHJcbiAgICAgICAgICAgICAgICAuc3RyaW5nKClcclxuICAgICAgICAgICAgICAgIC5yZXF1aXJlZCgpXHJcbiAgICAgICAgICAgICAgICAubWluKDYpXHJcbiAgICAgICAgfSksXHJcbiAgICAgICAgLy8gZm9ybSBjb25maWdzXHJcbiAgICAgICAgeyByZWdpc3RlciwgaGFuZGxlU3VibWl0LCBmb3JtU3RhdGU6IHsgZXJyb3JzIH0gfSA9IHVzZUZvcm0oe1xyXG4gICAgICAgICAgICBtb2RlOiAnb25DaGFuZ2UnLFxyXG4gICAgICAgICAgICByZXNvbHZlcjogeXVwUmVzb2x2ZXIoc2NoZW1hKVxyXG4gICAgICAgIH0pLFxyXG4gICAgICAgIC8vIG9uIGZvcm0gc3VibWl0XHJcbiAgICAgICAgc3VibWl0ID0gYXN5bmMgKCBkYXRhICkgPT4ge1xyXG4gICAgICAgICAgICB0cnkge1xyXG4gICAgICAgICAgICAgICAgYXdhaXQgcmVxdWVzdCggU0VUX05FV19QQVNTV09SRCwgeyBwYXNzd29yZDogZGF0YS5wYXNzd29yZCB9LCB7XHJcbiAgICAgICAgICAgICAgICAgICAgaGVhZGVyczoge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAnQXV0aG9yaXphdGlvbic6IGBCZWFyZXIgJHtnZXRDb29raWUoYHJlc2V0LXRva2VuYCl9YFxyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgICAgICBzZXRTaG93TmV3UGFzc01sKGZhbHNlKVxyXG4gICAgICAgICAgICAgICAgc2V0U2hvd1N1Y2Nlc3NNbCh0cnVlKVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGNhdGNoICggZXJyICkge1xyXG4gICAgICAgICAgICAgICAgdG9hc3QoIGVyci5yZXNwb25zZS5kYXRhPy5tZXNzYWdlIHx8IGDQndC1INGD0LTQsNC70L7RgdGMINCy0L7RgdGC0LDQvdC+0LLQuNGC0Ywg0L/QsNGA0L7Qu9GMYCwge1xyXG4gICAgICAgICAgICAgICAgICAgIHR5cGU6IGBlcnJvcmBcclxuICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG5cclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPD5cclxuICAgICAgICAgICAge3Nob3dOZXdQYXNzTWwgJiZcclxuICAgICAgICAgICAgICAgIDxNb2RhbCBvbkNsb3NlPXtvbk1vZGFsQ2xvc2V9IGNvbnRlbnRTdHlsZXM9e3N0eWxlcy5tX2NvbnRlbnR9IGNvbnRhaW5lclN0eWxlcz17c3R5bGVzLm1fY29udGFpbmVyfT5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmNvbnRhaW5lcn0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxUaXRsZVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc3R5bGVzPXtzdHlsZXMudGl0bGV9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb250ZW50PXt0cmFuc2xhdGUoJ3RpdGxlJyl9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxmb3JtIG9uU3VibWl0PXtoYW5kbGVTdWJtaXQoc3VibWl0KX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmlucHV0c30+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPElucHV0Q29udGFpbmVyXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlkPSdwYXNzd29yZCdcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdHlwZT0ncGFzc3dvcmQnXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBsYWNlaG9sZGVyPXt0KCdyZWdpc3RyYXRpb24uaW5wdXRQbGFjZUhvbGRlcnMucGFzc3dvcmQnKX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZXJyb3JzPXshIWVycm9ycy5wYXNzd29yZH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb3RoZXI9e3JlZ2lzdGVyKCdwYXNzd29yZCcpfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxTdWJtaXRcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdHlsZXM9e3N0eWxlcy5zdWJtaXR9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29udGVudD17dHJhbnNsYXRlKCdzdWNjZXNzJyl9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Zvcm0+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgPFRvYXN0Q29udGFpbmVyIC8+XHJcbiAgICAgICAgICAgICAgICA8L01vZGFsPlxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIHNob3dTdWNjZXNzTWwgJiYgPFN1Y2Nlc3Mgb25Nb2RhbENsb3NlPXtvbk1vZGFsQ2xvc2V9IC8+XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICA8Lz5cclxuICAgIClcclxufVxyXG4iLCIvLyBob29rcyBoZWxwZXJzXHJcbmltcG9ydCB1c2VUcmFuc2xhdGlvbiBmcm9tICduZXh0LXRyYW5zbGF0ZS91c2VUcmFuc2xhdGlvbidcclxuLy8gY29tcG9uZW50c1xyXG5pbXBvcnQgeyBNb2RhbCB9IGZyb20gJy4uLy4uLy4uLy4uLy4uL2NvbW1vbi9hdXRoL01vZGFsL01vZGFsJ1xyXG5pbXBvcnQgeyBUaXRsZSB9IGZyb20gJy4uLy4uL2NvbW1vbi9UaXRsZSdcclxuLy8gc3R5bGVzXHJcbmltcG9ydCBzdHlsZXMgZnJvbSAnLi9TdWNjZXNzLm1vZHVsZS5zY3NzJ1xyXG4vLyBpY29uc1xyXG5pbXBvcnQgc3VjY2Vzc0ljb24gZnJvbSAnL3B1YmxpYy9pbWFnZXMvaGVhZGVyL2xvZ2luL3N1Y2Nlc3MucG5nJ1xyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIFN1Y2Nlc3MoeyBvbk1vZGFsQ2xvc2UgfSkge1xyXG5cclxuICAgIGNvbnN0XHJcbiAgICAgICAgLy8gdHJhbnNsYXRpb24gICAgXHJcbiAgICAgICAgeyB0IH0gPSB1c2VUcmFuc2xhdGlvbignY29tbW9uJyksXHJcbiAgICAgICAgdHJhbnNsYXRpb25QYXRoID0gJ2hlYWRlci5zdWNjZXNzTW9kYWwuJyxcclxuICAgICAgICB0cmFuc2xhdGUgPSBrZXkgPT4gdChgJHt0cmFuc2xhdGlvblBhdGh9JHtrZXl9YClcclxuXHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIDxNb2RhbCBvbkNsb3NlPXtvbk1vZGFsQ2xvc2V9IGNvbnRlbnRTdHlsZXM9e3N0eWxlcy5tX2NvbnRlbnR9IGNvbnRhaW5lclN0eWxlcz17c3R5bGVzLm1fY29udGFpbmVyfT5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5jb250YWluZXJ9PlxyXG4gICAgICAgICAgICAgICAgPFRpdGxlXHJcbiAgICAgICAgICAgICAgICAgICAgc3R5bGVzPXtzdHlsZXMudGl0bGV9XHJcbiAgICAgICAgICAgICAgICAgICAgY29udGVudD17dHJhbnNsYXRlKCd0aXRsZScpfVxyXG4gICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuaWNvbl9jb250YWluZXJ9PlxyXG4gICAgICAgICAgICAgICAgICAgIDxpbWdcclxuICAgICAgICAgICAgICAgICAgICAgICAgc3JjPXtzdWNjZXNzSWNvbi5zcmN9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGFsdD0nU3VjY2VzcyBpbWcnXHJcbiAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8L01vZGFsPlxyXG4gICAgKVxyXG59XHJcbiIsIi8vIEljb25zXHJcbmltcG9ydCBmYWNlYm9vayBmcm9tICcvcHVibGljL2ltYWdlcy9oZWFkZXIvbG9naW4vZmFjZWJvb2suc3ZnJ1xyXG5pbXBvcnQgZ21haWwgZnJvbSAnL3B1YmxpYy9pbWFnZXMvaGVhZGVyL2xvZ2luL2dtYWlsLnN2ZydcclxuaW1wb3J0IHZrIGZyb20gJy9wdWJsaWMvaW1hZ2VzL2hlYWRlci9sb2dpbi92ay5zdmcnXHJcbmltcG9ydCB0d2l0dGVyIGZyb20gJy9wdWJsaWMvaW1hZ2VzL2hlYWRlci9sb2dpbi90d2l0dGVyLnN2ZydcclxuLy8gc2Nzc1xyXG5pbXBvcnQgc3R5bGVzIGZyb20gJy4vU29jaWFsTWVkaWFJY29ucy5tb2R1bGUuc2NzcydcclxuLy8gY29tcG9uZW50c1xyXG5pbXBvcnQgUmVhY3RGYWNlYm9va0xvZ2luIGZyb20gJ3JlYWN0LWZhY2Vib29rLWxvZ2luJ1xyXG5pbXBvcnQgR29vZ2xlTG9naW4gZnJvbSAncmVhY3QtZ29vZ2xlLWxvZ2luJ1xyXG5pbXBvcnQgVHdpdHRlckxvZ2luIGZyb20gXCJyZWFjdC10d2l0dGVyLWxvZ2luXCI7XHJcbmltcG9ydCB7IHVzZUVmZmVjdCB9IGZyb20gJ3JlYWN0J1xyXG5cclxuY29uc3QgaWNvbnMgPSBbXHJcbiAgICB7XHJcbiAgICAgICAgaWNvblVybDogZmFjZWJvb2suc3JjLFxyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgICBpY29uVXJsOiBnbWFpbC5zcmMsXHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICAgIGljb25Vcmw6IHZrLnNyYyxcclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgICAgaWNvblVybDogdHdpdHRlci5zcmMsXHJcbiAgICB9XVxyXG5cclxuXHJcblxyXG5jb25zdCByZXNwb25zZUZhY2Vib29rID0gKHJlc3BvbnNlKSA9PiB7XHJcbiAgICBjb25zb2xlLmxvZyhyZXNwb25zZSk7XHJcbn1cclxuXHJcbmNvbnN0IHJlc3BvbnNlR29vZ2xlID0gKHJlc3BvbnNlKSA9PiB7XHJcbiAgICBjb25zb2xlLmxvZyhyZXNwb25zZSk7XHJcbn1cclxuXHJcbmNvbnN0IFRXSVRURVJfQ09OU1VNRVJfS0VZID0gXCJcIjtcclxuY29uc3QgVFdJVFRFUl9DT05TVU1FUl9TRUNSRVQgPSBcIlwiO1xyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIFNvY2lhbE1lZGlhSWNvbnMoKSB7XHJcblxyXG5cclxuICAgIHVzZUVmZmVjdCgoKT0+eyAgICAgICAgICAgICAgICAgICAgICAgICBcclxuICAgICBWSy5pbml0KHthcGlJZDonNzkxMTI5NCd9KTtcclxuICAgIH0sW10pXHJcbiAgICBcclxuICAgIGZ1bmN0aW9uIG9uU29jaWFsTWVkaWFCdG5DbGljayhpKSB7XHJcbiAgICAgICAgaWYgKGkgPT09IDApIHtcclxuICAgICAgICAgICAgY29uc3QgZmFjZWJvb2tMb2dpbkJ0biA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoYC5mYWNlYm9vay1sb2dpbi1idG5gKTtcclxuICAgICAgICAgICAgY29uc29sZS5sb2coIGZhY2Vib29rTG9naW5CdG4gKTtcclxuICAgICAgICAgICAgaWYgKGZhY2Vib29rTG9naW5CdG4pXHJcbiAgICAgICAgICAgICAgICBmYWNlYm9va0xvZ2luQnRuLmNsaWNrKCk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsc2UgaWYgKGkgPT09IDEpIHtcclxuICAgICAgICAgICAgY29uc3RcclxuICAgICAgICAgICAgICAgIGdvb2dsZUxvZ2luQnRuID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihgLmdvb2dsZS1sb2dpbi1idG5gKVxyXG4gICAgICAgICAgICBpZiAoZ29vZ2xlTG9naW5CdG4pXHJcbiAgICAgICAgICAgICAgICBnb29nbGVMb2dpbkJ0bi5jbGljaygpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBlbHNlIGlmICggaSA9PT0gMiApIHsgICAgICAgICAgICBcclxuICAgICAgICAgICAgVksuQXV0aC5sb2dpbihmdW5jdGlvbihyZXNwb25zZSl7XHJcbiAgICAgICAgICAgICAgICBpZihyZXNwb25zZS5zZXNzaW9uKXtcclxuICAgICAgICAgICAgICAgICAgICAvKlVzZXIgYXV0aG9yaXphdGlvbiBzdWNjZWVkZWQqL1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKHJlc3BvbnNlKVxyXG4gICAgICAgICAgICAgICAgICAgIGlmKHJlc3BvbnNlLnN0YXR1cz09J2Nvbm5lY3RlZCcpe1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAvKlNlbGVjdGVkIHVzZXIgYWNjZXNzIHNldHRpbmdzLCBpZiB0aGV5IGFyZSByZXF1ZXN0ZWQqL1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgLypVc2VyIGNsaWNrcyB0aGUgY2FuY2VsIGJ1dHRvbiBpbiB0aGUgYXV0aG9yaXphdGlvbiB3aW5kb3cqL1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICB9XHJcbiAgICAgICAgZWxzZSBpZiAoIGkgPT09IDMgKSB7XHJcblxyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBjb25zdCB0d2l0dGVyQXV0aEhhbmRsZXIgPSAoIGVyciwgZGF0YSApID0+IHtcclxuICAgICAgICBjb25zb2xlLmxvZyggZXJyLCBkYXRhICk7XHJcbiAgICB9XHJcblxyXG4gICAgXHJcblxyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmNvbnRlaW5lcn0+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuY29udGVudH0+XHJcbiAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgaWNvbnMubWFwKChlbCwgaSkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5pY29uQ29udGVudH0ga2V5PXtNYXRoLnJhbmRvbSgpICogMTB9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxhIHRhcmdldD1cIl9ibGFua1wiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmljb25Cb2R5fT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpbWdcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzcmM9e2VsLmljb25Vcmx9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYWx0PVwiXCIgb25DbGljaz17KCkgPT4gb25Tb2NpYWxNZWRpYUJ0bkNsaWNrKGkpfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17c3R5bGVzLmljb259XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3R5bGU9e3sgY3Vyc29yOiAncG9pbnRlcicgfX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKGkgPT09IDApICYmIChcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPFJlYWN0RmFjZWJvb2tMb2dpblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29udGFpbmVyU3R5bGU9e3sgZGlzcGxheTogYG5vbmVgIH19XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjc3NDbGFzcz1cImZhY2Vib29rLWxvZ2luLWJ0blwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhcHBJZD1cIjExODg2Mzc3MDM2MTY4M1wiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBmaWVsZHM9XCJuYW1lLGVtYWlsLHBpY3R1cmVcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2FsbGJhY2s9e3Jlc3BvbnNlRmFjZWJvb2t9IC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIChpID09PSAxKSAmJiAoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxHb29nbGVMb2dpblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xpZW50SWQ9XCIxMDg5NjE4MDQ3OTQzLXI5MXN1OXFrYzBjOW5wbzF0Zm9mZjNzcDg0MjFidDVnLmFwcHMuZ29vZ2xldXNlcmNvbnRlbnQuY29tXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJlbmRlcj17cmVuZGVyUHJvcHMgPT4gKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxidXR0b25cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb25DbGljaz17cmVuZGVyUHJvcHMub25DbGlja31cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZGlzYWJsZWQ9e3JlbmRlclByb3BzLmRpc2FibGVkfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdHlsZT17eyBkaXNwbGF5OiAnbm9uZScgfX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiZ29vZ2xlLWxvZ2luLWJ0blwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLz4pfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29va2llUG9saWN5PXsnc2luZ2xlX2hvc3Rfb3JpZ2luJ31cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uU3VjY2Vzcz17cmVzcG9uc2VHb29nbGV9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkZhaWx1cmU9e3Jlc3BvbnNlR29vZ2xlfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICkgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8VHdpdHRlckxvZ2luXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGF1dGhDYWxsYmFjaz17dHdpdHRlckF1dGhIYW5kbGVyfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25zdW1lcktleT17VFdJVFRFUl9DT05TVU1FUl9LRVl9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN1bWVyU2VjcmV0PXtUV0lUVEVSX0NPTlNVTUVSX1NFQ1JFVH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2E+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgKVxyXG4gICAgICAgICAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgKVxyXG59XHJcblxyXG4vLyBUT0RPXHJcbi8vIGFkZCBmb290IGZvb3RiZXQgZG9tYWluIGluIGdvb2dsZSBkZXZlbHBvcnMgYWNjb3VudCIsIlxyXG5leHBvcnQgZnVuY3Rpb24gUmVzZXRQYXNzd29yZExpbmsoeyBzdHlsZXMsIGNvbnRlbnQsIGNsaWNrIH0pIHtcclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlc30gPlxyXG4gICAgICAgICAgICA8c3BhbiBvbkNsaWNrPXtjbGlja30+XHJcbiAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgY29udGVudFxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICA8L3NwYW4+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICApXHJcbn1cclxuIiwiZXhwb3J0IGZ1bmN0aW9uIFN1Ym1pdCh7IHN0eWxlcywgY29udGVudCwgY2xpY2sgfSkge1xyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzfT5cclxuICAgICAgICAgICAgPGJ1dHRvbiB0eXBlPSdzdWJtaXQnPlxyXG4gICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbnRlbnRcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgPC9idXR0b24+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICApXHJcbn1cclxuIiwiZXhwb3J0IGZ1bmN0aW9uIFRpdGxlKHsgc3R5bGVzLCBjb250ZW50IH0pIHtcclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlc30+XHJcbiAgICAgICAgICAgIDxwPlxyXG4gICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbnRlbnRcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgPC9wPlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgKVxyXG59XHJcbiIsImltcG9ydCBMaW5rIGZyb20gJ25leHQvbGluaydcclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBUb1JlZ2lzdGVyKHtcclxuICAgIGNvbnRhaW5lcl9zdHlsZXMsXHJcbiAgICBjb250ZW50X3N0eWxlcyxcclxuICAgIG9yLFxyXG4gICAgcmVnaXN0ZXJfdGV4dF9zdHlsZXMsXHJcbiAgICBjb250ZW50LFxyXG4gICAgaHJlZixcclxuICAgIGNsaWNrIH0pIHtcclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPGRpdlxyXG4gICAgICAgICAgICBjbGFzc05hbWU9e2NvbnRhaW5lcl9zdHlsZXN9XHJcbiAgICAgICAgICAgIG9uQ2xpY2s9e2NsaWNrfT5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e2NvbnRlbnRfc3R5bGVzfT5cclxuICAgICAgICAgICAgICAgIDxzcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgb3IgKyBcIiBcIlxyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIDwvc3Bhbj5cclxuICAgICAgICAgICAgICAgIDxMaW5rIGhyZWY9e2hyZWZ9PlxyXG4gICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT17cmVnaXN0ZXJfdGV4dF9zdHlsZXN9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb250ZW50XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICA8L3NwYW4+XHJcbiAgICAgICAgICAgICAgICA8L0xpbms+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwvZGl2ID5cclxuICAgIClcclxufVxyXG4iLCIvLyBzdHlsZXNcclxuaW1wb3J0IHN0eWxlcyBmcm9tICcuL0xvZ28ubW9kdWxlLnNjc3MnXHJcbi8vIGNvbXBvbmVudHNcclxuaW1wb3J0IExpbmsgZnJvbSAnbmV4dC9saW5rJ1xyXG4vLyBpbWFnZXMgYW5kIGljb25zXHJcbmltcG9ydCBsb2dvIGZyb20gJy9wdWJsaWMvaW1hZ2VzL2hlYWRlci9sb2dvLnN2ZydcclxuXHJcblxyXG5leHBvcnQgZnVuY3Rpb24gTG9nbygpIHtcclxuXHJcbiAgICByZXR1cm4gKFxyXG5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmxvZ29fY29uYXRpbmVyfT5cclxuICAgICAgICAgICAgPExpbmsgaHJlZj0nLyc+XHJcbiAgICAgICAgICAgICAgICA8aW1nXHJcbiAgICAgICAgICAgICAgICAgICAgc3JjPXtsb2dvLnNyY31cclxuICAgICAgICAgICAgICAgICAgICBhbHQ9XCJGb290QmV0IExvZ29cIlxyXG4gICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgPC9MaW5rID5cclxuICAgICAgICA8L2Rpdj5cclxuXHJcbiAgICApXHJcbn1cclxuIiwiLy8gaG9va3NcclxuaW1wb3J0IHsgdXNlU2VsZWN0b3IgfSBmcm9tICdyZWFjdC1yZWR1eCdcclxuLy9zdHlsZXNcclxuaW1wb3J0IHN0eWxlcyBmcm9tICcuL0hlYWRlci5tb2R1bGUuc2NzcydcclxuLy8gY29tcG9uZW50c1xyXG5pbXBvcnQgeyBCYXIgfSBmcm9tICcuL0Jhci9CYXInXHJcbmltcG9ydCB7IE5hdkJhciB9IGZyb20gJy4vTmF2QmFyL05hdkJhcidcclxuaW1wb3J0IHsgU29jaWFsTWVkaWEgfSBmcm9tICcuL1NvY2lhbE1lZGlhL1NvY2lhbE1lZGlhJ1xyXG4vLyBpbWdlc1xyXG5pbXBvcnQgZm9vdGJhbGxlciBmcm9tICcvcHVibGljL2ltYWdlcy9oZWFkZXIvZm9vdGJhbGxlci5zdmcnXHJcblxyXG5leHBvcnQgZnVuY3Rpb24gSGVhZGVyKHsgbWFpbnNQYWdlcyB9KSB7XHJcblxyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8PlxyXG4gICAgICAgICAgICB7bWFpbnNQYWdlcyA/XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmhlYWRlcl9jb250YWluZXJfYmlnfT5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmJhcn0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxTb2NpYWxNZWRpYSAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmJhcl9jb250cm9sZXJ9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5iYXJfY29udGVpbmVyfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmJhcl9jb250ZW50fT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPEJhclxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYmFyX2l0ZW1zX2NvbnQ9e3N0eWxlcy5iYXJfaXRlbXNfY29udH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJhcl9pdGVtcz17c3R5bGVzLmJhcl9pdGVtc31cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5mb290YmFsbGVyfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aW1nIHNyYz17Zm9vdGJhbGxlci5zcmN9IGFsdD1cIlwiIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgPE5hdkJhciAvPlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+IDpcclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuaGVhZGVyX2NvbnRhaW5lcl9zbWFsbH0+XHJcbiAgICAgICAgICAgICAgICAgICAgPEJhciAvPlxyXG4gICAgICAgICAgICAgICAgICAgIDxOYXZCYXIgLz5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgPC8+XHJcblxyXG4gICAgKVxyXG59XHJcblxyXG4iLCJpbXBvcnQgTGluayBmcm9tICduZXh0L2xpbmsnXHJcbi8vIHN0eWxlc1xyXG5pbXBvcnQgc3R5bGVzIGZyb20gJy4vQnV0dG9uLm1vZHVsZS5zY3NzJ1xyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIEJ1dHRvbih7XHJcbiAgICBocmVmLFxyXG4gICAgY29udGVudEZyc3RQLFxyXG4gICAgY29udGVudFNlY1AgPSBudWxsLFxyXG4gICAgYWN0aXZlLFxyXG4gICAgY2xpY2sgPSBudWxsIH0pIHtcclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPD5cclxuICAgICAgICAgICAge2hyZWYgIT09IG51bGwgP1xyXG4gICAgICAgICAgICAgICAgPExpbmsgaHJlZj17aHJlZn0+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e2Ake3N0eWxlcy5jb250YWluZXJ9ICR7YWN0aXZlICYmIHN0eWxlcy5hY3RpdmV9YH0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXZcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17c3R5bGVzLmNvbnRlbnR9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNsaWNrPXtjbGlja31cclxuICAgICAgICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHByZT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnRlbnRGcnN0UFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YnIgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnRlbnRTZWNQXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9wcmU+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2ID5cclxuICAgICAgICAgICAgICAgIDwvTGluaz4gXHJcbiAgICAgICAgICAgICAgICA6XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17YCR7c3R5bGVzLmNvbnRhaW5lcn0gJHthY3RpdmUgJiYgc3R5bGVzLmFjdGl2ZX1gfT5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17c3R5bGVzLmNvbnRlbnR9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9e2NsaWNrfVxyXG4gICAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPHByZT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb250ZW50RnJzdFBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxiciAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnRlbnRTZWNQXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvcHJlPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPC9kaXYgPlxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgPC8+XHJcblxyXG4gICAgKVxyXG59XHJcbiIsIi8vIGhvb2tzIGFuZCBoZWxwZXJzXHJcbmltcG9ydCB7IHVzZVJvdXRlciB9IGZyb20gJ25leHQvZGlzdC9jbGllbnQvcm91dGVyJ1xyXG5pbXBvcnQgeyB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0J1xyXG4vLyBzdHlsZXNcclxuaW1wb3J0IHN0eWxlcyBmcm9tICcuL05hdkJhci5tb2R1bGUuc2NzcydcclxuLy8gdHJhbnNsYXRpb24gXHJcbmltcG9ydCB1c2VUcmFuc2xhdGlvbiBmcm9tICduZXh0LXRyYW5zbGF0ZS91c2VUcmFuc2xhdGlvbidcclxuLy8gY29tcG9uZXRuc1xyXG5pbXBvcnQgeyBCdXR0b24gfSBmcm9tICcuL0J1dHRvbi9CdXR0b24nXHJcbmltcG9ydCBDb250YWN0c01vZGFsIGZyb20gJy4uLy4uL1BhZ2VzL0NvbnRhY3RzL0NvbnRhY3RzTW9kYWwnXHJcblxyXG5cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBOYXZCYXIoKSB7XHJcblxyXG4gICAgY29uc3RcclxuICAgICAgICAvL3N0YXRlc1xyXG4gICAgICAgIFtzaG93Q29udGFjdHNNb2RhbCwgc2V0U2hvd0NvbnRhY3RzTW9kYWxdID0gdXNlU3RhdGUoZmFsc2UpLFxyXG4gICAgICAgIHsgdCB9ID0gdXNlVHJhbnNsYXRpb24oJ2NvbW1vbicpLFxyXG4gICAgICAgIHRyYW5zbGF0aW9uUGF0aCA9ICdoZWFkZXIubmF2QmFyLicsXHJcbiAgICAgICAgdHJhbnNsYXRlID0gKGtleSkgPT4gdChgJHt0cmFuc2xhdGlvblBhdGh9JHtrZXl9YCksXHJcbiAgICAgICAgLy8gcm91dGVyXHJcbiAgICAgICAgcm91dGVyID0gdXNlUm91dGVyKCksXHJcbiAgICAgICAgLy8gbmF2IGJhciBidXR0b25zIGNvbmZpZ3NcclxuICAgICAgICBidXR0b25zSW5Ib21lUGFnZSA9IFtcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgaWQ6ICdtYWluJyxcclxuICAgICAgICAgICAgICAgIGtleTogTWF0aC5yYW5kb20oKSxcclxuICAgICAgICAgICAgICAgIGZyc3RDb250ZW50OiB0cmFuc2xhdGUoJ21haW4nKSxcclxuICAgICAgICAgICAgICAgIGhyZWY6ICcvJ1xyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICBpZDogJ2dhbWVzJyxcclxuICAgICAgICAgICAgICAgIGtleTogTWF0aC5yYW5kb20oKSxcclxuICAgICAgICAgICAgICAgIGZyc3RDb250ZW50OiB0cmFuc2xhdGUoJ2dhbWVzJyksXHJcbiAgICAgICAgICAgICAgICBocmVmOiAnL2dhbWVzJ1xyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICBpZDogJ3N0YXRpc3RpY3MnLFxyXG4gICAgICAgICAgICAgICAga2V5OiBNYXRoLnJhbmRvbSgpLFxyXG4gICAgICAgICAgICAgICAgZnJzdENvbnRlbnQ6IHRyYW5zbGF0ZSgnc3RhdGlzdGljcy5mcnMnKSxcclxuICAgICAgICAgICAgICAgIHNlY0NvbnRlbnQ6IHRyYW5zbGF0ZSgnc3RhdGlzdGljcy5zZWMnKSxcclxuICAgICAgICAgICAgICAgIGhyZWY6ICcvc3RhdGlzdGljcydcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgaWQ6ICdwcmVkaWN0aW9uJyxcclxuICAgICAgICAgICAgICAgIGtleTogTWF0aC5yYW5kb20oKSxcclxuICAgICAgICAgICAgICAgIGZyc3RDb250ZW50OiB0cmFuc2xhdGUoJ3ByZWRpY3Rpb24uZnJzJyksXHJcbiAgICAgICAgICAgICAgICBzZWNDb250ZW50OiB0cmFuc2xhdGUoJ3ByZWRpY3Rpb24uc2VjJyksXHJcbiAgICAgICAgICAgICAgICBocmVmOiAnL3ByZWRpY3Rpb24nXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIGlkOiAndGVzdGltb25pYWxzJyxcclxuICAgICAgICAgICAgICAgIGtleTogTWF0aC5yYW5kb20oKSxcclxuICAgICAgICAgICAgICAgIGZyc3RDb250ZW50OiB0cmFuc2xhdGUoJ3Rlc3RpbW9uaWFscycpLFxyXG4gICAgICAgICAgICAgICAgaHJlZjogJy90ZXN0aW1vbmlhbHMnXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIGlkOiAnYWJvdXRVcycsXHJcbiAgICAgICAgICAgICAgICBrZXk6IE1hdGgucmFuZG9tKCksXHJcbiAgICAgICAgICAgICAgICBmcnN0Q29udGVudDogdHJhbnNsYXRlKCdhYm91dFVzJyksXHJcbiAgICAgICAgICAgICAgICBocmVmOiAnL2Fib3V0VXMnXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIGlkOiAnY29udGFjdHMnLFxyXG4gICAgICAgICAgICAgICAga2V5OiBNYXRoLnJhbmRvbSgpLFxyXG4gICAgICAgICAgICAgICAgZnJzdENvbnRlbnQ6IHRyYW5zbGF0ZSgnY29udGFjdHMnKSxcclxuICAgICAgICAgICAgICAgIGhyZWY6IG51bGwsXHJcbiAgICAgICAgICAgICAgICBjbGljazogKCkgPT4gc2V0U2hvd0NvbnRhY3RzTW9kYWwodHJ1ZSlcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICBdLFxyXG4gICAgICAgIGJ1dHRvbnMgPSBidXR0b25zSW5Ib21lUGFnZS5maWx0ZXIoZWwgPT4gZWwuaWQgIT09IFwic3RhdGlzdGljc1wiKVxyXG5cclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPD5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e2Ake3N0eWxlcy5jb250YWluZXJ9ICR7cm91dGVyLnBhdGhuYW1lICE9PSAnLycgPyBzdHlsZXMudGFibGV0IDogbnVsbH1gfT5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuY29udGVudH0+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy50b3Bfb25fdGFibGV0fT5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIChyb3V0ZXIucGF0aG5hbWUgPT09ICcvJyA/IGJ1dHRvbnNJbkhvbWVQYWdlIDogYnV0dG9ucykubWFwKChlbCwgaSkgPT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpIDwgMyAmJiAoPEJ1dHRvblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb250ZW50RnJzdFA9e2VsLmZyc3RDb250ZW50fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb250ZW50U2VjUD17ZWwuc2VjQ29udGVudH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaHJlZj17ZWwuaHJlZn1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAga2V5PXtlbC5rZXl9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFjdGl2ZT17cm91dGVyLnBhdGhuYW1lID09PSBlbC5ocmVmID8gJ3RydWUnIDogbnVsbH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xpY2s9e2VsLmNsaWNrICYmIGVsLmNsaWNrfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKSlcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuYm90dG9tX29uX3RhYmxldH0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIChyb3V0ZXIucGF0aG5hbWUgPT09ICcvJyA/IGJ1dHRvbnNJbkhvbWVQYWdlIDogYnV0dG9ucykubWFwKChlbCwgaSkgPT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpID49IDMgJiYgKDxCdXR0b25cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29udGVudEZyc3RQPXtlbC5mcnN0Q29udGVudH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29udGVudFNlY1A9e2VsLnNlY0NvbnRlbnR9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGhyZWY9e2VsLmhyZWZ9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGtleT17ZWwua2V5fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhY3RpdmU9e3JvdXRlci5wYXRobmFtZSA9PT0gZWwuaHJlZiA/ICd0cnVlJyA6IG51bGx9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsaWNrPXtlbC5jbGljayAmJiBlbC5jbGlja31cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICkpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuXHJcblxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICBzaG93Q29udGFjdHNNb2RhbCAmJlxyXG4gICAgICAgICAgICAgICAgPENvbnRhY3RzTW9kYWxcclxuICAgICAgICAgICAgICAgICAgICBvcGVuZWQ9e3Nob3dDb250YWN0c01vZGFsID8gdHJ1ZSA6IGZhbHNlfVxyXG4gICAgICAgICAgICAgICAgICAgIG9uTW9kYWxDbG9zZT17KCkgPT4gc2V0U2hvd0NvbnRhY3RzTW9kYWwoZmFsc2UpfVxyXG4gICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIDwvPlxyXG5cclxuICAgIClcclxufVxyXG4iLCJpbXBvcnQgc3R5bGVzIGZyb20gJy4vSWNvbi5tb2R1bGUuc2NzcydcclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBJY29uKHsgc3JjLCBjbGljaywgaWQgfSkge1xyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmNvbnRhaW5lcn0gaWQ9e2lkfT5cclxuICAgICAgICAgICAgPGltZ1xyXG4gICAgICAgICAgICAgICAgc3JjPXtzcmN9XHJcbiAgICAgICAgICAgICAgICBhbHQ9e2BpY29ucy0ke3NyY31gfVxyXG4gICAgICAgICAgICAgICAgb25DbGljaz17Y2xpY2t9XHJcbiAgICAgICAgICAgIC8+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICApXHJcbn1cclxuIiwiaW1wb3J0IHsgTW9kYWwgfSBmcm9tIFwiLi4vLi4vLi4vLi4vY29tbW9uL2F1dGgvTW9kYWwvTW9kYWxcIlxyXG5pbXBvcnQgc3R5bGVzIGZyb20gJy4uL1NvY2lhbE1lZGlhTW9kYWwubW9kdWxlLnNjc3MnXHJcbmltcG9ydCBMaW5rIGZyb20gJ25leHQvbGluaydcclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBGYWNlYm9vayh7IG9uTW9kYWxDbG9zZSwgZGF0YSwgcGFyZW50IH0pIHtcclxuXHJcbiAgICBjb25zdCB0b3AgPSBwYXJlbnQuY3VycmVudC5jaGlsZHJlbi5mYWNlYm9vay5vZmZzZXRUb3BcclxuXHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIDxNb2RhbFxyXG4gICAgICAgICAgICBvbkNsb3NlPXtvbk1vZGFsQ2xvc2V9XHJcbiAgICAgICAgICAgIGNvbnRhaW5lclN0eWxlcz17c3R5bGVzLmNvbnRhaW5lcn1cclxuICAgICAgICAgICAgY29udGVudFN0eWxlcz17c3R5bGVzLmNvbnRlbnR9XHJcbiAgICAgICAgICAgIG90aGVyU3R5bGVzPXt7IHRvcDogdG9wICsgJ3B4JyB9fVxyXG4gICAgICAgID5cclxuICAgICAgICAgICAgPExpbmsgaHJlZj17ZGF0YS51cmx9PlxyXG4gICAgICAgICAgICAgICAgPGEgdGFyZ2V0PVwiX2JsYW5rXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPHA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRhdGEudGV4dFxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgPC9wPlxyXG4gICAgICAgICAgICAgICAgPC9hPlxyXG4gICAgICAgICAgICA8L0xpbms+XHJcbiAgICAgICAgPC9Nb2RhbD5cclxuICAgIClcclxufSIsImltcG9ydCB7IE1vZGFsIH0gZnJvbSBcIi4uLy4uLy4uLy4uL2NvbW1vbi9hdXRoL01vZGFsL01vZGFsXCJcclxuaW1wb3J0IHN0eWxlcyBmcm9tICcuLi9Tb2NpYWxNZWRpYU1vZGFsLm1vZHVsZS5zY3NzJ1xyXG5pbXBvcnQgTGluayBmcm9tICduZXh0L2xpbmsnXHJcblxyXG5leHBvcnQgZnVuY3Rpb24gSW5zdGFncmFtKHsgb25Nb2RhbENsb3NlLCBkYXRhLCBwYXJlbnQgfSkge1xyXG5cclxuICAgIGNvbnN0IHRvcCA9IHBhcmVudC5jdXJyZW50LmNoaWxkcmVuLmluc3RhZ3JhbS5vZmZzZXRUb3BcclxuXHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIDxNb2RhbFxyXG4gICAgICAgICAgICBvbkNsb3NlPXtvbk1vZGFsQ2xvc2V9XHJcbiAgICAgICAgICAgIGNvbnRhaW5lclN0eWxlcz17c3R5bGVzLmNvbnRhaW5lcn1cclxuICAgICAgICAgICAgY29udGVudFN0eWxlcz17c3R5bGVzLmNvbnRlbnR9XHJcbiAgICAgICAgICAgIG90aGVyU3R5bGVzPXt7IHRvcDogdG9wICsgJ3B4JyB9fVxyXG4gICAgICAgID5cclxuICAgICAgICAgICAgPExpbmsgaHJlZj17ZGF0YS51cmx9PlxyXG4gICAgICAgICAgICAgICAgPGEgdGFyZ2V0PVwiX2JsYW5rXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPHA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRhdGEudGV4dFxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgPC9wPlxyXG4gICAgICAgICAgICAgICAgPC9hPlxyXG4gICAgICAgICAgICA8L0xpbms+XHJcbiAgICAgICAgPC9Nb2RhbD5cclxuICAgIClcclxufSIsImltcG9ydCB7IE1vZGFsIH0gZnJvbSBcIi4uLy4uLy4uLy4uL2NvbW1vbi9hdXRoL01vZGFsL01vZGFsXCJcclxuaW1wb3J0IHN0eWxlcyBmcm9tICcuLi9Tb2NpYWxNZWRpYU1vZGFsLm1vZHVsZS5zY3NzJ1xyXG5pbXBvcnQgTGluayBmcm9tICduZXh0L2xpbmsnXHJcblxyXG5leHBvcnQgZnVuY3Rpb24gUGhvbmUoeyBvbk1vZGFsQ2xvc2UsIGRhdGEsIHBhcmVudCB9KSB7XHJcblxyXG4gICAgY29uc3RcclxuICAgICAgICB0b3AgPSBwYXJlbnQuY3VycmVudC5jaGlsZHJlbi5waG9uZS5vZmZzZXRUb3BcclxuXHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIDxNb2RhbFxyXG4gICAgICAgICAgICBvbkNsb3NlPXtvbk1vZGFsQ2xvc2V9XHJcbiAgICAgICAgICAgIGNvbnRhaW5lclN0eWxlcz17c3R5bGVzLmNvbnRhaW5lcn1cclxuICAgICAgICAgICAgY29udGVudFN0eWxlcz17c3R5bGVzLmNvbnRlbnR9XHJcbiAgICAgICAgICAgIG90aGVyU3R5bGVzPXt7IHRvcDogdG9wICsgJ3B4JyB9fVxyXG4gICAgICAgID5cclxuICAgICAgICAgICAgPExpbmsgaHJlZj17ZGF0YS51cmx9PlxyXG4gICAgICAgICAgICAgICAgPGEgdGFyZ2V0PVwiX2JsYW5rXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPHA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRhdGEudGV4dFxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgPC9wPlxyXG4gICAgICAgICAgICAgICAgPC9hPlxyXG4gICAgICAgICAgICA8L0xpbms+XHJcbiAgICAgICAgPC9Nb2RhbD5cclxuICAgIClcclxufVxyXG4iLCJpbXBvcnQgeyBNb2RhbCB9IGZyb20gXCIuLi8uLi8uLi8uLi9jb21tb24vYXV0aC9Nb2RhbC9Nb2RhbFwiXHJcbmltcG9ydCBzdHlsZXMgZnJvbSAnLi4vU29jaWFsTWVkaWFNb2RhbC5tb2R1bGUuc2NzcydcclxuaW1wb3J0IExpbmsgZnJvbSAnbmV4dC9saW5rJ1xyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIFRlbGVncmFtKHsgb25Nb2RhbENsb3NlLCBkYXRhLCBwYXJlbnQgfSkge1xyXG5cclxuICAgIGNvbnN0IHRvcCA9IHBhcmVudC5jdXJyZW50LmNoaWxkcmVuLnRlbGVncmFtLm9mZnNldFRvcFxyXG5cclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPE1vZGFsXHJcbiAgICAgICAgICAgIG9uQ2xvc2U9e29uTW9kYWxDbG9zZX1cclxuICAgICAgICAgICAgY29udGFpbmVyU3R5bGVzPXtzdHlsZXMuY29udGFpbmVyfVxyXG4gICAgICAgICAgICBjb250ZW50U3R5bGVzPXtzdHlsZXMuY29udGVudH1cclxuICAgICAgICAgICAgb3RoZXJTdHlsZXM9e3sgdG9wOiB0b3AgKyAncHgnIH19XHJcbiAgICAgICAgPlxyXG4gICAgICAgICAgICA8TGluayBocmVmPXtkYXRhLnVybH0+XHJcbiAgICAgICAgICAgICAgICA8YSB0YXJnZXQ9XCJfYmxhbmtcIj5cclxuICAgICAgICAgICAgICAgICAgICA8cD5cclxuICAgICAgICAgICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZGF0YS50ZXh0XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICA8L3A+XHJcbiAgICAgICAgICAgICAgICA8L2E+XHJcbiAgICAgICAgICAgIDwvTGluaz5cclxuICAgICAgICA8L01vZGFsPlxyXG4gICAgKVxyXG59IiwiaW1wb3J0IHsgTW9kYWwgfSBmcm9tIFwiLi4vLi4vLi4vLi4vY29tbW9uL2F1dGgvTW9kYWwvTW9kYWxcIlxyXG5pbXBvcnQgc3R5bGVzIGZyb20gJy4uL1NvY2lhbE1lZGlhTW9kYWwubW9kdWxlLnNjc3MnXHJcbmltcG9ydCBMaW5rIGZyb20gJ25leHQvbGluaydcclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBWaWJlcih7IG9uTW9kYWxDbG9zZSwgZGF0YSwgcGFyZW50IH0pIHtcclxuXHJcbiAgICBjb25zdCB0b3AgPSBwYXJlbnQuY3VycmVudC5jaGlsZHJlbi52aWJlci5vZmZzZXRUb3BcclxuXHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIDxNb2RhbFxyXG4gICAgICAgICAgICBvbkNsb3NlPXtvbk1vZGFsQ2xvc2V9XHJcbiAgICAgICAgICAgIGNvbnRhaW5lclN0eWxlcz17c3R5bGVzLmNvbnRhaW5lcn1cclxuICAgICAgICAgICAgY29udGVudFN0eWxlcz17c3R5bGVzLmNvbnRlbnR9XHJcbiAgICAgICAgICAgIG90aGVyU3R5bGVzPXt7IHRvcDogdG9wICsgJ3B4JyB9fVxyXG4gICAgICAgID5cclxuICAgICAgICAgICAgPExpbmsgaHJlZj17ZGF0YS51cmx9PlxyXG4gICAgICAgICAgICAgICAgPGEgdGFyZ2V0PVwiX2JsYW5rXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPHA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRhdGEudGV4dFxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgPC9wPlxyXG4gICAgICAgICAgICAgICAgPC9hPlxyXG4gICAgICAgICAgICA8L0xpbms+XHJcbiAgICAgICAgPC9Nb2RhbD5cclxuICAgIClcclxufSIsImltcG9ydCB7IE1vZGFsIH0gZnJvbSBcIi4uLy4uLy4uLy4uL2NvbW1vbi9hdXRoL01vZGFsL01vZGFsXCJcclxuaW1wb3J0IHN0eWxlcyBmcm9tICcuLi9Tb2NpYWxNZWRpYU1vZGFsLm1vZHVsZS5zY3NzJ1xyXG5pbXBvcnQgTGluayBmcm9tICduZXh0L2xpbmsnXHJcblxyXG5leHBvcnQgZnVuY3Rpb24gV2F0c1VwKHsgb25Nb2RhbENsb3NlLCBkYXRhLCBwYXJlbnQgfSkge1xyXG5cclxuICAgIGNvbnN0IHRvcCA9IHBhcmVudC5jdXJyZW50LmNoaWxkcmVuLndhdHN1cC5vZmZzZXRUb3BcclxuXHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIDxNb2RhbFxyXG4gICAgICAgICAgICBvbkNsb3NlPXtvbk1vZGFsQ2xvc2V9XHJcbiAgICAgICAgICAgIGNvbnRhaW5lclN0eWxlcz17c3R5bGVzLmNvbnRhaW5lcn1cclxuICAgICAgICAgICAgY29udGVudFN0eWxlcz17c3R5bGVzLmNvbnRlbnR9XHJcbiAgICAgICAgICAgIG90aGVyU3R5bGVzPXt7IHRvcDogdG9wICsgJ3B4JyB9fVxyXG4gICAgICAgID5cclxuICAgICAgICAgICAgPExpbmsgaHJlZj17ZGF0YS51cmx9PlxyXG4gICAgICAgICAgICAgICAgPGEgdGFyZ2V0PVwiX2JsYW5rXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPHA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRhdGEudGV4dFxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgPC9wPlxyXG4gICAgICAgICAgICAgICAgPC9hPlxyXG4gICAgICAgICAgICA8L0xpbms+XHJcbiAgICAgICAgPC9Nb2RhbD5cclxuICAgIClcclxufSIsImltcG9ydCB7IHVzZVJlZiB9IGZyb20gXCJyZWFjdFwiO1xyXG4vLyBzdHlsZXNcclxuaW1wb3J0IHN0eWxlcyBmcm9tIFwiLi9Tb2NpYWxNZWRpYS5tb2R1bGUuc2Nzc1wiO1xyXG4vLyBjb21wb25lbnRzXHJcbmltcG9ydCB7IEljb24gfSBmcm9tIFwiLi9JY29uL0ljb25cIjtcclxuaW1wb3J0IHsgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IHsgUGhvbmUgfSBmcm9tIFwiLi9Nb2RhbHMvUGhvbmUvUGhvbmVcIjtcclxuaW1wb3J0IHsgRmFjZWJvb2sgfSBmcm9tIFwiLi9Nb2RhbHMvRmFjZWJvb2svRmFjZWJvb2tcIjtcclxuaW1wb3J0IHsgVGVsZWdyYW0gfSBmcm9tIFwiLi9Nb2RhbHMvVGVsZWdyYW0vVGVsZWdyYW1cIjtcclxuaW1wb3J0IHsgV2F0c1VwIH0gZnJvbSBcIi4vTW9kYWxzL1dhdHNVcC9XYXRzVXBcIjtcclxuaW1wb3J0IHsgSW5zdGFncmFtIH0gZnJvbSBcIi4vTW9kYWxzL0luc3RhZ3JhbS9JbnN0YWdyYW1cIjtcclxuaW1wb3J0IHsgVmliZXIgfSBmcm9tIFwiLi9Nb2RhbHMvVmliZXIvVmliZXJcIjtcclxuLy8gaWNvbnNcclxuaW1wb3J0IHBob25lIGZyb20gXCIvcHVibGljL2ltYWdlcy9oZWFkZXIvU29jaWFsTWVkaWEvcGhvbmUuc3ZnXCI7XHJcbmltcG9ydCBmYWNlYm9vayBmcm9tIFwiL3B1YmxpYy9pbWFnZXMvaGVhZGVyL1NvY2lhbE1lZGlhL2ZhY2Vib29rLnN2Z1wiO1xyXG5pbXBvcnQgdGVsZWdyYW0gZnJvbSBcIi9wdWJsaWMvaW1hZ2VzL2hlYWRlci9Tb2NpYWxNZWRpYS90ZWxlZ3JhbS5zdmdcIjtcclxuaW1wb3J0IHdhdHN1cCBmcm9tIFwiL3B1YmxpYy9pbWFnZXMvaGVhZGVyL1NvY2lhbE1lZGlhL3dhdHN1cC5zdmdcIjtcclxuaW1wb3J0IGluc3RhZ3JhbSBmcm9tIFwiL3B1YmxpYy9pbWFnZXMvaGVhZGVyL1NvY2lhbE1lZGlhL2luc3RhZ3JhbS5zdmdcIjtcclxuaW1wb3J0IHZpYmVyIGZyb20gXCIvcHVibGljL2ltYWdlcy9oZWFkZXIvU29jaWFsTWVkaWEvdmliZXIuc3ZnXCI7XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gU29jaWFsTWVkaWEoKSB7XHJcbiAgY29uc3QgLy8gc3RhdGVzXHJcbiAgICBbc2hvd1Bob25lTW9kYWwsIHNldFNob3dQaG9uZU1vZGFsXSA9IHVzZVN0YXRlKGZhbHNlKSxcclxuICAgIFtzaG93RmFjYm9va01vZGFsLCBzZXRTaG93RmFjYm9va01vZGFsXSA9IHVzZVN0YXRlKGZhbHNlKSxcclxuICAgIFtzaG93VGVsZWdyYW1Nb2RhbCwgc2V0U2hvd1RlbGVncmFtTW9kYWxdID0gdXNlU3RhdGUoZmFsc2UpLFxyXG4gICAgW3Nob3dXYXRzVXBNb2RhbCwgc2V0U2hvd1dhdHNVcE1vZGFsXSA9IHVzZVN0YXRlKGZhbHNlKSxcclxuICAgIFtzaG93SW5zdGFncmFtTW9kYWwsIHNldFNob3dJbnN0YWdyYW1Nb2RhbF0gPSB1c2VTdGF0ZShmYWxzZSksXHJcbiAgICBbc2hvd1ZpYmVyTW9kYWwsIHNldFNob3dWaWJlck1vZGFsXSA9IHVzZVN0YXRlKGZhbHNlKSxcclxuICAgIHNvY2lhbE1lZGlhc1JlZiA9IHVzZVJlZigpLFxyXG4gICAgLy8gY29uZmlnXHJcbiAgICBpY29ucyA9IFtcclxuICAgICAge1xyXG4gICAgICAgIGlkOiBcInBob25lXCIsXHJcbiAgICAgICAga2V5OiBNYXRoLnJhbmRvbSgpLFxyXG4gICAgICAgIHNyYzogcGhvbmUuc3JjLFxyXG4gICAgICAgIGNsaWNrOiAoKSA9PiB7XHJcbiAgICAgICAgICB3aW5kb3cuc2Nyb2xsVG8oMCwgMCk7XHJcbiAgICAgICAgICBzZXRTaG93UGhvbmVNb2RhbCh0cnVlKTtcclxuICAgICAgICB9LFxyXG4gICAgICB9LFxyXG4gICAgICB7XHJcbiAgICAgICAgaWQ6IFwiZmFjZWJvb2tcIixcclxuICAgICAgICBrZXk6IE1hdGgucmFuZG9tKCksXHJcbiAgICAgICAgc3JjOiBmYWNlYm9vay5zcmMsXHJcbiAgICAgICAgY2xpY2s6ICgpID0+IHtcclxuICAgICAgICAgIHdpbmRvdy5zY3JvbGxUbygwLCAwKTtcclxuICAgICAgICAgIHNldFNob3dGYWNib29rTW9kYWwodHJ1ZSk7XHJcbiAgICAgICAgfSxcclxuICAgICAgfSxcclxuICAgICAge1xyXG4gICAgICAgIGlkOiBcInRlbGVncmFtXCIsXHJcbiAgICAgICAga2V5OiBNYXRoLnJhbmRvbSgpLFxyXG4gICAgICAgIHNyYzogdGVsZWdyYW0uc3JjLFxyXG4gICAgICAgIGNsaWNrOiAoKSA9PiB7XHJcbiAgICAgICAgICB3aW5kb3cuc2Nyb2xsVG8oMCwgMCk7XHJcbiAgICAgICAgICBzZXRTaG93VGVsZWdyYW1Nb2RhbCh0cnVlKTtcclxuICAgICAgICB9LFxyXG4gICAgICB9LFxyXG4gICAgICB7XHJcbiAgICAgICAgaWQ6IFwid2F0c3VwXCIsXHJcbiAgICAgICAga2V5OiBNYXRoLnJhbmRvbSgpLFxyXG4gICAgICAgIHNyYzogd2F0c3VwLnNyYyxcclxuICAgICAgICBjbGljazogKCkgPT4ge1xyXG4gICAgICAgICAgd2luZG93LnNjcm9sbFRvKDAsIDApO1xyXG4gICAgICAgICAgc2V0U2hvd1dhdHNVcE1vZGFsKHRydWUpO1xyXG4gICAgICAgIH0sXHJcbiAgICAgIH0sXHJcbiAgICAgIHtcclxuICAgICAgICBpZDogXCJpbnN0YWdyYW1cIixcclxuICAgICAgICBrZXk6IE1hdGgucmFuZG9tKCksXHJcbiAgICAgICAgc3JjOiBpbnN0YWdyYW0uc3JjLFxyXG4gICAgICAgIGNsaWNrOiAoKSA9PiB7XHJcbiAgICAgICAgICB3aW5kb3cuc2Nyb2xsVG8oMCwgMCk7XHJcbiAgICAgICAgICBzZXRTaG93SW5zdGFncmFtTW9kYWwodHJ1ZSk7XHJcbiAgICAgICAgfSxcclxuICAgICAgfSxcclxuICAgICAge1xyXG4gICAgICAgIGlkOiBcInZpYmVyXCIsXHJcbiAgICAgICAga2V5OiBNYXRoLnJhbmRvbSgpLFxyXG4gICAgICAgIHNyYzogdmliZXIuc3JjLFxyXG4gICAgICAgIGNsaWNrOiAoKSA9PiB7XHJcbiAgICAgICAgICB3aW5kb3cuc2Nyb2xsVG8oMCwgMCk7XHJcbiAgICAgICAgICBzZXRTaG93VmliZXJNb2RhbCh0cnVlKTtcclxuICAgICAgICB9LFxyXG4gICAgICB9LFxyXG4gICAgXSxcclxuICAgIG1vZGFsX2NvbnRlbnRzID0ge1xyXG4gICAgICBwaG9uZToge1xyXG4gICAgICAgIHRleHQ6IFwiKzM0IDY3MiAzMTQgODA4XCIsXHJcbiAgICAgICAgdXJsOiBcInRlbDorMzQ2NzIzMTQ4MDhcIixcclxuICAgICAgfSxcclxuICAgICAgZmFjZWJvb2s6IHtcclxuICAgICAgICB0ZXh0OiBcIkZhY2Vib29rXCIsXHJcbiAgICAgICAgdXJsOiBcImh0dHBzOi8vd3d3LmZhY2Vib29rLmNvbS8lRDAlOUYlRDElODAlRDAlQkUlRDAlQjMlRDAlQkQlRDAlQkUlRDAlQjclRDElOEItJUQwJUJEJUQwJUIwLSVEMCVBNCVEMSU4MyVEMSU4MiVEMCVCMSVEMCVCRSVEMCVCQi0xMDQ5NDEzNDc1Nzc5MTMvXCIsXHJcbiAgICAgIH0sXHJcbiAgICAgIHRlbGVncmFtOiB7XHJcbiAgICAgICAgdGV4dDogXCIrMzQgNjcyIDMxNCA4MDhcIixcclxuICAgICAgICB1cmw6IFwiaHR0cHM6Ly90ZWxlZ3JhbS5tZS9mb290YmV0MjRjb21cIixcclxuICAgICAgfSxcclxuICAgICAgd2F0c3VwOiB7XHJcbiAgICAgICAgdGV4dDogXCIrMzQgNjcyIDMxNCA4MDhcIixcclxuICAgICAgICB1cmw6IFwiaHR0cHM6Ly9hcGkud2hhdHNhcHAuY29tL3NlbmQ/cGhvbmU9KzM0NjcyMzE0ODA4XCIsXHJcbiAgICAgIH0sXHJcbiAgICAgIGluc3RhZ3JhbToge1xyXG4gICAgICAgIHRleHQ6IFwiSW5zdGFncmFtXCIsXHJcbiAgICAgICAgdXJsOiBcImh0dHBzOi8vd3d3Lmluc3RhZ3JhbS5jb20vcHJvZ25venluYTU1MC8/dXRtX21lZGl1bT1jb3B5X2xpbmtcIixcclxuICAgICAgfSxcclxuICAgICAgdmliZXI6IHtcclxuICAgICAgICB0ZXh0OiBcIiszNCA2NzIgMzE0IDgwOFwiLFxyXG4gICAgICAgIHVybDogXCJ2aWJlcjovL2NoYXQ/bnVtYmVyPSszNDY3MjMxNDgwOFwiLFxyXG4gICAgICB9LFxyXG4gICAgfTtcclxuICByZXR1cm4gKFxyXG4gICAgPD5cclxuICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5jb250YWluZXJ9IHJlZj17c29jaWFsTWVkaWFzUmVmfT5cclxuICAgICAgICB7aWNvbnMubWFwKChlbCkgPT4gKFxyXG4gICAgICAgICAgPEljb24gaWQ9e2VsLmlkfSBrZXk9e2VsLmtleX0gc3JjPXtlbC5zcmN9IGNsaWNrPXtlbC5jbGlja30gLz5cclxuICAgICAgICApKX1cclxuICAgICAgPC9kaXY+XHJcbiAgICAgIHtzaG93UGhvbmVNb2RhbCAmJiAoXHJcbiAgICAgICAgPFBob25lXHJcbiAgICAgICAgICBvbk1vZGFsQ2xvc2U9eygpID0+IHNldFNob3dQaG9uZU1vZGFsKGZhbHNlKX1cclxuICAgICAgICAgIGRhdGE9e21vZGFsX2NvbnRlbnRzLnBob25lfVxyXG4gICAgICAgICAgcGFyZW50PXtzb2NpYWxNZWRpYXNSZWZ9XHJcbiAgICAgICAgLz5cclxuICAgICAgKX1cclxuICAgICAge3Nob3dGYWNib29rTW9kYWwgJiYgKFxyXG4gICAgICAgIDxGYWNlYm9va1xyXG4gICAgICAgICAgb25Nb2RhbENsb3NlPXsoKSA9PiBzZXRTaG93RmFjYm9va01vZGFsKGZhbHNlKX1cclxuICAgICAgICAgIGRhdGE9e21vZGFsX2NvbnRlbnRzLmZhY2Vib29rfVxyXG4gICAgICAgICAgcGFyZW50PXtzb2NpYWxNZWRpYXNSZWZ9XHJcbiAgICAgICAgLz5cclxuICAgICAgKX1cclxuICAgICAge3Nob3dUZWxlZ3JhbU1vZGFsICYmIChcclxuICAgICAgICA8VGVsZWdyYW1cclxuICAgICAgICAgIG9uTW9kYWxDbG9zZT17KCkgPT4gc2V0U2hvd1RlbGVncmFtTW9kYWwoZmFsc2UpfVxyXG4gICAgICAgICAgZGF0YT17bW9kYWxfY29udGVudHMudGVsZWdyYW19XHJcbiAgICAgICAgICBwYXJlbnQ9e3NvY2lhbE1lZGlhc1JlZn1cclxuICAgICAgICAvPlxyXG4gICAgICApfVxyXG4gICAgICB7c2hvd1dhdHNVcE1vZGFsICYmIChcclxuICAgICAgICA8V2F0c1VwXHJcbiAgICAgICAgICBvbk1vZGFsQ2xvc2U9eygpID0+IHNldFNob3dXYXRzVXBNb2RhbChmYWxzZSl9XHJcbiAgICAgICAgICBkYXRhPXttb2RhbF9jb250ZW50cy53YXRzdXB9XHJcbiAgICAgICAgICBwYXJlbnQ9e3NvY2lhbE1lZGlhc1JlZn1cclxuICAgICAgICAvPlxyXG4gICAgICApfVxyXG4gICAgICB7c2hvd0luc3RhZ3JhbU1vZGFsICYmIChcclxuICAgICAgICA8SW5zdGFncmFtXHJcbiAgICAgICAgICBvbk1vZGFsQ2xvc2U9eygpID0+IHNldFNob3dJbnN0YWdyYW1Nb2RhbChmYWxzZSl9XHJcbiAgICAgICAgICBkYXRhPXttb2RhbF9jb250ZW50cy5pbnN0YWdyYW19XHJcbiAgICAgICAgICBwYXJlbnQ9e3NvY2lhbE1lZGlhc1JlZn1cclxuICAgICAgICAvPlxyXG4gICAgICApfVxyXG4gICAgICB7c2hvd1ZpYmVyTW9kYWwgJiYgKFxyXG4gICAgICAgIDxWaWJlclxyXG4gICAgICAgICAgb25Nb2RhbENsb3NlPXsoKSA9PiBzZXRTaG93VmliZXJNb2RhbChmYWxzZSl9XHJcbiAgICAgICAgICBkYXRhPXttb2RhbF9jb250ZW50cy52aWJlcn1cclxuICAgICAgICAgIHBhcmVudD17c29jaWFsTWVkaWFzUmVmfVxyXG4gICAgICAgIC8+XHJcbiAgICAgICl9XHJcbiAgICA8Lz5cclxuICApO1xyXG59XHJcbiIsImltcG9ydCB7IE1vZGFsIH0gZnJvbSAnLi4vLi4vY29tbW9uL2F1dGgvTW9kYWwvTW9kYWwnXHJcbi8vIHN0eWxlcyBcclxuaW1wb3J0IHN0eWxlcyBmcm9tICcuL0NvbnRhY3RzLm1vZHVsZS5zY3NzJ1xyXG5pbXBvcnQgeyBjb250YWN0c19kYXRhIH0gZnJvbSAnLi9jb250YWN0c19kYXRhJ1xyXG4vLyBpY29uc1xyXG5pbXBvcnQgY2xvc2VWZWN0b3IgZnJvbSAnL3B1YmxpYy9pbWFnZXMvaGVhZGVyL1NvY2lhbE1lZGlhL2Nsb3NlVmVjdG9yLnBuZydcclxuXHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBDb250YWN0c01vZGFsKHsgb25Nb2RhbENsb3NlLCBvcGVuZWQgPSBmYWxzZSB9KSB7XHJcblxyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8TW9kYWxcclxuICAgICAgICAgICAgb25DbG9zZT17b25Nb2RhbENsb3NlfVxyXG4gICAgICAgICAgICBjb250YWluZXJTdHlsZXM9e2Ake3N0eWxlcy5jb250YWluZXJ9IGB9XHJcbiAgICAgICAgICAgIGNvbnRlbnRTdHlsZXM9e2Ake3N0eWxlcy5jb250ZW50fSAke29wZW5lZCA/IHN0eWxlcy5vcGVuIDogc3R5bGVzLmNsb3NlfWB9XHJcbiAgICAgICAgPlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLm1vZGFsX2NvbnRlbnR9PlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5jb250ZW50X2NvbnRhaW5lcn0+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy50b3B9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8aW1nXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzcmM9e2Nsb3NlVmVjdG9yLnNyY31cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFsdD1cIlwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb25Nb2RhbENsb3NlKClcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdib2R5Jykuc3R5bGUub3ZlcmZsb3cgPSAndmlzaWJsZSdcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH19XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5yb3dzfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY29udGFjdHNfZGF0YS5tYXAoZWwgPT4gKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMucm93fSBrZXk9e01hdGgucmFuZG9tKCl9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmltZ30+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aW1nIHNyYz17ZWwuaWNvbn0gYWx0PVwiY29udGFjdC1pY29uXCIgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMudGV4dH0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YSBocmVmPXtlbC51cmx9IHRhcmdldD1cIl9ibGFua1wiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZWwudGV4dFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvYT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICApKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC9Nb2RhbD5cclxuICAgIClcclxufVxyXG4iLCJpbXBvcnQgcGhvbmUgZnJvbSAnL3B1YmxpYy9pbWFnZXMvaGVhZGVyL1NvY2lhbE1lZGlhL3Bob25lLnN2ZydcclxuaW1wb3J0IGZhY2Vib29rIGZyb20gJy9wdWJsaWMvaW1hZ2VzL2hlYWRlci9Tb2NpYWxNZWRpYS9mYWNlYm9vay5zdmcnXHJcbmltcG9ydCB0ZWxlZ3JhbSBmcm9tICcvcHVibGljL2ltYWdlcy9oZWFkZXIvU29jaWFsTWVkaWEvdGVsZWdyYW0uc3ZnJ1xyXG5pbXBvcnQgd2F0c3VwIGZyb20gJy9wdWJsaWMvaW1hZ2VzL2hlYWRlci9Tb2NpYWxNZWRpYS93YXRzdXAuc3ZnJ1xyXG5pbXBvcnQgaW5zdGFncmFtIGZyb20gJy9wdWJsaWMvaW1hZ2VzL2hlYWRlci9Tb2NpYWxNZWRpYS9pbnN0YWdyYW0uc3ZnJ1xyXG5pbXBvcnQgdmliZXIgZnJvbSAnL3B1YmxpYy9pbWFnZXMvaGVhZGVyL1NvY2lhbE1lZGlhL3ZpYmVyLnN2ZydcclxuaW1wb3J0IGVtYWlsIGZyb20gJy9wdWJsaWMvaW1hZ2VzL2hlYWRlci9Tb2NpYWxNZWRpYS9lbWFpbC5zdmcnXHJcblxyXG5leHBvcnQgY29uc3QgY29udGFjdHNfZGF0YSA9IFtcclxuICAgIHtcclxuICAgICAgICBpY29uOiBwaG9uZS5zcmMsXHJcbiAgICAgICAgdXJsOiBcInRlbDorMzQ2NzIzMTQ4MDhcIixcclxuICAgICAgICB0ZXh0OiBcIiszNCA2NzIgMzE0IDgwOFwiXHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICAgIGljb246IGZhY2Vib29rLnNyYyxcclxuICAgICAgICB1cmw6IFwiaHR0cHM6Ly93d3cuZmFjZWJvb2suY29tLyVEMCU5RiVEMSU4MCVEMCVCRSVEMCVCMyVEMCVCRCVEMCVCRSVEMCVCNyVEMSU4Qi0lRDAlQkQlRDAlQjAtJUQwJUE0JUQxJTgzJUQxJTgyJUQwJUIxJUQwJUJFJUQwJUJCLTEwNDk0MTM0NzU3NzkxMy9cIixcclxuICAgICAgICB0ZXh0OiBcIkZhY2Vib29rXCJcclxuICAgIH1cclxuICAgICxcclxuICAgIHtcclxuICAgICAgICBpY29uOiB0ZWxlZ3JhbS5zcmMsXHJcbiAgICAgICAgdXJsOiBcImh0dHBzOi8vdGVsZWdyYW0ubWUvZm9vdGJldDI0Y29tXCIsXHJcbiAgICAgICAgdGV4dDogXCJAZm9vdGJldDI0Y29tXCJcclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgICAgaWNvbjogd2F0c3VwLnNyYyxcclxuICAgICAgICB1cmw6IFwiaHR0cHM6Ly9hcGkud2hhdHNhcHAuY29tL3NlbmQ/cGhvbmU9KzM0NjcyMzE0ODA4XCIsXHJcbiAgICAgICAgdGV4dDogXCIrMzQgNjcyIDMxNCA4MDhcIlxyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgICBpY29uOiBpbnN0YWdyYW0uc3JjLFxyXG4gICAgICAgIHVybDogXCJodHRwczovL3d3dy5pbnN0YWdyYW0uY29tL3Byb2dub3p5bmE1NTAvP3V0bV9tZWRpdW09Y29weV9saW5rXCIsXHJcbiAgICAgICAgdGV4dDogXCJJbnN0YWdyYW1cIlxyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgICBpY29uOiB2aWJlci5zcmMsXHJcbiAgICAgICAgdXJsOiBcInZpYmVyOi8vY2hhdD9udW1iZXI9KzM0NjcyMzE0ODA4XCIsXHJcbiAgICAgICAgdGV4dDogXCIrMzQgNjcyIDMxNCA4MDhcIlxyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgICBpY29uOiBlbWFpbC5zcmMsXHJcbiAgICAgICAgdXJsOiBcIm1haWx0bzpuLnhhY2gxOTg3QG1haWwucnVcIixcclxuICAgICAgICB0ZXh0OiBcIm4ueGFjaDE5ODdAbWFpbC5ydVwiXHJcbiAgICB9XHJcbl0iLCJpbXBvcnQgc3R5bGVzIGZyb20gJy4vSW5wdXRDb250YWluZXIubW9kdWxlLnNjc3MnXHJcblxyXG5leHBvcnQgZnVuY3Rpb24gSW5wdXRDb250YWluZXIoe1xyXG4gICAgbGFiZWwsXHJcbiAgICBpZCxcclxuICAgIHR5cGUsXHJcbiAgICBwbGFjZWhvbGRlcixcclxuICAgIGVycm9ycyxcclxuICAgIG90aGVyIH0pIHtcclxuXHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuY29udGFpbmVyfT5cclxuICAgICAgICAgICAge2xhYmVsICYmXHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmxhYmVsX2NvbnRlbnR9PlxyXG4gICAgICAgICAgICAgICAgICAgIDxsYWJlbCBodG1sRm9yPXtpZH0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxpbWdcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNyYz17bGFiZWwuc3JjfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYWx0PVwiaWNvblwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9sYWJlbD5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuaW5wdXRfY29udGFpbmVyfT5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtlcnJvcnMgPyBzdHlsZXMuaW5wdXRfZXJyb3JfY29udGVudCA6IHN0eWxlcy5pbnB1dF9zdWNjZXNzX2NvbnRlbnR9PlxyXG4gICAgICAgICAgICAgICAgICAgIDxpbnB1dFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBpZD17aWR9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU9e3R5cGV9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHBsYWNlaG9sZGVyPXtwbGFjZWhvbGRlcn1cclxuICAgICAgICAgICAgICAgICAgICAgICAgey4uLm90aGVyfVxyXG4gICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICApXHJcbn1cclxuIiwiaW1wb3J0IHsgdXNlRWZmZWN0LCB1c2VTdGF0ZSwgdXNlUmVmIH0gZnJvbSAncmVhY3QnXHJcbmltcG9ydCBzdHlsZXMgZnJvbSAnLi9Nb2RhbC5tb2R1bGUuc2NzcydcclxuaW1wb3J0IHsgY3JlYXRlUG9ydGFsIH0gZnJvbSAncmVhY3QtZG9tJ1xyXG5cclxuXHJcbmNvbnN0XHJcbiAgICBoYW5kbGVfb3ZlcmZsb3dfb25fb3BlbiA9ICgpID0+IHtcclxuICAgICAgICBkb2N1bWVudC5ib2R5LnN0eWxlLm92ZXJmbG93WSA9ICdzY3JvbGwnXHJcbiAgICAgICAgZG9jdW1lbnQuYm9keS5zdHlsZS5wb3NpdGlvbiA9ICdmaXhlZCdcclxuICAgICAgICBkb2N1bWVudC5ib2R5LnN0eWxlLndpZHRoID0gJzEwMCUnXHJcbiAgICB9LFxyXG4gICAgaGFuZGxlX292ZXJmbG93X29uX2Nsb3NlID0gKCkgPT4ge1xyXG4gICAgICAgIGRvY3VtZW50LmJvZHkuc3R5bGUub3ZlcmZsb3dZID0gJ3Njcm9sbCdcclxuICAgICAgICBkb2N1bWVudC5ib2R5LnN0eWxlLnBvc2l0aW9uID0gJ3N0YXRpYydcclxuICAgICAgICBkb2N1bWVudC5ib2R5LnN0eWxlLndpZHRoID0gJ2F1dG8nXHJcbiAgICB9XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gTW9kYWwoe1xyXG4gICAgb25DbG9zZSxcclxuICAgIC8vIGNsb3NlV2l0aFZlY3RvcmUgPSBudWxsLFxyXG4gICAgY2hpbGRyZW4sXHJcbiAgICBjb250YWluZXJTdHlsZXMgPSBudWxsLFxyXG4gICAgY29udGVudFN0eWxlcyA9IG51bGwsXHJcbiAgICBvdGhlclN0eWxlcyA9IG51bGwsXHJcbiAgICBwb3J0YWxMb2NhdGlvbiA9ICdtb2RhbC1jb250ZWluZXInIH0pIHtcclxuXHJcblxyXG5cclxuICAgIGNvbnN0XHJcbiAgICAgICAgW3Nob3dNb2RhbCwgc2V0U2hvd01vZGFsXSA9IHVzZVN0YXRlKGZhbHNlKVxyXG5cclxuICAgIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICAgICAgc2V0U2hvd01vZGFsKHRydWUpXHJcbiAgICAgICAgZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcihcIm1vdXNlZG93blwiLCBoYW5kbGVDbG9zZSk7XHJcblxyXG4gICAgICAgIHJldHVybiAoKSA9PiB7XHJcbiAgICAgICAgICAgIGhhbmRsZV9vdmVyZmxvd19vbl9jbG9zZSgpO1xyXG4gICAgICAgICAgICBkb2N1bWVudC5yZW1vdmVFdmVudExpc3RlbmVyKFwibW91c2Vkb3duXCIsIGhhbmRsZUNsb3NlKTtcclxuICAgICAgICB9O1xyXG4gICAgfSwgW2hhbmRsZUNsb3NlXSlcclxuXHJcbiAgICBjb25zdCBub2RlID0gdXNlUmVmKClcclxuXHJcbiAgICBjb25zdCBoYW5kbGVDbG9zZSA9IGUgPT4ge1xyXG4gICAgICAgIGlmIChub2RlPy5jdXJyZW50Py5jb250YWlucyhlLnRhcmdldCkpIHtcclxuICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIG9uQ2xvc2UoKVxyXG4gICAgICAgIH1cclxuICAgIH0sXHJcbiAgICAgICAgZGluYW1pY1RvcCA9IHdpbmRvdy5zY3JvbGxZXHJcblxyXG4gICAgc2hvd01vZGFsID8gaGFuZGxlX292ZXJmbG93X29uX29wZW4oKSA6IGhhbmRsZV9vdmVyZmxvd19vbl9jbG9zZSgpXHJcblxyXG4gICAgY29uc3QgbW9kYWwgPSAoXHJcbiAgICAgICAgPGRpdlxyXG4gICAgICAgICAgICBjbGFzc05hbWU9e2Ake3N0eWxlcy5tb2RhbENvbnRlaW5lcn0gJHtjb250YWluZXJTdHlsZXN9YH1cclxuICAgICAgICAgICAgc3R5bGU9e3tcclxuICAgICAgICAgICAgICAgIHRvcDogJzBweCcsXHJcbiAgICAgICAgICAgICAgICBwb3NpdGlvbjogJ2ZpeGVkICFpbXBvcnRhbnQnXHJcbiAgICAgICAgICAgIH19PlxyXG4gICAgICAgICAgICA8ZGl2XHJcbiAgICAgICAgICAgICAgICBjbGFzc05hbWU9e2Ake3N0eWxlcy5tb2RhbENvbnRlbnR9ICR7Y29udGVudFN0eWxlc31gfVxyXG4gICAgICAgICAgICAgICAgc3R5bGU9e290aGVyU3R5bGVzfVxyXG4gICAgICAgICAgICAgICAgcmVmPXtub2RlfVxyXG4gICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgY2hpbGRyZW5cclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICApXHJcbiAgICBpZiAoc2hvd01vZGFsKSB7XHJcbiAgICAgICAgcmV0dXJuIGNyZWF0ZVBvcnRhbChcclxuICAgICAgICAgICAgbW9kYWwsXHJcbiAgICAgICAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKHBvcnRhbExvY2F0aW9uKVxyXG4gICAgICAgIClcclxuICAgIH1cclxuICAgIGVsc2UgcmV0dXJuIG51bGxcclxufVxyXG4iLCJleHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBFcnJvcih7IGNoaWxkcmVuIH0pIHtcclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPD5cclxuICAgICAgICAgICAgPG1haW4+XHJcbiAgICAgICAgICAgICAgICB7Y2hpbGRyZW59XHJcbiAgICAgICAgICAgIDwvbWFpbj5cclxuICAgICAgICA8Lz5cclxuICAgIClcclxufVxyXG4iLCJpbXBvcnQgeyBGb290ZXIgfSBmcm9tICcuLi9jb21wb25lbnRzL0Zvb3Rlci9Gb290ZXInXHJcbmltcG9ydCB7IEhlYWRlciB9IGZyb20gJy4uL2NvbXBvbmVudHMvSGVhZGVyL0hlYWRlcidcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIE1haW4oeyBjaGlsZHJlbiB9KSB7XHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIDw+XHJcbiAgICAgICAgICAgIDxIZWFkZXIgbWFpbnNQYWdlcz17dHJ1ZX0gLz5cclxuICAgICAgICAgICAgPG1haW4+XHJcbiAgICAgICAgICAgICAgICB7Y2hpbGRyZW59XHJcbiAgICAgICAgICAgIDwvbWFpbj5cclxuICAgICAgICAgICAgPEZvb3RlciAvPlxyXG4gICAgICAgIDwvPlxyXG4gICAgKVxyXG59XHJcbiIsImltcG9ydCB7IEhlYWRlciB9IGZyb20gJy4uL2NvbXBvbmVudHMvSGVhZGVyL0hlYWRlcidcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIFJlZ2lzdGVyTGF5b3V0KHsgY2hpbGRyZW4gfSkge1xyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8PlxyXG4gICAgICAgICAgICA8SGVhZGVyIG1haW5zUGFnZXM9e2ZhbHNlfS8+XHJcbiAgICAgICAgICAgIDxtYWluPlxyXG4gICAgICAgICAgICAgICAge2NoaWxkcmVufVxyXG4gICAgICAgICAgICA8L21haW4+XHJcbiAgICAgICAgPC8+XHJcbiAgICApXHJcbn1cclxuIiwiaW1wb3J0IHsgRm9vdGVyIH0gZnJvbSAnLi4vY29tcG9uZW50cy9Gb290ZXIvRm9vdGVyJ1xyXG5pbXBvcnQgeyBIZWFkZXIgfSBmcm9tICcuLi9jb21wb25lbnRzL0hlYWRlci9IZWFkZXInXHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBNYWluKHsgY2hpbGRyZW4gfSkge1xyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8PlxyXG4gICAgICAgICAgICA8SGVhZGVyIG1haW5zUGFnZXM9e2ZhbHNlfSAvPlxyXG4gICAgICAgICAgICA8bWFpbj5cclxuICAgICAgICAgICAgICAgIHtjaGlsZHJlbn1cclxuICAgICAgICAgICAgPC9tYWluPlxyXG4gICAgICAgICAgICA8Rm9vdGVyIC8+XHJcbiAgICAgICAgPC8+XHJcbiAgICApXHJcbn1cclxuIiwiaW1wb3J0IE1haW4gZnJvbSBcIi4vTWFpblwiO1xyXG5pbXBvcnQgV2l0aG91dFBob3RvIGZyb20gXCIuL1dpdGhvdXRQaG90b1wiO1xyXG5pbXBvcnQgUmVnaXN0ZXIgZnJvbSBcIi4vUmVnaXN0ZXJcIjtcclxuaW1wb3J0IEVycm9yIGZyb20gXCIuL0Vycm9yXCJcclxuXHJcbmNvbnN0IGxheW91dHMgPSB7XHJcbiAgbWFpbjogTWFpbixcclxuICB3aXRob3V0UGhvdG86IFdpdGhvdXRQaG90byxcclxuICByZWdpc3RlcjogUmVnaXN0ZXJcclxufTtcclxuXHJcbmNvbnN0IExheW91dFdyYXBwZXIgPSAocHJvcHMpID0+IHtcclxuICAvLyB0byBnZXQgdGhlIHRleHQgdmFsdWUgb2YgdGhlIGFzc2lnbmVkIGxheW91dCBvZiBlYWNoIGNvbXBvbmVudFxyXG4gIGNvbnN0IExheW91dCA9IGxheW91dHNbcHJvcHMuY2hpbGRyZW4udHlwZS5sYXlvdXRdO1xyXG4gIC8vIGlmIHdlIGhhdmUgYSByZWdpc3RlcmVkIGxheW91dCByZW5kZXIgY2hpbGRyZW4gd2l0aCBzYWlkIGxheW91dFxyXG4gIGlmIChMYXlvdXQgIT0gbnVsbCkge1xyXG4gICAgcmV0dXJuIDxMYXlvdXQgey4uLnByb3BzfT57cHJvcHMuY2hpbGRyZW59PC9MYXlvdXQ+O1xyXG4gIH1cclxuICAvLyBpZiBub3QgcmVuZGVyIGNoaWxkcmVuIHdpdGggZnJhZ21lbnRcclxuICByZXR1cm4gPEVycm9yIHsuLi5wcm9wc30+e3Byb3BzLmNoaWxkcmVufTwvRXJyb3I+O1xyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgTGF5b3V0V3JhcHBlcjtcclxuIiwiZXhwb3J0IGNvbnN0IGhvc3QgPSBcImh0dHBzOi8vd3d3LmZvb3RiZXQyNC5jb20vYXBpXCI7XHJcbiIsImltcG9ydCBheGlvcyBmcm9tIFwiYXhpb3NcIjtcclxuXHJcblxyXG5leHBvcnQgY29uc3QgcmVxdWVzdCA9ICggZGVzdGluYXRpb24sIHBheWxvYWQgPSBudWxsLCBvcHRpb25zID0gbnVsbCApID0+IG5ldyBQcm9taXNlKCAoIHJzbHYsIHJqY3QgKSA9PiB7XHJcbiAgbGV0IGhlYWRlcnMgPSB7fTtcclxuXHJcbiAgaWYgKCBvcHRpb25zICkge1xyXG4gICAgaWYgKCBvcHRpb25zLmF1dGggPT09IHRydWUgKSB7XHJcbiAgICAgIGhlYWRlcnMgPSB7XHJcbiAgICAgICAgLi4uaGVhZGVycyxcclxuICAgICAgICBBdXRob3JpemF0aW9uOiBgQmVhcmVyICR7Z2V0Q29va2llKGBhY2Nlc3MtdG9rZW5gKX1gIHx8IGBgIC8vIGZvciBtb3N0IG9mIHJlcXVlc3RzXHJcbiAgICAgIH07XHJcbiAgICB9XHJcbiAgICBpZiAoIGBoZWFkZXJzYCBpbiBvcHRpb25zICYmIG9wdGlvbnMuaGVhZGVycyBpbnN0YW5jZW9mIE9iamVjdCApIHtcclxuICAgICAgaGVhZGVycyA9IHsgLi4uaGVhZGVycywgLi4ub3B0aW9ucy5oZWFkZXJzIH1cclxuICAgIH1cclxuICB9XHJcblxyXG4gIGNvbnNvbGUubG9nKCBgc3RhcnQgbG9hZGluZ2AgKTtcclxuICBheGlvcyh7XHJcbiAgICBtZXRob2Q6IGRlc3RpbmF0aW9uLm1ldGhvZCxcclxuICAgIHVybDogZGVzdGluYXRpb24udXJsLFxyXG4gICAgaGVhZGVycyxcclxuICAgIGRhdGE6IHBheWxvYWQgfHwge31cclxuICB9KVxyXG4gIC50aGVuKCByc2x2IClcclxuICAuY2F0Y2goIHJqY3QgKVxyXG4gIC5maW5hbGx5KCAoKSA9PiBjb25zb2xlLmxvZyggYGVuZCBsb2FkaW5nYCApIClcclxuXHJcbn0pO1xyXG5cclxuZXhwb3J0IGNvbnN0IGdldENvb2tpZSA9IG5hbWUgPT4ge1xyXG4gIHZhciBuYW1lRVEgPSBuYW1lICsgXCI9XCI7XHJcbiAgdmFyIGNhID0gZG9jdW1lbnQuY29va2llLnNwbGl0KCc7Jyk7XHJcblxyXG4gIGZvciAodmFyIGkgPSAwOyBpIDwgY2EubGVuZ3RoOyBpKyspIHtcclxuICAgIHZhciBjID0gY2FbaV07XHJcblxyXG4gICAgd2hpbGUgKGMuY2hhckF0KDApID09ICcgJykge1xyXG4gICAgICBjID0gYy5zdWJzdHJpbmcoMSwgYy5sZW5ndGgpO1xyXG4gICAgfVxyXG5cclxuICAgIGlmIChjLmluZGV4T2YobmFtZUVRKSA9PSAwKSByZXR1cm4gYy5zdWJzdHJpbmcobmFtZUVRLmxlbmd0aCwgYy5sZW5ndGgpO1xyXG4gIH1cclxuXHJcbiAgcmV0dXJuIG51bGw7XHJcbn1cclxuXHJcbmV4cG9ydCBjb25zdCByZW1vdmVDb29raWUgPSBuYW1lID0+IHtcclxuICBkb2N1bWVudC5jb29raWUgPSBuYW1lICsgJz07IFBhdGg9LzsgRXhwaXJlcz1UaHUsIDAxIEphbiAxOTcwIDAwOjAwOjAxIEdNVDsnO1xyXG59XHJcblxyXG5cclxuZXhwb3J0IGNvbnN0IHNldENvb2tpZSA9IChuYW1lLCB2YWx1ZSwgZGF5cykgPT4ge1xyXG4gIGxldCBleHBpcmVzID0gXCJcIjtcclxuXHJcbiAgaWYgKGRheXMpIHtcclxuICAgIGxldCBkYXRlID0gbmV3IERhdGUoKTtcclxuICAgIGRhdGUuc2V0VGltZShkYXRlLmdldFRpbWUoKSArIGRheXMgKiAyNCAqIDYwICogNjAgKiAxMDAwKTtcclxuICAgIGV4cGlyZXMgPSBcIjsgZXhwaXJlcz1cIiArIGRhdGUudG9VVENTdHJpbmcoKTtcclxuICB9XHJcblxyXG4gIGRvY3VtZW50LmNvb2tpZSA9IG5hbWUgKyBcIj1cIiArICh2YWx1ZSB8fCBcIlwiKSArIGV4cGlyZXMgKyBcIjsgcGF0aD0vXCI7XHJcbn1cclxuIiwiaW1wb3J0IHtob3N0fSBmcm9tIFwiLi9jb25zdGFudHNcIlxyXG5cclxuY29uc3QgQVVUSF9VUkwgPSBob3N0ICsgYGF1dGhgO1xyXG5jb25zdCBBQ0NPVU5UX1VSTCA9IGhvc3QgKyBgYWNjb3VudGBcclxuXHJcbmV4cG9ydCBjb25zdCBSRUdJU1RFUiA9IHtcclxuICB1cmw6IEFVVEhfVVJMICsgJ3JlZ2lzdHJhdGlvbicsXHJcbiAgbWV0aG9kOiAncG9zdCdcclxufVxyXG5cclxuZXhwb3J0IGNvbnN0IExPR0lOID0ge1xyXG4gIHVybDogQVVUSF9VUkwgKyAnbG9naW4nLFxyXG4gIG1ldGhvZDogJ3Bvc3QnXHJcbn1cclxuXHJcbmV4cG9ydCBjb25zdCBHRVRfQUNDT1VOVF9JTkZPID0ge1xyXG4gIHVybDogQUNDT1VOVF9VUkwgKyAnaW5mbycsXHJcbiAgbWV0aG9kOiAnZ2V0J1xyXG59XHJcblxyXG5leHBvcnQgY29uc3QgQ0hBTkdFX0FDQ09VTlRfSU5GTyA9IHtcclxuICB1cmw6IEFDQ09VTlRfVVJMICsgJ2luZm8nLFxyXG4gIG1ldGhvZDogJ3B1dCdcclxufVxyXG5cclxuZXhwb3J0IGNvbnN0IENIQU5HRV9BQ0NPVU5UX0lNQUdFID0ge1xyXG4gIHVybDogQUNDT1VOVF9VUkwgKyAncHJvZmlsZS1pbWFnZScsXHJcbiAgbWV0aG9kOiAncG9zdCdcclxufVxyXG5cclxuZXhwb3J0IGNvbnN0IFNUQVJUX1JFU0VUX1BBU1NXT1JEID0gZW1haWwgPT4gKHtcclxuICB1cmw6IEFVVEhfVVJMICsgYHBhc3N3b3JkL3Jlc2V0P2VtYWlsPSR7ZW1haWx9YCxcclxuICBtZXRob2Q6ICdwb3N0J1xyXG59KVxyXG5cclxuXHJcbmV4cG9ydCBjb25zdCBWRVJJRllfUEFTU1dPUkRfUkVTRVQgPSB7XHJcbiAgdXJsOiBBVVRIX1VSTCArIGBwYXNzd29yZC92ZXJpZnlfY29kZWAsXHJcbiAgbWV0aG9kOiAncHV0J1xyXG59XHJcblxyXG5leHBvcnQgY29uc3QgU0VUX05FV19QQVNTV09SRCA9IHtcclxuICB1cmw6IEFVVEhfVVJMICsgYHBhc3N3b3JkL25ld19wYXNzd29yZCBgLFxyXG4gIG1ldGhvZDogJ3B1dCdcclxufVxyXG5cclxuZXhwb3J0IGNvbnN0IEdFVF9ORVdTID0ge1xyXG4gICAgdXJsOiBob3N0ICsgYGFkbWluL25ld3NgLFxyXG4gICAgbWV0aG9kOiBgZ2V0YFxyXG59XHJcblxyXG5leHBvcnQgY29uc3QgR0VUX01BVENIRVMgPSB7XHJcbiAgICB1cmw6IGhvc3QgKyBgYWRtaW4vbWF0Y2gtb2YtdGhlLWRheWAsXHJcbiAgICBtZXRob2Q6IGBnZXRgXHJcbn1cclxuXHJcbmV4cG9ydCBjb25zdCBHRVRfTUFUQ0hFU19PRl9ORVhUX0RBWSA9IHtcclxuICAgIHVybDogaG9zdCArIGBhZG1pbi9tYXRjaC1vZi10aGUtZGF5P3R5cGU9bmV4dF9kYXlgLFxyXG4gICAgbWV0aG9kOiBgZ2V0YFxyXG59XHJcblxyXG5leHBvcnQgY29uc3QgR0VUX1BSRURJQ1RJT05TID0ge1xyXG4gICAgdXJsOiBob3N0ICsgYGFkbWluL3ByZWRpY3Rpb25gLFxyXG4gICAgbWV0aG9kOiBgZ2V0YFxyXG59XHJcblxyXG5leHBvcnQgY29uc3QgR0VUX0ZFRURCQUNLID0gaWQgPT4gKHtcclxuICAgIHVybDogaG9zdCArIGBmZWVkYmFjay8ke2lkfT9zb3J0X2J5PWNyZWF0ZWRfYXQmb3JkZXJfYnk9ZGVzY2AsXHJcbiAgICBtZXRob2Q6IGBnZXRgXHJcbn0pXHJcblxyXG5leHBvcnQgY29uc3QgR0VUX01BVENIRVNfQllfVFlQRSA9IHR5cGUgPT4gKHtcclxuICAgIHVybDogaG9zdCArIGBhZG1pbi9nYW1lP3R5cGU9JHt0eXBlfWAsXHJcbiAgICBtZXRob2Q6IGBnZXRgXHJcbn0pXHJcbiIsIlwidXNlIHN0cmljdFwiO3ZhciBfaW50ZXJvcFJlcXVpcmVXaWxkY2FyZD1yZXF1aXJlKFwiQGJhYmVsL3J1bnRpbWUvaGVscGVycy9pbnRlcm9wUmVxdWlyZVdpbGRjYXJkXCIpO2V4cG9ydHMuX19lc01vZHVsZT10cnVlO2V4cG9ydHMuZGVmYXVsdD12b2lkIDA7dmFyIF9yZWFjdD1faW50ZXJvcFJlcXVpcmVXaWxkY2FyZChyZXF1aXJlKFwicmVhY3RcIikpO3ZhciBfcm91dGVyPXJlcXVpcmUoXCIuLi9uZXh0LXNlcnZlci9saWIvcm91dGVyL3JvdXRlclwiKTt2YXIgX3JvdXRlcjI9cmVxdWlyZShcIi4vcm91dGVyXCIpO3ZhciBfdXNlSW50ZXJzZWN0aW9uPXJlcXVpcmUoXCIuL3VzZS1pbnRlcnNlY3Rpb25cIik7Y29uc3QgcHJlZmV0Y2hlZD17fTtmdW5jdGlvbiBwcmVmZXRjaChyb3V0ZXIsaHJlZixhcyxvcHRpb25zKXtpZih0eXBlb2Ygd2luZG93PT09J3VuZGVmaW5lZCd8fCFyb3V0ZXIpcmV0dXJuO2lmKCEoMCxfcm91dGVyLmlzTG9jYWxVUkwpKGhyZWYpKXJldHVybjsvLyBQcmVmZXRjaCB0aGUgSlNPTiBwYWdlIGlmIGFza2VkIChvbmx5IGluIHRoZSBjbGllbnQpXG4vLyBXZSBuZWVkIHRvIGhhbmRsZSBhIHByZWZldGNoIGVycm9yIGhlcmUgc2luY2Ugd2UgbWF5IGJlXG4vLyBsb2FkaW5nIHdpdGggcHJpb3JpdHkgd2hpY2ggY2FuIHJlamVjdCBidXQgd2UgZG9uJ3Rcbi8vIHdhbnQgdG8gZm9yY2UgbmF2aWdhdGlvbiBzaW5jZSB0aGlzIGlzIG9ubHkgYSBwcmVmZXRjaFxucm91dGVyLnByZWZldGNoKGhyZWYsYXMsb3B0aW9ucykuY2F0Y2goZXJyPT57aWYocHJvY2Vzcy5lbnYuTk9ERV9FTlYhPT0ncHJvZHVjdGlvbicpey8vIHJldGhyb3cgdG8gc2hvdyBpbnZhbGlkIFVSTCBlcnJvcnNcbnRocm93IGVycjt9fSk7Y29uc3QgY3VyTG9jYWxlPW9wdGlvbnMmJnR5cGVvZiBvcHRpb25zLmxvY2FsZSE9PSd1bmRlZmluZWQnP29wdGlvbnMubG9jYWxlOnJvdXRlciYmcm91dGVyLmxvY2FsZTsvLyBKb2luIG9uIGFuIGludmFsaWQgVVJJIGNoYXJhY3RlclxucHJlZmV0Y2hlZFtocmVmKyclJythcysoY3VyTG9jYWxlPyclJytjdXJMb2NhbGU6JycpXT10cnVlO31mdW5jdGlvbiBpc01vZGlmaWVkRXZlbnQoZXZlbnQpe2NvbnN0e3RhcmdldH09ZXZlbnQuY3VycmVudFRhcmdldDtyZXR1cm4gdGFyZ2V0JiZ0YXJnZXQhPT0nX3NlbGYnfHxldmVudC5tZXRhS2V5fHxldmVudC5jdHJsS2V5fHxldmVudC5zaGlmdEtleXx8ZXZlbnQuYWx0S2V5fHwvLyB0cmlnZ2VycyByZXNvdXJjZSBkb3dubG9hZFxuZXZlbnQubmF0aXZlRXZlbnQmJmV2ZW50Lm5hdGl2ZUV2ZW50LndoaWNoPT09Mjt9ZnVuY3Rpb24gbGlua0NsaWNrZWQoZSxyb3V0ZXIsaHJlZixhcyxyZXBsYWNlLHNoYWxsb3csc2Nyb2xsLGxvY2FsZSl7Y29uc3R7bm9kZU5hbWV9PWUuY3VycmVudFRhcmdldDtpZihub2RlTmFtZT09PSdBJyYmKGlzTW9kaWZpZWRFdmVudChlKXx8ISgwLF9yb3V0ZXIuaXNMb2NhbFVSTCkoaHJlZikpKXsvLyBpZ25vcmUgY2xpY2sgZm9yIGJyb3dzZXLigJlzIGRlZmF1bHQgYmVoYXZpb3JcbnJldHVybjt9ZS5wcmV2ZW50RGVmYXVsdCgpOy8vICBhdm9pZCBzY3JvbGwgZm9yIHVybHMgd2l0aCBhbmNob3IgcmVmc1xuaWYoc2Nyb2xsPT1udWxsJiZhcy5pbmRleE9mKCcjJyk+PTApe3Njcm9sbD1mYWxzZTt9Ly8gcmVwbGFjZSBzdGF0ZSBpbnN0ZWFkIG9mIHB1c2ggaWYgcHJvcCBpcyBwcmVzZW50XG5yb3V0ZXJbcmVwbGFjZT8ncmVwbGFjZSc6J3B1c2gnXShocmVmLGFzLHtzaGFsbG93LGxvY2FsZSxzY3JvbGx9KTt9ZnVuY3Rpb24gTGluayhwcm9wcyl7aWYocHJvY2Vzcy5lbnYuTk9ERV9FTlYhPT0ncHJvZHVjdGlvbicpe2Z1bmN0aW9uIGNyZWF0ZVByb3BFcnJvcihhcmdzKXtyZXR1cm4gbmV3IEVycm9yKGBGYWlsZWQgcHJvcCB0eXBlOiBUaGUgcHJvcCBcXGAke2FyZ3Mua2V5fVxcYCBleHBlY3RzIGEgJHthcmdzLmV4cGVjdGVkfSBpbiBcXGA8TGluaz5cXGAsIGJ1dCBnb3QgXFxgJHthcmdzLmFjdHVhbH1cXGAgaW5zdGVhZC5gKyh0eXBlb2Ygd2luZG93IT09J3VuZGVmaW5lZCc/XCJcXG5PcGVuIHlvdXIgYnJvd3NlcidzIGNvbnNvbGUgdG8gdmlldyB0aGUgQ29tcG9uZW50IHN0YWNrIHRyYWNlLlwiOicnKSk7fS8vIFR5cGVTY3JpcHQgdHJpY2sgZm9yIHR5cGUtZ3VhcmRpbmc6XG5jb25zdCByZXF1aXJlZFByb3BzR3VhcmQ9e2hyZWY6dHJ1ZX07Y29uc3QgcmVxdWlyZWRQcm9wcz1PYmplY3Qua2V5cyhyZXF1aXJlZFByb3BzR3VhcmQpO3JlcXVpcmVkUHJvcHMuZm9yRWFjaChrZXk9PntpZihrZXk9PT0naHJlZicpe2lmKHByb3BzW2tleV09PW51bGx8fHR5cGVvZiBwcm9wc1trZXldIT09J3N0cmluZycmJnR5cGVvZiBwcm9wc1trZXldIT09J29iamVjdCcpe3Rocm93IGNyZWF0ZVByb3BFcnJvcih7a2V5LGV4cGVjdGVkOidgc3RyaW5nYCBvciBgb2JqZWN0YCcsYWN0dWFsOnByb3BzW2tleV09PT1udWxsPydudWxsJzp0eXBlb2YgcHJvcHNba2V5XX0pO319ZWxzZXsvLyBUeXBlU2NyaXB0IHRyaWNrIGZvciB0eXBlLWd1YXJkaW5nOlxuLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIEB0eXBlc2NyaXB0LWVzbGludC9uby11bnVzZWQtdmFyc1xuY29uc3QgXz1rZXk7fX0pOy8vIFR5cGVTY3JpcHQgdHJpY2sgZm9yIHR5cGUtZ3VhcmRpbmc6XG5jb25zdCBvcHRpb25hbFByb3BzR3VhcmQ9e2FzOnRydWUscmVwbGFjZTp0cnVlLHNjcm9sbDp0cnVlLHNoYWxsb3c6dHJ1ZSxwYXNzSHJlZjp0cnVlLHByZWZldGNoOnRydWUsbG9jYWxlOnRydWV9O2NvbnN0IG9wdGlvbmFsUHJvcHM9T2JqZWN0LmtleXMob3B0aW9uYWxQcm9wc0d1YXJkKTtvcHRpb25hbFByb3BzLmZvckVhY2goa2V5PT57Y29uc3QgdmFsVHlwZT10eXBlb2YgcHJvcHNba2V5XTtpZihrZXk9PT0nYXMnKXtpZihwcm9wc1trZXldJiZ2YWxUeXBlIT09J3N0cmluZycmJnZhbFR5cGUhPT0nb2JqZWN0Jyl7dGhyb3cgY3JlYXRlUHJvcEVycm9yKHtrZXksZXhwZWN0ZWQ6J2BzdHJpbmdgIG9yIGBvYmplY3RgJyxhY3R1YWw6dmFsVHlwZX0pO319ZWxzZSBpZihrZXk9PT0nbG9jYWxlJyl7aWYocHJvcHNba2V5XSYmdmFsVHlwZSE9PSdzdHJpbmcnKXt0aHJvdyBjcmVhdGVQcm9wRXJyb3Ioe2tleSxleHBlY3RlZDonYHN0cmluZ2AnLGFjdHVhbDp2YWxUeXBlfSk7fX1lbHNlIGlmKGtleT09PSdyZXBsYWNlJ3x8a2V5PT09J3Njcm9sbCd8fGtleT09PSdzaGFsbG93J3x8a2V5PT09J3Bhc3NIcmVmJ3x8a2V5PT09J3ByZWZldGNoJyl7aWYocHJvcHNba2V5XSE9bnVsbCYmdmFsVHlwZSE9PSdib29sZWFuJyl7dGhyb3cgY3JlYXRlUHJvcEVycm9yKHtrZXksZXhwZWN0ZWQ6J2Bib29sZWFuYCcsYWN0dWFsOnZhbFR5cGV9KTt9fWVsc2V7Ly8gVHlwZVNjcmlwdCB0cmljayBmb3IgdHlwZS1ndWFyZGluZzpcbi8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBAdHlwZXNjcmlwdC1lc2xpbnQvbm8tdW51c2VkLXZhcnNcbmNvbnN0IF89a2V5O319KTsvLyBUaGlzIGhvb2sgaXMgaW4gYSBjb25kaXRpb25hbCBidXQgdGhhdCBpcyBvayBiZWNhdXNlIGBwcm9jZXNzLmVudi5OT0RFX0VOVmAgbmV2ZXIgY2hhbmdlc1xuLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIHJlYWN0LWhvb2tzL3J1bGVzLW9mLWhvb2tzXG5jb25zdCBoYXNXYXJuZWQ9X3JlYWN0LmRlZmF1bHQudXNlUmVmKGZhbHNlKTtpZihwcm9wcy5wcmVmZXRjaCYmIWhhc1dhcm5lZC5jdXJyZW50KXtoYXNXYXJuZWQuY3VycmVudD10cnVlO2NvbnNvbGUud2FybignTmV4dC5qcyBhdXRvLXByZWZldGNoZXMgYXV0b21hdGljYWxseSBiYXNlZCBvbiB2aWV3cG9ydC4gVGhlIHByZWZldGNoIGF0dHJpYnV0ZSBpcyBubyBsb25nZXIgbmVlZGVkLiBNb3JlOiBodHRwczovL25leHRqcy5vcmcvZG9jcy9tZXNzYWdlcy9wcmVmZXRjaC10cnVlLWRlcHJlY2F0ZWQnKTt9fWNvbnN0IHA9cHJvcHMucHJlZmV0Y2ghPT1mYWxzZTtjb25zdCByb3V0ZXI9KDAsX3JvdXRlcjIudXNlUm91dGVyKSgpO2NvbnN0e2hyZWYsYXN9PV9yZWFjdC5kZWZhdWx0LnVzZU1lbW8oKCk9Pntjb25zdFtyZXNvbHZlZEhyZWYscmVzb2x2ZWRBc109KDAsX3JvdXRlci5yZXNvbHZlSHJlZikocm91dGVyLHByb3BzLmhyZWYsdHJ1ZSk7cmV0dXJue2hyZWY6cmVzb2x2ZWRIcmVmLGFzOnByb3BzLmFzPygwLF9yb3V0ZXIucmVzb2x2ZUhyZWYpKHJvdXRlcixwcm9wcy5hcyk6cmVzb2x2ZWRBc3x8cmVzb2x2ZWRIcmVmfTt9LFtyb3V0ZXIscHJvcHMuaHJlZixwcm9wcy5hc10pO2xldHtjaGlsZHJlbixyZXBsYWNlLHNoYWxsb3csc2Nyb2xsLGxvY2FsZX09cHJvcHM7Ly8gRGVwcmVjYXRlZC4gV2FybmluZyBzaG93biBieSBwcm9wVHlwZSBjaGVjay4gSWYgdGhlIGNoaWxkcmVuIHByb3ZpZGVkIGlzIGEgc3RyaW5nICg8TGluaz5leGFtcGxlPC9MaW5rPikgd2Ugd3JhcCBpdCBpbiBhbiA8YT4gdGFnXG5pZih0eXBlb2YgY2hpbGRyZW49PT0nc3RyaW5nJyl7Y2hpbGRyZW49LyojX19QVVJFX18qL19yZWFjdC5kZWZhdWx0LmNyZWF0ZUVsZW1lbnQoXCJhXCIsbnVsbCxjaGlsZHJlbik7fS8vIFRoaXMgd2lsbCByZXR1cm4gdGhlIGZpcnN0IGNoaWxkLCBpZiBtdWx0aXBsZSBhcmUgcHJvdmlkZWQgaXQgd2lsbCB0aHJvdyBhbiBlcnJvclxubGV0IGNoaWxkO2lmKHByb2Nlc3MuZW52Lk5PREVfRU5WPT09J2RldmVsb3BtZW50Jyl7dHJ5e2NoaWxkPV9yZWFjdC5DaGlsZHJlbi5vbmx5KGNoaWxkcmVuKTt9Y2F0Y2goZXJyKXt0aHJvdyBuZXcgRXJyb3IoYE11bHRpcGxlIGNoaWxkcmVuIHdlcmUgcGFzc2VkIHRvIDxMaW5rPiB3aXRoIFxcYGhyZWZcXGAgb2YgXFxgJHtwcm9wcy5ocmVmfVxcYCBidXQgb25seSBvbmUgY2hpbGQgaXMgc3VwcG9ydGVkIGh0dHBzOi8vbmV4dGpzLm9yZy9kb2NzL21lc3NhZ2VzL2xpbmstbXVsdGlwbGUtY2hpbGRyZW5gKyh0eXBlb2Ygd2luZG93IT09J3VuZGVmaW5lZCc/XCJcXG5PcGVuIHlvdXIgYnJvd3NlcidzIGNvbnNvbGUgdG8gdmlldyB0aGUgQ29tcG9uZW50IHN0YWNrIHRyYWNlLlwiOicnKSk7fX1lbHNle2NoaWxkPV9yZWFjdC5DaGlsZHJlbi5vbmx5KGNoaWxkcmVuKTt9Y29uc3QgY2hpbGRSZWY9Y2hpbGQmJnR5cGVvZiBjaGlsZD09PSdvYmplY3QnJiZjaGlsZC5yZWY7Y29uc3Rbc2V0SW50ZXJzZWN0aW9uUmVmLGlzVmlzaWJsZV09KDAsX3VzZUludGVyc2VjdGlvbi51c2VJbnRlcnNlY3Rpb24pKHtyb290TWFyZ2luOicyMDBweCd9KTtjb25zdCBzZXRSZWY9X3JlYWN0LmRlZmF1bHQudXNlQ2FsbGJhY2soZWw9PntzZXRJbnRlcnNlY3Rpb25SZWYoZWwpO2lmKGNoaWxkUmVmKXtpZih0eXBlb2YgY2hpbGRSZWY9PT0nZnVuY3Rpb24nKWNoaWxkUmVmKGVsKTtlbHNlIGlmKHR5cGVvZiBjaGlsZFJlZj09PSdvYmplY3QnKXtjaGlsZFJlZi5jdXJyZW50PWVsO319fSxbY2hpbGRSZWYsc2V0SW50ZXJzZWN0aW9uUmVmXSk7KDAsX3JlYWN0LnVzZUVmZmVjdCkoKCk9Pntjb25zdCBzaG91bGRQcmVmZXRjaD1pc1Zpc2libGUmJnAmJigwLF9yb3V0ZXIuaXNMb2NhbFVSTCkoaHJlZik7Y29uc3QgY3VyTG9jYWxlPXR5cGVvZiBsb2NhbGUhPT0ndW5kZWZpbmVkJz9sb2NhbGU6cm91dGVyJiZyb3V0ZXIubG9jYWxlO2NvbnN0IGlzUHJlZmV0Y2hlZD1wcmVmZXRjaGVkW2hyZWYrJyUnK2FzKyhjdXJMb2NhbGU/JyUnK2N1ckxvY2FsZTonJyldO2lmKHNob3VsZFByZWZldGNoJiYhaXNQcmVmZXRjaGVkKXtwcmVmZXRjaChyb3V0ZXIsaHJlZixhcyx7bG9jYWxlOmN1ckxvY2FsZX0pO319LFthcyxocmVmLGlzVmlzaWJsZSxsb2NhbGUscCxyb3V0ZXJdKTtjb25zdCBjaGlsZFByb3BzPXtyZWY6c2V0UmVmLG9uQ2xpY2s6ZT0+e2lmKGNoaWxkLnByb3BzJiZ0eXBlb2YgY2hpbGQucHJvcHMub25DbGljaz09PSdmdW5jdGlvbicpe2NoaWxkLnByb3BzLm9uQ2xpY2soZSk7fWlmKCFlLmRlZmF1bHRQcmV2ZW50ZWQpe2xpbmtDbGlja2VkKGUscm91dGVyLGhyZWYsYXMscmVwbGFjZSxzaGFsbG93LHNjcm9sbCxsb2NhbGUpO319fTtjaGlsZFByb3BzLm9uTW91c2VFbnRlcj1lPT57aWYoISgwLF9yb3V0ZXIuaXNMb2NhbFVSTCkoaHJlZikpcmV0dXJuO2lmKGNoaWxkLnByb3BzJiZ0eXBlb2YgY2hpbGQucHJvcHMub25Nb3VzZUVudGVyPT09J2Z1bmN0aW9uJyl7Y2hpbGQucHJvcHMub25Nb3VzZUVudGVyKGUpO31wcmVmZXRjaChyb3V0ZXIsaHJlZixhcyx7cHJpb3JpdHk6dHJ1ZX0pO307Ly8gSWYgY2hpbGQgaXMgYW4gPGE+IHRhZyBhbmQgZG9lc24ndCBoYXZlIGEgaHJlZiBhdHRyaWJ1dGUsIG9yIGlmIHRoZSAncGFzc0hyZWYnIHByb3BlcnR5IGlzXG4vLyBkZWZpbmVkLCB3ZSBzcGVjaWZ5IHRoZSBjdXJyZW50ICdocmVmJywgc28gdGhhdCByZXBldGl0aW9uIGlzIG5vdCBuZWVkZWQgYnkgdGhlIHVzZXJcbmlmKHByb3BzLnBhc3NIcmVmfHxjaGlsZC50eXBlPT09J2EnJiYhKCdocmVmJ2luIGNoaWxkLnByb3BzKSl7Y29uc3QgY3VyTG9jYWxlPXR5cGVvZiBsb2NhbGUhPT0ndW5kZWZpbmVkJz9sb2NhbGU6cm91dGVyJiZyb3V0ZXIubG9jYWxlOy8vIHdlIG9ubHkgcmVuZGVyIGRvbWFpbiBsb2NhbGVzIGlmIHdlIGFyZSBjdXJyZW50bHkgb24gYSBkb21haW4gbG9jYWxlXG4vLyBzbyB0aGF0IGxvY2FsZSBsaW5rcyBhcmUgc3RpbGwgdmlzaXRhYmxlIGluIGRldmVsb3BtZW50L3ByZXZpZXcgZW52c1xuY29uc3QgbG9jYWxlRG9tYWluPXJvdXRlciYmcm91dGVyLmlzTG9jYWxlRG9tYWluJiYoMCxfcm91dGVyLmdldERvbWFpbkxvY2FsZSkoYXMsY3VyTG9jYWxlLHJvdXRlciYmcm91dGVyLmxvY2FsZXMscm91dGVyJiZyb3V0ZXIuZG9tYWluTG9jYWxlcyk7Y2hpbGRQcm9wcy5ocmVmPWxvY2FsZURvbWFpbnx8KDAsX3JvdXRlci5hZGRCYXNlUGF0aCkoKDAsX3JvdXRlci5hZGRMb2NhbGUpKGFzLGN1ckxvY2FsZSxyb3V0ZXImJnJvdXRlci5kZWZhdWx0TG9jYWxlKSk7fXJldHVybi8qI19fUFVSRV9fKi9fcmVhY3QuZGVmYXVsdC5jbG9uZUVsZW1lbnQoY2hpbGQsY2hpbGRQcm9wcyk7fXZhciBfZGVmYXVsdD1MaW5rO2V4cG9ydHMuZGVmYXVsdD1fZGVmYXVsdDtcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWxpbmsuanMubWFwIiwiXCJ1c2Ugc3RyaWN0XCI7ZXhwb3J0cy5fX2VzTW9kdWxlPXRydWU7ZXhwb3J0cy5yZW1vdmVQYXRoVHJhaWxpbmdTbGFzaD1yZW1vdmVQYXRoVHJhaWxpbmdTbGFzaDtleHBvcnRzLm5vcm1hbGl6ZVBhdGhUcmFpbGluZ1NsYXNoPXZvaWQgMDsvKipcbiAqIFJlbW92ZXMgdGhlIHRyYWlsaW5nIHNsYXNoIG9mIGEgcGF0aCBpZiB0aGVyZSBpcyBvbmUuIFByZXNlcnZlcyB0aGUgcm9vdCBwYXRoIGAvYC5cbiAqL2Z1bmN0aW9uIHJlbW92ZVBhdGhUcmFpbGluZ1NsYXNoKHBhdGgpe3JldHVybiBwYXRoLmVuZHNXaXRoKCcvJykmJnBhdGghPT0nLyc/cGF0aC5zbGljZSgwLC0xKTpwYXRoO30vKipcbiAqIE5vcm1hbGl6ZXMgdGhlIHRyYWlsaW5nIHNsYXNoIG9mIGEgcGF0aCBhY2NvcmRpbmcgdG8gdGhlIGB0cmFpbGluZ1NsYXNoYCBvcHRpb25cbiAqIGluIGBuZXh0LmNvbmZpZy5qc2AuXG4gKi9jb25zdCBub3JtYWxpemVQYXRoVHJhaWxpbmdTbGFzaD1wcm9jZXNzLmVudi5fX05FWFRfVFJBSUxJTkdfU0xBU0g/cGF0aD0+e2lmKC9cXC5bXi9dK1xcLz8kLy50ZXN0KHBhdGgpKXtyZXR1cm4gcmVtb3ZlUGF0aFRyYWlsaW5nU2xhc2gocGF0aCk7fWVsc2UgaWYocGF0aC5lbmRzV2l0aCgnLycpKXtyZXR1cm4gcGF0aDt9ZWxzZXtyZXR1cm4gcGF0aCsnLyc7fX06cmVtb3ZlUGF0aFRyYWlsaW5nU2xhc2g7ZXhwb3J0cy5ub3JtYWxpemVQYXRoVHJhaWxpbmdTbGFzaD1ub3JtYWxpemVQYXRoVHJhaWxpbmdTbGFzaDtcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPW5vcm1hbGl6ZS10cmFpbGluZy1zbGFzaC5qcy5tYXAiLCJcInVzZSBzdHJpY3RcIjtleHBvcnRzLl9fZXNNb2R1bGU9dHJ1ZTtleHBvcnRzLmNhbmNlbElkbGVDYWxsYmFjaz1leHBvcnRzLnJlcXVlc3RJZGxlQ2FsbGJhY2s9dm9pZCAwO2NvbnN0IHJlcXVlc3RJZGxlQ2FsbGJhY2s9dHlwZW9mIHNlbGYhPT0ndW5kZWZpbmVkJyYmc2VsZi5yZXF1ZXN0SWRsZUNhbGxiYWNrfHxmdW5jdGlvbihjYil7bGV0IHN0YXJ0PURhdGUubm93KCk7cmV0dXJuIHNldFRpbWVvdXQoZnVuY3Rpb24oKXtjYih7ZGlkVGltZW91dDpmYWxzZSx0aW1lUmVtYWluaW5nOmZ1bmN0aW9uKCl7cmV0dXJuIE1hdGgubWF4KDAsNTAtKERhdGUubm93KCktc3RhcnQpKTt9fSk7fSwxKTt9O2V4cG9ydHMucmVxdWVzdElkbGVDYWxsYmFjaz1yZXF1ZXN0SWRsZUNhbGxiYWNrO2NvbnN0IGNhbmNlbElkbGVDYWxsYmFjaz10eXBlb2Ygc2VsZiE9PSd1bmRlZmluZWQnJiZzZWxmLmNhbmNlbElkbGVDYWxsYmFja3x8ZnVuY3Rpb24oaWQpe3JldHVybiBjbGVhclRpbWVvdXQoaWQpO307ZXhwb3J0cy5jYW5jZWxJZGxlQ2FsbGJhY2s9Y2FuY2VsSWRsZUNhbGxiYWNrO1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9cmVxdWVzdC1pZGxlLWNhbGxiYWNrLmpzLm1hcCIsIlwidXNlIHN0cmljdFwiO3ZhciBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0PXJlcXVpcmUoXCJAYmFiZWwvcnVudGltZS9oZWxwZXJzL2ludGVyb3BSZXF1aXJlRGVmYXVsdFwiKTtleHBvcnRzLl9fZXNNb2R1bGU9dHJ1ZTtleHBvcnRzLm1hcmtBc3NldEVycm9yPW1hcmtBc3NldEVycm9yO2V4cG9ydHMuaXNBc3NldEVycm9yPWlzQXNzZXRFcnJvcjtleHBvcnRzLmdldENsaWVudEJ1aWxkTWFuaWZlc3Q9Z2V0Q2xpZW50QnVpbGRNYW5pZmVzdDtleHBvcnRzLmRlZmF1bHQ9dm9pZCAwO3ZhciBfZ2V0QXNzZXRQYXRoRnJvbVJvdXRlPV9pbnRlcm9wUmVxdWlyZURlZmF1bHQocmVxdWlyZShcIi4uL25leHQtc2VydmVyL2xpYi9yb3V0ZXIvdXRpbHMvZ2V0LWFzc2V0LXBhdGgtZnJvbS1yb3V0ZVwiKSk7dmFyIF9yZXF1ZXN0SWRsZUNhbGxiYWNrPXJlcXVpcmUoXCIuL3JlcXVlc3QtaWRsZS1jYWxsYmFja1wiKTsvLyAzLjhzIHdhcyBhcmJpdHJhcmlseSBjaG9zZW4gYXMgaXQncyB3aGF0IGh0dHBzOi8vd2ViLmRldi9pbnRlcmFjdGl2ZVxuLy8gY29uc2lkZXJzIGFzIFwiR29vZFwiIHRpbWUtdG8taW50ZXJhY3RpdmUuIFdlIG11c3QgYXNzdW1lIHNvbWV0aGluZyB3ZW50XG4vLyB3cm9uZyBiZXlvbmQgdGhpcyBwb2ludCwgYW5kIHRoZW4gZmFsbC1iYWNrIHRvIGEgZnVsbCBwYWdlIHRyYW5zaXRpb24gdG9cbi8vIHNob3cgdGhlIHVzZXIgc29tZXRoaW5nIG9mIHZhbHVlLlxuY29uc3QgTVNfTUFYX0lETEVfREVMQVk9MzgwMDtmdW5jdGlvbiB3aXRoRnV0dXJlKGtleSxtYXAsZ2VuZXJhdG9yKXtsZXQgZW50cnk9bWFwLmdldChrZXkpO2lmKGVudHJ5KXtpZignZnV0dXJlJ2luIGVudHJ5KXtyZXR1cm4gZW50cnkuZnV0dXJlO31yZXR1cm4gUHJvbWlzZS5yZXNvbHZlKGVudHJ5KTt9bGV0IHJlc29sdmVyO2NvbnN0IHByb209bmV3IFByb21pc2UocmVzb2x2ZT0+e3Jlc29sdmVyPXJlc29sdmU7fSk7bWFwLnNldChrZXksZW50cnk9e3Jlc29sdmU6cmVzb2x2ZXIsZnV0dXJlOnByb219KTtyZXR1cm4gZ2VuZXJhdG9yPy8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby1zZXF1ZW5jZXNcbmdlbmVyYXRvcigpLnRoZW4odmFsdWU9PihyZXNvbHZlcih2YWx1ZSksdmFsdWUpKTpwcm9tO31mdW5jdGlvbiBoYXNQcmVmZXRjaChsaW5rKXt0cnl7bGluaz1kb2N1bWVudC5jcmVhdGVFbGVtZW50KCdsaW5rJyk7cmV0dXJuKC8vIGRldGVjdCBJRTExIHNpbmNlIGl0IHN1cHBvcnRzIHByZWZldGNoIGJ1dCBpc24ndCBkZXRlY3RlZFxuLy8gd2l0aCByZWxMaXN0LnN1cHBvcnRcbiEhd2luZG93Lk1TSW5wdXRNZXRob2RDb250ZXh0JiYhIWRvY3VtZW50LmRvY3VtZW50TW9kZXx8bGluay5yZWxMaXN0LnN1cHBvcnRzKCdwcmVmZXRjaCcpKTt9Y2F0Y2goX3VudXNlZCl7cmV0dXJuIGZhbHNlO319Y29uc3QgY2FuUHJlZmV0Y2g9aGFzUHJlZmV0Y2goKTtmdW5jdGlvbiBwcmVmZXRjaFZpYURvbShocmVmLGFzLGxpbmspe3JldHVybiBuZXcgUHJvbWlzZSgocmVzLHJlaik9PntpZihkb2N1bWVudC5xdWVyeVNlbGVjdG9yKGBsaW5rW3JlbD1cInByZWZldGNoXCJdW2hyZWZePVwiJHtocmVmfVwiXWApKXtyZXR1cm4gcmVzKCk7fWxpbms9ZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbGluaycpOy8vIFRoZSBvcmRlciBvZiBwcm9wZXJ0eSBhc3NpZ25tZW50IGhlcmUgaXMgaW50ZW50aW9uYWw6XG5pZihhcylsaW5rLmFzPWFzO2xpbmsucmVsPWBwcmVmZXRjaGA7bGluay5jcm9zc09yaWdpbj1wcm9jZXNzLmVudi5fX05FWFRfQ1JPU1NfT1JJR0lOO2xpbmsub25sb2FkPXJlcztsaW5rLm9uZXJyb3I9cmVqOy8vIGBocmVmYCBzaG91bGQgYWx3YXlzIGJlIGxhc3Q6XG5saW5rLmhyZWY9aHJlZjtkb2N1bWVudC5oZWFkLmFwcGVuZENoaWxkKGxpbmspO30pO31jb25zdCBBU1NFVF9MT0FEX0VSUk9SPVN5bWJvbCgnQVNTRVRfTE9BRF9FUlJPUicpOy8vIFRPRE86IHVuZXhwb3J0XG5mdW5jdGlvbiBtYXJrQXNzZXRFcnJvcihlcnIpe3JldHVybiBPYmplY3QuZGVmaW5lUHJvcGVydHkoZXJyLEFTU0VUX0xPQURfRVJST1Ise30pO31mdW5jdGlvbiBpc0Fzc2V0RXJyb3IoZXJyKXtyZXR1cm4gZXJyJiZBU1NFVF9MT0FEX0VSUk9SIGluIGVycjt9ZnVuY3Rpb24gYXBwZW5kU2NyaXB0KHNyYyxzY3JpcHQpe3JldHVybiBuZXcgUHJvbWlzZSgocmVzb2x2ZSxyZWplY3QpPT57c2NyaXB0PWRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3NjcmlwdCcpOy8vIFRoZSBvcmRlciBvZiBwcm9wZXJ0eSBhc3NpZ25tZW50IGhlcmUgaXMgaW50ZW50aW9uYWwuXG4vLyAxLiBTZXR1cCBzdWNjZXNzL2ZhaWx1cmUgaG9va3MgaW4gY2FzZSB0aGUgYnJvd3NlciBzeW5jaHJvbm91c2x5XG4vLyAgICBleGVjdXRlcyB3aGVuIGBzcmNgIGlzIHNldC5cbnNjcmlwdC5vbmxvYWQ9cmVzb2x2ZTtzY3JpcHQub25lcnJvcj0oKT0+cmVqZWN0KG1hcmtBc3NldEVycm9yKG5ldyBFcnJvcihgRmFpbGVkIHRvIGxvYWQgc2NyaXB0OiAke3NyY31gKSkpOy8vIDIuIENvbmZpZ3VyZSB0aGUgY3Jvc3Mtb3JpZ2luIGF0dHJpYnV0ZSBiZWZvcmUgc2V0dGluZyBgc3JjYCBpbiBjYXNlIHRoZVxuLy8gICAgYnJvd3NlciBiZWdpbnMgdG8gZmV0Y2guXG5zY3JpcHQuY3Jvc3NPcmlnaW49cHJvY2Vzcy5lbnYuX19ORVhUX0NST1NTX09SSUdJTjsvLyAzLiBGaW5hbGx5LCBzZXQgdGhlIHNvdXJjZSBhbmQgaW5qZWN0IGludG8gdGhlIERPTSBpbiBjYXNlIHRoZSBjaGlsZFxuLy8gICAgbXVzdCBiZSBhcHBlbmRlZCBmb3IgZmV0Y2hpbmcgdG8gc3RhcnQuXG5zY3JpcHQuc3JjPXNyYztkb2N1bWVudC5ib2R5LmFwcGVuZENoaWxkKHNjcmlwdCk7fSk7fS8vIFJlc29sdmUgYSBwcm9taXNlIHRoYXQgdGltZXMgb3V0IGFmdGVyIGdpdmVuIGFtb3VudCBvZiBtaWxsaXNlY29uZHMuXG5mdW5jdGlvbiByZXNvbHZlUHJvbWlzZVdpdGhUaW1lb3V0KHAsbXMsZXJyKXtyZXR1cm4gbmV3IFByb21pc2UoKHJlc29sdmUscmVqZWN0KT0+e2xldCBjYW5jZWxsZWQ9ZmFsc2U7cC50aGVuKHI9PnsvLyBSZXNvbHZlZCwgY2FuY2VsIHRoZSB0aW1lb3V0XG5jYW5jZWxsZWQ9dHJ1ZTtyZXNvbHZlKHIpO30pLmNhdGNoKHJlamVjdCk7KDAsX3JlcXVlc3RJZGxlQ2FsbGJhY2sucmVxdWVzdElkbGVDYWxsYmFjaykoKCk9PnNldFRpbWVvdXQoKCk9PntpZighY2FuY2VsbGVkKXtyZWplY3QoZXJyKTt9fSxtcykpO30pO30vLyBUT0RPOiBzdG9wIGV4cG9ydGluZyBvciBjYWNoZSB0aGUgZmFpbHVyZVxuLy8gSXQnZCBiZSBiZXN0IHRvIHN0b3AgZXhwb3J0aW5nIHRoaXMuIEl0J3MgYW4gaW1wbGVtZW50YXRpb24gZGV0YWlsLiBXZSdyZVxuLy8gb25seSBleHBvcnRpbmcgaXQgZm9yIGJhY2t3YXJkcyBjb21wYXRpYmlsdHkgd2l0aCB0aGUgYHBhZ2UtbG9hZGVyYC5cbi8vIE9ubHkgY2FjaGUgdGhpcyByZXNwb25zZSBhcyBhIGxhc3QgcmVzb3J0IGlmIHdlIGNhbm5vdCBlbGltaW5hdGUgYWxsIG90aGVyXG4vLyBjb2RlIGJyYW5jaGVzIHRoYXQgdXNlIHRoZSBCdWlsZCBNYW5pZmVzdCBDYWxsYmFjayBhbmQgcHVzaCB0aGVtIHRocm91Z2hcbi8vIHRoZSBSb3V0ZSBMb2FkZXIgaW50ZXJmYWNlLlxuZnVuY3Rpb24gZ2V0Q2xpZW50QnVpbGRNYW5pZmVzdCgpe2lmKHNlbGYuX19CVUlMRF9NQU5JRkVTVCl7cmV0dXJuIFByb21pc2UucmVzb2x2ZShzZWxmLl9fQlVJTERfTUFOSUZFU1QpO31jb25zdCBvbkJ1aWxkTWFuaWZlc3Q9bmV3IFByb21pc2UocmVzb2x2ZT0+ey8vIE1hbmRhdG9yeSBiZWNhdXNlIHRoaXMgaXMgbm90IGNvbmN1cnJlbnQgc2FmZTpcbmNvbnN0IGNiPXNlbGYuX19CVUlMRF9NQU5JRkVTVF9DQjtzZWxmLl9fQlVJTERfTUFOSUZFU1RfQ0I9KCk9PntyZXNvbHZlKHNlbGYuX19CVUlMRF9NQU5JRkVTVCk7Y2ImJmNiKCk7fTt9KTtyZXR1cm4gcmVzb2x2ZVByb21pc2VXaXRoVGltZW91dChvbkJ1aWxkTWFuaWZlc3QsTVNfTUFYX0lETEVfREVMQVksbWFya0Fzc2V0RXJyb3IobmV3IEVycm9yKCdGYWlsZWQgdG8gbG9hZCBjbGllbnQgYnVpbGQgbWFuaWZlc3QnKSkpO31mdW5jdGlvbiBnZXRGaWxlc0ZvclJvdXRlKGFzc2V0UHJlZml4LHJvdXRlKXtpZihwcm9jZXNzLmVudi5OT0RFX0VOVj09PSdkZXZlbG9wbWVudCcpe3JldHVybiBQcm9taXNlLnJlc29sdmUoe3NjcmlwdHM6W2Fzc2V0UHJlZml4KycvX25leHQvc3RhdGljL2NodW5rcy9wYWdlcycrZW5jb2RlVVJJKCgwLF9nZXRBc3NldFBhdGhGcm9tUm91dGUuZGVmYXVsdCkocm91dGUsJy5qcycpKV0sLy8gU3R5bGVzIGFyZSBoYW5kbGVkIGJ5IGBzdHlsZS1sb2FkZXJgIGluIGRldmVsb3BtZW50OlxuY3NzOltdfSk7fXJldHVybiBnZXRDbGllbnRCdWlsZE1hbmlmZXN0KCkudGhlbihtYW5pZmVzdD0+e2lmKCEocm91dGUgaW4gbWFuaWZlc3QpKXt0aHJvdyBtYXJrQXNzZXRFcnJvcihuZXcgRXJyb3IoYEZhaWxlZCB0byBsb29rdXAgcm91dGU6ICR7cm91dGV9YCkpO31jb25zdCBhbGxGaWxlcz1tYW5pZmVzdFtyb3V0ZV0ubWFwKGVudHJ5PT5hc3NldFByZWZpeCsnL19uZXh0LycrZW5jb2RlVVJJKGVudHJ5KSk7cmV0dXJue3NjcmlwdHM6YWxsRmlsZXMuZmlsdGVyKHY9PnYuZW5kc1dpdGgoJy5qcycpKSxjc3M6YWxsRmlsZXMuZmlsdGVyKHY9PnYuZW5kc1dpdGgoJy5jc3MnKSl9O30pO31mdW5jdGlvbiBjcmVhdGVSb3V0ZUxvYWRlcihhc3NldFByZWZpeCl7Y29uc3QgZW50cnlwb2ludHM9bmV3IE1hcCgpO2NvbnN0IGxvYWRlZFNjcmlwdHM9bmV3IE1hcCgpO2NvbnN0IHN0eWxlU2hlZXRzPW5ldyBNYXAoKTtjb25zdCByb3V0ZXM9bmV3IE1hcCgpO2Z1bmN0aW9uIG1heWJlRXhlY3V0ZVNjcmlwdChzcmMpe2xldCBwcm9tPWxvYWRlZFNjcmlwdHMuZ2V0KHNyYyk7aWYocHJvbSl7cmV0dXJuIHByb207fS8vIFNraXAgZXhlY3V0aW5nIHNjcmlwdCBpZiBpdCdzIGFscmVhZHkgaW4gdGhlIERPTTpcbmlmKGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoYHNjcmlwdFtzcmNePVwiJHtzcmN9XCJdYCkpe3JldHVybiBQcm9taXNlLnJlc29sdmUoKTt9bG9hZGVkU2NyaXB0cy5zZXQoc3JjLHByb209YXBwZW5kU2NyaXB0KHNyYykpO3JldHVybiBwcm9tO31mdW5jdGlvbiBmZXRjaFN0eWxlU2hlZXQoaHJlZil7bGV0IHByb209c3R5bGVTaGVldHMuZ2V0KGhyZWYpO2lmKHByb20pe3JldHVybiBwcm9tO31zdHlsZVNoZWV0cy5zZXQoaHJlZixwcm9tPWZldGNoKGhyZWYpLnRoZW4ocmVzPT57aWYoIXJlcy5vayl7dGhyb3cgbmV3IEVycm9yKGBGYWlsZWQgdG8gbG9hZCBzdHlsZXNoZWV0OiAke2hyZWZ9YCk7fXJldHVybiByZXMudGV4dCgpLnRoZW4odGV4dD0+KHtocmVmOmhyZWYsY29udGVudDp0ZXh0fSkpO30pLmNhdGNoKGVycj0+e3Rocm93IG1hcmtBc3NldEVycm9yKGVycik7fSkpO3JldHVybiBwcm9tO31yZXR1cm57d2hlbkVudHJ5cG9pbnQocm91dGUpe3JldHVybiB3aXRoRnV0dXJlKHJvdXRlLGVudHJ5cG9pbnRzKTt9LG9uRW50cnlwb2ludChyb3V0ZSxleGVjdXRlKXtQcm9taXNlLnJlc29sdmUoZXhlY3V0ZSkudGhlbihmbj0+Zm4oKSkudGhlbihleHBvcnRzPT4oe2NvbXBvbmVudDpleHBvcnRzJiZleHBvcnRzLmRlZmF1bHR8fGV4cG9ydHMsZXhwb3J0czpleHBvcnRzfSksZXJyPT4oe2Vycm9yOmVycn0pKS50aGVuKGlucHV0PT57Y29uc3Qgb2xkPWVudHJ5cG9pbnRzLmdldChyb3V0ZSk7ZW50cnlwb2ludHMuc2V0KHJvdXRlLGlucHV0KTtpZihvbGQmJidyZXNvbHZlJ2luIG9sZClvbGQucmVzb2x2ZShpbnB1dCk7fSk7fSxsb2FkUm91dGUocm91dGUscHJlZmV0Y2gpe3JldHVybiB3aXRoRnV0dXJlKHJvdXRlLHJvdXRlcywoKT0+e3JldHVybiByZXNvbHZlUHJvbWlzZVdpdGhUaW1lb3V0KGdldEZpbGVzRm9yUm91dGUoYXNzZXRQcmVmaXgscm91dGUpLnRoZW4oKHtzY3JpcHRzLGNzc30pPT57cmV0dXJuIFByb21pc2UuYWxsKFtlbnRyeXBvaW50cy5oYXMocm91dGUpP1tdOlByb21pc2UuYWxsKHNjcmlwdHMubWFwKG1heWJlRXhlY3V0ZVNjcmlwdCkpLFByb21pc2UuYWxsKGNzcy5tYXAoZmV0Y2hTdHlsZVNoZWV0KSldKTt9KS50aGVuKHJlcz0+e3JldHVybiB0aGlzLndoZW5FbnRyeXBvaW50KHJvdXRlKS50aGVuKGVudHJ5cG9pbnQ9Pih7ZW50cnlwb2ludCxzdHlsZXM6cmVzWzFdfSkpO30pLE1TX01BWF9JRExFX0RFTEFZLG1hcmtBc3NldEVycm9yKG5ldyBFcnJvcihgUm91dGUgZGlkIG5vdCBjb21wbGV0ZSBsb2FkaW5nOiAke3JvdXRlfWApKSkudGhlbigoe2VudHJ5cG9pbnQsc3R5bGVzfSk9Pntjb25zdCByZXM9T2JqZWN0LmFzc2lnbih7c3R5bGVzOnN0eWxlc30sZW50cnlwb2ludCk7cmV0dXJuJ2Vycm9yJ2luIGVudHJ5cG9pbnQ/ZW50cnlwb2ludDpyZXM7fSkuY2F0Y2goZXJyPT57aWYocHJlZmV0Y2gpey8vIHdlIGRvbid0IHdhbnQgdG8gY2FjaGUgZXJyb3JzIGR1cmluZyBwcmVmZXRjaFxudGhyb3cgZXJyO31yZXR1cm57ZXJyb3I6ZXJyfTt9KTt9KTt9LHByZWZldGNoKHJvdXRlKXsvLyBodHRwczovL2dpdGh1Yi5jb20vR29vZ2xlQ2hyb21lTGFicy9xdWlja2xpbmsvYmxvYi80NTNhNjYxZmExZmE5NDBlMmQyZTA0NDQ1MjM5OGUzOGM2N2E5OGZiL3NyYy9pbmRleC5tanMjTDExNS1MMTE4XG4vLyBMaWNlbnNlOiBBcGFjaGUgMi4wXG5sZXQgY247aWYoY249bmF2aWdhdG9yLmNvbm5lY3Rpb24pey8vIERvbid0IHByZWZldGNoIGlmIHVzaW5nIDJHIG9yIGlmIFNhdmUtRGF0YSBpcyBlbmFibGVkLlxuaWYoY24uc2F2ZURhdGF8fC8yZy8udGVzdChjbi5lZmZlY3RpdmVUeXBlKSlyZXR1cm4gUHJvbWlzZS5yZXNvbHZlKCk7fXJldHVybiBnZXRGaWxlc0ZvclJvdXRlKGFzc2V0UHJlZml4LHJvdXRlKS50aGVuKG91dHB1dD0+UHJvbWlzZS5hbGwoY2FuUHJlZmV0Y2g/b3V0cHV0LnNjcmlwdHMubWFwKHNjcmlwdD0+cHJlZmV0Y2hWaWFEb20oc2NyaXB0LCdzY3JpcHQnKSk6W10pKS50aGVuKCgpPT57KDAsX3JlcXVlc3RJZGxlQ2FsbGJhY2sucmVxdWVzdElkbGVDYWxsYmFjaykoKCk9PnRoaXMubG9hZFJvdXRlKHJvdXRlLHRydWUpLmNhdGNoKCgpPT57fSkpO30pLmNhdGNoKC8vIHN3YWxsb3cgcHJlZmV0Y2ggZXJyb3JzXG4oKT0+e30pO319O312YXIgX2RlZmF1bHQ9Y3JlYXRlUm91dGVMb2FkZXI7ZXhwb3J0cy5kZWZhdWx0PV9kZWZhdWx0O1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9cm91dGUtbG9hZGVyLmpzLm1hcCIsIlwidXNlIHN0cmljdFwiO3ZhciBfaW50ZXJvcFJlcXVpcmVXaWxkY2FyZD1yZXF1aXJlKFwiQGJhYmVsL3J1bnRpbWUvaGVscGVycy9pbnRlcm9wUmVxdWlyZVdpbGRjYXJkXCIpO3ZhciBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0PXJlcXVpcmUoXCJAYmFiZWwvcnVudGltZS9oZWxwZXJzL2ludGVyb3BSZXF1aXJlRGVmYXVsdFwiKTtleHBvcnRzLl9fZXNNb2R1bGU9dHJ1ZTtleHBvcnRzLnVzZVJvdXRlcj11c2VSb3V0ZXI7ZXhwb3J0cy5tYWtlUHVibGljUm91dGVySW5zdGFuY2U9bWFrZVB1YmxpY1JvdXRlckluc3RhbmNlO2V4cG9ydHMuY3JlYXRlUm91dGVyPWV4cG9ydHMud2l0aFJvdXRlcj1leHBvcnRzLmRlZmF1bHQ9dm9pZCAwO3ZhciBfcmVhY3Q9X2ludGVyb3BSZXF1aXJlRGVmYXVsdChyZXF1aXJlKFwicmVhY3RcIikpO3ZhciBfcm91dGVyMj1faW50ZXJvcFJlcXVpcmVXaWxkY2FyZChyZXF1aXJlKFwiLi4vbmV4dC1zZXJ2ZXIvbGliL3JvdXRlci9yb3V0ZXJcIikpO2V4cG9ydHMuUm91dGVyPV9yb3V0ZXIyLmRlZmF1bHQ7ZXhwb3J0cy5OZXh0Um91dGVyPV9yb3V0ZXIyLk5leHRSb3V0ZXI7dmFyIF9yb3V0ZXJDb250ZXh0PXJlcXVpcmUoXCIuLi9uZXh0LXNlcnZlci9saWIvcm91dGVyLWNvbnRleHRcIik7dmFyIF93aXRoUm91dGVyPV9pbnRlcm9wUmVxdWlyZURlZmF1bHQocmVxdWlyZShcIi4vd2l0aC1yb3V0ZXJcIikpO2V4cG9ydHMud2l0aFJvdXRlcj1fd2l0aFJvdXRlci5kZWZhdWx0Oy8qIGdsb2JhbCB3aW5kb3cgKi9jb25zdCBzaW5nbGV0b25Sb3V0ZXI9e3JvdXRlcjpudWxsLC8vIGhvbGRzIHRoZSBhY3R1YWwgcm91dGVyIGluc3RhbmNlXG5yZWFkeUNhbGxiYWNrczpbXSxyZWFkeShjYil7aWYodGhpcy5yb3V0ZXIpcmV0dXJuIGNiKCk7aWYodHlwZW9mIHdpbmRvdyE9PSd1bmRlZmluZWQnKXt0aGlzLnJlYWR5Q2FsbGJhY2tzLnB1c2goY2IpO319fTsvLyBDcmVhdGUgcHVibGljIHByb3BlcnRpZXMgYW5kIG1ldGhvZHMgb2YgdGhlIHJvdXRlciBpbiB0aGUgc2luZ2xldG9uUm91dGVyXG5jb25zdCB1cmxQcm9wZXJ0eUZpZWxkcz1bJ3BhdGhuYW1lJywncm91dGUnLCdxdWVyeScsJ2FzUGF0aCcsJ2NvbXBvbmVudHMnLCdpc0ZhbGxiYWNrJywnYmFzZVBhdGgnLCdsb2NhbGUnLCdsb2NhbGVzJywnZGVmYXVsdExvY2FsZScsJ2lzUmVhZHknLCdpc1ByZXZpZXcnLCdpc0xvY2FsZURvbWFpbicsJ2RvbWFpbkxvY2FsZXMnXTtjb25zdCByb3V0ZXJFdmVudHM9Wydyb3V0ZUNoYW5nZVN0YXJ0JywnYmVmb3JlSGlzdG9yeUNoYW5nZScsJ3JvdXRlQ2hhbmdlQ29tcGxldGUnLCdyb3V0ZUNoYW5nZUVycm9yJywnaGFzaENoYW5nZVN0YXJ0JywnaGFzaENoYW5nZUNvbXBsZXRlJ107Y29uc3QgY29yZU1ldGhvZEZpZWxkcz1bJ3B1c2gnLCdyZXBsYWNlJywncmVsb2FkJywnYmFjaycsJ3ByZWZldGNoJywnYmVmb3JlUG9wU3RhdGUnXTsvLyBFdmVudHMgaXMgYSBzdGF0aWMgcHJvcGVydHkgb24gdGhlIHJvdXRlciwgdGhlIHJvdXRlciBkb2Vzbid0IGhhdmUgdG8gYmUgaW5pdGlhbGl6ZWQgdG8gdXNlIGl0XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoc2luZ2xldG9uUm91dGVyLCdldmVudHMnLHtnZXQoKXtyZXR1cm4gX3JvdXRlcjIuZGVmYXVsdC5ldmVudHM7fX0pO3VybFByb3BlcnR5RmllbGRzLmZvckVhY2goZmllbGQ9PnsvLyBIZXJlIHdlIG5lZWQgdG8gdXNlIE9iamVjdC5kZWZpbmVQcm9wZXJ0eSBiZWNhdXNlIHdlIG5lZWQgdG8gcmV0dXJuXG4vLyB0aGUgcHJvcGVydHkgYXNzaWduZWQgdG8gdGhlIGFjdHVhbCByb3V0ZXJcbi8vIFRoZSB2YWx1ZSBtaWdodCBnZXQgY2hhbmdlZCBhcyB3ZSBjaGFuZ2Ugcm91dGVzIGFuZCB0aGlzIGlzIHRoZVxuLy8gcHJvcGVyIHdheSB0byBhY2Nlc3MgaXRcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShzaW5nbGV0b25Sb3V0ZXIsZmllbGQse2dldCgpe2NvbnN0IHJvdXRlcj1nZXRSb3V0ZXIoKTtyZXR1cm4gcm91dGVyW2ZpZWxkXTt9fSk7fSk7Y29yZU1ldGhvZEZpZWxkcy5mb3JFYWNoKGZpZWxkPT57Ly8gV2UgZG9uJ3QgcmVhbGx5IGtub3cgdGhlIHR5cGVzIGhlcmUsIHNvIHdlIGFkZCB0aGVtIGxhdGVyIGluc3RlYWRcbjtzaW5nbGV0b25Sb3V0ZXJbZmllbGRdPSguLi5hcmdzKT0+e2NvbnN0IHJvdXRlcj1nZXRSb3V0ZXIoKTtyZXR1cm4gcm91dGVyW2ZpZWxkXSguLi5hcmdzKTt9O30pO3JvdXRlckV2ZW50cy5mb3JFYWNoKGV2ZW50PT57c2luZ2xldG9uUm91dGVyLnJlYWR5KCgpPT57X3JvdXRlcjIuZGVmYXVsdC5ldmVudHMub24oZXZlbnQsKC4uLmFyZ3MpPT57Y29uc3QgZXZlbnRGaWVsZD1gb24ke2V2ZW50LmNoYXJBdCgwKS50b1VwcGVyQ2FzZSgpfSR7ZXZlbnQuc3Vic3RyaW5nKDEpfWA7Y29uc3QgX3NpbmdsZXRvblJvdXRlcj1zaW5nbGV0b25Sb3V0ZXI7aWYoX3NpbmdsZXRvblJvdXRlcltldmVudEZpZWxkXSl7dHJ5e19zaW5nbGV0b25Sb3V0ZXJbZXZlbnRGaWVsZF0oLi4uYXJncyk7fWNhdGNoKGVycil7Y29uc29sZS5lcnJvcihgRXJyb3Igd2hlbiBydW5uaW5nIHRoZSBSb3V0ZXIgZXZlbnQ6ICR7ZXZlbnRGaWVsZH1gKTtjb25zb2xlLmVycm9yKGAke2Vyci5tZXNzYWdlfVxcbiR7ZXJyLnN0YWNrfWApO319fSk7fSk7fSk7ZnVuY3Rpb24gZ2V0Um91dGVyKCl7aWYoIXNpbmdsZXRvblJvdXRlci5yb3V0ZXIpe2NvbnN0IG1lc3NhZ2U9J05vIHJvdXRlciBpbnN0YW5jZSBmb3VuZC5cXG4nKydZb3Ugc2hvdWxkIG9ubHkgdXNlIFwibmV4dC9yb3V0ZXJcIiBvbiB0aGUgY2xpZW50IHNpZGUgb2YgeW91ciBhcHAuXFxuJzt0aHJvdyBuZXcgRXJyb3IobWVzc2FnZSk7fXJldHVybiBzaW5nbGV0b25Sb3V0ZXIucm91dGVyO30vLyBFeHBvcnQgdGhlIHNpbmdsZXRvblJvdXRlciBhbmQgdGhpcyBpcyB0aGUgcHVibGljIEFQSS5cbnZhciBfZGVmYXVsdD1zaW5nbGV0b25Sb3V0ZXI7Ly8gUmVleHBvcnQgdGhlIHdpdGhSb3V0ZSBIT0NcbmV4cG9ydHMuZGVmYXVsdD1fZGVmYXVsdDtmdW5jdGlvbiB1c2VSb3V0ZXIoKXtyZXR1cm4gX3JlYWN0LmRlZmF1bHQudXNlQ29udGV4dChfcm91dGVyQ29udGV4dC5Sb3V0ZXJDb250ZXh0KTt9Ly8gSU5URVJOQUwgQVBJU1xuLy8gLS0tLS0tLS0tLS0tLVxuLy8gKGRvIG5vdCB1c2UgZm9sbG93aW5nIGV4cG9ydHMgaW5zaWRlIHRoZSBhcHApXG4vLyBDcmVhdGUgYSByb3V0ZXIgYW5kIGFzc2lnbiBpdCBhcyB0aGUgc2luZ2xldG9uIGluc3RhbmNlLlxuLy8gVGhpcyBpcyB1c2VkIGluIGNsaWVudCBzaWRlIHdoZW4gd2UgYXJlIGluaXRpbGl6aW5nIHRoZSBhcHAuXG4vLyBUaGlzIHNob3VsZCAqKm5vdCoqIGJlIHVzZWQgaW5zaWRlIHRoZSBzZXJ2ZXIuXG5jb25zdCBjcmVhdGVSb3V0ZXI9KC4uLmFyZ3MpPT57c2luZ2xldG9uUm91dGVyLnJvdXRlcj1uZXcgX3JvdXRlcjIuZGVmYXVsdCguLi5hcmdzKTtzaW5nbGV0b25Sb3V0ZXIucmVhZHlDYWxsYmFja3MuZm9yRWFjaChjYj0+Y2IoKSk7c2luZ2xldG9uUm91dGVyLnJlYWR5Q2FsbGJhY2tzPVtdO3JldHVybiBzaW5nbGV0b25Sb3V0ZXIucm91dGVyO307Ly8gVGhpcyBmdW5jdGlvbiBpcyB1c2VkIHRvIGNyZWF0ZSB0aGUgYHdpdGhSb3V0ZXJgIHJvdXRlciBpbnN0YW5jZVxuZXhwb3J0cy5jcmVhdGVSb3V0ZXI9Y3JlYXRlUm91dGVyO2Z1bmN0aW9uIG1ha2VQdWJsaWNSb3V0ZXJJbnN0YW5jZShyb3V0ZXIpe2NvbnN0IF9yb3V0ZXI9cm91dGVyO2NvbnN0IGluc3RhbmNlPXt9O2Zvcihjb25zdCBwcm9wZXJ0eSBvZiB1cmxQcm9wZXJ0eUZpZWxkcyl7aWYodHlwZW9mIF9yb3V0ZXJbcHJvcGVydHldPT09J29iamVjdCcpe2luc3RhbmNlW3Byb3BlcnR5XT1PYmplY3QuYXNzaWduKEFycmF5LmlzQXJyYXkoX3JvdXRlcltwcm9wZXJ0eV0pP1tdOnt9LF9yb3V0ZXJbcHJvcGVydHldKTsvLyBtYWtlcyBzdXJlIHF1ZXJ5IGlzIG5vdCBzdGF0ZWZ1bFxuY29udGludWU7fWluc3RhbmNlW3Byb3BlcnR5XT1fcm91dGVyW3Byb3BlcnR5XTt9Ly8gRXZlbnRzIGlzIGEgc3RhdGljIHByb3BlcnR5IG9uIHRoZSByb3V0ZXIsIHRoZSByb3V0ZXIgZG9lc24ndCBoYXZlIHRvIGJlIGluaXRpYWxpemVkIHRvIHVzZSBpdFxuaW5zdGFuY2UuZXZlbnRzPV9yb3V0ZXIyLmRlZmF1bHQuZXZlbnRzO2NvcmVNZXRob2RGaWVsZHMuZm9yRWFjaChmaWVsZD0+e2luc3RhbmNlW2ZpZWxkXT0oLi4uYXJncyk9PntyZXR1cm4gX3JvdXRlcltmaWVsZF0oLi4uYXJncyk7fTt9KTtyZXR1cm4gaW5zdGFuY2U7fVxuLy8jIHNvdXJjZU1hcHBpbmdVUkw9cm91dGVyLmpzLm1hcCIsIlwidXNlIHN0cmljdFwiO2V4cG9ydHMuX19lc01vZHVsZT10cnVlO2V4cG9ydHMudXNlSW50ZXJzZWN0aW9uPXVzZUludGVyc2VjdGlvbjt2YXIgX3JlYWN0PXJlcXVpcmUoXCJyZWFjdFwiKTt2YXIgX3JlcXVlc3RJZGxlQ2FsbGJhY2s9cmVxdWlyZShcIi4vcmVxdWVzdC1pZGxlLWNhbGxiYWNrXCIpO2NvbnN0IGhhc0ludGVyc2VjdGlvbk9ic2VydmVyPXR5cGVvZiBJbnRlcnNlY3Rpb25PYnNlcnZlciE9PSd1bmRlZmluZWQnO2Z1bmN0aW9uIHVzZUludGVyc2VjdGlvbih7cm9vdE1hcmdpbixkaXNhYmxlZH0pe2NvbnN0IGlzRGlzYWJsZWQ9ZGlzYWJsZWR8fCFoYXNJbnRlcnNlY3Rpb25PYnNlcnZlcjtjb25zdCB1bm9ic2VydmU9KDAsX3JlYWN0LnVzZVJlZikoKTtjb25zdFt2aXNpYmxlLHNldFZpc2libGVdPSgwLF9yZWFjdC51c2VTdGF0ZSkoZmFsc2UpO2NvbnN0IHNldFJlZj0oMCxfcmVhY3QudXNlQ2FsbGJhY2spKGVsPT57aWYodW5vYnNlcnZlLmN1cnJlbnQpe3Vub2JzZXJ2ZS5jdXJyZW50KCk7dW5vYnNlcnZlLmN1cnJlbnQ9dW5kZWZpbmVkO31pZihpc0Rpc2FibGVkfHx2aXNpYmxlKXJldHVybjtpZihlbCYmZWwudGFnTmFtZSl7dW5vYnNlcnZlLmN1cnJlbnQ9b2JzZXJ2ZShlbCxpc1Zpc2libGU9PmlzVmlzaWJsZSYmc2V0VmlzaWJsZShpc1Zpc2libGUpLHtyb290TWFyZ2lufSk7fX0sW2lzRGlzYWJsZWQscm9vdE1hcmdpbix2aXNpYmxlXSk7KDAsX3JlYWN0LnVzZUVmZmVjdCkoKCk9PntpZighaGFzSW50ZXJzZWN0aW9uT2JzZXJ2ZXIpe2lmKCF2aXNpYmxlKXtjb25zdCBpZGxlQ2FsbGJhY2s9KDAsX3JlcXVlc3RJZGxlQ2FsbGJhY2sucmVxdWVzdElkbGVDYWxsYmFjaykoKCk9PnNldFZpc2libGUodHJ1ZSkpO3JldHVybigpPT4oMCxfcmVxdWVzdElkbGVDYWxsYmFjay5jYW5jZWxJZGxlQ2FsbGJhY2spKGlkbGVDYWxsYmFjayk7fX19LFt2aXNpYmxlXSk7cmV0dXJuW3NldFJlZix2aXNpYmxlXTt9ZnVuY3Rpb24gb2JzZXJ2ZShlbGVtZW50LGNhbGxiYWNrLG9wdGlvbnMpe2NvbnN0e2lkLG9ic2VydmVyLGVsZW1lbnRzfT1jcmVhdGVPYnNlcnZlcihvcHRpb25zKTtlbGVtZW50cy5zZXQoZWxlbWVudCxjYWxsYmFjayk7b2JzZXJ2ZXIub2JzZXJ2ZShlbGVtZW50KTtyZXR1cm4gZnVuY3Rpb24gdW5vYnNlcnZlKCl7ZWxlbWVudHMuZGVsZXRlKGVsZW1lbnQpO29ic2VydmVyLnVub2JzZXJ2ZShlbGVtZW50KTsvLyBEZXN0cm95IG9ic2VydmVyIHdoZW4gdGhlcmUncyBub3RoaW5nIGxlZnQgdG8gd2F0Y2g6XG5pZihlbGVtZW50cy5zaXplPT09MCl7b2JzZXJ2ZXIuZGlzY29ubmVjdCgpO29ic2VydmVycy5kZWxldGUoaWQpO319O31jb25zdCBvYnNlcnZlcnM9bmV3IE1hcCgpO2Z1bmN0aW9uIGNyZWF0ZU9ic2VydmVyKG9wdGlvbnMpe2NvbnN0IGlkPW9wdGlvbnMucm9vdE1hcmdpbnx8Jyc7bGV0IGluc3RhbmNlPW9ic2VydmVycy5nZXQoaWQpO2lmKGluc3RhbmNlKXtyZXR1cm4gaW5zdGFuY2U7fWNvbnN0IGVsZW1lbnRzPW5ldyBNYXAoKTtjb25zdCBvYnNlcnZlcj1uZXcgSW50ZXJzZWN0aW9uT2JzZXJ2ZXIoZW50cmllcz0+e2VudHJpZXMuZm9yRWFjaChlbnRyeT0+e2NvbnN0IGNhbGxiYWNrPWVsZW1lbnRzLmdldChlbnRyeS50YXJnZXQpO2NvbnN0IGlzVmlzaWJsZT1lbnRyeS5pc0ludGVyc2VjdGluZ3x8ZW50cnkuaW50ZXJzZWN0aW9uUmF0aW8+MDtpZihjYWxsYmFjayYmaXNWaXNpYmxlKXtjYWxsYmFjayhpc1Zpc2libGUpO319KTt9LG9wdGlvbnMpO29ic2VydmVycy5zZXQoaWQsaW5zdGFuY2U9e2lkLG9ic2VydmVyLGVsZW1lbnRzfSk7cmV0dXJuIGluc3RhbmNlO31cbi8vIyBzb3VyY2VNYXBwaW5nVVJMPXVzZS1pbnRlcnNlY3Rpb24uanMubWFwIiwiXCJ1c2Ugc3RyaWN0XCI7dmFyIF9pbnRlcm9wUmVxdWlyZURlZmF1bHQ9cmVxdWlyZShcIkBiYWJlbC9ydW50aW1lL2hlbHBlcnMvaW50ZXJvcFJlcXVpcmVEZWZhdWx0XCIpO2V4cG9ydHMuX19lc01vZHVsZT10cnVlO2V4cG9ydHMuZGVmYXVsdD13aXRoUm91dGVyO3ZhciBfcmVhY3Q9X2ludGVyb3BSZXF1aXJlRGVmYXVsdChyZXF1aXJlKFwicmVhY3RcIikpO3ZhciBfcm91dGVyPXJlcXVpcmUoXCIuL3JvdXRlclwiKTtmdW5jdGlvbiB3aXRoUm91dGVyKENvbXBvc2VkQ29tcG9uZW50KXtmdW5jdGlvbiBXaXRoUm91dGVyV3JhcHBlcihwcm9wcyl7cmV0dXJuLyojX19QVVJFX18qL19yZWFjdC5kZWZhdWx0LmNyZWF0ZUVsZW1lbnQoQ29tcG9zZWRDb21wb25lbnQsT2JqZWN0LmFzc2lnbih7cm91dGVyOigwLF9yb3V0ZXIudXNlUm91dGVyKSgpfSxwcm9wcykpO31XaXRoUm91dGVyV3JhcHBlci5nZXRJbml0aWFsUHJvcHM9Q29tcG9zZWRDb21wb25lbnQuZ2V0SW5pdGlhbFByb3BzLy8gVGhpcyBpcyBuZWVkZWQgdG8gYWxsb3cgY2hlY2tpbmcgZm9yIGN1c3RvbSBnZXRJbml0aWFsUHJvcHMgaW4gX2FwcFxuO1dpdGhSb3V0ZXJXcmFwcGVyLm9yaWdHZXRJbml0aWFsUHJvcHM9Q29tcG9zZWRDb21wb25lbnQub3JpZ0dldEluaXRpYWxQcm9wcztpZihwcm9jZXNzLmVudi5OT0RFX0VOViE9PSdwcm9kdWN0aW9uJyl7Y29uc3QgbmFtZT1Db21wb3NlZENvbXBvbmVudC5kaXNwbGF5TmFtZXx8Q29tcG9zZWRDb21wb25lbnQubmFtZXx8J1Vua25vd24nO1dpdGhSb3V0ZXJXcmFwcGVyLmRpc3BsYXlOYW1lPWB3aXRoUm91dGVyKCR7bmFtZX0pYDt9cmV0dXJuIFdpdGhSb3V0ZXJXcmFwcGVyO31cbi8vIyBzb3VyY2VNYXBwaW5nVVJMPXdpdGgtcm91dGVyLmpzLm1hcCIsIlwidXNlIHN0cmljdFwiO2V4cG9ydHMuX19lc01vZHVsZT10cnVlO2V4cG9ydHMuZGV0ZWN0RG9tYWluTG9jYWxlPWRldGVjdERvbWFpbkxvY2FsZTtmdW5jdGlvbiBkZXRlY3REb21haW5Mb2NhbGUoZG9tYWluSXRlbXMsaG9zdG5hbWUsZGV0ZWN0ZWRMb2NhbGUpe2xldCBkb21haW5JdGVtO2lmKGRvbWFpbkl0ZW1zKXtpZihkZXRlY3RlZExvY2FsZSl7ZGV0ZWN0ZWRMb2NhbGU9ZGV0ZWN0ZWRMb2NhbGUudG9Mb3dlckNhc2UoKTt9Zm9yKGNvbnN0IGl0ZW0gb2YgZG9tYWluSXRlbXMpe3ZhciBfaXRlbSRkb21haW4sX2l0ZW0kbG9jYWxlczsvLyByZW1vdmUgcG9ydCBpZiBwcmVzZW50XG5jb25zdCBkb21haW5Ib3N0bmFtZT0oX2l0ZW0kZG9tYWluPWl0ZW0uZG9tYWluKT09bnVsbD92b2lkIDA6X2l0ZW0kZG9tYWluLnNwbGl0KCc6JylbMF0udG9Mb3dlckNhc2UoKTtpZihob3N0bmFtZT09PWRvbWFpbkhvc3RuYW1lfHxkZXRlY3RlZExvY2FsZT09PWl0ZW0uZGVmYXVsdExvY2FsZS50b0xvd2VyQ2FzZSgpfHwoX2l0ZW0kbG9jYWxlcz1pdGVtLmxvY2FsZXMpIT1udWxsJiZfaXRlbSRsb2NhbGVzLnNvbWUobG9jYWxlPT5sb2NhbGUudG9Mb3dlckNhc2UoKT09PWRldGVjdGVkTG9jYWxlKSl7ZG9tYWluSXRlbT1pdGVtO2JyZWFrO319fXJldHVybiBkb21haW5JdGVtO31cbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWRldGVjdC1kb21haW4tbG9jYWxlLmpzLm1hcCIsIlwidXNlIHN0cmljdFwiO2V4cG9ydHMuX19lc01vZHVsZT10cnVlO2V4cG9ydHMubm9ybWFsaXplTG9jYWxlUGF0aD1ub3JtYWxpemVMb2NhbGVQYXRoO2Z1bmN0aW9uIG5vcm1hbGl6ZUxvY2FsZVBhdGgocGF0aG5hbWUsbG9jYWxlcyl7bGV0IGRldGVjdGVkTG9jYWxlOy8vIGZpcnN0IGl0ZW0gd2lsbCBiZSBlbXB0eSBzdHJpbmcgZnJvbSBzcGxpdHRpbmcgYXQgZmlyc3QgY2hhclxuY29uc3QgcGF0aG5hbWVQYXJ0cz1wYXRobmFtZS5zcGxpdCgnLycpOyhsb2NhbGVzfHxbXSkuc29tZShsb2NhbGU9PntpZihwYXRobmFtZVBhcnRzWzFdLnRvTG93ZXJDYXNlKCk9PT1sb2NhbGUudG9Mb3dlckNhc2UoKSl7ZGV0ZWN0ZWRMb2NhbGU9bG9jYWxlO3BhdGhuYW1lUGFydHMuc3BsaWNlKDEsMSk7cGF0aG5hbWU9cGF0aG5hbWVQYXJ0cy5qb2luKCcvJyl8fCcvJztyZXR1cm4gdHJ1ZTt9cmV0dXJuIGZhbHNlO30pO3JldHVybntwYXRobmFtZSxkZXRlY3RlZExvY2FsZX07fVxuLy8jIHNvdXJjZU1hcHBpbmdVUkw9bm9ybWFsaXplLWxvY2FsZS1wYXRoLmpzLm1hcCIsIlwidXNlIHN0cmljdFwiO2V4cG9ydHMuX19lc01vZHVsZT10cnVlO2V4cG9ydHMuZGVmYXVsdD1taXR0Oy8qXG5NSVQgTGljZW5zZVxuXG5Db3B5cmlnaHQgKGMpIEphc29uIE1pbGxlciAoaHR0cHM6Ly9qYXNvbmZvcm1hdC5jb20vKVxuXG5QZXJtaXNzaW9uIGlzIGhlcmVieSBncmFudGVkLCBmcmVlIG9mIGNoYXJnZSwgdG8gYW55IHBlcnNvbiBvYnRhaW5pbmcgYSBjb3B5IG9mIHRoaXMgc29mdHdhcmUgYW5kIGFzc29jaWF0ZWQgZG9jdW1lbnRhdGlvbiBmaWxlcyAodGhlIFwiU29mdHdhcmVcIiksIHRvIGRlYWwgaW4gdGhlIFNvZnR3YXJlIHdpdGhvdXQgcmVzdHJpY3Rpb24sIGluY2x1ZGluZyB3aXRob3V0IGxpbWl0YXRpb24gdGhlIHJpZ2h0cyB0byB1c2UsIGNvcHksIG1vZGlmeSwgbWVyZ2UsIHB1Ymxpc2gsIGRpc3RyaWJ1dGUsIHN1YmxpY2Vuc2UsIGFuZC9vciBzZWxsIGNvcGllcyBvZiB0aGUgU29mdHdhcmUsIGFuZCB0byBwZXJtaXQgcGVyc29ucyB0byB3aG9tIHRoZSBTb2Z0d2FyZSBpcyBmdXJuaXNoZWQgdG8gZG8gc28sIHN1YmplY3QgdG8gdGhlIGZvbGxvd2luZyBjb25kaXRpb25zOlxuXG5UaGUgYWJvdmUgY29weXJpZ2h0IG5vdGljZSBhbmQgdGhpcyBwZXJtaXNzaW9uIG5vdGljZSBzaGFsbCBiZSBpbmNsdWRlZCBpbiBhbGwgY29waWVzIG9yIHN1YnN0YW50aWFsIHBvcnRpb25zIG9mIHRoZSBTb2Z0d2FyZS5cblxuVEhFIFNPRlRXQVJFIElTIFBST1ZJREVEIFwiQVMgSVNcIiwgV0lUSE9VVCBXQVJSQU5UWSBPRiBBTlkgS0lORCwgRVhQUkVTUyBPUiBJTVBMSUVELCBJTkNMVURJTkcgQlVUIE5PVCBMSU1JVEVEIFRPIFRIRSBXQVJSQU5USUVTIE9GIE1FUkNIQU5UQUJJTElUWSwgRklUTkVTUyBGT1IgQSBQQVJUSUNVTEFSIFBVUlBPU0UgQU5EIE5PTklORlJJTkdFTUVOVC4gSU4gTk8gRVZFTlQgU0hBTEwgVEhFIEFVVEhPUlMgT1IgQ09QWVJJR0hUIEhPTERFUlMgQkUgTElBQkxFIEZPUiBBTlkgQ0xBSU0sIERBTUFHRVMgT1IgT1RIRVIgTElBQklMSVRZLCBXSEVUSEVSIElOIEFOIEFDVElPTiBPRiBDT05UUkFDVCwgVE9SVCBPUiBPVEhFUldJU0UsIEFSSVNJTkcgRlJPTSwgT1VUIE9GIE9SIElOIENPTk5FQ1RJT04gV0lUSCBUSEUgU09GVFdBUkUgT1IgVEhFIFVTRSBPUiBPVEhFUiBERUFMSU5HUyBJTiBUSEUgU09GVFdBUkUuXG4qLyAvLyBUaGlzIGZpbGUgaXMgYmFzZWQgb24gaHR0cHM6Ly9naXRodWIuY29tL2RldmVsb3BpdC9taXR0L2Jsb2IvdjEuMS4zL3NyYy9pbmRleC5qc1xuLy8gSXQncyBiZWVuIGVkaXRlZCBmb3IgdGhlIG5lZWRzIG9mIHRoaXMgc2NyaXB0XG4vLyBTZWUgdGhlIExJQ0VOU0UgYXQgdGhlIHRvcCBvZiB0aGUgZmlsZVxuZnVuY3Rpb24gbWl0dCgpe2NvbnN0IGFsbD1PYmplY3QuY3JlYXRlKG51bGwpO3JldHVybntvbih0eXBlLGhhbmRsZXIpezsoYWxsW3R5cGVdfHwoYWxsW3R5cGVdPVtdKSkucHVzaChoYW5kbGVyKTt9LG9mZih0eXBlLGhhbmRsZXIpe2lmKGFsbFt0eXBlXSl7YWxsW3R5cGVdLnNwbGljZShhbGxbdHlwZV0uaW5kZXhPZihoYW5kbGVyKT4+PjAsMSk7fX0sZW1pdCh0eXBlLC4uLmV2dHMpey8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBhcnJheS1jYWxsYmFjay1yZXR1cm5cbjsoYWxsW3R5cGVdfHxbXSkuc2xpY2UoKS5tYXAoaGFuZGxlcj0+e2hhbmRsZXIoLi4uZXZ0cyk7fSk7fX07fVxuLy8jIHNvdXJjZU1hcHBpbmdVUkw9bWl0dC5qcy5tYXAiLCJcInVzZSBzdHJpY3RcIjtleHBvcnRzLl9fZXNNb2R1bGU9dHJ1ZTtleHBvcnRzLmdldERvbWFpbkxvY2FsZT1nZXREb21haW5Mb2NhbGU7ZXhwb3J0cy5hZGRMb2NhbGU9YWRkTG9jYWxlO2V4cG9ydHMuZGVsTG9jYWxlPWRlbExvY2FsZTtleHBvcnRzLmhhc0Jhc2VQYXRoPWhhc0Jhc2VQYXRoO2V4cG9ydHMuYWRkQmFzZVBhdGg9YWRkQmFzZVBhdGg7ZXhwb3J0cy5kZWxCYXNlUGF0aD1kZWxCYXNlUGF0aDtleHBvcnRzLmlzTG9jYWxVUkw9aXNMb2NhbFVSTDtleHBvcnRzLmludGVycG9sYXRlQXM9aW50ZXJwb2xhdGVBcztleHBvcnRzLnJlc29sdmVIcmVmPXJlc29sdmVIcmVmO2V4cG9ydHMuZGVmYXVsdD12b2lkIDA7dmFyIF9ub3JtYWxpemVUcmFpbGluZ1NsYXNoPXJlcXVpcmUoXCIuLi8uLi8uLi9jbGllbnQvbm9ybWFsaXplLXRyYWlsaW5nLXNsYXNoXCIpO3ZhciBfcm91dGVMb2FkZXI9cmVxdWlyZShcIi4uLy4uLy4uL2NsaWVudC9yb3V0ZS1sb2FkZXJcIik7dmFyIF9kZW5vcm1hbGl6ZVBhZ2VQYXRoPXJlcXVpcmUoXCIuLi8uLi9zZXJ2ZXIvZGVub3JtYWxpemUtcGFnZS1wYXRoXCIpO3ZhciBfbm9ybWFsaXplTG9jYWxlUGF0aD1yZXF1aXJlKFwiLi4vaTE4bi9ub3JtYWxpemUtbG9jYWxlLXBhdGhcIik7dmFyIF9taXR0PV9pbnRlcm9wUmVxdWlyZURlZmF1bHQocmVxdWlyZShcIi4uL21pdHRcIikpO3ZhciBfdXRpbHM9cmVxdWlyZShcIi4uL3V0aWxzXCIpO3ZhciBfaXNEeW5hbWljPXJlcXVpcmUoXCIuL3V0aWxzL2lzLWR5bmFtaWNcIik7dmFyIF9wYXJzZVJlbGF0aXZlVXJsPXJlcXVpcmUoXCIuL3V0aWxzL3BhcnNlLXJlbGF0aXZlLXVybFwiKTt2YXIgX3F1ZXJ5c3RyaW5nPXJlcXVpcmUoXCIuL3V0aWxzL3F1ZXJ5c3RyaW5nXCIpO3ZhciBfcmVzb2x2ZVJld3JpdGVzPV9pbnRlcm9wUmVxdWlyZURlZmF1bHQocmVxdWlyZShcIi4vdXRpbHMvcmVzb2x2ZS1yZXdyaXRlc1wiKSk7dmFyIF9yb3V0ZU1hdGNoZXI9cmVxdWlyZShcIi4vdXRpbHMvcm91dGUtbWF0Y2hlclwiKTt2YXIgX3JvdXRlUmVnZXg9cmVxdWlyZShcIi4vdXRpbHMvcm91dGUtcmVnZXhcIik7ZnVuY3Rpb24gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChvYmope3JldHVybiBvYmomJm9iai5fX2VzTW9kdWxlP29iajp7ZGVmYXVsdDpvYmp9O30vLyB0c2xpbnQ6ZGlzYWJsZTpuby1jb25zb2xlXG5sZXQgZGV0ZWN0RG9tYWluTG9jYWxlO2lmKHByb2Nlc3MuZW52Ll9fTkVYVF9JMThOX1NVUFBPUlQpe2RldGVjdERvbWFpbkxvY2FsZT1yZXF1aXJlKCcuLi9pMThuL2RldGVjdC1kb21haW4tbG9jYWxlJykuZGV0ZWN0RG9tYWluTG9jYWxlO31jb25zdCBiYXNlUGF0aD1wcm9jZXNzLmVudi5fX05FWFRfUk9VVEVSX0JBU0VQQVRIfHwnJztmdW5jdGlvbiBidWlsZENhbmNlbGxhdGlvbkVycm9yKCl7cmV0dXJuIE9iamVjdC5hc3NpZ24obmV3IEVycm9yKCdSb3V0ZSBDYW5jZWxsZWQnKSx7Y2FuY2VsbGVkOnRydWV9KTt9ZnVuY3Rpb24gYWRkUGF0aFByZWZpeChwYXRoLHByZWZpeCl7cmV0dXJuIHByZWZpeCYmcGF0aC5zdGFydHNXaXRoKCcvJyk/cGF0aD09PScvJz8oMCxfbm9ybWFsaXplVHJhaWxpbmdTbGFzaC5ub3JtYWxpemVQYXRoVHJhaWxpbmdTbGFzaCkocHJlZml4KTpgJHtwcmVmaXh9JHtwYXRoTm9RdWVyeUhhc2gocGF0aCk9PT0nLyc/cGF0aC5zdWJzdHJpbmcoMSk6cGF0aH1gOnBhdGg7fWZ1bmN0aW9uIGdldERvbWFpbkxvY2FsZShwYXRoLGxvY2FsZSxsb2NhbGVzLGRvbWFpbkxvY2FsZXMpe2lmKHByb2Nlc3MuZW52Ll9fTkVYVF9JMThOX1NVUFBPUlQpe2xvY2FsZT1sb2NhbGV8fCgwLF9ub3JtYWxpemVMb2NhbGVQYXRoLm5vcm1hbGl6ZUxvY2FsZVBhdGgpKHBhdGgsbG9jYWxlcykuZGV0ZWN0ZWRMb2NhbGU7Y29uc3QgZGV0ZWN0ZWREb21haW49ZGV0ZWN0RG9tYWluTG9jYWxlKGRvbWFpbkxvY2FsZXMsdW5kZWZpbmVkLGxvY2FsZSk7aWYoZGV0ZWN0ZWREb21haW4pe3JldHVybmBodHRwJHtkZXRlY3RlZERvbWFpbi5odHRwPycnOidzJ306Ly8ke2RldGVjdGVkRG9tYWluLmRvbWFpbn0ke2Jhc2VQYXRofHwnJ30ke2xvY2FsZT09PWRldGVjdGVkRG9tYWluLmRlZmF1bHRMb2NhbGU/Jyc6YC8ke2xvY2FsZX1gfSR7cGF0aH1gO31yZXR1cm4gZmFsc2U7fXJldHVybiBmYWxzZTt9ZnVuY3Rpb24gYWRkTG9jYWxlKHBhdGgsbG9jYWxlLGRlZmF1bHRMb2NhbGUpe2lmKHByb2Nlc3MuZW52Ll9fTkVYVF9JMThOX1NVUFBPUlQpe2NvbnN0IHBhdGhuYW1lPXBhdGhOb1F1ZXJ5SGFzaChwYXRoKTtjb25zdCBwYXRoTG93ZXI9cGF0aG5hbWUudG9Mb3dlckNhc2UoKTtjb25zdCBsb2NhbGVMb3dlcj1sb2NhbGUmJmxvY2FsZS50b0xvd2VyQ2FzZSgpO3JldHVybiBsb2NhbGUmJmxvY2FsZSE9PWRlZmF1bHRMb2NhbGUmJiFwYXRoTG93ZXIuc3RhcnRzV2l0aCgnLycrbG9jYWxlTG93ZXIrJy8nKSYmcGF0aExvd2VyIT09Jy8nK2xvY2FsZUxvd2VyP2FkZFBhdGhQcmVmaXgocGF0aCwnLycrbG9jYWxlKTpwYXRoO31yZXR1cm4gcGF0aDt9ZnVuY3Rpb24gZGVsTG9jYWxlKHBhdGgsbG9jYWxlKXtpZihwcm9jZXNzLmVudi5fX05FWFRfSTE4Tl9TVVBQT1JUKXtjb25zdCBwYXRobmFtZT1wYXRoTm9RdWVyeUhhc2gocGF0aCk7Y29uc3QgcGF0aExvd2VyPXBhdGhuYW1lLnRvTG93ZXJDYXNlKCk7Y29uc3QgbG9jYWxlTG93ZXI9bG9jYWxlJiZsb2NhbGUudG9Mb3dlckNhc2UoKTtyZXR1cm4gbG9jYWxlJiYocGF0aExvd2VyLnN0YXJ0c1dpdGgoJy8nK2xvY2FsZUxvd2VyKycvJyl8fHBhdGhMb3dlcj09PScvJytsb2NhbGVMb3dlcik/KHBhdGhuYW1lLmxlbmd0aD09PWxvY2FsZS5sZW5ndGgrMT8nLyc6JycpK3BhdGguc3Vic3RyKGxvY2FsZS5sZW5ndGgrMSk6cGF0aDt9cmV0dXJuIHBhdGg7fWZ1bmN0aW9uIHBhdGhOb1F1ZXJ5SGFzaChwYXRoKXtjb25zdCBxdWVyeUluZGV4PXBhdGguaW5kZXhPZignPycpO2NvbnN0IGhhc2hJbmRleD1wYXRoLmluZGV4T2YoJyMnKTtpZihxdWVyeUluZGV4Pi0xfHxoYXNoSW5kZXg+LTEpe3BhdGg9cGF0aC5zdWJzdHJpbmcoMCxxdWVyeUluZGV4Pi0xP3F1ZXJ5SW5kZXg6aGFzaEluZGV4KTt9cmV0dXJuIHBhdGg7fWZ1bmN0aW9uIGhhc0Jhc2VQYXRoKHBhdGgpe3BhdGg9cGF0aE5vUXVlcnlIYXNoKHBhdGgpO3JldHVybiBwYXRoPT09YmFzZVBhdGh8fHBhdGguc3RhcnRzV2l0aChiYXNlUGF0aCsnLycpO31mdW5jdGlvbiBhZGRCYXNlUGF0aChwYXRoKXsvLyB3ZSBvbmx5IGFkZCB0aGUgYmFzZXBhdGggb24gcmVsYXRpdmUgdXJsc1xucmV0dXJuIGFkZFBhdGhQcmVmaXgocGF0aCxiYXNlUGF0aCk7fWZ1bmN0aW9uIGRlbEJhc2VQYXRoKHBhdGgpe3BhdGg9cGF0aC5zbGljZShiYXNlUGF0aC5sZW5ndGgpO2lmKCFwYXRoLnN0YXJ0c1dpdGgoJy8nKSlwYXRoPWAvJHtwYXRofWA7cmV0dXJuIHBhdGg7fS8qKlxuICogRGV0ZWN0cyB3aGV0aGVyIGEgZ2l2ZW4gdXJsIGlzIHJvdXRhYmxlIGJ5IHRoZSBOZXh0LmpzIHJvdXRlciAoYnJvd3NlciBvbmx5KS5cbiAqL2Z1bmN0aW9uIGlzTG9jYWxVUkwodXJsKXsvLyBwcmV2ZW50IGEgaHlkcmF0aW9uIG1pc21hdGNoIG9uIGhyZWYgZm9yIHVybCB3aXRoIGFuY2hvciByZWZzXG5pZih1cmwuc3RhcnRzV2l0aCgnLycpfHx1cmwuc3RhcnRzV2l0aCgnIycpfHx1cmwuc3RhcnRzV2l0aCgnPycpKXJldHVybiB0cnVlO3RyeXsvLyBhYnNvbHV0ZSB1cmxzIGNhbiBiZSBsb2NhbCBpZiB0aGV5IGFyZSBvbiB0aGUgc2FtZSBvcmlnaW5cbmNvbnN0IGxvY2F0aW9uT3JpZ2luPSgwLF91dGlscy5nZXRMb2NhdGlvbk9yaWdpbikoKTtjb25zdCByZXNvbHZlZD1uZXcgVVJMKHVybCxsb2NhdGlvbk9yaWdpbik7cmV0dXJuIHJlc29sdmVkLm9yaWdpbj09PWxvY2F0aW9uT3JpZ2luJiZoYXNCYXNlUGF0aChyZXNvbHZlZC5wYXRobmFtZSk7fWNhdGNoKF8pe3JldHVybiBmYWxzZTt9fWZ1bmN0aW9uIGludGVycG9sYXRlQXMocm91dGUsYXNQYXRobmFtZSxxdWVyeSl7bGV0IGludGVycG9sYXRlZFJvdXRlPScnO2NvbnN0IGR5bmFtaWNSZWdleD0oMCxfcm91dGVSZWdleC5nZXRSb3V0ZVJlZ2V4KShyb3V0ZSk7Y29uc3QgZHluYW1pY0dyb3Vwcz1keW5hbWljUmVnZXguZ3JvdXBzO2NvbnN0IGR5bmFtaWNNYXRjaGVzPS8vIFRyeSB0byBtYXRjaCB0aGUgZHluYW1pYyByb3V0ZSBhZ2FpbnN0IHRoZSBhc1BhdGhcbihhc1BhdGhuYW1lIT09cm91dGU/KDAsX3JvdXRlTWF0Y2hlci5nZXRSb3V0ZU1hdGNoZXIpKGR5bmFtaWNSZWdleCkoYXNQYXRobmFtZSk6JycpfHwvLyBGYWxsIGJhY2sgdG8gcmVhZGluZyB0aGUgdmFsdWVzIGZyb20gdGhlIGhyZWZcbi8vIFRPRE86IHNob3VsZCB0aGlzIHRha2UgcHJpb3JpdHk7IGFsc28gbmVlZCB0byBjaGFuZ2UgaW4gdGhlIHJvdXRlci5cbnF1ZXJ5O2ludGVycG9sYXRlZFJvdXRlPXJvdXRlO2NvbnN0IHBhcmFtcz1PYmplY3Qua2V5cyhkeW5hbWljR3JvdXBzKTtpZighcGFyYW1zLmV2ZXJ5KHBhcmFtPT57bGV0IHZhbHVlPWR5bmFtaWNNYXRjaGVzW3BhcmFtXXx8Jyc7Y29uc3R7cmVwZWF0LG9wdGlvbmFsfT1keW5hbWljR3JvdXBzW3BhcmFtXTsvLyBzdXBwb3J0IHNpbmdsZS1sZXZlbCBjYXRjaC1hbGxcbi8vIFRPRE86IG1vcmUgcm9idXN0IGhhbmRsaW5nIGZvciB1c2VyLWVycm9yIChwYXNzaW5nIGAvYClcbmxldCByZXBsYWNlZD1gWyR7cmVwZWF0PycuLi4nOicnfSR7cGFyYW19XWA7aWYob3B0aW9uYWwpe3JlcGxhY2VkPWAkeyF2YWx1ZT8nLyc6Jyd9WyR7cmVwbGFjZWR9XWA7fWlmKHJlcGVhdCYmIUFycmF5LmlzQXJyYXkodmFsdWUpKXZhbHVlPVt2YWx1ZV07cmV0dXJuKG9wdGlvbmFsfHxwYXJhbSBpbiBkeW5hbWljTWF0Y2hlcykmJigvLyBJbnRlcnBvbGF0ZSBncm91cCBpbnRvIGRhdGEgVVJMIGlmIHByZXNlbnRcbmludGVycG9sYXRlZFJvdXRlPWludGVycG9sYXRlZFJvdXRlLnJlcGxhY2UocmVwbGFjZWQscmVwZWF0P3ZhbHVlLm1hcCgvLyB0aGVzZSB2YWx1ZXMgc2hvdWxkIGJlIGZ1bGx5IGVuY29kZWQgaW5zdGVhZCBvZiBqdXN0XG4vLyBwYXRoIGRlbGltaXRlciBlc2NhcGVkIHNpbmNlIHRoZXkgYXJlIGJlaW5nIGluc2VydGVkXG4vLyBpbnRvIHRoZSBVUkwgYW5kIHdlIGV4cGVjdCBVUkwgZW5jb2RlZCBzZWdtZW50c1xuLy8gd2hlbiBwYXJzaW5nIGR5bmFtaWMgcm91dGUgcGFyYW1zXG5zZWdtZW50PT5lbmNvZGVVUklDb21wb25lbnQoc2VnbWVudCkpLmpvaW4oJy8nKTplbmNvZGVVUklDb21wb25lbnQodmFsdWUpKXx8Jy8nKTt9KSl7aW50ZXJwb2xhdGVkUm91dGU9Jyc7Ly8gZGlkIG5vdCBzYXRpc2Z5IGFsbCByZXF1aXJlbWVudHNcbi8vIG4uYi4gV2UgaWdub3JlIHRoaXMgZXJyb3IgYmVjYXVzZSB3ZSBoYW5kbGUgd2FybmluZyBmb3IgdGhpcyBjYXNlIGluXG4vLyBkZXZlbG9wbWVudCBpbiB0aGUgYDxMaW5rPmAgY29tcG9uZW50IGRpcmVjdGx5LlxufXJldHVybntwYXJhbXMscmVzdWx0OmludGVycG9sYXRlZFJvdXRlfTt9ZnVuY3Rpb24gb21pdFBhcm1zRnJvbVF1ZXJ5KHF1ZXJ5LHBhcmFtcyl7Y29uc3QgZmlsdGVyZWRRdWVyeT17fTtPYmplY3Qua2V5cyhxdWVyeSkuZm9yRWFjaChrZXk9PntpZighcGFyYW1zLmluY2x1ZGVzKGtleSkpe2ZpbHRlcmVkUXVlcnlba2V5XT1xdWVyeVtrZXldO319KTtyZXR1cm4gZmlsdGVyZWRRdWVyeTt9LyoqXG4gKiBSZXNvbHZlcyBhIGdpdmVuIGh5cGVybGluayB3aXRoIGEgY2VydGFpbiByb3V0ZXIgc3RhdGUgKGJhc2VQYXRoIG5vdCBpbmNsdWRlZCkuXG4gKiBQcmVzZXJ2ZXMgYWJzb2x1dGUgdXJscy5cbiAqL2Z1bmN0aW9uIHJlc29sdmVIcmVmKHJvdXRlcixocmVmLHJlc29sdmVBcyl7Ly8gd2UgdXNlIGEgZHVtbXkgYmFzZSB1cmwgZm9yIHJlbGF0aXZlIHVybHNcbmxldCBiYXNlO2NvbnN0IHVybEFzU3RyaW5nPXR5cGVvZiBocmVmPT09J3N0cmluZyc/aHJlZjooMCxfdXRpbHMuZm9ybWF0V2l0aFZhbGlkYXRpb24pKGhyZWYpO3RyeXtiYXNlPW5ldyBVUkwodXJsQXNTdHJpbmcuc3RhcnRzV2l0aCgnIycpP3JvdXRlci5hc1BhdGg6cm91dGVyLnBhdGhuYW1lLCdodHRwOi8vbicpO31jYXRjaChfKXsvLyBmYWxsYmFjayB0byAvIGZvciBpbnZhbGlkIGFzUGF0aCB2YWx1ZXMgZS5nLiAvL1xuYmFzZT1uZXcgVVJMKCcvJywnaHR0cDovL24nKTt9Ly8gUmV0dXJuIGJlY2F1c2UgaXQgY2Fubm90IGJlIHJvdXRlZCBieSB0aGUgTmV4dC5qcyByb3V0ZXJcbmlmKCFpc0xvY2FsVVJMKHVybEFzU3RyaW5nKSl7cmV0dXJuIHJlc29sdmVBcz9bdXJsQXNTdHJpbmddOnVybEFzU3RyaW5nO310cnl7Y29uc3QgZmluYWxVcmw9bmV3IFVSTCh1cmxBc1N0cmluZyxiYXNlKTtmaW5hbFVybC5wYXRobmFtZT0oMCxfbm9ybWFsaXplVHJhaWxpbmdTbGFzaC5ub3JtYWxpemVQYXRoVHJhaWxpbmdTbGFzaCkoZmluYWxVcmwucGF0aG5hbWUpO2xldCBpbnRlcnBvbGF0ZWRBcz0nJztpZigoMCxfaXNEeW5hbWljLmlzRHluYW1pY1JvdXRlKShmaW5hbFVybC5wYXRobmFtZSkmJmZpbmFsVXJsLnNlYXJjaFBhcmFtcyYmcmVzb2x2ZUFzKXtjb25zdCBxdWVyeT0oMCxfcXVlcnlzdHJpbmcuc2VhcmNoUGFyYW1zVG9VcmxRdWVyeSkoZmluYWxVcmwuc2VhcmNoUGFyYW1zKTtjb25zdHtyZXN1bHQscGFyYW1zfT1pbnRlcnBvbGF0ZUFzKGZpbmFsVXJsLnBhdGhuYW1lLGZpbmFsVXJsLnBhdGhuYW1lLHF1ZXJ5KTtpZihyZXN1bHQpe2ludGVycG9sYXRlZEFzPSgwLF91dGlscy5mb3JtYXRXaXRoVmFsaWRhdGlvbikoe3BhdGhuYW1lOnJlc3VsdCxoYXNoOmZpbmFsVXJsLmhhc2gscXVlcnk6b21pdFBhcm1zRnJvbVF1ZXJ5KHF1ZXJ5LHBhcmFtcyl9KTt9fS8vIGlmIHRoZSBvcmlnaW4gZGlkbid0IGNoYW5nZSwgaXQgbWVhbnMgd2UgcmVjZWl2ZWQgYSByZWxhdGl2ZSBocmVmXG5jb25zdCByZXNvbHZlZEhyZWY9ZmluYWxVcmwub3JpZ2luPT09YmFzZS5vcmlnaW4/ZmluYWxVcmwuaHJlZi5zbGljZShmaW5hbFVybC5vcmlnaW4ubGVuZ3RoKTpmaW5hbFVybC5ocmVmO3JldHVybiByZXNvbHZlQXM/W3Jlc29sdmVkSHJlZixpbnRlcnBvbGF0ZWRBc3x8cmVzb2x2ZWRIcmVmXTpyZXNvbHZlZEhyZWY7fWNhdGNoKF8pe3JldHVybiByZXNvbHZlQXM/W3VybEFzU3RyaW5nXTp1cmxBc1N0cmluZzt9fWZ1bmN0aW9uIHN0cmlwT3JpZ2luKHVybCl7Y29uc3Qgb3JpZ2luPSgwLF91dGlscy5nZXRMb2NhdGlvbk9yaWdpbikoKTtyZXR1cm4gdXJsLnN0YXJ0c1dpdGgob3JpZ2luKT91cmwuc3Vic3RyaW5nKG9yaWdpbi5sZW5ndGgpOnVybDt9ZnVuY3Rpb24gcHJlcGFyZVVybEFzKHJvdXRlcix1cmwsYXMpey8vIElmIHVybCBhbmQgYXMgcHJvdmlkZWQgYXMgYW4gb2JqZWN0IHJlcHJlc2VudGF0aW9uLFxuLy8gd2UnbGwgZm9ybWF0IHRoZW0gaW50byB0aGUgc3RyaW5nIHZlcnNpb24gaGVyZS5cbmxldFtyZXNvbHZlZEhyZWYscmVzb2x2ZWRBc109cmVzb2x2ZUhyZWYocm91dGVyLHVybCx0cnVlKTtjb25zdCBvcmlnaW49KDAsX3V0aWxzLmdldExvY2F0aW9uT3JpZ2luKSgpO2NvbnN0IGhyZWZIYWRPcmlnaW49cmVzb2x2ZWRIcmVmLnN0YXJ0c1dpdGgob3JpZ2luKTtjb25zdCBhc0hhZE9yaWdpbj1yZXNvbHZlZEFzJiZyZXNvbHZlZEFzLnN0YXJ0c1dpdGgob3JpZ2luKTtyZXNvbHZlZEhyZWY9c3RyaXBPcmlnaW4ocmVzb2x2ZWRIcmVmKTtyZXNvbHZlZEFzPXJlc29sdmVkQXM/c3RyaXBPcmlnaW4ocmVzb2x2ZWRBcyk6cmVzb2x2ZWRBcztjb25zdCBwcmVwYXJlZFVybD1ocmVmSGFkT3JpZ2luP3Jlc29sdmVkSHJlZjphZGRCYXNlUGF0aChyZXNvbHZlZEhyZWYpO2NvbnN0IHByZXBhcmVkQXM9YXM/c3RyaXBPcmlnaW4ocmVzb2x2ZUhyZWYocm91dGVyLGFzKSk6cmVzb2x2ZWRBc3x8cmVzb2x2ZWRIcmVmO3JldHVybnt1cmw6cHJlcGFyZWRVcmwsYXM6YXNIYWRPcmlnaW4/cHJlcGFyZWRBczphZGRCYXNlUGF0aChwcmVwYXJlZEFzKX07fWZ1bmN0aW9uIHJlc29sdmVEeW5hbWljUm91dGUocGF0aG5hbWUscGFnZXMpe2NvbnN0IGNsZWFuUGF0aG5hbWU9KDAsX25vcm1hbGl6ZVRyYWlsaW5nU2xhc2gucmVtb3ZlUGF0aFRyYWlsaW5nU2xhc2gpKCgwLF9kZW5vcm1hbGl6ZVBhZ2VQYXRoLmRlbm9ybWFsaXplUGFnZVBhdGgpKHBhdGhuYW1lKSk7aWYoY2xlYW5QYXRobmFtZT09PScvNDA0J3x8Y2xlYW5QYXRobmFtZT09PScvX2Vycm9yJyl7cmV0dXJuIHBhdGhuYW1lO30vLyBoYW5kbGUgcmVzb2x2aW5nIGhyZWYgZm9yIGR5bmFtaWMgcm91dGVzXG5pZighcGFnZXMuaW5jbHVkZXMoY2xlYW5QYXRobmFtZSkpey8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBhcnJheS1jYWxsYmFjay1yZXR1cm5cbnBhZ2VzLnNvbWUocGFnZT0+e2lmKCgwLF9pc0R5bmFtaWMuaXNEeW5hbWljUm91dGUpKHBhZ2UpJiYoMCxfcm91dGVSZWdleC5nZXRSb3V0ZVJlZ2V4KShwYWdlKS5yZS50ZXN0KGNsZWFuUGF0aG5hbWUpKXtwYXRobmFtZT1wYWdlO3JldHVybiB0cnVlO319KTt9cmV0dXJuKDAsX25vcm1hbGl6ZVRyYWlsaW5nU2xhc2gucmVtb3ZlUGF0aFRyYWlsaW5nU2xhc2gpKHBhdGhuYW1lKTt9Y29uc3QgbWFudWFsU2Nyb2xsUmVzdG9yYXRpb249cHJvY2Vzcy5lbnYuX19ORVhUX1NDUk9MTF9SRVNUT1JBVElPTiYmdHlwZW9mIHdpbmRvdyE9PSd1bmRlZmluZWQnJiYnc2Nyb2xsUmVzdG9yYXRpb24naW4gd2luZG93Lmhpc3RvcnkmJiEhZnVuY3Rpb24oKXt0cnl7bGV0IHY9J19fbmV4dCc7Ly8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLXNlcXVlbmNlc1xucmV0dXJuIHNlc3Npb25TdG9yYWdlLnNldEl0ZW0odix2KSxzZXNzaW9uU3RvcmFnZS5yZW1vdmVJdGVtKHYpLHRydWU7fWNhdGNoKG4pe319KCk7Y29uc3QgU1NHX0RBVEFfTk9UX0ZPVU5EPVN5bWJvbCgnU1NHX0RBVEFfTk9UX0ZPVU5EJyk7ZnVuY3Rpb24gZmV0Y2hSZXRyeSh1cmwsYXR0ZW1wdHMpe3JldHVybiBmZXRjaCh1cmwsey8vIENvb2tpZXMgYXJlIHJlcXVpcmVkIHRvIGJlIHByZXNlbnQgZm9yIE5leHQuanMnIFNTRyBcIlByZXZpZXcgTW9kZVwiLlxuLy8gQ29va2llcyBtYXkgYWxzbyBiZSByZXF1aXJlZCBmb3IgYGdldFNlcnZlclNpZGVQcm9wc2AuXG4vL1xuLy8gPiBgZmV0Y2hgIHdvbuKAmXQgc2VuZCBjb29raWVzLCB1bmxlc3MgeW91IHNldCB0aGUgY3JlZGVudGlhbHMgaW5pdFxuLy8gPiBvcHRpb24uXG4vLyBodHRwczovL2RldmVsb3Blci5tb3ppbGxhLm9yZy9lbi1VUy9kb2NzL1dlYi9BUEkvRmV0Y2hfQVBJL1VzaW5nX0ZldGNoXG4vL1xuLy8gPiBGb3IgbWF4aW11bSBicm93c2VyIGNvbXBhdGliaWxpdHkgd2hlbiBpdCBjb21lcyB0byBzZW5kaW5nICZcbi8vID4gcmVjZWl2aW5nIGNvb2tpZXMsIGFsd2F5cyBzdXBwbHkgdGhlIGBjcmVkZW50aWFsczogJ3NhbWUtb3JpZ2luJ2Bcbi8vID4gb3B0aW9uIGluc3RlYWQgb2YgcmVseWluZyBvbiB0aGUgZGVmYXVsdC5cbi8vIGh0dHBzOi8vZ2l0aHViLmNvbS9naXRodWIvZmV0Y2gjY2F2ZWF0c1xuY3JlZGVudGlhbHM6J3NhbWUtb3JpZ2luJ30pLnRoZW4ocmVzPT57aWYoIXJlcy5vayl7aWYoYXR0ZW1wdHM+MSYmcmVzLnN0YXR1cz49NTAwKXtyZXR1cm4gZmV0Y2hSZXRyeSh1cmwsYXR0ZW1wdHMtMSk7fWlmKHJlcy5zdGF0dXM9PT00MDQpe3JldHVybiByZXMuanNvbigpLnRoZW4oZGF0YT0+e2lmKGRhdGEubm90Rm91bmQpe3JldHVybntub3RGb3VuZDpTU0dfREFUQV9OT1RfRk9VTkR9O310aHJvdyBuZXcgRXJyb3IoYEZhaWxlZCB0byBsb2FkIHN0YXRpYyBwcm9wc2ApO30pO310aHJvdyBuZXcgRXJyb3IoYEZhaWxlZCB0byBsb2FkIHN0YXRpYyBwcm9wc2ApO31yZXR1cm4gcmVzLmpzb24oKTt9KTt9ZnVuY3Rpb24gZmV0Y2hOZXh0RGF0YShkYXRhSHJlZixpc1NlcnZlclJlbmRlcil7cmV0dXJuIGZldGNoUmV0cnkoZGF0YUhyZWYsaXNTZXJ2ZXJSZW5kZXI/MzoxKS5jYXRjaChlcnI9PnsvLyBXZSBzaG91bGQgb25seSB0cmlnZ2VyIGEgc2VydmVyLXNpZGUgdHJhbnNpdGlvbiBpZiB0aGlzIHdhcyBjYXVzZWRcbi8vIG9uIGEgY2xpZW50LXNpZGUgdHJhbnNpdGlvbi4gT3RoZXJ3aXNlLCB3ZSdkIGdldCBpbnRvIGFuIGluZmluaXRlXG4vLyBsb29wLlxuaWYoIWlzU2VydmVyUmVuZGVyKXsoMCxfcm91dGVMb2FkZXIubWFya0Fzc2V0RXJyb3IpKGVycik7fXRocm93IGVycjt9KTt9Y2xhc3MgUm91dGVyey8qKlxuICAgKiBNYXAgb2YgYWxsIGNvbXBvbmVudHMgbG9hZGVkIGluIGBSb3V0ZXJgXG4gICAqLyAvLyBTdGF0aWMgRGF0YSBDYWNoZVxuLy8gSW4tZmxpZ2h0IFNlcnZlciBEYXRhIFJlcXVlc3RzLCBmb3IgZGVkdXBpbmdcbmNvbnN0cnVjdG9yKF9wYXRobmFtZSxfcXVlcnksX2FzLHtpbml0aWFsUHJvcHMscGFnZUxvYWRlcixBcHAsd3JhcEFwcCxDb21wb25lbnQsZXJyLHN1YnNjcmlwdGlvbixpc0ZhbGxiYWNrLGxvY2FsZSxsb2NhbGVzLGRlZmF1bHRMb2NhbGUsZG9tYWluTG9jYWxlcyxpc1ByZXZpZXd9KXt0aGlzLnJvdXRlPXZvaWQgMDt0aGlzLnBhdGhuYW1lPXZvaWQgMDt0aGlzLnF1ZXJ5PXZvaWQgMDt0aGlzLmFzUGF0aD12b2lkIDA7dGhpcy5iYXNlUGF0aD12b2lkIDA7dGhpcy5jb21wb25lbnRzPXZvaWQgMDt0aGlzLnNkYz17fTt0aGlzLnNkcj17fTt0aGlzLnN1Yj12b2lkIDA7dGhpcy5jbGM9dm9pZCAwO3RoaXMucGFnZUxvYWRlcj12b2lkIDA7dGhpcy5fYnBzPXZvaWQgMDt0aGlzLmV2ZW50cz12b2lkIDA7dGhpcy5fd3JhcEFwcD12b2lkIDA7dGhpcy5pc1Nzcj12b2lkIDA7dGhpcy5pc0ZhbGxiYWNrPXZvaWQgMDt0aGlzLl9pbkZsaWdodFJvdXRlPXZvaWQgMDt0aGlzLl9zaGFsbG93PXZvaWQgMDt0aGlzLmxvY2FsZT12b2lkIDA7dGhpcy5sb2NhbGVzPXZvaWQgMDt0aGlzLmRlZmF1bHRMb2NhbGU9dm9pZCAwO3RoaXMuZG9tYWluTG9jYWxlcz12b2lkIDA7dGhpcy5pc1JlYWR5PXZvaWQgMDt0aGlzLmlzUHJldmlldz12b2lkIDA7dGhpcy5pc0xvY2FsZURvbWFpbj12b2lkIDA7dGhpcy5faWR4PTA7dGhpcy5vblBvcFN0YXRlPWU9Pntjb25zdCBzdGF0ZT1lLnN0YXRlO2lmKCFzdGF0ZSl7Ly8gV2UgZ2V0IHN0YXRlIGFzIHVuZGVmaW5lZCBmb3IgdHdvIHJlYXNvbnMuXG4vLyAgMS4gV2l0aCBvbGRlciBzYWZhcmkgKDwgOCkgYW5kIG9sZGVyIGNocm9tZSAoPCAzNClcbi8vICAyLiBXaGVuIHRoZSBVUkwgY2hhbmdlZCB3aXRoICNcbi8vXG4vLyBJbiB0aGUgYm90aCBjYXNlcywgd2UgZG9uJ3QgbmVlZCB0byBwcm9jZWVkIGFuZCBjaGFuZ2UgdGhlIHJvdXRlLlxuLy8gKGFzIGl0J3MgYWxyZWFkeSBjaGFuZ2VkKVxuLy8gQnV0IHdlIGNhbiBzaW1wbHkgcmVwbGFjZSB0aGUgc3RhdGUgd2l0aCB0aGUgbmV3IGNoYW5nZXMuXG4vLyBBY3R1YWxseSwgZm9yICgxKSB3ZSBkb24ndCBuZWVkIHRvIG5vdGhpbmcuIEJ1dCBpdCdzIGhhcmQgdG8gZGV0ZWN0IHRoYXQgZXZlbnQuXG4vLyBTbywgZG9pbmcgdGhlIGZvbGxvd2luZyBmb3IgKDEpIGRvZXMgbm8gaGFybS5cbmNvbnN0e3BhdGhuYW1lLHF1ZXJ5fT10aGlzO3RoaXMuY2hhbmdlU3RhdGUoJ3JlcGxhY2VTdGF0ZScsKDAsX3V0aWxzLmZvcm1hdFdpdGhWYWxpZGF0aW9uKSh7cGF0aG5hbWU6YWRkQmFzZVBhdGgocGF0aG5hbWUpLHF1ZXJ5fSksKDAsX3V0aWxzLmdldFVSTCkoKSk7cmV0dXJuO31pZighc3RhdGUuX19OKXtyZXR1cm47fWxldCBmb3JjZWRTY3JvbGw7Y29uc3R7dXJsLGFzLG9wdGlvbnMsaWR4fT1zdGF0ZTtpZihwcm9jZXNzLmVudi5fX05FWFRfU0NST0xMX1JFU1RPUkFUSU9OKXtpZihtYW51YWxTY3JvbGxSZXN0b3JhdGlvbil7aWYodGhpcy5faWR4IT09aWR4KXsvLyBTbmFwc2hvdCBjdXJyZW50IHNjcm9sbCBwb3NpdGlvbjpcbnRyeXtzZXNzaW9uU3RvcmFnZS5zZXRJdGVtKCdfX25leHRfc2Nyb2xsXycrdGhpcy5faWR4LEpTT04uc3RyaW5naWZ5KHt4OnNlbGYucGFnZVhPZmZzZXQseTpzZWxmLnBhZ2VZT2Zmc2V0fSkpO31jYXRjaChfdW51c2VkKXt9Ly8gUmVzdG9yZSBvbGQgc2Nyb2xsIHBvc2l0aW9uOlxudHJ5e2NvbnN0IHY9c2Vzc2lvblN0b3JhZ2UuZ2V0SXRlbSgnX19uZXh0X3Njcm9sbF8nK2lkeCk7Zm9yY2VkU2Nyb2xsPUpTT04ucGFyc2Uodik7fWNhdGNoKF91bnVzZWQyKXtmb3JjZWRTY3JvbGw9e3g6MCx5OjB9O319fX10aGlzLl9pZHg9aWR4O2NvbnN0e3BhdGhuYW1lfT0oMCxfcGFyc2VSZWxhdGl2ZVVybC5wYXJzZVJlbGF0aXZlVXJsKSh1cmwpOy8vIE1ha2Ugc3VyZSB3ZSBkb24ndCByZS1yZW5kZXIgb24gaW5pdGlhbCBsb2FkLFxuLy8gY2FuIGJlIGNhdXNlZCBieSBuYXZpZ2F0aW5nIGJhY2sgZnJvbSBhbiBleHRlcm5hbCBzaXRlXG5pZih0aGlzLmlzU3NyJiZhcz09PXRoaXMuYXNQYXRoJiZwYXRobmFtZT09PXRoaXMucGF0aG5hbWUpe3JldHVybjt9Ly8gSWYgdGhlIGRvd25zdHJlYW0gYXBwbGljYXRpb24gcmV0dXJucyBmYWxzeSwgcmV0dXJuLlxuLy8gVGhleSB3aWxsIHRoZW4gYmUgcmVzcG9uc2libGUgZm9yIGhhbmRsaW5nIHRoZSBldmVudC5cbmlmKHRoaXMuX2JwcyYmIXRoaXMuX2JwcyhzdGF0ZSkpe3JldHVybjt9dGhpcy5jaGFuZ2UoJ3JlcGxhY2VTdGF0ZScsdXJsLGFzLE9iamVjdC5hc3NpZ24oe30sb3B0aW9ucyx7c2hhbGxvdzpvcHRpb25zLnNoYWxsb3cmJnRoaXMuX3NoYWxsb3csbG9jYWxlOm9wdGlvbnMubG9jYWxlfHx0aGlzLmRlZmF1bHRMb2NhbGV9KSxmb3JjZWRTY3JvbGwpO307Ly8gcmVwcmVzZW50cyB0aGUgY3VycmVudCBjb21wb25lbnQga2V5XG50aGlzLnJvdXRlPSgwLF9ub3JtYWxpemVUcmFpbGluZ1NsYXNoLnJlbW92ZVBhdGhUcmFpbGluZ1NsYXNoKShfcGF0aG5hbWUpOy8vIHNldCB1cCB0aGUgY29tcG9uZW50IGNhY2hlIChieSByb3V0ZSBrZXlzKVxudGhpcy5jb21wb25lbnRzPXt9Oy8vIFdlIHNob3VsZCBub3Qga2VlcCB0aGUgY2FjaGUsIGlmIHRoZXJlJ3MgYW4gZXJyb3Jcbi8vIE90aGVyd2lzZSwgdGhpcyBjYXVzZSBpc3N1ZXMgd2hlbiB3aGVuIGdvaW5nIGJhY2sgYW5kXG4vLyBjb21lIGFnYWluIHRvIHRoZSBlcnJvcmVkIHBhZ2UuXG5pZihfcGF0aG5hbWUhPT0nL19lcnJvcicpe3RoaXMuY29tcG9uZW50c1t0aGlzLnJvdXRlXT17Q29tcG9uZW50LGluaXRpYWw6dHJ1ZSxwcm9wczppbml0aWFsUHJvcHMsZXJyLF9fTl9TU0c6aW5pdGlhbFByb3BzJiZpbml0aWFsUHJvcHMuX19OX1NTRyxfX05fU1NQOmluaXRpYWxQcm9wcyYmaW5pdGlhbFByb3BzLl9fTl9TU1B9O310aGlzLmNvbXBvbmVudHNbJy9fYXBwJ109e0NvbXBvbmVudDpBcHAsc3R5bGVTaGVldHM6Wy8qIC9fYXBwIGRvZXMgbm90IG5lZWQgaXRzIHN0eWxlc2hlZXRzIG1hbmFnZWQgKi9dfTsvLyBCYWNrd2FyZHMgY29tcGF0IGZvciBSb3V0ZXIucm91dGVyLmV2ZW50c1xuLy8gVE9ETzogU2hvdWxkIGJlIHJlbW92ZSB0aGUgZm9sbG93aW5nIG1ham9yIHZlcnNpb24gYXMgaXQgd2FzIG5ldmVyIGRvY3VtZW50ZWRcbnRoaXMuZXZlbnRzPVJvdXRlci5ldmVudHM7dGhpcy5wYWdlTG9hZGVyPXBhZ2VMb2FkZXI7dGhpcy5wYXRobmFtZT1fcGF0aG5hbWU7dGhpcy5xdWVyeT1fcXVlcnk7Ly8gaWYgYXV0byBwcmVyZW5kZXJlZCBhbmQgZHluYW1pYyByb3V0ZSB3YWl0IHRvIHVwZGF0ZSBhc1BhdGhcbi8vIHVudGlsIGFmdGVyIG1vdW50IHRvIHByZXZlbnQgaHlkcmF0aW9uIG1pc21hdGNoXG5jb25zdCBhdXRvRXhwb3J0RHluYW1pYz0oMCxfaXNEeW5hbWljLmlzRHluYW1pY1JvdXRlKShfcGF0aG5hbWUpJiZzZWxmLl9fTkVYVF9EQVRBX18uYXV0b0V4cG9ydDt0aGlzLmFzUGF0aD1hdXRvRXhwb3J0RHluYW1pYz9fcGF0aG5hbWU6X2FzO3RoaXMuYmFzZVBhdGg9YmFzZVBhdGg7dGhpcy5zdWI9c3Vic2NyaXB0aW9uO3RoaXMuY2xjPW51bGw7dGhpcy5fd3JhcEFwcD13cmFwQXBwOy8vIG1ha2Ugc3VyZSB0byBpZ25vcmUgZXh0cmEgcG9wU3RhdGUgaW4gc2FmYXJpIG9uIG5hdmlnYXRpbmdcbi8vIGJhY2sgZnJvbSBleHRlcm5hbCBzaXRlXG50aGlzLmlzU3NyPXRydWU7dGhpcy5pc0ZhbGxiYWNrPWlzRmFsbGJhY2s7dGhpcy5pc1JlYWR5PSEhKHNlbGYuX19ORVhUX0RBVEFfXy5nc3NwfHxzZWxmLl9fTkVYVF9EQVRBX18uZ2lwfHwhYXV0b0V4cG9ydER5bmFtaWMmJiFzZWxmLmxvY2F0aW9uLnNlYXJjaCYmIXByb2Nlc3MuZW52Ll9fTkVYVF9IQVNfUkVXUklURVMpO3RoaXMuaXNQcmV2aWV3PSEhaXNQcmV2aWV3O3RoaXMuaXNMb2NhbGVEb21haW49ZmFsc2U7aWYocHJvY2Vzcy5lbnYuX19ORVhUX0kxOE5fU1VQUE9SVCl7dGhpcy5sb2NhbGU9bG9jYWxlO3RoaXMubG9jYWxlcz1sb2NhbGVzO3RoaXMuZGVmYXVsdExvY2FsZT1kZWZhdWx0TG9jYWxlO3RoaXMuZG9tYWluTG9jYWxlcz1kb21haW5Mb2NhbGVzO3RoaXMuaXNMb2NhbGVEb21haW49ISFkZXRlY3REb21haW5Mb2NhbGUoZG9tYWluTG9jYWxlcyxzZWxmLmxvY2F0aW9uLmhvc3RuYW1lKTt9aWYodHlwZW9mIHdpbmRvdyE9PSd1bmRlZmluZWQnKXsvLyBtYWtlIHN1cmUgXCJhc1wiIGRvZXNuJ3Qgc3RhcnQgd2l0aCBkb3VibGUgc2xhc2hlcyBvciBlbHNlIGl0IGNhblxuLy8gdGhyb3cgYW4gZXJyb3IgYXMgaXQncyBjb25zaWRlcmVkIGludmFsaWRcbmlmKF9hcy5zdWJzdHIoMCwyKSE9PScvLycpey8vIGluIG9yZGVyIGZvciBgZS5zdGF0ZWAgdG8gd29yayBvbiB0aGUgYG9ucG9wc3RhdGVgIGV2ZW50XG4vLyB3ZSBoYXZlIHRvIHJlZ2lzdGVyIHRoZSBpbml0aWFsIHJvdXRlIHVwb24gaW5pdGlhbGl6YXRpb25cbmNvbnN0IG9wdGlvbnM9e2xvY2FsZX07b3B0aW9ucy5fc2hvdWxkUmVzb2x2ZUhyZWY9X2FzIT09X3BhdGhuYW1lO3RoaXMuY2hhbmdlU3RhdGUoJ3JlcGxhY2VTdGF0ZScsKDAsX3V0aWxzLmZvcm1hdFdpdGhWYWxpZGF0aW9uKSh7cGF0aG5hbWU6YWRkQmFzZVBhdGgoX3BhdGhuYW1lKSxxdWVyeTpfcXVlcnl9KSwoMCxfdXRpbHMuZ2V0VVJMKSgpLG9wdGlvbnMpO313aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcigncG9wc3RhdGUnLHRoaXMub25Qb3BTdGF0ZSk7Ly8gZW5hYmxlIGN1c3RvbSBzY3JvbGwgcmVzdG9yYXRpb24gaGFuZGxpbmcgd2hlbiBhdmFpbGFibGVcbi8vIG90aGVyd2lzZSBmYWxsYmFjayB0byBicm93c2VyJ3MgZGVmYXVsdCBoYW5kbGluZ1xuaWYocHJvY2Vzcy5lbnYuX19ORVhUX1NDUk9MTF9SRVNUT1JBVElPTil7aWYobWFudWFsU2Nyb2xsUmVzdG9yYXRpb24pe3dpbmRvdy5oaXN0b3J5LnNjcm9sbFJlc3RvcmF0aW9uPSdtYW51YWwnO319fX1yZWxvYWQoKXt3aW5kb3cubG9jYXRpb24ucmVsb2FkKCk7fS8qKlxuICAgKiBHbyBiYWNrIGluIGhpc3RvcnlcbiAgICovYmFjaygpe3dpbmRvdy5oaXN0b3J5LmJhY2soKTt9LyoqXG4gICAqIFBlcmZvcm1zIGEgYHB1c2hTdGF0ZWAgd2l0aCBhcmd1bWVudHNcbiAgICogQHBhcmFtIHVybCBvZiB0aGUgcm91dGVcbiAgICogQHBhcmFtIGFzIG1hc2tzIGB1cmxgIGZvciB0aGUgYnJvd3NlclxuICAgKiBAcGFyYW0gb3B0aW9ucyBvYmplY3QgeW91IGNhbiBkZWZpbmUgYHNoYWxsb3dgIGFuZCBvdGhlciBvcHRpb25zXG4gICAqL3B1c2godXJsLGFzLG9wdGlvbnM9e30pe2lmKHByb2Nlc3MuZW52Ll9fTkVYVF9TQ1JPTExfUkVTVE9SQVRJT04pey8vIFRPRE86IHJlbW92ZSBpbiB0aGUgZnV0dXJlIHdoZW4gd2UgdXBkYXRlIGhpc3RvcnkgYmVmb3JlIHJvdXRlIGNoYW5nZVxuLy8gaXMgY29tcGxldGUsIGFzIHRoZSBwb3BzdGF0ZSBldmVudCBzaG91bGQgaGFuZGxlIHRoaXMgY2FwdHVyZS5cbmlmKG1hbnVhbFNjcm9sbFJlc3RvcmF0aW9uKXt0cnl7Ly8gU25hcHNob3Qgc2Nyb2xsIHBvc2l0aW9uIHJpZ2h0IGJlZm9yZSBuYXZpZ2F0aW5nIHRvIGEgbmV3IHBhZ2U6XG5zZXNzaW9uU3RvcmFnZS5zZXRJdGVtKCdfX25leHRfc2Nyb2xsXycrdGhpcy5faWR4LEpTT04uc3RyaW5naWZ5KHt4OnNlbGYucGFnZVhPZmZzZXQseTpzZWxmLnBhZ2VZT2Zmc2V0fSkpO31jYXRjaChfdW51c2VkMyl7fX19Oyh7dXJsLGFzfT1wcmVwYXJlVXJsQXModGhpcyx1cmwsYXMpKTtyZXR1cm4gdGhpcy5jaGFuZ2UoJ3B1c2hTdGF0ZScsdXJsLGFzLG9wdGlvbnMpO30vKipcbiAgICogUGVyZm9ybXMgYSBgcmVwbGFjZVN0YXRlYCB3aXRoIGFyZ3VtZW50c1xuICAgKiBAcGFyYW0gdXJsIG9mIHRoZSByb3V0ZVxuICAgKiBAcGFyYW0gYXMgbWFza3MgYHVybGAgZm9yIHRoZSBicm93c2VyXG4gICAqIEBwYXJhbSBvcHRpb25zIG9iamVjdCB5b3UgY2FuIGRlZmluZSBgc2hhbGxvd2AgYW5kIG90aGVyIG9wdGlvbnNcbiAgICovcmVwbGFjZSh1cmwsYXMsb3B0aW9ucz17fSl7Oyh7dXJsLGFzfT1wcmVwYXJlVXJsQXModGhpcyx1cmwsYXMpKTtyZXR1cm4gdGhpcy5jaGFuZ2UoJ3JlcGxhY2VTdGF0ZScsdXJsLGFzLG9wdGlvbnMpO31hc3luYyBjaGFuZ2UobWV0aG9kLHVybCxhcyxvcHRpb25zLGZvcmNlZFNjcm9sbCl7aWYoIWlzTG9jYWxVUkwodXJsKSl7d2luZG93LmxvY2F0aW9uLmhyZWY9dXJsO3JldHVybiBmYWxzZTt9Y29uc3Qgc2hvdWxkUmVzb2x2ZUhyZWY9dXJsPT09YXN8fG9wdGlvbnMuX2h8fG9wdGlvbnMuX3Nob3VsZFJlc29sdmVIcmVmOy8vIGZvciBzdGF0aWMgcGFnZXMgd2l0aCBxdWVyeSBwYXJhbXMgaW4gdGhlIFVSTCB3ZSBkZWxheVxuLy8gbWFya2luZyB0aGUgcm91dGVyIHJlYWR5IHVudGlsIGFmdGVyIHRoZSBxdWVyeSBpcyB1cGRhdGVkXG5pZihvcHRpb25zLl9oKXt0aGlzLmlzUmVhZHk9dHJ1ZTt9bGV0IGxvY2FsZUNoYW5nZT1vcHRpb25zLmxvY2FsZSE9PXRoaXMubG9jYWxlO2lmKHByb2Nlc3MuZW52Ll9fTkVYVF9JMThOX1NVUFBPUlQpe3RoaXMubG9jYWxlPW9wdGlvbnMubG9jYWxlPT09ZmFsc2U/dGhpcy5kZWZhdWx0TG9jYWxlOm9wdGlvbnMubG9jYWxlfHx0aGlzLmxvY2FsZTtpZih0eXBlb2Ygb3B0aW9ucy5sb2NhbGU9PT0ndW5kZWZpbmVkJyl7b3B0aW9ucy5sb2NhbGU9dGhpcy5sb2NhbGU7fWNvbnN0IHBhcnNlZEFzPSgwLF9wYXJzZVJlbGF0aXZlVXJsLnBhcnNlUmVsYXRpdmVVcmwpKGhhc0Jhc2VQYXRoKGFzKT9kZWxCYXNlUGF0aChhcyk6YXMpO2NvbnN0IGxvY2FsZVBhdGhSZXN1bHQ9KDAsX25vcm1hbGl6ZUxvY2FsZVBhdGgubm9ybWFsaXplTG9jYWxlUGF0aCkocGFyc2VkQXMucGF0aG5hbWUsdGhpcy5sb2NhbGVzKTtpZihsb2NhbGVQYXRoUmVzdWx0LmRldGVjdGVkTG9jYWxlKXt0aGlzLmxvY2FsZT1sb2NhbGVQYXRoUmVzdWx0LmRldGVjdGVkTG9jYWxlO3BhcnNlZEFzLnBhdGhuYW1lPWFkZEJhc2VQYXRoKHBhcnNlZEFzLnBhdGhuYW1lKTthcz0oMCxfdXRpbHMuZm9ybWF0V2l0aFZhbGlkYXRpb24pKHBhcnNlZEFzKTt1cmw9YWRkQmFzZVBhdGgoKDAsX25vcm1hbGl6ZUxvY2FsZVBhdGgubm9ybWFsaXplTG9jYWxlUGF0aCkoaGFzQmFzZVBhdGgodXJsKT9kZWxCYXNlUGF0aCh1cmwpOnVybCx0aGlzLmxvY2FsZXMpLnBhdGhuYW1lKTt9bGV0IGRpZE5hdmlnYXRlPWZhbHNlOy8vIHdlIG5lZWQgdG8gd3JhcCB0aGlzIGluIHRoZSBlbnYgY2hlY2sgYWdhaW4gc2luY2UgcmVnZW5lcmF0b3IgcnVudGltZVxuLy8gbW92ZXMgdGhpcyBvbiBpdHMgb3duIGR1ZSB0byB0aGUgcmV0dXJuXG5pZihwcm9jZXNzLmVudi5fX05FWFRfSTE4Tl9TVVBQT1JUKXt2YXIgX3RoaXMkbG9jYWxlczsvLyBpZiB0aGUgbG9jYWxlIGlzbid0IGNvbmZpZ3VyZWQgaGFyZCBuYXZpZ2F0ZSB0byBzaG93IDQwNCBwYWdlXG5pZighKChfdGhpcyRsb2NhbGVzPXRoaXMubG9jYWxlcykhPW51bGwmJl90aGlzJGxvY2FsZXMuaW5jbHVkZXModGhpcy5sb2NhbGUpKSl7cGFyc2VkQXMucGF0aG5hbWU9YWRkTG9jYWxlKHBhcnNlZEFzLnBhdGhuYW1lLHRoaXMubG9jYWxlKTt3aW5kb3cubG9jYXRpb24uaHJlZj0oMCxfdXRpbHMuZm9ybWF0V2l0aFZhbGlkYXRpb24pKHBhcnNlZEFzKTsvLyB0aGlzIHdhcyBwcmV2aW91c2x5IGEgcmV0dXJuIGJ1dCB3YXMgcmVtb3ZlZCBpbiBmYXZvclxuLy8gb2YgYmV0dGVyIGRlYWQgY29kZSBlbGltaW5hdGlvbiB3aXRoIHJlZ2VuZXJhdG9yIHJ1bnRpbWVcbmRpZE5hdmlnYXRlPXRydWU7fX1jb25zdCBkZXRlY3RlZERvbWFpbj1kZXRlY3REb21haW5Mb2NhbGUodGhpcy5kb21haW5Mb2NhbGVzLHVuZGVmaW5lZCx0aGlzLmxvY2FsZSk7Ly8gd2UgbmVlZCB0byB3cmFwIHRoaXMgaW4gdGhlIGVudiBjaGVjayBhZ2FpbiBzaW5jZSByZWdlbmVyYXRvciBydW50aW1lXG4vLyBtb3ZlcyB0aGlzIG9uIGl0cyBvd24gZHVlIHRvIHRoZSByZXR1cm5cbmlmKHByb2Nlc3MuZW52Ll9fTkVYVF9JMThOX1NVUFBPUlQpey8vIGlmIHdlIGFyZSBuYXZpZ2F0aW5nIHRvIGEgZG9tYWluIGxvY2FsZSBlbnN1cmUgd2UgcmVkaXJlY3QgdG8gdGhlXG4vLyBjb3JyZWN0IGRvbWFpblxuaWYoIWRpZE5hdmlnYXRlJiZkZXRlY3RlZERvbWFpbiYmdGhpcy5pc0xvY2FsZURvbWFpbiYmc2VsZi5sb2NhdGlvbi5ob3N0bmFtZSE9PWRldGVjdGVkRG9tYWluLmRvbWFpbil7Y29uc3QgYXNOb0Jhc2VQYXRoPWRlbEJhc2VQYXRoKGFzKTt3aW5kb3cubG9jYXRpb24uaHJlZj1gaHR0cCR7ZGV0ZWN0ZWREb21haW4uaHR0cD8nJzoncyd9Oi8vJHtkZXRlY3RlZERvbWFpbi5kb21haW59JHthZGRCYXNlUGF0aChgJHt0aGlzLmxvY2FsZT09PWRldGVjdGVkRG9tYWluLmRlZmF1bHRMb2NhbGU/Jyc6YC8ke3RoaXMubG9jYWxlfWB9JHthc05vQmFzZVBhdGg9PT0nLyc/Jyc6YXNOb0Jhc2VQYXRofWB8fCcvJyl9YDsvLyB0aGlzIHdhcyBwcmV2aW91c2x5IGEgcmV0dXJuIGJ1dCB3YXMgcmVtb3ZlZCBpbiBmYXZvclxuLy8gb2YgYmV0dGVyIGRlYWQgY29kZSBlbGltaW5hdGlvbiB3aXRoIHJlZ2VuZXJhdG9yIHJ1bnRpbWVcbmRpZE5hdmlnYXRlPXRydWU7fX1pZihkaWROYXZpZ2F0ZSl7cmV0dXJuIG5ldyBQcm9taXNlKCgpPT57fSk7fX1pZighb3B0aW9ucy5faCl7dGhpcy5pc1Nzcj1mYWxzZTt9Ly8gbWFya2luZyByb3V0ZSBjaGFuZ2VzIGFzIGEgbmF2aWdhdGlvbiBzdGFydCBlbnRyeVxuaWYoX3V0aWxzLlNUKXtwZXJmb3JtYW5jZS5tYXJrKCdyb3V0ZUNoYW5nZScpO31jb25zdHtzaGFsbG93PWZhbHNlfT1vcHRpb25zO2NvbnN0IHJvdXRlUHJvcHM9e3NoYWxsb3d9O2lmKHRoaXMuX2luRmxpZ2h0Um91dGUpe3RoaXMuYWJvcnRDb21wb25lbnRMb2FkKHRoaXMuX2luRmxpZ2h0Um91dGUscm91dGVQcm9wcyk7fWFzPWFkZEJhc2VQYXRoKGFkZExvY2FsZShoYXNCYXNlUGF0aChhcyk/ZGVsQmFzZVBhdGgoYXMpOmFzLG9wdGlvbnMubG9jYWxlLHRoaXMuZGVmYXVsdExvY2FsZSkpO2NvbnN0IGNsZWFuZWRBcz1kZWxMb2NhbGUoaGFzQmFzZVBhdGgoYXMpP2RlbEJhc2VQYXRoKGFzKTphcyx0aGlzLmxvY2FsZSk7dGhpcy5faW5GbGlnaHRSb3V0ZT1hczsvLyBJZiB0aGUgdXJsIGNoYW5nZSBpcyBvbmx5IHJlbGF0ZWQgdG8gYSBoYXNoIGNoYW5nZVxuLy8gV2Ugc2hvdWxkIG5vdCBwcm9jZWVkLiBXZSBzaG91bGQgb25seSBjaGFuZ2UgdGhlIHN0YXRlLlxuLy8gV0FSTklORzogYF9oYCBpcyBhbiBpbnRlcm5hbCBvcHRpb24gZm9yIGhhbmRpbmcgTmV4dC5qcyBjbGllbnQtc2lkZVxuLy8gaHlkcmF0aW9uLiBZb3VyIGFwcCBzaG91bGQgX25ldmVyXyB1c2UgdGhpcyBwcm9wZXJ0eS4gSXQgbWF5IGNoYW5nZSBhdFxuLy8gYW55IHRpbWUgd2l0aG91dCBub3RpY2UuXG5pZighb3B0aW9ucy5faCYmdGhpcy5vbmx5QUhhc2hDaGFuZ2UoY2xlYW5lZEFzKSl7dGhpcy5hc1BhdGg9Y2xlYW5lZEFzO1JvdXRlci5ldmVudHMuZW1pdCgnaGFzaENoYW5nZVN0YXJ0Jyxhcyxyb3V0ZVByb3BzKTsvLyBUT0RPOiBkbyB3ZSBuZWVkIHRoZSByZXNvbHZlZCBocmVmIHdoZW4gb25seSBhIGhhc2ggY2hhbmdlP1xudGhpcy5jaGFuZ2VTdGF0ZShtZXRob2QsdXJsLGFzLG9wdGlvbnMpO3RoaXMuc2Nyb2xsVG9IYXNoKGNsZWFuZWRBcyk7dGhpcy5ub3RpZnkodGhpcy5jb21wb25lbnRzW3RoaXMucm91dGVdLG51bGwpO1JvdXRlci5ldmVudHMuZW1pdCgnaGFzaENoYW5nZUNvbXBsZXRlJyxhcyxyb3V0ZVByb3BzKTtyZXR1cm4gdHJ1ZTt9bGV0IHBhcnNlZD0oMCxfcGFyc2VSZWxhdGl2ZVVybC5wYXJzZVJlbGF0aXZlVXJsKSh1cmwpO2xldHtwYXRobmFtZSxxdWVyeX09cGFyc2VkOy8vIFRoZSBidWlsZCBtYW5pZmVzdCBuZWVkcyB0byBiZSBsb2FkZWQgYmVmb3JlIGF1dG8tc3RhdGljIGR5bmFtaWMgcGFnZXNcbi8vIGdldCB0aGVpciBxdWVyeSBwYXJhbWV0ZXJzIHRvIGFsbG93IGVuc3VyaW5nIHRoZXkgY2FuIGJlIHBhcnNlZCBwcm9wZXJseVxuLy8gd2hlbiByZXdyaXR0ZW4gdG9cbmxldCBwYWdlcyxyZXdyaXRlczt0cnl7cGFnZXM9YXdhaXQgdGhpcy5wYWdlTG9hZGVyLmdldFBhZ2VMaXN0KCk7KHtfX3Jld3JpdGVzOnJld3JpdGVzfT1hd2FpdCgwLF9yb3V0ZUxvYWRlci5nZXRDbGllbnRCdWlsZE1hbmlmZXN0KSgpKTt9Y2F0Y2goZXJyKXsvLyBJZiB3ZSBmYWlsIHRvIHJlc29sdmUgdGhlIHBhZ2UgbGlzdCBvciBjbGllbnQtYnVpbGQgbWFuaWZlc3QsIHdlIG11c3Rcbi8vIGRvIGEgc2VydmVyLXNpZGUgdHJhbnNpdGlvbjpcbndpbmRvdy5sb2NhdGlvbi5ocmVmPWFzO3JldHVybiBmYWxzZTt9Ly8gSWYgYXNrZWQgdG8gY2hhbmdlIHRoZSBjdXJyZW50IFVSTCB3ZSBzaG91bGQgcmVsb2FkIHRoZSBjdXJyZW50IHBhZ2Vcbi8vIChub3QgbG9jYXRpb24ucmVsb2FkKCkgYnV0IHJlbG9hZCBnZXRJbml0aWFsUHJvcHMgYW5kIG90aGVyIE5leHQuanMgc3R1ZmZzKVxuLy8gV2UgYWxzbyBuZWVkIHRvIHNldCB0aGUgbWV0aG9kID0gcmVwbGFjZVN0YXRlIGFsd2F5c1xuLy8gYXMgdGhpcyBzaG91bGQgbm90IGdvIGludG8gdGhlIGhpc3RvcnkgKFRoYXQncyBob3cgYnJvd3NlcnMgd29yaylcbi8vIFdlIHNob3VsZCBjb21wYXJlIHRoZSBuZXcgYXNQYXRoIHRvIHRoZSBjdXJyZW50IGFzUGF0aCwgbm90IHRoZSB1cmxcbmlmKCF0aGlzLnVybElzTmV3KGNsZWFuZWRBcykmJiFsb2NhbGVDaGFuZ2Upe21ldGhvZD0ncmVwbGFjZVN0YXRlJzt9Ly8gd2UgbmVlZCB0byByZXNvbHZlIHRoZSBhcyB2YWx1ZSB1c2luZyByZXdyaXRlcyBmb3IgZHluYW1pYyBTU0dcbi8vIHBhZ2VzIHRvIGFsbG93IGJ1aWxkaW5nIHRoZSBkYXRhIFVSTCBjb3JyZWN0bHlcbmxldCByZXNvbHZlZEFzPWFzOy8vIHVybCBhbmQgYXMgc2hvdWxkIGFsd2F5cyBiZSBwcmVmaXhlZCB3aXRoIGJhc2VQYXRoIGJ5IHRoaXNcbi8vIHBvaW50IGJ5IGVpdGhlciBuZXh0L2xpbmsgb3Igcm91dGVyLnB1c2gvcmVwbGFjZSBzbyBzdHJpcCB0aGVcbi8vIGJhc2VQYXRoIGZyb20gdGhlIHBhdGhuYW1lIHRvIG1hdGNoIHRoZSBwYWdlcyBkaXIgMS10by0xXG5wYXRobmFtZT1wYXRobmFtZT8oMCxfbm9ybWFsaXplVHJhaWxpbmdTbGFzaC5yZW1vdmVQYXRoVHJhaWxpbmdTbGFzaCkoZGVsQmFzZVBhdGgocGF0aG5hbWUpKTpwYXRobmFtZTtpZihzaG91bGRSZXNvbHZlSHJlZiYmcGF0aG5hbWUhPT0nL19lcnJvcicpeztvcHRpb25zLl9zaG91bGRSZXNvbHZlSHJlZj10cnVlO2lmKHByb2Nlc3MuZW52Ll9fTkVYVF9IQVNfUkVXUklURVMmJmFzLnN0YXJ0c1dpdGgoJy8nKSl7Y29uc3QgcmV3cml0ZXNSZXN1bHQ9KDAsX3Jlc29sdmVSZXdyaXRlcy5kZWZhdWx0KShhZGRCYXNlUGF0aChhZGRMb2NhbGUoY2xlYW5lZEFzLHRoaXMubG9jYWxlKSkscGFnZXMscmV3cml0ZXMscXVlcnkscD0+cmVzb2x2ZUR5bmFtaWNSb3V0ZShwLHBhZ2VzKSx0aGlzLmxvY2FsZXMpO3Jlc29sdmVkQXM9cmV3cml0ZXNSZXN1bHQuYXNQYXRoO2lmKHJld3JpdGVzUmVzdWx0Lm1hdGNoZWRQYWdlJiZyZXdyaXRlc1Jlc3VsdC5yZXNvbHZlZEhyZWYpey8vIGlmIHRoaXMgZGlyZWN0bHkgbWF0Y2hlcyBhIHBhZ2Ugd2UgbmVlZCB0byB1cGRhdGUgdGhlIGhyZWYgdG9cbi8vIGFsbG93IHRoZSBjb3JyZWN0IHBhZ2UgY2h1bmsgdG8gYmUgbG9hZGVkXG5wYXRobmFtZT1yZXdyaXRlc1Jlc3VsdC5yZXNvbHZlZEhyZWY7cGFyc2VkLnBhdGhuYW1lPWFkZEJhc2VQYXRoKHBhdGhuYW1lKTt1cmw9KDAsX3V0aWxzLmZvcm1hdFdpdGhWYWxpZGF0aW9uKShwYXJzZWQpO319ZWxzZXtwYXJzZWQucGF0aG5hbWU9cmVzb2x2ZUR5bmFtaWNSb3V0ZShwYXRobmFtZSxwYWdlcyk7aWYocGFyc2VkLnBhdGhuYW1lIT09cGF0aG5hbWUpe3BhdGhuYW1lPXBhcnNlZC5wYXRobmFtZTtwYXJzZWQucGF0aG5hbWU9YWRkQmFzZVBhdGgocGF0aG5hbWUpO3VybD0oMCxfdXRpbHMuZm9ybWF0V2l0aFZhbGlkYXRpb24pKHBhcnNlZCk7fX19Y29uc3Qgcm91dGU9KDAsX25vcm1hbGl6ZVRyYWlsaW5nU2xhc2gucmVtb3ZlUGF0aFRyYWlsaW5nU2xhc2gpKHBhdGhuYW1lKTtpZighaXNMb2NhbFVSTChhcykpe2lmKHByb2Nlc3MuZW52Lk5PREVfRU5WIT09J3Byb2R1Y3Rpb24nKXt0aHJvdyBuZXcgRXJyb3IoYEludmFsaWQgaHJlZjogXCIke3VybH1cIiBhbmQgYXM6IFwiJHthc31cIiwgcmVjZWl2ZWQgcmVsYXRpdmUgaHJlZiBhbmQgZXh0ZXJuYWwgYXNgK2BcXG5TZWUgbW9yZSBpbmZvOiBodHRwczovL25leHRqcy5vcmcvZG9jcy9tZXNzYWdlcy9pbnZhbGlkLXJlbGF0aXZlLXVybC1leHRlcm5hbC1hc2ApO313aW5kb3cubG9jYXRpb24uaHJlZj1hcztyZXR1cm4gZmFsc2U7fXJlc29sdmVkQXM9ZGVsTG9jYWxlKGRlbEJhc2VQYXRoKHJlc29sdmVkQXMpLHRoaXMubG9jYWxlKTtpZigoMCxfaXNEeW5hbWljLmlzRHluYW1pY1JvdXRlKShyb3V0ZSkpe2NvbnN0IHBhcnNlZEFzPSgwLF9wYXJzZVJlbGF0aXZlVXJsLnBhcnNlUmVsYXRpdmVVcmwpKHJlc29sdmVkQXMpO2NvbnN0IGFzUGF0aG5hbWU9cGFyc2VkQXMucGF0aG5hbWU7Y29uc3Qgcm91dGVSZWdleD0oMCxfcm91dGVSZWdleC5nZXRSb3V0ZVJlZ2V4KShyb3V0ZSk7Y29uc3Qgcm91dGVNYXRjaD0oMCxfcm91dGVNYXRjaGVyLmdldFJvdXRlTWF0Y2hlcikocm91dGVSZWdleCkoYXNQYXRobmFtZSk7Y29uc3Qgc2hvdWxkSW50ZXJwb2xhdGU9cm91dGU9PT1hc1BhdGhuYW1lO2NvbnN0IGludGVycG9sYXRlZEFzPXNob3VsZEludGVycG9sYXRlP2ludGVycG9sYXRlQXMocm91dGUsYXNQYXRobmFtZSxxdWVyeSk6e307aWYoIXJvdXRlTWF0Y2h8fHNob3VsZEludGVycG9sYXRlJiYhaW50ZXJwb2xhdGVkQXMucmVzdWx0KXtjb25zdCBtaXNzaW5nUGFyYW1zPU9iamVjdC5rZXlzKHJvdXRlUmVnZXguZ3JvdXBzKS5maWx0ZXIocGFyYW09PiFxdWVyeVtwYXJhbV0pO2lmKG1pc3NpbmdQYXJhbXMubGVuZ3RoPjApe2lmKHByb2Nlc3MuZW52Lk5PREVfRU5WIT09J3Byb2R1Y3Rpb24nKXtjb25zb2xlLndhcm4oYCR7c2hvdWxkSW50ZXJwb2xhdGU/YEludGVycG9sYXRpbmcgaHJlZmA6YE1pc21hdGNoaW5nIFxcYGFzXFxgIGFuZCBcXGBocmVmXFxgYH0gZmFpbGVkIHRvIG1hbnVhbGx5IHByb3ZpZGUgYCtgdGhlIHBhcmFtczogJHttaXNzaW5nUGFyYW1zLmpvaW4oJywgJyl9IGluIHRoZSBcXGBocmVmXFxgJ3MgXFxgcXVlcnlcXGBgKTt9dGhyb3cgbmV3IEVycm9yKChzaG91bGRJbnRlcnBvbGF0ZT9gVGhlIHByb3ZpZGVkIFxcYGhyZWZcXGAgKCR7dXJsfSkgdmFsdWUgaXMgbWlzc2luZyBxdWVyeSB2YWx1ZXMgKCR7bWlzc2luZ1BhcmFtcy5qb2luKCcsICcpfSkgdG8gYmUgaW50ZXJwb2xhdGVkIHByb3Blcmx5LiBgOmBUaGUgcHJvdmlkZWQgXFxgYXNcXGAgdmFsdWUgKCR7YXNQYXRobmFtZX0pIGlzIGluY29tcGF0aWJsZSB3aXRoIHRoZSBcXGBocmVmXFxgIHZhbHVlICgke3JvdXRlfSkuIGApK2BSZWFkIG1vcmU6IGh0dHBzOi8vbmV4dGpzLm9yZy9kb2NzL21lc3NhZ2VzLyR7c2hvdWxkSW50ZXJwb2xhdGU/J2hyZWYtaW50ZXJwb2xhdGlvbi1mYWlsZWQnOidpbmNvbXBhdGlibGUtaHJlZi1hcyd9YCk7fX1lbHNlIGlmKHNob3VsZEludGVycG9sYXRlKXthcz0oMCxfdXRpbHMuZm9ybWF0V2l0aFZhbGlkYXRpb24pKE9iamVjdC5hc3NpZ24oe30scGFyc2VkQXMse3BhdGhuYW1lOmludGVycG9sYXRlZEFzLnJlc3VsdCxxdWVyeTpvbWl0UGFybXNGcm9tUXVlcnkocXVlcnksaW50ZXJwb2xhdGVkQXMucGFyYW1zKX0pKTt9ZWxzZXsvLyBNZXJnZSBwYXJhbXMgaW50byBgcXVlcnlgLCBvdmVyd3JpdGluZyBhbnkgc3BlY2lmaWVkIGluIHNlYXJjaFxuT2JqZWN0LmFzc2lnbihxdWVyeSxyb3V0ZU1hdGNoKTt9fVJvdXRlci5ldmVudHMuZW1pdCgncm91dGVDaGFuZ2VTdGFydCcsYXMscm91dGVQcm9wcyk7dHJ5e3ZhciBfc2VsZiRfX05FWFRfREFUQV9fJHAsX3NlbGYkX19ORVhUX0RBVEFfXyRwMixfb3B0aW9ucyRzY3JvbGw7bGV0IHJvdXRlSW5mbz1hd2FpdCB0aGlzLmdldFJvdXRlSW5mbyhyb3V0ZSxwYXRobmFtZSxxdWVyeSxhcyxyZXNvbHZlZEFzLHJvdXRlUHJvcHMpO2xldHtlcnJvcixwcm9wcyxfX05fU1NHLF9fTl9TU1B9PXJvdXRlSW5mbzsvLyBoYW5kbGUgcmVkaXJlY3Qgb24gY2xpZW50LXRyYW5zaXRpb25cbmlmKChfX05fU1NHfHxfX05fU1NQKSYmcHJvcHMpe2lmKHByb3BzLnBhZ2VQcm9wcyYmcHJvcHMucGFnZVByb3BzLl9fTl9SRURJUkVDVCl7Y29uc3QgZGVzdGluYXRpb249cHJvcHMucGFnZVByb3BzLl9fTl9SRURJUkVDVDsvLyBjaGVjayBpZiBkZXN0aW5hdGlvbiBpcyBpbnRlcm5hbCAocmVzb2x2ZXMgdG8gYSBwYWdlKSBhbmQgYXR0ZW1wdFxuLy8gY2xpZW50LW5hdmlnYXRpb24gaWYgaXQgaXMgZmFsbGluZyBiYWNrIHRvIGhhcmQgbmF2aWdhdGlvbiBpZlxuLy8gaXQncyBub3RcbmlmKGRlc3RpbmF0aW9uLnN0YXJ0c1dpdGgoJy8nKSl7Y29uc3QgcGFyc2VkSHJlZj0oMCxfcGFyc2VSZWxhdGl2ZVVybC5wYXJzZVJlbGF0aXZlVXJsKShkZXN0aW5hdGlvbik7cGFyc2VkSHJlZi5wYXRobmFtZT1yZXNvbHZlRHluYW1pY1JvdXRlKHBhcnNlZEhyZWYucGF0aG5hbWUscGFnZXMpO2NvbnN0e3VybDpuZXdVcmwsYXM6bmV3QXN9PXByZXBhcmVVcmxBcyh0aGlzLGRlc3RpbmF0aW9uLGRlc3RpbmF0aW9uKTtyZXR1cm4gdGhpcy5jaGFuZ2UobWV0aG9kLG5ld1VybCxuZXdBcyxvcHRpb25zKTt9d2luZG93LmxvY2F0aW9uLmhyZWY9ZGVzdGluYXRpb247cmV0dXJuIG5ldyBQcm9taXNlKCgpPT57fSk7fXRoaXMuaXNQcmV2aWV3PSEhcHJvcHMuX19OX1BSRVZJRVc7Ly8gaGFuZGxlIFNTRyBkYXRhIDQwNFxuaWYocHJvcHMubm90Rm91bmQ9PT1TU0dfREFUQV9OT1RfRk9VTkQpe2xldCBub3RGb3VuZFJvdXRlO3RyeXthd2FpdCB0aGlzLmZldGNoQ29tcG9uZW50KCcvNDA0Jyk7bm90Rm91bmRSb3V0ZT0nLzQwNCc7fWNhdGNoKF8pe25vdEZvdW5kUm91dGU9Jy9fZXJyb3InO31yb3V0ZUluZm89YXdhaXQgdGhpcy5nZXRSb3V0ZUluZm8obm90Rm91bmRSb3V0ZSxub3RGb3VuZFJvdXRlLHF1ZXJ5LGFzLHJlc29sdmVkQXMse3NoYWxsb3c6ZmFsc2V9KTt9fVJvdXRlci5ldmVudHMuZW1pdCgnYmVmb3JlSGlzdG9yeUNoYW5nZScsYXMscm91dGVQcm9wcyk7dGhpcy5jaGFuZ2VTdGF0ZShtZXRob2QsdXJsLGFzLG9wdGlvbnMpO2lmKHByb2Nlc3MuZW52Lk5PREVfRU5WIT09J3Byb2R1Y3Rpb24nKXtjb25zdCBhcHBDb21wPXRoaXMuY29tcG9uZW50c1snL19hcHAnXS5Db21wb25lbnQ7d2luZG93Lm5leHQuaXNQcmVyZW5kZXJlZD1hcHBDb21wLmdldEluaXRpYWxQcm9wcz09PWFwcENvbXAub3JpZ0dldEluaXRpYWxQcm9wcyYmIXJvdXRlSW5mby5Db21wb25lbnQuZ2V0SW5pdGlhbFByb3BzO31pZihvcHRpb25zLl9oJiZwYXRobmFtZT09PScvX2Vycm9yJyYmKChfc2VsZiRfX05FWFRfREFUQV9fJHA9c2VsZi5fX05FWFRfREFUQV9fLnByb3BzKT09bnVsbD92b2lkIDA6KF9zZWxmJF9fTkVYVF9EQVRBX18kcDI9X3NlbGYkX19ORVhUX0RBVEFfXyRwLnBhZ2VQcm9wcyk9PW51bGw/dm9pZCAwOl9zZWxmJF9fTkVYVF9EQVRBX18kcDIuc3RhdHVzQ29kZSk9PT01MDAmJnByb3BzIT1udWxsJiZwcm9wcy5wYWdlUHJvcHMpey8vIGVuc3VyZSBzdGF0dXNDb2RlIGlzIHN0aWxsIGNvcnJlY3QgZm9yIHN0YXRpYyA1MDAgcGFnZVxuLy8gd2hlbiB1cGRhdGluZyBxdWVyeSBpbmZvcm1hdGlvblxucHJvcHMucGFnZVByb3BzLnN0YXR1c0NvZGU9NTAwO30vLyBzaGFsbG93IHJvdXRpbmcgaXMgb25seSBhbGxvd2VkIGZvciBzYW1lIHBhZ2UgVVJMIGNoYW5nZXMuXG5jb25zdCBpc1ZhbGlkU2hhbGxvd1JvdXRlPW9wdGlvbnMuc2hhbGxvdyYmdGhpcy5yb3V0ZT09PXJvdXRlO2NvbnN0IHNob3VsZFNjcm9sbD0oX29wdGlvbnMkc2Nyb2xsPW9wdGlvbnMuc2Nyb2xsKSE9bnVsbD9fb3B0aW9ucyRzY3JvbGw6IWlzVmFsaWRTaGFsbG93Um91dGU7Y29uc3QgcmVzZXRTY3JvbGw9c2hvdWxkU2Nyb2xsP3t4OjAseTowfTpudWxsO2F3YWl0IHRoaXMuc2V0KHJvdXRlLHBhdGhuYW1lLHF1ZXJ5LGNsZWFuZWRBcyxyb3V0ZUluZm8sZm9yY2VkU2Nyb2xsIT1udWxsP2ZvcmNlZFNjcm9sbDpyZXNldFNjcm9sbCkuY2F0Y2goZT0+e2lmKGUuY2FuY2VsbGVkKWVycm9yPWVycm9yfHxlO2Vsc2UgdGhyb3cgZTt9KTtpZihlcnJvcil7Um91dGVyLmV2ZW50cy5lbWl0KCdyb3V0ZUNoYW5nZUVycm9yJyxlcnJvcixjbGVhbmVkQXMscm91dGVQcm9wcyk7dGhyb3cgZXJyb3I7fWlmKHByb2Nlc3MuZW52Ll9fTkVYVF9JMThOX1NVUFBPUlQpe2lmKHRoaXMubG9jYWxlKXtkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQubGFuZz10aGlzLmxvY2FsZTt9fVJvdXRlci5ldmVudHMuZW1pdCgncm91dGVDaGFuZ2VDb21wbGV0ZScsYXMscm91dGVQcm9wcyk7cmV0dXJuIHRydWU7fWNhdGNoKGVycil7aWYoZXJyLmNhbmNlbGxlZCl7cmV0dXJuIGZhbHNlO310aHJvdyBlcnI7fX1jaGFuZ2VTdGF0ZShtZXRob2QsdXJsLGFzLG9wdGlvbnM9e30pe2lmKHByb2Nlc3MuZW52Lk5PREVfRU5WIT09J3Byb2R1Y3Rpb24nKXtpZih0eXBlb2Ygd2luZG93Lmhpc3Rvcnk9PT0ndW5kZWZpbmVkJyl7Y29uc29sZS5lcnJvcihgV2FybmluZzogd2luZG93Lmhpc3RvcnkgaXMgbm90IGF2YWlsYWJsZS5gKTtyZXR1cm47fWlmKHR5cGVvZiB3aW5kb3cuaGlzdG9yeVttZXRob2RdPT09J3VuZGVmaW5lZCcpe2NvbnNvbGUuZXJyb3IoYFdhcm5pbmc6IHdpbmRvdy5oaXN0b3J5LiR7bWV0aG9kfSBpcyBub3QgYXZhaWxhYmxlYCk7cmV0dXJuO319aWYobWV0aG9kIT09J3B1c2hTdGF0ZSd8fCgwLF91dGlscy5nZXRVUkwpKCkhPT1hcyl7dGhpcy5fc2hhbGxvdz1vcHRpb25zLnNoYWxsb3c7d2luZG93Lmhpc3RvcnlbbWV0aG9kXSh7dXJsLGFzLG9wdGlvbnMsX19OOnRydWUsaWR4OnRoaXMuX2lkeD1tZXRob2QhPT0ncHVzaFN0YXRlJz90aGlzLl9pZHg6dGhpcy5faWR4KzF9LC8vIE1vc3QgYnJvd3NlcnMgY3VycmVudGx5IGlnbm9yZXMgdGhpcyBwYXJhbWV0ZXIsIGFsdGhvdWdoIHRoZXkgbWF5IHVzZSBpdCBpbiB0aGUgZnV0dXJlLlxuLy8gUGFzc2luZyB0aGUgZW1wdHkgc3RyaW5nIGhlcmUgc2hvdWxkIGJlIHNhZmUgYWdhaW5zdCBmdXR1cmUgY2hhbmdlcyB0byB0aGUgbWV0aG9kLlxuLy8gaHR0cHM6Ly9kZXZlbG9wZXIubW96aWxsYS5vcmcvZW4tVVMvZG9jcy9XZWIvQVBJL0hpc3RvcnkvcmVwbGFjZVN0YXRlXG4nJyxhcyk7fX1hc3luYyBoYW5kbGVSb3V0ZUluZm9FcnJvcihlcnIscGF0aG5hbWUscXVlcnksYXMscm91dGVQcm9wcyxsb2FkRXJyb3JGYWlsKXtpZihlcnIuY2FuY2VsbGVkKXsvLyBidWJibGUgdXAgY2FuY2VsbGF0aW9uIGVycm9yc1xudGhyb3cgZXJyO31pZigoMCxfcm91dGVMb2FkZXIuaXNBc3NldEVycm9yKShlcnIpfHxsb2FkRXJyb3JGYWlsKXtSb3V0ZXIuZXZlbnRzLmVtaXQoJ3JvdXRlQ2hhbmdlRXJyb3InLGVycixhcyxyb3V0ZVByb3BzKTsvLyBJZiB3ZSBjYW4ndCBsb2FkIHRoZSBwYWdlIGl0IGNvdWxkIGJlIG9uZSBvZiBmb2xsb3dpbmcgcmVhc29uc1xuLy8gIDEuIFBhZ2UgZG9lc24ndCBleGlzdHNcbi8vICAyLiBQYWdlIGRvZXMgZXhpc3QgaW4gYSBkaWZmZXJlbnQgem9uZVxuLy8gIDMuIEludGVybmFsIGVycm9yIHdoaWxlIGxvYWRpbmcgdGhlIHBhZ2Vcbi8vIFNvLCBkb2luZyBhIGhhcmQgcmVsb2FkIGlzIHRoZSBwcm9wZXIgd2F5IHRvIGRlYWwgd2l0aCB0aGlzLlxud2luZG93LmxvY2F0aW9uLmhyZWY9YXM7Ly8gQ2hhbmdpbmcgdGhlIFVSTCBkb2Vzbid0IGJsb2NrIGV4ZWN1dGluZyB0aGUgY3VycmVudCBjb2RlIHBhdGguXG4vLyBTbyBsZXQncyB0aHJvdyBhIGNhbmNlbGxhdGlvbiBlcnJvciBzdG9wIHRoZSByb3V0aW5nIGxvZ2ljLlxudGhyb3cgYnVpbGRDYW5jZWxsYXRpb25FcnJvcigpO310cnl7bGV0IENvbXBvbmVudDtsZXQgc3R5bGVTaGVldHM7bGV0IHByb3BzO2lmKHR5cGVvZiBDb21wb25lbnQ9PT0ndW5kZWZpbmVkJ3x8dHlwZW9mIHN0eWxlU2hlZXRzPT09J3VuZGVmaW5lZCcpezsoe3BhZ2U6Q29tcG9uZW50LHN0eWxlU2hlZXRzfT1hd2FpdCB0aGlzLmZldGNoQ29tcG9uZW50KCcvX2Vycm9yJykpO31jb25zdCByb3V0ZUluZm89e3Byb3BzLENvbXBvbmVudCxzdHlsZVNoZWV0cyxlcnIsZXJyb3I6ZXJyfTtpZighcm91dGVJbmZvLnByb3BzKXt0cnl7cm91dGVJbmZvLnByb3BzPWF3YWl0IHRoaXMuZ2V0SW5pdGlhbFByb3BzKENvbXBvbmVudCx7ZXJyLHBhdGhuYW1lLHF1ZXJ5fSk7fWNhdGNoKGdpcEVycil7Y29uc29sZS5lcnJvcignRXJyb3IgaW4gZXJyb3IgcGFnZSBgZ2V0SW5pdGlhbFByb3BzYDogJyxnaXBFcnIpO3JvdXRlSW5mby5wcm9wcz17fTt9fXJldHVybiByb3V0ZUluZm87fWNhdGNoKHJvdXRlSW5mb0Vycil7cmV0dXJuIHRoaXMuaGFuZGxlUm91dGVJbmZvRXJyb3Iocm91dGVJbmZvRXJyLHBhdGhuYW1lLHF1ZXJ5LGFzLHJvdXRlUHJvcHMsdHJ1ZSk7fX1hc3luYyBnZXRSb3V0ZUluZm8ocm91dGUscGF0aG5hbWUscXVlcnksYXMscmVzb2x2ZWRBcyxyb3V0ZVByb3BzKXt0cnl7Y29uc3QgZXhpc3RpbmdSb3V0ZUluZm89dGhpcy5jb21wb25lbnRzW3JvdXRlXTtpZihyb3V0ZVByb3BzLnNoYWxsb3cmJmV4aXN0aW5nUm91dGVJbmZvJiZ0aGlzLnJvdXRlPT09cm91dGUpe3JldHVybiBleGlzdGluZ1JvdXRlSW5mbzt9Y29uc3QgY2FjaGVkUm91dGVJbmZvPWV4aXN0aW5nUm91dGVJbmZvJiYnaW5pdGlhbCdpbiBleGlzdGluZ1JvdXRlSW5mbz91bmRlZmluZWQ6ZXhpc3RpbmdSb3V0ZUluZm87Y29uc3Qgcm91dGVJbmZvPWNhY2hlZFJvdXRlSW5mbz9jYWNoZWRSb3V0ZUluZm86YXdhaXQgdGhpcy5mZXRjaENvbXBvbmVudChyb3V0ZSkudGhlbihyZXM9Pih7Q29tcG9uZW50OnJlcy5wYWdlLHN0eWxlU2hlZXRzOnJlcy5zdHlsZVNoZWV0cyxfX05fU1NHOnJlcy5tb2QuX19OX1NTRyxfX05fU1NQOnJlcy5tb2QuX19OX1NTUH0pKTtjb25zdHtDb21wb25lbnQsX19OX1NTRyxfX05fU1NQfT1yb3V0ZUluZm87aWYocHJvY2Vzcy5lbnYuTk9ERV9FTlYhPT0ncHJvZHVjdGlvbicpe2NvbnN0e2lzVmFsaWRFbGVtZW50VHlwZX09cmVxdWlyZSgncmVhY3QtaXMnKTtpZighaXNWYWxpZEVsZW1lbnRUeXBlKENvbXBvbmVudCkpe3Rocm93IG5ldyBFcnJvcihgVGhlIGRlZmF1bHQgZXhwb3J0IGlzIG5vdCBhIFJlYWN0IENvbXBvbmVudCBpbiBwYWdlOiBcIiR7cGF0aG5hbWV9XCJgKTt9fWxldCBkYXRhSHJlZjtpZihfX05fU1NHfHxfX05fU1NQKXtkYXRhSHJlZj10aGlzLnBhZ2VMb2FkZXIuZ2V0RGF0YUhyZWYoKDAsX3V0aWxzLmZvcm1hdFdpdGhWYWxpZGF0aW9uKSh7cGF0aG5hbWUscXVlcnl9KSxyZXNvbHZlZEFzLF9fTl9TU0csdGhpcy5sb2NhbGUpO31jb25zdCBwcm9wcz1hd2FpdCB0aGlzLl9nZXREYXRhKCgpPT5fX05fU1NHP3RoaXMuX2dldFN0YXRpY0RhdGEoZGF0YUhyZWYpOl9fTl9TU1A/dGhpcy5fZ2V0U2VydmVyRGF0YShkYXRhSHJlZik6dGhpcy5nZXRJbml0aWFsUHJvcHMoQ29tcG9uZW50LC8vIHdlIHByb3ZpZGUgQXBwVHJlZSBsYXRlciBzbyB0aGlzIG5lZWRzIHRvIGJlIGBhbnlgXG57cGF0aG5hbWUscXVlcnksYXNQYXRoOmFzLGxvY2FsZTp0aGlzLmxvY2FsZSxsb2NhbGVzOnRoaXMubG9jYWxlcyxkZWZhdWx0TG9jYWxlOnRoaXMuZGVmYXVsdExvY2FsZX0pKTtyb3V0ZUluZm8ucHJvcHM9cHJvcHM7dGhpcy5jb21wb25lbnRzW3JvdXRlXT1yb3V0ZUluZm87cmV0dXJuIHJvdXRlSW5mbzt9Y2F0Y2goZXJyKXtyZXR1cm4gdGhpcy5oYW5kbGVSb3V0ZUluZm9FcnJvcihlcnIscGF0aG5hbWUscXVlcnksYXMscm91dGVQcm9wcyk7fX1zZXQocm91dGUscGF0aG5hbWUscXVlcnksYXMsZGF0YSxyZXNldFNjcm9sbCl7dGhpcy5pc0ZhbGxiYWNrPWZhbHNlO3RoaXMucm91dGU9cm91dGU7dGhpcy5wYXRobmFtZT1wYXRobmFtZTt0aGlzLnF1ZXJ5PXF1ZXJ5O3RoaXMuYXNQYXRoPWFzO3JldHVybiB0aGlzLm5vdGlmeShkYXRhLHJlc2V0U2Nyb2xsKTt9LyoqXG4gICAqIENhbGxiYWNrIHRvIGV4ZWN1dGUgYmVmb3JlIHJlcGxhY2luZyByb3V0ZXIgc3RhdGVcbiAgICogQHBhcmFtIGNiIGNhbGxiYWNrIHRvIGJlIGV4ZWN1dGVkXG4gICAqL2JlZm9yZVBvcFN0YXRlKGNiKXt0aGlzLl9icHM9Y2I7fW9ubHlBSGFzaENoYW5nZShhcyl7aWYoIXRoaXMuYXNQYXRoKXJldHVybiBmYWxzZTtjb25zdFtvbGRVcmxOb0hhc2gsb2xkSGFzaF09dGhpcy5hc1BhdGguc3BsaXQoJyMnKTtjb25zdFtuZXdVcmxOb0hhc2gsbmV3SGFzaF09YXMuc3BsaXQoJyMnKTsvLyBNYWtlcyBzdXJlIHdlIHNjcm9sbCB0byB0aGUgcHJvdmlkZWQgaGFzaCBpZiB0aGUgdXJsL2hhc2ggYXJlIHRoZSBzYW1lXG5pZihuZXdIYXNoJiZvbGRVcmxOb0hhc2g9PT1uZXdVcmxOb0hhc2gmJm9sZEhhc2g9PT1uZXdIYXNoKXtyZXR1cm4gdHJ1ZTt9Ly8gSWYgdGhlIHVybHMgYXJlIGNoYW5nZSwgdGhlcmUncyBtb3JlIHRoYW4gYSBoYXNoIGNoYW5nZVxuaWYob2xkVXJsTm9IYXNoIT09bmV3VXJsTm9IYXNoKXtyZXR1cm4gZmFsc2U7fS8vIElmIHRoZSBoYXNoIGhhcyBjaGFuZ2VkLCB0aGVuIGl0J3MgYSBoYXNoIG9ubHkgY2hhbmdlLlxuLy8gVGhpcyBjaGVjayBpcyBuZWNlc3NhcnkgdG8gaGFuZGxlIGJvdGggdGhlIGVudGVyIGFuZFxuLy8gbGVhdmUgaGFzaCA9PT0gJycgY2FzZXMuIFRoZSBpZGVudGl0eSBjYXNlIGZhbGxzIHRocm91Z2hcbi8vIGFuZCBpcyB0cmVhdGVkIGFzIGEgbmV4dCByZWxvYWQuXG5yZXR1cm4gb2xkSGFzaCE9PW5ld0hhc2g7fXNjcm9sbFRvSGFzaChhcyl7Y29uc3RbLGhhc2hdPWFzLnNwbGl0KCcjJyk7Ly8gU2Nyb2xsIHRvIHRvcCBpZiB0aGUgaGFzaCBpcyBqdXN0IGAjYCB3aXRoIG5vIHZhbHVlIG9yIGAjdG9wYFxuLy8gVG8gbWlycm9yIGJyb3dzZXJzXG5pZihoYXNoPT09Jyd8fGhhc2g9PT0ndG9wJyl7d2luZG93LnNjcm9sbFRvKDAsMCk7cmV0dXJuO30vLyBGaXJzdCB3ZSBjaGVjayBpZiB0aGUgZWxlbWVudCBieSBpZCBpcyBmb3VuZFxuY29uc3QgaWRFbD1kb2N1bWVudC5nZXRFbGVtZW50QnlJZChoYXNoKTtpZihpZEVsKXtpZEVsLnNjcm9sbEludG9WaWV3KCk7cmV0dXJuO30vLyBJZiB0aGVyZSdzIG5vIGVsZW1lbnQgd2l0aCB0aGUgaWQsIHdlIGNoZWNrIHRoZSBgbmFtZWAgcHJvcGVydHlcbi8vIFRvIG1pcnJvciBicm93c2Vyc1xuY29uc3QgbmFtZUVsPWRvY3VtZW50LmdldEVsZW1lbnRzQnlOYW1lKGhhc2gpWzBdO2lmKG5hbWVFbCl7bmFtZUVsLnNjcm9sbEludG9WaWV3KCk7fX11cmxJc05ldyhhc1BhdGgpe3JldHVybiB0aGlzLmFzUGF0aCE9PWFzUGF0aDt9LyoqXG4gICAqIFByZWZldGNoIHBhZ2UgY29kZSwgeW91IG1heSB3YWl0IGZvciB0aGUgZGF0YSBkdXJpbmcgcGFnZSByZW5kZXJpbmcuXG4gICAqIFRoaXMgZmVhdHVyZSBvbmx5IHdvcmtzIGluIHByb2R1Y3Rpb24hXG4gICAqIEBwYXJhbSB1cmwgdGhlIGhyZWYgb2YgcHJlZmV0Y2hlZCBwYWdlXG4gICAqIEBwYXJhbSBhc1BhdGggdGhlIGFzIHBhdGggb2YgdGhlIHByZWZldGNoZWQgcGFnZVxuICAgKi9hc3luYyBwcmVmZXRjaCh1cmwsYXNQYXRoPXVybCxvcHRpb25zPXt9KXtsZXQgcGFyc2VkPSgwLF9wYXJzZVJlbGF0aXZlVXJsLnBhcnNlUmVsYXRpdmVVcmwpKHVybCk7bGV0e3BhdGhuYW1lfT1wYXJzZWQ7aWYocHJvY2Vzcy5lbnYuX19ORVhUX0kxOE5fU1VQUE9SVCl7aWYob3B0aW9ucy5sb2NhbGU9PT1mYWxzZSl7cGF0aG5hbWU9KDAsX25vcm1hbGl6ZUxvY2FsZVBhdGgubm9ybWFsaXplTG9jYWxlUGF0aCkocGF0aG5hbWUsdGhpcy5sb2NhbGVzKS5wYXRobmFtZTtwYXJzZWQucGF0aG5hbWU9cGF0aG5hbWU7dXJsPSgwLF91dGlscy5mb3JtYXRXaXRoVmFsaWRhdGlvbikocGFyc2VkKTtsZXQgcGFyc2VkQXM9KDAsX3BhcnNlUmVsYXRpdmVVcmwucGFyc2VSZWxhdGl2ZVVybCkoYXNQYXRoKTtjb25zdCBsb2NhbGVQYXRoUmVzdWx0PSgwLF9ub3JtYWxpemVMb2NhbGVQYXRoLm5vcm1hbGl6ZUxvY2FsZVBhdGgpKHBhcnNlZEFzLnBhdGhuYW1lLHRoaXMubG9jYWxlcyk7cGFyc2VkQXMucGF0aG5hbWU9bG9jYWxlUGF0aFJlc3VsdC5wYXRobmFtZTtvcHRpb25zLmxvY2FsZT1sb2NhbGVQYXRoUmVzdWx0LmRldGVjdGVkTG9jYWxlfHx0aGlzLmRlZmF1bHRMb2NhbGU7YXNQYXRoPSgwLF91dGlscy5mb3JtYXRXaXRoVmFsaWRhdGlvbikocGFyc2VkQXMpO319Y29uc3QgcGFnZXM9YXdhaXQgdGhpcy5wYWdlTG9hZGVyLmdldFBhZ2VMaXN0KCk7bGV0IHJlc29sdmVkQXM9YXNQYXRoO2lmKHByb2Nlc3MuZW52Ll9fTkVYVF9IQVNfUkVXUklURVMmJmFzUGF0aC5zdGFydHNXaXRoKCcvJykpe2xldCByZXdyaXRlczsoe19fcmV3cml0ZXM6cmV3cml0ZXN9PWF3YWl0KDAsX3JvdXRlTG9hZGVyLmdldENsaWVudEJ1aWxkTWFuaWZlc3QpKCkpO2NvbnN0IHJld3JpdGVzUmVzdWx0PSgwLF9yZXNvbHZlUmV3cml0ZXMuZGVmYXVsdCkoYWRkQmFzZVBhdGgoYWRkTG9jYWxlKGFzUGF0aCx0aGlzLmxvY2FsZSkpLHBhZ2VzLHJld3JpdGVzLHBhcnNlZC5xdWVyeSxwPT5yZXNvbHZlRHluYW1pY1JvdXRlKHAscGFnZXMpLHRoaXMubG9jYWxlcyk7cmVzb2x2ZWRBcz1kZWxMb2NhbGUoZGVsQmFzZVBhdGgocmV3cml0ZXNSZXN1bHQuYXNQYXRoKSx0aGlzLmxvY2FsZSk7aWYocmV3cml0ZXNSZXN1bHQubWF0Y2hlZFBhZ2UmJnJld3JpdGVzUmVzdWx0LnJlc29sdmVkSHJlZil7Ly8gaWYgdGhpcyBkaXJlY3RseSBtYXRjaGVzIGEgcGFnZSB3ZSBuZWVkIHRvIHVwZGF0ZSB0aGUgaHJlZiB0b1xuLy8gYWxsb3cgdGhlIGNvcnJlY3QgcGFnZSBjaHVuayB0byBiZSBsb2FkZWRcbnBhdGhuYW1lPXJld3JpdGVzUmVzdWx0LnJlc29sdmVkSHJlZjtwYXJzZWQucGF0aG5hbWU9cGF0aG5hbWU7dXJsPSgwLF91dGlscy5mb3JtYXRXaXRoVmFsaWRhdGlvbikocGFyc2VkKTt9fWVsc2V7cGFyc2VkLnBhdGhuYW1lPXJlc29sdmVEeW5hbWljUm91dGUocGFyc2VkLnBhdGhuYW1lLHBhZ2VzKTtpZihwYXJzZWQucGF0aG5hbWUhPT1wYXRobmFtZSl7cGF0aG5hbWU9cGFyc2VkLnBhdGhuYW1lO3BhcnNlZC5wYXRobmFtZT1wYXRobmFtZTt1cmw9KDAsX3V0aWxzLmZvcm1hdFdpdGhWYWxpZGF0aW9uKShwYXJzZWQpO319Y29uc3Qgcm91dGU9KDAsX25vcm1hbGl6ZVRyYWlsaW5nU2xhc2gucmVtb3ZlUGF0aFRyYWlsaW5nU2xhc2gpKHBhdGhuYW1lKTsvLyBQcmVmZXRjaCBpcyBub3Qgc3VwcG9ydGVkIGluIGRldmVsb3BtZW50IG1vZGUgYmVjYXVzZSBpdCB3b3VsZCB0cmlnZ2VyIG9uLWRlbWFuZC1lbnRyaWVzXG5pZihwcm9jZXNzLmVudi5OT0RFX0VOViE9PSdwcm9kdWN0aW9uJyl7cmV0dXJuO31hd2FpdCBQcm9taXNlLmFsbChbdGhpcy5wYWdlTG9hZGVyLl9pc1NzZyhyb3V0ZSkudGhlbihpc1NzZz0+e3JldHVybiBpc1NzZz90aGlzLl9nZXRTdGF0aWNEYXRhKHRoaXMucGFnZUxvYWRlci5nZXREYXRhSHJlZih1cmwscmVzb2x2ZWRBcyx0cnVlLHR5cGVvZiBvcHRpb25zLmxvY2FsZSE9PSd1bmRlZmluZWQnP29wdGlvbnMubG9jYWxlOnRoaXMubG9jYWxlKSk6ZmFsc2U7fSksdGhpcy5wYWdlTG9hZGVyW29wdGlvbnMucHJpb3JpdHk/J2xvYWRQYWdlJzoncHJlZmV0Y2gnXShyb3V0ZSldKTt9YXN5bmMgZmV0Y2hDb21wb25lbnQocm91dGUpe2xldCBjYW5jZWxsZWQ9ZmFsc2U7Y29uc3QgY2FuY2VsPXRoaXMuY2xjPSgpPT57Y2FuY2VsbGVkPXRydWU7fTtjb25zdCBjb21wb25lbnRSZXN1bHQ9YXdhaXQgdGhpcy5wYWdlTG9hZGVyLmxvYWRQYWdlKHJvdXRlKTtpZihjYW5jZWxsZWQpe2NvbnN0IGVycm9yPW5ldyBFcnJvcihgQWJvcnQgZmV0Y2hpbmcgY29tcG9uZW50IGZvciByb3V0ZTogXCIke3JvdXRlfVwiYCk7ZXJyb3IuY2FuY2VsbGVkPXRydWU7dGhyb3cgZXJyb3I7fWlmKGNhbmNlbD09PXRoaXMuY2xjKXt0aGlzLmNsYz1udWxsO31yZXR1cm4gY29tcG9uZW50UmVzdWx0O31fZ2V0RGF0YShmbil7bGV0IGNhbmNlbGxlZD1mYWxzZTtjb25zdCBjYW5jZWw9KCk9PntjYW5jZWxsZWQ9dHJ1ZTt9O3RoaXMuY2xjPWNhbmNlbDtyZXR1cm4gZm4oKS50aGVuKGRhdGE9PntpZihjYW5jZWw9PT10aGlzLmNsYyl7dGhpcy5jbGM9bnVsbDt9aWYoY2FuY2VsbGVkKXtjb25zdCBlcnI9bmV3IEVycm9yKCdMb2FkaW5nIGluaXRpYWwgcHJvcHMgY2FuY2VsbGVkJyk7ZXJyLmNhbmNlbGxlZD10cnVlO3Rocm93IGVycjt9cmV0dXJuIGRhdGE7fSk7fV9nZXRTdGF0aWNEYXRhKGRhdGFIcmVmKXtjb25zdHtocmVmOmNhY2hlS2V5fT1uZXcgVVJMKGRhdGFIcmVmLHdpbmRvdy5sb2NhdGlvbi5ocmVmKTtpZihwcm9jZXNzLmVudi5OT0RFX0VOVj09PSdwcm9kdWN0aW9uJyYmIXRoaXMuaXNQcmV2aWV3JiZ0aGlzLnNkY1tjYWNoZUtleV0pe3JldHVybiBQcm9taXNlLnJlc29sdmUodGhpcy5zZGNbY2FjaGVLZXldKTt9cmV0dXJuIGZldGNoTmV4dERhdGEoZGF0YUhyZWYsdGhpcy5pc1NzcikudGhlbihkYXRhPT57dGhpcy5zZGNbY2FjaGVLZXldPWRhdGE7cmV0dXJuIGRhdGE7fSk7fV9nZXRTZXJ2ZXJEYXRhKGRhdGFIcmVmKXtjb25zdHtocmVmOnJlc291cmNlS2V5fT1uZXcgVVJMKGRhdGFIcmVmLHdpbmRvdy5sb2NhdGlvbi5ocmVmKTtpZih0aGlzLnNkcltyZXNvdXJjZUtleV0pe3JldHVybiB0aGlzLnNkcltyZXNvdXJjZUtleV07fXJldHVybiB0aGlzLnNkcltyZXNvdXJjZUtleV09ZmV0Y2hOZXh0RGF0YShkYXRhSHJlZix0aGlzLmlzU3NyKS50aGVuKGRhdGE9PntkZWxldGUgdGhpcy5zZHJbcmVzb3VyY2VLZXldO3JldHVybiBkYXRhO30pLmNhdGNoKGVycj0+e2RlbGV0ZSB0aGlzLnNkcltyZXNvdXJjZUtleV07dGhyb3cgZXJyO30pO31nZXRJbml0aWFsUHJvcHMoQ29tcG9uZW50LGN0eCl7Y29uc3R7Q29tcG9uZW50OkFwcH09dGhpcy5jb21wb25lbnRzWycvX2FwcCddO2NvbnN0IEFwcFRyZWU9dGhpcy5fd3JhcEFwcChBcHApO2N0eC5BcHBUcmVlPUFwcFRyZWU7cmV0dXJuKDAsX3V0aWxzLmxvYWRHZXRJbml0aWFsUHJvcHMpKEFwcCx7QXBwVHJlZSxDb21wb25lbnQscm91dGVyOnRoaXMsY3R4fSk7fWFib3J0Q29tcG9uZW50TG9hZChhcyxyb3V0ZVByb3BzKXtpZih0aGlzLmNsYyl7Um91dGVyLmV2ZW50cy5lbWl0KCdyb3V0ZUNoYW5nZUVycm9yJyxidWlsZENhbmNlbGxhdGlvbkVycm9yKCksYXMscm91dGVQcm9wcyk7dGhpcy5jbGMoKTt0aGlzLmNsYz1udWxsO319bm90aWZ5KGRhdGEscmVzZXRTY3JvbGwpe3JldHVybiB0aGlzLnN1YihkYXRhLHRoaXMuY29tcG9uZW50c1snL19hcHAnXS5Db21wb25lbnQscmVzZXRTY3JvbGwpO319ZXhwb3J0cy5kZWZhdWx0PVJvdXRlcjtSb3V0ZXIuZXZlbnRzPSgwLF9taXR0LmRlZmF1bHQpKCk7XG4vLyMgc291cmNlTWFwcGluZ1VSTD1yb3V0ZXIuanMubWFwIiwiXCJ1c2Ugc3RyaWN0XCI7ZXhwb3J0cy5fX2VzTW9kdWxlPXRydWU7ZXhwb3J0cy5mb3JtYXRVcmw9Zm9ybWF0VXJsO3ZhciBxdWVyeXN0cmluZz1faW50ZXJvcFJlcXVpcmVXaWxkY2FyZChyZXF1aXJlKFwiLi9xdWVyeXN0cmluZ1wiKSk7ZnVuY3Rpb24gX2dldFJlcXVpcmVXaWxkY2FyZENhY2hlKCl7aWYodHlwZW9mIFdlYWtNYXAhPT1cImZ1bmN0aW9uXCIpcmV0dXJuIG51bGw7dmFyIGNhY2hlPW5ldyBXZWFrTWFwKCk7X2dldFJlcXVpcmVXaWxkY2FyZENhY2hlPWZ1bmN0aW9uKCl7cmV0dXJuIGNhY2hlO307cmV0dXJuIGNhY2hlO31mdW5jdGlvbiBfaW50ZXJvcFJlcXVpcmVXaWxkY2FyZChvYmope2lmKG9iaiYmb2JqLl9fZXNNb2R1bGUpe3JldHVybiBvYmo7fWlmKG9iaj09PW51bGx8fHR5cGVvZiBvYmohPT1cIm9iamVjdFwiJiZ0eXBlb2Ygb2JqIT09XCJmdW5jdGlvblwiKXtyZXR1cm57ZGVmYXVsdDpvYmp9O312YXIgY2FjaGU9X2dldFJlcXVpcmVXaWxkY2FyZENhY2hlKCk7aWYoY2FjaGUmJmNhY2hlLmhhcyhvYmopKXtyZXR1cm4gY2FjaGUuZ2V0KG9iaik7fXZhciBuZXdPYmo9e307dmFyIGhhc1Byb3BlcnR5RGVzY3JpcHRvcj1PYmplY3QuZGVmaW5lUHJvcGVydHkmJk9iamVjdC5nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3I7Zm9yKHZhciBrZXkgaW4gb2JqKXtpZihPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLGtleSkpe3ZhciBkZXNjPWhhc1Byb3BlcnR5RGVzY3JpcHRvcj9PYmplY3QuZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yKG9iaixrZXkpOm51bGw7aWYoZGVzYyYmKGRlc2MuZ2V0fHxkZXNjLnNldCkpe09iamVjdC5kZWZpbmVQcm9wZXJ0eShuZXdPYmosa2V5LGRlc2MpO31lbHNle25ld09ialtrZXldPW9ialtrZXldO319fW5ld09iai5kZWZhdWx0PW9iajtpZihjYWNoZSl7Y2FjaGUuc2V0KG9iaixuZXdPYmopO31yZXR1cm4gbmV3T2JqO30vLyBGb3JtYXQgZnVuY3Rpb24gbW9kaWZpZWQgZnJvbSBub2RlanNcbi8vIENvcHlyaWdodCBKb3llbnQsIEluYy4gYW5kIG90aGVyIE5vZGUgY29udHJpYnV0b3JzLlxuLy9cbi8vIFBlcm1pc3Npb24gaXMgaGVyZWJ5IGdyYW50ZWQsIGZyZWUgb2YgY2hhcmdlLCB0byBhbnkgcGVyc29uIG9idGFpbmluZyBhXG4vLyBjb3B5IG9mIHRoaXMgc29mdHdhcmUgYW5kIGFzc29jaWF0ZWQgZG9jdW1lbnRhdGlvbiBmaWxlcyAodGhlXG4vLyBcIlNvZnR3YXJlXCIpLCB0byBkZWFsIGluIHRoZSBTb2Z0d2FyZSB3aXRob3V0IHJlc3RyaWN0aW9uLCBpbmNsdWRpbmdcbi8vIHdpdGhvdXQgbGltaXRhdGlvbiB0aGUgcmlnaHRzIHRvIHVzZSwgY29weSwgbW9kaWZ5LCBtZXJnZSwgcHVibGlzaCxcbi8vIGRpc3RyaWJ1dGUsIHN1YmxpY2Vuc2UsIGFuZC9vciBzZWxsIGNvcGllcyBvZiB0aGUgU29mdHdhcmUsIGFuZCB0byBwZXJtaXRcbi8vIHBlcnNvbnMgdG8gd2hvbSB0aGUgU29mdHdhcmUgaXMgZnVybmlzaGVkIHRvIGRvIHNvLCBzdWJqZWN0IHRvIHRoZVxuLy8gZm9sbG93aW5nIGNvbmRpdGlvbnM6XG4vL1xuLy8gVGhlIGFib3ZlIGNvcHlyaWdodCBub3RpY2UgYW5kIHRoaXMgcGVybWlzc2lvbiBub3RpY2Ugc2hhbGwgYmUgaW5jbHVkZWRcbi8vIGluIGFsbCBjb3BpZXMgb3Igc3Vic3RhbnRpYWwgcG9ydGlvbnMgb2YgdGhlIFNvZnR3YXJlLlxuLy9cbi8vIFRIRSBTT0ZUV0FSRSBJUyBQUk9WSURFRCBcIkFTIElTXCIsIFdJVEhPVVQgV0FSUkFOVFkgT0YgQU5ZIEtJTkQsIEVYUFJFU1Ncbi8vIE9SIElNUExJRUQsIElOQ0xVRElORyBCVVQgTk9UIExJTUlURUQgVE8gVEhFIFdBUlJBTlRJRVMgT0Zcbi8vIE1FUkNIQU5UQUJJTElUWSwgRklUTkVTUyBGT1IgQSBQQVJUSUNVTEFSIFBVUlBPU0UgQU5EIE5PTklORlJJTkdFTUVOVC4gSU5cbi8vIE5PIEVWRU5UIFNIQUxMIFRIRSBBVVRIT1JTIE9SIENPUFlSSUdIVCBIT0xERVJTIEJFIExJQUJMRSBGT1IgQU5ZIENMQUlNLFxuLy8gREFNQUdFUyBPUiBPVEhFUiBMSUFCSUxJVFksIFdIRVRIRVIgSU4gQU4gQUNUSU9OIE9GIENPTlRSQUNULCBUT1JUIE9SXG4vLyBPVEhFUldJU0UsIEFSSVNJTkcgRlJPTSwgT1VUIE9GIE9SIElOIENPTk5FQ1RJT04gV0lUSCBUSEUgU09GVFdBUkUgT1IgVEhFXG4vLyBVU0UgT1IgT1RIRVIgREVBTElOR1MgSU4gVEhFIFNPRlRXQVJFLlxuY29uc3Qgc2xhc2hlZFByb3RvY29scz0vaHR0cHM/fGZ0cHxnb3BoZXJ8ZmlsZS87ZnVuY3Rpb24gZm9ybWF0VXJsKHVybE9iail7bGV0e2F1dGgsaG9zdG5hbWV9PXVybE9iajtsZXQgcHJvdG9jb2w9dXJsT2JqLnByb3RvY29sfHwnJztsZXQgcGF0aG5hbWU9dXJsT2JqLnBhdGhuYW1lfHwnJztsZXQgaGFzaD11cmxPYmouaGFzaHx8Jyc7bGV0IHF1ZXJ5PXVybE9iai5xdWVyeXx8Jyc7bGV0IGhvc3Q9ZmFsc2U7YXV0aD1hdXRoP2VuY29kZVVSSUNvbXBvbmVudChhdXRoKS5yZXBsYWNlKC8lM0EvaSwnOicpKydAJzonJztpZih1cmxPYmouaG9zdCl7aG9zdD1hdXRoK3VybE9iai5ob3N0O31lbHNlIGlmKGhvc3RuYW1lKXtob3N0PWF1dGgrKH5ob3N0bmFtZS5pbmRleE9mKCc6Jyk/YFske2hvc3RuYW1lfV1gOmhvc3RuYW1lKTtpZih1cmxPYmoucG9ydCl7aG9zdCs9JzonK3VybE9iai5wb3J0O319aWYocXVlcnkmJnR5cGVvZiBxdWVyeT09PSdvYmplY3QnKXtxdWVyeT1TdHJpbmcocXVlcnlzdHJpbmcudXJsUXVlcnlUb1NlYXJjaFBhcmFtcyhxdWVyeSkpO31sZXQgc2VhcmNoPXVybE9iai5zZWFyY2h8fHF1ZXJ5JiZgPyR7cXVlcnl9YHx8Jyc7aWYocHJvdG9jb2wmJnByb3RvY29sLnN1YnN0cigtMSkhPT0nOicpcHJvdG9jb2wrPSc6JztpZih1cmxPYmouc2xhc2hlc3x8KCFwcm90b2NvbHx8c2xhc2hlZFByb3RvY29scy50ZXN0KHByb3RvY29sKSkmJmhvc3QhPT1mYWxzZSl7aG9zdD0nLy8nKyhob3N0fHwnJyk7aWYocGF0aG5hbWUmJnBhdGhuYW1lWzBdIT09Jy8nKXBhdGhuYW1lPScvJytwYXRobmFtZTt9ZWxzZSBpZighaG9zdCl7aG9zdD0nJzt9aWYoaGFzaCYmaGFzaFswXSE9PScjJyloYXNoPScjJytoYXNoO2lmKHNlYXJjaCYmc2VhcmNoWzBdIT09Jz8nKXNlYXJjaD0nPycrc2VhcmNoO3BhdGhuYW1lPXBhdGhuYW1lLnJlcGxhY2UoL1s/I10vZyxlbmNvZGVVUklDb21wb25lbnQpO3NlYXJjaD1zZWFyY2gucmVwbGFjZSgnIycsJyUyMycpO3JldHVybmAke3Byb3RvY29sfSR7aG9zdH0ke3BhdGhuYW1lfSR7c2VhcmNofSR7aGFzaH1gO31cbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWZvcm1hdC11cmwuanMubWFwIiwiXCJ1c2Ugc3RyaWN0XCI7ZXhwb3J0cy5fX2VzTW9kdWxlPXRydWU7ZXhwb3J0cy5pc0R5bmFtaWNSb3V0ZT1pc0R5bmFtaWNSb3V0ZTsvLyBJZGVudGlmeSAvW3BhcmFtXS8gaW4gcm91dGUgc3RyaW5nXG5jb25zdCBURVNUX1JPVVRFPS9cXC9cXFtbXi9dKz9cXF0oPz1cXC98JCkvO2Z1bmN0aW9uIGlzRHluYW1pY1JvdXRlKHJvdXRlKXtyZXR1cm4gVEVTVF9ST1VURS50ZXN0KHJvdXRlKTt9XG4vLyMgc291cmNlTWFwcGluZ1VSTD1pcy1keW5hbWljLmpzLm1hcCIsIlwidXNlIHN0cmljdFwiO2V4cG9ydHMuX19lc01vZHVsZT10cnVlO2V4cG9ydHMucGFyc2VSZWxhdGl2ZVVybD1wYXJzZVJlbGF0aXZlVXJsO3ZhciBfdXRpbHM9cmVxdWlyZShcIi4uLy4uL3V0aWxzXCIpO3ZhciBfcXVlcnlzdHJpbmc9cmVxdWlyZShcIi4vcXVlcnlzdHJpbmdcIik7LyoqXG4gKiBQYXJzZXMgcGF0aC1yZWxhdGl2ZSB1cmxzIChlLmcuIGAvaGVsbG8vd29ybGQ/Zm9vPWJhcmApLiBJZiB1cmwgaXNuJ3QgcGF0aC1yZWxhdGl2ZVxuICogKGUuZy4gYC4vaGVsbG9gKSB0aGVuIGF0IGxlYXN0IGJhc2UgbXVzdCBiZS5cbiAqIEFic29sdXRlIHVybHMgYXJlIHJlamVjdGVkIHdpdGggb25lIGV4Y2VwdGlvbiwgaW4gdGhlIGJyb3dzZXIsIGFic29sdXRlIHVybHMgdGhhdCBhcmUgb25cbiAqIHRoZSBjdXJyZW50IG9yaWdpbiB3aWxsIGJlIHBhcnNlZCBhcyByZWxhdGl2ZVxuICovZnVuY3Rpb24gcGFyc2VSZWxhdGl2ZVVybCh1cmwsYmFzZSl7Y29uc3QgZ2xvYmFsQmFzZT1uZXcgVVJMKHR5cGVvZiB3aW5kb3c9PT0ndW5kZWZpbmVkJz8naHR0cDovL24nOigwLF91dGlscy5nZXRMb2NhdGlvbk9yaWdpbikoKSk7Y29uc3QgcmVzb2x2ZWRCYXNlPWJhc2U/bmV3IFVSTChiYXNlLGdsb2JhbEJhc2UpOmdsb2JhbEJhc2U7Y29uc3R7cGF0aG5hbWUsc2VhcmNoUGFyYW1zLHNlYXJjaCxoYXNoLGhyZWYsb3JpZ2lufT1uZXcgVVJMKHVybCxyZXNvbHZlZEJhc2UpO2lmKG9yaWdpbiE9PWdsb2JhbEJhc2Uub3JpZ2luKXt0aHJvdyBuZXcgRXJyb3IoYGludmFyaWFudDogaW52YWxpZCByZWxhdGl2ZSBVUkwsIHJvdXRlciByZWNlaXZlZCAke3VybH1gKTt9cmV0dXJue3BhdGhuYW1lLHF1ZXJ5OigwLF9xdWVyeXN0cmluZy5zZWFyY2hQYXJhbXNUb1VybFF1ZXJ5KShzZWFyY2hQYXJhbXMpLHNlYXJjaCxoYXNoLGhyZWY6aHJlZi5zbGljZShnbG9iYWxCYXNlLm9yaWdpbi5sZW5ndGgpfTt9XG4vLyMgc291cmNlTWFwcGluZ1VSTD1wYXJzZS1yZWxhdGl2ZS11cmwuanMubWFwIiwiXCJ1c2Ugc3RyaWN0XCI7ZXhwb3J0cy5fX2VzTW9kdWxlPXRydWU7ZXhwb3J0cy5zZWFyY2hQYXJhbXNUb1VybFF1ZXJ5PXNlYXJjaFBhcmFtc1RvVXJsUXVlcnk7ZXhwb3J0cy51cmxRdWVyeVRvU2VhcmNoUGFyYW1zPXVybFF1ZXJ5VG9TZWFyY2hQYXJhbXM7ZXhwb3J0cy5hc3NpZ249YXNzaWduO2Z1bmN0aW9uIHNlYXJjaFBhcmFtc1RvVXJsUXVlcnkoc2VhcmNoUGFyYW1zKXtjb25zdCBxdWVyeT17fTtzZWFyY2hQYXJhbXMuZm9yRWFjaCgodmFsdWUsa2V5KT0+e2lmKHR5cGVvZiBxdWVyeVtrZXldPT09J3VuZGVmaW5lZCcpe3F1ZXJ5W2tleV09dmFsdWU7fWVsc2UgaWYoQXJyYXkuaXNBcnJheShxdWVyeVtrZXldKSl7O3F1ZXJ5W2tleV0ucHVzaCh2YWx1ZSk7fWVsc2V7cXVlcnlba2V5XT1bcXVlcnlba2V5XSx2YWx1ZV07fX0pO3JldHVybiBxdWVyeTt9ZnVuY3Rpb24gc3RyaW5naWZ5VXJsUXVlcnlQYXJhbShwYXJhbSl7aWYodHlwZW9mIHBhcmFtPT09J3N0cmluZyd8fHR5cGVvZiBwYXJhbT09PSdudW1iZXInJiYhaXNOYU4ocGFyYW0pfHx0eXBlb2YgcGFyYW09PT0nYm9vbGVhbicpe3JldHVybiBTdHJpbmcocGFyYW0pO31lbHNle3JldHVybicnO319ZnVuY3Rpb24gdXJsUXVlcnlUb1NlYXJjaFBhcmFtcyh1cmxRdWVyeSl7Y29uc3QgcmVzdWx0PW5ldyBVUkxTZWFyY2hQYXJhbXMoKTtPYmplY3QuZW50cmllcyh1cmxRdWVyeSkuZm9yRWFjaCgoW2tleSx2YWx1ZV0pPT57aWYoQXJyYXkuaXNBcnJheSh2YWx1ZSkpe3ZhbHVlLmZvckVhY2goaXRlbT0+cmVzdWx0LmFwcGVuZChrZXksc3RyaW5naWZ5VXJsUXVlcnlQYXJhbShpdGVtKSkpO31lbHNle3Jlc3VsdC5zZXQoa2V5LHN0cmluZ2lmeVVybFF1ZXJ5UGFyYW0odmFsdWUpKTt9fSk7cmV0dXJuIHJlc3VsdDt9ZnVuY3Rpb24gYXNzaWduKHRhcmdldCwuLi5zZWFyY2hQYXJhbXNMaXN0KXtzZWFyY2hQYXJhbXNMaXN0LmZvckVhY2goc2VhcmNoUGFyYW1zPT57QXJyYXkuZnJvbShzZWFyY2hQYXJhbXMua2V5cygpKS5mb3JFYWNoKGtleT0+dGFyZ2V0LmRlbGV0ZShrZXkpKTtzZWFyY2hQYXJhbXMuZm9yRWFjaCgodmFsdWUsa2V5KT0+dGFyZ2V0LmFwcGVuZChrZXksdmFsdWUpKTt9KTtyZXR1cm4gdGFyZ2V0O31cbi8vIyBzb3VyY2VNYXBwaW5nVVJMPXF1ZXJ5c3RyaW5nLmpzLm1hcCIsIlwidXNlIHN0cmljdFwiO2V4cG9ydHMuX19lc01vZHVsZT10cnVlO2V4cG9ydHMuZ2V0Um91dGVNYXRjaGVyPWdldFJvdXRlTWF0Y2hlcjtmdW5jdGlvbiBnZXRSb3V0ZU1hdGNoZXIocm91dGVSZWdleCl7Y29uc3R7cmUsZ3JvdXBzfT1yb3V0ZVJlZ2V4O3JldHVybiBwYXRobmFtZT0+e2NvbnN0IHJvdXRlTWF0Y2g9cmUuZXhlYyhwYXRobmFtZSk7aWYoIXJvdXRlTWF0Y2gpe3JldHVybiBmYWxzZTt9Y29uc3QgZGVjb2RlPXBhcmFtPT57dHJ5e3JldHVybiBkZWNvZGVVUklDb21wb25lbnQocGFyYW0pO31jYXRjaChfKXtjb25zdCBlcnI9bmV3IEVycm9yKCdmYWlsZWQgdG8gZGVjb2RlIHBhcmFtJyk7ZXJyLmNvZGU9J0RFQ09ERV9GQUlMRUQnO3Rocm93IGVycjt9fTtjb25zdCBwYXJhbXM9e307T2JqZWN0LmtleXMoZ3JvdXBzKS5mb3JFYWNoKHNsdWdOYW1lPT57Y29uc3QgZz1ncm91cHNbc2x1Z05hbWVdO2NvbnN0IG09cm91dGVNYXRjaFtnLnBvc107aWYobSE9PXVuZGVmaW5lZCl7cGFyYW1zW3NsdWdOYW1lXT1+bS5pbmRleE9mKCcvJyk/bS5zcGxpdCgnLycpLm1hcChlbnRyeT0+ZGVjb2RlKGVudHJ5KSk6Zy5yZXBlYXQ/W2RlY29kZShtKV06ZGVjb2RlKG0pO319KTtyZXR1cm4gcGFyYW1zO307fVxuLy8jIHNvdXJjZU1hcHBpbmdVUkw9cm91dGUtbWF0Y2hlci5qcy5tYXAiLCJcInVzZSBzdHJpY3RcIjtleHBvcnRzLl9fZXNNb2R1bGU9dHJ1ZTtleHBvcnRzLmdldFJvdXRlUmVnZXg9Z2V0Um91dGVSZWdleDsvLyB0aGlzIGlzbid0IGltcG9ydGluZyB0aGUgZXNjYXBlLXN0cmluZy1yZWdleCBtb2R1bGVcbi8vIHRvIHJlZHVjZSBieXRlc1xuZnVuY3Rpb24gZXNjYXBlUmVnZXgoc3RyKXtyZXR1cm4gc3RyLnJlcGxhY2UoL1t8XFxcXHt9KClbXFxdXiQrKj8uLV0vZywnXFxcXCQmJyk7fWZ1bmN0aW9uIHBhcnNlUGFyYW1ldGVyKHBhcmFtKXtjb25zdCBvcHRpb25hbD1wYXJhbS5zdGFydHNXaXRoKCdbJykmJnBhcmFtLmVuZHNXaXRoKCddJyk7aWYob3B0aW9uYWwpe3BhcmFtPXBhcmFtLnNsaWNlKDEsLTEpO31jb25zdCByZXBlYXQ9cGFyYW0uc3RhcnRzV2l0aCgnLi4uJyk7aWYocmVwZWF0KXtwYXJhbT1wYXJhbS5zbGljZSgzKTt9cmV0dXJue2tleTpwYXJhbSxyZXBlYXQsb3B0aW9uYWx9O31mdW5jdGlvbiBnZXRSb3V0ZVJlZ2V4KG5vcm1hbGl6ZWRSb3V0ZSl7Y29uc3Qgc2VnbWVudHM9KG5vcm1hbGl6ZWRSb3V0ZS5yZXBsYWNlKC9cXC8kLywnJyl8fCcvJykuc2xpY2UoMSkuc3BsaXQoJy8nKTtjb25zdCBncm91cHM9e307bGV0IGdyb3VwSW5kZXg9MTtjb25zdCBwYXJhbWV0ZXJpemVkUm91dGU9c2VnbWVudHMubWFwKHNlZ21lbnQ9PntpZihzZWdtZW50LnN0YXJ0c1dpdGgoJ1snKSYmc2VnbWVudC5lbmRzV2l0aCgnXScpKXtjb25zdHtrZXksb3B0aW9uYWwscmVwZWF0fT1wYXJzZVBhcmFtZXRlcihzZWdtZW50LnNsaWNlKDEsLTEpKTtncm91cHNba2V5XT17cG9zOmdyb3VwSW5kZXgrKyxyZXBlYXQsb3B0aW9uYWx9O3JldHVybiByZXBlYXQ/b3B0aW9uYWw/Jyg/Oi8oLis/KSk/JzonLyguKz8pJzonLyhbXi9dKz8pJzt9ZWxzZXtyZXR1cm5gLyR7ZXNjYXBlUmVnZXgoc2VnbWVudCl9YDt9fSkuam9pbignJyk7Ly8gZGVhZCBjb2RlIGVsaW1pbmF0ZSBmb3IgYnJvd3NlciBzaW5jZSBpdCdzIG9ubHkgbmVlZGVkXG4vLyB3aGlsZSBnZW5lcmF0aW5nIHJvdXRlcy1tYW5pZmVzdFxuaWYodHlwZW9mIHdpbmRvdz09PSd1bmRlZmluZWQnKXtsZXQgcm91dGVLZXlDaGFyQ29kZT05NztsZXQgcm91dGVLZXlDaGFyTGVuZ3RoPTE7Ly8gYnVpbGRzIGEgbWluaW1hbCByb3V0ZUtleSB1c2luZyBvbmx5IGEteiBhbmQgbWluaW1hbCBudW1iZXIgb2YgY2hhcmFjdGVyc1xuY29uc3QgZ2V0U2FmZVJvdXRlS2V5PSgpPT57bGV0IHJvdXRlS2V5PScnO2ZvcihsZXQgaT0wO2k8cm91dGVLZXlDaGFyTGVuZ3RoO2krKyl7cm91dGVLZXkrPVN0cmluZy5mcm9tQ2hhckNvZGUocm91dGVLZXlDaGFyQ29kZSk7cm91dGVLZXlDaGFyQ29kZSsrO2lmKHJvdXRlS2V5Q2hhckNvZGU+MTIyKXtyb3V0ZUtleUNoYXJMZW5ndGgrKztyb3V0ZUtleUNoYXJDb2RlPTk3O319cmV0dXJuIHJvdXRlS2V5O307Y29uc3Qgcm91dGVLZXlzPXt9O2xldCBuYW1lZFBhcmFtZXRlcml6ZWRSb3V0ZT1zZWdtZW50cy5tYXAoc2VnbWVudD0+e2lmKHNlZ21lbnQuc3RhcnRzV2l0aCgnWycpJiZzZWdtZW50LmVuZHNXaXRoKCddJykpe2NvbnN0e2tleSxvcHRpb25hbCxyZXBlYXR9PXBhcnNlUGFyYW1ldGVyKHNlZ21lbnQuc2xpY2UoMSwtMSkpOy8vIHJlcGxhY2UgYW55IG5vbi13b3JkIGNoYXJhY3RlcnMgc2luY2UgdGhleSBjYW4gYnJlYWtcbi8vIHRoZSBuYW1lZCByZWdleFxubGV0IGNsZWFuZWRLZXk9a2V5LnJlcGxhY2UoL1xcVy9nLCcnKTtsZXQgaW52YWxpZEtleT1mYWxzZTsvLyBjaGVjayBpZiB0aGUga2V5IGlzIHN0aWxsIGludmFsaWQgYW5kIGZhbGxiYWNrIHRvIHVzaW5nIGEga25vd25cbi8vIHNhZmUga2V5XG5pZihjbGVhbmVkS2V5Lmxlbmd0aD09PTB8fGNsZWFuZWRLZXkubGVuZ3RoPjMwKXtpbnZhbGlkS2V5PXRydWU7fWlmKCFpc05hTihwYXJzZUludChjbGVhbmVkS2V5LnN1YnN0cigwLDEpKSkpe2ludmFsaWRLZXk9dHJ1ZTt9aWYoaW52YWxpZEtleSl7Y2xlYW5lZEtleT1nZXRTYWZlUm91dGVLZXkoKTt9cm91dGVLZXlzW2NsZWFuZWRLZXldPWtleTtyZXR1cm4gcmVwZWF0P29wdGlvbmFsP2AoPzovKD88JHtjbGVhbmVkS2V5fT4uKz8pKT9gOmAvKD88JHtjbGVhbmVkS2V5fT4uKz8pYDpgLyg/PCR7Y2xlYW5lZEtleX0+W14vXSs/KWA7fWVsc2V7cmV0dXJuYC8ke2VzY2FwZVJlZ2V4KHNlZ21lbnQpfWA7fX0pLmpvaW4oJycpO3JldHVybntyZTpuZXcgUmVnRXhwKGBeJHtwYXJhbWV0ZXJpemVkUm91dGV9KD86Lyk/JGApLGdyb3Vwcyxyb3V0ZUtleXMsbmFtZWRSZWdleDpgXiR7bmFtZWRQYXJhbWV0ZXJpemVkUm91dGV9KD86Lyk/JGB9O31yZXR1cm57cmU6bmV3IFJlZ0V4cChgXiR7cGFyYW1ldGVyaXplZFJvdXRlfSg/Oi8pPyRgKSxncm91cHN9O31cbi8vIyBzb3VyY2VNYXBwaW5nVVJMPXJvdXRlLXJlZ2V4LmpzLm1hcCIsIlwidXNlIHN0cmljdFwiO2V4cG9ydHMuX19lc01vZHVsZT10cnVlO2V4cG9ydHMuZXhlY09uY2U9ZXhlY09uY2U7ZXhwb3J0cy5nZXRMb2NhdGlvbk9yaWdpbj1nZXRMb2NhdGlvbk9yaWdpbjtleHBvcnRzLmdldFVSTD1nZXRVUkw7ZXhwb3J0cy5nZXREaXNwbGF5TmFtZT1nZXREaXNwbGF5TmFtZTtleHBvcnRzLmlzUmVzU2VudD1pc1Jlc1NlbnQ7ZXhwb3J0cy5sb2FkR2V0SW5pdGlhbFByb3BzPWxvYWRHZXRJbml0aWFsUHJvcHM7ZXhwb3J0cy5mb3JtYXRXaXRoVmFsaWRhdGlvbj1mb3JtYXRXaXRoVmFsaWRhdGlvbjtleHBvcnRzLlNUPWV4cG9ydHMuU1A9ZXhwb3J0cy51cmxPYmplY3RLZXlzPXZvaWQgMDt2YXIgX2Zvcm1hdFVybD1yZXF1aXJlKFwiLi9yb3V0ZXIvdXRpbHMvZm9ybWF0LXVybFwiKTsvKipcbiAqIFV0aWxzXG4gKi9mdW5jdGlvbiBleGVjT25jZShmbil7bGV0IHVzZWQ9ZmFsc2U7bGV0IHJlc3VsdDtyZXR1cm4oLi4uYXJncyk9PntpZighdXNlZCl7dXNlZD10cnVlO3Jlc3VsdD1mbiguLi5hcmdzKTt9cmV0dXJuIHJlc3VsdDt9O31mdW5jdGlvbiBnZXRMb2NhdGlvbk9yaWdpbigpe2NvbnN0e3Byb3RvY29sLGhvc3RuYW1lLHBvcnR9PXdpbmRvdy5sb2NhdGlvbjtyZXR1cm5gJHtwcm90b2NvbH0vLyR7aG9zdG5hbWV9JHtwb3J0Pyc6Jytwb3J0OicnfWA7fWZ1bmN0aW9uIGdldFVSTCgpe2NvbnN0e2hyZWZ9PXdpbmRvdy5sb2NhdGlvbjtjb25zdCBvcmlnaW49Z2V0TG9jYXRpb25PcmlnaW4oKTtyZXR1cm4gaHJlZi5zdWJzdHJpbmcob3JpZ2luLmxlbmd0aCk7fWZ1bmN0aW9uIGdldERpc3BsYXlOYW1lKENvbXBvbmVudCl7cmV0dXJuIHR5cGVvZiBDb21wb25lbnQ9PT0nc3RyaW5nJz9Db21wb25lbnQ6Q29tcG9uZW50LmRpc3BsYXlOYW1lfHxDb21wb25lbnQubmFtZXx8J1Vua25vd24nO31mdW5jdGlvbiBpc1Jlc1NlbnQocmVzKXtyZXR1cm4gcmVzLmZpbmlzaGVkfHxyZXMuaGVhZGVyc1NlbnQ7fWFzeW5jIGZ1bmN0aW9uIGxvYWRHZXRJbml0aWFsUHJvcHMoQXBwLGN0eCl7aWYocHJvY2Vzcy5lbnYuTk9ERV9FTlYhPT0ncHJvZHVjdGlvbicpe3ZhciBfQXBwJHByb3RvdHlwZTtpZigoX0FwcCRwcm90b3R5cGU9QXBwLnByb3RvdHlwZSkhPW51bGwmJl9BcHAkcHJvdG90eXBlLmdldEluaXRpYWxQcm9wcyl7Y29uc3QgbWVzc2FnZT1gXCIke2dldERpc3BsYXlOYW1lKEFwcCl9LmdldEluaXRpYWxQcm9wcygpXCIgaXMgZGVmaW5lZCBhcyBhbiBpbnN0YW5jZSBtZXRob2QgLSB2aXNpdCBodHRwczovL25leHRqcy5vcmcvZG9jcy9tZXNzYWdlcy9nZXQtaW5pdGlhbC1wcm9wcy1hcy1hbi1pbnN0YW5jZS1tZXRob2QgZm9yIG1vcmUgaW5mb3JtYXRpb24uYDt0aHJvdyBuZXcgRXJyb3IobWVzc2FnZSk7fX0vLyB3aGVuIGNhbGxlZCBmcm9tIF9hcHAgYGN0eGAgaXMgbmVzdGVkIGluIGBjdHhgXG5jb25zdCByZXM9Y3R4LnJlc3x8Y3R4LmN0eCYmY3R4LmN0eC5yZXM7aWYoIUFwcC5nZXRJbml0aWFsUHJvcHMpe2lmKGN0eC5jdHgmJmN0eC5Db21wb25lbnQpey8vIEB0cy1pZ25vcmUgcGFnZVByb3BzIGRlZmF1bHRcbnJldHVybntwYWdlUHJvcHM6YXdhaXQgbG9hZEdldEluaXRpYWxQcm9wcyhjdHguQ29tcG9uZW50LGN0eC5jdHgpfTt9cmV0dXJue307fWNvbnN0IHByb3BzPWF3YWl0IEFwcC5nZXRJbml0aWFsUHJvcHMoY3R4KTtpZihyZXMmJmlzUmVzU2VudChyZXMpKXtyZXR1cm4gcHJvcHM7fWlmKCFwcm9wcyl7Y29uc3QgbWVzc2FnZT1gXCIke2dldERpc3BsYXlOYW1lKEFwcCl9LmdldEluaXRpYWxQcm9wcygpXCIgc2hvdWxkIHJlc29sdmUgdG8gYW4gb2JqZWN0LiBCdXQgZm91bmQgXCIke3Byb3BzfVwiIGluc3RlYWQuYDt0aHJvdyBuZXcgRXJyb3IobWVzc2FnZSk7fWlmKHByb2Nlc3MuZW52Lk5PREVfRU5WIT09J3Byb2R1Y3Rpb24nKXtpZihPYmplY3Qua2V5cyhwcm9wcykubGVuZ3RoPT09MCYmIWN0eC5jdHgpe2NvbnNvbGUud2FybihgJHtnZXREaXNwbGF5TmFtZShBcHApfSByZXR1cm5lZCBhbiBlbXB0eSBvYmplY3QgZnJvbSBcXGBnZXRJbml0aWFsUHJvcHNcXGAuIFRoaXMgZGUtb3B0aW1pemVzIGFuZCBwcmV2ZW50cyBhdXRvbWF0aWMgc3RhdGljIG9wdGltaXphdGlvbi4gaHR0cHM6Ly9uZXh0anMub3JnL2RvY3MvbWVzc2FnZXMvZW1wdHktb2JqZWN0LWdldEluaXRpYWxQcm9wc2ApO319cmV0dXJuIHByb3BzO31jb25zdCB1cmxPYmplY3RLZXlzPVsnYXV0aCcsJ2hhc2gnLCdob3N0JywnaG9zdG5hbWUnLCdocmVmJywncGF0aCcsJ3BhdGhuYW1lJywncG9ydCcsJ3Byb3RvY29sJywncXVlcnknLCdzZWFyY2gnLCdzbGFzaGVzJ107ZXhwb3J0cy51cmxPYmplY3RLZXlzPXVybE9iamVjdEtleXM7ZnVuY3Rpb24gZm9ybWF0V2l0aFZhbGlkYXRpb24odXJsKXtpZihwcm9jZXNzLmVudi5OT0RFX0VOVj09PSdkZXZlbG9wbWVudCcpe2lmKHVybCE9PW51bGwmJnR5cGVvZiB1cmw9PT0nb2JqZWN0Jyl7T2JqZWN0LmtleXModXJsKS5mb3JFYWNoKGtleT0+e2lmKHVybE9iamVjdEtleXMuaW5kZXhPZihrZXkpPT09LTEpe2NvbnNvbGUud2FybihgVW5rbm93biBrZXkgcGFzc2VkIHZpYSB1cmxPYmplY3QgaW50byB1cmwuZm9ybWF0OiAke2tleX1gKTt9fSk7fX1yZXR1cm4oMCxfZm9ybWF0VXJsLmZvcm1hdFVybCkodXJsKTt9Y29uc3QgU1A9dHlwZW9mIHBlcmZvcm1hbmNlIT09J3VuZGVmaW5lZCc7ZXhwb3J0cy5TUD1TUDtjb25zdCBTVD1TUCYmdHlwZW9mIHBlcmZvcm1hbmNlLm1hcms9PT0nZnVuY3Rpb24nJiZ0eXBlb2YgcGVyZm9ybWFuY2UubWVhc3VyZT09PSdmdW5jdGlvbic7ZXhwb3J0cy5TVD1TVDtcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPXV0aWxzLmpzLm1hcCIsIlxuICAgIGltcG9ydCBfX2kxOG5Db25maWcgZnJvbSAnQG5leHQtdHJhbnNsYXRlLXJvb3QvaTE4bidcbiAgICBpbXBvcnQgX19hcHBXaXRoSTE4biBmcm9tICduZXh0LXRyYW5zbGF0ZS9hcHBXaXRoSTE4bidcbiAgICBcbmltcG9ydCAnLi8uLi9zdHlsZXMvZ2xvYmFscy5jc3MnXHJcbmltcG9ydCAnLi8uLi9zdHlsZXMvY2FsZW5kYXIuc2NzcydcclxuaW1wb3J0ICdyZWFjdC10b2FzdGlmeS9kaXN0L1JlYWN0VG9hc3RpZnkuY3NzJztcclxuXHJcbmltcG9ydCBIZWFkIGZyb20gJ25leHQvaGVhZCdcclxuaW1wb3J0IExheW91dFdyYXBwZXIgZnJvbSAnLi8uLi9sYXlvdXRzL2xheW91dC13cmFwcGVyJztcclxuaW1wb3J0IHsgUHJvdmlkZXIgfSBmcm9tICdyZWFjdC1yZWR1eCdcclxuaW1wb3J0IHsgc3RvcmUsIHBlcnNpc3RvciB9IGZyb20gJy4uL3JlZHV4L3N0b3JlJ1xyXG5pbXBvcnQgeyBQZXJzaXN0R2F0ZSB9IGZyb20gJ3JlZHV4LXBlcnNpc3QvaW50ZWdyYXRpb24vcmVhY3QnXHJcbmltcG9ydCB7IHJlc2V0U2VydmVyQ29udGV4dCB9IGZyb20gJ3JlYWN0LWJlYXV0aWZ1bC1kbmQnO1xyXG5pbXBvcnRcIi4vLi4vc3R5bGVzL3N0YXRpYy1lbXB0eS5jc3NcIjtcclxuXHJcblxyXG5jb25zdCBfX1BhZ2VfTmV4dF9UcmFuc2xhdGVfXyA9IGZ1bmN0aW9uIE15QXBwKHsgQ29tcG9uZW50LCBwYWdlUHJvcHMgfSkge1xyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPFByb3ZpZGVyIHN0b3JlPXtzdG9yZX0+XHJcbiAgICAgIDxQZXJzaXN0R2F0ZSBsb2FkaW5nPXtudWxsfSBwZXJzaXN0b3I9e3BlcnNpc3Rvcn0+XHJcbiAgICAgICAgPEhlYWQ+XHJcbiAgICAgICAgICA8dGl0bGU+Rm9vdEJldDwvdGl0bGU+XHJcbiAgICAgICAgICA8bWV0YSBuYW1lPVwidmlld3BvcnRcIiBjb250ZW50PVwiaW5pdGlhbC1zY2FsZT0xLjAsIHdpZHRoPWRldmljZS13aWR0aFwiIC8+XHJcbiAgICAgICAgICA8c2NyaXB0IHR5cGU9XCJ0ZXh0L2phdmFzY3JpcHRcIiBzcmM9XCIvL3ZrLmNvbS9qcy9hcGkvb3BlbmFwaS5qcz8xNTJcIj48L3NjcmlwdD5cclxuICAgICAgICA8L0hlYWQ+XHJcbiAgICAgICAgPExheW91dFdyYXBwZXIgey4uLnBhZ2VQcm9wc30+XHJcbiAgICAgICAgICA8Q29tcG9uZW50IHsuLi5wYWdlUHJvcHN9IC8+XHJcbiAgICAgICAgPC9MYXlvdXRXcmFwcGVyPlxyXG4gICAgICA8L1BlcnNpc3RHYXRlPlxyXG4gICAgPC9Qcm92aWRlcj5cclxuICApXHJcbn1cclxuXHJcbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBnZXRTZXJ2ZXJTaWRlUHJvcHMoY29udGV4dCkge1xyXG5cclxuICByZXNldFNlcnZlckNvbnRleHQoKVxyXG5cclxuICByZXR1cm4ge1xyXG4gICAgcHJvcHM6IHt9LCAvLyB3aWxsIGJlIHBhc3NlZCB0byB0aGUgcGFnZSBjb21wb25lbnQgYXMgcHJvcHNcclxuICB9XHJcbn1cblxuICAgIGV4cG9ydCBkZWZhdWx0IF9fYXBwV2l0aEkxOG4oX19QYWdlX05leHRfVHJhbnNsYXRlX18sIHtcbiAgICAgIC4uLl9faTE4bkNvbmZpZyxcbiAgICAgIGlzTG9hZGVyOiB0cnVlLFxuICAgICAgc2tpcEluaXRpYWxQcm9wczogdHJ1ZSxcbiAgICAgIGxvYWRMb2NhbGVGcm9tOiAobCwgbikgPT4gaW1wb3J0KGBAbmV4dC10cmFuc2xhdGUtcm9vdC9sb2NhbGVzLyR7bH0vJHtufWApLnRoZW4obSA9PiBtLmRlZmF1bHQpLFxuICAgIH0pO1xuICAiLCJpbXBvcnQgeyBjcmVhdGVTbGljZSB9IGZyb20gJ0ByZWR1eGpzL3Rvb2xraXQnXHJcblxyXG5cclxuZXhwb3J0IGNvbnN0IG1hdGNoU2xpY2UgPSBjcmVhdGVTbGljZSh7XHJcbiAgICBuYW1lOiBcInVzZXJcIixcclxuICAgIGluaXRpYWxTdGF0ZToge1xyXG4gICAgICAgIG1hdGNoSWQ6IG51bGxcclxuICAgIH0sXHJcbiAgICByZWR1Y2Vyczoge1xyXG4gICAgICAgIHNldE1hdGNoSWQ6IChzdGF0ZSwgYWN0aW9uKSA9PiB7XHJcbiAgICAgICAgICAgIHN0YXRlLm1hdGNoSWQgPSBhY3Rpb24ucGF5bG9hZFxyXG4gICAgICAgIH1cclxuICAgIH1cclxufSlcclxuXHJcblxyXG5leHBvcnQgY29uc3QgeyBzZXRNYXRjaElkIH0gPSBtYXRjaFNsaWNlLmFjdGlvbnNcclxuXHJcbmV4cG9ydCBjb25zdCBnZXRNYXRjaElkID0gc3RhdGUgPT4gc3RhdGUubWF0Y2gubWF0Y2hJZFxyXG5cclxuZXhwb3J0IGRlZmF1bHQgbWF0Y2hTbGljZS5yZWR1Y2VyIiwiaW1wb3J0IHsgY3JlYXRlU2xpY2UgfSBmcm9tICdAcmVkdXhqcy90b29sa2l0J1xyXG5cclxuXHJcbmV4cG9ydCBjb25zdCB1c2VyU2xpY2UgPSBjcmVhdGVTbGljZSh7XHJcbiAgICBuYW1lOiBcInVzZXJcIixcclxuICAgIGluaXRpYWxTdGF0ZToge1xyXG4gICAgICAgIHVzZXI6IG51bGxcclxuICAgIH0sXHJcbiAgICByZWR1Y2Vyczoge1xyXG4gICAgICAgIGxvZ2luOiAoc3RhdGUsIGFjdGlvbikgPT4ge1xyXG4gICAgICAgICAgICBzdGF0ZS51c2VyID0gYWN0aW9uLnBheWxvYWRcclxuICAgICAgICB9LFxyXG4gICAgICAgIGxvZ291dDogc3RhdGUgPT4ge1xyXG4gICAgICAgICAgICBzdGF0ZS51c2VyID0gbnVsbFxyXG4gICAgICAgIH1cclxuICAgIH1cclxufSlcclxuXHJcblxyXG5leHBvcnQgY29uc3QgeyBsb2dpbiwgbG9nb3V0IH0gPSB1c2VyU2xpY2UuYWN0aW9uc1xyXG5cclxuZXhwb3J0IGNvbnN0IHNlbGVjdFVzZXIgPSBzdGF0ZSA9PiBzdGF0ZS51c2VyLnVzZXJcclxuXHJcbmV4cG9ydCBkZWZhdWx0IHVzZXJTbGljZS5yZWR1Y2VyIiwiLy8gaW1wb3J0IHsgY3JlYXRlU3RvcmUgfSBmcm9tICdyZWR1eCdcclxuXHJcbi8vIGV4cG9ydCBjb25zdCBzdG9yZSA9IGNyZWF0ZVN0b3JlKC8qcmVkdWNlciBmdW5jdGlvbiovKHN0YXRlLCBhY3Rpb24pID0+IHtcclxuLy8gICAgIGlmIChhY3Rpb24udHlwZSA9PT0gXCJsb2dpblwiKSB7XHJcbi8vICAgICAgICAgcmV0dXJuIHtcclxuLy8gICAgICAgICAgICAgLi4uc3RhdGUsXHJcbi8vICAgICAgICAgICAgIGN1cnJlbnRVc2VyOiB7XHJcbi8vICAgICAgICAgICAgICAgICBuYW1lOiBhY3Rpb24ucGF5bG9hZC5uYW1lXHJcbi8vICAgICAgICAgICAgIH1cclxuLy8gICAgICAgICB9XHJcbi8vICAgICB9XHJcbi8vICAgICByZXR1cm4gc3RhdGVcclxuLy8gfSwge1xyXG4vLyAgICAgY3VycmVudFVzZXI6IHtcclxuLy8gICAgICAgICBuYW1lOiAnRXJpayBNdXJhZHlhbidcclxuLy8gICAgIH1cclxuLy8gfSlcclxuXHJcbmltcG9ydCB7IGNvbmZpZ3VyZVN0b3JlLCBjb21iaW5lUmVkdWNlcnMgfSBmcm9tIFwiQHJlZHV4anMvdG9vbGtpdFwiO1xyXG5pbXBvcnQgdXNlclJlZHVjZXIgZnJvbSBcIi4vZmVhdHVyZXMvdXNlclNsaWNlXCI7XHJcbmltcG9ydCBtYXRjaFJlZHVjZXIgZnJvbSBcIi4vZmVhdHVyZXMvbWF0Y2hTbGljZVwiO1xyXG5cclxuaW1wb3J0IHtcclxuICAgIHBlcnNpc3RTdG9yZSxcclxuICAgIHBlcnNpc3RSZWR1Y2VyLFxyXG4gICAgRkxVU0gsXHJcbiAgICBSRUhZRFJBVEUsXHJcbiAgICBQQVVTRSxcclxuICAgIFBFUlNJU1QsXHJcbiAgICBQVVJHRSxcclxuICAgIFJFR0lTVEVSLFxyXG4gIH0gZnJvbSAncmVkdXgtcGVyc2lzdCdcclxuICBcclxuaW1wb3J0IHN0b3JhZ2UgZnJvbSAncmVkdXgtcGVyc2lzdC9saWIvc3RvcmFnZSdcclxuXHJcbmNvbnN0IHBlcnNpc3RDb25maWcgPSB7XHJcbiAgICBrZXk6ICdyb290JyxcclxuICAgIHZlcnNpb246IDEsXHJcbiAgICBzdG9yYWdlLFxyXG59XHJcblxyXG5jb25zdCBwZXJzaXN0ZWRSZWR1Y2VyID0gcGVyc2lzdFJlZHVjZXIocGVyc2lzdENvbmZpZywgY29tYmluZVJlZHVjZXJzKCB7XHJcbiAgICB1c2VyOiB1c2VyUmVkdWNlcixcclxuICAgIG1hdGNoOiBtYXRjaFJlZHVjZXJcclxufSApIClcclxuXHJcbmV4cG9ydCBjb25zdCBzdG9yZSA9IGNvbmZpZ3VyZVN0b3JlKHtcclxuICAgIHJlZHVjZXI6IHBlcnNpc3RlZFJlZHVjZXIsXHJcbiAgICBtaWRkbGV3YXJlOiAoZ2V0RGVmYXVsdE1pZGRsZXdhcmUpID0+XHJcbiAgICAgIGdldERlZmF1bHRNaWRkbGV3YXJlKHtcclxuICAgICAgICBzZXJpYWxpemFibGVDaGVjazoge1xyXG4gICAgICAgICAgaWdub3JlZEFjdGlvbnM6IFtGTFVTSCwgUkVIWURSQVRFLCBQQVVTRSwgUEVSU0lTVCwgUFVSR0UsIFJFR0lTVEVSXSxcclxuICAgICAgICB9LFxyXG4gICAgICB9KSxcclxufSlcclxuICBcclxuZXhwb3J0IGNvbnN0IHBlcnNpc3RvciA9IHBlcnNpc3RTdG9yZShzdG9yZSlcclxuXHJcblxyXG4iLCJleHBvcnQgZGVmYXVsdCAge1wic3JjXCI6XCIvX25leHQvc3RhdGljL2ltYWdlL3B1YmxpYy9pbWFnZXMvY29tbW9uL3Bob25lLjMwMjE2MDE5MTk4MGNmM2ZlYmIxZWE0ZWY0NDUxOTRiLnBuZ1wiLFwiaGVpZ2h0XCI6MTYsXCJ3aWR0aFwiOjE2LFwiYmx1ckRhdGFVUkxcIjpcImRhdGE6aW1hZ2UvcG5nO2Jhc2U2NCxpVkJPUncwS0dnb0FBQUFOU1VoRVVnQUFBQWdBQUFBSUNBWUFBQURFRDc2TEFBQUE1MGxFUVZSNDJtUDQvLzgvdzlmM0gxZyt2M3N2L09mM2IzRWdYL0R2bno4QzN6OS9ZUUhKTVh4NSt4N0VFQUppYmlBV3VieHVweGFRRmdWaVlaQWlCaUNEOSs3K2s2cExOS0ttN20yZTdMUkNNNzU2UTFCeEhGQmM3Ti9mdjRJZ0JmekhKeTB4bnN2ZzhuOVhaWS9Ia2JiWjVxdU1rd3V2YjkybkRqS1o0Y2ZYcnhJZzQ1ZVlSTTliYWhZN2QwL0RKTmQ5elZNY1FWYjgvdlZMbk9IbnQrK0NJRHZmMzNzaXZkUTBadDVjQnRmL1M3U2lwZ0xGZUQ2L2Z5OE1zb0w1MS9jZllpQkZJTUdUVTVZYVBUNTFTUW5zeUkrZndZNEVLd0taQkxXT0g0ajV2bjM0Q1BZbUFHemxxMXdFU0hXR0FBQUFBRWxGVGtTdVFtQ0NcIn07IiwiZXhwb3J0IGRlZmF1bHQgIHtcInNyY1wiOlwiL19uZXh0L3N0YXRpYy9pbWFnZS9wdWJsaWMvaW1hZ2VzL2NvbW1vbi90cmlhbmdsZS41NGJhMzk1YjE0N2Q2ZDFkMTMyYTg5NmEwZmNmNTgwNy5wbmdcIixcImhlaWdodFwiOjcsXCJ3aWR0aFwiOjEwLFwiYmx1ckRhdGFVUkxcIjpcImRhdGE6aW1hZ2UvcG5nO2Jhc2U2NCxpVkJPUncwS0dnb0FBQUFOU1VoRVVnQUFBQWdBQUFBR0NBWUFBQUQrQmQvN0FBQUFoRWxFUVZSNDJrM0xzWTBDUUF4RTBkRmVmQUdpQVVRaGhGUkFUQkdBaEVRTDlFQW45RUJLU2cwazJHTXZQMlNscDdIc0hWWFYydllsN1FONU1waVA1Sm5iU3RHOXpPNkh1MmZpSisvVi9hK29FclpaRlN5VG5IaEg1a2JpelRrSEMrRm1qcWFOSzN0aGlQYm9ibUhCNGNYSDV5ZGlHUkhDVU5yQ24wbnNtUGRGQVVPU3ZzUHFtd0xFeUxxU0FBQUFBRWxGVGtTdVFtQ0NcIn07IiwiZXhwb3J0IGRlZmF1bHQgIHtcInNyY1wiOlwiL19uZXh0L3N0YXRpYy9pbWFnZS9wdWJsaWMvaW1hZ2VzL2NvbW1vbi91c2VyRGVmYXVsdC4wODE0YzI0YjIzOTEzOGE4MTc1ZmFkZDI1NTQyNzhhMC5wbmdcIixcImhlaWdodFwiOjM1LFwid2lkdGhcIjozNixcImJsdXJEYXRhVVJMXCI6XCJkYXRhOmltYWdlL3BuZztiYXNlNjQsaVZCT1J3MEtHZ29BQUFBTlNVaEVVZ0FBQUFnQUFBQUlDQVlBQUFERUQ3NkxBQUFBcjBsRVFWUjQyaldNTVFyQ1VCQkU5eEtDV0hnRUM4SENrMmdhUFZJQ1NpQ2doVldpdHRZbXBkZ2sybW5oRlFRbEpCcmR6UXdrQysvL1lXWVlNVE5SMVRIK0RQeEFCYzd3aHN3WWprQmh1UGlZYUJ3blNnM3ZCUVlzbkdnVVJma1ZFUVBVbjZhVXNGQlJBM1BkaFhyZWtycGRlVXM3SHdRcm5VNW02amh6OWYyQUJkNVQ4Qnp5UE9kMENmNkVtaDV1ejBJZks0ODB2VmdVN1N3TXQ1WmxWODdma0hWWklEMndBZmVHTmVpWW1kUlFBTkVUK0dwbWNBQUFBQUJKUlU1RXJrSmdnZz09XCJ9OyIsImV4cG9ydCBkZWZhdWx0ICB7XCJzcmNcIjpcIi9fbmV4dC9zdGF0aWMvaW1hZ2UvcHVibGljL2ltYWdlcy9mb290ZXIvbGVmdEJhbGwuOWQ5MTM0NThlNjEwNjkzZGNjZTdkOWIxOTE3NTVlZjIucG5nXCIsXCJoZWlnaHRcIjozNTgsXCJ3aWR0aFwiOjQ1MixcImJsdXJEYXRhVVJMXCI6XCJkYXRhOmltYWdlL3BuZztiYXNlNjQsaVZCT1J3MEtHZ29BQUFBTlNVaEVVZ0FBQUFnQUFBQUdDQVlBQUFEK0JkLzdBQUFBWTBsRVFWUjQybU1nQ05hdlc2ZjY0ZjFIS1p3S3ZuejVFdi8vLy8vNCsvY2V1QU81N0JnS2Z2MzhHUTVVRVBieTVhdkVsTlEwT3d3RmdYNWVFV3RXcjQ3NCsvZGY1T1hMMTBOOXc3TXdUSWxvYVc2S2VQZjJmZFNwMHhlQzZsb21vU2dBQUFoNkxqOStJcGduQUFBQUFFbEZUa1N1UW1DQ1wifTsiLCJleHBvcnQgZGVmYXVsdCAge1wic3JjXCI6XCIvX25leHQvc3RhdGljL2ltYWdlL3B1YmxpYy9pbWFnZXMvZm9vdGVyL21hc3RlckNhcmQuMjk0OTNkNTIyZDBlODU0ZWZjOWYxMDJhZDhmMGE4N2YucG5nXCIsXCJoZWlnaHRcIjo0MixcIndpZHRoXCI6NjksXCJibHVyRGF0YVVSTFwiOlwiZGF0YTppbWFnZS9wbmc7YmFzZTY0LGlWQk9SdzBLR2dvQUFBQU5TVWhFVWdBQUFBZ0FBQUFGQ0FZQUFBQjRrYTFWQUFBQW9FbEVRVlI0bkJXT1BRckNRQmdGNTB1TXFLUlJqQ0tZd2xyc3hKOUd1eUFlUU95OW1JMkJlQUNQSUloZ0VkUVQ2QUZNSUNBYmRsMkw5NmFZWmtUREVFaWdaMW1laUF0dzFScUNCK3E5RlQxYnBHVDVpR2VxV2JVY29pWU1mQzNmbTJPODhWMTBuQmlDamlML1ZLaTdDbktrcnp6VDZKYVN2VHpSeStoTXZUYW5Xb08yOVpNTVFoL1JMc1lVMTM5RGFCdjJ3TlR1eU1HK3c4YUtpeW5ZL1FEa1hEVnFFMHlrSndBQUFBQkpSVTVFcmtKZ2dnPT1cIn07IiwiZXhwb3J0IGRlZmF1bHQgIHtcInNyY1wiOlwiL19uZXh0L3N0YXRpYy9pbWFnZS9wdWJsaWMvaW1hZ2VzL2Zvb3Rlci92aXNhLjU2ZTlmODUxNDU3YWY4MzYwNTE4NmEzOTQ0ODRlMTFkLnBuZ1wiLFwiaGVpZ2h0XCI6MzEsXCJ3aWR0aFwiOjEwNCxcImJsdXJEYXRhVVJMXCI6XCJkYXRhOmltYWdlL3BuZztiYXNlNjQsaVZCT1J3MEtHZ29BQUFBTlNVaEVVZ0FBQUFnQUFBQUNDQVlBQUFCbGxKM3RBQUFBUlVsRVFWUjRuR004MkowZC91Q1RpSDM4UmRXL01seS9mejM1eHlET3dNQ3dINGpWZ0ZpVmtZSGhDUnRENko2OVlzei9WN3o2eHlqQ3dQRC9MMUJDSDRqL0FERVBBREQ2RlU0allRV21BQUFBQUVsRlRrU3VRbUNDXCJ9OyIsImV4cG9ydCBkZWZhdWx0ICB7XCJzcmNcIjpcIi9fbmV4dC9zdGF0aWMvaW1hZ2UvcHVibGljL2ltYWdlcy9oZWFkZXIvU29jaWFsTWVkaWEvY2xvc2VWZWN0b3IuZDFmYWFkYTdjNWRjZTdjOGYxZmJkMWZmZGU2Yzk5ZDkucG5nXCIsXCJoZWlnaHRcIjoxMyxcIndpZHRoXCI6MTMsXCJibHVyRGF0YVVSTFwiOlwiZGF0YTppbWFnZS9wbmc7YmFzZTY0LGlWQk9SdzBLR2dvQUFBQU5TVWhFVWdBQUFBZ0FBQUFJQ0FRQUFBQnVCbllBQUFBQVFVbEVRVlI0Mm1XTndRMEFJUXpEMHYwSE9Za0J5a3F3aEkva2lWQStycXMyWXRFVWNzcTB4T1JuRURGTU16N3dPVm1VY0RKRWhsL3hudlQxdE1XK2F2Y0JaUkZmV1pYS290MEFBQUFBU1VWT1JLNUNZSUk9XCJ9OyIsImV4cG9ydCBkZWZhdWx0ICB7XCJzcmNcIjpcIi9fbmV4dC9zdGF0aWMvaW1hZ2UvcHVibGljL2ltYWdlcy9oZWFkZXIvU29jaWFsTWVkaWEvZW1haWwuMjk4NmQwYzRiYjY1ZmUzYTFmNThiNmM5YmJlMTU5N2Euc3ZnXCIsXCJoZWlnaHRcIjoyMCxcIndpZHRoXCI6MjV9OyIsImV4cG9ydCBkZWZhdWx0ICB7XCJzcmNcIjpcIi9fbmV4dC9zdGF0aWMvaW1hZ2UvcHVibGljL2ltYWdlcy9oZWFkZXIvU29jaWFsTWVkaWEvZmFjZWJvb2suODVmNTI0ZTMyYWQzNzdlNzQyNGE1ZDg3MTJhNjY2NGEuc3ZnXCIsXCJoZWlnaHRcIjozNCxcIndpZHRoXCI6Mjh9OyIsImV4cG9ydCBkZWZhdWx0ICB7XCJzcmNcIjpcIi9fbmV4dC9zdGF0aWMvaW1hZ2UvcHVibGljL2ltYWdlcy9oZWFkZXIvU29jaWFsTWVkaWEvaW5zdGFncmFtLmY1ZmZkMjAwNTVhZWI4YmUyZTJhNmE2NmU3NTcyNzRlLnN2Z1wiLFwiaGVpZ2h0XCI6MzAsXCJ3aWR0aFwiOjMxfTsiLCJleHBvcnQgZGVmYXVsdCAge1wic3JjXCI6XCIvX25leHQvc3RhdGljL2ltYWdlL3B1YmxpYy9pbWFnZXMvaGVhZGVyL1NvY2lhbE1lZGlhL3Bob25lLjU1ZWU4ODE5ZTI1NDA5M2FhMzNmZGI0NzgyYjM1Y2Q0LnN2Z1wiLFwiaGVpZ2h0XCI6MjUsXCJ3aWR0aFwiOjI0fTsiLCJleHBvcnQgZGVmYXVsdCAge1wic3JjXCI6XCIvX25leHQvc3RhdGljL2ltYWdlL3B1YmxpYy9pbWFnZXMvaGVhZGVyL1NvY2lhbE1lZGlhL3RlbGVncmFtLmFmZjllM2Q5NWQ3NGZmNjExMjkyN2FjZjE2NDBlNmEzLnN2Z1wiLFwiaGVpZ2h0XCI6MzcsXCJ3aWR0aFwiOjI5fTsiLCJleHBvcnQgZGVmYXVsdCAge1wic3JjXCI6XCIvX25leHQvc3RhdGljL2ltYWdlL3B1YmxpYy9pbWFnZXMvaGVhZGVyL1NvY2lhbE1lZGlhL3ZpYmVyLjkyZDExOGMyNjc2MGY3OTZkYzMyNzgxNDcyNTFkZmZlLnN2Z1wiLFwiaGVpZ2h0XCI6MzksXCJ3aWR0aFwiOjMwfTsiLCJleHBvcnQgZGVmYXVsdCAge1wic3JjXCI6XCIvX25leHQvc3RhdGljL2ltYWdlL3B1YmxpYy9pbWFnZXMvaGVhZGVyL1NvY2lhbE1lZGlhL3dhdHN1cC5lNWMxZDA0NjhlY2I0YzgwNzMxYTY3ZTQ2MWUxOTI1My5zdmdcIixcImhlaWdodFwiOjM3LFwid2lkdGhcIjoyOX07IiwiZXhwb3J0IGRlZmF1bHQgIHtcInNyY1wiOlwiL19uZXh0L3N0YXRpYy9pbWFnZS9wdWJsaWMvaW1hZ2VzL2hlYWRlci9kcm9wZG93bl9saW5lcy4zMDI2MDk0YjE0NDllMTQyMDgzOWI4OWNlYTg1NWUxOS5wbmdcIixcImhlaWdodFwiOjE3LFwid2lkdGhcIjoyNyxcImJsdXJEYXRhVVJMXCI6XCJkYXRhOmltYWdlL3BuZztiYXNlNjQsaVZCT1J3MEtHZ29BQUFBTlNVaEVVZ0FBQUFnQUFBQUZDQVFBQUFEU21HWGVBQUFBTzBsRVFWUjQybDNHc1FtQU1CQUF3QzlzZENCQjV4UFV3bUJpbzhzZXdwZmhtZ3VYcHFiYmF3bWRVRHhhcWo1ckdFMVNiZ2liMDVGMnhmd0R5VXMwVi9WMGM2VUFBQUFBU1VWT1JLNUNZSUk9XCJ9OyIsImV4cG9ydCBkZWZhdWx0ICB7XCJzcmNcIjpcIi9fbmV4dC9zdGF0aWMvaW1hZ2UvcHVibGljL2ltYWdlcy9oZWFkZXIvZmxhZ3MvYXJtLjk0ZmRmYTlhNjIxNDM4YzU3MTUzYWMwN2IwNzljNDEyLnN2Z1wiLFwiaGVpZ2h0XCI6MjEsXCJ3aWR0aFwiOjIxfTsiLCJleHBvcnQgZGVmYXVsdCAge1wic3JjXCI6XCIvX25leHQvc3RhdGljL2ltYWdlL3B1YmxpYy9pbWFnZXMvaGVhZGVyL2ZsYWdzL2RldS5kYjkxOTM2YzIwOWQ4ZTBkNDE4MTBlYWMzMTQyOGI4ZC5zdmdcIixcImhlaWdodFwiOjIxLFwid2lkdGhcIjoyMX07IiwiZXhwb3J0IGRlZmF1bHQgIHtcInNyY1wiOlwiL19uZXh0L3N0YXRpYy9pbWFnZS9wdWJsaWMvaW1hZ2VzL2hlYWRlci9mbGFncy9lbi4xYzg1NjMwZGY0MTQ3MTcwODFlYTg2NTdlZWNhN2UyYy5zdmdcIixcImhlaWdodFwiOjIxLFwid2lkdGhcIjoyMX07IiwiZXhwb3J0IGRlZmF1bHQgIHtcInNyY1wiOlwiL19uZXh0L3N0YXRpYy9pbWFnZS9wdWJsaWMvaW1hZ2VzL2hlYWRlci9mbGFncy9lc3AuNDM3ODhkNTc1MTQ3MDZkZTllYTQyYzQyNGNiODc5MmYuc3ZnXCIsXCJoZWlnaHRcIjoyMSxcIndpZHRoXCI6MjF9OyIsImV4cG9ydCBkZWZhdWx0ICB7XCJzcmNcIjpcIi9fbmV4dC9zdGF0aWMvaW1hZ2UvcHVibGljL2ltYWdlcy9oZWFkZXIvZmxhZ3MvZnJjLmMzMmIzOTEzMTdmYjAzNzE4MzU1ZGQ4YTY4NGY1NTQxLnN2Z1wiLFwiaGVpZ2h0XCI6MjEsXCJ3aWR0aFwiOjIxfTsiLCJleHBvcnQgZGVmYXVsdCAge1wic3JjXCI6XCIvX25leHQvc3RhdGljL2ltYWdlL3B1YmxpYy9pbWFnZXMvaGVhZGVyL2ZsYWdzL3J1cy42ZWI0Y2IxNGM2NzI3MDk0ZmZiZGM3MDZmNTEzNjBhMC5wbmdcIixcImhlaWdodFwiOjIyLFwid2lkdGhcIjoyMSxcImJsdXJEYXRhVVJMXCI6XCJkYXRhOmltYWdlL3BuZztiYXNlNjQsaVZCT1J3MEtHZ29BQUFBTlNVaEVVZ0FBQUFnQUFBQUlDQVlBQUFERUQ3NkxBQUFBdVVsRVFWUjQyazNKVHdxQ1VCZ0U4TGxNWmVrcTF4WFVuU0xDQW85UmdmdXdqVUVVS0c0OGdKRDB4eHRvTzVIUWgvSmUzd2N1R3ZqQk1BTk9XVlpHMDdSUjI3WVZFZFQ5b3ZocTRDaWxESklUanV4d01xTEI5ZTdoeFg4cDcvb1E1OXRUTXU2ODBSY0FjQVN3azhCQkFYdEp1QlBlbkJxWUhtc3NUaEp6OTUvaWpUNkJwV2tIOW5pdExITWp0bU5MTXU2OHJVdzd4S2VQWVRwRTloNUJwU05JMXZVODc4TUFKOVpuV3FJUC9FVHZDVkpUajJKandpZCt0Q0NTY0FKQ045Z0FBQUFBU1VWT1JLNUNZSUk9XCJ9OyIsImV4cG9ydCBkZWZhdWx0ICB7XCJzcmNcIjpcIi9fbmV4dC9zdGF0aWMvaW1hZ2UvcHVibGljL2ltYWdlcy9oZWFkZXIvZm9vdGJhbGxlci43NTA1ZGI2ZmYyMzM0MDgyZTY1ZjU3YjE1NTA0NjkxYy5zdmdcIixcImhlaWdodFwiOjYwMCxcIndpZHRoXCI6NjYyfTsiLCJleHBvcnQgZGVmYXVsdCAge1wic3JjXCI6XCIvX25leHQvc3RhdGljL2ltYWdlL3B1YmxpYy9pbWFnZXMvaGVhZGVyL2xvZ2luLjJiOTBmNGYyMWM4MzBkYzM4NTFjYjNmYzNmMTYxOGIzLnBuZ1wiLFwiaGVpZ2h0XCI6MjEsXCJ3aWR0aFwiOjE5LFwiYmx1ckRhdGFVUkxcIjpcImRhdGE6aW1hZ2UvcG5nO2Jhc2U2NCxpVkJPUncwS0dnb0FBQUFOU1VoRVVnQUFBQWNBQUFBSUNBUUFBQUNmRFMyTkFBQUFaMGxFUVZSNDJqWE5Ld29DQVJoRjRlc0RFVGZnRG13R216WVhZTEVwR2hUR1pEVUpGcFBaQlpqTkxzSmxmUXgvR0c0NjNBTW5ldUxtN3VmdkU3V0ZnYXZZRld5dGpGekV1WERvYStrb1RvVWJCMk5OOTA0MFprcmVSMStzdlQxTnZTSXFWYkdIZVF0RXVrUmRyTG5iOFFBQUFBQkpSVTVFcmtKZ2dnPT1cIn07IiwiZXhwb3J0IGRlZmF1bHQgIHtcInNyY1wiOlwiL19uZXh0L3N0YXRpYy9pbWFnZS9wdWJsaWMvaW1hZ2VzL2hlYWRlci9sb2dpbi9mYWNlYm9vay41MDE5MzIyMGM3MDUxNjdjMGU4NTI0OTgyOTA4YTRlZS5zdmdcIixcImhlaWdodFwiOjc2LFwid2lkdGhcIjo3Nn07IiwiZXhwb3J0IGRlZmF1bHQgIHtcInNyY1wiOlwiL19uZXh0L3N0YXRpYy9pbWFnZS9wdWJsaWMvaW1hZ2VzL2hlYWRlci9sb2dpbi9nbWFpbC5iNzhiMzM1ZDdiNzFlYzViM2I5MDMzMDY1NDEyYTBmOC5zdmdcIixcImhlaWdodFwiOjc2LFwid2lkdGhcIjo3Nn07IiwiZXhwb3J0IGRlZmF1bHQgIHtcInNyY1wiOlwiL19uZXh0L3N0YXRpYy9pbWFnZS9wdWJsaWMvaW1hZ2VzL2hlYWRlci9sb2dpbi9zdWNjZXNzLmIyZjYzOWY2OTcxOTMxYjlkNDkzOWM1OTExOWU3ODU5LnBuZ1wiLFwiaGVpZ2h0XCI6MTMyLFwid2lkdGhcIjoxNDEsXCJibHVyRGF0YVVSTFwiOlwiZGF0YTppbWFnZS9wbmc7YmFzZTY0LGlWQk9SdzBLR2dvQUFBQU5TVWhFVWdBQUFBZ0FBQUFIQ0FZQUFBQTFXUXhlQUFBQThrbEVRVlI0bkFIbkFCai9BUm0rTGdBSkFRWSs3di8yamdVQUFpL3IvdFQrWWd0cTFYMFlkZUhrSWR4WUFSYStMVXJxL3VTMUJnRVVBQm9CRGYvZy9jNEJxUml0QVBmajlRQmc4RjVUQVFDOUh1RkhDRFVlMWZ2ZisrVDZ6Z1ZwRUhIL1hRQlgvV1hoY0FUVkZ0N2dBUUM2QVAraUQ2YjlCQWdFQTFycVZ2KzZHYjBBMU52VUFYSUxiLzRmQkRFQ0FRQy9HdUEzN3lnZmlSZUErL0lWOUFRSDV3UUFSK3hrL0E0VEN3VUEvUURnQVRLL1AwZk8vOEcyV3ZKaEFuSVVhd0NrNktnQWtCR01BQnNCTC83dC8vaEpBU25DTndBRS93UTYwL3ZOalRMbk56RFRFK2NBQ1FvRDBQZjgvWE1DQVFIR05EQmxPUGcrV0NVQUFBQUFTVVZPUks1Q1lJST1cIn07IiwiZXhwb3J0IGRlZmF1bHQgIHtcInNyY1wiOlwiL19uZXh0L3N0YXRpYy9pbWFnZS9wdWJsaWMvaW1hZ2VzL2hlYWRlci9sb2dpbi90d2l0dGVyLjM3MmY2ZjY4YWM0NmEwYjVhMmNiZjEwNmY2MDhlNGMyLnN2Z1wiLFwiaGVpZ2h0XCI6NzYsXCJ3aWR0aFwiOjc2fTsiLCJleHBvcnQgZGVmYXVsdCAge1wic3JjXCI6XCIvX25leHQvc3RhdGljL2ltYWdlL3B1YmxpYy9pbWFnZXMvaGVhZGVyL2xvZ2luL3ZrLmY5YTMyMWQzZGI1ZGUzYTcwNjQ4M2Q3MzA5NTgyMzMwLnN2Z1wiLFwiaGVpZ2h0XCI6NzYsXCJ3aWR0aFwiOjc2fTsiLCJleHBvcnQgZGVmYXVsdCAge1wic3JjXCI6XCIvX25leHQvc3RhdGljL2ltYWdlL3B1YmxpYy9pbWFnZXMvaGVhZGVyL2xvZ28uNmNkZjkxZmFmM2NhMTJhMDc2YzVmOTYyODE0NWZjMDQuc3ZnXCIsXCJoZWlnaHRcIjoyMjEsXCJ3aWR0aFwiOjIyMX07IiwiZXhwb3J0IGRlZmF1bHQgIHtcInNyY1wiOlwiL19uZXh0L3N0YXRpYy9pbWFnZS9wdWJsaWMvaW1hZ2VzL2hlYWRlci9yZWdpc3Rlci40NzQwM2I5OThjZTJjNTM2MTdiZmI0NmRiZjkxNGJkYS5wbmdcIixcImhlaWdodFwiOjIzLFwid2lkdGhcIjoyMyxcImJsdXJEYXRhVVJMXCI6XCJkYXRhOmltYWdlL3BuZztiYXNlNjQsaVZCT1J3MEtHZ29BQUFBTlNVaEVVZ0FBQUFnQUFBQUlDQVFBQUFCdUJuWUFBQUFBYlVsRVFWUjQyZzNFUVF2QkFCaUE0VThpSjJlWEhiU1RiSW9hS1FkcHJTd25zNnc0T1BnQkR1NysrWlAxOUw0aHBGNHFFNkVYT2orRnQ2K2xNQWhuR3c4M21WSVlodHBCYXlkMWxJaHc2VFVXZmJuYU5weU1qWlF5SDdrMlBPMFZHbXVWbFh1WVNzejZYMVU2OHo5aHZVelBOQzc3UmdBQUFBQkpSVTVFcmtKZ2dnPT1cIn07IiwiZXhwb3J0IGRlZmF1bHQgIHtcInNyY1wiOlwiL19uZXh0L3N0YXRpYy9pbWFnZS9wdWJsaWMvaW1hZ2VzL3BlcnNvbmFsL2JhbGwuN2E0MjE3ODYwZTNiMGJlNjQ0YTJjMDUzNGRmNmU2NGQucG5nXCIsXCJoZWlnaHRcIjo4ODIsXCJ3aWR0aFwiOjk1MCxcImJsdXJEYXRhVVJMXCI6XCJkYXRhOmltYWdlL3BuZztiYXNlNjQsaVZCT1J3MEtHZ29BQUFBTlNVaEVVZ0FBQUFnQUFBQUhDQVlBQUFBMVdReGVBQUFBa0VsRVFWUjQybVBBQmxhdldNWUVwRmlTRXBPWU1TVGZ2WDdLOXZueko2NmJOMjl5UFgvK2dndEZzamczai9YRDY4ZmMvLy8vNTRSaEZBV3paMHpsK1BUMkpkZnhZNGM0VTFPVHVCWXNtSStxNE9DK1hSd3ZuajdrV3IxeU9VaUNxN3lzRkZYQjVJbjlMRnMzcmVNNmUrbzQ1OTdkdXpqUG56M0hoZTVHeGdCL1AvYUovYjFjYTFldjVGeTJkQmtuQUZjblAzZXVzdnRjQUFBQUFFbEZUa1N1UW1DQ1wifTsiLCIvLyBFeHBvcnRzXG5tb2R1bGUuZXhwb3J0cyA9IHtcblx0XCJjb250YWluZXJcIjogXCJCYWxsX2NvbnRhaW5lcl9fMldsMWRcIixcblx0XCJiYWxsXCI6IFwiQmFsbF9iYWxsX18xU0tsTVwiLFxuXHRcInRleHRfd2l0aF9iYWxsXCI6IFwiQmFsbF90ZXh0X3dpdGhfYmFsbF9fN2xwSFVcIixcblx0XCJ0b3BcIjogXCJCYWxsX3RvcF9fUU41NkdcIixcblx0XCJib3R0b21cIjogXCJCYWxsX2JvdHRvbV9fMms0cTRcIlxufTtcbiIsIi8vIEV4cG9ydHNcbm1vZHVsZS5leHBvcnRzID0ge1xuXHRcImNvbnRhaW5lclwiOiBcIkZvb3Rlcl9jb250YWluZXJfX2wyRDRnXCIsXG5cdFwiY29udGVudFwiOiBcIkZvb3Rlcl9jb250ZW50X18xYnB1NlwiLFxuXHRcImJhbGxcIjogXCJGb290ZXJfYmFsbF9fMlNsM25cIlxufTtcbiIsIi8vIEV4cG9ydHNcbm1vZHVsZS5leHBvcnRzID0ge1xuXHRcImNvbnRhaW5lclwiOiBcIkxpc3RfY29udGFpbmVyX18xVHBuVlwiLFxuXHRcImJvcmRlcnNcIjogXCJMaXN0X2JvcmRlcnNfXzFSbXpiXCJcbn07XG4iLCIvLyBFeHBvcnRzXG5tb2R1bGUuZXhwb3J0cyA9IHtcblx0XCJjb250YWluZXJcIjogXCJOYXZpZ2F0aW9uX2NvbnRhaW5lcl9fMXMzbkdcIixcblx0XCJjb250ZW50XCI6IFwiTmF2aWdhdGlvbl9jb250ZW50X18zTk00QVwiXG59O1xuIiwiLy8gRXhwb3J0c1xubW9kdWxlLmV4cG9ydHMgPSB7XG5cdFwiY29udGFpbmVyXCI6IFwiUFNfY29udGFpbmVyX19zNGwxM1wiLFxuXHRcImljb25zXCI6IFwiUFNfaWNvbnNfX194SGJhXCJcbn07XG4iLCIvLyBFeHBvcnRzXG5tb2R1bGUuZXhwb3J0cyA9IHtcblx0XCJjb250YWluZXJcIjogXCJTTV9jb250YWluZXJfXzJMdkRzXCJcbn07XG4iLCIvLyBFeHBvcnRzXG5tb2R1bGUuZXhwb3J0cyA9IHtcblx0XCJjb250YWluZXJcIjogXCJTb2NpYWxNZWRpYV9jb250YWluZXJfXzFUaWRoXCIsXG5cdFwiY29udGVudFwiOiBcIlNvY2lhbE1lZGlhX2NvbnRlbnRfXzFLNnRsXCIsXG5cdFwiY29udHJvbGVyXCI6IFwiU29jaWFsTWVkaWFfY29udHJvbGVyX19raFNVUVwiLFxuXHRcInNvY2lhbF9tZWRpYXNcIjogXCJTb2NpYWxNZWRpYV9zb2NpYWxfbWVkaWFzX19VRXVDc1wiLFxuXHRcInBheW1lbnRfc3lzdGVtc1wiOiBcIlNvY2lhbE1lZGlhX3BheW1lbnRfc3lzdGVtc19fMVdTRjVcIlxufTtcbiIsIi8vIEV4cG9ydHNcbm1vZHVsZS5leHBvcnRzID0ge1xuXHRcImNvbnRhaW5lclwiOiBcIkljb25fY29udGFpbmVyX18yWExjdFwiLFxuXHRcImxhc3RfZWxlbWVudFwiOiBcIkljb25fbGFzdF9lbGVtZW50X18xTGg4U1wiXG59O1xuIiwiLy8gRXhwb3J0c1xubW9kdWxlLmV4cG9ydHMgPSB7XG5cdFwiYmFyX2NvbnRhaW5lclwiOiBcIkJhcl9iYXJfY29udGFpbmVyX18zN25EOVwiXG59O1xuIiwiLy8gRXhwb3J0c1xubW9kdWxlLmV4cG9ydHMgPSB7XG5cdFwiYmFyX2l0ZW1fY29udGFpbmVyXCI6IFwiQmFySXRlbXNfYmFyX2l0ZW1fY29udGFpbmVyX18xYm5PZVwiLFxuXHRcImF1dGhfY29udGFpbmVyXCI6IFwiQmFySXRlbXNfYXV0aF9jb250YWluZXJfXzJfNVM1XCIsXG5cdFwiYXV0aF9idXR0b25zXCI6IFwiQmFySXRlbXNfYXV0aF9idXR0b25zX18yU2hwVVwiLFxuXHRcInNpZ25fdXBfYnV0dG9uXCI6IFwiQmFySXRlbXNfc2lnbl91cF9idXR0b25fXzNfMk01XCIsXG5cdFwic2lnbl9pbl9idXR0b25cIjogXCJCYXJJdGVtc19zaWduX2luX2J1dHRvbl9fM1gtNl9cIixcblx0XCJsYW5nX2J1dHRvblwiOiBcIkJhckl0ZW1zX2xhbmdfYnV0dG9uX184am1fZ1wiLFxuXHRcImxhbmdfYnV0dG9uX2NvbnRlbnRcIjogXCJCYXJJdGVtc19sYW5nX2J1dHRvbl9jb250ZW50X18zdXk2blwiLFxuXHRcImZvcl9tb2JpbGVcIjogXCJCYXJJdGVtc19mb3JfbW9iaWxlX18xdk9DaVwiXG59O1xuIiwiLy8gRXhwb3J0c1xubW9kdWxlLmV4cG9ydHMgPSB7XG5cdFwiY29udGFpbmVyXCI6IFwiTGFuZ3VhZ2VEcm9wX2NvbnRhaW5lcl9fMjZZVU1cIixcblx0XCJ0cmFuc2l0aW9uXCI6IFwiTGFuZ3VhZ2VEcm9wX3RyYW5zaXRpb25fXzMwY1AtXCIsXG5cdFwiY29udGVudFwiOiBcIkxhbmd1YWdlRHJvcF9jb250ZW50X18yVjZuRlwiLFxuXHRcInJvd1wiOiBcIkxhbmd1YWdlRHJvcF9yb3dfXzE2RjZfXCJcbn07XG4iLCIvLyBFeHBvcnRzXG5tb2R1bGUuZXhwb3J0cyA9IHtcblx0XCJjb250YWluZXJcIjogXCJMb2dnZWRfY29udGFpbmVyX194bGVQTVwiLFxuXHRcImNvbnRlbnRcIjogXCJMb2dnZWRfY29udGVudF9fM2NFM09cIlxufTtcbiIsIi8vIEV4cG9ydHNcbm1vZHVsZS5leHBvcnRzID0ge1xuXHRcImNvbnRhaW5lclwiOiBcIkxvZ2dlZERyb3BfY29udGFpbmVyX18yUTZMUFwiLFxuXHRcInRyYW5zaXRpb25cIjogXCJMb2dnZWREcm9wX3RyYW5zaXRpb25fX1FnNDhpXCIsXG5cdFwiY29udGVudFwiOiBcIkxvZ2dlZERyb3BfY29udGVudF9fRUR0YnFcIixcblx0XCJ1c2VyX3Bob3RvX25hbWVcIjogXCJMb2dnZWREcm9wX3VzZXJfcGhvdG9fbmFtZV9fMTlnaWFcIixcblx0XCJ1c2VyX3RlbFwiOiBcIkxvZ2dlZERyb3BfdXNlcl90ZWxfXzEzQ0FGXCIsXG5cdFwibG9nT3V0XCI6IFwiTG9nZ2VkRHJvcF9sb2dPdXRfXzNlRC15XCJcbn07XG4iLCIvLyBFeHBvcnRzXG5tb2R1bGUuZXhwb3J0cyA9IHtcblx0XCJjb250YWluZXJcIjogXCJMb2dnZWRXYWxscGVyX2NvbnRhaW5lcl9fMm9STVZcIixcblx0XCJjb250ZW50XCI6IFwiTG9nZ2VkV2FsbHBlcl9jb250ZW50X18yTTFxVFwiLFxuXHRcInVzZXJfcGhvdG9cIjogXCJMb2dnZWRXYWxscGVyX3VzZXJfcGhvdG9fXzFtc3pwXCIsXG5cdFwidXNlcl9mdWxsTmFtZVwiOiBcIkxvZ2dlZFdhbGxwZXJfdXNlcl9mdWxsTmFtZV9fMld2cEZcIixcblx0XCJmdWxsbmFtZVwiOiBcIkxvZ2dlZFdhbGxwZXJfZnVsbG5hbWVfXzFHajI1XCJcbn07XG4iLCIvLyBFeHBvcnRzXG5tb2R1bGUuZXhwb3J0cyA9IHtcblx0XCJkcm9wZG93blwiOiBcIkRyb3Bkb3duX2Ryb3Bkb3duX18zQUJjcVwiLFxuXHRcInRyYW5zaXRpb25cIjogXCJEcm9wZG93bl90cmFuc2l0aW9uX18xZnpiT1wiLFxuXHRcImRyb3Bkb3duX21lbnVcIjogXCJEcm9wZG93bl9kcm9wZG93bl9tZW51X18xVW1ZN1wiLFxuXHRcImRyb3Bkb3duX2xpc3RcIjogXCJEcm9wZG93bl9kcm9wZG93bl9saXN0X18yYkcyWVwiLFxuXHRcImRyb3Bkb3duX2xpc3RfaXRlbXNcIjogXCJEcm9wZG93bl9kcm9wZG93bl9saXN0X2l0ZW1zX18ydl92V1wiLFxuXHRcImRyb3Bkb3duX2NoZWNrXCI6IFwiRHJvcGRvd25fZHJvcGRvd25fY2hlY2tfXzMwd09uXCJcbn07XG4iLCIvLyBFeHBvcnRzXG5tb2R1bGUuZXhwb3J0cyA9IHtcblx0XCJtX2NvbnRhaW5lclwiOiBcIkxvZ2luX21fY29udGFpbmVyX18yTktQVlwiLFxuXHRcIm1fY29udGVudFwiOiBcIkxvZ2luX21fY29udGVudF9fMWs4YzZcIixcblx0XCJsb2dpbl9jb250YWluZXJcIjogXCJMb2dpbl9sb2dpbl9jb250YWluZXJfX2pfTC1UXCJcbn07XG4iLCIvLyBFeHBvcnRzXG5tb2R1bGUuZXhwb3J0cyA9IHtcblx0XCJjb250YWluZXJcIjogXCJMb2dpbkZvcm1fY29udGFpbmVyX19HYWlGdlwiLFxuXHRcInRpdGxlXCI6IFwiTG9naW5Gb3JtX3RpdGxlX18zZm1qVFwiLFxuXHRcImlucHV0c1wiOiBcIkxvZ2luRm9ybV9pbnB1dHNfXzNDMTR4XCIsXG5cdFwicmVzZXRfcGFzc3dvcmRcIjogXCJMb2dpbkZvcm1fcmVzZXRfcGFzc3dvcmRfX0RwMl9GXCIsXG5cdFwic3VibWl0XCI6IFwiTG9naW5Gb3JtX3N1Ym1pdF9fM2ZIOElcIixcblx0XCJ0b19yZWdpc3Rlcl9jb250YWluZXJcIjogXCJMb2dpbkZvcm1fdG9fcmVnaXN0ZXJfY29udGFpbmVyX18zelpxcFwiLFxuXHRcInRvX3JlZ2lzdGVyX2NvbnRlbnRcIjogXCJMb2dpbkZvcm1fdG9fcmVnaXN0ZXJfY29udGVudF9fMUNGeGFcIixcblx0XCJ0b19yZWdpc3Rlcl90ZXh0XCI6IFwiTG9naW5Gb3JtX3RvX3JlZ2lzdGVyX3RleHRfXzFwMDk3XCJcbn07XG4iLCIvLyBFeHBvcnRzXG5tb2R1bGUuZXhwb3J0cyA9IHtcblx0XCJtX2NvbnRhaW5lclwiOiBcIkZvcmdvdFBhc3N3b3JkX21fY29udGFpbmVyX18yQkRTZVwiLFxuXHRcIm1fY29udGVudFwiOiBcIkZvcmdvdFBhc3N3b3JkX21fY29udGVudF9fMmtILTRcIixcblx0XCJjb250YWluZXJcIjogXCJGb3Jnb3RQYXNzd29yZF9jb250YWluZXJfXzJqTnRHXCIsXG5cdFwidGl0bGVcIjogXCJGb3Jnb3RQYXNzd29yZF90aXRsZV9fMUloOFdcIixcblx0XCJpbnB1dHNcIjogXCJGb3Jnb3RQYXNzd29yZF9pbnB1dHNfXzE5bFZ0XCIsXG5cdFwic3VibWl0XCI6IFwiRm9yZ290UGFzc3dvcmRfc3VibWl0X19xenB5clwiXG59O1xuIiwiLy8gRXhwb3J0c1xubW9kdWxlLmV4cG9ydHMgPSB7XG5cdFwibV9jb250YWluZXJcIjogXCJHZXRFbWFpbENvZGVfbV9jb250YWluZXJfX19xRkYtXCIsXG5cdFwibV9jb250ZW50XCI6IFwiR2V0RW1haWxDb2RlX21fY29udGVudF9fcmRBZDlcIixcblx0XCJjb250YWluZXJcIjogXCJHZXRFbWFpbENvZGVfY29udGFpbmVyX18zdHNIZFwiLFxuXHRcInRpdGxlXCI6IFwiR2V0RW1haWxDb2RlX3RpdGxlX18yWldGX1wiLFxuXHRcImRlc2NyaXB0aW9uXCI6IFwiR2V0RW1haWxDb2RlX2Rlc2NyaXB0aW9uX18zeWU4UlwiLFxuXHRcImlucHV0c1wiOiBcIkdldEVtYWlsQ29kZV9pbnB1dHNfXzJzMzY5XCIsXG5cdFwiZXJyb3JfaW5wdXRcIjogXCJHZXRFbWFpbENvZGVfZXJyb3JfaW5wdXRfX1J0XzFkXCIsXG5cdFwic3VjY2Vzc19pbnB1dFwiOiBcIkdldEVtYWlsQ29kZV9zdWNjZXNzX2lucHV0X18ycHBUcVwiLFxuXHRcInN1Ym1pdFwiOiBcIkdldEVtYWlsQ29kZV9zdWJtaXRfXzJHUlFJXCJcbn07XG4iLCIvLyBFeHBvcnRzXG5tb2R1bGUuZXhwb3J0cyA9IHtcblx0XCJtX2NvbnRhaW5lclwiOiBcIk5ld1Bhc3N3b3JkX21fY29udGFpbmVyX18xSVdIVFwiLFxuXHRcIm1fY29udGVudFwiOiBcIk5ld1Bhc3N3b3JkX21fY29udGVudF9fMk1CanlcIixcblx0XCJjb250YWluZXJcIjogXCJOZXdQYXNzd29yZF9jb250YWluZXJfXzNzeVFqXCIsXG5cdFwidGl0bGVcIjogXCJOZXdQYXNzd29yZF90aXRsZV9fMXFWWm5cIixcblx0XCJpbnB1dHNcIjogXCJOZXdQYXNzd29yZF9pbnB1dHNfXzNWejBrXCIsXG5cdFwic3VibWl0XCI6IFwiTmV3UGFzc3dvcmRfc3VibWl0X18za1gwT1wiXG59O1xuIiwiLy8gRXhwb3J0c1xubW9kdWxlLmV4cG9ydHMgPSB7XG5cdFwibV9jb250YWluZXJcIjogXCJTdWNjZXNzX21fY29udGFpbmVyX18zUkxTbFwiLFxuXHRcIm1fY29udGVudFwiOiBcIlN1Y2Nlc3NfbV9jb250ZW50X196bmFra1wiLFxuXHRcImNvbnRhaW5lclwiOiBcIlN1Y2Nlc3NfY29udGFpbmVyX19rZ3Bwa1wiLFxuXHRcInRpdGxlXCI6IFwiU3VjY2Vzc190aXRsZV9fM1BHVlBcIixcblx0XCJpY29uX2NvbnRhaW5lclwiOiBcIlN1Y2Nlc3NfaWNvbl9jb250YWluZXJfXzN3UEJWXCJcbn07XG4iLCIvLyBFeHBvcnRzXG5tb2R1bGUuZXhwb3J0cyA9IHtcblx0XCJjb250ZWluZXJcIjogXCJTb2NpYWxNZWRpYUljb25zX2NvbnRlaW5lcl9fMjJ5TF9cIixcblx0XCJjb250ZW50XCI6IFwiU29jaWFsTWVkaWFJY29uc19jb250ZW50X19QXy02R1wiLFxuXHRcImljb25Db250ZW50XCI6IFwiU29jaWFsTWVkaWFJY29uc19pY29uQ29udGVudF9fMmYwS0xcIixcblx0XCJpY29uQm9keVwiOiBcIlNvY2lhbE1lZGlhSWNvbnNfaWNvbkJvZHlfX0xXbExEXCIsXG5cdFwiaWNvblwiOiBcIlNvY2lhbE1lZGlhSWNvbnNfaWNvbl9fMUxVbmlcIlxufTtcbiIsIi8vIEV4cG9ydHNcbm1vZHVsZS5leHBvcnRzID0ge1xuXHRcImxvZ29fY29uYXRpbmVyXCI6IFwiTG9nb19sb2dvX2NvbmF0aW5lcl9fMWJ1TXVcIlxufTtcbiIsIi8vIEV4cG9ydHNcbm1vZHVsZS5leHBvcnRzID0ge1xuXHRcImhlYWRlcl9jb250YWluZXJfYmlnXCI6IFwiSGVhZGVyX2hlYWRlcl9jb250YWluZXJfYmlnX18xQmh5VlwiLFxuXHRcInRyYW5zaXRpb25cIjogXCJIZWFkZXJfdHJhbnNpdGlvbl9fMmhSWW9cIixcblx0XCJiYXJcIjogXCJIZWFkZXJfYmFyX19DX2dYM1wiLFxuXHRcImJhcl9jb250cm9sZXJcIjogXCJIZWFkZXJfYmFyX2NvbnRyb2xlcl9fM1JnX2lcIixcblx0XCJiYXJfY29udGVpbmVyXCI6IFwiSGVhZGVyX2Jhcl9jb250ZWluZXJfX2pnOTAwXCIsXG5cdFwiYmFyX2NvbnRlbnRcIjogXCJIZWFkZXJfYmFyX2NvbnRlbnRfXzFOMHlDXCIsXG5cdFwiYmFyX2l0ZW1zX2NvbnRcIjogXCJIZWFkZXJfYmFyX2l0ZW1zX2NvbnRfXzFTY3d6XCIsXG5cdFwiYmFyX2l0ZW1zXCI6IFwiSGVhZGVyX2Jhcl9pdGVtc19fR3ZzVndcIixcblx0XCJmb290YmFsbGVyXCI6IFwiSGVhZGVyX2Zvb3RiYWxsZXJfXzNTSU42XCIsXG5cdFwiaGVhZGVyX2NvbnRhaW5lcl9zbWFsbFwiOiBcIkhlYWRlcl9oZWFkZXJfY29udGFpbmVyX3NtYWxsX18zNzlWa1wiXG59O1xuIiwiLy8gRXhwb3J0c1xubW9kdWxlLmV4cG9ydHMgPSB7XG5cdFwiY29udGFpbmVyXCI6IFwiQnV0dG9uX2NvbnRhaW5lcl9fMTF6c1hcIixcblx0XCJjb250ZW50XCI6IFwiQnV0dG9uX2NvbnRlbnRfX3ZpQ1NXXCIsXG5cdFwiYWN0aXZlXCI6IFwiQnV0dG9uX2FjdGl2ZV9fMnFHTVdcIlxufTtcbiIsIi8vIEV4cG9ydHNcbm1vZHVsZS5leHBvcnRzID0ge1xuXHRcImNvbnRhaW5lclwiOiBcIk5hdkJhcl9jb250YWluZXJfXzFxSjdZXCIsXG5cdFwiY29udGVudFwiOiBcIk5hdkJhcl9jb250ZW50X18xR1FKZFwiLFxuXHRcInRvcF9vbl90YWJsZXRcIjogXCJOYXZCYXJfdG9wX29uX3RhYmxldF9fM0VIMzlcIixcblx0XCJib3R0b21fb25fdGFibGV0XCI6IFwiTmF2QmFyX2JvdHRvbV9vbl90YWJsZXRfX2V5ejlJXCIsXG5cdFwidGFibGV0XCI6IFwiTmF2QmFyX3RhYmxldF9fM0xQTW1cIlxufTtcbiIsIi8vIEV4cG9ydHNcbm1vZHVsZS5leHBvcnRzID0ge1xuXHRcImNvbnRhaW5lclwiOiBcIkljb25fY29udGFpbmVyX18zNE5mOVwiXG59O1xuIiwiLy8gRXhwb3J0c1xubW9kdWxlLmV4cG9ydHMgPSB7XG5cdFwiY29udGFpbmVyXCI6IFwiU29jaWFsTWVkaWFNb2RhbF9jb250YWluZXJfXzNmc1hrXCIsXG5cdFwiY29udGVudFwiOiBcIlNvY2lhbE1lZGlhTW9kYWxfY29udGVudF9fMTdGS0VcIlxufTtcbiIsIi8vIEV4cG9ydHNcbm1vZHVsZS5leHBvcnRzID0ge1xuXHRcImNvbnRhaW5lclwiOiBcIlNvY2lhbE1lZGlhX2NvbnRhaW5lcl9fMS15WW9cIlxufTtcbiIsIi8vIEV4cG9ydHNcbm1vZHVsZS5leHBvcnRzID0ge1xuXHRcImNvbnRhaW5lclwiOiBcIkNvbnRhY3RzX2NvbnRhaW5lcl9fMml0MFZcIixcblx0XCJjb250ZW50XCI6IFwiQ29udGFjdHNfY29udGVudF9fMmZkcmtcIixcblx0XCJtb2RhbF9jb250ZW50XCI6IFwiQ29udGFjdHNfbW9kYWxfY29udGVudF9fMlZlX3ZcIixcblx0XCJjb250ZW50X2NvbnRhaW5lclwiOiBcIkNvbnRhY3RzX2NvbnRlbnRfY29udGFpbmVyX18yMGNvQVwiLFxuXHRcInRvcFwiOiBcIkNvbnRhY3RzX3RvcF9fMmdUelNcIixcblx0XCJyb3dzXCI6IFwiQ29udGFjdHNfcm93c19fM1poRVRcIixcblx0XCJyb3dcIjogXCJDb250YWN0c19yb3dfX0FpWktqXCIsXG5cdFwiaW1nXCI6IFwiQ29udGFjdHNfaW1nX19kdlgtYVwiLFxuXHRcInRleHRcIjogXCJDb250YWN0c190ZXh0X18yRDlxY1wiLFxuXHRcIm9wZW5cIjogXCJDb250YWN0c19vcGVuX18zQ0hKX1wiLFxuXHRcInJpZ2h0TGVmdFwiOiBcIkNvbnRhY3RzX3JpZ2h0TGVmdF9fMnJsYjhcIixcblx0XCJjbG9zZVwiOiBcIkNvbnRhY3RzX2Nsb3NlX19WaTdnN1wiXG59O1xuIiwiLy8gRXhwb3J0c1xubW9kdWxlLmV4cG9ydHMgPSB7XG5cdFwiY29udGFpbmVyXCI6IFwiSW5wdXRDb250YWluZXJfY29udGFpbmVyX18xS3p2U1wiLFxuXHRcImxhYmVsX2NvbnRlbnRcIjogXCJJbnB1dENvbnRhaW5lcl9sYWJlbF9jb250ZW50X18yX3lBUVwiLFxuXHRcImlucHV0X2NvbnRhaW5lclwiOiBcIklucHV0Q29udGFpbmVyX2lucHV0X2NvbnRhaW5lcl9fMWJUUkpcIixcblx0XCJpbnB1dF9zdWNjZXNzX2NvbnRlbnRcIjogXCJJbnB1dENvbnRhaW5lcl9pbnB1dF9zdWNjZXNzX2NvbnRlbnRfXzF5T1pEXCIsXG5cdFwiaW5wdXRfZXJyb3JfY29udGVudFwiOiBcIklucHV0Q29udGFpbmVyX2lucHV0X2Vycm9yX2NvbnRlbnRfXzMtVzJXXCJcbn07XG4iLCIvLyBFeHBvcnRzXG5tb2R1bGUuZXhwb3J0cyA9IHtcblx0XCJtb2RhbENvbnRlaW5lclwiOiBcIk1vZGFsX21vZGFsQ29udGVpbmVyX18zZzhJZlwiLFxuXHRcInRyYW5zaXRpb25cIjogXCJNb2RhbF90cmFuc2l0aW9uX18xa2Z2OVwiLFxuXHRcIm1vZGFsQ29udGVudFwiOiBcIk1vZGFsX21vZGFsQ29udGVudF9fMS1PNDdcIlxufTtcbiIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIkBob29rZm9ybS9yZXNvbHZlcnMveXVwXCIpOzsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJAcmVkdXhqcy90b29sa2l0XCIpOzsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJheGlvc1wiKTs7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwibmV4dC10cmFuc2xhdGUvYXBwV2l0aEkxOG5cIik7OyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIm5leHQtdHJhbnNsYXRlL3VzZVRyYW5zbGF0aW9uXCIpOzsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJuZXh0L2Rpc3QvbmV4dC1zZXJ2ZXIvbGliL3JvdXRlci1jb250ZXh0LmpzXCIpOzsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJuZXh0L2Rpc3QvbmV4dC1zZXJ2ZXIvbGliL3JvdXRlci91dGlscy9nZXQtYXNzZXQtcGF0aC1mcm9tLXJvdXRlLmpzXCIpOzsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJuZXh0L2hlYWRcIik7OyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlYWN0XCIpOzsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdC1iZWF1dGlmdWwtZG5kXCIpOzsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdC1kb21cIik7OyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlYWN0LWZhY2Vib29rLWxvZ2luXCIpOzsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdC1nb29nbGUtbG9naW5cIik7OyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlYWN0LWhvb2stZm9ybVwiKTs7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVhY3QtaXNcIik7OyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlYWN0LXJlZHV4XCIpOzsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdC10b2FzdGlmeVwiKTs7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVhY3QtdHdpdHRlci1sb2dpblwiKTs7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVhY3QvanN4LWRldi1ydW50aW1lXCIpOzsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWR1eC1wZXJzaXN0XCIpOzsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWR1eC1wZXJzaXN0L2ludGVncmF0aW9uL3JlYWN0XCIpOzsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWR1eC1wZXJzaXN0L2xpYi9zdG9yYWdlXCIpOzsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJ5dXBcIik7OyIsIi8qIChpZ25vcmVkKSAqLyJdLCJzb3VyY2VSb290IjoiIn0=