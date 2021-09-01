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
/* harmony export */   "GET_MATCHES_BY_TYPE": function() { return /* binding */ GET_MATCHES_BY_TYPE; },
/* harmony export */   "ADD_FEEDBACK": function() { return /* binding */ ADD_FEEDBACK; }
/* harmony export */ });
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./constants */ "./lib/constants.js");

const AUTH_URL = _constants__WEBPACK_IMPORTED_MODULE_0__.host + `auth/`;
const ACCOUNT_URL = _constants__WEBPACK_IMPORTED_MODULE_0__.host + `account/`;
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
  url: ACCOUNT_URL + `news`,
  method: `get`
};
const GET_MATCHES = {
  url: ACCOUNT_URL + `match-of-the-day`,
  method: `get`
};
const GET_MATCHES_OF_NEXT_DAY = {
  url: ACCOUNT_URL + `match-of-the-day?type=next_day`,
  method: `get`
};
const GET_PREDICTIONS = {
  url: ACCOUNT_URL + `prediction`,
  method: `get`
};
const GET_FEEDBACK = id => ({
  url: _constants__WEBPACK_IMPORTED_MODULE_0__.host + `feedback/${id}?sort_by=created_at&order_by=desc`,
  method: `get`
});
const GET_MATCHES_BY_TYPE = type => ({
  url: ACCOUNT_URL + `game?type=${type}`,
  method: `get`
});
const ADD_FEEDBACK = {
  url: _constants__WEBPACK_IMPORTED_MODULE_0__.host + `feedback`,
  method: `post`
};

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9mb290LWJldC8uL2xvY2FsZXN8bGF6eXwvXi8uKi8uKiQvfGdyb3VwT3B0aW9uczoge318bmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly9mb290LWJldC8uL25vZGVfbW9kdWxlcy9AYmFiZWwvcnVudGltZS9oZWxwZXJzL2ludGVyb3BSZXF1aXJlRGVmYXVsdC5qcyIsIndlYnBhY2s6Ly9mb290LWJldC8uL25vZGVfbW9kdWxlcy9AYmFiZWwvcnVudGltZS9oZWxwZXJzL2ludGVyb3BSZXF1aXJlV2lsZGNhcmQuanMiLCJ3ZWJwYWNrOi8vZm9vdC1iZXQvLi9ub2RlX21vZHVsZXMvQGJhYmVsL3J1bnRpbWUvaGVscGVycy90eXBlb2YuanMiLCJ3ZWJwYWNrOi8vZm9vdC1iZXQvLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L25leHQtc2VydmVyL3NlcnZlci9kZW5vcm1hbGl6ZS1wYWdlLXBhdGguanMiLCJ3ZWJwYWNrOi8vZm9vdC1iZXQvLi9ub2RlX21vZHVsZXMvbmV4dC9saW5rLmpzIiwid2VicGFjazovL2Zvb3QtYmV0Ly4vY29tcG9uZW50cy9Gb290ZXIvQmFsbC9CYWxsLmpzeCIsIndlYnBhY2s6Ly9mb290LWJldC8uL2NvbXBvbmVudHMvRm9vdGVyL0Zvb3Rlci5qc3giLCJ3ZWJwYWNrOi8vZm9vdC1iZXQvLi9jb21wb25lbnRzL0Zvb3Rlci9OYXZpZ2F0aW9uL0xpc3QvTGlzdC5qc3giLCJ3ZWJwYWNrOi8vZm9vdC1iZXQvLi9jb21wb25lbnRzL0Zvb3Rlci9OYXZpZ2F0aW9uL05hdmlnYXRpb24uanN4Iiwid2VicGFjazovL2Zvb3QtYmV0Ly4vY29tcG9uZW50cy9Gb290ZXIvTmF2aWdhdGlvbi9uYXZfZGF0YS5qcyIsIndlYnBhY2s6Ly9mb290LWJldC8uL2NvbXBvbmVudHMvRm9vdGVyL1NvY2lhbE1lZGlhL1BTSWNvbnMvUFMuanN4Iiwid2VicGFjazovL2Zvb3QtYmV0Ly4vY29tcG9uZW50cy9Gb290ZXIvU29jaWFsTWVkaWEvU01JY29ucy9TTS5qc3giLCJ3ZWJwYWNrOi8vZm9vdC1iZXQvLi9jb21wb25lbnRzL0Zvb3Rlci9Tb2NpYWxNZWRpYS9Tb2NpYWxNZWRpYS5qc3giLCJ3ZWJwYWNrOi8vZm9vdC1iZXQvLi9jb21wb25lbnRzL0Zvb3Rlci9Tb2NpYWxNZWRpYS9jb21tb24vSWNvbi9JY29uLmpzeCIsIndlYnBhY2s6Ly9mb290LWJldC8uL2NvbXBvbmVudHMvSGVhZGVyL0Jhci9CYXIuanN4Iiwid2VicGFjazovL2Zvb3QtYmV0Ly4vY29tcG9uZW50cy9IZWFkZXIvQmFyL0Jhckl0ZW1zL0Jhckl0ZW1zLmpzeCIsIndlYnBhY2s6Ly9mb290LWJldC8uL2NvbXBvbmVudHMvSGVhZGVyL0Jhci9CYXJJdGVtcy9MYW5ndWFnZURyb3BDb25maWdzL2xhbmctY29uZmlncy5qcyIsIndlYnBhY2s6Ly9mb290LWJldC8uL2NvbXBvbmVudHMvSGVhZGVyL0Jhci9CYXJJdGVtcy9MYW5ndWFnZURyb3AvTGFuZ3VhZ2VEcm9wLmpzeCIsIndlYnBhY2s6Ly9mb290LWJldC8uL2NvbXBvbmVudHMvSGVhZGVyL0Jhci9CYXJJdGVtcy9Mb2dnZWQvTG9nZ2VkLmpzeCIsIndlYnBhY2s6Ly9mb290LWJldC8uL2NvbXBvbmVudHMvSGVhZGVyL0Jhci9CYXJJdGVtcy9Mb2dnZWQvTG9nZ2VkRHJvcC9Mb2dnZWREcm9wLmpzeCIsIndlYnBhY2s6Ly9mb290LWJldC8uL2NvbXBvbmVudHMvSGVhZGVyL0Jhci9CYXJJdGVtcy9Mb2dnZWQvTG9nZ2VkV2FsbHBlci9Mb2dnZWRXYWxscGVyLmpzeCIsIndlYnBhY2s6Ly9mb290LWJldC8uL2NvbXBvbmVudHMvSGVhZGVyL0Jhci9Ecm9wZG93bk1lbnUvRHJvcGRvd24uanN4Iiwid2VicGFjazovL2Zvb3QtYmV0Ly4vY29tcG9uZW50cy9IZWFkZXIvQmFyL0xvZ2luL0xvZ2luLmpzeCIsIndlYnBhY2s6Ly9mb290LWJldC8uL2NvbXBvbmVudHMvSGVhZGVyL0Jhci9Mb2dpbi9Mb2dpbkZvcm0vTG9naW5Gb3JtLmpzeCIsIndlYnBhY2s6Ly9mb290LWJldC8uL2NvbXBvbmVudHMvSGVhZGVyL0Jhci9Mb2dpbi9SZXNldFBhc3N3b3JkL0ZvcmdvdFBhc3N3b3JkL0ZvcmdvdFBhc3N3b3JkLmpzeCIsIndlYnBhY2s6Ly9mb290LWJldC8uL2NvbXBvbmVudHMvSGVhZGVyL0Jhci9Mb2dpbi9SZXNldFBhc3N3b3JkL0dldEVtYWlsQ29kZS9HZXRFbWFpbENvZGUuanN4Iiwid2VicGFjazovL2Zvb3QtYmV0Ly4vY29tcG9uZW50cy9IZWFkZXIvQmFyL0xvZ2luL1Jlc2V0UGFzc3dvcmQvR2V0RW1haWxDb2RlL2lucHV0X2NvbmZpZ3MuanMiLCJ3ZWJwYWNrOi8vZm9vdC1iZXQvLi9jb21wb25lbnRzL0hlYWRlci9CYXIvTG9naW4vUmVzZXRQYXNzd29yZC9OZXdQYXNzd29yZC9OZXdQYXNzd29yZC5qc3giLCJ3ZWJwYWNrOi8vZm9vdC1iZXQvLi9jb21wb25lbnRzL0hlYWRlci9CYXIvTG9naW4vUmVzZXRQYXNzd29yZC9TdWNjZXNzL1N1Y2Nlc3MuanN4Iiwid2VicGFjazovL2Zvb3QtYmV0Ly4vY29tcG9uZW50cy9IZWFkZXIvQmFyL0xvZ2luL1NvY2lhbE1lZGlhSWNvbnMvU29jaWFsTWVkaWFJY29ucy5qc3giLCJ3ZWJwYWNrOi8vZm9vdC1iZXQvLi9jb21wb25lbnRzL0hlYWRlci9CYXIvTG9naW4vY29tbW9uL1Jlc2V0UGFzc3dvcmRMaW5rLmpzeCIsIndlYnBhY2s6Ly9mb290LWJldC8uL2NvbXBvbmVudHMvSGVhZGVyL0Jhci9Mb2dpbi9jb21tb24vU3VibWl0LmpzeCIsIndlYnBhY2s6Ly9mb290LWJldC8uL2NvbXBvbmVudHMvSGVhZGVyL0Jhci9Mb2dpbi9jb21tb24vVGl0bGUuanN4Iiwid2VicGFjazovL2Zvb3QtYmV0Ly4vY29tcG9uZW50cy9IZWFkZXIvQmFyL0xvZ2luL2NvbW1vbi9Ub1JlZ2lzdGVyLmpzeCIsIndlYnBhY2s6Ly9mb290LWJldC8uL2NvbXBvbmVudHMvSGVhZGVyL0Jhci9Mb2dvL0xvZ28uanN4Iiwid2VicGFjazovL2Zvb3QtYmV0Ly4vY29tcG9uZW50cy9IZWFkZXIvSGVhZGVyLmpzeCIsIndlYnBhY2s6Ly9mb290LWJldC8uL2NvbXBvbmVudHMvSGVhZGVyL05hdkJhci9CdXR0b24vQnV0dG9uLmpzeCIsIndlYnBhY2s6Ly9mb290LWJldC8uL2NvbXBvbmVudHMvSGVhZGVyL05hdkJhci9OYXZCYXIuanN4Iiwid2VicGFjazovL2Zvb3QtYmV0Ly4vY29tcG9uZW50cy9IZWFkZXIvU29jaWFsTWVkaWEvSWNvbi9JY29uLmpzeCIsIndlYnBhY2s6Ly9mb290LWJldC8uL2NvbXBvbmVudHMvSGVhZGVyL1NvY2lhbE1lZGlhL01vZGFscy9GYWNlYm9vay9GYWNlYm9vay5qc3giLCJ3ZWJwYWNrOi8vZm9vdC1iZXQvLi9jb21wb25lbnRzL0hlYWRlci9Tb2NpYWxNZWRpYS9Nb2RhbHMvSW5zdGFncmFtL0luc3RhZ3JhbS5qc3giLCJ3ZWJwYWNrOi8vZm9vdC1iZXQvLi9jb21wb25lbnRzL0hlYWRlci9Tb2NpYWxNZWRpYS9Nb2RhbHMvUGhvbmUvUGhvbmUuanN4Iiwid2VicGFjazovL2Zvb3QtYmV0Ly4vY29tcG9uZW50cy9IZWFkZXIvU29jaWFsTWVkaWEvTW9kYWxzL1RlbGVncmFtL1RlbGVncmFtLmpzeCIsIndlYnBhY2s6Ly9mb290LWJldC8uL2NvbXBvbmVudHMvSGVhZGVyL1NvY2lhbE1lZGlhL01vZGFscy9WaWJlci9WaWJlci5qc3giLCJ3ZWJwYWNrOi8vZm9vdC1iZXQvLi9jb21wb25lbnRzL0hlYWRlci9Tb2NpYWxNZWRpYS9Nb2RhbHMvV2F0c1VwL1dhdHNVcC5qc3giLCJ3ZWJwYWNrOi8vZm9vdC1iZXQvLi9jb21wb25lbnRzL0hlYWRlci9Tb2NpYWxNZWRpYS9Tb2NpYWxNZWRpYS5qc3giLCJ3ZWJwYWNrOi8vZm9vdC1iZXQvLi9jb21wb25lbnRzL1BhZ2VzL0NvbnRhY3RzL0NvbnRhY3RzTW9kYWwuanN4Iiwid2VicGFjazovL2Zvb3QtYmV0Ly4vY29tcG9uZW50cy9QYWdlcy9Db250YWN0cy9jb250YWN0c19kYXRhLmpzIiwid2VicGFjazovL2Zvb3QtYmV0Ly4vY29tcG9uZW50cy9jb21tb24vYXV0aC9JbnB1dENvbnRhaW5lci9JbnB1dENvbnRhaW5lci5qc3giLCJ3ZWJwYWNrOi8vZm9vdC1iZXQvLi9jb21wb25lbnRzL2NvbW1vbi9hdXRoL01vZGFsL01vZGFsLmpzeCIsIndlYnBhY2s6Ly9mb290LWJldC8uL2xheW91dHMvRXJyb3IuanN4Iiwid2VicGFjazovL2Zvb3QtYmV0Ly4vbGF5b3V0cy9NYWluLmpzeCIsIndlYnBhY2s6Ly9mb290LWJldC8uL2xheW91dHMvUmVnaXN0ZXIuanN4Iiwid2VicGFjazovL2Zvb3QtYmV0Ly4vbGF5b3V0cy9XaXRob3V0UGhvdG8uanN4Iiwid2VicGFjazovL2Zvb3QtYmV0Ly4vbGF5b3V0cy9sYXlvdXQtd3JhcHBlci5qc3giLCJ3ZWJwYWNrOi8vZm9vdC1iZXQvLi9saWIvY29uc3RhbnRzLmpzIiwid2VicGFjazovL2Zvb3QtYmV0Ly4vbGliL2VyLmxpYi5qcyIsIndlYnBhY2s6Ly9mb290LWJldC8uL2xpYi9yZXF1ZXN0LWRlc3RpbmF0aW9ucy5qcyIsIndlYnBhY2s6Ly9mb290LWJldC8uL25vZGVfbW9kdWxlcy9uZXh0L2Rpc3QvY2xpZW50L2xpbmsuanMiLCJ3ZWJwYWNrOi8vZm9vdC1iZXQvLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L2NsaWVudC9ub3JtYWxpemUtdHJhaWxpbmctc2xhc2guanMiLCJ3ZWJwYWNrOi8vZm9vdC1iZXQvLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L2NsaWVudC9yZXF1ZXN0LWlkbGUtY2FsbGJhY2suanMiLCJ3ZWJwYWNrOi8vZm9vdC1iZXQvLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L2NsaWVudC9yb3V0ZS1sb2FkZXIuanMiLCJ3ZWJwYWNrOi8vZm9vdC1iZXQvLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L2NsaWVudC9yb3V0ZXIuanMiLCJ3ZWJwYWNrOi8vZm9vdC1iZXQvLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L2NsaWVudC91c2UtaW50ZXJzZWN0aW9uLmpzIiwid2VicGFjazovL2Zvb3QtYmV0Ly4vbm9kZV9tb2R1bGVzL25leHQvZGlzdC9jbGllbnQvd2l0aC1yb3V0ZXIuanMiLCJ3ZWJwYWNrOi8vZm9vdC1iZXQvLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L25leHQtc2VydmVyL2xpYi9pMThuL2RldGVjdC1kb21haW4tbG9jYWxlLmpzIiwid2VicGFjazovL2Zvb3QtYmV0Ly4vbm9kZV9tb2R1bGVzL25leHQvZGlzdC9uZXh0LXNlcnZlci9saWIvaTE4bi9ub3JtYWxpemUtbG9jYWxlLXBhdGguanMiLCJ3ZWJwYWNrOi8vZm9vdC1iZXQvLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L25leHQtc2VydmVyL2xpYi9taXR0LmpzIiwid2VicGFjazovL2Zvb3QtYmV0Ly4vbm9kZV9tb2R1bGVzL25leHQvZGlzdC9uZXh0LXNlcnZlci9saWIvcm91dGVyL3JvdXRlci5qcyIsIndlYnBhY2s6Ly9mb290LWJldC8uL25vZGVfbW9kdWxlcy9uZXh0L2Rpc3QvbmV4dC1zZXJ2ZXIvbGliL3JvdXRlci91dGlscy9mb3JtYXQtdXJsLmpzIiwid2VicGFjazovL2Zvb3QtYmV0Ly4vbm9kZV9tb2R1bGVzL25leHQvZGlzdC9uZXh0LXNlcnZlci9saWIvcm91dGVyL3V0aWxzL2lzLWR5bmFtaWMuanMiLCJ3ZWJwYWNrOi8vZm9vdC1iZXQvLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L25leHQtc2VydmVyL2xpYi9yb3V0ZXIvdXRpbHMvcGFyc2UtcmVsYXRpdmUtdXJsLmpzIiwid2VicGFjazovL2Zvb3QtYmV0Ly4vbm9kZV9tb2R1bGVzL25leHQvZGlzdC9uZXh0LXNlcnZlci9saWIvcm91dGVyL3V0aWxzL3F1ZXJ5c3RyaW5nLmpzIiwid2VicGFjazovL2Zvb3QtYmV0Ly4vbm9kZV9tb2R1bGVzL25leHQvZGlzdC9uZXh0LXNlcnZlci9saWIvcm91dGVyL3V0aWxzL3JvdXRlLW1hdGNoZXIuanMiLCJ3ZWJwYWNrOi8vZm9vdC1iZXQvLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L25leHQtc2VydmVyL2xpYi9yb3V0ZXIvdXRpbHMvcm91dGUtcmVnZXguanMiLCJ3ZWJwYWNrOi8vZm9vdC1iZXQvLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L25leHQtc2VydmVyL2xpYi91dGlscy5qcyIsIndlYnBhY2s6Ly9mb290LWJldC8uL3BhZ2VzL19hcHAuanMiLCJ3ZWJwYWNrOi8vZm9vdC1iZXQvLi9yZWR1eC9mZWF0dXJlcy9tYXRjaFNsaWNlLmpzIiwid2VicGFjazovL2Zvb3QtYmV0Ly4vcmVkdXgvZmVhdHVyZXMvdXNlclNsaWNlLmpzIiwid2VicGFjazovL2Zvb3QtYmV0Ly4vcmVkdXgvc3RvcmUuanMiLCJ3ZWJwYWNrOi8vZm9vdC1iZXQvLi9wdWJsaWMvaW1hZ2VzL2NvbW1vbi9waG9uZS5wbmciLCJ3ZWJwYWNrOi8vZm9vdC1iZXQvLi9wdWJsaWMvaW1hZ2VzL2NvbW1vbi90cmlhbmdsZS5wbmciLCJ3ZWJwYWNrOi8vZm9vdC1iZXQvLi9wdWJsaWMvaW1hZ2VzL2NvbW1vbi91c2VyRGVmYXVsdC5wbmciLCJ3ZWJwYWNrOi8vZm9vdC1iZXQvLi9wdWJsaWMvaW1hZ2VzL2Zvb3Rlci9sZWZ0QmFsbC5wbmciLCJ3ZWJwYWNrOi8vZm9vdC1iZXQvLi9wdWJsaWMvaW1hZ2VzL2Zvb3Rlci9tYXN0ZXJDYXJkLnBuZyIsIndlYnBhY2s6Ly9mb290LWJldC8uL3B1YmxpYy9pbWFnZXMvZm9vdGVyL3Zpc2EucG5nIiwid2VicGFjazovL2Zvb3QtYmV0Ly4vcHVibGljL2ltYWdlcy9oZWFkZXIvU29jaWFsTWVkaWEvY2xvc2VWZWN0b3IucG5nIiwid2VicGFjazovL2Zvb3QtYmV0Ly4vcHVibGljL2ltYWdlcy9oZWFkZXIvU29jaWFsTWVkaWEvZW1haWwuc3ZnIiwid2VicGFjazovL2Zvb3QtYmV0Ly4vcHVibGljL2ltYWdlcy9oZWFkZXIvU29jaWFsTWVkaWEvZmFjZWJvb2suc3ZnIiwid2VicGFjazovL2Zvb3QtYmV0Ly4vcHVibGljL2ltYWdlcy9oZWFkZXIvU29jaWFsTWVkaWEvaW5zdGFncmFtLnN2ZyIsIndlYnBhY2s6Ly9mb290LWJldC8uL3B1YmxpYy9pbWFnZXMvaGVhZGVyL1NvY2lhbE1lZGlhL3Bob25lLnN2ZyIsIndlYnBhY2s6Ly9mb290LWJldC8uL3B1YmxpYy9pbWFnZXMvaGVhZGVyL1NvY2lhbE1lZGlhL3RlbGVncmFtLnN2ZyIsIndlYnBhY2s6Ly9mb290LWJldC8uL3B1YmxpYy9pbWFnZXMvaGVhZGVyL1NvY2lhbE1lZGlhL3ZpYmVyLnN2ZyIsIndlYnBhY2s6Ly9mb290LWJldC8uL3B1YmxpYy9pbWFnZXMvaGVhZGVyL1NvY2lhbE1lZGlhL3dhdHN1cC5zdmciLCJ3ZWJwYWNrOi8vZm9vdC1iZXQvLi9wdWJsaWMvaW1hZ2VzL2hlYWRlci9kcm9wZG93bl9saW5lcy5wbmciLCJ3ZWJwYWNrOi8vZm9vdC1iZXQvLi9wdWJsaWMvaW1hZ2VzL2hlYWRlci9mbGFncy9hcm0uc3ZnIiwid2VicGFjazovL2Zvb3QtYmV0Ly4vcHVibGljL2ltYWdlcy9oZWFkZXIvZmxhZ3MvZGV1LnN2ZyIsIndlYnBhY2s6Ly9mb290LWJldC8uL3B1YmxpYy9pbWFnZXMvaGVhZGVyL2ZsYWdzL2VuLnN2ZyIsIndlYnBhY2s6Ly9mb290LWJldC8uL3B1YmxpYy9pbWFnZXMvaGVhZGVyL2ZsYWdzL2VzcC5zdmciLCJ3ZWJwYWNrOi8vZm9vdC1iZXQvLi9wdWJsaWMvaW1hZ2VzL2hlYWRlci9mbGFncy9mcmMuc3ZnIiwid2VicGFjazovL2Zvb3QtYmV0Ly4vcHVibGljL2ltYWdlcy9oZWFkZXIvZmxhZ3MvcnVzLnBuZyIsIndlYnBhY2s6Ly9mb290LWJldC8uL3B1YmxpYy9pbWFnZXMvaGVhZGVyL2Zvb3RiYWxsZXIuc3ZnIiwid2VicGFjazovL2Zvb3QtYmV0Ly4vcHVibGljL2ltYWdlcy9oZWFkZXIvbG9naW4ucG5nIiwid2VicGFjazovL2Zvb3QtYmV0Ly4vcHVibGljL2ltYWdlcy9oZWFkZXIvbG9naW4vZmFjZWJvb2suc3ZnIiwid2VicGFjazovL2Zvb3QtYmV0Ly4vcHVibGljL2ltYWdlcy9oZWFkZXIvbG9naW4vZ21haWwuc3ZnIiwid2VicGFjazovL2Zvb3QtYmV0Ly4vcHVibGljL2ltYWdlcy9oZWFkZXIvbG9naW4vc3VjY2Vzcy5wbmciLCJ3ZWJwYWNrOi8vZm9vdC1iZXQvLi9wdWJsaWMvaW1hZ2VzL2hlYWRlci9sb2dpbi90d2l0dGVyLnN2ZyIsIndlYnBhY2s6Ly9mb290LWJldC8uL3B1YmxpYy9pbWFnZXMvaGVhZGVyL2xvZ2luL3ZrLnN2ZyIsIndlYnBhY2s6Ly9mb290LWJldC8uL3B1YmxpYy9pbWFnZXMvaGVhZGVyL2xvZ28uc3ZnIiwid2VicGFjazovL2Zvb3QtYmV0Ly4vcHVibGljL2ltYWdlcy9oZWFkZXIvcmVnaXN0ZXIucG5nIiwid2VicGFjazovL2Zvb3QtYmV0Ly4vcHVibGljL2ltYWdlcy9wZXJzb25hbC9iYWxsLnBuZyIsIndlYnBhY2s6Ly9mb290LWJldC8uL2NvbXBvbmVudHMvRm9vdGVyL0JhbGwvQmFsbC5tb2R1bGUuc2NzcyIsIndlYnBhY2s6Ly9mb290LWJldC8uL2NvbXBvbmVudHMvRm9vdGVyL0Zvb3Rlci5tb2R1bGUuc2NzcyIsIndlYnBhY2s6Ly9mb290LWJldC8uL2NvbXBvbmVudHMvRm9vdGVyL05hdmlnYXRpb24vTGlzdC9MaXN0Lm1vZHVsZS5zY3NzIiwid2VicGFjazovL2Zvb3QtYmV0Ly4vY29tcG9uZW50cy9Gb290ZXIvTmF2aWdhdGlvbi9OYXZpZ2F0aW9uLm1vZHVsZS5zY3NzIiwid2VicGFjazovL2Zvb3QtYmV0Ly4vY29tcG9uZW50cy9Gb290ZXIvU29jaWFsTWVkaWEvUFNJY29ucy9QUy5tb2R1bGUuc2NzcyIsIndlYnBhY2s6Ly9mb290LWJldC8uL2NvbXBvbmVudHMvRm9vdGVyL1NvY2lhbE1lZGlhL1NNSWNvbnMvU00ubW9kdWxlLnNjc3MiLCJ3ZWJwYWNrOi8vZm9vdC1iZXQvLi9jb21wb25lbnRzL0Zvb3Rlci9Tb2NpYWxNZWRpYS9Tb2NpYWxNZWRpYS5tb2R1bGUuc2NzcyIsIndlYnBhY2s6Ly9mb290LWJldC8uL2NvbXBvbmVudHMvRm9vdGVyL1NvY2lhbE1lZGlhL2NvbW1vbi9JY29uL0ljb24ubW9kdWxlLnNjc3MiLCJ3ZWJwYWNrOi8vZm9vdC1iZXQvLi9jb21wb25lbnRzL0hlYWRlci9CYXIvQmFyLm1vZHVsZS5zY3NzIiwid2VicGFjazovL2Zvb3QtYmV0Ly4vY29tcG9uZW50cy9IZWFkZXIvQmFyL0Jhckl0ZW1zL0Jhckl0ZW1zLm1vZHVsZS5zY3NzIiwid2VicGFjazovL2Zvb3QtYmV0Ly4vY29tcG9uZW50cy9IZWFkZXIvQmFyL0Jhckl0ZW1zL0xhbmd1YWdlRHJvcC9MYW5ndWFnZURyb3AubW9kdWxlLnNjc3MiLCJ3ZWJwYWNrOi8vZm9vdC1iZXQvLi9jb21wb25lbnRzL0hlYWRlci9CYXIvQmFySXRlbXMvTG9nZ2VkL0xvZ2dlZC5tb2R1bGUuc2NzcyIsIndlYnBhY2s6Ly9mb290LWJldC8uL2NvbXBvbmVudHMvSGVhZGVyL0Jhci9CYXJJdGVtcy9Mb2dnZWQvTG9nZ2VkRHJvcC9Mb2dnZWREcm9wLm1vZHVsZS5zY3NzIiwid2VicGFjazovL2Zvb3QtYmV0Ly4vY29tcG9uZW50cy9IZWFkZXIvQmFyL0Jhckl0ZW1zL0xvZ2dlZC9Mb2dnZWRXYWxscGVyL0xvZ2dlZFdhbGxwZXIubW9kdWxlLnNjc3MiLCJ3ZWJwYWNrOi8vZm9vdC1iZXQvLi9jb21wb25lbnRzL0hlYWRlci9CYXIvRHJvcGRvd25NZW51L0Ryb3Bkb3duLm1vZHVsZS5zY3NzIiwid2VicGFjazovL2Zvb3QtYmV0Ly4vY29tcG9uZW50cy9IZWFkZXIvQmFyL0xvZ2luL0xvZ2luLm1vZHVsZS5zY3NzIiwid2VicGFjazovL2Zvb3QtYmV0Ly4vY29tcG9uZW50cy9IZWFkZXIvQmFyL0xvZ2luL0xvZ2luRm9ybS9Mb2dpbkZvcm0ubW9kdWxlLnNjc3MiLCJ3ZWJwYWNrOi8vZm9vdC1iZXQvLi9jb21wb25lbnRzL0hlYWRlci9CYXIvTG9naW4vUmVzZXRQYXNzd29yZC9Gb3Jnb3RQYXNzd29yZC9Gb3Jnb3RQYXNzd29yZC5tb2R1bGUuc2NzcyIsIndlYnBhY2s6Ly9mb290LWJldC8uL2NvbXBvbmVudHMvSGVhZGVyL0Jhci9Mb2dpbi9SZXNldFBhc3N3b3JkL0dldEVtYWlsQ29kZS9HZXRFbWFpbENvZGUubW9kdWxlLnNjc3MiLCJ3ZWJwYWNrOi8vZm9vdC1iZXQvLi9jb21wb25lbnRzL0hlYWRlci9CYXIvTG9naW4vUmVzZXRQYXNzd29yZC9OZXdQYXNzd29yZC9OZXdQYXNzd29yZC5tb2R1bGUuc2NzcyIsIndlYnBhY2s6Ly9mb290LWJldC8uL2NvbXBvbmVudHMvSGVhZGVyL0Jhci9Mb2dpbi9SZXNldFBhc3N3b3JkL1N1Y2Nlc3MvU3VjY2Vzcy5tb2R1bGUuc2NzcyIsIndlYnBhY2s6Ly9mb290LWJldC8uL2NvbXBvbmVudHMvSGVhZGVyL0Jhci9Mb2dpbi9Tb2NpYWxNZWRpYUljb25zL1NvY2lhbE1lZGlhSWNvbnMubW9kdWxlLnNjc3MiLCJ3ZWJwYWNrOi8vZm9vdC1iZXQvLi9jb21wb25lbnRzL0hlYWRlci9CYXIvTG9nby9Mb2dvLm1vZHVsZS5zY3NzIiwid2VicGFjazovL2Zvb3QtYmV0Ly4vY29tcG9uZW50cy9IZWFkZXIvSGVhZGVyLm1vZHVsZS5zY3NzIiwid2VicGFjazovL2Zvb3QtYmV0Ly4vY29tcG9uZW50cy9IZWFkZXIvTmF2QmFyL0J1dHRvbi9CdXR0b24ubW9kdWxlLnNjc3MiLCJ3ZWJwYWNrOi8vZm9vdC1iZXQvLi9jb21wb25lbnRzL0hlYWRlci9OYXZCYXIvTmF2QmFyLm1vZHVsZS5zY3NzIiwid2VicGFjazovL2Zvb3QtYmV0Ly4vY29tcG9uZW50cy9IZWFkZXIvU29jaWFsTWVkaWEvSWNvbi9JY29uLm1vZHVsZS5zY3NzIiwid2VicGFjazovL2Zvb3QtYmV0Ly4vY29tcG9uZW50cy9IZWFkZXIvU29jaWFsTWVkaWEvTW9kYWxzL1NvY2lhbE1lZGlhTW9kYWwubW9kdWxlLnNjc3MiLCJ3ZWJwYWNrOi8vZm9vdC1iZXQvLi9jb21wb25lbnRzL0hlYWRlci9Tb2NpYWxNZWRpYS9Tb2NpYWxNZWRpYS5tb2R1bGUuc2NzcyIsIndlYnBhY2s6Ly9mb290LWJldC8uL2NvbXBvbmVudHMvUGFnZXMvQ29udGFjdHMvQ29udGFjdHMubW9kdWxlLnNjc3MiLCJ3ZWJwYWNrOi8vZm9vdC1iZXQvLi9jb21wb25lbnRzL2NvbW1vbi9hdXRoL0lucHV0Q29udGFpbmVyL0lucHV0Q29udGFpbmVyLm1vZHVsZS5zY3NzIiwid2VicGFjazovL2Zvb3QtYmV0Ly4vY29tcG9uZW50cy9jb21tb24vYXV0aC9Nb2RhbC9Nb2RhbC5tb2R1bGUuc2NzcyIsIndlYnBhY2s6Ly9mb290LWJldC9leHRlcm5hbCBcIkBob29rZm9ybS9yZXNvbHZlcnMveXVwXCIiLCJ3ZWJwYWNrOi8vZm9vdC1iZXQvZXh0ZXJuYWwgXCJAcmVkdXhqcy90b29sa2l0XCIiLCJ3ZWJwYWNrOi8vZm9vdC1iZXQvZXh0ZXJuYWwgXCJheGlvc1wiIiwid2VicGFjazovL2Zvb3QtYmV0L2V4dGVybmFsIFwibmV4dC10cmFuc2xhdGUvYXBwV2l0aEkxOG5cIiIsIndlYnBhY2s6Ly9mb290LWJldC9leHRlcm5hbCBcIm5leHQtdHJhbnNsYXRlL3VzZVRyYW5zbGF0aW9uXCIiLCJ3ZWJwYWNrOi8vZm9vdC1iZXQvZXh0ZXJuYWwgXCJuZXh0L2Rpc3QvbmV4dC1zZXJ2ZXIvbGliL3JvdXRlci1jb250ZXh0LmpzXCIiLCJ3ZWJwYWNrOi8vZm9vdC1iZXQvZXh0ZXJuYWwgXCJuZXh0L2Rpc3QvbmV4dC1zZXJ2ZXIvbGliL3JvdXRlci91dGlscy9nZXQtYXNzZXQtcGF0aC1mcm9tLXJvdXRlLmpzXCIiLCJ3ZWJwYWNrOi8vZm9vdC1iZXQvZXh0ZXJuYWwgXCJuZXh0L2hlYWRcIiIsIndlYnBhY2s6Ly9mb290LWJldC9leHRlcm5hbCBcInJlYWN0XCIiLCJ3ZWJwYWNrOi8vZm9vdC1iZXQvZXh0ZXJuYWwgXCJyZWFjdC1iZWF1dGlmdWwtZG5kXCIiLCJ3ZWJwYWNrOi8vZm9vdC1iZXQvZXh0ZXJuYWwgXCJyZWFjdC1kb21cIiIsIndlYnBhY2s6Ly9mb290LWJldC9leHRlcm5hbCBcInJlYWN0LWZhY2Vib29rLWxvZ2luXCIiLCJ3ZWJwYWNrOi8vZm9vdC1iZXQvZXh0ZXJuYWwgXCJyZWFjdC1nb29nbGUtbG9naW5cIiIsIndlYnBhY2s6Ly9mb290LWJldC9leHRlcm5hbCBcInJlYWN0LWhvb2stZm9ybVwiIiwid2VicGFjazovL2Zvb3QtYmV0L2V4dGVybmFsIFwicmVhY3QtaXNcIiIsIndlYnBhY2s6Ly9mb290LWJldC9leHRlcm5hbCBcInJlYWN0LXJlZHV4XCIiLCJ3ZWJwYWNrOi8vZm9vdC1iZXQvZXh0ZXJuYWwgXCJyZWFjdC10b2FzdGlmeVwiIiwid2VicGFjazovL2Zvb3QtYmV0L2V4dGVybmFsIFwicmVhY3QtdHdpdHRlci1sb2dpblwiIiwid2VicGFjazovL2Zvb3QtYmV0L2V4dGVybmFsIFwicmVhY3QvanN4LWRldi1ydW50aW1lXCIiLCJ3ZWJwYWNrOi8vZm9vdC1iZXQvZXh0ZXJuYWwgXCJyZWR1eC1wZXJzaXN0XCIiLCJ3ZWJwYWNrOi8vZm9vdC1iZXQvZXh0ZXJuYWwgXCJyZWR1eC1wZXJzaXN0L2ludGVncmF0aW9uL3JlYWN0XCIiLCJ3ZWJwYWNrOi8vZm9vdC1iZXQvZXh0ZXJuYWwgXCJyZWR1eC1wZXJzaXN0L2xpYi9zdG9yYWdlXCIiLCJ3ZWJwYWNrOi8vZm9vdC1iZXQvZXh0ZXJuYWwgXCJ5dXBcIiIsIndlYnBhY2s6Ly9mb290LWJldC9pZ25vcmVkfEM6XFxVc2Vyc1xcQWRtaW5cXERlc2t0b3BcXHByb2plY3RzXFxmb290LWJldFxcbm9kZV9tb2R1bGVzXFxuZXh0XFxkaXN0XFxuZXh0LXNlcnZlclxcbGliXFxyb3V0ZXJ8Li91dGlscy9yZXNvbHZlLXJld3JpdGVzIl0sIm5hbWVzIjpbIkJhbGwiLCJzdHlsZXMiLCJiYWxsSWNvbiIsIkZvb3RlciIsInJvdXRlciIsInVzZVJvdXRlciIsInBhdGhuYW1lIiwiTGlzdCIsImxpc3RfaXRlbXMiLCJib3JkZXJzQWN0aXZlIiwidCIsInVzZVRyYW5zbGF0aW9uIiwidHJhbnNsYXRpb25QYXRoIiwidHJhbnNsYXRlIiwia2V5IiwibWFwIiwiZWwiLCJsaW5rIiwibmFtZSIsIk1hdGgiLCJyYW5kb20iLCJOYXZpZ2F0aW9uIiwibmF2X2RhdGEiLCJpIiwiUFMiLCJpY29ucyIsInNyYyIsInZpc2EiLCJtYXN0ZXJDYXJkIiwibGFzdEVsZW1lbnQiLCJTTSIsInBob25lIiwidXJsIiwiZmFjZWJvb2siLCJ3YXRzdXAiLCJpbnN0YWdyYW0iLCJ2aWJlciIsInRlbGVncmFtIiwibGVuZ3RoIiwiU29jaWFsTWVkaWEiLCJJY29uIiwiY2xpY2siLCJlbGVtZW50cyIsIm90aGVyU3R5bGVzIiwiY2xhc3NlcyIsIndpZHRoIiwicGFkZGluZyIsIkJhciIsImJhcl9pdGVtcyIsImJhcl9pdGVtc19jb250Iiwic2hvd0xvZ2luTW9kYWwiLCJzZXRTaG93TG9naW5Nb2RhbCIsInVzZVN0YXRlIiwidXNlcl9pbmZvIiwidXNlU2VsZWN0b3IiLCJzdGF0ZSIsInVzZXIiLCJjb25zb2xlIiwibG9nIiwiQmFySXRlbXMiLCJyZWdpc3RyYXRpb24iLCJsb2dpbiIsInJlZ2lzdHJhdGlvbl9wYXRoIiwibG9naW5Nb2RhbEhhbmRsZSIsInVzZXJMb2dnZWQiLCJsYW5nIiwibGFuZ3VhZ2VzVGl0bGUiLCJzZXRMYW5ndWFnZXNUaXRsZSIsImxhbmd1YWdlcyIsInVzZUVmZmVjdCIsIm5ld0xhbmciLCJsYW5ndWFnZXNfZGF0YSIsInNob3dEcm9wIiwic2V0U2hvd0Ryb3AiLCJjaGFuZ2VMYW5nVGl0bGUiLCJldmVudCIsImxhbmdfdGl0bGVfZGF0YSIsImZpbHRlciIsInRhcmdldCIsImNsYXNzTmFtZSIsInJlZ2lzdGVyX2ljb24iLCJsb2dpbl9pY29uIiwiZGlzcGxheSIsImNvbnRlbnRPblRpdGxlIiwiaWNvbiIsImNvbnRlbnRPbkRyb3AiLCJhcm1GbGFnIiwicnVzRmxhZyIsImVuRmxhZyIsImVzcEZsYWciLCJmcmNGbGFnIiwiZGV1RmxhZyIsIkxhbmd1YWdlRHJvcCIsIm9uQ2xvc2UiLCJkYXRhIiwiZG9jdW1lbnQiLCJhZGRFdmVudExpc3RlbmVyIiwiaGFuZGxlQ2xvc2UiLCJyZW1vdmVFdmVudExpc3RlbmVyIiwibm9kZSIsInVzZVJlZiIsImUiLCJjdXJyZW50IiwiY29udGFpbnMiLCJwYXJlbnROb2RlIiwiTG9nZ2VkIiwic2hvd1VzZXJEcm9wIiwic2V0U2hvd1VzZXJEcm9wIiwic2VsZWN0VXNlciIsInBob3RvIiwic2V0UGhvdG8iLCJ1c2VybmFtZSIsIkxvZ2dlZERyb3AiLCJkaXNwYXRjaCIsInVzZURpc3BhdGNoIiwiX2xvZ291dCIsImxvZ291dCIsInB1c2giLCJnb1RvUGVyc29uYWwiLCJ1c2VyRGVmYXVsdEljb24iLCJ0ZWxJY29uIiwidGVsZXBob25lIiwiTG9nZ2VkV2FsbHBlciIsImltZyIsImZ1bGxOYW1lIiwiZnVsbG5hbWUiLCJzZXRGdWxsbmFtZSIsImNvbG9yIiwidHJpYW5nbGUiLCJEcm9wZG93biIsInNob3dEcm9wZG93biIsInNldFNob3dEcm9wZG93biIsInNob3dDb250YWN0c01vZGFsIiwic2V0U2hvd0NvbnRhY3RzTW9kYWwiLCJidXR0b25zSW5Ib21lUGFnZSIsImlkIiwiZnJzdENvbnRlbnQiLCJocmVmIiwic2VjQ29udGVudCIsImJ1dHRvbnMiLCJkcm9wZG93bkxpbmVzIiwiTG9naW4iLCJvbk1vZGFsQ2xvc2UiLCJzaG93UmVzZXRQYXNzd29yZE1vZGFsIiwic2V0U2hvd1Jlc2V0UGFzc3dvcmRNb2RhbCIsIkxvZ2luRm9ybSIsImhhbmRsZVJlc2V0UGFzc01vZGFsIiwiaGFuZGxlX3RvX3JlZ2lzdGVyX2NsaWNrIiwicXVlcnlTZWxlY3RvciIsInN0eWxlIiwib3ZlcmZsb3ciLCJzY2hlbWEiLCJ5dXAiLCJzaGFwZSIsImVtYWlsIiwicmVxdWlyZWQiLCJtYXRjaGVzIiwicGFzc3dvcmQiLCJtaW4iLCJyZWdpc3RlciIsImhhbmRsZVN1Ym1pdCIsImZvcm1TdGF0ZSIsImVycm9ycyIsInVzZUZvcm0iLCJtb2RlIiwicmVzb2x2ZXIiLCJ5dXBSZXNvbHZlciIsInN1Ym1pdCIsInRva2VuIiwicmVxdWVzdCIsIkxPR0lOIiwic2V0Q29va2llIiwiR0VUX0FDQ09VTlRfSU5GTyIsImF1dGgiLCJlcnJvciIsInRvYXN0IiwicmVzcG9uc2UiLCJtZXNzYWdlIiwidHlwZSIsIkZvcmdvdFBhc3N3b3JkIiwic2hvd0ZvcmdvdFBhc3NNbCIsInNldFNob3dGb3Jnb3RQYXNzTWwiLCJzaG93R2V0RW1haWxDb2RlTWwiLCJzZXRTaG93RW1haWxDb2RlTWwiLCJTVEFSVF9SRVNFVF9QQVNTV09SRCIsImVyciIsIkdldEVtYWlsQ29kZSIsInNob3dOZXdQYXNzd29yZE1sIiwic2V0U2hvd05ld1Bhc3N3b3JkTWwiLCJudW0xIiwibnVtMiIsIm51bTMiLCJudW00IiwibnVtNSIsIm51bTYiLCJqdW1wIiwieCIsInZhbHVlIiwibmV4dFNpYmxpbmciLCJ0ZXN0IiwiZm9jdXMiLCJqdW1wQmFjayIsImNvZGUiLCJwcmV2aW91c1NpYmxpbmciLCJPYmplY3QiLCJ2YWx1ZXMiLCJyZWR1Y2UiLCJhYyIsIlZFUklGWV9QQVNTV09SRF9SRVNFVCIsImhlYWRlcnMiLCJnZXRDb29raWUiLCJpbnB1dHMiLCJjbGFzcyIsInRyaW0iLCJtYXhMZW5ndGgiLCJOZXdQYXNzd29yZCIsInNob3dOZXdQYXNzTWwiLCJzZXRTaG93TmV3UGFzc01sIiwic2hvd1N1Y2Nlc3NNbCIsInNldFNob3dTdWNjZXNzTWwiLCJTRVRfTkVXX1BBU1NXT1JEIiwiU3VjY2VzcyIsInN1Y2Nlc3NJY29uIiwiaWNvblVybCIsImdtYWlsIiwidmsiLCJ0d2l0dGVyIiwicmVzcG9uc2VGYWNlYm9vayIsInJlc3BvbnNlR29vZ2xlIiwiVFdJVFRFUl9DT05TVU1FUl9LRVkiLCJUV0lUVEVSX0NPTlNVTUVSX1NFQ1JFVCIsIlNvY2lhbE1lZGlhSWNvbnMiLCJWSyIsImluaXQiLCJhcGlJZCIsIm9uU29jaWFsTWVkaWFCdG5DbGljayIsImZhY2Vib29rTG9naW5CdG4iLCJnb29nbGVMb2dpbkJ0biIsIkF1dGgiLCJzZXNzaW9uIiwic3RhdHVzIiwidHdpdHRlckF1dGhIYW5kbGVyIiwiY3Vyc29yIiwicmVuZGVyUHJvcHMiLCJvbkNsaWNrIiwiZGlzYWJsZWQiLCJSZXNldFBhc3N3b3JkTGluayIsImNvbnRlbnQiLCJTdWJtaXQiLCJUaXRsZSIsIlRvUmVnaXN0ZXIiLCJjb250YWluZXJfc3R5bGVzIiwiY29udGVudF9zdHlsZXMiLCJvciIsInJlZ2lzdGVyX3RleHRfc3R5bGVzIiwiTG9nbyIsImxvZ28iLCJIZWFkZXIiLCJtYWluc1BhZ2VzIiwiZm9vdGJhbGxlciIsIkJ1dHRvbiIsImNvbnRlbnRGcnN0UCIsImNvbnRlbnRTZWNQIiwiYWN0aXZlIiwiTmF2QmFyIiwiRmFjZWJvb2siLCJwYXJlbnQiLCJ0b3AiLCJjaGlsZHJlbiIsIm9mZnNldFRvcCIsInRleHQiLCJJbnN0YWdyYW0iLCJQaG9uZSIsIlRlbGVncmFtIiwiVmliZXIiLCJXYXRzVXAiLCJzaG93UGhvbmVNb2RhbCIsInNldFNob3dQaG9uZU1vZGFsIiwic2hvd0ZhY2Jvb2tNb2RhbCIsInNldFNob3dGYWNib29rTW9kYWwiLCJzaG93VGVsZWdyYW1Nb2RhbCIsInNldFNob3dUZWxlZ3JhbU1vZGFsIiwic2hvd1dhdHNVcE1vZGFsIiwic2V0U2hvd1dhdHNVcE1vZGFsIiwic2hvd0luc3RhZ3JhbU1vZGFsIiwic2V0U2hvd0luc3RhZ3JhbU1vZGFsIiwic2hvd1ZpYmVyTW9kYWwiLCJzZXRTaG93VmliZXJNb2RhbCIsInNvY2lhbE1lZGlhc1JlZiIsIndpbmRvdyIsInNjcm9sbFRvIiwibW9kYWxfY29udGVudHMiLCJDb250YWN0c01vZGFsIiwib3BlbmVkIiwiY2xvc2VWZWN0b3IiLCJjb250YWN0c19kYXRhIiwiSW5wdXRDb250YWluZXIiLCJsYWJlbCIsInBsYWNlaG9sZGVyIiwib3RoZXIiLCJoYW5kbGVfb3ZlcmZsb3dfb25fb3BlbiIsImJvZHkiLCJvdmVyZmxvd1kiLCJwb3NpdGlvbiIsImhhbmRsZV9vdmVyZmxvd19vbl9jbG9zZSIsIk1vZGFsIiwiY29udGFpbmVyU3R5bGVzIiwiY29udGVudFN0eWxlcyIsInBvcnRhbExvY2F0aW9uIiwic2hvd01vZGFsIiwic2V0U2hvd01vZGFsIiwiZGluYW1pY1RvcCIsInNjcm9sbFkiLCJtb2RhbCIsImNyZWF0ZVBvcnRhbCIsImdldEVsZW1lbnRCeUlkIiwiRXJyb3IiLCJNYWluIiwiUmVnaXN0ZXJMYXlvdXQiLCJsYXlvdXRzIiwibWFpbiIsIndpdGhvdXRQaG90byIsIldpdGhvdXRQaG90byIsIlJlZ2lzdGVyIiwiTGF5b3V0V3JhcHBlciIsInByb3BzIiwiTGF5b3V0IiwibGF5b3V0IiwiaG9zdCIsImRlc3RpbmF0aW9uIiwicGF5bG9hZCIsIm9wdGlvbnMiLCJQcm9taXNlIiwicnNsdiIsInJqY3QiLCJBdXRob3JpemF0aW9uIiwiYXhpb3MiLCJtZXRob2QiLCJ0aGVuIiwiY2F0Y2giLCJmaW5hbGx5IiwibmFtZUVRIiwiY2EiLCJjb29raWUiLCJzcGxpdCIsImMiLCJjaGFyQXQiLCJzdWJzdHJpbmciLCJpbmRleE9mIiwicmVtb3ZlQ29va2llIiwiZGF5cyIsImV4cGlyZXMiLCJkYXRlIiwiRGF0ZSIsInNldFRpbWUiLCJnZXRUaW1lIiwidG9VVENTdHJpbmciLCJBVVRIX1VSTCIsIkFDQ09VTlRfVVJMIiwiUkVHSVNURVIiLCJDSEFOR0VfQUNDT1VOVF9JTkZPIiwiQ0hBTkdFX0FDQ09VTlRfSU1BR0UiLCJHRVRfTkVXUyIsIkdFVF9NQVRDSEVTIiwiR0VUX01BVENIRVNfT0ZfTkVYVF9EQVkiLCJHRVRfUFJFRElDVElPTlMiLCJHRVRfRkVFREJBQ0siLCJHRVRfTUFUQ0hFU19CWV9UWVBFIiwiQUREX0ZFRURCQUNLIiwiX2ludGVyb3BSZXF1aXJlV2lsZGNhcmQiLCJyZXF1aXJlIiwiZXhwb3J0cyIsIl9yZWFjdCIsIl9yb3V0ZXIiLCJfcm91dGVyMiIsIl91c2VJbnRlcnNlY3Rpb24iLCJwcmVmZXRjaGVkIiwicHJlZmV0Y2giLCJhcyIsImlzTG9jYWxVUkwiLCJjdXJMb2NhbGUiLCJsb2NhbGUiLCJpc01vZGlmaWVkRXZlbnQiLCJjdXJyZW50VGFyZ2V0IiwibWV0YUtleSIsImN0cmxLZXkiLCJzaGlmdEtleSIsImFsdEtleSIsIm5hdGl2ZUV2ZW50Iiwid2hpY2giLCJsaW5rQ2xpY2tlZCIsInJlcGxhY2UiLCJzaGFsbG93Iiwic2Nyb2xsIiwibm9kZU5hbWUiLCJwcmV2ZW50RGVmYXVsdCIsIkxpbmsiLCJjcmVhdGVQcm9wRXJyb3IiLCJhcmdzIiwiZXhwZWN0ZWQiLCJhY3R1YWwiLCJyZXF1aXJlZFByb3BzR3VhcmQiLCJyZXF1aXJlZFByb3BzIiwia2V5cyIsImZvckVhY2giLCJfIiwib3B0aW9uYWxQcm9wc0d1YXJkIiwicGFzc0hyZWYiLCJvcHRpb25hbFByb3BzIiwidmFsVHlwZSIsImhhc1dhcm5lZCIsImRlZmF1bHQiLCJ3YXJuIiwicCIsInVzZU1lbW8iLCJyZXNvbHZlZEhyZWYiLCJyZXNvbHZlZEFzIiwicmVzb2x2ZUhyZWYiLCJjcmVhdGVFbGVtZW50IiwiY2hpbGQiLCJDaGlsZHJlbiIsIm9ubHkiLCJjaGlsZFJlZiIsInJlZiIsInNldEludGVyc2VjdGlvblJlZiIsImlzVmlzaWJsZSIsInVzZUludGVyc2VjdGlvbiIsInJvb3RNYXJnaW4iLCJzZXRSZWYiLCJ1c2VDYWxsYmFjayIsInNob3VsZFByZWZldGNoIiwiaXNQcmVmZXRjaGVkIiwiY2hpbGRQcm9wcyIsImRlZmF1bHRQcmV2ZW50ZWQiLCJvbk1vdXNlRW50ZXIiLCJwcmlvcml0eSIsImxvY2FsZURvbWFpbiIsImlzTG9jYWxlRG9tYWluIiwiZ2V0RG9tYWluTG9jYWxlIiwibG9jYWxlcyIsImRvbWFpbkxvY2FsZXMiLCJhZGRCYXNlUGF0aCIsImFkZExvY2FsZSIsImRlZmF1bHRMb2NhbGUiLCJjbG9uZUVsZW1lbnQiLCJfZGVmYXVsdCIsInJlbW92ZVBhdGhUcmFpbGluZ1NsYXNoIiwicGF0aCIsImVuZHNXaXRoIiwic2xpY2UiLCJub3JtYWxpemVQYXRoVHJhaWxpbmdTbGFzaCIsInByb2Nlc3MiLCJyZXF1ZXN0SWRsZUNhbGxiYWNrIiwic2VsZiIsImNiIiwic3RhcnQiLCJub3ciLCJzZXRUaW1lb3V0IiwiZGlkVGltZW91dCIsInRpbWVSZW1haW5pbmciLCJtYXgiLCJjYW5jZWxJZGxlQ2FsbGJhY2siLCJjbGVhclRpbWVvdXQiLCJfaW50ZXJvcFJlcXVpcmVEZWZhdWx0IiwibWFya0Fzc2V0RXJyb3IiLCJpc0Fzc2V0RXJyb3IiLCJnZXRDbGllbnRCdWlsZE1hbmlmZXN0IiwiX2dldEFzc2V0UGF0aEZyb21Sb3V0ZSIsIl9yZXF1ZXN0SWRsZUNhbGxiYWNrIiwiTVNfTUFYX0lETEVfREVMQVkiLCJ3aXRoRnV0dXJlIiwiZ2VuZXJhdG9yIiwiZW50cnkiLCJnZXQiLCJmdXR1cmUiLCJyZXNvbHZlIiwicHJvbSIsInNldCIsImhhc1ByZWZldGNoIiwiTVNJbnB1dE1ldGhvZENvbnRleHQiLCJkb2N1bWVudE1vZGUiLCJyZWxMaXN0Iiwic3VwcG9ydHMiLCJfdW51c2VkIiwiY2FuUHJlZmV0Y2giLCJwcmVmZXRjaFZpYURvbSIsInJlcyIsInJlaiIsInJlbCIsImNyb3NzT3JpZ2luIiwib25sb2FkIiwib25lcnJvciIsImhlYWQiLCJhcHBlbmRDaGlsZCIsIkFTU0VUX0xPQURfRVJST1IiLCJTeW1ib2wiLCJkZWZpbmVQcm9wZXJ0eSIsImFwcGVuZFNjcmlwdCIsInNjcmlwdCIsInJlamVjdCIsInJlc29sdmVQcm9taXNlV2l0aFRpbWVvdXQiLCJtcyIsImNhbmNlbGxlZCIsInIiLCJfX0JVSUxEX01BTklGRVNUIiwib25CdWlsZE1hbmlmZXN0IiwiX19CVUlMRF9NQU5JRkVTVF9DQiIsImdldEZpbGVzRm9yUm91dGUiLCJhc3NldFByZWZpeCIsInJvdXRlIiwic2NyaXB0cyIsImVuY29kZVVSSSIsImNzcyIsIm1hbmlmZXN0IiwiYWxsRmlsZXMiLCJ2IiwiY3JlYXRlUm91dGVMb2FkZXIiLCJlbnRyeXBvaW50cyIsIk1hcCIsImxvYWRlZFNjcmlwdHMiLCJzdHlsZVNoZWV0cyIsInJvdXRlcyIsIm1heWJlRXhlY3V0ZVNjcmlwdCIsImZldGNoU3R5bGVTaGVldCIsImZldGNoIiwib2siLCJ3aGVuRW50cnlwb2ludCIsIm9uRW50cnlwb2ludCIsImV4ZWN1dGUiLCJmbiIsImNvbXBvbmVudCIsImlucHV0Iiwib2xkIiwibG9hZFJvdXRlIiwiYWxsIiwiaGFzIiwiZW50cnlwb2ludCIsImFzc2lnbiIsImNuIiwibmF2aWdhdG9yIiwiY29ubmVjdGlvbiIsInNhdmVEYXRhIiwiZWZmZWN0aXZlVHlwZSIsIm91dHB1dCIsIm1ha2VQdWJsaWNSb3V0ZXJJbnN0YW5jZSIsIk5leHRSb3V0ZXIiLCJfcm91dGVyQ29udGV4dCIsIl93aXRoUm91dGVyIiwic2luZ2xldG9uUm91dGVyIiwicmVhZHlDYWxsYmFja3MiLCJyZWFkeSIsInVybFByb3BlcnR5RmllbGRzIiwicm91dGVyRXZlbnRzIiwiY29yZU1ldGhvZEZpZWxkcyIsImV2ZW50cyIsImZpZWxkIiwiZ2V0Um91dGVyIiwib24iLCJldmVudEZpZWxkIiwidG9VcHBlckNhc2UiLCJfc2luZ2xldG9uUm91dGVyIiwic3RhY2siLCJ1c2VDb250ZXh0IiwiUm91dGVyQ29udGV4dCIsImNyZWF0ZVJvdXRlciIsImluc3RhbmNlIiwicHJvcGVydHkiLCJBcnJheSIsImlzQXJyYXkiLCJoYXNJbnRlcnNlY3Rpb25PYnNlcnZlciIsIkludGVyc2VjdGlvbk9ic2VydmVyIiwiaXNEaXNhYmxlZCIsInVub2JzZXJ2ZSIsInZpc2libGUiLCJzZXRWaXNpYmxlIiwidW5kZWZpbmVkIiwidGFnTmFtZSIsIm9ic2VydmUiLCJpZGxlQ2FsbGJhY2siLCJlbGVtZW50IiwiY2FsbGJhY2siLCJvYnNlcnZlciIsImNyZWF0ZU9ic2VydmVyIiwiZGVsZXRlIiwic2l6ZSIsImRpc2Nvbm5lY3QiLCJvYnNlcnZlcnMiLCJlbnRyaWVzIiwiaXNJbnRlcnNlY3RpbmciLCJpbnRlcnNlY3Rpb25SYXRpbyIsIndpdGhSb3V0ZXIiLCJDb21wb3NlZENvbXBvbmVudCIsIldpdGhSb3V0ZXJXcmFwcGVyIiwiZ2V0SW5pdGlhbFByb3BzIiwib3JpZ0dldEluaXRpYWxQcm9wcyIsImRpc3BsYXlOYW1lIiwiZGV0ZWN0RG9tYWluTG9jYWxlIiwiZG9tYWluSXRlbXMiLCJob3N0bmFtZSIsImRldGVjdGVkTG9jYWxlIiwiZG9tYWluSXRlbSIsInRvTG93ZXJDYXNlIiwiaXRlbSIsIl9pdGVtJGRvbWFpbiIsIl9pdGVtJGxvY2FsZXMiLCJkb21haW5Ib3N0bmFtZSIsImRvbWFpbiIsInNvbWUiLCJub3JtYWxpemVMb2NhbGVQYXRoIiwicGF0aG5hbWVQYXJ0cyIsInNwbGljZSIsImpvaW4iLCJtaXR0IiwiY3JlYXRlIiwiaGFuZGxlciIsIm9mZiIsImVtaXQiLCJldnRzIiwiZGVsTG9jYWxlIiwiaGFzQmFzZVBhdGgiLCJkZWxCYXNlUGF0aCIsImludGVycG9sYXRlQXMiLCJfbm9ybWFsaXplVHJhaWxpbmdTbGFzaCIsIl9yb3V0ZUxvYWRlciIsIl9kZW5vcm1hbGl6ZVBhZ2VQYXRoIiwiX25vcm1hbGl6ZUxvY2FsZVBhdGgiLCJfbWl0dCIsIl91dGlscyIsIl9pc0R5bmFtaWMiLCJfcGFyc2VSZWxhdGl2ZVVybCIsIl9xdWVyeXN0cmluZyIsIl9yZXNvbHZlUmV3cml0ZXMiLCJfcm91dGVNYXRjaGVyIiwiX3JvdXRlUmVnZXgiLCJvYmoiLCJfX2VzTW9kdWxlIiwiYmFzZVBhdGgiLCJidWlsZENhbmNlbGxhdGlvbkVycm9yIiwiYWRkUGF0aFByZWZpeCIsInByZWZpeCIsInN0YXJ0c1dpdGgiLCJwYXRoTm9RdWVyeUhhc2giLCJkZXRlY3RlZERvbWFpbiIsImh0dHAiLCJwYXRoTG93ZXIiLCJsb2NhbGVMb3dlciIsInN1YnN0ciIsInF1ZXJ5SW5kZXgiLCJoYXNoSW5kZXgiLCJsb2NhdGlvbk9yaWdpbiIsImdldExvY2F0aW9uT3JpZ2luIiwicmVzb2x2ZWQiLCJVUkwiLCJvcmlnaW4iLCJhc1BhdGhuYW1lIiwicXVlcnkiLCJpbnRlcnBvbGF0ZWRSb3V0ZSIsImR5bmFtaWNSZWdleCIsImdldFJvdXRlUmVnZXgiLCJkeW5hbWljR3JvdXBzIiwiZ3JvdXBzIiwiZHluYW1pY01hdGNoZXMiLCJnZXRSb3V0ZU1hdGNoZXIiLCJwYXJhbXMiLCJldmVyeSIsInBhcmFtIiwicmVwZWF0Iiwib3B0aW9uYWwiLCJyZXBsYWNlZCIsInNlZ21lbnQiLCJlbmNvZGVVUklDb21wb25lbnQiLCJyZXN1bHQiLCJvbWl0UGFybXNGcm9tUXVlcnkiLCJmaWx0ZXJlZFF1ZXJ5IiwiaW5jbHVkZXMiLCJyZXNvbHZlQXMiLCJiYXNlIiwidXJsQXNTdHJpbmciLCJmb3JtYXRXaXRoVmFsaWRhdGlvbiIsImFzUGF0aCIsImZpbmFsVXJsIiwiaW50ZXJwb2xhdGVkQXMiLCJpc0R5bmFtaWNSb3V0ZSIsInNlYXJjaFBhcmFtcyIsInNlYXJjaFBhcmFtc1RvVXJsUXVlcnkiLCJoYXNoIiwic3RyaXBPcmlnaW4iLCJwcmVwYXJlVXJsQXMiLCJocmVmSGFkT3JpZ2luIiwiYXNIYWRPcmlnaW4iLCJwcmVwYXJlZFVybCIsInByZXBhcmVkQXMiLCJyZXNvbHZlRHluYW1pY1JvdXRlIiwicGFnZXMiLCJjbGVhblBhdGhuYW1lIiwiZGVub3JtYWxpemVQYWdlUGF0aCIsInBhZ2UiLCJyZSIsIm1hbnVhbFNjcm9sbFJlc3RvcmF0aW9uIiwiU1NHX0RBVEFfTk9UX0ZPVU5EIiwiZmV0Y2hSZXRyeSIsImF0dGVtcHRzIiwiY3JlZGVudGlhbHMiLCJqc29uIiwibm90Rm91bmQiLCJmZXRjaE5leHREYXRhIiwiZGF0YUhyZWYiLCJpc1NlcnZlclJlbmRlciIsIlJvdXRlciIsImNvbnN0cnVjdG9yIiwiX3BhdGhuYW1lIiwiX3F1ZXJ5IiwiX2FzIiwiaW5pdGlhbFByb3BzIiwicGFnZUxvYWRlciIsIkFwcCIsIndyYXBBcHAiLCJDb21wb25lbnQiLCJzdWJzY3JpcHRpb24iLCJpc0ZhbGxiYWNrIiwiaXNQcmV2aWV3IiwiY29tcG9uZW50cyIsInNkYyIsInNkciIsInN1YiIsImNsYyIsIl9icHMiLCJfd3JhcEFwcCIsImlzU3NyIiwiX2luRmxpZ2h0Um91dGUiLCJfc2hhbGxvdyIsImlzUmVhZHkiLCJfaWR4Iiwib25Qb3BTdGF0ZSIsImNoYW5nZVN0YXRlIiwiZ2V0VVJMIiwiX19OIiwiZm9yY2VkU2Nyb2xsIiwiaWR4IiwicGFyc2VSZWxhdGl2ZVVybCIsImNoYW5nZSIsImluaXRpYWwiLCJfX05fU1NHIiwiX19OX1NTUCIsImF1dG9FeHBvcnREeW5hbWljIiwiX19ORVhUX0RBVEFfXyIsImF1dG9FeHBvcnQiLCJnc3NwIiwiZ2lwIiwibG9jYXRpb24iLCJzZWFyY2giLCJyZWxvYWQiLCJiYWNrIiwiaGlzdG9yeSIsInNob3VsZFJlc29sdmVIcmVmIiwiX2giLCJfc2hvdWxkUmVzb2x2ZUhyZWYiLCJsb2NhbGVDaGFuZ2UiLCJwYXJzZWRBcyIsImxvY2FsZVBhdGhSZXN1bHQiLCJkaWROYXZpZ2F0ZSIsIl90aGlzJGxvY2FsZXMiLCJhc05vQmFzZVBhdGgiLCJTVCIsInBlcmZvcm1hbmNlIiwibWFyayIsInJvdXRlUHJvcHMiLCJhYm9ydENvbXBvbmVudExvYWQiLCJjbGVhbmVkQXMiLCJvbmx5QUhhc2hDaGFuZ2UiLCJzY3JvbGxUb0hhc2giLCJub3RpZnkiLCJwYXJzZWQiLCJyZXdyaXRlcyIsImdldFBhZ2VMaXN0IiwiX19yZXdyaXRlcyIsInVybElzTmV3Iiwicm91dGVSZWdleCIsInJvdXRlTWF0Y2giLCJzaG91bGRJbnRlcnBvbGF0ZSIsIm1pc3NpbmdQYXJhbXMiLCJfc2VsZiRfX05FWFRfREFUQV9fJHAiLCJfc2VsZiRfX05FWFRfREFUQV9fJHAyIiwiX29wdGlvbnMkc2Nyb2xsIiwicm91dGVJbmZvIiwiZ2V0Um91dGVJbmZvIiwicGFnZVByb3BzIiwiX19OX1JFRElSRUNUIiwicGFyc2VkSHJlZiIsIm5ld1VybCIsIm5ld0FzIiwiX19OX1BSRVZJRVciLCJub3RGb3VuZFJvdXRlIiwiZmV0Y2hDb21wb25lbnQiLCJhcHBDb21wIiwibmV4dCIsImlzUHJlcmVuZGVyZWQiLCJzdGF0dXNDb2RlIiwiaXNWYWxpZFNoYWxsb3dSb3V0ZSIsInNob3VsZFNjcm9sbCIsInJlc2V0U2Nyb2xsIiwieSIsImRvY3VtZW50RWxlbWVudCIsImhhbmRsZVJvdXRlSW5mb0Vycm9yIiwibG9hZEVycm9yRmFpbCIsImdpcEVyciIsInJvdXRlSW5mb0VyciIsImV4aXN0aW5nUm91dGVJbmZvIiwiY2FjaGVkUm91dGVJbmZvIiwibW9kIiwiaXNWYWxpZEVsZW1lbnRUeXBlIiwiZ2V0RGF0YUhyZWYiLCJfZ2V0RGF0YSIsIl9nZXRTdGF0aWNEYXRhIiwiX2dldFNlcnZlckRhdGEiLCJiZWZvcmVQb3BTdGF0ZSIsIm9sZFVybE5vSGFzaCIsIm9sZEhhc2giLCJuZXdVcmxOb0hhc2giLCJuZXdIYXNoIiwiaWRFbCIsInNjcm9sbEludG9WaWV3IiwibmFtZUVsIiwiZ2V0RWxlbWVudHNCeU5hbWUiLCJfaXNTc2ciLCJpc1NzZyIsImNhbmNlbCIsImNvbXBvbmVudFJlc3VsdCIsImxvYWRQYWdlIiwiY2FjaGVLZXkiLCJyZXNvdXJjZUtleSIsImN0eCIsIkFwcFRyZWUiLCJsb2FkR2V0SW5pdGlhbFByb3BzIiwiZm9ybWF0VXJsIiwicXVlcnlzdHJpbmciLCJfZ2V0UmVxdWlyZVdpbGRjYXJkQ2FjaGUiLCJXZWFrTWFwIiwiY2FjaGUiLCJuZXdPYmoiLCJoYXNQcm9wZXJ0eURlc2NyaXB0b3IiLCJnZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3IiLCJwcm90b3R5cGUiLCJoYXNPd25Qcm9wZXJ0eSIsImNhbGwiLCJkZXNjIiwic2xhc2hlZFByb3RvY29scyIsInVybE9iaiIsInByb3RvY29sIiwicG9ydCIsIlN0cmluZyIsInVybFF1ZXJ5VG9TZWFyY2hQYXJhbXMiLCJzbGFzaGVzIiwiVEVTVF9ST1VURSIsImdsb2JhbEJhc2UiLCJyZXNvbHZlZEJhc2UiLCJzdHJpbmdpZnlVcmxRdWVyeVBhcmFtIiwiaXNOYU4iLCJ1cmxRdWVyeSIsIlVSTFNlYXJjaFBhcmFtcyIsImFwcGVuZCIsInNlYXJjaFBhcmFtc0xpc3QiLCJmcm9tIiwiZXhlYyIsImRlY29kZSIsImRlY29kZVVSSUNvbXBvbmVudCIsInNsdWdOYW1lIiwiZyIsIm0iLCJwb3MiLCJlc2NhcGVSZWdleCIsInN0ciIsInBhcnNlUGFyYW1ldGVyIiwibm9ybWFsaXplZFJvdXRlIiwic2VnbWVudHMiLCJncm91cEluZGV4IiwicGFyYW1ldGVyaXplZFJvdXRlIiwicm91dGVLZXlDaGFyQ29kZSIsInJvdXRlS2V5Q2hhckxlbmd0aCIsImdldFNhZmVSb3V0ZUtleSIsInJvdXRlS2V5IiwiZnJvbUNoYXJDb2RlIiwicm91dGVLZXlzIiwibmFtZWRQYXJhbWV0ZXJpemVkUm91dGUiLCJjbGVhbmVkS2V5IiwiaW52YWxpZEtleSIsInBhcnNlSW50IiwiUmVnRXhwIiwibmFtZWRSZWdleCIsImV4ZWNPbmNlIiwiZ2V0RGlzcGxheU5hbWUiLCJpc1Jlc1NlbnQiLCJfZm9ybWF0VXJsIiwidXNlZCIsImZpbmlzaGVkIiwiaGVhZGVyc1NlbnQiLCJfQXBwJHByb3RvdHlwZSIsInVybE9iamVjdEtleXMiLCJTUCIsIm1lYXN1cmUiLCJfX1BhZ2VfTmV4dF9UcmFuc2xhdGVfXyIsIk15QXBwIiwic3RvcmUiLCJwZXJzaXN0b3IiLCJnZXRTZXJ2ZXJTaWRlUHJvcHMiLCJjb250ZXh0IiwicmVzZXRTZXJ2ZXJDb250ZXh0IiwiX19hcHBXaXRoSTE4biIsIl9faTE4bkNvbmZpZyIsImlzTG9hZGVyIiwic2tpcEluaXRpYWxQcm9wcyIsImxvYWRMb2NhbGVGcm9tIiwibCIsIm4iLCJtYXRjaFNsaWNlIiwiY3JlYXRlU2xpY2UiLCJpbml0aWFsU3RhdGUiLCJtYXRjaElkIiwicmVkdWNlcnMiLCJzZXRNYXRjaElkIiwiYWN0aW9uIiwiYWN0aW9ucyIsImdldE1hdGNoSWQiLCJtYXRjaCIsInJlZHVjZXIiLCJ1c2VyU2xpY2UiLCJwZXJzaXN0Q29uZmlnIiwidmVyc2lvbiIsInN0b3JhZ2UiLCJwZXJzaXN0ZWRSZWR1Y2VyIiwicGVyc2lzdFJlZHVjZXIiLCJjb21iaW5lUmVkdWNlcnMiLCJ1c2VyUmVkdWNlciIsIm1hdGNoUmVkdWNlciIsImNvbmZpZ3VyZVN0b3JlIiwibWlkZGxld2FyZSIsImdldERlZmF1bHRNaWRkbGV3YXJlIiwic2VyaWFsaXphYmxlQ2hlY2siLCJpZ25vcmVkQWN0aW9ucyIsIkZMVVNIIiwiUkVIWURSQVRFIiwiUEFVU0UiLCJQRVJTSVNUIiwiUFVSR0UiLCJwZXJzaXN0U3RvcmUiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FB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O0FDQXJrQiwrREFBZ0IsQ0FBQywySEFBMkgsRTs7Ozs7Ozs7Ozs7O0FDQTVJLCtEQUFnQixDQUFDLHNIQUFzSCxFOzs7Ozs7Ozs7Ozs7QUNBdkksK0RBQWdCLENBQUMsb0hBQW9ILEU7Ozs7Ozs7Ozs7OztBQ0FySSwrREFBZ0IsQ0FBQyxvSkFBb0oseU9BQXlPLEU7Ozs7Ozs7Ozs7OztBQ0E5WSwrREFBZ0IsQ0FBQyxvSkFBb0oscVJBQXFSLEU7Ozs7Ozs7Ozs7QUNBMWI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7QUNQQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7O0FDTEE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7QUNKQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7OztBQ0pBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7O0FDSkE7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7O0FDSEE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7QUNQQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7OztBQ0pBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7OztBQ0hBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7O0FDVkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7O0FDTkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7QUNKQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7O0FDUkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7QUNQQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7O0FDUkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7OztBQ0xBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7O0FDVkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7OztBQ1JBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7QUNYQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7O0FDUkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7QUNQQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7OztBQ1BBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7OztBQ0hBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7OztBQ1pBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7QUNMQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7OztBQ1BBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7OztBQ0hBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7O0FDSkE7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7O0FDSEE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7OztBQ2RBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7O0FDUEE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDTEEscUQ7Ozs7Ozs7Ozs7O0FDQUEsOEM7Ozs7Ozs7Ozs7O0FDQUEsbUM7Ozs7Ozs7Ozs7O0FDQUEsd0Q7Ozs7Ozs7Ozs7O0FDQUEsMkQ7Ozs7Ozs7Ozs7O0FDQUEseUU7Ozs7Ozs7Ozs7O0FDQUEsaUc7Ozs7Ozs7Ozs7O0FDQUEsdUM7Ozs7Ozs7Ozs7O0FDQUEsbUM7Ozs7Ozs7Ozs7O0FDQUEsaUQ7Ozs7Ozs7Ozs7O0FDQUEsdUM7Ozs7Ozs7Ozs7O0FDQUEsa0Q7Ozs7Ozs7Ozs7O0FDQUEsZ0Q7Ozs7Ozs7Ozs7O0FDQUEsNkM7Ozs7Ozs7Ozs7O0FDQUEsc0M7Ozs7Ozs7Ozs7O0FDQUEseUM7Ozs7Ozs7Ozs7O0FDQUEsNEM7Ozs7Ozs7Ozs7O0FDQUEsaUQ7Ozs7Ozs7Ozs7O0FDQUEsbUQ7Ozs7Ozs7Ozs7O0FDQUEsMkM7Ozs7Ozs7Ozs7O0FDQUEsNkQ7Ozs7Ozs7Ozs7O0FDQUEsdUQ7Ozs7Ozs7Ozs7O0FDQUEsaUM7Ozs7Ozs7Ozs7QUNBQSxlIiwiZmlsZSI6InBhZ2VzL19hcHAuanMiLCJzb3VyY2VzQ29udGVudCI6WyJ2YXIgbWFwID0ge1xuXHRcIi4vYW0vYWJvdXRVc1wiOiBbXG5cdFx0XCIuL2xvY2FsZXMvYW0vYWJvdXRVcy5qc29uXCIsXG5cdFx0XCJsb2NhbGVzX2FtX2Fib3V0VXNfanNvblwiXG5cdF0sXG5cdFwiLi9hbS9hYm91dFVzLmpzb25cIjogW1xuXHRcdFwiLi9sb2NhbGVzL2FtL2Fib3V0VXMuanNvblwiLFxuXHRcdFwibG9jYWxlc19hbV9hYm91dFVzX2pzb25cIlxuXHRdLFxuXHRcIi4vYW0vY29tbW9uXCI6IFtcblx0XHRcIi4vbG9jYWxlcy9hbS9jb21tb24uanNvblwiLFxuXHRcdFwibG9jYWxlc19hbV9jb21tb25fanNvblwiXG5cdF0sXG5cdFwiLi9hbS9jb21tb24uanNvblwiOiBbXG5cdFx0XCIuL2xvY2FsZXMvYW0vY29tbW9uLmpzb25cIixcblx0XHRcImxvY2FsZXNfYW1fY29tbW9uX2pzb25cIlxuXHRdLFxuXHRcIi4vYW0vZ2FtZXNcIjogW1xuXHRcdFwiLi9sb2NhbGVzL2FtL2dhbWVzLmpzb25cIixcblx0XHRcImxvY2FsZXNfYW1fZ2FtZXNfanNvblwiXG5cdF0sXG5cdFwiLi9hbS9nYW1lcy5qc29uXCI6IFtcblx0XHRcIi4vbG9jYWxlcy9hbS9nYW1lcy5qc29uXCIsXG5cdFx0XCJsb2NhbGVzX2FtX2dhbWVzX2pzb25cIlxuXHRdLFxuXHRcIi4vYW0vaG9tZVwiOiBbXG5cdFx0XCIuL2xvY2FsZXMvYW0vaG9tZS5qc29uXCIsXG5cdFx0XCJsb2NhbGVzX2FtX2hvbWVfanNvblwiXG5cdF0sXG5cdFwiLi9hbS9ob21lLmpzb25cIjogW1xuXHRcdFwiLi9sb2NhbGVzL2FtL2hvbWUuanNvblwiLFxuXHRcdFwibG9jYWxlc19hbV9ob21lX2pzb25cIlxuXHRdLFxuXHRcIi4vYW0vcGVyc29uYWxcIjogW1xuXHRcdFwiLi9sb2NhbGVzL2FtL3BlcnNvbmFsLmpzb25cIixcblx0XHRcImxvY2FsZXNfYW1fcGVyc29uYWxfanNvblwiXG5cdF0sXG5cdFwiLi9hbS9wZXJzb25hbC5qc29uXCI6IFtcblx0XHRcIi4vbG9jYWxlcy9hbS9wZXJzb25hbC5qc29uXCIsXG5cdFx0XCJsb2NhbGVzX2FtX3BlcnNvbmFsX2pzb25cIlxuXHRdLFxuXHRcIi4vYW0vcHJlZGljdGlvblwiOiBbXG5cdFx0XCIuL2xvY2FsZXMvYW0vcHJlZGljdGlvbi5qc29uXCIsXG5cdFx0XCJsb2NhbGVzX2FtX3ByZWRpY3Rpb25fanNvblwiXG5cdF0sXG5cdFwiLi9hbS9wcmVkaWN0aW9uLmpzb25cIjogW1xuXHRcdFwiLi9sb2NhbGVzL2FtL3ByZWRpY3Rpb24uanNvblwiLFxuXHRcdFwibG9jYWxlc19hbV9wcmVkaWN0aW9uX2pzb25cIlxuXHRdLFxuXHRcIi4vYW0vc3RhdGlzdGljc1wiOiBbXG5cdFx0XCIuL2xvY2FsZXMvYW0vc3RhdGlzdGljcy5qc29uXCIsXG5cdFx0XCJsb2NhbGVzX2FtX3N0YXRpc3RpY3NfanNvblwiXG5cdF0sXG5cdFwiLi9hbS9zdGF0aXN0aWNzLmpzb25cIjogW1xuXHRcdFwiLi9sb2NhbGVzL2FtL3N0YXRpc3RpY3MuanNvblwiLFxuXHRcdFwibG9jYWxlc19hbV9zdGF0aXN0aWNzX2pzb25cIlxuXHRdLFxuXHRcIi4vYW0vdGVzdGltb25pYWxzXCI6IFtcblx0XHRcIi4vbG9jYWxlcy9hbS90ZXN0aW1vbmlhbHMuanNvblwiLFxuXHRcdFwibG9jYWxlc19hbV90ZXN0aW1vbmlhbHNfanNvblwiXG5cdF0sXG5cdFwiLi9hbS90ZXN0aW1vbmlhbHMuanNvblwiOiBbXG5cdFx0XCIuL2xvY2FsZXMvYW0vdGVzdGltb25pYWxzLmpzb25cIixcblx0XHRcImxvY2FsZXNfYW1fdGVzdGltb25pYWxzX2pzb25cIlxuXHRdLFxuXHRcIi4vZGV1L2Fib3V0VXNcIjogW1xuXHRcdFwiLi9sb2NhbGVzL2RldS9hYm91dFVzLmpzb25cIixcblx0XHRcImxvY2FsZXNfZGV1X2Fib3V0VXNfanNvblwiXG5cdF0sXG5cdFwiLi9kZXUvYWJvdXRVcy5qc29uXCI6IFtcblx0XHRcIi4vbG9jYWxlcy9kZXUvYWJvdXRVcy5qc29uXCIsXG5cdFx0XCJsb2NhbGVzX2RldV9hYm91dFVzX2pzb25cIlxuXHRdLFxuXHRcIi4vZGV1L2NvbW1vblwiOiBbXG5cdFx0XCIuL2xvY2FsZXMvZGV1L2NvbW1vbi5qc29uXCIsXG5cdFx0XCJsb2NhbGVzX2RldV9jb21tb25fanNvblwiXG5cdF0sXG5cdFwiLi9kZXUvY29tbW9uLmpzb25cIjogW1xuXHRcdFwiLi9sb2NhbGVzL2RldS9jb21tb24uanNvblwiLFxuXHRcdFwibG9jYWxlc19kZXVfY29tbW9uX2pzb25cIlxuXHRdLFxuXHRcIi4vZGV1L2dhbWVzXCI6IFtcblx0XHRcIi4vbG9jYWxlcy9kZXUvZ2FtZXMuanNvblwiLFxuXHRcdFwibG9jYWxlc19kZXVfZ2FtZXNfanNvblwiXG5cdF0sXG5cdFwiLi9kZXUvZ2FtZXMuanNvblwiOiBbXG5cdFx0XCIuL2xvY2FsZXMvZGV1L2dhbWVzLmpzb25cIixcblx0XHRcImxvY2FsZXNfZGV1X2dhbWVzX2pzb25cIlxuXHRdLFxuXHRcIi4vZGV1L2hvbWVcIjogW1xuXHRcdFwiLi9sb2NhbGVzL2RldS9ob21lLmpzb25cIixcblx0XHRcImxvY2FsZXNfZGV1X2hvbWVfanNvblwiXG5cdF0sXG5cdFwiLi9kZXUvaG9tZS5qc29uXCI6IFtcblx0XHRcIi4vbG9jYWxlcy9kZXUvaG9tZS5qc29uXCIsXG5cdFx0XCJsb2NhbGVzX2RldV9ob21lX2pzb25cIlxuXHRdLFxuXHRcIi4vZGV1L3BlcnNvbmFsXCI6IFtcblx0XHRcIi4vbG9jYWxlcy9kZXUvcGVyc29uYWwuanNvblwiLFxuXHRcdFwibG9jYWxlc19kZXVfcGVyc29uYWxfanNvblwiXG5cdF0sXG5cdFwiLi9kZXUvcGVyc29uYWwuanNvblwiOiBbXG5cdFx0XCIuL2xvY2FsZXMvZGV1L3BlcnNvbmFsLmpzb25cIixcblx0XHRcImxvY2FsZXNfZGV1X3BlcnNvbmFsX2pzb25cIlxuXHRdLFxuXHRcIi4vZGV1L3ByZWRpY3Rpb25cIjogW1xuXHRcdFwiLi9sb2NhbGVzL2RldS9wcmVkaWN0aW9uLmpzb25cIixcblx0XHRcImxvY2FsZXNfZGV1X3ByZWRpY3Rpb25fanNvblwiXG5cdF0sXG5cdFwiLi9kZXUvcHJlZGljdGlvbi5qc29uXCI6IFtcblx0XHRcIi4vbG9jYWxlcy9kZXUvcHJlZGljdGlvbi5qc29uXCIsXG5cdFx0XCJsb2NhbGVzX2RldV9wcmVkaWN0aW9uX2pzb25cIlxuXHRdLFxuXHRcIi4vZGV1L3N0YXRpc3RpY3NcIjogW1xuXHRcdFwiLi9sb2NhbGVzL2RldS9zdGF0aXN0aWNzLmpzb25cIixcblx0XHRcImxvY2FsZXNfZGV1X3N0YXRpc3RpY3NfanNvblwiXG5cdF0sXG5cdFwiLi9kZXUvc3RhdGlzdGljcy5qc29uXCI6IFtcblx0XHRcIi4vbG9jYWxlcy9kZXUvc3RhdGlzdGljcy5qc29uXCIsXG5cdFx0XCJsb2NhbGVzX2RldV9zdGF0aXN0aWNzX2pzb25cIlxuXHRdLFxuXHRcIi4vZGV1L3Rlc3RpbW9uaWFsc1wiOiBbXG5cdFx0XCIuL2xvY2FsZXMvZGV1L3Rlc3RpbW9uaWFscy5qc29uXCIsXG5cdFx0XCJsb2NhbGVzX2RldV90ZXN0aW1vbmlhbHNfanNvblwiXG5cdF0sXG5cdFwiLi9kZXUvdGVzdGltb25pYWxzLmpzb25cIjogW1xuXHRcdFwiLi9sb2NhbGVzL2RldS90ZXN0aW1vbmlhbHMuanNvblwiLFxuXHRcdFwibG9jYWxlc19kZXVfdGVzdGltb25pYWxzX2pzb25cIlxuXHRdLFxuXHRcIi4vZW4vYWJvdXRVc1wiOiBbXG5cdFx0XCIuL2xvY2FsZXMvZW4vYWJvdXRVcy5qc29uXCIsXG5cdFx0XCJsb2NhbGVzX2VuX2Fib3V0VXNfanNvblwiXG5cdF0sXG5cdFwiLi9lbi9hYm91dFVzLmpzb25cIjogW1xuXHRcdFwiLi9sb2NhbGVzL2VuL2Fib3V0VXMuanNvblwiLFxuXHRcdFwibG9jYWxlc19lbl9hYm91dFVzX2pzb25cIlxuXHRdLFxuXHRcIi4vZW4vY29tbW9uXCI6IFtcblx0XHRcIi4vbG9jYWxlcy9lbi9jb21tb24uanNvblwiLFxuXHRcdFwibG9jYWxlc19lbl9jb21tb25fanNvblwiXG5cdF0sXG5cdFwiLi9lbi9jb21tb24uanNvblwiOiBbXG5cdFx0XCIuL2xvY2FsZXMvZW4vY29tbW9uLmpzb25cIixcblx0XHRcImxvY2FsZXNfZW5fY29tbW9uX2pzb25cIlxuXHRdLFxuXHRcIi4vZW4vZ2FtZXNcIjogW1xuXHRcdFwiLi9sb2NhbGVzL2VuL2dhbWVzLmpzb25cIixcblx0XHRcImxvY2FsZXNfZW5fZ2FtZXNfanNvblwiXG5cdF0sXG5cdFwiLi9lbi9nYW1lcy5qc29uXCI6IFtcblx0XHRcIi4vbG9jYWxlcy9lbi9nYW1lcy5qc29uXCIsXG5cdFx0XCJsb2NhbGVzX2VuX2dhbWVzX2pzb25cIlxuXHRdLFxuXHRcIi4vZW4vaG9tZVwiOiBbXG5cdFx0XCIuL2xvY2FsZXMvZW4vaG9tZS5qc29uXCIsXG5cdFx0XCJsb2NhbGVzX2VuX2hvbWVfanNvblwiXG5cdF0sXG5cdFwiLi9lbi9ob21lLmpzb25cIjogW1xuXHRcdFwiLi9sb2NhbGVzL2VuL2hvbWUuanNvblwiLFxuXHRcdFwibG9jYWxlc19lbl9ob21lX2pzb25cIlxuXHRdLFxuXHRcIi4vZW4vcGVyc29uYWxcIjogW1xuXHRcdFwiLi9sb2NhbGVzL2VuL3BlcnNvbmFsLmpzb25cIixcblx0XHRcImxvY2FsZXNfZW5fcGVyc29uYWxfanNvblwiXG5cdF0sXG5cdFwiLi9lbi9wZXJzb25hbC5qc29uXCI6IFtcblx0XHRcIi4vbG9jYWxlcy9lbi9wZXJzb25hbC5qc29uXCIsXG5cdFx0XCJsb2NhbGVzX2VuX3BlcnNvbmFsX2pzb25cIlxuXHRdLFxuXHRcIi4vZW4vcHJlZGljdGlvblwiOiBbXG5cdFx0XCIuL2xvY2FsZXMvZW4vcHJlZGljdGlvbi5qc29uXCIsXG5cdFx0XCJsb2NhbGVzX2VuX3ByZWRpY3Rpb25fanNvblwiXG5cdF0sXG5cdFwiLi9lbi9wcmVkaWN0aW9uLmpzb25cIjogW1xuXHRcdFwiLi9sb2NhbGVzL2VuL3ByZWRpY3Rpb24uanNvblwiLFxuXHRcdFwibG9jYWxlc19lbl9wcmVkaWN0aW9uX2pzb25cIlxuXHRdLFxuXHRcIi4vZW4vc3RhdGlzdGljc1wiOiBbXG5cdFx0XCIuL2xvY2FsZXMvZW4vc3RhdGlzdGljcy5qc29uXCIsXG5cdFx0XCJsb2NhbGVzX2VuX3N0YXRpc3RpY3NfanNvblwiXG5cdF0sXG5cdFwiLi9lbi9zdGF0aXN0aWNzLmpzb25cIjogW1xuXHRcdFwiLi9sb2NhbGVzL2VuL3N0YXRpc3RpY3MuanNvblwiLFxuXHRcdFwibG9jYWxlc19lbl9zdGF0aXN0aWNzX2pzb25cIlxuXHRdLFxuXHRcIi4vZW4vdGVzdGltb25pYWxzXCI6IFtcblx0XHRcIi4vbG9jYWxlcy9lbi90ZXN0aW1vbmlhbHMuanNvblwiLFxuXHRcdFwibG9jYWxlc19lbl90ZXN0aW1vbmlhbHNfanNvblwiXG5cdF0sXG5cdFwiLi9lbi90ZXN0aW1vbmlhbHMuanNvblwiOiBbXG5cdFx0XCIuL2xvY2FsZXMvZW4vdGVzdGltb25pYWxzLmpzb25cIixcblx0XHRcImxvY2FsZXNfZW5fdGVzdGltb25pYWxzX2pzb25cIlxuXHRdLFxuXHRcIi4vZXNwL2Fib3V0VXNcIjogW1xuXHRcdFwiLi9sb2NhbGVzL2VzcC9hYm91dFVzLmpzb25cIixcblx0XHRcImxvY2FsZXNfZXNwX2Fib3V0VXNfanNvblwiXG5cdF0sXG5cdFwiLi9lc3AvYWJvdXRVcy5qc29uXCI6IFtcblx0XHRcIi4vbG9jYWxlcy9lc3AvYWJvdXRVcy5qc29uXCIsXG5cdFx0XCJsb2NhbGVzX2VzcF9hYm91dFVzX2pzb25cIlxuXHRdLFxuXHRcIi4vZXNwL2NvbW1vblwiOiBbXG5cdFx0XCIuL2xvY2FsZXMvZXNwL2NvbW1vbi5qc29uXCIsXG5cdFx0XCJsb2NhbGVzX2VzcF9jb21tb25fanNvblwiXG5cdF0sXG5cdFwiLi9lc3AvY29tbW9uLmpzb25cIjogW1xuXHRcdFwiLi9sb2NhbGVzL2VzcC9jb21tb24uanNvblwiLFxuXHRcdFwibG9jYWxlc19lc3BfY29tbW9uX2pzb25cIlxuXHRdLFxuXHRcIi4vZXNwL2dhbWVzXCI6IFtcblx0XHRcIi4vbG9jYWxlcy9lc3AvZ2FtZXMuanNvblwiLFxuXHRcdFwibG9jYWxlc19lc3BfZ2FtZXNfanNvblwiXG5cdF0sXG5cdFwiLi9lc3AvZ2FtZXMuanNvblwiOiBbXG5cdFx0XCIuL2xvY2FsZXMvZXNwL2dhbWVzLmpzb25cIixcblx0XHRcImxvY2FsZXNfZXNwX2dhbWVzX2pzb25cIlxuXHRdLFxuXHRcIi4vZXNwL2hvbWVcIjogW1xuXHRcdFwiLi9sb2NhbGVzL2VzcC9ob21lLmpzb25cIixcblx0XHRcImxvY2FsZXNfZXNwX2hvbWVfanNvblwiXG5cdF0sXG5cdFwiLi9lc3AvaG9tZS5qc29uXCI6IFtcblx0XHRcIi4vbG9jYWxlcy9lc3AvaG9tZS5qc29uXCIsXG5cdFx0XCJsb2NhbGVzX2VzcF9ob21lX2pzb25cIlxuXHRdLFxuXHRcIi4vZXNwL3BlcnNvbmFsXCI6IFtcblx0XHRcIi4vbG9jYWxlcy9lc3AvcGVyc29uYWwuanNvblwiLFxuXHRcdFwibG9jYWxlc19lc3BfcGVyc29uYWxfanNvblwiXG5cdF0sXG5cdFwiLi9lc3AvcGVyc29uYWwuanNvblwiOiBbXG5cdFx0XCIuL2xvY2FsZXMvZXNwL3BlcnNvbmFsLmpzb25cIixcblx0XHRcImxvY2FsZXNfZXNwX3BlcnNvbmFsX2pzb25cIlxuXHRdLFxuXHRcIi4vZXNwL3ByZWRpY3Rpb25cIjogW1xuXHRcdFwiLi9sb2NhbGVzL2VzcC9wcmVkaWN0aW9uLmpzb25cIixcblx0XHRcImxvY2FsZXNfZXNwX3ByZWRpY3Rpb25fanNvblwiXG5cdF0sXG5cdFwiLi9lc3AvcHJlZGljdGlvbi5qc29uXCI6IFtcblx0XHRcIi4vbG9jYWxlcy9lc3AvcHJlZGljdGlvbi5qc29uXCIsXG5cdFx0XCJsb2NhbGVzX2VzcF9wcmVkaWN0aW9uX2pzb25cIlxuXHRdLFxuXHRcIi4vZXNwL3N0YXRpc3RpY3NcIjogW1xuXHRcdFwiLi9sb2NhbGVzL2VzcC9zdGF0aXN0aWNzLmpzb25cIixcblx0XHRcImxvY2FsZXNfZXNwX3N0YXRpc3RpY3NfanNvblwiXG5cdF0sXG5cdFwiLi9lc3Avc3RhdGlzdGljcy5qc29uXCI6IFtcblx0XHRcIi4vbG9jYWxlcy9lc3Avc3RhdGlzdGljcy5qc29uXCIsXG5cdFx0XCJsb2NhbGVzX2VzcF9zdGF0aXN0aWNzX2pzb25cIlxuXHRdLFxuXHRcIi4vZXNwL3Rlc3RpbW9uaWFsc1wiOiBbXG5cdFx0XCIuL2xvY2FsZXMvZXNwL3Rlc3RpbW9uaWFscy5qc29uXCIsXG5cdFx0XCJsb2NhbGVzX2VzcF90ZXN0aW1vbmlhbHNfanNvblwiXG5cdF0sXG5cdFwiLi9lc3AvdGVzdGltb25pYWxzLmpzb25cIjogW1xuXHRcdFwiLi9sb2NhbGVzL2VzcC90ZXN0aW1vbmlhbHMuanNvblwiLFxuXHRcdFwibG9jYWxlc19lc3BfdGVzdGltb25pYWxzX2pzb25cIlxuXHRdLFxuXHRcIi4vZnIvYWJvdXRVc1wiOiBbXG5cdFx0XCIuL2xvY2FsZXMvZnIvYWJvdXRVcy5qc29uXCIsXG5cdFx0XCJsb2NhbGVzX2ZyX2Fib3V0VXNfanNvblwiXG5cdF0sXG5cdFwiLi9mci9hYm91dFVzLmpzb25cIjogW1xuXHRcdFwiLi9sb2NhbGVzL2ZyL2Fib3V0VXMuanNvblwiLFxuXHRcdFwibG9jYWxlc19mcl9hYm91dFVzX2pzb25cIlxuXHRdLFxuXHRcIi4vZnIvY29tbW9uXCI6IFtcblx0XHRcIi4vbG9jYWxlcy9mci9jb21tb24uanNvblwiLFxuXHRcdFwibG9jYWxlc19mcl9jb21tb25fanNvblwiXG5cdF0sXG5cdFwiLi9mci9jb21tb24uanNvblwiOiBbXG5cdFx0XCIuL2xvY2FsZXMvZnIvY29tbW9uLmpzb25cIixcblx0XHRcImxvY2FsZXNfZnJfY29tbW9uX2pzb25cIlxuXHRdLFxuXHRcIi4vZnIvZ2FtZXNcIjogW1xuXHRcdFwiLi9sb2NhbGVzL2ZyL2dhbWVzLmpzb25cIixcblx0XHRcImxvY2FsZXNfZnJfZ2FtZXNfanNvblwiXG5cdF0sXG5cdFwiLi9mci9nYW1lcy5qc29uXCI6IFtcblx0XHRcIi4vbG9jYWxlcy9mci9nYW1lcy5qc29uXCIsXG5cdFx0XCJsb2NhbGVzX2ZyX2dhbWVzX2pzb25cIlxuXHRdLFxuXHRcIi4vZnIvaG9tZVwiOiBbXG5cdFx0XCIuL2xvY2FsZXMvZnIvaG9tZS5qc29uXCIsXG5cdFx0XCJsb2NhbGVzX2ZyX2hvbWVfanNvblwiXG5cdF0sXG5cdFwiLi9mci9ob21lLmpzb25cIjogW1xuXHRcdFwiLi9sb2NhbGVzL2ZyL2hvbWUuanNvblwiLFxuXHRcdFwibG9jYWxlc19mcl9ob21lX2pzb25cIlxuXHRdLFxuXHRcIi4vZnIvcGVyc29uYWxcIjogW1xuXHRcdFwiLi9sb2NhbGVzL2ZyL3BlcnNvbmFsLmpzb25cIixcblx0XHRcImxvY2FsZXNfZnJfcGVyc29uYWxfanNvblwiXG5cdF0sXG5cdFwiLi9mci9wZXJzb25hbC5qc29uXCI6IFtcblx0XHRcIi4vbG9jYWxlcy9mci9wZXJzb25hbC5qc29uXCIsXG5cdFx0XCJsb2NhbGVzX2ZyX3BlcnNvbmFsX2pzb25cIlxuXHRdLFxuXHRcIi4vZnIvcHJlZGljdGlvblwiOiBbXG5cdFx0XCIuL2xvY2FsZXMvZnIvcHJlZGljdGlvbi5qc29uXCIsXG5cdFx0XCJsb2NhbGVzX2ZyX3ByZWRpY3Rpb25fanNvblwiXG5cdF0sXG5cdFwiLi9mci9wcmVkaWN0aW9uLmpzb25cIjogW1xuXHRcdFwiLi9sb2NhbGVzL2ZyL3ByZWRpY3Rpb24uanNvblwiLFxuXHRcdFwibG9jYWxlc19mcl9wcmVkaWN0aW9uX2pzb25cIlxuXHRdLFxuXHRcIi4vZnIvc3RhdGlzdGljc1wiOiBbXG5cdFx0XCIuL2xvY2FsZXMvZnIvc3RhdGlzdGljcy5qc29uXCIsXG5cdFx0XCJsb2NhbGVzX2ZyX3N0YXRpc3RpY3NfanNvblwiXG5cdF0sXG5cdFwiLi9mci9zdGF0aXN0aWNzLmpzb25cIjogW1xuXHRcdFwiLi9sb2NhbGVzL2ZyL3N0YXRpc3RpY3MuanNvblwiLFxuXHRcdFwibG9jYWxlc19mcl9zdGF0aXN0aWNzX2pzb25cIlxuXHRdLFxuXHRcIi4vZnIvdGVzdGltb25pYWxzXCI6IFtcblx0XHRcIi4vbG9jYWxlcy9mci90ZXN0aW1vbmlhbHMuanNvblwiLFxuXHRcdFwibG9jYWxlc19mcl90ZXN0aW1vbmlhbHNfanNvblwiXG5cdF0sXG5cdFwiLi9mci90ZXN0aW1vbmlhbHMuanNvblwiOiBbXG5cdFx0XCIuL2xvY2FsZXMvZnIvdGVzdGltb25pYWxzLmpzb25cIixcblx0XHRcImxvY2FsZXNfZnJfdGVzdGltb25pYWxzX2pzb25cIlxuXHRdLFxuXHRcIi4vcnMvYWJvdXRVc1wiOiBbXG5cdFx0XCIuL2xvY2FsZXMvcnMvYWJvdXRVcy5qc29uXCIsXG5cdFx0XCJsb2NhbGVzX3JzX2Fib3V0VXNfanNvblwiXG5cdF0sXG5cdFwiLi9ycy9hYm91dFVzLmpzb25cIjogW1xuXHRcdFwiLi9sb2NhbGVzL3JzL2Fib3V0VXMuanNvblwiLFxuXHRcdFwibG9jYWxlc19yc19hYm91dFVzX2pzb25cIlxuXHRdLFxuXHRcIi4vcnMvY29tbW9uXCI6IFtcblx0XHRcIi4vbG9jYWxlcy9ycy9jb21tb24uanNvblwiLFxuXHRcdFwibG9jYWxlc19yc19jb21tb25fanNvblwiXG5cdF0sXG5cdFwiLi9ycy9jb21tb24uanNvblwiOiBbXG5cdFx0XCIuL2xvY2FsZXMvcnMvY29tbW9uLmpzb25cIixcblx0XHRcImxvY2FsZXNfcnNfY29tbW9uX2pzb25cIlxuXHRdLFxuXHRcIi4vcnMvZ2FtZXNcIjogW1xuXHRcdFwiLi9sb2NhbGVzL3JzL2dhbWVzLmpzb25cIixcblx0XHRcImxvY2FsZXNfcnNfZ2FtZXNfanNvblwiXG5cdF0sXG5cdFwiLi9ycy9nYW1lcy5qc29uXCI6IFtcblx0XHRcIi4vbG9jYWxlcy9ycy9nYW1lcy5qc29uXCIsXG5cdFx0XCJsb2NhbGVzX3JzX2dhbWVzX2pzb25cIlxuXHRdLFxuXHRcIi4vcnMvaG9tZVwiOiBbXG5cdFx0XCIuL2xvY2FsZXMvcnMvaG9tZS5qc29uXCIsXG5cdFx0XCJsb2NhbGVzX3JzX2hvbWVfanNvblwiXG5cdF0sXG5cdFwiLi9ycy9ob21lLmpzb25cIjogW1xuXHRcdFwiLi9sb2NhbGVzL3JzL2hvbWUuanNvblwiLFxuXHRcdFwibG9jYWxlc19yc19ob21lX2pzb25cIlxuXHRdLFxuXHRcIi4vcnMvcGVyc29uYWxcIjogW1xuXHRcdFwiLi9sb2NhbGVzL3JzL3BlcnNvbmFsLmpzb25cIixcblx0XHRcImxvY2FsZXNfcnNfcGVyc29uYWxfanNvblwiXG5cdF0sXG5cdFwiLi9ycy9wZXJzb25hbC5qc29uXCI6IFtcblx0XHRcIi4vbG9jYWxlcy9ycy9wZXJzb25hbC5qc29uXCIsXG5cdFx0XCJsb2NhbGVzX3JzX3BlcnNvbmFsX2pzb25cIlxuXHRdLFxuXHRcIi4vcnMvcHJlZGljdGlvblwiOiBbXG5cdFx0XCIuL2xvY2FsZXMvcnMvcHJlZGljdGlvbi5qc29uXCIsXG5cdFx0XCJsb2NhbGVzX3JzX3ByZWRpY3Rpb25fanNvblwiXG5cdF0sXG5cdFwiLi9ycy9wcmVkaWN0aW9uLmpzb25cIjogW1xuXHRcdFwiLi9sb2NhbGVzL3JzL3ByZWRpY3Rpb24uanNvblwiLFxuXHRcdFwibG9jYWxlc19yc19wcmVkaWN0aW9uX2pzb25cIlxuXHRdLFxuXHRcIi4vcnMvc3RhdGlzdGljc1wiOiBbXG5cdFx0XCIuL2xvY2FsZXMvcnMvc3RhdGlzdGljcy5qc29uXCIsXG5cdFx0XCJsb2NhbGVzX3JzX3N0YXRpc3RpY3NfanNvblwiXG5cdF0sXG5cdFwiLi9ycy9zdGF0aXN0aWNzLmpzb25cIjogW1xuXHRcdFwiLi9sb2NhbGVzL3JzL3N0YXRpc3RpY3MuanNvblwiLFxuXHRcdFwibG9jYWxlc19yc19zdGF0aXN0aWNzX2pzb25cIlxuXHRdLFxuXHRcIi4vcnMvdGVzdGltb25pYWxzXCI6IFtcblx0XHRcIi4vbG9jYWxlcy9ycy90ZXN0aW1vbmlhbHMuanNvblwiLFxuXHRcdFwibG9jYWxlc19yc190ZXN0aW1vbmlhbHNfanNvblwiXG5cdF0sXG5cdFwiLi9ycy90ZXN0aW1vbmlhbHMuanNvblwiOiBbXG5cdFx0XCIuL2xvY2FsZXMvcnMvdGVzdGltb25pYWxzLmpzb25cIixcblx0XHRcImxvY2FsZXNfcnNfdGVzdGltb25pYWxzX2pzb25cIlxuXHRdXG59O1xuZnVuY3Rpb24gd2VicGFja0FzeW5jQ29udGV4dChyZXEpIHtcblx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhtYXAsIHJlcSkpIHtcblx0XHRyZXR1cm4gUHJvbWlzZS5yZXNvbHZlKCkudGhlbihmdW5jdGlvbigpIHtcblx0XHRcdHZhciBlID0gbmV3IEVycm9yKFwiQ2Fubm90IGZpbmQgbW9kdWxlICdcIiArIHJlcSArIFwiJ1wiKTtcblx0XHRcdGUuY29kZSA9ICdNT0RVTEVfTk9UX0ZPVU5EJztcblx0XHRcdHRocm93IGU7XG5cdFx0fSk7XG5cdH1cblxuXHR2YXIgaWRzID0gbWFwW3JlcV0sIGlkID0gaWRzWzBdO1xuXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXy5lKGlkc1sxXSkudGhlbihmdW5jdGlvbigpIHtcblx0XHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXy50KGlkLCAzIHwgMTYpO1xuXHR9KTtcbn1cbndlYnBhY2tBc3luY0NvbnRleHQua2V5cyA9IGZ1bmN0aW9uKCkgeyByZXR1cm4gT2JqZWN0LmtleXMobWFwKTsgfTtcbndlYnBhY2tBc3luY0NvbnRleHQuaWQgPSBcIi4vbG9jYWxlcyBsYXp5IHJlY3Vyc2l2ZSBeXFxcXC5cXFxcLy4qXFxcXC8uKiRcIjtcbm1vZHVsZS5leHBvcnRzID0gd2VicGFja0FzeW5jQ29udGV4dDsiLCJmdW5jdGlvbiBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KG9iaikge1xuICByZXR1cm4gb2JqICYmIG9iai5fX2VzTW9kdWxlID8gb2JqIDoge1xuICAgIFwiZGVmYXVsdFwiOiBvYmpcbiAgfTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0OyIsInZhciBfdHlwZW9mID0gcmVxdWlyZShcIkBiYWJlbC9ydW50aW1lL2hlbHBlcnMvdHlwZW9mXCIpO1xuXG5mdW5jdGlvbiBfZ2V0UmVxdWlyZVdpbGRjYXJkQ2FjaGUoKSB7XG4gIGlmICh0eXBlb2YgV2Vha01hcCAhPT0gXCJmdW5jdGlvblwiKSByZXR1cm4gbnVsbDtcbiAgdmFyIGNhY2hlID0gbmV3IFdlYWtNYXAoKTtcblxuICBfZ2V0UmVxdWlyZVdpbGRjYXJkQ2FjaGUgPSBmdW5jdGlvbiBfZ2V0UmVxdWlyZVdpbGRjYXJkQ2FjaGUoKSB7XG4gICAgcmV0dXJuIGNhY2hlO1xuICB9O1xuXG4gIHJldHVybiBjYWNoZTtcbn1cblxuZnVuY3Rpb24gX2ludGVyb3BSZXF1aXJlV2lsZGNhcmQob2JqKSB7XG4gIGlmIChvYmogJiYgb2JqLl9fZXNNb2R1bGUpIHtcbiAgICByZXR1cm4gb2JqO1xuICB9XG5cbiAgaWYgKG9iaiA9PT0gbnVsbCB8fCBfdHlwZW9mKG9iaikgIT09IFwib2JqZWN0XCIgJiYgdHlwZW9mIG9iaiAhPT0gXCJmdW5jdGlvblwiKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIFwiZGVmYXVsdFwiOiBvYmpcbiAgICB9O1xuICB9XG5cbiAgdmFyIGNhY2hlID0gX2dldFJlcXVpcmVXaWxkY2FyZENhY2hlKCk7XG5cbiAgaWYgKGNhY2hlICYmIGNhY2hlLmhhcyhvYmopKSB7XG4gICAgcmV0dXJuIGNhY2hlLmdldChvYmopO1xuICB9XG5cbiAgdmFyIG5ld09iaiA9IHt9O1xuICB2YXIgaGFzUHJvcGVydHlEZXNjcmlwdG9yID0gT2JqZWN0LmRlZmluZVByb3BlcnR5ICYmIE9iamVjdC5nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3I7XG5cbiAgZm9yICh2YXIga2V5IGluIG9iaikge1xuICAgIGlmIChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBrZXkpKSB7XG4gICAgICB2YXIgZGVzYyA9IGhhc1Byb3BlcnR5RGVzY3JpcHRvciA/IE9iamVjdC5nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3Iob2JqLCBrZXkpIDogbnVsbDtcblxuICAgICAgaWYgKGRlc2MgJiYgKGRlc2MuZ2V0IHx8IGRlc2Muc2V0KSkge1xuICAgICAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkobmV3T2JqLCBrZXksIGRlc2MpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgbmV3T2JqW2tleV0gPSBvYmpba2V5XTtcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICBuZXdPYmpbXCJkZWZhdWx0XCJdID0gb2JqO1xuXG4gIGlmIChjYWNoZSkge1xuICAgIGNhY2hlLnNldChvYmosIG5ld09iaik7XG4gIH1cblxuICByZXR1cm4gbmV3T2JqO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IF9pbnRlcm9wUmVxdWlyZVdpbGRjYXJkOyIsImZ1bmN0aW9uIF90eXBlb2Yob2JqKSB7XG4gIFwiQGJhYmVsL2hlbHBlcnMgLSB0eXBlb2ZcIjtcblxuICBpZiAodHlwZW9mIFN5bWJvbCA9PT0gXCJmdW5jdGlvblwiICYmIHR5cGVvZiBTeW1ib2wuaXRlcmF0b3IgPT09IFwic3ltYm9sXCIpIHtcbiAgICBtb2R1bGUuZXhwb3J0cyA9IF90eXBlb2YgPSBmdW5jdGlvbiBfdHlwZW9mKG9iaikge1xuICAgICAgcmV0dXJuIHR5cGVvZiBvYmo7XG4gICAgfTtcbiAgfSBlbHNlIHtcbiAgICBtb2R1bGUuZXhwb3J0cyA9IF90eXBlb2YgPSBmdW5jdGlvbiBfdHlwZW9mKG9iaikge1xuICAgICAgcmV0dXJuIG9iaiAmJiB0eXBlb2YgU3ltYm9sID09PSBcImZ1bmN0aW9uXCIgJiYgb2JqLmNvbnN0cnVjdG9yID09PSBTeW1ib2wgJiYgb2JqICE9PSBTeW1ib2wucHJvdG90eXBlID8gXCJzeW1ib2xcIiA6IHR5cGVvZiBvYmo7XG4gICAgfTtcbiAgfVxuXG4gIHJldHVybiBfdHlwZW9mKG9iaik7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gX3R5cGVvZjsiLCJcInVzZSBzdHJpY3RcIjtleHBvcnRzLl9fZXNNb2R1bGU9dHJ1ZTtleHBvcnRzLm5vcm1hbGl6ZVBhdGhTZXA9bm9ybWFsaXplUGF0aFNlcDtleHBvcnRzLmRlbm9ybWFsaXplUGFnZVBhdGg9ZGVub3JtYWxpemVQYWdlUGF0aDtmdW5jdGlvbiBub3JtYWxpemVQYXRoU2VwKHBhdGgpe3JldHVybiBwYXRoLnJlcGxhY2UoL1xcXFwvZywnLycpO31mdW5jdGlvbiBkZW5vcm1hbGl6ZVBhZ2VQYXRoKHBhZ2Upe3BhZ2U9bm9ybWFsaXplUGF0aFNlcChwYWdlKTtpZihwYWdlLnN0YXJ0c1dpdGgoJy9pbmRleC8nKSl7cGFnZT1wYWdlLnNsaWNlKDYpO31lbHNlIGlmKHBhZ2U9PT0nL2luZGV4Jyl7cGFnZT0nLyc7fXJldHVybiBwYWdlO31cbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWRlbm9ybWFsaXplLXBhZ2UtcGF0aC5qcy5tYXAiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoJy4vZGlzdC9jbGllbnQvbGluaycpXG4iLCJpbXBvcnQgYmFsbEljb24gZnJvbSAnL3B1YmxpYy9pbWFnZXMvZm9vdGVyL2xlZnRCYWxsLnBuZydcclxuaW1wb3J0IHN0eWxlcyBmcm9tICcuL0JhbGwubW9kdWxlLnNjc3MnXHJcblxyXG5leHBvcnQgZnVuY3Rpb24gQmFsbCgpIHtcclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5jb250YWluZXJ9PlxyXG4gICAgICAgICAgICA8aW1nXHJcbiAgICAgICAgICAgICAgICBzcmM9e2JhbGxJY29uLnNyY31cclxuICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17c3R5bGVzLmJhbGx9XHJcbiAgICAgICAgICAgICAgICBhbHQ9XCJiYWxsLXBuZ1wiXHJcbiAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMudGV4dF93aXRoX2JhbGx9PlxyXG4gICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPXtzdHlsZXMudG9wfT5GT09UPC9wPlxyXG4gICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPXtzdHlsZXMuYm90dG9tfT5CRVQ8L3A+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgKVxyXG59XHJcbiIsIi8vXHJcbmltcG9ydCB7IHVzZVJvdXRlciB9IGZyb20gJ25leHQvZGlzdC9jbGllbnQvcm91dGVyJ1xyXG5pbXBvcnQgeyBCYWxsIH0gZnJvbSAnLi9CYWxsL0JhbGwnXHJcbi8vIHN0eWxlc1xyXG5pbXBvcnQgc3R5bGVzIGZyb20gJy4vRm9vdGVyLm1vZHVsZS5zY3NzJ1xyXG5pbXBvcnQgeyBOYXZpZ2F0aW9uIH0gZnJvbSAnLi9OYXZpZ2F0aW9uL05hdmlnYXRpb24nXHJcbmltcG9ydCB7IFNvY2lhbE1lZGlhIH0gZnJvbSAnLi9Tb2NpYWxNZWRpYS9Tb2NpYWxNZWRpYSdcclxuLy8gaWNvblxyXG5pbXBvcnQgYmFsbEljb24gZnJvbSAnL3B1YmxpYy9pbWFnZXMvcGVyc29uYWwvYmFsbC5wbmcnXHJcblxyXG4vLyBUT0RPIGNsaWNrIGV2ZW50cyBvbiBpY29uc1xyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIEZvb3RlcigpIHtcclxuICAgIGNvbnN0IHJvdXRlciA9IHVzZVJvdXRlcigpXHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuY29udGFpbmVyfT5cclxuICAgICAgICAgICAgPEJhbGwgLz5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5jb250ZW50fT5cclxuICAgICAgICAgICAgICAgIDxOYXZpZ2F0aW9uIC8+XHJcbiAgICAgICAgICAgICAgICA8U29jaWFsTWVkaWEgLz5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIHtyb3V0ZXIucGF0aG5hbWUgPT09ICcvcGVyc29uYWwnICYmXHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmJhbGx9PlxyXG4gICAgICAgICAgICAgICAgICAgIDxpbWcgc3JjPXtiYWxsSWNvbi5zcmN9IGFsdD1cImJhbGwtaWNvblwiIC8+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgKVxyXG59XHJcbiIsImltcG9ydCB1c2VUcmFuc2xhdGlvbiBmcm9tIFwibmV4dC10cmFuc2xhdGUvdXNlVHJhbnNsYXRpb25cIjtcclxuaW1wb3J0IExpbmsgZnJvbSBcIm5leHQvbGlua1wiO1xyXG5pbXBvcnQgc3R5bGVzIGZyb20gXCIuL0xpc3QubW9kdWxlLnNjc3NcIjtcclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBMaXN0KHsgbGlzdF9pdGVtcyA9IFtdLCBib3JkZXJzQWN0aXZlIH0pIHtcclxuICBjb25zdCB7IHQgfSA9IHVzZVRyYW5zbGF0aW9uKFwiY29tbW9uXCIpLFxyXG4gICAgdHJhbnNsYXRpb25QYXRoID0gXCJmb290ZXIubmF2aWdhdGlvbi5cIixcclxuICAgIHRyYW5zbGF0ZSA9IChrZXkpID0+IHQoYCR7dHJhbnNsYXRpb25QYXRofSR7a2V5fWApO1xyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPGRpdiBjbGFzc05hbWU9e2Ake3N0eWxlcy5jb250YWluZXJ9ICR7Ym9yZGVyc0FjdGl2ZSAmJiBzdHlsZXMuYm9yZGVyc31gfT5cclxuICAgICAgPHVsPlxyXG4gICAgICAgIHtsaXN0X2l0ZW1zLm1hcCgoZWwpID0+IChcclxuICAgICAgICAgIDxMaW5rIGhyZWY9e2VsLmxpbmt9IGtleT17TWF0aC5yYW5kb20oKX0+XHJcbiAgICAgICAgICAgIDxsaT57dHJhbnNsYXRlKGVsLm5hbWUpfTwvbGk+XHJcbiAgICAgICAgICA8L0xpbms+XHJcbiAgICAgICAgKSl9XHJcbiAgICAgIDwvdWw+XHJcbiAgICA8L2Rpdj5cclxuICApO1xyXG59XHJcbiIsIi8vIHN0eWxlc1xyXG5pbXBvcnQgeyBMaXN0IH0gZnJvbSAnLi9MaXN0L0xpc3QnXHJcbmltcG9ydCBzdHlsZXMgZnJvbSAnLi9OYXZpZ2F0aW9uLm1vZHVsZS5zY3NzJ1xyXG4vLyBkYXRhc1xyXG5pbXBvcnQgeyBuYXZfZGF0YSB9IGZyb20gJy4vbmF2X2RhdGEnXHJcblxyXG5leHBvcnQgZnVuY3Rpb24gTmF2aWdhdGlvbigpIHtcclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5jb250YWluZXJ9PlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmNvbnRlbnR9PlxyXG4gICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgIG5hdl9kYXRhLm1hcCgoZWwsIGkpID0+IChcclxuICAgICAgICAgICAgICAgICAgICAgICAgPExpc3RcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxpc3RfaXRlbXM9e2VsfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYm9yZGVyc0FjdGl2ZT17aSA9PT0gMSA/IHRydWUgOiBmYWxzZX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGtleT17TWF0aC5yYW5kb20oKX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAgICApKVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgIClcclxufVxyXG4iLCJleHBvcnQgY29uc3QgbmF2X2RhdGEgPSBbXHJcbiAgICBbXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBsaW5rOicvcHJlZGljdGlvbicsXHJcbiAgICAgICAgICAgIG5hbWU6ICdwcmVkaWN0aW9uJ1xyXG4gICAgICAgIH0sXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBsaW5rOicvZ2FtZXMnLFxyXG4gICAgICAgICAgICBuYW1lOiAnZ2FtZXMnXHJcbiAgICAgICAgfSxcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIGxpbms6Jy8nLFxyXG4gICAgICAgICAgICBuYW1lOiAnbmV3cydcclxuICAgICAgICB9ICAgXHJcbiAgICBdLFxyXG4gICAgW1xyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgbGluazonL2Fib3V0VXMnLFxyXG4gICAgICAgICAgICBuYW1lOiAnYWJvdXRVcydcclxuICAgICAgICB9LFxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgbGluazonL3ByZWRpY3Rpb24nLFxyXG4gICAgICAgICAgICBuYW1lOiAncGF5bWVudCdcclxuICAgICAgICB9LFxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgbGluazonL3N0YXRpc3RpY3MnLFxyXG4gICAgICAgICAgICBuYW1lOiAnbWF0Y2hTdGF0aXN0aWNzJ1xyXG4gICAgICAgIH1cclxuICAgIF0sXHJcbiAgICBbXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBsaW5rOicvcmVnaXN0cmF0aW9uJyxcclxuICAgICAgICAgICAgbmFtZTogJ3JlZ2lzdGVyJ1xyXG4gICAgICAgIH0sXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBsaW5rOicvdGVzdGltb25pYWxzJyxcclxuICAgICAgICAgICAgbmFtZTogJ2ZlZWRiYWNrcydcclxuICAgICAgICB9LFxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgbGluazonL3Rlcm1zLW9mLXVzZScsXHJcbiAgICAgICAgICAgIG5hbWU6ICd0ZXJtcy1vZi11c2UnXHJcbiAgICAgICAgfSxcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIGxpbms6Jy9wcml2YWN5LXBvbGljeScsXHJcbiAgICAgICAgICAgIG5hbWU6ICdwcml2YWN5LXBvbGljeSdcclxuICAgICAgICB9XHJcbiAgICBdLFxyXG5dXHJcblxyXG5cclxuXHJcblxyXG5cclxuIiwiLy8gc3R5bGVzXHJcbmltcG9ydCBzdHlsZXMgZnJvbSBcIi4vUFMubW9kdWxlLnNjc3NcIjtcclxuLy8gaWNvbnNcclxuaW1wb3J0IHZpc2EgZnJvbSBcIi9wdWJsaWMvaW1hZ2VzL2Zvb3Rlci92aXNhLnBuZ1wiO1xyXG5pbXBvcnQgbWFzdGVyQ2FyZCBmcm9tIFwiL3B1YmxpYy9pbWFnZXMvZm9vdGVyL21hc3RlckNhcmQucG5nXCI7XHJcbi8vIGNvbXBvbmVudHNcclxuaW1wb3J0IHsgSWNvbiB9IGZyb20gXCIuLi9jb21tb24vSWNvbi9JY29uXCI7XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gUFMoKSB7XHJcbiAgY29uc3QgLy8gY29uZmlnXHJcbiAgICBpY29ucyA9IFtcclxuICAgICAge1xyXG4gICAgICAgIGtleTogTWF0aC5yYW5kb20oKSxcclxuICAgICAgICBzcmM6IHZpc2Euc3JjLFxyXG4gICAgICB9LFxyXG4gICAgICB7XHJcbiAgICAgICAga2V5OiBNYXRoLnJhbmRvbSgpLFxyXG4gICAgICAgIHNyYzogbWFzdGVyQ2FyZC5zcmMsXHJcbiAgICAgICAgbGFzdEVsZW1lbnQ6IHRydWUsXHJcbiAgICAgIH0sXHJcbiAgICBdO1xyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPD5cclxuICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5jb250YWluZXJ9PlxyXG4gICAgICAgIHtpY29ucy5tYXAoKGVsKSA9PiAoXHJcbiAgICAgICAgICA8SWNvblxyXG4gICAgICAgICAgICBrZXk9e2VsLmtleX1cclxuICAgICAgICAgICAgc3JjPXtlbC5zcmN9XHJcbiAgICAgICAgICAgIGNsYXNzZXM9e3N0eWxlcy5pY29uc31cclxuICAgICAgICAgICAgbGFzdEVsZW1lbnQ9e2VsLmxhc3RFbGVtZW50ICYmIGVsLmxhc3RFbGVtZW50fVxyXG4gICAgICAgICAgLz5cclxuICAgICAgICApKX1cclxuICAgICAgPC9kaXY+XHJcbiAgICA8Lz5cclxuICApO1xyXG59XHJcbiIsIi8vIHN0eWxlc1xyXG5pbXBvcnQgc3R5bGVzIGZyb20gJy4vU00ubW9kdWxlLnNjc3MnXHJcbi8vIGljb25zXHJcbmltcG9ydCBwaG9uZSBmcm9tICcvcHVibGljL2ltYWdlcy9oZWFkZXIvU29jaWFsTWVkaWEvcGhvbmUuc3ZnJ1xyXG5pbXBvcnQgZmFjZWJvb2sgZnJvbSAnL3B1YmxpYy9pbWFnZXMvaGVhZGVyL1NvY2lhbE1lZGlhL2ZhY2Vib29rLnN2ZydcclxuaW1wb3J0IHRlbGVncmFtIGZyb20gJy9wdWJsaWMvaW1hZ2VzL2hlYWRlci9Tb2NpYWxNZWRpYS90ZWxlZ3JhbS5zdmcnXHJcbmltcG9ydCB3YXRzdXAgZnJvbSAnL3B1YmxpYy9pbWFnZXMvaGVhZGVyL1NvY2lhbE1lZGlhL3dhdHN1cC5zdmcnXHJcbmltcG9ydCBpbnN0YWdyYW0gZnJvbSAnL3B1YmxpYy9pbWFnZXMvaGVhZGVyL1NvY2lhbE1lZGlhL2luc3RhZ3JhbS5zdmcnXHJcbmltcG9ydCB2aWJlciBmcm9tICcvcHVibGljL2ltYWdlcy9oZWFkZXIvU29jaWFsTWVkaWEvdmliZXIuc3ZnJ1xyXG4vLyBjb21wb25lbnRzXHJcbmltcG9ydCB7IEljb24gfSBmcm9tICcuLi9jb21tb24vSWNvbi9JY29uJ1xyXG5cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBTTSgpIHtcclxuXHJcbiAgICBjb25zdFxyXG4gICAgICAgIC8vIGNvbmZpZ1xyXG4gICAgICAgIGljb25zID0gW1xyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICBrZXk6IE1hdGgucmFuZG9tKCksXHJcbiAgICAgICAgICAgICAgICBzcmM6IHBob25lLnNyYyxcclxuICAgICAgICAgICAgICAgIHVybDogXCJ0ZWw6KzM0NjcyMzE0ODA4XCJcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAga2V5OiBNYXRoLnJhbmRvbSgpLFxyXG4gICAgICAgICAgICAgICAgc3JjOiBmYWNlYm9vay5zcmMsXHJcbiAgICAgICAgICAgICAgICB1cmw6IFwiaHR0cHM6Ly93d3cuZmFjZWJvb2suY29tLyVEMCU5RiVEMSU4MCVEMCVCRSVEMCVCMyVEMCVCRCVEMCVCRSVEMCVCNyVEMSU4Qi0lRDAlQkQlRDAlQjAtJUQwJUE0JUQxJTgzJUQxJTgyJUQwJUIxJUQwJUJFJUQwJUJCLTEwNDk0MTM0NzU3NzkxMy9cIlxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICBrZXk6IE1hdGgucmFuZG9tKCksXHJcbiAgICAgICAgICAgICAgICBzcmM6IHdhdHN1cC5zcmMsXHJcbiAgICAgICAgICAgICAgICB1cmw6IFwiaHR0cHM6Ly9hcGkud2hhdHNhcHAuY29tL3NlbmQ/cGhvbmU9KzM0NjcyMzE0ODA4XCJcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAga2V5OiBNYXRoLnJhbmRvbSgpLFxyXG4gICAgICAgICAgICAgICAgc3JjOiBpbnN0YWdyYW0uc3JjLFxyXG4gICAgICAgICAgICAgICAgdXJsOiBcImh0dHBzOi8vd3d3Lmluc3RhZ3JhbS5jb20vcHJvZ25venluYTU1MC8/dXRtX21lZGl1bT1jb3B5X2xpbmtcIlxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICBrZXk6IE1hdGgucmFuZG9tKCksXHJcbiAgICAgICAgICAgICAgICBzcmM6IHZpYmVyLnNyYyxcclxuICAgICAgICAgICAgICAgIHVybDogXCJ2aWJlcjovL2NoYXQ/bnVtYmVyPSszNDY3MjMxNDgwOFwiXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIGtleTogTWF0aC5yYW5kb20oKSxcclxuICAgICAgICAgICAgICAgIHNyYzogdGVsZWdyYW0uc3JjLFxyXG4gICAgICAgICAgICAgICAgdXJsOiBcImh0dHBzOi8vdGVsZWdyYW0ubWUvZm9vdGJldDI0Y29tXCIsXHJcbiAgICAgICAgICAgICAgICBsYXN0RWxlbWVudDogdHJ1ZVxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgIF1cclxuXHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIDw+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuY29udGFpbmVyfT5cclxuICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICBpY29ucy5tYXAoZWwgPT4gKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8SWNvblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAga2V5PXtlbC5rZXl9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzcmM9e2VsLnNyY31cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHVybD17ZWwudXJsfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZWxlbWVudHM9e2ljb25zLmxlbmd0aH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxhc3RFbGVtZW50PXtlbC5sYXN0RWxlbWVudCAmJiBlbC5sYXN0RWxlbWVudH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAgICApKVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8Lz5cclxuICAgIClcclxufVxyXG4iLCIvLyBjb21wb25lbnRzXHJcbmltcG9ydCB7IFNNIH0gZnJvbSAnLi9TTUljb25zL1NNJ1xyXG5pbXBvcnQgeyBQUyB9IGZyb20gJy4vUFNJY29ucy9QUydcclxuLy8gc3R5bGVzXHJcbmltcG9ydCBzdHlsZXMgZnJvbSAnLi9Tb2NpYWxNZWRpYS5tb2R1bGUuc2NzcydcclxuLy8gdHJhbnNsYXRpb24gXHJcbmltcG9ydCB1c2VUcmFuc2xhdGlvbiBmcm9tICduZXh0LXRyYW5zbGF0ZS91c2VUcmFuc2xhdGlvbidcclxuXHJcblxyXG5leHBvcnQgZnVuY3Rpb24gU29jaWFsTWVkaWEoKSB7XHJcblxyXG4gICAgY29uc3RcclxuICAgICAgICAvLyB0cmFuc2xhdGlvblxyXG4gICAgICAgIHsgdCB9ID0gdXNlVHJhbnNsYXRpb24oJ2NvbW1vbicpLFxyXG4gICAgICAgIHRyYW5zbGF0aW9uUGF0aCA9ICdmb290ZXIuc29jaWFsX21lZGlhX3BheW1hbnRzJyxcclxuICAgICAgICB0cmFuc2xhdGUgPSAoa2V5KSA9PiB0KGAke3RyYW5zbGF0aW9uUGF0aH0ke2tleX1gKVxyXG5cclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5jb250YWluZXJ9PlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmNvbnRlbnR9PlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5jb250cm9sZXJ9PlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuc29jaWFsX21lZGlhc30+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxwPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRyYW5zbGF0ZSgnLlNNLnRpdGxlJylcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9wPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8U00gLz5cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLnBheW1lbnRfc3lzdGVtc30+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxwPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRyYW5zbGF0ZSgnLlBTLnRpdGxlJylcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9wPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8UFMgLz5cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8L2RpdiA+XHJcbiAgICApXHJcbn1cclxuIiwiaW1wb3J0IHN0eWxlcyBmcm9tICcuL0ljb24ubW9kdWxlLnNjc3MnXHJcbmltcG9ydCBMaW5rIGZyb20gJ25leHQvbGluaydcclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBJY29uKHtcclxuICAgIHNyYyxcclxuICAgIGNsaWNrID0gbnVsbCxcclxuICAgIGxhc3RFbGVtZW50ID0gZmFsc2UsXHJcbiAgICBlbGVtZW50cyxcclxuICAgIG90aGVyU3R5bGVzID0gbnVsbCxcclxuICAgIGNsYXNzZXMsXHJcbiAgICB1cmwgPSBcIlwiIH0pIHtcclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPGRpdlxyXG4gICAgICAgICAgICBzdHlsZT17ZWxlbWVudHMgPyB7IHdpZHRoOiBgJHsxMDAgLyBlbGVtZW50c30lYCB9IDogeyBwYWRkaW5nOiAnMCAxNXB4JyB9fVxyXG4gICAgICAgICAgICBjbGFzc05hbWU9e2Ake3N0eWxlcy5jb250YWluZXJ9ICR7bGFzdEVsZW1lbnQgPyBzdHlsZXMubGFzdF9lbGVtZW50IDogXCJcIn0gJHtjbGFzc2VzfWB9PlxyXG4gICAgICAgICAgICA8TGluayBocmVmPXt1cmx9IHRhcmdldD1cIl9ibGFua1wiPlxyXG4gICAgICAgICAgICAgICAgPGEgdGFyZ2V0PVwiX2JsYW5rXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPGltZ1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBzcmM9e3NyY31cclxuICAgICAgICAgICAgICAgICAgICAgICAgYWx0PXtgaWNvbnMtJHtzcmN9YH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgb25DbGljaz17Y2xpY2t9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHN0eWxlPXtvdGhlclN0eWxlc31cclxuICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgPC9hPlxyXG4gICAgICAgICAgICA8L0xpbms+XHJcbiAgICAgICAgPC9kaXYgPlxyXG4gICAgKVxyXG59XHJcbiIsIi8vIGhvb2tzIGFuZCBoZWxwZXJzXHJcbmltcG9ydCB7IHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnXHJcbi8vIHN0eWxlc1xyXG5pbXBvcnQgc3R5bGVzIGZyb20gJy4vQmFyLm1vZHVsZS5zY3NzJ1xyXG4vLyB0cmFuc2xhdGlvbiBcclxuaW1wb3J0IHVzZVRyYW5zbGF0aW9uIGZyb20gJ25leHQtdHJhbnNsYXRlL3VzZVRyYW5zbGF0aW9uJ1xyXG4vL2NvbXBvbmVudHNcclxuaW1wb3J0IHsgTG9naW4gfSBmcm9tICcuL0xvZ2luL0xvZ2luJ1xyXG5pbXBvcnQgeyBCYXJJdGVtcyB9IGZyb20gJy4vQmFySXRlbXMvQmFySXRlbXMnXHJcbmltcG9ydCB7IExvZ28gfSBmcm9tICcuL0xvZ28vTG9nbydcclxuaW1wb3J0IHsgdXNlU2VsZWN0b3IgfSBmcm9tICdyZWFjdC1yZWR1eCdcclxuaW1wb3J0IERyb3Bkb3duIGZyb20gJy4vRHJvcGRvd25NZW51L0Ryb3Bkb3duJ1xyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIEJhcih7IGJhcl9pdGVtcywgYmFyX2l0ZW1zX2NvbnQgfSkge1xyXG5cclxuICAgIGNvbnN0XHJcbiAgICAgICAgeyB0IH0gPSB1c2VUcmFuc2xhdGlvbignY29tbW9uJyksXHJcbiAgICAgICAgdHJhbnNsYXRpb25QYXRoID0gJ2hlYWRlci4nLFxyXG4gICAgICAgIHRyYW5zbGF0ZSA9IChrZXkpID0+IHQoYCR7dHJhbnNsYXRpb25QYXRofSR7a2V5fWApLFxyXG4gICAgICAgIC8vIGxvZ2luIG1vZGFsIGNvbmZpZ3NcclxuICAgICAgICBbc2hvd0xvZ2luTW9kYWwsIHNldFNob3dMb2dpbk1vZGFsXSA9IHVzZVN0YXRlKGZhbHNlKSxcclxuICAgICAgICB1c2VyX2luZm8gPSB1c2VTZWxlY3Rvcigoc3RhdGUpID0+IHN0YXRlLnVzZXIudXNlcilcclxuXHJcbiAgICBjb25zb2xlLmxvZyggdXNlcl9pbmZvICk7XHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPXtgJHtzdHlsZXMuYmFyX2NvbnRhaW5lcn0gJHtiYXJfaXRlbXNfY29udH1gfT5cclxuICAgICAgICAgICAgPGRpdj5cclxuICAgICAgICAgICAgICAgIDxMb2dvIC8+XHJcbiAgICAgICAgICAgICAgICA8RHJvcGRvd24gLz5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDxCYXJJdGVtc1xyXG4gICAgICAgICAgICAgICAgdXNlckxvZ2dlZD17dXNlcl9pbmZvICE9PSBudWxsID8gdHJ1ZSA6IGZhbHNlfVxyXG4gICAgICAgICAgICAgICAgcmVnaXN0cmF0aW9uPXt0cmFuc2xhdGUoJ3JlZ2lzdGVyJyl9XHJcbiAgICAgICAgICAgICAgICBsb2dpbj17dHJhbnNsYXRlKCdsb2dpbicpfVxyXG4gICAgICAgICAgICAgICAgcmVnaXN0cmF0aW9uX3BhdGg9Jy9yZWdpc3RyYXRpb24nXHJcbiAgICAgICAgICAgICAgICBsb2dpbk1vZGFsSGFuZGxlPXsoKSA9PiBzZXRTaG93TG9naW5Nb2RhbCh0cnVlKX1cclxuICAgICAgICAgICAgICAgIGJhcl9pdGVtcz17YmFyX2l0ZW1zfVxyXG4gICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICB7c2hvd0xvZ2luTW9kYWwgJiYgPExvZ2luIG9uTW9kYWxDbG9zZT17KCkgPT4gc2V0U2hvd0xvZ2luTW9kYWwoZmFsc2UpfSAvPn1cclxuICAgICAgICA8L2Rpdj5cclxuICAgIClcclxufVxyXG4iLCIvLyBob29rcyBhbmQgaGVscGVyc1xyXG5pbXBvcnQgeyBsYW5ndWFnZXMgfSBmcm9tICcuL0xhbmd1YWdlRHJvcENvbmZpZ3MvbGFuZy1jb25maWdzJ1xyXG5pbXBvcnQgeyB1c2VTdGF0ZSwgdXNlRWZmZWN0IH0gZnJvbSAncmVhY3QnXHJcbi8vIGltcG9ydCB7IHVzZXJfZGF0YSB9IGZyb20gJy9zcmMvdXNlci91c2VyJ1xyXG5pbXBvcnQgeyB1c2VSb3V0ZXIgfSBmcm9tICduZXh0L2Rpc3QvY2xpZW50L3JvdXRlcidcclxuLy8gdHJhbnNsYXRpb24gXHJcbmltcG9ydCB1c2VUcmFuc2xhdGlvbiBmcm9tICduZXh0LXRyYW5zbGF0ZS91c2VUcmFuc2xhdGlvbidcclxuLy8gc3R5bGVzIFxyXG5pbXBvcnQgc3R5bGVzIGZyb20gJy4vQmFySXRlbXMubW9kdWxlLnNjc3MnXHJcbi8vIGNvbXBvbmVudHNcclxuaW1wb3J0IExpbmsgZnJvbSAnbmV4dC9saW5rJ1xyXG5pbXBvcnQgeyBMYW5ndWFnZURyb3AgfSBmcm9tICcuL0xhbmd1YWdlRHJvcC9MYW5ndWFnZURyb3AnXHJcbmltcG9ydCB7IExvZ2dlZCB9IGZyb20gJy4vTG9nZ2VkL0xvZ2dlZCdcclxuLy8gaWNvbnNcclxuaW1wb3J0IHJlZ2lzdGVyX2ljb24gZnJvbSAnL3B1YmxpYy9pbWFnZXMvaGVhZGVyL3JlZ2lzdGVyLnBuZydcclxuaW1wb3J0IGxvZ2luX2ljb24gZnJvbSAnL3B1YmxpYy9pbWFnZXMvaGVhZGVyL2xvZ2luLnBuZydcclxuaW1wb3J0IHsgdXNlU2VsZWN0b3IgfSBmcm9tICdyZWFjdC1yZWR1eCdcclxuaW1wb3J0IHsgc2VsZWN0VXNlciB9IGZyb20gJy4uLy4uLy4uLy4uL3JlZHV4L2ZlYXR1cmVzL3VzZXJTbGljZSdcclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIEJhckl0ZW1zKHtcclxuICAgIHJlZ2lzdHJhdGlvbixcclxuICAgIGxvZ2luLFxyXG4gICAgcmVnaXN0cmF0aW9uX3BhdGgsXHJcbiAgICBsb2dpbk1vZGFsSGFuZGxlLFxyXG4gICAgYmFyX2l0ZW1zLFxyXG4gICAgdXNlckxvZ2dlZCB9KSB7XHJcbiAgICAgICAgXHJcbiAgICAgICAgY29uc3QgeyB0LCBsYW5nIH0gPSB1c2VUcmFuc2xhdGlvbignY29tbW9uJyk7XHJcbiAgICAgICAgY29uc3QgW2xhbmd1YWdlc1RpdGxlLCBzZXRMYW5ndWFnZXNUaXRsZV0gPSB1c2VTdGF0ZShsYW5ndWFnZXNbMV0pO1xyXG4gICAgICAgIHVzZUVmZmVjdCggKCk9PntcclxuICAgICAgICAgICAgY29uc3QgbmV3TGFuZyA9IGxhbmd1YWdlcy5maW5kKCBlbCA9PiBlbC5sYW5nID09PSBsYW5nICk7XHJcbiAgICAgICAgICAgIGlmICggbmV3TGFuZyApIHtcclxuICAgICAgICAgICAgICAgIHNldExhbmd1YWdlc1RpdGxlKCBuZXdMYW5nICk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9LCBbbGFuZ10gKTsgXHJcbiAgICAgICAgXHJcbiAgICAgICAgY29uc3RcclxuICAgICAgICByb3V0ZXIgPSB1c2VSb3V0ZXIoKSxcclxuICAgICAgICBsYW5ndWFnZXNfZGF0YSA9IGxhbmd1YWdlcyxcclxuXHJcbiAgICAgICAgW3Nob3dEcm9wLCBzZXRTaG93RHJvcF0gPSB1c2VTdGF0ZShmYWxzZSksXHJcblxyXG4gICAgICAgIGNoYW5nZUxhbmdUaXRsZSA9IChldmVudCkgPT4ge1xyXG4gICAgICAgICAgICBsZXQgbGFuZ190aXRsZV9kYXRhID0gbGFuZ3VhZ2VzX2RhdGEuZmlsdGVyKGVsID0+IGVsLmxhbmcgPT09IGV2ZW50LnRhcmdldC5jbGFzc05hbWUpXHJcbiAgICAgICAgICAgIHNldExhbmd1YWdlc1RpdGxlKGxhbmdfdGl0bGVfZGF0YVswXSlcclxuICAgICAgICAgICAgc2V0U2hvd0Ryb3AoZmFsc2UpXHJcbiAgICAgICAgfSxcclxuICAgICAgICBcclxuICAgICAgICB0cmFuc2xhdGlvblBhdGggPSAnaGVhZGVyLmxhbmcuJyxcclxuICAgICAgICB0cmFuc2xhdGUgPSAoa2V5KSA9PiB0KGAke3RyYW5zbGF0aW9uUGF0aH0ke2tleX1gKVxyXG5cclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPD5cclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e2Ake3N0eWxlcy5iYXJfaXRlbV9jb250YWluZXJ9ICR7YmFyX2l0ZW1zfSAke3JvdXRlci5wYXRobmFtZSAhPT0gJy8nID8gc3R5bGVzLmZvcl9tb2JpbGUgOiBudWxsfWB9PlxyXG4gICAgICAgICAgICAgICAgICAgIHt1c2VyTG9nZ2VkID8gPExvZ2dlZCAvPiA6XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuYXV0aF9jb250YWluZXJ9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5hdXRoX2J1dHRvbnN9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuc2lnbl91cF9idXR0b259PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8TGluayBocmVmPXtyZWdpc3RyYXRpb25fcGF0aH0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aW1nIHNyYz17cmVnaXN0ZXJfaWNvbi5zcmN9IGFsdD1cIlwiIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvTGluaz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPExpbmsgaHJlZj17cmVnaXN0cmF0aW9uX3BhdGh9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZWdpc3RyYXRpb25cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvTGluaz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17c3R5bGVzLnNpZ25faW5fYnV0dG9ufVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNsaWNrPXtsb2dpbk1vZGFsSGFuZGxlfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGltZyBzcmM9e2xvZ2luX2ljb24uc3JjfSBhbHQ9XCJcIiAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBsb2dpblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMubGFuZ19idXR0b259PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9e3N0eWxlcy5sYW5nX2J1dHRvbl9jb250ZW50fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc3R5bGU9e3Nob3dEcm9wID8geyBkaXNwbGF5OiAnbm9uZScgfSA6IG51bGx9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiBzZXRTaG93RHJvcCh0cnVlKX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0cmFuc2xhdGUoYCR7bGFuZ3VhZ2VzVGl0bGUuY29udGVudE9uVGl0bGV9YClcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aW1nXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3JjPXtsYW5ndWFnZXNUaXRsZS5pY29ufVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFsdD1cImxhbmctZmxhZ1wiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAge3Nob3dEcm9wICYmIDxMYW5ndWFnZURyb3BcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsaWNrPXtjaGFuZ2VMYW5nVGl0bGV9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNsb3NlPXsoKSA9PiBzZXRTaG93RHJvcChmYWxzZSl9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBkYXRhPXtsYW5ndWFnZXNfZGF0YX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgLz59XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8L2RpdiA+XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICA8Lz5cclxuICAgIClcclxufVxyXG4iLCIvLyBmbGFnIGljb25zXHJcbmltcG9ydCBydXNGbGFnIGZyb20gJy9wdWJsaWMvaW1hZ2VzL2hlYWRlci9mbGFncy9ydXMucG5nJ1xyXG5pbXBvcnQgYXJtRmxhZyBmcm9tICcvcHVibGljL2ltYWdlcy9oZWFkZXIvZmxhZ3MvYXJtLnN2ZydcclxuaW1wb3J0IGVuRmxhZyBmcm9tICcvcHVibGljL2ltYWdlcy9oZWFkZXIvZmxhZ3MvZW4uc3ZnJ1xyXG5pbXBvcnQgZXNwRmxhZyBmcm9tICcvcHVibGljL2ltYWdlcy9oZWFkZXIvZmxhZ3MvZXNwLnN2ZydcclxuaW1wb3J0IGZyY0ZsYWcgZnJvbSAnL3B1YmxpYy9pbWFnZXMvaGVhZGVyL2ZsYWdzL2ZyYy5zdmcnXHJcbmltcG9ydCBkZXVGbGFnIGZyb20gJy9wdWJsaWMvaW1hZ2VzL2hlYWRlci9mbGFncy9kZXUuc3ZnJ1xyXG5cclxuXHJcbmV4cG9ydCBjb25zdCBsYW5ndWFnZXMgPVxyXG4gICAgW1xyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgbGFuZzogXCJhbVwiLFxyXG4gICAgICAgICAgICBjb250ZW50T25UaXRsZTogJ2FtLm9uVGl0bGUnLFxyXG4gICAgICAgICAgICBjb250ZW50T25Ecm9wOiAnYW0ub25Ecm9wJyxcclxuICAgICAgICAgICAgaWNvbjogYXJtRmxhZy5zcmMsXHJcbiAgICAgICAgfSxcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIGxhbmc6IFwicnNcIixcclxuICAgICAgICAgICAgY29udGVudE9uVGl0bGU6ICdycy5vblRpdGxlJyxcclxuICAgICAgICAgICAgY29udGVudE9uRHJvcDogJ3JzLm9uRHJvcCcsXHJcbiAgICAgICAgICAgIGljb246IHJ1c0ZsYWcuc3JjLFxyXG4gICAgICAgIH0sXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBsYW5nOiBcImVuXCIsXHJcbiAgICAgICAgICAgIGNvbnRlbnRPblRpdGxlOiAnZW4ub25UaXRsZScsXHJcbiAgICAgICAgICAgIGNvbnRlbnRPbkRyb3A6ICdlbi5vbkRyb3AnLFxyXG4gICAgICAgICAgICBpY29uOiBlbkZsYWcuc3JjLFxyXG4gICAgICAgIH0sXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBsYW5nOiBcImVzcFwiLFxyXG4gICAgICAgICAgICBjb250ZW50T25UaXRsZTogJ2VzcC5vblRpdGxlJyxcclxuICAgICAgICAgICAgY29udGVudE9uRHJvcDogJ2VzcC5vbkRyb3AnLFxyXG4gICAgICAgICAgICBpY29uOiBlc3BGbGFnLnNyYyxcclxuICAgICAgICB9LFxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgbGFuZzogXCJmclwiLFxyXG4gICAgICAgICAgICBjb250ZW50T25UaXRsZTogJ2ZyYy5vblRpdGxlJyxcclxuICAgICAgICAgICAgY29udGVudE9uRHJvcDogJ2ZyYy5vbkRyb3AnLFxyXG4gICAgICAgICAgICBpY29uOiBmcmNGbGFnLnNyYyxcclxuICAgICAgICB9LFxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgbGFuZzogXCJkZXVcIixcclxuICAgICAgICAgICAgY29udGVudE9uVGl0bGU6ICdkZXUub25UaXRsZScsXHJcbiAgICAgICAgICAgIGNvbnRlbnRPbkRyb3A6ICdkZXUub25Ecm9wJyxcclxuICAgICAgICAgICAgaWNvbjogZGV1RmxhZy5zcmMsXHJcbiAgICAgICAgfSxcclxuICAgIF1cclxuIiwiLy8gaG9va3MgYW5kIGhlbHBlcnNcclxuaW1wb3J0IHsgdXNlUm91dGVyIH0gZnJvbSAnbmV4dC9kaXN0L2NsaWVudC9yb3V0ZXInO1xyXG5pbXBvcnQgeyB1c2VFZmZlY3QsIHVzZVJlZiB9IGZyb20gJ3JlYWN0JztcclxuLy8gdHJhbnNsYXRpb24gXHJcbmltcG9ydCB1c2VUcmFuc2xhdGlvbiBmcm9tICduZXh0LXRyYW5zbGF0ZS91c2VUcmFuc2xhdGlvbidcclxuLy8gY29tcG9uZXRuc1xyXG5pbXBvcnQgTGluayBmcm9tICduZXh0L2xpbmsnXHJcbi8vIHN0eWxlcyBcclxuaW1wb3J0IHN0eWxlcyBmcm9tICcuL0xhbmd1YWdlRHJvcC5tb2R1bGUuc2NzcydcclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBMYW5ndWFnZURyb3AoeyBvbkNsb3NlLCBjbGljaywgZGF0YSB9KSB7XHJcblxyXG4gICAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgICAgICBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKFwibW91c2Vkb3duXCIsIGhhbmRsZUNsb3NlKTtcclxuICAgICAgICByZXR1cm4gKCkgPT4ge1xyXG4gICAgICAgICAgICBkb2N1bWVudC5yZW1vdmVFdmVudExpc3RlbmVyKFwibW91c2Vkb3duXCIsIGhhbmRsZUNsb3NlKTtcclxuICAgICAgICB9XHJcbiAgICB9LCBbXSlcclxuXHJcbiAgICBjb25zdFxyXG4gICAgICAgIG5vZGUgPSB1c2VSZWYoKSxcclxuICAgICAgICByb3V0ZXIgPSB1c2VSb3V0ZXIoKSxcclxuXHJcbiAgICAgICAgaGFuZGxlQ2xvc2UgPSAoZSkgPT4ge1xyXG4gICAgICAgICAgICBpZiAobm9kZS5jdXJyZW50LmNvbnRhaW5zKGUudGFyZ2V0KSkge1xyXG4gICAgICAgICAgICAgICAgaWYgKGUudGFyZ2V0LnBhcmVudE5vZGUpIHJldHVyblxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIG9uQ2xvc2UoKVxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgeyB0IH0gPSB1c2VUcmFuc2xhdGlvbignY29tbW9uJyksXHJcbiAgICAgICAgdHJhbnNsYXRpb25QYXRoID0gJ2hlYWRlci5sYW5nLicsXHJcbiAgICAgICAgdHJhbnNsYXRlID0gKGtleSkgPT4gdChgJHt0cmFuc2xhdGlvblBhdGh9JHtrZXl9YClcclxuXHJcblxyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8ZGl2XHJcbiAgICAgICAgICAgIGNsYXNzTmFtZT17c3R5bGVzLmNvbnRhaW5lcn1cclxuICAgICAgICAgICAgcmVmPXtub2RlfVxyXG4gICAgICAgID5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5jb250ZW50fT5cclxuICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICBkYXRhLm1hcChlbCA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiAoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8TGlua1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGhyZWY9e2Ake3JvdXRlci5wYXRobmFtZX1gfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxvY2FsZT17ZWwubGFuZ31cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBrZXk9e2BjaGFuZ2UtbGFuZy0ke2VsLmxhbmd9YH0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5yb3d9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3BhblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb25DbGljaz17Y2xpY2t9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9e2Ake2VsLmxhbmd9YH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRyYW5zbGF0ZShlbC5jb250ZW50T25Ecm9wKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpbWdcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9e2NsaWNrfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3JjPXtlbC5pY29ufVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPXtgJHtlbC5sYW5nfWB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0xpbms+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIClcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICApXHJcblxyXG59XHJcbiIsIi8vIHN0eWxlc1xyXG5pbXBvcnQgeyB1c2VTdGF0ZSwgdXNlRWZmZWN0IH0gZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgeyB1c2VTZWxlY3RvciB9IGZyb20gJ3JlYWN0LXJlZHV4JztcclxuaW1wb3J0IHsgc2VsZWN0VXNlciB9IGZyb20gJy4uLy4uLy4uLy4uLy4uL3JlZHV4L2ZlYXR1cmVzL3VzZXJTbGljZSc7XHJcbmltcG9ydCBzdHlsZXMgZnJvbSAnLi9Mb2dnZWQubW9kdWxlLnNjc3MnXHJcbmltcG9ydCB7IExvZ2dlZERyb3AgfSBmcm9tICcuL0xvZ2dlZERyb3AvTG9nZ2VkRHJvcCc7XHJcbmltcG9ydCB7IExvZ2dlZFdhbGxwZXIgfSBmcm9tICcuL0xvZ2dlZFdhbGxwZXIvTG9nZ2VkV2FsbHBlcidcclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBMb2dnZWQoICkge1xyXG4gICAgY29uc3RcclxuICAgICAgICAvLyBzdGF0ZXNcclxuICAgICAgICAvL2NoYW5nZSB1c2VyIGRyb3Bkb3duXHJcbiAgICAgICAgW3Nob3dVc2VyRHJvcCwgc2V0U2hvd1VzZXJEcm9wXSA9IHVzZVN0YXRlKGZhbHNlKVxyXG5cclxuICAgIGNvbnN0IGRhdGEgPSB1c2VTZWxlY3RvcihzZWxlY3RVc2VyKTtcclxuICAgIGNvbnN0IFtwaG90byxzZXRQaG90b10gPSB1c2VTdGF0ZShkYXRhLnBob3RvKTtcclxuICAgIHVzZUVmZmVjdCAoKCk9PntcclxuICAgICAgICBzZXRQaG90byhkYXRhLnBob3RvKVxyXG4gICAgfSwgW2RhdGFdKTtcclxuXHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIDxkaXZcclxuICAgICAgICAgICAgY2xhc3NOYW1lPXtzdHlsZXMuY29udGFpbmVyfVxyXG4gICAgICAgICAgICBzdHlsZT17c2hvd1VzZXJEcm9wID8geyBwYWRkaW5nOiAnMTcuNXB4IDAnIH0gOiBudWxsfT5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5jb250ZW50fT5cclxuICAgICAgICAgICAgICAgIHshc2hvd1VzZXJEcm9wID9cclxuICAgICAgICAgICAgICAgICAgICA8TG9nZ2VkV2FsbHBlclxyXG4gICAgICAgICAgICAgICAgICAgICAgICBpbWc9e3Bob3RvfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBmdWxsTmFtZT17ZGF0YS51c2VybmFtZX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgY2xpY2s9eygpID0+IHNldFNob3dVc2VyRHJvcCh0cnVlKX1cclxuICAgICAgICAgICAgICAgICAgICAvPiA6XHJcbiAgICAgICAgICAgICAgICAgICAgPExvZ2dlZERyb3BcclxuICAgICAgICAgICAgICAgICAgICAgICAgb25DbG9zZT17KCkgPT4gc2V0U2hvd1VzZXJEcm9wKGZhbHNlKX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgdXNlcj17ZGF0YX1cclxuICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgIClcclxufVxyXG4iLCIvLyBob29rcyBhbmQgaGVscGVyc1xyXG5pbXBvcnQgeyB1c2VSb3V0ZXIgfSBmcm9tICduZXh0L2Rpc3QvY2xpZW50L3JvdXRlcic7XHJcbmltcG9ydCB7IHVzZUVmZmVjdCwgdXNlUmVmIH0gZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgeyB1c2VEaXNwYXRjaCB9IGZyb20gJ3JlYWN0LXJlZHV4JztcclxuaW1wb3J0IHVzZXJEZWZhdWx0SWNvbiBmcm9tICcvcHVibGljL2ltYWdlcy9jb21tb24vdXNlckRlZmF1bHQucG5nJ1xyXG4vLyB0cmFuc2xhdGlvbiBcclxuaW1wb3J0IHVzZVRyYW5zbGF0aW9uIGZyb20gJ25leHQtdHJhbnNsYXRlL3VzZVRyYW5zbGF0aW9uJ1xyXG4vLyBjb21wb25ldG5zXHJcbmltcG9ydCBMaW5rIGZyb20gJ25leHQvbGluaydcclxuLy8gc3R5bGVzIFxyXG5pbXBvcnQgc3R5bGVzIGZyb20gJy4vTG9nZ2VkRHJvcC5tb2R1bGUuc2NzcydcclxuLy8gaWNvbnNcclxuaW1wb3J0IHRlbEljb24gZnJvbSAnL3B1YmxpYy9pbWFnZXMvY29tbW9uL3Bob25lLnBuZydcclxuaW1wb3J0IHsgbG9nb3V0IH0gZnJvbSAnL3JlZHV4L2ZlYXR1cmVzL3VzZXJTbGljZSc7XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gTG9nZ2VkRHJvcCh7IG9uQ2xvc2UsIHVzZXIgfSkge1xyXG5cclxuICAgIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICAgICAgZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcihcIm1vdXNlZG93blwiLCBoYW5kbGVDbG9zZSk7XHJcbiAgICAgICAgcmV0dXJuICgpID0+IHtcclxuICAgICAgICAgICAgZG9jdW1lbnQucmVtb3ZlRXZlbnRMaXN0ZW5lcihcIm1vdXNlZG93blwiLCBoYW5kbGVDbG9zZSk7XHJcbiAgICAgICAgfVxyXG4gICAgfSwgW10pXHJcblxyXG4gICAgY29uc3RcclxuICAgICAgICBub2RlID0gdXNlUmVmKCksXHJcbiAgICAgICAgcm91dGVyID0gdXNlUm91dGVyKCksXHJcblxyXG4gICAgICAgIGhhbmRsZUNsb3NlID0gKGUpID0+IHtcclxuICAgICAgICAgICAgaWYgKG5vZGUuY3VycmVudC5jb250YWlucyhlLnRhcmdldCkpIHtcclxuICAgICAgICAgICAgICAgIGlmIChlLnRhcmdldC5wYXJlbnROb2RlKSByZXR1cm5cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBvbkNsb3NlKClcclxuICAgICAgICB9LFxyXG4gICAgICAgIHsgdCB9ID0gdXNlVHJhbnNsYXRpb24oJ2NvbW1vbicpLFxyXG4gICAgICAgIHRyYW5zbGF0aW9uUGF0aCA9ICdjb21tb25zLicsXHJcbiAgICAgICAgdHJhbnNsYXRlID0gKGtleSkgPT4gdChgJHt0cmFuc2xhdGlvblBhdGh9JHtrZXl9YCksXHJcbiAgICAgICAgZGlzcGF0Y2ggPSB1c2VEaXNwYXRjaCgpXHJcblxyXG4gICAgZnVuY3Rpb24gX2xvZ291dCgpIHtcclxuICAgICAgICBkaXNwYXRjaChsb2dvdXQoKSk7XHJcbiAgICAgICAgcm91dGVyLnB1c2goYC9gKTtcclxuICAgIH0gICAgXHJcblxyXG5cclxuICAgIGZ1bmN0aW9uIGdvVG9QZXJzb25hbCAoKSB7XHJcbiAgICAgICAgcm91dGVyLnB1c2goYC9wZXJzb25hbGApO1xyXG4gICAgfVxyXG5cclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPGRpdlxyXG4gICAgICAgICAgICBjbGFzc05hbWU9e3N0eWxlcy5jb250YWluZXJ9XHJcbiAgICAgICAgICAgIHJlZj17bm9kZX1cclxuICAgICAgICA+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuY29udGVudH0+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLnVzZXJfcGhvdG9fbmFtZX0+XHJcbiAgICAgICAgICAgICAgICAgICAgPHNwYW4gb25DbGljaz17Z29Ub1BlcnNvbmFsfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgey8qIDxMaW5rIGhyZWY9Jy9wZXJzb25hbCc+ICovfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGltZyBzcmM9e3VzZXIucGhvdG8gPz8gdXNlckRlZmF1bHRJY29uLnNyY30gYWx0PVwiXCIgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgey8qIDwvTGluaz4gKi99XHJcbiAgICAgICAgICAgICAgICAgICAgPC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgIDxzcGFuIG9uQ2xpY2s9e2dvVG9QZXJzb25hbH0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHsvKiA8TGluayBocmVmPScvcGVyc29uYWwnPiAqL31cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHt1c2VyLnVzZXJuYW1lfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICB7LyogPC9MaW5rPiAqL31cclxuICAgICAgICAgICAgICAgICAgICA8L3NwYW4+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMudXNlcl90ZWx9PlxyXG4gICAgICAgICAgICAgICAgICAgIDxzcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8aW1nIHNyYz17dGVsSWNvbi5zcmN9IGFsdD1cIlwiIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgIDxzcGFuPnt1c2VyLnRlbGVwaG9uZX08L3NwYW4+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMubG9nT3V0fT5cclxuICAgICAgICAgICAgICAgICAgICA8c3BhblxyXG4gICAgICAgICAgICAgICAgICAgICAgICBvbkNsaWNrPXsoKSA9Pl9sb2dvdXQoKSB9XHJcbiAgICAgICAgICAgICAgICAgICAgPnt0cmFuc2xhdGUoJ2xvZ091dCcpfTwvc3Bhbj5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgIClcclxuXHJcbn1cclxuIiwiLy8gY29tcG9uZW50c1xyXG5pbXBvcnQgTGluayBmcm9tICduZXh0L2xpbmsnXHJcbmltcG9ydCB7IHVzZUVmZmVjdCx1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0J1xyXG5pbXBvcnQgeyB1c2VTZWxlY3RvciB9IGZyb20gJ3JlYWN0LXJlZHV4J1xyXG5pbXBvcnQgeyBzZWxlY3RVc2VyIH0gZnJvbSAnLi4vLi4vLi4vLi4vLi4vLi4vcmVkdXgvZmVhdHVyZXMvdXNlclNsaWNlJ1xyXG4vLyBzdHlsZXNcclxuaW1wb3J0IHN0eWxlcyBmcm9tICcuL0xvZ2dlZFdhbGxwZXIubW9kdWxlLnNjc3MnXHJcbi8vIGljb25zXHJcbmltcG9ydCB0cmlhbmdsZSBmcm9tICcvcHVibGljL2ltYWdlcy9jb21tb24vdHJpYW5nbGUucG5nJ1xyXG5pbXBvcnQgdXNlckRlZmF1bHRJY29uIGZyb20gJy9wdWJsaWMvaW1hZ2VzL2NvbW1vbi91c2VyRGVmYXVsdC5wbmcnXHJcblxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIExvZ2dlZFdhbGxwZXIoe1xyXG4gICAgaW1nLFxyXG4gICAgZnVsbE5hbWUsXHJcbiAgICBjbGlja1xyXG59KSB7XHJcbiAgICBjb25zdCBkYXRhID0gdXNlU2VsZWN0b3Ioc2VsZWN0VXNlcik7XHJcbiAgICBjb25zdCBbIHBob3RvLCBzZXRQaG90byBdID0gdXNlU3RhdGUoZGF0YS5waG90bylcclxuICAgIGNvbnN0IFsgZnVsbG5hbWUsIHNldEZ1bGxuYW1lIF0gPSB1c2VTdGF0ZShkYXRhLnVzZXJuYW1lKVxyXG4gICAgdXNlRWZmZWN0KCgpPT57XHJcbiAgICAgICAgc2V0UGhvdG8oIGRhdGEucGhvdG8gKVxyXG4gICAgICAgIHNldEZ1bGxuYW1lKCBkYXRhLnVzZXJuYW1lIClcclxuICAgIH0sW2RhdGFdKVxyXG5cclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5jb250YWluZXJ9PlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmNvbnRlbnR9PlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy51c2VyX3Bob3RvfT5cclxuICAgICAgICAgICAgICAgICAgICA8TGluayBocmVmPScvcGVyc29uYWwnPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8aW1nXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzcmM9e3Bob3RvIHx8IHVzZXJEZWZhdWx0SWNvbi5zcmN9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBhbHQ9e2Ake2Z1bGxuYW1lfSBpY29uYH0gLz5cclxuICAgICAgICAgICAgICAgICAgICA8L0xpbms+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDxkaXZcclxuICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9e3N0eWxlcy51c2VyX2Z1bGxOYW1lfVxyXG4gICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9e2NsaWNrfVxyXG4gICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT17c3R5bGVzLmZ1bGxuYW1lfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAge2Z1bGxuYW1lfVxyXG4gICAgICAgICAgICAgICAgICAgIDwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICA8c3BhbiBzdHlsZT17e1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBjb2xvcjogJ3doaXRlJyxcclxuICAgICAgICAgICAgICAgICAgICB9fT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGltZ1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc3JjPXt0cmlhbmdsZS5zcmN9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBhbHQ9XCJ0cmlhbmdsZVwiIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgKVxyXG59XHJcbiIsIi8vIGhvb2tzIGFuZCBoZWxwZXJzXHJcbmltcG9ydCB7IHVzZVJvdXRlciB9IGZyb20gJ25leHQvZGlzdC9jbGllbnQvcm91dGVyJ1xyXG5pbXBvcnQgeyB1c2VFZmZlY3QsIHVzZVJlZiwgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCc7XHJcblxyXG5cclxuLy8gc3R5bGVzXHJcbmltcG9ydCBzdHlsZXMgZnJvbSAnLi9Ecm9wZG93bi5tb2R1bGUuc2Nzcyc7XHJcblxyXG4vLyB0cmFuc2xhdGlvbiBcclxuaW1wb3J0IHVzZVRyYW5zbGF0aW9uIGZyb20gJ25leHQtdHJhbnNsYXRlL3VzZVRyYW5zbGF0aW9uJ1xyXG5cclxuLy9pbWdzXHJcbmltcG9ydCBkcm9wZG93bkxpbmVzIGZyb20gJy9wdWJsaWMvaW1hZ2VzL2hlYWRlci9kcm9wZG93bl9saW5lcy5wbmcnO1xyXG5cclxuLy9jb21wb25lbnRzXHJcbmltcG9ydCBMaW5rIGZyb20gJ25leHQvbGluaydcclxuaW1wb3J0IENvbnRhY3RzTW9kYWwgZnJvbSAnLi4vLi4vLi4vUGFnZXMvQ29udGFjdHMvQ29udGFjdHNNb2RhbCc7XHJcblxyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gRHJvcGRvd24oKSB7XHJcbiAgICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgICAgIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoXCJtb3VzZWRvd25cIiwgaGFuZGxlQ2xvc2UpO1xyXG4gICAgICAgIHJldHVybiAoKSA9PiB7XHJcbiAgICAgICAgICAgIGRvY3VtZW50LnJlbW92ZUV2ZW50TGlzdGVuZXIoXCJtb3VzZWRvd25cIiwgaGFuZGxlQ2xvc2UpO1xyXG4gICAgICAgIH1cclxuICAgIH0sIFtdKVxyXG5cclxuICAgIGNvbnN0XHJcbiAgICAgICAgW3Nob3dEcm9wZG93biwgc2V0U2hvd0Ryb3Bkb3duXSA9IHVzZVN0YXRlKGZhbHNlKSxcclxuICAgICAgICBbc2hvd0NvbnRhY3RzTW9kYWwsIHNldFNob3dDb250YWN0c01vZGFsXSA9IHVzZVN0YXRlKGZhbHNlKSxcclxuXHJcbiAgICAgICAgeyB0IH0gPSB1c2VUcmFuc2xhdGlvbignY29tbW9uJyksXHJcbiAgICAgICAgdHJhbnNsYXRpb25QYXRoID0gJ2hlYWRlci5uYXZCYXIuJyxcclxuICAgICAgICB0cmFuc2xhdGUgPSAoa2V5KSA9PiB0KGAke3RyYW5zbGF0aW9uUGF0aH0ke2tleX1gKSxcclxuXHJcbiAgICAgICAgcm91dGVyID0gdXNlUm91dGVyKCksXHJcblxyXG4gICAgICAgIG5vZGUgPSB1c2VSZWYoKSxcclxuXHJcbiAgICAgICAgaGFuZGxlQ2xvc2UgPSAoZSkgPT4ge1xyXG4gICAgICAgICAgICBpZiAobm9kZT8uY3VycmVudD8uY29udGFpbnMoZS50YXJnZXQpKSB7XHJcbiAgICAgICAgICAgICAgICBpZiAoZS50YXJnZXQucGFyZW50Tm9kZSkgcmV0dXJuXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgc2V0U2hvd0Ryb3Bkb3duKGZhbHNlKVxyXG4gICAgICAgIH0sXHJcblxyXG4gICAgICAgIGJ1dHRvbnNJbkhvbWVQYWdlID0gW1xyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICBpZDogJ21haW4nLFxyXG4gICAgICAgICAgICAgICAga2V5OiBNYXRoLnJhbmRvbSgpLFxyXG4gICAgICAgICAgICAgICAgZnJzdENvbnRlbnQ6IHRyYW5zbGF0ZSgnbWFpbicpLFxyXG4gICAgICAgICAgICAgICAgaHJlZjogJy8nXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIGlkOiAnZ2FtZXMnLFxyXG4gICAgICAgICAgICAgICAga2V5OiBNYXRoLnJhbmRvbSgpLFxyXG4gICAgICAgICAgICAgICAgZnJzdENvbnRlbnQ6IHRyYW5zbGF0ZSgnZ2FtZXMnKSxcclxuICAgICAgICAgICAgICAgIGhyZWY6ICcvZ2FtZXMnXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIGlkOiAnc3RhdGlzdGljcycsXHJcbiAgICAgICAgICAgICAgICBrZXk6IE1hdGgucmFuZG9tKCksXHJcbiAgICAgICAgICAgICAgICBmcnN0Q29udGVudDogdHJhbnNsYXRlKCdzdGF0aXN0aWNzLmZycycpLFxyXG4gICAgICAgICAgICAgICAgc2VjQ29udGVudDogdHJhbnNsYXRlKCdzdGF0aXN0aWNzLnNlYycpLFxyXG4gICAgICAgICAgICAgICAgaHJlZjogJy9zdGF0aXN0aWNzJ1xyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICBpZDogJ3ByZWRpY3Rpb24nLFxyXG4gICAgICAgICAgICAgICAga2V5OiBNYXRoLnJhbmRvbSgpLFxyXG4gICAgICAgICAgICAgICAgZnJzdENvbnRlbnQ6IHRyYW5zbGF0ZSgncHJlZGljdGlvbi5mcnMnKSxcclxuICAgICAgICAgICAgICAgIHNlY0NvbnRlbnQ6IHRyYW5zbGF0ZSgncHJlZGljdGlvbi5zZWMnKSxcclxuICAgICAgICAgICAgICAgIGhyZWY6ICcvcHJlZGljdGlvbidcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgaWQ6ICd0ZXN0aW1vbmlhbHMnLFxyXG4gICAgICAgICAgICAgICAga2V5OiBNYXRoLnJhbmRvbSgpLFxyXG4gICAgICAgICAgICAgICAgZnJzdENvbnRlbnQ6IHRyYW5zbGF0ZSgndGVzdGltb25pYWxzJyksXHJcbiAgICAgICAgICAgICAgICBocmVmOiAnL3Rlc3RpbW9uaWFscydcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgaWQ6ICdhYm91dFVzJyxcclxuICAgICAgICAgICAgICAgIGtleTogTWF0aC5yYW5kb20oKSxcclxuICAgICAgICAgICAgICAgIGZyc3RDb250ZW50OiB0cmFuc2xhdGUoJ2Fib3V0VXMnKSxcclxuICAgICAgICAgICAgICAgIGhyZWY6ICcvYWJvdXRVcydcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgaWQ6ICdjb250YWN0cycsXHJcbiAgICAgICAgICAgICAgICBrZXk6IE1hdGgucmFuZG9tKCksXHJcbiAgICAgICAgICAgICAgICBmcnN0Q29udGVudDogdHJhbnNsYXRlKCdjb250YWN0cycpLFxyXG4gICAgICAgICAgICAgICAgaHJlZjogbnVsbCxcclxuICAgICAgICAgICAgICAgIGNsaWNrOiAoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgc2V0U2hvd0Ryb3Bkb3duKGZhbHNlKVxyXG4gICAgICAgICAgICAgICAgICAgIHNldFNob3dDb250YWN0c01vZGFsKHRydWUpXHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgXSxcclxuICAgICAgICBidXR0b25zID0gYnV0dG9uc0luSG9tZVBhZ2UuZmlsdGVyKGVsID0+IGVsLmlkICE9PSBcInN0YXRpc3RpY3NcIilcclxuXHJcblxyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmRyb3Bkb3dufT5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5kcm9wZG93bl9jaGVja30+XHJcbiAgICAgICAgICAgICAgICA8aW1nIHNyYz17ZHJvcGRvd25MaW5lcy5zcmN9IGFsdD1cImRyb3AtY2hlY2staWNvblwiIG9uQ2xpY2s9eygpID0+IHNldFNob3dEcm9wZG93bighc2hvd0Ryb3Bkb3duKX0gLz5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIHtzaG93RHJvcGRvd24gJiYgKFxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5kcm9wZG93bl9tZW51fSByZWY9e25vZGV9PlxyXG4gICAgICAgICAgICAgICAgICAgIDx1bCBjbGFzc05hbWU9e3N0eWxlcy5kcm9wZG93bl9saXN0fT5cclxuICAgICAgICAgICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgKHJvdXRlci5wYXRobmFtZSA9PT0gJy8nID8gYnV0dG9uc0luSG9tZVBhZ2UgOiBidXR0b25zKS5tYXAoZWwgPT4gKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxMaW5rXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGhyZWY9e2VsLmhyZWYgPyBlbC5ocmVmIDogXCJcIn1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAga2V5PXtlbC5rZXl9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGlcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9e2VsLmNsaWNrICYmIGVsLmNsaWNrfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPXtzdHlsZXMuZHJvcGRvd25fbGlzdF9pdGVtc31cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge2VsLmZyc3RDb250ZW50fSB7ZWwuc2VjQ29udGVudH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9saT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0xpbms+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICApKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgPC91bD5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICApfVxyXG4gICAgICAgICAgICB7c2hvd0NvbnRhY3RzTW9kYWwgJiZcclxuICAgICAgICAgICAgICAgIDxDb250YWN0c01vZGFsXHJcbiAgICAgICAgICAgICAgICAgICAgb3BlbmVkPXtzaG93Q29udGFjdHNNb2RhbCA/IHRydWUgOiBmYWxzZX1cclxuICAgICAgICAgICAgICAgICAgICBvbk1vZGFsQ2xvc2U9eygpID0+IHNldFNob3dDb250YWN0c01vZGFsKGZhbHNlKX1cclxuICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICA8L2Rpdj5cclxuICAgIClcclxufSIsIi8vIGNvbXBvbmVudHNcclxuaW1wb3J0IHsgTW9kYWwgfSBmcm9tICcuLi8uLi8uLi9jb21tb24vYXV0aC9Nb2RhbC9Nb2RhbCdcclxuaW1wb3J0IHsgU29jaWFsTWVkaWFJY29ucyB9IGZyb20gJy4vU29jaWFsTWVkaWFJY29ucy9Tb2NpYWxNZWRpYUljb25zJ1xyXG5pbXBvcnQgeyBGb3Jnb3RQYXNzd29yZCB9IGZyb20gJy4vUmVzZXRQYXNzd29yZC9Gb3Jnb3RQYXNzd29yZC9Gb3Jnb3RQYXNzd29yZCdcclxuaW1wb3J0IHsgTG9naW5Gb3JtIH0gZnJvbSAnLi9Mb2dpbkZvcm0vTG9naW5Gb3JtJ1xyXG4vLyBzdHlsZXNcclxuaW1wb3J0IHN0eWxlcyBmcm9tICcuL0xvZ2luLm1vZHVsZS5zY3NzJ1xyXG5pbXBvcnQgeyB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0J1xyXG5cclxuXHJcblxyXG5leHBvcnQgZnVuY3Rpb24gTG9naW4oeyBvbk1vZGFsQ2xvc2UgfSkge1xyXG5cclxuICAgIGNvbnN0XHJcbiAgICAgICAgW3Nob3dMb2dpbk1vZGFsLCBzZXRTaG93TG9naW5Nb2RhbF0gPSB1c2VTdGF0ZSh0cnVlKSxcclxuICAgICAgICBbc2hvd1Jlc2V0UGFzc3dvcmRNb2RhbCwgc2V0U2hvd1Jlc2V0UGFzc3dvcmRNb2RhbF0gPSB1c2VTdGF0ZShmYWxzZSlcclxuXHJcbiAgICBjb25zb2xlLmxvZyhzaG93UmVzZXRQYXNzd29yZE1vZGFsKTtcclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPD5cclxuICAgICAgICAgICAge3Nob3dMb2dpbk1vZGFsICYmXHJcbiAgICAgICAgICAgICAgICA8TW9kYWwgb25DbG9zZT17b25Nb2RhbENsb3NlfSBjb250ZW50U3R5bGVzPXtzdHlsZXMubV9jb250ZW50fSBjb250YWluZXJTdHlsZXM9e3N0eWxlcy5tX2NvbnRhaW5lcn0+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5sb2dpbl9jb250YWluZXJ9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8U29jaWFsTWVkaWFJY29ucyAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8TG9naW5Gb3JtXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbk1vZGFsQ2xvc2U9e29uTW9kYWxDbG9zZX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGhhbmRsZVJlc2V0UGFzc01vZGFsPXsoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc2V0U2hvd1Jlc2V0UGFzc3dvcmRNb2RhbCh0cnVlKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNldFNob3dMb2dpbk1vZGFsKGZhbHNlKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDwvTW9kYWw+XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAge3Nob3dSZXNldFBhc3N3b3JkTW9kYWwgJiYgPEZvcmdvdFBhc3N3b3JkIG9uTW9kYWxDbG9zZT17b25Nb2RhbENsb3NlfSAvPn1cclxuICAgICAgICA8Lz5cclxuICAgIClcclxufVxyXG4iLCIvLyBob29rcyBhbmQgaGVscGVyc1xyXG5pbXBvcnQgdXNlVHJhbnNsYXRpb24gZnJvbSAnbmV4dC10cmFuc2xhdGUvdXNlVHJhbnNsYXRpb24nXHJcbmltcG9ydCB7IHVzZUZvcm0gfSBmcm9tICdyZWFjdC1ob29rLWZvcm0nXHJcbmltcG9ydCAqIGFzIHl1cCBmcm9tICd5dXAnXHJcbmltcG9ydCB7IHl1cFJlc29sdmVyIH0gZnJvbSAnQGhvb2tmb3JtL3Jlc29sdmVycy95dXAnXHJcbmltcG9ydCB7IHJlcXVlc3QsIHNldENvb2tpZSB9IGZyb20gJy4uLy4uLy4uLy4uLy4uL2xpYi9lci5saWInO1xyXG4vL2NvbXBvbmVudHNcclxuaW1wb3J0IHsgSW5wdXRDb250YWluZXIgfSBmcm9tICcvY29tcG9uZW50cy9jb21tb24vYXV0aC9JbnB1dENvbnRhaW5lci9JbnB1dENvbnRhaW5lcidcclxuaW1wb3J0IHsgVGl0bGUgfSBmcm9tICcuLi9jb21tb24vVGl0bGUnXHJcbmltcG9ydCB7IFJlc2V0UGFzc3dvcmRMaW5rIH0gZnJvbSAnLi4vY29tbW9uL1Jlc2V0UGFzc3dvcmRMaW5rJ1xyXG5pbXBvcnQgeyBTdWJtaXQgfSBmcm9tICcuLi9jb21tb24vU3VibWl0J1xyXG5pbXBvcnQgeyBUb1JlZ2lzdGVyIH0gZnJvbSAnLi4vY29tbW9uL1RvUmVnaXN0ZXInXHJcbi8vIHN0eWxlcyBcclxuaW1wb3J0IHN0eWxlcyBmcm9tICcuL0xvZ2luRm9ybS5tb2R1bGUuc2NzcydcclxuaW1wb3J0IHsgdXNlRGlzcGF0Y2ggfSBmcm9tICdyZWFjdC1yZWR1eCdcclxuaW1wb3J0IHsgbG9naW4gfSBmcm9tICcuLi8uLi8uLi8uLi8uLi9yZWR1eC9mZWF0dXJlcy91c2VyU2xpY2UnXHJcbmltcG9ydCB7IEdFVF9BQ0NPVU5UX0lORk8sIExPR0lOIH0gZnJvbSAnLi4vLi4vLi4vLi4vLi4vbGliL3JlcXVlc3QtZGVzdGluYXRpb25zJztcclxuXHJcbmltcG9ydCB7IFRvYXN0Q29udGFpbmVyLCB0b2FzdCB9IGZyb20gJ3JlYWN0LXRvYXN0aWZ5JztcclxuaW1wb3J0IHsgdXNlUm91dGVyIH0gZnJvbSAnbmV4dC9kaXN0L2NsaWVudC9yb3V0ZXInO1xyXG5cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBMb2dpbkZvcm0oeyBvbk1vZGFsQ2xvc2UsIGhhbmRsZVJlc2V0UGFzc01vZGFsIH0pIHtcclxuICAgIGNvbnN0IHJvdXRlciA9IHVzZVJvdXRlcigpO1xyXG5cclxuICAgIGNvbnN0XHJcbiAgICAgICAgZGlzcGF0Y2ggPSB1c2VEaXNwYXRjaCgpLFxyXG4gICAgICAgIC8vIHRyYW5zbGF0aW9uIGNvbnNmaWdzXHJcbiAgICAgICAgeyB0IH0gPSB1c2VUcmFuc2xhdGlvbignY29tbW9uJyksXHJcbiAgICAgICAgdHJhbnNsYXRpb25QYXRoID0gJ3JlZ2lzdHJhdGlvbi5pbnB1dFBsYWNlSG9sZGVycy4nLFxyXG4gICAgICAgIHRyYW5zbGF0ZSA9IGtleSA9PiB0KGAke3RyYW5zbGF0aW9uUGF0aH0ke2tleX1gKSxcclxuICAgICAgICBoYW5kbGVfdG9fcmVnaXN0ZXJfY2xpY2sgPSAoKSA9PiB7XHJcbiAgICAgICAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ2JvZHknKS5zdHlsZS5vdmVyZmxvdyA9ICd2aXNpYmxlJ1xyXG4gICAgICAgICAgICBvbk1vZGFsQ2xvc2UoKVxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgLy8geXVwIGNvbmZpZ3NcclxuICAgICAgICBzY2hlbWEgPSB5dXAub2JqZWN0KCkuc2hhcGUoe1xyXG4gICAgICAgICAgICBlbWFpbDogeXVwXHJcbiAgICAgICAgICAgICAgICAuc3RyaW5nKClcclxuICAgICAgICAgICAgICAgIC5yZXF1aXJlZCgpXHJcbiAgICAgICAgICAgICAgICAubWF0Y2hlcygvXigoW148PigpXFxbXFxdXFxcXC4sOzpcXHNAXCJdKyhcXC5bXjw+KClcXFtcXF1cXFxcLiw7Olxcc0BcIl0rKSopfChcIi4rXCIpKUAoKFxcW1swLTldezEsM31cXC5bMC05XXsxLDN9XFwuWzAtOV17MSwzfVxcLlswLTldezEsM31dKXwoKFthLXpBLVpcXC0wLTldK1xcLikrW2EtekEtWl17Mix9KSkkLyksXHJcbiAgICAgICAgICAgIHBhc3N3b3JkOiB5dXBcclxuICAgICAgICAgICAgICAgIC5zdHJpbmcoKVxyXG4gICAgICAgICAgICAgICAgLnJlcXVpcmVkKClcclxuICAgICAgICAgICAgICAgIC5taW4oNilcclxuICAgICAgICB9KSxcclxuICAgICAgICAvLyBmb3JtIGNvbmZpZ3NcclxuICAgICAgICB7IHJlZ2lzdGVyLCBoYW5kbGVTdWJtaXQsIGZvcm1TdGF0ZTogeyBlcnJvcnMgfSB9ID0gdXNlRm9ybSh7XHJcbiAgICAgICAgICAgIG1vZGU6ICdvbkNoYW5nZScsXHJcbiAgICAgICAgICAgIHJlc29sdmVyOiB5dXBSZXNvbHZlcihzY2hlbWEpXHJcbiAgICAgICAgfSksXHJcbiAgICAgICAgLy8gb24gZm9ybSBzdWJtaXRcclxuICAgICAgICBzdWJtaXQgPSBhc3luYyAoZGF0YSkgPT4ge1xyXG4gICAgICAgICAgICB0cnkge1xyXG4gICAgICAgICAgICAgICAgY29uc3QgeyB0b2tlbiB9ID0gKGF3YWl0IHJlcXVlc3QoIExPR0lOLCBkYXRhICkpLmRhdGE/LmRhdGE7XHJcbiAgICAgICAgICAgICAgICBzZXRDb29raWUoIGBhY2Nlc3MtdG9rZW5gLCB0b2tlbiwgMSApO1xyXG4gICAgICAgICAgICAgICAgY29uc3QgdXNlciA9ICggYXdhaXQgcmVxdWVzdCggR0VUX0FDQ09VTlRfSU5GTywge30sIHthdXRoOiB0cnVlfSApICkuZGF0YT8uZGF0YTtcclxuICAgICAgICAgICAgICAgIGRpc3BhdGNoKGxvZ2luKHVzZXIpKTtcclxuICAgICAgICAgICAgICAgIHJvdXRlci5wdXNoKGAvYCk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgY2F0Y2goIGVycm9yICkge1xyXG4gICAgICAgICAgICAgICAgdG9hc3QoIGVycm9yLnJlc3BvbnNlLmRhdGE/Lm1lc3NhZ2UgfHwgYNCf0YDQvtCx0LvQtdC80Ysg0YEg0YHQtdGC0YzRjmAsIHtcclxuICAgICAgICAgICAgICAgICAgICB0eXBlOiBgZXJyb3JgXHJcbiAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBoYW5kbGVfdG9fcmVnaXN0ZXJfY2xpY2soKVxyXG4gICAgICAgIH07XHJcblxyXG4gICAgICAgIFxyXG5cclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5jb250YWluZXJ9PlxyXG4gICAgICAgICAgICA8VGl0bGVcclxuICAgICAgICAgICAgICAgIHN0eWxlcz17c3R5bGVzLnRpdGxlfVxyXG4gICAgICAgICAgICAgICAgY29udGVudD17dCgnaGVhZGVyLmxvZ2luTW9kYWwudGl0bGUnKX1cclxuICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgPGZvcm0gb25TdWJtaXQ9e2hhbmRsZVN1Ym1pdChzdWJtaXQpfT5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuaW5wdXRzfT5cclxuICAgICAgICAgICAgICAgICAgICA8SW5wdXRDb250YWluZXJcclxuICAgICAgICAgICAgICAgICAgICAgICAgaWQ9J25hbWUnXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU9J3RleHQnXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHBsYWNlaG9sZGVyPXt0cmFuc2xhdGUoJ2VtYWlsJyl9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGVycm9ycz17KCEhZXJyb3JzLmVtYWlsKX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgb3RoZXI9e3JlZ2lzdGVyKCdlbWFpbCcpfVxyXG4gICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgPElucHV0Q29udGFpbmVyXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlkPSdwYXNzd29yZCdcclxuICAgICAgICAgICAgICAgICAgICAgICAgdHlwZT0ncGFzc3dvcmQnXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHBsYWNlaG9sZGVyPXt0cmFuc2xhdGUoJ3Bhc3N3b3JkJyl9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGVycm9ycz17ISFlcnJvcnMucGFzc3dvcmR9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG90aGVyPXtyZWdpc3RlcigncGFzc3dvcmQnKX1cclxuICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8UmVzZXRQYXNzd29yZExpbmtcclxuICAgICAgICAgICAgICAgICAgICBjbGljaz17aGFuZGxlUmVzZXRQYXNzTW9kYWx9XHJcbiAgICAgICAgICAgICAgICAgICAgc3R5bGVzPXtzdHlsZXMucmVzZXRfcGFzc3dvcmR9XHJcbiAgICAgICAgICAgICAgICAgICAgY29udGVudD17dCgnaGVhZGVyLmxvZ2luTW9kYWwucmVzUGFzc3dvcmQnKX1cclxuICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICA8U3VibWl0XHJcbiAgICAgICAgICAgICAgICAgICAgc3R5bGVzPXtzdHlsZXMuc3VibWl0fVxyXG4gICAgICAgICAgICAgICAgICAgIGNvbnRlbnQ9e3QoJ2hlYWRlci5sb2dpbk1vZGFsLnN1Ym1pdCcpfVxyXG4gICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgPC9mb3JtPlxyXG4gICAgICAgICAgICA8VG9SZWdpc3RlclxyXG4gICAgICAgICAgICAgICAgaHJlZj0nL3JlZ2lzdHJhdGlvbidcclxuICAgICAgICAgICAgICAgIGNsaWNrPXtoYW5kbGVfdG9fcmVnaXN0ZXJfY2xpY2t9XHJcbiAgICAgICAgICAgICAgICBjb250YWluZXJfc3R5bGVzPXtzdHlsZXMudG9fcmVnaXN0ZXJfY29udGFpbmVyfVxyXG4gICAgICAgICAgICAgICAgY29udGVudF9zdHlsZXM9e3N0eWxlcy50b19yZWdpc3Rlcl9jb250ZW50fVxyXG4gICAgICAgICAgICAgICAgb3I9e3QoJ2hlYWRlci5sb2dpbk1vZGFsLm9yJyl9XHJcbiAgICAgICAgICAgICAgICByZWdpc3Rlcl90ZXh0X3N0eWxlcz17c3R5bGVzLnRvX3JlZ2lzdGVyX3RleHR9XHJcbiAgICAgICAgICAgICAgICBjb250ZW50PXt0KCdoZWFkZXIubG9naW5Nb2RhbC5yZWdpc3RlcicpfVxyXG4gICAgICAgICAgICAvPlxyXG5cclxuXHJcbiAgICAgICAgICAgIDxUb2FzdENvbnRhaW5lciAvPlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgKVxyXG59XHJcbiIsIi8vIGhvb2tzIGFuZCBoZWxwZXJzXHJcbmltcG9ydCB1c2VUcmFuc2xhdGlvbiBmcm9tICduZXh0LXRyYW5zbGF0ZS91c2VUcmFuc2xhdGlvbidcclxuaW1wb3J0IHsgdXNlRm9ybSB9IGZyb20gJ3JlYWN0LWhvb2stZm9ybSdcclxuaW1wb3J0IHsgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCdcclxuaW1wb3J0ICogYXMgeXVwIGZyb20gJ3l1cCdcclxuaW1wb3J0IHsgeXVwUmVzb2x2ZXIgfSBmcm9tICdAaG9va2Zvcm0vcmVzb2x2ZXJzL3l1cCdcclxuLy9jb21wb25lbnRzXHJcbmltcG9ydCB7IFRpdGxlIH0gZnJvbSAnLi4vLi4vY29tbW9uL1RpdGxlJ1xyXG5pbXBvcnQgeyBJbnB1dENvbnRhaW5lciB9IGZyb20gJy9jb21wb25lbnRzL2NvbW1vbi9hdXRoL0lucHV0Q29udGFpbmVyL0lucHV0Q29udGFpbmVyJ1xyXG5pbXBvcnQgeyBTdWJtaXQgfSBmcm9tICcuLi8uLi9jb21tb24vU3VibWl0J1xyXG5pbXBvcnQgeyBNb2RhbCB9IGZyb20gJy4uLy4uLy4uLy4uLy4uL2NvbW1vbi9hdXRoL01vZGFsL01vZGFsJ1xyXG5pbXBvcnQgeyBHZXRFbWFpbENvZGUgfSBmcm9tICcuLi9HZXRFbWFpbENvZGUvR2V0RW1haWxDb2RlJ1xyXG4vLyBzdHlsZXNcclxuaW1wb3J0IHN0eWxlcyBmcm9tICcuL0ZvcmdvdFBhc3N3b3JkLm1vZHVsZS5zY3NzJ1xyXG5cclxuaW1wb3J0IHsgcmVxdWVzdCwgc2V0Q29va2llIH0gZnJvbSAnL2xpYi9lci5saWInO1xyXG5cclxuaW1wb3J0IHsgVG9hc3RDb250YWluZXIsIHRvYXN0IH0gZnJvbSAncmVhY3QtdG9hc3RpZnknO1xyXG5pbXBvcnQgeyBTVEFSVF9SRVNFVF9QQVNTV09SRCB9IGZyb20gJy4uLy4uLy4uLy4uLy4uLy4uL2xpYi9yZXF1ZXN0LWRlc3RpbmF0aW9ucydcclxuXHJcblxyXG5leHBvcnQgZnVuY3Rpb24gRm9yZ290UGFzc3dvcmQoeyBvbk1vZGFsQ2xvc2UgfSkge1xyXG5cclxuICAgIGNvbnN0XHJcbiAgICAgICAgLy8gbW9kYWwgc3RhdGVzIHBhc3MgPT4gcGFzc3dvcmQgTWwgPT4gTW9kYWxcclxuICAgICAgICBbc2hvd0ZvcmdvdFBhc3NNbCwgc2V0U2hvd0ZvcmdvdFBhc3NNbF0gPSB1c2VTdGF0ZSh0cnVlKSxcclxuICAgICAgICBbc2hvd0dldEVtYWlsQ29kZU1sLCBzZXRTaG93RW1haWxDb2RlTWxdID0gdXNlU3RhdGUoZmFsc2UpLFxyXG4gICAgICAgIC8vIHRyYW5zbGF0aW9uIGNvbnNmaWdzXHJcbiAgICAgICAgeyB0IH0gPSB1c2VUcmFuc2xhdGlvbignY29tbW9uJyksXHJcbiAgICAgICAgdHJhbnNsYXRpb25QYXRoID0gJ2hlYWRlci5yZXNldFBhc3N3b3JkTW9kYWwuJyxcclxuICAgICAgICB0cmFuc2xhdGUgPSBrZXkgPT4gdChgJHt0cmFuc2xhdGlvblBhdGh9JHtrZXl9YCksXHJcbiAgICAgICAgLy8geXVwIGNvbmZpZ3NcclxuICAgICAgICBzY2hlbWEgPSB5dXAub2JqZWN0KCkuc2hhcGUoe1xyXG4gICAgICAgICAgICBlbWFpbDogeXVwXHJcbiAgICAgICAgICAgICAgICAuc3RyaW5nKClcclxuICAgICAgICAgICAgICAgIC5yZXF1aXJlZCgpXHJcbiAgICAgICAgICAgICAgICAubWF0Y2hlcygvXigoW148PigpXFxbXFxdXFxcXC4sOzpcXHNAXCJdKyhcXC5bXjw+KClcXFtcXF1cXFxcLiw7Olxcc0BcIl0rKSopfChcIi4rXCIpKUAoKFxcW1swLTldezEsM31cXC5bMC05XXsxLDN9XFwuWzAtOV17MSwzfVxcLlswLTldezEsM31dKXwoKFthLXpBLVpcXC0wLTldK1xcLikrW2EtekEtWl17Mix9KSkkLyksXHJcbiAgICAgICAgfSksXHJcbiAgICAgICAgLy8gZm9ybSBjb25maWdzXHJcbiAgICAgICAgeyByZWdpc3RlciwgaGFuZGxlU3VibWl0LCBmb3JtU3RhdGU6IHsgZXJyb3JzIH0gfSA9IHVzZUZvcm0oe1xyXG4gICAgICAgICAgICBtb2RlOiAnb25DaGFuZ2UnLFxyXG4gICAgICAgICAgICByZXNvbHZlcjogeXVwUmVzb2x2ZXIoc2NoZW1hKVxyXG4gICAgICAgIH0pLFxyXG4gICAgICAgIC8vIG9uIGZvcm0gc3VibWl0XHJcbiAgICAgICAgc3VibWl0ID0gYXN5bmMgKGRhdGEpID0+IHtcclxuICAgICAgICAgICAgdHJ5IHtcclxuICAgICAgICAgICAgICAgIGNvbnN0IHsgZGF0YTogcmVzcG9uc2UgfSA9IGF3YWl0IHJlcXVlc3QoIFNUQVJUX1JFU0VUX1BBU1NXT1JEKCBkYXRhLmVtYWlsICkgKTtcclxuICAgICAgICAgICAgICAgIGNvbnN0IHRva2VuID0gcmVzcG9uc2UuZGF0YS50b2tlbjtcclxuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKCB0b2tlbiApO1xyXG4gICAgICAgICAgICAgICAgc2V0Q29va2llKGByZXNldC10b2tlbmAsIHRva2VuLCAoMS8yNCkqMSk7XHJcbiAgICAgICAgICAgICAgICBzZXRTaG93Rm9yZ290UGFzc01sKGZhbHNlKVxyXG4gICAgICAgICAgICAgICAgc2V0U2hvd0VtYWlsQ29kZU1sKHRydWUpXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgY2F0Y2ggKCBlcnIgKSB7XHJcbiAgICAgICAgICAgICAgICB0b2FzdCggZXJyLnJlc3BvbnNlLmRhdGE/Lm1lc3NhZ2UgfHwgYNCd0LUg0YPQtNCw0LvQvtGB0Ywg0LLQvtGB0YLQsNC90L7QstC40YLRjCDQv9Cw0YDQvtC70YxgLCB7XHJcbiAgICAgICAgICAgICAgICAgICAgdHlwZTogYGVycm9yYFxyXG4gICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcblxyXG5cclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPD5cclxuICAgICAgICAgICAge3Nob3dGb3Jnb3RQYXNzTWwgJiZcclxuICAgICAgICAgICAgICAgIDxNb2RhbCBvbkNsb3NlPXtvbk1vZGFsQ2xvc2V9IGNvbnRlbnRTdHlsZXM9e3N0eWxlcy5tX2NvbnRlbnR9IGNvbnRhaW5lclN0eWxlcz17c3R5bGVzLm1fY29udGFpbmVyfT5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmNvbnRhaW5lcn0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxUaXRsZVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc3R5bGVzPXtzdHlsZXMudGl0bGV9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb250ZW50PXt0cmFuc2xhdGUoJ3RpdGxlJyl9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxmb3JtIG9uU3VibWl0PXtoYW5kbGVTdWJtaXQoc3VibWl0KX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmlucHV0c30+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPElucHV0Q29udGFpbmVyXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlkPSduYW1lJ1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0eXBlPSd0ZXh0J1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwbGFjZWhvbGRlcj17dCgncmVnaXN0cmF0aW9uLmlucHV0UGxhY2VIb2xkZXJzLmVtYWlsJyl9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGVycm9ycz17KCEhZXJyb3JzLmVtYWlsKX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb3RoZXI9e3JlZ2lzdGVyKCdlbWFpbCcpfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxTdWJtaXRcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdHlsZXM9e3N0eWxlcy5zdWJtaXR9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29udGVudD17dHJhbnNsYXRlKCdzZW5kJyl9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Zvcm0+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgPFRvYXN0Q29udGFpbmVyIC8+XHJcbiAgICAgICAgICAgICAgICA8L01vZGFsPlxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIHNob3dHZXRFbWFpbENvZGVNbCAmJiA8R2V0RW1haWxDb2RlIG9uTW9kYWxDbG9zZT17b25Nb2RhbENsb3NlfSAvPlxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgPC8+XHJcbiAgICApXHJcbn1cclxuIiwiLy8gaG9va3MgYW5kIGhlbHBlcnNcclxuaW1wb3J0IHVzZVRyYW5zbGF0aW9uIGZyb20gJ25leHQtdHJhbnNsYXRlL3VzZVRyYW5zbGF0aW9uJ1xyXG5pbXBvcnQgeyB1c2VGb3JtIH0gZnJvbSAncmVhY3QtaG9vay1mb3JtJ1xyXG5pbXBvcnQgeyB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0J1xyXG5pbXBvcnQgKiBhcyB5dXAgZnJvbSAneXVwJ1xyXG5pbXBvcnQgeyB5dXBSZXNvbHZlciB9IGZyb20gJ0Bob29rZm9ybS9yZXNvbHZlcnMveXVwJ1xyXG5pbXBvcnQgeyBpbnB1dHMgfSBmcm9tICcuL2lucHV0X2NvbmZpZ3MnXHJcbi8vY29tcG9uZW50c1xyXG5pbXBvcnQgeyBUaXRsZSB9IGZyb20gJy4uLy4uL2NvbW1vbi9UaXRsZSdcclxuaW1wb3J0IHsgU3VibWl0IH0gZnJvbSAnLi4vLi4vY29tbW9uL1N1Ym1pdCdcclxuaW1wb3J0IHsgTW9kYWwgfSBmcm9tICcuLi8uLi8uLi8uLi8uLi9jb21tb24vYXV0aC9Nb2RhbC9Nb2RhbCdcclxuaW1wb3J0IHsgTmV3UGFzc3dvcmQgfSBmcm9tICcuLi9OZXdQYXNzd29yZC9OZXdQYXNzd29yZCdcclxuLy8gc3R5bGVzXHJcbmltcG9ydCBzdHlsZXMgZnJvbSAnLi9HZXRFbWFpbENvZGUubW9kdWxlLnNjc3MnXHJcblxyXG5pbXBvcnQgeyByZXF1ZXN0LCBnZXRDb29raWUgfSBmcm9tICcvbGliL2VyLmxpYic7XHJcblxyXG5pbXBvcnQgeyBUb2FzdENvbnRhaW5lciwgdG9hc3QgfSBmcm9tICdyZWFjdC10b2FzdGlmeSc7XHJcbmltcG9ydCB7IFNUQVJUX1JFU0VUX1BBU1NXT1JELCBWRVJJRllfUEFTU1dPUkRfUkVTRVQgfSBmcm9tICcuLi8uLi8uLi8uLi8uLi8uLi9saWIvcmVxdWVzdC1kZXN0aW5hdGlvbnMnXHJcblxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIEdldEVtYWlsQ29kZSh7IG9uTW9kYWxDbG9zZSB9KSB7XHJcblxyXG4gICAgY29uc3RcclxuICAgICAgICAvLyBtb2RhbCBzdGF0ZXMgcGFzcyA9PiBwYXNzd29yZCBNbCA9PiBNb2RhbFxyXG4gICAgICAgIFtzaG93R2V0RW1haWxDb2RlTWwsIHNldFNob3dFbWFpbENvZGVNbF0gPSB1c2VTdGF0ZSh0cnVlKSxcclxuICAgICAgICBbc2hvd05ld1Bhc3N3b3JkTWwsIHNldFNob3dOZXdQYXNzd29yZE1sXSA9IHVzZVN0YXRlKGZhbHNlKSxcclxuICAgICAgICAvLyB0cmFuc2xhdGlvbiBjb25zZmlnc1xyXG4gICAgICAgIHsgdCB9ID0gdXNlVHJhbnNsYXRpb24oJ2NvbW1vbicpLFxyXG4gICAgICAgIHRyYW5zbGF0aW9uUGF0aCA9ICdoZWFkZXIuZ2V0RW1haWxDb2RlTW9kYWwuJyxcclxuICAgICAgICB0cmFuc2xhdGUgPSBrZXkgPT4gdChgJHt0cmFuc2xhdGlvblBhdGh9JHtrZXl9YCksXHJcbiAgICAgICAgLy8geXVwIGNvbmZpZ3NcclxuICAgICAgICBzY2hlbWEgPSB5dXAub2JqZWN0KCkuc2hhcGUoe1xyXG4gICAgICAgICAgICBudW0xOiB5dXAuc3RyaW5nKCkucmVxdWlyZWQoKS5tYXRjaGVzKC9bMC05XS9tZyksXHJcbiAgICAgICAgICAgIG51bTI6IHl1cC5zdHJpbmcoKS5yZXF1aXJlZCgpLm1hdGNoZXMoL1swLTldL21nKSxcclxuICAgICAgICAgICAgbnVtMzogeXVwLnN0cmluZygpLnJlcXVpcmVkKCkubWF0Y2hlcygvWzAtOV0vbWcpLFxyXG4gICAgICAgICAgICBudW00OiB5dXAuc3RyaW5nKCkucmVxdWlyZWQoKS5tYXRjaGVzKC9bMC05XS9tZyksXHJcbiAgICAgICAgICAgIG51bTU6IHl1cC5zdHJpbmcoKS5yZXF1aXJlZCgpLm1hdGNoZXMoL1swLTldL21nKSxcclxuICAgICAgICAgICAgbnVtNjogeXVwLnN0cmluZygpLnJlcXVpcmVkKCkubWF0Y2hlcygvWzAtOV0vbWcpLFxyXG4gICAgICAgIH0pLFxyXG4gICAgICAgIC8vIGZvcm0gY29uZmlnc1xyXG4gICAgICAgIHsgcmVnaXN0ZXIsIGhhbmRsZVN1Ym1pdCwgZm9ybVN0YXRlOiB7IGVycm9ycyB9IH0gPSB1c2VGb3JtKHtcclxuICAgICAgICAgICAgbW9kZTogJ29uQ2hhbmdlJyxcclxuICAgICAgICAgICAgcmVzb2x2ZXI6IHl1cFJlc29sdmVyKHNjaGVtYSlcclxuICAgICAgICB9KSxcclxuICAgICAgICAvLyBpbnB1dCBqdW1wcyBcclxuICAgICAgICBqdW1wID0gKHgpID0+IHtcclxuICAgICAgICAgICAgaWYgKHgudmFsdWUubGVuZ3RoKSB7XHJcbiAgICAgICAgICAgICAgICB4ID0geC5uZXh0U2libGluZztcclxuICAgICAgICAgICAgICAgIGlmICh4ICYmIC90ZXh0Ly50ZXN0KHgudHlwZSkpIHtcclxuICAgICAgICAgICAgICAgICAgICB4LmZvY3VzKCk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9LFxyXG4gICAgICAgIGp1bXBCYWNrID0gKHgpID0+IHtcclxuICAgICAgICAgICAgaWYgKHgudGFyZ2V0LnZhbHVlLmxlbmd0aCA9PSAwKSB7XHJcbiAgICAgICAgICAgICAgICBpZiAoeC5jb2RlID09PSAnQmFja3NwYWNlJykge1xyXG4gICAgICAgICAgICAgICAgICAgIGlmIChkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLm1vdmU6Zm9jdXNcIikucHJldmlvdXNTaWJsaW5nKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIubW92ZTpmb2N1c1wiKS5wcmV2aW91c1NpYmxpbmcuZm9jdXMoKTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9LFxyXG4gICAgICAgIC8vIG9uIGZvcm0gc3VibWl0XHJcbiAgICAgICAgc3VibWl0ID0gYXN5bmMgKGRhdGEpID0+IHtcclxuICAgICAgICAgICAgdHJ5IHtcclxuICAgICAgICAgICAgICAgIGRhdGEgPSBPYmplY3QudmFsdWVzKGRhdGEpLnJlZHVjZSgoYWMsIGVsKSA9PiBhYyArIGVsKVxyXG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coZGF0YSk7XHJcbiAgICAgICAgICAgICAgICBhd2FpdCByZXF1ZXN0KCBWRVJJRllfUEFTU1dPUkRfUkVTRVQsIHsgY29kZTogZGF0YSB9LCB7XHJcbiAgICAgICAgICAgICAgICAgICAgaGVhZGVyczoge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAnQXV0aG9yaXphdGlvbic6IGBCZWFyZXIgJHtnZXRDb29raWUoYHJlc2V0LXRva2VuYCl9YFxyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgICAgICBzZXRTaG93RW1haWxDb2RlTWwoZmFsc2UpXHJcbiAgICAgICAgICAgICAgICBzZXRTaG93TmV3UGFzc3dvcmRNbCh0cnVlKVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGNhdGNoKCBlcnIgKSB7XHJcbiAgICAgICAgICAgICAgICB0b2FzdCggZXJyLnJlc3BvbnNlLmRhdGE/Lm1lc3NhZ2UgfHwgYNCd0LUg0YPQtNCw0LvQvtGB0Ywg0LLQvtGB0YLQsNC90L7QstC40YLRjCDQv9Cw0YDQvtC70YxgLCB7XHJcbiAgICAgICAgICAgICAgICAgICAgdHlwZTogYGVycm9yYFxyXG4gICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcblxyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8PlxyXG4gICAgICAgICAgICB7c2hvd0dldEVtYWlsQ29kZU1sICYmXHJcbiAgICAgICAgICAgICAgICA8IE1vZGFsIG9uQ2xvc2U9e29uTW9kYWxDbG9zZX0gY29udGVudFN0eWxlcz17c3R5bGVzLm1fY29udGVudH0gY29udGFpbmVyU3R5bGVzPXtzdHlsZXMubV9jb250YWluZXJ9PlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuY29udGFpbmVyfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPFRpdGxlXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdHlsZXM9e3N0eWxlcy50aXRsZX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnRlbnQ9e3RyYW5zbGF0ZSgndGl0bGUnKX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGZvcm0gb25TdWJtaXQ9e2hhbmRsZVN1Ym1pdChzdWJtaXQpfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxUaXRsZVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN0eWxlcz17c3R5bGVzLmRlc2NyaXB0aW9ufVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnRlbnQ9e3RyYW5zbGF0ZSgnZGVzY3JpcHRpb24nKX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmlucHV0c30+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpbnB1dHMubWFwKChlbCwgaSkgPT4gKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGlucHV0XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWQ9e2VsLmlkfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGAke2VsLmNsYXNzfSBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgJHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGVycm9ycy5udW0xIHx8XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBlcnJvcnMubnVtMiB8fFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZXJyb3JzLm51bTMgfHxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGVycm9ycy5udW00IHx8XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBlcnJvcnMubnVtNSB8fFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZXJyb3JzLm51bTYgPyBzdHlsZXMuZXJyb3JfaW5wdXQgOiBzdHlsZXMuc3VjY2Vzc19pbnB1dFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9YC50cmltKCl9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdHlwZT17ZWwudHlwZX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBrZXk9e2VsLmtleX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBtYXhMZW5ndGg9e2VsLm1heExlbmd0aH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbklucHV0PXtlID0+IGp1bXAoZS50YXJnZXQpfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uS2V5RG93bj17ZSA9PiBqdW1wQmFjayhlKX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7Li4ucmVnaXN0ZXIoJ251bScgKyAoaSArIDEpKX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICkpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8U3VibWl0XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3R5bGVzPXtzdHlsZXMuc3VibWl0fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnRlbnQ9e3RyYW5zbGF0ZSgnc2VuZCcpfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9mb3JtPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIDxUb2FzdENvbnRhaW5lciAvPlxyXG4gICAgICAgICAgICAgICAgPC9Nb2RhbCA+XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgc2hvd05ld1Bhc3N3b3JkTWwgJiYgPE5ld1Bhc3N3b3JkIG9uTW9kYWxDbG9zZT17b25Nb2RhbENsb3NlfSAvPlxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgPC8+XHJcblxyXG4gICAgKVxyXG59XHJcbiIsImV4cG9ydCBjb25zdCAvLyBpbnB1dCBjb25maWdzXHJcbiAgICBpbnB1dHMgPSBbXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBpZDogJ2ZpcnN0JyxcclxuICAgICAgICAgICAgdHlwZTogJ3RleHQnLFxyXG4gICAgICAgICAgICBjbGFzczogJ21vdmUnLFxyXG4gICAgICAgICAgICBrZXk6IE1hdGgucmFuZG9tKCksXHJcbiAgICAgICAgICAgIG1heExlbmd0aDogXCIxXCIsXHJcbiAgICAgICAgfSxcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIGlkOiAnc2Vjb25kJyxcclxuICAgICAgICAgICAgdHlwZTogJ3RleHQnLFxyXG4gICAgICAgICAgICBjbGFzczogJ21vdmUnLFxyXG4gICAgICAgICAgICBrZXk6IE1hdGgucmFuZG9tKCksXHJcbiAgICAgICAgICAgIG1heExlbmd0aDogJzEnLFxyXG4gICAgICAgIH0sXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBpZDogJ3RoaXJkJyxcclxuICAgICAgICAgICAgdHlwZTogJ3RleHQnLFxyXG4gICAgICAgICAgICBjbGFzczogJ21vdmUnLFxyXG4gICAgICAgICAgICBrZXk6IE1hdGgucmFuZG9tKCksXHJcbiAgICAgICAgICAgIG1heExlbmd0aDogJzEnLFxyXG4gICAgICAgIH0sXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBpZDogJ2ZvdXJ0aCcsXHJcbiAgICAgICAgICAgIHR5cGU6ICd0ZXh0JyxcclxuICAgICAgICAgICAgY2xhc3M6ICdtb3ZlJyxcclxuICAgICAgICAgICAga2V5OiBNYXRoLnJhbmRvbSgpLFxyXG4gICAgICAgICAgICBtYXhMZW5ndGg6ICcxJyxcclxuICAgICAgICB9LFxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgaWQ6ICdmaWZ0aCcsXHJcbiAgICAgICAgICAgIHR5cGU6ICd0ZXh0JyxcclxuICAgICAgICAgICAgY2xhc3M6ICdtb3ZlJyxcclxuICAgICAgICAgICAga2V5OiBNYXRoLnJhbmRvbSgpLFxyXG4gICAgICAgICAgICBtYXhMZW5ndGg6ICcxJyxcclxuICAgICAgICB9LFxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgaWQ6ICdzaXh0aCcsXHJcbiAgICAgICAgICAgIHR5cGU6ICd0ZXh0JyxcclxuICAgICAgICAgICAgY2xhc3M6ICdtb3ZlJyxcclxuICAgICAgICAgICAga2V5OiBNYXRoLnJhbmRvbSgpLFxyXG4gICAgICAgICAgICBtYXhMZW5ndGg6ICcxJyxcclxuICAgICAgICB9LFxyXG4gICAgXSIsIi8vIGhvb2tzIGFuZCBoZWxwZXJzXHJcbmltcG9ydCB1c2VUcmFuc2xhdGlvbiBmcm9tICduZXh0LXRyYW5zbGF0ZS91c2VUcmFuc2xhdGlvbidcclxuaW1wb3J0IHsgdXNlRm9ybSB9IGZyb20gJ3JlYWN0LWhvb2stZm9ybSdcclxuaW1wb3J0IHsgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCdcclxuaW1wb3J0ICogYXMgeXVwIGZyb20gJ3l1cCdcclxuaW1wb3J0IHsgeXVwUmVzb2x2ZXIgfSBmcm9tICdAaG9va2Zvcm0vcmVzb2x2ZXJzL3l1cCdcclxuLy9jb21wb25lbnRzXHJcbmltcG9ydCB7IFRpdGxlIH0gZnJvbSAnLi4vLi4vY29tbW9uL1RpdGxlJ1xyXG5pbXBvcnQgeyBJbnB1dENvbnRhaW5lciB9IGZyb20gJy9jb21wb25lbnRzL2NvbW1vbi9hdXRoL0lucHV0Q29udGFpbmVyL0lucHV0Q29udGFpbmVyJ1xyXG5pbXBvcnQgeyBTdWJtaXQgfSBmcm9tICcuLi8uLi9jb21tb24vU3VibWl0J1xyXG5pbXBvcnQgeyBNb2RhbCB9IGZyb20gJy4uLy4uLy4uLy4uLy4uL2NvbW1vbi9hdXRoL01vZGFsL01vZGFsJ1xyXG5pbXBvcnQgeyBUb2FzdENvbnRhaW5lciwgdG9hc3QgfSBmcm9tICdyZWFjdC10b2FzdGlmeSc7XHJcblxyXG4vLyBzdHlsZXNcclxuaW1wb3J0IHN0eWxlcyBmcm9tICcuL05ld1Bhc3N3b3JkLm1vZHVsZS5zY3NzJ1xyXG5pbXBvcnQgeyBTdWNjZXNzIH0gZnJvbSAnLi4vU3VjY2Vzcy9TdWNjZXNzJ1xyXG5cclxuaW1wb3J0IHsgcmVxdWVzdCwgZ2V0Q29va2llIH0gZnJvbSAnL2xpYi9lci5saWInO1xyXG5pbXBvcnQgeyBTRVRfTkVXX1BBU1NXT1JEIH0gZnJvbSAnLi4vLi4vLi4vLi4vLi4vLi4vbGliL3JlcXVlc3QtZGVzdGluYXRpb25zJ1xyXG5cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBOZXdQYXNzd29yZCh7IG9uTW9kYWxDbG9zZSB9KSB7XHJcbiAgICBjb25zdFxyXG4gICAgICAgIC8vIG1vZGFsIHN0YXRlcyBwYXNzID0+IHBhc3N3b3JkIE1sID0+IE1vZGFsXHJcbiAgICAgICAgW3Nob3dOZXdQYXNzTWwsIHNldFNob3dOZXdQYXNzTWxdID0gdXNlU3RhdGUodHJ1ZSksXHJcbiAgICAgICAgW3Nob3dTdWNjZXNzTWwsIHNldFNob3dTdWNjZXNzTWxdID0gdXNlU3RhdGUoZmFsc2UpLFxyXG4gICAgICAgIC8vIHRyYW5zbGF0aW9uIGNvbnNmaWdzXHJcbiAgICAgICAgeyB0IH0gPSB1c2VUcmFuc2xhdGlvbignY29tbW9uJyksXHJcbiAgICAgICAgdHJhbnNsYXRpb25QYXRoID0gJ2hlYWRlci5uZXdQYXNzd29yZE1vZGFsLicsXHJcbiAgICAgICAgdHJhbnNsYXRlID0ga2V5ID0+IHQoYCR7dHJhbnNsYXRpb25QYXRofSR7a2V5fWApLFxyXG4gICAgICAgIC8vIHl1cCBjb25maWdzXHJcbiAgICAgICAgc2NoZW1hID0geXVwLm9iamVjdCgpLnNoYXBlKHtcclxuICAgICAgICAgICAgcGFzc3dvcmQ6IHl1cFxyXG4gICAgICAgICAgICAgICAgLnN0cmluZygpXHJcbiAgICAgICAgICAgICAgICAucmVxdWlyZWQoKVxyXG4gICAgICAgICAgICAgICAgLm1pbig2KVxyXG4gICAgICAgIH0pLFxyXG4gICAgICAgIC8vIGZvcm0gY29uZmlnc1xyXG4gICAgICAgIHsgcmVnaXN0ZXIsIGhhbmRsZVN1Ym1pdCwgZm9ybVN0YXRlOiB7IGVycm9ycyB9IH0gPSB1c2VGb3JtKHtcclxuICAgICAgICAgICAgbW9kZTogJ29uQ2hhbmdlJyxcclxuICAgICAgICAgICAgcmVzb2x2ZXI6IHl1cFJlc29sdmVyKHNjaGVtYSlcclxuICAgICAgICB9KSxcclxuICAgICAgICAvLyBvbiBmb3JtIHN1Ym1pdFxyXG4gICAgICAgIHN1Ym1pdCA9IGFzeW5jICggZGF0YSApID0+IHtcclxuICAgICAgICAgICAgdHJ5IHtcclxuICAgICAgICAgICAgICAgIGF3YWl0IHJlcXVlc3QoIFNFVF9ORVdfUEFTU1dPUkQsIHsgcGFzc3dvcmQ6IGRhdGEucGFzc3dvcmQgfSwge1xyXG4gICAgICAgICAgICAgICAgICAgIGhlYWRlcnM6IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgJ0F1dGhvcml6YXRpb24nOiBgQmVhcmVyICR7Z2V0Q29va2llKGByZXNldC10b2tlbmApfWBcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICAgICAgc2V0U2hvd05ld1Bhc3NNbChmYWxzZSlcclxuICAgICAgICAgICAgICAgIHNldFNob3dTdWNjZXNzTWwodHJ1ZSlcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBjYXRjaCAoIGVyciApIHtcclxuICAgICAgICAgICAgICAgIHRvYXN0KCBlcnIucmVzcG9uc2UuZGF0YT8ubWVzc2FnZSB8fCBg0J3QtSDRg9C00LDQu9C+0YHRjCDQstC+0YHRgtCw0L3QvtCy0LjRgtGMINC/0LDRgNC+0LvRjGAsIHtcclxuICAgICAgICAgICAgICAgICAgICB0eXBlOiBgZXJyb3JgXHJcbiAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuXHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIDw+XHJcbiAgICAgICAgICAgIHtzaG93TmV3UGFzc01sICYmXHJcbiAgICAgICAgICAgICAgICA8TW9kYWwgb25DbG9zZT17b25Nb2RhbENsb3NlfSBjb250ZW50U3R5bGVzPXtzdHlsZXMubV9jb250ZW50fSBjb250YWluZXJTdHlsZXM9e3N0eWxlcy5tX2NvbnRhaW5lcn0+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5jb250YWluZXJ9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8VGl0bGVcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN0eWxlcz17c3R5bGVzLnRpdGxlfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY29udGVudD17dHJhbnNsYXRlKCd0aXRsZScpfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8Zm9ybSBvblN1Ym1pdD17aGFuZGxlU3VibWl0KHN1Ym1pdCl9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5pbnB1dHN9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxJbnB1dENvbnRhaW5lclxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZD0ncGFzc3dvcmQnXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU9J3Bhc3N3b3JkJ1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwbGFjZWhvbGRlcj17dCgncmVnaXN0cmF0aW9uLmlucHV0UGxhY2VIb2xkZXJzLnBhc3N3b3JkJyl9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGVycm9ycz17ISFlcnJvcnMucGFzc3dvcmR9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG90aGVyPXtyZWdpc3RlcigncGFzc3dvcmQnKX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8U3VibWl0XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3R5bGVzPXtzdHlsZXMuc3VibWl0fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnRlbnQ9e3RyYW5zbGF0ZSgnc3VjY2VzcycpfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9mb3JtPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIDxUb2FzdENvbnRhaW5lciAvPlxyXG4gICAgICAgICAgICAgICAgPC9Nb2RhbD5cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICBzaG93U3VjY2Vzc01sICYmIDxTdWNjZXNzIG9uTW9kYWxDbG9zZT17b25Nb2RhbENsb3NlfSAvPlxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgPC8+XHJcbiAgICApXHJcbn1cclxuIiwiLy8gaG9va3MgaGVscGVyc1xyXG5pbXBvcnQgdXNlVHJhbnNsYXRpb24gZnJvbSAnbmV4dC10cmFuc2xhdGUvdXNlVHJhbnNsYXRpb24nXHJcbi8vIGNvbXBvbmVudHNcclxuaW1wb3J0IHsgTW9kYWwgfSBmcm9tICcuLi8uLi8uLi8uLi8uLi9jb21tb24vYXV0aC9Nb2RhbC9Nb2RhbCdcclxuaW1wb3J0IHsgVGl0bGUgfSBmcm9tICcuLi8uLi9jb21tb24vVGl0bGUnXHJcbi8vIHN0eWxlc1xyXG5pbXBvcnQgc3R5bGVzIGZyb20gJy4vU3VjY2Vzcy5tb2R1bGUuc2NzcydcclxuLy8gaWNvbnNcclxuaW1wb3J0IHN1Y2Nlc3NJY29uIGZyb20gJy9wdWJsaWMvaW1hZ2VzL2hlYWRlci9sb2dpbi9zdWNjZXNzLnBuZydcclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBTdWNjZXNzKHsgb25Nb2RhbENsb3NlIH0pIHtcclxuXHJcbiAgICBjb25zdFxyXG4gICAgICAgIC8vIHRyYW5zbGF0aW9uICAgIFxyXG4gICAgICAgIHsgdCB9ID0gdXNlVHJhbnNsYXRpb24oJ2NvbW1vbicpLFxyXG4gICAgICAgIHRyYW5zbGF0aW9uUGF0aCA9ICdoZWFkZXIuc3VjY2Vzc01vZGFsLicsXHJcbiAgICAgICAgdHJhbnNsYXRlID0ga2V5ID0+IHQoYCR7dHJhbnNsYXRpb25QYXRofSR7a2V5fWApXHJcblxyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8TW9kYWwgb25DbG9zZT17b25Nb2RhbENsb3NlfSBjb250ZW50U3R5bGVzPXtzdHlsZXMubV9jb250ZW50fSBjb250YWluZXJTdHlsZXM9e3N0eWxlcy5tX2NvbnRhaW5lcn0+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuY29udGFpbmVyfT5cclxuICAgICAgICAgICAgICAgIDxUaXRsZVxyXG4gICAgICAgICAgICAgICAgICAgIHN0eWxlcz17c3R5bGVzLnRpdGxlfVxyXG4gICAgICAgICAgICAgICAgICAgIGNvbnRlbnQ9e3RyYW5zbGF0ZSgndGl0bGUnKX1cclxuICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmljb25fY29udGFpbmVyfT5cclxuICAgICAgICAgICAgICAgICAgICA8aW1nXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHNyYz17c3VjY2Vzc0ljb24uc3JjfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBhbHQ9J1N1Y2Nlc3MgaW1nJ1xyXG4gICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC9Nb2RhbD5cclxuICAgIClcclxufVxyXG4iLCIvLyBJY29uc1xyXG5pbXBvcnQgZmFjZWJvb2sgZnJvbSAnL3B1YmxpYy9pbWFnZXMvaGVhZGVyL2xvZ2luL2ZhY2Vib29rLnN2ZydcclxuaW1wb3J0IGdtYWlsIGZyb20gJy9wdWJsaWMvaW1hZ2VzL2hlYWRlci9sb2dpbi9nbWFpbC5zdmcnXHJcbmltcG9ydCB2ayBmcm9tICcvcHVibGljL2ltYWdlcy9oZWFkZXIvbG9naW4vdmsuc3ZnJ1xyXG5pbXBvcnQgdHdpdHRlciBmcm9tICcvcHVibGljL2ltYWdlcy9oZWFkZXIvbG9naW4vdHdpdHRlci5zdmcnXHJcbi8vIHNjc3NcclxuaW1wb3J0IHN0eWxlcyBmcm9tICcuL1NvY2lhbE1lZGlhSWNvbnMubW9kdWxlLnNjc3MnXHJcbi8vIGNvbXBvbmVudHNcclxuaW1wb3J0IFJlYWN0RmFjZWJvb2tMb2dpbiBmcm9tICdyZWFjdC1mYWNlYm9vay1sb2dpbidcclxuaW1wb3J0IEdvb2dsZUxvZ2luIGZyb20gJ3JlYWN0LWdvb2dsZS1sb2dpbidcclxuaW1wb3J0IFR3aXR0ZXJMb2dpbiBmcm9tIFwicmVhY3QtdHdpdHRlci1sb2dpblwiO1xyXG5pbXBvcnQgeyB1c2VFZmZlY3QgfSBmcm9tICdyZWFjdCdcclxuXHJcbmNvbnN0IGljb25zID0gW1xyXG4gICAge1xyXG4gICAgICAgIGljb25Vcmw6IGZhY2Vib29rLnNyYyxcclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgICAgaWNvblVybDogZ21haWwuc3JjLFxyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgICBpY29uVXJsOiB2ay5zcmMsXHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICAgIGljb25Vcmw6IHR3aXR0ZXIuc3JjLFxyXG4gICAgfV1cclxuXHJcblxyXG5cclxuY29uc3QgcmVzcG9uc2VGYWNlYm9vayA9IChyZXNwb25zZSkgPT4ge1xyXG4gICAgY29uc29sZS5sb2cocmVzcG9uc2UpO1xyXG59XHJcblxyXG5jb25zdCByZXNwb25zZUdvb2dsZSA9IChyZXNwb25zZSkgPT4ge1xyXG4gICAgY29uc29sZS5sb2cocmVzcG9uc2UpO1xyXG59XHJcblxyXG5jb25zdCBUV0lUVEVSX0NPTlNVTUVSX0tFWSA9IFwiXCI7XHJcbmNvbnN0IFRXSVRURVJfQ09OU1VNRVJfU0VDUkVUID0gXCJcIjtcclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBTb2NpYWxNZWRpYUljb25zKCkge1xyXG5cclxuXHJcbiAgICB1c2VFZmZlY3QoKCk9PnsgICAgICAgICAgICAgICAgICAgICAgICAgXHJcbiAgICAgVksuaW5pdCh7YXBpSWQ6Jzc5MTEyOTQnfSk7XHJcbiAgICB9LFtdKVxyXG4gICAgXHJcbiAgICBmdW5jdGlvbiBvblNvY2lhbE1lZGlhQnRuQ2xpY2soaSkge1xyXG4gICAgICAgIGlmIChpID09PSAwKSB7XHJcbiAgICAgICAgICAgIGNvbnN0IGZhY2Vib29rTG9naW5CdG4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKGAuZmFjZWJvb2stbG9naW4tYnRuYCk7XHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKCBmYWNlYm9va0xvZ2luQnRuICk7XHJcbiAgICAgICAgICAgIGlmIChmYWNlYm9va0xvZ2luQnRuKVxyXG4gICAgICAgICAgICAgICAgZmFjZWJvb2tMb2dpbkJ0bi5jbGljaygpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBlbHNlIGlmIChpID09PSAxKSB7XHJcbiAgICAgICAgICAgIGNvbnN0XHJcbiAgICAgICAgICAgICAgICBnb29nbGVMb2dpbkJ0biA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoYC5nb29nbGUtbG9naW4tYnRuYClcclxuICAgICAgICAgICAgaWYgKGdvb2dsZUxvZ2luQnRuKVxyXG4gICAgICAgICAgICAgICAgZ29vZ2xlTG9naW5CdG4uY2xpY2soKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgZWxzZSBpZiAoIGkgPT09IDIgKSB7ICAgICAgICAgICAgXHJcbiAgICAgICAgICAgIFZLLkF1dGgubG9naW4oZnVuY3Rpb24ocmVzcG9uc2Upe1xyXG4gICAgICAgICAgICAgICAgaWYocmVzcG9uc2Uuc2Vzc2lvbil7XHJcbiAgICAgICAgICAgICAgICAgICAgLypVc2VyIGF1dGhvcml6YXRpb24gc3VjY2VlZGVkKi9cclxuICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhyZXNwb25zZSlcclxuICAgICAgICAgICAgICAgICAgICBpZihyZXNwb25zZS5zdGF0dXM9PSdjb25uZWN0ZWQnKXtcclxuICAgICAgICAgICAgICAgICAgICAgICAgLypTZWxlY3RlZCB1c2VyIGFjY2VzcyBzZXR0aW5ncywgaWYgdGhleSBhcmUgcmVxdWVzdGVkKi9cclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgIC8qVXNlciBjbGlja3MgdGhlIGNhbmNlbCBidXR0b24gaW4gdGhlIGF1dGhvcml6YXRpb24gd2luZG93Ki9cclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsc2UgaWYgKCBpID09PSAzICkge1xyXG5cclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgY29uc3QgdHdpdHRlckF1dGhIYW5kbGVyID0gKCBlcnIsIGRhdGEgKSA9PiB7XHJcbiAgICAgICAgY29uc29sZS5sb2coIGVyciwgZGF0YSApO1xyXG4gICAgfVxyXG5cclxuICAgIFxyXG5cclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5jb250ZWluZXJ9PlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmNvbnRlbnR9PlxyXG4gICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgIGljb25zLm1hcCgoZWwsIGkpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIChcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuaWNvbkNvbnRlbnR9IGtleT17TWF0aC5yYW5kb20oKSAqIDEwfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YSB0YXJnZXQ9XCJfYmxhbmtcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5pY29uQm9keX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aW1nXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3JjPXtlbC5pY29uVXJsfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFsdD1cIlwiIG9uQ2xpY2s9eygpID0+IG9uU29jaWFsTWVkaWFCdG5DbGljayhpKX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9e3N0eWxlcy5pY29ufVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN0eWxlPXt7IGN1cnNvcjogJ3BvaW50ZXInIH19XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIChpID09PSAwKSAmJiAoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxSZWFjdEZhY2Vib29rTG9naW5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnRhaW5lclN0eWxlPXt7IGRpc3BsYXk6IGBub25lYCB9fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY3NzQ2xhc3M9XCJmYWNlYm9vay1sb2dpbi1idG5cIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYXBwSWQ9XCIxMTg4NjM3NzAzNjE2ODNcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZmllbGRzPVwibmFtZSxlbWFpbCxwaWN0dXJlXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNhbGxiYWNrPXtyZXNwb25zZUZhY2Vib29rfSAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIClcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAoaSA9PT0gMSkgJiYgKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8R29vZ2xlTG9naW5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsaWVudElkPVwiMTA4OTYxODA0Nzk0My1yOTFzdTlxa2MwYzlucG8xdGZvZmYzc3A4NDIxYnQ1Zy5hcHBzLmdvb2dsZXVzZXJjb250ZW50LmNvbVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZW5kZXI9e3JlbmRlclByb3BzID0+IChcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YnV0dG9uXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9e3JlbmRlclByb3BzLm9uQ2xpY2t9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRpc2FibGVkPXtyZW5kZXJQcm9wcy5kaXNhYmxlZH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3R5bGU9e3sgZGlzcGxheTogJ25vbmUnIH19XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImdvb2dsZS1sb2dpbi1idG5cIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8+KX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvb2tpZVBvbGljeT17J3NpbmdsZV9ob3N0X29yaWdpbid9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvblN1Y2Nlc3M9e3Jlc3BvbnNlR29vZ2xlfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb25GYWlsdXJlPXtyZXNwb25zZUdvb2dsZX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgeyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPFR3aXR0ZXJMb2dpblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhdXRoQ2FsbGJhY2s9e3R3aXR0ZXJBdXRoSGFuZGxlcn1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uc3VtZXJLZXk9e1RXSVRURVJfQ09OU1VNRVJfS0VZfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25zdW1lclNlY3JldD17VFdJVFRFUl9DT05TVU1FUl9TRUNSRVR9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9hPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIClcclxuICAgICAgICAgICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgIClcclxufVxyXG5cclxuLy8gVE9ET1xyXG4vLyBhZGQgZm9vdCBmb290YmV0IGRvbWFpbiBpbiBnb29nbGUgZGV2ZWxwb3JzIGFjY291bnQiLCJcclxuZXhwb3J0IGZ1bmN0aW9uIFJlc2V0UGFzc3dvcmRMaW5rKHsgc3R5bGVzLCBjb250ZW50LCBjbGljayB9KSB7XHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXN9ID5cclxuICAgICAgICAgICAgPHNwYW4gb25DbGljaz17Y2xpY2t9PlxyXG4gICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbnRlbnRcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgPC9zcGFuPlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgKVxyXG59XHJcbiIsImV4cG9ydCBmdW5jdGlvbiBTdWJtaXQoeyBzdHlsZXMsIGNvbnRlbnQsIGNsaWNrIH0pIHtcclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlc30+XHJcbiAgICAgICAgICAgIDxidXR0b24gdHlwZT0nc3VibWl0Jz5cclxuICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICBjb250ZW50XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIDwvYnV0dG9uPlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgKVxyXG59XHJcbiIsImV4cG9ydCBmdW5jdGlvbiBUaXRsZSh7IHN0eWxlcywgY29udGVudCB9KSB7XHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXN9PlxyXG4gICAgICAgICAgICA8cD5cclxuICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICBjb250ZW50XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIDwvcD5cclxuICAgICAgICA8L2Rpdj5cclxuICAgIClcclxufVxyXG4iLCJpbXBvcnQgTGluayBmcm9tICduZXh0L2xpbmsnXHJcblxyXG5leHBvcnQgZnVuY3Rpb24gVG9SZWdpc3Rlcih7XHJcbiAgICBjb250YWluZXJfc3R5bGVzLFxyXG4gICAgY29udGVudF9zdHlsZXMsXHJcbiAgICBvcixcclxuICAgIHJlZ2lzdGVyX3RleHRfc3R5bGVzLFxyXG4gICAgY29udGVudCxcclxuICAgIGhyZWYsXHJcbiAgICBjbGljayB9KSB7XHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIDxkaXZcclxuICAgICAgICAgICAgY2xhc3NOYW1lPXtjb250YWluZXJfc3R5bGVzfVxyXG4gICAgICAgICAgICBvbkNsaWNrPXtjbGlja30+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtjb250ZW50X3N0eWxlc30+XHJcbiAgICAgICAgICAgICAgICA8c3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG9yICsgXCIgXCJcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICA8L3NwYW4+XHJcbiAgICAgICAgICAgICAgICA8TGluayBocmVmPXtocmVmfT5cclxuICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9e3JlZ2lzdGVyX3RleHRfc3R5bGVzfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY29udGVudFxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgPC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgPC9MaW5rPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8L2RpdiA+XHJcbiAgICApXHJcbn1cclxuIiwiLy8gc3R5bGVzXHJcbmltcG9ydCBzdHlsZXMgZnJvbSAnLi9Mb2dvLm1vZHVsZS5zY3NzJ1xyXG4vLyBjb21wb25lbnRzXHJcbmltcG9ydCBMaW5rIGZyb20gJ25leHQvbGluaydcclxuLy8gaW1hZ2VzIGFuZCBpY29uc1xyXG5pbXBvcnQgbG9nbyBmcm9tICcvcHVibGljL2ltYWdlcy9oZWFkZXIvbG9nby5zdmcnXHJcblxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIExvZ28oKSB7XHJcblxyXG4gICAgcmV0dXJuIChcclxuXHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5sb2dvX2NvbmF0aW5lcn0+XHJcbiAgICAgICAgICAgIDxMaW5rIGhyZWY9Jy8nPlxyXG4gICAgICAgICAgICAgICAgPGltZ1xyXG4gICAgICAgICAgICAgICAgICAgIHNyYz17bG9nby5zcmN9XHJcbiAgICAgICAgICAgICAgICAgICAgYWx0PVwiRm9vdEJldCBMb2dvXCJcclxuICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgIDwvTGluayA+XHJcbiAgICAgICAgPC9kaXY+XHJcblxyXG4gICAgKVxyXG59XHJcbiIsIi8vIGhvb2tzXHJcbmltcG9ydCB7IHVzZVNlbGVjdG9yIH0gZnJvbSAncmVhY3QtcmVkdXgnXHJcbi8vc3R5bGVzXHJcbmltcG9ydCBzdHlsZXMgZnJvbSAnLi9IZWFkZXIubW9kdWxlLnNjc3MnXHJcbi8vIGNvbXBvbmVudHNcclxuaW1wb3J0IHsgQmFyIH0gZnJvbSAnLi9CYXIvQmFyJ1xyXG5pbXBvcnQgeyBOYXZCYXIgfSBmcm9tICcuL05hdkJhci9OYXZCYXInXHJcbmltcG9ydCB7IFNvY2lhbE1lZGlhIH0gZnJvbSAnLi9Tb2NpYWxNZWRpYS9Tb2NpYWxNZWRpYSdcclxuLy8gaW1nZXNcclxuaW1wb3J0IGZvb3RiYWxsZXIgZnJvbSAnL3B1YmxpYy9pbWFnZXMvaGVhZGVyL2Zvb3RiYWxsZXIuc3ZnJ1xyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIEhlYWRlcih7IG1haW5zUGFnZXMgfSkge1xyXG5cclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPD5cclxuICAgICAgICAgICAge21haW5zUGFnZXMgP1xyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5oZWFkZXJfY29udGFpbmVyX2JpZ30+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5iYXJ9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8U29jaWFsTWVkaWEgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5iYXJfY29udHJvbGVyfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuYmFyX2NvbnRlaW5lcn0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5iYXJfY29udGVudH0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxCYXJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJhcl9pdGVtc19jb250PXtzdHlsZXMuYmFyX2l0ZW1zX2NvbnR9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBiYXJfaXRlbXM9e3N0eWxlcy5iYXJfaXRlbXN9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuZm9vdGJhbGxlcn0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGltZyBzcmM9e2Zvb3RiYWxsZXIuc3JjfSBhbHQ9XCJcIiAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIDxOYXZCYXIgLz5cclxuICAgICAgICAgICAgICAgIDwvZGl2PiA6XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmhlYWRlcl9jb250YWluZXJfc21hbGx9PlxyXG4gICAgICAgICAgICAgICAgICAgIDxCYXIgLz5cclxuICAgICAgICAgICAgICAgICAgICA8TmF2QmFyIC8+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIDwvPlxyXG5cclxuICAgIClcclxufVxyXG5cclxuIiwiaW1wb3J0IExpbmsgZnJvbSAnbmV4dC9saW5rJ1xyXG4vLyBzdHlsZXNcclxuaW1wb3J0IHN0eWxlcyBmcm9tICcuL0J1dHRvbi5tb2R1bGUuc2NzcydcclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBCdXR0b24oe1xyXG4gICAgaHJlZixcclxuICAgIGNvbnRlbnRGcnN0UCxcclxuICAgIGNvbnRlbnRTZWNQID0gbnVsbCxcclxuICAgIGFjdGl2ZSxcclxuICAgIGNsaWNrID0gbnVsbCB9KSB7XHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIDw+XHJcbiAgICAgICAgICAgIHtocmVmICE9PSBudWxsID9cclxuICAgICAgICAgICAgICAgIDxMaW5rIGhyZWY9e2hyZWZ9PlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtgJHtzdHlsZXMuY29udGFpbmVyfSAke2FjdGl2ZSAmJiBzdHlsZXMuYWN0aXZlfWB9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9e3N0eWxlcy5jb250ZW50fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgb25DbGljaz17Y2xpY2t9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwcmU+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb250ZW50RnJzdFBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGJyIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb250ZW50U2VjUFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvcHJlPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICA8L2RpdiA+XHJcbiAgICAgICAgICAgICAgICA8L0xpbms+IFxyXG4gICAgICAgICAgICAgICAgOlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e2Ake3N0eWxlcy5jb250YWluZXJ9ICR7YWN0aXZlICYmIHN0eWxlcy5hY3RpdmV9YH0+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9e3N0eWxlcy5jb250ZW50fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBvbkNsaWNrPXtjbGlja31cclxuICAgICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxwcmU+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29udGVudEZyc3RQXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YnIgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb250ZW50U2VjUFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L3ByZT5cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDwvZGl2ID5cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIDwvPlxyXG5cclxuICAgIClcclxufVxyXG4iLCIvLyBob29rcyBhbmQgaGVscGVyc1xyXG5pbXBvcnQgeyB1c2VSb3V0ZXIgfSBmcm9tICduZXh0L2Rpc3QvY2xpZW50L3JvdXRlcidcclxuaW1wb3J0IHsgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCdcclxuLy8gc3R5bGVzXHJcbmltcG9ydCBzdHlsZXMgZnJvbSAnLi9OYXZCYXIubW9kdWxlLnNjc3MnXHJcbi8vIHRyYW5zbGF0aW9uIFxyXG5pbXBvcnQgdXNlVHJhbnNsYXRpb24gZnJvbSAnbmV4dC10cmFuc2xhdGUvdXNlVHJhbnNsYXRpb24nXHJcbi8vIGNvbXBvbmV0bnNcclxuaW1wb3J0IHsgQnV0dG9uIH0gZnJvbSAnLi9CdXR0b24vQnV0dG9uJ1xyXG5pbXBvcnQgQ29udGFjdHNNb2RhbCBmcm9tICcuLi8uLi9QYWdlcy9Db250YWN0cy9Db250YWN0c01vZGFsJ1xyXG5cclxuXHJcblxyXG5leHBvcnQgZnVuY3Rpb24gTmF2QmFyKCkge1xyXG5cclxuICAgIGNvbnN0XHJcbiAgICAgICAgLy9zdGF0ZXNcclxuICAgICAgICBbc2hvd0NvbnRhY3RzTW9kYWwsIHNldFNob3dDb250YWN0c01vZGFsXSA9IHVzZVN0YXRlKGZhbHNlKSxcclxuICAgICAgICB7IHQgfSA9IHVzZVRyYW5zbGF0aW9uKCdjb21tb24nKSxcclxuICAgICAgICB0cmFuc2xhdGlvblBhdGggPSAnaGVhZGVyLm5hdkJhci4nLFxyXG4gICAgICAgIHRyYW5zbGF0ZSA9IChrZXkpID0+IHQoYCR7dHJhbnNsYXRpb25QYXRofSR7a2V5fWApLFxyXG4gICAgICAgIC8vIHJvdXRlclxyXG4gICAgICAgIHJvdXRlciA9IHVzZVJvdXRlcigpLFxyXG4gICAgICAgIC8vIG5hdiBiYXIgYnV0dG9ucyBjb25maWdzXHJcbiAgICAgICAgYnV0dG9uc0luSG9tZVBhZ2UgPSBbXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIGlkOiAnbWFpbicsXHJcbiAgICAgICAgICAgICAgICBrZXk6IE1hdGgucmFuZG9tKCksXHJcbiAgICAgICAgICAgICAgICBmcnN0Q29udGVudDogdHJhbnNsYXRlKCdtYWluJyksXHJcbiAgICAgICAgICAgICAgICBocmVmOiAnLydcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgaWQ6ICdnYW1lcycsXHJcbiAgICAgICAgICAgICAgICBrZXk6IE1hdGgucmFuZG9tKCksXHJcbiAgICAgICAgICAgICAgICBmcnN0Q29udGVudDogdHJhbnNsYXRlKCdnYW1lcycpLFxyXG4gICAgICAgICAgICAgICAgaHJlZjogJy9nYW1lcydcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgaWQ6ICdzdGF0aXN0aWNzJyxcclxuICAgICAgICAgICAgICAgIGtleTogTWF0aC5yYW5kb20oKSxcclxuICAgICAgICAgICAgICAgIGZyc3RDb250ZW50OiB0cmFuc2xhdGUoJ3N0YXRpc3RpY3MuZnJzJyksXHJcbiAgICAgICAgICAgICAgICBzZWNDb250ZW50OiB0cmFuc2xhdGUoJ3N0YXRpc3RpY3Muc2VjJyksXHJcbiAgICAgICAgICAgICAgICBocmVmOiAnL3N0YXRpc3RpY3MnXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIGlkOiAncHJlZGljdGlvbicsXHJcbiAgICAgICAgICAgICAgICBrZXk6IE1hdGgucmFuZG9tKCksXHJcbiAgICAgICAgICAgICAgICBmcnN0Q29udGVudDogdHJhbnNsYXRlKCdwcmVkaWN0aW9uLmZycycpLFxyXG4gICAgICAgICAgICAgICAgc2VjQ29udGVudDogdHJhbnNsYXRlKCdwcmVkaWN0aW9uLnNlYycpLFxyXG4gICAgICAgICAgICAgICAgaHJlZjogJy9wcmVkaWN0aW9uJ1xyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICBpZDogJ3Rlc3RpbW9uaWFscycsXHJcbiAgICAgICAgICAgICAgICBrZXk6IE1hdGgucmFuZG9tKCksXHJcbiAgICAgICAgICAgICAgICBmcnN0Q29udGVudDogdHJhbnNsYXRlKCd0ZXN0aW1vbmlhbHMnKSxcclxuICAgICAgICAgICAgICAgIGhyZWY6ICcvdGVzdGltb25pYWxzJ1xyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICBpZDogJ2Fib3V0VXMnLFxyXG4gICAgICAgICAgICAgICAga2V5OiBNYXRoLnJhbmRvbSgpLFxyXG4gICAgICAgICAgICAgICAgZnJzdENvbnRlbnQ6IHRyYW5zbGF0ZSgnYWJvdXRVcycpLFxyXG4gICAgICAgICAgICAgICAgaHJlZjogJy9hYm91dFVzJ1xyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICBpZDogJ2NvbnRhY3RzJyxcclxuICAgICAgICAgICAgICAgIGtleTogTWF0aC5yYW5kb20oKSxcclxuICAgICAgICAgICAgICAgIGZyc3RDb250ZW50OiB0cmFuc2xhdGUoJ2NvbnRhY3RzJyksXHJcbiAgICAgICAgICAgICAgICBocmVmOiBudWxsLFxyXG4gICAgICAgICAgICAgICAgY2xpY2s6ICgpID0+IHNldFNob3dDb250YWN0c01vZGFsKHRydWUpXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgXSxcclxuICAgICAgICBidXR0b25zID0gYnV0dG9uc0luSG9tZVBhZ2UuZmlsdGVyKGVsID0+IGVsLmlkICE9PSBcInN0YXRpc3RpY3NcIilcclxuXHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIDw+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtgJHtzdHlsZXMuY29udGFpbmVyfSAke3JvdXRlci5wYXRobmFtZSAhPT0gJy8nID8gc3R5bGVzLnRhYmxldCA6IG51bGx9YH0+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmNvbnRlbnR9PlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMudG9wX29uX3RhYmxldH0+XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAocm91dGVyLnBhdGhuYW1lID09PSAnLycgPyBidXR0b25zSW5Ib21lUGFnZSA6IGJ1dHRvbnMpLm1hcCgoZWwsIGkpID0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaSA8IDMgJiYgKDxCdXR0b25cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29udGVudEZyc3RQPXtlbC5mcnN0Q29udGVudH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29udGVudFNlY1A9e2VsLnNlY0NvbnRlbnR9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGhyZWY9e2VsLmhyZWZ9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGtleT17ZWwua2V5fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhY3RpdmU9e3JvdXRlci5wYXRobmFtZSA9PT0gZWwuaHJlZiA/ICd0cnVlJyA6IG51bGx9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsaWNrPXtlbC5jbGljayAmJiBlbC5jbGlja31cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICkpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmJvdHRvbV9vbl90YWJsZXR9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAocm91dGVyLnBhdGhuYW1lID09PSAnLycgPyBidXR0b25zSW5Ib21lUGFnZSA6IGJ1dHRvbnMpLm1hcCgoZWwsIGkpID0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaSA+PSAzICYmICg8QnV0dG9uXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnRlbnRGcnN0UD17ZWwuZnJzdENvbnRlbnR9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnRlbnRTZWNQPXtlbC5zZWNDb250ZW50fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBocmVmPXtlbC5ocmVmfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBrZXk9e2VsLmtleX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYWN0aXZlPXtyb3V0ZXIucGF0aG5hbWUgPT09IGVsLmhyZWYgPyAndHJ1ZScgOiBudWxsfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGljaz17ZWwuY2xpY2sgJiYgZWwuY2xpY2t9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcblxyXG5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgc2hvd0NvbnRhY3RzTW9kYWwgJiZcclxuICAgICAgICAgICAgICAgIDxDb250YWN0c01vZGFsXHJcbiAgICAgICAgICAgICAgICAgICAgb3BlbmVkPXtzaG93Q29udGFjdHNNb2RhbCA/IHRydWUgOiBmYWxzZX1cclxuICAgICAgICAgICAgICAgICAgICBvbk1vZGFsQ2xvc2U9eygpID0+IHNldFNob3dDb250YWN0c01vZGFsKGZhbHNlKX1cclxuICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICA8Lz5cclxuXHJcbiAgICApXHJcbn1cclxuIiwiaW1wb3J0IHN0eWxlcyBmcm9tICcuL0ljb24ubW9kdWxlLnNjc3MnXHJcblxyXG5leHBvcnQgZnVuY3Rpb24gSWNvbih7IHNyYywgY2xpY2ssIGlkIH0pIHtcclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5jb250YWluZXJ9IGlkPXtpZH0+XHJcbiAgICAgICAgICAgIDxpbWdcclxuICAgICAgICAgICAgICAgIHNyYz17c3JjfVxyXG4gICAgICAgICAgICAgICAgYWx0PXtgaWNvbnMtJHtzcmN9YH1cclxuICAgICAgICAgICAgICAgIG9uQ2xpY2s9e2NsaWNrfVxyXG4gICAgICAgICAgICAvPlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgKVxyXG59XHJcbiIsImltcG9ydCB7IE1vZGFsIH0gZnJvbSBcIi4uLy4uLy4uLy4uL2NvbW1vbi9hdXRoL01vZGFsL01vZGFsXCJcclxuaW1wb3J0IHN0eWxlcyBmcm9tICcuLi9Tb2NpYWxNZWRpYU1vZGFsLm1vZHVsZS5zY3NzJ1xyXG5pbXBvcnQgTGluayBmcm9tICduZXh0L2xpbmsnXHJcblxyXG5leHBvcnQgZnVuY3Rpb24gRmFjZWJvb2soeyBvbk1vZGFsQ2xvc2UsIGRhdGEsIHBhcmVudCB9KSB7XHJcblxyXG4gICAgY29uc3QgdG9wID0gcGFyZW50LmN1cnJlbnQuY2hpbGRyZW4uZmFjZWJvb2sub2Zmc2V0VG9wXHJcblxyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8TW9kYWxcclxuICAgICAgICAgICAgb25DbG9zZT17b25Nb2RhbENsb3NlfVxyXG4gICAgICAgICAgICBjb250YWluZXJTdHlsZXM9e3N0eWxlcy5jb250YWluZXJ9XHJcbiAgICAgICAgICAgIGNvbnRlbnRTdHlsZXM9e3N0eWxlcy5jb250ZW50fVxyXG4gICAgICAgICAgICBvdGhlclN0eWxlcz17eyB0b3A6IHRvcCArICdweCcgfX1cclxuICAgICAgICA+XHJcbiAgICAgICAgICAgIDxMaW5rIGhyZWY9e2RhdGEudXJsfT5cclxuICAgICAgICAgICAgICAgIDxhIHRhcmdldD1cIl9ibGFua1wiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxwPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBkYXRhLnRleHRcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIDwvcD5cclxuICAgICAgICAgICAgICAgIDwvYT5cclxuICAgICAgICAgICAgPC9MaW5rPlxyXG4gICAgICAgIDwvTW9kYWw+XHJcbiAgICApXHJcbn0iLCJpbXBvcnQgeyBNb2RhbCB9IGZyb20gXCIuLi8uLi8uLi8uLi9jb21tb24vYXV0aC9Nb2RhbC9Nb2RhbFwiXHJcbmltcG9ydCBzdHlsZXMgZnJvbSAnLi4vU29jaWFsTWVkaWFNb2RhbC5tb2R1bGUuc2NzcydcclxuaW1wb3J0IExpbmsgZnJvbSAnbmV4dC9saW5rJ1xyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIEluc3RhZ3JhbSh7IG9uTW9kYWxDbG9zZSwgZGF0YSwgcGFyZW50IH0pIHtcclxuXHJcbiAgICBjb25zdCB0b3AgPSBwYXJlbnQuY3VycmVudC5jaGlsZHJlbi5pbnN0YWdyYW0ub2Zmc2V0VG9wXHJcblxyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8TW9kYWxcclxuICAgICAgICAgICAgb25DbG9zZT17b25Nb2RhbENsb3NlfVxyXG4gICAgICAgICAgICBjb250YWluZXJTdHlsZXM9e3N0eWxlcy5jb250YWluZXJ9XHJcbiAgICAgICAgICAgIGNvbnRlbnRTdHlsZXM9e3N0eWxlcy5jb250ZW50fVxyXG4gICAgICAgICAgICBvdGhlclN0eWxlcz17eyB0b3A6IHRvcCArICdweCcgfX1cclxuICAgICAgICA+XHJcbiAgICAgICAgICAgIDxMaW5rIGhyZWY9e2RhdGEudXJsfT5cclxuICAgICAgICAgICAgICAgIDxhIHRhcmdldD1cIl9ibGFua1wiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxwPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBkYXRhLnRleHRcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIDwvcD5cclxuICAgICAgICAgICAgICAgIDwvYT5cclxuICAgICAgICAgICAgPC9MaW5rPlxyXG4gICAgICAgIDwvTW9kYWw+XHJcbiAgICApXHJcbn0iLCJpbXBvcnQgeyBNb2RhbCB9IGZyb20gXCIuLi8uLi8uLi8uLi9jb21tb24vYXV0aC9Nb2RhbC9Nb2RhbFwiXHJcbmltcG9ydCBzdHlsZXMgZnJvbSAnLi4vU29jaWFsTWVkaWFNb2RhbC5tb2R1bGUuc2NzcydcclxuaW1wb3J0IExpbmsgZnJvbSAnbmV4dC9saW5rJ1xyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIFBob25lKHsgb25Nb2RhbENsb3NlLCBkYXRhLCBwYXJlbnQgfSkge1xyXG5cclxuICAgIGNvbnN0XHJcbiAgICAgICAgdG9wID0gcGFyZW50LmN1cnJlbnQuY2hpbGRyZW4ucGhvbmUub2Zmc2V0VG9wXHJcblxyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8TW9kYWxcclxuICAgICAgICAgICAgb25DbG9zZT17b25Nb2RhbENsb3NlfVxyXG4gICAgICAgICAgICBjb250YWluZXJTdHlsZXM9e3N0eWxlcy5jb250YWluZXJ9XHJcbiAgICAgICAgICAgIGNvbnRlbnRTdHlsZXM9e3N0eWxlcy5jb250ZW50fVxyXG4gICAgICAgICAgICBvdGhlclN0eWxlcz17eyB0b3A6IHRvcCArICdweCcgfX1cclxuICAgICAgICA+XHJcbiAgICAgICAgICAgIDxMaW5rIGhyZWY9e2RhdGEudXJsfT5cclxuICAgICAgICAgICAgICAgIDxhIHRhcmdldD1cIl9ibGFua1wiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxwPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBkYXRhLnRleHRcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIDwvcD5cclxuICAgICAgICAgICAgICAgIDwvYT5cclxuICAgICAgICAgICAgPC9MaW5rPlxyXG4gICAgICAgIDwvTW9kYWw+XHJcbiAgICApXHJcbn1cclxuIiwiaW1wb3J0IHsgTW9kYWwgfSBmcm9tIFwiLi4vLi4vLi4vLi4vY29tbW9uL2F1dGgvTW9kYWwvTW9kYWxcIlxyXG5pbXBvcnQgc3R5bGVzIGZyb20gJy4uL1NvY2lhbE1lZGlhTW9kYWwubW9kdWxlLnNjc3MnXHJcbmltcG9ydCBMaW5rIGZyb20gJ25leHQvbGluaydcclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBUZWxlZ3JhbSh7IG9uTW9kYWxDbG9zZSwgZGF0YSwgcGFyZW50IH0pIHtcclxuXHJcbiAgICBjb25zdCB0b3AgPSBwYXJlbnQuY3VycmVudC5jaGlsZHJlbi50ZWxlZ3JhbS5vZmZzZXRUb3BcclxuXHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIDxNb2RhbFxyXG4gICAgICAgICAgICBvbkNsb3NlPXtvbk1vZGFsQ2xvc2V9XHJcbiAgICAgICAgICAgIGNvbnRhaW5lclN0eWxlcz17c3R5bGVzLmNvbnRhaW5lcn1cclxuICAgICAgICAgICAgY29udGVudFN0eWxlcz17c3R5bGVzLmNvbnRlbnR9XHJcbiAgICAgICAgICAgIG90aGVyU3R5bGVzPXt7IHRvcDogdG9wICsgJ3B4JyB9fVxyXG4gICAgICAgID5cclxuICAgICAgICAgICAgPExpbmsgaHJlZj17ZGF0YS51cmx9PlxyXG4gICAgICAgICAgICAgICAgPGEgdGFyZ2V0PVwiX2JsYW5rXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPHA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRhdGEudGV4dFxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgPC9wPlxyXG4gICAgICAgICAgICAgICAgPC9hPlxyXG4gICAgICAgICAgICA8L0xpbms+XHJcbiAgICAgICAgPC9Nb2RhbD5cclxuICAgIClcclxufSIsImltcG9ydCB7IE1vZGFsIH0gZnJvbSBcIi4uLy4uLy4uLy4uL2NvbW1vbi9hdXRoL01vZGFsL01vZGFsXCJcclxuaW1wb3J0IHN0eWxlcyBmcm9tICcuLi9Tb2NpYWxNZWRpYU1vZGFsLm1vZHVsZS5zY3NzJ1xyXG5pbXBvcnQgTGluayBmcm9tICduZXh0L2xpbmsnXHJcblxyXG5leHBvcnQgZnVuY3Rpb24gVmliZXIoeyBvbk1vZGFsQ2xvc2UsIGRhdGEsIHBhcmVudCB9KSB7XHJcblxyXG4gICAgY29uc3QgdG9wID0gcGFyZW50LmN1cnJlbnQuY2hpbGRyZW4udmliZXIub2Zmc2V0VG9wXHJcblxyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8TW9kYWxcclxuICAgICAgICAgICAgb25DbG9zZT17b25Nb2RhbENsb3NlfVxyXG4gICAgICAgICAgICBjb250YWluZXJTdHlsZXM9e3N0eWxlcy5jb250YWluZXJ9XHJcbiAgICAgICAgICAgIGNvbnRlbnRTdHlsZXM9e3N0eWxlcy5jb250ZW50fVxyXG4gICAgICAgICAgICBvdGhlclN0eWxlcz17eyB0b3A6IHRvcCArICdweCcgfX1cclxuICAgICAgICA+XHJcbiAgICAgICAgICAgIDxMaW5rIGhyZWY9e2RhdGEudXJsfT5cclxuICAgICAgICAgICAgICAgIDxhIHRhcmdldD1cIl9ibGFua1wiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxwPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBkYXRhLnRleHRcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIDwvcD5cclxuICAgICAgICAgICAgICAgIDwvYT5cclxuICAgICAgICAgICAgPC9MaW5rPlxyXG4gICAgICAgIDwvTW9kYWw+XHJcbiAgICApXHJcbn0iLCJpbXBvcnQgeyBNb2RhbCB9IGZyb20gXCIuLi8uLi8uLi8uLi9jb21tb24vYXV0aC9Nb2RhbC9Nb2RhbFwiXHJcbmltcG9ydCBzdHlsZXMgZnJvbSAnLi4vU29jaWFsTWVkaWFNb2RhbC5tb2R1bGUuc2NzcydcclxuaW1wb3J0IExpbmsgZnJvbSAnbmV4dC9saW5rJ1xyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIFdhdHNVcCh7IG9uTW9kYWxDbG9zZSwgZGF0YSwgcGFyZW50IH0pIHtcclxuXHJcbiAgICBjb25zdCB0b3AgPSBwYXJlbnQuY3VycmVudC5jaGlsZHJlbi53YXRzdXAub2Zmc2V0VG9wXHJcblxyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8TW9kYWxcclxuICAgICAgICAgICAgb25DbG9zZT17b25Nb2RhbENsb3NlfVxyXG4gICAgICAgICAgICBjb250YWluZXJTdHlsZXM9e3N0eWxlcy5jb250YWluZXJ9XHJcbiAgICAgICAgICAgIGNvbnRlbnRTdHlsZXM9e3N0eWxlcy5jb250ZW50fVxyXG4gICAgICAgICAgICBvdGhlclN0eWxlcz17eyB0b3A6IHRvcCArICdweCcgfX1cclxuICAgICAgICA+XHJcbiAgICAgICAgICAgIDxMaW5rIGhyZWY9e2RhdGEudXJsfT5cclxuICAgICAgICAgICAgICAgIDxhIHRhcmdldD1cIl9ibGFua1wiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxwPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBkYXRhLnRleHRcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIDwvcD5cclxuICAgICAgICAgICAgICAgIDwvYT5cclxuICAgICAgICAgICAgPC9MaW5rPlxyXG4gICAgICAgIDwvTW9kYWw+XHJcbiAgICApXHJcbn0iLCJpbXBvcnQgeyB1c2VSZWYgfSBmcm9tIFwicmVhY3RcIjtcclxuLy8gc3R5bGVzXHJcbmltcG9ydCBzdHlsZXMgZnJvbSBcIi4vU29jaWFsTWVkaWEubW9kdWxlLnNjc3NcIjtcclxuLy8gY29tcG9uZW50c1xyXG5pbXBvcnQgeyBJY29uIH0gZnJvbSBcIi4vSWNvbi9JY29uXCI7XHJcbmltcG9ydCB7IHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCB7IFBob25lIH0gZnJvbSBcIi4vTW9kYWxzL1Bob25lL1Bob25lXCI7XHJcbmltcG9ydCB7IEZhY2Vib29rIH0gZnJvbSBcIi4vTW9kYWxzL0ZhY2Vib29rL0ZhY2Vib29rXCI7XHJcbmltcG9ydCB7IFRlbGVncmFtIH0gZnJvbSBcIi4vTW9kYWxzL1RlbGVncmFtL1RlbGVncmFtXCI7XHJcbmltcG9ydCB7IFdhdHNVcCB9IGZyb20gXCIuL01vZGFscy9XYXRzVXAvV2F0c1VwXCI7XHJcbmltcG9ydCB7IEluc3RhZ3JhbSB9IGZyb20gXCIuL01vZGFscy9JbnN0YWdyYW0vSW5zdGFncmFtXCI7XHJcbmltcG9ydCB7IFZpYmVyIH0gZnJvbSBcIi4vTW9kYWxzL1ZpYmVyL1ZpYmVyXCI7XHJcbi8vIGljb25zXHJcbmltcG9ydCBwaG9uZSBmcm9tIFwiL3B1YmxpYy9pbWFnZXMvaGVhZGVyL1NvY2lhbE1lZGlhL3Bob25lLnN2Z1wiO1xyXG5pbXBvcnQgZmFjZWJvb2sgZnJvbSBcIi9wdWJsaWMvaW1hZ2VzL2hlYWRlci9Tb2NpYWxNZWRpYS9mYWNlYm9vay5zdmdcIjtcclxuaW1wb3J0IHRlbGVncmFtIGZyb20gXCIvcHVibGljL2ltYWdlcy9oZWFkZXIvU29jaWFsTWVkaWEvdGVsZWdyYW0uc3ZnXCI7XHJcbmltcG9ydCB3YXRzdXAgZnJvbSBcIi9wdWJsaWMvaW1hZ2VzL2hlYWRlci9Tb2NpYWxNZWRpYS93YXRzdXAuc3ZnXCI7XHJcbmltcG9ydCBpbnN0YWdyYW0gZnJvbSBcIi9wdWJsaWMvaW1hZ2VzL2hlYWRlci9Tb2NpYWxNZWRpYS9pbnN0YWdyYW0uc3ZnXCI7XHJcbmltcG9ydCB2aWJlciBmcm9tIFwiL3B1YmxpYy9pbWFnZXMvaGVhZGVyL1NvY2lhbE1lZGlhL3ZpYmVyLnN2Z1wiO1xyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIFNvY2lhbE1lZGlhKCkge1xyXG4gIGNvbnN0IC8vIHN0YXRlc1xyXG4gICAgW3Nob3dQaG9uZU1vZGFsLCBzZXRTaG93UGhvbmVNb2RhbF0gPSB1c2VTdGF0ZShmYWxzZSksXHJcbiAgICBbc2hvd0ZhY2Jvb2tNb2RhbCwgc2V0U2hvd0ZhY2Jvb2tNb2RhbF0gPSB1c2VTdGF0ZShmYWxzZSksXHJcbiAgICBbc2hvd1RlbGVncmFtTW9kYWwsIHNldFNob3dUZWxlZ3JhbU1vZGFsXSA9IHVzZVN0YXRlKGZhbHNlKSxcclxuICAgIFtzaG93V2F0c1VwTW9kYWwsIHNldFNob3dXYXRzVXBNb2RhbF0gPSB1c2VTdGF0ZShmYWxzZSksXHJcbiAgICBbc2hvd0luc3RhZ3JhbU1vZGFsLCBzZXRTaG93SW5zdGFncmFtTW9kYWxdID0gdXNlU3RhdGUoZmFsc2UpLFxyXG4gICAgW3Nob3dWaWJlck1vZGFsLCBzZXRTaG93VmliZXJNb2RhbF0gPSB1c2VTdGF0ZShmYWxzZSksXHJcbiAgICBzb2NpYWxNZWRpYXNSZWYgPSB1c2VSZWYoKSxcclxuICAgIC8vIGNvbmZpZ1xyXG4gICAgaWNvbnMgPSBbXHJcbiAgICAgIHtcclxuICAgICAgICBpZDogXCJwaG9uZVwiLFxyXG4gICAgICAgIGtleTogTWF0aC5yYW5kb20oKSxcclxuICAgICAgICBzcmM6IHBob25lLnNyYyxcclxuICAgICAgICBjbGljazogKCkgPT4ge1xyXG4gICAgICAgICAgd2luZG93LnNjcm9sbFRvKDAsIDApO1xyXG4gICAgICAgICAgc2V0U2hvd1Bob25lTW9kYWwodHJ1ZSk7XHJcbiAgICAgICAgfSxcclxuICAgICAgfSxcclxuICAgICAge1xyXG4gICAgICAgIGlkOiBcImZhY2Vib29rXCIsXHJcbiAgICAgICAga2V5OiBNYXRoLnJhbmRvbSgpLFxyXG4gICAgICAgIHNyYzogZmFjZWJvb2suc3JjLFxyXG4gICAgICAgIGNsaWNrOiAoKSA9PiB7XHJcbiAgICAgICAgICB3aW5kb3cuc2Nyb2xsVG8oMCwgMCk7XHJcbiAgICAgICAgICBzZXRTaG93RmFjYm9va01vZGFsKHRydWUpO1xyXG4gICAgICAgIH0sXHJcbiAgICAgIH0sXHJcbiAgICAgIHtcclxuICAgICAgICBpZDogXCJ0ZWxlZ3JhbVwiLFxyXG4gICAgICAgIGtleTogTWF0aC5yYW5kb20oKSxcclxuICAgICAgICBzcmM6IHRlbGVncmFtLnNyYyxcclxuICAgICAgICBjbGljazogKCkgPT4ge1xyXG4gICAgICAgICAgd2luZG93LnNjcm9sbFRvKDAsIDApO1xyXG4gICAgICAgICAgc2V0U2hvd1RlbGVncmFtTW9kYWwodHJ1ZSk7XHJcbiAgICAgICAgfSxcclxuICAgICAgfSxcclxuICAgICAge1xyXG4gICAgICAgIGlkOiBcIndhdHN1cFwiLFxyXG4gICAgICAgIGtleTogTWF0aC5yYW5kb20oKSxcclxuICAgICAgICBzcmM6IHdhdHN1cC5zcmMsXHJcbiAgICAgICAgY2xpY2s6ICgpID0+IHtcclxuICAgICAgICAgIHdpbmRvdy5zY3JvbGxUbygwLCAwKTtcclxuICAgICAgICAgIHNldFNob3dXYXRzVXBNb2RhbCh0cnVlKTtcclxuICAgICAgICB9LFxyXG4gICAgICB9LFxyXG4gICAgICB7XHJcbiAgICAgICAgaWQ6IFwiaW5zdGFncmFtXCIsXHJcbiAgICAgICAga2V5OiBNYXRoLnJhbmRvbSgpLFxyXG4gICAgICAgIHNyYzogaW5zdGFncmFtLnNyYyxcclxuICAgICAgICBjbGljazogKCkgPT4ge1xyXG4gICAgICAgICAgd2luZG93LnNjcm9sbFRvKDAsIDApO1xyXG4gICAgICAgICAgc2V0U2hvd0luc3RhZ3JhbU1vZGFsKHRydWUpO1xyXG4gICAgICAgIH0sXHJcbiAgICAgIH0sXHJcbiAgICAgIHtcclxuICAgICAgICBpZDogXCJ2aWJlclwiLFxyXG4gICAgICAgIGtleTogTWF0aC5yYW5kb20oKSxcclxuICAgICAgICBzcmM6IHZpYmVyLnNyYyxcclxuICAgICAgICBjbGljazogKCkgPT4ge1xyXG4gICAgICAgICAgd2luZG93LnNjcm9sbFRvKDAsIDApO1xyXG4gICAgICAgICAgc2V0U2hvd1ZpYmVyTW9kYWwodHJ1ZSk7XHJcbiAgICAgICAgfSxcclxuICAgICAgfSxcclxuICAgIF0sXHJcbiAgICBtb2RhbF9jb250ZW50cyA9IHtcclxuICAgICAgcGhvbmU6IHtcclxuICAgICAgICB0ZXh0OiBcIiszNCA2NzIgMzE0IDgwOFwiLFxyXG4gICAgICAgIHVybDogXCJ0ZWw6KzM0NjcyMzE0ODA4XCIsXHJcbiAgICAgIH0sXHJcbiAgICAgIGZhY2Vib29rOiB7XHJcbiAgICAgICAgdGV4dDogXCJGYWNlYm9va1wiLFxyXG4gICAgICAgIHVybDogXCJodHRwczovL3d3dy5mYWNlYm9vay5jb20vJUQwJTlGJUQxJTgwJUQwJUJFJUQwJUIzJUQwJUJEJUQwJUJFJUQwJUI3JUQxJThCLSVEMCVCRCVEMCVCMC0lRDAlQTQlRDElODMlRDElODIlRDAlQjElRDAlQkUlRDAlQkItMTA0OTQxMzQ3NTc3OTEzL1wiLFxyXG4gICAgICB9LFxyXG4gICAgICB0ZWxlZ3JhbToge1xyXG4gICAgICAgIHRleHQ6IFwiKzM0IDY3MiAzMTQgODA4XCIsXHJcbiAgICAgICAgdXJsOiBcImh0dHBzOi8vdGVsZWdyYW0ubWUvZm9vdGJldDI0Y29tXCIsXHJcbiAgICAgIH0sXHJcbiAgICAgIHdhdHN1cDoge1xyXG4gICAgICAgIHRleHQ6IFwiKzM0IDY3MiAzMTQgODA4XCIsXHJcbiAgICAgICAgdXJsOiBcImh0dHBzOi8vYXBpLndoYXRzYXBwLmNvbS9zZW5kP3Bob25lPSszNDY3MjMxNDgwOFwiLFxyXG4gICAgICB9LFxyXG4gICAgICBpbnN0YWdyYW06IHtcclxuICAgICAgICB0ZXh0OiBcIkluc3RhZ3JhbVwiLFxyXG4gICAgICAgIHVybDogXCJodHRwczovL3d3dy5pbnN0YWdyYW0uY29tL3Byb2dub3p5bmE1NTAvP3V0bV9tZWRpdW09Y29weV9saW5rXCIsXHJcbiAgICAgIH0sXHJcbiAgICAgIHZpYmVyOiB7XHJcbiAgICAgICAgdGV4dDogXCIrMzQgNjcyIDMxNCA4MDhcIixcclxuICAgICAgICB1cmw6IFwidmliZXI6Ly9jaGF0P251bWJlcj0rMzQ2NzIzMTQ4MDhcIixcclxuICAgICAgfSxcclxuICAgIH07XHJcbiAgcmV0dXJuIChcclxuICAgIDw+XHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuY29udGFpbmVyfSByZWY9e3NvY2lhbE1lZGlhc1JlZn0+XHJcbiAgICAgICAge2ljb25zLm1hcCgoZWwpID0+IChcclxuICAgICAgICAgIDxJY29uIGlkPXtlbC5pZH0ga2V5PXtlbC5rZXl9IHNyYz17ZWwuc3JjfSBjbGljaz17ZWwuY2xpY2t9IC8+XHJcbiAgICAgICAgKSl9XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgICB7c2hvd1Bob25lTW9kYWwgJiYgKFxyXG4gICAgICAgIDxQaG9uZVxyXG4gICAgICAgICAgb25Nb2RhbENsb3NlPXsoKSA9PiBzZXRTaG93UGhvbmVNb2RhbChmYWxzZSl9XHJcbiAgICAgICAgICBkYXRhPXttb2RhbF9jb250ZW50cy5waG9uZX1cclxuICAgICAgICAgIHBhcmVudD17c29jaWFsTWVkaWFzUmVmfVxyXG4gICAgICAgIC8+XHJcbiAgICAgICl9XHJcbiAgICAgIHtzaG93RmFjYm9va01vZGFsICYmIChcclxuICAgICAgICA8RmFjZWJvb2tcclxuICAgICAgICAgIG9uTW9kYWxDbG9zZT17KCkgPT4gc2V0U2hvd0ZhY2Jvb2tNb2RhbChmYWxzZSl9XHJcbiAgICAgICAgICBkYXRhPXttb2RhbF9jb250ZW50cy5mYWNlYm9va31cclxuICAgICAgICAgIHBhcmVudD17c29jaWFsTWVkaWFzUmVmfVxyXG4gICAgICAgIC8+XHJcbiAgICAgICl9XHJcbiAgICAgIHtzaG93VGVsZWdyYW1Nb2RhbCAmJiAoXHJcbiAgICAgICAgPFRlbGVncmFtXHJcbiAgICAgICAgICBvbk1vZGFsQ2xvc2U9eygpID0+IHNldFNob3dUZWxlZ3JhbU1vZGFsKGZhbHNlKX1cclxuICAgICAgICAgIGRhdGE9e21vZGFsX2NvbnRlbnRzLnRlbGVncmFtfVxyXG4gICAgICAgICAgcGFyZW50PXtzb2NpYWxNZWRpYXNSZWZ9XHJcbiAgICAgICAgLz5cclxuICAgICAgKX1cclxuICAgICAge3Nob3dXYXRzVXBNb2RhbCAmJiAoXHJcbiAgICAgICAgPFdhdHNVcFxyXG4gICAgICAgICAgb25Nb2RhbENsb3NlPXsoKSA9PiBzZXRTaG93V2F0c1VwTW9kYWwoZmFsc2UpfVxyXG4gICAgICAgICAgZGF0YT17bW9kYWxfY29udGVudHMud2F0c3VwfVxyXG4gICAgICAgICAgcGFyZW50PXtzb2NpYWxNZWRpYXNSZWZ9XHJcbiAgICAgICAgLz5cclxuICAgICAgKX1cclxuICAgICAge3Nob3dJbnN0YWdyYW1Nb2RhbCAmJiAoXHJcbiAgICAgICAgPEluc3RhZ3JhbVxyXG4gICAgICAgICAgb25Nb2RhbENsb3NlPXsoKSA9PiBzZXRTaG93SW5zdGFncmFtTW9kYWwoZmFsc2UpfVxyXG4gICAgICAgICAgZGF0YT17bW9kYWxfY29udGVudHMuaW5zdGFncmFtfVxyXG4gICAgICAgICAgcGFyZW50PXtzb2NpYWxNZWRpYXNSZWZ9XHJcbiAgICAgICAgLz5cclxuICAgICAgKX1cclxuICAgICAge3Nob3dWaWJlck1vZGFsICYmIChcclxuICAgICAgICA8VmliZXJcclxuICAgICAgICAgIG9uTW9kYWxDbG9zZT17KCkgPT4gc2V0U2hvd1ZpYmVyTW9kYWwoZmFsc2UpfVxyXG4gICAgICAgICAgZGF0YT17bW9kYWxfY29udGVudHMudmliZXJ9XHJcbiAgICAgICAgICBwYXJlbnQ9e3NvY2lhbE1lZGlhc1JlZn1cclxuICAgICAgICAvPlxyXG4gICAgICApfVxyXG4gICAgPC8+XHJcbiAgKTtcclxufVxyXG4iLCJpbXBvcnQgeyBNb2RhbCB9IGZyb20gJy4uLy4uL2NvbW1vbi9hdXRoL01vZGFsL01vZGFsJ1xyXG4vLyBzdHlsZXMgXHJcbmltcG9ydCBzdHlsZXMgZnJvbSAnLi9Db250YWN0cy5tb2R1bGUuc2NzcydcclxuaW1wb3J0IHsgY29udGFjdHNfZGF0YSB9IGZyb20gJy4vY29udGFjdHNfZGF0YSdcclxuLy8gaWNvbnNcclxuaW1wb3J0IGNsb3NlVmVjdG9yIGZyb20gJy9wdWJsaWMvaW1hZ2VzL2hlYWRlci9Tb2NpYWxNZWRpYS9jbG9zZVZlY3Rvci5wbmcnXHJcblxyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gQ29udGFjdHNNb2RhbCh7IG9uTW9kYWxDbG9zZSwgb3BlbmVkID0gZmFsc2UgfSkge1xyXG5cclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPE1vZGFsXHJcbiAgICAgICAgICAgIG9uQ2xvc2U9e29uTW9kYWxDbG9zZX1cclxuICAgICAgICAgICAgY29udGFpbmVyU3R5bGVzPXtgJHtzdHlsZXMuY29udGFpbmVyfSBgfVxyXG4gICAgICAgICAgICBjb250ZW50U3R5bGVzPXtgJHtzdHlsZXMuY29udGVudH0gJHtvcGVuZWQgPyBzdHlsZXMub3BlbiA6IHN0eWxlcy5jbG9zZX1gfVxyXG4gICAgICAgID5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5tb2RhbF9jb250ZW50fT5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuY29udGVudF9jb250YWluZXJ9PlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMudG9wfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGltZ1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc3JjPXtjbG9zZVZlY3Rvci5zcmN9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBhbHQ9XCJcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgb25DbGljaz17KCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uTW9kYWxDbG9zZSgpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignYm9keScpLnN0eWxlLm92ZXJmbG93ID0gJ3Zpc2libGUnXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMucm93c30+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnRhY3RzX2RhdGEubWFwKGVsID0+IChcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLnJvd30ga2V5PXtNYXRoLnJhbmRvbSgpfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5pbWd9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGltZyBzcmM9e2VsLmljb259IGFsdD1cImNvbnRhY3QtaWNvblwiIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLnRleHR9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGEgaHJlZj17ZWwudXJsfSB0YXJnZXQ9XCJfYmxhbmtcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGVsLnRleHRcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2E+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgKSlcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwvTW9kYWw+XHJcbiAgICApXHJcbn1cclxuIiwiaW1wb3J0IHBob25lIGZyb20gJy9wdWJsaWMvaW1hZ2VzL2hlYWRlci9Tb2NpYWxNZWRpYS9waG9uZS5zdmcnXHJcbmltcG9ydCBmYWNlYm9vayBmcm9tICcvcHVibGljL2ltYWdlcy9oZWFkZXIvU29jaWFsTWVkaWEvZmFjZWJvb2suc3ZnJ1xyXG5pbXBvcnQgdGVsZWdyYW0gZnJvbSAnL3B1YmxpYy9pbWFnZXMvaGVhZGVyL1NvY2lhbE1lZGlhL3RlbGVncmFtLnN2ZydcclxuaW1wb3J0IHdhdHN1cCBmcm9tICcvcHVibGljL2ltYWdlcy9oZWFkZXIvU29jaWFsTWVkaWEvd2F0c3VwLnN2ZydcclxuaW1wb3J0IGluc3RhZ3JhbSBmcm9tICcvcHVibGljL2ltYWdlcy9oZWFkZXIvU29jaWFsTWVkaWEvaW5zdGFncmFtLnN2ZydcclxuaW1wb3J0IHZpYmVyIGZyb20gJy9wdWJsaWMvaW1hZ2VzL2hlYWRlci9Tb2NpYWxNZWRpYS92aWJlci5zdmcnXHJcbmltcG9ydCBlbWFpbCBmcm9tICcvcHVibGljL2ltYWdlcy9oZWFkZXIvU29jaWFsTWVkaWEvZW1haWwuc3ZnJ1xyXG5cclxuZXhwb3J0IGNvbnN0IGNvbnRhY3RzX2RhdGEgPSBbXHJcbiAgICB7XHJcbiAgICAgICAgaWNvbjogcGhvbmUuc3JjLFxyXG4gICAgICAgIHVybDogXCJ0ZWw6KzM0NjcyMzE0ODA4XCIsXHJcbiAgICAgICAgdGV4dDogXCIrMzQgNjcyIDMxNCA4MDhcIlxyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgICBpY29uOiBmYWNlYm9vay5zcmMsXHJcbiAgICAgICAgdXJsOiBcImh0dHBzOi8vd3d3LmZhY2Vib29rLmNvbS8lRDAlOUYlRDElODAlRDAlQkUlRDAlQjMlRDAlQkQlRDAlQkUlRDAlQjclRDElOEItJUQwJUJEJUQwJUIwLSVEMCVBNCVEMSU4MyVEMSU4MiVEMCVCMSVEMCVCRSVEMCVCQi0xMDQ5NDEzNDc1Nzc5MTMvXCIsXHJcbiAgICAgICAgdGV4dDogXCJGYWNlYm9va1wiXHJcbiAgICB9XHJcbiAgICAsXHJcbiAgICB7XHJcbiAgICAgICAgaWNvbjogdGVsZWdyYW0uc3JjLFxyXG4gICAgICAgIHVybDogXCJodHRwczovL3RlbGVncmFtLm1lL2Zvb3RiZXQyNGNvbVwiLFxyXG4gICAgICAgIHRleHQ6IFwiQGZvb3RiZXQyNGNvbVwiXHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICAgIGljb246IHdhdHN1cC5zcmMsXHJcbiAgICAgICAgdXJsOiBcImh0dHBzOi8vYXBpLndoYXRzYXBwLmNvbS9zZW5kP3Bob25lPSszNDY3MjMxNDgwOFwiLFxyXG4gICAgICAgIHRleHQ6IFwiKzM0IDY3MiAzMTQgODA4XCJcclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgICAgaWNvbjogaW5zdGFncmFtLnNyYyxcclxuICAgICAgICB1cmw6IFwiaHR0cHM6Ly93d3cuaW5zdGFncmFtLmNvbS9wcm9nbm96eW5hNTUwLz91dG1fbWVkaXVtPWNvcHlfbGlua1wiLFxyXG4gICAgICAgIHRleHQ6IFwiSW5zdGFncmFtXCJcclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgICAgaWNvbjogdmliZXIuc3JjLFxyXG4gICAgICAgIHVybDogXCJ2aWJlcjovL2NoYXQ/bnVtYmVyPSszNDY3MjMxNDgwOFwiLFxyXG4gICAgICAgIHRleHQ6IFwiKzM0IDY3MiAzMTQgODA4XCJcclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgICAgaWNvbjogZW1haWwuc3JjLFxyXG4gICAgICAgIHVybDogXCJtYWlsdG86bi54YWNoMTk4N0BtYWlsLnJ1XCIsXHJcbiAgICAgICAgdGV4dDogXCJuLnhhY2gxOTg3QG1haWwucnVcIlxyXG4gICAgfVxyXG5dIiwiaW1wb3J0IHN0eWxlcyBmcm9tICcuL0lucHV0Q29udGFpbmVyLm1vZHVsZS5zY3NzJ1xyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIElucHV0Q29udGFpbmVyKHtcclxuICAgIGxhYmVsLFxyXG4gICAgaWQsXHJcbiAgICB0eXBlLFxyXG4gICAgcGxhY2Vob2xkZXIsXHJcbiAgICBlcnJvcnMsXHJcbiAgICBvdGhlciB9KSB7XHJcblxyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmNvbnRhaW5lcn0+XHJcbiAgICAgICAgICAgIHtsYWJlbCAmJlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5sYWJlbF9jb250ZW50fT5cclxuICAgICAgICAgICAgICAgICAgICA8bGFiZWwgaHRtbEZvcj17aWR9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8aW1nXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzcmM9e2xhYmVsLnNyY31cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFsdD1cImljb25cIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvbGFiZWw+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmlucHV0X2NvbnRhaW5lcn0+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17ZXJyb3JzID8gc3R5bGVzLmlucHV0X2Vycm9yX2NvbnRlbnQgOiBzdHlsZXMuaW5wdXRfc3VjY2Vzc19jb250ZW50fT5cclxuICAgICAgICAgICAgICAgICAgICA8aW5wdXRcclxuICAgICAgICAgICAgICAgICAgICAgICAgaWQ9e2lkfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICB0eXBlPXt0eXBlfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBwbGFjZWhvbGRlcj17cGxhY2Vob2xkZXJ9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHsuLi5vdGhlcn1cclxuICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgKVxyXG59XHJcbiIsImltcG9ydCB7IHVzZUVmZmVjdCwgdXNlU3RhdGUsIHVzZVJlZiB9IGZyb20gJ3JlYWN0J1xyXG5pbXBvcnQgc3R5bGVzIGZyb20gJy4vTW9kYWwubW9kdWxlLnNjc3MnXHJcbmltcG9ydCB7IGNyZWF0ZVBvcnRhbCB9IGZyb20gJ3JlYWN0LWRvbSdcclxuXHJcblxyXG5jb25zdFxyXG4gICAgaGFuZGxlX292ZXJmbG93X29uX29wZW4gPSAoKSA9PiB7XHJcbiAgICAgICAgZG9jdW1lbnQuYm9keS5zdHlsZS5vdmVyZmxvd1kgPSAnc2Nyb2xsJ1xyXG4gICAgICAgIGRvY3VtZW50LmJvZHkuc3R5bGUucG9zaXRpb24gPSAnZml4ZWQnXHJcbiAgICAgICAgZG9jdW1lbnQuYm9keS5zdHlsZS53aWR0aCA9ICcxMDAlJ1xyXG4gICAgfSxcclxuICAgIGhhbmRsZV9vdmVyZmxvd19vbl9jbG9zZSA9ICgpID0+IHtcclxuICAgICAgICBkb2N1bWVudC5ib2R5LnN0eWxlLm92ZXJmbG93WSA9ICdzY3JvbGwnXHJcbiAgICAgICAgZG9jdW1lbnQuYm9keS5zdHlsZS5wb3NpdGlvbiA9ICdzdGF0aWMnXHJcbiAgICAgICAgZG9jdW1lbnQuYm9keS5zdHlsZS53aWR0aCA9ICdhdXRvJ1xyXG4gICAgfVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIE1vZGFsKHtcclxuICAgIG9uQ2xvc2UsXHJcbiAgICAvLyBjbG9zZVdpdGhWZWN0b3JlID0gbnVsbCxcclxuICAgIGNoaWxkcmVuLFxyXG4gICAgY29udGFpbmVyU3R5bGVzID0gbnVsbCxcclxuICAgIGNvbnRlbnRTdHlsZXMgPSBudWxsLFxyXG4gICAgb3RoZXJTdHlsZXMgPSBudWxsLFxyXG4gICAgcG9ydGFsTG9jYXRpb24gPSAnbW9kYWwtY29udGVpbmVyJyB9KSB7XHJcblxyXG5cclxuXHJcbiAgICBjb25zdFxyXG4gICAgICAgIFtzaG93TW9kYWwsIHNldFNob3dNb2RhbF0gPSB1c2VTdGF0ZShmYWxzZSlcclxuXHJcbiAgICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgICAgIHNldFNob3dNb2RhbCh0cnVlKVxyXG4gICAgICAgIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoXCJtb3VzZWRvd25cIiwgaGFuZGxlQ2xvc2UpO1xyXG5cclxuICAgICAgICByZXR1cm4gKCkgPT4ge1xyXG4gICAgICAgICAgICBoYW5kbGVfb3ZlcmZsb3dfb25fY2xvc2UoKTtcclxuICAgICAgICAgICAgZG9jdW1lbnQucmVtb3ZlRXZlbnRMaXN0ZW5lcihcIm1vdXNlZG93blwiLCBoYW5kbGVDbG9zZSk7XHJcbiAgICAgICAgfTtcclxuICAgIH0sIFtoYW5kbGVDbG9zZV0pXHJcblxyXG4gICAgY29uc3Qgbm9kZSA9IHVzZVJlZigpXHJcblxyXG4gICAgY29uc3QgaGFuZGxlQ2xvc2UgPSBlID0+IHtcclxuICAgICAgICBpZiAobm9kZT8uY3VycmVudD8uY29udGFpbnMoZS50YXJnZXQpKSB7XHJcbiAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICBvbkNsb3NlKClcclxuICAgICAgICB9XHJcbiAgICB9LFxyXG4gICAgICAgIGRpbmFtaWNUb3AgPSB3aW5kb3cuc2Nyb2xsWVxyXG5cclxuICAgIHNob3dNb2RhbCA/IGhhbmRsZV9vdmVyZmxvd19vbl9vcGVuKCkgOiBoYW5kbGVfb3ZlcmZsb3dfb25fY2xvc2UoKVxyXG5cclxuICAgIGNvbnN0IG1vZGFsID0gKFxyXG4gICAgICAgIDxkaXZcclxuICAgICAgICAgICAgY2xhc3NOYW1lPXtgJHtzdHlsZXMubW9kYWxDb250ZWluZXJ9ICR7Y29udGFpbmVyU3R5bGVzfWB9XHJcbiAgICAgICAgICAgIHN0eWxlPXt7XHJcbiAgICAgICAgICAgICAgICB0b3A6ICcwcHgnLFxyXG4gICAgICAgICAgICAgICAgcG9zaXRpb246ICdmaXhlZCAhaW1wb3J0YW50J1xyXG4gICAgICAgICAgICB9fT5cclxuICAgICAgICAgICAgPGRpdlxyXG4gICAgICAgICAgICAgICAgY2xhc3NOYW1lPXtgJHtzdHlsZXMubW9kYWxDb250ZW50fSAke2NvbnRlbnRTdHlsZXN9YH1cclxuICAgICAgICAgICAgICAgIHN0eWxlPXtvdGhlclN0eWxlc31cclxuICAgICAgICAgICAgICAgIHJlZj17bm9kZX1cclxuICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgIGNoaWxkcmVuXHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgKVxyXG4gICAgaWYgKHNob3dNb2RhbCkge1xyXG4gICAgICAgIHJldHVybiBjcmVhdGVQb3J0YWwoXHJcbiAgICAgICAgICAgIG1vZGFsLFxyXG4gICAgICAgICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChwb3J0YWxMb2NhdGlvbilcclxuICAgICAgICApXHJcbiAgICB9XHJcbiAgICBlbHNlIHJldHVybiBudWxsXHJcbn1cclxuIiwiZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gRXJyb3IoeyBjaGlsZHJlbiB9KSB7XHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIDw+XHJcbiAgICAgICAgICAgIDxtYWluPlxyXG4gICAgICAgICAgICAgICAge2NoaWxkcmVufVxyXG4gICAgICAgICAgICA8L21haW4+XHJcbiAgICAgICAgPC8+XHJcbiAgICApXHJcbn1cclxuIiwiaW1wb3J0IHsgRm9vdGVyIH0gZnJvbSAnLi4vY29tcG9uZW50cy9Gb290ZXIvRm9vdGVyJ1xyXG5pbXBvcnQgeyBIZWFkZXIgfSBmcm9tICcuLi9jb21wb25lbnRzL0hlYWRlci9IZWFkZXInXHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBNYWluKHsgY2hpbGRyZW4gfSkge1xyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8PlxyXG4gICAgICAgICAgICA8SGVhZGVyIG1haW5zUGFnZXM9e3RydWV9IC8+XHJcbiAgICAgICAgICAgIDxtYWluPlxyXG4gICAgICAgICAgICAgICAge2NoaWxkcmVufVxyXG4gICAgICAgICAgICA8L21haW4+XHJcbiAgICAgICAgICAgIDxGb290ZXIgLz5cclxuICAgICAgICA8Lz5cclxuICAgIClcclxufVxyXG4iLCJpbXBvcnQgeyBIZWFkZXIgfSBmcm9tICcuLi9jb21wb25lbnRzL0hlYWRlci9IZWFkZXInXHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBSZWdpc3RlckxheW91dCh7IGNoaWxkcmVuIH0pIHtcclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPD5cclxuICAgICAgICAgICAgPEhlYWRlciBtYWluc1BhZ2VzPXtmYWxzZX0vPlxyXG4gICAgICAgICAgICA8bWFpbj5cclxuICAgICAgICAgICAgICAgIHtjaGlsZHJlbn1cclxuICAgICAgICAgICAgPC9tYWluPlxyXG4gICAgICAgIDwvPlxyXG4gICAgKVxyXG59XHJcbiIsImltcG9ydCB7IEZvb3RlciB9IGZyb20gJy4uL2NvbXBvbmVudHMvRm9vdGVyL0Zvb3RlcidcclxuaW1wb3J0IHsgSGVhZGVyIH0gZnJvbSAnLi4vY29tcG9uZW50cy9IZWFkZXIvSGVhZGVyJ1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gTWFpbih7IGNoaWxkcmVuIH0pIHtcclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPD5cclxuICAgICAgICAgICAgPEhlYWRlciBtYWluc1BhZ2VzPXtmYWxzZX0gLz5cclxuICAgICAgICAgICAgPG1haW4+XHJcbiAgICAgICAgICAgICAgICB7Y2hpbGRyZW59XHJcbiAgICAgICAgICAgIDwvbWFpbj5cclxuICAgICAgICAgICAgPEZvb3RlciAvPlxyXG4gICAgICAgIDwvPlxyXG4gICAgKVxyXG59XHJcbiIsImltcG9ydCBNYWluIGZyb20gXCIuL01haW5cIjtcclxuaW1wb3J0IFdpdGhvdXRQaG90byBmcm9tIFwiLi9XaXRob3V0UGhvdG9cIjtcclxuaW1wb3J0IFJlZ2lzdGVyIGZyb20gXCIuL1JlZ2lzdGVyXCI7XHJcbmltcG9ydCBFcnJvciBmcm9tIFwiLi9FcnJvclwiXHJcblxyXG5jb25zdCBsYXlvdXRzID0ge1xyXG4gIG1haW46IE1haW4sXHJcbiAgd2l0aG91dFBob3RvOiBXaXRob3V0UGhvdG8sXHJcbiAgcmVnaXN0ZXI6IFJlZ2lzdGVyXHJcbn07XHJcblxyXG5jb25zdCBMYXlvdXRXcmFwcGVyID0gKHByb3BzKSA9PiB7XHJcbiAgLy8gdG8gZ2V0IHRoZSB0ZXh0IHZhbHVlIG9mIHRoZSBhc3NpZ25lZCBsYXlvdXQgb2YgZWFjaCBjb21wb25lbnRcclxuICBjb25zdCBMYXlvdXQgPSBsYXlvdXRzW3Byb3BzLmNoaWxkcmVuLnR5cGUubGF5b3V0XTtcclxuICAvLyBpZiB3ZSBoYXZlIGEgcmVnaXN0ZXJlZCBsYXlvdXQgcmVuZGVyIGNoaWxkcmVuIHdpdGggc2FpZCBsYXlvdXRcclxuICBpZiAoTGF5b3V0ICE9IG51bGwpIHtcclxuICAgIHJldHVybiA8TGF5b3V0IHsuLi5wcm9wc30+e3Byb3BzLmNoaWxkcmVufTwvTGF5b3V0PjtcclxuICB9XHJcbiAgLy8gaWYgbm90IHJlbmRlciBjaGlsZHJlbiB3aXRoIGZyYWdtZW50XHJcbiAgcmV0dXJuIDxFcnJvciB7Li4ucHJvcHN9Pntwcm9wcy5jaGlsZHJlbn08L0Vycm9yPjtcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IExheW91dFdyYXBwZXI7XHJcbiIsImV4cG9ydCBjb25zdCBob3N0ID0gXCJodHRwczovL3d3dy5mb290YmV0MjQuY29tL2FwaVwiO1xyXG4iLCJpbXBvcnQgYXhpb3MgZnJvbSBcImF4aW9zXCI7XHJcblxyXG5cclxuZXhwb3J0IGNvbnN0IHJlcXVlc3QgPSAoIGRlc3RpbmF0aW9uLCBwYXlsb2FkID0gbnVsbCwgb3B0aW9ucyA9IG51bGwgKSA9PiBuZXcgUHJvbWlzZSggKCByc2x2LCByamN0ICkgPT4ge1xyXG4gIGxldCBoZWFkZXJzID0ge307XHJcblxyXG4gIGlmICggb3B0aW9ucyApIHtcclxuICAgIGlmICggb3B0aW9ucy5hdXRoID09PSB0cnVlICkge1xyXG4gICAgICBoZWFkZXJzID0ge1xyXG4gICAgICAgIC4uLmhlYWRlcnMsXHJcbiAgICAgICAgQXV0aG9yaXphdGlvbjogYEJlYXJlciAke2dldENvb2tpZShgYWNjZXNzLXRva2VuYCl9YCB8fCBgYCAvLyBmb3IgbW9zdCBvZiByZXF1ZXN0c1xyXG4gICAgICB9O1xyXG4gICAgfVxyXG4gICAgaWYgKCBgaGVhZGVyc2AgaW4gb3B0aW9ucyAmJiBvcHRpb25zLmhlYWRlcnMgaW5zdGFuY2VvZiBPYmplY3QgKSB7XHJcbiAgICAgIGhlYWRlcnMgPSB7IC4uLmhlYWRlcnMsIC4uLm9wdGlvbnMuaGVhZGVycyB9XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBjb25zb2xlLmxvZyggYHN0YXJ0IGxvYWRpbmdgICk7XHJcbiAgYXhpb3Moe1xyXG4gICAgbWV0aG9kOiBkZXN0aW5hdGlvbi5tZXRob2QsXHJcbiAgICB1cmw6IGRlc3RpbmF0aW9uLnVybCxcclxuICAgIGhlYWRlcnMsXHJcbiAgICBkYXRhOiBwYXlsb2FkIHx8IHt9XHJcbiAgfSlcclxuICAudGhlbiggcnNsdiApXHJcbiAgLmNhdGNoKCByamN0IClcclxuICAuZmluYWxseSggKCkgPT4gY29uc29sZS5sb2coIGBlbmQgbG9hZGluZ2AgKSApXHJcblxyXG59KTtcclxuXHJcbmV4cG9ydCBjb25zdCBnZXRDb29raWUgPSBuYW1lID0+IHtcclxuICB2YXIgbmFtZUVRID0gbmFtZSArIFwiPVwiO1xyXG4gIHZhciBjYSA9IGRvY3VtZW50LmNvb2tpZS5zcGxpdCgnOycpO1xyXG5cclxuICBmb3IgKHZhciBpID0gMDsgaSA8IGNhLmxlbmd0aDsgaSsrKSB7XHJcbiAgICB2YXIgYyA9IGNhW2ldO1xyXG5cclxuICAgIHdoaWxlIChjLmNoYXJBdCgwKSA9PSAnICcpIHtcclxuICAgICAgYyA9IGMuc3Vic3RyaW5nKDEsIGMubGVuZ3RoKTtcclxuICAgIH1cclxuXHJcbiAgICBpZiAoYy5pbmRleE9mKG5hbWVFUSkgPT0gMCkgcmV0dXJuIGMuc3Vic3RyaW5nKG5hbWVFUS5sZW5ndGgsIGMubGVuZ3RoKTtcclxuICB9XHJcblxyXG4gIHJldHVybiBudWxsO1xyXG59XHJcblxyXG5leHBvcnQgY29uc3QgcmVtb3ZlQ29va2llID0gbmFtZSA9PiB7XHJcbiAgZG9jdW1lbnQuY29va2llID0gbmFtZSArICc9OyBQYXRoPS87IEV4cGlyZXM9VGh1LCAwMSBKYW4gMTk3MCAwMDowMDowMSBHTVQ7JztcclxufVxyXG5cclxuXHJcbmV4cG9ydCBjb25zdCBzZXRDb29raWUgPSAobmFtZSwgdmFsdWUsIGRheXMpID0+IHtcclxuICBsZXQgZXhwaXJlcyA9IFwiXCI7XHJcblxyXG4gIGlmIChkYXlzKSB7XHJcbiAgICBsZXQgZGF0ZSA9IG5ldyBEYXRlKCk7XHJcbiAgICBkYXRlLnNldFRpbWUoZGF0ZS5nZXRUaW1lKCkgKyBkYXlzICogMjQgKiA2MCAqIDYwICogMTAwMCk7XHJcbiAgICBleHBpcmVzID0gXCI7IGV4cGlyZXM9XCIgKyBkYXRlLnRvVVRDU3RyaW5nKCk7XHJcbiAgfVxyXG5cclxuICBkb2N1bWVudC5jb29raWUgPSBuYW1lICsgXCI9XCIgKyAodmFsdWUgfHwgXCJcIikgKyBleHBpcmVzICsgXCI7IHBhdGg9L1wiO1xyXG59XHJcbiIsImltcG9ydCB7aG9zdH0gZnJvbSBcIi4vY29uc3RhbnRzXCJcclxuXHJcbmNvbnN0IEFVVEhfVVJMID0gaG9zdCArIGBhdXRoL2A7XHJcbmNvbnN0IEFDQ09VTlRfVVJMID0gaG9zdCArIGBhY2NvdW50L2BcclxuXHJcbmV4cG9ydCBjb25zdCBSRUdJU1RFUiA9IHtcclxuICB1cmw6IEFVVEhfVVJMICsgJ3JlZ2lzdHJhdGlvbicsXHJcbiAgbWV0aG9kOiAncG9zdCdcclxufVxyXG5cclxuZXhwb3J0IGNvbnN0IExPR0lOID0ge1xyXG4gIHVybDogQVVUSF9VUkwgKyAnbG9naW4nLFxyXG4gIG1ldGhvZDogJ3Bvc3QnXHJcbn1cclxuXHJcbmV4cG9ydCBjb25zdCBHRVRfQUNDT1VOVF9JTkZPID0ge1xyXG4gIHVybDogQUNDT1VOVF9VUkwgKyAnaW5mbycsXHJcbiAgbWV0aG9kOiAnZ2V0J1xyXG59XHJcblxyXG5leHBvcnQgY29uc3QgQ0hBTkdFX0FDQ09VTlRfSU5GTyA9IHtcclxuICB1cmw6IEFDQ09VTlRfVVJMICsgJ2luZm8nLFxyXG4gIG1ldGhvZDogJ3B1dCdcclxufVxyXG5cclxuZXhwb3J0IGNvbnN0IENIQU5HRV9BQ0NPVU5UX0lNQUdFID0ge1xyXG4gIHVybDogQUNDT1VOVF9VUkwgKyAncHJvZmlsZS1pbWFnZScsXHJcbiAgbWV0aG9kOiAncG9zdCdcclxufVxyXG5cclxuZXhwb3J0IGNvbnN0IFNUQVJUX1JFU0VUX1BBU1NXT1JEID0gZW1haWwgPT4gKHtcclxuICB1cmw6IEFVVEhfVVJMICsgYHBhc3N3b3JkL3Jlc2V0P2VtYWlsPSR7ZW1haWx9YCxcclxuICBtZXRob2Q6ICdwb3N0J1xyXG59KVxyXG5cclxuXHJcbmV4cG9ydCBjb25zdCBWRVJJRllfUEFTU1dPUkRfUkVTRVQgPSB7XHJcbiAgdXJsOiBBVVRIX1VSTCArIGBwYXNzd29yZC92ZXJpZnlfY29kZWAsXHJcbiAgbWV0aG9kOiAncHV0J1xyXG59XHJcblxyXG5leHBvcnQgY29uc3QgU0VUX05FV19QQVNTV09SRCA9IHtcclxuICB1cmw6IEFVVEhfVVJMICsgYHBhc3N3b3JkL25ld19wYXNzd29yZCBgLFxyXG4gIG1ldGhvZDogJ3B1dCdcclxufVxyXG5cclxuZXhwb3J0IGNvbnN0IEdFVF9ORVdTID0ge1xyXG4gIHVybDogQUNDT1VOVF9VUkwgKyBgbmV3c2AsXHJcbiAgbWV0aG9kOiBgZ2V0YFxyXG59XHJcblxyXG5leHBvcnQgY29uc3QgR0VUX01BVENIRVMgPSB7XHJcbiAgdXJsOiBBQ0NPVU5UX1VSTCArIGBtYXRjaC1vZi10aGUtZGF5YCxcclxuICBtZXRob2Q6IGBnZXRgXHJcbn1cclxuXHJcbmV4cG9ydCBjb25zdCBHRVRfTUFUQ0hFU19PRl9ORVhUX0RBWSA9IHtcclxuICB1cmw6IEFDQ09VTlRfVVJMICsgYG1hdGNoLW9mLXRoZS1kYXk/dHlwZT1uZXh0X2RheWAsXHJcbiAgbWV0aG9kOiBgZ2V0YFxyXG59XHJcblxyXG5leHBvcnQgY29uc3QgR0VUX1BSRURJQ1RJT05TID0ge1xyXG4gIHVybDogQUNDT1VOVF9VUkwgKyBgcHJlZGljdGlvbmAsXHJcbiAgbWV0aG9kOiBgZ2V0YFxyXG59XHJcblxyXG5leHBvcnQgY29uc3QgR0VUX0ZFRURCQUNLID0gaWQgPT4gKHtcclxuICB1cmw6IGhvc3QgKyBgZmVlZGJhY2svJHtpZH0/c29ydF9ieT1jcmVhdGVkX2F0Jm9yZGVyX2J5PWRlc2NgLFxyXG4gIG1ldGhvZDogYGdldGBcclxufSlcclxuXHJcbmV4cG9ydCBjb25zdCBHRVRfTUFUQ0hFU19CWV9UWVBFID0gdHlwZSA9PiAoe1xyXG4gIHVybDogQUNDT1VOVF9VUkwgKyBgZ2FtZT90eXBlPSR7dHlwZX1gLFxyXG4gIG1ldGhvZDogYGdldGBcclxufSlcclxuXHJcbmV4cG9ydCBjb25zdCBBRERfRkVFREJBQ0sgPSB7XHJcbiAgdXJsOiBob3N0ICsgYGZlZWRiYWNrYCxcclxuICBtZXRob2Q6IGBwb3N0YFxyXG59XHJcbiIsIlwidXNlIHN0cmljdFwiO3ZhciBfaW50ZXJvcFJlcXVpcmVXaWxkY2FyZD1yZXF1aXJlKFwiQGJhYmVsL3J1bnRpbWUvaGVscGVycy9pbnRlcm9wUmVxdWlyZVdpbGRjYXJkXCIpO2V4cG9ydHMuX19lc01vZHVsZT10cnVlO2V4cG9ydHMuZGVmYXVsdD12b2lkIDA7dmFyIF9yZWFjdD1faW50ZXJvcFJlcXVpcmVXaWxkY2FyZChyZXF1aXJlKFwicmVhY3RcIikpO3ZhciBfcm91dGVyPXJlcXVpcmUoXCIuLi9uZXh0LXNlcnZlci9saWIvcm91dGVyL3JvdXRlclwiKTt2YXIgX3JvdXRlcjI9cmVxdWlyZShcIi4vcm91dGVyXCIpO3ZhciBfdXNlSW50ZXJzZWN0aW9uPXJlcXVpcmUoXCIuL3VzZS1pbnRlcnNlY3Rpb25cIik7Y29uc3QgcHJlZmV0Y2hlZD17fTtmdW5jdGlvbiBwcmVmZXRjaChyb3V0ZXIsaHJlZixhcyxvcHRpb25zKXtpZih0eXBlb2Ygd2luZG93PT09J3VuZGVmaW5lZCd8fCFyb3V0ZXIpcmV0dXJuO2lmKCEoMCxfcm91dGVyLmlzTG9jYWxVUkwpKGhyZWYpKXJldHVybjsvLyBQcmVmZXRjaCB0aGUgSlNPTiBwYWdlIGlmIGFza2VkIChvbmx5IGluIHRoZSBjbGllbnQpXG4vLyBXZSBuZWVkIHRvIGhhbmRsZSBhIHByZWZldGNoIGVycm9yIGhlcmUgc2luY2Ugd2UgbWF5IGJlXG4vLyBsb2FkaW5nIHdpdGggcHJpb3JpdHkgd2hpY2ggY2FuIHJlamVjdCBidXQgd2UgZG9uJ3Rcbi8vIHdhbnQgdG8gZm9yY2UgbmF2aWdhdGlvbiBzaW5jZSB0aGlzIGlzIG9ubHkgYSBwcmVmZXRjaFxucm91dGVyLnByZWZldGNoKGhyZWYsYXMsb3B0aW9ucykuY2F0Y2goZXJyPT57aWYocHJvY2Vzcy5lbnYuTk9ERV9FTlYhPT0ncHJvZHVjdGlvbicpey8vIHJldGhyb3cgdG8gc2hvdyBpbnZhbGlkIFVSTCBlcnJvcnNcbnRocm93IGVycjt9fSk7Y29uc3QgY3VyTG9jYWxlPW9wdGlvbnMmJnR5cGVvZiBvcHRpb25zLmxvY2FsZSE9PSd1bmRlZmluZWQnP29wdGlvbnMubG9jYWxlOnJvdXRlciYmcm91dGVyLmxvY2FsZTsvLyBKb2luIG9uIGFuIGludmFsaWQgVVJJIGNoYXJhY3RlclxucHJlZmV0Y2hlZFtocmVmKyclJythcysoY3VyTG9jYWxlPyclJytjdXJMb2NhbGU6JycpXT10cnVlO31mdW5jdGlvbiBpc01vZGlmaWVkRXZlbnQoZXZlbnQpe2NvbnN0e3RhcmdldH09ZXZlbnQuY3VycmVudFRhcmdldDtyZXR1cm4gdGFyZ2V0JiZ0YXJnZXQhPT0nX3NlbGYnfHxldmVudC5tZXRhS2V5fHxldmVudC5jdHJsS2V5fHxldmVudC5zaGlmdEtleXx8ZXZlbnQuYWx0S2V5fHwvLyB0cmlnZ2VycyByZXNvdXJjZSBkb3dubG9hZFxuZXZlbnQubmF0aXZlRXZlbnQmJmV2ZW50Lm5hdGl2ZUV2ZW50LndoaWNoPT09Mjt9ZnVuY3Rpb24gbGlua0NsaWNrZWQoZSxyb3V0ZXIsaHJlZixhcyxyZXBsYWNlLHNoYWxsb3csc2Nyb2xsLGxvY2FsZSl7Y29uc3R7bm9kZU5hbWV9PWUuY3VycmVudFRhcmdldDtpZihub2RlTmFtZT09PSdBJyYmKGlzTW9kaWZpZWRFdmVudChlKXx8ISgwLF9yb3V0ZXIuaXNMb2NhbFVSTCkoaHJlZikpKXsvLyBpZ25vcmUgY2xpY2sgZm9yIGJyb3dzZXLigJlzIGRlZmF1bHQgYmVoYXZpb3JcbnJldHVybjt9ZS5wcmV2ZW50RGVmYXVsdCgpOy8vICBhdm9pZCBzY3JvbGwgZm9yIHVybHMgd2l0aCBhbmNob3IgcmVmc1xuaWYoc2Nyb2xsPT1udWxsJiZhcy5pbmRleE9mKCcjJyk+PTApe3Njcm9sbD1mYWxzZTt9Ly8gcmVwbGFjZSBzdGF0ZSBpbnN0ZWFkIG9mIHB1c2ggaWYgcHJvcCBpcyBwcmVzZW50XG5yb3V0ZXJbcmVwbGFjZT8ncmVwbGFjZSc6J3B1c2gnXShocmVmLGFzLHtzaGFsbG93LGxvY2FsZSxzY3JvbGx9KTt9ZnVuY3Rpb24gTGluayhwcm9wcyl7aWYocHJvY2Vzcy5lbnYuTk9ERV9FTlYhPT0ncHJvZHVjdGlvbicpe2Z1bmN0aW9uIGNyZWF0ZVByb3BFcnJvcihhcmdzKXtyZXR1cm4gbmV3IEVycm9yKGBGYWlsZWQgcHJvcCB0eXBlOiBUaGUgcHJvcCBcXGAke2FyZ3Mua2V5fVxcYCBleHBlY3RzIGEgJHthcmdzLmV4cGVjdGVkfSBpbiBcXGA8TGluaz5cXGAsIGJ1dCBnb3QgXFxgJHthcmdzLmFjdHVhbH1cXGAgaW5zdGVhZC5gKyh0eXBlb2Ygd2luZG93IT09J3VuZGVmaW5lZCc/XCJcXG5PcGVuIHlvdXIgYnJvd3NlcidzIGNvbnNvbGUgdG8gdmlldyB0aGUgQ29tcG9uZW50IHN0YWNrIHRyYWNlLlwiOicnKSk7fS8vIFR5cGVTY3JpcHQgdHJpY2sgZm9yIHR5cGUtZ3VhcmRpbmc6XG5jb25zdCByZXF1aXJlZFByb3BzR3VhcmQ9e2hyZWY6dHJ1ZX07Y29uc3QgcmVxdWlyZWRQcm9wcz1PYmplY3Qua2V5cyhyZXF1aXJlZFByb3BzR3VhcmQpO3JlcXVpcmVkUHJvcHMuZm9yRWFjaChrZXk9PntpZihrZXk9PT0naHJlZicpe2lmKHByb3BzW2tleV09PW51bGx8fHR5cGVvZiBwcm9wc1trZXldIT09J3N0cmluZycmJnR5cGVvZiBwcm9wc1trZXldIT09J29iamVjdCcpe3Rocm93IGNyZWF0ZVByb3BFcnJvcih7a2V5LGV4cGVjdGVkOidgc3RyaW5nYCBvciBgb2JqZWN0YCcsYWN0dWFsOnByb3BzW2tleV09PT1udWxsPydudWxsJzp0eXBlb2YgcHJvcHNba2V5XX0pO319ZWxzZXsvLyBUeXBlU2NyaXB0IHRyaWNrIGZvciB0eXBlLWd1YXJkaW5nOlxuLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIEB0eXBlc2NyaXB0LWVzbGludC9uby11bnVzZWQtdmFyc1xuY29uc3QgXz1rZXk7fX0pOy8vIFR5cGVTY3JpcHQgdHJpY2sgZm9yIHR5cGUtZ3VhcmRpbmc6XG5jb25zdCBvcHRpb25hbFByb3BzR3VhcmQ9e2FzOnRydWUscmVwbGFjZTp0cnVlLHNjcm9sbDp0cnVlLHNoYWxsb3c6dHJ1ZSxwYXNzSHJlZjp0cnVlLHByZWZldGNoOnRydWUsbG9jYWxlOnRydWV9O2NvbnN0IG9wdGlvbmFsUHJvcHM9T2JqZWN0LmtleXMob3B0aW9uYWxQcm9wc0d1YXJkKTtvcHRpb25hbFByb3BzLmZvckVhY2goa2V5PT57Y29uc3QgdmFsVHlwZT10eXBlb2YgcHJvcHNba2V5XTtpZihrZXk9PT0nYXMnKXtpZihwcm9wc1trZXldJiZ2YWxUeXBlIT09J3N0cmluZycmJnZhbFR5cGUhPT0nb2JqZWN0Jyl7dGhyb3cgY3JlYXRlUHJvcEVycm9yKHtrZXksZXhwZWN0ZWQ6J2BzdHJpbmdgIG9yIGBvYmplY3RgJyxhY3R1YWw6dmFsVHlwZX0pO319ZWxzZSBpZihrZXk9PT0nbG9jYWxlJyl7aWYocHJvcHNba2V5XSYmdmFsVHlwZSE9PSdzdHJpbmcnKXt0aHJvdyBjcmVhdGVQcm9wRXJyb3Ioe2tleSxleHBlY3RlZDonYHN0cmluZ2AnLGFjdHVhbDp2YWxUeXBlfSk7fX1lbHNlIGlmKGtleT09PSdyZXBsYWNlJ3x8a2V5PT09J3Njcm9sbCd8fGtleT09PSdzaGFsbG93J3x8a2V5PT09J3Bhc3NIcmVmJ3x8a2V5PT09J3ByZWZldGNoJyl7aWYocHJvcHNba2V5XSE9bnVsbCYmdmFsVHlwZSE9PSdib29sZWFuJyl7dGhyb3cgY3JlYXRlUHJvcEVycm9yKHtrZXksZXhwZWN0ZWQ6J2Bib29sZWFuYCcsYWN0dWFsOnZhbFR5cGV9KTt9fWVsc2V7Ly8gVHlwZVNjcmlwdCB0cmljayBmb3IgdHlwZS1ndWFyZGluZzpcbi8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBAdHlwZXNjcmlwdC1lc2xpbnQvbm8tdW51c2VkLXZhcnNcbmNvbnN0IF89a2V5O319KTsvLyBUaGlzIGhvb2sgaXMgaW4gYSBjb25kaXRpb25hbCBidXQgdGhhdCBpcyBvayBiZWNhdXNlIGBwcm9jZXNzLmVudi5OT0RFX0VOVmAgbmV2ZXIgY2hhbmdlc1xuLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIHJlYWN0LWhvb2tzL3J1bGVzLW9mLWhvb2tzXG5jb25zdCBoYXNXYXJuZWQ9X3JlYWN0LmRlZmF1bHQudXNlUmVmKGZhbHNlKTtpZihwcm9wcy5wcmVmZXRjaCYmIWhhc1dhcm5lZC5jdXJyZW50KXtoYXNXYXJuZWQuY3VycmVudD10cnVlO2NvbnNvbGUud2FybignTmV4dC5qcyBhdXRvLXByZWZldGNoZXMgYXV0b21hdGljYWxseSBiYXNlZCBvbiB2aWV3cG9ydC4gVGhlIHByZWZldGNoIGF0dHJpYnV0ZSBpcyBubyBsb25nZXIgbmVlZGVkLiBNb3JlOiBodHRwczovL25leHRqcy5vcmcvZG9jcy9tZXNzYWdlcy9wcmVmZXRjaC10cnVlLWRlcHJlY2F0ZWQnKTt9fWNvbnN0IHA9cHJvcHMucHJlZmV0Y2ghPT1mYWxzZTtjb25zdCByb3V0ZXI9KDAsX3JvdXRlcjIudXNlUm91dGVyKSgpO2NvbnN0e2hyZWYsYXN9PV9yZWFjdC5kZWZhdWx0LnVzZU1lbW8oKCk9Pntjb25zdFtyZXNvbHZlZEhyZWYscmVzb2x2ZWRBc109KDAsX3JvdXRlci5yZXNvbHZlSHJlZikocm91dGVyLHByb3BzLmhyZWYsdHJ1ZSk7cmV0dXJue2hyZWY6cmVzb2x2ZWRIcmVmLGFzOnByb3BzLmFzPygwLF9yb3V0ZXIucmVzb2x2ZUhyZWYpKHJvdXRlcixwcm9wcy5hcyk6cmVzb2x2ZWRBc3x8cmVzb2x2ZWRIcmVmfTt9LFtyb3V0ZXIscHJvcHMuaHJlZixwcm9wcy5hc10pO2xldHtjaGlsZHJlbixyZXBsYWNlLHNoYWxsb3csc2Nyb2xsLGxvY2FsZX09cHJvcHM7Ly8gRGVwcmVjYXRlZC4gV2FybmluZyBzaG93biBieSBwcm9wVHlwZSBjaGVjay4gSWYgdGhlIGNoaWxkcmVuIHByb3ZpZGVkIGlzIGEgc3RyaW5nICg8TGluaz5leGFtcGxlPC9MaW5rPikgd2Ugd3JhcCBpdCBpbiBhbiA8YT4gdGFnXG5pZih0eXBlb2YgY2hpbGRyZW49PT0nc3RyaW5nJyl7Y2hpbGRyZW49LyojX19QVVJFX18qL19yZWFjdC5kZWZhdWx0LmNyZWF0ZUVsZW1lbnQoXCJhXCIsbnVsbCxjaGlsZHJlbik7fS8vIFRoaXMgd2lsbCByZXR1cm4gdGhlIGZpcnN0IGNoaWxkLCBpZiBtdWx0aXBsZSBhcmUgcHJvdmlkZWQgaXQgd2lsbCB0aHJvdyBhbiBlcnJvclxubGV0IGNoaWxkO2lmKHByb2Nlc3MuZW52Lk5PREVfRU5WPT09J2RldmVsb3BtZW50Jyl7dHJ5e2NoaWxkPV9yZWFjdC5DaGlsZHJlbi5vbmx5KGNoaWxkcmVuKTt9Y2F0Y2goZXJyKXt0aHJvdyBuZXcgRXJyb3IoYE11bHRpcGxlIGNoaWxkcmVuIHdlcmUgcGFzc2VkIHRvIDxMaW5rPiB3aXRoIFxcYGhyZWZcXGAgb2YgXFxgJHtwcm9wcy5ocmVmfVxcYCBidXQgb25seSBvbmUgY2hpbGQgaXMgc3VwcG9ydGVkIGh0dHBzOi8vbmV4dGpzLm9yZy9kb2NzL21lc3NhZ2VzL2xpbmstbXVsdGlwbGUtY2hpbGRyZW5gKyh0eXBlb2Ygd2luZG93IT09J3VuZGVmaW5lZCc/XCJcXG5PcGVuIHlvdXIgYnJvd3NlcidzIGNvbnNvbGUgdG8gdmlldyB0aGUgQ29tcG9uZW50IHN0YWNrIHRyYWNlLlwiOicnKSk7fX1lbHNle2NoaWxkPV9yZWFjdC5DaGlsZHJlbi5vbmx5KGNoaWxkcmVuKTt9Y29uc3QgY2hpbGRSZWY9Y2hpbGQmJnR5cGVvZiBjaGlsZD09PSdvYmplY3QnJiZjaGlsZC5yZWY7Y29uc3Rbc2V0SW50ZXJzZWN0aW9uUmVmLGlzVmlzaWJsZV09KDAsX3VzZUludGVyc2VjdGlvbi51c2VJbnRlcnNlY3Rpb24pKHtyb290TWFyZ2luOicyMDBweCd9KTtjb25zdCBzZXRSZWY9X3JlYWN0LmRlZmF1bHQudXNlQ2FsbGJhY2soZWw9PntzZXRJbnRlcnNlY3Rpb25SZWYoZWwpO2lmKGNoaWxkUmVmKXtpZih0eXBlb2YgY2hpbGRSZWY9PT0nZnVuY3Rpb24nKWNoaWxkUmVmKGVsKTtlbHNlIGlmKHR5cGVvZiBjaGlsZFJlZj09PSdvYmplY3QnKXtjaGlsZFJlZi5jdXJyZW50PWVsO319fSxbY2hpbGRSZWYsc2V0SW50ZXJzZWN0aW9uUmVmXSk7KDAsX3JlYWN0LnVzZUVmZmVjdCkoKCk9Pntjb25zdCBzaG91bGRQcmVmZXRjaD1pc1Zpc2libGUmJnAmJigwLF9yb3V0ZXIuaXNMb2NhbFVSTCkoaHJlZik7Y29uc3QgY3VyTG9jYWxlPXR5cGVvZiBsb2NhbGUhPT0ndW5kZWZpbmVkJz9sb2NhbGU6cm91dGVyJiZyb3V0ZXIubG9jYWxlO2NvbnN0IGlzUHJlZmV0Y2hlZD1wcmVmZXRjaGVkW2hyZWYrJyUnK2FzKyhjdXJMb2NhbGU/JyUnK2N1ckxvY2FsZTonJyldO2lmKHNob3VsZFByZWZldGNoJiYhaXNQcmVmZXRjaGVkKXtwcmVmZXRjaChyb3V0ZXIsaHJlZixhcyx7bG9jYWxlOmN1ckxvY2FsZX0pO319LFthcyxocmVmLGlzVmlzaWJsZSxsb2NhbGUscCxyb3V0ZXJdKTtjb25zdCBjaGlsZFByb3BzPXtyZWY6c2V0UmVmLG9uQ2xpY2s6ZT0+e2lmKGNoaWxkLnByb3BzJiZ0eXBlb2YgY2hpbGQucHJvcHMub25DbGljaz09PSdmdW5jdGlvbicpe2NoaWxkLnByb3BzLm9uQ2xpY2soZSk7fWlmKCFlLmRlZmF1bHRQcmV2ZW50ZWQpe2xpbmtDbGlja2VkKGUscm91dGVyLGhyZWYsYXMscmVwbGFjZSxzaGFsbG93LHNjcm9sbCxsb2NhbGUpO319fTtjaGlsZFByb3BzLm9uTW91c2VFbnRlcj1lPT57aWYoISgwLF9yb3V0ZXIuaXNMb2NhbFVSTCkoaHJlZikpcmV0dXJuO2lmKGNoaWxkLnByb3BzJiZ0eXBlb2YgY2hpbGQucHJvcHMub25Nb3VzZUVudGVyPT09J2Z1bmN0aW9uJyl7Y2hpbGQucHJvcHMub25Nb3VzZUVudGVyKGUpO31wcmVmZXRjaChyb3V0ZXIsaHJlZixhcyx7cHJpb3JpdHk6dHJ1ZX0pO307Ly8gSWYgY2hpbGQgaXMgYW4gPGE+IHRhZyBhbmQgZG9lc24ndCBoYXZlIGEgaHJlZiBhdHRyaWJ1dGUsIG9yIGlmIHRoZSAncGFzc0hyZWYnIHByb3BlcnR5IGlzXG4vLyBkZWZpbmVkLCB3ZSBzcGVjaWZ5IHRoZSBjdXJyZW50ICdocmVmJywgc28gdGhhdCByZXBldGl0aW9uIGlzIG5vdCBuZWVkZWQgYnkgdGhlIHVzZXJcbmlmKHByb3BzLnBhc3NIcmVmfHxjaGlsZC50eXBlPT09J2EnJiYhKCdocmVmJ2luIGNoaWxkLnByb3BzKSl7Y29uc3QgY3VyTG9jYWxlPXR5cGVvZiBsb2NhbGUhPT0ndW5kZWZpbmVkJz9sb2NhbGU6cm91dGVyJiZyb3V0ZXIubG9jYWxlOy8vIHdlIG9ubHkgcmVuZGVyIGRvbWFpbiBsb2NhbGVzIGlmIHdlIGFyZSBjdXJyZW50bHkgb24gYSBkb21haW4gbG9jYWxlXG4vLyBzbyB0aGF0IGxvY2FsZSBsaW5rcyBhcmUgc3RpbGwgdmlzaXRhYmxlIGluIGRldmVsb3BtZW50L3ByZXZpZXcgZW52c1xuY29uc3QgbG9jYWxlRG9tYWluPXJvdXRlciYmcm91dGVyLmlzTG9jYWxlRG9tYWluJiYoMCxfcm91dGVyLmdldERvbWFpbkxvY2FsZSkoYXMsY3VyTG9jYWxlLHJvdXRlciYmcm91dGVyLmxvY2FsZXMscm91dGVyJiZyb3V0ZXIuZG9tYWluTG9jYWxlcyk7Y2hpbGRQcm9wcy5ocmVmPWxvY2FsZURvbWFpbnx8KDAsX3JvdXRlci5hZGRCYXNlUGF0aCkoKDAsX3JvdXRlci5hZGRMb2NhbGUpKGFzLGN1ckxvY2FsZSxyb3V0ZXImJnJvdXRlci5kZWZhdWx0TG9jYWxlKSk7fXJldHVybi8qI19fUFVSRV9fKi9fcmVhY3QuZGVmYXVsdC5jbG9uZUVsZW1lbnQoY2hpbGQsY2hpbGRQcm9wcyk7fXZhciBfZGVmYXVsdD1MaW5rO2V4cG9ydHMuZGVmYXVsdD1fZGVmYXVsdDtcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWxpbmsuanMubWFwIiwiXCJ1c2Ugc3RyaWN0XCI7ZXhwb3J0cy5fX2VzTW9kdWxlPXRydWU7ZXhwb3J0cy5yZW1vdmVQYXRoVHJhaWxpbmdTbGFzaD1yZW1vdmVQYXRoVHJhaWxpbmdTbGFzaDtleHBvcnRzLm5vcm1hbGl6ZVBhdGhUcmFpbGluZ1NsYXNoPXZvaWQgMDsvKipcbiAqIFJlbW92ZXMgdGhlIHRyYWlsaW5nIHNsYXNoIG9mIGEgcGF0aCBpZiB0aGVyZSBpcyBvbmUuIFByZXNlcnZlcyB0aGUgcm9vdCBwYXRoIGAvYC5cbiAqL2Z1bmN0aW9uIHJlbW92ZVBhdGhUcmFpbGluZ1NsYXNoKHBhdGgpe3JldHVybiBwYXRoLmVuZHNXaXRoKCcvJykmJnBhdGghPT0nLyc/cGF0aC5zbGljZSgwLC0xKTpwYXRoO30vKipcbiAqIE5vcm1hbGl6ZXMgdGhlIHRyYWlsaW5nIHNsYXNoIG9mIGEgcGF0aCBhY2NvcmRpbmcgdG8gdGhlIGB0cmFpbGluZ1NsYXNoYCBvcHRpb25cbiAqIGluIGBuZXh0LmNvbmZpZy5qc2AuXG4gKi9jb25zdCBub3JtYWxpemVQYXRoVHJhaWxpbmdTbGFzaD1wcm9jZXNzLmVudi5fX05FWFRfVFJBSUxJTkdfU0xBU0g/cGF0aD0+e2lmKC9cXC5bXi9dK1xcLz8kLy50ZXN0KHBhdGgpKXtyZXR1cm4gcmVtb3ZlUGF0aFRyYWlsaW5nU2xhc2gocGF0aCk7fWVsc2UgaWYocGF0aC5lbmRzV2l0aCgnLycpKXtyZXR1cm4gcGF0aDt9ZWxzZXtyZXR1cm4gcGF0aCsnLyc7fX06cmVtb3ZlUGF0aFRyYWlsaW5nU2xhc2g7ZXhwb3J0cy5ub3JtYWxpemVQYXRoVHJhaWxpbmdTbGFzaD1ub3JtYWxpemVQYXRoVHJhaWxpbmdTbGFzaDtcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPW5vcm1hbGl6ZS10cmFpbGluZy1zbGFzaC5qcy5tYXAiLCJcInVzZSBzdHJpY3RcIjtleHBvcnRzLl9fZXNNb2R1bGU9dHJ1ZTtleHBvcnRzLmNhbmNlbElkbGVDYWxsYmFjaz1leHBvcnRzLnJlcXVlc3RJZGxlQ2FsbGJhY2s9dm9pZCAwO2NvbnN0IHJlcXVlc3RJZGxlQ2FsbGJhY2s9dHlwZW9mIHNlbGYhPT0ndW5kZWZpbmVkJyYmc2VsZi5yZXF1ZXN0SWRsZUNhbGxiYWNrfHxmdW5jdGlvbihjYil7bGV0IHN0YXJ0PURhdGUubm93KCk7cmV0dXJuIHNldFRpbWVvdXQoZnVuY3Rpb24oKXtjYih7ZGlkVGltZW91dDpmYWxzZSx0aW1lUmVtYWluaW5nOmZ1bmN0aW9uKCl7cmV0dXJuIE1hdGgubWF4KDAsNTAtKERhdGUubm93KCktc3RhcnQpKTt9fSk7fSwxKTt9O2V4cG9ydHMucmVxdWVzdElkbGVDYWxsYmFjaz1yZXF1ZXN0SWRsZUNhbGxiYWNrO2NvbnN0IGNhbmNlbElkbGVDYWxsYmFjaz10eXBlb2Ygc2VsZiE9PSd1bmRlZmluZWQnJiZzZWxmLmNhbmNlbElkbGVDYWxsYmFja3x8ZnVuY3Rpb24oaWQpe3JldHVybiBjbGVhclRpbWVvdXQoaWQpO307ZXhwb3J0cy5jYW5jZWxJZGxlQ2FsbGJhY2s9Y2FuY2VsSWRsZUNhbGxiYWNrO1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9cmVxdWVzdC1pZGxlLWNhbGxiYWNrLmpzLm1hcCIsIlwidXNlIHN0cmljdFwiO3ZhciBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0PXJlcXVpcmUoXCJAYmFiZWwvcnVudGltZS9oZWxwZXJzL2ludGVyb3BSZXF1aXJlRGVmYXVsdFwiKTtleHBvcnRzLl9fZXNNb2R1bGU9dHJ1ZTtleHBvcnRzLm1hcmtBc3NldEVycm9yPW1hcmtBc3NldEVycm9yO2V4cG9ydHMuaXNBc3NldEVycm9yPWlzQXNzZXRFcnJvcjtleHBvcnRzLmdldENsaWVudEJ1aWxkTWFuaWZlc3Q9Z2V0Q2xpZW50QnVpbGRNYW5pZmVzdDtleHBvcnRzLmRlZmF1bHQ9dm9pZCAwO3ZhciBfZ2V0QXNzZXRQYXRoRnJvbVJvdXRlPV9pbnRlcm9wUmVxdWlyZURlZmF1bHQocmVxdWlyZShcIi4uL25leHQtc2VydmVyL2xpYi9yb3V0ZXIvdXRpbHMvZ2V0LWFzc2V0LXBhdGgtZnJvbS1yb3V0ZVwiKSk7dmFyIF9yZXF1ZXN0SWRsZUNhbGxiYWNrPXJlcXVpcmUoXCIuL3JlcXVlc3QtaWRsZS1jYWxsYmFja1wiKTsvLyAzLjhzIHdhcyBhcmJpdHJhcmlseSBjaG9zZW4gYXMgaXQncyB3aGF0IGh0dHBzOi8vd2ViLmRldi9pbnRlcmFjdGl2ZVxuLy8gY29uc2lkZXJzIGFzIFwiR29vZFwiIHRpbWUtdG8taW50ZXJhY3RpdmUuIFdlIG11c3QgYXNzdW1lIHNvbWV0aGluZyB3ZW50XG4vLyB3cm9uZyBiZXlvbmQgdGhpcyBwb2ludCwgYW5kIHRoZW4gZmFsbC1iYWNrIHRvIGEgZnVsbCBwYWdlIHRyYW5zaXRpb24gdG9cbi8vIHNob3cgdGhlIHVzZXIgc29tZXRoaW5nIG9mIHZhbHVlLlxuY29uc3QgTVNfTUFYX0lETEVfREVMQVk9MzgwMDtmdW5jdGlvbiB3aXRoRnV0dXJlKGtleSxtYXAsZ2VuZXJhdG9yKXtsZXQgZW50cnk9bWFwLmdldChrZXkpO2lmKGVudHJ5KXtpZignZnV0dXJlJ2luIGVudHJ5KXtyZXR1cm4gZW50cnkuZnV0dXJlO31yZXR1cm4gUHJvbWlzZS5yZXNvbHZlKGVudHJ5KTt9bGV0IHJlc29sdmVyO2NvbnN0IHByb209bmV3IFByb21pc2UocmVzb2x2ZT0+e3Jlc29sdmVyPXJlc29sdmU7fSk7bWFwLnNldChrZXksZW50cnk9e3Jlc29sdmU6cmVzb2x2ZXIsZnV0dXJlOnByb219KTtyZXR1cm4gZ2VuZXJhdG9yPy8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby1zZXF1ZW5jZXNcbmdlbmVyYXRvcigpLnRoZW4odmFsdWU9PihyZXNvbHZlcih2YWx1ZSksdmFsdWUpKTpwcm9tO31mdW5jdGlvbiBoYXNQcmVmZXRjaChsaW5rKXt0cnl7bGluaz1kb2N1bWVudC5jcmVhdGVFbGVtZW50KCdsaW5rJyk7cmV0dXJuKC8vIGRldGVjdCBJRTExIHNpbmNlIGl0IHN1cHBvcnRzIHByZWZldGNoIGJ1dCBpc24ndCBkZXRlY3RlZFxuLy8gd2l0aCByZWxMaXN0LnN1cHBvcnRcbiEhd2luZG93Lk1TSW5wdXRNZXRob2RDb250ZXh0JiYhIWRvY3VtZW50LmRvY3VtZW50TW9kZXx8bGluay5yZWxMaXN0LnN1cHBvcnRzKCdwcmVmZXRjaCcpKTt9Y2F0Y2goX3VudXNlZCl7cmV0dXJuIGZhbHNlO319Y29uc3QgY2FuUHJlZmV0Y2g9aGFzUHJlZmV0Y2goKTtmdW5jdGlvbiBwcmVmZXRjaFZpYURvbShocmVmLGFzLGxpbmspe3JldHVybiBuZXcgUHJvbWlzZSgocmVzLHJlaik9PntpZihkb2N1bWVudC5xdWVyeVNlbGVjdG9yKGBsaW5rW3JlbD1cInByZWZldGNoXCJdW2hyZWZePVwiJHtocmVmfVwiXWApKXtyZXR1cm4gcmVzKCk7fWxpbms9ZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbGluaycpOy8vIFRoZSBvcmRlciBvZiBwcm9wZXJ0eSBhc3NpZ25tZW50IGhlcmUgaXMgaW50ZW50aW9uYWw6XG5pZihhcylsaW5rLmFzPWFzO2xpbmsucmVsPWBwcmVmZXRjaGA7bGluay5jcm9zc09yaWdpbj1wcm9jZXNzLmVudi5fX05FWFRfQ1JPU1NfT1JJR0lOO2xpbmsub25sb2FkPXJlcztsaW5rLm9uZXJyb3I9cmVqOy8vIGBocmVmYCBzaG91bGQgYWx3YXlzIGJlIGxhc3Q6XG5saW5rLmhyZWY9aHJlZjtkb2N1bWVudC5oZWFkLmFwcGVuZENoaWxkKGxpbmspO30pO31jb25zdCBBU1NFVF9MT0FEX0VSUk9SPVN5bWJvbCgnQVNTRVRfTE9BRF9FUlJPUicpOy8vIFRPRE86IHVuZXhwb3J0XG5mdW5jdGlvbiBtYXJrQXNzZXRFcnJvcihlcnIpe3JldHVybiBPYmplY3QuZGVmaW5lUHJvcGVydHkoZXJyLEFTU0VUX0xPQURfRVJST1Ise30pO31mdW5jdGlvbiBpc0Fzc2V0RXJyb3IoZXJyKXtyZXR1cm4gZXJyJiZBU1NFVF9MT0FEX0VSUk9SIGluIGVycjt9ZnVuY3Rpb24gYXBwZW5kU2NyaXB0KHNyYyxzY3JpcHQpe3JldHVybiBuZXcgUHJvbWlzZSgocmVzb2x2ZSxyZWplY3QpPT57c2NyaXB0PWRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3NjcmlwdCcpOy8vIFRoZSBvcmRlciBvZiBwcm9wZXJ0eSBhc3NpZ25tZW50IGhlcmUgaXMgaW50ZW50aW9uYWwuXG4vLyAxLiBTZXR1cCBzdWNjZXNzL2ZhaWx1cmUgaG9va3MgaW4gY2FzZSB0aGUgYnJvd3NlciBzeW5jaHJvbm91c2x5XG4vLyAgICBleGVjdXRlcyB3aGVuIGBzcmNgIGlzIHNldC5cbnNjcmlwdC5vbmxvYWQ9cmVzb2x2ZTtzY3JpcHQub25lcnJvcj0oKT0+cmVqZWN0KG1hcmtBc3NldEVycm9yKG5ldyBFcnJvcihgRmFpbGVkIHRvIGxvYWQgc2NyaXB0OiAke3NyY31gKSkpOy8vIDIuIENvbmZpZ3VyZSB0aGUgY3Jvc3Mtb3JpZ2luIGF0dHJpYnV0ZSBiZWZvcmUgc2V0dGluZyBgc3JjYCBpbiBjYXNlIHRoZVxuLy8gICAgYnJvd3NlciBiZWdpbnMgdG8gZmV0Y2guXG5zY3JpcHQuY3Jvc3NPcmlnaW49cHJvY2Vzcy5lbnYuX19ORVhUX0NST1NTX09SSUdJTjsvLyAzLiBGaW5hbGx5LCBzZXQgdGhlIHNvdXJjZSBhbmQgaW5qZWN0IGludG8gdGhlIERPTSBpbiBjYXNlIHRoZSBjaGlsZFxuLy8gICAgbXVzdCBiZSBhcHBlbmRlZCBmb3IgZmV0Y2hpbmcgdG8gc3RhcnQuXG5zY3JpcHQuc3JjPXNyYztkb2N1bWVudC5ib2R5LmFwcGVuZENoaWxkKHNjcmlwdCk7fSk7fS8vIFJlc29sdmUgYSBwcm9taXNlIHRoYXQgdGltZXMgb3V0IGFmdGVyIGdpdmVuIGFtb3VudCBvZiBtaWxsaXNlY29uZHMuXG5mdW5jdGlvbiByZXNvbHZlUHJvbWlzZVdpdGhUaW1lb3V0KHAsbXMsZXJyKXtyZXR1cm4gbmV3IFByb21pc2UoKHJlc29sdmUscmVqZWN0KT0+e2xldCBjYW5jZWxsZWQ9ZmFsc2U7cC50aGVuKHI9PnsvLyBSZXNvbHZlZCwgY2FuY2VsIHRoZSB0aW1lb3V0XG5jYW5jZWxsZWQ9dHJ1ZTtyZXNvbHZlKHIpO30pLmNhdGNoKHJlamVjdCk7KDAsX3JlcXVlc3RJZGxlQ2FsbGJhY2sucmVxdWVzdElkbGVDYWxsYmFjaykoKCk9PnNldFRpbWVvdXQoKCk9PntpZighY2FuY2VsbGVkKXtyZWplY3QoZXJyKTt9fSxtcykpO30pO30vLyBUT0RPOiBzdG9wIGV4cG9ydGluZyBvciBjYWNoZSB0aGUgZmFpbHVyZVxuLy8gSXQnZCBiZSBiZXN0IHRvIHN0b3AgZXhwb3J0aW5nIHRoaXMuIEl0J3MgYW4gaW1wbGVtZW50YXRpb24gZGV0YWlsLiBXZSdyZVxuLy8gb25seSBleHBvcnRpbmcgaXQgZm9yIGJhY2t3YXJkcyBjb21wYXRpYmlsdHkgd2l0aCB0aGUgYHBhZ2UtbG9hZGVyYC5cbi8vIE9ubHkgY2FjaGUgdGhpcyByZXNwb25zZSBhcyBhIGxhc3QgcmVzb3J0IGlmIHdlIGNhbm5vdCBlbGltaW5hdGUgYWxsIG90aGVyXG4vLyBjb2RlIGJyYW5jaGVzIHRoYXQgdXNlIHRoZSBCdWlsZCBNYW5pZmVzdCBDYWxsYmFjayBhbmQgcHVzaCB0aGVtIHRocm91Z2hcbi8vIHRoZSBSb3V0ZSBMb2FkZXIgaW50ZXJmYWNlLlxuZnVuY3Rpb24gZ2V0Q2xpZW50QnVpbGRNYW5pZmVzdCgpe2lmKHNlbGYuX19CVUlMRF9NQU5JRkVTVCl7cmV0dXJuIFByb21pc2UucmVzb2x2ZShzZWxmLl9fQlVJTERfTUFOSUZFU1QpO31jb25zdCBvbkJ1aWxkTWFuaWZlc3Q9bmV3IFByb21pc2UocmVzb2x2ZT0+ey8vIE1hbmRhdG9yeSBiZWNhdXNlIHRoaXMgaXMgbm90IGNvbmN1cnJlbnQgc2FmZTpcbmNvbnN0IGNiPXNlbGYuX19CVUlMRF9NQU5JRkVTVF9DQjtzZWxmLl9fQlVJTERfTUFOSUZFU1RfQ0I9KCk9PntyZXNvbHZlKHNlbGYuX19CVUlMRF9NQU5JRkVTVCk7Y2ImJmNiKCk7fTt9KTtyZXR1cm4gcmVzb2x2ZVByb21pc2VXaXRoVGltZW91dChvbkJ1aWxkTWFuaWZlc3QsTVNfTUFYX0lETEVfREVMQVksbWFya0Fzc2V0RXJyb3IobmV3IEVycm9yKCdGYWlsZWQgdG8gbG9hZCBjbGllbnQgYnVpbGQgbWFuaWZlc3QnKSkpO31mdW5jdGlvbiBnZXRGaWxlc0ZvclJvdXRlKGFzc2V0UHJlZml4LHJvdXRlKXtpZihwcm9jZXNzLmVudi5OT0RFX0VOVj09PSdkZXZlbG9wbWVudCcpe3JldHVybiBQcm9taXNlLnJlc29sdmUoe3NjcmlwdHM6W2Fzc2V0UHJlZml4KycvX25leHQvc3RhdGljL2NodW5rcy9wYWdlcycrZW5jb2RlVVJJKCgwLF9nZXRBc3NldFBhdGhGcm9tUm91dGUuZGVmYXVsdCkocm91dGUsJy5qcycpKV0sLy8gU3R5bGVzIGFyZSBoYW5kbGVkIGJ5IGBzdHlsZS1sb2FkZXJgIGluIGRldmVsb3BtZW50OlxuY3NzOltdfSk7fXJldHVybiBnZXRDbGllbnRCdWlsZE1hbmlmZXN0KCkudGhlbihtYW5pZmVzdD0+e2lmKCEocm91dGUgaW4gbWFuaWZlc3QpKXt0aHJvdyBtYXJrQXNzZXRFcnJvcihuZXcgRXJyb3IoYEZhaWxlZCB0byBsb29rdXAgcm91dGU6ICR7cm91dGV9YCkpO31jb25zdCBhbGxGaWxlcz1tYW5pZmVzdFtyb3V0ZV0ubWFwKGVudHJ5PT5hc3NldFByZWZpeCsnL19uZXh0LycrZW5jb2RlVVJJKGVudHJ5KSk7cmV0dXJue3NjcmlwdHM6YWxsRmlsZXMuZmlsdGVyKHY9PnYuZW5kc1dpdGgoJy5qcycpKSxjc3M6YWxsRmlsZXMuZmlsdGVyKHY9PnYuZW5kc1dpdGgoJy5jc3MnKSl9O30pO31mdW5jdGlvbiBjcmVhdGVSb3V0ZUxvYWRlcihhc3NldFByZWZpeCl7Y29uc3QgZW50cnlwb2ludHM9bmV3IE1hcCgpO2NvbnN0IGxvYWRlZFNjcmlwdHM9bmV3IE1hcCgpO2NvbnN0IHN0eWxlU2hlZXRzPW5ldyBNYXAoKTtjb25zdCByb3V0ZXM9bmV3IE1hcCgpO2Z1bmN0aW9uIG1heWJlRXhlY3V0ZVNjcmlwdChzcmMpe2xldCBwcm9tPWxvYWRlZFNjcmlwdHMuZ2V0KHNyYyk7aWYocHJvbSl7cmV0dXJuIHByb207fS8vIFNraXAgZXhlY3V0aW5nIHNjcmlwdCBpZiBpdCdzIGFscmVhZHkgaW4gdGhlIERPTTpcbmlmKGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoYHNjcmlwdFtzcmNePVwiJHtzcmN9XCJdYCkpe3JldHVybiBQcm9taXNlLnJlc29sdmUoKTt9bG9hZGVkU2NyaXB0cy5zZXQoc3JjLHByb209YXBwZW5kU2NyaXB0KHNyYykpO3JldHVybiBwcm9tO31mdW5jdGlvbiBmZXRjaFN0eWxlU2hlZXQoaHJlZil7bGV0IHByb209c3R5bGVTaGVldHMuZ2V0KGhyZWYpO2lmKHByb20pe3JldHVybiBwcm9tO31zdHlsZVNoZWV0cy5zZXQoaHJlZixwcm9tPWZldGNoKGhyZWYpLnRoZW4ocmVzPT57aWYoIXJlcy5vayl7dGhyb3cgbmV3IEVycm9yKGBGYWlsZWQgdG8gbG9hZCBzdHlsZXNoZWV0OiAke2hyZWZ9YCk7fXJldHVybiByZXMudGV4dCgpLnRoZW4odGV4dD0+KHtocmVmOmhyZWYsY29udGVudDp0ZXh0fSkpO30pLmNhdGNoKGVycj0+e3Rocm93IG1hcmtBc3NldEVycm9yKGVycik7fSkpO3JldHVybiBwcm9tO31yZXR1cm57d2hlbkVudHJ5cG9pbnQocm91dGUpe3JldHVybiB3aXRoRnV0dXJlKHJvdXRlLGVudHJ5cG9pbnRzKTt9LG9uRW50cnlwb2ludChyb3V0ZSxleGVjdXRlKXtQcm9taXNlLnJlc29sdmUoZXhlY3V0ZSkudGhlbihmbj0+Zm4oKSkudGhlbihleHBvcnRzPT4oe2NvbXBvbmVudDpleHBvcnRzJiZleHBvcnRzLmRlZmF1bHR8fGV4cG9ydHMsZXhwb3J0czpleHBvcnRzfSksZXJyPT4oe2Vycm9yOmVycn0pKS50aGVuKGlucHV0PT57Y29uc3Qgb2xkPWVudHJ5cG9pbnRzLmdldChyb3V0ZSk7ZW50cnlwb2ludHMuc2V0KHJvdXRlLGlucHV0KTtpZihvbGQmJidyZXNvbHZlJ2luIG9sZClvbGQucmVzb2x2ZShpbnB1dCk7fSk7fSxsb2FkUm91dGUocm91dGUscHJlZmV0Y2gpe3JldHVybiB3aXRoRnV0dXJlKHJvdXRlLHJvdXRlcywoKT0+e3JldHVybiByZXNvbHZlUHJvbWlzZVdpdGhUaW1lb3V0KGdldEZpbGVzRm9yUm91dGUoYXNzZXRQcmVmaXgscm91dGUpLnRoZW4oKHtzY3JpcHRzLGNzc30pPT57cmV0dXJuIFByb21pc2UuYWxsKFtlbnRyeXBvaW50cy5oYXMocm91dGUpP1tdOlByb21pc2UuYWxsKHNjcmlwdHMubWFwKG1heWJlRXhlY3V0ZVNjcmlwdCkpLFByb21pc2UuYWxsKGNzcy5tYXAoZmV0Y2hTdHlsZVNoZWV0KSldKTt9KS50aGVuKHJlcz0+e3JldHVybiB0aGlzLndoZW5FbnRyeXBvaW50KHJvdXRlKS50aGVuKGVudHJ5cG9pbnQ9Pih7ZW50cnlwb2ludCxzdHlsZXM6cmVzWzFdfSkpO30pLE1TX01BWF9JRExFX0RFTEFZLG1hcmtBc3NldEVycm9yKG5ldyBFcnJvcihgUm91dGUgZGlkIG5vdCBjb21wbGV0ZSBsb2FkaW5nOiAke3JvdXRlfWApKSkudGhlbigoe2VudHJ5cG9pbnQsc3R5bGVzfSk9Pntjb25zdCByZXM9T2JqZWN0LmFzc2lnbih7c3R5bGVzOnN0eWxlc30sZW50cnlwb2ludCk7cmV0dXJuJ2Vycm9yJ2luIGVudHJ5cG9pbnQ/ZW50cnlwb2ludDpyZXM7fSkuY2F0Y2goZXJyPT57aWYocHJlZmV0Y2gpey8vIHdlIGRvbid0IHdhbnQgdG8gY2FjaGUgZXJyb3JzIGR1cmluZyBwcmVmZXRjaFxudGhyb3cgZXJyO31yZXR1cm57ZXJyb3I6ZXJyfTt9KTt9KTt9LHByZWZldGNoKHJvdXRlKXsvLyBodHRwczovL2dpdGh1Yi5jb20vR29vZ2xlQ2hyb21lTGFicy9xdWlja2xpbmsvYmxvYi80NTNhNjYxZmExZmE5NDBlMmQyZTA0NDQ1MjM5OGUzOGM2N2E5OGZiL3NyYy9pbmRleC5tanMjTDExNS1MMTE4XG4vLyBMaWNlbnNlOiBBcGFjaGUgMi4wXG5sZXQgY247aWYoY249bmF2aWdhdG9yLmNvbm5lY3Rpb24pey8vIERvbid0IHByZWZldGNoIGlmIHVzaW5nIDJHIG9yIGlmIFNhdmUtRGF0YSBpcyBlbmFibGVkLlxuaWYoY24uc2F2ZURhdGF8fC8yZy8udGVzdChjbi5lZmZlY3RpdmVUeXBlKSlyZXR1cm4gUHJvbWlzZS5yZXNvbHZlKCk7fXJldHVybiBnZXRGaWxlc0ZvclJvdXRlKGFzc2V0UHJlZml4LHJvdXRlKS50aGVuKG91dHB1dD0+UHJvbWlzZS5hbGwoY2FuUHJlZmV0Y2g/b3V0cHV0LnNjcmlwdHMubWFwKHNjcmlwdD0+cHJlZmV0Y2hWaWFEb20oc2NyaXB0LCdzY3JpcHQnKSk6W10pKS50aGVuKCgpPT57KDAsX3JlcXVlc3RJZGxlQ2FsbGJhY2sucmVxdWVzdElkbGVDYWxsYmFjaykoKCk9PnRoaXMubG9hZFJvdXRlKHJvdXRlLHRydWUpLmNhdGNoKCgpPT57fSkpO30pLmNhdGNoKC8vIHN3YWxsb3cgcHJlZmV0Y2ggZXJyb3JzXG4oKT0+e30pO319O312YXIgX2RlZmF1bHQ9Y3JlYXRlUm91dGVMb2FkZXI7ZXhwb3J0cy5kZWZhdWx0PV9kZWZhdWx0O1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9cm91dGUtbG9hZGVyLmpzLm1hcCIsIlwidXNlIHN0cmljdFwiO3ZhciBfaW50ZXJvcFJlcXVpcmVXaWxkY2FyZD1yZXF1aXJlKFwiQGJhYmVsL3J1bnRpbWUvaGVscGVycy9pbnRlcm9wUmVxdWlyZVdpbGRjYXJkXCIpO3ZhciBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0PXJlcXVpcmUoXCJAYmFiZWwvcnVudGltZS9oZWxwZXJzL2ludGVyb3BSZXF1aXJlRGVmYXVsdFwiKTtleHBvcnRzLl9fZXNNb2R1bGU9dHJ1ZTtleHBvcnRzLnVzZVJvdXRlcj11c2VSb3V0ZXI7ZXhwb3J0cy5tYWtlUHVibGljUm91dGVySW5zdGFuY2U9bWFrZVB1YmxpY1JvdXRlckluc3RhbmNlO2V4cG9ydHMuY3JlYXRlUm91dGVyPWV4cG9ydHMud2l0aFJvdXRlcj1leHBvcnRzLmRlZmF1bHQ9dm9pZCAwO3ZhciBfcmVhY3Q9X2ludGVyb3BSZXF1aXJlRGVmYXVsdChyZXF1aXJlKFwicmVhY3RcIikpO3ZhciBfcm91dGVyMj1faW50ZXJvcFJlcXVpcmVXaWxkY2FyZChyZXF1aXJlKFwiLi4vbmV4dC1zZXJ2ZXIvbGliL3JvdXRlci9yb3V0ZXJcIikpO2V4cG9ydHMuUm91dGVyPV9yb3V0ZXIyLmRlZmF1bHQ7ZXhwb3J0cy5OZXh0Um91dGVyPV9yb3V0ZXIyLk5leHRSb3V0ZXI7dmFyIF9yb3V0ZXJDb250ZXh0PXJlcXVpcmUoXCIuLi9uZXh0LXNlcnZlci9saWIvcm91dGVyLWNvbnRleHRcIik7dmFyIF93aXRoUm91dGVyPV9pbnRlcm9wUmVxdWlyZURlZmF1bHQocmVxdWlyZShcIi4vd2l0aC1yb3V0ZXJcIikpO2V4cG9ydHMud2l0aFJvdXRlcj1fd2l0aFJvdXRlci5kZWZhdWx0Oy8qIGdsb2JhbCB3aW5kb3cgKi9jb25zdCBzaW5nbGV0b25Sb3V0ZXI9e3JvdXRlcjpudWxsLC8vIGhvbGRzIHRoZSBhY3R1YWwgcm91dGVyIGluc3RhbmNlXG5yZWFkeUNhbGxiYWNrczpbXSxyZWFkeShjYil7aWYodGhpcy5yb3V0ZXIpcmV0dXJuIGNiKCk7aWYodHlwZW9mIHdpbmRvdyE9PSd1bmRlZmluZWQnKXt0aGlzLnJlYWR5Q2FsbGJhY2tzLnB1c2goY2IpO319fTsvLyBDcmVhdGUgcHVibGljIHByb3BlcnRpZXMgYW5kIG1ldGhvZHMgb2YgdGhlIHJvdXRlciBpbiB0aGUgc2luZ2xldG9uUm91dGVyXG5jb25zdCB1cmxQcm9wZXJ0eUZpZWxkcz1bJ3BhdGhuYW1lJywncm91dGUnLCdxdWVyeScsJ2FzUGF0aCcsJ2NvbXBvbmVudHMnLCdpc0ZhbGxiYWNrJywnYmFzZVBhdGgnLCdsb2NhbGUnLCdsb2NhbGVzJywnZGVmYXVsdExvY2FsZScsJ2lzUmVhZHknLCdpc1ByZXZpZXcnLCdpc0xvY2FsZURvbWFpbicsJ2RvbWFpbkxvY2FsZXMnXTtjb25zdCByb3V0ZXJFdmVudHM9Wydyb3V0ZUNoYW5nZVN0YXJ0JywnYmVmb3JlSGlzdG9yeUNoYW5nZScsJ3JvdXRlQ2hhbmdlQ29tcGxldGUnLCdyb3V0ZUNoYW5nZUVycm9yJywnaGFzaENoYW5nZVN0YXJ0JywnaGFzaENoYW5nZUNvbXBsZXRlJ107Y29uc3QgY29yZU1ldGhvZEZpZWxkcz1bJ3B1c2gnLCdyZXBsYWNlJywncmVsb2FkJywnYmFjaycsJ3ByZWZldGNoJywnYmVmb3JlUG9wU3RhdGUnXTsvLyBFdmVudHMgaXMgYSBzdGF0aWMgcHJvcGVydHkgb24gdGhlIHJvdXRlciwgdGhlIHJvdXRlciBkb2Vzbid0IGhhdmUgdG8gYmUgaW5pdGlhbGl6ZWQgdG8gdXNlIGl0XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoc2luZ2xldG9uUm91dGVyLCdldmVudHMnLHtnZXQoKXtyZXR1cm4gX3JvdXRlcjIuZGVmYXVsdC5ldmVudHM7fX0pO3VybFByb3BlcnR5RmllbGRzLmZvckVhY2goZmllbGQ9PnsvLyBIZXJlIHdlIG5lZWQgdG8gdXNlIE9iamVjdC5kZWZpbmVQcm9wZXJ0eSBiZWNhdXNlIHdlIG5lZWQgdG8gcmV0dXJuXG4vLyB0aGUgcHJvcGVydHkgYXNzaWduZWQgdG8gdGhlIGFjdHVhbCByb3V0ZXJcbi8vIFRoZSB2YWx1ZSBtaWdodCBnZXQgY2hhbmdlZCBhcyB3ZSBjaGFuZ2Ugcm91dGVzIGFuZCB0aGlzIGlzIHRoZVxuLy8gcHJvcGVyIHdheSB0byBhY2Nlc3MgaXRcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShzaW5nbGV0b25Sb3V0ZXIsZmllbGQse2dldCgpe2NvbnN0IHJvdXRlcj1nZXRSb3V0ZXIoKTtyZXR1cm4gcm91dGVyW2ZpZWxkXTt9fSk7fSk7Y29yZU1ldGhvZEZpZWxkcy5mb3JFYWNoKGZpZWxkPT57Ly8gV2UgZG9uJ3QgcmVhbGx5IGtub3cgdGhlIHR5cGVzIGhlcmUsIHNvIHdlIGFkZCB0aGVtIGxhdGVyIGluc3RlYWRcbjtzaW5nbGV0b25Sb3V0ZXJbZmllbGRdPSguLi5hcmdzKT0+e2NvbnN0IHJvdXRlcj1nZXRSb3V0ZXIoKTtyZXR1cm4gcm91dGVyW2ZpZWxkXSguLi5hcmdzKTt9O30pO3JvdXRlckV2ZW50cy5mb3JFYWNoKGV2ZW50PT57c2luZ2xldG9uUm91dGVyLnJlYWR5KCgpPT57X3JvdXRlcjIuZGVmYXVsdC5ldmVudHMub24oZXZlbnQsKC4uLmFyZ3MpPT57Y29uc3QgZXZlbnRGaWVsZD1gb24ke2V2ZW50LmNoYXJBdCgwKS50b1VwcGVyQ2FzZSgpfSR7ZXZlbnQuc3Vic3RyaW5nKDEpfWA7Y29uc3QgX3NpbmdsZXRvblJvdXRlcj1zaW5nbGV0b25Sb3V0ZXI7aWYoX3NpbmdsZXRvblJvdXRlcltldmVudEZpZWxkXSl7dHJ5e19zaW5nbGV0b25Sb3V0ZXJbZXZlbnRGaWVsZF0oLi4uYXJncyk7fWNhdGNoKGVycil7Y29uc29sZS5lcnJvcihgRXJyb3Igd2hlbiBydW5uaW5nIHRoZSBSb3V0ZXIgZXZlbnQ6ICR7ZXZlbnRGaWVsZH1gKTtjb25zb2xlLmVycm9yKGAke2Vyci5tZXNzYWdlfVxcbiR7ZXJyLnN0YWNrfWApO319fSk7fSk7fSk7ZnVuY3Rpb24gZ2V0Um91dGVyKCl7aWYoIXNpbmdsZXRvblJvdXRlci5yb3V0ZXIpe2NvbnN0IG1lc3NhZ2U9J05vIHJvdXRlciBpbnN0YW5jZSBmb3VuZC5cXG4nKydZb3Ugc2hvdWxkIG9ubHkgdXNlIFwibmV4dC9yb3V0ZXJcIiBvbiB0aGUgY2xpZW50IHNpZGUgb2YgeW91ciBhcHAuXFxuJzt0aHJvdyBuZXcgRXJyb3IobWVzc2FnZSk7fXJldHVybiBzaW5nbGV0b25Sb3V0ZXIucm91dGVyO30vLyBFeHBvcnQgdGhlIHNpbmdsZXRvblJvdXRlciBhbmQgdGhpcyBpcyB0aGUgcHVibGljIEFQSS5cbnZhciBfZGVmYXVsdD1zaW5nbGV0b25Sb3V0ZXI7Ly8gUmVleHBvcnQgdGhlIHdpdGhSb3V0ZSBIT0NcbmV4cG9ydHMuZGVmYXVsdD1fZGVmYXVsdDtmdW5jdGlvbiB1c2VSb3V0ZXIoKXtyZXR1cm4gX3JlYWN0LmRlZmF1bHQudXNlQ29udGV4dChfcm91dGVyQ29udGV4dC5Sb3V0ZXJDb250ZXh0KTt9Ly8gSU5URVJOQUwgQVBJU1xuLy8gLS0tLS0tLS0tLS0tLVxuLy8gKGRvIG5vdCB1c2UgZm9sbG93aW5nIGV4cG9ydHMgaW5zaWRlIHRoZSBhcHApXG4vLyBDcmVhdGUgYSByb3V0ZXIgYW5kIGFzc2lnbiBpdCBhcyB0aGUgc2luZ2xldG9uIGluc3RhbmNlLlxuLy8gVGhpcyBpcyB1c2VkIGluIGNsaWVudCBzaWRlIHdoZW4gd2UgYXJlIGluaXRpbGl6aW5nIHRoZSBhcHAuXG4vLyBUaGlzIHNob3VsZCAqKm5vdCoqIGJlIHVzZWQgaW5zaWRlIHRoZSBzZXJ2ZXIuXG5jb25zdCBjcmVhdGVSb3V0ZXI9KC4uLmFyZ3MpPT57c2luZ2xldG9uUm91dGVyLnJvdXRlcj1uZXcgX3JvdXRlcjIuZGVmYXVsdCguLi5hcmdzKTtzaW5nbGV0b25Sb3V0ZXIucmVhZHlDYWxsYmFja3MuZm9yRWFjaChjYj0+Y2IoKSk7c2luZ2xldG9uUm91dGVyLnJlYWR5Q2FsbGJhY2tzPVtdO3JldHVybiBzaW5nbGV0b25Sb3V0ZXIucm91dGVyO307Ly8gVGhpcyBmdW5jdGlvbiBpcyB1c2VkIHRvIGNyZWF0ZSB0aGUgYHdpdGhSb3V0ZXJgIHJvdXRlciBpbnN0YW5jZVxuZXhwb3J0cy5jcmVhdGVSb3V0ZXI9Y3JlYXRlUm91dGVyO2Z1bmN0aW9uIG1ha2VQdWJsaWNSb3V0ZXJJbnN0YW5jZShyb3V0ZXIpe2NvbnN0IF9yb3V0ZXI9cm91dGVyO2NvbnN0IGluc3RhbmNlPXt9O2Zvcihjb25zdCBwcm9wZXJ0eSBvZiB1cmxQcm9wZXJ0eUZpZWxkcyl7aWYodHlwZW9mIF9yb3V0ZXJbcHJvcGVydHldPT09J29iamVjdCcpe2luc3RhbmNlW3Byb3BlcnR5XT1PYmplY3QuYXNzaWduKEFycmF5LmlzQXJyYXkoX3JvdXRlcltwcm9wZXJ0eV0pP1tdOnt9LF9yb3V0ZXJbcHJvcGVydHldKTsvLyBtYWtlcyBzdXJlIHF1ZXJ5IGlzIG5vdCBzdGF0ZWZ1bFxuY29udGludWU7fWluc3RhbmNlW3Byb3BlcnR5XT1fcm91dGVyW3Byb3BlcnR5XTt9Ly8gRXZlbnRzIGlzIGEgc3RhdGljIHByb3BlcnR5IG9uIHRoZSByb3V0ZXIsIHRoZSByb3V0ZXIgZG9lc24ndCBoYXZlIHRvIGJlIGluaXRpYWxpemVkIHRvIHVzZSBpdFxuaW5zdGFuY2UuZXZlbnRzPV9yb3V0ZXIyLmRlZmF1bHQuZXZlbnRzO2NvcmVNZXRob2RGaWVsZHMuZm9yRWFjaChmaWVsZD0+e2luc3RhbmNlW2ZpZWxkXT0oLi4uYXJncyk9PntyZXR1cm4gX3JvdXRlcltmaWVsZF0oLi4uYXJncyk7fTt9KTtyZXR1cm4gaW5zdGFuY2U7fVxuLy8jIHNvdXJjZU1hcHBpbmdVUkw9cm91dGVyLmpzLm1hcCIsIlwidXNlIHN0cmljdFwiO2V4cG9ydHMuX19lc01vZHVsZT10cnVlO2V4cG9ydHMudXNlSW50ZXJzZWN0aW9uPXVzZUludGVyc2VjdGlvbjt2YXIgX3JlYWN0PXJlcXVpcmUoXCJyZWFjdFwiKTt2YXIgX3JlcXVlc3RJZGxlQ2FsbGJhY2s9cmVxdWlyZShcIi4vcmVxdWVzdC1pZGxlLWNhbGxiYWNrXCIpO2NvbnN0IGhhc0ludGVyc2VjdGlvbk9ic2VydmVyPXR5cGVvZiBJbnRlcnNlY3Rpb25PYnNlcnZlciE9PSd1bmRlZmluZWQnO2Z1bmN0aW9uIHVzZUludGVyc2VjdGlvbih7cm9vdE1hcmdpbixkaXNhYmxlZH0pe2NvbnN0IGlzRGlzYWJsZWQ9ZGlzYWJsZWR8fCFoYXNJbnRlcnNlY3Rpb25PYnNlcnZlcjtjb25zdCB1bm9ic2VydmU9KDAsX3JlYWN0LnVzZVJlZikoKTtjb25zdFt2aXNpYmxlLHNldFZpc2libGVdPSgwLF9yZWFjdC51c2VTdGF0ZSkoZmFsc2UpO2NvbnN0IHNldFJlZj0oMCxfcmVhY3QudXNlQ2FsbGJhY2spKGVsPT57aWYodW5vYnNlcnZlLmN1cnJlbnQpe3Vub2JzZXJ2ZS5jdXJyZW50KCk7dW5vYnNlcnZlLmN1cnJlbnQ9dW5kZWZpbmVkO31pZihpc0Rpc2FibGVkfHx2aXNpYmxlKXJldHVybjtpZihlbCYmZWwudGFnTmFtZSl7dW5vYnNlcnZlLmN1cnJlbnQ9b2JzZXJ2ZShlbCxpc1Zpc2libGU9PmlzVmlzaWJsZSYmc2V0VmlzaWJsZShpc1Zpc2libGUpLHtyb290TWFyZ2lufSk7fX0sW2lzRGlzYWJsZWQscm9vdE1hcmdpbix2aXNpYmxlXSk7KDAsX3JlYWN0LnVzZUVmZmVjdCkoKCk9PntpZighaGFzSW50ZXJzZWN0aW9uT2JzZXJ2ZXIpe2lmKCF2aXNpYmxlKXtjb25zdCBpZGxlQ2FsbGJhY2s9KDAsX3JlcXVlc3RJZGxlQ2FsbGJhY2sucmVxdWVzdElkbGVDYWxsYmFjaykoKCk9PnNldFZpc2libGUodHJ1ZSkpO3JldHVybigpPT4oMCxfcmVxdWVzdElkbGVDYWxsYmFjay5jYW5jZWxJZGxlQ2FsbGJhY2spKGlkbGVDYWxsYmFjayk7fX19LFt2aXNpYmxlXSk7cmV0dXJuW3NldFJlZix2aXNpYmxlXTt9ZnVuY3Rpb24gb2JzZXJ2ZShlbGVtZW50LGNhbGxiYWNrLG9wdGlvbnMpe2NvbnN0e2lkLG9ic2VydmVyLGVsZW1lbnRzfT1jcmVhdGVPYnNlcnZlcihvcHRpb25zKTtlbGVtZW50cy5zZXQoZWxlbWVudCxjYWxsYmFjayk7b2JzZXJ2ZXIub2JzZXJ2ZShlbGVtZW50KTtyZXR1cm4gZnVuY3Rpb24gdW5vYnNlcnZlKCl7ZWxlbWVudHMuZGVsZXRlKGVsZW1lbnQpO29ic2VydmVyLnVub2JzZXJ2ZShlbGVtZW50KTsvLyBEZXN0cm95IG9ic2VydmVyIHdoZW4gdGhlcmUncyBub3RoaW5nIGxlZnQgdG8gd2F0Y2g6XG5pZihlbGVtZW50cy5zaXplPT09MCl7b2JzZXJ2ZXIuZGlzY29ubmVjdCgpO29ic2VydmVycy5kZWxldGUoaWQpO319O31jb25zdCBvYnNlcnZlcnM9bmV3IE1hcCgpO2Z1bmN0aW9uIGNyZWF0ZU9ic2VydmVyKG9wdGlvbnMpe2NvbnN0IGlkPW9wdGlvbnMucm9vdE1hcmdpbnx8Jyc7bGV0IGluc3RhbmNlPW9ic2VydmVycy5nZXQoaWQpO2lmKGluc3RhbmNlKXtyZXR1cm4gaW5zdGFuY2U7fWNvbnN0IGVsZW1lbnRzPW5ldyBNYXAoKTtjb25zdCBvYnNlcnZlcj1uZXcgSW50ZXJzZWN0aW9uT2JzZXJ2ZXIoZW50cmllcz0+e2VudHJpZXMuZm9yRWFjaChlbnRyeT0+e2NvbnN0IGNhbGxiYWNrPWVsZW1lbnRzLmdldChlbnRyeS50YXJnZXQpO2NvbnN0IGlzVmlzaWJsZT1lbnRyeS5pc0ludGVyc2VjdGluZ3x8ZW50cnkuaW50ZXJzZWN0aW9uUmF0aW8+MDtpZihjYWxsYmFjayYmaXNWaXNpYmxlKXtjYWxsYmFjayhpc1Zpc2libGUpO319KTt9LG9wdGlvbnMpO29ic2VydmVycy5zZXQoaWQsaW5zdGFuY2U9e2lkLG9ic2VydmVyLGVsZW1lbnRzfSk7cmV0dXJuIGluc3RhbmNlO31cbi8vIyBzb3VyY2VNYXBwaW5nVVJMPXVzZS1pbnRlcnNlY3Rpb24uanMubWFwIiwiXCJ1c2Ugc3RyaWN0XCI7dmFyIF9pbnRlcm9wUmVxdWlyZURlZmF1bHQ9cmVxdWlyZShcIkBiYWJlbC9ydW50aW1lL2hlbHBlcnMvaW50ZXJvcFJlcXVpcmVEZWZhdWx0XCIpO2V4cG9ydHMuX19lc01vZHVsZT10cnVlO2V4cG9ydHMuZGVmYXVsdD13aXRoUm91dGVyO3ZhciBfcmVhY3Q9X2ludGVyb3BSZXF1aXJlRGVmYXVsdChyZXF1aXJlKFwicmVhY3RcIikpO3ZhciBfcm91dGVyPXJlcXVpcmUoXCIuL3JvdXRlclwiKTtmdW5jdGlvbiB3aXRoUm91dGVyKENvbXBvc2VkQ29tcG9uZW50KXtmdW5jdGlvbiBXaXRoUm91dGVyV3JhcHBlcihwcm9wcyl7cmV0dXJuLyojX19QVVJFX18qL19yZWFjdC5kZWZhdWx0LmNyZWF0ZUVsZW1lbnQoQ29tcG9zZWRDb21wb25lbnQsT2JqZWN0LmFzc2lnbih7cm91dGVyOigwLF9yb3V0ZXIudXNlUm91dGVyKSgpfSxwcm9wcykpO31XaXRoUm91dGVyV3JhcHBlci5nZXRJbml0aWFsUHJvcHM9Q29tcG9zZWRDb21wb25lbnQuZ2V0SW5pdGlhbFByb3BzLy8gVGhpcyBpcyBuZWVkZWQgdG8gYWxsb3cgY2hlY2tpbmcgZm9yIGN1c3RvbSBnZXRJbml0aWFsUHJvcHMgaW4gX2FwcFxuO1dpdGhSb3V0ZXJXcmFwcGVyLm9yaWdHZXRJbml0aWFsUHJvcHM9Q29tcG9zZWRDb21wb25lbnQub3JpZ0dldEluaXRpYWxQcm9wcztpZihwcm9jZXNzLmVudi5OT0RFX0VOViE9PSdwcm9kdWN0aW9uJyl7Y29uc3QgbmFtZT1Db21wb3NlZENvbXBvbmVudC5kaXNwbGF5TmFtZXx8Q29tcG9zZWRDb21wb25lbnQubmFtZXx8J1Vua25vd24nO1dpdGhSb3V0ZXJXcmFwcGVyLmRpc3BsYXlOYW1lPWB3aXRoUm91dGVyKCR7bmFtZX0pYDt9cmV0dXJuIFdpdGhSb3V0ZXJXcmFwcGVyO31cbi8vIyBzb3VyY2VNYXBwaW5nVVJMPXdpdGgtcm91dGVyLmpzLm1hcCIsIlwidXNlIHN0cmljdFwiO2V4cG9ydHMuX19lc01vZHVsZT10cnVlO2V4cG9ydHMuZGV0ZWN0RG9tYWluTG9jYWxlPWRldGVjdERvbWFpbkxvY2FsZTtmdW5jdGlvbiBkZXRlY3REb21haW5Mb2NhbGUoZG9tYWluSXRlbXMsaG9zdG5hbWUsZGV0ZWN0ZWRMb2NhbGUpe2xldCBkb21haW5JdGVtO2lmKGRvbWFpbkl0ZW1zKXtpZihkZXRlY3RlZExvY2FsZSl7ZGV0ZWN0ZWRMb2NhbGU9ZGV0ZWN0ZWRMb2NhbGUudG9Mb3dlckNhc2UoKTt9Zm9yKGNvbnN0IGl0ZW0gb2YgZG9tYWluSXRlbXMpe3ZhciBfaXRlbSRkb21haW4sX2l0ZW0kbG9jYWxlczsvLyByZW1vdmUgcG9ydCBpZiBwcmVzZW50XG5jb25zdCBkb21haW5Ib3N0bmFtZT0oX2l0ZW0kZG9tYWluPWl0ZW0uZG9tYWluKT09bnVsbD92b2lkIDA6X2l0ZW0kZG9tYWluLnNwbGl0KCc6JylbMF0udG9Mb3dlckNhc2UoKTtpZihob3N0bmFtZT09PWRvbWFpbkhvc3RuYW1lfHxkZXRlY3RlZExvY2FsZT09PWl0ZW0uZGVmYXVsdExvY2FsZS50b0xvd2VyQ2FzZSgpfHwoX2l0ZW0kbG9jYWxlcz1pdGVtLmxvY2FsZXMpIT1udWxsJiZfaXRlbSRsb2NhbGVzLnNvbWUobG9jYWxlPT5sb2NhbGUudG9Mb3dlckNhc2UoKT09PWRldGVjdGVkTG9jYWxlKSl7ZG9tYWluSXRlbT1pdGVtO2JyZWFrO319fXJldHVybiBkb21haW5JdGVtO31cbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWRldGVjdC1kb21haW4tbG9jYWxlLmpzLm1hcCIsIlwidXNlIHN0cmljdFwiO2V4cG9ydHMuX19lc01vZHVsZT10cnVlO2V4cG9ydHMubm9ybWFsaXplTG9jYWxlUGF0aD1ub3JtYWxpemVMb2NhbGVQYXRoO2Z1bmN0aW9uIG5vcm1hbGl6ZUxvY2FsZVBhdGgocGF0aG5hbWUsbG9jYWxlcyl7bGV0IGRldGVjdGVkTG9jYWxlOy8vIGZpcnN0IGl0ZW0gd2lsbCBiZSBlbXB0eSBzdHJpbmcgZnJvbSBzcGxpdHRpbmcgYXQgZmlyc3QgY2hhclxuY29uc3QgcGF0aG5hbWVQYXJ0cz1wYXRobmFtZS5zcGxpdCgnLycpOyhsb2NhbGVzfHxbXSkuc29tZShsb2NhbGU9PntpZihwYXRobmFtZVBhcnRzWzFdLnRvTG93ZXJDYXNlKCk9PT1sb2NhbGUudG9Mb3dlckNhc2UoKSl7ZGV0ZWN0ZWRMb2NhbGU9bG9jYWxlO3BhdGhuYW1lUGFydHMuc3BsaWNlKDEsMSk7cGF0aG5hbWU9cGF0aG5hbWVQYXJ0cy5qb2luKCcvJyl8fCcvJztyZXR1cm4gdHJ1ZTt9cmV0dXJuIGZhbHNlO30pO3JldHVybntwYXRobmFtZSxkZXRlY3RlZExvY2FsZX07fVxuLy8jIHNvdXJjZU1hcHBpbmdVUkw9bm9ybWFsaXplLWxvY2FsZS1wYXRoLmpzLm1hcCIsIlwidXNlIHN0cmljdFwiO2V4cG9ydHMuX19lc01vZHVsZT10cnVlO2V4cG9ydHMuZGVmYXVsdD1taXR0Oy8qXG5NSVQgTGljZW5zZVxuXG5Db3B5cmlnaHQgKGMpIEphc29uIE1pbGxlciAoaHR0cHM6Ly9qYXNvbmZvcm1hdC5jb20vKVxuXG5QZXJtaXNzaW9uIGlzIGhlcmVieSBncmFudGVkLCBmcmVlIG9mIGNoYXJnZSwgdG8gYW55IHBlcnNvbiBvYnRhaW5pbmcgYSBjb3B5IG9mIHRoaXMgc29mdHdhcmUgYW5kIGFzc29jaWF0ZWQgZG9jdW1lbnRhdGlvbiBmaWxlcyAodGhlIFwiU29mdHdhcmVcIiksIHRvIGRlYWwgaW4gdGhlIFNvZnR3YXJlIHdpdGhvdXQgcmVzdHJpY3Rpb24sIGluY2x1ZGluZyB3aXRob3V0IGxpbWl0YXRpb24gdGhlIHJpZ2h0cyB0byB1c2UsIGNvcHksIG1vZGlmeSwgbWVyZ2UsIHB1Ymxpc2gsIGRpc3RyaWJ1dGUsIHN1YmxpY2Vuc2UsIGFuZC9vciBzZWxsIGNvcGllcyBvZiB0aGUgU29mdHdhcmUsIGFuZCB0byBwZXJtaXQgcGVyc29ucyB0byB3aG9tIHRoZSBTb2Z0d2FyZSBpcyBmdXJuaXNoZWQgdG8gZG8gc28sIHN1YmplY3QgdG8gdGhlIGZvbGxvd2luZyBjb25kaXRpb25zOlxuXG5UaGUgYWJvdmUgY29weXJpZ2h0IG5vdGljZSBhbmQgdGhpcyBwZXJtaXNzaW9uIG5vdGljZSBzaGFsbCBiZSBpbmNsdWRlZCBpbiBhbGwgY29waWVzIG9yIHN1YnN0YW50aWFsIHBvcnRpb25zIG9mIHRoZSBTb2Z0d2FyZS5cblxuVEhFIFNPRlRXQVJFIElTIFBST1ZJREVEIFwiQVMgSVNcIiwgV0lUSE9VVCBXQVJSQU5UWSBPRiBBTlkgS0lORCwgRVhQUkVTUyBPUiBJTVBMSUVELCBJTkNMVURJTkcgQlVUIE5PVCBMSU1JVEVEIFRPIFRIRSBXQVJSQU5USUVTIE9GIE1FUkNIQU5UQUJJTElUWSwgRklUTkVTUyBGT1IgQSBQQVJUSUNVTEFSIFBVUlBPU0UgQU5EIE5PTklORlJJTkdFTUVOVC4gSU4gTk8gRVZFTlQgU0hBTEwgVEhFIEFVVEhPUlMgT1IgQ09QWVJJR0hUIEhPTERFUlMgQkUgTElBQkxFIEZPUiBBTlkgQ0xBSU0sIERBTUFHRVMgT1IgT1RIRVIgTElBQklMSVRZLCBXSEVUSEVSIElOIEFOIEFDVElPTiBPRiBDT05UUkFDVCwgVE9SVCBPUiBPVEhFUldJU0UsIEFSSVNJTkcgRlJPTSwgT1VUIE9GIE9SIElOIENPTk5FQ1RJT04gV0lUSCBUSEUgU09GVFdBUkUgT1IgVEhFIFVTRSBPUiBPVEhFUiBERUFMSU5HUyBJTiBUSEUgU09GVFdBUkUuXG4qLyAvLyBUaGlzIGZpbGUgaXMgYmFzZWQgb24gaHR0cHM6Ly9naXRodWIuY29tL2RldmVsb3BpdC9taXR0L2Jsb2IvdjEuMS4zL3NyYy9pbmRleC5qc1xuLy8gSXQncyBiZWVuIGVkaXRlZCBmb3IgdGhlIG5lZWRzIG9mIHRoaXMgc2NyaXB0XG4vLyBTZWUgdGhlIExJQ0VOU0UgYXQgdGhlIHRvcCBvZiB0aGUgZmlsZVxuZnVuY3Rpb24gbWl0dCgpe2NvbnN0IGFsbD1PYmplY3QuY3JlYXRlKG51bGwpO3JldHVybntvbih0eXBlLGhhbmRsZXIpezsoYWxsW3R5cGVdfHwoYWxsW3R5cGVdPVtdKSkucHVzaChoYW5kbGVyKTt9LG9mZih0eXBlLGhhbmRsZXIpe2lmKGFsbFt0eXBlXSl7YWxsW3R5cGVdLnNwbGljZShhbGxbdHlwZV0uaW5kZXhPZihoYW5kbGVyKT4+PjAsMSk7fX0sZW1pdCh0eXBlLC4uLmV2dHMpey8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBhcnJheS1jYWxsYmFjay1yZXR1cm5cbjsoYWxsW3R5cGVdfHxbXSkuc2xpY2UoKS5tYXAoaGFuZGxlcj0+e2hhbmRsZXIoLi4uZXZ0cyk7fSk7fX07fVxuLy8jIHNvdXJjZU1hcHBpbmdVUkw9bWl0dC5qcy5tYXAiLCJcInVzZSBzdHJpY3RcIjtleHBvcnRzLl9fZXNNb2R1bGU9dHJ1ZTtleHBvcnRzLmdldERvbWFpbkxvY2FsZT1nZXREb21haW5Mb2NhbGU7ZXhwb3J0cy5hZGRMb2NhbGU9YWRkTG9jYWxlO2V4cG9ydHMuZGVsTG9jYWxlPWRlbExvY2FsZTtleHBvcnRzLmhhc0Jhc2VQYXRoPWhhc0Jhc2VQYXRoO2V4cG9ydHMuYWRkQmFzZVBhdGg9YWRkQmFzZVBhdGg7ZXhwb3J0cy5kZWxCYXNlUGF0aD1kZWxCYXNlUGF0aDtleHBvcnRzLmlzTG9jYWxVUkw9aXNMb2NhbFVSTDtleHBvcnRzLmludGVycG9sYXRlQXM9aW50ZXJwb2xhdGVBcztleHBvcnRzLnJlc29sdmVIcmVmPXJlc29sdmVIcmVmO2V4cG9ydHMuZGVmYXVsdD12b2lkIDA7dmFyIF9ub3JtYWxpemVUcmFpbGluZ1NsYXNoPXJlcXVpcmUoXCIuLi8uLi8uLi9jbGllbnQvbm9ybWFsaXplLXRyYWlsaW5nLXNsYXNoXCIpO3ZhciBfcm91dGVMb2FkZXI9cmVxdWlyZShcIi4uLy4uLy4uL2NsaWVudC9yb3V0ZS1sb2FkZXJcIik7dmFyIF9kZW5vcm1hbGl6ZVBhZ2VQYXRoPXJlcXVpcmUoXCIuLi8uLi9zZXJ2ZXIvZGVub3JtYWxpemUtcGFnZS1wYXRoXCIpO3ZhciBfbm9ybWFsaXplTG9jYWxlUGF0aD1yZXF1aXJlKFwiLi4vaTE4bi9ub3JtYWxpemUtbG9jYWxlLXBhdGhcIik7dmFyIF9taXR0PV9pbnRlcm9wUmVxdWlyZURlZmF1bHQocmVxdWlyZShcIi4uL21pdHRcIikpO3ZhciBfdXRpbHM9cmVxdWlyZShcIi4uL3V0aWxzXCIpO3ZhciBfaXNEeW5hbWljPXJlcXVpcmUoXCIuL3V0aWxzL2lzLWR5bmFtaWNcIik7dmFyIF9wYXJzZVJlbGF0aXZlVXJsPXJlcXVpcmUoXCIuL3V0aWxzL3BhcnNlLXJlbGF0aXZlLXVybFwiKTt2YXIgX3F1ZXJ5c3RyaW5nPXJlcXVpcmUoXCIuL3V0aWxzL3F1ZXJ5c3RyaW5nXCIpO3ZhciBfcmVzb2x2ZVJld3JpdGVzPV9pbnRlcm9wUmVxdWlyZURlZmF1bHQocmVxdWlyZShcIi4vdXRpbHMvcmVzb2x2ZS1yZXdyaXRlc1wiKSk7dmFyIF9yb3V0ZU1hdGNoZXI9cmVxdWlyZShcIi4vdXRpbHMvcm91dGUtbWF0Y2hlclwiKTt2YXIgX3JvdXRlUmVnZXg9cmVxdWlyZShcIi4vdXRpbHMvcm91dGUtcmVnZXhcIik7ZnVuY3Rpb24gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChvYmope3JldHVybiBvYmomJm9iai5fX2VzTW9kdWxlP29iajp7ZGVmYXVsdDpvYmp9O30vLyB0c2xpbnQ6ZGlzYWJsZTpuby1jb25zb2xlXG5sZXQgZGV0ZWN0RG9tYWluTG9jYWxlO2lmKHByb2Nlc3MuZW52Ll9fTkVYVF9JMThOX1NVUFBPUlQpe2RldGVjdERvbWFpbkxvY2FsZT1yZXF1aXJlKCcuLi9pMThuL2RldGVjdC1kb21haW4tbG9jYWxlJykuZGV0ZWN0RG9tYWluTG9jYWxlO31jb25zdCBiYXNlUGF0aD1wcm9jZXNzLmVudi5fX05FWFRfUk9VVEVSX0JBU0VQQVRIfHwnJztmdW5jdGlvbiBidWlsZENhbmNlbGxhdGlvbkVycm9yKCl7cmV0dXJuIE9iamVjdC5hc3NpZ24obmV3IEVycm9yKCdSb3V0ZSBDYW5jZWxsZWQnKSx7Y2FuY2VsbGVkOnRydWV9KTt9ZnVuY3Rpb24gYWRkUGF0aFByZWZpeChwYXRoLHByZWZpeCl7cmV0dXJuIHByZWZpeCYmcGF0aC5zdGFydHNXaXRoKCcvJyk/cGF0aD09PScvJz8oMCxfbm9ybWFsaXplVHJhaWxpbmdTbGFzaC5ub3JtYWxpemVQYXRoVHJhaWxpbmdTbGFzaCkocHJlZml4KTpgJHtwcmVmaXh9JHtwYXRoTm9RdWVyeUhhc2gocGF0aCk9PT0nLyc/cGF0aC5zdWJzdHJpbmcoMSk6cGF0aH1gOnBhdGg7fWZ1bmN0aW9uIGdldERvbWFpbkxvY2FsZShwYXRoLGxvY2FsZSxsb2NhbGVzLGRvbWFpbkxvY2FsZXMpe2lmKHByb2Nlc3MuZW52Ll9fTkVYVF9JMThOX1NVUFBPUlQpe2xvY2FsZT1sb2NhbGV8fCgwLF9ub3JtYWxpemVMb2NhbGVQYXRoLm5vcm1hbGl6ZUxvY2FsZVBhdGgpKHBhdGgsbG9jYWxlcykuZGV0ZWN0ZWRMb2NhbGU7Y29uc3QgZGV0ZWN0ZWREb21haW49ZGV0ZWN0RG9tYWluTG9jYWxlKGRvbWFpbkxvY2FsZXMsdW5kZWZpbmVkLGxvY2FsZSk7aWYoZGV0ZWN0ZWREb21haW4pe3JldHVybmBodHRwJHtkZXRlY3RlZERvbWFpbi5odHRwPycnOidzJ306Ly8ke2RldGVjdGVkRG9tYWluLmRvbWFpbn0ke2Jhc2VQYXRofHwnJ30ke2xvY2FsZT09PWRldGVjdGVkRG9tYWluLmRlZmF1bHRMb2NhbGU/Jyc6YC8ke2xvY2FsZX1gfSR7cGF0aH1gO31yZXR1cm4gZmFsc2U7fXJldHVybiBmYWxzZTt9ZnVuY3Rpb24gYWRkTG9jYWxlKHBhdGgsbG9jYWxlLGRlZmF1bHRMb2NhbGUpe2lmKHByb2Nlc3MuZW52Ll9fTkVYVF9JMThOX1NVUFBPUlQpe2NvbnN0IHBhdGhuYW1lPXBhdGhOb1F1ZXJ5SGFzaChwYXRoKTtjb25zdCBwYXRoTG93ZXI9cGF0aG5hbWUudG9Mb3dlckNhc2UoKTtjb25zdCBsb2NhbGVMb3dlcj1sb2NhbGUmJmxvY2FsZS50b0xvd2VyQ2FzZSgpO3JldHVybiBsb2NhbGUmJmxvY2FsZSE9PWRlZmF1bHRMb2NhbGUmJiFwYXRoTG93ZXIuc3RhcnRzV2l0aCgnLycrbG9jYWxlTG93ZXIrJy8nKSYmcGF0aExvd2VyIT09Jy8nK2xvY2FsZUxvd2VyP2FkZFBhdGhQcmVmaXgocGF0aCwnLycrbG9jYWxlKTpwYXRoO31yZXR1cm4gcGF0aDt9ZnVuY3Rpb24gZGVsTG9jYWxlKHBhdGgsbG9jYWxlKXtpZihwcm9jZXNzLmVudi5fX05FWFRfSTE4Tl9TVVBQT1JUKXtjb25zdCBwYXRobmFtZT1wYXRoTm9RdWVyeUhhc2gocGF0aCk7Y29uc3QgcGF0aExvd2VyPXBhdGhuYW1lLnRvTG93ZXJDYXNlKCk7Y29uc3QgbG9jYWxlTG93ZXI9bG9jYWxlJiZsb2NhbGUudG9Mb3dlckNhc2UoKTtyZXR1cm4gbG9jYWxlJiYocGF0aExvd2VyLnN0YXJ0c1dpdGgoJy8nK2xvY2FsZUxvd2VyKycvJyl8fHBhdGhMb3dlcj09PScvJytsb2NhbGVMb3dlcik/KHBhdGhuYW1lLmxlbmd0aD09PWxvY2FsZS5sZW5ndGgrMT8nLyc6JycpK3BhdGguc3Vic3RyKGxvY2FsZS5sZW5ndGgrMSk6cGF0aDt9cmV0dXJuIHBhdGg7fWZ1bmN0aW9uIHBhdGhOb1F1ZXJ5SGFzaChwYXRoKXtjb25zdCBxdWVyeUluZGV4PXBhdGguaW5kZXhPZignPycpO2NvbnN0IGhhc2hJbmRleD1wYXRoLmluZGV4T2YoJyMnKTtpZihxdWVyeUluZGV4Pi0xfHxoYXNoSW5kZXg+LTEpe3BhdGg9cGF0aC5zdWJzdHJpbmcoMCxxdWVyeUluZGV4Pi0xP3F1ZXJ5SW5kZXg6aGFzaEluZGV4KTt9cmV0dXJuIHBhdGg7fWZ1bmN0aW9uIGhhc0Jhc2VQYXRoKHBhdGgpe3BhdGg9cGF0aE5vUXVlcnlIYXNoKHBhdGgpO3JldHVybiBwYXRoPT09YmFzZVBhdGh8fHBhdGguc3RhcnRzV2l0aChiYXNlUGF0aCsnLycpO31mdW5jdGlvbiBhZGRCYXNlUGF0aChwYXRoKXsvLyB3ZSBvbmx5IGFkZCB0aGUgYmFzZXBhdGggb24gcmVsYXRpdmUgdXJsc1xucmV0dXJuIGFkZFBhdGhQcmVmaXgocGF0aCxiYXNlUGF0aCk7fWZ1bmN0aW9uIGRlbEJhc2VQYXRoKHBhdGgpe3BhdGg9cGF0aC5zbGljZShiYXNlUGF0aC5sZW5ndGgpO2lmKCFwYXRoLnN0YXJ0c1dpdGgoJy8nKSlwYXRoPWAvJHtwYXRofWA7cmV0dXJuIHBhdGg7fS8qKlxuICogRGV0ZWN0cyB3aGV0aGVyIGEgZ2l2ZW4gdXJsIGlzIHJvdXRhYmxlIGJ5IHRoZSBOZXh0LmpzIHJvdXRlciAoYnJvd3NlciBvbmx5KS5cbiAqL2Z1bmN0aW9uIGlzTG9jYWxVUkwodXJsKXsvLyBwcmV2ZW50IGEgaHlkcmF0aW9uIG1pc21hdGNoIG9uIGhyZWYgZm9yIHVybCB3aXRoIGFuY2hvciByZWZzXG5pZih1cmwuc3RhcnRzV2l0aCgnLycpfHx1cmwuc3RhcnRzV2l0aCgnIycpfHx1cmwuc3RhcnRzV2l0aCgnPycpKXJldHVybiB0cnVlO3RyeXsvLyBhYnNvbHV0ZSB1cmxzIGNhbiBiZSBsb2NhbCBpZiB0aGV5IGFyZSBvbiB0aGUgc2FtZSBvcmlnaW5cbmNvbnN0IGxvY2F0aW9uT3JpZ2luPSgwLF91dGlscy5nZXRMb2NhdGlvbk9yaWdpbikoKTtjb25zdCByZXNvbHZlZD1uZXcgVVJMKHVybCxsb2NhdGlvbk9yaWdpbik7cmV0dXJuIHJlc29sdmVkLm9yaWdpbj09PWxvY2F0aW9uT3JpZ2luJiZoYXNCYXNlUGF0aChyZXNvbHZlZC5wYXRobmFtZSk7fWNhdGNoKF8pe3JldHVybiBmYWxzZTt9fWZ1bmN0aW9uIGludGVycG9sYXRlQXMocm91dGUsYXNQYXRobmFtZSxxdWVyeSl7bGV0IGludGVycG9sYXRlZFJvdXRlPScnO2NvbnN0IGR5bmFtaWNSZWdleD0oMCxfcm91dGVSZWdleC5nZXRSb3V0ZVJlZ2V4KShyb3V0ZSk7Y29uc3QgZHluYW1pY0dyb3Vwcz1keW5hbWljUmVnZXguZ3JvdXBzO2NvbnN0IGR5bmFtaWNNYXRjaGVzPS8vIFRyeSB0byBtYXRjaCB0aGUgZHluYW1pYyByb3V0ZSBhZ2FpbnN0IHRoZSBhc1BhdGhcbihhc1BhdGhuYW1lIT09cm91dGU/KDAsX3JvdXRlTWF0Y2hlci5nZXRSb3V0ZU1hdGNoZXIpKGR5bmFtaWNSZWdleCkoYXNQYXRobmFtZSk6JycpfHwvLyBGYWxsIGJhY2sgdG8gcmVhZGluZyB0aGUgdmFsdWVzIGZyb20gdGhlIGhyZWZcbi8vIFRPRE86IHNob3VsZCB0aGlzIHRha2UgcHJpb3JpdHk7IGFsc28gbmVlZCB0byBjaGFuZ2UgaW4gdGhlIHJvdXRlci5cbnF1ZXJ5O2ludGVycG9sYXRlZFJvdXRlPXJvdXRlO2NvbnN0IHBhcmFtcz1PYmplY3Qua2V5cyhkeW5hbWljR3JvdXBzKTtpZighcGFyYW1zLmV2ZXJ5KHBhcmFtPT57bGV0IHZhbHVlPWR5bmFtaWNNYXRjaGVzW3BhcmFtXXx8Jyc7Y29uc3R7cmVwZWF0LG9wdGlvbmFsfT1keW5hbWljR3JvdXBzW3BhcmFtXTsvLyBzdXBwb3J0IHNpbmdsZS1sZXZlbCBjYXRjaC1hbGxcbi8vIFRPRE86IG1vcmUgcm9idXN0IGhhbmRsaW5nIGZvciB1c2VyLWVycm9yIChwYXNzaW5nIGAvYClcbmxldCByZXBsYWNlZD1gWyR7cmVwZWF0PycuLi4nOicnfSR7cGFyYW19XWA7aWYob3B0aW9uYWwpe3JlcGxhY2VkPWAkeyF2YWx1ZT8nLyc6Jyd9WyR7cmVwbGFjZWR9XWA7fWlmKHJlcGVhdCYmIUFycmF5LmlzQXJyYXkodmFsdWUpKXZhbHVlPVt2YWx1ZV07cmV0dXJuKG9wdGlvbmFsfHxwYXJhbSBpbiBkeW5hbWljTWF0Y2hlcykmJigvLyBJbnRlcnBvbGF0ZSBncm91cCBpbnRvIGRhdGEgVVJMIGlmIHByZXNlbnRcbmludGVycG9sYXRlZFJvdXRlPWludGVycG9sYXRlZFJvdXRlLnJlcGxhY2UocmVwbGFjZWQscmVwZWF0P3ZhbHVlLm1hcCgvLyB0aGVzZSB2YWx1ZXMgc2hvdWxkIGJlIGZ1bGx5IGVuY29kZWQgaW5zdGVhZCBvZiBqdXN0XG4vLyBwYXRoIGRlbGltaXRlciBlc2NhcGVkIHNpbmNlIHRoZXkgYXJlIGJlaW5nIGluc2VydGVkXG4vLyBpbnRvIHRoZSBVUkwgYW5kIHdlIGV4cGVjdCBVUkwgZW5jb2RlZCBzZWdtZW50c1xuLy8gd2hlbiBwYXJzaW5nIGR5bmFtaWMgcm91dGUgcGFyYW1zXG5zZWdtZW50PT5lbmNvZGVVUklDb21wb25lbnQoc2VnbWVudCkpLmpvaW4oJy8nKTplbmNvZGVVUklDb21wb25lbnQodmFsdWUpKXx8Jy8nKTt9KSl7aW50ZXJwb2xhdGVkUm91dGU9Jyc7Ly8gZGlkIG5vdCBzYXRpc2Z5IGFsbCByZXF1aXJlbWVudHNcbi8vIG4uYi4gV2UgaWdub3JlIHRoaXMgZXJyb3IgYmVjYXVzZSB3ZSBoYW5kbGUgd2FybmluZyBmb3IgdGhpcyBjYXNlIGluXG4vLyBkZXZlbG9wbWVudCBpbiB0aGUgYDxMaW5rPmAgY29tcG9uZW50IGRpcmVjdGx5LlxufXJldHVybntwYXJhbXMscmVzdWx0OmludGVycG9sYXRlZFJvdXRlfTt9ZnVuY3Rpb24gb21pdFBhcm1zRnJvbVF1ZXJ5KHF1ZXJ5LHBhcmFtcyl7Y29uc3QgZmlsdGVyZWRRdWVyeT17fTtPYmplY3Qua2V5cyhxdWVyeSkuZm9yRWFjaChrZXk9PntpZighcGFyYW1zLmluY2x1ZGVzKGtleSkpe2ZpbHRlcmVkUXVlcnlba2V5XT1xdWVyeVtrZXldO319KTtyZXR1cm4gZmlsdGVyZWRRdWVyeTt9LyoqXG4gKiBSZXNvbHZlcyBhIGdpdmVuIGh5cGVybGluayB3aXRoIGEgY2VydGFpbiByb3V0ZXIgc3RhdGUgKGJhc2VQYXRoIG5vdCBpbmNsdWRlZCkuXG4gKiBQcmVzZXJ2ZXMgYWJzb2x1dGUgdXJscy5cbiAqL2Z1bmN0aW9uIHJlc29sdmVIcmVmKHJvdXRlcixocmVmLHJlc29sdmVBcyl7Ly8gd2UgdXNlIGEgZHVtbXkgYmFzZSB1cmwgZm9yIHJlbGF0aXZlIHVybHNcbmxldCBiYXNlO2NvbnN0IHVybEFzU3RyaW5nPXR5cGVvZiBocmVmPT09J3N0cmluZyc/aHJlZjooMCxfdXRpbHMuZm9ybWF0V2l0aFZhbGlkYXRpb24pKGhyZWYpO3RyeXtiYXNlPW5ldyBVUkwodXJsQXNTdHJpbmcuc3RhcnRzV2l0aCgnIycpP3JvdXRlci5hc1BhdGg6cm91dGVyLnBhdGhuYW1lLCdodHRwOi8vbicpO31jYXRjaChfKXsvLyBmYWxsYmFjayB0byAvIGZvciBpbnZhbGlkIGFzUGF0aCB2YWx1ZXMgZS5nLiAvL1xuYmFzZT1uZXcgVVJMKCcvJywnaHR0cDovL24nKTt9Ly8gUmV0dXJuIGJlY2F1c2UgaXQgY2Fubm90IGJlIHJvdXRlZCBieSB0aGUgTmV4dC5qcyByb3V0ZXJcbmlmKCFpc0xvY2FsVVJMKHVybEFzU3RyaW5nKSl7cmV0dXJuIHJlc29sdmVBcz9bdXJsQXNTdHJpbmddOnVybEFzU3RyaW5nO310cnl7Y29uc3QgZmluYWxVcmw9bmV3IFVSTCh1cmxBc1N0cmluZyxiYXNlKTtmaW5hbFVybC5wYXRobmFtZT0oMCxfbm9ybWFsaXplVHJhaWxpbmdTbGFzaC5ub3JtYWxpemVQYXRoVHJhaWxpbmdTbGFzaCkoZmluYWxVcmwucGF0aG5hbWUpO2xldCBpbnRlcnBvbGF0ZWRBcz0nJztpZigoMCxfaXNEeW5hbWljLmlzRHluYW1pY1JvdXRlKShmaW5hbFVybC5wYXRobmFtZSkmJmZpbmFsVXJsLnNlYXJjaFBhcmFtcyYmcmVzb2x2ZUFzKXtjb25zdCBxdWVyeT0oMCxfcXVlcnlzdHJpbmcuc2VhcmNoUGFyYW1zVG9VcmxRdWVyeSkoZmluYWxVcmwuc2VhcmNoUGFyYW1zKTtjb25zdHtyZXN1bHQscGFyYW1zfT1pbnRlcnBvbGF0ZUFzKGZpbmFsVXJsLnBhdGhuYW1lLGZpbmFsVXJsLnBhdGhuYW1lLHF1ZXJ5KTtpZihyZXN1bHQpe2ludGVycG9sYXRlZEFzPSgwLF91dGlscy5mb3JtYXRXaXRoVmFsaWRhdGlvbikoe3BhdGhuYW1lOnJlc3VsdCxoYXNoOmZpbmFsVXJsLmhhc2gscXVlcnk6b21pdFBhcm1zRnJvbVF1ZXJ5KHF1ZXJ5LHBhcmFtcyl9KTt9fS8vIGlmIHRoZSBvcmlnaW4gZGlkbid0IGNoYW5nZSwgaXQgbWVhbnMgd2UgcmVjZWl2ZWQgYSByZWxhdGl2ZSBocmVmXG5jb25zdCByZXNvbHZlZEhyZWY9ZmluYWxVcmwub3JpZ2luPT09YmFzZS5vcmlnaW4/ZmluYWxVcmwuaHJlZi5zbGljZShmaW5hbFVybC5vcmlnaW4ubGVuZ3RoKTpmaW5hbFVybC5ocmVmO3JldHVybiByZXNvbHZlQXM/W3Jlc29sdmVkSHJlZixpbnRlcnBvbGF0ZWRBc3x8cmVzb2x2ZWRIcmVmXTpyZXNvbHZlZEhyZWY7fWNhdGNoKF8pe3JldHVybiByZXNvbHZlQXM/W3VybEFzU3RyaW5nXTp1cmxBc1N0cmluZzt9fWZ1bmN0aW9uIHN0cmlwT3JpZ2luKHVybCl7Y29uc3Qgb3JpZ2luPSgwLF91dGlscy5nZXRMb2NhdGlvbk9yaWdpbikoKTtyZXR1cm4gdXJsLnN0YXJ0c1dpdGgob3JpZ2luKT91cmwuc3Vic3RyaW5nKG9yaWdpbi5sZW5ndGgpOnVybDt9ZnVuY3Rpb24gcHJlcGFyZVVybEFzKHJvdXRlcix1cmwsYXMpey8vIElmIHVybCBhbmQgYXMgcHJvdmlkZWQgYXMgYW4gb2JqZWN0IHJlcHJlc2VudGF0aW9uLFxuLy8gd2UnbGwgZm9ybWF0IHRoZW0gaW50byB0aGUgc3RyaW5nIHZlcnNpb24gaGVyZS5cbmxldFtyZXNvbHZlZEhyZWYscmVzb2x2ZWRBc109cmVzb2x2ZUhyZWYocm91dGVyLHVybCx0cnVlKTtjb25zdCBvcmlnaW49KDAsX3V0aWxzLmdldExvY2F0aW9uT3JpZ2luKSgpO2NvbnN0IGhyZWZIYWRPcmlnaW49cmVzb2x2ZWRIcmVmLnN0YXJ0c1dpdGgob3JpZ2luKTtjb25zdCBhc0hhZE9yaWdpbj1yZXNvbHZlZEFzJiZyZXNvbHZlZEFzLnN0YXJ0c1dpdGgob3JpZ2luKTtyZXNvbHZlZEhyZWY9c3RyaXBPcmlnaW4ocmVzb2x2ZWRIcmVmKTtyZXNvbHZlZEFzPXJlc29sdmVkQXM/c3RyaXBPcmlnaW4ocmVzb2x2ZWRBcyk6cmVzb2x2ZWRBcztjb25zdCBwcmVwYXJlZFVybD1ocmVmSGFkT3JpZ2luP3Jlc29sdmVkSHJlZjphZGRCYXNlUGF0aChyZXNvbHZlZEhyZWYpO2NvbnN0IHByZXBhcmVkQXM9YXM/c3RyaXBPcmlnaW4ocmVzb2x2ZUhyZWYocm91dGVyLGFzKSk6cmVzb2x2ZWRBc3x8cmVzb2x2ZWRIcmVmO3JldHVybnt1cmw6cHJlcGFyZWRVcmwsYXM6YXNIYWRPcmlnaW4/cHJlcGFyZWRBczphZGRCYXNlUGF0aChwcmVwYXJlZEFzKX07fWZ1bmN0aW9uIHJlc29sdmVEeW5hbWljUm91dGUocGF0aG5hbWUscGFnZXMpe2NvbnN0IGNsZWFuUGF0aG5hbWU9KDAsX25vcm1hbGl6ZVRyYWlsaW5nU2xhc2gucmVtb3ZlUGF0aFRyYWlsaW5nU2xhc2gpKCgwLF9kZW5vcm1hbGl6ZVBhZ2VQYXRoLmRlbm9ybWFsaXplUGFnZVBhdGgpKHBhdGhuYW1lKSk7aWYoY2xlYW5QYXRobmFtZT09PScvNDA0J3x8Y2xlYW5QYXRobmFtZT09PScvX2Vycm9yJyl7cmV0dXJuIHBhdGhuYW1lO30vLyBoYW5kbGUgcmVzb2x2aW5nIGhyZWYgZm9yIGR5bmFtaWMgcm91dGVzXG5pZighcGFnZXMuaW5jbHVkZXMoY2xlYW5QYXRobmFtZSkpey8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBhcnJheS1jYWxsYmFjay1yZXR1cm5cbnBhZ2VzLnNvbWUocGFnZT0+e2lmKCgwLF9pc0R5bmFtaWMuaXNEeW5hbWljUm91dGUpKHBhZ2UpJiYoMCxfcm91dGVSZWdleC5nZXRSb3V0ZVJlZ2V4KShwYWdlKS5yZS50ZXN0KGNsZWFuUGF0aG5hbWUpKXtwYXRobmFtZT1wYWdlO3JldHVybiB0cnVlO319KTt9cmV0dXJuKDAsX25vcm1hbGl6ZVRyYWlsaW5nU2xhc2gucmVtb3ZlUGF0aFRyYWlsaW5nU2xhc2gpKHBhdGhuYW1lKTt9Y29uc3QgbWFudWFsU2Nyb2xsUmVzdG9yYXRpb249cHJvY2Vzcy5lbnYuX19ORVhUX1NDUk9MTF9SRVNUT1JBVElPTiYmdHlwZW9mIHdpbmRvdyE9PSd1bmRlZmluZWQnJiYnc2Nyb2xsUmVzdG9yYXRpb24naW4gd2luZG93Lmhpc3RvcnkmJiEhZnVuY3Rpb24oKXt0cnl7bGV0IHY9J19fbmV4dCc7Ly8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLXNlcXVlbmNlc1xucmV0dXJuIHNlc3Npb25TdG9yYWdlLnNldEl0ZW0odix2KSxzZXNzaW9uU3RvcmFnZS5yZW1vdmVJdGVtKHYpLHRydWU7fWNhdGNoKG4pe319KCk7Y29uc3QgU1NHX0RBVEFfTk9UX0ZPVU5EPVN5bWJvbCgnU1NHX0RBVEFfTk9UX0ZPVU5EJyk7ZnVuY3Rpb24gZmV0Y2hSZXRyeSh1cmwsYXR0ZW1wdHMpe3JldHVybiBmZXRjaCh1cmwsey8vIENvb2tpZXMgYXJlIHJlcXVpcmVkIHRvIGJlIHByZXNlbnQgZm9yIE5leHQuanMnIFNTRyBcIlByZXZpZXcgTW9kZVwiLlxuLy8gQ29va2llcyBtYXkgYWxzbyBiZSByZXF1aXJlZCBmb3IgYGdldFNlcnZlclNpZGVQcm9wc2AuXG4vL1xuLy8gPiBgZmV0Y2hgIHdvbuKAmXQgc2VuZCBjb29raWVzLCB1bmxlc3MgeW91IHNldCB0aGUgY3JlZGVudGlhbHMgaW5pdFxuLy8gPiBvcHRpb24uXG4vLyBodHRwczovL2RldmVsb3Blci5tb3ppbGxhLm9yZy9lbi1VUy9kb2NzL1dlYi9BUEkvRmV0Y2hfQVBJL1VzaW5nX0ZldGNoXG4vL1xuLy8gPiBGb3IgbWF4aW11bSBicm93c2VyIGNvbXBhdGliaWxpdHkgd2hlbiBpdCBjb21lcyB0byBzZW5kaW5nICZcbi8vID4gcmVjZWl2aW5nIGNvb2tpZXMsIGFsd2F5cyBzdXBwbHkgdGhlIGBjcmVkZW50aWFsczogJ3NhbWUtb3JpZ2luJ2Bcbi8vID4gb3B0aW9uIGluc3RlYWQgb2YgcmVseWluZyBvbiB0aGUgZGVmYXVsdC5cbi8vIGh0dHBzOi8vZ2l0aHViLmNvbS9naXRodWIvZmV0Y2gjY2F2ZWF0c1xuY3JlZGVudGlhbHM6J3NhbWUtb3JpZ2luJ30pLnRoZW4ocmVzPT57aWYoIXJlcy5vayl7aWYoYXR0ZW1wdHM+MSYmcmVzLnN0YXR1cz49NTAwKXtyZXR1cm4gZmV0Y2hSZXRyeSh1cmwsYXR0ZW1wdHMtMSk7fWlmKHJlcy5zdGF0dXM9PT00MDQpe3JldHVybiByZXMuanNvbigpLnRoZW4oZGF0YT0+e2lmKGRhdGEubm90Rm91bmQpe3JldHVybntub3RGb3VuZDpTU0dfREFUQV9OT1RfRk9VTkR9O310aHJvdyBuZXcgRXJyb3IoYEZhaWxlZCB0byBsb2FkIHN0YXRpYyBwcm9wc2ApO30pO310aHJvdyBuZXcgRXJyb3IoYEZhaWxlZCB0byBsb2FkIHN0YXRpYyBwcm9wc2ApO31yZXR1cm4gcmVzLmpzb24oKTt9KTt9ZnVuY3Rpb24gZmV0Y2hOZXh0RGF0YShkYXRhSHJlZixpc1NlcnZlclJlbmRlcil7cmV0dXJuIGZldGNoUmV0cnkoZGF0YUhyZWYsaXNTZXJ2ZXJSZW5kZXI/MzoxKS5jYXRjaChlcnI9PnsvLyBXZSBzaG91bGQgb25seSB0cmlnZ2VyIGEgc2VydmVyLXNpZGUgdHJhbnNpdGlvbiBpZiB0aGlzIHdhcyBjYXVzZWRcbi8vIG9uIGEgY2xpZW50LXNpZGUgdHJhbnNpdGlvbi4gT3RoZXJ3aXNlLCB3ZSdkIGdldCBpbnRvIGFuIGluZmluaXRlXG4vLyBsb29wLlxuaWYoIWlzU2VydmVyUmVuZGVyKXsoMCxfcm91dGVMb2FkZXIubWFya0Fzc2V0RXJyb3IpKGVycik7fXRocm93IGVycjt9KTt9Y2xhc3MgUm91dGVyey8qKlxuICAgKiBNYXAgb2YgYWxsIGNvbXBvbmVudHMgbG9hZGVkIGluIGBSb3V0ZXJgXG4gICAqLyAvLyBTdGF0aWMgRGF0YSBDYWNoZVxuLy8gSW4tZmxpZ2h0IFNlcnZlciBEYXRhIFJlcXVlc3RzLCBmb3IgZGVkdXBpbmdcbmNvbnN0cnVjdG9yKF9wYXRobmFtZSxfcXVlcnksX2FzLHtpbml0aWFsUHJvcHMscGFnZUxvYWRlcixBcHAsd3JhcEFwcCxDb21wb25lbnQsZXJyLHN1YnNjcmlwdGlvbixpc0ZhbGxiYWNrLGxvY2FsZSxsb2NhbGVzLGRlZmF1bHRMb2NhbGUsZG9tYWluTG9jYWxlcyxpc1ByZXZpZXd9KXt0aGlzLnJvdXRlPXZvaWQgMDt0aGlzLnBhdGhuYW1lPXZvaWQgMDt0aGlzLnF1ZXJ5PXZvaWQgMDt0aGlzLmFzUGF0aD12b2lkIDA7dGhpcy5iYXNlUGF0aD12b2lkIDA7dGhpcy5jb21wb25lbnRzPXZvaWQgMDt0aGlzLnNkYz17fTt0aGlzLnNkcj17fTt0aGlzLnN1Yj12b2lkIDA7dGhpcy5jbGM9dm9pZCAwO3RoaXMucGFnZUxvYWRlcj12b2lkIDA7dGhpcy5fYnBzPXZvaWQgMDt0aGlzLmV2ZW50cz12b2lkIDA7dGhpcy5fd3JhcEFwcD12b2lkIDA7dGhpcy5pc1Nzcj12b2lkIDA7dGhpcy5pc0ZhbGxiYWNrPXZvaWQgMDt0aGlzLl9pbkZsaWdodFJvdXRlPXZvaWQgMDt0aGlzLl9zaGFsbG93PXZvaWQgMDt0aGlzLmxvY2FsZT12b2lkIDA7dGhpcy5sb2NhbGVzPXZvaWQgMDt0aGlzLmRlZmF1bHRMb2NhbGU9dm9pZCAwO3RoaXMuZG9tYWluTG9jYWxlcz12b2lkIDA7dGhpcy5pc1JlYWR5PXZvaWQgMDt0aGlzLmlzUHJldmlldz12b2lkIDA7dGhpcy5pc0xvY2FsZURvbWFpbj12b2lkIDA7dGhpcy5faWR4PTA7dGhpcy5vblBvcFN0YXRlPWU9Pntjb25zdCBzdGF0ZT1lLnN0YXRlO2lmKCFzdGF0ZSl7Ly8gV2UgZ2V0IHN0YXRlIGFzIHVuZGVmaW5lZCBmb3IgdHdvIHJlYXNvbnMuXG4vLyAgMS4gV2l0aCBvbGRlciBzYWZhcmkgKDwgOCkgYW5kIG9sZGVyIGNocm9tZSAoPCAzNClcbi8vICAyLiBXaGVuIHRoZSBVUkwgY2hhbmdlZCB3aXRoICNcbi8vXG4vLyBJbiB0aGUgYm90aCBjYXNlcywgd2UgZG9uJ3QgbmVlZCB0byBwcm9jZWVkIGFuZCBjaGFuZ2UgdGhlIHJvdXRlLlxuLy8gKGFzIGl0J3MgYWxyZWFkeSBjaGFuZ2VkKVxuLy8gQnV0IHdlIGNhbiBzaW1wbHkgcmVwbGFjZSB0aGUgc3RhdGUgd2l0aCB0aGUgbmV3IGNoYW5nZXMuXG4vLyBBY3R1YWxseSwgZm9yICgxKSB3ZSBkb24ndCBuZWVkIHRvIG5vdGhpbmcuIEJ1dCBpdCdzIGhhcmQgdG8gZGV0ZWN0IHRoYXQgZXZlbnQuXG4vLyBTbywgZG9pbmcgdGhlIGZvbGxvd2luZyBmb3IgKDEpIGRvZXMgbm8gaGFybS5cbmNvbnN0e3BhdGhuYW1lLHF1ZXJ5fT10aGlzO3RoaXMuY2hhbmdlU3RhdGUoJ3JlcGxhY2VTdGF0ZScsKDAsX3V0aWxzLmZvcm1hdFdpdGhWYWxpZGF0aW9uKSh7cGF0aG5hbWU6YWRkQmFzZVBhdGgocGF0aG5hbWUpLHF1ZXJ5fSksKDAsX3V0aWxzLmdldFVSTCkoKSk7cmV0dXJuO31pZighc3RhdGUuX19OKXtyZXR1cm47fWxldCBmb3JjZWRTY3JvbGw7Y29uc3R7dXJsLGFzLG9wdGlvbnMsaWR4fT1zdGF0ZTtpZihwcm9jZXNzLmVudi5fX05FWFRfU0NST0xMX1JFU1RPUkFUSU9OKXtpZihtYW51YWxTY3JvbGxSZXN0b3JhdGlvbil7aWYodGhpcy5faWR4IT09aWR4KXsvLyBTbmFwc2hvdCBjdXJyZW50IHNjcm9sbCBwb3NpdGlvbjpcbnRyeXtzZXNzaW9uU3RvcmFnZS5zZXRJdGVtKCdfX25leHRfc2Nyb2xsXycrdGhpcy5faWR4LEpTT04uc3RyaW5naWZ5KHt4OnNlbGYucGFnZVhPZmZzZXQseTpzZWxmLnBhZ2VZT2Zmc2V0fSkpO31jYXRjaChfdW51c2VkKXt9Ly8gUmVzdG9yZSBvbGQgc2Nyb2xsIHBvc2l0aW9uOlxudHJ5e2NvbnN0IHY9c2Vzc2lvblN0b3JhZ2UuZ2V0SXRlbSgnX19uZXh0X3Njcm9sbF8nK2lkeCk7Zm9yY2VkU2Nyb2xsPUpTT04ucGFyc2Uodik7fWNhdGNoKF91bnVzZWQyKXtmb3JjZWRTY3JvbGw9e3g6MCx5OjB9O319fX10aGlzLl9pZHg9aWR4O2NvbnN0e3BhdGhuYW1lfT0oMCxfcGFyc2VSZWxhdGl2ZVVybC5wYXJzZVJlbGF0aXZlVXJsKSh1cmwpOy8vIE1ha2Ugc3VyZSB3ZSBkb24ndCByZS1yZW5kZXIgb24gaW5pdGlhbCBsb2FkLFxuLy8gY2FuIGJlIGNhdXNlZCBieSBuYXZpZ2F0aW5nIGJhY2sgZnJvbSBhbiBleHRlcm5hbCBzaXRlXG5pZih0aGlzLmlzU3NyJiZhcz09PXRoaXMuYXNQYXRoJiZwYXRobmFtZT09PXRoaXMucGF0aG5hbWUpe3JldHVybjt9Ly8gSWYgdGhlIGRvd25zdHJlYW0gYXBwbGljYXRpb24gcmV0dXJucyBmYWxzeSwgcmV0dXJuLlxuLy8gVGhleSB3aWxsIHRoZW4gYmUgcmVzcG9uc2libGUgZm9yIGhhbmRsaW5nIHRoZSBldmVudC5cbmlmKHRoaXMuX2JwcyYmIXRoaXMuX2JwcyhzdGF0ZSkpe3JldHVybjt9dGhpcy5jaGFuZ2UoJ3JlcGxhY2VTdGF0ZScsdXJsLGFzLE9iamVjdC5hc3NpZ24oe30sb3B0aW9ucyx7c2hhbGxvdzpvcHRpb25zLnNoYWxsb3cmJnRoaXMuX3NoYWxsb3csbG9jYWxlOm9wdGlvbnMubG9jYWxlfHx0aGlzLmRlZmF1bHRMb2NhbGV9KSxmb3JjZWRTY3JvbGwpO307Ly8gcmVwcmVzZW50cyB0aGUgY3VycmVudCBjb21wb25lbnQga2V5XG50aGlzLnJvdXRlPSgwLF9ub3JtYWxpemVUcmFpbGluZ1NsYXNoLnJlbW92ZVBhdGhUcmFpbGluZ1NsYXNoKShfcGF0aG5hbWUpOy8vIHNldCB1cCB0aGUgY29tcG9uZW50IGNhY2hlIChieSByb3V0ZSBrZXlzKVxudGhpcy5jb21wb25lbnRzPXt9Oy8vIFdlIHNob3VsZCBub3Qga2VlcCB0aGUgY2FjaGUsIGlmIHRoZXJlJ3MgYW4gZXJyb3Jcbi8vIE90aGVyd2lzZSwgdGhpcyBjYXVzZSBpc3N1ZXMgd2hlbiB3aGVuIGdvaW5nIGJhY2sgYW5kXG4vLyBjb21lIGFnYWluIHRvIHRoZSBlcnJvcmVkIHBhZ2UuXG5pZihfcGF0aG5hbWUhPT0nL19lcnJvcicpe3RoaXMuY29tcG9uZW50c1t0aGlzLnJvdXRlXT17Q29tcG9uZW50LGluaXRpYWw6dHJ1ZSxwcm9wczppbml0aWFsUHJvcHMsZXJyLF9fTl9TU0c6aW5pdGlhbFByb3BzJiZpbml0aWFsUHJvcHMuX19OX1NTRyxfX05fU1NQOmluaXRpYWxQcm9wcyYmaW5pdGlhbFByb3BzLl9fTl9TU1B9O310aGlzLmNvbXBvbmVudHNbJy9fYXBwJ109e0NvbXBvbmVudDpBcHAsc3R5bGVTaGVldHM6Wy8qIC9fYXBwIGRvZXMgbm90IG5lZWQgaXRzIHN0eWxlc2hlZXRzIG1hbmFnZWQgKi9dfTsvLyBCYWNrd2FyZHMgY29tcGF0IGZvciBSb3V0ZXIucm91dGVyLmV2ZW50c1xuLy8gVE9ETzogU2hvdWxkIGJlIHJlbW92ZSB0aGUgZm9sbG93aW5nIG1ham9yIHZlcnNpb24gYXMgaXQgd2FzIG5ldmVyIGRvY3VtZW50ZWRcbnRoaXMuZXZlbnRzPVJvdXRlci5ldmVudHM7dGhpcy5wYWdlTG9hZGVyPXBhZ2VMb2FkZXI7dGhpcy5wYXRobmFtZT1fcGF0aG5hbWU7dGhpcy5xdWVyeT1fcXVlcnk7Ly8gaWYgYXV0byBwcmVyZW5kZXJlZCBhbmQgZHluYW1pYyByb3V0ZSB3YWl0IHRvIHVwZGF0ZSBhc1BhdGhcbi8vIHVudGlsIGFmdGVyIG1vdW50IHRvIHByZXZlbnQgaHlkcmF0aW9uIG1pc21hdGNoXG5jb25zdCBhdXRvRXhwb3J0RHluYW1pYz0oMCxfaXNEeW5hbWljLmlzRHluYW1pY1JvdXRlKShfcGF0aG5hbWUpJiZzZWxmLl9fTkVYVF9EQVRBX18uYXV0b0V4cG9ydDt0aGlzLmFzUGF0aD1hdXRvRXhwb3J0RHluYW1pYz9fcGF0aG5hbWU6X2FzO3RoaXMuYmFzZVBhdGg9YmFzZVBhdGg7dGhpcy5zdWI9c3Vic2NyaXB0aW9uO3RoaXMuY2xjPW51bGw7dGhpcy5fd3JhcEFwcD13cmFwQXBwOy8vIG1ha2Ugc3VyZSB0byBpZ25vcmUgZXh0cmEgcG9wU3RhdGUgaW4gc2FmYXJpIG9uIG5hdmlnYXRpbmdcbi8vIGJhY2sgZnJvbSBleHRlcm5hbCBzaXRlXG50aGlzLmlzU3NyPXRydWU7dGhpcy5pc0ZhbGxiYWNrPWlzRmFsbGJhY2s7dGhpcy5pc1JlYWR5PSEhKHNlbGYuX19ORVhUX0RBVEFfXy5nc3NwfHxzZWxmLl9fTkVYVF9EQVRBX18uZ2lwfHwhYXV0b0V4cG9ydER5bmFtaWMmJiFzZWxmLmxvY2F0aW9uLnNlYXJjaCYmIXByb2Nlc3MuZW52Ll9fTkVYVF9IQVNfUkVXUklURVMpO3RoaXMuaXNQcmV2aWV3PSEhaXNQcmV2aWV3O3RoaXMuaXNMb2NhbGVEb21haW49ZmFsc2U7aWYocHJvY2Vzcy5lbnYuX19ORVhUX0kxOE5fU1VQUE9SVCl7dGhpcy5sb2NhbGU9bG9jYWxlO3RoaXMubG9jYWxlcz1sb2NhbGVzO3RoaXMuZGVmYXVsdExvY2FsZT1kZWZhdWx0TG9jYWxlO3RoaXMuZG9tYWluTG9jYWxlcz1kb21haW5Mb2NhbGVzO3RoaXMuaXNMb2NhbGVEb21haW49ISFkZXRlY3REb21haW5Mb2NhbGUoZG9tYWluTG9jYWxlcyxzZWxmLmxvY2F0aW9uLmhvc3RuYW1lKTt9aWYodHlwZW9mIHdpbmRvdyE9PSd1bmRlZmluZWQnKXsvLyBtYWtlIHN1cmUgXCJhc1wiIGRvZXNuJ3Qgc3RhcnQgd2l0aCBkb3VibGUgc2xhc2hlcyBvciBlbHNlIGl0IGNhblxuLy8gdGhyb3cgYW4gZXJyb3IgYXMgaXQncyBjb25zaWRlcmVkIGludmFsaWRcbmlmKF9hcy5zdWJzdHIoMCwyKSE9PScvLycpey8vIGluIG9yZGVyIGZvciBgZS5zdGF0ZWAgdG8gd29yayBvbiB0aGUgYG9ucG9wc3RhdGVgIGV2ZW50XG4vLyB3ZSBoYXZlIHRvIHJlZ2lzdGVyIHRoZSBpbml0aWFsIHJvdXRlIHVwb24gaW5pdGlhbGl6YXRpb25cbmNvbnN0IG9wdGlvbnM9e2xvY2FsZX07b3B0aW9ucy5fc2hvdWxkUmVzb2x2ZUhyZWY9X2FzIT09X3BhdGhuYW1lO3RoaXMuY2hhbmdlU3RhdGUoJ3JlcGxhY2VTdGF0ZScsKDAsX3V0aWxzLmZvcm1hdFdpdGhWYWxpZGF0aW9uKSh7cGF0aG5hbWU6YWRkQmFzZVBhdGgoX3BhdGhuYW1lKSxxdWVyeTpfcXVlcnl9KSwoMCxfdXRpbHMuZ2V0VVJMKSgpLG9wdGlvbnMpO313aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcigncG9wc3RhdGUnLHRoaXMub25Qb3BTdGF0ZSk7Ly8gZW5hYmxlIGN1c3RvbSBzY3JvbGwgcmVzdG9yYXRpb24gaGFuZGxpbmcgd2hlbiBhdmFpbGFibGVcbi8vIG90aGVyd2lzZSBmYWxsYmFjayB0byBicm93c2VyJ3MgZGVmYXVsdCBoYW5kbGluZ1xuaWYocHJvY2Vzcy5lbnYuX19ORVhUX1NDUk9MTF9SRVNUT1JBVElPTil7aWYobWFudWFsU2Nyb2xsUmVzdG9yYXRpb24pe3dpbmRvdy5oaXN0b3J5LnNjcm9sbFJlc3RvcmF0aW9uPSdtYW51YWwnO319fX1yZWxvYWQoKXt3aW5kb3cubG9jYXRpb24ucmVsb2FkKCk7fS8qKlxuICAgKiBHbyBiYWNrIGluIGhpc3RvcnlcbiAgICovYmFjaygpe3dpbmRvdy5oaXN0b3J5LmJhY2soKTt9LyoqXG4gICAqIFBlcmZvcm1zIGEgYHB1c2hTdGF0ZWAgd2l0aCBhcmd1bWVudHNcbiAgICogQHBhcmFtIHVybCBvZiB0aGUgcm91dGVcbiAgICogQHBhcmFtIGFzIG1hc2tzIGB1cmxgIGZvciB0aGUgYnJvd3NlclxuICAgKiBAcGFyYW0gb3B0aW9ucyBvYmplY3QgeW91IGNhbiBkZWZpbmUgYHNoYWxsb3dgIGFuZCBvdGhlciBvcHRpb25zXG4gICAqL3B1c2godXJsLGFzLG9wdGlvbnM9e30pe2lmKHByb2Nlc3MuZW52Ll9fTkVYVF9TQ1JPTExfUkVTVE9SQVRJT04pey8vIFRPRE86IHJlbW92ZSBpbiB0aGUgZnV0dXJlIHdoZW4gd2UgdXBkYXRlIGhpc3RvcnkgYmVmb3JlIHJvdXRlIGNoYW5nZVxuLy8gaXMgY29tcGxldGUsIGFzIHRoZSBwb3BzdGF0ZSBldmVudCBzaG91bGQgaGFuZGxlIHRoaXMgY2FwdHVyZS5cbmlmKG1hbnVhbFNjcm9sbFJlc3RvcmF0aW9uKXt0cnl7Ly8gU25hcHNob3Qgc2Nyb2xsIHBvc2l0aW9uIHJpZ2h0IGJlZm9yZSBuYXZpZ2F0aW5nIHRvIGEgbmV3IHBhZ2U6XG5zZXNzaW9uU3RvcmFnZS5zZXRJdGVtKCdfX25leHRfc2Nyb2xsXycrdGhpcy5faWR4LEpTT04uc3RyaW5naWZ5KHt4OnNlbGYucGFnZVhPZmZzZXQseTpzZWxmLnBhZ2VZT2Zmc2V0fSkpO31jYXRjaChfdW51c2VkMyl7fX19Oyh7dXJsLGFzfT1wcmVwYXJlVXJsQXModGhpcyx1cmwsYXMpKTtyZXR1cm4gdGhpcy5jaGFuZ2UoJ3B1c2hTdGF0ZScsdXJsLGFzLG9wdGlvbnMpO30vKipcbiAgICogUGVyZm9ybXMgYSBgcmVwbGFjZVN0YXRlYCB3aXRoIGFyZ3VtZW50c1xuICAgKiBAcGFyYW0gdXJsIG9mIHRoZSByb3V0ZVxuICAgKiBAcGFyYW0gYXMgbWFza3MgYHVybGAgZm9yIHRoZSBicm93c2VyXG4gICAqIEBwYXJhbSBvcHRpb25zIG9iamVjdCB5b3UgY2FuIGRlZmluZSBgc2hhbGxvd2AgYW5kIG90aGVyIG9wdGlvbnNcbiAgICovcmVwbGFjZSh1cmwsYXMsb3B0aW9ucz17fSl7Oyh7dXJsLGFzfT1wcmVwYXJlVXJsQXModGhpcyx1cmwsYXMpKTtyZXR1cm4gdGhpcy5jaGFuZ2UoJ3JlcGxhY2VTdGF0ZScsdXJsLGFzLG9wdGlvbnMpO31hc3luYyBjaGFuZ2UobWV0aG9kLHVybCxhcyxvcHRpb25zLGZvcmNlZFNjcm9sbCl7aWYoIWlzTG9jYWxVUkwodXJsKSl7d2luZG93LmxvY2F0aW9uLmhyZWY9dXJsO3JldHVybiBmYWxzZTt9Y29uc3Qgc2hvdWxkUmVzb2x2ZUhyZWY9dXJsPT09YXN8fG9wdGlvbnMuX2h8fG9wdGlvbnMuX3Nob3VsZFJlc29sdmVIcmVmOy8vIGZvciBzdGF0aWMgcGFnZXMgd2l0aCBxdWVyeSBwYXJhbXMgaW4gdGhlIFVSTCB3ZSBkZWxheVxuLy8gbWFya2luZyB0aGUgcm91dGVyIHJlYWR5IHVudGlsIGFmdGVyIHRoZSBxdWVyeSBpcyB1cGRhdGVkXG5pZihvcHRpb25zLl9oKXt0aGlzLmlzUmVhZHk9dHJ1ZTt9bGV0IGxvY2FsZUNoYW5nZT1vcHRpb25zLmxvY2FsZSE9PXRoaXMubG9jYWxlO2lmKHByb2Nlc3MuZW52Ll9fTkVYVF9JMThOX1NVUFBPUlQpe3RoaXMubG9jYWxlPW9wdGlvbnMubG9jYWxlPT09ZmFsc2U/dGhpcy5kZWZhdWx0TG9jYWxlOm9wdGlvbnMubG9jYWxlfHx0aGlzLmxvY2FsZTtpZih0eXBlb2Ygb3B0aW9ucy5sb2NhbGU9PT0ndW5kZWZpbmVkJyl7b3B0aW9ucy5sb2NhbGU9dGhpcy5sb2NhbGU7fWNvbnN0IHBhcnNlZEFzPSgwLF9wYXJzZVJlbGF0aXZlVXJsLnBhcnNlUmVsYXRpdmVVcmwpKGhhc0Jhc2VQYXRoKGFzKT9kZWxCYXNlUGF0aChhcyk6YXMpO2NvbnN0IGxvY2FsZVBhdGhSZXN1bHQ9KDAsX25vcm1hbGl6ZUxvY2FsZVBhdGgubm9ybWFsaXplTG9jYWxlUGF0aCkocGFyc2VkQXMucGF0aG5hbWUsdGhpcy5sb2NhbGVzKTtpZihsb2NhbGVQYXRoUmVzdWx0LmRldGVjdGVkTG9jYWxlKXt0aGlzLmxvY2FsZT1sb2NhbGVQYXRoUmVzdWx0LmRldGVjdGVkTG9jYWxlO3BhcnNlZEFzLnBhdGhuYW1lPWFkZEJhc2VQYXRoKHBhcnNlZEFzLnBhdGhuYW1lKTthcz0oMCxfdXRpbHMuZm9ybWF0V2l0aFZhbGlkYXRpb24pKHBhcnNlZEFzKTt1cmw9YWRkQmFzZVBhdGgoKDAsX25vcm1hbGl6ZUxvY2FsZVBhdGgubm9ybWFsaXplTG9jYWxlUGF0aCkoaGFzQmFzZVBhdGgodXJsKT9kZWxCYXNlUGF0aCh1cmwpOnVybCx0aGlzLmxvY2FsZXMpLnBhdGhuYW1lKTt9bGV0IGRpZE5hdmlnYXRlPWZhbHNlOy8vIHdlIG5lZWQgdG8gd3JhcCB0aGlzIGluIHRoZSBlbnYgY2hlY2sgYWdhaW4gc2luY2UgcmVnZW5lcmF0b3IgcnVudGltZVxuLy8gbW92ZXMgdGhpcyBvbiBpdHMgb3duIGR1ZSB0byB0aGUgcmV0dXJuXG5pZihwcm9jZXNzLmVudi5fX05FWFRfSTE4Tl9TVVBQT1JUKXt2YXIgX3RoaXMkbG9jYWxlczsvLyBpZiB0aGUgbG9jYWxlIGlzbid0IGNvbmZpZ3VyZWQgaGFyZCBuYXZpZ2F0ZSB0byBzaG93IDQwNCBwYWdlXG5pZighKChfdGhpcyRsb2NhbGVzPXRoaXMubG9jYWxlcykhPW51bGwmJl90aGlzJGxvY2FsZXMuaW5jbHVkZXModGhpcy5sb2NhbGUpKSl7cGFyc2VkQXMucGF0aG5hbWU9YWRkTG9jYWxlKHBhcnNlZEFzLnBhdGhuYW1lLHRoaXMubG9jYWxlKTt3aW5kb3cubG9jYXRpb24uaHJlZj0oMCxfdXRpbHMuZm9ybWF0V2l0aFZhbGlkYXRpb24pKHBhcnNlZEFzKTsvLyB0aGlzIHdhcyBwcmV2aW91c2x5IGEgcmV0dXJuIGJ1dCB3YXMgcmVtb3ZlZCBpbiBmYXZvclxuLy8gb2YgYmV0dGVyIGRlYWQgY29kZSBlbGltaW5hdGlvbiB3aXRoIHJlZ2VuZXJhdG9yIHJ1bnRpbWVcbmRpZE5hdmlnYXRlPXRydWU7fX1jb25zdCBkZXRlY3RlZERvbWFpbj1kZXRlY3REb21haW5Mb2NhbGUodGhpcy5kb21haW5Mb2NhbGVzLHVuZGVmaW5lZCx0aGlzLmxvY2FsZSk7Ly8gd2UgbmVlZCB0byB3cmFwIHRoaXMgaW4gdGhlIGVudiBjaGVjayBhZ2FpbiBzaW5jZSByZWdlbmVyYXRvciBydW50aW1lXG4vLyBtb3ZlcyB0aGlzIG9uIGl0cyBvd24gZHVlIHRvIHRoZSByZXR1cm5cbmlmKHByb2Nlc3MuZW52Ll9fTkVYVF9JMThOX1NVUFBPUlQpey8vIGlmIHdlIGFyZSBuYXZpZ2F0aW5nIHRvIGEgZG9tYWluIGxvY2FsZSBlbnN1cmUgd2UgcmVkaXJlY3QgdG8gdGhlXG4vLyBjb3JyZWN0IGRvbWFpblxuaWYoIWRpZE5hdmlnYXRlJiZkZXRlY3RlZERvbWFpbiYmdGhpcy5pc0xvY2FsZURvbWFpbiYmc2VsZi5sb2NhdGlvbi5ob3N0bmFtZSE9PWRldGVjdGVkRG9tYWluLmRvbWFpbil7Y29uc3QgYXNOb0Jhc2VQYXRoPWRlbEJhc2VQYXRoKGFzKTt3aW5kb3cubG9jYXRpb24uaHJlZj1gaHR0cCR7ZGV0ZWN0ZWREb21haW4uaHR0cD8nJzoncyd9Oi8vJHtkZXRlY3RlZERvbWFpbi5kb21haW59JHthZGRCYXNlUGF0aChgJHt0aGlzLmxvY2FsZT09PWRldGVjdGVkRG9tYWluLmRlZmF1bHRMb2NhbGU/Jyc6YC8ke3RoaXMubG9jYWxlfWB9JHthc05vQmFzZVBhdGg9PT0nLyc/Jyc6YXNOb0Jhc2VQYXRofWB8fCcvJyl9YDsvLyB0aGlzIHdhcyBwcmV2aW91c2x5IGEgcmV0dXJuIGJ1dCB3YXMgcmVtb3ZlZCBpbiBmYXZvclxuLy8gb2YgYmV0dGVyIGRlYWQgY29kZSBlbGltaW5hdGlvbiB3aXRoIHJlZ2VuZXJhdG9yIHJ1bnRpbWVcbmRpZE5hdmlnYXRlPXRydWU7fX1pZihkaWROYXZpZ2F0ZSl7cmV0dXJuIG5ldyBQcm9taXNlKCgpPT57fSk7fX1pZighb3B0aW9ucy5faCl7dGhpcy5pc1Nzcj1mYWxzZTt9Ly8gbWFya2luZyByb3V0ZSBjaGFuZ2VzIGFzIGEgbmF2aWdhdGlvbiBzdGFydCBlbnRyeVxuaWYoX3V0aWxzLlNUKXtwZXJmb3JtYW5jZS5tYXJrKCdyb3V0ZUNoYW5nZScpO31jb25zdHtzaGFsbG93PWZhbHNlfT1vcHRpb25zO2NvbnN0IHJvdXRlUHJvcHM9e3NoYWxsb3d9O2lmKHRoaXMuX2luRmxpZ2h0Um91dGUpe3RoaXMuYWJvcnRDb21wb25lbnRMb2FkKHRoaXMuX2luRmxpZ2h0Um91dGUscm91dGVQcm9wcyk7fWFzPWFkZEJhc2VQYXRoKGFkZExvY2FsZShoYXNCYXNlUGF0aChhcyk/ZGVsQmFzZVBhdGgoYXMpOmFzLG9wdGlvbnMubG9jYWxlLHRoaXMuZGVmYXVsdExvY2FsZSkpO2NvbnN0IGNsZWFuZWRBcz1kZWxMb2NhbGUoaGFzQmFzZVBhdGgoYXMpP2RlbEJhc2VQYXRoKGFzKTphcyx0aGlzLmxvY2FsZSk7dGhpcy5faW5GbGlnaHRSb3V0ZT1hczsvLyBJZiB0aGUgdXJsIGNoYW5nZSBpcyBvbmx5IHJlbGF0ZWQgdG8gYSBoYXNoIGNoYW5nZVxuLy8gV2Ugc2hvdWxkIG5vdCBwcm9jZWVkLiBXZSBzaG91bGQgb25seSBjaGFuZ2UgdGhlIHN0YXRlLlxuLy8gV0FSTklORzogYF9oYCBpcyBhbiBpbnRlcm5hbCBvcHRpb24gZm9yIGhhbmRpbmcgTmV4dC5qcyBjbGllbnQtc2lkZVxuLy8gaHlkcmF0aW9uLiBZb3VyIGFwcCBzaG91bGQgX25ldmVyXyB1c2UgdGhpcyBwcm9wZXJ0eS4gSXQgbWF5IGNoYW5nZSBhdFxuLy8gYW55IHRpbWUgd2l0aG91dCBub3RpY2UuXG5pZighb3B0aW9ucy5faCYmdGhpcy5vbmx5QUhhc2hDaGFuZ2UoY2xlYW5lZEFzKSl7dGhpcy5hc1BhdGg9Y2xlYW5lZEFzO1JvdXRlci5ldmVudHMuZW1pdCgnaGFzaENoYW5nZVN0YXJ0Jyxhcyxyb3V0ZVByb3BzKTsvLyBUT0RPOiBkbyB3ZSBuZWVkIHRoZSByZXNvbHZlZCBocmVmIHdoZW4gb25seSBhIGhhc2ggY2hhbmdlP1xudGhpcy5jaGFuZ2VTdGF0ZShtZXRob2QsdXJsLGFzLG9wdGlvbnMpO3RoaXMuc2Nyb2xsVG9IYXNoKGNsZWFuZWRBcyk7dGhpcy5ub3RpZnkodGhpcy5jb21wb25lbnRzW3RoaXMucm91dGVdLG51bGwpO1JvdXRlci5ldmVudHMuZW1pdCgnaGFzaENoYW5nZUNvbXBsZXRlJyxhcyxyb3V0ZVByb3BzKTtyZXR1cm4gdHJ1ZTt9bGV0IHBhcnNlZD0oMCxfcGFyc2VSZWxhdGl2ZVVybC5wYXJzZVJlbGF0aXZlVXJsKSh1cmwpO2xldHtwYXRobmFtZSxxdWVyeX09cGFyc2VkOy8vIFRoZSBidWlsZCBtYW5pZmVzdCBuZWVkcyB0byBiZSBsb2FkZWQgYmVmb3JlIGF1dG8tc3RhdGljIGR5bmFtaWMgcGFnZXNcbi8vIGdldCB0aGVpciBxdWVyeSBwYXJhbWV0ZXJzIHRvIGFsbG93IGVuc3VyaW5nIHRoZXkgY2FuIGJlIHBhcnNlZCBwcm9wZXJseVxuLy8gd2hlbiByZXdyaXR0ZW4gdG9cbmxldCBwYWdlcyxyZXdyaXRlczt0cnl7cGFnZXM9YXdhaXQgdGhpcy5wYWdlTG9hZGVyLmdldFBhZ2VMaXN0KCk7KHtfX3Jld3JpdGVzOnJld3JpdGVzfT1hd2FpdCgwLF9yb3V0ZUxvYWRlci5nZXRDbGllbnRCdWlsZE1hbmlmZXN0KSgpKTt9Y2F0Y2goZXJyKXsvLyBJZiB3ZSBmYWlsIHRvIHJlc29sdmUgdGhlIHBhZ2UgbGlzdCBvciBjbGllbnQtYnVpbGQgbWFuaWZlc3QsIHdlIG11c3Rcbi8vIGRvIGEgc2VydmVyLXNpZGUgdHJhbnNpdGlvbjpcbndpbmRvdy5sb2NhdGlvbi5ocmVmPWFzO3JldHVybiBmYWxzZTt9Ly8gSWYgYXNrZWQgdG8gY2hhbmdlIHRoZSBjdXJyZW50IFVSTCB3ZSBzaG91bGQgcmVsb2FkIHRoZSBjdXJyZW50IHBhZ2Vcbi8vIChub3QgbG9jYXRpb24ucmVsb2FkKCkgYnV0IHJlbG9hZCBnZXRJbml0aWFsUHJvcHMgYW5kIG90aGVyIE5leHQuanMgc3R1ZmZzKVxuLy8gV2UgYWxzbyBuZWVkIHRvIHNldCB0aGUgbWV0aG9kID0gcmVwbGFjZVN0YXRlIGFsd2F5c1xuLy8gYXMgdGhpcyBzaG91bGQgbm90IGdvIGludG8gdGhlIGhpc3RvcnkgKFRoYXQncyBob3cgYnJvd3NlcnMgd29yaylcbi8vIFdlIHNob3VsZCBjb21wYXJlIHRoZSBuZXcgYXNQYXRoIHRvIHRoZSBjdXJyZW50IGFzUGF0aCwgbm90IHRoZSB1cmxcbmlmKCF0aGlzLnVybElzTmV3KGNsZWFuZWRBcykmJiFsb2NhbGVDaGFuZ2Upe21ldGhvZD0ncmVwbGFjZVN0YXRlJzt9Ly8gd2UgbmVlZCB0byByZXNvbHZlIHRoZSBhcyB2YWx1ZSB1c2luZyByZXdyaXRlcyBmb3IgZHluYW1pYyBTU0dcbi8vIHBhZ2VzIHRvIGFsbG93IGJ1aWxkaW5nIHRoZSBkYXRhIFVSTCBjb3JyZWN0bHlcbmxldCByZXNvbHZlZEFzPWFzOy8vIHVybCBhbmQgYXMgc2hvdWxkIGFsd2F5cyBiZSBwcmVmaXhlZCB3aXRoIGJhc2VQYXRoIGJ5IHRoaXNcbi8vIHBvaW50IGJ5IGVpdGhlciBuZXh0L2xpbmsgb3Igcm91dGVyLnB1c2gvcmVwbGFjZSBzbyBzdHJpcCB0aGVcbi8vIGJhc2VQYXRoIGZyb20gdGhlIHBhdGhuYW1lIHRvIG1hdGNoIHRoZSBwYWdlcyBkaXIgMS10by0xXG5wYXRobmFtZT1wYXRobmFtZT8oMCxfbm9ybWFsaXplVHJhaWxpbmdTbGFzaC5yZW1vdmVQYXRoVHJhaWxpbmdTbGFzaCkoZGVsQmFzZVBhdGgocGF0aG5hbWUpKTpwYXRobmFtZTtpZihzaG91bGRSZXNvbHZlSHJlZiYmcGF0aG5hbWUhPT0nL19lcnJvcicpeztvcHRpb25zLl9zaG91bGRSZXNvbHZlSHJlZj10cnVlO2lmKHByb2Nlc3MuZW52Ll9fTkVYVF9IQVNfUkVXUklURVMmJmFzLnN0YXJ0c1dpdGgoJy8nKSl7Y29uc3QgcmV3cml0ZXNSZXN1bHQ9KDAsX3Jlc29sdmVSZXdyaXRlcy5kZWZhdWx0KShhZGRCYXNlUGF0aChhZGRMb2NhbGUoY2xlYW5lZEFzLHRoaXMubG9jYWxlKSkscGFnZXMscmV3cml0ZXMscXVlcnkscD0+cmVzb2x2ZUR5bmFtaWNSb3V0ZShwLHBhZ2VzKSx0aGlzLmxvY2FsZXMpO3Jlc29sdmVkQXM9cmV3cml0ZXNSZXN1bHQuYXNQYXRoO2lmKHJld3JpdGVzUmVzdWx0Lm1hdGNoZWRQYWdlJiZyZXdyaXRlc1Jlc3VsdC5yZXNvbHZlZEhyZWYpey8vIGlmIHRoaXMgZGlyZWN0bHkgbWF0Y2hlcyBhIHBhZ2Ugd2UgbmVlZCB0byB1cGRhdGUgdGhlIGhyZWYgdG9cbi8vIGFsbG93IHRoZSBjb3JyZWN0IHBhZ2UgY2h1bmsgdG8gYmUgbG9hZGVkXG5wYXRobmFtZT1yZXdyaXRlc1Jlc3VsdC5yZXNvbHZlZEhyZWY7cGFyc2VkLnBhdGhuYW1lPWFkZEJhc2VQYXRoKHBhdGhuYW1lKTt1cmw9KDAsX3V0aWxzLmZvcm1hdFdpdGhWYWxpZGF0aW9uKShwYXJzZWQpO319ZWxzZXtwYXJzZWQucGF0aG5hbWU9cmVzb2x2ZUR5bmFtaWNSb3V0ZShwYXRobmFtZSxwYWdlcyk7aWYocGFyc2VkLnBhdGhuYW1lIT09cGF0aG5hbWUpe3BhdGhuYW1lPXBhcnNlZC5wYXRobmFtZTtwYXJzZWQucGF0aG5hbWU9YWRkQmFzZVBhdGgocGF0aG5hbWUpO3VybD0oMCxfdXRpbHMuZm9ybWF0V2l0aFZhbGlkYXRpb24pKHBhcnNlZCk7fX19Y29uc3Qgcm91dGU9KDAsX25vcm1hbGl6ZVRyYWlsaW5nU2xhc2gucmVtb3ZlUGF0aFRyYWlsaW5nU2xhc2gpKHBhdGhuYW1lKTtpZighaXNMb2NhbFVSTChhcykpe2lmKHByb2Nlc3MuZW52Lk5PREVfRU5WIT09J3Byb2R1Y3Rpb24nKXt0aHJvdyBuZXcgRXJyb3IoYEludmFsaWQgaHJlZjogXCIke3VybH1cIiBhbmQgYXM6IFwiJHthc31cIiwgcmVjZWl2ZWQgcmVsYXRpdmUgaHJlZiBhbmQgZXh0ZXJuYWwgYXNgK2BcXG5TZWUgbW9yZSBpbmZvOiBodHRwczovL25leHRqcy5vcmcvZG9jcy9tZXNzYWdlcy9pbnZhbGlkLXJlbGF0aXZlLXVybC1leHRlcm5hbC1hc2ApO313aW5kb3cubG9jYXRpb24uaHJlZj1hcztyZXR1cm4gZmFsc2U7fXJlc29sdmVkQXM9ZGVsTG9jYWxlKGRlbEJhc2VQYXRoKHJlc29sdmVkQXMpLHRoaXMubG9jYWxlKTtpZigoMCxfaXNEeW5hbWljLmlzRHluYW1pY1JvdXRlKShyb3V0ZSkpe2NvbnN0IHBhcnNlZEFzPSgwLF9wYXJzZVJlbGF0aXZlVXJsLnBhcnNlUmVsYXRpdmVVcmwpKHJlc29sdmVkQXMpO2NvbnN0IGFzUGF0aG5hbWU9cGFyc2VkQXMucGF0aG5hbWU7Y29uc3Qgcm91dGVSZWdleD0oMCxfcm91dGVSZWdleC5nZXRSb3V0ZVJlZ2V4KShyb3V0ZSk7Y29uc3Qgcm91dGVNYXRjaD0oMCxfcm91dGVNYXRjaGVyLmdldFJvdXRlTWF0Y2hlcikocm91dGVSZWdleCkoYXNQYXRobmFtZSk7Y29uc3Qgc2hvdWxkSW50ZXJwb2xhdGU9cm91dGU9PT1hc1BhdGhuYW1lO2NvbnN0IGludGVycG9sYXRlZEFzPXNob3VsZEludGVycG9sYXRlP2ludGVycG9sYXRlQXMocm91dGUsYXNQYXRobmFtZSxxdWVyeSk6e307aWYoIXJvdXRlTWF0Y2h8fHNob3VsZEludGVycG9sYXRlJiYhaW50ZXJwb2xhdGVkQXMucmVzdWx0KXtjb25zdCBtaXNzaW5nUGFyYW1zPU9iamVjdC5rZXlzKHJvdXRlUmVnZXguZ3JvdXBzKS5maWx0ZXIocGFyYW09PiFxdWVyeVtwYXJhbV0pO2lmKG1pc3NpbmdQYXJhbXMubGVuZ3RoPjApe2lmKHByb2Nlc3MuZW52Lk5PREVfRU5WIT09J3Byb2R1Y3Rpb24nKXtjb25zb2xlLndhcm4oYCR7c2hvdWxkSW50ZXJwb2xhdGU/YEludGVycG9sYXRpbmcgaHJlZmA6YE1pc21hdGNoaW5nIFxcYGFzXFxgIGFuZCBcXGBocmVmXFxgYH0gZmFpbGVkIHRvIG1hbnVhbGx5IHByb3ZpZGUgYCtgdGhlIHBhcmFtczogJHttaXNzaW5nUGFyYW1zLmpvaW4oJywgJyl9IGluIHRoZSBcXGBocmVmXFxgJ3MgXFxgcXVlcnlcXGBgKTt9dGhyb3cgbmV3IEVycm9yKChzaG91bGRJbnRlcnBvbGF0ZT9gVGhlIHByb3ZpZGVkIFxcYGhyZWZcXGAgKCR7dXJsfSkgdmFsdWUgaXMgbWlzc2luZyBxdWVyeSB2YWx1ZXMgKCR7bWlzc2luZ1BhcmFtcy5qb2luKCcsICcpfSkgdG8gYmUgaW50ZXJwb2xhdGVkIHByb3Blcmx5LiBgOmBUaGUgcHJvdmlkZWQgXFxgYXNcXGAgdmFsdWUgKCR7YXNQYXRobmFtZX0pIGlzIGluY29tcGF0aWJsZSB3aXRoIHRoZSBcXGBocmVmXFxgIHZhbHVlICgke3JvdXRlfSkuIGApK2BSZWFkIG1vcmU6IGh0dHBzOi8vbmV4dGpzLm9yZy9kb2NzL21lc3NhZ2VzLyR7c2hvdWxkSW50ZXJwb2xhdGU/J2hyZWYtaW50ZXJwb2xhdGlvbi1mYWlsZWQnOidpbmNvbXBhdGlibGUtaHJlZi1hcyd9YCk7fX1lbHNlIGlmKHNob3VsZEludGVycG9sYXRlKXthcz0oMCxfdXRpbHMuZm9ybWF0V2l0aFZhbGlkYXRpb24pKE9iamVjdC5hc3NpZ24oe30scGFyc2VkQXMse3BhdGhuYW1lOmludGVycG9sYXRlZEFzLnJlc3VsdCxxdWVyeTpvbWl0UGFybXNGcm9tUXVlcnkocXVlcnksaW50ZXJwb2xhdGVkQXMucGFyYW1zKX0pKTt9ZWxzZXsvLyBNZXJnZSBwYXJhbXMgaW50byBgcXVlcnlgLCBvdmVyd3JpdGluZyBhbnkgc3BlY2lmaWVkIGluIHNlYXJjaFxuT2JqZWN0LmFzc2lnbihxdWVyeSxyb3V0ZU1hdGNoKTt9fVJvdXRlci5ldmVudHMuZW1pdCgncm91dGVDaGFuZ2VTdGFydCcsYXMscm91dGVQcm9wcyk7dHJ5e3ZhciBfc2VsZiRfX05FWFRfREFUQV9fJHAsX3NlbGYkX19ORVhUX0RBVEFfXyRwMixfb3B0aW9ucyRzY3JvbGw7bGV0IHJvdXRlSW5mbz1hd2FpdCB0aGlzLmdldFJvdXRlSW5mbyhyb3V0ZSxwYXRobmFtZSxxdWVyeSxhcyxyZXNvbHZlZEFzLHJvdXRlUHJvcHMpO2xldHtlcnJvcixwcm9wcyxfX05fU1NHLF9fTl9TU1B9PXJvdXRlSW5mbzsvLyBoYW5kbGUgcmVkaXJlY3Qgb24gY2xpZW50LXRyYW5zaXRpb25cbmlmKChfX05fU1NHfHxfX05fU1NQKSYmcHJvcHMpe2lmKHByb3BzLnBhZ2VQcm9wcyYmcHJvcHMucGFnZVByb3BzLl9fTl9SRURJUkVDVCl7Y29uc3QgZGVzdGluYXRpb249cHJvcHMucGFnZVByb3BzLl9fTl9SRURJUkVDVDsvLyBjaGVjayBpZiBkZXN0aW5hdGlvbiBpcyBpbnRlcm5hbCAocmVzb2x2ZXMgdG8gYSBwYWdlKSBhbmQgYXR0ZW1wdFxuLy8gY2xpZW50LW5hdmlnYXRpb24gaWYgaXQgaXMgZmFsbGluZyBiYWNrIHRvIGhhcmQgbmF2aWdhdGlvbiBpZlxuLy8gaXQncyBub3RcbmlmKGRlc3RpbmF0aW9uLnN0YXJ0c1dpdGgoJy8nKSl7Y29uc3QgcGFyc2VkSHJlZj0oMCxfcGFyc2VSZWxhdGl2ZVVybC5wYXJzZVJlbGF0aXZlVXJsKShkZXN0aW5hdGlvbik7cGFyc2VkSHJlZi5wYXRobmFtZT1yZXNvbHZlRHluYW1pY1JvdXRlKHBhcnNlZEhyZWYucGF0aG5hbWUscGFnZXMpO2NvbnN0e3VybDpuZXdVcmwsYXM6bmV3QXN9PXByZXBhcmVVcmxBcyh0aGlzLGRlc3RpbmF0aW9uLGRlc3RpbmF0aW9uKTtyZXR1cm4gdGhpcy5jaGFuZ2UobWV0aG9kLG5ld1VybCxuZXdBcyxvcHRpb25zKTt9d2luZG93LmxvY2F0aW9uLmhyZWY9ZGVzdGluYXRpb247cmV0dXJuIG5ldyBQcm9taXNlKCgpPT57fSk7fXRoaXMuaXNQcmV2aWV3PSEhcHJvcHMuX19OX1BSRVZJRVc7Ly8gaGFuZGxlIFNTRyBkYXRhIDQwNFxuaWYocHJvcHMubm90Rm91bmQ9PT1TU0dfREFUQV9OT1RfRk9VTkQpe2xldCBub3RGb3VuZFJvdXRlO3RyeXthd2FpdCB0aGlzLmZldGNoQ29tcG9uZW50KCcvNDA0Jyk7bm90Rm91bmRSb3V0ZT0nLzQwNCc7fWNhdGNoKF8pe25vdEZvdW5kUm91dGU9Jy9fZXJyb3InO31yb3V0ZUluZm89YXdhaXQgdGhpcy5nZXRSb3V0ZUluZm8obm90Rm91bmRSb3V0ZSxub3RGb3VuZFJvdXRlLHF1ZXJ5LGFzLHJlc29sdmVkQXMse3NoYWxsb3c6ZmFsc2V9KTt9fVJvdXRlci5ldmVudHMuZW1pdCgnYmVmb3JlSGlzdG9yeUNoYW5nZScsYXMscm91dGVQcm9wcyk7dGhpcy5jaGFuZ2VTdGF0ZShtZXRob2QsdXJsLGFzLG9wdGlvbnMpO2lmKHByb2Nlc3MuZW52Lk5PREVfRU5WIT09J3Byb2R1Y3Rpb24nKXtjb25zdCBhcHBDb21wPXRoaXMuY29tcG9uZW50c1snL19hcHAnXS5Db21wb25lbnQ7d2luZG93Lm5leHQuaXNQcmVyZW5kZXJlZD1hcHBDb21wLmdldEluaXRpYWxQcm9wcz09PWFwcENvbXAub3JpZ0dldEluaXRpYWxQcm9wcyYmIXJvdXRlSW5mby5Db21wb25lbnQuZ2V0SW5pdGlhbFByb3BzO31pZihvcHRpb25zLl9oJiZwYXRobmFtZT09PScvX2Vycm9yJyYmKChfc2VsZiRfX05FWFRfREFUQV9fJHA9c2VsZi5fX05FWFRfREFUQV9fLnByb3BzKT09bnVsbD92b2lkIDA6KF9zZWxmJF9fTkVYVF9EQVRBX18kcDI9X3NlbGYkX19ORVhUX0RBVEFfXyRwLnBhZ2VQcm9wcyk9PW51bGw/dm9pZCAwOl9zZWxmJF9fTkVYVF9EQVRBX18kcDIuc3RhdHVzQ29kZSk9PT01MDAmJnByb3BzIT1udWxsJiZwcm9wcy5wYWdlUHJvcHMpey8vIGVuc3VyZSBzdGF0dXNDb2RlIGlzIHN0aWxsIGNvcnJlY3QgZm9yIHN0YXRpYyA1MDAgcGFnZVxuLy8gd2hlbiB1cGRhdGluZyBxdWVyeSBpbmZvcm1hdGlvblxucHJvcHMucGFnZVByb3BzLnN0YXR1c0NvZGU9NTAwO30vLyBzaGFsbG93IHJvdXRpbmcgaXMgb25seSBhbGxvd2VkIGZvciBzYW1lIHBhZ2UgVVJMIGNoYW5nZXMuXG5jb25zdCBpc1ZhbGlkU2hhbGxvd1JvdXRlPW9wdGlvbnMuc2hhbGxvdyYmdGhpcy5yb3V0ZT09PXJvdXRlO2NvbnN0IHNob3VsZFNjcm9sbD0oX29wdGlvbnMkc2Nyb2xsPW9wdGlvbnMuc2Nyb2xsKSE9bnVsbD9fb3B0aW9ucyRzY3JvbGw6IWlzVmFsaWRTaGFsbG93Um91dGU7Y29uc3QgcmVzZXRTY3JvbGw9c2hvdWxkU2Nyb2xsP3t4OjAseTowfTpudWxsO2F3YWl0IHRoaXMuc2V0KHJvdXRlLHBhdGhuYW1lLHF1ZXJ5LGNsZWFuZWRBcyxyb3V0ZUluZm8sZm9yY2VkU2Nyb2xsIT1udWxsP2ZvcmNlZFNjcm9sbDpyZXNldFNjcm9sbCkuY2F0Y2goZT0+e2lmKGUuY2FuY2VsbGVkKWVycm9yPWVycm9yfHxlO2Vsc2UgdGhyb3cgZTt9KTtpZihlcnJvcil7Um91dGVyLmV2ZW50cy5lbWl0KCdyb3V0ZUNoYW5nZUVycm9yJyxlcnJvcixjbGVhbmVkQXMscm91dGVQcm9wcyk7dGhyb3cgZXJyb3I7fWlmKHByb2Nlc3MuZW52Ll9fTkVYVF9JMThOX1NVUFBPUlQpe2lmKHRoaXMubG9jYWxlKXtkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQubGFuZz10aGlzLmxvY2FsZTt9fVJvdXRlci5ldmVudHMuZW1pdCgncm91dGVDaGFuZ2VDb21wbGV0ZScsYXMscm91dGVQcm9wcyk7cmV0dXJuIHRydWU7fWNhdGNoKGVycil7aWYoZXJyLmNhbmNlbGxlZCl7cmV0dXJuIGZhbHNlO310aHJvdyBlcnI7fX1jaGFuZ2VTdGF0ZShtZXRob2QsdXJsLGFzLG9wdGlvbnM9e30pe2lmKHByb2Nlc3MuZW52Lk5PREVfRU5WIT09J3Byb2R1Y3Rpb24nKXtpZih0eXBlb2Ygd2luZG93Lmhpc3Rvcnk9PT0ndW5kZWZpbmVkJyl7Y29uc29sZS5lcnJvcihgV2FybmluZzogd2luZG93Lmhpc3RvcnkgaXMgbm90IGF2YWlsYWJsZS5gKTtyZXR1cm47fWlmKHR5cGVvZiB3aW5kb3cuaGlzdG9yeVttZXRob2RdPT09J3VuZGVmaW5lZCcpe2NvbnNvbGUuZXJyb3IoYFdhcm5pbmc6IHdpbmRvdy5oaXN0b3J5LiR7bWV0aG9kfSBpcyBub3QgYXZhaWxhYmxlYCk7cmV0dXJuO319aWYobWV0aG9kIT09J3B1c2hTdGF0ZSd8fCgwLF91dGlscy5nZXRVUkwpKCkhPT1hcyl7dGhpcy5fc2hhbGxvdz1vcHRpb25zLnNoYWxsb3c7d2luZG93Lmhpc3RvcnlbbWV0aG9kXSh7dXJsLGFzLG9wdGlvbnMsX19OOnRydWUsaWR4OnRoaXMuX2lkeD1tZXRob2QhPT0ncHVzaFN0YXRlJz90aGlzLl9pZHg6dGhpcy5faWR4KzF9LC8vIE1vc3QgYnJvd3NlcnMgY3VycmVudGx5IGlnbm9yZXMgdGhpcyBwYXJhbWV0ZXIsIGFsdGhvdWdoIHRoZXkgbWF5IHVzZSBpdCBpbiB0aGUgZnV0dXJlLlxuLy8gUGFzc2luZyB0aGUgZW1wdHkgc3RyaW5nIGhlcmUgc2hvdWxkIGJlIHNhZmUgYWdhaW5zdCBmdXR1cmUgY2hhbmdlcyB0byB0aGUgbWV0aG9kLlxuLy8gaHR0cHM6Ly9kZXZlbG9wZXIubW96aWxsYS5vcmcvZW4tVVMvZG9jcy9XZWIvQVBJL0hpc3RvcnkvcmVwbGFjZVN0YXRlXG4nJyxhcyk7fX1hc3luYyBoYW5kbGVSb3V0ZUluZm9FcnJvcihlcnIscGF0aG5hbWUscXVlcnksYXMscm91dGVQcm9wcyxsb2FkRXJyb3JGYWlsKXtpZihlcnIuY2FuY2VsbGVkKXsvLyBidWJibGUgdXAgY2FuY2VsbGF0aW9uIGVycm9yc1xudGhyb3cgZXJyO31pZigoMCxfcm91dGVMb2FkZXIuaXNBc3NldEVycm9yKShlcnIpfHxsb2FkRXJyb3JGYWlsKXtSb3V0ZXIuZXZlbnRzLmVtaXQoJ3JvdXRlQ2hhbmdlRXJyb3InLGVycixhcyxyb3V0ZVByb3BzKTsvLyBJZiB3ZSBjYW4ndCBsb2FkIHRoZSBwYWdlIGl0IGNvdWxkIGJlIG9uZSBvZiBmb2xsb3dpbmcgcmVhc29uc1xuLy8gIDEuIFBhZ2UgZG9lc24ndCBleGlzdHNcbi8vICAyLiBQYWdlIGRvZXMgZXhpc3QgaW4gYSBkaWZmZXJlbnQgem9uZVxuLy8gIDMuIEludGVybmFsIGVycm9yIHdoaWxlIGxvYWRpbmcgdGhlIHBhZ2Vcbi8vIFNvLCBkb2luZyBhIGhhcmQgcmVsb2FkIGlzIHRoZSBwcm9wZXIgd2F5IHRvIGRlYWwgd2l0aCB0aGlzLlxud2luZG93LmxvY2F0aW9uLmhyZWY9YXM7Ly8gQ2hhbmdpbmcgdGhlIFVSTCBkb2Vzbid0IGJsb2NrIGV4ZWN1dGluZyB0aGUgY3VycmVudCBjb2RlIHBhdGguXG4vLyBTbyBsZXQncyB0aHJvdyBhIGNhbmNlbGxhdGlvbiBlcnJvciBzdG9wIHRoZSByb3V0aW5nIGxvZ2ljLlxudGhyb3cgYnVpbGRDYW5jZWxsYXRpb25FcnJvcigpO310cnl7bGV0IENvbXBvbmVudDtsZXQgc3R5bGVTaGVldHM7bGV0IHByb3BzO2lmKHR5cGVvZiBDb21wb25lbnQ9PT0ndW5kZWZpbmVkJ3x8dHlwZW9mIHN0eWxlU2hlZXRzPT09J3VuZGVmaW5lZCcpezsoe3BhZ2U6Q29tcG9uZW50LHN0eWxlU2hlZXRzfT1hd2FpdCB0aGlzLmZldGNoQ29tcG9uZW50KCcvX2Vycm9yJykpO31jb25zdCByb3V0ZUluZm89e3Byb3BzLENvbXBvbmVudCxzdHlsZVNoZWV0cyxlcnIsZXJyb3I6ZXJyfTtpZighcm91dGVJbmZvLnByb3BzKXt0cnl7cm91dGVJbmZvLnByb3BzPWF3YWl0IHRoaXMuZ2V0SW5pdGlhbFByb3BzKENvbXBvbmVudCx7ZXJyLHBhdGhuYW1lLHF1ZXJ5fSk7fWNhdGNoKGdpcEVycil7Y29uc29sZS5lcnJvcignRXJyb3IgaW4gZXJyb3IgcGFnZSBgZ2V0SW5pdGlhbFByb3BzYDogJyxnaXBFcnIpO3JvdXRlSW5mby5wcm9wcz17fTt9fXJldHVybiByb3V0ZUluZm87fWNhdGNoKHJvdXRlSW5mb0Vycil7cmV0dXJuIHRoaXMuaGFuZGxlUm91dGVJbmZvRXJyb3Iocm91dGVJbmZvRXJyLHBhdGhuYW1lLHF1ZXJ5LGFzLHJvdXRlUHJvcHMsdHJ1ZSk7fX1hc3luYyBnZXRSb3V0ZUluZm8ocm91dGUscGF0aG5hbWUscXVlcnksYXMscmVzb2x2ZWRBcyxyb3V0ZVByb3BzKXt0cnl7Y29uc3QgZXhpc3RpbmdSb3V0ZUluZm89dGhpcy5jb21wb25lbnRzW3JvdXRlXTtpZihyb3V0ZVByb3BzLnNoYWxsb3cmJmV4aXN0aW5nUm91dGVJbmZvJiZ0aGlzLnJvdXRlPT09cm91dGUpe3JldHVybiBleGlzdGluZ1JvdXRlSW5mbzt9Y29uc3QgY2FjaGVkUm91dGVJbmZvPWV4aXN0aW5nUm91dGVJbmZvJiYnaW5pdGlhbCdpbiBleGlzdGluZ1JvdXRlSW5mbz91bmRlZmluZWQ6ZXhpc3RpbmdSb3V0ZUluZm87Y29uc3Qgcm91dGVJbmZvPWNhY2hlZFJvdXRlSW5mbz9jYWNoZWRSb3V0ZUluZm86YXdhaXQgdGhpcy5mZXRjaENvbXBvbmVudChyb3V0ZSkudGhlbihyZXM9Pih7Q29tcG9uZW50OnJlcy5wYWdlLHN0eWxlU2hlZXRzOnJlcy5zdHlsZVNoZWV0cyxfX05fU1NHOnJlcy5tb2QuX19OX1NTRyxfX05fU1NQOnJlcy5tb2QuX19OX1NTUH0pKTtjb25zdHtDb21wb25lbnQsX19OX1NTRyxfX05fU1NQfT1yb3V0ZUluZm87aWYocHJvY2Vzcy5lbnYuTk9ERV9FTlYhPT0ncHJvZHVjdGlvbicpe2NvbnN0e2lzVmFsaWRFbGVtZW50VHlwZX09cmVxdWlyZSgncmVhY3QtaXMnKTtpZighaXNWYWxpZEVsZW1lbnRUeXBlKENvbXBvbmVudCkpe3Rocm93IG5ldyBFcnJvcihgVGhlIGRlZmF1bHQgZXhwb3J0IGlzIG5vdCBhIFJlYWN0IENvbXBvbmVudCBpbiBwYWdlOiBcIiR7cGF0aG5hbWV9XCJgKTt9fWxldCBkYXRhSHJlZjtpZihfX05fU1NHfHxfX05fU1NQKXtkYXRhSHJlZj10aGlzLnBhZ2VMb2FkZXIuZ2V0RGF0YUhyZWYoKDAsX3V0aWxzLmZvcm1hdFdpdGhWYWxpZGF0aW9uKSh7cGF0aG5hbWUscXVlcnl9KSxyZXNvbHZlZEFzLF9fTl9TU0csdGhpcy5sb2NhbGUpO31jb25zdCBwcm9wcz1hd2FpdCB0aGlzLl9nZXREYXRhKCgpPT5fX05fU1NHP3RoaXMuX2dldFN0YXRpY0RhdGEoZGF0YUhyZWYpOl9fTl9TU1A/dGhpcy5fZ2V0U2VydmVyRGF0YShkYXRhSHJlZik6dGhpcy5nZXRJbml0aWFsUHJvcHMoQ29tcG9uZW50LC8vIHdlIHByb3ZpZGUgQXBwVHJlZSBsYXRlciBzbyB0aGlzIG5lZWRzIHRvIGJlIGBhbnlgXG57cGF0aG5hbWUscXVlcnksYXNQYXRoOmFzLGxvY2FsZTp0aGlzLmxvY2FsZSxsb2NhbGVzOnRoaXMubG9jYWxlcyxkZWZhdWx0TG9jYWxlOnRoaXMuZGVmYXVsdExvY2FsZX0pKTtyb3V0ZUluZm8ucHJvcHM9cHJvcHM7dGhpcy5jb21wb25lbnRzW3JvdXRlXT1yb3V0ZUluZm87cmV0dXJuIHJvdXRlSW5mbzt9Y2F0Y2goZXJyKXtyZXR1cm4gdGhpcy5oYW5kbGVSb3V0ZUluZm9FcnJvcihlcnIscGF0aG5hbWUscXVlcnksYXMscm91dGVQcm9wcyk7fX1zZXQocm91dGUscGF0aG5hbWUscXVlcnksYXMsZGF0YSxyZXNldFNjcm9sbCl7dGhpcy5pc0ZhbGxiYWNrPWZhbHNlO3RoaXMucm91dGU9cm91dGU7dGhpcy5wYXRobmFtZT1wYXRobmFtZTt0aGlzLnF1ZXJ5PXF1ZXJ5O3RoaXMuYXNQYXRoPWFzO3JldHVybiB0aGlzLm5vdGlmeShkYXRhLHJlc2V0U2Nyb2xsKTt9LyoqXG4gICAqIENhbGxiYWNrIHRvIGV4ZWN1dGUgYmVmb3JlIHJlcGxhY2luZyByb3V0ZXIgc3RhdGVcbiAgICogQHBhcmFtIGNiIGNhbGxiYWNrIHRvIGJlIGV4ZWN1dGVkXG4gICAqL2JlZm9yZVBvcFN0YXRlKGNiKXt0aGlzLl9icHM9Y2I7fW9ubHlBSGFzaENoYW5nZShhcyl7aWYoIXRoaXMuYXNQYXRoKXJldHVybiBmYWxzZTtjb25zdFtvbGRVcmxOb0hhc2gsb2xkSGFzaF09dGhpcy5hc1BhdGguc3BsaXQoJyMnKTtjb25zdFtuZXdVcmxOb0hhc2gsbmV3SGFzaF09YXMuc3BsaXQoJyMnKTsvLyBNYWtlcyBzdXJlIHdlIHNjcm9sbCB0byB0aGUgcHJvdmlkZWQgaGFzaCBpZiB0aGUgdXJsL2hhc2ggYXJlIHRoZSBzYW1lXG5pZihuZXdIYXNoJiZvbGRVcmxOb0hhc2g9PT1uZXdVcmxOb0hhc2gmJm9sZEhhc2g9PT1uZXdIYXNoKXtyZXR1cm4gdHJ1ZTt9Ly8gSWYgdGhlIHVybHMgYXJlIGNoYW5nZSwgdGhlcmUncyBtb3JlIHRoYW4gYSBoYXNoIGNoYW5nZVxuaWYob2xkVXJsTm9IYXNoIT09bmV3VXJsTm9IYXNoKXtyZXR1cm4gZmFsc2U7fS8vIElmIHRoZSBoYXNoIGhhcyBjaGFuZ2VkLCB0aGVuIGl0J3MgYSBoYXNoIG9ubHkgY2hhbmdlLlxuLy8gVGhpcyBjaGVjayBpcyBuZWNlc3NhcnkgdG8gaGFuZGxlIGJvdGggdGhlIGVudGVyIGFuZFxuLy8gbGVhdmUgaGFzaCA9PT0gJycgY2FzZXMuIFRoZSBpZGVudGl0eSBjYXNlIGZhbGxzIHRocm91Z2hcbi8vIGFuZCBpcyB0cmVhdGVkIGFzIGEgbmV4dCByZWxvYWQuXG5yZXR1cm4gb2xkSGFzaCE9PW5ld0hhc2g7fXNjcm9sbFRvSGFzaChhcyl7Y29uc3RbLGhhc2hdPWFzLnNwbGl0KCcjJyk7Ly8gU2Nyb2xsIHRvIHRvcCBpZiB0aGUgaGFzaCBpcyBqdXN0IGAjYCB3aXRoIG5vIHZhbHVlIG9yIGAjdG9wYFxuLy8gVG8gbWlycm9yIGJyb3dzZXJzXG5pZihoYXNoPT09Jyd8fGhhc2g9PT0ndG9wJyl7d2luZG93LnNjcm9sbFRvKDAsMCk7cmV0dXJuO30vLyBGaXJzdCB3ZSBjaGVjayBpZiB0aGUgZWxlbWVudCBieSBpZCBpcyBmb3VuZFxuY29uc3QgaWRFbD1kb2N1bWVudC5nZXRFbGVtZW50QnlJZChoYXNoKTtpZihpZEVsKXtpZEVsLnNjcm9sbEludG9WaWV3KCk7cmV0dXJuO30vLyBJZiB0aGVyZSdzIG5vIGVsZW1lbnQgd2l0aCB0aGUgaWQsIHdlIGNoZWNrIHRoZSBgbmFtZWAgcHJvcGVydHlcbi8vIFRvIG1pcnJvciBicm93c2Vyc1xuY29uc3QgbmFtZUVsPWRvY3VtZW50LmdldEVsZW1lbnRzQnlOYW1lKGhhc2gpWzBdO2lmKG5hbWVFbCl7bmFtZUVsLnNjcm9sbEludG9WaWV3KCk7fX11cmxJc05ldyhhc1BhdGgpe3JldHVybiB0aGlzLmFzUGF0aCE9PWFzUGF0aDt9LyoqXG4gICAqIFByZWZldGNoIHBhZ2UgY29kZSwgeW91IG1heSB3YWl0IGZvciB0aGUgZGF0YSBkdXJpbmcgcGFnZSByZW5kZXJpbmcuXG4gICAqIFRoaXMgZmVhdHVyZSBvbmx5IHdvcmtzIGluIHByb2R1Y3Rpb24hXG4gICAqIEBwYXJhbSB1cmwgdGhlIGhyZWYgb2YgcHJlZmV0Y2hlZCBwYWdlXG4gICAqIEBwYXJhbSBhc1BhdGggdGhlIGFzIHBhdGggb2YgdGhlIHByZWZldGNoZWQgcGFnZVxuICAgKi9hc3luYyBwcmVmZXRjaCh1cmwsYXNQYXRoPXVybCxvcHRpb25zPXt9KXtsZXQgcGFyc2VkPSgwLF9wYXJzZVJlbGF0aXZlVXJsLnBhcnNlUmVsYXRpdmVVcmwpKHVybCk7bGV0e3BhdGhuYW1lfT1wYXJzZWQ7aWYocHJvY2Vzcy5lbnYuX19ORVhUX0kxOE5fU1VQUE9SVCl7aWYob3B0aW9ucy5sb2NhbGU9PT1mYWxzZSl7cGF0aG5hbWU9KDAsX25vcm1hbGl6ZUxvY2FsZVBhdGgubm9ybWFsaXplTG9jYWxlUGF0aCkocGF0aG5hbWUsdGhpcy5sb2NhbGVzKS5wYXRobmFtZTtwYXJzZWQucGF0aG5hbWU9cGF0aG5hbWU7dXJsPSgwLF91dGlscy5mb3JtYXRXaXRoVmFsaWRhdGlvbikocGFyc2VkKTtsZXQgcGFyc2VkQXM9KDAsX3BhcnNlUmVsYXRpdmVVcmwucGFyc2VSZWxhdGl2ZVVybCkoYXNQYXRoKTtjb25zdCBsb2NhbGVQYXRoUmVzdWx0PSgwLF9ub3JtYWxpemVMb2NhbGVQYXRoLm5vcm1hbGl6ZUxvY2FsZVBhdGgpKHBhcnNlZEFzLnBhdGhuYW1lLHRoaXMubG9jYWxlcyk7cGFyc2VkQXMucGF0aG5hbWU9bG9jYWxlUGF0aFJlc3VsdC5wYXRobmFtZTtvcHRpb25zLmxvY2FsZT1sb2NhbGVQYXRoUmVzdWx0LmRldGVjdGVkTG9jYWxlfHx0aGlzLmRlZmF1bHRMb2NhbGU7YXNQYXRoPSgwLF91dGlscy5mb3JtYXRXaXRoVmFsaWRhdGlvbikocGFyc2VkQXMpO319Y29uc3QgcGFnZXM9YXdhaXQgdGhpcy5wYWdlTG9hZGVyLmdldFBhZ2VMaXN0KCk7bGV0IHJlc29sdmVkQXM9YXNQYXRoO2lmKHByb2Nlc3MuZW52Ll9fTkVYVF9IQVNfUkVXUklURVMmJmFzUGF0aC5zdGFydHNXaXRoKCcvJykpe2xldCByZXdyaXRlczsoe19fcmV3cml0ZXM6cmV3cml0ZXN9PWF3YWl0KDAsX3JvdXRlTG9hZGVyLmdldENsaWVudEJ1aWxkTWFuaWZlc3QpKCkpO2NvbnN0IHJld3JpdGVzUmVzdWx0PSgwLF9yZXNvbHZlUmV3cml0ZXMuZGVmYXVsdCkoYWRkQmFzZVBhdGgoYWRkTG9jYWxlKGFzUGF0aCx0aGlzLmxvY2FsZSkpLHBhZ2VzLHJld3JpdGVzLHBhcnNlZC5xdWVyeSxwPT5yZXNvbHZlRHluYW1pY1JvdXRlKHAscGFnZXMpLHRoaXMubG9jYWxlcyk7cmVzb2x2ZWRBcz1kZWxMb2NhbGUoZGVsQmFzZVBhdGgocmV3cml0ZXNSZXN1bHQuYXNQYXRoKSx0aGlzLmxvY2FsZSk7aWYocmV3cml0ZXNSZXN1bHQubWF0Y2hlZFBhZ2UmJnJld3JpdGVzUmVzdWx0LnJlc29sdmVkSHJlZil7Ly8gaWYgdGhpcyBkaXJlY3RseSBtYXRjaGVzIGEgcGFnZSB3ZSBuZWVkIHRvIHVwZGF0ZSB0aGUgaHJlZiB0b1xuLy8gYWxsb3cgdGhlIGNvcnJlY3QgcGFnZSBjaHVuayB0byBiZSBsb2FkZWRcbnBhdGhuYW1lPXJld3JpdGVzUmVzdWx0LnJlc29sdmVkSHJlZjtwYXJzZWQucGF0aG5hbWU9cGF0aG5hbWU7dXJsPSgwLF91dGlscy5mb3JtYXRXaXRoVmFsaWRhdGlvbikocGFyc2VkKTt9fWVsc2V7cGFyc2VkLnBhdGhuYW1lPXJlc29sdmVEeW5hbWljUm91dGUocGFyc2VkLnBhdGhuYW1lLHBhZ2VzKTtpZihwYXJzZWQucGF0aG5hbWUhPT1wYXRobmFtZSl7cGF0aG5hbWU9cGFyc2VkLnBhdGhuYW1lO3BhcnNlZC5wYXRobmFtZT1wYXRobmFtZTt1cmw9KDAsX3V0aWxzLmZvcm1hdFdpdGhWYWxpZGF0aW9uKShwYXJzZWQpO319Y29uc3Qgcm91dGU9KDAsX25vcm1hbGl6ZVRyYWlsaW5nU2xhc2gucmVtb3ZlUGF0aFRyYWlsaW5nU2xhc2gpKHBhdGhuYW1lKTsvLyBQcmVmZXRjaCBpcyBub3Qgc3VwcG9ydGVkIGluIGRldmVsb3BtZW50IG1vZGUgYmVjYXVzZSBpdCB3b3VsZCB0cmlnZ2VyIG9uLWRlbWFuZC1lbnRyaWVzXG5pZihwcm9jZXNzLmVudi5OT0RFX0VOViE9PSdwcm9kdWN0aW9uJyl7cmV0dXJuO31hd2FpdCBQcm9taXNlLmFsbChbdGhpcy5wYWdlTG9hZGVyLl9pc1NzZyhyb3V0ZSkudGhlbihpc1NzZz0+e3JldHVybiBpc1NzZz90aGlzLl9nZXRTdGF0aWNEYXRhKHRoaXMucGFnZUxvYWRlci5nZXREYXRhSHJlZih1cmwscmVzb2x2ZWRBcyx0cnVlLHR5cGVvZiBvcHRpb25zLmxvY2FsZSE9PSd1bmRlZmluZWQnP29wdGlvbnMubG9jYWxlOnRoaXMubG9jYWxlKSk6ZmFsc2U7fSksdGhpcy5wYWdlTG9hZGVyW29wdGlvbnMucHJpb3JpdHk/J2xvYWRQYWdlJzoncHJlZmV0Y2gnXShyb3V0ZSldKTt9YXN5bmMgZmV0Y2hDb21wb25lbnQocm91dGUpe2xldCBjYW5jZWxsZWQ9ZmFsc2U7Y29uc3QgY2FuY2VsPXRoaXMuY2xjPSgpPT57Y2FuY2VsbGVkPXRydWU7fTtjb25zdCBjb21wb25lbnRSZXN1bHQ9YXdhaXQgdGhpcy5wYWdlTG9hZGVyLmxvYWRQYWdlKHJvdXRlKTtpZihjYW5jZWxsZWQpe2NvbnN0IGVycm9yPW5ldyBFcnJvcihgQWJvcnQgZmV0Y2hpbmcgY29tcG9uZW50IGZvciByb3V0ZTogXCIke3JvdXRlfVwiYCk7ZXJyb3IuY2FuY2VsbGVkPXRydWU7dGhyb3cgZXJyb3I7fWlmKGNhbmNlbD09PXRoaXMuY2xjKXt0aGlzLmNsYz1udWxsO31yZXR1cm4gY29tcG9uZW50UmVzdWx0O31fZ2V0RGF0YShmbil7bGV0IGNhbmNlbGxlZD1mYWxzZTtjb25zdCBjYW5jZWw9KCk9PntjYW5jZWxsZWQ9dHJ1ZTt9O3RoaXMuY2xjPWNhbmNlbDtyZXR1cm4gZm4oKS50aGVuKGRhdGE9PntpZihjYW5jZWw9PT10aGlzLmNsYyl7dGhpcy5jbGM9bnVsbDt9aWYoY2FuY2VsbGVkKXtjb25zdCBlcnI9bmV3IEVycm9yKCdMb2FkaW5nIGluaXRpYWwgcHJvcHMgY2FuY2VsbGVkJyk7ZXJyLmNhbmNlbGxlZD10cnVlO3Rocm93IGVycjt9cmV0dXJuIGRhdGE7fSk7fV9nZXRTdGF0aWNEYXRhKGRhdGFIcmVmKXtjb25zdHtocmVmOmNhY2hlS2V5fT1uZXcgVVJMKGRhdGFIcmVmLHdpbmRvdy5sb2NhdGlvbi5ocmVmKTtpZihwcm9jZXNzLmVudi5OT0RFX0VOVj09PSdwcm9kdWN0aW9uJyYmIXRoaXMuaXNQcmV2aWV3JiZ0aGlzLnNkY1tjYWNoZUtleV0pe3JldHVybiBQcm9taXNlLnJlc29sdmUodGhpcy5zZGNbY2FjaGVLZXldKTt9cmV0dXJuIGZldGNoTmV4dERhdGEoZGF0YUhyZWYsdGhpcy5pc1NzcikudGhlbihkYXRhPT57dGhpcy5zZGNbY2FjaGVLZXldPWRhdGE7cmV0dXJuIGRhdGE7fSk7fV9nZXRTZXJ2ZXJEYXRhKGRhdGFIcmVmKXtjb25zdHtocmVmOnJlc291cmNlS2V5fT1uZXcgVVJMKGRhdGFIcmVmLHdpbmRvdy5sb2NhdGlvbi5ocmVmKTtpZih0aGlzLnNkcltyZXNvdXJjZUtleV0pe3JldHVybiB0aGlzLnNkcltyZXNvdXJjZUtleV07fXJldHVybiB0aGlzLnNkcltyZXNvdXJjZUtleV09ZmV0Y2hOZXh0RGF0YShkYXRhSHJlZix0aGlzLmlzU3NyKS50aGVuKGRhdGE9PntkZWxldGUgdGhpcy5zZHJbcmVzb3VyY2VLZXldO3JldHVybiBkYXRhO30pLmNhdGNoKGVycj0+e2RlbGV0ZSB0aGlzLnNkcltyZXNvdXJjZUtleV07dGhyb3cgZXJyO30pO31nZXRJbml0aWFsUHJvcHMoQ29tcG9uZW50LGN0eCl7Y29uc3R7Q29tcG9uZW50OkFwcH09dGhpcy5jb21wb25lbnRzWycvX2FwcCddO2NvbnN0IEFwcFRyZWU9dGhpcy5fd3JhcEFwcChBcHApO2N0eC5BcHBUcmVlPUFwcFRyZWU7cmV0dXJuKDAsX3V0aWxzLmxvYWRHZXRJbml0aWFsUHJvcHMpKEFwcCx7QXBwVHJlZSxDb21wb25lbnQscm91dGVyOnRoaXMsY3R4fSk7fWFib3J0Q29tcG9uZW50TG9hZChhcyxyb3V0ZVByb3BzKXtpZih0aGlzLmNsYyl7Um91dGVyLmV2ZW50cy5lbWl0KCdyb3V0ZUNoYW5nZUVycm9yJyxidWlsZENhbmNlbGxhdGlvbkVycm9yKCksYXMscm91dGVQcm9wcyk7dGhpcy5jbGMoKTt0aGlzLmNsYz1udWxsO319bm90aWZ5KGRhdGEscmVzZXRTY3JvbGwpe3JldHVybiB0aGlzLnN1YihkYXRhLHRoaXMuY29tcG9uZW50c1snL19hcHAnXS5Db21wb25lbnQscmVzZXRTY3JvbGwpO319ZXhwb3J0cy5kZWZhdWx0PVJvdXRlcjtSb3V0ZXIuZXZlbnRzPSgwLF9taXR0LmRlZmF1bHQpKCk7XG4vLyMgc291cmNlTWFwcGluZ1VSTD1yb3V0ZXIuanMubWFwIiwiXCJ1c2Ugc3RyaWN0XCI7ZXhwb3J0cy5fX2VzTW9kdWxlPXRydWU7ZXhwb3J0cy5mb3JtYXRVcmw9Zm9ybWF0VXJsO3ZhciBxdWVyeXN0cmluZz1faW50ZXJvcFJlcXVpcmVXaWxkY2FyZChyZXF1aXJlKFwiLi9xdWVyeXN0cmluZ1wiKSk7ZnVuY3Rpb24gX2dldFJlcXVpcmVXaWxkY2FyZENhY2hlKCl7aWYodHlwZW9mIFdlYWtNYXAhPT1cImZ1bmN0aW9uXCIpcmV0dXJuIG51bGw7dmFyIGNhY2hlPW5ldyBXZWFrTWFwKCk7X2dldFJlcXVpcmVXaWxkY2FyZENhY2hlPWZ1bmN0aW9uKCl7cmV0dXJuIGNhY2hlO307cmV0dXJuIGNhY2hlO31mdW5jdGlvbiBfaW50ZXJvcFJlcXVpcmVXaWxkY2FyZChvYmope2lmKG9iaiYmb2JqLl9fZXNNb2R1bGUpe3JldHVybiBvYmo7fWlmKG9iaj09PW51bGx8fHR5cGVvZiBvYmohPT1cIm9iamVjdFwiJiZ0eXBlb2Ygb2JqIT09XCJmdW5jdGlvblwiKXtyZXR1cm57ZGVmYXVsdDpvYmp9O312YXIgY2FjaGU9X2dldFJlcXVpcmVXaWxkY2FyZENhY2hlKCk7aWYoY2FjaGUmJmNhY2hlLmhhcyhvYmopKXtyZXR1cm4gY2FjaGUuZ2V0KG9iaik7fXZhciBuZXdPYmo9e307dmFyIGhhc1Byb3BlcnR5RGVzY3JpcHRvcj1PYmplY3QuZGVmaW5lUHJvcGVydHkmJk9iamVjdC5nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3I7Zm9yKHZhciBrZXkgaW4gb2JqKXtpZihPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLGtleSkpe3ZhciBkZXNjPWhhc1Byb3BlcnR5RGVzY3JpcHRvcj9PYmplY3QuZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yKG9iaixrZXkpOm51bGw7aWYoZGVzYyYmKGRlc2MuZ2V0fHxkZXNjLnNldCkpe09iamVjdC5kZWZpbmVQcm9wZXJ0eShuZXdPYmosa2V5LGRlc2MpO31lbHNle25ld09ialtrZXldPW9ialtrZXldO319fW5ld09iai5kZWZhdWx0PW9iajtpZihjYWNoZSl7Y2FjaGUuc2V0KG9iaixuZXdPYmopO31yZXR1cm4gbmV3T2JqO30vLyBGb3JtYXQgZnVuY3Rpb24gbW9kaWZpZWQgZnJvbSBub2RlanNcbi8vIENvcHlyaWdodCBKb3llbnQsIEluYy4gYW5kIG90aGVyIE5vZGUgY29udHJpYnV0b3JzLlxuLy9cbi8vIFBlcm1pc3Npb24gaXMgaGVyZWJ5IGdyYW50ZWQsIGZyZWUgb2YgY2hhcmdlLCB0byBhbnkgcGVyc29uIG9idGFpbmluZyBhXG4vLyBjb3B5IG9mIHRoaXMgc29mdHdhcmUgYW5kIGFzc29jaWF0ZWQgZG9jdW1lbnRhdGlvbiBmaWxlcyAodGhlXG4vLyBcIlNvZnR3YXJlXCIpLCB0byBkZWFsIGluIHRoZSBTb2Z0d2FyZSB3aXRob3V0IHJlc3RyaWN0aW9uLCBpbmNsdWRpbmdcbi8vIHdpdGhvdXQgbGltaXRhdGlvbiB0aGUgcmlnaHRzIHRvIHVzZSwgY29weSwgbW9kaWZ5LCBtZXJnZSwgcHVibGlzaCxcbi8vIGRpc3RyaWJ1dGUsIHN1YmxpY2Vuc2UsIGFuZC9vciBzZWxsIGNvcGllcyBvZiB0aGUgU29mdHdhcmUsIGFuZCB0byBwZXJtaXRcbi8vIHBlcnNvbnMgdG8gd2hvbSB0aGUgU29mdHdhcmUgaXMgZnVybmlzaGVkIHRvIGRvIHNvLCBzdWJqZWN0IHRvIHRoZVxuLy8gZm9sbG93aW5nIGNvbmRpdGlvbnM6XG4vL1xuLy8gVGhlIGFib3ZlIGNvcHlyaWdodCBub3RpY2UgYW5kIHRoaXMgcGVybWlzc2lvbiBub3RpY2Ugc2hhbGwgYmUgaW5jbHVkZWRcbi8vIGluIGFsbCBjb3BpZXMgb3Igc3Vic3RhbnRpYWwgcG9ydGlvbnMgb2YgdGhlIFNvZnR3YXJlLlxuLy9cbi8vIFRIRSBTT0ZUV0FSRSBJUyBQUk9WSURFRCBcIkFTIElTXCIsIFdJVEhPVVQgV0FSUkFOVFkgT0YgQU5ZIEtJTkQsIEVYUFJFU1Ncbi8vIE9SIElNUExJRUQsIElOQ0xVRElORyBCVVQgTk9UIExJTUlURUQgVE8gVEhFIFdBUlJBTlRJRVMgT0Zcbi8vIE1FUkNIQU5UQUJJTElUWSwgRklUTkVTUyBGT1IgQSBQQVJUSUNVTEFSIFBVUlBPU0UgQU5EIE5PTklORlJJTkdFTUVOVC4gSU5cbi8vIE5PIEVWRU5UIFNIQUxMIFRIRSBBVVRIT1JTIE9SIENPUFlSSUdIVCBIT0xERVJTIEJFIExJQUJMRSBGT1IgQU5ZIENMQUlNLFxuLy8gREFNQUdFUyBPUiBPVEhFUiBMSUFCSUxJVFksIFdIRVRIRVIgSU4gQU4gQUNUSU9OIE9GIENPTlRSQUNULCBUT1JUIE9SXG4vLyBPVEhFUldJU0UsIEFSSVNJTkcgRlJPTSwgT1VUIE9GIE9SIElOIENPTk5FQ1RJT04gV0lUSCBUSEUgU09GVFdBUkUgT1IgVEhFXG4vLyBVU0UgT1IgT1RIRVIgREVBTElOR1MgSU4gVEhFIFNPRlRXQVJFLlxuY29uc3Qgc2xhc2hlZFByb3RvY29scz0vaHR0cHM/fGZ0cHxnb3BoZXJ8ZmlsZS87ZnVuY3Rpb24gZm9ybWF0VXJsKHVybE9iail7bGV0e2F1dGgsaG9zdG5hbWV9PXVybE9iajtsZXQgcHJvdG9jb2w9dXJsT2JqLnByb3RvY29sfHwnJztsZXQgcGF0aG5hbWU9dXJsT2JqLnBhdGhuYW1lfHwnJztsZXQgaGFzaD11cmxPYmouaGFzaHx8Jyc7bGV0IHF1ZXJ5PXVybE9iai5xdWVyeXx8Jyc7bGV0IGhvc3Q9ZmFsc2U7YXV0aD1hdXRoP2VuY29kZVVSSUNvbXBvbmVudChhdXRoKS5yZXBsYWNlKC8lM0EvaSwnOicpKydAJzonJztpZih1cmxPYmouaG9zdCl7aG9zdD1hdXRoK3VybE9iai5ob3N0O31lbHNlIGlmKGhvc3RuYW1lKXtob3N0PWF1dGgrKH5ob3N0bmFtZS5pbmRleE9mKCc6Jyk/YFske2hvc3RuYW1lfV1gOmhvc3RuYW1lKTtpZih1cmxPYmoucG9ydCl7aG9zdCs9JzonK3VybE9iai5wb3J0O319aWYocXVlcnkmJnR5cGVvZiBxdWVyeT09PSdvYmplY3QnKXtxdWVyeT1TdHJpbmcocXVlcnlzdHJpbmcudXJsUXVlcnlUb1NlYXJjaFBhcmFtcyhxdWVyeSkpO31sZXQgc2VhcmNoPXVybE9iai5zZWFyY2h8fHF1ZXJ5JiZgPyR7cXVlcnl9YHx8Jyc7aWYocHJvdG9jb2wmJnByb3RvY29sLnN1YnN0cigtMSkhPT0nOicpcHJvdG9jb2wrPSc6JztpZih1cmxPYmouc2xhc2hlc3x8KCFwcm90b2NvbHx8c2xhc2hlZFByb3RvY29scy50ZXN0KHByb3RvY29sKSkmJmhvc3QhPT1mYWxzZSl7aG9zdD0nLy8nKyhob3N0fHwnJyk7aWYocGF0aG5hbWUmJnBhdGhuYW1lWzBdIT09Jy8nKXBhdGhuYW1lPScvJytwYXRobmFtZTt9ZWxzZSBpZighaG9zdCl7aG9zdD0nJzt9aWYoaGFzaCYmaGFzaFswXSE9PScjJyloYXNoPScjJytoYXNoO2lmKHNlYXJjaCYmc2VhcmNoWzBdIT09Jz8nKXNlYXJjaD0nPycrc2VhcmNoO3BhdGhuYW1lPXBhdGhuYW1lLnJlcGxhY2UoL1s/I10vZyxlbmNvZGVVUklDb21wb25lbnQpO3NlYXJjaD1zZWFyY2gucmVwbGFjZSgnIycsJyUyMycpO3JldHVybmAke3Byb3RvY29sfSR7aG9zdH0ke3BhdGhuYW1lfSR7c2VhcmNofSR7aGFzaH1gO31cbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWZvcm1hdC11cmwuanMubWFwIiwiXCJ1c2Ugc3RyaWN0XCI7ZXhwb3J0cy5fX2VzTW9kdWxlPXRydWU7ZXhwb3J0cy5pc0R5bmFtaWNSb3V0ZT1pc0R5bmFtaWNSb3V0ZTsvLyBJZGVudGlmeSAvW3BhcmFtXS8gaW4gcm91dGUgc3RyaW5nXG5jb25zdCBURVNUX1JPVVRFPS9cXC9cXFtbXi9dKz9cXF0oPz1cXC98JCkvO2Z1bmN0aW9uIGlzRHluYW1pY1JvdXRlKHJvdXRlKXtyZXR1cm4gVEVTVF9ST1VURS50ZXN0KHJvdXRlKTt9XG4vLyMgc291cmNlTWFwcGluZ1VSTD1pcy1keW5hbWljLmpzLm1hcCIsIlwidXNlIHN0cmljdFwiO2V4cG9ydHMuX19lc01vZHVsZT10cnVlO2V4cG9ydHMucGFyc2VSZWxhdGl2ZVVybD1wYXJzZVJlbGF0aXZlVXJsO3ZhciBfdXRpbHM9cmVxdWlyZShcIi4uLy4uL3V0aWxzXCIpO3ZhciBfcXVlcnlzdHJpbmc9cmVxdWlyZShcIi4vcXVlcnlzdHJpbmdcIik7LyoqXG4gKiBQYXJzZXMgcGF0aC1yZWxhdGl2ZSB1cmxzIChlLmcuIGAvaGVsbG8vd29ybGQ/Zm9vPWJhcmApLiBJZiB1cmwgaXNuJ3QgcGF0aC1yZWxhdGl2ZVxuICogKGUuZy4gYC4vaGVsbG9gKSB0aGVuIGF0IGxlYXN0IGJhc2UgbXVzdCBiZS5cbiAqIEFic29sdXRlIHVybHMgYXJlIHJlamVjdGVkIHdpdGggb25lIGV4Y2VwdGlvbiwgaW4gdGhlIGJyb3dzZXIsIGFic29sdXRlIHVybHMgdGhhdCBhcmUgb25cbiAqIHRoZSBjdXJyZW50IG9yaWdpbiB3aWxsIGJlIHBhcnNlZCBhcyByZWxhdGl2ZVxuICovZnVuY3Rpb24gcGFyc2VSZWxhdGl2ZVVybCh1cmwsYmFzZSl7Y29uc3QgZ2xvYmFsQmFzZT1uZXcgVVJMKHR5cGVvZiB3aW5kb3c9PT0ndW5kZWZpbmVkJz8naHR0cDovL24nOigwLF91dGlscy5nZXRMb2NhdGlvbk9yaWdpbikoKSk7Y29uc3QgcmVzb2x2ZWRCYXNlPWJhc2U/bmV3IFVSTChiYXNlLGdsb2JhbEJhc2UpOmdsb2JhbEJhc2U7Y29uc3R7cGF0aG5hbWUsc2VhcmNoUGFyYW1zLHNlYXJjaCxoYXNoLGhyZWYsb3JpZ2lufT1uZXcgVVJMKHVybCxyZXNvbHZlZEJhc2UpO2lmKG9yaWdpbiE9PWdsb2JhbEJhc2Uub3JpZ2luKXt0aHJvdyBuZXcgRXJyb3IoYGludmFyaWFudDogaW52YWxpZCByZWxhdGl2ZSBVUkwsIHJvdXRlciByZWNlaXZlZCAke3VybH1gKTt9cmV0dXJue3BhdGhuYW1lLHF1ZXJ5OigwLF9xdWVyeXN0cmluZy5zZWFyY2hQYXJhbXNUb1VybFF1ZXJ5KShzZWFyY2hQYXJhbXMpLHNlYXJjaCxoYXNoLGhyZWY6aHJlZi5zbGljZShnbG9iYWxCYXNlLm9yaWdpbi5sZW5ndGgpfTt9XG4vLyMgc291cmNlTWFwcGluZ1VSTD1wYXJzZS1yZWxhdGl2ZS11cmwuanMubWFwIiwiXCJ1c2Ugc3RyaWN0XCI7ZXhwb3J0cy5fX2VzTW9kdWxlPXRydWU7ZXhwb3J0cy5zZWFyY2hQYXJhbXNUb1VybFF1ZXJ5PXNlYXJjaFBhcmFtc1RvVXJsUXVlcnk7ZXhwb3J0cy51cmxRdWVyeVRvU2VhcmNoUGFyYW1zPXVybFF1ZXJ5VG9TZWFyY2hQYXJhbXM7ZXhwb3J0cy5hc3NpZ249YXNzaWduO2Z1bmN0aW9uIHNlYXJjaFBhcmFtc1RvVXJsUXVlcnkoc2VhcmNoUGFyYW1zKXtjb25zdCBxdWVyeT17fTtzZWFyY2hQYXJhbXMuZm9yRWFjaCgodmFsdWUsa2V5KT0+e2lmKHR5cGVvZiBxdWVyeVtrZXldPT09J3VuZGVmaW5lZCcpe3F1ZXJ5W2tleV09dmFsdWU7fWVsc2UgaWYoQXJyYXkuaXNBcnJheShxdWVyeVtrZXldKSl7O3F1ZXJ5W2tleV0ucHVzaCh2YWx1ZSk7fWVsc2V7cXVlcnlba2V5XT1bcXVlcnlba2V5XSx2YWx1ZV07fX0pO3JldHVybiBxdWVyeTt9ZnVuY3Rpb24gc3RyaW5naWZ5VXJsUXVlcnlQYXJhbShwYXJhbSl7aWYodHlwZW9mIHBhcmFtPT09J3N0cmluZyd8fHR5cGVvZiBwYXJhbT09PSdudW1iZXInJiYhaXNOYU4ocGFyYW0pfHx0eXBlb2YgcGFyYW09PT0nYm9vbGVhbicpe3JldHVybiBTdHJpbmcocGFyYW0pO31lbHNle3JldHVybicnO319ZnVuY3Rpb24gdXJsUXVlcnlUb1NlYXJjaFBhcmFtcyh1cmxRdWVyeSl7Y29uc3QgcmVzdWx0PW5ldyBVUkxTZWFyY2hQYXJhbXMoKTtPYmplY3QuZW50cmllcyh1cmxRdWVyeSkuZm9yRWFjaCgoW2tleSx2YWx1ZV0pPT57aWYoQXJyYXkuaXNBcnJheSh2YWx1ZSkpe3ZhbHVlLmZvckVhY2goaXRlbT0+cmVzdWx0LmFwcGVuZChrZXksc3RyaW5naWZ5VXJsUXVlcnlQYXJhbShpdGVtKSkpO31lbHNle3Jlc3VsdC5zZXQoa2V5LHN0cmluZ2lmeVVybFF1ZXJ5UGFyYW0odmFsdWUpKTt9fSk7cmV0dXJuIHJlc3VsdDt9ZnVuY3Rpb24gYXNzaWduKHRhcmdldCwuLi5zZWFyY2hQYXJhbXNMaXN0KXtzZWFyY2hQYXJhbXNMaXN0LmZvckVhY2goc2VhcmNoUGFyYW1zPT57QXJyYXkuZnJvbShzZWFyY2hQYXJhbXMua2V5cygpKS5mb3JFYWNoKGtleT0+dGFyZ2V0LmRlbGV0ZShrZXkpKTtzZWFyY2hQYXJhbXMuZm9yRWFjaCgodmFsdWUsa2V5KT0+dGFyZ2V0LmFwcGVuZChrZXksdmFsdWUpKTt9KTtyZXR1cm4gdGFyZ2V0O31cbi8vIyBzb3VyY2VNYXBwaW5nVVJMPXF1ZXJ5c3RyaW5nLmpzLm1hcCIsIlwidXNlIHN0cmljdFwiO2V4cG9ydHMuX19lc01vZHVsZT10cnVlO2V4cG9ydHMuZ2V0Um91dGVNYXRjaGVyPWdldFJvdXRlTWF0Y2hlcjtmdW5jdGlvbiBnZXRSb3V0ZU1hdGNoZXIocm91dGVSZWdleCl7Y29uc3R7cmUsZ3JvdXBzfT1yb3V0ZVJlZ2V4O3JldHVybiBwYXRobmFtZT0+e2NvbnN0IHJvdXRlTWF0Y2g9cmUuZXhlYyhwYXRobmFtZSk7aWYoIXJvdXRlTWF0Y2gpe3JldHVybiBmYWxzZTt9Y29uc3QgZGVjb2RlPXBhcmFtPT57dHJ5e3JldHVybiBkZWNvZGVVUklDb21wb25lbnQocGFyYW0pO31jYXRjaChfKXtjb25zdCBlcnI9bmV3IEVycm9yKCdmYWlsZWQgdG8gZGVjb2RlIHBhcmFtJyk7ZXJyLmNvZGU9J0RFQ09ERV9GQUlMRUQnO3Rocm93IGVycjt9fTtjb25zdCBwYXJhbXM9e307T2JqZWN0LmtleXMoZ3JvdXBzKS5mb3JFYWNoKHNsdWdOYW1lPT57Y29uc3QgZz1ncm91cHNbc2x1Z05hbWVdO2NvbnN0IG09cm91dGVNYXRjaFtnLnBvc107aWYobSE9PXVuZGVmaW5lZCl7cGFyYW1zW3NsdWdOYW1lXT1+bS5pbmRleE9mKCcvJyk/bS5zcGxpdCgnLycpLm1hcChlbnRyeT0+ZGVjb2RlKGVudHJ5KSk6Zy5yZXBlYXQ/W2RlY29kZShtKV06ZGVjb2RlKG0pO319KTtyZXR1cm4gcGFyYW1zO307fVxuLy8jIHNvdXJjZU1hcHBpbmdVUkw9cm91dGUtbWF0Y2hlci5qcy5tYXAiLCJcInVzZSBzdHJpY3RcIjtleHBvcnRzLl9fZXNNb2R1bGU9dHJ1ZTtleHBvcnRzLmdldFJvdXRlUmVnZXg9Z2V0Um91dGVSZWdleDsvLyB0aGlzIGlzbid0IGltcG9ydGluZyB0aGUgZXNjYXBlLXN0cmluZy1yZWdleCBtb2R1bGVcbi8vIHRvIHJlZHVjZSBieXRlc1xuZnVuY3Rpb24gZXNjYXBlUmVnZXgoc3RyKXtyZXR1cm4gc3RyLnJlcGxhY2UoL1t8XFxcXHt9KClbXFxdXiQrKj8uLV0vZywnXFxcXCQmJyk7fWZ1bmN0aW9uIHBhcnNlUGFyYW1ldGVyKHBhcmFtKXtjb25zdCBvcHRpb25hbD1wYXJhbS5zdGFydHNXaXRoKCdbJykmJnBhcmFtLmVuZHNXaXRoKCddJyk7aWYob3B0aW9uYWwpe3BhcmFtPXBhcmFtLnNsaWNlKDEsLTEpO31jb25zdCByZXBlYXQ9cGFyYW0uc3RhcnRzV2l0aCgnLi4uJyk7aWYocmVwZWF0KXtwYXJhbT1wYXJhbS5zbGljZSgzKTt9cmV0dXJue2tleTpwYXJhbSxyZXBlYXQsb3B0aW9uYWx9O31mdW5jdGlvbiBnZXRSb3V0ZVJlZ2V4KG5vcm1hbGl6ZWRSb3V0ZSl7Y29uc3Qgc2VnbWVudHM9KG5vcm1hbGl6ZWRSb3V0ZS5yZXBsYWNlKC9cXC8kLywnJyl8fCcvJykuc2xpY2UoMSkuc3BsaXQoJy8nKTtjb25zdCBncm91cHM9e307bGV0IGdyb3VwSW5kZXg9MTtjb25zdCBwYXJhbWV0ZXJpemVkUm91dGU9c2VnbWVudHMubWFwKHNlZ21lbnQ9PntpZihzZWdtZW50LnN0YXJ0c1dpdGgoJ1snKSYmc2VnbWVudC5lbmRzV2l0aCgnXScpKXtjb25zdHtrZXksb3B0aW9uYWwscmVwZWF0fT1wYXJzZVBhcmFtZXRlcihzZWdtZW50LnNsaWNlKDEsLTEpKTtncm91cHNba2V5XT17cG9zOmdyb3VwSW5kZXgrKyxyZXBlYXQsb3B0aW9uYWx9O3JldHVybiByZXBlYXQ/b3B0aW9uYWw/Jyg/Oi8oLis/KSk/JzonLyguKz8pJzonLyhbXi9dKz8pJzt9ZWxzZXtyZXR1cm5gLyR7ZXNjYXBlUmVnZXgoc2VnbWVudCl9YDt9fSkuam9pbignJyk7Ly8gZGVhZCBjb2RlIGVsaW1pbmF0ZSBmb3IgYnJvd3NlciBzaW5jZSBpdCdzIG9ubHkgbmVlZGVkXG4vLyB3aGlsZSBnZW5lcmF0aW5nIHJvdXRlcy1tYW5pZmVzdFxuaWYodHlwZW9mIHdpbmRvdz09PSd1bmRlZmluZWQnKXtsZXQgcm91dGVLZXlDaGFyQ29kZT05NztsZXQgcm91dGVLZXlDaGFyTGVuZ3RoPTE7Ly8gYnVpbGRzIGEgbWluaW1hbCByb3V0ZUtleSB1c2luZyBvbmx5IGEteiBhbmQgbWluaW1hbCBudW1iZXIgb2YgY2hhcmFjdGVyc1xuY29uc3QgZ2V0U2FmZVJvdXRlS2V5PSgpPT57bGV0IHJvdXRlS2V5PScnO2ZvcihsZXQgaT0wO2k8cm91dGVLZXlDaGFyTGVuZ3RoO2krKyl7cm91dGVLZXkrPVN0cmluZy5mcm9tQ2hhckNvZGUocm91dGVLZXlDaGFyQ29kZSk7cm91dGVLZXlDaGFyQ29kZSsrO2lmKHJvdXRlS2V5Q2hhckNvZGU+MTIyKXtyb3V0ZUtleUNoYXJMZW5ndGgrKztyb3V0ZUtleUNoYXJDb2RlPTk3O319cmV0dXJuIHJvdXRlS2V5O307Y29uc3Qgcm91dGVLZXlzPXt9O2xldCBuYW1lZFBhcmFtZXRlcml6ZWRSb3V0ZT1zZWdtZW50cy5tYXAoc2VnbWVudD0+e2lmKHNlZ21lbnQuc3RhcnRzV2l0aCgnWycpJiZzZWdtZW50LmVuZHNXaXRoKCddJykpe2NvbnN0e2tleSxvcHRpb25hbCxyZXBlYXR9PXBhcnNlUGFyYW1ldGVyKHNlZ21lbnQuc2xpY2UoMSwtMSkpOy8vIHJlcGxhY2UgYW55IG5vbi13b3JkIGNoYXJhY3RlcnMgc2luY2UgdGhleSBjYW4gYnJlYWtcbi8vIHRoZSBuYW1lZCByZWdleFxubGV0IGNsZWFuZWRLZXk9a2V5LnJlcGxhY2UoL1xcVy9nLCcnKTtsZXQgaW52YWxpZEtleT1mYWxzZTsvLyBjaGVjayBpZiB0aGUga2V5IGlzIHN0aWxsIGludmFsaWQgYW5kIGZhbGxiYWNrIHRvIHVzaW5nIGEga25vd25cbi8vIHNhZmUga2V5XG5pZihjbGVhbmVkS2V5Lmxlbmd0aD09PTB8fGNsZWFuZWRLZXkubGVuZ3RoPjMwKXtpbnZhbGlkS2V5PXRydWU7fWlmKCFpc05hTihwYXJzZUludChjbGVhbmVkS2V5LnN1YnN0cigwLDEpKSkpe2ludmFsaWRLZXk9dHJ1ZTt9aWYoaW52YWxpZEtleSl7Y2xlYW5lZEtleT1nZXRTYWZlUm91dGVLZXkoKTt9cm91dGVLZXlzW2NsZWFuZWRLZXldPWtleTtyZXR1cm4gcmVwZWF0P29wdGlvbmFsP2AoPzovKD88JHtjbGVhbmVkS2V5fT4uKz8pKT9gOmAvKD88JHtjbGVhbmVkS2V5fT4uKz8pYDpgLyg/PCR7Y2xlYW5lZEtleX0+W14vXSs/KWA7fWVsc2V7cmV0dXJuYC8ke2VzY2FwZVJlZ2V4KHNlZ21lbnQpfWA7fX0pLmpvaW4oJycpO3JldHVybntyZTpuZXcgUmVnRXhwKGBeJHtwYXJhbWV0ZXJpemVkUm91dGV9KD86Lyk/JGApLGdyb3Vwcyxyb3V0ZUtleXMsbmFtZWRSZWdleDpgXiR7bmFtZWRQYXJhbWV0ZXJpemVkUm91dGV9KD86Lyk/JGB9O31yZXR1cm57cmU6bmV3IFJlZ0V4cChgXiR7cGFyYW1ldGVyaXplZFJvdXRlfSg/Oi8pPyRgKSxncm91cHN9O31cbi8vIyBzb3VyY2VNYXBwaW5nVVJMPXJvdXRlLXJlZ2V4LmpzLm1hcCIsIlwidXNlIHN0cmljdFwiO2V4cG9ydHMuX19lc01vZHVsZT10cnVlO2V4cG9ydHMuZXhlY09uY2U9ZXhlY09uY2U7ZXhwb3J0cy5nZXRMb2NhdGlvbk9yaWdpbj1nZXRMb2NhdGlvbk9yaWdpbjtleHBvcnRzLmdldFVSTD1nZXRVUkw7ZXhwb3J0cy5nZXREaXNwbGF5TmFtZT1nZXREaXNwbGF5TmFtZTtleHBvcnRzLmlzUmVzU2VudD1pc1Jlc1NlbnQ7ZXhwb3J0cy5sb2FkR2V0SW5pdGlhbFByb3BzPWxvYWRHZXRJbml0aWFsUHJvcHM7ZXhwb3J0cy5mb3JtYXRXaXRoVmFsaWRhdGlvbj1mb3JtYXRXaXRoVmFsaWRhdGlvbjtleHBvcnRzLlNUPWV4cG9ydHMuU1A9ZXhwb3J0cy51cmxPYmplY3RLZXlzPXZvaWQgMDt2YXIgX2Zvcm1hdFVybD1yZXF1aXJlKFwiLi9yb3V0ZXIvdXRpbHMvZm9ybWF0LXVybFwiKTsvKipcbiAqIFV0aWxzXG4gKi9mdW5jdGlvbiBleGVjT25jZShmbil7bGV0IHVzZWQ9ZmFsc2U7bGV0IHJlc3VsdDtyZXR1cm4oLi4uYXJncyk9PntpZighdXNlZCl7dXNlZD10cnVlO3Jlc3VsdD1mbiguLi5hcmdzKTt9cmV0dXJuIHJlc3VsdDt9O31mdW5jdGlvbiBnZXRMb2NhdGlvbk9yaWdpbigpe2NvbnN0e3Byb3RvY29sLGhvc3RuYW1lLHBvcnR9PXdpbmRvdy5sb2NhdGlvbjtyZXR1cm5gJHtwcm90b2NvbH0vLyR7aG9zdG5hbWV9JHtwb3J0Pyc6Jytwb3J0OicnfWA7fWZ1bmN0aW9uIGdldFVSTCgpe2NvbnN0e2hyZWZ9PXdpbmRvdy5sb2NhdGlvbjtjb25zdCBvcmlnaW49Z2V0TG9jYXRpb25PcmlnaW4oKTtyZXR1cm4gaHJlZi5zdWJzdHJpbmcob3JpZ2luLmxlbmd0aCk7fWZ1bmN0aW9uIGdldERpc3BsYXlOYW1lKENvbXBvbmVudCl7cmV0dXJuIHR5cGVvZiBDb21wb25lbnQ9PT0nc3RyaW5nJz9Db21wb25lbnQ6Q29tcG9uZW50LmRpc3BsYXlOYW1lfHxDb21wb25lbnQubmFtZXx8J1Vua25vd24nO31mdW5jdGlvbiBpc1Jlc1NlbnQocmVzKXtyZXR1cm4gcmVzLmZpbmlzaGVkfHxyZXMuaGVhZGVyc1NlbnQ7fWFzeW5jIGZ1bmN0aW9uIGxvYWRHZXRJbml0aWFsUHJvcHMoQXBwLGN0eCl7aWYocHJvY2Vzcy5lbnYuTk9ERV9FTlYhPT0ncHJvZHVjdGlvbicpe3ZhciBfQXBwJHByb3RvdHlwZTtpZigoX0FwcCRwcm90b3R5cGU9QXBwLnByb3RvdHlwZSkhPW51bGwmJl9BcHAkcHJvdG90eXBlLmdldEluaXRpYWxQcm9wcyl7Y29uc3QgbWVzc2FnZT1gXCIke2dldERpc3BsYXlOYW1lKEFwcCl9LmdldEluaXRpYWxQcm9wcygpXCIgaXMgZGVmaW5lZCBhcyBhbiBpbnN0YW5jZSBtZXRob2QgLSB2aXNpdCBodHRwczovL25leHRqcy5vcmcvZG9jcy9tZXNzYWdlcy9nZXQtaW5pdGlhbC1wcm9wcy1hcy1hbi1pbnN0YW5jZS1tZXRob2QgZm9yIG1vcmUgaW5mb3JtYXRpb24uYDt0aHJvdyBuZXcgRXJyb3IobWVzc2FnZSk7fX0vLyB3aGVuIGNhbGxlZCBmcm9tIF9hcHAgYGN0eGAgaXMgbmVzdGVkIGluIGBjdHhgXG5jb25zdCByZXM9Y3R4LnJlc3x8Y3R4LmN0eCYmY3R4LmN0eC5yZXM7aWYoIUFwcC5nZXRJbml0aWFsUHJvcHMpe2lmKGN0eC5jdHgmJmN0eC5Db21wb25lbnQpey8vIEB0cy1pZ25vcmUgcGFnZVByb3BzIGRlZmF1bHRcbnJldHVybntwYWdlUHJvcHM6YXdhaXQgbG9hZEdldEluaXRpYWxQcm9wcyhjdHguQ29tcG9uZW50LGN0eC5jdHgpfTt9cmV0dXJue307fWNvbnN0IHByb3BzPWF3YWl0IEFwcC5nZXRJbml0aWFsUHJvcHMoY3R4KTtpZihyZXMmJmlzUmVzU2VudChyZXMpKXtyZXR1cm4gcHJvcHM7fWlmKCFwcm9wcyl7Y29uc3QgbWVzc2FnZT1gXCIke2dldERpc3BsYXlOYW1lKEFwcCl9LmdldEluaXRpYWxQcm9wcygpXCIgc2hvdWxkIHJlc29sdmUgdG8gYW4gb2JqZWN0LiBCdXQgZm91bmQgXCIke3Byb3BzfVwiIGluc3RlYWQuYDt0aHJvdyBuZXcgRXJyb3IobWVzc2FnZSk7fWlmKHByb2Nlc3MuZW52Lk5PREVfRU5WIT09J3Byb2R1Y3Rpb24nKXtpZihPYmplY3Qua2V5cyhwcm9wcykubGVuZ3RoPT09MCYmIWN0eC5jdHgpe2NvbnNvbGUud2FybihgJHtnZXREaXNwbGF5TmFtZShBcHApfSByZXR1cm5lZCBhbiBlbXB0eSBvYmplY3QgZnJvbSBcXGBnZXRJbml0aWFsUHJvcHNcXGAuIFRoaXMgZGUtb3B0aW1pemVzIGFuZCBwcmV2ZW50cyBhdXRvbWF0aWMgc3RhdGljIG9wdGltaXphdGlvbi4gaHR0cHM6Ly9uZXh0anMub3JnL2RvY3MvbWVzc2FnZXMvZW1wdHktb2JqZWN0LWdldEluaXRpYWxQcm9wc2ApO319cmV0dXJuIHByb3BzO31jb25zdCB1cmxPYmplY3RLZXlzPVsnYXV0aCcsJ2hhc2gnLCdob3N0JywnaG9zdG5hbWUnLCdocmVmJywncGF0aCcsJ3BhdGhuYW1lJywncG9ydCcsJ3Byb3RvY29sJywncXVlcnknLCdzZWFyY2gnLCdzbGFzaGVzJ107ZXhwb3J0cy51cmxPYmplY3RLZXlzPXVybE9iamVjdEtleXM7ZnVuY3Rpb24gZm9ybWF0V2l0aFZhbGlkYXRpb24odXJsKXtpZihwcm9jZXNzLmVudi5OT0RFX0VOVj09PSdkZXZlbG9wbWVudCcpe2lmKHVybCE9PW51bGwmJnR5cGVvZiB1cmw9PT0nb2JqZWN0Jyl7T2JqZWN0LmtleXModXJsKS5mb3JFYWNoKGtleT0+e2lmKHVybE9iamVjdEtleXMuaW5kZXhPZihrZXkpPT09LTEpe2NvbnNvbGUud2FybihgVW5rbm93biBrZXkgcGFzc2VkIHZpYSB1cmxPYmplY3QgaW50byB1cmwuZm9ybWF0OiAke2tleX1gKTt9fSk7fX1yZXR1cm4oMCxfZm9ybWF0VXJsLmZvcm1hdFVybCkodXJsKTt9Y29uc3QgU1A9dHlwZW9mIHBlcmZvcm1hbmNlIT09J3VuZGVmaW5lZCc7ZXhwb3J0cy5TUD1TUDtjb25zdCBTVD1TUCYmdHlwZW9mIHBlcmZvcm1hbmNlLm1hcms9PT0nZnVuY3Rpb24nJiZ0eXBlb2YgcGVyZm9ybWFuY2UubWVhc3VyZT09PSdmdW5jdGlvbic7ZXhwb3J0cy5TVD1TVDtcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPXV0aWxzLmpzLm1hcCIsIlxuICAgIGltcG9ydCBfX2kxOG5Db25maWcgZnJvbSAnQG5leHQtdHJhbnNsYXRlLXJvb3QvaTE4bidcbiAgICBpbXBvcnQgX19hcHBXaXRoSTE4biBmcm9tICduZXh0LXRyYW5zbGF0ZS9hcHBXaXRoSTE4bidcbiAgICBcbmltcG9ydCAnLi8uLi9zdHlsZXMvZ2xvYmFscy5jc3MnXHJcbmltcG9ydCAnLi8uLi9zdHlsZXMvY2FsZW5kYXIuc2NzcydcclxuaW1wb3J0ICdyZWFjdC10b2FzdGlmeS9kaXN0L1JlYWN0VG9hc3RpZnkuY3NzJztcclxuXHJcbmltcG9ydCBIZWFkIGZyb20gJ25leHQvaGVhZCdcclxuaW1wb3J0IExheW91dFdyYXBwZXIgZnJvbSAnLi8uLi9sYXlvdXRzL2xheW91dC13cmFwcGVyJztcclxuaW1wb3J0IHsgUHJvdmlkZXIgfSBmcm9tICdyZWFjdC1yZWR1eCdcclxuaW1wb3J0IHsgc3RvcmUsIHBlcnNpc3RvciB9IGZyb20gJy4uL3JlZHV4L3N0b3JlJ1xyXG5pbXBvcnQgeyBQZXJzaXN0R2F0ZSB9IGZyb20gJ3JlZHV4LXBlcnNpc3QvaW50ZWdyYXRpb24vcmVhY3QnXHJcbmltcG9ydCB7IHJlc2V0U2VydmVyQ29udGV4dCB9IGZyb20gJ3JlYWN0LWJlYXV0aWZ1bC1kbmQnO1xyXG5pbXBvcnRcIi4vLi4vc3R5bGVzL3N0YXRpYy1lbXB0eS5jc3NcIjtcclxuXHJcblxyXG5jb25zdCBfX1BhZ2VfTmV4dF9UcmFuc2xhdGVfXyA9IGZ1bmN0aW9uIE15QXBwKHsgQ29tcG9uZW50LCBwYWdlUHJvcHMgfSkge1xyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPFByb3ZpZGVyIHN0b3JlPXtzdG9yZX0+XHJcbiAgICAgIDxQZXJzaXN0R2F0ZSBsb2FkaW5nPXtudWxsfSBwZXJzaXN0b3I9e3BlcnNpc3Rvcn0+XHJcbiAgICAgICAgPEhlYWQ+XHJcbiAgICAgICAgICA8dGl0bGU+Rm9vdEJldDwvdGl0bGU+XHJcbiAgICAgICAgICA8bWV0YSBuYW1lPVwidmlld3BvcnRcIiBjb250ZW50PVwiaW5pdGlhbC1zY2FsZT0xLjAsIHdpZHRoPWRldmljZS13aWR0aFwiIC8+XHJcbiAgICAgICAgICA8c2NyaXB0IHR5cGU9XCJ0ZXh0L2phdmFzY3JpcHRcIiBzcmM9XCIvL3ZrLmNvbS9qcy9hcGkvb3BlbmFwaS5qcz8xNTJcIj48L3NjcmlwdD5cclxuICAgICAgICA8L0hlYWQ+XHJcbiAgICAgICAgPExheW91dFdyYXBwZXIgey4uLnBhZ2VQcm9wc30+XHJcbiAgICAgICAgICA8Q29tcG9uZW50IHsuLi5wYWdlUHJvcHN9IC8+XHJcbiAgICAgICAgPC9MYXlvdXRXcmFwcGVyPlxyXG4gICAgICA8L1BlcnNpc3RHYXRlPlxyXG4gICAgPC9Qcm92aWRlcj5cclxuICApXHJcbn1cclxuXHJcbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBnZXRTZXJ2ZXJTaWRlUHJvcHMoY29udGV4dCkge1xyXG5cclxuICByZXNldFNlcnZlckNvbnRleHQoKVxyXG5cclxuICByZXR1cm4ge1xyXG4gICAgcHJvcHM6IHt9LCAvLyB3aWxsIGJlIHBhc3NlZCB0byB0aGUgcGFnZSBjb21wb25lbnQgYXMgcHJvcHNcclxuICB9XHJcbn1cblxuICAgIGV4cG9ydCBkZWZhdWx0IF9fYXBwV2l0aEkxOG4oX19QYWdlX05leHRfVHJhbnNsYXRlX18sIHtcbiAgICAgIC4uLl9faTE4bkNvbmZpZyxcbiAgICAgIGlzTG9hZGVyOiB0cnVlLFxuICAgICAgc2tpcEluaXRpYWxQcm9wczogdHJ1ZSxcbiAgICAgIGxvYWRMb2NhbGVGcm9tOiAobCwgbikgPT4gaW1wb3J0KGBAbmV4dC10cmFuc2xhdGUtcm9vdC9sb2NhbGVzLyR7bH0vJHtufWApLnRoZW4obSA9PiBtLmRlZmF1bHQpLFxuICAgIH0pO1xuICAiLCJpbXBvcnQgeyBjcmVhdGVTbGljZSB9IGZyb20gJ0ByZWR1eGpzL3Rvb2xraXQnXHJcblxyXG5cclxuZXhwb3J0IGNvbnN0IG1hdGNoU2xpY2UgPSBjcmVhdGVTbGljZSh7XHJcbiAgICBuYW1lOiBcInVzZXJcIixcclxuICAgIGluaXRpYWxTdGF0ZToge1xyXG4gICAgICAgIG1hdGNoSWQ6IG51bGxcclxuICAgIH0sXHJcbiAgICByZWR1Y2Vyczoge1xyXG4gICAgICAgIHNldE1hdGNoSWQ6IChzdGF0ZSwgYWN0aW9uKSA9PiB7XHJcbiAgICAgICAgICAgIHN0YXRlLm1hdGNoSWQgPSBhY3Rpb24ucGF5bG9hZFxyXG4gICAgICAgIH1cclxuICAgIH1cclxufSlcclxuXHJcblxyXG5leHBvcnQgY29uc3QgeyBzZXRNYXRjaElkIH0gPSBtYXRjaFNsaWNlLmFjdGlvbnNcclxuXHJcbmV4cG9ydCBjb25zdCBnZXRNYXRjaElkID0gc3RhdGUgPT4gc3RhdGUubWF0Y2gubWF0Y2hJZFxyXG5cclxuZXhwb3J0IGRlZmF1bHQgbWF0Y2hTbGljZS5yZWR1Y2VyIiwiaW1wb3J0IHsgY3JlYXRlU2xpY2UgfSBmcm9tICdAcmVkdXhqcy90b29sa2l0J1xyXG5cclxuXHJcbmV4cG9ydCBjb25zdCB1c2VyU2xpY2UgPSBjcmVhdGVTbGljZSh7XHJcbiAgICBuYW1lOiBcInVzZXJcIixcclxuICAgIGluaXRpYWxTdGF0ZToge1xyXG4gICAgICAgIHVzZXI6IG51bGxcclxuICAgIH0sXHJcbiAgICByZWR1Y2Vyczoge1xyXG4gICAgICAgIGxvZ2luOiAoc3RhdGUsIGFjdGlvbikgPT4ge1xyXG4gICAgICAgICAgICBzdGF0ZS51c2VyID0gYWN0aW9uLnBheWxvYWRcclxuICAgICAgICB9LFxyXG4gICAgICAgIGxvZ291dDogc3RhdGUgPT4ge1xyXG4gICAgICAgICAgICBzdGF0ZS51c2VyID0gbnVsbFxyXG4gICAgICAgIH1cclxuICAgIH1cclxufSlcclxuXHJcblxyXG5leHBvcnQgY29uc3QgeyBsb2dpbiwgbG9nb3V0IH0gPSB1c2VyU2xpY2UuYWN0aW9uc1xyXG5cclxuZXhwb3J0IGNvbnN0IHNlbGVjdFVzZXIgPSBzdGF0ZSA9PiBzdGF0ZS51c2VyLnVzZXJcclxuXHJcbmV4cG9ydCBkZWZhdWx0IHVzZXJTbGljZS5yZWR1Y2VyIiwiLy8gaW1wb3J0IHsgY3JlYXRlU3RvcmUgfSBmcm9tICdyZWR1eCdcclxuXHJcbi8vIGV4cG9ydCBjb25zdCBzdG9yZSA9IGNyZWF0ZVN0b3JlKC8qcmVkdWNlciBmdW5jdGlvbiovKHN0YXRlLCBhY3Rpb24pID0+IHtcclxuLy8gICAgIGlmIChhY3Rpb24udHlwZSA9PT0gXCJsb2dpblwiKSB7XHJcbi8vICAgICAgICAgcmV0dXJuIHtcclxuLy8gICAgICAgICAgICAgLi4uc3RhdGUsXHJcbi8vICAgICAgICAgICAgIGN1cnJlbnRVc2VyOiB7XHJcbi8vICAgICAgICAgICAgICAgICBuYW1lOiBhY3Rpb24ucGF5bG9hZC5uYW1lXHJcbi8vICAgICAgICAgICAgIH1cclxuLy8gICAgICAgICB9XHJcbi8vICAgICB9XHJcbi8vICAgICByZXR1cm4gc3RhdGVcclxuLy8gfSwge1xyXG4vLyAgICAgY3VycmVudFVzZXI6IHtcclxuLy8gICAgICAgICBuYW1lOiAnRXJpayBNdXJhZHlhbidcclxuLy8gICAgIH1cclxuLy8gfSlcclxuXHJcbmltcG9ydCB7IGNvbmZpZ3VyZVN0b3JlLCBjb21iaW5lUmVkdWNlcnMgfSBmcm9tIFwiQHJlZHV4anMvdG9vbGtpdFwiO1xyXG5pbXBvcnQgdXNlclJlZHVjZXIgZnJvbSBcIi4vZmVhdHVyZXMvdXNlclNsaWNlXCI7XHJcbmltcG9ydCBtYXRjaFJlZHVjZXIgZnJvbSBcIi4vZmVhdHVyZXMvbWF0Y2hTbGljZVwiO1xyXG5cclxuaW1wb3J0IHtcclxuICAgIHBlcnNpc3RTdG9yZSxcclxuICAgIHBlcnNpc3RSZWR1Y2VyLFxyXG4gICAgRkxVU0gsXHJcbiAgICBSRUhZRFJBVEUsXHJcbiAgICBQQVVTRSxcclxuICAgIFBFUlNJU1QsXHJcbiAgICBQVVJHRSxcclxuICAgIFJFR0lTVEVSLFxyXG4gIH0gZnJvbSAncmVkdXgtcGVyc2lzdCdcclxuICBcclxuaW1wb3J0IHN0b3JhZ2UgZnJvbSAncmVkdXgtcGVyc2lzdC9saWIvc3RvcmFnZSdcclxuXHJcbmNvbnN0IHBlcnNpc3RDb25maWcgPSB7XHJcbiAgICBrZXk6ICdyb290JyxcclxuICAgIHZlcnNpb246IDEsXHJcbiAgICBzdG9yYWdlLFxyXG59XHJcblxyXG5jb25zdCBwZXJzaXN0ZWRSZWR1Y2VyID0gcGVyc2lzdFJlZHVjZXIocGVyc2lzdENvbmZpZywgY29tYmluZVJlZHVjZXJzKCB7XHJcbiAgICB1c2VyOiB1c2VyUmVkdWNlcixcclxuICAgIG1hdGNoOiBtYXRjaFJlZHVjZXJcclxufSApIClcclxuXHJcbmV4cG9ydCBjb25zdCBzdG9yZSA9IGNvbmZpZ3VyZVN0b3JlKHtcclxuICAgIHJlZHVjZXI6IHBlcnNpc3RlZFJlZHVjZXIsXHJcbiAgICBtaWRkbGV3YXJlOiAoZ2V0RGVmYXVsdE1pZGRsZXdhcmUpID0+XHJcbiAgICAgIGdldERlZmF1bHRNaWRkbGV3YXJlKHtcclxuICAgICAgICBzZXJpYWxpemFibGVDaGVjazoge1xyXG4gICAgICAgICAgaWdub3JlZEFjdGlvbnM6IFtGTFVTSCwgUkVIWURSQVRFLCBQQVVTRSwgUEVSU0lTVCwgUFVSR0UsIFJFR0lTVEVSXSxcclxuICAgICAgICB9LFxyXG4gICAgICB9KSxcclxufSlcclxuICBcclxuZXhwb3J0IGNvbnN0IHBlcnNpc3RvciA9IHBlcnNpc3RTdG9yZShzdG9yZSlcclxuXHJcblxyXG4iLCJleHBvcnQgZGVmYXVsdCAge1wic3JjXCI6XCIvX25leHQvc3RhdGljL2ltYWdlL3B1YmxpYy9pbWFnZXMvY29tbW9uL3Bob25lLjMwMjE2MDE5MTk4MGNmM2ZlYmIxZWE0ZWY0NDUxOTRiLnBuZ1wiLFwiaGVpZ2h0XCI6MTYsXCJ3aWR0aFwiOjE2LFwiYmx1ckRhdGFVUkxcIjpcImRhdGE6aW1hZ2UvcG5nO2Jhc2U2NCxpVkJPUncwS0dnb0FBQUFOU1VoRVVnQUFBQWdBQUFBSUNBWUFBQURFRDc2TEFBQUE1MGxFUVZSNDJtUDQvLzgvdzlmM0gxZyt2M3N2L09mM2IzRWdYL0R2bno4QzN6OS9ZUUhKTVh4NSt4N0VFQUppYmlBV3VieHVweGFRRmdWaVlaQWlCaUNEOSs3K2s2cExOS0ttN20yZTdMUkNNNzU2UTFCeEhGQmM3Ti9mdjRJZ0JmekhKeTB4bnN2ZzhuOVhaWS9Ia2JiWjVxdU1rd3V2YjkybkRqS1o0Y2ZYcnhJZzQ1ZVlSTTliYWhZN2QwL0RKTmQ5elZNY1FWYjgvdlZMbk9IbnQrK0NJRHZmMzNzaXZkUTBadDVjQnRmL1M3U2lwZ0xGZUQ2L2Z5OE1zb0w1MS9jZllpQkZJTUdUVTVZYVBUNTFTUW5zeUkrZndZNEVLd0taQkxXT0g0ajV2bjM0Q1BZbUFHemxxMXdFU0hXR0FBQUFBRWxGVGtTdVFtQ0NcIn07IiwiZXhwb3J0IGRlZmF1bHQgIHtcInNyY1wiOlwiL19uZXh0L3N0YXRpYy9pbWFnZS9wdWJsaWMvaW1hZ2VzL2NvbW1vbi90cmlhbmdsZS41NGJhMzk1YjE0N2Q2ZDFkMTMyYTg5NmEwZmNmNTgwNy5wbmdcIixcImhlaWdodFwiOjcsXCJ3aWR0aFwiOjEwLFwiYmx1ckRhdGFVUkxcIjpcImRhdGE6aW1hZ2UvcG5nO2Jhc2U2NCxpVkJPUncwS0dnb0FBQUFOU1VoRVVnQUFBQWdBQUFBR0NBWUFBQUQrQmQvN0FBQUFoRWxFUVZSNDJrM0xzWTBDUUF4RTBkRmVmQUdpQVVRaGhGUkFUQkdBaEVRTDlFQW45RUJLU2cwazJHTXZQMlNscDdIc0hWWFYydllsN1FONU1waVA1Sm5iU3RHOXpPNkh1MmZpSisvVi9hK29FclpaRlN5VG5IaEg1a2JpelRrSEMrRm1qcWFOSzN0aGlQYm9ibUhCNGNYSDV5ZGlHUkhDVU5yQ24wbnNtUGRGQVVPU3ZzUHFtd0xFeUxxU0FBQUFBRWxGVGtTdVFtQ0NcIn07IiwiZXhwb3J0IGRlZmF1bHQgIHtcInNyY1wiOlwiL19uZXh0L3N0YXRpYy9pbWFnZS9wdWJsaWMvaW1hZ2VzL2NvbW1vbi91c2VyRGVmYXVsdC4wODE0YzI0YjIzOTEzOGE4MTc1ZmFkZDI1NTQyNzhhMC5wbmdcIixcImhlaWdodFwiOjM1LFwid2lkdGhcIjozNixcImJsdXJEYXRhVVJMXCI6XCJkYXRhOmltYWdlL3BuZztiYXNlNjQsaVZCT1J3MEtHZ29BQUFBTlNVaEVVZ0FBQUFnQUFBQUlDQVlBQUFERUQ3NkxBQUFBcjBsRVFWUjQyaldNTVFyQ1VCQkU5eEtDV0hnRUM4SENrMmdhUFZJQ1NpQ2doVldpdHRZbXBkZ2sybW5oRlFRbEpCcmR6UXdrQysvL1lXWVlNVE5SMVRIK0RQeEFCYzd3aHN3WWprQmh1UGlZYUJ3blNnM3ZCUVlzbkdnVVJma1ZFUVBVbjZhVXNGQlJBM1BkaFhyZWtycGRlVXM3SHdRcm5VNW02amh6OWYyQUJkNVQ4Qnp5UE9kMENmNkVtaDV1ejBJZks0ODB2VmdVN1N3TXQ1WmxWODdma0hWWklEMndBZmVHTmVpWW1kUlFBTkVUK0dwbWNBQUFBQUJKUlU1RXJrSmdnZz09XCJ9OyIsImV4cG9ydCBkZWZhdWx0ICB7XCJzcmNcIjpcIi9fbmV4dC9zdGF0aWMvaW1hZ2UvcHVibGljL2ltYWdlcy9mb290ZXIvbGVmdEJhbGwuOWQ5MTM0NThlNjEwNjkzZGNjZTdkOWIxOTE3NTVlZjIucG5nXCIsXCJoZWlnaHRcIjozNTgsXCJ3aWR0aFwiOjQ1MixcImJsdXJEYXRhVVJMXCI6XCJkYXRhOmltYWdlL3BuZztiYXNlNjQsaVZCT1J3MEtHZ29BQUFBTlNVaEVVZ0FBQUFnQUFBQUdDQVlBQUFEK0JkLzdBQUFBWTBsRVFWUjQybU1nQ05hdlc2ZjY0ZjFIS1p3S3ZuejVFdi8vLy8vNCsvY2V1QU81N0JnS2Z2MzhHUTVVRVBieTVhdkVsTlEwT3d3RmdYNWVFV3RXcjQ3NCsvZGY1T1hMMTBOOXc3TXdUSWxvYVc2S2VQZjJmZFNwMHhlQzZsb21vU2dBQUFoNkxqOStJcGduQUFBQUFFbEZUa1N1UW1DQ1wifTsiLCJleHBvcnQgZGVmYXVsdCAge1wic3JjXCI6XCIvX25leHQvc3RhdGljL2ltYWdlL3B1YmxpYy9pbWFnZXMvZm9vdGVyL21hc3RlckNhcmQuMjk0OTNkNTIyZDBlODU0ZWZjOWYxMDJhZDhmMGE4N2YucG5nXCIsXCJoZWlnaHRcIjo0MixcIndpZHRoXCI6NjksXCJibHVyRGF0YVVSTFwiOlwiZGF0YTppbWFnZS9wbmc7YmFzZTY0LGlWQk9SdzBLR2dvQUFBQU5TVWhFVWdBQUFBZ0FBQUFGQ0FZQUFBQjRrYTFWQUFBQW9FbEVRVlI0bkJXT1BRckNRQmdGNTB1TXFLUlJqQ0tZd2xyc3hKOUd1eUFlUU95OW1JMkJlQUNQSUloZ0VkUVQ2QUZNSUNBYmRsMkw5NmFZWmtUREVFaWdaMW1laUF0dzFScUNCK3E5RlQxYnBHVDVpR2VxV2JVY29pWU1mQzNmbTJPODhWMTBuQmlDamlML1ZLaTdDbktrcnp6VDZKYVN2VHpSeStoTXZUYW5Xb08yOVpNTVFoL1JMc1lVMTM5RGFCdjJ3TlR1eU1HK3c4YUtpeW5ZL1FEa1hEVnFFMHlrSndBQUFBQkpSVTVFcmtKZ2dnPT1cIn07IiwiZXhwb3J0IGRlZmF1bHQgIHtcInNyY1wiOlwiL19uZXh0L3N0YXRpYy9pbWFnZS9wdWJsaWMvaW1hZ2VzL2Zvb3Rlci92aXNhLjU2ZTlmODUxNDU3YWY4MzYwNTE4NmEzOTQ0ODRlMTFkLnBuZ1wiLFwiaGVpZ2h0XCI6MzEsXCJ3aWR0aFwiOjEwNCxcImJsdXJEYXRhVVJMXCI6XCJkYXRhOmltYWdlL3BuZztiYXNlNjQsaVZCT1J3MEtHZ29BQUFBTlNVaEVVZ0FBQUFnQUFBQUNDQVlBQUFCbGxKM3RBQUFBUlVsRVFWUjRuR004MkowZC91Q1RpSDM4UmRXL01seS9mejM1eHlET3dNQ3dINGpWZ0ZpVmtZSGhDUnRENko2OVlzei9WN3o2eHlqQ3dQRC9MMUJDSDRqL0FERVBBREQ2RlU0allRV21BQUFBQUVsRlRrU3VRbUNDXCJ9OyIsImV4cG9ydCBkZWZhdWx0ICB7XCJzcmNcIjpcIi9fbmV4dC9zdGF0aWMvaW1hZ2UvcHVibGljL2ltYWdlcy9oZWFkZXIvU29jaWFsTWVkaWEvY2xvc2VWZWN0b3IuZDFmYWFkYTdjNWRjZTdjOGYxZmJkMWZmZGU2Yzk5ZDkucG5nXCIsXCJoZWlnaHRcIjoxMyxcIndpZHRoXCI6MTMsXCJibHVyRGF0YVVSTFwiOlwiZGF0YTppbWFnZS9wbmc7YmFzZTY0LGlWQk9SdzBLR2dvQUFBQU5TVWhFVWdBQUFBZ0FBQUFJQ0FRQUFBQnVCbllBQUFBQVFVbEVRVlI0Mm1XTndRMEFJUXpEMHYwSE9Za0J5a3F3aEkva2lWQStycXMyWXRFVWNzcTB4T1JuRURGTU16N3dPVm1VY0RKRWhsL3hudlQxdE1XK2F2Y0JaUkZmV1pYS290MEFBQUFBU1VWT1JLNUNZSUk9XCJ9OyIsImV4cG9ydCBkZWZhdWx0ICB7XCJzcmNcIjpcIi9fbmV4dC9zdGF0aWMvaW1hZ2UvcHVibGljL2ltYWdlcy9oZWFkZXIvU29jaWFsTWVkaWEvZW1haWwuMjk4NmQwYzRiYjY1ZmUzYTFmNThiNmM5YmJlMTU5N2Euc3ZnXCIsXCJoZWlnaHRcIjoyMCxcIndpZHRoXCI6MjV9OyIsImV4cG9ydCBkZWZhdWx0ICB7XCJzcmNcIjpcIi9fbmV4dC9zdGF0aWMvaW1hZ2UvcHVibGljL2ltYWdlcy9oZWFkZXIvU29jaWFsTWVkaWEvZmFjZWJvb2suODVmNTI0ZTMyYWQzNzdlNzQyNGE1ZDg3MTJhNjY2NGEuc3ZnXCIsXCJoZWlnaHRcIjozNCxcIndpZHRoXCI6Mjh9OyIsImV4cG9ydCBkZWZhdWx0ICB7XCJzcmNcIjpcIi9fbmV4dC9zdGF0aWMvaW1hZ2UvcHVibGljL2ltYWdlcy9oZWFkZXIvU29jaWFsTWVkaWEvaW5zdGFncmFtLmY1ZmZkMjAwNTVhZWI4YmUyZTJhNmE2NmU3NTcyNzRlLnN2Z1wiLFwiaGVpZ2h0XCI6MzAsXCJ3aWR0aFwiOjMxfTsiLCJleHBvcnQgZGVmYXVsdCAge1wic3JjXCI6XCIvX25leHQvc3RhdGljL2ltYWdlL3B1YmxpYy9pbWFnZXMvaGVhZGVyL1NvY2lhbE1lZGlhL3Bob25lLjU1ZWU4ODE5ZTI1NDA5M2FhMzNmZGI0NzgyYjM1Y2Q0LnN2Z1wiLFwiaGVpZ2h0XCI6MjUsXCJ3aWR0aFwiOjI0fTsiLCJleHBvcnQgZGVmYXVsdCAge1wic3JjXCI6XCIvX25leHQvc3RhdGljL2ltYWdlL3B1YmxpYy9pbWFnZXMvaGVhZGVyL1NvY2lhbE1lZGlhL3RlbGVncmFtLmFmZjllM2Q5NWQ3NGZmNjExMjkyN2FjZjE2NDBlNmEzLnN2Z1wiLFwiaGVpZ2h0XCI6MzcsXCJ3aWR0aFwiOjI5fTsiLCJleHBvcnQgZGVmYXVsdCAge1wic3JjXCI6XCIvX25leHQvc3RhdGljL2ltYWdlL3B1YmxpYy9pbWFnZXMvaGVhZGVyL1NvY2lhbE1lZGlhL3ZpYmVyLjkyZDExOGMyNjc2MGY3OTZkYzMyNzgxNDcyNTFkZmZlLnN2Z1wiLFwiaGVpZ2h0XCI6MzksXCJ3aWR0aFwiOjMwfTsiLCJleHBvcnQgZGVmYXVsdCAge1wic3JjXCI6XCIvX25leHQvc3RhdGljL2ltYWdlL3B1YmxpYy9pbWFnZXMvaGVhZGVyL1NvY2lhbE1lZGlhL3dhdHN1cC5lNWMxZDA0NjhlY2I0YzgwNzMxYTY3ZTQ2MWUxOTI1My5zdmdcIixcImhlaWdodFwiOjM3LFwid2lkdGhcIjoyOX07IiwiZXhwb3J0IGRlZmF1bHQgIHtcInNyY1wiOlwiL19uZXh0L3N0YXRpYy9pbWFnZS9wdWJsaWMvaW1hZ2VzL2hlYWRlci9kcm9wZG93bl9saW5lcy4zMDI2MDk0YjE0NDllMTQyMDgzOWI4OWNlYTg1NWUxOS5wbmdcIixcImhlaWdodFwiOjE3LFwid2lkdGhcIjoyNyxcImJsdXJEYXRhVVJMXCI6XCJkYXRhOmltYWdlL3BuZztiYXNlNjQsaVZCT1J3MEtHZ29BQUFBTlNVaEVVZ0FBQUFnQUFBQUZDQVFBQUFEU21HWGVBQUFBTzBsRVFWUjQybDNHc1FtQU1CQUF3QzlzZENCQjV4UFV3bUJpbzhzZXdwZmhtZ3VYcHFiYmF3bWRVRHhhcWo1ckdFMVNiZ2liMDVGMnhmd0R5VXMwVi9WMGM2VUFBQUFBU1VWT1JLNUNZSUk9XCJ9OyIsImV4cG9ydCBkZWZhdWx0ICB7XCJzcmNcIjpcIi9fbmV4dC9zdGF0aWMvaW1hZ2UvcHVibGljL2ltYWdlcy9oZWFkZXIvZmxhZ3MvYXJtLjk0ZmRmYTlhNjIxNDM4YzU3MTUzYWMwN2IwNzljNDEyLnN2Z1wiLFwiaGVpZ2h0XCI6MjEsXCJ3aWR0aFwiOjIxfTsiLCJleHBvcnQgZGVmYXVsdCAge1wic3JjXCI6XCIvX25leHQvc3RhdGljL2ltYWdlL3B1YmxpYy9pbWFnZXMvaGVhZGVyL2ZsYWdzL2RldS5kYjkxOTM2YzIwOWQ4ZTBkNDE4MTBlYWMzMTQyOGI4ZC5zdmdcIixcImhlaWdodFwiOjIxLFwid2lkdGhcIjoyMX07IiwiZXhwb3J0IGRlZmF1bHQgIHtcInNyY1wiOlwiL19uZXh0L3N0YXRpYy9pbWFnZS9wdWJsaWMvaW1hZ2VzL2hlYWRlci9mbGFncy9lbi4xYzg1NjMwZGY0MTQ3MTcwODFlYTg2NTdlZWNhN2UyYy5zdmdcIixcImhlaWdodFwiOjIxLFwid2lkdGhcIjoyMX07IiwiZXhwb3J0IGRlZmF1bHQgIHtcInNyY1wiOlwiL19uZXh0L3N0YXRpYy9pbWFnZS9wdWJsaWMvaW1hZ2VzL2hlYWRlci9mbGFncy9lc3AuNDM3ODhkNTc1MTQ3MDZkZTllYTQyYzQyNGNiODc5MmYuc3ZnXCIsXCJoZWlnaHRcIjoyMSxcIndpZHRoXCI6MjF9OyIsImV4cG9ydCBkZWZhdWx0ICB7XCJzcmNcIjpcIi9fbmV4dC9zdGF0aWMvaW1hZ2UvcHVibGljL2ltYWdlcy9oZWFkZXIvZmxhZ3MvZnJjLmMzMmIzOTEzMTdmYjAzNzE4MzU1ZGQ4YTY4NGY1NTQxLnN2Z1wiLFwiaGVpZ2h0XCI6MjEsXCJ3aWR0aFwiOjIxfTsiLCJleHBvcnQgZGVmYXVsdCAge1wic3JjXCI6XCIvX25leHQvc3RhdGljL2ltYWdlL3B1YmxpYy9pbWFnZXMvaGVhZGVyL2ZsYWdzL3J1cy42ZWI0Y2IxNGM2NzI3MDk0ZmZiZGM3MDZmNTEzNjBhMC5wbmdcIixcImhlaWdodFwiOjIyLFwid2lkdGhcIjoyMSxcImJsdXJEYXRhVVJMXCI6XCJkYXRhOmltYWdlL3BuZztiYXNlNjQsaVZCT1J3MEtHZ29BQUFBTlNVaEVVZ0FBQUFnQUFBQUlDQVlBQUFERUQ3NkxBQUFBdVVsRVFWUjQyazNKVHdxQ1VCZ0U4TGxNWmVrcTF4WFVuU0xDQW85UmdmdXdqVUVVS0c0OGdKRDB4eHRvTzVIUWgvSmUzd2N1R3ZqQk1BTk9XVlpHMDdSUjI3WVZFZFQ5b3ZocTRDaWxESklUanV4d01xTEI5ZTdoeFg4cDcvb1E1OXRUTXU2ODBSY0FjQVN3azhCQkFYdEp1QlBlbkJxWUhtc3NUaEp6OTUvaWpUNkJwV2tIOW5pdExITWp0bU5MTXU2OHJVdzd4S2VQWVRwRTloNUJwU05JMXZVODc4TUFKOVpuV3FJUC9FVHZDVkpUajJKandpZCt0Q0NTY0FKQ045Z0FBQUFBU1VWT1JLNUNZSUk9XCJ9OyIsImV4cG9ydCBkZWZhdWx0ICB7XCJzcmNcIjpcIi9fbmV4dC9zdGF0aWMvaW1hZ2UvcHVibGljL2ltYWdlcy9oZWFkZXIvZm9vdGJhbGxlci43NTA1ZGI2ZmYyMzM0MDgyZTY1ZjU3YjE1NTA0NjkxYy5zdmdcIixcImhlaWdodFwiOjYwMCxcIndpZHRoXCI6NjYyfTsiLCJleHBvcnQgZGVmYXVsdCAge1wic3JjXCI6XCIvX25leHQvc3RhdGljL2ltYWdlL3B1YmxpYy9pbWFnZXMvaGVhZGVyL2xvZ2luLjJiOTBmNGYyMWM4MzBkYzM4NTFjYjNmYzNmMTYxOGIzLnBuZ1wiLFwiaGVpZ2h0XCI6MjEsXCJ3aWR0aFwiOjE5LFwiYmx1ckRhdGFVUkxcIjpcImRhdGE6aW1hZ2UvcG5nO2Jhc2U2NCxpVkJPUncwS0dnb0FBQUFOU1VoRVVnQUFBQWNBQUFBSUNBUUFBQUNmRFMyTkFBQUFaMGxFUVZSNDJqWE5Ld29DQVJoRjRlc0RFVGZnRG13R216WVhZTEVwR2hUR1pEVUpGcFBaQlpqTkxzSmxmUXgvR0c0NjNBTW5ldUxtN3VmdkU3V0ZnYXZZRld5dGpGekV1WERvYStrb1RvVWJCMk5OOTA0MFprcmVSMStzdlQxTnZTSXFWYkdIZVF0RXVrUmRyTG5iOFFBQUFBQkpSVTVFcmtKZ2dnPT1cIn07IiwiZXhwb3J0IGRlZmF1bHQgIHtcInNyY1wiOlwiL19uZXh0L3N0YXRpYy9pbWFnZS9wdWJsaWMvaW1hZ2VzL2hlYWRlci9sb2dpbi9mYWNlYm9vay41MDE5MzIyMGM3MDUxNjdjMGU4NTI0OTgyOTA4YTRlZS5zdmdcIixcImhlaWdodFwiOjc2LFwid2lkdGhcIjo3Nn07IiwiZXhwb3J0IGRlZmF1bHQgIHtcInNyY1wiOlwiL19uZXh0L3N0YXRpYy9pbWFnZS9wdWJsaWMvaW1hZ2VzL2hlYWRlci9sb2dpbi9nbWFpbC5iNzhiMzM1ZDdiNzFlYzViM2I5MDMzMDY1NDEyYTBmOC5zdmdcIixcImhlaWdodFwiOjc2LFwid2lkdGhcIjo3Nn07IiwiZXhwb3J0IGRlZmF1bHQgIHtcInNyY1wiOlwiL19uZXh0L3N0YXRpYy9pbWFnZS9wdWJsaWMvaW1hZ2VzL2hlYWRlci9sb2dpbi9zdWNjZXNzLmIyZjYzOWY2OTcxOTMxYjlkNDkzOWM1OTExOWU3ODU5LnBuZ1wiLFwiaGVpZ2h0XCI6MTMyLFwid2lkdGhcIjoxNDEsXCJibHVyRGF0YVVSTFwiOlwiZGF0YTppbWFnZS9wbmc7YmFzZTY0LGlWQk9SdzBLR2dvQUFBQU5TVWhFVWdBQUFBZ0FBQUFIQ0FZQUFBQTFXUXhlQUFBQThrbEVRVlI0bkFIbkFCai9BUm0rTGdBSkFRWSs3di8yamdVQUFpL3IvdFQrWWd0cTFYMFlkZUhrSWR4WUFSYStMVXJxL3VTMUJnRVVBQm9CRGYvZy9jNEJxUml0QVBmajlRQmc4RjVUQVFDOUh1RkhDRFVlMWZ2ZisrVDZ6Z1ZwRUhIL1hRQlgvV1hoY0FUVkZ0N2dBUUM2QVAraUQ2YjlCQWdFQTFycVZ2KzZHYjBBMU52VUFYSUxiLzRmQkRFQ0FRQy9HdUEzN3lnZmlSZUErL0lWOUFRSDV3UUFSK3hrL0E0VEN3VUEvUURnQVRLL1AwZk8vOEcyV3ZKaEFuSVVhd0NrNktnQWtCR01BQnNCTC83dC8vaEpBU25DTndBRS93UTYwL3ZOalRMbk56RFRFK2NBQ1FvRDBQZjgvWE1DQVFIR05EQmxPUGcrV0NVQUFBQUFTVVZPUks1Q1lJST1cIn07IiwiZXhwb3J0IGRlZmF1bHQgIHtcInNyY1wiOlwiL19uZXh0L3N0YXRpYy9pbWFnZS9wdWJsaWMvaW1hZ2VzL2hlYWRlci9sb2dpbi90d2l0dGVyLjM3MmY2ZjY4YWM0NmEwYjVhMmNiZjEwNmY2MDhlNGMyLnN2Z1wiLFwiaGVpZ2h0XCI6NzYsXCJ3aWR0aFwiOjc2fTsiLCJleHBvcnQgZGVmYXVsdCAge1wic3JjXCI6XCIvX25leHQvc3RhdGljL2ltYWdlL3B1YmxpYy9pbWFnZXMvaGVhZGVyL2xvZ2luL3ZrLmY5YTMyMWQzZGI1ZGUzYTcwNjQ4M2Q3MzA5NTgyMzMwLnN2Z1wiLFwiaGVpZ2h0XCI6NzYsXCJ3aWR0aFwiOjc2fTsiLCJleHBvcnQgZGVmYXVsdCAge1wic3JjXCI6XCIvX25leHQvc3RhdGljL2ltYWdlL3B1YmxpYy9pbWFnZXMvaGVhZGVyL2xvZ28uNmNkZjkxZmFmM2NhMTJhMDc2YzVmOTYyODE0NWZjMDQuc3ZnXCIsXCJoZWlnaHRcIjoyMjEsXCJ3aWR0aFwiOjIyMX07IiwiZXhwb3J0IGRlZmF1bHQgIHtcInNyY1wiOlwiL19uZXh0L3N0YXRpYy9pbWFnZS9wdWJsaWMvaW1hZ2VzL2hlYWRlci9yZWdpc3Rlci40NzQwM2I5OThjZTJjNTM2MTdiZmI0NmRiZjkxNGJkYS5wbmdcIixcImhlaWdodFwiOjIzLFwid2lkdGhcIjoyMyxcImJsdXJEYXRhVVJMXCI6XCJkYXRhOmltYWdlL3BuZztiYXNlNjQsaVZCT1J3MEtHZ29BQUFBTlNVaEVVZ0FBQUFnQUFBQUlDQVFBQUFCdUJuWUFBQUFBYlVsRVFWUjQyZzNFUVF2QkFCaUE0VThpSjJlWEhiU1RiSW9hS1FkcHJTd25zNnc0T1BnQkR1NysrWlAxOUw0aHBGNHFFNkVYT2orRnQ2K2xNQWhuR3c4M21WSVlodHBCYXlkMWxJaHc2VFVXZmJuYU5weU1qWlF5SDdrMlBPMFZHbXVWbFh1WVNzejZYMVU2OHo5aHZVelBOQzc3UmdBQUFBQkpSVTVFcmtKZ2dnPT1cIn07IiwiZXhwb3J0IGRlZmF1bHQgIHtcInNyY1wiOlwiL19uZXh0L3N0YXRpYy9pbWFnZS9wdWJsaWMvaW1hZ2VzL3BlcnNvbmFsL2JhbGwuN2E0MjE3ODYwZTNiMGJlNjQ0YTJjMDUzNGRmNmU2NGQucG5nXCIsXCJoZWlnaHRcIjo4ODIsXCJ3aWR0aFwiOjk1MCxcImJsdXJEYXRhVVJMXCI6XCJkYXRhOmltYWdlL3BuZztiYXNlNjQsaVZCT1J3MEtHZ29BQUFBTlNVaEVVZ0FBQUFnQUFBQUhDQVlBQUFBMVdReGVBQUFBa0VsRVFWUjQybVBBQmxhdldNWUVwRmlTRXBPWU1TVGZ2WDdLOXZueko2NmJOMjl5UFgvK2dndEZzamczai9YRDY4ZmMvLy8vNTRSaEZBV3paMHpsK1BUMkpkZnhZNGM0VTFPVHVCWXNtSStxNE9DK1hSd3ZuajdrV3IxeU9VaUNxN3lzRkZYQjVJbjlMRnMzcmVNNmUrbzQ1OTdkdXpqUG56M0hoZTVHeGdCL1AvYUovYjFjYTFldjVGeTJkQmtuQUZjblAzZXVzdnRjQUFBQUFFbEZUa1N1UW1DQ1wifTsiLCIvLyBFeHBvcnRzXG5tb2R1bGUuZXhwb3J0cyA9IHtcblx0XCJjb250YWluZXJcIjogXCJCYWxsX2NvbnRhaW5lcl9fMldsMWRcIixcblx0XCJiYWxsXCI6IFwiQmFsbF9iYWxsX18xU0tsTVwiLFxuXHRcInRleHRfd2l0aF9iYWxsXCI6IFwiQmFsbF90ZXh0X3dpdGhfYmFsbF9fN2xwSFVcIixcblx0XCJ0b3BcIjogXCJCYWxsX3RvcF9fUU41NkdcIixcblx0XCJib3R0b21cIjogXCJCYWxsX2JvdHRvbV9fMms0cTRcIlxufTtcbiIsIi8vIEV4cG9ydHNcbm1vZHVsZS5leHBvcnRzID0ge1xuXHRcImNvbnRhaW5lclwiOiBcIkZvb3Rlcl9jb250YWluZXJfX2wyRDRnXCIsXG5cdFwiY29udGVudFwiOiBcIkZvb3Rlcl9jb250ZW50X18xYnB1NlwiLFxuXHRcImJhbGxcIjogXCJGb290ZXJfYmFsbF9fMlNsM25cIlxufTtcbiIsIi8vIEV4cG9ydHNcbm1vZHVsZS5leHBvcnRzID0ge1xuXHRcImNvbnRhaW5lclwiOiBcIkxpc3RfY29udGFpbmVyX18xVHBuVlwiLFxuXHRcImJvcmRlcnNcIjogXCJMaXN0X2JvcmRlcnNfXzFSbXpiXCJcbn07XG4iLCIvLyBFeHBvcnRzXG5tb2R1bGUuZXhwb3J0cyA9IHtcblx0XCJjb250YWluZXJcIjogXCJOYXZpZ2F0aW9uX2NvbnRhaW5lcl9fMXMzbkdcIixcblx0XCJjb250ZW50XCI6IFwiTmF2aWdhdGlvbl9jb250ZW50X18zTk00QVwiXG59O1xuIiwiLy8gRXhwb3J0c1xubW9kdWxlLmV4cG9ydHMgPSB7XG5cdFwiY29udGFpbmVyXCI6IFwiUFNfY29udGFpbmVyX19zNGwxM1wiLFxuXHRcImljb25zXCI6IFwiUFNfaWNvbnNfX194SGJhXCJcbn07XG4iLCIvLyBFeHBvcnRzXG5tb2R1bGUuZXhwb3J0cyA9IHtcblx0XCJjb250YWluZXJcIjogXCJTTV9jb250YWluZXJfXzJMdkRzXCJcbn07XG4iLCIvLyBFeHBvcnRzXG5tb2R1bGUuZXhwb3J0cyA9IHtcblx0XCJjb250YWluZXJcIjogXCJTb2NpYWxNZWRpYV9jb250YWluZXJfXzFUaWRoXCIsXG5cdFwiY29udGVudFwiOiBcIlNvY2lhbE1lZGlhX2NvbnRlbnRfXzFLNnRsXCIsXG5cdFwiY29udHJvbGVyXCI6IFwiU29jaWFsTWVkaWFfY29udHJvbGVyX19raFNVUVwiLFxuXHRcInNvY2lhbF9tZWRpYXNcIjogXCJTb2NpYWxNZWRpYV9zb2NpYWxfbWVkaWFzX19VRXVDc1wiLFxuXHRcInBheW1lbnRfc3lzdGVtc1wiOiBcIlNvY2lhbE1lZGlhX3BheW1lbnRfc3lzdGVtc19fMVdTRjVcIlxufTtcbiIsIi8vIEV4cG9ydHNcbm1vZHVsZS5leHBvcnRzID0ge1xuXHRcImNvbnRhaW5lclwiOiBcIkljb25fY29udGFpbmVyX18yWExjdFwiLFxuXHRcImxhc3RfZWxlbWVudFwiOiBcIkljb25fbGFzdF9lbGVtZW50X18xTGg4U1wiXG59O1xuIiwiLy8gRXhwb3J0c1xubW9kdWxlLmV4cG9ydHMgPSB7XG5cdFwiYmFyX2NvbnRhaW5lclwiOiBcIkJhcl9iYXJfY29udGFpbmVyX18zN25EOVwiXG59O1xuIiwiLy8gRXhwb3J0c1xubW9kdWxlLmV4cG9ydHMgPSB7XG5cdFwiYmFyX2l0ZW1fY29udGFpbmVyXCI6IFwiQmFySXRlbXNfYmFyX2l0ZW1fY29udGFpbmVyX18xYm5PZVwiLFxuXHRcImF1dGhfY29udGFpbmVyXCI6IFwiQmFySXRlbXNfYXV0aF9jb250YWluZXJfXzJfNVM1XCIsXG5cdFwiYXV0aF9idXR0b25zXCI6IFwiQmFySXRlbXNfYXV0aF9idXR0b25zX18yU2hwVVwiLFxuXHRcInNpZ25fdXBfYnV0dG9uXCI6IFwiQmFySXRlbXNfc2lnbl91cF9idXR0b25fXzNfMk01XCIsXG5cdFwic2lnbl9pbl9idXR0b25cIjogXCJCYXJJdGVtc19zaWduX2luX2J1dHRvbl9fM1gtNl9cIixcblx0XCJsYW5nX2J1dHRvblwiOiBcIkJhckl0ZW1zX2xhbmdfYnV0dG9uX184am1fZ1wiLFxuXHRcImxhbmdfYnV0dG9uX2NvbnRlbnRcIjogXCJCYXJJdGVtc19sYW5nX2J1dHRvbl9jb250ZW50X18zdXk2blwiLFxuXHRcImZvcl9tb2JpbGVcIjogXCJCYXJJdGVtc19mb3JfbW9iaWxlX18xdk9DaVwiXG59O1xuIiwiLy8gRXhwb3J0c1xubW9kdWxlLmV4cG9ydHMgPSB7XG5cdFwiY29udGFpbmVyXCI6IFwiTGFuZ3VhZ2VEcm9wX2NvbnRhaW5lcl9fMjZZVU1cIixcblx0XCJ0cmFuc2l0aW9uXCI6IFwiTGFuZ3VhZ2VEcm9wX3RyYW5zaXRpb25fXzMwY1AtXCIsXG5cdFwiY29udGVudFwiOiBcIkxhbmd1YWdlRHJvcF9jb250ZW50X18yVjZuRlwiLFxuXHRcInJvd1wiOiBcIkxhbmd1YWdlRHJvcF9yb3dfXzE2RjZfXCJcbn07XG4iLCIvLyBFeHBvcnRzXG5tb2R1bGUuZXhwb3J0cyA9IHtcblx0XCJjb250YWluZXJcIjogXCJMb2dnZWRfY29udGFpbmVyX194bGVQTVwiLFxuXHRcImNvbnRlbnRcIjogXCJMb2dnZWRfY29udGVudF9fM2NFM09cIlxufTtcbiIsIi8vIEV4cG9ydHNcbm1vZHVsZS5leHBvcnRzID0ge1xuXHRcImNvbnRhaW5lclwiOiBcIkxvZ2dlZERyb3BfY29udGFpbmVyX18yUTZMUFwiLFxuXHRcInRyYW5zaXRpb25cIjogXCJMb2dnZWREcm9wX3RyYW5zaXRpb25fX1FnNDhpXCIsXG5cdFwiY29udGVudFwiOiBcIkxvZ2dlZERyb3BfY29udGVudF9fRUR0YnFcIixcblx0XCJ1c2VyX3Bob3RvX25hbWVcIjogXCJMb2dnZWREcm9wX3VzZXJfcGhvdG9fbmFtZV9fMTlnaWFcIixcblx0XCJ1c2VyX3RlbFwiOiBcIkxvZ2dlZERyb3BfdXNlcl90ZWxfXzEzQ0FGXCIsXG5cdFwibG9nT3V0XCI6IFwiTG9nZ2VkRHJvcF9sb2dPdXRfXzNlRC15XCJcbn07XG4iLCIvLyBFeHBvcnRzXG5tb2R1bGUuZXhwb3J0cyA9IHtcblx0XCJjb250YWluZXJcIjogXCJMb2dnZWRXYWxscGVyX2NvbnRhaW5lcl9fMm9STVZcIixcblx0XCJjb250ZW50XCI6IFwiTG9nZ2VkV2FsbHBlcl9jb250ZW50X18yTTFxVFwiLFxuXHRcInVzZXJfcGhvdG9cIjogXCJMb2dnZWRXYWxscGVyX3VzZXJfcGhvdG9fXzFtc3pwXCIsXG5cdFwidXNlcl9mdWxsTmFtZVwiOiBcIkxvZ2dlZFdhbGxwZXJfdXNlcl9mdWxsTmFtZV9fMld2cEZcIixcblx0XCJmdWxsbmFtZVwiOiBcIkxvZ2dlZFdhbGxwZXJfZnVsbG5hbWVfXzFHajI1XCJcbn07XG4iLCIvLyBFeHBvcnRzXG5tb2R1bGUuZXhwb3J0cyA9IHtcblx0XCJkcm9wZG93blwiOiBcIkRyb3Bkb3duX2Ryb3Bkb3duX18zQUJjcVwiLFxuXHRcInRyYW5zaXRpb25cIjogXCJEcm9wZG93bl90cmFuc2l0aW9uX18xZnpiT1wiLFxuXHRcImRyb3Bkb3duX21lbnVcIjogXCJEcm9wZG93bl9kcm9wZG93bl9tZW51X18xVW1ZN1wiLFxuXHRcImRyb3Bkb3duX2xpc3RcIjogXCJEcm9wZG93bl9kcm9wZG93bl9saXN0X18yYkcyWVwiLFxuXHRcImRyb3Bkb3duX2xpc3RfaXRlbXNcIjogXCJEcm9wZG93bl9kcm9wZG93bl9saXN0X2l0ZW1zX18ydl92V1wiLFxuXHRcImRyb3Bkb3duX2NoZWNrXCI6IFwiRHJvcGRvd25fZHJvcGRvd25fY2hlY2tfXzMwd09uXCJcbn07XG4iLCIvLyBFeHBvcnRzXG5tb2R1bGUuZXhwb3J0cyA9IHtcblx0XCJtX2NvbnRhaW5lclwiOiBcIkxvZ2luX21fY29udGFpbmVyX18yTktQVlwiLFxuXHRcIm1fY29udGVudFwiOiBcIkxvZ2luX21fY29udGVudF9fMWs4YzZcIixcblx0XCJsb2dpbl9jb250YWluZXJcIjogXCJMb2dpbl9sb2dpbl9jb250YWluZXJfX2pfTC1UXCJcbn07XG4iLCIvLyBFeHBvcnRzXG5tb2R1bGUuZXhwb3J0cyA9IHtcblx0XCJjb250YWluZXJcIjogXCJMb2dpbkZvcm1fY29udGFpbmVyX19HYWlGdlwiLFxuXHRcInRpdGxlXCI6IFwiTG9naW5Gb3JtX3RpdGxlX18zZm1qVFwiLFxuXHRcImlucHV0c1wiOiBcIkxvZ2luRm9ybV9pbnB1dHNfXzNDMTR4XCIsXG5cdFwicmVzZXRfcGFzc3dvcmRcIjogXCJMb2dpbkZvcm1fcmVzZXRfcGFzc3dvcmRfX0RwMl9GXCIsXG5cdFwic3VibWl0XCI6IFwiTG9naW5Gb3JtX3N1Ym1pdF9fM2ZIOElcIixcblx0XCJ0b19yZWdpc3Rlcl9jb250YWluZXJcIjogXCJMb2dpbkZvcm1fdG9fcmVnaXN0ZXJfY29udGFpbmVyX18zelpxcFwiLFxuXHRcInRvX3JlZ2lzdGVyX2NvbnRlbnRcIjogXCJMb2dpbkZvcm1fdG9fcmVnaXN0ZXJfY29udGVudF9fMUNGeGFcIixcblx0XCJ0b19yZWdpc3Rlcl90ZXh0XCI6IFwiTG9naW5Gb3JtX3RvX3JlZ2lzdGVyX3RleHRfXzFwMDk3XCJcbn07XG4iLCIvLyBFeHBvcnRzXG5tb2R1bGUuZXhwb3J0cyA9IHtcblx0XCJtX2NvbnRhaW5lclwiOiBcIkZvcmdvdFBhc3N3b3JkX21fY29udGFpbmVyX18yQkRTZVwiLFxuXHRcIm1fY29udGVudFwiOiBcIkZvcmdvdFBhc3N3b3JkX21fY29udGVudF9fMmtILTRcIixcblx0XCJjb250YWluZXJcIjogXCJGb3Jnb3RQYXNzd29yZF9jb250YWluZXJfXzJqTnRHXCIsXG5cdFwidGl0bGVcIjogXCJGb3Jnb3RQYXNzd29yZF90aXRsZV9fMUloOFdcIixcblx0XCJpbnB1dHNcIjogXCJGb3Jnb3RQYXNzd29yZF9pbnB1dHNfXzE5bFZ0XCIsXG5cdFwic3VibWl0XCI6IFwiRm9yZ290UGFzc3dvcmRfc3VibWl0X19xenB5clwiXG59O1xuIiwiLy8gRXhwb3J0c1xubW9kdWxlLmV4cG9ydHMgPSB7XG5cdFwibV9jb250YWluZXJcIjogXCJHZXRFbWFpbENvZGVfbV9jb250YWluZXJfX19xRkYtXCIsXG5cdFwibV9jb250ZW50XCI6IFwiR2V0RW1haWxDb2RlX21fY29udGVudF9fcmRBZDlcIixcblx0XCJjb250YWluZXJcIjogXCJHZXRFbWFpbENvZGVfY29udGFpbmVyX18zdHNIZFwiLFxuXHRcInRpdGxlXCI6IFwiR2V0RW1haWxDb2RlX3RpdGxlX18yWldGX1wiLFxuXHRcImRlc2NyaXB0aW9uXCI6IFwiR2V0RW1haWxDb2RlX2Rlc2NyaXB0aW9uX18zeWU4UlwiLFxuXHRcImlucHV0c1wiOiBcIkdldEVtYWlsQ29kZV9pbnB1dHNfXzJzMzY5XCIsXG5cdFwiZXJyb3JfaW5wdXRcIjogXCJHZXRFbWFpbENvZGVfZXJyb3JfaW5wdXRfX1J0XzFkXCIsXG5cdFwic3VjY2Vzc19pbnB1dFwiOiBcIkdldEVtYWlsQ29kZV9zdWNjZXNzX2lucHV0X18ycHBUcVwiLFxuXHRcInN1Ym1pdFwiOiBcIkdldEVtYWlsQ29kZV9zdWJtaXRfXzJHUlFJXCJcbn07XG4iLCIvLyBFeHBvcnRzXG5tb2R1bGUuZXhwb3J0cyA9IHtcblx0XCJtX2NvbnRhaW5lclwiOiBcIk5ld1Bhc3N3b3JkX21fY29udGFpbmVyX18xSVdIVFwiLFxuXHRcIm1fY29udGVudFwiOiBcIk5ld1Bhc3N3b3JkX21fY29udGVudF9fMk1CanlcIixcblx0XCJjb250YWluZXJcIjogXCJOZXdQYXNzd29yZF9jb250YWluZXJfXzNzeVFqXCIsXG5cdFwidGl0bGVcIjogXCJOZXdQYXNzd29yZF90aXRsZV9fMXFWWm5cIixcblx0XCJpbnB1dHNcIjogXCJOZXdQYXNzd29yZF9pbnB1dHNfXzNWejBrXCIsXG5cdFwic3VibWl0XCI6IFwiTmV3UGFzc3dvcmRfc3VibWl0X18za1gwT1wiXG59O1xuIiwiLy8gRXhwb3J0c1xubW9kdWxlLmV4cG9ydHMgPSB7XG5cdFwibV9jb250YWluZXJcIjogXCJTdWNjZXNzX21fY29udGFpbmVyX18zUkxTbFwiLFxuXHRcIm1fY29udGVudFwiOiBcIlN1Y2Nlc3NfbV9jb250ZW50X196bmFra1wiLFxuXHRcImNvbnRhaW5lclwiOiBcIlN1Y2Nlc3NfY29udGFpbmVyX19rZ3Bwa1wiLFxuXHRcInRpdGxlXCI6IFwiU3VjY2Vzc190aXRsZV9fM1BHVlBcIixcblx0XCJpY29uX2NvbnRhaW5lclwiOiBcIlN1Y2Nlc3NfaWNvbl9jb250YWluZXJfXzN3UEJWXCJcbn07XG4iLCIvLyBFeHBvcnRzXG5tb2R1bGUuZXhwb3J0cyA9IHtcblx0XCJjb250ZWluZXJcIjogXCJTb2NpYWxNZWRpYUljb25zX2NvbnRlaW5lcl9fMjJ5TF9cIixcblx0XCJjb250ZW50XCI6IFwiU29jaWFsTWVkaWFJY29uc19jb250ZW50X19QXy02R1wiLFxuXHRcImljb25Db250ZW50XCI6IFwiU29jaWFsTWVkaWFJY29uc19pY29uQ29udGVudF9fMmYwS0xcIixcblx0XCJpY29uQm9keVwiOiBcIlNvY2lhbE1lZGlhSWNvbnNfaWNvbkJvZHlfX0xXbExEXCIsXG5cdFwiaWNvblwiOiBcIlNvY2lhbE1lZGlhSWNvbnNfaWNvbl9fMUxVbmlcIlxufTtcbiIsIi8vIEV4cG9ydHNcbm1vZHVsZS5leHBvcnRzID0ge1xuXHRcImxvZ29fY29uYXRpbmVyXCI6IFwiTG9nb19sb2dvX2NvbmF0aW5lcl9fMWJ1TXVcIlxufTtcbiIsIi8vIEV4cG9ydHNcbm1vZHVsZS5leHBvcnRzID0ge1xuXHRcImhlYWRlcl9jb250YWluZXJfYmlnXCI6IFwiSGVhZGVyX2hlYWRlcl9jb250YWluZXJfYmlnX18xQmh5VlwiLFxuXHRcInRyYW5zaXRpb25cIjogXCJIZWFkZXJfdHJhbnNpdGlvbl9fMmhSWW9cIixcblx0XCJiYXJcIjogXCJIZWFkZXJfYmFyX19DX2dYM1wiLFxuXHRcImJhcl9jb250cm9sZXJcIjogXCJIZWFkZXJfYmFyX2NvbnRyb2xlcl9fM1JnX2lcIixcblx0XCJiYXJfY29udGVpbmVyXCI6IFwiSGVhZGVyX2Jhcl9jb250ZWluZXJfX2pnOTAwXCIsXG5cdFwiYmFyX2NvbnRlbnRcIjogXCJIZWFkZXJfYmFyX2NvbnRlbnRfXzFOMHlDXCIsXG5cdFwiYmFyX2l0ZW1zX2NvbnRcIjogXCJIZWFkZXJfYmFyX2l0ZW1zX2NvbnRfXzFTY3d6XCIsXG5cdFwiYmFyX2l0ZW1zXCI6IFwiSGVhZGVyX2Jhcl9pdGVtc19fR3ZzVndcIixcblx0XCJmb290YmFsbGVyXCI6IFwiSGVhZGVyX2Zvb3RiYWxsZXJfXzNTSU42XCIsXG5cdFwiaGVhZGVyX2NvbnRhaW5lcl9zbWFsbFwiOiBcIkhlYWRlcl9oZWFkZXJfY29udGFpbmVyX3NtYWxsX18zNzlWa1wiXG59O1xuIiwiLy8gRXhwb3J0c1xubW9kdWxlLmV4cG9ydHMgPSB7XG5cdFwiY29udGFpbmVyXCI6IFwiQnV0dG9uX2NvbnRhaW5lcl9fMTF6c1hcIixcblx0XCJjb250ZW50XCI6IFwiQnV0dG9uX2NvbnRlbnRfX3ZpQ1NXXCIsXG5cdFwiYWN0aXZlXCI6IFwiQnV0dG9uX2FjdGl2ZV9fMnFHTVdcIlxufTtcbiIsIi8vIEV4cG9ydHNcbm1vZHVsZS5leHBvcnRzID0ge1xuXHRcImNvbnRhaW5lclwiOiBcIk5hdkJhcl9jb250YWluZXJfXzFxSjdZXCIsXG5cdFwiY29udGVudFwiOiBcIk5hdkJhcl9jb250ZW50X18xR1FKZFwiLFxuXHRcInRvcF9vbl90YWJsZXRcIjogXCJOYXZCYXJfdG9wX29uX3RhYmxldF9fM0VIMzlcIixcblx0XCJib3R0b21fb25fdGFibGV0XCI6IFwiTmF2QmFyX2JvdHRvbV9vbl90YWJsZXRfX2V5ejlJXCIsXG5cdFwidGFibGV0XCI6IFwiTmF2QmFyX3RhYmxldF9fM0xQTW1cIlxufTtcbiIsIi8vIEV4cG9ydHNcbm1vZHVsZS5leHBvcnRzID0ge1xuXHRcImNvbnRhaW5lclwiOiBcIkljb25fY29udGFpbmVyX18zNE5mOVwiXG59O1xuIiwiLy8gRXhwb3J0c1xubW9kdWxlLmV4cG9ydHMgPSB7XG5cdFwiY29udGFpbmVyXCI6IFwiU29jaWFsTWVkaWFNb2RhbF9jb250YWluZXJfXzNmc1hrXCIsXG5cdFwiY29udGVudFwiOiBcIlNvY2lhbE1lZGlhTW9kYWxfY29udGVudF9fMTdGS0VcIlxufTtcbiIsIi8vIEV4cG9ydHNcbm1vZHVsZS5leHBvcnRzID0ge1xuXHRcImNvbnRhaW5lclwiOiBcIlNvY2lhbE1lZGlhX2NvbnRhaW5lcl9fMS15WW9cIlxufTtcbiIsIi8vIEV4cG9ydHNcbm1vZHVsZS5leHBvcnRzID0ge1xuXHRcImNvbnRhaW5lclwiOiBcIkNvbnRhY3RzX2NvbnRhaW5lcl9fMml0MFZcIixcblx0XCJjb250ZW50XCI6IFwiQ29udGFjdHNfY29udGVudF9fMmZkcmtcIixcblx0XCJtb2RhbF9jb250ZW50XCI6IFwiQ29udGFjdHNfbW9kYWxfY29udGVudF9fMlZlX3ZcIixcblx0XCJjb250ZW50X2NvbnRhaW5lclwiOiBcIkNvbnRhY3RzX2NvbnRlbnRfY29udGFpbmVyX18yMGNvQVwiLFxuXHRcInRvcFwiOiBcIkNvbnRhY3RzX3RvcF9fMmdUelNcIixcblx0XCJyb3dzXCI6IFwiQ29udGFjdHNfcm93c19fM1poRVRcIixcblx0XCJyb3dcIjogXCJDb250YWN0c19yb3dfX0FpWktqXCIsXG5cdFwiaW1nXCI6IFwiQ29udGFjdHNfaW1nX19kdlgtYVwiLFxuXHRcInRleHRcIjogXCJDb250YWN0c190ZXh0X18yRDlxY1wiLFxuXHRcIm9wZW5cIjogXCJDb250YWN0c19vcGVuX18zQ0hKX1wiLFxuXHRcInJpZ2h0TGVmdFwiOiBcIkNvbnRhY3RzX3JpZ2h0TGVmdF9fMnJsYjhcIixcblx0XCJjbG9zZVwiOiBcIkNvbnRhY3RzX2Nsb3NlX19WaTdnN1wiXG59O1xuIiwiLy8gRXhwb3J0c1xubW9kdWxlLmV4cG9ydHMgPSB7XG5cdFwiY29udGFpbmVyXCI6IFwiSW5wdXRDb250YWluZXJfY29udGFpbmVyX18xS3p2U1wiLFxuXHRcImxhYmVsX2NvbnRlbnRcIjogXCJJbnB1dENvbnRhaW5lcl9sYWJlbF9jb250ZW50X18yX3lBUVwiLFxuXHRcImlucHV0X2NvbnRhaW5lclwiOiBcIklucHV0Q29udGFpbmVyX2lucHV0X2NvbnRhaW5lcl9fMWJUUkpcIixcblx0XCJpbnB1dF9zdWNjZXNzX2NvbnRlbnRcIjogXCJJbnB1dENvbnRhaW5lcl9pbnB1dF9zdWNjZXNzX2NvbnRlbnRfXzF5T1pEXCIsXG5cdFwiaW5wdXRfZXJyb3JfY29udGVudFwiOiBcIklucHV0Q29udGFpbmVyX2lucHV0X2Vycm9yX2NvbnRlbnRfXzMtVzJXXCJcbn07XG4iLCIvLyBFeHBvcnRzXG5tb2R1bGUuZXhwb3J0cyA9IHtcblx0XCJtb2RhbENvbnRlaW5lclwiOiBcIk1vZGFsX21vZGFsQ29udGVpbmVyX18zZzhJZlwiLFxuXHRcInRyYW5zaXRpb25cIjogXCJNb2RhbF90cmFuc2l0aW9uX18xa2Z2OVwiLFxuXHRcIm1vZGFsQ29udGVudFwiOiBcIk1vZGFsX21vZGFsQ29udGVudF9fMS1PNDdcIlxufTtcbiIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIkBob29rZm9ybS9yZXNvbHZlcnMveXVwXCIpOzsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJAcmVkdXhqcy90b29sa2l0XCIpOzsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJheGlvc1wiKTs7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwibmV4dC10cmFuc2xhdGUvYXBwV2l0aEkxOG5cIik7OyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIm5leHQtdHJhbnNsYXRlL3VzZVRyYW5zbGF0aW9uXCIpOzsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJuZXh0L2Rpc3QvbmV4dC1zZXJ2ZXIvbGliL3JvdXRlci1jb250ZXh0LmpzXCIpOzsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJuZXh0L2Rpc3QvbmV4dC1zZXJ2ZXIvbGliL3JvdXRlci91dGlscy9nZXQtYXNzZXQtcGF0aC1mcm9tLXJvdXRlLmpzXCIpOzsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJuZXh0L2hlYWRcIik7OyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlYWN0XCIpOzsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdC1iZWF1dGlmdWwtZG5kXCIpOzsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdC1kb21cIik7OyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlYWN0LWZhY2Vib29rLWxvZ2luXCIpOzsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdC1nb29nbGUtbG9naW5cIik7OyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlYWN0LWhvb2stZm9ybVwiKTs7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVhY3QtaXNcIik7OyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlYWN0LXJlZHV4XCIpOzsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdC10b2FzdGlmeVwiKTs7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVhY3QtdHdpdHRlci1sb2dpblwiKTs7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVhY3QvanN4LWRldi1ydW50aW1lXCIpOzsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWR1eC1wZXJzaXN0XCIpOzsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWR1eC1wZXJzaXN0L2ludGVncmF0aW9uL3JlYWN0XCIpOzsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWR1eC1wZXJzaXN0L2xpYi9zdG9yYWdlXCIpOzsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJ5dXBcIik7OyIsIi8qIChpZ25vcmVkKSAqLyJdLCJzb3VyY2VSb290IjoiIn0=